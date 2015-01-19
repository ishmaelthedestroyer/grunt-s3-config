var

  fs = require('fs'),

  filePath = __dirname + '/',

  fileName = 'awsCredentials.json';

if (!fs.existsSync(filePath + fileName)) {
  throw new Error('No AWS credentials! Add a JSON file in the directory "' + filePath + fileName +
    '" with the keys "AWSAccessKeyId", "AWSSecretKey", and "Bucket".');
}

module.exports = require(filePath + fileName);