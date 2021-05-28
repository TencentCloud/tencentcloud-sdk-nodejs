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
const OutputRecognizeEffectiveFlowValue = models.OutputRecognizeEffectiveFlowValue;
const OutputKolData = models.OutputKolData;
const InputKolBspData = models.InputKolBspData;
const RecognizeEffectiveFlowRequest = models.RecognizeEffectiveFlowRequest;
const EnhanceTaDegreeRequest = models.EnhanceTaDegreeRequest;
const OutputRecognizeTargetAudienceValue = models.OutputRecognizeTargetAudienceValue;
const SendTrafficSecuritySmsMessageRequest = models.SendTrafficSecuritySmsMessageRequest;
const DetectFraudKOLResponse = models.DetectFraudKOLResponse;
const RecognizeCustomizedAudienceResponse = models.RecognizeCustomizedAudienceResponse;
const OutputKolValue = models.OutputKolValue;
const EnhanceTaDegreeResponse = models.EnhanceTaDegreeResponse;
const InputTaBspData = models.InputTaBspData;
const OutputSendTrafficSecuritySmsMsg = models.OutputSendTrafficSecuritySmsMsg;
const RecognizeEffectiveFlowResponse = models.RecognizeEffectiveFlowResponse;
const SendTrafficSecuritySmsMessageResponse = models.SendTrafficSecuritySmsMessageResponse;
const DetectFraudKOLRequest = models.DetectFraudKOLRequest;
const RecognizeCustomizedAudienceRequest = models.RecognizeCustomizedAudienceRequest;
const RecognizeTargetAudienceRequest = models.RecognizeTargetAudienceRequest;
const RecognizeTargetAudienceResponse = models.RecognizeTargetAudienceResponse;
const OutputRecognizeEffectiveFlow = models.OutputRecognizeEffectiveFlow;
const InputRecognizeTargetAudience = models.InputRecognizeTargetAudience;
const OutputTaData = models.OutputTaData;
const OutputTaValue = models.OutputTaValue;
const RecognizePreciseTargetAudienceRequest = models.RecognizePreciseTargetAudienceRequest;
const InputKolDataList = models.InputKolDataList;
const InputRecognizeEffectiveFlow = models.InputRecognizeEffectiveFlow;
const RecognizePreciseTargetAudienceResponse = models.RecognizePreciseTargetAudienceResponse;
const OutputRecognizeTargetAudience = models.OutputRecognizeTargetAudience;
const InputSendTrafficSecuritySmsMsg = models.InputSendTrafficSecuritySmsMsg;


/**
 * taf client
 * @class
 */
class TafClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("taf.tencentcloudapi.com", "2020-02-10", credential, region, profile);
    }
    
    /**
     * 流量反欺诈-虚假TA识别
     * @param {EnhanceTaDegreeRequest} req
     * @param {function(string, EnhanceTaDegreeResponse):void} cb
     * @public
     */
    EnhanceTaDegree(req, cb) {
        let resp = new EnhanceTaDegreeResponse();
        this.request("EnhanceTaDegree", req, resp, cb);
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

    /**
     * 该服务已不再对外提供能力

筛选敏感易骚扰人群
     * @param {RecognizeEffectiveFlowRequest} req
     * @param {function(string, RecognizeEffectiveFlowResponse):void} cb
     * @public
     */
    RecognizeEffectiveFlow(req, cb) {
        let resp = new RecognizeEffectiveFlowResponse();
        this.request("RecognizeEffectiveFlow", req, resp, cb);
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
     * DetectFraudKOL
     * @param {DetectFraudKOLRequest} req
     * @param {function(string, DetectFraudKOLResponse):void} cb
     * @public
     */
    DetectFraudKOL(req, cb) {
        let resp = new DetectFraudKOLResponse();
        this.request("DetectFraudKOL", req, resp, cb);
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
     * SendTrafficSecuritySmsMessage
     * @param {SendTrafficSecuritySmsMessageRequest} req
     * @param {function(string, SendTrafficSecuritySmsMessageResponse):void} cb
     * @public
     */
    SendTrafficSecuritySmsMessage(req, cb) {
        let resp = new SendTrafficSecuritySmsMessageResponse();
        this.request("SendTrafficSecuritySmsMessage", req, resp, cb);
    }


}
module.exports = TafClient;
