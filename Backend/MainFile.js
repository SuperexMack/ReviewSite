const express = require("express")
const app = express()
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

require("dotenv").config()

const PORT = process.env.PORT

console.log("Your sever is running on the database " + process.env.DATABASE_URL)

app.listen(PORT , (req,res)=>{
    console.log(`Your server is running on the port Number ${PORT}`)
})
