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
  this.match('swear/:divinity/:animal', 'blasfemy#swear');
  this.match('swear/:divinity/:animal/:author', 'blasfemy#swear');
  this.match('sake/:divinity', 'blasfemy#sake');
  this.match('sake/:divinity/:author', 'blasfemy#sake');
  this.match('holy/:divinity', 'blasfemy#holy');
  this.match('holy/:divinity/:author', 'blasfemy#holy');
  this.match('ohmy/:divinity', 'blasfemy#ohmy');
  this.match('ohmy/:divinity/:author', 'blasfemy#ohmy');
  this.match('blood/:divinity', 'blasfemy#blood');
  this.match('blood/:divinity/:author', 'blasfemy#blood');
  this.match('nails/:divinity', 'blasfemy#nails');
  this.match('nails/:divinity/:author', 'blasfemy#nails');
};

