import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { ModifySnapshotByTimeOffsetTemplateResponse, ModifySampleSnapshotTemplateResponse, ModifyWatermarkTemplateRequest, DeleteStreamLinkFlowRequest, DeleteStreamLinkSecurityGroupResponse, CreateTranscodeTemplateRequest, ProcessLiveStreamResponse, DeleteLiveRecordTemplateRequest, DescribeAnimatedGraphicsTemplatesRequest, DeleteAnimatedGraphicsTemplateResponse, DeleteScheduleResponse, ManageTaskResponse, BatchDeleteStreamLinkFlowRequest, DeleteWorkflowRequest, ModifySampleSnapshotTemplateRequest, ManageTaskRequest, CreateWorkflowRequest, ModifyStreamLinkEventRequest, DescribeStreamLinkEventRequest, CreateImageSpriteTemplateRequest, DeleteStreamLinkSecurityGroupRequest, ModifyStreamLinkFlowResponse, DeleteAIRecognitionTemplateResponse, DeleteContentReviewTemplateRequest, StartStreamLinkFlowResponse, ModifyScheduleRequest, ModifyWordSampleResponse, DeletePersonSampleRequest, DescribeStreamLinkFlowsResponse, ParseLiveStreamProcessNotificationResponse, DescribeVideoDatabaseEntryTaskDetailRequest, ExecuteFunctionResponse, CreateAdaptiveDynamicStreamingTemplateRequest, ModifyTranscodeTemplateRequest, ModifyStreamLinkFlowRequest, DeleteAIAnalysisTemplateResponse, CreateQualityControlTemplateResponse, CreateStreamLinkEventRequest, CreatePersonSampleRequest, DescribeStreamLinkFlowSRTStatisticsRequest, CreateScheduleResponse, DeleteAIRecognitionTemplateRequest, CreateStreamLinkSecurityGroupRequest, DescribeStreamLinkEventResponse, EnableWorkflowRequest, CreateStreamLinkFlowResponse, DisassociateSecurityGroupResponse, CreateVideoDatabaseEntryTaskRequest, CreateStreamLinkFlowRequest, RecognizeMediaForZhiXueRequest, ModifyAIAnalysisTemplateResponse, DescribeWordSamplesResponse, DescribeAIRecognitionTemplatesResponse, EditMediaResponse, DescribeSnapshotByTimeOffsetTemplatesRequest, ModifyStreamLinkEventResponse, WithdrawsWatermarkRequest, DisableScheduleRequest, ProcessMediaResponse, CreateWordSamplesResponse, DeleteAdaptiveDynamicStreamingTemplateResponse, ParseNotificationRequest, CreateWordSamplesRequest, DescribeStreamLinkEventsResponse, DescribeStreamLinkFlowStatisticsRequest, DisableScheduleResponse, ModifyAnimatedGraphicsTemplateResponse, DeleteAdaptiveDynamicStreamingTemplateRequest, ModifyPersonSampleResponse, DeleteAIAnalysisTemplateRequest, EditMediaRequest, CreateStreamLinkOutputInfoResponse, DescribeStreamLinkEventAttachedFlowsRequest, DescribeAdaptiveDynamicStreamingTemplatesResponse, StopStreamLinkFlowRequest, DescribeAdaptiveDynamicStreamingTemplatesRequest, CreatePersonSampleResponse, CreateContentReviewTemplateResponse, DeleteWordSamplesRequest, DescribeLiveRecordTemplatesResponse, EnableScheduleRequest, ModifyContentReviewTemplateResponse, DescribeWatermarkTemplatesRequest, ModifyAIAnalysisTemplateRequest, DeleteQualityControlTemplateRequest, ModifyAdaptiveDynamicStreamingTemplateRequest, DescribeQualityControlTemplatesRequest, ModifyWordSampleRequest, BatchStopStreamLinkFlowRequest, CreateStreamLinkEventResponse, ProcessMediaRequest, ProcessImageResponse, DescribeSchedulesResponse, DescribeStreamLinkRegionsResponse, DescribeVideoSearchTaskDetailResponse, DescribeStreamLinkFlowStatisticsResponse, ModifyAdaptiveDynamicStreamingTemplateResponse, DeleteContentReviewTemplateResponse, ModifyQualityControlTemplateResponse, ModifyStreamLinkOutputInfoRequest, RecognizeMediaForZhiXueResponse, DescribeGroupAttachFlowsByIdRequest, DescribeWorkflowsResponse, DeleteImageSpriteTemplateResponse, DescribeContentReviewTemplatesResponse, DescribeStreamLinkActivateStateResponse, ModifyImageSpriteTemplateResponse, CreateWatermarkTemplateRequest, CreateStreamLinkInputRequest, DescribePersonSamplesRequest, EnableScheduleResponse, CreateScheduleRequest, CreateVideoSearchTaskResponse, CreateVideoSearchTaskRequest, DescribeStreamLinkActivateStateRequest, DescribeImageSpriteTemplatesRequest, CreateQualityControlTemplateRequest, CreateAIRecognitionTemplateResponse, DeleteTranscodeTemplateRequest, BatchStartStreamLinkFlowResponse, DisassociateSecurityGroupRequest, DescribeStreamLinkFlowSRTStatisticsResponse, DescribeAIAnalysisTemplatesRequest, ProcessImageRequest, DeleteSampleSnapshotTemplateResponse, ResetWorkflowRequest, DeletePersonSampleResponse, StartStreamLinkFlowRequest, CreateSnapshotByTimeOffsetTemplateResponse, ModifyStreamLinkOutputInfoResponse, ModifyContentReviewTemplateRequest, StopStreamLinkFlowResponse, DeleteScheduleRequest, CreateAdaptiveDynamicStreamingTemplateResponse, DeleteSampleSnapshotTemplateRequest, DescribeTranscodeTemplatesResponse, DeleteStreamLinkFlowResponse, CreateSampleSnapshotTemplateResponse, WithdrawsWatermarkResponse, DescribeStreamLinkFlowMediaStatisticsResponse, CreateVideoDatabaseEntryTaskResponse, DescribeMediaMetaDataResponse, DescribeStreamLinkFlowRealtimeStatusRequest, DescribeSampleSnapshotTemplatesRequest, DisableWorkflowResponse, DescribeQualityControlTemplatesResponse, DescribeStreamLinkEventsRequest, CreateStreamLinkSecurityGroupResponse, ModifyAIRecognitionTemplateRequest, ParseNotificationResponse, CreateLiveRecordTemplateResponse, ResetWorkflowResponse, DescribeStreamLinkFlowsRequest, CreateAIAnalysisTemplateResponse, DeleteStreamLinkOutputRequest, ModifyPersonSampleRequest, CreateAIRecognitionTemplateRequest, DescribeTaskDetailRequest, DescribeStreamLinkFlowResponse, CreateWorkflowResponse, ModifyAIRecognitionTemplateResponse, ModifyAnimatedGraphicsTemplateRequest, ModifyStreamLinkSecurityGroupRequest, DescribeLiveRecordTemplatesRequest, DeleteWordSamplesResponse, DeleteStreamLinkOutputResponse, EnableWorkflowResponse, DeleteStreamLinkEventRequest, CreateStreamLinkOutputInfoRequest, ModifyStreamLinkInputRequest, DescribeStreamLinkEventAttachedFlowsResponse, ModifyTranscodeTemplateResponse, CreateLiveRecordTemplateRequest, CreateContentReviewTemplateRequest, DescribeContentReviewTemplatesRequest, ModifyQualityControlTemplateRequest, DescribeImageSpriteTemplatesResponse, DescribeStreamLinkRegionsRequest, ModifyStreamLinkInputResponse, DescribeTaskDetailResponse, DeleteImageSpriteTemplateRequest, DescribeStreamLinkSecurityGroupsRequest, DeleteStreamLinkEventResponse, DescribeTasksResponse, ModifySnapshotByTimeOffsetTemplateRequest, DescribeVideoSearchTaskDetailRequest, DeleteLiveRecordTemplateResponse, DescribeSnapshotByTimeOffsetTemplatesResponse, DeleteSnapshotByTimeOffsetTemplateResponse, DescribeTasksRequest, CreateTranscodeTemplateResponse, CreateAIAnalysisTemplateRequest, DescribeWorkflowsRequest, DescribeSchedulesRequest, ProcessLiveStreamRequest, ModifyImageSpriteTemplateRequest, DeleteWatermarkTemplateRequest, DescribeWordSamplesRequest, DescribeSampleSnapshotTemplatesResponse, DescribeStreamLinkFlowRealtimeStatusResponse, DescribeTranscodeTemplatesRequest, ModifyLiveRecordTemplateResponse, DescribeStreamLinkSecurityGroupsResponse, BatchDeleteStreamLinkFlowResponse, DisableWorkflowRequest, DescribeWatermarkTemplatesResponse, DescribeStreamLinkFlowLogsRequest, DeleteQualityControlTemplateResponse, CreateAnimatedGraphicsTemplateRequest, DeleteWorkflowResponse, ExecuteFunctionRequest, DescribeStreamLinkFlowLogsResponse, DescribeVideoDatabaseEntryTaskDetailResponse, DeleteTranscodeTemplateResponse, DescribePersonSamplesResponse, ModifyScheduleResponse, DescribeAIAnalysisTemplatesResponse, CreateSnapshotByTimeOffsetTemplateRequest, ParseLiveStreamProcessNotificationRequest, CreateSampleSnapshotTemplateRequest, DescribeStreamLinkFlowRequest, BatchStartStreamLinkFlowRequest, CreateWatermarkTemplateResponse, ModifyStreamLinkSecurityGroupResponse, ModifyLiveRecordTemplateRequest, DeleteAnimatedGraphicsTemplateRequest, DeleteSnapshotByTimeOffsetTemplateRequest, DescribeAnimatedGraphicsTemplatesResponse, CreateAnimatedGraphicsTemplateResponse, DescribeStreamLinkFlowMediaStatisticsRequest, CreateStreamLinkInputResponse, DescribeAIRecognitionTemplatesRequest, BatchStopStreamLinkFlowResponse, DeleteWatermarkTemplateResponse, DescribeMediaMetaDataRequest, CreateImageSpriteTemplateResponse, DescribeGroupAttachFlowsByIdResponse, ModifyWatermarkTemplateResponse } from "./mps_models";
/**
 * mps client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 创建用户自定义指定时间点截图模板，数量上限：16。
     */
    CreateSnapshotByTimeOffsetTemplate(req: CreateSnapshotByTimeOffsetTemplateRequest, cb?: (error: string, rep: CreateSnapshotByTimeOffsetTemplateResponse) => void): Promise<CreateSnapshotByTimeOffsetTemplateResponse>;
    /**
     * 实时查询流的当前状态
     */
    DescribeStreamLinkFlowRealtimeStatus(req: DescribeStreamLinkFlowRealtimeStatusRequest, cb?: (error: string, rep: DescribeStreamLinkFlowRealtimeStatusResponse) => void): Promise<DescribeStreamLinkFlowRealtimeStatusResponse>;
    /**
     * 修改直播录制模板
     */
    ModifyLiveRecordTemplate(req: ModifyLiveRecordTemplateRequest, cb?: (error: string, rep: ModifyLiveRecordTemplateResponse) => void): Promise<ModifyLiveRecordTemplateResponse>;
    /**
     * 对视频进行编辑，生成一个新的视频。编辑的功能包括：
 

一、**剪辑任务**：简单的视频剪辑，如剪辑、拼接等
1. 对一个文件进行剪辑，生成一个新的视频；
2. 对多个文件进行拼接，生成一个新的视频；
3. 对多个文件进行剪辑，然后再拼接，生成一个新的视频。

二、**合成任务**：通过接口描述信息，合成一个新的视频。
1. 多轨道（视频、音频、字幕）、多类型元素（视频、图片、音频、文字、空）
2. 图像级别：贴图、缩放、任意角度旋转、镜像等
3. 音频级别：音量控制、淡入淡出、混音等
4. 视频级别：转场、倍数播放、拼接、剪切、字幕、画中画、音画分离、出入场动效等
     */
    EditMedia(req: EditMediaRequest, cb?: (error: string, rep: EditMediaResponse) => void): Promise<EditMediaResponse>;
    /**
     * 查询媒体传输事件的配置信息。
     */
    DescribeStreamLinkEvent(req: DescribeStreamLinkEventRequest, cb?: (error: string, rep: DescribeStreamLinkEventResponse) => void): Promise<DescribeStreamLinkEventResponse>;
    /**
     * 删除用户自定义转动图模板。
     */
    DeleteAnimatedGraphicsTemplate(req: DeleteAnimatedGraphicsTemplateRequest, cb?: (error: string, rep: DeleteAnimatedGraphicsTemplateResponse) => void): Promise<DeleteAnimatedGraphicsTemplateResponse>;
    /**
     * 根据内容分析模板唯一标识，获取内容分析模板详情列表。返回结果包含符合条件的所有用户自定义内容分析模板及系统预置视频内容分析模板
     */
    DescribeAIAnalysisTemplates(req: DescribeAIAnalysisTemplatesRequest, cb?: (error: string, rep: DescribeAIAnalysisTemplatesResponse) => void): Promise<DescribeAIAnalysisTemplatesResponse>;
    /**
     * 从 CMQ 获取到消息后，从消息的 msgBody 字段中解析出 MPS 直播流处理事件通知的内容。
该接口不用于发起网络调用，而是用来帮助生成各个语言平台的 SDK，您可以参考 SDK 中的解析实现事件通知的解析。
     */
    ParseLiveStreamProcessNotification(req: ParseLiveStreamProcessNotificationRequest, cb?: (error: string, rep: ParseLiveStreamProcessNotificationResponse) => void): Promise<ParseLiveStreamProcessNotificationResponse>;
    /**
     * 删除用户自定义转码模板。
     */
    DeleteTranscodeTemplate(req: DeleteTranscodeTemplateRequest, cb?: (error: string, rep: DeleteTranscodeTemplateResponse) => void): Promise<DeleteTranscodeTemplateResponse>;
    /**
     * 通过任务 ID 查询任务的执行状态和结果的详细信息（最多可以查询7天之内提交的任务）。
     */
    DescribeTaskDetail(req: DescribeTaskDetailRequest, cb?: (error: string, rep: DescribeTaskDetailResponse) => void): Promise<DescribeTaskDetailResponse>;
    /**
     * 该接口用于根据应用场景、关键词、标签，分页查询关键词样本信息。
     */
    DescribeWordSamples(req: DescribeWordSamplesRequest, cb?: (error: string, rep: DescribeWordSamplesResponse) => void): Promise<DescribeWordSamplesResponse>;
    /**
     * 对 URL视频链接 或 COS 中的媒体文件发起处理任务，功能包括：
1. 视频转码（普通转码、极速高清转码、音视频增强）；
2. 视频转动图；
3. 对视频按指定时间点截图；
4. 对视频采样截图；
5. 对视频截图雪碧图；
6. 对视频转自适应码流；
7. 智能内容审核（鉴黄、敏感信息检测）；
8. 智能内容分析（标签、分类、封面、按帧标签、拆条、集锦、片头片尾、游戏打点）；
9. 智能内容识别（人脸、文本全文、文本关键词、语音全文、语音关键词、语音翻译、物体识别）。
10. 媒体质检（直播流格式诊断、音画内容检测（抖动、模糊、低光照、过曝光、黑边、白边、黑屏、白屏、花屏、噪点、马赛克、二维码等）、无参考打分）
     */
    ProcessMedia(req: ProcessMediaRequest, cb?: (error: string, rep: ProcessMediaResponse) => void): Promise<ProcessMediaResponse>;
    /**
     * 修改用户自定义内容分析模板。

注意：模板 ID 10000 以下的为系统预置模板，不允许修改。
     */
    ModifyAIAnalysisTemplate(req: ModifyAIAnalysisTemplateRequest, cb?: (error: string, rep: ModifyAIAnalysisTemplateResponse) => void): Promise<ModifyAIAnalysisTemplateResponse>;
    /**
     * 删除转自适应码流模板
     */
    DeleteAdaptiveDynamicStreamingTemplate(req: DeleteAdaptiveDynamicStreamingTemplateRequest, cb?: (error: string, rep: DeleteAdaptiveDynamicStreamingTemplateResponse) => void): Promise<DeleteAdaptiveDynamicStreamingTemplateResponse>;
    /**
     * 创建转自适应码流模板，数量上限：100。
     */
    CreateAdaptiveDynamicStreamingTemplate(req: CreateAdaptiveDynamicStreamingTemplateRequest, cb?: (error: string, rep: CreateAdaptiveDynamicStreamingTemplateResponse) => void): Promise<CreateAdaptiveDynamicStreamingTemplateResponse>;
    /**
     * 禁用工作流。
     */
    DisableWorkflow(req: DisableWorkflowRequest, cb?: (error: string, rep: DisableWorkflowResponse) => void): Promise<DisableWorkflowResponse>;
    /**
     * 查询采样截图模板，支持根据条件，分页查询。
     */
    DescribeSampleSnapshotTemplates(req: DescribeSampleSnapshotTemplatesRequest, cb?: (error: string, rep: DescribeSampleSnapshotTemplatesResponse) => void): Promise<DescribeSampleSnapshotTemplatesResponse>;
    /**
     * 查询媒体传输流的媒体质量数据。

     */
    DescribeStreamLinkFlowStatistics(req: DescribeStreamLinkFlowStatisticsRequest, cb?: (error: string, rep: DescribeStreamLinkFlowStatisticsResponse) => void): Promise<DescribeStreamLinkFlowStatisticsResponse>;
    /**
     * 批量删除媒体传输流。
     */
    BatchDeleteStreamLinkFlow(req: BatchDeleteStreamLinkFlowRequest, cb?: (error: string, rep: BatchDeleteStreamLinkFlowResponse) => void): Promise<BatchDeleteStreamLinkFlowResponse>;
    /**
     * 获取直播录制模板
     */
    DescribeLiveRecordTemplates(req: DescribeLiveRecordTemplatesRequest, cb?: (error: string, rep: DescribeLiveRecordTemplatesResponse) => void): Promise<DescribeLiveRecordTemplatesResponse>;
    /**
     * 删除用户自定义指定时间点截图模板。
     */
    DeleteSnapshotByTimeOffsetTemplate(req: DeleteSnapshotByTimeOffsetTemplateRequest, cb?: (error: string, rep: DeleteSnapshotByTimeOffsetTemplateResponse) => void): Promise<DeleteSnapshotByTimeOffsetTemplateResponse>;
    /**
     * 启用工作流。
     */
    EnableWorkflow(req: EnableWorkflowRequest, cb?: (error: string, rep: EnableWorkflowResponse) => void): Promise<EnableWorkflowResponse>;
    /**
     * 智能媒体识别，包含表情和动作识别。仅用于智学，其他调用无效。
     */
    RecognizeMediaForZhiXue(req: RecognizeMediaForZhiXueRequest, cb?: (error: string, rep: RecognizeMediaForZhiXueResponse) => void): Promise<RecognizeMediaForZhiXueResponse>;
    /**
     * 修改媒体传输的传输流配置信息。
     */
    ModifyStreamLinkFlow(req: ModifyStreamLinkFlowRequest, cb?: (error: string, rep: ModifyStreamLinkFlowResponse) => void): Promise<ModifyStreamLinkFlowResponse>;
    /**
     * * 该接口用于查询任务列表；
* 当列表数据比较多时，单次接口调用无法拉取整个列表，可通过 ScrollToken 参数，分批拉取；
* 只能查询到最近七天（168小时）内的任务。
     */
    DescribeTasks(req: DescribeTasksRequest, cb?: (error: string, rep: DescribeTasksResponse) => void): Promise<DescribeTasksResponse>;
    /**
     * 该接口用于批量创建关键词样本，样本用于通过OCR、ASR技术，进行不适宜内容识别、内容识别等视频处理。
     */
    CreateWordSamples(req: CreateWordSamplesRequest, cb?: (error: string, rep: CreateWordSamplesResponse) => void): Promise<CreateWordSamplesResponse>;
    /**
     * 创建用户自定义转码模板，数量上限：1000
     */
    CreateTranscodeTemplate(req: CreateTranscodeTemplateRequest, cb?: (error: string, rep: CreateTranscodeTemplateResponse) => void): Promise<CreateTranscodeTemplateResponse>;
    /**
     * 创建媒体传输的传输流配置。
     */
    CreateStreamLinkFlow(req: CreateStreamLinkFlowRequest, cb?: (error: string, rep: CreateStreamLinkFlowResponse) => void): Promise<CreateStreamLinkFlowResponse>;
    /**
     * 本接口仅用于定制开发的特殊场景，除非云媒体处理客服人员主动告知您需要使用本接口，其它情况请勿调用。
     */
    ExecuteFunction(req: ExecuteFunctionRequest, cb?: (error: string, rep: ExecuteFunctionResponse) => void): Promise<ExecuteFunctionResponse>;
    /**
     * 批量查询媒体输入流的配置信息。
     */
    DescribeStreamLinkFlows(req: DescribeStreamLinkFlowsRequest, cb?: (error: string, rep: DescribeStreamLinkFlowsResponse) => void): Promise<DescribeStreamLinkFlowsResponse>;
    /**
     * 修改用户自定义转动图模板。
     */
    ModifyAnimatedGraphicsTemplate(req: ModifyAnimatedGraphicsTemplateRequest, cb?: (error: string, rep: ModifyAnimatedGraphicsTemplateResponse) => void): Promise<ModifyAnimatedGraphicsTemplateResponse>;
    /**
     * 删除媒体传输流的输出配置。
     */
    DeleteStreamLinkOutput(req: DeleteStreamLinkOutputRequest, cb?: (error: string, rep: DeleteStreamLinkOutputResponse) => void): Promise<DeleteStreamLinkOutputResponse>;
    /**
     * 创建用户自定义内容审核模板，数量上限：50。
     */
    CreateContentReviewTemplate(req: CreateContentReviewTemplateRequest, cb?: (error: string, rep: CreateContentReviewTemplateResponse) => void): Promise<CreateContentReviewTemplateResponse>;
    /**
     * 根据安全组反差关联的Flow信息。
     */
    DescribeGroupAttachFlowsById(req: DescribeGroupAttachFlowsByIdRequest, cb?: (error: string, rep: DescribeGroupAttachFlowsByIdResponse) => void): Promise<DescribeGroupAttachFlowsByIdResponse>;
    /**
     * 创建用户自定义采样截图模板，数量上限：16。
     */
    CreateSampleSnapshotTemplate(req: CreateSampleSnapshotTemplateRequest, cb?: (error: string, rep: CreateSampleSnapshotTemplateResponse) => void): Promise<CreateSampleSnapshotTemplateResponse>;
    /**
     * 删除用户自定义内容分析模板。

注意：模板 ID 为 10000 以下的为系统预置模板，不允许删除。
     */
    DeleteAIAnalysisTemplate(req: DeleteAIAnalysisTemplateRequest, cb?: (error: string, rep: DeleteAIAnalysisTemplateResponse) => void): Promise<DeleteAIAnalysisTemplateResponse>;
    /**
     * 修改编排
     */
    ModifySchedule(req: ModifyScheduleRequest, cb?: (error: string, rep: ModifyScheduleResponse) => void): Promise<ModifyScheduleResponse>;
    /**
     * 获取媒体的元信息，包括视频画面宽、高、编码格式、时长、帧率等。
     */
    DescribeMediaMetaData(req: DescribeMediaMetaDataRequest, cb?: (error: string, rep: DescribeMediaMetaDataResponse) => void): Promise<DescribeMediaMetaDataResponse>;
    /**
     * 根据任务ID查询视频检索任务的状态。
     */
    DescribeVideoSearchTaskDetail(req: DescribeVideoSearchTaskDetailRequest, cb?: (error: string, rep: DescribeVideoSearchTaskDetailResponse) => void): Promise<DescribeVideoSearchTaskDetailResponse>;
    /**
     * 修改用户自定义采样截图模板。
     */
    ModifySampleSnapshotTemplate(req: ModifySampleSnapshotTemplateRequest, cb?: (error: string, rep: ModifySampleSnapshotTemplateResponse) => void): Promise<ModifySampleSnapshotTemplateResponse>;
    /**
     * 重新设置一个已经存在且处于禁用状态的工作流。
     */
    ResetWorkflow(req: ResetWorkflowRequest, cb?: (error: string, rep: ResetWorkflowResponse) => void): Promise<ResetWorkflowResponse>;
    /**
     * 删除媒体质检模板
     */
    DeleteQualityControlTemplate(req: DeleteQualityControlTemplateRequest, cb?: (error: string, rep: DeleteQualityControlTemplateResponse) => void): Promise<DeleteQualityControlTemplateResponse>;
    /**
     * 删除工作流。对于已启用的工作流，需要禁用后才能删除。
     */
    DeleteWorkflow(req: DeleteWorkflowRequest, cb?: (error: string, rep: DeleteWorkflowResponse) => void): Promise<DeleteWorkflowResponse>;
    /**
     * 创建媒体质检模板，数量上限：50。
     */
    CreateQualityControlTemplate(req: CreateQualityControlTemplateRequest, cb?: (error: string, rep: CreateQualityControlTemplateResponse) => void): Promise<CreateQualityControlTemplateResponse>;
    /**
     * 修改用户自定义雪碧图模板。
     */
    ModifyImageSpriteTemplate(req: ModifyImageSpriteTemplateRequest, cb?: (error: string, rep: ModifyImageSpriteTemplateResponse) => void): Promise<ModifyImageSpriteTemplateResponse>;
    /**
     * 根据转码模板唯一标识，获取转码模板详情列表。返回结果包含符合条件的所有用户自定义模板及[系统预置转码模板](https://cloud.tencent.com/document/product/266/33476#.E9.A2.84.E7.BD.AE.E8.BD.AC.E7.A0.81.E6.A8.A1.E6.9D.BF)。
     */
    DescribeTranscodeTemplates(req: DescribeTranscodeTemplatesRequest, cb?: (error: string, rep: DescribeTranscodeTemplatesResponse) => void): Promise<DescribeTranscodeTemplatesResponse>;
    /**
     * 更新安全组。
     */
    ModifyStreamLinkSecurityGroup(req: ModifyStreamLinkSecurityGroupRequest, cb?: (error: string, rep: ModifyStreamLinkSecurityGroupResponse) => void): Promise<ModifyStreamLinkSecurityGroupResponse>;
    /**
     * 删除媒体传输的传输流配置。
     */
    DeleteStreamLinkFlow(req: DeleteStreamLinkFlowRequest, cb?: (error: string, rep: DeleteStreamLinkFlowResponse) => void): Promise<DeleteStreamLinkFlowResponse>;
    /**
     * 启动媒体传输流。
     */
    StartStreamLinkFlow(req: StartStreamLinkFlowRequest, cb?: (error: string, rep: StartStreamLinkFlowResponse) => void): Promise<StartStreamLinkFlowResponse>;
    /**
     * 发起图片处理，功能包括：
1. 格式转换；
2. 图像增强；
     */
    ProcessImage(req: ProcessImageRequest, cb?: (error: string, rep: ProcessImageResponse) => void): Promise<ProcessImageResponse>;
    /**
     * 修改媒体传输流的输入信息。
     */
    ModifyStreamLinkInput(req: ModifyStreamLinkInputRequest, cb?: (error: string, rep: ModifyStreamLinkInputResponse) => void): Promise<ModifyStreamLinkInputResponse>;
    /**
     * 查询媒体传输所有地区。
     */
    DescribeStreamLinkRegions(req?: DescribeStreamLinkRegionsRequest, cb?: (error: string, rep: DescribeStreamLinkRegionsResponse) => void): Promise<DescribeStreamLinkRegionsResponse>;
    /**
     * 查询编排。
     */
    DescribeSchedules(req: DescribeSchedulesRequest, cb?: (error: string, rep: DescribeSchedulesResponse) => void): Promise<DescribeSchedulesResponse>;
    /**
     * 该接口用于根据素材 ID，修改素材样本信息，包括名称、描述的修改，以及五官、标签的添加、删除、重置操作。五官删除操作需保证至少剩余 1 张图片，否则，请使用重置操作。
     */
    ModifyPersonSample(req: ModifyPersonSampleRequest, cb?: (error: string, rep: ModifyPersonSampleResponse) => void): Promise<ModifyPersonSampleResponse>;
    /**
     * 创建直播录制模板
     */
    CreateLiveRecordTemplate(req: CreateLiveRecordTemplateRequest, cb?: (error: string, rep: CreateLiveRecordTemplateResponse) => void): Promise<CreateLiveRecordTemplateResponse>;
    /**
     * 批量查询安全组信息。
     */
    DescribeStreamLinkSecurityGroups(req?: DescribeStreamLinkSecurityGroupsRequest, cb?: (error: string, rep: DescribeStreamLinkSecurityGroupsResponse) => void): Promise<DescribeStreamLinkSecurityGroupsResponse>;
    /**
     * 删除安全组。
     */
    DeleteStreamLinkSecurityGroup(req: DeleteStreamLinkSecurityGroupRequest, cb?: (error: string, rep: DeleteStreamLinkSecurityGroupResponse) => void): Promise<DeleteStreamLinkSecurityGroupResponse>;
    /**
     * 创建用户自定义内容分析模板，数量上限：50。
     */
    CreateAIAnalysisTemplate(req: CreateAIAnalysisTemplateRequest, cb?: (error: string, rep: CreateAIAnalysisTemplateResponse) => void): Promise<CreateAIAnalysisTemplateResponse>;
    /**
     * 修改媒体质检模板。
     */
    ModifyQualityControlTemplate(req: ModifyQualityControlTemplateRequest, cb?: (error: string, rep: ModifyQualityControlTemplateResponse) => void): Promise<ModifyQualityControlTemplateResponse>;
    /**
     * 停止媒体传输流。
     */
    StopStreamLinkFlow(req: StopStreamLinkFlowRequest, cb?: (error: string, rep: StopStreamLinkFlowResponse) => void): Promise<StopStreamLinkFlowResponse>;
    /**
     * 查询媒体传输事件关联的所有媒体输入流的配置信息。
     */
    DescribeStreamLinkEventAttachedFlows(req: DescribeStreamLinkEventAttachedFlowsRequest, cb?: (error: string, rep: DescribeStreamLinkEventAttachedFlowsResponse) => void): Promise<DescribeStreamLinkEventAttachedFlowsResponse>;
    /**
     * 修改媒体传输流的输出配置。
     */
    ModifyStreamLinkOutputInfo(req: ModifyStreamLinkOutputInfoRequest, cb?: (error: string, rep: ModifyStreamLinkOutputInfoResponse) => void): Promise<ModifyStreamLinkOutputInfoResponse>;
    /**
     * 查询指定时间点截图模板，支持根据条件，分页查询。
     */
    DescribeSnapshotByTimeOffsetTemplates(req: DescribeSnapshotByTimeOffsetTemplatesRequest, cb?: (error: string, rep: DescribeSnapshotByTimeOffsetTemplatesResponse) => void): Promise<DescribeSnapshotByTimeOffsetTemplatesResponse>;
    /**
     * 修改用户自定义转码模板信息。
     */
    ModifyTranscodeTemplate(req: ModifyTranscodeTemplateRequest, cb?: (error: string, rep: ModifyTranscodeTemplateResponse) => void): Promise<ModifyTranscodeTemplateResponse>;
    /**
     * 根据智能审核模板唯一标识，获取智能审核模板详情列表。返回结果包含符合条件的所有用户自定义模板及系统预置智能审核模板。
     */
    DescribeContentReviewTemplates(req: DescribeContentReviewTemplatesRequest, cb?: (error: string, rep: DescribeContentReviewTemplatesResponse) => void): Promise<DescribeContentReviewTemplatesResponse>;
    /**
     * 批量查询媒体传输事件的配置信息。
     */
    DescribeStreamLinkEvents(req: DescribeStreamLinkEventsRequest, cb?: (error: string, rep: DescribeStreamLinkEventsResponse) => void): Promise<DescribeStreamLinkEventsResponse>;
    /**
     * 查询媒体传输流的SRT质量数据。
     */
    DescribeStreamLinkFlowSRTStatistics(req: DescribeStreamLinkFlowSRTStatisticsRequest, cb?: (error: string, rep: DescribeStreamLinkFlowSRTStatisticsResponse) => void): Promise<DescribeStreamLinkFlowSRTStatisticsResponse>;
    /**
     * 创建媒体传输流的输出信息。
     */
    CreateStreamLinkOutputInfo(req: CreateStreamLinkOutputInfoRequest, cb?: (error: string, rep: CreateStreamLinkOutputInfoResponse) => void): Promise<CreateStreamLinkOutputInfoResponse>;
    /**
     * 根据工作流 ID，获取工作流详情列表。
     */
    DescribeWorkflows(req: DescribeWorkflowsRequest, cb?: (error: string, rep: DescribeWorkflowsResponse) => void): Promise<DescribeWorkflowsResponse>;
    /**
     * 修改用户自定义水印模板，水印类型不允许修改。
     */
    ModifyWatermarkTemplate(req: ModifyWatermarkTemplateRequest, cb?: (error: string, rep: ModifyWatermarkTemplateResponse) => void): Promise<ModifyWatermarkTemplateResponse>;
    /**
     * 使用检索值检索库中最接近检索值的若干视频。
     */
    CreateVideoSearchTask(req: CreateVideoSearchTaskRequest, cb?: (error: string, rep: CreateVideoSearchTaskResponse) => void): Promise<CreateVideoSearchTaskResponse>;
    /**
     * 查询媒体传输开通状态。
     */
    DescribeStreamLinkActivateState(req?: DescribeStreamLinkActivateStateRequest, cb?: (error: string, rep: DescribeStreamLinkActivateStateResponse) => void): Promise<DescribeStreamLinkActivateStateResponse>;
    /**
     * 创建用户自定义雪碧图模板，数量上限：16。
     */
    CreateImageSpriteTemplate(req: CreateImageSpriteTemplateRequest, cb?: (error: string, rep: CreateImageSpriteTemplateResponse) => void): Promise<CreateImageSpriteTemplateResponse>;
    /**
     * 该接口用于查询素材样本信息，支持根据素材 ID、名称、标签，分页查询。
     */
    DescribePersonSamples(req: DescribePersonSamplesRequest, cb?: (error: string, rep: DescribePersonSamplesResponse) => void): Promise<DescribePersonSamplesResponse>;
    /**
     * 从 CMQ 获取到消息后，从消息的 msgBody 字段中解析出 MPS 事件通知的内容。
该接口不用于发起网络调用，而是用来帮助生成各个语言平台的 SDK，您可以参考 SDK 中的解析函数，实现事件通知的解析。
     */
    ParseNotification(req: ParseNotificationRequest, cb?: (error: string, rep: ParseNotificationResponse) => void): Promise<ParseNotificationResponse>;
    /**
     * 删除用户自定义内容识别模板。
     */
    DeleteAIRecognitionTemplate(req: DeleteAIRecognitionTemplateRequest, cb?: (error: string, rep: DeleteAIRecognitionTemplateResponse) => void): Promise<DeleteAIRecognitionTemplateResponse>;
    /**
     * 查询转动图模板列表，支持根据条件，分页查询。
     */
    DescribeAnimatedGraphicsTemplates(req: DescribeAnimatedGraphicsTemplatesRequest, cb?: (error: string, rep: DescribeAnimatedGraphicsTemplatesResponse) => void): Promise<DescribeAnimatedGraphicsTemplatesResponse>;
    /**
     * 该接口用于批量删除关键词样本。
     */
    DeleteWordSamples(req: DeleteWordSamplesRequest, cb?: (error: string, rep: DeleteWordSamplesResponse) => void): Promise<DeleteWordSamplesResponse>;
    /**
     * 对已发起的任务进行管理。
     */
    ManageTask(req: ManageTaskRequest, cb?: (error: string, rep: ManageTaskResponse) => void): Promise<ManageTaskResponse>;
    /**
     * 根据任务ID查询视频入库任务的状态。
     */
    DescribeVideoDatabaseEntryTaskDetail(req: DescribeVideoDatabaseEntryTaskDetailRequest, cb?: (error: string, rep: DescribeVideoDatabaseEntryTaskDetailResponse) => void): Promise<DescribeVideoDatabaseEntryTaskDetailResponse>;
    /**
     * 修改用户自定义指定时间点截图模板。
     */
    ModifySnapshotByTimeOffsetTemplate(req: ModifySnapshotByTimeOffsetTemplateRequest, cb?: (error: string, rep: ModifySnapshotByTimeOffsetTemplateResponse) => void): Promise<ModifySnapshotByTimeOffsetTemplateResponse>;
    /**
     * 批量启动媒体传输流。
     */
    BatchStartStreamLinkFlow(req: BatchStartStreamLinkFlowRequest, cb?: (error: string, rep: BatchStartStreamLinkFlowResponse) => void): Promise<BatchStartStreamLinkFlowResponse>;
    /**
     * 对 COS 中指定 Bucket 的目录下上传的媒体文件，设置处理规则，包括：
1. 视频转码（带水印）；
2. 视频转动图；
3. 对视频按指定时间点截图；
4. 对视频采样截图；
5. 对视频截图雪碧图；
6. 对视频转自适应码流；
7. 智能内容审核（鉴黄、敏感信息检测）；
8. 智能内容分析（标签、分类、封面、按帧标签）；
9. 智能内容识别（人脸、文本全文、文本关键词、语音全文、语音关键词）。

注意：创建工作流成功后是禁用状态，需要手动启用。
     */
    CreateWorkflow(req: CreateWorkflowRequest, cb?: (error: string, rep: CreateWorkflowResponse) => void): Promise<CreateWorkflowResponse>;
    /**
     * 查询转自适应码流模板，支持根据条件，分页查询。
     */
    DescribeAdaptiveDynamicStreamingTemplates(req: DescribeAdaptiveDynamicStreamingTemplatesRequest, cb?: (error: string, rep: DescribeAdaptiveDynamicStreamingTemplatesResponse) => void): Promise<DescribeAdaptiveDynamicStreamingTemplatesResponse>;
    /**
     * 对 COS 中指定 Bucket 的目录下上传的媒体文件，设置处理规则，包括：
1. 视频转码（带水印）；
2. 视频转动图；
3. 对视频按指定时间点截图；
4. 对视频采样截图；
5. 对视频截图雪碧图；
6. 对视频转自适应码流；
7. 智能内容审核（鉴黄、敏感信息检测）；
8. 智能内容分析（标签、分类、封面、按帧标签）；
9. 智能内容识别（人脸、文本全文、文本关键词、语音全文、语音关键词）。

注意：创建编排成功后是禁用状态，需要手动启用。
     */
    CreateSchedule(req: CreateScheduleRequest, cb?: (error: string, rep: CreateScheduleResponse) => void): Promise<CreateScheduleResponse>;
    /**
     * 该接口用于修改关键词的应用场景、标签，关键词本身不可修改，如需修改，可删除重建。
     */
    ModifyWordSample(req: ModifyWordSampleRequest, cb?: (error: string, rep: ModifyWordSampleResponse) => void): Promise<ModifyWordSampleResponse>;
    /**
     * 查询雪碧图模板，支持根据条件，分页查询。
     */
    DescribeImageSpriteTemplates(req: DescribeImageSpriteTemplatesRequest, cb?: (error: string, rep: DescribeImageSpriteTemplatesResponse) => void): Promise<DescribeImageSpriteTemplatesResponse>;
    /**
     * 查询用户自定义水印模板，支持根据条件，分页查询。
     */
    DescribeWatermarkTemplates(req: DescribeWatermarkTemplatesRequest, cb?: (error: string, rep: DescribeWatermarkTemplatesResponse) => void): Promise<DescribeWatermarkTemplatesResponse>;
    /**
     * 创建用户自定义水印模板，数量上限：1000。
     */
    CreateWatermarkTemplate(req: CreateWatermarkTemplateRequest, cb?: (error: string, rep: CreateWatermarkTemplateResponse) => void): Promise<CreateWatermarkTemplateResponse>;
    /**
     * 修改媒体传输的事件配置信息。
     */
    ModifyStreamLinkEvent(req: ModifyStreamLinkEventRequest, cb?: (error: string, rep: ModifyStreamLinkEventResponse) => void): Promise<ModifyStreamLinkEventResponse>;
    /**
     * 根据内容识别模板唯一标识，获取内容识别模板详情列表。返回结果包含符合条件的所有用户自定义内容识别模板及系统预置视频内容识别模板
     */
    DescribeAIRecognitionTemplates(req: DescribeAIRecognitionTemplatesRequest, cb?: (error: string, rep: DescribeAIRecognitionTemplatesResponse) => void): Promise<DescribeAIRecognitionTemplatesResponse>;
    /**
     * 提取视频中的盲水印。
     */
    WithdrawsWatermark(req: WithdrawsWatermarkRequest, cb?: (error: string, rep: WithdrawsWatermarkResponse) => void): Promise<WithdrawsWatermarkResponse>;
    /**
     * 查询媒体输入流的配置信息。
     */
    DescribeStreamLinkFlow(req: DescribeStreamLinkFlowRequest, cb?: (error: string, rep: DescribeStreamLinkFlowResponse) => void): Promise<DescribeStreamLinkFlowResponse>;
    /**
     * 删除编排
     */
    DeleteSchedule(req: DeleteScheduleRequest, cb?: (error: string, rep: DeleteScheduleResponse) => void): Promise<DeleteScheduleResponse>;
    /**
     * 修改转自适应码流模板
     */
    ModifyAdaptiveDynamicStreamingTemplate(req: ModifyAdaptiveDynamicStreamingTemplateRequest, cb?: (error: string, rep: ModifyAdaptiveDynamicStreamingTemplateResponse) => void): Promise<ModifyAdaptiveDynamicStreamingTemplateResponse>;
    /**
     * 删除用户自定义水印模板。
     */
    DeleteWatermarkTemplate(req: DeleteWatermarkTemplateRequest, cb?: (error: string, rep: DeleteWatermarkTemplateResponse) => void): Promise<DeleteWatermarkTemplateResponse>;
    /**
     * 该接口用于根据素材 ID，删除素材样本。
     */
    DeletePersonSample(req: DeletePersonSampleRequest, cb?: (error: string, rep: DeletePersonSampleResponse) => void): Promise<DeletePersonSampleResponse>;
    /**
     * 创建用户自定义转动图模板，数量上限：16。
     */
    CreateAnimatedGraphicsTemplate(req: CreateAnimatedGraphicsTemplateRequest, cb?: (error: string, rep: CreateAnimatedGraphicsTemplateResponse) => void): Promise<CreateAnimatedGraphicsTemplateResponse>;
    /**
     * 启用自动化触发编排任务。
     */
    EnableSchedule(req: EnableScheduleRequest, cb?: (error: string, rep: EnableScheduleResponse) => void): Promise<EnableScheduleResponse>;
    /**
     * 对URL链接或COS中的视频发起入库任务。
可选在任务完成后向回调方发送任务完成状态信息。
     */
    CreateVideoDatabaseEntryTask(req: CreateVideoDatabaseEntryTaskRequest, cb?: (error: string, rep: CreateVideoDatabaseEntryTaskResponse) => void): Promise<CreateVideoDatabaseEntryTaskResponse>;
    /**
     * 对直播流媒体发起处理任务，功能包括：

* 智能内容审核（画面鉴黄、敏感信息检测、声音鉴黄）；
* 智能内容识别（人脸、文本全文、文本关键词、语音全文、语音关键词、语音实时翻译、物体识别、游戏打点）。
* 智能内容分析（新闻实时拆条）。
* 质检（直播流格式诊断、音画内容检测（抖动、模糊、低光照、过曝光、黑边、白边、黑屏、白屏、花屏、噪点、马赛克、二维码等）、无参考打分）。
* 录制

直播流处理事件通知支持HTTP回调，也支持实时写入用户指定的消息队列 CMQ 中，用户从消息队列 CMQ 中获取事件通知结果，同时处理过程中存在输出文件的，会写入用户指定的输出文件的目标存储中。
     */
    ProcessLiveStream(req: ProcessLiveStreamRequest, cb?: (error: string, rep: ProcessLiveStreamResponse) => void): Promise<ProcessLiveStreamResponse>;
    /**
     * 删除直播录制模板
     */
    DeleteLiveRecordTemplate(req: DeleteLiveRecordTemplateRequest, cb?: (error: string, rep: DeleteLiveRecordTemplateResponse) => void): Promise<DeleteLiveRecordTemplateResponse>;
    /**
     * 删除用户自定义内容审核模板。
     */
    DeleteContentReviewTemplate(req: DeleteContentReviewTemplateRequest, cb?: (error: string, rep: DeleteContentReviewTemplateResponse) => void): Promise<DeleteContentReviewTemplateResponse>;
    /**
     * 删除用户自定义采样截图模板。
     */
    DeleteSampleSnapshotTemplate(req: DeleteSampleSnapshotTemplateRequest, cb?: (error: string, rep: DeleteSampleSnapshotTemplateResponse) => void): Promise<DeleteSampleSnapshotTemplateResponse>;
    /**
     * 查询媒体传输流的媒体质量数据。

     */
    DescribeStreamLinkFlowMediaStatistics(req: DescribeStreamLinkFlowMediaStatisticsRequest, cb?: (error: string, rep: DescribeStreamLinkFlowMediaStatisticsResponse) => void): Promise<DescribeStreamLinkFlowMediaStatisticsResponse>;
    /**
     * 创建媒体传输的事件Event。
     */
    CreateStreamLinkEvent(req: CreateStreamLinkEventRequest, cb?: (error: string, rep: CreateStreamLinkEventResponse) => void): Promise<CreateStreamLinkEventResponse>;
    /**
     * 该接口用于创建素材样本，用于通过五官定位等技术，进行内容识别、内容不适宜等视频处理。
     */
    CreatePersonSample(req: CreatePersonSampleRequest, cb?: (error: string, rep: CreatePersonSampleResponse) => void): Promise<CreatePersonSampleResponse>;
    /**
     * 查询用户自定义媒体质检模板，支持根据条件，分页查询。
     */
    DescribeQualityControlTemplates(req: DescribeQualityControlTemplatesRequest, cb?: (error: string, rep: DescribeQualityControlTemplatesResponse) => void): Promise<DescribeQualityControlTemplatesResponse>;
    /**
     * 创建安全组，数量限制5个。
     */
    CreateStreamLinkSecurityGroup(req: CreateStreamLinkSecurityGroupRequest, cb?: (error: string, rep: CreateStreamLinkSecurityGroupResponse) => void): Promise<CreateStreamLinkSecurityGroupResponse>;
    /**
     * 禁用自动化触发编排任务。
     */
    DisableSchedule(req: DisableScheduleRequest, cb?: (error: string, rep: DisableScheduleResponse) => void): Promise<DisableScheduleResponse>;
    /**
     * 创建媒体传输的输入配置。
     */
    CreateStreamLinkInput(req: CreateStreamLinkInputRequest, cb?: (error: string, rep: CreateStreamLinkInputResponse) => void): Promise<CreateStreamLinkInputResponse>;
    /**
     * 批量解绑安全组下面关联的输入输出。
     */
    DisassociateSecurityGroup(req: DisassociateSecurityGroupRequest, cb?: (error: string, rep: DisassociateSecurityGroupResponse) => void): Promise<DisassociateSecurityGroupResponse>;
    /**
     * 修改用户自定义内容审核模板。
     */
    ModifyContentReviewTemplate(req: ModifyContentReviewTemplateRequest, cb?: (error: string, rep: ModifyContentReviewTemplateResponse) => void): Promise<ModifyContentReviewTemplateResponse>;
    /**
     * 创建用户自定义内容识别模板，数量上限：50。
     */
    CreateAIRecognitionTemplate(req: CreateAIRecognitionTemplateRequest, cb?: (error: string, rep: CreateAIRecognitionTemplateResponse) => void): Promise<CreateAIRecognitionTemplateResponse>;
    /**
     * 批量停止媒体传输流。
     */
    BatchStopStreamLinkFlow(req: BatchStopStreamLinkFlowRequest, cb?: (error: string, rep: BatchStopStreamLinkFlowResponse) => void): Promise<BatchStopStreamLinkFlowResponse>;
    /**
     * 修改用户自定义内容识别模板。
     */
    ModifyAIRecognitionTemplate(req: ModifyAIRecognitionTemplateRequest, cb?: (error: string, rep: ModifyAIRecognitionTemplateResponse) => void): Promise<ModifyAIRecognitionTemplateResponse>;
    /**
     * 删除媒体传输的事件配置。
     */
    DeleteStreamLinkEvent(req: DeleteStreamLinkEventRequest, cb?: (error: string, rep: DeleteStreamLinkEventResponse) => void): Promise<DeleteStreamLinkEventResponse>;
    /**
     * 查询媒体传输流的日志信息。
     */
    DescribeStreamLinkFlowLogs(req: DescribeStreamLinkFlowLogsRequest, cb?: (error: string, rep: DescribeStreamLinkFlowLogsResponse) => void): Promise<DescribeStreamLinkFlowLogsResponse>;
    /**
     * 删除雪碧图模板。
     */
    DeleteImageSpriteTemplate(req: DeleteImageSpriteTemplateRequest, cb?: (error: string, rep: DeleteImageSpriteTemplateResponse) => void): Promise<DeleteImageSpriteTemplateResponse>;
}
