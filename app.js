import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();
const app = express();

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next();
})

import userRouter from '../backend/controllers/user-controllers';

//middlewares
app.use("/user",userRouter);

mongoose.connect(
    "mongodb://localhost:27017//"
).then(() => 
    app.listen(5000, () =>
        console.log("Connected to Database and Server is Running Successfully!")
    )    
)
.catch((error) => console.log(error));