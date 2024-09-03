// this page is going to keep the user login and other details

const express = require("express")
const router = express.Router()
const jwt = require("jsonwebtoken")
const zod = require("zod")
require("dotenv").config()
let SecretCode = process.env.SECRET_CODE;
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
console.log(SecretCode)

const checkuserRegister = zod.object({
    email : zod.string().email(),
    password : zod.string(),
    userName : zod.string()
})

router.post("/register", async (req,res)=>{
   let  { success } = checkuserRegister.safeParse(req.body)

   console.log("i am here")
   if(!success){
    return res.json({
        msg:"Your details are wrong you need to improve them"
    })
   }

   console.log("yahan tak nahi aa paya")

    let email = req.body.email
    let password = req.body.password
    let userName = req.body.userName
    
    try{
        console.log("mai yahan hun")
        
        let userChecker = await prisma.normalUser.findUnique({
            where:{
                email : email,
            }
        })

        console.log("baad aaya")
        if(userChecker){
            res.json({
                msg:"User like this already exist so try to add a new email"
            })
        }
        else{
            let newCreatedUser = await prisma.normalUser.create({
                data:{
                    email : email,
                    password : password,
                    userName : userName
                }
            })

            console.log("token se pehle")
            
            console.log("jaadi")
            const UserId = newCreatedUser.id
            const token = jwt.sign({UserId} , SecretCode)
            console.log("token is here")
            return res.json({
                token:token,
                msg :"User created successfully || Welcome to site sir"
            })
        }
        
    }

    catch{
        res.json({
            msg:"Unable to create a user due to some errors"
        })
    }
})


const checkLogin = zod.object({
    email: zod.string().email,
    password: zod.string(),
})

router.post("/Login", async (req, res) => {
    const { success } = checkLogin.safeParse(req.body)
    if (!success) {
        res.json({
            msg: "Your details are wrong you need to improve them"
        })
    }

    let email = req.body.email
    let password  = req.body.password

    try {
        let userChecker = await prisma.normalUser.findUnique({
            where: {
                email: email,
                password:password
            }
        })
        if (!userChecker) {
            res.json({
                msg: "User like this already exist so try to add a new email"
            })
        }
        else {
            

            const UserId = userChecker.id
            const token = jwt.sign({ UserId }, SecretCode)
            return res.json({
                msg: token,
                msg: "Welcome Back to the site again"
            })
        }

    }

    catch {
        res.json({
            msg: "Something went wrong while finding the user"
        })
    }
})

module.exports = router
