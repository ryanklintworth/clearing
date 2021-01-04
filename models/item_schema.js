const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  name: String,
  img: String,
  price: Number,
  description: String,
  qty: Number
})

const Item = mongoose.model('Item', itemSchema)

module.exports = Item;
