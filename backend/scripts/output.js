const fs = require('fs');
const path = require('path');

function handler(data, serverless, options) {
  console.log('RECEIVED STACK OUTPUT', data);

  let config = [`REACT_APP_BUCKET_NAME=${342342342424}`, `VALUE2=${2}`].join(
    `\n`
  );

  fs.writeFileSync(path.join(__dirname, `../../.${options.stage}.env`), config);
}

module.exports = { handler };
