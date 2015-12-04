/**
  This js is aimed to generate repo to file name map.
  {
    "sindresorhus/awesome-nodejs": "nodejs",
    ...
  }
**/

'use strict'
let fs = require('fs');
let awesomeNameMap = require('../json/awesome-name-map');
let fileNameMap = {};

for (let e of awesomeNameMap) {
  fileNameMap[e.githubPath] = e.name.replace(/\W/g, '').toLowerCase();
}

fs.writeFile('../lib/repo-file-name.json', JSON.stringify(fileNameMap, null, 2), (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log('Success.');
  }
});
