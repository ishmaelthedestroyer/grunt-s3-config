var

  fs = require('fs'),

  filePath = __dirname + '/',

  fileName = 'fileConfig.json';

if (!fs.existsSync(filePath + fileName)) {
  throw new Error('No file configuration! Add a JSON file in the directory "' + filePath + fileName +
    '" with the keys "localPublicPath", "localPrivatePath", "uploadPublicPath", "uploadPrivatePath", "downloadPublicPath", and "downloadPrivatePath".');
}

module.exports = require(filePath + fileName);