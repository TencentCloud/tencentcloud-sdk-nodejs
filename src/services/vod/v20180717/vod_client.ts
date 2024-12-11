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
  Canvas,
  ModifySampleSnapshotTemplateResponse,
  ModifyWatermarkTemplateRequest,
  DomainCLSTargetInfo,
  CreateStorageRegionRequest,
  AiRecognitionTaskAsrFullTextSegmentItem,
  DescribeFileAttributesTask,
  QualityEvaluationConfigureInfo,
  ReviewAudioVideoTaskInput,
  DescribeAllClassRequest,
  DescribeRoundPlaysRequest,
  WeChatMiniProgramPublishRequest,
  AiAnalysisTaskClassificationInput,
  SvgWatermarkInput,
  CreateTranscodeTemplateRequest,
  TransitionOpertion,
  AudioTrackItem,
  MediaAiAnalysisHighlightItem,
  DescribeAnimatedGraphicsTemplatesRequest,
  LiveRealTimeClipResponse,
  AiReviewTaskProhibitedAsrResult,
  AdaptiveDynamicStreamingTemplate,
  DeleteJustInTimeTranscodeTemplateRequest,
  DeleteAnimatedGraphicsTemplateResponse,
  AiReviewTaskProhibitedOcrResult,
  AiRecognitionTaskAsrFullTextResultOutput,
  AiReviewProhibitedOcrTaskOutput,
  MediaMiniProgramReviewElem,
  ManageTaskResponse,
  CreateImageProcessingTemplateRequest,
  ModifyDefaultStorageRegionRequest,
  ModifyEventConfigResponse,
  QualityInspectTaskOutput,
  QualityEnhanceTaskInput,
  ResetProcedureTemplateResponse,
  MediaSnapshotByTimeOffsetItem,
  RebuildMediaTargetInfo,
  ModifySampleSnapshotTemplateRequest,
  AiReviewPoliticalOcrTaskInput,
  ModifyJustInTimeTranscodeTemplateRequest,
  DescribePrepaidProductsRequest,
  MediaInputInfo,
  CreateImageSpriteTask2017,
  ClipFileInfo2017,
  TempCertificate,
  DescribeDefaultDistributionConfigRequest,
  AiReviewTaskPoliticalOcrResult,
  QualityEnhanceTask,
  AiSampleWord,
  CreateImageSpriteTemplateRequest,
  MediaSnapshotByTimePicInfoItem,
  DescribeDailyMostPlayedStatRequest,
  UserDefineFaceReviewTemplateInfo,
  RefreshUrlCacheRequest,
  ContentReviewTemplateItem,
  DeleteAIRecognitionTemplateResponse,
  DeleteContentReviewTemplateRequest,
  NoiseConfigureInfo,
  AiReviewPoliticalTaskInput,
  VerifyDomainRecordResponse,
  AudioTransform,
  TranscodeTask2017,
  DescribeCurrentPlaylistResponse,
  ModifySuperPlayerConfigRequest,
  ResetProcedureTemplateRequest,
  ContentReviewOcrResult,
  ComposeMediaResponse,
  RoundPlayInfo,
  DescribeLicenseUsageDataResponse,
  DrmStreamingsInfoForUpdate,
  ClassificationConfigureInfo,
  AbnormalLightingConfigureInfoForUpdate,
  ModifyWordSampleResponse,
  AudioTemplateInfoForUpdate,
  DescribeDailyMediaPlayStatResponse,
  ModifySubAppIdInfoRequest,
  DeletePersonSampleRequest,
  ProcedureReviewAudioVideoTaskInput,
  AiRecognitionTaskAsrWordsSegmentItem,
  TextWatermarkTemplateInput,
  UserDefineAsrTextReviewTemplateInfoForUpdate,
  QualityEvaluationConfigureInfoForUpdate,
  AiRecognitionTaskInput,
  AudioTemplateInfo,
  ExecuteFunctionResponse,
  CoverConfigureInfo,
  DescribeClientUploadAccelerationUsageDataResponse,
  ModifyRebuildMediaTemplateRequest,
  ComposeMediaRequest,
  DescribeCLSTopicsRequest,
  AIRecognitionTemplateItem,
  AiReviewPornAsrTaskInput,
  AiRecognitionTaskFaceResult,
  AiRecognitionTaskHeadTailResultInput,
  CreateAdaptiveDynamicStreamingTemplateRequest,
  PushUrlCacheResponse,
  MediaProcessTaskSampleSnapshotResult,
  DescribeDailyMediaPlayStatRequest,
  TerrorismImgReviewTemplateInfoForUpdate,
  FaceConfigureInfoForUpdate,
  ModifyTranscodeTemplateRequest,
  EditMediaTaskInput,
  DescribeImageSpriteTemplatesRequest,
  DeleteImageProcessingTemplateRequest,
  DescribeDailyPlayStatFileListResponse,
  CLSTopicInfo,
  AbnormalLightingConfigureInfo,
  TextWatermarkTemplateInputForUpdate,
  DeleteSuperPlayerConfigRequest,
  AiReviewTerrorismOcrTaskInput,
  AiRecognitionTaskOcrWordsResultInput,
  ModifyMediaStorageClassResponse,
  AiReviewPornTaskInput,
  JitterConfigureInfoForUpdate,
  UserDefineAsrTextReviewTemplateInfo,
  CreateProcedureTemplateRequest,
  MediaProcessTaskAnimatedGraphicResult,
  DescribeMediaProcessUsageDataRequest,
  CreatePersonSampleRequest,
  RemoveWatermarkTask,
  ReviewAudioVideoRequest,
  StorageRegionInfo,
  MediaTransitionItem,
  MediaAiAnalysisCoverItem,
  ComplexAdaptiveDynamicStreamingTaskSubtitleInput,
  TagConfigureInfo,
  SharpEnhanceInfo,
  ModifySuperPlayerConfigResponse,
  DescribeWordSamplesResponse,
  RefreshUrlCacheResponse,
  ConcatTask2017,
  DeleteAIRecognitionTemplateRequest,
  FileUploadTask,
  DescribeCDNStatDetailsResponse,
  AttachMediaSubtitlesRequest,
  AiAnalysisTaskCoverResult,
  DescribeEventConfigRequest,
  MediaContentReviewOcrTextSegmentItem,
  AiAnalysisTaskClassificationOutput,
  FileDeleteTask,
  ResourceTag,
  AiRecognitionTaskOcrFullTextResultOutput,
  AiAnalysisTaskHighlightResult,
  SetVodDomainCertificateRequest,
  CreateRebuildMediaTemplateResponse,
  AiRecognitionTaskOcrWordsResultOutput,
  AiSampleFaceInfo,
  MediaImageSpriteItem,
  QualityInspectTask,
  DescribeEnhanceMediaTemplatesResponse,
  ImageBlur,
  ModifyVodDomainAccelerateConfigRequest,
  PoliticalConfigureInfoForUpdate,
  MediaProcessTaskAdaptiveDynamicStreamingResult,
  OcrWordsConfigureInfoForUpdate,
  FileReviewInfo,
  WatermarkTemplate,
  CoverBySnapshotTaskOutput,
  ModifyQualityInspectTemplateResponse,
  DescribeProcedureTemplatesRequest,
  VideoConfigureInfoForUpdate,
  ModifyAdaptiveDynamicStreamingTemplateRequest,
  ForbidMediaDistributionRequest,
  DescribeAIRecognitionTemplatesResponse,
  EditMediaResponse,
  PoliticalOcrReviewTemplateInfoForUpdate,
  TaskOutputMediaInfo,
  ProcessMediaByUrlRequest,
  DescribeDailyMostPlayedStatResponse,
  ModifyAIRecognitionTemplateResponse,
  SplitMediaTaskConfig,
  PlayStatFileInfo,
  ModifyMediaInfoRequest,
  TraceWatermarkInput,
  PornAsrReviewTemplateInfoForUpdate,
  ReviewAudioVideoSegmentItem,
  MediaAnimatedGraphicsInfo,
  DescribeSnapshotByTimeOffsetTemplatesRequest,
  ModifyHeadTailTemplateResponse,
  ProductInstance,
  RepairInfo,
  CdnLogInfo,
  ReduceMediaBitrateTranscodeResult,
  SimpleAesEdkPair,
  MediaSubtitleInfo,
  AiRecognitionTaskAsrFullTextResultInput,
  MediaMiniProgramReviewInfoItem,
  TaskStatData,
  CreateVodDomainRequest,
  OcrFullTextConfigureInfoForUpdate,
  DeleteRoundPlayRequest,
  SuperResolutionInfo,
  MediaImageSpriteInfo,
  EnhanceMediaQualityRequest,
  ProductInstanceRecource,
  PersistenceCompleteTask,
  AiRecognitionTaskFaceSegmentItem,
  ProcessMediaResponse,
  CreateWordSamplesResponse,
  ClassificationConfigureInfoForUpdate,
  DeleteAdaptiveDynamicStreamingTemplateResponse,
  CreateWordSamplesRequest,
  BlurConfigureInfo,
  PoliticalAsrReviewTemplateInfoForUpdate,
  WechatMiniProgramPublishTaskInput,
  SetCLSPushTargetRequest,
  AiSampleFaceOperation,
  SvgWatermarkInputForUpdate,
  AiReviewTaskTerrorismOcrResult,
  WatermarkConfigureInfoForUpdate,
  AiRecognitionTaskOcrWordsResult,
  PornAsrReviewTemplateInfo,
  AiRecognitionTaskSegmentResult,
  JitterConfigureInfo,
  MediaSubtitleItem,
  ReviewAudioVideoTaskOutput,
  ProhibitedAsrReviewTemplateInfoForUpdate,
  ModifyAnimatedGraphicsTemplateResponse,
  AiRecognitionTaskAsrTranslateSegmentItem,
  DeleteCLSTopicResponse,
  LiveRealTimeClipRequest,
  DeleteAdaptiveDynamicStreamingTemplateRequest,
  AiRecognitionTaskOcrFullTextSegmentItem,
  ColorEnhanceInfo,
  DeleteEnhanceMediaTemplateResponse,
  EditMediaOutputConfig,
  SplitMediaTaskSegmentInfo,
  AiReviewPornAsrTaskOutput,
  AiRecognitionTaskAsrFullTextResultOutputSubtitleItem,
  SimpleHlsClipResponse,
  DeleteAIAnalysisTemplateRequest,
  VideoFrameInterpolationInfo,
  EditMediaRequest,
  CreateComplexAdaptiveDynamicStreamingTaskRequest,
  AiRecognitionTaskAsrTranslateResult,
  DescribeFileAttributesResponse,
  LicenseUsageDataItem,
  RebuildMediaTargetAudioStream,
  ConcatFileInfo2017,
  ContentReviewResult,
  MediaProcessTaskImageSpriteResult,
  DescribeJustInTimeTranscodeTemplatesResponse,
  CrashScreenConfigureInfo,
  CreateReviewTemplateRequest,
  DescribeMediaInfosResponse,
  DeleteProcedureTemplateResponse,
  DescribeReviewTemplatesResponse,
  DescribeAdaptiveDynamicStreamingTemplatesResponse,
  MediaMiniProgramReviewInfo,
  ForbidMediaDistributionResponse,
  TimeRange,
  DescribeAdaptiveDynamicStreamingTemplatesRequest,
  ModifyRoundPlayRequest,
  ImageWatermarkInput,
  ObjectConfigureInfo,
  AsrFullTextConfigureInfoForUpdate,
  DeleteHeadTailTemplateResponse,
  RebuildAudioInfo,
  RemoveWatermarkResponse,
  RebuildMediaTemplate,
  CreatePersonSampleResponse,
  CreateContentReviewTemplateResponse,
  ModifyAnimatedGraphicsTemplateRequest,
  DescribeAIAnalysisTemplatesRequest,
  CreateHeadTailTemplateRequest,
  MediaSampleSnapshotItem,
  TagConfigureInfoForUpdate,
  DeleteWordSamplesRequest,
  FastEditMediaResponse,
  EmptyTrackItem,
  StickerTrackItem,
  DescribeDrmDataKeyResponse,
  ProcessMediaRequest,
  DescribeMediaPlayStatDetailsResponse,
  VideoTemplateInfo,
  PoliticalOcrReviewTemplateInfo,
  PornOcrReviewTemplateInfoForUpdate,
  AiReviewTaskPornOcrResult,
  ModifyContentReviewTemplateResponse,
  DescribeWatermarkTemplatesRequest,
  ArtifactRepairInfo,
  CoverBySnapshotTaskInput,
  SegmentConfigureInfoForUpdate,
  RebuildMediaTaskInput,
  UserDefineConfigureInfo,
  NoiseConfigureInfoForUpdate,
  LiveRecordInfo,
  AiRecognitionTaskSegmentSegmentItem,
  RestoreMediaTask,
  AiReviewPornOcrTaskInput,
  OcrWordsConfigureInfo,
  CreateSuperPlayerConfigResponse,
  AiAnalysisTaskFrameTagOutput,
  CreateEnhanceMediaTemplateResponse,
  DeleteReviewTemplateResponse,
  DNSVerifyInfo,
  MediaAnimatedGraphicsItem,
  AiRecognitionTaskAsrTranslateResultInput,
  WebPageRecordInfo,
  DescribeCDNUsageDataResponse,
  ModifyWordSampleRequest,
  EditMediaTask,
  CreateJustInTimeTranscodeTemplateResponse,
  WatermarkConfigureData,
  DeleteMediaResponse,
  ModifySnapshotByTimeOffsetTemplateResponse,
  DeleteHeadTailTemplateRequest,
  AiAnalysisTaskTagResult,
  SearchMediaResponse,
  ModifyAIAnalysisTemplateResponse,
  RemoveWaterMarkTaskOutput,
  ModifyMediaStorageClassRequest,
  AiAnalysisTaskTagOutput,
  MosaicConfigureInfo,
  AiAnalysisTaskHighlightOutput,
  DescribeRebuildMediaTemplatesRequest,
  ReviewImageSegmentItem,
  CreateCLSTopicResponse,
  CreateRoundPlayResponse,
  MediaSubtitleInput,
  FileVerifyInfo,
  FaceEnhanceInfo,
  PornImageResult,
  ProcessImageResponse,
  ProcessImageRequest,
  ComplexAdaptiveDynamicStreamingTask,
  ModifyMediaInfoResponse,
  ModifyReviewTemplateRequest,
  AiRecognitionTaskOcrFullTextResult,
  DescribeCLSTopicsResponse,
  MediaTrackItem,
  RestoreMediaResponse,
  MediaProcessTaskSnapshotByTimeOffsetResult,
  ModifyEnhanceMediaTemplateResponse,
  EnhanceMediaByTemplateResponse,
  CreateJustInTimeTranscodeTemplateRequest,
  ComplexAdaptiveDynamicStreamingTaskAudioInput,
  ManageTaskRequest,
  RoundPlayListItemInfo,
  ModifyEventConfigRequest,
  AiRecognitionTaskAsrWordsResultOutput,
  DescribeHeadTailTemplatesRequest,
  ModifyAdaptiveDynamicStreamingTemplateResponse,
  MediaProcessTaskTranscodeResult,
  BlurConfigureInfoForUpdate,
  EditMediaVideoStream,
  ExtractTraceWatermarkTask,
  AiRecognitionTaskSegmentResultOutput,
  ImageSpriteTaskInput,
  ObjectConfigureInfoForUpdate,
  DeleteMediaRequest,
  DescribeReviewTemplatesRequest,
  CreateSuperPlayerConfigRequest,
  ImageWatermarkTemplate,
  ModifySubAppIdInfoResponse,
  AsrWordsConfigureInfo,
  AreaCLSTargetInfo,
  DeleteRebuildMediaTemplateResponse,
  DescribeSubAppIdsResponse,
  SimpleHlsClipRequest,
  MediaDeleteItem,
  PoliticalImageResult,
  AiSamplePerson,
  MediaAdaptiveDynamicStreamingInfo,
  DescribeDailyPlayStatFileListRequest,
  DescribeSuperPlayerConfigsResponse,
  AsrWordsConfigureInfoForUpdate,
  DescribeStorageDataRequest,
  LiveRealTimeClipMediaSegmentInfo,
  DeleteImageSpriteTemplateResponse,
  LowLightEnhanceInfo,
  DescribeContentReviewTemplatesResponse,
  TEHDConfig,
  ImageReviewUsageDataItem,
  AnimatedGraphicsTemplate,
  ExtractCopyRightWatermarkRequest,
  DescribeEnhanceMediaTemplatesRequest,
  DailyPlayStatInfo,
  TerrorismOcrReviewTemplateInfoForUpdate,
  DescribeEventsStateResponse,
  CopyRightWatermarkInput,
  AiRecognitionTaskHeadTailResultOutput,
  ModifyImageSpriteTemplateResponse,
  SetVodDomainCertificateResponse,
  ExtractTraceWatermarkTaskOutput,
  MediaProcessTaskCoverBySnapshotResult,
  CreateWatermarkTemplateRequest,
  ComplexAdaptiveDynamicStreamingTaskInput,
  SortBy,
  TerrorismConfigureInfoForUpdate,
  DescribeEventsStateRequest,
  WechatMiniProgramPublishTask,
  DescribeDrmKeyProviderInfoRequest,
  ModifyDefaultStorageRegionResponse,
  CreateImageProcessingTemplateResponse,
  ComposeMediaTask,
  HeadTailConfigureInfoForUpdate,
  ImageScale,
  ModifyJustInTimeTranscodeTemplateResponse,
  ImageContentReviewInput,
  TranscodePlayInfo2017,
  SplitMediaTask,
  ComposeMediaTaskInput,
  ModifyQualityInspectTemplateRequest,
  AnimatedGraphicTaskInput,
  MosaicInput,
  AIAnalysisTemplateItem,
  AiRecognitionTaskObjectResultItem,
  UrlSignatureAuthPolicy,
  ModifyVodDomainConfigResponse,
  MediaSnapshotByTimeOffsetInfo,
  VideoConfigureInfo,
  DeleteAIAnalysisTemplateResponse,
  ModifyRebuildMediaTemplateResponse,
  CreateEnhanceMediaTemplateRequest,
  MediaKeyFrameDescItem,
  AsrTranslateConfigureInfoForUpdate,
  RebuildMediaByTemplateRequest,
  ModifyVodDomainConfigRequest,
  AiSampleTagOperation,
  ComplexAdaptiveDynamicStreamingTaskOutput,
  PlayerConfig,
  ComplexAdaptiveDynamicStreamingTaskResult,
  ConfirmEventsRequest,
  CreateAIRecognitionTemplateResponse,
  ModifySubAppIdStatusRequest,
  CreateSubAppIdResponse,
  DeleteTranscodeTemplateRequest,
  AiReviewTerrorismTaskOutput,
  ModifyReviewTemplateResponse,
  DescribeImageProcessingTemplatesRequest,
  QualityInspectTaskInput,
  ProhibitedConfigureInfo,
  DrmStreamingsInfo,
  SplitMediaRequest,
  AiReviewTerrorismOcrTaskOutput,
  AiAnalysisResult,
  ReduceMediaBitrateAdaptiveDynamicStreamingResult,
  AttachMediaSubtitlesResponse,
  CreateDomainVerifyRecordResponse,
  ExtractCopyRightWatermarkResponse,
  MediaTranscodeInfo,
  ResolutionNameInfo,
  VerifyDomainRecordRequest,
  AiRecognitionTaskOcrWordsResultItem,
  ParseStreamingManifestRequest,
  ReviewImageResult,
  DeleteSampleSnapshotTemplateResponse,
  AiAnalysisTaskTagInput,
  HeadTailTemplate,
  DescribeStorageDetailsResponse,
  PullEventsResponse,
  AiRecognitionTaskObjectResultInput,
  DescribeCdnLogsRequest,
  MediaProcessTaskInput,
  OutputVideoStream,
  ModifyDefaultDistributionConfigRequest,
  ProcedureTemplate,
  DomainDetailInfo,
  AiReviewTaskTerrorismResult,
  ProcessMediaByUrlResponse,
  DescribeImageReviewUsageDataRequest,
  MediaContentReviewAsrTextSegmentItem,
  DescribeEventConfigResponse,
  DescribeCdnLogsResponse,
  MediaContentReviewPoliticalSegmentItem,
  DeletePersonSampleResponse,
  CreateSnapshotByTimeOffsetTemplateResponse,
  VoiceConfigureInfoForUpdate,
  ModifyContentReviewTemplateRequest,
  ImageSpriteTemplate,
  DeleteReviewTemplateRequest,
  AiAnalysisTaskCoverOutput,
  AiContentReviewTaskInput,
  CreateAdaptiveDynamicStreamingTemplateResponse,
  DeleteSampleSnapshotTemplateRequest,
  DescribeTranscodeTemplatesResponse,
  MediaAiAnalysisTagItem,
  DescribeStorageDataResponse,
  AiRecognitionTaskOcrFullTextSegmentTextItem,
  ImageProcessingTemplate,
  SegmentConfigureInfo,
  ScratchRepairInfo,
  FileDeleteResultItem,
  SnapshotByTimeOffsetTaskInput,
  RefererAuthPolicy,
  TaskStatDataItem,
  AiRecognitionTaskObjectSegmentItem,
  CreateCLSTopicRequest,
  AiReviewPornOcrTaskOutput,
  ApplyUploadRequest,
  CreateSampleSnapshotTemplateResponse,
  AiAnalysisTaskHighlightInput,
  DeleteContentReviewTemplateResponse,
  MediaBasicInfo,
  AiReviewPoliticalAsrTaskInput,
  PullUploadRequest,
  CreateQualityInspectTemplateRequest,
  ProcessMediaByProcedureRequest,
  RebuildMediaTargetVideoStream,
  VoiceConfigureInfo,
  SetCLSPushTargetResponse,
  ClipTask2017,
  TranscodeTemplate,
  DescribeCDNUsageDataRequest,
  JustInTimeTranscodeTemplate,
  PornOcrReviewTemplateInfo,
  AiReviewTaskPoliticalAsrResult,
  DescribeFileAttributesTaskOutput,
  TrtcRecordInfo,
  DescribeReviewDetailsRequest,
  PornConfigureInfoForUpdate,
  AiReviewProhibitedAsrTaskInput,
  DeleteCLSTopicRequest,
  ParseStreamingManifestResponse,
  TerrorismOcrReviewTemplateInfo,
  CreateRoundPlayRequest,
  AiReviewTaskPornResult,
  AiRecognitionTaskObjectResultOutput,
  DescribeMediaPlayStatDetailsRequest,
  AiReviewProhibitedAsrTaskOutput,
  CreateClassResponse,
  DeleteSuperPlayerConfigResponse,
  CrashScreenConfigureInfoForUpdate,
  DescribeSampleSnapshotTemplatesRequest,
  CoverConfigureInfoForUpdate,
  AiAnalysisTaskClassificationResult,
  PoliticalImgReviewTemplateInfoForUpdate,
  UserDefineOcrTextReviewTemplateInfo,
  DescribeVodDomainsResponse,
  AdaptiveStreamTemplate,
  TranscodeTaskInput,
  DescribeClientUploadAccelerationUsageDataRequest,
  ModifyAIRecognitionTemplateRequest,
  QRCodeConfigureInfo,
  DescribeStorageRegionsRequest,
  WechatPublishTask,
  DescribeCDNStatDetailsRequest,
  HeadTailTaskInput,
  DescribeImageReviewUsageDataResponse,
  DeleteRoundPlayResponse,
  StatDataItem,
  CreateStorageRegionResponse,
  AccelerateAreaInfo,
  MediaSourceData,
  DescribePrepaidProductsResponse,
  ProhibitedAsrReviewTemplateInfo,
  HandleCurrentPlaylistResponse,
  PushUrlCacheRequest,
  CreateAIAnalysisTemplateResponse,
  HeadTailConfigureInfo,
  EventContent,
  HighlightsConfigureInfoForUpdate,
  IPFilterPolicy,
  UserDefineConfigureInfoForUpdate,
  ExtractTraceWatermarkTaskInput,
  AiReviewPoliticalAsrTaskOutput,
  OutputAudioStream,
  ModifyClassRequest,
  QRCodeConfigureInfoForUpdate,
  SpecificationDataItem,
  TEHDConfigForUpdate,
  ComposeMediaTaskOutput,
  DescribeQualityInspectTemplatesRequest,
  DescribeMediaInfosRequest,
  ModifyPersonSampleRequest,
  DescribeDrmDataKeyRequest,
  AsrFullTextConfigureInfo,
  TerrorismImageResult,
  DeleteVodDomainRequest,
  DescribeDrmKeyProviderInfoResponse,
  ExtractTraceWatermarkResponse,
  CreateAIRecognitionTemplateRequest,
  DescribeTaskDetailRequest,
  MediaAiAnalysisClassificationItem,
  AiAnalysisTaskFrameTagResult,
  AiReviewPornTaskOutput,
  SDMCDrmKeyProviderInfo,
  AiRecognitionTaskAsrFullTextResult,
  DeleteQualityInspectTemplateResponse,
  PlayStatInfo,
  AiRecognitionTaskAsrTranslateResultOutput,
  PoliticalImgReviewTemplateInfo,
  PoliticalConfigureInfo,
  HighlightsConfigureInfo,
  CreateHeadTailTemplateResponse,
  AiRecognitionTaskOcrWordsSegmentItem,
  MediaProcessTaskResult,
  DeleteWordSamplesResponse,
  MediaCastEvent,
  DescribeDefaultDistributionConfigResponse,
  DeleteProcedureTemplateRequest,
  WatermarkInput,
  AiSampleWordInfo,
  AdaptiveDynamicStreamingInfoItem,
  LiveRealTimeClipStreamInfo,
  ProhibitedOcrReviewTemplateInfo,
  DeleteClassResponse,
  ModifyTranscodeTemplateResponse,
  MediaMetaData,
  MediaSampleSnapshotInfo,
  InspectMediaQualityResponse,
  DeleteRebuildMediaTemplateRequest,
  CreateDomainVerifyRecordRequest,
  MediaInfo,
  VideoTemplateInfoForUpdate,
  CreateContentReviewTemplateRequest,
  DescribeContentReviewTemplatesRequest,
  CreateComplexAdaptiveDynamicStreamingTaskResponse,
  AdaptiveDynamicStreamingTaskInput,
  DescribeImageSpriteTemplatesResponse,
  DescribeCLSLogsetsRequest,
  InspectMediaQualityRequest,
  TransitionOperation,
  WatermarkConfigureInfo,
  AiAnalysisTaskFrameTagInput,
  MediaAiAnalysisFrameTagSegmentItem,
  AiRecognitionTaskAsrWordsResultItem,
  CreateQualityInspectTemplateResponse,
  RebuildMediaTaskOutput,
  EnhanceMediaQualityOutputConfig,
  RebuildMediaRequest,
  DescribeTaskDetailResponse,
  MediaKeyFrameDescInfo,
  DeleteImageSpriteTemplateRequest,
  ModifyDefaultDistributionConfigResponse,
  CreateClassRequest,
  AiSampleFailFaceInfo,
  UserDefineFaceReviewTemplateInfoForUpdate,
  ModifyRoundPlayResponse,
  CreateProcedureTemplateResponse,
  DescribeCLSLogsetsResponse,
  ModifyEnhanceMediaTemplateRequest,
  RebuildMediaResponse,
  DomainHTTPSConfig,
  DescribeMediaProcessUsageDataResponse,
  DescribeSuperPlayerConfigsRequest,
  ReduceMediaBitrateMediaProcessTaskResult,
  AiRecognitionTaskOcrFullTextResultInput,
  SplitMediaOutputConfig,
  CreateVodDomainResponse,
  ModifyVodDomainAccelerateConfigResponse,
  AiRecognitionTaskSegmentResultInput,
  ModifyHeadTailTemplateRequest,
  DescribeTasksResponse,
  DescribeSubAppIdsRequest,
  AiRecognitionTaskFaceResultInput,
  RebuildMediaOutputConfig,
  AiReviewPoliticalTaskOutput,
  AiReviewTaskPoliticalResult,
  ModifySubAppIdStatusResponse,
  ReviewImageResponse,
  DescribeStorageRegionsResponse,
  ModifySnapshotByTimeOffsetTemplateRequest,
  ProcedureTask,
  CreateCLSLogsetRequest,
  ExtractTraceWatermarkRequest,
  TaskSimpleInfo,
  ReviewAudioVideoTask,
  DescribeSnapshotByTimeOffsetTemplatesResponse,
  DomainQUICConfig,
  SetDrmKeyProviderInfoRequest,
  SnapshotByTimeOffsetTemplate,
  DeleteSnapshotByTimeOffsetTemplateResponse,
  ProhibitedOcrReviewTemplateInfoForUpdate,
  DescribeCLSPushTargetsRequest,
  DescribeTasksRequest,
  DescribeReviewDetailsResponse,
  CreateTranscodeTemplateResponse,
  AudioDenoiseInfo,
  AiRecognitionTaskAsrWordsResultInput,
  SnapshotByTimeOffset2017,
  CreateAIAnalysisTemplateRequest,
  AiReviewTerrorismTaskInput,
  ComplexAdaptiveDynamicStreamingTaskStreamPara,
  RebuildMediaByTemplateResponse,
  MediaAudioStreamItem,
  EnhanceMediaByTemplateRequest,
  SubAppIdInfo,
  DescribeAllClassResponse,
  ModifyImageSpriteTemplateRequest,
  AiReviewProhibitedOcrTaskInput,
  DeleteWatermarkTemplateRequest,
  DeleteVodDomainResponse,
  EditMediaStreamInfo,
  DescribeWordSamplesRequest,
  ImageCenterCut,
  ModifyAIAnalysisTemplateRequest,
  CommitUploadResponse,
  ExtractCopyRightWatermarkTaskInput,
  AsrTranslateConfigureInfo,
  DescribeSampleSnapshotTemplatesResponse,
  MediaContentReviewSegmentItem,
  AiContentReviewResult,
  ReduceMediaBitrateTask,
  TerrorismImgReviewTemplateInfo,
  ApplyUploadResponse,
  ReviewAudioVideoResponse,
  DeleteClassRequest,
  DescribeTranscodeTemplatesRequest,
  QualityEnhanceTaskOutput,
  ReviewTemplate,
  DescribeCurrentPlaylistRequest,
  FastEditMediaRequest,
  MediaVideoStreamItem,
  CreateRebuildMediaTemplateRequest,
  ImageOperation,
  MediaSubStreamInfoItem,
  MosaicConfigureInfoForUpdate,
  DescribeWatermarkTemplatesResponse,
  WeChatMiniProgramPublishResponse,
  DescribeRoundPlaysResponse,
  ImageTransform,
  CreateAnimatedGraphicsTemplateRequest,
  FrameTagConfigureInfo,
  RemoveWatermarkRequest,
  ExecuteFunctionRequest,
  RebuildMediaTask,
  ConfirmEventsResponse,
  ModifyPersonSampleResponse,
  VideoTrackItem,
  VideoDenoiseInfo,
  DescribeLicenseUsageDataRequest,
  DeleteTranscodeTemplateResponse,
  MediaTranscodeItem,
  CLSLogsetInfo,
  DescribePersonSamplesResponse,
  ExtractCopyRightWatermarkTaskOutput,
  SplitMediaTaskInput,
  DescribeVodDomainsRequest,
  PornConfigureInfo,
  AiRecognitionTaskObjectSeqmentItem,
  SplitMediaResponse,
  RestoreMediaRequest,
  PullEventsRequest,
  AiRecognitionTaskObjectResult,
  DescribeAIAnalysisTemplatesResponse,
  CreateSnapshotByTimeOffsetTemplateRequest,
  DescribeQualityInspectTemplatesResponse,
  AiRecognitionTaskAsrWordsResult,
  CreateSubAppIdRequest,
  DescribeProcedureTemplatesResponse,
  SearchMediaRequest,
  DynamicRangeInfo,
  CreateSampleSnapshotTemplateRequest,
  DescribeRebuildMediaTemplatesResponse,
  AudioVolumeParam,
  AiReviewTaskPornAsrResult,
  ProductInstanceResource,
  ModifyClassResponse,
  BlackWhiteEdgeConfigureInfoForUpdate,
  EditMediaFileInfo,
  BlackWhiteEdgeConfigureInfo,
  ImageWatermarkInputForUpdate,
  ProcessMediaByProcedureResponse,
  PullUploadResponse,
  RemoveWaterMarkTaskInput,
  FaceConfigureInfo,
  AiRecognitionTaskFaceResultOutput,
  DeleteImageProcessingTemplateResponse,
  PornImgReviewTemplateInfoForUpdate,
  CreateWatermarkTemplateResponse,
  PornImgReviewTemplateInfo,
  QualityInspectTemplateItem,
  AiReviewPoliticalOcrTaskOutput,
  OcrFullTextConfigureInfo,
  CommitUploadRequest,
  WatermarkCycleConfigForUpdate,
  SnapshotByTimeOffsetTask2017,
  ReviewInfo,
  MediaClassInfo,
  AiAnalysisTaskInput,
  DeleteAnimatedGraphicsTemplateRequest,
  DeleteSnapshotByTimeOffsetTemplateRequest,
  DescribeAnimatedGraphicsTemplatesResponse,
  ExtractCopyRightWatermarkTask,
  MediaAiAnalysisFrameTagItem,
  QualityInspectItem,
  DescribeCLSPushTargetsResponse,
  PullUploadTask,
  DescribeImageProcessingTemplatesResponse,
  UserDefineOcrTextReviewTemplateInfoForUpdate,
  SampleSnapshotTaskInput,
  ReviewImageRequest,
  RebuildVideoInfo,
  DescribeHeadTailTemplatesResponse,
  HandleCurrentPlaylistRequest,
  TerrorismConfigureInfo,
  CreateCLSLogsetResponse,
  PoliticalAsrReviewTemplateInfo,
  CreateAnimatedGraphicsTemplateResponse,
  SampleSnapshotTemplate,
  AiRecognitionTaskHeadTailResult,
  DescribePersonSamplesRequest,
  AiRecognitionTaskFaceResultItem,
  AiAnalysisTaskCoverInput,
  DeleteEnhanceMediaTemplateRequest,
  SetDrmKeyProviderInfoResponse,
  DescribeStorageDetailsRequest,
  EnhanceMediaQualityResponse,
  SubtitleFormatsOperation,
  MediaTrack,
  FastEditMediaFileInfo,
  StorageStatData,
  RoundPlayFilePlayInfo,
  DescribeFileAttributesRequest,
  QualityInspectResultItem,
  MediaOutputInfo,
  EditMediaTaskOutput,
  HighlightSegmentItem,
  CreateReviewTemplateResponse,
  DeleteWatermarkTemplateResponse,
  DeleteQualityInspectTemplateRequest,
  ComposeMediaOutput,
  DeleteJustInTimeTranscodeTemplateResponse,
  ModifyWatermarkTemplateResponse,
  DescribeJustInTimeTranscodeTemplatesRequest,
  ProhibitedConfigureInfoForUpdate,
  FrameTagConfigureInfoForUpdate,
  CreateImageSpriteTemplateResponse,
  DescribeAIRecognitionTemplatesRequest,
  HDRInfo,
  EditMediaTEHDConfig,
  AiRecognitionResult,
} from "./vod_models"

/**
 * vod client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("vod.tencentcloudapi.com", "2018-07-17", clientConfig)
  }

  /**
   * 创建一个用户自定义的图片处理模板，数量上限：16。最多支持十次操作，例如：裁剪-缩略-裁剪-模糊-缩略-裁剪-缩略-裁剪-模糊-缩略。
   */
  async CreateImageProcessingTemplate(
    req: CreateImageProcessingTemplateRequest,
    cb?: (error: string, rep: CreateImageProcessingTemplateResponse) => void
  ): Promise<CreateImageProcessingTemplateResponse> {
    return this.request("CreateImageProcessingTemplate", req, cb)
  }

  /**
   * 查询 VOD 创建的 CLS 日志集。
   */
  async DescribeCLSLogsets(
    req: DescribeCLSLogsetsRequest,
    cb?: (error: string, rep: DescribeCLSLogsetsResponse) => void
  ): Promise<DescribeCLSLogsetsResponse> {
    return this.request("DescribeCLSLogsets", req, cb)
  }

  /**
     * 该接口用于创建轮播播单，数量上限：100。
轮播播单的每个文件可以指定源文件，也可以指定某个转码文件。
指定的文件必须是hls格式，所有的播单文件最好保持相同的码率和分辨率。
     */
  async CreateRoundPlay(
    req: CreateRoundPlayRequest,
    cb?: (error: string, rep: CreateRoundPlayResponse) => void
  ): Promise<CreateRoundPlayResponse> {
    return this.request("CreateRoundPlay", req, cb)
  }

  /**
   * 该接口用于设置默认的存储地域。上传文件时如果没有指定地域，将上传到默认地域。
   */
  async ModifyDefaultStorageRegion(
    req: ModifyDefaultStorageRegionRequest,
    cb?: (error: string, rep: ModifyDefaultStorageRegionResponse) => void
  ): Promise<ModifyDefaultStorageRegionResponse> {
    return this.request("ModifyDefaultStorageRegion", req, cb)
  }

  /**
   * 该 API 已经<font color='red'>不再维护</font>。如果有盗录溯源需求，请参考 [幽灵水印](https://cloud.tencent.com/document/product/266/94228)。
   */
  async ExtractTraceWatermark(
    req: ExtractTraceWatermarkRequest,
    cb?: (error: string, rep: ExtractTraceWatermarkResponse) => void
  ): Promise<ExtractTraceWatermarkResponse> {
    return this.request("ExtractTraceWatermark", req, cb)
  }

  /**
     * 用于异步获取文件属性。
- 当前仅支持获取源文件的 Md5、Sha1。
- 对输入文件为 HLS 或 DASH 的情况，仅获取索引文件的属性。
     */
  async DescribeFileAttributes(
    req: DescribeFileAttributesRequest,
    cb?: (error: string, rep: DescribeFileAttributesResponse) => void
  ): Promise<DescribeFileAttributesResponse> {
    return this.request("DescribeFileAttributes", req, cb)
  }

  /**
     * 对视频进行编辑（剪辑、拼接等），生成一个新的点播视频。编辑的功能包括：

1. 对点播中的一个文件进行剪辑，生成一个新的视频；
2. 对点播中的多个文件进行拼接，生成一个新的视频；
3. 对点播中的多个文件进行剪辑，然后再拼接，生成一个新的视频；
4. 对点播中的一个流，直接生成一个新的视频；
5. 对点播中的一个流进行剪辑，生成一个新的视频；
6. 对点播中的多个流进行拼接，生成一个新的视频；
7. 对点播中的多个流进行剪辑，然后拼接，生成一个新的视频。

对于生成的新视频，还可以指定生成后的视频是否要执行任务流。

>当对直播流做剪辑、拼接等操作时，请确保流结束后再操作。否则生成的视频可能不完整。

如使用事件通知，事件通知的类型为 [视频编辑完成](https://cloud.tencent.com/document/product/266/33794)。
     */
  async EditMedia(
    req: EditMediaRequest,
    cb?: (error: string, rep: EditMediaResponse) => void
  ): Promise<EditMediaResponse> {
    return this.request("EditMedia", req, cb)
  }

  /**
     * 修改即时转码模板。
- 注意：即时转码模板创建后，不推荐修改，如需修改参数，推荐使用新增模板。
     */
  async ModifyJustInTimeTranscodeTemplate(
    req: ModifyJustInTimeTranscodeTemplateRequest,
    cb?: (error: string, rep: ModifyJustInTimeTranscodeTemplateResponse) => void
  ): Promise<ModifyJustInTimeTranscodeTemplateResponse> {
    return this.request("ModifyJustInTimeTranscodeTemplate", req, cb)
  }

  /**
   * 该接口用于查询点播域名信息列表。
   */
  async DescribeVodDomains(
    req: DescribeVodDomainsRequest,
    cb?: (error: string, rep: DescribeVodDomainsResponse) => void
  ): Promise<DescribeVodDomainsResponse> {
    return this.request("DescribeVodDomains", req, cb)
  }

  /**
   * * 我们强烈建议您使用云点播提供的 [服务端上传 SDK](/document/product/266/9759#1.-.E5.8F.91.E8.B5.B7.E4.B8.8A.E4.BC.A0) 来上传文件。直接调用 API 进行上传的难度和工作量都显著大于使用 SDK。
   * 该接口用于申请媒体文件（和封面文件）的上传，获取文件上传到云点播的元信息（包括上传路径、上传签名等），用于后续上传接口。
   * 上传流程请参考 [服务端上传综述](/document/product/266/9759)。
   */
  async ApplyUpload(
    req: ApplyUploadRequest,
    cb?: (error: string, rep: ApplyUploadResponse) => void
  ): Promise<ApplyUploadResponse> {
    return this.request("ApplyUpload", req, cb)
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
   * 根据音视频内容分析模板唯一标识，获取音视频内容分析模板详情列表。返回结果包含符合条件的所有用户自定义音视频内容分析模板及[系统预置音视频内容分析模板](https://cloud.tencent.com/document/product/266/33476#.E9.A2.84.E7.BD.AE.E8.A7.86.E9.A2.91.E5.86.85.E5.AE.B9.E5.88.86.E6.9E.90.E6.A8.A1.E6.9D.BF)。
   */
  async DescribeAIAnalysisTemplates(
    req: DescribeAIAnalysisTemplatesRequest,
    cb?: (error: string, rep: DescribeAIAnalysisTemplatesResponse) => void
  ): Promise<DescribeAIAnalysisTemplatesResponse> {
    return this.request("DescribeAIAnalysisTemplates", req, cb)
  }

  /**
   * * 该接口用于业务服务器以 [可靠回调](https://cloud.tencent.com/document/product/266/33779#.E5.8F.AF.E9.9D.A0.E5.9B.9E.E8.B0.83) 的方式获取事件通知；
   * 接口为长轮询模式，即：如果服务端存在未消费事件，则立即返回给请求方；如果服务端没有未消费事件，则后台会将请求挂起，直到有新的事件产生为止；
   * 请求最多挂起5秒，建议请求方将超时时间设置为10秒；
   * 未被拉取的事件通知最多保留4天，超过该时限的事件通知可能会被清除；
   * 若该接口有事件返回，调用方必须在<font color="red">30秒</font>内调用 [确认事件通知](https://cloud.tencent.com/document/product/266/33434) 接口，确认事件通知已经处理，否则该事件通知在<font color="red">30秒</font>后会再次被拉取到。
   * 当前，API 每次最多可以获取16个事件通知。
   */
  async PullEvents(
    req: PullEventsRequest,
    cb?: (error: string, rep: PullEventsResponse) => void
  ): Promise<PullEventsResponse> {
    return this.request("PullEvents", req, cb)
  }

  /**
     * 使用任务流模板，对点播中的视频发起处理任务。
有两种方式创建任务流模板：
1. 在控制台上创建和修改任务流模板；
2. 通过任务流模板接口创建任务流模板。

如使用事件通知，除音视频审核任务外的事件通知的类型为 [任务流状态变更](https://cloud.tencent.com/document/product/266/9636)；音视频审核任务事件通知的类型为 [音视频审核完成](https://cloud.tencent.com/document/product/266/81258)。
     */
  async ProcessMediaByProcedure(
    req: ProcessMediaByProcedureRequest,
    cb?: (error: string, rep: ProcessMediaByProcedureResponse) => void
  ): Promise<ProcessMediaByProcedureResponse> {
    return this.request("ProcessMediaByProcedure", req, cb)
  }

  /**
   * 创建音画质检测模板。
   */
  async CreateQualityInspectTemplate(
    req: CreateQualityInspectTemplateRequest,
    cb?: (error: string, rep: CreateQualityInspectTemplateResponse) => void
  ): Promise<CreateQualityInspectTemplateResponse> {
    return this.request("CreateQualityInspectTemplate", req, cb)
  }

  /**
     * 该 API 已经<font color=red>不再维护</font>，新版 [音画质重生](https://cloud.tencent.com/document/product/266/102571) 接口使用预置模板，详情请参见 [音画质重生模板](https://cloud.tencent.com/document/product/266/102586#50604b3f-0286-4a10-a3f7-18218116aff7)。
修改视频重生模板。
     */
  async ModifyRebuildMediaTemplate(
    req: ModifyRebuildMediaTemplateRequest,
    cb?: (error: string, rep: ModifyRebuildMediaTemplateResponse) => void
  ): Promise<ModifyRebuildMediaTemplateResponse> {
    return this.request("ModifyRebuildMediaTemplate", req, cb)
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
     * <b>本接口已不推荐使用，用 [DescribeMediaProcessUsageData](/document/product/266/41464) 替代</b>

该接口返回查询时间范围内每天使用的视频内容智能识别时长数据，单位： 秒。

1. 可以查询最近365天内的视频内容智能识别时长统计数据。
2. 查询时间跨度不超过90天。
     */
  async DescribeReviewDetails(
    req: DescribeReviewDetailsRequest,
    cb?: (error: string, rep: DescribeReviewDetailsResponse) => void
  ): Promise<DescribeReviewDetailsResponse> {
    return this.request("DescribeReviewDetails", req, cb)
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
   * 查询存储空间使用情况和文件数量。
   */
  async DescribeStorageData(
    req: DescribeStorageDataRequest,
    cb?: (error: string, rep: DescribeStorageDataResponse) => void
  ): Promise<DescribeStorageDataResponse> {
    return this.request("DescribeStorageData", req, cb)
  }

  /**
   * 对点播视频进行拆条，生成多个新的点播视频。
   */
  async SplitMedia(
    req: SplitMediaRequest,
    cb?: (error: string, rep: SplitMediaResponse) => void
  ): Promise<SplitMediaResponse> {
    return this.request("SplitMedia", req, cb)
  }

  /**
   * 获取图片处理模板列表，支持根据条件，分页查询。
   */
  async DescribeImageProcessingTemplates(
    req: DescribeImageProcessingTemplatesRequest,
    cb?: (error: string, rep: DescribeImageProcessingTemplatesResponse) => void
  ): Promise<DescribeImageProcessingTemplatesResponse> {
    return this.request("DescribeImageProcessingTemplates", req, cb)
  }

  /**
   * 删除用户自定义的任务流模板。
   */
  async DeleteProcedureTemplate(
    req: DeleteProcedureTemplateRequest,
    cb?: (error: string, rep: DeleteProcedureTemplateResponse) => void
  ): Promise<DeleteProcedureTemplateResponse> {
    return this.request("DeleteProcedureTemplate", req, cb)
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
     * 本 API 是 [旧版本加密](https://cloud.tencent.com/document/product/266/9638) 中 [DescribeDrmDataKey 的 API 2017 接口](https://cloud.tencent.com/document/product/266/9643) 的升级版本。

如果您是新接入点播加密的用户，不要使用该 API，请参考 [视频加密综述](https://cloud.tencent.com/document/product/266/45552) 使用推荐的加密方式。
     */
  async DescribeDrmDataKey(
    req: DescribeDrmDataKeyRequest,
    cb?: (error: string, rep: DescribeDrmDataKeyResponse) => void
  ): Promise<DescribeDrmDataKeyResponse> {
    return this.request("DescribeDrmDataKey", req, cb)
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
   * 智能去除水印
   */
  async RemoveWatermark(
    req: RemoveWatermarkRequest,
    cb?: (error: string, rep: RemoveWatermarkResponse) => void
  ): Promise<RemoveWatermarkResponse> {
    return this.request("RemoveWatermark", req, cb)
  }

  /**
   * 该接口用于修改默认分发配置。
   * 分发域名和分发协议，即媒体文件分发 URL 中的域名和协议。媒体文件按默认分发配置进行分发。
   * 播放密钥，用于计算播放器签名。
   */
  async ModifyDefaultDistributionConfig(
    req: ModifyDefaultDistributionConfigRequest,
    cb?: (error: string, rep: ModifyDefaultDistributionConfigResponse) => void
  ): Promise<ModifyDefaultDistributionConfigResponse> {
    return this.request("ModifyDefaultDistributionConfig", req, cb)
  }

  /**
     * 查询点播域名的 CDN 访问日志的下载链接。
    1. 可以查询最近30天内的 CDN 日志下载链接。
    2. 默认情况下 CDN 每小时生成一个日志文件，如果某一个小时没有 CDN 访问，不会生成日志文件。    
    3. CDN 日志下载链接的有效期为24小时。
     */
  async DescribeCdnLogs(
    req: DescribeCdnLogsRequest,
    cb?: (error: string, rep: DescribeCdnLogsResponse) => void
  ): Promise<DescribeCdnLogsResponse> {
    return this.request("DescribeCdnLogs", req, cb)
  }

  /**
   * 由 VOD 创建新的日志集。
   */
  async CreateCLSLogset(
    req: CreateCLSLogsetRequest,
    cb?: (error: string, rep: CreateCLSLogsetResponse) => void
  ): Promise<CreateCLSLogsetResponse> {
    return this.request("CreateCLSLogset", req, cb)
  }

  /**
   * 为点播域名设置投递 CLS 的目标。
   */
  async SetCLSPushTarget(
    req: SetCLSPushTargetRequest,
    cb?: (error: string, rep: SetCLSPushTargetResponse) => void
  ): Promise<SetCLSPushTargetResponse> {
    return this.request("SetCLSPushTarget", req, cb)
  }

  /**
   * * 该接口用于查询任务列表；
   * 当列表数据比较多时，单次接口调用无法拉取整个列表，可通过 ScrollToken 参数，分批拉取；
   * 只能查询到最近三天（72 小时）内的任务。
   */
  async DescribeTasks(
    req: DescribeTasksRequest,
    cb?: (error: string, rep: DescribeTasksResponse) => void
  ): Promise<DescribeTasksResponse> {
    return this.request("DescribeTasks", req, cb)
  }

  /**
     * 该接口用于开通某地域的存储。
  1. 用户开通点播业务时，系统默认为用户开通了部分地域的存储，用户如果需要开通其它地域的存储，可以通过该接口进行开通。
  2. 通过 DescribeStorageRegions 接口可以查询到所有存储地域及已经开通的地域。
     */
  async CreateStorageRegion(
    req: CreateStorageRegionRequest,
    cb?: (error: string, rep: CreateStorageRegionResponse) => void
  ): Promise<CreateStorageRegionResponse> {
    return this.request("CreateStorageRegion", req, cb)
  }

  /**
   * 删除点播开通的日志主题。
   */
  async DeleteCLSTopic(
    req: DeleteCLSTopicRequest,
    cb?: (error: string, rep: DeleteCLSTopicResponse) => void
  ): Promise<DeleteCLSTopicResponse> {
    return this.request("DeleteCLSTopic", req, cb)
  }

  /**
   * 重新设置用户自定义任务流模板的内容。
   */
  async ResetProcedureTemplate(
    req: ResetProcedureTemplateRequest,
    cb?: (error: string, rep: ResetProcedureTemplateResponse) => void
  ): Promise<ResetProcedureTemplateResponse> {
    return this.request("ResetProcedureTemplate", req, cb)
  }

  /**
     * 该接口用于查询点播 CDN 的流量、带宽等统计数据。
   1. 可以查询最近365天内的 CDN 用量数据。
   2. 查询时间跨度不超过90天。
   3. 可以指定用量数据的时间粒度，支持5分钟、1小时、1天的时间粒度。
   4. 流量为查询时间粒度内的总流量，带宽为查询时间粒度内的峰值带宽。
   5. 播放统计仅针对 VOD 域名（即 EdgeOne 域名的分发不计入播放统计）。
     */
  async DescribeCDNUsageData(
    req: DescribeCDNUsageDataRequest,
    cb?: (error: string, rep: DescribeCDNUsageDataResponse) => void
  ): Promise<DescribeCDNUsageDataResponse> {
    return this.request("DescribeCDNUsageData", req, cb)
  }

  /**
   * 创建用户自定义转码模板，数量上限：100。
   */
  async CreateTranscodeTemplate(
    req: CreateTranscodeTemplateRequest,
    cb?: (error: string, rep: CreateTranscodeTemplateResponse) => void
  ): Promise<CreateTranscodeTemplateResponse> {
    return this.request("CreateTranscodeTemplate", req, cb)
  }

  /**
   * 该接口用于查询点播域名的 CDN 带宽、流量等统计数据。
   * 查询的起始时间和结束时间跨度不超过90天。
   * 可以查询不同服务区域的数据。
   * 中国境内的数据支持查询指定地区、运营商的统计数据。
   * 播放统计仅针对 VOD 域名（即 EdgeOne 域名的分发不计入播放统计）。
   */
  async DescribeCDNStatDetails(
    req: DescribeCDNStatDetailsRequest,
    cb?: (error: string, rep: DescribeCDNStatDetailsResponse) => void
  ): Promise<DescribeCDNStatDetailsResponse> {
    return this.request("DescribeCDNStatDetails", req, cb)
  }

  /**
   * 该接口用于查询媒体文件按指定时间粒度统计的播放数据
   * 可以查询最近一年的播放统计数据。
   * 时间粒度为小时，结束时间和起始时间的跨度最大为7天。
   * 时间粒度为天，结束时间和起始时间的跨度最大为90天。
   * 播放统计仅针对 VOD 域名（即 EdgeOne 域名的分发不计入播放统计）。
   */
  async DescribeMediaPlayStatDetails(
    req: DescribeMediaPlayStatDetailsRequest,
    cb?: (error: string, rep: DescribeMediaPlayStatDetailsResponse) => void
  ): Promise<DescribeMediaPlayStatDetailsResponse> {
    return this.request("DescribeMediaPlayStatDetails", req, cb)
  }

  /**
     * 修改用户自定义审核模板。
>模板仅适用于 [音视频审核(ReviewAudioVideo)](https://cloud.tencent.com/document/api/266/80283) 和 [图片审核(ReviewImage)](https://cloud.tencent.com/document/api/266/73217) 接口。
     */
  async ModifyReviewTemplate(
    req: ModifyReviewTemplateRequest,
    cb?: (error: string, rep: ModifyReviewTemplateResponse) => void
  ): Promise<ModifyReviewTemplateResponse> {
    return this.request("ModifyReviewTemplate", req, cb)
  }

  /**
     * 该接口返回查询时间范围内每天 License 请求次数信息。
   1. 可以查询最近365天内的 License 请求次数统计数据。
   2. 查询时间跨度不超过90天。
   3. 查询时间跨度超过1天的，返回以天为粒度的数据，否则，返回以5分钟为粒度的数据。
     */
  async DescribeLicenseUsageData(
    req: DescribeLicenseUsageDataRequest,
    cb?: (error: string, rep: DescribeLicenseUsageDataResponse) => void
  ): Promise<DescribeLicenseUsageDataResponse> {
    return this.request("DescribeLicenseUsageData", req, cb)
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
   * * 仅当待删分类无子分类且无媒体关联情况下，可删除分类；
   * 否则，请先执行[删除媒体](/document/product/266/31764)及子分类，再删除该分类；
   */
  async DeleteClass(
    req: DeleteClassRequest,
    cb?: (error: string, rep: DeleteClassResponse) => void
  ): Promise<DeleteClassResponse> {
    return this.request("DeleteClass", req, cb)
  }

  /**
   * 本接口仅用于定制开发的特殊场景，除非云点播客服人员主动告知您需要使用本接口，其它情况请勿调用。
   */
  async ExecuteFunction(
    req: ExecuteFunctionRequest,
    cb?: (error: string, rep: ExecuteFunctionResponse) => void
  ): Promise<ExecuteFunctionResponse> {
    return this.request("ExecuteFunction", req, cb)
  }

  /**
     * 删除用户自定义审核模板。
>模板仅适用于 [音视频审核(ReviewAudioVideo)](https://cloud.tencent.com/document/api/266/80283) 和 [图片审核(ReviewImage)](https://cloud.tencent.com/document/api/266/73217) 接口。
     */
  async DeleteReviewTemplate(
    req: DeleteReviewTemplateRequest,
    cb?: (error: string, rep: DeleteReviewTemplateResponse) => void
  ): Promise<DeleteReviewTemplateResponse> {
    return this.request("DeleteReviewTemplate", req, cb)
  }

  /**
     * 该接口返回查询时间范围内每天使用的视频处理用量信息。
   1. 可以查询最近365天内的视频处理统计数据。
   2. 查询时间跨度不超过90天。
     */
  async DescribeMediaProcessUsageData(
    req: DescribeMediaProcessUsageDataRequest,
    cb?: (error: string, rep: DescribeMediaProcessUsageDataResponse) => void
  ): Promise<DescribeMediaProcessUsageDataResponse> {
    return this.request("DescribeMediaProcessUsageData", req, cb)
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
   * 对点播中的音视频媒体发起音画质检测任务。
   */
  async InspectMediaQuality(
    req: InspectMediaQualityRequest,
    cb?: (error: string, rep: InspectMediaQualityResponse) => void
  ): Promise<InspectMediaQualityResponse> {
    return this.request("InspectMediaQuality", req, cb)
  }

  /**
     * 该接口可以查询用户已经购买的预付费商品的信息，包括：
    1. 商品的类型、生效和失效日期。
    2. 商品中每种资源的额度和剩余额度。
     */
  async DescribePrepaidProducts(
    req?: DescribePrepaidProductsRequest,
    cb?: (error: string, rep: DescribePrepaidProductsResponse) => void
  ): Promise<DescribePrepaidProductsResponse> {
    return this.request("DescribePrepaidProducts", req, cb)
  }

  /**
   * 该接口用于生成一条子域名解析，提示客户添加到域名解析上，用于泛域名及域名取回校验归属权。
   */
  async CreateDomainVerifyRecord(
    req: CreateDomainVerifyRecordRequest,
    cb?: (error: string, rep: CreateDomainVerifyRecordResponse) => void
  ): Promise<CreateDomainVerifyRecordResponse> {
    return this.request("CreateDomainVerifyRecord", req, cb)
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
     * 该接口用于合成媒体文件，可以达到以下效果：

1. **画面旋转**：对视频、图片的画面旋转一定角度，或按照某个方向翻转。
2. **声音控制**：升高降低视频、音频中声音的音量，或者对视频静音。
3. **画面叠加**：将视频、图片中的画面依序叠加在一起，如实现“画中画”的效果。
4. **声音混合**：将视频、音频中的声音混合在一起（混音）。
5. **声音提取**：将视频中的音频提取出来（不保留画面）。
6. **裁剪**：对视频、音频裁剪出指定时间段。
7. **拼接**：对视频、音频、图片按时间顺序前后拼接。
8. **转场**：将多段视频或图片拼接时，可以在段落之间添加转场效果。

合成后的媒体封装格式可以是 MP4（视频）或 MP3（音频）。如使用事件通知，事件通知的类型为 [视频合成完成](https://cloud.tencent.com/document/product/266/43000)。
     */
  async ComposeMedia(
    req: ComposeMediaRequest,
    cb?: (error: string, rep: ComposeMediaResponse) => void
  ): Promise<ComposeMediaResponse> {
    return this.request("ComposeMedia", req, cb)
  }

  /**
     * 该 API 已经<font color=red>不再维护</font>，新版审核模板支持音视频审核和图片审核，详细请参考 [创建审核模板](https://cloud.tencent.com/document/api/266/84391)。
创建用户自定义音视频内容审核模板，数量上限：50。
     */
  async CreateContentReviewTemplate(
    req: CreateContentReviewTemplateRequest,
    cb?: (error: string, rep: CreateContentReviewTemplateResponse) => void
  ): Promise<CreateContentReviewTemplateResponse> {
    return this.request("CreateContentReviewTemplate", req, cb)
  }

  /**
     * 该 API 已经<font color=red>不再维护</font>，请使用新版接口 [音画质重生](https://cloud.tencent.com/document/api/266/102571)。
发起音画质重生
     */
  async RebuildMedia(
    req: RebuildMediaRequest,
    cb?: (error: string, rep: RebuildMediaResponse) => void
  ): Promise<RebuildMediaResponse> {
    return this.request("RebuildMedia", req, cb)
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
     * 删除用户自定义音视频内容分析模板。

注意：模板 ID 为 10000 以下的为系统预置模板，不允许删除。
     */
  async DeleteAIAnalysisTemplate(
    req: DeleteAIAnalysisTemplateRequest,
    cb?: (error: string, rep: DeleteAIAnalysisTemplateResponse) => void
  ): Promise<DeleteAIAnalysisTemplateResponse> {
    return this.request("DeleteAIAnalysisTemplate", req, cb)
  }

  /**
   * 查询 DRM 密钥提供商信息。
   */
  async DescribeDrmKeyProviderInfo(
    req: DescribeDrmKeyProviderInfoRequest,
    cb?: (error: string, rep: DescribeDrmKeyProviderInfoResponse) => void
  ): Promise<DescribeDrmKeyProviderInfoResponse> {
    return this.request("DescribeDrmKeyProviderInfo", req, cb)
  }

  /**
     * 该 API 已经<font color=red>不再维护</font>，新版 [音画质重生](https://cloud.tencent.com/document/product/266/102571) 接口使用预置模板，详情请参见 [音画质重生模板](https://cloud.tencent.com/document/product/266/102586#50604b3f-0286-4a10-a3f7-18218116aff7)。
删除视频重生模板。
     */
  async DeleteRebuildMediaTemplate(
    req: DeleteRebuildMediaTemplateRequest,
    cb?: (error: string, rep: DeleteRebuildMediaTemplateResponse) => void
  ): Promise<DeleteRebuildMediaTemplateResponse> {
    return this.request("DeleteRebuildMediaTemplate", req, cb)
  }

  /**
     * 直播即时剪辑，是指在直播过程中（即直播尚未结束时），客户可以在过往直播内容中选择一段，实时生成一个新的视频（HLS 格式），开发者可以将其立即分享出去，或者长久保存起来。

腾讯云点播支持两种即时剪辑模式：
- 剪辑固化：将剪辑出来的视频保存成独立的视频，拥有独立 FileId；适用于将精彩片段**长久保存**的场景；
- 剪辑不固化：剪辑得到的视频附属于直播录制文件，没有独立 FileId；适用于将精彩片段**临时分享**的场景。

注意：
- 使用直播即时剪辑功能的前提是：目标直播流开启了[时移回看](https://cloud.tencent.com/document/product/267/32742)功能。
- 直播即时剪辑是基于直播录制生成的 m3u8 文件进行的，故而其最小剪辑精度为一个 ts 切片，无法实现秒级或者更为精确的剪辑精度。
- 由于直播过程中可能存在断流的情况，所以有可能导致剪辑生成的实际视频时长与期望不一致。例如剪辑某个直播流的时间区间为 2018-09-20T10:30:00Z 到 2018-09-20T10:40:00Z ，如果在该时间区间中发生过断流，那么返回的媒资文件的时长将少于 10 分钟，在这种情况下，可以通过输出参数 <a href="#p_segmentset">SegmentSet</a> 感知到。

### 剪辑固化
所谓剪辑固化，是指将剪辑出来的视频是保存成一个独立的视频（拥有独立的 FileId）。其生命周期不受原始直播录制视频影响（即使原始录制视频被删除，剪辑结果也不会受到任何影响）；也可以对其进行转码、微信发布等二次处理。

举例如下：一场完整的足球比赛，直播录制出来的原始视频可能长达 2 个小时，客户出于节省成本的目的可以对这个视频存储 2 个月，但对于直播即时剪辑的「精彩时刻」视频却可以指定存储更长时间，同时可以单独对「精彩时刻」视频进行转码、微信发布等额外的点播操作，这时候可以选择直播即时剪辑并且固化的方案。

剪辑固化的优势在于其生命周期与原始录制视频相互独立，可以独立管理、长久保存。

<font color='red'>注意：</font>如果剪辑时指定进行固化，通过 ModifyEventConfig 接口启用接收剪辑固化事件通知，固化成功后将会收到一个 PersitenceComplete 类型的事件通知。在收到这个事件通知之前，不应该对直播录制视频进行删除、降冷等操作，否则剪辑生成的视频播放可能出现异常。

### 剪辑不固化
所谓剪辑不固化，是指剪辑所得到的结果（m3u8 文件）与直播录制视频共享相同的 ts 分片，新生成的视频不是一个独立完整的视频（没有独立 FileId，只有播放 URL），其有效期与直播录制的完整视频有效期是一致的。一旦直播录制出来的视频被删除，也会导致该片段无法播放。

剪辑不固化，由于其剪辑结果不是一个独立的视频，因而也不会纳入点播媒资视频管理（例如控制台的视频总数不会统计这一片段）中，也无法单独针对这个片段做转码、微信发布等任何视频处理操作。

剪辑不固化的优势在于其剪辑操作十分“轻量化”，不会产生额外的存储开销。但其不足之处在于生命周期与原始录制视频相同，且无法进一步进行转码等视频处理。
     */
  async LiveRealTimeClip(
    req: LiveRealTimeClipRequest,
    cb?: (error: string, rep: LiveRealTimeClipResponse) => void
  ): Promise<LiveRealTimeClipResponse> {
    return this.request("LiveRealTimeClip", req, cb)
  }

  /**
     * 修改媒体文件的存储类型。
当媒体文件的存储类型为标准存储时，可以修改为以下类型：
<li>低频存储</li>
<li>归档存储</li>
<li>深度归档存储</li>
当媒体文件的当前存储类型为低频存储时，可以修改为以下类型：
<li>标准存储</li>
<li>归档存储</li>
<li>深度归档存储</li>
当媒体文件的当前存储类型为归档存储时，可以修改为以下类型：
<li>标准存储</li>
当媒体文件的当前存储类型为深度归档存储时，可以修改为以下类型：
<li>标准存储</li>
     */
  async ModifyMediaStorageClass(
    req: ModifyMediaStorageClassRequest,
    cb?: (error: string, rep: ModifyMediaStorageClassResponse) => void
  ): Promise<ModifyMediaStorageClassResponse> {
    return this.request("ModifyMediaStorageClass", req, cb)
  }

  /**
   * 该接口用于将一个网络上的视频拉取到云点播平台。
   */
  async PullUpload(
    req: PullUploadRequest,
    cb?: (error: string, rep: PullUploadResponse) => void
  ): Promise<PullUploadResponse> {
    return this.request("PullUpload", req, cb)
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
     * 该接口用于修改点播域名的加速区域。
1、域名部署状态为 Online 状态时才允许修改加速区域。
     */
  async ModifyVodDomainAccelerateConfig(
    req: ModifyVodDomainAccelerateConfigRequest,
    cb?: (error: string, rep: ModifyVodDomainAccelerateConfigResponse) => void
  ): Promise<ModifyVodDomainAccelerateConfigResponse> {
    return this.request("ModifyVodDomainAccelerateConfig", req, cb)
  }

  /**
     * 该 API 已经<font color='red'>不再维护</font>，新版播放器签名不再使用播放器配置模板，详细请参考 [播放器签名](https://cloud.tencent.com/document/product/266/45554)。
删除播放器配置。  
*注：系统预置播放器配置不允许删除。*
     */
  async DeleteSuperPlayerConfig(
    req: DeleteSuperPlayerConfigRequest,
    cb?: (error: string, rep: DeleteSuperPlayerConfigResponse) => void
  ): Promise<DeleteSuperPlayerConfigResponse> {
    return this.request("DeleteSuperPlayerConfig", req, cb)
  }

  /**
     * 对点播中的音视频媒体发起审核任务，智能检测视频画面、画面中的文字、语音中的文字、声音出现的违规内容。

如使用事件通知，事件通知的类型为 [音视频审核完成](https://cloud.tencent.com/document/product/266/81258)。
     */
  async ReviewAudioVideo(
    req: ReviewAudioVideoRequest,
    cb?: (error: string, rep: ReviewAudioVideoResponse) => void
  ): Promise<ReviewAudioVideoResponse> {
    return this.request("ReviewAudioVideo", req, cb)
  }

  /**
   * 根据任务流模板名字，获取任务流模板详情列表。
   */
  async DescribeProcedureTemplates(
    req: DescribeProcedureTemplatesRequest,
    cb?: (error: string, rep: DescribeProcedureTemplatesResponse) => void
  ): Promise<DescribeProcedureTemplatesResponse> {
    return this.request("DescribeProcedureTemplates", req, cb)
  }

  /**
     * 该接口返回查询时间范围内客户端上传加速统计信息。
   1. 可以查询最近365天内的客户端上传加速统计数据。
   2. 查询时间跨度不超过90天。
   3. 查询时间跨度超过1天的，返回以天为粒度的数据，否则，返回以5分钟为粒度的数据。
     */
  async DescribeClientUploadAccelerationUsageData(
    req: DescribeClientUploadAccelerationUsageDataRequest,
    cb?: (error: string, rep: DescribeClientUploadAccelerationUsageDataResponse) => void
  ): Promise<DescribeClientUploadAccelerationUsageDataResponse> {
    return this.request("DescribeClientUploadAccelerationUsageData", req, cb)
  }

  /**
   * 上传 HLS 视频时，解析索引文件内容，返回待上传的分片文件列表。分片文件路径必须是当前目录或子目录的相对路径，不能是 URL，不能是绝对路径。
   */
  async ParseStreamingManifest(
    req: ParseStreamingManifestRequest,
    cb?: (error: string, rep: ParseStreamingManifestResponse) => void
  ): Promise<ParseStreamingManifestResponse> {
    return this.request("ParseStreamingManifest", req, cb)
  }

  /**
     * 该 API 已经<font color='red'>不再维护</font>，智能识别任务请使用图片智能识别 [ReviewImage](https://cloud.tencent.com/document/api/266/73217) 接口。

对点播中的图片文件发起处理任务，功能包括：

1. 智能识别（令人反感的信息、不安全的信息、不适宜的信息）;

><li>图片文件大小支持：文件 < 5M；</li>
><li>图片文件分辨率支持：建议分辨率大于256x256，否则可能会影响识别效果；</li>
><li>图片文件支持格式：PNG、JPG、JPEG、BMP、GIF、WEBP格式。</li>
     */
  async ProcessImage(
    req: ProcessImageRequest,
    cb?: (error: string, rep: ProcessImageResponse) => void
  ): Promise<ProcessImageResponse> {
    return this.request("ProcessImage", req, cb)
  }

  /**
   * 对点播中的音视频媒体发起音画质重生任务。
   */
  async EnhanceMediaQuality(
    req: EnhanceMediaQualityRequest,
    cb?: (error: string, rep: EnhanceMediaQualityResponse) => void
  ): Promise<EnhanceMediaQualityResponse> {
    return this.request("EnhanceMediaQuality", req, cb)
  }

  /**
   * 创建用户自定义的任务流模板，模板上限：50。
   */
  async CreateProcedureTemplate(
    req: CreateProcedureTemplateRequest,
    cb?: (error: string, rep: CreateProcedureTemplateResponse) => void
  ): Promise<CreateProcedureTemplateResponse> {
    return this.request("CreateProcedureTemplate", req, cb)
  }

  /**
     * 1. 预热指定的 URL 列表。
2. URL 的域名必须已在云点播中注册。
3. 单次请求最多指定20个 URL。
4. 默认预热配额为每天10000个 URL。
     */
  async PushUrlCache(
    req: PushUrlCacheRequest,
    cb?: (error: string, rep: PushUrlCacheResponse) => void
  ): Promise<PushUrlCacheResponse> {
    return this.request("PushUrlCache", req, cb)
  }

  /**
   * * 删除媒体及其对应的视频处理文件（原始文件、如转码视频、雪碧图、截图、微信发布视频等）；
   * 可单独删除指定 ID 的视频文件下的原文件、转码视频、微信发布视频等；
   * 注意：原文件删除后，无法发起转码、微信发布等任何视频处理操作。
   */
  async DeleteMedia(
    req: DeleteMediaRequest,
    cb?: (error: string, rep: DeleteMediaResponse) => void
  ): Promise<DeleteMediaResponse> {
    return this.request("DeleteMedia", req, cb)
  }

  /**
   * 操作轮播当前播放列表。支持的操作有：<li> Insert：向当前播列表插入播放节目。</li><li> Delete：删除播列表中的播放节目。</li>
   */
  async HandleCurrentPlaylist(
    req: HandleCurrentPlaylistRequest,
    cb?: (error: string, rep: HandleCurrentPlaylistResponse) => void
  ): Promise<HandleCurrentPlaylistResponse> {
    return this.request("HandleCurrentPlaylist", req, cb)
  }

  /**
     * 该 API 已经<font color='red'>不再维护</font>，新版播放器签名不再使用播放器配置模板，详细请参考 [播放器签名](https://cloud.tencent.com/document/product/266/45554)。
创建播放器配置，数量上限：100。
     */
  async CreateSuperPlayerConfig(
    req: CreateSuperPlayerConfigRequest,
    cb?: (error: string, rep: CreateSuperPlayerConfigResponse) => void
  ): Promise<CreateSuperPlayerConfigResponse> {
    return this.request("CreateSuperPlayerConfig", req, cb)
  }

  /**
   * 查询点播域名下日志投递的目标主题。
   */
  async DescribeCLSPushTargets(
    req: DescribeCLSPushTargetsRequest,
    cb?: (error: string, rep: DescribeCLSPushTargetsResponse) => void
  ): Promise<DescribeCLSPushTargetsResponse> {
    return this.request("DescribeCLSPushTargets", req, cb)
  }

  /**
     * 该 API 已经<font color=red>不再维护</font>，请使用新版接口 [音画质重生](https://cloud.tencent.com/document/api/266/102571)。
使用模板发起音画质重生。
     */
  async EnhanceMediaByTemplate(
    req: EnhanceMediaByTemplateRequest,
    cb?: (error: string, rep: EnhanceMediaByTemplateResponse) => void
  ): Promise<EnhanceMediaByTemplateResponse> {
    return this.request("EnhanceMediaByTemplate", req, cb)
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
     * 该 API 已经<font color=red>不再维护</font>，新版 [音画质重生](https://cloud.tencent.com/document/product/266/102571) 接口使用预置模板，详情请参见 [音画质重生模板](https://cloud.tencent.com/document/product/266/102586#50604b3f-0286-4a10-a3f7-18218116aff7)。
创建音画质重生模板。
     */
  async CreateEnhanceMediaTemplate(
    req: CreateEnhanceMediaTemplateRequest,
    cb?: (error: string, rep: CreateEnhanceMediaTemplateResponse) => void
  ): Promise<CreateEnhanceMediaTemplateResponse> {
    return this.request("CreateEnhanceMediaTemplate", req, cb)
  }

  /**
     * 该 API 已经<font color=red>不再维护</font>，新版 [音画质重生](https://cloud.tencent.com/document/product/266/102571) 接口使用预置模板，详情请参见 [音画质重生模板](https://cloud.tencent.com/document/product/266/102586#50604b3f-0286-4a10-a3f7-18218116aff7)。
创建视频重生模板。
     */
  async CreateRebuildMediaTemplate(
    req: CreateRebuildMediaTemplateRequest,
    cb?: (error: string, rep: CreateRebuildMediaTemplateResponse) => void
  ): Promise<CreateRebuildMediaTemplateResponse> {
    return this.request("CreateRebuildMediaTemplate", req, cb)
  }

  /**
   * 查询轮播当前播放列表。
   */
  async DescribeCurrentPlaylist(
    req: DescribeCurrentPlaylistRequest,
    cb?: (error: string, rep: DescribeCurrentPlaylistResponse) => void
  ): Promise<DescribeCurrentPlaylistResponse> {
    return this.request("DescribeCurrentPlaylist", req, cb)
  }

  /**
   * 该接口用于查询指定日期范围内每天的播放统计数据。
   * 可以查询最近一年的播放统计数据。
   * 结束日期和起始日期的时间跨度最大为90天。
   * 播放统计仅针对 VOD 域名（即 EdgeOne 域名的分发不计入播放统计）。
   */
  async DescribeDailyMediaPlayStat(
    req: DescribeDailyMediaPlayStatRequest,
    cb?: (error: string, rep: DescribeDailyMediaPlayStatResponse) => void
  ): Promise<DescribeDailyMediaPlayStatResponse> {
    return this.request("DescribeDailyMediaPlayStat", req, cb)
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
   * 查询 VOD 创建的 CLS 日志主题列表。
   */
  async DescribeCLSTopics(
    req: DescribeCLSTopicsRequest,
    cb?: (error: string, rep: DescribeCLSTopicsResponse) => void
  ): Promise<DescribeCLSTopicsResponse> {
    return this.request("DescribeCLSTopics", req, cb)
  }

  /**
   * 创建 VOD 下新的 CLS 日志主题
   */
  async CreateCLSTopic(
    req: CreateCLSTopicRequest,
    cb?: (error: string, rep: CreateCLSTopicResponse) => void
  ): Promise<CreateCLSTopicResponse> {
    return this.request("CreateCLSTopic", req, cb)
  }

  /**
     * 该 API 已经<font color=red>不再维护</font>，新版审核模板支持音视频审核和图片审核，详细请参考 [删除审核模板](https://cloud.tencent.com/document/api/266/84390)。
删除用户自定义音视频内容审核模板。
     */
  async DeleteContentReviewTemplate(
    req: DeleteContentReviewTemplateRequest,
    cb?: (error: string, rep: DeleteContentReviewTemplateResponse) => void
  ): Promise<DeleteContentReviewTemplateResponse> {
    return this.request("DeleteContentReviewTemplate", req, cb)
  }

  /**
   * 创建用户自定义音视频内容分析模板，数量上限：50。暂时不支持 HLS 格式。
   */
  async CreateAIAnalysisTemplate(
    req: CreateAIAnalysisTemplateRequest,
    cb?: (error: string, rep: CreateAIAnalysisTemplateResponse) => void
  ): Promise<CreateAIAnalysisTemplateResponse> {
    return this.request("CreateAIAnalysisTemplate", req, cb)
  }

  /**
     * 该接口用于查询每日播放Top100 的媒体文件的播放统计数据。
* 可以查询最近一年的播放统计数据。
* 可以按播放次数或者播放流量查询。
* 播放次数统计说明：
    1. HLS 文件：访问 M3U8 文件时统计播放次数；访问 TS 文件不统计播放次数。
    2. 其它文件（如 MP4 文件）：播放请求带有 range 参数且 range 的 start 参数不等于0时不统计播放次数，其它情况统计播放次数。
* 播放统计仅针对 VOD 域名（即 EdgeOne 域名的分发不计入播放统计）。
     */
  async DescribeDailyMostPlayedStat(
    req: DescribeDailyMostPlayedStatRequest,
    cb?: (error: string, rep: DescribeDailyMostPlayedStatResponse) => void
  ): Promise<DescribeDailyMostPlayedStatResponse> {
    return this.request("DescribeDailyMostPlayedStat", req, cb)
  }

  /**
   * 该 API 已经<font color='red'>不再维护</font>。如果有盗录溯源需求，请参考 [幽灵水印](https://cloud.tencent.com/document/product/266/94228)。
   */
  async ExtractCopyRightWatermark(
    req: ExtractCopyRightWatermarkRequest,
    cb?: (error: string, rep: ExtractCopyRightWatermarkResponse) => void
  ): Promise<ExtractCopyRightWatermarkResponse> {
    return this.request("ExtractCopyRightWatermark", req, cb)
  }

  /**
     * 该接口用于：
  1. 查询点播可开通的所有存储园区列表。
  2. 查询已经开通的园区列表。
  3. 查询默认使用的存储园区。
     */
  async DescribeStorageRegions(
    req: DescribeStorageRegionsRequest,
    cb?: (error: string, rep: DescribeStorageRegionsResponse) => void
  ): Promise<DescribeStorageRegionsResponse> {
    return this.request("DescribeStorageRegions", req, cb)
  }

  /**
     * 1. 刷新指定的 URL 列表。
2. URL 的域名必须已在云点播中注册。
3. 单次请求最多指定20个 URL。
4. 默认刷新配额为每天100000个 URL。
     */
  async RefreshUrlCache(
    req: RefreshUrlCacheRequest,
    cb?: (error: string, rep: RefreshUrlCacheResponse) => void
  ): Promise<RefreshUrlCacheResponse> {
    return this.request("RefreshUrlCache", req, cb)
  }

  /**
   * * 该接口用于业务服务器获取 [可靠回调](https://cloud.tencent.com/document/product/266/33779#.E5.8F.AF.E9.9D.A0.E5.9B.9E.E8.B0.83) 事件通知的状态。
   */
  async DescribeEventsState(
    req: DescribeEventsStateRequest,
    cb?: (error: string, rep: DescribeEventsStateResponse) => void
  ): Promise<DescribeEventsStateResponse> {
    return this.request("DescribeEventsState", req, cb)
  }

  /**
   * 修改音画质检测模板。
   */
  async ModifyQualityInspectTemplate(
    req: ModifyQualityInspectTemplateRequest,
    cb?: (error: string, rep: ModifyQualityInspectTemplateResponse) => void
  ): Promise<ModifyQualityInspectTemplateResponse> {
    return this.request("ModifyQualityInspectTemplate", req, cb)
  }

  /**
   * 该接口用于验证域名解析值。
   */
  async VerifyDomainRecord(
    req: VerifyDomainRecordRequest,
    cb?: (error: string, rep: VerifyDomainRecordResponse) => void
  ): Promise<VerifyDomainRecordResponse> {
    return this.request("VerifyDomainRecord", req, cb)
  }

  /**
     * 该接口返回查询时间范围内每天使用的图片审核用量信息。
   1. 可以查询最近365天内的图片审核统计数据。
   2. 查询时间跨度不超过90天。
   3. 查询时间跨度超过1天的，返回以天为粒度的数据，否则，返回以5分钟为粒度的数据。
     */
  async DescribeImageReviewUsageData(
    req: DescribeImageReviewUsageDataRequest,
    cb?: (error: string, rep: DescribeImageReviewUsageDataResponse) => void
  ): Promise<DescribeImageReviewUsageDataResponse> {
    return this.request("DescribeImageReviewUsageData", req, cb)
  }

  /**
     * 该接口用于修改域名配置，可以修改域名的防盗链配置。
1、域名部署状态为 Online 状态时才允许修改域名的配置。
     */
  async ModifyVodDomainConfig(
    req: ModifyVodDomainConfigRequest,
    cb?: (error: string, rep: ModifyVodDomainConfigResponse) => void
  ): Promise<ModifyVodDomainConfigResponse> {
    return this.request("ModifyVodDomainConfig", req, cb)
  }

  /**
   * * 开发者调用拉取事件通知，获取到事件后，必须调用该接口来确认消息已经收到；
   * 开发者获取到事件句柄后，等待确认的有效时间为 30 秒，超出 30 秒会报参数错误（4000）；
   * 更多参考事件通知的[可靠回调](https://cloud.tencent.com/document/product/266/33779#.E5.8F.AF.E9.9D.A0.E5.9B.9E.E8.B0.83)。
   */
  async ConfirmEvents(
    req: ConfirmEventsRequest,
    cb?: (error: string, rep: ConfirmEventsResponse) => void
  ): Promise<ConfirmEventsResponse> {
    return this.request("ConfirmEvents", req, cb)
  }

  /**
   * 该接口用于获取轮播播单列表。
   */
  async DescribeRoundPlays(
    req: DescribeRoundPlaysRequest,
    cb?: (error: string, rep: DescribeRoundPlaysResponse) => void
  ): Promise<DescribeRoundPlaysResponse> {
    return this.request("DescribeRoundPlays", req, cb)
  }

  /**
   * 该 API 已经<font color='red'>不再维护</font>，请使用 MPS 产品的 [ProcessMedia](https://cloud.tencent.com/document/product/862/37578) 接口，在入参 InputInfo.UrlInputInfo.Url 中指定视频 URL。
   */
  async ProcessMediaByUrl(
    req: ProcessMediaByUrlRequest,
    cb?: (error: string, rep: ProcessMediaByUrlResponse) => void
  ): Promise<ProcessMediaByUrlResponse> {
    return this.request("ProcessMediaByUrl", req, cb)
  }

  /**
     * 发起复杂自适应码流处理任务，功能包括：
1. 按指定的自适应码流模板输出 HLS、DASH 自适应码流；
2. 自适应码流的内容保护方案可选择无加密、Widevine 或 FairPlay；
3. 支持添加片头片尾；
4. 输出的自适应码流可包含多语言音频流，每种语言分别来自不同的媒体文件；
5. 输出的自适应码流可包含多语言字幕流。

注意事项：
1. 当使用片头时，片头媒体中的视频流需要和音频流对齐，否则将导致输出的内容音画不同步；
2. 如果输出的自适应码流需要包含主媒体的音频，那么需要在 AudioSet 参数中指定主媒体的 FileId；
3. 使用字幕时，需要先将字幕添加到主媒体，可通过 ModifyMediaInfo 接口或控制台的音视频详情页进行添加；
4. 暂不支持极速高清、水印。
     */
  async CreateComplexAdaptiveDynamicStreamingTask(
    req: CreateComplexAdaptiveDynamicStreamingTaskRequest,
    cb?: (error: string, rep: CreateComplexAdaptiveDynamicStreamingTaskResponse) => void
  ): Promise<CreateComplexAdaptiveDynamicStreamingTaskResponse> {
    return this.request("CreateComplexAdaptiveDynamicStreamingTask", req, cb)
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
     * 该 API 已经<font color=red>不再维护</font>，新版审核模板支持音视频审核和图片审核，详细请参考 [获取审核模板列表](https://cloud.tencent.com/document/api/266/84389)。
根据音视频内容审核模板唯一标识，获取音视频内容审核模板详情列表。返回结果包含符合条件的所有用户自定义模板及[系统预置内容审核模板](https://cloud.tencent.com/document/product/266/33476#.E9.A2.84.E7.BD.AE.E8.A7.86.E9.A2.91.E5.86.85.E5.AE.B9.E5.AE.A1.E6.A0.B8.E6.A8.A1.E6.9D.BF)。
     */
  async DescribeContentReviewTemplates(
    req: DescribeContentReviewTemplatesRequest,
    cb?: (error: string, rep: DescribeContentReviewTemplatesResponse) => void
  ): Promise<DescribeContentReviewTemplatesResponse> {
    return this.request("DescribeContentReviewTemplates", req, cb)
  }

  /**
   * 修改片头片尾模板。
   */
  async ModifyHeadTailTemplate(
    req: ModifyHeadTailTemplateRequest,
    cb?: (error: string, rep: ModifyHeadTailTemplateResponse) => void
  ): Promise<ModifyHeadTailTemplateResponse> {
    return this.request("ModifyHeadTailTemplate", req, cb)
  }

  /**
   * 删除用户自定义图片处理模板。
   */
  async DeleteImageProcessingTemplate(
    req: DeleteImageProcessingTemplateRequest,
    cb?: (error: string, rep: DeleteImageProcessingTemplateResponse) => void
  ): Promise<DeleteImageProcessingTemplateResponse> {
    return this.request("DeleteImageProcessingTemplate", req, cb)
  }

  /**
     * 对点播中的音视频媒体发起处理任务，功能包括：
1. 视频转码（带水印）；
2. 视频转动图；
3. 对视频按指定时间点截图；
4. 对视频采样截图；
5. 对视频截取雪碧图；
6. 对视频截取一张图做封面；
7. 对视频转自适应码流（并加密）；
8. 内容审核（令人反感的信息、不安全的信息、不适宜的信息），<font color=red>不建议</font> 使用该接口发起，推荐使用 [音视频审核(ReviewAudioVideo)](https://cloud.tencent.com/document/api/266/80283) 或 [图片审核(ReviewImage)](https://cloud.tencent.com/document/api/266/73217)；
9. 内容分析（标签、分类、封面、按帧标签），暂时不支持 HLS 格式；
10. 内容识别（视频片头片尾、人脸、文本全文、文本关键词、语音全文、语音关键词、物体）。

如使用事件通知，事件通知的类型为 [任务流状态变更](https://cloud.tencent.com/document/product/266/9636)。
     */
  async ProcessMedia(
    req: ProcessMediaRequest,
    cb?: (error: string, rep: ProcessMediaResponse) => void
  ): Promise<ProcessMediaResponse> {
    return this.request("ProcessMedia", req, cb)
  }

  /**
     * 创建片头片尾模板。
- 最大支持模板数量为 100 个。
     */
  async CreateHeadTailTemplate(
    req: CreateHeadTailTemplateRequest,
    cb?: (error: string, rep: CreateHeadTailTemplateResponse) => void
  ): Promise<CreateHeadTailTemplateResponse> {
    return this.request("CreateHeadTailTemplate", req, cb)
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
     * 该接口返回查询时间范围内使用的点播存储空间，单位：字节。
    1. 可以查询最近365天内的存储空间数据；
    2. 查询时间跨度不超过90天；
    3. 分钟粒度查询跨度不超过7天；
     */
  async DescribeStorageDetails(
    req: DescribeStorageDetailsRequest,
    cb?: (error: string, rep: DescribeStorageDetailsResponse) => void
  ): Promise<DescribeStorageDetailsResponse> {
    return this.request("DescribeStorageDetails", req, cb)
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
     * 对云点播的 HLS 视频实现快速拼接和快速剪辑，生成新的 HLS 格式的媒体。

快速拼接或剪辑生成的视频，将产生新的 FileId 并进行固化，固化成功后新视频的文件独立于原始输入视频存在，不受原始视频删除等影响。

<font color='red'>注意：</font>通过 ModifyEventConfig 接口启用接收剪辑固化事件通知，固化成功后将会收到一个 PersitenceComplete 类型的事件通知。在收到这个事件通知之前，不应该对原始输入的视频进行删除、降冷等操作，否则拼接剪辑生成的视频播放可能出现异常。
     */
  async FastEditMedia(
    req: FastEditMediaRequest,
    cb?: (error: string, rep: FastEditMediaResponse) => void
  ): Promise<FastEditMediaResponse> {
    return this.request("FastEditMedia", req, cb)
  }

  /**
     * 该接口用于将加速域名添加到点播，一个用户最多添加20个加速域名。
1.域名添加成功后点播会进行域名的部署，域名由部署状态变为在线状态大概需要2分钟的时间。
     */
  async CreateVodDomain(
    req: CreateVodDomainRequest,
    cb?: (error: string, rep: CreateVodDomainResponse) => void
  ): Promise<CreateVodDomainResponse> {
    return this.request("CreateVodDomain", req, cb)
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
   * 该接口用于查询素材样本信息，支持根据素材 ID、名称、标签，分页查询。
   */
  async DescribePersonSamples(
    req: DescribePersonSamplesRequest,
    cb?: (error: string, rep: DescribePersonSamplesResponse) => void
  ): Promise<DescribePersonSamplesResponse> {
    return this.request("DescribePersonSamples", req, cb)
  }

  /**
   * 删除用户自定义音视频内容识别模板。
   */
  async DeleteAIRecognitionTemplate(
    req: DeleteAIRecognitionTemplateRequest,
    cb?: (error: string, rep: DeleteAIRecognitionTemplateResponse) => void
  ): Promise<DeleteAIRecognitionTemplateResponse> {
    return this.request("DeleteAIRecognitionTemplate", req, cb)
  }

  /**
   * 该接口用于创建点播应用。
   */
  async CreateSubAppId(
    req: CreateSubAppIdRequest,
    cb?: (error: string, rep: CreateSubAppIdResponse) => void
  ): Promise<CreateSubAppIdResponse> {
    return this.request("CreateSubAppId", req, cb)
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
     * * 对媒体禁播后，除了点播控制台预览，其他场景访问视频各种资源的 URL（原始文件、转码输出文件、截图等）均会返回 403。
  禁播/解禁操作全网生效时间约 5~10 分钟。
* 注意：禁播媒体仅能操作标准存储和低频存储的媒体。低频存储媒体，必须存储至少 30 天，提前删除或变更存储类型，仍旧按照 30 天计费；如果禁播低频存储媒体，该媒体低频存储的时长不足 30 天，会产生提前删除计费；同时，禁播后该媒体的低频存储时长会从当前时间重新开始计算，如果不满 30 天继续对该媒体进行删除或变更存储类型，也将产生提前删除计费。例：媒体 001 已经低频存储了 10 天，此时对 001 进行禁播，低频存储的计费仍旧按 30 天计算（提前删除计费时长为 30 - 10 = 20 天）；禁播后 001 的低频存储时长重新开始计算，如果禁播后第 5 天删除了 001，低频存储计费也会按 30 天计算（提前删除计费时长为 30 - 5 = 25 天）；001 实际的低频存储时长为 10 + 5 = 15 天，低频存储计费时长为 10 + 20(提前删除计费)+ 5 + 25(提前删除计费) = 60 天。
     */
  async ForbidMediaDistribution(
    req: ForbidMediaDistributionRequest,
    cb?: (error: string, rep: ForbidMediaDistributionResponse) => void
  ): Promise<ForbidMediaDistributionResponse> {
    return this.request("ForbidMediaDistribution", req, cb)
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
     * 修改用户自定义音视频内容分析模板。

注意：模板 ID 10000 以下的为系统预置模板，不允许修改。
     */
  async ModifyAIAnalysisTemplate(
    req: ModifyAIAnalysisTemplateRequest,
    cb?: (error: string, rep: ModifyAIAnalysisTemplateResponse) => void
  ): Promise<ModifyAIAnalysisTemplateResponse> {
    return this.request("ModifyAIAnalysisTemplate", req, cb)
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
     * 该 API 已经<font color='red'>不再维护</font>，新版播放器签名不再使用播放器配置模板，详细请参考 [播放器签名](https://cloud.tencent.com/document/product/266/45554)。
修改播放器配置。
     */
  async ModifySuperPlayerConfig(
    req: ModifySuperPlayerConfigRequest,
    cb?: (error: string, rep: ModifySuperPlayerConfigResponse) => void
  ): Promise<ModifySuperPlayerConfigResponse> {
    return this.request("ModifySuperPlayerConfig", req, cb)
  }

  /**
   * * 用于对媒体进行分类管理；
   * 该接口不影响既有媒体的分类，如需修改媒体分类，请调用[修改媒体文件属性](/document/product/266/31762)接口。
   * 分类层次不可超过 4 层。
   * 每个分类的子类数量不可超过 500 个。
   */
  async CreateClass(
    req: CreateClassRequest,
    cb?: (error: string, rep: CreateClassResponse) => void
  ): Promise<CreateClassResponse> {
    return this.request("CreateClass", req, cb)
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
     * 腾讯云点播为客户提供了媒体上传、媒体管理、媒体处理等等服务，在这些服务执行过程或执行结束时，腾讯云点播也提供各种对应的事件通知，方便开发者感知服务处理状态，并做下一步的业务操作。

开发者可以通过本接口来查询当前配置事件通知的接收方式、接收地址以及哪些事件开启了接收回调通知。

默认接口请求频率限制：100次/秒。
     */
  async DescribeEventConfig(
    req: DescribeEventConfigRequest,
    cb?: (error: string, rep: DescribeEventConfigResponse) => void
  ): Promise<DescribeEventConfigResponse> {
    return this.request("DescribeEventConfig", req, cb)
  }

  /**
   * 该接口用于修改应用信息，但不允许修改默认应用信息。
   */
  async ModifySubAppIdInfo(
    req: ModifySubAppIdInfoRequest,
    cb?: (error: string, rep: ModifySubAppIdInfoResponse) => void
  ): Promise<ModifySubAppIdInfoResponse> {
    return this.request("ModifySubAppIdInfo", req, cb)
  }

  /**
     * 该接口用于修改轮播播单。
修改后只有新的播放请求会生效，已经在播放中的用户在七天之内还可以播放修改前的播单。
     */
  async ModifyRoundPlay(
    req: ModifyRoundPlayRequest,
    cb?: (error: string, rep: ModifyRoundPlayResponse) => void
  ): Promise<ModifyRoundPlayResponse> {
    return this.request("ModifyRoundPlay", req, cb)
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
   * 查询采样截图模板，支持根据条件，分页查询。
   */
  async DescribeSampleSnapshotTemplates(
    req: DescribeSampleSnapshotTemplatesRequest,
    cb?: (error: string, rep: DescribeSampleSnapshotTemplatesResponse) => void
  ): Promise<DescribeSampleSnapshotTemplatesResponse> {
    return this.request("DescribeSampleSnapshotTemplates", req, cb)
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
     * 该 API 已经<font color=red>不再维护</font>，新版 [音画质重生](https://cloud.tencent.com/document/product/266/102571) 接口使用预置模板，详情请参见 [音画质重生模板](https://cloud.tencent.com/document/product/266/102586#50604b3f-0286-4a10-a3f7-18218116aff7)。
修改音画质重生模板。
     */
  async ModifyEnhanceMediaTemplate(
    req: ModifyEnhanceMediaTemplateRequest,
    cb?: (error: string, rep: ModifyEnhanceMediaTemplateResponse) => void
  ): Promise<ModifyEnhanceMediaTemplateResponse> {
    return this.request("ModifyEnhanceMediaTemplate", req, cb)
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
   * * 获得用户的所有分类信息。
   */
  async DescribeAllClass(
    req: DescribeAllClassRequest,
    cb?: (error: string, rep: DescribeAllClassResponse) => void
  ): Promise<DescribeAllClassResponse> {
    return this.request("DescribeAllClass", req, cb)
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
   * 创建用户自定义水印模板，数量上限：1000。
   */
  async CreateWatermarkTemplate(
    req: CreateWatermarkTemplateRequest,
    cb?: (error: string, rep: CreateWatermarkTemplateResponse) => void
  ): Promise<CreateWatermarkTemplateResponse> {
    return this.request("CreateWatermarkTemplate", req, cb)
  }

  /**
   * 设置 DRM 密钥提供商信息。
   */
  async SetDrmKeyProviderInfo(
    req: SetDrmKeyProviderInfoRequest,
    cb?: (error: string, rep: SetDrmKeyProviderInfoResponse) => void
  ): Promise<SetDrmKeyProviderInfoResponse> {
    return this.request("SetDrmKeyProviderInfo", req, cb)
  }

  /**
   * 获取即时转码模板列表。
   */
  async DescribeJustInTimeTranscodeTemplates(
    req: DescribeJustInTimeTranscodeTemplatesRequest,
    cb?: (error: string, rep: DescribeJustInTimeTranscodeTemplatesResponse) => void
  ): Promise<DescribeJustInTimeTranscodeTemplatesResponse> {
    return this.request("DescribeJustInTimeTranscodeTemplates", req, cb)
  }

  /**
     * 创建用户自定义审核模板，数量上限：50。
>模板仅适用于 [音视频审核(ReviewAudioVideo)](https://cloud.tencent.com/document/api/266/80283) 和 [图片审核(ReviewImage)](https://cloud.tencent.com/document/api/266/73217) 接口。
     */
  async CreateReviewTemplate(
    req: CreateReviewTemplateRequest,
    cb?: (error: string, rep: CreateReviewTemplateResponse) => void
  ): Promise<CreateReviewTemplateResponse> {
    return this.request("CreateReviewTemplate", req, cb)
  }

  /**
   * 根据音视频内容识别模板唯一标识，获取音视频内容识别模板详情列表。返回结果包含符合条件的所有用户自定义音视频内容识别模板及[系统预置音视频内容识别模板](https://cloud.tencent.com/document/product/266/33476#.E9.A2.84.E7.BD.AE.E8.A7.86.E9.A2.91.E5.86.85.E5.AE.B9.E8.AF.86.E5.88.AB.E6.A8.A1.E6.9D.BF)。
   */
  async DescribeAIRecognitionTemplates(
    req: DescribeAIRecognitionTemplatesRequest,
    cb?: (error: string, rep: DescribeAIRecognitionTemplatesResponse) => void
  ): Promise<DescribeAIRecognitionTemplatesResponse> {
    return this.request("DescribeAIRecognitionTemplates", req, cb)
  }

  /**
   * 删除音画质检测模板。
   */
  async DeleteQualityInspectTemplate(
    req: DeleteQualityInspectTemplateRequest,
    cb?: (error: string, rep: DeleteQualityInspectTemplateResponse) => void
  ): Promise<DeleteQualityInspectTemplateResponse> {
    return this.request("DeleteQualityInspectTemplate", req, cb)
  }

  /**
   * 获取音画质检测模板列表。
   */
  async DescribeQualityInspectTemplates(
    req: DescribeQualityInspectTemplatesRequest,
    cb?: (error: string, rep: DescribeQualityInspectTemplatesResponse) => void
  ): Promise<DescribeQualityInspectTemplatesResponse> {
    return this.request("DescribeQualityInspectTemplates", req, cb)
  }

  /**
   * 创建即时转码模板。
   */
  async CreateJustInTimeTranscodeTemplate(
    req: CreateJustInTimeTranscodeTemplateRequest,
    cb?: (error: string, rep: CreateJustInTimeTranscodeTemplateResponse) => void
  ): Promise<CreateJustInTimeTranscodeTemplateResponse> {
    return this.request("CreateJustInTimeTranscodeTemplate", req, cb)
  }

  /**
     * 该 API 已经<font color='red'>不再维护</font>，新版播放器签名不再使用播放器配置模板，详细请参考 [播放器签名](https://cloud.tencent.com/document/product/266/45554)。
查询播放器配置，支持根据条件，分页查询。
     */
  async DescribeSuperPlayerConfigs(
    req: DescribeSuperPlayerConfigsRequest,
    cb?: (error: string, rep: DescribeSuperPlayerConfigsResponse) => void
  ): Promise<DescribeSuperPlayerConfigsResponse> {
    return this.request("DescribeSuperPlayerConfigs", req, cb)
  }

  /**
   * 该接口用于获取当前账号的应用列表。
   */
  async DescribeSubAppIds(
    req: DescribeSubAppIdsRequest,
    cb?: (error: string, rep: DescribeSubAppIdsResponse) => void
  ): Promise<DescribeSubAppIdsResponse> {
    return this.request("DescribeSubAppIds", req, cb)
  }

  /**
   * 获取片头片尾模板列表。
   */
  async DescribeHeadTailTemplates(
    req: DescribeHeadTailTemplatesRequest,
    cb?: (error: string, rep: DescribeHeadTailTemplatesResponse) => void
  ): Promise<DescribeHeadTailTemplatesResponse> {
    return this.request("DescribeHeadTailTemplates", req, cb)
  }

  /**
   * 该接口用于查询默认分发配置。
   * 分发域名和分发协议，即媒体文件分发 URL 中的域名和协议。媒体文件按默认分发配置进行分发。
   * 播放密钥，用于计算播放器签名。
   */
  async DescribeDefaultDistributionConfig(
    req: DescribeDefaultDistributionConfigRequest,
    cb?: (error: string, rep: DescribeDefaultDistributionConfigResponse) => void
  ): Promise<DescribeDefaultDistributionConfigResponse> {
    return this.request("DescribeDefaultDistributionConfig", req, cb)
  }

  /**
     * 获取审核模板列表。
>模板仅适用于 [音视频审核(ReviewAudioVideo)](https://cloud.tencent.com/document/api/266/80283) 和 [图片审核(ReviewImage)](https://cloud.tencent.com/document/api/266/73217) 接口。
     */
  async DescribeReviewTemplates(
    req: DescribeReviewTemplatesRequest,
    cb?: (error: string, rep: DescribeReviewTemplatesResponse) => void
  ): Promise<DescribeReviewTemplatesResponse> {
    return this.request("DescribeReviewTemplates", req, cb)
  }

  /**
   * 该接口用于确认媒体文件（和封面文件）上传到腾讯云点播的结果，并存储媒体信息，返回文件的播放地址和文件 ID。
   */
  async CommitUpload(
    req: CommitUploadRequest,
    cb?: (error: string, rep: CommitUploadResponse) => void
  ): Promise<CommitUploadResponse> {
    return this.request("CommitUpload", req, cb)
  }

  /**
   * 修改用户自定义音视频内容识别模板。
   */
  async ModifyAIRecognitionTemplate(
    req: ModifyAIRecognitionTemplateRequest,
    cb?: (error: string, rep: ModifyAIRecognitionTemplateResponse) => void
  ): Promise<ModifyAIRecognitionTemplateResponse> {
    return this.request("ModifyAIRecognitionTemplate", req, cb)
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
     * 搜索媒体信息，支持多种条件筛选，以及支持对返回结果排序、过滤等功能，具体包括：
- 指定文件 ID 集合 FileIds ，返回匹配集合中任意 ID 的媒体。
- 根据多个媒体文件名 Names 或描述信息 Descriptions 进行模糊搜索。
- 根据多个文件名前缀 NamePrefixes 进行搜索。
- 指定分类集合 ClassIds（见输入参数），返回满足集合中任意分类的媒体。例如：媒体分类有电影、电视剧、综艺等，其中电影分类下又有子分类历史片、动作片、言情片。如果 ClassIds 指定了电影、电视剧，那么电影和电视剧下的所有子分类都会返回；而如果 ClassIds 指定的是历史片、动作片，那么只有这2个子分类下的媒体才会返回。
- 指定标签集合 Tags（见输入参数），返回满足集合中任意标签的媒体。例如：媒体标签有二次元、宫斗、鬼畜，如果 Tags 指定了二次元、鬼畜2个标签，那么只要符合这2个标签中任意一个的媒体都会被检索出来。
- 指定文件类型集合 Categories（见输入参数），返回满足集合中任意类型的媒体。例如：文件类型有 Video（视频）、 Audio （音频）、 Image （图片）。如果Categories指定了 Video 和 Audio 2个文件类型，那么符合这些类型的媒体都会被检索出来。
- 指定来源集合 SourceTypes（见输入参数），返回满足集合中任意来源的媒体。例如：媒体来源有 Record (直播录制)、Upload （上传）等。如果 SourceTypes 指定了 Record 和 Upload ，那么符合这些来源的媒体都会被检索出来。
- 指定文件封装格式集合 MediaTypes（见输入参数），返回满足集合中任意封装格式的媒体。例如：封装格式有 MP4、AVI、MP3 等。如果 MediaTypes 指定了 MP4 和 MP3，那么符合这些封装格式的媒体都会被检索出来。
- 指定文件状态集合 Status（见输入参数），返回满足集合中任意状态的媒体。例如：文件状态有 Normal（正常）、SystemForbidden（平台封禁）、Forbidden（主动封禁）。如果 Status 指定了 Normal 和 Forbidden 2种文件状态，那么符合这些状态的媒体都会被检索出来。
- 指定文件审核结果集合 ReviewResults（见输入参数），返回满足集合中任意状态的媒体。例如：文件审核结果有 pass（通过）、block（违规）等。如果 ReviewResults 指定了 pass 和 block 2种审核结果，那么符合这些审核结果的媒体都会被检索出来。
- 指定直播推流码集合 StreamIds（见输入参数）筛选直播录制的媒体。
- 指定媒体的创建时间范围筛选媒体。
- 指定 TRTC 应用 ID 集合筛选媒体。
- 指定 TRTC 房间 ID 集合筛选媒体。

- 以上参数之间可以任意组合进行检索。例如：筛选创建时间在2018年12月1日12:00:00到2018年12月8日12:00:00之间、分类为电影或电视剧、带有宫斗和悬疑标签的媒体。注意，任何支持数组输入的参数，其元素之间的搜索逻辑为‘或’。所有参数之间的逻辑关系为‘与’。

- 允许通过 Filters 控制返回的媒体信息种类（默认返回所有信息）。可选输入包括：
    1. 基础信息（basicInfo）：包括媒体名称、分类、播放地址、封面图片等。
    2. 元信息（metaData）：包括大小、时长、视频流信息、音频流信息等。
    3. 转码结果信息（transcodeInfo）：包括该媒体转码生成的各种规格的媒体地址、视频流参数、音频流参数等。
    4. 转动图结果信息（animatedGraphicsInfo）：对视频转动图（如 gif）后的动图信息。
    5. 采样截图信息（sampleSnapshotInfo）：对视频采样截图后的截图信息。
    6. 雪碧图信息（imageSpriteInfo）：对视频截取雪碧图后的雪碧图信息。
    7. 指定时间点截图信息（snapshotByTimeOffsetInfo）：对视频依照指定时间点截图后，的截图信息。
    8. 视频打点信息（keyFrameDescInfo）：对视频设置的打点信息。
    9. 转自适应码流信息（adaptiveDynamicStreamingInfo）：包括规格、加密类型、打包格式等相关信息。

- 允许对结果根据创建时间进行排序并分页返回，通过 Offset 和 Limit （见输入参数）来控制分页。

<div id="maxResultsDesc">接口返回结果数限制：</div>
- <b><a href="#p_offset">Offset</a> 和 <a href="#p_limit">Limit</a> 两个参数影响单次分页查询结果数。特别注意：当这2个值都缺省时，本接口最多只返回10条查询结果。</b>
- <b>最大支持返回5000条搜索结果，超出部分不再支持查询。如果搜索结果量太大，建议使用更精细的筛选条件来减少搜索结果。</b>

<br>不推荐使用的条件筛选：
- （不推荐：应使用 Names、NamePrefixes 或 Descriptions 替代）指定单个文本 Text 对媒体文件名或描述信息进行模糊搜索。
- （不推荐：应使用 SourceTypes 替代）指定单个媒体文件来源 SourceType 进行搜索。
- （不推荐：应使用 StreamIds 替代）指定单个推流直播码 StreamId 进行搜索。
- （不推荐：应使用 CreateTime 替代）指定单个起始创建时间 StartTime 进行搜索。
- （不推荐：应使用 CreateTime 替代）指定单个结尾创建时间 EndTime 进行搜索。
     */
  async SearchMedia(
    req: SearchMediaRequest,
    cb?: (error: string, rep: SearchMediaResponse) => void
  ): Promise<SearchMediaResponse> {
    return this.request("SearchMedia", req, cb)
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
   * 删除即时转码模板。
   */
  async DeleteJustInTimeTranscodeTemplate(
    req: DeleteJustInTimeTranscodeTemplateRequest,
    cb?: (error: string, rep: DeleteJustInTimeTranscodeTemplateResponse) => void
  ): Promise<DeleteJustInTimeTranscodeTemplateResponse> {
    return this.request("DeleteJustInTimeTranscodeTemplate", req, cb)
  }

  /**
   * 该接口用于根据人物 ID，删除素材样本。
   */
  async DeletePersonSample(
    req: DeletePersonSampleRequest,
    cb?: (error: string, rep: DeletePersonSampleResponse) => void
  ): Promise<DeletePersonSampleResponse> {
    return this.request("DeletePersonSample", req, cb)
  }

  /**
     * 该 API 已经<font color=red>不再维护</font>，新版 [音画质重生](https://cloud.tencent.com/document/product/266/102571) 接口使用预置模板，详情请参见 [音画质重生模板](https://cloud.tencent.com/document/product/266/102586#50604b3f-0286-4a10-a3f7-18218116aff7)。
获取音画质重生模板列表。
     */
  async DescribeEnhanceMediaTemplates(
    req: DescribeEnhanceMediaTemplatesRequest,
    cb?: (error: string, rep: DescribeEnhanceMediaTemplatesResponse) => void
  ): Promise<DescribeEnhanceMediaTemplatesResponse> {
    return this.request("DescribeEnhanceMediaTemplates", req, cb)
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
   * 修改用户自定义转动图模板。
   */
  async ModifyAnimatedGraphicsTemplate(
    req: ModifyAnimatedGraphicsTemplateRequest,
    cb?: (error: string, rep: ModifyAnimatedGraphicsTemplateResponse) => void
  ): Promise<ModifyAnimatedGraphicsTemplateResponse> {
    return this.request("ModifyAnimatedGraphicsTemplate", req, cb)
  }

  /**
   * 关联媒资字幕，将指定的字幕关联到转自适应码流模板号对应的媒体输出文件中（或解除关联）。
   */
  async AttachMediaSubtitles(
    req: AttachMediaSubtitlesRequest,
    cb?: (error: string, rep: AttachMediaSubtitlesResponse) => void
  ): Promise<AttachMediaSubtitlesResponse> {
    return this.request("AttachMediaSubtitles", req, cb)
  }

  /**
     * 腾讯云点播为客户提供了媒体上传、媒体管理、媒体处理等等服务，在这些服务执行过程或执行结束时，腾讯云点播也提供各种对应的事件通知，方便开发者感知服务处理状态，并做下一步的业务操作。

开发者可以通过调用本接口来实现：
- 设置接收回调通知的类型，目前有[ HTTP 回调通知](https://cloud.tencent.com/document/product/266/33779) 和 [基于消息队列的可靠通知](https://cloud.tencent.com/document/product/266/33779) 两种类型。
- 对于[ HTTP 回调通知](https://cloud.tencent.com/document/product/266/33779)，可设置 3.0 格式回调的地址。3.0 格式回调的说明参见 [历史格式回调](https://cloud.tencent.com/document/product/266/33796)。
- 对具体事件服务的通知事件选择设置接收或者忽略。
     */
  async ModifyEventConfig(
    req: ModifyEventConfigRequest,
    cb?: (error: string, rep: ModifyEventConfigResponse) => void
  ): Promise<ModifyEventConfigResponse> {
    return this.request("ModifyEventConfig", req, cb)
  }

  /**
   * 修改媒体文件的属性，包括分类、名称、描述、标签、过期时间、打点信息、视频封面、字幕信息等。
   */
  async ModifyMediaInfo(
    req: ModifyMediaInfoRequest,
    cb?: (error: string, rep: ModifyMediaInfoResponse) => void
  ): Promise<ModifyMediaInfoResponse> {
    return this.request("ModifyMediaInfo", req, cb)
  }

  /**
     * 对点播中的图片文件发起审核（令人反感的信息、不安全的信息、不适宜的信息）任务。

><li>图片文件大小支持：文件 < 5M；</li>
><li>图片文件分辨率支持：建议分辨率大于256x256，否则可能会影响审核效果；</li>
><li>图片文件支持格式：PNG、JPG、JPEG、BMP、GIF、WEBP格式。</li>
     */
  async ReviewImage(
    req: ReviewImageRequest,
    cb?: (error: string, rep: ReviewImageResponse) => void
  ): Promise<ReviewImageResponse> {
    return this.request("ReviewImage", req, cb)
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
     * 将点播视频发布到微信小程序，供微信小程序播放器播放。
本接口支持发布原始视频和转码后视频，暂不支持发布自适应码流。
     */
  async WeChatMiniProgramPublish(
    req: WeChatMiniProgramPublishRequest,
    cb?: (error: string, rep: WeChatMiniProgramPublishResponse) => void
  ): Promise<WeChatMiniProgramPublishResponse> {
    return this.request("WeChatMiniProgramPublish", req, cb)
  }

  /**
     * 对 HLS 视频进行按时间段裁剪，实时生成一个新的视频（HLS 格式），开发者可以将其立即分享出去，或者长久保存起来。

腾讯云点播支持两种剪辑模式：
- 剪辑固化：将剪辑出来的视频保存成独立的视频，拥有独立 FileId；适用于将精彩片段长久保存的场景；
- 剪辑不固化：剪辑得到的视频附属于输入文件，没有独立 FileId；适用于将精彩片段临时分享的场景。

裁剪精度支持粗略裁剪和精确裁剪：
- 粗略剪辑：基于输入 m3u8 文件进行裁剪，其最小剪辑精度为一个 ts 切片，无法实现秒级或者更为精确的剪辑精度。
- 精确剪辑：按照 StartTimeOffset 和 EndTimeOffset 参数进行精确裁剪。使用精确裁剪需要开通[即时转码](/document/product/266/102174)的功能。

### 剪辑固化
所谓剪辑固化，是指将剪辑出来的视频保存成一个独立的视频（拥有独立的 FileId）。其生命周期不受原始输入视频影响（即使原始输入视频被删除，剪辑结果也不会受到任何影响）；也可以对其进行转码、微信发布等二次处理。

举例如下：一场完整的足球比赛，原始视频可能长达 2 个小时，客户出于节省成本的目的可以对这个视频存储 2 个月，但对于剪辑的「精彩时刻」视频却可以指定存储更长时间，同时可以单独对「精彩时刻」视频进行转码、微信发布等额外的点播操作，这时候可以选择剪辑并且固化的方案。

剪辑固化的优势在于其生命周期与原始输入视频相互独立，可以独立管理、长久保存。

<font color='red'>注意：</font>如果剪辑时指定进行固化，通过 ModifyEventConfig 接口启用接收剪辑固化事件通知，固化成功后将会收到一个 PersitenceComplete 类型的事件通知。在收到这个事件通知之前，不应该对原始输入的视频进行删除、降冷等操作，否则剪辑生成的视频播放可能出现异常。

### 剪辑不固化
所谓剪辑不固化，是指剪辑所得到的结果（m3u8 文件）与原始输入视频共享相同的 ts 分片，新生成的视频不是一个独立完整的视频（没有独立 FileId，只有播放 URL），其有效期与原始输入的完整视频有效期是一致的。一旦原始输入的视频被删除，也会导致该片段无法播放。

剪辑不固化，由于其剪辑结果不是一个独立的视频，因而也不会纳入点播媒资视频管理（例如控制台的视频总数不会统计这一片段）中，也无法单独针对这个片段做转码、微信发布等任何视频处理操作。

剪辑不固化的优势在于其剪辑操作十分“轻量化”，不会产生额外的存储开销。但其不足之处在于生命周期与原始录制视频相同，且无法进一步进行转码等视频处理。
     */
  async SimpleHlsClip(
    req: SimpleHlsClipRequest,
    cb?: (error: string, rep: SimpleHlsClipResponse) => void
  ): Promise<SimpleHlsClipResponse> {
    return this.request("SimpleHlsClip", req, cb)
  }

  /**
   * 设置点播域名 HTTPS 证书。
   */
  async SetVodDomainCertificate(
    req: SetVodDomainCertificateRequest,
    cb?: (error: string, rep: SetVodDomainCertificateResponse) => void
  ): Promise<SetVodDomainCertificateResponse> {
    return this.request("SetVodDomainCertificate", req, cb)
  }

  /**
     * 1. 该接口可以获取多个媒体文件的多种信息，包括：
    1. 基础信息（basicInfo）：包括媒体名称、分类、播放地址、封面图片等。
    2. 元信息（metaData）：包括大小、时长、视频流信息、音频流信息等。
    3. 转码结果信息（transcodeInfo）：包括该媒体转码生成的各种规格的媒体地址、视频流参数、音频流参数等。
    4. 转动图结果信息（animatedGraphicsInfo）：对视频转动图（如 gif）后的动图信息。
    5. 采样截图信息（sampleSnapshotInfo）：对视频采样截图后的截图信息。
    6. 雪碧图信息（imageSpriteInfo）：对视频截取雪碧图后的雪碧图信息。
    7. 指定时间点截图信息（snapshotByTimeOffsetInfo）：对视频依照指定时间点截图后，的截图信息。
    8. 视频打点信息（keyFrameDescInfo）：对视频设置的打点信息。
    9. 转自适应码流信息（adaptiveDynamicStreamingInfo）：包括规格、加密类型、打包格式等相关信息。
    10. 审核信息（reviewInfo）：包括媒体审核及媒体封面审核信息。
2. 可以指定回包只返回部分信息。
     */
  async DescribeMediaInfos(
    req: DescribeMediaInfosRequest,
    cb?: (error: string, rep: DescribeMediaInfosResponse) => void
  ): Promise<DescribeMediaInfosResponse> {
    return this.request("DescribeMediaInfos", req, cb)
  }

  /**
     * 该 API 已经<font color=red>不再维护</font>，请使用新版接口 [音画质重生](https://cloud.tencent.com/document/api/266/102571)。
使用模板发起视频重生。
     */
  async RebuildMediaByTemplate(
    req: RebuildMediaByTemplateRequest,
    cb?: (error: string, rep: RebuildMediaByTemplateResponse) => void
  ): Promise<RebuildMediaByTemplateResponse> {
    return this.request("RebuildMediaByTemplate", req, cb)
  }

  /**
   * 删除片头片尾模板。
   */
  async DeleteHeadTailTemplate(
    req: DeleteHeadTailTemplateRequest,
    cb?: (error: string, rep: DeleteHeadTailTemplateResponse) => void
  ): Promise<DeleteHeadTailTemplateResponse> {
    return this.request("DeleteHeadTailTemplate", req, cb)
  }

  /**
   * 该接口用于创建素材样本，用于通过五官定位等技术，进行内容识别、不适宜视频识别等视频处理。
   */
  async CreatePersonSample(
    req: CreatePersonSampleRequest,
    cb?: (error: string, rep: CreatePersonSampleResponse) => void
  ): Promise<CreatePersonSampleResponse> {
    return this.request("CreatePersonSample", req, cb)
  }

  /**
   * 该接口用于启用、停用应用。被停用的应用将封停对应域名，并限制控制台访问。
   */
  async ModifySubAppIdStatus(
    req: ModifySubAppIdStatusRequest,
    cb?: (error: string, rep: ModifySubAppIdStatusResponse) => void
  ): Promise<ModifySubAppIdStatusResponse> {
    return this.request("ModifySubAppIdStatus", req, cb)
  }

  /**
   * 该接口用于删除轮播播单。
   */
  async DeleteRoundPlay(
    req: DeleteRoundPlayRequest,
    cb?: (error: string, rep: DeleteRoundPlayResponse) => void
  ): Promise<DeleteRoundPlayResponse> {
    return this.request("DeleteRoundPlay", req, cb)
  }

  /**
   * 修改媒体分类属性。
   */
  async ModifyClass(
    req: ModifyClassRequest,
    cb?: (error: string, rep: ModifyClassResponse) => void
  ): Promise<ModifyClassResponse> {
    return this.request("ModifyClass", req, cb)
  }

  /**
     * 该 API 已经<font color=red>不再维护</font>，新版审核模板支持音视频审核和图片审核，详细请参考 [修改审核模板](https://cloud.tencent.com/document/api/266/84388)。
修改用户自定义音视频内容审核模板。
     */
  async ModifyContentReviewTemplate(
    req: ModifyContentReviewTemplateRequest,
    cb?: (error: string, rep: ModifyContentReviewTemplateResponse) => void
  ): Promise<ModifyContentReviewTemplateResponse> {
    return this.request("ModifyContentReviewTemplate", req, cb)
  }

  /**
     * 该接口用于删除点播加速域名。
1、域名删除前需要先关闭所有区域的加速。
     */
  async DeleteVodDomain(
    req: DeleteVodDomainRequest,
    cb?: (error: string, rep: DeleteVodDomainResponse) => void
  ): Promise<DeleteVodDomainResponse> {
    return this.request("DeleteVodDomain", req, cb)
  }

  /**
   * 创建用户自定义音视频内容识别模板，数量上限：50。
   */
  async CreateAIRecognitionTemplate(
    req: CreateAIRecognitionTemplateRequest,
    cb?: (error: string, rep: CreateAIRecognitionTemplateResponse) => void
  ): Promise<CreateAIRecognitionTemplateResponse> {
    return this.request("CreateAIRecognitionTemplate", req, cb)
  }

  /**
     * 该 API 已经<font color=red>不再维护</font>，新版 [音画质重生](https://cloud.tencent.com/document/product/266/102571) 接口使用预置模板，详情请参见 [音画质重生模板](https://cloud.tencent.com/document/product/266/102586#50604b3f-0286-4a10-a3f7-18218116aff7)。
删除音画质重生模板。
     */
  async DeleteEnhanceMediaTemplate(
    req: DeleteEnhanceMediaTemplateRequest,
    cb?: (error: string, rep: DeleteEnhanceMediaTemplateResponse) => void
  ): Promise<DeleteEnhanceMediaTemplateResponse> {
    return this.request("DeleteEnhanceMediaTemplate", req, cb)
  }

  /**
     * 该 API 已经<font color=red>不再维护</font>，新版 [音画质重生](https://cloud.tencent.com/document/product/266/102571) 接口使用预置模板，详情请参见 [音画质重生模板](https://cloud.tencent.com/document/product/266/102586#50604b3f-0286-4a10-a3f7-18218116aff7)。
获取视频重生模板列表。
     */
  async DescribeRebuildMediaTemplates(
    req: DescribeRebuildMediaTemplatesRequest,
    cb?: (error: string, rep: DescribeRebuildMediaTemplatesResponse) => void
  ): Promise<DescribeRebuildMediaTemplatesResponse> {
    return this.request("DescribeRebuildMediaTemplates", req, cb)
  }

  /**
     * 该接口用于查询播放统计文件的下载地址。
* 可以查询最近一年的播放统计文件下载地址，查询的起始日期和结束日期的时间跨度不超过90天。
* 云点播每天对前一天的 CDN 请求日志进行分析处理，生成播放统计文件。
* 播放统计文件内容包含媒体文件的播放次数、播放流量等统计信息。
* 播放次数统计说明：
    1. HLS 文件：访问M3U8 文件时统计播放次数；访问TS 文件不统计播放次数。
    2. 其它文件（如 MP4 文件）：播放请求带有 range 参数且 range 的 start 参数不等于0时不统计播放次数，其它情况统计播放次数。
* 播放设备的统计：播放请求带了 UserAgent 参数，并且 UserAgent 包含 Android 或者 iPhone 等标识，会统计为移动端播放次数，否则统计为 PC 端播放次数。
* 播放统计仅针对 VOD 域名（即 EdgeOne 域名的分发不计入播放统计）。
     */
  async DescribeDailyPlayStatFileList(
    req: DescribeDailyPlayStatFileListRequest,
    cb?: (error: string, rep: DescribeDailyPlayStatFileListResponse) => void
  ): Promise<DescribeDailyPlayStatFileListResponse> {
    return this.request("DescribeDailyPlayStatFileList", req, cb)
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

  /**
   * 当媒体文件的存储类型是归档存储或深度归档存储时，是不可访问的。如需访问，则需要调用本接口进行解冻，解冻后可访问的媒体文件是临时的，在有效期过后，则不可访问。
   */
  async RestoreMedia(
    req: RestoreMediaRequest,
    cb?: (error: string, rep: RestoreMediaResponse) => void
  ): Promise<RestoreMediaResponse> {
    return this.request("RestoreMedia", req, cb)
  }
}
