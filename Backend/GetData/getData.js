const express = require("express")
const router = express.Router()
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

router.get("/getProductdata/:id"  , async (req,res)=>{
    let getProductId = parseInt(req.params.id)
    
    if(getProductId){
        try {
            let FindElement = await prisma.product.findUnique({
                where: {
                    id: getProductId
                },

                include :{
                    comments :{
                        include : {
                            author: true
                        }
                    }
                }

                
            })

           if(FindElement){
               return res.json({
                  
                title: FindElement.title,
                description: FindElement.description,
                    
                comments:FindElement.comments.map(comment=>({
                    content : comment.content,
                    author : comment.author.userName
                }))
                
               })
           }

           else {
               return res.json({
                   msg: "Product not found"
               });
           }

           
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

module.exports = router