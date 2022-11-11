require("dotenv").config()
const express = require("express");
const cors = require("cors")
const router = require("./services/routes");

const { connectDB } = require("./db/db")

var app = express();
(async () => {
        await connectDB(process.env.MONGO_URI)
        console.log("base de datos conectada");
})();

//middlewares
app.use(cors())
app.use(express.json())

//routes
app.use("/api/v1/companies",router)

const server = app.listen(5000, () => console.log(`Listening to port 5000`))


module.exports = {app,server}