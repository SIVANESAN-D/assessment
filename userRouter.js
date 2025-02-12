const express = require('express');
const { postImage } = require('./controller');
const { upload}=require('./Upload')
const router=express.Router()


router.post("/",upload.single("foods"),postImage)
