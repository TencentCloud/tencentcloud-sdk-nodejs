import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { ModifySampleSnapshotTemplateResponse, ModifyWatermarkTemplateRequest, CreateStorageRegionRequest, DescribeAllClassRequest, DescribeRoundPlaysRequest, WeChatMiniProgramPublishRequest, CreateTranscodeTemplateRequest, DescribeAnimatedGraphicsTemplatesRequest, LiveRealTimeClipResponse, DeleteJustInTimeTranscodeTemplateRequest, DeleteAnimatedGraphicsTemplateResponse, ManageTaskResponse, CreateImageProcessingTemplateRequest, ModifyDefaultStorageRegionRequest, ModifyEventConfigResponse, ResetProcedureTemplateResponse, ModifySampleSnapshotTemplateRequest, ModifyJustInTimeTranscodeTemplateRequest, DescribePrepaidProductsRequest, DescribeDefaultDistributionConfigRequest, CreateImageSpriteTemplateRequest, DescribeDailyMostPlayedStatRequest, RefreshUrlCacheRequest, DeleteAIRecognitionTemplateResponse, DeleteContentReviewTemplateRequest, VerifyDomainRecordResponse, DescribeCurrentPlaylistResponse, ModifySuperPlayerConfigRequest, ResetProcedureTemplateRequest, ComposeMediaResponse, DescribeLicenseUsageDataResponse, ModifyWordSampleResponse, DescribeDailyMediaPlayStatResponse, ModifySubAppIdInfoRequest, DeletePersonSampleRequest, ExecuteFunctionResponse, DescribeClientUploadAccelerationUsageDataResponse, ModifyRebuildMediaTemplateRequest, ComposeMediaRequest, DescribeCLSTopicsRequest, CreateAdaptiveDynamicStreamingTemplateRequest, PushUrlCacheResponse, DescribeDailyMediaPlayStatRequest, ModifyTranscodeTemplateRequest, DescribeImageSpriteTemplatesRequest, DeleteImageProcessingTemplateRequest, DescribeDailyPlayStatFileListResponse, DeleteSuperPlayerConfigRequest, ModifyMediaStorageClassResponse, CreateProcedureTemplateRequest, DescribeMediaProcessUsageDataRequest, CreatePersonSampleRequest, ReviewAudioVideoRequest, ModifySuperPlayerConfigResponse, DescribeWordSamplesResponse, RefreshUrlCacheResponse, DeleteAIRecognitionTemplateRequest, DescribeCDNStatDetailsResponse, AttachMediaSubtitlesRequest, DescribeEventConfigRequest, SetVodDomainCertificateRequest, CreateRebuildMediaTemplateResponse, DescribeEnhanceMediaTemplatesResponse, ModifyVodDomainAccelerateConfigRequest, ModifyQualityInspectTemplateResponse, DescribeProcedureTemplatesRequest, ModifyAdaptiveDynamicStreamingTemplateRequest, ForbidMediaDistributionRequest, DescribeAIRecognitionTemplatesResponse, EditMediaResponse, ProcessMediaByUrlRequest, DescribeDailyMostPlayedStatResponse, ModifyAIRecognitionTemplateResponse, ModifyMediaInfoRequest, DescribeSnapshotByTimeOffsetTemplatesRequest, ModifyHeadTailTemplateResponse, CreateVodDomainRequest, DeleteRoundPlayRequest, EnhanceMediaQualityRequest, ProcessMediaResponse, CreateWordSamplesResponse, DeleteAdaptiveDynamicStreamingTemplateResponse, CreateWordSamplesRequest, SetCLSPushTargetRequest, ModifyAnimatedGraphicsTemplateResponse, DeleteCLSTopicResponse, LiveRealTimeClipRequest, DeleteAdaptiveDynamicStreamingTemplateRequest, DeleteEnhanceMediaTemplateResponse, SimpleHlsClipResponse, DeleteAIAnalysisTemplateRequest, EditMediaRequest, CreateComplexAdaptiveDynamicStreamingTaskRequest, DescribeFileAttributesResponse, DescribeJustInTimeTranscodeTemplatesResponse, CreateReviewTemplateRequest, DescribeMediaInfosResponse, DeleteProcedureTemplateResponse, DescribeReviewTemplatesResponse, DescribeAdaptiveDynamicStreamingTemplatesResponse, ForbidMediaDistributionResponse, DescribeAdaptiveDynamicStreamingTemplatesRequest, ModifyRoundPlayRequest, DeleteHeadTailTemplateResponse, RemoveWatermarkResponse, CreatePersonSampleResponse, CreateContentReviewTemplateResponse, ModifyAnimatedGraphicsTemplateRequest, DescribeAIAnalysisTemplatesRequest, CreateHeadTailTemplateRequest, DeleteWordSamplesRequest, FastEditMediaResponse, DescribeDrmDataKeyResponse, ProcessMediaRequest, DescribeMediaPlayStatDetailsResponse, ModifyContentReviewTemplateResponse, DescribeWatermarkTemplatesRequest, CreateSuperPlayerConfigResponse, CreateEnhanceMediaTemplateResponse, DeleteReviewTemplateResponse, DescribeCDNUsageDataResponse, ModifyWordSampleRequest, CreateJustInTimeTranscodeTemplateResponse, DeleteMediaResponse, ModifySnapshotByTimeOffsetTemplateResponse, DeleteHeadTailTemplateRequest, SearchMediaResponse, ModifyAIAnalysisTemplateResponse, ModifyMediaStorageClassRequest, DescribeRebuildMediaTemplatesRequest, CreateCLSTopicResponse, CreateRoundPlayResponse, ProcessImageResponse, ProcessImageRequest, ModifyMediaInfoResponse, ModifyReviewTemplateRequest, DescribeCLSTopicsResponse, RestoreMediaResponse, ModifyEnhanceMediaTemplateResponse, EnhanceMediaByTemplateResponse, CreateJustInTimeTranscodeTemplateRequest, ManageTaskRequest, ModifyEventConfigRequest, DescribeHeadTailTemplatesRequest, ModifyAdaptiveDynamicStreamingTemplateResponse, DeleteMediaRequest, DescribeReviewTemplatesRequest, CreateSuperPlayerConfigRequest, ModifySubAppIdInfoResponse, DeleteRebuildMediaTemplateResponse, DescribeSubAppIdsResponse, SimpleHlsClipRequest, DescribeDailyPlayStatFileListRequest, DescribeSuperPlayerConfigsResponse, DescribeStorageDataRequest, DeleteImageSpriteTemplateResponse, DescribeContentReviewTemplatesResponse, ExtractCopyRightWatermarkRequest, DescribeEnhanceMediaTemplatesRequest, DescribeEventsStateResponse, ModifyImageSpriteTemplateResponse, SetVodDomainCertificateResponse, CreateWatermarkTemplateRequest, DescribeEventsStateRequest, DescribeDrmKeyProviderInfoRequest, ModifyDefaultStorageRegionResponse, CreateImageProcessingTemplateResponse, ModifyJustInTimeTranscodeTemplateResponse, ModifyQualityInspectTemplateRequest, ModifyVodDomainConfigResponse, DeleteAIAnalysisTemplateResponse, ModifyRebuildMediaTemplateResponse, CreateEnhanceMediaTemplateRequest, RebuildMediaByTemplateRequest, ModifyVodDomainConfigRequest, ConfirmEventsRequest, CreateAIRecognitionTemplateResponse, ModifySubAppIdStatusRequest, CreateSubAppIdResponse, DeleteTranscodeTemplateRequest, ModifyReviewTemplateResponse, DescribeImageProcessingTemplatesRequest, SplitMediaRequest, AttachMediaSubtitlesResponse, CreateDomainVerifyRecordResponse, ExtractCopyRightWatermarkResponse, VerifyDomainRecordRequest, ParseStreamingManifestRequest, DeleteSampleSnapshotTemplateResponse, DescribeStorageDetailsResponse, PullEventsResponse, DescribeCdnLogsRequest, ModifyDefaultDistributionConfigRequest, ProcessMediaByUrlResponse, DescribeImageReviewUsageDataRequest, DescribeEventConfigResponse, DescribeCdnLogsResponse, DeletePersonSampleResponse, CreateSnapshotByTimeOffsetTemplateResponse, ModifyContentReviewTemplateRequest, DeleteReviewTemplateRequest, CreateAdaptiveDynamicStreamingTemplateResponse, DeleteSampleSnapshotTemplateRequest, DescribeTranscodeTemplatesResponse, DescribeStorageDataResponse, CreateCLSTopicRequest, ApplyUploadRequest, CreateSampleSnapshotTemplateResponse, DeleteContentReviewTemplateResponse, PullUploadRequest, CreateQualityInspectTemplateRequest, ProcessMediaByProcedureRequest, SetCLSPushTargetResponse, DescribeCDNUsageDataRequest, DescribeReviewDetailsRequest, DeleteCLSTopicRequest, ParseStreamingManifestResponse, CreateRoundPlayRequest, DescribeMediaPlayStatDetailsRequest, CreateClassResponse, DeleteSuperPlayerConfigResponse, DescribeSampleSnapshotTemplatesRequest, DescribeVodDomainsResponse, DescribeClientUploadAccelerationUsageDataRequest, ModifyAIRecognitionTemplateRequest, DescribeStorageRegionsRequest, DescribeCDNStatDetailsRequest, DescribeImageReviewUsageDataResponse, DeleteRoundPlayResponse, CreateStorageRegionResponse, DescribePrepaidProductsResponse, HandleCurrentPlaylistResponse, PushUrlCacheRequest, CreateAIAnalysisTemplateResponse, ModifyClassRequest, DescribeQualityInspectTemplatesRequest, DescribeMediaInfosRequest, ModifyPersonSampleRequest, DescribeDrmDataKeyRequest, DeleteVodDomainRequest, DescribeDrmKeyProviderInfoResponse, ExtractTraceWatermarkResponse, CreateAIRecognitionTemplateRequest, DescribeTaskDetailRequest, DeleteQualityInspectTemplateResponse, CreateHeadTailTemplateResponse, DeleteWordSamplesResponse, DescribeDefaultDistributionConfigResponse, DeleteProcedureTemplateRequest, DeleteClassResponse, ModifyTranscodeTemplateResponse, InspectMediaQualityResponse, DeleteRebuildMediaTemplateRequest, CreateDomainVerifyRecordRequest, CreateContentReviewTemplateRequest, DescribeContentReviewTemplatesRequest, CreateComplexAdaptiveDynamicStreamingTaskResponse, DescribeImageSpriteTemplatesResponse, DescribeCLSLogsetsRequest, InspectMediaQualityRequest, CreateQualityInspectTemplateResponse, RebuildMediaRequest, DescribeTaskDetailResponse, DeleteImageSpriteTemplateRequest, ModifyDefaultDistributionConfigResponse, CreateClassRequest, ModifyRoundPlayResponse, CreateProcedureTemplateResponse, DescribeCLSLogsetsResponse, ModifyEnhanceMediaTemplateRequest, RebuildMediaResponse, DescribeMediaProcessUsageDataResponse, DescribeSuperPlayerConfigsRequest, CreateVodDomainResponse, ModifyVodDomainAccelerateConfigResponse, ModifyHeadTailTemplateRequest, DescribeTasksResponse, DescribeSubAppIdsRequest, ModifySubAppIdStatusResponse, ReviewImageResponse, DescribeStorageRegionsResponse, ModifySnapshotByTimeOffsetTemplateRequest, CreateCLSLogsetRequest, ExtractTraceWatermarkRequest, DescribeSnapshotByTimeOffsetTemplatesResponse, SetDrmKeyProviderInfoRequest, DeleteSnapshotByTimeOffsetTemplateResponse, DescribeCLSPushTargetsRequest, DescribeTasksRequest, DescribeReviewDetailsResponse, CreateTranscodeTemplateResponse, CreateAIAnalysisTemplateRequest, RebuildMediaByTemplateResponse, EnhanceMediaByTemplateRequest, DescribeAllClassResponse, ModifyImageSpriteTemplateRequest, DeleteWatermarkTemplateRequest, DeleteVodDomainResponse, DescribeWordSamplesRequest, ModifyAIAnalysisTemplateRequest, CommitUploadResponse, DescribeSampleSnapshotTemplatesResponse, ApplyUploadResponse, ReviewAudioVideoResponse, DeleteClassRequest, DescribeTranscodeTemplatesRequest, DescribeCurrentPlaylistRequest, FastEditMediaRequest, CreateRebuildMediaTemplateRequest, DescribeWatermarkTemplatesResponse, WeChatMiniProgramPublishResponse, DescribeRoundPlaysResponse, CreateAnimatedGraphicsTemplateRequest, RemoveWatermarkRequest, ExecuteFunctionRequest, ConfirmEventsResponse, ModifyPersonSampleResponse, DescribeLicenseUsageDataRequest, DeleteTranscodeTemplateResponse, DescribePersonSamplesResponse, DescribeVodDomainsRequest, SplitMediaResponse, RestoreMediaRequest, PullEventsRequest, DescribeAIAnalysisTemplatesResponse, CreateSnapshotByTimeOffsetTemplateRequest, DescribeQualityInspectTemplatesResponse, CreateSubAppIdRequest, DescribeProcedureTemplatesResponse, SearchMediaRequest, CreateSampleSnapshotTemplateRequest, DescribeRebuildMediaTemplatesResponse, ModifyClassResponse, ProcessMediaByProcedureResponse, PullUploadResponse, DeleteImageProcessingTemplateResponse, CreateWatermarkTemplateResponse, CommitUploadRequest, DeleteAnimatedGraphicsTemplateRequest, DeleteSnapshotByTimeOffsetTemplateRequest, DescribeAnimatedGraphicsTemplatesResponse, DescribeCLSPushTargetsResponse, DescribeImageProcessingTemplatesResponse, ReviewImageRequest, DescribeHeadTailTemplatesResponse, HandleCurrentPlaylistRequest, CreateCLSLogsetResponse, CreateAnimatedGraphicsTemplateResponse, DescribePersonSamplesRequest, DeleteEnhanceMediaTemplateRequest, SetDrmKeyProviderInfoResponse, DescribeStorageDetailsRequest, EnhanceMediaQualityResponse, DescribeFileAttributesRequest, CreateReviewTemplateResponse, DeleteWatermarkTemplateResponse, DeleteQualityInspectTemplateRequest, DeleteJustInTimeTranscodeTemplateResponse, ModifyWatermarkTemplateResponse, DescribeJustInTimeTranscodeTemplatesRequest, CreateImageSpriteTemplateResponse, DescribeAIRecognitionTemplatesRequest } from "./vod_models";
/**
 * vod client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 创建一个用户自定义的图片处理模板，数量上限：16。最多支持十次操作，例如：裁剪-缩略-裁剪-模糊-缩略-裁剪-缩略-裁剪-模糊-缩略。
     */
    CreateImageProcessingTemplate(req: CreateImageProcessingTemplateRequest, cb?: (error: string, rep: CreateImageProcessingTemplateResponse) => void): Promise<CreateImageProcessingTemplateResponse>;
    /**
     * 查询 VOD 创建的 CLS 日志集。
     */
    DescribeCLSLogsets(req: DescribeCLSLogsetsRequest, cb?: (error: string, rep: DescribeCLSLogsetsResponse) => void): Promise<DescribeCLSLogsetsResponse>;
    /**
     * 该接口用于创建轮播播单，数量上限：100。
轮播播单的每个文件可以指定源文件，也可以指定某个转码文件。
指定的文件必须是hls格式，所有的播单文件最好保持相同的码率和分辨率。
     */
    CreateRoundPlay(req: CreateRoundPlayRequest, cb?: (error: string, rep: CreateRoundPlayResponse) => void): Promise<CreateRoundPlayResponse>;
    /**
     * 该接口用于设置默认的存储地域。上传文件时如果没有指定地域，将上传到默认地域。
     */
    ModifyDefaultStorageRegion(req: ModifyDefaultStorageRegionRequest, cb?: (error: string, rep: ModifyDefaultStorageRegionResponse) => void): Promise<ModifyDefaultStorageRegionResponse>;
    /**
     * 如果有盗录溯源需求，推荐使用 [幽灵水印](https://cloud.tencent.com/document/product/266/94228)。
     */
    ExtractTraceWatermark(req: ExtractTraceWatermarkRequest, cb?: (error: string, rep: ExtractTraceWatermarkResponse) => void): Promise<ExtractTraceWatermarkResponse>;
    /**
     * 用于异步获取文件属性。
- 当前仅支持获取源文件的 Md5、Sha1。
- 对输入文件为 HLS 或 DASH 的情况，仅获取索引文件的属性。
     */
    DescribeFileAttributes(req: DescribeFileAttributesRequest, cb?: (error: string, rep: DescribeFileAttributesResponse) => void): Promise<DescribeFileAttributesResponse>;
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
    EditMedia(req: EditMediaRequest, cb?: (error: string, rep: EditMediaResponse) => void): Promise<EditMediaResponse>;
    /**
     * 修改即时转码模板。
- 注意：即时转码模板创建后，不推荐修改，如需修改参数，推荐使用新增模板。
     */
    ModifyJustInTimeTranscodeTemplate(req: ModifyJustInTimeTranscodeTemplateRequest, cb?: (error: string, rep: ModifyJustInTimeTranscodeTemplateResponse) => void): Promise<ModifyJustInTimeTranscodeTemplateResponse>;
    /**
     * 该接口用于查询点播域名信息列表。
     */
    DescribeVodDomains(req: DescribeVodDomainsRequest, cb?: (error: string, rep: DescribeVodDomainsResponse) => void): Promise<DescribeVodDomainsResponse>;
    /**
     * * 我们强烈建议您使用云点播提供的 [服务端上传 SDK](/document/product/266/9759#1.-.E5.8F.91.E8.B5.B7.E4.B8.8A.E4.BC.A0) 来上传文件。直接调用 API 进行上传的难度和工作量都显著大于使用 SDK。
* 该接口用于申请媒体文件（和封面文件）的上传，获取文件上传到云点播的元信息（包括上传路径、上传签名等），用于后续上传接口。
* 上传流程请参考 [服务端上传综述](/document/product/266/9759)。
     */
    ApplyUpload(req: ApplyUploadRequest, cb?: (error: string, rep: ApplyUploadResponse) => void): Promise<ApplyUploadResponse>;
    /**
     * 创建用户自定义指定时间点截图模板，数量上限：16。
     */
    CreateSnapshotByTimeOffsetTemplate(req: CreateSnapshotByTimeOffsetTemplateRequest, cb?: (error: string, rep: CreateSnapshotByTimeOffsetTemplateResponse) => void): Promise<CreateSnapshotByTimeOffsetTemplateResponse>;
    /**
     * 根据音视频内容分析模板唯一标识，获取音视频内容分析模板详情列表。返回结果包含符合条件的所有用户自定义音视频内容分析模板及[系统预置音视频内容分析模板](https://cloud.tencent.com/document/product/266/33476#.E9.A2.84.E7.BD.AE.E8.A7.86.E9.A2.91.E5.86.85.E5.AE.B9.E5.88.86.E6.9E.90.E6.A8.A1.E6.9D.BF)。
     */
    DescribeAIAnalysisTemplates(req: DescribeAIAnalysisTemplatesRequest, cb?: (error: string, rep: DescribeAIAnalysisTemplatesResponse) => void): Promise<DescribeAIAnalysisTemplatesResponse>;
    /**
     * * 该接口用于业务服务器以 [可靠回调](https://cloud.tencent.com/document/product/266/33779#.E5.8F.AF.E9.9D.A0.E5.9B.9E.E8.B0.83) 的方式获取事件通知；
* 接口为长轮询模式，即：如果服务端存在未消费事件，则立即返回给请求方；如果服务端没有未消费事件，则后台会将请求挂起，直到有新的事件产生为止；
* 请求最多挂起5秒，建议请求方将超时时间设置为10秒；
* 未被拉取的事件通知最多保留4天，超过该时限的事件通知可能会被清除；
* 若该接口有事件返回，调用方必须在<font color="red">30秒</font>内调用 [确认事件通知](https://cloud.tencent.com/document/product/266/33434) 接口，确认事件通知已经处理，否则该事件通知在<font color="red">30秒</font>后会再次被拉取到。
* 当前，API 每次最多可以获取16个事件通知。
     */
    PullEvents(req: PullEventsRequest, cb?: (error: string, rep: PullEventsResponse) => void): Promise<PullEventsResponse>;
    /**
     * 使用任务流模板，对点播中的视频发起处理任务。
有两种方式创建任务流模板：
1. 在控制台上创建和修改任务流模板；
2. 通过任务流模板接口创建任务流模板。

如使用事件通知，除音视频审核任务外的事件通知的类型为 [任务流状态变更](https://cloud.tencent.com/document/product/266/9636)；音视频审核任务事件通知的类型为 [音视频审核完成](https://cloud.tencent.com/document/product/266/81258)。
     */
    ProcessMediaByProcedure(req: ProcessMediaByProcedureRequest, cb?: (error: string, rep: ProcessMediaByProcedureResponse) => void): Promise<ProcessMediaByProcedureResponse>;
    /**
     * 创建音画质检测模板。
     */
    CreateQualityInspectTemplate(req: CreateQualityInspectTemplateRequest, cb?: (error: string, rep: CreateQualityInspectTemplateResponse) => void): Promise<CreateQualityInspectTemplateResponse>;
    /**
     * 该 API 已经<font color=red>不再维护</font>，新版 [音画质重生](https://cloud.tencent.com/document/product/266/102571) 接口使用预置模板，详情请参见 [音画质重生模板](https://cloud.tencent.com/document/product/266/102586#50604b3f-0286-4a10-a3f7-18218116aff7)。
修改视频重生模板。
     */
    ModifyRebuildMediaTemplate(req: ModifyRebuildMediaTemplateRequest, cb?: (error: string, rep: ModifyRebuildMediaTemplateResponse) => void): Promise<ModifyRebuildMediaTemplateResponse>;
    /**
     * 删除用户自定义转码模板。
     */
    DeleteTranscodeTemplate(req: DeleteTranscodeTemplateRequest, cb?: (error: string, rep: DeleteTranscodeTemplateResponse) => void): Promise<DeleteTranscodeTemplateResponse>;
    /**
     * 通过任务 ID 查询任务的执行状态和结果的详细信息（最多可以查询3天之内提交的任务）。
     */
    DescribeTaskDetail(req: DescribeTaskDetailRequest, cb?: (error: string, rep: DescribeTaskDetailResponse) => void): Promise<DescribeTaskDetailResponse>;
    /**
     * <b>本接口已不推荐使用，用 [DescribeMediaProcessUsageData](/document/product/266/41464) 替代</b>

该接口返回查询时间范围内每天使用的视频内容智能识别时长数据，单位： 秒。

1. 可以查询最近365天内的视频内容智能识别时长统计数据。
2. 查询时间跨度不超过90天。
     */
    DescribeReviewDetails(req: DescribeReviewDetailsRequest, cb?: (error: string, rep: DescribeReviewDetailsResponse) => void): Promise<DescribeReviewDetailsResponse>;
    /**
     * 该接口用于根据应用场景、关键词、标签，分页查询关键词样本信息。
     */
    DescribeWordSamples(req: DescribeWordSamplesRequest, cb?: (error: string, rep: DescribeWordSamplesResponse) => void): Promise<DescribeWordSamplesResponse>;
    /**
     * 查询存储空间使用情况和文件数量。
     */
    DescribeStorageData(req: DescribeStorageDataRequest, cb?: (error: string, rep: DescribeStorageDataResponse) => void): Promise<DescribeStorageDataResponse>;
    /**
     * 对点播视频进行拆条，生成多个新的点播视频。
     */
    SplitMedia(req: SplitMediaRequest, cb?: (error: string, rep: SplitMediaResponse) => void): Promise<SplitMediaResponse>;
    /**
     * 获取图片处理模板列表，支持根据条件，分页查询。
     */
    DescribeImageProcessingTemplates(req: DescribeImageProcessingTemplatesRequest, cb?: (error: string, rep: DescribeImageProcessingTemplatesResponse) => void): Promise<DescribeImageProcessingTemplatesResponse>;
    /**
     * 删除用户自定义的任务流模板。
     */
    DeleteProcedureTemplate(req: DeleteProcedureTemplateRequest, cb?: (error: string, rep: DeleteProcedureTemplateResponse) => void): Promise<DeleteProcedureTemplateResponse>;
    /**
     * 删除转自适应码流模板
     */
    DeleteAdaptiveDynamicStreamingTemplate(req: DeleteAdaptiveDynamicStreamingTemplateRequest, cb?: (error: string, rep: DeleteAdaptiveDynamicStreamingTemplateResponse) => void): Promise<DeleteAdaptiveDynamicStreamingTemplateResponse>;
    /**
     * 创建转自适应码流模板，数量上限：100。
     */
    CreateAdaptiveDynamicStreamingTemplate(req: CreateAdaptiveDynamicStreamingTemplateRequest, cb?: (error: string, rep: CreateAdaptiveDynamicStreamingTemplateResponse) => void): Promise<CreateAdaptiveDynamicStreamingTemplateResponse>;
    /**
     * 本 API 是 [旧版本加密](https://cloud.tencent.com/document/product/266/9638) 中 [DescribeDrmDataKey 的 API 2017 接口](https://cloud.tencent.com/document/product/266/9643) 的升级版本。

如果您是新接入点播加密的用户，不要使用该 API，请参考 [视频加密综述](https://cloud.tencent.com/document/product/266/45552) 使用推荐的加密方式。
     */
    DescribeDrmDataKey(req: DescribeDrmDataKeyRequest, cb?: (error: string, rep: DescribeDrmDataKeyResponse) => void): Promise<DescribeDrmDataKeyResponse>;
    /**
     * 删除用户自定义指定时间点截图模板。
     */
    DeleteSnapshotByTimeOffsetTemplate(req: DeleteSnapshotByTimeOffsetTemplateRequest, cb?: (error: string, rep: DeleteSnapshotByTimeOffsetTemplateResponse) => void): Promise<DeleteSnapshotByTimeOffsetTemplateResponse>;
    /**
     * 智能去除水印
     */
    RemoveWatermark(req: RemoveWatermarkRequest, cb?: (error: string, rep: RemoveWatermarkResponse) => void): Promise<RemoveWatermarkResponse>;
    /**
     * 该接口用于修改默认分发配置。
* 分发域名和分发协议，即媒体文件分发 URL 中的域名和协议。媒体文件按默认分发配置进行分发。
* 播放密钥，用于计算播放器签名。
     */
    ModifyDefaultDistributionConfig(req: ModifyDefaultDistributionConfigRequest, cb?: (error: string, rep: ModifyDefaultDistributionConfigResponse) => void): Promise<ModifyDefaultDistributionConfigResponse>;
    /**
     * 查询点播域名的 CDN 访问日志的下载链接。
    1. 可以查询最近30天内的 CDN 日志下载链接。
    2. 默认情况下 CDN 每小时生成一个日志文件，如果某一个小时没有 CDN 访问，不会生成日志文件。
    3. CDN 日志下载链接的有效期为24小时。
     */
    DescribeCdnLogs(req: DescribeCdnLogsRequest, cb?: (error: string, rep: DescribeCdnLogsResponse) => void): Promise<DescribeCdnLogsResponse>;
    /**
     * 由 VOD 创建新的日志集。
     */
    CreateCLSLogset(req: CreateCLSLogsetRequest, cb?: (error: string, rep: CreateCLSLogsetResponse) => void): Promise<CreateCLSLogsetResponse>;
    /**
     * 为点播域名设置投递 CLS 的目标。
     */
    SetCLSPushTarget(req: SetCLSPushTargetRequest, cb?: (error: string, rep: SetCLSPushTargetResponse) => void): Promise<SetCLSPushTargetResponse>;
    /**
     * * 该接口用于查询任务列表；
* 当列表数据比较多时，单次接口调用无法拉取整个列表，可通过 ScrollToken 参数，分批拉取；
* 只能查询到最近三天（72 小时）内的任务。
     */
    DescribeTasks(req: DescribeTasksRequest, cb?: (error: string, rep: DescribeTasksResponse) => void): Promise<DescribeTasksResponse>;
    /**
     * 该接口用于开通某地域的存储。
  1. 用户开通点播业务时，系统默认为用户开通了部分地域的存储，用户如果需要开通其它地域的存储，可以通过该接口进行开通。
  2. 通过 DescribeStorageRegions 接口可以查询到所有存储地域及已经开通的地域。
     */
    CreateStorageRegion(req: CreateStorageRegionRequest, cb?: (error: string, rep: CreateStorageRegionResponse) => void): Promise<CreateStorageRegionResponse>;
    /**
     * 删除点播开通的日志主题。
     */
    DeleteCLSTopic(req: DeleteCLSTopicRequest, cb?: (error: string, rep: DeleteCLSTopicResponse) => void): Promise<DeleteCLSTopicResponse>;
    /**
     * 重新设置用户自定义任务流模板的内容。
     */
    ResetProcedureTemplate(req: ResetProcedureTemplateRequest, cb?: (error: string, rep: ResetProcedureTemplateResponse) => void): Promise<ResetProcedureTemplateResponse>;
    /**
     * 该接口用于查询点播 CDN 的流量、带宽等统计数据。
   1. 可以查询最近365天内的 CDN 用量数据。
   2. 查询时间跨度不超过90天。
   3. 可以指定用量数据的时间粒度，支持5分钟、1小时、1天的时间粒度。
   4. 流量为查询时间粒度内的总流量，带宽为查询时间粒度内的峰值带宽。
   5. 播放统计仅针对 VOD 域名（即 EdgeOne 域名的分发不计入播放统计）。
     */
    DescribeCDNUsageData(req: DescribeCDNUsageDataRequest, cb?: (error: string, rep: DescribeCDNUsageDataResponse) => void): Promise<DescribeCDNUsageDataResponse>;
    /**
     * 创建用户自定义转码模板，数量上限：100。
     */
    CreateTranscodeTemplate(req: CreateTranscodeTemplateRequest, cb?: (error: string, rep: CreateTranscodeTemplateResponse) => void): Promise<CreateTranscodeTemplateResponse>;
    /**
     * 该接口用于查询点播域名的 CDN 带宽、流量等统计数据。
* 查询的起始时间和结束时间跨度不超过90天。
* 可以查询不同服务区域的数据。
* 中国境内的数据支持查询指定地区、运营商的统计数据。
* 播放统计仅针对 VOD 域名（即 EdgeOne 域名的分发不计入播放统计）。
     */
    DescribeCDNStatDetails(req: DescribeCDNStatDetailsRequest, cb?: (error: string, rep: DescribeCDNStatDetailsResponse) => void): Promise<DescribeCDNStatDetailsResponse>;
    /**
     * 该接口用于查询媒体文件按指定时间粒度统计的播放数据
* 可以查询最近一年的播放统计数据。
* 时间粒度为小时，结束时间和起始时间的跨度最大为7天。
* 时间粒度为天，结束时间和起始时间的跨度最大为90天。
* 播放统计仅针对 VOD 域名（即 EdgeOne 域名的分发不计入播放统计）。
     */
    DescribeMediaPlayStatDetails(req: DescribeMediaPlayStatDetailsRequest, cb?: (error: string, rep: DescribeMediaPlayStatDetailsResponse) => void): Promise<DescribeMediaPlayStatDetailsResponse>;
    /**
     * 修改用户自定义审核模板。
>模板仅适用于 [音视频审核(ReviewAudioVideo)](https://cloud.tencent.com/document/api/266/80283) 和 [图片审核(ReviewImage)](https://cloud.tencent.com/document/api/266/73217) 接口。
     */
    ModifyReviewTemplate(req: ModifyReviewTemplateRequest, cb?: (error: string, rep: ModifyReviewTemplateResponse) => void): Promise<ModifyReviewTemplateResponse>;
    /**
     * 该接口返回查询时间范围内每天 License 请求次数信息。
   1. 可以查询最近365天内的 License 请求次数统计数据。
   2. 查询时间跨度不超过90天。
   3. 查询时间跨度超过1天的，返回以天为粒度的数据，否则，返回以5分钟为粒度的数据。
     */
    DescribeLicenseUsageData(req: DescribeLicenseUsageDataRequest, cb?: (error: string, rep: DescribeLicenseUsageDataResponse) => void): Promise<DescribeLicenseUsageDataResponse>;
    /**
     * 修改用户自定义雪碧图模板。
     */
    ModifyImageSpriteTemplate(req: ModifyImageSpriteTemplateRequest, cb?: (error: string, rep: ModifyImageSpriteTemplateResponse) => void): Promise<ModifyImageSpriteTemplateResponse>;
    /**
     * * 仅当待删分类无子分类且无媒体关联情况下，可删除分类；
* 否则，请先执行[删除媒体](/document/product/266/31764)及子分类，再删除该分类；
     */
    DeleteClass(req: DeleteClassRequest, cb?: (error: string, rep: DeleteClassResponse) => void): Promise<DeleteClassResponse>;
    /**
     * 本接口仅用于定制开发的特殊场景，除非云点播客服人员主动告知您需要使用本接口，其它情况请勿调用。
     */
    ExecuteFunction(req: ExecuteFunctionRequest, cb?: (error: string, rep: ExecuteFunctionResponse) => void): Promise<ExecuteFunctionResponse>;
    /**
     * 删除用户自定义审核模板。
>模板仅适用于 [音视频审核(ReviewAudioVideo)](https://cloud.tencent.com/document/api/266/80283) 和 [图片审核(ReviewImage)](https://cloud.tencent.com/document/api/266/73217) 接口。
     */
    DeleteReviewTemplate(req: DeleteReviewTemplateRequest, cb?: (error: string, rep: DeleteReviewTemplateResponse) => void): Promise<DeleteReviewTemplateResponse>;
    /**
     * 该接口返回查询时间范围内每天使用的视频处理用量信息。
   1. 可以查询最近365天内的视频处理统计数据。
   2. 查询时间跨度不超过90天。
     */
    DescribeMediaProcessUsageData(req: DescribeMediaProcessUsageDataRequest, cb?: (error: string, rep: DescribeMediaProcessUsageDataResponse) => void): Promise<DescribeMediaProcessUsageDataResponse>;
    /**
     * 根据转码模板唯一标识，获取转码模板详情列表。返回结果包含符合条件的所有用户自定义模板及[系统预置转码模板](https://cloud.tencent.com/document/product/266/33476#.E9.A2.84.E7.BD.AE.E8.BD.AC.E7.A0.81.E6.A8.A1.E6.9D.BF)。
     */
    DescribeTranscodeTemplates(req: DescribeTranscodeTemplatesRequest, cb?: (error: string, rep: DescribeTranscodeTemplatesResponse) => void): Promise<DescribeTranscodeTemplatesResponse>;
    /**
     * 对点播中的音视频媒体发起音画质检测任务。
     */
    InspectMediaQuality(req: InspectMediaQualityRequest, cb?: (error: string, rep: InspectMediaQualityResponse) => void): Promise<InspectMediaQualityResponse>;
    /**
     * 该接口可以查询用户已经购买的预付费商品的信息，包括：
    1. 商品的类型、生效和失效日期。
    2. 商品中每种资源的额度和剩余额度。
     */
    DescribePrepaidProducts(req?: DescribePrepaidProductsRequest, cb?: (error: string, rep: DescribePrepaidProductsResponse) => void): Promise<DescribePrepaidProductsResponse>;
    /**
     * 该接口用于生成一条子域名解析，提示客户添加到域名解析上，用于泛域名及域名取回校验归属权。
     */
    CreateDomainVerifyRecord(req: CreateDomainVerifyRecordRequest, cb?: (error: string, rep: CreateDomainVerifyRecordResponse) => void): Promise<CreateDomainVerifyRecordResponse>;
    /**
     * 查询指定时间点截图模板，支持根据条件，分页查询。
     */
    DescribeSnapshotByTimeOffsetTemplates(req: DescribeSnapshotByTimeOffsetTemplatesRequest, cb?: (error: string, rep: DescribeSnapshotByTimeOffsetTemplatesResponse) => void): Promise<DescribeSnapshotByTimeOffsetTemplatesResponse>;
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
    ComposeMedia(req: ComposeMediaRequest, cb?: (error: string, rep: ComposeMediaResponse) => void): Promise<ComposeMediaResponse>;
    /**
     * 该 API 已经<font color=red>不再维护</font>，新版审核模板支持音视频审核和图片审核，详细请参考 [创建审核模板](https://cloud.tencent.com/document/api/266/84391)。
创建用户自定义音视频内容审核模板，数量上限：50。
     */
    CreateContentReviewTemplate(req: CreateContentReviewTemplateRequest, cb?: (error: string, rep: CreateContentReviewTemplateResponse) => void): Promise<CreateContentReviewTemplateResponse>;
    /**
     * 该 API 已经<font color=red>不再维护</font>，请使用新版接口 [音画质重生](https://cloud.tencent.com/document/api/266/102571)。
发起音画质重生
     */
    RebuildMedia(req: RebuildMediaRequest, cb?: (error: string, rep: RebuildMediaResponse) => void): Promise<RebuildMediaResponse>;
    /**
     * 创建用户自定义采样截图模板，数量上限：16。
     */
    CreateSampleSnapshotTemplate(req: CreateSampleSnapshotTemplateRequest, cb?: (error: string, rep: CreateSampleSnapshotTemplateResponse) => void): Promise<CreateSampleSnapshotTemplateResponse>;
    /**
     * 删除用户自定义音视频内容分析模板。

注意：模板 ID 为 10000 以下的为系统预置模板，不允许删除。
     */
    DeleteAIAnalysisTemplate(req: DeleteAIAnalysisTemplateRequest, cb?: (error: string, rep: DeleteAIAnalysisTemplateResponse) => void): Promise<DeleteAIAnalysisTemplateResponse>;
    /**
     * 查询 DRM 密钥提供商信息。
     */
    DescribeDrmKeyProviderInfo(req: DescribeDrmKeyProviderInfoRequest, cb?: (error: string, rep: DescribeDrmKeyProviderInfoResponse) => void): Promise<DescribeDrmKeyProviderInfoResponse>;
    /**
     * 该 API 已经<font color=red>不再维护</font>，新版 [音画质重生](https://cloud.tencent.com/document/product/266/102571) 接口使用预置模板，详情请参见 [音画质重生模板](https://cloud.tencent.com/document/product/266/102586#50604b3f-0286-4a10-a3f7-18218116aff7)。
删除视频重生模板。
     */
    DeleteRebuildMediaTemplate(req: DeleteRebuildMediaTemplateRequest, cb?: (error: string, rep: DeleteRebuildMediaTemplateResponse) => void): Promise<DeleteRebuildMediaTemplateResponse>;
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
    LiveRealTimeClip(req: LiveRealTimeClipRequest, cb?: (error: string, rep: LiveRealTimeClipResponse) => void): Promise<LiveRealTimeClipResponse>;
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
    ModifyMediaStorageClass(req: ModifyMediaStorageClassRequest, cb?: (error: string, rep: ModifyMediaStorageClassResponse) => void): Promise<ModifyMediaStorageClassResponse>;
    /**
     * 该接口用于将一个网络上的视频拉取到云点播平台。
     */
    PullUpload(req: PullUploadRequest, cb?: (error: string, rep: PullUploadResponse) => void): Promise<PullUploadResponse>;
    /**
     * 修改用户自定义采样截图模板。
     */
    ModifySampleSnapshotTemplate(req: ModifySampleSnapshotTemplateRequest, cb?: (error: string, rep: ModifySampleSnapshotTemplateResponse) => void): Promise<ModifySampleSnapshotTemplateResponse>;
    /**
     * 该接口用于修改点播域名的加速区域。
1、域名部署状态为 Online 状态时才允许修改加速区域。
     */
    ModifyVodDomainAccelerateConfig(req: ModifyVodDomainAccelerateConfigRequest, cb?: (error: string, rep: ModifyVodDomainAccelerateConfigResponse) => void): Promise<ModifyVodDomainAccelerateConfigResponse>;
    /**
     * 该 API 已经<font color='red'>不再维护</font>，新版播放器签名不再使用播放器配置模板，详细请参考 [播放器签名](https://cloud.tencent.com/document/product/266/45554)。
删除播放器配置。
*注：系统预置播放器配置不允许删除。*
     */
    DeleteSuperPlayerConfig(req: DeleteSuperPlayerConfigRequest, cb?: (error: string, rep: DeleteSuperPlayerConfigResponse) => void): Promise<DeleteSuperPlayerConfigResponse>;
    /**
     * 对点播中的音视频媒体发起审核任务，智能检测视频画面、画面中的文字、语音中的文字、声音出现的违规内容。

如使用事件通知，事件通知的类型为 [音视频审核完成](https://cloud.tencent.com/document/product/266/81258)。
     */
    ReviewAudioVideo(req: ReviewAudioVideoRequest, cb?: (error: string, rep: ReviewAudioVideoResponse) => void): Promise<ReviewAudioVideoResponse>;
    /**
     * 根据任务流模板名字，获取任务流模板详情列表。
     */
    DescribeProcedureTemplates(req: DescribeProcedureTemplatesRequest, cb?: (error: string, rep: DescribeProcedureTemplatesResponse) => void): Promise<DescribeProcedureTemplatesResponse>;
    /**
     * 该接口返回查询时间范围内客户端上传加速统计信息。
   1. 可以查询最近365天内的客户端上传加速统计数据。
   2. 查询时间跨度不超过90天。
   3. 查询时间跨度超过1天的，返回以天为粒度的数据，否则，返回以5分钟为粒度的数据。
     */
    DescribeClientUploadAccelerationUsageData(req: DescribeClientUploadAccelerationUsageDataRequest, cb?: (error: string, rep: DescribeClientUploadAccelerationUsageDataResponse) => void): Promise<DescribeClientUploadAccelerationUsageDataResponse>;
    /**
     * 上传 HLS 视频时，解析索引文件内容，返回待上传的分片文件列表。分片文件路径必须是当前目录或子目录的相对路径，不能是 URL，不能是绝对路径。
     */
    ParseStreamingManifest(req: ParseStreamingManifestRequest, cb?: (error: string, rep: ParseStreamingManifestResponse) => void): Promise<ParseStreamingManifestResponse>;
    /**
     * 该 API 已经<font color='red'>不再维护</font>，智能识别任务请使用图片智能识别 [ReviewImage](https://cloud.tencent.com/document/api/266/73217) 接口。

对点播中的图片文件发起处理任务，功能包括：

1. 智能识别（令人反感的信息、不安全的信息、不适宜的信息）;

><li>图片文件大小支持：文件 < 5M；</li>
><li>图片文件分辨率支持：建议分辨率大于256x256，否则可能会影响识别效果；</li>
><li>图片文件支持格式：PNG、JPG、JPEG、BMP、GIF、WEBP格式。</li>
     */
    ProcessImage(req: ProcessImageRequest, cb?: (error: string, rep: ProcessImageResponse) => void): Promise<ProcessImageResponse>;
    /**
     * 对点播中的音视频媒体发起音画质重生任务。
     */
    EnhanceMediaQuality(req: EnhanceMediaQualityRequest, cb?: (error: string, rep: EnhanceMediaQualityResponse) => void): Promise<EnhanceMediaQualityResponse>;
    /**
     * 创建用户自定义的任务流模板，模板上限：50。
     */
    CreateProcedureTemplate(req: CreateProcedureTemplateRequest, cb?: (error: string, rep: CreateProcedureTemplateResponse) => void): Promise<CreateProcedureTemplateResponse>;
    /**
     * 1. 预热指定的 URL 列表。
2. URL 的域名必须已在云点播中注册。
3. 单次请求最多指定20个 URL。
4. 默认预热配额为每天10000个 URL。
     */
    PushUrlCache(req: PushUrlCacheRequest, cb?: (error: string, rep: PushUrlCacheResponse) => void): Promise<PushUrlCacheResponse>;
    /**
     * * 删除媒体及其对应的视频处理文件（原始文件、如转码视频、雪碧图、截图、微信发布视频等）；
* 可单独删除指定 ID 的视频文件下的原文件、转码视频、微信发布视频等；
* 注意：原文件删除后，无法发起转码、微信发布等任何视频处理操作。
     */
    DeleteMedia(req: DeleteMediaRequest, cb?: (error: string, rep: DeleteMediaResponse) => void): Promise<DeleteMediaResponse>;
    /**
     * 操作轮播当前播放列表。支持的操作有：<li> Insert：向当前播列表插入播放节目。</li><li> Delete：删除播列表中的播放节目。</li>
     */
    HandleCurrentPlaylist(req: HandleCurrentPlaylistRequest, cb?: (error: string, rep: HandleCurrentPlaylistResponse) => void): Promise<HandleCurrentPlaylistResponse>;
    /**
     * 该 API 已经<font color='red'>不再维护</font>，新版播放器签名不再使用播放器配置模板，详细请参考 [播放器签名](https://cloud.tencent.com/document/product/266/45554)。
创建播放器配置，数量上限：100。
     */
    CreateSuperPlayerConfig(req: CreateSuperPlayerConfigRequest, cb?: (error: string, rep: CreateSuperPlayerConfigResponse) => void): Promise<CreateSuperPlayerConfigResponse>;
    /**
     * 查询点播域名下日志投递的目标主题。
     */
    DescribeCLSPushTargets(req: DescribeCLSPushTargetsRequest, cb?: (error: string, rep: DescribeCLSPushTargetsResponse) => void): Promise<DescribeCLSPushTargetsResponse>;
    /**
     * 该 API 已经<font color=red>不再维护</font>，请使用新版接口 [音画质重生](https://cloud.tencent.com/document/api/266/102571)。
使用模板发起音画质重生。
     */
    EnhanceMediaByTemplate(req: EnhanceMediaByTemplateRequest, cb?: (error: string, rep: EnhanceMediaByTemplateResponse) => void): Promise<EnhanceMediaByTemplateResponse>;
    /**
     * 该接口用于根据素材 ID，修改素材样本信息，包括名称、描述的修改，以及五官、标签的添加、删除、重置操作。五官删除操作需保证至少剩余 1 张图片，否则，请使用重置操作。
     */
    ModifyPersonSample(req: ModifyPersonSampleRequest, cb?: (error: string, rep: ModifyPersonSampleResponse) => void): Promise<ModifyPersonSampleResponse>;
    /**
     * 该 API 已经<font color=red>不再维护</font>，新版 [音画质重生](https://cloud.tencent.com/document/product/266/102571) 接口使用预置模板，详情请参见 [音画质重生模板](https://cloud.tencent.com/document/product/266/102586#50604b3f-0286-4a10-a3f7-18218116aff7)。
创建音画质重生模板。
     */
    CreateEnhanceMediaTemplate(req: CreateEnhanceMediaTemplateRequest, cb?: (error: string, rep: CreateEnhanceMediaTemplateResponse) => void): Promise<CreateEnhanceMediaTemplateResponse>;
    /**
     * 该 API 已经<font color=red>不再维护</font>，新版 [音画质重生](https://cloud.tencent.com/document/product/266/102571) 接口使用预置模板，详情请参见 [音画质重生模板](https://cloud.tencent.com/document/product/266/102586#50604b3f-0286-4a10-a3f7-18218116aff7)。
创建视频重生模板。
     */
    CreateRebuildMediaTemplate(req: CreateRebuildMediaTemplateRequest, cb?: (error: string, rep: CreateRebuildMediaTemplateResponse) => void): Promise<CreateRebuildMediaTemplateResponse>;
    /**
     * 查询轮播当前播放列表。
     */
    DescribeCurrentPlaylist(req: DescribeCurrentPlaylistRequest, cb?: (error: string, rep: DescribeCurrentPlaylistResponse) => void): Promise<DescribeCurrentPlaylistResponse>;
    /**
     * 该接口用于查询指定日期范围内每天的播放统计数据。
* 可以查询最近一年的播放统计数据。
* 结束日期和起始日期的时间跨度最大为90天。
* 播放统计仅针对 VOD 域名（即 EdgeOne 域名的分发不计入播放统计）。
     */
    DescribeDailyMediaPlayStat(req: DescribeDailyMediaPlayStatRequest, cb?: (error: string, rep: DescribeDailyMediaPlayStatResponse) => void): Promise<DescribeDailyMediaPlayStatResponse>;
    /**
     * 删除用户自定义转动图模板。
     */
    DeleteAnimatedGraphicsTemplate(req: DeleteAnimatedGraphicsTemplateRequest, cb?: (error: string, rep: DeleteAnimatedGraphicsTemplateResponse) => void): Promise<DeleteAnimatedGraphicsTemplateResponse>;
    /**
     * 查询 VOD 创建的 CLS 日志主题列表。
     */
    DescribeCLSTopics(req: DescribeCLSTopicsRequest, cb?: (error: string, rep: DescribeCLSTopicsResponse) => void): Promise<DescribeCLSTopicsResponse>;
    /**
     * 创建 VOD 下新的 CLS 日志主题
     */
    CreateCLSTopic(req: CreateCLSTopicRequest, cb?: (error: string, rep: CreateCLSTopicResponse) => void): Promise<CreateCLSTopicResponse>;
    /**
     * 该 API 已经<font color=red>不再维护</font>，新版审核模板支持音视频审核和图片审核，详细请参考 [删除审核模板](https://cloud.tencent.com/document/api/266/84390)。
删除用户自定义音视频内容审核模板。
     */
    DeleteContentReviewTemplate(req: DeleteContentReviewTemplateRequest, cb?: (error: string, rep: DeleteContentReviewTemplateResponse) => void): Promise<DeleteContentReviewTemplateResponse>;
    /**
     * 创建用户自定义音视频内容分析模板，数量上限：50。暂时不支持 HLS 格式。
     */
    CreateAIAnalysisTemplate(req: CreateAIAnalysisTemplateRequest, cb?: (error: string, rep: CreateAIAnalysisTemplateResponse) => void): Promise<CreateAIAnalysisTemplateResponse>;
    /**
     * 该接口用于查询每日播放Top100 的媒体文件的播放统计数据。
* 可以查询最近一年的播放统计数据。
* 可以按播放次数或者播放流量查询。
* 播放次数统计说明：
    1. HLS 文件：访问 M3U8 文件时统计播放次数；访问 TS 文件不统计播放次数。
    2. 其它文件（如 MP4 文件）：播放请求带有 range 参数且 range 的 start 参数不等于0时不统计播放次数，其它情况统计播放次数。
* 播放统计仅针对 VOD 域名（即 EdgeOne 域名的分发不计入播放统计）。
     */
    DescribeDailyMostPlayedStat(req: DescribeDailyMostPlayedStatRequest, cb?: (error: string, rep: DescribeDailyMostPlayedStatResponse) => void): Promise<DescribeDailyMostPlayedStatResponse>;
    /**
     * 如果有盗录溯源需求，请参考 [幽灵水印](https://cloud.tencent.com/document/product/266/94228)。
     */
    ExtractCopyRightWatermark(req: ExtractCopyRightWatermarkRequest, cb?: (error: string, rep: ExtractCopyRightWatermarkResponse) => void): Promise<ExtractCopyRightWatermarkResponse>;
    /**
     * 该接口用于：
  1. 查询点播可开通的所有存储园区列表。
  2. 查询已经开通的园区列表。
  3. 查询默认使用的存储园区。
     */
    DescribeStorageRegions(req: DescribeStorageRegionsRequest, cb?: (error: string, rep: DescribeStorageRegionsResponse) => void): Promise<DescribeStorageRegionsResponse>;
    /**
     * 1. 刷新指定的 URL 列表。
2. URL 的域名必须已在云点播中注册。
3. 单次请求最多指定20个 URL。
4. 默认刷新配额为每天100000个 URL。
     */
    RefreshUrlCache(req: RefreshUrlCacheRequest, cb?: (error: string, rep: RefreshUrlCacheResponse) => void): Promise<RefreshUrlCacheResponse>;
    /**
     * * 该接口用于业务服务器获取 [可靠回调](https://cloud.tencent.com/document/product/266/33779#.E5.8F.AF.E9.9D.A0.E5.9B.9E.E8.B0.83) 事件通知的状态。
     */
    DescribeEventsState(req: DescribeEventsStateRequest, cb?: (error: string, rep: DescribeEventsStateResponse) => void): Promise<DescribeEventsStateResponse>;
    /**
     * 修改音画质检测模板。
     */
    ModifyQualityInspectTemplate(req: ModifyQualityInspectTemplateRequest, cb?: (error: string, rep: ModifyQualityInspectTemplateResponse) => void): Promise<ModifyQualityInspectTemplateResponse>;
    /**
     * 该接口用于验证域名解析值。
     */
    VerifyDomainRecord(req: VerifyDomainRecordRequest, cb?: (error: string, rep: VerifyDomainRecordResponse) => void): Promise<VerifyDomainRecordResponse>;
    /**
     * 该接口返回查询时间范围内每天使用的图片审核用量信息。
   1. 可以查询最近365天内的图片审核统计数据。
   2. 查询时间跨度不超过90天。
   3. 查询时间跨度超过1天的，返回以天为粒度的数据，否则，返回以5分钟为粒度的数据。
     */
    DescribeImageReviewUsageData(req: DescribeImageReviewUsageDataRequest, cb?: (error: string, rep: DescribeImageReviewUsageDataResponse) => void): Promise<DescribeImageReviewUsageDataResponse>;
    /**
     * 该接口用于修改域名配置，可以修改域名的防盗链配置。
1、域名部署状态为 Online 状态时才允许修改域名的配置。
     */
    ModifyVodDomainConfig(req: ModifyVodDomainConfigRequest, cb?: (error: string, rep: ModifyVodDomainConfigResponse) => void): Promise<ModifyVodDomainConfigResponse>;
    /**
     * * 开发者调用拉取事件通知，获取到事件后，必须调用该接口来确认消息已经收到；
* 开发者获取到事件句柄后，等待确认的有效时间为 30 秒，超出 30 秒会报参数错误（4000）；
* 更多参考事件通知的[可靠回调](https://cloud.tencent.com/document/product/266/33779#.E5.8F.AF.E9.9D.A0.E5.9B.9E.E8.B0.83)。
     */
    ConfirmEvents(req: ConfirmEventsRequest, cb?: (error: string, rep: ConfirmEventsResponse) => void): Promise<ConfirmEventsResponse>;
    /**
     * 该接口用于获取轮播播单列表。
     */
    DescribeRoundPlays(req: DescribeRoundPlaysRequest, cb?: (error: string, rep: DescribeRoundPlaysResponse) => void): Promise<DescribeRoundPlaysResponse>;
    /**
     * 该 API 已经<font color='red'>不再维护</font>，请使用 MPS 产品的 [ProcessMedia](https://cloud.tencent.com/document/product/862/37578) 接口，在入参 InputInfo.UrlInputInfo.Url 中指定视频 URL。
     */
    ProcessMediaByUrl(req: ProcessMediaByUrlRequest, cb?: (error: string, rep: ProcessMediaByUrlResponse) => void): Promise<ProcessMediaByUrlResponse>;
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
    CreateComplexAdaptiveDynamicStreamingTask(req: CreateComplexAdaptiveDynamicStreamingTaskRequest, cb?: (error: string, rep: CreateComplexAdaptiveDynamicStreamingTaskResponse) => void): Promise<CreateComplexAdaptiveDynamicStreamingTaskResponse>;
    /**
     * 修改用户自定义转码模板信息。
     */
    ModifyTranscodeTemplate(req: ModifyTranscodeTemplateRequest, cb?: (error: string, rep: ModifyTranscodeTemplateResponse) => void): Promise<ModifyTranscodeTemplateResponse>;
    /**
     * 该 API 已经<font color=red>不再维护</font>，新版审核模板支持音视频审核和图片审核，详细请参考 [获取审核模板列表](https://cloud.tencent.com/document/api/266/84389)。
根据音视频内容审核模板唯一标识，获取音视频内容审核模板详情列表。返回结果包含符合条件的所有用户自定义模板及[系统预置内容审核模板](https://cloud.tencent.com/document/product/266/33476#.E9.A2.84.E7.BD.AE.E8.A7.86.E9.A2.91.E5.86.85.E5.AE.B9.E5.AE.A1.E6.A0.B8.E6.A8.A1.E6.9D.BF)。
     */
    DescribeContentReviewTemplates(req: DescribeContentReviewTemplatesRequest, cb?: (error: string, rep: DescribeContentReviewTemplatesResponse) => void): Promise<DescribeContentReviewTemplatesResponse>;
    /**
     * 修改片头片尾模板。
     */
    ModifyHeadTailTemplate(req: ModifyHeadTailTemplateRequest, cb?: (error: string, rep: ModifyHeadTailTemplateResponse) => void): Promise<ModifyHeadTailTemplateResponse>;
    /**
     * 删除用户自定义图片处理模板。
     */
    DeleteImageProcessingTemplate(req: DeleteImageProcessingTemplateRequest, cb?: (error: string, rep: DeleteImageProcessingTemplateResponse) => void): Promise<DeleteImageProcessingTemplateResponse>;
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
    ProcessMedia(req: ProcessMediaRequest, cb?: (error: string, rep: ProcessMediaResponse) => void): Promise<ProcessMediaResponse>;
    /**
     * 创建片头片尾模板。
- 最大支持模板数量为 100 个。
     */
    CreateHeadTailTemplate(req: CreateHeadTailTemplateRequest, cb?: (error: string, rep: CreateHeadTailTemplateResponse) => void): Promise<CreateHeadTailTemplateResponse>;
    /**
     * 修改用户自定义水印模板，水印类型不允许修改。
     */
    ModifyWatermarkTemplate(req: ModifyWatermarkTemplateRequest, cb?: (error: string, rep: ModifyWatermarkTemplateResponse) => void): Promise<ModifyWatermarkTemplateResponse>;
    /**
     * 该接口返回查询时间范围内使用的点播存储空间，单位：字节。
    1. 可以查询最近365天内的存储空间数据；
    2. 查询时间跨度不超过90天；
    3. 分钟粒度查询跨度不超过7天；
     */
    DescribeStorageDetails(req: DescribeStorageDetailsRequest, cb?: (error: string, rep: DescribeStorageDetailsResponse) => void): Promise<DescribeStorageDetailsResponse>;
    /**
     * 该接口用于批量删除关键词样本。
     */
    DeleteWordSamples(req: DeleteWordSamplesRequest, cb?: (error: string, rep: DeleteWordSamplesResponse) => void): Promise<DeleteWordSamplesResponse>;
    /**
     * 对云点播的 HLS 视频实现快速拼接和快速剪辑，生成新的 HLS 格式的媒体。

快速拼接或剪辑生成的视频，将产生新的 FileId 并进行固化，固化成功后新视频的文件独立于原始输入视频存在，不受原始视频删除等影响。

<font color='red'>注意：</font>通过 ModifyEventConfig 接口启用接收剪辑固化事件通知，固化成功后将会收到一个 PersitenceComplete 类型的事件通知。在收到这个事件通知之前，不应该对原始输入的视频进行删除、降冷等操作，否则拼接剪辑生成的视频播放可能出现异常。
     */
    FastEditMedia(req: FastEditMediaRequest, cb?: (error: string, rep: FastEditMediaResponse) => void): Promise<FastEditMediaResponse>;
    /**
     * 该接口用于将加速域名添加到点播，一个用户最多添加20个加速域名。
1.域名添加成功后点播会进行域名的部署，域名由部署状态变为在线状态大概需要2分钟的时间。
     */
    CreateVodDomain(req: CreateVodDomainRequest, cb?: (error: string, rep: CreateVodDomainResponse) => void): Promise<CreateVodDomainResponse>;
    /**
     * 创建用户自定义雪碧图模板，数量上限：16。
     */
    CreateImageSpriteTemplate(req: CreateImageSpriteTemplateRequest, cb?: (error: string, rep: CreateImageSpriteTemplateResponse) => void): Promise<CreateImageSpriteTemplateResponse>;
    /**
     * 该接口用于查询素材样本信息，支持根据素材 ID、名称、标签，分页查询。
     */
    DescribePersonSamples(req: DescribePersonSamplesRequest, cb?: (error: string, rep: DescribePersonSamplesResponse) => void): Promise<DescribePersonSamplesResponse>;
    /**
     * 删除用户自定义音视频内容识别模板。
     */
    DeleteAIRecognitionTemplate(req: DeleteAIRecognitionTemplateRequest, cb?: (error: string, rep: DeleteAIRecognitionTemplateResponse) => void): Promise<DeleteAIRecognitionTemplateResponse>;
    /**
     * 该接口用于创建点播应用。
     */
    CreateSubAppId(req: CreateSubAppIdRequest, cb?: (error: string, rep: CreateSubAppIdResponse) => void): Promise<CreateSubAppIdResponse>;
    /**
     * 查询转动图模板列表，支持根据条件，分页查询。
     */
    DescribeAnimatedGraphicsTemplates(req: DescribeAnimatedGraphicsTemplatesRequest, cb?: (error: string, rep: DescribeAnimatedGraphicsTemplatesResponse) => void): Promise<DescribeAnimatedGraphicsTemplatesResponse>;
    /**
     * * 对媒体禁播后，除了点播控制台预览，其他场景访问视频各种资源的 URL（原始文件、转码输出文件、截图等）均会返回 403。
  禁播/解禁操作全网生效时间约 5~10 分钟。
* 注意：禁播媒体仅能操作标准存储和低频存储的媒体。低频存储媒体，必须存储至少 30 天，提前删除或变更存储类型，仍旧按照 30 天计费；如果禁播低频存储媒体，该媒体低频存储的时长不足 30 天，会产生提前删除计费；同时，禁播后该媒体的低频存储时长会从当前时间重新开始计算，如果不满 30 天继续对该媒体进行删除或变更存储类型，也将产生提前删除计费。例：媒体 001 已经低频存储了 10 天，此时对 001 进行禁播，低频存储的计费仍旧按 30 天计算（提前删除计费时长为 30 - 10 = 20 天）；禁播后 001 的低频存储时长重新开始计算，如果禁播后第 5 天删除了 001，低频存储计费也会按 30 天计算（提前删除计费时长为 30 - 5 = 25 天）；001 实际的低频存储时长为 10 + 5 = 15 天，低频存储计费时长为 10 + 20(提前删除计费)+ 5 + 25(提前删除计费) = 60 天。
     */
    ForbidMediaDistribution(req: ForbidMediaDistributionRequest, cb?: (error: string, rep: ForbidMediaDistributionResponse) => void): Promise<ForbidMediaDistributionResponse>;
    /**
     * 对已发起的任务进行管理。
     */
    ManageTask(req: ManageTaskRequest, cb?: (error: string, rep: ManageTaskResponse) => void): Promise<ManageTaskResponse>;
    /**
     * 修改用户自定义音视频内容分析模板。

注意：模板 ID 10000 以下的为系统预置模板，不允许修改。
     */
    ModifyAIAnalysisTemplate(req: ModifyAIAnalysisTemplateRequest, cb?: (error: string, rep: ModifyAIAnalysisTemplateResponse) => void): Promise<ModifyAIAnalysisTemplateResponse>;
    /**
     * 修改用户自定义指定时间点截图模板。
     */
    ModifySnapshotByTimeOffsetTemplate(req: ModifySnapshotByTimeOffsetTemplateRequest, cb?: (error: string, rep: ModifySnapshotByTimeOffsetTemplateResponse) => void): Promise<ModifySnapshotByTimeOffsetTemplateResponse>;
    /**
     * 该 API 已经<font color='red'>不再维护</font>，新版播放器签名不再使用播放器配置模板，详细请参考 [播放器签名](https://cloud.tencent.com/document/product/266/45554)。
修改播放器配置。
     */
    ModifySuperPlayerConfig(req: ModifySuperPlayerConfigRequest, cb?: (error: string, rep: ModifySuperPlayerConfigResponse) => void): Promise<ModifySuperPlayerConfigResponse>;
    /**
     * * 用于对媒体进行分类管理；
* 该接口不影响既有媒体的分类，如需修改媒体分类，请调用[修改媒体文件属性](/document/product/266/31762)接口。
* 分类层次不可超过 4 层。
* 每个分类的子类数量不可超过 500 个。
     */
    CreateClass(req: CreateClassRequest, cb?: (error: string, rep: CreateClassResponse) => void): Promise<CreateClassResponse>;
    /**
     * 该接口用于批量创建关键词样本，样本用于通过OCR、ASR技术，进行不适宜内容识别、内容识别等视频处理。
     */
    CreateWordSamples(req: CreateWordSamplesRequest, cb?: (error: string, rep: CreateWordSamplesResponse) => void): Promise<CreateWordSamplesResponse>;
    /**
     * 腾讯云点播为客户提供了媒体上传、媒体管理、媒体处理等等服务，在这些服务执行过程或执行结束时，腾讯云点播也提供各种对应的事件通知，方便开发者感知服务处理状态，并做下一步的业务操作。

开发者可以通过本接口来查询当前配置事件通知的接收方式、接收地址以及哪些事件开启了接收回调通知。

默认接口请求频率限制：100次/秒。
     */
    DescribeEventConfig(req: DescribeEventConfigRequest, cb?: (error: string, rep: DescribeEventConfigResponse) => void): Promise<DescribeEventConfigResponse>;
    /**
     * 该接口用于修改应用信息，但不允许修改默认应用信息。
     */
    ModifySubAppIdInfo(req: ModifySubAppIdInfoRequest, cb?: (error: string, rep: ModifySubAppIdInfoResponse) => void): Promise<ModifySubAppIdInfoResponse>;
    /**
     * 该接口用于修改轮播播单。
修改后只有新的播放请求会生效，已经在播放中的用户在七天之内还可以播放修改前的播单。
     */
    ModifyRoundPlay(req: ModifyRoundPlayRequest, cb?: (error: string, rep: ModifyRoundPlayResponse) => void): Promise<ModifyRoundPlayResponse>;
    /**
     * 查询转自适应码流模板，支持根据条件，分页查询。
     */
    DescribeAdaptiveDynamicStreamingTemplates(req: DescribeAdaptiveDynamicStreamingTemplatesRequest, cb?: (error: string, rep: DescribeAdaptiveDynamicStreamingTemplatesResponse) => void): Promise<DescribeAdaptiveDynamicStreamingTemplatesResponse>;
    /**
     * 查询采样截图模板，支持根据条件，分页查询。
     */
    DescribeSampleSnapshotTemplates(req: DescribeSampleSnapshotTemplatesRequest, cb?: (error: string, rep: DescribeSampleSnapshotTemplatesResponse) => void): Promise<DescribeSampleSnapshotTemplatesResponse>;
    /**
     * 该接口用于修改关键词的应用场景、标签，关键词本身不可修改，如需修改，可删除重建。
     */
    ModifyWordSample(req: ModifyWordSampleRequest, cb?: (error: string, rep: ModifyWordSampleResponse) => void): Promise<ModifyWordSampleResponse>;
    /**
     * 该 API 已经<font color=red>不再维护</font>，新版 [音画质重生](https://cloud.tencent.com/document/product/266/102571) 接口使用预置模板，详情请参见 [音画质重生模板](https://cloud.tencent.com/document/product/266/102586#50604b3f-0286-4a10-a3f7-18218116aff7)。
修改音画质重生模板。
     */
    ModifyEnhanceMediaTemplate(req: ModifyEnhanceMediaTemplateRequest, cb?: (error: string, rep: ModifyEnhanceMediaTemplateResponse) => void): Promise<ModifyEnhanceMediaTemplateResponse>;
    /**
     * 查询雪碧图模板，支持根据条件，分页查询。
     */
    DescribeImageSpriteTemplates(req: DescribeImageSpriteTemplatesRequest, cb?: (error: string, rep: DescribeImageSpriteTemplatesResponse) => void): Promise<DescribeImageSpriteTemplatesResponse>;
    /**
     * * 获得用户的所有分类信息。
     */
    DescribeAllClass(req: DescribeAllClassRequest, cb?: (error: string, rep: DescribeAllClassResponse) => void): Promise<DescribeAllClassResponse>;
    /**
     * 查询用户自定义水印模板，支持根据条件，分页查询。
     */
    DescribeWatermarkTemplates(req: DescribeWatermarkTemplatesRequest, cb?: (error: string, rep: DescribeWatermarkTemplatesResponse) => void): Promise<DescribeWatermarkTemplatesResponse>;
    /**
     * 创建用户自定义水印模板，数量上限：1000。
     */
    CreateWatermarkTemplate(req: CreateWatermarkTemplateRequest, cb?: (error: string, rep: CreateWatermarkTemplateResponse) => void): Promise<CreateWatermarkTemplateResponse>;
    /**
     * 设置 DRM 密钥提供商信息。
     */
    SetDrmKeyProviderInfo(req: SetDrmKeyProviderInfoRequest, cb?: (error: string, rep: SetDrmKeyProviderInfoResponse) => void): Promise<SetDrmKeyProviderInfoResponse>;
    /**
     * 获取即时转码模板列表。
     */
    DescribeJustInTimeTranscodeTemplates(req: DescribeJustInTimeTranscodeTemplatesRequest, cb?: (error: string, rep: DescribeJustInTimeTranscodeTemplatesResponse) => void): Promise<DescribeJustInTimeTranscodeTemplatesResponse>;
    /**
     * 创建用户自定义审核模板，数量上限：50。
>模板仅适用于 [音视频审核(ReviewAudioVideo)](https://cloud.tencent.com/document/api/266/80283) 和 [图片审核(ReviewImage)](https://cloud.tencent.com/document/api/266/73217) 接口。
     */
    CreateReviewTemplate(req: CreateReviewTemplateRequest, cb?: (error: string, rep: CreateReviewTemplateResponse) => void): Promise<CreateReviewTemplateResponse>;
    /**
     * 根据音视频内容识别模板唯一标识，获取音视频内容识别模板详情列表。返回结果包含符合条件的所有用户自定义音视频内容识别模板及[系统预置音视频内容识别模板](https://cloud.tencent.com/document/product/266/33476#.E9.A2.84.E7.BD.AE.E8.A7.86.E9.A2.91.E5.86.85.E5.AE.B9.E8.AF.86.E5.88.AB.E6.A8.A1.E6.9D.BF)。
     */
    DescribeAIRecognitionTemplates(req: DescribeAIRecognitionTemplatesRequest, cb?: (error: string, rep: DescribeAIRecognitionTemplatesResponse) => void): Promise<DescribeAIRecognitionTemplatesResponse>;
    /**
     * 删除音画质检测模板。
     */
    DeleteQualityInspectTemplate(req: DeleteQualityInspectTemplateRequest, cb?: (error: string, rep: DeleteQualityInspectTemplateResponse) => void): Promise<DeleteQualityInspectTemplateResponse>;
    /**
     * 获取音画质检测模板列表。
     */
    DescribeQualityInspectTemplates(req: DescribeQualityInspectTemplatesRequest, cb?: (error: string, rep: DescribeQualityInspectTemplatesResponse) => void): Promise<DescribeQualityInspectTemplatesResponse>;
    /**
     * 创建即时转码模板。
     */
    CreateJustInTimeTranscodeTemplate(req: CreateJustInTimeTranscodeTemplateRequest, cb?: (error: string, rep: CreateJustInTimeTranscodeTemplateResponse) => void): Promise<CreateJustInTimeTranscodeTemplateResponse>;
    /**
     * 该 API 已经<font color='red'>不再维护</font>，新版播放器签名不再使用播放器配置模板，详细请参考 [播放器签名](https://cloud.tencent.com/document/product/266/45554)。
查询播放器配置，支持根据条件，分页查询。
     */
    DescribeSuperPlayerConfigs(req: DescribeSuperPlayerConfigsRequest, cb?: (error: string, rep: DescribeSuperPlayerConfigsResponse) => void): Promise<DescribeSuperPlayerConfigsResponse>;
    /**
     * 该接口用于获取当前账号的应用列表。
     */
    DescribeSubAppIds(req: DescribeSubAppIdsRequest, cb?: (error: string, rep: DescribeSubAppIdsResponse) => void): Promise<DescribeSubAppIdsResponse>;
    /**
     * 获取片头片尾模板列表。
     */
    DescribeHeadTailTemplates(req: DescribeHeadTailTemplatesRequest, cb?: (error: string, rep: DescribeHeadTailTemplatesResponse) => void): Promise<DescribeHeadTailTemplatesResponse>;
    /**
     * 该接口用于查询默认分发配置。
* 分发域名和分发协议，即媒体文件分发 URL 中的域名和协议。媒体文件按默认分发配置进行分发。
* 播放密钥，用于计算播放器签名。
     */
    DescribeDefaultDistributionConfig(req: DescribeDefaultDistributionConfigRequest, cb?: (error: string, rep: DescribeDefaultDistributionConfigResponse) => void): Promise<DescribeDefaultDistributionConfigResponse>;
    /**
     * 获取审核模板列表。
>模板仅适用于 [音视频审核(ReviewAudioVideo)](https://cloud.tencent.com/document/api/266/80283) 和 [图片审核(ReviewImage)](https://cloud.tencent.com/document/api/266/73217) 接口。
     */
    DescribeReviewTemplates(req: DescribeReviewTemplatesRequest, cb?: (error: string, rep: DescribeReviewTemplatesResponse) => void): Promise<DescribeReviewTemplatesResponse>;
    /**
     * 该接口用于确认媒体文件（和封面文件）上传到腾讯云点播的结果，并存储媒体信息，返回文件的播放地址和文件 ID。
     */
    CommitUpload(req: CommitUploadRequest, cb?: (error: string, rep: CommitUploadResponse) => void): Promise<CommitUploadResponse>;
    /**
     * 修改用户自定义音视频内容识别模板。
     */
    ModifyAIRecognitionTemplate(req: ModifyAIRecognitionTemplateRequest, cb?: (error: string, rep: ModifyAIRecognitionTemplateResponse) => void): Promise<ModifyAIRecognitionTemplateResponse>;
    /**
     * 修改转自适应码流模板
     */
    ModifyAdaptiveDynamicStreamingTemplate(req: ModifyAdaptiveDynamicStreamingTemplateRequest, cb?: (error: string, rep: ModifyAdaptiveDynamicStreamingTemplateResponse) => void): Promise<ModifyAdaptiveDynamicStreamingTemplateResponse>;
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
    SearchMedia(req: SearchMediaRequest, cb?: (error: string, rep: SearchMediaResponse) => void): Promise<SearchMediaResponse>;
    /**
     * 删除用户自定义水印模板。
     */
    DeleteWatermarkTemplate(req: DeleteWatermarkTemplateRequest, cb?: (error: string, rep: DeleteWatermarkTemplateResponse) => void): Promise<DeleteWatermarkTemplateResponse>;
    /**
     * 删除即时转码模板。
     */
    DeleteJustInTimeTranscodeTemplate(req: DeleteJustInTimeTranscodeTemplateRequest, cb?: (error: string, rep: DeleteJustInTimeTranscodeTemplateResponse) => void): Promise<DeleteJustInTimeTranscodeTemplateResponse>;
    /**
     * 该接口用于根据人物 ID，删除素材样本。
     */
    DeletePersonSample(req: DeletePersonSampleRequest, cb?: (error: string, rep: DeletePersonSampleResponse) => void): Promise<DeletePersonSampleResponse>;
    /**
     * 该 API 已经<font color=red>不再维护</font>，新版 [音画质重生](https://cloud.tencent.com/document/product/266/102571) 接口使用预置模板，详情请参见 [音画质重生模板](https://cloud.tencent.com/document/product/266/102586#50604b3f-0286-4a10-a3f7-18218116aff7)。
获取音画质重生模板列表。
     */
    DescribeEnhanceMediaTemplates(req: DescribeEnhanceMediaTemplatesRequest, cb?: (error: string, rep: DescribeEnhanceMediaTemplatesResponse) => void): Promise<DescribeEnhanceMediaTemplatesResponse>;
    /**
     * 创建用户自定义转动图模板，数量上限：16。
     */
    CreateAnimatedGraphicsTemplate(req: CreateAnimatedGraphicsTemplateRequest, cb?: (error: string, rep: CreateAnimatedGraphicsTemplateResponse) => void): Promise<CreateAnimatedGraphicsTemplateResponse>;
    /**
     * 修改用户自定义转动图模板。
     */
    ModifyAnimatedGraphicsTemplate(req: ModifyAnimatedGraphicsTemplateRequest, cb?: (error: string, rep: ModifyAnimatedGraphicsTemplateResponse) => void): Promise<ModifyAnimatedGraphicsTemplateResponse>;
    /**
     * 关联媒资字幕，将指定的字幕关联到转自适应码流模板号对应的媒体输出文件中（或解除关联）。
     */
    AttachMediaSubtitles(req: AttachMediaSubtitlesRequest, cb?: (error: string, rep: AttachMediaSubtitlesResponse) => void): Promise<AttachMediaSubtitlesResponse>;
    /**
     * 腾讯云点播为客户提供了媒体上传、媒体管理、媒体处理等等服务，在这些服务执行过程或执行结束时，腾讯云点播也提供各种对应的事件通知，方便开发者感知服务处理状态，并做下一步的业务操作。

开发者可以通过调用本接口来实现：
- 设置接收回调通知的类型，目前有[ HTTP 回调通知](https://cloud.tencent.com/document/product/266/33779) 和 [基于消息队列的可靠通知](https://cloud.tencent.com/document/product/266/33779) 两种类型。
- 对于[ HTTP 回调通知](https://cloud.tencent.com/document/product/266/33779)，可设置 3.0 格式回调的地址。3.0 格式回调的说明参见 [历史格式回调](https://cloud.tencent.com/document/product/266/33796)。
- 对具体事件服务的通知事件选择设置接收或者忽略。
     */
    ModifyEventConfig(req: ModifyEventConfigRequest, cb?: (error: string, rep: ModifyEventConfigResponse) => void): Promise<ModifyEventConfigResponse>;
    /**
     * 修改媒体文件的属性，包括分类、名称、描述、标签、过期时间、打点信息、视频封面、字幕信息等。
     */
    ModifyMediaInfo(req: ModifyMediaInfoRequest, cb?: (error: string, rep: ModifyMediaInfoResponse) => void): Promise<ModifyMediaInfoResponse>;
    /**
     * 对点播中的图片文件发起审核（令人反感的信息、不安全的信息、不适宜的信息）任务。

><li>图片文件大小支持：文件 < 5M；</li>
><li>图片文件分辨率支持：建议分辨率大于256x256，否则可能会影响审核效果；</li>
><li>图片文件支持格式：PNG、JPG、JPEG、BMP、GIF、WEBP格式。</li>
     */
    ReviewImage(req: ReviewImageRequest, cb?: (error: string, rep: ReviewImageResponse) => void): Promise<ReviewImageResponse>;
    /**
     * 删除用户自定义采样截图模板。
     */
    DeleteSampleSnapshotTemplate(req: DeleteSampleSnapshotTemplateRequest, cb?: (error: string, rep: DeleteSampleSnapshotTemplateResponse) => void): Promise<DeleteSampleSnapshotTemplateResponse>;
    /**
     * 将点播视频发布到微信小程序，供微信小程序播放器播放。
本接口支持发布原始视频和转码后视频，暂不支持发布自适应码流。
     */
    WeChatMiniProgramPublish(req: WeChatMiniProgramPublishRequest, cb?: (error: string, rep: WeChatMiniProgramPublishResponse) => void): Promise<WeChatMiniProgramPublishResponse>;
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
    SimpleHlsClip(req: SimpleHlsClipRequest, cb?: (error: string, rep: SimpleHlsClipResponse) => void): Promise<SimpleHlsClipResponse>;
    /**
     * 设置点播域名 HTTPS 证书。
     */
    SetVodDomainCertificate(req: SetVodDomainCertificateRequest, cb?: (error: string, rep: SetVodDomainCertificateResponse) => void): Promise<SetVodDomainCertificateResponse>;
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
    DescribeMediaInfos(req: DescribeMediaInfosRequest, cb?: (error: string, rep: DescribeMediaInfosResponse) => void): Promise<DescribeMediaInfosResponse>;
    /**
     * 该 API 已经<font color=red>不再维护</font>，请使用新版接口 [音画质重生](https://cloud.tencent.com/document/api/266/102571)。
使用模板发起视频重生。
     */
    RebuildMediaByTemplate(req: RebuildMediaByTemplateRequest, cb?: (error: string, rep: RebuildMediaByTemplateResponse) => void): Promise<RebuildMediaByTemplateResponse>;
    /**
     * 删除片头片尾模板。
     */
    DeleteHeadTailTemplate(req: DeleteHeadTailTemplateRequest, cb?: (error: string, rep: DeleteHeadTailTemplateResponse) => void): Promise<DeleteHeadTailTemplateResponse>;
    /**
     * 该接口用于创建素材样本，用于通过五官定位等技术，进行内容识别、不适宜视频识别等视频处理。
     */
    CreatePersonSample(req: CreatePersonSampleRequest, cb?: (error: string, rep: CreatePersonSampleResponse) => void): Promise<CreatePersonSampleResponse>;
    /**
     * 该接口用于启用、停用应用。被停用的应用将封停对应域名，并限制控制台访问。
     */
    ModifySubAppIdStatus(req: ModifySubAppIdStatusRequest, cb?: (error: string, rep: ModifySubAppIdStatusResponse) => void): Promise<ModifySubAppIdStatusResponse>;
    /**
     * 该接口用于删除轮播播单。
     */
    DeleteRoundPlay(req: DeleteRoundPlayRequest, cb?: (error: string, rep: DeleteRoundPlayResponse) => void): Promise<DeleteRoundPlayResponse>;
    /**
     * 修改媒体分类属性。
     */
    ModifyClass(req: ModifyClassRequest, cb?: (error: string, rep: ModifyClassResponse) => void): Promise<ModifyClassResponse>;
    /**
     * 该 API 已经<font color=red>不再维护</font>，新版审核模板支持音视频审核和图片审核，详细请参考 [修改审核模板](https://cloud.tencent.com/document/api/266/84388)。
修改用户自定义音视频内容审核模板。
     */
    ModifyContentReviewTemplate(req: ModifyContentReviewTemplateRequest, cb?: (error: string, rep: ModifyContentReviewTemplateResponse) => void): Promise<ModifyContentReviewTemplateResponse>;
    /**
     * 该接口用于删除点播加速域名。
1、域名删除前需要先关闭所有区域的加速。
     */
    DeleteVodDomain(req: DeleteVodDomainRequest, cb?: (error: string, rep: DeleteVodDomainResponse) => void): Promise<DeleteVodDomainResponse>;
    /**
     * 创建用户自定义音视频内容识别模板，数量上限：50。
     */
    CreateAIRecognitionTemplate(req: CreateAIRecognitionTemplateRequest, cb?: (error: string, rep: CreateAIRecognitionTemplateResponse) => void): Promise<CreateAIRecognitionTemplateResponse>;
    /**
     * 该 API 已经<font color=red>不再维护</font>，新版 [音画质重生](https://cloud.tencent.com/document/product/266/102571) 接口使用预置模板，详情请参见 [音画质重生模板](https://cloud.tencent.com/document/product/266/102586#50604b3f-0286-4a10-a3f7-18218116aff7)。
删除音画质重生模板。
     */
    DeleteEnhanceMediaTemplate(req: DeleteEnhanceMediaTemplateRequest, cb?: (error: string, rep: DeleteEnhanceMediaTemplateResponse) => void): Promise<DeleteEnhanceMediaTemplateResponse>;
    /**
     * 该 API 已经<font color=red>不再维护</font>，新版 [音画质重生](https://cloud.tencent.com/document/product/266/102571) 接口使用预置模板，详情请参见 [音画质重生模板](https://cloud.tencent.com/document/product/266/102586#50604b3f-0286-4a10-a3f7-18218116aff7)。
获取视频重生模板列表。
     */
    DescribeRebuildMediaTemplates(req: DescribeRebuildMediaTemplatesRequest, cb?: (error: string, rep: DescribeRebuildMediaTemplatesResponse) => void): Promise<DescribeRebuildMediaTemplatesResponse>;
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
    DescribeDailyPlayStatFileList(req: DescribeDailyPlayStatFileListRequest, cb?: (error: string, rep: DescribeDailyPlayStatFileListResponse) => void): Promise<DescribeDailyPlayStatFileListResponse>;
    /**
     * 删除雪碧图模板。
     */
    DeleteImageSpriteTemplate(req: DeleteImageSpriteTemplateRequest, cb?: (error: string, rep: DeleteImageSpriteTemplateResponse) => void): Promise<DeleteImageSpriteTemplateResponse>;
    /**
     * 当媒体文件的存储类型是归档存储或深度归档存储时，是不可访问的。如需访问，则需要调用本接口进行解冻，解冻后可访问的媒体文件是临时的，在有效期过后，则不可访问。
     */
    RestoreMedia(req: RestoreMediaRequest, cb?: (error: string, rep: RestoreMediaResponse) => void): Promise<RestoreMediaResponse>;
}
