
/**
 * @class angular
 * @method server
 * @param {Number} port Port to run Express/Node on
 */

var server = module.exports = function(args) {
  var port = (args.length > 0) ? args[0] : 9000;
  var serverFile = require(process.cwd() + '/server.js');
  serverFile.listen(port);
};

/* EOF */