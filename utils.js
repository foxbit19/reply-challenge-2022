const fs = require('fs');

function readInput(path, encoding = 'utf8') {
  return new Promise((resolve, reject) => {
    fs.readFile(path, encoding, (err, result) =>
      err ? reject(err) : resolve(result)
    );
  });
}

function writeOutput(path, data) {
  return new Promise((resolve, reject) => {
    fs.writeFile(path, data, (err, result) =>
      err ? reject(err) : resolve(result)
    );
  });
}

module.exports = {
  readInput,
  writeOutput,
};