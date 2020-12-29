import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { GetDetectInfoEnhancedRequest, GetFaceIdTokenRequest, LivenessRequest, CheckBankCardInformationRequest, MobileNetworkTimeVerificationResponse, GetLiveCodeRequest, IdCardVerificationRequest, BankCardVerificationRequest, CheckBankCardInformationResponse, CheckIdCardInformationResponse, GetDetectInfoEnhancedResponse, PhoneVerificationRequest, GetRealNameAuthResultRequest, DetectAuthResponse, PhoneVerificationResponse, IdCardOCRVerificationRequest, CheckPhoneAndNameResponse, BankCard4EVerificationResponse, MobileStatusRequest, GetRealNameAuthTokenRequest, BankCard2EVerificationRequest, LivenessRecognitionRequest, GetFaceIdTokenResponse, IdCardOCRVerificationResponse, MobileStatusResponse, GetRealNameAuthTokenResponse, LivenessResponse, CheckIdCardInformationRequest, DetectAuthRequest, MinorsVerificationResponse, BankCardVerificationResponse, ImageRecognitionRequest, BankCard4EVerificationRequest, MobileNetworkTimeVerificationRequest, GetFaceIdResultRequest, GetActionSequenceResponse, LivenessRecognitionResponse, MinorsVerificationRequest, ImageRecognitionResponse, GetActionSequenceRequest, GetDetectInfoResponse, LivenessCompareResponse, GetLiveCodeResponse, GetDetectInfoRequest, BankCard2EVerificationResponse, IdCardVerificationResponse, CheckPhoneAndNameRequest, LivenessCompareRequest, GetFaceIdResultResponse, GetRealNameAuthResultResponse } from "./faceid_models";
/**
 * faceid client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 使用数字活体检测模式前，需调用本接口获取数字验证码。
     */
    GetLiveCode(req?: GetLiveCodeRequest, cb?: (error: string, rep: GetLiveCodeResponse) => void): Promise<GetLiveCodeResponse>;
    /**
     * 使用动作活体检测模式前，需调用本接口获取动作顺序。
     */
    GetActionSequence(req: GetActionSequenceRequest, cb?: (error: string, rep: GetActionSequenceResponse) => void): Promise<GetActionSequenceResponse>;
    /**
     * 传入视频和照片，先判断视频中是否为真人，判断为真人后，再判断该视频中的人与上传照片是否属于同一个人。
     */
    LivenessCompare(req: LivenessCompareRequest, cb?: (error: string, rep: LivenessCompareResponse) => void): Promise<LivenessCompareResponse>;
    /**
     * 本接口用于输入银行卡号、姓名、开户证件号、开户手机号，校验信息的真实性和一致性。
     */
    BankCard4EVerification(req: BankCard4EVerificationRequest, cb?: (error: string, rep: BankCard4EVerificationResponse) => void): Promise<BankCard4EVerificationResponse>;
    /**
     * 每次调用人脸核身SDK服务前，需先调用本接口获取SDKToken，用来串联核身流程，在验证完成后，用于获取验证结果信息，该token仅能核身一次。
     */
    GetFaceIdToken(req: GetFaceIdTokenRequest, cb?: (error: string, rep: GetFaceIdTokenResponse) => void): Promise<GetFaceIdTokenResponse>;
    /**
     * 本接口用于校验手机号和姓名的真实性和一致性。
     */
    CheckPhoneAndName(req: CheckPhoneAndNameRequest, cb?: (error: string, rep: CheckPhoneAndNameResponse) => void): Promise<CheckPhoneAndNameResponse>;
    /**
     * 本接口用于银行卡号、姓名、开户证件号信息的真实性和一致性。
     */
    BankCardVerification(req: BankCardVerificationRequest, cb?: (error: string, rep: BankCardVerificationResponse) => void): Promise<BankCardVerificationResponse>;
    /**
     * 传入身份证人像面照片，识别身份证照片上的信息，并将姓名、身份证号、身份证人像照片与公安权威库的证件照进行比对，是否属于同一个人，从而验证身份证信息的真实性。
     */
    CheckIdCardInformation(req: CheckIdCardInformationRequest, cb?: (error: string, rep: CheckIdCardInformationResponse) => void): Promise<CheckIdCardInformationResponse>;
    /**
     * 该接口仅限微信公众号中使用，传入姓名和身份证号获取回调URL，在微信公众号中打开验证姓名和身份证号与微信实名的信息是否一致。

     */
    GetRealNameAuthToken(req: GetRealNameAuthTokenRequest, cb?: (error: string, rep: GetRealNameAuthTokenResponse) => void): Promise<GetRealNameAuthTokenResponse>;
    /**
     * 本接口用于校验姓名和身份证号的真实性和一致性，您可以通过输入姓名和身份证号或传入身份证人像面照片提供所需验证信息。
     */
    IdCardOCRVerification(req: IdCardOCRVerificationRequest, cb?: (error: string, rep: IdCardOCRVerificationResponse) => void): Promise<IdCardOCRVerificationResponse>;
    /**
     * 完成验证后，用FaceIdToken调用本接口获取结果信息，FaceIdToken生成后三天内（3\*24\*3,600秒）可多次拉取。
     */
    GetFaceIdResult(req: GetFaceIdResultRequest, cb?: (error: string, rep: GetFaceIdResultResponse) => void): Promise<GetFaceIdResultResponse>;
    /**
     * 传入照片和身份信息，判断该照片与公安权威库的证件照是否属于同一个人。
     */
    ImageRecognition(req: ImageRecognitionRequest, cb?: (error: string, rep: ImageRecognitionResponse) => void): Promise<ImageRecognitionResponse>;
    /**
     * 本接口用于校验手机号、姓名和身份证号的真实性和一致性。
     */
    PhoneVerification(req: PhoneVerificationRequest, cb?: (error: string, rep: PhoneVerificationResponse) => void): Promise<PhoneVerificationResponse>;
    /**
     * 本接口用于验证手机号的状态，您可以输入手机号进行查询。
     */
    MobileStatus(req: MobileStatusRequest, cb?: (error: string, rep: MobileStatusResponse) => void): Promise<MobileStatusResponse>;
    /**
     * 未成年人守护接口是通过传入手机号或姓名和身份证号，结合权威数据源和腾讯健康守护可信模型，判断该信息是否真实且年满18周岁。腾讯健康守护可信模型覆盖了上十亿手机库源，覆盖率高、准确率高，如果不在库中的手机号，还可以通过姓名+身份证进行兜底验证。
     */
    MinorsVerification(req: MinorsVerificationRequest, cb?: (error: string, rep: MinorsVerificationResponse) => void): Promise<MinorsVerificationResponse>;
    /**
     * 活体检测
     */
    Liveness(req: LivenessRequest, cb?: (error: string, rep: LivenessResponse) => void): Promise<LivenessResponse>;
    /**
     * 传入视频和身份信息，先判断视频中是否为真人，判断为真人后，再判断该视频中的人与公安权威库的证件照是否属于同一个人。
     */
    LivenessRecognition(req: LivenessRecognitionRequest, cb?: (error: string, rep: LivenessRecognitionResponse) => void): Promise<LivenessRecognitionResponse>;
    /**
     * 传入姓名和身份证号，校验两者的真实性和一致性。
     */
    IdCardVerification(req: IdCardVerificationRequest, cb?: (error: string, rep: IdCardVerificationResponse) => void): Promise<IdCardVerificationResponse>;
    /**
     * 本接口用于查询手机号在网时长，输入手机号进行查询。
     */
    MobileNetworkTimeVerification(req: MobileNetworkTimeVerificationRequest, cb?: (error: string, rep: MobileNetworkTimeVerificationResponse) => void): Promise<MobileNetworkTimeVerificationResponse>;
    /**
     * 每次调用人脸核身SaaS化服务前，需先调用本接口获取BizToken，用来串联核身流程，在验证完成后，用于获取验证结果信息。
     */
    DetectAuth(req: DetectAuthRequest, cb?: (error: string, rep: DetectAuthResponse) => void): Promise<DetectAuthResponse>;
    /**
     * 完成验证后，用BizToken调用本接口获取结果信息，BizToken生成后三天内（3\*24\*3,600秒）可多次拉取。
     */
    GetDetectInfoEnhanced(req: GetDetectInfoEnhancedRequest, cb?: (error: string, rep: GetDetectInfoEnhancedResponse) => void): Promise<GetDetectInfoEnhancedResponse>;
    /**
     * 银行卡基础信息查询
     */
    CheckBankCardInformation(req: CheckBankCardInformationRequest, cb?: (error: string, rep: CheckBankCardInformationResponse) => void): Promise<CheckBankCardInformationResponse>;
    /**
     * 完成验证后，用BizToken调用本接口获取结果信息，BizToken生成后三天内（3\*24\*3,600秒）可多次拉取。
     */
    GetDetectInfo(req: GetDetectInfoRequest, cb?: (error: string, rep: GetDetectInfoResponse) => void): Promise<GetDetectInfoResponse>;
    /**
     * 本接口用于校验姓名和银行卡号的真实性和一致性。
     */
    BankCard2EVerification(req: BankCard2EVerificationRequest, cb?: (error: string, rep: BankCard2EVerificationResponse) => void): Promise<BankCard2EVerificationResponse>;
    /**
     * 获取微信实名认证结果
     */
    GetRealNameAuthResult(req: GetRealNameAuthResultRequest, cb?: (error: string, rep: GetRealNameAuthResultResponse) => void): Promise<GetRealNameAuthResultResponse>;
}
