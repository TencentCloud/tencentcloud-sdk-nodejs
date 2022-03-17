import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { ModifySnapshotByTimeOffsetTemplateResponse, ModifySampleSnapshotTemplateResponse, ModifyWatermarkTemplateRequest, CreateTranscodeTemplateRequest, ProcessLiveStreamResponse, DescribeAnimatedGraphicsTemplatesRequest, DeleteAnimatedGraphicsTemplateResponse, ManageTaskResponse, DeleteWorkflowRequest, ModifySampleSnapshotTemplateRequest, CreateWorkflowRequest, ManageTaskRequest, CreateImageSpriteTemplateRequest, DeleteAIRecognitionTemplateResponse, DeletePersonSampleRequest, ParseLiveStreamProcessNotificationResponse, ExecuteFunctionResponse, CreateAdaptiveDynamicStreamingTemplateRequest, DeleteAIAnalysisTemplateResponse, DeleteWorkflowResponse, CreatePersonSampleRequest, DeleteAIRecognitionTemplateRequest, EnableWorkflowRequest, ModifyTranscodeTemplateRequest, DescribeWordSamplesResponse, RecognizeMediaForZhiXueRequest, ModifyAIAnalysisTemplateResponse, DescribeAIRecognitionTemplatesResponse, EditMediaResponse, DescribeSnapshotByTimeOffsetTemplatesRequest, ProcessMediaResponse, CreateWordSamplesResponse, DeleteAdaptiveDynamicStreamingTemplateResponse, ParseNotificationRequest, CreateWordSamplesRequest, ModifyAnimatedGraphicsTemplateResponse, DeleteAdaptiveDynamicStreamingTemplateRequest, DeleteAIAnalysisTemplateRequest, EditMediaRequest, DescribeAdaptiveDynamicStreamingTemplatesResponse, DescribeAdaptiveDynamicStreamingTemplatesRequest, CreatePersonSampleResponse, CreateContentReviewTemplateResponse, DeleteWordSamplesRequest, ModifyContentReviewTemplateResponse, DescribeWatermarkTemplatesRequest, ModifyAdaptiveDynamicStreamingTemplateRequest, ModifyWordSampleRequest, ProcessMediaRequest, ModifyAdaptiveDynamicStreamingTemplateResponse, DeleteContentReviewTemplateResponse, RecognizeMediaForZhiXueResponse, DescribeWorkflowsResponse, DeleteImageSpriteTemplateResponse, DescribeContentReviewTemplatesResponse, ModifyImageSpriteTemplateResponse, CreateWatermarkTemplateRequest, DeleteContentReviewTemplateRequest, DescribeImageSpriteTemplatesRequest, CreateAIRecognitionTemplateResponse, DeleteTranscodeTemplateRequest, DescribeAIAnalysisTemplatesRequest, DeleteSampleSnapshotTemplateResponse, ResetWorkflowRequest, DeletePersonSampleResponse, CreateSnapshotByTimeOffsetTemplateResponse, ModifyContentReviewTemplateRequest, CreateAdaptiveDynamicStreamingTemplateResponse, DeleteSampleSnapshotTemplateRequest, CreateSampleSnapshotTemplateResponse, DescribeSampleSnapshotTemplatesRequest, DisableWorkflowResponse, ModifyAIRecognitionTemplateRequest, ParseNotificationResponse, ResetWorkflowResponse, CreateAIAnalysisTemplateResponse, ModifyPersonSampleRequest, DescribeMediaMetaDataResponse, CreateAIRecognitionTemplateRequest, DescribeTaskDetailRequest, CreateWorkflowResponse, ModifyAIRecognitionTemplateResponse, ModifyAnimatedGraphicsTemplateRequest, DeleteWordSamplesResponse, EnableWorkflowResponse, ModifyTranscodeTemplateResponse, CreateContentReviewTemplateRequest, DescribeContentReviewTemplatesRequest, DescribeImageSpriteTemplatesResponse, DescribeTaskDetailResponse, DeleteImageSpriteTemplateRequest, DescribeTasksResponse, ModifySnapshotByTimeOffsetTemplateRequest, DescribeSnapshotByTimeOffsetTemplatesResponse, DeleteSnapshotByTimeOffsetTemplateResponse, DescribeTasksRequest, CreateTranscodeTemplateResponse, CreateAIAnalysisTemplateRequest, DescribeWorkflowsRequest, ProcessLiveStreamRequest, ModifyImageSpriteTemplateRequest, DeleteWatermarkTemplateRequest, DescribeWordSamplesRequest, ModifyAIAnalysisTemplateRequest, CreateWatermarkTemplateResponse, DescribeSampleSnapshotTemplatesResponse, ModifyWordSampleResponse, DescribeTranscodeTemplatesRequest, DisableWorkflowRequest, DescribeWatermarkTemplatesResponse, CreateAnimatedGraphicsTemplateRequest, ExecuteFunctionRequest, ModifyPersonSampleResponse, DeleteTranscodeTemplateResponse, DescribePersonSamplesResponse, DescribeAIAnalysisTemplatesResponse, CreateSnapshotByTimeOffsetTemplateRequest, ParseLiveStreamProcessNotificationRequest, CreateSampleSnapshotTemplateRequest, DescribeTranscodeTemplatesResponse, DeleteAnimatedGraphicsTemplateRequest, DeleteSnapshotByTimeOffsetTemplateRequest, DescribeAnimatedGraphicsTemplatesResponse, CreateAnimatedGraphicsTemplateResponse, DescribePersonSamplesRequest, DeleteWatermarkTemplateResponse, DescribeMediaMetaDataRequest, CreateImageSpriteTemplateResponse, DescribeAIRecognitionTemplatesRequest, ModifyWatermarkTemplateResponse } from "./mps_models";
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
     * 从 CMQ 获取到消息后，从消息的 msgBody 字段中解析出 MPS 事件通知的内容。
该接口不用于发起网络调用，而是用来帮助生成各个语言平台的 SDK，您可以参考 SDK 的中解析函数的实现事件通知的解析。
     */
    ParseNotification(req: ParseNotificationRequest, cb?: (error: string, rep: ParseNotificationResponse) => void): Promise<ParseNotificationResponse>;
    /**
     * 修改用户自定义内容智能识别模板。
     */
    ModifyContentReviewTemplate(req: ModifyContentReviewTemplateRequest, cb?: (error: string, rep: ModifyContentReviewTemplateResponse) => void): Promise<ModifyContentReviewTemplateResponse>;
    /**
     * 创建用户自定义内容智能识别模板，数量上限：50。
     */
    CreateContentReviewTemplate(req: CreateContentReviewTemplateRequest, cb?: (error: string, rep: CreateContentReviewTemplateResponse) => void): Promise<CreateContentReviewTemplateResponse>;
    /**
     * 创建用户自定义采样截图模板，数量上限：16。
     */
    CreateSampleSnapshotTemplate(req: CreateSampleSnapshotTemplateRequest, cb?: (error: string, rep: CreateSampleSnapshotTemplateResponse) => void): Promise<CreateSampleSnapshotTemplateResponse>;
    /**
     * 对视频进行编辑（剪辑、拼接等），生成一个新的点播视频。编辑的功能包括：

1. 对一个文件进行剪辑，生成一个新的视频；
2. 对多个文件进行拼接，生成一个新的视频；
3. 对多个文件进行剪辑，然后再拼接，生成一个新的视频。
     */
    EditMedia(req: EditMediaRequest, cb?: (error: string, rep: EditMediaResponse) => void): Promise<EditMediaResponse>;
    /**
     * 删除用户自定义内容分析模板。

注意：模板 ID 为 10000 以下的为系统预置模板，不允许删除。
     */
    DeleteAIAnalysisTemplate(req: DeleteAIAnalysisTemplateRequest, cb?: (error: string, rep: DeleteAIAnalysisTemplateResponse) => void): Promise<DeleteAIAnalysisTemplateResponse>;
    /**
     * 从 CMQ 获取到消息后，从消息的 msgBody 字段中解析出 MPS 直播流处理事件通知的内容。
该接口不用于发起网络调用，而是用来帮助生成各个语言平台的 SDK，您可以参考 SDK 的中解析函数的实现事件通知的解析。
     */
    ParseLiveStreamProcessNotification(req: ParseLiveStreamProcessNotificationRequest, cb?: (error: string, rep: ParseLiveStreamProcessNotificationResponse) => void): Promise<ParseLiveStreamProcessNotificationResponse>;
    /**
     * 根据工作流 ID，获取工作流详情列表。
     */
    DescribeWorkflows(req: DescribeWorkflowsRequest, cb?: (error: string, rep: DescribeWorkflowsResponse) => void): Promise<DescribeWorkflowsResponse>;
    /**
     * 查询指定时间点截图模板，支持根据条件，分页查询。
     */
    DescribeSnapshotByTimeOffsetTemplates(req: DescribeSnapshotByTimeOffsetTemplatesRequest, cb?: (error: string, rep: DescribeSnapshotByTimeOffsetTemplatesResponse) => void): Promise<DescribeSnapshotByTimeOffsetTemplatesResponse>;
    /**
     * 获取媒体的元信息，包括视频画面宽、高、编码格式、时长、帧率等。
     */
    DescribeMediaMetaData(req: DescribeMediaMetaDataRequest, cb?: (error: string, rep: DescribeMediaMetaDataResponse) => void): Promise<DescribeMediaMetaDataResponse>;
    /**
     * 重新设置一个已经存在且处于禁用状态的工作流。
     */
    ResetWorkflow(req: ResetWorkflowRequest, cb?: (error: string, rep: ResetWorkflowResponse) => void): Promise<ResetWorkflowResponse>;
    /**
     * 修改用户自定义转码模板信息。
     */
    ModifyTranscodeTemplate(req: ModifyTranscodeTemplateRequest, cb?: (error: string, rep: ModifyTranscodeTemplateResponse) => void): Promise<ModifyTranscodeTemplateResponse>;
    /**
     * 删除用户自定义转动图模板。
     */
    DeleteAnimatedGraphicsTemplate(req: DeleteAnimatedGraphicsTemplateRequest, cb?: (error: string, rep: DeleteAnimatedGraphicsTemplateResponse) => void): Promise<DeleteAnimatedGraphicsTemplateResponse>;
    /**
     * 根据内容分析模板唯一标识，获取内容分析模板详情列表。返回结果包含符合条件的所有用户自定义内容分析模板及系统预置视频内容分析模板
     */
    DescribeAIAnalysisTemplates(req: DescribeAIAnalysisTemplatesRequest, cb?: (error: string, rep: DescribeAIAnalysisTemplatesResponse) => void): Promise<DescribeAIAnalysisTemplatesResponse>;
    /**
     * 通过任务 ID 查询任务的执行状态和结果的详细信息（最多可以查询3天之内提交的任务）。
     */
    DescribeTaskDetail(req: DescribeTaskDetailRequest, cb?: (error: string, rep: DescribeTaskDetailResponse) => void): Promise<DescribeTaskDetailResponse>;
    /**
     * 修改用户自定义内容识别模板。
     */
    ModifyAIRecognitionTemplate(req: ModifyAIRecognitionTemplateRequest, cb?: (error: string, rep: ModifyAIRecognitionTemplateResponse) => void): Promise<ModifyAIRecognitionTemplateResponse>;
    /**
     * 修改转自适应码流模板
     */
    ModifyAdaptiveDynamicStreamingTemplate(req: ModifyAdaptiveDynamicStreamingTemplateRequest, cb?: (error: string, rep: ModifyAdaptiveDynamicStreamingTemplateResponse) => void): Promise<ModifyAdaptiveDynamicStreamingTemplateResponse>;
    /**
     * 修改用户自定义采样截图模板。
     */
    ModifySampleSnapshotTemplate(req: ModifySampleSnapshotTemplateRequest, cb?: (error: string, rep: ModifySampleSnapshotTemplateResponse) => void): Promise<ModifySampleSnapshotTemplateResponse>;
    /**
     * 删除用户自定义水印模板。
     */
    DeleteWatermarkTemplate(req: DeleteWatermarkTemplateRequest, cb?: (error: string, rep: DeleteWatermarkTemplateResponse) => void): Promise<DeleteWatermarkTemplateResponse>;
    /**
     * 该接口用于根据素材 ID，删除素材样本。
     */
    DeletePersonSample(req: DeletePersonSampleRequest, cb?: (error: string, rep: DeletePersonSampleResponse) => void): Promise<DeletePersonSampleResponse>;
    /**
     * 删除用户自定义转码模板。
     */
    DeleteTranscodeTemplate(req: DeleteTranscodeTemplateRequest, cb?: (error: string, rep: DeleteTranscodeTemplateResponse) => void): Promise<DeleteTranscodeTemplateResponse>;
    /**
     * 删除用户自定义指定时间点截图模板。
     */
    DeleteSnapshotByTimeOffsetTemplate(req: DeleteSnapshotByTimeOffsetTemplateRequest, cb?: (error: string, rep: DeleteSnapshotByTimeOffsetTemplateResponse) => void): Promise<DeleteSnapshotByTimeOffsetTemplateResponse>;
    /**
     * 修改用户自定义转动图模板。
     */
    ModifyAnimatedGraphicsTemplate(req: ModifyAnimatedGraphicsTemplateRequest, cb?: (error: string, rep: ModifyAnimatedGraphicsTemplateResponse) => void): Promise<ModifyAnimatedGraphicsTemplateResponse>;
    /**
     * 该接口用于根据应用场景、关键词、标签，分页查询关键词样本信息。
     */
    DescribeWordSamples(req: DescribeWordSamplesRequest, cb?: (error: string, rep: DescribeWordSamplesResponse) => void): Promise<DescribeWordSamplesResponse>;
    /**
     * 修改用户自定义水印模板，水印类型不允许修改。
     */
    ModifyWatermarkTemplate(req: ModifyWatermarkTemplateRequest, cb?: (error: string, rep: ModifyWatermarkTemplateResponse) => void): Promise<ModifyWatermarkTemplateResponse>;
    /**
     * 该接口用于批量删除关键词样本。
     */
    DeleteWordSamples(req: DeleteWordSamplesRequest, cb?: (error: string, rep: DeleteWordSamplesResponse) => void): Promise<DeleteWordSamplesResponse>;
    /**
     * 删除工作流。对于已启用的工作流，需要禁用后才能删除。
     */
    DeleteWorkflow(req: DeleteWorkflowRequest, cb?: (error: string, rep: DeleteWorkflowResponse) => void): Promise<DeleteWorkflowResponse>;
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
     * 创建用户自定义水印模板，数量上限：1000。
     */
    CreateWatermarkTemplate(req: CreateWatermarkTemplateRequest, cb?: (error: string, rep: CreateWatermarkTemplateResponse) => void): Promise<CreateWatermarkTemplateResponse>;
    /**
     * 该接口用于查询素材样本信息，支持根据素材 ID、名称、标签，分页查询。
     */
    DescribePersonSamples(req: DescribePersonSamplesRequest, cb?: (error: string, rep: DescribePersonSamplesResponse) => void): Promise<DescribePersonSamplesResponse>;
    /**
     * 删除用户自定义采样截图模板。
     */
    DeleteSampleSnapshotTemplate(req: DeleteSampleSnapshotTemplateRequest, cb?: (error: string, rep: DeleteSampleSnapshotTemplateResponse) => void): Promise<DeleteSampleSnapshotTemplateResponse>;
    /**
     * 删除用户自定义内容识别模板。
     */
    DeleteAIRecognitionTemplate(req: DeleteAIRecognitionTemplateRequest, cb?: (error: string, rep: DeleteAIRecognitionTemplateResponse) => void): Promise<DeleteAIRecognitionTemplateResponse>;
    /**
     * 创建用户自定义转动图模板，数量上限：16。
     */
    CreateAnimatedGraphicsTemplate(req: CreateAnimatedGraphicsTemplateRequest, cb?: (error: string, rep: CreateAnimatedGraphicsTemplateResponse) => void): Promise<CreateAnimatedGraphicsTemplateResponse>;
    /**
     * 查询转动图模板列表，支持根据条件，分页查询。
     */
    DescribeAnimatedGraphicsTemplates(req: DescribeAnimatedGraphicsTemplatesRequest, cb?: (error: string, rep: DescribeAnimatedGraphicsTemplatesResponse) => void): Promise<DescribeAnimatedGraphicsTemplatesResponse>;
    /**
     * 启用工作流。
     */
    EnableWorkflow(req: EnableWorkflowRequest, cb?: (error: string, rep: EnableWorkflowResponse) => void): Promise<EnableWorkflowResponse>;
    /**
     * 智能媒体识别，包含表情和动作识别。仅用于智学，其他调用无效。
     */
    RecognizeMediaForZhiXue(req: RecognizeMediaForZhiXueRequest, cb?: (error: string, rep: RecognizeMediaForZhiXueResponse) => void): Promise<RecognizeMediaForZhiXueResponse>;
    /**
     * 对已发起的任务进行管理。
     */
    ManageTask(req: ManageTaskRequest, cb?: (error: string, rep: ManageTaskResponse) => void): Promise<ManageTaskResponse>;
    /**
     * 修改用户自定义内容分析模板。

注意：模板 ID 10000 以下的为系统预置模板，不允许修改。
     */
    ModifyAIAnalysisTemplate(req: ModifyAIAnalysisTemplateRequest, cb?: (error: string, rep: ModifyAIAnalysisTemplateResponse) => void): Promise<ModifyAIAnalysisTemplateResponse>;
    /**
     * * 该接口用于查询任务列表；
* 当列表数据比较多时，单次接口调用无法拉取整个列表，可通过 ScrollToken 参数，分批拉取；
* 只能查询到最近三天（72 小时）内的任务。
     */
    DescribeTasks(req: DescribeTasksRequest, cb?: (error: string, rep: DescribeTasksResponse) => void): Promise<DescribeTasksResponse>;
    /**
     * 修改用户自定义指定时间点截图模板。
     */
    ModifySnapshotByTimeOffsetTemplate(req: ModifySnapshotByTimeOffsetTemplateRequest, cb?: (error: string, rep: ModifySnapshotByTimeOffsetTemplateResponse) => void): Promise<ModifySnapshotByTimeOffsetTemplateResponse>;
    /**
     * 该接口用于批量创建关键词样本，样本用于通过OCR、ASR技术，进行不适宜内容识别、内容识别等视频处理。
     */
    CreateWordSamples(req: CreateWordSamplesRequest, cb?: (error: string, rep: CreateWordSamplesResponse) => void): Promise<CreateWordSamplesResponse>;
    /**
     * 该接口用于创建素材样本，用于通过五官定位等技术，进行内容识别、内容不适宜等视频处理。
     */
    CreatePersonSample(req: CreatePersonSampleRequest, cb?: (error: string, rep: CreatePersonSampleResponse) => void): Promise<CreatePersonSampleResponse>;
    /**
     * 本接口仅用于定制开发的特殊场景，除非云视频处理客服人员主动告知您需要使用本接口，其它情况请勿调用。
     */
    ExecuteFunction(req: ExecuteFunctionRequest, cb?: (error: string, rep: ExecuteFunctionResponse) => void): Promise<ExecuteFunctionResponse>;
    /**
     * 该接口用于根据素材 ID，修改素材样本信息，包括名称、描述的修改，以及五官、标签的添加、删除、重置操作。五官删除操作需保证至少剩余 1 张图片，否则，请使用重置操作。
     */
    ModifyPersonSample(req: ModifyPersonSampleRequest, cb?: (error: string, rep: ModifyPersonSampleResponse) => void): Promise<ModifyPersonSampleResponse>;
    /**
     * 创建用户自定义转码模板，数量上限：1000。
     */
    CreateTranscodeTemplate(req: CreateTranscodeTemplateRequest, cb?: (error: string, rep: CreateTranscodeTemplateResponse) => void): Promise<CreateTranscodeTemplateResponse>;
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
     * 对直播流媒体发起处理任务，功能包括：

* 智能内容审核（画面鉴黄、敏感信息检测、声音鉴黄）；
* 智能内容识别（人脸、文本全文、文本关键词、语音全文、语音关键词）。

直播流处理事件通知实时写入用户指定的消息队列 CMQ 中，用户需要从消息队列 CMQ 中获取事件通知结果，同时处理过程中存在输出文件的，会写入用户指定的输出文件的目标存储中。
     */
    ProcessLiveStream(req: ProcessLiveStreamRequest, cb?: (error: string, rep: ProcessLiveStreamResponse) => void): Promise<ProcessLiveStreamResponse>;
    /**
     * 查询转自适应码流模板，支持根据条件，分页查询。
     */
    DescribeAdaptiveDynamicStreamingTemplates(req: DescribeAdaptiveDynamicStreamingTemplatesRequest, cb?: (error: string, rep: DescribeAdaptiveDynamicStreamingTemplatesResponse) => void): Promise<DescribeAdaptiveDynamicStreamingTemplatesResponse>;
    /**
     * 对 COS 中的媒体文件发起处理任务，功能包括：
1. 视频转码（带水印）；
2. 视频转动图；
3. 对视频按指定时间点截图；
4. 对视频采样截图；
5. 对视频截图雪碧图；
6. 对视频转自适应码流；
7. 智能内容审核（鉴黄、敏感信息检测）；
8. 智能内容分析（标签、分类、封面、按帧标签）；
9. 智能内容识别（人脸、文本全文、文本关键词、语音全文、语音关键词）。
     */
    ProcessMedia(req: ProcessMediaRequest, cb?: (error: string, rep: ProcessMediaResponse) => void): Promise<ProcessMediaResponse>;
    /**
     * 创建用户自定义内容识别模板，数量上限：50。
     */
    CreateAIRecognitionTemplate(req: CreateAIRecognitionTemplateRequest, cb?: (error: string, rep: CreateAIRecognitionTemplateResponse) => void): Promise<CreateAIRecognitionTemplateResponse>;
    /**
     * 修改用户自定义雪碧图模板。
     */
    ModifyImageSpriteTemplate(req: ModifyImageSpriteTemplateRequest, cb?: (error: string, rep: ModifyImageSpriteTemplateResponse) => void): Promise<ModifyImageSpriteTemplateResponse>;
    /**
     * 该接口用于修改关键词的应用场景、标签，关键词本身不可修改，如需修改，可删除重建。
     */
    ModifyWordSample(req: ModifyWordSampleRequest, cb?: (error: string, rep: ModifyWordSampleResponse) => void): Promise<ModifyWordSampleResponse>;
    /**
     * 查询雪碧图模板，支持根据条件，分页查询。
     */
    DescribeImageSpriteTemplates(req: DescribeImageSpriteTemplatesRequest, cb?: (error: string, rep: DescribeImageSpriteTemplatesResponse) => void): Promise<DescribeImageSpriteTemplatesResponse>;
    /**
     * 删除用户自定义内容智能识别模板。
     */
    DeleteContentReviewTemplate(req: DeleteContentReviewTemplateRequest, cb?: (error: string, rep: DeleteContentReviewTemplateResponse) => void): Promise<DeleteContentReviewTemplateResponse>;
    /**
     * 创建用户自定义内容分析模板，数量上限：50。
     */
    CreateAIAnalysisTemplate(req: CreateAIAnalysisTemplateRequest, cb?: (error: string, rep: CreateAIAnalysisTemplateResponse) => void): Promise<CreateAIAnalysisTemplateResponse>;
    /**
     * 根据内容识别模板唯一标识，获取内容识别模板详情列表。返回结果包含符合条件的所有用户自定义内容识别模板及系统预置视频内容识别模板
     */
    DescribeAIRecognitionTemplates(req: DescribeAIRecognitionTemplatesRequest, cb?: (error: string, rep: DescribeAIRecognitionTemplatesResponse) => void): Promise<DescribeAIRecognitionTemplatesResponse>;
    /**
     * 查询用户自定义水印模板，支持根据条件，分页查询。
     */
    DescribeWatermarkTemplates(req: DescribeWatermarkTemplatesRequest, cb?: (error: string, rep: DescribeWatermarkTemplatesResponse) => void): Promise<DescribeWatermarkTemplatesResponse>;
    /**
     * 创建用户自定义雪碧图模板，数量上限：16。
     */
    CreateImageSpriteTemplate(req: CreateImageSpriteTemplateRequest, cb?: (error: string, rep: CreateImageSpriteTemplateResponse) => void): Promise<CreateImageSpriteTemplateResponse>;
    /**
     * 删除雪碧图模板。
     */
    DeleteImageSpriteTemplate(req: DeleteImageSpriteTemplateRequest, cb?: (error: string, rep: DeleteImageSpriteTemplateResponse) => void): Promise<DeleteImageSpriteTemplateResponse>;
    /**
     * 根据转码模板唯一标识，获取转码模板详情列表。返回结果包含符合条件的所有用户自定义模板及[系统预置转码模板](https://cloud.tencent.com/document/product/266/33476#.E9.A2.84.E7.BD.AE.E8.BD.AC.E7.A0.81.E6.A8.A1.E6.9D.BF)。
     */
    DescribeTranscodeTemplates(req: DescribeTranscodeTemplatesRequest, cb?: (error: string, rep: DescribeTranscodeTemplatesResponse) => void): Promise<DescribeTranscodeTemplatesResponse>;
    /**
     * 根据内容智能识别模板唯一标识，获取内容智能识别模板详情列表。返回结果包含符合条件的所有用户自定义模板及系统预置内容智能识别模板。
     */
    DescribeContentReviewTemplates(req: DescribeContentReviewTemplatesRequest, cb?: (error: string, rep: DescribeContentReviewTemplatesResponse) => void): Promise<DescribeContentReviewTemplatesResponse>;
}
