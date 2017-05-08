import path from 'path';
let route = express.Router();

// APIs
let apis = require('./apis');
route.use('/api', apis);

route.get('/*', function(req, res, next) {
  res.render('index', {title: 'Find Me - Server'});
});

export default route;
