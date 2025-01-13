import express from "express";
import data from "./data.js";
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import seedRouter from "./routes/seedroutes.js";
import Product from "./models/productModel.js";
//  import productRouter from "./routes/productroutes.js";

dotenv.config()

mongoose.connect(process.env.MONGODB_URI)
.then(()=>{
    console.log('connected to db')
})
.catch((err)=>{
    console.log(err.message)
})

const app=express();

app.use(express.json()); 



app.use('/api/products',seedRouter)




const port=process.env.PORT|| 5000;
app.listen(port,()=>{
    console.log(`serve at http://localhost:${port}`);
})