'use strict';
let Awesome = require('../../index.js');
let jsonfile = require('jsonfile');
let fs = require('fs');

let nameMapArray = JSON.parse(fs.readFileSync(`${__dirname}/awesome-name-map.json`, 'utf8'));

for (let i of nameMapArray) {
  if (i.githubPath) {
    // console.log(i.githubPath);
    let options = {
      repo: i.githubPath,
      token: '590c7e534c6496b0293a738fd3c35c294c2b6275',
    };

    let a = new Awesome(options);
    a.makeIndexJson((err, res) => {console.log(res);});
  }
}
