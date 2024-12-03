"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
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
const abstract_client_1 = require("../../../common/abstract_client");
/**
 * live client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(clientConfig) {
        super("live.tencentcloudapi.com", "2018-08-01", clientConfig);
    }
    /**
     * 该接口用来查询账号下所有的导播台列表
     */
    async DescribeCasterList(req, cb) {
        return this.request("DescribeCasterList", req, cb);
    }
    /**
     * 断开推流连接，但可以重新推流。
注：对已经不活跃的流，调用该断流接口时，接口返回成功。
     */
    async DropLiveStream(req, cb) {
        return this.request("DropLiveStream", req, cb);
    }
    /**
     * 查询水印列表。
     */
    async DescribeLiveWatermarks(req, cb) {
        return this.request("DescribeLiveWatermarks", req, cb);
    }
    /**
     * 查询并发录制路数，对慢直播和普通直播适用。
     */
    async DescribeConcurrentRecordStreamNum(req, cb) {
        return this.request("DescribeConcurrentRecordStreamNum", req, cb);
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
    async CreateLiveRecord(req, cb) {
        return this.request("CreateLiveRecord", req, cb);
    }
    /**
     * 更新水印。
     */
    async UpdateLiveWatermark(req, cb) {
        return this.request("UpdateLiveWatermark", req, cb);
    }
    /**
     * 修改录制模板配置。
     */
    async ModifyLiveRecordTemplate(req, cb) {
        return this.request("ModifyLiveRecordTemplate", req, cb);
    }
    /**
     * 查询指定时间段范围内启动和结束的录制任务列表。
- 使用前提
1. 仅用于查询由 CreateRecordTask 接口创建的录制任务。
2. 不能查询被 DeleteRecordTask 接口删除以及已过期（平台侧保留3个月）的录制任务。

     */
    async DescribeRecordTask(req, cb) {
        return this.request("DescribeRecordTask", req, cb);
    }
    /**
     * 该接口用来停止导播台的预监任务。
     */
    async StopCasterPvw(req, cb) {
        return this.request("StopCasterPvw", req, cb);
    }
    /**
     * 创建水印规则，需要先调用[AddLiveWatermark](/document/product/267/30154)接口添加水印，将返回的水印id绑定到流使用。
     */
    async CreateLiveWatermarkRule(req, cb) {
        return this.request("CreateLiveWatermarkRule", req, cb);
    }
    /**
     * 用于查询推断流事件。<br>

注意：
1. 该接口提供离线推断流记录查询功能，不可作为重要业务场景强依赖接口。
2. 该接口可通过使用IsFilter进行过滤，返回推流历史记录。
     */
    async DescribeLiveStreamEventList(req, cb) {
        return this.request("DescribeLiveStreamEventList", req, cb);
    }
    /**
     * 该接口用来创建通用混流。用法与旧接口 mix_streamv2.start_mix_stream_advanced 基本一致。
注意：当前最多支持16路混流。
最佳实践：https://cloud.tencent.com/document/product/267/45566
     */
    async CreateCommonMixStream(req, cb) {
        return this.request("CreateCommonMixStream", req, cb);
    }
    /**
     * 该接口为监控数据接口，数据采集及统计方式与计费数据不同，仅供运营分析使用，不能用于计费对账参考。
查询某段时间内5分钟粒度的各播放http状态码的个数。
备注：数据延迟1小时，如10:00-10:59点的数据12点才能查到。
     */
    async DescribeHttpStatusInfoList(req, cb) {
        return this.request("DescribeHttpStatusInfoList", req, cb);
    }
    /**
     * 该接口为监控数据接口，数据采集及统计方式与计费数据不同，仅供运营分析使用，不能用于计费对账参考。
查询某省份某运营商下行播放数据，包括带宽，流量，请求数，并发连接数信息。
     */
    async DescribeProvinceIspPlayInfoList(req, cb) {
        return this.request("DescribeProvinceIspPlayInfoList", req, cb);
    }
    /**
     * 修改播放域名信息。
     */
    async ModifyLivePlayDomain(req, cb) {
        return this.request("ModifyLivePlayDomain", req, cb);
    }
    /**
     * 该接口为监控数据接口，数据采集及统计方式与计费数据不同，仅供运营分析使用，不能用于计费对账参考。
查询流id的上行推流质量数据，包括音视频的帧率，码率，流逝时间，编码格式等。
     */
    async DescribeStreamPushInfoList(req, cb) {
        return this.request("DescribeStreamPushInfoList", req, cb);
    }
    /**
     * 该接口用来启动直播流监播任务。
     */
    async StartLiveStreamMonitor(req, cb) {
        return this.request("StartLiveStreamMonitor", req, cb);
    }
    /**
     * 获取截图规则列表
     */
    async DescribeLiveSnapshotRules(req, cb) {
        return this.request("DescribeLiveSnapshotRules", req, cb);
    }
    /**
     * 调用该接口，释放导播台实例，但保留所有的配置。
执行该接口，预监与主监画面停止，第三方推流停止。
点播文件与直播地址将停止展示，客户自行推到导播台的流需要手动停止。
     */
    async ReleaseCaster(req, cb) {
        return this.request("ReleaseCaster", req, cb);
    }
    /**
     * 查询某个时间范围内所有时移流列表。最大支持查询24小时内的数据。
     */
    async DescribeTimeShiftStreamList(req, cb) {
        return this.request("DescribeTimeShiftStreamList", req, cb);
    }
    /**
     * 该接口用来向导播台中添加一个输入源，该输入源可以是拉流地址、或是一个文件链接
     */
    async AddCasterInputInfo(req, cb) {
        return this.request("AddCasterInputInfo", req, cb);
    }
    /**
     * 创建直播垫片模板。
     */
    async CreateLivePadTemplate(req, cb) {
        return this.request("CreateLivePadTemplate", req, cb);
    }
    /**
     * 获取截图模板列表。
     */
    async DescribeLiveSnapshotTemplates(req, cb) {
        return this.request("DescribeLiveSnapshotTemplates", req, cb);
    }
    /**
     * 查询直播域名 Referer 黑白名单配置。
由于 Referer 信息包含在 http 协议中，在开启配置后，播放协议为 rtmp 或 WebRTC 不会校验 Referer 配置，仍可正常播放。如需配置 Referer 鉴权建议使用 http-flv 或 http-hls 协议播放。
     */
    async DescribeLiveDomainReferer(req, cb) {
        return this.request("DescribeLiveDomainReferer", req, cb);
    }
    /**
     * 获取单个转码模板。
     */
    async DescribeLiveTranscodeTemplate(req, cb) {
        return this.request("DescribeLiveTranscodeTemplate", req, cb);
    }
    /**
     * 支持直播时移写入量数据查询。
     */
    async DescribeLiveTimeShiftWriteSizeInfoList(req, cb) {
        return this.request("DescribeLiveTimeShiftWriteSizeInfoList", req, cb);
    }
    /**
     * 设置直播域名 Referer 黑白名单。
由于 Referer 信息包含在 http 协议中，在开启配置后，播放协议为 rtmp 或 WebRTC 不会校验 Referer 配置，仍可正常播放。如需配置 Referer 鉴权建议使用 http-flv 或 http-hls 协议播放。
     */
    async ModifyLiveDomainReferer(req, cb) {
        return this.request("ModifyLiveDomainReferer", req, cb);
    }
    /**
     * 该接口为监控数据接口，数据采集及统计方式与计费数据不同，仅供运营分析使用，不能用于计费对账参考。
查询某段时间top n客户端ip汇总信息（暂支持top 1000）
     */
    async DescribeTopClientIpSumInfoList(req, cb) {
        return this.request("DescribeTopClientIpSumInfoList", req, cb);
    }
    /**
     * 该接口用来生成导播台推流地址
     */
    async CreateCasterInputPushUrl(req, cb) {
        return this.request("CreateCasterInputPushUrl", req, cb);
    }
    /**
     * 该接口用来查询某个导播台的推流信息列表。
     */
    async DescribeCasterOutputInfos(req, cb) {
        return this.request("DescribeCasterOutputInfos", req, cb);
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
    async CreateScreenshotTask(req, cb) {
        return this.request("CreateScreenshotTask", req, cb);
    }
    /**
     * 获取录制模板列表。
     */
    async DescribeLiveRecordTemplates(req, cb) {
        return this.request("DescribeLiveRecordTemplates", req, cb);
    }
    /**
     * 该接口用来停止直播流监播任务。
     */
    async StopLiveStreamMonitor(req, cb) {
        return this.request("StopLiveStreamMonitor", req, cb);
    }
    /**
     * 验证用户是否拥有特定直播域名。
     */
    async AuthenticateDomainOwner(req, cb) {
        return this.request("AuthenticateDomainOwner", req, cb);
    }
    /**
     * 修改截图模板配置。
     */
    async ModifyLiveSnapshotTemplate(req, cb) {
        return this.request("ModifyLiveSnapshotTemplate", req, cb);
    }
    /**
     * 查询某时间段top n的域名或流id信息（暂支持top 1000）。
     */
    async DescribeVisitTopSumInfoList(req, cb) {
        return this.request("DescribeVisitTopSumInfoList", req, cb);
    }
    /**
     * 该接口用来修改导播台文本配置。
     */
    async ModifyCasterMarkWordInfo(req, cb) {
        return this.request("ModifyCasterMarkWordInfo", req, cb);
    }
    /**
     * 该接口用来增加导播台的布局参数。
     */
    async AddCasterLayoutInfo(req, cb) {
        return this.request("AddCasterLayoutInfo", req, cb);
    }
    /**
     * 获取域名证书信息。
     */
    async DescribeLiveDomainCert(req, cb) {
        return this.request("DescribeLiveDomainCert", req, cb);
    }
    /**
     * 添加水印，成功返回水印 ID 后，需要调用[CreateLiveWatermarkRule](/document/product/267/32629)接口将水印 ID 绑定到流使用。 水印数量上限 100，超过后需要先删除，再添加。
     */
    async AddLiveWatermark(req, cb) {
        return this.request("AddLiveWatermark", req, cb);
    }
    /**
     * 海外分区直播播放带宽和流量数据查询。
     */
    async DescribeAreaBillBandwidthAndFluxList(req, cb) {
        return this.request("DescribeAreaBillBandwidthAndFluxList", req, cb);
    }
    /**
     * 该接口用来查询某个导播台的文本列表。
     */
    async DescribeCasterMarkWordInfos(req, cb) {
        return this.request("DescribeCasterMarkWordInfos", req, cb);
    }
    /**
     * 该接口用来将布局信息从导播台中删除
     */
    async DeleteCasterLayoutInfo(req, cb) {
        return this.request("DeleteCasterLayoutInfo", req, cb);
    }
    /**
     * 删除水印规则
     */
    async DeleteLiveWatermarkRule(req, cb) {
        return this.request("DeleteLiveWatermarkRule", req, cb);
    }
    /**
     * 删除直播垫片模板。
     */
    async DeleteLivePadTemplate(req, cb) {
        return this.request("DeleteLivePadTemplate", req, cb);
    }
    /**
     * 删除回调规则。
     */
    async DeleteLiveCallbackRule(req, cb) {
        return this.request("DeleteLiveCallbackRule", req, cb);
    }
    /**
     * 更新拉流配置。该接口为已下线接口，请使用新接口 ModifyLivePullStreamTask。
     */
    async ModifyPullStreamConfig(req, cb) {
        return this.request("ModifyPullStreamConfig", req, cb);
    }
    /**
     * 创建截图模板，数量上限：50，成功返回模板id后，需要调用[CreateLiveSnapshotRule](/document/product/267/32625)接口，将模板id绑定到流使用。
<br>截图相关文档：[直播截图](/document/product/267/32737)。
     */
    async CreateLiveSnapshotTemplate(req, cb) {
        return this.request("CreateLiveSnapshotTemplate", req, cb);
    }
    /**
     * 返回正在直播中的流列表。适用于推流成功后查询在线流信息。

注意：
1. 该接口仅提供辅助查询在线流列表功能，业务重要场景不可强依赖该接口。
2. 该接口仅适用于流数少于2万路的情况，对于流数较大用户请联系售后。
     */
    async DescribeLiveStreamOnlineList(req, cb) {
        return this.request("DescribeLiveStreamOnlineList", req, cb);
    }
    /**
     * 启用择优调度。
注意：流维度的择优调度，当主备流结束后自动失效。
     */
    async EnableOptimalSwitching(req, cb) {
        return this.request("EnableOptimalSwitching", req, cb);
    }
    /**
     * 删除回调模板。
     */
    async DeleteLiveCallbackTemplate(req, cb) {
        return this.request("DeleteLiveCallbackTemplate", req, cb);
    }
    /**
     * 该接口用来修改导播台水印信息。
注意，修改的Index对应的水印需已存在
     */
    async ModifyCasterMarkPicInfo(req, cb) {
        return this.request("ModifyCasterMarkPicInfo", req, cb);
    }
    /**
     * 该接口用来获取导播台视频流的播放url，用来在页面上拉流展示。
     */
    async DescribeCasterPlayUrl(req, cb) {
        return this.request("DescribeCasterPlayUrl", req, cb);
    }
    /**
     * 查询直播推流鉴权key
     */
    async DescribeLivePushAuthKey(req, cb) {
        return this.request("DescribeLivePushAuthKey", req, cb);
    }
    /**
     * 删除直播拉流配置。该接口已下线,请使用新接口 DeleteLivePullStreamTask。
     */
    async DeletePullStreamConfig(req, cb) {
        return this.request("DeletePullStreamConfig", req, cb);
    }
    /**
     * 前提调用 DescribeTimeShiftStreamList 获得请求必要参数。查询指定范围内的时移流录制详情，最大支持24小时范围查询。
     */
    async DescribeTimeShiftRecordDetail(req, cb) {
        return this.request("DescribeTimeShiftRecordDetail", req, cb);
    }
    /**
     * 获取单个录制模板。
     */
    async DescribeLiveRecordTemplate(req, cb) {
        return this.request("DescribeLiveRecordTemplate", req, cb);
    }
    /**
     * 获取单个直播垫片模板
     */
    async DescribeLivePadTemplate(req, cb) {
        return this.request("DescribeLivePadTemplate", req, cb);
    }
    /**
     * 提前结束截图，中止运行中的截图任务。任务被成功终止后，本次任务将不再启动。
     */
    async StopScreenshotTask(req, cb) {
        return this.request("StopScreenshotTask", req, cb);
    }
    /**
     * 为导播台添加文本配置。
     */
    async AddCasterMarkWordInfo(req, cb) {
        return this.request("AddCasterMarkWordInfo", req, cb);
    }
    /**
     * 用来查询监播场次7天内的智能识别、断流、低帧率等信息的汇总报告。
     */
    async DescribeMonitorReport(req, cb) {
        return this.request("DescribeMonitorReport", req, cb);
    }
    /**
     * 查询直播拉流配置。该接口已下线,请使用新接口 DescribeLivePullStreamTasks。
     */
    async DescribePullStreamConfigs(req, cb) {
        return this.request("DescribePullStreamConfigs", req, cb);
    }
    /**
     * 该接口用来查询某个特定监播任务的配置。
     */
    async DescribeLiveStreamMonitor(req, cb) {
        return this.request("DescribeLiveStreamMonitor", req, cb);
    }
    /**
     * 删除水印。
     */
    async DeleteLiveWatermark(req, cb) {
        return this.request("DeleteLiveWatermark", req, cb);
    }
    /**
     * 该接口用来设置导播台的描述、名称、录制模板id等参数。
     */
    async ModifyCaster(req, cb) {
        return this.request("ModifyCaster", req, cb);
    }
    /**
     * 查询绑定证书的域名列表。
     */
    async DescribeLiveDomainCertBindings(req, cb) {
        return this.request("DescribeLiveDomainCertBindings", req, cb);
    }
    /**
     * 该接口为监控数据接口，数据采集及统计方式与计费数据不同，仅供运营分析使用，不能用于计费对账参考。
查询下行播放错误码信息。
     */
    async DescribePlayErrorCodeSumInfoList(req, cb) {
        return this.request("DescribePlayErrorCodeSumInfoList", req, cb);
    }
    /**
     * 针对大型活动直播，通过对直播流设置延时来控制现场与观众播放画面的时间间隔，避免突发状况造成影响。

注意：如果在推流前设置延播，需要提前5分钟设置，目前该接口只支持流粒度。
     */
    async AddDelayLiveStream(req, cb) {
        return this.request("AddDelayLiveStream", req, cb);
    }
    /**
     * 直播上行路数查询。
     */
    async DescribeUploadStreamNums(req, cb) {
        return this.request("DescribeUploadStreamNums", req, cb);
    }
    /**
     * 该接口为监控数据接口，数据采集及统计方式与计费数据不同，仅供运营分析使用，不能用于计费对账参考。
查询天维度每条流的播放数据，包括总流量等。
     */
    async DescribeStreamDayPlayInfoList(req, cb) {
        return this.request("DescribeStreamDayPlayInfoList", req, cb);
    }
    /**
     * 修改直播推流鉴权key
     */
    async ModifyLivePushAuthKey(req, cb) {
        return this.request("ModifyLivePushAuthKey", req, cb);
    }
    /**
     * 修改转码模板配置。
     */
    async ModifyLiveTranscodeTemplate(req, cb) {
        return this.request("ModifyLiveTranscodeTemplate", req, cb);
    }
    /**
     * 删除转码规则。
DomainName+AppName+StreamName+TemplateId唯一标识单个转码规则，如需删除需要强匹配。其中TemplateId必填，其余参数为空时也需要传空字符串进行强匹配。
     */
    async DeleteLiveTranscodeRule(req, cb) {
        return this.request("DeleteLiveTranscodeRule", req, cb);
    }
    /**
     * 查询转码总量数据，可查询近三个月内的数据。
注意：
如果是查询某一天内，则返回5分钟粒度数据；
如果是查询跨天或指定域名， 则返回1小时粒度数据。
     */
    async DescribeLiveTranscodeTotalInfo(req, cb) {
        return this.request("DescribeLiveTranscodeTotalInfo", req, cb);
    }
    /**
     * 删除截图规则。
     */
    async DeleteLiveSnapshotRule(req, cb) {
        return this.request("DeleteLiveSnapshotRule", req, cb);
    }
    /**
     * 删除接口 CreateLivePullStreamTask 创建的拉流任务。
注意：
1. 入参中的 TaskId 为 CreateLivePullStreamTask 接口创建时返回的TaskId。
2. 也可通过 DescribeLivePullStreamTasks 进行查询创建的任务。
     */
    async DeleteLivePullStreamTask(req, cb) {
        return this.request("DeleteLivePullStreamTask", req, cb);
    }
    /**
     * 获取禁推流列表。

注意：该接口仅作为直播辅助查询接口，重要业务场景不可强依赖该接口。
     */
    async DescribeLiveForbidStreamList(req, cb) {
        return this.request("DescribeLiveForbidStreamList", req, cb);
    }
    /**
     * 修改直播垫片模板。
     */
    async ModifyLivePadTemplate(req, cb) {
        return this.request("ModifyLivePadTemplate", req, cb);
    }
    /**
     * 获取单个水印信息。
     */
    async DescribeLiveWatermark(req, cb) {
        return this.request("DescribeLiveWatermark", req, cb);
    }
    /**
     * 获取证书信息
     */
    async DescribeLiveCert(req, cb) {
        return this.request("DescribeLiveCert", req, cb);
    }
    /**
     * 批量绑定证书对应的播放域名，并更新启用状态。
新建自有证书将自动上传至腾讯云ssl。
     */
    async ModifyLiveDomainCertBindings(req, cb) {
        return this.request("ModifyLiveDomainCertBindings", req, cb);
    }
    /**
     * 批量获取转推日志的URL。
     */
    async DescribeDeliverLogDownList(req, cb) {
        return this.request("DescribeDeliverLogDownList", req, cb);
    }
    /**
     * 该接口用来启动主监任务，并将获取主监画面的播放地址。
     */
    async CreateCasterPgm(req, cb) {
        return this.request("CreateCasterPgm", req, cb);
    }
    /**
     * 更新直播拉流任务。
1. 不支持修改拉流源类型，如需更换，请创建新任务。
     */
    async ModifyLivePullStreamTask(req, cb) {
        return this.request("ModifyLivePullStreamTask", req, cb);
    }
    /**
     * 查询直播增强用量明细信息。
     */
    async DescribeLiveEnhanceInfoList(req, cb) {
        return this.request("DescribeLiveEnhanceInfoList", req, cb);
    }
    /**
     * 查询拉流转推任务的时长信息。
     */
    async DescribePullTransformPushInfo(req, cb) {
        return this.request("DescribePullTransformPushInfo", req, cb);
    }
    /**
     * 创建回调模板，数量上限：50，成功返回模板id后，需要调用[CreateLiveCallbackRule](/document/product/267/32638)接口将模板 ID 绑定到域名/路径使用。
<br>回调协议相关文档：[事件消息通知](/document/product/267/32744)。
注意：至少填写一个回调 URL。
     */
    async CreateLiveCallbackTemplate(req, cb) {
        return this.request("CreateLiveCallbackTemplate", req, cb);
    }
    /**
     * 根据域名状态、类型等信息查询用户的域名信息。
     */
    async DescribeLiveDomains(req, cb) {
        return this.request("DescribeLiveDomains", req, cb);
    }
    /**
     * 该接口用来修改导播台的推流信息。
注：只有在主监启动前设置才生效，主监启动后设置，下次推流生效。
     */
    async ModifyCasterOutputInfo(req, cb) {
        return this.request("ModifyCasterOutputInfo", req, cb);
    }
    /**
     * 该接口用来启动预监任务，并将获取预监画面的播放地址。
     */
    async CreateCasterPvw(req, cb) {
        return this.request("CreateCasterPvw", req, cb);
    }
    /**
     * 恢复某条流的推流。
     */
    async ResumeLiveStream(req, cb) {
        return this.request("ResumeLiveStream", req, cb);
    }
    /**
     * 该接口用来查询某个导播台的水印列表。
     */
    async DescribeCasterMarkPicInfos(req, cb) {
        return this.request("DescribeCasterMarkPicInfos", req, cb);
    }
    /**
     * 获取单个回调模板。
     */
    async DescribeLiveCallbackTemplate(req, cb) {
        return this.request("DescribeLiveCallbackTemplate", req, cb);
    }
    /**
     * 删除已添加的直播域名
     */
    async DeleteLiveDomain(req, cb) {
        return this.request("DeleteLiveDomain", req, cb);
    }
    /**
     * 修改回调模板。
     */
    async ModifyLiveCallbackTemplate(req, cb) {
        return this.request("ModifyLiveCallbackTemplate", req, cb);
    }
    /**
     * 该接口用来新增图片水印。
     */
    async AddCasterMarkPicInfo(req, cb) {
        return this.request("AddCasterMarkPicInfo", req, cb);
    }
    /**
     * 删除直播时移模板。
     */
    async DeleteLiveTimeShiftTemplate(req, cb) {
        return this.request("DeleteLiveTimeShiftTemplate", req, cb);
    }
    /**
     * 该接口为监控数据接口，数据采集及统计方式与计费数据不同，仅供运营分析使用，不能用于计费对账参考。
查询按省份和运营商分组的下行播放数据。
     */
    async DescribeGroupProIspPlayInfoList(req, cb) {
        return this.request("DescribeGroupProIspPlayInfoList", req, cb);
    }
    /**
     * 该接口为监控数据接口，数据采集及统计方式与计费数据不同，仅供运营分析使用，不能用于计费对账参考。
查询播放数据，支持按流名称查询详细播放数据，也可按播放域名查询详细总数据，数据延迟4分钟左右。
     */
    async DescribeStreamPlayInfoList(req, cb) {
        return this.request("DescribeStreamPlayInfoList", req, cb);
    }
    /**
     * 该接口用来创建新的导播台
     */
    async CreateCaster(req, cb) {
        return this.request("CreateCaster", req, cb);
    }
    /**
     * 该接口用来查询某个导播台的布局列表
     */
    async DescribeCasterLayoutInfos(req, cb) {
        return this.request("DescribeCasterLayoutInfos", req, cb);
    }
    /**
     * 查询直播拉流任务状态信息。
     */
    async DescribeLivePullStreamTaskStatus(req, cb) {
        return this.request("DescribeLivePullStreamTaskStatus", req, cb);
    }
    /**
     * 获取单个截图模板。
     */
    async DescribeLiveSnapshotTemplate(req, cb) {
        return this.request("DescribeLiveSnapshotTemplate", req, cb);
    }
    /**
     * 获取回调模板列表
     */
    async DescribeLiveCallbackTemplates(req, cb) {
        return this.request("DescribeLiveCallbackTemplates", req, cb);
    }
    /**
     * 提前结束录制，中止运行中的录制任务并生成录制文件。任务被成功终止后，本次任务将不再启动。
     */
    async StopRecordTask(req, cb) {
        return this.request("StopRecordTask", req, cb);
    }
    /**
     * 修改直播时移模板。
     */
    async ModifyLiveTimeShiftTemplate(req, cb) {
        return this.request("ModifyLiveTimeShiftTemplate", req, cb);
    }
    /**
     * 该接口用来创建直播流监播任务。
     */
    async CreateLiveStreamMonitor(req, cb) {
        return this.request("CreateLiveStreamMonitor", req, cb);
    }
    /**
     * 创建直播垫片规则。
     */
    async CreateLivePadRule(req, cb) {
        return this.request("CreateLivePadRule", req, cb);
    }
    /**
     * 说明：录制后的文件存放于点播平台。用户如需使用录制功能，需首先自行开通点播账号并确保账号可用。录制文件存放后，相关费用（含存储以及下行播放流量）按照点播平台计费方式收取，请参考对应文档。
     */
    async StopLiveRecord(req, cb) {
        return this.request("StopLiveRecord", req, cb);
    }
    /**
     * 修改播放鉴权key
     */
    async ModifyLivePlayAuthKey(req, cb) {
        return this.request("ModifyLivePlayAuthKey", req, cb);
    }
    /**
     * 该接口用来删除一个导播台的所有信息。
注意，调用该接口后，所有的导播台信息将被清除，包括正在直播的内容也将直接中断。
     */
    async DeleteCaster(req, cb) {
        return this.request("DeleteCaster", req, cb);
    }
    /**
     * 删除转码模板。
     */
    async DeleteLiveTranscodeTemplate(req, cb) {
        return this.request("DeleteLiveTranscodeTemplate", req, cb);
    }
    /**
     * 接口用来查询直播增值业务--截图的张数
     */
    async DescribeScreenShotSheetNumList(req, cb) {
        return this.request("DescribeScreenShotSheetNumList", req, cb);
    }
    /**
     * 解绑域名证书
     */
    async UnBindLiveDomainCert(req, cb) {
        return this.request("UnBindLiveDomainCert", req, cb);
    }
    /**
     * 删除录制任务配置。删除操作不影响正在运行当中的任务，仅对删除之后新的推流有效。
     */
    async DeleteRecordTask(req, cb) {
        return this.request("DeleteRecordTask", req, cb);
    }
    /**
     * 该接口为监控数据接口，数据采集及统计方式与计费数据不同，仅供运营分析使用，不能用于计费对账参考。
支持查询某天或某段时间的转码详细信息。由于转码数据量较大，如果查询时间跨度太长可能会拉不到数据，可以尝试将查询时间范围缩小些再重试。
     */
    async DescribeLiveTranscodeDetailInfo(req, cb) {
        return this.request("DescribeLiveTranscodeDetailInfo", req, cb);
    }
    /**
     * 批量获取日志URL。
     */
    async DescribeLogDownloadList(req, cb) {
        return this.request("DescribeLogDownloadList", req, cb);
    }
    /**
     * 获取直播时移模板。
     */
    async DescribeLiveTimeShiftTemplates(req, cb) {
        return this.request("DescribeLiveTimeShiftTemplates", req, cb);
    }
    /**
     * 获取录制规则列表
     */
    async DescribeLiveRecordRules(req, cb) {
        return this.request("DescribeLiveRecordRules", req, cb);
    }
    /**
     * 该接口用来删除导播台的推流信息。
注：若删除推流到腾讯云直播源站配置，即OutputIndex为0，OutputType为1的推流配置，在重新启动主监后，系统会自动重新生成一个推流到腾讯云直播源站配置。
     */
    async DeleteCasterOutputInfo(req, cb) {
        return this.request("DeleteCasterOutputInfo", req, cb);
    }
    /**
     * 该接口用来修改布局参数
     */
    async ModifyCasterLayoutInfo(req, cb) {
        return this.request("ModifyCasterLayoutInfo", req, cb);
    }
    /**
     * 该接口用来新增导播台推流信息。导播台主监启动后，将会将主监画面推向该接口设置的地址。
     */
    async AddCasterOutputInfo(req, cb) {
        return this.request("AddCasterOutputInfo", req, cb);
    }
    /**
     * P2P流数据查询接口，用来获取流量、卡播和起播信息。
     */
    async DescribeLiveXP2PDetailInfoList(req, cb) {
        return this.request("DescribeLiveXP2PDetailInfoList", req, cb);
    }
    /**
     * 获取直播延播列表。
     */
    async DescribeLiveDelayInfoList(req, cb) {
        return this.request("DescribeLiveDelayInfoList", req, cb);
    }
    /**
     * 获取直播时移规则列表。
     */
    async DescribeLiveTimeShiftRules(req, cb) {
        return this.request("DescribeLiveTimeShiftRules", req, cb);
    }
    /**
     * 删除录制规则。
     */
    async DeleteLiveRecordRule(req, cb) {
        return this.request("DeleteLiveRecordRule", req, cb);
    }
    /**
     * 查询直播域名信息。
     */
    async DescribeLiveDomain(req, cb) {
        return this.request("DescribeLiveDomain", req, cb);
    }
    /**
     * 删除直播垫片规则。
     */
    async DeleteLivePadRule(req, cb) {
        return this.request("DeleteLivePadRule", req, cb);
    }
    /**
     * 创建回调规则，需要先调用[CreateLiveCallbackTemplate](/document/product/267/32637)接口创建回调模板，将返回的模板id绑定到域名/路径进行使用。
<br>回调协议相关文档：[事件消息通知](/document/product/267/32744)。
     */
    async CreateLiveCallbackRule(req, cb) {
        return this.request("CreateLiveCallbackRule", req, cb);
    }
    /**
     * 获取回调规则列表
     */
    async DescribeLiveCallbackRules(req, cb) {
        return this.request("DescribeLiveCallbackRules", req, cb);
    }
    /**
     * 该接口为监控数据接口，数据采集及统计方式与计费数据不同，仅供运营分析使用，不能用于计费对账参考。
查询下行播放错误码信息，某段时间内1分钟粒度的各http错误码出现的次数，包括4xx，5xx。
     */
    async DescribePlayErrorCodeDetailInfoList(req, cb) {
        return this.request("DescribePlayErrorCodeDetailInfoList", req, cb);
    }
    /**
     * 提供给客户对账，按天统计，维度：推流域名、时移文件时长（累加）、配置天数（不累加）、时移总时长（累加）。
     */
    async DescribeLiveTimeShiftBillInfoList(req, cb) {
        return this.request("DescribeLiveTimeShiftBillInfoList", req, cb);
    }
    /**
     * 返回已经推过流的流列表。<br>
注意：分页最多支持查询1万条记录，可通过调整查询时间范围来获取更多数据。
     */
    async DescribeLiveStreamPublishedList(req, cb) {
        return this.request("DescribeLiveStreamPublishedList", req, cb);
    }
    /**
     * 查询指定时间段范围内启动和结束的截图任务列表。
- 使用前提
1. 仅用于查询由 CreateScreenshotTask接口创建的截图任务。
2. 不能查询被 DeleteScreenshotTask接口删除以及已过期（平台侧保留3个月）的截图任务。
     */
    async DescribeScreenshotTask(req, cb) {
        return this.request("DescribeScreenshotTask", req, cb);
    }
    /**
     * 使用该接口查询垫片流。垫片流状态更新存在一定延迟，可间隔30秒以上查询，避免频繁查询该接口。
     */
    async DescribeLivePadProcessorList(req, cb) {
        return this.request("DescribeLivePadProcessorList", req, cb);
    }
    /**
     * 直播推流带宽和流量数据查询。
推流计费会先取全球推流用量和全球播放用量进行比较，满足计费条件后再按各地区用量出账。详情参见[计费文档](https://cloud.tencent.com/document/product/267/34175)。
     */
    async DescribePushBandwidthAndFluxList(req, cb) {
        return this.request("DescribePushBandwidthAndFluxList", req, cb);
    }
    /**
     * 删除截图任务配置。删除操作不影响正在运行当中的任务，仅对删除之后新的推流有效。
     */
    async DeleteScreenshotTask(req, cb) {
        return this.request("DeleteScreenshotTask", req, cb);
    }
    /**
     * 禁止某条流的推送，可以预设某个时刻将流恢复。
注意：
1. 默认只要流名称正确，禁推就会生效。
2. 如需要推流域名+推流路径+流名称 强匹配生效禁推，需提单联系售后开启配置。
3. 如果配置了域名分组，需填写准确推流域名，才可断掉当前推流。
     */
    async ForbidLiveStream(req, cb) {
        return this.request("ForbidLiveStream", req, cb);
    }
    /**
     * 添加域名，一次只能提交一个域名。域名必须已备案。
     */
    async AddLiveDomain(req, cb) {
        return this.request("AddLiveDomain", req, cb);
    }
    /**
     * 修改直播拉流配置的状态。该接口已下线,请使用新接口 ModifyLivePullStreamTask。
     */
    async ModifyPullStreamStatus(req, cb) {
        return this.request("ModifyPullStreamStatus", req, cb);
    }
    /**
     * 查询直播转推计费带宽，查询时间范围最大支持3个月内的数据，时间跨度最长31天。
     */
    async DescribeDeliverBandwidthList(req, cb) {
        return this.request("DescribeDeliverBandwidthList", req, cb);
    }
    /**
     * 调用该接口实现切换当前播放所使用的主备流。
     */
    async SwitchBackupStream(req, cb) {
        return this.request("SwitchBackupStream", req, cb);
    }
    /**
     * 该接口为监控数据接口，数据采集及统计方式与计费数据不同，仅供运营分析使用，不能用于计费对账参考。
查询实时的域名维度下行播放数据，由于数据处理有耗时，接口默认查询4分钟前的准实时数据。
     */
    async DescribeLiveDomainPlayInfoList(req, cb) {
        return this.request("DescribeLiveDomainPlayInfoList", req, cb);
    }
    /**
     * 创建直播时移规则，需要先调用[CreateLiveTimeShiftTemplate](/document/product/267/86169)接口创建直播时移模板，将返回的模板id绑定到流使用。
<br>直播时移相关文档：[直播时移](/document/product/267/86134)。
     */
    async CreateLiveTimeShiftRule(req, cb) {
        return this.request("CreateLiveTimeShiftRule", req, cb);
    }
    /**
     * 该接口为监控数据接口，数据采集及统计方式与计费数据不同，仅供运营分析使用，不能用于计费对账参考。
用于查询回调事件。
     */
    async DescribeCallbackRecordsList(req, cb) {
        return this.request("DescribeCallbackRecordsList", req, cb);
    }
    /**
     * 创建录制规则，需要先调用[CreateLiveRecordTemplate](/document/product/267/32614)接口创建录制模板，将返回的模板id绑定到流使用。
<br>录制相关文档：[直播录制](/document/product/267/32739)。
     */
    async CreateLiveRecordRule(req, cb) {
        return this.request("CreateLiveRecordRule", req, cb);
    }
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
    async CreateLivePullStreamTask(req, cb) {
        return this.request("CreateLivePullStreamTask", req, cb);
    }
    /**
     * 获取转码模板列表。
     */
    async DescribeLiveTranscodeTemplates(req, cb) {
        return this.request("DescribeLiveTranscodeTemplates", req, cb);
    }
    /**
     * 创建录制模板，数量上限：50，成功返回模板id后，需要调用[CreateLiveRecordRule](/document/product/267/32615)接口，将模板id绑定到流进行使用。
<br>录制相关文档：[直播录制](/document/product/267/32739)。
     */
    async CreateLiveRecordTemplate(req, cb) {
        return this.request("CreateLiveRecordTemplate", req, cb);
    }
    /**
     * 直播播放带宽和流量数据查询。
     */
    async DescribeBillBandwidthAndFluxList(req, cb) {
        return this.request("DescribeBillBandwidthAndFluxList", req, cb);
    }
    /**
     * 停止使用某个直播域名。
     */
    async ForbidLiveDomain(req, cb) {
        return this.request("ForbidLiveDomain", req, cb);
    }
    /**
     * 创建转码规则，数量上限：50，需要先调用[CreateLiveTranscodeTemplate](/document/product/267/32646)接口创建转码模板，将返回的模板id绑定到流使用。
<br>转码相关文档：[直播转封装及转码](/document/product/267/32736)。
     */
    async CreateLiveTranscodeRule(req, cb) {
        return this.request("CreateLiveTranscodeRule", req, cb);
    }
    /**
     * 删除直播时移规则。
     */
    async DeleteLiveTimeShiftRule(req, cb) {
        return this.request("DeleteLiveTimeShiftRule", req, cb);
    }
    /**
     * 将正在运行的拉流转推任务进行重启。
注意：
1. 重启任务会造成推流中断。
2. 点播源任务的重启，会根据VodRefreshType决定是续播还是从头开始播。
     */
    async RestartLivePullStreamTask(req, cb) {
        return this.request("RestartLivePullStreamTask", req, cb);
    }
    /**
     * 获取直播垫片模板。
     */
    async DescribeLivePadTemplates(req, cb) {
        return this.request("DescribeLivePadTemplates", req, cb);
    }
    /**
     * 获取水印规则列表。
     */
    async DescribeLiveWatermarkRules(req, cb) {
        return this.request("DescribeLiveWatermarkRules", req, cb);
    }
    /**
     * 获取直播垫片规则列表。
     */
    async DescribeLivePadRules(req, cb) {
        return this.request("DescribeLivePadRules", req, cb);
    }
    /**
     * 该接口用来删除导播台中的输入源信息。
     */
    async DeleteCasterInputInfo(req, cb) {
        return this.request("DeleteCasterInputInfo", req, cb);
    }
    /**
     * 注：DeleteLiveRecord 接口仅用于删除录制任务记录，不具备停止录制的功能，也不能删除正在进行中的录制。如果需要停止录制任务，请使用终止录制[StopLiveRecord](/document/product/267/30146) 接口。
     */
    async DeleteLiveRecord(req, cb) {
        return this.request("DeleteLiveRecord", req, cb);
    }
    /**
     * 该接口用来查询直播流监播任务配置的列表信息。
     */
    async DescribeLiveStreamMonitorList(req, cb) {
        return this.request("DescribeLiveStreamMonitorList", req, cb);
    }
    /**
     * 创建截图规则，需要先调用[CreateLiveSnapshotTemplate](/document/product/267/32624)接口创建截图模板，然后将返回的模板 ID 绑定到流进行使用。
<br>截图相关文档：[直播截图](/document/product/267/32737)。
注意：单个域名仅支持关联一个截图模板。
     */
    async CreateLiveSnapshotRule(req, cb) {
        return this.request("CreateLiveSnapshotRule", req, cb);
    }
    /**
     * 创建直播时移模板。
     */
    async CreateLiveTimeShiftTemplate(req, cb) {
        return this.request("CreateLiveTimeShiftTemplate", req, cb);
    }
    /**
     * 该接口用来删除直播流监播任务。
     */
    async DeleteLiveStreamMonitor(req, cb) {
        return this.request("DeleteLiveStreamMonitor", req, cb);
    }
    /**
     * 查询导播台信息接口，用来查询导播台状态、描述、输出长、宽等信息
     */
    async DescribeCaster(req, cb) {
        return this.request("DescribeCaster", req, cb);
    }
    /**
     * 查询使用 CreateLivePullStreamTask 接口创建的直播拉流任务。
排序方式：默认按更新时间 倒序排列。
     */
    async DescribeLivePullStreamTasks(req, cb) {
        return this.request("DescribeLivePullStreamTasks", req, cb);
    }
    /**
     * 该接口用来停止导播台的主监输出。
停止主监后，对应的推流到腾讯云直播源站和推流到其他第三方平台均将会停止。
     */
    async StopCasterPgm(req, cb) {
        return this.request("StopCasterPgm", req, cb);
    }
    /**
     * 该接口为监控数据接口，数据采集及统计方式与计费数据不同，仅供运营分析使用，不能用于计费对账参考。
查询某段时间内每个国家地区每个省份每个运营商的平均每秒流量，总流量，总请求数信息。
     */
    async DescribeProIspPlaySumInfoList(req, cb) {
        return this.request("DescribeProIspPlaySumInfoList", req, cb);
    }
    /**
     * 该接口为监控数据接口，数据采集及统计方式与计费数据不同，仅供运营分析使用，不能用于计费对账参考。
输入某个时间点（1分钟维度），查询该时间点所有流的下行信息。
     */
    async DescribeAllStreamPlayInfoList(req, cb) {
        return this.request("DescribeAllStreamPlayInfoList", req, cb);
    }
    /**
     * 查询播放鉴权key。
     */
    async DescribeLivePlayAuthKey(req, cb) {
        return this.request("DescribeLivePlayAuthKey", req, cb);
    }
    /**
     * 该接口用来将预监画面的布局、水印、字幕等配置，复制到主监画面中。
该接口使用时，预监任务需处于运行状态。
     */
    async CreateCasterPgmFromPvw(req, cb) {
        return this.request("CreateCasterPgmFromPvw", req, cb);
    }
    /**
     * 该接口用来获取所有的转场名称及其对应的素材url。
     */
    async DescribeCasterTransitionTypes(req, cb) {
        return this.request("DescribeCasterTransitionTypes", req, cb);
    }
    /**
     * 查询导播台PVW任务和PGM任务的展示信息，包括使用的布局、水印、字幕等信息。
     */
    async DescribeCasterDisplayInfo(req, cb) {
        return this.request("DescribeCasterDisplayInfo", req, cb);
    }
    /**
     * 该接口用来修改直播流监播任务的配置。
     */
    async ModifyLiveStreamMonitor(req, cb) {
        return this.request("ModifyLiveStreamMonitor", req, cb);
    }
    /**
     * 本接口用来查询当前APPID导播台业务状态
     */
    async DescribeCasterUserStatus(req, cb) {
        return this.request("DescribeCasterUserStatus", req, cb);
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
    async DescribeLiveStreamState(req, cb) {
        return this.request("DescribeLiveStreamState", req, cb);
    }
    /**
     * 该接口用来查询导播台的输入源信息列表。
     */
    async DescribeCasterInputInfos(req, cb) {
        return this.request("DescribeCasterInputInfos", req, cb);
    }
    /**
     * 删除录制模板。
     */
    async DeleteLiveRecordTemplate(req, cb) {
        return this.request("DeleteLiveRecordTemplate", req, cb);
    }
    /**
     * 该接口用来复制导播台配置
     */
    async CopyCaster(req, cb) {
        return this.request("CopyCaster", req, cb);
    }
    /**
     * 该接口用来修改已经设置过的输入源信息，如源地址，源类型等。
设置前，需保证待修改的输入源已经存在。若不存在，需使用AddCasterInputInfo接口。
     */
    async ModifyCasterInputInfo(req, cb) {
        return this.request("ModifyCasterInputInfo", req, cb);
    }
    /**
     * 该接口用来删除导播台某个Index对应的水印。
     */
    async DeleteCasterMarkPicInfo(req, cb) {
        return this.request("DeleteCasterMarkPicInfo", req, cb);
    }
    /**
     * 该接口用来删除导播台的文本配置。
     */
    async DeleteCasterMarkWordInfo(req, cb) {
        return this.request("DeleteCasterMarkWordInfo", req, cb);
    }
    /**
     * 返回正在直播中的流列表。适用于推流成功后查询在线流信息。

注意：
1. 该接口仅提供辅助查询在线流列表功能，业务重要场景不可强依赖该接口。
2. 该接口仅适用于流数少于2万路的情况，对于流数较大用户请联系售后。
     */
    async DescribeBackupStreamList(req, cb) {
        return this.request("DescribeBackupStreamList", req, cb);
    }
    /**
     * 取消直播流设置的延时配置，恢复实时直播画面。
     */
    async ResumeDelayLiveStream(req, cb) {
        return this.request("ResumeDelayLiveStream", req, cb);
    }
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
    async CreateRecordTask(req, cb) {
        return this.request("CreateRecordTask", req, cb);
    }
    /**
     * 创建转码模板，数量上限：50，成功返回模板id后，需要调用[CreateLiveTranscodeRule](/document/product/267/32647)接口，将返回的模板id绑定到流使用。
<br>转码相关文档：[直播转封装及转码](/document/product/267/32736)。
     */
    async CreateLiveTranscodeTemplate(req, cb) {
        return this.request("CreateLiveTranscodeTemplate", req, cb);
    }
    /**
     * 获取证书信息列表
     */
    async DescribeLiveCerts(req, cb) {
        return this.request("DescribeLiveCerts", req, cb);
    }
    /**
     * 获取转码规则列表
     */
    async DescribeLiveTranscodeRules(req, cb) {
        return this.request("DescribeLiveTranscodeRules", req, cb);
    }
    /**
     * 启用状态为停用的直播域名。
     */
    async EnableLiveDomain(req, cb) {
        return this.request("EnableLiveDomain", req, cb);
    }
    /**
     * 该接口用来取消混流。用法与 mix_streamv2.cancel_mix_stream 基本一致。
     */
    async CancelCommonMixStream(req, cb) {
        return this.request("CancelCommonMixStream", req, cb);
    }
    /**
     * 使用该接口停止垫片流。
     */
    async StopLivePadProcessor(req, cb) {
        return this.request("StopLivePadProcessor", req, cb);
    }
    /**
     * 查询用户套餐包总量、使用量、剩余量、包状态、购买时间和过期时间等。
     */
    async DescribeLivePackageInfo(req, cb) {
        return this.request("DescribeLivePackageInfo", req, cb);
    }
    /**
     * 创建临时拉流转推任务，目前限制添加10条任务。
该接口已下线,请使用新接口 CreateLivePullStreamTask。

注意：该接口用于创建临时拉流转推任务，
拉流源地址即 FromUrl 可以是腾讯或非腾讯数据源，
但转推目标地址即 ToUrl 目前限制为已注册的腾讯直播域名。
     */
    async CreatePullStreamConfig(req, cb) {
        return this.request("CreatePullStreamConfig", req, cb);
    }
    /**
     * 查询转码任务数。
     */
    async DescribeTranscodeTaskNum(req, cb) {
        return this.request("DescribeTranscodeTaskNum", req, cb);
    }
    /**
     * 该接口为监控数据接口，数据采集及统计方式与计费数据不同，仅供运营分析使用，不能用于计费对账参考。
查询所有实时流的推流信息，包括客户端IP，服务端IP，帧率，码率，域名，开始推流时间。
     */
    async DescribeLiveStreamPushInfoList(req, cb) {
        return this.request("DescribeLiveStreamPushInfoList", req, cb);
    }
    /**
     * 删除截图模板
     */
    async DeleteLiveSnapshotTemplate(req, cb) {
        return this.request("DeleteLiveSnapshotTemplate", req, cb);
    }
}
exports.Client = Client;
