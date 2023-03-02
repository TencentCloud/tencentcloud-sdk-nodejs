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
const models = require("./models");
const AbstractClient = require('../../common/abstract_client')
const ModifySnapshotByTimeOffsetTemplateResponse = models.ModifySnapshotByTimeOffsetTemplateResponse;
const ModifySampleSnapshotTemplateResponse = models.ModifySampleSnapshotTemplateResponse;
const ModifyWatermarkTemplateRequest = models.ModifyWatermarkTemplateRequest;
const DescribeInputRTPSettings = models.DescribeInputRTPSettings;
const AiRecognitionTaskAsrFullTextSegmentItem = models.AiRecognitionTaskAsrFullTextSegmentItem;
const DeleteStreamLinkFlowRequest = models.DeleteStreamLinkFlowRequest;
const FrameRateConfig = models.FrameRateConfig;
const OverrideTranscodeParameter = models.OverrideTranscodeParameter;
const AiAnalysisTaskClassificationInput = models.AiAnalysisTaskClassificationInput;
const SvgWatermarkInput = models.SvgWatermarkInput;
const WorkflowInfo = models.WorkflowInfo;
const CreateTranscodeTemplateRequest = models.CreateTranscodeTemplateRequest;
const ProcessLiveStreamResponse = models.ProcessLiveStreamResponse;
const CreateOutputSRTSettings = models.CreateOutputSRTSettings;
const ModifyStreamLinkOutputInfoResponse = models.ModifyStreamLinkOutputInfoResponse;
const DescribeAnimatedGraphicsTemplatesRequest = models.DescribeAnimatedGraphicsTemplatesRequest;
const AiReviewTaskProhibitedAsrResult = models.AiReviewTaskProhibitedAsrResult;
const AdaptiveDynamicStreamingTemplate = models.AdaptiveDynamicStreamingTemplate;
const DeleteAnimatedGraphicsTemplateResponse = models.DeleteAnimatedGraphicsTemplateResponse;
const AiReviewTaskProhibitedOcrResult = models.AiReviewTaskProhibitedOcrResult;
const AiRecognitionTaskAsrFullTextResultOutput = models.AiRecognitionTaskAsrFullTextResultOutput;
const AiReviewProhibitedOcrTaskOutput = models.AiReviewProhibitedOcrTaskOutput;
const ManageTaskResponse = models.ManageTaskResponse;
const FlowMediaInfo = models.FlowMediaInfo;
const DeleteWorkflowRequest = models.DeleteWorkflowRequest;
const DescribeRTMPPullSourceAddress = models.DescribeRTMPPullSourceAddress;
const DescribeOutputRTMPPullSettings = models.DescribeOutputRTMPPullSettings;
const UserDefineOcrTextReviewTemplateInfoForUpdate = models.UserDefineOcrTextReviewTemplateInfoForUpdate;
const ModifyOutputInfo = models.ModifyOutputInfo;
const MediaSnapshotByTimeOffsetItem = models.MediaSnapshotByTimeOffsetItem;
const NumberFormat = models.NumberFormat;
const ModifySampleSnapshotTemplateRequest = models.ModifySampleSnapshotTemplateRequest;
const AiReviewPoliticalOcrTaskInput = models.AiReviewPoliticalOcrTaskInput;
const EnhanceConfig = models.EnhanceConfig;
const MediaInputInfo = models.MediaInputInfo;
const CreateWorkflowRequest = models.CreateWorkflowRequest;
const OcrWordsConfigureInfo = models.OcrWordsConfigureInfo;
const RawWatermarkParameter = models.RawWatermarkParameter;
const AiReviewTaskPoliticalOcrResult = models.AiReviewTaskPoliticalOcrResult;
const ManageTaskRequest = models.ManageTaskRequest;
const CreateImageSpriteTemplateRequest = models.CreateImageSpriteTemplateRequest;
const MediaSnapshotByTimePicInfoItem = models.MediaSnapshotByTimePicInfoItem;
const UserDefineFaceReviewTemplateInfo = models.UserDefineFaceReviewTemplateInfo;
const CreateInputHLSPullSettings = models.CreateInputHLSPullSettings;
const ContentReviewTemplateItem = models.ContentReviewTemplateItem;
const ModifyStreamLinkFlowResponse = models.ModifyStreamLinkFlowResponse;
const DeleteAIRecognitionTemplateResponse = models.DeleteAIRecognitionTemplateResponse;
const VideoEnhanceConfig = models.VideoEnhanceConfig;
const DeleteContentReviewTemplateRequest = models.DeleteContentReviewTemplateRequest;
const StartStreamLinkFlowResponse = models.StartStreamLinkFlowResponse;
const AiReviewPoliticalTaskInput = models.AiReviewPoliticalTaskInput;
const CreateOutputRTPSettingsDestinations = models.CreateOutputRTPSettingsDestinations;
const ClassificationConfigureInfo = models.ClassificationConfigureInfo;
const MediaAiAnalysisClassificationItem = models.MediaAiAnalysisClassificationItem;
const ModifyWordSampleResponse = models.ModifyWordSampleResponse;
const AudioTemplateInfoForUpdate = models.AudioTemplateInfoForUpdate;
const SuperResolutionConfig = models.SuperResolutionConfig;
const DeletePersonSampleRequest = models.DeletePersonSampleRequest;
const DescribeStreamLinkFlowsResponse = models.DescribeStreamLinkFlowsResponse;
const MediaSampleSnapshotItem = models.MediaSampleSnapshotItem;
const AiContentReviewResult = models.AiContentReviewResult;
const ParseLiveStreamProcessNotificationResponse = models.ParseLiveStreamProcessNotificationResponse;
const AiRecognitionTaskInput = models.AiRecognitionTaskInput;
const AudioTemplateInfo = models.AudioTemplateInfo;
const ExecuteFunctionResponse = models.ExecuteFunctionResponse;
const CoverConfigureInfo = models.CoverConfigureInfo;
const AIRecognitionTemplateItem = models.AIRecognitionTemplateItem;
const AiReviewPornAsrTaskInput = models.AiReviewPornAsrTaskInput;
const AiRecognitionTaskFaceResult = models.AiRecognitionTaskFaceResult;
const CreateAdaptiveDynamicStreamingTemplateRequest = models.CreateAdaptiveDynamicStreamingTemplateRequest;
const CreateInputRTMPPullSettings = models.CreateInputRTMPPullSettings;
const TerrorismImgReviewTemplateInfoForUpdate = models.TerrorismImgReviewTemplateInfoForUpdate;
const ModifyTranscodeTemplateRequest = models.ModifyTranscodeTemplateRequest;
const ModifyStreamLinkFlowRequest = models.ModifyStreamLinkFlowRequest;
const DeleteAIAnalysisTemplateResponse = models.DeleteAIAnalysisTemplateResponse;
const TextWatermarkTemplateInputForUpdate = models.TextWatermarkTemplateInputForUpdate;
const AiReviewTerrorismOcrTaskInput = models.AiReviewTerrorismOcrTaskInput;
const AiRecognitionTaskOcrWordsResultInput = models.AiRecognitionTaskOcrWordsResultInput;
const DeleteWorkflowResponse = models.DeleteWorkflowResponse;
const AiReviewPornTaskInput = models.AiReviewPornTaskInput;
const HdrConfig = models.HdrConfig;
const ScheduleTask = models.ScheduleTask;
const CreatePersonSampleRequest = models.CreatePersonSampleRequest;
const DescribeOutputHLSPullServerUrl = models.DescribeOutputHLSPullServerUrl;
const DescribeStreamLinkFlowSRTStatisticsRequest = models.DescribeStreamLinkFlowSRTStatisticsRequest;
const MediaAiAnalysisCoverItem = models.MediaAiAnalysisCoverItem;
const CosInputInfo = models.CosInputInfo;
const TagConfigureInfo = models.TagConfigureInfo;
const DescribeWordSamplesResponse = models.DescribeWordSamplesResponse;
const FlowStatisticsArray = models.FlowStatisticsArray;
const DeleteAIRecognitionTemplateRequest = models.DeleteAIRecognitionTemplateRequest;
const DescribeInputSRTSettings = models.DescribeInputSRTSettings;
const AiAnalysisTaskCoverResult = models.AiAnalysisTaskCoverResult;
const EnableWorkflowRequest = models.EnableWorkflowRequest;
const CreateStreamLinkFlowResponse = models.CreateStreamLinkFlowResponse;
const AiAnalysisTaskClassificationOutput = models.AiAnalysisTaskClassificationOutput;
const SRTAddressDestination = models.SRTAddressDestination;
const FlowRealtimeStatusItem = models.FlowRealtimeStatusItem;
const AiRecognitionTaskOcrFullTextResultOutput = models.AiRecognitionTaskOcrFullTextResultOutput;
const EditMediaTaskInput = models.EditMediaTaskInput;
const UserDefineAsrTextReviewTemplateInfo = models.UserDefineAsrTextReviewTemplateInfo;
const AiRecognitionTaskOcrWordsResultOutput = models.AiRecognitionTaskOcrWordsResultOutput;
const AiSampleFaceInfo = models.AiSampleFaceInfo;
const CreateInputRTSPPullSettings = models.CreateInputRTSPPullSettings;
const CreateStreamLinkFlowRequest = models.CreateStreamLinkFlowRequest;
const CreateOutputSRTSettingsDestinations = models.CreateOutputSRTSettingsDestinations;
const RecognizeMediaForZhiXueRequest = models.RecognizeMediaForZhiXueRequest;
const MediaProcessTaskAdaptiveDynamicStreamingResult = models.MediaProcessTaskAdaptiveDynamicStreamingResult;
const OcrWordsConfigureInfoForUpdate = models.OcrWordsConfigureInfoForUpdate;
const WatermarkTemplate = models.WatermarkTemplate;
const TextWatermarkTemplateInput = models.TextWatermarkTemplateInput;
const ModifyAIAnalysisTemplateResponse = models.ModifyAIAnalysisTemplateResponse;
const DescribeAIRecognitionTemplatesResponse = models.DescribeAIRecognitionTemplatesResponse;
const ScratchRepairConfig = models.ScratchRepairConfig;
const LiveStreamAiReviewResultInfo = models.LiveStreamAiReviewResultInfo;
const EditMediaResponse = models.EditMediaResponse;
const PoliticalOcrReviewTemplateInfoForUpdate = models.PoliticalOcrReviewTemplateInfoForUpdate;
const CreateOutputRtmpSettingsDestinations = models.CreateOutputRtmpSettingsDestinations;
const PornAsrReviewTemplateInfoForUpdate = models.PornAsrReviewTemplateInfoForUpdate;
const DescribeSnapshotByTimeOffsetTemplatesRequest = models.DescribeSnapshotByTimeOffsetTemplatesRequest;
const ScheduleRecognitionTaskResult = models.ScheduleRecognitionTaskResult;
const AiRecognitionTaskAsrFullTextResultInput = models.AiRecognitionTaskAsrFullTextResultInput;
const DescribeInputRTMPPullSettings = models.DescribeInputRTMPPullSettings;
const MediaProcessTaskInput = models.MediaProcessTaskInput;
const RTMPPullSourceAddress = models.RTMPPullSourceAddress;
const CosOutputStorage = models.CosOutputStorage;
const AiRecognitionTaskFaceSegmentItem = models.AiRecognitionTaskFaceSegmentItem;
const ProcessMediaResponse = models.ProcessMediaResponse;
const CreateWordSamplesResponse = models.CreateWordSamplesResponse;
const ClassificationConfigureInfoForUpdate = models.ClassificationConfigureInfoForUpdate;
const DeleteAdaptiveDynamicStreamingTemplateResponse = models.DeleteAdaptiveDynamicStreamingTemplateResponse;
const CreateAnimatedGraphicsTemplateRequest = models.CreateAnimatedGraphicsTemplateRequest;
const ParseNotificationRequest = models.ParseNotificationRequest;
const CreateWordSamplesRequest = models.CreateWordSamplesRequest;
const PoliticalAsrReviewTemplateInfoForUpdate = models.PoliticalAsrReviewTemplateInfoForUpdate;
const DescribeStreamLinkFlowStatisticsRequest = models.DescribeStreamLinkFlowStatisticsRequest;
const AiSampleFaceOperation = models.AiSampleFaceOperation;
const SvgWatermarkInputForUpdate = models.SvgWatermarkInputForUpdate;
const AiReviewTaskTerrorismOcrResult = models.AiReviewTaskTerrorismOcrResult;
const AiRecognitionTaskOcrWordsResult = models.AiRecognitionTaskOcrWordsResult;
const PornAsrReviewTemplateInfo = models.PornAsrReviewTemplateInfo;
const ProhibitedAsrReviewTemplateInfoForUpdate = models.ProhibitedAsrReviewTemplateInfoForUpdate;
const ModifyAnimatedGraphicsTemplateResponse = models.ModifyAnimatedGraphicsTemplateResponse;
const DeleteAdaptiveDynamicStreamingTemplateRequest = models.DeleteAdaptiveDynamicStreamingTemplateRequest;
const AiRecognitionTaskOcrFullTextSegmentItem = models.AiRecognitionTaskOcrFullTextSegmentItem;
const EditMediaOutputConfig = models.EditMediaOutputConfig;
const PornConfigureInfoForUpdate = models.PornConfigureInfoForUpdate;
const AiReviewPornAsrTaskOutput = models.AiReviewPornAsrTaskOutput;
const DeleteAIAnalysisTemplateRequest = models.DeleteAIAnalysisTemplateRequest;
const EditMediaRequest = models.EditMediaRequest;
const CreateStreamLinkOutputInfoResponse = models.CreateStreamLinkOutputInfoResponse;
const MediaProcessTaskImageSpriteResult = models.MediaProcessTaskImageSpriteResult;
const RTPAddressDestination = models.RTPAddressDestination;
const DescribeAdaptiveDynamicStreamingTemplatesResponse = models.DescribeAdaptiveDynamicStreamingTemplatesResponse;
const MediaContentReviewOcrTextSegmentItem = models.MediaContentReviewOcrTextSegmentItem;
const StopStreamLinkFlowRequest = models.StopStreamLinkFlowRequest;
const DescribeAdaptiveDynamicStreamingTemplatesRequest = models.DescribeAdaptiveDynamicStreamingTemplatesRequest;
const ImageWatermarkInput = models.ImageWatermarkInput;
const AsrFullTextConfigureInfoForUpdate = models.AsrFullTextConfigureInfoForUpdate;
const CreatePersonSampleResponse = models.CreatePersonSampleResponse;
const CreateContentReviewTemplateResponse = models.CreateContentReviewTemplateResponse;
const ProhibitedConfigureInfoForUpdate = models.ProhibitedConfigureInfoForUpdate;
const TagConfigureInfoForUpdate = models.TagConfigureInfoForUpdate;
const DeleteWordSamplesRequest = models.DeleteWordSamplesRequest;
const DescribeInputRTSPPullSettings = models.DescribeInputRTSPPullSettings;
const RawTranscodeParameter = models.RawTranscodeParameter;
const LiveStreamTaskNotifyConfig = models.LiveStreamTaskNotifyConfig;
const VideoTemplateInfo = models.VideoTemplateInfo;
const PoliticalOcrReviewTemplateInfo = models.PoliticalOcrReviewTemplateInfo;
const PornOcrReviewTemplateInfoForUpdate = models.PornOcrReviewTemplateInfoForUpdate;
const AiReviewTaskPornOcrResult = models.AiReviewTaskPornOcrResult;
const ModifyContentReviewTemplateResponse = models.ModifyContentReviewTemplateResponse;
const DescribeWatermarkTemplatesRequest = models.DescribeWatermarkTemplatesRequest;
const CreateOutputInfo = models.CreateOutputInfo;
const TaskOutputStorage = models.TaskOutputStorage;
const FlowLogInfo = models.FlowLogInfo;
const UserDefineConfigureInfo = models.UserDefineConfigureInfo;
const ColorEnhanceConfig = models.ColorEnhanceConfig;
const DescribeOutputRTPSettings = models.DescribeOutputRTPSettings;
const DeleteStreamLinkOutputResponse = models.DeleteStreamLinkOutputResponse;
const AiReviewPornOcrTaskInput = models.AiReviewPornOcrTaskInput;
const AiAnalysisTaskFrameTagOutput = models.AiAnalysisTaskFrameTagOutput;
const ModifyAdaptiveDynamicStreamingTemplateRequest = models.ModifyAdaptiveDynamicStreamingTemplateRequest;
const MediaAnimatedGraphicsItem = models.MediaAnimatedGraphicsItem;
const ModifyWordSampleRequest = models.ModifyWordSampleRequest;
const MediaProcessTaskAnimatedGraphicResult = models.MediaProcessTaskAnimatedGraphicResult;
const AiAnalysisTaskTagResult = models.AiAnalysisTaskTagResult;
const RTMPAddressDestination = models.RTMPAddressDestination;
const AiAnalysisTaskTagOutput = models.AiAnalysisTaskTagOutput;
const SRTSourceAddressReq = models.SRTSourceAddressReq;
const ProcessMediaRequest = models.ProcessMediaRequest;
const DescribeRTSPPullSourceAddress = models.DescribeRTSPPullSourceAddress;
const DescribeOutputRTSPPullSettings = models.DescribeOutputRTSPPullSettings;
const AiRecognitionTaskOcrFullTextResult = models.AiRecognitionTaskOcrFullTextResult;
const MediaProcessTaskSnapshotByTimeOffsetResult = models.MediaProcessTaskSnapshotByTimeOffsetResult;
const DescribeOutputHLSPullSettings = models.DescribeOutputHLSPullSettings;
const AiRecognitionTaskTransTextResultInput = models.AiRecognitionTaskTransTextResultInput;
const ImageQualityEnhanceConfig = models.ImageQualityEnhanceConfig;
const DescribeStreamLinkRegionsResponse = models.DescribeStreamLinkRegionsResponse;
const AiSampleWord = models.AiSampleWord;
const DescribeStreamLinkFlowStatisticsResponse = models.DescribeStreamLinkFlowStatisticsResponse;
const AiRecognitionTaskAsrWordsResultOutput = models.AiRecognitionTaskAsrWordsResultOutput;
const LiveStreamOcrWordsRecognitionResult = models.LiveStreamOcrWordsRecognitionResult;
const LiveStreamProcessErrorInfo = models.LiveStreamProcessErrorInfo;
const ModifyAdaptiveDynamicStreamingTemplateResponse = models.ModifyAdaptiveDynamicStreamingTemplateResponse;
const MediaProcessTaskTranscodeResult = models.MediaProcessTaskTranscodeResult;
const SnapshotByTimeOffsetTaskInput = models.SnapshotByTimeOffsetTaskInput;
const ImageSpriteTaskInput = models.ImageSpriteTaskInput;
const DeleteContentReviewTemplateResponse = models.DeleteContentReviewTemplateResponse;
const ImageWatermarkTemplate = models.ImageWatermarkTemplate;
const AsrWordsConfigureInfo = models.AsrWordsConfigureInfo;
const ModifyStreamLinkOutputInfoRequest = models.ModifyStreamLinkOutputInfoRequest;
const LiveStreamAsrWordsRecognitionResult = models.LiveStreamAsrWordsRecognitionResult;
const MediaAiAnalysisFrameTagItem = models.MediaAiAnalysisFrameTagItem;
const RecognizeMediaForZhiXueResponse = models.RecognizeMediaForZhiXueResponse;
const AiSamplePerson = models.AiSamplePerson;
const FlowStatistics = models.FlowStatistics;
const CreateInputSRTSettings = models.CreateInputSRTSettings;
const FlowRealtimeStatusCommon = models.FlowRealtimeStatusCommon;
const DescribeWorkflowsResponse = models.DescribeWorkflowsResponse;
const AsrWordsConfigureInfoForUpdate = models.AsrWordsConfigureInfoForUpdate;
const DeleteImageSpriteTemplateResponse = models.DeleteImageSpriteTemplateResponse;
const DescribeContentReviewTemplatesResponse = models.DescribeContentReviewTemplatesResponse;
const DescribeStreamLinkActivateStateResponse = models.DescribeStreamLinkActivateStateResponse;
const AnimatedGraphicsTemplate = models.AnimatedGraphicsTemplate;
const DescribeStreamLinkFlowRequest = models.DescribeStreamLinkFlowRequest;
const CreateOutputRTMPSettings = models.CreateOutputRTMPSettings;
const WorkflowTrigger = models.WorkflowTrigger;
const HLSPullSourceAddress = models.HLSPullSourceAddress;
const LiveStreamAiRecognitionResultInfo = models.LiveStreamAiRecognitionResultInfo;
const LiveStreamAiReviewImagePoliticalResult = models.LiveStreamAiReviewImagePoliticalResult;
const TerrorismOcrReviewTemplateInfoForUpdate = models.TerrorismOcrReviewTemplateInfoForUpdate;
const UserDefineAsrTextReviewTemplateInfoForUpdate = models.UserDefineAsrTextReviewTemplateInfoForUpdate;
const ModifyImageSpriteTemplateResponse = models.ModifyImageSpriteTemplateResponse;
const CreateWatermarkTemplateRequest = models.CreateWatermarkTemplateRequest;
const ScheduleAnalysisTaskResult = models.ScheduleAnalysisTaskResult;
const TerrorismConfigureInfoForUpdate = models.TerrorismConfigureInfoForUpdate;
const OutputSRTSourceAddressResp = models.OutputSRTSourceAddressResp;
const StreamLinkRegionInfo = models.StreamLinkRegionInfo;
const FlowRealtimeStatusRTP = models.FlowRealtimeStatusRTP;
const AnimatedGraphicTaskInput = models.AnimatedGraphicTaskInput;
const OutputAddress = models.OutputAddress;
const MosaicInput = models.MosaicInput;
const DescribeStreamLinkActivateStateRequest = models.DescribeStreamLinkActivateStateRequest;
const AIAnalysisTemplateItem = models.AIAnalysisTemplateItem;
const HeadTailParameter = models.HeadTailParameter;
const RawImageWatermarkInput = models.RawImageWatermarkInput;
const DescribeImageSpriteTemplatesRequest = models.DescribeImageSpriteTemplatesRequest;
const AiSampleTagOperation = models.AiSampleTagOperation;
const SRTSourceAddressResp = models.SRTSourceAddressResp;
const CreateAIRecognitionTemplateResponse = models.CreateAIRecognitionTemplateResponse;
const DescribeInput = models.DescribeInput;
const DeleteTranscodeTemplateRequest = models.DeleteTranscodeTemplateRequest;
const AiReviewTerrorismTaskOutput = models.AiReviewTerrorismTaskOutput;
const ProhibitedConfigureInfo = models.ProhibitedConfigureInfo;
const DescribeStreamLinkFlowSRTStatisticsResponse = models.DescribeStreamLinkFlowSRTStatisticsResponse;
const AiReviewTerrorismOcrTaskOutput = models.AiReviewTerrorismOcrTaskOutput;
const AiAnalysisResult = models.AiAnalysisResult;
const ImageWatermarkInputForUpdate = models.ImageWatermarkInputForUpdate;
const DescribeAIAnalysisTemplatesRequest = models.DescribeAIAnalysisTemplatesRequest;
const FlowVideo = models.FlowVideo;
const AiRecognitionTaskOcrWordsResultItem = models.AiRecognitionTaskOcrWordsResultItem;
const DeleteSampleSnapshotTemplateResponse = models.DeleteSampleSnapshotTemplateResponse;
const AiAnalysisTaskTagInput = models.AiAnalysisTaskTagInput;
const ResetWorkflowRequest = models.ResetWorkflowRequest;
const AiReviewTaskTerrorismResult = models.AiReviewTaskTerrorismResult;
const DescribeOutput = models.DescribeOutput;
const LiveStreamAiReviewVoicePornResult = models.LiveStreamAiReviewVoicePornResult;
const MediaContentReviewAsrTextSegmentItem = models.MediaContentReviewAsrTextSegmentItem;
const MediaContentReviewPoliticalSegmentItem = models.MediaContentReviewPoliticalSegmentItem;
const DeletePersonSampleResponse = models.DeletePersonSampleResponse;
const StartStreamLinkFlowRequest = models.StartStreamLinkFlowRequest;
const CreateSnapshotByTimeOffsetTemplateResponse = models.CreateSnapshotByTimeOffsetTemplateResponse;
const ModifyContentReviewTemplateRequest = models.ModifyContentReviewTemplateRequest;
const StopStreamLinkFlowResponse = models.StopStreamLinkFlowResponse;
const AiAnalysisTaskCoverOutput = models.AiAnalysisTaskCoverOutput;
const AiContentReviewTaskInput = models.AiContentReviewTaskInput;
const InputAddress = models.InputAddress;
const CreateAdaptiveDynamicStreamingTemplateResponse = models.CreateAdaptiveDynamicStreamingTemplateResponse;
const DeleteSampleSnapshotTemplateRequest = models.DeleteSampleSnapshotTemplateRequest;
const AiAnalysisTaskInput = models.AiAnalysisTaskInput;
const ImageSpriteTemplate = models.ImageSpriteTemplate;
const AiRecognitionTaskOcrFullTextSegmentTextItem = models.AiRecognitionTaskOcrFullTextSegmentTextItem;
const DeleteStreamLinkFlowResponse = models.DeleteStreamLinkFlowResponse;
const LiveStreamAsrFullTextRecognitionResult = models.LiveStreamAsrFullTextRecognitionResult;
const AiReviewPornOcrTaskOutput = models.AiReviewPornOcrTaskOutput;
const CreateSampleSnapshotTemplateResponse = models.CreateSampleSnapshotTemplateResponse;
const ProhibitedAsrReviewTemplateInfo = models.ProhibitedAsrReviewTemplateInfo;
const AiReviewPoliticalAsrTaskInput = models.AiReviewPoliticalAsrTaskInput;
const ActionConfigInfo = models.ActionConfigInfo;
const MediaAiAnalysisTagItem = models.MediaAiAnalysisTagItem;
const TranscodeTemplate = models.TranscodeTemplate;
const DescribeStreamLinkFlowMediaStatisticsResponse = models.DescribeStreamLinkFlowMediaStatisticsResponse;
const PornOcrReviewTemplateInfo = models.PornOcrReviewTemplateInfo;
const CreateOutputInfoRTPSettings = models.CreateOutputInfoRTPSettings;
const AiReviewTaskPoliticalAsrResult = models.AiReviewTaskPoliticalAsrResult;
const AiRecognitionTaskAsrWordsSegmentItem = models.AiRecognitionTaskAsrWordsSegmentItem;
const SubtitleTemplate = models.SubtitleTemplate;
const LiveStreamProcessTask = models.LiveStreamProcessTask;
const AiReviewProhibitedAsrTaskInput = models.AiReviewProhibitedAsrTaskInput;
const MediaContentReviewSegmentItem = models.MediaContentReviewSegmentItem;
const TerrorismOcrReviewTemplateInfo = models.TerrorismOcrReviewTemplateInfo;
const AiReviewTaskPornResult = models.AiReviewTaskPornResult;
const DescribeStreamLinkFlowRealtimeStatusRequest = models.DescribeStreamLinkFlowRealtimeStatusRequest;
const AiReviewProhibitedAsrTaskOutput = models.AiReviewProhibitedAsrTaskOutput;
const LiveStreamFaceRecognitionResult = models.LiveStreamFaceRecognitionResult;
const FlowAudio = models.FlowAudio;
const CoverConfigureInfoForUpdate = models.CoverConfigureInfoForUpdate;
const DisableWorkflowResponse = models.DisableWorkflowResponse;
const AiAnalysisTaskClassificationResult = models.AiAnalysisTaskClassificationResult;
const PoliticalImgReviewTemplateInfoForUpdate = models.PoliticalImgReviewTemplateInfoForUpdate;
const FlowRealtimeStatusRTMP = models.FlowRealtimeStatusRTMP;
const UserDefineOcrTextReviewTemplateInfo = models.UserDefineOcrTextReviewTemplateInfo;
const AdaptiveStreamTemplate = models.AdaptiveStreamTemplate;
const TranscodeTaskInput = models.TranscodeTaskInput;
const ModifyAIRecognitionTemplateRequest = models.ModifyAIRecognitionTemplateRequest;
const ParseNotificationResponse = models.ParseNotificationResponse;
const ActivityResult = models.ActivityResult;
const DescribeInputHLSPullSettings = models.DescribeInputHLSPullSettings;
const ResetWorkflowResponse = models.ResetWorkflowResponse;
const DescribeStreamLinkFlowsRequest = models.DescribeStreamLinkFlowsRequest;
const CreateAIAnalysisTemplateResponse = models.CreateAIAnalysisTemplateResponse;
const MediaProcessTaskSampleSnapshotResult = models.MediaProcessTaskSampleSnapshotResult;
const UserDefineConfigureInfoForUpdate = models.UserDefineConfigureInfoForUpdate;
const CosFileUploadTrigger = models.CosFileUploadTrigger;
const AiReviewPoliticalAsrTaskOutput = models.AiReviewPoliticalAsrTaskOutput;
const FlowRealtimeStatusSRT = models.FlowRealtimeStatusSRT;
const TEHDConfigForUpdate = models.TEHDConfigForUpdate;
const DeleteStreamLinkOutputRequest = models.DeleteStreamLinkOutputRequest;
const ModifyPersonSampleRequest = models.ModifyPersonSampleRequest;
const AsrFullTextConfigureInfo = models.AsrFullTextConfigureInfo;
const ArtifactRepairConfig = models.ArtifactRepairConfig;
const CreateAIRecognitionTemplateRequest = models.CreateAIRecognitionTemplateRequest;
const DescribeTaskDetailRequest = models.DescribeTaskDetailRequest;
const DescribeStreamLinkFlowResponse = models.DescribeStreamLinkFlowResponse;
const AiAnalysisTaskFrameTagResult = models.AiAnalysisTaskFrameTagResult;
const AiReviewPornTaskOutput = models.AiReviewPornTaskOutput;
const CreateWorkflowResponse = models.CreateWorkflowResponse;
const AiRecognitionTaskAsrFullTextResult = models.AiRecognitionTaskAsrFullTextResult;
const ModifyAIRecognitionTemplateResponse = models.ModifyAIRecognitionTemplateResponse;
const PoliticalImgReviewTemplateInfo = models.PoliticalImgReviewTemplateInfo;
const PoliticalConfigureInfo = models.PoliticalConfigureInfo;
const ModifyAnimatedGraphicsTemplateRequest = models.ModifyAnimatedGraphicsTemplateRequest;
const DescribeOutputRTMPPullServerUrl = models.DescribeOutputRTMPPullServerUrl;
const AiRecognitionTaskOcrWordsSegmentItem = models.AiRecognitionTaskOcrWordsSegmentItem;
const MediaProcessTaskResult = models.MediaProcessTaskResult;
const DeleteWordSamplesResponse = models.DeleteWordSamplesResponse;
const LiveStreamTransTextRecognitionResult = models.LiveStreamTransTextRecognitionResult;
const WatermarkInput = models.WatermarkInput;
const EnableWorkflowResponse = models.EnableWorkflowResponse;
const AiSampleWordInfo = models.AiSampleWordInfo;
const AdaptiveDynamicStreamingInfoItem = models.AdaptiveDynamicStreamingInfoItem;
const CreateStreamLinkOutputInfoRequest = models.CreateStreamLinkOutputInfoRequest;
const ProhibitedOcrReviewTemplateInfo = models.ProhibitedOcrReviewTemplateInfo;
const LiveStreamOcrFullTextRecognitionResult = models.LiveStreamOcrFullTextRecognitionResult;
const ModifyStreamLinkInputRequest = models.ModifyStreamLinkInputRequest;
const ScheduleReviewTaskResult = models.ScheduleReviewTaskResult;
const ModifyTranscodeTemplateResponse = models.ModifyTranscodeTemplateResponse;
const MediaMetaData = models.MediaMetaData;
const ExpressionConfigInfo = models.ExpressionConfigInfo;
const VideoTemplateInfoForUpdate = models.VideoTemplateInfoForUpdate;
const CreateContentReviewTemplateRequest = models.CreateContentReviewTemplateRequest;
const DescribeContentReviewTemplatesRequest = models.DescribeContentReviewTemplatesRequest;
const AdaptiveDynamicStreamingTaskInput = models.AdaptiveDynamicStreamingTaskInput;
const DescribeImageSpriteTemplatesResponse = models.DescribeImageSpriteTemplatesResponse;
const TaskNotifyConfig = models.TaskNotifyConfig;
const FaceEnhanceConfig = models.FaceEnhanceConfig;
const AiReviewTaskPoliticalResult = models.AiReviewTaskPoliticalResult;
const AiAnalysisTaskFrameTagInput = models.AiAnalysisTaskFrameTagInput;
const MediaAiAnalysisFrameTagSegmentItem = models.MediaAiAnalysisFrameTagSegmentItem;
const AiRecognitionTaskAsrWordsResultItem = models.AiRecognitionTaskAsrWordsResultItem;
const DescribeStreamLinkRegionsRequest = models.DescribeStreamLinkRegionsRequest;
const ModifyStreamLinkInputResponse = models.ModifyStreamLinkInputResponse;
const DescribeTaskDetailResponse = models.DescribeTaskDetailResponse;
const LiveStreamAiRecognitionResultItem = models.LiveStreamAiRecognitionResultItem;
const DeleteImageSpriteTemplateRequest = models.DeleteImageSpriteTemplateRequest;
const AiSampleFailFaceInfo = models.AiSampleFailFaceInfo;
const UserDefineFaceReviewTemplateInfoForUpdate = models.UserDefineFaceReviewTemplateInfoForUpdate;
const DescribeInputRTMPSettings = models.DescribeInputRTMPSettings;
const SharpEnhanceConfig = models.SharpEnhanceConfig;
const OcrFullTextConfigureInfoForUpdate = models.OcrFullTextConfigureInfoForUpdate;
const FlowSRTInfo = models.FlowSRTInfo;
const AiRecognitionTaskOcrFullTextResultInput = models.AiRecognitionTaskOcrFullTextResultInput;
const DescribeTasksResponse = models.DescribeTasksResponse;
const DescribeOutputSRTSettings = models.DescribeOutputSRTSettings;
const AiRecognitionTaskFaceResultInput = models.AiRecognitionTaskFaceResultInput;
const AiReviewPoliticalTaskOutput = models.AiReviewPoliticalTaskOutput;
const LiveStreamAiReviewImagePornResult = models.LiveStreamAiReviewImagePornResult;
const AiRecognitionTaskTransTextResultOutput = models.AiRecognitionTaskTransTextResultOutput;
const ModifySnapshotByTimeOffsetTemplateRequest = models.ModifySnapshotByTimeOffsetTemplateRequest;
const LiveStreamAiReviewResultItem = models.LiveStreamAiReviewResultItem;
const TEHDConfig = models.TEHDConfig;
const CreateInputRTPSettings = models.CreateInputRTPSettings;
const TaskSimpleInfo = models.TaskSimpleInfo;
const DescribeSnapshotByTimeOffsetTemplatesResponse = models.DescribeSnapshotByTimeOffsetTemplatesResponse;
const MediaVideoStreamItem = models.MediaVideoStreamItem;
const SnapshotByTimeOffsetTemplate = models.SnapshotByTimeOffsetTemplate;
const DeleteSnapshotByTimeOffsetTemplateResponse = models.DeleteSnapshotByTimeOffsetTemplateResponse;
const ProhibitedOcrReviewTemplateInfoForUpdate = models.ProhibitedOcrReviewTemplateInfoForUpdate;
const DescribeTasksRequest = models.DescribeTasksRequest;
const FaceConfigureInfoForUpdate = models.FaceConfigureInfoForUpdate;
const CreateTranscodeTemplateResponse = models.CreateTranscodeTemplateResponse;
const AiRecognitionTaskAsrWordsResultInput = models.AiRecognitionTaskAsrWordsResultInput;
const CreateAIAnalysisTemplateRequest = models.CreateAIAnalysisTemplateRequest;
const CreateInput = models.CreateInput;
const AiReviewTerrorismTaskInput = models.AiReviewTerrorismTaskInput;
const DescribeWorkflowsRequest = models.DescribeWorkflowsRequest;
const MediaAudioStreamItem = models.MediaAudioStreamItem;
const LiveStreamAiReviewImageTerrorismResult = models.LiveStreamAiReviewImageTerrorismResult;
const ProcessLiveStreamRequest = models.ProcessLiveStreamRequest;
const ModifyImageSpriteTemplateRequest = models.ModifyImageSpriteTemplateRequest;
const AiReviewProhibitedOcrTaskInput = models.AiReviewProhibitedOcrTaskInput;
const DeleteWatermarkTemplateRequest = models.DeleteWatermarkTemplateRequest;
const DescribeWordSamplesRequest = models.DescribeWordSamplesRequest;
const ModifyAIAnalysisTemplateRequest = models.ModifyAIAnalysisTemplateRequest;
const DescribeFlow = models.DescribeFlow;
const CreateWatermarkTemplateResponse = models.CreateWatermarkTemplateResponse;
const DescribeSampleSnapshotTemplatesResponse = models.DescribeSampleSnapshotTemplatesResponse;
const DescribeMediaMetaDataResponse = models.DescribeMediaMetaDataResponse;
const DescribeStreamLinkFlowRealtimeStatusResponse = models.DescribeStreamLinkFlowRealtimeStatusResponse;
const TerrorismImgReviewTemplateInfo = models.TerrorismImgReviewTemplateInfo;
const FlowMediaAudio = models.FlowMediaAudio;
const DescribeTranscodeTemplatesRequest = models.DescribeTranscodeTemplatesRequest;
const DisableWorkflowRequest = models.DisableWorkflowRequest;
const PoliticalConfigureInfoForUpdate = models.PoliticalConfigureInfoForUpdate;
const DescribeWatermarkTemplatesResponse = models.DescribeWatermarkTemplatesResponse;
const DescribeStreamLinkFlowLogsRequest = models.DescribeStreamLinkFlowLogsRequest;
const DescribeOutputRTMPSettings = models.DescribeOutputRTMPSettings;
const FrameTagConfigureInfo = models.FrameTagConfigureInfo;
const ExecuteFunctionRequest = models.ExecuteFunctionRequest;
const DescribeStreamLinkFlowLogsResponse = models.DescribeStreamLinkFlowLogsResponse;
const ModifyPersonSampleResponse = models.ModifyPersonSampleResponse;
const DeleteTranscodeTemplateResponse = models.DeleteTranscodeTemplateResponse;
const MediaTranscodeItem = models.MediaTranscodeItem;
const DescribePersonSamplesResponse = models.DescribePersonSamplesResponse;
const PornConfigureInfo = models.PornConfigureInfo;
const ModifyInput = models.ModifyInput;
const VideoDenoiseConfig = models.VideoDenoiseConfig;
const DescribeAIAnalysisTemplatesResponse = models.DescribeAIAnalysisTemplatesResponse;
const CreateSnapshotByTimeOffsetTemplateRequest = models.CreateSnapshotByTimeOffsetTemplateRequest;
const ParseLiveStreamProcessNotificationRequest = models.ParseLiveStreamProcessNotificationRequest;
const AiRecognitionTaskAsrWordsResult = models.AiRecognitionTaskAsrWordsResult;
const CreateSampleSnapshotTemplateRequest = models.CreateSampleSnapshotTemplateRequest;
const WorkflowTask = models.WorkflowTask;
const FlowMediaVideo = models.FlowMediaVideo;
const AiReviewTaskPornAsrResult = models.AiReviewTaskPornAsrResult;
const EditMediaFileInfo = models.EditMediaFileInfo;
const UrlInputInfo = models.UrlInputInfo;
const FaceConfigureInfo = models.FaceConfigureInfo;
const AiRecognitionTaskFaceResultOutput = models.AiRecognitionTaskFaceResultOutput;
const PornImgReviewTemplateInfoForUpdate = models.PornImgReviewTemplateInfoForUpdate;
const EditMediaTask = models.EditMediaTask;
const PornImgReviewTemplateInfo = models.PornImgReviewTemplateInfo;
const AiReviewPoliticalOcrTaskOutput = models.AiReviewPoliticalOcrTaskOutput;
const OcrFullTextConfigureInfo = models.OcrFullTextConfigureInfo;
const DescribeTranscodeTemplatesResponse = models.DescribeTranscodeTemplatesResponse;
const DeleteAnimatedGraphicsTemplateRequest = models.DeleteAnimatedGraphicsTemplateRequest;
const DeleteSnapshotByTimeOffsetTemplateRequest = models.DeleteSnapshotByTimeOffsetTemplateRequest;
const DescribeAnimatedGraphicsTemplatesResponse = models.DescribeAnimatedGraphicsTemplatesResponse;
const DescribeSampleSnapshotTemplatesRequest = models.DescribeSampleSnapshotTemplatesRequest;
const ActivityResItem = models.ActivityResItem;
const SampleSnapshotTaskInput = models.SampleSnapshotTaskInput;
const TerrorismConfigureInfo = models.TerrorismConfigureInfo;
const PoliticalAsrReviewTemplateInfo = models.PoliticalAsrReviewTemplateInfo;
const CreateAnimatedGraphicsTemplateResponse = models.CreateAnimatedGraphicsTemplateResponse;
const SampleSnapshotTemplate = models.SampleSnapshotTemplate;
const RTSPPullSourceAddress = models.RTSPPullSourceAddress;
const DescribeHLSPullSourceAddress = models.DescribeHLSPullSourceAddress;
const MediaImageSpriteItem = models.MediaImageSpriteItem;
const DescribePersonSamplesRequest = models.DescribePersonSamplesRequest;
const AiRecognitionTaskFaceResultItem = models.AiRecognitionTaskFaceResultItem;
const DescribeStreamLinkFlowMediaStatisticsRequest = models.DescribeStreamLinkFlowMediaStatisticsRequest;
const AiAnalysisTaskCoverInput = models.AiAnalysisTaskCoverInput;
const RegionInfo = models.RegionInfo;
const AiRecognitionTaskTransTextResult = models.AiRecognitionTaskTransTextResult;
const EditMediaTaskOutput = models.EditMediaTaskOutput;
const DeleteWatermarkTemplateResponse = models.DeleteWatermarkTemplateResponse;
const ResilientStreamConf = models.ResilientStreamConf;
const DescribeOutputRTSPPullServerUrl = models.DescribeOutputRTSPPullServerUrl;
const LowLightEnhanceConfig = models.LowLightEnhanceConfig;
const DescribeMediaMetaDataRequest = models.DescribeMediaMetaDataRequest;
const FrameTagConfigureInfoForUpdate = models.FrameTagConfigureInfoForUpdate;
const CreateImageSpriteTemplateResponse = models.CreateImageSpriteTemplateResponse;
const DescribeAIRecognitionTemplatesRequest = models.DescribeAIRecognitionTemplatesRequest;
const AiRecognitionTaskTransTextSegmentItem = models.AiRecognitionTaskTransTextSegmentItem;
const ModifyWatermarkTemplateResponse = models.ModifyWatermarkTemplateResponse;
const AiRecognitionResult = models.AiRecognitionResult;


/**
 * mps client
 * @class
 */
class MpsClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("mps.tencentcloudapi.com", "2019-06-12", credential, region, profile);
    }
    
    /**
     * 批量查询媒体输入流的配置信息。
     * @param {DescribeStreamLinkFlowsRequest} req
     * @param {function(string, DescribeStreamLinkFlowsResponse):void} cb
     * @public
     */
    DescribeStreamLinkFlows(req, cb) {
        let resp = new DescribeStreamLinkFlowsResponse();
        this.request("DescribeStreamLinkFlows", req, resp, cb);
    }

    /**
     * 停止媒体传输流。
     * @param {StopStreamLinkFlowRequest} req
     * @param {function(string, StopStreamLinkFlowResponse):void} cb
     * @public
     */
    StopStreamLinkFlow(req, cb) {
        let resp = new StopStreamLinkFlowResponse();
        this.request("StopStreamLinkFlow", req, resp, cb);
    }

    /**
     * 修改媒体传输流的输出配置。
     * @param {ModifyStreamLinkOutputInfoRequest} req
     * @param {function(string, ModifyStreamLinkOutputInfoResponse):void} cb
     * @public
     */
    ModifyStreamLinkOutputInfo(req, cb) {
        let resp = new ModifyStreamLinkOutputInfoResponse();
        this.request("ModifyStreamLinkOutputInfo", req, resp, cb);
    }

    /**
     * 创建用户自定义指定时间点截图模板，数量上限：16。
     * @param {CreateSnapshotByTimeOffsetTemplateRequest} req
     * @param {function(string, CreateSnapshotByTimeOffsetTemplateResponse):void} cb
     * @public
     */
    CreateSnapshotByTimeOffsetTemplate(req, cb) {
        let resp = new CreateSnapshotByTimeOffsetTemplateResponse();
        this.request("CreateSnapshotByTimeOffsetTemplate", req, resp, cb);
    }

    /**
     * 实时查询流的当前状态
     * @param {DescribeStreamLinkFlowRealtimeStatusRequest} req
     * @param {function(string, DescribeStreamLinkFlowRealtimeStatusResponse):void} cb
     * @public
     */
    DescribeStreamLinkFlowRealtimeStatus(req, cb) {
        let resp = new DescribeStreamLinkFlowRealtimeStatusResponse();
        this.request("DescribeStreamLinkFlowRealtimeStatus", req, resp, cb);
    }

    /**
     * 修改用户自定义内容分析模板。

注意：模板 ID 10000 以下的为系统预置模板，不允许修改。
     * @param {ModifyAIAnalysisTemplateRequest} req
     * @param {function(string, ModifyAIAnalysisTemplateResponse):void} cb
     * @public
     */
    ModifyAIAnalysisTemplate(req, cb) {
        let resp = new ModifyAIAnalysisTemplateResponse();
        this.request("ModifyAIAnalysisTemplate", req, resp, cb);
    }

    /**
     * 删除媒体传输流的输出配置。
     * @param {DeleteStreamLinkOutputRequest} req
     * @param {function(string, DeleteStreamLinkOutputResponse):void} cb
     * @public
     */
    DeleteStreamLinkOutput(req, cb) {
        let resp = new DeleteStreamLinkOutputResponse();
        this.request("DeleteStreamLinkOutput", req, resp, cb);
    }

    /**
     * 修改用户自定义内容审核模板。
     * @param {ModifyContentReviewTemplateRequest} req
     * @param {function(string, ModifyContentReviewTemplateResponse):void} cb
     * @public
     */
    ModifyContentReviewTemplate(req, cb) {
        let resp = new ModifyContentReviewTemplateResponse();
        this.request("ModifyContentReviewTemplate", req, resp, cb);
    }

    /**
     * 创建用户自定义内容审核模板，数量上限：50。
     * @param {CreateContentReviewTemplateRequest} req
     * @param {function(string, CreateContentReviewTemplateResponse):void} cb
     * @public
     */
    CreateContentReviewTemplate(req, cb) {
        let resp = new CreateContentReviewTemplateResponse();
        this.request("CreateContentReviewTemplate", req, resp, cb);
    }

    /**
     * 创建用户自定义采样截图模板，数量上限：16。
     * @param {CreateSampleSnapshotTemplateRequest} req
     * @param {function(string, CreateSampleSnapshotTemplateResponse):void} cb
     * @public
     */
    CreateSampleSnapshotTemplate(req, cb) {
        let resp = new CreateSampleSnapshotTemplateResponse();
        this.request("CreateSampleSnapshotTemplate", req, resp, cb);
    }

    /**
     * 对视频进行编辑（剪辑、拼接等），生成一个新的点播视频。编辑的功能包括：

1. 对一个文件进行剪辑，生成一个新的视频；
2. 对多个文件进行拼接，生成一个新的视频；
3. 对多个文件进行剪辑，然后再拼接，生成一个新的视频。
     * @param {EditMediaRequest} req
     * @param {function(string, EditMediaResponse):void} cb
     * @public
     */
    EditMedia(req, cb) {
        let resp = new EditMediaResponse();
        this.request("EditMedia", req, resp, cb);
    }

    /**
     * 删除用户自定义内容分析模板。

注意：模板 ID 为 10000 以下的为系统预置模板，不允许删除。
     * @param {DeleteAIAnalysisTemplateRequest} req
     * @param {function(string, DeleteAIAnalysisTemplateResponse):void} cb
     * @public
     */
    DeleteAIAnalysisTemplate(req, cb) {
        let resp = new DeleteAIAnalysisTemplateResponse();
        this.request("DeleteAIAnalysisTemplate", req, resp, cb);
    }

    /**
     * 从 CMQ 获取到消息后，从消息的 msgBody 字段中解析出 MPS 直播流处理事件通知的内容。
该接口不用于发起网络调用，而是用来帮助生成各个语言平台的 SDK，您可以参考 SDK 的中解析函数的实现事件通知的解析。
     * @param {ParseLiveStreamProcessNotificationRequest} req
     * @param {function(string, ParseLiveStreamProcessNotificationResponse):void} cb
     * @public
     */
    ParseLiveStreamProcessNotification(req, cb) {
        let resp = new ParseLiveStreamProcessNotificationResponse();
        this.request("ParseLiveStreamProcessNotification", req, resp, cb);
    }

    /**
     * 根据工作流 ID，获取工作流详情列表。
     * @param {DescribeWorkflowsRequest} req
     * @param {function(string, DescribeWorkflowsResponse):void} cb
     * @public
     */
    DescribeWorkflows(req, cb) {
        let resp = new DescribeWorkflowsResponse();
        this.request("DescribeWorkflows", req, resp, cb);
    }

    /**
     * 查询指定时间点截图模板，支持根据条件，分页查询。
     * @param {DescribeSnapshotByTimeOffsetTemplatesRequest} req
     * @param {function(string, DescribeSnapshotByTimeOffsetTemplatesResponse):void} cb
     * @public
     */
    DescribeSnapshotByTimeOffsetTemplates(req, cb) {
        let resp = new DescribeSnapshotByTimeOffsetTemplatesResponse();
        this.request("DescribeSnapshotByTimeOffsetTemplates", req, resp, cb);
    }

    /**
     * 获取媒体的元信息，包括视频画面宽、高、编码格式、时长、帧率等。
     * @param {DescribeMediaMetaDataRequest} req
     * @param {function(string, DescribeMediaMetaDataResponse):void} cb
     * @public
     */
    DescribeMediaMetaData(req, cb) {
        let resp = new DescribeMediaMetaDataResponse();
        this.request("DescribeMediaMetaData", req, resp, cb);
    }

    /**
     * 重新设置一个已经存在且处于禁用状态的工作流。
     * @param {ResetWorkflowRequest} req
     * @param {function(string, ResetWorkflowResponse):void} cb
     * @public
     */
    ResetWorkflow(req, cb) {
        let resp = new ResetWorkflowResponse();
        this.request("ResetWorkflow", req, resp, cb);
    }

    /**
     * 修改用户自定义转码模板信息。
     * @param {ModifyTranscodeTemplateRequest} req
     * @param {function(string, ModifyTranscodeTemplateResponse):void} cb
     * @public
     */
    ModifyTranscodeTemplate(req, cb) {
        let resp = new ModifyTranscodeTemplateResponse();
        this.request("ModifyTranscodeTemplate", req, resp, cb);
    }

    /**
     * 删除用户自定义转动图模板。
     * @param {DeleteAnimatedGraphicsTemplateRequest} req
     * @param {function(string, DeleteAnimatedGraphicsTemplateResponse):void} cb
     * @public
     */
    DeleteAnimatedGraphicsTemplate(req, cb) {
        let resp = new DeleteAnimatedGraphicsTemplateResponse();
        this.request("DeleteAnimatedGraphicsTemplate", req, resp, cb);
    }

    /**
     * 查询媒体输入流的配置信息。
     * @param {DescribeStreamLinkFlowRequest} req
     * @param {function(string, DescribeStreamLinkFlowResponse):void} cb
     * @public
     */
    DescribeStreamLinkFlow(req, cb) {
        let resp = new DescribeStreamLinkFlowResponse();
        this.request("DescribeStreamLinkFlow", req, resp, cb);
    }

    /**
     * 删除媒体传输的传输流配置。
     * @param {DeleteStreamLinkFlowRequest} req
     * @param {function(string, DeleteStreamLinkFlowResponse):void} cb
     * @public
     */
    DeleteStreamLinkFlow(req, cb) {
        let resp = new DeleteStreamLinkFlowResponse();
        this.request("DeleteStreamLinkFlow", req, resp, cb);
    }

    /**
     * 根据内容分析模板唯一标识，获取内容分析模板详情列表。返回结果包含符合条件的所有用户自定义内容分析模板及系统预置视频内容分析模板
     * @param {DescribeAIAnalysisTemplatesRequest} req
     * @param {function(string, DescribeAIAnalysisTemplatesResponse):void} cb
     * @public
     */
    DescribeAIAnalysisTemplates(req, cb) {
        let resp = new DescribeAIAnalysisTemplatesResponse();
        this.request("DescribeAIAnalysisTemplates", req, resp, cb);
    }

    /**
     * 查询媒体传输流的日志信息。
     * @param {DescribeStreamLinkFlowLogsRequest} req
     * @param {function(string, DescribeStreamLinkFlowLogsResponse):void} cb
     * @public
     */
    DescribeStreamLinkFlowLogs(req, cb) {
        let resp = new DescribeStreamLinkFlowLogsResponse();
        this.request("DescribeStreamLinkFlowLogs", req, resp, cb);
    }

    /**
     * 查询媒体传输流的SRT质量数据。
     * @param {DescribeStreamLinkFlowSRTStatisticsRequest} req
     * @param {function(string, DescribeStreamLinkFlowSRTStatisticsResponse):void} cb
     * @public
     */
    DescribeStreamLinkFlowSRTStatistics(req, cb) {
        let resp = new DescribeStreamLinkFlowSRTStatisticsResponse();
        this.request("DescribeStreamLinkFlowSRTStatistics", req, resp, cb);
    }

    /**
     * 通过任务 ID 查询任务的执行状态和结果的详细信息（最多可以查询3天之内提交的任务）。
     * @param {DescribeTaskDetailRequest} req
     * @param {function(string, DescribeTaskDetailResponse):void} cb
     * @public
     */
    DescribeTaskDetail(req, cb) {
        let resp = new DescribeTaskDetailResponse();
        this.request("DescribeTaskDetail", req, resp, cb);
    }

    /**
     * 修改用户自定义内容识别模板。
     * @param {ModifyAIRecognitionTemplateRequest} req
     * @param {function(string, ModifyAIRecognitionTemplateResponse):void} cb
     * @public
     */
    ModifyAIRecognitionTemplate(req, cb) {
        let resp = new ModifyAIRecognitionTemplateResponse();
        this.request("ModifyAIRecognitionTemplate", req, resp, cb);
    }

    /**
     * 创建媒体传输流的输出信息。
     * @param {CreateStreamLinkOutputInfoRequest} req
     * @param {function(string, CreateStreamLinkOutputInfoResponse):void} cb
     * @public
     */
    CreateStreamLinkOutputInfo(req, cb) {
        let resp = new CreateStreamLinkOutputInfoResponse();
        this.request("CreateStreamLinkOutputInfo", req, resp, cb);
    }

    /**
     * 修改用户自定义采样截图模板。
     * @param {ModifySampleSnapshotTemplateRequest} req
     * @param {function(string, ModifySampleSnapshotTemplateResponse):void} cb
     * @public
     */
    ModifySampleSnapshotTemplate(req, cb) {
        let resp = new ModifySampleSnapshotTemplateResponse();
        this.request("ModifySampleSnapshotTemplate", req, resp, cb);
    }

    /**
     * 删除用户自定义水印模板。
     * @param {DeleteWatermarkTemplateRequest} req
     * @param {function(string, DeleteWatermarkTemplateResponse):void} cb
     * @public
     */
    DeleteWatermarkTemplate(req, cb) {
        let resp = new DeleteWatermarkTemplateResponse();
        this.request("DeleteWatermarkTemplate", req, resp, cb);
    }

    /**
     * 该接口用于根据素材 ID，删除素材样本。
     * @param {DeletePersonSampleRequest} req
     * @param {function(string, DeletePersonSampleResponse):void} cb
     * @public
     */
    DeletePersonSample(req, cb) {
        let resp = new DeletePersonSampleResponse();
        this.request("DeletePersonSample", req, resp, cb);
    }

    /**
     * 删除用户自定义转码模板。
     * @param {DeleteTranscodeTemplateRequest} req
     * @param {function(string, DeleteTranscodeTemplateResponse):void} cb
     * @public
     */
    DeleteTranscodeTemplate(req, cb) {
        let resp = new DeleteTranscodeTemplateResponse();
        this.request("DeleteTranscodeTemplate", req, resp, cb);
    }

    /**
     * 删除用户自定义指定时间点截图模板。
     * @param {DeleteSnapshotByTimeOffsetTemplateRequest} req
     * @param {function(string, DeleteSnapshotByTimeOffsetTemplateResponse):void} cb
     * @public
     */
    DeleteSnapshotByTimeOffsetTemplate(req, cb) {
        let resp = new DeleteSnapshotByTimeOffsetTemplateResponse();
        this.request("DeleteSnapshotByTimeOffsetTemplate", req, resp, cb);
    }

    /**
     * 修改用户自定义转动图模板。
     * @param {ModifyAnimatedGraphicsTemplateRequest} req
     * @param {function(string, ModifyAnimatedGraphicsTemplateResponse):void} cb
     * @public
     */
    ModifyAnimatedGraphicsTemplate(req, cb) {
        let resp = new ModifyAnimatedGraphicsTemplateResponse();
        this.request("ModifyAnimatedGraphicsTemplate", req, resp, cb);
    }

    /**
     * 该接口用于根据应用场景、关键词、标签，分页查询关键词样本信息。
     * @param {DescribeWordSamplesRequest} req
     * @param {function(string, DescribeWordSamplesResponse):void} cb
     * @public
     */
    DescribeWordSamples(req, cb) {
        let resp = new DescribeWordSamplesResponse();
        this.request("DescribeWordSamples", req, resp, cb);
    }

    /**
     * 修改用户自定义水印模板，水印类型不允许修改。
     * @param {ModifyWatermarkTemplateRequest} req
     * @param {function(string, ModifyWatermarkTemplateResponse):void} cb
     * @public
     */
    ModifyWatermarkTemplate(req, cb) {
        let resp = new ModifyWatermarkTemplateResponse();
        this.request("ModifyWatermarkTemplate", req, resp, cb);
    }

    /**
     * 该接口用于批量删除关键词样本。
     * @param {DeleteWordSamplesRequest} req
     * @param {function(string, DeleteWordSamplesResponse):void} cb
     * @public
     */
    DeleteWordSamples(req, cb) {
        let resp = new DeleteWordSamplesResponse();
        this.request("DeleteWordSamples", req, resp, cb);
    }

    /**
     * 删除工作流。对于已启用的工作流，需要禁用后才能删除。
     * @param {DeleteWorkflowRequest} req
     * @param {function(string, DeleteWorkflowResponse):void} cb
     * @public
     */
    DeleteWorkflow(req, cb) {
        let resp = new DeleteWorkflowResponse();
        this.request("DeleteWorkflow", req, resp, cb);
    }

    /**
     * 删除转自适应码流模板
     * @param {DeleteAdaptiveDynamicStreamingTemplateRequest} req
     * @param {function(string, DeleteAdaptiveDynamicStreamingTemplateResponse):void} cb
     * @public
     */
    DeleteAdaptiveDynamicStreamingTemplate(req, cb) {
        let resp = new DeleteAdaptiveDynamicStreamingTemplateResponse();
        this.request("DeleteAdaptiveDynamicStreamingTemplate", req, resp, cb);
    }

    /**
     * 创建转自适应码流模板，数量上限：100。
     * @param {CreateAdaptiveDynamicStreamingTemplateRequest} req
     * @param {function(string, CreateAdaptiveDynamicStreamingTemplateResponse):void} cb
     * @public
     */
    CreateAdaptiveDynamicStreamingTemplate(req, cb) {
        let resp = new CreateAdaptiveDynamicStreamingTemplateResponse();
        this.request("CreateAdaptiveDynamicStreamingTemplate", req, resp, cb);
    }

    /**
     * 禁用工作流。
     * @param {DisableWorkflowRequest} req
     * @param {function(string, DisableWorkflowResponse):void} cb
     * @public
     */
    DisableWorkflow(req, cb) {
        let resp = new DisableWorkflowResponse();
        this.request("DisableWorkflow", req, resp, cb);
    }

    /**
     * 查询采样截图模板，支持根据条件，分页查询。
     * @param {DescribeSampleSnapshotTemplatesRequest} req
     * @param {function(string, DescribeSampleSnapshotTemplatesResponse):void} cb
     * @public
     */
    DescribeSampleSnapshotTemplates(req, cb) {
        let resp = new DescribeSampleSnapshotTemplatesResponse();
        this.request("DescribeSampleSnapshotTemplates", req, resp, cb);
    }

    /**
     * 查询媒体传输流的媒体质量数据。

     * @param {DescribeStreamLinkFlowStatisticsRequest} req
     * @param {function(string, DescribeStreamLinkFlowStatisticsResponse):void} cb
     * @public
     */
    DescribeStreamLinkFlowStatistics(req, cb) {
        let resp = new DescribeStreamLinkFlowStatisticsResponse();
        this.request("DescribeStreamLinkFlowStatistics", req, resp, cb);
    }

    /**
     * 创建用户自定义水印模板，数量上限：1000。
     * @param {CreateWatermarkTemplateRequest} req
     * @param {function(string, CreateWatermarkTemplateResponse):void} cb
     * @public
     */
    CreateWatermarkTemplate(req, cb) {
        let resp = new CreateWatermarkTemplateResponse();
        this.request("CreateWatermarkTemplate", req, resp, cb);
    }

    /**
     * 该接口用于查询素材样本信息，支持根据素材 ID、名称、标签，分页查询。
     * @param {DescribePersonSamplesRequest} req
     * @param {function(string, DescribePersonSamplesResponse):void} cb
     * @public
     */
    DescribePersonSamples(req, cb) {
        let resp = new DescribePersonSamplesResponse();
        this.request("DescribePersonSamples", req, resp, cb);
    }

    /**
     * 删除用户自定义采样截图模板。
     * @param {DeleteSampleSnapshotTemplateRequest} req
     * @param {function(string, DeleteSampleSnapshotTemplateResponse):void} cb
     * @public
     */
    DeleteSampleSnapshotTemplate(req, cb) {
        let resp = new DeleteSampleSnapshotTemplateResponse();
        this.request("DeleteSampleSnapshotTemplate", req, resp, cb);
    }

    /**
     * 删除用户自定义内容识别模板。
     * @param {DeleteAIRecognitionTemplateRequest} req
     * @param {function(string, DeleteAIRecognitionTemplateResponse):void} cb
     * @public
     */
    DeleteAIRecognitionTemplate(req, cb) {
        let resp = new DeleteAIRecognitionTemplateResponse();
        this.request("DeleteAIRecognitionTemplate", req, resp, cb);
    }

    /**
     * 启动媒体传输流。
     * @param {StartStreamLinkFlowRequest} req
     * @param {function(string, StartStreamLinkFlowResponse):void} cb
     * @public
     */
    StartStreamLinkFlow(req, cb) {
        let resp = new StartStreamLinkFlowResponse();
        this.request("StartStreamLinkFlow", req, resp, cb);
    }

    /**
     * 创建用户自定义转动图模板，数量上限：16。
     * @param {CreateAnimatedGraphicsTemplateRequest} req
     * @param {function(string, CreateAnimatedGraphicsTemplateResponse):void} cb
     * @public
     */
    CreateAnimatedGraphicsTemplate(req, cb) {
        let resp = new CreateAnimatedGraphicsTemplateResponse();
        this.request("CreateAnimatedGraphicsTemplate", req, resp, cb);
    }

    /**
     * 查询转动图模板列表，支持根据条件，分页查询。
     * @param {DescribeAnimatedGraphicsTemplatesRequest} req
     * @param {function(string, DescribeAnimatedGraphicsTemplatesResponse):void} cb
     * @public
     */
    DescribeAnimatedGraphicsTemplates(req, cb) {
        let resp = new DescribeAnimatedGraphicsTemplatesResponse();
        this.request("DescribeAnimatedGraphicsTemplates", req, resp, cb);
    }

    /**
     * 修改媒体传输流的输入信息。
     * @param {ModifyStreamLinkInputRequest} req
     * @param {function(string, ModifyStreamLinkInputResponse):void} cb
     * @public
     */
    ModifyStreamLinkInput(req, cb) {
        let resp = new ModifyStreamLinkInputResponse();
        this.request("ModifyStreamLinkInput", req, resp, cb);
    }

    /**
     * 启用工作流。
     * @param {EnableWorkflowRequest} req
     * @param {function(string, EnableWorkflowResponse):void} cb
     * @public
     */
    EnableWorkflow(req, cb) {
        let resp = new EnableWorkflowResponse();
        this.request("EnableWorkflow", req, resp, cb);
    }

    /**
     * 查询媒体传输流的媒体质量数据。

     * @param {DescribeStreamLinkFlowMediaStatisticsRequest} req
     * @param {function(string, DescribeStreamLinkFlowMediaStatisticsResponse):void} cb
     * @public
     */
    DescribeStreamLinkFlowMediaStatistics(req, cb) {
        let resp = new DescribeStreamLinkFlowMediaStatisticsResponse();
        this.request("DescribeStreamLinkFlowMediaStatistics", req, resp, cb);
    }

    /**
     * 从 CMQ 获取到消息后，从消息的 msgBody 字段中解析出 MPS 事件通知的内容。
该接口不用于发起网络调用，而是用来帮助生成各个语言平台的 SDK，您可以参考 SDK 的中解析函数的实现事件通知的解析。
     * @param {ParseNotificationRequest} req
     * @param {function(string, ParseNotificationResponse):void} cb
     * @public
     */
    ParseNotification(req, cb) {
        let resp = new ParseNotificationResponse();
        this.request("ParseNotification", req, resp, cb);
    }

    /**
     * 智能媒体识别，包含表情和动作识别。仅用于智学，其他调用无效。
     * @param {RecognizeMediaForZhiXueRequest} req
     * @param {function(string, RecognizeMediaForZhiXueResponse):void} cb
     * @public
     */
    RecognizeMediaForZhiXue(req, cb) {
        let resp = new RecognizeMediaForZhiXueResponse();
        this.request("RecognizeMediaForZhiXue", req, resp, cb);
    }

    /**
     * 对已发起的任务进行管理。
     * @param {ManageTaskRequest} req
     * @param {function(string, ManageTaskResponse):void} cb
     * @public
     */
    ManageTask(req, cb) {
        let resp = new ManageTaskResponse();
        this.request("ManageTask", req, resp, cb);
    }

    /**
     * 查询媒体传输开通状态。
     * @param {DescribeStreamLinkActivateStateRequest} req
     * @param {function(string, DescribeStreamLinkActivateStateResponse):void} cb
     * @public
     */
    DescribeStreamLinkActivateState(req, cb) {
        let resp = new DescribeStreamLinkActivateStateResponse();
        this.request("DescribeStreamLinkActivateState", req, resp, cb);
    }

    /**
     * 修改媒体传输的传输流配置信息。
     * @param {ModifyStreamLinkFlowRequest} req
     * @param {function(string, ModifyStreamLinkFlowResponse):void} cb
     * @public
     */
    ModifyStreamLinkFlow(req, cb) {
        let resp = new ModifyStreamLinkFlowResponse();
        this.request("ModifyStreamLinkFlow", req, resp, cb);
    }

    /**
     * * 该接口用于查询任务列表；
* 当列表数据比较多时，单次接口调用无法拉取整个列表，可通过 ScrollToken 参数，分批拉取；
* 只能查询到最近七天（168小时）内的任务。
     * @param {DescribeTasksRequest} req
     * @param {function(string, DescribeTasksResponse):void} cb
     * @public
     */
    DescribeTasks(req, cb) {
        let resp = new DescribeTasksResponse();
        this.request("DescribeTasks", req, resp, cb);
    }

    /**
     * 查询媒体传输所有地区。
     * @param {DescribeStreamLinkRegionsRequest} req
     * @param {function(string, DescribeStreamLinkRegionsResponse):void} cb
     * @public
     */
    DescribeStreamLinkRegions(req, cb) {
        let resp = new DescribeStreamLinkRegionsResponse();
        this.request("DescribeStreamLinkRegions", req, resp, cb);
    }

    /**
     * 修改用户自定义指定时间点截图模板。
     * @param {ModifySnapshotByTimeOffsetTemplateRequest} req
     * @param {function(string, ModifySnapshotByTimeOffsetTemplateResponse):void} cb
     * @public
     */
    ModifySnapshotByTimeOffsetTemplate(req, cb) {
        let resp = new ModifySnapshotByTimeOffsetTemplateResponse();
        this.request("ModifySnapshotByTimeOffsetTemplate", req, resp, cb);
    }

    /**
     * 该接口用于批量创建关键词样本，样本用于通过OCR、ASR技术，进行不适宜内容识别、内容识别等视频处理。
     * @param {CreateWordSamplesRequest} req
     * @param {function(string, CreateWordSamplesResponse):void} cb
     * @public
     */
    CreateWordSamples(req, cb) {
        let resp = new CreateWordSamplesResponse();
        this.request("CreateWordSamples", req, resp, cb);
    }

    /**
     * 该接口用于创建素材样本，用于通过五官定位等技术，进行内容识别、内容不适宜等视频处理。
     * @param {CreatePersonSampleRequest} req
     * @param {function(string, CreatePersonSampleResponse):void} cb
     * @public
     */
    CreatePersonSample(req, cb) {
        let resp = new CreatePersonSampleResponse();
        this.request("CreatePersonSample", req, resp, cb);
    }

    /**
     * 本接口仅用于定制开发的特殊场景，除非云媒体处理客服人员主动告知您需要使用本接口，其它情况请勿调用。
     * @param {ExecuteFunctionRequest} req
     * @param {function(string, ExecuteFunctionResponse):void} cb
     * @public
     */
    ExecuteFunction(req, cb) {
        let resp = new ExecuteFunctionResponse();
        this.request("ExecuteFunction", req, resp, cb);
    }

    /**
     * 该接口用于根据素材 ID，修改素材样本信息，包括名称、描述的修改，以及五官、标签的添加、删除、重置操作。五官删除操作需保证至少剩余 1 张图片，否则，请使用重置操作。
     * @param {ModifyPersonSampleRequest} req
     * @param {function(string, ModifyPersonSampleResponse):void} cb
     * @public
     */
    ModifyPersonSample(req, cb) {
        let resp = new ModifyPersonSampleResponse();
        this.request("ModifyPersonSample", req, resp, cb);
    }

    /**
     * 创建用户自定义转码模板，数量上限：1000。
     * @param {CreateTranscodeTemplateRequest} req
     * @param {function(string, CreateTranscodeTemplateResponse):void} cb
     * @public
     */
    CreateTranscodeTemplate(req, cb) {
        let resp = new CreateTranscodeTemplateResponse();
        this.request("CreateTranscodeTemplate", req, resp, cb);
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
     * @param {CreateWorkflowRequest} req
     * @param {function(string, CreateWorkflowResponse):void} cb
     * @public
     */
    CreateWorkflow(req, cb) {
        let resp = new CreateWorkflowResponse();
        this.request("CreateWorkflow", req, resp, cb);
    }

    /**
     * 创建媒体传输的传输流配置。
     * @param {CreateStreamLinkFlowRequest} req
     * @param {function(string, CreateStreamLinkFlowResponse):void} cb
     * @public
     */
    CreateStreamLinkFlow(req, cb) {
        let resp = new CreateStreamLinkFlowResponse();
        this.request("CreateStreamLinkFlow", req, resp, cb);
    }

    /**
     * 对直播流媒体发起处理任务，功能包括：

* 智能内容审核（画面鉴黄、敏感信息检测、声音鉴黄）；
* 智能内容识别（人脸、文本全文、文本关键词、语音全文、语音关键词、语音实时翻译）。

直播流处理事件通知实时写入用户指定的消息队列 CMQ 中，用户需要从消息队列 CMQ 中获取事件通知结果，同时处理过程中存在输出文件的，会写入用户指定的输出文件的目标存储中。
     * @param {ProcessLiveStreamRequest} req
     * @param {function(string, ProcessLiveStreamResponse):void} cb
     * @public
     */
    ProcessLiveStream(req, cb) {
        let resp = new ProcessLiveStreamResponse();
        this.request("ProcessLiveStream", req, resp, cb);
    }

    /**
     * 查询转自适应码流模板，支持根据条件，分页查询。
     * @param {DescribeAdaptiveDynamicStreamingTemplatesRequest} req
     * @param {function(string, DescribeAdaptiveDynamicStreamingTemplatesResponse):void} cb
     * @public
     */
    DescribeAdaptiveDynamicStreamingTemplates(req, cb) {
        let resp = new DescribeAdaptiveDynamicStreamingTemplatesResponse();
        this.request("DescribeAdaptiveDynamicStreamingTemplates", req, resp, cb);
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
     * @param {ProcessMediaRequest} req
     * @param {function(string, ProcessMediaResponse):void} cb
     * @public
     */
    ProcessMedia(req, cb) {
        let resp = new ProcessMediaResponse();
        this.request("ProcessMedia", req, resp, cb);
    }

    /**
     * 创建用户自定义内容识别模板，数量上限：50。
     * @param {CreateAIRecognitionTemplateRequest} req
     * @param {function(string, CreateAIRecognitionTemplateResponse):void} cb
     * @public
     */
    CreateAIRecognitionTemplate(req, cb) {
        let resp = new CreateAIRecognitionTemplateResponse();
        this.request("CreateAIRecognitionTemplate", req, resp, cb);
    }

    /**
     * 修改用户自定义雪碧图模板。
     * @param {ModifyImageSpriteTemplateRequest} req
     * @param {function(string, ModifyImageSpriteTemplateResponse):void} cb
     * @public
     */
    ModifyImageSpriteTemplate(req, cb) {
        let resp = new ModifyImageSpriteTemplateResponse();
        this.request("ModifyImageSpriteTemplate", req, resp, cb);
    }

    /**
     * 该接口用于修改关键词的应用场景、标签，关键词本身不可修改，如需修改，可删除重建。
     * @param {ModifyWordSampleRequest} req
     * @param {function(string, ModifyWordSampleResponse):void} cb
     * @public
     */
    ModifyWordSample(req, cb) {
        let resp = new ModifyWordSampleResponse();
        this.request("ModifyWordSample", req, resp, cb);
    }

    /**
     * 查询雪碧图模板，支持根据条件，分页查询。
     * @param {DescribeImageSpriteTemplatesRequest} req
     * @param {function(string, DescribeImageSpriteTemplatesResponse):void} cb
     * @public
     */
    DescribeImageSpriteTemplates(req, cb) {
        let resp = new DescribeImageSpriteTemplatesResponse();
        this.request("DescribeImageSpriteTemplates", req, resp, cb);
    }

    /**
     * 删除用户自定义内容审核模板。
     * @param {DeleteContentReviewTemplateRequest} req
     * @param {function(string, DeleteContentReviewTemplateResponse):void} cb
     * @public
     */
    DeleteContentReviewTemplate(req, cb) {
        let resp = new DeleteContentReviewTemplateResponse();
        this.request("DeleteContentReviewTemplate", req, resp, cb);
    }

    /**
     * 创建用户自定义内容分析模板，数量上限：50。
     * @param {CreateAIAnalysisTemplateRequest} req
     * @param {function(string, CreateAIAnalysisTemplateResponse):void} cb
     * @public
     */
    CreateAIAnalysisTemplate(req, cb) {
        let resp = new CreateAIAnalysisTemplateResponse();
        this.request("CreateAIAnalysisTemplate", req, resp, cb);
    }

    /**
     * 修改转自适应码流模板
     * @param {ModifyAdaptiveDynamicStreamingTemplateRequest} req
     * @param {function(string, ModifyAdaptiveDynamicStreamingTemplateResponse):void} cb
     * @public
     */
    ModifyAdaptiveDynamicStreamingTemplate(req, cb) {
        let resp = new ModifyAdaptiveDynamicStreamingTemplateResponse();
        this.request("ModifyAdaptiveDynamicStreamingTemplate", req, resp, cb);
    }

    /**
     * 根据内容识别模板唯一标识，获取内容识别模板详情列表。返回结果包含符合条件的所有用户自定义内容识别模板及系统预置视频内容识别模板
     * @param {DescribeAIRecognitionTemplatesRequest} req
     * @param {function(string, DescribeAIRecognitionTemplatesResponse):void} cb
     * @public
     */
    DescribeAIRecognitionTemplates(req, cb) {
        let resp = new DescribeAIRecognitionTemplatesResponse();
        this.request("DescribeAIRecognitionTemplates", req, resp, cb);
    }

    /**
     * 查询用户自定义水印模板，支持根据条件，分页查询。
     * @param {DescribeWatermarkTemplatesRequest} req
     * @param {function(string, DescribeWatermarkTemplatesResponse):void} cb
     * @public
     */
    DescribeWatermarkTemplates(req, cb) {
        let resp = new DescribeWatermarkTemplatesResponse();
        this.request("DescribeWatermarkTemplates", req, resp, cb);
    }

    /**
     * 创建用户自定义雪碧图模板，数量上限：16。
     * @param {CreateImageSpriteTemplateRequest} req
     * @param {function(string, CreateImageSpriteTemplateResponse):void} cb
     * @public
     */
    CreateImageSpriteTemplate(req, cb) {
        let resp = new CreateImageSpriteTemplateResponse();
        this.request("CreateImageSpriteTemplate", req, resp, cb);
    }

    /**
     * 删除雪碧图模板。
     * @param {DeleteImageSpriteTemplateRequest} req
     * @param {function(string, DeleteImageSpriteTemplateResponse):void} cb
     * @public
     */
    DeleteImageSpriteTemplate(req, cb) {
        let resp = new DeleteImageSpriteTemplateResponse();
        this.request("DeleteImageSpriteTemplate", req, resp, cb);
    }

    /**
     * 根据转码模板唯一标识，获取转码模板详情列表。返回结果包含符合条件的所有用户自定义模板及[系统预置转码模板](https://cloud.tencent.com/document/product/266/33476#.E9.A2.84.E7.BD.AE.E8.BD.AC.E7.A0.81.E6.A8.A1.E6.9D.BF)。
     * @param {DescribeTranscodeTemplatesRequest} req
     * @param {function(string, DescribeTranscodeTemplatesResponse):void} cb
     * @public
     */
    DescribeTranscodeTemplates(req, cb) {
        let resp = new DescribeTranscodeTemplatesResponse();
        this.request("DescribeTranscodeTemplates", req, resp, cb);
    }

    /**
     * 根据智能审核模板唯一标识，获取智能审核模板详情列表。返回结果包含符合条件的所有用户自定义模板及系统预置智能审核模板。
     * @param {DescribeContentReviewTemplatesRequest} req
     * @param {function(string, DescribeContentReviewTemplatesResponse):void} cb
     * @public
     */
    DescribeContentReviewTemplates(req, cb) {
        let resp = new DescribeContentReviewTemplatesResponse();
        this.request("DescribeContentReviewTemplates", req, resp, cb);
    }


}
module.exports = MpsClient;
