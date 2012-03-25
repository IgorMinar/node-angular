
/**
 * node-angular
 */

var fs = require('fs');

/**
 * @class utils
 */

var utils = require('./utils');

/**
 * @class angular
 */

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
  var packageFile = __dirname + '/../package.json';
  var data = fs.readFileSync(packageFile).toString();
  return JSON.parse(data).version;
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
  var project = args[0];
  console.log('create'.green + ' ' + project + '/');
  fs.mkdirSync(process.cwd() + '/' + project);
  console.log('create'.green + ' ' + project + '/app/');
  fs.mkdirSync(process.cwd() + '/' + project + '/app/');
  utils.copyFileToApp('server.js', project);
  console.log('create'.green + ' ' + project + '/app/controllers/');
  fs.mkdirSync(process.cwd() + '/' + project + '/app/controllers/');
  console.log('create'.green + ' ' + project + '/app/models/');
  fs.mkdirSync(process.cwd() + '/' + project + '/app/models/');
  utils.copyFileToApp('/app/controllers/welcome.js', project);
  console.log('create'.green + ' ' + project + '/public/');
  fs.mkdirSync(process.cwd() + '/' + project + '/public/');
  console.log('create'.green + ' ' + project + '/public/javascripts/');
  fs.mkdirSync(process.cwd() + '/' + project + '/public/javascripts/');
  console.log('create'.green + ' ' + project + '/public/javascripts/vendor/');
  fs.mkdirSync(process.cwd() + '/' + project + '/public/javascripts/vendor/');
  utils.copyFileToApp('public/javascripts/app.js', project);
  utils.copyFileToApp('public/javascripts/vendor/angular-1.0.0rc2.min.js', project);
  console.log('create'.green + ' ' + project + '/public/stylesheets/');
  fs.mkdirSync(process.cwd() + '/' + project + '/public/stylesheets/');
  utils.copyFileToApp('public/index.html', project);
  console.log('create'.green + ' ' + project + '/public/partials/');
  fs.mkdirSync(process.cwd() + '/' + project + '/public/partials/');
  utils.copyFileToApp('public/partials/welcome.html', project);
  utils.copyFileToApp('package.json', project);
  console.log('create'.green + ' ' + project + '/test/');
  fs.mkdirSync(process.cwd() + '/' + project + '/test/');
  utils.copyFileToApp('test/index.test.js', project);
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
  var serverFile = require(process.cwd() + '/server.js');
  serverFile.listen(port);
};

/**
 * @class angular
 * @method help
 */

angular.help = function() {
  console.log([
    '\nNODE-ANGULAR'.green.inverse,
    '\nUsage: angular <command> <arguments>'.green,
    'Commands:'.gray,
    ' -v, --version'.green + '    current node-angular version',
    ' -n, --new'.green + '        generate new node-angular project',
    ' -g --generate'.green + '    generate a new code template',
    ' -h, --help'.green + '       display available commands',
    ''
  ].join('\n'));
};

/**
 * @class angular
 * @method load
 */

angular.load = require('./loader').load;

/* EOF */