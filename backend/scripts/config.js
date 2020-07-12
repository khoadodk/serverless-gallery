const fs = require('fs');
const path = require('path');

function handler(data, serverless, options) {
  console.log('RECEIVED STACK OUTPUT', data);
  console.log('RECEIVED STACK serverless', serverless);

  let config = [
    `REACT_APP_AWS_REGION=${options.region}`,
    `REACT_APP_ENVIRONMENT=${options.stage}`,
    `REACT_APP_USER_POOL_ID=${data.UserPoolId}`,
    `REACT_APP_ENDPOINT=${data.ServiceEndpoint}`,
    `REACT_APP_IDENTITY_POOL_ID=${data.IdentityPoolId}`,
    `REACT_APP_PICTURES_TABLE=${data.PicturesTableName}`,
    `REACT_APP_PICTURES_BUCKET=${data.PicturesBucketName}`,
    `REACT_APP_FRONT_END_BUCKET=${data.FrontEndBucketName}`,
    `REACT_APP_USER_POOL_CLIENT_ID=${data.UserPoolClientId}`,
    `REACT_APP_CLOUDFRONT_URL=https://${data.ProServerlessCloudFrontDistribution}`,
    `REACT_APP_FRONT_END_S3_URL=http://${data.FrontEndBucketName}.s3.amazonaws.com`
  ].join(`\n`);

  fs.writeFileSync(path.join(__dirname, `../../.${options.stage}.env`), config);
}

module.exports = { handler };
