const express = require("express")
const app = express()
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

require("dotenv").config()

const PORT = process.env.PORT

app.listen(PORT , (req,res)=>{
    console.log(`Your server is running on the port Number ${PORT}`)
})
