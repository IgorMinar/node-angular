
/**
 * node-angjular
 */

var express = require('express')
  , colors = require('colors')
  , app = express.createServer();

app.configure('development', function(){
  app.use(express.static(__dirname + '/public'));
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.get('/welcome', function (request, response) {
  response.sendfile(__dirname + '/public/index.html');
});

exports.listen = function(port) {
  app.listen(port, function() {
    console.log('node-angular'.green.inverse + ' listening on port %s'.green, port);
  });
};

/* EOF */