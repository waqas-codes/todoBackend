const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/todo")
        console.log("mongoDB connected")
    } catch (error) {
        console.log(error)
    }
}

module.exports = connectDB;