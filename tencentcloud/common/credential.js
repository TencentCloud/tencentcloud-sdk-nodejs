/**
 * 认证信息类
 * @class
 */
class Credential {
    /**
     * @param {string} secretId
     * @param {string} secretKey
     * @param {string=} token
     */
    constructor(secretId, secretKey, token) {
        /**
         * secretId,可在控制台获取
         * @type {string || null}
         */
        this.secretId = secretId || null;

        /**
         * secretKey,可在控制台获取
         * @type {string || null}
         */
        this.secretKey = secretKey || null;

        /**
         * token
         * @type {string || null}
         */
        this.token = token || null
    }
}
module.exports = Credential;

