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
const DetectInfoVideoData = models.DetectInfoVideoData;
const GetDetectInfoEnhancedRequest = models.GetDetectInfoEnhancedRequest;
const GetFaceIdTokenRequest = models.GetFaceIdTokenRequest;
const LivenessRequest = models.LivenessRequest;
const Encryption = models.Encryption;
const CheckBankCardInformationRequest = models.CheckBankCardInformationRequest;
const MobileNetworkTimeVerificationResponse = models.MobileNetworkTimeVerificationResponse;
const GetLiveCodeRequest = models.GetLiveCodeRequest;
const GetEidResultResponse = models.GetEidResultResponse;
const IdCardVerificationRequest = models.IdCardVerificationRequest;
const BankCardVerificationRequest = models.BankCardVerificationRequest;
const CheckBankCardInformationResponse = models.CheckBankCardInformationResponse;
const DetectInfoBestFrame = models.DetectInfoBestFrame;
const CheckIdCardInformationResponse = models.CheckIdCardInformationResponse;
const GetDetectInfoEnhancedResponse = models.GetDetectInfoEnhancedResponse;
const PhoneVerificationRequest = models.PhoneVerificationRequest;
const GetEidResultRequest = models.GetEidResultRequest;
const DetectAuthResponse = models.DetectAuthResponse;
const PhoneVerificationResponse = models.PhoneVerificationResponse;
const GetEidTokenRequest = models.GetEidTokenRequest;
const IdCardOCRVerificationRequest = models.IdCardOCRVerificationRequest;
const CheckPhoneAndNameResponse = models.CheckPhoneAndNameResponse;
const BankCard4EVerificationResponse = models.BankCard4EVerificationResponse;
const MobileStatusRequest = models.MobileStatusRequest;
const GetRealNameAuthTokenRequest = models.GetRealNameAuthTokenRequest;
const BankCard2EVerificationRequest = models.BankCard2EVerificationRequest;
const LivenessRecognitionRequest = models.LivenessRecognitionRequest;
const EidInfo = models.EidInfo;
const GetFaceIdTokenResponse = models.GetFaceIdTokenResponse;
const GetEidTokenConfig = models.GetEidTokenConfig;
const MobileStatusResponse = models.MobileStatusResponse;
const IdCardOCRVerificationResponse = models.IdCardOCRVerificationResponse;
const GetRealNameAuthTokenResponse = models.GetRealNameAuthTokenResponse;
const LivenessResponse = models.LivenessResponse;
const CheckIdCardInformationRequest = models.CheckIdCardInformationRequest;
const DetectInfoText = models.DetectInfoText;
const DetectAuthRequest = models.DetectAuthRequest;
const MinorsVerificationResponse = models.MinorsVerificationResponse;
const BankCardVerificationResponse = models.BankCardVerificationResponse;
const GetRealNameAuthResultRequest = models.GetRealNameAuthResultRequest;
const ImageRecognitionRequest = models.ImageRecognitionRequest;
const BankCard4EVerificationRequest = models.BankCard4EVerificationRequest;
const MobileNetworkTimeVerificationRequest = models.MobileNetworkTimeVerificationRequest;
const GetFaceIdResultRequest = models.GetFaceIdResultRequest;
const GetActionSequenceResponse = models.GetActionSequenceResponse;
const LivenessRecognitionResponse = models.LivenessRecognitionResponse;
const MinorsVerificationRequest = models.MinorsVerificationRequest;
const ImageRecognitionResponse = models.ImageRecognitionResponse;
const GetActionSequenceRequest = models.GetActionSequenceRequest;
const GetDetectInfoResponse = models.GetDetectInfoResponse;
const LivenessCompareResponse = models.LivenessCompareResponse;
const GetLiveCodeResponse = models.GetLiveCodeResponse;
const GetDetectInfoRequest = models.GetDetectInfoRequest;
const BankCard2EVerificationResponse = models.BankCard2EVerificationResponse;
const IdCardVerificationResponse = models.IdCardVerificationResponse;
const DetectInfoIdCardData = models.DetectInfoIdCardData;
const CheckPhoneAndNameRequest = models.CheckPhoneAndNameRequest;
const GetEidTokenResponse = models.GetEidTokenResponse;
const LivenessCompareRequest = models.LivenessCompareRequest;
const DetectDetail = models.DetectDetail;
const GetFaceIdResultResponse = models.GetFaceIdResultResponse;
const EncryptedPhoneVerificationRequest = models.EncryptedPhoneVerificationRequest;
const GetRealNameAuthResultResponse = models.GetRealNameAuthResultResponse;
const EncryptedPhoneVerificationResponse = models.EncryptedPhoneVerificationResponse;


/**
 * faceid client
 * @class
 */
class FaceidClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("faceid.tencentcloudapi.com", "2018-03-01", credential, region, profile);
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
     * 传入身份证人像面照片，识别身份证照片上的信息，并将姓名、身份证号、身份证人像照片与公安权威库的证件照进行比对，是否属于同一个人，从而验证身份证信息的真实性。
     * @param {CheckIdCardInformationRequest} req
     * @param {function(string, CheckIdCardInformationResponse):void} cb
     * @public
     */
    CheckIdCardInformation(req, cb) {
        let resp = new CheckIdCardInformationResponse();
        this.request("CheckIdCardInformation", req, resp, cb);
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
     * 本接口用于校验手机号、姓名和身份证号的真实性和一致性，入参支持MD5加密传输。
     * @param {EncryptedPhoneVerificationRequest} req
     * @param {function(string, EncryptedPhoneVerificationResponse):void} cb
     * @public
     */
    EncryptedPhoneVerification(req, cb) {
        let resp = new EncryptedPhoneVerificationResponse();
        this.request("EncryptedPhoneVerification", req, resp, cb);
    }

    /**
     * 完成验证后，用BizToken调用本接口获取结果信息，BizToken生成后三天内（3\*24\*3,600秒）可多次拉取。
     * @param {GetDetectInfoEnhancedRequest} req
     * @param {function(string, GetDetectInfoEnhancedResponse):void} cb
     * @public
     */
    GetDetectInfoEnhanced(req, cb) {
        let resp = new GetDetectInfoEnhancedResponse();
        this.request("GetDetectInfoEnhanced", req, resp, cb);
    }

    /**
     * 每次调用人脸核身SDK服务前，需先调用本接口获取SDKToken，用来串联核身流程，在验证完成后，用于获取验证结果信息，该token仅能核身一次。
     * @param {GetFaceIdTokenRequest} req
     * @param {function(string, GetFaceIdTokenResponse):void} cb
     * @public
     */
    GetFaceIdToken(req, cb) {
        let resp = new GetFaceIdTokenResponse();
        this.request("GetFaceIdToken", req, resp, cb);
    }

    /**
     * 手机号二要素核验接口用于校验手机号和姓名的真实性和一致性，支持的手机号段详情请查阅<a href="https://cloud.tencent.com/document/product/1007/46063">运营商类</a>文档。

     * @param {CheckPhoneAndNameRequest} req
     * @param {function(string, CheckPhoneAndNameResponse):void} cb
     * @public
     */
    CheckPhoneAndName(req, cb) {
        let resp = new CheckPhoneAndNameResponse();
        this.request("CheckPhoneAndName", req, resp, cb);
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
     * 该接口仅限微信公众号中使用，传入姓名和身份证号获取回调URL，在微信公众号中打开验证姓名和身份证号与微信实名的信息是否一致。

     * @param {GetRealNameAuthTokenRequest} req
     * @param {function(string, GetRealNameAuthTokenResponse):void} cb
     * @public
     */
    GetRealNameAuthToken(req, cb) {
        let resp = new GetRealNameAuthTokenResponse();
        this.request("GetRealNameAuthToken", req, resp, cb);
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
     * 完成验证后，用FaceIdToken调用本接口获取结果信息，FaceIdToken生成后三天内（3\*24\*3,600秒）可多次拉取。
     * @param {GetFaceIdResultRequest} req
     * @param {function(string, GetFaceIdResultResponse):void} cb
     * @public
     */
    GetFaceIdResult(req, cb) {
        let resp = new GetFaceIdResultResponse();
        this.request("GetFaceIdResult", req, resp, cb);
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
     * 每次调用E证通小程序服务前，需先调用本接口获取EidToken，用来串联核身流程，在验证完成后，用于获取验证结果信息。
     * @param {GetEidTokenRequest} req
     * @param {function(string, GetEidTokenResponse):void} cb
     * @public
     */
    GetEidToken(req, cb) {
        let resp = new GetEidTokenResponse();
        this.request("GetEidToken", req, resp, cb);
    }

    /**
     * 本接口用于校验手机号、姓名和身份证号的真实性和一致性。支持的手机号段详情请查阅<a href="https://cloud.tencent.com/document/product/1007/46063">运营商类</a>文档。
     * @param {PhoneVerificationRequest} req
     * @param {function(string, PhoneVerificationResponse):void} cb
     * @public
     */
    PhoneVerification(req, cb) {
        let resp = new PhoneVerificationResponse();
        this.request("PhoneVerification", req, resp, cb);
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
     * 未成年人守护接口是通过传入手机号或姓名和身份证号，结合权威数据源和腾讯健康守护可信模型，判断该信息是否真实且年满18周岁。腾讯健康守护可信模型覆盖了上十亿手机库源，覆盖率高、准确率高，如果不在库中的手机号，还可以通过姓名+身份证进行兜底验证。
     * @param {MinorsVerificationRequest} req
     * @param {function(string, MinorsVerificationResponse):void} cb
     * @public
     */
    MinorsVerification(req, cb) {
        let resp = new MinorsVerificationResponse();
        this.request("MinorsVerification", req, resp, cb);
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
     * 完成验证后，用EidToken调用本接口获取结果信息，EidToken生成后三天内（3\*24\*3,600秒）可多次拉取。
     * @param {GetEidResultRequest} req
     * @param {function(string, GetEidResultResponse):void} cb
     * @public
     */
    GetEidResult(req, cb) {
        let resp = new GetEidResultResponse();
        this.request("GetEidResult", req, resp, cb);
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
     * 银行卡基础信息查询
     * @param {CheckBankCardInformationRequest} req
     * @param {function(string, CheckBankCardInformationResponse):void} cb
     * @public
     */
    CheckBankCardInformation(req, cb) {
        let resp = new CheckBankCardInformationResponse();
        this.request("CheckBankCardInformation", req, resp, cb);
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
     * 获取微信实名认证结果
     * @param {GetRealNameAuthResultRequest} req
     * @param {function(string, GetRealNameAuthResultResponse):void} cb
     * @public
     */
    GetRealNameAuthResult(req, cb) {
        let resp = new GetRealNameAuthResultResponse();
        this.request("GetRealNameAuthResult", req, resp, cb);
    }


}
module.exports = FaceidClient;
