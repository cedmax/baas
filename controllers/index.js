const marked = require('marked');
const fs = require('fs');
const config = require('../config/page');
const template = require('../views/home');

module.exports = (request, reply) => {
  fs.readFile(`./README.md`, 'utf8', function (err, data) {
    if (err) {
        throw err;
    }
      
    config.readme = marked(data);
    reply
      .header('Content-Type', 'text/html')
      .send(template(config))
  });
}