
/**
 * @class angular
 * @method init (new)
 * @params {Object} args
 */
 
require('colors');

var fs = require('fs')
  , utils = require('./utils');

var init = module.exports = function(args) {
  if (!args[0]) {
    console.log('"new" requires a project name (String)'.yellow);
    return;
  };
  var project = args[0];
  console.log('create'.green + ' /' + project + '/');
  fs.mkdirSync(process.cwd() + '/' + project);
  console.log('create'.green + ' /' + project + '/app/');
  fs.mkdirSync(process.cwd() + '/' + project + '/app/');
  utils.copyFileToApp('server.js', project);
  console.log('create'.green + ' /' + project + '/app/config/');
  fs.mkdirSync(process.cwd() + '/' + project + '/app/config/');
  console.log('create'.green + ' /' + project + '/app/controllers/');
  fs.mkdirSync(process.cwd() + '/' + project + '/app/controllers/');
  console.log('create'.green + ' /' + project + '/app/models/');
  fs.mkdirSync(process.cwd() + '/' + project + '/app/models/');
  utils.copyFileToApp('app/controllers/welcome.js', project);
  console.log('create'.green + ' /' + project + '/public/');
  fs.mkdirSync(process.cwd() + '/' + project + '/public/');
  console.log('create'.green + ' /' + project + '/public/javascripts/');
  fs.mkdirSync(process.cwd() + '/' + project + '/public/javascripts/');
  console.log('create'.green + ' /' + project + '/public/javascripts/vendor/');
  fs.mkdirSync(process.cwd() + '/' + project + '/public/javascripts/vendor/');
  utils.copyFileToApp('public/javascripts/app.js', project);
  utils.copyFileToApp('public/javascripts/vendor/angular-1.0.0rc2.min.js', project);
  console.log('create'.green + ' /' + project + '/public/stylesheets/');
  fs.mkdirSync(process.cwd() + '/' + project + '/public/stylesheets/');
  utils.copyFileToApp('public/index.html', project);
  console.log('create'.green + ' /' + project + '/public/partials/');
  fs.mkdirSync(process.cwd() + '/' + project + '/public/partials/');
  utils.copyFileToApp('public/partials/welcome.html', project);
  utils.copyFileToApp('package.json', project);
  console.log('create'.green + ' /' + project + '/test/');
  fs.mkdirSync(process.cwd() + '/' + project + '/test/');
  utils.copyFileToApp('test/index.test.js', project);
};