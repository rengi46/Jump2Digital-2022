const companyModel = require("../models/companysModel")

const getAllCompanys = async() => {

    const data = await companyModel.find({ });
    console.log(data);
}

module.exports = {
    getAllCompanys,
}