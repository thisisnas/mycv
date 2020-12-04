const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const experienceSchema = new Schema(
  {
    title: { type: String, required: true },
    company: { type: String, required: true },
    from: { type: Date, required: true },
    to: { type: Date, required: true },
    description: { type: String },
  },
  {
    timestamps: true,
  }
);

const Experience = mongoose.model('Experience', experienceSchema);

module.exports = Experience;
