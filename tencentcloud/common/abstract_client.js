const Credential = require("./credential");
const sdkVersion = require("./sdk_version");
const ClientProfile = require("./profile/client_profile");
const Sign = require("./sign");
const HttpConnection = require("./http/http_connection");
const TencentCloudSDKHttpException = require("./exception/tencent_cloud_sdk_exception");

/**
 * @inner
 */
class AbstractClient {

    /**
     * Initialize the client.
     * @param {string} endpoint The service's domain name, such as [product].tencentcloudapi.com.
     * @param {string} version The version of the service, such as 2017-03-12.
     * @param {Credential} credential Credentials.
     * @param {string} region Region of the service.
     * @param {ClientProfile} profile Profile settings.
     */
    constructor(endpoint, version, credential, region, profile) {
        this.path = "/";

        /**
         * Credentials.
         * @type {Credential || null}
         */
        this.credential = credential || null;

        /**
         * Region of the service.
         * @type {string || null}
         */
        this.region = region || null;
        this.sdkVersion = "SDK_NODEJS_" + sdkVersion;
        this.apiVersion = version;
        this.endpoint = endpoint;

        /**
         * Optional profile settings.
         * @type {ClientProfile}
         */
        this.profile = profile || new ClientProfile();
    }

    /**
     * @inner
     */
    getEndpoint() {
        return this.profile.httpProfile.endpoint || this.endpoint;
    }

    /**
     * @inner
     */
    succRequest(resp, cb, data) {
        resp.deserialize(data);
        cb(null, resp);
    }

    /**
     * @inner
     */
    failRequest(err, cb) {
        cb(err, null);
    }

    /**
     * @inner
     */
    request(action, req, resp, options, cb) {
        if (typeof options === 'function') {
            cb = options
            options = {}
        }
        if (this.profile.signMethod === 'TC3-HMAC-SHA256') {
            this.doRequestWithSign3(action, req, options).then(data => this.succRequest(resp, cb, data), error => this.failRequest(error, cb));
        } else {
            this.doRequest(action, req).then(data => this.succRequest(resp, cb, data), error => this.failRequest(error, cb));
        }
    }

    /**
     * @inner
     */
    async doRequest(action, req) {
        let params = this.mergeData(req);
        params = this.formatRequestData(action, params);
        let res;
        try {
            res = await HttpConnection.doRequest({
                method: this.profile.httpProfile.reqMethod,
                url: this.profile.httpProfile.protocol + this.getEndpoint() + this.path,
                data: params,
                timeout: this.profile.httpProfile.reqTimeout * 1000
            });
        } catch (error) {
            throw new TencentCloudSDKHttpException(error.message);
        }
        return await this.parseResponse(res)
    }

    /**
     * @inner
     */
    async doRequestWithSign3(action, params, options) {
        let res;
        try {
            res = await HttpConnection.doRequestWithSign3({
                method: this.profile.httpProfile.reqMethod,
                url: this.profile.httpProfile.protocol + this.getEndpoint() + this.path,
                secretId: this.credential.secretId,
                secretKey: this.credential.secretKey,
                region: this.region,
                data: params,
                service: this.getEndpoint().split('.')[0],
                action: action,
                version: this.apiVersion,
                multipart: options.multipart,
                timeout: this.profile.httpProfile.reqTimeout * 1000,
                token: this.credential.token,
                requestClient: this.sdkVersion
            })
        } catch (e) {
            throw new TencentCloudSDKHttpException(e.message)
        }
        return await this.parseResponse(res)
    }

    async parseResponse(res) {
        if (res.status !== 200) {
            const tcError = new TencentCloudSDKHttpException(res.statusText)
            tcError.httpCode = res.status
            throw tcError;
        } else {
            const data = await res.json();
            if (data.Response.Error) {
                const tcError = new TencentCloudSDKHttpException(data.Response.Error.Message, data.Response.RequestId)
                tcError.code = data.Response.Error.Code
                throw tcError;
            } else {
                return data.Response;
            }
        }
    }

    /**
     * @inner
     */
    mergeData(data, prefix = "") {
        let ret = {};
        for (let k in data) {
            if (data[k] === null) {
                continue;
            }
            if (data[k] instanceof Array || data[k] instanceof Object) {
                Object.assign(ret, this.mergeData(data[k], prefix + k + "."));
            } else {
                ret[prefix + k] = data[k];
            }
        }
        return ret;
    }

    /**
     * @inner
     */
    formatRequestData(action, params) {
        params.Action = action;
        params.RequestClient = this.sdkVersion;
        params.Nonce = Math.round(Math.random() * 65535);
        params.Timestamp = Math.round(Date.now() / 1000);
        params.Version = this.apiVersion;
        params.Language = "en-US";

        if (this.credential.secretId) {
            params.SecretId = this.credential.secretId;
        }

        if (this.region) {
            params.Region = this.region;
        }

        if (this.credential.token) {
            params.Token = this.credential.token;
        }

        if (this.profile.signMethod) {
            params.SignatureMethod = this.profile.signMethod;
        }
        let signStr = this.formatSignString(params);

        params.Signature = Sign.sign(this.credential.secretKey, signStr, this.profile.signMethod);
        return params;
    }

    /**
     * @inner
     */
    formatSignString(params) {
        let strParam = "";
        let keys = Object.keys(params);
        keys.sort();
        for (let k in keys) {
            //k = k.replace(/_/g, '.');
            strParam += ("&" + keys[k] + "=" + params[keys[k]]);
        }
        let strSign = this.profile.httpProfile.reqMethod.toLocaleUpperCase() + this.getEndpoint() +
            this.path + "?" + strParam.slice(1);
        return strSign;
    }

}
module.exports = AbstractClient;
