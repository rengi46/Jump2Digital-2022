require("dotenv").config()
const express = require("express");
const cors = require("cors")
const router = require("./services/routes");

const { connectDB } = require("./db/db")

var app = express();

//middlewares
app.use(cors())
app.use(express.json())

//routes
app.use("/api/v1/companies",router)

const conectdb = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(5000, () => console.log(`Listening to port 5000`))
    }
    catch{
        console.log("base de datos no conectada");
    }
}

conectdb()