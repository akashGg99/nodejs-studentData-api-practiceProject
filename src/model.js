const mongoose =require('mongoose')

const studentSchema = new mongoose.Schema(
    {
        Name:{type:String, required:true},
        Subject:{type:String, required:true},
        Marks:{type:Number, required:true}
    },
    {timestamps:true}
)

module.exports = mongoose.model("student",studentSchema)