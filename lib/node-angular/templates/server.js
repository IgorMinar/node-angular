
/**
 * node-angjular
 */

var express = require('express')
  , colors = require('colors')
  , angular = new require('angular')
  , app = express.createServer();

/**
 * configure express
 */

app.configure('development', function(){
  app.use(express.static(__dirname + '/public'));
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

/**
 * initialize controllers & models
 */

angular.load('models', '/app/models/');
angular.load('controllers', '/app/controllers/', app);

/**
 * http.Server.listen()
 */

exports.listen = function(port) {
  app.listen(port, function() {
    console.log('node-angular'.green.inverse + ' listening on port %s'.green, port);
  });
};

/* EOF */