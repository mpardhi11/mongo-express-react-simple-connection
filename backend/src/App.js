import express from 'express';
import connectDB from './db/connectDB.js';
import web from './routes/web.js';
import cors from "cors";


const app = express();
const port = process.env.PORT || 3000;
const DATABASE_URL = process.env.DATABASE_URL || "mongodb://localhost:27017";


// DataBase connecction 
connectDB(DATABASE_URL);
app.use(express.json());
app.use(cors())
app.use("/api",web)

app.listen(port,()=>{
    console.log(`Server is Listing on PORT http://localhost:${port}`);
})