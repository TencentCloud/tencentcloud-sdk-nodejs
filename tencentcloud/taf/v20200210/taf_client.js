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
const InputBusinessEncryptData = models.InputBusinessEncryptData;
const RecognizeCustomizedAudienceRequest = models.RecognizeCustomizedAudienceRequest;
const RecognizeTargetAudienceResponse = models.RecognizeTargetAudienceResponse;
const OutputRecognizeTargetAudienceValue = models.OutputRecognizeTargetAudienceValue;
const OutputRecognizeTargetAudience = models.OutputRecognizeTargetAudience;
const RecognizeCustomizedAudienceResponse = models.RecognizeCustomizedAudienceResponse;
const InputRecognizeTargetAudience = models.InputRecognizeTargetAudience;
const Device = models.Device;
const RecognizePreciseTargetAudienceRequest = models.RecognizePreciseTargetAudienceRequest;
const RecognizeTargetAudienceRequest = models.RecognizeTargetAudienceRequest;
const RecognizePreciseTargetAudienceResponse = models.RecognizePreciseTargetAudienceResponse;


/**
 * taf client
 * @class
 */
class TafClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("taf.tencentcloudapi.com", "2020-02-10", credential, region, profile);
    }
    
    /**
     * 流量反欺诈-流量验准定制版
     * @param {RecognizeCustomizedAudienceRequest} req
     * @param {function(string, RecognizeCustomizedAudienceResponse):void} cb
     * @public
     */
    RecognizeCustomizedAudience(req, cb) {
        let resp = new RecognizeCustomizedAudienceResponse();
        this.request("RecognizeCustomizedAudience", req, resp, cb);
    }

    /**
     * 流量反欺诈-流量验准高级版
     * @param {RecognizePreciseTargetAudienceRequest} req
     * @param {function(string, RecognizePreciseTargetAudienceResponse):void} cb
     * @public
     */
    RecognizePreciseTargetAudience(req, cb) {
        let resp = new RecognizePreciseTargetAudienceResponse();
        this.request("RecognizePreciseTargetAudience", req, resp, cb);
    }

    /**
     * 流量反欺诈-流量验准
     * @param {RecognizeTargetAudienceRequest} req
     * @param {function(string, RecognizeTargetAudienceResponse):void} cb
     * @public
     */
    RecognizeTargetAudience(req, cb) {
        let resp = new RecognizeTargetAudienceResponse();
        this.request("RecognizeTargetAudience", req, resp, cb);
    }


}
module.exports = TafClient;
