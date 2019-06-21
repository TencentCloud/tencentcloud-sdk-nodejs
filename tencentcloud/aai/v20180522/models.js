/*
 * Copyright (c) 2018 THL A29 Limited, a Tencent company. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
const AbstractModel = require("../../common/abstract_model");

/**
 * Chat请求参数结构体
 * @class
 */
class ChatRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 聊天输入文本
         * @type {string || null}
         */
        this.Text = null;

        /**
         * 腾讯云项目 ID，可填 0，总长度不超过 1024 字节。
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * json格式，比如 {"id":"test","gender":"male"}。记录当前与机器人交互的用户id，非必须但强烈建议传入，否则多轮聊天功能会受影响
         * @type {string || null}
         */
        this.User = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Text = 'Text' in params ? params.Text : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.User = 'User' in params ? params.User : null;

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
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
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
        this.Result = 'Result' in params ? params.Result : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * SimultaneousInterpreting返回参数结构体
 * @class
 */
class SimultaneousInterpretingResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 语音识别的结果
         * @type {string || null}
         */
        this.AsrText = null;

        /**
         * 机器翻译的结果
         * @type {string || null}
         */
        this.NmtText = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
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
        this.AsrText = 'AsrText' in params ? params.AsrText : null;
        this.NmtText = 'NmtText' in params ? params.NmtText : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * TextToVoice返回参数结构体
 * @class
 */
class TextToVoiceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * base64编码的wav音频数据
         * @type {string || null}
         */
        this.Audio = null;

        /**
         * 一次请求对应一个SessionId
         * @type {string || null}
         */
        this.SessionId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
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
        this.Audio = 'Audio' in params ? params.Audio : null;
        this.SessionId = 'SessionId' in params ? params.SessionId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * SimultaneousInterpreting请求参数结构体
 * @class
 */
class SimultaneousInterpretingRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 腾讯云项目 ID，可填 0，总长度不超过 1024 字节。
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * 子服务类型。0：离线语音识别。1：实时流式识别，2，一句话识别。3：同传。
         * @type {number || null}
         */
        this.SubServiceType = null;

        /**
         * 识别引擎类型。8k_zh： 8k 中文会场模型；16k_zh：16k 中文会场模型，8k_en： 8k 英文会场模型；16k_en：16k 英文会场模型。当前仅支持16K。
         * @type {string || null}
         */
        this.RecEngineModelType = null;

        /**
         * 语音数据，要base64编码。
         * @type {string || null}
         */
        this.Data = null;

        /**
         * 数据长度。
         * @type {number || null}
         */
        this.DataLen = null;

        /**
         * 声音id，标识一句话。
         * @type {string || null}
         */
        this.VoiceId = null;

        /**
         * 是否是一句话的结束。
         * @type {number || null}
         */
        this.IsEnd = null;

        /**
         * 声音编码的格式1:pcm，4:speex，6:silk，默认为1。
         * @type {number || null}
         */
        this.VoiceFormat = null;

        /**
         * 是否需要翻译结果，1表示需要翻译，0是不需要。
         * @type {number || null}
         */
        this.OpenTranslate = null;

        /**
         * 如果需要翻译，表示源语言类型，可取值：zh，en。
         * @type {string || null}
         */
        this.SourceLanguage = null;

        /**
         * 如果需要翻译，表示目标语言类型，可取值：zh，en。
         * @type {string || null}
         */
        this.TargetLanguage = null;

        /**
         * 表明当前语音分片的索引，从0开始
         * @type {number || null}
         */
        this.Seq = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.SubServiceType = 'SubServiceType' in params ? params.SubServiceType : null;
        this.RecEngineModelType = 'RecEngineModelType' in params ? params.RecEngineModelType : null;
        this.Data = 'Data' in params ? params.Data : null;
        this.DataLen = 'DataLen' in params ? params.DataLen : null;
        this.VoiceId = 'VoiceId' in params ? params.VoiceId : null;
        this.IsEnd = 'IsEnd' in params ? params.IsEnd : null;
        this.VoiceFormat = 'VoiceFormat' in params ? params.VoiceFormat : null;
        this.OpenTranslate = 'OpenTranslate' in params ? params.OpenTranslate : null;
        this.SourceLanguage = 'SourceLanguage' in params ? params.SourceLanguage : null;
        this.TargetLanguage = 'TargetLanguage' in params ? params.TargetLanguage : null;
        this.Seq = 'Seq' in params ? params.Seq : null;

    }
}

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
         * 子服务类型。2，一句话识别。
         * @type {number || null}
         */
        this.SubServiceType = null;

        /**
         * 引擎类型。8k：电话 8k 通用模型；16k：16k 通用模型。只支持单声道音频识别。
         * @type {string || null}
         */
        this.EngSerViceType = null;

        /**
         * 语音数据来源。0：语音 URL；1：语音数据（post body）。
         * @type {number || null}
         */
        this.SourceType = null;

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
         * 语音 URL，公网可下载。当 SourceType 值为 0 时须填写该字段，为 1 时不填；URL 的长度大于 0，小于 2048，需进行urlencode编码。音频时间长度要小于60s。
         * @type {string || null}
         */
        this.Url = null;

        /**
         * 语音数据，当SourceType 值为1时必须填写，为0可不写。要base64编码(采用python语言时注意读取文件应该为string而不是byte，以byte格式读取后要decode()。编码后的数据不可带有回车换行符)。音频数据要小于600kB。
         * @type {string || null}
         */
        this.Data = null;

        /**
         * 数据长度，当 SourceType 值为1时必须填写，为0可不写（此数据长度为数据未进行base64编码时的数据长度）。
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
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.SubServiceType = 'SubServiceType' in params ? params.SubServiceType : null;
        this.EngSerViceType = 'EngSerViceType' in params ? params.EngSerViceType : null;
        this.SourceType = 'SourceType' in params ? params.SourceType : null;
        this.VoiceFormat = 'VoiceFormat' in params ? params.VoiceFormat : null;
        this.UsrAudioKey = 'UsrAudioKey' in params ? params.UsrAudioKey : null;
        this.Url = 'Url' in params ? params.Url : null;
        this.Data = 'Data' in params ? params.Data : null;
        this.DataLen = 'DataLen' in params ? params.DataLen : null;

    }
}

/**
 * TextToVoice请求参数结构体
 * @class
 */
class TextToVoiceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 合成语音的源文本，按UTF-8编码统一计算，中文最大支持350字符，英文最大支持500字符
         * @type {string || null}
         */
        this.Text = null;

        /**
         * 一次请求对应一个SessionId，会原样返回，建议传入类似于uuid的字符串防止重复。
         * @type {string || null}
         */
        this.SessionId = null;

        /**
         * 模型类型，1-默认模型。
         * @type {number || null}
         */
        this.ModelType = null;

        /**
         * 音量大小，范围：[0，10]，分别对应11个等级的音量，默认为0，代表正常音量。没有静音选项。
输入除以上整数之外的其他参数不生效，按默认值处理。
         * @type {number || null}
         */
        this.Volume = null;

        /**
         * 语速，范围：[-2，2]，分别对应不同语速：<li>-2代表0.6倍</li><li>-1代表0.8倍</li><li>0代表1.0倍（默认）</li><li>1代表1.2倍</li><li>2代表1.5倍</li>输入除以上整数之外的其他参数不生效，按默认值处理。
         * @type {number || null}
         */
        this.Speed = null;

        /**
         * 项目id，用户自定义，默认为0。
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * 音色<li>0-亲和女声(默认)</li><li>1-亲和男声</li><li>2-成熟男声</li><li>3-活力男声</li><li>4-温暖女声</li><li>5-情感女声</li><li>6-情感男声</li>
         * @type {number || null}
         */
        this.VoiceType = null;

        /**
         * 主语言类型：<li>1-中文（默认）</li><li>2-英文</li>
         * @type {number || null}
         */
        this.PrimaryLanguage = null;

        /**
         * 音频采样率：<li>16000：16k（默认）</li><li>8000：8k</li>
         * @type {number || null}
         */
        this.SampleRate = null;

        /**
         * 返回音频格式，可取值：wav（默认），mp3
         * @type {string || null}
         */
        this.Codec = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Text = 'Text' in params ? params.Text : null;
        this.SessionId = 'SessionId' in params ? params.SessionId : null;
        this.ModelType = 'ModelType' in params ? params.ModelType : null;
        this.Volume = 'Volume' in params ? params.Volume : null;
        this.Speed = 'Speed' in params ? params.Speed : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.VoiceType = 'VoiceType' in params ? params.VoiceType : null;
        this.PrimaryLanguage = 'PrimaryLanguage' in params ? params.PrimaryLanguage : null;
        this.SampleRate = 'SampleRate' in params ? params.SampleRate : null;
        this.Codec = 'Codec' in params ? params.Codec : null;

    }
}

/**
 * Chat返回参数结构体
 * @class
 */
class ChatResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 聊天输出文本
         * @type {string || null}
         */
        this.Answer = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
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
        this.Answer = 'Answer' in params ? params.Answer : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

module.exports = {
    ChatRequest: ChatRequest,
    SentenceRecognitionResponse: SentenceRecognitionResponse,
    SimultaneousInterpretingResponse: SimultaneousInterpretingResponse,
    TextToVoiceResponse: TextToVoiceResponse,
    SimultaneousInterpretingRequest: SimultaneousInterpretingRequest,
    SentenceRecognitionRequest: SentenceRecognitionRequest,
    TextToVoiceRequest: TextToVoiceRequest,
    ChatResponse: ChatResponse,

}
