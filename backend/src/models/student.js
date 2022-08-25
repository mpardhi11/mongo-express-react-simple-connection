import mongoose from "mongoose";

// 
const studentSchema = new mongoose.Schema({
    stuname:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        trim:true
    }
})

                                        // 1) DB name 2) schema 
export const StudentModel = mongoose.model("student",studentSchema);