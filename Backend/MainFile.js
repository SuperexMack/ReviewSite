const express = require("express")
const app = express()
const UserAuth = require("./NormalUser/NormalUserData")
const AddProduct = require("./ProductAddition/AddProduct")
const AddComment = require("./Comments/Comments")
const FindProduct = require("./Getdata/getData")
const FindMyProduct = require("./FindProduct/findproduct")
const cors = require("cors")
require("dotenv").config()
const bodyParser = require('body-parser');
let SecretCode = process.env.SECRET_CODE;
console.log(SecretCode)
const PORT = process.env.PORT

app.use(bodyParser.json({ limit: '50mb' })); 
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(cors())
app.use(express.json())


console.log("Your sever is running on the database " + process.env.DATABASE_URL)

app.use("/v1" , UserAuth)
app.use("/v1/addProduct" , AddProduct)
app.use("/v1/addProduct/makecomment" , AddComment)
app.use("/v1/getProduct" , FindProduct)
app.use("/v1/findProduct/client" , FindMyProduct)


app.listen(PORT , (req,res)=>{
    console.log(`Your server is running on the port Number ${PORT}`)
})
