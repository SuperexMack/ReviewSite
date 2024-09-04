const express = require("express")
const app = express()
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const UserAuth = require("./NormalUser/NormalUserData")
const AddProduct = require("./ProductAddition/AddProduct")
require("dotenv").config()
let SecretCode = process.env.SECRET_CODE;
console.log(SecretCode)
const PORT = process.env.PORT


app.use(express.json())


console.log("Your sever is running on the database " + process.env.DATABASE_URL)

app.use("/v1" , UserAuth)
app.use("/v1/addProduct" , AddProduct)

app.listen(PORT , (req,res)=>{
    console.log(`Your server is running on the port Number ${PORT}`)
})
