const request = require('request');

// URL - api function requested

const fetchBreedDescription = function(breedName, callback) {

  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;

  request(url, (error, response, body) => {
    
    if (error) {
      callback(error, null);
      return;
    }
    const data = JSON.parse(body);
    // In case breed is not found
    if (data.length === 0) {
      let notFound = 'Breed not found, try again.';
      callback(null, notFound);
      return;
    }
    //Print Description only
    const desc = data[0].description;
    callback(null, desc);
    return;
  });
};

module.exports = { fetchBreedDescription };