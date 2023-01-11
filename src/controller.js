const studentModel = require("./model")


const loginFn = async function(req,res){

    const {email,password}=req.body
    
    if(!email) return res.status(400).send({status:false,message:"email is required"}) 
    if(!password) return res.status(400).send({status:false,message:"password is required"}) 

    const checkData = await studentModel.findOne({email,password})

    if(!checkData) return res.status(404).send({status:false,message:"email/password incorrect."})

    return res.status(200).send({status:true, message:"login successfull"})
}

//-----------------------------------------------------------------------------------------------------//

const getStuList = async function(req,res){
    try{
        // const {name,subject}=req.query
        
        const studentList= await studentModel.find()
        return res.status(400).send({status:true, message:"Success"})
    }
    catch(err){
        return res.status(500).send({status:false, message:err.message})
    } 
}



//----------------------------------------------------------------------//

const postStuData = async function(req,res){
    try{
        const data1 = req.body
        
        const studentList= await studentModel.create(data1)
        return res.status(400).send({status:true, message:"Success", data:data1})
    }
    catch(err){
        return res.status(500).send({status:false, message:err.message})
    } 
}


//--------------------------------------------------------------------//

const updateStuData = async function(req,res){
    try{
        const {name,subject,marks}=req.body
        
        const studentUpdated = await studentModel.findOneAndUpdate({Name:name},{Name:name, Subject:subject, Marks:marks},{new:true})
        return res.status(400).send({status:true, message:"Success",data:studentUpdated})
    }
    catch(err){
        return res.status(500).send({status:false, message:err.message})
    } 
}


//--------------------------------------------------------------------//

const DeleteStuData = async function(req,res){
    try{
        const {name,subject,marks}=req.body
        
        const studentdeleted = await studentModel.findOneAndDelete({Name:name},{Name:name, Subject:subject, Marks:marks},{new:true})

        return res.status(400).send({status:true, message:"Success"})
    }
    catch(err){
        return res.status(500).send({status:false, message:err.message})
    } 
}



module.exports = {loginFn,getStuList,postStuData,updateStuData,DeleteStuData}