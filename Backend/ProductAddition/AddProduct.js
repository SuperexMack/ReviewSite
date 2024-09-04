const jwt = require("jsonwebtoken")
const express = require("express")
const authMiddleWare = require("../AuthMiddleWare/UserAuth")
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const router = express.Router()
const zod = require("zod")

const productDatachecker = zod.object({
    title : zod.string(),
    description : zod.string()
})

router.post("/AddItem" , authMiddleWare , async(req,res)=>{
    let checkuser = req.getuserId
    if(!checkuser){
        res.json({
            msg:"You are not loggedin or registered "
        })
    }
    else{
        
        let {success} = productDatachecker.safeParse(req.body)
        
        if(!success){
            return res.json({
                msg : "The Data entered by you is not well structured"
            })
        }

        let title = req.body.title
        let description = req.body.description

        console.log("third")

        try{
            console.log("try ke aandar")
            let checkTitle = await prisma.product.findUnique({
                where:{
                    title: title
                }
               
            })

            console.log("second")

            if (checkTitle) {
                return res.json({
                    msg: "Title entered by you already exist in the database enter a new title"
                })
            }
            console.log("first ")
            let ProductAddition = await prisma.product.create({
                data:{
                    title: title,
                    description: description,
                    author: {
                        connect: { id: checkuser } 
                    }
                }
            })

            console.log("aa gya mai ")

            if(ProductAddition){
                return res.json({
                    msg : "Product Added successfully"
                })
            }

            else{
                res.json({
                    msg :"Unable to create the user"
                })
            }
        }
    
        catch (error) {
            console.error("Error occurred:", error);
            res.json({
                msg: "Something went wrong while creating the product",
                error: error.message 
            });
        }

        

    }
})

module.exports = router