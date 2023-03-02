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
         * 时间戳信息，若未开启时间戳，则返回空数组。
         * @type {Array.<Subtitle> || null}
         */
        this.Subtitles = null;

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

        if (params.Subtitles) {
            this.Subtitles = new Array();
            for (let z in params.Subtitles) {
                let obj = new Subtitle();
                obj.deserialize(params.Subtitles[z]);
                this.Subtitles.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateTtsTask返回参数结构体
 * @class
 */
class CreateTtsTaskResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务 id
         * @type {CreateTtsTaskRespData || null}
         */
        this.Data = null;

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

        if (params.Data) {
            let obj = new CreateTtsTaskRespData();
            obj.deserialize(params.Data)
            this.Data = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeTtsTaskStatus返回参数结构体
 * @class
 */
class DescribeTtsTaskStatusResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务状态返回
         * @type {DescribeTtsTaskStatusRespData || null}
         */
        this.Data = null;

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

        if (params.Data) {
            let obj = new DescribeTtsTaskStatusRespData();
            obj.deserialize(params.Data)
            this.Data = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 异步合成请求的返回数据
 * @class
 */
class CreateTtsTaskRespData extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务ID，可通过此ID在轮询接口获取合成状态与结果。注意：TaskId数据类型为string
         * @type {string || null}
         */
        this.TaskId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;

    }
}

/**
 * 获取异步合成结果的返回参数
 * @class
 */
class DescribeTtsTaskStatusRespData extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务标识。
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * 任务状态码，0：任务等待，1：任务执行中，2：任务成功，3：任务失败。
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 任务状态，waiting：任务等待，doing：任务执行中，success：任务成功，failed：任务失败。
         * @type {string || null}
         */
        this.StatusStr = null;

        /**
         * 合成音频COS地址（链接有效期1天）。
         * @type {string || null}
         */
        this.ResultUrl = null;

        /**
         * 失败原因说明。
         * @type {string || null}
         */
        this.ErrorMsg = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.StatusStr = 'StatusStr' in params ? params.StatusStr : null;
        this.ResultUrl = 'ResultUrl' in params ? params.ResultUrl : null;
        this.ErrorMsg = 'ErrorMsg' in params ? params.ErrorMsg : null;

    }
}

/**
 * 时间戳信息。
 * @class
 */
class Subtitle extends  AbstractModel {
    constructor(){
        super();

        /**
         * ⽂本信息。
         * @type {string || null}
         */
        this.Text = null;

        /**
         * ⽂本对应tts语⾳开始时间戳，单位ms。
         * @type {number || null}
         */
        this.BeginTime = null;

        /**
         * ⽂本对应tts语⾳结束时间戳，单位ms。
         * @type {number || null}
         */
        this.EndTime = null;

        /**
         * 该字在整句中的开始位置，从0开始。
         * @type {number || null}
         */
        this.BeginIndex = null;

        /**
         * 该字在整句中的结束位置，从0开始。
         * @type {number || null}
         */
        this.EndIndex = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Text = 'Text' in params ? params.Text : null;
        this.BeginTime = 'BeginTime' in params ? params.BeginTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.BeginIndex = 'BeginIndex' in params ? params.BeginIndex : null;
        this.EndIndex = 'EndIndex' in params ? params.EndIndex : null;

    }
}

/**
 * DescribeTtsTaskStatus请求参数结构体
 * @class
 */
class DescribeTtsTaskStatusRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务id
         * @type {string || null}
         */
        this.TaskId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;

    }
}

/**
 * CreateTtsTask请求参数结构体
 * @class
 */
class CreateTtsTaskRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 合成语音的源文本，按UTF-8编码统一计算，最多支持10万字符
         * @type {string || null}
         */
        this.Text = null;

        /**
         * 模型类型，1-默认模型。
         * @type {number || null}
         */
        this.ModelType = null;

        /**
         * 音量大小，范围：[0，10]，分别对应11个等级的音量，默认为0，代表正常音量。没有静音选项。
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
         * 标准音色<li>10510000-智逍遥，旁对白阅读风格男声</li><li>1001-智瑜，情感女声</li><li>1002-智聆，通用女声</li><li>1003-智美，客服女声</li><li>1004-智云，通用男声</li><li>1005-智莉，通用女声</li><li>1007-智娜，客服女声</li><li>1008-智琪，客服女声</li><li>1009-智芸，知性女声</li><li>1010-智华，通用男声</li><li>1017-智蓉，情感女声</li><li>1018-智靖，情感男声</li><li>1050-WeJack，英文男声</li><li>1051-WeRose，英文女声</li>精品音色<br>精品音色拟真度更高，价格不同于标准音色，查看[购买指南](https://cloud.tencent.com/document/product/1073/34112)<br><li>100510000-智逍遥，阅读男声</li><li>101001-智瑜，情感女声</li><li>101002-智聆，通用女声</li><li>101003-智美，客服女声</li><li>101004-智云，通用男声</li><li>101005-智莉，通用女声</li><li>101006-智言，助手女声</li><li>101007-智娜，客服女声</li><li>101008-智琪，客服女声</li><li>101009-智芸，知性女声</li><li>101010-智华，通用男声</li><li>101011-智燕，新闻女声</li><li>101012-智丹，新闻女声</li><li>101013-智辉，新闻男声</li><li>101014-智宁，新闻男声</li><li>101015-智萌，男童声</li><li>101016-智甜，女童声</li><li>101017-智蓉，情感女声</li><li>101018-智靖，情感男声</li><li>101019-智彤，粤语女声</li><li>101020-智刚，新闻男声</li><li>101021-智瑞，新闻男声</li><li>101022-智虹，新闻女声</li><li>101023-智萱，聊天女声</li><li>101024-智皓，聊天男声</li><li>101025-智薇，聊天女声</li><li>101026-智希，通用女声</li><li>101027-智梅，通用女声</li><li>101028-智洁，通用女声</li><li>101029-智凯，通用男声</li><li>101030-智柯，通用男声</li><li>101031-智奎，通用男声</li><li>101032-智芳，通用女声</li><li>101033-智蓓，客服女声</li><li>101034-智莲，通用女声</li><li>101035-智依，通用女声</li><li>101040-智川，四川女声</li><li>101050-WeJack，英文男声</li><li>101051-WeRose，英文女声</li><li>101052-智味，通用男声</li>
<li>101053-智方，通用男声</li>
<li>101054-智友，通用男声</li>
<li>101055-智付，通用女声</li>
<li>101056-智林，东北男声</li>
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
         * 返回音频格式，可取值：mp3（默认），wav，pcm
         * @type {string || null}
         */
        this.Codec = null;

        /**
         * 回调 URL，用户自行搭建的用于接收识别结果的服务URL。如果用户使用轮询方式获取识别结果，则无需提交该参数。[回调说明](https://cloud.tencent.com/document/product/1073/55746)
         * @type {string || null}
         */
        this.CallbackUrl = null;

        /**
         * 旁白与对白文本解析，分别合成相应风格（仅适用于旁对白音色），默认 false
         * @type {boolean || null}
         */
        this.VoiceoverDialogueSplit = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Text = 'Text' in params ? params.Text : null;
        this.ModelType = 'ModelType' in params ? params.ModelType : null;
        this.Volume = 'Volume' in params ? params.Volume : null;
        this.Speed = 'Speed' in params ? params.Speed : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.VoiceType = 'VoiceType' in params ? params.VoiceType : null;
        this.PrimaryLanguage = 'PrimaryLanguage' in params ? params.PrimaryLanguage : null;
        this.SampleRate = 'SampleRate' in params ? params.SampleRate : null;
        this.Codec = 'Codec' in params ? params.Codec : null;
        this.CallbackUrl = 'CallbackUrl' in params ? params.CallbackUrl : null;
        this.VoiceoverDialogueSplit = 'VoiceoverDialogueSplit' in params ? params.VoiceoverDialogueSplit : null;

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
中文最大支持150个汉字（全角标点符号算一个汉字）；英文最大支持500个字母（半角标点符号算一个字母）。
         * @type {string || null}
         */
        this.Text = null;

        /**
         * 一次请求对应一个SessionId，会原样返回，建议传入类似于uuid的字符串防止重复。
         * @type {string || null}
         */
        this.SessionId = null;

        /**
         * 音量大小，范围：[0，10]，分别对应11个等级的音量，默认为0，代表正常音量。没有静音选项。
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
         * 模型类型，1-默认模型。
         * @type {number || null}
         */
        this.ModelType = null;

        /**
         * 标准音色<li>10510000-智逍遥，阅读男声</li><li>1001-智瑜，情感女声</li><li>1002-智聆，通用女声</li><li>1003-智美，客服女声</li><li>1004-智云，通用男声</li><li>1005-智莉，通用女声</li><li>1007-智娜，客服女声</li><li>1008-智琪，客服女声</li><li>1009-智芸，知性女声</li><li>1010-智华，通用男声</li><li>1017-智蓉，情感女声</li><li>1018-智靖，情感男声</li><li>1050-WeJack，英文男声</li><li>1051-WeRose，英文女声</li>精品音色<br>精品音色拟真度更高，价格不同于标准音色，查看[购买指南](https://cloud.tencent.com/document/product/1073/34112)<br><li>100510000-智逍遥，阅读男声</li><li>101001-智瑜，情感女声</li><li>101002-智聆，通用女声</li><li>101003-智美，客服女声</li><li>101004-智云，通用男声</li><li>101005-智莉，通用女声</li><li>101006-智言，助手女声</li><li>101007-智娜，客服女声</li><li>101008-智琪，客服女声</li><li>101009-智芸，知性女声</li><li>101010-智华，通用男声</li><li>101011-智燕，新闻女声</li><li>101012-智丹，新闻女声</li><li>101013-智辉，新闻男声</li><li>101014-智宁，新闻男声</li><li>101015-智萌，男童声</li><li>101016-智甜，女童声</li><li>101017-智蓉，情感女声</li><li>101018-智靖，情感男声</li><li>101019-智彤，粤语女声</li><li>101020-智刚，新闻男声</li><li>101021-智瑞，新闻男声</li><li>101022-智虹，新闻女声</li><li>101023-智萱，聊天女声</li><li>101024-智皓，聊天男声</li><li>101025-智薇，聊天女声</li><li>101026-智希，通用女声</li><li>101027-智梅，通用女声</li><li>101028-智洁，通用女声</li><li>101029-智凯，通用男声</li><li>101030-智柯，通用男声</li><li>101031-智奎，通用男声</li><li>101032-智芳，通用女声</li><li>101033-智蓓，客服女声</li><li>101034-智莲，通用女声</li><li>101035-智依，通用女声</li><li>101040-智川，四川女声</li><li>101050-WeJack，英文男声</li><li>101051-WeRose，英文女声</li><li>101052-智味，通用男声</li>
<li>101053-智方，通用男声</li>
<li>101054-智友，通用男声</li>
<li>101055-智付，通用女声</li>
<li>101056-智林，东北男声</li>
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
         * 返回音频格式，可取值：wav（默认），mp3，pcm
         * @type {string || null}
         */
        this.Codec = null;

        /**
         * 是否开启时间戳功能，默认为false。
         * @type {boolean || null}
         */
        this.EnableSubtitle = null;

        /**
         * 断句敏感阈值，默认值为：0，取值范围：[0,1,2]。该值越大越不容易断句，模型会更倾向于仅按照标点符号断句。此参数建议不要随意调整，可能会影响合成效果。
         * @type {number || null}
         */
        this.SegmentRate = null;

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
        this.Volume = 'Volume' in params ? params.Volume : null;
        this.Speed = 'Speed' in params ? params.Speed : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.ModelType = 'ModelType' in params ? params.ModelType : null;
        this.VoiceType = 'VoiceType' in params ? params.VoiceType : null;
        this.PrimaryLanguage = 'PrimaryLanguage' in params ? params.PrimaryLanguage : null;
        this.SampleRate = 'SampleRate' in params ? params.SampleRate : null;
        this.Codec = 'Codec' in params ? params.Codec : null;
        this.EnableSubtitle = 'EnableSubtitle' in params ? params.EnableSubtitle : null;
        this.SegmentRate = 'SegmentRate' in params ? params.SegmentRate : null;

    }
}

module.exports = {
    TextToVoiceResponse: TextToVoiceResponse,
    CreateTtsTaskResponse: CreateTtsTaskResponse,
    DescribeTtsTaskStatusResponse: DescribeTtsTaskStatusResponse,
    CreateTtsTaskRespData: CreateTtsTaskRespData,
    DescribeTtsTaskStatusRespData: DescribeTtsTaskStatusRespData,
    Subtitle: Subtitle,
    DescribeTtsTaskStatusRequest: DescribeTtsTaskStatusRequest,
    CreateTtsTaskRequest: CreateTtsTaskRequest,
    TextToVoiceRequest: TextToVoiceRequest,

}
