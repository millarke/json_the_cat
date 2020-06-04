const arg = process.argv;
const request = require('request');
const website = `https://api.thecatapi.com/v1/breeds/search?q=${arg[2]}`;
// website.setEncoding('UTF8');

request(website, (error, response, body) => {
  if (error) {
    console.log('error: ', error);
    return;
  }

  if (body === '[]') {
    console.log('sorry! this kitty does not exist!');
    return;
  }

  // console.log('status code: ', response.statusCode);
  
  const data = JSON.parse(body);
  console.log(data[0].description);
});