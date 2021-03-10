// asyncBreeds.js
const fs = require('fs');

const breedDetailsFromFile = function(breed, printData) {
  console.log('breedDetailsFromFile: Calling readFile...');
  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
    console.log("In readFile's Callback: it has the data.");
    printData(data);
  });
};

module.exports = breedDetailsFromFile;