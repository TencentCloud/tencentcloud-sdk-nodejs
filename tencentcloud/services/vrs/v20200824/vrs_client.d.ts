import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { DescribeVRSTaskStatusResponse, CreateVRSTaskResponse, GetTrainingTextResponse, DescribeVRSTaskStatusRequest, DetectEnvAndSoundQualityRequest, DetectEnvAndSoundQualityResponse, GetTrainingTextRequest, CreateVRSTaskRequest } from "./vrs_models";
/**
 * vrs client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 本接口服务对提交音频进行声音复刻任务创建接口，异步返回复刻结果。
• 请求方法为 HTTP POST , Content-Type为"application/json; charset=utf-8"
• 签名方法参考 公共参数 中签名方法v3。
     */
    CreateVRSTask(req: CreateVRSTaskRequest, cb?: (error: string, rep: CreateVRSTaskResponse) => void): Promise<CreateVRSTaskResponse>;
    /**
     * 本接口用于获取声音复刻训练文本信息。
 请求方法为 HTTP POST , Content-Type为"application/json; charset=utf-8"
• 签名方法参考 公共参数 中签名方法v3。
     */
    GetTrainingText(req?: GetTrainingTextRequest, cb?: (error: string, rep: GetTrainingTextResponse) => void): Promise<GetTrainingTextResponse>;
    /**
     * 本接口用于检测音频的环境和音频质量。
• 请求方法为 HTTP POST , Content-Type为"application/json; charset=utf-8"
• 签名方法参考 公共参数 中签名方法v3。
     */
    DetectEnvAndSoundQuality(req: DetectEnvAndSoundQualityRequest, cb?: (error: string, rep: DetectEnvAndSoundQualityResponse) => void): Promise<DetectEnvAndSoundQualityResponse>;
    /**
     * 在调用声音复刻创建任务请求接口后，有回调和轮询两种方式获取识别结果。
• 当采用回调方式时，识别完成后会将结果通过 POST 请求的形式通知到用户在请求时填写的回调 URL，具体请参见 声音复刻结果回调 。
• 当采用轮询方式时，需要主动提交任务ID来轮询识别结果，共有任务成功、等待、执行中和失败四种结果，具体信息请参见下文说明。
• 请求方法为 HTTP POST , Content-Type为"application/json; charset=utf-8"
• 签名方法参考 公共参数 中签名方法v3。
     */
    DescribeVRSTaskStatus(req: DescribeVRSTaskStatusRequest, cb?: (error: string, rep: DescribeVRSTaskStatusResponse) => void): Promise<DescribeVRSTaskStatusResponse>;
}
