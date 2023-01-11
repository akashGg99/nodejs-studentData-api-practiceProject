const mongoose =require('mongoose')

const studentSchema = new mongoose.Schema(
    {
        Name:{type:String, required:true},
        Subject:{type:String, required:true},
        Marks:{type:Number, required:true},
        email: {type:String, required:true},
        password:{type:String, required:true}
    },
    {timestamps:true}
)

module.exports = mongoose.model("student",studentSchema)