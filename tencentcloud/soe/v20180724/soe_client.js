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
const SentenceInfo = models.SentenceInfo;
const InitOralProcessRequest = models.InitOralProcessRequest;
const Keyword = models.Keyword;
const KeywordEvaluateRequest = models.KeywordEvaluateRequest;
const TransmitOralProcessRequest = models.TransmitOralProcessRequest;
const TransmitOralProcessResponse = models.TransmitOralProcessResponse;
const InitOralProcessResponse = models.InitOralProcessResponse;
const KeywordEvaluateResponse = models.KeywordEvaluateResponse;
const PhoneInfo = models.PhoneInfo;
const WordRsp = models.WordRsp;
const KeywordScore = models.KeywordScore;
const TransmitOralProcessWithInitRequest = models.TransmitOralProcessWithInitRequest;
const TransmitOralProcessWithInitResponse = models.TransmitOralProcessWithInitResponse;


/**
 * soe client
 * @class
 */
class SoeClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("soe.tencentcloudapi.com", "2018-07-24", credential, region, profile);
    }
    
    /**
     * 初始化发音评估过程，每一轮评估前进行调用。语音输入模式分为流式模式和非流式模式，流式模式支持数据分片传输，可以加快评估响应速度。评估模式分为词模式和句子模式，词模式会标注每个音节的详细信息；句子模式会有完整度和流利度的评估。
     * @param {InitOralProcessRequest} req
     * @param {function(string, InitOralProcessResponse):void} cb
     * @public
     */
    InitOralProcess(req, cb) {
        let resp = new InitOralProcessResponse();
        this.request("InitOralProcess", req, resp, cb);
    }

    /**
     * 指定主题关键词词汇评估，分析语音与关键词的切合程度，可指定多个关键词，支持中文英文同时评测。分片传输时，尽量保证纯异步调用，即不等待上一个分片的传输结果边录边传，这样可以尽可能早的提供音频数据。音频源目前仅支持16k采样率16bit单声道编码方式，如有不一致可能导致评估不准确或失败。
     * @param {KeywordEvaluateRequest} req
     * @param {function(string, KeywordEvaluateResponse):void} cb
     * @public
     */
    KeywordEvaluate(req, cb) {
        let resp = new KeywordEvaluateResponse();
        this.request("KeywordEvaluate", req, resp, cb);
    }

    /**
     * 传输音频数据，必须在完成发音评估初始化接口之后调用，且SessonId要与初始化接口保持一致。分片传输时，尽量保证SeqId顺序传输。音频源目前仅支持16k采样率16bit单声道编码方式，如有不一致可能导致评估不准确或失败。
     * @param {TransmitOralProcessRequest} req
     * @param {function(string, TransmitOralProcessResponse):void} cb
     * @public
     */
    TransmitOralProcess(req, cb) {
        let resp = new TransmitOralProcessResponse();
        this.request("TransmitOralProcess", req, resp, cb);
    }

    /**
     * 初始化并传输音频数据，分片传输时，尽量保证SeqId顺序传输。音频源目前仅支持16k采样率16bit单声道编码方式，如有不一致可能导致评估不准确或失败。
     * @param {TransmitOralProcessWithInitRequest} req
     * @param {function(string, TransmitOralProcessWithInitResponse):void} cb
     * @public
     */
    TransmitOralProcessWithInit(req, cb) {
        let resp = new TransmitOralProcessWithInitResponse();
        this.request("TransmitOralProcessWithInit", req, resp, cb);
    }


}
module.exports = SoeClient;
