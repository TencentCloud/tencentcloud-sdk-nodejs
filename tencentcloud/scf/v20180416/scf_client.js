const models = require("./models");
const AbstractClient = require('../../common/abstract_client')
const InvokeResponse = models.InvokeResponse;
const Result = models.Result;
const InvokeRequest = models.InvokeRequest;


/**
 * scf client
 * @class
 */
class ScfClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("scf.tencentcloudapi.com", "2018-04-16", credential, region, profile);
    }
    
    /**
     * Invoke用于运行函数
     * @param {InvokeRequest} req
     * @param {function(string, InvokeResponse):void} cb
     * @public
     */
    Invoke(req, cb) {
        let resp = new InvokeResponse();
        this.request("Invoke", req, resp, cb);
    }


}
module.exports = ScfClient;
