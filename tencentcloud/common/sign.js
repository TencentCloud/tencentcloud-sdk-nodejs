const TencentCloudSDKHttpException = require("./exception/tencent_cloud_sdk_exception");
const crypto = require('crypto');

/**
 * @inner
 */
class Sign {

    static sign(secretKey, signStr, signMethod) {
        let signMethodMap = {
            HmacSHA1: "sha1",
            HmacSHA256: "sha256"
        };

        if (!signMethodMap.hasOwnProperty(signMethod)) {
            throw new TencentCloudSDKHttpException("signMethod invalid, signMethod only support (HmacSHA1, HmacSHA256)");
        }
        let hmac = crypto.createHmac(signMethodMap[signMethod], secretKey || "");
        return hmac.update(Buffer.from(signStr, 'utf8')).digest('base64')
    }
}
module.exports = Sign;
