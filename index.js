const AWS = require('aws-sdk');
const express = require('express');
const app = express();
const s3 = new AWS.S3();
const BUCKET_NAME = 'ncuenta2-tmp-avatars';
const GET_EXPIRES = 100;
const PUT_EXPIRES = 100;

const getAvatarKey = client_id => client_id + '/avatar.jpg';
const getSignedURL = (operation, Key, Expires) => s3.getSignedUrl(operation, {
    Bucket: BUCKET_NAME,
    Key,
    Expires
});

app.get('/avatar/url/get', (req, res) => {
  const client_id = 123;
  res.status(200).json({url: getSignedURL('getObject', getAvatarKey(client_id), GET_EXPIRES)});
});

app.get('/avatar/url/put', (req, res) => {
  const client_id = 123;
  res.status(200).json({url: getSignedURL('putObject', getAvatarKey(client_id), PUT_EXPIRES)});
});

const server = app.listen(3000, () => {
  console.log('Listening port 3000');
});
