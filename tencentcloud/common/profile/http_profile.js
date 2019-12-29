/**
 * HTTP settings.
 * @class
 */
class HttpProfile {

    /**
     * @param {string} protocol Only supports https://.
     * @param {string} endpoint Domain name, such as cvm.ap-shanghai.tencentcloud.com.
     * @param {string} reqMethod HTTP method, only supports GET and POST.
     * @param {number} reqTimeout Request timeout value, in seconds, default 60.
     */
    constructor(protocol, endpoint, reqMethod, reqTimeout) {
        /**
         * @type {string}
         */
        this.reqMethod = reqMethod || "POST";

        /**
         * @type {string || null}
         */
        this.endpoint = endpoint || null;

        /**
         * @type {string}
         */
        this.protocol = protocol || "https://";

        /**
         * @type {number}
         */
        this.reqTimeout = reqTimeout || 60;
    }
}
module.exports = HttpProfile;
