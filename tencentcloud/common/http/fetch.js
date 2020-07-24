const fetch = require('node-fetch');
const HttpsProxyAgent = require('https-proxy-agent');

module.exports = (url, options) => {
  const instanceOptions = options || {};

  if (!options.agent && process.env.http_proxy) {
    instanceOptions.agent = new HttpsProxyAgent(process.env.http_proxy);
  }

  return fetch(url, instanceOptions);
};