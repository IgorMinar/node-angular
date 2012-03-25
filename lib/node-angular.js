
/**
 * node-angular
 */

var fs = require('fs');

var angular = module.exports = function(){};

/**
 * ANSI CLI Terminal Colors
 */

require('colors');

/**
 * @class angular
 * @method version
 */

angular.version = function() {
  return 'v0.0.1';
};

/**
 * @class angular
 * @method init (new)
 * @params {Object} args
 */

angular.init = function(args) {
  if (!args[0]) {
  	return;
  };
  var projectName = args[0]
  console.log('create'.green + ' ' + projectName + '/');
  fs.mkdirSync(__dirname + '/' + projectName);
  console.log('create'.green + ' ' + projectName + '/app/');
  fs.mkdirSync(__dirname + '/' + projectName + '/app/');
};

/**
 * @class angular
 * @method generate
 * @params {Object} args
 */

angular.generate = function(args) {
  
};

/**
 * @class angular
 * @method routes
 */

angular.routes = function() {

};

/**
 * @class angular
 * @method server
 * @param {Number} port Port to run Express/Node on
 */

angular.server = function(port) {
  port = port || 8080;
};

/**
 * @class angular
 * @method help
 */

angular.help = function() {
  console.log([
    '\nNODE-ANGULAR'.yellow.inverse,
    '\nUsage: angular <command> <arguments>'.yellow,
    'Commands:'.gray,
    ' -v, --version'.green + '    current node-angular version',
    ' -n, --new'.green + '        generate new node-angular project',
    ' -g --generate'.green + '    generate a new code template',
    ' -h, --help'.green + '       display available commands',
    ''
  ].join('\n'));
};

/* EOF */