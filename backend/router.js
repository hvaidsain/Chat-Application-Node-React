const express = require("express");

const router = express.Router();


router.get("/", (req,res)=>{
    res.send("Router is Running Smooth")
 })

 module.exports = router;