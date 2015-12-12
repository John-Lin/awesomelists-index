'use strict';
let request = require('request');
let cheerio = require('cheerio');
let jsonfile = require('jsonfile');

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
    let options = {
      url: `https://api.github.com/repos/${this.repo}/readme`,
      headers: {
        'User-Agent': 'John-Lin',
        accept: 'application/vnd.github.v3.html',
      },
    };

    if (this.token) {
      options.headers.authorization = `token ${this.token}`;
    }

    request(options, (error, response, body) => {
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

      jsonfile.writeFile(this.filename, all, {spaces: 2}, (err) => {
        callback(err, `Save to ${this.filename}`);
      });
    });
  }

}

module.exports = Awesome;
