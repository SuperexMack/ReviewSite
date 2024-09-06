const express = require("express")
const zod = require("zod")
const authMiddleWare = require("../AuthMiddleWare/UserAuth")
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const router = express.Router()

const validcomment = zod.object({
   content : zod.string()
})

router.post("/addCommentToproduct/:id" , authMiddleWare ,async(req,res)=>{

   let {success} = validcomment.safeParse(req.body)

   if(!success){
    return res.json({
        msg : "Data entered by you is not legit"
    })
   }


    let getuserId = req.getuserId
    if(!getuserId){
        return res.json({
            msg:"User is Not signedin/logined || Login/register to comment"
        })
    }
    
    else{

        try{
            let comment = req.body.content
            let getitemId = parseInt(req.params.id)
            console.log("The value of id is " + getitemId)
            let commentAdder = await prisma.comments.create({
                data: {
                    content: comment,
                    author: {
                        connect: { id: getuserId }
                    },
                    product: {
                        connect: { id: getitemId }
                    }
                }
            })

            if (commentAdder) {
                return res.json({
                    msg: "Comment Added successfully"
                })
            }
        }

        catch(error){
            return res.json({
                msg : "this is the catch error " + error 
            })
        }

      
    }
})

module.exports = router