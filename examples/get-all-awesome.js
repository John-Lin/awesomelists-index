'use strict';
let Awesome = require('../index.js');
let jsonfile = require('jsonfile');
let fs = require('fs');

let nameMapArray = JSON.parse(fs.readFileSync(`${__dirname}/awesome-name-map.json`, 'utf8'));

for (let i of nameMapArray) {
  console.log(i.githubPath);
  let a = new Awesome(i.githubPath);
  a.makeIndexJson((err, res) => {console.log(res);});
}

// Given a repository name with author ex: vinta/awesome-python
// let py = new Awesome('veggiemonk/awesome-docker');
//
// py.makeIndexJson((err, res) => {console.log(res);});
