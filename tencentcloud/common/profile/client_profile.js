const HttpProfile = require("./http_profile");

/**
 * Client settings.
 * @class
 */
class ClientProfile {

    /**
     * @param {string} signMethod Signature method, valid values: HmacSHA1, HmacSHA256.
     * @param {HttpProfile} httpProfile HTTP settings.
     */
    constructor(signMethod, httpProfile) {
        /**
         * @type {string}
         */
        this.signMethod = signMethod || "HmacSHA256";

        /**
         * @type {httpProfile}
         */
        this.httpProfile = httpProfile || new HttpProfile();
    }
}
module.exports = ClientProfile

