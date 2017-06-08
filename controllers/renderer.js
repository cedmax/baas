const template = require('../views/blasphemy');
const config = require('../config/page');

const renderer = (content) => (request, reply) => {
  const json = content(request.params)
  switch (request.req.headers.accept) {
    case 'application/json':
      reply.send(json)
      break
    default: 
      reply
        .header('Content-Type', 'text/html')
        .send(template(Object.assign({}, config, json)))
  }
}

renderer.index = require('./index')
module.exports = renderer
