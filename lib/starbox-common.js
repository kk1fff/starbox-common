var secure = require('./secure.js');

exports.getModule = function(moduleName) {
  if (moduleName == 'secure') {
    return secure;
  }
  throw ('Unable to get module: ' + moduleName);
}
