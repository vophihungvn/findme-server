var fs = require('fs');
var path = require('path');

var versions = fs.readdirSync(__dirname);
var route = express.Router();

_.each(versions, function (version) {
  var versionPath = path.join(__dirname, version);
  if(fs.lstatSync(versionPath).isDirectory()) {
    var modules = fs.readdirSync(versionPath);
    var subRoute = express.Router();
    _.each(modules, function(module) {
      var moduleName = module.replace('.route.js', '');
      subRoute.use('/' + moduleName, require(path.join(versionPath, module)));
    });
    route.use('/' + version, subRoute);
  }
});

module.exports = route;
