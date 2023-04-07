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
  ModifySnapshotByTimeOffsetTemplateResponse,
  ModifySampleSnapshotTemplateResponse,
  ModifyWatermarkTemplateRequest,
  DescribeInputRTPSettings,
  AiRecognitionTaskAsrFullTextSegmentItem,
  DeleteStreamLinkFlowRequest,
  FrameRateConfig,
  OverrideTranscodeParameter,
  AiAnalysisTaskClassificationInput,
  SvgWatermarkInput,
  WorkflowInfo,
  CreateTranscodeTemplateRequest,
  ProcessLiveStreamResponse,
  CreateOutputSRTSettings,
  MediaAiAnalysisHighlightItem,
  ModifyStreamLinkOutputInfoResponse,
  DescribeAnimatedGraphicsTemplatesRequest,
  AiReviewTaskProhibitedAsrResult,
  AdaptiveDynamicStreamingTemplate,
  DeleteAnimatedGraphicsTemplateResponse,
  AiReviewTaskProhibitedOcrResult,
  AiRecognitionTaskAsrFullTextResultOutput,
  AiReviewProhibitedOcrTaskOutput,
  DeleteScheduleResponse,
  ManageTaskResponse,
  FlowMediaInfo,
  DeleteWorkflowRequest,
  DescribeRTMPPullSourceAddress,
  DescribeOutputRTMPPullSettings,
  AwsS3FileUploadTrigger,
  UserDefineOcrTextReviewTemplateInfoForUpdate,
  ModifyOutputInfo,
  MediaSnapshotByTimeOffsetItem,
  NumberFormat,
  ModifySampleSnapshotTemplateRequest,
  AiReviewPoliticalOcrTaskInput,
  EnhanceConfig,
  MediaInputInfo,
  CreateWorkflowRequest,
  OcrWordsConfigureInfo,
  RawWatermarkParameter,
  AiReviewTaskPoliticalOcrResult,
  ManageTaskRequest,
  CreateImageSpriteTemplateRequest,
  MediaSnapshotByTimePicInfoItem,
  UserDefineFaceReviewTemplateInfo,
  CreateInputHLSPullSettings,
  ContentReviewTemplateItem,
  ModifyStreamLinkFlowResponse,
  DeleteAIRecognitionTemplateResponse,
  VideoEnhanceConfig,
  DeleteContentReviewTemplateRequest,
  StartStreamLinkFlowResponse,
  AiReviewPoliticalTaskInput,
  ModifyScheduleRequest,
  CreateOutputRTPSettingsDestinations,
  ClassificationConfigureInfo,
  MediaAiAnalysisClassificationItem,
  ModifyWordSampleResponse,
  AudioTemplateInfoForUpdate,
  SuperResolutionConfig,
  DeletePersonSampleRequest,
  DescribeStreamLinkFlowsResponse,
  DescribeInputRTSPPullSettings,
  AiContentReviewResult,
  ParseLiveStreamProcessNotificationResponse,
  AiRecognitionTaskInput,
  AudioTemplateInfo,
  ExecuteFunctionResponse,
  CoverConfigureInfo,
  AIRecognitionTemplateItem,
  AiReviewPornAsrTaskInput,
  AiRecognitionTaskFaceResult,
  CreateAdaptiveDynamicStreamingTemplateRequest,
  CreateInputRTMPPullSettings,
  TerrorismImgReviewTemplateInfoForUpdate,
  ModifyTranscodeTemplateRequest,
  ModifyStreamLinkFlowRequest,
  AiAnalysisTaskHighlightResult,
  DeleteAIAnalysisTemplateResponse,
  TextWatermarkTemplateInputForUpdate,
  AiReviewTerrorismOcrTaskInput,
  AiRecognitionTaskOcrWordsResultInput,
  DeleteWorkflowResponse,
  QualityControlResult,
  AiReviewPornTaskInput,
  HdrConfig,
  ScheduleTask,
  CreatePersonSampleRequest,
  DescribeOutputHLSPullServerUrl,
  DescribeStreamLinkFlowSRTStatisticsRequest,
  MediaAiAnalysisCoverItem,
  CosInputInfo,
  CreateScheduleResponse,
  TagConfigureInfo,
  DescribeWordSamplesResponse,
  FlowStatisticsArray,
  DeleteAIRecognitionTemplateRequest,
  DescribeInputSRTSettings,
  AiAnalysisTaskCoverResult,
  EnableWorkflowRequest,
  CreateStreamLinkFlowResponse,
  AiAnalysisTaskClassificationOutput,
  SRTAddressDestination,
  FlowRealtimeStatusItem,
  AiRecognitionTaskOcrFullTextResultOutput,
  EditMediaTaskInput,
  UserDefineAsrTextReviewTemplateInfo,
  AiRecognitionTaskOcrWordsResultOutput,
  AiSampleFaceInfo,
  CreateInputRTSPPullSettings,
  CreateStreamLinkFlowRequest,
  CreateOutputSRTSettingsDestinations,
  RecognizeMediaForZhiXueRequest,
  MediaProcessTaskAdaptiveDynamicStreamingResult,
  OcrWordsConfigureInfoForUpdate,
  WatermarkTemplate,
  TextWatermarkTemplateInput,
  ModifyAIAnalysisTemplateResponse,
  DescribeAIRecognitionTemplatesResponse,
  ScratchRepairConfig,
  LiveStreamAiReviewResultInfo,
  EditMediaResponse,
  PoliticalOcrReviewTemplateInfoForUpdate,
  CreateOutputRtmpSettingsDestinations,
  PornAsrReviewTemplateInfoForUpdate,
  DescribeSnapshotByTimeOffsetTemplatesRequest,
  ScheduleRecognitionTaskResult,
  WithdrawsWatermarkRequest,
  AiRecognitionTaskAsrFullTextResultInput,
  DescribeInputRTMPPullSettings,
  MediaProcessTaskInput,
  DisableScheduleRequest,
  RTMPPullSourceAddress,
  CosOutputStorage,
  MediaProcessTaskAnimatedGraphicResult,
  ProcessMediaResponse,
  CreateWordSamplesResponse,
  ClassificationConfigureInfoForUpdate,
  CreateScheduleRequest,
  CreateAnimatedGraphicsTemplateRequest,
  ParseNotificationRequest,
  CreateWordSamplesRequest,
  PoliticalAsrReviewTemplateInfoForUpdate,
  DescribeStreamLinkFlowStatisticsRequest,
  AiSampleFaceOperation,
  SvgWatermarkInputForUpdate,
  AiReviewTaskTerrorismOcrResult,
  AiRecognitionTaskOcrWordsResult,
  PornAsrReviewTemplateInfo,
  ProhibitedAsrReviewTemplateInfoForUpdate,
  DisableScheduleResponse,
  ModifyAnimatedGraphicsTemplateResponse,
  DeleteAdaptiveDynamicStreamingTemplateRequest,
  AiRecognitionTaskOcrFullTextSegmentItem,
  EditMediaOutputConfig,
  AiQualityControlTaskInput,
  PornConfigureInfoForUpdate,
  AiReviewPornAsrTaskOutput,
  DeleteAIAnalysisTemplateRequest,
  EditMediaRequest,
  CreateStreamLinkOutputInfoResponse,
  S3InputInfo,
  MediaProcessTaskImageSpriteResult,
  RTPAddressDestination,
  DescribeAdaptiveDynamicStreamingTemplatesResponse,
  MediaContentReviewOcrTextSegmentItem,
  StopStreamLinkFlowRequest,
  DescribeAdaptiveDynamicStreamingTemplatesRequest,
  ImageWatermarkInput,
  AsrFullTextConfigureInfoForUpdate,
  CreatePersonSampleResponse,
  CreateContentReviewTemplateResponse,
  ProhibitedConfigureInfoForUpdate,
  MediaSampleSnapshotItem,
  TagConfigureInfoForUpdate,
  DeleteWordSamplesRequest,
  EnableScheduleRequest,
  RawTranscodeParameter,
  LiveStreamTaskNotifyConfig,
  VideoTemplateInfo,
  PoliticalOcrReviewTemplateInfo,
  PornOcrReviewTemplateInfoForUpdate,
  AiReviewTaskPornOcrResult,
  ModifyContentReviewTemplateResponse,
  DescribeWatermarkTemplatesRequest,
  CreateOutputInfo,
  TaskOutputStorage,
  MediaProcessTaskResult,
  ModifyAIAnalysisTemplateRequest,
  UserDefineConfigureInfo,
  ColorEnhanceConfig,
  DescribeOutputRTPSettings,
  DeleteStreamLinkOutputResponse,
  AiReviewPornOcrTaskInput,
  AiAnalysisTaskFrameTagOutput,
  ModifyAdaptiveDynamicStreamingTemplateRequest,
  MediaAnimatedGraphicsItem,
  ModifyWordSampleRequest,
  AiRecognitionTaskFaceSegmentItem,
  AiAnalysisTaskTagResult,
  RTMPAddressDestination,
  AiAnalysisTaskTagOutput,
  AiAnalysisTaskHighlightOutput,
  SRTSourceAddressReq,
  ProcessMediaRequest,
  DescribeRTSPPullSourceAddress,
  DescribeOutputRTSPPullSettings,
  AiRecognitionTaskOcrFullTextResult,
  MediaProcessTaskSnapshotByTimeOffsetResult,
  DescribeOutputHLSPullSettings,
  AiRecognitionTaskTransTextResultInput,
  DescribeSchedulesResponse,
  ImageQualityEnhanceConfig,
  DescribeStreamLinkRegionsResponse,
  AiSampleWord,
  DescribeStreamLinkFlowStatisticsResponse,
  AiRecognitionTaskAsrWordsResultOutput,
  LiveStreamOcrWordsRecognitionResult,
  LiveStreamProcessErrorInfo,
  ModifyAdaptiveDynamicStreamingTemplateResponse,
  MediaProcessTaskTranscodeResult,
  SnapshotByTimeOffsetTaskInput,
  ImageSpriteTaskInput,
  DeleteContentReviewTemplateResponse,
  ImageWatermarkTemplate,
  AsrWordsConfigureInfo,
  ModifyStreamLinkOutputInfoRequest,
  LiveStreamAsrWordsRecognitionResult,
  MediaAiAnalysisFrameTagItem,
  RecognizeMediaForZhiXueResponse,
  AiSamplePerson,
  FlowStatistics,
  CreateInputSRTSettings,
  FlowRealtimeStatusCommon,
  DescribeWorkflowsResponse,
  AsrWordsConfigureInfoForUpdate,
  DeleteImageSpriteTemplateResponse,
  DescribeContentReviewTemplatesResponse,
  DescribeStreamLinkActivateStateResponse,
  AnimatedGraphicsTemplate,
  DescribeStreamLinkFlowRequest,
  CreateOutputRTMPSettings,
  WorkflowTrigger,
  HLSPullSourceAddress,
  LiveStreamAiRecognitionResultInfo,
  ActivityPara,
  TerrorismOcrReviewTemplateInfoForUpdate,
  UserDefineAsrTextReviewTemplateInfoForUpdate,
  ModifyImageSpriteTemplateResponse,
  CreateWatermarkTemplateRequest,
  ScheduleAnalysisTaskResult,
  ScheduleQualityControlTaskResult,
  TerrorismConfigureInfoForUpdate,
  EnableScheduleResponse,
  OutputSRTSourceAddressResp,
  DeleteAdaptiveDynamicStreamingTemplateResponse,
  StreamLinkRegionInfo,
  FlowRealtimeStatusRTP,
  AnimatedGraphicTaskInput,
  OutputAddress,
  MosaicInput,
  DescribeStreamLinkActivateStateRequest,
  AIAnalysisTemplateItem,
  HeadTailParameter,
  LiveStreamAiReviewImagePoliticalResult,
  RawImageWatermarkInput,
  DescribeImageSpriteTemplatesRequest,
  AiSampleTagOperation,
  SRTSourceAddressResp,
  CreateAIRecognitionTemplateResponse,
  DescribeInput,
  DeleteTranscodeTemplateRequest,
  AiReviewTerrorismTaskOutput,
  ProhibitedConfigureInfo,
  DescribeStreamLinkFlowSRTStatisticsResponse,
  AiReviewTerrorismOcrTaskOutput,
  AiAnalysisResult,
  ImageWatermarkInputForUpdate,
  DescribeAIAnalysisTemplatesRequest,
  FlowVideo,
  AiRecognitionTaskOcrWordsResultItem,
  DeleteSampleSnapshotTemplateResponse,
  AiAnalysisTaskTagInput,
  ResetWorkflowRequest,
  AiReviewTaskTerrorismResult,
  DescribeOutput,
  LiveStreamAiReviewVoicePornResult,
  MediaContentReviewAsrTextSegmentItem,
  MediaContentReviewPoliticalSegmentItem,
  DeletePersonSampleResponse,
  StartStreamLinkFlowRequest,
  CreateSnapshotByTimeOffsetTemplateResponse,
  ModifyContentReviewTemplateRequest,
  StopStreamLinkFlowResponse,
  AiAnalysisTaskCoverOutput,
  AiContentReviewTaskInput,
  InputAddress,
  DeleteScheduleRequest,
  CreateAdaptiveDynamicStreamingTemplateResponse,
  DeleteSampleSnapshotTemplateRequest,
  AiAnalysisTaskInput,
  ImageSpriteTemplate,
  AiRecognitionTaskOcrFullTextSegmentTextItem,
  QualityControlItem,
  DeleteStreamLinkFlowResponse,
  LiveStreamAsrFullTextRecognitionResult,
  AiReviewPornOcrTaskOutput,
  CreateSampleSnapshotTemplateResponse,
  AiAnalysisTaskHighlightInput,
  ProhibitedAsrReviewTemplateInfo,
  WithdrawsWatermarkResponse,
  AiReviewPoliticalAsrTaskInput,
  ActionConfigInfo,
  MediaAiAnalysisTagItem,
  TranscodeTemplate,
  DescribeStreamLinkFlowMediaStatisticsResponse,
  PornOcrReviewTemplateInfo,
  CreateOutputInfoRTPSettings,
  AiReviewTaskPoliticalAsrResult,
  AiRecognitionTaskAsrWordsSegmentItem,
  SubtitleTemplate,
  LiveStreamProcessTask,
  AiReviewProhibitedAsrTaskInput,
  DescribeMediaMetaDataResponse,
  TerrorismOcrReviewTemplateInfo,
  AiReviewTaskPornResult,
  DescribeStreamLinkFlowRealtimeStatusRequest,
  AiReviewProhibitedAsrTaskOutput,
  LiveStreamFaceRecognitionResult,
  FlowAudio,
  CoverConfigureInfoForUpdate,
  DisableWorkflowResponse,
  AiAnalysisTaskClassificationResult,
  PoliticalImgReviewTemplateInfoForUpdate,
  FlowRealtimeStatusRTMP,
  UserDefineOcrTextReviewTemplateInfo,
  AdaptiveStreamTemplate,
  TranscodeTaskInput,
  ModifyAIRecognitionTemplateRequest,
  ParseNotificationResponse,
  ActivityResult,
  DescribeInputHLSPullSettings,
  ResetWorkflowResponse,
  DescribeStreamLinkFlowsRequest,
  CreateAIAnalysisTemplateResponse,
  MediaProcessTaskSampleSnapshotResult,
  UserDefineConfigureInfoForUpdate,
  S3OutputStorage,
  CosFileUploadTrigger,
  AiReviewPoliticalAsrTaskOutput,
  FlowRealtimeStatusSRT,
  TEHDConfigForUpdate,
  DeleteStreamLinkOutputRequest,
  ModifyPersonSampleRequest,
  AsrFullTextConfigureInfo,
  ArtifactRepairConfig,
  CreateAIRecognitionTemplateRequest,
  DescribeTaskDetailRequest,
  DescribeStreamLinkFlowResponse,
  AiAnalysisTaskFrameTagResult,
  AiReviewPornTaskOutput,
  CreateWorkflowResponse,
  AiRecognitionTaskAsrFullTextResult,
  ModifyAIRecognitionTemplateResponse,
  PoliticalImgReviewTemplateInfo,
  PoliticalConfigureInfo,
  ModifyAnimatedGraphicsTemplateRequest,
  DescribeOutputRTMPPullServerUrl,
  AiRecognitionTaskOcrWordsSegmentItem,
  FlowLogInfo,
  DeleteWordSamplesResponse,
  LiveStreamTransTextRecognitionResult,
  WatermarkInput,
  EnableWorkflowResponse,
  Activity,
  AiSampleWordInfo,
  AdaptiveDynamicStreamingInfoItem,
  CreateStreamLinkOutputInfoRequest,
  ProhibitedOcrReviewTemplateInfo,
  LiveStreamOcrFullTextRecognitionResult,
  ModifyStreamLinkInputRequest,
  ScheduleReviewTaskResult,
  ModifyTranscodeTemplateResponse,
  MediaMetaData,
  ExpressionConfigInfo,
  VideoTemplateInfoForUpdate,
  CreateContentReviewTemplateRequest,
  DescribeContentReviewTemplatesRequest,
  AdaptiveDynamicStreamingTaskInput,
  DescribeImageSpriteTemplatesResponse,
  TaskNotifyConfig,
  FaceEnhanceConfig,
  LiveStreamAiReviewImagePornResult,
  AiAnalysisTaskFrameTagInput,
  MediaAiAnalysisFrameTagSegmentItem,
  AiRecognitionTaskAsrWordsResultItem,
  DescribeStreamLinkRegionsRequest,
  ModifyStreamLinkInputResponse,
  DescribeTaskDetailResponse,
  LiveStreamAiRecognitionResultItem,
  DeleteImageSpriteTemplateRequest,
  AiSampleFailFaceInfo,
  UserDefineFaceReviewTemplateInfoForUpdate,
  DescribeInputRTMPSettings,
  SharpEnhanceConfig,
  OcrFullTextConfigureInfoForUpdate,
  FlowSRTInfo,
  AiRecognitionTaskOcrFullTextResultInput,
  DescribeTasksResponse,
  DescribeOutputSRTSettings,
  AiRecognitionTaskFaceResultInput,
  AiReviewPoliticalTaskOutput,
  AiReviewTaskPoliticalResult,
  AiRecognitionTaskTransTextResultOutput,
  ModifySnapshotByTimeOffsetTemplateRequest,
  LiveStreamAiReviewResultItem,
  TEHDConfig,
  CreateInputRTPSettings,
  TaskSimpleInfo,
  DescribeSnapshotByTimeOffsetTemplatesResponse,
  MediaVideoStreamItem,
  SnapshotByTimeOffsetTemplate,
  DeleteSnapshotByTimeOffsetTemplateResponse,
  ProhibitedOcrReviewTemplateInfoForUpdate,
  DescribeTasksRequest,
  FaceConfigureInfoForUpdate,
  CreateTranscodeTemplateResponse,
  AiRecognitionTaskAsrWordsResultInput,
  CreateAIAnalysisTemplateRequest,
  CreateInput,
  AiReviewTerrorismTaskInput,
  DescribeWorkflowsRequest,
  DescribeSchedulesRequest,
  MediaAudioStreamItem,
  LiveStreamAiReviewImageTerrorismResult,
  ProcessLiveStreamRequest,
  ModifyImageSpriteTemplateRequest,
  AiReviewProhibitedOcrTaskInput,
  DeleteWatermarkTemplateRequest,
  DescribeWordSamplesRequest,
  AwsSQS,
  DescribeFlow,
  QualityControlData,
  CreateWatermarkTemplateResponse,
  DescribeSampleSnapshotTemplatesResponse,
  MediaContentReviewSegmentItem,
  DescribeStreamLinkFlowRealtimeStatusResponse,
  TerrorismImgReviewTemplateInfo,
  FlowMediaAudio,
  DescribeTranscodeTemplatesRequest,
  SchedulesInfo,
  DisableWorkflowRequest,
  PoliticalConfigureInfoForUpdate,
  DescribeWatermarkTemplatesResponse,
  DescribeStreamLinkFlowLogsRequest,
  DescribeOutputRTMPSettings,
  FrameTagConfigureInfo,
  ExecuteFunctionRequest,
  DescribeStreamLinkFlowLogsResponse,
  ModifyPersonSampleResponse,
  DeleteTranscodeTemplateResponse,
  MediaTranscodeItem,
  DescribePersonSamplesResponse,
  ModifyScheduleResponse,
  PornConfigureInfo,
  ModifyInput,
  VideoDenoiseConfig,
  DescribeAIAnalysisTemplatesResponse,
  CreateSnapshotByTimeOffsetTemplateRequest,
  ParseLiveStreamProcessNotificationRequest,
  AiRecognitionTaskAsrWordsResult,
  CreateSampleSnapshotTemplateRequest,
  WorkflowTask,
  FlowMediaVideo,
  AiReviewTaskPornAsrResult,
  EditMediaFileInfo,
  UrlInputInfo,
  FaceConfigureInfo,
  AiRecognitionTaskFaceResultOutput,
  PornImgReviewTemplateInfoForUpdate,
  EditMediaTask,
  PornImgReviewTemplateInfo,
  AiReviewPoliticalOcrTaskOutput,
  OcrFullTextConfigureInfo,
  DescribeTranscodeTemplatesResponse,
  DeleteAnimatedGraphicsTemplateRequest,
  DeleteSnapshotByTimeOffsetTemplateRequest,
  DescribeAnimatedGraphicsTemplatesResponse,
  DescribeSampleSnapshotTemplatesRequest,
  ActivityResItem,
  SampleSnapshotTaskInput,
  TerrorismConfigureInfo,
  PoliticalAsrReviewTemplateInfo,
  CreateAnimatedGraphicsTemplateResponse,
  SampleSnapshotTemplate,
  RTSPPullSourceAddress,
  DescribeHLSPullSourceAddress,
  MediaImageSpriteItem,
  DescribePersonSamplesRequest,
  AiRecognitionTaskFaceResultItem,
  DescribeStreamLinkFlowMediaStatisticsRequest,
  AiAnalysisTaskCoverInput,
  RegionInfo,
  AiRecognitionTaskTransTextResult,
  EditMediaTaskOutput,
  HighlightSegmentItem,
  DeleteWatermarkTemplateResponse,
  ResilientStreamConf,
  DescribeOutputRTSPPullServerUrl,
  LowLightEnhanceConfig,
  DescribeMediaMetaDataRequest,
  FrameTagConfigureInfoForUpdate,
  CreateImageSpriteTemplateResponse,
  DescribeAIRecognitionTemplatesRequest,
  AiRecognitionTaskTransTextSegmentItem,
  ModifyWatermarkTemplateResponse,
  AiRecognitionResult,
} from "./mps_models"

/**
 * mps client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("mps.tencentcloudapi.com", "2019-06-12", clientConfig)
  }

  /**
   * 创建用户自定义指定时间点截图模板，数量上限：16。
   */
  async CreateSnapshotByTimeOffsetTemplate(
    req: CreateSnapshotByTimeOffsetTemplateRequest,
    cb?: (error: string, rep: CreateSnapshotByTimeOffsetTemplateResponse) => void
  ): Promise<CreateSnapshotByTimeOffsetTemplateResponse> {
    return this.request("CreateSnapshotByTimeOffsetTemplate", req, cb)
  }

  /**
   * 实时查询流的当前状态
   */
  async DescribeStreamLinkFlowRealtimeStatus(
    req: DescribeStreamLinkFlowRealtimeStatusRequest,
    cb?: (error: string, rep: DescribeStreamLinkFlowRealtimeStatusResponse) => void
  ): Promise<DescribeStreamLinkFlowRealtimeStatusResponse> {
    return this.request("DescribeStreamLinkFlowRealtimeStatus", req, cb)
  }

  /**
   * 创建用户自定义转动图模板，数量上限：16。
   */
  async CreateAnimatedGraphicsTemplate(
    req: CreateAnimatedGraphicsTemplateRequest,
    cb?: (error: string, rep: CreateAnimatedGraphicsTemplateResponse) => void
  ): Promise<CreateAnimatedGraphicsTemplateResponse> {
    return this.request("CreateAnimatedGraphicsTemplate", req, cb)
  }

  /**
     * 对视频进行编辑（剪辑、拼接等），生成一个新的点播视频。编辑的功能包括：

1. 对一个文件进行剪辑，生成一个新的视频；
2. 对多个文件进行拼接，生成一个新的视频；
3. 对多个文件进行剪辑，然后再拼接，生成一个新的视频。
     */
  async EditMedia(
    req: EditMediaRequest,
    cb?: (error: string, rep: EditMediaResponse) => void
  ): Promise<EditMediaResponse> {
    return this.request("EditMedia", req, cb)
  }

  /**
   * 删除用户自定义转动图模板。
   */
  async DeleteAnimatedGraphicsTemplate(
    req: DeleteAnimatedGraphicsTemplateRequest,
    cb?: (error: string, rep: DeleteAnimatedGraphicsTemplateResponse) => void
  ): Promise<DeleteAnimatedGraphicsTemplateResponse> {
    return this.request("DeleteAnimatedGraphicsTemplate", req, cb)
  }

  /**
   * 根据内容分析模板唯一标识，获取内容分析模板详情列表。返回结果包含符合条件的所有用户自定义内容分析模板及系统预置视频内容分析模板
   */
  async DescribeAIAnalysisTemplates(
    req: DescribeAIAnalysisTemplatesRequest,
    cb?: (error: string, rep: DescribeAIAnalysisTemplatesResponse) => void
  ): Promise<DescribeAIAnalysisTemplatesResponse> {
    return this.request("DescribeAIAnalysisTemplates", req, cb)
  }

  /**
   * 删除用户自定义转码模板。
   */
  async DeleteTranscodeTemplate(
    req: DeleteTranscodeTemplateRequest,
    cb?: (error: string, rep: DeleteTranscodeTemplateResponse) => void
  ): Promise<DeleteTranscodeTemplateResponse> {
    return this.request("DeleteTranscodeTemplate", req, cb)
  }

  /**
   * 通过任务 ID 查询任务的执行状态和结果的详细信息（最多可以查询3天之内提交的任务）。
   */
  async DescribeTaskDetail(
    req: DescribeTaskDetailRequest,
    cb?: (error: string, rep: DescribeTaskDetailResponse) => void
  ): Promise<DescribeTaskDetailResponse> {
    return this.request("DescribeTaskDetail", req, cb)
  }

  /**
   * 该接口用于根据应用场景、关键词、标签，分页查询关键词样本信息。
   */
  async DescribeWordSamples(
    req: DescribeWordSamplesRequest,
    cb?: (error: string, rep: DescribeWordSamplesResponse) => void
  ): Promise<DescribeWordSamplesResponse> {
    return this.request("DescribeWordSamples", req, cb)
  }

  /**
     * 对 URL视频链接 或 COS 中的媒体文件发起处理任务，功能包括：
1. 视频转码（普通转码、极速高清转码、音视频增强）；
2. 视频转动图；
3. 对视频按指定时间点截图；
4. 对视频采样截图；
5. 对视频截图雪碧图；
6. 对视频转自适应码流；
7. 智能内容审核（鉴黄、敏感信息检测）；
8. 智能内容分析（标签、分类、封面、按帧标签、拆条、集锦、片头片尾）；
9. 智能内容识别（人脸、文本全文、文本关键词、语音全文、语音关键词、语音翻译、物体识别）。
     */
  async ProcessMedia(
    req: ProcessMediaRequest,
    cb?: (error: string, rep: ProcessMediaResponse) => void
  ): Promise<ProcessMediaResponse> {
    return this.request("ProcessMedia", req, cb)
  }

  /**
     * 修改用户自定义内容分析模板。

注意：模板 ID 10000 以下的为系统预置模板，不允许修改。
     */
  async ModifyAIAnalysisTemplate(
    req: ModifyAIAnalysisTemplateRequest,
    cb?: (error: string, rep: ModifyAIAnalysisTemplateResponse) => void
  ): Promise<ModifyAIAnalysisTemplateResponse> {
    return this.request("ModifyAIAnalysisTemplate", req, cb)
  }

  /**
   * 删除转自适应码流模板
   */
  async DeleteAdaptiveDynamicStreamingTemplate(
    req: DeleteAdaptiveDynamicStreamingTemplateRequest,
    cb?: (error: string, rep: DeleteAdaptiveDynamicStreamingTemplateResponse) => void
  ): Promise<DeleteAdaptiveDynamicStreamingTemplateResponse> {
    return this.request("DeleteAdaptiveDynamicStreamingTemplate", req, cb)
  }

  /**
   * 创建转自适应码流模板，数量上限：100。
   */
  async CreateAdaptiveDynamicStreamingTemplate(
    req: CreateAdaptiveDynamicStreamingTemplateRequest,
    cb?: (error: string, rep: CreateAdaptiveDynamicStreamingTemplateResponse) => void
  ): Promise<CreateAdaptiveDynamicStreamingTemplateResponse> {
    return this.request("CreateAdaptiveDynamicStreamingTemplate", req, cb)
  }

  /**
   * 禁用工作流。
   */
  async DisableWorkflow(
    req: DisableWorkflowRequest,
    cb?: (error: string, rep: DisableWorkflowResponse) => void
  ): Promise<DisableWorkflowResponse> {
    return this.request("DisableWorkflow", req, cb)
  }

  /**
   * 查询采样截图模板，支持根据条件，分页查询。
   */
  async DescribeSampleSnapshotTemplates(
    req: DescribeSampleSnapshotTemplatesRequest,
    cb?: (error: string, rep: DescribeSampleSnapshotTemplatesResponse) => void
  ): Promise<DescribeSampleSnapshotTemplatesResponse> {
    return this.request("DescribeSampleSnapshotTemplates", req, cb)
  }

  /**
     * 查询媒体传输流的媒体质量数据。

     */
  async DescribeStreamLinkFlowStatistics(
    req: DescribeStreamLinkFlowStatisticsRequest,
    cb?: (error: string, rep: DescribeStreamLinkFlowStatisticsResponse) => void
  ): Promise<DescribeStreamLinkFlowStatisticsResponse> {
    return this.request("DescribeStreamLinkFlowStatistics", req, cb)
  }

  /**
   * 删除用户自定义指定时间点截图模板。
   */
  async DeleteSnapshotByTimeOffsetTemplate(
    req: DeleteSnapshotByTimeOffsetTemplateRequest,
    cb?: (error: string, rep: DeleteSnapshotByTimeOffsetTemplateResponse) => void
  ): Promise<DeleteSnapshotByTimeOffsetTemplateResponse> {
    return this.request("DeleteSnapshotByTimeOffsetTemplate", req, cb)
  }

  /**
   * 启用工作流。
   */
  async EnableWorkflow(
    req: EnableWorkflowRequest,
    cb?: (error: string, rep: EnableWorkflowResponse) => void
  ): Promise<EnableWorkflowResponse> {
    return this.request("EnableWorkflow", req, cb)
  }

  /**
   * 智能媒体识别，包含表情和动作识别。仅用于智学，其他调用无效。
   */
  async RecognizeMediaForZhiXue(
    req: RecognizeMediaForZhiXueRequest,
    cb?: (error: string, rep: RecognizeMediaForZhiXueResponse) => void
  ): Promise<RecognizeMediaForZhiXueResponse> {
    return this.request("RecognizeMediaForZhiXue", req, cb)
  }

  /**
   * 修改媒体传输的传输流配置信息。
   */
  async ModifyStreamLinkFlow(
    req: ModifyStreamLinkFlowRequest,
    cb?: (error: string, rep: ModifyStreamLinkFlowResponse) => void
  ): Promise<ModifyStreamLinkFlowResponse> {
    return this.request("ModifyStreamLinkFlow", req, cb)
  }

  /**
   * * 该接口用于查询任务列表；
   * 当列表数据比较多时，单次接口调用无法拉取整个列表，可通过 ScrollToken 参数，分批拉取；
   * 只能查询到最近七天（168小时）内的任务。
   */
  async DescribeTasks(
    req: DescribeTasksRequest,
    cb?: (error: string, rep: DescribeTasksResponse) => void
  ): Promise<DescribeTasksResponse> {
    return this.request("DescribeTasks", req, cb)
  }

  /**
   * 创建用户自定义转码模板，数量上限：1000。
   */
  async CreateTranscodeTemplate(
    req: CreateTranscodeTemplateRequest,
    cb?: (error: string, rep: CreateTranscodeTemplateResponse) => void
  ): Promise<CreateTranscodeTemplateResponse> {
    return this.request("CreateTranscodeTemplate", req, cb)
  }

  /**
   * 创建媒体传输的传输流配置。
   */
  async CreateStreamLinkFlow(
    req: CreateStreamLinkFlowRequest,
    cb?: (error: string, rep: CreateStreamLinkFlowResponse) => void
  ): Promise<CreateStreamLinkFlowResponse> {
    return this.request("CreateStreamLinkFlow", req, cb)
  }

  /**
   * 本接口仅用于定制开发的特殊场景，除非云媒体处理客服人员主动告知您需要使用本接口，其它情况请勿调用。
   */
  async ExecuteFunction(
    req: ExecuteFunctionRequest,
    cb?: (error: string, rep: ExecuteFunctionResponse) => void
  ): Promise<ExecuteFunctionResponse> {
    return this.request("ExecuteFunction", req, cb)
  }

  /**
   * 批量查询媒体输入流的配置信息。
   */
  async DescribeStreamLinkFlows(
    req: DescribeStreamLinkFlowsRequest,
    cb?: (error: string, rep: DescribeStreamLinkFlowsResponse) => void
  ): Promise<DescribeStreamLinkFlowsResponse> {
    return this.request("DescribeStreamLinkFlows", req, cb)
  }

  /**
   * 修改用户自定义转动图模板。
   */
  async ModifyAnimatedGraphicsTemplate(
    req: ModifyAnimatedGraphicsTemplateRequest,
    cb?: (error: string, rep: ModifyAnimatedGraphicsTemplateResponse) => void
  ): Promise<ModifyAnimatedGraphicsTemplateResponse> {
    return this.request("ModifyAnimatedGraphicsTemplate", req, cb)
  }

  /**
   * 删除媒体传输流的输出配置。
   */
  async DeleteStreamLinkOutput(
    req: DeleteStreamLinkOutputRequest,
    cb?: (error: string, rep: DeleteStreamLinkOutputResponse) => void
  ): Promise<DeleteStreamLinkOutputResponse> {
    return this.request("DeleteStreamLinkOutput", req, cb)
  }

  /**
   * 创建用户自定义内容审核模板，数量上限：50。
   */
  async CreateContentReviewTemplate(
    req: CreateContentReviewTemplateRequest,
    cb?: (error: string, rep: CreateContentReviewTemplateResponse) => void
  ): Promise<CreateContentReviewTemplateResponse> {
    return this.request("CreateContentReviewTemplate", req, cb)
  }

  /**
   * 创建用户自定义采样截图模板，数量上限：16。
   */
  async CreateSampleSnapshotTemplate(
    req: CreateSampleSnapshotTemplateRequest,
    cb?: (error: string, rep: CreateSampleSnapshotTemplateResponse) => void
  ): Promise<CreateSampleSnapshotTemplateResponse> {
    return this.request("CreateSampleSnapshotTemplate", req, cb)
  }

  /**
     * 删除用户自定义内容分析模板。

注意：模板 ID 为 10000 以下的为系统预置模板，不允许删除。
     */
  async DeleteAIAnalysisTemplate(
    req: DeleteAIAnalysisTemplateRequest,
    cb?: (error: string, rep: DeleteAIAnalysisTemplateResponse) => void
  ): Promise<DeleteAIAnalysisTemplateResponse> {
    return this.request("DeleteAIAnalysisTemplate", req, cb)
  }

  /**
   * 修改编排
   */
  async ModifySchedule(
    req: ModifyScheduleRequest,
    cb?: (error: string, rep: ModifyScheduleResponse) => void
  ): Promise<ModifyScheduleResponse> {
    return this.request("ModifySchedule", req, cb)
  }

  /**
   * 获取媒体的元信息，包括视频画面宽、高、编码格式、时长、帧率等。
   */
  async DescribeMediaMetaData(
    req: DescribeMediaMetaDataRequest,
    cb?: (error: string, rep: DescribeMediaMetaDataResponse) => void
  ): Promise<DescribeMediaMetaDataResponse> {
    return this.request("DescribeMediaMetaData", req, cb)
  }

  /**
   * 修改用户自定义采样截图模板。
   */
  async ModifySampleSnapshotTemplate(
    req: ModifySampleSnapshotTemplateRequest,
    cb?: (error: string, rep: ModifySampleSnapshotTemplateResponse) => void
  ): Promise<ModifySampleSnapshotTemplateResponse> {
    return this.request("ModifySampleSnapshotTemplate", req, cb)
  }

  /**
   * 重新设置一个已经存在且处于禁用状态的工作流。
   */
  async ResetWorkflow(
    req: ResetWorkflowRequest,
    cb?: (error: string, rep: ResetWorkflowResponse) => void
  ): Promise<ResetWorkflowResponse> {
    return this.request("ResetWorkflow", req, cb)
  }

  /**
   * 删除工作流。对于已启用的工作流，需要禁用后才能删除。
   */
  async DeleteWorkflow(
    req: DeleteWorkflowRequest,
    cb?: (error: string, rep: DeleteWorkflowResponse) => void
  ): Promise<DeleteWorkflowResponse> {
    return this.request("DeleteWorkflow", req, cb)
  }

  /**
   * 修改用户自定义雪碧图模板。
   */
  async ModifyImageSpriteTemplate(
    req: ModifyImageSpriteTemplateRequest,
    cb?: (error: string, rep: ModifyImageSpriteTemplateResponse) => void
  ): Promise<ModifyImageSpriteTemplateResponse> {
    return this.request("ModifyImageSpriteTemplate", req, cb)
  }

  /**
   * 根据转码模板唯一标识，获取转码模板详情列表。返回结果包含符合条件的所有用户自定义模板及[系统预置转码模板](https://cloud.tencent.com/document/product/266/33476#.E9.A2.84.E7.BD.AE.E8.BD.AC.E7.A0.81.E6.A8.A1.E6.9D.BF)。
   */
  async DescribeTranscodeTemplates(
    req: DescribeTranscodeTemplatesRequest,
    cb?: (error: string, rep: DescribeTranscodeTemplatesResponse) => void
  ): Promise<DescribeTranscodeTemplatesResponse> {
    return this.request("DescribeTranscodeTemplates", req, cb)
  }

  /**
   * 删除媒体传输的传输流配置。
   */
  async DeleteStreamLinkFlow(
    req: DeleteStreamLinkFlowRequest,
    cb?: (error: string, rep: DeleteStreamLinkFlowResponse) => void
  ): Promise<DeleteStreamLinkFlowResponse> {
    return this.request("DeleteStreamLinkFlow", req, cb)
  }

  /**
   * 启动媒体传输流。
   */
  async StartStreamLinkFlow(
    req: StartStreamLinkFlowRequest,
    cb?: (error: string, rep: StartStreamLinkFlowResponse) => void
  ): Promise<StartStreamLinkFlowResponse> {
    return this.request("StartStreamLinkFlow", req, cb)
  }

  /**
   * 修改媒体传输流的输入信息。
   */
  async ModifyStreamLinkInput(
    req: ModifyStreamLinkInputRequest,
    cb?: (error: string, rep: ModifyStreamLinkInputResponse) => void
  ): Promise<ModifyStreamLinkInputResponse> {
    return this.request("ModifyStreamLinkInput", req, cb)
  }

  /**
   * 查询媒体传输所有地区。
   */
  async DescribeStreamLinkRegions(
    req?: DescribeStreamLinkRegionsRequest,
    cb?: (error: string, rep: DescribeStreamLinkRegionsResponse) => void
  ): Promise<DescribeStreamLinkRegionsResponse> {
    return this.request("DescribeStreamLinkRegions", req, cb)
  }

  /**
   * 查询编排。
   */
  async DescribeSchedules(
    req: DescribeSchedulesRequest,
    cb?: (error: string, rep: DescribeSchedulesResponse) => void
  ): Promise<DescribeSchedulesResponse> {
    return this.request("DescribeSchedules", req, cb)
  }

  /**
   * 该接口用于根据素材 ID，修改素材样本信息，包括名称、描述的修改，以及五官、标签的添加、删除、重置操作。五官删除操作需保证至少剩余 1 张图片，否则，请使用重置操作。
   */
  async ModifyPersonSample(
    req: ModifyPersonSampleRequest,
    cb?: (error: string, rep: ModifyPersonSampleResponse) => void
  ): Promise<ModifyPersonSampleResponse> {
    return this.request("ModifyPersonSample", req, cb)
  }

  /**
   * 删除用户自定义内容审核模板。
   */
  async DeleteContentReviewTemplate(
    req: DeleteContentReviewTemplateRequest,
    cb?: (error: string, rep: DeleteContentReviewTemplateResponse) => void
  ): Promise<DeleteContentReviewTemplateResponse> {
    return this.request("DeleteContentReviewTemplate", req, cb)
  }

  /**
   * 创建用户自定义内容分析模板，数量上限：50。
   */
  async CreateAIAnalysisTemplate(
    req: CreateAIAnalysisTemplateRequest,
    cb?: (error: string, rep: CreateAIAnalysisTemplateResponse) => void
  ): Promise<CreateAIAnalysisTemplateResponse> {
    return this.request("CreateAIAnalysisTemplate", req, cb)
  }

  /**
   * 停止媒体传输流。
   */
  async StopStreamLinkFlow(
    req: StopStreamLinkFlowRequest,
    cb?: (error: string, rep: StopStreamLinkFlowResponse) => void
  ): Promise<StopStreamLinkFlowResponse> {
    return this.request("StopStreamLinkFlow", req, cb)
  }

  /**
   * 查询指定时间点截图模板，支持根据条件，分页查询。
   */
  async DescribeSnapshotByTimeOffsetTemplates(
    req: DescribeSnapshotByTimeOffsetTemplatesRequest,
    cb?: (error: string, rep: DescribeSnapshotByTimeOffsetTemplatesResponse) => void
  ): Promise<DescribeSnapshotByTimeOffsetTemplatesResponse> {
    return this.request("DescribeSnapshotByTimeOffsetTemplates", req, cb)
  }

  /**
   * 修改用户自定义转码模板信息。
   */
  async ModifyTranscodeTemplate(
    req: ModifyTranscodeTemplateRequest,
    cb?: (error: string, rep: ModifyTranscodeTemplateResponse) => void
  ): Promise<ModifyTranscodeTemplateResponse> {
    return this.request("ModifyTranscodeTemplate", req, cb)
  }

  /**
   * 根据智能审核模板唯一标识，获取智能审核模板详情列表。返回结果包含符合条件的所有用户自定义模板及系统预置智能审核模板。
   */
  async DescribeContentReviewTemplates(
    req: DescribeContentReviewTemplatesRequest,
    cb?: (error: string, rep: DescribeContentReviewTemplatesResponse) => void
  ): Promise<DescribeContentReviewTemplatesResponse> {
    return this.request("DescribeContentReviewTemplates", req, cb)
  }

  /**
   * 查询媒体传输流的SRT质量数据。
   */
  async DescribeStreamLinkFlowSRTStatistics(
    req: DescribeStreamLinkFlowSRTStatisticsRequest,
    cb?: (error: string, rep: DescribeStreamLinkFlowSRTStatisticsResponse) => void
  ): Promise<DescribeStreamLinkFlowSRTStatisticsResponse> {
    return this.request("DescribeStreamLinkFlowSRTStatistics", req, cb)
  }

  /**
   * 创建媒体传输流的输出信息。
   */
  async CreateStreamLinkOutputInfo(
    req: CreateStreamLinkOutputInfoRequest,
    cb?: (error: string, rep: CreateStreamLinkOutputInfoResponse) => void
  ): Promise<CreateStreamLinkOutputInfoResponse> {
    return this.request("CreateStreamLinkOutputInfo", req, cb)
  }

  /**
   * 根据工作流 ID，获取工作流详情列表。
   */
  async DescribeWorkflows(
    req: DescribeWorkflowsRequest,
    cb?: (error: string, rep: DescribeWorkflowsResponse) => void
  ): Promise<DescribeWorkflowsResponse> {
    return this.request("DescribeWorkflows", req, cb)
  }

  /**
   * 修改用户自定义水印模板，水印类型不允许修改。
   */
  async ModifyWatermarkTemplate(
    req: ModifyWatermarkTemplateRequest,
    cb?: (error: string, rep: ModifyWatermarkTemplateResponse) => void
  ): Promise<ModifyWatermarkTemplateResponse> {
    return this.request("ModifyWatermarkTemplate", req, cb)
  }

  /**
   * 该接口用于批量删除关键词样本。
   */
  async DeleteWordSamples(
    req: DeleteWordSamplesRequest,
    cb?: (error: string, rep: DeleteWordSamplesResponse) => void
  ): Promise<DeleteWordSamplesResponse> {
    return this.request("DeleteWordSamples", req, cb)
  }

  /**
   * 查询媒体传输开通状态。
   */
  async DescribeStreamLinkActivateState(
    req?: DescribeStreamLinkActivateStateRequest,
    cb?: (error: string, rep: DescribeStreamLinkActivateStateResponse) => void
  ): Promise<DescribeStreamLinkActivateStateResponse> {
    return this.request("DescribeStreamLinkActivateState", req, cb)
  }

  /**
   * 创建用户自定义水印模板，数量上限：1000。
   */
  async CreateWatermarkTemplate(
    req: CreateWatermarkTemplateRequest,
    cb?: (error: string, rep: CreateWatermarkTemplateResponse) => void
  ): Promise<CreateWatermarkTemplateResponse> {
    return this.request("CreateWatermarkTemplate", req, cb)
  }

  /**
   * 该接口用于查询素材样本信息，支持根据素材 ID、名称、标签，分页查询。
   */
  async DescribePersonSamples(
    req: DescribePersonSamplesRequest,
    cb?: (error: string, rep: DescribePersonSamplesResponse) => void
  ): Promise<DescribePersonSamplesResponse> {
    return this.request("DescribePersonSamples", req, cb)
  }

  /**
     * 从 CMQ 获取到消息后，从消息的 msgBody 字段中解析出 MPS 事件通知的内容。
该接口不用于发起网络调用，而是用来帮助生成各个语言平台的 SDK，您可以参考 SDK 的中解析函数的实现事件通知的解析。
     */
  async ParseNotification(
    req: ParseNotificationRequest,
    cb?: (error: string, rep: ParseNotificationResponse) => void
  ): Promise<ParseNotificationResponse> {
    return this.request("ParseNotification", req, cb)
  }

  /**
   * 删除用户自定义内容识别模板。
   */
  async DeleteAIRecognitionTemplate(
    req: DeleteAIRecognitionTemplateRequest,
    cb?: (error: string, rep: DeleteAIRecognitionTemplateResponse) => void
  ): Promise<DeleteAIRecognitionTemplateResponse> {
    return this.request("DeleteAIRecognitionTemplate", req, cb)
  }

  /**
   * 查询转动图模板列表，支持根据条件，分页查询。
   */
  async DescribeAnimatedGraphicsTemplates(
    req: DescribeAnimatedGraphicsTemplatesRequest,
    cb?: (error: string, rep: DescribeAnimatedGraphicsTemplatesResponse) => void
  ): Promise<DescribeAnimatedGraphicsTemplatesResponse> {
    return this.request("DescribeAnimatedGraphicsTemplates", req, cb)
  }

  /**
   * 对已发起的任务进行管理。
   */
  async ManageTask(
    req: ManageTaskRequest,
    cb?: (error: string, rep: ManageTaskResponse) => void
  ): Promise<ManageTaskResponse> {
    return this.request("ManageTask", req, cb)
  }

  /**
   * 修改用户自定义指定时间点截图模板。
   */
  async ModifySnapshotByTimeOffsetTemplate(
    req: ModifySnapshotByTimeOffsetTemplateRequest,
    cb?: (error: string, rep: ModifySnapshotByTimeOffsetTemplateResponse) => void
  ): Promise<ModifySnapshotByTimeOffsetTemplateResponse> {
    return this.request("ModifySnapshotByTimeOffsetTemplate", req, cb)
  }

  /**
   * 该接口用于批量创建关键词样本，样本用于通过OCR、ASR技术，进行不适宜内容识别、内容识别等视频处理。
   */
  async CreateWordSamples(
    req: CreateWordSamplesRequest,
    cb?: (error: string, rep: CreateWordSamplesResponse) => void
  ): Promise<CreateWordSamplesResponse> {
    return this.request("CreateWordSamples", req, cb)
  }

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
  async CreateWorkflow(
    req: CreateWorkflowRequest,
    cb?: (error: string, rep: CreateWorkflowResponse) => void
  ): Promise<CreateWorkflowResponse> {
    return this.request("CreateWorkflow", req, cb)
  }

  /**
   * 查询转自适应码流模板，支持根据条件，分页查询。
   */
  async DescribeAdaptiveDynamicStreamingTemplates(
    req: DescribeAdaptiveDynamicStreamingTemplatesRequest,
    cb?: (error: string, rep: DescribeAdaptiveDynamicStreamingTemplatesResponse) => void
  ): Promise<DescribeAdaptiveDynamicStreamingTemplatesResponse> {
    return this.request("DescribeAdaptiveDynamicStreamingTemplates", req, cb)
  }

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
  async CreateSchedule(
    req: CreateScheduleRequest,
    cb?: (error: string, rep: CreateScheduleResponse) => void
  ): Promise<CreateScheduleResponse> {
    return this.request("CreateSchedule", req, cb)
  }

  /**
   * 该接口用于修改关键词的应用场景、标签，关键词本身不可修改，如需修改，可删除重建。
   */
  async ModifyWordSample(
    req: ModifyWordSampleRequest,
    cb?: (error: string, rep: ModifyWordSampleResponse) => void
  ): Promise<ModifyWordSampleResponse> {
    return this.request("ModifyWordSample", req, cb)
  }

  /**
   * 查询雪碧图模板，支持根据条件，分页查询。
   */
  async DescribeImageSpriteTemplates(
    req: DescribeImageSpriteTemplatesRequest,
    cb?: (error: string, rep: DescribeImageSpriteTemplatesResponse) => void
  ): Promise<DescribeImageSpriteTemplatesResponse> {
    return this.request("DescribeImageSpriteTemplates", req, cb)
  }

  /**
   * 查询用户自定义水印模板，支持根据条件，分页查询。
   */
  async DescribeWatermarkTemplates(
    req: DescribeWatermarkTemplatesRequest,
    cb?: (error: string, rep: DescribeWatermarkTemplatesResponse) => void
  ): Promise<DescribeWatermarkTemplatesResponse> {
    return this.request("DescribeWatermarkTemplates", req, cb)
  }

  /**
   * 创建用户自定义雪碧图模板，数量上限：16。
   */
  async CreateImageSpriteTemplate(
    req: CreateImageSpriteTemplateRequest,
    cb?: (error: string, rep: CreateImageSpriteTemplateResponse) => void
  ): Promise<CreateImageSpriteTemplateResponse> {
    return this.request("CreateImageSpriteTemplate", req, cb)
  }

  /**
   * 修改媒体传输流的输出配置。
   */
  async ModifyStreamLinkOutputInfo(
    req: ModifyStreamLinkOutputInfoRequest,
    cb?: (error: string, rep: ModifyStreamLinkOutputInfoResponse) => void
  ): Promise<ModifyStreamLinkOutputInfoResponse> {
    return this.request("ModifyStreamLinkOutputInfo", req, cb)
  }

  /**
   * 根据内容识别模板唯一标识，获取内容识别模板详情列表。返回结果包含符合条件的所有用户自定义内容识别模板及系统预置视频内容识别模板
   */
  async DescribeAIRecognitionTemplates(
    req: DescribeAIRecognitionTemplatesRequest,
    cb?: (error: string, rep: DescribeAIRecognitionTemplatesResponse) => void
  ): Promise<DescribeAIRecognitionTemplatesResponse> {
    return this.request("DescribeAIRecognitionTemplates", req, cb)
  }

  /**
   * 提取视频中的盲水印。
   */
  async WithdrawsWatermark(
    req: WithdrawsWatermarkRequest,
    cb?: (error: string, rep: WithdrawsWatermarkResponse) => void
  ): Promise<WithdrawsWatermarkResponse> {
    return this.request("WithdrawsWatermark", req, cb)
  }

  /**
   * 查询媒体输入流的配置信息。
   */
  async DescribeStreamLinkFlow(
    req: DescribeStreamLinkFlowRequest,
    cb?: (error: string, rep: DescribeStreamLinkFlowResponse) => void
  ): Promise<DescribeStreamLinkFlowResponse> {
    return this.request("DescribeStreamLinkFlow", req, cb)
  }

  /**
   * 删除编排
   */
  async DeleteSchedule(
    req: DeleteScheduleRequest,
    cb?: (error: string, rep: DeleteScheduleResponse) => void
  ): Promise<DeleteScheduleResponse> {
    return this.request("DeleteSchedule", req, cb)
  }

  /**
   * 修改转自适应码流模板
   */
  async ModifyAdaptiveDynamicStreamingTemplate(
    req: ModifyAdaptiveDynamicStreamingTemplateRequest,
    cb?: (error: string, rep: ModifyAdaptiveDynamicStreamingTemplateResponse) => void
  ): Promise<ModifyAdaptiveDynamicStreamingTemplateResponse> {
    return this.request("ModifyAdaptiveDynamicStreamingTemplate", req, cb)
  }

  /**
   * 删除用户自定义水印模板。
   */
  async DeleteWatermarkTemplate(
    req: DeleteWatermarkTemplateRequest,
    cb?: (error: string, rep: DeleteWatermarkTemplateResponse) => void
  ): Promise<DeleteWatermarkTemplateResponse> {
    return this.request("DeleteWatermarkTemplate", req, cb)
  }

  /**
   * 该接口用于根据素材 ID，删除素材样本。
   */
  async DeletePersonSample(
    req: DeletePersonSampleRequest,
    cb?: (error: string, rep: DeletePersonSampleResponse) => void
  ): Promise<DeletePersonSampleResponse> {
    return this.request("DeletePersonSample", req, cb)
  }

  /**
     * 从 CMQ 获取到消息后，从消息的 msgBody 字段中解析出 MPS 直播流处理事件通知的内容。
该接口不用于发起网络调用，而是用来帮助生成各个语言平台的 SDK，您可以参考 SDK 的中解析函数的实现事件通知的解析。
     */
  async ParseLiveStreamProcessNotification(
    req: ParseLiveStreamProcessNotificationRequest,
    cb?: (error: string, rep: ParseLiveStreamProcessNotificationResponse) => void
  ): Promise<ParseLiveStreamProcessNotificationResponse> {
    return this.request("ParseLiveStreamProcessNotification", req, cb)
  }

  /**
   * 启用自动化触发编排任务。
   */
  async EnableSchedule(
    req: EnableScheduleRequest,
    cb?: (error: string, rep: EnableScheduleResponse) => void
  ): Promise<EnableScheduleResponse> {
    return this.request("EnableSchedule", req, cb)
  }

  /**
     * 对直播流媒体发起处理任务，功能包括：

* 智能内容审核（画面鉴黄、敏感信息检测、声音鉴黄）；
* 智能内容识别（人脸、文本全文、文本关键词、语音全文、语音关键词、语音实时翻译）。

直播流处理事件通知实时写入用户指定的消息队列 CMQ 中，用户需要从消息队列 CMQ 中获取事件通知结果，同时处理过程中存在输出文件的，会写入用户指定的输出文件的目标存储中。
     */
  async ProcessLiveStream(
    req: ProcessLiveStreamRequest,
    cb?: (error: string, rep: ProcessLiveStreamResponse) => void
  ): Promise<ProcessLiveStreamResponse> {
    return this.request("ProcessLiveStream", req, cb)
  }

  /**
   * 删除用户自定义采样截图模板。
   */
  async DeleteSampleSnapshotTemplate(
    req: DeleteSampleSnapshotTemplateRequest,
    cb?: (error: string, rep: DeleteSampleSnapshotTemplateResponse) => void
  ): Promise<DeleteSampleSnapshotTemplateResponse> {
    return this.request("DeleteSampleSnapshotTemplate", req, cb)
  }

  /**
     * 查询媒体传输流的媒体质量数据。

     */
  async DescribeStreamLinkFlowMediaStatistics(
    req: DescribeStreamLinkFlowMediaStatisticsRequest,
    cb?: (error: string, rep: DescribeStreamLinkFlowMediaStatisticsResponse) => void
  ): Promise<DescribeStreamLinkFlowMediaStatisticsResponse> {
    return this.request("DescribeStreamLinkFlowMediaStatistics", req, cb)
  }

  /**
   * 该接口用于创建素材样本，用于通过五官定位等技术，进行内容识别、内容不适宜等视频处理。
   */
  async CreatePersonSample(
    req: CreatePersonSampleRequest,
    cb?: (error: string, rep: CreatePersonSampleResponse) => void
  ): Promise<CreatePersonSampleResponse> {
    return this.request("CreatePersonSample", req, cb)
  }

  /**
   * 禁用自动化触发编排任务。
   */
  async DisableSchedule(
    req: DisableScheduleRequest,
    cb?: (error: string, rep: DisableScheduleResponse) => void
  ): Promise<DisableScheduleResponse> {
    return this.request("DisableSchedule", req, cb)
  }

  /**
   * 修改用户自定义内容审核模板。
   */
  async ModifyContentReviewTemplate(
    req: ModifyContentReviewTemplateRequest,
    cb?: (error: string, rep: ModifyContentReviewTemplateResponse) => void
  ): Promise<ModifyContentReviewTemplateResponse> {
    return this.request("ModifyContentReviewTemplate", req, cb)
  }

  /**
   * 创建用户自定义内容识别模板，数量上限：50。
   */
  async CreateAIRecognitionTemplate(
    req: CreateAIRecognitionTemplateRequest,
    cb?: (error: string, rep: CreateAIRecognitionTemplateResponse) => void
  ): Promise<CreateAIRecognitionTemplateResponse> {
    return this.request("CreateAIRecognitionTemplate", req, cb)
  }

  /**
   * 修改用户自定义内容识别模板。
   */
  async ModifyAIRecognitionTemplate(
    req: ModifyAIRecognitionTemplateRequest,
    cb?: (error: string, rep: ModifyAIRecognitionTemplateResponse) => void
  ): Promise<ModifyAIRecognitionTemplateResponse> {
    return this.request("ModifyAIRecognitionTemplate", req, cb)
  }

  /**
   * 查询媒体传输流的日志信息。
   */
  async DescribeStreamLinkFlowLogs(
    req: DescribeStreamLinkFlowLogsRequest,
    cb?: (error: string, rep: DescribeStreamLinkFlowLogsResponse) => void
  ): Promise<DescribeStreamLinkFlowLogsResponse> {
    return this.request("DescribeStreamLinkFlowLogs", req, cb)
  }

  /**
   * 删除雪碧图模板。
   */
  async DeleteImageSpriteTemplate(
    req: DeleteImageSpriteTemplateRequest,
    cb?: (error: string, rep: DeleteImageSpriteTemplateResponse) => void
  ): Promise<DeleteImageSpriteTemplateResponse> {
    return this.request("DeleteImageSpriteTemplate", req, cb)
  }
}
