const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const educationSchema = new Schema({
  title: { type: String, required: true },
  school: { type: String, required: true },
  from: { type: Date, required: true },
  to: { type: Date, required: true },
  description: { type: String },
});

const Education = mongoose.model('Education', educationSchema);

module.exports = Education;
