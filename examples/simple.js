'use strict';
let Awesome = require('../index.js');

let options = {
  repo: 'matiassingers/awesome-slack',

  // token is optional parameter
  token: process.env.TOKEN || 'GITHUB_TOKEN',
};

// Given a repository name with author ex: vinta/awesome-python
let py = new Awesome(options);

py.makeIndexJson((err, res) => {console.log(res);});
