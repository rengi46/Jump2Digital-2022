const express = require("express")

const { getCompanysSortSize } = require("../controller/companysController")

const router = express.Router()

router
    .route("/size")
    .get(getCompanysSortSize)
router
    .route("/foundation")
    .get(getCompanysSortSize)

module.exports = router;
