import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { CreateLiveSnapshotRuleRequest, EnableLiveDomainResponse, CreateLiveCertRequest, StopRecordTaskResponse, DescribeDeliverBandwidthListResponse, DeleteLiveRecordRuleRequest, ResumeLiveStreamRequest, DeleteLiveTranscodeTemplateResponse, StopScreenshotTaskRequest, DescribeBillBandwidthAndFluxListResponse, CreateScreenshotTaskResponse, DeleteLiveCallbackRuleResponse, ResumeDelayLiveStreamRequest, DescribeLiveWatermarkRulesResponse, DescribeLiveCallbackTemplateResponse, CreateLivePullStreamTaskRequest, DeleteLiveSnapshotTemplateRequest, DescribeGroupProIspPlayInfoListResponse, DescribeUploadStreamNumsResponse, DeleteLiveRecordTemplateRequest, DeleteLiveCallbackTemplateResponse, CreateScreenshotTaskRequest, UnBindLiveDomainCertResponse, ModifyLivePlayAuthKeyRequest, DescribeLiveDelayInfoListRequest, DeleteLiveTranscodeRuleResponse, DescribeStreamPlayInfoListResponse, DescribeScreenShotSheetNumListResponse, DescribeLiveCertRequest, CreateLivePullStreamTaskResponse, ModifyLivePushAuthKeyRequest, DeleteLiveCallbackTemplateRequest, DescribeLiveStreamStateRequest, DescribeLivePlayAuthKeyResponse, DescribeLiveCallbackTemplatesRequest, DescribeLiveTranscodeRulesRequest, DeleteLiveSnapshotRuleRequest, DescribePlayErrorCodeDetailInfoListRequest, DeleteLivePullStreamTaskRequest, DescribePushBandwidthAndFluxListResponse, DescribeUploadStreamNumsRequest, DescribeLiveSnapshotRulesResponse, DescribeLiveTranscodeDetailInfoResponse, DescribeLiveDomainRequest, DescribeLiveStreamPublishedListRequest, DeleteLiveTranscodeRuleRequest, DescribePushBandwidthAndFluxListRequest, CreateLiveRecordRuleRequest, DescribeLiveSnapshotTemplatesRequest, AddLiveWatermarkResponse, DescribeLiveStreamPushInfoListResponse, DescribeLiveDomainCertResponse, DescribeLiveRecordTemplateRequest, ModifyLiveDomainCertRequest, CreateLiveWatermarkRuleResponse, ModifyLiveSnapshotTemplateResponse, DeleteScreenshotTaskRequest, DescribeProIspPlaySumInfoListRequest, DescribeDeliverBandwidthListRequest, DescribeScreenshotTaskResponse, AddLiveWatermarkRequest, ModifyLiveTranscodeTemplateResponse, ModifyLiveRecordTemplateResponse, ModifyLivePlayDomainRequest, DeleteLiveRecordTemplateResponse, DescribeLiveWatermarkRequest, DescribeLiveDomainCertRequest, DescribeLiveStreamEventListRequest, DescribePullStreamConfigsRequest, DescribePlayErrorCodeSumInfoListResponse, UnBindLiveDomainCertRequest, DeleteLiveRecordResponse, DescribeScreenShotSheetNumListRequest, ForbidLiveStreamRequest, DescribeLiveDomainsResponse, ModifyLivePullStreamTaskRequest, CreateLiveRecordResponse, UpdateLiveWatermarkResponse, DescribeRecordTaskRequest, CreateLiveTranscodeTemplateResponse, DescribeVisitTopSumInfoListRequest, ModifyPullStreamStatusResponse, ModifyLivePlayDomainResponse, CancelCommonMixStreamResponse, DescribeConcurrentRecordStreamNumResponse, DescribeLiveCertsResponse, DescribeProvinceIspPlayInfoListResponse, DescribeLiveRecordTemplatesResponse, DescribeScreenshotTaskRequest, DescribeCallbackRecordsListRequest, DescribeLiveCallbackTemplatesResponse, ModifyLivePlayAuthKeyResponse, CreateLiveCallbackTemplateRequest, DescribeTopClientIpSumInfoListResponse, DropLiveStreamResponse, DescribeLiveStreamStateResponse, DeletePullStreamConfigResponse, DeleteLiveWatermarkRuleRequest, DeleteRecordTaskResponse, DescribeLiveWatermarksRequest, DescribeLivePackageInfoResponse, CreateLiveTranscodeRuleRequest, DescribeLiveWatermarkRulesRequest, DropLiveStreamRequest, StopLiveRecordResponse, UpdateLiveWatermarkRequest, CreateCommonMixStreamRequest, CreateLiveCertResponse, AddDelayLiveStreamRequest, DescribeGroupProIspPlayInfoListRequest, ModifyPullStreamStatusRequest, DescribeStreamDayPlayInfoListRequest, DescribeLiveSnapshotTemplateResponse, DescribeLiveTranscodeRulesResponse, DescribeLiveDomainRefererResponse, AddLiveDomainRequest, DescribeLivePackageInfoRequest, CreatePullStreamConfigRequest, DescribeLiveCertsRequest, DescribeLivePullStreamTasksRequest, AddLiveDomainResponse, DescribeHttpStatusInfoListRequest, ModifyPullStreamConfigResponse, ModifyLiveCallbackTemplateRequest, DescribeProvinceIspPlayInfoListRequest, DescribeLivePlayAuthKeyRequest, DeleteLivePullStreamTaskResponse, DescribeLiveForbidStreamListResponse, DescribeStreamPushInfoListRequest, DescribeLivePullStreamTasksResponse, ModifyLivePushAuthKeyResponse, DescribeLiveWatermarkResponse, ResumeLiveStreamResponse, DescribeLiveStreamOnlineListResponse, DeletePullStreamConfigRequest, ModifyPullStreamConfigRequest, DescribeStreamPushInfoListResponse, DescribeLiveStreamPushInfoListRequest, DescribeLiveWatermarksResponse, DescribeLiveForbidStreamListRequest, DescribeLiveDomainPlayInfoListRequest, CreatePullStreamConfigResponse, BindLiveDomainCertRequest, DescribeTopClientIpSumInfoListRequest, CreateLiveCallbackRuleRequest, DeleteLiveWatermarkRuleResponse, DescribeCallbackRecordsListResponse, ModifyLiveCertResponse, DescribePlayErrorCodeSumInfoListRequest, DescribeLiveTranscodeDetailInfoRequest, ModifyLiveDomainRefererResponse, DeleteLiveWatermarkRequest, DescribeLiveDomainsRequest, DeleteLiveSnapshotRuleResponse, CreateLiveRecordRequest, ForbidLiveStreamResponse, DescribeLogDownloadListResponse, CancelCommonMixStreamRequest, DescribeRecordTaskResponse, DescribeLiveDelayInfoListResponse, DeleteLiveTranscodeTemplateRequest, DescribeLiveCallbackRulesRequest, DescribeLiveTranscodeTemplateResponse, CreateLiveSnapshotTemplateResponse, DescribeConcurrentRecordStreamNumRequest, DeleteScreenshotTaskResponse, ModifyLiveCertRequest, ModifyLiveRecordTemplateRequest, DescribeAreaBillBandwidthAndFluxListResponse, ForbidLiveDomainRequest, DescribeLiveRecordRulesRequest, DescribePlayErrorCodeDetailInfoListResponse, CreateLiveRecordTemplateResponse, DeleteLiveRecordRequest, DescribeLiveSnapshotTemplatesResponse, StopRecordTaskRequest, DescribeLiveDomainRefererRequest, DescribeStreamPlayInfoListRequest, CreateLiveTranscodeTemplateRequest, DescribeLiveStreamPublishedListResponse, DeleteLiveDomainRequest, ForbidLiveDomainResponse, AddDelayLiveStreamResponse, DescribeLiveTranscodeTemplatesResponse, DeleteLiveCallbackRuleRequest, ModifyLiveTranscodeTemplateRequest, ModifyLiveDomainCertResponse, ModifyLiveCallbackTemplateResponse, EnableLiveDomainRequest, DescribeAllStreamPlayInfoListResponse, DescribeLiveTranscodeTotalInfoResponse, DescribeLiveSnapshotRulesRequest, CreateRecordTaskRequest, CreateLiveTranscodeRuleResponse, CreateLiveCallbackRuleResponse, DescribeLiveRecordTemplateResponse, DescribeAreaBillBandwidthAndFluxListRequest, BindLiveDomainCertResponse, DescribeLiveTranscodeTemplatesRequest, DescribeBillBandwidthAndFluxListRequest, DescribeLiveRecordRulesResponse, CreateLiveSnapshotTemplateRequest, DescribeLiveDomainPlayInfoListResponse, DescribeLiveStreamOnlineListRequest, DeleteLiveSnapshotTemplateResponse, DescribeLiveSnapshotTemplateRequest, DeleteLiveCertResponse, CreateCommonMixStreamResponse, ModifyLiveDomainRefererRequest, CreateLiveCallbackTemplateResponse, DescribeLivePushAuthKeyRequest, DescribeLiveCallbackTemplateRequest, ModifyLiveSnapshotTemplateRequest, DescribeLiveCertResponse, CreateLiveRecordRuleResponse, DescribeLiveTranscodeTemplateRequest, DescribeLogDownloadListRequest, DeleteLiveWatermarkResponse, DescribeLivePushAuthKeyResponse, CreateLiveWatermarkRuleRequest, DescribeLiveRecordTemplatesRequest, DescribeAllStreamPlayInfoListRequest, DescribeLiveDomainResponse, DeleteRecordTaskRequest, DescribeStreamDayPlayInfoListResponse, StopLiveRecordRequest, DescribeVisitTopSumInfoListResponse, ModifyLivePullStreamTaskResponse, CreateLiveSnapshotRuleResponse, DescribeLiveStreamEventListResponse, DescribePullStreamConfigsResponse, DescribeLiveCallbackRulesResponse, DescribeLiveTranscodeTotalInfoRequest, StopScreenshotTaskResponse, CreateRecordTaskResponse, ResumeDelayLiveStreamResponse, DeleteLiveDomainResponse, CreateLiveRecordTemplateRequest, DescribeProIspPlaySumInfoListResponse, DeleteLiveCertRequest, DescribeHttpStatusInfoListResponse, DeleteLiveRecordRuleResponse } from "./live_models";
/**
 * live client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 断开推流连接，但可以重新推流。
注：对已经不活跃的流，调用该断流接口时，接口返回成功。
     */
    DropLiveStream(req: DropLiveStreamRequest, cb?: (error: string, rep: DropLiveStreamResponse) => void): Promise<DropLiveStreamResponse>;
    /**
     * 查询水印列表。
     */
    DescribeLiveWatermarks(req?: DescribeLiveWatermarksRequest, cb?: (error: string, rep: DescribeLiveWatermarksResponse) => void): Promise<DescribeLiveWatermarksResponse>;
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
     * 修改截图模板配置。
     */
    ModifyLiveSnapshotTemplate(req: ModifyLiveSnapshotTemplateRequest, cb?: (error: string, rep: ModifyLiveSnapshotTemplateResponse) => void): Promise<ModifyLiveSnapshotTemplateResponse>;
    /**
     * 查询指定时间段范围内启动和结束的录制任务列表。
- 使用前提
1. 仅用于查询由 CreateRecordTask 接口创建的录制任务。
2. 不能查询被 DeleteRecordTask 接口删除以及已过期（平台侧保留3个月）的录制任务。

     */
    DescribeRecordTask(req: DescribeRecordTaskRequest, cb?: (error: string, rep: DescribeRecordTaskResponse) => void): Promise<DescribeRecordTaskResponse>;
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
     * 查询某段时间内5分钟粒度的各播放http状态码的个数。
备注：数据延迟1小时，如10:00-10:59点的数据12点才能查到。
     */
    DescribeHttpStatusInfoList(req: DescribeHttpStatusInfoListRequest, cb?: (error: string, rep: DescribeHttpStatusInfoListResponse) => void): Promise<DescribeHttpStatusInfoListResponse>;
    /**
     * 查询某省份某运营商下行播放数据，包括带宽，流量，请求数，并发连接数信息。
     */
    DescribeProvinceIspPlayInfoList(req: DescribeProvinceIspPlayInfoListRequest, cb?: (error: string, rep: DescribeProvinceIspPlayInfoListResponse) => void): Promise<DescribeProvinceIspPlayInfoListResponse>;
    /**
     * 修改播放域名信息。
     */
    ModifyLivePlayDomain(req: ModifyLivePlayDomainRequest, cb?: (error: string, rep: ModifyLivePlayDomainResponse) => void): Promise<ModifyLivePlayDomainResponse>;
    /**
     * 查询流id的上行推流质量数据，包括音视频的帧率，码率，流逝时间，编码格式等。
     */
    DescribeStreamPushInfoList(req: DescribeStreamPushInfoListRequest, cb?: (error: string, rep: DescribeStreamPushInfoListResponse) => void): Promise<DescribeStreamPushInfoListResponse>;
    /**
     * 获取截图规则列表
     */
    DescribeLiveSnapshotRules(req?: DescribeLiveSnapshotRulesRequest, cb?: (error: string, rep: DescribeLiveSnapshotRulesResponse) => void): Promise<DescribeLiveSnapshotRulesResponse>;
    /**
     * 删除转码模板。
     */
    DeleteLiveTranscodeTemplate(req: DeleteLiveTranscodeTemplateRequest, cb?: (error: string, rep: DeleteLiveTranscodeTemplateResponse) => void): Promise<DeleteLiveTranscodeTemplateResponse>;
    /**
     * 查询直播域名 Referer 黑白名单配置。
由于 Referer 信息包含在 http 协议中，在开启配置后，播放协议为 rtmp 或 WebRTC 不会校验 Referer 配置，仍可正常播放。如需配置 Referer 鉴权建议使用 http-flv 或 http-hls 协议播放。
     */
    DescribeLiveDomainReferer(req: DescribeLiveDomainRefererRequest, cb?: (error: string, rep: DescribeLiveDomainRefererResponse) => void): Promise<DescribeLiveDomainRefererResponse>;
    /**
     * 查询某段时间top n客户端ip汇总信息（暂支持top 1000）
     */
    DescribeTopClientIpSumInfoList(req: DescribeTopClientIpSumInfoListRequest, cb?: (error: string, rep: DescribeTopClientIpSumInfoListResponse) => void): Promise<DescribeTopClientIpSumInfoListResponse>;
    /**
     * 修改直播拉流配置的状态。
     */
    ModifyPullStreamStatus(req: ModifyPullStreamStatusRequest, cb?: (error: string, rep: ModifyPullStreamStatusResponse) => void): Promise<ModifyPullStreamStatusResponse>;
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
     * 修改域名和证书绑定信息
     */
    ModifyLiveDomainCert(req: ModifyLiveDomainCertRequest, cb?: (error: string, rep: ModifyLiveDomainCertResponse) => void): Promise<ModifyLiveDomainCertResponse>;
    /**
     * 查询某时间段top n的域名或流id信息（暂支持top 1000）。
     */
    DescribeVisitTopSumInfoList(req: DescribeVisitTopSumInfoListRequest, cb?: (error: string, rep: DescribeVisitTopSumInfoListResponse) => void): Promise<DescribeVisitTopSumInfoListResponse>;
    /**
     * 修改录制模板配置。
     */
    ModifyLiveRecordTemplate(req: ModifyLiveRecordTemplateRequest, cb?: (error: string, rep: ModifyLiveRecordTemplateResponse) => void): Promise<ModifyLiveRecordTemplateResponse>;
    /**
     * 获取域名证书信息。
     */
    DescribeLiveDomainCert(req: DescribeLiveDomainCertRequest, cb?: (error: string, rep: DescribeLiveDomainCertResponse) => void): Promise<DescribeLiveDomainCertResponse>;
    /**
     * 添加水印，成功返回水印 ID 后，需要调用[CreateLiveWatermarkRule](/document/product/267/32629)接口将水印 ID 绑定到流使用。
水印数量上限 100，超过后需要先删除，再添加。
     */
    AddLiveWatermark(req: AddLiveWatermarkRequest, cb?: (error: string, rep: AddLiveWatermarkResponse) => void): Promise<AddLiveWatermarkResponse>;
    /**
     * 海外分区直播计费带宽和流量数据查询。
     */
    DescribeAreaBillBandwidthAndFluxList(req: DescribeAreaBillBandwidthAndFluxListRequest, cb?: (error: string, rep: DescribeAreaBillBandwidthAndFluxListResponse) => void): Promise<DescribeAreaBillBandwidthAndFluxListResponse>;
    /**
     * 删除水印规则
     */
    DeleteLiveWatermarkRule(req: DeleteLiveWatermarkRuleRequest, cb?: (error: string, rep: DeleteLiveWatermarkRuleResponse) => void): Promise<DeleteLiveWatermarkRuleResponse>;
    /**
     * 删除回调规则。
     */
    DeleteLiveCallbackRule(req: DeleteLiveCallbackRuleRequest, cb?: (error: string, rep: DeleteLiveCallbackRuleResponse) => void): Promise<DeleteLiveCallbackRuleResponse>;
    /**
     * 更新拉流配置。
     */
    ModifyPullStreamConfig(req: ModifyPullStreamConfigRequest, cb?: (error: string, rep: ModifyPullStreamConfigResponse) => void): Promise<ModifyPullStreamConfigResponse>;
    /**
     * 创建截图模板，成功返回模板id后，需要调用[CreateLiveSnapshotRule](/document/product/267/32625)接口，将模板id绑定到流使用。
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
     * 删除回调模板。
     */
    DeleteLiveCallbackTemplate(req: DeleteLiveCallbackTemplateRequest, cb?: (error: string, rep: DeleteLiveCallbackTemplateResponse) => void): Promise<DeleteLiveCallbackTemplateResponse>;
    /**
     * 查询直播推流鉴权key
     */
    DescribeLivePushAuthKey(req: DescribeLivePushAuthKeyRequest, cb?: (error: string, rep: DescribeLivePushAuthKeyResponse) => void): Promise<DescribeLivePushAuthKeyResponse>;
    /**
     * 删除直播拉流配置。
     */
    DeletePullStreamConfig(req: DeletePullStreamConfigRequest, cb?: (error: string, rep: DeletePullStreamConfigResponse) => void): Promise<DeletePullStreamConfigResponse>;
    /**
     * 获取单个录制模板。
     */
    DescribeLiveRecordTemplate(req: DescribeLiveRecordTemplateRequest, cb?: (error: string, rep: DescribeLiveRecordTemplateResponse) => void): Promise<DescribeLiveRecordTemplateResponse>;
    /**
     * 提前结束截图，中止运行中的截图任务。任务被成功终止后，本次任务将不再启动。
     */
    StopScreenshotTask(req: StopScreenshotTaskRequest, cb?: (error: string, rep: StopScreenshotTaskResponse) => void): Promise<StopScreenshotTaskResponse>;
    /**
     * 查询直播拉流配置。
     */
    DescribePullStreamConfigs(req: DescribePullStreamConfigsRequest, cb?: (error: string, rep: DescribePullStreamConfigsResponse) => void): Promise<DescribePullStreamConfigsResponse>;
    /**
     * 删除水印。
     */
    DeleteLiveWatermark(req: DeleteLiveWatermarkRequest, cb?: (error: string, rep: DeleteLiveWatermarkResponse) => void): Promise<DeleteLiveWatermarkResponse>;
    /**
     * 查询下行播放错误码信息。
     */
    DescribePlayErrorCodeSumInfoList(req: DescribePlayErrorCodeSumInfoListRequest, cb?: (error: string, rep: DescribePlayErrorCodeSumInfoListResponse) => void): Promise<DescribePlayErrorCodeSumInfoListResponse>;
    /**
     * 针对大型活动直播，通过对直播流设置延时来控制现场与观众播放画面的时间间隔，避免突发状况造成影响。

注意：如果在推流前设置延播，需要提前5分钟设置，目前该接口只支持流粒度。
     */
    AddDelayLiveStream(req: AddDelayLiveStreamRequest, cb?: (error: string, rep: AddDelayLiveStreamResponse) => void): Promise<AddDelayLiveStreamResponse>;
    /**
     * 直播上行路数查询
     */
    DescribeUploadStreamNums(req: DescribeUploadStreamNumsRequest, cb?: (error: string, rep: DescribeUploadStreamNumsResponse) => void): Promise<DescribeUploadStreamNumsResponse>;
    /**
     * 查询天维度每条流的播放数据，包括总流量等。
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
     * 查询转码总量数据，可查询近30天内数据。
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
     * 创建直播拉流任务。支持将外部已有的点播文件，或者直播源拉取过来转推到直播系统。
注意：
1. 默认支持任务数上限20个，如有特殊需求，可通过提单到售后进行评估增加上限。
2. 目前仅支持推流到腾讯云直播，暂不支持推到第三方。
3. 源流视频编码目前只支持: H264, H265。其他编码格式建议先进行转码处理。
4. 源流音频编码目前只支持: AAC。其他编码格式建议先进行转码处理。
5. 过期不用的任务需自行清理，未清理的过期任务也会占用上限额度，如需要自动清理过期任务，可提单给售后进行配置。
6. 拉流转推功能为计费增值服务，计费规则详情可参见[计费文档](https://cloud.tencent.com/document/product/267/53308)。
7. 拉流转推功能仅提供内容拉取与推送服务，请确保内容已获得授权并符合内容传播相关的法律法规。若内容有侵权或违规相关问题，云直播会停止相关的功能服务并保留追究法律责任的权利。
     */
    CreateLivePullStreamTask(req: CreateLivePullStreamTaskRequest, cb?: (error: string, rep: CreateLivePullStreamTaskResponse) => void): Promise<CreateLivePullStreamTaskResponse>;
    /**
     * 获取证书信息
     */
    DescribeLiveCert(req: DescribeLiveCertRequest, cb?: (error: string, rep: DescribeLiveCertResponse) => void): Promise<DescribeLiveCertResponse>;
    /**
     * 修改证书
     */
    ModifyLiveCert(req: ModifyLiveCertRequest, cb?: (error: string, rep: ModifyLiveCertResponse) => void): Promise<ModifyLiveCertResponse>;
    /**
     * 根据域名状态、类型等信息查询用户的域名信息。
     */
    DescribeLiveDomains(req: DescribeLiveDomainsRequest, cb?: (error: string, rep: DescribeLiveDomainsResponse) => void): Promise<DescribeLiveDomainsResponse>;
    /**
     * 更新直播拉流任务。
1. 不支持修改目标地址，如需推到新地址，请创建新任务。
2. 不支持修改拉流源类型，如需更换，请创建新任务。
     */
    ModifyLivePullStreamTask(req: ModifyLivePullStreamTaskRequest, cb?: (error: string, rep: ModifyLivePullStreamTaskResponse) => void): Promise<ModifyLivePullStreamTaskResponse>;
    /**
     * 删除域名对应的证书
     */
    DeleteLiveCert(req: DeleteLiveCertRequest, cb?: (error: string, rep: DeleteLiveCertResponse) => void): Promise<DeleteLiveCertResponse>;
    /**
     * 创建回调模板，成功返回模板id后，需要调用[CreateLiveCallbackRule](/document/product/267/32638)接口将模板 ID 绑定到域名/路径使用。
<br>回调协议相关文档：[事件消息通知](/document/product/267/32744)。
注意：至少填写一个回调 URL。
     */
    CreateLiveCallbackTemplate(req: CreateLiveCallbackTemplateRequest, cb?: (error: string, rep: CreateLiveCallbackTemplateResponse) => void): Promise<CreateLiveCallbackTemplateResponse>;
    /**
     * 恢复某条流的推流。
     */
    ResumeLiveStream(req: ResumeLiveStreamRequest, cb?: (error: string, rep: ResumeLiveStreamResponse) => void): Promise<ResumeLiveStreamResponse>;
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
     * 查询使用 CreateLivePullStreamTask 接口创建的直播拉流任务。
排序方式：默认按更新时间 倒序排列。
     */
    DescribeLivePullStreamTasks(req: DescribeLivePullStreamTasksRequest, cb?: (error: string, rep: DescribeLivePullStreamTasksResponse) => void): Promise<DescribeLivePullStreamTasksResponse>;
    /**
     * 查询某段时间内每个国家地区每个省份每个运营商的平均每秒流量，总流量，总请求数信息。
     */
    DescribeProIspPlaySumInfoList(req: DescribeProIspPlaySumInfoListRequest, cb?: (error: string, rep: DescribeProIspPlaySumInfoListResponse) => void): Promise<DescribeProIspPlaySumInfoListResponse>;
    /**
     * 查询播放数据，支持按流名称查询详细播放数据，也可按播放域名查询详细总数据，数据延迟4分钟左右。
注意：按AppName查询请先联系工单申请，开通后配置生效预计需要5个工作日左右，具体时间以最终回复为准。
     */
    DescribeStreamPlayInfoList(req: DescribeStreamPlayInfoListRequest, cb?: (error: string, rep: DescribeStreamPlayInfoListResponse) => void): Promise<DescribeStreamPlayInfoListResponse>;
    /**
     * 添加证书
     */
    CreateLiveCert(req: CreateLiveCertRequest, cb?: (error: string, rep: CreateLiveCertResponse) => void): Promise<CreateLiveCertResponse>;
    /**
     * 获取转码规则列表
     */
    DescribeLiveTranscodeRules(req: DescribeLiveTranscodeRulesRequest, cb?: (error: string, rep: DescribeLiveTranscodeRulesResponse) => void): Promise<DescribeLiveTranscodeRulesResponse>;
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
     * 获取截图模板列表。
     */
    DescribeLiveSnapshotTemplates(req?: DescribeLiveSnapshotTemplatesRequest, cb?: (error: string, rep: DescribeLiveSnapshotTemplatesResponse) => void): Promise<DescribeLiveSnapshotTemplatesResponse>;
    /**
     * 说明：录制后的文件存放于点播平台。用户如需使用录制功能，需首先自行开通点播账号并确保账号可用。录制文件存放后，相关费用（含存储以及下行播放流量）按照点播平台计费方式收取，请参考对应文档。
     */
    StopLiveRecord(req: StopLiveRecordRequest, cb?: (error: string, rep: StopLiveRecordResponse) => void): Promise<StopLiveRecordResponse>;
    /**
     * 修改播放鉴权key
     */
    ModifyLivePlayAuthKey(req: ModifyLivePlayAuthKeyRequest, cb?: (error: string, rep: ModifyLivePlayAuthKeyResponse) => void): Promise<ModifyLivePlayAuthKeyResponse>;
    /**
     * 获取单个转码模板。
     */
    DescribeLiveTranscodeTemplate(req: DescribeLiveTranscodeTemplateRequest, cb?: (error: string, rep: DescribeLiveTranscodeTemplateResponse) => void): Promise<DescribeLiveTranscodeTemplateResponse>;
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
     * 支持查询某天或某段时间的转码详细信息。
     */
    DescribeLiveTranscodeDetailInfo(req: DescribeLiveTranscodeDetailInfoRequest, cb?: (error: string, rep: DescribeLiveTranscodeDetailInfoResponse) => void): Promise<DescribeLiveTranscodeDetailInfoResponse>;
    /**
     * 批量获取日志URL。
     */
    DescribeLogDownloadList(req: DescribeLogDownloadListRequest, cb?: (error: string, rep: DescribeLogDownloadListResponse) => void): Promise<DescribeLogDownloadListResponse>;
    /**
     * 获取录制规则列表
     */
    DescribeLiveRecordRules(req?: DescribeLiveRecordRulesRequest, cb?: (error: string, rep: DescribeLiveRecordRulesResponse) => void): Promise<DescribeLiveRecordRulesResponse>;
    /**
     * 获取直播延播列表。
     */
    DescribeLiveDelayInfoList(req?: DescribeLiveDelayInfoListRequest, cb?: (error: string, rep: DescribeLiveDelayInfoListResponse) => void): Promise<DescribeLiveDelayInfoListResponse>;
    /**
     * 删除录制规则。
     */
    DeleteLiveRecordRule(req: DeleteLiveRecordRuleRequest, cb?: (error: string, rep: DeleteLiveRecordRuleResponse) => void): Promise<DeleteLiveRecordRuleResponse>;
    /**
     * 查询直播域名信息。
     */
    DescribeLiveDomain(req: DescribeLiveDomainRequest, cb?: (error: string, rep: DescribeLiveDomainResponse) => void): Promise<DescribeLiveDomainResponse>;
    /**
     * 创建回调规则，需要先调用[CreateLiveCallbackTemplate](/document/product/267/32637)接口创建回调模板，将返回的模板id绑定到域名/路径进行使用。
<br>回调协议相关文档：[事件消息通知](/document/product/267/32744)。
     */
    CreateLiveCallbackRule(req: CreateLiveCallbackRuleRequest, cb?: (error: string, rep: CreateLiveCallbackRuleResponse) => void): Promise<CreateLiveCallbackRuleResponse>;
    /**
     * 域名绑定证书。
注意：需先调用添加证书接口进行证书添加。获取到证书Id后再调用该接口进行绑定。
     */
    BindLiveDomainCert(req: BindLiveDomainCertRequest, cb?: (error: string, rep: BindLiveDomainCertResponse) => void): Promise<BindLiveDomainCertResponse>;
    /**
     * 获取回调规则列表
     */
    DescribeLiveCallbackRules(req?: DescribeLiveCallbackRulesRequest, cb?: (error: string, rep: DescribeLiveCallbackRulesResponse) => void): Promise<DescribeLiveCallbackRulesResponse>;
    /**
     * 查询下行播放错误码信息，某段时间内1分钟粒度的各http错误码出现的次数，包括4xx，5xx。


     */
    DescribePlayErrorCodeDetailInfoList(req: DescribePlayErrorCodeDetailInfoListRequest, cb?: (error: string, rep: DescribePlayErrorCodeDetailInfoListResponse) => void): Promise<DescribePlayErrorCodeDetailInfoListResponse>;
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
     */
    ForbidLiveStream(req: ForbidLiveStreamRequest, cb?: (error: string, rep: ForbidLiveStreamResponse) => void): Promise<ForbidLiveStreamResponse>;
    /**
     * 添加域名，一次只能提交一个域名。域名必须已备案。
     */
    AddLiveDomain(req: AddLiveDomainRequest, cb?: (error: string, rep: AddLiveDomainResponse) => void): Promise<AddLiveDomainResponse>;
    /**
     * 查询直播转推计费带宽，查询时间范围最大支持3个月内的数据，时间跨度最长31天。
     */
    DescribeDeliverBandwidthList(req: DescribeDeliverBandwidthListRequest, cb?: (error: string, rep: DescribeDeliverBandwidthListResponse) => void): Promise<DescribeDeliverBandwidthListResponse>;
    /**
     * 查询实时的域名维度下行播放数据，由于数据处理有耗时，接口默认查询4分钟前的准实时数据。
     */
    DescribeLiveDomainPlayInfoList(req: DescribeLiveDomainPlayInfoListRequest, cb?: (error: string, rep: DescribeLiveDomainPlayInfoListResponse) => void): Promise<DescribeLiveDomainPlayInfoListResponse>;
    /**
     * 用于查询回调事件。
     */
    DescribeCallbackRecordsList(req: DescribeCallbackRecordsListRequest, cb?: (error: string, rep: DescribeCallbackRecordsListResponse) => void): Promise<DescribeCallbackRecordsListResponse>;
    /**
     * 创建录制规则，需要先调用[CreateLiveRecordTemplate](/document/product/267/32614)接口创建录制模板，将返回的模板id绑定到流使用。
<br>录制相关文档：[直播录制](/document/product/267/32739)。
     */
    CreateLiveRecordRule(req: CreateLiveRecordRuleRequest, cb?: (error: string, rep: CreateLiveRecordRuleResponse) => void): Promise<CreateLiveRecordRuleResponse>;
    /**
     * 获取单个水印信息。
     */
    DescribeLiveWatermark(req: DescribeLiveWatermarkRequest, cb?: (error: string, rep: DescribeLiveWatermarkResponse) => void): Promise<DescribeLiveWatermarkResponse>;
    /**
     * 获取转码模板列表。
     */
    DescribeLiveTranscodeTemplates(req?: DescribeLiveTranscodeTemplatesRequest, cb?: (error: string, rep: DescribeLiveTranscodeTemplatesResponse) => void): Promise<DescribeLiveTranscodeTemplatesResponse>;
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
     * 创建转码规则，需要先调用[CreateLiveTranscodeTemplate](/document/product/267/32646)接口创建转码模板，将返回的模板id绑定到流使用。
<br>转码相关文档：[直播转封装及转码](/document/product/267/32736)。
     */
    CreateLiveTranscodeRule(req: CreateLiveTranscodeRuleRequest, cb?: (error: string, rep: CreateLiveTranscodeRuleResponse) => void): Promise<CreateLiveTranscodeRuleResponse>;
    /**
     * 获取水印规则列表。
     */
    DescribeLiveWatermarkRules(req?: DescribeLiveWatermarkRulesRequest, cb?: (error: string, rep: DescribeLiveWatermarkRulesResponse) => void): Promise<DescribeLiveWatermarkRulesResponse>;
    /**
     * 注：DeleteLiveRecord 接口仅用于删除录制任务记录，不具备停止录制的功能，也不能删除正在进行中的录制。如果需要停止录制任务，请使用终止录制[StopLiveRecord](/document/product/267/30146) 接口。
     */
    DeleteLiveRecord(req: DeleteLiveRecordRequest, cb?: (error: string, rep: DeleteLiveRecordResponse) => void): Promise<DeleteLiveRecordResponse>;
    /**
     * 创建截图规则，需要先调用[CreateLiveSnapshotTemplate](/document/product/267/32624)接口创建截图模板，然后将返回的模板 ID 绑定到流进行使用。
<br>截图相关文档：[直播截图](/document/product/267/32737)。
注意：单个域名仅支持关联一个截图模板。
     */
    CreateLiveSnapshotRule(req: CreateLiveSnapshotRuleRequest, cb?: (error: string, rep: CreateLiveSnapshotRuleResponse) => void): Promise<CreateLiveSnapshotRuleResponse>;
    /**
     * 查询按省份和运营商分组的下行播放数据。
     */
    DescribeGroupProIspPlayInfoList(req: DescribeGroupProIspPlayInfoListRequest, cb?: (error: string, rep: DescribeGroupProIspPlayInfoListResponse) => void): Promise<DescribeGroupProIspPlayInfoListResponse>;
    /**
     * 输入某个时间点（1分钟维度），查询该时间点所有流的下行信息。
     */
    DescribeAllStreamPlayInfoList(req: DescribeAllStreamPlayInfoListRequest, cb?: (error: string, rep: DescribeAllStreamPlayInfoListResponse) => void): Promise<DescribeAllStreamPlayInfoListResponse>;
    /**
     * 查询播放鉴权key。
     */
    DescribeLivePlayAuthKey(req: DescribeLivePlayAuthKeyRequest, cb?: (error: string, rep: DescribeLivePlayAuthKeyResponse) => void): Promise<DescribeLivePlayAuthKeyResponse>;
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
     * 设置直播域名 Referer 黑白名单。
由于 Referer 信息包含在 http 协议中，在开启配置后，播放协议为 rtmp 或 WebRTC 不会校验 Referer 配置，仍可正常播放。如需配置 Referer 鉴权建议使用 http-flv 或 http-hls 协议播放。
     */
    ModifyLiveDomainReferer(req: ModifyLiveDomainRefererRequest, cb?: (error: string, rep: ModifyLiveDomainRefererResponse) => void): Promise<ModifyLiveDomainRefererResponse>;
    /**
     * 删除录制模板。
     */
    DeleteLiveRecordTemplate(req: DeleteLiveRecordTemplateRequest, cb?: (error: string, rep: DeleteLiveRecordTemplateResponse) => void): Promise<DeleteLiveRecordTemplateResponse>;
    /**
     * 取消直播流设置的延时配置，恢复实时直播画面。
     */
    ResumeDelayLiveStream(req: ResumeDelayLiveStreamRequest, cb?: (error: string, rep: ResumeDelayLiveStreamResponse) => void): Promise<ResumeDelayLiveStreamResponse>;
    /**
     * 创建一个在指定时间启动、结束的录制任务，并使用指定录制模板ID对应的配置进行录制。
- 使用前提
1. 录制文件存放于点播平台，所以用户如需使用录制功能，需首先自行开通点播服务。
2. 录制文件存放后相关费用（含存储以及下行播放流量）按照点播平台计费方式收取，具体请参考 [对应文档](https://cloud.tencent.com/document/product/266/2837)。
- 注意事项
1. 断流会结束当前录制并生成录制文件。在结束时间到达之前任务仍然有效，期间只要正常推流都会正常录制，与是否多次推、断流无关。
2. 使用上避免创建时间段相互重叠的录制任务。若同一条流当前存在多个时段重叠的任务，为避免重复录制系统将启动最多3个录制任务。
3. 创建的录制任务记录在平台侧只保留3个月。
4. 当前录制任务管理API（CreateRecordTask/StopRecordTask/DeleteRecordTask）与旧API（CreateLiveRecord/StopLiveRecord/DeleteLiveRecord）不兼容，两套接口不能混用。
5. 避免 创建录制任务 与 推流 操作同时进行，可能导致因录制任务未生效而引起任务延迟启动问题，两者操作间隔建议大于3秒。
     */
    CreateRecordTask(req: CreateRecordTaskRequest, cb?: (error: string, rep: CreateRecordTaskResponse) => void): Promise<CreateRecordTaskResponse>;
    /**
     * 创建转码模板，成功返回模板id后，需要调用[CreateLiveTranscodeRule](/document/product/267/32647)接口，将返回的模板id绑定到流使用。
<br>转码相关文档：[直播转封装及转码](/document/product/267/32736)。
     */
    CreateLiveTranscodeTemplate(req: CreateLiveTranscodeTemplateRequest, cb?: (error: string, rep: CreateLiveTranscodeTemplateResponse) => void): Promise<CreateLiveTranscodeTemplateResponse>;
    /**
     * 获取证书信息列表
     */
    DescribeLiveCerts(req?: DescribeLiveCertsRequest, cb?: (error: string, rep: DescribeLiveCertsResponse) => void): Promise<DescribeLiveCertsResponse>;
    /**
     * 启用状态为停用的直播域名。
     */
    EnableLiveDomain(req: EnableLiveDomainRequest, cb?: (error: string, rep: EnableLiveDomainResponse) => void): Promise<EnableLiveDomainResponse>;
    /**
     * 该接口用来取消混流。用法与 mix_streamv2.cancel_mix_stream 基本一致。
     */
    CancelCommonMixStream(req: CancelCommonMixStreamRequest, cb?: (error: string, rep: CancelCommonMixStreamResponse) => void): Promise<CancelCommonMixStreamResponse>;
    /**
     * 查询用户套餐包总量、使用量、剩余量、包状态、购买时间和过期时间等。
     */
    DescribeLivePackageInfo(req: DescribeLivePackageInfoRequest, cb?: (error: string, rep: DescribeLivePackageInfoResponse) => void): Promise<DescribeLivePackageInfoResponse>;
    /**
     * 创建临时拉流转推任务，目前限制添加10条任务。

注意：该接口用于创建临时拉流转推任务，
拉流源地址即 FromUrl 可以是腾讯或非腾讯数据源，
但转推目标地址即 ToUrl 目前限制为已注册的腾讯直播域名。
     */
    CreatePullStreamConfig(req: CreatePullStreamConfigRequest, cb?: (error: string, rep: CreatePullStreamConfigResponse) => void): Promise<CreatePullStreamConfigResponse>;
    /**
     * 查询所有实时流的推流信息，包括客户端IP，服务端IP，帧率，码率，域名，开始推流时间。
     */
    DescribeLiveStreamPushInfoList(req: DescribeLiveStreamPushInfoListRequest, cb?: (error: string, rep: DescribeLiveStreamPushInfoListResponse) => void): Promise<DescribeLiveStreamPushInfoListResponse>;
    /**
     * 删除截图模板
     */
    DeleteLiveSnapshotTemplate(req: DeleteLiveSnapshotTemplateRequest, cb?: (error: string, rep: DeleteLiveSnapshotTemplateResponse) => void): Promise<DeleteLiveSnapshotTemplateResponse>;
}
