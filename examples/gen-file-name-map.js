'use strict'
let fs = require('fs');
let awesomeNameMap = require('../json/awesome-name-map');
let fileNameMap = {};

for (let e of awesomeNameMap) {
  fileNameMap[e.githubPath] = e.name.replace(/\W/g, '').toLowerCase();
}

fs.writeFile('../json/repo-file-name.json', JSON.stringify(fileNameMap, null, 2), (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log('Success.');
  }
});
