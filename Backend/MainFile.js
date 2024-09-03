const express = require("express")
const app = express()
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const UserAuth = require("./NormalUser/NormalUserData")
require("dotenv").config()
let SecretCode = process.env.SECRET_CODE;
console.log(SecretCode)
const PORT = process.env.PORT

<<<<<<< HEAD
app.use(express.json())


console.log("Your sever is running on the database " + process.env.DATABASE_URL)

app.use("/v1" , UserAuth)

=======
>>>>>>> 26d01d9fa930ec11c70e3d02136058376d1d625e
app.listen(PORT , (req,res)=>{
    console.log(`Your server is running on the port Number ${PORT}`)
})
