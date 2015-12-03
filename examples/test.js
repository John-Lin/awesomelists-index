'use strict';
let Awesome = require('../index.js');

let options = {
  repo: 'sindresorhus/awesome',

  // token is optional parameter
  token: require('../token').token,
};

// Given a repository name with author ex: vinta/awesome-python
let py = new Awesome(options);

py.makeIndexJson((err, res) => {console.log(res);});
