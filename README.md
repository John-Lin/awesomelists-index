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

let options = {
  repo: 'vinta/awesome-python',
  // token is optional parameter
  token: '<GITHUB AUTH TOKEN>',
};

// Given a repository name with author ex: vinta/awesome-python
let py = new Awesome(options);

py.makeIndexJson((err, res) => {console.log(res);});

```

# Related

- [lockys/awesome-search](https://github.com/lockys/awesome-search)
- [https://awesomelists.me/](https://awesomelists.me/)
