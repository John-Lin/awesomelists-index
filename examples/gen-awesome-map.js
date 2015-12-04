/**
* This js is aimed to generate awesome detailed informations.
*{
*  "name": "Frontend Development",
*  "url": "https://github.com/dypsilon/frontend-dev-bookmarks",
*  "githubPath": "dypsilon/frontend-dev-bookmarks"
*},
**/

'use strict';
let jsonfile = require('jsonfile');

let nameMapArray = jsonfile.readFileSync('../json/awesome.json');

for (let i of nameMapArray) {
  let maintainer = i.url.split('/')[3];
  let repoName = i.url.split('/')[4];
  i.githubPath = maintainer ? `${maintainer}/${repoName}` : null;
}

jsonfile.writeFile('./awesome-detailed-info.json', nameMapArray, {spaces: 2}, (err) => {
  console.log('Save to awesome-detailed-info.json');
});
