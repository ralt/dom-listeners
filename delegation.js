"use strict";

var on = require('./listener'),
    matchesSelector = require('matches-selector-shim');

module.exports = function(parent, evt, selector, fn) {
    on(parent, evt, function(e) {
        var target = e ? e.target : event.srcElement;

        var elt = function find(el) {
            if (matchesSelector(el, selector)) {
                return el;
            }

            if (el.parentNode !== parent) {
                return find(el.parentNode);
            }

            return false;
        }(target);

        if (elt) {
            fn.apply(elt, arguments);
        }
    });
};
