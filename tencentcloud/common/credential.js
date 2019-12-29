/**
 * Credentials.
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
         * @type {string || null}
         */
        this.secretId = secretId || null;

        /**
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

