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
const SentenceRecognitionRequest = models.SentenceRecognitionRequest;
const SentenceRecognitionResponse = models.SentenceRecognitionResponse;


/**
 * asr client
 * @class
 */
class AsrClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("asr.tencentcloudapi.com", "2019-06-14", credential, region, profile);
    }
    
    /**
     * 识别60s内的短语音。当音频文件通过请求中body内容上传时，请求大小不能超过600KB；当音频以url方式传输时，音频时长不可超过60s。所有请求参数放在POST请求的body中，编码类型采用采用x-www-form-urlencoded，参数进行urlencode编码后传输。现暂只支持中文普通话识别，支持识别8k16bit和16k16bit的mp3或者wav音频。
     * @param {SentenceRecognitionRequest} req
     * @param {function(string, SentenceRecognitionResponse):void} cb
     * @public
     */
    SentenceRecognition(req, cb) {
        let resp = new SentenceRecognitionResponse();
        this.request("SentenceRecognition", req, resp, cb);
    }


}
module.exports = AsrClient;
