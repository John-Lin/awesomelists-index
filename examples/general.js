'use strict';
let Awesome = require('../index.js');
let list = require('../json/awesome.json');

let keys = Object.keys(list);

for (let i = 0, len = keys.length; i < len; ++i) {
  let user = list[keys[i]].split('/')[3];
  let repo = list[keys[i]].split('/')[4];
  console.log(user, repo);
  let a = new Awesome(`https://raw.githubusercontent.com/${user}/${repo}/master/readme.md`);

  a.makeIndexJson((err, res) => {
    console.log(res);
  });
}
