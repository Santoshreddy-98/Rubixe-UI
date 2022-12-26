const express=require('express')
const router= express.Router()
const User=require('../models/modelschema')
/* post api */
router.post('/user',async(req,res)=>{
    try{
        const newuser=new User({
            name:req.body.name,
            email:req.body.email,
            number:req.body.number
        })
        console.log(newuser)
        const saveuser=await newuser.save()
        res.status(200).json({result:'user is added',saveuser})
    }
    catch(err){
        res.status(500).json(err)
        console.log(err)
    }
})
/* get api */
router.get('/users',async(req,res)=>{
    try{
        const alldata=User.find()
        return res.json(await alldata)
    }
    catch(err){
        res.status(500).json(err)
        console.log(err)
    }
})
module.exports = router