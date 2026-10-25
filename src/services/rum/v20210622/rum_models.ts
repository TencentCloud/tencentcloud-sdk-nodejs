/*
 * Copyright (c) 2018 Tencent. All Rights Reserved.
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
 * DescribeFOOMMallocReportList请求参数结构体
 */
export interface DescribeFOOMMallocReportListRequest {
  /**
   * <p>产品Id</p>
   */
  ProductId: string
  /**
   * <p>接口调试专用，当 token 为空时，以这里的 value 作为筛选表单信息</p>
   */
  FormListString?: string
  /**
   * <p>提供给前端使用，当填写本字段时，会覆盖 formlist 的值</p>
   */
  ParamToken?: string
  /**
   * <p>特征</p>
   */
  Feature?: string
  /**
   * <p>当前页码</p>
   */
  PageNumber?: number
  /**
   * <p>每页展示最大数量</p>
   */
  PageSize?: number
  /**
   * <p>排序字段</p>
   */
  SortField?: string
  /**
   * <p>排序类型</p>
   */
  SortType?: string
  /**
   * <p>拓展数据</p>
   */
  ExtraData?: string
  /**
   * <p>请求头</p>
   */
  RequestHeader?: string
}

/**
 * DescribeProjectLimits返回参数结构体
 */
export interface DescribeProjectLimitsResponse {
  /**
   * 上报率数组列表
   */
  ProjectLimitSet?: Array<ProjectLimit>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 探索列表异常栈摘要
 */
export interface ExplorationExceptionStack {
  /**
   * <p>异常类型</p>
   */
  Type?: string
  /**
   * <p>异常信息</p>
   */
  Value?: string
  /**
   * <p>mechanism 类型</p>
   */
  MechanismType?: string
  /**
   * <p>是否已处理 0/1</p>
   */
  MechanismHandled?: number
}

/**
 * DescribeFileCertificate返回参数结构体
 */
export interface DescribeFileCertificateResponse {
  /**
   * 临时密钥key
   */
  SecretKey?: string
  /**
   * 临时密钥 id
   */
  SecretID?: string
  /**
   * 临时密钥临时 token
   */
  SessionToken?: string
  /**
   * 开始时间戳
   */
  StartTime?: number
  /**
   * 过期时间戳
   */
  ExpiredTime?: number
  /**
   * 桶地址
   */
  BucketAddress?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeSessionList请求参数结构体
 */
export interface DescribeSessionListRequest {
  /**
   * <p>应用id</p>
   */
  AppId: string
  /**
   * <p>开始时间</p><p>单位：毫秒</p>
   */
  StartTime: number
  /**
   * <p>结束时间</p><p>单位：毫秒</p>
   */
  EndTime: number
  /**
   * <p>session类型</p><p>枚举值：</p><ul><li>all： 所有</li><li>error： 错</li><li>slow： 慢</li></ul>
   */
  SessionType?: string
  /**
   * <p>页面号</p><p>默认值：1</p>
   */
  Page?: number
  /**
   * <p>每一页的数量</p>
   */
  PageSize?: number
  /**
   * <p>排序字段</p>
   */
  SortBy?: string
  /**
   * <p>排序方式，ASC或DESC</p>
   */
  SortOrder?: string
  /**
   * <p>用户id</p>
   */
  UserId?: string
  /**
   * <p>session id</p>
   */
  SessionId?: string
  /**
   * <p>设备类型</p>
   */
  DeviceTypes?: Array<string>
  /**
   * <p>浏览器</p>
   */
  Browsers?: Array<string>
  /**
   * <p>操作系统</p>
   */
  OSList?: Array<string>
  /**
   * <p>平台</p>
   */
  Platforms?: Array<string>
  /**
   * <p>应用版本</p>
   */
  AppVersions?: Array<string>
  /**
   * <p>国家</p>
   */
  Countries?: Array<string>
  /**
   * <p>是否有挣扎事件</p>
   */
  HasStruggle?: boolean
  /**
   * <p>挣扎等级</p>
   */
  StruggleRanks?: Array<string>
  /**
   * <p>挣扎事件类型</p>
   */
  StruggleTypes?: Array<string>
  /**
   * <p>是否有错误</p>
   */
  HasError?: boolean
  /**
   * <p>访问页面</p>
   */
  VisitedPage?: string
  /**
   * <p>包含事件</p>
   */
  ContainsEvent?: string
  /**
   * <p>最小持续时间</p>
   */
  MinDuration?: number
  /**
   * <p>最大持续时间</p>
   */
  MaxDuration?: number
  /**
   * <p>性能过滤</p>
   */
  PerfFilter?: string
  /**
   * <p>地区</p>
   */
  Regions?: Array<string>
  /**
   * <p>环境</p>
   */
  Environments?: Array<string>
  /**
   * <p>筛选</p>
   */
  Filters?: string
  /**
   * <p>旅程起点页面。可选。不传表示不过滤。</p>
   */
  StartPage?: string
  /**
   * <p>旅程终点页面。可选。不传表示不过滤。</p>
   */
  EndPage?: string
  /**
   * <p>旅程筛选条件 JSON 字符串，格式与 Filters 相同：[{Key,Op,Values}]。可选。不传表示不过滤。</p>
   */
  JourneyFilters?: string
}

/**
 * ResumeProject返回参数结构体
 */
export interface ResumeProjectResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeRumLogList返回参数结构体
 */
export interface DescribeRumLogListResponse {
  /**
   * 返回字符串
   */
  Result?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeAppMetricsData请求参数结构体
 */
export interface DescribeAppMetricsDataRequest {
  /**
   * app 项目ID
   */
  ProjectID: number
  /**
   * 查询的表名
   */
  From: string
  /**
   * 查询指标 field
   */
  Fields: string
  /**
   * 查询的过滤条件
   */
  Filter: string
  /**
   * 查询简单过滤条件
   */
  FilterSimple?: string
  /**
   * group by 条件
   */
  GroupBy?: Array<string>
  /**
   * order by 条件
   */
  OrderBy?: Array<string>
  /**
   * limit 参数
   */
  Limit?: number
  /**
   * offset 参数
   */
  Offset?: number
  /**
   * group by 参数
   */
  GroupByModifier?: string
}

/**
 * DescribeToken请求参数结构体
 */
export interface DescribeTokenRequest {
  /**
   * <p>筛选条件</p>
   */
  FormListString?: string
  /**
   * <p>仅对比模式下填写，筛选条件A</p>
   */
  FormListAString?: string
  /**
   * <p>仅对比模式下填写，筛选条件B</p>
   */
  FormListBString?: string
  /**
   * <p>请求头</p>
   */
  RequestHeader?: string
  /**
   * <p>拓展字段</p>
   */
  ExtraData?: string
}

/**
 * DeleteFieldTransformRule返回参数结构体
 */
export interface DeleteFieldTransformRuleResponse {
  /**
   * <p>结果</p>
   */
  Result?: string
  /**
   * <p>错误信息</p>
   */
  ErrorMsg?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDataStaticUrlV2请求参数结构体
 */
export interface DescribeDataStaticUrlV2Request {
  /**
   * 开始时间
   */
  StartTime: number
  /**
   * pagepv：性能视图，nettype/version/platform/isp/region/device/browser/ext1/ext2/ext3/ret/status/from/url/env/：网络平台视图/Version视图/设备视图/ISP视图/地区视图/浏览器视图//ext1视图等
   */
  Type: string
  /**
   * 结束时间
   */
  EndTime: number
  /**
   * 项目ID
   */
  ID: number
  /**
   * 自定义2
   */
  ExtSecond?: string
  /**
   * 浏览器引擎
   */
  Engine?: string
  /**
   * 运营商
   */
  Isp?: string
  /**
   * 来源页面
   */
  From?: string
  /**
   * 日志等级
   */
  Level?: string
  /**
   * 品牌
   */
  Brand?: string
  /**
   * 地区
   */
  Area?: string
  /**
   * 版本
   */
  VersionNum?: string
  /**
   * 平台
   */
  Platform?: string
  /**
   * 自定义3
   */
  ExtThird?: string
  /**
   * 自定义1
   */
  ExtFirst?: string
  /**
   * 网络类型
   */
  NetType?: string
  /**
   * 机型
   */
  Device?: string
  /**
   * 显示是否海外,1表示海外，0表示非海外；默认值为空，查询所有。
   */
  IsAbroad?: string
  /**
   * 操作系统
   */
  Os?: string
  /**
   * 浏览器
   */
  Browser?: string
  /**
   * 耗时计算方式
   */
  CostType?: string
  /**
   * 来源
   */
  Url?: string
  /**
   * 环境
   */
  Env?: string
  /**
   * 自定义4
   */
  ExtFourth?: string
  /**
   * 自定义5
   */
  ExtFifth?: string
  /**
   * 自定义6
   */
  ExtSixth?: string
  /**
   * 自定义7
   */
  ExtSeventh?: string
  /**
   * 自定义8
   */
  ExtEighth?: string
  /**
   * 自定义9
   */
  ExtNinth?: string
  /**
   * 自定义10
   */
  ExtTenth?: string
  /**
   * 时间段
   */
  Granularity?: string
}

/**
 * DescribeRumLogExportV2返回参数结构体
 */
export interface DescribeRumLogExportV2Response {
  /**
   * <p>日志导出任务TaskId</p>
   */
  Result?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribePvList返回参数结构体
 */
export interface DescribePvListResponse {
  /**
   * pv列表
   */
  ProjectPvSet?: Array<RumPvInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeRumLogDetailsV2返回参数结构体
 */
export interface DescribeRumLogDetailsV2Response {
  /**
   * <p>日志明细</p>
   */
  Result?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeScoresV2返回参数结构体
 */
export interface DescribeScoresV2Response {
  /**
   * <p>项目得分数组</p>
   */
  ScoreSet?: Array<ScoreInfoV2>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 拨测趋势点
 */
export interface DialTrendPoint {
  /**
   * <p>时间桶，格式 yyyy-MM-dd HH:mm:ss</p>
   */
  Time?: string
  /**
   * <p>执行批次数</p>
   */
  ExecutionCount?: number
  /**
   * <p>成功批次数</p>
   */
  SuccessCount?: number
  /**
   * <p>失败批次数</p>
   */
  FailCount?: number
  /**
   * <p>平均时延，单位毫秒</p>
   */
  AvgDuration?: number
}

/**
 * DeleteTDEMFunnel返回参数结构体
 */
export interface DeleteTDEMFunnelResponse {
  /**
   * <p>请求结果</p>
   */
  Result?: string
  /**
   * <p>错误信息</p>
   */
  ErrorMsg?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDataCustomUrl请求参数结构体
 */
export interface DescribeDataCustomUrlRequest {
  /**
   * 开始时间
   */
  StartTime: number
  /**
   * top：资源top视图，allcount：性能视图，day：14天数据，condition：条件列表，pagepv：性能视图，area：请求速度分布，nettype/version/platform/isp/region/device/browser/ext1/ext2/ext3/ret/status/from/url/env/：网络平台视图/Version视图/设备视图/ISP视图/地区视图/浏览器视图/ext1视图等等
   */
  Type: string
  /**
   * 结束时间
   */
  EndTime: number
  /**
   * 项目ID
   */
  ID: number
  /**
   * 自定义2
   */
  ExtSecond?: string
  /**
   * 浏览器引擎
   */
  Engine?: string
  /**
   * 运营商
   */
  Isp?: string
  /**
   * 来源页面
   */
  From?: string
  /**
   * 日志等级
   */
  Level?: string
  /**
   * 品牌
   */
  Brand?: string
  /**
   * 地区
   */
  Area?: string
  /**
   * 版本
   */
  VersionNum?: string
  /**
   * 平台
   */
  Platform?: string
  /**
   * 自定义3
   */
  ExtThird?: string
  /**
   * 自定义1
   */
  ExtFirst?: string
  /**
   * 网络类型（1,2,3,4,5,100），1表示WIFI, 2表示2G, 3表示3G, 4表示4G, 5表示5G, 6表示6G, 100表示未知。
   */
  NetType?: string
  /**
   * 机型
   */
  Device?: string
  /**
   * 显示是否海外,1表示海外，0表示非海外；默认值为空，查询所有。
   */
  IsAbroad?: string
  /**
   * 操作系统
   */
  Os?: string
  /**
   * 浏览器
   */
  Browser?: string
  /**
   * 耗时口径："50"/"75"/"90"/"95"/"99"/"99.5" 分别表示 TP50/TP75/TP90/TP95/TP99/TP99.5（使用 percentile2 计算分位数）；"avg" 表示均值（使用 avg 计算）。
   */
  CostType?: string
  /**
   * 自定义测速的key的值
   */
  Url?: string
  /**
   * 环境
   */
  Env?: string
}

/**
 * DescribeReplayMeta返回参数结构体
 */
export interface DescribeReplayMetaResponse {
  /**
   * <p>返回结果</p>
   */
  Result?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 标签
 */
export interface Tag {
  /**
   * 标签key
   */
  Key: string
  /**
   * 标签value
   */
  Value: string
}

/**
 * DescribeDataPvUrlStatisticsV2请求参数结构体
 */
export interface DescribeDataPvUrlStatisticsV2Request {
  /**
   * <p>开始时间</p>
   */
  StartTime: number
  /**
   * <p>allcount：性能视图，day：14天数据，vp：性能，ckuv：uv，ckpv：pv，condition：条件列表，nettype/version/platform/isp/region/device/browser/ext1/ext2/ext3/ret/status/from/url/env/：网络平台视图/Version视图/设备视图/ISP视图/地区视图/浏览器视图/ext1视图等</p>
   */
  Type: string
  /**
   * <p>结束时间</p>
   */
  EndTime: number
  /**
   * <p>项目ID</p>
   */
  ID: number
  /**
   * <p>自定义2</p>
   */
  ExtSecond?: string
  /**
   * <p>浏览器引擎</p>
   */
  Engine?: string
  /**
   * <p>运营商</p>
   */
  Isp?: string
  /**
   * <p>来源页面， 可多选，用 “,” 隔开的 String</p>
   */
  From?: string
  /**
   * <p>日志等级</p>
   */
  Level?: string
  /**
   * <p>品牌</p>
   */
  Brand?: string
  /**
   * <p>地区</p>
   */
  Area?: string
  /**
   * <p>版本</p>
   */
  VersionNum?: string
  /**
   * <p>平台</p>
   */
  Platform?: string
  /**
   * <p>自定义3</p>
   */
  ExtThird?: string
  /**
   * <p>自定义1</p>
   */
  ExtFirst?: string
  /**
   * <p>网络类型（1,2,3,4,5,100），1表示WIFI, 2表示2G, 3表示3G, 4表示4G, 5表示5G, 6表示6G, 100表示未知</p>
   */
  NetType?: string
  /**
   * <p>机型</p>
   */
  Device?: string
  /**
   * <p>显示是否海外,1表示海外，0表示非海外；默认值为空，查询所有。</p>
   */
  IsAbroad?: string
  /**
   * <p>操作系统</p>
   */
  Os?: string
  /**
   * <p>浏览器</p>
   */
  Browser?: string
  /**
   * <p>环境</p>
   */
  Env?: string
  /**
   * <p>group by 参数值枚举1:1m  2:5m  3:30m  4:1h<br> 5:1d</p>
   */
  GroupByType?: number
  /**
   * <p>1: 查询智研<br>0: 走旧逻辑，已下线，勿使用</p>
   */
  IsNewData?: number
  /**
   * <p>自定义4</p>
   */
  ExtFourth?: string
  /**
   * <p>自定义5</p>
   */
  ExtFifth?: string
  /**
   * <p>自定义6</p>
   */
  ExtSixth?: string
  /**
   * <p>自定义7</p>
   */
  ExtSeventh?: string
  /**
   * <p>自定义8</p>
   */
  ExtEighth?: string
  /**
   * <p>自定义9</p>
   */
  ExtNinth?: string
  /**
   * <p>自定义10</p>
   */
  ExtTenth?: string
  /**
   * <p>时间段</p>
   */
  Granularity?: string
}

/**
 * DescribeDataFetchUrlV2返回参数结构体
 */
export interface DescribeDataFetchUrlV2Response {
  /**
   * 返回值
   */
  Result?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeTDEMFunnelDetail返回参数结构体
 */
export interface DescribeTDEMFunnelDetailResponse {
  /**
   * <p>请求结果</p>
   */
  Result?: string
  /**
   * <p>错误信息</p>
   */
  ErrorMsg?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeIssueCrashLogDownloadURL请求参数结构体
 */
export interface DescribeIssueCrashLogDownloadURLRequest {
  /**
   * <p>应用ID</p>
   */
  AppId: string
  /**
   * <p>Issue ID</p>
   */
  IssueId: string
  /**
   * <p>Issue 事件ID</p>
   */
  EventId: string
}

/**
 * CreateTDEMFieldTransformRule返回参数结构体
 */
export interface CreateTDEMFieldTransformRuleResponse {
  /**
   * <p>创建后的规则</p>
   */
  Rule?: FieldTransformRuleItem
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeIssueTrend返回参数结构体
 */
export interface DescribeIssueTrendResponse {
  /**
   * <p>业务结果 JSON 字符串；前端会再做一次 JSON 解析。Result 内业务 JSON 为 Data，内容是 bucket + points</p>
   */
  Result?: string
  /**
   * <p>错误信息；正常返回时为空</p>
   */
  ErrorMsg?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDataReportCountV2请求参数结构体
 */
export interface DescribeDataReportCountV2Request {
  /**
   * <p>开始时间</p>
   */
  StartTime: number
  /**
   * <p>结束时间</p>
   */
  EndTime: number
  /**
   * <p>项目ID</p>
   */
  ID?: number
  /**
   * <p>上报类型（custom，event，log，miniProgramData，performance，pv，speed，webvitals）</p>
   */
  ReportType?: string
  /**
   * <p>实例ID</p>
   */
  InstanceID?: string
}

/**
 * UploadMiniProgramSource请求参数结构体
 */
export interface UploadMiniProgramSourceRequest {
  /**
   * <p>应用id</p>
   */
  AppId: string
  /**
   * <p>源码zip的Base64，请求包上限10240KB</p>
   */
  FileBase64: string
  /**
   * <p>应用版本（可选）</p>
   */
  Release?: string
  /**
   * <p>原始文件名（可选）</p>
   */
  FileName?: string
}

/**
 * DescribeFOOMMallocProblemDetail返回参数结构体
 */
export interface DescribeFOOMMallocProblemDetailResponse {
  /**
   * <p>返回值</p>
   */
  Data?: string
  /**
   * <p>状态码</p>
   */
  Code?: number
  /**
   * <p>消息</p>
   */
  Message?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeTDEMEventSearch请求参数结构体
 */
export interface DescribeTDEMEventSearchRequest {
  /**
   * <p>应用 ID（必填）</p>
   */
  AppId: string
  /**
   * <p>开始时间 Unix 毫秒（必填）</p>
   */
  StartTime: number
  /**
   * <p>结束时间 Unix 毫秒（必填）</p>
   */
  EndTime: number
  /**
   * <p>事件分类（必填，禁止 session）</p>
   */
  Category: string
  /**
   * <p>筛选条件 JSON 字符串：[{Key,Op,Values}]，须在探索白名单</p>
   */
  Filters?: string
  /**
   * <p>排序字段：timestamp（默认）/ duration</p>
   */
  SortBy?: string
  /**
   * <p>排序方向：asc / desc，默认 desc</p>
   */
  SortOrder?: string
  /**
   * <p>页码，&gt;=1，默认 1</p>
   */
  Page?: number
  /**
   * <p>每页条数，1-100，默认 20</p>
   */
  PageSize?: number
  /**
   * <p>是否只看有错误的会话。可选。不传表示不过滤。Category 为 session 的汇总查询会使用该条件。</p>
   */
  HasError?: boolean
  /**
   * <p>会话最短时长，单位毫秒。可选。0 或不传表示不限制。Category 为 session 的汇总查询会使用该条件。</p>
   */
  MinDuration?: number
  /**
   * <p>会话最长时长，单位毫秒。可选。0 或不传表示不限制。Category 为 session 的汇总查询会使用该条件。</p>
   */
  MaxDuration?: number
}

/**
 * StopProject请求参数结构体
 */
export interface StopProjectRequest {
  /**
   * 项目 id
   */
  ProjectId: number
}

/**
 * DescribeRumLogTotalV2请求参数结构体
 */
export interface DescribeRumLogTotalV2Request {
  /**
   * <p>排序方式 desc asc</p>
   */
  OrderBy: string
  /**
   * <p>查询日志开始时间（必填）格式为时间戳 毫秒</p>
   */
  StartTime: number
  /**
   * <p>单次查询返回的原始日志条数，最大值为100（必填）</p>
   */
  Limit: number
  /**
   * <p>过滤条件，其中key与运算符(Operator)对应可选字段枚举值与示例查看文档：<a href="https://cloud.tencent.com/document/product/248/87223">日志查询相关</a></p>
   */
  Filter: string
  /**
   * <p>查询日志结束时间（必填）格式为时间戳 毫秒</p>
   */
  EndTime: number
  /**
   * <p>项目ID（必填）</p>
   */
  ID: number
  /**
   * <p>上次查询的最后一个日志的时间戳</p>
   */
  LastTime?: number
  /**
   * <p>上次查询的最后一个日志的rowId</p>
   */
  LastRowId?: number
}

/**
 * DescribeDataWebVitalsPageV2请求参数结构体
 */
export interface DescribeDataWebVitalsPageV2Request {
  /**
   * 开始时间
   */
  StartTime: number
  /**
   * 结束时间
   */
  EndTime: number
  /**
   * 项目ID
   */
  ID: number
  /**
   * 自定义2
   */
  ExtSecond?: string
  /**
   * 浏览器引擎
   */
  Engine?: string
  /**
   * 运营商
   */
  Isp?: string
  /**
   * 来源页面
   */
  From?: string
  /**
   * 日志等级
   */
  Level?: string
  /**
   * 类型暂无
   */
  Type?: string
  /**
   * 品牌
   */
  Brand?: string
  /**
   * 地区
   */
  Area?: string
  /**
   * 版本
   */
  VersionNum?: string
  /**
   * 平台
   */
  Platform?: string
  /**
   * 自定义3
   */
  ExtThird?: string
  /**
   * 自定义1
   */
  ExtFirst?: string
  /**
   * 网络类型
   */
  NetType?: string
  /**
   * 机型
   */
  Device?: string
  /**
   * 显示是否海外,1表示海外，0表示非海外；默认值为空，查询所有。
   */
  IsAbroad?: string
  /**
   * 操作系统
   */
  Os?: string
  /**
   * 浏览器
   */
  Browser?: string
  /**
   * 耗时计算
   */
  CostType?: string
  /**
   * 环境
   */
  Env?: string
  /**
   * 时间段
   */
  Granularity?: string
}

/**
 * DescribeDataPerformancePage请求参数结构体
 */
export interface DescribeDataPerformancePageRequest {
  /**
   * 项目ID
   */
  ID: number
  /**
   * 开始时间
   */
  StartTime: number
  /**
   * 结束时间
   */
  EndTime: number
  /**
   * pagepv：pv视图，allcount：性能视图，falls：页面加载瀑布图，samp：首屏时间，day：14天数据，nettype：网络/平台视图，performance：页面性能TOP视图，version/platform/isp/region/device/browser/ext1/ext2/ext3/ret/status/from/url/env/：ISP视图/地区视图/浏览器视图等
   */
  Type: string
  /**
   * 日志等级
   */
  Level?: string
  /**
   * 运营商
   */
  Isp?: string
  /**
   * 地区
   */
  Area?: string
  /**
   * 网络类型(tag 值):用于过滤/聚合字段 netType；枚举值：1(WiFi)、2(2G)、3(3G)、4(4G)、5(5G)、6(6G)、100(未知网络)。
   */
  NetType?: string
  /**
   * 平台
   */
  Platform?: string
  /**
   * 机型
   */
  Device?: string
  /**
   * 版本
   */
  VersionNum?: string
  /**
   * 自定义1
   */
  ExtFirst?: string
  /**
   * 自定义2
   */
  ExtSecond?: string
  /**
   * 自定义3
   */
  ExtThird?: string
  /**
   * 显示是否海外,1表示海外，0表示非海外；默认值为空，查询所有。
   */
  IsAbroad?: string
  /**
   * 浏览器
   */
  Browser?: string
  /**
   * 操作系统
   */
  Os?: string
  /**
   * 浏览器引擎
   */
  Engine?: string
  /**
   * 品牌
   */
  Brand?: string
  /**
   * 来源页面
   */
  From?: string
  /**
   * 耗时口径："50"/"75"/"90"/"95"/"99"/"99.5" 分别表示 TP50/TP75/TP90/TP95/TP99/TP99.5（percentile2）；"avg" 表示均值（avg）。
   */
  CostType?: string
  /**
   * 环境变量
   */
  Env?: string
  /**
   * 网络状态(tag 值):用于过滤/聚合字段 netStatus；枚举值：0(正常)、1(弱网)、2(断网)、3(其他)。
   */
  NetStatus?: string
  /**
   * 是否返回webvitals数据
   */
  WebVitals?: boolean
}

/**
 * DescribeTDEMSSEDistribution返回参数结构体
 */
export interface DescribeTDEMSSEDistributionResponse {
  /**
   * <p>分布档。没有样本时为空数组。最后一档 Overflow 为 true 且省略 End。</p>
   */
  Bins?: Array<TDEMSSEDistributionBin>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeTDEMMetricSummary请求参数结构体
 */
export interface DescribeTDEMMetricSummaryRequest {
  /**
   * <p>应用 ID（必填）</p>
   */
  AppId: string
  /**
   * <p>开始时间 Unix 毫秒（必填）</p>
   */
  StartTime: number
  /**
   * <p>结束时间 Unix 毫秒（必填）</p>
   */
  EndTime: number
  /**
   * <p>顶层事件类型；单查必填，批量用 Queries 时可不填</p>
   */
  EventType?: string
  /**
   * <p>子类型；未知返回 0</p>
   */
  SubType?: string
  /**
   * <p>筛选条件 JSON 字符串：[{Key,Op,Values}]，走分析立方白名单</p>
   */
  Filters?: string
  /**
   * <p>指标名列表，如 count / rate；单查必填</p>
   */
  Metrics?: Array<string>
  /**
   * <p>分位/均值必填，如 lcp / duration</p>
   */
  MeasurementKey?: string
  /**
   * <p>批量查询，上限 32</p>
   */
  Queries?: Array<MetricQueryItem>
}

/**
 * ResumeInstance请求参数结构体
 */
export interface ResumeInstanceRequest {
  /**
   * 需要恢复的实例id
   */
  InstanceId: string
  /**
   * 修改是否包括白名单
   */
  IsModifyAll?: boolean
}

/**
 * DescribeMiniProgramReplayPacks请求参数结构体
 */
export interface DescribeMiniProgramReplayPacksRequest {
  /**
   * <p>应用id</p>
   */
  AppId: string
  /**
   * <p>状态过滤（compiling/ready/failed，可选）</p>
   */
  Status?: string
  /**
   * <p>返回条数（默认20，最大100）</p>
   */
  Limit?: number
  /**
   * <p>分页游标（可选）</p>
   */
  Cursor?: string
}

/**
 * 拨测目标 IP 的地区和运营商
 */
export interface DialTargetIpGeo {
  /**
   * <p>目标 IP，与 TargetIps 中的地址一致</p>
   */
  Ip?: string
  /**
   * <p>目标 IP 所在地区。无法解析时为未知。</p>
   */
  Region?: string
  /**
   * <p>目标 IP 所属运营商。无法解析时为未知。</p>
   */
  Operator?: string
}

/**
 * DeleteProject返回参数结构体
 */
export interface DeleteProjectResponse {
  /**
   * 操作信息
   */
  Msg?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribePerformanceMetrics请求参数结构体
 */
export interface DescribePerformanceMetricsRequest {
  /**
   * <p>应用id</p>
   */
  AppId: string
  /**
   * <p>开始时间</p>
   */
  StartTime: number
  /**
   * <p>结束时间</p>
   */
  EndTime: number
  /**
   * <p>平台</p>
   */
  Platform?: string
  /**
   * <p>过滤条件</p>
   */
  Filters?: string
  /**
   * <p>分位值</p>
   */
  Quantile?: number
  /**
   * <p>旅程筛选条件 JSON 字符串，格式与 Filters 相同：[{Key,Op,Values}]。可选。不传表示不过滤。</p>
   */
  JourneyFilters?: string
  /**
   * <p>是否只看包含挣扎的会话。可选。不传表示不过滤。</p>
   */
  HasStruggle?: boolean
  /**
   * <p>旅程起点页面。可选。不传表示不过滤。</p>
   */
  StartPage?: string
  /**
   * <p>旅程终点页面。可选。不传表示不过滤。</p>
   */
  EndPage?: string
}

/**
 * DescribeTDEMEventRank返回参数结构体
 */
export interface DescribeTDEMEventRankResponse {
  /**
   * <p>排行行</p>
   */
  Items?: Array<EventRankItem>
  /**
   * <p>仅 Kind=exception_dimension 返回。Rows 为完整维度行及固定分类向量；空数据返回 Rows=[]。父行 TotalCount 等于 IncludedInTotal=true 的主项 Count 之和，包含项仅展示且不重复计总。所有计数为0至9007199254740991的整数。旧 Kind 继续使用 Items。</p>
   */
  ExceptionDistribution?: ExceptionDistribution
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDataCustomUrlV2请求参数结构体
 */
export interface DescribeDataCustomUrlV2Request {
  /**
   * 开始时间
   */
  StartTime: number
  /**
   * top：资源top视图，allcount：性能视图，day：14天数据，condition：条件列表，pagepv：性能视图，area：请求速度分布，nettype/version/platform/isp/region/device/browser/ext1/ext2/ext3/ret/status/from/url/env/：网络平台视图/Version视图/设备视图/ISP视图/地区视图/浏览器视图/ext1视图等
   */
  Type: string
  /**
   * 结束时间
   */
  EndTime: number
  /**
   * 项目ID
   */
  ID: number
  /**
   * 自定义2
   */
  ExtSecond?: string
  /**
   * 浏览器引擎
   */
  Engine?: string
  /**
   * 运营商
   */
  Isp?: string
  /**
   * 来源页面
   */
  From?: string
  /**
   * 日志等级
   */
  Level?: string
  /**
   * 品牌
   */
  Brand?: string
  /**
   * 地区
   */
  Area?: string
  /**
   * 版本
   */
  VersionNum?: string
  /**
   * 平台
   */
  Platform?: string
  /**
   * 自定义3
   */
  ExtThird?: string
  /**
   * 自定义1
   */
  ExtFirst?: string
  /**
   * 网络类型（1,2,3,4,5,100），1表示WIFI, 2表示2G, 3表示3G, 4表示4G, 5表示5G, 6表示6G, 100表示未知。
   */
  NetType?: string
  /**
   * 机型
   */
  Device?: string
  /**
   * 显示是否海外,1表示海外，0表示非海外；默认值为空，查询所有。
   */
  IsAbroad?: string
  /**
   * 操作系统
   */
  Os?: string
  /**
   * 浏览器
   */
  Browser?: string
  /**
   * 耗时计算方式
   */
  CostType?: string
  /**
   * 自定义测速的key的值
   */
  Url?: string
  /**
   * 环境
   */
  Env?: string
  /**
   * 自定义4
   */
  ExtFourth?: string
  /**
   * 自定义5
   */
  ExtFifth?: string
  /**
   * 自定义6
   */
  ExtSixth?: string
  /**
   * 自定义7
   */
  ExtSeventh?: string
  /**
   * 自定义8
   */
  ExtEighth?: string
  /**
   * 自定义9
   */
  ExtNinth?: string
  /**
   * 自定义10
   */
  ExtTenth?: string
  /**
   * 时间段
   */
  Granularity?: string
}

/**
 * 发布文件列表(SOURCEMAP)
 */
export interface ReleaseFile {
  /**
   * <p>文件版本</p>
   */
  Version?: string
  /**
   * <p>文件唯一 key</p>
   */
  FileKey?: string
  /**
   * <p>文件名</p>
   */
  FileName?: string
  /**
   * <p>文件哈希值</p>
   */
  FileHash?: string
  /**
   * <p>文件 id</p>
   */
  ID?: number
  /**
   * <p>创建时间</p>
   */
  CreatedAt?: string
}

/**
 * ModifyProjectLimit返回参数结构体
 */
export interface ModifyProjectLimitResponse {
  /**
   * 返回信息
   */
  Msg?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDataBridgeUrlV2请求参数结构体
 */
export interface DescribeDataBridgeUrlV2Request {
  /**
   * 项目ID
   */
  ID: number
  /**
   * 开始时间
   */
  StartTime: number
  /**
   * 结束时间
   */
  EndTime: number
  /**
   * pagepv：性能视图，allcount：性能视图，falls：页面加载瀑布图，samp：首屏时间，day：14天数据，nettype：网络/平台视图，performance：页面性能TOP视图，version/platform/isp/region/device/browser/ext1/ext2/ext3/ret/status/from/url/env/：ISP视图/地区视图/浏览器视图等
   */
  Type: string
  /**
   * 日志等级
   */
  Level?: string
  /**
   * 运营商
   */
  Isp?: string
  /**
   * 地区
   */
  Area?: string
  /**
   * 网络类型
   */
  NetType?: string
  /**
   * 平台
   */
  Platform?: string
  /**
   * 机型
   */
  Device?: string
  /**
   * 版本
   */
  VersionNum?: string
  /**
   * 自定义1
   */
  ExtFirst?: string
  /**
   * 自定义2
   */
  ExtSecond?: string
  /**
   * 自定义3
   */
  ExtThird?: string
  /**
   * 是否海外
   */
  IsAbroad?: string
  /**
   * 浏览器
   */
  Browser?: string
  /**
   * 操作系统
   */
  Os?: string
  /**
   * 浏览器引擎
   */
  Engine?: string
  /**
   * 品牌
   */
  Brand?: string
  /**
   * 来源页面
   */
  From?: string
  /**
   * 耗时计算方式
   */
  CostType?: string
  /**
   * 环境变量
   */
  Env?: string
  /**
   * url名称
   */
  Name?: string
  /**
   * http状态码
   */
  Status?: string
  /**
   * retcode
   */
  Ret?: string
  /**
   * 网络状态
   */
  NetStatus?: string
  /**
   * 自定义4
   */
  ExtFourth?: string
  /**
   * 自定义5
   */
  ExtFifth?: string
  /**
   * 自定义6
   */
  ExtSixth?: string
  /**
   * 自定义7
   */
  ExtSeventh?: string
  /**
   * 自定义8
   */
  ExtEighth?: string
  /**
   * 自定义9
   */
  ExtNinth?: string
  /**
   * 自定义10
   */
  ExtTenth?: string
  /**
   * 时间段
   */
  Granularity?: string
}

/**
 * ResumeProject请求参数结构体
 */
export interface ResumeProjectRequest {
  /**
   * 项目 id
   */
  ProjectId: number
}

/**
 * DescribeRumStatsLogList返回参数结构体
 */
export interface DescribeRumStatsLogListResponse {
  /**
   * 返回字符串
   */
  Result?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteTDEMApplication返回参数结构体
 */
export interface DeleteTDEMApplicationResponse {
  /**
   * <p>应用 ID</p>
   */
  AppId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateWhitelist请求参数结构体
 */
export interface CreateWhitelistRequest {
  /**
   * 实例ID：taw-123
   */
  InstanceID: string
  /**
   * 备注（暂未作字节数限制）
   */
  Remark: string
  /**
   * uin：业务方标识
   */
  WhitelistUin: string
  /**
   * 业务方标识
   */
  Aid?: string
}

/**
 * StopInstance返回参数结构体
 */
export interface StopInstanceResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyTDEMSampleConfig请求参数结构体
 */
export interface ModifyTDEMSampleConfigRequest {
  /**
   * <p>应用ID</p>
   */
  AppId: string
  /**
   * <p>事件采样配置 JSON 字符串。反序列化后：{"Enabled":bool,"Types":{&lt;event_type&gt;:{"SampleRate":0-100最多两位小数,"Rules":[{"Name":string,"Enabled":bool,"SampleRate":0-100,"Conditions":[{"Field":string,"Operator":string,"Value":string或string[]}]}]}}}。Types 可只含改过的 type；未出现的 type 服务端视为 100% + 空规则。Types key 闭集：js_error,promise_error,resource_error,api_error,blank_screen,no_response,page_load,web_vitals,lag_detected,memory_usage,memory_oom,resource_load,api_call,sse_call,click,page_view,tab_hidden,tab_visible,form_focus,form_blur,form_change,form_submit,form_submit_result,struggle,custom,log（不含 rage_click/lcp）。Operator 白名单：equals,not_equals,contains,not_contains,in,not_in,starts_with,ends_with。规则 Conditions 至少 1 条；in/not_in 的 Value 为字符串数组。</p>
   */
  Event: string
  /**
   * <p>回放采样配置 JSON 字符串。反序列化后：{"Enabled":bool,"ExperienceSampleRate":0-100最多两位小数,"ErrorTraceback":bool,"ErrorSampleRate":0-100最多两位小数}。控制台/远程字段名为 ExperienceSampleRate（非 SessionSampleRate）。</p>
   */
  Replay: string
}

/**
 * DescribeTDEMMetricTrend请求参数结构体
 */
export interface DescribeTDEMMetricTrendRequest {
  /**
   * <p>应用 ID（必填）</p>
   */
  AppId: string
  /**
   * <p>开始时间 Unix 毫秒（必填）</p>
   */
  StartTime: number
  /**
   * <p>结束时间 Unix 毫秒（必填）</p>
   */
  EndTime: number
  /**
   * <p>粒度：5m（默认）/ 1h / 1d；跨度大时服务端可加粗</p>
   */
  Granularity?: string
  /**
   * <p>顶层事件类型；单查必填，批量用 Queries 时可不填</p>
   */
  EventType?: string
  /**
   * <p>子类型；未知返回 0</p>
   */
  SubType?: string
  /**
   * <p>筛选条件 JSON 字符串：[{Key,Op,Values}]，走分析立方白名单</p>
   */
  Filters?: string
  /**
   * <p>指标名列表，如 count / rate；单查必填</p>
   */
  Metrics?: Array<string>
  /**
   * <p>分位/均值必填，如 lcp / duration</p>
   */
  MeasurementKey?: string
  /**
   * <p>批量查询，上限 32</p>
   */
  Queries?: Array<MetricQueryItem>
  /**
   * <p>对比窗开始 Unix 毫秒（仅 Trend 批量，须与 CompareEndTime 成对）</p>
   */
  CompareStartTime?: number
  /**
   * <p>对比窗结束 Unix 毫秒（仅 Trend 批量）</p>
   */
  CompareEndTime?: number
}

/**
 * ModifyProject请求参数结构体
 */
export interface ModifyProjectRequest {
  /**
   * 项目 id
   */
  ID: number
  /**
   * 应用名称(可选，不为空且最长为 200字符)
   */
  Name?: string
  /**
   * 项目网页地址(可选，最长为 256)
   */
  URL?: string
  /**
   * 项目仓库地址(可选，最长为 256)
   */
  Repo?: string
  /**
   * 项目需要转移到的实例 id(可选)
   */
  InstanceID?: string
  /**
   * 项目采样率(可选)
   */
  Rate?: string
  /**
   * 是否开启聚类(可选)
   */
  EnableURLGroup?: number
  /**
   * 项目类型(可接受值为 "web", "mp", "android", "ios", "node", "hippy", "weex", "viola", "rn")
   */
  Type?: string
  /**
   * 应用描述(可选，最长为 1000字符)
   */
  Desc?: string
  /**
   * 启动kafka配置
   */
  EnableKafka?: number
  /**
   * kafka_host
   */
  KafkaHost?: string
  /**
   * topic
   */
  KafkaTopic?: string
  /**
   * kafka_version
   */
  KafkaVersion?: string
  /**
   * kafka_username
   */
  SaslUserName?: string
  /**
   * kafka_pwd
   */
  SaslPassword?: string
  /**
   * SaslMechanism
   */
  SaslMechanism?: string
  /**
   * sink_id，日知汇算子id
   */
  SinkId?: number
}

/**
 * 分析指标趋势点
 */
export interface MetricTrendPoint {
  /**
   * <p>时间戳 Unix 毫秒</p>
   */
  Ts?: number
  /**
   * <p>该桶指标</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Metrics?: Array<FloatNameValue>
}

/**
 * CreateStarProject请求参数结构体
 */
export interface CreateStarProjectRequest {
  /**
   * 实例ID：taw-123
   */
  InstanceID: string
  /**
   * 项目ID
   */
  ID: number
}

/**
 * DescribeDataSetUrlStatisticsV2请求参数结构体
 */
export interface DescribeDataSetUrlStatisticsV2Request {
  /**
   * 开始时间
   */
  StartTime: number
  /**
   * allcount：性能视图，data：小程序，component：小程序相关，day：14天数据，nettype：网络/平台视图，performance：页面性能TOP视图，version/platform/isp/region/device/browser/ext1/ext2/ext3/ret/status/from/url/env/：ISP视图/地区视图/浏览器视图等
   */
  Type: string
  /**
   * 结束时间
   */
  EndTime: number
  /**
   * 项目ID
   */
  ID: number
  /**
   * 自定义2
   */
  ExtSecond?: string
  /**
   * 浏览器引擎
   */
  Engine?: string
  /**
   * 运营商
   */
  Isp?: string
  /**
   * 来源页面
   */
  From?: string
  /**
   * 日志等级
   */
  Level?: string
  /**
   * 品牌
   */
  Brand?: string
  /**
   * 地区
   */
  Area?: string
  /**
   * 版本
   */
  VersionNum?: string
  /**
   * 平台
   */
  Platform?: string
  /**
   * 自定义3
   */
  ExtThird?: string
  /**
   * 自定义1
   */
  ExtFirst?: string
  /**
   * 网络类型
   */
  NetType?: string
  /**
   * 机型
   */
  Device?: string
  /**
   * 显示是否海外,1表示海外，0表示非海外；默认值为空，查询所有。
   */
  IsAbroad?: string
  /**
   * 操作系统
   */
  Os?: string
  /**
   * 浏览器
   */
  Browser?: string
  /**
   * 耗时计算
   */
  CostType?: string
  /**
   * 环境
   */
  Env?: string
  /**
   * 获取package
   */
  PackageType?: string
  /**
   * 自定义4
   */
  ExtFourth?: string
  /**
   * 自定义5
   */
  ExtFifth?: string
  /**
   * 自定义6
   */
  ExtSixth?: string
  /**
   * 自定义7
   */
  ExtSeventh?: string
  /**
   * 自定义8
   */
  ExtEighth?: string
  /**
   * 自定义9
   */
  ExtNinth?: string
  /**
   * 自定义10
   */
  ExtTenth?: string
  /**
   * 时间段
   */
  Granularity?: string
}

/**
 * DescribeRumLogExportsV2请求参数结构体
 */
export interface DescribeRumLogExportsV2Request {
  /**
   * <p>每页返回任务数</p>
   */
  PageSize: number
  /**
   * <p>当前页码</p>
   */
  PageNum: number
  /**
   * <p>项目ID</p>
   */
  ID: number
}

/**
 * Rum 项目信息
 */
export interface RumProject {
  /**
   * 项目名
   */
  Name?: string
  /**
   * 创建者 id
   */
  Creator?: string
  /**
   * 实例 id
   */
  InstanceID?: string
  /**
   * 项目类型
   */
  Type?: string
  /**
   * 创建时间
   */
  CreateTime?: string
  /**
   * 项目仓库地址
   */
  Repo?: string
  /**
   * 项目网址地址
   */
  URL?: string
  /**
   * 项目采样频率
   */
  Rate?: string
  /**
   * 项目唯一key（长度 12 位）
   */
  Key?: string
  /**
   * 是否开启url聚类
   */
  EnableURLGroup?: number
  /**
   * 实例名
   */
  InstanceName?: string
  /**
   * 项目 ID
   */
  ID?: number
  /**
   * 实例 key
   */
  InstanceKey?: string
  /**
   * 项目描述
   */
  Desc?: string
  /**
   * 是否星标  1:是 0:否
   */
  IsStar?: number
  /**
   * 项目状态(1 创建中，2 运行中，3 异常，4 重启中，5 停止中，6 已停止， 7 销毁中，8 已销毁)
   */
  ProjectStatus?: number
  /**
   * 日志接入点，用户忽略。
   */
  AccessPoint?: string
  /**
   * kafka旁路配置信息
   */
  Kafka?: Kafka
}

/**
 * DescribeFOOMMallocProblemList请求参数结构体
 */
export interface DescribeFOOMMallocProblemListRequest {
  /**
   * <p>产品Id</p>
   */
  ProductId: string
  /**
   * <p>提供给前端使用，当填写本字段时，会覆盖 formlist 的值</p>
   */
  ParamToken?: string
  /**
   * <p>接口调试专用，当 token 为空时，以这里的 value 作为筛选表单信息</p>
   */
  FormListString?: string
  /**
   * <p>当前页码</p>
   */
  PageNumber?: number
  /**
   * <p>每页展示最大数量</p>
   */
  PageSize?: number
  /**
   * <p>排序字段</p>
   */
  SortField?: string
  /**
   * <p>排序类型</p>
   */
  SortType?: string
  /**
   * <p>拓展数据</p>
   */
  ExtraData?: string
  /**
   * <p>请求头</p>
   */
  RequestHeader?: string
}

/**
 * DescribeTDEMFunnelStepSessionList返回参数结构体
 */
export interface DescribeTDEMFunnelStepSessionListResponse {
  /**
   * <p>请求结果</p>
   */
  Result?: string
  /**
   * <p>错误信息</p>
   */
  ErrorMsg?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 用量明细行
 */
export interface UsageDetailRow {
  /**
   * <p>业务系统 ID</p>
   */
  InstanceId?: string
  /**
   * <p>业务系统名称</p>
   */
  InstanceName?: string
  /**
   * <p>业务系统状态</p>
   */
  InstanceStatus?: number
  /**
   * <p>应用 ID</p>
   */
  AppId?: string
  /**
   * <p>应用名称</p>
   */
  AppName?: string
  /**
   * <p>端类型</p>
   */
  AppType?: string
  /**
   * <p>应用状态</p>
   */
  AppStatus?: number
  /**
   * <p>上报量</p>
   */
  ReportVolume?: number
  /**
   * <p>占当前结果集比例</p>
   */
  Percent?: number
  /**
   * <p>行趋势</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  ByDate?: Array<UsageTimePoint>
}

/**
 * DescribeScores返回参数结构体
 */
export interface DescribeScoresResponse {
  /**
   * 数组
   */
  ScoreSet?: Array<ScoreInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 事件排行时序点
 */
export interface EventRankPoint {
  /**
   * <p>时间戳 Unix 毫秒</p>
   */
  Ts?: number
  /**
   * <p>次数</p>
   */
  Count?: number
  /**
   * <p>失败次数</p>
   */
  Fail?: number
  /**
   * <p>耗时</p>
   */
  Duration?: number
}

/**
 * DescribeTDEMMetricDistribution返回参数结构体
 */
export interface DescribeTDEMMetricDistributionResponse {
  /**
   * <p>单查分布桶</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Items?: Array<MetricDistributionItem>
  /**
   * <p>单查合计，批量为空时省略</p>
   */
  Total?: number
  /**
   * <p>批量结果，Queries 非空时返回</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Results?: Array<MetricDistributionBatchItem>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeTDEMOverviewScores请求参数结构体
 */
export interface DescribeTDEMOverviewScoresRequest {
  /**
   * <p>应用 ID 列表，1-200（必填）</p>
   */
  AppIds: Array<string>
  /**
   * <p>开始时间 Unix 毫秒（必填）</p>
   */
  StartTime: number
  /**
   * <p>结束时间 Unix 毫秒（必填）</p>
   */
  EndTime: number
  /**
   * <p>筛选条件 JSON 字符串，格式为 [{Key,Op,Values}]。可选。总览总分按环境筛选时传入。</p>
   */
  Filters?: string
}

/**
 * DescribeSymbolArtifacts返回参数结构体
 */
export interface DescribeSymbolArtifactsResponse {
  /**
   * <p>制品列表，JSON 格式字符串，包含 artifacts、next_cursor 和 total。</p>
   */
  Result?: string
  /**
   * <p>错误信息</p>
   */
  ErrorMsg?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeTDEMRelatedEvents返回参数结构体
 */
export interface DescribeTDEMRelatedEventsResponse {
  /**
   * <p>关联事件，schema 与 Search 列表项相同</p>
   */
  Events?: Array<ExplorationEventItem>
  /**
   * <p>偏移</p>
   */
  Offset?: number
  /**
   * <p>条数</p>
   */
  Limit?: number
  /**
   * <p>是否还有下一页</p>
   */
  HasMore?: boolean
  /**
   * <p>各分类计数，Key 为分类 id</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  CategoryCounts?: Array<IntKeyValue>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 异常维度同批计数桶；IncludedInTotal 表示计入父行总数，ParentKey 表示包含关系。
 */
export interface ExceptionBucket {
  /**
   * <p>固定目录分类 key，与请求平台、CategoryKeys 或 EventTypes 派生目录一致。</p>
   */
  Key?: string
  /**
   * <p>精确事件行数，0至9007199254740991的整数，0必须保留。</p>
   */
  Count?: number
  /**
   * <p>是否为计入 TotalCount 的互斥主项。包含项为false，不重复计总。</p>
   */
  IncludedInTotal?: boolean
  /**
   * <p>包含项所属主项的 Key；主项不返回该字段。</p>
   */
  ParentKey?: string
}

/**
 * DeleteTDEMBusinessSystem请求参数结构体
 */
export interface DeleteTDEMBusinessSystemRequest {
  /**
   * <p>业务系统 ID（必填）</p>
   */
  InstanceId: string
}

/**
 * 字段值替换规则
 */
export interface FieldTransformRuleItem {
  /**
   * <p>规则 ID</p>
   */
  Id?: number
  /**
   * <p>应用 ID</p>
   */
  AppId?: string
  /**
   * <p>规则名称</p>
   */
  Name?: string
  /**
   * <p>目标字段</p>
   */
  TargetField?: string
  /**
   * <p>匹配方式：exact / prefix / contains / regex</p>
   */
  MatchType?: string
  /**
   * <p>匹配模式</p>
   */
  MatchPattern?: string
  /**
   * <p>替换动作：replace / regex_replace / mask</p>
   */
  TransformAction?: string
  /**
   * <p>替换值</p>
   */
  ReplaceValue?: string
  /**
   * <p>优先级</p>
   */
  Priority?: number
  /**
   * <p>是否启用</p>
   */
  Enabled?: boolean
  /**
   * <p>创建人</p>
   */
  CreatedBy?: string
  /**
   * <p>更新人</p>
   */
  UpdatedBy?: string
  /**
   * <p>创建时间</p>
   */
  CreatedAt?: string
  /**
   * <p>更新时间</p>
   */
  UpdatedAt?: string
}

/**
 * DescribeReplayDetails请求参数结构体
 */
export interface DescribeReplayDetailsRequest {
  /**
   * <p>应用id</p>
   */
  AppId: string
  /**
   * <p>会话id</p>
   */
  SessionId: string
  /**
   * <p>回放id</p>
   */
  ReplayId: string
  /**
   * <p>事件类别， 默认为all</p>
   */
  Categories?: string
  /**
   * <p>每页返回数量</p>
   */
  Limit?: number
  /**
   * <p>游标分页，传上一次返回的 NextCursor 值。首次请求不传</p>
   */
  Cursor?: number
  /**
   * <p>起始偏移（毫秒），相对于录屏开始时间。用于只查某个时间段的事件</p>
   */
  StartOffsetMs?: number
  /**
   * <p>结束偏移（毫秒），必须 ≥ StartOffsetMs</p>
   */
  EndOffsetMs?: number
}

/**
 * DescribeStruggleDistribution请求参数结构体
 */
export interface DescribeStruggleDistributionRequest {
  /**
   * <p>应用id</p>
   */
  AppId: string
  /**
   * <p>开始时间戳</p>
   */
  StartTime: number
  /**
   * <p>结束时间戳</p>
   */
  EndTime: number
  /**
   * <p>平台</p>
   */
  Platform?: string
  /**
   * <p>过滤条件</p>
   */
  Filters?: string
  /**
   * <p>旅程筛选条件 JSON 字符串，格式与 Filters 相同：[{Key,Op,Values}]。可选。不传表示不过滤。</p>
   */
  JourneyFilters?: string
  /**
   * <p>是否只看包含挣扎的会话。可选。不传表示不过滤。</p>
   */
  HasStruggle?: boolean
  /**
   * <p>旅程起点页面。可选。不传表示不过滤。</p>
   */
  StartPage?: string
  /**
   * <p>旅程终点页面。可选。不传表示不过滤。</p>
   */
  EndPage?: string
}

/**
 * DescribeSymbolArtifactUploadCredential返回参数结构体
 */
export interface DescribeSymbolArtifactUploadCredentialResponse {
  /**
   * <p>上传临时凭证，JSON 格式字符串。</p>
   */
  Result?: string
  /**
   * <p>错误信息</p>
   */
  ErrorMsg?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteInstance请求参数结构体
 */
export interface DeleteInstanceRequest {
  /**
   * 需要删除的实例id
   */
  InstanceId: string
}

/**
 * DescribeFieldValues返回参数结构体
 */
export interface DescribeFieldValuesResponse {
  /**
   * <p>返回结果</p>
   */
  Result?: string
  /**
   * <p>错误信息</p>
   */
  ErrorMsg?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyTDEMFieldTransformRule请求参数结构体
 */
export interface ModifyTDEMFieldTransformRuleRequest {
  /**
   * <p>规则 ID（必填）</p>
   */
  Id: number
  /**
   * <p>应用 ID（必填）</p>
   */
  AppId: string
  /**
   * <p>目标字段（必填）</p>
   */
  TargetField: string
  /**
   * <p>匹配方式（必填）：exact / prefix / contains / regex</p>
   */
  MatchType: string
  /**
   * <p>匹配模式（必填）</p>
   */
  MatchPattern: string
  /**
   * <p>替换动作（必填）：replace / regex_replace / mask</p>
   */
  TransformAction: string
  /**
   * <p>规则名称（可选）</p>
   */
  Name?: string
  /**
   * <p>替换值</p>
   */
  ReplaceValue?: string
  /**
   * <p>优先级</p>
   */
  Priority?: number
  /**
   * <p>是否启用</p>
   */
  Enabled?: boolean
}

/**
 * DescribeDataWebVitalsPage请求参数结构体
 */
export interface DescribeDataWebVitalsPageRequest {
  /**
   * 开始时间
   */
  StartTime: number
  /**
   * 结束时间
   */
  EndTime: number
  /**
   * 项目ID
   */
  ID: number
  /**
   * 自定义2
   */
  ExtSecond?: string
  /**
   * 浏览器引擎
   */
  Engine?: string
  /**
   * 运营商
   */
  Isp?: string
  /**
   * 查询维度：from=按页面来源(from)聚合输出；其他值/空值=输出整体汇总。
   */
  From?: string
  /**
   * 日志等级
   */
  Level?: string
  /**
   * 按页面来源分组（group by from），返回每个页面的 LCP/FID/CLS/FCP
   */
  Type?: string
  /**
   * 品牌
   */
  Brand?: string
  /**
   * 地区
   */
  Area?: string
  /**
   * 版本
   */
  VersionNum?: string
  /**
   * 平台
   */
  Platform?: string
  /**
   * 自定义3
   */
  ExtThird?: string
  /**
   * 自定义1
   */
  ExtFirst?: string
  /**
   * 网络类型(tag 值):用于过滤/聚合字段 netType；枚举值：1(WiFi)、2(2G)、3(3G)、4(4G)、5(5G)、6(6G)、100(未知网络)。
   */
  NetType?: string
  /**
   * 机型
   */
  Device?: string
  /**
   * 显示是否海外,1表示海外，0表示非海外；默认值为空，查询所有。
   */
  IsAbroad?: string
  /**
   * 操作系统
   */
  Os?: string
  /**
   * 浏览器
   */
  Browser?: string
  /**
   * Web Vitals 口径："50"/"75"/"90"/"95"/"99"/"99.5" 分别表示 TP50/TP75/TP90/TP95/TP99/TP99.5（percentile2）；"avg" 表示均值（avg）。
   */
  CostType?: string
  /**
   * 环境
   */
  Env?: string
}

/**
 * DescribeTDEMUsageDetail返回参数结构体
 */
export interface DescribeTDEMUsageDetailResponse {
  /**
   * <p>总行数</p>
   */
  TotalCount?: number
  /**
   * <p>当前结果集上报合计</p>
   */
  ReportVolume?: number
  /**
   * <p>明细</p>
   */
  DetailSet?: Array<UsageDetailRow>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDataFetchUrlInfo请求参数结构体
 */
export interface DescribeDataFetchUrlInfoRequest {
  /**
   * 开始时间
   */
  StartTime: number
  /**
   * Type	是	String	无枚举值。此接口不使用 Type 做分支判断，SQL 固定 group by "url"，Type 字段传任何值不影响查询。

   */
  Type: string
  /**
   * 结束时间
   */
  EndTime: number
  /**
   * 项目ID
   */
  ID: number
  /**
   * 自定义2
   */
  ExtSecond?: string
  /**
   * 浏览器引擎
   */
  Engine?: string
  /**
   * 运营商
   */
  Isp?: string
  /**
   * 来源页面
   */
  From?: string
  /**
   * 日志等级
   */
  Level?: string
  /**
   * 品牌
   */
  Brand?: string
  /**
   * 地区
   */
  Area?: string
  /**
   * 版本
   */
  VersionNum?: string
  /**
   * 平台
   */
  Platform?: string
  /**
   * 自定义3
   */
  ExtThird?: string
  /**
   * 自定义1
   */
  ExtFirst?: string
  /**
   * 网络类型(tag 值):用于过滤/聚合字段 netType；枚举值：1(WiFi)、2(2G)、3(3G)、4(4G)、5(5G)、6(6G)、100(未知网络)。
   */
  NetType?: string
  /**
   * 机型
   */
  Device?: string
  /**
   * 显示是否海外,1表示海外，0表示非海外；默认值为空，查询所有。
   */
  IsAbroad?: string
  /**
   * 操作系统
   */
  Os?: string
  /**
   * 浏览器
   */
  Browser?: string
  /**
   * 耗时口径："50"/"75"/"90"/"95"/"99"/"99.5" 分别表示 TP50/TP75/TP90/TP95/TP99/TP99.5（percentile2）；"avg" 表示均值（avg）。
   */
  CostType?: string
  /**
   * 来源
   */
  Url?: string
  /**
   * 环境
   */
  Env?: string
}

/**
 * DescribeFOOMReportList返回参数结构体
 */
export interface DescribeFOOMReportListResponse {
  /**
   * <p>返回值</p>
   */
  Data?: string
  /**
   * <p>消息</p>
   */
  Message?: string
  /**
   * <p>状态码</p>
   */
  Code?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateFieldTransformRule返回参数结构体
 */
export interface CreateFieldTransformRuleResponse {
  /**
   * <p>结果</p>
   */
  Result?: string
  /**
   * <p>错误消息</p>
   */
  ErrorMsg?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyFieldTransformRule请求参数结构体
 */
export interface ModifyFieldTransformRuleRequest {
  /**
   * <p>规则id</p>
   */
  Id: number
  /**
   * <p>项目id</p>
   */
  ProjectId: number
  /**
   * <p>规则名</p>
   */
  Name: string
  /**
   * <p>目标字段</p>
   */
  TargetField: string
  /**
   * <p>匹配方式</p>
   */
  MatchType: string
  /**
   * <p>匹配规则</p>
   */
  MatchPattern: string
  /**
   * <p>转换方式</p>
   */
  TransformAction: string
  /**
   * <p>替换值</p>
   */
  ReplaceValue?: string
  /**
   * <p>规则优先级</p>
   */
  Priority?: number
  /**
   * <p>是否开启</p>
   */
  Enabled?: boolean
}

/**
 * DescribeFieldTransformRules请求参数结构体
 */
export interface DescribeFieldTransformRulesRequest {
  /**
   * <p>项目id</p>
   */
  ProjectId: number
  /**
   * <p>偏移</p>
   */
  Offset?: number
  /**
   * <p>限制</p>
   */
  Limit?: number
}

/**
 * DeleteTDEMFunnel请求参数结构体
 */
export interface DeleteTDEMFunnelRequest {
  /**
   * <p>应用id</p>
   */
  AppId: string
  /**
   * <p>漏斗id</p>
   */
  FunnelId: string
}

/**
 * DescribeAppDimensionMetrics返回参数结构体
 */
export interface DescribeAppDimensionMetricsResponse {
  /**
   * 查询数据返回
   */
  Data?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeTDEMSSEDimensions返回参数结构体
 */
export interface DescribeTDEMSSEDimensionsResponse {
  /**
   * <p>按当前指标值降序的维度行，最多 200 行。没有对话时为空数组。</p>
   */
  Rows?: Array<TDEMSSEDimensionRow>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateTDEMFunnel请求参数结构体
 */
export interface CreateTDEMFunnelRequest {
  /**
   * <p>应用id</p>
   */
  AppId: string
  /**
   * <p>漏斗名</p>
   */
  FunnelName: string
  /**
   * <p>漏斗步骤</p>
   */
  Steps: Array<FunnelStepInput>
  /**
   * <p>描述</p>
   */
  Description?: string
  /**
   * <p>漏斗状态</p>
   */
  Status?: string
  /**
   * <p>漏斗来源</p>
   */
  Source?: string
}

/**
 * 大模型对话分布档
 */
export interface TDEMSSEDistributionBin {
  /**
   * <p>档位左端，左闭。</p>
   */
  Start?: number
  /**
   * <p>档位右端。溢出档省略。</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  End?: number
  /**
   * <p>是否为溢出档。溢出档为 true，且不返回 End。</p>
   */
  Overflow?: boolean
  /**
   * <p>落入该档的对话次数。</p>
   */
  Count?: number
  /**
   * <p>该档占有效样本的百分比，已乘 100。</p>
   */
  Rate?: number
}

/**
 * DescribeRumGroupLog请求参数结构体
 */
export interface DescribeRumGroupLogRequest {
  /**
   * <p>排序方式  desc  asc（必填）</p>
   */
  OrderBy: string
  /**
   * <p>开始时间（必填）</p>
   */
  StartTime: string
  /**
   * <p>单次查询返回的原始日志条数，最大值为100（必填）</p>
   */
  Limit: number
  /**
   * <p>页数，第几页（注意：该字段已废弃！）</p>
   */
  Page: number
  /**
   * <p>查询语句，参考控制台请求参数，语句长度最大为4096（必填）</p>
   */
  Query: string
  /**
   * <p>结束时间（必填）</p>
   */
  EndTime: string
  /**
   * <p>项目ID（必填）</p>
   */
  ID: number
  /**
   * <p>聚合字段</p>
   */
  GroupField: string
}

/**
 * ModifyProject返回参数结构体
 */
export interface ModifyProjectResponse {
  /**
   * 操作信息
   */
  Msg?: string
  /**
   * 项目id
   */
  ID?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeTDEMSSETrend返回参数结构体
 */
export interface DescribeTDEMSSETrendResponse {
  /**
   * <p>时间桶宽度，单位秒。</p>
   */
  IntervalSec?: number
  /**
   * <p>Dimension 为 overall 时的时间桶。没有对话时为空数组。</p>
   */
  Points?: Array<TDEMSSETrendPoint>
  /**
   * <p>非 overall 时按指标从高到低取 TopN 后的序列。没有对话时为空数组。</p>
   */
  Series?: Array<TDEMSSETrendSeries>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 批量趋势条目
 */
export interface MetricTrendBatchItem {
  /**
   * <p>条目 Key</p>
   */
  Key?: string
  /**
   * <p>主窗时序</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Series?: Array<MetricTrendPoint>
  /**
   * <p>对比窗时序</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  CompareSeries?: Array<MetricTrendPoint>
  /**
   * <p>可能尚未采集，false 时省略</p>
   */
  MaybeUncollected?: boolean
}

/**
 * ModifyTDEMBusinessSystem返回参数结构体
 */
export interface ModifyTDEMBusinessSystemResponse {
  /**
   * <p>业务系统 ID</p>
   */
  InstanceId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 探索事件列表项
 */
export interface ExplorationEventItem {
  /**
   * <p>事件 ID</p>
   */
  EventId?: string
  /**
   * <p>事件类型</p>
   */
  EventType?: string
  /**
   * <p>事件名</p>
   */
  EventName?: string
  /**
   * <p>事件分类</p>
   */
  EventCategory?: string
  /**
   * <p>时间戳 Unix 毫秒</p>
   */
  Timestamp?: number
  /**
   * <p>会话 ID</p>
   */
  SessionId?: string
  /**
   * <p>视图 ID</p>
   */
  ViewId?: string
  /**
   * <p>业务用户 ID</p>
   */
  UserId?: string
  /**
   * <p>设备 ID</p>
   */
  DeviceId?: string
  /**
   * <p>页面 URL</p>
   */
  PageUrl?: string
  /**
   * <p>归一化页面 URL</p>
   */
  NormalizedPageUrl?: string
  /**
   * <p>页面标题</p>
   */
  PageTitle?: string
  /**
   * <p>平台</p>
   */
  Platform?: string
  /**
   * <p>应用版本</p>
   */
  AppVersion?: string
  /**
   * <p>操作系统</p>
   */
  Os?: string
  /**
   * <p>浏览器</p>
   */
  Browser?: string
  /**
   * <p>设备类型</p>
   */
  DeviceType?: string
  /**
   * <p>国家</p>
   */
  Country?: string
  /**
   * <p>省份</p>
   */
  Province?: string
  /**
   * <p>城市</p>
   */
  City?: string
  /**
   * <p>运营商</p>
   */
  Isp?: string
  /**
   * <p>网络类型</p>
   */
  NetworkType?: string
  /**
   * <p>IP</p>
   */
  Ip?: string
  /**
   * <p>资源 URL</p>
   */
  ResourceUrl?: string
  /**
   * <p>资源类型</p>
   */
  ResourceType?: string
  /**
   * <p>目标元素</p>
   */
  TargetElement?: string
  /**
   * <p>目标文本</p>
   */
  TargetText?: string
  /**
   * <p>日志级别</p>
   */
  LogLevel?: string
  /**
   * <p>问题单 ID</p>
   */
  IssueId?: string
  /**
   * <p>是否已符号化 0/1</p>
   */
  IsSourceMapped?: number
  /**
   * <p>测量值</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Measurements?: Array<FloatKeyValue>
  /**
   * <p>事件属性</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  EventProperties?: Array<StringKeyValue>
  /**
   * <p>异常栈摘要</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  ExceptionStacks?: Array<ExplorationExceptionStack>
  /**
   * <p>事件标签列表。APM 全链路时包含 Key=trace_id，Value 为 32 位 hex TraceId（不是整段 traceparent）。无标签时省略或空数组。</p>
   */
  Tags?: Array<StringKeyValue>
}

/**
 * DescribeFOOMProblemList请求参数结构体
 */
export interface DescribeFOOMProblemListRequest {
  /**
   * <p>产品Id</p>
   */
  ProductId: string
  /**
   * <p>提供给前端使用，当填写本字段时，会覆盖 formlist 的值</p>
   */
  ParamToken?: string
  /**
   * <p>接口调试专用，当 token 为空时，以这里的 value 作为筛选表单信息</p>
   */
  FormListString?: string
  /**
   * <p>当前页码</p>
   */
  PageNumber?: number
  /**
   * <p>每页展示最大数量</p>
   */
  PageSize?: number
  /**
   * <p>排序字段</p>
   */
  SortField?: string
  /**
   * <p>排序类型</p>
   */
  SortType?: string
  /**
   * <p>拓展数据</p>
   */
  ExtraData?: string
  /**
   * <p>请求头</p>
   */
  RequestHeader?: string
}

/**
 * DescribePvList请求参数结构体
 */
export interface DescribePvListRequest {
  /**
   * ID
   */
  ProjectId: number
  /**
   * 结束时间
   */
  EndTime: string
  /**
   * 开始时间
   */
  StartTime: string
  /**
   * 对PV指标的查询维度。获取day：d，   获取min则不填。
   */
  Dimension?: string
}

/**
 * DescribeTDEMDialOverview返回参数结构体
 */
export interface DescribeTDEMDialOverviewResponse {
  /**
   * <p>任务数</p>
   */
  TaskCount?: number
  /**
   * <p>执行批次数</p>
   */
  ExecutionCount?: number
  /**
   * <p>成功批次数</p>
   */
  SuccessCount?: number
  /**
   * <p>失败批次数</p>
   */
  FailCount?: number
  /**
   * <p>平均时延，单位毫秒</p>
   */
  AvgDuration?: number
  /**
   * <p>平均丢包率，0 到 100</p>
   */
  AvgLoss?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDataLogUrlStatisticsV2请求参数结构体
 */
export interface DescribeDataLogUrlStatisticsV2Request {
  /**
   * 开始时间
   */
  StartTime: number
  /**
   * analysis：异常分析，compare：异常列表对比，allcount：性能视图，condition：条件列表，nettype/version/platform/isp/region/device/browser/ext1/ext2/ext3/ret/status/from/url/env/：网络平台视图/Version视图/设备视图/ISP视图/地区视图/浏览器视图/ext1视图等
   */
  Type: string
  /**
   * 结束时间
   */
  EndTime: number
  /**
   * 项目ID
   */
  ID: number
  /**
   * 自定义2
   */
  ExtSecond?: string
  /**
   * 浏览器引擎
   */
  Engine?: string
  /**
   * 运营商
   */
  Isp?: string
  /**
   * 来源页面
   */
  From?: string
  /**
   * 日志等级
   */
  Level?: string
  /**
   * 品牌
   */
  Brand?: string
  /**
   * 地区
   */
  Area?: string
  /**
   * 版本
   */
  VersionNum?: string
  /**
   * 平台
   */
  Platform?: string
  /**
   * 自定义3
   */
  ExtThird?: string
  /**
   * 自定义1
   */
  ExtFirst?: string
  /**
   * 网络类型
   */
  NetType?: string
  /**
   * 机型
   */
  Device?: string
  /**
   * 显示是否海外,1表示海外，0表示非海外；默认值为空，查询所有。
   */
  IsAbroad?: string
  /**
   * 操作系统
   */
  Os?: string
  /**
   * 浏览器
   */
  Browser?: string
  /**
   * 环境区分
   */
  Env?: string
  /**
   * js异常信息
   */
  ErrorMsg?: string
  /**
   * 自定义4
   */
  ExtFourth?: string
  /**
   * 自定义5
   */
  ExtFifth?: string
  /**
   * 自定义6
   */
  ExtSixth?: string
  /**
   * 自定义7
   */
  ExtSeventh?: string
  /**
   * 自定义8
   */
  ExtEighth?: string
  /**
   * 自定义9
   */
  ExtNinth?: string
  /**
   * 自定义10
   */
  ExtTenth?: string
  /**
   * 时间段
   */
  Granularity?: string
}

/**
 * ModifyTDEMFunnel返回参数结构体
 */
export interface ModifyTDEMFunnelResponse {
  /**
   * <p>请求结果</p>
   */
  Result?: string
  /**
   * <p>错误信息</p>
   */
  ErrorMsg?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDataStaticResourceV2返回参数结构体
 */
export interface DescribeDataStaticResourceV2Response {
  /**
   * 返回值
   */
  Result?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeIssueAffectedUsers返回参数结构体
 */
export interface DescribeIssueAffectedUsersResponse {
  /**
   * <p>业务数据 JSON 字符串，反序列化后：{Users,Total,Page,PageSize}。 Users[] 含 UserId（身份值）、HasUin（是否来自 user_id）、EventCount、FirstSeen / LastSeen（毫秒时间戳）。</p>
   */
  Result?: string
  /**
   * <p>错误信息（成功时为空）</p>
   */
  ErrorMsg?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeIssues请求参数结构体
 */
export interface DescribeIssuesRequest {
  /**
   * <p>应用 ID</p>
   */
  AppId: string
  /**
   * <p>开始时间，Unix 毫秒时间戳</p>
   */
  StartTime: number
  /**
   * <p>结束时间，Unix 毫秒时间戳</p>
   */
  EndTime: number
  /**
   * <p>环境过滤，如 prod、test</p>
   */
  Env?: string
  /**
   * <p>Issue 类型过滤，可选值：native_crash、js_error、event_loop_block</p>
   */
  IssueTypes?: Array<string>
  /**
   * <p>状态过滤，可选值：Unresolved、Resolved、Ignored、Regressed</p>
   */
  Statuses?: Array<string>
  /**
   * <p>Issue 标题或错误关键字模糊搜索</p>
   */
  Keyword?: string
  /**
   * <p>扩展过滤器 JSON 字符串；白名单字段包括 app_version、country、province、city、device_type、browser、os、isp、referrer、user_type、platform、normalized_page_url、event_type、issue_id、environment、process_type</p>
   */
  Filters?: string
  /**
   * <p>排序字段，可选值：last_seen、first_seen、event_count、affected_users</p>
   */
  SortBy?: string
  /**
   * <p>排序方向，可选值：asc、desc</p>
   */
  SortOrder?: string
  /**
   * <p>页码，默认 1</p>
   */
  Page?: number
  /**
   * <p>分页大小，默认 20，范围 1~100</p>
   */
  PageSize?: number
}

/**
 * DescribeDataFetchProject请求参数结构体
 */
export interface DescribeDataFetchProjectRequest {
  /**
   * 开始时间，示例值：1625454840
   */
  StartTime: number
  /**
   * allcount：性能视图，day：14天数据，condition：条件列表，area：请求速度分布，nettype/version/platform/isp/region/device/browser/ext1/ext2/ext3/ret/status/from/url/env/：网络平台视图/Version视图/设备视图/ISP视图/地区视图/浏览器视图/ext1视图等等
   */
  Type: string
  /**
   * 结束时间，示例值：1625454840
   */
  EndTime: number
  /**
   * 项目ID
   */
  ID: number
  /**
   * 自定义2
   */
  ExtSecond?: string
  /**
   * 浏览器引擎
   */
  Engine?: string
  /**
   * 运营商
   */
  Isp?: string
  /**
   * 来源页面
   */
  From?: string
  /**
   * 日志等级（1表示白名单日志，2表示一般日志，4表示错误日志，8表示Promise 错误，16表示Ajax 请求异常，32表示JS 加载异常，64表示图片加载异常，128表示css 加载异常，256表示console.error，512表示音视频资源异常，1024表示retcode 异常，2048表示aegis report，4096表示PV日志，8192表示自定义事件，16384表示小程序 页面不存在，32768表示websocket错误，65536表示js bridge错误）
   */
  Level?: string
  /**
   * 品牌
   */
  Brand?: string
  /**
   * 地区
   */
  Area?: string
  /**
   * 版本
   */
  VersionNum?: string
  /**
   * 平台
   */
  Platform?: string
  /**
   * 自定义3
   */
  ExtThird?: string
  /**
   * 自定义1
   */
  ExtFirst?: string
  /**
   * 网络类型（1,2,3,4,5,100），1表示WIFI, 2表示2G, 3表示3G, 4表示4G, 5表示5G, 6表示6G, 100表示未知。
   */
  NetType?: string
  /**
   * 机型
   */
  Device?: string
  /**
   * 是否海外,1表示海外，0表示非海外；默认值为空，查询所有。
   */
  IsAbroad?: string
  /**
   * 操作系统
   */
  Os?: string
  /**
   * 浏览器
   */
  Browser?: string
  /**
   * 耗时口径："50"/"75"/"90"/"95"/"99"/"99.5" 分别表示 TP50/TP75/TP90/TP95/TP99/TP99.5（percentile2）；"avg" 表示均值（avg）。
   */
  CostType?: string
  /**
   * 来源
   */
  Url?: string
  /**
   * 环境
   */
  Env?: string
  /**
   * HTTP 状态码（tag 值）：用于过滤字段 status；取值一般为 200/301/404/500 等，也可配合 4xx/5xx 统计逻辑使用
   */
  Status?: string
  /**
   * retcode
   */
  Ret?: string
}

/**
 * DescribeData返回参数结构体
 */
export interface DescribeDataResponse {
  /**
   * 返回字符串
   */
  Result?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * Rum片区信息
 */
export interface RumAreaInfo {
  /**
   * 片区Id
   */
  AreaId: number
  /**
   * 片区状态(1=有效，2=无效)
   */
  AreaStatus: number
  /**
   * 片区名称
   */
  AreaName: string
  /**
   * 片区Key
   */
  AreaKey: string
  /**
   * 地域码表 id
   */
  AreaRegionID: string
  /**
   * 地域码表 code 如 ap-xxx（xxx 为地域词）
   */
  AreaRegionCode: string
  /**
   * 地域缩写
   */
  AreaAbbr: string
}

/**
 * DescribeRumLogExportV2请求参数结构体
 */
export interface DescribeRumLogExportV2Request {
  /**
   * <p>Name（string，必填）：导出任务名称标识，需要在使用API创建导出任务时填写。此字段为后续能力扩展预留，不在查询结果中返回。</p>
   */
  Name: string
  /**
   * <p>查询日志开始时间(必填)</p>
   */
  StartTime: number
  /**
   * <p>过滤条件，其中key与运算符(Operator)对应可选字段枚举值与示例查看文档：<a href="https://cloud.tencent.com/document/product/248/87223">日志查询相关</a></p>
   */
  Filter: string
  /**
   * <p>查询日志结束时间(必填)</p>
   */
  EndTime: number
  /**
   * <p>项目ID</p>
   */
  ID: number
  /**
   * <p>注意：这个字段必选，不能为空！选择要导出哪些字段的参数，对应日志的列，可查看文档：<a href="https://cloud.tencent.com/document/product/248/87223">日志查询相关</a></p><p>枚举值：</p><ul><li>level： 日志类型</li><li>url： URL</li><li>ip： 用户终端IP</li><li>version： 版本</li></ul>
   */
  Fields?: Array<string>
}

/**
 * ModifyInstance请求参数结构体
 */
export interface ModifyInstanceRequest {
  /**
   * 要修改的实例id
   */
  InstanceId: string
  /**
   * 新的实例名称(长度最大不超过255)
   */
  InstanceName?: string
  /**
   * 新的实例描述(长度最大不超过1024)
   */
  InstanceDesc?: string
}

/**
 * DescribeAppMetricsData返回参数结构体
 */
export interface DescribeAppMetricsDataResponse {
  /**
   * 查询数据返回
   */
  Data?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeAppSingleCaseDetailList返回参数结构体
 */
export interface DescribeAppSingleCaseDetailListResponse {
  /**
   * 查询数据返回
   */
  Data?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ResumeTDEMApplication返回参数结构体
 */
export interface ResumeTDEMApplicationResponse {
  /**
   * <p>应用 ID</p>
   */
  AppId?: string
  /**
   * <p>恢复后为 2</p>
   */
  Status?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ResumeTDEMApplication请求参数结构体
 */
export interface ResumeTDEMApplicationRequest {
  /**
   * <p>应用 ID（必填）</p>
   */
  AppId: string
}

/**
 * DescribeTDEMDialDimensions请求参数结构体
 */
export interface DescribeTDEMDialDimensionsRequest {
  /**
   * <p>应用 ID</p>
   */
  AppId: string
  /**
   * <p>开始时间，毫秒时间戳</p>
   */
  StartTime: number
  /**
   * <p>结束时间，毫秒时间戳，必须大于 StartTime</p>
   */
  EndTime: number
  /**
   * <p>维度。取值说明：platform、app_version、device、net_type、operator、region、country、target_ip。</p>
   */
  Dimension: string
  /**
   * <p>任务 ID。不传表示不过滤。</p>
   */
  TaskId?: string
  /**
   * <p>客户端平台。不传表示不过滤。</p>
   */
  Platform?: string
  /**
   * <p>应用版本。不传表示不过滤。</p>
   */
  AppVersion?: string
  /**
   * <p>设备机型，对应 device_type。不传表示不过滤。</p>
   */
  Device?: string
  /**
   * <p>网络类型，对应 network_type。不传表示不过滤。</p>
   */
  NetType?: string
  /**
   * <p>客户端运营商，对应 isp。不传表示不过滤。不是目标 IP 运营商。</p>
   */
  Operator?: string
  /**
   * <p>客户端地区，对应 province。云 API 公共参数已占用 Region，筛选入参名为 ClientRegion。不传表示不过滤。不是目标 IP 地区。</p>
   */
  ClientRegion?: string
  /**
   * <p>目标 IP。不传表示不过滤。</p>
   */
  TargetIp?: string
  /**
   * <p>环境。可选。不传表示不过滤。</p>
   */
  Environment?: string
}

/**
 * RumUv 访问量
 */
export interface RumUvInfo {
  /**
   * 项目ID
   */
  ProjectId: number
  /**
   * uv访问量
   */
  Uv: string
  /**
   * 创建时间
   */
  CreateTime: string
}

/**
 * DescribeScores请求参数结构体
 */
export interface DescribeScoresRequest {
  /**
   * 结束时间
   */
  EndTime: string
  /**
   * 开始时间
   */
  StartTime: string
  /**
   * 项目ID
   */
  ID?: number
  /**
   * 该参数已废弃
   * @deprecated
   */
  IsDemo?: number
  /**
   * 项目 ID 列表
   */
  IDList?: Array<number | bigint>
}

/**
 * 堆栈帧
 */
export interface EventFrame {
  /**
   * <p>绝对路径</p>
   */
  AbsPath?: string
  /**
   * <p>列号</p>
   */
  ColNo?: number
  /**
   * <p>文件名</p>
   */
  Filename?: string
  /**
   * <p>函数名</p>
   */
  Function?: string
  /**
   * <p>行号</p>
   */
  LineNo?: number
  /**
   * <p>是否应用内 0/1</p>
   */
  InApp?: number
  /**
   * <p>模块</p>
   */
  Module?: string
  /**
   * <p>包名</p>
   */
  Package?: string
  /**
   * <p>栈层级</p>
   */
  StackLevel?: number
}

/**
 * DescribeIssuesList请求参数结构体
 */
export interface DescribeIssuesListRequest {
  /**
   * <p>产品Id</p>
   */
  ProductId?: string
  /**
   * <p>接口调试专用，当 token 为空时，以这里的 value 作为筛选表单信息</p>
   */
  FormList?: string
  /**
   * <p>接口调试专用，对比模式下条件A，当 token 为空时，以这里的 value 作为筛选表单信息</p>
   */
  FormListA?: string
  /**
   * <p>接口调试专用，对比模式下条件B，当 token 为空时，以这里的 value 作为筛选表单信息</p>
   */
  FormListB?: string
  /**
   * <p>提供给前端使用，当填写本字段时，会覆盖 form_list 的值</p>
   */
  ParamToken?: string
  /**
   * <p>问题类型</p>
   */
  IssueType?: number
  /**
   * <p>排序字段</p>
   */
  SortField?: string
  /**
   * <p>排序方式</p>
   */
  SortType?: string
  /**
   * <p>每页数目</p>
   */
  PageSize?: number
  /**
   * <p>页码</p>
   */
  PageNumber?: number
  /**
   * <p>问题对比列表模式下，用于标识是按照sort_field字段的A值排序还是B值还是ratio值</p>
   */
  SortABRatio?: string
  /**
   * <p>模式：false:问题列表模式，true:对比列表模式</p>
   */
  Compare?: boolean
  /**
   * <p>对比状态 0:所有 1:新增 2：遗留 3:已解决</p>
   */
  CompareStatus?: number
  /**
   * <p>拓展字段</p>
   */
  ExtraData?: string
  /**
   * <p>请求头</p>
   */
  RequestHeader?: string
}

/**
 * DescribeIssuesDistribution请求参数结构体
 */
export interface DescribeIssuesDistributionRequest {
  /**
   * <p>产品Id</p>
   */
  ProductId?: string
  /**
   * <p>接口调试专用，当 token 为空时，以这里的 value 作为筛选表单信息</p>
   */
  FormListString?: string
  /**
   * <p>分布维度是自定义维度时，填‘user_custom’</p>
   */
  DimType?: string
  /**
   * <p>维度，e.g. os_version, app_version, model等</p>
   */
  Dimension?: string
  /**
   * <p>数字类型字段的区间范围</p>
   */
  Intervals?: Array<number | bigint>
  /**
   * <p>提供给前端使用，当填写本字段时，会覆盖 form_list 的值</p>
   */
  ParamToken?: string
  /**
   * <p>问题Id</p>
   */
  IssueId?: string
  /**
   * <p>问题类型</p>
   */
  IssueType?: number
  /**
   * <p>限制返回的个数，默认返回所有值</p>
   */
  ParamLimit?: number
  /**
   * <p>键</p>
   */
  MapKey?: string
  /**
   * <p>名称</p>
   */
  MapName?: string
  /**
   * <p>指标类型</p>
   */
  MetricType?: number
  /**
   * <p>每页数目</p>
   */
  PageSize?: number
  /**
   * <p>页码</p>
   */
  PageNumber?: number
  /**
   * <p>用户自定义维度key</p>
   */
  UserCustomKey?: string
  /**
   * <p>拓展字段</p>
   */
  ExtraData?: string
  /**
   * <p>请求头</p>
   */
  RequestHeader?: string
}

/**
 * DescribeTDEMFunnelTrend返回参数结构体
 */
export interface DescribeTDEMFunnelTrendResponse {
  /**
   * <p>结果</p>
   */
  Result?: string
  /**
   * <p>错误信息</p>
   */
  ErrorMsg?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeTDEMBusinessSystems返回参数结构体
 */
export interface DescribeTDEMBusinessSystemsResponse {
  /**
   * <p>总数</p>
   */
  TotalCount?: number
  /**
   * <p>业务系统列表</p>
   */
  BusinessSystemSet?: Array<BusinessSystemItem>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeTDEMSSEPercentile返回参数结构体
 */
export interface DescribeTDEMSSEPercentileResponse {
  /**
   * <p>时间桶宽度，单位秒，与趋势查询使用同一套分桶。</p>
   */
  IntervalSec?: number
  /**
   * <p>整个时间窗的算术平均。没有有效样本时为 null。</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Average?: number
  /**
   * <p>整个时间窗的 50 分位。没有有效样本时为 null。</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  P50?: number
  /**
   * <p>整个时间窗的 75 分位。没有有效样本时为 null。</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  P75?: number
  /**
   * <p>整个时间窗的 95 分位。没有有效样本时为 null。</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  P95?: number
  /**
   * <p>整个时间窗的 99 分位。没有有效样本时为 null。</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  P99?: number
  /**
   * <p>各时间桶的平均值和分位。没有样本的桶不返回，全部没有样本时为空数组。</p>
   */
  Points?: Array<TDEMSSEPercentilePoint>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDataStaticResourceV2请求参数结构体
 */
export interface DescribeDataStaticResourceV2Request {
  /**
   * 开始时间
   */
  StartTime: number
  /**
   * top：资源top视图，count40x：40X视图，nettype/version/platform/isp/region/device/browser/ext1/ext2/ext3/ret/status/from/url/env/：网络平台视图/Version视图/设备视图/ISP视图/地区视图/浏览器视图//ext1视图等
   */
  Type: string
  /**
   * 结束时间
   */
  EndTime: number
  /**
   * 项目ID
   */
  ID: number
  /**
   * 自定义2
   */
  ExtSecond?: string
  /**
   * 浏览器引擎
   */
  Engine?: string
  /**
   * 运营商
   */
  Isp?: string
  /**
   * 来源页面
   */
  From?: string
  /**
   * 日志等级
   */
  Level?: string
  /**
   * 品牌
   */
  Brand?: string
  /**
   * 地区
   */
  Area?: string
  /**
   * 版本
   */
  VersionNum?: string
  /**
   * 平台
   */
  Platform?: string
  /**
   * 自定义3
   */
  ExtThird?: string
  /**
   * 自定义1
   */
  ExtFirst?: string
  /**
   * 网络类型
   */
  NetType?: string
  /**
   * 机型
   */
  Device?: string
  /**
   * 显示是否海外,1表示海外，0表示非海外；默认值为空，查询所有。
   */
  IsAbroad?: string
  /**
   * 操作系统
   */
  Os?: string
  /**
   * 浏览器
   */
  Browser?: string
  /**
   * 耗时计算方式
   */
  CostType?: string
  /**
   * 来源
   */
  Url?: string
  /**
   * 环境
   */
  Env?: string
  /**
   * 自定义4
   */
  ExtFourth?: string
  /**
   * 自定义5
   */
  ExtFifth?: string
  /**
   * 自定义6
   */
  ExtSixth?: string
  /**
   * 自定义7
   */
  ExtSeventh?: string
  /**
   * 自定义8
   */
  ExtEighth?: string
  /**
   * 自定义9
   */
  ExtNinth?: string
  /**
   * 自定义10
   */
  ExtTenth?: string
  /**
   * 时间段
   */
  Granularity?: string
}

/**
 * DescribeTDEMDialExecutionDetail返回参数结构体
 */
export interface DescribeTDEMDialExecutionDetailResponse {
  /**
   * <p>任务 ID</p>
   */
  TaskId?: string
  /**
   * <p>任务名称</p>
   */
  TaskName?: string
  /**
   * <p>拨测批次 ID</p>
   */
  TaskSessionId?: string
  /**
   * <p>批次开始时间，毫秒时间戳</p>
   */
  StartTime?: number
  /**
   * <p>所属用户会话 ID</p>
   */
  SessionId?: string
  /**
   * <p>本批次是否全部探测成功</p>
   */
  Success?: boolean
  /**
   * <p>平均时延，单位毫秒</p>
   */
  AvgDuration?: number
  /**
   * <p>客户端平台</p>
   */
  Platform?: string
  /**
   * <p>应用版本</p>
   */
  AppVersion?: string
  /**
   * <p>设备机型</p>
   */
  Device?: string
  /**
   * <p>网络类型</p>
   */
  NetType?: string
  /**
   * <p>客户端运营商</p>
   */
  Operator?: string
  /**
   * <p>客户端地区</p>
   */
  Region?: string
  /**
   * <p>本批次目标 IP</p>
   */
  TargetIps?: Array<string>
  /**
   * <p>每个目标的探测结果</p>
   */
  Probes?: Array<DialProbe>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * UploadSymbolArtifact返回参数结构体
 */
export interface UploadSymbolArtifactResponse {
  /**
   * <p>登记的制品信息，JSON 格式字符串。</p>
   */
  Result?: string
  /**
   * <p>错误信息</p>
   */
  ErrorMsg?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeTDEMMetricDistribution请求参数结构体
 */
export interface DescribeTDEMMetricDistributionRequest {
  /**
   * <p>应用 ID（必填）</p>
   */
  AppId: string
  /**
   * <p>开始时间 Unix 毫秒（必填）</p>
   */
  StartTime: number
  /**
   * <p>结束时间 Unix 毫秒（必填）</p>
   */
  EndTime: number
  /**
   * <p>顶层事件类型；单查必填，批量用 Queries 时可不填</p>
   */
  EventType?: string
  /**
   * <p>子类型；未知返回 0</p>
   */
  SubType?: string
  /**
   * <p>筛选条件 JSON 字符串：[{Key,Op,Values}]，走分析立方白名单</p>
   */
  Filters?: string
  /**
   * <p>指标名列表，如 count / rate；单查必填</p>
   */
  Metrics?: Array<string>
  /**
   * <p>分位/均值必填，如 lcp / duration</p>
   */
  MeasurementKey?: string
  /**
   * <p>单维度（Distribution 用）</p>
   */
  GroupBy?: string
  /**
   * <p>返回条数，Top 默认 10 上限 100</p>
   */
  Limit?: number
  /**
   * <p>批量查询，上限 32</p>
   */
  Queries?: Array<MetricQueryItem>
}

/**
 * DescribeDataStaticUrl请求参数结构体
 */
export interface DescribeDataStaticUrlRequest {
  /**
   * 开始时间
   */
  StartTime: number
  /**
   * pagepv：性能视图，nettype/version/platform/isp/region/device/browser/ext1/ext2/ext3/ret/status/from/url/env/：网络平台视图/Version视图/设备视图/ISP视图/地区视图/浏览器视图//ext1视图等等
   */
  Type: string
  /**
   * 结束时间
   */
  EndTime: number
  /**
   * 项目ID
   */
  ID: number
  /**
   * 自定义2
   */
  ExtSecond?: string
  /**
   * 浏览器引擎
   */
  Engine?: string
  /**
   * 运营商
   */
  Isp?: string
  /**
   * 来源页面
   */
  From?: string
  /**
   * 日志等级
   */
  Level?: string
  /**
   * 品牌
   */
  Brand?: string
  /**
   * 地区
   */
  Area?: string
  /**
   * 版本
   */
  VersionNum?: string
  /**
   * 平台
   */
  Platform?: string
  /**
   * 自定义3
   */
  ExtThird?: string
  /**
   * 自定义1
   */
  ExtFirst?: string
  /**
   * 网络类型(tag 值):用于过滤/聚合字段 netType；枚举值：1(WiFi)、2(2G)、3(3G)、4(4G)、5(5G)、6(6G)、100(未知网络)。
   */
  NetType?: string
  /**
   * 机型
   */
  Device?: string
  /**
   * 显示是否海外,1表示海外，0表示非海外；默认值为空，查询所有。
   */
  IsAbroad?: string
  /**
   * 操作系统
   */
  Os?: string
  /**
   * 浏览器
   */
  Browser?: string
  /**
   * 耗时口径："50"/"75"/"90"/"95"/"99"/"99.5" 分别表示 TP50/TP75/TP90/TP95/TP99/TP99.5（percentile2）；"avg" 表示均值（avg）。
   */
  CostType?: string
  /**
   * 来源
   */
  Url?: string
  /**
   * 环境
   */
  Env?: string
}

/**
 * ModifyIssueStatus请求参数结构体
 */
export interface ModifyIssueStatusRequest {
  /**
   * <p>应用 ID</p>
   */
  AppId: string
  /**
   * <p>Issue ID</p>
   */
  IssueId: string
  /**
   * <p>状态动作，可选值：resolve、ignore、reopen</p>
   */
  IssueAction: string
  /**
   * <p>解决版本；当 IssueAction=resolve 时可传，不传则默认使用 latest_release</p>
   */
  ResolvedRelease?: string
}

/**
 * DescribeWhitelists请求参数结构体
 */
export interface DescribeWhitelistsRequest {
  /**
   * 实例instance-ID
   */
  InstanceID: string
}

/**
 * DescribeUvList请求参数结构体
 */
export interface DescribeUvListRequest {
  /**
   * ID
   */
  ProjectId: number
  /**
   * 结束时间
   */
  EndTime: string
  /**
   * 开始时间
   */
  StartTime: string
  /**
   * 获取day：d，   min:m
   */
  Dimension?: string
}

/**
 * CreateFieldTransformRule请求参数结构体
 */
export interface CreateFieldTransformRuleRequest {
  /**
   * <p>项目id</p>
   */
  ProjectId: number
  /**
   * <p>目标字段</p>
   */
  TargetField: string
  /**
   * <p>匹配方式</p>
   */
  MatchType: string
  /**
   * <p>匹配规则</p>
   */
  MatchPattern: string
  /**
   * <p>转换类型</p>
   */
  TransformAction: string
  /**
   * <p>规则名</p>
   */
  Name?: string
  /**
   * <p>替换值</p>
   */
  ReplaceValue?: string
  /**
   * <p>优先级</p>
   */
  Priority?: number
  /**
   * <p>是否开启</p>
   */
  Enabled?: boolean
}

/**
 * DescribeReplayMeta请求参数结构体
 */
export interface DescribeReplayMetaRequest {
  /**
   * <p>应用id</p>
   */
  AppId: string
  /**
   * <p>回放id</p>
   */
  ReplayId: string
  /**
   * <p>会话id</p>
   */
  SessionId?: string
  /**
   * <p>是否仅查询指定录制分片的轻量索引。默认false。为true时必须通过IndexSegmentIds指定1～16个分片ID，返回IndexEntries，不返回录制正文。</p>
   */
  IndexOnly?: boolean
  /**
   * <p>待查询索引的录制分片ID列表。仅在IndexOnly为true时使用，包含1～16个非负且不重复的分片ID。ProbeMissingIndex为true时仅允许指定一个分片ID。</p>
   */
  IndexSegmentIds?: Array<number | bigint>
  /**
   * <p>是否在录制分片缺少索引时进行受限兼容探测。默认false。为true时必须同时设置IndexOnly为true，且IndexSegmentIds仅包含一个分片ID。</p>
   */
  ProbeMissingIndex?: boolean
}

/**
 * DescribeRumLogExportsV2返回参数结构体
 */
export interface DescribeRumLogExportsV2Response {
  /**
   * <p>日志导出列表</p>
   */
  Result?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 符号化结果。未翻译时只填 Status / SkipReason。
 */
export interface SymbolicatedView {
  /**
   * <p>符号化版本</p>
   */
  SymbolicationVersion?: number
  /**
   * <p>符号化时间</p>
   */
  SymbolicatedAt?: string
  /**
   * <p>状态：success / missing / skipped</p>
   */
  SymbolicationStatus?: string
  /**
   * <p>跳过原因</p>
   */
  SymbolicationSkipReason?: string
  /**
   * <p>来源</p>
   */
  SymbolicationSource?: string
  /**
   * <p>release</p>
   */
  SymbolicationRelease?: string
  /**
   * <p>dist</p>
   */
  SymbolicationDist?: string
  /**
   * <p>耗时毫秒</p>
   */
  SymbolicationDurationMs?: number
  /**
   * <p>Symbolicator 请求 ID</p>
   */
  SymbolicatorRequestId?: string
  /**
   * <p>翻译后堆栈帧</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Frames?: Array<EventFrame>
}

/**
 * DescribeFOOMReportList请求参数结构体
 */
export interface DescribeFOOMReportListRequest {
  /**
   * <p>产品Id</p>
   */
  ProductId: string
  /**
   * <p>接口调试专用，当 token 为空时，以这里的 value 作为筛选表单信息</p>
   */
  FormListString?: string
  /**
   * <p>提供给前端使用，当填写本字段时，会覆盖 formlist 的值</p>
   */
  ParamToken?: string
  /**
   * <p>特征</p>
   */
  Feature?: string
  /**
   * <p>当前页码</p>
   */
  PageNumber?: number
  /**
   * <p>每页展示最大数量</p>
   */
  PageSize?: number
  /**
   * <p>排序字段</p>
   */
  SortField?: string
  /**
   * <p>排序类型</p>
   */
  SortType?: string
  /**
   * <p>拓展数据</p>
   */
  ExtraData?: string
  /**
   * <p>请求头</p>
   */
  RequestHeader?: string
}

/**
 * DescribeApplicationExitReportList请求参数结构体
 */
export interface DescribeApplicationExitReportListRequest {
  /**
   * <p>产品Id</p>
   */
  ProductId: string
  /**
   * <p>提供给前端使用，当填写本字段时，会覆盖 formlist 的值</p>
   */
  ParamToken?: string
  /**
   * <p>接口调试专用，当 token 为空时，以这里的 value 作为筛选表单信息</p>
   */
  FormListString?: string
  /**
   * <p>当前页码</p>
   */
  PageNumber?: number
  /**
   * <p>每页展示最大数量</p>
   */
  PageSize?: number
  /**
   * <p>排序字段</p>
   */
  SortField?: string
  /**
   * <p>排序类型</p>
   */
  SortType?: string
  /**
   * <p>拓展数据</p>
   */
  ExtraData?: string
  /**
   * <p>请求头</p>
   */
  RequestHeader?: string
}

/**
 * DescribeTDEMSSEDistribution请求参数结构体
 */
export interface DescribeTDEMSSEDistributionRequest {
  /**
   * <p>应用 ID。这里是业务应用标识，不是腾讯云账号 AppId。</p>
   */
  AppId: string
  /**
   * <p>开始时间，Unix 毫秒。</p>
   */
  StartTime: number
  /**
   * <p>结束时间，Unix 毫秒。须通过现有时间范围校验。</p>
   */
  EndTime: number
  /**
   * <p>指标。只允许 token_throughput、first_message_delay、fluency。error_rate 与 stall_rate 返回 InvalidParameter。</p>
   */
  Metric: string
  /**
   * <p>筛选条件 JSON 字符串，格式为 [{Key,Op,Values}]。Op 只允许 in。Key 只允许 model_version、app_version、platform、os、region、is_error、is_stall、network_type、server_ip、isp、user_id。is_error 与 is_stall 的值只允许 true 或 false。</p>
   */
  Filters?: string
}

/**
 * ModifyProjectLimit请求参数结构体
 */
export interface ModifyProjectLimitRequest {
  /**
   * 项目ID
   */
  ProjectID: number
  /**
   * 取值为[log speed performance webvitals pv event custom miniProgramData]其中之一
   */
  ProjectInterface?: string
  /**
   * 上报比例   10代表10%
   */
  ReportRate?: number
  /**
   * 上报类型 1：比例  2：上报量
   */
  ReportType?: number
  /**
   * 主键ID
   */
  ID?: number
}

/**
 * DescribeFieldTransformRules返回参数结构体
 */
export interface DescribeFieldTransformRulesResponse {
  /**
   * <p>结果</p>
   */
  Result?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeTDEMEventDetail请求参数结构体
 */
export interface DescribeTDEMEventDetailRequest {
  /**
   * <p>应用 ID（必填）</p>
   */
  AppId: string
  /**
   * <p>事件 ID（必填）</p>
   */
  EventId: string
  /**
   * <p>分区日期 YYYY-MM-DD（推荐）</p>
   */
  Date?: string
}

/**
 * DescribeLagANRProblemList返回参数结构体
 */
export interface DescribeLagANRProblemListResponse {
  /**
   * <p>返回值</p>
   */
  Data?: string
  /**
   * <p>消息</p>
   */
  Message?: string
  /**
   * <p>状态码</p>
   */
  Code?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeAppSingleCaseList返回参数结构体
 */
export interface DescribeAppSingleCaseListResponse {
  /**
   * 查询数据返回
   */
  Data?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribePerformanceMetrics返回参数结构体
 */
export interface DescribePerformanceMetricsResponse {
  /**
   * <p>请求结果</p>
   */
  Result?: string
  /**
   * <p>错误信息</p>
   */
  ErrorMsg?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDataBridgeUrlV2返回参数结构体
 */
export interface DescribeDataBridgeUrlV2Response {
  /**
   * 返回值
   */
  Result?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeUserJourneySanKey返回参数结构体
 */
export interface DescribeUserJourneySanKeyResponse {
  /**
   * <p>请求结果</p>
   */
  Result?: string
  /**
   * <p>错误信息</p>
   */
  ErrorMsg?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDataFetchUrl请求参数结构体
 */
export interface DescribeDataFetchUrlRequest {
  /**
   * 开始时间
   */
  StartTime: number
  /**
   * allcount：性能视图，pagepv：pv视图，day：14天数据，count40x：40X视图，count50x：50X视图，count5xand4x：40∑50视图，top：资源top视图，nettype/version/platform/isp/region/device/browser/ext1/ext2/ext3/ret/status/from/url/env/：网络平台视图/Version视图/设备视图/ISP视图/地区视图/浏览器视图/ext1视图等等
   */
  Type: string
  /**
   * 结束时间
   */
  EndTime: number
  /**
   * 项目ID
   */
  ID: number
  /**
   * 自定义2
   */
  ExtSecond?: string
  /**
   * 浏览器引擎
   */
  Engine?: string
  /**
   * 运营商
   */
  Isp?: string
  /**
   * 来源页面
   */
  From?: string
  /**
   * 日志等级
   */
  Level?: string
  /**
   * 品牌
   */
  Brand?: string
  /**
   * 地区
   */
  Area?: string
  /**
   * 版本
   */
  VersionNum?: string
  /**
   * 平台
   */
  Platform?: string
  /**
   * 自定义3
   */
  ExtThird?: string
  /**
   * 自定义1
   */
  ExtFirst?: string
  /**
   * 网络类型(tag 值):用于过滤/聚合字段 netType；枚举值：1(WiFi)、2(2G)、3(3G)、4(4G)、5(5G)、6(6G)、100(未知网络)。
   */
  NetType?: string
  /**
   * 机型
   */
  Device?: string
  /**
   * 显示是否海外,1表示海外，0表示非海外；默认值为空，查询所有。
   */
  IsAbroad?: string
  /**
   * 操作系统
   */
  Os?: string
  /**
   * 浏览器
   */
  Browser?: string
  /**
   * 耗时口径："50"/"75"/"90"/"95"/"99"/"99.5" 分别表示 TP50/TP75/TP90/TP95/TP99/TP99.5（percentile2）；"avg" 表示均值（avg）。
   */
  CostType?: string
  /**
   * 来源
   */
  Url?: string
  /**
   * 环境
   */
  Env?: string
  /**
   * HTTP 状态码（tag 值）：用于过滤字段 status；支持 4xx（status =~ /4[0-9]{2}/）和 5xx（status =~ /5[0-9]{2}/）等错误码统计。
   */
  Status?: string
  /**
   * retcode
   */
  Ret?: string
  /**
   * 网络状态(tag 值):用于过滤/聚合字段 netStatus；枚举值：0(正常)、1(弱网)、2(断网)、3(其他)。
   */
  NetStatus?: string
}

/**
 * DescribeProjectLimits请求参数结构体
 */
export interface DescribeProjectLimitsRequest {
  /**
   * 项目ID
   */
  ProjectID: number
}

/**
 * CreateStarProject返回参数结构体
 */
export interface CreateStarProjectResponse {
  /**
   * 接口返回信息
   */
  Msg?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeLagANRProblemList请求参数结构体
 */
export interface DescribeLagANRProblemListRequest {
  /**
   * <p>产品Id</p>
   */
  ProductId: string
  /**
   * <p>提供给前端使用，当填写本字段时，会覆盖 formlist 的值</p>
   */
  ParamToken?: string
  /**
   * <p>接口调试专用，当 token 为空时，以这里的 value 作为筛选表单信息</p>
   */
  FormListString?: string
  /**
   * <p>当前页码</p>
   */
  PageNumber?: number
  /**
   * <p>每页展示最大数量</p>
   */
  PageSize?: number
  /**
   * <p>排序字段</p>
   */
  SortField?: string
  /**
   * <p>排序类型</p>
   */
  SortType?: string
  /**
   * <p>拓展数据</p>
   */
  ExtraData?: string
  /**
   * <p>请求头</p>
   */
  RequestHeader?: string
}

/**
 * DescribeIssueTrend请求参数结构体
 */
export interface DescribeIssueTrendRequest {
  /**
   * <p>应用 ID</p>
   */
  AppId: string
  /**
   * <p>Issue ID</p>
   */
  IssueId: string
  /**
   * <p>开始时间，Unix 毫秒时间戳</p>
   */
  StartTime: number
  /**
   * <p>结束时间，Unix 毫秒时间戳</p>
   */
  EndTime: number
  /**
   * <p>趋势分桶，可选值：auto、1m、10m、1h、1d</p>
   */
  Bucket?: string
  /**
   * <p>环境。可选。为空表示全部环境。</p>
   */
  Env?: string
  /**
   * <p>关键字。可选。不传表示不过滤。</p>
   */
  Keyword?: string
  /**
   * <p>筛选条件 JSON 字符串，格式为 [{Key,Op,Values}]。可选。不传表示不附加这组筛选。</p>
   */
  Filters?: string
}

/**
 * DescribeRumLogExports返回参数结构体
 */
export interface DescribeRumLogExportsResponse {
  /**
   * 返回字符串
   */
  Result?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeTDEMSampleRate请求参数结构体
 */
export interface DescribeTDEMSampleRateRequest {
  /**
   * <p>应用 ID（必填）</p>
   */
  AppId: string
}

/**
 * DescribeFOOMMallocProblemList返回参数结构体
 */
export interface DescribeFOOMMallocProblemListResponse {
  /**
   * <p>返回值</p>
   */
  Data?: string
  /**
   * <p>消息</p>
   */
  Message?: string
  /**
   * <p>状态码</p>
   */
  Code?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeIssueBreadcrumbs请求参数结构体
 */
export interface DescribeIssueBreadcrumbsRequest {
  /**
   * <p>应用 ID</p>
   */
  AppId: string
  /**
   * <p>Issue ID</p>
   */
  IssueId: string
  /**
   * <p>事件 ID；为空时默认回退到最新事件</p>
   */
  EventId?: string
  /**
   * <p>向前回溯秒数，默认 60，最大 300</p>
   */
  Before?: number
  /**
   * <p>返回条数上限，默认 50，最大 100</p>
   */
  Limit?: number
}

/**
 * CreateTDEMApplication请求参数结构体
 */
export interface CreateTDEMApplicationRequest {
  /**
   * <p>业务系统 ID（必填）</p>
   */
  InstanceId: string
  /**
   * <p>应用名称（必填）</p>
   */
  Name: string
  /**
   * <p>应用类型。取值：web、wx-miniprogram、uniapp、ios、android、electron、rn（React Native）。</p>
   */
  Type: string
  /**
   * <p>应用描述（可选）</p>
   */
  Desc?: string
  /**
   * <p>APM 实例 ID</p>
   */
  ApmInstanceIds?: Array<string>
}

/**
 * ModifyInstance返回参数结构体
 */
export interface ModifyInstanceResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyTDEMSampleConfig返回参数结构体
 */
export interface ModifyTDEMSampleConfigResponse {
  /**
   * <p>业务数据 JSON 字符串，反序列化后：{ProjectId,Event,Replay,SnapshotId,UpdatedAt}。SnapshotId 为本次写入的快照主键。</p>
   */
  Result?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteTDEMBusinessSystem返回参数结构体
 */
export interface DeleteTDEMBusinessSystemResponse {
  /**
   * <p>业务系统 ID</p>
   */
  InstanceId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ResumeInstance返回参数结构体
 */
export interface ResumeInstanceResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeTawAreas返回参数结构体
 */
export interface DescribeTawAreasResponse {
  /**
   * 片区总数
   */
  TotalCount?: number
  /**
   * 片区列表
   */
  AreaSet?: Array<RumAreaInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeAppSingleCaseList请求参数结构体
 */
export interface DescribeAppSingleCaseListRequest {
  /**
   * app 项目 ID
   */
  ProjectID: number
  /**
   * 查询的表名
   */
  From: string
  /**
   * 查询指标 field
   */
  Fields: string
  /**
   * 查询的过滤条件
   */
  Filter: string
  /**
   * 查询简单过滤条件
   */
  FilterSimple?: string
  /**
   * group by 条件
   */
  GroupBy?: Array<string>
  /**
   * order by 条件
   */
  OrderBy?: Array<string>
  /**
   * limit 参数
   */
  Limit?: number
  /**
   * offset 参数
   */
  Offset?: number
}

/**
 * DeleteTDEMDialTask请求参数结构体
 */
export interface DeleteTDEMDialTaskRequest {
  /**
   * <p>应用 ID</p>
   */
  AppId: string
  /**
   * <p>任务 ID</p>
   */
  TaskId: string
}

/**
 * DeleteWhitelist请求参数结构体
 */
export interface DeleteWhitelistRequest {
  /**
   * 实例ID
   */
  InstanceID: string
  /**
   * 名单ID
   */
  ID: string
}

/**
 * DescribeTDEMFieldTransformRules请求参数结构体
 */
export interface DescribeTDEMFieldTransformRulesRequest {
  /**
   * <p>应用 ID（必填）</p>
   */
  AppId: string
  /**
   * <p>分页偏移，默认 0</p>
   */
  Offset?: number
  /**
   * <p>每页数量</p>
   */
  Limit?: number
}

/**
 * DeleteMiniProgramReplayPack返回参数结构体
 */
export interface DeleteMiniProgramReplayPackResponse {
  /**
   * <p>错误信息</p>
   */
  ErrorMsg?: string
  /**
   * <p>请求结果（JSON字符串，包含 AppId/PackId/Deleted）</p>
   */
  Result?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyTDEMBusinessSystem请求参数结构体
 */
export interface ModifyTDEMBusinessSystemRequest {
  /**
   * <p>业务系统 ID（必填）</p>
   */
  InstanceId: string
  /**
   * <p>业务系统名称（可选）</p>
   */
  InstanceName?: string
  /**
   * <p>业务系统描述（可选）</p>
   */
  InstanceDesc?: string
}

/**
 * StopTDEMApplication返回参数结构体
 */
export interface StopTDEMApplicationResponse {
  /**
   * <p>应用 ID</p>
   */
  AppId?: string
  /**
   * <p>停止后为 6</p>
   */
  Status?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 应用
 */
export interface ApplicationItem {
  /**
   * <p>应用 ID</p>
   */
  AppId?: string
  /**
   * <p>应用 Key</p>
   */
  ProjectKey?: string
  /**
   * <p>业务系统 ID</p>
   */
  InstanceId?: string
  /**
   * <p>业务系统名称</p>
   */
  InstanceName?: string
  /**
   * <p>应用名称</p>
   */
  Name?: string
  /**
   * <p>端类型</p>
   */
  Type?: string
  /**
   * <p>描述</p>
   */
  Desc?: string
  /**
   * <p>是否排除已忽略错误</p>
   */
  ExcludeIgnoredErrors?: boolean
  /**
   * <p>状态：2 运行 / 6 停止 / 7 删除</p>
   */
  Status?: number
  /**
   * <p>创建时间</p>
   */
  CreatedAt?: string
  /**
   * <p>该应用绑定的腾讯云 APM 实例 ID 列表。空数组表示未绑定。</p>
   */
  ApmInstanceIds?: Array<string>
}

/**
 * DescribeTawInstances请求参数结构体
 */
export interface DescribeTawInstancesRequest {
  /**
   * 计费状态
   */
  ChargeStatuses?: Array<number | bigint>
  /**
   * 计费类型
   */
  ChargeTypes?: Array<number | bigint>
  /**
   * 分页Limit
   */
  Limit?: number
  /**
   * 分页Offset
   */
  Offset?: number
  /**
   * 片区Id
   */
  AreaIds?: Array<number | bigint>
  /**
   * 实例状态(1=创建中，2=运行中，3=异常，4=重启中，5=停止中，6=已停止，7=销毁中，8=已销毁), 该参数已废弃，请在Filters内注明
   * @deprecated
   */
  InstanceStatuses?: Array<number | bigint>
  /**
   * 实例Id, 该参数已废弃，请在Filters内注明
   * @deprecated
   */
  InstanceIds?: Array<string>
  /**
   * 过滤参数；demo模式传{"Name": "IsDemo", "Values":["1"]}
   */
  Filters?: Array<Filter>
  /**
   * 该参数已废弃，demo模式请在Filters内注明
   * @deprecated
   */
  IsDemo?: number
}

/**
 * DescribeDataLogUrlStatistics请求参数结构体
 */
export interface DescribeDataLogUrlStatisticsRequest {
  /**
   * 开始时间
   */
  StartTime: number
  /**
   * analysis：异常分析，compare：异常列表对比，allcount：性能视图，condition：条件列表，nettype/version/platform/isp/region/device/browser/ext1/ext2/ext3/ret/status/from/url/env/：网络平台视图/Version视图/设备视图/ISP视图/地区视图/浏览器视图/ext1视图等等
   */
  Type: string
  /**
   * 结束时间
   */
  EndTime: number
  /**
   * 项目ID
   */
  ID: number
  /**
   * 自定义2
   */
  ExtSecond?: string
  /**
   * 浏览器引擎
   */
  Engine?: string
  /**
   * 运营商
   */
  Isp?: string
  /**
   * 来源页面
   */
  From?: string
  /**
   * 日志等级
   */
  Level?: string
  /**
   * 品牌
   */
  Brand?: string
  /**
   * 地区
   */
  Area?: string
  /**
   * 版本
   */
  VersionNum?: string
  /**
   * 平台
   */
  Platform?: string
  /**
   * 自定义3
   */
  ExtThird?: string
  /**
   * 自定义1
   */
  ExtFirst?: string
  /**
   * 网络类型(tag 值):用于过滤/聚合字段 netType；枚举值：1(WiFi)、2(2G)、3(3G)、4(4G)、5(5G)、6(6G)、100(未知网络)。
   */
  NetType?: string
  /**
   * 机型
   */
  Device?: string
  /**
   * 显示是否海外,1表示海外，0表示非海外；默认值为空，查询所有。
   */
  IsAbroad?: string
  /**
   * 操作系统
   */
  Os?: string
  /**
   * 浏览器
   */
  Browser?: string
  /**
   * 环境区分
   */
  Env?: string
  /**
   * js异常信息
   */
  ErrorMsg?: string
}

/**
 * DescribeLagANRProblemAccountDetail请求参数结构体
 */
export interface DescribeLagANRProblemAccountDetailRequest {
  /**
   * <p>产品Id</p>
   */
  ProductId: string
  /**
   * <p>消息唯一标识</p>
   */
  ClientIdentify?: string
  /**
   * <p>特征</p>
   */
  Feature?: string
  /**
   * <p>事件开始时间</p>
   */
  StartEventTime?: number
  /**
   * <p>事件结束时间</p>
   */
  EndEventTime?: number
  /**
   * <p>拓展数据</p>
   */
  ExtraData?: string
  /**
   * <p>请求头</p>
   */
  RequestHeader?: string
}

/**
 * 大模型对话分位时间桶
 */
export interface TDEMSSEPercentilePoint {
  /**
   * <p>时间桶起点，Unix 毫秒。</p>
   */
  Time?: number
  /**
   * <p>该桶算术平均值。没有样本的桶不返回。</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Average?: number
  /**
   * <p>50 分位。</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  P50?: number
  /**
   * <p>75 分位。</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  P75?: number
  /**
   * <p>95 分位。</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  P95?: number
  /**
   * <p>99 分位。</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  P99?: number
}

/**
 * DescribeTDEMUsageSummary返回参数结构体
 */
export interface DescribeTDEMUsageSummaryResponse {
  /**
   * <p>上报总量</p>
   */
  ReportVolume?: number
  /**
   * <p>窗口内有量应用数</p>
   */
  ResourceCount?: number
  /**
   * <p>hour 或 day</p>
   */
  Granularity?: string
  /**
   * <p>趋势</p>
   */
  ByDate?: Array<UsageTimePoint>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 指标名值对
 */
export interface FloatNameValue {
  /**
   * <p>指标名，如 Count / Rate / P95</p>
   */
  Name?: string
  /**
   * <p>指标值</p>
   */
  Value?: number
}

/**
 * 总览计分项。Score/Value 缺失时省略，前端展示 —。
 */
export interface OverviewScoreItem {
  /**
   * <p>计分项，如 crash / anr / lag</p>
   */
  Key?: string
  /**
   * <p>单项 0-100，缺失省略</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Score?: number
  /**
   * <p>原始值（率为小数、耗时为 ms）</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Value?: number
}

/**
 * 整型键值对。分类计数等枚举键用此结构，不把枚举值做成结构体字段。
 */
export interface IntKeyValue {
  /**
   * <p>键，如 error / session</p>
   */
  Key?: string
  /**
   * <p>整型值</p>
   */
  Value?: number
}

/**
 * DescribeTDEMFunnelDimensions请求参数结构体
 */
export interface DescribeTDEMFunnelDimensionsRequest {
  /**
   * <p>应用id</p>
   */
  AppId: string
  /**
   * <p>漏斗id</p>
   */
  FunnelId: string
  /**
   * <p>开始时间</p>
   */
  StartTime: number
  /**
   * <p>结束时间</p>
   */
  EndTime: number
  /**
   * <p>维度</p>
   */
  Dimension?: string
  /**
   * <p>平台</p>
   */
  Platform?: string
  /**
   * <p>设备类型</p>
   */
  DeviceType?: string
  /**
   * <p>浏览器</p>
   */
  Browser?: string
  /**
   * <p>操作系统</p>
   */
  OS?: string
  /**
   * <p>国家</p>
   */
  Country?: string
  /**
   * <p>页面来源</p>
   */
  Referrer?: string
  /**
   * <p>应用版本</p>
   */
  AppVersion?: string
  /**
   * <p>环境</p>
   */
  Environment?: string
}

/**
 * DescribeFOOMProblemDetail返回参数结构体
 */
export interface DescribeFOOMProblemDetailResponse {
  /**
   * <p>返回值</p>
   */
  Data?: string
  /**
   * <p>状态码</p>
   */
  Code?: number
  /**
   * <p>消息</p>
   */
  Message?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeRumLogTotalV2返回参数结构体
 */
export interface DescribeRumLogTotalV2Response {
  /**
   * <p>日志总量</p>
   */
  Result?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDataFetchUrlInfo返回参数结构体
 */
export interface DescribeDataFetchUrlInfoResponse {
  /**
   * 返回值
   */
  Result?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyIssueStatus返回参数结构体
 */
export interface ModifyIssueStatusResponse {
  /**
   * <p>业务结果 JSON 字符串；前端会再做一次 JSON 解析。Result 内业务 JSON 为 Data，内容是状态流转结果</p>
   */
  Result?: string
  /**
   * <p>错误信息；正常返回时为空</p>
   */
  ErrorMsg?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeWhitelists返回参数结构体
 */
export interface DescribeWhitelistsResponse {
  /**
   * 白名单列表
   */
  WhitelistSet: Array<Whitelist>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeIssuesDistribution返回参数结构体
 */
export interface DescribeIssuesDistributionResponse {
  /**
   * <p>返回值</p>
   */
  Data?: string
  /**
   * <p>状态码</p>
   */
  Code?: number
  /**
   * <p>消息</p>
   */
  Message?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateWhitelist返回参数结构体
 */
export interface CreateWhitelistResponse {
  /**
   * 消息
   */
  Msg?: string
  /**
   * 白名单ID
   */
  ID?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * project Score分数实体
 */
export interface ScoreInfo {
  /**
   * duration
   */
  StaticDuration?: string
  /**
   * pv
   */
  PagePv?: string
  /**
   * 失败
   */
  ApiFail?: string
  /**
   * 请求
   */
  ApiNum?: string
  /**
   * fail
   */
  StaticFail?: string
  /**
   * 项目id
   */
  ProjectID?: number
  /**
   * uv
   */
  PageUv?: string
  /**
   * 请求次数
   */
  ApiDuration?: string
  /**
   * 项目总分
   */
  Score?: string
  /**
   * error
   */
  PageError?: string
  /**
   * num
   */
  StaticNum?: string
  /**
   * num
   */
  RecordNum?: number
  /**
   * Duration
   */
  PageDuration?: string
  /**
   * 时间
   */
  CreateTime?: string
  /**
   * 页面性能评分
   */
  PagePerformanceScore?: string
  /**
   * js错误评分
   */
  JsErrorScore?: string
  /**
   * API性能评分
   */
  ApiPerformanceScore?: string
  /**
   * API可用性评分
   */
  ApiAvaliableScore?: string
  /**
   * 静态资源性能评分
   */
  StaticPerformanceScore?: string
  /**
   * 静态资源可用性评分
   */
  StaticAvaliableScore?: string
}

/**
 * 单应用总览评分
 */
export interface AppOverviewScore {
  /**
   * <p>应用 ID</p>
   */
  AppId?: string
  /**
   * <p>端</p>
   */
  Platform?: string
  /**
   * <p>加权总分，全部缺失时省略</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  TotalScore?: number
  /**
   * <p>计分项</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Items?: Array<OverviewScoreItem>
}

/**
 * DescribeDataWebVitalsPage返回参数结构体
 */
export interface DescribeDataWebVitalsPageResponse {
  /**
   * 返回值
   */
  Result?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeSampleRate返回参数结构体
 */
export interface DescribeSampleRateResponse {
  /**
   * <p>结果</p>
   */
  Result?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeTawAreas请求参数结构体
 */
export interface DescribeTawAreasRequest {
  /**
   * 片区Id
   */
  AreaIds?: Array<number | bigint>
  /**
   * 片区Key
   */
  AreaKeys?: Array<string>
  /**
   * 分页Limit，默认根据AreaKeys和AreaStatuses参数查询所有。
   */
  Limit?: number
  /**
   * 片区状态(1=有效，2=无效)
   */
  AreaStatuses?: Array<number | bigint>
  /**
   * 分页Offset，默认根据AreaKeys和AreaStatuses参数查询所有。
   */
  Offset?: number
}

/**
 * DescribeTDEMApplications返回参数结构体
 */
export interface DescribeTDEMApplicationsResponse {
  /**
   * <p>总数</p>
   */
  TotalCount?: number
  /**
   * <p>应用列表</p>
   */
  ApplicationSet?: Array<ApplicationItem>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeAppSingleCaseDetailList请求参数结构体
 */
export interface DescribeAppSingleCaseDetailListRequest {
  /**
   * app 项目ID
   */
  ProjectID: number
  /**
   * 查询的表名
   */
  From: string
  /**
   * 查询指标 field
   */
  Fields: string
  /**
   * 查询的过滤条件
   */
  Filter: string
  /**
   * 查询简单过滤条件
   */
  FilterSimple?: string
  /**
   * group by 条件
   */
  GroupBy?: Array<string>
  /**
   * order by 条件
   */
  OrderBy?: Array<string>
  /**
   * limit 参数
   */
  Limit?: number
  /**
   * offset 参数
   */
  Offset?: number
}

/**
 * DescribeTDEMFunnelList请求参数结构体
 */
export interface DescribeTDEMFunnelListRequest {
  /**
   * <p>应用id</p>
   */
  AppId: string
  /**
   * <p>关键字，用于过滤漏斗名</p>
   */
  Keyword?: string
  /**
   * <p>漏斗状态</p>
   */
  Status?: string
  /**
   * <p>页面号</p>
   */
  Page?: number
  /**
   * <p>页面数量</p>
   */
  PageSize?: number
}

/**
 * StopProject返回参数结构体
 */
export interface StopProjectResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeApplicationExitReportList返回参数结构体
 */
export interface DescribeApplicationExitReportListResponse {
  /**
   * <p>返回值</p>
   */
  Data?: string
  /**
   * <p>状态码</p>
   */
  Code?: number
  /**
   * <p>消息</p>
   */
  Message?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeTDEMEventSearchSummary返回参数结构体
 */
export interface DescribeTDEMEventSearchSummaryResponse {
  /**
   * <p>各分类窗口计数，Key 为分类 id</p>
   */
  CategoryCounts?: Array<IntKeyValue>
  /**
   * <p>当前分类窗口条数</p>
   */
  Total?: number
  /**
   * <p>访问用户（设备）</p>
   */
  Visitors?: number
  /**
   * <p>业务用户</p>
   */
  Users?: number
  /**
   * <p>实际分桶秒数</p>
   */
  IntervalSec?: number
  /**
   * <p>分桶趋势</p>
   */
  Series?: Array<EventSearchSeriesPoint>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeRumLogExport返回参数结构体
 */
export interface DescribeRumLogExportResponse {
  /**
   * 返回字符串
   */
  Result?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeTDEMDialTasks返回参数结构体
 */
export interface DescribeTDEMDialTasksResponse {
  /**
   * <p>拨测任务列表</p>
   */
  TaskSet?: Array<DialTask>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeIssuesStatisticsTrend返回参数结构体
 */
export interface DescribeIssuesStatisticsTrendResponse {
  /**
   * 返回值
   */
  Data?: string
  /**
   * 状态码
   */
  Code?: number
  /**
   * 消息
   */
  Message?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeIssueAffectedUsers请求参数结构体
 */
export interface DescribeIssueAffectedUsersRequest {
  /**
   * <p>应用 ID（string，必填）。空 → InvalidParameter</p>
   */
  AppId: string
  /**
   * <p>问题 ID（string，必填）。空 → InvalidParameter</p>
   */
  IssueId: string
  /**
   * <p>页码（整数，选填）。&lt; 1 钳制为 1；缺省 1</p>
   */
  Page?: number
  /**
   * <p>每页条数（整数，选填）。&lt; 1 或 &gt; 1000 回落默认 20；导出场景按 1000 一批拉全量</p>
   */
  PageSize?: number
  /**
   * <p>应用版本（string，选填）。按 app_version 精确匹配；空表示不限版本</p>
   */
  AppVersion?: string
  /**
   * <p>起始毫秒时间戳（整数，选填）。&lt;= 0 表示该侧不限</p>
   */
  StartTime?: number
  /**
   * <p>结束毫秒时间戳（整数，选填）。&lt;= 0 表示该侧不限；与 StartTime 同时给出且 StartTime &gt; EndTime → InvalidParameter</p>
   */
  EndTime?: number
  /**
   * <p>身份值关键字（string，选填）。不区分大小写的子串匹配，命中 if(user_id='', session_id, user_id)；空表示不限</p>
   */
  Keyword?: string
  /**
   * <p>排序字段（string，选填）。可选 last_seen / first_seen / event_count；缺省 last_seen；其它值 → InvalidParameter</p>
   */
  OrderKey?: string
  /**
   * <p>排序方向（string，选填）。可选 asc / desc；缺省 desc；其它值 → InvalidParameter</p>
   */
  OrderBy?: string
}

/**
 * CreateTDEMFieldTransformRule请求参数结构体
 */
export interface CreateTDEMFieldTransformRuleRequest {
  /**
   * <p>应用 ID（必填）</p>
   */
  AppId: string
  /**
   * <p>目标字段（必填）：page_url / normalized_page_url / page_title / referrer / resource_url / user_id / target_element / target_text</p>
   */
  TargetField: string
  /**
   * <p>匹配方式（必填）：exact / prefix / contains / regex</p>
   */
  MatchType: string
  /**
   * <p>匹配模式（必填）</p>
   */
  MatchPattern: string
  /**
   * <p>替换动作（必填）：replace / regex_replace / mask</p>
   */
  TransformAction: string
  /**
   * <p>规则名称（可选）</p>
   */
  Name?: string
  /**
   * <p>替换值（replace / regex_replace 使用）</p>
   */
  ReplaceValue?: string
  /**
   * <p>优先级（可选）</p>
   */
  Priority?: number
  /**
   * <p>是否启用，默认 true</p>
   */
  Enabled?: boolean
}

/**
 * 白名单
 */
export interface Whitelist {
  /**
   * 备注
   */
  Remark?: string
  /**
   * 实例ID
   */
  InstanceID?: string
  /**
   * 截止时间
   */
  Ttl?: string
  /**
   * 白名单自增ID
   */
  ID?: string
  /**
   * 业务唯一标识
   */
  WhitelistUin?: string
  /**
   * 创建者ID
   */
  CreateUser?: string
  /**
   * aid标识
   */
  Aid?: string
  /**
   * 创建时间
   */
  CreateTime?: string
}

/**
 * DescribeLagANRProblemAccountDetail返回参数结构体
 */
export interface DescribeLagANRProblemAccountDetailResponse {
  /**
   * <p>返回值</p>
   */
  Data?: string
  /**
   * <p>状态码</p>
   */
  Code?: number
  /**
   * <p>消息</p>
   */
  Message?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 探索汇总分桶点
 */
export interface EventSearchSeriesPoint {
  /**
   * <p>时间戳 Unix 毫秒</p>
   */
  Timestamp?: number
  /**
   * <p>次数</p>
   */
  Count?: number
}

/**
 * DescribeTDEMEventRank请求参数结构体
 */
export interface DescribeTDEMEventRankRequest {
  /**
   * <p>应用 ID（必填）</p>
   */
  AppId: string
  /**
   * <p>开始时间 Unix 毫秒（必填）</p>
   */
  StartTime: number
  /**
   * <p>结束时间 Unix 毫秒（必填）</p>
   */
  EndTime: number
  /**
   * <p>排行类型：error/api/resource/api_page/resource_page/api_status/api_status_top/resource_status/tag；exception_dimension 为异常维度同源统计，使用 ExceptionDistribution 返回结果。</p>
   */
  Kind: string
  /**
   * <p>旧 Kind 保持既有错误类型过滤规则；Kind=exception_dimension 标签模式必填，允许 js_error、promise_error、api_error、resource_error、blank_screen、log、native_crash、crash、no_response、lag_detected、app_launch。合法重复值去重，未知值拒绝；普通维度模式不传。</p>
   */
  EventTypes?: Array<string>
  /**
   * <p>旧 Kind=tag 保持既有标签查询；Kind=exception_dimension 标签模式必填，与 GroupBy 二选一。使用既有标签名规范，长度 1–64，允许字母数字及 _-.；标签值保留原始内容。</p>
   */
  TagKey?: string
  /**
   * <p>返回条数，上限100。旧 Kind 缺省50；Kind=exception_dimension 缺省100，显式值为1–100，限制完整归一化维度行数，不裁剪分类向量。</p>
   */
  Limit?: number
  /**
   * <p>旧 Kind 可选粒度5m/1h/1d；Kind=exception_dimension 不支持，传非空值返回 InvalidParameter。</p>
   */
  Granularity?: string
  /**
   * <p>筛选条件 JSON 字符串，走 events 表白名单</p>
   */
  Filters?: string
  /**
   * <p>旧 Kind 耗时口径 avg/p50/p75/p95/p99；Kind=exception_dimension 不支持，传非空值返回 InvalidParameter。</p>
   */
  CostType?: string
  /**
   * <p>异常分布的聚合维度，仅 Kind=exception_dimension 的普通维度模式使用且必填。标签模式只传 TagKey，不传 GroupBy。</p><p>枚举值：</p><ul><li>device_type： 设备型号</li><li>os： 操作系统</li><li>browser： 浏览器</li><li>app_version： 应用版本</li><li>province： 省份</li><li>platform： 平台</li><li>network_type： 网络类型</li></ul>
   */
  GroupBy?: string
  /**
   * <p>仅 Kind=exception_dimension 普通维度模式必填。允许 web、android、ios，须与应用平台及 CategoryKeys 目录一致。标签模式不传。</p>
   */
  ProjectType?: string
  /**
   * <p>仅 Kind=exception_dimension 普通维度模式必填，为页面实际有效的异常目录 key 非空去重集合。仅接受对应 ProjectType 的固定目录，包含项须同时选择父项；未知、重复、空目录及互斥参数组合返回 InvalidParameter。标签模式不传。</p>
   */
  CategoryKeys?: Array<string>
}

/**
 * DescribeTDEMMetricTrend返回参数结构体
 */
export interface DescribeTDEMMetricTrendResponse {
  /**
   * <p>实际生效粒度</p>
   */
  Granularity?: string
  /**
   * <p>单查时序</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Series?: Array<MetricTrendPoint>
  /**
   * <p>批量结果，Queries 非空时返回</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Results?: Array<MetricTrendBatchItem>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteStarProject返回参数结构体
 */
export interface DeleteStarProjectResponse {
  /**
   * 返回消息,请求成功才会返回，出现异常默认为null
   */
  Msg?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 事件异常栈
 */
export interface EventStack {
  /**
   * <p>异常类型</p>
   */
  Type?: string
  /**
   * <p>异常信息</p>
   */
  Value?: string
  /**
   * <p>mechanism 类型</p>
   */
  MechanismType?: string
  /**
   * <p>是否已处理 0/1</p>
   */
  MechanismHandled?: number
}

/**
 * 拨测任务
 */
export interface DialTask {
  /**
   * <p>任务 ID</p>
   */
  TaskId?: string
  /**
   * <p>任务名称</p>
   */
  TaskName?: string
  /**
   * <p>任务状态。取值说明：active、paused；已删除任务不返回。</p>
   */
  Status?: string
  /**
   * <p>探测类型。取值说明：icmp、tcp。</p>
   */
  Type?: string
  /**
   * <p>执行时机。取值说明：realtime、after_request、after_error、after_slow、after_dns_slow。</p>
   */
  ExecutionTime?: string
  /**
   * <p>监听域名。非 realtime 时有值。</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  WatchDomain?: string
  /**
   * <p>拨测目标。域名、IP 或 ldns。</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  DialDomain?: string
  /**
   * <p>TCP 端口。仅 tcp 任务返回。</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Port?: number
  /**
   * <p>实时拨测间隔，单位毫秒。仅 realtime 返回。取值说明：60000、300000、600000、900000、1800000、3600000。</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  FrequencyMs?: number
  /**
   * <p>单次探测超时，单位毫秒。范围 1000 到 20000。</p>
   */
  TimeoutMs?: number
  /**
   * <p>探测周期，单位毫秒。</p>
   */
  PeriodMs?: number
  /**
   * <p>发包次数。范围 3 到 40。</p>
   */
  PackageCount?: number
  /**
   * <p>ICMP 包大小，单位字节。范围 32 到 1024，默认 64。</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  PackageSize?: number
  /**
   * <p>是否做路由追踪。取值说明：0 否，1 是。</p>
   */
  NeedMTR?: number
  /**
   * <p>路由追踪超时，单位毫秒。NeedMTR 为 1 时有值。</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  MTRTimeoutMs?: number
  /**
   * <p>路由追踪最大跳数。NeedMTR 为 1 时有值。</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  MTRMaxHop?: number
  /**
   * <p>每一跳发包次数。范围 3 到 40。</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  MTRPingCount?: number
  /**
   * <p>慢请求阈值，单位毫秒。after_slow、after_dns_slow 时使用，默认 2000。</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  SlowThresholdMs?: number
  /**
   * <p>错误类型过滤。after_error 时使用。</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  ErrorType?: string
  /**
   * <p>允许启动的客户端地区，逗号分隔，名称与分析页客户端地区一致。空表示不限制。</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Regions?: string
  /**
   * <p>允许启动的客户端运营商，逗号分隔，名称与分析页客户端运营商一致。空表示不限制。</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Operators?: string
  /**
   * <p>允许启动的用户 ID，逗号分隔。空表示不限制。</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  UserIds?: string
  /**
   * <p>允许启动的设备 ID，逗号分隔。空表示不限制。</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  DeviceIds?: string
  /**
   * <p>创建人</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  CreatedBy?: string
  /**
   * <p>创建时间</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  CreatedAt?: string
  /**
   * <p>更新时间</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  UpdatedAt?: string
}

/**
 * DescribeToken返回参数结构体
 */
export interface DescribeTokenResponse {
  /**
   * <p>返回值</p>
   */
  Data?: string
  /**
   * <p>状态码</p>
   */
  Code?: number
  /**
   * <p>消息</p>
   */
  Message?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeIssuesStatisticsTrend请求参数结构体
 */
export interface DescribeIssuesStatisticsTrendRequest {
  /**
   * 产品Id
   */
  ProductId: string
  /**
   * 提供给前端使用，当填写本字段时，会覆盖 form_list 的值
   */
  ParamToken?: string
  /**
   * 接口调试专用，当 token 为空时，以这里的 value 作为筛选表单信息
   */
  FormList?: string
  /**
   * 问题Id
   */
  IssueId?: string
  /**
   * 问题类型
   */
  IssueType?: number
  /**
   * 时间窗口
   */
  TimeWindow?: number
  /**
   * 累计值
   */
  TotalSize?: boolean
  /**
   * 无
   */
  Stat?: number
  /**
   * 指标类型
   */
  MetricType?: number
  /**
   * 拓展字段
   */
  ExtraData?: string
  /**
   * 请求头
   */
  RequestHeader?: string
  /**
   * 无
   */
  TrendStat?: number
}

/**
 * DescribeDataPvUrlInfo返回参数结构体
 */
export interface DescribeDataPvUrlInfoResponse {
  /**
   * 返回值
   */
  Result?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * StopInstance请求参数结构体
 */
export interface StopInstanceRequest {
  /**
   * 需要停止的实例id
   */
  InstanceId: string
  /**
   * 修改是否包括白名单
   */
  IsModifyAll?: boolean
}

/**
 * StopTDEMApplication请求参数结构体
 */
export interface StopTDEMApplicationRequest {
  /**
   * <p>应用 ID（必填）</p>
   */
  AppId: string
}

/**
 * DescribeFileCertificate请求参数结构体
 */
export interface DescribeFileCertificateRequest {
  /**
   * 超时时间，不填默认是 5 分钟
   */
  Timeout?: number
  /**
   * bucket类型，不填默认1:web，2:app
   */
  FileType?: number
  /**
   * ProjectID
   */
  ID?: number
  /**
   * reigon对应的id
   */
  RegionID?: number
}

/**
 * DescribeError返回参数结构体
 */
export interface DescribeErrorResponse {
  /**
   * 内容
   */
  Content?: string
  /**
   * 项目ID
   */
  ID?: number
  /**
   * 时间
   */
  CreateTime?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 拨测维度统计项
 */
export interface DialDimensionItem {
  /**
   * <p>维度值。空值在控制台展示为未知。</p>
   */
  Value?: string
  /**
   * <p>执行次数。target_ip 按探测条数，其它维度按批次。</p>
   */
  ExecutionCount?: number
  /**
   * <p>成功次数</p>
   */
  SuccessCount?: number
  /**
   * <p>失败次数</p>
   */
  FailCount?: number
  /**
   * <p>平均时延，单位毫秒</p>
   */
  AvgDuration?: number
  /**
   * <p>平均丢包率，0 到 100</p>
   */
  AvgLoss?: number
}

/**
 * DescribeFOOMProblemDetail请求参数结构体
 */
export interface DescribeFOOMProblemDetailRequest {
  /**
   * <p>产品Id</p>
   */
  ProductId: string
  /**
   * <p>消息唯一标识</p>
   */
  ClientIdentify?: string
  /**
   * <p>特征</p>
   */
  Feature?: string
  /**
   * <p>事件开始时间</p>
   */
  StartEventTime?: number
  /**
   * <p>事件结束时间</p>
   */
  EndEventTime?: number
  /**
   * <p>拓展数据</p>
   */
  ExtraData?: string
  /**
   * <p>请求头</p>
   */
  RequestHeader?: string
}

/**
 * DeleteWhitelist返回参数结构体
 */
export interface DeleteWhitelistResponse {
  /**
   * 消息success
   */
  Msg?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeSymbolArtifactUploadCredential请求参数结构体
 */
export interface DescribeSymbolArtifactUploadCredentialRequest {
  /**
   * <p>制品类型。取值：js_sourcemap、ios_dsym、macos_dsym、windows_pdb、android_mapping、android_native、system_symbol。</p>
   */
  Kind: string
  /**
   * <p>上传文件名。</p>
   */
  FileName: string
  /**
   * <p>应用 ID。应用级制品必填；system_symbol 不传。</p>
   */
  AppId?: string
  /**
   * <p>兼容别名，未传 AppId 时使用。</p>
   */
  ProjectId?: string
  /**
   * <p>保留字段，请勿传入。</p>
   */
  Release?: string
  /**
   * <p>保留字段，请勿传入。</p>
   */
  Dist?: string
  /**
   * <p>保留字段，请勿传入。</p>
   */
  MinifiedUrl?: string
  /**
   * <p>保留字段，请勿传入。</p>
   */
  FileType?: string
  /**
   * <p>保留字段，请勿传入。</p>
   */
  DebugId?: string
  /**
   * <p>保留字段，请勿传入。</p>
   */
  BuildId?: string
  /**
   * <p>保留字段，请勿传入。</p>
   */
  AppVersion?: string
  /**
   * <p>保留字段，请勿传入。</p>
   */
  Platform?: string
  /**
   * <p>系统名称。</p>
   */
  OS?: string
  /**
   * <p>系统版本。</p>
   */
  OSVersion?: string
  /**
   * <p>保留字段，请勿传入。</p>
   */
  StorePath?: string
  /**
   * <p>文件内容类型，如 application/json。</p>
   */
  ContentType?: string
}

/**
 * DescribeTDEMBusinessSystems请求参数结构体
 */
export interface DescribeTDEMBusinessSystemsRequest {
  /**
   * <p>分页偏移，默认 0</p>
   */
  Offset?: number
  /**
   * <p>每页数量，默认 20，上限 100</p>
   */
  Limit?: number
  /**
   * <p>演示模式开关</p>
   */
  DemoMode?: boolean
}

/**
 * DescribeTDEMFunnelReport返回参数结构体
 */
export interface DescribeTDEMFunnelReportResponse {
  /**
   * <p>结果</p>
   */
  Result?: string
  /**
   * <p>错误信息</p>
   */
  ErrorMsg?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeMiniProgramReplayPack请求参数结构体
 */
export interface DescribeMiniProgramReplayPackRequest {
  /**
   * <p>应用id</p>
   */
  AppId: string
  /**
   * <p>回放包hash（sha256前16位hex）</p>
   */
  BundleHash: string
}

/**
 * DescribeDataReportCount请求参数结构体
 */
export interface DescribeDataReportCountRequest {
  /**
   * 开始时间
   */
  StartTime: number
  /**
   * 结束时间
   */
  EndTime: number
  /**
   * 项目ID
   */
  ID?: number
  /**
   * 上报类型（custom，event，log，miniProgramData，performance，pv，speed，webvitals）
   */
  ReportType?: string
  /**
   * 实例ID
   */
  InstanceID?: string
}

/**
 * 数值键值对
 */
export interface FloatKeyValue {
  /**
   * <p>键</p>
   */
  Key?: string
  /**
   * <p>值</p>
   */
  Value?: number
}

/**
 * DescribeDataPerformancePage返回参数结构体
 */
export interface DescribeDataPerformancePageResponse {
  /**
   * 返回值
   */
  Result?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyFieldTransformRule返回参数结构体
 */
export interface ModifyFieldTransformRuleResponse {
  /**
   * <p>结果</p>
   */
  Result?: string
  /**
   * <p>错误信息</p>
   */
  ErrorMsg?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateReleaseFile请求参数结构体
 */
export interface CreateReleaseFileRequest {
  /**
   * 项目 id
   */
  ProjectID: number
  /**
   * 文件信息列表
   */
  Files: Array<ReleaseFile>
}

/**
 * 批量指标查询条目
 */
export interface MetricQueryItem {
  /**
   * <p>事件类型</p>
   */
  EventType: string
  /**
   * <p>指标名列表，如 count / rate</p>
   */
  Metrics: Array<string>
  /**
   * <p>条目 Key，缺省为 EventType/SubType/MeasurementKey</p>
   */
  Key?: string
  /**
   * <p>子类型</p>
   */
  SubType?: string
  /**
   * <p>分位/均值测量键</p>
   */
  MeasurementKey?: string
}

/**
 * DescribeDataStaticUrlV2返回参数结构体
 */
export interface DescribeDataStaticUrlV2Response {
  /**
   * 返回值
   */
  Result?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateTDEMDialTask返回参数结构体
 */
export interface CreateTDEMDialTaskResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeFieldValues请求参数结构体
 */
export interface DescribeFieldValuesRequest {
  /**
   * <p>应用id</p>
   */
  AppId: string
  /**
   * <p>开始时间</p><p>单位：毫秒</p>
   */
  StartTime: number
  /**
   * <p>结束时间</p><p>单位：毫秒</p>
   */
  EndTime: number
  /**
   * <p>字段名</p>
   */
  FieldName: string
  /**
   * <p>数量限制</p>
   */
  Limit?: number
  /**
   * <p>过滤条件</p>
   */
  Filters?: string
  /**
   * <p>事件分类</p>
   */
  Category?: string
  /**
   * <p>可选。按前缀过滤字段去重结果。查询 user_id 或 device_id 且开启 StrictPiiPrefix 时必填，去除首尾空格后长度须不少于 2。</p>
   */
  Prefix?: string
  /**
   * <p>用于采样配置，是否对 user_id、device_id 强制前缀匹配。为 true 时必须同时传入合法 Prefix，否则返回 InvalidParameter，且不会返回无前缀的全量去重列表。为 false 或不传时，按字段返回热门去重值，行为与历史接口一致。</p><p>默认值：false</p>
   */
  StrictPiiPrefix?: boolean
  /**
   * <p>查询口径。可选。只允许空或 event。Issue 标签分布传 event。为 event 时不能同时传 HasError、MinDuration、MaxDuration，也不能把 Category 设为 session。</p>
   */
  Scope?: string
  /**
   * <p>是否只看有错误的会话。可选。不传表示不过滤。Scope 为 event 时不能传。</p>
   */
  HasError?: boolean
  /**
   * <p>会话最短时长，单位毫秒。可选。0 或不传表示不限制。Scope 为 event 时不能传。</p>
   */
  MinDuration?: number
  /**
   * <p>会话最长时长，单位毫秒。可选。0 或不传表示不限制。Scope 为 event 时不能传。</p>
   */
  MaxDuration?: number
}

/**
 * DescribeExceptionDetail返回参数结构体
 */
export interface DescribeExceptionDetailResponse {
  /**
   * <p>返回值</p>
   */
  Data?: string
  /**
   * <p>状态码</p>
   */
  Code?: number
  /**
   * <p>消息</p>
   */
  Message?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * BugLY比较结构体
 */
export interface CompareCondition {
  /**
   * App版本
   */
  AppVersion?: string
  /**
   * 筛选条件
   */
  Filters?: Filters
  /**
   * 开始时间
   */
  StartTime?: number
  /**
   * 结束时间
   */
  EndTime?: number
}

/**
 * CreateTDEMBusinessSystem返回参数结构体
 */
export interface CreateTDEMBusinessSystemResponse {
  /**
   * <p>业务系统 ID</p>
   */
  InstanceId?: string
  /**
   * <p>业务系统状态</p><p>状态：2 运行 / 6 停止 / 7 删除</p>
   */
  Status?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeTopIssues返回参数结构体
 */
export interface DescribeTopIssuesResponse {
  /**
   * <p>返回值</p>
   */
  Data?: string
  /**
   * <p>状态码</p>
   */
  Code?: number
  /**
   * <p>消息</p>
   */
  Message?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * TDEM漏斗步骤
 */
export interface FunnelStepInput {
  /**
   * <p>应用id</p>
   */
  StepName: string
  /**
   * <p>页面特征</p>
   */
  PagePattern?: string
  /**
   * <p>页面匹配模式</p>
   */
  PageMatchMode?: string
  /**
   * <p>控件Selector</p>
   */
  Selector?: string
  /**
   * <p>事件类型</p>
   */
  ActionType?: string
  /**
   * <p>可视化名称，如控件文本、自定义事件名</p>
   */
  VisualName?: string
}

/**
 * DeleteReleaseFile请求参数结构体
 */
export interface DeleteReleaseFileRequest {
  /**
   * 文件 id
   */
  ID: number
}

/**
 * DescribeDataLogUrlStatistics返回参数结构体
 */
export interface DescribeDataLogUrlStatisticsResponse {
  /**
   * 返回值
   */
  Result?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDataPvUrlStatistics请求参数结构体
 */
export interface DescribeDataPvUrlStatisticsRequest {
  /**
   * 开始时间
   */
  StartTime: number
  /**
   * allcount：性能视图，day：14天数据，vp：性能，ckuv：uv，ckpv：pv，condition：条件列表，nettype/version/platform/isp/region/device/browser/ext1/ext2/ext3/ret/status/from/url/env/：网络平台视图/Version视图/设备视图/ISP视图/地区视图/浏览器视图/ext1视图等
   */
  Type: string
  /**
   * 结束时间
   */
  EndTime: number
  /**
   * 项目ID
   */
  ID: number
  /**
   * 自定义2
   */
  ExtSecond?: string
  /**
   * 浏览器引擎
   */
  Engine?: string
  /**
   * 运营商
   */
  Isp?: string
  /**
   * 来源页面
   */
  From?: string
  /**
   * 日志等级
   */
  Level?: string
  /**
   * 品牌
   */
  Brand?: string
  /**
   * 地区
   */
  Area?: string
  /**
   * 版本
   */
  VersionNum?: string
  /**
   * 平台
   */
  Platform?: string
  /**
   * 自定义3
   */
  ExtThird?: string
  /**
   * 自定义1
   */
  ExtFirst?: string
  /**
   * 网络类型(tag 值):用于过滤/聚合字段 netType；枚举值：1(WiFi)、2(2G)、3(3G)、4(4G)、5(5G)、6(6G)、100(未知网络)。
   */
  NetType?: string
  /**
   * 机型
   */
  Device?: string
  /**
   * 显示是否海外,1表示海外，0表示非海外；默认值为空，查询所有。
   */
  IsAbroad?: string
  /**
   * 操作系统
   */
  Os?: string
  /**
   * 浏览器
   */
  Browser?: string
  /**
   * 环境
   */
  Env?: string
  /**
   * group by 参数值枚举1:1m  2:5m  3:30m  4:1h 
 5:1d
   */
  GroupByType?: number
  /**
   * 1: 查询智研
0: 走旧逻辑，已下线，勿使用
   */
  IsNewData?: number
}

/**
 * ModifyMiniProgramReplayPack请求参数结构体
 */
export interface ModifyMiniProgramReplayPackRequest {
  /**
   * <p>应用id</p>
   */
  AppId: string
  /**
   * <p>回放包id（前缀mpr_）</p>
   */
  PackId: string
  /**
   * <p>应用版本（可选）</p>
   */
  Release?: string
}

/**
 * PreviewTDEMFunnelReport返回参数结构体
 */
export interface PreviewTDEMFunnelReportResponse {
  /**
   * <p>请求结果（JSON字符串，包含 FunnelId/FunnelName/Summary/Steps/Chart）</p>
   */
  Result?: string
  /**
   * <p>错误信息</p>
   */
  ErrorMsg?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 项目接口限制类型
 */
export interface ProjectLimit {
  /**
   * 接口
   */
  ProjectInterface: string
  /**
   * 上报率
   */
  ReportRate: number
  /**
   * 上报类型 1：上报率  2：上报量限制
   */
  ReportType: number
  /**
   * 主键ID
   */
  ID?: number
  /**
   * 项目ID
   */
  ProjectID?: number
}

/**
 * DeleteFieldTransformRule请求参数结构体
 */
export interface DeleteFieldTransformRuleRequest {
  /**
   * <p>规则id</p>
   */
  Id: number
  /**
   * <p>项目id</p>
   */
  ProjectId: number
}

/**
 * DescribeDataPvUrlStatistics返回参数结构体
 */
export interface DescribeDataPvUrlStatisticsResponse {
  /**
   * 返回值
   */
  Result?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDataLogUrlInfo请求参数结构体
 */
export interface DescribeDataLogUrlInfoRequest {
  /**
   * 项目ID
   */
  ID: number
  /**
   * 时间戳
   */
  StartTime: number
  /**
   * 时间戳
   */
  EndTime: number
}

/**
 * DescribeTDEMFunnelList返回参数结构体
 */
export interface DescribeTDEMFunnelListResponse {
  /**
   * <p>结果</p>
   */
  Result?: string
  /**
   * <p>错误信息</p>
   */
  ErrorMsg?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDataPvUrlStatisticsV2返回参数结构体
 */
export interface DescribeDataPvUrlStatisticsV2Response {
  /**
   * <p>返回值</p>
   */
  Result?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * Kind=exception_dimension时返回；Rows为同一次聚合的有界排行及完整分类向量，成功空结果返回空数组。
 */
export interface ExceptionDistribution {
  /**
   * <p>按 TotalCount 降序、归一化值升序返回的完整维度行，行数不超过Limit；无数据返回空数组。</p>
   */
  Rows?: Array<ExceptionDimensionRow>
}

/**
 * DescribeTDEMFunnelReport请求参数结构体
 */
export interface DescribeTDEMFunnelReportRequest {
  /**
   * <p>应用id</p>
   */
  AppId: string
  /**
   * <p>漏斗id</p>
   */
  FunnelId: string
  /**
   * <p>开始时间</p>
   */
  StartTime: number
  /**
   * <p>结束时间</p>
   */
  EndTime: number
  /**
   * <p>平台</p>
   */
  Platform?: string
  /**
   * <p>设备类型</p>
   */
  DeviceType?: string
  /**
   * <p>浏览器</p>
   */
  Browser?: string
  /**
   * <p>操作系统</p>
   */
  OS?: string
  /**
   * <p>国家</p>
   */
  Country?: string
  /**
   * <p>页面来源</p>
   */
  Referrer?: string
  /**
   * <p>应用版本</p>
   */
  AppVersion?: string
  /**
   * <p>环境选择</p>
   */
  Environment?: string
}

/**
 * 事件排行。Kind=error 填指纹字段；URL 排行填 URL/Fail/Duration。
 */
export interface EventRankItem {
  /**
   * <p>错误指纹</p>
   */
  Fingerprint?: string
  /**
   * <p>事件类型</p>
   */
  EventType?: string
  /**
   * <p>崩溃类型</p>
   */
  CrashType?: string
  /**
   * <p>错误类型</p>
   */
  ErrorType?: string
  /**
   * <p>错误值</p>
   */
  ErrorValue?: string
  /**
   * <p>问题单 ID</p>
   */
  IssueId?: string
  /**
   * <p>问题单状态</p>
   */
  Status?: string
  /**
   * <p>API 或资源 URL</p>
   */
  URL?: string
  /**
   * <p>次数</p>
   */
  Count?: number
  /**
   * <p>影响用户数</p>
   */
  AffectedUser?: number
  /**
   * <p>失败次数</p>
   */
  Fail?: number
  /**
   * <p>耗时</p>
   */
  Duration?: number
  /**
   * <p>连接时长</p>
   */
  ConnectTime?: number
  /**
   * <p>DNS 时长</p>
   */
  DomainLookupTime?: number
  /**
   * <p>时序</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Series?: Array<EventRankPoint>
}

/**
 * DescribeTDEMSSEPercentile请求参数结构体
 */
export interface DescribeTDEMSSEPercentileRequest {
  /**
   * <p>应用 ID。这里是业务应用标识，不是腾讯云账号 AppId。</p>
   */
  AppId: string
  /**
   * <p>开始时间，Unix 毫秒。</p>
   */
  StartTime: number
  /**
   * <p>结束时间，Unix 毫秒。须通过现有时间范围校验。</p>
   */
  EndTime: number
  /**
   * <p>指标。只允许 token_throughput、first_message_delay、fluency。error_rate 与 stall_rate 返回 InvalidParameter。</p>
   */
  Metric: string
  /**
   * <p>筛选条件 JSON 字符串，格式为 [{Key,Op,Values}]。Op 只允许 in。Key 只允许 model_version、app_version、platform、os、region、is_error、is_stall、network_type、server_ip、isp、user_id。is_error 与 is_stall 的值只允许 true 或 false。</p>
   */
  Filters?: string
}

/**
 * DescribeIssueEventDetail请求参数结构体
 */
export interface DescribeIssueEventDetailRequest {
  /**
   * <p>应用 ID</p>
   */
  AppId: string
  /**
   * <p>Issue ID</p>
   */
  IssueId: string
  /**
   * <p>事件 ID</p>
   */
  EventId: string
}

/**
 * 大模型对话趋势维度序列
 */
export interface TDEMSSETrendSeries {
  /**
   * <p>维度取值。空值保留为空字符串。</p>
   */
  DimensionValue?: string
  /**
   * <p>该取值在各个时间桶上的点。</p>
   */
  Points?: Array<TDEMSSETrendPoint>
}

/**
 * ModifyTDEMSampleRate请求参数结构体
 */
export interface ModifyTDEMSampleRateRequest {
  /**
   * <p>应用 ID（必填）</p>
   */
  AppId: string
  /**
   * <p>采集采样率 0-100（必填）</p>
   */
  SampleRate: number
  /**
   * <p>会话回放采样率 0-100（可选）</p>
   */
  ReplaySampleRate?: number
}

/**
 * DescribeTDEMSessionReplayTimeline请求参数结构体
 */
export interface DescribeTDEMSessionReplayTimelineRequest {
  /**
   * <p>应用id</p>
   */
  AppId: string
  /**
   * <p>会话id</p>
   */
  SessionId: string
  /**
   * <p>开始时间</p>
   */
  StartTime?: number
  /**
   * <p>结束时间</p>
   */
  EndTime?: number
  /**
   * <p>数量限制</p>
   */
  Limit?: number
  /**
   * <p>游标</p>
   */
  Cursor?: number
  /**
   * <p>时间线分页的事件ID游标，与时间游标Cursor共同定位续页起点，用于同一时间戳下的稳定分页。</p>
   */
  CursorEventId?: string
}

/**
 * DescribeDataLogUrlInfo返回参数结构体
 */
export interface DescribeDataLogUrlInfoResponse {
  /**
   * 返回字符串
   */
  Result?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * rum 日志对象
 */
export interface RumPvInfo {
  /**
   * 项目ID
   */
  ProjectId?: number
  /**
   * pv访问量
   */
  Pv?: string
  /**
   * 时间
   */
  CreateTime?: string
}

/**
 * DescribeExceptionReportList返回参数结构体
 */
export interface DescribeExceptionReportListResponse {
  /**
   * <p>返回值</p>
   */
  Data?: string
  /**
   * <p>状态码</p>
   */
  Code?: number
  /**
   * <p>消息</p>
   */
  Message?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateTDEMBusinessSystem请求参数结构体
 */
export interface CreateTDEMBusinessSystemRequest {
  /**
   * <p>业务系统名称（必填）</p>
   */
  InstanceName: string
  /**
   * <p>业务系统描述（可选）</p>
   */
  InstanceDesc?: string
  /**
   * <p>标签列表</p>
   */
  Tags?: Array<Tag>
}

/**
 * CreateTDEMDialTask请求参数结构体
 */
export interface CreateTDEMDialTaskRequest {
  /**
   * <p>应用 ID</p>
   */
  AppId: string
  /**
   * <p>任务名称，最长 128 个字符</p>
   */
  TaskName: string
  /**
   * <p>探测类型。取值说明：icmp、tcp。</p>
   */
  Type: string
  /**
   * <p>执行时机。取值说明：realtime、after_request、after_error、after_slow、after_dns_slow。tcp 不能使用 after_dns_slow。</p>
   */
  ExecutionTime: string
  /**
   * <p>单次探测超时，单位毫秒。范围 1000 到 20000。</p>
   */
  TimeoutMs: number
  /**
   * <p>探测周期，单位毫秒，必须大于 0。</p>
   */
  PeriodMs: number
  /**
   * <p>发包次数。范围 3 到 40。</p>
   */
  PackageCount: number
  /**
   * <p>任务状态。取值说明：active、paused。不传时默认为 active。</p>
   */
  Status?: string
  /**
   * <p>监听域名。ExecutionTime 不是 realtime 时必填。</p>
   */
  WatchDomain?: string
  /**
   * <p>拨测目标。域名、IP 或 ldns。after_dns_slow 固定为 ldns，其它时机必填。</p>
   */
  DialDomain?: string
  /**
   * <p>TCP 端口，1 到 65535。Type 为 tcp 时必填。</p>
   */
  Port?: number
  /**
   * <p>实时拨测间隔，单位毫秒。ExecutionTime 为 realtime 时必填。取值说明：60000、300000、600000、900000、1800000、3600000。</p>
   */
  FrequencyMs?: number
  /**
   * <p>ICMP 包大小，单位字节。范围 32 到 1024。不传时默认 64。</p>
   */
  PackageSize?: number
  /**
   * <p>是否做路由追踪。取值说明：0 否，1 是。不传时为 0。</p>
   */
  NeedMTR?: number
  /**
   * <p>路由追踪超时，单位毫秒。NeedMTR 为 1 时必填。</p>
   */
  MTRTimeoutMs?: number
  /**
   * <p>路由追踪最大跳数。NeedMTR 为 1 时填写。</p>
   */
  MTRMaxHop?: number
  /**
   * <p>每一跳发包次数。范围 3 到 40。</p>
   */
  MTRPingCount?: number
  /**
   * <p>慢请求阈值，单位毫秒。after_slow、after_dns_slow 不传时默认 2000。</p>
   */
  SlowThresholdMs?: number
  /**
   * <p>错误类型过滤。after_error 时使用。</p>
   */
  ErrorType?: string
  /**
   * <p>允许启动的客户端地区，逗号分隔，名称必须与分析页客户端地区完全一致。不传或空字符串表示不限制。</p>
   */
  Regions?: string
  /**
   * <p>允许启动的客户端运营商，逗号分隔，名称必须与分析页客户端运营商完全一致。不传或空字符串表示不限制。</p>
   */
  Operators?: string
  /**
   * <p>允许启动的用户 ID，逗号分隔。不传或空字符串表示不限制。</p>
   */
  UserIds?: string
  /**
   * <p>允许启动的设备 ID，逗号分隔。不传或空字符串表示不限制。</p>
   */
  DeviceIds?: string
}

/**
 * DescribeTDEMSampleRate返回参数结构体
 */
export interface DescribeTDEMSampleRateResponse {
  /**
   * <p>应用 ID</p>
   */
  AppId?: string
  /**
   * <p>采集采样率 0-100</p>
   */
  SampleRate?: number
  /**
   * <p>会话回放采样率 0-100；未配置时为 1</p>
   */
  ReplaySampleRate?: number
  /**
   * <p>创建时间</p>
   */
  CreatedAt?: string
  /**
   * <p>更新时间</p>
   */
  UpdatedAt?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeRumStatsLogListV2请求参数结构体
 */
export interface DescribeRumStatsLogListV2Request {
  /**
   * <p>查询日志开始时间（必填）</p>
   */
  StartTime: number
  /**
   * <p>单次查询返回的原始日志条数，最大值为100（必填）</p>
   */
  Limit: number
  /**
   * <p>过滤条件，其中key与运算符(Operator)对应可选字段枚举值与示例查看文档：<a href="https://cloud.tencent.com/document/product/248/87223">日志查询相关</a></p>
   */
  Filter: string
  /**
   * <p>查询日志结束时间（必填）</p>
   */
  EndTime: number
  /**
   * <p>项目ID（必填）</p>
   */
  ID: number
}

/**
 * DescribeTDEMSSESummary请求参数结构体
 */
export interface DescribeTDEMSSESummaryRequest {
  /**
   * <p>应用 ID。这里是业务应用标识，不是腾讯云账号 AppId。</p>
   */
  AppId: string
  /**
   * <p>开始时间，Unix 毫秒。</p>
   */
  StartTime: number
  /**
   * <p>结束时间，Unix 毫秒。须通过现有时间范围校验。</p>
   */
  EndTime: number
  /**
   * <p>筛选条件 JSON 字符串，格式为 [{Key,Op,Values}]。Op 只允许 in。Key 只允许 model_version、app_version、platform、os、region、is_error、is_stall、network_type、server_ip、isp、user_id。is_error 与 is_stall 的值只允许 true 或 false。</p>
   */
  Filters?: string
}

/**
 * ModifyTDEMDialTask请求参数结构体
 */
export interface ModifyTDEMDialTaskRequest {
  /**
   * <p>应用 ID</p>
   */
  AppId: string
  /**
   * <p>任务 ID</p>
   */
  TaskId: string
  /**
   * <p>任务名称。不传表示不修改。</p>
   */
  TaskName?: string
  /**
   * <p>任务状态。取值说明：active、paused。不传表示不修改。不能改为 deleted。</p>
   */
  Status?: string
  /**
   * <p>探测类型。创建后不可修改。</p>
   */
  Type?: string
  /**
   * <p>执行时机。创建后不可修改。</p>
   */
  ExecutionTime?: string
  /**
   * <p>监听域名。不传表示不修改。</p>
   */
  WatchDomain?: string
  /**
   * <p>拨测目标。不传表示不修改。</p>
   */
  DialDomain?: string
  /**
   * <p>TCP 端口。不传表示不修改。</p>
   */
  Port?: number
  /**
   * <p>实时拨测间隔，单位毫秒。不传表示不修改。</p>
   */
  FrequencyMs?: number
  /**
   * <p>单次探测超时，单位毫秒。不传表示不修改。</p>
   */
  TimeoutMs?: number
  /**
   * <p>探测周期，单位毫秒。不传表示不修改。</p>
   */
  PeriodMs?: number
  /**
   * <p>发包次数。不传表示不修改。</p>
   */
  PackageCount?: number
  /**
   * <p>ICMP 包大小，单位字节。不传表示不修改。</p>
   */
  PackageSize?: number
  /**
   * <p>是否做路由追踪。取值说明：0 否，1 是。不传表示不修改。</p>
   */
  NeedMTR?: number
  /**
   * <p>路由追踪超时，单位毫秒。不传表示不修改。</p>
   */
  MTRTimeoutMs?: number
  /**
   * <p>路由追踪最大跳数。不传表示不修改。</p>
   */
  MTRMaxHop?: number
  /**
   * <p>每一跳发包次数。不传表示不修改。</p>
   */
  MTRPingCount?: number
  /**
   * <p>慢请求阈值，单位毫秒。不传表示不修改。</p>
   */
  SlowThresholdMs?: number
  /**
   * <p>错误类型过滤。不传表示不修改。</p>
   */
  ErrorType?: string
  /**
   * <p>允许启动的客户端地区，逗号分隔，名称必须与分析页客户端地区完全一致。不传保留原值，空字符串清空。空名单表示不限制。</p>
   */
  Regions?: string
  /**
   * <p>允许启动的客户端运营商，逗号分隔，名称必须与分析页客户端运营商完全一致。不传保留原值，空字符串清空。空名单表示不限制。</p>
   */
  Operators?: string
  /**
   * <p>允许启动的用户 ID，逗号分隔。不传保留原值，空字符串清空。空名单表示不限制。</p>
   */
  UserIds?: string
  /**
   * <p>允许启动的设备 ID，逗号分隔。不传保留原值，空字符串清空。空名单表示不限制。</p>
   */
  DeviceIds?: string
}

/**
 * DescribeDataCustomUrlV2返回参数结构体
 */
export interface DescribeDataCustomUrlV2Response {
  /**
   * 返回值
   */
  Result?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeReplayData请求参数结构体
 */
export interface DescribeReplayDataRequest {
  /**
   * <p>应用id</p>
   */
  AppId: string
  /**
   * <p>回放id</p>
   */
  ReplayId: string
  /**
   * <p>session id</p>
   */
  SessionId?: string
  /**
   * <p>segment id</p>
   */
  SegmentId?: number
  /**
   * <p>单个录制分片解压后的最大允许字节数</p><p>取值范围：[1, 8388608]</p><p>单位：字节（Byte）</p>
   */
  MaxDecodedBytes?: number
}

/**
 * DescribeTDEMDialOverview请求参数结构体
 */
export interface DescribeTDEMDialOverviewRequest {
  /**
   * <p>应用 ID</p>
   */
  AppId: string
  /**
   * <p>开始时间，毫秒时间戳</p>
   */
  StartTime: number
  /**
   * <p>结束时间，毫秒时间戳，必须大于 StartTime</p>
   */
  EndTime: number
  /**
   * <p>任务 ID。不传表示不过滤。</p>
   */
  TaskId?: string
  /**
   * <p>客户端平台。不传表示不过滤。</p>
   */
  Platform?: string
  /**
   * <p>应用版本。不传表示不过滤。</p>
   */
  AppVersion?: string
  /**
   * <p>设备机型，对应 device_type。不传表示不过滤。</p>
   */
  Device?: string
  /**
   * <p>网络类型，对应 network_type。不传表示不过滤。</p>
   */
  NetType?: string
  /**
   * <p>客户端运营商，对应 isp。不传表示不过滤。不是目标 IP 运营商。</p>
   */
  Operator?: string
  /**
   * <p>客户端地区，对应 province。云 API 公共参数已占用 Region，筛选入参名为 ClientRegion。不传表示不过滤。不是目标 IP 地区。</p>
   */
  ClientRegion?: string
  /**
   * <p>目标 IP。不传表示不过滤。</p>
   */
  TargetIp?: string
  /**
   * <p>环境。可选。不传表示不过滤。</p>
   */
  Environment?: string
}

/**
 * DescribeDataEventUrl返回参数结构体
 */
export interface DescribeDataEventUrlResponse {
  /**
   * 返回值
   */
  Result?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyTDEMApplication请求参数结构体
 */
export interface ModifyTDEMApplicationRequest {
  /**
   * <p>应用 ID（必填）</p>
   */
  AppId: string
  /**
   * <p>应用名称（可选）</p>
   */
  Name?: string
  /**
   * <p>应用描述（可选）</p>
   */
  Desc?: string
  /**
   * <p>是否排除已忽略错误</p>
   */
  ExcludeIgnoredErrors?: boolean
  /**
   * <p>APM 实例 ID 列表</p>
   */
  ApmInstanceIds?: Array<string>
}

/**
 * ModifySampleRate返回参数结构体
 */
export interface ModifySampleRateResponse {
  /**
   * <p>返回结果</p>
   */
  Result?: string
  /**
   * <p>错误信息</p>
   */
  ErrorMsg?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeTDEMFunnelStepSessionList请求参数结构体
 */
export interface DescribeTDEMFunnelStepSessionListRequest {
  /**
   * <p>应用id</p>
   */
  AppId: string
  /**
   * <p>漏斗id</p>
   */
  FunnelId: string
  /**
   * <p>开始时间</p>
   */
  StartTime: number
  /**
   * <p>结束时间</p>
   */
  EndTime: number
  /**
   * <p>步骤索引</p>
   */
  StepIndex: number
  /**
   * <p>漏斗步骤</p>
   */
  Steps?: string
  /**
   * <p>下钻类型</p>
   */
  DrillType?: string
  /**
   * <p>页面号</p>
   */
  Page?: number
  /**
   * <p>每页大小</p>
   */
  PageSize?: number
  /**
   * <p>平台</p>
   */
  Platform?: string
  /**
   * <p>应用版本</p>
   */
  AppVersion?: string
  /**
   * <p>设备类型</p>
   */
  DeviceType?: string
  /**
   * <p>浏览器</p>
   */
  Browser?: string
  /**
   * <p>操作系统</p>
   */
  OS?: string
  /**
   * <p>国家</p>
   */
  Country?: string
  /**
   * <p>页面来源</p>
   */
  Referrer?: string
  /**
   * <p>环境</p>
   */
  Environment?: string
}

/**
 * DescribeReleaseFiles返回参数结构体
 */
export interface DescribeReleaseFilesResponse {
  /**
   * <p>文件信息列表</p>
   */
  Files?: Array<ReleaseFile>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyMiniProgramReplayPack返回参数结构体
 */
export interface ModifyMiniProgramReplayPackResponse {
  /**
   * <p>错误信息</p>
   */
  ErrorMsg?: string
  /**
   * <p>请求结果（JSON字符串，包含 PackId/AppId/BundleHash/Release/Status）</p>
   */
  Result?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteMiniProgramReplayPack请求参数结构体
 */
export interface DeleteMiniProgramReplayPackRequest {
  /**
   * <p>应用id</p>
   */
  AppId: string
  /**
   * <p>回放包id（前缀mpr_）</p>
   */
  PackId: string
}

/**
 * DescribeDataStaticProjectV2请求参数结构体
 */
export interface DescribeDataStaticProjectV2Request {
  /**
   * 开始时间
   */
  StartTime: number
  /**
   * allcount：性能视图，day：14天数据，condition：条件列表，area：请求速度分布，nettype/version/platform/isp/region/device/browser/ext1/ext2/ext3/ret/status/from/url/env/：网络平台视图/Version视图/设备视图/ISP视图/地区视图/浏览器视图/ext1视图等
   */
  Type: string
  /**
   * 结束时间
   */
  EndTime: number
  /**
   * 项目ID
   */
  ID: number
  /**
   * 自定义2
   */
  ExtSecond?: string
  /**
   * 浏览器引擎
   */
  Engine?: string
  /**
   * 运营商
   */
  Isp?: string
  /**
   * 来源页面
   */
  From?: string
  /**
   * 日志等级（1表示白名单日志，2表示一般日志，4表示错误日志，8表示Promise 错误，16表示Ajax 请求异常，32表示JS 加载异常，64表示图片加载异常，128表示css 加载异常，256表示console.error，512表示音视频资源异常，1024表示retcode 异常，2048表示aegis report，4096表示PV日志，8192表示自定义事件，16384表示小程序 页面不存在，32768表示websocket错误，65536表示js bridge错误）
   */
  Level?: string
  /**
   * 品牌
   */
  Brand?: string
  /**
   * 地区
   */
  Area?: string
  /**
   * 版本
   */
  VersionNum?: string
  /**
   * 平台
   */
  Platform?: string
  /**
   * 自定义3
   */
  ExtThird?: string
  /**
   * 自定义1
   */
  ExtFirst?: string
  /**
   * 网络类型（1,2,3,4,5,100），1表示WIFI, 2表示2G, 3表示3G, 4表示4G, 5表示5G, 6表示6G, 100表示未知。
   */
  NetType?: string
  /**
   * 机型
   */
  Device?: string
  /**
   * 显示是否海外,1表示海外，0表示非海外；默认值为空，查询所有。
   */
  IsAbroad?: string
  /**
   * 操作系统
   */
  Os?: string
  /**
   * 浏览器
   */
  Browser?: string
  /**
   * 耗时计算
   */
  CostType?: string
  /**
   * 来源
   */
  Url?: Array<string>
  /**
   * 环境
   */
  Env?: string
  /**
   * 自定义4
   */
  ExtFourth?: string
  /**
   * 自定义5
   */
  ExtFifth?: string
  /**
   * 自定义6
   */
  ExtSixth?: string
  /**
   * 自定义7
   */
  ExtSeventh?: string
  /**
   * 自定义8
   */
  ExtEighth?: string
  /**
   * 自定义9
   */
  ExtNinth?: string
  /**
   * 自定义10
   */
  ExtTenth?: string
  /**
   * 时间段
   */
  Granularity?: string
}

/**
 * DescribeTDEMUsageDetail请求参数结构体
 */
export interface DescribeTDEMUsageDetailRequest {
  /**
   * <p>开始时间，YYYY-MM-DD HH:00:00（小时对齐，必填）</p>
   */
  StartTime: string
  /**
   * <p>结束时间，YYYY-MM-DD HH:00:00（小时对齐，必填）</p>
   */
  EndTime: string
  /**
   * <p>可选关键字，匹配业务系统名称、应用名称或应用 ID</p>
   */
  Keyword?: string
  /**
   * <p>分页偏移，默认 0</p>
   */
  Offset?: number
  /**
   * <p>每页数量，默认 20，上限 100</p>
   */
  Limit?: number
  /**
   * <p>演示模式开关</p>
   */
  DemoMode?: boolean
}

/**
 * DescribeProjects请求参数结构体
 */
export interface DescribeProjectsRequest {
  /**
   * 分页每页数目，整型
   */
  Limit: number
  /**
   * 分页页码，整型
   */
  Offset: number
  /**
   * 过滤参数；demo模式传{"Name": "IsDemo", "Values":["1"]}
   */
  Filters?: Array<Filter>
  /**
   * 该参数已废弃，demo模式请在Filters内注明
   * @deprecated
   */
  IsDemo?: number
}

/**
 * DescribeDataEventUrl请求参数结构体
 */
export interface DescribeDataEventUrlRequest {
  /**
   * 开始时间
   */
  StartTime: number
  /**
   * allcount：性能视图，day：14天数据，condition：条件列表，ckuv：获取uv趋势，ckpv：获取pv趋势，nettype/version/platform/isp/region/device/browser/ext1/ext2/ext3/ret/status/from/url/env/：网络平台视图/Version视图/设备视图/ISP视图/地区视图/浏览器视图/ext1视图等等
   */
  Type: string
  /**
   * 结束时间
   */
  EndTime: number
  /**
   * 项目ID
   */
  ID: number
  /**
   * 自定义2
   */
  ExtSecond?: string
  /**
   * 浏览器引擎
   */
  Engine?: string
  /**
   * 运营商
   */
  Isp?: string
  /**
   * 来源页面
   */
  From?: string
  /**
   * 日志等级
   */
  Level?: string
  /**
   * 品牌
   */
  Brand?: string
  /**
   * 地区
   */
  Area?: string
  /**
   * 版本
   */
  VersionNum?: string
  /**
   * 平台
   */
  Platform?: string
  /**
   * 自定义3
   */
  ExtThird?: string
  /**
   * 自定义1
   */
  ExtFirst?: string
  /**
   * netType | 网络类型(tag 值):用于过滤/聚合字段 netType；枚举值：1(WiFi)、2(2G)、3(3G)、4(4G)、5(5G)、6(6G)、100(未知网络)。也可通过 Type=condition（show tag values）查询当前数据集中的实际可选值。

   */
  NetType?: string
  /**
   * 机型
   */
  Device?: string
  /**
   * 显示是否海外,1表示海外，0表示非海外；默认值为空，查询所有。
   */
  IsAbroad?: string
  /**
   * 操作系统
   */
  Os?: string
  /**
   * 浏览器
   */
  Browser?: string
  /**
   * 筛选条件
   */
  Name?: string
  /**
   * 环境
   */
  Env?: string
}

/**
 * ModifyTDEMFunnel请求参数结构体
 */
export interface ModifyTDEMFunnelRequest {
  /**
   * <p>应用id</p>
   */
  AppId: string
  /**
   * <p>漏斗id</p>
   */
  FunnelId: string
  /**
   * <p>漏斗名</p>
   */
  FunnelName: string
  /**
   * <p>漏斗步骤</p>
   */
  Steps: Array<FunnelStepInput>
  /**
   * <p>漏斗描述</p>
   */
  Description?: string
  /**
   * <p>漏斗状态</p>
   */
  Status?: string
  /**
   * <p>漏斗来源</p>
   */
  Source?: string
}

/**
 * ModifyTDEMApplication返回参数结构体
 */
export interface ModifyTDEMApplicationResponse {
  /**
   * <p>应用 ID</p>
   */
  AppId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDataReportCountV2返回参数结构体
 */
export interface DescribeDataReportCountV2Response {
  /**
   * <p>返回值</p>
   */
  Result?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeTDEMDialTrend请求参数结构体
 */
export interface DescribeTDEMDialTrendRequest {
  /**
   * <p>应用 ID</p>
   */
  AppId: string
  /**
   * <p>开始时间，毫秒时间戳</p>
   */
  StartTime: number
  /**
   * <p>结束时间，毫秒时间戳，必须大于 StartTime</p>
   */
  EndTime: number
  /**
   * <p>任务 ID。不传表示不过滤。</p>
   */
  TaskId?: string
  /**
   * <p>客户端平台。不传表示不过滤。</p>
   */
  Platform?: string
  /**
   * <p>应用版本。不传表示不过滤。</p>
   */
  AppVersion?: string
  /**
   * <p>设备机型，对应 device_type。不传表示不过滤。</p>
   */
  Device?: string
  /**
   * <p>网络类型，对应 network_type。不传表示不过滤。</p>
   */
  NetType?: string
  /**
   * <p>客户端运营商，对应 isp。不传表示不过滤。不是目标 IP 运营商。</p>
   */
  Operator?: string
  /**
   * <p>客户端地区，对应 province。云 API 公共参数已占用 Region，筛选入参名为 ClientRegion。不传表示不过滤。不是目标 IP 地区。</p>
   */
  ClientRegion?: string
  /**
   * <p>目标 IP。不传表示不过滤。</p>
   */
  TargetIp?: string
  /**
   * <p>时间粒度。取值说明：hour、day。不传时为 hour。</p>
   */
  Granularity?: string
  /**
   * <p>环境。可选。不传表示不过滤。</p>
   */
  Environment?: string
}

/**
 * DescribeDataReportCount返回参数结构体
 */
export interface DescribeDataReportCountResponse {
  /**
   * 返回值
   */
  Result?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeFOOMMallocReportList返回参数结构体
 */
export interface DescribeFOOMMallocReportListResponse {
  /**
   * <p>返回值</p>
   */
  Data?: string
  /**
   * <p>消息</p>
   */
  Message?: string
  /**
   * <p>状态码</p>
   */
  Code?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeTDEMEventSearchSummary请求参数结构体
 */
export interface DescribeTDEMEventSearchSummaryRequest {
  /**
   * <p>应用 ID（必填）</p>
   */
  AppId: string
  /**
   * <p>开始时间 Unix 毫秒（必填）</p>
   */
  StartTime: number
  /**
   * <p>结束时间 Unix 毫秒（必填）</p>
   */
  EndTime: number
  /**
   * <p>事件分类（必填，可含 session）</p>
   */
  Category: string
  /**
   * <p>筛选条件 JSON 字符串：[{Key,Op,Values}]</p>
   */
  Filters?: string
  /**
   * <p>分桶秒数，正整数；缺省由服务端按窗口选取</p>
   */
  IntervalSec?: number
  /**
   * <p>是否只看有错误的会话。可选。不传表示不过滤。Category 为 session 的汇总查询会使用该条件。</p>
   */
  HasError?: boolean
  /**
   * <p>会话最短时长，单位毫秒。可选。0 或不传表示不限制。Category 为 session 的汇总查询会使用该条件。</p>
   */
  MinDuration?: number
  /**
   * <p>会话最长时长，单位毫秒。可选。0 或不传表示不限制。Category 为 session 的汇总查询会使用该条件。</p>
   */
  MaxDuration?: number
}

/**
 * DescribeTDEMDialExecutionList请求参数结构体
 */
export interface DescribeTDEMDialExecutionListRequest {
  /**
   * <p>应用 ID</p>
   */
  AppId: string
  /**
   * <p>开始时间，毫秒时间戳</p>
   */
  StartTime: number
  /**
   * <p>结束时间，毫秒时间戳，必须大于 StartTime</p>
   */
  EndTime: number
  /**
   * <p>任务 ID。不传表示不过滤。</p>
   */
  TaskId?: string
  /**
   * <p>客户端平台。不传表示不过滤。</p>
   */
  Platform?: string
  /**
   * <p>应用版本。不传表示不过滤。</p>
   */
  AppVersion?: string
  /**
   * <p>设备机型，对应 device_type。不传表示不过滤。</p>
   */
  Device?: string
  /**
   * <p>网络类型，对应 network_type。不传表示不过滤。</p>
   */
  NetType?: string
  /**
   * <p>客户端运营商，对应 isp。不传表示不过滤。不是目标 IP 运营商。</p>
   */
  Operator?: string
  /**
   * <p>客户端地区，对应 province。云 API 公共参数已占用 Region，筛选入参名为 ClientRegion。不传表示不过滤。不是目标 IP 地区。</p>
   */
  ClientRegion?: string
  /**
   * <p>目标 IP。不传表示不过滤。</p>
   */
  TargetIp?: string
  /**
   * <p>返回条数。范围 1 到 100，不传时为 20。</p>
   */
  Limit?: number
  /**
   * <p>偏移量。不传时为 0。</p>
   */
  Offset?: number
  /**
   * <p>是否只看成功或失败批次。不传表示不过滤。</p>
   */
  Success?: boolean
  /**
   * <p>环境。可选。不传表示不过滤。</p>
   */
  Environment?: string
}

/**
 * DescribeRumLogList请求参数结构体
 */
export interface DescribeRumLogListRequest {
  /**
   * 排序方式  desc  asc（必填）
   */
  OrderBy: string
  /**
   * 开始时间（必填）格式为时间戳 毫秒
   */
  StartTime: string
  /**
   * 单次查询返回的原始日志条数，最大值为100（必填）
   */
  Limit: number
  /**
   * 页数，第几页
   */
  Page: number
  /**
   * 查询语句，参考控制台请求参数，语句长度最大为4096（必填）
   */
  Query: string
  /**
   * 结束时间（必填）格式为时间戳 毫秒
   */
  EndTime: string
  /**
   * 项目ID（必填）
   */
  ID: number
}

/**
 * DescribeDataPerformancePageV2请求参数结构体
 */
export interface DescribeDataPerformancePageV2Request {
  /**
   * 项目ID
   */
  ID: number
  /**
   * 开始时间
   */
  StartTime: number
  /**
   * 结束时间
   */
  EndTime: number
  /**
   * pagepv：pv视图，allcount：性能视图，falls：页面加载瀑布图，samp：首屏时间，day：14天数据，nettype：网络/平台视图，performance：页面性能TOP视图，version/platform/isp/region/device/browser/ext1/ext2/ext3/ret/status/from/url/env/：ISP视图/地区视图/浏览器视图等
   */
  Type: string
  /**
   * 日志等级
   */
  Level?: string
  /**
   * 运营商
   */
  Isp?: string
  /**
   * 地区
   */
  Area?: string
  /**
   * 网络类型
   */
  NetType?: string
  /**
   * 平台
   */
  Platform?: string
  /**
   * 机型
   */
  Device?: string
  /**
   * 版本
   */
  VersionNum?: string
  /**
   * 自定义1
   */
  ExtFirst?: string
  /**
   * 自定义2
   */
  ExtSecond?: string
  /**
   * 自定义3
   */
  ExtThird?: string
  /**
   * 显示是否海外,1表示海外，0表示非海外；默认值为空，查询所有。
   */
  IsAbroad?: string
  /**
   * 浏览器
   */
  Browser?: string
  /**
   * 操作系统
   */
  Os?: string
  /**
   * 浏览器引擎
   */
  Engine?: string
  /**
   * 品牌
   */
  Brand?: string
  /**
   * 来源页面
   */
  From?: string
  /**
   * 耗时计算方式
   */
  CostType?: string
  /**
   * 环境变量
   */
  Env?: string
  /**
   * 网络状态
   */
  NetStatus?: string
  /**
   * 是否返回webvitals数据
   */
  WebVitals?: boolean
  /**
   * 自定义4
   */
  ExtFourth?: string
  /**
   * 自定义5
   */
  ExtFifth?: string
  /**
   * 自定义6
   */
  ExtSixth?: string
  /**
   * 自定义7
   */
  ExtSeventh?: string
  /**
   * 自定义8
   */
  ExtEighth?: string
  /**
   * 自定义9
   */
  ExtNinth?: string
  /**
   * 自定义10
   */
  ExtTenth?: string
  /**
   * 时间段
   */
  Granularity?: string
}

/**
 * DescribeDataStaticResource请求参数结构体
 */
export interface DescribeDataStaticResourceRequest {
  /**
   * 开始时间
   */
  StartTime: number
  /**
   * top：资源top视图，count40x：40X视图，nettype/version/platform/isp/region/device/browser/ext1/ext2/ext3/ret/status/from/url/env/：网络平台视图/Version视图/设备视图/ISP视图/地区视图/浏览器视图//ext1视图等等
   */
  Type: string
  /**
   * 结束时间
   */
  EndTime: number
  /**
   * 项目ID
   */
  ID: number
  /**
   * 自定义2
   */
  ExtSecond?: string
  /**
   * 浏览器引擎
   */
  Engine?: string
  /**
   * 运营商
   */
  Isp?: string
  /**
   * 来源页面
   */
  From?: string
  /**
   * 日志等级
   */
  Level?: string
  /**
   * 品牌
   */
  Brand?: string
  /**
   * 地区
   */
  Area?: string
  /**
   * 版本
   */
  VersionNum?: string
  /**
   * 平台
   */
  Platform?: string
  /**
   * 自定义3
   */
  ExtThird?: string
  /**
   * 自定义1
   */
  ExtFirst?: string
  /**
   * 网络类型(tag 值):用于过滤/聚合字段 netType；枚举值：1(WiFi)、2(2G)、3(3G)、4(4G)、5(5G)、6(6G)、100(未知网络)。
   */
  NetType?: string
  /**
   * 机型
   */
  Device?: string
  /**
   * 显示是否海外,1表示海外，0表示非海外；默认值为空，查询所有。
   */
  IsAbroad?: string
  /**
   * 操作系统
   */
  Os?: string
  /**
   * 浏览器
   */
  Browser?: string
  /**
   * 耗时口径："50"/"75"/"90"/"95"/"99"/"99.5" 分别表示 TP50/TP75/TP90/TP95/TP99/TP99.5（percentile2）；"avg" 表示均值（avg）。
   */
  CostType?: string
  /**
   * 来源
   */
  Url?: string
  /**
   * 环境
   */
  Env?: string
}

/**
 * DescribeTawInstances返回参数结构体
 */
export interface DescribeTawInstancesResponse {
  /**
   * 实例列表
   */
  InstanceSet?: Array<RumInstanceInfo>
  /**
   * 实例总数
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeTDEMSessionReplayTimeline返回参数结构体
 */
export interface DescribeTDEMSessionReplayTimelineResponse {
  /**
   * <p>请求结果</p>
   */
  Result?: string
  /**
   * <p>错误信息</p>
   */
  ErrorMsg?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeTDEMRelatedEvents请求参数结构体
 */
export interface DescribeTDEMRelatedEventsRequest {
  /**
   * <p>应用 ID（必填）</p>
   */
  AppId: string
  /**
   * <p>开始时间 Unix 毫秒（必填，用于分区裁剪）</p>
   */
  StartTime: number
  /**
   * <p>结束时间 Unix 毫秒（必填）</p>
   */
  EndTime: number
  /**
   * <p>模式：timeline / page / breadcrumb（必填）</p>
   */
  Mode: string
  /**
   * <p>会话 ID（必填）</p>
   */
  SessionId: string
  /**
   * <p>页面 URL（Mode=page 必填）</p>
   */
  PageUrl?: string
  /**
   * <p>锚点 Unix 毫秒（Mode=page/breadcrumb 使用）</p>
   */
  AnchorTimestamp?: number
  /**
   * <p>偏移，&gt;=0，默认 0</p>
   */
  Offset?: number
  /**
   * <p>条数，1-200，默认 200</p>
   */
  Limit?: number
  /**
   * <p>事件分类（可选）</p>
   */
  Category?: string
  /**
   * <p>关键字（可选）</p>
   */
  Keyword?: string
  /**
   * <p>视图 ID</p>
   */
  ViewId?: string
}

/**
 * DescribeDataPvUrlInfo请求参数结构体
 */
export interface DescribeDataPvUrlInfoRequest {
  /**
   * 开始时间
   */
  StartTime: number
  /**
   * 查询类型（string）：当前后端实现固定按 from 聚合统计，未使用该字段（保留字段，传值不会影响结果）。
   */
  Type: string
  /**
   * 结束时间
   */
  EndTime: number
  /**
   * 项目ID
   */
  ID: number
  /**
   * 自定义2
   */
  ExtSecond?: string
  /**
   * 浏览器引擎
   */
  Engine?: string
  /**
   * 运营商
   */
  Isp?: string
  /**
   * 来源页面
   */
  From?: string
  /**
   * 日志等级
   */
  Level?: string
  /**
   * 品牌
   */
  Brand?: string
  /**
   * 地区
   */
  Area?: string
  /**
   * 版本
   */
  VersionNum?: string
  /**
   * 平台
   */
  Platform?: string
  /**
   * 自定义3
   */
  ExtThird?: string
  /**
   * 自定义1
   */
  ExtFirst?: string
  /**
   * 网络类型(tag 值):用于过滤/聚合字段 netType；枚举值：1(WiFi)、2(2G)、3(3G)、4(4G)、5(5G)、6(6G)、100(未知网络)。
   */
  NetType?: string
  /**
   * 机型
   */
  Device?: string
  /**
   * 显示是否海外,1表示海外，0表示非海外；默认值为空，查询所有。
   */
  IsAbroad?: string
  /**
   * 操作系统
   */
  Os?: string
  /**
   * 浏览器
   */
  Browser?: string
  /**
   * 环境
   */
  Env?: string
}

/**
 * CreateReleaseFile返回参数结构体
 */
export interface CreateReleaseFileResponse {
  /**
   * 调用结果
   */
  Msg?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 业务系统
 */
export interface BusinessSystemItem {
  /**
   * <p>业务系统 ID</p>
   */
  InstanceId?: string
  /**
   * <p>名称</p>
   */
  InstanceName?: string
  /**
   * <p>描述</p>
   */
  InstanceDesc?: string
  /**
   * <p>状态：2 运行 / 6 停止 / 7 删除</p>
   */
  Status?: number
  /**
   * <p>状态： 2（隔离），1（使用中），3（已销毁）</p>
   */
  ChargeStatus?: number
  /**
   * <p>创建时间</p>
   */
  CreatedAt?: string
  /**
   * <p>更新时间</p>
   */
  UpdatedAt?: string
}

/**
 * DescribeDataFetchProject返回参数结构体
 */
export interface DescribeDataFetchProjectResponse {
  /**
   * 返回值
   */
  Result?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeRumLogDetailsV2请求参数结构体
 */
export interface DescribeRumLogDetailsV2Request {
  /**
   * <p>排序方式 desc asc</p>
   */
  OrderBy: string
  /**
   * <p>查询日志开始时间（必填）格式为时间戳 毫秒</p>
   */
  StartTime: number
  /**
   * <p>单次查询返回的原始日志条数，最大值为100（必填）</p>
   */
  Limit: number
  /**
   * <p>过滤条件，其中key与运算符(Operator)对应可选字段枚举值与示例查看文档：<a href="https://cloud.tencent.com/document/product/248/87223">日志查询相关</a></p>
   */
  Filter: string
  /**
   * <p>查询日志结束时间（必填）格式为时间戳 毫秒</p>
   */
  EndTime: number
  /**
   * <p>项目ID（必填）</p>
   */
  ID: number
  /**
   * <p>上次查询的最后一个日志的时间戳</p>
   */
  LastTime?: number
  /**
   * <p>上次查询的最后一个日志的rowId</p>
   */
  LastRowId?: number
}

/**
 * DescribeLagANRProblemFeatureAccounts请求参数结构体
 */
export interface DescribeLagANRProblemFeatureAccountsRequest {
  /**
   * <p>产品Id</p>
   */
  ProductId: string
  /**
   * <p>接口调试专用，当 token 为空时，以这里的 value 作为筛选表单信息</p>
   */
  FormListString?: string
  /**
   * <p>提供给前端使用，当填写本字段时，会覆盖 formlist 的值</p>
   */
  ParamToken?: string
  /**
   * <p>问题特征</p>
   */
  Feature?: string
  /**
   * <p>排序字段</p>
   */
  SortField?: string
  /**
   * <p>排序类型</p>
   */
  SortType?: string
  /**
   * <p>当前页码</p>
   */
  PageNumber?: number
  /**
   * <p>每页展示最大数量</p>
   */
  PageSize?: number
  /**
   * <p>拓展数据</p>
   */
  ExtraData?: string
  /**
   * <p>请求头</p>
   */
  RequestHeader?: string
}

/**
 * 事件详情主表视图。空字符串省略。
 */
export interface EventView {
  /**
   * <p>应用 ID</p>
   */
  AppId?: string
  /**
   * <p>事件 ID</p>
   */
  EventId?: string
  /**
   * <p>视图 ID</p>
   */
  ViewId?: string
  /**
   * <p>事件类型</p>
   */
  EventType?: string
  /**
   * <p>事件分类</p>
   */
  EventCategory?: string
  /**
   * <p>事件名</p>
   */
  EventName?: string
  /**
   * <p>时间 RFC3339</p>
   */
  Timestamp?: string
  /**
   * <p>分区日期 YYYY-MM-DD</p>
   */
  Date?: string
  /**
   * <p>平台</p>
   */
  Platform?: string
  /**
   * <p>应用版本</p>
   */
  AppVersion?: string
  /**
   * <p>SDK 版本</p>
   */
  SdkVersion?: string
  /**
   * <p>问题单 ID</p>
   */
  IssueId?: string
  /**
   * <p>错误指纹</p>
   */
  Fingerprint?: string
  /**
   * <p>是否已符号化 0/1</p>
   */
  IsSourceMapped?: number
  /**
   * <p>异常栈</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  ExceptionStacks?: Array<EventStack>
  /**
   * <p>原始堆栈帧</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  ExceptionFrames?: Array<EventFrame>
  /**
   * <p>事件属性</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  EventProperties?: Array<StringKeyValue>
  /**
   * <p>会话 ID</p>
   */
  SessionId?: string
  /**
   * <p>业务用户 ID</p>
   */
  UserId?: string
  /**
   * <p>设备 ID</p>
   */
  DeviceId?: string
  /**
   * <p>页面 URL</p>
   */
  PageUrl?: string
  /**
   * <p>归一化页面 URL</p>
   */
  NormalizedPageUrl?: string
  /**
   * <p>页面标题</p>
   */
  PageTitle?: string
  /**
   * <p>资源 URL</p>
   */
  ResourceUrl?: string
  /**
   * <p>资源类型</p>
   */
  ResourceType?: string
  /**
   * <p>目标元素</p>
   */
  TargetElement?: string
  /**
   * <p>目标文本</p>
   */
  TargetText?: string
  /**
   * <p>日志级别</p>
   */
  LogLevel?: string
  /**
   * <p>IP</p>
   */
  Ip?: string
  /**
   * <p>国家</p>
   */
  Country?: string
  /**
   * <p>省份</p>
   */
  Province?: string
  /**
   * <p>城市</p>
   */
  City?: string
  /**
   * <p>运营商</p>
   */
  Isp?: string
  /**
   * <p>网络类型</p>
   */
  NetworkType?: string
  /**
   * <p>设备类型</p>
   */
  DeviceType?: string
  /**
   * <p>操作系统</p>
   */
  Os?: string
  /**
   * <p>浏览器</p>
   */
  Browser?: string
  /**
   * <p>环境</p>
   */
  Environment?: string
  /**
   * <p>测量值</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Measurements?: Array<FloatKeyValue>
  /**
   * <p>标签</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Tags?: Array<StringKeyValue>
}

/**
 * DescribeTopIssues请求参数结构体
 */
export interface DescribeTopIssuesRequest {
  /**
   * <p>产品Id</p>
   */
  ProductId: string
  /**
   * <p>需要对比的查询条件，没有则不填</p>
   */
  Compare?: CompareCondition
  /**
   * <p>查询条件</p>
   */
  Condition?: CompareCondition
  /**
   * <p>问题类型</p>
   */
  IssueType?: number
  /**
   * <p>排序字段</p>
   */
  SortField?: string
  /**
   * <p>排序方式</p>
   */
  SortType?: string
  /**
   * <p>topN</p>
   */
  TopNum?: number
  /**
   * <p>拓展字段</p>
   */
  ExtraData?: string
  /**
   * <p>请求头</p>
   */
  RequestHeader?: string
}

/**
 * DescribeRumGroupLogV2请求参数结构体
 */
export interface DescribeRumGroupLogV2Request {
  /**
   * <p>排序方式 desc asc（必填）</p>
   */
  OrderBy: string
  /**
   * <p>查询日志开始时间（必填）</p>
   */
  StartTime: number
  /**
   * <p>单次查询返回的原始日志条数，最大值为100（必填）</p>
   */
  Limit: number
  /**
   * <p>过滤条件，其中key与运算符(Operator)对应可选字段枚举值与示例查看文档：<a href="https://cloud.tencent.com/document/product/248/87223">日志查询相关</a></p>
   */
  Filter: string
  /**
   * <p>查询日志结束时间（必填）</p>
   */
  EndTime: number
  /**
   * <p>项目ID（必填）</p>
   */
  ID: number
  /**
   * <p>聚合字段</p>
   */
  Label: string
  /**
   * <p>页数，第几页（注意：该字段已废弃！）</p>
   */
  Last?: number
}

/**
 * DescribeAppDimensionMetrics请求参数结构体
 */
export interface DescribeAppDimensionMetricsRequest {
  /**
   * app 项目ID
   */
  ProjectID: number
  /**
   * 查询的表名
   */
  From: string
  /**
   * 查询指标 fields
   */
  Fields: string
  /**
   * 查询的过滤条件
   */
  Filter: string
  /**
   * 查询简单过滤条件
   */
  FilterSimple?: string
  /**
   * group by 条件
   */
  GroupBy?: Array<string>
  /**
   * order by 条件
   */
  OrderBy?: Array<string>
  /**
   * limit 参数
   */
  Limit?: number
  /**
   * offset 参数
   */
  Offset?: number
  /**
   * 业务上下文参数
   */
  BusinessContext?: string
}

/**
 * DescribeFOOMMallocProblemDetail请求参数结构体
 */
export interface DescribeFOOMMallocProblemDetailRequest {
  /**
   * <p>产品Id</p>
   */
  ProductId: string
  /**
   * <p>消息唯一标识</p>
   */
  ClientIdentify?: string
  /**
   * <p>特征</p>
   */
  Feature?: string
  /**
   * <p>事件开始时间</p>
   */
  StartEventTime?: number
  /**
   * <p>事件结束时间</p>
   */
  EndEventTime?: number
  /**
   * <p>拓展数据</p>
   */
  ExtraData?: string
  /**
   * <p>请求头</p>
   */
  RequestHeader?: string
}

/**
 * DescribeTDEMSSEDimensions请求参数结构体
 */
export interface DescribeTDEMSSEDimensionsRequest {
  /**
   * <p>应用 ID。这里是业务应用标识，不是腾讯云账号 AppId。</p>
   */
  AppId: string
  /**
   * <p>开始时间，Unix 毫秒。</p>
   */
  StartTime: number
  /**
   * <p>结束时间，Unix 毫秒。须通过现有时间范围校验。</p>
   */
  EndTime: number
  /**
   * <p>指标。取值说明：token_throughput（token 吞吐率，token/秒）、first_message_delay（首次消息时延，毫秒）、error_rate（错误率，已乘 100 的百分比）、stall_rate（卡死率，已乘 100 的百分比）、fluency（流畅度，已乘 100 的百分比）。</p>
   */
  Metric: string
  /**
   * <p>多维分析维度。取值说明：region、app_version、platform、os、network_type、server_ip、isp、model_version。region 由 country 与 province 拼接，不属于趋势维度。</p>
   */
  Dimension: string
  /**
   * <p>筛选条件 JSON 字符串，格式为 [{Key,Op,Values}]。Op 只允许 in。Key 只允许 model_version、app_version、platform、os、region、is_error、is_stall、network_type、server_ip、isp、user_id。is_error 与 is_stall 的值只允许 true 或 false。</p>
   */
  Filters?: string
}

/**
 * DescribeTDEMFunnelTrend请求参数结构体
 */
export interface DescribeTDEMFunnelTrendRequest {
  /**
   * <p>应用id</p>
   */
  AppId: string
  /**
   * <p>漏斗id</p>
   */
  FunnelId: string
  /**
   * <p>开始时间</p>
   */
  StartTime: number
  /**
   * <p>结束时间</p>
   */
  EndTime: number
  /**
   * <p>间隔</p>
   */
  Interval?: string
  /**
   * <p>平台</p>
   */
  Platform?: string
  /**
   * <p>应用版本</p>
   */
  AppVersion?: string
  /**
   * <p>设备类型</p>
   */
  DeviceType?: string
  /**
   * <p>浏览器</p>
   */
  Browser?: string
  /**
   * <p>操作系统</p>
   */
  OS?: string
  /**
   * <p>国家</p>
   */
  Country?: string
  /**
   * <p>页面来源</p>
   */
  Referrer?: string
  /**
   * <p>环境</p>
   */
  Environment?: string
}

/**
 * 字符串键值对
 */
export interface StringKeyValue {
  /**
   * <p>键</p>
   */
  Key?: string
  /**
   * <p>值</p>
   */
  Value?: string
}

/**
 * 大模型对话多维分析行
 */
export interface TDEMSSEDimensionRow {
  /**
   * <p>维度取值。空值保留为空字符串。</p>
   */
  DimensionValue?: string
  /**
   * <p>该取值的对话次数。</p>
   */
  ConversationCount?: number
  /**
   * <p>该取值上当前指标的值。没有可计算样本时为 null。</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Value?: number
}

/**
 * DeleteProject请求参数结构体
 */
export interface DeleteProjectRequest {
  /**
   * 需要删除的项目 ID
   */
  ID: number
}

/**
 * DescribeTDEMDialTrend返回参数结构体
 */
export interface DescribeTDEMDialTrendResponse {
  /**
   * <p>趋势点</p>
   */
  Points?: Array<DialTrendPoint>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeIssueBreadcrumbs返回参数结构体
 */
export interface DescribeIssueBreadcrumbsResponse {
  /**
   * <p>业务结果 JSON 字符串；前端会再做一次 JSON 解析。Result 内业务 JSON 为 Data，内容是 session_id + items</p>
   */
  Result?: string
  /**
   * <p>错误信息；正常返回时为空</p>
   */
  ErrorMsg?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDataFetchUrl返回参数结构体
 */
export interface DescribeDataFetchUrlResponse {
  /**
   * 返回值
   */
  Result?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeError请求参数结构体
 */
export interface DescribeErrorRequest {
  /**
   * 日期
   */
  Date: string
  /**
   * 项目ID
   */
  ID: number
}

/**
 * DescribeUserJourneySanKey请求参数结构体
 */
export interface DescribeUserJourneySanKeyRequest {
  /**
   * <p>应用id</p>
   */
  AppId: string
  /**
   * <p>开始时间</p>
   */
  StartTime: number
  /**
   * <p>结束时间</p>
   */
  EndTime: number
  /**
   * <p>平台</p>
   */
  Platform?: string
  /**
   * <p>过滤条件</p>
   */
  Filters?: string
  /**
   * <p>每一步骤的数量</p>
   */
  TopPagesPerStep?: number
  /**
   * <p>每一个节点最小的会话数量</p>
   */
  MinSessionThreshold?: number
  /**
   * <p>开始页面</p>
   */
  StartPage?: string
  /**
   * <p>结束页面</p>
   */
  EndPage?: string
  /**
   * <p>是否有挣扎事件</p>
   */
  HasStruggle?: boolean
}

/**
 * DeleteSymbolArtifact请求参数结构体
 */
export interface DeleteSymbolArtifactRequest {
  /**
   * <p>制品类型。取值：js_sourcemap、ios_dsym、macos_dsym、windows_pdb、android_mapping、android_native、system_symbol。</p>
   */
  Kind: string
  /**
   * <p>制品 ID。</p>
   */
  ArtifactId: string
  /**
   * <p>应用 ID。删除应用级制品时必填，须与制品所属应用一致。</p>
   */
  AppId?: string
  /**
   * <p>兼容别名，未传 AppId 时使用。</p>
   */
  ProjectId?: string
  /**
   * <p>兼容字段，请勿传入。</p>
   */
  AppVersion?: string
  /**
   * <p>兼容字段，请勿传入。</p>
   */
  Platform?: string
  /**
   * <p>系统名称。system_symbol 场景可用于归属校验。</p>
   */
  OS?: string
  /**
   * <p>系统版本。system_symbol 场景可用于归属校验。</p>
   */
  OSVersion?: string
}

/**
 * DescribeDataStaticProjectV2返回参数结构体
 */
export interface DescribeDataStaticProjectV2Response {
  /**
   * 返回值
   */
  Result?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeIssuesList返回参数结构体
 */
export interface DescribeIssuesListResponse {
  /**
   * <p>返回值</p>
   */
  Data?: string
  /**
   * <p>状态码</p>
   */
  Code?: number
  /**
   * <p>消息</p>
   */
  Message?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeSymbolArtifacts请求参数结构体
 */
export interface DescribeSymbolArtifactsRequest {
  /**
   * <p>制品类型。取值：js_sourcemap、ios_dsym、macos_dsym、windows_pdb、android_mapping、android_native、system_symbol。native_symbol 仅查询历史数据。</p>
   */
  Kind: string
  /**
   * <p>应用 ID。js_sourcemap 必填，其他应用级制品用于过滤。</p>
   */
  AppId?: string
  /**
   * <p>兼容别名，未传 AppId 时使用。</p>
   */
  ProjectId?: string
  /**
   * <p>JS 应用版本过滤条件。</p>
   */
  Release?: string
  /**
   * <p>JS 制品的历史 Dist 过滤条件。</p>
   */
  Dist?: string
  /**
   * <p>JS 制品文件类型过滤条件。</p>
   */
  FileType?: string
  /**
   * <p>应用版本过滤条件。</p>
   */
  AppVersion?: string
  /**
   * <p>历史 native_symbol 的平台过滤条件。</p>
   */
  Platform?: string
  /**
   * <p>系统名称。system_symbol 场景过滤条件。</p>
   */
  OS?: string
  /**
   * <p>系统版本。system_symbol 场景过滤条件。</p>
   */
  OSVersion?: string
  /**
   * <p>状态过滤。可按 active、superseded、deleted、invalid 过滤。</p>
   */
  Status?: string
  /**
   * <p>分页大小。默认 50。</p>
   */
  Limit?: number
  /**
   * <p>分页游标。</p>
   */
  Cursor?: string
}

/**
 * CreateTDEMFunnel返回参数结构体
 */
export interface CreateTDEMFunnelResponse {
  /**
   * <p>请求结果</p>
   */
  Result?: string
  /**
   * <p>错误信息</p>
   */
  ErrorMsg?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * project Score分数实体
 */
export interface ScoreInfoV2 {
  /**
   * <p>项目id</p>
   */
  ProjectID?: number
  /**
   * <p>项目总分</p>
   */
  Score?: number
  /**
   * <p>API性能评分</p>
   */
  ApiPerformanceScore?: number
  /**
   * <p>API可用性评分</p>
   */
  ApiAvailableScore?: number
  /**
   * <p>API调用总数</p>
   */
  ApiNum?: number
  /**
   * <p>API失败次数</p>
   */
  ApiFail?: number
  /**
   * <p>API平均持续时间</p>
   */
  ApiDuration?: number
  /**
   * <p>页面性能评分</p>
   */
  PagePerformanceScore?: number
  /**
   * <p>页面浏览量</p>
   */
  PagePv?: number
  /**
   * <p>独立访客数</p>
   */
  PageUv?: number
  /**
   * <p>页面错误数</p>
   */
  PageError?: number
  /**
   * <p>首屏时间</p>
   */
  PageDuration?: number
  /**
   * <p>平均 LCP</p>
   */
  PageLCP?: number
  /**
   * <p>平均 FID</p>
   */
  PageFID?: number
  /**
   * <p>平均 CLS</p>
   */
  PageCLS?: number
  /**
   * <p>平均 FCP</p>
   */
  PageFCP?: number
  /**
   * <p>平均 INP</p>
   */
  PageINP?: number
  /**
   * <p>JavaScript错误评分</p>
   */
  JsErrorScore?: number
  /**
   * <p>静态资源可用性评分</p>
   */
  StaticAvailableScore?: number
  /**
   * <p>静态资源性能评分</p>
   */
  StaticPerformanceScore?: number
  /**
   * <p>静态资源请求总数</p>
   */
  StaticNum?: number
  /**
   * <p>静态资源加载失败数</p>
   */
  StaticFail?: number
  /**
   * <p>静态资源加载时间</p>
   */
  StaticDuration?: number
  /**
   * <p>忽略的配置项</p>
   */
  Exclusion?: string
}

/**
 * 用量趋势点
 */
export interface UsageTimePoint {
  /**
   * <p>时间 YYYY-MM-DD HH:00:00</p>
   */
  Time?: string
  /**
   * <p>上报量</p>
   */
  ReportVolume?: number
}

/**
 * 一次目标探测结果
 */
export interface DialProbe {
  /**
   * <p>探测目标 IP</p>
   */
  TargetIp?: string
  /**
   * <p>本次探测是否成功</p>
   */
  PingSuccess?: boolean
  /**
   * <p>发送包数</p>
   */
  Sent?: number
  /**
   * <p>接收包数</p>
   */
  Received?: number
  /**
   * <p>丢包率，0 到 100</p>
   */
  Loss?: number
  /**
   * <p>最小时延，单位毫秒</p>
   */
  Min?: number
  /**
   * <p>最大时延，单位毫秒</p>
   */
  Max?: number
  /**
   * <p>平均时延，单位毫秒</p>
   */
  Avg?: number
  /**
   * <p>探测协议</p>
   */
  Protocol?: string
  /**
   * <p>探测目标域名或地址</p>
   */
  Domain?: string
  /**
   * <p>未探测原因</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  SkipReason?: string
  /**
   * <p>目标 IP 所在地区。与客户端地区无关。无法解析时为未知。</p>
   */
  Region?: string
  /**
   * <p>目标 IP 所属运营商。与客户端运营商无关。无法解析时为未知。</p>
   */
  Operator?: string
}

/**
 * UploadSymbolArtifact请求参数结构体
 */
export interface UploadSymbolArtifactRequest {
  /**
   * <p>制品类型。取值：js_sourcemap、ios_dsym、macos_dsym、windows_pdb、android_mapping、android_native、system_symbol。</p>
   */
  Kind: string
  /**
   * <p>对象大小（字节）。</p>
   */
  FileSize: number
  /**
   * <p>对象内容的 SHA256 十六进制摘要，长度固定为 64 个字符。</p>
   */
  Sha256: string
  /**
   * <p>已上传对象的腾讯云 COS URL。与 FileUrl 二选一至少传一个；优先使用 COSUrl。必须属于当前配置的 Bucket 和 Region。</p>
   */
  COSUrl?: string
  /**
   * <p>应用 ID。应用级制品必填；system_symbol 不传。</p>
   */
  AppId?: string
  /**
   * <p>兼容别名，未传 AppId 时使用。</p>
   */
  ProjectId?: string
  /**
   * <p>JS 应用版本。未传 AppVersion 时使用。</p>
   */
  Release?: string
  /**
   * <p>兼容字段，不参与制品匹配。</p>
   */
  Dist?: string
  /**
   * <p>压缩文件 URL。Kind=js_sourcemap 且 FileType 非 source_bundle 时必填。</p>
   */
  MinifiedUrl?: string
  /**
   * <p>JS 制品文件类型。可选值说明：sourcemap、minified、source_bundle；为空时默认 sourcemap。</p>
   */
  FileType?: string
  /**
   * <p>调试 ID。除 js_sourcemap 外均必填。</p>
   */
  DebugId?: string
  /**
   * <p>构建 ID。ios_dsym、android_mapping、android_native 必填。</p>
   */
  BuildId?: string
  /**
   * <p>应用版本。js_sourcemap 必填，未传时使用 Release。</p>
   */
  AppVersion?: string
  /**
   * <p>兼容字段，请勿传入。</p>
   */
  Platform?: string
  /**
   * <p>系统名称。system_symbol 可填写。</p>
   */
  OS?: string
  /**
   * <p>系统版本。system_symbol 可填写。</p>
   */
  OSVersion?: string
  /**
   * <p>兼容字段，请勿传入。</p>
   */
  StorePath?: string
  /**
   * <p>文件名。原生和系统符号必填；ios_dsym 使用模块名，android_native 使用 abi/文件名。</p>
   */
  FileName?: string
  /**
   * <p>文件内容类型，如 application/json。</p>
   */
  ContentType?: string
  /**
   * <p>COSUrl 的兼容别名；当未传 COSUrl 时使用。与 COSUrl 二选一至少传一个。</p>
   */
  FileUrl?: string
}

/**
 * DescribeReleaseFiles请求参数结构体
 */
export interface DescribeReleaseFilesRequest {
  /**
   * <p>项目 id</p>
   */
  ProjectID: number
  /**
   * <p>文件版本</p>
   */
  FileVersion?: string
  /**
   * <p>查询过滤条件（根据sourcemap的文件名模糊匹配）</p>
   */
  FileName?: string
  /**
   * <p>false/不传=保留「最近 3 个月」约束（旧行为）；true=绕过时间窗口</p>
   */
  IgnoreDefaultTimeRange?: boolean
}

/**
 * DescribeExceptionReportList请求参数结构体
 */
export interface DescribeExceptionReportListRequest {
  /**
   * <p>产品Id</p>
   */
  ProductId?: string
  /**
   * <p>接口调试专用，当 token 为空时，以这里的 value 作为筛选表单信息</p>
   */
  FormListString?: string
  /**
   * <p>提供给前端使用，当填写本字段时，会覆盖 form_list 的值</p>
   */
  ParamToken?: string
  /**
   * <p>问题类型</p>
   */
  IssueType?: number
  /**
   * <p>排序字段</p>
   */
  SortField?: string
  /**
   * <p>排序方式</p>
   */
  SortType?: string
  /**
   * <p>特征</p>
   */
  Feature?: string
  /**
   * <p>每页数目</p>
   */
  PageSize?: number
  /**
   * <p>页码</p>
   */
  PageNumber?: number
  /**
   * <p>拓展字段</p>
   */
  ExtraData?: string
  /**
   * <p>请求头</p>
   */
  RequestHeader?: string
}

/**
 * DescribeTDEMDialDimensions返回参数结构体
 */
export interface DescribeTDEMDialDimensionsResponse {
  /**
   * <p>本次查询的维度</p>
   */
  Dimension?: string
  /**
   * <p>维度统计项</p>
   */
  Items?: Array<DialDimensionItem>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeRumGroupLog返回参数结构体
 */
export interface DescribeRumGroupLogResponse {
  /**
   * <p>返回字符串</p>
   */
  Result?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeIssues返回参数结构体
 */
export interface DescribeIssuesResponse {
  /**
   * <p>业务结果 JSON 字符串；前端会再做一次 JSON 解析。Result 内业务 JSON 为 Total + Items</p>
   */
  Result?: string
  /**
   * <p>错误信息；正常返回时为空</p>
   */
  ErrorMsg?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeTDEMUsageSummary请求参数结构体
 */
export interface DescribeTDEMUsageSummaryRequest {
  /**
   * <p>开始时间，YYYY-MM-DD HH:00:00（小时对齐，必填）</p>
   */
  StartTime: string
  /**
   * <p>结束时间，YYYY-MM-DD HH:00:00（小时对齐，必填）</p>
   */
  EndTime: string
  /**
   * <p>演示模式开关</p>
   */
  DemoMode?: boolean
}

/**
 * DeleteStarProject请求参数结构体
 */
export interface DeleteStarProjectRequest {
  /**
   * 实例ID：****-1792
   */
  InstanceID: string
  /**
   * 项目ID
   */
  ID: number
}

/**
 * DeleteTDEMApplication请求参数结构体
 */
export interface DeleteTDEMApplicationRequest {
  /**
   * <p>应用 ID（必填）</p>
   */
  AppId: string
}

/**
 * DescribeApplicationExitReportDetail请求参数结构体
 */
export interface DescribeApplicationExitReportDetailRequest {
  /**
   * <p>产品Id</p>
   */
  ProductId: string
  /**
   * <p>提供给前端使用，当填写本字段时，会覆盖 formlist 的值</p>
   */
  ParamToken?: string
  /**
   * <p>问题Id</p>
   */
  ClientIdentify?: string
  /**
   * <p>开始时间</p>
   */
  StartEventTime?: number
  /**
   * <p>结束时间</p>
   */
  EndEventTime?: number
  /**
   * <p>拓展数据</p>
   */
  ExtraData?: string
  /**
   * <p>请求头</p>
   */
  RequestHeader?: string
}

/**
 * PreviewTDEMFunnelReport请求参数结构体
 */
export interface PreviewTDEMFunnelReportRequest {
  /**
   * <p>应用id</p>
   */
  AppId: string
  /**
   * <p>开始时间戳（毫秒）</p>
   */
  StartTime: string
  /**
   * <p>结束时间戳（毫秒）</p>
   */
  EndTime: string
  /**
   * <p>漏斗步骤配置JSON字符串（2~20步），格式：[{"StepName":"首页","PagePattern":"/","PageMatchMode":"exact","Selector":"","ActionType":"page_view","VisualName":""}]</p>
   */
  Steps: string
  /**
   * <p>平台筛选</p>
   */
  Platform?: string
  /**
   * <p>应用版本筛选</p>
   */
  AppVersion?: string
  /**
   * <p>设备类型筛选</p>
   */
  DeviceType?: string
  /**
   * <p>浏览器筛选</p>
   */
  Browser?: string
  /**
   * <p>操作系统筛选</p>
   */
  OS?: string
  /**
   * <p>国家/地区筛选</p>
   */
  Country?: string
  /**
   * <p>来源筛选</p>
   */
  Referrer?: string
  /**
   * <p>环境选择</p>
   */
  Environment?: string
}

/**
 * DescribeStruggleDistribution返回参数结构体
 */
export interface DescribeStruggleDistributionResponse {
  /**
   * <p>请求结果</p>
   */
  Result?: string
  /**
   * <p>错误信息</p>
   */
  ErrorMsg?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeLagANRProblemFeatureAccounts返回参数结构体
 */
export interface DescribeLagANRProblemFeatureAccountsResponse {
  /**
   * <p>返回值</p>
   */
  Data?: string
  /**
   * <p>消息</p>
   */
  Message?: string
  /**
   * <p>状态码</p>
   */
  Code?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeUvList返回参数结构体
 */
export interface DescribeUvListResponse {
  /**
   * uv列表
   */
  ProjectUvSet: Array<RumUvInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeData请求参数结构体
 */
export interface DescribeDataRequest {
  /**
   * 查询字符串
   */
  Query: string
  /**
   * 项目ID
   */
  ID: number
}

/**
 * DescribeDataEventUrlV2请求参数结构体
 */
export interface DescribeDataEventUrlV2Request {
  /**
   * 开始时间
   */
  StartTime: number
  /**
   * allcount：性能视图，day：14天数据，condition：条件列表，ckuv：获取uv趋势，ckpv：获取pv趋势，nettype/version/platform/isp/region/device/browser/ext1/ext2/ext3/ret/status/from/url/env/：网络平台视图/Version视图/设备视图/ISP视图/地区视图/浏览器视图/ext1视图等
   */
  Type: string
  /**
   * 结束时间
   */
  EndTime: number
  /**
   * 项目ID
   */
  ID: number
  /**
   * 自定义2
   */
  ExtSecond?: string
  /**
   * 浏览器引擎
   */
  Engine?: string
  /**
   * 运营商
   */
  Isp?: string
  /**
   * 来源页面
   */
  From?: string
  /**
   * 日志等级
   */
  Level?: string
  /**
   * 品牌
   */
  Brand?: string
  /**
   * 地区
   */
  Area?: string
  /**
   * 版本
   */
  VersionNum?: string
  /**
   * 平台
   */
  Platform?: string
  /**
   * 自定义3
   */
  ExtThird?: string
  /**
   * 自定义1
   */
  ExtFirst?: string
  /**
   * 网络类型
   */
  NetType?: string
  /**
   * 机型
   */
  Device?: string
  /**
   * 显示是否海外,1表示海外，0表示非海外；默认值为空，查询所有。
   */
  IsAbroad?: string
  /**
   * 操作系统
   */
  Os?: string
  /**
   * 浏览器
   */
  Browser?: string
  /**
   * 筛选条件
   */
  Name?: string
  /**
   * 环境
   */
  Env?: string
  /**
   * 自定义4
   */
  ExtFourth?: string
  /**
   * 自定义5
   */
  ExtFifth?: string
  /**
   * 自定义6
   */
  ExtSixth?: string
  /**
   * 自定义7
   */
  ExtSeventh?: string
  /**
   * 自定义8
   */
  ExtEighth?: string
  /**
   * 自定义9
   */
  ExtNinth?: string
  /**
   * 自定义10
   */
  ExtTenth?: string
  /**
   * 时间段
   */
  Granularity?: string
}

/**
 * DescribeTDEMFunnelDimensions返回参数结构体
 */
export interface DescribeTDEMFunnelDimensionsResponse {
  /**
   * <p>结果</p>
   */
  Result?: string
  /**
   * <p>错误信息</p>
   */
  ErrorMsg?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeTDEMSampleConfig返回参数结构体
 */
export interface DescribeTDEMSampleConfigResponse {
  /**
   * <p>业务数据 JSON 字符串，反序列化后：{ProjectId,Event,Replay,SnapshotId,UpdatedAt}。Event/Replay 结构见 ModifyTDEMSampleConfig 入参说明。无行时 SnapshotId=0、UpdatedAt 为空。</p>
   */
  Result?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeTDEMDialExecutionDetail请求参数结构体
 */
export interface DescribeTDEMDialExecutionDetailRequest {
  /**
   * <p>应用 ID</p>
   */
  AppId: string
  /**
   * <p>开始时间，毫秒时间戳</p>
   */
  StartTime: number
  /**
   * <p>结束时间，毫秒时间戳，必须大于 StartTime</p>
   */
  EndTime: number
  /**
   * <p>任务 ID。不传表示不过滤。</p>
   */
  TaskId: string
  /**
   * <p>拨测批次 ID</p>
   */
  TaskSessionId: string
  /**
   * <p>客户端平台。不传表示不过滤。</p>
   */
  Platform?: string
  /**
   * <p>应用版本。不传表示不过滤。</p>
   */
  AppVersion?: string
  /**
   * <p>设备机型，对应 device_type。不传表示不过滤。</p>
   */
  Device?: string
  /**
   * <p>网络类型，对应 network_type。不传表示不过滤。</p>
   */
  NetType?: string
  /**
   * <p>客户端运营商，对应 isp。不传表示不过滤。不是目标 IP 运营商。</p>
   */
  Operator?: string
  /**
   * <p>客户端地区，对应 province。云 API 公共参数已占用 Region，筛选入参名为 ClientRegion。不传表示不过滤。不是目标 IP 地区。</p>
   */
  ClientRegion?: string
  /**
   * <p>目标 IP。不传表示不过滤。</p>
   */
  TargetIp?: string
  /**
   * <p>环境。可选。不传表示不过滤。</p>
   */
  Environment?: string
}

/**
 * DescribeDataEventUrlV2返回参数结构体
 */
export interface DescribeDataEventUrlV2Response {
  /**
   * 返回值
   */
  Result?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeIssueEventDetail返回参数结构体
 */
export interface DescribeIssueEventDetailResponse {
  /**
   * <p>业务结果 JSON 字符串；前端会再做一次 JSON 解析。Result 内业务 JSON 为 Data，内容是单个事件详情</p>
   */
  Result?: string
  /**
   * <p>错误信息；正常返回时为空</p>
   */
  ErrorMsg?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteInstance返回参数结构体
 */
export interface DeleteInstanceResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 分析指标分布桶
 */
export interface MetricDistributionItem {
  /**
   * <p>维度值</p>
   */
  Value?: string
  /**
   * <p>次数</p>
   */
  Count?: number
  /**
   * <p>影响用户数</p>
   */
  AffectedUser?: number
  /**
   * <p>率，分母为 0 时省略</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Rate?: number
  /**
   * <p>影响用户率，缺省省略</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  AffectedUserRate?: number
  /**
   * <p>均值，缺省省略</p>
   */
  Avg?: number
  /**
   * <p>P50，缺省省略</p>
   */
  P50?: number
  /**
   * <p>P75，缺省省略</p>
   */
  P75?: number
  /**
   * <p>P95，缺省省略</p>
   */
  P95?: number
  /**
   * <p>P99，缺省省略</p>
   */
  P99?: number
}

/**
 * DescribeTDEMEventDetail返回参数结构体
 */
export interface DescribeTDEMEventDetailResponse {
  /**
   * <p>事件主表视图</p>
   */
  Event?: EventView
  /**
   * <p>符号化结果，未翻译时可省略</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Symbolicated?: SymbolicatedView
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateTDEMApplication返回参数结构体
 */
export interface CreateTDEMApplicationResponse {
  /**
   * <p>应用 ID</p>
   */
  AppId?: string
  /**
   * <p>应用 Key</p>
   */
  ProjectKey?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * UploadMiniProgramSource返回参数结构体
 */
export interface UploadMiniProgramSourceResponse {
  /**
   * <p>错误信息</p>
   */
  ErrorMsg?: string
  /**
   * <p>请求结果（JSON字符串，包含 PackId/AppId/Release/BundleHash/Status/PageCount/ComponentCount/FileSize/Idempotent）</p>
   */
  Result?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeScoresV2请求参数结构体
 */
export interface DescribeScoresV2Request {
  /**
   * <p>开始时间</p>
   */
  StartTime: string
  /**
   * <p>结束时间</p>
   */
  EndTime: string
  /**
   * <p>项目 ID 列表</p>
   */
  IDList?: Array<number | bigint>
  /**
   * <p>查询粒度，hour 或 day</p>
   */
  Type?: string
  /**
   * <p>环境</p>
   */
  Env?: string
}

/**
 * 大模型对话趋势时间桶
 */
export interface TDEMSSETrendPoint {
  /**
   * <p>时间桶起点，Unix 毫秒。</p>
   */
  Time?: number
  /**
   * <p>该桶内的对话次数。</p>
   */
  ConversationCount?: number
  /**
   * <p>该桶内当前指标的值。桶内没有可计算样本时为 null。</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Value?: number
}

/**
 * DescribeRumLogExport请求参数结构体
 */
export interface DescribeRumLogExportRequest {
  /**
   * 导出标识name
   */
  Name: string
  /**
   * 开始时间（必填）
   */
  StartTime: string
  /**
   * 查询语句，参考控制台请求参数，语句长度最大为4096（必填）
   */
  Query: string
  /**
   * 结束时间（必填）
   */
  EndTime: string
  /**
   * 项目ID（必填）
   */
  ID: number
  /**
   * field条件
   */
  Fields?: Array<string>
}

/**
 * DescribeDataLogUrlStatisticsV2返回参数结构体
 */
export interface DescribeDataLogUrlStatisticsV2Response {
  /**
   * 返回值
   */
  Result?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDataCustomUrl返回参数结构体
 */
export interface DescribeDataCustomUrlResponse {
  /**
   * 返回值
   */
  Result?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeTDEMDialTasks请求参数结构体
 */
export interface DescribeTDEMDialTasksRequest {
  /**
   * <p>应用 ID</p>
   */
  AppId: string
}

/**
 * DescribeTDEMSSETrend请求参数结构体
 */
export interface DescribeTDEMSSETrendRequest {
  /**
   * <p>应用 ID。这里是业务应用标识，不是腾讯云账号 AppId。</p>
   */
  AppId: string
  /**
   * <p>开始时间，Unix 毫秒。</p>
   */
  StartTime: number
  /**
   * <p>结束时间，Unix 毫秒。须通过现有时间范围校验。</p>
   */
  EndTime: number
  /**
   * <p>指标。取值说明：token_throughput（token 吞吐率，token/秒）、first_message_delay（首次消息时延，毫秒）、error_rate（错误率，已乘 100 的百分比）、stall_rate（卡死率，已乘 100 的百分比）、fluency（流畅度，已乘 100 的百分比）。</p>
   */
  Metric: string
  /**
   * <p>趋势维度。取值说明：overall、model_version、network_type、server_ip、isp。overall 返回 Points，其他维度返回 Series。</p>
   */
  Dimension: string
  /**
   * <p>筛选条件 JSON 字符串，格式为 [{Key,Op,Values}]。Op 只允许 in。Key 只允许 model_version、app_version、platform、os、region、is_error、is_stall、network_type、server_ip、isp、user_id。is_error 与 is_stall 的值只允许 true 或 false。</p>
   */
  Filters?: string
  /**
   * <p>头部维度数量，只允许 7、10、20。Dimension 为 overall 时忽略。</p>
   */
  TopN?: number
}

/**
 * DescribeTDEMDialExecutionList返回参数结构体
 */
export interface DescribeTDEMDialExecutionListResponse {
  /**
   * <p>满足条件的批次数</p>
   */
  TotalCount?: number
  /**
   * <p>执行批次列表</p>
   */
  ExecutionSet?: Array<DialExecution>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeRumStatsLogListV2返回参数结构体
 */
export interface DescribeRumStatsLogListV2Response {
  /**
   * <p>日志时间分布</p>
   */
  Result?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteTDEMFieldTransformRule请求参数结构体
 */
export interface DeleteTDEMFieldTransformRuleRequest {
  /**
   * <p>规则 ID（必填）</p>
   */
  Id: number
  /**
   * <p>应用 ID（必填）</p>
   */
  AppId: string
}

/**
 * DescribeDataStaticProject请求参数结构体
 */
export interface DescribeDataStaticProjectRequest {
  /**
   * 开始时间
   */
  StartTime: number
  /**
   * allcount：性能视图，day：14天数据，condition：条件列表，area：请求速度分布，nettype/version/platform/isp/region/device/browser/ext1/ext2/ext3/ret/status/from/url/env/：网络平台视图/Version视图/设备视图/ISP视图/地区视图/浏览器视图/ext1视图等等
   */
  Type: string
  /**
   * 结束时间
   */
  EndTime: number
  /**
   * 项目ID
   */
  ID: number
  /**
   * 自定义2
   */
  ExtSecond?: string
  /**
   * 浏览器引擎
   */
  Engine?: string
  /**
   * 运营商
   */
  Isp?: string
  /**
   * 来源页面
   */
  From?: string
  /**
   * 日志等级（1表示白名单日志，2表示一般日志，4表示错误日志，8表示Promise 错误，16表示Ajax 请求异常，32表示JS 加载异常，64表示图片加载异常，128表示css 加载异常，256表示console.error，512表示音视频资源异常，1024表示retcode 异常，2048表示aegis report，4096表示PV日志，8192表示自定义事件，16384表示小程序 页面不存在，32768表示websocket错误，65536表示js bridge错误）
   */
  Level?: string
  /**
   * 品牌
   */
  Brand?: string
  /**
   * 地区
   */
  Area?: string
  /**
   * 版本
   */
  VersionNum?: string
  /**
   * 平台
   */
  Platform?: string
  /**
   * 自定义3
   */
  ExtThird?: string
  /**
   * 自定义1
   */
  ExtFirst?: string
  /**
   * 网络类型（1,2,3,4,5,100），1表示WIFI, 2表示2G, 3表示3G, 4表示4G, 5表示5G, 6表示6G, 100表示未知。
   */
  NetType?: string
  /**
   * 机型
   */
  Device?: string
  /**
   * 显示是否海外,1表示海外，0表示非海外；默认值为空，查询所有。
   */
  IsAbroad?: string
  /**
   * 操作系统
   */
  Os?: string
  /**
   * 浏览器
   */
  Browser?: string
  /**
   * 耗时口径："50"/"75"/"90"/"95"/"99"/"99.5" 分别表示 TP50/TP75/TP90/TP95/TP99/TP99.5（percentile2）；"avg" 表示均值（avg）。
   */
  CostType?: string
  /**
   * 来源
   */
  Url?: Array<string>
  /**
   * 环境
   */
  Env?: string
}

/**
 * DescribeRumStatsLogList请求参数结构体
 */
export interface DescribeRumStatsLogListRequest {
  /**
   * 开始时间（必填）
   */
  StartTime: string
  /**
   * 单次查询返回的原始日志条数，最大值为100（必填）
   */
  Limit: number
  /**
   * 查询语句，参考控制台请求参数，语句长度最大为4096（必填）
   */
  Query: string
  /**
   * 结束时间（必填）
   */
  EndTime: string
  /**
   * 项目ID（必填）
   */
  ID: number
}

/**
 * DescribeFOOMProblemList返回参数结构体
 */
export interface DescribeFOOMProblemListResponse {
  /**
   * <p>返回值</p>
   */
  Data?: string
  /**
   * <p>消息</p>
   */
  Message?: string
  /**
   * <p>状态码</p>
   */
  Code?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 旁路kafka配置
 */
export interface Kafka {
  /**
   * 1：开启
0：关闭
   */
  EnableKafka?: number
  /**
   * host地址
   */
  KafkaHost?: string
  /**
   * topic
   */
  KafkaTopic?: string
  /**
   * 版本
   */
  KafkaVersion?: string
  /**
   * username
   */
  SaslUserName?: string
  /**
   * password
   */
  SaslPassword?: string
  /**
   * ssl
   */
  SaslMechanism?: string
  /**
   * 默认算子id为0新增算子
一旦算子新增成功会返回正确的算子id值
   */
  SinkId?: number
}

/**
 * DescribeTDEMSampleConfig请求参数结构体
 */
export interface DescribeTDEMSampleConfigRequest {
  /**
   * <p>项目ID</p>
   */
  AppId: string
}

/**
 * 异常维度值的同批完整分类计数；TotalCount为互斥主类之和，Items包含全部适用类型。
 */
export interface ExceptionDimensionRow {
  /**
   * <p>由目录域、维度或TagKey及归一化值确定的稳定、不透明唯一标识。</p>
   */
  RowKey?: string
  /**
   * <p>维度显示值；标签保留原始值，普通province/platform/network_type按既有显示别名归一化。</p>
   */
  Value?: string
  /**
   * <p>本行全部 IncludedInTotal=true 主项的 Count 之和，安全非负整数。</p>
   */
  TotalCount?: number
  /**
   * <p>完整固定分类向量，含0计数及适用包含项；不按数量裁剪。</p>
   */
  Items?: Array<ExceptionBucket>
}

/**
 * DescribeReplayDetails返回参数结构体
 */
export interface DescribeReplayDetailsResponse {
  /**
   * <p>返回结果</p>
   */
  Result?: string
  /**
   * <p>错误信息</p>
   */
  ErrorMsg?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDataSetUrlStatistics请求参数结构体
 */
export interface DescribeDataSetUrlStatisticsRequest {
  /**
   * 开始时间
   */
  StartTime: number
  /**
   * allcount：性能视图，data：小程序，component：小程序相关，day：14天数据，nettype：网络/平台视图，performance：页面性能TOP视图，version/platform/isp/region/device/browser/ext1/ext2/ext3/ret/status/from/url/env/：ISP视图/地区视图/浏览器视图等
   */
  Type: string
  /**
   * 结束时间
   */
  EndTime: number
  /**
   * 项目ID
   */
  ID: number
  /**
   * 自定义2
   */
  ExtSecond?: string
  /**
   * 浏览器引擎
   */
  Engine?: string
  /**
   * 运营商
   */
  Isp?: string
  /**
   * 来源页面
   */
  From?: string
  /**
   * 日志等级
   */
  Level?: string
  /**
   * 品牌
   */
  Brand?: string
  /**
   * 地区
   */
  Area?: string
  /**
   * 版本
   */
  VersionNum?: string
  /**
   * 平台
   */
  Platform?: string
  /**
   * 自定义3
   */
  ExtThird?: string
  /**
   * 自定义1
   */
  ExtFirst?: string
  /**
   * 网络类型(tag 值):用于过滤/聚合字段 netType；枚举值：1(WiFi)、2(2G)、3(3G)、4(4G)、5(5G)、6(6G)、100(未知网络)。
   */
  NetType?: string
  /**
   * 机型
   */
  Device?: string
  /**
   * 显示是否海外,1表示海外，0表示非海外；默认值为空，查询所有。
   */
  IsAbroad?: string
  /**
   * 操作系统
   */
  Os?: string
  /**
   * 浏览器
   */
  Browser?: string
  /**
   * 耗时/数据量口径："50"/"75"/"90"/"95"/"99"/"99.5" 分别表示 TP50/TP75/TP90/TP95/TP99/TP99.5（percentile2）；"avg" 表示均值（avg）。
   */
  CostType?: string
  /**
   * 环境
   */
  Env?: string
  /**
   * 小程序包类型（tag 值）：用于过滤字段 type（请求参数名为 PackageType）；取值由上报数据决定，可通过 Type=condition（show tag values）获取可选值集合。
   */
  PackageType?: string
}

/**
 * DescribeDataWebVitalsPageV2返回参数结构体
 */
export interface DescribeDataWebVitalsPageV2Response {
  /**
   * 返回值
   */
  Result?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDataStaticProject返回参数结构体
 */
export interface DescribeDataStaticProjectResponse {
  /**
   * 返回值
   */
  Result?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDataPerformancePageV2返回参数结构体
 */
export interface DescribeDataPerformancePageV2Response {
  /**
   * 返回值
   */
  Result?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeTDEMApplications请求参数结构体
 */
export interface DescribeTDEMApplicationsRequest {
  /**
   * <p>分页偏移，默认 0</p>
   */
  Offset?: number
  /**
   * <p>每页数量，默认 20，上限 100</p>
   */
  Limit?: number
  /**
   * <p>业务系统 ID（可选，缺省返回名下全部应用）</p>
   */
  InstanceId?: string
  /**
   * <p>演示模式开关</p>
   */
  DemoMode?: boolean
}

/**
 * DescribeTDEMSSESummary返回参数结构体
 */
export interface DescribeTDEMSSESummaryResponse {
  /**
   * <p>对话次数。一条大模型对话对应一条 sse_call。</p>
   */
  ConversationCount?: number
  /**
   * <p>token 总数。对话次数为 0 时为 0。</p>
   */
  TotalTokenCount?: number
  /**
   * <p>token 吞吐率，单位 token/秒。对话次数为 0 时为 null。</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  TokenThroughput?: number
  /**
   * <p>首次消息时延，单位毫秒。对话次数为 0 时为 null。</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  FirstMessageDelay?: number
  /**
   * <p>错误率，已乘 100。对话次数为 0 时为 null。</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  ErrorRate?: number
  /**
   * <p>卡死率，已乘 100。对话次数为 0 时为 null。</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  StallRate?: number
  /**
   * <p>流畅度，已乘 100。对话次数为 0 时为 null。</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Fluency?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeReleaseFileSign请求参数结构体
 */
export interface DescribeReleaseFileSignRequest {
  /**
   * 超时时间，不填默认是 5 分钟
   */
  Timeout?: number
  /**
   * bucket类型，不填默认1:web，2:app
   */
  FileType?: number
  /**
   * 获取临时签名的bucket是境内还是境外（1表示境外，其它表示境内）
   */
  Site?: number
  /**
   * ProjectID
   */
  ID?: number
}

/**
 * DescribeSampleRate请求参数结构体
 */
export interface DescribeSampleRateRequest {
  /**
   * <p>项目id</p>
   */
  ProjectId: number
}

/**
 * DescribeSessionList返回参数结构体
 */
export interface DescribeSessionListResponse {
  /**
   * <p>返回结果</p>
   */
  Result?: string
  /**
   * <p>错误信息</p>
   */
  ErrorMsg?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteReleaseFile返回参数结构体
 */
export interface DeleteReleaseFileResponse {
  /**
   * 接口请求返回字符串
   */
  Msg: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeIssueCrashLogDownloadURL返回参数结构体
 */
export interface DescribeIssueCrashLogDownloadURLResponse {
  /**
   * <p>请求结果</p>
   */
  Result?: string
  /**
   * <p>错误时返回的错误信息</p>
   */
  ErrorMsg?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeReleaseFileSign返回参数结构体
 */
export interface DescribeReleaseFileSignResponse {
  /**
   * 临时密钥key
   */
  SecretKey?: string
  /**
   * 临时密钥 id
   */
  SecretID?: string
  /**
   * 临时密钥临时 token
   */
  SessionToken?: string
  /**
   * 开始时间戳
   */
  StartTime?: number
  /**
   * 过期时间戳
   */
  ExpiredTime?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeTDEMOverviewScores返回参数结构体
 */
export interface DescribeTDEMOverviewScoresResponse {
  /**
   * <p>各应用评分</p>
   */
  Scores?: Array<AppOverviewScore>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 描述键值对过滤器，用于条件过滤查询。例如过滤ID、名称、状态等

· 若存在多个Filter时，Filter间的关系为逻辑与（AND）关系。
· 若同一个Filter存在多个Values，同一Filter下Values间的关系为逻辑或（OR）关系。
 */
export interface Filter {
  /**
   * 一个或者多个过滤值。
   */
  Values?: Array<string>
  /**
   * 过滤键的名称。
   */
  Name?: string
}

/**
 * 一次拨测执行批次
 */
export interface DialExecution {
  /**
   * <p>任务 ID</p>
   */
  TaskId?: string
  /**
   * <p>任务名称。任务已删除时仍返回当时名称，找不到则为空。</p>
   */
  TaskName?: string
  /**
   * <p>拨测批次 ID</p>
   */
  TaskSessionId?: string
  /**
   * <p>批次开始时间，毫秒时间戳</p>
   */
  StartTime?: number
  /**
   * <p>客户端平台</p>
   */
  Platform?: string
  /**
   * <p>应用版本</p>
   */
  AppVersion?: string
  /**
   * <p>设备机型</p>
   */
  Device?: string
  /**
   * <p>网络类型</p>
   */
  NetType?: string
  /**
   * <p>客户端运营商。不是目标 IP 运营商。</p>
   */
  Operator?: string
  /**
   * <p>客户端地区。不是目标 IP 地区。</p>
   */
  Region?: string
  /**
   * <p>本批次探测到的目标 IP，顺序与 TargetIpGeo 一致</p>
   */
  TargetIps?: Array<string>
  /**
   * <p>每个目标 IP 的地区和运营商</p>
   */
  TargetIpGeo?: Array<DialTargetIpGeo>
  /**
   * <p>本批次是否全部探测成功</p>
   */
  Success?: boolean
  /**
   * <p>本批次是否未实际探测</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  NotProbed?: boolean
  /**
   * <p>本批次成功目标的平均时延，单位毫秒</p>
   */
  AvgDuration?: number
  /**
   * <p>本批次是否包含路由追踪</p>
   */
  HasMTR?: boolean
  /**
   * <p>所属用户会话 ID</p>
   */
  SessionId?: string
}

/**
 * ModifyTDEMFieldTransformRule返回参数结构体
 */
export interface ModifyTDEMFieldTransformRuleResponse {
  /**
   * <p>修改后的规则</p>
   */
  Rule?: FieldTransformRuleItem
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyTDEMSampleRate返回参数结构体
 */
export interface ModifyTDEMSampleRateResponse {
  /**
   * <p>应用 ID</p>
   */
  AppId?: string
  /**
   * <p>采集采样率 0-100</p>
   */
  SampleRate?: number
  /**
   * <p>会话回放采样率 0-100</p>
   */
  ReplaySampleRate?: number
  /**
   * <p>更新时间</p>
   */
  UpdatedAt?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDataStaticResource返回参数结构体
 */
export interface DescribeDataStaticResourceResponse {
  /**
   * 返回值
   */
  Result?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteTDEMFieldTransformRule返回参数结构体
 */
export interface DeleteTDEMFieldTransformRuleResponse {
  /**
   * <p>规则 ID</p>
   */
  Id?: number
  /**
   * <p>是否已删除</p>
   */
  Deleted?: boolean
  /**
   * <p>提示信息</p>
   */
  Message?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 批量分布条目
 */
export interface MetricDistributionBatchItem {
  /**
   * <p>条目 Key</p>
   */
  Key?: string
  /**
   * <p>分布桶</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Items?: Array<MetricDistributionItem>
  /**
   * <p>合计</p>
   */
  Total?: number
}

/**
 * DescribeDataStaticUrl返回参数结构体
 */
export interface DescribeDataStaticUrlResponse {
  /**
   * 返回值
   */
  Result?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeReplayData返回参数结构体
 */
export interface DescribeReplayDataResponse {
  /**
   * <p>返回结果</p>
   */
  Result?: string
  /**
   * <p>错误信息</p>
   */
  ErrorMsg?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeTDEMFunnelDetail请求参数结构体
 */
export interface DescribeTDEMFunnelDetailRequest {
  /**
   * <p>应用id</p>
   */
  AppId: string
  /**
   * <p>漏斗id</p>
   */
  FunnelId: string
}

/**
 * DescribeIssueDetail请求参数结构体
 */
export interface DescribeIssueDetailRequest {
  /**
   * <p>应用 ID</p>
   */
  AppId: string
  /**
   * <p>Issue ID</p>
   */
  IssueId: string
  /**
   * <p>开始时间，Unix 毫秒时间戳。可选。与 EndTime 必须成对传入；都不传时按全保留期统计。</p>
   */
  StartTime?: number
  /**
   * <p>结束时间，Unix 毫秒时间戳。可选。与 StartTime 必须成对传入。</p>
   */
  EndTime?: number
  /**
   * <p>环境。可选。为空表示全部环境。</p>
   */
  Env?: string
  /**
   * <p>筛选条件 JSON 字符串，格式为 [{Key,Op,Values}]。可选。不传表示不附加这组筛选。</p>
   */
  Filters?: string
}

/**
 * DescribeTDEMEventSearch返回参数结构体
 */
export interface DescribeTDEMEventSearchResponse {
  /**
   * <p>事件列表</p>
   */
  Events?: Array<ExplorationEventItem>
  /**
   * <p>总条数</p>
   */
  Total?: number
  /**
   * <p>页码</p>
   */
  Page?: number
  /**
   * <p>每页条数</p>
   */
  PageSize?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDataSetUrlStatisticsV2返回参数结构体
 */
export interface DescribeDataSetUrlStatisticsV2Response {
  /**
   * 返回值
   */
  Result?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeExceptionDetail请求参数结构体
 */
export interface DescribeExceptionDetailRequest {
  /**
   * <p>产品Id</p>
   */
  ProductId: string
  /**
   * <p>消息唯一标识</p>
   */
  ClientIdentify?: string
  /**
   * <p>集群堆栈类型</p>
   */
  ClusterStackType?: number
  /**
   * <p>特征</p>
   */
  Feature?: string
  /**
   * <p>问题类型</p>
   */
  IssueType?: number
  /**
   * <p>事件开始时间</p>
   */
  StartEventTime?: number
  /**
   * <p>事件结束时间</p>
   */
  EndEventTime?: number
  /**
   * <p>拓展数据</p>
   */
  ExtraData?: string
  /**
   * <p>请求头</p>
   */
  RequestHeader?: string
}

/**
 * DescribeDataFetchUrlV2请求参数结构体
 */
export interface DescribeDataFetchUrlV2Request {
  /**
   * 开始时间
   */
  StartTime: number
  /**
   * allcount：性能视图，pagepv：pv视图，day：14天数据，count40x：40X视图，count50x：50X视图，count5xand4x：40∑50视图，top：资源top视图，nettype/version/platform/isp/region/device/browser/ext1/ext2/ext3/ret/status/from/url/env/：网络平台视图/Version视图/设备视图/ISP视图/地区视图/浏览器视图/ext1视图等
   */
  Type: string
  /**
   * 结束时间
   */
  EndTime: number
  /**
   * 项目ID
   */
  ID: number
  /**
   * 自定义2
   */
  ExtSecond?: string
  /**
   * 浏览器引擎
   */
  Engine?: string
  /**
   * 运营商
   */
  Isp?: string
  /**
   * 来源页面
   */
  From?: string
  /**
   * 日志等级
   */
  Level?: string
  /**
   * 品牌
   */
  Brand?: string
  /**
   * 地区
   */
  Area?: string
  /**
   * 版本
   */
  VersionNum?: string
  /**
   * 平台
   */
  Platform?: string
  /**
   * 自定义3
   */
  ExtThird?: string
  /**
   * 自定义1
   */
  ExtFirst?: string
  /**
   * 网络类型
   */
  NetType?: string
  /**
   * 机型
   */
  Device?: string
  /**
   * 显示是否海外,1表示海外，0表示非海外；默认值为空，查询所有。
   */
  IsAbroad?: string
  /**
   * 操作系统
   */
  Os?: string
  /**
   * 浏览器
   */
  Browser?: string
  /**
   * 耗时计算方式
   */
  CostType?: string
  /**
   * 来源
   */
  Url?: string
  /**
   * 环境
   */
  Env?: string
  /**
   * httpcode响应码
   */
  Status?: string
  /**
   * retcode
   */
  Ret?: string
  /**
   * 网络状态
   */
  NetStatus?: string
  /**
   * 自定义4
   */
  ExtFourth?: string
  /**
   * 自定义5
   */
  ExtFifth?: string
  /**
   * 自定义6
   */
  ExtSixth?: string
  /**
   * 自定义7
   */
  ExtSeventh?: string
  /**
   * 自定义8
   */
  ExtEighth?: string
  /**
   * 自定义9
   */
  ExtNinth?: string
  /**
   * 自定义10
   */
  ExtTenth?: string
  /**
   * 时间段
   */
  Granularity?: string
}

/**
 * DescribeProjects返回参数结构体
 */
export interface DescribeProjectsResponse {
  /**
   * 列表总数
   */
  TotalCount?: number
  /**
   * 项目列表
   */
  ProjectSet?: Array<RumProject>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDataSetUrlStatistics返回参数结构体
 */
export interface DescribeDataSetUrlStatisticsResponse {
  /**
   * 返回值
   */
  Result?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeMiniProgramReplayPacks返回参数结构体
 */
export interface DescribeMiniProgramReplayPacksResponse {
  /**
   * <p>错误信息</p>
   */
  ErrorMsg?: string
  /**
   * <p>请求结果（JSON字符串，包含 Items/NextCursor）</p>
   */
  Result?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeRumLogExports请求参数结构体
 */
export interface DescribeRumLogExportsRequest {
  /**
   * 页面大小
   */
  PageSize: number
  /**
   * 页数，第几页
   */
  PageNum: number
  /**
   * 项目ID（必填）
   */
  ID: number
}

/**
 * 批量合计条目
 */
export interface MetricSummaryBatchItem {
  /**
   * <p>条目 Key</p>
   */
  Key?: string
  /**
   * <p>指标列表</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Metrics?: Array<FloatNameValue>
  /**
   * <p>可能尚未采集，false 时省略</p>
   */
  MaybeUncollected?: boolean
}

/**
 * DescribeTDEMFieldTransformRules返回参数结构体
 */
export interface DescribeTDEMFieldTransformRulesResponse {
  /**
   * <p>总数</p>
   */
  TotalCount?: number
  /**
   * <p>规则列表</p>
   */
  FieldTransformRuleSet?: Array<FieldTransformRuleItem>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteSymbolArtifact返回参数结构体
 */
export interface DeleteSymbolArtifactResponse {
  /**
   * <p>删除结果，JSON 格式字符串，包含 artifact_id、status 和 deleted_at。</p>
   */
  Result?: string
  /**
   * <p>错误信息</p>
   */
  ErrorMsg?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeRumGroupLogV2返回参数结构体
 */
export interface DescribeRumGroupLogV2Response {
  /**
   * <p>日志聚合结果</p>
   */
  Result?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyTDEMDialTask返回参数结构体
 */
export interface ModifyTDEMDialTaskResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeApplicationExitReportDetail返回参数结构体
 */
export interface DescribeApplicationExitReportDetailResponse {
  /**
   * <p>返回值</p>
   */
  Data?: string
  /**
   * <p>状态码</p>
   */
  Code?: number
  /**
   * <p>消息</p>
   */
  Message?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeIssueEvents返回参数结构体
 */
export interface DescribeIssueEventsResponse {
  /**
   * 业务结果 JSON 字符串；前端会再做一次 JSON 解析。Result 内业务 JSON 为 Data，内容是 total + items
   */
  Result?: string
  /**
   * 错误信息；正常返回时为空
   */
  ErrorMsg?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifySampleRate请求参数结构体
 */
export interface ModifySampleRateRequest {
  /**
   * <p>项目id</p>
   */
  ProjectId: number
  /**
   * <p>会话采样率</p>
   */
  SampleRate?: number
  /**
   * <p>录制采样率</p>
   */
  ReplaySampleRate?: number
}

/**
 * DescribeIssueEvents请求参数结构体
 */
export interface DescribeIssueEventsRequest {
  /**
   * 应用 ID
   */
  AppId: string
  /**
   * Issue ID
   */
  IssueId: string
  /**
   * 开始时间，Unix 毫秒时间戳
   */
  StartTime: number
  /**
   * 结束时间，Unix 毫秒时间戳
   */
  EndTime: number
  /**
   * 事件关键字过滤
   */
  Keyword?: string
  /**
   * 扩展过滤器 JSON 字符串；白名单字段包括 app_version、country、province、city、device_type、browser、os、isp、referrer、user_type、platform、normalized_page_url、event_type、issue_id、environment、process_type
   */
  Filters?: string
  /**
   * 页码，默认 1
   */
  Page?: number
  /**
   * 分页大小，默认 20，范围 1~100
   */
  PageSize?: number
  /**
   * 排序方向，可选值：asc、desc
   */
  SortOrder?: string
}

/**
 * DescribeTDEMMetricSummary返回参数结构体
 */
export interface DescribeTDEMMetricSummaryResponse {
  /**
   * <p>单查指标。缺测指标不出现，禁止 null</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Metrics?: Array<FloatNameValue>
  /**
   * <p>批量结果，Queries 非空时返回</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Results?: Array<MetricSummaryBatchItem>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeMiniProgramReplayPack返回参数结构体
 */
export interface DescribeMiniProgramReplayPackResponse {
  /**
   * <p>错误信息</p>
   */
  ErrorMsg?: string
  /**
   * <p>请求结果（JSON字符串，包含 PackId/AppId/BundleHash/Status/PageCount/ComponentCount/Pack）</p>
   */
  Result?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * BugLY筛选结构体
 */
export interface Filters {
  /**
   * 是否反转
   */
  IsReversed?: boolean
  /**
   * 键
   */
  Key?: string
  /**
   * 名称
   */
  Name?: string
  /**
   * 运算符
   */
  Operator?: string
  /**
   * 类型
   */
  Type?: number
  /**
   * 值
   */
  Values?: Array<string>
}

/**
 * DescribeIssueDetail返回参数结构体
 */
export interface DescribeIssueDetailResponse {
  /**
   * <p>业务结果 JSON 字符串；前端会再做一次 JSON 解析。Result 内业务 JSON 为 Data，内容是单个 Issue 详情</p>
   */
  Result?: string
  /**
   * <p>错误信息；正常返回时为空</p>
   */
  ErrorMsg?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteTDEMDialTask返回参数结构体
 */
export interface DeleteTDEMDialTaskResponse {
  /**
   * <p>已删除的任务 ID</p>
   */
  TaskId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * Rum实例信息
 */
export interface RumInstanceInfo {
  /**
   * 实例状态(1=创建中，2=运行中，3=异常，4=重启中，5=停止中，6=已停止，7=已删除)
   */
  InstanceStatus?: number
  /**
   * 片区Id
   */
  AreaId?: number
  /**
   * 标签列表
   */
  Tags?: Array<Tag>
  /**
   * 实例Id
   */
  InstanceId?: string
  /**
   * 集群Id
   */
  ClusterId?: number
  /**
   * 实例描述
   */
  InstanceDesc?: string
  /**
   * 计费状态(1=使用中，2=已过期，3=已销毁，4=分配中，5=分配失败)
   */
  ChargeStatus?: number
  /**
   * 计费类型(1=免费版，2=预付费，3=后付费)
   */
  ChargeType?: number
  /**
   * 更新时间
   */
  UpdatedAt?: string
  /**
   * 数据保留时间(天)
   */
  DataRetentionDays?: number
  /**
   * 实例名称
   */
  InstanceName?: string
  /**
   * 创建时间
   */
  CreatedAt?: string
  /**
   * 实例类型 1:原web相关类型 2:app端类型
   */
  InstanceType?: number
}
