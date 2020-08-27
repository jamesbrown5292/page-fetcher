const request = require('request');
const fs = require('fs');
const inputArgs = process.argv.slice(2);
const url = inputArgs[0];
const localPath = inputArgs[1];
console.log(inputArgs);
request(url, (error, response) => {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
});


fs.writeFile(localPath, url, (err) => {
  if (err) {
    return console.log(err);
  }
  console.log("The file was saved.");
});