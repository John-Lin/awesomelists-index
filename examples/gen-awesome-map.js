/**
* This js is aimed to generate awesome detailed informations.
*{
*  "name": "Frontend Development",
*  "url": "https://github.com/dypsilon/frontend-dev-bookmarks",
*  "githubPath": "dypsilon/frontend-dev-bookmarks"
*},
**/

'use strict';
let Awesome = require('../index.js');
let jsonfile = require('jsonfile');
let fs = require('fs');

let nameMapArray = JSON.parse(fs.readFileSync('../json/awesome.json', 'utf8'));

for (let i of nameMapArray) {
  let maintainer = i.url.split('/')[3];
  let repoName = i.url.split('/')[4];
  i.githubPath = maintainer ? `${maintainer}/${repoName}` : null;
}

fs.writeFile('./awesome-detailed-info.json', JSON.stringify(nameMapArray, null, 2), (err) => {
  if (err) {
    console.error(new Error('Failed to write.'));
  } else {
    console.log('Success!');
  }
});
