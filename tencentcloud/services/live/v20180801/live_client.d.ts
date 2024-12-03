import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { DescribeCasterDisplayInfoResponse, DescribeLiveXP2PDetailInfoListResponse, DescribeLiveWatermarkRulesResponse, ModifyPullStreamStatusRequest, DeleteLiveRecordTemplateRequest, ModifyLiveTimeShiftTemplateResponse, DescribeLiveTranscodeTemplatesRequest, DescribeBackupStreamListResponse, DescribeLiveSnapshotTemplateRequest, DescribePlayErrorCodeDetailInfoListRequest, DescribeCasterOutputInfosResponse, DescribeLiveStreamPublishedListRequest, DescribeGroupProIspPlayInfoListResponse, DescribeDeliverBandwidthListResponse, DescribeLiveTranscodeDetailInfoRequest, DescribeLiveSnapshotTemplatesRequest, CreateLiveWatermarkRuleResponse, CreateCasterPvwResponse, DescribeCasterMarkPicInfosRequest, AddLiveWatermarkRequest, DescribeLiveDomainCertRequest, DescribeLiveEnhanceInfoListRequest, StopRecordTaskRequest, ModifyLiveDomainCertBindingsRequest, StopCasterPgmResponse, CreateCasterPgmRequest, DescribeCasterPlayUrlResponse, CancelCommonMixStreamResponse, DescribeLiveCertsResponse, ResumeDelayLiveStreamRequest, DescribeCallbackRecordsListRequest, DescribeTopClientIpSumInfoListResponse, DescribeLiveStreamStateResponse, DeleteLiveWatermarkRuleRequest, DescribeLiveWatermarksRequest, DescribeLiveWatermarkRulesRequest, EnableOptimalSwitchingRequest, DescribeCasterInputInfosResponse, AddCasterMarkWordInfoResponse, ModifyLiveTranscodeTemplateResponse, DescribeStreamDayPlayInfoListRequest, DeleteLiveTimeShiftRuleResponse, DescribeLivePadRulesResponse, CreatePullStreamConfigRequest, DescribeLiveCertsRequest, DescribeLiveCertResponse, DescribeVisitTopSumInfoListRequest, DescribePushBandwidthAndFluxListResponse, DescribeLiveStreamOnlineListResponse, DescribeCasterMarkWordInfosResponse, DescribeStreamPushInfoListResponse, DescribeLiveDomainPlayInfoListRequest, DeleteLiveWatermarkRuleResponse, DeleteCasterMarkWordInfoResponse, DescribeLogDownloadListResponse, ReleaseCasterRequest, DeleteLivePadTemplateResponse, DeleteLiveSnapshotRuleResponse, DeleteLiveTranscodeTemplateRequest, StopLivePadProcessorRequest, StopRecordTaskResponse, DescribeTranscodeTaskNumResponse, DescribeLivePullStreamTaskStatusResponse, DescribeLivePadProcessorListResponse, DeleteLivePadRuleResponse, DescribeLiveRecordTemplateRequest, CreateLiveTranscodeTemplateRequest, DescribeLiveTimeShiftTemplatesResponse, ModifyCasterOutputInfoRequest, ModifyLiveStreamMonitorResponse, CreateRecordTaskRequest, DescribeLivePadTemplateResponse, ResumeLiveStreamRequest, DescribeBillBandwidthAndFluxListResponse, DescribeLiveDomainPlayInfoListResponse, DescribeLiveStreamMonitorListRequest, DescribeLivePullStreamTasksRequest, DeleteLiveStreamMonitorResponse, DeleteLiveCallbackTemplateRequest, ModifyCasterInputInfoRequest, DescribeCasterOutputInfosRequest, CreateLiveCallbackTemplateResponse, DescribeLiveCallbackTemplateRequest, CreateLiveStreamMonitorRequest, DescribeScreenShotSheetNumListRequest, DescribeLiveTranscodeTemplateRequest, CreateLiveWatermarkRuleRequest, DeleteRecordTaskRequest, DescribeStreamDayPlayInfoListResponse, DeleteLivePadRuleRequest, CreateLiveSnapshotRuleResponse, DescribeLiveStreamEventListResponse, DescribeLiveTranscodeTotalInfoRequest, DescribeLivePushAuthKeyRequest, DescribeCasterTransitionTypesResponse, CreateCasterRequest, AddCasterOutputInfoRequest, DescribeUploadStreamNumsResponse, DescribeLiveTranscodeDetailInfoResponse, DeleteLiveTranscodeTemplateResponse, CreateScreenshotTaskResponse, DeleteLiveCallbackRuleResponse, DescribeStreamPlayInfoListRequest, DescribeCasterDisplayInfoRequest, CreateCasterInputPushUrlResponse, DescribeLivePlayAuthKeyRequest, CreateLiveTimeShiftRuleResponse, DeleteLiveTranscodeRuleResponse, CreateCasterInputPushUrlRequest, DescribeCasterMarkWordInfosRequest, DescribeLiveTranscodeRulesRequest, DeleteLivePullStreamTaskRequest, DescribeCasterMarkPicInfosResponse, CopyCasterResponse, RestartLivePullStreamTaskResponse, StopLiveRecordResponse, DeleteCasterResponse, DeleteScreenshotTaskRequest, ModifyCasterLayoutInfoResponse, DescribePlayErrorCodeSumInfoListRequest, AddDelayLiveStreamRequest, DescribeLiveStreamEventListRequest, StopCasterPvwRequest, DeleteLiveRecordResponse, DescribeDeliverLogDownListResponse, DescribeBackupStreamListRequest, DescribeDeliverLogDownListRequest, DescribeLiveTimeShiftTemplatesRequest, StopLiveStreamMonitorResponse, ModifyLivePlayDomainResponse, CreateLiveRecordRuleResponse, DescribeLiveDomainCertBindingsResponse, CreateLivePadTemplateResponse, DescribeLiveRecordTemplatesResponse, DescribeScreenshotTaskRequest, DeletePullStreamConfigResponse, ModifyLivePlayDomainRequest, DeleteCasterLayoutInfoResponse, DescribeGroupProIspPlayInfoListRequest, CreateCasterPgmResponse, ReleaseCasterResponse, DescribeLiveTranscodeRulesResponse, CreateCasterPvwRequest, AddCasterLayoutInfoResponse, DeleteLivePullStreamTaskResponse, DescribeStreamPushInfoListRequest, ResumeLiveStreamResponse, DeletePullStreamConfigRequest, ModifyCasterResponse, DescribeLiveWatermarksResponse, CreatePullStreamConfigResponse, ModifyLivePadTemplateResponse, DescribeTopClientIpSumInfoListRequest, DescribeCallbackRecordsListResponse, DeleteLiveWatermarkRequest, UpdateLiveWatermarkRequest, DescribePlayErrorCodeDetailInfoListResponse, DescribeLiveStreamPushInfoListResponse, CancelCommonMixStreamRequest, SwitchBackupStreamRequest, DeleteLiveStreamMonitorRequest, DescribeLiveDelayInfoListResponse, CreateLiveSnapshotTemplateResponse, ModifyCasterMarkPicInfoRequest, DescribeProIspPlaySumInfoListRequest, UnBindLiveDomainCertResponse, CreateLiveRecordRequest, DeleteLiveRecordRequest, StopLiveRecordRequest, DeleteLiveCallbackTemplateResponse, CreateLivePadTemplateRequest, CopyCasterRequest, DescribeLivePullStreamTasksResponse, CreateLiveCallbackRuleResponse, DescribeAreaBillBandwidthAndFluxListRequest, ModifyCasterOutputInfoResponse, ModifyLiveDomainRefererResponse, DescribeMonitorReportResponse, DescribeLiveStreamOnlineListRequest, DescribeRecordTaskRequest, DescribeCasterLayoutInfosResponse, ModifyLiveCallbackTemplateResponse, DescribeLiveCallbackTemplatesResponse, DescribeLivePushAuthKeyResponse, DescribeLivePullStreamTaskStatusRequest, RestartLivePullStreamTaskRequest, DescribeCasterTransitionTypesRequest, ModifyCasterMarkWordInfoResponse, EnableOptimalSwitchingResponse, DescribeLiveStreamMonitorRequest, DescribeLiveSnapshotRulesRequest, DeleteLiveRecordRuleResponse, DeleteLiveRecordRuleRequest, StopScreenshotTaskRequest, DescribePullTransformPushInfoRequest, DescribeBillBandwidthAndFluxListRequest, AddCasterLayoutInfoRequest, ModifyLiveTranscodeTemplateRequest, ModifyCasterLayoutInfoRequest, DescribeLiveCallbackTemplateResponse, CreateLivePullStreamTaskRequest, DeleteLiveSnapshotTemplateRequest, CreateScreenshotTaskRequest, DescribeCasterResponse, DescribeStreamPlayInfoListResponse, CreateLivePullStreamTaskResponse, ModifyLivePushAuthKeyRequest, DescribeProIspPlaySumInfoListResponse, DescribeLivePlayAuthKeyResponse, DescribeLiveCallbackTemplatesRequest, CreateLivePadRuleRequest, DeleteLiveSnapshotRuleRequest, CreateLiveTimeShiftRuleRequest, StopCasterPvwResponse, DescribeLiveDomainRequest, DescribePushBandwidthAndFluxListRequest, CreateLiveRecordRuleRequest, ModifyLiveStreamMonitorRequest, ModifyLiveSnapshotTemplateResponse, DeleteLivePadTemplateRequest, DescribeTimeShiftStreamListRequest, DescribeLiveWatermarkRequest, DescribeLiveDomainsResponse, ModifyLiveTimeShiftTemplateRequest, ModifyLiveDomainCertBindingsResponse, DescribeLiveRecordRulesRequest, DescribeCasterUserStatusRequest, DescribeLiveStreamMonitorResponse, ModifyPullStreamStatusResponse, DeleteLiveTimeShiftRuleRequest, CreateLiveCallbackTemplateRequest, DeleteRecordTaskResponse, CreateLiveTranscodeRuleRequest, DropLiveStreamRequest, CreateCommonMixStreamRequest, DeleteCasterMarkPicInfoRequest, CreateCasterResponse, DescribeLiveSnapshotTemplateResponse, CreateLiveTimeShiftTemplateRequest, DescribeLiveDomainRefererResponse, DescribeLivePadTemplateRequest, DescribeHttpStatusInfoListRequest, StartLiveStreamMonitorRequest, DescribeCasterRequest, AuthenticateDomainOwnerRequest, DeleteLiveDomainRequest, DeleteLiveTimeShiftTemplateResponse, ModifyLivePushAuthKeyResponse, DescribeScreenshotTaskResponse, ModifyPullStreamConfigRequest, DescribeProvinceIspPlayInfoListResponse, DescribeLivePackageInfoResponse, CreateLiveCallbackRuleRequest, DescribeLiveDomainsRequest, DescribeLiveTimeShiftBillInfoListResponse, DescribeLiveCallbackRulesRequest, DescribeLivePadProcessorListRequest, DescribeConcurrentRecordStreamNumRequest, DeleteCasterInputInfoRequest, DeleteScreenshotTaskResponse, DescribePullTransformPushInfoResponse, DescribeLiveStreamStateRequest, CreateLiveRecordTemplateResponse, StopLivePadProcessorResponse, AddCasterMarkWordInfoRequest, ModifyLivePlayAuthKeyResponse, DescribeLiveTimeShiftRulesResponse, DescribeLiveTranscodeTemplatesResponse, DeleteLiveCallbackRuleRequest, DescribeAllStreamPlayInfoListResponse, DescribeCasterInputInfosRequest, DescribeLivePadTemplatesResponse, DescribeVisitTopSumInfoListResponse, DescribeLiveRecordRulesResponse, StopLiveStreamMonitorRequest, DeleteLiveSnapshotTemplateResponse, CreateCommonMixStreamResponse, ModifyLiveDomainRefererRequest, CreateCasterPgmFromPvwResponse, DescribeLiveTimeShiftWriteSizeInfoListRequest, DescribeCasterUserStatusResponse, ModifyLivePullStreamTaskRequest, DescribeLogDownloadListRequest, DeleteLiveWatermarkResponse, DropLiveStreamResponse, DescribeLiveRecordTemplatesRequest, DescribeTimeShiftRecordDetailRequest, CreateLiveTimeShiftTemplateResponse, DeleteCasterOutputInfoResponse, DescribeLivePadRulesRequest, DescribePullStreamConfigsResponse, DescribeTranscodeTaskNumRequest, DescribeLiveCallbackRulesResponse, CreateRecordTaskResponse, ResumeDelayLiveStreamResponse, DescribeLiveDomainCertBindingsRequest, CreateLiveRecordTemplateRequest, AddCasterOutputInfoResponse, DescribeHttpStatusInfoListResponse, DescribeUploadStreamNumsRequest, CreateLiveSnapshotRuleRequest, EnableLiveDomainResponse, DeleteCasterMarkPicInfoResponse, StopCasterPgmRequest, CreateLiveStreamMonitorResponse, DescribeCasterLayoutInfosRequest, AddCasterMarkPicInfoResponse, AddCasterInputInfoRequest, ModifyLivePlayAuthKeyRequest, DescribeLiveDelayInfoListRequest, DescribeLiveTranscodeTemplateResponse, DescribeScreenShotSheetNumListResponse, ModifyLivePullStreamTaskResponse, DescribeLiveSnapshotRulesResponse, DeleteCasterRequest, DescribeLiveDomainCertResponse, AuthenticateDomainOwnerResponse, DeleteLiveTranscodeRuleRequest, AddLiveWatermarkResponse, AddCasterInputInfoResponse, ForbidLiveStreamRequest, ModifyCasterMarkWordInfoRequest, DescribeConcurrentRecordStreamNumResponse, DeleteLiveRecordTemplateResponse, DescribePullStreamConfigsRequest, DescribePlayErrorCodeSumInfoListResponse, DescribeCasterListRequest, UnBindLiveDomainCertRequest, CreateLiveRecordResponse, UpdateLiveWatermarkResponse, ModifyLiveSnapshotTemplateRequest, DescribeLiveRecordTemplateResponse, DescribeLiveTimeShiftRulesRequest, ForbidLiveDomainResponse, DescribeLiveTimeShiftBillInfoListRequest, ModifyCasterRequest, DescribeLiveCertRequest, DeleteCasterLayoutInfoRequest, ModifyCasterMarkPicInfoResponse, DescribeDeliverBandwidthListRequest, DeleteCasterMarkWordInfoRequest, ModifyLiveRecordTemplateResponse, AddLiveDomainRequest, DescribeLivePackageInfoRequest, DescribeLiveStreamMonitorListResponse, DeleteLiveTimeShiftTemplateRequest, SwitchBackupStreamResponse, AddLiveDomainResponse, ModifyPullStreamConfigResponse, DescribeProvinceIspPlayInfoListRequest, StartLiveStreamMonitorResponse, DescribeLiveForbidStreamListResponse, CreateLivePadRuleResponse, DescribeLiveWatermarkResponse, DescribeTimeShiftStreamListResponse, DescribeLiveStreamPushInfoListRequest, ModifyCasterInputInfoResponse, DescribeLiveForbidStreamListRequest, DeleteCasterInputInfoResponse, ForbidLiveStreamResponse, DescribeLiveSnapshotTemplatesResponse, DescribeRecordTaskResponse, DescribeCasterPlayUrlRequest, DescribeAreaBillBandwidthAndFluxListResponse, ForbidLiveDomainRequest, DescribeLiveTimeShiftWriteSizeInfoListResponse, DescribeCasterListResponse, ModifyLiveRecordTemplateRequest, DescribeLiveDomainRefererRequest, DescribeLiveStreamPublishedListResponse, AddDelayLiveStreamResponse, StopScreenshotTaskResponse, DescribeLivePadTemplatesRequest, EnableLiveDomainRequest, DescribeLiveTranscodeTotalInfoResponse, DescribeLiveEnhanceInfoListResponse, CreateLiveTranscodeRuleResponse, CreateLiveTranscodeTemplateResponse, ModifyLivePadTemplateRequest, CreateLiveSnapshotTemplateRequest, ModifyLiveCallbackTemplateRequest, DescribeMonitorReportRequest, DescribeAllStreamPlayInfoListRequest, DescribeLiveDomainResponse, DescribeLiveXP2PDetailInfoListRequest, CreateCasterPgmFromPvwRequest, DeleteCasterOutputInfoRequest, DescribeTimeShiftRecordDetailResponse, DeleteLiveDomainResponse, AddCasterMarkPicInfoRequest } from "./live_models";
/**
 * live client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 该接口用来查询账号下所有的导播台列表
     */
    DescribeCasterList(req?: DescribeCasterListRequest, cb?: (error: string, rep: DescribeCasterListResponse) => void): Promise<DescribeCasterListResponse>;
    /**
     * 断开推流连接，但可以重新推流。
注：对已经不活跃的流，调用该断流接口时，接口返回成功。
     */
    DropLiveStream(req: DropLiveStreamRequest, cb?: (error: string, rep: DropLiveStreamResponse) => void): Promise<DropLiveStreamResponse>;
    /**
     * 查询水印列表。
     */
    DescribeLiveWatermarks(req: DescribeLiveWatermarksRequest, cb?: (error: string, rep: DescribeLiveWatermarksResponse) => void): Promise<DescribeLiveWatermarksResponse>;
    /**
     * 查询并发录制路数，对慢直播和普通直播适用。
     */
    DescribeConcurrentRecordStreamNum(req: DescribeConcurrentRecordStreamNumRequest, cb?: (error: string, rep: DescribeConcurrentRecordStreamNumResponse) => void): Promise<DescribeConcurrentRecordStreamNumResponse>;
    /**
     * - 使用前提
  1. 录制文件存放于点播平台，所以用户如需使用录制功能，需首先自行开通点播服务。
  2. 录制文件存放后相关费用（含存储以及下行播放流量）按照点播平台计费方式收取，具体请参考 [对应文档](https://cloud.tencent.com/document/product/266/2838)。

- 模式说明
  该接口支持两种录制模式：
  1. 定时录制模式【默认模式】。
    需要传入开始时间与结束时间，录制任务根据起止时间自动开始与结束。在所设置结束时间过期之前（且未调用StopLiveRecord提前终止任务），录制任务都是有效的，期间多次断流然后重推都会启动录制任务。
  2. 实时视频录制模式。
    忽略传入的开始时间，在录制任务创建后立即开始录制，录制时长支持最大为30分钟，如果传入的结束时间与当前时间差大于30分钟，则按30分钟计算，实时视频录制主要用于录制精彩视频场景，时长建议控制在5分钟以内。

- 注意事项
  1. 调用接口超时设置应大于3秒，小于3秒重试以及按不同起止时间调用都有可能产生重复录制任务，进而导致额外录制费用。
  2. 受限于音视频文件格式（FLV/MP4/HLS）对编码类型的支持，视频编码类型支持 H.264，音频编码类型支持 AAC。
  3. 为避免恶意或非主观的频繁 API 请求，对定时录制模式最大创建任务数做了限制：其中，当天可以创建的最大任务数不超过4000（不含已删除的任务）；当前时刻并发运行的任务数不超过400。有超出此限制的需要提工单申请。
  4. 此调用方式暂时不支持海外推流录制。
     */
    CreateLiveRecord(req: CreateLiveRecordRequest, cb?: (error: string, rep: CreateLiveRecordResponse) => void): Promise<CreateLiveRecordResponse>;
    /**
     * 更新水印。
     */
    UpdateLiveWatermark(req: UpdateLiveWatermarkRequest, cb?: (error: string, rep: UpdateLiveWatermarkResponse) => void): Promise<UpdateLiveWatermarkResponse>;
    /**
     * 修改录制模板配置。
     */
    ModifyLiveRecordTemplate(req: ModifyLiveRecordTemplateRequest, cb?: (error: string, rep: ModifyLiveRecordTemplateResponse) => void): Promise<ModifyLiveRecordTemplateResponse>;
    /**
     * 查询指定时间段范围内启动和结束的录制任务列表。
- 使用前提
1. 仅用于查询由 CreateRecordTask 接口创建的录制任务。
2. 不能查询被 DeleteRecordTask 接口删除以及已过期（平台侧保留3个月）的录制任务。

     */
    DescribeRecordTask(req: DescribeRecordTaskRequest, cb?: (error: string, rep: DescribeRecordTaskResponse) => void): Promise<DescribeRecordTaskResponse>;
    /**
     * 该接口用来停止导播台的预监任务。
     */
    StopCasterPvw(req: StopCasterPvwRequest, cb?: (error: string, rep: StopCasterPvwResponse) => void): Promise<StopCasterPvwResponse>;
    /**
     * 创建水印规则，需要先调用[AddLiveWatermark](/document/product/267/30154)接口添加水印，将返回的水印id绑定到流使用。
     */
    CreateLiveWatermarkRule(req: CreateLiveWatermarkRuleRequest, cb?: (error: string, rep: CreateLiveWatermarkRuleResponse) => void): Promise<CreateLiveWatermarkRuleResponse>;
    /**
     * 用于查询推断流事件。<br>

注意：
1. 该接口提供离线推断流记录查询功能，不可作为重要业务场景强依赖接口。
2. 该接口可通过使用IsFilter进行过滤，返回推流历史记录。
     */
    DescribeLiveStreamEventList(req: DescribeLiveStreamEventListRequest, cb?: (error: string, rep: DescribeLiveStreamEventListResponse) => void): Promise<DescribeLiveStreamEventListResponse>;
    /**
     * 该接口用来创建通用混流。用法与旧接口 mix_streamv2.start_mix_stream_advanced 基本一致。
注意：当前最多支持16路混流。
最佳实践：https://cloud.tencent.com/document/product/267/45566
     */
    CreateCommonMixStream(req: CreateCommonMixStreamRequest, cb?: (error: string, rep: CreateCommonMixStreamResponse) => void): Promise<CreateCommonMixStreamResponse>;
    /**
     * 该接口为监控数据接口，数据采集及统计方式与计费数据不同，仅供运营分析使用，不能用于计费对账参考。
查询某段时间内5分钟粒度的各播放http状态码的个数。
备注：数据延迟1小时，如10:00-10:59点的数据12点才能查到。
     */
    DescribeHttpStatusInfoList(req: DescribeHttpStatusInfoListRequest, cb?: (error: string, rep: DescribeHttpStatusInfoListResponse) => void): Promise<DescribeHttpStatusInfoListResponse>;
    /**
     * 该接口为监控数据接口，数据采集及统计方式与计费数据不同，仅供运营分析使用，不能用于计费对账参考。
查询某省份某运营商下行播放数据，包括带宽，流量，请求数，并发连接数信息。
     */
    DescribeProvinceIspPlayInfoList(req: DescribeProvinceIspPlayInfoListRequest, cb?: (error: string, rep: DescribeProvinceIspPlayInfoListResponse) => void): Promise<DescribeProvinceIspPlayInfoListResponse>;
    /**
     * 修改播放域名信息。
     */
    ModifyLivePlayDomain(req: ModifyLivePlayDomainRequest, cb?: (error: string, rep: ModifyLivePlayDomainResponse) => void): Promise<ModifyLivePlayDomainResponse>;
    /**
     * 该接口为监控数据接口，数据采集及统计方式与计费数据不同，仅供运营分析使用，不能用于计费对账参考。
查询流id的上行推流质量数据，包括音视频的帧率，码率，流逝时间，编码格式等。
     */
    DescribeStreamPushInfoList(req: DescribeStreamPushInfoListRequest, cb?: (error: string, rep: DescribeStreamPushInfoListResponse) => void): Promise<DescribeStreamPushInfoListResponse>;
    /**
     * 该接口用来启动直播流监播任务。
     */
    StartLiveStreamMonitor(req: StartLiveStreamMonitorRequest, cb?: (error: string, rep: StartLiveStreamMonitorResponse) => void): Promise<StartLiveStreamMonitorResponse>;
    /**
     * 获取截图规则列表
     */
    DescribeLiveSnapshotRules(req?: DescribeLiveSnapshotRulesRequest, cb?: (error: string, rep: DescribeLiveSnapshotRulesResponse) => void): Promise<DescribeLiveSnapshotRulesResponse>;
    /**
     * 调用该接口，释放导播台实例，但保留所有的配置。
执行该接口，预监与主监画面停止，第三方推流停止。
点播文件与直播地址将停止展示，客户自行推到导播台的流需要手动停止。
     */
    ReleaseCaster(req: ReleaseCasterRequest, cb?: (error: string, rep: ReleaseCasterResponse) => void): Promise<ReleaseCasterResponse>;
    /**
     * 查询某个时间范围内所有时移流列表。最大支持查询24小时内的数据。
     */
    DescribeTimeShiftStreamList(req: DescribeTimeShiftStreamListRequest, cb?: (error: string, rep: DescribeTimeShiftStreamListResponse) => void): Promise<DescribeTimeShiftStreamListResponse>;
    /**
     * 该接口用来向导播台中添加一个输入源，该输入源可以是拉流地址、或是一个文件链接
     */
    AddCasterInputInfo(req: AddCasterInputInfoRequest, cb?: (error: string, rep: AddCasterInputInfoResponse) => void): Promise<AddCasterInputInfoResponse>;
    /**
     * 创建直播垫片模板。
     */
    CreateLivePadTemplate(req: CreateLivePadTemplateRequest, cb?: (error: string, rep: CreateLivePadTemplateResponse) => void): Promise<CreateLivePadTemplateResponse>;
    /**
     * 获取截图模板列表。
     */
    DescribeLiveSnapshotTemplates(req?: DescribeLiveSnapshotTemplatesRequest, cb?: (error: string, rep: DescribeLiveSnapshotTemplatesResponse) => void): Promise<DescribeLiveSnapshotTemplatesResponse>;
    /**
     * 查询直播域名 Referer 黑白名单配置。
由于 Referer 信息包含在 http 协议中，在开启配置后，播放协议为 rtmp 或 WebRTC 不会校验 Referer 配置，仍可正常播放。如需配置 Referer 鉴权建议使用 http-flv 或 http-hls 协议播放。
     */
    DescribeLiveDomainReferer(req: DescribeLiveDomainRefererRequest, cb?: (error: string, rep: DescribeLiveDomainRefererResponse) => void): Promise<DescribeLiveDomainRefererResponse>;
    /**
     * 获取单个转码模板。
     */
    DescribeLiveTranscodeTemplate(req: DescribeLiveTranscodeTemplateRequest, cb?: (error: string, rep: DescribeLiveTranscodeTemplateResponse) => void): Promise<DescribeLiveTranscodeTemplateResponse>;
    /**
     * 支持直播时移写入量数据查询。
     */
    DescribeLiveTimeShiftWriteSizeInfoList(req: DescribeLiveTimeShiftWriteSizeInfoListRequest, cb?: (error: string, rep: DescribeLiveTimeShiftWriteSizeInfoListResponse) => void): Promise<DescribeLiveTimeShiftWriteSizeInfoListResponse>;
    /**
     * 设置直播域名 Referer 黑白名单。
由于 Referer 信息包含在 http 协议中，在开启配置后，播放协议为 rtmp 或 WebRTC 不会校验 Referer 配置，仍可正常播放。如需配置 Referer 鉴权建议使用 http-flv 或 http-hls 协议播放。
     */
    ModifyLiveDomainReferer(req: ModifyLiveDomainRefererRequest, cb?: (error: string, rep: ModifyLiveDomainRefererResponse) => void): Promise<ModifyLiveDomainRefererResponse>;
    /**
     * 该接口为监控数据接口，数据采集及统计方式与计费数据不同，仅供运营分析使用，不能用于计费对账参考。
查询某段时间top n客户端ip汇总信息（暂支持top 1000）
     */
    DescribeTopClientIpSumInfoList(req: DescribeTopClientIpSumInfoListRequest, cb?: (error: string, rep: DescribeTopClientIpSumInfoListResponse) => void): Promise<DescribeTopClientIpSumInfoListResponse>;
    /**
     * 该接口用来生成导播台推流地址
     */
    CreateCasterInputPushUrl(req: CreateCasterInputPushUrlRequest, cb?: (error: string, rep: CreateCasterInputPushUrlResponse) => void): Promise<CreateCasterInputPushUrlResponse>;
    /**
     * 该接口用来查询某个导播台的推流信息列表。
     */
    DescribeCasterOutputInfos(req: DescribeCasterOutputInfosRequest, cb?: (error: string, rep: DescribeCasterOutputInfosResponse) => void): Promise<DescribeCasterOutputInfosResponse>;
    /**
     * 创建一个在指定时间启动、结束的截图任务，并使用指定截图模板ID对应的配置进行截图。
- 注意事项
1. 断流会结束当前截图。在结束时间到达之前任务仍然有效，期间只要正常推流都会正常截图，与是否多次推、断流无关。
2. 使用上避免创建时间段相互重叠的截图任务。若同一条流当前存在多个时段重叠的任务，为避免重复系统将启动最多3个截图任务。
3. 创建的截图任务记录在平台侧只保留3个月。
4. 当前截图任务管理API（CreateScreenshotTask/StopScreenshotTask/DeleteScreenshotTask）与旧API（CreateLiveInstantSnapshot/StopLiveInstantSnapshot）不兼容，两套接口不能混用。
5. 避免 创建截图任务 与 推流 操作同时进行，可能导致因截图任务未生效而引起任务延迟启动问题，两者操作间隔建议大于3秒。
     */
    CreateScreenshotTask(req: CreateScreenshotTaskRequest, cb?: (error: string, rep: CreateScreenshotTaskResponse) => void): Promise<CreateScreenshotTaskResponse>;
    /**
     * 获取录制模板列表。
     */
    DescribeLiveRecordTemplates(req: DescribeLiveRecordTemplatesRequest, cb?: (error: string, rep: DescribeLiveRecordTemplatesResponse) => void): Promise<DescribeLiveRecordTemplatesResponse>;
    /**
     * 该接口用来停止直播流监播任务。
     */
    StopLiveStreamMonitor(req: StopLiveStreamMonitorRequest, cb?: (error: string, rep: StopLiveStreamMonitorResponse) => void): Promise<StopLiveStreamMonitorResponse>;
    /**
     * 验证用户是否拥有特定直播域名。
     */
    AuthenticateDomainOwner(req: AuthenticateDomainOwnerRequest, cb?: (error: string, rep: AuthenticateDomainOwnerResponse) => void): Promise<AuthenticateDomainOwnerResponse>;
    /**
     * 修改截图模板配置。
     */
    ModifyLiveSnapshotTemplate(req: ModifyLiveSnapshotTemplateRequest, cb?: (error: string, rep: ModifyLiveSnapshotTemplateResponse) => void): Promise<ModifyLiveSnapshotTemplateResponse>;
    /**
     * 查询某时间段top n的域名或流id信息（暂支持top 1000）。
     */
    DescribeVisitTopSumInfoList(req: DescribeVisitTopSumInfoListRequest, cb?: (error: string, rep: DescribeVisitTopSumInfoListResponse) => void): Promise<DescribeVisitTopSumInfoListResponse>;
    /**
     * 该接口用来修改导播台文本配置。
     */
    ModifyCasterMarkWordInfo(req: ModifyCasterMarkWordInfoRequest, cb?: (error: string, rep: ModifyCasterMarkWordInfoResponse) => void): Promise<ModifyCasterMarkWordInfoResponse>;
    /**
     * 该接口用来增加导播台的布局参数。
     */
    AddCasterLayoutInfo(req: AddCasterLayoutInfoRequest, cb?: (error: string, rep: AddCasterLayoutInfoResponse) => void): Promise<AddCasterLayoutInfoResponse>;
    /**
     * 获取域名证书信息。
     */
    DescribeLiveDomainCert(req: DescribeLiveDomainCertRequest, cb?: (error: string, rep: DescribeLiveDomainCertResponse) => void): Promise<DescribeLiveDomainCertResponse>;
    /**
     * 添加水印，成功返回水印 ID 后，需要调用[CreateLiveWatermarkRule](/document/product/267/32629)接口将水印 ID 绑定到流使用。 水印数量上限 100，超过后需要先删除，再添加。
     */
    AddLiveWatermark(req: AddLiveWatermarkRequest, cb?: (error: string, rep: AddLiveWatermarkResponse) => void): Promise<AddLiveWatermarkResponse>;
    /**
     * 海外分区直播播放带宽和流量数据查询。
     */
    DescribeAreaBillBandwidthAndFluxList(req: DescribeAreaBillBandwidthAndFluxListRequest, cb?: (error: string, rep: DescribeAreaBillBandwidthAndFluxListResponse) => void): Promise<DescribeAreaBillBandwidthAndFluxListResponse>;
    /**
     * 该接口用来查询某个导播台的文本列表。
     */
    DescribeCasterMarkWordInfos(req: DescribeCasterMarkWordInfosRequest, cb?: (error: string, rep: DescribeCasterMarkWordInfosResponse) => void): Promise<DescribeCasterMarkWordInfosResponse>;
    /**
     * 该接口用来将布局信息从导播台中删除
     */
    DeleteCasterLayoutInfo(req: DeleteCasterLayoutInfoRequest, cb?: (error: string, rep: DeleteCasterLayoutInfoResponse) => void): Promise<DeleteCasterLayoutInfoResponse>;
    /**
     * 删除水印规则
     */
    DeleteLiveWatermarkRule(req: DeleteLiveWatermarkRuleRequest, cb?: (error: string, rep: DeleteLiveWatermarkRuleResponse) => void): Promise<DeleteLiveWatermarkRuleResponse>;
    /**
     * 删除直播垫片模板。
     */
    DeleteLivePadTemplate(req: DeleteLivePadTemplateRequest, cb?: (error: string, rep: DeleteLivePadTemplateResponse) => void): Promise<DeleteLivePadTemplateResponse>;
    /**
     * 删除回调规则。
     */
    DeleteLiveCallbackRule(req: DeleteLiveCallbackRuleRequest, cb?: (error: string, rep: DeleteLiveCallbackRuleResponse) => void): Promise<DeleteLiveCallbackRuleResponse>;
    /**
     * 更新拉流配置。该接口为已下线接口，请使用新接口 ModifyLivePullStreamTask。
     */
    ModifyPullStreamConfig(req: ModifyPullStreamConfigRequest, cb?: (error: string, rep: ModifyPullStreamConfigResponse) => void): Promise<ModifyPullStreamConfigResponse>;
    /**
     * 创建截图模板，数量上限：50，成功返回模板id后，需要调用[CreateLiveSnapshotRule](/document/product/267/32625)接口，将模板id绑定到流使用。
<br>截图相关文档：[直播截图](/document/product/267/32737)。
     */
    CreateLiveSnapshotTemplate(req: CreateLiveSnapshotTemplateRequest, cb?: (error: string, rep: CreateLiveSnapshotTemplateResponse) => void): Promise<CreateLiveSnapshotTemplateResponse>;
    /**
     * 返回正在直播中的流列表。适用于推流成功后查询在线流信息。

注意：
1. 该接口仅提供辅助查询在线流列表功能，业务重要场景不可强依赖该接口。
2. 该接口仅适用于流数少于2万路的情况，对于流数较大用户请联系售后。
     */
    DescribeLiveStreamOnlineList(req: DescribeLiveStreamOnlineListRequest, cb?: (error: string, rep: DescribeLiveStreamOnlineListResponse) => void): Promise<DescribeLiveStreamOnlineListResponse>;
    /**
     * 启用择优调度。
注意：流维度的择优调度，当主备流结束后自动失效。
     */
    EnableOptimalSwitching(req: EnableOptimalSwitchingRequest, cb?: (error: string, rep: EnableOptimalSwitchingResponse) => void): Promise<EnableOptimalSwitchingResponse>;
    /**
     * 删除回调模板。
     */
    DeleteLiveCallbackTemplate(req: DeleteLiveCallbackTemplateRequest, cb?: (error: string, rep: DeleteLiveCallbackTemplateResponse) => void): Promise<DeleteLiveCallbackTemplateResponse>;
    /**
     * 该接口用来修改导播台水印信息。
注意，修改的Index对应的水印需已存在
     */
    ModifyCasterMarkPicInfo(req: ModifyCasterMarkPicInfoRequest, cb?: (error: string, rep: ModifyCasterMarkPicInfoResponse) => void): Promise<ModifyCasterMarkPicInfoResponse>;
    /**
     * 该接口用来获取导播台视频流的播放url，用来在页面上拉流展示。
     */
    DescribeCasterPlayUrl(req: DescribeCasterPlayUrlRequest, cb?: (error: string, rep: DescribeCasterPlayUrlResponse) => void): Promise<DescribeCasterPlayUrlResponse>;
    /**
     * 查询直播推流鉴权key
     */
    DescribeLivePushAuthKey(req: DescribeLivePushAuthKeyRequest, cb?: (error: string, rep: DescribeLivePushAuthKeyResponse) => void): Promise<DescribeLivePushAuthKeyResponse>;
    /**
     * 删除直播拉流配置。该接口已下线,请使用新接口 DeleteLivePullStreamTask。
     */
    DeletePullStreamConfig(req: DeletePullStreamConfigRequest, cb?: (error: string, rep: DeletePullStreamConfigResponse) => void): Promise<DeletePullStreamConfigResponse>;
    /**
     * 前提调用 DescribeTimeShiftStreamList 获得请求必要参数。查询指定范围内的时移流录制详情，最大支持24小时范围查询。
     */
    DescribeTimeShiftRecordDetail(req: DescribeTimeShiftRecordDetailRequest, cb?: (error: string, rep: DescribeTimeShiftRecordDetailResponse) => void): Promise<DescribeTimeShiftRecordDetailResponse>;
    /**
     * 获取单个录制模板。
     */
    DescribeLiveRecordTemplate(req: DescribeLiveRecordTemplateRequest, cb?: (error: string, rep: DescribeLiveRecordTemplateResponse) => void): Promise<DescribeLiveRecordTemplateResponse>;
    /**
     * 获取单个直播垫片模板
     */
    DescribeLivePadTemplate(req: DescribeLivePadTemplateRequest, cb?: (error: string, rep: DescribeLivePadTemplateResponse) => void): Promise<DescribeLivePadTemplateResponse>;
    /**
     * 提前结束截图，中止运行中的截图任务。任务被成功终止后，本次任务将不再启动。
     */
    StopScreenshotTask(req: StopScreenshotTaskRequest, cb?: (error: string, rep: StopScreenshotTaskResponse) => void): Promise<StopScreenshotTaskResponse>;
    /**
     * 为导播台添加文本配置。
     */
    AddCasterMarkWordInfo(req: AddCasterMarkWordInfoRequest, cb?: (error: string, rep: AddCasterMarkWordInfoResponse) => void): Promise<AddCasterMarkWordInfoResponse>;
    /**
     * 用来查询监播场次7天内的智能识别、断流、低帧率等信息的汇总报告。
     */
    DescribeMonitorReport(req: DescribeMonitorReportRequest, cb?: (error: string, rep: DescribeMonitorReportResponse) => void): Promise<DescribeMonitorReportResponse>;
    /**
     * 查询直播拉流配置。该接口已下线,请使用新接口 DescribeLivePullStreamTasks。
     */
    DescribePullStreamConfigs(req: DescribePullStreamConfigsRequest, cb?: (error: string, rep: DescribePullStreamConfigsResponse) => void): Promise<DescribePullStreamConfigsResponse>;
    /**
     * 该接口用来查询某个特定监播任务的配置。
     */
    DescribeLiveStreamMonitor(req: DescribeLiveStreamMonitorRequest, cb?: (error: string, rep: DescribeLiveStreamMonitorResponse) => void): Promise<DescribeLiveStreamMonitorResponse>;
    /**
     * 删除水印。
     */
    DeleteLiveWatermark(req: DeleteLiveWatermarkRequest, cb?: (error: string, rep: DeleteLiveWatermarkResponse) => void): Promise<DeleteLiveWatermarkResponse>;
    /**
     * 该接口用来设置导播台的描述、名称、录制模板id等参数。
     */
    ModifyCaster(req: ModifyCasterRequest, cb?: (error: string, rep: ModifyCasterResponse) => void): Promise<ModifyCasterResponse>;
    /**
     * 查询绑定证书的域名列表。
     */
    DescribeLiveDomainCertBindings(req: DescribeLiveDomainCertBindingsRequest, cb?: (error: string, rep: DescribeLiveDomainCertBindingsResponse) => void): Promise<DescribeLiveDomainCertBindingsResponse>;
    /**
     * 该接口为监控数据接口，数据采集及统计方式与计费数据不同，仅供运营分析使用，不能用于计费对账参考。
查询下行播放错误码信息。
     */
    DescribePlayErrorCodeSumInfoList(req: DescribePlayErrorCodeSumInfoListRequest, cb?: (error: string, rep: DescribePlayErrorCodeSumInfoListResponse) => void): Promise<DescribePlayErrorCodeSumInfoListResponse>;
    /**
     * 针对大型活动直播，通过对直播流设置延时来控制现场与观众播放画面的时间间隔，避免突发状况造成影响。

注意：如果在推流前设置延播，需要提前5分钟设置，目前该接口只支持流粒度。
     */
    AddDelayLiveStream(req: AddDelayLiveStreamRequest, cb?: (error: string, rep: AddDelayLiveStreamResponse) => void): Promise<AddDelayLiveStreamResponse>;
    /**
     * 直播上行路数查询。
     */
    DescribeUploadStreamNums(req: DescribeUploadStreamNumsRequest, cb?: (error: string, rep: DescribeUploadStreamNumsResponse) => void): Promise<DescribeUploadStreamNumsResponse>;
    /**
     * 该接口为监控数据接口，数据采集及统计方式与计费数据不同，仅供运营分析使用，不能用于计费对账参考。
查询天维度每条流的播放数据，包括总流量等。
     */
    DescribeStreamDayPlayInfoList(req: DescribeStreamDayPlayInfoListRequest, cb?: (error: string, rep: DescribeStreamDayPlayInfoListResponse) => void): Promise<DescribeStreamDayPlayInfoListResponse>;
    /**
     * 修改直播推流鉴权key
     */
    ModifyLivePushAuthKey(req: ModifyLivePushAuthKeyRequest, cb?: (error: string, rep: ModifyLivePushAuthKeyResponse) => void): Promise<ModifyLivePushAuthKeyResponse>;
    /**
     * 修改转码模板配置。
     */
    ModifyLiveTranscodeTemplate(req: ModifyLiveTranscodeTemplateRequest, cb?: (error: string, rep: ModifyLiveTranscodeTemplateResponse) => void): Promise<ModifyLiveTranscodeTemplateResponse>;
    /**
     * 删除转码规则。
DomainName+AppName+StreamName+TemplateId唯一标识单个转码规则，如需删除需要强匹配。其中TemplateId必填，其余参数为空时也需要传空字符串进行强匹配。
     */
    DeleteLiveTranscodeRule(req: DeleteLiveTranscodeRuleRequest, cb?: (error: string, rep: DeleteLiveTranscodeRuleResponse) => void): Promise<DeleteLiveTranscodeRuleResponse>;
    /**
     * 查询转码总量数据，可查询近三个月内的数据。
注意：
如果是查询某一天内，则返回5分钟粒度数据；
如果是查询跨天或指定域名， 则返回1小时粒度数据。
     */
    DescribeLiveTranscodeTotalInfo(req: DescribeLiveTranscodeTotalInfoRequest, cb?: (error: string, rep: DescribeLiveTranscodeTotalInfoResponse) => void): Promise<DescribeLiveTranscodeTotalInfoResponse>;
    /**
     * 删除截图规则。
     */
    DeleteLiveSnapshotRule(req: DeleteLiveSnapshotRuleRequest, cb?: (error: string, rep: DeleteLiveSnapshotRuleResponse) => void): Promise<DeleteLiveSnapshotRuleResponse>;
    /**
     * 删除接口 CreateLivePullStreamTask 创建的拉流任务。
注意：
1. 入参中的 TaskId 为 CreateLivePullStreamTask 接口创建时返回的TaskId。
2. 也可通过 DescribeLivePullStreamTasks 进行查询创建的任务。
     */
    DeleteLivePullStreamTask(req: DeleteLivePullStreamTaskRequest, cb?: (error: string, rep: DeleteLivePullStreamTaskResponse) => void): Promise<DeleteLivePullStreamTaskResponse>;
    /**
     * 获取禁推流列表。

注意：该接口仅作为直播辅助查询接口，重要业务场景不可强依赖该接口。
     */
    DescribeLiveForbidStreamList(req: DescribeLiveForbidStreamListRequest, cb?: (error: string, rep: DescribeLiveForbidStreamListResponse) => void): Promise<DescribeLiveForbidStreamListResponse>;
    /**
     * 修改直播垫片模板。
     */
    ModifyLivePadTemplate(req: ModifyLivePadTemplateRequest, cb?: (error: string, rep: ModifyLivePadTemplateResponse) => void): Promise<ModifyLivePadTemplateResponse>;
    /**
     * 获取单个水印信息。
     */
    DescribeLiveWatermark(req: DescribeLiveWatermarkRequest, cb?: (error: string, rep: DescribeLiveWatermarkResponse) => void): Promise<DescribeLiveWatermarkResponse>;
    /**
     * 获取证书信息
     */
    DescribeLiveCert(req: DescribeLiveCertRequest, cb?: (error: string, rep: DescribeLiveCertResponse) => void): Promise<DescribeLiveCertResponse>;
    /**
     * 批量绑定证书对应的播放域名，并更新启用状态。
新建自有证书将自动上传至腾讯云ssl。
     */
    ModifyLiveDomainCertBindings(req: ModifyLiveDomainCertBindingsRequest, cb?: (error: string, rep: ModifyLiveDomainCertBindingsResponse) => void): Promise<ModifyLiveDomainCertBindingsResponse>;
    /**
     * 批量获取转推日志的URL。
     */
    DescribeDeliverLogDownList(req?: DescribeDeliverLogDownListRequest, cb?: (error: string, rep: DescribeDeliverLogDownListResponse) => void): Promise<DescribeDeliverLogDownListResponse>;
    /**
     * 该接口用来启动主监任务，并将获取主监画面的播放地址。
     */
    CreateCasterPgm(req: CreateCasterPgmRequest, cb?: (error: string, rep: CreateCasterPgmResponse) => void): Promise<CreateCasterPgmResponse>;
    /**
     * 更新直播拉流任务。
1. 不支持修改拉流源类型，如需更换，请创建新任务。
     */
    ModifyLivePullStreamTask(req: ModifyLivePullStreamTaskRequest, cb?: (error: string, rep: ModifyLivePullStreamTaskResponse) => void): Promise<ModifyLivePullStreamTaskResponse>;
    /**
     * 查询直播增强用量明细信息。
     */
    DescribeLiveEnhanceInfoList(req: DescribeLiveEnhanceInfoListRequest, cb?: (error: string, rep: DescribeLiveEnhanceInfoListResponse) => void): Promise<DescribeLiveEnhanceInfoListResponse>;
    /**
     * 查询拉流转推任务的时长信息。
     */
    DescribePullTransformPushInfo(req: DescribePullTransformPushInfoRequest, cb?: (error: string, rep: DescribePullTransformPushInfoResponse) => void): Promise<DescribePullTransformPushInfoResponse>;
    /**
     * 创建回调模板，数量上限：50，成功返回模板id后，需要调用[CreateLiveCallbackRule](/document/product/267/32638)接口将模板 ID 绑定到域名/路径使用。
<br>回调协议相关文档：[事件消息通知](/document/product/267/32744)。
注意：至少填写一个回调 URL。
     */
    CreateLiveCallbackTemplate(req: CreateLiveCallbackTemplateRequest, cb?: (error: string, rep: CreateLiveCallbackTemplateResponse) => void): Promise<CreateLiveCallbackTemplateResponse>;
    /**
     * 根据域名状态、类型等信息查询用户的域名信息。
     */
    DescribeLiveDomains(req: DescribeLiveDomainsRequest, cb?: (error: string, rep: DescribeLiveDomainsResponse) => void): Promise<DescribeLiveDomainsResponse>;
    /**
     * 该接口用来修改导播台的推流信息。
注：只有在主监启动前设置才生效，主监启动后设置，下次推流生效。
     */
    ModifyCasterOutputInfo(req: ModifyCasterOutputInfoRequest, cb?: (error: string, rep: ModifyCasterOutputInfoResponse) => void): Promise<ModifyCasterOutputInfoResponse>;
    /**
     * 该接口用来启动预监任务，并将获取预监画面的播放地址。
     */
    CreateCasterPvw(req: CreateCasterPvwRequest, cb?: (error: string, rep: CreateCasterPvwResponse) => void): Promise<CreateCasterPvwResponse>;
    /**
     * 恢复某条流的推流。
     */
    ResumeLiveStream(req: ResumeLiveStreamRequest, cb?: (error: string, rep: ResumeLiveStreamResponse) => void): Promise<ResumeLiveStreamResponse>;
    /**
     * 该接口用来查询某个导播台的水印列表。
     */
    DescribeCasterMarkPicInfos(req: DescribeCasterMarkPicInfosRequest, cb?: (error: string, rep: DescribeCasterMarkPicInfosResponse) => void): Promise<DescribeCasterMarkPicInfosResponse>;
    /**
     * 获取单个回调模板。
     */
    DescribeLiveCallbackTemplate(req: DescribeLiveCallbackTemplateRequest, cb?: (error: string, rep: DescribeLiveCallbackTemplateResponse) => void): Promise<DescribeLiveCallbackTemplateResponse>;
    /**
     * 删除已添加的直播域名
     */
    DeleteLiveDomain(req: DeleteLiveDomainRequest, cb?: (error: string, rep: DeleteLiveDomainResponse) => void): Promise<DeleteLiveDomainResponse>;
    /**
     * 修改回调模板。
     */
    ModifyLiveCallbackTemplate(req: ModifyLiveCallbackTemplateRequest, cb?: (error: string, rep: ModifyLiveCallbackTemplateResponse) => void): Promise<ModifyLiveCallbackTemplateResponse>;
    /**
     * 该接口用来新增图片水印。
     */
    AddCasterMarkPicInfo(req: AddCasterMarkPicInfoRequest, cb?: (error: string, rep: AddCasterMarkPicInfoResponse) => void): Promise<AddCasterMarkPicInfoResponse>;
    /**
     * 删除直播时移模板。
     */
    DeleteLiveTimeShiftTemplate(req: DeleteLiveTimeShiftTemplateRequest, cb?: (error: string, rep: DeleteLiveTimeShiftTemplateResponse) => void): Promise<DeleteLiveTimeShiftTemplateResponse>;
    /**
     * 该接口为监控数据接口，数据采集及统计方式与计费数据不同，仅供运营分析使用，不能用于计费对账参考。
查询按省份和运营商分组的下行播放数据。
     */
    DescribeGroupProIspPlayInfoList(req: DescribeGroupProIspPlayInfoListRequest, cb?: (error: string, rep: DescribeGroupProIspPlayInfoListResponse) => void): Promise<DescribeGroupProIspPlayInfoListResponse>;
    /**
     * 该接口为监控数据接口，数据采集及统计方式与计费数据不同，仅供运营分析使用，不能用于计费对账参考。
查询播放数据，支持按流名称查询详细播放数据，也可按播放域名查询详细总数据，数据延迟4分钟左右。
     */
    DescribeStreamPlayInfoList(req: DescribeStreamPlayInfoListRequest, cb?: (error: string, rep: DescribeStreamPlayInfoListResponse) => void): Promise<DescribeStreamPlayInfoListResponse>;
    /**
     * 该接口用来创建新的导播台
     */
    CreateCaster(req: CreateCasterRequest, cb?: (error: string, rep: CreateCasterResponse) => void): Promise<CreateCasterResponse>;
    /**
     * 该接口用来查询某个导播台的布局列表
     */
    DescribeCasterLayoutInfos(req: DescribeCasterLayoutInfosRequest, cb?: (error: string, rep: DescribeCasterLayoutInfosResponse) => void): Promise<DescribeCasterLayoutInfosResponse>;
    /**
     * 查询直播拉流任务状态信息。
     */
    DescribeLivePullStreamTaskStatus(req: DescribeLivePullStreamTaskStatusRequest, cb?: (error: string, rep: DescribeLivePullStreamTaskStatusResponse) => void): Promise<DescribeLivePullStreamTaskStatusResponse>;
    /**
     * 获取单个截图模板。
     */
    DescribeLiveSnapshotTemplate(req: DescribeLiveSnapshotTemplateRequest, cb?: (error: string, rep: DescribeLiveSnapshotTemplateResponse) => void): Promise<DescribeLiveSnapshotTemplateResponse>;
    /**
     * 获取回调模板列表
     */
    DescribeLiveCallbackTemplates(req?: DescribeLiveCallbackTemplatesRequest, cb?: (error: string, rep: DescribeLiveCallbackTemplatesResponse) => void): Promise<DescribeLiveCallbackTemplatesResponse>;
    /**
     * 提前结束录制，中止运行中的录制任务并生成录制文件。任务被成功终止后，本次任务将不再启动。
     */
    StopRecordTask(req: StopRecordTaskRequest, cb?: (error: string, rep: StopRecordTaskResponse) => void): Promise<StopRecordTaskResponse>;
    /**
     * 修改直播时移模板。
     */
    ModifyLiveTimeShiftTemplate(req: ModifyLiveTimeShiftTemplateRequest, cb?: (error: string, rep: ModifyLiveTimeShiftTemplateResponse) => void): Promise<ModifyLiveTimeShiftTemplateResponse>;
    /**
     * 该接口用来创建直播流监播任务。
     */
    CreateLiveStreamMonitor(req: CreateLiveStreamMonitorRequest, cb?: (error: string, rep: CreateLiveStreamMonitorResponse) => void): Promise<CreateLiveStreamMonitorResponse>;
    /**
     * 创建直播垫片规则。
     */
    CreateLivePadRule(req: CreateLivePadRuleRequest, cb?: (error: string, rep: CreateLivePadRuleResponse) => void): Promise<CreateLivePadRuleResponse>;
    /**
     * 说明：录制后的文件存放于点播平台。用户如需使用录制功能，需首先自行开通点播账号并确保账号可用。录制文件存放后，相关费用（含存储以及下行播放流量）按照点播平台计费方式收取，请参考对应文档。
     */
    StopLiveRecord(req: StopLiveRecordRequest, cb?: (error: string, rep: StopLiveRecordResponse) => void): Promise<StopLiveRecordResponse>;
    /**
     * 修改播放鉴权key
     */
    ModifyLivePlayAuthKey(req: ModifyLivePlayAuthKeyRequest, cb?: (error: string, rep: ModifyLivePlayAuthKeyResponse) => void): Promise<ModifyLivePlayAuthKeyResponse>;
    /**
     * 该接口用来删除一个导播台的所有信息。
注意，调用该接口后，所有的导播台信息将被清除，包括正在直播的内容也将直接中断。
     */
    DeleteCaster(req: DeleteCasterRequest, cb?: (error: string, rep: DeleteCasterResponse) => void): Promise<DeleteCasterResponse>;
    /**
     * 删除转码模板。
     */
    DeleteLiveTranscodeTemplate(req: DeleteLiveTranscodeTemplateRequest, cb?: (error: string, rep: DeleteLiveTranscodeTemplateResponse) => void): Promise<DeleteLiveTranscodeTemplateResponse>;
    /**
     * 接口用来查询直播增值业务--截图的张数
     */
    DescribeScreenShotSheetNumList(req: DescribeScreenShotSheetNumListRequest, cb?: (error: string, rep: DescribeScreenShotSheetNumListResponse) => void): Promise<DescribeScreenShotSheetNumListResponse>;
    /**
     * 解绑域名证书
     */
    UnBindLiveDomainCert(req: UnBindLiveDomainCertRequest, cb?: (error: string, rep: UnBindLiveDomainCertResponse) => void): Promise<UnBindLiveDomainCertResponse>;
    /**
     * 删除录制任务配置。删除操作不影响正在运行当中的任务，仅对删除之后新的推流有效。
     */
    DeleteRecordTask(req: DeleteRecordTaskRequest, cb?: (error: string, rep: DeleteRecordTaskResponse) => void): Promise<DeleteRecordTaskResponse>;
    /**
     * 该接口为监控数据接口，数据采集及统计方式与计费数据不同，仅供运营分析使用，不能用于计费对账参考。
支持查询某天或某段时间的转码详细信息。由于转码数据量较大，如果查询时间跨度太长可能会拉不到数据，可以尝试将查询时间范围缩小些再重试。
     */
    DescribeLiveTranscodeDetailInfo(req: DescribeLiveTranscodeDetailInfoRequest, cb?: (error: string, rep: DescribeLiveTranscodeDetailInfoResponse) => void): Promise<DescribeLiveTranscodeDetailInfoResponse>;
    /**
     * 批量获取日志URL。
     */
    DescribeLogDownloadList(req: DescribeLogDownloadListRequest, cb?: (error: string, rep: DescribeLogDownloadListResponse) => void): Promise<DescribeLogDownloadListResponse>;
    /**
     * 获取直播时移模板。
     */
    DescribeLiveTimeShiftTemplates(req?: DescribeLiveTimeShiftTemplatesRequest, cb?: (error: string, rep: DescribeLiveTimeShiftTemplatesResponse) => void): Promise<DescribeLiveTimeShiftTemplatesResponse>;
    /**
     * 获取录制规则列表
     */
    DescribeLiveRecordRules(req?: DescribeLiveRecordRulesRequest, cb?: (error: string, rep: DescribeLiveRecordRulesResponse) => void): Promise<DescribeLiveRecordRulesResponse>;
    /**
     * 该接口用来删除导播台的推流信息。
注：若删除推流到腾讯云直播源站配置，即OutputIndex为0，OutputType为1的推流配置，在重新启动主监后，系统会自动重新生成一个推流到腾讯云直播源站配置。
     */
    DeleteCasterOutputInfo(req: DeleteCasterOutputInfoRequest, cb?: (error: string, rep: DeleteCasterOutputInfoResponse) => void): Promise<DeleteCasterOutputInfoResponse>;
    /**
     * 该接口用来修改布局参数
     */
    ModifyCasterLayoutInfo(req: ModifyCasterLayoutInfoRequest, cb?: (error: string, rep: ModifyCasterLayoutInfoResponse) => void): Promise<ModifyCasterLayoutInfoResponse>;
    /**
     * 该接口用来新增导播台推流信息。导播台主监启动后，将会将主监画面推向该接口设置的地址。
     */
    AddCasterOutputInfo(req: AddCasterOutputInfoRequest, cb?: (error: string, rep: AddCasterOutputInfoResponse) => void): Promise<AddCasterOutputInfoResponse>;
    /**
     * P2P流数据查询接口，用来获取流量、卡播和起播信息。
     */
    DescribeLiveXP2PDetailInfoList(req: DescribeLiveXP2PDetailInfoListRequest, cb?: (error: string, rep: DescribeLiveXP2PDetailInfoListResponse) => void): Promise<DescribeLiveXP2PDetailInfoListResponse>;
    /**
     * 获取直播延播列表。
     */
    DescribeLiveDelayInfoList(req?: DescribeLiveDelayInfoListRequest, cb?: (error: string, rep: DescribeLiveDelayInfoListResponse) => void): Promise<DescribeLiveDelayInfoListResponse>;
    /**
     * 获取直播时移规则列表。
     */
    DescribeLiveTimeShiftRules(req?: DescribeLiveTimeShiftRulesRequest, cb?: (error: string, rep: DescribeLiveTimeShiftRulesResponse) => void): Promise<DescribeLiveTimeShiftRulesResponse>;
    /**
     * 删除录制规则。
     */
    DeleteLiveRecordRule(req: DeleteLiveRecordRuleRequest, cb?: (error: string, rep: DeleteLiveRecordRuleResponse) => void): Promise<DeleteLiveRecordRuleResponse>;
    /**
     * 查询直播域名信息。
     */
    DescribeLiveDomain(req: DescribeLiveDomainRequest, cb?: (error: string, rep: DescribeLiveDomainResponse) => void): Promise<DescribeLiveDomainResponse>;
    /**
     * 删除直播垫片规则。
     */
    DeleteLivePadRule(req: DeleteLivePadRuleRequest, cb?: (error: string, rep: DeleteLivePadRuleResponse) => void): Promise<DeleteLivePadRuleResponse>;
    /**
     * 创建回调规则，需要先调用[CreateLiveCallbackTemplate](/document/product/267/32637)接口创建回调模板，将返回的模板id绑定到域名/路径进行使用。
<br>回调协议相关文档：[事件消息通知](/document/product/267/32744)。
     */
    CreateLiveCallbackRule(req: CreateLiveCallbackRuleRequest, cb?: (error: string, rep: CreateLiveCallbackRuleResponse) => void): Promise<CreateLiveCallbackRuleResponse>;
    /**
     * 获取回调规则列表
     */
    DescribeLiveCallbackRules(req?: DescribeLiveCallbackRulesRequest, cb?: (error: string, rep: DescribeLiveCallbackRulesResponse) => void): Promise<DescribeLiveCallbackRulesResponse>;
    /**
     * 该接口为监控数据接口，数据采集及统计方式与计费数据不同，仅供运营分析使用，不能用于计费对账参考。
查询下行播放错误码信息，某段时间内1分钟粒度的各http错误码出现的次数，包括4xx，5xx。
     */
    DescribePlayErrorCodeDetailInfoList(req: DescribePlayErrorCodeDetailInfoListRequest, cb?: (error: string, rep: DescribePlayErrorCodeDetailInfoListResponse) => void): Promise<DescribePlayErrorCodeDetailInfoListResponse>;
    /**
     * 提供给客户对账，按天统计，维度：推流域名、时移文件时长（累加）、配置天数（不累加）、时移总时长（累加）。
     */
    DescribeLiveTimeShiftBillInfoList(req: DescribeLiveTimeShiftBillInfoListRequest, cb?: (error: string, rep: DescribeLiveTimeShiftBillInfoListResponse) => void): Promise<DescribeLiveTimeShiftBillInfoListResponse>;
    /**
     * 返回已经推过流的流列表。<br>
注意：分页最多支持查询1万条记录，可通过调整查询时间范围来获取更多数据。
     */
    DescribeLiveStreamPublishedList(req: DescribeLiveStreamPublishedListRequest, cb?: (error: string, rep: DescribeLiveStreamPublishedListResponse) => void): Promise<DescribeLiveStreamPublishedListResponse>;
    /**
     * 查询指定时间段范围内启动和结束的截图任务列表。
- 使用前提
1. 仅用于查询由 CreateScreenshotTask接口创建的截图任务。
2. 不能查询被 DeleteScreenshotTask接口删除以及已过期（平台侧保留3个月）的截图任务。
     */
    DescribeScreenshotTask(req: DescribeScreenshotTaskRequest, cb?: (error: string, rep: DescribeScreenshotTaskResponse) => void): Promise<DescribeScreenshotTaskResponse>;
    /**
     * 使用该接口查询垫片流。垫片流状态更新存在一定延迟，可间隔30秒以上查询，避免频繁查询该接口。
     */
    DescribeLivePadProcessorList(req: DescribeLivePadProcessorListRequest, cb?: (error: string, rep: DescribeLivePadProcessorListResponse) => void): Promise<DescribeLivePadProcessorListResponse>;
    /**
     * 直播推流带宽和流量数据查询。
推流计费会先取全球推流用量和全球播放用量进行比较，满足计费条件后再按各地区用量出账。详情参见[计费文档](https://cloud.tencent.com/document/product/267/34175)。
     */
    DescribePushBandwidthAndFluxList(req: DescribePushBandwidthAndFluxListRequest, cb?: (error: string, rep: DescribePushBandwidthAndFluxListResponse) => void): Promise<DescribePushBandwidthAndFluxListResponse>;
    /**
     * 删除截图任务配置。删除操作不影响正在运行当中的任务，仅对删除之后新的推流有效。
     */
    DeleteScreenshotTask(req: DeleteScreenshotTaskRequest, cb?: (error: string, rep: DeleteScreenshotTaskResponse) => void): Promise<DeleteScreenshotTaskResponse>;
    /**
     * 禁止某条流的推送，可以预设某个时刻将流恢复。
注意：
1. 默认只要流名称正确，禁推就会生效。
2. 如需要推流域名+推流路径+流名称 强匹配生效禁推，需提单联系售后开启配置。
3. 如果配置了域名分组，需填写准确推流域名，才可断掉当前推流。
     */
    ForbidLiveStream(req: ForbidLiveStreamRequest, cb?: (error: string, rep: ForbidLiveStreamResponse) => void): Promise<ForbidLiveStreamResponse>;
    /**
     * 添加域名，一次只能提交一个域名。域名必须已备案。
     */
    AddLiveDomain(req: AddLiveDomainRequest, cb?: (error: string, rep: AddLiveDomainResponse) => void): Promise<AddLiveDomainResponse>;
    /**
     * 修改直播拉流配置的状态。该接口已下线,请使用新接口 ModifyLivePullStreamTask。
     */
    ModifyPullStreamStatus(req: ModifyPullStreamStatusRequest, cb?: (error: string, rep: ModifyPullStreamStatusResponse) => void): Promise<ModifyPullStreamStatusResponse>;
    /**
     * 查询直播转推计费带宽，查询时间范围最大支持3个月内的数据，时间跨度最长31天。
     */
    DescribeDeliverBandwidthList(req: DescribeDeliverBandwidthListRequest, cb?: (error: string, rep: DescribeDeliverBandwidthListResponse) => void): Promise<DescribeDeliverBandwidthListResponse>;
    /**
     * 调用该接口实现切换当前播放所使用的主备流。
     */
    SwitchBackupStream(req: SwitchBackupStreamRequest, cb?: (error: string, rep: SwitchBackupStreamResponse) => void): Promise<SwitchBackupStreamResponse>;
    /**
     * 该接口为监控数据接口，数据采集及统计方式与计费数据不同，仅供运营分析使用，不能用于计费对账参考。
查询实时的域名维度下行播放数据，由于数据处理有耗时，接口默认查询4分钟前的准实时数据。
     */
    DescribeLiveDomainPlayInfoList(req: DescribeLiveDomainPlayInfoListRequest, cb?: (error: string, rep: DescribeLiveDomainPlayInfoListResponse) => void): Promise<DescribeLiveDomainPlayInfoListResponse>;
    /**
     * 创建直播时移规则，需要先调用[CreateLiveTimeShiftTemplate](/document/product/267/86169)接口创建直播时移模板，将返回的模板id绑定到流使用。
<br>直播时移相关文档：[直播时移](/document/product/267/86134)。
     */
    CreateLiveTimeShiftRule(req: CreateLiveTimeShiftRuleRequest, cb?: (error: string, rep: CreateLiveTimeShiftRuleResponse) => void): Promise<CreateLiveTimeShiftRuleResponse>;
    /**
     * 该接口为监控数据接口，数据采集及统计方式与计费数据不同，仅供运营分析使用，不能用于计费对账参考。
用于查询回调事件。
     */
    DescribeCallbackRecordsList(req: DescribeCallbackRecordsListRequest, cb?: (error: string, rep: DescribeCallbackRecordsListResponse) => void): Promise<DescribeCallbackRecordsListResponse>;
    /**
     * 创建录制规则，需要先调用[CreateLiveRecordTemplate](/document/product/267/32614)接口创建录制模板，将返回的模板id绑定到流使用。
<br>录制相关文档：[直播录制](/document/product/267/32739)。
     */
    CreateLiveRecordRule(req: CreateLiveRecordRuleRequest, cb?: (error: string, rep: CreateLiveRecordRuleResponse) => void): Promise<CreateLiveRecordRuleResponse>;
    /**
     * 创建直播拉流任务。支持将外部已有的点播文件，或者直播源拉取过来转推到指定的目标地址。
注意：
1. 默认支持任务数上限200个，如有特殊需求，可通过提单到售后进行评估增加上限。
2. 源流视频编码目前只支持: H264, H265。其他编码格式建议先进行转码处理。
3. 源流音频编码目前只支持: AAC。其他编码格式建议先进行转码处理。
4. 可在控制台开启过期自动清理，避免过期任务占用任务数额度。
5. 拉流转推功能为计费增值服务，计费规则详情可参见[计费文档](https://cloud.tencent.com/document/product/267/53308)。
6. 拉流转推功能仅提供内容拉取与推送服务，请确保内容已获得授权并符合内容传播相关的法律法规。若内容有侵权或违规相关问题，云直播会停止相关的功能服务并保留追究法律责任的权利。
     */
    CreateLivePullStreamTask(req: CreateLivePullStreamTaskRequest, cb?: (error: string, rep: CreateLivePullStreamTaskResponse) => void): Promise<CreateLivePullStreamTaskResponse>;
    /**
     * 获取转码模板列表。
     */
    DescribeLiveTranscodeTemplates(req: DescribeLiveTranscodeTemplatesRequest, cb?: (error: string, rep: DescribeLiveTranscodeTemplatesResponse) => void): Promise<DescribeLiveTranscodeTemplatesResponse>;
    /**
     * 创建录制模板，数量上限：50，成功返回模板id后，需要调用[CreateLiveRecordRule](/document/product/267/32615)接口，将模板id绑定到流进行使用。
<br>录制相关文档：[直播录制](/document/product/267/32739)。
     */
    CreateLiveRecordTemplate(req: CreateLiveRecordTemplateRequest, cb?: (error: string, rep: CreateLiveRecordTemplateResponse) => void): Promise<CreateLiveRecordTemplateResponse>;
    /**
     * 直播播放带宽和流量数据查询。
     */
    DescribeBillBandwidthAndFluxList(req: DescribeBillBandwidthAndFluxListRequest, cb?: (error: string, rep: DescribeBillBandwidthAndFluxListResponse) => void): Promise<DescribeBillBandwidthAndFluxListResponse>;
    /**
     * 停止使用某个直播域名。
     */
    ForbidLiveDomain(req: ForbidLiveDomainRequest, cb?: (error: string, rep: ForbidLiveDomainResponse) => void): Promise<ForbidLiveDomainResponse>;
    /**
     * 创建转码规则，数量上限：50，需要先调用[CreateLiveTranscodeTemplate](/document/product/267/32646)接口创建转码模板，将返回的模板id绑定到流使用。
<br>转码相关文档：[直播转封装及转码](/document/product/267/32736)。
     */
    CreateLiveTranscodeRule(req: CreateLiveTranscodeRuleRequest, cb?: (error: string, rep: CreateLiveTranscodeRuleResponse) => void): Promise<CreateLiveTranscodeRuleResponse>;
    /**
     * 删除直播时移规则。
     */
    DeleteLiveTimeShiftRule(req: DeleteLiveTimeShiftRuleRequest, cb?: (error: string, rep: DeleteLiveTimeShiftRuleResponse) => void): Promise<DeleteLiveTimeShiftRuleResponse>;
    /**
     * 将正在运行的拉流转推任务进行重启。
注意：
1. 重启任务会造成推流中断。
2. 点播源任务的重启，会根据VodRefreshType决定是续播还是从头开始播。
     */
    RestartLivePullStreamTask(req: RestartLivePullStreamTaskRequest, cb?: (error: string, rep: RestartLivePullStreamTaskResponse) => void): Promise<RestartLivePullStreamTaskResponse>;
    /**
     * 获取直播垫片模板。
     */
    DescribeLivePadTemplates(req?: DescribeLivePadTemplatesRequest, cb?: (error: string, rep: DescribeLivePadTemplatesResponse) => void): Promise<DescribeLivePadTemplatesResponse>;
    /**
     * 获取水印规则列表。
     */
    DescribeLiveWatermarkRules(req?: DescribeLiveWatermarkRulesRequest, cb?: (error: string, rep: DescribeLiveWatermarkRulesResponse) => void): Promise<DescribeLiveWatermarkRulesResponse>;
    /**
     * 获取直播垫片规则列表。
     */
    DescribeLivePadRules(req?: DescribeLivePadRulesRequest, cb?: (error: string, rep: DescribeLivePadRulesResponse) => void): Promise<DescribeLivePadRulesResponse>;
    /**
     * 该接口用来删除导播台中的输入源信息。
     */
    DeleteCasterInputInfo(req: DeleteCasterInputInfoRequest, cb?: (error: string, rep: DeleteCasterInputInfoResponse) => void): Promise<DeleteCasterInputInfoResponse>;
    /**
     * 注：DeleteLiveRecord 接口仅用于删除录制任务记录，不具备停止录制的功能，也不能删除正在进行中的录制。如果需要停止录制任务，请使用终止录制[StopLiveRecord](/document/product/267/30146) 接口。
     */
    DeleteLiveRecord(req: DeleteLiveRecordRequest, cb?: (error: string, rep: DeleteLiveRecordResponse) => void): Promise<DeleteLiveRecordResponse>;
    /**
     * 该接口用来查询直播流监播任务配置的列表信息。
     */
    DescribeLiveStreamMonitorList(req: DescribeLiveStreamMonitorListRequest, cb?: (error: string, rep: DescribeLiveStreamMonitorListResponse) => void): Promise<DescribeLiveStreamMonitorListResponse>;
    /**
     * 创建截图规则，需要先调用[CreateLiveSnapshotTemplate](/document/product/267/32624)接口创建截图模板，然后将返回的模板 ID 绑定到流进行使用。
<br>截图相关文档：[直播截图](/document/product/267/32737)。
注意：单个域名仅支持关联一个截图模板。
     */
    CreateLiveSnapshotRule(req: CreateLiveSnapshotRuleRequest, cb?: (error: string, rep: CreateLiveSnapshotRuleResponse) => void): Promise<CreateLiveSnapshotRuleResponse>;
    /**
     * 创建直播时移模板。
     */
    CreateLiveTimeShiftTemplate(req: CreateLiveTimeShiftTemplateRequest, cb?: (error: string, rep: CreateLiveTimeShiftTemplateResponse) => void): Promise<CreateLiveTimeShiftTemplateResponse>;
    /**
     * 该接口用来删除直播流监播任务。
     */
    DeleteLiveStreamMonitor(req: DeleteLiveStreamMonitorRequest, cb?: (error: string, rep: DeleteLiveStreamMonitorResponse) => void): Promise<DeleteLiveStreamMonitorResponse>;
    /**
     * 查询导播台信息接口，用来查询导播台状态、描述、输出长、宽等信息
     */
    DescribeCaster(req: DescribeCasterRequest, cb?: (error: string, rep: DescribeCasterResponse) => void): Promise<DescribeCasterResponse>;
    /**
     * 查询使用 CreateLivePullStreamTask 接口创建的直播拉流任务。
排序方式：默认按更新时间 倒序排列。
     */
    DescribeLivePullStreamTasks(req: DescribeLivePullStreamTasksRequest, cb?: (error: string, rep: DescribeLivePullStreamTasksResponse) => void): Promise<DescribeLivePullStreamTasksResponse>;
    /**
     * 该接口用来停止导播台的主监输出。
停止主监后，对应的推流到腾讯云直播源站和推流到其他第三方平台均将会停止。
     */
    StopCasterPgm(req: StopCasterPgmRequest, cb?: (error: string, rep: StopCasterPgmResponse) => void): Promise<StopCasterPgmResponse>;
    /**
     * 该接口为监控数据接口，数据采集及统计方式与计费数据不同，仅供运营分析使用，不能用于计费对账参考。
查询某段时间内每个国家地区每个省份每个运营商的平均每秒流量，总流量，总请求数信息。
     */
    DescribeProIspPlaySumInfoList(req: DescribeProIspPlaySumInfoListRequest, cb?: (error: string, rep: DescribeProIspPlaySumInfoListResponse) => void): Promise<DescribeProIspPlaySumInfoListResponse>;
    /**
     * 该接口为监控数据接口，数据采集及统计方式与计费数据不同，仅供运营分析使用，不能用于计费对账参考。
输入某个时间点（1分钟维度），查询该时间点所有流的下行信息。
     */
    DescribeAllStreamPlayInfoList(req: DescribeAllStreamPlayInfoListRequest, cb?: (error: string, rep: DescribeAllStreamPlayInfoListResponse) => void): Promise<DescribeAllStreamPlayInfoListResponse>;
    /**
     * 查询播放鉴权key。
     */
    DescribeLivePlayAuthKey(req: DescribeLivePlayAuthKeyRequest, cb?: (error: string, rep: DescribeLivePlayAuthKeyResponse) => void): Promise<DescribeLivePlayAuthKeyResponse>;
    /**
     * 该接口用来将预监画面的布局、水印、字幕等配置，复制到主监画面中。
该接口使用时，预监任务需处于运行状态。
     */
    CreateCasterPgmFromPvw(req: CreateCasterPgmFromPvwRequest, cb?: (error: string, rep: CreateCasterPgmFromPvwResponse) => void): Promise<CreateCasterPgmFromPvwResponse>;
    /**
     * 该接口用来获取所有的转场名称及其对应的素材url。
     */
    DescribeCasterTransitionTypes(req: DescribeCasterTransitionTypesRequest, cb?: (error: string, rep: DescribeCasterTransitionTypesResponse) => void): Promise<DescribeCasterTransitionTypesResponse>;
    /**
     * 查询导播台PVW任务和PGM任务的展示信息，包括使用的布局、水印、字幕等信息。
     */
    DescribeCasterDisplayInfo(req: DescribeCasterDisplayInfoRequest, cb?: (error: string, rep: DescribeCasterDisplayInfoResponse) => void): Promise<DescribeCasterDisplayInfoResponse>;
    /**
     * 该接口用来修改直播流监播任务的配置。
     */
    ModifyLiveStreamMonitor(req: ModifyLiveStreamMonitorRequest, cb?: (error: string, rep: ModifyLiveStreamMonitorResponse) => void): Promise<ModifyLiveStreamMonitorResponse>;
    /**
     * 本接口用来查询当前APPID导播台业务状态
     */
    DescribeCasterUserStatus(req?: DescribeCasterUserStatusRequest, cb?: (error: string, rep: DescribeCasterUserStatusResponse) => void): Promise<DescribeCasterUserStatusResponse>;
    /**
     * 返回直播中、无推流或者禁播等状态。

使用建议：
该接口提供实时流状态查询功能，鉴于网络抖动等一些不可抗因素，使用该接口作为判断主播是否开播等重要业务场景时，请参考以下使用建议。
1. 优先使用业务自身的房间开关播逻辑，判断主播是否在线，譬如客户端开播信令和主播在线心跳等。
2. 对于没有房间管理的直播场景，可以结合以下方案综合判断。
2.1 根据[推断流事件通知](/document/product/267/20388) 判断主播在线状态。
2.2 通过定时（间隔>1min）查询[直播中的流接口](/document/api/267/20472)，判断主播是否在线。
2.3 通过 本接口 查询直播流状态，判断主播是否在线。
2.4 以上任一方式判断为在线，都认为主播开播中，并且接口查询超时或解析异常时，也默认为在线，减少对业务的影响。
     */
    DescribeLiveStreamState(req: DescribeLiveStreamStateRequest, cb?: (error: string, rep: DescribeLiveStreamStateResponse) => void): Promise<DescribeLiveStreamStateResponse>;
    /**
     * 该接口用来查询导播台的输入源信息列表。
     */
    DescribeCasterInputInfos(req: DescribeCasterInputInfosRequest, cb?: (error: string, rep: DescribeCasterInputInfosResponse) => void): Promise<DescribeCasterInputInfosResponse>;
    /**
     * 删除录制模板。
     */
    DeleteLiveRecordTemplate(req: DeleteLiveRecordTemplateRequest, cb?: (error: string, rep: DeleteLiveRecordTemplateResponse) => void): Promise<DeleteLiveRecordTemplateResponse>;
    /**
     * 该接口用来复制导播台配置
     */
    CopyCaster(req: CopyCasterRequest, cb?: (error: string, rep: CopyCasterResponse) => void): Promise<CopyCasterResponse>;
    /**
     * 该接口用来修改已经设置过的输入源信息，如源地址，源类型等。
设置前，需保证待修改的输入源已经存在。若不存在，需使用AddCasterInputInfo接口。
     */
    ModifyCasterInputInfo(req: ModifyCasterInputInfoRequest, cb?: (error: string, rep: ModifyCasterInputInfoResponse) => void): Promise<ModifyCasterInputInfoResponse>;
    /**
     * 该接口用来删除导播台某个Index对应的水印。
     */
    DeleteCasterMarkPicInfo(req: DeleteCasterMarkPicInfoRequest, cb?: (error: string, rep: DeleteCasterMarkPicInfoResponse) => void): Promise<DeleteCasterMarkPicInfoResponse>;
    /**
     * 该接口用来删除导播台的文本配置。
     */
    DeleteCasterMarkWordInfo(req: DeleteCasterMarkWordInfoRequest, cb?: (error: string, rep: DeleteCasterMarkWordInfoResponse) => void): Promise<DeleteCasterMarkWordInfoResponse>;
    /**
     * 返回正在直播中的流列表。适用于推流成功后查询在线流信息。

注意：
1. 该接口仅提供辅助查询在线流列表功能，业务重要场景不可强依赖该接口。
2. 该接口仅适用于流数少于2万路的情况，对于流数较大用户请联系售后。
     */
    DescribeBackupStreamList(req: DescribeBackupStreamListRequest, cb?: (error: string, rep: DescribeBackupStreamListResponse) => void): Promise<DescribeBackupStreamListResponse>;
    /**
     * 取消直播流设置的延时配置，恢复实时直播画面。
     */
    ResumeDelayLiveStream(req: ResumeDelayLiveStreamRequest, cb?: (error: string, rep: ResumeDelayLiveStreamResponse) => void): Promise<ResumeDelayLiveStreamResponse>;
    /**
     * 创建一个在指定时间启动、结束的录制任务，并使用指定录制模板ID对应的配置进行录制。
- 使用前提
1. 录制文件存放于点播平台或对象存储内，所以用户如需使用录制功能，需首先自行开通点播服务或对象存储服务。
2. 录制文件存放后相关费用（含存储以及下行播放流量）按照点播平台计费方式收取，具体请参考[对应文档](https://cloud.tencent.com/document/product/266/2837)。
- 注意事项
1. 断流会结束当前录制并生成录制文件。在结束时间到达之前任务仍然有效，期间只要正常推流都会正常录制，与是否多次推、断流无关。
2. 使用上避免创建时间段相互重叠的录制任务。若同一条流当前存在多个时段重叠的任务，为避免重复录制系统将启动最多3个录制任务。
3. 创建的录制任务记录在平台侧只保留3个月。
4. 当前录制任务管理API（[CreateRecordTask](https://cloud.tencent.com/document/product/267/45983)/[StopRecordTask](https://cloud.tencent.com/document/product/267/45981)/[DeleteRecordTask](https://cloud.tencent.com/document/product/267/45982)）与旧API（CreateLiveRecord/StopLiveRecord/DeleteLiveRecord）不兼容，两套接口不能混用。
5. 避免 创建录制任务 与 推流 操作同时进行，可能导致因录制任务未生效而引起任务延迟启动问题，两者操作间隔建议大于3秒。
     */
    CreateRecordTask(req: CreateRecordTaskRequest, cb?: (error: string, rep: CreateRecordTaskResponse) => void): Promise<CreateRecordTaskResponse>;
    /**
     * 创建转码模板，数量上限：50，成功返回模板id后，需要调用[CreateLiveTranscodeRule](/document/product/267/32647)接口，将返回的模板id绑定到流使用。
<br>转码相关文档：[直播转封装及转码](/document/product/267/32736)。
     */
    CreateLiveTranscodeTemplate(req: CreateLiveTranscodeTemplateRequest, cb?: (error: string, rep: CreateLiveTranscodeTemplateResponse) => void): Promise<CreateLiveTranscodeTemplateResponse>;
    /**
     * 获取证书信息列表
     */
    DescribeLiveCerts(req?: DescribeLiveCertsRequest, cb?: (error: string, rep: DescribeLiveCertsResponse) => void): Promise<DescribeLiveCertsResponse>;
    /**
     * 获取转码规则列表
     */
    DescribeLiveTranscodeRules(req: DescribeLiveTranscodeRulesRequest, cb?: (error: string, rep: DescribeLiveTranscodeRulesResponse) => void): Promise<DescribeLiveTranscodeRulesResponse>;
    /**
     * 启用状态为停用的直播域名。
     */
    EnableLiveDomain(req: EnableLiveDomainRequest, cb?: (error: string, rep: EnableLiveDomainResponse) => void): Promise<EnableLiveDomainResponse>;
    /**
     * 该接口用来取消混流。用法与 mix_streamv2.cancel_mix_stream 基本一致。
     */
    CancelCommonMixStream(req: CancelCommonMixStreamRequest, cb?: (error: string, rep: CancelCommonMixStreamResponse) => void): Promise<CancelCommonMixStreamResponse>;
    /**
     * 使用该接口停止垫片流。
     */
    StopLivePadProcessor(req: StopLivePadProcessorRequest, cb?: (error: string, rep: StopLivePadProcessorResponse) => void): Promise<StopLivePadProcessorResponse>;
    /**
     * 查询用户套餐包总量、使用量、剩余量、包状态、购买时间和过期时间等。
     */
    DescribeLivePackageInfo(req: DescribeLivePackageInfoRequest, cb?: (error: string, rep: DescribeLivePackageInfoResponse) => void): Promise<DescribeLivePackageInfoResponse>;
    /**
     * 创建临时拉流转推任务，目前限制添加10条任务。
该接口已下线,请使用新接口 CreateLivePullStreamTask。

注意：该接口用于创建临时拉流转推任务，
拉流源地址即 FromUrl 可以是腾讯或非腾讯数据源，
但转推目标地址即 ToUrl 目前限制为已注册的腾讯直播域名。
     */
    CreatePullStreamConfig(req: CreatePullStreamConfigRequest, cb?: (error: string, rep: CreatePullStreamConfigResponse) => void): Promise<CreatePullStreamConfigResponse>;
    /**
     * 查询转码任务数。
     */
    DescribeTranscodeTaskNum(req: DescribeTranscodeTaskNumRequest, cb?: (error: string, rep: DescribeTranscodeTaskNumResponse) => void): Promise<DescribeTranscodeTaskNumResponse>;
    /**
     * 该接口为监控数据接口，数据采集及统计方式与计费数据不同，仅供运营分析使用，不能用于计费对账参考。
查询所有实时流的推流信息，包括客户端IP，服务端IP，帧率，码率，域名，开始推流时间。
     */
    DescribeLiveStreamPushInfoList(req: DescribeLiveStreamPushInfoListRequest, cb?: (error: string, rep: DescribeLiveStreamPushInfoListResponse) => void): Promise<DescribeLiveStreamPushInfoListResponse>;
    /**
     * 删除截图模板
     */
    DeleteLiveSnapshotTemplate(req: DeleteLiveSnapshotTemplateRequest, cb?: (error: string, rep: DeleteLiveSnapshotTemplateResponse) => void): Promise<DeleteLiveSnapshotTemplateResponse>;
}
