const companyModel = require("../models/companysModel")
const response = require("../services/responseModule")
const {counByType} = require("../helpers/helpers")

const getCompanysSortSize = async(req,res) => {
  try {
    //take info for the DB
    const data = await companyModel.find({});
    //sort the data with a size
    data.sort(function(a, b){
      const sizeA = Number(a.size.split("-")[1])
      const sizeB = Number(b.size.split("-")[1])
      return sizeA-sizeB
    })
    //send data in the response
    response.success(req,res,data,200)
  }catch{
    response.error(req,res,"error al cojer informacion",400)
  }
}

const getCompanysSortFounded = async(req,res) => {
  try {
    //take info for the DB
    const data = await companyModel.find({});
    //sort the data with a size
    data.sort(function(a, b){
      if(Number(a.founded) == 0){
        return 1
      }
      if(Number(b.founded) == 0){
        return -1
      }
      return Number(a.founded)-Number(b.founded)
    })
    //send data in the response
    response.success(req,res,data,200)
  }catch{
    response.error(req,res,"error al cojer informacion",400)
  }
}


const infoCompanies = async(req,res)=>{
  try {
    //take info for the DB
    const data = await companyModel.find({});
    // create temporal arra with saved all info
    const temporalArray = []
    //save type of industrys
    temporalArray.push(counByType(data,"industry"))
    //save type of size
    temporalArray.push(counByType(data,"size"))
    //save type of founded
    temporalArray.push(counByType(data,"founded"))
    //send data in the response
    response.success(req,res,temporalArray,200)
  } catch (error) {
    response.error(req,res,"error al cojer informacion",400)
  }
}




module.exports = {
  getCompanysSortSize,
  getCompanysSortFounded,
  infoCompanies
}