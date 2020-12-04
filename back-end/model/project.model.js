const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const projectSchema = new Schema({
  title: { type: String, required: true },
  url: { type: String },
  description: { type: String },
  screenshot: {},
});

const Project = mongoose.model('Project', projectSchema);

module.exports = Project;
