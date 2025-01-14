import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import helemet from 'helmet'
import morgan from "morgan";
import clientRoutes from "./routes/client.js";
import generalRoutes from "./routes/general.js";
import managementRoutes from "./routes/management.js";
import salesRoutes from "./routes/sales.js";


// data imports
import User from "./models/User.js";
import Product from './models/Product.js';
import ProductStat from "./models/ProductStat.js";
import Transaction from './models/Transaction.js';
import Overallstat from "./models/OverallStat.js";
import AffiliateStat from './models/AffiliateState.js';
import {dataProduct, dataProductStat, dataUser,dataTransaction,dataOverallStat,dataAffiliateStat} from "./data/index.js";



// CONFIGURATION
dotenv.config();
const app=express();
app.use(express.json())
app.use(helemet())
app.use(helemet.crossOriginResourcePolicy({policy:"cross-origin"}));
app.use(morgan("common"))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(cors());

// Routs
app.use("/client",clientRoutes);
app.use("/general",generalRoutes);
app.use("/management",managementRoutes);
app.use("/sales",salesRoutes);


// Mongoose set-up

const PORT=process.env.PORT || 9000;
mongoose.connect(process.env.MONGO_URL,{
    // useNewUrlParser:true,
    // useUnifiedTopology:true,
}).then(()=>{
    app.listen(PORT,()=>console.log(`Server Port:${PORT}`));
    // Overallstat.insertMany(dataOverallStat);
    //  Product.insertMany(dataProduct);
    //  ProductStat.insertMany(dataProductStat);
    // Transaction.insertMany(dataTransaction);
    // AffiliateStat.insertMany(dataAffiliateStat);
    // User.insertMany(dataUser);


}).catch((err)=>console.log(`${err} did not connect`));