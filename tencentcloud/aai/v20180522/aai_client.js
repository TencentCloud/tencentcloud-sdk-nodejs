const models = require("./models");
const AbstractClient = require('../../common/abstract_client')
const SentenceRecognitionRequest = models.SentenceRecognitionRequest;
const TextToVoiceResponse = models.TextToVoiceResponse;
const TextToVoiceRequest = models.TextToVoiceRequest;
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
     * 识别60s内的短语音，当音频放在请求body中传输时整个请求大小不能超过1M，当音频以url方式传输时，音频时长不可超过60s。所有请求参数放在post的body中采用x-www-form-urlencoded（数据转换成一个字串（name1=value1&name2=value2…）进行urlencode后传输）编码传输。
     * @param {SentenceRecognitionRequest} req
     * @param {function(string, SentenceRecognitionResponse):void} cb
     * @public
     */
    SentenceRecognition(req, cb) {
        let resp = new SentenceRecognitionResponse();
        this.request("SentenceRecognition", req, resp, cb);
    }

    /**
     * 腾讯云语音合成技术（TTS）可以将任意文本转化为语音，实现让机器和应用张口说话。
腾讯TTS技术可以应用到很多场景，比如，移动APP语音播报新闻；智能设备语音提醒；依靠网上现有节目或少量录音，快速合成明星语音，降低邀约成本；支持车载导航语音合成的个性化语音播报。
内测期间免费使用。
     * @param {TextToVoiceRequest} req
     * @param {function(string, TextToVoiceResponse):void} cb
     * @public
     */
    TextToVoice(req, cb) {
        let resp = new TextToVoiceResponse();
        this.request("TextToVoice", req, resp, cb);
    }


}
module.exports = AaiClient;
