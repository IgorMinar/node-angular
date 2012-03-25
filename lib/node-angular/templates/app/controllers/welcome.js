
/**
 * @route /welcome
 */

module.exports = controllers = function(app) {

  app.get('/welcome', function (request, response) {
    response.sendfile(__dirname + '/public/index.html');
  });

};