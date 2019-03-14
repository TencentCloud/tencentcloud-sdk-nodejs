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
const ModifyWatermarkTemplateRequest = models.ModifyWatermarkTemplateRequest;
const TranscodePlayInfo2017 = models.TranscodePlayInfo2017;
const DescribeAllClassRequest = models.DescribeAllClassRequest;
const AiAnalysisTaskInput = models.AiAnalysisTaskInput;
const AnimatedGraphicTaskInput = models.AnimatedGraphicTaskInput;
const DescribeTaskDetailResponse = models.DescribeTaskDetailResponse;
const MediaKeyFrameDescInfo = models.MediaKeyFrameDescInfo;
const AiAnalysisTaskClassificationInput = models.AiAnalysisTaskClassificationInput;
const CreateTranscodeTemplateRequest = models.CreateTranscodeTemplateRequest;
const CreateClassRequest = models.CreateClassRequest;
const ClipTask2017 = models.ClipTask2017;
const MediaSnapshotByTimeOffsetInfo = models.MediaSnapshotByTimeOffsetInfo;
const MediaKeyFrameDescItem = models.MediaKeyFrameDescItem;
const LiveRealTimeClipRequest = models.LiveRealTimeClipRequest;
const ConfirmEventsRequest = models.ConfirmEventsRequest;
const DescribeTasksResponse = models.DescribeTasksResponse;
const CreateWatermarkTemplateResponse = models.CreateWatermarkTemplateResponse;
const AiReviewTerrorismTaskOutput = models.AiReviewTerrorismTaskOutput;
const AiReviewPoliticalTaskOutput = models.AiReviewPoliticalTaskOutput;
const AiReviewTaskPoliticalResult = models.AiReviewTaskPoliticalResult;
const SimpleHlsClipResponse = models.SimpleHlsClipResponse;
const AiReviewPoliticalOcrTaskInput = models.AiReviewPoliticalOcrTaskInput;
const ProcedureTask = models.ProcedureTask;
const AiAnalysisResult = models.AiAnalysisResult;
const ConcatFileInfo2017 = models.ConcatFileInfo2017;
const MediaProcessTaskImageSpriteResult = models.MediaProcessTaskImageSpriteResult;
const MediaTranscodeInfo = models.MediaTranscodeInfo;
const ImageWatermarkTemplate = models.ImageWatermarkTemplate;
const DescribeMediaInfosResponse = models.DescribeMediaInfosResponse;
const TempCertificate = models.TempCertificate;
const DescribeTasksRequest = models.DescribeTasksRequest;
const CreateTranscodeTemplateResponse = models.CreateTranscodeTemplateResponse;
const MediaContentReviewOcrTextSegmentItem = models.MediaContentReviewOcrTextSegmentItem;
const AiReviewTaskPoliticalOcrResult = models.AiReviewTaskPoliticalOcrResult;
const PullEventsResponse = models.PullEventsResponse;
const SnapshotByTimeOffset2017 = models.SnapshotByTimeOffset2017;
const MediaProcessTaskInput = models.MediaProcessTaskInput;
const AiReviewTerrorismTaskInput = models.AiReviewTerrorismTaskInput;
const ImageWatermarkInput = models.ImageWatermarkInput;
const MediaAudioStreamItem = models.MediaAudioStreamItem;
const AiReviewTaskTerrorismResult = models.AiReviewTaskTerrorismResult;
const ProcessMediaByUrlResponse = models.ProcessMediaByUrlResponse;
const TranscodeTask2017 = models.TranscodeTask2017;
const TranscodeTemplate = models.TranscodeTemplate;
const MediaContentReviewAsrTextSegmentItem = models.MediaContentReviewAsrTextSegmentItem;
const DescribeAllClassResponse = models.DescribeAllClassResponse;
const MediaContentReviewPoliticalSegmentItem = models.MediaContentReviewPoliticalSegmentItem;
const DeleteWatermarkTemplateRequest = models.DeleteWatermarkTemplateRequest;
const MediaInputInfo = models.MediaInputInfo;
const EditMediaStreamInfo = models.EditMediaStreamInfo;
const LiveRealTimeClipResponse = models.LiveRealTimeClipResponse;
const CommitUploadResponse = models.CommitUploadResponse;
const AiReviewPoliticalTaskInput = models.AiReviewPoliticalTaskInput;
const AiAnalysisTaskCoverOutput = models.AiAnalysisTaskCoverOutput;
const AiContentReviewTaskInput = models.AiContentReviewTaskInput;
const AiReviewPornTaskInput = models.AiReviewPornTaskInput;
const VideoTemplateInfo = models.VideoTemplateInfo;
const AiAnalysisTaskClassificationOutput = models.AiAnalysisTaskClassificationOutput;
const AiReviewTaskPornOcrResult = models.AiReviewTaskPornOcrResult;
const DescribeWatermarkTemplatesRequest = models.DescribeWatermarkTemplatesRequest;
const TaskSimpleInfo = models.TaskSimpleInfo;
const MediaAiAnalysisClassificationItem = models.MediaAiAnalysisClassificationItem;
const AiContentReviewResult = models.AiContentReviewResult;
const ApplyUploadResponse = models.ApplyUploadResponse;
const CoverBySnapshotTaskInput = models.CoverBySnapshotTaskInput;
const DeleteClassRequest = models.DeleteClassRequest;
const DescribeTranscodeTemplatesRequest = models.DescribeTranscodeTemplatesRequest;
const AiReviewPornOcrTaskOutput = models.AiReviewPornOcrTaskOutput;
const ApplyUploadRequest = models.ApplyUploadRequest;
const ProcessMediaResponse = models.ProcessMediaResponse;
const AiReviewPornOcrTaskInput = models.AiReviewPornOcrTaskInput;
const CreateImageSpriteTask2017 = models.CreateImageSpriteTask2017;
const MediaSnapshotByTimeOffsetItem = models.MediaSnapshotByTimeOffsetItem;
const MediaBasicInfo = models.MediaBasicInfo;
const AudioTemplateInfo = models.AudioTemplateInfo;
const MediaAnimatedGraphicsItem = models.MediaAnimatedGraphicsItem;
const SortBy = models.SortBy;
const DescribeWatermarkTemplatesResponse = models.DescribeWatermarkTemplatesResponse;
const WatermarkInput = models.WatermarkInput;
const AiReviewPornAsrTaskInput = models.AiReviewPornAsrTaskInput;
const MediaProcessTaskAnimatedGraphicResult = models.MediaProcessTaskAnimatedGraphicResult;
const DeleteMediaResponse = models.DeleteMediaResponse;
const MediaAiAnalysisTagItem = models.MediaAiAnalysisTagItem;
const AiAnalysisTaskTagResult = models.AiAnalysisTaskTagResult;
const SearchMediaResponse = models.SearchMediaResponse;
const ConfirmEventsResponse = models.ConfirmEventsResponse;
const AiAnalysisTaskTagOutput = models.AiAnalysisTaskTagOutput;
const DeleteTranscodeTemplateResponse = models.DeleteTranscodeTemplateResponse;
const EventContent = models.EventContent;
const AiReviewTaskPoliticalAsrResult = models.AiReviewTaskPoliticalAsrResult;
const MediaTranscodeItem = models.MediaTranscodeItem;
const ProcessMediaRequest = models.ProcessMediaRequest;
const MediaContentReviewSegmentItem = models.MediaContentReviewSegmentItem;
const TextWatermarkTemplate = models.TextWatermarkTemplate;
const PullEventsRequest = models.PullEventsRequest;
const ModifyMediaInfoResponse = models.ModifyMediaInfoResponse;
const AiReviewTaskPornResult = models.AiReviewTaskPornResult;
const AiAnalysisTaskTagInput = models.AiAnalysisTaskTagInput;
const SearchMediaRequest = models.SearchMediaRequest;
const CreateClassResponse = models.CreateClassResponse;
const MediaClassInfo = models.MediaClassInfo;
const MediaProcessTaskSnapshotByTimeOffsetResult = models.MediaProcessTaskSnapshotByTimeOffsetResult;
const AiReviewTaskPornAsrResult = models.AiReviewTaskPornAsrResult;
const DeleteClassResponse = models.DeleteClassResponse;
const ModifyClassResponse = models.ModifyClassResponse;
const EditMediaFileInfo = models.EditMediaFileInfo;
const MediaAiAnalysisCoverItem = models.MediaAiAnalysisCoverItem;
const TranscodeTaskInput = models.TranscodeTaskInput;
const ConcatTask2017 = models.ConcatTask2017;
const FileUploadTask = models.FileUploadTask;
const EditMediaTask = models.EditMediaTask;
const WechatPublishTask = models.WechatPublishTask;
const AiAnalysisTaskCoverResult = models.AiAnalysisTaskCoverResult;
const AiReviewPoliticalOcrTaskOutput = models.AiReviewPoliticalOcrTaskOutput;
const ClipFileInfo2017 = models.ClipFileInfo2017;
const CommitUploadRequest = models.CommitUploadRequest;
const MediaProcessTaskTranscodeResult = models.MediaProcessTaskTranscodeResult;
const SnapshotByTimeOffsetTask2017 = models.SnapshotByTimeOffsetTask2017;
const MediaSourceData = models.MediaSourceData;
const DescribeTranscodeTemplatesResponse = models.DescribeTranscodeTemplatesResponse;
const SnapshotByTimeOffsetTaskInput = models.SnapshotByTimeOffsetTaskInput;
const ImageSpriteTaskInput = models.ImageSpriteTaskInput;
const DeleteMediaRequest = models.DeleteMediaRequest;
const FileDeleteTask = models.FileDeleteTask;
const MediaProcessTaskSampleSnapshotResult = models.MediaProcessTaskSampleSnapshotResult;
const ModifyTranscodeTemplateRequest = models.ModifyTranscodeTemplateRequest;
const EditMediaTaskInput = models.EditMediaTaskInput;
const AiReviewPoliticalAsrTaskInput = models.AiReviewPoliticalAsrTaskInput;
const SampleSnapshotTaskInput = models.SampleSnapshotTaskInput;
const AiReviewPoliticalAsrTaskOutput = models.AiReviewPoliticalAsrTaskOutput;
const ModifyClassRequest = models.ModifyClassRequest;
const SimpleHlsClipRequest = models.SimpleHlsClipRequest;
const MediaDeleteItem = models.MediaDeleteItem;
const DescribeMediaInfosRequest = models.DescribeMediaInfosRequest;
const MediaSnapshotByTimePicInfoItem = models.MediaSnapshotByTimePicInfoItem;
const AiAnalysisTaskClassificationResult = models.AiAnalysisTaskClassificationResult;
const CoverBySnapshotTaskOutput = models.CoverBySnapshotTaskOutput;
const MediaImageSpriteInfo = models.MediaImageSpriteInfo;
const MediaImageSpriteItem = models.MediaImageSpriteItem;
const AiAnalysisTaskCoverInput = models.AiAnalysisTaskCoverInput;
const DescribeTaskDetailRequest = models.DescribeTaskDetailRequest;
const AiReviewPornTaskOutput = models.AiReviewPornTaskOutput;
const PullFileTask = models.PullFileTask;
const ProcessMediaByUrlRequest = models.ProcessMediaByUrlRequest;
const MediaVideoStreamItem = models.MediaVideoStreamItem;
const ModifyMediaInfoRequest = models.ModifyMediaInfoRequest;
const MediaProcessTaskResult = models.MediaProcessTaskResult;
const DeleteTranscodeTemplateRequest = models.DeleteTranscodeTemplateRequest;
const MediaOutputInfo = models.MediaOutputInfo;
const MediaAnimatedGraphicsInfo = models.MediaAnimatedGraphicsInfo;
const MediaMetaData = models.MediaMetaData;
const EditMediaTaskOutput = models.EditMediaTaskOutput;
const MediaProcessTaskCoverBySnapshotResult = models.MediaProcessTaskCoverBySnapshotResult;
const CreateWatermarkTemplateRequest = models.CreateWatermarkTemplateRequest;
const WatermarkTemplate = models.WatermarkTemplate;
const DeleteWatermarkTemplateResponse = models.DeleteWatermarkTemplateResponse;
const ModifyTranscodeTemplateResponse = models.ModifyTranscodeTemplateResponse;
const MediaSampleSnapshotInfo = models.MediaSampleSnapshotInfo;
const MediaInfo = models.MediaInfo;
const AiReviewPornAsrTaskOutput = models.AiReviewPornAsrTaskOutput;
const ModifyWatermarkTemplateResponse = models.ModifyWatermarkTemplateResponse;
const MediaSampleSnapshotItem = models.MediaSampleSnapshotItem;


/**
 * vod client
 * @class
 */
class VodClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("vod.tencentcloudapi.com", "2018-07-17", credential, region, profile);
    }
    
    /**
     * * 开发者调用拉取事件通知，获取到事件后，必须调用该接口来确认消息已经收到；
* 开发者获取到事件句柄后，等待确认的有效时间为 30 秒，超出 30 秒会报参数错误（4000）；
* 更多参考[服务端事件通知](https://cloud.tencent.com/document/product/266/7829)。
     * @param {ConfirmEventsRequest} req
     * @param {function(string, ConfirmEventsResponse):void} cb
     * @public
     */
    ConfirmEvents(req, cb) {
        let resp = new ConfirmEventsResponse();
        this.request("ConfirmEvents", req, resp, cb);
    }

    /**
     * * 该接口用于申请媒体文件（和封面文件）的上传，获取文件上传到腾讯云点播的元信息（包括上传路径、上传签名等），用于后续上传接口。
* 上传流程请参考[服务端上传综述](https://cloud.tencent.com/document/product/266/9759#.E4.B8.8A.E4.BC.A0.E6.B5.81.E7.A8.8B)。
     * @param {ApplyUploadRequest} req
     * @param {function(string, ApplyUploadResponse):void} cb
     * @public
     */
    ApplyUpload(req, cb) {
        let resp = new ApplyUploadResponse();
        this.request("ApplyUpload", req, resp, cb);
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
     * 1. 该接口可以获取多个视频的多种信息，包括：
    1. 基础信息（basicInfo）：包括视频名称、大小、时长、封面图片等。
    2. 元信息（metaData）：包括视频流信息、音频流信息等。
    3. 转码结果信息（transcodeInfo）：包括该视频转码生成的各种码率的视频的地址、规格、码率、分辨率等。
    4. 转动图结果信息（animatedGraphicsInfo）：对视频转动图（如 gif）后，动图相关信息。
    5. 采样截图信息（sampleSnapshotInfo）：对视频采样截图后，相关截图信息。
    6. 雪碧图信息（imageSpriteInfo）：对视频截取雪碧图之后，雪碧图的相关信息。
    7. 指定时间点截图信息（snapshotByTimeOffsetInfo）：对视频依照指定时间点截图后，各个截图的信息。
    8. 视频打点信息（keyFrameDescInfo）：对视频设置的各个打点信息。
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
     * * 该接口用于从点播服务端获取事件通知，详见[服务端事件通知](https://cloud.tencent.com/document/product/266/7829)；
* 接口为长轮询模式，即：如果服务端存在未消费事件，则立即返回给请求方；如果服务端没有未消费事件，则后台会将请求挂起，直到有新的事件产生为止；
* 请求最多挂起 5 秒，建议请求方将超时时间设置为 10 秒；
* 若该接口有事件返回，调用方必须再调用[确认事件通知]接口，确认事件通知已经处理，否则该事件通知后续会再次被拉取到。
     * @param {PullEventsRequest} req
     * @param {function(string, PullEventsResponse):void} cb
     * @public
     */
    PullEvents(req, cb) {
        let resp = new PullEventsResponse();
        this.request("PullEvents", req, resp, cb);
    }

    /**
     * 直播即时剪辑，是指在直播过程中（即直播尚未结束时），客户可以在过往直播内容中选择一段，实时生成一个新的视频（HLS 格式），开发者可以将其立即分享出去，或者长久保存起来。

腾讯云点播支持两种即时剪辑模式：
- 剪辑固化：将剪辑出来的视频保存成独立的视频，拥有独立 FileId；适用于将精彩片段**长久保存**的场景；
- 剪辑不固化：剪辑得到的视频附属于直播录制文件，没有独立 FileId；适用于将精彩片段**临时分享**的场景。

注意：
- 使用直播即时剪辑功能的前提是：目标直播流开启了[时移回看](https://cloud.tencent.com/document/product/267/18472)功能。
- 直播即时剪辑是基于直播录制生成的 m3u8 文件进行的，故而其最小剪辑精度为一个 ts 切片，无法实现秒级或者更为精确的剪辑精度。


### 剪辑固化
所谓剪辑固化，是指将剪辑出来的视频是保存成一个独立的视频（拥有独立的 FileId）。其生命周期不受原始直播录制视频影响（即使原始录制视频被删除，剪辑结果也不会受到任何影响）；也可以对其进行转码、微信发布等二次处理。

举例如下：一场完整的足球比赛，直播录制出来的原始视频可能长达 2 个小时，客户出于节省成本的目的可以对这个视频存储 2 个月，但对于直播即时剪辑的「精彩时刻」视频却可以指定存储更长时间，同时可以单独对「精彩时刻」视频进行转码、微信发布等额外的点播操作，这时候可以选择直播即时剪辑并且固化的方案。

剪辑固化的优势在于其生命周期与原始录制视频相互独立，可以独立管理、长久保存。

### 剪辑不固化
所谓剪辑不固化，是指剪辑所得到的结果（m3u8 文件）与直播录制视频共享相同的 ts 分片，新生成的视频不是一个独立完整的视频（没有独立 FileId，只有播放 URL），其有效期与直播录制的完整视频有效期是一致的。一旦直播录制出来的视频被删除，也会导致该片段无法播放。

剪辑不固化，由于其剪辑结果不是一个独立的视频，因而也不会纳入点播媒资视频管理（比如控制台的视频总数不会统计这一片段）中，也无法单独针对这个片段做转码、微信发布等任何视频处理操作。

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
     * 对来源为 URL 的音视频媒体发起处理任务，功能包括：

1. 智能内容审核（鉴黄、鉴恐、鉴政）；
2. 智能内容分析（标签、分类、封面）。
     * @param {ProcessMediaByUrlRequest} req
     * @param {function(string, ProcessMediaByUrlResponse):void} cb
     * @public
     */
    ProcessMediaByUrl(req, cb) {
        let resp = new ProcessMediaByUrlResponse();
        this.request("ProcessMediaByUrl", req, resp, cb);
    }

    /**
     * 搜索媒体信息，支持各种条件筛选，以及对返回结果进行排序、过滤等功能，具体包括：
- 根据媒体文件名或描述信息进行文本模糊搜索。
- 根据媒体分类、标签进行检索。
    - 指定分类集合 ClassIds（见输入参数），返回满足集合中任意分类的媒体。例如：假设媒体分类有电影、电视剧、综艺，其中电影又有子分类历史片、动作片、言情片。如果 ClassIds 指定了电影、电视剧，那么电影和电视剧下的所有子分类
    都会返回；而如果 ClassIds 指定的是历史片、动作片，那么只有这 2 个子分类下的媒体才会返回。
    - 指定标签集合 Tags（见输入参数），返回满足集合中任意标签的媒体。例如：假设媒体标签有二次元、宫斗、鬼畜，如果 Tags 指定了二次元、鬼畜 2 个标签，那么只要符合这 2 个标签中任意一个的媒体都会被检索出来。
- 允许指定筛选某一来源 Source（见输入参数）的媒体。
- 允许根据直播推流码、Vid（见输入参数）筛选直播录制的媒体。
- 允许根据媒体的创建范围筛选媒体。
- 允许对上述条件进行任意组合，检索同时满足以上条件的媒体。例如可以筛选从 2018 年 12 月 1 日到 2018 年 12 月 8 日创建的电影、电视剧分类下带有宫斗、鬼畜标签的媒体。
- 允许对结果进行排序，允许通过 Offset 和 Limit 实现只返回部分结果。

接口搜索限制：
- 搜索结果超过 5000条，不再支持分页查询超过 5000 部分的数据。
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
     * 通过任务 ID 查询任务的执行状态和结果的详细信息（最多可以查询3天之内提交的任务）
     * @param {DescribeTaskDetailRequest} req
     * @param {function(string, DescribeTaskDetailResponse):void} cb
     * @public
     */
    DescribeTaskDetail(req, cb) {
        let resp = new DescribeTaskDetailResponse();
        this.request("DescribeTaskDetail", req, resp, cb);
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
     * 对点播中的音视频媒体发起处理任务，功能包括：
1. 视频转码（带水印）；
2. 视频转动图；
3. 对视频按指定时间点截图；
4. 对视频采样截图；
5. 对视频截图雪碧图；
6. 对视频截取一张图做封面；
7. 智能内容审核（鉴黄、鉴恐、鉴政）；
8. 智能内容分析（标签、分类、封面）。
     * @param {ProcessMediaRequest} req
     * @param {function(string, ProcessMediaResponse):void} cb
     * @public
     */
    ProcessMedia(req, cb) {
        let resp = new ProcessMediaResponse();
        this.request("ProcessMedia", req, resp, cb);
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
     * 对 HLS 视频进行按时间段裁剪。

注意：裁剪出来的视频与原始视频共用 ts，仅生成新的 m3u8。原始视频删除后，该裁剪视频也会被删除。
     * @param {SimpleHlsClipRequest} req
     * @param {function(string, SimpleHlsClipResponse):void} cb
     * @public
     */
    SimpleHlsClip(req, cb) {
        let resp = new SimpleHlsClipResponse();
        this.request("SimpleHlsClip", req, resp, cb);
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
     * * 删除媒体及其对应的视频处理文件（如转码视频、雪碧图、截图、微信发布视频等）；
* 可单独删除指定 ID 的视频文件下的转码，或者微信发布文件；
     * @param {DeleteMediaRequest} req
     * @param {function(string, DeleteMediaResponse):void} cb
     * @public
     */
    DeleteMedia(req, cb) {
        let resp = new DeleteMediaResponse();
        this.request("DeleteMedia", req, resp, cb);
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
     * 修改媒体文件的属性，包括分类、名称、描述、标签、过期时间、打点信息、视频封面等。
     * @param {ModifyMediaInfoRequest} req
     * @param {function(string, ModifyMediaInfoResponse):void} cb
     * @public
     */
    ModifyMediaInfo(req, cb) {
        let resp = new ModifyMediaInfoResponse();
        this.request("ModifyMediaInfo", req, resp, cb);
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
     * 根据转码模板唯一标识，获取转码模板详情列表。返回结果包含符合条件的所有用户自定义模板及[系统预置转码模板](https://cloud.tencent.com/document/product/266/11701#.E9.A2.84.E7.BD.AE.E8.BD.AC.E7.A0.81.E6.A8.A1.E6.9D.BF)。
     * @param {DescribeTranscodeTemplatesRequest} req
     * @param {function(string, DescribeTranscodeTemplatesResponse):void} cb
     * @public
     */
    DescribeTranscodeTemplates(req, cb) {
        let resp = new DescribeTranscodeTemplatesResponse();
        this.request("DescribeTranscodeTemplates", req, resp, cb);
    }


}
module.exports = VodClient;
