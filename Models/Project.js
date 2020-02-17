var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var projectSchema = new Schema({
  title: {
    type: String,
    required: true,
    validate: {
      validator: (title) => /^[a-zA-Z0-9!@#$% ]{5,20}$/.test(title),
      message: "Your title should be between 5 and 20 characters long"
    },
  },
  description: String,
  category: Number,
  images: [String],
  videos: [String]
});

module.exports = mongoose.model('Project', projectSchema);