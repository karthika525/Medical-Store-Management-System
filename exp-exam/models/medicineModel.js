const mongoose = require('mongoose');

const medicineSchema = new mongoose.Schema({
  userId: mongoose.Schema.Types.ObjectId,
  name: String,
  stock: Number,
  addedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Medicine', medicineSchema);
