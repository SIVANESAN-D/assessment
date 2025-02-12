const expressHandler= require("express-async-handler")
const image = require('./userSchema')
const postImage= expressHandler(async(req,res)=>{
    try{
        if (!req.file) {
            return res.status(500).json({error:"no file"})}
            const image = new image({
                filename:req.file.filename,
                filepath: req.file.path
            })
            const savedimage=await imagefile.save()
            res.status(200).json(savedimage)
    } catch(error){
        console.log(error);
        
    }
})
module.exports={postImage}