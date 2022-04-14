const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    title: String,
    length: Number,
    year: Number,
  });
  const Book = mongoose.model('Book', userSchema);

  module.exports = Book