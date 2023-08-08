const adminform = require("../../Schema/adminForm-schema/adminFormSchema")
const jwt = require("jsonwebtoken")

exports.login= (async(req,res,next)=>{
    const { name, password } = req.body
    // Check if name and password is provided
    if (!name || !password) {
      return res.status(400).json({
        message: "name or Password not present",
      })
    }
    try {
      const user = await adminform.findOne({ name, password })
      if (!user) {
        res.status(401).json({
          message: "Invalid Username or password..please ensure to enter correct information"
        })
      } 
      else {
        var token = jwt.sign({role:user.role},process.env.SECRET_KEY,{ expiresIn: '12h' })
        let validuser = {
          token:token
        }
        res.status(200).json({
          message: "Login successful",
          data:validuser,
        })
      }
    }
     catch (error) {
      res.status(400).json({
        message: "An error occurred",
        error: error.message,
      })
    }
 })

exports.adddata= (async(req,res)=>{
    try {
        const data = await adminform.create(req.body)
         res.status(200).json({
            status:true,
            data:data,
            oth:"data added successfully"
        })
    } catch (error) {
        res.status(500).json({
            status:false,
            oth:"server error"
        })
    }
})

exports.editpassword= (async(req,res)=>{
    try {
     const data = await adminform.updateOne({_id:req.body._id},{$set:{password:req.body.password}});
     return res.status(200).json({
         status:true,
         data:data,
         oth:"image deleted successfully"
     })
    } 
    catch (error) {
     return res.status(500).json({
         status:false,
         oth:"server error"
     })
    }
 })

