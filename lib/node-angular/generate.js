
/**
 * @class angular
 * @method generate
 * @params {Object} args
 */

require('colors');

/**
 * deps
 */

var fs = require('fs')
  , path = require('path')
  , log = require('./log')

var generate = module.exports = function(args) {
  if (!args[0]) {
    console.error('node-angular'.yellow.inverse + ' generator type required!'.yellow);
  } else {
    var generator = args[0];
    switch (generator) {
      case 'scaffold':
        if (args.length < 3) {
          log('warn', 'action name, and model attributes required!');
        } else {
          // action
          var action = args[1];
          // model attributes
          var attributes = args.splice(2, args.length);
          // generate model
          var model = '\n';
          model += "var mongoose = require('mongoose)'\n";
          model += "  , Schema = mongoose.Schema\n";
          model += "  , ObjectId = Schema.ObjectId;\n\n";
          model += "var " + action + " = mongoose.model('" + action + "', {\n";
          model += "  id : { 'type' : ObjectId },\n";
          attributes.map(function(attribute) {
            if (/:/.test(attribute)) {
              var parts = attribute.split(':');
              var attributeName = parts[0];
              var attributeType = parts[1];
              model += "  " + attributeName + " : { 'type' : " + attributeType + " },\n";
            } else {
              model += "  " + attribute + " : { 'type' : String },\n";
            };
          });
          model += "  created_at : { 'type' : Date, 'default': Date.now }\n";
          model += "});\n\n";
          model += "module.exports = " + action + ";\n";
          // save model
          path.exists(process.cwd() + '/app/models/', function(exists) {
            if (exists) {
              var modelDestination = process.cwd() + '/app/models/' + action + '.js';
              fs.writeFile(modelDestination, model, 'utf8', function(error, result) {
                console.log(error, result);
              });
            } else {
              log('error', 'Not in an node-angular project!');
            };
          });
          // generate route
        };
        break;
      default:
        log('warn', 'unknown generator type!');
    };
  }
};

/* EOF */