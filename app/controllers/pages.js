(function() {
    'use strict';

    var marked = require('marked');
    var fs = require('fs');
    var Controller = require('locomotive').Controller;

    var Pages = new Controller();

    Pages.home = function() {
        this.acronym = 'Baas';
        this.extended = 'Blasfemy as a Service';
        this.title = this.acronym + ' (' + this.extended + ')';

		var appConf = this.app.express.settings;
        this.ga = appConf.ga;
        this.gadomain = appConf.gadomain;

        var self = this;
        fs.readFile('./README.md', 'utf8', function (err, data) {
            if (err) {
                throw err;
            }
            self.readme = marked(data);
            self.render();
        });

    };

    module.exports = Pages;
})();
