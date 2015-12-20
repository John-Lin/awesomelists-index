'use strict';
const debug = require('debug')('awesomelists');
const got = require('got');
const cheerio = require('cheerio');
const jsonfile = require('jsonfile');
const mkdirp = require('mkdirp');

class Awesome {

  constructor(options) {
    if (!options.repo) {
      throw 'Invalid <maintainer>/<repository name>.';
    }

    this.token = options.token;
    this.repo = options.repo;
    this.filename = `${this.repo.replace('/', '-')}.json`;
  }

  getReadmeHTML(callback) {
    let url =  `https://api.github.com/repos/${this.repo}/readme`;
    let options = {
      headers: {
        'User-Agent': 'John-Lin',
        accept: 'application/vnd.github.v3.html',
      },
    };

    if (this.token) {
      options.headers.authorization = `token ${this.token}`;
    }

    got(url, options, (error, body, response) => {
      debug(`Status Code: ${response.statusCode}`);
      if (!error && response.statusCode === 200) {
        callback(null, body);
      } else {
        console.log(`Can not get ${this.repo}'s README form github. Reason: ${body}`);
      }
    });
  }

  makeIndexJson(callback) {
    this.getReadmeHTML((err, html) => {
      let $ = cheerio.load(html);

      let listTag = $('li');
      let all = [];

      let awesomeObj = {};
      listTag.each((index, el) => {
        let link = $(el).children().attr('href');
        if (link && !link.startsWith('#')) {
          // get project name and desc.
          let splited = $(el).text().split(/\s-\s(.+)?/);

          awesomeObj.name = splited[0];
          awesomeObj.url = link;
          awesomeObj.description = splited[1];

          all.push(JSON.parse(JSON.stringify(awesomeObj)));

        }
      });

      mkdirp.sync('awesome-json');
      jsonfile.writeFile(`./awesome-json/${this.filename}`, all, {spaces: 2}, (err) => {
        callback(err, `Save to awesome-json/${this.filename}`);
      });
    });
  }

}

module.exports = Awesome;
