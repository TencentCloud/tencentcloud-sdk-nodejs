const AbstractModel = require("../../common/abstract_model");

/**
 * SentenceRecognition请求参数结构体
 * @class
 */
class SentenceRecognitionRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 腾讯云项目 ID，可填 0，总长度不超过 1024 字节。
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * 子服务类型。0：离线语音识别。1：实时流式识别，2，一句话识别。
         * @type {number || null}
         */
        this.SubServiceType = null;

        /**
         * 引擎类型。8k：电话 8k 通用模型；16k：16k 通用模型。
         * @type {string || null}
         */
        this.EngSerViceType = null;

        /**
         * 语音数据来源。0：语音 URL；1：语音数据（post body）。
         * @type {number || null}
         */
        this.SourceType = null;

        /**
         * 语音 URL，公网可下载。当 SourceType 值为 0 时须填写该字段，为 1 时不填；URL 的长度大于 0，小于 2048。
         * @type {string || null}
         */
        this.Url = null;

        /**
         * 识别音频的音频格式（支持mp3,wav）。
         * @type {string || null}
         */
        this.VoiceFormat = null;

        /**
         * 用户端对此任务的唯一标识，用户自助生成，用于用户查找识别结果。
         * @type {string || null}
         */
        this.UsrAudioKey = null;

        /**
         * 语音数据，当SourceType 值为1时必须填写，为0可不写。
         * @type {string || null}
         */
        this.Data = null;

        /**
         * 数据长度，当 SourceType 值为1时必须填写，为0可不写。
         * @type {number || null}
         */
        this.DataLen = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProjectId = params.ProjectId || null;
        this.SubServiceType = params.SubServiceType || null;
        this.EngSerViceType = params.EngSerViceType || null;
        this.SourceType = params.SourceType || null;
        this.Url = params.Url || null;
        this.VoiceFormat = params.VoiceFormat || null;
        this.UsrAudioKey = params.UsrAudioKey || null;
        this.Data = params.Data || null;
        this.DataLen = params.DataLen || null;

    }
}

/**
 * SentenceRecognition返回参数结构体
 * @class
 */
class SentenceRecognitionResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 识别结果。
         * @type {string || null}
         */
        this.Result = null;

        /**
         * 唯一请求ID，每次请求都会返回。定位问题时需要提供该次请求的RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Result = params.Result || null;
        this.RequestId = params.RequestId || null;

    }
}

module.exports = {
    SentenceRecognitionRequest: SentenceRecognitionRequest,
    SentenceRecognitionResponse: SentenceRecognitionResponse,

}
