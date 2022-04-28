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
 * DescribeBaselineTop返回参数结构体
 */
export interface DescribeBaselineTopResponse {
  /**
      * 检测项Top列表
注意：此字段可能返回 null，表示取不到有效值。
      */
  RuleTopList: Array<BaselineRuleTopInfo>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeAssetWebServiceInfoList返回参数结构体
 */
export interface DescribeAssetWebServiceInfoListResponse {
  /**
      * 列表
注意：此字段可能返回 null，表示取不到有效值。
      */
  WebServices: Array<AssetWebServiceBaseInfo>

  /**
   * 总数量
   */
  Total: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeAssetAppProcessList返回参数结构体
 */
export interface DescribeAssetAppProcessListResponse {
  /**
      * 进程列表
注意：此字段可能返回 null，表示取不到有效值。
      */
  Process: Array<AssetAppProcessInfo>

  /**
   * 分区总数
   */
  Total: number

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
 * 恶意请求白名单列表信息
 */
export interface MaliciousRequestWhiteListInfo {
  /**
   * 白名单id
   */
  Id: number

  /**
   * 域名
   */
  Domain: string

  /**
   * 备注
   */
  Mark: string

  /**
   * 创建时间
   */
  CreateTime: string

  /**
   * 更新时间
   */
  ModifyTime: string
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
 * DescribeAssetProcessInfoList请求参数结构体
 */
export interface DescribeAssetProcessInfoListRequest {
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
<li>Name - String - 是否必填：否 - 进程名</li>
<li>User - String - 是否必填：否 - 进程用户</li>
<li>Group - String - 是否必填：否 - 进程用户组</li>
<li>Pid - uint64 - 是否必填：否 - 进程ID</li>
<li>Ppid - uint64 - 是否必填：否 - 父进程ID</li>
<li>OsType - uint64 - 是否必填：否 - windows/linux</li>
<li>Status - string - 是否必填：否 - 进程状态：
1:R 可执行
2:S 可中断
3:D 不可中断
4:T 暂停状态或跟踪状态
5:Z 僵尸状态
6:X 将被销毁</li>
<li>RunTimeStart - String - 是否必填：否 - 运行开始时间</li>
<li>RunTimeEnd - String - 是否必填：否 - 运行结束时间</li>
<li>InstallByPackage - uint64 - 是否必填：否 - 是否包安装：0否，1是</li>
<li>Os -String 是否必填: 否 - 操作系统( DescribeMachineOsList 接口 值 )</li>
      */
  Filters?: Array<Filter>

  /**
   * 查询指定Quuid主机的信息
   */
  Quuid?: string

  /**
   * 排序方式，asc升序 或 desc降序
   */
  Order?: string

  /**
   * 排序方式：StartTime
   */
  By?: string
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
 * 资产管理网卡信息
 */
export interface AssetNetworkCardInfo {
  /**
   * 网卡名称
   */
  Name: string

  /**
   * Ipv4对应IP
   */
  Ip: string

  /**
   * 网关
   */
  GateWay: string

  /**
   * MAC地址
   */
  Mac: string

  /**
   * Ipv6对应IP
   */
  Ipv6: string

  /**
   * DNS服务器
   */
  DnsServer: string
}

/**
 * DescribeAssetWebFrameList请求参数结构体
 */
export interface DescribeAssetWebFrameListRequest {
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
<li>Name - String - 是否必填：否 - 框架名</li>
<li>NameStrict - String - 是否必填：否 - 框架名（严格匹配）</li>
<li>Lang - String - 是否必填：否 - 框架语言:java/python</li>
<li>Type - String - 是否必填：否 - 服务类型：
0：全部
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
<li>OsType - String - 是否必填：否 - windows/linux</li>
<li>Os -String 是否必填: 否 - 操作系统( DescribeMachineOsList 接口 值 )</li>
      */
  Filters?: Array<Filter>

  /**
   * 排序方式，asc升序 或 desc降序
   */
  Order?: string

  /**
   * 可选排序：JarCount
   */
  By?: string

  /**
   * 查询指定Quuid主机的信息
   */
  Quuid?: string
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
 * DescribeBaselineHostTop返回参数结构体
 */
export interface DescribeBaselineHostTopResponse {
  /**
      * 主机基线策略事件Top
注意：此字段可能返回 null，表示取不到有效值。
      */
  BaselineHostTopList: Array<BaselineHostTopList>

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
 * 基线影响主机信息
 */
export interface BaselineEffectHost {
  /**
      * 通过项
注意：此字段可能返回 null，表示取不到有效值。
      */
  PassCount: number

  /**
      * 风险项
注意：此字段可能返回 null，表示取不到有效值。
      */
  FailCount: number

  /**
      * 首次检测事件
注意：此字段可能返回 null，表示取不到有效值。
      */
  FirstScanTime: string

  /**
      * 最后检测时间
注意：此字段可能返回 null，表示取不到有效值。
      */
  LastScanTime: string

  /**
      * 风险项处理状态状态：0-未通过，1-通过
注意：此字段可能返回 null，表示取不到有效值。
      */
  Status: number

  /**
      * 主机Quuid
注意：此字段可能返回 null，表示取不到有效值。
      */
  Quuid: string

  /**
      * 主机IP
注意：此字段可能返回 null，表示取不到有效值。
      */
  HostIp: string

  /**
      * 主机别名
注意：此字段可能返回 null，表示取不到有效值。
      */
  AliasName: string

  /**
      * 主机Uuid
注意：此字段可能返回 null，表示取不到有效值。
      */
  Uuid: string

  /**
      * 检测中状态
注意：此字段可能返回 null，表示取不到有效值。
      */
  MaxStatus: number
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
      * 漏洞分类 1: web-cms漏洞 2:应用漏洞  4: Linux软件漏洞 5: Windows系统漏洞
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
      * CVSS信息
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
      * 漏洞标签 多个逗号分割
注意：此字段可能返回 null，表示取不到有效值。
      */
  Labels: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeBaselineStrategyDetail请求参数结构体
 */
export interface DescribeBaselineStrategyDetailRequest {
  /**
   * 用户基线策略id
   */
  StrategyId: number
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
   * 状态；4-:待处理，5-已信任，6-已隔离，8-文件已删除
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

  /**
   * 风险等级 0未知、1低、2中、3高、4严重
   */
  Level: number
}

/**
 * DescribeAssetUserInfo返回参数结构体
 */
export interface DescribeAssetUserInfoResponse {
  /**
   * 用户详细信息
   */
  User: AssetUserDetail

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
 * DescribeBaselineEffectHostList返回参数结构体
 */
export interface DescribeBaselineEffectHostListResponse {
  /**
      * 记录总数
注意：此字段可能返回 null，表示取不到有效值。
      */
  TotalCount: number

  /**
      * 影响服务器列表
注意：此字段可能返回 null，表示取不到有效值。
      */
  EffectHostList: Array<BaselineEffectHost>

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
   * 漏洞的分类: 1: web-cms漏洞 2:应用漏洞  4: Linux软件漏洞 5: Windows系统漏洞
   */
  VulCategory?: number

  /**
   * 是否为应急漏洞筛选  是: yes
   */
  IfEmergency?: string
}

/**
 * DescribeBaselineStrategyList返回参数结构体
 */
export interface DescribeBaselineStrategyListResponse {
  /**
      * 分页查询记录的总数
注意：此字段可能返回 null，表示取不到有效值。
      */
  TotalCount: number

  /**
      * 用户策略信息列表
注意：此字段可能返回 null，表示取不到有效值。
      */
  StrategyList: Array<Strategy>

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
 * DescribeAssetEnvList返回参数结构体
 */
export interface DescribeAssetEnvListResponse {
  /**
      * 列表
注意：此字段可能返回 null，表示取不到有效值。
      */
  Envs: Array<AssetEnvBaseInfo>

  /**
   * 总数量
   */
  Total: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
 * 专家服务-旗舰护网信息
 */
export interface ProtectNetInfo {
  /**
   * 任务id
   */
  TaskId: string

  /**
   * 护网天数
   */
  ProtectDays: number

  /**
   * 护网状态 0未启动，1护网中，2已完成
   */
  Status: number

  /**
   * 护网启动时间
   */
  StartTime: string

  /**
   * 护网完成时间
   */
  EndTime: string

  /**
   * 报告下载地址
   */
  ReportPath: string
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
 * DescribeAvailableExpertServiceDetail返回参数结构体
 */
export interface DescribeAvailableExpertServiceDetailResponse {
  /**
   * 安全管家订单
   */
  ExpertService: Array<ExpertServiceOrderInfo>

  /**
   * 应急响应可用次数
   */
  EmergencyResponse: number

  /**
   * 旗舰护网可用次数
   */
  ProtectNet: number

  /**
   * 是否购买过安全管家
   */
  ExpertServiceBuy: boolean

  /**
   * 是否购买过应急响应
   */
  EmergencyResponseBuy: boolean

  /**
   * 是否购买过旗舰护网
   */
  ProtectNetBuy: boolean

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
 * DescribeAvailableExpertServiceDetail请求参数结构体
 */
export type DescribeAvailableExpertServiceDetailRequest = null

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
 * 忽略检测项影响主机信息
 */
export interface IgnoreRuleEffectHostInfo {
  /**
      * 主机名称
注意：此字段可能返回 null，表示取不到有效值。
      */
  HostName: string

  /**
      * 危害等级：1-低位，2-中危，3-高危，4-严重
注意：此字段可能返回 null，表示取不到有效值。
      */
  Level: number

  /**
      * 主机标签数组
注意：此字段可能返回 null，表示取不到有效值。
      */
  TagList: Array<string>

  /**
      * 状态：0-未通过，1-忽略，3-已通过，5-检测中
注意：此字段可能返回 null，表示取不到有效值。
      */
  Status: number

  /**
      * 最后检测时间
注意：此字段可能返回 null，表示取不到有效值。
      */
  LastScanTime: string

  /**
      * 事件id
注意：此字段可能返回 null，表示取不到有效值。
      */
  EventId: number

  /**
      * 主机quuid
注意：此字段可能返回 null，表示取不到有效值。
      */
  Quuid: string
}

/**
 * DescribeBanMode请求参数结构体
 */
export type DescribeBanModeRequest = null

/**
 * DescribeSecurityEventStat请求参数结构体
 */
export interface DescribeSecurityEventStatRequest {
  /**
   * 该接口无过滤条件
   */
  Filters?: Array<Filter>
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

  /**
      * cve编号
注意：此字段可能返回 null，表示取不到有效值。
      */
  CveId: string

  /**
      * CVSS评分
注意：此字段可能返回 null，表示取不到有效值。
      */
  CvssScore: number

  /**
      * 漏洞标签 多个逗号分割
注意：此字段可能返回 null，表示取不到有效值。
      */
  Labels: string

  /**
      * 影响机器数
注意：此字段可能返回 null，表示取不到有效值。
      */
  HostCount: number
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
 * DescribeAssetInitServiceList请求参数结构体
 */
export interface DescribeAssetInitServiceListRequest {
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
<li>Name- string - 是否必填：否 - 包名</li>
<li>User- string - 是否必填：否 - 用户</li>
<li>Status- string - 是否必填：否 - 默认启用状态：0未启用， 1启用 仅linux</li>
<li>Type- string - 是否必填：否 - 类型：类型 仅windows：
1:编码器
2:IE插件
3:网络提供者
4:镜像劫持
5:LSA提供者
6:KnownDLLs
7:启动执行
8:WMI
9:计划任务
10:Winsock提供者
11:打印监控器
12:资源管理器
13:驱动服务
14:登录</li>
      */
  Filters?: Array<AssetFilters>

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
   * 用户填入的正则表达式："正则表达式" 需与 "提交EventId对应的命令内容" 相匹配
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
 * DescribeAssetJarList返回参数结构体
 */
export interface DescribeAssetJarListResponse {
  /**
      * 应用列表
注意：此字段可能返回 null，表示取不到有效值。
      */
  Jars: Array<AssetJarBaseInfo>

  /**
   * 总数量
   */
  Total: number

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
   * 1:正常登录；2异地登录； 5已加白； 14：已处理；15：已忽略。
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
 * DescribeWebPageProtectStat请求参数结构体
 */
export type DescribeWebPageProtectStatRequest = null

/**
 * 资产管理jar包详情
 */
export interface AssetJarDetail {
  /**
   * 名称
   */
  Name: string

  /**
   * 类型：1应用程序，2系统类库，3Web服务自带库，8:其他，
   */
  Type: number

  /**
   * 是否可执行：0未知，1是，2否
   */
  Status: number

  /**
   * 版本
   */
  Version: string

  /**
   * 路径
   */
  Path: string

  /**
   * 服务器IP
   */
  MachineIp: string

  /**
   * 服务器名称
   */
  MachineName: string

  /**
   * 操作系统
   */
  OsInfo: string

  /**
      * 引用进程列表
注意：此字段可能返回 null，表示取不到有效值。
      */
  Process: Array<AssetAppProcessInfo>

  /**
      * Jar包Md5
注意：此字段可能返回 null，表示取不到有效值。
      */
  Md5: string

  /**
      * 数据更新时间
注意：此字段可能返回 null，表示取不到有效值。
      */
  UpdateTime: string
}

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
 * DescribeAssetPlanTaskList返回参数结构体
 */
export interface DescribeAssetPlanTaskListResponse {
  /**
      * 列表
注意：此字段可能返回 null，表示取不到有效值。
      */
  Tasks: Array<AssetPlanTask>

  /**
   * 总数量
   */
  Total: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
 * DescribeAssetMachineDetail请求参数结构体
 */
export interface DescribeAssetMachineDetailRequest {
  /**
   * 服务器Quuid
   */
  Quuid: string

  /**
   * 服务器Uuid
   */
  Uuid: string
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
 * DescribeAssetMachineDetail返回参数结构体
 */
export interface DescribeAssetMachineDetailResponse {
  /**
   * 主机详情
   */
  MachineDetail: AssetMachineDetail

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
 * DescribeBanRegions请求参数结构体
 */
export interface DescribeBanRegionsRequest {
  /**
   * 阻断模式，STANDARD_MODE：标准阻断，DEEP_MODE：深度阻断
   */
  Mode: string
}

/**
 * DescribeServersAndRiskAndFirstInfo请求参数结构体
 */
export type DescribeServersAndRiskAndFirstInfoRequest = null

/**
 * DescribeAssetWebServiceProcessList返回参数结构体
 */
export interface DescribeAssetWebServiceProcessListResponse {
  /**
      * 进程列表
注意：此字段可能返回 null，表示取不到有效值。
      */
  Process: Array<AssetAppProcessInfo>

  /**
   * 总数
   */
  Total: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

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
 * 资源管理账号基本信息
 */
export interface AssetUserDetail {
  /**
   * 主机内网IP
   */
  MachineIp: string

  /**
   * 主机名称
   */
  MachineName: string

  /**
   * 主机Uuid
   */
  Uuid: string

  /**
   * 主机Quuid
   */
  Quuid: string

  /**
   * 账号UID
   */
  Uid: string

  /**
   * 账号GID
   */
  Gid: string

  /**
   * 账号状态：0-禁用；1-启用
   */
  Status: number

  /**
   * 是否有root权限：0-否；1是，999为空: 仅linux
   */
  IsRoot: number

  /**
   * 上次登录时间
   */
  LastLoginTime: string

  /**
   * 账号名称
   */
  Name: string

  /**
   * 账号类型：0访客用户，1标准用户，2管理员用户 ,999为空,仅windows
   */
  UserType: number

  /**
   * 是否域账号：0否， 1是, 999为空  仅windows
   */
  IsDomain: number

  /**
   * 是否允许ssh登录，1是，0否, 999为空, 仅linux
   */
  IsSshLogin: number

  /**
   * Home目录
   */
  HomePath: string

  /**
   * Shell路径  仅linux
   */
  Shell: string

  /**
   * 是否shell登录性，0不是；1是 仅linux
   */
  ShellLoginStatus: number

  /**
   * 密码修改时间
   */
  PasswordChangeTime: string

  /**
   * 密码过期时间  仅linux
   */
  PasswordDueTime: string

  /**
   * 密码锁定时间：单位天, -1为永不锁定 999为空，仅linux
   */
  PasswordLockDays: number

  /**
   * 备注
   */
  Remark: string

  /**
   * 用户组名
   */
  GroupName: string

  /**
   * 账号到期时间
   */
  DisableTime: string

  /**
   * 最近登录终端
   */
  LastLoginTerminal: string

  /**
   * 最近登录位置
   */
  LastLoginLoc: string

  /**
   * 最近登录IP
   */
  LastLoginIp: string

  /**
   * 密码过期提醒：单位天
   */
  PasswordWarnDays: number

  /**
   * 密码修改设置：0-不可修改，1-可修改
   */
  PasswordChangeType: number

  /**
      * 用户公钥列表
注意：此字段可能返回 null，表示取不到有效值。
      */
  Keys: Array<AssetUserKeyInfo>

  /**
      * 数据更新时间
注意：此字段可能返回 null，表示取不到有效值。
      */
  UpdateTime: string
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
<li>Version - String  是否必填：否 - 当前防护版本（ PRO_VERSION：专业版 | BASIC_VERSION：基础版 | Flagship : 旗舰版 | ProtectedMachines: 专业版+旗舰版）</li>
<li>Risk - String 是否必填: 否 - 风险主机( yes ) </li>
<li>Os -String 是否必填: 否 - 操作系统( DescribeMachineOsList 接口 值 )
每个过滤条件只支持一个值，暂不支持多个值“或”关系查询
<li>Quuid - String - 是否必填: 否 - 云服务器uuid  最大100条.</li>
      */
  Filters?: Array<Filter>

  /**
   * 机器所属业务ID列表
   */
  ProjectIds?: Array<number>
}

/**
 * DescribeVulEffectHostList请求参数结构体
 */
export interface DescribeVulEffectHostListRequest {
  /**
   * 分页limit 最大100
   */
  Limit: number

  /**
   * 分页Offset
   */
  Offset: number

  /**
   * 漏洞id
   */
  VulId: number

  /**
      * 过滤条件。
<li>AliasName - String - 主机名筛选</li>
<li>TagIds - String - 主机标签id串，多个用英文逗号分隔</li>
<li>Status - String - 状态,0: 待处理 1:忽略  3:已修复  5:检测中  6:修复中  8=:修复失败.</li>
<li>Uuid - String数组 - Uuid串数组</li>
      */
  Filters?: Array<Filter>
}

/**
 * 资产管理Web应用插件详情
 */
export interface AssetWebAppPluginInfo {
  /**
   * 名称
   */
  Name: string

  /**
   * 描述
   */
  Desc: string

  /**
   * 版本
   */
  Version: string

  /**
   * 链接
   */
  Link: string
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
   * 处理状态：0-待处理 2-白名单 3-已处理 4-已忽略
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
 * 暴力破解判定规则列表
 */
export interface BruteAttackRuleList {
  /**
   * 爆破事件发生的时间范围，单位：秒
   */
  TimeRange: number

  /**
   * 爆破事件失败次数
   */
  LoginFailTimes: number

  /**
   * 规则是否为空，为空则填充默认规则
   */
  Enable: boolean

  /**
   * 爆破事件发生的时间范围，单位：秒（默认规则）
   */
  TimeRangeDefault: number

  /**
   * 爆破事件失败次数（默认规则）
   */
  LoginFailTimesDefault: number
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
 * DescribeVulList请求参数结构体
 */
export interface DescribeVulListRequest {
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
<li>Status - String - 是否必填：否 - 处理状态  0 -- 待处理 1 -- 已加白 2 -- 已删除 3 - 已忽略</li>
<li>ModifyTime - String - 是否必填：否 - 最近发生时间</li>
<li>Uuid- String - 是否必填：否 - 主机uuid查询</li>
<li>VulName- string -</li>
<li>VulCategory- string - 是否必填：否 - 漏洞类别 1: web-cms漏洞 2:应用漏洞  4: Linux软件漏洞 5: Windows系统漏洞</li>
      */
  Filters?: Array<Filters>

  /**
   * 可选排序字段 Level，LastTime，HostCount
   */
  By?: string

  /**
   * 排序顺序：desc  默认asc
   */
  Order?: string
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
   * 1: web-cms漏洞 2:应用漏洞  4: Linux软件漏洞 5: Windows系统漏洞 0= 应急漏洞
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
 * 资源管理进程基本信息
 */
export interface AssetAppBaseInfo {
  /**
   * 主机内网IP
   */
  MachineIp: string

  /**
   * 主机外网IP
   */
  MachineWanIp: string

  /**
   * 主机Quuid
   */
  Quuid: string

  /**
   * 主机Uuid
   */
  Uuid: string

  /**
   * 操作系统信息
   */
  OsInfo: string

  /**
   * 主机业务组ID
   */
  ProjectId: number

  /**
      * 主机标签
注意：此字段可能返回 null，表示取不到有效值。
      */
  Tag: Array<MachineTag>

  /**
   * 应用名称
   */
  Name: string

  /**
      * 应用类型	
1: 运维
2 : 数据库
3 : 安全
4 : 可疑应用
5 : 系统架构
6 : 系统应用
7 : WEB服务
99: 其他
      */
  Type: number

  /**
   * 二进制路径
   */
  BinPath: string

  /**
   * 配置文件路径
   */
  ConfigPath: string

  /**
   * 关联进程数
   */
  ProcessCount: number

  /**
   * 应用描述
   */
  Desc: string

  /**
   * 版本号
   */
  Version: string

  /**
      * 数据更新时间
注意：此字段可能返回 null，表示取不到有效值。
      */
  UpdateTime: string
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
 * DescribeAssetSystemPackageList返回参数结构体
 */
export interface DescribeAssetSystemPackageListResponse {
  /**
   * 记录总数
   */
  Total: number

  /**
      * 列表
注意：此字段可能返回 null，表示取不到有效值。
      */
  Packages: Array<AssetSystemPackageInfo>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeAssetMachineList返回参数结构体
 */
export interface DescribeAssetMachineListResponse {
  /**
   * 总数
   */
  Total: number

  /**
      * 记录列表
注意：此字段可能返回 null，表示取不到有效值。
      */
  Machines: Array<AssetMachineBaseInfo>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeWebPageGeneralize请求参数结构体
 */
export type DescribeWebPageGeneralizeRequest = null

/**
 * 资产管理磁盘分区信息
 */
export interface AssetDiskPartitionInfo {
  /**
   * 分区名
   */
  Name: string

  /**
   * 分区大小：单位G
   */
  Size: number

  /**
   * 分区使用率
   */
  Percent: number

  /**
   * 文件系统类型
   */
  Type: string

  /**
   * 挂载目录
   */
  Path: string

  /**
   * 已使用空间：单位G
   */
  Used: number
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
 * DescribeMalwareRiskWarning请求参数结构体
 */
export type DescribeMalwareRiskWarningRequest = null

/**
 * DescribeAssetInfo请求参数结构体
 */
export type DescribeAssetInfoRequest = null

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
 * UntrustMalwares请求参数结构体
 */
export interface UntrustMalwaresRequest {
  /**
   * 木马ID数组 (最大100条)
   */
  Ids: Array<number>
}

/**
 * DescribeAssetAppList请求参数结构体
 */
export interface DescribeAssetAppListRequest {
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
<li>AppName- string - 是否必填：否 - 应用名搜索</li>
<li>IpOrAlias - String - 是否必填：否 - 主机ip或别名筛选</li>
<li>Type - int - 是否必填：否 - 类型	: 仅linux
0: 全部
1: 运维
2 : 数据库
3 : 安全
4 : 可疑应用
5 : 系统架构
6 : 系统应用
7 : WEB服务
99:其他</li>
<li>OsType - uint64 - 是否必填：否 - windows/linux</li>
<li>Os -String 是否必填: 否 - 操作系统( DescribeMachineOsList 接口 值 )</li>
      */
  Filters?: Array<AssetFilters>

  /**
   * 排序方式：ProcessCount
   */
  By?: string

  /**
   * 排序方式，asc升序 或 desc降序
   */
  Order?: string

  /**
   * 查询指定Quuid主机的信息
   */
  Quuid?: string
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
 * DescribeExpertServiceList返回参数结构体
 */
export interface DescribeExpertServiceListResponse {
  /**
   * 总条数
   */
  TotalCount: number

  /**
   * 安全管家数据
   */
  List: Array<SecurityButlerInfo>

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
 * ExportBruteAttacks请求参数结构体
 */
export interface ExportBruteAttacksRequest {
  /**
   * 过滤参数
   */
  Filters?: Array<Filters>
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
   * 危害等级：1-低危；2-中危；3-高危；4-严重 (多选英文;分隔)
   */
  VulLevels: string

  /**
   * 服务器分类：1:专业版服务器；2:自选服务器
   */
  HostType: number

  /**
   * 漏洞类型：1: web-cms漏洞 2:应用漏洞  4: Linux软件漏洞 5: Windows系统漏洞 (多选英文;分隔)
   */
  VulCategories?: string

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
 * DescribeAssetCoreModuleInfo返回参数结构体
 */
export interface DescribeAssetCoreModuleInfoResponse {
  /**
   * 内核模块详情
   */
  Module: AssetCoreModuleDetail

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeAssetEnvList请求参数结构体
 */
export interface DescribeAssetEnvListRequest {
  /**
   * 需要返回的数量，默认为10，最大值为100
   */
  Limit?: number

  /**
   * 偏移量，默认为0。
   */
  Offset?: number

  /**
   * 该字段已废弃，由Filters代替
   */
  Type?: number

  /**
      * 过滤条件。
<li>IpOrAlias - String - 是否必填：否 - 主机ip或别名筛选</li>
<li>Name- string - 是否必填：否 - 环境变量名</li>
<li>Type- int - 是否必填：否 - 类型：0用户变量，1系统变量</li>
      */
  Filters?: Array<AssetFilters>

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
 * StopNoticeBanTips请求参数结构体
 */
export type StopNoticeBanTipsRequest = null

/**
 * DescribeScanMalwareSchedule请求参数结构体
 */
export type DescribeScanMalwareScheduleRequest = null

/**
 * 资产指纹中服务器列表的基本信息
 */
export interface AssetMachineBaseInfo {
  /**
   * 服务器Quuid
   */
  Quuid: string

  /**
   * 服务器uuid
   */
  Uuid: string

  /**
   * 服务器内网IP
   */
  MachineIp: string

  /**
   * 服务器名称
   */
  MachineName: string

  /**
   * 操作系统名称
   */
  OsInfo: string

  /**
   * CPU信息
   */
  Cpu: string

  /**
   * 内存容量：单位G
   */
  MemSize: number

  /**
   * 内存使用率百分比
   */
  MemLoad: string

  /**
   * 硬盘容量：单位G
   */
  DiskSize: number

  /**
   * 硬盘使用率百分比
   */
  DiskLoad: string

  /**
   * 分区数
   */
  PartitionCount: number

  /**
   * 主机外网IP
   */
  MachineWanIp: string

  /**
   * 业务组ID
   */
  ProjectId: number

  /**
   * Cpu数量
   */
  CpuSize: number

  /**
   * Cpu使用率百分比
   */
  CpuLoad: string

  /**
      * 标签
注意：此字段可能返回 null，表示取不到有效值。
      */
  Tag: Array<MachineTag>

  /**
      * 数据更新时间
注意：此字段可能返回 null，表示取不到有效值。
      */
  UpdateTime: string
}

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
 * DescribeAssetWebLocationList返回参数结构体
 */
export interface DescribeAssetWebLocationListResponse {
  /**
   * 记录总数
   */
  Total: number

  /**
      * 站点列表
注意：此字段可能返回 null，表示取不到有效值。
      */
  Locations: Array<AssetWebLocationBaseInfo>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeAssetJarList请求参数结构体
 */
export interface DescribeAssetJarListRequest {
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
<li>Name- string - 是否必填：否 - 包名</li>
<li>Type- uint - 是否必填：否 - 类型	
1: 应用程序
2 : 系统类库
3 : Web服务自带库
4 : 其他依赖包</li>
<li>Status- string - 是否必填：否 - 是否可执行：0否，1是</li>
      */
  Filters?: Array<AssetFilters>

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
   * 处理状态：0-待处理 2-白名单 3-已处理 4-已忽略
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
 * DescribeProtectNetList返回参数结构体
 */
export interface DescribeProtectNetListResponse {
  /**
   * 总条数
   */
  TotalCount: number

  /**
   * 安全管家数据
   */
  List: Array<ProtectNetInfo>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

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
 * 资产管理Web站点列表信息
 */
export interface AssetWebLocationInfo {
  /**
   * 域名
   */
  Name: string

  /**
   * 站点端口
   */
  Port: string

  /**
   * 站点协议
   */
  Proto: string

  /**
   * 服务类型
   */
  ServiceType: string

  /**
   * 安全模块状态：0未启用，1启用，999空，仅nginx
   */
  SafeStatus: number

  /**
   * 运行用户
   */
  User: string

  /**
   * 主目录
   */
  MainPath: string

  /**
   * 启动命令
   */
  Command: string

  /**
   * 绑定IP
   */
  Ip: string

  /**
      * 数据更新时间
注意：此字段可能返回 null，表示取不到有效值。
      */
  UpdateTime: string
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
 * 资产指纹中服务器列表的基本信息
 */
export interface AssetMachineDetail {
  /**
   * 服务器Quuid
   */
  Quuid: string

  /**
   * 服务器uuid
   */
  Uuid: string

  /**
   * 服务器内网IP
   */
  MachineIp: string

  /**
   * 服务器名称
   */
  MachineName: string

  /**
   * 操作系统名称
   */
  OsInfo: string

  /**
   * CPU信息
   */
  Cpu: string

  /**
   * 内存容量：单位G
   */
  MemSize: number

  /**
   * 内存使用率百分比
   */
  MemLoad: string

  /**
   * 硬盘容量：单位G
   */
  DiskSize: number

  /**
   * 硬盘使用率百分比
   */
  DiskLoad: string

  /**
   * 分区数
   */
  PartitionCount: number

  /**
   * 主机外网IP
   */
  MachineWanIp: string

  /**
   * Cpu数量
   */
  CpuSize: number

  /**
   * Cpu使用率百分比
   */
  CpuLoad: string

  /**
   * 防护级别：0基础版，1专业版
   */
  ProtectLevel: number

  /**
   * 风险状态：UNKNOW-未知，RISK-风险，SAFT-安全
   */
  RiskStatus: string

  /**
   * 已防护天数
   */
  ProtectDays: number

  /**
   * 专业版开通时间
   */
  BuyTime: string

  /**
   * 专业版到期时间
   */
  EndTime: string

  /**
   * 内核版本
   */
  CoreVersion: string

  /**
   * linux/windows
   */
  OsType: string

  /**
   * agent版本
   */
  AgentVersion: string

  /**
   * 安装时间
   */
  InstallTime: string

  /**
   * 系统启动时间
   */
  BootTime: string

  /**
   * 最后上线时间
   */
  LastLiveTime: string

  /**
   * 生产商
   */
  Producer: string

  /**
   * 序列号
   */
  SerialNumber: string

  /**
   * 网卡
   */
  NetCards: Array<AssetNetworkCardInfo>

  /**
   * 分区
   */
  Disks: Array<AssetDiskPartitionInfo>

  /**
   * 0在线，1已离线
   */
  Status: number

  /**
   * 业务组ID
   */
  ProjectId: number

  /**
   * 设备型号
   */
  DeviceVersion: string

  /**
      * 离线时间
注意：此字段可能返回 null，表示取不到有效值。
      */
  OfflineTime: string

  /**
      * 主机ID
注意：此字段可能返回 null，表示取不到有效值。
      */
  InstanceId: string

  /**
      * 数据更新时间
注意：此字段可能返回 null，表示取不到有效值。
      */
  UpdateTime: string
}

/**
 * 资源管理数据库列表信息
 */
export interface AssetDatabaseBaseInfo {
  /**
   * 主机内网IP
   */
  MachineIp: string

  /**
   * 主机外网IP
   */
  MachineWanIp: string

  /**
   * 主机Quuid
   */
  Quuid: string

  /**
   * 主机Uuid
   */
  Uuid: string

  /**
   * 操作系统信息
   */
  OsInfo: string

  /**
   * 主机业务组ID
   */
  ProjectId: number

  /**
      * 主机标签
注意：此字段可能返回 null，表示取不到有效值。
      */
  Tag: Array<MachineTag>

  /**
   * 数据库名
   */
  Name: string

  /**
   * 版本
   */
  Version: string

  /**
   * 监听端口
   */
  Port: string

  /**
   * 协议
   */
  Proto: string

  /**
   * 运行用户
   */
  User: string

  /**
   * 绑定IP
   */
  Ip: string

  /**
   * 配置文件路径
   */
  ConfigPath: string

  /**
   * 日志文件路径
   */
  LogPath: string

  /**
   * 数据路径
   */
  DataPath: string

  /**
   * 运行权限
   */
  Permission: string

  /**
   * 错误日志路径
   */
  ErrorLogPath: string

  /**
   * 插件路径
   */
  PlugInPath: string

  /**
   * 二进制路径
   */
  BinPath: string

  /**
   * 启动参数
   */
  Param: string

  /**
   * 数据库ID
   */
  Id: string

  /**
      * 数据更新时间
注意：此字段可能返回 null，表示取不到有效值。
      */
  UpdateTime: string
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
 * DescribeAssetCoreModuleInfo请求参数结构体
 */
export interface DescribeAssetCoreModuleInfoRequest {
  /**
   * 服务器Quuid
   */
  Quuid: string

  /**
   * 服务器Uuid
   */
  Uuid: string

  /**
   * 内核模块ID
   */
  Id: string
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
 * DescribeBanWhiteList返回参数结构体
 */
export interface DescribeBanWhiteListResponse {
  /**
   * 总记录数
   */
  TotalCount: number

  /**
   * 白名单列表
   */
  WhiteList: Array<BanWhiteListDetail>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 专家服务-应急响应信息
 */
export interface EmergencyResponseInfo {
  /**
   * 任务id
   */
  TaskId: string

  /**
   * 主机个数
   */
  HostNum: number

  /**
   * 服务状态 0未启动，·响应中，2响应完成
   */
  Status: number

  /**
   * 服务开始时间
   */
  StartTime: string

  /**
   * 服务结束时间
   */
  EndTime: string

  /**
   * 报告下载地址
   */
  ReportPath: string
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
 * DeleteTags返回参数结构体
 */
export interface DeleteTagsResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeSecurityEventsCnt请求参数结构体
 */
export type DescribeSecurityEventsCntRequest = null

/**
 * 资源管理账号基本信息
 */
export interface AssetUserBaseInfo {
  /**
   * 主机内网IP
   */
  MachineIp: string

  /**
   * 主机外网IP
   */
  MachineWanIp: string

  /**
   * 主机名称
   */
  MachineName: string

  /**
   * 操作系统信息
   */
  OsInfo: string

  /**
   * 主机Uuid
   */
  Uuid: string

  /**
   * 主机Quuid
   */
  Quuid: string

  /**
   * 账号UID
   */
  Uid: string

  /**
   * 账号GID
   */
  Gid: string

  /**
   * 账号状态：0-禁用；1-启用
   */
  Status: number

  /**
   * 是否有root权限：0-否；1是，999为空: 仅linux
   */
  IsRoot: number

  /**
   * 登录方式：0-不可登录；1-只允许key登录；2只允许密码登录；3-允许key和密码，999为空，仅linux
   */
  LoginType: number

  /**
   * 上次登录时间
   */
  LastLoginTime: string

  /**
   * 账号名称
   */
  Name: string

  /**
   * 主机业务组ID
   */
  ProjectId: number

  /**
   * 账号类型：0访客用户，1标准用户，2管理员用户 ,999为空,仅windows
   */
  UserType: number

  /**
   * 是否域账号：0否， 1是，2否, 999为空  仅windows
   */
  IsDomain: number

  /**
   * 是否有sudo权限，1是，0否, 999为空, 仅linux
   */
  IsSudo: number

  /**
   * 是否允许ssh登录，1是，0否, 999为空, 仅linux
   */
  IsSshLogin: number

  /**
   * Home目录
   */
  HomePath: string

  /**
   * Shell路径  仅linux
   */
  Shell: string

  /**
   * 是否shell登录性，0不是；1是 仅linux
   */
  ShellLoginStatus: number

  /**
   * 密码修改时间
   */
  PasswordChangeTime: string

  /**
   * 密码过期时间  仅linux
   */
  PasswordDueTime: string

  /**
   * 密码锁定时间：单位天, -1为永不锁定 999为空，仅linux
   */
  PasswordLockDays: number

  /**
   * 密码状态：1正常 2即将过期 3已过期 4已锁定 999为空 仅linux
   */
  PasswordStatus: number

  /**
      * 更新时间
注意：此字段可能返回 null，表示取不到有效值。
      */
  UpdateTime: string
}

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

  /**
      * 内核版本号
注意：此字段可能返回 null，表示取不到有效值。
      */
  KernelVersion: string

  /**
      * 在线状态 OFFLINE，ONLINE
注意：此字段可能返回 null，表示取不到有效值。
      */
  MachineStatus: string
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
 * DescribeIndexList请求参数结构体
 */
export type DescribeIndexListRequest = null

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
 * DescribeExpertServiceList请求参数结构体
 */
export interface DescribeExpertServiceListRequest {
  /**
      * 过滤条件。
<li>Keyword- String - 是否必填：否 - 关键词过滤，</li>
<li>Uuids - String - 是否必填：否 - 主机id过滤</li>
      */
  Filters?: Array<Filters>

  /**
   * 需要返回的数量，最大值为100
   */
  Limit?: number

  /**
   * 排序步长
   */
  Offset?: number

  /**
   * 排序方法
   */
  Order?: string

  /**
   * 排序字段 StartTime，EndTime
   */
  By?: string
}

/**
 * DescribeBaselineHostTop请求参数结构体
 */
export interface DescribeBaselineHostTopRequest {
  /**
   * 动态top值
   */
  Top: number

  /**
   * 策略id
   */
  StrategyId: number
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
 * DescribeVulHostTop返回参数结构体
 */
export interface DescribeVulHostTopResponse {
  /**
      * 服务器风险top列表
注意：此字段可能返回 null，表示取不到有效值。
      */
  VulHostTopList: Array<VulHostTopInfo>

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
 * 漏洞影响主机列表
 */
export interface VulEffectHostList {
  /**
      * 事件id
注意：此字段可能返回 null，表示取不到有效值。
      */
  EventId: number

  /**
      * 状态：0: 待处理 1:忽略  3:已修复  5:检测中 6:修复中 7: 回滚中 8:修复失败
注意：此字段可能返回 null，表示取不到有效值。
      */
  Status: number

  /**
      * 最后检测时间
注意：此字段可能返回 null，表示取不到有效值。
      */
  LastTime: string

  /**
      * 危害等级：1-低危；2-中危；3-高危；4-严重
注意：此字段可能返回 null，表示取不到有效值。
      */
  Level: number

  /**
      * 主机Quuid
注意：此字段可能返回 null，表示取不到有效值。
      */
  Quuid: string

  /**
      * 主机Uuid
注意：此字段可能返回 null，表示取不到有效值。
      */
  Uuid: string

  /**
      * 主机HostIp
注意：此字段可能返回 null，表示取不到有效值。
      */
  HostIp: string

  /**
      * 主机别名
注意：此字段可能返回 null，表示取不到有效值。
      */
  AliasName: string

  /**
      * 主机标签
注意：此字段可能返回 null，表示取不到有效值。
      */
  Tags: Array<string>

  /**
      * 说明
注意：此字段可能返回 null，表示取不到有效值。
      */
  Description: string

  /**
      * 版本信息 0=普通版本 1=专业版 2=旗舰版
注意：此字段可能返回 null，表示取不到有效值。
      */
  HostVersion: number

  /**
      * 是否能自动修复 0 :漏洞不可自动修复，  1：可自动修复， 2：客户端已离线， 3：主机不是旗舰版只能手动修复， 4：机型不允许 ，5：修复中 ，6：已修复， 7：检测中  9:修复失败，10:已忽略 11:漏洞只支持linux不支持Windows 12：漏洞只支持Windows不支持linux，13:修复失败但此时主机已离线，14:修复失败但此时主机不是旗舰版， 15:已手动修复
注意：此字段可能返回 null，表示取不到有效值。
      */
  IsSupportAutoFix: number

  /**
      * 失败原因
注意：此字段可能返回 null，表示取不到有效值。
      */
  FixStatusMsg: string
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
 * 基线影响服务器列表数据
 */
export interface BaselineHostTopList {
  /**
      * 事件等级与次数列表
注意：此字段可能返回 null，表示取不到有效值。
      */
  EventLevelList: Array<BaselineEventLevelInfo>

  /**
      * 主机名称
注意：此字段可能返回 null，表示取不到有效值。
      */
  HostName: string

  /**
      * 主机Quuid
注意：此字段可能返回 null，表示取不到有效值。
      */
  Quuid: string

  /**
      * 计算权重的分数
注意：此字段可能返回 null，表示取不到有效值。
      */
  Score: number
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
<li>Quuid - String - 是否必填：否 - 云服务器uuid</li>
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
 * DescribeVulList返回参数结构体
 */
export interface DescribeVulListResponse {
  /**
      * 漏洞列表
注意：此字段可能返回 null，表示取不到有效值。
      */
  VulInfoList: Array<VulInfoList>

  /**
      * 漏洞总条数
注意：此字段可能返回 null，表示取不到有效值。
      */
  TotalCount: number

  /**
      * 重点关注漏洞总数
注意：此字段可能返回 null，表示取不到有效值。
      */
  FollowVulCount: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeUndoVulCounts请求参数结构体
 */
export interface DescribeUndoVulCountsRequest {
  /**
   * 漏洞分类，1: web-cms漏洞 2:应用漏洞  4: Linux软件漏洞 5: Windows系统漏洞
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
<li>UNINSTALLED: 未防护</li>
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

  /**
   * 内核版本
   */
  KernelVersion: string

  /**
   * 防护版本 BASIC_VERSION 基础版, PRO_VERSION 专业版 Flagship 旗舰版.
   */
  ProtectType: string
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
 * DeleteMaliciousRequests请求参数结构体
 */
export interface DeleteMaliciousRequestsRequest {
  /**
   * 恶意请求记录ID数组，(最大100条)
   */
  Ids: Array<number>
}

/**
 * DescribeBanWhiteList请求参数结构体
 */
export interface DescribeBanWhiteListRequest {
  /**
   * 偏移量，默认为0。
   */
  Offset?: number

  /**
   * 返回数量，最大值为100。
   */
  Limit?: number

  /**
      * 过滤条件。
<li>Keywords - String - 是否必填：否 - 查询关键字 </li>
      */
  Filters?: Array<Filter>
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
 * 资源管理Web应用列表信息
 */
export interface AssetWebFrameBaseInfo {
  /**
   * 主机内网IP
   */
  MachineIp: string

  /**
   * 主机外网IP
   */
  MachineWanIp: string

  /**
   * 主机Quuid
   */
  Quuid: string

  /**
   * 主机Uuid
   */
  Uuid: string

  /**
   * 操作系统信息
   */
  OsInfo: string

  /**
   * 主机业务组ID
   */
  ProjectId: number

  /**
      * 主机标签
注意：此字段可能返回 null，表示取不到有效值。
      */
  Tag: Array<MachineTag>

  /**
   * 数据库名
   */
  Name: string

  /**
   * 版本
   */
  Version: string

  /**
   * 语言
   */
  Lang: string

  /**
   * 服务类型
   */
  ServiceType: string

  /**
   * 主机名称
   */
  MachineName: string

  /**
      * 数据更新时间
注意：此字段可能返回 null，表示取不到有效值。
      */
  UpdateTime: string
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
 * DescribeAssetWebLocationInfo返回参数结构体
 */
export interface DescribeAssetWebLocationInfoResponse {
  /**
      * 站点信息
注意：此字段可能返回 null，表示取不到有效值。
      */
  WebLocation: AssetWebLocationInfo

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
<li>VulCategory - int - 是否必填：否 - 漏洞分类筛选1: web-cms漏洞 2:应用漏洞  4: Linux软件漏洞 5: Windows系统漏洞</li>
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
 * DescribeAssetUserList返回参数结构体
 */
export interface DescribeAssetUserListResponse {
  /**
   * 记录总数
   */
  Total: number

  /**
      * 账号列表
注意：此字段可能返回 null，表示取不到有效值。
      */
  Users: Array<AssetUserBaseInfo>

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
   * 处理状态： 0 = 待处理 1= 已处理, 2 = 已加白， 3 = 已忽略
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
   * 漏洞类型：1: web-cms漏洞 2:应用漏洞  4: Linux软件漏洞 5: Windows系统漏洞
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
 * DescribeAssetDatabaseInfo返回参数结构体
 */
export interface DescribeAssetDatabaseInfoResponse {
  /**
   * 数据库详情
   */
  Database: AssetDatabaseDetail

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
 * 软件应用关联进程信息
 */
export interface AssetAppProcessInfo {
  /**
   * 名称
   */
  Name: string

  /**
   * 进程状态
   */
  Status: string

  /**
   * 进程版本
   */
  Version: string

  /**
   * 路径
   */
  Path: string

  /**
   * 用户
   */
  User: string

  /**
   * 启动时间
   */
  StartTime: string
}

/**
 * DescribeBaselineStrategyList请求参数结构体
 */
export interface DescribeBaselineStrategyListRequest {
  /**
   * 分页参数 最大100
   */
  Limit: number

  /**
   * 分页参数
   */
  Offset: number

  /**
   * 规则开关，1：打开 0：关闭  2:全部
   */
  Enabled: number
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
 * DescribeAssetUserInfo请求参数结构体
 */
export interface DescribeAssetUserInfoRequest {
  /**
   * 服务器Quuid
   */
  Quuid: string

  /**
   * 服务器Uuid
   */
  Uuid: string

  /**
   * 账户名
   */
  Name: string
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
 * 任务扫描状态列表
 */
export interface TaskStatus {
  /**
   * 扫描中（包含初始化）
   */
  Scanning: string

  /**
   * 扫描终止（包含终止中）
   */
  Ok: string

  /**
   * 扫描失败
   */
  Fail: string

  /**
      * 扫描失败（提示具体原因：扫描超时、客户端版本低、客户端离线）
注意：此字段可能返回 null，表示取不到有效值。
      */
  Stop: string
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
 * DescribeAssetWebAppList返回参数结构体
 */
export interface DescribeAssetWebAppListResponse {
  /**
   * 记录总数
   */
  Total: number

  /**
      * 列表
注意：此字段可能返回 null，表示取不到有效值。
      */
  WebApps: Array<AssetWebAppBaseInfo>

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
 * 资源管理数据库列表信息
 */
export interface AssetDatabaseDetail {
  /**
   * 主机内网IP
   */
  MachineIp: string

  /**
   * 主机外网IP
   */
  MachineWanIp: string

  /**
   * 主机Quuid
   */
  Quuid: string

  /**
   * 主机Uuid
   */
  Uuid: string

  /**
   * 操作系统信息
   */
  OsInfo: string

  /**
   * 数据库名
   */
  Name: string

  /**
   * 版本
   */
  Version: string

  /**
   * 监听端口
   */
  Port: string

  /**
   * 协议
   */
  Proto: string

  /**
   * 运行用户
   */
  User: string

  /**
   * 绑定IP
   */
  Ip: string

  /**
   * 配置文件路径
   */
  ConfigPath: string

  /**
   * 日志文件路径
   */
  LogPath: string

  /**
   * 数据路径
   */
  DataPath: string

  /**
   * 运行权限
   */
  Permission: string

  /**
   * 错误日志路径
   */
  ErrorLogPath: string

  /**
   * 插件路径
   */
  PlugInPath: string

  /**
   * 二进制路径
   */
  BinPath: string

  /**
   * 启动参数
   */
  Param: string

  /**
      * 数据更新时间
注意：此字段可能返回 null，表示取不到有效值。
      */
  UpdateTime: string
}

/**
 * DescribeScanTaskStatus请求参数结构体
 */
export interface DescribeScanTaskStatusRequest {
  /**
   * 模块类型 当前提供 Malware 木马 , Vul 漏洞 , Baseline 基线
   */
  ModuleType: string
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
 * DescribeScanTaskStatus返回参数结构体
 */
export interface DescribeScanTaskStatusResponse {
  /**
   * 任务扫描状态列表
   */
  State: TaskStatus

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeProtectNetList请求参数结构体
 */
export interface DescribeProtectNetListRequest {
  /**
      * 过滤条件。
<li>Keyword- String - 是否必填：否 - 关键词过滤，</li>
<li>Uuids - String - 是否必填：否 - 主机id过滤</li>
      */
  Filters?: Array<Filters>

  /**
   * 需要返回的数量，最大值为100
   */
  Limit?: number

  /**
   * 排序步长
   */
  Offset?: number

  /**
   * 排序方法
   */
  Order?: string

  /**
   * 排序字段 StartTime，EndTime
   */
  By?: string
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
 * DescribeEmergencyResponseList请求参数结构体
 */
export interface DescribeEmergencyResponseListRequest {
  /**
      * 过滤条件。
<li>Keyword- String - 是否必填：否 - 关键词过滤，</li>
<li>Uuids - String - 是否必填：否 - 主机id过滤</li>
      */
  Filters?: Array<Filters>

  /**
   * 需要返回的数量，最大值为100
   */
  Limit?: number

  /**
   * 排序步长
   */
  Offset?: number

  /**
   * 排序方法
   */
  Order?: string

  /**
   * 排序字段 StartTime，EndTime
   */
  By?: string
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
      * 开始扫描时间
注意：此字段可能返回 null，表示取不到有效值。
      */
  ScanBeginTime: string

  /**
      * 扫描漏洞数
注意：此字段可能返回 null，表示取不到有效值。
      */
  RiskEventCount: number

  /**
      * 扫描结束时间
注意：此字段可能返回 null，表示取不到有效值。
      */
  ScanEndTime: string

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
 * DescribeBaselineEffectHostList请求参数结构体
 */
export interface DescribeBaselineEffectHostListRequest {
  /**
   * 分页参数 最大100条
   */
  Limit: number

  /**
   * 分页参数
   */
  Offset: number

  /**
   * 基线id
   */
  BaselineId: number

  /**
      * 过滤条件。
<li>AliasName- String- 主机别名</li>
<li>Status- Uint- 1已通过  0未通过 5检测中</li>
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
}

/**
 * ExportSecurityTrends请求参数结构体
 */
export interface ExportSecurityTrendsRequest {
  /**
   * 开始时间。
   */
  BeginDate: string

  /**
   * 结束时间。
   */
  EndDate: string
}

/**
 * DescribeAssetDatabaseInfo请求参数结构体
 */
export interface DescribeAssetDatabaseInfoRequest {
  /**
   * 服务器Quuid
   */
  Quuid: string

  /**
   * 服务器Uuid
   */
  Uuid: string

  /**
   * 数据库ID
   */
  Id: string
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
 * ExportSecurityTrends返回参数结构体
 */
export interface ExportSecurityTrendsResponse {
  /**
   * 导出文件下载链接地址。
   */
  DownloadUrl: string

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
 * DescribeAssetWebAppPluginList请求参数结构体
 */
export interface DescribeAssetWebAppPluginListRequest {
  /**
   * 主机Quuid
   */
  Quuid: string

  /**
   * 主机Uuid
   */
  Uuid: string

  /**
   * Web应用ID
   */
  Id: string

  /**
   * 偏移量，默认为0。
   */
  Offset?: number

  /**
   * 需要返回的数量，默认为10，最大值为100
   */
  Limit?: number
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
      * 云服务器类型。
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
   * 防护版本 BASIC_VERSION 基础版, PRO_VERSION 专业版 Flagship 旗舰版.
   */
  ProtectType: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 服务器风险top5实体
 */
export interface VulHostTopInfo {
  /**
      * 主机名
注意：此字段可能返回 null，表示取不到有效值。
      */
  HostName: string

  /**
      * 漏洞等级与数量统计列表
注意：此字段可能返回 null，表示取不到有效值。
      */
  VulLevelList: Array<VulLevelCountInfo>

  /**
      * 主机Quuid
注意：此字段可能返回 null，表示取不到有效值。
      */
  Quuid: string

  /**
      * top评分
注意：此字段可能返回 null，表示取不到有效值。
      */
  Score: number
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
   * 该参数已作废.
   */
  IsQueryProMachine?: boolean

  /**
      * 过滤条件。
<li>Version - String  是否必填：否 - 当前防护版本（ PRO_VERSION：专业版 | BASIC_VERSION：基础版 | Flagship : 旗舰版 | ProtectedMachines: 专业版+旗舰版）</li>
      */
  Filters?: Array<Filters>
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
 * DescribeVulEffectHostList返回参数结构体
 */
export interface DescribeVulEffectHostListResponse {
  /**
   * 列表总数量
   */
  TotalCount: number

  /**
      * 影响主机列表
注意：此字段可能返回 null，表示取不到有效值。
      */
  VulEffectHostList: Array<VulEffectHostList>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
 * ScanVulSetting返回参数结构体
 */
export interface ScanVulSettingResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeAssetJarInfo返回参数结构体
 */
export interface DescribeAssetJarInfoResponse {
  /**
   * Jar包详情
   */
  Jar: AssetJarDetail

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
 * DescribeMaliciousRequestWhiteList请求参数结构体
 */
export interface DescribeMaliciousRequestWhiteListRequest {
  /**
   * 返回数量，默认为10，最大值为100。
   */
  Limit: number

  /**
   * 偏移量，默认为0。
   */
  Offset: number

  /**
      * 过滤条件。

<li>Domain  - String - 基线名称</li>
      */
  Filters?: Array<Filters>
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
 * 资产管理Web站点列表信息
 */
export interface AssetWebLocationBaseInfo {
  /**
   * 主机Uuid
   */
  Uuid: string

  /**
   * 主机Quuid
   */
  Quuid: string

  /**
   * 内网IP
   */
  MachineIp: string

  /**
   * 外网IP
   */
  MachineWanIp: string

  /**
   * 主机名称
   */
  MachineName: string

  /**
   * 操作系统
   */
  OsInfo: string

  /**
   * 域名
   */
  Name: string

  /**
   * 站点端口
   */
  Port: string

  /**
   * 站点协议
   */
  Proto: string

  /**
   * 服务类型
   */
  ServiceType: string

  /**
   * 站点路经数
   */
  PathCount: number

  /**
   * 运行用户
   */
  User: string

  /**
   * 主目录
   */
  MainPath: string

  /**
   * 主目录所有者
   */
  MainPathOwner: string

  /**
   * 拥有者权限
   */
  Permission: string

  /**
   * 主机业务组ID
   */
  ProjectId: number

  /**
   * 主机标签
   */
  Tag: Array<MachineTag>

  /**
   * Web站点Id
   */
  Id: string

  /**
      * 数据更新时间
注意：此字段可能返回 null，表示取不到有效值。
      */
  UpdateTime: string
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
 * 资源管理系统安装包列表信息
 */
export interface AssetSystemPackageInfo {
  /**
   * 数据库名
   */
  Name: string

  /**
   * 描述
   */
  Desc: string

  /**
   * 版本
   */
  Version: string

  /**
   * 安装时间
   */
  InstallTime: string

  /**
   * 类型
   */
  Type: string

  /**
   * 主机名称
   */
  MachineName: string

  /**
   * 主机IP
   */
  MachineIp: string

  /**
   * 操作系统
   */
  OsInfo: string

  /**
      * 数据更新时间
注意：此字段可能返回 null，表示取不到有效值。
      */
  UpdateTime: string
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
 * DeleteReverseShellEvents返回参数结构体
 */
export interface DeleteReverseShellEventsResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 资源管理Web服务列表信息
 */
export interface AssetWebServiceBaseInfo {
  /**
   * 主机内网IP
   */
  MachineIp: string

  /**
   * 主机外网IP
   */
  MachineWanIp: string

  /**
   * 主机Quuid
   */
  Quuid: string

  /**
   * 主机Uuid
   */
  Uuid: string

  /**
   * 操作系统信息
   */
  OsInfo: string

  /**
   * 主机业务组ID
   */
  ProjectId: number

  /**
      * 主机标签
注意：此字段可能返回 null，表示取不到有效值。
      */
  Tag: Array<MachineTag>

  /**
   * 数据库名
   */
  Name: string

  /**
   * 版本
   */
  Version: string

  /**
   * 二进制路径
   */
  BinPath: string

  /**
   * 启动用户
   */
  User: string

  /**
   * 安装路径
   */
  InstallPath: string

  /**
   * 配置路径
   */
  ConfigPath: string

  /**
   * 关联进程数
   */
  ProcessCount: number

  /**
   * Web服务ID
   */
  Id: string

  /**
   * 主机名称
   */
  MachineName: string

  /**
   * 描述
   */
  Desc: string

  /**
      * 数据更新时间
注意：此字段可能返回 null，表示取不到有效值。
      */
  UpdateTime: string
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
 * 资产管理启动服务列表
 */
export interface AssetInitServiceBaseInfo {
  /**
   * 名称
   */
  Name: string

  /**
      * 类型：
1:编码器
2:IE插件
3:网络提供者
4:镜像劫持
5:LSA提供者
6:KnownDLLs
7:启动执行
8:WMI
9:计划任务
10:Winsock提供者
11:打印监控器
12:资源管理器
13:驱动服务
14:登录
      */
  Type: number

  /**
   * 默认启用状态：0未启用，1启用
   */
  Status: number

  /**
   * 启动用户
   */
  User: string

  /**
   * 路径
   */
  Path: string

  /**
   * 服务器IP
   */
  MachineIp: string

  /**
   * 服务器名称
   */
  MachineName: string

  /**
   * 操作系统
   */
  OsInfo: string

  /**
   * 主机Quuid
   */
  Quuid: string

  /**
   * 主机uuid
   */
  Uuid: string

  /**
   * 数据更新时间
   */
  UpdateTime: string
}

/**
 * DescribeVulHostTop请求参数结构体
 */
export interface DescribeVulHostTopRequest {
  /**
   * 获取top值，1-100
   */
  Top: number

  /**
   * 1:web-cms 漏洞，2.应用漏洞 3:安全基线 4: Linux软件漏洞 5: windows系统漏洞 6:应急漏洞
   */
  VulCategory?: number
}

/**
 * DescribeIgnoreRuleEffectHostList请求参数结构体
 */
export interface DescribeIgnoreRuleEffectHostListRequest {
  /**
   * 分页参数 最大100条
   */
  Limit: number

  /**
   * 分页参数
   */
  Offset: number

  /**
   * 检测项id
   */
  RuleId: number

  /**
      * 过滤条件。
<li>AliasName- String- 主机别名</li>
      */
  Filters?: Array<Filters>

  /**
   * 主机标签名
   */
  TagNames?: Array<string>
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
 * DescribeAssetJarInfo请求参数结构体
 */
export interface DescribeAssetJarInfoRequest {
  /**
   * 服务器Quuid
   */
  Quuid: string

  /**
   * 服务器Uuid
   */
  Uuid: string

  /**
   * Jar包ID
   */
  Id: string
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
 * 基线信息
 */
export interface BaselineInfo {
  /**
      * 基线名
注意：此字段可能返回 null，表示取不到有效值。
      */
  Name: string

  /**
      * 危害等级：1-低危；2-中危；3-高危；4-严重
注意：此字段可能返回 null，表示取不到有效值。
      */
  Level: number

  /**
      * 检测项数量
注意：此字段可能返回 null，表示取不到有效值。
      */
  RuleCount: number

  /**
      * 影响服务器数量
注意：此字段可能返回 null，表示取不到有效值。
      */
  HostCount: number

  /**
      * 通过状态:0:未通过,1:已通过
注意：此字段可能返回 null，表示取不到有效值。
      */
  Status: number

  /**
      * 基线id
注意：此字段可能返回 null，表示取不到有效值。
      */
  CategoryId: number

  /**
      * 最后检测时间
注意：此字段可能返回 null，表示取不到有效值。
      */
  LastScanTime: string

  /**
      * 检测中状态: 5
注意：此字段可能返回 null，表示取不到有效值。
      */
  MaxStatus: number

  /**
      * 基线风险项
注意：此字段可能返回 null，表示取不到有效值。
      */
  BaselineFailCount: number
}

/**
 * DescribeVulHostCountScanTime请求参数结构体
 */
export type DescribeVulHostCountScanTimeRequest = null

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
 * 未处理的安全事件统计信息
 */
export interface EventStat {
  /**
   * 事件数
   */
  EventsNum: number

  /**
   * 受影响的主机数
   */
  MachineAffectNum: number
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
   * 基础版数量
   */
  BasicVersionNum: number

  /**
   * 专业版数量
   */
  ProVersionNum: number

  /**
   * 旗舰版数量
   */
  UltimateVersionNum: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeBruteAttackRules请求参数结构体
 */
export type DescribeBruteAttackRulesRequest = null

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
 * DescribeAssetWebAppPluginList返回参数结构体
 */
export interface DescribeAssetWebAppPluginListResponse {
  /**
      * 列表
注意：此字段可能返回 null，表示取不到有效值。
      */
  Plugins: Array<AssetWebAppPluginInfo>

  /**
   * 分区总数
   */
  Total: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
 * 服务器风险Top的主机信息
 */
export interface BaselineEventLevelInfo {
  /**
      * 危害等级：1-低危；2-中危；3-高危；4-严重
注意：此字段可能返回 null，表示取不到有效值。
      */
  EventLevel: number

  /**
      * 漏洞数量
注意：此字段可能返回 null，表示取不到有效值。
      */
  EventCount: number
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
 * 基线安全用户策略信息
 */
export interface Strategy {
  /**
      * 策略名
注意：此字段可能返回 null，表示取不到有效值。
      */
  StrategyName: string

  /**
      * 策略id
注意：此字段可能返回 null，表示取不到有效值。
      */
  StrategyId: number

  /**
      * 基线检测项总数
注意：此字段可能返回 null，表示取不到有效值。
      */
  RuleCount: number

  /**
      * 主机数量
注意：此字段可能返回 null，表示取不到有效值。
      */
  HostCount: number

  /**
      * 扫描周期
注意：此字段可能返回 null，表示取不到有效值。
      */
  ScanCycle: number

  /**
      * 扫描时间
注意：此字段可能返回 null，表示取不到有效值。
      */
  ScanAt: string

  /**
      * 是否可用
注意：此字段可能返回 null，表示取不到有效值。
      */
  Enabled: number

  /**
      * 通过率
注意：此字段可能返回 null，表示取不到有效值。
      */
  PassRate: number

  /**
      * 基线id
注意：此字段可能返回 null，表示取不到有效值。
      */
  CategoryIds: string

  /**
      * 是否默认策略
注意：此字段可能返回 null，表示取不到有效值。
      */
  IsDefault: number
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
 * DescribeEmergencyResponseList返回参数结构体
 */
export interface DescribeEmergencyResponseListResponse {
  /**
   * 总条数
   */
  TotalCount: number

  /**
   * 应急响应列表
   */
  List: Array<EmergencyResponseInfo>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

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
 * 资产管理计划任务列表
 */
export interface AssetPlanTask {
  /**
   * 默认启用状态：1启用，2未启用
   */
  Status: number

  /**
   * 执行周期
   */
  Cycle: string

  /**
   * 执行命令或脚本
   */
  Command: string

  /**
   * 启动用户
   */
  User: string

  /**
   * 配置文件路径
   */
  ConfigPath: string

  /**
   * 服务器IP
   */
  MachineIp: string

  /**
   * 服务器名称
   */
  MachineName: string

  /**
   * 操作系统
   */
  OsInfo: string

  /**
   * 主机Quuid
   */
  Quuid: string

  /**
   * 主机uuid
   */
  Uuid: string

  /**
      * 数据更新时间
注意：此字段可能返回 null，表示取不到有效值。
      */
  UpdateTime: string
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
 * DescribeAssetAppList返回参数结构体
 */
export interface DescribeAssetAppListResponse {
  /**
      * 应用列表
注意：此字段可能返回 null，表示取不到有效值。
      */
  Apps: Array<AssetAppBaseInfo>

  /**
   * 总数量
   */
  Total: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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

  /**
   * 1标准模式（只报严重、高危）、2增强模式（报严重、高危、中危）、3严格模式（报严重、高、中、低、提示）
   */
  EngineType?: number
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
   * 是否杀掉进程 1杀掉 0不杀掉 只有开启自动隔离才生效
   */
  KillProcess: number

  /**
   * 1标准模式（只报严重、高危）、2增强模式（报严重、高危、中危）、3严格模式（报严重、高、中、低、提示）
   */
  EngineType: number

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
<li>Quuid - String - 是否必填：否 - 云服务器uuid</li>
<li>UserName - String - 是否必填：否 - 用户名筛选</li>
<li>LoginTimeBegin - String - 是否必填：否 - 按照修改时间段筛选，开始时间</li>
<li>LoginTimeEnd - String - 是否必填：否 - 按照修改时间段筛选，结束时间</li>
<li>SrcIp - String - 是否必填：否 - 来源ip筛选</li>
<li>Status - int - 是否必填：否 - 状态筛选1:正常登录；5：已加白,14:已处理，15：已忽略</li>
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
 * DescribeAssetWebServiceProcessList请求参数结构体
 */
export interface DescribeAssetWebServiceProcessListRequest {
  /**
   * 主机Quuid
   */
  Quuid: string

  /**
   * 主机Uuid
   */
  Uuid: string

  /**
   * Web服务ID
   */
  Id: string

  /**
   * 偏移量，默认为0。
   */
  Offset?: number

  /**
   * 需要返回的数量，默认为10，最大值为100
   */
  Limit?: number
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
 * 资产管理内核模块详情
 */
export interface AssetCoreModuleDetail {
  /**
   * 名称
   */
  Name: string

  /**
   * 描述
   */
  Desc: string

  /**
   * 路径
   */
  Path: string

  /**
   * 版本
   */
  Version: string

  /**
   * 大小
   */
  Size: number

  /**
   * 依赖进程
   */
  Processes: string

  /**
   * 被依赖模块
   */
  Modules: string

  /**
      * 参数信息
注意：此字段可能返回 null，表示取不到有效值。
      */
  Params: Array<AssetCoreModuleParam>

  /**
      * 数据更新时间
注意：此字段可能返回 null，表示取不到有效值。
      */
  UpdateTime: string
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
 * DescribeAssetPortInfoList返回参数结构体
 */
export interface DescribeAssetPortInfoListResponse {
  /**
   * 记录总数
   */
  Total: number

  /**
      * 列表
注意：此字段可能返回 null，表示取不到有效值。
      */
  Ports: Array<AssetPortBaseInfo>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
 * DescribeMaliciousRequestWhiteList返回参数结构体
 */
export interface DescribeMaliciousRequestWhiteListResponse {
  /**
      * 白名单信息列表
注意：此字段可能返回 null，表示取不到有效值。
      */
  List: Array<MaliciousRequestWhiteListInfo>

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
      * 用户批量导入失败的机器列表（例如机器不存在等...）
注意：此字段可能返回 null，表示取不到有效值。
      */
  InvalidMachineList: Array<string>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeSecurityEventStat返回参数结构体
 */
export interface DescribeSecurityEventStatResponse {
  /**
   * 木马事件统计
   */
  MalwareStat: EventStat

  /**
   * 异地事件统计
   */
  HostLoginStat: EventStat

  /**
   * 爆破事件统计
   */
  BruteAttackStat: EventStat

  /**
   * 恶意请求事件统计
   */
  MaliciousRequestStat: EventStat

  /**
   * 本地提权事件统计
   */
  PrivilegeStat: EventStat

  /**
   * 反弹Shell事件统计
   */
  ReverseShellStat: EventStat

  /**
   * 高危命令事件统计
   */
  HighRiskBashStat: EventStat

  /**
   * 网络攻击事件统计
   */
  AttackLogsStat: EventStat

  /**
   * 高危漏洞事件统计
   */
  VulHighStat: EventStat

  /**
   * 中危漏洞事件统计
   */
  VulNormalStat: EventStat

  /**
   * 低危漏洞事件统计
   */
  VulLowStat: EventStat

  /**
   * 高危基线漏洞事件统计
   */
  BaselineHighStat: EventStat

  /**
   * 中危基线漏事件统计
   */
  BaselineNormalStat: EventStat

  /**
   * 低危基线漏事件统计
   */
  BaselineLowStat: EventStat

  /**
   * 有未处理安全事件的机器总数
   */
  MachineTotalAffectNum: number

  /**
   * 有未处理入侵安全事件的机器总数
   */
  InvasionTotalAffectNum: number

  /**
   * 有未处理漏洞安全事件的机器总数
   */
  VulTotalAffectNum: number

  /**
   * 有未处理基线安全事件的机器总数
   */
  BaseLineTotalAffectNum: number

  /**
   * 有未处理网络攻击安全事件的机器总数
   */
  CyberAttackTotalAffectNum: number

  /**
   * 严重漏洞事件统计
   */
  VulRiskStat: EventStat

  /**
   * 严重基线漏洞事件统计
   */
  BaselineRiskStat: EventStat

  /**
   * 漏洞数统计
   */
  VulStat: EventStat

  /**
   * 安全得分
   */
  Score: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeAssetDatabaseList请求参数结构体
 */
export interface DescribeAssetDatabaseListRequest {
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
<li>User- string - 是否必填：否 - 运行用户</li>
<li>Ip - String - 是否必填：否 - 绑定IP</li>
<li>Port - Int - 是否必填：否 - 端口</li>
<li>Name - Int - 是否必填：否 - 数据库名称
0:全部
1:MySQL
2:Redis
3:Oracle
4:MongoDB
5:MemCache
6:PostgreSQL
7:HBase
8:DB2
9:Sybase
10:TiDB</li>
<li>Proto - String - 是否必填：否 - 协议：1:TCP, 2:UDP, 3:未知</li>
<li>OsType - String - 是否必填：否 - 操作系统: linux/windows</li>
<li>Os -String 是否必填: 否 - 操作系统( DescribeMachineOsList 接口 值 )</li>
      */
  Filters?: Array<AssetFilters>

  /**
   * 查询指定Quuid主机的信息
   */
  Quuid?: string
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
 * DescribeAssetMachineList请求参数结构体
 */
export interface DescribeAssetMachineListRequest {
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
<li>OsType - String - 是否必填：否 - windows或linux</li>
<li>CpuLoad - Int - 是否必填：否 - 
0: 未知  1: 低负载
2: 中负载  3: 高负载</li>
<li>DiskLoad - Int - 是否必填：否 - 
0: 0%或未知  1: 0%～20%
2: 20%～50%  3: 50%～80%
4: 80%～100%</li>
<li>MemLoad - Int - 是否必填：否 - 
0: 0%或未知  1: 0%～20%
2: 20%～50%  3: 50%～80%
4: 80%～100%</li>
<li>Quuid：主机Quuid</li>
<li>Os -String 是否必填: 否 - 操作系统( DescribeMachineOsList 接口 值 )</li>
      */
  Filters?: Array<Filter>

  /**
   * 可选排序：PartitionCount
   */
  By?: string

  /**
   * 排序方式，asc升序 或 desc降序
   */
  Order?: string
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
 * DescribeAssetDatabaseList返回参数结构体
 */
export interface DescribeAssetDatabaseListResponse {
  /**
      * 列表
注意：此字段可能返回 null，表示取不到有效值。
      */
  Databases: Array<AssetDatabaseBaseInfo>

  /**
   * 总数量
   */
  Total: number

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
 * ExportNonlocalLoginPlaces请求参数结构体
 */
export interface ExportNonlocalLoginPlacesRequest {
  /**
   * <li>Status - int - 是否必填：否 - 状态筛选1:正常登录；2：异地登录</li>
   */
  Filters?: Array<Filter>
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
 * 资产管理内核模块列表
 */
export interface AssetCoreModuleBaseInfo {
  /**
   * 名称
   */
  Name: string

  /**
   * 描述
   */
  Desc: string

  /**
   * 路径
   */
  Path: string

  /**
   * 版本
   */
  Version: string

  /**
   * 服务器IP
   */
  MachineIp: string

  /**
   * 服务器名称
   */
  MachineName: string

  /**
   * 操作系统
   */
  OsInfo: string

  /**
   * 模块大小
   */
  Size: number

  /**
   * 依赖进程数
   */
  ProcessCount: number

  /**
   * 依赖模块数
   */
  ModuleCount: number

  /**
   * 模块ID
   */
  Id: string

  /**
   * 主机Quuid
   */
  Quuid: string

  /**
   * 主机uuid
   */
  Uuid: string

  /**
      * 数据更新时间
注意：此字段可能返回 null，表示取不到有效值。
      */
  UpdateTime: string
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

  /**
      * 0：待处理，1：忽略，5：已处理，6：加入白名单
注意：此字段可能返回 null，表示取不到有效值。
      */
  DataStatus: number
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
 * DescribeAssetPortInfoList请求参数结构体
 */
export interface DescribeAssetPortInfoListRequest {
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
<li>Port - uint64 - 是否必填：否 - 端口</li>
<li>Ip - String - 是否必填：否 - 绑定IP</li>
<li>ProcessName - String - 是否必填：否 - 监听进程</li>
<li>Pid - uint64 - 是否必填：否 - PID</li>
<li>User - String - 是否必填：否 - 运行用户</li>
<li>Group - String - 是否必填：否 - 所属用户组</li>
<li>Ppid - uint64 - 是否必填：否 - PPID</li>
<li>Proto - string - 是否必填：否 - tcp/udp或“”(空字符串筛选未知状态)</li>
<li>OsType - uint64 - 是否必填：否 - windows/linux</li>
<li>RunTimeStart - String - 是否必填：否 - 运行开始时间</li>
<li>RunTimeEnd - String - 是否必填：否 - 运行结束时间</li>
<li>Os -String 是否必填: 否 - 操作系统( DescribeMachineOsList 接口 值 )</li>
      */
  Filters?: Array<Filter>

  /**
   * 排序方式，asc升序 或 desc降序
   */
  Order?: string

  /**
   * 排序方式：StartTime
   */
  By?: string

  /**
   * 查询指定Quuid主机的信息
   */
  Quuid?: string
}

/**
 * 漏洞等级数量实体
 */
export interface VulLevelCountInfo {
  /**
   * 漏洞等级
   */
  VulLevel: number

  /**
   * 漏洞数量
   */
  VulCount: number
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
 * CreateScanMalwareSetting返回参数结构体
 */
export interface CreateScanMalwareSettingResponse {
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
   * 状态；0-待处理，2-已加白，3-非信任状态，4-已处理，5-已忽略
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

  /**
      * 外网ip
注意：此字段可能返回 null，表示取不到有效值。
      */
  MachineWanIp: string

  /**
      * 主机在线状态 OFFLINE  ONLINE
注意：此字段可能返回 null，表示取不到有效值。
      */
  MachineStatus: string
}

/**
 * DeleteMalwareScanTask请求参数结构体
 */
export type DeleteMalwareScanTaskRequest = null

/**
 * DescribeIgnoreRuleEffectHostList返回参数结构体
 */
export interface DescribeIgnoreRuleEffectHostListResponse {
  /**
      * 忽略检测项影响主机列表
注意：此字段可能返回 null，表示取不到有效值。
      */
  IgnoreRuleEffectHostList: Array<IgnoreRuleEffectHostInfo>

  /**
   * 分页查询记录总数
   */
  TotalCount: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

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
   * 规则名称，编辑时不可修改规则名称
   */
  Name?: string

  /**
   * 危险等级(0:无，1: 高危 2:中危 3: 低危)
   */
  Level?: number

  /**
   * 正则表达式 ，编辑时不可修改正则表达式，需要对内容QueryEscape后再base64
   */
  Rule?: string

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
 * ScanVulSetting请求参数结构体
 */
export interface ScanVulSettingRequest {
  /**
   * 定期检测间隔时间（天）
   */
  TimerInterval: number

  /**
   * 漏洞类型：1: web-cms漏洞 2:应用漏洞  4: Linux软件漏洞 5: Windows系统漏洞, 以数组方式传参[1,2]
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
 * DescribeBruteAttackRules返回参数结构体
 */
export interface DescribeBruteAttackRulesResponse {
  /**
   * 爆破阻断规则列表
   */
  Rules: Array<BruteAttackRuleList>

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
 * 基线检测项TOP信息
 */
export interface BaselineRuleTopInfo {
  /**
      * 基线检测项名
注意：此字段可能返回 null，表示取不到有效值。
      */
  RuleName: string

  /**
      * 检测项危害等级
注意：此字段可能返回 null，表示取不到有效值。
      */
  Level: number

  /**
      * 事件总数
注意：此字段可能返回 null，表示取不到有效值。
      */
  EventCount: number

  /**
      * 检测项id
注意：此字段可能返回 null，表示取不到有效值。
      */
  RuleId: number
}

/**
 * 资源管理进程基本信息
 */
export interface AssetProcessBaseInfo {
  /**
   * 主机内网IP
   */
  MachineIp: string

  /**
   * 主机外网IP
   */
  MachineWanIp: string

  /**
   * 主机Quuid
   */
  Quuid: string

  /**
   * 主机Uuid
   */
  Uuid: string

  /**
   * 操作系统信息
   */
  OsInfo: string

  /**
   * 主机业务组ID
   */
  ProjectId: number

  /**
      * 主机标签
注意：此字段可能返回 null，表示取不到有效值。
      */
  Tag: Array<MachineTag>

  /**
   * 进程名称
   */
  Name: string

  /**
   * 进程说明
   */
  Desc: string

  /**
   * 进程路径
   */
  Path: string

  /**
   * 进程ID
   */
  Pid: string

  /**
   * 运行用户
   */
  User: string

  /**
   * 启动时间
   */
  StartTime: string

  /**
   * 启动参数
   */
  Param: string

  /**
   * 进程TTY
   */
  Tty: string

  /**
   * 进程版本
   */
  Version: string

  /**
   * 进程用户组
   */
  GroupName: string

  /**
   * 进程MD5
   */
  Md5: string

  /**
   * 父进程ID
   */
  Ppid: string

  /**
   * 父进程名称
   */
  ParentProcessName: string

  /**
   * 进程状态
   */
  Status: string

  /**
   * 数字签名:0无，1有， 999 空，仅windows
   */
  HasSign: number

  /**
   * 是否通过安装包安装：:0否，1是， 999 空，仅linux
   */
  InstallByPackage: number

  /**
   * 软件包名
   */
  PackageName: string

  /**
   * 主机名称
   */
  MachineName: string

  /**
      * 数据更新时间
注意：此字段可能返回 null，表示取不到有效值。
      */
  UpdateTime: string
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
 * DescribeAssetCoreModuleList返回参数结构体
 */
export interface DescribeAssetCoreModuleListResponse {
  /**
      * 列表
注意：此字段可能返回 null，表示取不到有效值。
      */
  Modules: Array<AssetCoreModuleBaseInfo>

  /**
   * 总数量
   */
  Total: number

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

  /**
   * 是否杀掉进程 1杀掉 0不杀掉
   */
  KillProcess?: number

  /**
   * 1标准模式（只报严重、高危）、2增强模式（报严重、高危、中危）、3严格模式（报严重、高、中、低、提示）
   */
  EngineType?: number
}

/**
 * 资产管理环境变量列表
 */
export interface AssetEnvBaseInfo {
  /**
   * 名称
   */
  Name: string

  /**
      * 类型：
0:用户变量
1:系统变量
      */
  Type: number

  /**
   * 启动用户
   */
  User: string

  /**
   * 环境变量值
   */
  Value: string

  /**
   * 服务器IP
   */
  MachineIp: string

  /**
   * 服务器名称
   */
  MachineName: string

  /**
   * 操作系统
   */
  OsInfo: string

  /**
   * 主机Quuid
   */
  Quuid: string

  /**
   * 主机uuid
   */
  Uuid: string

  /**
      * 数据更新时间
注意：此字段可能返回 null，表示取不到有效值。
      */
  UpdateTime: string
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

  /**
      * 外网ip
注意：此字段可能返回 null，表示取不到有效值。
      */
  MachineWanIp: string

  /**
      * 进程树 json  pid:进程id，exe:文件路径 ，account:进程所属用组和用户 ,cmdline:执行命令，ssh_service: SSH服务ip, ssh_soure:登录源
注意：此字段可能返回 null，表示取不到有效值。
      */
  PsTree: string

  /**
      * 主机在线状态 OFFLINE  ONLINE
注意：此字段可能返回 null，表示取不到有效值。
      */
  MachineStatus: string

  /**
      * 状态；4-:待处理，5-已信任，6-已隔离
注意：此字段可能返回 null，表示取不到有效值。
      */
  Status: number

  /**
      * 风险等级 0提示、1低、2中、3高、4严重
注意：此字段可能返回 null，表示取不到有效值。
      */
  Level: number

  /**
      * 木马检测平台用,分割 1云查杀引擎、2TAV、3binaryAi、4异常行为、5威胁情报
注意：此字段可能返回 null，表示取不到有效值。
      */
  CheckPlatform: string

  /**
      * 主机uuid
注意：此字段可能返回 null，表示取不到有效值。
      */
  Uuid: string
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
 * DescribeExpertServiceOrderList返回参数结构体
 */
export interface DescribeExpertServiceOrderListResponse {
  /**
   * 总条数
   */
  TotalCount: number

  /**
   * 订单列表
   */
  List: Array<ExpertServiceOrderInfo>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
 * DescribeAssetPlanTaskList请求参数结构体
 */
export interface DescribeAssetPlanTaskListRequest {
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
<li>User- string - 是否必填：否 - 用户</li>
<li>Status- int - 是否必填：否 - 默认启用状态：0未启用， 1启用 </li>
      */
  Filters?: Array<AssetFilters>

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
 * DescribeBaselineAnalysisData返回参数结构体
 */
export interface DescribeBaselineAnalysisDataResponse {
  /**
      * 最后检测时间
注意：此字段可能返回 null，表示取不到有效值。
      */
  LatestScanTime: string

  /**
      * 是否全部服务器：1-是 0-否
注意：此字段可能返回 null，表示取不到有效值。
      */
  IsGlobal: number

  /**
      * 服务器总数
注意：此字段可能返回 null，表示取不到有效值。
      */
  ScanHostCount: number

  /**
      * 检测项总数
注意：此字段可能返回 null，表示取不到有效值。
      */
  ScanRuleCount: number

  /**
      * 是否是第一次检测  1是 0不是
注意：此字段可能返回 null，表示取不到有效值。
      */
  IfFirstScan: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
 * 阻断白名单展示列表，包含了机器的信息
 */
export interface BanWhiteListDetail {
  /**
   * 白名单ID
   */
  Id: string

  /**
   * 白名单别名
   */
  Remark: string

  /**
   * 阻断来源IP
   */
  SrcIp: string

  /**
   * 修改白名单时间
   */
  ModifyTime: string

  /**
   * 创建白名单时间
   */
  CreateTime: string

  /**
   * 白名单是否全局
   */
  IsGlobal: boolean

  /**
   * 机器的UUID
   */
  Quuid: string

  /**
   * 主机安全程序的UUID
   */
  Uuid: string

  /**
   * 机器IP
   */
  MachineIp: string

  /**
   * 机器名称
   */
  MachineName: string
}

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
 * 资源管理Web应用列表信息
 */
export interface AssetWebAppBaseInfo {
  /**
   * 主机内网IP
   */
  MachineIp: string

  /**
   * 主机外网IP
   */
  MachineWanIp: string

  /**
   * 主机Quuid
   */
  Quuid: string

  /**
   * 主机Uuid
   */
  Uuid: string

  /**
   * 操作系统信息
   */
  OsInfo: string

  /**
   * 主机业务组ID
   */
  ProjectId: number

  /**
      * 主机标签
注意：此字段可能返回 null，表示取不到有效值。
      */
  Tag: Array<MachineTag>

  /**
   * 应用名
   */
  Name: string

  /**
   * 版本
   */
  Version: string

  /**
   * 根路径
   */
  RootPath: string

  /**
   * 服务类型
   */
  ServiceType: string

  /**
   * 站点域名
   */
  Domain: string

  /**
   * 虚拟路径
   */
  VirtualPath: string

  /**
   * 插件数
   */
  PluginCount: number

  /**
   * 应用ID
   */
  Id: string

  /**
   * 应用描述
   */
  Desc: string

  /**
   * 主机名称
   */
  MachineName: string

  /**
      * 数据更新时间
注意：此字段可能返回 null，表示取不到有效值。
      */
  UpdateTime: string
}

/**
 * 资产管理内核模块参数
 */
export interface AssetCoreModuleParam {
  /**
   * 名称
   */
  Name: string

  /**
   * 数据
   */
  Data: string
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
 * 资产管理jar包列表
 */
export interface AssetJarBaseInfo {
  /**
   * 名称
   */
  Name: string

  /**
   * 类型：1应用程序，2系统类库，3Web服务自带库，8:其他，
   */
  Type: number

  /**
   * 是否可执行：0未知，1是，2否
   */
  Status: number

  /**
   * 版本
   */
  Version: string

  /**
   * 路径
   */
  Path: string

  /**
   * 服务器IP
   */
  MachineIp: string

  /**
   * 服务器名称
   */
  MachineName: string

  /**
   * 操作系统
   */
  OsInfo: string

  /**
   * Jar包ID
   */
  Id: string

  /**
   * Jar包Md5
   */
  Md5: string

  /**
   * 主机Quuid
   */
  Quuid: string

  /**
   * 主机uuid
   */
  Uuid: string

  /**
      * 数据更新时间
注意：此字段可能返回 null，表示取不到有效值。
      */
  UpdateTime: string
}

/**
 * SeparateMalwares请求参数结构体
 */
export interface SeparateMalwaresRequest {
  /**
   * 木马事件ID数组。(最大100条)
   */
  Ids: Array<number>

  /**
   * 是否杀掉进程
   */
  KillProcess?: boolean
}

/**
 * 主机安全-漏洞管理-漏洞列表
 */
export interface VulInfoList {
  /**
   * 漏洞包含的事件id串，多个用“,”分割
   */
  Ids: string

  /**
   * 漏洞名
   */
  Name: string

  /**
   * 0: 待处理 1:忽略  3:已修复  5:检测中 6:修复中  8:修复失败
   */
  Status: number

  /**
   * 漏洞id
   */
  VulId: number

  /**
   * 漏洞披露事件
   */
  PublishTime: string

  /**
   * 最后检测时间
   */
  LastTime: string

  /**
   * 影响主机数
   */
  HostCount: number

  /**
   * 漏洞等级 1:低 2:中 3:高 4:提示
   */
  Level: number

  /**
      * 废弃字段
注意：此字段可能返回 null，表示取不到有效值。
      */
  From: number

  /**
      * 描述
注意：此字段可能返回 null，表示取不到有效值。
      */
  Descript: string

  /**
      * 废弃字段
注意：此字段可能返回 null，表示取不到有效值。
      */
  PublishTimeWisteria: string

  /**
      * 废弃字段
注意：此字段可能返回 null，表示取不到有效值。
      */
  NameWisteria: string

  /**
      * 废弃字段
注意：此字段可能返回 null，表示取不到有效值。
      */
  DescriptWisteria: string

  /**
      * 聚合后事件状态串
注意：此字段可能返回 null，表示取不到有效值。
      */
  StatusStr: string

  /**
      * cve编号
注意：此字段可能返回 null，表示取不到有效值。
      */
  CveId: string

  /**
      * CVSS评分
注意：此字段可能返回 null，表示取不到有效值。
      */
  CvssScore: number

  /**
      * 漏洞标签 多个逗号分割
注意：此字段可能返回 null，表示取不到有效值。
      */
  Labels: string

  /**
      * 是否能自动修复且包含能自动修复的主机， 0=否  1=是
注意：此字段可能返回 null，表示取不到有效值。
      */
  FixSwitch: number

  /**
      * 最后扫描任务的id
注意：此字段可能返回 null，表示取不到有效值。
      */
  TaskId: number
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
 * DescribeAssetCoreModuleList请求参数结构体
 */
export interface DescribeAssetCoreModuleListRequest {
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
 * DeleteAttackLogs请求参数结构体
 */
export interface DeleteAttackLogsRequest {
  /**
   * 日志ID数组，最大100条。
   */
  Ids: Array<number>
}

/**
 * DescribeBaselineStrategyDetail返回参数结构体
 */
export interface DescribeBaselineStrategyDetailResponse {
  /**
      * 策略扫描通过率
注意：此字段可能返回 null，表示取不到有效值。
      */
  PassRate: number

  /**
      * 策略名
注意：此字段可能返回 null，表示取不到有效值。
      */
  StrategyName: string

  /**
      * 策略扫描周期(天)
注意：此字段可能返回 null，表示取不到有效值。
      */
  ScanCycle: string

  /**
      * 定期检测时间, 该时间下发扫描
注意：此字段可能返回 null，表示取不到有效值。
      */
  ScanAt: string

  /**
      * 扫描范围是否全部服务器, 1:是  0:否, 为1则为全部专业版主机
注意：此字段可能返回 null，表示取不到有效值。
      */
  IsGlobal: number

  /**
      * 云服务器类型：
cvm：腾讯云服务器
bm：裸金属
ecm：边缘计算主机
lh: 轻量应用服务器
ohter: 混合云机器
注意：此字段可能返回 null，表示取不到有效值。
      */
  MachineType: string

  /**
      * 主机地域
注意：此字段可能返回 null，表示取不到有效值。
      */
  Region: string

  /**
      * 用户该策略下的所有主机id
注意：此字段可能返回 null，表示取不到有效值。
      */
  Quuids: Array<string>

  /**
      * 用户该策略下所有的基线id
注意：此字段可能返回 null，表示取不到有效值。
      */
  CategoryIds: Array<string>

  /**
      * 1 表示扫描过, 0没扫描过
注意：此字段可能返回 null，表示取不到有效值。
      */
  IfScanned: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeBaselineList请求参数结构体
 */
export interface DescribeBaselineListRequest {
  /**
   * 分页参数 最大100条
   */
  Limit: number

  /**
   * 分页参数
   */
  Offset: number

  /**
      * 过滤条件。
<li>StrategyId- Uint64 - 基线策略id</li>
<li>Status - Uint64 - 处理状态1已通过 0未通过</li>
<li>Level - Uint64[] - 处理状态1已通过 0未通过</li>BaselineName 
<li>BaselineName  - String - 基线名称</li>
<li>Quuid- String - 主机quuid</li>
<li>Uuid- String - 主机uuid</li>
      */
  Filters?: Array<Filters>
}

/**
 * DescribeBaselineTop请求参数结构体
 */
export interface DescribeBaselineTopRequest {
  /**
   * 动态top值
   */
  Top: number

  /**
   * 策略id
   */
  StrategyId: number
}

/**
 * DescribeAssetAppProcessList请求参数结构体
 */
export interface DescribeAssetAppProcessListRequest {
  /**
   * 主机Quuid
   */
  Quuid: string

  /**
   * 主机Uuid
   */
  Uuid: string

  /**
   * App名
   */
  Name: string

  /**
   * 偏移量，默认为0。
   */
  Offset?: number

  /**
   * 需要返回的数量，默认为10，最大值为100
   */
  Limit?: number
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
 * 安全管家列表信息
 */
export interface SecurityButlerInfo {
  /**
   * 数据id
   */
  Id: number

  /**
   * 订单id
   */
  OrderId: number

  /**
   * cvm id
   */
  Quuid: string

  /**
   * 服务状态 0-服务中,1-已到期 2已销毁
   */
  Status: number

  /**
   * 服务开始时间
   */
  StartTime: string

  /**
   * 服务结束时间
   */
  EndTime: string

  /**
   * 主机名称
   */
  HostName: string

  /**
   * 主机Ip
   */
  HostIp: string

  /**
   * 主机 uuid
   */
  Uuid: string

  /**
   * 主机风险数
   */
  RiskCount: number
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
 * DescribeAssetProcessInfoList返回参数结构体
 */
export interface DescribeAssetProcessInfoListResponse {
  /**
   * 记录总数
   */
  Total: number

  /**
      * 列表
注意：此字段可能返回 null，表示取不到有效值。
      */
  Process: Array<AssetProcessBaseInfo>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
 * DescribeAssetWebAppList请求参数结构体
 */
export interface DescribeAssetWebAppListRequest {
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
<li>Name - String - 是否必填：否 - 应用名</li>
<li>Domain - String - 是否必填：否 - 站点域名</li>
<li>Type - int - 是否必填：否 - 服务类型：
0：全部
1:Tomcat
2:Apache
3:Nginx
4:WebLogic
5:Websphere
6:JBoss
7:Jetty
8:IHS
9:Tengine</li>
<li>OsType - String - 是否必填：否 - windows/linux</li>
<li>Os -String 是否必填: 否 - 操作系统( DescribeMachineOsList 接口 值 )</li>
      */
  Filters?: Array<Filter>

  /**
   * 排序方式，asc升序 或 desc降序
   */
  Order?: string

  /**
   * 可选排序：PluginCount
   */
  By?: string

  /**
   * 查询指定Quuid主机的信息
   */
  Quuid?: string
}

/**
 * 专家服务订单信息
 */
export interface ExpertServiceOrderInfo {
  /**
   * 订单id
   */
  OrderId: number

  /**
   * 订单类型 1应急 2 旗舰护网 3 安全管家
   */
  InquireType: number

  /**
   * 服务数量
   */
  InquireNum: number

  /**
   * 服务开始时间
   */
  BeginTime: string

  /**
   * 服务结束时间
   */
  EndTime: string

  /**
   * 服务时长几个月
   */
  ServiceTime: number

  /**
   * 订单状态 0 未启动 1 服务中 2已过期 3完成，4退费销毁
   */
  Status: number
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
 * 资产管理账号key详情
 */
export interface AssetUserKeyInfo {
  /**
   * 公钥值
   */
  Value: string

  /**
   * 公钥备注
   */
  Comment: string

  /**
   * 加密方式
   */
  EncryptType: string
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
 * DescribeAssetWebLocationList请求参数结构体
 */
export interface DescribeAssetWebLocationListRequest {
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
<li>Name - String - 是否必填：否 - 域名</li>
<li>User - String - 是否必填：否 - 运行用户</li>
<li>Port - uint64 - 是否必填：否 - 站点端口</li>
<li>Proto - uint64 - 是否必填：否 - 站点协议：1:HTTP,2:HTTPS</li>
<li>ServiceType - uint64 - 是否必填：否 - 服务类型：
1:Tomcat
2：Apache
3:Nginx
4:WebLogic
5:Websphere
6:JBoss
7:WildFly
8:Jetty
9:IHS
10:Tengine</li>
<li>OsType - String - 是否必填：否 - windows/linux</li>
<li>Os -String 是否必填: 否 - 操作系统( DescribeMachineOsList 接口 值 )</li>
      */
  Filters?: Array<Filter>

  /**
   * 排序方式，asc升序 或 desc降序
   */
  Order?: string

  /**
   * 可选排序：PathCount
   */
  By?: string

  /**
   * 查询指定Quuid主机的信息
   */
  Quuid?: string
}

/**
 * DescribeVulLevelCount请求参数结构体
 */
export interface DescribeVulLevelCountRequest {
  /**
   * 1:web-cms 漏洞，2.应用漏洞 3:安全基线 4: Linux软件漏洞 5: windows系统漏洞 6:应急漏洞
   */
  VulCategory?: number
}

/**
 * DeleteWebPageEventLog请求参数结构体
 */
export type DeleteWebPageEventLogRequest = null

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
 * DescribeBaselineList返回参数结构体
 */
export interface DescribeBaselineListResponse {
  /**
      * 基线信息列表
注意：此字段可能返回 null，表示取不到有效值。
      */
  BaselineList: Array<BaselineInfo>

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
 * DescribeExpertServiceOrderList请求参数结构体
 */
export interface DescribeExpertServiceOrderListRequest {
  /**
   * <li>InquireType- String - 是否必填：否 - 订单类型过滤，</li>
   */
  Filters?: Array<Filters>

  /**
   * 分页条数 最大100条
   */
  Limit?: number

  /**
   * 分页步长
   */
  Offset?: number
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
   * 1:web-cms 漏洞，2.应用漏洞 3:安全基线 4: Linux软件漏洞 5: windows系统漏洞 6:应急漏洞
   */
  VulCategory?: number
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
      * 旗舰版主机数
注意：此字段可能返回 null，表示取不到有效值。
      */
  FlagshipMachineCnt: number

  /**
      * 保护天数
注意：此字段可能返回 null，表示取不到有效值。
      */
  ProtectDays: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
   * 应用漏洞风险事件
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
      * window 系统漏洞事件总数
注意：此字段可能返回 null，表示取不到有效值。
      */
  WindowVul: SecurityEventInfo

  /**
      * linux系统漏洞事件总数
注意：此字段可能返回 null，表示取不到有效值。
      */
  LinuxVul: SecurityEventInfo

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
   * 事件告警类型；1：离线，2：木马，3：异常登录，4：爆破，5：漏洞（已拆分为9-12四种类型）6：高危命令，7：反弹sell，8：本地提权，9：应用漏洞，10：web-cms漏洞，11：应急漏洞，12：安全基线 ,13: 防篡改，14：恶意请求，15: 网络攻击，16：Windows系统漏洞，17：Linux软件漏洞
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
 * DescribeBaselineAnalysisData请求参数结构体
 */
export interface DescribeBaselineAnalysisDataRequest {
  /**
   * 基线策略id
   */
  StrategyId: number
}

/**
 * 资源管理账号基本信息
 */
export interface AssetPortBaseInfo {
  /**
   * 主机内网IP
   */
  MachineIp: string

  /**
   * 主机外网IP
   */
  MachineWanIp: string

  /**
   * 主机Quuid
   */
  Quuid: string

  /**
   * 主机Uuid
   */
  Uuid: string

  /**
   * 操作系统信息
   */
  OsInfo: string

  /**
   * 主机业务组ID
   */
  ProjectId: number

  /**
      * 主机标签
注意：此字段可能返回 null，表示取不到有效值。
      */
  Tag: Array<MachineTag>

  /**
   * 进程名称
   */
  ProcessName: string

  /**
   * 进程版本
   */
  ProcessVersion: string

  /**
   * 进程路径
   */
  ProcessPath: string

  /**
   * 进程ID
   */
  Pid: string

  /**
   * 运行用户
   */
  User: string

  /**
   * 启动时间
   */
  StartTime: string

  /**
   * 启动参数
   */
  Param: string

  /**
   * 进程TTY
   */
  Teletype: string

  /**
   * 端口
   */
  Port: string

  /**
   * 所属用户组
   */
  GroupName: string

  /**
   * 进程MD5
   */
  Md5: string

  /**
   * 父进程ID
   */
  Ppid: string

  /**
   * 父进程名称
   */
  ParentProcessName: string

  /**
   * 端口协议
   */
  Proto: string

  /**
   * 绑定IP
   */
  BindIp: string

  /**
   * 主机名称
   */
  MachineName: string

  /**
      * 数据更新时间
注意：此字段可能返回 null，表示取不到有效值。
      */
  UpdateTime: string
}

/**
 * DescribeAssetWebLocationInfo请求参数结构体
 */
export interface DescribeAssetWebLocationInfoRequest {
  /**
   * 服务器Quuid
   */
  Quuid: string

  /**
   * 服务器Uuid
   */
  Uuid: string

  /**
   * 站点Id
   */
  Id: string
}

/**
 * DescribeAssetInitServiceList返回参数结构体
 */
export interface DescribeAssetInitServiceListResponse {
  /**
      * 列表
注意：此字段可能返回 null，表示取不到有效值。
      */
  Services: Array<AssetInitServiceBaseInfo>

  /**
   * 总数量
   */
  Total: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeAssetWebFrameList返回参数结构体
 */
export interface DescribeAssetWebFrameListResponse {
  /**
   * 记录总数
   */
  Total: number

  /**
      * 列表
注意：此字段可能返回 null，表示取不到有效值。
      */
  WebFrames: Array<AssetWebFrameBaseInfo>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeAssetUserList请求参数结构体
 */
export interface DescribeAssetUserListRequest {
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
<li>Name - String - 是否必填：否 - 账户名（模糊匹配）</li>
<li>NameStrict - String - 是否必填：否 - 账户名（严格匹配）</li>
<li>Uid - uint64 - 是否必填：否 - Uid</li>
<li>Guid - uint64 - 是否必填：否 - Guid</li>
<li>LoginTimeStart - String - 是否必填：否 - 开始时间，如：2021-01-11</li>
<li>LoginTimeEnd - String - 是否必填：否 - 结束时间，如：2021-01-11</li>
<li>LoginType - uint64 - 是否必填：否 - 0-不可登录；1-只允许key登录；2只允许密码登录；3-允许key和密码 仅linux</li>
<li>OsType - String - 是否必填：否 - windows或linux</li>
<li>Status - uint64 - 是否必填：否 - 账号状态：0-禁用；1-启用</li>
<li>UserType - uint64 - 是否必填：否 - 账号类型：0访客用户，1标准用户，2管理员用户 仅windows</li>
<li>IsDomain - uint64 - 是否必填：否 - 是否域账号：0 不是，1是 仅windows
<li>IsRoot - uint64 - 是否必填：否 - 是否Root权限：0 不是，1是 仅linux
<li>IsSudo - uint64 - 是否必填：否 - 是否Sudo权限：0 不是，1是 仅linux</li>
<li>IsSshLogin - uint64 - 是否必填：否 - 是否ssh登录：0 不是，1是 仅linux</li>
<li>ShellLoginStatus - uint64 - 是否必填：否 - 是否shell登录性，0不是；1是 仅linux</li>
<li>PasswordStatus - uint64 - 是否必填：否 - 密码状态：1正常 2即将过期 3已过期 4已锁定 仅linux</li>
<li>Os -String 是否必填: 否 - 操作系统( DescribeMachineOsList 接口 值 )</li>
      */
  Filters?: Array<Filter>

  /**
   * 排序方式，asc升序 或 desc降序
   */
  Order?: string

  /**
      * 可选排序：
LoginTime
PasswordChangeTime
PasswordDuaTime
PasswordLockDays
      */
  By?: string

  /**
   * 查询指定Quuid主机的信息
   */
  Quuid?: string
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
 * DescribeAssetSystemPackageList请求参数结构体
 */
export interface DescribeAssetSystemPackageListRequest {
  /**
   * 主机Uuid
   */
  Uuid: string

  /**
   * 主机Quuid
   */
  Quuid: string

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
<li>Name - String - 是否必填：否 - 包 名</li>
<li>StartTime - String - 是否必填：否 - 安装开始时间</li>
<li>EndTime - String - 是否必填：否 - 安装开始时间</li>
<li>Type - int - 是否必填：否 - 安装包类型：
1:rmp
2:dpkg
3:java
4:system</li>
      */
  Filters?: Array<Filter>

  /**
   * 排序方式，asc-升序 或 desc-降序。默认：desc-降序
   */
  Order?: string

  /**
   * 排序方式可选：InstallTime 安装时间
   */
  By?: string
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
 * DescribeAssetWebServiceInfoList请求参数结构体
 */
export interface DescribeAssetWebServiceInfoListRequest {
  /**
   * 需要返回的数量，默认为10，最大值为100
   */
  Limit?: number

  /**
      * 偏移量，默认为0。
<li>IpOrAlias - String - 是否必填：否 - 主机ip或别名筛选</li>
      */
  Offset?: number

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
<li>Os -String 是否必填: 否 - 操作系统( DescribeMachineOsList 接口 值 )</li>
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
