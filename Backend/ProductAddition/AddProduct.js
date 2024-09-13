const jwt = require("jsonwebtoken")
const express = require("express")
const authMiddleWare = require("../AuthMiddleWare/UserAuth")
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const cloudinary = require("../Photos/Cloudinary")
const router = express.Router()
const zod = require("zod")

const productDatachecker = zod.object({
    title : zod.string(),
    description : zod.string(),
    image : zod.string()
})

router.post("/AddItem", authMiddleWare, async (req, res) => {
    let checkuser = req.getuserId;  
    if (!checkuser) {
        return res.json({
            msg: "You are not logged in or registered"
        });
    }

    let { success, error } = productDatachecker.safeParse(req.body);  
    if (!success) {
        return res.json({
            msg: "The Data entered by you is not well structured",
            error: error.errors
        });
    }

    let { title, description, image } = req.body;

    console.log("Received Data:", { title, description, image });

    try {
        
        const cloudinary_res = await cloudinary.uploader.upload(image, {
            folder: "reviews",  
            use_filename: true, 
            unique_filename: true,  
            
        });

        console.log("Cloudinary Response:", cloudinary_res);

        
        let checkTitle = await prisma.product.findUnique({
            where: {
                title: title
            }
        });

        if (checkTitle) {
            return res.json({
                msg: "Title entered by you already exists in the database. Enter a new title."
            });
        }

        let imageUrl = cloudinary_res.secure_url;  

        // Add product to the database
        let ProductAddition = await prisma.product.create({
            data: {
                title: title,
                description: description,
                image: imageUrl,
                author: {
                    connect: { id: checkuser }
                }
            }
        });

        if (ProductAddition) {
            return res.json({
                msg: "Product added successfully"
            });
        } else {
            return res.json({
                msg: "Unable to create the product"
            });
        }
    } catch (error) {
        console.error("Error occurred:", error);
        return res.json({
            msg: "Something went wrong while creating the product",
            error: error.message
        });
    }
});



module.exports = router
