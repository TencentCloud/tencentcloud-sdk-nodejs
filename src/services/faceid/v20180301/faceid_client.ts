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
import { AbstractClient } from "../../../common/abstract_client"
import { ClientConfig } from "../../../common/interface"
import {
  AttackRiskDetail,
  ExtraInfo,
  GetFaceidRiskInfoTokenResponse,
  CheckIdNameDateResponse,
  IdCardVerificationRequest,
  ImageRecognitionV2Response,
  GetDetectInfoEnhancedResponse,
  IntentionQuestionResult,
  RuleIdConfig,
  MobileStatusRequest,
  ParseNfcDataResponse,
  LivenessRecognitionRequest,
  CheckEidTokenStatusResponse,
  EidInfo,
  DetectAuthRequest,
  CheckEidTokenStatusRequest,
  GetFaceIdRiskInfoResponse,
  LivenessCompareResponse,
  BankCard2EVerificationResponse,
  MobileStatusResponse,
  LivenessResponse,
  EncryptedPhoneVerificationRequest,
  EncryptedPhoneVerificationResponse,
  DetectInfoVideoData,
  LivenessRequest,
  DetectAIFakeFacesRequest,
  CheckBankCardInformationResponse,
  GetEidTokenRequest,
  CheckIdNameDateRequest,
  GetFaceIdTokenResponse,
  IntentionActionResultDetail,
  MinorsVerificationRequest,
  GetFaceIdResultResponse,
  DetectAIFakeFacesResponse,
  IntentionVerifyData,
  LivenessCompareRequest,
  DetectDetail,
  RetrievalLivenessExtraInfo,
  IntentionActionConfig,
  CheckBankCardInformationRequest,
  BankCardVerificationRequest,
  DetectInfoBestFrame,
  GetWeChatBillDetailsResponse,
  CheckIdCardInformationResponse,
  GetEidResultRequest,
  DetectAuthResponse,
  PhoneVerificationResponse,
  IdCardOCRVerificationRequest,
  BankCard4EVerificationResponse,
  Encryption,
  MobileNetworkTimeVerificationRequest,
  PhoneVerificationCMCCResponse,
  MobileNetworkTimeVerificationResponse,
  PhoneVerificationCUCCResponse,
  CheckIdCardInformationRequest,
  GetEidTokenConfig,
  MinorsVerificationResponse,
  GetWeChatBillDetailsRequest,
  BankCardVerificationResponse,
  PhoneVerificationCUCCRequest,
  PhoneVerificationCMCCRequest,
  DetectInfoText,
  ImageRecognitionResponse,
  GetDetectInfoResponse,
  IdCardOCRVerificationResponse,
  IdCardVerificationResponse,
  GetActionSequenceRequest,
  GetDetectInfoEnhancedRequest,
  LivenessRecognitionResponse,
  GetLiveCodeRequest,
  GetEidResultResponse,
  WeChatBillDetail,
  PhoneVerificationRequest,
  GetFaceIdResultRequest,
  CheckPhoneAndNameResponse,
  GetFaceIdTokenRequest,
  IntentionActionResult,
  GetFaceidRiskInfoTokenRequest,
  BankCard2EVerificationRequest,
  ImageRecognitionV2Request,
  PhoneVerificationCTCCResponse,
  ChargeDetail,
  ParseNfcDataRequest,
  PhoneVerificationCTCCRequest,
  ImageRecognitionRequest,
  BankCard4EVerificationRequest,
  GetActionSequenceResponse,
  GetFaceIdRiskInfoRequest,
  GetLiveCodeResponse,
  GetDetectInfoRequest,
  DetectInfoIdCardData,
  CheckPhoneAndNameRequest,
  GetEidTokenResponse,
  IntentionQuestion,
} from "./faceid_models"

/**
 * faceid client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("faceid.tencentcloudapi.com", "2018-03-01", clientConfig)
  }

  /**
   * 使用数字活体检测模式前，需调用本接口获取数字验证码。
   */
  async GetLiveCode(
    req?: GetLiveCodeRequest,
    cb?: (error: string, rep: GetLiveCodeResponse) => void
  ): Promise<GetLiveCodeResponse> {
    return this.request("GetLiveCode", req, cb)
  }

  /**
   * 完成验证后，用FaceIdToken调用本接口获取设备风险相关信息，FaceIdToken生成后三天内（3\*24\*3,600秒）可多次拉取。
   */
  async GetFaceIdRiskInfo(
    req: GetFaceIdRiskInfoRequest,
    cb?: (error: string, rep: GetFaceIdRiskInfoResponse) => void
  ): Promise<GetFaceIdRiskInfoResponse> {
    return this.request("GetFaceIdRiskInfo", req, cb)
  }

  /**
   * 查询微信渠道服务（微信小程序、微信原生H5、微信普通H5）的账单明细及计费状态。
   */
  async GetWeChatBillDetails(
    req: GetWeChatBillDetailsRequest,
    cb?: (error: string, rep: GetWeChatBillDetailsResponse) => void
  ): Promise<GetWeChatBillDetailsResponse> {
    return this.request("GetWeChatBillDetails", req, cb)
  }

  /**
   * 传入身份证人像面照片，识别身份证照片上的信息，并将姓名、身份证号、身份证人像照片与权威库的证件照进行比对，是否属于同一个人，从而验证身份证信息的真实性。
   */
  async CheckIdCardInformation(
    req: CheckIdCardInformationRequest,
    cb?: (error: string, rep: CheckIdCardInformationResponse) => void
  ): Promise<CheckIdCardInformationResponse> {
    return this.request("CheckIdCardInformation", req, cb)
  }

  /**
   * 用于轮询E证通H5场景EidToken验证状态。
   */
  async CheckEidTokenStatus(
    req: CheckEidTokenStatusRequest,
    cb?: (error: string, rep: CheckEidTokenStatusResponse) => void
  ): Promise<CheckEidTokenStatusResponse> {
    return this.request("CheckEidTokenStatus", req, cb)
  }

  /**
   * 本接口用于输入银行卡号、姓名、开户证件号、开户手机号，校验信息的真实性和一致性。
   */
  async BankCard4EVerification(
    req: BankCard4EVerificationRequest,
    cb?: (error: string, rep: BankCard4EVerificationResponse) => void
  ): Promise<BankCard4EVerificationResponse> {
    return this.request("BankCard4EVerification", req, cb)
  }

  /**
   * 本接口用于校验手机号、姓名和身份证号的真实性和一致性，入参支持明文、MD5和SHA256加密传输。
   */
  async EncryptedPhoneVerification(
    req: EncryptedPhoneVerificationRequest,
    cb?: (error: string, rep: EncryptedPhoneVerificationResponse) => void
  ): Promise<EncryptedPhoneVerificationResponse> {
    return this.request("EncryptedPhoneVerification", req, cb)
  }

  /**
   * 使用动作活体检测模式前，需调用本接口获取动作顺序。
   */
  async GetActionSequence(
    req: GetActionSequenceRequest,
    cb?: (error: string, rep: GetActionSequenceResponse) => void
  ): Promise<GetActionSequenceResponse> {
    return this.request("GetActionSequence", req, cb)
  }

  /**
   * 完成验证后，用BizToken调用本接口获取结果信息，BizToken生成后三天内（3\*24\*3,600秒）可多次拉取。
   */
  async GetDetectInfoEnhanced(
    req: GetDetectInfoEnhancedRequest,
    cb?: (error: string, rep: GetDetectInfoEnhancedResponse) => void
  ): Promise<GetDetectInfoEnhancedResponse> {
    return this.request("GetDetectInfoEnhanced", req, cb)
  }

  /**
   * 每次调用人脸核身SDK服务前，需先调用本接口获取SDKToken，用来串联核身流程，在验证完成后，用于获取验证结果信息，该token仅能核身一次。
   */
  async GetFaceIdToken(
    req: GetFaceIdTokenRequest,
    cb?: (error: string, rep: GetFaceIdTokenResponse) => void
  ): Promise<GetFaceIdTokenResponse> {
    return this.request("GetFaceIdToken", req, cb)
  }

  /**
   * 手机号二要素核验接口用于校验手机号和姓名的真实性和一致性，支持的手机号段详情请查阅<a href="https://cloud.tencent.com/document/product/1007/46063">运营商类</a>文档。
   */
  async CheckPhoneAndName(
    req: CheckPhoneAndNameRequest,
    cb?: (error: string, rep: CheckPhoneAndNameResponse) => void
  ): Promise<CheckPhoneAndNameResponse> {
    return this.request("CheckPhoneAndName", req, cb)
  }

  /**
   * 本接口用于银行卡号、姓名、开户证件号信息的真实性和一致性。
   */
  async BankCardVerification(
    req: BankCardVerificationRequest,
    cb?: (error: string, rep: BankCardVerificationResponse) => void
  ): Promise<BankCardVerificationResponse> {
    return this.request("BankCardVerification", req, cb)
  }

  /**
   * 传入照片和身份信息，判断该照片与权威库的证件照是否属于同一个人。
   */
  async ImageRecognitionV2(
    req: ImageRecognitionV2Request,
    cb?: (error: string, rep: ImageRecognitionV2Response) => void
  ): Promise<ImageRecognitionV2Response> {
    return this.request("ImageRecognitionV2", req, cb)
  }

  /**
   * 传入视频和照片，先判断视频中是否为真人，判断为真人后，再判断该视频中的人与上传照片是否属于同一个人。
   */
  async LivenessCompare(
    req: LivenessCompareRequest,
    cb?: (error: string, rep: LivenessCompareResponse) => void
  ): Promise<LivenessCompareResponse> {
    return this.request("LivenessCompare", req, cb)
  }

  /**
   * 本接口用于校验姓名和身份证号的真实性和一致性，您可以通过输入姓名和身份证号或传入身份证人像面照片提供所需验证信息。
   */
  async IdCardOCRVerification(
    req: IdCardOCRVerificationRequest,
    cb?: (error: string, rep: IdCardOCRVerificationResponse) => void
  ): Promise<IdCardOCRVerificationResponse> {
    return this.request("IdCardOCRVerification", req, cb)
  }

  /**
   * 完成验证后，用FaceIdToken调用本接口获取结果信息，FaceIdToken生成后三天内（3\*24\*3,600秒）可多次拉取。
   */
  async GetFaceIdResult(
    req: GetFaceIdResultRequest,
    cb?: (error: string, rep: GetFaceIdResultResponse) => void
  ): Promise<GetFaceIdResultResponse> {
    return this.request("GetFaceIdResult", req, cb)
  }

  /**
   * 传入照片和身份信息，判断该照片与权威库的证件照是否属于同一个人（该接口已停止接入，新客户请使用<a href="https://cloud.tencent.com/document/product/1007/102203">照片人脸核身（V2.0）</a>接口）。
   */
  async ImageRecognition(
    req: ImageRecognitionRequest,
    cb?: (error: string, rep: ImageRecognitionResponse) => void
  ): Promise<ImageRecognitionResponse> {
    return this.request("ImageRecognition", req, cb)
  }

  /**
   * 每次调用E证通服务前，需先调用本接口获取EidToken，用来串联E证通流程，在验证完成后，用于获取E证通结果信息。
   */
  async GetEidToken(
    req: GetEidTokenRequest,
    cb?: (error: string, rep: GetEidTokenResponse) => void
  ): Promise<GetEidTokenResponse> {
    return this.request("GetEidToken", req, cb)
  }

  /**
   * 基于多模态的AI大模型算法，提供对人脸图片、视频的防攻击检测能力，可针对性有效识别高仿真的AIGC换脸、高清翻拍、批量黑产攻击、水印等攻击痕迹，增强对图片和视频的防伪安全能力。
   */
  async DetectAIFakeFaces(
    req: DetectAIFakeFacesRequest,
    cb?: (error: string, rep: DetectAIFakeFacesResponse) => void
  ): Promise<DetectAIFakeFacesResponse> {
    return this.request("DetectAIFakeFaces", req, cb)
  }

  /**
   * 本接口用于校验手机号、姓名和身份证号的真实性和一致性。支持的手机号段详情请查阅<a href="https://cloud.tencent.com/document/product/1007/46063">运营商类</a>文档。
   */
  async PhoneVerification(
    req: PhoneVerificationRequest,
    cb?: (error: string, rep: PhoneVerificationResponse) => void
  ): Promise<PhoneVerificationResponse> {
    return this.request("PhoneVerification", req, cb)
  }

  /**
   * 本接口用于验证手机号的状态，您可以输入手机号进行查询。
   */
  async MobileStatus(
    req: MobileStatusRequest,
    cb?: (error: string, rep: MobileStatusResponse) => void
  ): Promise<MobileStatusResponse> {
    return this.request("MobileStatus", req, cb)
  }

  /**
   * 本接口用于校验姓名、身份证号、身份证有效期的真实性和一致性。
   */
  async CheckIdNameDate(
    req: CheckIdNameDateRequest,
    cb?: (error: string, rep: CheckIdNameDateResponse) => void
  ): Promise<CheckIdNameDateResponse> {
    return this.request("CheckIdNameDate", req, cb)
  }

  /**
   * 本接口用于校验中国移动手机号、姓名和身份证号的真实性和一致性。中国移动支持的手机号段详情请查阅<a href="https://cloud.tencent.com/document/product/1007/46063">运营商类</a>文档。
   */
  async PhoneVerificationCMCC(
    req: PhoneVerificationCMCCRequest,
    cb?: (error: string, rep: PhoneVerificationCMCCResponse) => void
  ): Promise<PhoneVerificationCMCCResponse> {
    return this.request("PhoneVerificationCMCC", req, cb)
  }

  /**
   * 通过传入手机号或姓名和身份证号，结合权威数据源和腾讯健康守护可信模型，判断该信息是否真实且年满18周岁。腾讯健康守护可信模型覆盖了上十亿手机库源，覆盖率高、准确率高，如果不在库中的手机号，还可以通过姓名+身份证进行兜底验证。
   */
  async MinorsVerification(
    req: MinorsVerificationRequest,
    cb?: (error: string, rep: MinorsVerificationResponse) => void
  ): Promise<MinorsVerificationResponse> {
    return this.request("MinorsVerification", req, cb)
  }

  /**
   * 每次调用人脸核身SDK服务前，需先调用本接口获取SDKToken，用来串联核身流程，在验证完成后，用于获取风险结果信息，该Token仅能核身一次。
   */
  async GetFaceidRiskInfoToken(
    req: GetFaceidRiskInfoTokenRequest,
    cb?: (error: string, rep: GetFaceidRiskInfoTokenResponse) => void
  ): Promise<GetFaceidRiskInfoTokenResponse> {
    return this.request("GetFaceidRiskInfoToken", req, cb)
  }

  /**
   * 活体检测
   */
  async Liveness(
    req: LivenessRequest,
    cb?: (error: string, rep: LivenessResponse) => void
  ): Promise<LivenessResponse> {
    return this.request("Liveness", req, cb)
  }

  /**
   * 本接口用于校验中国联通手机号、姓名和身份证号的真实性和一致性。中国联通支持的手机号段详情请查阅<a href="https://cloud.tencent.com/document/product/1007/46063">运营商类</a>文档。
   */
  async PhoneVerificationCUCC(
    req: PhoneVerificationCUCCRequest,
    cb?: (error: string, rep: PhoneVerificationCUCCResponse) => void
  ): Promise<PhoneVerificationCUCCResponse> {
    return this.request("PhoneVerificationCUCC", req, cb)
  }

  /**
   * 传入视频和身份信息，先判断视频中是否为真人，判断为真人后，再判断该视频中的人与权威库的证件照是否属于同一个人。
   */
  async LivenessRecognition(
    req: LivenessRecognitionRequest,
    cb?: (error: string, rep: LivenessRecognitionResponse) => void
  ): Promise<LivenessRecognitionResponse> {
    return this.request("LivenessRecognition", req, cb)
  }

  /**
   * 解析SDK获取到的证件NFC数据，接口传入SDK返回的ReqId，返回证件信息（个别字段为特定证件类型特有）。SDK生成的ReqId五分钟内有效，重复查询仅收一次费。支持身份证类证件（二代身份证、港澳居住证、台湾居住证、外国人永居证）以及旅行类证件（港澳通行证、台湾通行证、台胞证、回乡证）的NFC识别及核验。
   */
  async ParseNfcData(
    req: ParseNfcDataRequest,
    cb?: (error: string, rep: ParseNfcDataResponse) => void
  ): Promise<ParseNfcDataResponse> {
    return this.request("ParseNfcData", req, cb)
  }

  /**
   * 传入姓名和身份证号，校验两者的真实性和一致性。
   */
  async IdCardVerification(
    req: IdCardVerificationRequest,
    cb?: (error: string, rep: IdCardVerificationResponse) => void
  ): Promise<IdCardVerificationResponse> {
    return this.request("IdCardVerification", req, cb)
  }

  /**
   * 本接口用于查询手机号在网时长，输入手机号进行查询。
   */
  async MobileNetworkTimeVerification(
    req: MobileNetworkTimeVerificationRequest,
    cb?: (error: string, rep: MobileNetworkTimeVerificationResponse) => void
  ): Promise<MobileNetworkTimeVerificationResponse> {
    return this.request("MobileNetworkTimeVerification", req, cb)
  }

  /**
   * 完成验证后，用EidToken调用本接口获取结果信息，EidToken生成后三天内（3\*24\*3,600秒）可多次拉取。
   */
  async GetEidResult(
    req: GetEidResultRequest,
    cb?: (error: string, rep: GetEidResultResponse) => void
  ): Promise<GetEidResultResponse> {
    return this.request("GetEidResult", req, cb)
  }

  /**
   * 每次调用人脸核身SaaS化服务前，需先调用本接口获取BizToken，用来串联核身流程，在验证完成后，用于获取验证结果信息。
   */
  async DetectAuth(
    req: DetectAuthRequest,
    cb?: (error: string, rep: DetectAuthResponse) => void
  ): Promise<DetectAuthResponse> {
    return this.request("DetectAuth", req, cb)
  }

  /**
   * 银行卡基础信息查询
   */
  async CheckBankCardInformation(
    req: CheckBankCardInformationRequest,
    cb?: (error: string, rep: CheckBankCardInformationResponse) => void
  ): Promise<CheckBankCardInformationResponse> {
    return this.request("CheckBankCardInformation", req, cb)
  }

  /**
   * 完成验证后，用BizToken调用本接口获取结果信息，BizToken生成后三天内（3\*24\*3,600秒）可多次拉取。
   */
  async GetDetectInfo(
    req: GetDetectInfoRequest,
    cb?: (error: string, rep: GetDetectInfoResponse) => void
  ): Promise<GetDetectInfoResponse> {
    return this.request("GetDetectInfo", req, cb)
  }

  /**
   * 本接口用于校验姓名和银行卡号的真实性和一致性。
   */
  async BankCard2EVerification(
    req: BankCard2EVerificationRequest,
    cb?: (error: string, rep: BankCard2EVerificationResponse) => void
  ): Promise<BankCard2EVerificationResponse> {
    return this.request("BankCard2EVerification", req, cb)
  }

  /**
   * 本接口用于校验中国电信手机号、姓名和身份证号的真实性和一致性。中国电信支持的手机号段详情请查阅<a href="https://cloud.tencent.com/document/product/1007/46063">运营商类</a>文档。
   */
  async PhoneVerificationCTCC(
    req: PhoneVerificationCTCCRequest,
    cb?: (error: string, rep: PhoneVerificationCTCCResponse) => void
  ): Promise<PhoneVerificationCTCCResponse> {
    return this.request("PhoneVerificationCTCC", req, cb)
  }
}
