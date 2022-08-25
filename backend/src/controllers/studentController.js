import {StudentModel} from "../models/student.js"


export class studentController{
    static getAllDoc = async (req,res) =>{
        try {
            const result = await StudentModel.find();
            res.json(result)
        } catch (error) {
            
        }

    }
}