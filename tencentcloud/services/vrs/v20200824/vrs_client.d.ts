import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { CancelVRSTaskRequest, DescribeVRSTaskStatusResponse, GetTrainingTextRequest, DownloadVRSModelRequest, GetVRSVoiceTypeInfoResponse, DownloadVRSModelResponse, GetVRSVoiceTypesResponse, GetVRSVoiceTypeInfoRequest, CancelVRSTaskResponse, CreateVRSTaskResponse, GetVRSVoiceTypesRequest, GetTrainingTextResponse, DescribeVRSTaskStatusRequest, CreateVRSTaskRequest, DetectEnvAndSoundQualityResponse, DetectEnvAndSoundQualityRequest } from "./vrs_models";
/**
 * vrs client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 该接口用于查询复刻音色详细信息。
     */
    GetVRSVoiceTypeInfo(req: GetVRSVoiceTypeInfoRequest, cb?: (error: string, rep: GetVRSVoiceTypeInfoResponse) => void): Promise<GetVRSVoiceTypeInfoResponse>;
    /**
     * 下载声音复刻离线模型
     */
    DownloadVRSModel(req: DownloadVRSModelRequest, cb?: (error: string, rep: DownloadVRSModelResponse) => void): Promise<DownloadVRSModelResponse>;
    /**
     * 声音复刻取消任务接口
     */
    CancelVRSTask(req: CancelVRSTaskRequest, cb?: (error: string, rep: CancelVRSTaskResponse) => void): Promise<CancelVRSTaskResponse>;
    /**
     * 本接口用于检测音频的环境和音频质量。
对于一句话声音复刻，音频时长需大于3s，小于15s，文件大小不能超过2MB，音频需为单声道，位深为16bit。建议格式：wav、单声道、采样率48kHz或24kHz
• 请求方法为 HTTP POST , Content-Type为"application/json; charset=utf-8"
• 签名方法参考 公共参数 中签名方法v3。
     */
    DetectEnvAndSoundQuality(req: DetectEnvAndSoundQualityRequest, cb?: (error: string, rep: DetectEnvAndSoundQualityResponse) => void): Promise<DetectEnvAndSoundQualityResponse>;
    /**
     * 在调用声音复刻创建任务请求接口后，有回调和轮询两种方式获取识别结果。（注意：回调方式目前仅支持轻量版声音复刻）
• 当采用回调方式时，识别完成后会将结果通过 POST 请求的形式通知到用户在请求时填写的回调 URL，具体请参见 [“声音复刻任务创建接口”](https://cloud.tencent.com/document/product/1283/90064) CallbackUrl参数说明 。
• 当采用轮询方式时，需要主动提交任务ID来轮询识别结果，共有任务成功、等待、执行中和失败四种结果，具体信息请参见下文说明。
• 请求方法为 HTTP POST , Content-Type为"application/json; charset=utf-8"
• 签名方法参考 公共参数 中签名方法v3。
     */
    DescribeVRSTaskStatus(req: DescribeVRSTaskStatusRequest, cb?: (error: string, rep: DescribeVRSTaskStatusResponse) => void): Promise<DescribeVRSTaskStatusResponse>;
    /**
     * 本接口服务对提交音频进行声音复刻任务创建接口，异步返回复刻结果。
• 请求方法为 HTTP POST , Content-Type为"application/json; charset=utf-8"
• 签名方法参考 公共参数 中签名方法v3。
     */
    CreateVRSTask(req: CreateVRSTaskRequest, cb?: (error: string, rep: CreateVRSTaskResponse) => void): Promise<CreateVRSTaskResponse>;
    /**
     * 查询复刻音色
     */
    GetVRSVoiceTypes(req: GetVRSVoiceTypesRequest, cb?: (error: string, rep: GetVRSVoiceTypesResponse) => void): Promise<GetVRSVoiceTypesResponse>;
    /**
     * 本接口用于获取声音复刻训练文本信息。
 请求方法为 HTTP POST , Content-Type为"application/json; charset=utf-8"
• 签名方法参考 公共参数 中签名方法v3。
• 当复刻类型为一句话声音复刻时，生成的TextId有效期为7天，且在成功创建一次复刻任务后失效。
     */
    GetTrainingText(req: GetTrainingTextRequest, cb?: (error: string, rep: GetTrainingTextResponse) => void): Promise<GetTrainingTextResponse>;
}
