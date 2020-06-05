const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  const website = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
  // console.log('breedname: ', breedName);
  // console.log(website);

  request(website, (error, response, body) => {
    if (error) {
      callback(error);
      return;
    }

    const data = JSON.parse(response.body);

    if (data.length <= 0) {
      callback('sorry! this kitty does not exist!');
      return;
    }
  
    // console.log('status code: ', response.statusCode);
    
    callback(null, data[0].description);
  });
};

module.exports = {fetchBreedDescription};