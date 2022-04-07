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
  CreateLiveSnapshotRuleRequest,
  BillDataInfo,
  EnableLiveDomainResponse,
  CreateLiveCertRequest,
  HlsSpecialParam,
  TranscodeTotalInfo,
  StopRecordTaskResponse,
  DescribeDeliverBandwidthListResponse,
  DeleteLiveRecordRuleRequest,
  ResumeLiveStreamRequest,
  DeleteLiveTranscodeTemplateResponse,
  StopScreenshotTaskRequest,
  DescribeBillBandwidthAndFluxListResponse,
  CreateScreenshotTaskResponse,
  DeleteLiveCallbackRuleResponse,
  ResumeDelayLiveStreamRequest,
  DescribeLiveWatermarkRulesResponse,
  DescribeLiveCallbackTemplateResponse,
  CreateLivePullStreamTaskRequest,
  DeleteLiveSnapshotTemplateRequest,
  DescribeGroupProIspPlayInfoListResponse,
  PushAuthKeyInfo,
  DescribeUploadStreamNumsResponse,
  PlayCodeTotalInfo,
  DeleteLiveRecordTemplateRequest,
  DeleteLiveCallbackTemplateResponse,
  CreateScreenshotTaskRequest,
  PushQualityData,
  UnBindLiveDomainCertResponse,
  ModifyLivePlayAuthKeyRequest,
  DescribeLiveDelayInfoListRequest,
  DomainCertInfo,
  RecordTemplateInfo,
  DeleteLiveTranscodeRuleResponse,
  ConcurrentRecordStreamNum,
  DescribeStreamPlayInfoListResponse,
  DescribeScreenShotSheetNumListResponse,
  DescribeLiveCertRequest,
  CreateLivePullStreamTaskResponse,
  ModifyLivePushAuthKeyRequest,
  DeleteLiveCallbackTemplateRequest,
  DescribeLiveStreamStateRequest,
  DescribeLivePlayAuthKeyResponse,
  DescribeLiveCallbackTemplatesRequest,
  DomainInfo,
  DescribeLiveTranscodeRulesRequest,
  DeleteLiveSnapshotRuleRequest,
  DescribePlayErrorCodeDetailInfoListRequest,
  DeleteLivePullStreamTaskRequest,
  CommonMixOutputParams,
  DescribePushBandwidthAndFluxListResponse,
  DescribeUploadStreamNumsRequest,
  DescribeLiveSnapshotRulesResponse,
  DescribeLiveTranscodeDetailInfoResponse,
  DescribeLiveDomainRequest,
  DescribeLiveStreamPublishedListRequest,
  DeleteLiveTranscodeRuleRequest,
  DescribePushBandwidthAndFluxListRequest,
  CreateLiveRecordRuleRequest,
  DescribeLiveSnapshotTemplatesRequest,
  AddLiveWatermarkResponse,
  DescribeLiveStreamPushInfoListResponse,
  DescribeLiveDomainCertResponse,
  DescribeLiveRecordTemplateRequest,
  ModifyLiveDomainCertRequest,
  StreamOnlineInfo,
  CreateLiveWatermarkRuleResponse,
  ModifyLiveSnapshotTemplateResponse,
  DeleteScreenshotTaskRequest,
  DescribeProIspPlaySumInfoListRequest,
  DescribeDeliverBandwidthListRequest,
  DescribeScreenshotTaskResponse,
  AddLiveWatermarkRequest,
  ModifyLiveTranscodeTemplateResponse,
  BillCountryInfo,
  ModifyLiveRecordTemplateResponse,
  ModifyLivePlayDomainRequest,
  DeleteLiveRecordTemplateResponse,
  DescribeLiveWatermarkRequest,
  LogInfo,
  CommonMixLayoutParams,
  DescribeLiveDomainCertRequest,
  DescribeLiveStreamEventListRequest,
  DescribePullStreamConfigsRequest,
  CallBackTemplateInfo,
  DescribePlayErrorCodeSumInfoListResponse,
  UnBindLiveDomainCertRequest,
  DeleteLiveRecordResponse,
  DescribeScreenShotSheetNumListRequest,
  ForbidLiveStreamRequest,
  DescribeLiveDomainsResponse,
  TimeValue,
  ModifyLivePullStreamTaskRequest,
  PullStreamConfig,
  CreateLiveRecordResponse,
  RuleInfo,
  UpdateLiveWatermarkResponse,
  DescribeRecordTaskRequest,
  LivePackageInfo,
  CreateLiveTranscodeTemplateResponse,
  BillAreaInfo,
  PlayDataInfoByStream,
  DescribeVisitTopSumInfoListRequest,
  DayStreamPlayInfo,
  ModifyPullStreamStatusResponse,
  ModifyLivePlayDomainResponse,
  CancelCommonMixStreamResponse,
  DescribeConcurrentRecordStreamNumResponse,
  RecordTask,
  DescribeLiveCertsResponse,
  CommonMixInputParam,
  DescribeProvinceIspPlayInfoListResponse,
  DescribeLiveRecordTemplatesResponse,
  DescribeScreenshotTaskRequest,
  DescribeCallbackRecordsListRequest,
  DescribeLiveCallbackTemplatesResponse,
  ModifyLivePlayAuthKeyResponse,
  CreateLiveCallbackTemplateRequest,
  CallbackEventInfo,
  DescribeTopClientIpSumInfoListResponse,
  DropLiveStreamResponse,
  DescribeLiveStreamStateResponse,
  ScreenshotTask,
  DeletePullStreamConfigResponse,
  DeleteLiveWatermarkRuleRequest,
  StreamEventInfo,
  DeleteRecordTaskResponse,
  DescribeLiveWatermarksRequest,
  DescribeLivePackageInfoResponse,
  CreateLiveTranscodeRuleRequest,
  DescribeLiveWatermarkRulesRequest,
  DropLiveStreamRequest,
  StopLiveRecordResponse,
  UpdateLiveWatermarkRequest,
  CreateCommonMixStreamRequest,
  RefererAuthConfig,
  CreateLiveCertResponse,
  PushDataInfo,
  AddDelayLiveStreamRequest,
  DescribeGroupProIspPlayInfoListRequest,
  ModifyPullStreamStatusRequest,
  DescribeStreamDayPlayInfoListRequest,
  TranscodeDetailInfo,
  DescribeLiveSnapshotTemplateResponse,
  DescribeLiveTranscodeRulesResponse,
  DescribeLiveDomainRefererResponse,
  AddLiveDomainRequest,
  StreamName,
  DescribeLivePackageInfoRequest,
  CreatePullStreamConfigRequest,
  DescribeLiveCertsRequest,
  DescribeLivePullStreamTasksRequest,
  CdnPlayStatData,
  AddLiveDomainResponse,
  DescribeHttpStatusInfoListRequest,
  ModifyPullStreamConfigResponse,
  ModifyLiveCallbackTemplateRequest,
  ProIspPlayCodeDataInfo,
  DescribeProvinceIspPlayInfoListRequest,
  DescribeLivePlayAuthKeyRequest,
  DeleteLivePullStreamTaskResponse,
  DescribeLiveForbidStreamListResponse,
  DescribeStreamPushInfoListRequest,
  DescribeLivePullStreamTasksResponse,
  ModifyLivePushAuthKeyResponse,
  DomainInfoList,
  DescribeLiveWatermarkResponse,
  ResumeLiveStreamResponse,
  DescribeLiveStreamOnlineListResponse,
  DeletePullStreamConfigRequest,
  ModifyPullStreamConfigRequest,
  DescribeStreamPushInfoListResponse,
  DescribeLiveStreamPushInfoListRequest,
  DescribeLiveWatermarksResponse,
  WatermarkInfo,
  DescribeLiveForbidStreamListRequest,
  DescribeLiveDomainPlayInfoListRequest,
  CreatePullStreamConfigResponse,
  BindLiveDomainCertRequest,
  DescribeTopClientIpSumInfoListRequest,
  CreateLiveCallbackRuleRequest,
  DeleteLiveWatermarkRuleResponse,
  DescribeCallbackRecordsListResponse,
  PublishTime,
  ModifyLiveCertResponse,
  MonitorStreamPlayInfo,
  DescribePlayErrorCodeSumInfoListRequest,
  DescribeLiveTranscodeDetailInfoRequest,
  ModifyLiveDomainRefererResponse,
  DeleteLiveWatermarkRequest,
  DescribeLiveDomainsRequest,
  ProIspPlaySumInfo,
  SnapshotTemplateInfo,
  DeleteLiveSnapshotRuleResponse,
  CreateLiveRecordRequest,
  ForbidLiveStreamResponse,
  BandwidthInfo,
  DescribeLogDownloadListResponse,
  CancelCommonMixStreamRequest,
  RecentPullInfo,
  CertInfo,
  DescribeRecordTaskResponse,
  DescribeLiveDelayInfoListResponse,
  DeleteLiveTranscodeTemplateRequest,
  DescribeLiveCallbackRulesRequest,
  ClientIpPlaySumInfo,
  DescribeLiveTranscodeTemplateResponse,
  CreateLiveSnapshotTemplateResponse,
  DescribeConcurrentRecordStreamNumRequest,
  DeleteScreenshotTaskResponse,
  ModifyLiveCertRequest,
  CommonMixControlParams,
  ModifyLiveRecordTemplateRequest,
  DescribeAreaBillBandwidthAndFluxListResponse,
  ForbidLiveDomainRequest,
  DescribeLiveRecordRulesRequest,
  DescribePlayErrorCodeDetailInfoListResponse,
  CreateLiveRecordTemplateResponse,
  RecordParam,
  DomainDetailInfo,
  HttpStatusInfo,
  DeleteLiveRecordRequest,
  DescribeLiveSnapshotTemplatesResponse,
  StopRecordTaskRequest,
  DescribeLiveDomainRefererRequest,
  HttpStatusData,
  HttpCodeInfo,
  DescribeStreamPlayInfoListRequest,
  CreateLiveTranscodeTemplateRequest,
  DescribeLiveStreamPublishedListResponse,
  DeleteLiveDomainRequest,
  ForbidLiveDomainResponse,
  AddDelayLiveStreamResponse,
  DescribeLiveTranscodeTemplatesResponse,
  DeleteLiveCallbackRuleRequest,
  PlayAuthKeyInfo,
  ModifyLiveTranscodeTemplateRequest,
  ModifyLiveDomainCertResponse,
  ModifyLiveCallbackTemplateResponse,
  EnableLiveDomainRequest,
  DescribeAllStreamPlayInfoListResponse,
  DescribeLiveTranscodeTotalInfoResponse,
  DescribeLiveSnapshotRulesRequest,
  CreateRecordTaskRequest,
  CreateLiveTranscodeRuleResponse,
  CreateLiveCallbackRuleResponse,
  DescribeLiveRecordTemplateResponse,
  DescribeAreaBillBandwidthAndFluxListRequest,
  BindLiveDomainCertResponse,
  CallBackRuleInfo,
  PlaySumStatInfo,
  DescribeLiveTranscodeTemplatesRequest,
  DescribeBillBandwidthAndFluxListRequest,
  DescribeLiveRecordRulesResponse,
  CreateLiveSnapshotTemplateRequest,
  DescribeLiveDomainPlayInfoListResponse,
  HttpCodeValue,
  DescribeLiveStreamOnlineListRequest,
  DeleteLiveSnapshotTemplateResponse,
  DescribeLiveSnapshotTemplateRequest,
  DeleteLiveCertResponse,
  CreateCommonMixStreamResponse,
  ModifyLiveDomainRefererRequest,
  CreateLiveCallbackTemplateResponse,
  DescribeLivePushAuthKeyRequest,
  PlayStatInfo,
  DescribeLiveCallbackTemplateRequest,
  ModifyLiveSnapshotTemplateRequest,
  DescribeLiveCertResponse,
  CreateLiveRecordRuleResponse,
  DescribeLiveTranscodeTemplateRequest,
  DescribeLogDownloadListRequest,
  DeleteLiveWatermarkResponse,
  DescribeLivePushAuthKeyResponse,
  CreateLiveWatermarkRuleRequest,
  DescribeLiveRecordTemplatesRequest,
  DescribeAllStreamPlayInfoListRequest,
  DescribeLiveDomainResponse,
  DeleteRecordTaskRequest,
  PullStreamTaskInfo,
  DescribeStreamDayPlayInfoListResponse,
  StopLiveRecordRequest,
  DescribeVisitTopSumInfoListResponse,
  ModifyLivePullStreamTaskResponse,
  CreateLiveSnapshotRuleResponse,
  DelayInfo,
  DescribeLiveStreamEventListResponse,
  DescribePullStreamConfigsResponse,
  DescribeLiveCallbackRulesResponse,
  DescribeLiveTranscodeTotalInfoRequest,
  StopScreenshotTaskResponse,
  CreateRecordTaskResponse,
  ForbidStreamInfo,
  ResumeDelayLiveStreamResponse,
  GroupProIspDataInfo,
  DeleteLiveDomainResponse,
  CommonMixCropParams,
  CreateLiveRecordTemplateRequest,
  TemplateInfo,
  DescribeProIspPlaySumInfoListResponse,
  DeleteLiveCertRequest,
  DescribeHttpStatusInfoListResponse,
  DeleteLiveRecordRuleResponse,
} from "./live_models"

/**
 * live client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("live.tencentcloudapi.com", "2018-08-01", clientConfig)
  }

  /**
     * 断开推流连接，但可以重新推流。
注：对已经不活跃的流，调用该断流接口时，接口返回成功。
     */
  async DropLiveStream(
    req: DropLiveStreamRequest,
    cb?: (error: string, rep: DropLiveStreamResponse) => void
  ): Promise<DropLiveStreamResponse> {
    return this.request("DropLiveStream", req, cb)
  }

  /**
   * 查询水印列表。
   */
  async DescribeLiveWatermarks(
    req?: DescribeLiveWatermarksRequest,
    cb?: (error: string, rep: DescribeLiveWatermarksResponse) => void
  ): Promise<DescribeLiveWatermarksResponse> {
    return this.request("DescribeLiveWatermarks", req, cb)
  }

  /**
   * 查询并发录制路数，对慢直播和普通直播适用。
   */
  async DescribeConcurrentRecordStreamNum(
    req: DescribeConcurrentRecordStreamNumRequest,
    cb?: (error: string, rep: DescribeConcurrentRecordStreamNumResponse) => void
  ): Promise<DescribeConcurrentRecordStreamNumResponse> {
    return this.request("DescribeConcurrentRecordStreamNum", req, cb)
  }

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
  async CreateLiveRecord(
    req: CreateLiveRecordRequest,
    cb?: (error: string, rep: CreateLiveRecordResponse) => void
  ): Promise<CreateLiveRecordResponse> {
    return this.request("CreateLiveRecord", req, cb)
  }

  /**
   * 更新水印。
   */
  async UpdateLiveWatermark(
    req: UpdateLiveWatermarkRequest,
    cb?: (error: string, rep: UpdateLiveWatermarkResponse) => void
  ): Promise<UpdateLiveWatermarkResponse> {
    return this.request("UpdateLiveWatermark", req, cb)
  }

  /**
   * 修改截图模板配置。
   */
  async ModifyLiveSnapshotTemplate(
    req: ModifyLiveSnapshotTemplateRequest,
    cb?: (error: string, rep: ModifyLiveSnapshotTemplateResponse) => void
  ): Promise<ModifyLiveSnapshotTemplateResponse> {
    return this.request("ModifyLiveSnapshotTemplate", req, cb)
  }

  /**
     * 查询指定时间段范围内启动和结束的录制任务列表。
- 使用前提
1. 仅用于查询由 CreateRecordTask 接口创建的录制任务。
2. 不能查询被 DeleteRecordTask 接口删除以及已过期（平台侧保留3个月）的录制任务。

     */
  async DescribeRecordTask(
    req: DescribeRecordTaskRequest,
    cb?: (error: string, rep: DescribeRecordTaskResponse) => void
  ): Promise<DescribeRecordTaskResponse> {
    return this.request("DescribeRecordTask", req, cb)
  }

  /**
   * 创建水印规则，需要先调用[AddLiveWatermark](/document/product/267/30154)接口添加水印，将返回的水印id绑定到流使用。
   */
  async CreateLiveWatermarkRule(
    req: CreateLiveWatermarkRuleRequest,
    cb?: (error: string, rep: CreateLiveWatermarkRuleResponse) => void
  ): Promise<CreateLiveWatermarkRuleResponse> {
    return this.request("CreateLiveWatermarkRule", req, cb)
  }

  /**
     * 用于查询推断流事件。<br>

注意：
1. 该接口提供离线推断流记录查询功能，不可作为重要业务场景强依赖接口。
2. 该接口可通过使用IsFilter进行过滤，返回推流历史记录。
     */
  async DescribeLiveStreamEventList(
    req: DescribeLiveStreamEventListRequest,
    cb?: (error: string, rep: DescribeLiveStreamEventListResponse) => void
  ): Promise<DescribeLiveStreamEventListResponse> {
    return this.request("DescribeLiveStreamEventList", req, cb)
  }

  /**
     * 该接口用来创建通用混流。用法与旧接口 mix_streamv2.start_mix_stream_advanced 基本一致。
注意：当前最多支持16路混流。
最佳实践：https://cloud.tencent.com/document/product/267/45566
     */
  async CreateCommonMixStream(
    req: CreateCommonMixStreamRequest,
    cb?: (error: string, rep: CreateCommonMixStreamResponse) => void
  ): Promise<CreateCommonMixStreamResponse> {
    return this.request("CreateCommonMixStream", req, cb)
  }

  /**
     * 查询某段时间内5分钟粒度的各播放http状态码的个数。
备注：数据延迟1小时，如10:00-10:59点的数据12点才能查到。
     */
  async DescribeHttpStatusInfoList(
    req: DescribeHttpStatusInfoListRequest,
    cb?: (error: string, rep: DescribeHttpStatusInfoListResponse) => void
  ): Promise<DescribeHttpStatusInfoListResponse> {
    return this.request("DescribeHttpStatusInfoList", req, cb)
  }

  /**
   * 查询某省份某运营商下行播放数据，包括带宽，流量，请求数，并发连接数信息。
   */
  async DescribeProvinceIspPlayInfoList(
    req: DescribeProvinceIspPlayInfoListRequest,
    cb?: (error: string, rep: DescribeProvinceIspPlayInfoListResponse) => void
  ): Promise<DescribeProvinceIspPlayInfoListResponse> {
    return this.request("DescribeProvinceIspPlayInfoList", req, cb)
  }

  /**
   * 修改播放域名信息。
   */
  async ModifyLivePlayDomain(
    req: ModifyLivePlayDomainRequest,
    cb?: (error: string, rep: ModifyLivePlayDomainResponse) => void
  ): Promise<ModifyLivePlayDomainResponse> {
    return this.request("ModifyLivePlayDomain", req, cb)
  }

  /**
   * 查询流id的上行推流质量数据，包括音视频的帧率，码率，流逝时间，编码格式等。
   */
  async DescribeStreamPushInfoList(
    req: DescribeStreamPushInfoListRequest,
    cb?: (error: string, rep: DescribeStreamPushInfoListResponse) => void
  ): Promise<DescribeStreamPushInfoListResponse> {
    return this.request("DescribeStreamPushInfoList", req, cb)
  }

  /**
   * 获取截图规则列表
   */
  async DescribeLiveSnapshotRules(
    req?: DescribeLiveSnapshotRulesRequest,
    cb?: (error: string, rep: DescribeLiveSnapshotRulesResponse) => void
  ): Promise<DescribeLiveSnapshotRulesResponse> {
    return this.request("DescribeLiveSnapshotRules", req, cb)
  }

  /**
   * 删除转码模板。
   */
  async DeleteLiveTranscodeTemplate(
    req: DeleteLiveTranscodeTemplateRequest,
    cb?: (error: string, rep: DeleteLiveTranscodeTemplateResponse) => void
  ): Promise<DeleteLiveTranscodeTemplateResponse> {
    return this.request("DeleteLiveTranscodeTemplate", req, cb)
  }

  /**
     * 查询直播域名 Referer 黑白名单配置。
由于 Referer 信息包含在 http 协议中，在开启配置后，播放协议为 rtmp 或 WebRTC 不会校验 Referer 配置，仍可正常播放。如需配置 Referer 鉴权建议使用 http-flv 或 http-hls 协议播放。
     */
  async DescribeLiveDomainReferer(
    req: DescribeLiveDomainRefererRequest,
    cb?: (error: string, rep: DescribeLiveDomainRefererResponse) => void
  ): Promise<DescribeLiveDomainRefererResponse> {
    return this.request("DescribeLiveDomainReferer", req, cb)
  }

  /**
   * 查询某段时间top n客户端ip汇总信息（暂支持top 1000）
   */
  async DescribeTopClientIpSumInfoList(
    req: DescribeTopClientIpSumInfoListRequest,
    cb?: (error: string, rep: DescribeTopClientIpSumInfoListResponse) => void
  ): Promise<DescribeTopClientIpSumInfoListResponse> {
    return this.request("DescribeTopClientIpSumInfoList", req, cb)
  }

  /**
   * 修改直播拉流配置的状态。
   */
  async ModifyPullStreamStatus(
    req: ModifyPullStreamStatusRequest,
    cb?: (error: string, rep: ModifyPullStreamStatusResponse) => void
  ): Promise<ModifyPullStreamStatusResponse> {
    return this.request("ModifyPullStreamStatus", req, cb)
  }

  /**
     * 创建一个在指定时间启动、结束的截图任务，并使用指定截图模板ID对应的配置进行截图。
- 注意事项
1. 断流会结束当前截图。在结束时间到达之前任务仍然有效，期间只要正常推流都会正常截图，与是否多次推、断流无关。
2. 使用上避免创建时间段相互重叠的截图任务。若同一条流当前存在多个时段重叠的任务，为避免重复系统将启动最多3个截图任务。
3. 创建的截图任务记录在平台侧只保留3个月。
4. 当前截图任务管理API（CreateScreenshotTask/StopScreenshotTask/DeleteScreenshotTask）与旧API（CreateLiveInstantSnapshot/StopLiveInstantSnapshot）不兼容，两套接口不能混用。
5. 避免 创建截图任务 与 推流 操作同时进行，可能导致因截图任务未生效而引起任务延迟启动问题，两者操作间隔建议大于3秒。
     */
  async CreateScreenshotTask(
    req: CreateScreenshotTaskRequest,
    cb?: (error: string, rep: CreateScreenshotTaskResponse) => void
  ): Promise<CreateScreenshotTaskResponse> {
    return this.request("CreateScreenshotTask", req, cb)
  }

  /**
   * 获取录制模板列表。
   */
  async DescribeLiveRecordTemplates(
    req: DescribeLiveRecordTemplatesRequest,
    cb?: (error: string, rep: DescribeLiveRecordTemplatesResponse) => void
  ): Promise<DescribeLiveRecordTemplatesResponse> {
    return this.request("DescribeLiveRecordTemplates", req, cb)
  }

  /**
   * 修改域名和证书绑定信息
   */
  async ModifyLiveDomainCert(
    req: ModifyLiveDomainCertRequest,
    cb?: (error: string, rep: ModifyLiveDomainCertResponse) => void
  ): Promise<ModifyLiveDomainCertResponse> {
    return this.request("ModifyLiveDomainCert", req, cb)
  }

  /**
   * 查询某时间段top n的域名或流id信息（暂支持top 1000）。
   */
  async DescribeVisitTopSumInfoList(
    req: DescribeVisitTopSumInfoListRequest,
    cb?: (error: string, rep: DescribeVisitTopSumInfoListResponse) => void
  ): Promise<DescribeVisitTopSumInfoListResponse> {
    return this.request("DescribeVisitTopSumInfoList", req, cb)
  }

  /**
   * 修改录制模板配置。
   */
  async ModifyLiveRecordTemplate(
    req: ModifyLiveRecordTemplateRequest,
    cb?: (error: string, rep: ModifyLiveRecordTemplateResponse) => void
  ): Promise<ModifyLiveRecordTemplateResponse> {
    return this.request("ModifyLiveRecordTemplate", req, cb)
  }

  /**
   * 获取域名证书信息。
   */
  async DescribeLiveDomainCert(
    req: DescribeLiveDomainCertRequest,
    cb?: (error: string, rep: DescribeLiveDomainCertResponse) => void
  ): Promise<DescribeLiveDomainCertResponse> {
    return this.request("DescribeLiveDomainCert", req, cb)
  }

  /**
     * 添加水印，成功返回水印 ID 后，需要调用[CreateLiveWatermarkRule](/document/product/267/32629)接口将水印 ID 绑定到流使用。
水印数量上限 100，超过后需要先删除，再添加。
     */
  async AddLiveWatermark(
    req: AddLiveWatermarkRequest,
    cb?: (error: string, rep: AddLiveWatermarkResponse) => void
  ): Promise<AddLiveWatermarkResponse> {
    return this.request("AddLiveWatermark", req, cb)
  }

  /**
   * 海外分区直播计费带宽和流量数据查询。
   */
  async DescribeAreaBillBandwidthAndFluxList(
    req: DescribeAreaBillBandwidthAndFluxListRequest,
    cb?: (error: string, rep: DescribeAreaBillBandwidthAndFluxListResponse) => void
  ): Promise<DescribeAreaBillBandwidthAndFluxListResponse> {
    return this.request("DescribeAreaBillBandwidthAndFluxList", req, cb)
  }

  /**
   * 删除水印规则
   */
  async DeleteLiveWatermarkRule(
    req: DeleteLiveWatermarkRuleRequest,
    cb?: (error: string, rep: DeleteLiveWatermarkRuleResponse) => void
  ): Promise<DeleteLiveWatermarkRuleResponse> {
    return this.request("DeleteLiveWatermarkRule", req, cb)
  }

  /**
   * 删除回调规则。
   */
  async DeleteLiveCallbackRule(
    req: DeleteLiveCallbackRuleRequest,
    cb?: (error: string, rep: DeleteLiveCallbackRuleResponse) => void
  ): Promise<DeleteLiveCallbackRuleResponse> {
    return this.request("DeleteLiveCallbackRule", req, cb)
  }

  /**
   * 更新拉流配置。
   */
  async ModifyPullStreamConfig(
    req: ModifyPullStreamConfigRequest,
    cb?: (error: string, rep: ModifyPullStreamConfigResponse) => void
  ): Promise<ModifyPullStreamConfigResponse> {
    return this.request("ModifyPullStreamConfig", req, cb)
  }

  /**
     * 创建截图模板，成功返回模板id后，需要调用[CreateLiveSnapshotRule](/document/product/267/32625)接口，将模板id绑定到流使用。
<br>截图相关文档：[直播截图](/document/product/267/32737)。
     */
  async CreateLiveSnapshotTemplate(
    req: CreateLiveSnapshotTemplateRequest,
    cb?: (error: string, rep: CreateLiveSnapshotTemplateResponse) => void
  ): Promise<CreateLiveSnapshotTemplateResponse> {
    return this.request("CreateLiveSnapshotTemplate", req, cb)
  }

  /**
     * 返回正在直播中的流列表。适用于推流成功后查询在线流信息。

注意：
1. 该接口仅提供辅助查询在线流列表功能，业务重要场景不可强依赖该接口。
2. 该接口仅适用于流数少于2万路的情况，对于流数较大用户请联系售后。

     */
  async DescribeLiveStreamOnlineList(
    req: DescribeLiveStreamOnlineListRequest,
    cb?: (error: string, rep: DescribeLiveStreamOnlineListResponse) => void
  ): Promise<DescribeLiveStreamOnlineListResponse> {
    return this.request("DescribeLiveStreamOnlineList", req, cb)
  }

  /**
   * 删除回调模板。
   */
  async DeleteLiveCallbackTemplate(
    req: DeleteLiveCallbackTemplateRequest,
    cb?: (error: string, rep: DeleteLiveCallbackTemplateResponse) => void
  ): Promise<DeleteLiveCallbackTemplateResponse> {
    return this.request("DeleteLiveCallbackTemplate", req, cb)
  }

  /**
   * 查询直播推流鉴权key
   */
  async DescribeLivePushAuthKey(
    req: DescribeLivePushAuthKeyRequest,
    cb?: (error: string, rep: DescribeLivePushAuthKeyResponse) => void
  ): Promise<DescribeLivePushAuthKeyResponse> {
    return this.request("DescribeLivePushAuthKey", req, cb)
  }

  /**
   * 删除直播拉流配置。
   */
  async DeletePullStreamConfig(
    req: DeletePullStreamConfigRequest,
    cb?: (error: string, rep: DeletePullStreamConfigResponse) => void
  ): Promise<DeletePullStreamConfigResponse> {
    return this.request("DeletePullStreamConfig", req, cb)
  }

  /**
   * 获取单个录制模板。
   */
  async DescribeLiveRecordTemplate(
    req: DescribeLiveRecordTemplateRequest,
    cb?: (error: string, rep: DescribeLiveRecordTemplateResponse) => void
  ): Promise<DescribeLiveRecordTemplateResponse> {
    return this.request("DescribeLiveRecordTemplate", req, cb)
  }

  /**
   * 提前结束截图，中止运行中的截图任务。任务被成功终止后，本次任务将不再启动。
   */
  async StopScreenshotTask(
    req: StopScreenshotTaskRequest,
    cb?: (error: string, rep: StopScreenshotTaskResponse) => void
  ): Promise<StopScreenshotTaskResponse> {
    return this.request("StopScreenshotTask", req, cb)
  }

  /**
   * 查询直播拉流配置。
   */
  async DescribePullStreamConfigs(
    req: DescribePullStreamConfigsRequest,
    cb?: (error: string, rep: DescribePullStreamConfigsResponse) => void
  ): Promise<DescribePullStreamConfigsResponse> {
    return this.request("DescribePullStreamConfigs", req, cb)
  }

  /**
   * 删除水印。
   */
  async DeleteLiveWatermark(
    req: DeleteLiveWatermarkRequest,
    cb?: (error: string, rep: DeleteLiveWatermarkResponse) => void
  ): Promise<DeleteLiveWatermarkResponse> {
    return this.request("DeleteLiveWatermark", req, cb)
  }

  /**
   * 查询下行播放错误码信息。
   */
  async DescribePlayErrorCodeSumInfoList(
    req: DescribePlayErrorCodeSumInfoListRequest,
    cb?: (error: string, rep: DescribePlayErrorCodeSumInfoListResponse) => void
  ): Promise<DescribePlayErrorCodeSumInfoListResponse> {
    return this.request("DescribePlayErrorCodeSumInfoList", req, cb)
  }

  /**
     * 针对大型活动直播，通过对直播流设置延时来控制现场与观众播放画面的时间间隔，避免突发状况造成影响。

注意：如果在推流前设置延播，需要提前5分钟设置，目前该接口只支持流粒度。
     */
  async AddDelayLiveStream(
    req: AddDelayLiveStreamRequest,
    cb?: (error: string, rep: AddDelayLiveStreamResponse) => void
  ): Promise<AddDelayLiveStreamResponse> {
    return this.request("AddDelayLiveStream", req, cb)
  }

  /**
   * 直播上行路数查询
   */
  async DescribeUploadStreamNums(
    req: DescribeUploadStreamNumsRequest,
    cb?: (error: string, rep: DescribeUploadStreamNumsResponse) => void
  ): Promise<DescribeUploadStreamNumsResponse> {
    return this.request("DescribeUploadStreamNums", req, cb)
  }

  /**
   * 查询天维度每条流的播放数据，包括总流量等。
   */
  async DescribeStreamDayPlayInfoList(
    req: DescribeStreamDayPlayInfoListRequest,
    cb?: (error: string, rep: DescribeStreamDayPlayInfoListResponse) => void
  ): Promise<DescribeStreamDayPlayInfoListResponse> {
    return this.request("DescribeStreamDayPlayInfoList", req, cb)
  }

  /**
   * 修改直播推流鉴权key
   */
  async ModifyLivePushAuthKey(
    req: ModifyLivePushAuthKeyRequest,
    cb?: (error: string, rep: ModifyLivePushAuthKeyResponse) => void
  ): Promise<ModifyLivePushAuthKeyResponse> {
    return this.request("ModifyLivePushAuthKey", req, cb)
  }

  /**
   * 修改转码模板配置。
   */
  async ModifyLiveTranscodeTemplate(
    req: ModifyLiveTranscodeTemplateRequest,
    cb?: (error: string, rep: ModifyLiveTranscodeTemplateResponse) => void
  ): Promise<ModifyLiveTranscodeTemplateResponse> {
    return this.request("ModifyLiveTranscodeTemplate", req, cb)
  }

  /**
     * 删除转码规则。
DomainName+AppName+StreamName+TemplateId唯一标识单个转码规则，如需删除需要强匹配。其中TemplateId必填，其余参数为空时也需要传空字符串进行强匹配。
     */
  async DeleteLiveTranscodeRule(
    req: DeleteLiveTranscodeRuleRequest,
    cb?: (error: string, rep: DeleteLiveTranscodeRuleResponse) => void
  ): Promise<DeleteLiveTranscodeRuleResponse> {
    return this.request("DeleteLiveTranscodeRule", req, cb)
  }

  /**
     * 查询转码总量数据，可查询近30天内数据。
注意：
如果是查询某一天内，则返回5分钟粒度数据；
如果是查询跨天或指定域名， 则返回1小时粒度数据。
     */
  async DescribeLiveTranscodeTotalInfo(
    req: DescribeLiveTranscodeTotalInfoRequest,
    cb?: (error: string, rep: DescribeLiveTranscodeTotalInfoResponse) => void
  ): Promise<DescribeLiveTranscodeTotalInfoResponse> {
    return this.request("DescribeLiveTranscodeTotalInfo", req, cb)
  }

  /**
   * 删除截图规则。
   */
  async DeleteLiveSnapshotRule(
    req: DeleteLiveSnapshotRuleRequest,
    cb?: (error: string, rep: DeleteLiveSnapshotRuleResponse) => void
  ): Promise<DeleteLiveSnapshotRuleResponse> {
    return this.request("DeleteLiveSnapshotRule", req, cb)
  }

  /**
     * 删除接口 CreateLivePullStreamTask 创建的拉流任务。
注意：
1. 入参中的 TaskId 为 CreateLivePullStreamTask 接口创建时返回的TaskId。
2. 也可通过 DescribeLivePullStreamTasks 进行查询创建的任务。
     */
  async DeleteLivePullStreamTask(
    req: DeleteLivePullStreamTaskRequest,
    cb?: (error: string, rep: DeleteLivePullStreamTaskResponse) => void
  ): Promise<DeleteLivePullStreamTaskResponse> {
    return this.request("DeleteLivePullStreamTask", req, cb)
  }

  /**
     * 获取禁推流列表。

注意：该接口仅作为直播辅助查询接口，重要业务场景不可强依赖该接口。
     */
  async DescribeLiveForbidStreamList(
    req: DescribeLiveForbidStreamListRequest,
    cb?: (error: string, rep: DescribeLiveForbidStreamListResponse) => void
  ): Promise<DescribeLiveForbidStreamListResponse> {
    return this.request("DescribeLiveForbidStreamList", req, cb)
  }

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
  async CreateLivePullStreamTask(
    req: CreateLivePullStreamTaskRequest,
    cb?: (error: string, rep: CreateLivePullStreamTaskResponse) => void
  ): Promise<CreateLivePullStreamTaskResponse> {
    return this.request("CreateLivePullStreamTask", req, cb)
  }

  /**
   * 获取证书信息
   */
  async DescribeLiveCert(
    req: DescribeLiveCertRequest,
    cb?: (error: string, rep: DescribeLiveCertResponse) => void
  ): Promise<DescribeLiveCertResponse> {
    return this.request("DescribeLiveCert", req, cb)
  }

  /**
   * 修改证书
   */
  async ModifyLiveCert(
    req: ModifyLiveCertRequest,
    cb?: (error: string, rep: ModifyLiveCertResponse) => void
  ): Promise<ModifyLiveCertResponse> {
    return this.request("ModifyLiveCert", req, cb)
  }

  /**
   * 根据域名状态、类型等信息查询用户的域名信息。
   */
  async DescribeLiveDomains(
    req: DescribeLiveDomainsRequest,
    cb?: (error: string, rep: DescribeLiveDomainsResponse) => void
  ): Promise<DescribeLiveDomainsResponse> {
    return this.request("DescribeLiveDomains", req, cb)
  }

  /**
     * 更新直播拉流任务。 
1. 不支持修改目标地址，如需推到新地址，请创建新任务。
2. 不支持修改拉流源类型，如需更换，请创建新任务。
     */
  async ModifyLivePullStreamTask(
    req: ModifyLivePullStreamTaskRequest,
    cb?: (error: string, rep: ModifyLivePullStreamTaskResponse) => void
  ): Promise<ModifyLivePullStreamTaskResponse> {
    return this.request("ModifyLivePullStreamTask", req, cb)
  }

  /**
   * 删除域名对应的证书
   */
  async DeleteLiveCert(
    req: DeleteLiveCertRequest,
    cb?: (error: string, rep: DeleteLiveCertResponse) => void
  ): Promise<DeleteLiveCertResponse> {
    return this.request("DeleteLiveCert", req, cb)
  }

  /**
     * 创建回调模板，成功返回模板id后，需要调用[CreateLiveCallbackRule](/document/product/267/32638)接口将模板 ID 绑定到域名/路径使用。
<br>回调协议相关文档：[事件消息通知](/document/product/267/32744)。
注意：至少填写一个回调 URL。
     */
  async CreateLiveCallbackTemplate(
    req: CreateLiveCallbackTemplateRequest,
    cb?: (error: string, rep: CreateLiveCallbackTemplateResponse) => void
  ): Promise<CreateLiveCallbackTemplateResponse> {
    return this.request("CreateLiveCallbackTemplate", req, cb)
  }

  /**
   * 恢复某条流的推流。
   */
  async ResumeLiveStream(
    req: ResumeLiveStreamRequest,
    cb?: (error: string, rep: ResumeLiveStreamResponse) => void
  ): Promise<ResumeLiveStreamResponse> {
    return this.request("ResumeLiveStream", req, cb)
  }

  /**
   * 获取单个回调模板。
   */
  async DescribeLiveCallbackTemplate(
    req: DescribeLiveCallbackTemplateRequest,
    cb?: (error: string, rep: DescribeLiveCallbackTemplateResponse) => void
  ): Promise<DescribeLiveCallbackTemplateResponse> {
    return this.request("DescribeLiveCallbackTemplate", req, cb)
  }

  /**
   * 删除已添加的直播域名
   */
  async DeleteLiveDomain(
    req: DeleteLiveDomainRequest,
    cb?: (error: string, rep: DeleteLiveDomainResponse) => void
  ): Promise<DeleteLiveDomainResponse> {
    return this.request("DeleteLiveDomain", req, cb)
  }

  /**
   * 修改回调模板。
   */
  async ModifyLiveCallbackTemplate(
    req: ModifyLiveCallbackTemplateRequest,
    cb?: (error: string, rep: ModifyLiveCallbackTemplateResponse) => void
  ): Promise<ModifyLiveCallbackTemplateResponse> {
    return this.request("ModifyLiveCallbackTemplate", req, cb)
  }

  /**
     * 查询使用 CreateLivePullStreamTask 接口创建的直播拉流任务。
排序方式：默认按更新时间 倒序排列。
     */
  async DescribeLivePullStreamTasks(
    req: DescribeLivePullStreamTasksRequest,
    cb?: (error: string, rep: DescribeLivePullStreamTasksResponse) => void
  ): Promise<DescribeLivePullStreamTasksResponse> {
    return this.request("DescribeLivePullStreamTasks", req, cb)
  }

  /**
   * 查询某段时间内每个国家地区每个省份每个运营商的平均每秒流量，总流量，总请求数信息。
   */
  async DescribeProIspPlaySumInfoList(
    req: DescribeProIspPlaySumInfoListRequest,
    cb?: (error: string, rep: DescribeProIspPlaySumInfoListResponse) => void
  ): Promise<DescribeProIspPlaySumInfoListResponse> {
    return this.request("DescribeProIspPlaySumInfoList", req, cb)
  }

  /**
     * 查询播放数据，支持按流名称查询详细播放数据，也可按播放域名查询详细总数据，数据延迟4分钟左右。
注意：按AppName查询请先联系工单申请，开通后配置生效预计需要5个工作日左右，具体时间以最终回复为准。
     */
  async DescribeStreamPlayInfoList(
    req: DescribeStreamPlayInfoListRequest,
    cb?: (error: string, rep: DescribeStreamPlayInfoListResponse) => void
  ): Promise<DescribeStreamPlayInfoListResponse> {
    return this.request("DescribeStreamPlayInfoList", req, cb)
  }

  /**
   * 添加证书
   */
  async CreateLiveCert(
    req: CreateLiveCertRequest,
    cb?: (error: string, rep: CreateLiveCertResponse) => void
  ): Promise<CreateLiveCertResponse> {
    return this.request("CreateLiveCert", req, cb)
  }

  /**
   * 获取转码规则列表
   */
  async DescribeLiveTranscodeRules(
    req: DescribeLiveTranscodeRulesRequest,
    cb?: (error: string, rep: DescribeLiveTranscodeRulesResponse) => void
  ): Promise<DescribeLiveTranscodeRulesResponse> {
    return this.request("DescribeLiveTranscodeRules", req, cb)
  }

  /**
   * 获取单个截图模板。
   */
  async DescribeLiveSnapshotTemplate(
    req: DescribeLiveSnapshotTemplateRequest,
    cb?: (error: string, rep: DescribeLiveSnapshotTemplateResponse) => void
  ): Promise<DescribeLiveSnapshotTemplateResponse> {
    return this.request("DescribeLiveSnapshotTemplate", req, cb)
  }

  /**
   * 获取回调模板列表
   */
  async DescribeLiveCallbackTemplates(
    req?: DescribeLiveCallbackTemplatesRequest,
    cb?: (error: string, rep: DescribeLiveCallbackTemplatesResponse) => void
  ): Promise<DescribeLiveCallbackTemplatesResponse> {
    return this.request("DescribeLiveCallbackTemplates", req, cb)
  }

  /**
   * 提前结束录制，中止运行中的录制任务并生成录制文件。任务被成功终止后，本次任务将不再启动。
   */
  async StopRecordTask(
    req: StopRecordTaskRequest,
    cb?: (error: string, rep: StopRecordTaskResponse) => void
  ): Promise<StopRecordTaskResponse> {
    return this.request("StopRecordTask", req, cb)
  }

  /**
   * 获取截图模板列表。
   */
  async DescribeLiveSnapshotTemplates(
    req?: DescribeLiveSnapshotTemplatesRequest,
    cb?: (error: string, rep: DescribeLiveSnapshotTemplatesResponse) => void
  ): Promise<DescribeLiveSnapshotTemplatesResponse> {
    return this.request("DescribeLiveSnapshotTemplates", req, cb)
  }

  /**
   * 说明：录制后的文件存放于点播平台。用户如需使用录制功能，需首先自行开通点播账号并确保账号可用。录制文件存放后，相关费用（含存储以及下行播放流量）按照点播平台计费方式收取，请参考对应文档。
   */
  async StopLiveRecord(
    req: StopLiveRecordRequest,
    cb?: (error: string, rep: StopLiveRecordResponse) => void
  ): Promise<StopLiveRecordResponse> {
    return this.request("StopLiveRecord", req, cb)
  }

  /**
   * 修改播放鉴权key
   */
  async ModifyLivePlayAuthKey(
    req: ModifyLivePlayAuthKeyRequest,
    cb?: (error: string, rep: ModifyLivePlayAuthKeyResponse) => void
  ): Promise<ModifyLivePlayAuthKeyResponse> {
    return this.request("ModifyLivePlayAuthKey", req, cb)
  }

  /**
   * 获取单个转码模板。
   */
  async DescribeLiveTranscodeTemplate(
    req: DescribeLiveTranscodeTemplateRequest,
    cb?: (error: string, rep: DescribeLiveTranscodeTemplateResponse) => void
  ): Promise<DescribeLiveTranscodeTemplateResponse> {
    return this.request("DescribeLiveTranscodeTemplate", req, cb)
  }

  /**
   * 接口用来查询直播增值业务--截图的张数
   */
  async DescribeScreenShotSheetNumList(
    req: DescribeScreenShotSheetNumListRequest,
    cb?: (error: string, rep: DescribeScreenShotSheetNumListResponse) => void
  ): Promise<DescribeScreenShotSheetNumListResponse> {
    return this.request("DescribeScreenShotSheetNumList", req, cb)
  }

  /**
   * 解绑域名证书
   */
  async UnBindLiveDomainCert(
    req: UnBindLiveDomainCertRequest,
    cb?: (error: string, rep: UnBindLiveDomainCertResponse) => void
  ): Promise<UnBindLiveDomainCertResponse> {
    return this.request("UnBindLiveDomainCert", req, cb)
  }

  /**
   * 删除录制任务配置。删除操作不影响正在运行当中的任务，仅对删除之后新的推流有效。
   */
  async DeleteRecordTask(
    req: DeleteRecordTaskRequest,
    cb?: (error: string, rep: DeleteRecordTaskResponse) => void
  ): Promise<DeleteRecordTaskResponse> {
    return this.request("DeleteRecordTask", req, cb)
  }

  /**
   * 支持查询某天或某段时间的转码详细信息。
   */
  async DescribeLiveTranscodeDetailInfo(
    req: DescribeLiveTranscodeDetailInfoRequest,
    cb?: (error: string, rep: DescribeLiveTranscodeDetailInfoResponse) => void
  ): Promise<DescribeLiveTranscodeDetailInfoResponse> {
    return this.request("DescribeLiveTranscodeDetailInfo", req, cb)
  }

  /**
   * 批量获取日志URL。
   */
  async DescribeLogDownloadList(
    req: DescribeLogDownloadListRequest,
    cb?: (error: string, rep: DescribeLogDownloadListResponse) => void
  ): Promise<DescribeLogDownloadListResponse> {
    return this.request("DescribeLogDownloadList", req, cb)
  }

  /**
   * 获取录制规则列表
   */
  async DescribeLiveRecordRules(
    req?: DescribeLiveRecordRulesRequest,
    cb?: (error: string, rep: DescribeLiveRecordRulesResponse) => void
  ): Promise<DescribeLiveRecordRulesResponse> {
    return this.request("DescribeLiveRecordRules", req, cb)
  }

  /**
   * 获取直播延播列表。
   */
  async DescribeLiveDelayInfoList(
    req?: DescribeLiveDelayInfoListRequest,
    cb?: (error: string, rep: DescribeLiveDelayInfoListResponse) => void
  ): Promise<DescribeLiveDelayInfoListResponse> {
    return this.request("DescribeLiveDelayInfoList", req, cb)
  }

  /**
   * 删除录制规则。
   */
  async DeleteLiveRecordRule(
    req: DeleteLiveRecordRuleRequest,
    cb?: (error: string, rep: DeleteLiveRecordRuleResponse) => void
  ): Promise<DeleteLiveRecordRuleResponse> {
    return this.request("DeleteLiveRecordRule", req, cb)
  }

  /**
   * 查询直播域名信息。
   */
  async DescribeLiveDomain(
    req: DescribeLiveDomainRequest,
    cb?: (error: string, rep: DescribeLiveDomainResponse) => void
  ): Promise<DescribeLiveDomainResponse> {
    return this.request("DescribeLiveDomain", req, cb)
  }

  /**
     * 创建回调规则，需要先调用[CreateLiveCallbackTemplate](/document/product/267/32637)接口创建回调模板，将返回的模板id绑定到域名/路径进行使用。
<br>回调协议相关文档：[事件消息通知](/document/product/267/32744)。
     */
  async CreateLiveCallbackRule(
    req: CreateLiveCallbackRuleRequest,
    cb?: (error: string, rep: CreateLiveCallbackRuleResponse) => void
  ): Promise<CreateLiveCallbackRuleResponse> {
    return this.request("CreateLiveCallbackRule", req, cb)
  }

  /**
     * 域名绑定证书。
注意：需先调用添加证书接口进行证书添加。获取到证书Id后再调用该接口进行绑定。
     */
  async BindLiveDomainCert(
    req: BindLiveDomainCertRequest,
    cb?: (error: string, rep: BindLiveDomainCertResponse) => void
  ): Promise<BindLiveDomainCertResponse> {
    return this.request("BindLiveDomainCert", req, cb)
  }

  /**
   * 获取回调规则列表
   */
  async DescribeLiveCallbackRules(
    req?: DescribeLiveCallbackRulesRequest,
    cb?: (error: string, rep: DescribeLiveCallbackRulesResponse) => void
  ): Promise<DescribeLiveCallbackRulesResponse> {
    return this.request("DescribeLiveCallbackRules", req, cb)
  }

  /**
     * 查询下行播放错误码信息，某段时间内1分钟粒度的各http错误码出现的次数，包括4xx，5xx。


     */
  async DescribePlayErrorCodeDetailInfoList(
    req: DescribePlayErrorCodeDetailInfoListRequest,
    cb?: (error: string, rep: DescribePlayErrorCodeDetailInfoListResponse) => void
  ): Promise<DescribePlayErrorCodeDetailInfoListResponse> {
    return this.request("DescribePlayErrorCodeDetailInfoList", req, cb)
  }

  /**
     * 返回已经推过流的流列表。<br>
注意：分页最多支持查询1万条记录，可通过调整查询时间范围来获取更多数据。
     */
  async DescribeLiveStreamPublishedList(
    req: DescribeLiveStreamPublishedListRequest,
    cb?: (error: string, rep: DescribeLiveStreamPublishedListResponse) => void
  ): Promise<DescribeLiveStreamPublishedListResponse> {
    return this.request("DescribeLiveStreamPublishedList", req, cb)
  }

  /**
     * 查询指定时间段范围内启动和结束的截图任务列表。
- 使用前提
1. 仅用于查询由 CreateScreenshotTask接口创建的截图任务。
2. 不能查询被 DeleteScreenshotTask接口删除以及已过期（平台侧保留3个月）的截图任务。
     */
  async DescribeScreenshotTask(
    req: DescribeScreenshotTaskRequest,
    cb?: (error: string, rep: DescribeScreenshotTaskResponse) => void
  ): Promise<DescribeScreenshotTaskResponse> {
    return this.request("DescribeScreenshotTask", req, cb)
  }

  /**
     * 直播推流带宽和流量数据查询。
推流计费会先取全球推流用量和全球播放用量进行比较，满足计费条件后再按各地区用量出账。详情参见[计费文档](https://cloud.tencent.com/document/product/267/34175)。
     */
  async DescribePushBandwidthAndFluxList(
    req: DescribePushBandwidthAndFluxListRequest,
    cb?: (error: string, rep: DescribePushBandwidthAndFluxListResponse) => void
  ): Promise<DescribePushBandwidthAndFluxListResponse> {
    return this.request("DescribePushBandwidthAndFluxList", req, cb)
  }

  /**
   * 删除截图任务配置。删除操作不影响正在运行当中的任务，仅对删除之后新的推流有效。
   */
  async DeleteScreenshotTask(
    req: DeleteScreenshotTaskRequest,
    cb?: (error: string, rep: DeleteScreenshotTaskResponse) => void
  ): Promise<DeleteScreenshotTaskResponse> {
    return this.request("DeleteScreenshotTask", req, cb)
  }

  /**
   * 禁止某条流的推送，可以预设某个时刻将流恢复。
   */
  async ForbidLiveStream(
    req: ForbidLiveStreamRequest,
    cb?: (error: string, rep: ForbidLiveStreamResponse) => void
  ): Promise<ForbidLiveStreamResponse> {
    return this.request("ForbidLiveStream", req, cb)
  }

  /**
   * 添加域名，一次只能提交一个域名。域名必须已备案。
   */
  async AddLiveDomain(
    req: AddLiveDomainRequest,
    cb?: (error: string, rep: AddLiveDomainResponse) => void
  ): Promise<AddLiveDomainResponse> {
    return this.request("AddLiveDomain", req, cb)
  }

  /**
   * 查询直播转推计费带宽，查询时间范围最大支持3个月内的数据，时间跨度最长31天。
   */
  async DescribeDeliverBandwidthList(
    req: DescribeDeliverBandwidthListRequest,
    cb?: (error: string, rep: DescribeDeliverBandwidthListResponse) => void
  ): Promise<DescribeDeliverBandwidthListResponse> {
    return this.request("DescribeDeliverBandwidthList", req, cb)
  }

  /**
   * 查询实时的域名维度下行播放数据，由于数据处理有耗时，接口默认查询4分钟前的准实时数据。
   */
  async DescribeLiveDomainPlayInfoList(
    req: DescribeLiveDomainPlayInfoListRequest,
    cb?: (error: string, rep: DescribeLiveDomainPlayInfoListResponse) => void
  ): Promise<DescribeLiveDomainPlayInfoListResponse> {
    return this.request("DescribeLiveDomainPlayInfoList", req, cb)
  }

  /**
   * 用于查询回调事件。
   */
  async DescribeCallbackRecordsList(
    req: DescribeCallbackRecordsListRequest,
    cb?: (error: string, rep: DescribeCallbackRecordsListResponse) => void
  ): Promise<DescribeCallbackRecordsListResponse> {
    return this.request("DescribeCallbackRecordsList", req, cb)
  }

  /**
     * 创建录制规则，需要先调用[CreateLiveRecordTemplate](/document/product/267/32614)接口创建录制模板，将返回的模板id绑定到流使用。
<br>录制相关文档：[直播录制](/document/product/267/32739)。
     */
  async CreateLiveRecordRule(
    req: CreateLiveRecordRuleRequest,
    cb?: (error: string, rep: CreateLiveRecordRuleResponse) => void
  ): Promise<CreateLiveRecordRuleResponse> {
    return this.request("CreateLiveRecordRule", req, cb)
  }

  /**
   * 获取单个水印信息。
   */
  async DescribeLiveWatermark(
    req: DescribeLiveWatermarkRequest,
    cb?: (error: string, rep: DescribeLiveWatermarkResponse) => void
  ): Promise<DescribeLiveWatermarkResponse> {
    return this.request("DescribeLiveWatermark", req, cb)
  }

  /**
   * 获取转码模板列表。
   */
  async DescribeLiveTranscodeTemplates(
    req?: DescribeLiveTranscodeTemplatesRequest,
    cb?: (error: string, rep: DescribeLiveTranscodeTemplatesResponse) => void
  ): Promise<DescribeLiveTranscodeTemplatesResponse> {
    return this.request("DescribeLiveTranscodeTemplates", req, cb)
  }

  /**
     * 创建录制模板，数量上限：50，成功返回模板id后，需要调用[CreateLiveRecordRule](/document/product/267/32615)接口，将模板id绑定到流进行使用。
<br>录制相关文档：[直播录制](/document/product/267/32739)。
     */
  async CreateLiveRecordTemplate(
    req: CreateLiveRecordTemplateRequest,
    cb?: (error: string, rep: CreateLiveRecordTemplateResponse) => void
  ): Promise<CreateLiveRecordTemplateResponse> {
    return this.request("CreateLiveRecordTemplate", req, cb)
  }

  /**
   * 直播播放带宽和流量数据查询。
   */
  async DescribeBillBandwidthAndFluxList(
    req: DescribeBillBandwidthAndFluxListRequest,
    cb?: (error: string, rep: DescribeBillBandwidthAndFluxListResponse) => void
  ): Promise<DescribeBillBandwidthAndFluxListResponse> {
    return this.request("DescribeBillBandwidthAndFluxList", req, cb)
  }

  /**
   * 停止使用某个直播域名。
   */
  async ForbidLiveDomain(
    req: ForbidLiveDomainRequest,
    cb?: (error: string, rep: ForbidLiveDomainResponse) => void
  ): Promise<ForbidLiveDomainResponse> {
    return this.request("ForbidLiveDomain", req, cb)
  }

  /**
     * 创建转码规则，需要先调用[CreateLiveTranscodeTemplate](/document/product/267/32646)接口创建转码模板，将返回的模板id绑定到流使用。
<br>转码相关文档：[直播转封装及转码](/document/product/267/32736)。
     */
  async CreateLiveTranscodeRule(
    req: CreateLiveTranscodeRuleRequest,
    cb?: (error: string, rep: CreateLiveTranscodeRuleResponse) => void
  ): Promise<CreateLiveTranscodeRuleResponse> {
    return this.request("CreateLiveTranscodeRule", req, cb)
  }

  /**
   * 获取水印规则列表。
   */
  async DescribeLiveWatermarkRules(
    req?: DescribeLiveWatermarkRulesRequest,
    cb?: (error: string, rep: DescribeLiveWatermarkRulesResponse) => void
  ): Promise<DescribeLiveWatermarkRulesResponse> {
    return this.request("DescribeLiveWatermarkRules", req, cb)
  }

  /**
   * 注：DeleteLiveRecord 接口仅用于删除录制任务记录，不具备停止录制的功能，也不能删除正在进行中的录制。如果需要停止录制任务，请使用终止录制[StopLiveRecord](/document/product/267/30146) 接口。
   */
  async DeleteLiveRecord(
    req: DeleteLiveRecordRequest,
    cb?: (error: string, rep: DeleteLiveRecordResponse) => void
  ): Promise<DeleteLiveRecordResponse> {
    return this.request("DeleteLiveRecord", req, cb)
  }

  /**
     * 创建截图规则，需要先调用[CreateLiveSnapshotTemplate](/document/product/267/32624)接口创建截图模板，然后将返回的模板 ID 绑定到流进行使用。
<br>截图相关文档：[直播截图](/document/product/267/32737)。
注意：单个域名仅支持关联一个截图模板。
     */
  async CreateLiveSnapshotRule(
    req: CreateLiveSnapshotRuleRequest,
    cb?: (error: string, rep: CreateLiveSnapshotRuleResponse) => void
  ): Promise<CreateLiveSnapshotRuleResponse> {
    return this.request("CreateLiveSnapshotRule", req, cb)
  }

  /**
   * 查询按省份和运营商分组的下行播放数据。
   */
  async DescribeGroupProIspPlayInfoList(
    req: DescribeGroupProIspPlayInfoListRequest,
    cb?: (error: string, rep: DescribeGroupProIspPlayInfoListResponse) => void
  ): Promise<DescribeGroupProIspPlayInfoListResponse> {
    return this.request("DescribeGroupProIspPlayInfoList", req, cb)
  }

  /**
   * 输入某个时间点（1分钟维度），查询该时间点所有流的下行信息。
   */
  async DescribeAllStreamPlayInfoList(
    req: DescribeAllStreamPlayInfoListRequest,
    cb?: (error: string, rep: DescribeAllStreamPlayInfoListResponse) => void
  ): Promise<DescribeAllStreamPlayInfoListResponse> {
    return this.request("DescribeAllStreamPlayInfoList", req, cb)
  }

  /**
   * 查询播放鉴权key。
   */
  async DescribeLivePlayAuthKey(
    req: DescribeLivePlayAuthKeyRequest,
    cb?: (error: string, rep: DescribeLivePlayAuthKeyResponse) => void
  ): Promise<DescribeLivePlayAuthKeyResponse> {
    return this.request("DescribeLivePlayAuthKey", req, cb)
  }

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
  async DescribeLiveStreamState(
    req: DescribeLiveStreamStateRequest,
    cb?: (error: string, rep: DescribeLiveStreamStateResponse) => void
  ): Promise<DescribeLiveStreamStateResponse> {
    return this.request("DescribeLiveStreamState", req, cb)
  }

  /**
     * 设置直播域名 Referer 黑白名单。
由于 Referer 信息包含在 http 协议中，在开启配置后，播放协议为 rtmp 或 WebRTC 不会校验 Referer 配置，仍可正常播放。如需配置 Referer 鉴权建议使用 http-flv 或 http-hls 协议播放。
     */
  async ModifyLiveDomainReferer(
    req: ModifyLiveDomainRefererRequest,
    cb?: (error: string, rep: ModifyLiveDomainRefererResponse) => void
  ): Promise<ModifyLiveDomainRefererResponse> {
    return this.request("ModifyLiveDomainReferer", req, cb)
  }

  /**
   * 删除录制模板。
   */
  async DeleteLiveRecordTemplate(
    req: DeleteLiveRecordTemplateRequest,
    cb?: (error: string, rep: DeleteLiveRecordTemplateResponse) => void
  ): Promise<DeleteLiveRecordTemplateResponse> {
    return this.request("DeleteLiveRecordTemplate", req, cb)
  }

  /**
   * 取消直播流设置的延时配置，恢复实时直播画面。
   */
  async ResumeDelayLiveStream(
    req: ResumeDelayLiveStreamRequest,
    cb?: (error: string, rep: ResumeDelayLiveStreamResponse) => void
  ): Promise<ResumeDelayLiveStreamResponse> {
    return this.request("ResumeDelayLiveStream", req, cb)
  }

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
  async CreateRecordTask(
    req: CreateRecordTaskRequest,
    cb?: (error: string, rep: CreateRecordTaskResponse) => void
  ): Promise<CreateRecordTaskResponse> {
    return this.request("CreateRecordTask", req, cb)
  }

  /**
     * 创建转码模板，成功返回模板id后，需要调用[CreateLiveTranscodeRule](/document/product/267/32647)接口，将返回的模板id绑定到流使用。
<br>转码相关文档：[直播转封装及转码](/document/product/267/32736)。
     */
  async CreateLiveTranscodeTemplate(
    req: CreateLiveTranscodeTemplateRequest,
    cb?: (error: string, rep: CreateLiveTranscodeTemplateResponse) => void
  ): Promise<CreateLiveTranscodeTemplateResponse> {
    return this.request("CreateLiveTranscodeTemplate", req, cb)
  }

  /**
   * 获取证书信息列表
   */
  async DescribeLiveCerts(
    req?: DescribeLiveCertsRequest,
    cb?: (error: string, rep: DescribeLiveCertsResponse) => void
  ): Promise<DescribeLiveCertsResponse> {
    return this.request("DescribeLiveCerts", req, cb)
  }

  /**
   * 启用状态为停用的直播域名。
   */
  async EnableLiveDomain(
    req: EnableLiveDomainRequest,
    cb?: (error: string, rep: EnableLiveDomainResponse) => void
  ): Promise<EnableLiveDomainResponse> {
    return this.request("EnableLiveDomain", req, cb)
  }

  /**
   * 该接口用来取消混流。用法与 mix_streamv2.cancel_mix_stream 基本一致。
   */
  async CancelCommonMixStream(
    req: CancelCommonMixStreamRequest,
    cb?: (error: string, rep: CancelCommonMixStreamResponse) => void
  ): Promise<CancelCommonMixStreamResponse> {
    return this.request("CancelCommonMixStream", req, cb)
  }

  /**
   * 查询用户套餐包总量、使用量、剩余量、包状态、购买时间和过期时间等。
   */
  async DescribeLivePackageInfo(
    req: DescribeLivePackageInfoRequest,
    cb?: (error: string, rep: DescribeLivePackageInfoResponse) => void
  ): Promise<DescribeLivePackageInfoResponse> {
    return this.request("DescribeLivePackageInfo", req, cb)
  }

  /**
     * 创建临时拉流转推任务，目前限制添加10条任务。

注意：该接口用于创建临时拉流转推任务，
拉流源地址即 FromUrl 可以是腾讯或非腾讯数据源，
但转推目标地址即 ToUrl 目前限制为已注册的腾讯直播域名。
     */
  async CreatePullStreamConfig(
    req: CreatePullStreamConfigRequest,
    cb?: (error: string, rep: CreatePullStreamConfigResponse) => void
  ): Promise<CreatePullStreamConfigResponse> {
    return this.request("CreatePullStreamConfig", req, cb)
  }

  /**
   * 查询所有实时流的推流信息，包括客户端IP，服务端IP，帧率，码率，域名，开始推流时间。
   */
  async DescribeLiveStreamPushInfoList(
    req: DescribeLiveStreamPushInfoListRequest,
    cb?: (error: string, rep: DescribeLiveStreamPushInfoListResponse) => void
  ): Promise<DescribeLiveStreamPushInfoListResponse> {
    return this.request("DescribeLiveStreamPushInfoList", req, cb)
  }

  /**
   * 删除截图模板
   */
  async DeleteLiveSnapshotTemplate(
    req: DeleteLiveSnapshotTemplateRequest,
    cb?: (error: string, rep: DeleteLiveSnapshotTemplateResponse) => void
  ): Promise<DeleteLiveSnapshotTemplateResponse> {
    return this.request("DeleteLiveSnapshotTemplate", req, cb)
  }
}
