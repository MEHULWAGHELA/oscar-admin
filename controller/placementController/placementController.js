const placement = require("../../Schema/placement-schema/placementSchema")
const fs = require("fs");
const path =require("path")

exports.getdata= (async(req,res)=>{
    try {
     const data = await placement.find();
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
        const obj ={
            image:req.file.filename
        }
        const data = await placement.create(obj)
       
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
     const data = await placement.findByIdAndDelete(req.query._id);
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

