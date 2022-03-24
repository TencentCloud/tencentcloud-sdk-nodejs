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
 * CreateTawInstance请求参数结构体
 */
export interface CreateTawInstanceRequest {
  /**
   * 片区Id，(至少大于0)
   */
  AreaId: number

  /**
   * 计费类型, (1=体验，2=预付费，3=后付费)
   */
  ChargeType: number

  /**
   * 数据保存时间，(至少大于0)
   */
  DataRetentionDays: number

  /**
   * 实例名称，(最大长度不超过255字节)
   */
  InstanceName: string

  /**
   * 标签列表
   */
  Tags?: Array<Tag>

  /**
   * 实例描述，(最大长度不超过1024字节)
   */
  InstanceDesc?: string

  /**
   * 每天数据上报量
   */
  CountNum?: string

  /**
   * 数据存储时长计费
   */
  PeriodRetain?: string

  /**
   * 实例购买渠道("cdn" 等)
   */
  BuyingChannel?: string
}

/**
 * DescribeDataFetchProject请求参数结构体
 */
export interface DescribeDataFetchProjectRequest {
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
   * 是否海外
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
}

/**
 * DescribeData返回参数结构体
 */
export interface DescribeDataResponse {
  /**
   * 返回字符串
   */
  Result: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateTawInstance返回参数结构体
 */
export interface CreateTawInstanceResponse {
  /**
   * 实例Id
   */
  InstanceId: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
 * DescribeProjectLimits返回参数结构体
 */
export interface DescribeProjectLimitsResponse {
  /**
   * 上报率数组列表
   */
  ProjectLimitSet: Array<ProjectLimit>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeTawInstances请求参数结构体
 */
export interface DescribeTawInstancesRequest {
  /**
   * 计费状态
   */
  ChargeStatuses?: Array<number>

  /**
   * 计费类型
   */
  ChargeTypes?: Array<number>

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
  AreaIds?: Array<number>

  /**
   * 实例状态(1=创建中，2=运行中，3=异常，4=重启中，5=停止中，6=已停止，7=销毁中，8=已销毁)
   */
  InstanceStatuses?: Array<number>

  /**
   * 实例Id
   */
  InstanceIds?: Array<string>

  /**
   * 过滤参数；demo模式传{"Name": "IsDemo", "Values":["1"]}
   */
  Filters?: Array<Filter>

  /**
   * 该参数已废弃，demo模式请在Filters内注明
   */
  IsDemo?: number
}

/**
 * DeleteOfflineLogConfig返回参数结构体
 */
export interface DeleteOfflineLogConfigResponse {
  /**
   * 接口调用信息
   */
  Msg: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDataPvUrlInfo返回参数结构体
 */
export interface DescribeDataPvUrlInfoResponse {
  /**
   * 返回值
   */
  Result: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
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
  Result: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
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
 * StopInstance请求参数结构体
 */
export interface StopInstanceRequest {
  /**
   * 需要停止的实例id
   */
  InstanceId: string
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
 * DescribeLogList请求参数结构体
 */
export interface DescribeLogListRequest {
  /**
   * 排序方式  desc  asc
   */
  Sort: string

  /**
   * searchlog  histogram
   */
  ActionType: string

  /**
   * 项目ID
   */
  ID: number

  /**
   * 开始时间
   */
  StartTime?: string

  /**
   * 单次查询返回的原始日志条数，最大值为100
   */
  Limit?: number

  /**
   * 上下文，加载更多日志时使用，透传上次返回的 Context 值，获取后续的日志内容，总计最多可获取1万条原始日志。过期时间1小时
   */
  Context?: string

  /**
   * 查询语句，参考控制台请求参数，语句长度最大为4096
   */
  Query?: string

  /**
   * 结束时间
   */
  EndTime?: string
}

/**
 * DescribeError返回参数结构体
 */
export interface DescribeErrorResponse {
  /**
   * 内容
   */
  Content: string

  /**
   * 项目ID
   */
  ID: number

  /**
   * 时间
   */
  CreateTime: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteWhitelist返回参数结构体
 */
export interface DeleteWhitelistResponse {
  /**
   * 消息success
   */
  Msg: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateLogExport请求参数结构体
 */
export interface CreateLogExportRequest {
  /**
   * 项目ID
   */
  ID: number

  /**
   * 日志导出起始时间
   */
  StartTime: string

  /**
   * 日志导出结束时间
   */
  EndTime: string

  /**
   * 日志导出检索语句
   */
  Query: string

  /**
   * 日志导出数量, 最大值1000万
   */
  Count: number

  /**
   * 日志导出时间排序。desc，asc，默认为desc
   */
  Order?: string

  /**
   * 日志导出数据格式。json，csv，默认为json
   */
  Format?: string
}

/**
 * DescribePvList返回参数结构体
 */
export interface DescribePvListResponse {
  /**
      * pv列表
注意：此字段可能返回 null，表示取不到有效值。
      */
  ProjectPvSet: Array<RumPvInfo>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
 * DescribeOfflineLogs请求参数结构体
 */
export interface DescribeOfflineLogsRequest {
  /**
   * 项目唯一上报 key
   */
  ProjectKey: string

  /**
   * 离线日志文件 id 列表
   */
  FileIDs: Array<string>
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
   */
  IsDemo?: number
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
   * 上报类型
   */
  ReportType?: string

  /**
   * 实例ID
   */
  InstanceID?: string
}

/**
 * DeleteOfflineLogRecord请求参数结构体
 */
export interface DeleteOfflineLogRecordRequest {
  /**
   * 项目唯一上报 key
   */
  ProjectKey: string

  /**
   * 离线日志文件 id
   */
  FileID: string
}

/**
 * DescribeReleaseFiles请求参数结构体
 */
export interface DescribeReleaseFilesRequest {
  /**
   * 项目 id
   */
  ProjectID: number

  /**
   * 文件版本
   */
  FileVersion?: string
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
 * DeleteOfflineLogRecord返回参数结构体
 */
export interface DeleteOfflineLogRecordResponse {
  /**
   * 接口调用信息
   */
  Msg: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
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
   * 网络类型
   */
  NetType?: string

  /**
   * 机型
   */
  Device?: string

  /**
   * 是否海外
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
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
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
 * CreateProject请求参数结构体
 */
export interface CreateProjectRequest {
  /**
   * 创建的项目名(不为空且最长为 200)
   */
  Name: string

  /**
   * 业务系统 ID
   */
  InstanceID: string

  /**
   * 项目抽样率(大于等于 0)
   */
  Rate: string

  /**
   * 是否开启聚类
   */
  EnableURLGroup: number

  /**
   * 项目类型("web", "mp", "android", "ios", "node", "hippy", "weex", "viola", "rn")
   */
  Type: string

  /**
   * 项目对应仓库地址(可选，最长为 256)
   */
  Repo?: string

  /**
   * 项目对应网页地址(可选，最长为 256)
   */
  URL?: string

  /**
   * 创建的项目描述(可选，最长为 1000)
   */
  Desc?: string
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
   * 网络类型
   */
  NetType?: string

  /**
   * 机型
   */
  Device?: string

  /**
   * 是否海外
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
}

/**
 * ModifyInstance返回参数结构体
 */
export interface ModifyInstanceResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeOfflineLogRecords返回参数结构体
 */
export interface DescribeOfflineLogRecordsResponse {
  /**
   * 接口调用信息
   */
  Msg: string

  /**
   * 记录 ID 数组
   */
  RecordSet: Array<string>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteStarProject请求参数结构体
 */
export interface DeleteStarProjectRequest {
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
 * DescribeWhitelists请求参数结构体
 */
export interface DescribeWhitelistsRequest {
  /**
   * 实例instance-ID
   */
  InstanceID: string
}

/**
 * DescribeLogExports返回参数结构体
 */
export interface DescribeLogExportsResponse {
  /**
   * 日志导出记录列表
   */
  LogExportSet: Array<LogExport>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
 * DescribeTawAreas返回参数结构体
 */
export interface DescribeTawAreasResponse {
  /**
   * 片区总数
   */
  TotalCount: number

  /**
   * 片区列表
   */
  AreaSet: Array<RumAreaInfo>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
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
 * CreateOfflineLogConfig返回参数结构体
 */
export interface CreateOfflineLogConfigResponse {
  /**
   * 接口返回信息
   */
  Msg: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
   * 项目接口
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
 * DeleteInstance返回参数结构体
 */
export interface DeleteInstanceResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
 * ResumeInstance请求参数结构体
 */
export interface ResumeInstanceRequest {
  /**
   * 需要恢复的实例id
   */
  InstanceId: string
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
   * allcount：性能视图，day：14天数据，count40x：40X视图，count50x：50X视图，count5xand4x：40∑50视图，top：资源top视图，nettype/version/platform/isp/region/device/browser/ext1/ext2/ext3/ret/status/from/url/env/：网络平台视图/Version视图/设备视图/ISP视图/地区视图/浏览器视图/ext1视图等等
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
   * 是否海外
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
}

/**
 * DescribeDataLogUrlStatistics返回参数结构体
 */
export interface DescribeDataLogUrlStatisticsResponse {
  /**
   * 返回值
   */
  Result: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateProject返回参数结构体
 */
export interface CreateProjectResponse {
  /**
   * 项目 id
   */
  ID: number

  /**
   * 项目唯一key
   */
  Key: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * StopInstance返回参数结构体
 */
export interface StopInstanceResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
  Msg: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteProject返回参数结构体
 */
export interface DeleteProjectResponse {
  /**
   * 操作信息
   */
  Msg: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeOfflineLogRecords请求参数结构体
 */
export interface DescribeOfflineLogRecordsRequest {
  /**
   * 项目唯一上报 key
   */
  ProjectKey: string
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
   * allcount：性能视图，day：14天数据，vp：性能，ckuv：uv，ckpv：pv，condition：条件列表，nettype/version/platform/isp/region/device/browser/ext1/ext2/ext3/ret/status/from/url/env/：网络平台视图/Version视图/设备视图/ISP视图/地区视图/浏览器视图/ext1视图等等
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
   * 是否海外
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
 * 发布文件列表(SOURCEMAP)
 */
export interface ReleaseFile {
  /**
   * 文件版本
   */
  Version: string

  /**
   * 文件唯一 key
   */
  FileKey: string

  /**
   * 文件名
   */
  FileName: string

  /**
   * 文件哈希值
   */
  FileHash: string

  /**
      * 文件 id
注意：此字段可能返回 null，表示取不到有效值。
      */
  ID: number
}

/**
 * ModifyProjectLimit返回参数结构体
 */
export interface ModifyProjectLimitResponse {
  /**
      * 返回信息
注意：此字段可能返回 null，表示取不到有效值。
      */
  Msg: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
   * 是否海外
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
 * DeleteLogExport请求参数结构体
 */
export interface DeleteLogExportRequest {
  /**
   * 项目ID
   */
  ID: number

  /**
   * 日志导出ID
   */
  ExportID: string
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
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
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
   * 备注
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
 * DescribeDataPvUrlStatistics返回参数结构体
 */
export interface DescribeDataPvUrlStatisticsResponse {
  /**
   * 返回值
   */
  Result: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
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
 * DescribeDataCustomUrl返回参数结构体
 */
export interface DescribeDataCustomUrlResponse {
  /**
   * 返回值
   */
  Result: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
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
   * 网络类型
   */
  NetType?: string

  /**
   * 机型
   */
  Device?: string

  /**
   * 是否海外
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
}

/**
 * DescribeDataPerformanceProject返回参数结构体
 */
export interface DescribeDataPerformanceProjectResponse {
  /**
   * 返回值
   */
  Result: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
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
  Result: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ResumeInstance返回参数结构体
 */
export interface ResumeInstanceResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
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
  Result: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
 * DescribeReleaseFileSign请求参数结构体
 */
export interface DescribeReleaseFileSignRequest {
  /**
   * 超时时间，不填默认是 5 分钟
   */
  Timeout?: number
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
 * DescribeDataLogUrlInfo返回参数结构体
 */
export interface DescribeDataLogUrlInfoResponse {
  /**
   * 返回字符串
   */
  Result: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
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
  ProjectId: number

  /**
      * pv访问量
注意：此字段可能返回 null，表示取不到有效值。
      */
  Pv: string

  /**
   * 时间
   */
  CreateTime: string
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
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeScores返回参数结构体
 */
export interface DescribeScoresResponse {
  /**
   * 数组
   */
  ScoreSet: Array<ScoreInfo>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeOfflineLogConfigs返回参数结构体
 */
export interface DescribeOfflineLogConfigsResponse {
  /**
   * 接口调用信息
   */
  Msg: string

  /**
   * 用户唯一标示数组
   */
  UniqueIDSet: Array<string>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteLogExport返回参数结构体
 */
export interface DeleteLogExportResponse {
  /**
      * 是否成功，成功则为success；失败则直接返回Error，不返回该参数
注意：此字段可能返回 null，表示取不到有效值。
      */
  Msg: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
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
  SecretKey: string

  /**
   * 临时密钥 id
   */
  SecretID: string

  /**
   * 临时密钥临时 token
   */
  SessionToken: string

  /**
   * 开始时间戳
   */
  StartTime: number

  /**
   * 过期时间戳
   */
  ExpiredTime: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeOfflineLogs返回参数结构体
 */
export interface DescribeOfflineLogsResponse {
  /**
   * 接口调用返回信息
   */
  Msg: string

  /**
   * 日志列表
   */
  LogSet: Array<string>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
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
  AreaIds?: Array<number>

  /**
   * 片区Key
   */
  AreaKeys?: Array<string>

  /**
   * 分页Limit
   */
  Limit?: number

  /**
   * 片区状态(1=有效，2=无效)
   */
  AreaStatuses?: Array<number>

  /**
   * 分页Offset
   */
  Offset?: number
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
   * 网络类型
   */
  NetType?: string

  /**
   * 机型
   */
  Device?: string

  /**
   * 是否海外
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
}

/**
 * DeleteStarProject返回参数结构体
 */
export interface DeleteStarProjectResponse {
  /**
      * 返回消息
注意：此字段可能返回 null，表示取不到有效值。
      */
  Msg: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDataPerformancePage返回参数结构体
 */
export interface DescribeDataPerformancePageResponse {
  /**
   * 返回值
   */
  Result: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
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
 * 日志导出记录
 */
export interface LogExport {
  /**
   * 日志导出路径
   */
  CosPath: string

  /**
   * 日志导出数量
   */
  Count: number

  /**
   * 日志导出任务创建时间
   */
  CreateTime: string

  /**
   * 日志导出任务ID
   */
  ExportID: string

  /**
   * 日志导出文件名
   */
  FileName: string

  /**
   * 日志文件大小
   */
  FileSize: number

  /**
   * 日志导出格式
   */
  Format: string

  /**
   * 日志导出时间排序
   */
  Order: string

  /**
   * 日志导出查询语句
   */
  Query: string

  /**
   * 日志导出起始时间
   */
  StartTime: string

  /**
   * 日志导出结束时间
   */
  EndTime: string

  /**
   * 日志下载状态。Queuing:导出正在排队中，Processing:导出正在进行中，Complete:导出完成，Failed:导出失败，Expired:日志导出已过期（三天有效期）。
   */
  Status: string
}

/**
 * DescribeDataStaticResource返回参数结构体
 */
export interface DescribeDataStaticResourceResponse {
  /**
   * 返回值
   */
  Result: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDataEventUrl返回参数结构体
 */
export interface DescribeDataEventUrlResponse {
  /**
   * 返回值
   */
  Result: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
   * 是否海外
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
   * 类型
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
   * 是否海外
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
}

/**
 * DescribeLogList返回参数结构体
 */
export interface DescribeLogListResponse {
  /**
   * 返回字符串
   */
  Result: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeReleaseFiles返回参数结构体
 */
export interface DescribeReleaseFilesResponse {
  /**
   * 文件信息列表
   */
  Files: Array<ReleaseFile>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateOfflineLogConfig请求参数结构体
 */
export interface CreateOfflineLogConfigRequest {
  /**
   * 项目唯一上报 key
   */
  ProjectKey: string

  /**
   * 需要监听的用户唯一标示(aid 或 uin)
   */
  UniqueID: string
}

/**
 * DescribeDataStaticUrl返回参数结构体
 */
export interface DescribeDataStaticUrlResponse {
  /**
   * 返回值
   */
  Result: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
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
  Msg: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
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
  StaticDuration: string

  /**
   * pv
   */
  PagePv: string

  /**
   * 失败
   */
  ApiFail: string

  /**
   * 请求
   */
  ApiNum: string

  /**
   * fail
   */
  StaticFail: string

  /**
   * 项目id
   */
  ProjectID: number

  /**
   * uv
   */
  PageUv: string

  /**
   * 请求次数
   */
  ApiDuration: string

  /**
   * 分数
   */
  Score: string

  /**
   * error
   */
  PageError: string

  /**
   * num
   */
  StaticNum: string

  /**
   * num
   */
  RecordNum: number

  /**
   * Duration
   */
  PageDuration: string
}

/**
 * DescribeDataWebVitalsPage返回参数结构体
 */
export interface DescribeDataWebVitalsPageResponse {
  /**
   * 返回值
   */
  Result: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
   * 网络类型
   */
  NetType?: string

  /**
   * 机型
   */
  Device?: string

  /**
   * 是否海外
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
 * DescribeOfflineLogConfigs请求参数结构体
 */
export interface DescribeOfflineLogConfigsRequest {
  /**
   * 项目唯一上报 key
   */
  ProjectKey: string
}

/**
 * DeleteOfflineLogConfig请求参数结构体
 */
export interface DeleteOfflineLogConfigRequest {
  /**
   * 项目唯一上报 key
   */
  ProjectKey: string

  /**
   * 用户唯一标示(uin or aid)
   */
  UniqueID: string
}

/**
 * DescribeProjects返回参数结构体
 */
export interface DescribeProjectsResponse {
  /**
   * 列表总数
   */
  TotalCount: number

  /**
   * 项目列表
   */
  ProjectSet: Array<RumProject>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyProject返回参数结构体
 */
export interface ModifyProjectResponse {
  /**
   * 操作信息
   */
  Msg: string

  /**
   * 项目id
   */
  ID: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeLogExports请求参数结构体
 */
export interface DescribeLogExportsRequest {
  /**
   * 项目ID
   */
  ID: number
}

/**
 * DescribeDataReportCount返回参数结构体
 */
export interface DescribeDataReportCountResponse {
  /**
   * 返回值
   */
  Result: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDataPerformanceProject请求参数结构体
 */
export interface DescribeDataPerformanceProjectRequest {
  /**
   * 开始时间
   */
  StartTime: number

  /**
   * allcount：性能视图，falls：页面加载瀑布图，samp：首屏时间，day：14天数据，nettype：网络/平台视图，performance：页面性能TOP视图，condition：条件列表，area：请求速度分布，version/platform/isp/region/device/browser/ext1/ext2/ext3/ret/status/from/url/env/：ISP视图/地区视图/浏览器视图等
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
   * 是否海外
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
   * 项目名(可选，不为空且最长为 200)
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
   * 项目描述(可选，最长为 1000)
   */
  Desc?: string
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
   * 网络类型
   */
  NetType?: string

  /**
   * 机型
   */
  Device?: string

  /**
   * 是否海外
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
}

/**
 * DescribeTawInstances返回参数结构体
 */
export interface DescribeTawInstancesResponse {
  /**
   * 实例列表
   */
  InstanceSet: Array<RumInstanceInfo>

  /**
   * 实例总数
   */
  TotalCount: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
   * 获取day：d，   获取min则不填
   */
  Dimension?: string
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
   * 类型
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
   * 是否海外
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
  Msg: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateLogExport返回参数结构体
 */
export interface CreateLogExportResponse {
  /**
   * 日志导出ID
   */
  ExportID: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDataFetchProject返回参数结构体
 */
export interface DescribeDataFetchProjectResponse {
  /**
   * 返回值
   */
  Result: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 白名单
 */
export interface Whitelist {
  /**
   * 备注
   */
  Remark: string

  /**
   * 实例ID
   */
  InstanceID: string

  /**
   * 截止时间
   */
  Ttl: string

  /**
   * 白名单自增ID
   */
  ID: string

  /**
   * 业务唯一标识
   */
  WhitelistUin: string

  /**
   * 创建者ID
   */
  CreateUser: string

  /**
   * aid标识
   */
  Aid: string

  /**
   * 创建时间
   */
  CreateTime: string
}

/**
 * Rum 项目信息
 */
export interface RumProject {
  /**
   * 项目名
   */
  Name: string

  /**
   * 创建者 id
   */
  Creator: string

  /**
   * 实例 id
   */
  InstanceID: string

  /**
   * 项目类型
   */
  Type: string

  /**
   * 创建时间
   */
  CreateTime: string

  /**
      * 项目仓库地址
注意：此字段可能返回 null，表示取不到有效值。
      */
  Repo: string

  /**
      * 项目网址地址
注意：此字段可能返回 null，表示取不到有效值。
      */
  URL: string

  /**
   * 项目采样频率
   */
  Rate: string

  /**
   * 项目唯一key（长度 12 位）
   */
  Key: string

  /**
   * 是否开启url聚类
   */
  EnableURLGroup: number

  /**
   * 实例名
   */
  InstanceName: string

  /**
   * 项目 ID
   */
  ID: number

  /**
   * 实例 key
   */
  InstanceKey: string

  /**
      * 项目描述
注意：此字段可能返回 null，表示取不到有效值。
      */
  Desc: string

  /**
      * 是否星标  1:是 0:否
注意：此字段可能返回 null，表示取不到有效值。
      */
  IsStar: number

  /**
      * 项目状态(1 创建中，2 运行中，3 异常，4 重启中，5 停止中，6 已停止， 7 销毁中，8 已销毁)
注意：此字段可能返回 null，表示取不到有效值。
      */
  ProjectStatus: number
}

/**
 * DescribeDataSetUrlStatistics返回参数结构体
 */
export interface DescribeDataSetUrlStatisticsResponse {
  /**
   * 返回值
   */
  Result: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
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
  InstanceStatus: number

  /**
   * 片区Id
   */
  AreaId: number

  /**
   * 标签列表
   */
  Tags: Array<Tag>

  /**
   * 实例Id
   */
  InstanceId: string

  /**
   * 集群Id
   */
  ClusterId: number

  /**
   * 实例描述
   */
  InstanceDesc: string

  /**
   * 计费状态(1=使用中，2=已过期，3=已销毁，4=分配中，5=分配失败)
   */
  ChargeStatus: number

  /**
   * 计费类型(1=免费版，2=预付费，3=后付费)
   */
  ChargeType: number

  /**
   * 更新时间
   */
  UpdatedAt: string

  /**
   * 数据保留时间(天)
   */
  DataRetentionDays: number

  /**
   * 实例名称
   */
  InstanceName: string

  /**
   * 创建时间
   */
  CreatedAt: string
}
