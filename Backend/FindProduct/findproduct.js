const express = require("express")
const router = express.Router()
const zod = require("zod")
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();


const searchItem = zod.object({
    title : zod.string()
})

router.post("/findProduct" , async (req,res)=>{
    let {success} = searchItem.safeParse(req.body)
    if(!success){
        return res.json({
            msg : "The data you are entering is wrong"
        })
    }

    else{
        let getTitle = req.body.title
        try{
           let findtheProduct = await prisma.product.findUnique({
            where:{
                title : getTitle
            }
           })

           if(!findtheProduct){
            return res.json({
               msg : "Unable to find this product please enter the name properly"
            })

           }

           else{
               let getProductId = findtheProduct.id
            //    return res.redirect(`http://localhost:9000/v1/getProduct/getProductdata/${getProductId}`)
            return res.json({
                id : getProductId,
                findedItem : true
            })
           }


        }

        catch{
            res.json({
                msg : "Something went wrong while finding the product"
            })
        }
    }
})

module.exports = router