/**
 * http可选参数类
 * @class
 */
class HttpProfile {

    /**
     * @param {string} protocol 协议，目前支持（https://）
     * @param {string} endpoint 接入点域名，形如（cvm.ap-shanghai.tencentcloud.com）
     * @param {string} reqMethod  请求方法，目前支持（POST GET）
     * @param {number} reqTimeout 请求超时时间，默认60s
     */
    constructor(protocol, endpoint, reqMethod, reqTimeout) {
        /**
         * 请求方法，目前支持（POST GET）
         * @type {string}
         */
        this.reqMethod = reqMethod || "POST";

        /**
         * 接入点域名，形如（cvm.ap-shanghai.tencentcloud.com）
         * @type {string || null}
         */
        this.endpoint = endpoint || null;

        /**
         * 协议，目前支持（https://）
         * @type {string}
         */
        this.protocol = protocol || "https://";

        /**
         *  请求超时时间，默认60s
         * @type {number}
         */
        this.reqTimeout = reqTimeout || 60;
    }
}
module.exports = HttpProfile;