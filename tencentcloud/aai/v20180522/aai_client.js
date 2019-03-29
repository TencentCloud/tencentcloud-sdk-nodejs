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
const ChatRequest = models.ChatRequest;
const SentenceRecognitionResponse = models.SentenceRecognitionResponse;
const SimultaneousInterpretingResponse = models.SimultaneousInterpretingResponse;
const TextToVoiceResponse = models.TextToVoiceResponse;
const SimultaneousInterpretingRequest = models.SimultaneousInterpretingRequest;
const SentenceRecognitionRequest = models.SentenceRecognitionRequest;
const TextToVoiceRequest = models.TextToVoiceRequest;
const ChatResponse = models.ChatResponse;


/**
 * aai client
 * @class
 */
class AaiClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("aai.tencentcloudapi.com", "2018-05-22", credential, region, profile);
    }
    
    /**
     * 该接口是实时流式识别，可同时返回语音识别文本及翻译文本，当前仅支持中文和英文。该接口可配合同传windows客户端，提供会议现场同传服务。
     * @param {SimultaneousInterpretingRequest} req
     * @param {function(string, SimultaneousInterpretingResponse):void} cb
     * @public
     */
    SimultaneousInterpreting(req, cb) {
        let resp = new SimultaneousInterpretingResponse();
        this.request("SimultaneousInterpreting", req, resp, cb);
    }

    /**
     * 识别60s内的短语音，当音频放在请求body中传输时整个请求大小不能超过600KB，当音频以url方式传输时，音频时长不可超过60s。所有请求参数放在post的body中采用x-www-form-urlencoded（数据转换成一个字符串（name1=value1&name2=value2…）进行urlencode后）编码传输。现暂只支持中文普通话识别，支持识别8k(16k)的16bit的mp3或者wav音频。
     * @param {SentenceRecognitionRequest} req
     * @param {function(string, SentenceRecognitionResponse):void} cb
     * @public
     */
    SentenceRecognition(req, cb) {
        let resp = new SentenceRecognitionResponse();
        this.request("SentenceRecognition", req, resp, cb);
    }

    /**
     * 提供基于文本的基础聊天能力，可以让您的应用快速拥有具备深度语义理解的机器聊天功能。
     * @param {ChatRequest} req
     * @param {function(string, ChatResponse):void} cb
     * @public
     */
    Chat(req, cb) {
        let resp = new ChatResponse();
        this.request("Chat", req, resp, cb);
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
