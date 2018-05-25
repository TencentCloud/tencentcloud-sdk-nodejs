const models = require("./models");
const AbstractClient = require('../../common/abstract_client')
const SentenceRecognitionRequest = models.SentenceRecognitionRequest;
const SentenceRecognitionResponse = models.SentenceRecognitionResponse;


/**
 * aai client
 * @class
 */
class AaiClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("aai.tencentcloudapi.com", "2018-05-22", credential, region, profile);
    }
    
    /**
     * 识别60s内的短语音。
     * @param {SentenceRecognitionRequest} req
     * @param {function(string, SentenceRecognitionResponse):void} cb
     * @public
     */
    SentenceRecognition(req, cb) {
        let resp = new SentenceRecognitionResponse();
        this.request("SentenceRecognition", req, resp, cb);
    }


}
module.exports = AaiClient;
