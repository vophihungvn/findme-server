require('./global');

var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');

var app = express();
var routes = require('./routes');

app
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .use(logger('common'))
  .use(bodyParser.json({limit: '50mb'}))
  .use(bodyParser.urlencoded({ extended: false, limit: '50mb' }))
  .use(express.static(path.join(__dirname, 'public')))
  .use('/', routes)

app.listen(config.server.port, function() {
  console.log('%s started on %s at %s://%s:%s', config.server.name, global.env, config.server.protocol, config.server.host, config.server.port);
});
