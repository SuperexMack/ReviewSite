const jwt = require("jsonwebtoken")
require("dotenv").config()
const secretCode = process.env.SECRET_CODE


const authMiddleWare = (req,res,next)=>{
   let checkTheAuthorization = req.headers.authorization
   if(!checkTheAuthorization.startsWith("Bearer ") || !checkTheAuthorization){
    return res.json({
        msg : "Add Bearer so that we can allow you to take any of the action"
    })

   }
    let get_Token = checkTheAuthorization.split(" ")[1]

    

    try{
       let headersData = jwt.verify(get_Token , secretCode)
        if (headersData.UserId){
            console.log(headersData.UserId)
            req.getuserId = headersData.UserId
            next()
       }
       else{
        return res.json({
            msg:"something went wrong while verifying the user"
        })
       }
    }

    catch{
       res.json({
        msg:"Something went wrong while auth middleware"
       })
    }

}

module.exports = authMiddleWare