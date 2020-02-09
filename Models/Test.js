var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var testSchema = new Schema({
  title: String
});

module.exports = mongoose.model('Test', testSchema);