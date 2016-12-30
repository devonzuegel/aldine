var _this = this;
var R = require('ramda');
module.exports = function (content) {
    _this.cacheable && _this.cacheable();
    _this.value = content;
    return R.pipe(R.trim, function (str) { return ("\n      import React from 'react'\n      import R from 'ramda'\n\n      export default (className) => <div>\n        {R.pipe(\n          R.split('**'),\n          R.reduce(\n            ({ highlighting, result, i }, fragment) => ({\n              highlighting: !highlighting,\n              i: i + 1,\n              result: [\n                ...result,\n                highlighting ? <span className={className} key={i}>{fragment}</span> : fragment\n              ]\n            }),\n            { highlighting: false, result: [], i: 0 }\n          ),\n          R.prop('result'),\n          R.flatten,\n        )('" + str + "')}\n      </div>\n    "); })(content);
};
