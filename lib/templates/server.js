
/**
 * node-angjular
 */

var express = require('express')
  , app = express.createServer();

var port = process.env.PORT || 9000;

app.configure('development', function(){
  app.use(express.static(__dirname + '/public'));
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.listen(port, function() {
  console.log('server listening on %s', port);
});

/* EOF */