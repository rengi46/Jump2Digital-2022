const mongoose = require("mongoose");

const Schema = mongoose.Schema

const mySchema = new Schema({
            id:String,
            website:String,
            name:String,
            founded:Number,
            size:String,
            locality:String,
            region:String,
            country:String,
            industry:String,
            linkedin_url:String,
})

const model = mongoose.model("backs",mySchema)
module.exports= model;