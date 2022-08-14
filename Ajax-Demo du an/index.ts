import express, { Router } from "express";
import mongoose from "mongoose";
import { route } from "./src/routes/route";
import cors from 'cors'
import bodyParser from "body-parser";
const PORT = 3000;
const app = express()
app.use(cors())
app.use(bodyParser.json())
mongoose.connect('mongodb://localhost:27017/product_management')
app.use('', route)
app.listen(PORT,()=> {
    console.log(`Server is running on http://localhost:${PORT}`);
})

