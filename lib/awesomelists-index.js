'use strict';
let request = require('request');
let cheerio = require('cheerio');
let jsonfile = require('jsonfile');
let fs = require('fs');

class Awesome {

  constructor(maintainerRepo) {
    if (!maintainerRepo) {
      throw 'Invalid maintainer and repository name.';
    }

    this.maintainerRepo = maintainerRepo;
    this.filename = this.getFilename();
  }

  getReadmeHTML(callback) {
    let options = {
      url: `https://api.github.com/repos/${this.maintainerRepo}/readme`,
      headers: {
        'User-Agent': 'John-Lin',
        accept: 'application/vnd.github.v3.html',
      },
    };

    request(options, (error, response, body) => {
      if (!error && response.statusCode === 200) {
        callback(null, body);
      } else {
        throw 'Can not get README form github';
      }
    });
  }

  getFilename() {
    let nameMap = JSON.parse(fs.readFileSync(`${__dirname}/file-name-map.json`, 'utf8'));
    return nameMap[this.maintainerRepo.split('/')[1]];
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
