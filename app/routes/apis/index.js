import fs from 'fs';
import path from 'path';

let versions = fs.readdirSync(__dirname);
let route = express.Router();

_.each(versions, function (version) {
  let versionPath = path.join(__dirname, version);
  if(fs.lstatSync(versionPath).isDirectory()) {
    let modules = fs.readdirSync(versionPath);
    let subRoute = express.Router();
    _.each(modules, function(module) {
      let moduleName = module.replace('.route.js', '');
      subRoute.use('/' + moduleName, require(path.join(versionPath, module)));
    });
    route.use('/' + version, subRoute);
  }
});

export default route;
