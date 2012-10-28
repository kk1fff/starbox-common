var crypto = require('crypto');

var SALT_LEN = 4;
var CHARLIST = "abcdefghijklmnopqrstuvwxyz" +
  "ABCDEFGHIJKLMNOPQRSTUVWXYZ" +
  "1234567890";

exports.getKey = function(salt, password) {
  var salt = salt.substring(0, SALT_LEN);
  var rawKey = '' + salt + password;
  var hash = crypto.createHash('sha512');
  hash.update(rawKey, 'utf8');
  return '' + salt + hash.digest('base64');
};

exports.retrieveSalt = function(key) {
  return key.substring(0, SALT_LEN);
};

exports.generateSalt = function(cb) {
  crypto.randomBytes(SALT_LEN, function(buf) {
    var res = '';
    for (var i = 0; i < buf.length; ++i) {
      res += CHARLIST.charAt(buf[i] % CHARLIST.length);
    }
    cb(res);
  });
};
