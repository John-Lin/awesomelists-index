/**
* This js is aimed to generate all JSON files of all awesome repos in series.
**/

'use strict';
let Awesome = require('../index.js');
let jsonfile = require('jsonfile');
let asyncjs = require('async');

let nameMapArray = jsonfile.readFileSync('../json/awesome-detailed-info.json');
let githubPaths = nameMapArray.map((i) => {return i.githubPath;});
let opt = {
  // token is optional parameter
  token: process.env.TOKEN || 'GITHUB_TOKEN',
};

function gotAwesomelist(arg, callback) {
  opt.repo = arg;
  let a = new Awesome(opt);
  a.makeIndexJson((err, res) => {
    console.log(res);
    callback(err, res);
  });
}

asyncjs.eachSeries(githubPaths, gotAwesomelist);
