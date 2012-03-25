
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
          /*
            create  app/models/post.js
            create  app/controllers/posts_controller.js
            create  app/helpers/posts_helper.js
            create  app/views/layouts/posts_layout.ejs
            create  public/stylesheets/scaffold.css
            create  app/views/posts/  
            create  app/views/posts/_form.ejs
            create  app/views/posts/new.ejs
            create  app/views/posts/edit.ejs
            create  app/views/posts/index.ejs
            create  app/views/posts/show.ejs
            patch   config/routes.js
          */
        };
        break;
      default:
        console.error('node-angular'.yellow.inverse + ' unknown generator type!'.yellow);
    };
  }
};

/* EOF */