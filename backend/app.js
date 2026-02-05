const express = require("express")
const cors = require('cors')
const connectDB = require("./config/config")
const router = require("./routes/todoRoutes")

const app = express()

connectDB()

app.use(cors())
app.use(express.json())

app.use("/todo", router)

app.listen(3001, () => {
    console.log("server connected")
})