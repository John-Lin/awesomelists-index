'use strict';
let Awesome = require('../index.js');

let options = {
  repo: 'vinta/awesome-python',
  token: '<GITHUB AUTH TOKEN>',
};

// Given a repository name with author ex: vinta/awesome-python
let py = new Awesome(options);

py.makeIndexJson((err, res) => {console.log(res);});
