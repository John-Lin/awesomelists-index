'use strict';
let Awesome = require('../index.js');
let a = new Awesome('https://raw.githubusercontent.com/cjwirth/awesome-ios-ui/master/README.md');

a.makeIndexJson((err, res) => {console.log(res);});
