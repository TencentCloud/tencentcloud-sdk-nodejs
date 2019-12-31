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
const MobileNetworkTimeVerificationResponse = models.MobileNetworkTimeVerificationResponse;
const LivenessRequest = models.LivenessRequest;
const LivenessCompareResponse = models.LivenessCompareResponse;
const GetLiveCodeRequest = models.GetLiveCodeRequest;
const IdCardVerificationRequest = models.IdCardVerificationRequest;
const BankCardVerificationRequest = models.BankCardVerificationRequest;
const PhoneVerificationRequest = models.PhoneVerificationRequest;
const DetectAuthResponse = models.DetectAuthResponse;
const PhoneVerificationResponse = models.PhoneVerificationResponse;
const IdCardOCRVerificationRequest = models.IdCardOCRVerificationRequest;
const BankCard4EVerificationResponse = models.BankCard4EVerificationResponse;
const MobileStatusRequest = models.MobileStatusRequest;
const BankCard2EVerificationRequest = models.BankCard2EVerificationRequest;
const LivenessRecognitionRequest = models.LivenessRecognitionRequest;
const MobileNetworkTimeVerificationRequest = models.MobileNetworkTimeVerificationRequest;
const LivenessRecognitionResponse = models.LivenessRecognitionResponse;
const MobileStatusResponse = models.MobileStatusResponse;
const IdCardOCRVerificationResponse = models.IdCardOCRVerificationResponse;
const DetectAuthRequest = models.DetectAuthRequest;
const MinorsVerificationResponse = models.MinorsVerificationResponse;
const BankCardVerificationResponse = models.BankCardVerificationResponse;
const ImageRecognitionRequest = models.ImageRecognitionRequest;
const BankCard4EVerificationRequest = models.BankCard4EVerificationRequest;
const GetActionSequenceResponse = models.GetActionSequenceResponse;
const MinorsVerificationRequest = models.MinorsVerificationRequest;
const ImageRecognitionResponse = models.ImageRecognitionResponse;
const GetActionSequenceRequest = models.GetActionSequenceRequest;
const GetDetectInfoResponse = models.GetDetectInfoResponse;
const GetLiveCodeResponse = models.GetLiveCodeResponse;
const GetDetectInfoRequest = models.GetDetectInfoRequest;
const BankCard2EVerificationResponse = models.BankCard2EVerificationResponse;
const IdCardVerificationResponse = models.IdCardVerificationResponse;
const LivenessCompareRequest = models.LivenessCompareRequest;
const LivenessResponse = models.LivenessResponse;


/**
 * faceid client
 * @class
 */
class FaceidClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("faceid.tencentcloudapi.com", "2018-03-01", credential, region, profile);
    }
    
    /**
     * 完成验证后，用BizToken调用本接口获取结果信息，BizToken生成后三天内（3\*24\*3,600秒）可多次拉取。
     * @param {GetDetectInfoRequest} req
     * @param {function(string, GetDetectInfoResponse):void} cb
     * @public
     */
    GetDetectInfo(req, cb) {
        let resp = new GetDetectInfoResponse();
        this.request("GetDetectInfo", req, resp, cb);
    }

    /**
     * 传入手机号或者姓名和身份证号，判断该信息是否已实名认证且年满18周岁。
     * @param {MinorsVerificationRequest} req
     * @param {function(string, MinorsVerificationResponse):void} cb
     * @public
     */
    MinorsVerification(req, cb) {
        let resp = new MinorsVerificationResponse();
        this.request("MinorsVerification", req, resp, cb);
    }

    /**
     * 使用数字活体检测模式前，需调用本接口获取数字验证码。
     * @param {GetLiveCodeRequest} req
     * @param {function(string, GetLiveCodeResponse):void} cb
     * @public
     */
    GetLiveCode(req, cb) {
        let resp = new GetLiveCodeResponse();
        this.request("GetLiveCode", req, resp, cb);
    }

    /**
     * 本接口用于查询手机号在网时长，输入手机号进行查询。
     * @param {MobileNetworkTimeVerificationRequest} req
     * @param {function(string, MobileNetworkTimeVerificationResponse):void} cb
     * @public
     */
    MobileNetworkTimeVerification(req, cb) {
        let resp = new MobileNetworkTimeVerificationResponse();
        this.request("MobileNetworkTimeVerification", req, resp, cb);
    }

    /**
     * 使用动作活体检测模式前，需调用本接口获取动作顺序。
     * @param {GetActionSequenceRequest} req
     * @param {function(string, GetActionSequenceResponse):void} cb
     * @public
     */
    GetActionSequence(req, cb) {
        let resp = new GetActionSequenceResponse();
        this.request("GetActionSequence", req, resp, cb);
    }

    /**
     * 传入视频和照片，先判断视频中是否为真人，判断为真人后，再判断该视频中的人与上传照片是否属于同一个人。
     * @param {LivenessCompareRequest} req
     * @param {function(string, LivenessCompareResponse):void} cb
     * @public
     */
    LivenessCompare(req, cb) {
        let resp = new LivenessCompareResponse();
        this.request("LivenessCompare", req, resp, cb);
    }

    /**
     * 本接口用于银行卡号、姓名、开户证件号信息的真实性和一致性。
     * @param {BankCardVerificationRequest} req
     * @param {function(string, BankCardVerificationResponse):void} cb
     * @public
     */
    BankCardVerification(req, cb) {
        let resp = new BankCardVerificationResponse();
        this.request("BankCardVerification", req, resp, cb);
    }

    /**
     * 活体检测
     * @param {LivenessRequest} req
     * @param {function(string, LivenessResponse):void} cb
     * @public
     */
    Liveness(req, cb) {
        let resp = new LivenessResponse();
        this.request("Liveness", req, resp, cb);
    }

    /**
     * 传入视频和身份信息，先判断视频中是否为真人，判断为真人后，再判断该视频中的人与公安权威库的证件照是否属于同一个人。
     * @param {LivenessRecognitionRequest} req
     * @param {function(string, LivenessRecognitionResponse):void} cb
     * @public
     */
    LivenessRecognition(req, cb) {
        let resp = new LivenessRecognitionResponse();
        this.request("LivenessRecognition", req, resp, cb);
    }

    /**
     * 本接口用于验证手机号的状态，您可以输入手机号进行查询。
     * @param {MobileStatusRequest} req
     * @param {function(string, MobileStatusResponse):void} cb
     * @public
     */
    MobileStatus(req, cb) {
        let resp = new MobileStatusResponse();
        this.request("MobileStatus", req, resp, cb);
    }

    /**
     * 传入姓名和身份证号，校验两者的真实性和一致性。
     * @param {IdCardVerificationRequest} req
     * @param {function(string, IdCardVerificationResponse):void} cb
     * @public
     */
    IdCardVerification(req, cb) {
        let resp = new IdCardVerificationResponse();
        this.request("IdCardVerification", req, resp, cb);
    }

    /**
     * 本接口用于校验姓名和身份证号的真实性和一致性，您可以通过输入姓名和身份证号或传入身份证人像面照片提供所需验证信息。
     * @param {IdCardOCRVerificationRequest} req
     * @param {function(string, IdCardOCRVerificationResponse):void} cb
     * @public
     */
    IdCardOCRVerification(req, cb) {
        let resp = new IdCardOCRVerificationResponse();
        this.request("IdCardOCRVerification", req, resp, cb);
    }

    /**
     * 本接口用于输入银行卡号、姓名、开户证件号、开户手机号，校验信息的真实性和一致性。
     * @param {BankCard4EVerificationRequest} req
     * @param {function(string, BankCard4EVerificationResponse):void} cb
     * @public
     */
    BankCard4EVerification(req, cb) {
        let resp = new BankCard4EVerificationResponse();
        this.request("BankCard4EVerification", req, resp, cb);
    }

    /**
     * 每次调用人脸核身SaaS化服务前，需先调用本接口获取BizToken，用来串联核身流程，在验证完成后，用于获取验证结果信息。
     * @param {DetectAuthRequest} req
     * @param {function(string, DetectAuthResponse):void} cb
     * @public
     */
    DetectAuth(req, cb) {
        let resp = new DetectAuthResponse();
        this.request("DetectAuth", req, resp, cb);
    }

    /**
     * 传入照片和身份信息，判断该照片与公安权威库的证件照是否属于同一个人。
     * @param {ImageRecognitionRequest} req
     * @param {function(string, ImageRecognitionResponse):void} cb
     * @public
     */
    ImageRecognition(req, cb) {
        let resp = new ImageRecognitionResponse();
        this.request("ImageRecognition", req, resp, cb);
    }

    /**
     * 本接口用于校验姓名和银行卡号的真实性和一致性。
     * @param {BankCard2EVerificationRequest} req
     * @param {function(string, BankCard2EVerificationResponse):void} cb
     * @public
     */
    BankCard2EVerification(req, cb) {
        let resp = new BankCard2EVerificationResponse();
        this.request("BankCard2EVerification", req, resp, cb);
    }

    /**
     * 本接口用于校验手机号、姓名和身份证号的真实性和一致性。
     * @param {PhoneVerificationRequest} req
     * @param {function(string, PhoneVerificationResponse):void} cb
     * @public
     */
    PhoneVerification(req, cb) {
        let resp = new PhoneVerificationResponse();
        this.request("PhoneVerification", req, resp, cb);
    }


}
module.exports = FaceidClient;
