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
 * ExportBashEvents请求参数结构体
 */
export interface ExportBashEventsRequest {
  /**
   * 过滤参数
   */
  Filters?: Array<Filters>
}

/**
 * DescribeSearchTemplates返回参数结构体
 */
export interface DescribeSearchTemplatesResponse {
  /**
   * 总数
   */
  TotalCount: number

  /**
   * 模板列表
   */
  List: Array<SearchTemplate>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ExportReverseShellEvents返回参数结构体
 */
export interface ExportReverseShellEventsResponse {
  /**
   * 导出文件下载链接地址。
   */
  DownloadUrl: string

  /**
   * 任务id
   */
  TaskId: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ScanVulAgain请求参数结构体
 */
export interface ScanVulAgainRequest {
  /**
   * 漏洞事件id串，多个用英文逗号分隔
   */
  EventIds: string

  /**
   * 重新检查的机器uuid,多个逗号分隔
   */
  Uuids?: string
}

/**
 * DeleteBaselineStrategy返回参数结构体
 */
export interface DeleteBaselineStrategyResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ExportWebPageEventList返回参数结构体
 */
export interface ExportWebPageEventListResponse {
  /**
   * 任务id 可通过 ExportTasks接口下载
   */
  TaskId: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * InquiryPriceOpenProVersionPrepaid请求参数结构体
 */
export interface InquiryPriceOpenProVersionPrepaidRequest {
  /**
   * 预付费模式(包年包月)参数设置。
   */
  ChargePrepaid: ChargePrepaid

  /**
   * 需要开通专业版机器列表数组。
   */
  Machines: Array<ProVersionMachine>
}

/**
 * DescribeUndoVulCounts返回参数结构体
 */
export interface DescribeUndoVulCountsResponse {
  /**
      * 未处理的漏洞数
注意：此字段可能返回 null，表示取不到有效值。
      */
  UndoVulCount: number

  /**
      * 未处理的主机数
注意：此字段可能返回 null，表示取不到有效值。
      */
  UndoHostCount: number

  /**
      * 普通版主机数
注意：此字段可能返回 null，表示取不到有效值。
      */
  NotProfessionCount: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeBaselineScanSchedule返回参数结构体
 */
export interface DescribeBaselineScanScheduleResponse {
  /**
      * 检测进度(百分比)
注意：此字段可能返回 null，表示取不到有效值。
      */
  Schedule: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteBashEvents返回参数结构体
 */
export interface DeleteBashEventsResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ExportWebPageEventList请求参数结构体
 */
export interface ExportWebPageEventListRequest {
  /**
      * 过滤条件
<li>IpOrAlias - String - 是否必填：否 - 主机ip或别名筛选</li>
<li>EventType - String - 是否必填：否 - 事件类型</li>
<li>EventStatus - String - 是否必填：否 - 事件状态</li>
      */
  Filters?: Array<AssetFilters>

  /**
   * 排序方式：CreateTime 或 RestoreTime，默认为CreateTime
   */
  By?: string

  /**
   * 排序方式，0降序，1升序，默认为0
   */
  Order?: number
}

/**
 * DescribeTags请求参数结构体
 */
export interface DescribeTagsRequest {
  /**
      * 云主机类型。
<li>CVM：表示云服务器</li>
<li>BM:  表示黑石物理机</li>
<li>ECM:  表示边缘计算服务器</li>
<li>LH:  表示轻量应用服务器</li>
<li>Other:  表示混合云服务器</li>
      */
  MachineType?: string

  /**
   * 机器所属地域。如：ap-guangzhou
   */
  MachineRegion?: string

  /**
      * 过滤条件。
<li>Keywords - String - 是否必填：否 - 查询关键字(机器名称/机器IP </li>
<li>Status - String - 是否必填：否 - 客户端在线状态（OFFLINE: 离线 | ONLINE: 在线 | UNINSTALLED：未安装 | SHUTDOWN 已关机）</li>
<li>Version - String  是否必填：否 - 当前防护版本（ PRO_VERSION：专业版 | BASIC_VERSION：基础版）</li>
<li>Risk - String 是否必填: 否 - 风险主机( yes ) </li>
<li>Os -String 是否必填: 否 - 操作系统( DescribeMachineOsList 接口 值 )
每个过滤条件只支持一个值，暂不支持多个值“或”关系查询
      */
  Filters?: Array<Filters>
}

/**
 * DescribeMonthInspectionReport返回参数结构体
 */
export interface DescribeMonthInspectionReportResponse {
  /**
   * 总条数
   */
  TotalCount: number

  /**
   * 巡检报告列表
   */
  List: Array<MonthInspectionReport>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeSaveOrUpdateWarnings返回参数结构体
 */
export interface DescribeSaveOrUpdateWarningsResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteBashRules返回参数结构体
 */
export interface DeleteBashRulesResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ExportVulList返回参数结构体
 */
export interface ExportVulListResponse {
  /**
      * 导出的文件下载url（已弃用！）
注意：此字段可能返回 null，表示取不到有效值。
      */
  DownloadUrl: string

  /**
   * 导出文件Id 可通过ExportTasks接口下载
   */
  TaskId: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeHistoryService返回参数结构体
 */
export interface DescribeHistoryServiceResponse {
  /**
   * 1 可购买 2 只能升降配 3 只能跳到续费管理页
   */
  BuyStatus: number

  /**
   * 用户已购容量 单位 G
   */
  InquireNum: number

  /**
   * 到期时间
   */
  EndTime: string

  /**
   * 是否自动续费,0 初始值, 1 开通 2 没开通
   */
  IsAutoOpenRenew: number

  /**
   * 资源ID
   */
  ResourceId: string

  /**
   * 0 没开通 1 正常 2隔离 3销毁
   */
  Status: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyWebPageProtectSetting返回参数结构体
 */
export interface ModifyWebPageProtectSettingResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeVulInfoCvss返回参数结构体
 */
export interface DescribeVulInfoCvssResponse {
  /**
      * 漏洞id
注意：此字段可能返回 null，表示取不到有效值。
      */
  VulId: number

  /**
      * 漏洞名称
注意：此字段可能返回 null，表示取不到有效值。
      */
  VulName: string

  /**
      * 危害等级：1-低危；2-中危；3-高危；4-严重
注意：此字段可能返回 null，表示取不到有效值。
      */
  VulLevel: number

  /**
      * 漏洞分类 1: web应用漏洞 2:系统组件漏洞
注意：此字段可能返回 null，表示取不到有效值。
      */
  VulType: number

  /**
      * 漏洞描述信息
注意：此字段可能返回 null，表示取不到有效值。
      */
  Description: string

  /**
      * 修复方案
注意：此字段可能返回 null，表示取不到有效值。
      */
  RepairPlan: string

  /**
      * 漏洞CVEID
注意：此字段可能返回 null，表示取不到有效值。
      */
  CveId: string

  /**
      * 参考链接
注意：此字段可能返回 null，表示取不到有效值。
      */
  Reference: string

  /**
      * CVSS信息，wiki:http://tapd.oa.com/Teneyes/markdown_wikis/view/#1010131751011792303
注意：此字段可能返回 null，表示取不到有效值。
      */
  CVSS: string

  /**
      * 发布时间
注意：此字段可能返回 null，表示取不到有效值。
      */
  PublicDate: string

  /**
      * Cvss分数
注意：此字段可能返回 null，表示取不到有效值。
      */
  CvssScore: number

  /**
      * cvss详情
注意：此字段可能返回 null，表示取不到有效值。
      */
  CveInfo: string

  /**
      * cvss 分数 浮点型
注意：此字段可能返回 null，表示取不到有效值。
      */
  CvssScoreFloat: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 木马列表集合
 */
export interface MalWareList {
  /**
   * 服务器ip
   */
  HostIp: string

  /**
   * 唯一UUID
   */
  Uuid: string

  /**
   * 路径
   */
  FilePath: string

  /**
   * 描述
   */
  VirusName: string

  /**
   * 状态；4-:待处理，5-已信任，6-已隔离
   */
  Status: number

  /**
      * 唯一ID
注意：此字段可能返回 null，表示取不到有效值。
      */
  Id: number

  /**
   * 主机别名
   */
  Alias: string

  /**
      * 特性标签
注意：此字段可能返回 null，表示取不到有效值。
      */
  Tags: Array<string>

  /**
      * 首次运行时间
注意：此字段可能返回 null，表示取不到有效值。
      */
  FileCreateTime: string

  /**
      * 最近运行时间
注意：此字段可能返回 null，表示取不到有效值。
      */
  FileModifierTime: string

  /**
   * 创建时间
   */
  CreateTime: string

  /**
   * 最近扫描时间
   */
  LatestScanTime: string
}

/**
 * 标签信息
 */
export interface Tag {
  /**
   * 标签ID
   */
  Id: number

  /**
   * 标签名
   */
  Name: string

  /**
   * 服务器数
   */
  Count: number
}

/**
 * ExportAttackLogs返回参数结构体
 */
export interface ExportAttackLogsResponse {
  /**
   * 已废弃
   */
  DownloadUrl: string

  /**
   * 导出任务ID 可通过ExportTasks接口下载
   */
  TaskId: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * TrustMalwares请求参数结构体
 */
export interface TrustMalwaresRequest {
  /**
   * 木马ID数组（单次不超过的最大条数：100）
   */
  Ids: Array<number>
}

/**
 * ExportVulEffectHostList请求参数结构体
 */
export interface ExportVulEffectHostListRequest {
  /**
   * 漏洞id
   */
  VulId: number

  /**
      * 过滤条件。
<li>AliasName - String - 主机名筛选</li>
      */
  Filters?: Array<Filter>
}

/**
 * DescribeBaselineBasicInfo请求参数结构体
 */
export interface DescribeBaselineBasicInfoRequest {
  /**
   * 基线名称
   */
  BaselineName?: string
}

/**
 * DescribeProVersionInfo请求参数结构体
 */
export type DescribeProVersionInfoRequest = null

/**
 * DescribeVulCountByDates请求参数结构体
 */
export interface DescribeVulCountByDatesRequest {
  /**
   * 需要查询最近几天的数据，需要都 -1后传入
   */
  LastDays?: Array<number>

  /**
   * 漏洞的分类，最小值为1最大值为5
   */
  VulCategory?: number

  /**
   * 是否为应急漏洞筛选  是: yes
   */
  IfEmergency?: string
}

/**
 * DeleteLoginWhiteList请求参数结构体
 */
export interface DeleteLoginWhiteListRequest {
  /**
   * 白名单ID (最大 100 条)
   */
  Ids: Array<number>
}

/**
 * 服务器标签信息
 */
export interface MachineTag {
  /**
   * 关联标签ID
   */
  Rid: number

  /**
   * 标签名
   */
  Name: string

  /**
   * 标签ID
   */
  TagId: number
}

/**
 * DescribeAttackLogInfo返回参数结构体
 */
export interface DescribeAttackLogInfoResponse {
  /**
   * 日志ID
   */
  Id: number

  /**
   * 主机ID
   */
  Quuid: string

  /**
   * 攻击来源端口
   */
  SrcPort: number

  /**
   * 攻击来源IP
   */
  SrcIp: string

  /**
   * 攻击目标端口
   */
  DstPort: number

  /**
   * 攻击目标IP
   */
  DstIp: string

  /**
   * 攻击方法
   */
  HttpMethod: string

  /**
   * 攻击目标主机
   */
  HttpHost: string

  /**
   * 攻击头信息
   */
  HttpHead: string

  /**
   * 攻击者浏览器标识
   */
  HttpUserAgent: string

  /**
   * 请求源
   */
  HttpReferer: string

  /**
   * 威胁类型
   */
  VulType: string

  /**
   * 攻击路径
   */
  HttpCgi: string

  /**
   * 攻击参数
   */
  HttpParam: string

  /**
   * 攻击时间
   */
  CreatedAt: string

  /**
   * 攻击内容
   */
  HttpContent: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribePrivilegeEvents返回参数结构体
 */
export interface DescribePrivilegeEventsResponse {
  /**
   * 数据列表
   */
  List: Array<PrivilegeEscalationProcess>

  /**
   * 总条数
   */
  TotalCount: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeOverviewStatistics返回参数结构体
 */
export interface DescribeOverviewStatisticsResponse {
  /**
   * 服务器在线数。
   */
  OnlineMachineNum: number

  /**
   * 专业服务器数。
   */
  ProVersionMachineNum: number

  /**
   * 木马文件数。
   */
  MalwareNum: number

  /**
   * 异地登录数。
   */
  NonlocalLoginNum: number

  /**
   * 暴力破解成功数。
   */
  BruteAttackSuccessNum: number

  /**
   * 漏洞数。
   */
  VulNum: number

  /**
   * 安全基线数。
   */
  BaseLineNum: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeMonthInspectionReport请求参数结构体
 */
export interface DescribeMonthInspectionReportRequest {
  /**
   * 分页大小
   */
  Limit: number

  /**
   * 分页步长
   */
  Offset: number
}

/**
 * 反弹Shell规则
 */
export interface ReverseShellRule {
  /**
   * 规则ID
   */
  Id: number

  /**
   * 客户端ID
   */
  Uuid: string

  /**
   * 进程名称
   */
  ProcessName: string

  /**
   * 目标IP
   */
  DestIp: string

  /**
   * 目标端口
   */
  DestPort: string

  /**
   * 操作人
   */
  Operator: string

  /**
   * 是否全局规则
   */
  IsGlobal: number

  /**
   * 状态 (0: 有效 1: 无效)
   */
  Status: number

  /**
   * 创建时间
   */
  CreateTime: string

  /**
   * 修改时间
   */
  ModifyTime: string

  /**
   * 主机IP
   */
  Hostip: string
}

/**
 * DescribeBashRules返回参数结构体
 */
export interface DescribeBashRulesResponse {
  /**
   * 列表内容
   */
  List: Array<BashRule>

  /**
   * 总条数
   */
  TotalCount: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ChangeRuleEventsIgnoreStatus请求参数结构体
 */
export interface ChangeRuleEventsIgnoreStatusRequest {
  /**
   * 忽略状态 0:取消忽略 ； 1:忽略
   */
  IgnoreStatus: number

  /**
   * 检测项id数组
   */
  RuleIdList?: Array<number>

  /**
   * 事件id数组
   */
  EventIdList?: Array<number>
}

/**
 * DescribeWebPageEventList请求参数结构体
 */
export interface DescribeWebPageEventListRequest {
  /**
      * 过滤条件
<li>IpOrAlias - String - 是否必填：否 - 主机ip或别名筛选</li>
<li>EventType - String - 是否必填：否 - 事件类型</li>
<li>EventStatus - String - 是否必填：否 - 事件状态</li>
      */
  Filters?: Array<AssetFilters>

  /**
   * 偏移量，默认为0。
   */
  Offset?: number

  /**
   * 返回数量，默认为10，最大值为100。
   */
  Limit?: number

  /**
   * 排序方式：CreateTime 或 RestoreTime，默认为CreateTime
   */
  By?: string

  /**
   * 排序方式，0降序，1升序，默认为0
   */
  Order?: number
}

/**
 * ExportAssetCoreModuleList请求参数结构体
 */
export interface ExportAssetCoreModuleListRequest {
  /**
      * 过滤条件。
<li>Name- string - 是否必填：否 - 包名</li>
<li>User- string - 是否必填：否 - 用户</li>
      */
  Filters?: Array<AssetFilters>

  /**
   * 排序方式，asc升序 或 desc降序
   */
  Order?: string

  /**
   * 排序依据:Size,ProcessCount,ModuleCount
   */
  By?: string

  /**
   * 服务器Uuid
   */
  Uuid?: string

  /**
   * 服务器Quuid
   */
  Quuid?: string
}

/**
 * DescribeComponentStatistics返回参数结构体
 */
export interface DescribeComponentStatisticsResponse {
  /**
   * 组件统计列表记录总数。
   */
  TotalCount: number

  /**
   * 组件统计列表数据数组。
   */
  ComponentStatistics: Array<ComponentStatistics>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeMachineRegions请求参数结构体
 */
export type DescribeMachineRegionsRequest = null

/**
 * DescribeSearchExportList返回参数结构体
 */
export interface DescribeSearchExportListResponse {
  /**
   * 导出的任务号
   */
  TaskId: number

  /**
   * 下载地址
   */
  DownloadUrl: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeServerRelatedDirInfo返回参数结构体
 */
export interface DescribeServerRelatedDirInfoResponse {
  /**
   * 服务器名称
   */
  HostName: string

  /**
   * 服务器IP
   */
  HostIp: string

  /**
   * 防护目录数量
   */
  ProtectDirNum: number

  /**
   * 防护文件数量
   */
  ProtectFileNum: number

  /**
   * 防篡改数量
   */
  ProtectTamperNum: number

  /**
   * 防护软链数量
   */
  ProtectLinkNum: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CloseProVersion请求参数结构体
 */
export interface CloseProVersionRequest {
  /**
      * 主机唯一标识Uuid数组。
黑石的InstanceId，CVM的Uuid ,边缘计算的Uuid , 轻量应用服务器的Uuid ,混合云机器的Quuid 。 当前参数最大长度限制20
      */
  Quuid?: string
}

/**
 * DescribeUsualLoginPlaces返回参数结构体
 */
export interface DescribeUsualLoginPlacesResponse {
  /**
   * 常用登录地数组
   */
  UsualLoginPlaces: Array<UsualPlace>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 忽略的基线检测项信息
 */
export interface IgnoreBaselineRule {
  /**
      * 基线检测项名称
注意：此字段可能返回 null，表示取不到有效值。
      */
  RuleName: string

  /**
      * 基线检测项id
注意：此字段可能返回 null，表示取不到有效值。
      */
  RuleId: number

  /**
      * 更新时间
注意：此字段可能返回 null，表示取不到有效值。
      */
  ModifyTime: string

  /**
      * 修复建议
注意：此字段可能返回 null，表示取不到有效值。
      */
  Fix: string

  /**
      * 影响主机数
注意：此字段可能返回 null，表示取不到有效值。
      */
  EffectHostCount: number
}

/**
 * DescribeBaselineBasicInfo返回参数结构体
 */
export interface DescribeBaselineBasicInfoResponse {
  /**
      * 基线基础信息列表
注意：此字段可能返回 null，表示取不到有效值。
      */
  BaselineBasicInfoList: Array<BaselineBasicInfo>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * EditBashRules返回参数结构体
 */
export interface EditBashRulesResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ScanVul返回参数结构体
 */
export interface ScanVulResponse {
  /**
      * 任务id
注意：此字段可能返回 null，表示取不到有效值。
      */
  TaskId: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeOverviewStatistics请求参数结构体
 */
export type DescribeOverviewStatisticsRequest = null

/**
 * 操作系统名称
 */
export interface OsName {
  /**
   * 系统名称
   */
  Name: string

  /**
   * 操作系统类型枚举值
   */
  MachineOSType: number
}

/**
 * DescribeTagMachines请求参数结构体
 */
export interface DescribeTagMachinesRequest {
  /**
   * 标签ID
   */
  Id: number
}

/**
 * key-val类型的通用数据结构
 */
export interface AssetKeyVal {
  /**
   * 标签
   */
  Key: string

  /**
   * 数量
   */
  Value: number

  /**
      * 描述信息
注意：此字段可能返回 null，表示取不到有效值。
      */
  Desc: string
}

/**
 * 登录审计列表实体
 */
export interface HostLoginList {
  /**
   * 记录Id
   */
  Id: number

  /**
      * Uuid串
注意：此字段可能返回 null，表示取不到有效值。
      */
  Uuid: string

  /**
      * 主机ip
注意：此字段可能返回 null，表示取不到有效值。
      */
  MachineIp: string

  /**
      * 主机名
注意：此字段可能返回 null，表示取不到有效值。
      */
  MachineName: string

  /**
      * 用户名
注意：此字段可能返回 null，表示取不到有效值。
      */
  UserName: string

  /**
      * 来源ip
注意：此字段可能返回 null，表示取不到有效值。
      */
  SrcIp: string

  /**
   * 1:正常登录；2异地登录； 5已加白
   */
  Status: number

  /**
      * 国家id
注意：此字段可能返回 null，表示取不到有效值。
      */
  Country: number

  /**
      * 城市id
注意：此字段可能返回 null，表示取不到有效值。
      */
  City: number

  /**
      * 省份id
注意：此字段可能返回 null，表示取不到有效值。
      */
  Province: number

  /**
      * 登录时间
注意：此字段可能返回 null，表示取不到有效值。
      */
  LoginTime: string

  /**
      * 修改时间
注意：此字段可能返回 null，表示取不到有效值。
      */
  ModifyTime: string

  /**
      * 是否命中异地登录异常  1表示命中此类异常, 0表示未命中
注意：此字段可能返回 null，表示取不到有效值。
      */
  IsRiskArea: number

  /**
      * 是否命中异常用户异常 1表示命中此类异常, 0表示未命中
注意：此字段可能返回 null，表示取不到有效值。
      */
  IsRiskUser: number

  /**
      * 是否命中异常时间异常 1表示命中此类异常, 0表示未命中
注意：此字段可能返回 null，表示取不到有效值。
      */
  IsRiskTime: number

  /**
      * 是否命中异常IP异常 1表示命中此类异常, 0表示未命中
注意：此字段可能返回 null，表示取不到有效值。
      */
  IsRiskSrcIp: number

  /**
      * 危险等级：
0 高危
1 可疑
注意：此字段可能返回 null，表示取不到有效值。
      */
  RiskLevel: number

  /**
      * 位置名称
注意：此字段可能返回 null，表示取不到有效值。
      */
  Location: string
}

/**
 * DeletePrivilegeEvents请求参数结构体
 */
export interface DeletePrivilegeEventsRequest {
  /**
   * ID数组. (最大100条)
   */
  Ids: Array<number>
}

/**
 * ExportAttackLogs请求参数结构体
 */
export interface ExportAttackLogsRequest {
  /**
      * 过滤条件。
<li>HttpMethod - String - 是否必填：否 - 攻击方法(POST|GET)</li>
<li>DateRange - String - 是否必填：否 - 时间范围(存储最近3个月的数据)，如最近一个月["2019-11-17", "2019-12-17"]</li>
<li>VulType - String 威胁类型 - 是否必填: 否</li>
<li>SrcIp - String 攻击源IP - 是否必填: 否</li>
<li>DstIp - String 攻击目标IP - 是否必填: 否</li>
<li>SrcPort - String 攻击源端口 - 是否必填: 否</li>
<li>DstPort - String 攻击目标端口 - 是否必填: 否</li>
      */
  Filters?: Array<Filters>

  /**
   * 主机安全客户端ID
   */
  Uuid?: string

  /**
   * 云主机机器ID
   */
  Quuid?: string
}

/**
 * DescribeBanMode请求参数结构体
 */
export type DescribeBanModeRequest = null

/**
 * DescribeESAggregations返回参数结构体
 */
export interface DescribeESAggregationsResponse {
  /**
   * ES聚合结果JSON
   */
  Data: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 应急漏洞信息
 */
export interface EmergencyVul {
  /**
   * 漏洞id
   */
  VulId: number

  /**
   * 漏洞级别
   */
  Level: number

  /**
   * 漏洞名称
   */
  VulName: string

  /**
   * 发布日期
   */
  PublishDate: string

  /**
   * 漏洞分类
   */
  Category: number

  /**
   * 漏洞状态 0未检测 1有风险 ，2无风险 ，3 检查中展示progress
   */
  Status: number

  /**
   * 最后扫描时间
   */
  LastScanTime: string

  /**
   * 扫描进度
   */
  Progress: number
}

/**
 * ExportReverseShellEvents请求参数结构体
 */
export interface ExportReverseShellEventsRequest {
  /**
   * 过滤参数
   */
  Filters?: Array<Filters>
}

/**
 * DeleteLoginWhiteList返回参数结构体
 */
export interface DeleteLoginWhiteListResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeAttackLogs返回参数结构体
 */
export interface DescribeAttackLogsResponse {
  /**
      * 日志列表
注意：此字段可能返回 null，表示取不到有效值。
      */
  AttackLogs: Array<DefendAttackLog>

  /**
   * 总条数
   */
  TotalCount: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteMalwares返回参数结构体
 */
export interface DeleteMalwaresResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ScanVulAgain返回参数结构体
 */
export interface ScanVulAgainResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 漏洞top统计实体
 */
export interface VulTopInfo {
  /**
      * 漏洞 名
注意：此字段可能返回 null，表示取不到有效值。
      */
  VulName: string

  /**
      * 危害等级：1-低危；2-中危；3-高危；4-严重
注意：此字段可能返回 null，表示取不到有效值。
      */
  VulLevel: number

  /**
      * 漏洞数量
注意：此字段可能返回 null，表示取不到有效值。
      */
  VulCount: number

  /**
      * 漏洞id
注意：此字段可能返回 null，表示取不到有效值。
      */
  VulId: number
}

/**
 * SeparateMalwares返回参数结构体
 */
export interface SeparateMalwaresResponse {
  /**
   * 隔离成功的id数组，若无则返回空数组
   */
  SuccessIds: Array<number>

  /**
   * 隔离失败的id数组，若无则返回空数组
   */
  FailedIds: Array<number>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeRiskDnsList请求参数结构体
 */
export interface DescribeRiskDnsListRequest {
  /**
   * 需要返回的数量，默认为10，最大值为100
   */
  Limit?: number

  /**
   * 偏移量，默认为0。
   */
  Offset?: number

  /**
      * 过滤条件。
<li>IpOrAlias - String - 是否必填：否 - 主机ip或别名筛选</li>
<li>Url - String - 是否必填：否 - Url筛选</li>
<li>Status - String - 是否必填：否 - 状态筛选0:待处理；2:信任；3:不信任</li>
<li>MergeBeginTime - String - 是否必填：否 - 最近访问开始时间</li>
<li>MergeEndTime - String - 是否必填：否 - 最近访问结束时间</li>
      */
  Filters?: Array<Filter>

  /**
   * 排序方式：根据请求次数排序：asc-升序/desc-降序
   */
  Order?: string

  /**
   * 排序字段：AccessCount-请求次数
   */
  By?: string
}

/**
 * DescribeStrategyExist请求参数结构体
 */
export interface DescribeStrategyExistRequest {
  /**
   * 策略名
   */
  StrategyName: string
}

/**
 * DescribeSecurityDynamics请求参数结构体
 */
export interface DescribeSecurityDynamicsRequest {
  /**
   * 返回数量，最大值为100。
   */
  Limit?: number

  /**
   * 偏移量，默认为0。
   */
  Offset?: number
}

/**
 * CheckBashRuleParams请求参数结构体
 */
export interface CheckBashRuleParamsRequest {
  /**
   * 校验内容 Name或Rule ，两个都要校验时逗号分割
   */
  CheckField: string

  /**
   * 在事件列表中新增白名时需要提交事件ID
   */
  EventId?: number

  /**
   * 填入的规则名称
   */
  Name?: string

  /**
   * 用户填入的正则表达式：“正则表达式“需与“提交EventId对应的命令内容”相匹配
   */
  Rule?: string

  /**
   * 编辑时传的规则id
   */
  Id?: number
}

/**
 * DescribeIgnoreBaselineRule请求参数结构体
 */
export interface DescribeIgnoreBaselineRuleRequest {
  /**
   * 分页参数 最大100条
   */
  Limit: number

  /**
   * 分页参数
   */
  Offset: number

  /**
   * 检测项名称
   */
  RuleName?: string
}

/**
 * ExportNonlocalLoginPlaces返回参数结构体
 */
export interface ExportNonlocalLoginPlacesResponse {
  /**
   * 导出文件下载链接地址。
   */
  DownloadUrl: string

  /**
   * 导出任务ID
   */
  TaskId: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ExportMaliciousRequests请求参数结构体
 */
export interface ExportMaliciousRequestsRequest {
  /**
   * 过滤参数
   */
  Filters?: Array<Filters>
}

/**
 * ModifyAutoOpenProVersionConfig请求参数结构体
 */
export interface ModifyAutoOpenProVersionConfigRequest {
  /**
      * 设置自动开通状态。
<li>CLOSE：关闭</li>
<li>OPEN：打开</li>
      */
  Status: string
}

/**
 * DescribeWebPageProtectStat请求参数结构体
 */
export type DescribeWebPageProtectStatRequest = null

/**
 * ExportVulDetectionReport请求参数结构体
 */
export interface ExportVulDetectionReportRequest {
  /**
   * 漏洞扫描任务id（不同于出参的导出检测报告的任务Id）
   */
  TaskId: number

  /**
   * 过滤参数
   */
  Filters?: Array<Filters>

  /**
   * 需要返回的数量，默认为10，最大值为100
   */
  Limit?: number

  /**
   * 偏移量，默认为0。
   */
  Offset?: number
}

/**
 * ExportMalwares返回参数结构体
 */
export interface ExportMalwaresResponse {
  /**
   * 导出文件下载链接地址。
   */
  DownloadUrl: string

  /**
   * 任务id
   */
  TaskId: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeScanVulSetting请求参数结构体
 */
export type DescribeScanVulSettingRequest = null

/**
 * DescribeESHits请求参数结构体
 */
export interface DescribeESHitsRequest {
  /**
   * ES查询条件JSON
   */
  Query: string

  /**
   * 偏移量，默认为0。
   */
  Offset?: number

  /**
   * 返回数量，最大值为100。
   */
  Limit?: number
}

/**
 * DescribeBaselineRule请求参数结构体
 */
export interface DescribeBaselineRuleRequest {
  /**
   * 基线id
   */
  BaselineId: number

  /**
   * 分页参数 最大100条
   */
  Limit: number

  /**
   * 分页参数
   */
  Offset: number

  /**
   * 危害等级
   */
  Level?: Array<number>

  /**
   * 状态
   */
  Status?: number

  /**
   * 主机quuid
   */
  Quuid?: string

  /**
   * 主机uuid
   */
  Uuid?: string
}

/**
 * DescribeHistoryAccounts请求参数结构体
 */
export interface DescribeHistoryAccountsRequest {
  /**
   * 云镜客户端唯一Uuid。
   */
  Uuid: string

  /**
   * 返回数量，默认为10，最大值为100。
   */
  Limit?: number

  /**
   * 偏移量，默认为0。
   */
  Offset?: number

  /**
      * 过滤条件。
<li>Username - String - 是否必填：否 - 帐号名</li>
      */
  Filters?: Array<Filter>
}

/**
 * CancelIgnoreVul返回参数结构体
 */
export interface CancelIgnoreVulResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * IgnoreImpactedHosts返回参数结构体
 */
export interface IgnoreImpactedHostsResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * RescanImpactedHost返回参数结构体
 */
export interface RescanImpactedHostResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeStrategyExist返回参数结构体
 */
export interface DescribeStrategyExistResponse {
  /**
      * 策略是否存在, 1是 0否
注意：此字段可能返回 null，表示取不到有效值。
      */
  IfExist: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteReverseShellEvents请求参数结构体
 */
export interface DeleteReverseShellEventsRequest {
  /**
   * ID数组. (最大100条)
   */
  Ids: Array<number>
}

/**
 * DescribeSearchLogs返回参数结构体
 */
export interface DescribeSearchLogsResponse {
  /**
   * 历史搜索记录 保留最新的10条
   */
  Data: Array<string>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeServersAndRiskAndFirstInfo请求参数结构体
 */
export type DescribeServersAndRiskAndFirstInfoRequest = null

/**
 * IgnoreImpactedHosts请求参数结构体
 */
export interface IgnoreImpactedHostsRequest {
  /**
   * 漏洞ID数组。
   */
  Ids: Array<number>
}

/**
 * DescribeMachines请求参数结构体
 */
export interface DescribeMachinesRequest {
  /**
      * 机器所属专区类型 
CVM 云服务器
BM 黑石
ECM 边缘计算
LH 轻量应用服务器
Other 混合云专区
      */
  MachineType: string

  /**
   * 机器所属地域。如：ap-guangzhou，ap-shanghai
   */
  MachineRegion: string

  /**
   * 返回数量，默认为10，最大值为100。
   */
  Limit?: number

  /**
   * 偏移量，默认为0。
   */
  Offset?: number

  /**
      * 过滤条件。
<li>Keywords - String - 是否必填：否 - 查询关键字 </li>
<li>Status - String - 是否必填：否 - 客户端在线状态（OFFLINE: 离线/关机 | ONLINE: 在线 | UNINSTALLED：未安装 | AGENT_OFFLINE 离线| AGENT_SHUTDOWN 已关机）</li>
<li>Version - String  是否必填：否 - 当前防护版本（ PRO_VERSION：专业版 | BASIC_VERSION：基础版）</li>
<li>Risk - String 是否必填: 否 - 风险主机( yes ) </li>
<li>Os -String 是否必填: 否 - 操作系统( DescribeMachineOsList 接口 值 )
每个过滤条件只支持一个值，暂不支持多个值“或”关系查询
      */
  Filters?: Array<Filter>

  /**
   * 机器所属业务ID列表
   */
  ProjectIds?: Array<number>
}

/**
 * DeletePrivilegeRules请求参数结构体
 */
export interface DeletePrivilegeRulesRequest {
  /**
   * ID数组，最大100条。
   */
  Ids: Array<number>
}

/**
 * DescribeMalwareInfo请求参数结构体
 */
export interface DescribeMalwareInfoRequest {
  /**
   * 唯一ID
   */
  Id: number
}

/**
 * DescribeVersionStatistics请求参数结构体
 */
export type DescribeVersionStatisticsRequest = null

/**
 * ExportPrivilegeEvents返回参数结构体
 */
export interface ExportPrivilegeEventsResponse {
  /**
   * 导出文件下载链接地址。
   */
  DownloadUrl: string

  /**
   * 导出任务ID
   */
  TaskId: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 常用登录地
 */
export interface UsualPlace {
  /**
   * ID。
   */
  Id: number

  /**
   * 云镜客户端唯一标识UUID。
   */
  Uuid: string

  /**
   * 国家 ID。
   */
  CountryId: number

  /**
   * 省份 ID。
   */
  ProvinceId: number

  /**
   * 城市 ID。
   */
  CityId: number
}

/**
 * DescribeReverseShellEvents请求参数结构体
 */
export interface DescribeReverseShellEventsRequest {
  /**
   * 返回数量，最大值为100。
   */
  Limit?: number

  /**
   * 偏移量，默认为0。
   */
  Offset?: number

  /**
      * 过滤条件。
<li>Keywords - String - 是否必填：否 - 关键字(主机内网IP|进程名)</li>
      */
  Filters?: Array<Filter>
}

/**
 * 反弹Shell数据
 */
export interface ReverseShell {
  /**
   * ID 主键
   */
  Id: number

  /**
   * 云镜UUID
   */
  Uuid: string

  /**
   * 主机ID
   */
  Quuid: string

  /**
   * 主机内网IP
   */
  Hostip: string

  /**
   * 目标IP
   */
  DstIp: string

  /**
   * 目标端口
   */
  DstPort: number

  /**
   * 进程名
   */
  ProcessName: string

  /**
   * 进程路径
   */
  FullPath: string

  /**
   * 命令详情
   */
  CmdLine: string

  /**
   * 执行用户
   */
  UserName: string

  /**
   * 执行用户组
   */
  UserGroup: string

  /**
   * 父进程名
   */
  ParentProcName: string

  /**
   * 父进程用户
   */
  ParentProcUser: string

  /**
   * 父进程用户组
   */
  ParentProcGroup: string

  /**
   * 父进程路径
   */
  ParentProcPath: string

  /**
   * 处理状态：0-待处理 2-白名单
   */
  Status: number

  /**
   * 产生时间
   */
  CreateTime: string

  /**
   * 主机名
   */
  MachineName: string

  /**
   * 进程树
   */
  ProcTree: string

  /**
   * 检测方法
   */
  DetectBy: number
}

/**
 * DescribeAttackVulTypeList请求参数结构体
 */
export type DescribeAttackVulTypeListRequest = null

/**
 * DescribeLogStorageStatistic请求参数结构体
 */
export type DescribeLogStorageStatisticRequest = null

/**
 * DescribeAssetRecentMachineInfo请求参数结构体
 */
export interface DescribeAssetRecentMachineInfoRequest {
  /**
   * 开始时间，如：2020-09-22
   */
  BeginDate: string

  /**
   * 结束时间，如：2020-09-22
   */
  EndDate: string
}

/**
 * CheckBashRuleParams返回参数结构体
 */
export interface CheckBashRuleParamsResponse {
  /**
   * 0=校验通过  1=规则名称校验不通过 2=正则表达式校验不通过
   */
  ErrCode: number

  /**
   * 校验信息
   */
  ErrMsg: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ScanVulSetting返回参数结构体
 */
export interface ScanVulSettingResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteProtectDir请求参数结构体
 */
export interface DeleteProtectDirRequest {
  /**
   * 删除的目录ID 最大100条
   */
  Ids: Array<string>
}

/**
 * ExportIgnoreBaselineRule返回参数结构体
 */
export interface ExportIgnoreBaselineRuleResponse {
  /**
   * 文件下载地址
   */
  DownloadUrl: string

  /**
   * 导出任务Id , 可通过ExportTasks 接口下载
   */
  TaskId: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeBanStatus返回参数结构体
 */
export interface DescribeBanStatusResponse {
  /**
   * 阻断开关状态 0:关闭 1:开启
   */
  Status: number

  /**
   * 是否弹窗提示信息 false: 关闭，true: 开启
   */
  ShowTips: boolean

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 漏洞详细信息
 */
export interface VulDetailInfo {
  /**
   * 漏洞ID
   */
  VulId: number

  /**
   * 漏洞级别
   */
  Level: number

  /**
   * 漏洞名称
   */
  Name: string

  /**
   * cve编号
   */
  CveId: string

  /**
   * 漏洞分类
   */
  VulCategory: number

  /**
   * 漏洞描述
   */
  Descript: string

  /**
   * 修复建议
   */
  Fix: string

  /**
   * 参考链接
   */
  Reference: string

  /**
   * CVSS评分
   */
  CvssScore: number

  /**
   * CVSS详情
   */
  Cvss: string

  /**
   * 发布时间
   */
  PublishTime: string
}

/**
 * DescribeServersAndRiskAndFirstInfo返回参数结构体
 */
export interface DescribeServersAndRiskAndFirstInfoResponse {
  /**
   * 风险文件数
   */
  RiskFileCount: number

  /**
   * 今日新增风险文件数
   */
  AddRiskFileCount: number

  /**
   * 受影响服务器台数
   */
  ServersCount: number

  /**
   * 是否试用：true-是，false-否
   */
  IsFirstCheck: boolean

  /**
   * 木马最近检测时间
   */
  ScanTime: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribePrivilegeRules请求参数结构体
 */
export interface DescribePrivilegeRulesRequest {
  /**
   * 返回数量，最大值为100。
   */
  Limit?: number

  /**
   * 偏移量，默认为0。
   */
  Offset?: number

  /**
      * 过滤条件。
<li>Keywords - String - 是否必填：否 - 关键字(进程名称)</li>
      */
  Filters?: Array<Filter>
}

/**
 * 专家服务-月巡检报告
 */
export interface MonthInspectionReport {
  /**
   * 巡检报告名称
   */
  ReportName: string

  /**
   * 巡检报告下载地址
   */
  ReportPath: string

  /**
   * 巡检报告更新时间
   */
  ModifyTime: string
}

/**
 * DescribeWebPageGeneralize请求参数结构体
 */
export type DescribeWebPageGeneralizeRequest = null

/**
 * UpdateBaselineStrategy请求参数结构体
 */
export interface UpdateBaselineStrategyRequest {
  /**
   * 策略id
   */
  StrategyId: number

  /**
   * 策略名称
   */
  StrategyName: string

  /**
   * 检测周期
   */
  ScanCycle: number

  /**
   * 定期检测时间，该时间下发扫描
   */
  ScanAt: string

  /**
   * 该策略下选择的基线id数组
   */
  CategoryIds: Array<string>

  /**
   * 扫描范围是否全部服务器, 1:是  0:否, 为1则为全部专业版主机
   */
  IsGlobal: number

  /**
      * 云主机类型：
cvm：腾讯云服务器
bm：裸金属
ecm：边缘计算主机
lh:轻量应用服务器
other:混合云机器
      */
  MachineType: string

  /**
   * 主机地域 ap-guangzhou
   */
  RegionCode: string

  /**
   * 主机id数组
   */
  Quuids: Array<string>
}

/**
 * ModifyWarningSetting请求参数结构体
 */
export interface ModifyWarningSettingRequest {
  /**
   * 告警设置的修改内容
   */
  WarningObjects: Array<WarningObject>
}

/**
 * DescribeBruteAttackList返回参数结构体
 */
export interface DescribeBruteAttackListResponse {
  /**
      * 总数
注意：此字段可能返回 null，表示取不到有效值。
      */
  TotalCount: number

  /**
      * 密码破解列表
注意：此字段可能返回 null，表示取不到有效值。
      */
  BruteAttackList: Array<BruteAttackInfo>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeAssetInfo请求参数结构体
 */
export type DescribeAssetInfoRequest = null

/**
 * DescribeMachineRegions返回参数结构体
 */
export interface DescribeMachineRegionsResponse {
  /**
   * CVM 云服务器地域列表
   */
  CVM: Array<RegionInfo>

  /**
   * BM 黑石机器地域列表
   */
  BM: Array<RegionInfo>

  /**
   * LH 轻量应用服务器地域列表
   */
  LH: Array<RegionInfo>

  /**
   * ECM 边缘计算服务器地域列表
   */
  ECM: Array<RegionInfo>

  /**
   * Other 混合云地域列表
   */
  Other: Array<RegionInfo>

  /**
   * 所有地域列表(包含以上所有地域)
   */
  ALL: Array<RegionInfo>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * UntrustMalwares请求参数结构体
 */
export interface UntrustMalwaresRequest {
  /**
   * 木马ID数组 (最大100条)
   */
  Ids: Array<number>
}

/**
 * UntrustMalwares返回参数结构体
 */
export interface UntrustMalwaresResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeAccountStatistics返回参数结构体
 */
export interface DescribeAccountStatisticsResponse {
  /**
   * 帐号统计列表记录总数。
   */
  TotalCount: number

  /**
   * 帐号统计列表。
   */
  AccountStatistics: Array<AccountStatistics>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeSearchExportList请求参数结构体
 */
export interface DescribeSearchExportListRequest {
  /**
   * ES查询条件JSON
   */
  Query: string
}

/**
 * ScanAsset请求参数结构体
 */
export interface ScanAssetRequest {
  /**
   * 资产指纹类型id列表
   */
  AssetTypeIds?: Array<number>

  /**
   * Quuid列表
   */
  Quuids?: Array<string>
}

/**
 * DescribeBaselineRule返回参数结构体
 */
export interface DescribeBaselineRuleResponse {
  /**
   * 分页查询记录总数
   */
  TotalCount: number

  /**
      * 基线检测项列表
注意：此字段可能返回 null，表示取不到有效值。
      */
  BaselineRuleList: Array<BaselineRuleInfo>

  /**
      * 是否显示说明列：true-是，false-否
注意：此字段可能返回 null，表示取不到有效值。
      */
  ShowRuleRemark: boolean

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteMaliciousRequests返回参数结构体
 */
export interface DeleteMaliciousRequestsResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ExportBruteAttacks返回参数结构体
 */
export interface ExportBruteAttacksResponse {
  /**
   * 导出文件下载链接地址。
   */
  DownloadUrl: string

  /**
   * 导出任务ID
   */
  TaskId: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 防护目录关联服务器列表信息
 */
export interface ProtectDirRelatedServer {
  /**
   * 唯一ID
   */
  Id: string

  /**
   * 服务器名称
   */
  HostName: string

  /**
   * 服务器IP
   */
  HostIp: string

  /**
   * 服务器系统
   */
  MachineOs: string

  /**
   * 关联目录数
   */
  RelateDirNum: number

  /**
   * 防护状态
   */
  ProtectStatus: number

  /**
   * 防护开关
   */
  ProtectSwitch: number

  /**
   * 自动恢复开关
   */
  AutoRestoreSwitchStatus: number

  /**
   * 服务器唯一ID
   */
  Quuid: string

  /**
   * 是否已经授权
   */
  Authorization: boolean

  /**
   * 异常状态
   */
  Exception: number

  /**
   * 过渡进度
   */
  Progress: number

  /**
   * 异常信息
   */
  ExceptionMessage: string
}

/**
 * DeleteTags返回参数结构体
 */
export interface DeleteTagsResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteMachine返回参数结构体
 */
export interface DeleteMachineResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ScanVul请求参数结构体
 */
export interface ScanVulRequest {
  /**
   * 漏洞类型：1: web应用漏洞 2:系统组件漏洞 (多选英文;分隔)
   */
  VulCategories: string

  /**
   * 危害等级：1-低危；2-中危；3-高危；4-严重 (多选英文;分隔)
   */
  VulLevels: string

  /**
   * 服务器分类：1:专业版服务器；2:自选服务器
   */
  HostType: number

  /**
   * 自选服务器时生效，主机quuid的string数组
   */
  QuuidList?: Array<string>

  /**
   * 是否是应急漏洞 0 否 1 是
   */
  VulEmergency?: number

  /**
   * 超时时长 单位秒 默认 3600 秒
   */
  TimeoutPeriod?: number

  /**
   * 需要扫描的漏洞id
   */
  VulIds?: Array<number>
}

/**
 * RecoverMalwares请求参数结构体
 */
export interface RecoverMalwaresRequest {
  /**
   * 木马Id数组（最大100条）
   */
  Ids: Array<number>
}

/**
 * 标签相关服务器信息
 */
export interface TagMachine {
  /**
   * ID
   */
  Id: string

  /**
   * 主机ID
   */
  Quuid: string

  /**
   * 主机名称
   */
  MachineName: string

  /**
   * 主机内网IP
   */
  MachineIp: string

  /**
   * 主机外网IP
   */
  MachineWanIp: string

  /**
   * 主机区域
   */
  MachineRegion: string

  /**
   * 主机区域类型
   */
  MachineType: string
}

/**
 * StopNoticeBanTips请求参数结构体
 */
export type StopNoticeBanTipsRequest = null

/**
 * DescribeScanMalwareSchedule请求参数结构体
 */
export type DescribeScanMalwareScheduleRequest = null

/**
 * DescribeBashEvents返回参数结构体
 */
export interface DescribeBashEventsResponse {
  /**
   * 总条数
   */
  TotalCount: number

  /**
   * 高危命令事件列表
   */
  List: Array<BashEvent>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * UpdateMachineTags返回参数结构体
 */
export interface UpdateMachineTagsResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeBashEvents请求参数结构体
 */
export interface DescribeBashEventsRequest {
  /**
   * 返回数量，默认为10，最大值为100。
   */
  Limit?: number

  /**
   * 偏移量，默认为0。
   */
  Offset?: number

  /**
      * 过滤条件。
<li>Keywords - String - 是否必填：否 - 关键词(主机内网IP)</li>
      */
  Filters?: Array<Filter>
}

/**
 * DeleteMachine请求参数结构体
 */
export interface DeleteMachineRequest {
  /**
   * 云镜客户端Uuid。
   */
  Uuid: string
}

/**
 * 标准阻断模式规则
 */
export interface BruteAttackRule {
  /**
   * 爆破事件发生的时间范围，单位：秒
   */
  TimeRange: number

  /**
   * 爆破事件失败次数
   */
  LoginFailTimes: number
}

/**
 * 本地提权数据
 */
export interface PrivilegeEscalationProcess {
  /**
   * 数据ID
   */
  Id: number

  /**
   * 云镜ID
   */
  Uuid: string

  /**
   * 主机ID
   */
  Quuid: string

  /**
   * 主机内网IP
   */
  Hostip: string

  /**
   * 进程名
   */
  ProcessName: string

  /**
   * 进程路径
   */
  FullPath: string

  /**
   * 执行命令
   */
  CmdLine: string

  /**
   * 用户名
   */
  UserName: string

  /**
   * 用户组
   */
  UserGroup: string

  /**
   * 进程文件权限
   */
  ProcFilePrivilege: string

  /**
   * 父进程名
   */
  ParentProcName: string

  /**
   * 父进程用户名
   */
  ParentProcUser: string

  /**
   * 父进程用户组
   */
  ParentProcGroup: string

  /**
   * 父进程路径
   */
  ParentProcPath: string

  /**
   * 进程树
   */
  ProcTree: string

  /**
   * 处理状态：0-待处理 2-白名单
   */
  Status: number

  /**
   * 发生时间
   */
  CreateTime: string

  /**
   * 机器名
   */
  MachineName: string
}

/**
 * 异地登录白名单
 */
export interface LoginWhiteLists {
  /**
   * 记录ID
   */
  Id: number

  /**
   * 云镜客户端ID
   */
  Uuid: string

  /**
   * 白名单地域
   */
  Places: Array<Place>

  /**
   * 白名单用户（多个用户逗号隔开）
   */
  UserName: string

  /**
   * 白名单IP（多个IP逗号隔开）
   */
  SrcIp: string

  /**
   * 是否为全局规则
   */
  IsGlobal: boolean

  /**
   * 创建白名单时间
   */
  CreateTime: string

  /**
   * 修改白名单时间
   */
  ModifyTime: string

  /**
   * 机器名
   */
  MachineName: string

  /**
   * 机器IP
   */
  HostIp: string

  /**
   * 起始时间
   */
  StartTime: string

  /**
   * 结束时间
   */
  EndTime: string
}

/**
 * DeleteSearchTemplate请求参数结构体
 */
export interface DeleteSearchTemplateRequest {
  /**
   * 模板ID
   */
  Id: number
}

/**
 * ChangeRuleEventsIgnoreStatus返回参数结构体
 */
export interface ChangeRuleEventsIgnoreStatusResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeletePrivilegeRules返回参数结构体
 */
export interface DeletePrivilegeRulesResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateProtectServer请求参数结构体
 */
export interface CreateProtectServerRequest {
  /**
   * 防护目录地址
   */
  ProtectDir: string

  /**
   * 防护机器 信息
   */
  ProtectHostConfig: Array<ProtectHostConfig>
}

/**
 * DescribeMachineList请求参数结构体
 */
export interface DescribeMachineListRequest {
  /**
      * 云主机类型。
<li>CVM：表示虚拟主机</li>
<li>BM:  表示黑石物理机</li>
<li>ECM:  表示边缘计算服务器</li>
<li>LH:  表示轻量应用服务器</li>
<li>Other:  表示混合云机器</li>
      */
  MachineType: string

  /**
   * 机器所属地域。如：ap-guangzhou，ap-shanghai
   */
  MachineRegion: string

  /**
   * 返回数量，默认为10，最大值为100。
   */
  Limit?: number

  /**
   * 偏移量，默认为0。
   */
  Offset?: number

  /**
      * 过滤条件。
<li>Keywords - String - 是否必填：否 - 查询关键字 </li>
<li>Status - String - 是否必填：否 - 客户端在线状态（OFFLINE: 离线 | ONLINE: 在线 | UNINSTALLED：未安装）</li>
<li>Version - String  是否必填：否 - 当前防护版本（ PRO_VERSION：专业版 | BASIC_VERSION：基础版）</li>
每个过滤条件只支持一个值，暂不支持多个值“或”关系查询
      */
  Filters?: Array<AssetFilters>
}

/**
 * CreateEmergencyVulScan返回参数结构体
 */
export interface CreateEmergencyVulScanResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 告警更新或插入的参数
 */
export interface WarningObject {
  /**
   * 事件告警类型；1：离线，2：木马，3：异常登录，4：爆破，5：漏洞（已拆分为9-12四种类型）6：高位命令，7：反弹sell，8：本地提权，9：系统组件漏洞，10：web应用漏洞，11：应急漏洞，12：安全基线
   */
  Type?: number

  /**
   * 1: 关闭告警 0: 开启告警
   */
  DisablePhoneWarning?: number

  /**
   * 开始时间，格式: HH:mm
   */
  BeginTime?: string

  /**
   * 结束时间，格式: HH:mm
   */
  EndTime?: string

  /**
   * 漏洞等级控制位二进制，每一位对应页面漏洞等级的开启关闭：低中高（0:关闭；1：开启），例如：101 → 同时勾选低+高；01→(登录审计)疑似不告警，高危告警
   */
  ControlBits?: string
}

/**
 * DescribeIndexList返回参数结构体
 */
export interface DescribeIndexListResponse {
  /**
   * ES 索引信息
   */
  Data: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyWebPageProtectDir请求参数结构体
 */
export interface ModifyWebPageProtectDirRequest {
  /**
   * 网站防护目录地址
   */
  ProtectDirAddr: string

  /**
   * 网站防护目录名称
   */
  ProtectDirName: string

  /**
   * 防护文件类型,分号分割 ;
   */
  ProtectFileType: string

  /**
   * 防护机器列表信息
   */
  HostConfig: Array<ProtectHostConfig>
}

/**
 * DescribeWebPageGeneralize返回参数结构体
 */
export interface DescribeWebPageGeneralizeResponse {
  /**
   * 防护监测 0 未开启 1 已开启 2 异常
   */
  ProtectMonitor: number

  /**
   * 防护目录数
   */
  ProtectDirNum: number

  /**
   * 防护文件数
   */
  ProtectFileNum: number

  /**
   * 篡改文件数
   */
  TamperFileNum: number

  /**
   * 篡改数
   */
  TamperNum: number

  /**
   * 今日防护数
   */
  ProtectToday: number

  /**
   * 防护主机数
   */
  ProtectHostNum: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeOpenPortStatistics返回参数结构体
 */
export interface DescribeOpenPortStatisticsResponse {
  /**
   * 端口统计列表总数
   */
  TotalCount: number

  /**
   * 端口统计数据列表
   */
  OpenPortStatistics: Array<OpenPortStatistics>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteAttackLogs返回参数结构体
 */
export interface DeleteAttackLogsResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 安全事件消息数据。
 */
export interface SecurityDynamic {
  /**
   * 云镜客户端UUID。
   */
  Uuid: string

  /**
   * 安全事件发生时间。
   */
  EventTime: string

  /**
      * 安全事件类型。
<li>MALWARE：木马事件</li>
<li>NON_LOCAL_LOGIN：异地登录</li>
<li>BRUTEATTACK_SUCCESS：密码破解成功</li>
<li>VUL：漏洞</li>
<li>BASELINE：安全基线</li>
      */
  EventType: string

  /**
   * 安全事件消息。
   */
  Message: string

  /**
      * 安全事件等级。
<li>RISK: 严重</li>
<li>HIGH: 高危</li>
<li>NORMAL: 中危</li>
<li>LOW: 低危</li>
      */
  SecurityLevel: string
}

/**
 * OpenProVersionPrepaid请求参数结构体
 */
export interface OpenProVersionPrepaidRequest {
  /**
   * 购买相关参数。
   */
  ChargePrepaid: ChargePrepaid

  /**
   * 需要开通专业版主机信息数组。
   */
  Machines: Array<ProVersionMachine>
}

/**
 * DescribeMalWareList请求参数结构体
 */
export interface DescribeMalWareListRequest {
  /**
   * 需要返回的数量，默认为10，最大值为100
   */
  Limit?: number

  /**
   * 偏移量，默认为0。
   */
  Offset?: number

  /**
      * 过滤条件。
<li>IpOrAlias - String - 是否必填：否 - 主机ip或别名筛选</li>
<li>FilePath - String - 是否必填：否 - 路径筛选</li>
<li>VirusName - String - 是否必填：否 - 描述筛选</li>
<li>CreateBeginTime - String - 是否必填：否 - 创建时间筛选-开始时间</li>
<li>CreateEndTime - String - 是否必填：否 - 创建时间筛选-结束时间</li>
<li>Status - String - 是否必填：否 - 状态筛选 4待处理,5信任沃尔玛可哦啊吗,6已隔离,10隔离中,11恢复隔离中</li>
      */
  Filters?: Array<Filter>

  /**
   * 检测排序 CreateTime
   */
  By?: string

  /**
   * 排序方式 ASC,DESC
   */
  Order?: string
}

/**
 * DescribeProVersionInfo返回参数结构体
 */
export interface DescribeProVersionInfoResponse {
  /**
   * 后付费昨日扣费
   */
  PostPayCost: number

  /**
   * 新增主机是否自动开通专业版
   */
  IsAutoOpenProVersion: boolean

  /**
   * 开通专业版主机数
   */
  ProVersionNum: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ExportBruteAttacks请求参数结构体
 */
export interface ExportBruteAttacksRequest {
  /**
   * 过滤参数
   */
  Filters?: Array<Filters>
}

/**
 * DescribeSecurityEventsCnt请求参数结构体
 */
export type DescribeSecurityEventsCntRequest = null

/**
 * DescribeMachineOsList返回参数结构体
 */
export interface DescribeMachineOsListResponse {
  /**
   * 操作系统列表
   */
  List: Array<OsName>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeIndexList请求参数结构体
 */
export type DescribeIndexListRequest = null

/**
 * 批量导入机器信息.
 */
export interface EffectiveMachineInfo {
  /**
      * 机器名称
注意：此字段可能返回 null，表示取不到有效值。
      */
  MachineName: string

  /**
      * 机器公网ip
注意：此字段可能返回 null，表示取不到有效值。
      */
  MachinePublicIp: string

  /**
      * 机器内网ip
注意：此字段可能返回 null，表示取不到有效值。
      */
  MachinePrivateIp: string

  /**
      * 机器标签
注意：此字段可能返回 null，表示取不到有效值。
      */
  MachineTag: Array<MachineTag>

  /**
      * 机器Quuid
注意：此字段可能返回 null，表示取不到有效值。
      */
  Quuid: string

  /**
      * 云镜Uuid
注意：此字段可能返回 null，表示取不到有效值。
      */
  Uuid: string
}

/**
 * DescribeVulCountByDates返回参数结构体
 */
export interface DescribeVulCountByDatesResponse {
  /**
      * 批量获得对应天数的漏洞数量
注意：此字段可能返回 null，表示取不到有效值。
      */
  VulCount: Array<number>

  /**
   * 批量获得对应天数的主机数量
   */
  HostCount: Array<number>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeTagMachines返回参数结构体
 */
export interface DescribeTagMachinesResponse {
  /**
   * 列表数据
   */
  List: Array<TagMachine>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ExportMaliciousRequests返回参数结构体
 */
export interface ExportMaliciousRequestsResponse {
  /**
   * 导出文件下载链接地址。
   */
  DownloadUrl: string

  /**
   * 导出任务Id , 可通过ExportTasks 接口下载
   */
  TaskId: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 防护目录列表集
 */
export interface ProtectDirInfo {
  /**
   * 网站名称
   */
  DirName: string

  /**
   * 网站防护目录地址
   */
  DirPath: string

  /**
   * 关联服务器数
   */
  RelatedServerNum: number

  /**
   * 防护服务器数
   */
  ProtectServerNum: number

  /**
   * 未防护服务器数
   */
  NoProtectServerNum: number

  /**
   * 唯一ID
   */
  Id: string

  /**
   * 防护状态
   */
  ProtectStatus: number

  /**
   * 防护异常
   */
  ProtectException: number

  /**
   * 自动恢复开关 (Filters 过滤Quuid 时 返回) 默认0
   */
  AutoRestoreSwitchStatus: number
}

/**
 * DeleteBashRules请求参数结构体
 */
export interface DeleteBashRulesRequest {
  /**
   * ID数组，最大100条。
   */
  Ids: Array<number>
}

/**
 * CreateProtectServer返回参数结构体
 */
export interface CreateProtectServerResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * OpenProVersion返回参数结构体
 */
export interface OpenProVersionResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ExportBaselineEffectHostList返回参数结构体
 */
export interface ExportBaselineEffectHostListResponse {
  /**
      * 下载地址
注意：此字段可能返回 null，表示取不到有效值。
      */
  DownloadUrl: string

  /**
   * 导出任务id 可通过 ExportTasks接口下载
   */
  TaskId: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeHistoryService请求参数结构体
 */
export type DescribeHistoryServiceRequest = null

/**
 * DescribeWarningList请求参数结构体
 */
export type DescribeWarningListRequest = null

/**
 * SyncAssetScan请求参数结构体
 */
export interface SyncAssetScanRequest {
  /**
   * 是否同步：true-是 false-否；默认false
   */
  Sync: boolean
}

/**
 * DescribeServerRelatedDirInfo请求参数结构体
 */
export interface DescribeServerRelatedDirInfoRequest {
  /**
   * 唯一ID
   */
  Id: number
}

/**
 * DescribeESAggregations请求参数结构体
 */
export interface DescribeESAggregationsRequest {
  /**
   * ES聚合条件JSON
   */
  Query: string
}

/**
 * DescribeReverseShellRules返回参数结构体
 */
export interface DescribeReverseShellRulesResponse {
  /**
   * 列表内容
   */
  List: Array<ReverseShellRule>

  /**
   * 总条数
   */
  TotalCount: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeBruteAttackList请求参数结构体
 */
export interface DescribeBruteAttackListRequest {
  /**
   * 需要返回的数量，最大值为100
   */
  Limit?: number

  /**
   * 偏移量，默认为0。
   */
  Offset?: number

  /**
      * 过滤条件。
<li>IpOrAlias - String - 是否必填：否 - 主机ip或别名筛选</li>
<li>Uuid - String - 是否必填：否 - 云镜唯一Uuid</li>
<li>Status - String - 是否必填：否 - 状态筛选：失败：FAILED 成功：SUCCESS</li>
<li>UserName - String - 是否必填：否 - UserName筛选</li>
<li>SrcIp - String - 是否必填：否 - 来源ip筛选</li>
<li>CreateBeginTime - String - 是否必填：否 - 首次攻击时间筛选，开始时间</li>
<li>CreateEndTime - String - 是否必填：否 - 首次攻击时间筛选，结束时间</li>
<li>ModifyBeginTime - String - 是否必填：否 - 最近攻击时间筛选，开始时间</li>
<li>ModifyEndTime - String - 是否必填：否 - 最近攻击时间筛选，结束时间</li>
<li>Banned - String - 是否必填：否 - 阻断状态筛选，多个用","分割：0-未阻断（全局ZK开关关闭），82-未阻断(非专业版)，83-未阻断(已加白名单)，1-已阻断，2-未阻断-程序异常，3-未阻断-内网攻击暂不支持阻断，4-未阻断-安平暂不支持阻断</li>
      */
  Filters?: Array<Filter>
}

/**
 * DescribeUndoVulCounts请求参数结构体
 */
export interface DescribeUndoVulCountsRequest {
  /**
   * 漏洞分类，最小值为1，最大值为5
   */
  VulCategory?: number

  /**
   * 是否应急漏洞筛选, 是 : yes
   */
  IfEmergency?: string
}

/**
 * ScanAsset返回参数结构体
 */
export interface ScanAssetResponse {
  /**
      * 任务id
注意：此字段可能返回 null，表示取不到有效值。
      */
  TaskId: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyProVersionRenewFlag返回参数结构体
 */
export interface ModifyProVersionRenewFlagResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 主机列表
 */
export interface Machine {
  /**
   * 主机名称。
   */
  MachineName: string

  /**
   * 主机系统。
   */
  MachineOs: string

  /**
      * 主机状态。
<li>OFFLINE: 离线  </li>
<li>ONLINE: 在线</li>
<li>SHUTDOWN: 已关机</li>
      */
  MachineStatus: string

  /**
   * 云镜客户端唯一Uuid，若客户端长时间不在线将返回空字符。
   */
  Uuid: string

  /**
   * CVM或BM机器唯一Uuid。
   */
  Quuid: string

  /**
   * 漏洞数。
   */
  VulNum: number

  /**
   * 主机IP。
   */
  MachineIp: string

  /**
      * 是否是专业版。
<li>true： 是</li>
<li>false：否</li>
      */
  IsProVersion: boolean

  /**
   * 主机外网IP。
   */
  MachineWanIp: string

  /**
      * 主机状态。
<li>POSTPAY: 表示后付费，即按量计费  </li>
<li>PREPAY: 表示预付费，即包年包月</li>
      */
  PayMode: string

  /**
   * 木马数。
   */
  MalwareNum: number

  /**
   * 标签信息
   */
  Tag: Array<MachineTag>

  /**
   * 基线风险数。
   */
  BaselineNum: number

  /**
   * 网络风险数。
   */
  CyberAttackNum: number

  /**
      * 风险状态。
<li>SAFE：安全</li>
<li>RISK：风险</li>
<li>UNKNOWN：未知</li>
      */
  SecurityStatus: string

  /**
   * 入侵事件数
   */
  InvasionNum: number

  /**
   * 地域信息
   */
  RegionInfo: RegionInfo

  /**
   * 实例状态 TERMINATED_PRO_VERSION 已销毁
   */
  InstanceState: string

  /**
   * 防篡改 授权状态 1 授权 0 未授权
   */
  LicenseStatus: number

  /**
   * 项目ID
   */
  ProjectId: number

  /**
   * 是否有资产扫描接口，0无，1有
   */
  HasAssetScan: number

  /**
   * 机器所属专区类型 CVM 云服务器, BM 黑石, ECM 边缘计算, LH 轻量应用服务器 ,Other 混合云专区
   */
  MachineType: string
}

/**
 * 授权机器信息
 */
export interface ProtectMachineInfo {
  /**
   * 机器名称
   */
  HostName: string

  /**
   * 机器IP
   */
  HostIp: string

  /**
   * 开通时间
   */
  CreateTime: string

  /**
   * 到期时间
   */
  ExpireTime: string
}

/**
 * DescribeMalwareFile请求参数结构体
 */
export interface DescribeMalwareFileRequest {
  /**
   * 木马记录ID
   */
  Id: number
}

/**
 * DescribeWebPageServiceInfo返回参数结构体
 */
export interface DescribeWebPageServiceInfoResponse {
  /**
   * 是否已购服务：true-是，false-否
   */
  Status: boolean

  /**
   * 已使用授权数
   */
  UsedNum: number

  /**
   * 剩余授权数
   */
  ResidueNum: number

  /**
   * 已购授权数
   */
  BuyNum: number

  /**
   * 临近到期数量
   */
  ExpireNum: number

  /**
   * 所有授权机器信息
   */
  AllAuthorizedMachines: Array<ProtectMachineInfo>

  /**
   * 临近到期授权机器信息
   */
  ExpireAuthorizedMachines: Array<ProtectMachine>

  /**
   * 已过期授权数
   */
  ExpiredNum: number

  /**
   * 防护目录数
   */
  ProtectDirNum: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeUsualLoginPlaces请求参数结构体
 */
export interface DescribeUsualLoginPlacesRequest {
  /**
   * 云镜客户端UUID
   */
  Uuid: string
}

/**
 * 防护事件列表信息
 */
export interface ProtectEventLists {
  /**
   * 服务器名称
   */
  HostName: string

  /**
   * 服务器ip
   */
  HostIp: string

  /**
   * 事件地址
   */
  EventDir: string

  /**
   * 事件类型 0-内容被修改恢复；1-权限被修改恢复；2-归属被修改恢复；3-被删除恢复；4-新增删除
   */
  EventType: number

  /**
   * 事件状态 1 已恢复 0 未恢复
   */
  EventStatus: number

  /**
   * 发现时间
   */
  CreateTime: string

  /**
   * 恢复时间
   */
  RestoreTime: string

  /**
   * 唯一ID
   */
  Id: number

  /**
   * 文件类型 0-常规文件；1-目录；2-软链
   */
  FileType: number
}

/**
 * DescribeProcessStatistics请求参数结构体
 */
export interface DescribeProcessStatisticsRequest {
  /**
   * 返回数量，默认为10，最大值为100。
   */
  Limit?: number

  /**
   * 偏移量，默认为0。
   */
  Offset?: number

  /**
      * 过滤条件。
<li>ProcessName - String - 是否必填：否 - 进程名</li>
      */
  Filters?: Array<Filter>
}

/**
 * CreateScanMalwareSetting返回参数结构体
 */
export interface CreateScanMalwareSettingResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 恶意文件风险提示列表信息
 */
export interface MalwareRisk {
  /**
   * 机器IP
   */
  MachineIp: string

  /**
   * 病毒名
   */
  VirusName: string

  /**
   * 发现时间
   */
  CreateTime: string

  /**
   * 唯一ID
   */
  Id: number
}

/**
 * ExportProtectDirList返回参数结构体
 */
export interface ExportProtectDirListResponse {
  /**
   * 任务ID
   */
  TaskId: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ExportTasks请求参数结构体
 */
export interface ExportTasksRequest {
  /**
   * 任务ID
   */
  TaskId: string
}

/**
 * ModifyBruteAttackRules请求参数结构体
 */
export interface ModifyBruteAttackRulesRequest {
  /**
   * 暴力破解判断规则
   */
  Rules: Array<BruteAttackRule>
}

/**
 * ExportVulList请求参数结构体
 */
export interface ExportVulListRequest {
  /**
      * 过滤条件。
<li>VulCategory - int - 是否必填：否 - 漏洞分类筛选 1: web应用漏洞 2:系统组件漏洞 3:安全基线</li>
<li>IfEmergency - String - 是否必填：否 - 是否为应急漏洞，查询应急漏洞传:yes</li>
<li>Status - String - 是否必填：是 - 漏洞状态筛选，0: 待处理 1:忽略  3:已修复  5:检测中， 控制台仅处理0,1,3,5四种状态</li>
<li>Level - String - 是否必填：否 - 漏洞等级筛选 1:低 2:中 3:高 4:提示</li>
<li>VulName- String - 是否必填：否 - 漏洞名称搜索</li>
      */
  Filters?: Array<Filter>

  /**
   * 是否导出详情,1是 0不是
   */
  IfDetail?: number
}

/**
 * DescribeAccounts返回参数结构体
 */
export interface DescribeAccountsResponse {
  /**
   * 帐号列表记录总数。
   */
  TotalCount?: number

  /**
   * 帐号数据列表。
   */
  Accounts?: Array<Account>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeBaselineScanSchedule请求参数结构体
 */
export interface DescribeBaselineScanScheduleRequest {
  /**
   * 任务id
   */
  TaskId: number
}

/**
 * DescribeEmergencyVulList返回参数结构体
 */
export interface DescribeEmergencyVulListResponse {
  /**
      * 漏洞列表
注意：此字段可能返回 null，表示取不到有效值。
      */
  List: Array<EmergencyVul>

  /**
      * 漏洞总条数
注意：此字段可能返回 null，表示取不到有效值。
      */
  TotalCount: number

  /**
      * 是否存在风险
注意：此字段可能返回 null，表示取不到有效值。
      */
  ExistsRisk: boolean

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 标准模式阻断配置
 */
export interface StandardModeConfig {
  /**
   * 阻断时长，单位：秒
   */
  Ttl: number
}

/**
 * 高危命令数据
 */
export interface BashEvent {
  /**
   * 数据ID
   */
  Id: number

  /**
   * 云镜ID
   */
  Uuid: string

  /**
   * 主机ID
   */
  Quuid: string

  /**
   * 主机内网IP
   */
  Hostip: string

  /**
   * 执行用户名
   */
  User: string

  /**
   * 平台类型
   */
  Platform: number

  /**
   * 执行命令
   */
  BashCmd: string

  /**
   * 规则ID
   */
  RuleId: number

  /**
   * 规则名称
   */
  RuleName: string

  /**
   * 规则等级：1-高 2-中 3-低
   */
  RuleLevel: number

  /**
   * 处理状态： 0 = 待处理 1= 已处理, 2 = 已加白
   */
  Status: number

  /**
   * 发生时间
   */
  CreateTime: string

  /**
   * 主机名
   */
  MachineName: string

  /**
      * 0: bash日志 1: 实时监控(雷霆版)
注意：此字段可能返回 null，表示取不到有效值。
      */
  DetectBy: number

  /**
      * 进程id
注意：此字段可能返回 null，表示取不到有效值。
      */
  Pid: string

  /**
      * 进程名称
注意：此字段可能返回 null，表示取不到有效值。
      */
  Exe: string

  /**
      * 处理时间
注意：此字段可能返回 null，表示取不到有效值。
      */
  ModifyTime: string

  /**
      * 规则类别  0=系统规则，1=用户规则
注意：此字段可能返回 null，表示取不到有效值。
      */
  RuleCategory: number

  /**
      * 自动生成的正则表达式
注意：此字段可能返回 null，表示取不到有效值。
      */
  RegexBashCmd: string
}

/**
 * DeleteMalwares请求参数结构体
 */
export interface DeleteMalwaresRequest {
  /**
   * 木马记录ID数组 (最大100条)
   */
  Ids: Array<number>
}

/**
 * RecoverMalwares返回参数结构体
 */
export interface RecoverMalwaresResponse {
  /**
   * 恢复成功id数组，若无则返回空数组
   */
  SuccessIds: Array<number>

  /**
   * 恢复失败id数组，若无则返回空数组
   */
  FailedIds: Array<number>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 地域信息
 */
export interface RegionSet {
  /**
   * 地域名称
   */
  RegionName: string

  /**
   * 可用区信息
   */
  ZoneSet: Array<ZoneInfo>
}

/**
 * DescribeReverseShellRules请求参数结构体
 */
export interface DescribeReverseShellRulesRequest {
  /**
   * 返回数量，默认为10，最大值为100。
   */
  Limit?: number

  /**
   * 偏移量，默认为0。
   */
  Offset?: number

  /**
      * 过滤条件。
<li>Keywords - String - 是否必填：否 - 关键字(进程名称)</li>
      */
  Filters?: Array<Filter>
}

/**
 * DescribeScanVulSetting返回参数结构体
 */
export interface DescribeScanVulSettingResponse {
  /**
   * 漏洞类型：1: web应用漏洞 2:系统组件漏洞 (多选英文逗号分隔)
   */
  VulCategories: string

  /**
   * 危害等级：1-低危；2-中危；3-高危；4-严重 (多选英文逗号分隔)
   */
  VulLevels: string

  /**
   * 定期检测间隔时间（天）
   */
  TimerInterval: number

  /**
   * 定期检测时间，如：00:00
   */
  TimerTime: string

  /**
   * 是否紧急漏洞：0-否 1-是
   */
  VulEmergency: number

  /**
   * 开始时间
   */
  StartTime: string

  /**
   * 是否开启
   */
  EnableScan: number

  /**
   * 结束时间
   */
  EndTime: string

  /**
   * 一键扫描超时时长，如：1800秒（s）
   */
  ClickTimeout: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 容器安全
描述键值对过滤器，用于条件过滤查询。例如过滤ID、名称、状态等
若存在多个Filter时，Filter间的关系为逻辑与（AND）关系。
若同一个Filter存在多个Values，同一Filter下Values间的关系为逻辑或（OR）关系。

 */
export interface AssetFilters {
  /**
   * 过滤键的名称。
   */
  Name: string

  /**
   * 一个或者多个过滤值。
   */
  Values: Array<string>

  /**
   * 是否模糊查询
   */
  ExactMatch?: boolean
}

/**
 * SetBashEventsStatus请求参数结构体
 */
export interface SetBashEventsStatusRequest {
  /**
   * ID数组，最大100条。
   */
  Ids: Array<number>

  /**
   * 新状态(0-待处理 1-高危 2-正常)
   */
  Status: number
}

/**
 * DescribeAccounts请求参数结构体
 */
export interface DescribeAccountsRequest {
  /**
   * 云镜客户端唯一Uuid。Username和Uuid必填其一，使用Uuid表示，查询该主机下列表信息。
   */
  Uuid?: string

  /**
   * 云镜客户端唯一Uuid。Username和Uuid必填其一，使用Username表示，查询该用户名下列表信息。
   */
  Username?: string

  /**
   * 返回数量，默认为10，最大值为100。
   */
  Limit?: number

  /**
   * 偏移量，默认为0。
   */
  Offset?: number

  /**
      * 过滤条件。
<li>Username - String - 是否必填：否 - 帐号名</li>
<li>Privilege - String - 是否必填：否 - 帐号类型（ORDINARY: 普通帐号 | SUPPER: 超级管理员帐号）</li>
<li>MachineIp - String - 是否必填：否 - 主机内网IP</li>
      */
  Filters?: Array<Filter>
}

/**
 * 地域信息
 */
export interface RegionInfo {
  /**
   * 地域标志，如 ap-guangzhou，ap-shanghai，ap-beijing
   */
  Region: string

  /**
   * 地域中文名，如华南地区（广州），华东地区（上海金融），华北地区（北京）
   */
  RegionName: string

  /**
   * 地域ID
   */
  RegionId: number

  /**
   * 地域代码，如 gz，sh，bj
   */
  RegionCode: string

  /**
   * 地域英文名
   */
  RegionNameEn: string
}

/**
 * DescribeAttackLogs请求参数结构体
 */
export interface DescribeAttackLogsRequest {
  /**
   * 返回数量，最大值为100。
   */
  Limit?: number

  /**
   * 偏移量，默认为0。
   */
  Offset?: number

  /**
      * 过滤条件。
<li>HttpMethod - String - 是否必填：否 - 攻击方法(POST|GET)</li>
<li>DateRange - String - 是否必填：否 - 时间范围(存储最近3个月的数据)，如最近一个月["2019-11-17", "2019-12-17"]</li>
<li>VulType - String 威胁类型 - 是否必填: 否</li>
<li>SrcIp - String 攻击源IP - 是否必填: 否</li>
<li>DstIp - String 攻击目标IP - 是否必填: 否</li>
<li>SrcPort - String 攻击源端口 - 是否必填: 否</li>
<li>DstPort - String 攻击目标端口 - 是否必填: 否</li>
      */
  Filters?: Array<Filter>

  /**
   * 主机安全客户端ID
   */
  Uuid?: string

  /**
   * 云主机机器ID
   */
  Quuid?: string
}

/**
 * 组件统计数据。
 */
export interface ComponentStatistics {
  /**
   * 组件ID。
   */
  Id: number

  /**
   * 主机数量。
   */
  MachineNum: number

  /**
   * 组件名称。
   */
  ComponentName: string

  /**
      * 组件类型。
<li>WEB：Web组件</li>
<li>SYSTEM：系统组件</li>
      */
  ComponentType: string

  /**
   * 组件描述。
   */
  Description: string
}

/**
 * ExportAssetWebServiceInfoList请求参数结构体
 */
export interface ExportAssetWebServiceInfoListRequest {
  /**
      * 过滤条件。
<li>User- string - 是否必填：否 - 运行用户</li>
<li>Name- string - 是否必填：否 - Web服务名：
1:Tomcat
2:Apache
3:Nginx
4:WebLogic
5:Websphere
6:JBoss
7:WildFly
8:Jetty
9:IHS
10:Tengine</li>
<li>OsType- string - 是否必填：否 - Windows/linux</li>
      */
  Filters?: Array<AssetFilters>

  /**
   * 排序方式，asc升序 或 desc降序
   */
  Order?: string

  /**
   * 可选排序：ProcessCount
   */
  By?: string

  /**
   * 查询指定Quuid主机的信息
   */
  Quuid?: string
}

/**
 * SetBashEventsStatus返回参数结构体
 */
export interface SetBashEventsStatusResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 机器授权到期信息
 */
export interface ProtectMachine {
  /**
   * 机器名称
   */
  HostName: string

  /**
   * 机器IP
   */
  HostIp: string

  /**
   * 防护目录数
   */
  SafeguardDirNum: number
}

/**
 * DescribeProtectDirList请求参数结构体
 */
export interface DescribeProtectDirListRequest {
  /**
   * 分页条数 最大100条
   */
  Limit: number

  /**
   * 偏移量
   */
  Offset: number

  /**
      * DirName 网站名称
DirPath 网站防护目录地址
      */
  Filters?: Array<AssetFilters>

  /**
   * asc：升序/desc：降序
   */
  Order?: string

  /**
   * 排序字段
   */
  By?: string
}

/**
 * ExportPrivilegeEvents请求参数结构体
 */
export interface ExportPrivilegeEventsRequest {
  /**
   * 过滤参数
   */
  Filters?: Array<Filters>
}

/**
 * 帐号列表信息数据。
 */
export interface Account {
  /**
   * 唯一ID。
   */
  Id: number

  /**
   * 云镜客户端唯一Uuid
   */
  Uuid: string

  /**
   * 主机内网IP。
   */
  MachineIp: string

  /**
   * 主机名称。
   */
  MachineName: string

  /**
   * 帐号名。
   */
  Username: string

  /**
   * 帐号所属组。
   */
  Groups: string

  /**
      * 帐号类型。
<li>ORDINARY：普通帐号</li>
<li>SUPPER：超级管理员帐号</li>
      */
  Privilege: string

  /**
   * 帐号创建时间。
   */
  AccountCreateTime: string

  /**
   * 帐号最后登录时间。
   */
  LastLoginTime: string
}

/**
 * DescribeMalwareFile返回参数结构体
 */
export interface DescribeMalwareFileResponse {
  /**
   * 木马文件下载地址
   */
  FileUrl: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeRiskDnsList返回参数结构体
 */
export interface DescribeRiskDnsListResponse {
  /**
      * 恶意请求列表数组
注意：此字段可能返回 null，表示取不到有效值。
      */
  RiskDnsList: Array<RiskDnsList>

  /**
   * 总数量
   */
  TotalCount: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 扫描任务详情列表信息
 */
export interface ScanTaskDetails {
  /**
   * 服务器IP
   */
  HostIp: string

  /**
   * 服务器名称
   */
  HostName: string

  /**
   * 操作系统
   */
  OsName: string

  /**
   * 风险数量
   */
  RiskNum: number

  /**
   * 扫描开始时间
   */
  ScanBeginTime: string

  /**
   * 扫描结束时间
   */
  ScanEndTime: string

  /**
   * 唯一Uuid
   */
  Uuid: string

  /**
   * 唯一Quuid
   */
  Quuid: string

  /**
   * 状态码
   */
  Status: string

  /**
   * 描述
   */
  Description: string

  /**
   * id唯一
   */
  Id: number

  /**
   * 失败详情
   */
  FailType: number
}

/**
 * ExportIgnoreBaselineRule请求参数结构体
 */
export interface ExportIgnoreBaselineRuleRequest {
  /**
   * 检测项名称
   */
  RuleName?: string
}

/**
 * DeleteMachineTag请求参数结构体
 */
export interface DeleteMachineTagRequest {
  /**
   * 关联的标签ID
   */
  Rid: number
}

/**
 * DescribeBaselineDetail请求参数结构体
 */
export interface DescribeBaselineDetailRequest {
  /**
   * 基线id
   */
  BaselineId: number
}

/**
 * 可用区信息
 */
export interface ZoneInfo {
  /**
   * 可用区名称
   */
  ZoneName: string
}

/**
 * 基线检测信息
 */
export interface BaselineRuleInfo {
  /**
   * 检测项名称
   */
  RuleName: string

  /**
   * 检测项描述
   */
  Description: string

  /**
   * 修复建议
   */
  FixMessage: string

  /**
   * 危害等级
   */
  Level: number

  /**
   * 状态
   */
  Status: number

  /**
   * 检测项id
   */
  RuleId: number

  /**
   * 最后检测时间
   */
  LastScanAt: string

  /**
   * 具体原因说明
   */
  RuleRemark: string

  /**
   * 唯一Uuid
   */
  Uuid: string

  /**
   * 唯一事件ID
   */
  EventId: number
}

/**
 * DescribeExportMachines返回参数结构体
 */
export interface DescribeExportMachinesResponse {
  /**
   * 任务id
   */
  TaskId: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeWebPageEventList返回参数结构体
 */
export interface DescribeWebPageEventListResponse {
  /**
   * 防护事件列表信息
   */
  List: Array<ProtectEventLists>

  /**
   * 总数
   */
  TotalCount: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteProtectDir返回参数结构体
 */
export interface DeleteProtectDirResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyBanStatus请求参数结构体
 */
export interface ModifyBanStatusRequest {
  /**
   * 阻断状态 0:关闭 1:开启
   */
  Status: number
}

/**
 * DescribeWebPageServiceInfo请求参数结构体
 */
export type DescribeWebPageServiceInfoRequest = null

/**
 * DescribeLogStorageStatistic返回参数结构体
 */
export interface DescribeLogStorageStatisticResponse {
  /**
   * 总容量（单位：GB）
   */
  TotalSize: number

  /**
   * 已使用容量（单位：GB）
   */
  UsedSize: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeScanState返回参数结构体
 */
export interface DescribeScanStateResponse {
  /**
   * 0 从未扫描过、 1 扫描中、 2扫描完成、 3停止中、 4停止完成
   */
  ScanState: number

  /**
   * 扫描进度
   */
  Schedule: number

  /**
   * 任务Id
   */
  TaskId: number

  /**
   * 任务扫描的漏洞id
   */
  VulId: Array<number>

  /**
   * 0一键检测 1定时检测
   */
  Type: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * EditTags请求参数结构体
 */
export interface EditTagsRequest {
  /**
   * 标签名
   */
  Name: string

  /**
   * 标签ID
   */
  Id?: number

  /**
   * Quuid
   */
  Quuids?: Array<string>
}

/**
 * DeleteReverseShellRules请求参数结构体
 */
export interface DeleteReverseShellRulesRequest {
  /**
   * ID数组. (最大100条)
   */
  Ids: Array<number>
}

/**
 * DescribeOpenPortStatistics请求参数结构体
 */
export interface DescribeOpenPortStatisticsRequest {
  /**
   * 返回数量，默认为10，最大值为100。
   */
  Limit?: number

  /**
   * 偏移量，默认为0。
   */
  Offset?: number

  /**
      * 过滤条件。
<li>Port - Uint64 - 是否必填：否 - 端口号</li>
      */
  Filters?: Array<Filter>
}

/**
 * ExportAssetWebServiceInfoList返回参数结构体
 */
export interface ExportAssetWebServiceInfoListResponse {
  /**
   * 异步下载任务ID，需要配合ExportTasks接口使用
   */
  TaskId: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyMalwareTimingScanSettings返回参数结构体
 */
export interface ModifyMalwareTimingScanSettingsResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteNonlocalLoginPlaces返回参数结构体
 */
export interface DeleteNonlocalLoginPlacesResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyWebPageProtectSetting请求参数结构体
 */
export interface ModifyWebPageProtectSettingRequest {
  /**
   * 需要操作的类型1 目录名称 2 防护文件类型
   */
  ModifyType: number

  /**
   * 提交值
   */
  Value: string

  /**
   * 配置对应的protect_path
   */
  Id: string
}

/**
 * DeleteMalwareScanTask返回参数结构体
 */
export interface DeleteMalwareScanTaskResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeBaselineDetail返回参数结构体
 */
export interface DescribeBaselineDetailResponse {
  /**
      * 基线详情
注意：此字段可能返回 null，表示取不到有效值。
      */
  BaselineDetail: BaselineDetail

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ExportScanTaskDetails返回参数结构体
 */
export interface ExportScanTaskDetailsResponse {
  /**
   * 导出本次检测Excel的任务Id（不同于入参的本次检测任务id）
   */
  TaskId: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeBanRegions返回参数结构体
 */
export interface DescribeBanRegionsResponse {
  /**
   * 地域信息列表
   */
  RegionSet: Array<RegionSet>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeletePrivilegeEvents返回参数结构体
 */
export interface DeletePrivilegeEventsResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeMachineInfo返回参数结构体
 */
export interface DescribeMachineInfoResponse {
  /**
   * 机器ip。
   */
  MachineIp: string

  /**
   * 受云镜保护天数。
   */
  ProtectDays: number

  /**
   * 操作系统。
   */
  MachineOs: string

  /**
   * 主机名称。
   */
  MachineName: string

  /**
      * 在线状态。
<li>ONLINE： 在线</li>
<li>OFFLINE：离线</li>
      */
  MachineStatus: string

  /**
   * CVM或BM主机唯一标识。
   */
  InstanceId: string

  /**
   * 主机外网IP。
   */
  MachineWanIp: string

  /**
   * CVM或BM主机唯一Uuid。
   */
  Quuid: string

  /**
   * 云镜客户端唯一Uuid。
   */
  Uuid: string

  /**
      * 是否开通专业版。
<li>true：是</li>
<li>false：否</li>
      */
  IsProVersion: boolean

  /**
   * 专业版开通时间。
   */
  ProVersionOpenDate: string

  /**
      * 云主机类型。
<li>CVM: 腾讯云服务器</li>
<li>BM: 黑石物理机</li>
<li>ECM: 边缘计算服务器</li>
<li>LH: 轻量应用服务器</li>
<li>Other: 混合云机器</li>
      */
  MachineType: string

  /**
   * 机器所属地域。如：ap-guangzhou，ap-shanghai
   */
  MachineRegion: string

  /**
      * 主机状态。
<li>POSTPAY: 表示后付费，即按量计费  </li>
<li>PREPAY: 表示预付费，即包年包月</li>
      */
  PayMode: string

  /**
   * 免费木马剩余检测数量。
   */
  FreeMalwaresLeft: number

  /**
   * 免费漏洞剩余检测数量。
   */
  FreeVulsLeft: number

  /**
   * agent版本号
   */
  AgentVersion: string

  /**
   * 专业版到期时间(仅预付费)
   */
  ProVersionDeadline: string

  /**
   * 是否有资产扫描记录，0无，1有
   */
  HasAssetScan: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeImportMachineInfo请求参数结构体
 */
export interface DescribeImportMachineInfoRequest {
  /**
   * 服务器内网IP（默认）/ 服务器名称 / 服务器ID 数组 (最大 1000条)
   */
  MachineList: Array<string>

  /**
   * 批量导入的数据类型：Ip、Name、Id 三选一
   */
  ImportType: string

  /**
   * 是否仅支持专业版机器的查询（true：仅专业版   false：专业版+基础版）
   */
  IsQueryProMachine?: boolean
}

/**
 * 漏洞数量按等级分布统计结果实体
 */
export interface VulLevelInfo {
  /**
   * // 危害等级：1-低危；2-中危；3-高危；4-严重
   */
  VulLevel: number

  /**
   * 数量
   */
  Count: number
}

/**
 * 防护信息统计
 */
export interface ProtectStat {
  /**
   * 名称
   */
  Name: string

  /**
   * 数量
   */
  Num: number
}

/**
 * SwitchBashRules返回参数结构体
 */
export interface SwitchBashRulesResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeSearchLogs请求参数结构体
 */
export type DescribeSearchLogsRequest = null

/**
 * DescribeAttackLogInfo请求参数结构体
 */
export interface DescribeAttackLogInfoRequest {
  /**
   * 日志ID
   */
  Id: number
}

/**
 * DescribeVulInfoCvss请求参数结构体
 */
export interface DescribeVulInfoCvssRequest {
  /**
   * 漏洞id
   */
  VulId: number
}

/**
 * DescribeComponentStatistics请求参数结构体
 */
export interface DescribeComponentStatisticsRequest {
  /**
   * 返回数量，默认为10，最大值为100。
   */
  Limit?: number

  /**
   * 偏移量，默认为0。
   */
  Offset?: number

  /**
      * 过滤条件。
ComponentName - String - 是否必填：否 - 组件名称
      */
  Filters?: Array<Filter>
}

/**
 * RescanImpactedHost请求参数结构体
 */
export interface RescanImpactedHostRequest {
  /**
   * 漏洞ID。
   */
  Id: number
}

/**
 * ModifyBanStatus返回参数结构体
 */
export interface ModifyBanStatusResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeLoginWhiteList返回参数结构体
 */
export interface DescribeLoginWhiteListResponse {
  /**
   * 记录总数
   */
  TotalCount: number

  /**
   * 异地登录白名单数组
   */
  LoginWhiteLists: Array<LoginWhiteLists>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * StopNoticeBanTips返回参数结构体
 */
export interface StopNoticeBanTipsResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeScanMalwareSchedule返回参数结构体
 */
export interface DescribeScanMalwareScheduleResponse {
  /**
   * 扫描进度（单位：%）
   */
  Schedule: number

  /**
   * 风险文件数,当进度满了以后才有该值
   */
  RiskFileNumber: number

  /**
   * 是否正在扫描中
   */
  IsSchedule: boolean

  /**
   * 0 从未扫描过、 1 扫描中、 2扫描完成、 3停止中、 4停止完成
   */
  ScanStatus: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteBruteAttacks请求参数结构体
 */
export interface DeleteBruteAttacksRequest {
  /**
   * 暴力破解事件Id数组。(最大 100条)
   */
  Ids: Array<number>
}

/**
 * DescribeMalwareTimingScanSetting请求参数结构体
 */
export type DescribeMalwareTimingScanSettingRequest = null

/**
 * 高危命令规则
 */
export interface BashRule {
  /**
   * 规则ID
   */
  Id: number

  /**
   * 客户端ID
   */
  Uuid: string

  /**
   * 规则名称
   */
  Name: string

  /**
   * 危险等级(0 ：无 1: 高危 2:中危 3: 低危)
   */
  Level: number

  /**
   * 正则表达式
   */
  Rule: string

  /**
   * 规则描述
   */
  Decription: string

  /**
   * 操作人
   */
  Operator: string

  /**
   * 是否全局规则
   */
  IsGlobal: number

  /**
   * 状态 (0: 有效 1: 无效)
   */
  Status: number

  /**
   * 创建时间
   */
  CreateTime: string

  /**
   * 修改时间
   */
  ModifyTime: string

  /**
   * 主机IP
   */
  Hostip: string

  /**
      * 生效服务器的uuid数组
注意：此字段可能返回 null，表示取不到有效值。
      */
  Uuids: Array<string>

  /**
      * 0=黑名单 1=白名单
注意：此字段可能返回 null，表示取不到有效值。
      */
  White: number

  /**
      * 是否处理之前的事件 0: 不处理 1:处理
注意：此字段可能返回 null，表示取不到有效值。
      */
  DealOldEvents: number
}

/**
 * RenewProVersion返回参数结构体
 */
export interface RenewProVersionResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateSearchLog返回参数结构体
 */
export interface CreateSearchLogResponse {
  /**
   * 0：成功，非0：失败
   */
  Status: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeSecurityTrends返回参数结构体
 */
export interface DescribeSecurityTrendsResponse {
  /**
   * 木马事件统计数据数组。
   */
  Malwares: Array<SecurityTrend>

  /**
   * 异地登录事件统计数据数组。
   */
  NonLocalLoginPlaces: Array<SecurityTrend>

  /**
   * 密码破解事件统计数据数组。
   */
  BruteAttacks: Array<SecurityTrend>

  /**
   * 漏洞统计数据数组。
   */
  Vuls: Array<SecurityTrend>

  /**
   * 基线统计数据数组。
   */
  BaseLines: Array<SecurityTrend>

  /**
   * 恶意请求统计数据数组。
   */
  MaliciousRequests: Array<SecurityTrend>

  /**
   * 高危命令统计数据数组。
   */
  HighRiskBashs: Array<SecurityTrend>

  /**
   * 反弹shell统计数据数组。
   */
  ReverseShells: Array<SecurityTrend>

  /**
   * 本地提权统计数据数组。
   */
  PrivilegeEscalations: Array<SecurityTrend>

  /**
   * 网络攻击统计数据数组。
   */
  CyberAttacks: Array<SecurityTrend>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeEmergencyVulList请求参数结构体
 */
export interface DescribeEmergencyVulListRequest {
  /**
   * 返回数量，最大值为100。
   */
  Limit?: number

  /**
   * 偏移量，默认为0。
   */
  Offset?: number

  /**
      * 过滤条件。
<li>Status - String - 是否必填：是 - 漏洞状态筛选，0//未检测 1有风险 ，2无风险 ，3 检查中展示progress</li>
<li>Level - String - 是否必填：否 - 漏洞等级筛选 1:低 2:中 3:高 4:提示</li>
<li>VulName- String - 是否必填：否 - 漏洞名称搜索</li>
<li>Uuids- String - 是否必填：否 - 主机uuid</li>
      */
  Filters?: Array<Filters>

  /**
   * 排序方式 desc , asc
   */
  Order?: string

  /**
   * 排序字段 PublishDate
   */
  By?: string
}

/**
 * DescribeVulHostCountScanTime返回参数结构体
 */
export interface DescribeVulHostCountScanTimeResponse {
  /**
   * 总漏洞数
   */
  TotalVulCount: number

  /**
   * 漏洞影响主机数
   */
  VulHostCount: number

  /**
   * 扫描时间
   */
  ScanTime: string

  /**
   * 是否第一次检测
   */
  IfFirstScan: boolean

  /**
   * 运行中的任务号, 没有任务则为0
   */
  TaskId: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteReverseShellEvents返回参数结构体
 */
export interface DeleteReverseShellEventsResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 网络攻击日志
 */
export interface DefendAttackLog {
  /**
   * 日志ID
   */
  Id: number

  /**
   * 客户端ID
   */
  Uuid: string

  /**
   * 来源IP
   */
  SrcIp: string

  /**
   * 来源端口
   */
  SrcPort: number

  /**
   * 攻击方式
   */
  HttpMethod: string

  /**
   * 攻击描述
   */
  HttpCgi: string

  /**
   * 攻击参数
   */
  HttpParam: string

  /**
   * 威胁类型
   */
  VulType: string

  /**
   * 攻击时间
   */
  CreatedAt: string

  /**
   * 目标服务器IP
   */
  MachineIp: string

  /**
   * 目标服务器名称
   */
  MachineName: string

  /**
   * 目标IP
   */
  DstIp: string

  /**
   * 目标端口
   */
  DstPort: number

  /**
   * 攻击内容
   */
  HttpContent: string
}

/**
 * DescribeMachineInfo请求参数结构体
 */
export interface DescribeMachineInfoRequest {
  /**
   * 云镜客户端唯一Uuid。
   */
  Uuid?: string

  /**
   * Quuid , Uuid 必填一项
   */
  Quuid?: string
}

/**
 * DescribeScanTaskDetails返回参数结构体
 */
export interface DescribeScanTaskDetailsResponse {
  /**
   * 扫描任务信息列表
   */
  ScanTaskDetailList: Array<ScanTaskDetails>

  /**
   * 总数
   */
  TotalCount: number

  /**
   * 扫描机器总数
   */
  ScanMachineCount: number

  /**
   * 发现风险机器数
   */
  RiskMachineCount: number

  /**
   * 扫描开始时间
   */
  ScanBeginTime: string

  /**
   * 扫描结束时间
   */
  ScanEndTime: string

  /**
   * 检测时间
   */
  ScanTime: number

  /**
   * 扫描进度
   */
  ScanProgress: number

  /**
   * 扫描剩余时间
   */
  ScanLeftTime: number

  /**
   * 扫描内容
   */
  ScanContent: Array<string>

  /**
      * 漏洞信息
注意：此字段可能返回 null，表示取不到有效值。
      */
  VulInfo: Array<VulDetailInfo>

  /**
      * 风险事件个数
注意：此字段可能返回 null，表示取不到有效值。
      */
  RiskEventCount: number

  /**
      * 0一键检测 1定时检测
注意：此字段可能返回 null，表示取不到有效值。
      */
  Type: number

  /**
      * 任务是否全部正在被停止 ture是
注意：此字段可能返回 null，表示取不到有效值。
      */
  StoppingAll: boolean

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeGeneralStat请求参数结构体
 */
export interface DescribeGeneralStatRequest {
  /**
      * 云主机类型。
<li>CVM：表示腾讯云服务器</li>
<li>BM:  表示黑石物理机</li>
<li>ECM:  表示边缘计算服务器</li>
<li>LH:  表示轻量应用服务器</li>
<li>Other:  表示混合云机器</li>
      */
  MachineType?: string

  /**
   * 机器所属地域。如：ap-guangzhou，ap-shanghai
   */
  MachineRegion?: string
}

/**
 * UpdateBaselineStrategy返回参数结构体
 */
export interface UpdateBaselineStrategyResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyWarningSetting返回参数结构体
 */
export interface ModifyWarningSettingResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 异地登录合并后白名单
 */
export interface LoginWhiteCombinedInfo {
  /**
      * 白名单地域
注意：此字段可能返回 null，表示取不到有效值。
      */
  Places: Array<Place>

  /**
   * 白名单用户（多个用户逗号隔开）
   */
  UserName: string

  /**
   * 白名单IP（多个IP逗号隔开）
   */
  SrcIp: string

  /**
   * 地域字符串
   */
  Locale: string

  /**
   * 备注
   */
  Remark: string

  /**
   * 开始时间
   */
  StartTime: string

  /**
   * 结束时间
   */
  EndTime: string

  /**
   * 是否对全局生效, 1：全局有效 0: 对指定主机列表生效'
   */
  IsGlobal: number

  /**
   * 白名单名字：IsLocal=1时固定为：全部服务器；单台机器时为机器内网IP，多台服务器时为服务器数量，如：11台
   */
  Name: string

  /**
   * 仅在单台服务器时，返回服务器名称
   */
  Desc: string

  /**
   * 白名单ID
   */
  Id: number

  /**
   * 创建时间
   */
  CreateTime: string

  /**
   * 最近修改时间
   */
  ModifyTime: string

  /**
   * 服务器Uuid
   */
  Uuid: string
}

/**
 * OpenProVersionPrepaid返回参数结构体
 */
export interface OpenProVersionPrepaidResponse {
  /**
   * 订单ID列表。
   */
  DealIds: Array<string>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeMalwareInfo返回参数结构体
 */
export interface DescribeMalwareInfoResponse {
  /**
   * 恶意文件详情信息
   */
  MalwareInfo: MalwareInfo

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribePrivilegeEvents请求参数结构体
 */
export interface DescribePrivilegeEventsRequest {
  /**
   * 返回数量，最大值为100。
   */
  Limit?: number

  /**
   * 偏移量，默认为0。
   */
  Offset?: number

  /**
      * 过滤条件。
<li>Keywords - String - 是否必填：否 - 关键词(主机IP)</li>
      */
  Filters?: Array<Filter>
}

/**
 * ExportIgnoreRuleEffectHostList返回参数结构体
 */
export interface ExportIgnoreRuleEffectHostListResponse {
  /**
   * 导出文件下载地址
   */
  DownloadUrl: string

  /**
   * 导出任务Id , 可通过ExportTasks 接口下载
   */
  TaskId: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ExportBashEvents返回参数结构体
 */
export interface ExportBashEventsResponse {
  /**
   * 导出文件下载链接地址。
   */
  DownloadUrl: string

  /**
   * 导出任务ID
   */
  TaskId: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteWebPageEventLog返回参数结构体
 */
export interface DeleteWebPageEventLogResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeVulLevelCount返回参数结构体
 */
export interface DescribeVulLevelCountResponse {
  /**
      * 统计结果
注意：此字段可能返回 null，表示取不到有效值。
      */
  VulLevelList: Array<VulLevelInfo>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeVersionStatistics返回参数结构体
 */
export interface DescribeVersionStatisticsResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeProcessStatistics返回参数结构体
 */
export interface DescribeProcessStatisticsResponse {
  /**
   * 进程统计列表记录总数。
   */
  TotalCount: number

  /**
   * 进程统计列表数据数组。
   */
  ProcessStatistics: Array<ProcessStatistics>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyBruteAttackRules返回参数结构体
 */
export interface ModifyBruteAttackRulesResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteNonlocalLoginPlaces请求参数结构体
 */
export interface DeleteNonlocalLoginPlacesRequest {
  /**
   * 删除异地登录事件的方式，可选值："Ids"、"Ip"、"All"，默认为Ids
   */
  DelType?: string

  /**
   * 异地登录事件ID数组。DelType为Ids或DelType未填时此项必填
   */
  Ids?: Array<number>

  /**
   * 异地登录事件的Ip。DelType为Ip时必填
   */
  Ip?: Array<string>

  /**
   * 主机Uuid
   */
  Uuid?: string
}

/**
 * DescribeTags返回参数结构体
 */
export interface DescribeTagsResponse {
  /**
   * 列表信息
   */
  List: Array<Tag>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeLoginWhiteCombinedList请求参数结构体
 */
export interface DescribeLoginWhiteCombinedListRequest {
  /**
   * 需要返回的数量，默认为10，最大值为100
   */
  Limit?: number

  /**
   * 偏移量，默认为0。
   */
  Offset?: number

  /**
      * 过滤条件。
<li>IpOrAlias - String - 是否必填：否 - 主机ip或别名筛选</li>
<li>UserName - String - 是否必填：否 - 用户名筛选</li>
<li>ModifyBeginTime - String - 是否必填：否 - 按照修改时间段筛选，开始时间</li>
<li>ModifyEndTime - String - 是否必填：否 - 按照修改时间段筛选，结束时间</li>
      */
  Filters?: Array<Filter>
}

/**
 * DeleteSearchTemplate返回参数结构体
 */
export interface DeleteSearchTemplateResponse {
  /**
   * 0：成功，非0：失败
   */
  Status: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteWebPageEventLog请求参数结构体
 */
export type DeleteWebPageEventLogRequest = null

/**
 * 防护机器信息
 */
export interface ProtectHostConfig {
  /**
   * 机器唯一ID
   */
  Quuid: string

  /**
   * 防护开关 0  关闭 1开启
   */
  ProtectSwitch: number

  /**
   * 自动恢复开关 0 关闭 1开启
   */
  AutoRecovery: number
}

/**
 * 账号变更历史数据。
 */
export interface HistoryAccount {
  /**
   * 唯一ID。
   */
  Id: number

  /**
   * 云镜客户端唯一Uuid。
   */
  Uuid: string

  /**
   * 主机内网IP。
   */
  MachineIp: string

  /**
   * 主机名。
   */
  MachineName: string

  /**
   * 帐号名。
   */
  Username: string

  /**
      * 帐号变更类型。
<li>CREATE：表示新增帐号</li>
<li>MODIFY：表示修改帐号</li>
<li>DELETE：表示删除帐号</li>
      */
  ModifyType: string

  /**
   * 变更时间。
   */
  ModifyTime: string
}

/**
 * ModifyWebPageProtectSwitch请求参数结构体
 */
export interface ModifyWebPageProtectSwitchRequest {
  /**
   * 开关类型 1 防护开关  2 自动恢复开关 3 移除防护目录
   */
  SwitchType: number

  /**
   * 需要操作开关的网站 最大100条
   */
  Ids: Array<string>

  /**
   * 1 开启 0 关闭 SwitchType 为 1 | 2 必填;
   */
  Status?: number
}

/**
 * CreateScanMalwareSetting请求参数结构体
 */
export interface CreateScanMalwareSettingRequest {
  /**
   * 扫描模式 0 全盘扫描, 1 快速扫描
   */
  ScanPattern: number

  /**
   * 服务器分类：1:专业版服务器；2:自选服务器
   */
  HostType: number

  /**
   * 自选服务器时生效，主机quuid的string数组
   */
  QuuidList?: Array<string>

  /**
   * 超时时间单位 秒 默认3600 秒
   */
  TimeoutPeriod?: number
}

/**
 * DescribeMalwareTimingScanSetting返回参数结构体
 */
export interface DescribeMalwareTimingScanSettingResponse {
  /**
   * 检测模式 0 全盘检测  1快速检测
   */
  CheckPattern: number

  /**
   * 检测周期 开始时间
   */
  StartTime: string

  /**
   * 检测周期 超时结束时间
   */
  EndTime: string

  /**
   * 是否全部服务器 1 全部 2 自选
   */
  IsGlobal: number

  /**
      * 自选服务器时必须 主机quuid的string数组
注意：此字段可能返回 null，表示取不到有效值。
      */
  QuuidList: Array<string>

  /**
   * 监控模式 0 标准 1深度
   */
  MonitoringPattern: number

  /**
   * 周期 1每天
   */
  Cycle: number

  /**
   * 定时检测开关 0 关闭1 开启
   */
  EnableScan: number

  /**
   * 唯一ID
   */
  Id: number

  /**
   * 实时监控0 关闭 1开启
   */
  RealTimeMonitoring: number

  /**
   * 是否自动隔离：1-是，0-否
   */
  AutoIsolation: number

  /**
   * 一键扫描超时时长，如：1800秒（s）
   */
  ClickTimeout: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeHostLoginList请求参数结构体
 */
export interface DescribeHostLoginListRequest {
  /**
   * 需要返回的数量，最大值为100
   */
  Limit?: number

  /**
   * 偏移量，默认为0。
   */
  Offset?: number

  /**
      * 过滤条件。
<li>IpOrAlias - String - 是否必填：否 - 主机ip或别名筛选</li>
<li>Uuid - String - 是否必填：否 - 云镜唯一Uuid</li>
<li>UserName - String - 是否必填：否 - 用户名筛选</li>
<li>LoginTimeBegin - String - 是否必填：否 - 按照修改时间段筛选，开始时间</li>
<li>LoginTimeEnd - String - 是否必填：否 - 按照修改时间段筛选，结束时间</li>
<li>SrcIp - String - 是否必填：否 - 来源ip筛选</li>
<li>Status - int - 是否必填：否 - 状态筛选1:正常登录；5：已加白</li>
<li>RiskLevel - int - 是否必填：否 - 状态筛选0:高危；1：可疑</li>
      */
  Filters?: Array<Filter>
}

/**
 * 安全趋势统计数据。
 */
export interface SecurityTrend {
  /**
   * 事件时间。
   */
  Date: string

  /**
   * 事件数量。
   */
  EventNum: number
}

/**
 * ExportVulDetectionExcel请求参数结构体
 */
export interface ExportVulDetectionExcelRequest {
  /**
   * 本次漏洞检测任务id（不同于出参的导出本次漏洞检测Excel的任务Id）
   */
  TaskId: number
}

/**
 * CreateEmergencyVulScan请求参数结构体
 */
export interface CreateEmergencyVulScanRequest {
  /**
   * 漏洞id
   */
  VulId: number

  /**
   * 自选服务器时生效，主机uuid的string数组
   */
  Uuids?: Array<string>
}

/**
 * DescribeProtectDirRelatedServer返回参数结构体
 */
export interface DescribeProtectDirRelatedServerResponse {
  /**
   * 网站关联服务器列表信息
   */
  List: Array<ProtectDirRelatedServer>

  /**
   * 总数
   */
  TotalCount: number

  /**
   * 已开启防护总数
   */
  ProtectServerCount: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyAutoOpenProVersionConfig返回参数结构体
 */
export interface ModifyAutoOpenProVersionConfigResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ExportBaselineEffectHostList请求参数结构体
 */
export interface ExportBaselineEffectHostListRequest {
  /**
   * 基线id
   */
  BaselineId: number

  /**
      * 筛选条件
<li>AliasName- String- 主机别名</li>
      */
  Filters?: Array<Filters>

  /**
   * 策略id
   */
  StrategyId?: number

  /**
   * 主机uuid数组
   */
  UuidList?: Array<string>

  /**
   * 基线名称
   */
  BaselineName?: string
}

/**
 * DescribeBanStatus请求参数结构体
 */
export type DescribeBanStatusRequest = null

/**
 * DescribeAssetRecentMachineInfo返回参数结构体
 */
export interface DescribeAssetRecentMachineInfoResponse {
  /**
      * 总数量列表
注意：此字段可能返回 null，表示取不到有效值。
      */
  TotalList: Array<AssetKeyVal>

  /**
      * 在线数量列表
注意：此字段可能返回 null，表示取不到有效值。
      */
  LiveList: Array<AssetKeyVal>

  /**
      * 离线数量列表
注意：此字段可能返回 null，表示取不到有效值。
      */
  OfflineList: Array<AssetKeyVal>

  /**
      * 风险数量列表
注意：此字段可能返回 null，表示取不到有效值。
      */
  RiskList: Array<AssetKeyVal>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeMalWareList返回参数结构体
 */
export interface DescribeMalWareListResponse {
  /**
      * 木马列表
注意：此字段可能返回 null，表示取不到有效值。
      */
  MalWareList: Array<MalWareList>

  /**
   * 总数量
   */
  TotalCount: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteMaliciousRequests请求参数结构体
 */
export interface DeleteMaliciousRequestsRequest {
  /**
   * 恶意请求记录ID数组，(最大100条)
   */
  Ids: Array<number>
}

/**
 * DescribeProtectDirList返回参数结构体
 */
export interface DescribeProtectDirListResponse {
  /**
   * 总数
   */
  TotalCount: number

  /**
   * 防护目录列表信息
   */
  List: Array<ProtectDirInfo>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteBruteAttacks返回参数结构体
 */
export interface DeleteBruteAttacksResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ExportTasks返回参数结构体
 */
export interface ExportTasksResponse {
  /**
   * PENDING：正在生成下载链接，FINISHED：下载链接已生成，ERROR：网络异常等异常情况
   */
  Status: string

  /**
   * 下载链接
   */
  DownloadUrl: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeIgnoreBaselineRule返回参数结构体
 */
export interface DescribeIgnoreBaselineRuleResponse {
  /**
      * 忽略基线检测项列表信息
注意：此字段可能返回 null，表示取不到有效值。
      */
  IgnoreBaselineRuleList: Array<IgnoreBaselineRule>

  /**
      * 分页查询记录总数
注意：此字段可能返回 null，表示取不到有效值。
      */
  TotalCount: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeMachineOsList请求参数结构体
 */
export type DescribeMachineOsListRequest = null

/**
 * DescribeMalwareRiskWarning返回参数结构体
 */
export interface DescribeMalwareRiskWarningResponse {
  /**
   * 是否开启自动扫描：true-开启，false-未开启
   */
  IsCheckRisk: boolean

  /**
      * 风险文件列表信息
注意：此字段可能返回 null，表示取不到有效值。
      */
  List: Array<MalwareRisk>

  /**
   * 是否弹出提示 true 弹出, false不弹
   */
  IsPop: boolean

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeBashRules请求参数结构体
 */
export interface DescribeBashRulesRequest {
  /**
   * 0-系统规则; 1-用户规则
   */
  Type: number

  /**
   * 返回数量，最大值为100。
   */
  Limit?: number

  /**
   * 偏移量，默认为0。
   */
  Offset?: number

  /**
      * 过滤条件。
<li>Keywords - String - 是否必填：否 - 关键字(规则名称)</li>
      */
  Filters?: Array<Filter>
}

/**
 * 基线基础信息
 */
export interface BaselineBasicInfo {
  /**
      * 基线名称
注意：此字段可能返回 null，表示取不到有效值。
      */
  Name: string

  /**
      * 基线id
注意：此字段可能返回 null，表示取不到有效值。
      */
  BaselineId: number

  /**
      * 父级id
注意：此字段可能返回 null，表示取不到有效值。
      */
  ParentId: number
}

/**
 * DescribeBanMode返回参数结构体
 */
export interface DescribeBanModeResponse {
  /**
   * 阻断模式，STANDARD_MODE：标准阻断，DEEP_MODE：深度阻断
   */
  Mode: string

  /**
   * 标准阻断模式的配置
   */
  StandardModeConfig: StandardModeConfig

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeImportMachineInfo返回参数结构体
 */
export interface DescribeImportMachineInfoResponse {
  /**
      * 有效的机器信息列表：机器名称、机器公网/内网ip、机器标签
注意：此字段可能返回 null，表示取不到有效值。
      */
  EffectiveMachineInfoList: Array<EffectiveMachineInfo>

  /**
      * 用户批量导入失败的机器列表（比如机器不存在等...）
注意：此字段可能返回 null，表示取不到有效值。
      */
  InvalidMachineList: Array<string>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyWebPageProtectSwitch返回参数结构体
 */
export interface ModifyWebPageProtectSwitchResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateSearchTemplate返回参数结构体
 */
export interface CreateSearchTemplateResponse {
  /**
   * 0：成功，非0：失败
   */
  Status: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ExportMalwares请求参数结构体
 */
export interface ExportMalwaresRequest {
  /**
   * 限制条数,默认10
   */
  Limit?: number

  /**
   * 偏移量 默认0
   */
  Offset?: number

  /**
      * 过滤参数。
<li>IpOrAlias - String - 是否必填：否 - 主机ip或别名筛选</li>
<li>FilePath - String - 是否必填：否 - 路径筛选</li>
<li>VirusName - String - 是否必填：否 - 描述筛选</li>
<li>CreateBeginTime - String - 是否必填：否 - 创建时间筛选-开始时间</li>
<li>CreateEndTime - String - 是否必填：否 - 创建时间筛选-结束时间</li>
<li>Status - String - 是否必填：否 - 状态筛选</li>
      */
  Filters?: Array<Filters>

  /**
   * 排序值 CreateTime
   */
  By?: string

  /**
   * 排序 方式 ，ASC，DESC
   */
  Order?: string
}

/**
 * EditTags返回参数结构体
 */
export interface EditTagsResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * SyncAssetScan返回参数结构体
 */
export interface SyncAssetScanResponse {
  /**
   * 枚举值有(大写)：NOTASK（没有同步任务），SYNCING（同步中），FINISHED（同步完成）
   */
  State: string

  /**
   * 最新开始同步时间
   */
  LatestStartTime: string

  /**
   * 最新结束同步时间
   */
  LatestEndTime: string

  /**
      * 任务ID
注意：此字段可能返回 null，表示取不到有效值。
      */
  TaskId: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateBaselineStrategy请求参数结构体
 */
export interface CreateBaselineStrategyRequest {
  /**
   * 策略名称
   */
  StrategyName: string

  /**
   * 检测周期, 表示每隔多少天进行检测.示例: 2, 表示每2天进行检测一次.
   */
  ScanCycle: number

  /**
   * 定期检测时间，该时间下发扫描. 示例:“22:00”, 表示在22:00下发检测
   */
  ScanAt: string

  /**
   * 该策略下选择的基线id数组. 示例: [1,3,5,7]
   */
  CategoryIds: Array<number>

  /**
   * 扫描范围是否全部服务器, 1:是  0:否, 为1则为全部专业版主机
   */
  IsGlobal: number

  /**
      * 云主机类型：
CVM：虚拟主机
BM：裸金属
ECM：边缘计算主机
LH：轻量应用服务器
Other：混合云机器
      */
  MachineType: string

  /**
   * 主机地域. 示例: "ap-guangzhou"
   */
  RegionCode: string

  /**
   * 主机id数组. 示例: ["quuid1","quuid2"]
   */
  Quuids?: Array<string>
}

/**
 * DescribeSecurityTrends请求参数结构体
 */
export interface DescribeSecurityTrendsRequest {
  /**
   * 开始时间，如：2021-07-10
   */
  BeginDate: string

  /**
   * 结束时间，如：2021-07-10
   */
  EndDate: string
}

/**
 * DescribeAttackVulTypeList返回参数结构体
 */
export interface DescribeAttackVulTypeListResponse {
  /**
   * 威胁类型列表
   */
  List: Array<string>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribePrivilegeRules返回参数结构体
 */
export interface DescribePrivilegeRulesResponse {
  /**
   * 列表内容
   */
  List: Array<PrivilegeRule>

  /**
   * 总条数
   */
  TotalCount: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeReverseShellEvents返回参数结构体
 */
export interface DescribeReverseShellEventsResponse {
  /**
   * 列表内容
   */
  List: Array<ReverseShell>

  /**
   * 总条数
   */
  TotalCount: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 密码破解列表实体
 */
export interface BruteAttackInfo {
  /**
   * 唯一Id
   */
  Id: number

  /**
      * 云镜客户端唯一标识UUID
注意：此字段可能返回 null，表示取不到有效值。
      */
  Uuid: string

  /**
      * 主机ip
注意：此字段可能返回 null，表示取不到有效值。
      */
  MachineIp: string

  /**
      * 主机名
注意：此字段可能返回 null，表示取不到有效值。
      */
  MachineName: string

  /**
      * 用户名
注意：此字段可能返回 null，表示取不到有效值。
      */
  UserName: string

  /**
      * 来源ip
注意：此字段可能返回 null，表示取不到有效值。
      */
  SrcIp: string

  /**
      * SUCCESS：破解成功；FAILED：破解失败
注意：此字段可能返回 null，表示取不到有效值。
      */
  Status: string

  /**
      * 国家id
注意：此字段可能返回 null，表示取不到有效值。
      */
  Country: number

  /**
      * 城市id
注意：此字段可能返回 null，表示取不到有效值。
      */
  City: number

  /**
      * 省份id
注意：此字段可能返回 null，表示取不到有效值。
      */
  Province: number

  /**
      * 创建时间
注意：此字段可能返回 null，表示取不到有效值。
      */
  CreateTime: string

  /**
      * 阻断状态：1-阻断成功；非1-阻断失败
注意：此字段可能返回 null，表示取不到有效值。
      */
  BanStatus: number

  /**
      * 事件类型：200-暴力破解事件，300-暴力破解成功事件（页面展示），400-暴力破解不存在的帐号事件
注意：此字段可能返回 null，表示取不到有效值。
      */
  EventType: number

  /**
      * 发生次数
注意：此字段可能返回 null，表示取不到有效值。
      */
  Count: number

  /**
      * 机器UUID
注意：此字段可能返回 null，表示取不到有效值。
      */
  Quuid: string

  /**
      * 是否为专业版（true/false）
注意：此字段可能返回 null，表示取不到有效值。
      */
  IsProVersion: boolean

  /**
      * 被攻击的服务的用户名
注意：此字段可能返回 null，表示取不到有效值。
      */
  Protocol: string

  /**
      * 端口
注意：此字段可能返回 null，表示取不到有效值。
      */
  Port: number

  /**
      * 最近攻击时间
注意：此字段可能返回 null，表示取不到有效值。
      */
  ModifyTime: string

  /**
      * 实例ID
注意：此字段可能返回 null，表示取不到有效值。
      */
  InstanceId: string
}

/**
 * DescribeWebPageProtectStat返回参数结构体
 */
export interface DescribeWebPageProtectStatResponse {
  /**
   * 文件篡改信息
   */
  FileTamperNum: Array<ProtectStat>

  /**
   * 防护文件分类信息
   */
  ProtectFileType: Array<ProtectStat>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeExportMachines请求参数结构体
 */
export interface DescribeExportMachinesRequest {
  /**
      * 云主机类型。
<li>CVM：表示虚拟主机</li>
<li>BM:  表示黑石物理机</li>
      */
  MachineType: string

  /**
   * 机器所属地域。如：ap-guangzhou，ap-shanghai
   */
  MachineRegion: string

  /**
   * 返回数量，默认为10，最大值为100。
   */
  Limit?: number

  /**
   * 偏移量，默认为0。
   */
  Offset?: number

  /**
      * 过滤条件。
<li>Keywords - String - 是否必填：否 - 查询关键字 </li>
<li>Status - String - 是否必填：否 - 客户端在线状态（OFFLINE: 离线 | ONLINE: 在线 | UNINSTALLED：未安装）</li>
<li>Version - String  是否必填：否 - 当前防护版本（ PRO_VERSION：专业版 | BASIC_VERSION：基础版）</li>
每个过滤条件只支持一个值，暂不支持多个值“或”关系查询
      */
  Filters?: Array<Filter>

  /**
   * 机器所属业务ID列表
   */
  ProjectIds?: Array<number>
}

/**
 * DescribeAssetInfo返回参数结构体
 */
export interface DescribeAssetInfoResponse {
  /**
   * 主机数
   */
  MachineCount: number

  /**
   * 账号数
   */
  AccountCount: number

  /**
   * 端口数
   */
  PortCount: number

  /**
   * 进程数
   */
  ProcessCount: number

  /**
   * 软件数
   */
  SoftwareCount: number

  /**
   * 数据库数
   */
  DatabaseCount: number

  /**
   * Web应用数
   */
  WebAppCount: number

  /**
   * Web框架数
   */
  WebFrameCount: number

  /**
   * Web服务数
   */
  WebServiceCount: number

  /**
   * Web站点数
   */
  WebLocationCount: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * RenewProVersion请求参数结构体
 */
export interface RenewProVersionRequest {
  /**
   * 购买相关参数。
   */
  ChargePrepaid: ChargePrepaid

  /**
   * 主机唯一ID，对应CVM的uuid、BM的InstanceId。
   */
  Quuid: string
}

/**
 * 恶意请求列表
 */
export interface RiskDnsList {
  /**
   * 对外访问域名
   */
  Url: string

  /**
   * 访问次数
   */
  AccessCount: number

  /**
   * 进程名
   */
  ProcessName: string

  /**
   * 进程MD5
   */
  ProcessMd5: string

  /**
   * 是否为全局规则，0否，1是
   */
  GlobalRuleId: number

  /**
   * 用户规则id
   */
  UserRuleId: number

  /**
   * 状态；0-待处理，2-已加白，3-非信任状态
   */
  Status: number

  /**
   * 首次访问时间
   */
  CreateTime: string

  /**
   * 最近访问时间
   */
  MergeTime: string

  /**
   * 唯一 Quuid
   */
  Quuid: string

  /**
   * 主机ip
   */
  HostIp: string

  /**
   * 别名
   */
  Alias: string

  /**
   * 描述
   */
  Description: string

  /**
   * 唯一ID
   */
  Id: number

  /**
   * 参考
   */
  Reference: string

  /**
   * 命令行
   */
  CmdLine: string

  /**
   * 进程号
   */
  Pid: number

  /**
   * 唯一UUID
   */
  Uuid: string

  /**
   * 建议方案
   */
  SuggestScheme: string

  /**
   * 标签特性
   */
  Tags: Array<string>
}

/**
 * DeleteMalwareScanTask请求参数结构体
 */
export type DeleteMalwareScanTaskRequest = null

/**
 * ExportProtectDirList请求参数结构体
 */
export interface ExportProtectDirListRequest {
  /**
      * DirName 网站名称
DirPath 网站防护目录地址
      */
  Filters?: Array<AssetFilters>

  /**
   * asc：升序/desc：降序
   */
  Order?: string

  /**
   * 排序字段
   */
  By?: string
}

/**
 * CreateBaselineStrategy返回参数结构体
 */
export interface CreateBaselineStrategyResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ExportAssetCoreModuleList返回参数结构体
 */
export interface ExportAssetCoreModuleListResponse {
  /**
   * 异步下载任务ID，需要配合ExportTasks接口使用
   */
  TaskId: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeHistoryAccounts返回参数结构体
 */
export interface DescribeHistoryAccountsResponse {
  /**
   * 帐号变更历史列表记录总数。
   */
  TotalCount: number

  /**
   * 帐号变更历史数据数组。
   */
  HistoryAccounts: Array<HistoryAccount>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeLoginWhiteList请求参数结构体
 */
export interface DescribeLoginWhiteListRequest {
  /**
   * 返回数量，最大值为100。
   */
  Limit?: number

  /**
   * 偏移量，默认为0。
   */
  Offset?: number

  /**
      * 过滤条件。
<li>IpOrAlias - String - 是否必填：否 - 查询关键字 </li>
<li>UserName - String - 是否必填：否 - 用户名筛选 </li>
<li>ModifyBeginTime - String - 是否必填：否 - 按照修改时间段筛选，开始时间 </li>
<li>ModifyEndTime - String - 是否必填：否 - 按照修改时间段筛选，结束时间 </li>
      */
  Filters?: Array<Filter>
}

/**
 * 端口统计列表
 */
export interface OpenPortStatistics {
  /**
   * 端口号
   */
  Port: number

  /**
   * 主机数量
   */
  MachineNum: number
}

/**
 * ExportVulDetectionReport返回参数结构体
 */
export interface ExportVulDetectionReportResponse {
  /**
   * 导出文件下载链接地址
   */
  DownloadUrl: string

  /**
   * 导出检测报告的任务Id（不同于入参的漏洞扫描任务id）
   */
  TaskId: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeScanSchedule请求参数结构体
 */
export interface DescribeScanScheduleRequest {
  /**
   * 任务id
   */
  TaskId: number
}

/**
 * EditBashRules请求参数结构体
 */
export interface EditBashRulesRequest {
  /**
   * 规则名称
   */
  Name: string

  /**
   * 正则表达式
   */
  Rule: string

  /**
   * 规则ID（新增时不填）
   */
  Id?: number

  /**
   * 客户端ID数组
   */
  Uuids?: Array<string>

  /**
   * 主机IP
   */
  HostIp?: string

  /**
   * 危险等级(0:无，1: 高危 2:中危 3: 低危)
   */
  Level?: number

  /**
   * 是否全局规则(默认否)：1-全局，0-非全局
   */
  IsGlobal?: number

  /**
   * 0=黑名单， 1=白名单
   */
  White?: number

  /**
   * 事件列表点击“加入白名单”时,需要传EventId 事件的id
   */
  EventId?: number

  /**
   * 是否处理旧事件为白名单 0=不处理 1=处理
   */
  DealOldEvents?: number
}

/**
 * DescribeMalwareRiskWarning请求参数结构体
 */
export type DescribeMalwareRiskWarningRequest = null

/**
 * ScanVulSetting请求参数结构体
 */
export interface ScanVulSettingRequest {
  /**
   * 定期检测间隔时间（天）
   */
  TimerInterval: number

  /**
   * 漏洞类型：1: web应用漏洞 2:系统组件漏洞, 以数组方式传参[1,2]
   */
  VulCategories?: Array<number>

  /**
   * 危害等级：1-低危；2-中危；3-高危；4-严重,以数组方式传参[1,2,3]
   */
  VulLevels?: Array<number>

  /**
   * 定期检测时间，如：02:10:50
   */
  TimerTime?: string

  /**
   * 是否是应急漏洞 0 否 1 是
   */
  VulEmergency?: number

  /**
   * 扫描开始时间，如：00:00
   */
  StartTime?: string

  /**
   * 扫描结束时间，如：08:00
   */
  EndTime?: string

  /**
   * 是否开启扫描 1开启 0不开启
   */
  EnableScan?: number
}

/**
 * ExportScanTaskDetails请求参数结构体
 */
export interface ExportScanTaskDetailsRequest {
  /**
   * 本次检测的任务id（不同于出参的导出本次检测Excel的任务Id）
   */
  TaskId: number

  /**
   * 模块类型，当前提供：Malware 木马 , Vul 漏洞 , Baseline 基线
   */
  ModuleType: string

  /**
   * 过滤参数：ipOrAlias（服务器名/ip）
   */
  Filters?: Array<Filters>
}

/**
 * ExportBaselineList返回参数结构体
 */
export interface ExportBaselineListResponse {
  /**
      * 导出文件下载地址（已弃用）
注意：此字段可能返回 null，表示取不到有效值。
      */
  DownloadUrl: string

  /**
   * 导出文件Id 可通过ExportTasks接口下载
   */
  TaskId: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyBanMode返回参数结构体
 */
export interface ModifyBanModeResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * TrustMalwares返回参数结构体
 */
export interface TrustMalwaresResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeLoginWhiteCombinedList返回参数结构体
 */
export interface DescribeLoginWhiteCombinedListResponse {
  /**
   * 总数量
   */
  TotalCount: number

  /**
      * 合并后的白名单列表
注意：此字段可能返回 null，表示取不到有效值。
      */
  LoginWhiteCombinedInfos: Array<LoginWhiteCombinedInfo>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ExportVulDetectionExcel返回参数结构体
 */
export interface ExportVulDetectionExcelResponse {
  /**
   * 导出文件下载链接地址
   */
  DownloadUrl: string

  /**
   * 导出本次漏洞检测Excel的任务Id（不同于入参的本次漏洞检测任务id）
   */
  TaskId: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeWarningList返回参数结构体
 */
export interface DescribeWarningListResponse {
  /**
   * 获取告警列表
   */
  WarningInfoList: Array<WarningInfoObj>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateSearchTemplate请求参数结构体
 */
export interface CreateSearchTemplateRequest {
  /**
   * 搜索模板
   */
  SearchTemplate: SearchTemplate
}

/**
 * DeleteTags请求参数结构体
 */
export interface DeleteTagsRequest {
  /**
   * 标签ID (最大100 条)
   */
  Ids: Array<number>
}

/**
 * DescribeScanState请求参数结构体
 */
export interface DescribeScanStateRequest {
  /**
   * 模块类型 当前提供 Malware 木马 , Vul 漏洞 , Baseline 基线
   */
  ModuleType: string

  /**
      * 过滤参数;
<li>StrategyId 基线策略ID ,仅ModuleType 为 Baseline 时需要<li/>
      */
  Filters?: Array<Filters>
}

/**
 * ModifyMalwareTimingScanSettings请求参数结构体
 */
export interface ModifyMalwareTimingScanSettingsRequest {
  /**
   * 检测模式 0 全盘检测  1快速检测
   */
  CheckPattern: number

  /**
   * 检测周期 开始时间，如：02:00:00
   */
  StartTime: string

  /**
   * 检测周期 超时结束时间，如：04:00:00
   */
  EndTime: string

  /**
   * 是否全部服务器 1 全部 2 自选
   */
  IsGlobal: number

  /**
   * 定时检测开关 0 关闭 1开启
   */
  EnableScan: number

  /**
   * 监控模式 0 标准 1深度
   */
  MonitoringPattern: number

  /**
   * 扫描周期 默认每天 1
   */
  Cycle: number

  /**
   * 实时监控 0 关闭 1开启
   */
  RealTimeMonitoring: number

  /**
   * 自选服务器时必须 主机quuid的string数组
   */
  QuuidList?: Array<string>

  /**
   * 是否自动隔离 1隔离 0 不隔离
   */
  AutoIsolation?: number
}

/**
 * DescribeMachineList返回参数结构体
 */
export interface DescribeMachineListResponse {
  /**
   * 主机列表
   */
  Machines: Array<Machine>

  /**
   * 主机数量
   */
  TotalCount: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 恶意文件详情
 */
export interface MalwareInfo {
  /**
   * 病毒名称
   */
  VirusName: string

  /**
   * 文件大小
   */
  FileSize: number

  /**
   * 文件MD5
   */
  MD5: string

  /**
   * 文件地址
   */
  FilePath: string

  /**
   * 首次运行时间
   */
  FileCreateTime: string

  /**
   * 最近一次运行时间
   */
  FileModifierTime: string

  /**
   * 危害描述
   */
  HarmDescribe: string

  /**
   * 建议方案
   */
  SuggestScheme: string

  /**
   * 服务器名称
   */
  ServersName: string

  /**
   * 服务器IP
   */
  HostIp: string

  /**
   * 进程名称
   */
  ProcessName: string

  /**
   * 进程ID
   */
  ProcessID: string

  /**
   * 标签特性
   */
  Tags: Array<string>

  /**
      * 影响广度 // 暂时不提供
注意：此字段可能返回 null，表示取不到有效值。
      */
  Breadth: string

  /**
      * 查询热度 // 暂时不提供
注意：此字段可能返回 null，表示取不到有效值。
      */
  Heat: string

  /**
   * 唯一ID
   */
  Id: number

  /**
   * 文件名称
   */
  FileName: string

  /**
   * 首次发现时间
   */
  CreateTime: string

  /**
   * 最近扫描时间
   */
  LatestScanTime: string

  /**
   * 参考链接
   */
  Reference: string
}

/**
 * 登录地信息
 */
export interface Place {
  /**
   * 城市 ID。
   */
  CityId: number

  /**
   * 省份 ID。
   */
  ProvinceId: number

  /**
   * 国家ID，暂只支持国内：1。
   */
  CountryId: number

  /**
   * 位置名称
   */
  Location?: string
}

/**
 * DeleteReverseShellRules返回参数结构体
 */
export interface DeleteReverseShellRulesResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeScanTaskDetails请求参数结构体
 */
export interface DescribeScanTaskDetailsRequest {
  /**
   * 模块类型 当前提供 Malware 木马 , Vul 漏洞 , Baseline 基线
   */
  ModuleType: string

  /**
   * 任务ID
   */
  TaskId: number

  /**
   * 过滤参数
   */
  Filters?: Array<Filters>

  /**
   * 需要返回的数量，最大值为100
   */
  Limit?: number

  /**
   * 偏移量，默认为0。
   */
  Offset?: number
}

/**
 * DescribeProtectDirRelatedServer请求参数结构体
 */
export interface DescribeProtectDirRelatedServerRequest {
  /**
   * 唯一ID
   */
  Id: string

  /**
   * 分页条数 最大100条
   */
  Limit: number

  /**
   * 偏移量
   */
  Offset: number

  /**
   * 过滤参数 ProtectStatus
   */
  Filters?: Array<Filter>

  /**
   * 排序方式
   */
  Order?: string

  /**
   * 排序值
   */
  By?: string
}

/**
 * InquiryPriceOpenProVersionPrepaid返回参数结构体
 */
export interface InquiryPriceOpenProVersionPrepaidResponse {
  /**
   * 预支费用的原价，单位：元。
   */
  OriginalPrice: number

  /**
   * 预支费用的折扣价，单位：元。
   */
  DiscountPrice: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeBanRegions请求参数结构体
 */
export interface DescribeBanRegionsRequest {
  /**
   * 阻断模式，STANDARD_MODE：标准阻断，DEEP_MODE：深度阻断
   */
  Mode: string
}

/**
 * 安全事件统计列表
 */
export interface SecurityEventInfo {
  /**
   * 安全事件数
   */
  EventCnt: number

  /**
   * 受影响机器数
   */
  UuidCnt: number
}

/**
 * ModifyBanMode请求参数结构体
 */
export interface ModifyBanModeRequest {
  /**
   * 阻断模式，STANDARD_MODE：标准阻断，DEEP_MODE：深度阻断
   */
  Mode: string

  /**
   * 阻断时间，用于标准阻断模式
   */
  Ttl?: number
}

/**
 * ExportBaselineList请求参数结构体
 */
export interface ExportBaselineListRequest {
  /**
      * 过滤条件：
<li>StrategyId- Uint64 - 基线策略id</li>
<li>Status - Uint64 - 事件状态：0-未通过，1-忽略，3-通过，5-检测中</li>
<li>BaselineName  - String - 基线名称</li>
<li>AliasName- String - 服务器名称/服务器ip</li>
<li>Uuid- String - 主机uuid</li>
      */
  Filters?: Array<Filters>

  /**
   * 已废弃
   */
  IfDetail?: number
}

/**
 * DescribeVulTop返回参数结构体
 */
export interface DescribeVulTopResponse {
  /**
      * 漏洞top列表
注意：此字段可能返回 null，表示取不到有效值。
      */
  VulTopList: Array<VulTopInfo>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteBashEvents请求参数结构体
 */
export interface DeleteBashEventsRequest {
  /**
   * ID数组，最大100条。
   */
  Ids: Array<number>
}

/**
 * SeparateMalwares请求参数结构体
 */
export interface SeparateMalwaresRequest {
  /**
   * 木马事件ID数组。(最大100条)
   */
  Ids: Array<number>
}

/**
 * ExportIgnoreRuleEffectHostList请求参数结构体
 */
export interface ExportIgnoreRuleEffectHostListRequest {
  /**
   * 检测项id
   */
  RuleId: number

  /**
      * 过滤条件。
<li>AliasName- String- 主机别名</li>
      */
  Filters?: Array<Filters>
}

/**
 * 需要开通专业版机器信息。
 */
export interface ProVersionMachine {
  /**
      * 主机类型。
<li>CVM: 云服务器</li>
<li>BM: 黑石物理机</li>
<li>ECM: 边缘计算服务器</li>
<li>LH: 轻量应用服务器</li>
<li>Other: 混合云机器</li>
      */
  MachineType: string

  /**
      * 主机所在地域。
如：ap-guangzhou、ap-beijing
      */
  MachineRegion: string

  /**
      * 主机唯一标识Uuid数组。
黑石的InstanceId，CVM的Uuid ,边缘计算的Uuid , 轻量应用服务器的Uuid ,混合云机器的Quuid 。 当前参数最大长度限制20
      */
  Quuid: string
}

/**
 * DescribeSecurityDynamics返回参数结构体
 */
export interface DescribeSecurityDynamicsResponse {
  /**
   * 安全事件消息数组。
   */
  SecurityDynamics: Array<SecurityDynamic>

  /**
   * 记录总数。
   */
  TotalCount: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CloseProVersion返回参数结构体
 */
export interface CloseProVersionResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteAttackLogs请求参数结构体
 */
export interface DeleteAttackLogsRequest {
  /**
   * 日志ID数组，最大100条。
   */
  Ids: Array<number>
}

/**
 * ModifyProVersionRenewFlag请求参数结构体
 */
export interface ModifyProVersionRenewFlagRequest {
  /**
      * 自动续费标识。取值范围：
<li>NOTIFY_AND_AUTO_RENEW：通知过期且自动续费</li>
<li>NOTIFY_AND_MANUAL_RENEW：通知过期不自动续费</li>
<li>DISABLE_NOTIFY_AND_MANUAL_RENEW：不通知过期不自动续费</li>
      */
  RenewFlag: string

  /**
   * 主机唯一ID，对应CVM的uuid、BM的instanceId。
   */
  Quuid: string
}

/**
 * SwitchBashRules请求参数结构体
 */
export interface SwitchBashRulesRequest {
  /**
   * 规则ID
   */
  Id: number

  /**
   * 是否禁用
   */
  Disabled: number
}

/**
 * 描述键值对过滤器，用于条件过滤查询。例如过滤ID、名称、状态等

若存在多个Filter时，Filter间的关系为逻辑与（AND）关系。
若同一个Filter存在多个Values，同一Filter下Values间的关系为逻辑或（OR）关系。

* 最多只能有5个Filter
* 同一个Filter存在多个Values，Values值数量最多不能超过5个。

 */
export interface Filter {
  /**
   * 过滤键的名称。
   */
  Name: string

  /**
   * 一个或者多个过滤值。
   */
  Values: Array<string>

  /**
   * 模糊搜索
   */
  ExactMatch?: boolean
}

/**
 * DescribeAccountStatistics请求参数结构体
 */
export interface DescribeAccountStatisticsRequest {
  /**
   * 返回数量，默认为10，最大值为100。
   */
  Limit?: number

  /**
   * 偏移量，默认为0。
   */
  Offset?: number

  /**
      * 过滤条件。
<li>Username - String - 是否必填：否 - 帐号用户名</li>
      */
  Filters?: Array<Filter>
}

/**
 * DescribeESHits返回参数结构体
 */
export interface DescribeESHitsResponse {
  /**
   * ES查询结果JSON
   */
  Data: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeSaveOrUpdateWarnings请求参数结构体
 */
export interface DescribeSaveOrUpdateWarningsRequest {
  /**
   * 告警设置的修改内容
   */
  WarningObjects?: Array<WarningObject>
}

/**
 * 预付费模式，即包年包月相关参数设置。通过该参数可以指定包年包月实例的购买时长、是否设置自动续费等属性。
 */
export interface ChargePrepaid {
  /**
   * 购买实例的时长，单位：月。取值范围：1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 24, 36。
   */
  Period: number

  /**
      * 自动续费标识。取值范围：
<li>NOTIFY_AND_AUTO_RENEW：通知过期且自动续费</li>
<li>NOTIFY_AND_MANUAL_RENEW：通知过期不自动续费</li>
<li>DISABLE_NOTIFY_AND_MANUAL_RENEW：不通知过期不自动续费</li>

默认取值：NOTIFY_AND_MANUAL_RENEW。若该参数指定为NOTIFY_AND_AUTO_RENEW，在账户余额充足的情况下，实例到期后将按月自动续费。
      */
  RenewFlag?: string
}

/**
 * 进程数据统计数据。
 */
export interface ProcessStatistics {
  /**
   * 进程名。
   */
  ProcessName: string

  /**
   * 主机数量。
   */
  MachineNum: number
}

/**
 * DescribeScanSchedule返回参数结构体
 */
export interface DescribeScanScheduleResponse {
  /**
      * 检测进度
注意：此字段可能返回 null，表示取不到有效值。
      */
  Schedule: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 基线详情
 */
export interface BaselineDetail {
  /**
      * 基线描述
注意：此字段可能返回 null，表示取不到有效值。
      */
  Description: string

  /**
      * 危害等级
注意：此字段可能返回 null，表示取不到有效值。
      */
  Level: number

  /**
      * package名
注意：此字段可能返回 null，表示取不到有效值。
      */
  PackageName: string

  /**
      * 父级id
注意：此字段可能返回 null，表示取不到有效值。
      */
  ParentId: number

  /**
      * 基线名
注意：此字段可能返回 null，表示取不到有效值。
      */
  Name: string
}

/**
 * ModifyWebPageProtectDir返回参数结构体
 */
export interface ModifyWebPageProtectDirResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 帐号统计数据。
 */
export interface AccountStatistics {
  /**
   * 用户名。
   */
  Username: string

  /**
   * 主机数量。
   */
  MachineNum: number
}

/**
 * DescribeMachines返回参数结构体
 */
export interface DescribeMachinesResponse {
  /**
   * 主机列表
   */
  Machines: Array<Machine>

  /**
   * 主机数量
   */
  TotalCount: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeVulLevelCount请求参数结构体
 */
export type DescribeVulLevelCountRequest = null

/**
 * DescribeVulHostCountScanTime请求参数结构体
 */
export type DescribeVulHostCountScanTimeRequest = null

/**
 * DescribeProVersionStatus请求参数结构体
 */
export interface DescribeProVersionStatusRequest {
  /**
   * 云镜客户端UUID、填写"all"表示所有主机。
   */
  Uuid: string
}

/**
 * 本地提权规则
 */
export interface PrivilegeRule {
  /**
   * 规则ID
   */
  Id: number

  /**
   * 客户端ID
   */
  Uuid: string

  /**
   * 进程名
   */
  ProcessName: string

  /**
   * 是否S权限
   */
  SMode: number

  /**
   * 操作人
   */
  Operator: string

  /**
   * 是否全局规则
   */
  IsGlobal: number

  /**
   * 状态(0: 有效 1: 无效)
   */
  Status: number

  /**
   * 创建时间
   */
  CreateTime: string

  /**
   * 修改时间
   */
  ModifyTime: string

  /**
   * 主机IP
   */
  Hostip: string
}

/**
 * ExportVulEffectHostList返回参数结构体
 */
export interface ExportVulEffectHostListResponse {
  /**
      * 已废弃
注意：此字段可能返回 null，表示取不到有效值。
      */
  DownloadUrl: string

  /**
   * 导出任务Id , 可通过ExportTasks 接口下载
   */
  TaskId: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeVulTop请求参数结构体
 */
export interface DescribeVulTopRequest {
  /**
   * 漏洞风险服务器top，1-100
   */
  Top: number

  /**
   * 1: web应用漏洞 2=系统组件漏洞3:安全基线 4: Linux系统漏洞 5: windows补丁，传0的时候表示查应急漏洞
   */
  VulCategory?: number
}

/**
 * DescribeProVersionStatus返回参数结构体
 */
export interface DescribeProVersionStatusResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 快速搜索模板
 */
export interface SearchTemplate {
  /**
   * 检索名称
   */
  Name: string

  /**
   * 检索索引类型
   */
  LogType: string

  /**
   * 检索语句
   */
  Condition: string

  /**
   * 时间范围
   */
  TimeRange: string

  /**
   * 转换的检索语句内容
   */
  Query: string

  /**
   * 检索方式。输入框检索：standard,过滤，检索：simple
   */
  Flag: string

  /**
   * 展示数据
   */
  DisplayData: string

  /**
   * 规则ID
   */
  Id?: number
}

/**
 * DescribeGeneralStat返回参数结构体
 */
export interface DescribeGeneralStatResponse {
  /**
   * 云主机总数
   */
  MachinesAll: number

  /**
   * 云主机没有安装主机安全客户端的总数
   */
  MachinesUninstalled: number

  /**
   * 主机安全客户端总数的总数
   */
  AgentsAll: number

  /**
   * 主机安全客户端在线的总数
   */
  AgentsOnline: number

  /**
   * 主机安全客户端 离线+关机 的总数
   */
  AgentsOffline: number

  /**
   * 主机安全客户端专业版的总数
   */
  AgentsPro: number

  /**
   * 主机安全客户端基础版的总数
   */
  AgentsBasic: number

  /**
   * 7天内到期的预付费专业版总数
   */
  AgentsProExpireWithInSevenDays: number

  /**
   * 风险主机总数
   */
  RiskMachine: number

  /**
   * 已关机总数
   */
  Shutdown: number

  /**
   * 已离线总数
   */
  Offline: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ExportNonlocalLoginPlaces请求参数结构体
 */
export interface ExportNonlocalLoginPlacesRequest {
  /**
   * <li>Status - int - 是否必填：否 - 状态筛选1:正常登录；2：异地登录</li>
   */
  Filters?: Array<Filter>
}

/**
 * DeleteMachineTag返回参数结构体
 */
export interface DeleteMachineTagResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeSecurityEventsCnt返回参数结构体
 */
export interface DescribeSecurityEventsCntResponse {
  /**
   * 木马文件相关风险事件
   */
  Malware: SecurityEventInfo

  /**
   * 登录审计相关风险事件
   */
  HostLogin: SecurityEventInfo

  /**
   * 密码破解相关风险事件
   */
  BruteAttack: SecurityEventInfo

  /**
   * 恶意请求相关风险事件
   */
  RiskDns: SecurityEventInfo

  /**
   * 高危命令相关风险事件
   */
  Bash: SecurityEventInfo

  /**
   * 本地提权相关风险事件
   */
  PrivilegeRules: SecurityEventInfo

  /**
   * 反弹Shell相关风险事件
   */
  ReverseShell: SecurityEventInfo

  /**
   * 系统组件相关风险事件
   */
  SysVul: SecurityEventInfo

  /**
   * Web应用漏洞相关风险事件
   */
  WebVul: SecurityEventInfo

  /**
   * 应急漏洞相关风险事件
   */
  EmergencyVul: SecurityEventInfo

  /**
   * 安全基线相关风险事件
   */
  BaseLine: SecurityEventInfo

  /**
   * 攻击检测相关风险事件
   */
  AttackLogs: SecurityEventInfo

  /**
   * 受影响机器数
   */
  EffectMachineCount: number

  /**
   * 所有事件总数
   */
  EventsCount: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 告警设置列表
 */
export interface WarningInfoObj {
  /**
   * 事件告警类型；1：离线，2：木马，3：异常登录，4：爆破，5：漏洞（已拆分为9-12四种类型）6：高危命令，7：反弹sell，8：本地提权，9：系统组件漏洞，10：wen应用漏洞，11：应急漏洞，12：安全基线 ,13: 防篡改
   */
  Type: number

  /**
   * 1: 关闭告警 0: 开启告警
   */
  DisablePhoneWarning: number

  /**
   * 开始时间，格式: HH:mm
   */
  BeginTime: string

  /**
   * 结束时间，格式: HH:mm
   */
  EndTime: string

  /**
   * 时区信息
   */
  TimeZone: string

  /**
   * 漏洞等级控制位（对应DB的十进制存储）
   */
  ControlBit: number

  /**
   * 漏洞等级控制位二进制，每一位对应页面漏洞等级的开启关闭：低中高（0:关闭；1：开启），例如：101 → 同时勾选低+高
   */
  ControlBits: string
}

/**
 * OpenProVersion请求参数结构体
 */
export interface OpenProVersionRequest {
  /**
   * 云主机类型。(当前参数已作废,可以留空值 )
   */
  MachineType: string

  /**
   * 机器所属地域。(当前参数已作废,可以留空值 )
   */
  MachineRegion: string

  /**
      * 主机唯一标识Uuid数组。
黑石的InstanceId，CVM的Uuid ,边缘计算的Uuid , 轻量应用服务器的Uuid ,混合云机器的Quuid 。 当前参数最大长度限制20
      */
  Quuids: Array<string>

  /**
   * 活动ID。
   */
  ActivityId?: number
}

/**
 * UpdateMachineTags请求参数结构体
 */
export interface UpdateMachineTagsRequest {
  /**
   * 机器 Quuid
   */
  Quuid: string

  /**
   * 服务器地区 如: ap-guangzhou
   */
  MachineRegion: string

  /**
   * 服务器类型(CVM|BM|ECM|LH|Other)
   */
  MachineArea: string

  /**
   * 标签ID，该操作会覆盖原有的标签列表
   */
  TagIds?: Array<number>
}

/**
 * DescribeHostLoginList返回参数结构体
 */
export interface DescribeHostLoginListResponse {
  /**
   * 总数
   */
  TotalCount: number

  /**
      * 登录审计列表
注意：此字段可能返回 null，表示取不到有效值。
      */
  HostLoginList: Array<HostLoginList>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteBaselineStrategy请求参数结构体
 */
export interface DeleteBaselineStrategyRequest {
  /**
   * 基线策略id
   */
  StrategyId: number
}

/**
 * 描述键值对过滤器，用于条件过滤查询。例如过滤ID、名称、状态等

若存在多个Filter时，Filter间的关系为逻辑与（AND）关系。
若同一个Filter存在多个Values，同一Filter下Values间的关系为逻辑或（OR）关系。
 */
export interface Filters {
  /**
   * 过滤键的名称。
   */
  Name: string

  /**
   * 一个或者多个过滤值。
   */
  Values: Array<string>

  /**
   * 是否模糊匹配，前端框架会带上，可以不管
   */
  ExactMatch?: boolean
}

/**
 * CreateSearchLog请求参数结构体
 */
export interface CreateSearchLogRequest {
  /**
   * 搜索内容
   */
  SearchContent: string
}

/**
 * DescribeSearchTemplates请求参数结构体
 */
export interface DescribeSearchTemplatesRequest {
  /**
   * 偏移量，默认为0。
   */
  Offset?: number

  /**
   * 返回数量，默认为10，最大值为100。
   */
  Limit?: number
}

/**
 * CancelIgnoreVul请求参数结构体
 */
export interface CancelIgnoreVulRequest {
  /**
   * 漏洞事件id串，多个用英文逗号分隔
   */
  EventIds: string
}
