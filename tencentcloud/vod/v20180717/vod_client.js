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
const Canvas = models.Canvas;
const ModifySampleSnapshotTemplateResponse = models.ModifySampleSnapshotTemplateResponse;
const ModifyWatermarkTemplateRequest = models.ModifyWatermarkTemplateRequest;
const CreateStorageRegionRequest = models.CreateStorageRegionRequest;
const AiRecognitionTaskAsrFullTextSegmentItem = models.AiRecognitionTaskAsrFullTextSegmentItem;
const UserDefineOcrTextReviewTemplateInfoForUpdate = models.UserDefineOcrTextReviewTemplateInfoForUpdate;
const DescribeAllClassRequest = models.DescribeAllClassRequest;
const WeChatMiniProgramPublishRequest = models.WeChatMiniProgramPublishRequest;
const AiAnalysisTaskClassificationInput = models.AiAnalysisTaskClassificationInput;
const SvgWatermarkInput = models.SvgWatermarkInput;
const CreateTranscodeTemplateRequest = models.CreateTranscodeTemplateRequest;
const TransitionOpertion = models.TransitionOpertion;
const AudioTrackItem = models.AudioTrackItem;
const MediaAiAnalysisHighlightItem = models.MediaAiAnalysisHighlightItem;
const DescribeAnimatedGraphicsTemplatesRequest = models.DescribeAnimatedGraphicsTemplatesRequest;
const LiveRealTimeClipResponse = models.LiveRealTimeClipResponse;
const AiReviewTaskProhibitedAsrResult = models.AiReviewTaskProhibitedAsrResult;
const AdaptiveDynamicStreamingTemplate = models.AdaptiveDynamicStreamingTemplate;
const DeleteAnimatedGraphicsTemplateResponse = models.DeleteAnimatedGraphicsTemplateResponse;
const AiReviewTaskProhibitedOcrResult = models.AiReviewTaskProhibitedOcrResult;
const AiRecognitionTaskAsrFullTextResultOutput = models.AiRecognitionTaskAsrFullTextResultOutput;
const AiReviewProhibitedOcrTaskOutput = models.AiReviewProhibitedOcrTaskOutput;
const MediaMiniProgramReviewElem = models.MediaMiniProgramReviewElem;
const ManageTaskResponse = models.ManageTaskResponse;
const CreateImageProcessingTemplateRequest = models.CreateImageProcessingTemplateRequest;
const ModifyDefaultStorageRegionRequest = models.ModifyDefaultStorageRegionRequest;
const ModifyEventConfigResponse = models.ModifyEventConfigResponse;
const AiAnalysisTaskCoverOutput = models.AiAnalysisTaskCoverOutput;
const MediaSnapshotByTimeOffsetItem = models.MediaSnapshotByTimeOffsetItem;
const ModifySampleSnapshotTemplateRequest = models.ModifySampleSnapshotTemplateRequest;
const AiReviewPoliticalOcrTaskInput = models.AiReviewPoliticalOcrTaskInput;
const DescribePrepaidProductsRequest = models.DescribePrepaidProductsRequest;
const MediaInputInfo = models.MediaInputInfo;
const CreateImageSpriteTask2017 = models.CreateImageSpriteTask2017;
const ClipFileInfo2017 = models.ClipFileInfo2017;
const TempCertificate = models.TempCertificate;
const AiReviewTaskPoliticalOcrResult = models.AiReviewTaskPoliticalOcrResult;
const AiSampleWord = models.AiSampleWord;
const CreateImageSpriteTemplateRequest = models.CreateImageSpriteTemplateRequest;
const MediaSnapshotByTimePicInfoItem = models.MediaSnapshotByTimePicInfoItem;
const DescribeDailyMostPlayedStatRequest = models.DescribeDailyMostPlayedStatRequest;
const UserDefineFaceReviewTemplateInfo = models.UserDefineFaceReviewTemplateInfo;
const ContentReviewTemplateItem = models.ContentReviewTemplateItem;
const DeleteAIRecognitionTemplateResponse = models.DeleteAIRecognitionTemplateResponse;
const DeleteContentReviewTemplateRequest = models.DeleteContentReviewTemplateRequest;
const AiReviewPoliticalTaskInput = models.AiReviewPoliticalTaskInput;
const AudioTransform = models.AudioTransform;
const ResetProcedureTemplateRequest = models.ResetProcedureTemplateRequest;
const ContentReviewOcrResult = models.ContentReviewOcrResult;
const ComposeMediaResponse = models.ComposeMediaResponse;
const DescribeLicenseUsageDataResponse = models.DescribeLicenseUsageDataResponse;
const UrlSignatureAuthPolicy = models.UrlSignatureAuthPolicy;
const DeleteSampleSnapshotTemplateRequest = models.DeleteSampleSnapshotTemplateRequest;
const DescribeStorageDataResponse = models.DescribeStorageDataResponse;
const AudioTemplateInfoForUpdate = models.AudioTemplateInfoForUpdate;
const DescribeDailyMediaPlayStatResponse = models.DescribeDailyMediaPlayStatResponse;
const ModifySubAppIdInfoRequest = models.ModifySubAppIdInfoRequest;
const DeletePersonSampleRequest = models.DeletePersonSampleRequest;
const AiRecognitionTaskAsrWordsSegmentItem = models.AiRecognitionTaskAsrWordsSegmentItem;
const AiRecognitionTaskInput = models.AiRecognitionTaskInput;
const AudioTemplateInfo = models.AudioTemplateInfo;
const ExecuteFunctionResponse = models.ExecuteFunctionResponse;
const CoverConfigureInfo = models.CoverConfigureInfo;
const ComposeMediaRequest = models.ComposeMediaRequest;
const AIRecognitionTemplateItem = models.AIRecognitionTemplateItem;
const AiReviewPornAsrTaskInput = models.AiReviewPornAsrTaskInput;
const AiRecognitionTaskFaceResult = models.AiRecognitionTaskFaceResult;
const AiRecognitionTaskHeadTailResultInput = models.AiRecognitionTaskHeadTailResultInput;
const CreateAdaptiveDynamicStreamingTemplateRequest = models.CreateAdaptiveDynamicStreamingTemplateRequest;
const PushUrlCacheResponse = models.PushUrlCacheResponse;
const MediaProcessTaskSampleSnapshotResult = models.MediaProcessTaskSampleSnapshotResult;
const DescribeDailyMediaPlayStatRequest = models.DescribeDailyMediaPlayStatRequest;
const TerrorismImgReviewTemplateInfoForUpdate = models.TerrorismImgReviewTemplateInfoForUpdate;
const ModifyTranscodeTemplateRequest = models.ModifyTranscodeTemplateRequest;
const AiAnalysisTaskHighlightResult = models.AiAnalysisTaskHighlightResult;
const DeleteAIAnalysisTemplateResponse = models.DeleteAIAnalysisTemplateResponse;
const DeleteImageProcessingTemplateRequest = models.DeleteImageProcessingTemplateRequest;
const ApplyUploadResponse = models.ApplyUploadResponse;
const DescribeDailyPlayStatFileListResponse = models.DescribeDailyPlayStatFileListResponse;
const TextWatermarkTemplateInputForUpdate = models.TextWatermarkTemplateInputForUpdate;
const DeleteSuperPlayerConfigRequest = models.DeleteSuperPlayerConfigRequest;
const AiReviewTerrorismOcrTaskInput = models.AiReviewTerrorismOcrTaskInput;
const AiRecognitionTaskOcrWordsResultInput = models.AiRecognitionTaskOcrWordsResultInput;
const ModifyMediaStorageClassResponse = models.ModifyMediaStorageClassResponse;
const AiReviewPornTaskInput = models.AiReviewPornTaskInput;
const CreateProcedureTemplateRequest = models.CreateProcedureTemplateRequest;
const DescribeMediaProcessUsageDataRequest = models.DescribeMediaProcessUsageDataRequest;
const CreatePersonSampleRequest = models.CreatePersonSampleRequest;
const StorageRegionInfo = models.StorageRegionInfo;
const MediaTransitionItem = models.MediaTransitionItem;
const MediaAiAnalysisCoverItem = models.MediaAiAnalysisCoverItem;
const TagConfigureInfo = models.TagConfigureInfo;
const ModifySuperPlayerConfigResponse = models.ModifySuperPlayerConfigResponse;
const AiRecognitionTaskOcrWordsResultOutput = models.AiRecognitionTaskOcrWordsResultOutput;
const ConcatTask2017 = models.ConcatTask2017;
const DeleteAIRecognitionTemplateRequest = models.DeleteAIRecognitionTemplateRequest;
const FileUploadTask = models.FileUploadTask;
const DescribeCDNStatDetailsResponse = models.DescribeCDNStatDetailsResponse;
const AttachMediaSubtitlesRequest = models.AttachMediaSubtitlesRequest;
const AiAnalysisTaskCoverResult = models.AiAnalysisTaskCoverResult;
const DescribeEventConfigRequest = models.DescribeEventConfigRequest;
const AiAnalysisTaskClassificationOutput = models.AiAnalysisTaskClassificationOutput;
const FileDeleteTask = models.FileDeleteTask;
const ResourceTag = models.ResourceTag;
const AiRecognitionTaskOcrFullTextResultOutput = models.AiRecognitionTaskOcrFullTextResultOutput;
const EditMediaTaskInput = models.EditMediaTaskInput;
const UserDefineAsrTextReviewTemplateInfo = models.UserDefineAsrTextReviewTemplateInfo;
const DescribeWordSamplesResponse = models.DescribeWordSamplesResponse;
const AiSampleFaceInfo = models.AiSampleFaceInfo;
const MediaImageSpriteItem = models.MediaImageSpriteItem;
const ModifyVodDomainAccelerateConfigRequest = models.ModifyVodDomainAccelerateConfigRequest;
const MediaProcessTaskAdaptiveDynamicStreamingResult = models.MediaProcessTaskAdaptiveDynamicStreamingResult;
const OcrWordsConfigureInfoForUpdate = models.OcrWordsConfigureInfoForUpdate;
const WatermarkTemplate = models.WatermarkTemplate;
const CoverBySnapshotTaskOutput = models.CoverBySnapshotTaskOutput;
const TextWatermarkTemplateInput = models.TextWatermarkTemplateInput;
const ForbidMediaDistributionRequest = models.ForbidMediaDistributionRequest;
const DescribeAIRecognitionTemplatesResponse = models.DescribeAIRecognitionTemplatesResponse;
const EditMediaResponse = models.EditMediaResponse;
const PoliticalOcrReviewTemplateInfoForUpdate = models.PoliticalOcrReviewTemplateInfoForUpdate;
const TaskOutputMediaInfo = models.TaskOutputMediaInfo;
const ProcessMediaByUrlRequest = models.ProcessMediaByUrlRequest;
const DescribeDailyMostPlayedStatResponse = models.DescribeDailyMostPlayedStatResponse;
const ModifyAIRecognitionTemplateResponse = models.ModifyAIRecognitionTemplateResponse;
const SplitMediaTaskConfig = models.SplitMediaTaskConfig;
const PlayStatFileInfo = models.PlayStatFileInfo;
const ModifyMediaInfoRequest = models.ModifyMediaInfoRequest;
const DeleteTranscodeTemplateRequest = models.DeleteTranscodeTemplateRequest;
const PornAsrReviewTemplateInfoForUpdate = models.PornAsrReviewTemplateInfoForUpdate;
const MediaAnimatedGraphicsInfo = models.MediaAnimatedGraphicsInfo;
const DescribeSnapshotByTimeOffsetTemplatesRequest = models.DescribeSnapshotByTimeOffsetTemplatesRequest;
const ModifyHeadTailTemplateResponse = models.ModifyHeadTailTemplateResponse;
const ProductInstance = models.ProductInstance;
const CdnLogInfo = models.CdnLogInfo;
const SimpleAesEdkPair = models.SimpleAesEdkPair;
const MediaSubtitleInfo = models.MediaSubtitleInfo;
const AiRecognitionTaskAsrFullTextResultInput = models.AiRecognitionTaskAsrFullTextResultInput;
const MediaMiniProgramReviewInfoItem = models.MediaMiniProgramReviewInfoItem;
const TaskStatData = models.TaskStatData;
const CreateVodDomainRequest = models.CreateVodDomainRequest;
const OcrFullTextConfigureInfoForUpdate = models.OcrFullTextConfigureInfoForUpdate;
const ProcessMediaByProcedureRequest = models.ProcessMediaByProcedureRequest;
const MediaImageSpriteInfo = models.MediaImageSpriteInfo;
const ProductInstanceRecource = models.ProductInstanceRecource;
const MediaProcessTaskAnimatedGraphicResult = models.MediaProcessTaskAnimatedGraphicResult;
const ProcessMediaResponse = models.ProcessMediaResponse;
const CreateWordSamplesResponse = models.CreateWordSamplesResponse;
const ClassificationConfigureInfoForUpdate = models.ClassificationConfigureInfoForUpdate;
const DeleteAdaptiveDynamicStreamingTemplateResponse = models.DeleteAdaptiveDynamicStreamingTemplateResponse;
const CreateWordSamplesRequest = models.CreateWordSamplesRequest;
const PoliticalAsrReviewTemplateInfoForUpdate = models.PoliticalAsrReviewTemplateInfoForUpdate;
const WechatMiniProgramPublishTaskInput = models.WechatMiniProgramPublishTaskInput;
const AiSampleFaceOperation = models.AiSampleFaceOperation;
const SvgWatermarkInputForUpdate = models.SvgWatermarkInputForUpdate;
const AiReviewTaskTerrorismOcrResult = models.AiReviewTaskTerrorismOcrResult;
const AiRecognitionTaskOcrWordsResult = models.AiRecognitionTaskOcrWordsResult;
const PornAsrReviewTemplateInfo = models.PornAsrReviewTemplateInfo;
const AiRecognitionTaskSegmentResult = models.AiRecognitionTaskSegmentResult;
const MediaSubtitleItem = models.MediaSubtitleItem;
const ProhibitedAsrReviewTemplateInfoForUpdate = models.ProhibitedAsrReviewTemplateInfoForUpdate;
const ModifyAnimatedGraphicsTemplateResponse = models.ModifyAnimatedGraphicsTemplateResponse;
const ModifyAIAnalysisTemplateResponse = models.ModifyAIAnalysisTemplateResponse;
const LiveRealTimeClipRequest = models.LiveRealTimeClipRequest;
const DeleteAdaptiveDynamicStreamingTemplateRequest = models.DeleteAdaptiveDynamicStreamingTemplateRequest;
const AiRecognitionTaskOcrFullTextSegmentItem = models.AiRecognitionTaskOcrFullTextSegmentItem;
const EditMediaOutputConfig = models.EditMediaOutputConfig;
const SplitMediaTaskSegmentInfo = models.SplitMediaTaskSegmentInfo;
const AiReviewPornAsrTaskOutput = models.AiReviewPornAsrTaskOutput;
const SimpleHlsClipResponse = models.SimpleHlsClipResponse;
const DeleteAIAnalysisTemplateRequest = models.DeleteAIAnalysisTemplateRequest;
const EditMediaRequest = models.EditMediaRequest;
const LicenseUsageDataItem = models.LicenseUsageDataItem;
const ConcatFileInfo2017 = models.ConcatFileInfo2017;
const ContentReviewResult = models.ContentReviewResult;
const MediaProcessTaskImageSpriteResult = models.MediaProcessTaskImageSpriteResult;
const DescribeMediaInfosResponse = models.DescribeMediaInfosResponse;
const DeleteProcedureTemplateResponse = models.DeleteProcedureTemplateResponse;
const DescribeAdaptiveDynamicStreamingTemplatesResponse = models.DescribeAdaptiveDynamicStreamingTemplatesResponse;
const MediaMiniProgramReviewInfo = models.MediaMiniProgramReviewInfo;
const ForbidMediaDistributionResponse = models.ForbidMediaDistributionResponse;
const TimeRange = models.TimeRange;
const DescribeAdaptiveDynamicStreamingTemplatesRequest = models.DescribeAdaptiveDynamicStreamingTemplatesRequest;
const ImageWatermarkInput = models.ImageWatermarkInput;
const ObjectConfigureInfo = models.ObjectConfigureInfo;
const AsrFullTextConfigureInfoForUpdate = models.AsrFullTextConfigureInfoForUpdate;
const DeleteHeadTailTemplateResponse = models.DeleteHeadTailTemplateResponse;
const TranscodeTask2017 = models.TranscodeTask2017;
const CreatePersonSampleResponse = models.CreatePersonSampleResponse;
const CreateContentReviewTemplateResponse = models.CreateContentReviewTemplateResponse;
const ModifyAnimatedGraphicsTemplateRequest = models.ModifyAnimatedGraphicsTemplateRequest;
const DescribeProcedureTemplatesRequest = models.DescribeProcedureTemplatesRequest;
const CreateHeadTailTemplateRequest = models.CreateHeadTailTemplateRequest;
const MediaSampleSnapshotItem = models.MediaSampleSnapshotItem;
const TagConfigureInfoForUpdate = models.TagConfigureInfoForUpdate;
const DeleteWordSamplesRequest = models.DeleteWordSamplesRequest;
const EmptyTrackItem = models.EmptyTrackItem;
const StickerTrackItem = models.StickerTrackItem;
const DescribeDrmDataKeyResponse = models.DescribeDrmDataKeyResponse;
const DescribeMediaPlayStatDetailsResponse = models.DescribeMediaPlayStatDetailsResponse;
const VideoTemplateInfo = models.VideoTemplateInfo;
const PoliticalOcrReviewTemplateInfo = models.PoliticalOcrReviewTemplateInfo;
const PornOcrReviewTemplateInfoForUpdate = models.PornOcrReviewTemplateInfoForUpdate;
const AiReviewTaskPornOcrResult = models.AiReviewTaskPornOcrResult;
const ModifyContentReviewTemplateResponse = models.ModifyContentReviewTemplateResponse;
const DescribeWatermarkTemplatesRequest = models.DescribeWatermarkTemplatesRequest;
const CoverBySnapshotTaskInput = models.CoverBySnapshotTaskInput;
const SegmentConfigureInfoForUpdate = models.SegmentConfigureInfoForUpdate;
const UserDefineConfigureInfo = models.UserDefineConfigureInfo;
const AiRecognitionTaskSegmentSegmentItem = models.AiRecognitionTaskSegmentSegmentItem;
const RestoreMediaTask = models.RestoreMediaTask;
const AiReviewPornOcrTaskInput = models.AiReviewPornOcrTaskInput;
const OcrWordsConfigureInfo = models.OcrWordsConfigureInfo;
const CreateSuperPlayerConfigResponse = models.CreateSuperPlayerConfigResponse;
const AiAnalysisTaskFrameTagOutput = models.AiAnalysisTaskFrameTagOutput;
const ModifyAdaptiveDynamicStreamingTemplateRequest = models.ModifyAdaptiveDynamicStreamingTemplateRequest;
const MediaAnimatedGraphicsItem = models.MediaAnimatedGraphicsItem;
const DescribeCDNUsageDataResponse = models.DescribeCDNUsageDataResponse;
const ModifyWordSampleRequest = models.ModifyWordSampleRequest;
const AiRecognitionTaskFaceSegmentItem = models.AiRecognitionTaskFaceSegmentItem;
const DeleteMediaResponse = models.DeleteMediaResponse;
const ModifySnapshotByTimeOffsetTemplateResponse = models.ModifySnapshotByTimeOffsetTemplateResponse;
const DeleteHeadTailTemplateRequest = models.DeleteHeadTailTemplateRequest;
const AiAnalysisTaskTagResult = models.AiAnalysisTaskTagResult;
const SearchMediaResponse = models.SearchMediaResponse;
const ModifyMediaStorageClassRequest = models.ModifyMediaStorageClassRequest;
const AiAnalysisTaskTagOutput = models.AiAnalysisTaskTagOutput;
const AiAnalysisTaskHighlightOutput = models.AiAnalysisTaskHighlightOutput;
const MediaSubtitleInput = models.MediaSubtitleInput;
const ProcessMediaRequest = models.ProcessMediaRequest;
const PornImageResult = models.PornImageResult;
const ProcessImageResponse = models.ProcessImageResponse;
const ProcessImageRequest = models.ProcessImageRequest;
const ModifyMediaInfoResponse = models.ModifyMediaInfoResponse;
const AiRecognitionTaskOcrFullTextResult = models.AiRecognitionTaskOcrFullTextResult;
const MediaTrackItem = models.MediaTrackItem;
const MediaProcessTaskSnapshotByTimeOffsetResult = models.MediaProcessTaskSnapshotByTimeOffsetResult;
const ManageTaskRequest = models.ManageTaskRequest;
const ModifyEventConfigRequest = models.ModifyEventConfigRequest;
const AiRecognitionTaskAsrWordsResultOutput = models.AiRecognitionTaskAsrWordsResultOutput;
const DescribeHeadTailTemplatesRequest = models.DescribeHeadTailTemplatesRequest;
const ModifyAdaptiveDynamicStreamingTemplateResponse = models.ModifyAdaptiveDynamicStreamingTemplateResponse;
const MediaProcessTaskTranscodeResult = models.MediaProcessTaskTranscodeResult;
const DomainDetailInfo = models.DomainDetailInfo;
const EditMediaVideoStream = models.EditMediaVideoStream;
const ImageProcessingTemplate = models.ImageProcessingTemplate;
const ImageSpriteTaskInput = models.ImageSpriteTaskInput;
const ObjectConfigureInfoForUpdate = models.ObjectConfigureInfoForUpdate;
const DeleteMediaRequest = models.DeleteMediaRequest;
const CreateSuperPlayerConfigRequest = models.CreateSuperPlayerConfigRequest;
const ImageWatermarkTemplate = models.ImageWatermarkTemplate;
const ModifySubAppIdInfoResponse = models.ModifySubAppIdInfoResponse;
const AsrWordsConfigureInfo = models.AsrWordsConfigureInfo;
const ModifySubAppIdStatusResponse = models.ModifySubAppIdStatusResponse;
const SimpleHlsClipRequest = models.SimpleHlsClipRequest;
const MediaDeleteItem = models.MediaDeleteItem;
const PoliticalImageResult = models.PoliticalImageResult;
const AiSamplePerson = models.AiSamplePerson;
const MediaAdaptiveDynamicStreamingInfo = models.MediaAdaptiveDynamicStreamingInfo;
const DescribeDailyPlayStatFileListRequest = models.DescribeDailyPlayStatFileListRequest;
const DescribeSuperPlayerConfigsResponse = models.DescribeSuperPlayerConfigsResponse;
const AsrWordsConfigureInfoForUpdate = models.AsrWordsConfigureInfoForUpdate;
const DescribeStorageDataRequest = models.DescribeStorageDataRequest;
const LiveRealTimeClipMediaSegmentInfo = models.LiveRealTimeClipMediaSegmentInfo;
const DeleteImageSpriteTemplateResponse = models.DeleteImageSpriteTemplateResponse;
const DescribeContentReviewTemplatesResponse = models.DescribeContentReviewTemplatesResponse;
const TEHDConfig = models.TEHDConfig;
const ImageReviewUsageDataItem = models.ImageReviewUsageDataItem;
const AnimatedGraphicsTemplate = models.AnimatedGraphicsTemplate;
const DailyPlayStatInfo = models.DailyPlayStatInfo;
const TerrorismOcrReviewTemplateInfoForUpdate = models.TerrorismOcrReviewTemplateInfoForUpdate;
const DescribeEventsStateResponse = models.DescribeEventsStateResponse;
const AiRecognitionTaskHeadTailResultOutput = models.AiRecognitionTaskHeadTailResultOutput;
const AdaptiveDynamicStreamingTaskInput = models.AdaptiveDynamicStreamingTaskInput;
const ModifyImageSpriteTemplateResponse = models.ModifyImageSpriteTemplateResponse;
const MediaProcessTaskCoverBySnapshotResult = models.MediaProcessTaskCoverBySnapshotResult;
const CreateWatermarkTemplateRequest = models.CreateWatermarkTemplateRequest;
const TerrorismConfigureInfoForUpdate = models.TerrorismConfigureInfoForUpdate;
const DescribeEventsStateRequest = models.DescribeEventsStateRequest;
const WechatMiniProgramPublishTask = models.WechatMiniProgramPublishTask;
const ModifyDefaultStorageRegionResponse = models.ModifyDefaultStorageRegionResponse;
const CreateImageProcessingTemplateResponse = models.CreateImageProcessingTemplateResponse;
const ComposeMediaTask = models.ComposeMediaTask;
const HeadTailConfigureInfoForUpdate = models.HeadTailConfigureInfoForUpdate;
const ImageScale = models.ImageScale;
const TranscodePlayInfo2017 = models.TranscodePlayInfo2017;
const SplitMediaTask = models.SplitMediaTask;
const ComposeMediaTaskInput = models.ComposeMediaTaskInput;
const AnimatedGraphicTaskInput = models.AnimatedGraphicTaskInput;
const MosaicInput = models.MosaicInput;
const AIAnalysisTemplateItem = models.AIAnalysisTemplateItem;
const AiRecognitionTaskObjectResultItem = models.AiRecognitionTaskObjectResultItem;
const ModifyVodDomainConfigResponse = models.ModifyVodDomainConfigResponse;
const MediaSnapshotByTimeOffsetInfo = models.MediaSnapshotByTimeOffsetInfo;
const DescribeImageSpriteTemplatesRequest = models.DescribeImageSpriteTemplatesRequest;
const MediaKeyFrameDescItem = models.MediaKeyFrameDescItem;
const ModifyVodDomainConfigRequest = models.ModifyVodDomainConfigRequest;
const AiSampleTagOperation = models.AiSampleTagOperation;
const PlayerConfig = models.PlayerConfig;
const ConfirmEventsRequest = models.ConfirmEventsRequest;
const CreateAIRecognitionTemplateResponse = models.CreateAIRecognitionTemplateResponse;
const ModifySubAppIdStatusRequest = models.ModifySubAppIdStatusRequest;
const CreateSubAppIdResponse = models.CreateSubAppIdResponse;
const CreateWatermarkTemplateResponse = models.CreateWatermarkTemplateResponse;
const AiReviewTerrorismTaskOutput = models.AiReviewTerrorismTaskOutput;
const DescribeImageProcessingTemplatesRequest = models.DescribeImageProcessingTemplatesRequest;
const ResetProcedureTemplateResponse = models.ResetProcedureTemplateResponse;
const ProhibitedConfigureInfo = models.ProhibitedConfigureInfo;
const DrmStreamingsInfo = models.DrmStreamingsInfo;
const SplitMediaRequest = models.SplitMediaRequest;
const AiReviewTerrorismOcrTaskOutput = models.AiReviewTerrorismOcrTaskOutput;
const AiAnalysisResult = models.AiAnalysisResult;
const ImageWatermarkInputForUpdate = models.ImageWatermarkInputForUpdate;
const DescribeAIAnalysisTemplatesRequest = models.DescribeAIAnalysisTemplatesRequest;
const MediaTranscodeInfo = models.MediaTranscodeInfo;
const ResolutionNameInfo = models.ResolutionNameInfo;
const AiRecognitionTaskOcrWordsResultItem = models.AiRecognitionTaskOcrWordsResultItem;
const ParseStreamingManifestRequest = models.ParseStreamingManifestRequest;
const DeleteSampleSnapshotTemplateResponse = models.DeleteSampleSnapshotTemplateResponse;
const AiAnalysisTaskTagInput = models.AiAnalysisTaskTagInput;
const HeadTailTemplate = models.HeadTailTemplate;
const DescribeStorageDetailsResponse = models.DescribeStorageDetailsResponse;
const PullEventsResponse = models.PullEventsResponse;
const AiRecognitionTaskObjectResultInput = models.AiRecognitionTaskObjectResultInput;
const DescribeCdnLogsRequest = models.DescribeCdnLogsRequest;
const MediaProcessTaskInput = models.MediaProcessTaskInput;
const OutputVideoStream = models.OutputVideoStream;
const ProcedureTemplate = models.ProcedureTemplate;
const AiReviewTaskTerrorismResult = models.AiReviewTaskTerrorismResult;
const ProcessMediaByUrlResponse = models.ProcessMediaByUrlResponse;
const DescribeImageReviewUsageDataRequest = models.DescribeImageReviewUsageDataRequest;
const MediaContentReviewAsrTextSegmentItem = models.MediaContentReviewAsrTextSegmentItem;
const DescribeEventConfigResponse = models.DescribeEventConfigResponse;
const DescribeCdnLogsResponse = models.DescribeCdnLogsResponse;
const MediaContentReviewPoliticalSegmentItem = models.MediaContentReviewPoliticalSegmentItem;
const DeletePersonSampleResponse = models.DeletePersonSampleResponse;
const CreateSnapshotByTimeOffsetTemplateResponse = models.CreateSnapshotByTimeOffsetTemplateResponse;
const ModifyContentReviewTemplateRequest = models.ModifyContentReviewTemplateRequest;
const AttachMediaSubtitlesResponse = models.AttachMediaSubtitlesResponse;
const AiContentReviewTaskInput = models.AiContentReviewTaskInput;
const CreateAdaptiveDynamicStreamingTemplateResponse = models.CreateAdaptiveDynamicStreamingTemplateResponse;
const ClassificationConfigureInfo = models.ClassificationConfigureInfo;
const AiAnalysisTaskInput = models.AiAnalysisTaskInput;
const ImageSpriteTemplate = models.ImageSpriteTemplate;
const AiRecognitionTaskOcrFullTextSegmentTextItem = models.AiRecognitionTaskOcrFullTextSegmentTextItem;
const AiRecognitionTaskSegmentResultOutput = models.AiRecognitionTaskSegmentResultOutput;
const SegmentConfigureInfo = models.SegmentConfigureInfo;
const FileDeleteResultItem = models.FileDeleteResultItem;
const SnapshotByTimeOffsetTaskInput = models.SnapshotByTimeOffsetTaskInput;
const RefererAuthPolicy = models.RefererAuthPolicy;
const TaskStatDataItem = models.TaskStatDataItem;
const ParseStreamingManifestResponse = models.ParseStreamingManifestResponse;
const AiReviewPornOcrTaskOutput = models.AiReviewPornOcrTaskOutput;
const ApplyUploadRequest = models.ApplyUploadRequest;
const CreateSampleSnapshotTemplateResponse = models.CreateSampleSnapshotTemplateResponse;
const AiAnalysisTaskHighlightInput = models.AiAnalysisTaskHighlightInput;
const DeleteContentReviewTemplateResponse = models.DeleteContentReviewTemplateResponse;
const MediaBasicInfo = models.MediaBasicInfo;
const AiReviewPoliticalAsrTaskInput = models.AiReviewPoliticalAsrTaskInput;
const PullUploadRequest = models.PullUploadRequest;
const SortBy = models.SortBy;
const ClipTask2017 = models.ClipTask2017;
const TranscodeTemplate = models.TranscodeTemplate;
const DescribeCDNUsageDataRequest = models.DescribeCDNUsageDataRequest;
const PornOcrReviewTemplateInfo = models.PornOcrReviewTemplateInfo;
const AiReviewTaskPoliticalAsrResult = models.AiReviewTaskPoliticalAsrResult;
const DescribeReviewDetailsRequest = models.DescribeReviewDetailsRequest;
const PornConfigureInfoForUpdate = models.PornConfigureInfoForUpdate;
const AiReviewProhibitedAsrTaskInput = models.AiReviewProhibitedAsrTaskInput;
const MediaContentReviewSegmentItem = models.MediaContentReviewSegmentItem;
const TerrorismOcrReviewTemplateInfo = models.TerrorismOcrReviewTemplateInfo;
const AiReviewTaskPornResult = models.AiReviewTaskPornResult;
const AiRecognitionTaskObjectResultOutput = models.AiRecognitionTaskObjectResultOutput;
const DescribeMediaPlayStatDetailsRequest = models.DescribeMediaPlayStatDetailsRequest;
const AiReviewProhibitedAsrTaskOutput = models.AiReviewProhibitedAsrTaskOutput;
const CreateClassResponse = models.CreateClassResponse;
const DeleteSuperPlayerConfigResponse = models.DeleteSuperPlayerConfigResponse;
const DescribeSampleSnapshotTemplatesRequest = models.DescribeSampleSnapshotTemplatesRequest;
const CoverConfigureInfoForUpdate = models.CoverConfigureInfoForUpdate;
const AiAnalysisTaskClassificationResult = models.AiAnalysisTaskClassificationResult;
const PoliticalImgReviewTemplateInfoForUpdate = models.PoliticalImgReviewTemplateInfoForUpdate;
const UserDefineOcrTextReviewTemplateInfo = models.UserDefineOcrTextReviewTemplateInfo;
const DescribeVodDomainsResponse = models.DescribeVodDomainsResponse;
const AdaptiveStreamTemplate = models.AdaptiveStreamTemplate;
const TranscodeTaskInput = models.TranscodeTaskInput;
const ModifyAIRecognitionTemplateRequest = models.ModifyAIRecognitionTemplateRequest;
const DescribeStorageRegionsRequest = models.DescribeStorageRegionsRequest;
const WechatPublishTask = models.WechatPublishTask;
const DescribeCDNStatDetailsRequest = models.DescribeCDNStatDetailsRequest;
const AiRecognitionTaskOcrFullTextResultInput = models.AiRecognitionTaskOcrFullTextResultInput;
const DescribeImageReviewUsageDataResponse = models.DescribeImageReviewUsageDataResponse;
const StatDataItem = models.StatDataItem;
const CreateStorageRegionResponse = models.CreateStorageRegionResponse;
const AccelerateAreaInfo = models.AccelerateAreaInfo;
const MediaSourceData = models.MediaSourceData;
const DescribePrepaidProductsResponse = models.DescribePrepaidProductsResponse;
const ProhibitedAsrReviewTemplateInfo = models.ProhibitedAsrReviewTemplateInfo;
const PushUrlCacheRequest = models.PushUrlCacheRequest;
const CreateAIAnalysisTemplateResponse = models.CreateAIAnalysisTemplateResponse;
const HeadTailConfigureInfo = models.HeadTailConfigureInfo;
const EventContent = models.EventContent;
const HighlightsConfigureInfoForUpdate = models.HighlightsConfigureInfoForUpdate;
const AiRecognitionTaskObjectResult = models.AiRecognitionTaskObjectResult;
const UserDefineConfigureInfoForUpdate = models.UserDefineConfigureInfoForUpdate;
const AiReviewPoliticalAsrTaskOutput = models.AiReviewPoliticalAsrTaskOutput;
const OutputAudioStream = models.OutputAudioStream;
const ModifyClassRequest = models.ModifyClassRequest;
const SpecificationDataItem = models.SpecificationDataItem;
const TEHDConfigForUpdate = models.TEHDConfigForUpdate;
const ComposeMediaTaskOutput = models.ComposeMediaTaskOutput;
const DescribeMediaInfosRequest = models.DescribeMediaInfosRequest;
const ModifyPersonSampleRequest = models.ModifyPersonSampleRequest;
const DescribeDrmDataKeyRequest = models.DescribeDrmDataKeyRequest;
const AsrFullTextConfigureInfo = models.AsrFullTextConfigureInfo;
const TerrorismImageResult = models.TerrorismImageResult;
const DeleteVodDomainRequest = models.DeleteVodDomainRequest;
const CreateAIRecognitionTemplateRequest = models.CreateAIRecognitionTemplateRequest;
const DescribeTaskDetailRequest = models.DescribeTaskDetailRequest;
const MediaAiAnalysisClassificationItem = models.MediaAiAnalysisClassificationItem;
const AiAnalysisTaskFrameTagResult = models.AiAnalysisTaskFrameTagResult;
const AiReviewPornTaskOutput = models.AiReviewPornTaskOutput;
const AiRecognitionTaskAsrFullTextResult = models.AiRecognitionTaskAsrFullTextResult;
const ImageContentReviewInput = models.ImageContentReviewInput;
const PlayStatInfo = models.PlayStatInfo;
const PoliticalImgReviewTemplateInfo = models.PoliticalImgReviewTemplateInfo;
const PoliticalConfigureInfo = models.PoliticalConfigureInfo;
const HighlightsConfigureInfo = models.HighlightsConfigureInfo;
const CreateHeadTailTemplateResponse = models.CreateHeadTailTemplateResponse;
const AiRecognitionTaskOcrWordsSegmentItem = models.AiRecognitionTaskOcrWordsSegmentItem;
const MediaProcessTaskResult = models.MediaProcessTaskResult;
const DeleteWordSamplesResponse = models.DeleteWordSamplesResponse;
const DeleteProcedureTemplateRequest = models.DeleteProcedureTemplateRequest;
const WatermarkInput = models.WatermarkInput;
const AiSampleWordInfo = models.AiSampleWordInfo;
const AdaptiveDynamicStreamingInfoItem = models.AdaptiveDynamicStreamingInfoItem;
const ProhibitedOcrReviewTemplateInfo = models.ProhibitedOcrReviewTemplateInfo;
const DeleteClassResponse = models.DeleteClassResponse;
const ModifyTranscodeTemplateResponse = models.ModifyTranscodeTemplateResponse;
const MediaMetaData = models.MediaMetaData;
const MediaSampleSnapshotInfo = models.MediaSampleSnapshotInfo;
const DescribeSubAppIdsResponse = models.DescribeSubAppIdsResponse;
const MediaInfo = models.MediaInfo;
const VideoTemplateInfoForUpdate = models.VideoTemplateInfoForUpdate;
const CreateContentReviewTemplateRequest = models.CreateContentReviewTemplateRequest;
const DescribeContentReviewTemplatesRequest = models.DescribeContentReviewTemplatesRequest;
const ImageOperation = models.ImageOperation;
const DescribeImageSpriteTemplatesResponse = models.DescribeImageSpriteTemplatesResponse;
const AiAnalysisTaskFrameTagInput = models.AiAnalysisTaskFrameTagInput;
const MediaAiAnalysisFrameTagSegmentItem = models.MediaAiAnalysisFrameTagSegmentItem;
const AiRecognitionTaskAsrWordsResultItem = models.AiRecognitionTaskAsrWordsResultItem;
const MediaAiAnalysisTagItem = models.MediaAiAnalysisTagItem;
const DescribeTaskDetailResponse = models.DescribeTaskDetailResponse;
const MediaKeyFrameDescInfo = models.MediaKeyFrameDescInfo;
const DeleteImageSpriteTemplateRequest = models.DeleteImageSpriteTemplateRequest;
const CreateClassRequest = models.CreateClassRequest;
const AiSampleFailFaceInfo = models.AiSampleFailFaceInfo;
const UserDefineFaceReviewTemplateInfoForUpdate = models.UserDefineFaceReviewTemplateInfoForUpdate;
const CreateProcedureTemplateResponse = models.CreateProcedureTemplateResponse;
const DomainHTTPSConfig = models.DomainHTTPSConfig;
const DescribeMediaProcessUsageDataResponse = models.DescribeMediaProcessUsageDataResponse;
const DescribeSuperPlayerConfigsRequest = models.DescribeSuperPlayerConfigsRequest;
const HeadTailTaskInput = models.HeadTailTaskInput;
const SplitMediaOutputConfig = models.SplitMediaOutputConfig;
const CreateVodDomainResponse = models.CreateVodDomainResponse;
const ModifyVodDomainAccelerateConfigResponse = models.ModifyVodDomainAccelerateConfigResponse;
const AiRecognitionTaskSegmentResultInput = models.AiRecognitionTaskSegmentResultInput;
const ModifyHeadTailTemplateRequest = models.ModifyHeadTailTemplateRequest;
const DescribeTasksResponse = models.DescribeTasksResponse;
const DescribeSubAppIdsRequest = models.DescribeSubAppIdsRequest;
const AiRecognitionTaskFaceResultInput = models.AiRecognitionTaskFaceResultInput;
const AiReviewPoliticalTaskOutput = models.AiReviewPoliticalTaskOutput;
const AiReviewTaskPoliticalResult = models.AiReviewTaskPoliticalResult;
const ReviewImageResponse = models.ReviewImageResponse;
const DescribeStorageRegionsResponse = models.DescribeStorageRegionsResponse;
const ModifySnapshotByTimeOffsetTemplateRequest = models.ModifySnapshotByTimeOffsetTemplateRequest;
const ProcedureTask = models.ProcedureTask;
const ModifySuperPlayerConfigRequest = models.ModifySuperPlayerConfigRequest;
const TaskSimpleInfo = models.TaskSimpleInfo;
const DescribeSnapshotByTimeOffsetTemplatesResponse = models.DescribeSnapshotByTimeOffsetTemplatesResponse;
const MediaVideoStreamItem = models.MediaVideoStreamItem;
const SnapshotByTimeOffsetTemplate = models.SnapshotByTimeOffsetTemplate;
const DeleteSnapshotByTimeOffsetTemplateResponse = models.DeleteSnapshotByTimeOffsetTemplateResponse;
const ProhibitedOcrReviewTemplateInfoForUpdate = models.ProhibitedOcrReviewTemplateInfoForUpdate;
const DescribeVodDomainsRequest = models.DescribeVodDomainsRequest;
const DescribeTasksRequest = models.DescribeTasksRequest;
const DescribeReviewDetailsResponse = models.DescribeReviewDetailsResponse;
const CreateTranscodeTemplateResponse = models.CreateTranscodeTemplateResponse;
const AiRecognitionTaskAsrWordsResultInput = models.AiRecognitionTaskAsrWordsResultInput;
const SnapshotByTimeOffset2017 = models.SnapshotByTimeOffset2017;
const CreateAIAnalysisTemplateRequest = models.CreateAIAnalysisTemplateRequest;
const AiReviewTerrorismTaskInput = models.AiReviewTerrorismTaskInput;
const MediaAudioStreamItem = models.MediaAudioStreamItem;
const SubAppIdInfo = models.SubAppIdInfo;
const DescribeAllClassResponse = models.DescribeAllClassResponse;
const ModifyImageSpriteTemplateRequest = models.ModifyImageSpriteTemplateRequest;
const AiReviewProhibitedOcrTaskInput = models.AiReviewProhibitedOcrTaskInput;
const DeleteWatermarkTemplateRequest = models.DeleteWatermarkTemplateRequest;
const DeleteVodDomainResponse = models.DeleteVodDomainResponse;
const EditMediaStreamInfo = models.EditMediaStreamInfo;
const DescribeWordSamplesRequest = models.DescribeWordSamplesRequest;
const ImageCenterCut = models.ImageCenterCut;
const ModifyAIAnalysisTemplateRequest = models.ModifyAIAnalysisTemplateRequest;
const CommitUploadResponse = models.CommitUploadResponse;
const DescribeSampleSnapshotTemplatesResponse = models.DescribeSampleSnapshotTemplatesResponse;
const ModifyWordSampleResponse = models.ModifyWordSampleResponse;
const AiContentReviewResult = models.AiContentReviewResult;
const TerrorismImgReviewTemplateInfo = models.TerrorismImgReviewTemplateInfo;
const DrmStreamingsInfoForUpdate = models.DrmStreamingsInfoForUpdate;
const DeleteClassRequest = models.DeleteClassRequest;
const DescribeTranscodeTemplatesRequest = models.DescribeTranscodeTemplatesRequest;
const UserDefineAsrTextReviewTemplateInfoForUpdate = models.UserDefineAsrTextReviewTemplateInfoForUpdate;
const PoliticalConfigureInfoForUpdate = models.PoliticalConfigureInfoForUpdate;
const DescribeWatermarkTemplatesResponse = models.DescribeWatermarkTemplatesResponse;
const WeChatMiniProgramPublishResponse = models.WeChatMiniProgramPublishResponse;
const ImageTransform = models.ImageTransform;
const CreateAnimatedGraphicsTemplateRequest = models.CreateAnimatedGraphicsTemplateRequest;
const FrameTagConfigureInfo = models.FrameTagConfigureInfo;
const ExecuteFunctionRequest = models.ExecuteFunctionRequest;
const ConfirmEventsResponse = models.ConfirmEventsResponse;
const ModifyPersonSampleResponse = models.ModifyPersonSampleResponse;
const VideoTrackItem = models.VideoTrackItem;
const DescribeLicenseUsageDataRequest = models.DescribeLicenseUsageDataRequest;
const DeleteTranscodeTemplateResponse = models.DeleteTranscodeTemplateResponse;
const MediaTranscodeItem = models.MediaTranscodeItem;
const DescribePersonSamplesResponse = models.DescribePersonSamplesResponse;
const SplitMediaTaskInput = models.SplitMediaTaskInput;
const PornConfigureInfo = models.PornConfigureInfo;
const AiRecognitionTaskObjectSeqmentItem = models.AiRecognitionTaskObjectSeqmentItem;
const SplitMediaResponse = models.SplitMediaResponse;
const PullEventsRequest = models.PullEventsRequest;
const FaceConfigureInfoForUpdate = models.FaceConfigureInfoForUpdate;
const DescribeAIAnalysisTemplatesResponse = models.DescribeAIAnalysisTemplatesResponse;
const CreateSnapshotByTimeOffsetTemplateRequest = models.CreateSnapshotByTimeOffsetTemplateRequest;
const AiRecognitionTaskAsrWordsResult = models.AiRecognitionTaskAsrWordsResult;
const CreateSubAppIdRequest = models.CreateSubAppIdRequest;
const DescribeProcedureTemplatesResponse = models.DescribeProcedureTemplatesResponse;
const SearchMediaRequest = models.SearchMediaRequest;
const CreateSampleSnapshotTemplateRequest = models.CreateSampleSnapshotTemplateRequest;
const MediaContentReviewOcrTextSegmentItem = models.MediaContentReviewOcrTextSegmentItem;
const AudioVolumeParam = models.AudioVolumeParam;
const AiReviewTaskPornAsrResult = models.AiReviewTaskPornAsrResult;
const ModifyClassResponse = models.ModifyClassResponse;
const EditMediaFileInfo = models.EditMediaFileInfo;
const ProcessMediaByProcedureResponse = models.ProcessMediaByProcedureResponse;
const PullUploadResponse = models.PullUploadResponse;
const FaceConfigureInfo = models.FaceConfigureInfo;
const AiRecognitionTaskFaceResultOutput = models.AiRecognitionTaskFaceResultOutput;
const DeleteImageProcessingTemplateResponse = models.DeleteImageProcessingTemplateResponse;
const PornImgReviewTemplateInfoForUpdate = models.PornImgReviewTemplateInfoForUpdate;
const EditMediaTask = models.EditMediaTask;
const PornImgReviewTemplateInfo = models.PornImgReviewTemplateInfo;
const AiReviewPoliticalOcrTaskOutput = models.AiReviewPoliticalOcrTaskOutput;
const OcrFullTextConfigureInfo = models.OcrFullTextConfigureInfo;
const CommitUploadRequest = models.CommitUploadRequest;
const WatermarkCycleConfigForUpdate = models.WatermarkCycleConfigForUpdate;
const SnapshotByTimeOffsetTask2017 = models.SnapshotByTimeOffsetTask2017;
const MediaClassInfo = models.MediaClassInfo;
const DescribeTranscodeTemplatesResponse = models.DescribeTranscodeTemplatesResponse;
const DeleteAnimatedGraphicsTemplateRequest = models.DeleteAnimatedGraphicsTemplateRequest;
const DeleteSnapshotByTimeOffsetTemplateRequest = models.DeleteSnapshotByTimeOffsetTemplateRequest;
const DescribeAnimatedGraphicsTemplatesResponse = models.DescribeAnimatedGraphicsTemplatesResponse;
const MediaAiAnalysisFrameTagItem = models.MediaAiAnalysisFrameTagItem;
const DescribeImageProcessingTemplatesResponse = models.DescribeImageProcessingTemplatesResponse;
const SampleSnapshotTaskInput = models.SampleSnapshotTaskInput;
const ReviewImageRequest = models.ReviewImageRequest;
const DescribeHeadTailTemplatesResponse = models.DescribeHeadTailTemplatesResponse;
const TerrorismConfigureInfo = models.TerrorismConfigureInfo;
const PoliticalAsrReviewTemplateInfo = models.PoliticalAsrReviewTemplateInfo;
const CreateAnimatedGraphicsTemplateResponse = models.CreateAnimatedGraphicsTemplateResponse;
const SampleSnapshotTemplate = models.SampleSnapshotTemplate;
const AiRecognitionTaskHeadTailResult = models.AiRecognitionTaskHeadTailResult;
const DescribePersonSamplesRequest = models.DescribePersonSamplesRequest;
const AiRecognitionTaskFaceResultItem = models.AiRecognitionTaskFaceResultItem;
const AiAnalysisTaskCoverInput = models.AiAnalysisTaskCoverInput;
const DescribeStorageDetailsRequest = models.DescribeStorageDetailsRequest;
const MediaTrack = models.MediaTrack;
const StorageStatData = models.StorageStatData;
const MediaOutputInfo = models.MediaOutputInfo;
const EditMediaTaskOutput = models.EditMediaTaskOutput;
const HighlightSegmentItem = models.HighlightSegmentItem;
const DeleteWatermarkTemplateResponse = models.DeleteWatermarkTemplateResponse;
const ComposeMediaOutput = models.ComposeMediaOutput;
const ModifyWatermarkTemplateResponse = models.ModifyWatermarkTemplateResponse;
const PullUploadTask = models.PullUploadTask;
const ProhibitedConfigureInfoForUpdate = models.ProhibitedConfigureInfoForUpdate;
const FrameTagConfigureInfoForUpdate = models.FrameTagConfigureInfoForUpdate;
const CreateImageSpriteTemplateResponse = models.CreateImageSpriteTemplateResponse;
const DescribeAIRecognitionTemplatesRequest = models.DescribeAIRecognitionTemplatesRequest;
const EditMediaTEHDConfig = models.EditMediaTEHDConfig;
const AiRecognitionResult = models.AiRecognitionResult;


/**
 * vod client
 * @class
 */
class VodClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("vod.tencentcloudapi.com", "2018-07-17", credential, region, profile);
    }
    
    /**
     * 创建一个用户自定义的图片处理模板，数量上限：16。最多支持三次操作，例如：裁剪-缩略-裁剪。
     * @param {CreateImageProcessingTemplateRequest} req
     * @param {function(string, CreateImageProcessingTemplateResponse):void} cb
     * @public
     */
    CreateImageProcessingTemplate(req, cb) {
        let resp = new CreateImageProcessingTemplateResponse();
        this.request("CreateImageProcessingTemplate", req, resp, cb);
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
     * 该接口用于设置默认的存储地域。上传文件时如果没有指定地域，将上传到默认地域。
     * @param {ModifyDefaultStorageRegionRequest} req
     * @param {function(string, ModifyDefaultStorageRegionResponse):void} cb
     * @public
     */
    ModifyDefaultStorageRegion(req, cb) {
        let resp = new ModifyDefaultStorageRegionResponse();
        this.request("ModifyDefaultStorageRegion", req, resp, cb);
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
     * @param {EditMediaRequest} req
     * @param {function(string, EditMediaResponse):void} cb
     * @public
     */
    EditMedia(req, cb) {
        let resp = new EditMediaResponse();
        this.request("EditMedia", req, resp, cb);
    }

    /**
     * 该接口用于查询点播域名信息列表。
     * @param {DescribeVodDomainsRequest} req
     * @param {function(string, DescribeVodDomainsResponse):void} cb
     * @public
     */
    DescribeVodDomains(req, cb) {
        let resp = new DescribeVodDomainsResponse();
        this.request("DescribeVodDomains", req, resp, cb);
    }

    /**
     * * 我们强烈建议您使用云点播提供的 [服务端上传 SDK](/document/product/266/9759#1.-.E5.8F.91.E8.B5.B7.E4.B8.8A.E4.BC.A0) 来上传文件。直接调用 API 进行上传的难度和工作量都显著大于使用 SDK。
* 该接口用于申请媒体文件（和封面文件）的上传，获取文件上传到云点播的元信息（包括上传路径、上传签名等），用于后续上传接口。
* 上传流程请参考 [服务端上传综述](/document/product/266/9759)。
     * @param {ApplyUploadRequest} req
     * @param {function(string, ApplyUploadResponse):void} cb
     * @public
     */
    ApplyUpload(req, cb) {
        let resp = new ApplyUploadResponse();
        this.request("ApplyUpload", req, resp, cb);
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
     * 根据视频内容分析模板唯一标识，获取视频内容分析模板详情列表。返回结果包含符合条件的所有用户自定义视频内容分析模板及[系统预置视频内容分析模板](https://cloud.tencent.com/document/product/266/33476#.E9.A2.84.E7.BD.AE.E8.A7.86.E9.A2.91.E5.86.85.E5.AE.B9.E5.88.86.E6.9E.90.E6.A8.A1.E6.9D.BF)。
     * @param {DescribeAIAnalysisTemplatesRequest} req
     * @param {function(string, DescribeAIAnalysisTemplatesResponse):void} cb
     * @public
     */
    DescribeAIAnalysisTemplates(req, cb) {
        let resp = new DescribeAIAnalysisTemplatesResponse();
        this.request("DescribeAIAnalysisTemplates", req, resp, cb);
    }

    /**
     * * 该接口用于业务服务器以 [可靠回调](https://cloud.tencent.com/document/product/266/33779#.E5.8F.AF.E9.9D.A0.E5.9B.9E.E8.B0.83) 的方式获取事件通知；
* 接口为长轮询模式，即：如果服务端存在未消费事件，则立即返回给请求方；如果服务端没有未消费事件，则后台会将请求挂起，直到有新的事件产生为止；
* 请求最多挂起5秒，建议请求方将超时时间设置为10秒；
* 未被拉取的事件通知最多保留4天，超过该时限的事件通知可能会被清除；
* 若该接口有事件返回，调用方必须在<font color="red">30秒</font>内调用 [确认事件通知](https://cloud.tencent.com/document/product/266/33434) 接口，确认事件通知已经处理，否则该事件通知在<font color="red">30秒</font>后会再次被拉取到。
* 当前，API 每次最多可以获取16个事件通知。
     * @param {PullEventsRequest} req
     * @param {function(string, PullEventsResponse):void} cb
     * @public
     */
    PullEvents(req, cb) {
        let resp = new PullEventsResponse();
        this.request("PullEvents", req, resp, cb);
    }

    /**
     * 使用任务流模板，对点播中的视频发起处理任务。
有两种方式创建任务流模板：
1. 在控制台上创建和修改任务流模板；
2. 通过任务流模板接口创建任务流模板。

如使用事件通知，事件通知的类型为 [任务流状态变更](https://cloud.tencent.com/document/product/266/9636)。
     * @param {ProcessMediaByProcedureRequest} req
     * @param {function(string, ProcessMediaByProcedureResponse):void} cb
     * @public
     */
    ProcessMediaByProcedure(req, cb) {
        let resp = new ProcessMediaByProcedureResponse();
        this.request("ProcessMediaByProcedure", req, resp, cb);
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
     * <b>本接口已不推荐使用，用 [DescribeMediaProcessUsageData](/document/product/266/41464) 替代</b>

该接口返回查询时间范围内每天使用的视频内容智能识别时长数据，单位： 秒。

1. 可以查询最近365天内的视频内容智能识别时长统计数据。
2. 查询时间跨度不超过90天。
     * @param {DescribeReviewDetailsRequest} req
     * @param {function(string, DescribeReviewDetailsResponse):void} cb
     * @public
     */
    DescribeReviewDetails(req, cb) {
        let resp = new DescribeReviewDetailsResponse();
        this.request("DescribeReviewDetails", req, resp, cb);
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
     * 查询存储空间使用情况和文件数量。
     * @param {DescribeStorageDataRequest} req
     * @param {function(string, DescribeStorageDataResponse):void} cb
     * @public
     */
    DescribeStorageData(req, cb) {
        let resp = new DescribeStorageDataResponse();
        this.request("DescribeStorageData", req, resp, cb);
    }

    /**
     * 对点播视频进行拆条，生成多个新的点播视频。
     * @param {SplitMediaRequest} req
     * @param {function(string, SplitMediaResponse):void} cb
     * @public
     */
    SplitMedia(req, cb) {
        let resp = new SplitMediaResponse();
        this.request("SplitMedia", req, resp, cb);
    }

    /**
     * 获取图片处理模板列表，支持根据条件，分页查询。
     * @param {DescribeImageProcessingTemplatesRequest} req
     * @param {function(string, DescribeImageProcessingTemplatesResponse):void} cb
     * @public
     */
    DescribeImageProcessingTemplates(req, cb) {
        let resp = new DescribeImageProcessingTemplatesResponse();
        this.request("DescribeImageProcessingTemplates", req, resp, cb);
    }

    /**
     * 删除用户自定义的任务流模板。  
     * @param {DeleteProcedureTemplateRequest} req
     * @param {function(string, DeleteProcedureTemplateResponse):void} cb
     * @public
     */
    DeleteProcedureTemplate(req, cb) {
        let resp = new DeleteProcedureTemplateResponse();
        this.request("DeleteProcedureTemplate", req, resp, cb);
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
     * 本 API 是 [旧版本加密](https://cloud.tencent.com/document/product/266/9638) 中[DescribeDrmDataKey 的 API 2017 接口](https://cloud.tencent.com/document/product/266/9643)的升级版本。
如果您是新接入点播加密的用户，不要使用该 API。请参考[视频加密综述](https://cloud.tencent.com/document/product/266/45552)使用。
     * @param {DescribeDrmDataKeyRequest} req
     * @param {function(string, DescribeDrmDataKeyResponse):void} cb
     * @public
     */
    DescribeDrmDataKey(req, cb) {
        let resp = new DescribeDrmDataKeyResponse();
        this.request("DescribeDrmDataKey", req, resp, cb);
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
     * 查询点播域名的 CDN 访问日志的下载链接。
    1. 可以查询最近30天内的 CDN 日志下载链接。
    2. 默认情况下 CDN 每小时生成一个日志文件，如果某一个小时没有 CDN 访问，不会生成日志文件。    
    3. CDN 日志下载链接的有效期为24小时。
     * @param {DescribeCdnLogsRequest} req
     * @param {function(string, DescribeCdnLogsResponse):void} cb
     * @public
     */
    DescribeCdnLogs(req, cb) {
        let resp = new DescribeCdnLogsResponse();
        this.request("DescribeCdnLogs", req, resp, cb);
    }

    /**
     * 修改媒体分类属性。
     * @param {ModifyClassRequest} req
     * @param {function(string, ModifyClassResponse):void} cb
     * @public
     */
    ModifyClass(req, cb) {
        let resp = new ModifyClassResponse();
        this.request("ModifyClass", req, resp, cb);
    }

    /**
     * * 该接口用于查询任务列表；
* 当列表数据比较多时，单次接口调用无法拉取整个列表，可通过 ScrollToken 参数，分批拉取；
* 只能查询到最近三天（72 小时）内的任务。
     * @param {DescribeTasksRequest} req
     * @param {function(string, DescribeTasksResponse):void} cb
     * @public
     */
    DescribeTasks(req, cb) {
        let resp = new DescribeTasksResponse();
        this.request("DescribeTasks", req, resp, cb);
    }

    /**
     * 该接口用于开通某地域的存储。
  1. 用户开通点播业务时，系统默认为用户开通了部分地域的存储，用户如果需要开通其它地域的存储，可以通过该接口进行开通。
  2. 通过 DescribeStorageRegions 接口可以查询到所有存储地域及已经开通的地域。
     * @param {CreateStorageRegionRequest} req
     * @param {function(string, CreateStorageRegionResponse):void} cb
     * @public
     */
    CreateStorageRegion(req, cb) {
        let resp = new CreateStorageRegionResponse();
        this.request("CreateStorageRegion", req, resp, cb);
    }

    /**
     * 重新设置用户自定义任务流模板的内容。  
     * @param {ResetProcedureTemplateRequest} req
     * @param {function(string, ResetProcedureTemplateResponse):void} cb
     * @public
     */
    ResetProcedureTemplate(req, cb) {
        let resp = new ResetProcedureTemplateResponse();
        this.request("ResetProcedureTemplate", req, resp, cb);
    }

    /**
     * 该接口用于查询点播 CDN 的流量、带宽等统计数据。
   1. 可以查询最近365天内的 CDN 用量数据。
   2.  查询时间跨度不超过90天。
   3. 可以指定用量数据的时间粒度，支持5分钟、1小时、1天的时间粒度。
   4.  流量为查询时间粒度内的总流量，带宽为查询时间粒度内的峰值带宽。
     * @param {DescribeCDNUsageDataRequest} req
     * @param {function(string, DescribeCDNUsageDataResponse):void} cb
     * @public
     */
    DescribeCDNUsageData(req, cb) {
        let resp = new DescribeCDNUsageDataResponse();
        this.request("DescribeCDNUsageData", req, resp, cb);
    }

    /**
     * 创建用户自定义转码模板，数量上限：100。
     * @param {CreateTranscodeTemplateRequest} req
     * @param {function(string, CreateTranscodeTemplateResponse):void} cb
     * @public
     */
    CreateTranscodeTemplate(req, cb) {
        let resp = new CreateTranscodeTemplateResponse();
        this.request("CreateTranscodeTemplate", req, resp, cb);
    }

    /**
     * 该接口用于查询点播域名的 CDN 带宽、流量等统计数据。
* 查询的起始时间和结束时间跨度不超过90天。
* 可以查询不同服务区域的数据。
* 中国境内的数据支持查询指定地区、运营商的统计数据。
     * @param {DescribeCDNStatDetailsRequest} req
     * @param {function(string, DescribeCDNStatDetailsResponse):void} cb
     * @public
     */
    DescribeCDNStatDetails(req, cb) {
        let resp = new DescribeCDNStatDetailsResponse();
        this.request("DescribeCDNStatDetails", req, resp, cb);
    }

    /**
     * 该接口用于查询媒体文件按指定时间粒度统计的播放数据
* 可以查询最近一年的播放统计数据。
* 时间粒度为小时，结束时间和起始时间的跨度最大为7天。
* 时间粒度为天，结束时间和起始时间的跨度最大为90天。
     * @param {DescribeMediaPlayStatDetailsRequest} req
     * @param {function(string, DescribeMediaPlayStatDetailsResponse):void} cb
     * @public
     */
    DescribeMediaPlayStatDetails(req, cb) {
        let resp = new DescribeMediaPlayStatDetailsResponse();
        this.request("DescribeMediaPlayStatDetails", req, resp, cb);
    }

    /**
     * 该接口返回查询时间范围内每天 License 请求次数信息。
   1. 可以查询最近365天内的 License 请求次数统计数据。
   2. 查询时间跨度不超过90天。
   3. 查询时间跨度超过1天的，返回以天为粒度的数据，否则，返回以5分钟为粒度的数据。

     * @param {DescribeLicenseUsageDataRequest} req
     * @param {function(string, DescribeLicenseUsageDataResponse):void} cb
     * @public
     */
    DescribeLicenseUsageData(req, cb) {
        let resp = new DescribeLicenseUsageDataResponse();
        this.request("DescribeLicenseUsageData", req, resp, cb);
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
     * * 仅当待删分类无子分类且无媒体关联情况下，可删除分类；
* 否则，请先执行[删除媒体](/document/product/266/31764)及子分类，再删除该分类；
     * @param {DeleteClassRequest} req
     * @param {function(string, DeleteClassResponse):void} cb
     * @public
     */
    DeleteClass(req, cb) {
        let resp = new DeleteClassResponse();
        this.request("DeleteClass", req, resp, cb);
    }

    /**
     * 本接口仅用于定制开发的特殊场景，除非云点播客服人员主动告知您需要使用本接口，其它情况请勿调用。
     * @param {ExecuteFunctionRequest} req
     * @param {function(string, ExecuteFunctionResponse):void} cb
     * @public
     */
    ExecuteFunction(req, cb) {
        let resp = new ExecuteFunctionResponse();
        this.request("ExecuteFunction", req, resp, cb);
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
     * 该接口返回查询时间范围内每天使用的视频处理用量信息。
   1. 可以查询最近365天内的视频处理统计数据。
   2. 查询时间跨度不超过90天。
     * @param {DescribeMediaProcessUsageDataRequest} req
     * @param {function(string, DescribeMediaProcessUsageDataResponse):void} cb
     * @public
     */
    DescribeMediaProcessUsageData(req, cb) {
        let resp = new DescribeMediaProcessUsageDataResponse();
        this.request("DescribeMediaProcessUsageData", req, resp, cb);
    }

    /**
     * 该接口可以查询用户已经购买的预付费商品的信息，包括：
    1. 商品的类型、生效和失效日期。
    2. 商品中每种资源的额度和剩余额度。
     * @param {DescribePrepaidProductsRequest} req
     * @param {function(string, DescribePrepaidProductsResponse):void} cb
     * @public
     */
    DescribePrepaidProducts(req, cb) {
        let resp = new DescribePrepaidProductsResponse();
        this.request("DescribePrepaidProducts", req, resp, cb);
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
     * 该接口用于制作媒体文件，可以

1. 对一个媒体文件进行剪辑，生成一个新的媒体文件；
2. 对多个媒体文件进行裁剪拼接，生成一个新的媒体文件；
3. 对多个媒体文件的媒体流进行裁剪拼接，生成一个新的媒体文件。

如使用事件通知，事件通知的类型为 [视频合成完成](https://cloud.tencent.com/document/product/266/43000)。
     * @param {ComposeMediaRequest} req
     * @param {function(string, ComposeMediaResponse):void} cb
     * @public
     */
    ComposeMedia(req, cb) {
        let resp = new ComposeMediaResponse();
        this.request("ComposeMedia", req, resp, cb);
    }

    /**
     * 创建用户自定义视频内容智能识别模板，数量上限：50。
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
     * 删除用户自定义视频内容分析模板。

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
2. 可以指定回包只返回部分信息。
     * @param {DescribeMediaInfosRequest} req
     * @param {function(string, DescribeMediaInfosResponse):void} cb
     * @public
     */
    DescribeMediaInfos(req, cb) {
        let resp = new DescribeMediaInfosResponse();
        this.request("DescribeMediaInfos", req, resp, cb);
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

### 剪辑不固化
所谓剪辑不固化，是指剪辑所得到的结果（m3u8 文件）与直播录制视频共享相同的 ts 分片，新生成的视频不是一个独立完整的视频（没有独立 FileId，只有播放 URL），其有效期与直播录制的完整视频有效期是一致的。一旦直播录制出来的视频被删除，也会导致该片段无法播放。

剪辑不固化，由于其剪辑结果不是一个独立的视频，因而也不会纳入点播媒资视频管理（例如控制台的视频总数不会统计这一片段）中，也无法单独针对这个片段做转码、微信发布等任何视频处理操作。

剪辑不固化的优势在于其剪辑操作十分“轻量化”，不会产生额外的存储开销。但其不足之处在于生命周期与原始录制视频相同，且无法进一步进行转码等视频处理。

     * @param {LiveRealTimeClipRequest} req
     * @param {function(string, LiveRealTimeClipResponse):void} cb
     * @public
     */
    LiveRealTimeClip(req, cb) {
        let resp = new LiveRealTimeClipResponse();
        this.request("LiveRealTimeClip", req, resp, cb);
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
     * @param {ModifyMediaStorageClassRequest} req
     * @param {function(string, ModifyMediaStorageClassResponse):void} cb
     * @public
     */
    ModifyMediaStorageClass(req, cb) {
        let resp = new ModifyMediaStorageClassResponse();
        this.request("ModifyMediaStorageClass", req, resp, cb);
    }

    /**
     * 该接口用于将一个网络上的视频拉取到云点播平台。
     * @param {PullUploadRequest} req
     * @param {function(string, PullUploadResponse):void} cb
     * @public
     */
    PullUpload(req, cb) {
        let resp = new PullUploadResponse();
        this.request("PullUpload", req, resp, cb);
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
     * 该接口用于修改点播域名的加速区域。
1、域名部署状态为 Online 状态时才允许修改加速区域。
     * @param {ModifyVodDomainAccelerateConfigRequest} req
     * @param {function(string, ModifyVodDomainAccelerateConfigResponse):void} cb
     * @public
     */
    ModifyVodDomainAccelerateConfig(req, cb) {
        let resp = new ModifyVodDomainAccelerateConfigResponse();
        this.request("ModifyVodDomainAccelerateConfig", req, resp, cb);
    }

    /**
     * 删除超级播放器配置。  
*注：系统预置播放器配置不允许删除。*
     * @param {DeleteSuperPlayerConfigRequest} req
     * @param {function(string, DeleteSuperPlayerConfigResponse):void} cb
     * @public
     */
    DeleteSuperPlayerConfig(req, cb) {
        let resp = new DeleteSuperPlayerConfigResponse();
        this.request("DeleteSuperPlayerConfig", req, resp, cb);
    }

    /**
     * 根据任务流模板名字，获取任务流模板详情列表。
     * @param {DescribeProcedureTemplatesRequest} req
     * @param {function(string, DescribeProcedureTemplatesResponse):void} cb
     * @public
     */
    DescribeProcedureTemplates(req, cb) {
        let resp = new DescribeProcedureTemplatesResponse();
        this.request("DescribeProcedureTemplates", req, resp, cb);
    }

    /**
     * 该接口用于删除点播加速域名。
1、域名删除前需要先关闭所有区域的加速。
     * @param {DeleteVodDomainRequest} req
     * @param {function(string, DeleteVodDomainResponse):void} cb
     * @public
     */
    DeleteVodDomain(req, cb) {
        let resp = new DeleteVodDomainResponse();
        this.request("DeleteVodDomain", req, resp, cb);
    }

    /**
     * 上传 HLS 视频时，解析索引文件内容，返回待上传的分片文件列表。分片文件路径必须是当前目录或子目录的相对路径，不能是 URL，不能是绝对路径。
     * @param {ParseStreamingManifestRequest} req
     * @param {function(string, ParseStreamingManifestResponse):void} cb
     * @public
     */
    ParseStreamingManifest(req, cb) {
        let resp = new ParseStreamingManifestResponse();
        this.request("ParseStreamingManifest", req, resp, cb);
    }

    /**
     * 该 API 已经<font color='red'>不再维护</font>，智能识别任务请使用图片智能识别 [ReviewImage](https://cloud.tencent.com/document/api/266/73217) 接口。

对点播中的图片文件发起处理任务，功能包括：

1. 智能识别（令人反感的信息、不安全的信息、不适宜的信息）;

><li>图片文件大小支持：文件 < 5M；</li>
><li>图片文件分辨率支持：建议分辨率大于256x256，否则可能会影响识别效果；</li>
><li>图片文件支持格式：PNG、JPG、JPEG、BMP、GIF、WEBP格式。</li>

     * @param {ProcessImageRequest} req
     * @param {function(string, ProcessImageResponse):void} cb
     * @public
     */
    ProcessImage(req, cb) {
        let resp = new ProcessImageResponse();
        this.request("ProcessImage", req, resp, cb);
    }

    /**
     * 创建用户自定义的任务流模板，模板上限：50。
     * @param {CreateProcedureTemplateRequest} req
     * @param {function(string, CreateProcedureTemplateResponse):void} cb
     * @public
     */
    CreateProcedureTemplate(req, cb) {
        let resp = new CreateProcedureTemplateResponse();
        this.request("CreateProcedureTemplate", req, resp, cb);
    }

    /**
     * 1. 预热指定的 URL 列表。
2. URL 的域名必须已在云点播中注册。
3. 单次请求最多指定20个 URL。
     * @param {PushUrlCacheRequest} req
     * @param {function(string, PushUrlCacheResponse):void} cb
     * @public
     */
    PushUrlCache(req, cb) {
        let resp = new PushUrlCacheResponse();
        this.request("PushUrlCache", req, resp, cb);
    }

    /**
     * * 删除媒体及其对应的视频处理文件（原始文件、如转码视频、雪碧图、截图、微信发布视频等）；
* 可单独删除指定 ID 的视频文件下的原文件、转码视频、微信发布视频等；
* 注意：原文件删除后，无法发起转码、微信发布等任何视频处理操作。
     * @param {DeleteMediaRequest} req
     * @param {function(string, DeleteMediaResponse):void} cb
     * @public
     */
    DeleteMedia(req, cb) {
        let resp = new DeleteMediaResponse();
        this.request("DeleteMedia", req, resp, cb);
    }

    /**
     * 该接口返回查询时间范围内每天使用的图片智能识别用量信息。
   1. 可以查询最近365天内的图片智能识别统计数据。
   2. 查询时间跨度不超过90天。
   3. 查询时间跨度超过1天的，返回以天为粒度的数据，否则，返回以5分钟为粒度的数据。

     * @param {DescribeImageReviewUsageDataRequest} req
     * @param {function(string, DescribeImageReviewUsageDataResponse):void} cb
     * @public
     */
    DescribeImageReviewUsageData(req, cb) {
        let resp = new DescribeImageReviewUsageDataResponse();
        this.request("DescribeImageReviewUsageData", req, resp, cb);
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
     * 该接口用于查询指定日期范围内每天的播放统计数据。
* 可以查询最近一年的播放统计数据。
* 结束日期和起始日期的时间跨度最大为90天。
     * @param {DescribeDailyMediaPlayStatRequest} req
     * @param {function(string, DescribeDailyMediaPlayStatResponse):void} cb
     * @public
     */
    DescribeDailyMediaPlayStat(req, cb) {
        let resp = new DescribeDailyMediaPlayStatResponse();
        this.request("DescribeDailyMediaPlayStat", req, resp, cb);
    }

    /**
     * 删除用户自定义视频内容智能识别模板。
     * @param {DeleteContentReviewTemplateRequest} req
     * @param {function(string, DeleteContentReviewTemplateResponse):void} cb
     * @public
     */
    DeleteContentReviewTemplate(req, cb) {
        let resp = new DeleteContentReviewTemplateResponse();
        this.request("DeleteContentReviewTemplate", req, resp, cb);
    }

    /**
     * 创建用户自定义视频内容分析模板，数量上限：50。
     * @param {CreateAIAnalysisTemplateRequest} req
     * @param {function(string, CreateAIAnalysisTemplateResponse):void} cb
     * @public
     */
    CreateAIAnalysisTemplate(req, cb) {
        let resp = new CreateAIAnalysisTemplateResponse();
        this.request("CreateAIAnalysisTemplate", req, resp, cb);
    }

    /**
     * 该接口用于查询每日播放Top100 的媒体文件的播放统计数据。
* 可以查询最近一年的播放统计数据。
* 可以按播放次数或者播放流量查询。
* 播放次数统计说明：
    1. HLS 文件：访问 M3U8 文件时统计播放次数；访问 TS 文件不统计播放次数。
    2. 其它文件（如 MP4 文件）：播放请求带有 range 参数且 range 的 start 参数不等于0时不统计播放次数，其它情况统计播放次数。
     * @param {DescribeDailyMostPlayedStatRequest} req
     * @param {function(string, DescribeDailyMostPlayedStatResponse):void} cb
     * @public
     */
    DescribeDailyMostPlayedStat(req, cb) {
        let resp = new DescribeDailyMostPlayedStatResponse();
        this.request("DescribeDailyMostPlayedStat", req, resp, cb);
    }

    /**
     * 该接口用于：
  1. 查询点播可开通的所有存储园区列表。
  2. 查询已经开通的园区列表。
  3. 查询默认使用的存储园区。
     * @param {DescribeStorageRegionsRequest} req
     * @param {function(string, DescribeStorageRegionsResponse):void} cb
     * @public
     */
    DescribeStorageRegions(req, cb) {
        let resp = new DescribeStorageRegionsResponse();
        this.request("DescribeStorageRegions", req, resp, cb);
    }

    /**
     * * 该接口用于业务服务器获取 [可靠回调](https://cloud.tencent.com/document/product/266/33779#.E5.8F.AF.E9.9D.A0.E5.9B.9E.E8.B0.83) 事件通知的状态。

     * @param {DescribeEventsStateRequest} req
     * @param {function(string, DescribeEventsStateResponse):void} cb
     * @public
     */
    DescribeEventsState(req, cb) {
        let resp = new DescribeEventsStateResponse();
        this.request("DescribeEventsState", req, resp, cb);
    }

    /**
     * 创建超级播放器配置，数量上限：100。
     * @param {CreateSuperPlayerConfigRequest} req
     * @param {function(string, CreateSuperPlayerConfigResponse):void} cb
     * @public
     */
    CreateSuperPlayerConfig(req, cb) {
        let resp = new CreateSuperPlayerConfigResponse();
        this.request("CreateSuperPlayerConfig", req, resp, cb);
    }

    /**
     * 该接口用于修改域名配置，可以修改域名的防盗链配置。
1、域名部署状态为 Online 状态时才允许修改域名的配置。
     * @param {ModifyVodDomainConfigRequest} req
     * @param {function(string, ModifyVodDomainConfigResponse):void} cb
     * @public
     */
    ModifyVodDomainConfig(req, cb) {
        let resp = new ModifyVodDomainConfigResponse();
        this.request("ModifyVodDomainConfig", req, resp, cb);
    }

    /**
     * * 开发者调用拉取事件通知，获取到事件后，必须调用该接口来确认消息已经收到；
* 开发者获取到事件句柄后，等待确认的有效时间为 30 秒，超出 30 秒会报参数错误（4000）；
* 更多参考事件通知的[可靠回调](https://cloud.tencent.com/document/product/266/33779#.E5.8F.AF.E9.9D.A0.E5.9B.9E.E8.B0.83)。
     * @param {ConfirmEventsRequest} req
     * @param {function(string, ConfirmEventsResponse):void} cb
     * @public
     */
    ConfirmEvents(req, cb) {
        let resp = new ConfirmEventsResponse();
        this.request("ConfirmEvents", req, resp, cb);
    }

    /**
     * 该 API 已经<font color='red'>不再维护</font>，请使用 MPS 产品的 [ProcessMedia](https://cloud.tencent.com/document/product/862/37578) 接口，在入参 InputInfo.UrlInputInfo.Url 中指定视频 URL。
     * @param {ProcessMediaByUrlRequest} req
     * @param {function(string, ProcessMediaByUrlResponse):void} cb
     * @public
     */
    ProcessMediaByUrl(req, cb) {
        let resp = new ProcessMediaByUrlResponse();
        this.request("ProcessMediaByUrl", req, resp, cb);
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
     * 根据视频内容智能识别模板唯一标识，获取视频内容智能识别模板详情列表。返回结果包含符合条件的所有用户自定义模板及[系统预置内容智能识别模板](https://cloud.tencent.com/document/product/266/33476#.E9.A2.84.E7.BD.AE.E8.A7.86.E9.A2.91.E5.86.85.E5.AE.B9.E5.AE.A1.E6.A0.B8.E6.A8.A1.E6.9D.BF)。
     * @param {DescribeContentReviewTemplatesRequest} req
     * @param {function(string, DescribeContentReviewTemplatesResponse):void} cb
     * @public
     */
    DescribeContentReviewTemplates(req, cb) {
        let resp = new DescribeContentReviewTemplatesResponse();
        this.request("DescribeContentReviewTemplates", req, resp, cb);
    }

    /**
     * 修改片头片尾模板。
     * @param {ModifyHeadTailTemplateRequest} req
     * @param {function(string, ModifyHeadTailTemplateResponse):void} cb
     * @public
     */
    ModifyHeadTailTemplate(req, cb) {
        let resp = new ModifyHeadTailTemplateResponse();
        this.request("ModifyHeadTailTemplate", req, resp, cb);
    }

    /**
     * 删除用户自定义图片处理模板。
     * @param {DeleteImageProcessingTemplateRequest} req
     * @param {function(string, DeleteImageProcessingTemplateResponse):void} cb
     * @public
     */
    DeleteImageProcessingTemplate(req, cb) {
        let resp = new DeleteImageProcessingTemplateResponse();
        this.request("DeleteImageProcessingTemplate", req, resp, cb);
    }

    /**
     * 创建片头片尾模板。
     * @param {CreateHeadTailTemplateRequest} req
     * @param {function(string, CreateHeadTailTemplateResponse):void} cb
     * @public
     */
    CreateHeadTailTemplate(req, cb) {
        let resp = new CreateHeadTailTemplateResponse();
        this.request("CreateHeadTailTemplate", req, resp, cb);
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
     * 该接口返回查询时间范围内使用的点播存储空间，单位：字节。
    1. 可以查询最近365天内的存储空间数据；
    2. 查询时间跨度不超过90天；
    3. 分钟粒度查询跨度不超过7天；
     * @param {DescribeStorageDetailsRequest} req
     * @param {function(string, DescribeStorageDetailsResponse):void} cb
     * @public
     */
    DescribeStorageDetails(req, cb) {
        let resp = new DescribeStorageDetailsResponse();
        this.request("DescribeStorageDetails", req, resp, cb);
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
     * 该接口用于将加速域名添加到点播，一个用户最多添加20个加速域名。
1.域名添加成功后点播会进行域名的部署，域名由部署状态变为在线状态大概需要2分钟的时间。
     * @param {CreateVodDomainRequest} req
     * @param {function(string, CreateVodDomainResponse):void} cb
     * @public
     */
    CreateVodDomain(req, cb) {
        let resp = new CreateVodDomainResponse();
        this.request("CreateVodDomain", req, resp, cb);
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
     * 删除用户自定义视频内容识别模板。
     * @param {DeleteAIRecognitionTemplateRequest} req
     * @param {function(string, DeleteAIRecognitionTemplateResponse):void} cb
     * @public
     */
    DeleteAIRecognitionTemplate(req, cb) {
        let resp = new DeleteAIRecognitionTemplateResponse();
        this.request("DeleteAIRecognitionTemplate", req, resp, cb);
    }

    /**
     * 该接口用于创建点播子应用。
     * @param {CreateSubAppIdRequest} req
     * @param {function(string, CreateSubAppIdResponse):void} cb
     * @public
     */
    CreateSubAppId(req, cb) {
        let resp = new CreateSubAppIdResponse();
        this.request("CreateSubAppId", req, resp, cb);
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
     * * 对媒体禁播后，除了点播控制台预览，其他场景访问视频各种资源的 URL（原始文件、转码输出文件、截图等）均会返回 403。
  禁播/解禁操作全网生效时间约 5~10 分钟。
     * @param {ForbidMediaDistributionRequest} req
     * @param {function(string, ForbidMediaDistributionResponse):void} cb
     * @public
     */
    ForbidMediaDistribution(req, cb) {
        let resp = new ForbidMediaDistributionResponse();
        this.request("ForbidMediaDistribution", req, resp, cb);
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
     * 修改用户自定义视频内容分析模板。

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
     * 修改超级播放器配置。
     * @param {ModifySuperPlayerConfigRequest} req
     * @param {function(string, ModifySuperPlayerConfigResponse):void} cb
     * @public
     */
    ModifySuperPlayerConfig(req, cb) {
        let resp = new ModifySuperPlayerConfigResponse();
        this.request("ModifySuperPlayerConfig", req, resp, cb);
    }

    /**
     * * 用于对媒体进行分类管理；
* 该接口不影响既有媒体的分类，如需修改媒体分类，请调用[修改媒体文件属性](/document/product/266/31762)接口。
* 分类层次不可超过 4 层。
* 每个分类的子类数量不可超过 500 个。
     * @param {CreateClassRequest} req
     * @param {function(string, CreateClassResponse):void} cb
     * @public
     */
    CreateClass(req, cb) {
        let resp = new CreateClassResponse();
        this.request("CreateClass", req, resp, cb);
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
     * 腾讯云点播为客户提供了媒体上传、媒体管理、媒体处理等等服务，在这些服务执行过程或执行结束时，腾讯云点播也提供各种对应的事件通知，方便开发者感知服务处理状态，并做下一步的业务操作。

开发者可以通过本接口来查询当前配置事件通知的接收方式、接收地址以及哪些事件开启了接收回调通知。

默认接口请求频率限制：100次/秒。
     * @param {DescribeEventConfigRequest} req
     * @param {function(string, DescribeEventConfigResponse):void} cb
     * @public
     */
    DescribeEventConfig(req, cb) {
        let resp = new DescribeEventConfigResponse();
        this.request("DescribeEventConfig", req, resp, cb);
    }

    /**
     * 该接口用于修改子应用信息，但不允许修改主应用信息。
     * @param {ModifySubAppIdInfoRequest} req
     * @param {function(string, ModifySubAppIdInfoResponse):void} cb
     * @public
     */
    ModifySubAppIdInfo(req, cb) {
        let resp = new ModifySubAppIdInfoResponse();
        this.request("ModifySubAppIdInfo", req, resp, cb);
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
     * * 获得用户的所有分类信息。
     * @param {DescribeAllClassRequest} req
     * @param {function(string, DescribeAllClassResponse):void} cb
     * @public
     */
    DescribeAllClass(req, cb) {
        let resp = new DescribeAllClassResponse();
        this.request("DescribeAllClass", req, resp, cb);
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
     * 根据视频内容识别模板唯一标识，获取视频内容识别模板详情列表。返回结果包含符合条件的所有用户自定义视频内容识别模板及[系统预置视频内容识别模板](https://cloud.tencent.com/document/product/266/33476#.E9.A2.84.E7.BD.AE.E8.A7.86.E9.A2.91.E5.86.85.E5.AE.B9.E8.AF.86.E5.88.AB.E6.A8.A1.E6.9D.BF)。
     * @param {DescribeAIRecognitionTemplatesRequest} req
     * @param {function(string, DescribeAIRecognitionTemplatesResponse):void} cb
     * @public
     */
    DescribeAIRecognitionTemplates(req, cb) {
        let resp = new DescribeAIRecognitionTemplatesResponse();
        this.request("DescribeAIRecognitionTemplates", req, resp, cb);
    }

    /**
     * 创建用户自定义视频内容识别模板，数量上限：50。
     * @param {CreateAIRecognitionTemplateRequest} req
     * @param {function(string, CreateAIRecognitionTemplateResponse):void} cb
     * @public
     */
    CreateAIRecognitionTemplate(req, cb) {
        let resp = new CreateAIRecognitionTemplateResponse();
        this.request("CreateAIRecognitionTemplate", req, resp, cb);
    }

    /**
     * 该接口用于获取当前账号的子应用列表，包含主应用。
     * @param {DescribeSubAppIdsRequest} req
     * @param {function(string, DescribeSubAppIdsResponse):void} cb
     * @public
     */
    DescribeSubAppIds(req, cb) {
        let resp = new DescribeSubAppIdsResponse();
        this.request("DescribeSubAppIds", req, resp, cb);
    }

    /**
     * 获取片头片尾模板列表。
     * @param {DescribeHeadTailTemplatesRequest} req
     * @param {function(string, DescribeHeadTailTemplatesResponse):void} cb
     * @public
     */
    DescribeHeadTailTemplates(req, cb) {
        let resp = new DescribeHeadTailTemplatesResponse();
        this.request("DescribeHeadTailTemplates", req, resp, cb);
    }

    /**
     * 该接口用于确认媒体文件（和封面文件）上传到腾讯云点播的结果，并存储媒体信息，返回文件的播放地址和文件 ID。
     * @param {CommitUploadRequest} req
     * @param {function(string, CommitUploadResponse):void} cb
     * @public
     */
    CommitUpload(req, cb) {
        let resp = new CommitUploadResponse();
        this.request("CommitUpload", req, resp, cb);
    }

    /**
     * 修改用户自定义视频内容识别模板。
     * @param {ModifyAIRecognitionTemplateRequest} req
     * @param {function(string, ModifyAIRecognitionTemplateResponse):void} cb
     * @public
     */
    ModifyAIRecognitionTemplate(req, cb) {
        let resp = new ModifyAIRecognitionTemplateResponse();
        this.request("ModifyAIRecognitionTemplate", req, resp, cb);
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
     * 搜索媒体信息，支持多种条件筛选，以及支持对返回结果排序、过滤等功能，具体包括：
- 指定文件 ID 集合 FileIds ，返回匹配集合中任意 ID 的媒体。
- 根据多个媒体文件名 Names 或描述信息 Descriptions 进行模糊搜索。
- 根据多个文件名前缀 NamePrefixes 进行搜索。
- 指定分类集合 ClassIds（见输入参数），返回满足集合中任意分类的媒体。例如：媒体分类有电影、电视剧、综艺等，其中电影分类下又有子分类历史片、动作片、言情片。如果 ClassIds 指定了电影、电视剧，那么电影和电视剧下的所有子分类都会返回；而如果 ClassIds 指定的是历史片、动作片，那么只有这2个子分类下的媒体才会返回。
- 指定标签集合 Tags（见输入参数），返回满足集合中任意标签的媒体。例如：媒体标签有二次元、宫斗、鬼畜，如果 Tags 指定了二次元、鬼畜2个标签，那么只要符合这2个标签中任意一个的媒体都会被检索出来。
- 指定文件类型集合 Categories（见输入参数），返回满足集合中任意类型的媒体。例如：文件类型有 Video（视频）、 Audio （音频）、 Image （图片）。如果Categories指定了 Video 和 Audio 2个文件类型，那么符合这些类型的媒体都会被检索出来。
- 指定来源集合 SourceTypes（见输入参数），返回满足集合中任意来源的媒体。例如：媒体来源有 Record (直播录制)、Upload （上传）等。如果 SourceTypes 指定了 Record 和 Upload ，那么符合这些来源的媒体都会被检索出来。
- 指定直播推流码集合 StreamIds（见输入参数）筛选直播录制的媒体。
- 指定视频 ID 集合 Vids （见输入参数）筛选直播录制的媒体。
- 指定媒体的创建时间范围筛选媒体。
- （不推荐：应使用 Names、NamePrefixes 或 Descriptions 替代）指定单个文本 Text 对媒体文件名或描述信息进行模糊搜索。
- （不推荐：应使用 SourceTypes 替代）指定单个媒体文件来源 SourceType 进行搜索。
- （不推荐：应使用 StreamIds 替代）指定单个推流直播码 StreamId 进行搜索。
- （不推荐：应使用 Vids 替代）指定单个视频 ID Vid 进行搜索。
- （不推荐：应使用 CreateTime 替代）指定单个起始创建时间 StartTime 进行搜索。
- （不推荐：应使用 CreateTime 替代）指定单个结尾创建时间 EndTime 进行搜索。
- 以上参数之间可以任意组合进行检索。例如：筛选创建时间在2018年12月1日12:00:00到2018年12月8日12:00:00之间、分类为电影或电视剧、带有宫斗和悬疑标签的媒体。注意，任何支持数组输入的参数，其元素之间的搜索逻辑为‘或’。所有参数之间的逻辑关系为‘与’。

- 允许对结果根据创建时间进行排序并分页返回，通过 Offset 和 Limit （见输入参数）来控制分页。
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

<div id="maxResultsDesc">接口返回结果数限制：</div>
- <b><a href="#p_offset">Offset</a> 和 <a href="#p_limit">Limit</a> 两个参数影响单次分页查询结果数。特别注意：当这2个值都缺省时，本接口最多只返回10条查询结果。</b>
- <b>最大支持返回5000条搜索结果，超出部分不再支持查询。如果搜索结果量太大，建议使用更精细的筛选条件来减少搜索结果。</b>
     * @param {SearchMediaRequest} req
     * @param {function(string, SearchMediaResponse):void} cb
     * @public
     */
    SearchMedia(req, cb) {
        let resp = new SearchMediaResponse();
        this.request("SearchMedia", req, resp, cb);
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
     * 该接口用于根据人物 ID，删除素材样本。
     * @param {DeletePersonSampleRequest} req
     * @param {function(string, DeletePersonSampleResponse):void} cb
     * @public
     */
    DeletePersonSample(req, cb) {
        let resp = new DeletePersonSampleResponse();
        this.request("DeletePersonSample", req, resp, cb);
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
     * 关联媒资字幕，将指定的字幕关联到转自适应码流模板号对应的媒体输出文件中（或解除关联）。
     * @param {AttachMediaSubtitlesRequest} req
     * @param {function(string, AttachMediaSubtitlesResponse):void} cb
     * @public
     */
    AttachMediaSubtitles(req, cb) {
        let resp = new AttachMediaSubtitlesResponse();
        this.request("AttachMediaSubtitles", req, resp, cb);
    }

    /**
     * 腾讯云点播为客户提供了媒体上传、媒体管理、媒体处理等等服务，在这些服务执行过程或执行结束时，腾讯云点播也提供各种对应的事件通知，方便开发者感知服务处理状态，并做下一步的业务操作。

开发者可以通过调用本接口来实现：
- 设置接收回调通知的类型，目前有[ HTTP 回调通知](https://cloud.tencent.com/document/product/266/33779) 和 [基于消息队列的可靠通知](https://cloud.tencent.com/document/product/266/33779) 两种类型。
- 对于[ HTTP 回调通知](https://cloud.tencent.com/document/product/266/33779)，可设置 3.0 格式回调的地址。3.0 格式回调的说明参见 [历史格式回调](https://cloud.tencent.com/document/product/266/33796)。
- 对具体事件服务的通知事件选择设置接收或者忽略。
     * @param {ModifyEventConfigRequest} req
     * @param {function(string, ModifyEventConfigResponse):void} cb
     * @public
     */
    ModifyEventConfig(req, cb) {
        let resp = new ModifyEventConfigResponse();
        this.request("ModifyEventConfig", req, resp, cb);
    }

    /**
     * 修改媒体文件的属性，包括分类、名称、描述、标签、过期时间、打点信息、视频封面、字幕信息等。
     * @param {ModifyMediaInfoRequest} req
     * @param {function(string, ModifyMediaInfoResponse):void} cb
     * @public
     */
    ModifyMediaInfo(req, cb) {
        let resp = new ModifyMediaInfoResponse();
        this.request("ModifyMediaInfo", req, resp, cb);
    }

    /**
     * 对点播中的图片文件发起智能识别（令人反感的信息、不安全的信息、不适宜的信息）任务。

><li>图片文件大小支持：文件 < 5M；</li>
><li>图片文件分辨率支持：建议分辨率大于256x256，否则可能会影响智能识别效果；</li>
><li>图片文件支持格式：PNG、JPG、JPEG、BMP、GIF、WEBP格式。</li>

     * @param {ReviewImageRequest} req
     * @param {function(string, ReviewImageResponse):void} cb
     * @public
     */
    ReviewImage(req, cb) {
        let resp = new ReviewImageResponse();
        this.request("ReviewImage", req, resp, cb);
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
     * 将点播视频发布到微信小程序，供微信小程序播放器播放。
本接口支持发布原始视频和转码后视频，暂不支持发布自适应码流。
     * @param {WeChatMiniProgramPublishRequest} req
     * @param {function(string, WeChatMiniProgramPublishResponse):void} cb
     * @public
     */
    WeChatMiniProgramPublish(req, cb) {
        let resp = new WeChatMiniProgramPublishResponse();
        this.request("WeChatMiniProgramPublish", req, resp, cb);
    }

    /**
     * 对 HLS 视频进行按时间段裁剪，实时生成一个新的视频（HLS 格式），开发者可以将其立即分享出去，或者长久保存起来。

腾讯云点播支持两种剪辑模式：
- 剪辑固化：将剪辑出来的视频保存成独立的视频，拥有独立 FileId；适用于将精彩片段长久保存的场景；
- 剪辑不固化：剪辑得到的视频附属于输入文件，没有独立 FileId；适用于将精彩片段临时分享的场景。

注意：
- 剪辑是基于输入 m3u8 文件进行的，故而其最小剪辑精度为一个 ts 切片，无法实现秒级或者更为精确的剪辑精度。


###剪辑固化
所谓剪辑固化，是指将剪辑出来的视频保存成一个独立的视频（拥有独立的 FileId）。其生命周期不受原始输入视频影响（即使原始输入视频被删除，剪辑结果也不会受到任何影响）；也可以对其进行转码、微信发布等二次处理。

举例如下：一场完整的足球比赛，原始视频可能长达 2 个小时，客户出于节省成本的目的可以对这个视频存储 2 个月，但对于剪辑的「精彩时刻」视频却可以指定存储更长时间，同时可以单独对「精彩时刻」视频进行转码、微信发布等额外的点播操作，这时候可以选择剪辑并且固化的方案。

剪辑固化的优势在于其生命周期与原始输入视频相互独立，可以独立管理、长久保存。

###剪辑不固化
所谓剪辑不固化，是指剪辑所得到的结果（m3u8 文件）与原始输入视频共享相同的 ts 分片，新生成的视频不是一个独立完整的视频（没有独立 FileId，只有播放 URL），其有效期与原始输入的完整视频有效期是一致的。一旦原始输入的视频被删除，也会导致该片段无法播放。

剪辑不固化，由于其剪辑结果不是一个独立的视频，因而也不会纳入点播媒资视频管理（例如控制台的视频总数不会统计这一片段）中，也无法单独针对这个片段做转码、微信发布等任何视频处理操作。

剪辑不固化的优势在于其剪辑操作十分“轻量化”，不会产生额外的存储开销。但其不足之处在于生命周期与原始录制视频相同，且无法进一步进行转码等视频处理。
     * @param {SimpleHlsClipRequest} req
     * @param {function(string, SimpleHlsClipResponse):void} cb
     * @public
     */
    SimpleHlsClip(req, cb) {
        let resp = new SimpleHlsClipResponse();
        this.request("SimpleHlsClip", req, resp, cb);
    }

    /**
     * 删除片头片尾模板。
     * @param {DeleteHeadTailTemplateRequest} req
     * @param {function(string, DeleteHeadTailTemplateResponse):void} cb
     * @public
     */
    DeleteHeadTailTemplate(req, cb) {
        let resp = new DeleteHeadTailTemplateResponse();
        this.request("DeleteHeadTailTemplate", req, resp, cb);
    }

    /**
     * 该接口用于创建素材样本，用于通过五官定位等技术，进行内容识别、不适宜视频识别等视频处理。
     * @param {CreatePersonSampleRequest} req
     * @param {function(string, CreatePersonSampleResponse):void} cb
     * @public
     */
    CreatePersonSample(req, cb) {
        let resp = new CreatePersonSampleResponse();
        this.request("CreatePersonSample", req, resp, cb);
    }

    /**
     * 该接口用于启用、停用子应用。被停用的子应用将封停对应域名，并限制控制台访问。
     * @param {ModifySubAppIdStatusRequest} req
     * @param {function(string, ModifySubAppIdStatusResponse):void} cb
     * @public
     */
    ModifySubAppIdStatus(req, cb) {
        let resp = new ModifySubAppIdStatusResponse();
        this.request("ModifySubAppIdStatus", req, resp, cb);
    }

    /**
     * 修改用户自定义视频内容智能识别模板。
     * @param {ModifyContentReviewTemplateRequest} req
     * @param {function(string, ModifyContentReviewTemplateResponse):void} cb
     * @public
     */
    ModifyContentReviewTemplate(req, cb) {
        let resp = new ModifyContentReviewTemplateResponse();
        this.request("ModifyContentReviewTemplate", req, resp, cb);
    }

    /**
     * 对点播中的音视频媒体发起处理任务，功能包括：
1. 视频转码（带水印）；
2. 视频转动图；
3. 对视频按指定时间点截图；
4. 对视频采样截图；
5. 对视频截图雪碧图；
6. 对视频截取一张图做封面；
7. 对视频转自适应码流（并加密）；
8. 智能识别（令人反感的信息、不安全的信息、不适宜的信息）；
9. 智能内容分析（标签、分类、封面、按帧标签）；
10. 内容识别（视频片头片尾、人脸、文本全文、文本关键词、语音全文、语音关键词、物体）。

如使用事件通知，事件通知的类型为 [任务流状态变更](https://cloud.tencent.com/document/product/266/9636)。
     * @param {ProcessMediaRequest} req
     * @param {function(string, ProcessMediaResponse):void} cb
     * @public
     */
    ProcessMedia(req, cb) {
        let resp = new ProcessMediaResponse();
        this.request("ProcessMedia", req, resp, cb);
    }

    /**
     * 查询超级播放器配置，支持根据条件，分页查询。
     * @param {DescribeSuperPlayerConfigsRequest} req
     * @param {function(string, DescribeSuperPlayerConfigsResponse):void} cb
     * @public
     */
    DescribeSuperPlayerConfigs(req, cb) {
        let resp = new DescribeSuperPlayerConfigsResponse();
        this.request("DescribeSuperPlayerConfigs", req, resp, cb);
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
     * @param {DescribeDailyPlayStatFileListRequest} req
     * @param {function(string, DescribeDailyPlayStatFileListResponse):void} cb
     * @public
     */
    DescribeDailyPlayStatFileList(req, cb) {
        let resp = new DescribeDailyPlayStatFileListResponse();
        this.request("DescribeDailyPlayStatFileList", req, resp, cb);
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


}
module.exports = VodClient;
