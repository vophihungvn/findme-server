var path = require('path');
var route = express.Router();

// APIs
var apis = require('./apis');
route.use('/api', apis);

route.get('/*', function(req, res, next) {
  res.render('index', {title: 'Find Me - Server'});
});

module.exports = route;
