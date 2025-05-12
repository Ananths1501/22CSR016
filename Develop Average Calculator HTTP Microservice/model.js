const express=require("express");
const mongoose=require("mongoose");
const numberSchema=new mongoose.Schema({
    numbertype: {Type : String},
    prevstate:{
        Type:Intl
    },
    rescount:{Type:Intl,default:0,max:10}
})

const Number=new mongoose.model('Number',numberSchemame);
module.exports=Number;