'use strict';
let Awesome = require('awesomelists-index');

// Given a repository name with author ex: vinta/awesome-python
let py = new Awesome('vinta/awesome-python');

py.makeIndexJson((err, res) => {console.log(res);});
