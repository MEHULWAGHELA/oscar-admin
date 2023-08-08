const about = require("../../Schema/about-schema/aboutSchema")

exports.getdata= (async(req,res)=>{
    try {
     const data = await about.find();
     return res.status(200).json({
         status:true,
         data:data,
         oth:"data got successfully"
     })
    } 
    catch (error) {
     return res.status(500).json({
         status:false,
         oth:"server error"
     })
    }
 })

exports.adddata= (async(req,res)=>{
    try {
        const data = await about.create(req.body)
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

exports.deletedata= (async(req,res)=>{
    try {
     const data = await about.findByIdAndDelete(req.query._id);
     return res.status(200).json({
         status:true,
         data:data,
         oth:"data deleted successfully"
     })
    } 
    catch (error) {
     return res.status(500).json({
         status:false,
         oth:"server error"
     })
    }
 })

