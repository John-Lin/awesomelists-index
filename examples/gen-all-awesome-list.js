/**
* This js is aimed to generate all JSON files of all awesome repos.
**/

'use strict';
let Awesome = require('../index.js');
let jsonfile = require('jsonfile');
let fs = require('fs');

let nameMapArray = JSON.parse(fs.readFileSync('../json/awesome-detailed-info.json', 'utf8'));
let opt = {
  // token is optional parameter
  token: process.env.TOKEN || 'GITHUB_TOKE',
};
for (let i of nameMapArray) {
  console.log(i.githubPath);
  opt.repo = i.githubPath;
  if (opt.repo) {
    let a = new Awesome(opt);
    a.makeIndexJson((err, res) => {console.log(res);});
  }
}
