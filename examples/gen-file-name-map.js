/**
  This js is aimed to generate repo to file name map.
  {
    "sindresorhus/awesome-nodejs": "nodejs",
    ...
  }
**/

'use strict';
let jsonfile = require('jsonfile');
let awesomeNameMap = require('../json/awesome-detailed-info.json');
let fileNameMap = {};

for (let e of awesomeNameMap) {
  fileNameMap[e.githubPath] = e.name.replace(/\W/g, '').toLowerCase();
}

jsonfile.writeFile('./repo-file-name.json', fileNameMap, {spaces: 2}, (err) => {
  console.log('Save to repo-file-name.json');
});
