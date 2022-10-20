const express = require("express")

const { getAllCompanys } = require("../controller/companysController")

const router = express.Router()

router
    .route("/users")
    .get(getAllCompanys)

module.exports = router;
