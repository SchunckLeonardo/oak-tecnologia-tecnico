let mongoose = require('mongoose')

let ProductSchema = new mongoose.Schema({
    name: String,
    description: String,
    price: Number,
    disponibility: Boolean
})

module.exports = ProductSchema