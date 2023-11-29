const mongoose = require('mongoose')
require('dotenv').config()

const url = process.env.DB

exports.connectToDB = () => {
    mongoose.connect(url).then(() => {
        console.log("Connected to MongoDB");
    }).catch((err) => {
        console.log(err)
        console.log("Couldn't connect to MongoDB");
    })
}