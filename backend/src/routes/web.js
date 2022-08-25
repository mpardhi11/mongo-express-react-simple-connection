import { studentController } from "../controllers/studentController.js";
// import {Router}from "express";
import express from "express"
const router = express.Router();

router.get('/student',studentController.getAllDoc);
router.get('/hello',(req,res)=>{
    res.send("Helllo")

})


export default router;



