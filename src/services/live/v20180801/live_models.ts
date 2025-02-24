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

/**
 * DescribeCasterDisplayInfo返回参数结构体
 */
export interface DescribeCasterDisplayInfoResponse {
  /**
   * 导播台状态
0：停止状态，无预监，无主监 
1：无预监，有主监 
2：有预监，无主监 
3：有预监，有主监
   */
  Status?: number
  /**
   * 预监使用的展示参数。
   */
  PvwDisplayInfo?: CasterDisplayInfo
  /**
   * 主监使用的展示参数。
   */
  PgmDisplayInfo?: CasterDisplayInfo
  /**
   * 启动直播的时间，值为unix时间戳。
   */
  StartLiveTime?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeLiveXP2PDetailInfoList返回参数结构体
 */
export interface DescribeLiveXP2PDetailInfoListResponse {
  /**
   * P2P流统计信息。
   */
  DataInfoList?: Array<XP2PDetailInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeLiveWatermarkRules返回参数结构体
 */
export interface DescribeLiveWatermarkRulesResponse {
  /**
   * 水印规则列表。
   */
  Rules: Array<RuleInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 导播台水印信息。
 */
export interface CasterMarkPicInfo {
  /**
   * 水印图片Index。
   */
  MarkPicIndex: number
  /**
   * 注：该字段已废弃。
注意：此字段可能返回 null，表示取不到有效值。
   */
  MarkPicId?: number
  /**
   * 水印图片在输出时的宽度。
当该值为大于1的整数值时，单位为像素，允许范围[1,1920]。 
当该值为小于1大于0的小数时，单位为百分比，表示水印在最终画面上所占的比例值。
   */
  MarkPicWidth?: number
  /**
   * 水印图片在输出时的高度。
当该值为大于1的整数值时，单位为像素，允许范围[1,1080]。 
当该值为小于1大于0的小数时，单位为百分比，表示水印在输出上所占的比例值。
   */
  MarkPicHeight?: number
  /**
   * 水印图片在输出时的X轴坐标。
当该值为大于1的整数值时，单位为像素，允许范围[1,1920]。 
当该值为小于1大于0的小数时，单位为百分比，表示水印在最终画面上x坐标所占的比例值。
   */
  MarkPicLocationX?: number
  /**
   * 水印图片在输出时的Y坐标。
当该值为大于1的整数值时，单位为像素，允许范围[1,1080]。 
当该值为小于1大于0的小数时，单位为百分比，表示水印在最终画面Y坐标上所占的比例值。
   */
  MarkPicLocationY?: number
  /**
   * 水印地址。
最大长度256字符，且url需以jpg、jpeg、png、bmp、gif后缀结尾。
注意：此字段可能返回 null，表示取不到有效值。
   */
  MarkPicUrl?: string
  /**
   * 水印描述。
最大允许长度为256。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Description?: string
  /**
   * 是否启用了等比例缩放。
注：该字段仅做状态保存，无实际效果。
注意：此字段可能返回 null，表示取不到有效值。
   */
  IsEqualProportion?: boolean
}

/**
 * ModifyPullStreamStatus请求参数结构体
 */
export interface ModifyPullStreamStatusRequest {
  /**
   * 配置 ID 列表。
   */
  ConfigIds: Array<string>
  /**
   * 目标状态。0无效，2正在运行，4暂停。
   */
  Status: string
}

/**
 * DeleteLiveRecordTemplate请求参数结构体
 */
export interface DeleteLiveRecordTemplateRequest {
  /**
   * DescribeRecordTemplates接口获取到的模板 ID。
   */
  TemplateId: number
}

/**
 * ModifyLiveTimeShiftTemplate返回参数结构体
 */
export interface ModifyLiveTimeShiftTemplateResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeLiveTranscodeTemplates请求参数结构体
 */
export interface DescribeLiveTranscodeTemplatesRequest {
  /**
   * 转码模板类型，默认0。
0：普通转码模板。
1：自适应码率转码模板。
   */
  TemplateType?: number
}

/**
 * DescribeBackupStreamList返回参数结构体
 */
export interface DescribeBackupStreamListResponse {
  /**
   * 主备流分组信息列表。
   */
  StreamInfoList?: Array<BackupStreamGroupInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeLiveSnapshotTemplate请求参数结构体
 */
export interface DescribeLiveSnapshotTemplateRequest {
  /**
   * 模板 ID。
调用 [CreateLiveSnapshotTemplate](/document/product/267/32624) 时返回的模板 ID。
   */
  TemplateId: number
}

/**
 * DescribePlayErrorCodeDetailInfoList请求参数结构体
 */
export interface DescribePlayErrorCodeDetailInfoListRequest {
  /**
   * 起始时间，
使用UTC格式时间，
例如：2019-01-08T10:00:00Z。
注意：北京时间值为 UTC 时间值 + 8 小时，格式按照 ISO 8601 标准表示，详见 [ISO 日期格式说明](https://cloud.tencent.com/document/product/267/38543#:~:text=I-,ISO,-%E6%97%A5%E6%9C%9F%E6%A0%BC%E5%BC%8F)。
   */
  StartTime: string
  /**
   * 结束时间，
使用UTC格式时间，
例如：2019-01-08T10:00:00Z。
注意：北京时间值为 UTC 时间值 + 8 小时，格式按照 ISO 8601 标准表示，详见 [ISO 日期格式说明](https://cloud.tencent.com/document/product/267/38543#:~:text=I-,ISO,-%E6%97%A5%E6%9C%9F%E6%A0%BC%E5%BC%8F)。
注：EndTime 和 StartTime 只支持最近1天的数据查询。
   */
  EndTime: string
  /**
   * 查询粒度：
1-1分钟粒度。
   */
  Granularity: number
  /**
   * 是，可选值包括”4xx”,”5xx”，支持”4xx,5xx”等这种混合模式。
   */
  StatType: string
  /**
   * 播放域名列表。
   */
  PlayDomains?: Array<string>
  /**
   * 地域，可选值：Mainland，Oversea，China，Foreign，Global（默认值）；如果为空，查询总的数据；如果为“Mainland”，查询中国大陆的数据；如果为“Oversea”，则查询中国大陆以外的数据；如果为China，查询中国的数据（包括港澳台）；如果为Foreign，查询国外的数据（不包括港澳台）。
   */
  MainlandOrOversea?: string
}

/**
 * 推流时间。
 */
export interface PublishTime {
  /**
   * 推流时间。
UTC 格式，例如：2018-06-29T19:00:00Z。
   */
  PublishTime: string
}

/**
 * 通用混流输出参数。
 */
export interface CommonMixOutputParams {
  /**
   * 输出流名称。
   */
  OutputStreamName: string
  /**
   * 输出流类型，取值范围[0,1]。
不填默认为0。
当输出流为输入流 list 中的一条时，填写0。
当期望生成的混流结果成为一条新流时，该值填为1。
该值为1时，output_stream_id 不能出现在 input_stram_list 中，且直播后台中，不能存在相同 ID 的流。
   */
  OutputStreamType?: number
  /**
   * 输出流比特率。取值范围[1，10000]。
不填的情况下，系统会自动判断。
   */
  OutputStreamBitRate?: number
  /**
   * 输出流GOP大小。取值范围[1,10]。
不填的情况下，系统会自动判断。
   */
  OutputStreamGop?: number
  /**
   * 输出流帧率大小。取值范围[1,60]。
不填的情况下，系统会自动判断。
   */
  OutputStreamFrameRate?: number
  /**
   * 输出流音频比特率。取值范围[1,500]
不填的情况下，系统会自动判断。
   */
  OutputAudioBitRate?: number
  /**
   * 输出流音频采样率。取值范围[96000, 88200, 64000, 48000, 44100, 32000,24000, 22050, 16000, 12000, 11025, 8000]。
不填的情况下，系统会自动判断。
   */
  OutputAudioSampleRate?: number
  /**
   * 输出流音频声道数。取值范围[1,2]。
不填的情况下，系统会自动判断。
   */
  OutputAudioChannels?: number
  /**
   * 输出流中的sei信息。如果无特殊需要，不填。
   */
  MixSei?: string
}

/**
 * DescribeCasterOutputInfos返回参数结构体
 */
export interface DescribeCasterOutputInfosResponse {
  /**
   * 导播台的推流信息列表。
   */
  OutputInfos?: Array<CasterOutputInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeLiveStreamPublishedList请求参数结构体
 */
export interface DescribeLiveStreamPublishedListRequest {
  /**
   * 您的推流域名。
   */
  DomainName: string
  /**
   * 结束时间。
UTC 格式，例如：2016-06-30T19:00:00Z。
不超过当前时间。
注意：EndTime和StartTime相差不可超过30天。
   */
  EndTime: string
  /**
   * 起始时间。 
UTC 格式，例如：2016-06-29T19:00:00Z。
最长支持查询60天内数据。
   */
  StartTime: string
  /**
   * 推流路径，与推流和播放地址中的 AppName 保持一致，默认为 live。不支持模糊匹配。
   */
  AppName?: string
  /**
   * 取得第几页。
默认值：1。
   */
  PageNum?: number
  /**
   * 分页大小。
最大值：100。
取值范围：10~100 之前的任意整数。
默认值：10。
   */
  PageSize?: number
  /**
   * 流名称，支持模糊匹配。
   */
  StreamName?: string
}

/**
 * DescribeGroupProIspPlayInfoList返回参数结构体
 */
export interface DescribeGroupProIspPlayInfoListResponse {
  /**
   * 数据内容。
   */
  DataInfoList?: Array<GroupProIspDataInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDeliverBandwidthList返回参数结构体
 */
export interface DescribeDeliverBandwidthListResponse {
  /**
   * 转推计费带宽数据
   */
  DataInfoList?: Array<BandwidthInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeLiveTranscodeDetailInfo请求参数结构体
 */
export interface DescribeLiveTranscodeDetailInfoRequest {
  /**
   * 推流域名。
   */
  PushDomain?: string
  /**
   * 流名称。
   */
  StreamName?: string
  /**
   * 查询时间，北京时间，
格式：yyyymmdd。
注意：支持查询近1个月内某天的详细数据，截止到昨天。
   */
  DayTime?: string
  /**
   * 页数，默认1，
不超过100页。
   */
  PageNum?: number
  /**
   * 每页个数，默认20，
范围：[10,1000]。
   */
  PageSize?: number
  /**
   * 起始天时间，北京时间，
格式：yyyymmdd。
注意：支持查询近1个月内的详细数据。
   */
  StartDayTime?: string
  /**
   * 结束天时间，北京时间，
格式：yyyymmdd。
注意：支持查询近1个月内的详细数据，截止到昨天，注意DayTime 与（StartDayTime，EndDayTime）必须要传一个，如果都传，会以DayTime为准 。
   */
  EndDayTime?: string
}

/**
 * DescribeLiveSnapshotTemplates请求参数结构体
 */
export type DescribeLiveSnapshotTemplatesRequest = null

/**
 * CreateLiveWatermarkRule返回参数结构体
 */
export interface CreateLiveWatermarkRuleResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateCasterPvw返回参数结构体
 */
export interface CreateCasterPvwResponse {
  /**
   * 预监任务的画面rtmp协议预览地址。
注：该预览地址仅供画面预览，不可分发。
   */
  PvwPlayUrl?: string
  /**
   * 预监任务的webrtc协议预览画面。
注：
1. 该预览地址仅供预览，不可分发。
2. webrtc播放地址，需配合腾讯云快直播播放sdk使用

   */
  PvwWebRTCPlayUrl?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeCasterMarkPicInfos请求参数结构体
 */
export interface DescribeCasterMarkPicInfosRequest {
  /**
   * 导播台ID。
   */
  CasterId: number
}

/**
 * 各状态码的总次数，支持大多数的 HTTP 协议返回码。
 */
export interface PlayCodeTotalInfo {
  /**
   * HTTP code，可选值包括:
400，403，404，500，502，503，504。
   */
  Code: string
  /**
   * 总次数。
   */
  Num: number
}

/**
 * AddLiveWatermark请求参数结构体
 */
export interface AddLiveWatermarkRequest {
  /**
   * 水印图片 URL。
URL中禁止包含的字符：
 ;(){}$>`#"\'|
   */
  PictureUrl: string
  /**
   * 水印名称。
最长30字节。
   */
  WatermarkName: string
  /**
   * 显示位置，X轴偏移，单位是百分比，默认 0。
   */
  XPosition?: number
  /**
   * 显示位置，Y轴偏移，单位是百分比，默认 0。
   */
  YPosition?: number
  /**
   * 水印宽度，占直播原始画面宽度百分比，建议高宽只设置一项，另外一项会自适应缩放，避免变形。默认原始宽度。
   */
  Width?: number
  /**
   * 水印高度，占直播原始画面高度百分比，建议高宽只设置一项，另外一项会自适应缩放，避免变形。默认原始高度。
   */
  Height?: number
  /**
   * 背景水印宽度。默认宽度1920。
   */
  BackgroundWidth?: number
  /**
   * 背景水印高度。默认高度1080。
   */
  BackgroundHeight?: number
}

/**
 * 通用混流布局参数。
 */
export interface CommonMixLayoutParams {
  /**
   * 输入图层。取值范围[1，16]。
1)背景流（即大主播画面或画布）的 image_layer 填1。
2)纯音频混流，该参数也需填。
注意：不同输入，该值不可重复
   */
  ImageLayer: number
  /**
   * 输入类型。取值范围[0，5]。
不填默认为0。
0表示输入流为音视频。
2表示输入流为图片。
3表示输入流为画布。 
4表示输入流为音频。
5表示输入流为纯视频。
   */
  InputType?: number
  /**
   * 输入画面在输出时的高度。取值范围：
像素：[0，2000]
百分比：[0.01，0.99]
不填默认为输入流的高度。
使用百分比时，期望输出为（百分比 * 背景高）。
   */
  ImageHeight?: number
  /**
   * 输入画面在输出时的宽度。取值范围：
像素：[0，2000]
百分比：[0.01，0.99]
不填默认为输入流的宽度。
使用百分比时，期望输出为（百分比 * 背景宽）。
   */
  ImageWidth?: number
  /**
   * 输入在输出画面的X偏移。取值范围：
像素：[0，2000]
百分比：[0.01，0.99]
不填默认为0。
相对于大主播背景画面左上角的横向偏移。 
使用百分比时，期望输出为（百分比 * 背景宽）。
   */
  LocationX?: number
  /**
   * 输入在输出画面的Y偏移。取值范围：
像素：[0，2000]
百分比：[0.01，0.99]
不填默认为0。
相对于大主播背景画面左上角的纵向偏移。 
使用百分比时，期望输出为（百分比 * 背景宽）
   */
  LocationY?: number
  /**
   * 当InputType为3(画布)时，该值表示画布的颜色。
常用的颜色有：
红色：0xCC0033。
黄色：0xCC9900。
绿色：0xCCCC33。
蓝色：0x99CCFF。
黑色：0x000000。
白色：0xFFFFFF。
灰色：0x999999。
   */
  Color?: string
  /**
   * 当InputType为2(图片)时，该值是水印ID。
   */
  WatermarkId?: number
}

/**
 * DescribeLiveDomainCert请求参数结构体
 */
export interface DescribeLiveDomainCertRequest {
  /**
   * 播放域名。
   */
  DomainName: string
}

/**
 * DescribeLiveEnhanceInfoList请求参数结构体
 */
export interface DescribeLiveEnhanceInfoListRequest {
  /**
   * 起始时间点，使用ISO格式时间，
例如：2019-01-08T10:00:00Z。
注意：北京时间值为 UTC 时间值 + 8 小时，格式按照 ISO 8601 标准表示，详见[ISO 日期格式说明](https://cloud.tencent.com/document/product/267/38543#:~:text=I-,ISO,-%E6%97%A5%E6%9C%9F%E6%A0%BC%E5%BC%8F)。
接口支持最近三个月的查询，开始时间和结束时间查询跨度不能超过三十天。
   */
  StartTime: string
  /**
   * 结束时间点，使用ISO格式时间，
例如：2019-01-08T10:00:00Z。
注意：北京时间值为 UTC 时间值 + 8 小时，格式按照 ISO 8601 标准表示，详见[ISO 日期格式说明](https://cloud.tencent.com/document/product/267/38543#:~:text=I-,ISO,-%E6%97%A5%E6%9C%9F%E6%A0%BC%E5%BC%8F)。
接口支持最近三个月的查询，开始时间和结束时间查询跨度不能超过三十天。
   */
  EndTime: string
  /**
   * 查询粒度，支持5，60分钟。
   */
  Granularity?: number
  /**
   * 查询域名，如果不填则默认查全部的数据。
   */
  DomainNames?: Array<string>
  /**
   * 增强服务类型，如果不填则默认查全部的数据。
   */
  Type?: Array<string>
  /**
   * 分辨率，如果不填则默认查全部的数据。
   */
  Resolution?: Array<string>
  /**
   * 帧率，如果不填则默认查全部的数据。
   */
  Fps?: Array<string>
}

/**
 * 媒体诊断结果，包含断流信息、低帧率信息等
 */
export interface DiagnoseResult {
  /**
   * 断流信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  StreamBrokenResults?: Array<string>
  /**
   * 低帧率信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  LowFrameRateResults?: Array<string>
  /**
   * 流格式诊断信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  StreamFormatResults?: Array<string>
}

/**
 * StopRecordTask请求参数结构体
 */
export interface StopRecordTaskRequest {
  /**
   * 录制任务ID。
   */
  TaskId: string
}

/**
 * 规则信息。
 */
export interface RuleInfo {
  /**
   * 规则创建时间。
注：此字段为北京时间（UTC+8时区）。
   */
  CreateTime?: string
  /**
   * 规则更新时间。
注：此字段为北京时间（UTC+8时区）。
   */
  UpdateTime?: string
  /**
   * 模板 ID。
   */
  TemplateId?: number
  /**
   * 推流域名。
   */
  DomainName?: string
  /**
   * 推流路径。
   */
  AppName?: string
  /**
   * 流名称。
   */
  StreamName?: string
}

/**
 * ModifyLiveDomainCertBindings请求参数结构体
 */
export interface ModifyLiveDomainCertBindingsRequest {
  /**
   * 要绑定证书的播放域名/状态 信息列表。
如果CloudCertId和证书公钥私钥对均不传，且域名列表已有绑定规则，只批量更新域名https规则的启用状态，并把未上传至腾讯云ssl的已有自有证书上传。
   */
  DomainInfos: Array<LiveCertDomainInfo>
  /**
   * 腾讯云ssl的证书Id。
见 https://cloud.tencent.com/document/api/400/41665
   */
  CloudCertId?: string
  /**
   * 证书公钥。
CloudCertId和公钥私钥对二选一，若CloudCertId将会舍弃公钥和私钥参数，否则将自动先把公钥私钥对上传至ssl新建证书，并使用上传成功后返回的CloudCertId。
   */
  CertificatePublicKey?: string
  /**
   * 证书私钥。
CloudCertId和公钥私钥对二选一，若传CloudCertId将会舍弃公钥和私钥参数，否则将自动先把公钥私钥对上传至ssl新建证书，并使用上传成功后返回的CloudCertId。
   */
  CertificatePrivateKey?: string
  /**
   * 上传至ssl证书中心的备注信息，只有新建证书时有效。传CloudCertId时会忽略。
   */
  CertificateAlias?: string
}

/**
 * StopCasterPgm返回参数结构体
 */
export interface StopCasterPgmResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateCasterPgm请求参数结构体
 */
export interface CreateCasterPgmRequest {
  /**
   * 导播台展示信息参数。
   */
  PgmDisplayInfo: CasterDisplayInfo
  /**
   * 导播台ID。
   */
  CasterId: number
}

/**
 * DescribeCasterPlayUrl返回参数结构体
 */
export interface DescribeCasterPlayUrlResponse {
  /**
   * 播放url。
当导播台不存在预监或主监时，若请求预监或主监的播放地址，该字段为空。
   */
  PlayUrl?: string
  /**
   * webrtc协议播放地址。
当导播台不存在预监或主监时，若请求预监或主监的webrtc播放地址，该字段为空。
注：webrtc协议播放地址需配合腾讯云快直播播放sdk方可使用。
   */
  WebRTCPlayUrl?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CancelCommonMixStream返回参数结构体
 */
export interface CancelCommonMixStreamResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeLiveCerts返回参数结构体
 */
export interface DescribeLiveCertsResponse {
  /**
   * 证书信息列表。
   */
  CertInfoSet?: Array<CertInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ResumeDelayLiveStream请求参数结构体
 */
export interface ResumeDelayLiveStreamRequest {
  /**
   * 推流路径，与推流和播放地址中的AppName保持一致，默认为live。
   */
  AppName: string
  /**
   * 推流域名。
   */
  DomainName: string
  /**
   * 流名称。
   */
  StreamName: string
}

/**
 * DescribeCallbackRecordsList请求参数结构体
 */
export interface DescribeCallbackRecordsListRequest {
  /**
   * 起始时间点，接口查询支持两种时间格式：
1）YYYY-MM-DDThh:mm:ssZ：UTC时间格式，详见 [ISO 日期格式说明](https://cloud.tencent.com/document/product/267/38543#:~:text=I-,ISO,-%E6%97%A5%E6%9C%9F%E6%A0%BC%E5%BC%8F)
2）YYYY-MM-DD hh:mm:ss：使用此格式时，默认代表北京时间。
   */
  StartTime: string
  /**
   * 结束时间点，接口查询支持两种时间格式：
1）YYYY-MM-DDThh:mm:ssZ：UTC时间格式，详见 [ISO 日期格式说明](https://cloud.tencent.com/document/product/267/38543#:~:text=I-,ISO,-%E6%97%A5%E6%9C%9F%E6%A0%BC%E5%BC%8F)
2）YYYY-MM-DD hh:mm:ss：使用此格式时，默认代表北京时间。

查询的起始和结束时间跨度不支持超过1天。仅支持查询最近14天的数据。
   */
  EndTime: string
  /**
   * 流名称，精确匹配。
   */
  StreamName: string
  /**
   * 页码。
   */
  PageNum: number
  /**
   * 每页条数。
   */
  PageSize: number
  /**
   * 事件类型。
0: "断流",
1: "推流",
100: "录制"
200: "截图回调"。
   */
  EventType?: number
  /**
   * 回调结果。
0为成功，其他为失败。
   */
  ResultCode?: number
}

/**
 * 导播台展示信息，包括使用的布局、水印、字幕、转场、音频等信息
 */
export interface CasterDisplayInfo {
  /**
   * 布局Index。
如果使用自定义布局，为自定义布局下标。
如果使用单输入布局，如使用输入1，则LayoutIndexType=1， 且LayoutIndex=1，以此类推。
注意：此字段可能返回 null，表示取不到有效值。
   */
  LayoutIndex?: number
  /**
   * 使用的水印Index列表。
注：当作为入参使用时，列表中的水印Index需要已经存在。
注意：此字段可能返回 null，表示取不到有效值。
   */
  MarkPicIndexList?: Array<number | bigint>
  /**
   * 使用的文字水印Index列表。
注：作为入参使用时，列表中的Index需要已经存在。
注意：此字段可能返回 null，表示取不到有效值。
   */
  MarkWordIndexList?: Array<number | bigint>
  /**
   * 使用的转场类型。
注：支持的转场类型可通过DescribeCasterTransitionTypes接口获取。
注意：此字段可能返回 null，表示取不到有效值。
   */
  TransitionType?: string
  /**
   * 使用的音频输入Index列表。
注：当该字段非空时，表示使用布局中对应的输入源的视频，AudioIndexList中对应的输入源的音频。且这些输入源需已存在。
注意：此字段可能返回 null，表示取不到有效值。
   */
  AudioIndexList?: Array<number | bigint>
  /**
   * 作为入参时，表示使用点播输入源，单画面输入时，点播文件是否从头开始播放。
默认为0。
有效值，0,1。
0代表不从头播放
1代表从头播放
注意：此字段可能返回 null，表示取不到有效值。
   */
  InputStartType?: number
  /**
   * LayoutIndex类型，
默认值:0
可选值[0,1]
0:默认类型，代表普通布局
1:单输入类型，代表单输入布局
注意：此字段可能返回 null，表示取不到有效值。
   */
  LayoutIndexType?: number
}

/**
 * 回调事件信息
 */
export interface CallbackEventInfo {
  /**
   * 事件时间。
接口返回支持两种时间格式：
1）YYYY-MM-DDThh:mm:ssZ：UTC时间格式，详见 [ISO 日期格式说明](https://cloud.tencent.com/document/product/266/11732#I)
2）yyyy-MM-dd HH:mm:ss：使用此格式时，默认代表北京时间。
接口返回的时间格式和查询请求传入的时间格式一致。
   */
  EventTime?: string
  /**
   * 事件类型
   */
  EventType?: number
  /**
   * 回调请求
   */
  Request?: string
  /**
   * 回调响应
   */
  Response?: string
  /**
   * 客户接口响应时间。
接口返回支持两种时间格式：
1）YYYY-MM-DDThh:mm:ssZ：UTC时间格式，详见 [ISO 日期格式说明](https://cloud.tencent.com/document/product/266/11732#I)
2）yyyy-MM-dd HH:mm:ss：使用此格式时，默认代表北京时间。
接口返回的时间格式和查询请求传入的时间格式一致。
   */
  ResponseTime?: string
  /**
   * 回调结果
   */
  ResultCode?: number
  /**
   * 流名称
   */
  StreamId?: string
}

/**
 * DescribeTopClientIpSumInfoList返回参数结构体
 */
export interface DescribeTopClientIpSumInfoListResponse {
  /**
   * 页号，范围是[1,1000]，默认值是1。
   */
  PageNum?: number
  /**
   * 每页个数，范围是[1,1000]，默认值是20。
   */
  PageSize?: number
  /**
   * 排序指标，可选值包括”TotalRequest”，”FailedRequest”,“TotalFlux”。
   */
  OrderParam?: string
  /**
   * 记录总数。
   */
  TotalNum?: number
  /**
   * 记录总页数。
   */
  TotalPage?: number
  /**
   * 数据内容。
   */
  DataInfoList?: Array<ClientIpPlaySumInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeLiveStreamState返回参数结构体
 */
export interface DescribeLiveStreamStateResponse {
  /**
   * 流状态，
active：活跃，
inactive：非活跃，
forbid：禁播。
   */
  StreamState?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteLiveWatermarkRule请求参数结构体
 */
export interface DeleteLiveWatermarkRuleRequest {
  /**
   * 推流域名。
   */
  DomainName: string
  /**
   * 推流路径。与推流和播放地址中的 AppName 保持一致，默认为live。
   */
  AppName: string
  /**
   * 流名称。
   */
  StreamName: string
}

/**
 * DescribeLiveWatermarks请求参数结构体
 */
export interface DescribeLiveWatermarksRequest {
  /**
   * 水印名称
   */
  Name?: string
  /**
   * 分页的索引参数，从1开始
   */
  PageNo?: number
  /**
   * 分页的大小参数，默认值500
   */
  PageSize?: number
}

/**
 * DescribeLiveWatermarkRules请求参数结构体
 */
export type DescribeLiveWatermarkRulesRequest = null

/**
 * EnableOptimalSwitching请求参数结构体
 */
export interface EnableOptimalSwitchingRequest {
  /**
   * 针对该流 ID 启用择优调度。
   */
  StreamName: string
  /**
   * 启用开关，默认为启用。
0 - 禁用。
1 - 启用。
   */
  EnableSwitch?: number
  /**
   * 要启用自动择优的流所属的域名分组名称。
   */
  HostGroupName?: string
}

/**
 * DescribeCasterInputInfos返回参数结构体
 */
export interface DescribeCasterInputInfosResponse {
  /**
   * 导播台输入源信息列表。
   */
  InputInfos?: Array<CasterInputInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * AddCasterMarkWordInfo返回参数结构体
 */
export interface AddCasterMarkWordInfoResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 获取省份/运营商的播放信息。
 */
export interface ProIspPlaySumInfo {
  /**
   * 省份/运营商/国家或地区。
   */
  Name: string
  /**
   * 总流量，单位: MB。
   */
  TotalFlux: number
  /**
   * 总请求数。
   */
  TotalRequest: number
  /**
   * 平均下载流量，单位: MB/s。
   */
  AvgFluxPerSecond: number
}

/**
 * ModifyLiveTranscodeTemplate返回参数结构体
 */
export interface ModifyLiveTranscodeTemplateResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeStreamDayPlayInfoList请求参数结构体
 */
export interface DescribeStreamDayPlayInfoListRequest {
  /**
   * 日期，格式：YYYY-mm-dd。
第二天凌晨3点出昨天的数据，建议在这个时间点之后查询最新数据。支持最近3个月的数据查询。
   */
  DayTime: string
  /**
   * 播放域名。
   */
  PlayDomain?: string
  /**
   * 页号，范围[1,1000]，默认值是1。
   */
  PageNum?: number
  /**
   * 每页个数，范围[100,1000]，默认值是1000。
   */
  PageSize?: number
  /**
   * 可选值：
Mainland：查询国内数据，
Oversea：则查询国外数据，
默认：查询国内+国外的数据。
   */
  MainlandOrOversea?: string
  /**
   * 服务名称，可选值包括LVB(标准直播)，LEB(快直播)，不填则查LVB+LEB总值。
   */
  ServiceName?: string
}

/**
 * DeleteLiveTimeShiftRule返回参数结构体
 */
export interface DeleteLiveTimeShiftRuleResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 时移流。
 */
export interface TimeShiftStreamInfo {
  /**
   * 推流域名所属组。
注意：此字段可能返回 null，表示取不到有效值。
   */
  DomainGroup?: string
  /**
   * 推流域名。
   */
  Domain?: string
  /**
   * 推流路径。
   */
  AppName?: string
  /**
   * 流名称。
   */
  StreamName?: string
  /**
   * 流起始时间，Unix 时间戳。
   */
  StartTime?: number
  /**
   * 截止查询时流结束时间，Unix 时间戳。
   */
  EndTime?: number
  /**
   * 转码模板ID。
注意：此字段可能返回 null，表示取不到有效值。
   */
  TransCodeId?: number
  /**
   * 流类型，取值0为原始流，1为水印流，2为转码流。
   */
  StreamType?: number
  /**
   * 时移数据存储时长，单位秒。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Duration?: number
  /**
   * 时移自适应码率子流列表。
注意：此字段可能返回 null，表示取不到有效值。
   */
  TimeShiftSubStreams?: Array<TimeShiftSubStream>
}

/**
 * DescribeLivePadRules返回参数结构体
 */
export interface DescribeLivePadRulesResponse {
  /**
   * 规则信息列表。
   */
  Rules?: Array<RuleInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreatePullStreamConfig请求参数结构体
 */
export interface CreatePullStreamConfigRequest {
  /**
   * 源 Url ，用于拉流的地址。目前可支持直播流及点播文件。
注意：
1. 多个点播url之间使用空格拼接。
2. 目前上限支持10个url。
3. 目前不支持https协议。
4. 支持拉流文件格式：flv，rtmp，hls，mp4。
   */
  FromUrl: string
  /**
   * 目的 Url ，用于推流的地址，目前限制该目标地址为腾讯域名。
仅支持：rtmp 协议。
   */
  ToUrl: string
  /**
   * 选择完成转拉推的服务所在区域:
1-深圳，
2-上海，
3-天津，
4-中国香港。
   */
  AreaId: number
  /**
   * 选择完成转拉推服务使用的运营商网络：
1-电信，
2-移动，
3-联通，
4-其他。
注：AreaId 为4的时候，IspId 只能为其他。
   */
  IspId: number
  /**
   * 开始时间。
使用 UTC 格式时间，
例如：2019-01-08T10:00:00Z。
注意：北京时间值为 UTC 时间值 + 8 小时，格式按照 ISO 8601 标准表示，详见 [ISO 日期格式说明](https://cloud.tencent.com/document/product/266/11732#I)。
   */
  StartTime: string
  /**
   * 结束时间，注意：
1. 结束时间必须大于开始时间；
2. 结束时间和开始时间必须大于当前时间；
3. 结束时间 和 开始时间 间隔必须小于七天。
使用 UTC 格式时间，
例如：2019-01-08T10:00:00Z。
注意：北京时间值为 UTC 时间值 + 8 小时，格式按照 ISO 8601 标准表示，详见 [ISO 日期格式说明](https://cloud.tencent.com/document/product/266/11732#I)。
   */
  EndTime: string
}

/**
 * DescribeLiveCerts请求参数结构体
 */
export type DescribeLiveCertsRequest = null

/**
 * DescribeLiveCert返回参数结构体
 */
export interface DescribeLiveCertResponse {
  /**
   * 证书信息。
   */
  CertInfo?: CertInfo
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeVisitTopSumInfoList请求参数结构体
 */
export interface DescribeVisitTopSumInfoListRequest {
  /**
   * 起始时间点，格式为yyyy-mm-dd HH:MM:SS。
   */
  StartTime: string
  /**
   * 结束时间点，格式为yyyy-mm-dd HH:MM:SS
时间跨度在(0,4小时]，支持最近1天数据查询。
   */
  EndTime: string
  /**
   * 峰值指标，可选值包括”Domain”，”StreamId”。
   */
  TopIndex: string
  /**
   * 播放域名，默认为不填，表示求总体数据。
   */
  PlayDomains?: Array<string>
  /**
   * 页号，
范围是[1,1000]，
默认值是1。
   */
  PageNum?: number
  /**
   * 每页个数，范围是[1,1000]，
默认值是20。
   */
  PageSize?: number
  /**
   * 排序指标，可选值包括” AvgFluxPerSecond”，”TotalRequest”（默认）,“TotalFlux”。
   */
  OrderParam?: string
}

/**
 * DescribePushBandwidthAndFluxList返回参数结构体
 */
export interface DescribePushBandwidthAndFluxListResponse {
  /**
   * 峰值带宽所在时间点，
使用UTC格式时间，
例如：2019-01-08T10:00:00Z。
注意：北京时间值为 UTC 时间值 + 8 小时，格式按照 ISO 8601 标准表示，详见 [ISO 日期格式说明](https://cloud.tencent.com/document/product/266/11732#I)。
   */
  PeakBandwidthTime?: string
  /**
   * 峰值带宽，单位是 Mbps。
   */
  PeakBandwidth?: number
  /**
   * 95峰值带宽所在时间点，
使用UTC格式时间，
例如：2019-01-08T10:00:00Z。
注意：北京时间值为 UTC 时间值 + 8 小时，格式按照 ISO 8601 标准表示，详见 [ISO 日期格式说明](https://cloud.tencent.com/document/product/266/11732#I)。
   */
  P95PeakBandwidthTime?: string
  /**
   * 95峰值带宽，单位是 Mbps。
   */
  P95PeakBandwidth?: number
  /**
   * 总流量，单位是 MB。
   */
  SumFlux?: number
  /**
   * 明细数据信息。
   */
  DataInfoList?: Array<BillDataInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeLiveStreamOnlineList返回参数结构体
 */
export interface DescribeLiveStreamOnlineListResponse {
  /**
   * 符合条件的总个数。
   */
  TotalNum?: number
  /**
   * 总页数。
   */
  TotalPage?: number
  /**
   * 分页的页码。
   */
  PageNum?: number
  /**
   * 每页显示的条数。
   */
  PageSize?: number
  /**
   * 正在推送流的信息列表。
   */
  OnlineInfo?: Array<StreamOnlineInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeCasterMarkWordInfos返回参数结构体
 */
export interface DescribeCasterMarkWordInfosResponse {
  /**
   * 导播台的文本信息列表。
   */
  MarkWordInfos?: Array<CasterMarkWordInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeStreamPushInfoList返回参数结构体
 */
export interface DescribeStreamPushInfoListResponse {
  /**
   * 返回的数据列表。
   */
  DataInfoList?: Array<PushQualityData>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 直播时移模板配置
 */
export interface TimeShiftTemplate {
  /**
   * 模板名称。
   */
  TemplateName: string
  /**
   * 时移时长。
单位：秒。
   */
  Duration: number
  /**
   * 分片时长。
可取3-10。
单位：s。
默认值：5。
   */
  ItemDuration: number
  /**
   * 模板id。
   */
  TemplateId?: number
  /**
   * 模板描述。
   */
  Description?: string
  /**
   * 地域：
Mainland：中国大陆；
Overseas：海外及港澳台地区；
默认值：Mainland。
   */
  Area?: string
  /**
   * 是否去除水印。
为true则将录制原始流。
默认值：false。
   */
  RemoveWatermark?: boolean
  /**
   * 转码流id列表。
此参数仅在 RemoveWatermark为false时生效。
   */
  TranscodeTemplateIds?: Array<number | bigint>
}

/**
 * 水印信息。
 */
export interface WatermarkInfo {
  /**
   * 水印 ID。
   */
  WatermarkId?: number
  /**
   * 水印图片 URL。
   */
  PictureUrl?: string
  /**
   * 显示位置，X 轴偏移。
   */
  XPosition?: number
  /**
   * 显示位置，Y 轴偏移。
   */
  YPosition?: number
  /**
   * 水印名称。
   */
  WatermarkName?: string
  /**
   * 当前状态。0：未使用，1:使用中。
   */
  Status?: number
  /**
   * 添加时间。
注：此字段为北京时间（UTC+8时区）。
   */
  CreateTime?: string
  /**
   * 水印宽。
   */
  Width?: number
  /**
   * 水印高。
   */
  Height?: number
  /**
   * 背景水印宽。
   */
  BackgroundWidth?: number
  /**
   * 背景水印高。
   */
  BackgroundHeight?: number
}

/**
 * DescribeLiveDomainPlayInfoList请求参数结构体
 */
export interface DescribeLiveDomainPlayInfoListRequest {
  /**
   * 播放域名列表。
   */
  PlayDomains?: Array<string>
}

/**
 * 导播台输入信息参数
 */
export interface CasterInputInfo {
  /**
   * 输入源Index。
范围[1, 24]
   */
  InputIndex: number
  /**
   * 输入源类型。
范围[0,1,2,3,4]。
0：推流地址。
1：点播文件地址。
2：直播拉流地址。
3：图片地址。
4：webrtc协议推流地址。
   */
  InputType?: number
  /**
   * 输入源的源地址。
最大允许长度512。
当InputType为0（推流地址），2（直播拉流地址），3（图片地址）,4（webrtc推流地址）这几种类型时，URL需填入该字段。

注意：此字段可能返回 null，表示取不到有效值。
   */
  InputUrl?: string
  /**
   * 输入源描述。
最大允许长度256字符。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Description?: string
  /**
   * 点播地址列表。仅当input type为1（点播地址）时，将一个或多个点播地址，填入该字段。
单个地址最大允许长度512字符。
最多允许同时填入5个地址。
注：此时需保持InputUrl字段为空。
注意：此字段可能返回 null，表示取不到有效值。
   */
  InputUrls?: Array<string>
  /**
   * 是否启用点播无限循环播放。
注：当前该字段未生效，默认为True。
注意：此字段可能返回 null，表示取不到有效值。
   */
  LoopEnable?: boolean
  /**
   * 点播循环次数。
允许值-1或正整数。
当值为-1时，表示无限循环。
当值为其他正整数时，表示循环对应次数。
注：该字段暂未生效。
注意：此字段可能返回 null，表示取不到有效值。
   */
  LoopNumber?: number
  /**
   * 是否启用拉取到导播台。
注：该字段默认强制为true。
注意：此字段可能返回 null，表示取不到有效值。
   */
  PullPushEnable?: boolean
  /**
   * 输入源音量百分比。
默认为100。表示音量为原始大小。
允许值[0,200]。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Volume?: number
}

/**
 * DeleteLiveWatermarkRule返回参数结构体
 */
export interface DeleteLiveWatermarkRuleResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteCasterMarkWordInfo返回参数结构体
 */
export interface DeleteCasterMarkWordInfoResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeLogDownloadList返回参数结构体
 */
export interface DescribeLogDownloadListResponse {
  /**
   * 日志信息列表。
   */
  LogInfoList?: Array<LogInfo>
  /**
   * 总条数。
   */
  TotalNum?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ReleaseCaster请求参数结构体
 */
export interface ReleaseCasterRequest {
  /**
   * 导播台ID。
   */
  CasterId: number
}

/**
 * 转场信息
 */
export interface TransitionTypeInfo {
  /**
   * 转场名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  TransitionType?: string
  /**
   * 素材url
注意：此字段可能返回 null，表示取不到有效值。
   */
  SourceUrl?: string
  /**
   * 转场的下标，可用来排序，从1开始递增
注意：此字段可能返回 null，表示取不到有效值。
   */
  Index?: number
}

/**
 * DeleteLivePadTemplate返回参数结构体
 */
export interface DeleteLivePadTemplateResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 域名证书信息
 */
export interface DomainCertInfo {
  /**
   * 证书Id。
   */
  CertId?: number
  /**
   * 证书名称。
   */
  CertName?: string
  /**
   * 描述信息。
   */
  Description?: string
  /**
   * 创建时间，UTC格式。
注：此字段为北京时间（UTC+8时区）。
   */
  CreateTime?: string
  /**
   * 证书内容。
   */
  HttpsCrt?: string
  /**
   * 证书类型。
0：用户添加证书，
1：腾讯云托管证书。
   */
  CertType?: number
  /**
   * 证书过期时间，UTC格式。
注：此字段为北京时间（UTC+8时区）。
   */
  CertExpireTime?: string
  /**
   * 使用此证书的域名名称。
   */
  DomainName?: string
  /**
   * 证书状态。
   */
  Status?: number
  /**
   * 证书本身标识的域名列表。
比如: ["*.x.com"]
注意：此字段可能返回 null，表示取不到有效值。
   */
  CertDomains?: Array<string>
  /**
   * 腾讯云ssl的证书Id
注意：此字段可能返回 null，表示取不到有效值。
   */
  CloudCertId?: string
}

/**
 * DeleteLiveSnapshotRule返回参数结构体
 */
export interface DeleteLiveSnapshotRuleResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 带宽信息
 */
export interface BandwidthInfo {
  /**
   * 返回格式：
使用UTC格式时间，
例如：2019-01-08T10:00:00Z。
注意：北京时间值为 UTC 时间值 + 8 小时，格式按照 ISO 8601 标准表示，详见 [ISO 日期格式说明](https://cloud.tencent.com/document/product/267/38543#:~:text=I-,ISO,-%E6%97%A5%E6%9C%9F%E6%A0%BC%E5%BC%8F)。
根据粒度会有不同程度的缩减。
   */
  Time?: string
  /**
   * 带宽。
   */
  Bandwidth?: number
}

/**
 * 直播流监播输出流信息
 */
export interface LiveStreamMonitorOutputInfo {
  /**
   * 监播任务输出流宽度像素。范围[1,1920]。建议至少大于100像素。
注意：此字段可能返回 null，表示取不到有效值。
   */
  OutputStreamWidth: number
  /**
   * 监播任务输出流长度像素。范围[1,1080]，建议至少大于100像素。
注意：此字段可能返回 null，表示取不到有效值。
   */
  OutputStreamHeight: number
  /**
   * 监播任务输出流名称。
不填时，系统会自动生成。
256字节以内，只允许包含字母、数字、‘-’，‘_’，'.'字符。
注意：此字段可能返回 null，表示取不到有效值。
   */
  OutputStreamName?: string
  /**
   * 监播任务播放域名。128字节以内，只允许填处于启用状态的播放域名。
注意：此字段可能返回 null，表示取不到有效值。
   */
  OutputDomain?: string
  /**
   * 监播任务播放路径。32字节以内，只允许包含字母、数字、‘-’，‘_’，'.'字符。
注意：此字段可能返回 null，表示取不到有效值。
   */
  OutputApp?: string
}

/**
 * DeleteLiveTranscodeTemplate请求参数结构体
 */
export interface DeleteLiveTranscodeTemplateRequest {
  /**
   * 模板 ID。
1. 在创建转码模板接口 [CreateLiveTranscodeTemplate](/document/product/267/32646) 调用的返回值中获取模板 ID。
2. 可以从接口 [DescribeLiveTranscodeTemplates](/document/product/267/32641) 查询已经创建过的模板列表。
   */
  TemplateId: number
}

/**
 * StopLivePadProcessor请求参数结构体
 */
export interface StopLivePadProcessorRequest {
  /**
   * 推流路径，与推流和播放地址中的AppName保持一致，默认为 live。
   */
  AppName: string
  /**
   * 您的推流域名。
   */
  PushDomainName: string
  /**
   * 流名称。
   */
  StreamName: string
  /**
   * 操作人备注信息。
   */
  Operator?: string
}

/**
 * StopRecordTask返回参数结构体
 */
export interface StopRecordTaskResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 通用混流控制参数
 */
export interface CommonMixControlParams {
  /**
   * 取值范围[0,1]。
填1时，当参数中图层分辨率参数与视频实际分辨率不一致时，自动从视频中按图层设置的分辨率比例进行裁剪。
   */
  UseMixCropCenter?: number
  /**
   * 取值范围[0,1]
填1时，当InputStreamList中个数为1时，且OutputParams.OutputStreamType为1时，不执行取消操作，执行拷贝流操作
   */
  AllowCopy?: number
  /**
   * 取值范围[0,1]
填1时，透传原始流的sei
   */
  PassInputSei?: number
  /**
   * 取值范围[0,1]
填1时，图片输入中的透明通道生效。
   */
  UsePictureTransparent?: number
}

/**
 * DescribeTranscodeTaskNum返回参数结构体
 */
export interface DescribeTranscodeTaskNumResponse {
  /**
   * 任务数列表。
   */
  DataInfoList: Array<TranscodeTaskNum>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeLivePullStreamTaskStatus返回参数结构体
 */
export interface DescribeLivePullStreamTaskStatusResponse {
  /**
   * 任务状态信息。
   */
  TaskStatusInfo?: TaskStatusInfo
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeLivePadProcessorList返回参数结构体
 */
export interface DescribeLivePadProcessorListResponse {
  /**
   * 当前正在拉取垫片的流名称列表。
   */
  StreamNameList?: Array<string>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteLivePadRule返回参数结构体
 */
export interface DeleteLivePadRuleResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeLiveRecordTemplate请求参数结构体
 */
export interface DescribeLiveRecordTemplateRequest {
  /**
   * [DescribeLiveRecordTemplates](/document/product/267/32609)接口获取到的模板 ID。
   */
  TemplateId: number
}

/**
 * 播放错误码信息
 */
export interface HttpStatusInfo {
  /**
   * 播放HTTP状态码。
   */
  HttpStatus: string
  /**
   * 个数。
   */
  Num: number
}

/**
 * CreateLiveTranscodeTemplate请求参数结构体
 */
export interface CreateLiveTranscodeTemplateRequest {
  /**
   * 模板名称，例： 900p 仅支持字母和数字的组合。
长度限制：
  标准转码：1-10个字符
  极速高清转码：3-10个字符
   */
  TemplateName: string
  /**
   * 视频码率。范围：0kbps - 8000kbps。
0为保持原始码率。
注: 转码模板有码率唯一要求，最终保存的码率可能与输入码率有所差别。
   */
  VideoBitrate: number
  /**
   * 音频编码：aac，默认aac。
注意：当前该参数未生效，待后续支持！
   */
  Acodec?: string
  /**
   * 音频码率，默认0。
范围：0-500。
   */
  AudioBitrate?: number
  /**
   * 视频编码：h264/h265/origin，默认origin。

origin: 保持原始编码格式
   */
  Vcodec?: string
  /**
   * 模板描述。
   */
  Description?: string
  /**
   * 是否保留视频，0：否，1：是。默认1。
   */
  NeedVideo?: number
  /**
   * 宽，默认0。
范围[0-3000]
数值必须是2的倍数，0是原始宽度
   */
  Width?: number
  /**
   * 是否保留音频，0：否，1：是。默认1。
   */
  NeedAudio?: number
  /**
   * 高，默认0。
范围[0-3000]
数值必须是2的倍数，0是原始高度。
极速高清模板（AiTransCode = 1 的时候）必须传。
   */
  Height?: number
  /**
   * 帧率，默认0。
范围0-60fps
   */
  Fps?: number
  /**
   * 关键帧间隔，单位：秒。
默认原始的间隔
范围2-6
   */
  Gop?: number
  /**
   * 旋转角度，默认0。
可取值：0，90，180，270
   */
  Rotate?: number
  /**
   * 编码质量：
baseline/main/high。默认baseline
   */
  Profile?: string
  /**
   * 当设置的码率>原始码率时，是否以原始码率为准。
0：否， 1：是
默认 0。
   */
  BitrateToOrig?: number
  /**
   * 当设置的高度>原始高度时，是否以原始高度为准。
0：否， 1：是
默认 0。
   */
  HeightToOrig?: number
  /**
   * 当设置的帧率>原始帧率时，是否以原始帧率为准。
0：否， 1：是
默认 0。
   */
  FpsToOrig?: number
  /**
   * 是否是极速高清模板，0：否，1：是。默认0。
   */
  AiTransCode?: number
  /**
   * 极速高清视频码率压缩比。
极速高清目标码率=VideoBitrate * (1-AdaptBitratePercent)

取值范围：0.0到0.5
   */
  AdaptBitratePercent?: number
  /**
   * 是否以短边作为高度，0：否，1：是。默认0。
   */
  ShortEdgeAsHeight?: number
  /**
   * DRM 加密类型，可选值：fairplay、normalaes、widevine。
不传递或者为空字符串，清空之前的DRM配置。
   */
  DRMType?: string
  /**
   * DRM 加密项，可选值：AUDIO、SD、HD、UHD1、UHD2，后四个为一组，同组中的内容只能选一个。
不传递或者为空字符串，清空之前的DRM配置。
   */
  DRMTracks?: string
}

/**
 * 媒体处理结果，包含智能语音识别、智能文字识别结果
 */
export interface MPSResult {
  /**
   * 智能语音识别结果。
注意：此字段可能返回 null，表示取不到有效值。
   */
  AiAsrResults?: Array<string>
  /**
   * 智能文字识别结果。
注意：此字段可能返回 null，表示取不到有效值。
   */
  AiOcrResults?: Array<string>
  /**
   * 内容质检结果。
注意：此字段可能返回 null，表示取不到有效值。
   */
  StreamQuaCtrlResults?: Array<string>
}

/**
 * DescribeLiveTimeShiftTemplates返回参数结构体
 */
export interface DescribeLiveTimeShiftTemplatesResponse {
  /**
   * 直播时移模板信息。
   */
  Templates?: Array<TimeShiftTemplate>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyCasterOutputInfo请求参数结构体
 */
export interface ModifyCasterOutputInfoRequest {
  /**
   * 导播台ID。
   */
  CasterId: number
  /**
   * 导播台推流参数信息。
   */
  OutputInfo: CasterOutputInfo
}

/**
 * 播放鉴权key信息。
 */
export interface PlayAuthKeyInfo {
  /**
   * 域名。
   */
  DomainName: string
  /**
   * 是否启用:
0: 关闭。
1: 启用。
   */
  Enable: number
  /**
   * 鉴权 Key。
   */
  AuthKey: string
  /**
   * 有效时间，单位：秒。
   */
  AuthDelta: number
  /**
   * 鉴权 BackKey。
   */
  AuthBackKey: string
}

/**
 * ModifyLiveStreamMonitor返回参数结构体
 */
export interface ModifyLiveStreamMonitorResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateRecordTask请求参数结构体
 */
export interface CreateRecordTaskRequest {
  /**
   * 流名称。
   */
  StreamName: string
  /**
   * 推流域名。
   */
  DomainName: string
  /**
   * 推流路径。
   */
  AppName: string
  /**
   * 录制任务结束时间，Unix时间戳。设置时间必须大于StartTime及当前时间，且小于当前时间+7天。
   */
  EndTime: number
  /**
   * 录制任务开始时间，Unix时间戳。如果不填表示立即启动录制。EndTime - StartTime不能超过24小时。
   */
  StartTime?: number
  /**
   * 推流类型，默认0。取值：
0-直播推流。
1-合成流，即 A+B=C 类型混流。
   */
  StreamType?: number
  /**
   * 录制模板ID，CreateLiveRecordTemplate 返回值。如果不填或者传入错误ID，则默认录制HLS格式、永久存储。
   */
  TemplateId?: number
  /**
   * 扩展字段，暂无定义。默认为空。
   */
  Extension?: string
}

/**
 * 拉流转推任务的时长分布信息
 */
export interface TaskDurationInfo {
  /**
   * 拉流转推任务的时间点
   */
  Time: string
  /**
   * 拉流转推任务的时长，单位为分钟
   */
  Duration: number
}

/**
 * 规则信息
 */
export interface CallBackRuleInfo {
  /**
   * 规则创建时间。
注：此字段为北京时间（UTC+8时区）。
   */
  CreateTime?: string
  /**
   * 规则更新时间。
注：此字段为北京时间（UTC+8时区）。
   */
  UpdateTime?: string
  /**
   * 模板 ID。
   */
  TemplateId?: number
  /**
   * 推流域名。
   */
  DomainName?: string
  /**
   * 推流路径。
   */
  AppName?: string
}

/**
 * DescribeLivePadTemplate返回参数结构体
 */
export interface DescribeLivePadTemplateResponse {
  /**
   * 直播垫片模板信息。
   */
  Template?: PadTemplate
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ResumeLiveStream请求参数结构体
 */
export interface ResumeLiveStreamRequest {
  /**
   * 推流路径，与推流和播放地址中的AppName保持一致，默认为 live。
   */
  AppName: string
  /**
   * 您的推流域名。
   */
  DomainName: string
  /**
   * 流名称。
   */
  StreamName: string
}

/**
 * DescribeBillBandwidthAndFluxList返回参数结构体
 */
export interface DescribeBillBandwidthAndFluxListResponse {
  /**
   * 峰值带宽所在时间点，接口返回支持两种时间格式(与接口请求传递的时间格式一致)：
1）YYYY-MM-DDThh:mm:ssZ：UTC时间格式，详见IOS日期格式说明文档: https://cloud.tencent.com/document/product/266/11732#I
2）YYYY-MM-DD hh:mm:ss：使用此格式时，默认代表北京时间。
   */
  PeakBandwidthTime?: string
  /**
   * 峰值带宽，单位是Mbps。
   */
  PeakBandwidth?: number
  /**
   * 95峰值带宽所在时间点，接口返回支持两种时间格式(与接口请求传递的时间格式一致)：
1）YYYY-MM-DDThh:mm:ssZ：UTC时间格式，详见IOS日期格式说明文档: https://cloud.tencent.com/document/product/266/11732#I
2）YYYY-MM-DD hh:mm:ss：使用此格式时，默认代表北京时间。
   */
  P95PeakBandwidthTime?: string
  /**
   * 95峰值带宽，单位是Mbps。
   */
  P95PeakBandwidth?: number
  /**
   * 总流量，单位是MB。
   */
  SumFlux?: number
  /**
   * 明细数据信息。
   */
  DataInfoList?: Array<BillDataInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeLiveDomainPlayInfoList返回参数结构体
 */
export interface DescribeLiveDomainPlayInfoListResponse {
  /**
   * 数据时间，格式为yyyy-mm-dd HH:MM:SS。
   */
  Time?: string
  /**
   * 实时总带宽。
   */
  TotalBandwidth?: number
  /**
   * 实时总流量。
   */
  TotalFlux?: number
  /**
   * 总请求数。
   */
  TotalRequest?: number
  /**
   * 实时总连接数。
   */
  TotalOnline?: number
  /**
   * 分域名的数据情况。
   */
  DomainInfoList?: Array<DomainInfoList>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeLiveStreamMonitorList请求参数结构体
 */
export interface DescribeLiveStreamMonitorListRequest {
  /**
   * 查询列表时的起始偏移。
   */
  Index: number
  /**
   * 本次查询的记录个数。最小值为1。
   */
  Count: number
}

/**
 * DescribeLivePullStreamTasks请求参数结构体
 */
export interface DescribeLivePullStreamTasksRequest {
  /**
   * 任务 ID。 
来源：调用 CreateLivePullStreamTask 接口时返回。
不填默认查询所有任务，按更新时间倒序排序。
   */
  TaskId?: string
  /**
   * 取得第几页，默认值：1。
   */
  PageNum?: number
  /**
   * 分页大小，默认值：10。
取值范围：1~20 之前的任意整数。
   */
  PageSize?: number
  /**
   * 使用指定任务 ID 查询任务信息。
注意：仅供使用指定 ID 创建的任务查询。
   */
  SpecifyTaskId?: string
}

/**
 * DeleteLiveStreamMonitor返回参数结构体
 */
export interface DeleteLiveStreamMonitorResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteLiveCallbackTemplate请求参数结构体
 */
export interface DeleteLiveCallbackTemplateRequest {
  /**
   * 模板 ID。
1. 在创建回调模板接口 [CreateLiveCallbackTemplate](/document/product/267/32637) 调用的返回值中获取模板 ID。
2. 可以从接口 [DescribeLiveCallbackTemplates](/document/product/267/32632) 查询已经创建的过的模板列表。
   */
  TemplateId: number
}

/**
 * ModifyCasterInputInfo请求参数结构体
 */
export interface ModifyCasterInputInfoRequest {
  /**
   * 导播台ID。
   */
  CasterId: number
  /**
   * 修改的导播台输入源信息
   */
  InputInfo: CasterInputInfo
}

/**
 * DescribeCasterOutputInfos请求参数结构体
 */
export interface DescribeCasterOutputInfosRequest {
  /**
   * 导播台ID。
   */
  CasterId: number
}

/**
 * CreateLiveCallbackTemplate返回参数结构体
 */
export interface CreateLiveCallbackTemplateResponse {
  /**
   * 模板ID。
   */
  TemplateId?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeLiveCallbackTemplate请求参数结构体
 */
export interface DescribeLiveCallbackTemplateRequest {
  /**
   * 模板 ID。
1. 在创建回调模板接口 [CreateLiveCallbackTemplate](/document/product/267/32637) 调用的返回值中获取模板 ID。
2. 可以从接口 [DescribeLiveCallbackTemplates](/document/product/267/32632) 查询已经创建的过的模板列表。
   */
  TemplateId: number
}

/**
 * CreateLiveStreamMonitor请求参数结构体
 */
export interface CreateLiveStreamMonitorRequest {
  /**
   * 监播任务的输出信息。
   */
  OutputInfo: LiveStreamMonitorOutputInfo
  /**
   * 待监播的输入流信息列表。
   */
  InputList: Array<LiveStreamMonitorInputInfo>
  /**
   * 监播任务名称。字段长度小于128字节（一个汉字两个字节）。
   */
  MonitorName?: string
  /**
   * 监播事件通知策略。
不填默认为没有任何通知。
   */
  NotifyPolicy?: LiveStreamMonitorNotifyPolicy
  /**
   * 智能语音识别语种设置：
0 关闭 1 中文 2 英文 3 日文 4 韩文。
   */
  AsrLanguage?: number
  /**
   * 智能文字识别语种设置：
0 关闭 1 中、英文。
   */
  OcrLanguage?: number
  /**
   * 智能语音识别的输入列表，若开启语音识别则必填。
（第1条输入流index为1）
   */
  AiAsrInputIndexList?: Array<number | bigint>
  /**
   * 智能文字识别的输入列表，若开启文字识别则必填。
（第1条输入流index为1）
   */
  AiOcrInputIndexList?: Array<number | bigint>
  /**
   * 是否开启断流检测。
   */
  CheckStreamBroken?: number
  /**
   * 是否开启低帧率检测。
   */
  CheckStreamLowFrameRate?: number
  /**
   * 是否存储监播事件到监播报告，以及是否允许查询监播报告。
   */
  AllowMonitorReport?: number
  /**
   * 是否开启格式诊断。
   */
  AiFormatDiagnose?: number
  /**
   * 是否开启内容质检。
   */
  AiQualityControl?: number
  /**
   * 导播台监播对应的导播台场次id。
   */
  CasterId?: string
  /**
   * 拉流转推监播任务对应的拉流转推场次id
   */
  PullPushTaskId?: string
}

/**
 * DescribeScreenShotSheetNumList请求参数结构体
 */
export interface DescribeScreenShotSheetNumListRequest {
  /**
   * 起始时间点，接口查询支持两种时间格式：
1）YYYY-MM-DDThh:mm:ssZ：UTC时间格式，详见IOS日期格式说明文档: https://cloud.tencent.com/document/product/266/11732#I
2）YYYY-MM-DD hh:mm:ss：使用此格式时，默认代表北京时间。
   */
  StartTime: string
  /**
   * 结束时间点，接口查询支持两种时间格式：
1）YYYY-MM-DDThh:mm:ssZ：UTC时间格式，详见IOS日期格式说明文档: https://cloud.tencent.com/document/product/266/11732#I
2）YYYY-MM-DD hh:mm:ss：使用此格式时，默认代表北京时间。
支持最近三个月的查询，查询开始和结束时间跨度不支持超过31天。
   */
  EndTime: string
  /**
   * 地域信息，可选值包括Mainland，Oversea，前者是查询中国大陆范围内的数据，后者是除中国大陆范围之外的数据，若不传该参数，则查询所有地区的数据。
   */
  Zone?: string
  /**
   * 推流域名（支持查询2019年11 月1日之后的域名维度数据）。
   */
  PushDomains?: Array<string>
  /**
   * 数据维度，数据延迟1个半小时，可选值包括：1、Minute（5分钟粒度，最大支持查询时间范围是31天），2、Day（天粒度，默认值，按照北京时间做跨天处理，最大支持查询时间范围是186天当天）。
   */
  Granularity?: string
}

/**
 * DescribeLiveTranscodeTemplate请求参数结构体
 */
export interface DescribeLiveTranscodeTemplateRequest {
  /**
   * 模板 ID。
注意：在创建转码模板接口 [CreateLiveTranscodeTemplate](/document/product/267/32646) 调用的返回值中获取模板 ID。
   */
  TemplateId: number
}

/**
 * 监控播放数据
 */
export interface MonitorStreamPlayInfo {
  /**
   * 播放域名。
   */
  PlayDomain: string
  /**
   * 流id。
   */
  StreamName: string
  /**
   * 播放码率，0表示原始码率。
   */
  Rate: number
  /**
   * 播放协议，可选值包括 Unknown，Flv，Hls，Rtmp，Huyap2p。
   */
  Protocol: string
  /**
   * 带宽，单位是Mbps。
   */
  Bandwidth: number
  /**
   * 在线人数，1分钟采样一个点，统计采样点的tcp链接数目。
   */
  Online: number
  /**
   * 请求数。
   */
  Request: number
}

/**
 * CreateLiveWatermarkRule请求参数结构体
 */
export interface CreateLiveWatermarkRuleRequest {
  /**
   * 推流域名。
   */
  DomainName: string
  /**
   * 推流路径，与推流和播放地址中的AppName保持一致，默认为live。
   */
  AppName: string
  /**
   * 流名称。
   */
  StreamName: string
  /**
   * 水印Id，即调用[AddLiveWatermark](/document/product/267/30154)接口返回的WatermarkId。
   */
  TemplateId: number
}

/**
 * DeleteRecordTask请求参数结构体
 */
export interface DeleteRecordTaskRequest {
  /**
   * 任务ID，CreateRecordTask返回。删除TaskId指定的录制任务。
   */
  TaskId: string
}

/**
 * DescribeStreamDayPlayInfoList返回参数结构体
 */
export interface DescribeStreamDayPlayInfoListResponse {
  /**
   * 播放数据信息列表。
   */
  DataInfoList?: Array<PlayDataInfoByStream>
  /**
   * 总数量。
   */
  TotalNum?: number
  /**
   * 总页数。
   */
  TotalPage?: number
  /**
   * 当前数据所处页码。
   */
  PageNum?: number
  /**
   * 每页个数。
   */
  PageSize?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteLivePadRule请求参数结构体
 */
export interface DeleteLivePadRuleRequest {
  /**
   * 推流域名。
域名+AppName+StreamName唯一标识单个转码规则，如需删除需要强匹配，例如AppName为空也需要传空字符串进行强匹配。
   */
  DomainName: string
  /**
   * 推流路径，与推流和播放地址中的AppName保持一致，默认为 live。
域名+AppName+StreamName唯一标识单个转码规则，如需删除需要强匹配，例如AppName为空也需要传空字符串进行强匹配。
   */
  AppName: string
  /**
   * 流名称。
域名+AppName+StreamName唯一标识单个转码规则，如需删除需要强匹配，例如AppName为空也需要传空字符串进行强匹配。
   */
  StreamName: string
  /**
   * 直播垫片模板id。
   */
  TemplateId: number
}

/**
 * CreateLiveSnapshotRule返回参数结构体
 */
export interface CreateLiveSnapshotRuleResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeLiveStreamEventList返回参数结构体
 */
export interface DescribeLiveStreamEventListResponse {
  /**
   * 推断流事件列表。
   */
  EventList: Array<StreamEventInfo>
  /**
   * 分页的页码。
   */
  PageNum: number
  /**
   * 每页大小。
   */
  PageSize: number
  /**
   * 符合条件的总个数。
   */
  TotalNum: number
  /**
   * 总页数。
   */
  TotalPage: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeLiveTranscodeTotalInfo请求参数结构体
 */
export interface DescribeLiveTranscodeTotalInfoRequest {
  /**
   * 开始时间，支持最近三个月的数据查询，起始时间和结束时间跨度不能超过三个月。接口查询支持两种时间格式：
1）YYYY-MM-DDThh:mm:ssZ：UTC时间格式，详见 [ISO 日期格式说明](https://cloud.tencent.com/document/product/267/38543#:~:text=I-,ISO,-%E6%97%A5%E6%9C%9F%E6%A0%BC%E5%BC%8F)
2）YYYY-MM-DD hh:mm:ss：使用此格式时，默认代表北京时间。
   */
  StartTime: string
  /**
   * 结束时间，支持最近三个月的数据查询，起始时间和结束时间跨度不能超过三个月。接口查询支持两种时间格式：
1）YYYY-MM-DDThh:mm:ssZ：UTC时间格式，详见 [ISO 日期格式说明](https://cloud.tencent.com/document/product/267/38543#:~:text=I-,ISO,-%E6%97%A5%E6%9C%9F%E6%A0%BC%E5%BC%8F)
2）YYYY-MM-DD hh:mm:ss：使用此格式时，默认代表北京时间。
   */
  EndTime: string
  /**
   * 推流域名列表，若不填，表示查询所有域名总体数据。
指定域名时返回1小时粒度数据。
   */
  PushDomains?: Array<string>
  /**
   * 可选值：
Mainland：查询中国大陆（境内）数据，
Oversea：则查询国际/港澳台（境外）数据，
默认：查询全球地区（境内+境外）的数据。
   */
  MainlandOrOversea?: string
}

/**
 * 通用混流输入裁剪参数。
 */
export interface CommonMixCropParams {
  /**
   * 裁剪的宽度。取值范围[0，2000]。
   */
  CropWidth?: number
  /**
   * 裁剪的高度。取值范围[0，2000]。
   */
  CropHeight?: number
  /**
   * 裁剪的起始X坐标。取值范围[0，2000]。
   */
  CropStartLocationX?: number
  /**
   * 裁剪的起始Y坐标。取值范围[0，2000]。
   */
  CropStartLocationY?: number
}

/**
 * DescribeLivePushAuthKey请求参数结构体
 */
export interface DescribeLivePushAuthKeyRequest {
  /**
   * 推流域名。
   */
  DomainName: string
}

/**
 * DescribeCasterTransitionTypes返回参数结构体
 */
export interface DescribeCasterTransitionTypesResponse {
  /**
   * 转场信息列表
   */
  TransitionTypes?: Array<TransitionTypeInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateCaster请求参数结构体
 */
export interface CreateCasterRequest {
  /**
   * 导播台名称
   */
  CasterName?: string
  /**
   * 导播台的描述
最大允许长度256
   */
  Description?: string
  /**
   * 导播台的过期时间戳。值为-1或unix时间戳。
默认值为-1。
当值为-1时，表示该导播台永不过期。
当值为正常unix时间戳时，导播台将在该时间过期。
导播台过期后，预监与主监画面将自动停止，转推自动停止。
点播、直播url将停止转拉，推流url需自行停止推流。
   */
  ExpireTime?: number
  /**
   * 导播台延时播放时间，单位为秒。
默认为0，最大支持300秒
   */
  DelayTime?: number
  /**
   * 导播台转场类型。
默认为空。
允许使用通过DescribeCasterTransitionTypes接口中查询到的转场类型。
   */
  TransitionType?: string
  /**
   * 导播台主监输出的宽度，单位为像素。
默认为1280，最大允许4096。
   */
  PgmWidth?: number
  /**
   * 导播台主监输出的高度，单位为像素。
默认为720，最大允许2160。
   */
  PgmHeight?: number
  /**
   * 导播台主监输出的帧率。
默认为0，表示随源输出。
最大支持60。
   */
  PgmFps?: number
  /**
   * 导播台主监输出的码率，单位为kbps。
默认为0，表示随源的码率输出。
最大允许10000kbps。
   */
  PgmBitRate?: number
  /**
   * 导播台的计费类型。
0 通用型 
1 播单型。
注： 本参数暂无作用。
   */
  FeeType?: number
  /**
   * 导播台主监输出的音频码率，单位为kbps。
可选项：[0, 128, 192, 256]
默认值为0，表示随源的音频码率输出。
   */
  PgmAudioBitRate?: number
}

/**
 * AddCasterOutputInfo请求参数结构体
 */
export interface AddCasterOutputInfoRequest {
  /**
   * 导播台ID
   */
  CasterId: number
  /**
   * 导播台推流参数信息。
   */
  OutputInfo: CasterOutputInfo
}

/**
 * DescribeUploadStreamNums返回参数结构体
 */
export interface DescribeUploadStreamNumsResponse {
  /**
   * 明细数据信息
   */
  DataInfoList?: Array<ConcurrentRecordStreamNum>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeLiveTranscodeDetailInfo返回参数结构体
 */
export interface DescribeLiveTranscodeDetailInfoResponse {
  /**
   * 统计数据列表。
   */
  DataInfoList?: Array<TranscodeDetailInfo>
  /**
   * 页码。
   */
  PageNum?: number
  /**
   * 每页个数。
   */
  PageSize?: number
  /**
   * 总个数。
   */
  TotalNum?: number
  /**
   * 总页数。
   */
  TotalPage?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteLiveTranscodeTemplate返回参数结构体
 */
export interface DeleteLiveTranscodeTemplateResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateScreenshotTask返回参数结构体
 */
export interface CreateScreenshotTaskResponse {
  /**
   * 任务ID，全局唯一标识截图任务。返回TaskId字段说明截图任务创建成功。
   */
  TaskId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteLiveCallbackRule返回参数结构体
 */
export interface DeleteLiveCallbackRuleResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeStreamPlayInfoList请求参数结构体
 */
export interface DescribeStreamPlayInfoListRequest {
  /**
   * 起始时间点，接口查询支持两种时间格式：
1）YYYY-MM-DDThh:mm:ssZ：UTC时间格式，详见IOS日期格式说明文档: https://cloud.tencent.com/document/product/266/11732#I
2）yyyy-MM-dd HH:mm:ss：使用此格式时，默认代表北京时间。
开始时间和结束时间的格式需要保持一致。
   */
  StartTime: string
  /**
   * 结束时间点，接口查询支持两种时间格式：
1）YYYY-MM-DDThh:mm:ssZ：UTC时间格式，详见IOS日期格式说明文档: https://cloud.tencent.com/document/product/266/11732#I
2）yyyy-MM-dd HH:mm:ss：使用此格式时，默认代表北京时间。
开始时间和结束时间的格式需要保持一致。结束时间和开始时间跨度不支持超过24小时，支持距当前时间一个月内的数据查询。
   */
  EndTime: string
  /**
   * 播放域名，
若不填，则为查询所有播放域名的在线流数据。
   */
  PlayDomain?: string
  /**
   * 流名称，精确匹配。
若不填，则为查询总体播放数据。
   */
  StreamName?: string
  /**
   * 推流路径，与播放地址中的AppName保持一致，会精确匹配，在同时传递了StreamName时生效。
若不填，则为查询总体播放数据。
   */
  AppName?: string
  /**
   * 服务名称，可选值包括LVB(标准直播)，LEB(快直播)，不填则查LVB+LEB总值。
   */
  ServiceName?: string
}

/**
 * DescribeCasterDisplayInfo请求参数结构体
 */
export interface DescribeCasterDisplayInfoRequest {
  /**
   * 导播台ID
   */
  CasterId: number
}

/**
 * 推流鉴权key信息。
 */
export interface PushAuthKeyInfo {
  /**
   * 域名。
   */
  DomainName: string
  /**
   * 是否启用，0：关闭，1：启用。
   */
  Enable: number
  /**
   * 主鉴权 Key。
   */
  MasterAuthKey: string
  /**
   * 备鉴权 Key。
   */
  BackupAuthKey: string
  /**
   * 有效时间，单位：秒。
   */
  AuthDelta: number
}

/**
 * CreateCasterInputPushUrl返回参数结构体
 */
export interface CreateCasterInputPushUrlResponse {
  /**
   * 生成可使用的推流地址。
   */
  PushUrl?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeLivePlayAuthKey请求参数结构体
 */
export interface DescribeLivePlayAuthKeyRequest {
  /**
   * 域名。
   */
  DomainName: string
}

/**
 * HTTP返回码数据信息
 */
export interface HttpCodeValue {
  /**
   * 时间，
使用UTC格式时间，
例如：2019-01-08T10:00:00Z。
注意：北京时间值为 UTC 时间值 + 8 小时，格式按照 ISO 8601 标准表示，详见 [ISO 日期格式说明](https://cloud.tencent.com/document/product/266/11732#I)。
   */
  Time: string
  /**
   * 次数。
   */
  Numbers: number
  /**
   * 占比。
   */
  Percentage: number
}

/**
 * CreateLiveTimeShiftRule返回参数结构体
 */
export interface CreateLiveTimeShiftRuleResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteLiveTranscodeRule返回参数结构体
 */
export interface DeleteLiveTranscodeRuleResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateCasterInputPushUrl请求参数结构体
 */
export interface CreateCasterInputPushUrlRequest {
  /**
   * 导播台ID
   */
  CasterId: number
  /**
   * 请求生成推流地址的输入Index。
允许范围[1,24]。
   */
  InputIndex: number
  /**
   * 生成推流地址协议。
范围[rtmp,webrtc]。
注：获取webrtc推流地址时，需配合腾讯云快直播推流sdk才可成功推流。
   */
  Protocol?: string
}

/**
 * DescribeCasterMarkWordInfos请求参数结构体
 */
export interface DescribeCasterMarkWordInfosRequest {
  /**
   * 导播台ID。
   */
  CasterId: number
}

/**
 * 直播域名信息
 */
export interface DomainInfo {
  /**
   * 直播域名。
   */
  Name?: string
  /**
   * 域名类型:
0: 推流。
1: 播放。
   */
  Type?: number
  /**
   * 域名状态:
0: 停用。
1: 启用。
   */
  Status?: number
  /**
   * 添加时间。
注：此字段为北京时间（UTC+8时区）。
   */
  CreateTime?: string
  /**
   * 是否有 CName 到固定规则域名:
0: 否。
1: 是。
   */
  BCName?: number
  /**
   * cname 对应的域名。
   */
  TargetDomain?: string
  /**
   * 播放区域，只在 Type=1 时该参数有意义。
1: 国内。
2: 全球。
3: 海外。
   */
  PlayType?: number
  /**
   * 是否慢直播:
0: 普通直播。
1: 慢直播。
   */
  IsDelayLive?: number
  /**
   * 当前客户使用的 cname 信息。
   */
  CurrentCName?: string
  /**
   * 失效参数，可忽略。
   */
  RentTag?: number
  /**
   * 失效参数，可忽略。
注：此字段为北京时间（UTC+8时区）。
   */
  RentExpireTime?: string
  /**
   * 0: 标准直播。
1: 小程序直播。
注意：此字段可能返回 null，表示取不到有效值。
   */
  IsMiniProgramLive?: number
}

/**
 * DescribeLiveTranscodeRules请求参数结构体
 */
export interface DescribeLiveTranscodeRulesRequest {
  /**
   * 要筛选的模板ID数组。
   */
  TemplateIds?: Array<number | bigint>
  /**
   * 要筛选的域名数组。
   */
  DomainNames?: Array<string>
}

/**
 * 流维度的播放信息。
 */
export interface PlayDataInfoByStream {
  /**
   * 流名称。
   */
  StreamName: string
  /**
   * 总流量，单位: MB。
   */
  TotalFlux: number
}

/**
 * 直播监播功能输入流信息
 */
export interface LiveStreamMonitorInputInfo {
  /**
   * 待监播的输入流名称。256字节以内，只允许包含字母、数字、‘-’，‘_’，'.'字符。
注意：此字段可能返回 null，表示取不到有效值。
   */
  InputStreamName: string
  /**
   * 待监播的输入流推流域名。128字节以内，只允许填处于启用状态的推流域名。
注意：此字段可能返回 null，表示取不到有效值。
   */
  InputDomain?: string
  /**
   * 待监播的输入流推流路径。32字节以内，只允许包含字母、数字、‘-’，‘_’，'.'字符。
注意：此字段可能返回 null，表示取不到有效值。
   */
  InputApp?: string
  /**
   * 待监播的输入流推流url。一般场景下，无需该参数。
注意：此字段可能返回 null，表示取不到有效值。
   */
  InputUrl?: string
  /**
   * 描述。256字节以内。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Description?: string
  /**
   * 导播台输入源索引（10000 pvw， 10001 pgm， 其余代表输入下标）
   */
  CasterInputIndex?: number
  /**
   * 该输入源是否正在监播
   */
  NeedMonitor?: boolean
  /**
   * 导播台pvw pgm的cdn流id
   */
  CdnStreamId?: string
}

/**
 * DeleteLivePullStreamTask请求参数结构体
 */
export interface DeleteLivePullStreamTaskRequest {
  /**
   * 任务 Id。
   */
  TaskId: string
  /**
   * 操作人姓名。
   */
  Operator: string
  /**
   * 指定任务 ID。注意：用于删除使用自定义任务 ID 创建的任务。
   */
  SpecifyTaskId?: string
}

/**
 * DescribeCasterMarkPicInfos返回参数结构体
 */
export interface DescribeCasterMarkPicInfosResponse {
  /**
   * 导播台的水印信息列表。
   */
  MarkPicInfos?: Array<CasterMarkPicInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CopyCaster返回参数结构体
 */
export interface CopyCasterResponse {
  /**
   * 复制生成的导播台ID
   */
  CasterId?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * RestartLivePullStreamTask返回参数结构体
 */
export interface RestartLivePullStreamTaskResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * StopLiveRecord返回参数结构体
 */
export interface StopLiveRecordResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteCaster返回参数结构体
 */
export interface DeleteCasterResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteScreenshotTask请求参数结构体
 */
export interface DeleteScreenshotTaskRequest {
  /**
   * 任务ID，CreateScreenshotTask返回。删除TaskId指定的截图任务。
   */
  TaskId: string
}

/**
 * ModifyCasterLayoutInfo返回参数结构体
 */
export interface ModifyCasterLayoutInfoResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribePlayErrorCodeSumInfoList请求参数结构体
 */
export interface DescribePlayErrorCodeSumInfoListRequest {
  /**
   * 起始时间点，北京时间。
格式：yyyy-mm-dd HH:MM:SS。
   */
  StartTime: string
  /**
   * 结束时间点，北京时间。
格式：yyyy-mm-dd HH:MM:SS。
注：EndTime 和 StartTime 只支持最近1天的数据查询。
   */
  EndTime: string
  /**
   * 播放域名列表，不填表示总体数据。
   */
  PlayDomains?: Array<string>
  /**
   * 页数，范围[1,1000]，默认值是1。
   */
  PageNum?: number
  /**
   * 每页个数，范围：[1,1000]，默认值是20。
   */
  PageSize?: number
  /**
   * 地域，可选值：Mainland，Oversea，China，Foreign，Global（默认值）；如果为空，查询总的数据；如果为“Mainland”，查询中国大陆的数据；如果为“Oversea”，则查询中国大陆以外的数据；如果为China，查询中国的数据（包括港澳台）；如果为Foreign，查询国外的数据（不包括港澳台）。
   */
  MainlandOrOversea?: string
  /**
   * 分组参数，可选值：CountryProIsp（默认值），Country（国家），默认是按照国家+省份+运营商来进行分组；目前国外的省份和运营商暂时无法识别。
   */
  GroupType?: string
  /**
   * 输出字段使用的语言，可选值：Chinese（默认值），English，目前国家，省份和运营商支持多语言。
   */
  OutLanguage?: string
}

/**
 * 转码任务数。
 */
export interface TranscodeTaskNum {
  /**
   * 时间点。
   */
  Time: string
  /**
   * 码率。
   */
  CodeRate: number
  /**
   * 任务数。
   */
  Num: number
}

/**
 * 海外分区直播带宽出参国家带宽信息
 */
export interface BillCountryInfo {
  /**
   * 国家名称
   */
  Name: string
  /**
   * 带宽明细数据信息。
   */
  BandInfoList: Array<BillDataInfo>
}

/**
 * 日志url信息。
 */
export interface LogInfo {
  /**
   * 日志名称。
   */
  LogName?: string
  /**
   * 日志 URL。
   */
  LogUrl?: string
  /**
   * 日志生成时间。
注：此字段为北京时间（UTC+8时区）。
   */
  LogTime?: string
  /**
   * 文件大小。
   */
  FileSize?: number
}

/**
 * AddDelayLiveStream请求参数结构体
 */
export interface AddDelayLiveStreamRequest {
  /**
   * 推流路径，与推流和播放地址中的 AppName 保持一致，默认为 live。
   */
  AppName: string
  /**
   * 推流域名。
   */
  DomainName: string
  /**
   * 流名称。
   */
  StreamName: string
  /**
   * 延播时间，单位：秒，上限：600秒。
   */
  DelayTime: number
  /**
   * 延播设置的过期时间。UTC 格式，例如：2018-11-29T19:00:00Z。
注意：
1. 默认7天后过期，且最长支持7天内生效。
2. 北京时间值为 UTC 时间值 + 8 小时，格式按照 ISO 8601 标准表示，详见 [ISO 日期格式说明](https://cloud.tencent.com/document/product/267/38543#I)。
   */
  ExpireTime?: string
}

/**
 * DescribeLiveStreamEventList请求参数结构体
 */
export interface DescribeLiveStreamEventListRequest {
  /**
   * 起始时间。 
UTC 格式，例如：2018-12-29T19:00:00Z。
支持查询60天内的历史记录。
   */
  StartTime: string
  /**
   * 结束时间。
UTC 格式，例如：2018-12-29T20:00:00Z。
不超过当前时间，且和起始时间相差不得超过30天。
   */
  EndTime: string
  /**
   * 推流路径，与推流和播放地址中的AppName保持一致，默认为 live。
   */
  AppName?: string
  /**
   * 推流域名。
   */
  DomainName?: string
  /**
   * 流名称，不支持通配符（*）查询，默认模糊匹配。
可使用IsStrict字段改为精确查询。
   */
  StreamName?: string
  /**
   * 取得第几页。
默认值：1。
注： 目前只支持10000条内的查询。
   */
  PageNum?: number
  /**
   * 分页大小。
最大值：100。
取值范围：1~100 之间的任意整数。
默认值：10。
注： 目前只支持10000条内的查询。
   */
  PageSize?: number
  /**
   * 是否过滤，默认不过滤。
0：不进行任何过滤。
1：过滤掉开播失败的，只返回开播成功的。
   */
  IsFilter?: number
  /**
   * 是否精确查询，默认模糊匹配。
0：模糊匹配。
1：精确查询。
注：使用StreamName时该参数生效。
   */
  IsStrict?: number
  /**
   * 是否按结束时间正序显示，默认逆序。
0：逆序。
1：正序。
   */
  IsAsc?: number
}

/**
 * 回调模板信息。
 */
export interface CallBackTemplateInfo {
  /**
   * 模板 ID。
   */
  TemplateId?: number
  /**
   * 模板名称。
   */
  TemplateName?: string
  /**
   * 描述信息。
   */
  Description?: string
  /**
   * 开播回调 URL。
   */
  StreamBeginNotifyUrl?: string
  /**
   * 混流回调 URL。(参数已弃用)。
   */
  StreamMixNotifyUrl?: string
  /**
   * 断流回调 URL。
   */
  StreamEndNotifyUrl?: string
  /**
   * 录制文件回调 URL。
   */
  RecordNotifyUrl?: string
  /**
   * 截图回调 URL。
   */
  SnapshotNotifyUrl?: string
  /**
   * 鉴黄回调 URL。
   */
  PornCensorshipNotifyUrl?: string
  /**
   * 回调的鉴权 key。
   */
  CallbackKey?: string
  /**
   * 推流异常回调 URL。
注意：此字段可能返回 null，表示取不到有效值。
   */
  PushExceptionNotifyUrl?: string
  /**
   * 音频审核回调 URL。
注意：此字段可能返回 null，表示取不到有效值。
   */
  AudioAuditNotifyUrl?: string
  /**
   * 录制异常回调 URL。
   */
  RecordExceptionNotifyUrl?: string
  /**
   * 录制异常回调级别，可选择：error: 错误。alarm: 告警。
   */
  RecordExceptionLevels?: Array<string>
}

/**
 * StopCasterPvw请求参数结构体
 */
export interface StopCasterPvwRequest {
  /**
   * 导播台ID。
   */
  CasterId: number
}

/**
 * DeleteLiveRecord返回参数结构体
 */
export interface DeleteLiveRecordResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDeliverLogDownList返回参数结构体
 */
export interface DescribeDeliverLogDownListResponse {
  /**
   * 日志信息列表。
   */
  LogInfoList?: Array<PushLogInfo>
  /**
   * 总条数。
   */
  TotalNum?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 直播垫片模板。
 */
export interface PadTemplate {
  /**
   * 模板id。
   */
  TemplateId: number
  /**
   * 模板名称。
   */
  TemplateName: string
  /**
   * 垫片内容。
   */
  Url: string
  /**
   * 模板创建时间。
   */
  CreateTime: string
  /**
   * 模板修改时间。
   */
  UpdateTime: string
  /**
   * 模板描述。
   */
  Description?: string
  /**
   * 断流等待时间。
取值范围：0-30000。
单位：ms。
   */
  WaitDuration?: number
  /**
   * 最大垫片时长。
取值范围：0 - 正无穷。
单位：ms。
   */
  MaxDuration?: number
  /**
   * 垫片内容类型： 1：图片，2：视频。 默认值：1。
   */
  Type?: number
}

/**
 * 拉流配置。
 */
export interface PullStreamConfig {
  /**
   * 拉流配置 ID。
   */
  ConfigId: string
  /**
   * 源 URL。
   */
  FromUrl: string
  /**
   * 目的 URL。
   */
  ToUrl: string
  /**
   * 区域名。
   */
  AreaName: string
  /**
   * 运营商名。
   */
  IspName: string
  /**
   * 开始时间。
UTC格式时间，例如: 2019-01-08T10:00:00Z。
注意：北京时间值为 UTC 时间值 + 8 小时，格式按照 ISO 8601 标准表示，详见 [ISO 日期格式说明](https://cloud.tencent.com/document/product/266/11732#I)。
   */
  StartTime: string
  /**
   * 结束时间。

UTC格式时间，例如：2019-01-08T10:00:00Z。
注意：北京时间值为 UTC 时间值 + 8 小时，格式按照 ISO 8601 标准表示，详见 [ISO 日期格式说明](https://cloud.tencent.com/document/product/266/11732#I)。
   */
  EndTime: string
  /**
   * 状态:
0: 无效。
1: 初始状态。
2: 正在运行。
3: 拉起失败。
4: 暂停。
   */
  Status: string
}

/**
 * DescribeBackupStreamList请求参数结构体
 */
export interface DescribeBackupStreamListRequest {
  /**
   * 流名称，用于精确查询。
   */
  StreamName?: string
}

/**
 * DescribeDeliverLogDownList请求参数结构体
 */
export type DescribeDeliverLogDownListRequest = null

/**
 * 直播包信息。
 */
export interface LivePackageInfo {
  /**
   * 包 ID。
   */
  Id?: string
  /**
   * 总量。
注意：当为流量包时单位为字节。
当为转码包时单位为分钟。
   */
  Total?: number
  /**
   * 使用量。
注意：当为流量包时单位为字节。
当为转码包时单位为分钟。
当为连麦包时单位为小时。
   */
  Used?: number
  /**
   * 剩余量。
注意：当为流量包时单位为字节。
当为转码包时单位为分钟。
当为连麦包时单位为小时。
   */
  Left?: number
  /**
   * 购买时间。
注：此字段为北京时间（UTC+8时区）。
   */
  BuyTime?: string
  /**
   * 过期时间。
注：此字段为北京时间（UTC+8时区）。
   */
  ExpireTime?: string
  /**
   * 包类型，可选值:
0: 流量包。
1: 普通转码包。
2: 极速高清包。
3: 连麦包。
   */
  Type?: number
  /**
   * 包状态，可选值:
0: 未使用。
1: 使用中。
2: 已过期。
3: 已冻结。
4: 已耗尽。
5: 已退款
   */
  Status?: number
  /**
   * 是否自动续购。
注意：此字段可能返回 null，表示取不到有效值。
   */
  WillRenew?: number
  /**
   * 续购状态。
1 ：续购成功。
0 ：尚未续购。
<0  : 续购失败。
注意：此字段可能返回 null，表示取不到有效值。
   */
  RenewalResult?: number
}

/**
 * DescribeLiveTimeShiftTemplates请求参数结构体
 */
export type DescribeLiveTimeShiftTemplatesRequest = null

/**
 * StopLiveStreamMonitor返回参数结构体
 */
export interface StopLiveStreamMonitorResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 流播放信息
 */
export interface DayStreamPlayInfo {
  /**
   * 数据时间点，接口返回支持两种时间格式：
1）YYYY-MM-DDThh:mm:ssZ：UTC时间格式，详见ISO日期格式说明文档: https://cloud.tencent.com/document/product/266/11732#I
2）yyyy-MM-dd HH:mm:ss：使用此格式时，默认代表北京时间。
接口返回的时间格式和查询请求传入的时间格式一致。
   */
  Time?: string
  /**
   * 带宽（单位Mbps）。
   */
  Bandwidth?: number
  /**
   * 流量 （单位MB）。
   */
  Flux?: number
  /**
   * 请求数。
   */
  Request?: number
  /**
   * 在线人数。当前后端接口数据的统计方式与客户端侧不同，该数据仅供参考，具体数据请以业务客户端侧统计数据为准。
   */
  Online?: number
}

/**
 * ModifyLivePlayDomain返回参数结构体
 */
export interface ModifyLivePlayDomainResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateLiveRecordRule返回参数结构体
 */
export interface CreateLiveRecordRuleResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeLiveDomainCertBindings返回参数结构体
 */
export interface DescribeLiveDomainCertBindingsResponse {
  /**
   * 有绑定证书的域名信息数组。
   */
  LiveDomainCertBindings?: Array<LiveDomainCertBindings>
  /**
   * 总的记录行数，便于分页。
   */
  TotalNum?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateLivePadTemplate返回参数结构体
 */
export interface CreateLivePadTemplateResponse {
  /**
   * 模板Id。
   */
  TemplateId?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeLiveRecordTemplates返回参数结构体
 */
export interface DescribeLiveRecordTemplatesResponse {
  /**
   * 录制模板信息列表。
   */
  Templates?: Array<RecordTemplateInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeScreenshotTask请求参数结构体
 */
export interface DescribeScreenshotTaskRequest {
  /**
   * 查询任务开始时间，Unix 时间戳。设置时间不早于当前时间之前90天的时间，且查询时间跨度不超过一周。
   */
  StartTime: number
  /**
   * 查询任务结束时间，Unix 时间戳。EndTime 必须大于 StartTime，设置时间不早于当前时间之前90天的时间，且查询时间跨度不超过一周。（注意：任务开始结束时间必须在查询时间范围内）。
   */
  EndTime: number
  /**
   * 流名称。
   */
  StreamName?: string
  /**
   * 推流域名。
   */
  DomainName?: string
  /**
   * 推流路径。
   */
  AppName?: string
  /**
   * 翻页标识，分批拉取时使用：当单次请求无法拉取所有数据，接口将会返回 ScrollToken，下一次请求携带该 Token，将会从下一条记录开始获取。
   */
  ScrollToken?: string
}

/**
 * 主备流分组信息。
 */
export interface BackupStreamGroupInfo {
  /**
   * 流名称。
注意：此字段可能返回 null，表示取不到有效值。
   */
  StreamName?: string
  /**
   * 主备流信息。
注意：此字段可能返回 null，表示取不到有效值。
   */
  BackupList?: Array<BackupStreamDetailData>
  /**
   * 是否对该流开启了择优调度。
0 - 未开启。
1 - 已开启。
注意：此字段可能返回 null，表示取不到有效值。
   */
  OptimalEnable?: number
  /**
   * 域名分组的分组名称。
注意：此字段可能返回 null，表示取不到有效值。
   */
  HostGroupName?: string
}

/**
 * 截图任务
 */
export interface ScreenshotTask {
  /**
   * 截图任务ID。
   */
  TaskId?: string
  /**
   * 推流域名。
   */
  DomainName?: string
  /**
   * 推流路径。
   */
  AppName?: string
  /**
   * 流名称。
   */
  StreamName?: string
  /**
   * 任务开始时间，Unix时间戳。
   */
  StartTime?: number
  /**
   * 任务结束时间，Unix时间戳。
   */
  EndTime?: number
  /**
   * 截图模板ID。
   */
  TemplateId?: number
  /**
   * 调用 StopScreenshotTask 停止任务时间，Unix时间戳。值为0表示未曾调用接口停止任务。
   */
  Stopped?: number
}

/**
 * DeletePullStreamConfig返回参数结构体
 */
export interface DeletePullStreamConfigResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyLivePlayDomain请求参数结构体
 */
export interface ModifyLivePlayDomainRequest {
  /**
   * 播放域名。
   */
  DomainName: string
  /**
   * 拉流域名类型。1-国内；2-全球；3-境外
   */
  PlayType: number
}

/**
 * 直播增强计费信息。
 */
export interface LiveEnhanceInfo {
  /**
   * 域名。
   */
  Domain?: string
  /**
   * 时间。
   */
  Time?: string
  /**
   * 计费时长，单位分钟。
   */
  Duration?: number
  /**
   * 帧率。
   */
  Fps?: string
  /**
   * 分辨率。
   */
  Resolution?: string
  /**
   * 增强服务类型。
   */
  Type?: string
}

/**
 * DeleteCasterLayoutInfo返回参数结构体
 */
export interface DeleteCasterLayoutInfoResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 云转推水印信息。
 */
export interface PullPushWatermarkInfo {
  /**
   * 水印图片 URL。
URL中禁止包含的字符：
;(){}$>`#"'|
   */
  PictureUrl: string
  /**
   * 显示位置，X轴偏移，单位是百分比，默认 0。
   */
  XPosition: number
  /**
   * 显示位置，Y轴偏移，单位是百分比，默认 0。
   */
  YPosition: number
  /**
   * 水印宽度，占直播原始画面宽度百分比，建议高宽只设置一项，另外一项会自适应缩放，避免变形。默认原始宽度。
   */
  Width: number
  /**
   * 水印高度，占直播原始画面高度百分比，建议高宽只设置一项，另外一项会自适应缩放，避免变形。默认原始高度。
   */
  Height: number
  /**
   * 水印位置，默认 0。
0：左上角。
1：右上角。
2：右下角。
3：左下角。
   */
  Location: number
}

/**
 * DescribeGroupProIspPlayInfoList请求参数结构体
 */
export interface DescribeGroupProIspPlayInfoListRequest {
  /**
   * 起始时间点，
使用UTC格式时间，
例如：2019-01-08T10:00:00Z。
注意：北京时间值为 UTC 时间值 + 8 小时，格式按照 ISO 8601 标准表示，详见 [ISO 日期格式说明](https://cloud.tencent.com/document/product/267/38543#:~:text=I-,ISO,-%E6%97%A5%E6%9C%9F%E6%A0%BC%E5%BC%8F)。
   */
  StartTime: string
  /**
   * 结束时间点，
使用UTC格式时间，
例如：2019-01-08T10:00:00Z。
注意：北京时间值为 UTC 时间值 + 8 小时，格式按照 ISO 8601 标准表示，详见 [ISO 日期格式说明](https://cloud.tencent.com/document/product/267/38543#:~:text=I-,ISO,-%E6%97%A5%E6%9C%9F%E6%A0%BC%E5%BC%8F)。
时间跨度在（0,3小时]，支持最近1个月数据查询。
   */
  EndTime: string
  /**
   * 播放域名，默认为不填，表示求总体数据。
   */
  PlayDomains?: Array<string>
  /**
   * 省份列表，默认不填，则返回各省份的数据。
   */
  ProvinceNames?: Array<string>
  /**
   * 运营商列表，默认不填，则返回整个运营商的数据。
   */
  IspNames?: Array<string>
  /**
   * 国内还是国外，如果为空，查询所有地区数据；如果为“Mainland”，查询国内数据；如果为“Oversea”，则查询国外数据。
   */
  MainlandOrOversea?: string
}

/**
 * CreateCasterPgm返回参数结构体
 */
export interface CreateCasterPgmResponse {
  /**
   * 主监任务的rtmp协议预览地址。
注：该地址仅供预览，不可分发。
   */
  PgmPlayUrl?: string
  /**
   * 注：该字段已废弃，请结合腾讯云直播播放地址生成策略生成cdn播放地址。
   */
  CdnPlayUrl?: string
  /**
   * 主监任务在腾讯云直播侧的流ID。
   */
  CdnStreamId?: string
  /**
   * 主监任务的webrtc协议播放地址。
注：
1. 该预览地址仅作为预览，不可分发。
2. webrtc播放地址需配合腾讯云快直播播放sdk使用。
   */
  PgmWebRTCPlayUrl?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ReleaseCaster返回参数结构体
 */
export interface ReleaseCasterResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeLiveTranscodeRules返回参数结构体
 */
export interface DescribeLiveTranscodeRulesResponse {
  /**
   * 转码规则列表。
   */
  Rules?: Array<RuleInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateCasterPvw请求参数结构体
 */
export interface CreateCasterPvwRequest {
  /**
   * 导播台预监展示信息参数
   */
  PvwDisplayInfo: CasterDisplayInfo
  /**
   * 导播台ID。
   */
  CasterId: number
}

/**
 * AddCasterLayoutInfo返回参数结构体
 */
export interface AddCasterLayoutInfoResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteLivePullStreamTask返回参数结构体
 */
export interface DeleteLivePullStreamTaskResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeStreamPushInfoList请求参数结构体
 */
export interface DescribeStreamPushInfoListRequest {
  /**
   * 流名称。
   */
  StreamName: string
  /**
   * 起始时间点，
使用UTC格式时间，
例如：2019-01-08T10:00:00Z。
注意：北京时间值为 UTC 时间值 + 8 小时，格式按照 ISO 8601 标准表示，详见 [ISO 日期格式说明](https://cloud.tencent.com/document/product/267/38543#:~:text=I-,ISO,-%E6%97%A5%E6%9C%9F%E6%A0%BC%E5%BC%8F)。
   */
  StartTime: string
  /**
   * 结束时间点，
使用UTC格式时间，
例如：2019-01-08T10:00:00Z。
注意：北京时间值为 UTC 时间值 + 8 小时，格式按照 ISO 8601 标准表示，详见 [ISO 日期格式说明](https://cloud.tencent.com/document/product/267/38543#:~:text=I-,ISO,-%E6%97%A5%E6%9C%9F%E6%A0%BC%E5%BC%8F)。
支持查询最近7天数据，建议查询时间跨度在3小时之内。
   */
  EndTime: string
  /**
   * 推流域名。
   */
  PushDomain?: string
  /**
   * 推流路径，与推流和播放地址中的AppName保持一致，默认为 live。
   */
  AppName?: string
}

/**
 * ResumeLiveStream返回参数结构体
 */
export interface ResumeLiveStreamResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeletePullStreamConfig请求参数结构体
 */
export interface DeletePullStreamConfigRequest {
  /**
   * 配置 ID。
1. 在添加拉流配置接口 [CreatePullStreamConfig](/document/api/267/30159) 调用返回值中获取配置 ID。
2. 可以从接口 [DescribePullStreamConfigs](/document/api/267/30158) 中查询已创建过的拉流配置列表。
   */
  ConfigId: string
}

/**
 * ModifyCaster返回参数结构体
 */
export interface ModifyCasterResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeLiveWatermarks返回参数结构体
 */
export interface DescribeLiveWatermarksResponse {
  /**
   * 水印总个数。
   */
  TotalNum?: number
  /**
   * 水印信息列表。
   */
  WatermarkList?: Array<WatermarkInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreatePullStreamConfig返回参数结构体
 */
export interface CreatePullStreamConfigResponse {
  /**
   * 配置成功后的 ID。
   */
  ConfigId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyLivePadTemplate返回参数结构体
 */
export interface ModifyLivePadTemplateResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeTopClientIpSumInfoList请求参数结构体
 */
export interface DescribeTopClientIpSumInfoListRequest {
  /**
   * 起始时间点，
使用UTC格式时间，
例如：2019-01-08T10:00:00Z。
注意：北京时间值为 UTC 时间值 + 8 小时，格式按照 ISO 8601 标准表示，详见 [ISO 日期格式说明](https://cloud.tencent.com/document/product/267/38543#:~:text=I-,ISO,-%E6%97%A5%E6%9C%9F%E6%A0%BC%E5%BC%8F)。
   */
  StartTime: string
  /**
   * 结束时间点，
使用UTC格式时间，
例如：2019-01-08T10:00:00Z。
注意：北京时间值为 UTC 时间值 + 8 小时，格式按照 ISO 8601 标准表示，详见 [ISO 日期格式说明](https://cloud.tencent.com/document/product/267/38543#:~:text=I-,ISO,-%E6%97%A5%E6%9C%9F%E6%A0%BC%E5%BC%8F)。
时间跨度在[0,4小时]，支持最近1天数据查询。
   */
  EndTime: string
  /**
   * 播放域名，默认为不填，表示求总体数据。
   */
  PlayDomains?: Array<string>
  /**
   * 页号，范围是[1,1000]，默认值是1。
   */
  PageNum?: number
  /**
   * 每页个数，范围是[1,1000]，默认值是20。
   */
  PageSize?: number
  /**
   * 排序指标，可选值包括TotalRequest（默认值），FailedRequest,TotalFlux。
   */
  OrderParam?: string
  /**
   * 地域，可选值：Mainland，Oversea，China，Foreign，Global（默认值）；如果为空，查询总的数据；如果为“Mainland”，查询中国大陆的数据；如果为“Oversea”，则查询中国大陆以外的数据；如果为China，查询中国的数据（包括港澳台）；如果为Foreign，查询国外的数据（不包括港澳台）。
   */
  MainlandOrOversea?: string
  /**
   * 输出字段使用的语言，可选值：Chinese（默认值），English；目前国家，省份和运营商支持多语言。
   */
  OutLanguage?: string
}

/**
 * DescribeCallbackRecordsList返回参数结构体
 */
export interface DescribeCallbackRecordsListResponse {
  /**
   * 回调事件列表。
   */
  DataInfoList?: Array<CallbackEventInfo>
  /**
   * 页码。
   */
  PageNum?: number
  /**
   * 每页条数。
   */
  PageSize?: number
  /**
   * 总条数。
   */
  TotalNum?: number
  /**
   * 总页数。
   */
  TotalPage?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteLiveWatermark请求参数结构体
 */
export interface DeleteLiveWatermarkRequest {
  /**
   * 水印 ID。
在添加水印接口 [AddLiveWatermark](/document/product/267/30154) 调用返回值中获取水印 ID。
或DescribeLiveWatermarks接口返回的水印ID。
   */
  WatermarkId: number
}

/**
 * UpdateLiveWatermark请求参数结构体
 */
export interface UpdateLiveWatermarkRequest {
  /**
   * 水印 ID。
在添加水印接口 [AddLiveWatermark](/document/product/267/30154) 调用返回值中获取水印 ID。
   */
  WatermarkId: number
  /**
   * 水印图片 URL。
URL中禁止包含的字符：
 ;(){}$>`#"\'|
   */
  PictureUrl: string
  /**
   * 显示位置，X轴偏移，单位是百分比，默认 0。
   */
  XPosition: number
  /**
   * 显示位置，Y轴偏移，单位是百分比，默认 0。
   */
  YPosition: number
  /**
   * 水印名称。
最长30字节。
   */
  WatermarkName?: string
  /**
   * 水印宽度，占直播原始画面宽度百分比，建议高宽只设置一项，另外一项会自适应缩放，避免变形。默认原始宽度。
   */
  Width?: number
  /**
   * 水印高度，占直播原始画面宽度百分比，建议高宽只设置一项，另外一项会自适应缩放，避免变形。默认原始高度。
   */
  Height?: number
  /**
   * 背景水印宽度。默认宽度1920。
   */
  BackgroundWidth?: number
  /**
   * 背景水印高度。默认高度1080。
   */
  BackgroundHeight?: number
}

/**
 * DescribePlayErrorCodeDetailInfoList返回参数结构体
 */
export interface DescribePlayErrorCodeDetailInfoListResponse {
  /**
   * 统计信息列表。
   */
  HttpCodeList?: Array<HttpCodeInfo>
  /**
   * 统计类型。
   */
  StatType?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 转码模板信息。
 */
export interface TemplateInfo {
  /**
   * 视频编码：h264/h265/origin，默认h264。

origin: 保持原始编码格式
   */
  Vcodec?: string
  /**
   * 视频码率。范围：0kbps - 8000kbps。
0为保持原始码率。
注: 转码模板有码率唯一要求，最终保存的码率可能与输入码率有所差别。
   */
  VideoBitrate?: number
  /**
   * 音频编码：aac，默认aac。
注意：当前该参数未生效，待后续支持！
   */
  Acodec?: string
  /**
   * 音频码率。取值范围：0kbps - 500kbps。
默认0。
   */
  AudioBitrate?: number
  /**
   * 宽，默认0。
范围[0-3000]
数值必须是2的倍数，0是原始宽度
   */
  Width?: number
  /**
   * 高，默认0。
范围[0-3000]
数值必须是2的倍数，0是原始宽度
   */
  Height?: number
  /**
   * 帧率，默认0。
范围0-60fps
   */
  Fps?: number
  /**
   * 关键帧间隔，单位：秒。
默认原始的间隔
范围2-6
   */
  Gop?: number
  /**
   * 旋转角度，默认0。
可取值：0，90，180，270
   */
  Rotate?: number
  /**
   * 编码质量：
baseline/main/high。默认baseline
   */
  Profile?: string
  /**
   * 当设置的码率>原始码率时，是否以原始码率为准。
0：否， 1：是
默认 0。
   */
  BitrateToOrig?: number
  /**
   * 当设置的高度>原始高度时，是否以原始高度为准。
0：否， 1：是
默认 0。
   */
  HeightToOrig?: number
  /**
   * 当设置的帧率>原始帧率时，是否以原始帧率为准。
0：否， 1：是
默认 0。
   */
  FpsToOrig?: number
  /**
   * 是否保留视频。0：否，1：是。
   */
  NeedVideo?: number
  /**
   * 是否保留音频。0：否，1：是。
   */
  NeedAudio?: number
  /**
   * 模板 ID。
   */
  TemplateId?: number
  /**
   * 模板名称。
   */
  TemplateName?: string
  /**
   * 模板描述。
   */
  Description?: string
  /**
   * 是否是极速高清模板，0：否，1：是。默认0。
   */
  AiTransCode?: number
  /**
   * 极速高清视频码率压缩比。
极速高清目标码率=VideoBitrate * (1-AdaptBitratePercent)

取值范围：0.0到0.5
   */
  AdaptBitratePercent?: number
  /**
   * 是否以短边作为高度，0：否，1：是。默认0。
注意：此字段可能返回 null，表示取不到有效值。
   */
  ShortEdgeAsHeight?: number
  /**
   * DRM 加密类型，可选值：fairplay、normalaes、widevine。
注意：此字段可能返回 null，表示取不到有效值。
   */
  DRMType?: string
  /**
   * DRM 加密项，多个用|分割，可选值：AUDIO、SD、HD、UHD1、UHD2，后四个为一组，同组中的内容只能选一个。
注意：此字段可能返回 null，表示取不到有效值。
   */
  DRMTracks?: string
}

/**
 * DescribeLiveStreamPushInfoList返回参数结构体
 */
export interface DescribeLiveStreamPushInfoListResponse {
  /**
   * 直播流的统计信息列表。
   */
  DataInfoList?: Array<PushDataInfo>
  /**
   * 所有在线流的总数量。
   */
  TotalNum?: number
  /**
   * 总页数。
   */
  TotalPage?: number
  /**
   * 当前数据所在页码。
   */
  PageNum?: number
  /**
   * 每页的在线流的个数。
   */
  PageSize?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CancelCommonMixStream请求参数结构体
 */
export interface CancelCommonMixStreamRequest {
  /**
   * 混流会话（申请混流开始到取消混流结束）标识 ID。
该值与CreateCommonMixStream中的MixStreamSessionId保持一致。
   */
  MixStreamSessionId: string
}

/**
 * 直播时移写入量数据。
 */
export interface TimeShiftWriteSizeData {
  /**
   * 区域。
   */
  Area: string
  /**
   * 时间，格式为：yyyy-mm-ddTHH:MM:SSZ。
   */
  Time: string
  /**
   * 写入量（单位：字节）
   */
  WriteSize: number
  /**
   * 域名。
   */
  Domain: string
  /**
   * 时移天数。
   */
  StorageDays: number
}

/**
 * SwitchBackupStream请求参数结构体
 */
export interface SwitchBackupStreamRequest {
  /**
   * 推流域名。
   */
  PushDomainName: string
  /**
   * 应用名称。
   */
  AppName: string
  /**
   * 流名称。
   */
  StreamName: string
  /**
   * 查询接口获取到该流所有在推的上行 Sequence。指定要切到的目标上行 Sequence。
   */
  UpstreamSequence: string
}

/**
 * DeleteLiveStreamMonitor请求参数结构体
 */
export interface DeleteLiveStreamMonitorRequest {
  /**
   * 监播任务ID
   */
  MonitorId: string
}

/**
 * DescribeLiveDelayInfoList返回参数结构体
 */
export interface DescribeLiveDelayInfoListResponse {
  /**
   * 延播信息列表。
   */
  DelayInfoList?: Array<DelayInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 客户端ip播放汇总信息。
 */
export interface ClientIpPlaySumInfo {
  /**
   * 客户端 IP，点分型。
   */
  ClientIp: string
  /**
   * 客户端所在省份。
   */
  Province: string
  /**
   * 总流量。
   */
  TotalFlux: number
  /**
   * 总请求数。
   */
  TotalRequest: number
  /**
   * 总失败请求数。
   */
  TotalFailedRequest: number
  /**
   * 客户端所在国家。
   */
  CountryArea: string
}

/**
 * CreateLiveSnapshotTemplate返回参数结构体
 */
export interface CreateLiveSnapshotTemplateResponse {
  /**
   * 模板Id。
   */
  TemplateId?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyCasterMarkPicInfo请求参数结构体
 */
export interface ModifyCasterMarkPicInfoRequest {
  /**
   * 导播台ID。
   */
  CasterId: number
  /**
   * 新的水印信息。
   */
  MarkPicInfo: CasterMarkPicInfo
}

/**
 * DescribeProIspPlaySumInfoList请求参数结构体
 */
export interface DescribeProIspPlaySumInfoListRequest {
  /**
   * 起始时间，
使用UTC格式时间，
例如：2019-01-08T10:00:00Z。
注意：北京时间值为 UTC 时间值 + 8 小时，格式按照 ISO 8601 标准表示，详见 [ISO 日期格式说明](https://cloud.tencent.com/document/product/267/38543#:~:text=I-,ISO,-%E6%97%A5%E6%9C%9F%E6%A0%BC%E5%BC%8F)。
   */
  StartTime: string
  /**
   * 结束时间，
使用UTC格式时间，
例如：2019-01-08T10:00:00Z。
注意：北京时间值为 UTC 时间值 + 8 小时，格式按照 ISO 8601 标准表示，详见 [ISO 日期格式说明](https://cloud.tencent.com/document/product/267/38543#:~:text=I-,ISO,-%E6%97%A5%E6%9C%9F%E6%A0%BC%E5%BC%8F)。
注：EndTime 和 StartTime 只支持最近1天的数据查询。
   */
  EndTime: string
  /**
   * 统计的类型，可选值：”Province”(省份)，”Isp”(运营商)，“CountryOrArea”(国家或地区)。
   */
  StatType: string
  /**
   * 播放域名列表，不填则为全部。
   */
  PlayDomains?: Array<string>
  /**
   * 页号，范围是[1,1000]，默认值是1。
   */
  PageNum?: number
  /**
   * 每页个数，范围是[1,1000]，默认值是20。
   */
  PageSize?: number
  /**
   * 地域，可选值：Mainland，Oversea，China，Foreign，Global（默认值）；如果为空，查询总的数据；如果为“Mainland”，查询中国大陆的数据；如果为“Oversea”，则查询中国大陆以外的数据；如果为China，查询中国的数据（包括港澳台）；如果为Foreign，查询国外的数据（不包括港澳台）。
   */
  MainlandOrOversea?: string
  /**
   * 输出字段使用的语言，可选值：Chinese（默认值），English；目前国家，省份和运营商支持多语言。
   */
  OutLanguage?: string
}

/**
 * 转码总量数据
 */
export interface TranscodeTotalInfo {
  /**
   * 时间点，
使用UTC格式时间，
例如：2019-01-08T10:00:00Z。
注意：北京时间值为 UTC 时间值 + 8 小时，格式按照 ISO 8601 标准表示，详见 [ISO 日期格式说明](https://cloud.tencent.com/document/product/266/11732#I)。
   */
  Time: string
  /**
   * 转码时长，单位：分钟。
   */
  Duration: number
  /**
   * 编码方式，带模块，
示例：
liveprocessor_H264 =》直播转码-H264，
liveprocessor_H265 =》 直播转码-H265，
topspeed_H264 =》极速高清-H264，
topspeed_H265 =》极速高清-H265。
   */
  ModuleCodec: string
  /**
   * 分辨率，
示例：540*480。
   */
  Resolution: string
}

/**
 * UnBindLiveDomainCert返回参数结构体
 */
export interface UnBindLiveDomainCertResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateLiveRecord请求参数结构体
 */
export interface CreateLiveRecordRequest {
  /**
   * 流名称。
   */
  StreamName: string
  /**
   * 推流路径，与推流和播放地址中的 AppName保持一致，默认为 live。
   */
  AppName?: string
  /**
   * 推流域名。多域名推流必须设置。
   */
  DomainName?: string
  /**
   * 录制开始时间。中国标准时间，需要 URLEncode(rfc3986)。如 2017-01-01 10:10:01，编码为：2017-01-01+10%3a10%3a01。
定时录制模式，必须设置该字段；实时视频录制模式，忽略该字段。
   */
  StartTime?: string
  /**
   * 录制结束时间。中国标准时间，需要 URLEncode(rfc3986)。如 2017-01-01 10:30:01，编码为：2017-01-01+10%3a30%3a01。
定时录制模式，必须设置该字段；实时录制模式，为可选字段。如果通过Highlight参数，设置录制为实时视频录制模式，其设置的结束时间不应超过当前时间+30分钟，如果设置的结束时间超过当前时间+30分钟或者小于当前时间或者不设置该参数，则实际结束时间为当前时间+30分钟。
   */
  EndTime?: string
  /**
   * 录制类型。
“video” : 音视频录制【默认】。
“audio” : 纯音频录制。
在定时录制模式或实时视频录制模式下，该参数均有效，不区分大小写。
   */
  RecordType?: string
  /**
   * 录制文件格式。其值为：
“flv”【默认】,“hls”,”mp4”,“aac”,”mp3”。
在定时录制模式或实时视频录制模式下，该参数均有效，不区分大小写。
   */
  FileFormat?: string
  /**
   * 开启实时视频录制模式标志。
0：不开启实时视频录制模式，即定时录制模式【默认】。见[示例一](#.E7.A4.BA.E4.BE.8B1-.E5.88.9B.E5.BB.BA.E5.AE.9A.E6.97.B6.E5.BD.95.E5.88.B6.E4.BB.BB.E5.8A.A1)。
1：开启实时视频录制模式。见[示例二](#.E7.A4.BA.E4.BE.8B2-.E5.88.9B.E5.BB.BA.E5.AE.9E.E6.97.B6.E5.BD.95.E5.88.B6.E4.BB.BB.E5.8A.A1)。
   */
  Highlight?: number
  /**
   * 开启 A+B=C混流C流录制标志。
0：不开启 A+B=C混流C流录制【默认】。
1：开启 A+B=C混流C流录制。
在定时录制模式或实时视频录制模式下，该参数均有效。
   */
  MixStream?: number
  /**
   * 录制流参数。当前支持以下参数：
record_interval - 录制分片时长，单位 秒，1800 - 7200。
storage_time - 录制文件存储时长，单位 秒。
eg. record_interval=3600&storage_time=2592000。
注：参数需要url encode。
在定时录制模式或实时视频录制模式下，该参数均有效。
   */
  StreamParam?: string
}

/**
 * 查询当前正在推流的信息
 */
export interface StreamOnlineInfo {
  /**
   * 流名称。
   */
  StreamName: string
  /**
   * 推流时间列表
   */
  PublishTimeList: Array<PublishTime>
  /**
   * 应用名称。
   */
  AppName: string
  /**
   * 推流域名。
   */
  DomainName: string
  /**
   * 流是否推送到延播。
0 - 无延播，
1 - 有延播。
注意：此字段可能返回 null，表示取不到有效值。
   */
  PushToDelay?: number
}

/**
 * 每个域名的统计信息。
 */
export interface DomainDetailInfo {
  /**
   * 国内还是国外:
Mainland: 表示国内数据。
Oversea: 表示国外数据。
   */
  MainlandOrOversea: string
  /**
   * 带宽，单位: Mbps。
   */
  Bandwidth: number
  /**
   * 流量，单位: MB。
   */
  Flux: number
  /**
   * 人数。
   */
  Online: number
  /**
   * 请求数。
   */
  Request: number
}

/**
 * DeleteLiveRecord请求参数结构体
 */
export interface DeleteLiveRecordRequest {
  /**
   * 流名称。
   */
  StreamName: string
  /**
   * 任务ID，由CreateLiveRecord接口返回。
   */
  TaskId: number
}

/**
 * StopLiveRecord请求参数结构体
 */
export interface StopLiveRecordRequest {
  /**
   * 流名称。
   */
  StreamName: string
  /**
   * 任务ID，由CreateLiveRecord接口返回。
   */
  TaskId: number
}

/**
 * 导播台布局详细参数。
 */
export interface CasterLayoutParam {
  /**
   * 布局层ID。
在画面最终渲染时，将按ID从小到大的顺序，由下至上渲染。
   */
  LayerId: number
  /**
   * 布局层宽度。
当该值为大于1的整数值时，单位为像素，允许范围[1,1920]。
当该值为小于1大于0的小数时，单位为百分比，表示该层在最终画面上所占的比例值。
   */
  LayerWidth: number
  /**
   * 布局层高度.
当该值为大于1的整数值时，单位为像素，允许范围[1,1920]。
当该值为小于1大于0的小数时，单位为百分比，表示该层在最终画面上所占的比例值。
   */
  LayerHeight: number
  /**
   * 布局层位置x坐标。
当该值为大于1的整数值时，单位为像素，允许范围[1,1920]。
当该值为小于1大于0的小数时，单位为百分比，表示该层在最终画面上x坐标所占的比例值。
   */
  LayerLocationX: number
  /**
   * 布局层位置Y坐标。
当该值为大于1的整数值时，单位为像素，允许范围[1,1920]。
当该值为小于1大于0的小数时，单位为百分比，表示该层在最终画面Y坐标上所占的比例值。
   */
  LayerLocationY: number
  /**
   * 是否启用抠图。
注意：此字段可能返回 null，表示取不到有效值。
   */
  UsePortraitSegment?: boolean
}

/**
 * DeleteLiveCallbackTemplate返回参数结构体
 */
export interface DeleteLiveCallbackTemplateResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 批量操作域名相关接口，若其中个别域名操作失败将会跳过，相应的域名错误信息将统一汇总在此类型中
 */
export interface BatchDomainOperateErrors {
  /**
   * 操作失败的域名。
   */
  DomainName: string
  /**
   * API3.0错误码。
   */
  Code: string
  /**
   * API3.0错误信息。
   */
  Message: string
}

/**
 * CreateLivePadTemplate请求参数结构体
 */
export interface CreateLivePadTemplateRequest {
  /**
   * 模板名称。
长度上限：255字节。
仅支持中文、英文、数字、_、-。
   */
  TemplateName: string
  /**
   * 垫片内容。
   */
  Url: string
  /**
   * 描述信息。
长度上限：1024字节。
仅支持中文、英文、数字、_、-。
   */
  Description?: string
  /**
   * 断流等待时间。
取值范围：0-30000。
单位：ms。
   */
  WaitDuration?: number
  /**
   * 最大垫片时长。
取值范围：0 - 正无穷。
单位：ms。
   */
  MaxDuration?: number
  /**
   * 垫片内容类型：
1：图片，2：视频。
默认值：1。
   */
  Type?: number
}

/**
 * CopyCaster请求参数结构体
 */
export interface CopyCasterRequest {
  /**
   * 源导播台的ID
   */
  CasterId: number
  /**
   * 复制产生的新导播台名称
   */
  CasterName?: string
  /**
   * 复制产生的导播台推送到云直播的流id
注意：该流id不能与云直播中的流id重复
   */
  OutputStreamId?: string
}

/**
 * DescribeLivePullStreamTasks返回参数结构体
 */
export interface DescribeLivePullStreamTasksResponse {
  /**
   * 直播拉流任务信息列表。
   */
  TaskInfos?: Array<PullStreamTaskInfo>
  /**
   * 分页的页码。
   */
  PageNum?: number
  /**
   * 每页大小。
   */
  PageSize?: number
  /**
   * 符合条件的总个数。
   */
  TotalNum?: number
  /**
   * 总页数。
   */
  TotalPage?: number
  /**
   * 限制可创建的最大任务数。
   */
  LimitTaskNum?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateLiveCallbackRule返回参数结构体
 */
export interface CreateLiveCallbackRuleResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeAreaBillBandwidthAndFluxList请求参数结构体
 */
export interface DescribeAreaBillBandwidthAndFluxListRequest {
  /**
   * 起始时间点，格式为yyyy-mm-dd HH:MM:SS。
   */
  StartTime: string
  /**
   * 结束时间点，格式为yyyy-mm-dd HH:MM:SS，起始和结束时间跨度不支持超过1天。
   */
  EndTime: string
  /**
   * 直播播放域名，若不填，表示总体数据。
   */
  PlayDomains?: Array<string>
}

/**
 * ModifyCasterOutputInfo返回参数结构体
 */
export interface ModifyCasterOutputInfoResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyLiveDomainReferer返回参数结构体
 */
export interface ModifyLiveDomainRefererResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeMonitorReport返回参数结构体
 */
export interface DescribeMonitorReportResponse {
  /**
   * 媒体处理结果信息。
   */
  MPSResult?: MPSResult
  /**
   * 媒体诊断结果信息。
   */
  DiagnoseResult?: DiagnoseResult
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeLiveStreamOnlineList请求参数结构体
 */
export interface DescribeLiveStreamOnlineListRequest {
  /**
   * 推流域名。多域名用户需要填写 DomainName。
   */
  DomainName?: string
  /**
   * 推流路径，与推流和播放地址中的 AppName 保持一致，默认为 live。多路径用户需要填写 AppName。
   */
  AppName?: string
  /**
   * 取得第几页，默认1。
   */
  PageNum?: number
  /**
   * 每页大小，最大100。 
取值：10~100之间的任意整数。
默认值：10。
   */
  PageSize?: number
  /**
   * 流名称，用于精确查询。
   */
  StreamName?: string
}

/**
 * DescribeRecordTask请求参数结构体
 */
export interface DescribeRecordTaskRequest {
  /**
   * 查询任务开始时间，Unix 时间戳。设置时间不早于当前时间之前90天的时间，且查询时间跨度不超过一周。
   */
  StartTime: number
  /**
   * 查询任务结束时间，Unix 时间戳。EndTime 必须大于 StartTime，设置时间不早于当前时间之前90天的时间，且查询时间跨度不超过一周。（注意：任务开始结束时间必须在查询时间范围内）。
   */
  EndTime: number
  /**
   * 流名称。
   */
  StreamName?: string
  /**
   * 推流域名。
   */
  DomainName?: string
  /**
   * 推流路径。
   */
  AppName?: string
  /**
   * 翻页标识，分批拉取时使用：当单次请求无法拉取所有数据，接口将会返回 ScrollToken，下一次请求携带该 Token，将会从下一条记录开始获取。
   */
  ScrollToken?: string
}

/**
 * DescribeLiveDomainCertBindings, DescribeLiveDomainCertBindingsGray接口返回的域名证书信息
 */
export interface LiveDomainCertBindings {
  /**
   * 域名。
   */
  DomainName?: string
  /**
   * 证书备注。与CertName同义。
   */
  CertificateAlias?: string
  /**
   * 证书类型。
0：自有证书
1：腾讯云ssl托管证书
   */
  CertType?: number
  /**
   * https状态。
1：已开启。
0：已关闭。
   */
  Status?: number
  /**
   * 证书过期时间。
注：此字段为北京时间（UTC+8时区）。
   */
  CertExpireTime?: string
  /**
   * 证书Id。
   */
  CertId?: number
  /**
   * 腾讯云ssl的证书Id。
   */
  CloudCertId?: string
  /**
   * 规则最后更新时间。
注：此字段为北京时间（UTC+8时区）。
注意：此字段可能返回 null，表示取不到有效值。
   */
  UpdateTime?: string
}

/**
 * P2P流信息。
 */
export interface XP2PDetailInfo {
  /**
   * CDN流量。
   */
  CdnBytes?: number
  /**
   * P2P流量。
   */
  P2pBytes?: number
  /**
   * 卡播人数。
   */
  StuckPeople?: number
  /**
   * 卡播次数。
   */
  StuckTimes?: number
  /**
   * 在线人数。
   */
  OnlinePeople?: number
  /**
   * 起播请求次数
   */
  Request?: number
  /**
   * 起播成功次数
   */
  RequestSuccess?: number
  /**
   * 时间，一分钟粒度，utc格式：yyyy-mm-ddTHH:MM:SSZ，参考https://cloud.tencent.com/document/product/266/11732#I。。
   */
  Time?: string
  /**
   * 类型，分live和vod两种。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Type?: string
  /**
   * 流ID。
注意：此字段可能返回 null，表示取不到有效值。
   */
  StreamName?: string
  /**
   * AppId。
注意：此字段可能返回 null，表示取不到有效值。
   */
  AppId?: string
}

/**
 * DescribeCasterLayoutInfos返回参数结构体
 */
export interface DescribeCasterLayoutInfosResponse {
  /**
   * 导播台的布局列表。
   */
  LayoutInfos?: Array<CasterLayoutInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyLiveCallbackTemplate返回参数结构体
 */
export interface ModifyLiveCallbackTemplateResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeLiveCallbackTemplates返回参数结构体
 */
export interface DescribeLiveCallbackTemplatesResponse {
  /**
   * 模板信息列表。
   */
  Templates?: Array<CallBackTemplateInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeLivePushAuthKey返回参数结构体
 */
export interface DescribeLivePushAuthKeyResponse {
  /**
   * 推流鉴权key信息。
   */
  PushAuthKeyInfo?: PushAuthKeyInfo
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeLivePullStreamTaskStatus请求参数结构体
 */
export interface DescribeLivePullStreamTaskStatusRequest {
  /**
   * 任务 ID。
   */
  TaskId: string
}

/**
 * RestartLivePullStreamTask请求参数结构体
 */
export interface RestartLivePullStreamTaskRequest {
  /**
   * 任务 Id。
   */
  TaskId: string
  /**
   * 操作人备注名称。
   */
  Operator: string
}

/**
 * 导播台简略信息
 */
export interface CasterBriefInfo {
  /**
   * 导播台ID
   */
  CasterId?: number
  /**
   * 导播台名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  CasterName?: string
  /**
   * 导播台的描述
注意：此字段可能返回 null，表示取不到有效值。
   */
  Description?: string
  /**
   * 开始计费时间，值为unix时间戳
注意：此字段可能返回 null，表示取不到有效值。
   */
  StartBillingTime?: number
  /**
   * 结束计费时间，值为unix时间戳
注意：此字段可能返回 null，表示取不到有效值。
   */
  StopBillingTime?: number
  /**
   * 创建时间，值为unix时间戳
注意：此字段可能返回 null，表示取不到有效值。
   */
  CreateTime?: number
  /**
   * 导播台状态
0：停止状态，无预监，无主监
1：无预监，有主监
2：有预监，无主监
3：有预监，有主监
注意：此字段可能返回 null，表示取不到有效值。
   */
  Status?: number
  /**
   * 导播台的过期时间，值为-1或unix时间戳。
当值为-1时，代表永不过期。
当值为特定unix时间戳时，代表过期时间为对应的时间，导播台在该时间自动停止。
注意：此字段可能返回 null，表示取不到有效值。
   */
  ExpireTime?: number
  /**
   * 计费字段，该字段暂无作用
注意：此字段可能返回 null，表示取不到有效值。
   */
  FeeType?: number
}

/**
 * DescribeCasterTransitionTypes请求参数结构体
 */
export interface DescribeCasterTransitionTypesRequest {
  /**
   * 导播台ID
   */
  CasterId: number
}

/**
 * 延播信息。
 */
export interface DelayInfo {
  /**
   * 推流域名。
   */
  DomainName: string
  /**
   * 推流路径，与推流和播放地址中的 
 AppName 保持一致，默认为 live。
   */
  AppName: string
  /**
   * 流名称。
   */
  StreamName: string
  /**
   * 延播时间，单位：秒。
   */
  DelayInterval: number
  /**
   * 创建时间，UTC 时间。
注意：UTC时间和北京时间相差8小时。
例如：2019-06-18T12:00:00Z（为北京时间 2019 年 6 月 18 日 20 点 0 分 0 秒）。
   */
  CreateTime: string
  /**
   * 过期时间，UTC 时间。
注意：UTC时间和北京时间相差8小时。
例如：2019-06-18T12:00:00Z（为北京时间 2019 年 6 月 18 日 20 点 0 分 0 秒）。
   */
  ExpireTime: string
  /**
   * 当前状态:
-1：已过期。
1： 生效中。
   */
  Status: number
}

/**
 * ModifyCasterMarkWordInfo返回参数结构体
 */
export interface ModifyCasterMarkWordInfoResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * EnableOptimalSwitching返回参数结构体
 */
export interface EnableOptimalSwitchingResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 时移自适应码率子流信息。
 */
export interface TimeShiftSubStream {
  /**
   * 时移自适应码率子流转码模板ID。
   */
  TransCodeId?: number
}

/**
 * DescribeLiveStreamMonitor请求参数结构体
 */
export interface DescribeLiveStreamMonitorRequest {
  /**
   * 监播任务ID。
   */
  MonitorId: string
}

/**
 * DescribeLiveSnapshotRules请求参数结构体
 */
export type DescribeLiveSnapshotRulesRequest = null

/**
 * DeleteLiveRecordRule返回参数结构体
 */
export interface DeleteLiveRecordRuleResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteLiveRecordRule请求参数结构体
 */
export interface DeleteLiveRecordRuleRequest {
  /**
   * 推流域名。
域名+AppName+StreamName唯一标识单个转码规则，如需删除需要强匹配，例如AppName为空也需要传空字符串进行强匹配。
   */
  DomainName: string
  /**
   * 推流路径，与推流和播放地址中的AppName保持一致，默认为 live。
域名+AppName+StreamName唯一标识单个转码规则，如需删除需要强匹配，例如AppName为空也需要传空字符串进行强匹配。
   */
  AppName?: string
  /**
   * 流名称。
域名+AppName+StreamName唯一标识单个转码规则，如需删除需要强匹配，例如AppName为空也需要传空字符串进行强匹配。
   */
  StreamName?: string
}

/**
 * StopScreenshotTask请求参数结构体
 */
export interface StopScreenshotTaskRequest {
  /**
   * 截图任务ID。
   */
  TaskId: string
}

/**
 * DescribePullTransformPushInfo请求参数结构体
 */
export interface DescribePullTransformPushInfoRequest {
  /**
   * 起始时间点，接口查询支持两种时间格式：
1）YYYY-MM-DDThh:mm:ssZ：UTC时间格式，详见IOS日期格式说明文档: https://cloud.tencent.com/document/product/266/11732#I
2）YYYY-MM-DD hh:mm:ss：使用此格式时，默认代表北京时间。
   */
  StartTime: string
  /**
   * 结束时间点，接口查询支持两种时间格式：
1）YYYY-MM-DDThh:mm:ssZ：UTC时间格式，详见IOS日期格式说明文档: https://cloud.tencent.com/document/product/266/11732#I
2）YYYY-MM-DD hh:mm:ss：使用此格式时，默认代表北京时间。
支持最近三年的查询，查询开始和结束时间跨度不支持超过31天。
   */
  EndTime: string
  /**
   * 可选值：
Mainland：查询国内数据，
Oversea：则查询国外数据，
默认：查询国内+国外的数据。
   */
  MainlandOrOversea?: string
}

/**
 * DescribeBillBandwidthAndFluxList请求参数结构体
 */
export interface DescribeBillBandwidthAndFluxListRequest {
  /**
   * 起始时间点，接口查询支持两种时间格式：
1）YYYY-MM-DDThh:mm:ssZ：UTC时间格式，详见IOS日期格式说明文档: https://cloud.tencent.com/document/product/266/11732#I
2）YYYY-MM-DD hh:mm:ss：使用此格式时，默认代表北京时间。
   */
  StartTime: string
  /**
   * 结束时间点，接口查询支持两种时间格式：
1）YYYY-MM-DDThh:mm:ssZ：UTC时间格式，详见IOS日期格式说明文档: https://cloud.tencent.com/document/product/266/11732#I
2）YYYY-MM-DD hh:mm:ss：使用此格式时，默认代表北京时间。
起始和结束时间跨度不支持超过31天。支持最近3年的数据查询
   */
  EndTime: string
  /**
   * 直播播放域名，若不填，表示总体数据。
   */
  PlayDomains?: Array<string>
  /**
   * 可选值：
Mainland：查询国内数据，
Oversea：则查询国外数据，
默认：查询国内+国外的数据。
注：LEB（快直播）只支持国内+国外数据查询。
   */
  MainlandOrOversea?: string
  /**
   * 数据粒度，支持如下粒度：
5：5分钟粒度，（跨度不支持超过1天），
60：1小时粒度（跨度不支持超过一个月），
1440：天粒度（跨度不支持超过一个月）。
默认值：5。
   */
  Granularity?: number
  /**
   * 服务名称，可选值包括LVB(标准直播)，LEB(快直播)，不填则查LVB+LEB总值。
   */
  ServiceName?: string
  /**
   * 大区，映射表如下：
China Mainland 中国大陆
Asia Pacific I 亚太一区
Asia Pacific II 亚太二区
Asia Pacific III 亚太三区
Europe 欧洲
North America 北美
South America 南美
Middle East 中东
Africa 非洲。
   */
  RegionNames?: Array<string>
}

/**
 * AddCasterLayoutInfo请求参数结构体
 */
export interface AddCasterLayoutInfoRequest {
  /**
   * 导播台ID
   */
  CasterId: number
  /**
   * 导播台布局参数信息。
   */
  LayoutInfo: CasterLayoutInfo
}

/**
 * flv格式特殊配置
 */
export interface FlvSpecialParam {
  /**
   * 是否开启边录边传，仅flv格式有效。
   */
  UploadInRecording?: boolean
}

/**
 * ModifyLiveTranscodeTemplate请求参数结构体
 */
export interface ModifyLiveTranscodeTemplateRequest {
  /**
   * 模板 Id。
   */
  TemplateId: number
  /**
   * 视频编码：h264/h265/origin，默认origin。

origin: 保持原始编码格式
   */
  Vcodec?: string
  /**
   * 音频编码：aac，默认aac。
注意：当前该参数未生效，待后续支持！
   */
  Acodec?: string
  /**
   * 音频码率，默认0。
范围：0-500。
   */
  AudioBitrate?: number
  /**
   * 模板描述。
   */
  Description?: string
  /**
   * 视频码率。范围：0kbps - 8000kbps。
0为保持原始码率。
注: 转码模板有码率唯一要求，最终保存的码率可能与输入码率有所差别。
   */
  VideoBitrate?: number
  /**
   * 宽。0-3000。
数值必须是2的倍数，0是原始宽度
   */
  Width?: number
  /**
   * 是否保留视频，0：否，1：是。默认1。
   */
  NeedVideo?: number
  /**
   * 是否保留音频，0：否，1：是。默认1。
   */
  NeedAudio?: number
  /**
   * 高。0-3000。
数值必须是2的倍数，0是原始宽度
   */
  Height?: number
  /**
   * 帧率，默认0。
范围0-60
   */
  Fps?: number
  /**
   * 关键帧间隔，单位：秒。
范围2-6
   */
  Gop?: number
  /**
   * 旋转角度，默认0。
可取值：0，90，180，270
   */
  Rotate?: number
  /**
   * 编码质量：
baseline/main/high。
   */
  Profile?: string
  /**
   * 当设置的码率>原始码率时，是否以原始码率为准。
0：否， 1：是
默认 0。
   */
  BitrateToOrig?: number
  /**
   * 当设置的高度>原始高度时，是否以原始高度为准。
0：否， 1：是
默认 0。
   */
  HeightToOrig?: number
  /**
   * 当设置的帧率>原始帧率时，是否以原始帧率为准。
0：否， 1：是
默认 0。
   */
  FpsToOrig?: number
  /**
   * 极速高清视频码率压缩比。
极速高清目标码率=VideoBitrate * (1-AdaptBitratePercent)

取值范围：0.0到0.5
   */
  AdaptBitratePercent?: number
  /**
   * 是否以短边作为高度，0：否，1：是。默认0。
   */
  ShortEdgeAsHeight?: number
  /**
   * DRM 加密类型，可选值：fairplay、normalaes、widevine。
不传递或者为空字符串，清空之前的DRM配置。
   */
  DRMType?: string
  /**
   * DRM 加密项，可选值：AUDIO、SD、HD、UHD1、UHD2，后四个为一组，同组中的内容只能选一个。
不传递或者为空字符串，清空之前的DRM配置。
   */
  DRMTracks?: string
}

/**
 * ModifyCasterLayoutInfo请求参数结构体
 */
export interface ModifyCasterLayoutInfoRequest {
  /**
   * 导播台ID。
   */
  CasterId: number
  /**
   * 导播台布局参数信息。
   */
  LayoutInfo: CasterLayoutInfo
}

/**
 * DescribeLiveCallbackTemplate返回参数结构体
 */
export interface DescribeLiveCallbackTemplateResponse {
  /**
   * 回调模板信息。
   */
  Template?: CallBackTemplateInfo
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateLivePullStreamTask请求参数结构体
 */
export interface CreateLivePullStreamTaskRequest {
  /**
   * 拉流源的类型：
PullLivePushLive -直播，
PullVodPushLive -点播，
PullPicPushLive -图片。
   */
  SourceType: string
  /**
   * 拉流源 url 列表。
SourceType 为直播（PullLivePushLive）只可以填1个，
SourceType 为点播（PullVodPushLive）可以填多个，上限30个。
当前支持的文件格式：flv，mp4，hls。
当前支持的拉流协议：http，https，rtmp，rtmps，rtsp，srt。
注意：
1. 建议优先使用 flv 文件，对于 mp4 未交织好的文件轮播推流易产生卡顿以及因为频繁拉取导致源产生大量源出口带宽成本，可通过点播转码进行重新交织后再轮播，或提前创建任务并开启本地模式。
2. 拒绝内网域名等攻击性拉流地址，如有使用，则做账号封禁处理。
3. 源文件请保持时间戳正常交织递增，避免因源文件异常影响推流及播放。
4. 视频编码格式仅支持: H264, H265。
5. 音频编码格式仅支持: AAC。
6. 点播源请使用小文件，尽量时长保持在1小时内，较大文件打开和续播耗时较久，耗时超过15秒会有无法正常转推风险。
7. 避免使用低频存储的文件，该类文件因低频存储，拉取时容易出现慢速，影响拉转推质量。
   */
  SourceUrls: Array<string>
  /**
   * 推流域名。
将拉取过来的流推到该域名。
注意：如果目标地址为非云直播，且样式不同于云直播，请使用 ToUrl 传入完整推流地址，详细用法请参考 ToUrl 参数说明。
   */
  DomainName: string
  /**
   * 推流路径。
将拉取过来的流推到该路径。
   */
  AppName: string
  /**
   * 推流名称。
将拉取过来的流推到该流名称。
   */
  StreamName: string
  /**
   * 开始时间。
使用 UTC 格式时间，
例如：2019-01-08T10:00:00Z。
注意：北京时间值为 UTC 时间值 + 8 小时。
   */
  StartTime: string
  /**
   * 结束时间，注意：
1. 结束时间必须大于开始时间；
2. 结束时间必须大于当前时间；
3. 结束时间 和 开始时间 间隔必须小于七天。
使用 UTC 格式时间，
例如：2019-01-08T10:00:00Z。
注意：北京时间值为 UTC 时间值 + 8 小时。
   */
  EndTime: string
  /**
   * 任务操作人备注。
   */
  Operator: string
  /**
   * 推流参数。
推流时携带自定义参数。
示例：
bak=1&test=2 。
   */
  PushArgs?: string
  /**
   * 选择需要回调的事件（不填则回调全部）：
TaskStart：任务启动回调，
TaskExit：任务停止回调，
VodSourceFileStart：从点播源文件开始拉流回调，
VodSourceFileFinish：从点播源文件拉流结束回调，
ResetTaskConfig：任务更新回调。

TaskAlarm: 用于告警事件通知，AlarmType 示例:
PullFileUnstable - 文件拉取不稳定，
PushStreamUnstable - 推流不稳定，
PullFileFailed - 文件拉取出错，
PushStreamFailed - 推流出现失败，
FileEndEarly - 文件提前结束。
   */
  CallbackEvents?: Array<string>
  /**
   * 点播拉流转推循环次数。默认：-1。
-1：无限循环，直到任务结束。
0：不循环。
>0：具体循环次数。次数和时间以先结束的为准。
注意：该配置仅对拉流源为点播时生效。
   */
  VodLoopTimes?: string
  /**
   * 点播更新SourceUrls后的播放方式：
ImmediateNewSource：立即播放新的拉流源内容；
ContinueBreakPoint：播放完当前正在播放的点播 url 后再使用新的拉流源播放。（旧拉流源未播放的点播 url 不会再播放）

注意：该配置生效仅对变更前拉流源为点播时生效。
   */
  VodRefreshType?: string
  /**
   * 自定义回调地址。
拉流转推任务相关事件会回调到该地址。
回调事件使用方法请查看：
https://cloud.tencent.com/document/product/267/32744
https://cloud.tencent.com/document/product/267/56208
   */
  CallbackUrl?: string
  /**
   * 其他参数。
示例: ignore_region  用于忽略传入地域, 内部按负载分配。
   */
  ExtraCmd?: string
  /**
   * 自定义任务 ID。
注：
1. 该自定义 ID 为可选参数，如果传入，请确保该账号下传入的 ID 唯一。
2. 该自定义 ID 用于防止重复发起请求时产生重复任务。后面也可以用 SpecifyTaskId 来修改或删除任务。
   */
  SpecifyTaskId?: string
  /**
   * 任务描述，限制 512 字节。
   */
  Comment?: string
  /**
   * 完整目标 URL 地址。
用法注意：如果使用该参数来传完整目标地址，则 DomainName, AppName, StreamName 需要传入空字符串，任务将会使用该 ToUrl 参数指定的目标地址。

使用该方式传入目标地址支持的协议有：
rtmp、rtmps、rtsp、rtp、srt。

注意：签名时间需要超过任务结束时间，避免因签名过期造成任务失败。
   */
  ToUrl?: string
  /**
   * 指定播放文件索引。
注意： 1. 从1开始，不大于SourceUrls中文件个数。
2. 该偏移仅在首次轮播时有效。
3. 提前创建的任务指定的偏移最长有效期为24小时，24小时后未开始的任务偏移失效。
   */
  FileIndex?: number
  /**
   * 指定播放文件偏移。
注意：
1. 单位：秒，配合FileIndex使用。
   */
  OffsetTime?: number
  /**
   * 备源的类型：
PullLivePushLive -直播，
PullVodPushLive -点播。
注意：
1. 仅当主源类型为直播源时，备源才会生效。
2. 主直播源拉流中断时，自动使用备源进行拉流。
3. 如果备源为点播文件时，则每次轮播完点播文件就检查主源是否恢复，如果主源恢复则自动切回到主源，否则继续拉备源。
   */
  BackupSourceType?: string
  /**
   * 备源 URL。
只允许填一个备源 URL
   */
  BackupSourceUrl?: string
  /**
   * 水印信息列表。
注意：
1. 最多支持4个不同位置的水印。
2. 水印图片 URL 请使用合法外网可访问地址。
3. 支持的水印图片格式：png，jpg，gif 等。
   */
  WatermarkList?: Array<PullPushWatermarkInfo>
  /**
   * 点播源是否启用本地推流模式，默认0，不启用。
0 - 不启用。
1 - 启用。
注意：启用本地模式后，会将源列表中的 MP4 文件进行本地下载，优先使用本地已下载文件进行推流，提高点播源推流稳定性。使用本地下载文件推流时，会产生增值费用。
   */
  VodLocalMode?: number
  /**
   * 录制模板 ID。
   */
  RecordTemplateId?: string
  /**
   * 新的目标地址，用于任务同时推两路场景。
   */
  BackupToUrl?: string
  /**
   * 直播转码模板，使用云直播的转码功能进行转码后再转推出去。转码模板需在云直播控制台创建。
   */
  TranscodeTemplateName?: string
}

/**
 * DeleteLiveSnapshotTemplate请求参数结构体
 */
export interface DeleteLiveSnapshotTemplateRequest {
  /**
   * 模板 ID。
1. 在创建截图模板接口 [CreateLiveSnapshotTemplate](/document/product/267/32624) 调用的返回值中获取。
2. 可以从接口 [DescribeLiveSnapshotTemplates](/document/product/267/32619) 中查询已创建的截图模板列表。
   */
  TemplateId: number
}

/**
 * 多个域名信息列表
 */
export interface DomainInfoList {
  /**
   * 域名。
   */
  Domain: string
  /**
   * 明细信息。
   */
  DetailInfoList: Array<DomainDetailInfo>
}

/**
 * CreateScreenshotTask请求参数结构体
 */
export interface CreateScreenshotTaskRequest {
  /**
   * 流名称。
   */
  StreamName: string
  /**
   * 推流域名。
   */
  DomainName: string
  /**
   * 推流路径。
   */
  AppName: string
  /**
   * 截图任务结束时间，Unix时间戳。设置时间必须大于StartTime及当前时间，且小于当前时间+7天。
   */
  EndTime: number
  /**
   * 截图模板ID，CreateLiveSnapshotTemplate 返回值。如果传入错误ID，则不拉起截图。
   */
  TemplateId: number
  /**
   * 截图任务开始时间，Unix时间戳。如果不填表示立即启动截图。EndTime - StartTime不能超过24小时。
   */
  StartTime?: number
  /**
   * 推流类型，默认0。取值：
0-直播推流。
1-合成流，即 A+B=C 类型混流。
   */
  StreamType?: number
  /**
   * 扩展字段，暂无定义。默认为空。
   */
  Extension?: string
}

/**
 * DescribeCaster返回参数结构体
 */
export interface DescribeCasterResponse {
  /**
   * 导播台信息
   */
  CasterInfo?: CasterInfo
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 录制模板信息
 */
export interface RecordTemplateInfo {
  /**
   * 模板 ID。
   */
  TemplateId?: number
  /**
   * 模板名称。
   */
  TemplateName?: string
  /**
   * 描述信息。
   */
  Description?: string
  /**
   * FLV 录制参数。
   */
  FlvParam?: RecordParam
  /**
   * HLS 录制参数。
   */
  HlsParam?: RecordParam
  /**
   * MP4 录制参数。
   */
  Mp4Param?: RecordParam
  /**
   * AAC 录制参数。
   */
  AacParam?: RecordParam
  /**
   * 0：普通直播，
1：慢直播。
   */
  IsDelayLive?: number
  /**
   * HLS 录制定制参数。
   */
  HlsSpecialParam?: HlsSpecialParam
  /**
   * MP3 录制参数。
   */
  Mp3Param?: RecordParam
  /**
   * 是否去除水印。
注意：此字段可能返回 null，表示取不到有效值。
   */
  RemoveWatermark?: boolean
  /**
   * 是否存储至cos
注意：此字段可能返回 null，表示取不到有效值。
   */
  CosStore?: number
  /**
   * FLV 录制定制参数。
注意：此字段可能返回 null，表示取不到有效值。
   */
  FlvSpecialParam?: FlvSpecialParam
}

/**
 * 播放错误码信息
 */
export interface ProIspPlayCodeDataInfo {
  /**
   * 国家或地区。
   */
  CountryAreaName: string
  /**
   * 省份。
   */
  ProvinceName: string
  /**
   * 运营商。
   */
  IspName: string
  /**
   * 错误码为2开头的次数。
   */
  Code2xx: number
  /**
   * 错误码为3开头的次数。
   */
  Code3xx: number
  /**
   * 错误码为4开头的次数。
   */
  Code4xx: number
  /**
   * 错误码为5开头的次数。
   */
  Code5xx: number
}

/**
 * 并发录制路数
 */
export interface ConcurrentRecordStreamNum {
  /**
   * 时间点。
   */
  Time: string
  /**
   * 路数。
   */
  Num: number
}

/**
 * DescribeStreamPlayInfoList返回参数结构体
 */
export interface DescribeStreamPlayInfoListResponse {
  /**
   * 统计信息列表，时间粒度是1分钟。
   */
  DataInfoList?: Array<DayStreamPlayInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateLivePullStreamTask返回参数结构体
 */
export interface CreateLivePullStreamTaskResponse {
  /**
   * 任务 Id 。
   */
  TaskId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyLivePushAuthKey请求参数结构体
 */
export interface ModifyLivePushAuthKeyRequest {
  /**
   * 推流域名。
   */
  DomainName: string
  /**
   * 是否启用，0：关闭，1：启用。
不传表示不修改当前值。
   */
  Enable?: number
  /**
   * 主鉴权key。
不传表示不修改当前值。
   */
  MasterAuthKey?: string
  /**
   * 备鉴权key。
不传表示不修改当前值。
   */
  BackupAuthKey?: string
  /**
   * 有效时间，单位：秒。
   */
  AuthDelta?: number
}

/**
 * DescribeProIspPlaySumInfoList返回参数结构体
 */
export interface DescribeProIspPlaySumInfoListResponse {
  /**
   * 总流量。
   */
  TotalFlux?: number
  /**
   * 总请求数。
   */
  TotalRequest?: number
  /**
   * 统计的类型。
   */
  StatType?: string
  /**
   * 每页的记录数。
   */
  PageSize?: number
  /**
   * 页号。
   */
  PageNum?: number
  /**
   * 总记录数。
   */
  TotalNum?: number
  /**
   * 总页数。
   */
  TotalPage?: number
  /**
   * 省份，运营商，国家或地区汇总数据列表。
   */
  DataInfoList?: Array<ProIspPlaySumInfo>
  /**
   * 下载速度，单位：MB/s，计算方式：总流量/总时长。
   */
  AvgFluxPerSecond?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeLivePlayAuthKey返回参数结构体
 */
export interface DescribeLivePlayAuthKeyResponse {
  /**
   * 播放鉴权key信息。
   */
  PlayAuthKeyInfo?: PlayAuthKeyInfo
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeLiveCallbackTemplates请求参数结构体
 */
export type DescribeLiveCallbackTemplatesRequest = null

/**
 * CreateLivePadRule请求参数结构体
 */
export interface CreateLivePadRuleRequest {
  /**
   * 推流域名。
   */
  DomainName: string
  /**
   * 模板 ID。
   */
  TemplateId: number
  /**
   * 推流路径，与推流和播放地址中的AppName保持一致，默认为 live。
   */
  AppName?: string
  /**
   * 流名称。
注：如果本参数设置为非空字符串，规则将只对此推流起作用。
   */
  StreamName?: string
}

/**
 * DeleteLiveSnapshotRule请求参数结构体
 */
export interface DeleteLiveSnapshotRuleRequest {
  /**
   * 推流域名。
   */
  DomainName: string
  /**
   * 推流路径，与推流和播放地址中的 AppName 保持一致，默认为 live。
   */
  AppName?: string
  /**
   * 流名称。
   */
  StreamName?: string
}

/**
 * CreateLiveTimeShiftRule请求参数结构体
 */
export interface CreateLiveTimeShiftRuleRequest {
  /**
   * 推流域名。
   */
  DomainName: string
  /**
   * 推流路径，与推流和播放地址中的AppName保持一致，默认为 live。
   */
  AppName: string
  /**
   * 流名称。
注：如果本参数设置为非空字符串，规则将只对此推流起作用。
   */
  StreamName: string
  /**
   * 模板 ID。
   */
  TemplateId: number
}

/**
 * StopCasterPvw返回参数结构体
 */
export interface StopCasterPvwResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeLiveDomain请求参数结构体
 */
export interface DescribeLiveDomainRequest {
  /**
   * 域名。
   */
  DomainName: string
}

/**
 * DescribePushBandwidthAndFluxList请求参数结构体
 */
export interface DescribePushBandwidthAndFluxListRequest {
  /**
   * 查询开始时间点，精确到分钟粒度，接口查询支持两种时间格式：
1）YYYY-MM-DDThh:mm:ssZ：UTC时间格式，详见 [ISO 日期格式说明](https://cloud.tencent.com/document/product/267/38543#52)。
2）YYYY-MM-DD hh:mm:ss：使用此格式时，默认代表北京时间。
支持最近两个月的查询，查询开始和结束时间跨度不支持超过31天。
   */
  StartTime: string
  /**
   * 查询结束时间点，精确到分钟粒度，接口查询支持两种时间格式：
1）YYYY-MM-DDThh:mm:ssZ：UTC时间格式，详见 [ISO 日期格式说明](https://cloud.tencent.com/document/product/267/38543#52)。
2）YYYY-MM-DD hh:mm:ss：使用此格式时，默认代表北京时间。
支持最近两个月的查询，查询开始和结束时间跨度不支持超过31天。
   */
  EndTime: string
  /**
   * 域名，可以填多个，若不填，表示总体数据。
   */
  PushDomains?: Array<string>
  /**
   * 可选值：
Mainland：查询中国大陆（境内）数据，
Oversea：则查询国际/港澳台（境外）数据，
不填则默认查询全球地区（境内+境外）的数据。
   */
  MainlandOrOversea?: string
  /**
   * 数据粒度，支持如下粒度：
5：5分钟粒度，（跨度不支持超过1天），
60：1小时粒度（跨度不支持超过一个月），
1440：天粒度（跨度不支持超过一个月）。
默认值：5。
   */
  Granularity?: number
  /**
   * 大区，映射表如下：
China Mainland 中国大陆
Asia Pacific I 亚太一区
Asia Pacific II 亚太二区
Asia Pacific III 亚太三区
Europe 欧洲
North America 北美
South America 南美
Middle East 中东
Africa 非洲。
   */
  RegionNames?: Array<string>
  /**
   * 国家，映射表参照如下文档：
https://cloud.tencent.com/document/product/267/34019。
   */
  CountryNames?: Array<string>
}

/**
 * CreateLiveRecordRule请求参数结构体
 */
export interface CreateLiveRecordRuleRequest {
  /**
   * 推流域名。
   */
  DomainName: string
  /**
   * 模板 ID。
   */
  TemplateId: number
  /**
   * 推流路径，与推流和播放地址中的AppName保持一致，默认为 live。
   */
  AppName?: string
  /**
   * 流名称。
注：如果本参数设置为非空字符串，规则将只对此推流起作用。
   */
  StreamName?: string
}

/**
 * ModifyLiveStreamMonitor请求参数结构体
 */
export interface ModifyLiveStreamMonitorRequest {
  /**
   * 监播任务ID。
   */
  MonitorId: string
  /**
   * 监播任务的名称。长度128字节以内（一个汉字两个字节）。
   */
  MonitorName?: string
  /**
   * 监播任务输出信息。
   */
  OutputInfo?: LiveStreamMonitorOutputInfo
  /**
   * 待监播的输入流信息。
   */
  InputList?: Array<LiveStreamMonitorInputInfo>
  /**
   * 监播事件通知策略。
   */
  NotifyPolicy?: LiveStreamMonitorNotifyPolicy
  /**
   * 智能语音识别语种：
0 关闭 1 中文 2 英文 3 日文 4 韩文。
   */
  AsrLanguage?: number
  /**
   * 智能文字识别语种：
0 关闭 1 中、英文。
   */
  OcrLanguage?: number
  /**
   * 语音识别输入流列表，1代表第一条输入流。
   */
  AiAsrInputIndexList?: Array<number | bigint>
  /**
   * 文字识别输入流列表，1代表第一条输入流。
   */
  AiOcrInputIndexList?: Array<number | bigint>
  /**
   * 是否开启断流检测。
   */
  CheckStreamBroken?: number
  /**
   * 是否开启低帧率检测。
   */
  CheckStreamLowFrameRate?: number
  /**
   * 是否存储监播事件到监播报告，以及是否允许查询监播报告。
   */
  AllowMonitorReport?: number
  /**
   * 是否开启格式诊断。
   */
  AiFormatDiagnose?: number
  /**
   * 是否开启内容质检。
   */
  AiQualityControl?: number
}

/**
 * ModifyLiveSnapshotTemplate返回参数结构体
 */
export interface ModifyLiveSnapshotTemplateResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteLivePadTemplate请求参数结构体
 */
export interface DeleteLivePadTemplateRequest {
  /**
   * 模板 ID。
   */
  TemplateId: number
}

/**
 * DescribeTimeShiftStreamList请求参数结构体
 */
export interface DescribeTimeShiftStreamListRequest {
  /**
   * 查询范围起始时间，Unix 时间戳。
   */
  StartTime: number
  /**
   * 查询范围结束时间，Unix 时间戳。
   */
  EndTime: number
  /**
   * 流名称。
   */
  StreamName?: string
  /**
   * 推流域名。
   */
  Domain?: string
  /**
   * 推流域名所属域名组。
   */
  DomainGroup?: string
  /**
   * 用户指定要返回的最大结果数，取值范围[0,100]，不指定或者指定为0时，API 
默认值为100。指定超过100时，API 强制使用100。指定值为负数时，接口返回错误。
   */
  PageSize?: number
  /**
   * 指定拉取的页码，不传时默认为1。
   */
  PageNum?: number
}

/**
 * 导播台布局参数。
 */
export interface CasterLayoutInfo {
  /**
   * 布局Index。
   */
  LayoutIndex: number
  /**
   * 布局模板Id。
有效值[1，20，21，31，32，41]
当使用布局模版时，无需LayoutParams参数，导播台将使用模版布局参数。

   */
  LayoutTemplateId?: number
  /**
   * 布局绑定的输入列表。按布局LayerId从小到大，按顺序排列。
已有两个画面的布局为例，输入1对应LayerId为1，输入2对应的LayerId为2，该字段应该填入"1|2"。
   */
  InputIndexList?: string
  /**
   * 详细的布局参数列表。
   */
  LayoutParams?: Array<CasterLayoutParam>
  /**
   * 布局输出的宽度，单位为像素。
默认为1280像素。
注：该值仅在画中画布局，且未设置PgmWidth时生效。
注意：此字段可能返回 null，表示取不到有效值。
   */
  LayoutWidth?: number
  /**
   * 布局输出的高度，单位为像素。
注：该参数仅在画中画布局，且未设置PgmHeight时生效。
注意：此字段可能返回 null，表示取不到有效值。
   */
  LayoutHeight?: number
}

/**
 * DescribeLiveWatermark请求参数结构体
 */
export interface DescribeLiveWatermarkRequest {
  /**
   * DescribeLiveWatermarks接口返回的水印 ID。
   */
  WatermarkId: number
}

/**
 * 混流抠图参数
 */
export interface MixPortraitSegmentParams {
  /**
   * 抠图背景颜色，
常用的颜色有：
红色：0xcc0033。
黄色：0xcc9900。
绿色：0xcccc33。
蓝色：0x99CCFF。
黑色：0x000000。
白色：0xFFFFFF。
灰色：0x999999。
   */
  Color?: string
}

/**
 * DescribeLiveDomains返回参数结构体
 */
export interface DescribeLiveDomainsResponse {
  /**
   * 总记录数。
   */
  AllCount?: number
  /**
   * 域名详细信息列表。
   */
  DomainList?: Array<DomainInfo>
  /**
   * 可继续添加域名数量。
   */
  CreateLimitCount?: number
  /**
   * 启用的播放域名加速区域统计，数组元素分别为：中国大陆（境内），全球地区，国际/港澳台（境外）域名数量。
   */
  PlayTypeCount?: Array<number | bigint>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyLiveTimeShiftTemplate请求参数结构体
 */
export interface ModifyLiveTimeShiftTemplateRequest {
  /**
   * 时移模板id。
   */
  TemplateId: number
  /**
   * 模板名称。
仅支持中文、英文、数字、_、-。
   */
  TemplateName?: string
  /**
   * 描述信息。
长度上限：1024字节。
仅支持中文、英文、数字、_、-。
   */
  Description?: string
  /**
   * 时移时长。
单位：s。
   */
  Duration?: number
  /**
   * 分片时长。
可取3-10。
单位：s。
默认值：5。
   */
  ItemDuration?: number
  /**
   * 是否去除水印。
传true则将录制原始流。
默认值：false。
   */
  RemoveWatermark?: boolean
  /**
   * 转码流id列表。
此参数仅在 RemoveWatermark为false时生效。
   */
  TranscodeTemplateIds?: Array<number | bigint>
  /**
   * 地域。
Mainland：中国大陆。
Overseas：海外及港澳台地区。
默认值：Mainland。
   */
  Area?: string
}

/**
 * ModifyLiveDomainCertBindings返回参数结构体
 */
export interface ModifyLiveDomainCertBindingsResponse {
  /**
   * DomainNames 入参中，与证书不匹配的域名列表，将会跳过处理。
   */
  MismatchedDomainNames?: Array<string>
  /**
   * 操作失败的域名及错误码，错误信息，包括MismatchedDomainNames中的域名。
   */
  Errors?: Array<BatchDomainOperateErrors>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeLiveRecordRules请求参数结构体
 */
export type DescribeLiveRecordRulesRequest = null

/**
 * DescribeCasterUserStatus请求参数结构体
 */
export type DescribeCasterUserStatusRequest = null

/**
 * DescribeLiveStreamMonitor返回参数结构体
 */
export interface DescribeLiveStreamMonitorResponse {
  /**
   * 直播监播任务相关信息。
   */
  LiveStreamMonitor?: LiveStreamMonitorInfo
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyPullStreamStatus返回参数结构体
 */
export interface ModifyPullStreamStatusResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteLiveTimeShiftRule请求参数结构体
 */
export interface DeleteLiveTimeShiftRuleRequest {
  /**
   * 推流域名。
域名+AppName+StreamName唯一标识单个时移规则，如需删除需要强匹配，例如AppName为空也需要传空字符串进行强匹配。
   */
  DomainName: string
  /**
   * 推流路径，与推流和播放地址中的AppName保持一致，默认为 live。
域名+AppName+StreamName唯一标识单个时移规则，如需删除需要强匹配，例如AppName为空也需要传空字符串进行强匹配。
   */
  AppName: string
  /**
   * 流名称。
域名+AppName+StreamName唯一标识单个时移规则，如需删除需要强匹配，例如AppName为空也需要传空字符串进行强匹配。
   */
  StreamName: string
}

/**
 * 通用混流输入参数。
 */
export interface CommonMixInputParam {
  /**
   * 输入流名称。80字节以内，仅含字母、数字以及下划线的字符串。
当LayoutParams.InputType=0(音视频)/4(纯音频)/5(纯视频)时，该值为需要混流的流名称。
当LayoutParams.InputType=2(图片)/3(画布)时，该值仅用作标识输入，可用类似Canvas1、Pictrue1的名称。
   */
  InputStreamName: string
  /**
   * 输入流布局参数。
   */
  LayoutParams: CommonMixLayoutParams
  /**
   * 输入流裁剪参数。
   */
  CropParams?: CommonMixCropParams
  /**
   * 抠图参数。
   */
  PortraitSegmentParams?: MixPortraitSegmentParams
}

/**
 * CreateLiveCallbackTemplate请求参数结构体
 */
export interface CreateLiveCallbackTemplateRequest {
  /**
   * 模板名称。
长度上限：255字节。
仅支持中文、英文、数字、_、-。
   */
  TemplateName: string
  /**
   * 描述信息。
长度上限：1024字节。
仅支持中文、英文、数字、_、-。
   */
  Description?: string
  /**
   * 开播回调 URL，
相关协议文档：[事件消息通知](/document/product/267/32744)。
   */
  StreamBeginNotifyUrl?: string
  /**
   * 断流回调 URL，
相关协议文档：[事件消息通知](/document/product/267/32744)。
   */
  StreamEndNotifyUrl?: string
  /**
   * 录制文件回调 URL，
相关协议文档：[事件消息通知](/document/product/267/32744)。
   */
  RecordNotifyUrl?: string
  /**
   * 录制状态回调 URL ，
相关协议文档：[事件消息通知](/document/product/267/32744)。
   */
  RecordStatusNotifyUrl?: string
  /**
   * 截图回调 URL，
相关协议文档：[事件消息通知](/document/product/267/32744)。
   */
  SnapshotNotifyUrl?: string
  /**
   * 鉴黄回调 URL ，
相关协议文档：[事件消息通知](/document/product/267/32741)。
   */
  PornCensorshipNotifyUrl?: string
  /**
   * 回调 Key，回调 URL 公用，回调签名详见事件消息通知文档。
[事件消息通知](/document/product/267/32744)。
   */
  CallbackKey?: string
  /**
   * 参数已弃用。
   */
  StreamMixNotifyUrl?: string
  /**
   * 推流异常回调 URL。
   */
  PushExceptionNotifyUrl?: string
  /**
   * 音频审核回调 URL。
   */
  AudioAuditNotifyUrl?: string
  /**
   * 录制异常回调 URL。
   */
  RecordExceptionNotifyUrl?: string
  /**
   * 录制异常回调级别，可选择：error、warning、info。
   */
  RecordExceptionLevels?: Array<string>
}

/**
 * 推断流事件信息。
 */
export interface StreamEventInfo {
  /**
   * 应用名称。
   */
  AppName: string
  /**
   * 推流域名。
   */
  DomainName: string
  /**
   * 流名称。
   */
  StreamName: string
  /**
   * 推流开始时间。
UTC 格式时间，例如：2019-01-07T12:00:00Z。
   */
  StreamStartTime: string
  /**
   * 推流结束时间。
UTC 格式时间，例如：2019-01-07T15:00:00Z。
   */
  StreamEndTime: string
  /**
   * 停止原因。
   */
  StopReason: string
  /**
   * 推流持续时长，单位：秒。
   */
  Duration: number
  /**
   * 主播 IP。
当客户端为内网推流时，展示为: - 。
   */
  ClientIp: string
  /**
   * 分辨率。
   */
  Resolution: string
}

/**
 * DeleteRecordTask返回参数结构体
 */
export interface DeleteRecordTaskResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateLiveTranscodeRule请求参数结构体
 */
export interface CreateLiveTranscodeRuleRequest {
  /**
   * 播放域名。
   */
  DomainName: string
  /**
   * 推流路径，与推流和播放地址中的AppName保持一致。如果只绑定域名，则此处填""。
   */
  AppName: string
  /**
   * 流名称。已废弃该字段，请传入空字符串。
   */
  StreamName: string
  /**
   * 指定已有的模板Id。
   */
  TemplateId: number
}

/**
 * DropLiveStream请求参数结构体
 */
export interface DropLiveStreamRequest {
  /**
   * 流名称。
   */
  StreamName: string
  /**
   * 您的推流域名。
   */
  DomainName: string
  /**
   * 推流路径，与推流和播放地址中的AppName保持一致，默认为 live。
   */
  AppName: string
}

/**
 * CreateCommonMixStream请求参数结构体
 */
export interface CreateCommonMixStreamRequest {
  /**
   * 混流会话（申请混流开始到取消混流结束）标识 ID。80字节以内，仅含字母、数字以及下划线的字符串。
   */
  MixStreamSessionId: string
  /**
   * 混流输入流列表。
   */
  InputStreamList: Array<CommonMixInputParam>
  /**
   * 混流输出流参数。
   */
  OutputParams: CommonMixOutputParams
  /**
   * 输入模板 ID，若设置该参数，将按默认模板布局输出，无需填入自定义位置参数。
不填默认为0。
两输入源支持10，20，30，40，50。
三输入源支持310，390，391。
四输入源支持410。
五输入源支持510，590。
六输入源支持610。
   */
  MixStreamTemplateId?: number
  /**
   * 混流的特殊控制参数。如无特殊需求，无需填写。
   */
  ControlParams?: CommonMixControlParams
}

/**
 * DeleteCasterMarkPicInfo请求参数结构体
 */
export interface DeleteCasterMarkPicInfoRequest {
  /**
   * 导播台ID。
   */
  CasterId: number
  /**
   * 需要删除的水印Index。
   */
  MarkPicIndex: number
}

/**
 * CreateCaster返回参数结构体
 */
export interface CreateCasterResponse {
  /**
   * 导播台ID
   */
  CasterId?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 推流数据信息
 */
export interface PushDataInfo {
  /**
   * 流名称。
   */
  StreamName: string
  /**
   * 推流路径。
   */
  AppName: string
  /**
   * 推流客户端 IP。
   */
  ClientIp: string
  /**
   * 接流服务器 IP。
   */
  ServerIp: string
  /**
   * 推流视频帧率，单位: Hz。
   */
  VideoFps: number
  /**
   * 推流视频码率，单位: bps。
   */
  VideoSpeed: number
  /**
   * 推流音频帧率，单位: Hz。
   */
  AudioFps: number
  /**
   * 推流音频码率，单位: bps。
   */
  AudioSpeed: number
  /**
   * 推流域名。
   */
  PushDomain: string
  /**
   * 推流开始时间。
   */
  BeginPushTime: string
  /**
   * 音频编码格式，
例："AAC"。
   */
  Acodec: string
  /**
   * 视频编码格式，
例："H264"。
   */
  Vcodec: string
  /**
   * 分辨率。
   */
  Resolution: string
  /**
   * 采样率。
   */
  AsampleRate: number
  /**
   * metadata 中的音频码率，单位: bps。
   */
  MetaAudioSpeed: number
  /**
   * metadata 中的视频码率，单位: bps。
   */
  MetaVideoSpeed: number
  /**
   * metadata 中的帧率。
   */
  MetaFps: number
}

/**
 * DescribeLiveSnapshotTemplate返回参数结构体
 */
export interface DescribeLiveSnapshotTemplateResponse {
  /**
   * 截图模板信息。
   */
  Template?: SnapshotTemplateInfo
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateLiveTimeShiftTemplate请求参数结构体
 */
export interface CreateLiveTimeShiftTemplateRequest {
  /**
   * 模板名称。
长度上限：255字节。
仅支持中文、英文、数字、_、-。
   */
  TemplateName: string
  /**
   * 时移时长。
单位：s。
   */
  Duration: number
  /**
   * 描述信息。
仅支持中文、英文、数字、_、-。
   */
  Description?: string
  /**
   * 地域。
Mainland：中国大陆。
Overseas：海外及港澳台地区。
默认值：Mainland。
   */
  Area?: string
  /**
   * 分片时长。
可取3-10。
单位：s。
默认值：5。
   */
  ItemDuration?: number
  /**
   * 是否去除水印。
传true则将录制原始流。
默认值：false。
   */
  RemoveWatermark?: boolean
  /**
   * 转码流id列表。
此参数仅在 RemoveWatermark为false时生效。
   */
  TranscodeTemplateIds?: Array<number | bigint>
}

/**
 * DescribeLiveDomainReferer返回参数结构体
 */
export interface DescribeLiveDomainRefererResponse {
  /**
   * 域名 Referer 黑白名单配置。
   */
  RefererAuthConfig: RefererAuthConfig
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeLivePadTemplate请求参数结构体
 */
export interface DescribeLivePadTemplateRequest {
  /**
   * 模板id。
   */
  TemplateId: number
}

/**
 * DescribeHttpStatusInfoList请求参数结构体
 */
export interface DescribeHttpStatusInfoListRequest {
  /**
   * 起始时间，
使用UTC格式时间，
例如：2019-01-08T10:00:00Z。
注意：北京时间值为 UTC 时间值 + 8 小时，格式按照 ISO 8601 标准表示，详见 [ISO 日期格式说明](https://cloud.tencent.com/document/product/267/38543#:~:text=I-,ISO,-%E6%97%A5%E6%9C%9F%E6%A0%BC%E5%BC%8F)。
   */
  StartTime: string
  /**
   * 结束时间，
使用UTC格式时间，
例如：2019-01-08T10:00:00Z。
注意：北京时间值为 UTC 时间值 + 8 小时，格式按照 ISO 8601 标准表示，详见 [ISO 日期格式说明](https://cloud.tencent.com/document/product/267/38543#:~:text=I-,ISO,-%E6%97%A5%E6%9C%9F%E6%A0%BC%E5%BC%8F)。
   */
  EndTime: string
  /**
   * 播放域名列表。
   */
  PlayDomains?: Array<string>
}

/**
 * StartLiveStreamMonitor请求参数结构体
 */
export interface StartLiveStreamMonitorRequest {
  /**
   * 监播ID。
   */
  MonitorId: string
  /**
   * 监播画面声音InputIndex,支持多个输入声音。
取值范围 InputIndex必须已经存在。
不填默认无声音输出。
   */
  AudibleInputIndexList?: Array<number | bigint>
}

/**
 * DescribeCaster请求参数结构体
 */
export interface DescribeCasterRequest {
  /**
   * 需查询的导播台ID
   */
  CasterId: number
}

/**
 * AuthenticateDomainOwner请求参数结构体
 */
export interface AuthenticateDomainOwnerRequest {
  /**
   * 要验证的域名。
   */
  DomainName: string
  /**
   * 验证类型。可取值：
dnsCheck ：立即验证配置 dns 的解析记录是否与待验证内容一致，成功则保存记录。
fileCheck ：立即验证 web 文件是否与待验证内容一致，成功则保存记录。
dbCheck :  检查是否已经验证成功过。
   */
  VerifyType: string
}

/**
 * DeleteLiveDomain请求参数结构体
 */
export interface DeleteLiveDomainRequest {
  /**
   * 要删除的域名
   */
  DomainName: string
  /**
   * 类型。0-推流，1-播放
   */
  DomainType: number
}

/**
 * DeleteLiveTimeShiftTemplate返回参数结构体
 */
export interface DeleteLiveTimeShiftTemplateResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyLivePushAuthKey返回参数结构体
 */
export interface ModifyLivePushAuthKeyResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeScreenshotTask返回参数结构体
 */
export interface DescribeScreenshotTaskResponse {
  /**
   * 翻页标识，当请求未返回所有数据，该字段表示下一条记录的 Token。当该字段为空，说明已无更多数据。
   */
  ScrollToken?: string
  /**
   * 截图任务列表。当该字段为空，说明已返回所有数据。
   */
  TaskList?: Array<ScreenshotTask>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyPullStreamConfig请求参数结构体
 */
export interface ModifyPullStreamConfigRequest {
  /**
   * 配置 ID。
获取来源：
1. 创建拉流配置接口CreatePullStreamConfig返回的配置 ID。
2. 通过查询接口DescribePullStreamConfigs获取配置 ID。
   */
  ConfigId: string
  /**
   * 源 URL，用于拉流的地址。目前可支持直播流及点播文件。
注意：
1. 多个点播 URL 之间使用空格拼接。
2. 目前上限支持10个 URL。
3. 支持拉流文件格式：FLV，RTMP，HLS，MP4。
4. 使用标准三层样式，如：http://test.com/live/stream.flv。
   */
  FromUrl?: string
  /**
   * 目的 URL，用于推流的地址，目前限制该目标地址为腾讯域名。
1. 仅支持 RTMP 协议。
2. 使用标准三层样式，如：http://test.com/live/stream.flv。
   */
  ToUrl?: string
  /**
   * 区域 ID：
1-深圳。
2-上海。
3-天津。
4-中国香港。
如有改动，需同时传入IspId。
   */
  AreaId?: number
  /**
   * 运营商 ID，
1：电信。
2：移动。
3：联通。
4：其他。
AreaId为4的时候，IspId只能为其他。如有改动，需同时传入AreaId。
   */
  IspId?: number
  /**
   * 开始时间。
使用UTC格式时间，
例如：2019-01-08T10:00:00Z。
注意：北京时间值为 UTC 时间值 + 8 小时，格式按照 ISO 8601 标准表示，详见 [ISO 日期格式说明](https://cloud.tencent.com/document/product/266/11732#I)。
   */
  StartTime?: string
  /**
   * 结束时间，注意：
1. 结束时间必须大于开始时间；
2. 结束时间和开始时间必须大于当前时间；
3. 结束时间 和 开始时间 间隔必须小于七天。

使用UTC格式时间，
例如：2019-01-08T10:00:00Z。
注意：北京时间值为 UTC 时间值 + 8 小时，格式按照 ISO 8601 标准表示，详见 [ISO 日期格式说明](https://cloud.tencent.com/document/product/266/11732#I)。
   */
  EndTime?: string
}

/**
 * DescribeProvinceIspPlayInfoList返回参数结构体
 */
export interface DescribeProvinceIspPlayInfoListResponse {
  /**
   * 播放信息列表。
   */
  DataInfoList?: Array<PlayStatInfo>
  /**
   * 统计的类型，和输入参数保持一致。
   */
  StatType?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeLivePackageInfo返回参数结构体
 */
export interface DescribeLivePackageInfoResponse {
  /**
   * 套餐包信息。
   */
  LivePackageInfoList?: Array<LivePackageInfo>
  /**
   * 套餐包当前计费方式:
-1: 无计费方式或获取失败
0: 无计费方式
201: 月结带宽
202: 月结流量
203: 日结带宽
204: 日结流量
205: 日结时长
206: 月结时长
304: 日结流量。
   */
  PackageBillMode?: number
  /**
   * 总页数。
注意：此字段可能返回 null，表示取不到有效值。
   */
  TotalPage?: number
  /**
   * 数据总条数。
注意：此字段可能返回 null，表示取不到有效值。
   */
  TotalNum?: number
  /**
   * 当前页数。
注意：此字段可能返回 null，表示取不到有效值。
   */
  PageNum?: number
  /**
   * 当前每页数量。
注意：此字段可能返回 null，表示取不到有效值。
   */
  PageSize?: number
  /**
   * 当请求参数 PackageType = 0 时生效，逗号分隔，从第一个到最后一个分别表示：
标准直播，中国大陆（境内全地区）计费方式。
标准直播，国际/港澳台（境外多地区）计费方式。
快直播，中国大陆（境内全地区）计费方式。
快直播，国际/港澳台（境外多地区）计费方式。
   */
  FluxPackageBillMode?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateLiveCallbackRule请求参数结构体
 */
export interface CreateLiveCallbackRuleRequest {
  /**
   * 推流域名。
   */
  DomainName: string
  /**
   * 推流路径，与推流和播放地址中的AppName保持一致，默认为live。
   */
  AppName: string
  /**
   * 模板ID。
   */
  TemplateId: number
}

/**
 * 时移录制段。
 */
export interface TimeShiftRecord {
  /**
   * 时移录制会话标识。
   */
  Sid?: string
  /**
   * 录制会话开始时间，Unix 时间戳。
   */
  StartTime?: number
  /**
   * 录制会话结束时间，Unix 时间戳。
   */
  EndTime?: number
}

/**
 * DescribeLiveDomains请求参数结构体
 */
export interface DescribeLiveDomainsRequest {
  /**
   * 域名状态过滤。0-停用，1-启用。
   */
  DomainStatus?: number
  /**
   * 域名类型过滤。0-推流，1-播放。
   */
  DomainType?: number
  /**
   * 分页大小，范围：10~100。默认10。
   */
  PageSize?: number
  /**
   * 取第几页，范围：1~100000。默认1。
   */
  PageNum?: number
  /**
   * 0 普通直播 1慢直播 默认0。
   */
  IsDelayLive?: number
  /**
   * 域名前缀。
   */
  DomainPrefix?: string
  /**
   * 播放区域，只在 DomainType=1 时该参数有意义。
1: 国内。
2: 全球。
3: 海外。
   */
  PlayType?: number
}

/**
 * 截图模板信息。
 */
export interface SnapshotTemplateInfo {
  /**
   * 模板 ID。
   */
  TemplateId: number
  /**
   * 模板名称。
   */
  TemplateName: string
  /**
   * 截图时间间隔，5-300秒。
   */
  SnapshotInterval: number
  /**
   * 截图宽度，范围：0-3000。 
0：原始宽度并适配原始比例。
   */
  Width: number
  /**
   * 截图高度，范围：0-2000。
0：原始高度并适配原始比例。
   */
  Height: number
  /**
   * 是否开启鉴黄，0：不开启，1：开启。
   */
  PornFlag: number
  /**
   * Cos 应用 ID。
   */
  CosAppId: number
  /**
   * Cos Bucket名称。
   */
  CosBucket: string
  /**
   * Cos 地域。
   */
  CosRegion: string
  /**
   * 模板描述。
   */
  Description: string
  /**
   * Cos Bucket文件夹前缀。
注意：此字段可能返回 null，表示取不到有效值。
   */
  CosPrefix: string
  /**
   * Cos 文件名称。
注意：此字段可能返回 null，表示取不到有效值。
   */
  CosFileName: string
}

/**
 * DescribeLiveTimeShiftBillInfoList返回参数结构体
 */
export interface DescribeLiveTimeShiftBillInfoListResponse {
  /**
   * 时移计费明细数据。
   */
  DataInfoList?: Array<TimeShiftBillData>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 证书信息。
 */
export interface CertInfo {
  /**
   * 证书 ID。
   */
  CertId?: number
  /**
   * 证书名称。
   */
  CertName?: string
  /**
   * 描述信息。
   */
  Description?: string
  /**
   * 创建时间，UTC 格式。
注：此字段为北京时间（UTC+8时区）。
   */
  CreateTime?: string
  /**
   * 证书内容。
   */
  HttpsCrt?: string
  /**
   * 证书类型。
0：用户添加证书，
1：腾讯云托管证书。
   */
  CertType?: number
  /**
   * 证书过期时间，UTC 格式。
注：此字段为北京时间（UTC+8时区）。
   */
  CertExpireTime?: string
  /**
   * 使用此证书的域名列表。
   */
  DomainList?: Array<string>
}

/**
 * DescribeLiveCallbackRules请求参数结构体
 */
export type DescribeLiveCallbackRulesRequest = null

/**
 * 导播台信息
 */
export interface CasterInfo {
  /**
   * 导播台ID
   */
  CasterId?: number
  /**
   * 导播台名称
   */
  CasterName?: string
  /**
   * 导播台上一次启动pgm的时间，值为unix时间戳。
   */
  StartLiveTime?: number
  /**
   * 导播台的描述
   */
  Description?: string
  /**
   * 导播台创建时间，值为unix时间戳。
   */
  CreateTime?: number
  /**
   * 导播台状态 
0：停止状态，无预监，无主监
1：无预监，有主监
2：有预监，无主监
3：有预监，有主监
   */
  Status?: number
  /**
   * 导播台的过期时间戳。值为-1或unix时间戳。 
默认值为-1。 当值为-1时，表示该导播台永不过期。 
当值为正常unix时间戳时，导播台将在该时间过期。 
导播台过期后，预监与主监画面将自动停止，转推自动停止。 
点播、直播url将停止转拉，推流url需自行停止推流。
   */
  ExpireTime?: number
  /**
   * 导播台延时播放时间，单位为秒。
   */
  DelayTime?: number
  /**
   * 导播台主监输出的宽度，单位为像素。
   */
  PgmWidth?: number
  /**
   * 导播台主监输出的高度，单位为像素。
   */
  PgmHeight?: number
  /**
   * 导播台主监输出的帧率。
   */
  PgmFps?: number
  /**
   * 导播台主监输出的码率，单位为kbps
   */
  PgmBitRate?: number
  /**
   * 导播台主监输出的音频码率，单位为kbps。
   */
  PgmAudioBitRate?: number
  /**
   * 导播台的计费类型。 
0 通用型 1 播单型。
注： 本参数暂无作用。
   */
  FeeType?: number
  /**
   * 录制模板id。
   */
  RecordTemplateId?: number
  /**
   * 录制状态。 
0：未录制 
1：录制中
   */
  RecordStatus?: number
  /**
   * 录制接口返回的taskid
   */
  RecordTaskId?: string
}

/**
 * DescribeLivePadProcessorList请求参数结构体
 */
export interface DescribeLivePadProcessorListRequest {
  /**
   * 推流路径，与推流和播放地址中的AppName保持一致，默认为 live。
   */
  AppName: string
  /**
   * 您的推流域名。
   */
  PushDomainName: string
}

/**
 * DescribeConcurrentRecordStreamNum请求参数结构体
 */
export interface DescribeConcurrentRecordStreamNumRequest {
  /**
   * 直播类型，SlowLive：慢直播。
NormalLive：普通直播。
   */
  LiveType: string
  /**
   * 起始时间点，接口查询支持两种时间格式：
1）YYYY-MM-DDThh:mm:ssZ：UTC时间格式，详见IOS日期格式说明文档: https://cloud.tencent.com/document/product/266/11732#I
2）YYYY-MM-DD hh:mm:ss：使用此格式时，默认代表北京时间。
可以查询最近180天的数据。
   */
  StartTime: string
  /**
   * 结束时间点，接口查询支持两种时间格式：
1）YYYY-MM-DDThh:mm:ssZ：UTC时间格式，详见IOS日期格式说明文档: https://cloud.tencent.com/document/product/266/11732#I
2）YYYY-MM-DD hh:mm:ss：使用此格式时，默认代表北京时间。
时间跨度最大支持31天。
   */
  EndTime: string
  /**
   * 如果为空，查询所有地区数据；如果为“Mainland”，查询国内数据；如果为“Oversea”，则查询国外数据。
   */
  MainlandOrOversea?: string
  /**
   * 推流域名列表，不填表示总体数据。
   */
  PushDomains?: Array<string>
}

/**
 * DeleteCasterInputInfo请求参数结构体
 */
export interface DeleteCasterInputInfoRequest {
  /**
   * 导播台ID
   */
  CasterId: number
  /**
   * 导播台输入Index。
范围[0,20]
注：该Index对应的输入源需存在。
   */
  InputIndex: number
}

/**
 * DeleteScreenshotTask返回参数结构体
 */
export interface DeleteScreenshotTaskResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribePullTransformPushInfo返回参数结构体
 */
export interface DescribePullTransformPushInfoResponse {
  /**
   * 时长统计数据列表
   */
  DataInfoList?: Array<TaskDurationInfo>
  /**
   * 拉流转推得总时长
   */
  TotalDuration?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeLiveStreamState请求参数结构体
 */
export interface DescribeLiveStreamStateRequest {
  /**
   * 推流路径，与推流和播放地址中的AppName保持一致，默认为 live。
   */
  AppName: string
  /**
   * 您的推流域名。
   */
  DomainName: string
  /**
   * 流名称。
   */
  StreamName: string
}

/**
 * CreateLiveRecordTemplate返回参数结构体
 */
export interface CreateLiveRecordTemplateResponse {
  /**
   * 模板Id。
   */
  TemplateId?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * StopLivePadProcessor返回参数结构体
 */
export interface StopLivePadProcessorResponse {
  /**
   * 处理结果信息。
   */
  ResultMessage?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * AddCasterMarkWordInfo请求参数结构体
 */
export interface AddCasterMarkWordInfoRequest {
  /**
   * 导播台ID。
   */
  CasterId: number
  /**
   * 文本的详细配置。
   */
  MarkWordInfo: CasterMarkWordInfo
}

/**
 * ModifyLivePlayAuthKey返回参数结构体
 */
export interface ModifyLivePlayAuthKeyResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeLiveTimeShiftRules返回参数结构体
 */
export interface DescribeLiveTimeShiftRulesResponse {
  /**
   * 规则信息列表。
   */
  Rules?: Array<RuleInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeLiveTranscodeTemplates返回参数结构体
 */
export interface DescribeLiveTranscodeTemplatesResponse {
  /**
   * 转码模板列表。
   */
  Templates?: Array<TemplateInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteLiveCallbackRule请求参数结构体
 */
export interface DeleteLiveCallbackRuleRequest {
  /**
   * 推流域名。
   */
  DomainName: string
  /**
   * 推流路径，与推流和播放地址中的 AppName 保持一致，默认为 live。
   */
  AppName: string
}

/**
 * DescribeAllStreamPlayInfoList返回参数结构体
 */
export interface DescribeAllStreamPlayInfoListResponse {
  /**
   * 查询时间点，回传的输入参数中的查询时间。
   */
  QueryTime?: string
  /**
   * 数据信息列表。
   */
  DataInfoList?: Array<MonitorStreamPlayInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 直播拉流任务状态信息。
 */
export interface TaskStatusInfo {
  /**
   * 当前使用的源 URL。
   */
  FileUrl: string
  /**
   * 点播源任务的轮播次数。
   */
  LoopedTimes: number
  /**
   * 点播源的播放偏移，单位：秒。
   */
  OffsetTime: number
  /**
   * 最新心跳上报时间。UTC时间，例如：
2022-02-11T10:00:00Z。
注意：UTC时间与北京时间相差八小时。
   */
  ReportTime: string
  /**
   * 实际运行状态：
active - 活跃，
inactive - 不活跃。
   */
  RunStatus: string
  /**
   * 点播源的文件时长，单位：秒。
   */
  FileDuration: number
  /**
   * 下一进度点播文件 URL。
   */
  NextFileUrl: string
}

/**
 * DescribeCasterInputInfos请求参数结构体
 */
export interface DescribeCasterInputInfosRequest {
  /**
   * 导播台ID
   */
  CasterId: number
}

/**
 * DescribeLivePadTemplates返回参数结构体
 */
export interface DescribeLivePadTemplatesResponse {
  /**
   * 直播垫片模板信息。
   */
  Templates?: Array<PadTemplate>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeVisitTopSumInfoList返回参数结构体
 */
export interface DescribeVisitTopSumInfoListResponse {
  /**
   * 页号，
范围是[1,1000]，
默认值是1。
   */
  PageNum: number
  /**
   * 每页个数，范围是[1,1000]，
默认值是20。
   */
  PageSize: number
  /**
   * 峰值指标，可选值包括”Domain”，”StreamId”。
   */
  TopIndex: string
  /**
   * 排序指标，可选值包括” AvgFluxPerSecond”(按每秒平均流量排序)，”TotalRequest”（默认，按总请求数排序）,“TotalFlux”（按总流量排序）。
   */
  OrderParam: string
  /**
   * 记录总数。
   */
  TotalNum: number
  /**
   * 记录总页数。
   */
  TotalPage: number
  /**
   * 数据内容。
   */
  DataInfoList: Array<PlaySumStatInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 时移计费明细数据。
 */
export interface TimeShiftBillData {
  /**
   * 推流域名。
   */
  Domain: string
  /**
   * 时移文件时长，单位分钟。
   */
  Duration: number
  /**
   * 时移配置天数，单位天。
   */
  StoragePeriod: number
  /**
   * 时间点，格式: yyyy-mm-ddTHH:MM:SSZ。
   */
  Time: string
  /**
   * 时移总时长，单位分钟。
   */
  TotalDuration: number
}

/**
 * HLS专属录制参数
 */
export interface HlsSpecialParam {
  /**
   * HLS续流超时时间。
取值范围[0，1800]。
注意：此字段可能返回 null，表示取不到有效值。
   */
  FlowContinueDuration?: number
}

/**
 * DescribeLiveRecordRules返回参数结构体
 */
export interface DescribeLiveRecordRulesResponse {
  /**
   * 规则列表。
   */
  Rules: Array<RuleInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * StopLiveStreamMonitor请求参数结构体
 */
export interface StopLiveStreamMonitorRequest {
  /**
   * 监播ID
   */
  MonitorId: string
}

/**
 * DeleteLiveSnapshotTemplate返回参数结构体
 */
export interface DeleteLiveSnapshotTemplateResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateCommonMixStream返回参数结构体
 */
export interface CreateCommonMixStreamResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyLiveDomainReferer请求参数结构体
 */
export interface ModifyLiveDomainRefererRequest {
  /**
   * 播放域名。
   */
  DomainName: string
  /**
   * 是否开启当前域名的 Referer 黑白名单鉴权。
   */
  Enable: number
  /**
   * 名单类型，0：黑名单，1：白名单。
   */
  Type: number
  /**
   * 是否允许空 Referer，0：不允许，1：允许。
   */
  AllowEmpty: number
  /**
   * Referer 名单列表，以;分隔。
   */
  Rules: string
}

/**
 * CreateCasterPgmFromPvw返回参数结构体
 */
export interface CreateCasterPgmFromPvwResponse {
  /**
   * 主监任务的rtmp协议预览地址。 
注：该地址仅供预览，不可分发。
   */
  PgmPlayUrl?: string
  /**
   * 注：该字段已废弃，请结合腾讯云直播播放地址生成策略生成cdn播放地址
   */
  CdnPlayUrl?: string
  /**
   * 主监任务在腾讯云直播侧的流ID。
   */
  CdnStreamId?: string
  /**
   * 主监任务的webrtc协议播放地址。 
注：
1.该预览地址仅作为预览，不可分发。
2.webrtc播放地址需配合腾讯云快直播播放sdk使用。
   */
  PgmWebRTCPlayUrl?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeLiveTimeShiftWriteSizeInfoList请求参数结构体
 */
export interface DescribeLiveTimeShiftWriteSizeInfoListRequest {
  /**
   * 起始时间点，
使用UTC格式时间，
例如：2019-01-08T10:00:00Z。
支持最近六个月的查询，查询开始和结束时间跨度不支持超过31天。
   */
  StartTime: string
  /**
   * 结束时间点，
使用UTC格式时间，
例如：2019-01-08T10:00:00Z。
支持最近六个月的查询，查询开始和结束时间跨度不支持超过31天。
   */
  EndTime: string
  /**
   * 域名。
   */
  DomainNames?: Array<string>
  /**
   * 维度
Area地区、Domain 域名、StorageDays 时移天数
   */
  Dimensions?: Array<string>
  /**
   * 时移天数。
   */
  StorageDays?: Array<number | bigint>
  /**
   * 时间跨度（分钟）
默认5，可选 5、60或者1440。
   */
  Granularity?: number
  /**
   * 区域
可选Mainland、Oversea。
   */
  MainlandOrOversea?: string
}

/**
 * 按省份运营商查询的播放信息。
 */
export interface PlayStatInfo {
  /**
   * 数据时间点。
   */
  Time: string
  /**
   * 带宽/流量/请求数/并发连接数/下载速度的值，若没数据返回时该值为0。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Value: number
}

/**
 * DescribeCasterUserStatus返回参数结构体
 */
export interface DescribeCasterUserStatusResponse {
  /**
   * 0: 未开通导播台
1:开通了导播台，且处于正常状态
2:开通了导播台，但处于欠费状态
3:开通了导播台，但处于封禁状态
   */
  UserStatus: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyLivePullStreamTask请求参数结构体
 */
export interface ModifyLivePullStreamTaskRequest {
  /**
   * 任务Id。
   */
  TaskId: string
  /**
   * 操作人姓名。
   */
  Operator: string
  /**
   * 拉流源url列表。
SourceType为直播（PullLivePushLive）只可以填1个，
SourceType为点播（PullVodPushLive）可以填多个，上限30个。
   */
  SourceUrls?: Array<string>
  /**
   * 开始时间。
使用UTC格式时间，
例如：2019-01-08T10:00:00Z。
注意：北京时间值为 UTC 时间值 + 8 小时，格式按照 ISO 8601 标准表示，详见 [ISO 日期格式说明](https://cloud.tencent.com/document/product/267/38543#I)。
   */
  StartTime?: string
  /**
   * 结束时间，注意：
1. 结束时间必须大于开始时间；
2. 结束时间和开始时间必须大于当前时间；
3. 结束时间 和 开始时间 间隔必须小于七天。
使用UTC格式时间，
例如：2019-01-08T10:00:00Z。
注意：北京时间值为 UTC 时间值 + 8 小时，格式按照 ISO 8601 标准表示，详见 [ISO 日期格式说明](https://cloud.tencent.com/document/product/267/38543#I)。
   */
  EndTime?: string
  /**
   * 点播拉流转推循环次数。
-1：无限循环，直到任务结束。
0：不循环。
>0：具体循环次数。次数和时间以先结束的为准。
注意：拉流源为点播，该配置生效。
   */
  VodLoopTimes?: number
  /**
   * 点播更新SourceUrls后的播放方式：
ImmediateNewSource：立即从更新的拉流源开始播放；
ContinueBreakPoint：从上次断流url源的断点处继续，结束后再使用新的拉流源。
注意：拉流源为点播，该配置生效。
   */
  VodRefreshType?: string
  /**
   * 任务状态：
enable - 启用，
pause - 暂停。
   */
  Status?: string
  /**
   * 选择需要回调的事件（不填则回调全部）：
TaskStart：任务启动回调，
TaskExit：任务停止回调，
VodSourceFileStart：从点播源文件开始拉流回调，
VodSourceFileFinish：从点播源文件拉流结束回调，
ResetTaskConfig：任务更新回调。
   */
  CallbackEvents?: Array<string>
  /**
   * 自定义回调地址。
相关事件会回调到该地址。
   */
  CallbackUrl?: string
  /**
   * 指定播放文件索引。
注意： 从1开始，不大于SourceUrls中文件个数。
   */
  FileIndex?: number
  /**
   * 指定播放文件偏移。
注意：
1. 单位：秒，配合FileIndex使用。
   */
  OffsetTime?: number
  /**
   * 指定任务 ID 修改任务。

注意：该自定义任务 ID 只有在创建任务时指定了，才可在此处修改时使用。否则请使用系统返回的任务 ID。
   */
  SpecifyTaskId?: string
  /**
   * 目标 Url。
换目标地址，会断流重推到新地址。
   */
  ToUrl?: string
  /**
   * 任务备注。
   */
  Comment?: string
  /**
   * 备源的类型：
PullLivePushLive -直播，
PullVodPushLive -点播。
注意：
1. 仅当主源类型为直播源时，备源才会生效。
2. 将该参数置为空，则可将任务去除备源信息。
3. 主直播源拉流中断时，自动使用备源进行拉流。
4. 如果备源为点播文件时，则每次轮播完点播文件就检查主源是否恢复，如果主源恢复则自动切回到主源，否则继续拉备源。
   */
  BackupSourceType?: string
  /**
   * 备源 URL。
只允许填一个备源 URL
   */
  BackupSourceUrl?: string
  /**
   * 水印信息列表。
注意：
1. 最多支持4个不同位置的水印。
2. 水印图片 URL 请使用合法外网可访问地址。
3. 支持的水印图片格式：png，jpg等。
4. 轮播任务修改水印后，轮播到下一个文件时新水印生效。
5. 直播源任务修改水印后，水印立即生效。
6. 清除水印时，需携带该水印列表参数，内容为空数组。
7. 暂不支持动图水印。
   */
  WatermarkList?: Array<PullPushWatermarkInfo>
  /**
   * 点播源是否启用本地推流模式，默认0，不启用。
0 - 不启用。
1 - 启用。
注意：启用本地模式后，会将源列表中的 MP4 文件进行本地下载，优先使用本地已下载文件进行推流，提高点播源推流稳定性。使用本地下载文件推流时，会产生增值费用。
   */
  VodLocalMode?: number
  /**
   * 新的目标地址。传空值，则取消该地址的推流。
传入新值，则替换原有地址。
   */
  BackupToUrl?: string
  /**
   * 点播垫片文件地址。注意：用于在主源拉不到时自动兜底到垫片文件，切到垫片文件后，每次播完垫片会尝试拉主源，如果主源恢复则自动切回主源。可根据需要的轮询检查时长来传入对应时长的垫片文件。
   */
  BackupVodUrl?: string
}

/**
 * DescribeLogDownloadList请求参数结构体
 */
export interface DescribeLogDownloadListRequest {
  /**
   * 开始时间，北京时间。
格式：yyyy-mm-dd HH:MM:SS。
注：此字段为北京时间（UTC+8时区）。
   */
  StartTime: string
  /**
   * 结束时间，北京时间。
格式：yyyy-mm-dd HH:MM:SS。
注意：结束时间 - 开始时间 <=7天。
注：此字段为北京时间（UTC+8时区）。
   */
  EndTime: string
  /**
   * 域名列表。
   */
  PlayDomains: Array<string>
  /**
   * 快直播还是标准直播，0：标准直播，1：快直播。默认为0。
   */
  IsFastLive?: number
}

/**
 * DeleteLiveWatermark返回参数结构体
 */
export interface DeleteLiveWatermarkResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DropLiveStream返回参数结构体
 */
export interface DropLiveStreamResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeLiveRecordTemplates请求参数结构体
 */
export interface DescribeLiveRecordTemplatesRequest {
  /**
   * 是否属于慢直播模板，默认：0。
0： 标准直播。
1：慢直播。
   */
  IsDelayLive?: number
}

/**
 * DescribeTimeShiftRecordDetail请求参数结构体
 */
export interface DescribeTimeShiftRecordDetailRequest {
  /**
   * 推流域名。
   */
  Domain: string
  /**
   * 推流路径。
   */
  AppName: string
  /**
   * 流名称。
   */
  StreamName: string
  /**
   * 查询范围起始时间，Unix 时间戳。
   */
  StartTime: number
  /**
   * 查询范围终止时间，Unix 时间戳。
   */
  EndTime: number
  /**
   * 推流域名所属组，没有域名组或者域名组为空字符串可不填。
   */
  DomainGroup?: string
  /**
   * 转码模板ID，转码模板ID为0可不填。
   */
  TransCodeId?: number
}

/**
 * 直播拉流任务信息。
 */
export interface PullStreamTaskInfo {
  /**
   * 拉流任务Id。
   */
  TaskId?: string
  /**
   * 拉流源的类型：
PullLivePushLive -直播，
PullVodPushLive -点播，
PullPicPushLive -图片。
   */
  SourceType?: string
  /**
   * 拉流源url列表。
SourceType为直播（PullLiveToLive）只可以填1个，
SourceType为点播（PullVodToLive）可以填多个，上限10个。
   */
  SourceUrls?: Array<string>
  /**
   * 推流域名。
将拉到的源推到该域名。
   */
  DomainName?: string
  /**
   * 推流路径。
将拉到的源推到该路径。
   */
  AppName?: string
  /**
   * 流名称。
将拉到的源推到该流名称。
   */
  StreamName?: string
  /**
   * 推流参数。
推流携带的自定义参数。
   */
  PushArgs?: string
  /**
   * 开始时间。
使用UTC格式时间，
例如：2019-01-08T10:00:00Z。
注意：北京时间值为 UTC 时间值 + 8 小时，格式按照 ISO 8601 标准表示，详见 [ISO 日期格式说明](https://cloud.tencent.com/document/product/266/11732#I)。
   */
  StartTime?: string
  /**
   * 结束时间，注意：
1. 结束时间必须大于开始时间；
2. 结束时间和开始时间必须大于当前时间；
3. 结束时间 和 开始时间 间隔必须小于七天。
使用UTC格式时间，
例如：2019-01-08T10:00:00Z。
注意：北京时间值为 UTC 时间值 + 8 小时，格式按照 ISO 8601 标准表示，详见 [ISO 日期格式说明](https://cloud.tencent.com/document/product/266/11732#I)。
   */
  EndTime?: string
  /**
   * 任务创建所在地域：
ap-beijing - 华北地区(北京)，
ap-shanghai -华东地区(上海)，
ap-guangzhou -华南地区(广州)，
ap-mumbai - 印度，
ap-hongkong - 香港，
eu-frankfurt - 德国，
ap-seoul - 韩国，
ap-bangkok - 泰国，
ap-singapore - 新加坡，
na-siliconvalley - 美西，
na-ashburn - 美东，
ap-tokyo - 日本。
   */
  Region?: string
  /**
   * 点播拉流转推循环次数。
-1：无限循环，直到任务结束。
0：不循环。
>0：具体循环次数。次数和时间以先结束的为准。
注意：拉流源为点播，该配置生效。
   */
  VodLoopTimes?: number
  /**
   * 点播更新SourceUrls后的播放方式：
ImmediateNewSource：立即从更新的拉流源开始播放；
ContinueBreakPoint：从上次断流url源的断点处继续，结束后再使用新的拉流源。

注意：拉流源为点播，该配置生效。
   */
  VodRefreshType?: string
  /**
   * 任务创建时间。
使用UTC格式时间，
例如：2019-01-08T10:00:00Z。
注意：北京时间值为 UTC 时间值 + 8 小时，格式按照 ISO 8601 标准表示，详见 [ISO 日期格式说明](https://cloud.tencent.com/document/product/266/11732#I)。
   */
  CreateTime?: string
  /**
   * 任务更新时间。
使用UTC格式时间，
例如：2019-01-08T10:00:00Z。
注意：北京时间值为 UTC 时间值 + 8 小时，格式按照 ISO 8601 标准表示，详见 [ISO 日期格式说明](https://cloud.tencent.com/document/product/266/11732#I)。
   */
  UpdateTime?: string
  /**
   * 创建任务的操作者。
   */
  CreateBy?: string
  /**
   * 最后更新任务的操作者。
   */
  UpdateBy?: string
  /**
   * 回调地址。
   */
  CallbackUrl?: string
  /**
   * 选择需要回调的事件：
TaskStart：任务启动回调，
TaskExit：任务停止回调，
VodSourceFileStart：从点播源文件开始拉流回调，
VodSourceFileFinish：从点播源文件拉流结束回调，
ResetTaskConfig：任务更新回调。
   */
  CallbackEvents?: Array<string>
  /**
   * 注意：该信息暂不返回。
最后一次回调信息。
   */
  CallbackInfo?: string
  /**
   * 注意：该信息暂不返回。
错误信息。
   */
  ErrorInfo?: string
  /**
   * 状态。
enable：生效中。
pause：暂停中。
   */
  Status?: string
  /**
   * 注意：该信息仅在查询单个任务时返回。
任务最新拉流信息。
包含：源 url，偏移时间，上报时间。
   */
  RecentPullInfo?: RecentPullInfo
  /**
   * 任务备注信息。
   */
  Comment?: string
  /**
   * 备源类型：
PullLivePushLive -直播，
PullVodPushLive -点播。
注意：此字段可能返回 null，表示取不到有效值。
   */
  BackupSourceType?: string
  /**
   * 备源URL。
注意：此字段可能返回 null，表示取不到有效值。
   */
  BackupSourceUrl?: string
  /**
   * 水印信息列表。
注意：此字段可能返回 null，表示取不到有效值。
   */
  WatermarkList?: Array<PullPushWatermarkInfo>
  /**
   * 点播源是否启用本地推流模式，默认0，不启用。
0 - 不启用。
1 - 启用。
注意：此字段可能返回 null，表示取不到有效值。
   */
  VodLocalMode?: number
  /**
   * 录制模板 ID。
注意：此字段可能返回 null，表示取不到有效值。
   */
  RecordTemplateId?: string
  /**
   * 新增的推流地址。用于单任务推两路场景。
注意：此字段可能返回 null，表示取不到有效值。
   */
  BackupToUrl?: string
  /**
   * 直播转码模板。
注意：此字段可能返回 null，表示取不到有效值。
   */
  TranscodeTemplateName?: string
}

/**
 * CreateLiveTimeShiftTemplate返回参数结构体
 */
export interface CreateLiveTimeShiftTemplateResponse {
  /**
   * 模板Id。
   */
  TemplateId?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteCasterOutputInfo返回参数结构体
 */
export interface DeleteCasterOutputInfoResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeLivePadRules请求参数结构体
 */
export type DescribeLivePadRulesRequest = null

/**
 * DescribePullStreamConfigs返回参数结构体
 */
export interface DescribePullStreamConfigsResponse {
  /**
   * 拉流配置。
   */
  PullStreamConfigs: Array<PullStreamConfig>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeTranscodeTaskNum请求参数结构体
 */
export interface DescribeTranscodeTaskNumRequest {
  /**
   * 起始时间，格式：yyyy-mm-dd HH:MM:SS。
   */
  StartTime: string
  /**
   * 结束时间，格式：yyyy-mm-dd HH:MM:SS。
   */
  EndTime: string
  /**
   * 推流域名列表，不填表示总体数据。
   */
  PushDomains?: Array<string>
}

/**
 * DescribeLiveCallbackRules返回参数结构体
 */
export interface DescribeLiveCallbackRulesResponse {
  /**
   * 规则信息列表。
   */
  Rules?: Array<CallBackRuleInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateRecordTask返回参数结构体
 */
export interface CreateRecordTaskResponse {
  /**
   * 任务ID，全局唯一标识录制任务。返回TaskId字段说明录制任务创建成功。
   */
  TaskId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ResumeDelayLiveStream返回参数结构体
 */
export interface ResumeDelayLiveStreamResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeLiveDomainCertBindings请求参数结构体
 */
export interface DescribeLiveDomainCertBindingsRequest {
  /**
   * 要搜索的域名字符串。
   */
  DomainSearch?: string
  /**
   * 记录行的位置，从0开始。默认0。
   */
  Offset?: number
  /**
   * 记录行的最大数目。默认50。
若不传，则最多返回50条数据。
   */
  Length?: number
  /**
   * 要查询的单个域名。
   */
  DomainName?: string
  /**
   * 可取值：
ExpireTimeAsc：证书过期时间升序。
ExpireTimeDesc：证书过期时间降序。
   */
  OrderBy?: string
}

/**
 * CreateLiveRecordTemplate请求参数结构体
 */
export interface CreateLiveRecordTemplateRequest {
  /**
   * 模板名。仅支持中文、英文、数字、_、-。
   */
  TemplateName: string
  /**
   * 描述信息。
   */
  Description?: string
  /**
   * Flv录制参数，开启Flv录制时设置。
   */
  FlvParam?: RecordParam
  /**
   * Hls录制参数，开启hls录制时设置。
   */
  HlsParam?: RecordParam
  /**
   * Mp4录制参数，开启Mp4录制时设置。
   */
  Mp4Param?: RecordParam
  /**
   * Aac录制参数，开启Aac录制时设置。
   */
  AacParam?: RecordParam
  /**
   * 直播类型，默认 0。
0：普通直播，
1：慢直播。
   */
  IsDelayLive?: number
  /**
   * HLS专属录制参数。
   */
  HlsSpecialParam?: HlsSpecialParam
  /**
   * Mp3录制参数，开启Mp3录制时设置。
   */
  Mp3Param?: RecordParam
  /**
   * 是否存储至 cos，值为 1 时表示存储至 cos。
   */
  CosStore?: number
  /**
   * 是否去除水印，类型为慢直播时此参数无效。
如果为false，则录制水印流或转码流；如果为true，则录制原始流。
   */
  RemoveWatermark?: boolean
  /**
   * FLV 录制特殊参数。
   */
  FlvSpecialParam?: FlvSpecialParam
}

/**
 * AddCasterOutputInfo返回参数结构体
 */
export interface AddCasterOutputInfoResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeHttpStatusInfoList返回参数结构体
 */
export interface DescribeHttpStatusInfoListResponse {
  /**
   * 播放状态码列表。
   */
  DataInfoList?: Array<HttpStatusData>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeUploadStreamNums请求参数结构体
 */
export interface DescribeUploadStreamNumsRequest {
  /**
   * 起始时间点，接口查询支持两种时间格式：
1）YYYY-MM-DDThh:mm:ssZ：UTC时间格式，详见IOS日期格式说明文档: https://cloud.tencent.com/document/product/266/11732#I
2）YYYY-MM-DD hh:mm:ss：使用此格式时，默认代表北京时间。
   */
  StartTime: string
  /**
   * 结束时间点，接口查询支持两种时间格式：
1）YYYY-MM-DDThh:mm:ssZ：UTC时间格式，详见IOS日期格式说明文档: https://cloud.tencent.com/document/product/266/11732#I
2）YYYY-MM-DD hh:mm:ss：使用此格式时，默认代表北京时间。
起始和结束时间跨度不支持超过31天。支持最近31天的数据查询
   */
  EndTime: string
  /**
   * 直播域名，若不填，表示总体数据。
   */
  Domains?: Array<string>
  /**
   * 数据粒度，支持如下粒度：
5：5分钟粒度，（跨度不支持超过1天），
1440：天粒度（跨度不支持超过一个月）。
默认值：5。
   */
  Granularity?: number
}

/**
 * CreateLiveSnapshotRule请求参数结构体
 */
export interface CreateLiveSnapshotRuleRequest {
  /**
   * 推流域名。
   */
  DomainName: string
  /**
   * 模板 ID。
   */
  TemplateId: number
  /**
   * 推流路径，与推流和播放地址中的 AppName 保持一致，默认为 live。
   */
  AppName?: string
  /**
   * 流名称。
注：如果本参数设置为非空字符串，规则将只对此推流起作用。
   */
  StreamName?: string
}

/**
 * 带宽和流量信息。
 */
export interface BillDataInfo {
  /**
   * 时间点，
使用UTC格式时间，
例如：2019-01-08T10:00:00Z。
注意：北京时间值为 UTC 时间值 + 8 小时，格式按照 ISO 8601 标准表示，详见 [ISO 日期格式说明](https://cloud.tencent.com/document/product/266/11732#I)。
   */
  Time: string
  /**
   * 带宽，单位是 Mbps。
   */
  Bandwidth: number
  /**
   * 流量，单位是 MB。
   */
  Flux: number
  /**
   * 峰值时间点，
使用UTC格式时间，
例如：2019-01-08T10:00:00Z。
注意：北京时间值为 UTC 时间值 + 8 小时，格式按照 ISO 8601 标准表示，详见 [ISO 日期格式说明](https://cloud.tencent.com/document/product/266/11732#I)。
原始数据为5分钟粒度，如果查询小时和天粒度数据，则返回对应粒度内的带宽峰值时间点。
   */
  PeakTime: string
}

/**
 * EnableLiveDomain返回参数结构体
 */
export interface EnableLiveDomainResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteCasterMarkPicInfo返回参数结构体
 */
export interface DeleteCasterMarkPicInfoResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * StopCasterPgm请求参数结构体
 */
export interface StopCasterPgmRequest {
  /**
   * 导播台ID。
   */
  CasterId: number
}

/**
 * CreateLiveStreamMonitor返回参数结构体
 */
export interface CreateLiveStreamMonitorResponse {
  /**
   * 监播任务ID。
   */
  MonitorId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeCasterLayoutInfos请求参数结构体
 */
export interface DescribeCasterLayoutInfosRequest {
  /**
   * 导播台ID。
   */
  CasterId: number
}

/**
 * AddCasterMarkPicInfo返回参数结构体
 */
export interface AddCasterMarkPicInfoResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * AddCasterInputInfo请求参数结构体
 */
export interface AddCasterInputInfoRequest {
  /**
   * 导播台ID。
   */
  CasterId: number
  /**
   * 导播台输入源详细信息。
   */
  InputInfo: CasterInputInfo
}

/**
 * ModifyLivePlayAuthKey请求参数结构体
 */
export interface ModifyLivePlayAuthKeyRequest {
  /**
   * 播放域名。
   */
  DomainName: string
  /**
   * 是否启用，0：关闭，1：启用。
不传表示不修改当前值。
   */
  Enable?: number
  /**
   * 鉴权key。
不传表示不修改当前值。
   */
  AuthKey?: string
  /**
   * 有效时间，单位：秒。
不传表示不修改当前值。
   */
  AuthDelta?: number
  /**
   * 鉴权备用key。
不传表示不修改当前值。
   */
  AuthBackKey?: string
}

/**
 * DescribeLiveDelayInfoList请求参数结构体
 */
export type DescribeLiveDelayInfoListRequest = null

/**
 * DescribeLiveTranscodeTemplate返回参数结构体
 */
export interface DescribeLiveTranscodeTemplateResponse {
  /**
   * 模板信息。
   */
  Template?: TemplateInfo
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 推流域名日志信息。
 */
export interface PushLogInfo {
  /**
   * 日志名称。
   */
  LogName: string
  /**
   * 日志下载地址。
   */
  LogUrl: string
  /**
   * 日志时间。UTC 格式，例如：2018-11-29T19:00:00Z。
注意：
1. 北京时间值为 UTC 时间值 + 8 小时，格式按照 ISO 8601 标准表示，详见 [ISO 日期格式说明](https://cloud.tencent.com/document/product/266/11732#I)。
   */
  LogTime: string
  /**
   * 文件大小，单位字节。
   */
  FileSize: number
}

/**
 * DescribeScreenShotSheetNumList返回参数结构体
 */
export interface DescribeScreenShotSheetNumListResponse {
  /**
   * 数据信息列表。
   */
  DataInfoList?: Array<TimeValue>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyLivePullStreamTask返回参数结构体
 */
export interface ModifyLivePullStreamTaskResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 导播台文字水印配置。
 */
export interface CasterMarkWordInfo {
  /**
   * 文字水印Index。
   */
  MarkWordIndex: number
  /**
   * 文字水印内容。
注意：此字段可能返回 null，表示取不到有效值。
   */
  MarkWordText?: string
  /**
   * 文字水印的字号。
范围[16, 60]
注意：此字段可能返回 null，表示取不到有效值。
   */
  MarkWordFontSize?: number
  /**
   * 文字水印的颜色，值为HEX颜色代码
注意：此字段可能返回 null，表示取不到有效值。
   */
  MarkWordFontColor?: string
  /**
   * 文字水印的字体类型。
范围[1,2]。
1. 宋体
2. 黑体
注意：此字段可能返回 null，表示取不到有效值。
   */
  MarkWordFontType?: number
  /**
   * 文字水印的x坐标位置，单位百分比。
范围[0.0, 1.0]

注意：此字段可能返回 null，表示取不到有效值。
   */
  MarkWordLocationX?: number
  /**
   * 文字水印的Y坐标位置，单位百分比。
范围[0.0, 1.0]

注意：此字段可能返回 null，表示取不到有效值。
   */
  MarkWordLocationY?: number
  /**
   * 是否开启文字跑马灯功能。
默认为false。
注意：此字段可能返回 null，表示取不到有效值。
   */
  MarkWordRollEnable?: boolean
  /**
   * 跑马灯文字显示一遍的时间，单位为秒。
默认为5s。
范围[5, 600]。
注意：此字段可能返回 null，表示取不到有效值。
   */
  MarkWordRollOnceTime?: number
  /**
   * 跑马灯文字的方向。
默认值为0。
范围[0,1]。
0 从左到右
1 从右到左
注意：此字段可能返回 null，表示取不到有效值。
   */
  MarkWordRollDirection?: number
  /**
   * 跑马灯文字显示的起始x坐标，单位百分比。
范围[0.0, 1.0]
注意：此字段可能返回 null，表示取不到有效值。
   */
  MarkWordRollStartLocationX?: number
  /**
   * 跑马灯文字显示的截止x坐标，单位百分比。
范围[0.0, 1.0]
注意：此字段可能返回 null，表示取不到有效值。
   */
  MarkWordRollEndLocationX?: number
}

/**
 * DescribeLiveSnapshotRules返回参数结构体
 */
export interface DescribeLiveSnapshotRulesResponse {
  /**
   * 规则列表。
   */
  Rules: Array<RuleInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteCaster请求参数结构体
 */
export interface DeleteCasterRequest {
  /**
   * 待删除的导播台ID
   */
  CasterId: number
}

/**
 * DescribeLiveDomainCert返回参数结构体
 */
export interface DescribeLiveDomainCertResponse {
  /**
   * 证书信息。
   */
  DomainCertInfo?: DomainCertInfo
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * AuthenticateDomainOwner返回参数结构体
 */
export interface AuthenticateDomainOwnerResponse {
  /**
   * 验证内容。
VerifyType 传 dnsCheck 时，为要配的 TXT 记录值。
VerifyType 传 fileCheck 时，为文件内容。
   */
  Content?: string
  /**
   * 域名验证状态。
>=0 为已验证归属。
<0 未验证归属权。
   */
  Status?: number
  /**
   * DomainName 对应的主域名。
同一主域名下的所有域名只需成功验证一次，后续均无需再验证。
   */
  MainDomain?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteLiveTranscodeRule请求参数结构体
 */
export interface DeleteLiveTranscodeRuleRequest {
  /**
   * 播放域名。
   */
  DomainName: string
  /**
   * 推流路径，与推流和播放地址中的AppName保持一致，默认为 live。
   */
  AppName: string
  /**
   * 流名称。
   */
  StreamName: string
  /**
   * 模板ID。
   */
  TemplateId: number
}

/**
 * AddLiveWatermark返回参数结构体
 */
export interface AddLiveWatermarkResponse {
  /**
   * 水印ID。
   */
  WatermarkId?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * AddCasterInputInfo返回参数结构体
 */
export interface AddCasterInputInfoResponse {
  /**
   * rtmp协议输入源播放地址。
注：仅可作为预览使用，不可分发。
   */
  InputPlayUrl?: string
  /**
   * webrtc协议播放地址。
注：
1. 需配合使用腾讯云快直播播放SDK使用才可正常播放。
2. 仅作为预览使用，不可分发。
   */
  InputWebRTCPlayUrl?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ForbidLiveStream请求参数结构体
 */
export interface ForbidLiveStreamRequest {
  /**
   * 推流路径，与推流和播放地址中的AppName保持一致，默认为 live。
   */
  AppName: string
  /**
   * 您的推流域名。
   */
  DomainName: string
  /**
   * 流名称。
   */
  StreamName: string
  /**
   * 恢复流的时间。UTC 格式，例如：2018-11-29T19:00:00Z。
注意：
1. 默认禁推7天，且最长支持禁推90天。
2. 北京时间值为 UTC 时间值 + 8 小时，格式按照 ISO 8601 标准表示，详见 [ISO 日期格式说明](https://cloud.tencent.com/document/product/267/38543#I)。
   */
  ResumeTime?: string
  /**
   * 禁推原因。
注明：请务必填写禁推原因，防止误操作。
长度限制：2048字节。
   */
  Reason?: string
}

/**
 * ModifyCasterMarkWordInfo请求参数结构体
 */
export interface ModifyCasterMarkWordInfoRequest {
  /**
   * 导播台ID。
   */
  CasterId: number
  /**
   * 修改的文本配置。
   */
  MarkWordInfo: CasterMarkWordInfo
}

/**
 * DescribeConcurrentRecordStreamNum返回参数结构体
 */
export interface DescribeConcurrentRecordStreamNumResponse {
  /**
   * 统计信息列表。
   */
  DataInfoList?: Array<ConcurrentRecordStreamNum>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteLiveRecordTemplate返回参数结构体
 */
export interface DeleteLiveRecordTemplateResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 导播台推流信息。
当导播台主监启动后，系统将自动将主监推流到腾讯云和其他第三方平台。
 */
export interface CasterOutputInfo {
  /**
   * 推流信息Index。
当OutputType为1（表示推流到腾讯云直播）时，该值固定为0。
范围[0,10]。
   */
  OutputIndex: number
  /**
   * rtmp协议推流地址。
最大允许长度512字符。
   */
  OutputUrl?: string
  /**
   * 描述信息。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Description?: string
  /**
   * 推流到腾讯云直播源站时，使用的流ID。
仅当OutputType为1时生效。
最大允许128字符。
注意：此字段可能返回 null，表示取不到有效值。
   */
  OutputStreamId?: string
  /**
   * 推流类型。
范围[1,2]
1. 推送到腾讯云直播源站。
2. 推送到第三方源站。
   */
  OutputType?: number
  /**
   * 推到腾讯云直播源站时，使用的域名。
最大允许128字符，且域名需属于当前账号绑定的云直播推流域名。
仅在OutputType为1时生效。
注意：此字段可能返回 null，表示取不到有效值。
   */
  OutputDomainName?: string
  /**
   * 推到腾讯云直播源站时，使用的AppName。
最大允许64字符。
仅在OutputType为1时生效。
注意：此字段可能返回 null，表示取不到有效值。
   */
  OutputAppName?: string
  /**
   * 推到腾讯云直播源站时需要添加的推流参数。
最大允许长度256字符。
仅在OutputType为1时生效。
注意：此字段可能返回 null，表示取不到有效值。
   */
  OutputParam?: string
}

/**
 * DescribePullStreamConfigs请求参数结构体
 */
export interface DescribePullStreamConfigsRequest {
  /**
   * 配置 ID。
获取途径：从 CreatePullStreamConfig 接口返回值获取。
   */
  ConfigId?: string
}

/**
 * DescribePlayErrorCodeSumInfoList返回参数结构体
 */
export interface DescribePlayErrorCodeSumInfoListResponse {
  /**
   * 分省份分运营商错误码为2或3或4或5开头的状态码数据信息。
   */
  ProIspInfoList?: Array<ProIspPlayCodeDataInfo>
  /**
   * 所有状态码的加和的次数。
   */
  TotalCodeAll?: number
  /**
   * 状态码为4开头的总次数。
   */
  TotalCode4xx?: number
  /**
   * 状态码为5开头的总次数。
   */
  TotalCode5xx?: number
  /**
   * 各状态码的总次数。
   */
  TotalCodeList?: Array<PlayCodeTotalInfo>
  /**
   * 页号。
   */
  PageNum?: number
  /**
   * 每页大小。
   */
  PageSize?: number
  /**
   * 总页数。
   */
  TotalPage?: number
  /**
   * 总记录数。
   */
  TotalNum?: number
  /**
   * 状态码为2开头的总次数。
   */
  TotalCode2xx?: number
  /**
   * 状态码为3开头的总次数。
   */
  TotalCode3xx?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeCasterList请求参数结构体
 */
export type DescribeCasterListRequest = null

/**
 * UnBindLiveDomainCert请求参数结构体
 */
export interface UnBindLiveDomainCertRequest {
  /**
   * 播放域名。
   */
  DomainName: string
  /**
   * 枚举值：
gray: 解绑灰度规则
formal(默认): 解绑正式规则

不传则为formal
   */
  Type?: string
}

/**
 * 某个时间点的指标的数值是多少。
 */
export interface TimeValue {
  /**
   * UTC 时间，时间格式：yyyy-mm-ddTHH:MM:SSZ。
   */
  Time: string
  /**
   * 数值。
   */
  Num: number
}

/**
 * CreateLiveRecord返回参数结构体
 */
export interface CreateLiveRecordResponse {
  /**
   * 任务 ID，全局唯一标识录制任务。
   */
  TaskId?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * UpdateLiveWatermark返回参数结构体
 */
export interface UpdateLiveWatermarkResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyLiveSnapshotTemplate请求参数结构体
 */
export interface ModifyLiveSnapshotTemplateRequest {
  /**
   * 模板 ID。
   */
  TemplateId: number
  /**
   * Cos 应用 ID。
   **注：此参数现在须必选。**
   */
  CosAppId: number
  /**
   * Cos Bucket名称。
注：CosBucket参数值不能包含-[appid] 部分。
**注：此参数现在须必选。**
   */
  CosBucket: string
  /**
   * Cos 地域。
   **注：此参数现在须必选。**
   */
  CosRegion: string
  /**
   * 模板名称。
长度上限：255字节。
   */
  TemplateName?: string
  /**
   * 描述信息。
长度上限：1024字节。
   */
  Description?: string
  /**
   * 截图间隔，单位s，默认10s。
范围： 5s ~ 300s。
   */
  SnapshotInterval?: number
  /**
   * 截图宽度。默认：0（原始宽）。
   */
  Width?: number
  /**
   * 截图高度。默认：0（原始高）。
   */
  Height?: number
  /**
   * 是否开启鉴黄，默认 0 。
0：不开启。
1：开启。
   */
  PornFlag?: number
  /**
   * Cos Bucket文件夹前缀。
   */
  CosPrefix?: string
  /**
   * Cos 文件名称。
   */
  CosFileName?: string
}

/**
 * DescribeLiveRecordTemplate返回参数结构体
 */
export interface DescribeLiveRecordTemplateResponse {
  /**
   * 录制模板信息。
   */
  Template?: RecordTemplateInfo
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 海外分区直播带宽出参，分区信息
 */
export interface BillAreaInfo {
  /**
   * 大区名称。
   */
  Name: string
  /**
   * 国家或地区明细数据。
   */
  Countrys: Array<BillCountryInfo>
}

/**
 * 用作批量绑定域名和证书。
 */
export interface LiveCertDomainInfo {
  /**
   * 域名。
   */
  DomainName: string
  /**
   * 是否启用域名的https规则。
1：启用
0：禁用
-1：保持不变
   */
  Status: number
}

/**
 * DescribeLiveTimeShiftRules请求参数结构体
 */
export type DescribeLiveTimeShiftRulesRequest = null

/**
 * ForbidLiveDomain返回参数结构体
 */
export interface ForbidLiveDomainResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeLiveTimeShiftBillInfoList请求参数结构体
 */
export interface DescribeLiveTimeShiftBillInfoListRequest {
  /**
   * UTC开始时间，支持最近三个月的查询，查询时间最长跨度为一天。使用 UTC 格式时间，例如：2019-01-08T10:00:00Z。注意：北京时间值为 UTC 时间值 + 8 小时，格式按照 ISO 8601 标准表示，详见 [ISO 日期格式说明](https://cloud.tencent.com/document/product/267/38543#:~:text=I-,ISO,-%E6%97%A5%E6%9C%9F%E6%A0%BC%E5%BC%8F)。
   */
  StartTime: string
  /**
   * UTC结束时间，支持最近三个月的查询，查询时间最长跨度为一天。使用 UTC 格式时间，例如：2019-01-08T10:00:00Z。注意：北京时间值为 UTC 时间值 + 8 小时，格式按照 ISO 8601 标准表示，详见 [ISO 日期格式说明](https://cloud.tencent.com/document/product/267/38543#:~:text=I-,ISO,-%E6%97%A5%E6%9C%9F%E6%A0%BC%E5%BC%8F)。
   */
  EndTime: string
  /**
   * 推流域名列表，若不传递此参数，则表示查询总体数据。
   */
  PushDomains?: Array<string>
}

/**
 * 录制任务
 */
export interface RecordTask {
  /**
   * 录制任务ID。
   */
  TaskId: string
  /**
   * 推流域名。
   */
  DomainName: string
  /**
   * 推流路径。
   */
  AppName: string
  /**
   * 流名称。
   */
  StreamName: string
  /**
   * 任务开始时间，Unix时间戳。
   */
  StartTime: number
  /**
   * 任务结束时间，Unix时间戳。
   */
  EndTime: number
  /**
   * 录制模板ID。
   */
  TemplateId: number
  /**
   * 调用 StopRecordTask 停止任务时间，Unix时间戳。值为0表示未曾调用接口停止任务。
   */
  Stopped: number
}

/**
 * ModifyCaster请求参数结构体
 */
export interface ModifyCasterRequest {
  /**
   * 导播台ID
   */
  CasterId: number
  /**
   * 导播台名称
   */
  CasterName?: string
  /**
   * 导播台的描述
最大允许长度256
   */
  Description?: string
  /**
   * 录制模板id。
默认为0。
当使用直播录制功能时，可将使用的录制模版填入。
该接口仅保存字段，不涉及任何录制功能。
   */
  RecordTemplateId?: number
  /**
   * 录制状态，当调用录制接口后，可通过该字段保存录制状态。
0：未录制 
1：录制中
该接口仅保存字段，不涉及任何录制处理。
   */
  RecordStatus?: number
  /**
   * 导播台的过期时间戳。值为-1或unix时间戳。
默认值为-1。 
当值为-1时，表示该导播台永不过期。 
当值为正常unix时间戳时，导播台将在该时间过期。
导播台过期后，预监与主监画面将自动停止，转推自动停止。 
点播、直播url将停止转拉，推流url需自行停止推流。
   */
  ExpireTime?: number
  /**
   * 导播台延时播放时间，单位为秒。 
默认为0，最大支持300秒
   */
  DelayTime?: number
  /**
   * 导播台转场类型。 
默认为空。 
允许使用通过DescribeCasterTransitionTypes接口中查询到的转场类型。
   */
  TransitionType?: string
  /**
   * 导播台主监输出的宽度，单位为像素。 
默认为1280，最大允许4096。
   */
  PgmWidth?: number
  /**
   * 导播台主监输出的高度，单位为像素。 
默认为720，最大允许2160。
   */
  PgmHeight?: number
  /**
   * 导播台主监输出的帧率。 
默认为0，表示随源输出。 最大支持60。
   */
  PgmFps?: number
  /**
   * 导播台主监输出的码率，单位为kbps。 
默认为0，表示随源的码率输出。 
最大允许10000kbps。
   */
  PgmBitRate?: number
  /**
   * 导播台的计费类型。 
0 通用型 
1 播单型。 
注： 本参数暂无作用。
   */
  FeeType?: number
  /**
   * 录制接口返回的taskid
注：该接口只做字段保存，不涉及录制操作。
   */
  RecordTaskId?: string
  /**
   * 导播台主监输出的音频码率，单位为kbps。 
可选项：[0, 128, 192, 256] 
默认值为0，表示随源的音频码率输出。
   */
  PgmAudioBitRate?: number
}

/**
 * 某条流的推流质量详情数据。
 */
export interface PushQualityData {
  /**
   * 数据时间，使用UTC格式时间，
例如：2019-01-08T10:00:00Z。
注意：北京时间值为 UTC 时间值 + 8 小时，格式按照 ISO 8601 标准表示，详见 [ISO 日期格式说明](https://cloud.tencent.com/document/product/266/11732#I)。
   */
  Time: string
  /**
   * 推流域名。
   */
  PushDomain: string
  /**
   * 推流路径。
   */
  AppName: string
  /**
   * 推流客户端 IP。
   */
  ClientIp: string
  /**
   * 开始推流时间，格式: %Y-%m-%d %H:%M:%S.%ms，精确到毫秒级。
   */
  BeginPushTime: string
  /**
   * 分辨率信息。
   */
  Resolution: string
  /**
   * 视频编码格式。
   */
  VCodec: string
  /**
   * 音频编码格式。
   */
  ACodec: string
  /**
   * 推流序列号，用来唯一的标志一次推流。
   */
  Sequence: string
  /**
   * 视频帧率。
   */
  VideoFps: number
  /**
   * 视频码率，单位: bps。
   */
  VideoRate: number
  /**
   * 音频帧率。
   */
  AudioFps: number
  /**
   * 音频码率，单位: bps。
   */
  AudioRate: number
  /**
   * 本地流逝时间，单位: ms，音视频流逝时间与本地流逝时间的差距越大表示推流质量越差，上行卡顿越严重。
   */
  LocalTs: number
  /**
   * 视频流逝时间，单位: ms。
   */
  VideoTs: number
  /**
   * 音频流逝时间，单位: ms。
   */
  AudioTs: number
  /**
   * metadata 中的视频码率，单位: kbps。
   */
  MetaVideoRate: number
  /**
   * metadata 中的音频码率，单位: kbps。
   */
  MetaAudioRate: number
  /**
   * metadata 中的帧率。
   */
  MateFps: number
  /**
   * 推流参数
   */
  StreamParam: string
  /**
   * 带宽，单位Mbps。
   */
  Bandwidth: number
  /**
   * 流量，单位MB。
   */
  Flux: number
  /**
   * 推流服务端 IP。
注意：此字段可能返回 null，表示取不到有效值。
   */
  ServerIp: string
}

/**
 * DescribeLiveCert请求参数结构体
 */
export interface DescribeLiveCertRequest {
  /**
   * DescribeLiveCerts接口获取到的证书Id。
   */
  CertId: number
}

/**
 * DeleteCasterLayoutInfo请求参数结构体
 */
export interface DeleteCasterLayoutInfoRequest {
  /**
   * 导播台ID。
   */
  CasterId: number
  /**
   * 要删除的布局Index。
注：待删除的Index对应的布局需存在。
   */
  LayoutIndex: number
}

/**
 * ModifyCasterMarkPicInfo返回参数结构体
 */
export interface ModifyCasterMarkPicInfoResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 播放汇总统计信息。
 */
export interface PlaySumStatInfo {
  /**
   * 域名或流 ID。
   */
  Name: string
  /**
   * 平均下载速度，
单位: MB/s。
计算公式: 每分钟的下载速度求平均值。
   */
  AvgFluxPerSecond: number
  /**
   * 总流量，单位: MB。
   */
  TotalFlux: number
  /**
   * 总请求数。
   */
  TotalRequest: number
}

/**
 * DescribeDeliverBandwidthList请求参数结构体
 */
export interface DescribeDeliverBandwidthListRequest {
  /**
   * 起始时间点，接口查询支持两种时间格式：
1）YYYY-MM-DDThh:mm:ssZ：UTC时间格式，详见IOS日期格式说明文档: https://cloud.tencent.com/document/product/266/11732#I
2）YYYY-MM-DD hh:mm:ss：使用此格式时，默认代表北京时间。
   */
  StartTime: string
  /**
   * 结束时间点，接口查询支持两种时间格式：
1）YYYY-MM-DDThh:mm:ssZ：UTC时间格式，详见IOS日期格式说明文档: https://cloud.tencent.com/document/product/266/11732#I
2）YYYY-MM-DD hh:mm:ss：使用此格式时，默认代表北京时间。
支持最近三个月的数据查询，时间跨度最大是1个月。
   */
  EndTime: string
}

/**
 * 直播域名Referer黑白名单配置
 */
export interface RefererAuthConfig {
  /**
   * 域名。
   */
  DomainName: string
  /**
   * 是否启用，0：关闭，1：启用。
   */
  Enable: number
  /**
   * 名单类型，0：黑名单，1：白名单。
   */
  Type: number
  /**
   * 是否允许空Referer，0：不允许，1：允许。
   */
  AllowEmpty: number
  /**
   * 名单列表，以分号(;)分隔。
   */
  Rules: string
}

/**
 * 转码详细信息。
 */
export interface TranscodeDetailInfo {
  /**
   * 流名称。
   */
  StreamName?: string
  /**
   * 开始时间（北京时间），格式：yyyy-mm-dd HH:MM。
   */
  StartTime?: string
  /**
   * 结束时间（北京时间），格式：yyyy-mm-dd HH:MM。
   */
  EndTime?: string
  /**
   * 转码时长，单位：分钟。
注意：因推流过程中可能有中断重推情况，此处时长为真实转码时长累加值，并非结束时间和开始时间的间隔。
   */
  Duration?: number
  /**
   * 编码方式，带模块，
示例：
liveprocessor_ACC:  音频转码，
liveprocessor_H264：直播转码-H264，
liveprocessor_H265： 直播转码-H265，
topspeed_H264：极速高清-H264，
topspeed_H265：极速高清-H265。
   */
  ModuleCodec?: string
  /**
   * 码率。
   */
  Bitrate?: number
  /**
   * 类型，包含：转码（Transcode），混流（MixStream），水印（WaterMark），快直播（Webrtc）。
   */
  Type?: string
  /**
   * 推流域名。
   */
  PushDomain?: string
  /**
   * 分辨率。
   */
  Resolution?: string
  /**
   * 地域：
Mainland：国内。
Overseas：海外。
   */
  MainlandOrOversea?: string
}

/**
 * DeleteCasterMarkWordInfo请求参数结构体
 */
export interface DeleteCasterMarkWordInfoRequest {
  /**
   * 导播台ID。
   */
  CasterId: number
  /**
   * 需要删除的文字水印Index。
   */
  MarkWordIndex: number
}

/**
 * ModifyLiveRecordTemplate返回参数结构体
 */
export interface ModifyLiveRecordTemplateResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * AddLiveDomain请求参数结构体
 */
export interface AddLiveDomainRequest {
  /**
   * 域名名称。
   */
  DomainName: string
  /**
   * 域名类型，
0：推流域名，
1：播放域名。
   */
  DomainType: number
  /**
   * 拉流域名类型：
1：国内，
2：全球，
3：境外。
默认值：1。
   */
  PlayType?: number
  /**
   * 是否是慢直播：
0： 普通直播，
1 ：慢直播 。
默认值： 0。
   */
  IsDelayLive?: number
  /**
   * 是否是小程序直播：
0： 标准直播，
1 ：小程序直播 。
默认值： 0。
   */
  IsMiniProgramLive?: number
  /**
   * 域名归属校验类型。
可取值（与 AuthenticateDomainOwner 接口的 VerifyType 参数一致。）：
dnsCheck ：立即验证配置 dns 的解析记录是否与待验证内容一致，成功则保存记录。
fileCheck ：立即验证 web 文件是否与待验证内容一致，成功则保存记录。
dbCheck :  检查是否已经验证成功过。
若不传默认为 dbCheck 。
   */
  VerifyOwnerType?: string
}

/**
 * 流名称列表。
 */
export interface StreamName {
  /**
   * 流名称。
   */
  StreamName: string
  /**
   * 应用名称。
   */
  AppName: string
  /**
   * 推流域名。
   */
  DomainName: string
  /**
   * 推流开始时间。
UTC格式时间，例如：2019-01-07T12:00:00Z。
   */
  StreamStartTime: string
  /**
   * 推流结束时间。
UTC格式时间，例如：2019-01-07T15:00:00Z。
   */
  StreamEndTime: string
  /**
   * 停止原因。
   */
  StopReason: string
  /**
   * 推流持续时长，单位：秒。
   */
  Duration: number
  /**
   * 主播 IP。
   */
  ClientIp: string
  /**
   * 分辨率。
   */
  Resolution: string
}

/**
 * DescribeLivePackageInfo请求参数结构体
 */
export interface DescribeLivePackageInfoRequest {
  /**
   * 包类型，可选值：
0：流量包
1：转码包
2: 连麦包。
   */
  PackageType: number
  /**
   * 排序规则:
1. BuyTimeDesc： 最新购买的排在最前面
2. BuyTimeAsc： 最老购买的排在最前面
3. ExpireTimeDesc： 最后过期的排在最前面
4. ExpireTimeAsc：最先过期的排在最前面。

注意：
1. PackageType 为 2（连麦包） 的时候，不支持 3、4 排序。
   */
  OrderBy?: string
  /**
   * 取得第几页的数据，和 PageSize 同时传递才会生效。
   */
  PageNum?: number
  /**
   * 分页大小，和 PageNum 同时传递才会生效。
取值：10 ～ 100 之间的任意整数。
   */
  PageSize?: number
}

/**
 * DescribeLiveStreamMonitorList返回参数结构体
 */
export interface DescribeLiveStreamMonitorListResponse {
  /**
   * 账号下的直播流监播任务个数。
   */
  TotalNum?: number
  /**
   * 直播流监播任务列表
   */
  LiveStreamMonitors?: Array<LiveStreamMonitorInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteLiveTimeShiftTemplate请求参数结构体
 */
export interface DeleteLiveTimeShiftTemplateRequest {
  /**
   * 模板 ID。
   */
  TemplateId: number
}

/**
 * SwitchBackupStream返回参数结构体
 */
export interface SwitchBackupStreamResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 下行播放统计指标
 */
export interface CdnPlayStatData {
  /**
   * 时间点，
使用UTC格式时间，
例如：2019-01-08T10:00:00Z。
注意：北京时间值为 UTC 时间值 + 8 小时，格式按照 ISO 8601 标准表示，详见 [ISO 日期格式说明](https://cloud.tencent.com/document/product/266/11732#I)。
   */
  Time: string
  /**
   * 带宽，单位: Mbps。
   */
  Bandwidth: number
  /**
   * 流量，单位: MB。
   */
  Flux: number
  /**
   * 新增请求数。
   */
  Request: number
  /**
   * 并发连接数。
   */
  Online: number
}

/**
 * AddLiveDomain返回参数结构体
 */
export interface AddLiveDomainResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyPullStreamConfig返回参数结构体
 */
export interface ModifyPullStreamConfigResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeProvinceIspPlayInfoList请求参数结构体
 */
export interface DescribeProvinceIspPlayInfoListRequest {
  /**
   * 起始时间点，
使用UTC格式时间，
例如：2019-01-08T10:00:00Z。
注意：北京时间值为 UTC 时间值 + 8 小时，格式按照 ISO 8601 标准表示，详见 [ISO 日期格式说明](https://cloud.tencent.com/document/product/267/38543#:~:text=I-,ISO,-%E6%97%A5%E6%9C%9F%E6%A0%BC%E5%BC%8F)。
   */
  StartTime: string
  /**
   * 结束时间点，
使用UTC格式时间，
例如：2019-01-08T10:00:00Z。
注意：北京时间值为 UTC 时间值 + 8 小时，格式按照 ISO 8601 标准表示，详见 [ISO 日期格式说明](https://cloud.tencent.com/document/product/267/38543#:~:text=I-,ISO,-%E6%97%A5%E6%9C%9F%E6%A0%BC%E5%BC%8F)。
注：EndTime 和 StartTime 只支持最近1天的数据查询。
   */
  EndTime: string
  /**
   * 支持如下粒度：
1：1分钟粒度（跨度不支持超过1天）
   */
  Granularity: number
  /**
   * 统计指标类型：
“Bandwidth”：带宽
“FluxPerSecond”：平均流量
“Flux”：流量
“Request”：请求数
“Online”：并发连接数
   */
  StatType: string
  /**
   * 播放域名列表。
   */
  PlayDomains?: Array<string>
  /**
   * 要查询的省份（地区）英文名称列表，如 Beijing。
   */
  ProvinceNames?: Array<string>
  /**
   * 要查询的运营商英文名称列表，如 China Mobile ，如果为空，查询所有运营商的数据。
   */
  IspNames?: Array<string>
  /**
   * 地域，可选值：Mainland，Oversea，China，Foreign，Global（默认值）；如果为空，查询总的数据；如果为“Mainland”，查询中国大陆的数据；如果为“Oversea”，则查询中国大陆以外的数据；如果为China，查询中国的数据（包括港澳台）；如果为Foreign，查询国外的数据（不包括港澳台）。
   */
  MainlandOrOversea?: string
  /**
   * ip类型：
“Ipv6”：Ipv6数据
如果为空，查询总的数据；
   */
  IpType?: string
}

/**
 * StartLiveStreamMonitor返回参数结构体
 */
export interface StartLiveStreamMonitorResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeLiveForbidStreamList返回参数结构体
 */
export interface DescribeLiveForbidStreamListResponse {
  /**
   * 符合条件的总个数。
   */
  TotalNum: number
  /**
   * 总页数。
   */
  TotalPage: number
  /**
   * 分页的页码。
   */
  PageNum: number
  /**
   * 每页显示的条数。
   */
  PageSize: number
  /**
   * 禁推流列表。
   */
  ForbidStreamList: Array<ForbidStreamInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateLivePadRule返回参数结构体
 */
export interface CreateLivePadRuleResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeLiveWatermark返回参数结构体
 */
export interface DescribeLiveWatermarkResponse {
  /**
   * 水印信息。
   */
  Watermark: WatermarkInfo
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeTimeShiftStreamList返回参数结构体
 */
export interface DescribeTimeShiftStreamListResponse {
  /**
   * 时间段内所有的数据量。
   */
  TotalSize?: number
  /**
   * 流列表。
   */
  StreamList?: Array<TimeShiftStreamInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeLiveStreamPushInfoList请求参数结构体
 */
export interface DescribeLiveStreamPushInfoListRequest {
  /**
   * 推流域名。
   */
  PushDomain?: string
  /**
   * 推流路径，与推流和播放地址中的AppName保持一致，默认为live。
   */
  AppName?: string
  /**
   * 页数，
范围[1,10000]，
默认值：1。
   */
  PageNum?: number
  /**
   * 每页个数，
范围：[1,1000]，
默认值： 200。
   */
  PageSize?: number
}

/**
 * ModifyCasterInputInfo返回参数结构体
 */
export interface ModifyCasterInputInfoResponse {
  /**
   * 修改输入源后的预览地址。
注：该地址仅作为预览使用，不可分发。
   */
  InputPlayUrl?: string
  /**
   * 修改后的输入源webrtc预览地址。
该地址需配合腾讯云快直播播放SDK使用。
注：该地址仅做预览使用，不可分发。
   */
  InputWebRTCPlayUrl?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeLiveForbidStreamList请求参数结构体
 */
export interface DescribeLiveForbidStreamListRequest {
  /**
   * 取得第几页，默认1。
   */
  PageNum?: number
  /**
   * 每页大小，最大100。 
取值：1~100之前的任意整数。
默认值：10。
   */
  PageSize?: number
  /**
   * 按流名称查询。
   */
  StreamName?: string
}

/**
 * 直播流监播通知策略
 */
export interface LiveStreamMonitorNotifyPolicy {
  /**
   * 通知策略类型：范围[0,1]
0:代表不使用任何通知策略
1:代表使用全局回调策略，所有事件通知到CallbackUrl。
注意：此字段可能返回 null，表示取不到有效值。
   */
  NotifyPolicyType?: number
  /**
   * 回调URL：长度[0,512]
只支持http和https类型的url。
注意：此字段可能返回 null，表示取不到有效值。
   */
  CallbackUrl?: string
}

/**
 * 直播监播任务信息。
 */
export interface LiveStreamMonitorInfo {
  /**
   * 监播任务ID。
注意：此字段可能返回 null，表示取不到有效值。
   */
  MonitorId: string
  /**
   * 监播任务名称。128字节以内。
注意：此字段可能返回 null，表示取不到有效值。
   */
  MonitorName?: string
  /**
   * 监播任务输出信息。
注意：此字段可能返回 null，表示取不到有效值。
   */
  OutputInfo?: LiveStreamMonitorOutputInfo
  /**
   * 待监播的输入流信息。
注意：此字段可能返回 null，表示取不到有效值。
   */
  InputList?: Array<LiveStreamMonitorInputInfo>
  /**
   * 监播任务状态。
0： 代表空闲
1： 代表监播中。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Status?: number
  /**
   * 上一次的启动时间，unix时间戳。
注意：此字段可能返回 null，表示取不到有效值。
   */
  StartTime?: number
  /**
   * 上一次的停止时间，unix时间戳。
注意：此字段可能返回 null，表示取不到有效值。
   */
  StopTime?: number
  /**
   * 监播任务创建时间，unix时间戳
注意：此字段可能返回 null，表示取不到有效值。
   */
  CreateTime?: number
  /**
   * 监播任务更新时间，unix时间戳
注意：此字段可能返回 null，表示取不到有效值。
   */
  UpdateTime?: number
  /**
   * 监播事件通知策略。
注意：此字段可能返回 null，表示取不到有效值。
   */
  NotifyPolicy?: LiveStreamMonitorNotifyPolicy
  /**
   * 输出音频的输入Index列表。
注意：此字段可能返回 null，表示取不到有效值。
   */
  AudibleInputIndexList?: Array<number | bigint>
  /**
   * 开启智能语音识别的输入Index列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  AiAsrInputIndexList?: Array<number | bigint>
  /**
   * 是否开启断流检测
注意：此字段可能返回 null，表示取不到有效值。
   */
  CheckStreamBroken?: number
  /**
   * 是否开启低帧率检测
注意：此字段可能返回 null，表示取不到有效值。
   */
  CheckStreamLowFrameRate?: number
  /**
   * 智能语音识别语种：
0 关闭 1 中文 2 英文 3日文 4 韩文
注意：此字段可能返回 null，表示取不到有效值。
   */
  AsrLanguage?: number
  /**
   * 智能文字识别语种：
0 关闭 1 中、英文
注意：此字段可能返回 null，表示取不到有效值。
   */
  OcrLanguage?: number
  /**
   * 开启智能文字识别的输入Index列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  AiOcrInputIndexList?: Array<number | bigint>
  /**
   * 是否存储监播事件到监播报告，以及是否允许查询监播报告
注意：此字段可能返回 null，表示取不到有效值。
   */
  AllowMonitorReport?: number
  /**
   * 是否开启格式诊断
注意：此字段可能返回 null，表示取不到有效值。
   */
  AiFormatDiagnose?: number
  /**
   * 是否开启内容质检。
注意：此字段可能返回 null，表示取不到有效值。
   */
  AiQualityControl?: number
  /**
   * 导播台监播对应的导播台场次id
   */
  CasterId?: string
  /**
   * 拉流转推监播对应的拉流转推任务id
   */
  PullPushTaskId?: string
}

/**
 * 直播拉流当前正在拉的文件信息。
 */
export interface RecentPullInfo {
  /**
   * 当前正在拉的文件地址。
   */
  FileUrl: string
  /**
   * 当前正在拉的文件偏移，单位：秒。
   */
  OffsetTime: number
  /**
   * 最新上报偏移信息时间。UTC格式。
如：2020-07-23T03:20:39Z。
注意：与北京时间相差八小时。
   */
  ReportTime: string
  /**
   * 已经轮播的次数。
   */
  LoopedTimes: number
}

/**
 * DeleteCasterInputInfo返回参数结构体
 */
export interface DeleteCasterInputInfoResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ForbidLiveStream返回参数结构体
 */
export interface ForbidLiveStreamResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeLiveSnapshotTemplates返回参数结构体
 */
export interface DescribeLiveSnapshotTemplatesResponse {
  /**
   * 截图模板列表。
   */
  Templates?: Array<SnapshotTemplateInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeRecordTask返回参数结构体
 */
export interface DescribeRecordTaskResponse {
  /**
   * 翻页标识，当请求未返回所有数据，该字段表示下一条记录的 Token。当该字段为空，说明已无更多数据。
   */
  ScrollToken: string
  /**
   * 录制任务列表。当该字段为空，说明已返回所有数据。
   */
  TaskList: Array<RecordTask>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeCasterPlayUrl请求参数结构体
 */
export interface DescribeCasterPlayUrlRequest {
  /**
   * 导播台ID
   */
  CasterId: number
  /**
   * 请求播放url的类型。
取值范围[1，2，3]
1：获取输入源的播放url
2：获取pvw的播放url
3：获取pgm的播放url
   */
  PlayUrlType: number
  /**
   * 仅在PlayUrlType为1时生效，此时该参数表示请求的输入源Index。
注：对应的输入源必须存在。
   */
  PlayUrlIndex?: number
}

/**
 * DescribeAreaBillBandwidthAndFluxList返回参数结构体
 */
export interface DescribeAreaBillBandwidthAndFluxListResponse {
  /**
   * 明细数据信息。
   */
  DataInfoList: Array<BillAreaInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ForbidLiveDomain请求参数结构体
 */
export interface ForbidLiveDomainRequest {
  /**
   * 待停用的直播域名。
   */
  DomainName: string
}

/**
 * DescribeLiveTimeShiftWriteSizeInfoList返回参数结构体
 */
export interface DescribeLiveTimeShiftWriteSizeInfoListResponse {
  /**
   * 直播时移写入量数据明细。
   */
  DataInfoList?: Array<TimeShiftWriteSizeData>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeCasterList返回参数结构体
 */
export interface DescribeCasterListResponse {
  /**
   * 用户对应的导播台简要信息列表
   */
  CasterList?: Array<CasterBriefInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 录制模板参数。
 */
export interface RecordParam {
  /**
   * 录制间隔。
单位秒，默认：1800。
取值范围：30-7200。
此参数对 HLS 无效，当录制 HLS 时从推流到断流生成一个文件。
   */
  RecordInterval?: number
  /**
   * 录制存储时长。
单位秒，取值范围： 0 - 1500天。
0：表示永久存储。
   */
  StorageTime?: number
  /**
   * 是否开启当前格式录制，默认值为0，0：否， 1：是。
   */
  Enable?: number
  /**
   * 点播子应用 ID。
   */
  VodSubAppId?: number
  /**
   * 录制文件名。
支持的特殊占位符有：
{StreamID}: 流ID
{StartYear}: 开始时间-年
{StartMonth}: 开始时间-月
{StartDay}: 开始时间-日
{StartHour}: 开始时间-小时
{StartMinute}: 开始时间-分钟
{StartSecond}: 开始时间-秒
{StartMillisecond}: 开始时间-毫秒
{EndYear}: 结束时间-年
{EndMonth}: 结束时间-月
{EndDay}: 结束时间-日
{EndHour}: 结束时间-小时
{EndMinute}: 结束时间-分钟
{EndSecond}: 结束时间-秒
{EndMillisecond}: 结束时间-毫秒

若未设置默认录制文件名为{StreamID}_{StartYear}-{StartMonth}-{StartDay}-{StartHour}-{StartMinute}-{StartSecond}_{EndYear}-{EndMonth}-{EndDay}-{EndHour}-{EndMinute}-{EndSecond}
   */
  VodFileName?: string
  /**
   * 任务流
注意：此字段可能返回 null，表示取不到有效值。
   */
  Procedure?: string
  /**
   * 视频存储策略。
normal：标准存储。
cold：低频存储。
注意：此字段可能返回 null，表示取不到有效值。
   */
  StorageMode?: string
  /**
   * 点播应用分类
注意：此字段可能返回 null，表示取不到有效值。
   */
  ClassId?: number
  /**
   * 存储至 cos 的 bucket 桶名称。
注意：此字段可能返回 null，表示取不到有效值。
   */
  CosBucketName?: string
  /**
   * 存储至 cos 的 bucket 区域。
注意：此字段可能返回 null，表示取不到有效值。
   */
  CosBucketRegion?: string
  /**
   * 存储至 cos 的 bucket 路径。
注意：此字段可能返回 null，表示取不到有效值。
   */
  CosBucketPath?: string
}

/**
 * ModifyLiveRecordTemplate请求参数结构体
 */
export interface ModifyLiveRecordTemplateRequest {
  /**
   * DescribeRecordTemplates接口获取到的模板 ID。
   */
  TemplateId: number
  /**
   * 模板名称。
   */
  TemplateName?: string
  /**
   * 描述信息。
   */
  Description?: string
  /**
   * FLV 录制参数，开启 FLV 录制时设置。
   */
  FlvParam?: RecordParam
  /**
   * HLS 录制参数，开启 HLS 录制时设置。
   */
  HlsParam?: RecordParam
  /**
   * MP4 录制参数，开启 MP4 录制时设置。
   */
  Mp4Param?: RecordParam
  /**
   * AAC 录制参数，开启 AAC 录制时设置。
   */
  AacParam?: RecordParam
  /**
   * HLS 录制定制参数。
   */
  HlsSpecialParam?: HlsSpecialParam
  /**
   * MP3 录制参数，开启 MP3 录制时设置。
   */
  Mp3Param?: RecordParam
  /**
   * 是否去除水印，类型为慢直播时此参数无效。
   */
  RemoveWatermark?: boolean
  /**
   * FLV 录制定制参数。
   */
  FlvSpecialParam?: FlvSpecialParam
}

/**
 * DescribeLiveDomainReferer请求参数结构体
 */
export interface DescribeLiveDomainRefererRequest {
  /**
   * 播放域名。
   */
  DomainName: string
}

/**
 * 播放错误码信息
 */
export interface HttpStatusData {
  /**
   * 数据时间点，
使用UTC格式时间，
例如：2019-01-08T10:00:00Z。
注意：北京时间值为 UTC 时间值 + 8 小时，格式按照 ISO 8601 标准表示，详见 [ISO 日期格式说明](https://cloud.tencent.com/document/product/266/11732#I)。
   */
  Time: string
  /**
   * 播放状态码详细信息。
   */
  HttpStatusInfoList: Array<HttpStatusInfo>
}

/**
 * HTTP返回码和统计数据
 */
export interface HttpCodeInfo {
  /**
   * HTTP协议返回码。
例："2xx", "3xx", "4xx", "5xx"。
   */
  HttpCode: string
  /**
   * 统计信息，对于无数据的时间点，会补0。
   */
  ValueList: Array<HttpCodeValue>
}

/**
 * DescribeLiveStreamPublishedList返回参数结构体
 */
export interface DescribeLiveStreamPublishedListResponse {
  /**
   * 推流记录信息。
   */
  PublishInfo?: Array<StreamName>
  /**
   * 分页的页码。
   */
  PageNum?: number
  /**
   * 每页大小
   */
  PageSize?: number
  /**
   * 符合条件的总个数。
   */
  TotalNum?: number
  /**
   * 总页数。
   */
  TotalPage?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * AddDelayLiveStream返回参数结构体
 */
export interface AddDelayLiveStreamResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * StopScreenshotTask返回参数结构体
 */
export interface StopScreenshotTaskResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeLivePadTemplates请求参数结构体
 */
export type DescribeLivePadTemplatesRequest = null

/**
 * EnableLiveDomain请求参数结构体
 */
export interface EnableLiveDomainRequest {
  /**
   * 待启用的直播域名。
   */
  DomainName: string
}

/**
 * DescribeLiveTranscodeTotalInfo返回参数结构体
 */
export interface DescribeLiveTranscodeTotalInfoResponse {
  /**
   * 统计数据列表。
   */
  DataInfoList?: Array<TranscodeTotalInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeLiveEnhanceInfoList返回参数结构体
 */
export interface DescribeLiveEnhanceInfoListResponse {
  /**
   * 直播增强统计信息列表。
   */
  DataInfoList?: Array<LiveEnhanceInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateLiveTranscodeRule返回参数结构体
 */
export interface CreateLiveTranscodeRuleResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateLiveTranscodeTemplate返回参数结构体
 */
export interface CreateLiveTranscodeTemplateResponse {
  /**
   * 模板Id。
   */
  TemplateId?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyLivePadTemplate请求参数结构体
 */
export interface ModifyLivePadTemplateRequest {
  /**
   * 模板id。
   */
  TemplateId: number
  /**
   * 垫片内容。
   */
  Url: string
  /**
   * 断流等待时间。
取值范围：0-30000。
单位：ms。
   */
  WaitDuration: number
  /**
   * 最大垫片时长。
取值范围：0 - 正无穷。
单位：ms。
   */
  MaxDuration: number
  /**
   * 模板名称。
长度上限：255字节。
仅支持中文、英文、数字、_、-。
   */
  TemplateName: string
  /**
   * 描述信息。
长度上限：1024字节。
仅支持中文、英文、数字、_、-。
   */
  Description?: string
  /**
   * 垫片内容类型： 1：图片，2：视频。 默认值：1。
   */
  Type?: number
}

/**
 * 主备流详细信息。
 */
export interface BackupStreamDetailData {
  /**
   * 推流域名。
注意：此字段可能返回 null，表示取不到有效值。
   */
  DomainName?: string
  /**
   * 推流路径。
注意：此字段可能返回 null，表示取不到有效值。
   */
  AppName?: string
  /**
   *  UTC 格式，例如：2018-06-29T19:00:00Z。
注意：和北京时间相差8小时。
注意：此字段可能返回 null，表示取不到有效值。
   */
  PublishTime?: string
  /**
   * 推流唯一标识。
注意：此字段可能返回 null，表示取不到有效值。
   */
  UpstreamSequence?: string
  /**
   * 推流来源。示例：
直推流；
拉流转推(1234)；
注意：拉流转推来源括号中为拉流转推的任务 
 ID。
注意：此字段可能返回 null，表示取不到有效值。
   */
  SourceFrom?: string
  /**
   * 主备标识。
当前流为主流：1，
当前流为备流: 0。
注意：此字段可能返回 null，表示取不到有效值。
   */
  MasterFlag?: number
}

/**
 * CreateLiveSnapshotTemplate请求参数结构体
 */
export interface CreateLiveSnapshotTemplateRequest {
  /**
   * 模板名称。
长度上限：255字节。
仅支持中文、英文、数字、_、-。
   */
  TemplateName: string
  /**
   * Cos 应用 ID。
   */
  CosAppId: number
  /**
   * Cos Bucket名称。
注：CosBucket参数值不能包含-[appid] 部分。
   */
  CosBucket: string
  /**
   * Cos地区。
   */
  CosRegion: string
  /**
   * 描述信息。
长度上限：1024字节。
仅支持中文、英文、数字、_、-。
   */
  Description?: string
  /**
   * 截图间隔，单位s，默认10s。
范围： 2s ~ 300s。
   */
  SnapshotInterval?: number
  /**
   * 截图宽度。默认：0（原始宽）。
范围：0-3000 。
   */
  Width?: number
  /**
   * 截图高度。默认：0（原始高）。
范围：0-2000 。
   */
  Height?: number
  /**
   * 是否开启鉴黄，0：不开启，1：开启。默认：0。
   */
  PornFlag?: number
  /**
   * Cos Bucket文件夹前缀。
如不传，实际按默认值
/{Year}-{Month}-{Day}
生效
   */
  CosPrefix?: string
  /**
   * Cos 文件名称。
如不传，实际按默认值
{StreamID}-screenshot-{Hour}-{Minute}-{Second}-{Width}x{Height}{Ext}
生效
   */
  CosFileName?: string
}

/**
 * ModifyLiveCallbackTemplate请求参数结构体
 */
export interface ModifyLiveCallbackTemplateRequest {
  /**
   * DescribeLiveCallbackTemplates接口返回的模板 ID。
   */
  TemplateId: number
  /**
   * 模板名称。
   */
  TemplateName?: string
  /**
   * 描述信息。
   */
  Description?: string
  /**
   * 开播回调 URL。
   */
  StreamBeginNotifyUrl?: string
  /**
   * 断流回调 URL。
   */
  StreamEndNotifyUrl?: string
  /**
   * 录制文件回调 URL。
   */
  RecordNotifyUrl?: string
  /**
   * 录制状态回调 URL 。
   */
  RecordStatusNotifyUrl?: string
  /**
   * 截图回调 URL。
   */
  SnapshotNotifyUrl?: string
  /**
   * 鉴黄回调 URL。
   */
  PornCensorshipNotifyUrl?: string
  /**
   * 回调 Key，回调 URL 公用，回调签名详见事件消息通知文档。
[事件消息通知](/document/product/267/32744)。
   */
  CallbackKey?: string
  /**
   * 推流异常回调 URL。
   */
  PushExceptionNotifyUrl?: string
  /**
   * 音频审核回调 URL。
   */
  AudioAuditNotifyUrl?: string
  /**
   * 录制异常回调 URL。
   */
  RecordExceptionNotifyUrl?: string
  /**
   * 录制异常回调级别，可选择：error、warning、info。
   */
  RecordExceptionLevels?: Array<string>
}

/**
 * DescribeMonitorReport请求参数结构体
 */
export interface DescribeMonitorReportRequest {
  /**
   * 监播任务ID。
   */
  MonitorId: string
}

/**
 * DescribeAllStreamPlayInfoList请求参数结构体
 */
export interface DescribeAllStreamPlayInfoListRequest {
  /**
   * 查询时间点，精确到分钟粒度，接口查询支持两种时间格式：
1）YYYY-MM-DDThh:mm:ssZ：UTC时间格式，详见 [ISO 日期格式说明](https://cloud.tencent.com/document/product/267/38543#:~:text=I-,ISO%20%E6%97%A5%E6%9C%9F%E6%A0%BC%E5%BC%8F,-ISO%20%E6%97%A5%E6%9C%9F%E6%A0%BC%E5%BC%8F)。
2）YYYY-MM-DD hh:mm:ss：使用此格式时，默认代表北京时间。
支持最近1个月的数据查询，数据延迟为5分钟左右，如果要查询实时的数据，建议传递5分钟前的整点时间点。
   */
  QueryTime: string
  /**
   * 播放域名列表，若不填，表示总体数据。
   */
  PlayDomains?: Array<string>
}

/**
 * DescribeLiveDomain返回参数结构体
 */
export interface DescribeLiveDomainResponse {
  /**
   * 域名信息。
   */
  DomainInfo?: DomainInfo
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeLiveXP2PDetailInfoList请求参数结构体
 */
export interface DescribeLiveXP2PDetailInfoListRequest {
  /**
   * utc分钟粒度查询时间，查询某一分钟的用量数据，格式为：yyyy-mm-ddTHH:MM:00Z，参考https://cloud.tencent.com/document/product/266/11732#I，
例如：北京时间2019-01-08 10:00:00，对应utc时间为：2019-01-08T10:00:00+08:00。

支持最近六个月的查询。
   */
  QueryTime?: string
  /**
   * 类型数组，分直播live和点播vod，不传默认查全部。
   */
  Type?: Array<string>
  /**
   * 查询流数组，不传默认查所有流。
   */
  StreamNames?: Array<string>
  /**
   * 查询维度，不传该参数则默认查询流维度的数据，传递该参数则只查对应维度的数据，和返回值的字段相关，目前支持AppId维度查询。
   */
  Dimension?: Array<string>
}

/**
 * CreateCasterPgmFromPvw请求参数结构体
 */
export interface CreateCasterPgmFromPvwRequest {
  /**
   * 导播台ID。
   */
  CasterId: number
}

/**
 * 某省份某运营商在某段时间内的带宽，流量，请求数和并发数
 */
export interface GroupProIspDataInfo {
  /**
   * 省份。
   */
  ProvinceName: string
  /**
   * 运营商。
   */
  IspName: string
  /**
   * 分钟维度的明细数据。
   */
  DetailInfoList: Array<CdnPlayStatData>
}

/**
 * DeleteCasterOutputInfo请求参数结构体
 */
export interface DeleteCasterOutputInfoRequest {
  /**
   * 导播台ID。
   */
  CasterId: number
  /**
   * 待删除的推流信息Index。
注：删除时，该Index对应的配置需要存在。
   */
  OutputIndex: number
}

/**
 * 禁推流列表
 */
export interface ForbidStreamInfo {
  /**
   * 流名称。
   */
  StreamName?: string
  /**
   * 创建时间。
注：此字段为北京时间（UTC+8时区）。
   */
  CreateTime?: string
  /**
   * 禁推过期时间。
注：此字段为北京时间（UTC+8时区）。
   */
  ExpireTime?: string
  /**
   * 推流路径。
注意：此字段可能返回 null，表示取不到有效值。
   */
  AppName?: string
  /**
   * 推流域名。
注意：此字段可能返回 null，表示取不到有效值。
   */
  DomainName?: string
}

/**
 * DescribeTimeShiftRecordDetail返回参数结构体
 */
export interface DescribeTimeShiftRecordDetailResponse {
  /**
   * 时移录制会话数组。
   */
  RecordList?: Array<TimeShiftRecord>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteLiveDomain返回参数结构体
 */
export interface DeleteLiveDomainResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * AddCasterMarkPicInfo请求参数结构体
 */
export interface AddCasterMarkPicInfoRequest {
  /**
   * 导播台ID
   */
  CasterId: number
  /**
   * 图片水印详细参数。
   */
  MarkPicInfo: CasterMarkPicInfo
}
