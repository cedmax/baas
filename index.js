const fastify = require('fastify')()
const renderer = require('./controllers/renderer');
const blasphemy = require('./controllers/blasphemy')

fastify.get('/', renderer.index);

fastify.get('/swear/:divinity', renderer(blasphemy.swear));
fastify.get('/swear/:divinity/:animal', renderer(blasphemy.swear));
fastify.get('/swear/:divinity/:animal/:author', renderer(blasphemy.swear));

fastify.get('/sake/:divinity', renderer(blasphemy.sake));
fastify.get('/sake/:divinity/:author', renderer(blasphemy.sake));

fastify.get('/holy/:divinity', renderer(blasphemy.holy));
fastify.get('/holy/:divinity/:author', renderer(blasphemy.holy));

fastify.get('/ohmy/:divinity', renderer(blasphemy.ohmy));
fastify.get('/ohmy/:divinity/:author', renderer(blasphemy.ohmy));


fastify.get('/blood/:divinity', renderer(blasphemy.blood));
fastify.get('/blood/:divinity/:author', renderer(blasphemy.blood));

fastify.get('/bloody/:divinity', renderer(blasphemy.bloody));
fastify.get('/bloody/:divinity/:author', renderer(blasphemy.bloody));

fastify.get('/nails/:divinity', renderer(blasphemy.nails));
fastify.get('/nails/:divinity/:author', renderer(blasphemy.nails));


// Run the server!
fastify.listen(20178, function (err) {
  if (err) throw err
  console.log(`server listening on ${fastify.server.address().port}`)
})
