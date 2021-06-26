/*
*book.js
*Muksud Hussain Mahi
*ID: 301155894
*June 24, 2021
*/

let mongoose = require('mongoose');

//Create a model class
let bookModel = mongoose.Schema({
    name: String,
    author: String,
    published: String,
    description: String,
    price: Number
},
{
    collection:"books"
});

module.exports = mongoose.model('Book', bookModel);