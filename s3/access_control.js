/*
  david-avatar has IAM role of readOnly access to the bucket
  while david-no-avatar does not have such role
*/
const AWS = require('aws-sdk');
// const config = require('../config');

const user = 'david-avatar';

// AWS.config.update({
//   accessKeyId: config[user].accessKeyId,
//   secretAccessKey: config[user].secretAccessKey
// });

const s3 = new AWS.S3();

const params = {
  Bucket: 'parrodise-test-2',
  Key: 'lamb_skewer.png'
};

s3.deleteObject(params, (err, res) => {
  if (err) {
    return console.log('err', err);
  }

  console.log(res);
});
