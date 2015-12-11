# awesomelists-index
![npm version](https://badge.fury.io/js/awesomelists-index.svg)

Generate the awesome lists in JSON file.

# Installation

```sh
$ npm install awesomelists-index
```

You can set github token without passing it every time
```sh
$ echo export TOKENS="Your-Github-Token" >> ~/.bash_profile && source ~/.bash_profile
```

# Example Usage

```javascript
'use strict';
let Awesome = require('awesomelists-index');

let options = {
  repo: 'matiassingers/awesome-slack',
  // token is optional parameter
  token: process.env.TOKEN || 'GITHUB_TOKEN',
};

// Given a repository name with author ex: vinta/awesome-python
let py = new Awesome(options);

py.makeIndexJson((err, res) => {console.log(res);});
```
**Run with given github token**
```sh
$ TOKENS="Your-Github-Token" node examples/simple.js
```

# Related

- [lockys/awesome-search](https://github.com/lockys/awesome-search)
- [https://awesomelists.me/](https://awesomelists.me/)
