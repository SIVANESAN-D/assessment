//  const student=require('./imageSchema.')


// router.post('/',async(req,res)=>{
//     try{
//         console.log( req.body.name);
//         const obj= await new student({
//             phoneNumber:req.body.phoneNumber,
//             email:req.body.email,
//             password:req.body.password,
            
//             otp:req.body.otp

//         })
//         const result=await obj.save()
//         res.status(200).json(result)
        
//     }
    
//     catch( err){
//         res.status(400).json({'err':err})
//     }
    
})
// router.get('/:id',async(req,res)=>{
//     try{
//         const data=await user.find()
//         res.status(200).json(data)
//     }
//     catch(err){
//         res.status(400).json({'err':err})
// }
// })
    

// router.get('/result',(req,res)=>{ 
//     let a=10
//     res.end('mark is zero and you are pass in the exam');
    
// })
// router.get('/eee',(req,res)=>{ 
//     let a=10
//     res.end('vikrameeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee');
    
// })
// router.get('/people',(req,res)=>{ 
    
//     res.send('vishal');
    
// })
// router.get('/lg',(req,res)=>{ 

//     res.send('naresh');
    
// })
// router.put('/:id', async (req, res) => {
//     try {
        
//         const upd = await user.updateOne(
//             { _id: req.params.id }, 
//             { $set: { phoneNumber:req.body.phoneNumber,
//                 email:req.body.email,
//                 password:req.body.password,
//                 confirmPassword:req.body.confirmPassword,
//                 otp:req.body.otp

//              } }
//         );
        
    
//         res.status(200).json(upd);
//     } catch (err) {
        
//         res.status(400).json({ 'err': err });
//     }
// });