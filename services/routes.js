const express = require("express")

const { getCompanysSortSize,getCompanysSortFounded,infoCompanies } = require("../controller/companysController")

const router = express.Router()

router
    .route("/size")
    .get(getCompanysSortSize)
router
    .route("/foundation")
    .get(getCompanysSortFounded)
router
    .route("/info")
    .get(infoCompanies)

module.exports = router;
