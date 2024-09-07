const express = require("express")
const router = express.Router()
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

router.get("/getProductdata/:id"  , (req,res)=>{
    let getProductId = parseInt(req.params.id)
    
    if(getProductId){
        try {
            let FindElement = prisma.product.findUnique({
                where: {
                    id: getProductId
                }
            })

            return res.json({
                userData: {
                    title: FindElement.title,
                    description: FindElement.description
                }
            })
        }

        catch {
            return res.json({
                msg: "Something went wrong while fetching the data"
            })
        }
    }

    else{
        res.json({
            msg:"Data not found || or given id is wrong"
        })
    }
    
   
    
})