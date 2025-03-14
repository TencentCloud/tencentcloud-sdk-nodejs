import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { CreateVideoGenerationTaskRequest, SetVideoGenerationTaskCallbackKeyRequest, DescribeWhiteboardPushRequest, ResumeOnlineRecordResponse, SetPPTCheckCallbackKeyResponse, CreateTranscodeResponse, DescribePPTCheckResponse, DescribeOnlineRecordRequest, SetOnlineRecordCallbackKeyResponse, StopOnlineRecordResponse, DescribeTranscodeCallbackRequest, ResumeOnlineRecordRequest, SetWhiteboardPushCallbackKeyResponse, SetWhiteboardPushCallbackResponse, PauseOnlineRecordRequest, DescribeRunningTasksResponse, DescribeWhiteboardPushResponse, SetVideoGenerationTaskCallbackRequest, DescribeWarningCallbackResponse, DescribeRunningTasksRequest, DescribeVideoGenerationTaskRequest, SetVideoGenerationTaskCallbackKeyResponse, DescribeVideoGenerationTaskResponse, SetWarningCallbackResponse, DescribeWhiteboardPushCallbackRequest, DescribeOnlineRecordResponse, DescribeTranscodeRequest, SetOnlineRecordCallbackResponse, DescribePPTCheckCallbackResponse, DescribeTranscodeCallbackResponse, SetOnlineRecordCallbackRequest, DescribeVideoGenerationTaskCallbackRequest, SetWhiteboardPushCallbackKeyRequest, StartWhiteboardPushRequest, DescribeVideoGenerationTaskCallbackResponse, DescribeSnapshotTaskRequest, StartOnlineRecordRequest, DescribeOnlineRecordCallbackRequest, DescribeWarningCallbackRequest, SetTranscodeCallbackResponse, StopOnlineRecordRequest, SetVideoGenerationTaskCallbackResponse, DescribeTranscodeByUrlResponse, StopWhiteboardPushRequest, SetWhiteboardPushCallbackRequest, CreateVideoGenerationTaskResponse, DescribePPTCheckCallbackRequest, CreatePPTCheckTaskRequest, PauseOnlineRecordResponse, CreateSnapshotTaskRequest, DescribeTranscodeResponse, SetOnlineRecordCallbackKeyRequest, DescribeOnlineRecordCallbackResponse, SetPPTCheckCallbackKeyRequest, SetPPTCheckCallbackResponse, StopWhiteboardPushResponse, DescribeTranscodeByUrlRequest, DescribeSnapshotTaskResponse, CreateSnapshotTaskResponse, DescribeWhiteboardPushCallbackResponse, SetTranscodeCallbackKeyResponse, SetPPTCheckCallbackRequest, SetWarningCallbackRequest, StartOnlineRecordResponse, CreatePPTCheckTaskResponse, CreateTranscodeRequest, SetTranscodeCallbackKeyRequest, SetTranscodeCallbackRequest, StartWhiteboardPushResponse, DescribePPTCheckRequest } from "./tiw_models";
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
     * 查询PPT检测任务回调地址
     */
    DescribePPTCheckCallback(req: DescribePPTCheckCallbackRequest, cb?: (error: string, rep: DescribePPTCheckCallbackResponse) => void): Promise<DescribePPTCheckCallbackResponse>;
    /**
     * 设置告警回调地址。此功能需要申请白名单使用。
     */
    SetWarningCallback(req: SetWarningCallbackRequest, cb?: (error: string, rep: SetWarningCallbackResponse) => void): Promise<SetWarningCallbackResponse>;
    /**
     * 设置文档转码回调鉴权密钥，回调鉴权方式请参考文档：https://cloud.tencent.com/document/product/1137/40257
     */
    SetTranscodeCallbackKey(req: SetTranscodeCallbackKeyRequest, cb?: (error: string, rep: SetTranscodeCallbackKeyResponse) => void): Promise<SetTranscodeCallbackKeyResponse>;
    /**
     * 设置PPT检测任务回调密钥，回调鉴权方式请参考文档：https://cloud.tencent.com/document/product/1137/40257
     */
    SetPPTCheckCallbackKey(req: SetPPTCheckCallbackKeyRequest, cb?: (error: string, rep: SetPPTCheckCallbackKeyResponse) => void): Promise<SetPPTCheckCallbackKeyResponse>;
    /**
     * 创建白板板书生成任务, 在任务结束后，如果提供了回调地址，将通过回调地址通知板书生成结果
     */
    CreateSnapshotTask(req: CreateSnapshotTaskRequest, cb?: (error: string, rep: CreateSnapshotTaskResponse) => void): Promise<CreateSnapshotTaskResponse>;
    /**
     * 设置PPT检测任务回调地址，回调数据格式请参考文档：https://cloud.tencent.com/document/product/1137/40260#c9cbe05f-fe1a-4410-b4dc-40cc301c7b81
     */
    SetPPTCheckCallback(req: SetPPTCheckCallbackRequest, cb?: (error: string, rep: SetPPTCheckCallbackResponse) => void): Promise<SetPPTCheckCallbackResponse>;
    /**
     * 通过文档URL查询转码任务，返回最近一天内最新的转码任务状态
     */
    DescribeTranscodeByUrl(req: DescribeTranscodeByUrlRequest, cb?: (error: string, rep: DescribeTranscodeByUrlResponse) => void): Promise<DescribeTranscodeByUrlResponse>;
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
     * 发起一个实时录制任务
     */
    StartOnlineRecord(req: StartOnlineRecordRequest, cb?: (error: string, rep: StartOnlineRecordResponse) => void): Promise<StartOnlineRecordResponse>;
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
     * 查询告警回调地址。此功能需要申请白名单使用。
     */
    DescribeWarningCallback(req: DescribeWarningCallbackRequest, cb?: (error: string, rep: DescribeWarningCallbackResponse) => void): Promise<DescribeWarningCallbackResponse>;
    /**
     * 检测PPT文件，识别PPT中包含的动态转码任务（Transcode）不支持的元素
     */
    CreatePPTCheckTask(req: CreatePPTCheckTaskRequest, cb?: (error: string, rep: CreatePPTCheckTaskResponse) => void): Promise<CreatePPTCheckTaskResponse>;
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
     * 根据指定的任务类型，获取当前正在执行中的任务列表。只能查询最近3天内创建的任务。
     */
    DescribeRunningTasks(req: DescribeRunningTasksRequest, cb?: (error: string, rep: DescribeRunningTasksResponse) => void): Promise<DescribeRunningTasksResponse>;
    /**
     * 停止白板推流任务
     */
    StopWhiteboardPush(req: StopWhiteboardPushRequest, cb?: (error: string, rep: StopWhiteboardPushResponse) => void): Promise<StopWhiteboardPushResponse>;
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
     * 查询PPT检测任务的执行进度或结果，支持查询最近半年内的任务结果
     */
    DescribePPTCheck(req: DescribePPTCheckRequest, cb?: (error: string, rep: DescribePPTCheckResponse) => void): Promise<DescribePPTCheckResponse>;
    /**
     * 获取指定白板板书生成任务信息
     */
    DescribeSnapshotTask(req: DescribeSnapshotTaskRequest, cb?: (error: string, rep: DescribeSnapshotTaskResponse) => void): Promise<DescribeSnapshotTaskResponse>;
}
