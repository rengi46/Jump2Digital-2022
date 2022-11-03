const companyModel = require("../models/companysModel")
const response = require("../services/responseModule")
const {counByType} = require("../helpers/helpers")

const getCompanysSortSize = async(req,res) => {
  try {
    const data = await companyModel.find({});
    data.sort(function(a, b){
      const sizeA = Number(a.size.split("-")[1])
      const sizeB = Number(b.size.split("-")[1])
      return sizeA-sizeB
    })
    response.success(req,res,data,200)
  }catch{
    response.error(req,res,"error al cojer informacion",400)
  }
}

const getCompanysSortFounded = async(req,res) => {
  try {
    const data = await companyModel.find({});
    data.sort(function(a, b){
      if(Number(a.founded) == 0){
        return 1
      }
      if(Number(b.founded) == 0){
        return -1
      }
      return Number(a.founded)-Number(b.founded)
    })
    response.success(req,res,data,200)
  }catch{
    response.error(req,res,"error al cojer informacion",400)
  }
}


const infoCompanies = async(req,res)=>{
  try {
    const data = await companyModel.find({});
    const temporalArray = []
    temporalArray.push(counByType(data,"industry"))
    temporalArray.push(counByType(data,"size"))
    temporalArray.push(counByType(data,"founded"))
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