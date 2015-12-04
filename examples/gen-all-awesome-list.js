'use strict';
let Awesome = require('../index.js');
let jsonfile = require('jsonfile');
let fs = require('fs');

let nameMapArray = JSON.parse(fs.readFileSync('../json/awesome-name-map.json', 'utf8'));
let opt = {};
opt.token = require('../token').token;
for (let i of nameMapArray) {
  console.log(i.githubPath);
  opt.repo = i.githubPath;
  if (opt.repo) {
    let a = new Awesome(opt);
    a.makeIndexJson((err, res) => {console.log(res);});
  }
}

// Given a repository name with author ex: vinta/awesome-python
// let py = new Awesome('veggiemonk/awesome-docker');
//
// py.makeIndexJson((err, res) => {console.log(res);});
