var bodyParser = require('body-parser');
var morgan = require('morgan');

module.exports = function mountMiddleware(app) {
  // Mount our middleware including bodyParser and morgan middlewares here.
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(morgan('combined'));
};
