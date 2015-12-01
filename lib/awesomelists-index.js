'use strict';
let marked = require('marked');
let request = require('request');
let cheerio = require('cheerio');
let jsonfile = require('jsonfile');
let fs = require('fs');

class Awesome {

  constructor(url) {
    if (!url) {
      throw 'Invalid URL';
    }

    // The raw readme url link for example:
    // https://raw.githubusercontent.com/sindresorhus/awesome-nodejs/master/readme.md
    this.URL = url;
    this.filename = this.getFilename();
  }

  getFilename() {
    let splited = this.URL.split('/');
    let nameMap = JSON.parse(fs.readFileSync(`${__dirname}/file-name-map.json`, 'utf8'));
    return nameMap[splited[splited.length - 3]];
  }

  makeIndexJson(callback) {
    request(this.URL, (error, response, body) => {
      if (!error && response.statusCode == 200) {

        let html = marked(body);

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

      }
    });

  }
}

module.exports = Awesome;
