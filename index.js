const express = require('express');
const mongoose = require('mongoose');
const app = express();
const morgan = require('morgan');
const uuid = require('uuid');
require('dotenv/config')

app.use(morgan('dev'));
app.use(express.json())


const userRoute=require('./userRouter');


app.use('/user',userRoute)


mongoose.set('strictQuery', true)

mongoose.connect(process.env.DB_CONNECTION,(err)=>{
    if(err){
        console.log("db not connect");
        
    }
    else{
        console.log("db connected");
    }
})