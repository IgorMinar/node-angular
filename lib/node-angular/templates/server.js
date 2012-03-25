
/**
 * node-angjular
 */

var express = require('express')
  , colors = require('colors')
  , angular = new require('angular')
  , mongoose = require('mongoose')
  , app = express.createServer();

/** 
 * configure mongodb
 */

var MONGO_DB = process.env.MONGO_DB || 'mongodb://localhost/test';

/**
 * connect to mongodb
 */

mongoose.connect(MONGO_DB);

mongoose.connection.on('open', function(){
  console.log('mongodb connected'.green);
});

mongoose.connection.on('error', function(error){	
	console.error(error.red);
});

/**
 * configure express
 */

app.configure('development', function() {
  app.use(express.bodyParser());
  app.use(express.cookieParser());
  app.use(express.static(__dirname + '/public'));
  app.use(express.session({ 
    key: 'sid',
    secret: 'CHANGE_ME'
  }));
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