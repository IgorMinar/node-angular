
/**
 * @class angular
 * @method server
 * @param {Number} port Port to run Express/Node on
 */

var server = module.exports = function(port) {
  port = port || 8080;
  var serverFile = require(process.cwd() + '/server.js');
  serverFile.listen(port);
};

/* EOF */