# awesomelists-index
Generate the awesome lists in JSON file.

# Installation

```sh
npm install awesomelists-index
```

# Example Usage

```javascript
'use strict';
let Awesome = require('awesomelists-index');

// Given a repository name with author ex: vinta/awesome-python
let py = new Awesome('vinta/awesome-python');

py.makeIndexJson((err, res) => {console.log(res);});
```

# Related

- [lockys/awesome-search](https://github.com/lockys/awesome-search)
- https://awesomelists.me/
