# awesomelists-index
Generate the awesome lists in JSON file.

# Installation

```sh
npm install awesomelists-index
```

# Example

```javascript
'use strict';
let Awesome = require('../index.js');
let a = new Awesome('https://raw.githubusercontent.com/vinta/awesome-python/master/README.md');

a.makeIndexJson((err, res) => {console.log(res);});
```
