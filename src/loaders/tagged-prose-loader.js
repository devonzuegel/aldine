var _this = this;
var R = require('ramda');
module.exports = function (content) {
    _this.cacheable && _this.cacheable();
    _this.value = content;
    return R.pipe(R.trim, function (str) { return ("<div>" + str + "</div>"); }, function (str) { return ("\n      import React from 'react'\n      export default " + str + "\n    "); })(content);
};
