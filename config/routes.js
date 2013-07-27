// Draw routes.  Locomotive's router provides expressive syntax for drawing
// routes, including support for resourceful routes, namespaces, and nesting.
// MVC routes can be mapped mapped to controllers using convenient
// `controller#action` shorthand.  Standard middleware in the form of
// `function(req, res, next)` is also fully supported.  Consult the Locomotive
// Guide on [routing](http://locomotivejs.org/guide/routing.html) for additional
// information.
module.exports = function routes() {
  'use strict';
  this.root('pages#home');
  this.match('swear/:divinity/:animal', 'blasphemy#swear');
  this.match('swear/:divinity/:animal/:author', 'blasphemy#swear');
  this.match('sake/:divinity', 'blasphemy#sake');
  this.match('sake/:divinity/:author', 'blasphemy#sake');
  this.match('holy/:divinity', 'blasphemy#holy');
  this.match('holy/:divinity/:author', 'blasphemy#holy');
  this.match('ohmy/:divinity', 'blasphemy#ohmy');
  this.match('ohmy/:divinity/:author', 'blasphemy#ohmy');
  this.match('blood/:divinity', 'blasphemy#blood');
  this.match('blood/:divinity/:author', 'blasphemy#blood');
  this.match('nails/:divinity', 'blasphemy#nails');
  this.match('nails/:divinity/:author', 'blasphemy#nails');
};

