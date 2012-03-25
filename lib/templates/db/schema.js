
var mongoose = require('mongoose')
  , Schema  = mongoose.Schema
  , ObjectId = Schema.ObjectId;

var Model = {

};

Object.keys Model).forEach(function (model) {
  if (Model[model].updated_at !== undefined) {
    model.pre('save', function(next) {
      this.updated_at = Date.now();
      next();
    });
  };
});

module.exports = Model;