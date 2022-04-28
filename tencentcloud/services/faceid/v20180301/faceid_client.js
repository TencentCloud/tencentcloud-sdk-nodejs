"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
/* eslint-disable @typescript-eslint/no-unused-vars */
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
const abstract_client_1 = require("../../../common/abstract_client");
/**
 * faceid client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(clientConfig) {
        super("faceid.tencentcloudapi.com", "2018-03-01", clientConfig);
    }
    /**
     * 使用数字活体检测模式前，需调用本接口获取数字验证码。
     */
    async GetLiveCode(req, cb) {
        return this.request("GetLiveCode", req, cb);
    }
    /**
     * 使用动作活体检测模式前，需调用本接口获取动作顺序。
     */
    async GetActionSequence(req, cb) {
        return this.request("GetActionSequence", req, cb);
    }
    /**
     * 查询微信渠道服务（微信小程序、微信原生H5、微信普通H5）的账单明细及计费状态。
     */
    async GetWeChatBillDetails(req, cb) {
        return this.request("GetWeChatBillDetails", req, cb);
    }
    /**
     * 传入身份证人像面照片，识别身份证照片上的信息，并将姓名、身份证号、身份证人像照片与权威库的证件照进行比对，是否属于同一个人，从而验证身份证信息的真实性。
     */
    async CheckIdCardInformation(req, cb) {
        return this.request("CheckIdCardInformation", req, cb);
    }
    /**
     * 用于轮询E证通H5场景EidToken验证状态。
     */
    async CheckEidTokenStatus(req, cb) {
        return this.request("CheckEidTokenStatus", req, cb);
    }
    /**
     * 本接口用于输入银行卡号、姓名、开户证件号、开户手机号，校验信息的真实性和一致性。
     */
    async BankCard4EVerification(req, cb) {
        return this.request("BankCard4EVerification", req, cb);
    }
    /**
     * 本接口用于校验手机号、姓名和身份证号的真实性和一致性，入参支持MD5加密传输。
     */
    async EncryptedPhoneVerification(req, cb) {
        return this.request("EncryptedPhoneVerification", req, cb);
    }
    /**
     * 完成验证后，用BizToken调用本接口获取结果信息，BizToken生成后三天内（3\*24\*3,600秒）可多次拉取。
     */
    async GetDetectInfoEnhanced(req, cb) {
        return this.request("GetDetectInfoEnhanced", req, cb);
    }
    /**
     * 每次调用人脸核身SDK服务前，需先调用本接口获取SDKToken，用来串联核身流程，在验证完成后，用于获取验证结果信息，该token仅能核身一次。
     */
    async GetFaceIdToken(req, cb) {
        return this.request("GetFaceIdToken", req, cb);
    }
    /**
     * 手机号二要素核验接口用于校验手机号和姓名的真实性和一致性，支持的手机号段详情请查阅<a href="https://cloud.tencent.com/document/product/1007/46063">运营商类</a>文档。

     */
    async CheckPhoneAndName(req, cb) {
        return this.request("CheckPhoneAndName", req, cb);
    }
    /**
     * 本接口用于银行卡号、姓名、开户证件号信息的真实性和一致性。
     */
    async BankCardVerification(req, cb) {
        return this.request("BankCardVerification", req, cb);
    }
    /**
     * 传入视频和照片，先判断视频中是否为真人，判断为真人后，再判断该视频中的人与上传照片是否属于同一个人。
     */
    async LivenessCompare(req, cb) {
        return this.request("LivenessCompare", req, cb);
    }
    /**
     * 该接口仅限微信公众号中使用，传入姓名和身份证号获取回调URL，在微信公众号中打开验证姓名和身份证号与微信实名的信息是否一致。

     */
    async GetRealNameAuthToken(req, cb) {
        return this.request("GetRealNameAuthToken", req, cb);
    }
    /**
     * 本接口用于校验姓名和身份证号的真实性和一致性，您可以通过输入姓名和身份证号或传入身份证人像面照片提供所需验证信息。
     */
    async IdCardOCRVerification(req, cb) {
        return this.request("IdCardOCRVerification", req, cb);
    }
    /**
     * 完成验证后，用FaceIdToken调用本接口获取结果信息，FaceIdToken生成后三天内（3\*24\*3,600秒）可多次拉取。
     */
    async GetFaceIdResult(req, cb) {
        return this.request("GetFaceIdResult", req, cb);
    }
    /**
     * 传入照片和身份信息，判断该照片与权威库的证件照是否属于同一个人。
     */
    async ImageRecognition(req, cb) {
        return this.request("ImageRecognition", req, cb);
    }
    /**
     * 每次调用E证通服务前，需先调用本接口获取EidToken，用来串联E证通流程，在验证完成后，用于获取E证通结果信息。
     */
    async GetEidToken(req, cb) {
        return this.request("GetEidToken", req, cb);
    }
    /**
     * 本接口用于校验手机号、姓名和身份证号的真实性和一致性。支持的手机号段详情请查阅<a href="https://cloud.tencent.com/document/product/1007/46063">运营商类</a>文档。
     */
    async PhoneVerification(req, cb) {
        return this.request("PhoneVerification", req, cb);
    }
    /**
     * 本接口用于验证手机号的状态，您可以输入手机号进行查询。
     */
    async MobileStatus(req, cb) {
        return this.request("MobileStatus", req, cb);
    }
    /**
     * 本接口用于校验中国移动手机号、姓名和身份证号的真实性和一致性。中国移动支持的手机号段详情请查阅<a href="https://cloud.tencent.com/document/product/1007/46063">运营商类</a>文档。
     */
    async PhoneVerificationCMCC(req, cb) {
        return this.request("PhoneVerificationCMCC", req, cb);
    }
    /**
     * 通过传入手机号或姓名和身份证号，结合权威数据源和腾讯健康守护可信模型，判断该信息是否真实且年满18周岁。腾讯健康守护可信模型覆盖了上十亿手机库源，覆盖率高、准确率高，如果不在库中的手机号，还可以通过姓名+身份证进行兜底验证。
     */
    async MinorsVerification(req, cb) {
        return this.request("MinorsVerification", req, cb);
    }
    /**
     * 使用活体比对（光线）SDK生成的数据包检测活体，并和传入的图片进行比对。
图片和SDK生成的数据内容必须存储在腾讯云COS，COS Bucket所在的Region需要和本接口请求的Region保持一致，推荐使用生成上传链接接口来完成资源传递。
     */
    async DetectReflectLivenessAndCompare(req, cb) {
        return this.request("DetectReflectLivenessAndCompare", req, cb);
    }
    /**
     * 本接口用于校验姓名、身份证号、身份证有效期的真实性和一致性。
     */
    async CheckIdNameDate(req, cb) {
        return this.request("CheckIdNameDate", req, cb);
    }
    /**
     * 活体检测
     */
    async Liveness(req, cb) {
        return this.request("Liveness", req, cb);
    }
    /**
     * 本接口用于校验中国联通手机号、姓名和身份证号的真实性和一致性。中国联通支持的手机号段详情请查阅<a href="https://cloud.tencent.com/document/product/1007/46063">运营商类</a>文档。
     */
    async PhoneVerificationCUCC(req, cb) {
        return this.request("PhoneVerificationCUCC", req, cb);
    }
    /**
     * 传入视频和身份信息，先判断视频中是否为真人，判断为真人后，再判断该视频中的人与权威库的证件照是否属于同一个人。
     */
    async LivenessRecognition(req, cb) {
        return this.request("LivenessRecognition", req, cb);
    }
    /**
     * 传入姓名和身份证号，校验两者的真实性和一致性。
     */
    async IdCardVerification(req, cb) {
        return this.request("IdCardVerification", req, cb);
    }
    /**
     * 本接口用于查询手机号在网时长，输入手机号进行查询。
     */
    async MobileNetworkTimeVerification(req, cb) {
        return this.request("MobileNetworkTimeVerification", req, cb);
    }
    /**
     * 完成验证后，用EidToken调用本接口获取结果信息，EidToken生成后三天内（3\*24\*3,600秒）可多次拉取。
     */
    async GetEidResult(req, cb) {
        return this.request("GetEidResult", req, cb);
    }
    /**
     * 每次调用人脸核身SaaS化服务前，需先调用本接口获取BizToken，用来串联核身流程，在验证完成后，用于获取验证结果信息。
     */
    async DetectAuth(req, cb) {
        return this.request("DetectAuth", req, cb);
    }
    /**
     * 银行卡基础信息查询
     */
    async CheckBankCardInformation(req, cb) {
        return this.request("CheckBankCardInformation", req, cb);
    }
    /**
     * 完成验证后，用BizToken调用本接口获取结果信息，BizToken生成后三天内（3\*24\*3,600秒）可多次拉取。
     */
    async GetDetectInfo(req, cb) {
        return this.request("GetDetectInfo", req, cb);
    }
    /**
     * 本接口用于校验姓名和银行卡号的真实性和一致性。
     */
    async BankCard2EVerification(req, cb) {
        return this.request("BankCard2EVerification", req, cb);
    }
    /**
     * 本接口用于校验中国电信手机号、姓名和身份证号的真实性和一致性。中国电信支持的手机号段详情请查阅<a href="https://cloud.tencent.com/document/product/1007/46063">运营商类</a>文档。
     */
    async PhoneVerificationCTCC(req, cb) {
        return this.request("PhoneVerificationCTCC", req, cb);
    }
    /**
     * 获取微信实名认证结果
     */
    async GetRealNameAuthResult(req, cb) {
        return this.request("GetRealNameAuthResult", req, cb);
    }
}
exports.Client = Client;
