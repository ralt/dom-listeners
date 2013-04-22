"use strict";

module.exports = function(el, evt, callback) {
    if ('addEventListener' in el) {
        return el.addEventListener(evt, callback, false);
    }

    // IE8
    el.attachEvent('on' + evt, callback);
};
