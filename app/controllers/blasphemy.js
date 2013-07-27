(function(){
    'use strict';

    var _ = require('lodash'),
        Controller = require('locomotive').Controller;

    var BlasphemyController = new Controller();

    function render(self, obj){
        self.respond({
            'html': function() { self.render(); },
            'json': function() {
                    self.res.json( obj );
            }
        });
    }

    function normalizeDivinity(divinity){
        return divinity.charAt(0).toUpperCase() + divinity.slice(1);
    }

    BlasphemyController._getGa = function(){
        var appConf = this.app.express.settings;
        this.ga = appConf.ga;
        this.gadomain = appConf.gadomain;
    };


    BlasphemyController.swear = function() {
        var divinity = normalizeDivinity(this.param("divinity"));

        var obj = {
            message: divinity + " " + this.param("animal") + "!",
            subtitle: (this.param("author"))? "- " + this.param("author"): ""
        };

        this._getGa();
		_.extend(this, obj);
        render(this, obj);
    };

    BlasphemyController.sake = function() {
        var divinity = normalizeDivinity(this.param("divinity"));
        var last = divinity.charAt(divinity.length-1);

        var obj = {
            message: "For " + divinity + "'" + ((last!=='s')?'s':'')+ " sake!",
            subtitle: (this.param("author"))? "- " + this.param("author"): ""
        };

        this._getGa();
		_.extend(this, obj);
        render(this, obj);
    };

    BlasphemyController.holy = function() {
        var divinity = normalizeDivinity(this.param("divinity"));

        var obj = {
            message: "Holy " + divinity + "!",
            subtitle: (this.param("author"))? "- " + this.param("author"): ""
        };

        this._getGa();
		_.extend(this, obj);
        render(this, obj);
    };

    BlasphemyController.ohmy = function() {
        var divinity = normalizeDivinity(this.param("divinity"));

        var obj = {
            message: "Oh my fucking " + divinity + "!",
            subtitle: (this.param("author"))? "- " + this.param("author"): ""
        };

        this._getGa();
		_.extend(this, obj);
        render(this, obj);
    };

    BlasphemyController.blood = function() {
        var divinity = normalizeDivinity(this.param("divinity"));

        var obj = {
            message: "By the blood of " + divinity + "!",
            subtitle: (this.param("author"))? "- " + this.param("author"): ""
        };

        this._getGa();
		_.extend(this, obj);
        render(this, obj);
    };

    BlasphemyController.nails = function() {
        var divinity = normalizeDivinity(this.param("divinity"));
        var last = divinity.charAt(divinity.length-1);

        var obj = {
            message: "By " + divinity + "'" + ((last!=='s')?'s':'')+ " nails!",
            subtitle: (this.param("author"))? "- " + this.param("author"): ""
        };

        this._getGa();
		_.extend(this, obj);
        render(this, obj);
    };

    module.exports = BlasphemyController;

})();
