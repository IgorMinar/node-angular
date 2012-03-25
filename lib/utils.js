
/**
 * @class utils
 */

var utils = module.exports = {};

utils.copyFileToApp = function(to, from, project, callback) {
  var currentDirectory = process.cwd();
  var toWriteStrem = fs.createWriteStream(currentDirectory + '/' + project + '/' + to);     
  var oldReadStream = fs.createReadStream(currentDirectory + '/' + project + '/' + from); 
  toWriteStrem.once('open', function(fd) {
    require('util').pump(oldReadStream, toWriteStrem);
  }); 
};

/* EOF */