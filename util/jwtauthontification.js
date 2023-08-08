var jwt = require('jsonwebtoken')

module.exports = (val)=>(req,res,next)=>{
    let authtoken = req.get('Authorization')
    if(!authtoken){
        return res.status(401).json({message:"authentication failed"})
    }
    let token  = authtoken.split(" ")[1]
    
    try{
        decoded = jwt.verify(token, process.env.SECRET_KEY)
        console.log(decoded)
    }
    catch(error){
        console.log('invalid token',error)
    }
    let validuser = val.includes(decoded.role)
    if(validuser == false){
        return res.status(401).json({message:"user not found as only admins are allowed access"})
    }
next()
}