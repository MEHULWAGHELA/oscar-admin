const form = require("../../Schema/contactUs-schema/formSchema")
const nodemailer = require('nodemailer');
 
 
let mailTransporter = nodemailer.createTransport({
    service: 'oscarcareerpoint',
    auth: {
        user: 'info@oscarcareerpoint.com',
        pass: 'fldggarfhwdjpmfo'
    }
});


const obj = (x)=>{
    return {
        from: 'info@oscarcareerpoint.com',
        to: x,
        subject: 'Oscar Career Point',
        text: 'Hello..!! Thank you for and checking out Oscar Career Point! We will respond to you within one day. In the meantime, you can also reach us on the phone at +91 9157929797. We hope you are having a great day! Oscar Career Point.'
}
}



exports.getdata= (async(req,res)=>{
    try {
     const data = await form.find();
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
    console.log(req.body)
    try {
        mailTransporter.sendMail(obj(req.body.email), function(err, data) {
            if(err) {
                console.log('Error Occurs');
            } else {
                console.log('Email sent successfully');
            }
        });
        const data = await form.create(req.body)
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
     const data = await form.findByIdAndDelete(req.query._id);
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

