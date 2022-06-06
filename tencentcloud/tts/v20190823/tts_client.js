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
const models = require("./models");
const AbstractClient = require('../../common/abstract_client')
const TextToVoiceResponse = models.TextToVoiceResponse;
const CreateTtsTaskResponse = models.CreateTtsTaskResponse;
const DescribeTtsTaskStatusResponse = models.DescribeTtsTaskStatusResponse;
const CreateTtsTaskRespData = models.CreateTtsTaskRespData;
const DescribeTtsTaskStatusRespData = models.DescribeTtsTaskStatusRespData;
const DescribeTtsTaskStatusRequest = models.DescribeTtsTaskStatusRequest;
const CreateTtsTaskRequest = models.CreateTtsTaskRequest;
const TextToVoiceRequest = models.TextToVoiceRequest;


/**
 * tts client
 * @class
 */
class TtsClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("tts.tencentcloudapi.com", "2019-08-23", credential, region, profile);
    }
    
    /**
     * 本接口服务对10万字符以内的文本进行语音合成，异步返回音频结果。满足一次性合成较长文本的客户需求，如阅读播报、新闻媒体等场景。

<li>支持音频格式：mp3,wav,pcm</li>
<li>支持音频采样率：16000 Hz, 8000 Hz</li>
<li>支持中文普通话、英文、中英文混读、粤语合成</li>
<li>支持语速、音量设置</li>
<li>支持回调或轮询的方式获取结果，结果获取请参考 长文本语音合成结果查询。</li>
<li>长文本语音合成任务完成后，合成音频结果在服务端可保存24小时</li>
     * @param {CreateTtsTaskRequest} req
     * @param {function(string, CreateTtsTaskResponse):void} cb
     * @public
     */
    CreateTtsTask(req, cb) {
        let resp = new CreateTtsTaskResponse();
        this.request("CreateTtsTask", req, resp, cb);
    }

    /**
     * 在调用长文本语音合成请求接口后，有回调和轮询两种方式获取识别结果。

<li>当采用回调方式时，合成完毕后会将结果通过 POST 请求的形式通知到用户在请求时填写的回调 URL，具体请参见 长文本语音合成结果查询 。</li>
<li>当采用轮询方式时，需要主动提交任务ID来轮询识别结果，共有任务成功、等待、执行中和失败四种结果，具体信息请参见下文说明。</li>
     * @param {DescribeTtsTaskStatusRequest} req
     * @param {function(string, DescribeTtsTaskStatusResponse):void} cb
     * @public
     */
    DescribeTtsTaskStatus(req, cb) {
        let resp = new DescribeTtsTaskStatusResponse();
        this.request("DescribeTtsTaskStatus", req, resp, cb);
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
module.exports = TtsClient;
