import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { SetWhiteboardPushCallbackKeyRequest, SetVideoGenerationTaskCallbackRequest, StopOnlineRecordResponse, SetVideoGenerationTaskCallbackKeyRequest, StartWhiteboardPushRequest, DescribeWhiteboardPushRequest, DescribeQualityMetricsResponse, ResumeOnlineRecordResponse, SetVideoGenerationTaskCallbackResponse, SetWhiteboardPushCallbackKeyResponse, DescribeSnapshotTaskRequest, StartOnlineRecordRequest, DescribeVideoGenerationTaskCallbackResponse, DescribeSnapshotTaskResponse, StartWhiteboardPushResponse, ResumeOnlineRecordRequest, DescribeOnlineRecordCallbackRequest, DescribeOnlineRecordCallbackResponse, StopWhiteboardPushRequest, SetTranscodeCallbackResponse, StopOnlineRecordRequest, SetVideoGenerationTaskCallbackKeyResponse, CreateTranscodeResponse, CreateSnapshotTaskResponse, DescribeVideoGenerationTaskResponse, DescribeWhiteboardPushCallbackResponse, SetTranscodeCallbackKeyResponse, DescribeTIWDailyUsageResponse, DescribeOnlineRecordRequest, DescribeWhiteboardPushResponse, StartOnlineRecordResponse, SetOnlineRecordCallbackKeyResponse, DescribeVideoGenerationTaskRequest, CreateVideoGenerationTaskResponse, PauseOnlineRecordResponse, CreateTranscodeRequest, DescribeWhiteboardPushCallbackRequest, DescribeOnlineRecordResponse, SetTranscodeCallbackKeyRequest, DescribeTranscodeRequest, DescribeTranscodeResponse, DescribeQualityMetricsRequest, SetOnlineRecordCallbackKeyRequest, CreateVideoGenerationTaskRequest, DescribeTranscodeCallbackRequest, CreateSnapshotTaskRequest, DescribeTranscodeCallbackResponse, SetTranscodeCallbackRequest, SetWhiteboardPushCallbackRequest, SetWhiteboardPushCallbackResponse, DescribeTIWDailyUsageRequest, DescribeVideoGenerationTaskCallbackRequest, SetOnlineRecordCallbackRequest, PauseOnlineRecordRequest, StopWhiteboardPushResponse, SetOnlineRecordCallbackResponse } from "./tiw_models";
/**
 * tiw client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 设置实时录制回调地址，回调数据格式请参考文档：https://cloud.tencent.com/document/product/1137/40258
     */
    SetOnlineRecordCallback(req: SetOnlineRecordCallbackRequest, cb?: (error: string, rep: SetOnlineRecordCallbackResponse) => void): Promise<SetOnlineRecordCallbackResponse>;
    /**
     * 设置录制视频生成回调地址
     */
    SetVideoGenerationTaskCallback(req: SetVideoGenerationTaskCallbackRequest, cb?: (error: string, rep: SetVideoGenerationTaskCallbackResponse) => void): Promise<SetVideoGenerationTaskCallbackResponse>;
    /**
     * 创建视频生成任务
     */
    CreateVideoGenerationTask(req: CreateVideoGenerationTaskRequest, cb?: (error: string, rep: CreateVideoGenerationTaskResponse) => void): Promise<CreateVideoGenerationTaskResponse>;
    /**
     * 设置实时录制回调鉴权密钥，回调鉴权方式请参考文档：https://cloud.tencent.com/document/product/1137/40257
     */
    SetOnlineRecordCallbackKey(req: SetOnlineRecordCallbackKeyRequest, cb?: (error: string, rep: SetOnlineRecordCallbackKeyResponse) => void): Promise<SetOnlineRecordCallbackKeyResponse>;
    /**
     * 设置文档转码回调地址，回调数据格式请参考文档：https://cloud.tencent.com/document/product/1137/40260
     */
    SetTranscodeCallback(req: SetTranscodeCallbackRequest, cb?: (error: string, rep: SetTranscodeCallbackResponse) => void): Promise<SetTranscodeCallbackResponse>;
    /**
     * 恢复实时录制
     */
    ResumeOnlineRecord(req: ResumeOnlineRecordRequest, cb?: (error: string, rep: ResumeOnlineRecordResponse) => void): Promise<ResumeOnlineRecordResponse>;
    /**
     * 设置文档转码回调鉴权密钥，回调鉴权方式请参考文档：https://cloud.tencent.com/document/product/1137/40257
     */
    SetTranscodeCallbackKey(req: SetTranscodeCallbackKeyRequest, cb?: (error: string, rep: SetTranscodeCallbackKeyResponse) => void): Promise<SetTranscodeCallbackKeyResponse>;
    /**
     * 创建白板板书生成任务, 在任务结束后，如果提供了回调地址，将通过回调地址通知板书生成结果
     */
    CreateSnapshotTask(req: CreateSnapshotTaskRequest, cb?: (error: string, rep: CreateSnapshotTaskResponse) => void): Promise<CreateSnapshotTaskResponse>;
    /**
     * 查询录制任务状态与结果
     */
    DescribeOnlineRecord(req: DescribeOnlineRecordRequest, cb?: (error: string, rep: DescribeOnlineRecordResponse) => void): Promise<DescribeOnlineRecordResponse>;
    /**
     * 查询实时录制回调地址
     */
    DescribeOnlineRecordCallback(req: DescribeOnlineRecordCallbackRequest, cb?: (error: string, rep: DescribeOnlineRecordCallbackResponse) => void): Promise<DescribeOnlineRecordCallbackResponse>;
    /**
     * 查询白板推流回调地址
     */
    DescribeWhiteboardPushCallback(req: DescribeWhiteboardPushCallbackRequest, cb?: (error: string, rep: DescribeWhiteboardPushCallbackResponse) => void): Promise<DescribeWhiteboardPushCallbackResponse>;
    /**
     * 发起一个白板推流任务
     */
    StartWhiteboardPush(req: StartWhiteboardPushRequest, cb?: (error: string, rep: StartWhiteboardPushResponse) => void): Promise<StartWhiteboardPushResponse>;
    /**
     * 创建一个文档转码任务
     */
    CreateTranscode(req: CreateTranscodeRequest, cb?: (error: string, rep: CreateTranscodeResponse) => void): Promise<CreateTranscodeResponse>;
    /**
     * 查询录制视频生成回调地址
     */
    DescribeVideoGenerationTaskCallback(req: DescribeVideoGenerationTaskCallbackRequest, cb?: (error: string, rep: DescribeVideoGenerationTaskCallbackResponse) => void): Promise<DescribeVideoGenerationTaskCallbackResponse>;
    /**
     * 设置白板推流回调地址，回调数据格式请参考文档：https://cloud.tencent.com/document/product/1137/40257
     */
    SetWhiteboardPushCallback(req: SetWhiteboardPushCallbackRequest, cb?: (error: string, rep: SetWhiteboardPushCallbackResponse) => void): Promise<SetWhiteboardPushCallbackResponse>;
    /**
     * 发起一个实时录制任务
     */
    StartOnlineRecord(req: StartOnlineRecordRequest, cb?: (error: string, rep: StartOnlineRecordResponse) => void): Promise<StartOnlineRecordResponse>;
    /**
     * 停止实时录制
     */
    StopOnlineRecord(req: StopOnlineRecordRequest, cb?: (error: string, rep: StopOnlineRecordResponse) => void): Promise<StopOnlineRecordResponse>;
    /**
     * 设置白板推流回调鉴权密钥，回调鉴权方式请参考文档：https://cloud.tencent.com/document/product/1137/40257
     */
    SetWhiteboardPushCallbackKey(req: SetWhiteboardPushCallbackKeyRequest, cb?: (error: string, rep: SetWhiteboardPushCallbackKeyResponse) => void): Promise<SetWhiteboardPushCallbackKeyResponse>;
    /**
     * 查询文档转码任务的执行进度与转码结果
     */
    DescribeTranscode(req: DescribeTranscodeRequest, cb?: (error: string, rep: DescribeTranscodeResponse) => void): Promise<DescribeTranscodeResponse>;
    /**
     * 查询互动白板天维度计费用量。
1. 单次查询统计区间最多不能超过31天。
2. 由于统计延迟等原因，暂时不支持查询当天数据，建议在次日上午7点以后再来查询前一天的用量，例如在10月27日上午7点后，再来查询到10月26日整天的用量

     */
    DescribeTIWDailyUsage(req: DescribeTIWDailyUsageRequest, cb?: (error: string, rep: DescribeTIWDailyUsageResponse) => void): Promise<DescribeTIWDailyUsageResponse>;
    /**
     * 停止白板推流任务
     */
    StopWhiteboardPush(req: StopWhiteboardPushRequest, cb?: (error: string, rep: StopWhiteboardPushResponse) => void): Promise<StopWhiteboardPushResponse>;
    /**
     * 查询互动白板质量数据
     */
    DescribeQualityMetrics(req: DescribeQualityMetricsRequest, cb?: (error: string, rep: DescribeQualityMetricsResponse) => void): Promise<DescribeQualityMetricsResponse>;
    /**
     * 暂停实时录制
     */
    PauseOnlineRecord(req: PauseOnlineRecordRequest, cb?: (error: string, rep: PauseOnlineRecordResponse) => void): Promise<PauseOnlineRecordResponse>;
    /**
     * 查询文档转码回调地址
     */
    DescribeTranscodeCallback(req: DescribeTranscodeCallbackRequest, cb?: (error: string, rep: DescribeTranscodeCallbackResponse) => void): Promise<DescribeTranscodeCallbackResponse>;
    /**
     * 设置视频生成回调鉴权密钥
     */
    SetVideoGenerationTaskCallbackKey(req: SetVideoGenerationTaskCallbackKeyRequest, cb?: (error: string, rep: SetVideoGenerationTaskCallbackKeyResponse) => void): Promise<SetVideoGenerationTaskCallbackKeyResponse>;
    /**
     * 查询推流任务状态与结果
     */
    DescribeWhiteboardPush(req: DescribeWhiteboardPushRequest, cb?: (error: string, rep: DescribeWhiteboardPushResponse) => void): Promise<DescribeWhiteboardPushResponse>;
    /**
     * 查询录制视频生成任务状态与结果
     */
    DescribeVideoGenerationTask(req: DescribeVideoGenerationTaskRequest, cb?: (error: string, rep: DescribeVideoGenerationTaskResponse) => void): Promise<DescribeVideoGenerationTaskResponse>;
    /**
     * 获取指定白板板书生成任务信息
     */
    DescribeSnapshotTask(req: DescribeSnapshotTaskRequest, cb?: (error: string, rep: DescribeSnapshotTaskResponse) => void): Promise<DescribeSnapshotTaskResponse>;
}
