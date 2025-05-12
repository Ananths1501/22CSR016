const express=require("express");
const router=express.Router();
const {prime,fibnocci,random,even}=require("../controllers/controllers");
router.get("/p",prime);
router.get("/f",fibnocci);
router.get("/e",even);
router.get("/r",random);

module.exports=router;