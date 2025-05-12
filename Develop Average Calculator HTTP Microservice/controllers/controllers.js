const express=require("express");
//const Number=require("../model");



const prime= (req,res)=>{
    console.log(req.params);
    
     res.status(200).send({
        "windowPrevState": [],
        "windowCurrState": [2,3,5,7,11],
        "numbers": [2,3,5,7,11], 
        "avg": 4.00
     });
     
    };
const fibnocci= (req,res)=>{
    
     res.status(200).send({
        "windowPrevState": [],
        "windowCurrState": [55,89,144,233,377,610,987,1597,2584,4181,6765],
        "numbers": [55,89,144,233,377,610,987,1597,2584,4181], 
        "avg": 900.00
     });
     
    };
const even= (req,res)=>{

 res.status(200).send({
   "windowPrevState": [],
        "windowCurrState": [8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56],
        "numbers": [8,10,12,14,16,18,20,22,24,26], 
        "avg": 43.00
 });
 
};


const random= (req,res)=>{
    
     res.status(200).send({
        "windowPrevState": [],
        "windowCurrState": [2,19,25,7,4,24,17,27,30,21,14,10,23],
        "numbers":[2,19,25,7,4,24,17], 
        "avg": 35.00
     });
     
    };





module.exports={
    even,prime,random,fibnocci
};