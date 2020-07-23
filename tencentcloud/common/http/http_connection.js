const QueryString = require("querystring");
const { URL } = require('url');
const isStream = require('is-stream');
const getStream = require('get-stream');
const FormData = require('form-data');
const Sign = require('../sign');
const fetch = require('./fetch');

/**
 * @inner
 */
class HttpConnection {
    static async doRequest({ method, url, data, timeout }) {
        let config = {
            method: method,
            headers: {},
            timeout
        };
        if (method === "GET") {
            url += "?" + QueryString.stringify(data);
        } else {
            config.headers['Content-Type'] = 'application/x-www-form-urlencoded'
            config.body = QueryString.stringify(data);
        }
        return await fetch(url, config)
    }

    static async doRequestWithSign3({
        method,
        url,
        data,
        service,
        action,
        region,
        version,
        secretId,
        secretKey,
        multipart = false,
        timeout = 60000,
        token,
        requestClient
    }) {
        // data 中可能带有 readStream，由于需要计算整个 body 的 hash，
        // 所以这里把 readStream 转为 Buffer
        await convertReadStreamToBuffer(data)

        data = deepRemoveNull(data)

        const timestamp = parseInt(new Date().getTime() / 1000)
        method = method.toUpperCase()

        let payload = ''
        if (method === 'GET') {
            data = mergeData(data)
            url += '?' + QueryString.stringify(data)
        }
        if (method === 'POST') {
            payload = data
        }

        const config = {
            method,
            timeout,
            headers: {
                'Host': new URL(url).host,
                'X-TC-Action': action,
                'X-TC-Region': region,
                'X-TC-Timestamp': timestamp,
                'X-TC-Version': version,
                'X-TC-Token': token,
                'X-TC-RequestClient': requestClient
            }
        }

        if (token === null) {
            delete config.headers["X-TC-Token"]
        }

        let form
        if (method === 'GET') {
            config.headers['Content-Type'] = 'application/x-www-form-urlencoded'
        }
        if (method === 'POST' && !multipart) {
            config.body = JSON.stringify(data)
            config.headers['Content-Type'] = 'application/json'
        }
        if (method === 'POST' && multipart) {
            form = new FormData();
            for (var key in data) {
                form.append(key, data[key])
            }
            config.body = form
            config.headers = Object.assign({}, config.headers, form.getHeaders())
        }

        const signature = Sign.sign3({
            method,
            url,
            payload,
            timestamp,
            service,
            secretId,
            secretKey,
            multipart,
            boundary: form ? form.getBoundary() : undefined
        })

        config.headers['Authorization'] = signature

        return await fetch(url, config)
    }
}

async function convertReadStreamToBuffer(data) {
    for (let key in data) {
        if (isStream(data[key])) {
            data[key] = await getStream.buffer(data[key])
        }
    }
}

function mergeData(data, prefix = "") {
    let ret = {};
    for (let k in data) {
        if (data[k] === null) {
            continue;
        }
        if (data[k] instanceof Array || data[k] instanceof Object) {
            Object.assign(ret, mergeData(data[k], prefix + k + "."));
        } else {
            ret[prefix + k] = data[k];
        }
    }
    return ret;
}

function deepRemoveNull(obj) {
    if (isArray(obj)) {
        return obj.map(deepRemoveNull)
    } else if (isObject(obj)) {
        let result = {}
        for (let key in obj) {
            const value = obj[key]
            if (!isNull(value)) {
                result[key] = deepRemoveNull(value)
            }
        }
        return result
    } else {
        return obj
    }
}

function isBuffer(x) {
    return Buffer.isBuffer(x)
}

function isArray(x) {
    return Array.isArray(x)
}

function isObject(x) {
    return typeof x === 'object' && !isArray(x) && !isStream(x) && !isBuffer(x) && x !== null
}

function isNull(x) {
    return x === null
}

module.exports = HttpConnection;
