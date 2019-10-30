'use strict';

var _ = require('lodash');


var sortObject = function(obj, fn) {
    var keys = _.sortBy(_.keys(obj), fn);
    var res = {};

    _.forIn(keys, function(key) {
        res[key] = obj[key];
    })

    return res
}

var serialize = function(obj) {
    var res = '';
    var mapValue = _.map(obj, function(value, key) {
        return (key+'='+value)
    });

    res = _.join(mapValue, '&');

    return res
}

exports.sortObject = sortObject;
exports.serialize = serialize;
