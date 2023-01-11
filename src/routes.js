const { Router } = require("express");
const router = Router()

const{loginFn,getStuList,DeleteStuData,postStuData,updateStuData}=require('./controller')


router.post("/login",loginFn)

router.post("/studentnew",postStuData)
router.get("/students",getStuList)
router.put("/studentupdate",updateStuData)
router.delete("/studentdel",DeleteStuData)

