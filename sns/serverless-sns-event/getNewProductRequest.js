const AWS = require('aws-sdk');
const util = require('util');
const sqs = new AWS.SQS({
  region: process.env.REGION
});

const receiveMessagePromise = util.promisify(sqs.receiveMessage);

module.exports.getNewProductRequest = event => {
  receiveMessagePromise
    .call(sqs, {
      QueueUrl:
        'https://sqs.us-east-2.amazonaws.com/616874792320/NEW_PROD_REQ-QUEUE',
      MaxNumberOfMessages: 10,
    })
    .then(msg => {
      console.log(msg);
    })
    .catch(err => {
      console.log(err);
    });
};
