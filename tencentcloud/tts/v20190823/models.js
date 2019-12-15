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
 * TextToVoice返回参数结构体
 * @class
 */
class TextToVoiceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * base64编码的wav/mp3音频数据
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
 * TextToVoice请求参数结构体
 * @class
 */
class TextToVoiceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 合成语音的源文本，按UTF-8编码统一计算。
中文最大支持100个汉字（全角标点符号算一个汉字）；英文最大支持400个字母（半角标点符号算一个字母）。包含空格等字符时需要url encode再传输。
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
         * 语速，范围：[-2，2]，分别对应不同语速：<li>-2代表0.6倍</li><li>-1代表0.8倍</li><li>0代表1.0倍（默认）</li><li>1代表1.2倍</li><li>2代表1.5倍</li>如果需要更细化的语速，可以保留小数点后一位，例如0.5 1.1 1.8等。<br>
         * @type {number || null}
         */
        this.Speed = null;

        /**
         * 项目id，用户自定义，默认为0。
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * 音色<li>0-亲和女声(默认)</li><li>1-亲和男声</li><li>2-成熟男声</li><li>4-温暖女声</li><li>5-情感女声</li><li>6-情感男声</li>
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

module.exports = {
    TextToVoiceResponse: TextToVoiceResponse,
    TextToVoiceRequest: TextToVoiceRequest,

}
