const gallery = require("../../Schema/gallery-schema/gallerySchema")
const fs = require("fs");
const path =require("path")

exports.getdata= (async(req,res)=>{
    try {
     const data = await gallery.find();
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
        console.log(req.file)
        let obj ={
            title:req.body.title
        }
        const data = await gallery.create(obj)
       
         res.status(200).json({
            status:true,
            data:data,
            oth:"image added successfully"
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
     const data = await gallery.findByIdAndDelete(req.query._id);
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

