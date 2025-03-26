// require('dotenv').config({path: './.env'})
import dotenv from 'dotenv';
import connectDB from './db/index.js';

dotenv.config({path: './.env'}) 

connectDB(); 















// First Approach of connecting with DB
// import mongoose from 'mongoose';
// import { DB_NAME } from './constants';
// import express from 'express';

// const app = express();

// (async () => {
//     try {
//         await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`)
//         app.on('error', (error)=>{
//             console.log("ERR: ", err);
//             throw error            
//         })
//         app.listen(process.env.PORT, ()=>{
//             console.log(`Server is running on port ${process.env.PORT}`);
//         })
//     } catch (error) {
//         console.error("ERROR: ", error);
//         throw err
//     }
// })()