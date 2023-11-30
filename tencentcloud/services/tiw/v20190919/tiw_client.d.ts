import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { StopOnlineRecordResponse, SetVideoGenerationTaskCallbackKeyRequest, DescribeTIWRoomDailyUsageRequest, DescribeWhiteboardPushRequest, DescribeWhiteboardPushSearchResponse, ResumeOnlineRecordResponse, DescribeWhiteboardApplicationConfigResponse, CreateSnapshotTaskResponse, ModifyApplicationResponse, SetPPTCheckCallbackKeyResponse, CreateTranscodeResponse, DescribeUserResourcesResponse, DescribePPTCheckResponse, CreateApplicationRequest, ModifyWhiteboardBucketConfigRequest, SetOnlineRecordCallbackKeyResponse, DescribeRecordSearchResponse, DescribeAPIServiceRequest, DescribeQualityMetricsRequest, CreateVideoGenerationTaskRequest, DescribeTranscodeCallbackRequest, DescribeTranscodeSearchResponse, ResumeOnlineRecordRequest, SetWhiteboardPushCallbackKeyResponse, DescribeRoomListRequest, SetWhiteboardPushCallbackResponse, ApplyTiwTrialResponse, PauseOnlineRecordRequest, DescribeRunningTasksResponse, DescribeApplicationUsageResponse, DescribeAPIServiceResponse, DescribeWarningCallbackResponse, DescribeWhiteboardBucketConfigRequest, DescribeUsageSummaryResponse, DescribeRunningTasksRequest, DescribeApplicationUsageRequest, SetWarningCallbackResponse, SetVideoGenerationTaskCallbackKeyResponse, DescribeVideoGenerationTaskResponse, SetPPTCheckCallbackKeyRequest, DescribeVideoGenerationTaskRequest, DescribeWhiteboardPushCallbackRequest, DescribeOnlineRecordResponse, DescribeTranscodeRequest, DescribeBoardSDKLogResponse, SetOnlineRecordCallbackResponse, DescribePPTCheckCallbackResponse, DescribeTranscodeCallbackResponse, DescribeUserListResponse, ModifyAutoRenewFlagResponse, DescribeApplicationInfosResponse, DescribeTIWDailyUsageRequest, DescribeWhiteboardBucketConfigResponse, DescribeBoardSDKLogRequest, DescribeVideoGenerationTaskCallbackRequest, SetVideoGenerationTaskCallbackRequest, SetWhiteboardPushCallbackKeyRequest, DescribeTranscodeSearchRequest, ApplyTiwTrialRequest, StartWhiteboardPushRequest, SetWarningCallbackRequest, DescribeVideoGenerationTaskCallbackResponse, ModifyWhiteboardApplicationConfigRequest, DescribeSnapshotTaskRequest, StartOnlineRecordRequest, DescribeUserStatusRequest, DescribeOnlineRecordCallbackRequest, DescribeWarningCallbackRequest, SetTranscodeCallbackResponse, StopOnlineRecordRequest, SetVideoGenerationTaskCallbackResponse, DescribeTranscodeByUrlResponse, CreatePPTCheckTaskRequest, SetWhiteboardPushCallbackRequest, DescribeTIWDailyUsageResponse, DescribeWhiteboardApplicationConfigRequest, CreateVideoGenerationTaskResponse, DescribePPTCheckCallbackRequest, PauseOnlineRecordResponse, ModifyWhiteboardApplicationConfigResponse, CreateSnapshotTaskRequest, DescribeTranscodeResponse, SetOnlineRecordCallbackKeyRequest, ModifyApplicationRequest, DescribeOnlineRecordCallbackResponse, DescribeQualityMetricsResponse, DescribeIMApplicationsResponse, SetOnlineRecordCallbackRequest, DescribeUserListRequest, DescribeUserResourcesRequest, SetPPTCheckCallbackResponse, DescribeOnlineRecordRequest, StopWhiteboardPushResponse, DescribeTranscodeByUrlRequest, DescribePostpaidUsageRequest, DescribeRoomListResponse, DescribeIMApplicationsRequest, ModifyAutoRenewFlagRequest, DescribeSnapshotTaskResponse, DescribeUserStatusResponse, DescribeTIWRoomDailyUsageResponse, DescribeWhiteboardPushCallbackResponse, DescribeApplicationInfosRequest, DescribeWhiteboardPushSearchRequest, SetTranscodeCallbackKeyResponse, SetPPTCheckCallbackRequest, DescribeWhiteboardPushResponse, StartOnlineRecordResponse, DescribeUsageSummaryRequest, CreatePPTCheckTaskResponse, ModifyWhiteboardBucketConfigResponse, CreateTranscodeRequest, SetTranscodeCallbackKeyRequest, SetTranscodeCallbackRequest, DescribePostpaidUsageResponse, StartWhiteboardPushResponse, CreateApplicationResponse, StopWhiteboardPushRequest, DescribeRecordSearchRequest, DescribePPTCheckRequest } from "./tiw_models";
/**
 * tiw client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 查询文档转码，实时录制存储桶的配置
     */
    DescribeWhiteboardBucketConfig(req: DescribeWhiteboardBucketConfigRequest, cb?: (error: string, rep: DescribeWhiteboardBucketConfigResponse) => void): Promise<DescribeWhiteboardBucketConfigResponse>;
    /**
     * 设置实时录制回调地址，回调数据格式请参考文档：https://cloud.tencent.com/document/product/1137/40258
     */
    SetOnlineRecordCallback(req: SetOnlineRecordCallbackRequest, cb?: (error: string, rep: SetOnlineRecordCallbackResponse) => void): Promise<SetOnlineRecordCallbackResponse>;
    /**
     * 查询客户端白板日志
     */
    DescribeBoardSDKLog(req: DescribeBoardSDKLogRequest, cb?: (error: string, rep: DescribeBoardSDKLogResponse) => void): Promise<DescribeBoardSDKLogResponse>;
    /**
     * 查询白板用户列表
     */
    DescribeUserList(req: DescribeUserListRequest, cb?: (error: string, rep: DescribeUserListResponse) => void): Promise<DescribeUserListResponse>;
    /**
     * 设置录制视频生成回调地址
     */
    SetVideoGenerationTaskCallback(req: SetVideoGenerationTaskCallbackRequest, cb?: (error: string, rep: SetVideoGenerationTaskCallbackResponse) => void): Promise<SetVideoGenerationTaskCallbackResponse>;
    /**
     * 根据房间号搜索实时录制任务
     */
    DescribeRecordSearch(req?: DescribeRecordSearchRequest, cb?: (error: string, rep: DescribeRecordSearchResponse) => void): Promise<DescribeRecordSearchResponse>;
    /**
     * 检测PPT文件，识别PPT中包含的动态转码任务（Transcode）不支持的元素
     */
    CreatePPTCheckTask(req: CreatePPTCheckTaskRequest, cb?: (error: string, rep: CreatePPTCheckTaskResponse) => void): Promise<CreatePPTCheckTaskResponse>;
    /**
     * 设置实时录制回调鉴权密钥，回调鉴权方式请参考文档：https://cloud.tencent.com/document/product/1137/40257
     */
    SetOnlineRecordCallbackKey(req: SetOnlineRecordCallbackKeyRequest, cb?: (error: string, rep: SetOnlineRecordCallbackKeyResponse) => void): Promise<SetOnlineRecordCallbackKeyResponse>;
    /**
     * 查询白板应用任务相关的配置，包括存储桶、回调等
     */
    DescribeWhiteboardApplicationConfig(req: DescribeWhiteboardApplicationConfigRequest, cb?: (error: string, rep: DescribeWhiteboardApplicationConfigResponse) => void): Promise<DescribeWhiteboardApplicationConfigResponse>;
    /**
     * 设置文档转码回调地址，回调数据格式请参考文档：https://cloud.tencent.com/document/product/1137/40260
     */
    SetTranscodeCallback(req: SetTranscodeCallbackRequest, cb?: (error: string, rep: SetTranscodeCallbackResponse) => void): Promise<SetTranscodeCallbackResponse>;
    /**
     * 恢复实时录制
     */
    ResumeOnlineRecord(req: ResumeOnlineRecordRequest, cb?: (error: string, rep: ResumeOnlineRecordResponse) => void): Promise<ResumeOnlineRecordResponse>;
    /**
     * 申请互动白板试用，默认15天
     */
    ApplyTiwTrial(req?: ApplyTiwTrialRequest, cb?: (error: string, rep: ApplyTiwTrialResponse) => void): Promise<ApplyTiwTrialResponse>;
    /**
     * 查询PPT检测任务回调地址
     */
    DescribePPTCheckCallback(req: DescribePPTCheckCallbackRequest, cb?: (error: string, rep: DescribePPTCheckCallbackResponse) => void): Promise<DescribePPTCheckCallbackResponse>;
    /**
     * 查询互动白板房间维度每天计费用量。
1. 单次查询统计区间最多不能超过31天。
2. 由于统计延迟等原因，暂时不支持查询当天数据，建议在次日上午7点以后再来查询前一天的用量，例如在10月27日上午7点后，再来查询到10月26日整天的用量

     */
    DescribeTIWRoomDailyUsage(req: DescribeTIWRoomDailyUsageRequest, cb?: (error: string, rep: DescribeTIWRoomDailyUsageResponse) => void): Promise<DescribeTIWRoomDailyUsageResponse>;
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
     * 通过文档URL查询转码任务，返回最近一次的转码任务状态
     */
    DescribeTranscodeByUrl(req: DescribeTranscodeByUrlRequest, cb?: (error: string, rep: DescribeTranscodeByUrlResponse) => void): Promise<DescribeTranscodeByUrlResponse>;
    /**
     * 查询录制视频生成回调地址
     */
    DescribeVideoGenerationTaskCallback(req: DescribeVideoGenerationTaskCallbackRequest, cb?: (error: string, rep: DescribeVideoGenerationTaskCallbackResponse) => void): Promise<DescribeVideoGenerationTaskCallbackResponse>;
    /**
     * 修改白板应用
     */
    ModifyApplication(req: ModifyApplicationRequest, cb?: (error: string, rep: ModifyApplicationResponse) => void): Promise<ModifyApplicationResponse>;
    /**
     * 修改白板应用任务相关的配置，包括存储桶、回调等
     */
    ModifyWhiteboardApplicationConfig(req: ModifyWhiteboardApplicationConfigRequest, cb?: (error: string, rep: ModifyWhiteboardApplicationConfigResponse) => void): Promise<ModifyWhiteboardApplicationConfigResponse>;
    /**
     * 查询录制任务状态与结果
     */
    DescribeOnlineRecord(req: DescribeOnlineRecordRequest, cb?: (error: string, rep: DescribeOnlineRecordResponse) => void): Promise<DescribeOnlineRecordResponse>;
    /**
     * 设置白板月功能费自动续费
     */
    ModifyAutoRenewFlag(req: ModifyAutoRenewFlagRequest, cb?: (error: string, rep: ModifyAutoRenewFlagResponse) => void): Promise<ModifyAutoRenewFlagResponse>;
    /**
     * 查询实时录制回调地址
     */
    DescribeOnlineRecordCallback(req: DescribeOnlineRecordCallbackRequest, cb?: (error: string, rep: DescribeOnlineRecordCallbackResponse) => void): Promise<DescribeOnlineRecordCallbackResponse>;
    /**
     * 查询文档转码回调地址
     */
    DescribeTranscodeCallback(req: DescribeTranscodeCallbackRequest, cb?: (error: string, rep: DescribeTranscodeCallbackResponse) => void): Promise<DescribeTranscodeCallbackResponse>;
    /**
     * 设置告警回调地址。此功能需要申请白名单使用。
     */
    SetWarningCallback(req: SetWarningCallbackRequest, cb?: (error: string, rep: SetWarningCallbackResponse) => void): Promise<SetWarningCallbackResponse>;
    /**
     * 通过服务角色调用其他云产品API接口获取信息
     */
    DescribeAPIService(req: DescribeAPIServiceRequest, cb?: (error: string, rep: DescribeAPIServiceResponse) => void): Promise<DescribeAPIServiceResponse>;
    /**
     * 查询白板推流回调地址
     */
    DescribeWhiteboardPushCallback(req: DescribeWhiteboardPushCallbackRequest, cb?: (error: string, rep: DescribeWhiteboardPushCallbackResponse) => void): Promise<DescribeWhiteboardPushCallbackResponse>;
    /**
     * 查询白板应用详情
     */
    DescribeApplicationInfos(req?: DescribeApplicationInfosRequest, cb?: (error: string, rep: DescribeApplicationInfosResponse) => void): Promise<DescribeApplicationInfosResponse>;
    /**
     * 发起一个实时录制任务
     */
    StartOnlineRecord(req: StartOnlineRecordRequest, cb?: (error: string, rep: StartOnlineRecordResponse) => void): Promise<StartOnlineRecordResponse>;
    /**
     * 查询用户后付费用量
     */
    DescribePostpaidUsage(req: DescribePostpaidUsageRequest, cb?: (error: string, rep: DescribePostpaidUsageResponse) => void): Promise<DescribePostpaidUsageResponse>;
    /**
     * 创建一个文档转码任务
     */
    CreateTranscode(req: CreateTranscodeRequest, cb?: (error: string, rep: CreateTranscodeResponse) => void): Promise<CreateTranscodeResponse>;
    /**
     * 按文档名称搜索转码任务
     */
    DescribeTranscodeSearch(req?: DescribeTranscodeSearchRequest, cb?: (error: string, rep: DescribeTranscodeSearchResponse) => void): Promise<DescribeTranscodeSearchResponse>;
    /**
     * 查询客户资源列表
     */
    DescribeUserResources(req?: DescribeUserResourcesRequest, cb?: (error: string, rep: DescribeUserResourcesResponse) => void): Promise<DescribeUserResourcesResponse>;
    /**
     * 设置白板推流回调地址，回调数据格式请参考文档：https://cloud.tencent.com/document/product/1137/40257
     */
    SetWhiteboardPushCallback(req: SetWhiteboardPushCallbackRequest, cb?: (error: string, rep: SetWhiteboardPushCallbackResponse) => void): Promise<SetWhiteboardPushCallbackResponse>;
    /**
     * 查询告警回调地址。此功能需要申请白名单使用。
     */
    DescribeWarningCallback(req: DescribeWarningCallbackRequest, cb?: (error: string, rep: DescribeWarningCallbackResponse) => void): Promise<DescribeWarningCallbackResponse>;
    /**
     * 创建视频生成任务
     */
    CreateVideoGenerationTask(req: CreateVideoGenerationTaskRequest, cb?: (error: string, rep: CreateVideoGenerationTaskResponse) => void): Promise<CreateVideoGenerationTaskResponse>;
    /**
     * 查询文档转码任务的执行进度与转码结果
     */
    DescribeTranscode(req: DescribeTranscodeRequest, cb?: (error: string, rep: DescribeTranscodeResponse) => void): Promise<DescribeTranscodeResponse>;
    /**
     * 停止实时录制
     */
    StopOnlineRecord(req: StopOnlineRecordRequest, cb?: (error: string, rep: StopOnlineRecordResponse) => void): Promise<StopOnlineRecordResponse>;
    /**
     * 查询指定时间段内子产品的用量汇总
     */
    DescribeUsageSummary(req: DescribeUsageSummaryRequest, cb?: (error: string, rep: DescribeUsageSummaryResponse) => void): Promise<DescribeUsageSummaryResponse>;
    /**
     * 设置白板推流回调鉴权密钥，回调鉴权方式请参考文档：https://cloud.tencent.com/document/product/1137/40257
     */
    SetWhiteboardPushCallbackKey(req: SetWhiteboardPushCallbackKeyRequest, cb?: (error: string, rep: SetWhiteboardPushCallbackKeyResponse) => void): Promise<SetWhiteboardPushCallbackKeyResponse>;
    /**
     * 根据房间号搜索白板推流任务
     */
    DescribeWhiteboardPushSearch(req?: DescribeWhiteboardPushSearchRequest, cb?: (error: string, rep: DescribeWhiteboardPushSearchResponse) => void): Promise<DescribeWhiteboardPushSearchResponse>;
    /**
     * 查询录制视频生成任务状态与结果
     */
    DescribeVideoGenerationTask(req: DescribeVideoGenerationTaskRequest, cb?: (error: string, rep: DescribeVideoGenerationTaskResponse) => void): Promise<DescribeVideoGenerationTaskResponse>;
    /**
     * 创建白板应用
     */
    CreateApplication(req: CreateApplicationRequest, cb?: (error: string, rep: CreateApplicationResponse) => void): Promise<CreateApplicationResponse>;
    /**
     * 根据指定的任务类型，获取当前正在执行中的任务列表。只能查询最近3天内创建的任务。
     */
    DescribeRunningTasks(req: DescribeRunningTasksRequest, cb?: (error: string, rep: DescribeRunningTasksResponse) => void): Promise<DescribeRunningTasksResponse>;
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
     * 查询可用于创建白板应用的IM应用列表
     */
    DescribeIMApplications(req?: DescribeIMApplicationsRequest, cb?: (error: string, rep: DescribeIMApplicationsResponse) => void): Promise<DescribeIMApplicationsResponse>;
    /**
     * 查询互动白板质量数据
     */
    DescribeQualityMetrics(req: DescribeQualityMetricsRequest, cb?: (error: string, rep: DescribeQualityMetricsResponse) => void): Promise<DescribeQualityMetricsResponse>;
    /**
     * 发起一个白板推流任务
     */
    StartWhiteboardPush(req: StartWhiteboardPushRequest, cb?: (error: string, rep: StartWhiteboardPushResponse) => void): Promise<StartWhiteboardPushResponse>;
    /**
     * 暂停实时录制
     */
    PauseOnlineRecord(req: PauseOnlineRecordRequest, cb?: (error: string, rep: PauseOnlineRecordResponse) => void): Promise<PauseOnlineRecordResponse>;
    /**
     * 查询互动白板各个子产品用量
     */
    DescribeApplicationUsage(req: DescribeApplicationUsageRequest, cb?: (error: string, rep: DescribeApplicationUsageResponse) => void): Promise<DescribeApplicationUsageResponse>;
    /**
     * 查询白板房间列表
     */
    DescribeRoomList(req: DescribeRoomListRequest, cb?: (error: string, rep: DescribeRoomListResponse) => void): Promise<DescribeRoomListResponse>;
    /**
     * 设置视频生成回调鉴权密钥
     */
    SetVideoGenerationTaskCallbackKey(req: SetVideoGenerationTaskCallbackKeyRequest, cb?: (error: string, rep: SetVideoGenerationTaskCallbackKeyResponse) => void): Promise<SetVideoGenerationTaskCallbackKeyResponse>;
    /**
     * 查询推流任务状态与结果
     */
    DescribeWhiteboardPush(req: DescribeWhiteboardPushRequest, cb?: (error: string, rep: DescribeWhiteboardPushResponse) => void): Promise<DescribeWhiteboardPushResponse>;
    /**
     * 查询互动白板用户详情，包括是否开通了互动白板，当前互动白板服务有效期等信息

     */
    DescribeUserStatus(req?: DescribeUserStatusRequest, cb?: (error: string, rep: DescribeUserStatusResponse) => void): Promise<DescribeUserStatusResponse>;
    /**
     * 查询PPT检测任务的执行进度或结果，支持查询最近半年内的任务结果
     */
    DescribePPTCheck(req: DescribePPTCheckRequest, cb?: (error: string, rep: DescribePPTCheckResponse) => void): Promise<DescribePPTCheckResponse>;
    /**
     * 获取指定白板板书生成任务信息
     */
    DescribeSnapshotTask(req: DescribeSnapshotTaskRequest, cb?: (error: string, rep: DescribeSnapshotTaskResponse) => void): Promise<DescribeSnapshotTaskResponse>;
    /**
     * 设置文档转码，实时录制存储桶的配置
     */
    ModifyWhiteboardBucketConfig(req: ModifyWhiteboardBucketConfigRequest, cb?: (error: string, rep: ModifyWhiteboardBucketConfigResponse) => void): Promise<ModifyWhiteboardBucketConfigResponse>;
}
