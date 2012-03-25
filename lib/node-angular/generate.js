
/**
 * @class angular
 * @method generate
 * @params {Object} args
 */

require('colors')

var generate = module.exports = function(args) {
  if (!args[0]) {
    console.error('node-angular'.yellow.inverse + ' generator type required!'.yellow);
  } else {
    var generator = args[0];
    switch (generator) {
      case 'scaffold':
        if (args.length < 3) {
          console.error('node-angular'.yellow.inverse + ' action name, and model attributes required!'.yellow);
        } else {
          console.log(args);
          var action = args[1];
          var attributes = args.splice(2, args.length);
          console.log('generating ' + action.green);
          console.log(attributes);
        };
        break;
      default:
        console.error('node-angular'.yellow.inverse + ' unknown generator type!'.yellow);
    };
  }
};

/* EOF */