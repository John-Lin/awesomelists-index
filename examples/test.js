'use strict';
let Awesome = require('../index.js');

// Given a repository name with author ex: vinta/awesome-python
let py = new Awesome('veggiemonk/awesome-docker');

py.makeIndexJson((err, res) => {console.log(res);});
