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
  TotalCount?: number
  /**
   * 模板列表
   */
  List?: Array<SearchTemplate>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyJavaMemShellPluginSwitch返回参数结构体
 */
export interface ModifyJavaMemShellPluginSwitchResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ExportReverseShellEvents返回参数结构体
 */
export interface ExportReverseShellEventsResponse {
  /**
   * 该参数已废弃
   */
  DownloadUrl?: string
  /**
   * 任务ID,需要到接口“异步导出任务”ExportTasks获取DownloadUrl下载地址
   */
  TaskId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeBaselineDetectOverview返回参数结构体
 */
export interface DescribeBaselineDetectOverviewResponse {
  /**
   * 检测服务器数
   */
  HostCount?: number
  /**
   * 检测项
   */
  ItemCount?: number
  /**
   * 检测策略项
   */
  PolicyCount?: number
  /**
   * 通过率*100%
   */
  PassRate?: number
  /**
   * 最近一次检测通过个数
   */
  LatestPassCount?: number
  /**
   * 最近一次检测未通过个数
   */
  LatestNotPassCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 节点关联的告警信息
 */
export interface AlarmInfo {
  /**
   * 该节点关联的告警，告警的table_name+id（t1:id1,t2:id2,...)
   */
  AlarmId?: string
  /**
   * 告警事件表状态，当该节点为告警点时生效
   */
  Status?: number
}

/**
 * DescribeLogHistogram请求参数结构体
 */
export interface DescribeLogHistogramRequest {
  /**
   * 要查询的日志的起始时间，Unix时间戳，单位ms
   */
  StartTime: number
  /**
   * 要查询的日志的结束时间，Unix时间戳，单位ms
   */
  EndTime: number
  /**
   * 查询语句
   */
  QueryString: string
  /**
   * 时间间隔: 单位ms
   */
  Interval: number
}

/**
 * ModifyWarningSetting返回参数结构体
 */
export interface ModifyWarningSettingResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeAssetWebServiceInfoList返回参数结构体
 */
export interface DescribeAssetWebServiceInfoListResponse {
  /**
   * 列表
   */
  WebServices?: Array<AssetWebServiceBaseInfo>
  /**
   * 总数量
   */
  Total?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyVulDefenceEventStatus请求参数结构体
 */
export interface ModifyVulDefenceEventStatusRequest {
  /**
   * 事件id
   */
  Ids: Array<number | bigint>
  /**
   * 0: 待处理  2:已处理 3: 已忽略 4: 已删除
   */
  Status: number
}

/**
 * DescribeAssetAppProcessList返回参数结构体
 */
export interface DescribeAssetAppProcessListResponse {
  /**
   * 进程列表
   */
  Process?: Array<AssetAppProcessInfo>
  /**
   * 分区总数
   */
  Total?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyWebHookPolicy请求参数结构体
 */
export interface ModifyWebHookPolicyRequest {
  /**
   * id
   */
  Id?: number
  /**
   * 策略名称
   */
  Name?: string
  /**
   * 事件类型
   */
  Events?: Array<WebHookEventKv>
  /**
   * 主机范围
   */
  HostLabels?: Array<WebHookHostLabel>
  /**
   * 接收人
   */
  Receivers?: Array<WebHookReceiver>
  /**
   * 格式 0text 1json
   */
  Format?: number
  /**
   * 自定义透传字段
   */
  CustomFields?: Array<WebHookCustomField>
  /**
   * 是否启用[1:禁用|0:启用]
   */
  IsDisabled?: number
  /**
   * 主机列表
   */
  Quuids?: Array<string>
  /**
   * 需排除的机器列表
   */
  ExcludedQuuids?: Array<string>
}

/**
 * DescribeBashPolicies请求参数结构体
 */
export interface DescribeBashPoliciesRequest {
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
<li>Name - String - 是否必填：否 - 规则名称</li>
<li>Rule - String - 是否必填：否 - 规则内容</li>
<li>Level - Int - 是否必填：否 - 威胁等级</li>
<li>White - Int - 是否必填：否 - 白名单类型</li>
<li>Category - Int - 是否必填：否 - 策略类型</li>
<li>BashAction - Int - 是否必填：否 - 操作动作</li>
<li>Enable - Int - 是否必填：否 - 生效状态</li>
<li>Id - Int - 是否必填：否 - 策略ID</li>
<li>PolicyId - Int - 是否必填：否 - 策略ID</li>
<li>RuleId - Int - 是否必填：否 - 策略ID</li>
   */
  Filters?: Array<Filter>
}

/**
 * DescribeLoginWhiteHostList请求参数结构体
 */
export interface DescribeLoginWhiteHostListRequest {
  /**
   * 白名单ID
   */
  Id: number
  /**
   * 需要返回的数量，最大值为1000
   */
  Limit: number
  /**
   * 偏移量，默认为0。
   */
  Offset: number
  /**
   * 过滤条件 <li>IpOrAlias - String - 是否必填：否 - 主机ip或别名筛选</li>
   */
  Filters?: Array<AssetFilters>
}

/**
 * 基线检测策略
 */
export interface BaselinePolicyDetect {
  /**
   * 策略Id
   */
  PolicyId?: number
  /**
   * 检测任务Id
   */
  TaskId?: number
  /**
   * 关联主机数
   */
  HostCount?: number
  /**
   * 开始时间
   */
  StartTime?: string
  /**
   * 结束时间
   */
  FinishTime?: string
  /**
   * 策略名称
   */
  PolicyName?: string
  /**
   * 成功主机数
   */
  SuccessCount?: number
  /**
   * 失败主技数
   */
  FailedCount?: number
  /**
   * 失败主机数
   */
  TimeoutCount?: number
  /**
   * 1:检测中 2:检测完成
   */
  PolicyDetectStatus?: number
}

/**
 * ExportRansomDefenseBackupList返回参数结构体
 */
export interface ExportRansomDefenseBackupListResponse {
  /**
   * 任务ID,需要到接口“异步导出任务”ExportTasks获取DownloadUrl下载地址
   */
  TaskId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * Ckafka主题名称
 */
export interface CKafkaTopicInfo {
  /**
   * 主题ID
   */
  TopicID?: string
  /**
   * 主题名称
   */
  TopicName?: string
}

/**
 * DeleteWebHookPolicy返回参数结构体
 */
export interface DeleteWebHookPolicyResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeAssetAppCount返回参数结构体
 */
export interface DescribeAssetAppCountResponse {
  /**
   * 各软件应用数量
   */
  Apps?: Array<AssetKeyVal>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeAttackTop返回参数结构体
 */
export interface DescribeAttackTopResponse {
  /**
   * top统计数据
   */
  NetAttackTopInfo?: NetAttackTopInfo
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyLicenseOrder请求参数结构体
 */
export interface ModifyLicenseOrderRequest {
  /**
   * 资源ID
   */
  ResourceId: string
  /**
   * 预期值,如果当前为10,扩容则输入原来大的值, 缩容则比原来小的值(缩容时不允许预期值比使用量小),如果保持不变则填写原值,
   */
  InquireNum?: number
  /**
   * 项目ID,不修改则输入原值.
   */
  ProjectId?: number
  /**
   * 资源别名,不修改则输入原值.
   */
  Alias?: string
}

/**
 * DescribeBaselineTop返回参数结构体
 */
export interface DescribeBaselineTopResponse {
  /**
   * 检测项Top列表
   */
  RuleTopList?: Array<BaselineRuleTopInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteBaselineStrategy返回参数结构体
 */
export interface DeleteBaselineStrategyResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyWebHookRule请求参数结构体
 */
export interface ModifyWebHookRuleRequest {
  /**
   * 规则内容
   */
  Data: WebHookRuleDetail
}

/**
 * 机器绑定授权信息
 */
export interface MachineLicenseDetail {
  /**
   * 主机quuid
   */
  Quuid?: string
  /**
   * 计费模式, 0 按量计费 , 1 预付费
   */
  PayMode?: number
  /**
   * 资源ID
   */
  ResourceId?: string
  /**
   * 授权类型
   */
  LicenseType?: number
  /**
   * 订单类型,0 默认计费订单 1 试用订单, 2 赠送 3 体验
   */
  SourceType?: number
  /**
   * 废弃字段,
   */
  InquireKey?: string
  /**
   * 自动续费标识 0 默认不自动付费, 1 自动付费 2 手动设置不续费
   */
  AutoRenewFlag?: number
  /**
   * 到期时间,按量付费该值为空
   */
  Deadline?: string
  /**
   * 购买时间
   */
  BuyTime?: string
  /**
   * 授权数量
   */
  LicenseCnt?: number
}

/**
 * DescribeBashEventsInfo请求参数结构体
 */
export interface DescribeBashEventsInfoRequest {
  /**
   * 事件id
   */
  Id: number
}

/**
 * ExportAssetDatabaseList请求参数结构体
 */
export interface ExportAssetDatabaseListRequest {
  /**
   * 过滤条件。
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
   */
  Filters?: Array<AssetFilters>
  /**
   * 查询指定Quuid主机的信息
   */
  Quuid?: string
  /**
   * 排序方式，asc升序 或 desc降序
   */
  Order?: string
  /**
   * 排序方式：[FirstTime]
   */
  By?: string
}

/**
 * 新增登录审计白名单实体
 */
export interface HostLoginWhiteObj {
  /**
   * 加白地域
   */
  Places: Array<Place>
  /**
   * 加白源IP，支持网段，多个IP以逗号隔开
   */
  SrcIp: string
  /**
   * 加白用户名，多个用户名以逗号隔开
   */
  UserName: string
  /**
   * 是否对全局生效, 1：全局有效 0: 仅针对单台主机'
   */
  IsGlobal: number
  /**
   * 白名单生效的机器信息列表
   */
  HostInfos: Array<HostInfo>
  /**
   * 备注
   */
  Remark?: string
  /**
   * 开始时间
   */
  StartTime?: string
  /**
   * 结束时间
   */
  EndTime?: string
}

/**
 * ClearLocalStorage返回参数结构体
 */
export interface ClearLocalStorageResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeUndoVulCounts返回参数结构体
 */
export interface DescribeUndoVulCountsResponse {
  /**
   * 未处理的漏洞数
   */
  UndoVulCount?: number
  /**
   * 未处理的主机数
   */
  UndoHostCount?: number
  /**
   * 普通版主机数
   */
  NotProfessionCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeBaselineScanSchedule返回参数结构体
 */
export interface DescribeBaselineScanScheduleResponse {
  /**
   * 检测进度(百分比)
   */
  Schedule?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
  Id?: number
  /**
   * 域名
   */
  Domain?: string
  /**
   * 备注
   */
  Mark?: string
  /**
   * 创建时间
   */
  CreateTime?: string
  /**
   * 更新时间
   */
  ModifyTime?: string
}

/**
 * DeleteBashEvents返回参数结构体
 */
export interface DeleteBashEventsResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
  TotalCount?: number
  /**
   * 合并后的白名单列表
   */
  LoginWhiteCombinedInfos?: Array<LoginWhiteCombinedInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeAssetProcessInfoList请求参数结构体
 */
export interface DescribeAssetProcessInfoListRequest {
  /**
   * 查询指定Quuid主机的信息
   */
  Quuid?: string
  /**
   * 过滤条件。
<li>IP - String - 是否必填：否 - 主机ip</li>
<li>MachineName - String - 是否必填：否 - 主机名称</li>
<li>InstanceID - string - 是否必填：否 - 实例ID</li>
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
   * 需要返回的数量，默认为10，最大值为100
   */
  Limit?: number
  /**
   * 偏移量，默认为0。
   */
  Offset?: number
  /**
   * 排序方式，asc升序 或 desc降序
   */
  Order?: string
  /**
   * 排序方式：[FirstTime|StartTime]
   */
  By?: string
}

/**
 * ModifyBaselineRule请求参数结构体
 */
export interface ModifyBaselineRuleRequest {
  /**
   * 无
   */
  Data: BaselineRule
  /**
   * 是否过滤全选
   */
  SelectAll?: number
  /**
   * <li>ItemName - string - 是否必填：否 - 项名称</li>
   */
  Filters?: Array<Filter>
  /**
   * 0:检测项，1:检测项分类
   */
  IdType?: number
  /**
   * 需要排除的检测项id
   */
  ExcludeIds?: Array<number | bigint>
  /**
   * 勾选的检测项分类
   */
  CategoryIds?: Array<number | bigint>
}

/**
 * SearchLog返回参数结构体
 */
export interface SearchLogResponse {
  /**
   * 匹配检索条件的原始日志的数量
   */
  Count?: number
  /**
   * 透传本次接口返回的Context值，可获取后续更多日志，过期时间1小时
   */
  Context?: string
  /**
   * 符合检索条件的日志是否已全部返回，如未全部返回可使用Context参数获取后续更多日志
   */
  ListOver?: boolean
  /**
   * 返回的是否为统计分析（即SQL）结果
   */
  Analysis?: boolean
  /**
   * 匹配检索条件的原始日志
   */
  Data?: Array<LogInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
 * 资产管理网卡信息
 */
export interface AssetNetworkCardInfo {
  /**
   * 网卡名称
   */
  Name?: string
  /**
   * Ipv4对应IP
   */
  Ip?: string
  /**
   * 网关
   */
  GateWay?: string
  /**
   * MAC地址
   */
  Mac?: string
  /**
   * Ipv6对应IP
   */
  Ipv6?: string
  /**
   * DNS服务器
   */
  DnsServer?: string
}

/**
 * DescribeAssetWebFrameList请求参数结构体
 */
export interface DescribeAssetWebFrameListRequest {
  /**
   * 查询指定Quuid主机的信息
   */
  Quuid?: string
  /**
   * 过滤条件。
<li>IP - String - 是否必填：否 - 主机ip</li>
<li>MachineName - String - 是否必填：否 - 主机名称</li>
<li>InstanceID - string - 是否必填：否 - 实例ID</li>
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
   * 偏移量，默认为0。
   */
  Offset?: number
  /**
   * 需要返回的数量，默认为10，最大值为100
   */
  Limit?: number
  /**
   * 排序方式，asc升序 或 desc降序
   */
  Order?: string
  /**
   * 可选排序：[FirstTime|JarCount]
   */
  By?: string
}

/**
 * DescribeMonthInspectionReport返回参数结构体
 */
export interface DescribeMonthInspectionReportResponse {
  /**
   * 总条数
   */
  TotalCount?: number
  /**
   * 巡检报告列表
   */
  List?: Array<MonthInspectionReport>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * SyncMachines返回参数结构体
 */
export interface SyncMachinesResponse {
  /**
   * 枚举值有(大写)：NOTASK（没有同步任务），SYNCING（同步中），FINISHED（同步完成）
   */
  State?: string
  /**
   * 最新开始同步时间
   */
  LatestStartTime?: string
  /**
   * 最新同步结束时间
   */
  LatestEndTime?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeBaselineHostTop返回参数结构体
 */
export interface DescribeBaselineHostTopResponse {
  /**
   * 主机基线策略事件Top
   */
  BaselineHostTopList?: Array<BaselineHostTopList>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 展示登录审计白名单时的主机信息实体
 */
export interface HostDesc {
  /**
   * 机器uuid
   */
  Quuid?: string
  /**
   * 主机安全uuid
   */
  Uuid?: string
  /**
   * 机器名
   */
  MachineName?: string
  /**
   * 机器IP:已销毁的服务器IP为空
   */
  MachineIp?: string
  /**
   * 公网IP:已销毁的服务器IP为空
   */
  MachineWanIp?: string
  /**
   * 标签信息数组
   */
  Tags?: Array<MachineTag>
}

/**
 * DeleteBashRules返回参数结构体
 */
export interface DeleteBashRulesResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDirectConnectInstallCommand返回参数结构体
 */
export interface DescribeDirectConnectInstallCommandResponse {
  /**
   * 安装命令的ip
   */
  Ip?: string
  /**
   * 安装命令的token
   */
  Token?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
  Malware?: SecurityEventInfo
  /**
   * 登录审计相关风险事件
   */
  HostLogin?: SecurityEventInfo
  /**
   * 密码破解相关风险事件
   */
  BruteAttack?: SecurityEventInfo
  /**
   * 恶意请求相关风险事件
   */
  RiskDns?: SecurityEventInfo
  /**
   * 高危命令相关风险事件
   */
  Bash?: SecurityEventInfo
  /**
   * 本地提权相关风险事件
   */
  PrivilegeRules?: SecurityEventInfo
  /**
   * 反弹Shell相关风险事件
   */
  ReverseShell?: SecurityEventInfo
  /**
   * 应用漏洞风险事件
   */
  SysVul?: SecurityEventInfo
  /**
   * Web应用漏洞相关风险事件
   */
  WebVul?: SecurityEventInfo
  /**
   * 应急漏洞相关风险事件
   */
  EmergencyVul?: SecurityEventInfo
  /**
   * 安全基线相关风险事件
   */
  BaseLine?: SecurityEventInfo
  /**
   * 攻击检测相关风险事件
   */
  AttackLogs?: SecurityEventInfo
  /**
   * 受影响机器数
   */
  EffectMachineCount?: number
  /**
   * 所有事件总数
   */
  EventsCount?: number
  /**
   * window 系统漏洞事件总数
   */
  WindowVul?: SecurityEventInfo
  /**
   * linux系统漏洞事件总数
   */
  LinuxVul?: SecurityEventInfo
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * RetryVulFix返回参数结构体
 */
export interface RetryVulFixResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ExportVulList返回参数结构体
 */
export interface ExportVulListResponse {
  /**
   * 导出的文件下载url（已弃用！）
   */
  DownloadUrl?: string
  /**
   * 导出文件Id 可通过ExportTasks接口下载
   */
  TaskId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 资产指纹中服务器列表的基本信息
 */
export interface AssetMachineBaseInfo {
  /**
   * 服务器Quuid
   */
  Quuid?: string
  /**
   * 服务器uuid
   */
  Uuid?: string
  /**
   * 服务器内网IP
   */
  MachineIp?: string
  /**
   * 服务器名称
   */
  MachineName?: string
  /**
   * 操作系统名称
   */
  OsInfo?: string
  /**
   * CPU信息
   */
  Cpu?: string
  /**
   * 内存容量：单位G
   */
  MemSize?: number
  /**
   * 内存使用率百分比
   */
  MemLoad?: string
  /**
   * 硬盘容量：单位G
   */
  DiskSize?: number
  /**
   * 硬盘使用率百分比
   */
  DiskLoad?: string
  /**
   * 分区数
   */
  PartitionCount?: number
  /**
   * 主机外网IP
   */
  MachineWanIp?: string
  /**
   * 业务组ID
   */
  ProjectId?: number
  /**
   * Cpu数量
   */
  CpuSize?: number
  /**
   * Cpu使用率百分比
   */
  CpuLoad?: string
  /**
   * 标签
   */
  Tag?: Array<MachineTag>
  /**
   * 数据更新时间
   */
  UpdateTime?: string
  /**
   * 是否新增[0:否|1:是]
   */
  IsNew?: number
  /**
   * 首次采集时间
   */
  FirstTime?: string
  /**
   * 附加信息
   */
  MachineExtraInfo?: MachineExtraInfo
  /**
   * cpu负载读数（仅linux系统有效）
   */
  CpuLoadNum?: string
}

/**
 * ExportRansomDefenseMachineList请求参数结构体
 */
export interface ExportRansomDefenseMachineListRequest {
  /**
   * 过滤条件。
<li>Ips - String - 是否必填：否 - 通过ip查询 </li>
<li>MachineNames - String - 是否必填：否 - 通过实例名查询 </li>
<li>Names - String - 是否必填：否 - 通过实例名查询 </li>
<li>Status - String - 是否必填：否 - 策略状态：0备份中，1备份成功，2备份失败 </li>
<li>LastBackupTimeBegin - String - 是否必填：否 - 最近一次备份时间开始</li>
<li>LastBackupTimeEnd - String - 是否必填：否 - 最近一次备份时间结束</li>
   */
  Filters?: Array<Filters>
  /**
   * 排序方法 ASC DESC
   */
  Order?: string
  /**
   * 排序字段支持CreateTime、MachineCount
   */
  By?: string
}

/**
 * DescribeHistoryService返回参数结构体
 */
export interface DescribeHistoryServiceResponse {
  /**
   * 1 可购买 2 只能升降配 3 只能跳到续费管理页
   */
  BuyStatus?: number
  /**
   * 用户已购容量 单位 G
   */
  InquireNum?: number
  /**
   * 到期时间
   */
  EndTime?: string
  /**
   * 是否自动续费,0 初始值, 1 开通 2 没开通
   */
  IsAutoOpenRenew?: number
  /**
   * 资源ID
   */
  ResourceId?: string
  /**
   * 0 没开通 1 正常 2隔离 3销毁
   */
  Status?: number
  /**
   * 开始时间
   */
  StartTime?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 基线影响主机信息
 */
export interface BaselineEffectHost {
  /**
   * 通过项
   */
  PassCount?: number
  /**
   * 风险项
   */
  FailCount?: number
  /**
   * 首次检测事件
   */
  FirstScanTime?: string
  /**
   * 最后检测时间
   */
  LastScanTime?: string
  /**
   * 风险项处理状态状态：0-未通过，1-通过
   */
  Status?: number
  /**
   * 主机Quuid
   */
  Quuid?: string
  /**
   * 主机IP
   */
  HostIp?: string
  /**
   * 主机别名
   */
  AliasName?: string
  /**
   * 主机Uuid
   */
  Uuid?: string
  /**
   * 检测中状态
   */
  MaxStatus?: number
}

/**
 * DescribeRiskProcessEvents请求参数结构体
 */
export interface DescribeRiskProcessEventsRequest {
  /**
   * 过滤条件。
<li>HostId - String - 是否必填：否 - 主机ID</li>
<li>IpOrName - String - 是否必填：否 - 主机IP或主机名</li>
<li>VirusName - String - 是否必填：否 - 病毒名</li>
<li>ProcessId - String - 是否必填：否 - 进程ID</li>
<li>FilePath - String - 是否必填：否 - 进程路径</li>
<li>BeginTime - String - 是否必填：否 - 进程启动时间-开始</li>
<li>EndTime - String - 是否必填：否 - 进程启动时间-结束</li>
<li>Status - String - 是否必填：否 - 状态筛选 0待处理；1查杀中；2已查杀；3已退出;4已信任</li>
   */
  Filters?: Array<Filter>
  /**
   * 需要返回的数量，默认为10，最大值为100
   */
  Limit?: number
  /**
   * 偏移量，默认为0。
   */
  Offset?: number
  /**
   * 排序方式 [ASC|DESC]
   */
  Order?: string
  /**
   * [StartTime:进程启动时间|DetectTime:最后检测时间]
   */
  By?: string
}

/**
 * DescribeAssetTypes返回参数结构体
 */
export interface DescribeAssetTypesResponse {
  /**
   * 资产指纹类型列表
   */
  Types?: Array<AssetType>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeScreenEmergentMsg请求参数结构体
 */
export type DescribeScreenEmergentMsgRequest = null

/**
 * ModifyWebPageProtectSetting返回参数结构体
 */
export interface ModifyWebPageProtectSettingResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteBaselineRuleIgnore返回参数结构体
 */
export interface DeleteBaselineRuleIgnoreResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyAutoOpenProVersionConfig返回参数结构体
 */
export interface ModifyAutoOpenProVersionConfigResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeVulInfoCvss返回参数结构体
 */
export interface DescribeVulInfoCvssResponse {
  /**
   * 漏洞id
   */
  VulId?: number
  /**
   * 漏洞名称
   */
  VulName?: string
  /**
   * 危害等级：1-低危；2-中危；3-高危；4-严重
   */
  VulLevel?: number
  /**
   * 漏洞分类 1: web-cms漏洞 2:应用漏洞  4: Linux软件漏洞 5: Windows系统漏洞
   */
  VulType?: number
  /**
   * 漏洞描述信息
   */
  Description?: string
  /**
   * 修复方案
   */
  RepairPlan?: string
  /**
   * 漏洞CVEID
   */
  CveId?: string
  /**
   * 参考链接
   */
  Reference?: string
  /**
   * CVSS信息
   */
  CVSS?: string
  /**
   * 发布时间
   */
  PublicDate?: string
  /**
   * Cvss分数
   */
  CvssScore?: number
  /**
   * cvss详情
   */
  CveInfo?: string
  /**
   * cvss 分数 浮点型
   */
  CvssScoreFloat?: number
  /**
   * 漏洞标签 多个逗号分割
   */
  Labels?: string
  /**
   * 已防御的攻击次数
   */
  DefenseAttackCount?: number
  /**
   * 全网修复成功次数, 不支持自动修复的漏洞默认返回0
   */
  SuccessFixCount?: number
  /**
   * 修复是否支持：0-windows/linux均不支持修复 ;1-windows/linux 均支持修复 ;2-仅linux支持修复;3-仅windows支持修复
   */
  FixSwitch?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
 * DescribeRaspMaxCpu请求参数结构体
 */
export type DescribeRaspMaxCpuRequest = null

/**
 * 木马列表集合
 */
export interface MalWareList {
  /**
   * 服务器ip
   */
  HostIp?: string
  /**
   * 唯一UUID
   */
  Uuid?: string
  /**
   * 路径
   */
  FilePath?: string
  /**
   * 病毒名称
   */
  VirusName?: string
  /**
   * 状态；4-:待处理，5-已信任，6-已隔离，8-文件已删除, 14:已处理，13-已加白
   */
  Status?: number
  /**
   * 唯一ID
   */
  Id?: number
  /**
   * 主机别名
   */
  Alias?: string
  /**
   * 特性标签，已废弃字段，不会再返回标签，详情中才会返回标签信息
   */
  Tags?: Array<string>
  /**
   * 首次运行时间
   */
  FileCreateTime?: string
  /**
   * 最近运行时间
   */
  FileModifierTime?: string
  /**
   * 创建时间
   */
  CreateTime?: string
  /**
   * 最近扫描时间
   */
  LatestScanTime?: string
  /**
   * 风险等级 0未知、1低、2中、3高、4严重
   */
  Level?: number
  /**
   * '木马检测平台用,分割 1云查杀引擎、2TAV、3binaryAi、4异常行为、5威胁情报
   */
  CheckPlatform?: string
  /**
   * 木马进程是否存在 0:不存在，1:存在
   */
  ProcessExists?: number
  /**
   * 木马文件是否存在 0:不存在，1:存在
   */
  FileExists?: number
  /**
   * cvm quuid
   */
  Quuid?: string
  /**
   * 木马样本md5
   */
  MD5?: string
  /**
   * 附加信息
   */
  MachineExtraInfo?: MachineExtraInfo
}

/**
 * 策略
 */
export interface WebHookPolicy {
  /**
   * id
   */
  Id?: number
  /**
   * 策略名称
   */
  Name?: string
  /**
   * 事件类型
   */
  Events?: Array<WebHookEventKv>
  /**
   * 主机范围
   */
  HostLabels?: Array<WebHookHostLabel>
  /**
   * 接收人
   */
  Receivers?: Array<WebHookReceiver>
  /**
   * 格式 0text 1json
   */
  Format?: number
  /**
   * 自定义透传字段
   */
  CustomFields?: Array<WebHookCustomField>
  /**
   * 是否启用[1:禁用|0:启用]
   */
  IsDisabled?: number
  /**
   * 主机列表
   */
  Quuids?: Array<string>
  /**
   * 主机数目
   */
  HostCount?: number
  /**
   * 需排除的机器列表
   */
  ExcludedQuuids?: Array<string>
}

/**
 * DescribeAssetUserInfo返回参数结构体
 */
export interface DescribeAssetUserInfoResponse {
  /**
   * 用户详细信息
   */
  User?: AssetUserDetail
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeRansomDefenseStrategyList请求参数结构体
 */
export interface DescribeRansomDefenseStrategyListRequest {
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
<li>Ips - String - 是否必填：否 - 通过ip查询 </li>
<li>MachineNames - String - 是否必填：否 - 通过实例名查询 </li>
<li>Names - String - 是否必填：否 - 通过防勒索策略名查询 </li>
<li>Dirs - String - 是否必填：否 - 诱饵目录 </li>
<li>Status - String - 是否必填：否 - 策略状态：0关闭，1开启 </li>
<li>BackupType - String - 是否必填：否 - 备份模式：0-按周;1-按天 </li>
   */
  Filters?: Array<Filters>
  /**
   * 排序方法 ASC DESC
   */
  Order?: string
  /**
   * 排序字段支持CreateTime, MachineCount
   */
  By?: string
}

/**
 * DescribeMachineClearHistory请求参数结构体
 */
export interface DescribeMachineClearHistoryRequest {
  /**
   * 筛选条件
多个条件筛选时 Keywords,TimeBetween,取交集
<li> Keywords 实例名称/内网/公网IP</li>
<li> TimeBetween 时间区间</li>
   */
  Filters?: Array<Filters>
  /**
   * 限制条数,默认10 ,最大100
   */
  Limit?: number
  /**
   * 偏移量,默认0
   */
  Offset?: number
  /**
   * 正序, ASC , 倒序 DESC , 默认ASC
   */
  Order?: string
  /**
   * AgentLastOfflineTime 客户端最后离线时间
AutoClearTime 清理时间
   */
  By?: string
}

/**
 * DescribeServersAndRiskAndFirstInfo返回参数结构体
 */
export interface DescribeServersAndRiskAndFirstInfoResponse {
  /**
   * 风险文件数
   */
  RiskFileCount?: number
  /**
   * 今日新增风险文件数
   */
  AddRiskFileCount?: number
  /**
   * 受影响服务器台数
   */
  ServersCount?: number
  /**
   * 是否试用：true-是，false-否
   */
  IsFirstCheck?: boolean
  /**
   * 木马最近检测时间
   */
  ScanTime?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyMalwareWhiteList请求参数结构体
 */
export interface ModifyMalwareWhiteListRequest {
  /**
   * 白名单模式； 0MD5白名单，1自定义
   */
  Mode: number
  /**
   * 规则唯一ID
   */
  Id: number
  /**
   * quuid 列表
   */
  QuuidList?: Array<string>
  /**
   * 是否全部主机； 0否，1是。
   */
  IsGlobal?: number
  /**
   * 匹配模式 ；0 精确匹配，1模糊匹配(废弃)
   */
  MatchType?: number
  /**
   * 文件名称(正则)；长度不超过200个
   */
  FileName?: Array<string>
  /**
   * 文件目录(正则)；长度不超过200个，内容base64转义
   */
  FileDirectory?: Array<string>
  /**
   * 文件后缀；长度不超过200个，内容base64转义（废弃）
   */
  FileExtension?: Array<string>
  /**
   * MD5列表
   */
  Md5List?: Array<string>
}

/**
 * DescribeRaspRuleVuls请求参数结构体
 */
export interface DescribeRaspRuleVulsRequest {
  /**
   * 过滤条件。Name=WhiteType的必选，0：表示自定义范围的漏洞列表，1：表示全部请求范围的列表
   */
  Filters: Array<Filter>
  /**
   * 返回数量，默认为10，最大值为1000。
   */
  Limit?: number
  /**
   * 偏移量，默认为0。
   */
  Offset?: number
}

/**
 * DescribeAssetJarList请求参数结构体
 */
export interface DescribeAssetJarListRequest {
  /**
   * 服务器Uuid
   */
  Uuid?: string
  /**
   * 服务器Quuid
   */
  Quuid?: string
  /**
   * 过滤条件。
<li>IP - String - 是否必填：否 - 主机ip</li>
<li>MachineName - String - 是否必填：否 - 主机名称</li>
<li>InstanceID - string - 是否必填：否 - 实例ID</li>
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
   * 偏移量，默认为0。
   */
  Offset?: number
  /**
   * 需要返回的数量，默认为10，最大值为100
   */
  Limit?: number
  /**
   * 排序方式，asc升序 或 desc降序
   */
  Order?: string
  /**
   * 排序方式：[FirstTime]
   */
  By?: string
}

/**
 * DescribeJavaMemShellPluginInfo请求参数结构体
 */
export interface DescribeJavaMemShellPluginInfoRequest {
  /**
   * 主机quuid
   */
  Quuid: string
  /**
   * 过滤条件：Pid精确匹配，MainClass模糊匹配
   */
  Filters?: Array<Filters>
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
 * DescribeMachineFileTamperRules请求参数结构体
 */
export interface DescribeMachineFileTamperRulesRequest {
  /**
   * 主机uuid
   */
  Uuid: string
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
 * ExportVulDefenceEvent返回参数结构体
 */
export interface ExportVulDefenceEventResponse {
  /**
   * 导出文件Id 可通过ExportTasks接口下载
   */
  TaskId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * SetLocalStorageItem请求参数结构体
 */
export interface SetLocalStorageItemRequest {
  /**
   * 键
   */
  Key: string
  /**
   * 值
   */
  Value: string
  /**
   * 失效时间（单位；秒）
   */
  Expire?: number
}

/**
 * ExportRansomDefenseMachineList返回参数结构体
 */
export interface ExportRansomDefenseMachineListResponse {
  /**
   * 任务ID,需要到接口“异步导出任务”ExportTasks获取DownloadUrl下载地址
   */
  TaskId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 漏洞防御范围详情
 */
export interface VulDefenceRangeDetail {
  /**
   * 漏洞名称
   */
  VulName?: string
  /**
   * 标签
   */
  Label?: string
  /**
   * 漏洞级别：  1低危 2中危 3高危 4严重
   */
  Level?: number
  /**
   * cvss 分数
   */
  CvssScore?: number
  /**
   * cve id
   */
  CveId?: string
  /**
   * 发布时间
   */
  PublishTime?: string
  /**
   * 漏洞id
   */
  VulId?: number
  /**
   * 状态，0:防御中，1：已加白，指的是在白名单列表中有这个漏洞的，不一定是全局型白名单
   */
  Status?: number
}

/**
 * DescribeFileTamperRuleCount请求参数结构体
 */
export interface DescribeFileTamperRuleCountRequest {
  /**
   * 查询的主机uuids 一次性最多只能查100个
   */
  Uuids: Array<string>
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
 * DescribeDefenceEventDetail请求参数结构体
 */
export interface DescribeDefenceEventDetailRequest {
  /**
   * 漏洞事件id
   */
  Id: number
}

/**
 * DescribeMachineGeneral返回参数结构体
 */
export interface DescribeMachineGeneralResponse {
  /**
   * 资产总数
   */
  MachineCnt?: number
  /**
   * 腾讯云服务商机器数
   * @deprecated
   */
  TencentCloudMachineCnt?: number
  /**
   * 阿里云服务商机器数
   * @deprecated
   */
  AliCloudMachineCnt?: number
  /**
   * 百度云服务商机器数
   * @deprecated
   */
  BaiduCloudMachineCnt?: number
  /**
   * IDC机器数
   * @deprecated
   */
  IDCMachineCnt?: number
  /**
   * 其他云服务商机器数
   * @deprecated
   */
  OtherCloudMachineCnt?: number
  /**
   * 已防护机器数
   */
  ProtectMachineCnt?: number
  /**
   * 已防护基础版机器数
   */
  BaseMachineCnt?: number
  /**
   * 已防护专业版机器数
   */
  SpecialtyMachineCnt?: number
  /**
   * 已防护旗舰版机器数
   */
  FlagshipMachineCnt?: number
  /**
   * 存在风险的机器数
   */
  RiskMachineCnt?: number
  /**
   * 比较昨日风险机器数
   */
  CompareYesterdayRiskMachineCnt?: number
  /**
   * 比较昨日未防护机器数
   */
  CompareYesterdayNotProtectMachineCnt?: number
  /**
   * 比较昨日即将到期的机器数
   */
  CompareYesterdayDeadlineMachineCnt?: number
  /**
   * 即将到期的机器数
   */
  DeadlineMachineCnt?: number
  /**
   * 未防护机器数
   */
  NotProtectMachineCnt?: number
  /**
   * 已防护普惠版机器数（Lighthouse机器）
   */
  LHGeneralDiscountCnt?: number
  /**
   * 比较昨日新增的主机数
   */
  CompareYesterdayMachineCnt?: number
  /**
   * 自动清理时间,最大720小时,最小0, 默认0 ,0=关闭
   */
  MachineDestroyAfterOfflineHours?: number
  /**
   * 云服务器类型数组
   */
  CloudFrom?: Array<CloudFromCnt>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeMachineClearHistory返回参数结构体
 */
export interface DescribeMachineClearHistoryResponse {
  /**
   * 总条数
   */
  TotalCount?: number
  /**
   * 列表数据
   */
  List?: Array<MachineClearHistory>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeProVersionInfo请求参数结构体
 */
export type DescribeProVersionInfoRequest = null

/**
 * RemoveMachine返回参数结构体
 */
export interface RemoveMachineResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeVulCountByDates请求参数结构体
 */
export interface DescribeVulCountByDatesRequest {
  /**
   * 需要查询最近几天的数据，需要都 -1后传入
   */
  LastDays?: Array<number | bigint>
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
 * EditReverseShellRules请求参数结构体
 */
export interface EditReverseShellRulesRequest {
  /**
   * 规则ID(新增时请留空)
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
   * 目标IP
   */
  DestIp?: string
  /**
   * 目标端口
   */
  DestPort?: string
  /**
   * 进程名
   */
  ProcessName?: string
  /**
   * 是否全局规则(默认否)
   */
  IsGlobal?: number
  /**
   * 事件列表和详情点击加白时关联的事件id (新增规则时请留空)
   */
  EventId?: number
}

/**
 * DescribeAssetWebServiceCount请求参数结构体
 */
export interface DescribeAssetWebServiceCountRequest {
  /**
   * 搜索条件：返回名称包含Name的所有Web服务列表
   */
  Name?: string
}

/**
 * 安全播报列表
 */
export interface Broadcasts {
  /**
   * 文章名字
   */
  Title?: string
  /**
   * 类型：0=紧急通知，1=功能更新，2=行业荣誉，3=版本发布
   */
  Type?: number
  /**
   * 副标题
   */
  Subtitle?: string
  /**
   * 发布时间
   */
  CreateTime?: string
  /**
   * 文章唯一id
   */
  Id?: number
  /**
   * 危险程度  0：无， 1：严重， 2: 高危， 3:中危， 4: 低危
   */
  Level?: number
}

/**
 * CreateLicenseOrder返回参数结构体
 */
export interface CreateLicenseOrderResponse {
  /**
   * 订单号列表
   */
  DealNames?: Array<string>
  /**
   * 资源ID列表,预付费订单该字段空值
   */
  ResourceIds?: Array<string>
  /**
   * 大订单号 , 后付费该字段空值
   */
  BigDealId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeWebPageGeneralize返回参数结构体
 */
export interface DescribeWebPageGeneralizeResponse {
  /**
   * 防护监测 0 未开启 1 已开启 2 异常
   */
  ProtectMonitor?: number
  /**
   * 防护目录数
   */
  ProtectDirNum?: number
  /**
   * 防护文件数
   */
  ProtectFileNum?: number
  /**
   * 篡改文件数
   */
  TamperFileNum?: number
  /**
   * 篡改数
   */
  TamperNum?: number
  /**
   * 今日防护数
   */
  ProtectToday?: number
  /**
   * 防护主机数
   */
  ProtectHostNum?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeAssetWebLocationPathList请求参数结构体
 */
export interface DescribeAssetWebLocationPathListRequest {
  /**
   * 服务器Quuid
   */
  Quuid: string
  /**
   * 服务器Uuid
   */
  Uuid: string
  /**
   * Web站点Id
   */
  Id: string
  /**
   * 返回列表数量，最多100，默认10
   */
  Limit: number
  /**
   * 偏移量，默认为0
   */
  Offset: number
}

/**
 * 安全播报文章详情
 */
export interface BroadcastInfo {
  /**
   * 文章名字
   */
  Title?: string
  /**
   * 跳转位置：0=不跳转，1=文件查杀，2=漏洞扫描，3=安全基线
   */
  GotoType?: number
  /**
   * 副标题
   */
  Subtitle?: string
  /**
   * 发布时间
   */
  CreateTime?: string
  /**
   * 富文本内容信息
   */
  Content?: string
  /**
   * 文章唯一Id
   */
  Id?: number
  /**
   * 类型：0=紧急通知，1=功能更新，2=行业荣誉，3=版本发布
   */
  Type?: number
}

/**
 * DeleteLoginWhiteList请求参数结构体
 */
export interface DeleteLoginWhiteListRequest {
  /**
   * 白名单ID (最大 100 条)
   */
  Ids: Array<number | bigint>
}

/**
 * DeleteRiskDnsEvent请求参数结构体
 */
export interface DeleteRiskDnsEventRequest {
  /**
   * 恶意请求记录ID数组，(最大100条), 为空时全部删除
   */
  Ids?: Array<number | bigint>
}

/**
 * 本地提权数据
 */
export interface PrivilegeEventInfo {
  /**
   * 数据ID
   */
  Id?: number
  /**
   * 主机安全uuid
   */
  Uuid?: string
  /**
   * 主机uuid
   */
  Quuid?: string
  /**
   * 主机内网IP
   */
  HostIp?: string
  /**
   * 进程名
   */
  ProcessName?: string
  /**
   * 进程路径
   */
  FullPath?: string
  /**
   * 执行命令
   */
  CmdLine?: string
  /**
   * 用户名
   */
  UserName?: string
  /**
   * 用户组
   */
  UserGroup?: string
  /**
   * 进程文件权限
   */
  ProcFilePrivilege?: string
  /**
   * 父进程名
   */
  ParentProcName?: string
  /**
   * 父进程用户名
   */
  ParentProcUser?: string
  /**
   * 父进程用户组
   */
  ParentProcGroup?: string
  /**
   * 父进程路径
   */
  ParentProcPath?: string
  /**
   * 进程树 json  pid:进程id，exe:文件路径 ，account:进程所属用组和用户 ,cmdline:执行命令，ssh_service: SSH服务ip, ssh_soure:登录源
   */
  PsTree?: string
  /**
   * 处理状态：0-待处理 2-白名单 3-已处理 4-已忽略
   */
  Status?: number
  /**
   * 发生时间
   */
  CreateTime?: string
  /**
   * 机器名
   */
  MachineName?: string
  /**
   * 建议方案
   */
  SuggestScheme?: string
  /**
   * 危害描述信息
   */
  HarmDescribe?: string
  /**
   * 标签
   */
  Tags?: Array<string>
  /**
   * 参考链接
   */
  References?: Array<string>
  /**
   * 主机外网ip
   */
  MachineWanIp?: string
  /**
   * 权限列表|隔开
   */
  NewCaps?: string
  /**
   * 主机在线状态 OFFLINE  ONLINE
   */
  MachineStatus?: string
  /**
   * 处理时间
   */
  ModifyTime?: string
}

/**
 * 索引规则
 */
export interface RuleInfo {
  /**
   * 全文索引的相关配置
   */
  FullText?: FullTextInfo
  /**
   * 键值索引的相关配置
   */
  KeyValue?: KeyValueInfo
  /**
   * 元字段索引配置
   */
  Tag?: KeyValueInfo
}

/**
 * RansomDefenseRollback返回参数结构体
 */
export interface RansomDefenseRollbackResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ExportAssetSystemPackageList请求参数结构体
 */
export interface ExportAssetSystemPackageListRequest {
  /**
   * 主机Uuid
   */
  Uuid?: string
  /**
   * 主机Quuid
   */
  Quuid?: string
  /**
   * 过滤条件。
<li>Name - String - 是否必填：否 - 包 名</li>
<li>StartTime - String - 是否必填：否 - 安装开始时间</li>
<li>EndTime - String - 是否必填：否 - 安装开始时间</li>
<li>Type - int - 是否必填：否 - 安装包类型：
1:rpm
2:dpkg
3:java
4:system</li>
   */
  Filters?: Array<Filter>
  /**
   * 排序方式，asc升序 或 desc降序
   */
  Order?: string
  /**
   * 排序方式可选：[FistTime|InstallTime:安装时间]
   */
  By?: string
}

/**
 * DescribePrivilegeEvents返回参数结构体
 */
export interface DescribePrivilegeEventsResponse {
  /**
   * 数据列表
   */
  List?: Array<PrivilegeEscalationProcess>
  /**
   * 总条数
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeRaspRuleVuls返回参数结构体
 */
export interface DescribeRaspRuleVulsResponse {
  /**
   * 列表内容
   */
  List?: Array<RaspRuleVul>
  /**
   * 总条数
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeNetAttackWhiteList请求参数结构体
 */
export interface DescribeNetAttackWhiteListRequest {
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
<li>IP - String - 是否必填：否 - 主机ip查询 </li>
<li>SrcIP- String - 是否必填：否 - 白名单ip查询 </li>
   */
  Filters?: Array<Filter>
  /**
   * 排序方式: [ASC:升序|DESC:降序]
   */
  Order?: string
  /**
   * 可选排序列: [CreateTime]
   */
  By?: string
}

/**
 * DescribeOverviewStatistics返回参数结构体
 */
export interface DescribeOverviewStatisticsResponse {
  /**
   * 服务器在线数。
   */
  OnlineMachineNum?: number
  /**
   * 专业服务器数。
   */
  ProVersionMachineNum?: number
  /**
   * 木马文件数。
   */
  MalwareNum?: number
  /**
   * 异地登录数。
   */
  NonlocalLoginNum?: number
  /**
   * 暴力破解成功数。
   */
  BruteAttackSuccessNum?: number
  /**
   * 漏洞数。
   */
  VulNum?: number
  /**
   * 安全基线数。
   */
  BaseLineNum?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
   * 1 清理, 0 不清理
<li>本操作会修复被篡改的系统命令，计划任务等系统文件，操作中请确保yum/apt 可用</li>
   */
  DoClean?: number
  /**
   * 1标准模式（只报严重、高危）、2增强模式（报严重、高危、中危）、3严格模式（报严重、高、中、低、提示）
   */
  EngineType?: number
  /**
   * 启发引擎开关 0 关闭 1开启
   */
  EnableInspiredEngine?: number
  /**
   * 是否开启恶意进程查杀[0:未开启,1:开启]
   */
  EnableMemShellScan?: number
  /**
   * 防护模式 0 标准 1重保
   */
  ProtectMode?: number
  /**
   * 查杀范围 0 脚本类之外的恶意文件，1全部恶意文件
   */
  ProtectFileScope?: number
}

/**
 * DescribeAssetTotalCount请求参数结构体
 */
export type DescribeAssetTotalCountRequest = null

/**
 * DescribeWebHookRules返回参数结构体
 */
export interface DescribeWebHookRulesResponse {
  /**
   * 总数
   */
  TotalCount?: number
  /**
   * 规则内容
   */
  List?: Array<WebHookRuleSummary>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
  VulId?: number
  /**
   * 漏洞级别
   */
  Level?: number
  /**
   * 漏洞名称
   */
  Name?: string
  /**
   * cve编号
   */
  CveId?: string
  /**
   * 1: web-cms漏洞 2:应用漏洞  4: Linux软件漏洞 5: Windows系统漏洞 0= 应急漏洞
   */
  VulCategory?: number
  /**
   * 漏洞描述
   */
  Descript?: string
  /**
   * 修复建议
   */
  Fix?: string
  /**
   * 参考链接
   */
  Reference?: string
  /**
   * CVSS评分
   */
  CvssScore?: number
  /**
   * CVSS详情
   */
  Cvss?: string
  /**
   * 发布时间
   */
  PublishTime?: string
}

/**
 * 漏洞等级数量实体
 */
export interface VulLevelCountInfo {
  /**
   * 漏洞等级
   */
  VulLevel?: number
  /**
   * 漏洞数量
   */
  VulCount?: number
}

/**
 * DescribeRaspRules请求参数结构体
 */
export interface DescribeRaspRulesRequest {
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
  /**
   * 排序字段，目前有：CreateTime、ModifyTime，默认按照ModifyTime排序
   */
  By?: string
  /**
   * 排序升序还是倒序，DESC有ASC、
   */
  Order?: string
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
 * DescribeDirectConnectInstallCommand请求参数结构体
 */
export interface DescribeDirectConnectInstallCommandRequest {
  /**
   * 地域标示
   */
  RegionCode: string
  /**
   * Vpc的ID
   */
  VpcId: string
  /**
   * 命令过期时间
   */
  ExpireDate: string
}

/**
 * DescribeBaselineDetectList返回参数结构体
 */
export interface DescribeBaselineDetectListResponse {
  /**
   * 无
   */
  List?: Array<BaselinePolicyDetect>
  /**
   * 总数
   */
  Total?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeNetAttackSetting返回参数结构体
 */
export interface DescribeNetAttackSettingResponse {
  /**
   * 0 关闭网络攻击检测，1开启网络攻击检测
   */
  NetAttackEnable?: number
  /**
   * 0 新增告警事件默认待处理，1新增告警事件默认已处理，3新增告警事件默认忽略
   */
  NetAttackAlarmStatus?: number
  /**
   * 1 全部旗舰版主机，0 InstanceIds列表主机
   */
  Scope?: number
  /**
   * 自选主机
   */
  InstanceIds?: Array<string>
  /**
   * 自选排除主机
   */
  ExcludeInstanceIds?: Array<string>
  /**
   * 新增资产自动包含 0 不包含 1包含
   */
  AutoInclude?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 反弹Shell规则
 */
export interface ReverseShellRule {
  /**
   * 规则ID
   */
  Id?: number
  /**
   * 客户端ID
   */
  Uuid?: string
  /**
   * 进程名称
   */
  ProcessName?: string
  /**
   * 目标IP
   */
  DestIp?: string
  /**
   * 目标端口
   */
  DestPort?: string
  /**
   * 操作人
   */
  Operator?: string
  /**
   * 是否全局规则
   */
  IsGlobal?: number
  /**
   * 状态 (0: 有效 1: 无效)
   */
  Status?: number
  /**
   * 创建时间
   */
  CreateTime?: string
  /**
   * 修改时间
   */
  ModifyTime?: string
  /**
   * 主机IP
   */
  Hostip?: string
}

/**
 * DescribeAESKey返回参数结构体
 */
export interface DescribeAESKeyResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeBashRules返回参数结构体
 */
export interface DescribeBashRulesResponse {
  /**
   * 列表内容
   */
  List?: Array<BashRule>
  /**
   * 总条数
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
  ExpertService?: Array<ExpertServiceOrderInfo>
  /**
   * 应急响应可用次数
   */
  EmergencyResponse?: number
  /**
   * 旗舰护网可用次数
   */
  ProtectNet?: number
  /**
   * 是否购买过安全管家
   */
  ExpertServiceBuy?: boolean
  /**
   * 是否购买过应急响应
   */
  EmergencyResponseBuy?: boolean
  /**
   * 是否购买过旗舰护网
   */
  ProtectNetBuy?: boolean
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeLogStorageConfig请求参数结构体
 */
export type DescribeLogStorageConfigRequest = null

/**
 * ExportAssetWebLocationList返回参数结构体
 */
export interface ExportAssetWebLocationListResponse {
  /**
   * 异步下载任务ID，需要配合ExportTasks接口使用
   */
  TaskId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 大屏可视化安全播报内容
 */
export interface ScreenBroadcasts {
  /**
   * 播报文章标题
   */
  Title?: string
  /**
   * 播报文章危险程度  0：无， 1：严重， 2: 高危， 3:中危， 4: 低危
   */
  Level?: number
  /**
   * 发布时间
   */
  Time?: string
  /**
   * 文章ID
   */
  Id?: number
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
  RuleIdList?: Array<number | bigint>
  /**
   * 事件id数组
   */
  EventIdList?: Array<number | bigint>
}

/**
 * 资产指纹类型描述
 */
export interface AssetType {
  /**
   * 类型ID
   */
  Id?: number
  /**
   * 类型名称
   */
  Name?: string
}

/**
 * ModifyWebHookReceiver返回参数结构体
 */
export interface ModifyWebHookReceiverResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 端口统计列表
 */
export interface OpenPortStatistics {
  /**
   * 端口号
   */
  Port?: number
  /**
   * 主机数量
   */
  MachineNum?: number
}

/**
 * DescribeRansomDefenseMachineList请求参数结构体
 */
export interface DescribeRansomDefenseMachineListRequest {
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
<li>Ips - String - 是否必填：否 - 通过ip查询 </li>
<li>MachineNames - String - 是否必填：否 - 通过实例名查询 </li>
<li>Names - String - 是否必填：否 - 通过策略名查询 </li>
<li>Status - String - 是否必填：否 - 策略状态：0备份中，1备份成功，2备份失败, 9暂无备份 </li>
<li>LastBackupStatus - String - 是否必填：否 - 上次备份状态：0备份中，1备份成功，2备份失败, 9暂无备份 </li>
<li>LastBackupTimeBegin - String - 是否必填：否 - 最近一次备份时间开始</li>
<li>LastBackupTimeEnd - String - 是否必填：否 - 最近一次备份时间结束</li>
   */
  Filters?: Array<Filters>
  /**
   * 排序方法 ASC DESC
   */
  Order?: string
  /**
   * 排序字段支持CreateTime、LastBackupTime、BackupCount
   */
  By?: string
}

/**
 * ExportAssetCoreModuleList请求参数结构体
 */
export interface ExportAssetCoreModuleListRequest {
  /**
   * 服务器Uuid
   */
  Uuid?: string
  /**
   * 服务器Quuid
   */
  Quuid?: string
  /**
   * 过滤条件。
<li>Name- string - 是否必填：否 - 包名</li>
<li>User- string - 是否必填：否 - 用户名</li>
   */
  Filters?: Array<AssetFilters>
  /**
   * 排序方式，asc升序 或 desc降序
   */
  Order?: string
  /**
   * 排序依据[FirstTime|Size|ProcessCount|ModuleCount]
   */
  By?: string
}

/**
 * ExportAssetMachineDetail返回参数结构体
 */
export interface ExportAssetMachineDetailResponse {
  /**
   * 下载地址
   */
  DownloadUrl?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
  Id?: string
  /**
   * 服务器名称
   */
  HostName?: string
  /**
   * 服务器IP
   */
  HostIp?: string
  /**
   * 服务器系统
   */
  MachineOs?: string
  /**
   * 关联目录数
   */
  RelateDirNum?: number
  /**
   * 防护状态
   */
  ProtectStatus?: number
  /**
   * 防护开关
   */
  ProtectSwitch?: number
  /**
   * 自动恢复开关
   */
  AutoRestoreSwitchStatus?: number
  /**
   * 服务器唯一ID
   */
  Quuid?: string
  /**
   * 是否已经授权
   */
  Authorization?: boolean
  /**
   * 异常状态
   */
  Exception?: number
  /**
   * 过渡进度
   */
  Progress?: number
  /**
   * 异常信息
   */
  ExceptionMessage?: string
  /**
   * 主机额外信息
   */
  MachineExtraInfo?: MachineExtraInfo
}

/**
 * ModifyNetAttackWhiteList返回参数结构体
 */
export interface ModifyNetAttackWhiteListResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 策略规则表达式
 */
export interface PolicyRules {
  /**
   * 进程
   */
  Process?: CommandLine
  /**
   * 父进程
   */
  PProcess?: CommandLine
  /**
   * 祖先进程
   */
  AProcess?: CommandLine
}

/**
 * DescribeMachineRegions请求参数结构体
 */
export type DescribeMachineRegionsRequest = null

/**
 * ExportWebPageEventList返回参数结构体
 */
export interface ExportWebPageEventListResponse {
  /**
   * 任务id 可通过 ExportTasks接口下载
   */
  TaskId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyMachineAutoClearConfig请求参数结构体
 */
export interface ModifyMachineAutoClearConfigRequest {
  /**
   * 清理规则时间, 0 表示关闭, 单位为天, 最大为 30天
   */
  ClearRule: number
}

/**
 * ModifyEventAttackStatus请求参数结构体
 */
export interface ModifyEventAttackStatusRequest {
  /**
   * 需要修改的事件id 数组，支持批量
   */
  Ids?: Array<number | bigint>
  /**
   * 是否更新全部，即是否对所有的事件进行操作，当ids 不为空时，此参数无效
   */
  All?: boolean
  /**
   * 0：待处理 1：已处理 3： 已忽略 4：已删除
   */
  Status?: number
  /**
   * 过滤条件。
<li>Type - String 攻击状态 0: 尝试攻击 1: 攻击成功 - 是否必填: 否</li>
<li>Status - String 事件处理状态 0：待处理 1：已处理 2： 已加白 3： 已忽略 4：已删除  - 是否必填: 否</li>
<li>SrcIP - String 来源IP - 是否必填: 否</li>
<li>DstPort - String 攻击目标端口 - 是否必填: 否</li>
<li>MachineName - String 主机名称 - 是否必填: 否</li>
<li>InstanceID - String 主机实例ID - 是否必填: 否</li>
<li>Quuids - String 主机cvm uuid - 是否必填: 否</li>

   */
  Filters?: Array<Filters>
  /**
   * 排除的id
   */
  ExcludeId?: Array<number | bigint>
}

/**
 * DeleteRaspRules返回参数结构体
 */
export interface DeleteRaspRulesResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeVulLevelCount返回参数结构体
 */
export interface DescribeVulLevelCountResponse {
  /**
   * 统计结果
   */
  VulLevelList?: Array<VulLevelInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 核心文件监控规则列表
 */
export interface FileTamperRuleInfo {
  /**
   * 规则名称
   */
  Name?: string
  /**
   * 规则类型 0 ：系统规则  1：用户规则
   */
  RuleCategory?: number
  /**
   * 影响主机数
   */
  HostCount?: number
  /**
   * 更新时间
   */
  ModifyTime?: string
  /**
   * 创建时间
   */
  CreateTime?: string
  /**
   * 状态 0: 启用 1: 已关闭
   */
  Status?: number
  /**
   * 规则id，系统的规则时为0。
   */
  Id?: number
  /**
   * 是否是全局的 0：否 ，1：是
   */
  IsGlobal?: number
  /**
   * 风险等级 0：无， 1: 高危， 2:中危， 3: 低危
   */
  Level?: number
  /**
   * 子规则写条目数
   */
  WriteRuleCount?: number
  /**
   * 子规则读条目数
   */
  ReadRuleCount?: number
  /**
   * 子规则读写条目数
   */
  ReadWriteRuleCount?: number
  /**
   * 监控行为
<li>read 读取文件</li>
<li>write 修改文件</li>
<li>read-write 读取修改文件</li>
   */
  FileAction?: string
  /**
   * 加白处理类型
<li>cur 仅对当前加白</li>
<li>all 所有符合条件加白</li>
   */
  AddWhiteType?: string
}

/**
 * DescribeVersionStatistics返回参数结构体
 */
export interface DescribeVersionStatisticsResponse {
  /**
   * 基础版数量
   */
  BasicVersionNum?: number
  /**
   * 专业版数量
   */
  ProVersionNum?: number
  /**
   * 旗舰版数量
   */
  UltimateVersionNum?: number
  /**
   * 普惠版数量
   */
  GeneralVersionNum?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeAvailableExpertServiceDetail请求参数结构体
 */
export type DescribeAvailableExpertServiceDetailRequest = null

/**
 * DescribeMachineFileTamperRules返回参数结构体
 */
export interface DescribeMachineFileTamperRulesResponse {
  /**
   * 总数
   */
  TotalCount?: number
  /**
   * 查询主机相关核心文件监控规则详情
   */
  List?: Array<MachineFileTamperRule>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
  HostName?: string
  /**
   * 服务器IP
   */
  HostIp?: string
  /**
   * 防护目录数量
   */
  ProtectDirNum?: number
  /**
   * 防护文件数量
   */
  ProtectFileNum?: number
  /**
   * 防篡改数量
   */
  ProtectTamperNum?: number
  /**
   * 防护软链数量
   */
  ProtectLinkNum?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteLogExport请求参数结构体
 */
export interface DeleteLogExportRequest {
  /**
   * 日志导出ID
   */
  ExportId: string
}

/**
 * DescribeUsualLoginPlaces返回参数结构体
 */
export interface DescribeUsualLoginPlacesResponse {
  /**
   * 常用登录地数组
   */
  UsualLoginPlaces?: Array<UsualPlace>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeAttackEvents请求参数结构体
 */
export interface DescribeAttackEventsRequest {
  /**
   * 返回数量，最大值为100。
   */
  Limit?: number
  /**
   * 偏移量，默认为0。
   */
  Offset?: number
  /**
   *  过滤条件。
<li>Type - String 攻击状态 0: 尝试攻击 1: 攻击成功 - 是否必填: 否</li>
<li>Status - String 事件处理状态 0：待处理 1：已处理 2： 已加白 3： 已忽略 4：已删除  - 是否必填: 否</li>
<li>SrcIP - String 来源IP - 是否必填: 否</li>
<li>Uuids - String 主机安全uuid - 是否必填: 否</li>
<li>Quuids - String cvm uuid - 是否必填: 否</li>
<li>DstPort - String 攻击目标端口 - 是否必填: 否</li>
<li>MachineName - String 主机名称 - 是否必填: 否</li>
<li>InstanceID - String 主机实例ID - 是否必填: 否</li>
<li>AttackTimeBegin - String 攻击开始时间 - 是否必填: 否</li>
<li>AttackTimeEnd - String 攻击结束时间 - 是否必填: 否</li>
<li>VulSupportDefense - String 漏洞是否支持防御 0不支持，1支持 - 是否必填: 否</li>

   */
  Filters?: Array<Filter>
  /**
   * 排序
   */
  By?: string
  /**
   * 排序方式 ASC,DESC
   */
  Order?: string
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
   * 排序字段：AccessCount-请求次数。MergeTime-最近请求时间
   */
  By?: string
}

/**
 * CreateWhiteListOrder请求参数结构体
 */
export interface CreateWhiteListOrderRequest {
  /**
   * 授权类型
   */
  LicenseType: number
  /**
   * 授权数量,最小为1 最大99999
   */
  LicenseNum: number
  /**
   * 到期时间,最小为1
   */
  Deadline: number
  /**
   * 规则名称,大资产中心:asset_center
   */
  RuleName: string
  /**
   * 订单类型, 1 试用 2 赠送 3 体验 4 SSL-证书赠送 5 cvm赠送
   */
  SourceType?: number
  /**
   * 地域, 1 广州 9新加坡, 默认为 1. 非必要情况不要选9
   */
  RegionId?: number
  /**
   * 额外参数,json字符串,包含ResourceId 资源ID,LicenseType 授权类型
   */
  ExtraParam?: string
}

/**
 * 基线项
 */
export interface BaselineItem {
  /**
   * 项Id
   */
  ItemId?: number
  /**
   * 项名称
   */
  ItemName?: string
  /**
   * 检测项分类
   */
  CategoryId?: number
  /**
   * 项描述
   */
  ItemDesc?: string
  /**
   * 修复方法
   */
  FixMethod?: string
  /**
   * 所属规则
   */
  RuleName?: string
  /**
   * 检测结果描述
   */
  DetectResultDesc?: string
  /**
   * 危险等级
   */
  Level?: number
  /**
   * 检测状态：0 未通过，1：忽略，3：通过，5：检测中
   */
  DetectStatus?: number
  /**
   * 主机ID
   */
  HostId?: string
  /**
   * 主机名
   */
  HostName?: string
  /**
   * 主机IP
   */
  HostIp?: string
  /**
   * 外网IP
   */
  WanIp?: string
  /**
   * 第一次出现时间
   */
  FirstTime?: string
  /**
   * 最近出现时间
   */
  LastTime?: string
  /**
   * 是否可以修复
   */
  CanBeFixed?: number
  /**
   * 主机安全uuid
   */
  Uuid?: string
  /**
   * 主机额外信息
   */
  MachineExtraInfo?: MachineExtraInfo
}

/**
 * DescribeRansomDefenseStrategyDetail返回参数结构体
 */
export interface DescribeRansomDefenseStrategyDetailResponse {
  /**
   * 策略详情
   */
  Strategy?: RansomDefenseStrategyDetail
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * EditBashRules返回参数结构体
 */
export interface EditBashRulesResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeLogIndex返回参数结构体
 */
export interface DescribeLogIndexResponse {
  /**
   * 是否生效
   */
  Status?: boolean
  /**
   * 索引规则
   */
  Rule?: RuleInfo
  /**
   * 索引修改时间，初始值为索引创建时间
   */
  ModifyTime?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeRansomDefenseBackupList请求参数结构体
 */
export interface DescribeRansomDefenseBackupListRequest {
  /**
   * 分页参数 最大100条
   */
  Limit: number
  /**
   * 分页参数
   */
  Offset: number
  /**
   * 主机Quuid
   */
  Quuid: string
  /**
   * 过滤条件。
<li>Status - Int - 是否必填：否 - 通过勒索状态查询：0未勒索，1已勒索 </li>
<li>CreateTimeBegin - string - 是否必填：否 - 创建时间开始 </li>
<li>CreateTimeEnd - string - 是否必填：否 - 创建时间结束 </li>
   */
  Filters?: Array<Filters>
  /**
   * 排序方法 ASC DESC
   */
  Order?: string
  /**
   * 排序字段支持CreateTime
   */
  By?: string
}

/**
 * 异地登录白名单
 */
export interface LoginWhiteLists {
  /**
   * 记录ID
   */
  Id?: number
  /**
   * 主机安全uuid
   */
  Uuid?: string
  /**
   * 白名单地域
   */
  Places?: Array<Place>
  /**
   * 白名单用户（多个用户逗号隔开）
   */
  UserName?: string
  /**
   * 白名单IP（多个IP逗号隔开）
   */
  SrcIp?: string
  /**
   * 是否为全局规则
   */
  IsGlobal?: boolean
  /**
   * 创建白名单时间
   */
  CreateTime?: string
  /**
   * 修改白名单时间
   */
  ModifyTime?: string
  /**
   * 机器名
   */
  MachineName?: string
  /**
   * 机器IP
   */
  HostIp?: string
  /**
   * 起始时间
   */
  StartTime?: string
  /**
   * 结束时间
   */
  EndTime?: string
}

/**
 * ScanVul返回参数结构体
 */
export interface ScanVulResponse {
  /**
   * 任务id
   */
  TaskId?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteMalwareWhiteList返回参数结构体
 */
export interface DeleteMalwareWhiteListResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeOverviewStatistics请求参数结构体
 */
export type DescribeOverviewStatisticsRequest = null

/**
 * DeleteScanTask请求参数结构体
 */
export interface DeleteScanTaskRequest {
  /**
   * 任务Id
   */
  TaskId: number
  /**
   * 模块类型 当前提供 Malware 木马 , Vul 漏洞 , Baseline 基线
   */
  ModuleType: string
  /**
   * 自选服务器时生效，主机quuid的string数组
   */
  QuuidList?: Array<string>
}

/**
 * DescribeRiskBatchStatus返回参数结构体
 */
export interface DescribeRiskBatchStatusResponse {
  /**
   * Handling:正在执行删除操作，
Pending：没有任务执行
   */
  Status?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeAlarmIncidentNodes请求参数结构体
 */
export interface DescribeAlarmIncidentNodesRequest {
  /**
   * 机器uuid
   */
  Uuid: string
  /**
   * 告警vid
   */
  AlarmVid: string
  /**
   * 告警时间
   */
  AlarmTime: number
  /**
   * 告警来源表ID
   */
  TableId?: number
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
 * DescribeRansomDefenseMachineList返回参数结构体
 */
export interface DescribeRansomDefenseMachineListResponse {
  /**
   * 主机列表
   */
  List?: Array<RansomDefenseStrategyMachineBackupInfo>
  /**
   * 分页查询记录总数
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
 * DescribeScreenAttackHotspot请求参数结构体
 */
export type DescribeScreenAttackHotspotRequest = null

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
 * DeleteSearchTemplate请求参数结构体
 */
export interface DeleteSearchTemplateRequest {
  /**
   * 模板ID
   */
  Id: number
}

/**
 * ExportJavaMemShellPlugins返回参数结构体
 */
export interface ExportJavaMemShellPluginsResponse {
  /**
   * 任务ID,需要到接口“异步导出任务”ExportTasks获取DownloadUrl下载地址
   */
  TaskId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeAssetTotalCount返回参数结构体
 */
export interface DescribeAssetTotalCountResponse {
  /**
   * 各项资源数量
system : 资源监控
account: 账号
port: 端口
process: 进程
app: 应用软件
database:数据库
webapp: Web应用
webframe: Web框架
webservice: Web服务
weblocation: Web站点
jar: Jar包
initservice: 启动服务
planTask:计划任务
env:环境变量
coremodule:内核模块
   */
  Types?: Array<AssetKeyVal>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
 * DescribeTags返回参数结构体
 */
export interface DescribeTagsResponse {
  /**
   * 列表信息
   */
  List?: Array<Tag>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeRansomDefenseTrend请求参数结构体
 */
export type DescribeRansomDefenseTrendRequest = null

/**
 * DescribeLicenseList返回参数结构体
 */
export interface DescribeLicenseListResponse {
  /**
   * 总条数
   */
  TotalCount?: number
  /**
   * 授权数列表信息
   */
  List?: Array<LicenseDetail>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeJavaMemShellList返回参数结构体
 */
export interface DescribeJavaMemShellListResponse {
  /**
   * 事件列表
   */
  List?: Array<JavaMemShellInfo>
  /**
   * 总数
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 授权解绑信息
 */
export interface LicenseUnBindRsp {
  /**
   * QUUID 云服务器uuid,轻量服务器uuid,边缘计算 uuid
   */
  Quuid?: string
  /**
   * 失败原因
   */
  ErrMsg?: string
}

/**
 * DescribeBaselineRuleList请求参数结构体
 */
export interface DescribeBaselineRuleListRequest {
  /**
   * <li>RuleName - String - 是否必填：否 - 规则名称</li>
<li>CategoryId - int64 - 是否必填：否 自定义筛选为-1 - 规则分类</li>
<li>RuleType - int - 是否必填：否 0:系统 1:自定义 - 规则类型</li>
   */
  Filters?: Array<Filter>
  /**
   * 限制条数,默认10,最大100
   */
  Limit?: number
  /**
   * 偏移量,默认0
   */
  Offset?: number
  /**
   * 排序方式: [ASC:升序|DESC:降序]
   */
  Order?: string
  /**
   * 可选排序列
   */
  By?: string
}

/**
 * DescribeVulOverview请求参数结构体
 */
export type DescribeVulOverviewRequest = null

/**
 * ModifyWebPageProtectDir返回参数结构体
 */
export interface ModifyWebPageProtectDirResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 机器快照信息
 */
export interface VulFixStatusSnapshotInfo {
  /**
   * cvm id
   */
  Quuid?: string
  /**
   * 主机名称
   */
  HostName?: string
  /**
   * 主机ip
   */
  HostIp?: string
  /**
   * 快照名称
   */
  SnapshotName?: string
  /**
   * 快照创建时间
   */
  ModifyTime?: string
  /**
   * 快照id
   */
  SnapshotId?: string
  /**
   * 记录唯一id
   */
  Id?: number
  /**
   * 快照状态 0-初始状态1-快照创建成功；2-快照创建失败；
   */
  Status?: number
  /**
   * 快照创建失败原因
   */
  FailReason?: string
}

/**
 * DescribeMachinesSimple返回参数结构体
 */
export interface DescribeMachinesSimpleResponse {
  /**
   * 主机列表
   */
  Machines?: Array<MachineSimple>
  /**
   * 主机数量
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeNetAttackSetting请求参数结构体
 */
export type DescribeNetAttackSettingRequest = null

/**
 * 登录审计列表实体
 */
export interface HostLoginList {
  /**
   * 记录Id
   */
  Id?: number
  /**
   * 主机Uuid
   */
  Uuid?: string
  /**
   * 主机ip
   */
  MachineIp?: string
  /**
   * 主机名
   */
  MachineName?: string
  /**
   * 用户名
   */
  UserName?: string
  /**
   * 来源ip
   */
  SrcIp?: string
  /**
   * 1:正常登录；2异地登录； 5已加白； 14：已处理；15：已忽略。
   */
  Status?: number
  /**
   * 国家id
   */
  Country?: number
  /**
   * 城市id
   */
  City?: number
  /**
   * 省份id
   */
  Province?: number
  /**
   * 登录时间
   */
  LoginTime?: string
  /**
   * 修改时间
   */
  ModifyTime?: string
  /**
   * 是否命中异地登录异常  1表示命中此类异常, 0表示未命中
   */
  IsRiskArea?: number
  /**
   * 是否命中异常用户异常 1表示命中此类异常, 0表示未命中
   */
  IsRiskUser?: number
  /**
   * 是否命中异常时间异常 1表示命中此类异常, 0表示未命中
   */
  IsRiskTime?: number
  /**
   * 是否命中异常IP异常 1表示命中此类异常, 0表示未命中
   */
  IsRiskSrcIp?: number
  /**
   * 危险等级：
0 高危
1 可疑
   */
  RiskLevel?: number
  /**
   * 位置名称
   */
  Location?: string
  /**
   * 主机quuid
   */
  Quuid?: string
  /**
   * 高危信息说明：
ABROAD - 海外IP；
XTI - 威胁情报
   */
  Desc?: string
  /**
   * 附加信息
   */
  MachineExtraInfo?: MachineExtraInfo
  /**
   * 请求目的端口
   */
  Port?: number
}

/**
 * DescribeScreenRiskAssetsTop请求参数结构体
 */
export interface DescribeScreenRiskAssetsTopRequest {
  /**
   * 统计类型：0:潜在威胁 1:失陷 2:漏洞 3:基线
   */
  BusinessType: number
}

/**
 * DeletePrivilegeEvents请求参数结构体
 */
export interface DeletePrivilegeEventsRequest {
  /**
   * ID数组. (最大100条)
   */
  Ids?: Array<number | bigint>
  /**
   * 是否删除全部
   */
  All?: boolean
}

/**
 * DeleteWebHookRule返回参数结构体
 */
export interface DeleteWebHookRuleResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyNetAttackWhiteList请求参数结构体
 */
export interface ModifyNetAttackWhiteListRequest {
  /**
   * 是否全部主机； 0否，1是。
   */
  Scope: number
  /**
   * 来源IP 单IP:1.1.1.1  IP范围:1.1.1.1-1.1.2.1  IP范围：1.1.1.0/24
   */
  SrcIp: Array<string>
  /**
   * 是否加白所有符合该规则的告警 ，1:处理,0:不处理
   */
  DealOldEvents: number
  /**
   * 规则id
   */
  Id: number
  /**
   * quuid 列表
   */
  QuuidList?: Array<string>
  /**
   * 规则描述
   */
  Description?: string
}

/**
 * DescribeVulDefenceSetting请求参数结构体
 */
export type DescribeVulDefenceSettingRequest = null

/**
 * DescribeTrialReport请求参数结构体
 */
export type DescribeTrialReportRequest = null

/**
 * 忽略检测项影响主机信息
 */
export interface IgnoreRuleEffectHostInfo {
  /**
   * 主机名称
   */
  HostName?: string
  /**
   * 危害等级：1-低位，2-中危，3-高危，4-严重
   */
  Level?: number
  /**
   * 主机标签数组
   */
  TagList?: Array<string>
  /**
   * 状态：0-未通过，1-忽略，3-已通过，5-检测中
   */
  Status?: number
  /**
   * 最后检测时间
   */
  LastScanTime?: string
  /**
   * 事件id
   */
  EventId?: number
  /**
   * 主机quuid
   */
  Quuid?: string
}

/**
 * 主机风险计数
 */
export interface HostRiskLevelCount {
  /**
   * 主机ID
   */
  HostId?: string
  /**
   * 主机名
   */
  HostName?: string
  /**
   * 严重个数
   */
  SeriousCount?: number
  /**
   * 高危个数
   */
  HighCount?: number
  /**
   * 中危个数
   */
  MediumCount?: number
  /**
   * 低危个数
   */
  LowCount?: number
}

/**
 * DescribeFileTamperEvents请求参数结构体
 */
export interface DescribeFileTamperEventsRequest {
  /**
   * 过滤条件。
<li>Status - String - 是否必填：否 - 处理状态  0 -- 待处理 1 -- 已加白 2 -- 已删除 3 - 已忽略</li>
<li>ModifyTime - String - 是否必填：否 - 最近发生时间</li>
<li>Uuid- String - 是否必填：否 - 主机uuid查询</li>
<li>RuleCategory- string - 是否必填：否 - 规则类别 0 系统规则 1 自定义规则</li>
<li>FileAction- string - 是否必填：否 - 威胁行为 read 读取文件 write 写文件</li>
   */
  Filters?: Array<Filters>
  /**
   * 偏移量，默认为0。
   */
  Offset?: number
  /**
   * 需要返回的数量，默认为10，最大值为100
   */
  Limit?: number
  /**
   * 排序方式 ASC,DESC
   */
  Order?: string
  /**
   * 排序字段 CreateTime、ModifyTime
   */
  By?: string
}

/**
 * DescribeBaselineItemInfo返回参数结构体
 */
export interface DescribeBaselineItemInfoResponse {
  /**
   * 结果列表
   */
  List?: Array<BaselineItemInfo>
  /**
   * 总条目数
   */
  Total?: number
  /**
   * 基线分类列表
   */
  CategoryList?: Array<BaselineItemsCategory>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
 * DescribeScreenMachineRegions返回参数结构体
 */
export interface DescribeScreenMachineRegionsResponse {
  /**
   * 列表详情
   */
  List?: Array<ScreenRegionInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ExportVulDefencePluginEvent返回参数结构体
 */
export interface ExportVulDefencePluginEventResponse {
  /**
   * 导出文件Id 可通过ExportTasks接口下载
   */
  TaskId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ExportAssetMachineDetail请求参数结构体
 */
export interface ExportAssetMachineDetailRequest {
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
 * DescribeBanMode请求参数结构体
 */
export type DescribeBanModeRequest = null

/**
 * ModifyRaspMaxCpu请求参数结构体
 */
export interface ModifyRaspMaxCpuRequest {
  /**
   * rasp当前最大cpu限制，0<cpu<=100，默认100表示不限制
   */
  RaspMaxCpu?: number
}

/**
 * StopAssetScan请求参数结构体
 */
export interface StopAssetScanRequest {
  /**
   * 任务Id
   */
  TaskId: number
}

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
 * DescribeESAggregations返回参数结构体
 */
export interface DescribeESAggregationsResponse {
  /**
   * ES聚合结果JSON
   */
  Data?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ExportVulInfo返回参数结构体
 */
export interface ExportVulInfoResponse {
  /**
   * 导出任务Id , 可通过ExportTasks 接口下载
   */
  TaskId?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
  VulId?: number
  /**
   * 漏洞级别
   */
  Level?: number
  /**
   * 漏洞名称
   */
  VulName?: string
  /**
   * 发布日期
   */
  PublishDate?: string
  /**
   * 漏洞分类
   */
  Category?: number
  /**
   * 漏洞状态 0未检测 1有风险 ，2无风险 ，3 检查中展示progress
   */
  Status?: number
  /**
   * 最后扫描时间
   */
  LastScanTime?: string
  /**
   * 扫描进度
   */
  Progress?: number
  /**
   * cve编号
   */
  CveId?: string
  /**
   * CVSS评分
   */
  CvssScore?: number
  /**
   * 漏洞标签 多个逗号分割
   */
  Labels?: string
  /**
   * 影响机器数
   */
  HostCount?: number
  /**
   * 是否支持防御， 0:不支持 1:支持
   */
  IsSupportDefense?: number
  /**
   * 已防御的攻击次数
   */
  DefenseAttackCount?: number
  /**
   * 检测规则 0 - 版本比对, 1 - POC验证
   */
  Method?: number
  /**
   * 攻击热度级别
   */
  AttackLevel?: number
  /**
   * 是否有漏洞主机开启漏洞防御
   */
  DefenseState?: boolean
}

/**
 * ExportAssetRecentMachineInfo请求参数结构体
 */
export interface ExportAssetRecentMachineInfoRequest {
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
 * ExportReverseShellEvents请求参数结构体
 */
export interface ExportReverseShellEventsRequest {
  /**
   * 过滤参数
   */
  Filters?: Array<Filters>
}

/**
 * 高危命令数据(新)
 */
export interface BashEventNew {
  /**
   * 数据ID
   */
  Id?: number
  /**
   * 主机安全ID
   */
  Uuid?: string
  /**
   * 主机ID
   */
  Quuid?: string
  /**
   * 主机内网IP
   */
  HostIp?: string
  /**
   * 执行用户名
   */
  User?: string
  /**
   * 平台类型
   */
  Platform?: number
  /**
   * 执行命令
   */
  BashCmd?: string
  /**
   * 规则ID
   */
  RuleId?: number
  /**
   * 规则名称
   */
  RuleName?: string
  /**
   * 规则等级：1-高 2-中 3-低
   */
  RuleLevel?: number
  /**
   * 处理状态： 0 = 待处理 1= 已处理, 2 = 已加白， 3 = 已忽略
   */
  Status?: number
  /**
   * 发生时间
   */
  CreateTime?: string
  /**
   * 主机名
   */
  MachineName?: string
  /**
   * 0: bash日志 1: 实时监控(雷霆版)
   */
  DetectBy?: number
  /**
   * 进程id
   */
  Pid?: string
  /**
   * 进程名称
   */
  Exe?: string
  /**
   * 处理时间
   */
  ModifyTime?: string
  /**
   * 规则类别  0=系统规则，1=用户规则
   */
  RuleCategory?: number
  /**
   * 转义后的正则表达式
   */
  RegexBashCmd?: string
  /**
   * 转义后的正则表达式
   */
  RegexExe?: string
  /**
   * 0:普通 1:专业版 2:旗舰版
   */
  MachineType?: number
  /**
   * 机器额外信息
   */
  MachineExtraInfo?: MachineExtraInfo
}

/**
 * DeleteLoginWhiteList返回参数结构体
 */
export interface DeleteLoginWhiteListResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeVertexDetail返回参数结构体
 */
export interface DescribeVertexDetailResponse {
  /**
   * 指定点列表的属性信息
   */
  VertexDetails?: Array<VertexDetail>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteRiskDnsEvent返回参数结构体
 */
export interface DeleteRiskDnsEventResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyLoginWhiteRecord请求参数结构体
 */
export interface ModifyLoginWhiteRecordRequest {
  /**
   * 白名单用户（多个用户逗号隔开）
   */
  UserName: string
  /**
   * 更新后记录的白名单维度信息
   */
  SrcIp: string
  /**
   * 开始时间
   */
  StartTime: string
  /**
   * 结束时间
   */
  EndTime: string
  /**
   * 备注
   */
  Remark: string
  /**
   * 是否对所有服务器生效，0-否，1-是
   */
  IsGlobal: number
  /**
   * 白名单ID
   */
  Id: number
  /**
   * 服务器列表
   */
  Hosts?: Array<HostInfo>
  /**
   * 地域列表
   */
  Places?: Array<Place>
}

/**
 * ModifyRiskDnsPolicy返回参数结构体
 */
export interface ModifyRiskDnsPolicyResponse {
  /**
   * 0：没有重复，1：和现有策略重复
   */
  Repeat?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
 * 产品试用状态查询接口Data出参
 */
export interface ProductStatusInfo {
  /**
   * 防护状态，1未防护，2防护中，3试用中，4已过期
   */
  FWUserStatus?: number
  /**
   * 是否可以申请试用，true可以申请
   */
  CanApplyTrial?: boolean
  /**
   * 无法试用原因，可试用为空
   */
  CanNotApplyReason?: string
  /**
   * 上次试用结束时间（不存在试用记录则为空）
   */
  LastTrialTime?: string
}

/**
 * DescribeBaselineHostIgnoreList返回参数结构体
 */
export interface DescribeBaselineHostIgnoreListResponse {
  /**
   * 总数
   */
  Total?: number
  /**
   * 无
   */
  List?: Array<BaselineHost>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteMalwares返回参数结构体
 */
export interface DeleteMalwaresResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ExportRiskDnsEventList返回参数结构体
 */
export interface ExportRiskDnsEventListResponse {
  /**
   * 任务ID,需要到接口“异步导出任务”ExportTasks获取DownloadUrl下载地址
   */
  TaskId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeAssetInitServiceList请求参数结构体
 */
export interface DescribeAssetInitServiceListRequest {
  /**
   * 服务器Uuid
   */
  Uuid?: string
  /**
   * 服务器Quuid
   */
  Quuid?: string
  /**
   * 过滤条件。
<li>IP - String - 是否必填：否 - 主机ip</li>
<li>MachineName - String - 是否必填：否 - 主机名称</li>
<li>InstanceID - string - 是否必填：否 - 实例ID</li>
<li>Name- string - 是否必填：否 - 包名</li>
<li>User- string - 是否必填：否 - 用户</li>
<li>IsAutoRun - string - 是否必填：否 - 是否开机自启动：0否，1是</li>
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
   * 偏移量，默认为0。
   */
  Offset?: number
  /**
   * 需要返回的数量，默认为10，最大值为100
   */
  Limit?: number
  /**
   * 排序方式，asc升序 或 desc降序
   */
  Order?: string
  /**
   * 排序方式：[FirstTime]
   */
  By?: string
}

/**
 * ScanVulAgain返回参数结构体
 */
export interface ScanVulAgainResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeWebHookReceiverUsage请求参数结构体
 */
export interface DescribeWebHookReceiverUsageRequest {
  /**
   * 告警接收人列表
   */
  List?: Array<WebHookReceiver>
}

/**
 * DescribeAssetUserKeyList请求参数结构体
 */
export interface DescribeAssetUserKeyListRequest {
  /**
   * 主机Quuid
   */
  Quuid: string
  /**
   * 主机Uuid
   */
  Uuid: string
  /**
   * 账号名
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
 * 漏洞top统计实体
 */
export interface VulTopInfo {
  /**
   * 漏洞 名
   */
  VulName?: string
  /**
   * 危害等级：1-低危；2-中危；3-高危；4-严重
   */
  VulLevel?: number
  /**
   * 漏洞数量
   */
  VulCount?: number
  /**
   * 漏洞id
   */
  VulId?: number
}

/**
 * CKafka域名信息
 */
export interface CKafkaRouteInfo {
  /**
   * 路由ID
   */
  RouteID?: number
  /**
   * 域名
   */
  Domain?: string
  /**
   * 域名端口
   */
  DomainPort?: number
  /**
   * 虚拟ip
   */
  Vip?: string
  /**
   * 虚拟ip类型1:外网TGW 2:基础网络 3:VPC网络 4:支撑网络(标准版) 5:SSL外网访问方式访问 6:黑石环境vpc 7:支撑网络(专业版)
   */
  VipType?: number
  /**
   * 接入类型
0：PLAINTEXT (明文方式，没有带用户信息老版本及社区版本都支持)
1：SASL_PLAINTEXT（明文方式，不过在数据开始时，会通过SASL方式登录鉴权，仅社区版本支持）
2：SSL（SSL加密通信，没有带用户信息，老版本及社区版本都支持）
3：SASL_SSL（SSL加密通信，在数据开始时，会通过SASL方式登录鉴权，仅社区版本支持）
   */
  AccessType?: number
}

/**
 * SeparateMalwares返回参数结构体
 */
export interface SeparateMalwaresResponse {
  /**
   * 隔离成功的ID数组，若无则返回空数组
   */
  SuccessIds?: Array<number | bigint>
  /**
   * 隔离失败的ID数组，若无则返回空数组
   */
  FailedIds?: Array<number | bigint>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
每个过滤条件只支持一个值，暂不支持多个值“或”关系查询</li>
   */
  Filters?: Array<Filters>
}

/**
 * ExportAssetJarList返回参数结构体
 */
export interface ExportAssetJarListResponse {
  /**
   * 异步下载任务ID，需要配合ExportTasks接口使用
   */
  TaskId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
 * DescribeNetAttackWhiteList返回参数结构体
 */
export interface DescribeNetAttackWhiteListResponse {
  /**
   * 总记录数
   */
  TotalCount?: number
  /**
   * 白名单列表
   */
  WhiteList?: Array<NetAttackWhiteRule>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CheckBashPolicyParams请求参数结构体
 */
export interface CheckBashPolicyParamsRequest {
  /**
   * 校验内容字段,如果需要检测多个字段时,用逗号分割
<li>Name 策略名称</li>
<li>Process 进程</li>
<li>Name PProcess 父进程</li>
<li>Name AProcess 祖先进程</li>

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
   * 该字段不在维护,如果填入该参数,自动替换到Rules.Process

   */
  Rule?: string
  /**
   * 编辑时传的规则id
   */
  Id?: number
  /**
   * 规则表达式
   */
  Rules?: PolicyRules
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
 * DescribeRiskDnsEventInfo请求参数结构体
 */
export interface DescribeRiskDnsEventInfoRequest {
  /**
   * 恶意请求事件Id
   */
  Id: number
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
 * DescribeAssetTypeTop请求参数结构体
 */
export type DescribeAssetTypeTopRequest = null

/**
 * CheckFileTamperRule返回参数结构体
 */
export interface CheckFileTamperRuleResponse {
  /**
   * 0=校验通过  1=规则名称校验不通过
   */
  ErrCode?: number
  /**
   * 校验信息
   */
  ErrMsg?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ExportNonlocalLoginPlaces返回参数结构体
 */
export interface ExportNonlocalLoginPlacesResponse {
  /**
   * 该参数已废弃
   */
  DownloadUrl?: string
  /**
   * 任务ID,需要到接口“异步导出任务”ExportTasks获取DownloadUrl下载地址
   */
  TaskId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteMaliciousRequestWhiteList请求参数结构体
 */
export interface DeleteMaliciousRequestWhiteListRequest {
  /**
   * 白名单id (最大100条)
   */
  Ids: Array<number | bigint>
}

/**
 * DescribeAssetJarList返回参数结构体
 */
export interface DescribeAssetJarListResponse {
  /**
   * 应用列表
   */
  Jars?: Array<AssetJarBaseInfo>
  /**
   * 总数量
   */
  Total?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ExportAssetProcessInfoList返回参数结构体
 */
export interface ExportAssetProcessInfoListResponse {
  /**
   * 异步下载任务ID，需要配合ExportTasks接口使用
   */
  TaskId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
 * DeleteNetAttackWhiteList返回参数结构体
 */
export interface DeleteNetAttackWhiteListResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeWebHookPolicy返回参数结构体
 */
export interface DescribeWebHookPolicyResponse {
  /**
   * 策略列表
   */
  List?: Array<WebHookPolicy>
  /**
   * 策略列表总数
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 阻断白名单规则
 */
export interface BanWhiteList {
  /**
   * 白名单ID。
   */
  Id?: string
  /**
   * 白名单别名。
   */
  Remark?: string
  /**
   * 阻断来源IP。
   */
  SrcIp?: string
  /**
   * 修改白名单时间。
   */
  ModifyTime?: string
  /**
   * 创建白名单时间。
   */
  CreateTime?: string
  /**
   * 白名单所属机器。
   */
  Uuid?: string
  /**
   * 白名单是否全局
   */
  IsGlobal?: boolean
  /**
   * 白名单所属机器列表
   */
  Quuids?: Array<string>
}

/**
 * SetLocalStorageItem返回参数结构体
 */
export interface SetLocalStorageItemResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ExportBashEventsNew请求参数结构体
 */
export interface ExportBashEventsNewRequest {
  /**
   * 过滤参数
   */
  Filters?: Array<Filters>
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
  Name?: string
  /**
   * 类型：1应用程序，2系统类库，3Web服务自带库，8:其他，
   */
  Type?: number
  /**
   * 是否可执行：0未知，1是，2否
   */
  Status?: number
  /**
   * 版本
   */
  Version?: string
  /**
   * 路径
   */
  Path?: string
  /**
   * 服务器IP
   */
  MachineIp?: string
  /**
   * 服务器名称
   */
  MachineName?: string
  /**
   * 操作系统
   */
  OsInfo?: string
  /**
   * 引用进程列表
   */
  Process?: Array<AssetAppProcessInfo>
  /**
   * Jar包Md5
   */
  Md5?: string
  /**
   * 数据更新时间
   */
  UpdateTime?: string
}

/**
 * ModifyFileTamperRule返回参数结构体
 */
export interface ModifyFileTamperRuleResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeBaselineRuleCategoryList返回参数结构体
 */
export interface DescribeBaselineRuleCategoryListResponse {
  /**
   * 无
   */
  List?: Array<BaselineCategory>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 反弹Shell数据详情
 */
export interface ReverseShellEventInfo {
  /**
   * ID 主键
   */
  Id?: number
  /**
   * 主机安全uuid
   */
  Uuid?: string
  /**
   * 主机uuid
   */
  Quuid?: string
  /**
   * 主机内网IP
   */
  HostIp?: string
  /**
   * 目标IP
   */
  DstIp?: string
  /**
   * 目标端口
   */
  DstPort?: number
  /**
   * 进程名
   */
  ProcessName?: string
  /**
   * 进程路径
   */
  FullPath?: string
  /**
   * 命令详情
   */
  CmdLine?: string
  /**
   * 执行用户
   */
  UserName?: string
  /**
   * 执行用户组
   */
  UserGroup?: string
  /**
   * 父进程名
   */
  ParentProcName?: string
  /**
   * 父进程用户
   */
  ParentProcUser?: string
  /**
   * 父进程用户组
   */
  ParentProcGroup?: string
  /**
   * 父进程路径
   */
  ParentProcPath?: string
  /**
   * 处理状态：0-待处理 2-白名单 3-已处理 4-已忽略
   */
  Status?: number
  /**
   * 产生时间
   */
  CreateTime?: string
  /**
   * 主机名
   */
  MachineName?: string
  /**
   * 检测方法
   */
  DetectBy?: number
  /**
   * 进程树 json  pid:进程id，exe:文件路径 ，account:进程所属用组和用户 ,cmdline:执行命令，ssh_service: SSH服务ip, ssh_soure:登录源
   */
  PsTree?: string
  /**
   * 建议方案
   */
  SuggestScheme?: string
  /**
   * 描述
   */
  HarmDescribe?: string
  /**
   * 标签
   */
  Tags?: Array<string>
  /**
   * 参考链接
   */
  References?: Array<string>
  /**
   * 主机外网ip
   */
  MachineWanIp?: string
  /**
   * 主机在线状态 OFFLINE  ONLINE
   */
  MachineStatus?: string
  /**
   * 处理时间
   */
  ModifyTime?: string
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
 * ModifyWarningHostConfig请求参数结构体
 */
export interface ModifyWarningHostConfigRequest {
  /**
   * 告警类型
   */
  Type: number
  /**
   * 告警主机范围类型，0:全部主机，1:按所属项目选，2:按腾讯云标签选，3:按主机安全标签选，4:自选主机
   */
  HostRange: number
  /**
   * 项目或标签的名称列表，自选主机时为空
   */
  ItemLabels?: Array<string>
  /**
   * 机器列表
   */
  Quuids?: Array<string>
  /**
   * 项目或标签的id列表，自选主机时为空
   */
  ItemLabelIds?: Array<string>
  /**
   * 需排除的机器列表
   */
  ExcludedQuuids?: Array<string>
}

/**
 * ExportMalwares返回参数结构体
 */
export interface ExportMalwaresResponse {
  /**
   * 该参数已废弃
   */
  DownloadUrl?: string
  /**
   * 任务ID,需要到接口“异步导出任务”ExportTasks获取DownloadUrl下载地址
   */
  TaskId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeScanVulSetting请求参数结构体
 */
export type DescribeScanVulSettingRequest = null

/**
 * DescribeServersAndRiskAndFirstInfo请求参数结构体
 */
export type DescribeServersAndRiskAndFirstInfoRequest = null

/**
 * 扫描任务详情列表信息
 */
export interface ScanTaskDetails {
  /**
   * 服务器IP
   */
  HostIp?: string
  /**
   * 服务器名称
   */
  HostName?: string
  /**
   * 操作系统
   */
  OsName?: string
  /**
   * 风险数量
   */
  RiskNum?: number
  /**
   * 扫描开始时间
   */
  ScanBeginTime?: string
  /**
   * 扫描结束时间
   */
  ScanEndTime?: string
  /**
   * 唯一Uuid
   */
  Uuid?: string
  /**
   * 唯一Quuid
   */
  Quuid?: string
  /**
   * 状态码Scanning、Ok、Fail
   */
  Status?: string
  /**
   * 描述
   */
  Description?: string
  /**
   * id唯一
   */
  Id?: number
  /**
   * 失败类型  3离线、4超时、5失败、8agent版本过低
   */
  FailType?: number
  /**
   * 外网ip
   */
  MachineWanIp?: string
  /**
   * 附加信息
   */
  MachineExtraInfo?: MachineExtraInfo
}

/**
 * DescribeMalwareRiskWarning请求参数结构体
 */
export type DescribeMalwareRiskWarningRequest = null

/**
 * 键值索引配置
 */
export interface KeyValueInfo {
  /**
   * 是否大小写敏感
   */
  CaseSensitive?: boolean
  /**
   * 需要建立索引的键值对信息
   */
  KeyValues?: Array<KeyValueArrayInfo>
}

/**
 * StartBaselineDetect请求参数结构体
 */
export interface StartBaselineDetectRequest {
  /**
   * 基线检测参数
   */
  Param: BaselineDetectParam
}

/**
 * DescribeVulStoreList请求参数结构体
 */
export interface DescribeVulStoreListRequest {
  /**
   * 
<li>VulName- string - 是否必填：否 - 漏洞名称</li>
<li>CveId- string - 是否必填：否 - cveid</li>
<li>VulCategory- string - 是否必填：否 - 漏洞分类  1 Web-CMS漏洞 ,2 应用漏洞 ,4 Linux软件漏洞,5 Windows系统漏洞</li>
<li>Method- string - 是否必填：否 - 检测方法 0版本对比,1 poc检测 </li>
<li>SupportDefense- string - 是否必填：否 - 是否支持防御 0不支持,1支持</li>
<li>FixSwitch- string - 是否必填：否 - 是否支持自动修复 0不支持,1支持</li>

   */
  Filters?: Array<Filter>
  /**
   * 限制条数,默认10,最大100
   */
  Limit?: number
  /**
   * 偏移量,默认0
   */
  Offset?: number
  /**
   * 排序方式: [ASC:升序|DESC:降序]
   */
  Order?: string
  /**
   * 可选排序列: [PublishDate]
   */
  By?: string
}

/**
 * EditPrivilegeRules请求参数结构体
 */
export interface EditPrivilegeRulesRequest {
  /**
   * 规则ID(新增时请留空)
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
   * 进程名
   */
  ProcessName?: string
  /**
   * 是否S权限进程
   */
  SMode?: number
  /**
   * 是否全局规则(默认否)
   */
  IsGlobal?: number
  /**
   * 事件列表和详情点击加白时关联的事件id (新增规则时请留空)
   */
  EventId?: number
}

/**
 * DescribeAssetDiskList请求参数结构体
 */
export interface DescribeAssetDiskListRequest {
  /**
   * 主机Quuid
   */
  Quuid: string
  /**
   * 主机Uuid
   */
  Uuid: string
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
 * 大屏全网攻击热点
 */
export interface ScreenAttackHotspot {
  /**
   * 事件名
   */
  EventName?: string
  /**
   * 攻击者IP
   */
  SrcIp?: string
  /**
   * 受害者IP
   */
  DstIp?: string
  /**
   * 地域
   */
  Region?: string
  /**
   * 时间
   */
  CreatedTime?: string
}

/**
 * DescribeClientException请求参数结构体
 */
export interface DescribeClientExceptionRequest {
  /**
   * 客户端异常类型 1:客户端离线，2:客户端卸载
   */
  ExceptionType: number
  /**
   * 分页的偏移量
   */
  Offset: number
  /**
   * 分页单页限制数目，不为0，最大值100
   */
  Limit: number
  /**
   * 起始时间 `2006-01-02 15:04:05` 格式
   */
  StartTime?: string
  /**
   * 结束时间 `2006-01-02 15:04:05` 格式
   */
  EndTime?: string
}

/**
 * DescribeAssetPlanTaskList返回参数结构体
 */
export interface DescribeAssetPlanTaskListResponse {
  /**
   * 列表
   */
  Tasks?: Array<AssetPlanTask>
  /**
   * 总数量
   */
  Total?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
  Level?: Array<number | bigint>
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
 * ExportRansomDefenseEventsList返回参数结构体
 */
export interface ExportRansomDefenseEventsListResponse {
  /**
   * 任务ID,需要到接口“异步导出任务”ExportTasks获取DownloadUrl下载地址
   */
  TaskId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ExportAssetPortInfoList请求参数结构体
 */
export interface ExportAssetPortInfoListRequest {
  /**
   * 查询指定Quuid主机的信息
   */
  Quuid?: string
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
   */
  Filters?: Array<Filter>
  /**
   * 排序方式，asc升序 或 desc降序
   */
  Order?: string
  /**
   * 排序方式：[FirstTime|StartTime]
   */
  By?: string
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
 * ExportTasks请求参数结构体
 */
export interface ExportTasksRequest {
  /**
   * 任务ID
   */
  TaskId: string
}

/**
 * CancelIgnoreVul返回参数结构体
 */
export interface CancelIgnoreVulResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * FixBaselineDetect请求参数结构体
 */
export interface FixBaselineDetectRequest {
  /**
   * 主机Id
   */
  HostId: string
  /**
   * 项Id
   */
  ItemId: number
  /**
   * 修复内容
   */
  Data?: Array<string>
}

/**
 * DescribeSecurityBroadcastInfo请求参数结构体
 */
export interface DescribeSecurityBroadcastInfoRequest {
  /**
   * 文章id
   */
  Id: number
}

/**
 * IgnoreImpactedHosts返回参数结构体
 */
export interface IgnoreImpactedHostsResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeCanFixVulMachine请求参数结构体
 */
export interface DescribeCanFixVulMachineRequest {
  /**
   * 漏洞id 支持多个漏洞
   */
  VulIds: Array<number | bigint>
  /**
   * 需要修复的主机，和VulIds是and 的关系
   */
  Quuids?: Array<string>
}

/**
 * DescribeRansomDefenseStrategyMachines返回参数结构体
 */
export interface DescribeRansomDefenseStrategyMachinesResponse {
  /**
   * 主机列表
   */
  List?: Array<RansomDefenseStrategyMachineDetail>
  /**
   * 分页查询记录总数
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeBaselineRuleIgnoreList请求参数结构体
 */
export interface DescribeBaselineRuleIgnoreListRequest {
  /**
   * <li>RuleName - String - 是否必填：否 - 规则名称</li>
<li>ItemId- int - 是否必填：否 - 检测项Id</li>
   */
  Filters?: Array<Filter>
  /**
   * 限制条数,默认10,最大100
   */
  Limit?: number
  /**
   * 偏移量,默认0
   */
  Offset?: number
  /**
   * 排序方式: [ASC:升序|DESC:降序]
   */
  Order?: string
  /**
   * 可选排序列: [HostCount]
   */
  By?: string
}

/**
 * DescribeAssetMachineDetail返回参数结构体
 */
export interface DescribeAssetMachineDetailResponse {
  /**
   * 主机详情
   */
  MachineDetail?: AssetMachineDetail
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
  RegionName?: string
  /**
   * 可用区信息
   */
  ZoneSet?: Array<ZoneInfo>
}

/**
 * DescribeRansomDefenseStrategyList返回参数结构体
 */
export interface DescribeRansomDefenseStrategyListResponse {
  /**
   * 策略列表
   */
  List?: Array<RansomDefenseStrategy>
  /**
   * 分页查询记录总数
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeAttackTrends请求参数结构体
 */
export interface DescribeAttackTrendsRequest {
  /**
   *  过滤条件。
<li>BeginTime - String 起始时间,默认近7天- 是否必填: 否</li>
   */
  Filters?: Array<Filter>
}

/**
 * DescribeBaselineDownloadList请求参数结构体
 */
export interface DescribeBaselineDownloadListRequest {
  /**
   * <li>Status - int - 是否必填：否 - 0:导出中 1:已完成</li>
<li>StartTime - string - 是否必填：否 - 开始时间</li>
<li>EndTime - string - 是否必填：否 - 结束时间</li>
<li>TaskName - string - 是否必填：否 - 任务名称</li>
   */
  Filters?: Array<Filter>
  /**
   * 限制条数,默认10,最大100
   */
  Limit?: number
  /**
   * 偏移量,默认0
   */
  Offset?: number
  /**
   * 排序方式: [ASC:升序|DESC:降序]
   */
  Order?: string
  /**
   * 可选排序列: [StartTime|EndTime]
   */
  By?: string
}

/**
 * DeleteNetAttackWhiteList请求参数结构体
 */
export interface DeleteNetAttackWhiteListRequest {
  /**
   * ID数组，最大100条。
   */
  Ids: Array<number | bigint>
}

/**
 * 账号变更历史数据。
 */
export interface HistoryAccount {
  /**
   * 唯一ID。
   */
  Id?: number
  /**
   * 主机安全客户端唯一Uuid。
   */
  Uuid?: string
  /**
   * 主机内网IP。
   */
  MachineIp?: string
  /**
   * 主机名。
   */
  MachineName?: string
  /**
   * 账号名。
   */
  Username?: string
  /**
   * 账号变更类型。
<li>CREATE：表示新增账号</li>
<li>MODIFY：表示修改账号</li>
<li>DELETE：表示删除账号</li>
   */
  ModifyType?: string
  /**
   * 变更时间。
   */
  ModifyTime?: string
}

/**
 * DescribeStrategyExist返回参数结构体
 */
export interface DescribeStrategyExistResponse {
  /**
   * 策略是否存在, 1是 0否
   */
  IfExist?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
  Ids?: Array<number | bigint>
  /**
   * 是否删除全部
   */
  All?: boolean
}

/**
 * DeleteBashPolicies请求参数结构体
 */
export interface DeleteBashPoliciesRequest {
  /**
   * ID数组，最大100条。
   */
  Ids: Array<number | bigint>
}

/**
 * ExportAssetAppList返回参数结构体
 */
export interface ExportAssetAppListResponse {
  /**
   * 异步下载任务ID，需要配合ExportTasks接口使用
   */
  TaskId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeLogType请求参数结构体
 */
export type DescribeLogTypeRequest = null

/**
 * DescribeVulTop返回参数结构体
 */
export interface DescribeVulTopResponse {
  /**
   * 漏洞top列表
   */
  VulTopList?: Array<VulTopInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
  Scanning?: string
  /**
   * 扫描终止（包含终止中）
   */
  Ok?: string
  /**
   * 扫描失败
   */
  Fail?: string
  /**
   * 扫描失败（提示具体原因：扫描超时、客户端版本低、客户端离线）
   */
  Stop?: string
}

/**
 * DescribeBaselineRuleCategoryList请求参数结构体
 */
export type DescribeBaselineRuleCategoryListRequest = null

/**
 * DescribeAssetWebServiceProcessList返回参数结构体
 */
export interface DescribeAssetWebServiceProcessListResponse {
  /**
   * 进程列表
   */
  Process?: Array<AssetAppProcessInfo>
  /**
   * 总数
   */
  Total?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ChangeStrategyEnableStatus返回参数结构体
 */
export interface ChangeStrategyEnableStatusResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ExportRansomDefenseStrategyList返回参数结构体
 */
export interface ExportRansomDefenseStrategyListResponse {
  /**
   * 任务ID,需要到接口“异步导出任务”ExportTasks获取DownloadUrl下载地址
   */
  TaskId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
  Ids: Array<number | bigint>
}

/**
 * SearchLog请求参数结构体
 */
export interface SearchLogRequest {
  /**
   * 要检索分析的日志的起始时间，Unix时间戳（毫秒）
   */
  StartTime: number
  /**
   * 要检索分析的日志的结束时间，Unix时间戳（毫秒）
   */
  EndTime: number
  /**
   * 检索分析语句，最大长度为12KB，查询语法可参考文档 https://cloud.tencent.com/document/product/296/50508
   */
  QueryString: string
  /**
   * 表示单次查询返回的原始日志条数，最大值为1000，获取后续日志需使用Context参数
   */
  Count?: number
  /**
   * 原始日志是否按时间排序返回；可选值：asc(升序)、desc(降序)，默认为 desc
   */
  Sort?: string
  /**
   * 透传上次接口返回的Context值，可获取后续更多日志，总计最多可获取1万条原始日志，过期时间1小时
   */
  Context?: string
}

/**
 * DescribeBaselineWeakPasswordList请求参数结构体
 */
export interface DescribeBaselineWeakPasswordListRequest {
  /**
   * <li>WeakPassword - string - 是否必填：否 - 弱口令</li>
   */
  Filters?: Array<Filter>
  /**
   * 限制条数,默认10,最大100
   */
  Limit?: number
  /**
   * 偏移量,默认0
   */
  Offset?: number
  /**
   * 排序方式 [ASC:升序|DESC:降序]
   */
  Order?: string
  /**
   * 可选排序列 [CreateTime|ModifyTime]
   */
  By?: string
}

/**
 * 漏洞详细信息
 */
export interface VulDefenceEvent {
  /**
   * 漏洞ID
   */
  VulId?: number
  /**
   * 漏洞名称
   */
  VulName?: string
  /**
   * cve编号
   */
  CveId?: string
  /**
   * 漏洞事件id
   */
  Id?: number
  /**
   * 主机quuid
   */
  Quuid?: string
  /**
   * 主机名
   */
  Alias?: string
  /**
   * 内网ip
   */
  PrivateIp?: string
  /**
   * 公网ip
   */
  PublicIp?: string
  /**
   * 0: 尝试攻击(WeDetect) 1:尝试攻击成功(WeDetect) 2:rasp防御事件
   */
  EventType?: number
  /**
   * 攻击源ip
   */
  SourceIp?: string
  /**
   * 攻击源ip地址所在城市
   */
  City?: string
  /**
   * 攻击源端口
   */
  SourcePort?: Array<number | bigint>
  /**
   * 创建事件时间
   */
  CreateTime?: string
  /**
   * 更新事件时间
   */
  MergeTime?: string
  /**
   * 事件发生次数
   */
  Count?: number
  /**
   * 状态 0: 待处理 1:已防御 2:已处理 3: 已忽略 4: 已删除
   */
  Status?: number
  /**
   * 0 专业版,1 旗舰版,2 LH普惠版（仅限LH使用）,3  CVM普惠版（仅限CVM使用）
   */
  UpgradeType?: number
  /**
   * 0 不支持修复，1 支持修复
   */
  FixType?: number
  /**
   * 主机uuid
   */
  Uuid?: string
  /**
   * 主机额外信息
   */
  MachineExtraInfo?: MachineExtraInfo
}

/**
 * DescribeRansomDefenseStrategyMachines请求参数结构体
 */
export interface DescribeRansomDefenseStrategyMachinesRequest {
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
<li>Ips- string- 主机名称</li>
<li>Status - Uint64 - 0未绑定，1已绑定</li>
<li>Names- String - 主机名称</li>
   */
  Filters?: Array<Filters>
  /**
   * 排序方法 ASC DESC
   */
  Order?: string
  /**
   * 排序字段支持CreateTime
   */
  By?: string
  /**
   * 防勒索策略ID
   */
  Id?: number
}

/**
 * ExportBaselineFixList请求参数结构体
 */
export interface ExportBaselineFixListRequest {
  /**
   * <li>ItemName - String - 是否必填：否 - 项名称</li>
   */
  Filters?: Array<Filter>
  /**
   * 0:过滤的结果导出；1:全部导出
   */
  ExportAll?: number
}

/**
 * 资源管理账号基本信息
 */
export interface AssetUserDetail {
  /**
   * 主机内网IP
   */
  MachineIp?: string
  /**
   * 主机名称
   */
  MachineName?: string
  /**
   * 主机Uuid
   */
  Uuid?: string
  /**
   * 主机Quuid
   */
  Quuid?: string
  /**
   * 账号UID
   */
  Uid?: string
  /**
   * 账号GID
   */
  Gid?: string
  /**
   * 账号状态：0-禁用；1-启用
   */
  Status?: number
  /**
   * 是否有root权限：0-否；1是，999为空: 仅linux
   */
  IsRoot?: number
  /**
   * 上次登录时间
   */
  LastLoginTime?: string
  /**
   * 账号名称
   */
  Name?: string
  /**
   * 账号类型：0访客用户，1标准用户，2管理员用户 ,999为空,仅Windows
   */
  UserType?: number
  /**
   * 是否域账号：0否， 1是, 999为空  仅Windows
   */
  IsDomain?: number
  /**
   * 是否允许ssh登录，1是，0否, 999为空, 仅linux
   */
  IsSshLogin?: number
  /**
   * Home目录
   */
  HomePath?: string
  /**
   * Shell路径  仅linux
   */
  Shell?: string
  /**
   * 是否shell登录性，0不是；1是 仅linux
   */
  ShellLoginStatus?: number
  /**
   * 密码修改时间
   */
  PasswordChangeTime?: string
  /**
   * 密码过期时间  仅linux
   */
  PasswordDueTime?: string
  /**
   * 密码锁定时间：单位天, -1为永不锁定 999为空，仅linux
   */
  PasswordLockDays?: number
  /**
   * 备注
   */
  Remark?: string
  /**
   * 用户组名
   */
  GroupName?: string
  /**
   * 账号到期时间
   */
  DisableTime?: string
  /**
   * 最近登录终端
   */
  LastLoginTerminal?: string
  /**
   * 最近登录位置
   */
  LastLoginLoc?: string
  /**
   * 最近登录IP
   */
  LastLoginIp?: string
  /**
   * 密码过期提醒：单位天
   */
  PasswordWarnDays?: number
  /**
   * 密码修改设置：0-不可修改，1-可修改
   */
  PasswordChangeType?: number
  /**
   * 用户公钥列表
   */
  Keys?: Array<AssetUserKeyInfo>
  /**
   * 数据更新时间
   */
  UpdateTime?: string
}

/**
 * ModifyOrderAttribute返回参数结构体
 */
export interface ModifyOrderAttributeResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeAssetPortCount请求参数结构体
 */
export interface DescribeAssetPortCountRequest {
  /**
   * 搜索条件：返回指定端口号数据
   */
  Port?: number
}

/**
 * ModifyWebHookPolicy返回参数结构体
 */
export interface ModifyWebHookPolicyResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeFileTamperEvents返回参数结构体
 */
export interface DescribeFileTamperEventsResponse {
  /**
   * 核心文件事件列表
   */
  List?: Array<FileTamperEvent>
  /**
   * 数据总条数
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeVulLabels返回参数结构体
 */
export interface DescribeVulLabelsResponse {
  /**
   * 标签列表
   */
  List?: Array<string>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
<li>Ips - String - 是否必填：否 - 通过ip查询 </li>
<li>Names - String - 是否必填：否 - 通过实例名查询 </li>
<li>InstanceIds - String - 是否必填：否 - 通过实例id查询 </li>
<li>Status - String - 是否必填：否 - 客户端在线状态（OFFLINE: 离线/关机 | ONLINE: 在线 | UNINSTALLED：未安装 | AGENT_OFFLINE 离线| AGENT_SHUTDOWN 已关机）</li>
<li>Version - String  是否必填：否 - 当前防护版本（ PRO_VERSION：专业版 | BASIC_VERSION：基础版 | Flagship : 旗舰版 | ProtectedMachines: 专业版+旗舰版）</li>
<li>Risk - String 是否必填: 否 - 风险主机( yes ) </li>
<li>Os -String 是否必填: 否 - 操作系统( DescribeMachineOsList 接口 值 )
每个过滤条件只支持一个值，暂不支持多个值“或”关系查询</li>
<li>Quuid - String - 是否必填: 否 - 云服务器uuid  最大100条.</li>
<li>AddedOnTheFifteen- String 是否必填: 否 - 是否只查询15天内新增的主机( 1：是) </li>
<li> TagId- String 是否必填: 否 - 查询指定标签关联的主机列表 </li>
   */
  Filters?: Array<Filter>
  /**
   * 机器所属业务ID列表
   */
  ProjectIds?: Array<number | bigint>
}

/**
 * DescribeRansomDefenseBackupList返回参数结构体
 */
export interface DescribeRansomDefenseBackupListResponse {
  /**
   * 备份列表
   */
  List?: Array<RansomDefenseBackup>
  /**
   * 分页查询记录总数
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
   * 过滤条件：
<li>AliasName - String - 主机名筛选</li>
<li>TagIds - String - 主机标签id串，多个用英文用逗号分隔</li>
<li>Status - String - 状态：0-待处理 1-忽略  3-已修复  5-检测中  6-修复中  8-修复失败</li>
<li>Uuid - String数组 - Uuid串数组</li>
<li>Version - String数组 - 付费版本数组："Flagship"-旗舰版 "PRO_VERSION"-专业版 "BASIC_VERSION"-基础版</li>
<li>InstanceState - String数组 - 实例状态数组："PENDING"-创建中 "LAUNCH_FAILED"-创建失败 "RUNNING"-运行中 "STOPPED"-关机 "STARTING"-开机中 "STOPPING"-关机中 "REBOOTING"-重启中 "SHUTDOWN"-待销毁 "TERMINATING"-销毁中 "UNKNOWN"-未知（针对非腾讯云机器，且客户端离线的场景） </li>
   */
  Filters?: Array<Filter>
}

/**
 * 日志投递类型细节
 */
export interface DeliverTypeDetails {
  /**
   * 安全模块类型 1: 入侵检测 2: 漏洞管理 3: 基线管理 4: 高级防御 5:客户端相关 6: 资产指纹 7 主机列表 8 客户端上报
   */
  SecurityType: number
  /**
   * 安全模块下的日志类型
   */
  LogType: Array<number | bigint>
  /**
   * 主题ID
   */
  TopicId: string
  /**
   * 主题名
   */
  TopicName: string
  /**
   * 投递开关 0关闭 1开启
   */
  Switch: number
  /**
   * 投递状态，0未开启 1正常 2异常
   */
  Status?: number
  /**
   * 错误信息
   */
  ErrInfo?: string
  /**
   * 最近一次状态上报时间戳
   */
  StatusTime?: number
  /**
   * 日志集名
   */
  LogName?: string
  /**
   * 日志集ID
   */
  LogSetId?: string
  /**
   * 日志集所在地域
   */
  Region?: string
}

/**
 * ModifyNetAttackSetting返回参数结构体
 */
export interface ModifyNetAttackSettingResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 资产管理Web应用插件详情
 */
export interface AssetWebAppPluginInfo {
  /**
   * 名称
   */
  Name?: string
  /**
   * 描述
   */
  Desc?: string
  /**
   * 版本
   */
  Version?: string
  /**
   * 链接
   */
  Link?: string
}

/**
 * DeletePrivilegeRules请求参数结构体
 */
export interface DeletePrivilegeRulesRequest {
  /**
   * ID数组，最大100条。
   */
  Ids: Array<number | bigint>
}

/**
 * 主机列表查询接口相应数据HostList的TagList节点
 */
export interface RansomDefenseStrategyDetail {
  /**
   * 策略id
   */
  Id?: number
  /**
   * 操作uin
   */
  Uin?: string
  /**
   * 策略名称
   */
  Name?: string
  /**
   * 策略备注
   */
  Description?: string
  /**
   * 开启状态：0关闭，1开启
   */
  Status?: number
  /**
   * 是否对所有主机生效
   */
  IsAll?: number
  /**
   * 包含目录，用;分隔
   */
  IncludeDir?: string
  /**
   * 包含目录，用;分隔
   */
  ExcludeDir?: string
  /**
   * 备份模式： 0按周，1按天
   */
  BackupType?: number
  /**
   * 备份星期天数（1-7）：1;2;3;4
   */
  Weekday?: string
  /**
   * 备份执行时间点(0-23): 11:00;12:00
   */
  Hour?: string
  /**
   * 保存天数，0永久保存
   */
  SaveDay?: number
  /**
   * 创建时间
   */
  CreateTime?: string
  /**
   * 最近修改时间
   */
  ModifyTime?: string
  /**
   * 绑定机器数
   */
  MachineCount?: number
  /**
   * 策略关联事件数
   */
  EventCount?: number
}

/**
 * ModifyBaselinePolicyState请求参数结构体
 */
export interface ModifyBaselinePolicyStateRequest {
  /**
   * 策略Id
   */
  PolicyId: number
  /**
   * 开启状态[1:开启|0:未开启]
   */
  IsEnabled: number
}

/**
 * DescribeLicenseBindSchedule返回参数结构体
 */
export interface DescribeLicenseBindScheduleResponse {
  /**
   * 进度
   */
  Schedule?: number
  /**
   * 绑定任务详情
   */
  List?: Array<LicenseBindTaskDetail>
  /**
   * 总条数
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
 * DescribeLogType返回参数结构体
 */
export interface DescribeLogTypeResponse {
  /**
   * cls日志类型信息
   */
  Data?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyRiskDnsPolicyStatus返回参数结构体
 */
export interface ModifyRiskDnsPolicyStatusResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ExportPrivilegeEvents返回参数结构体
 */
export interface ExportPrivilegeEventsResponse {
  /**
   * 该参数已废弃
   */
  DownloadUrl?: string
  /**
   * 任务ID,需要到接口“异步导出任务”ExportTasks获取DownloadUrl下载地址
   */
  TaskId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ExportAssetRecentMachineInfo返回参数结构体
 */
export interface ExportAssetRecentMachineInfoResponse {
  /**
   * 下载地址
   */
  DownloadUrl?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeMachineRegionList请求参数结构体
 */
export type DescribeMachineRegionListRequest = null

/**
 * ExportAssetWebFrameList请求参数结构体
 */
export interface ExportAssetWebFrameListRequest {
  /**
   * 查询指定Quuid主机的信息
   */
  Quuid?: string
  /**
   * 过滤条件。
<li>Name - String - 是否必填：否 - 框架名</li>
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
   */
  Filters?: Array<Filter>
  /**
   * 排序方式，asc升序 或 desc降序
   */
  Order?: string
  /**
   * 可选排序：[FirstTime|JarCount]
   */
  By?: string
}

/**
 * ModifyBaselinePolicy返回参数结构体
 */
export interface ModifyBaselinePolicyResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 主机列表穿梭框
 */
export interface MachineSimple {
  /**
   * 主机名称。
   */
  MachineName?: string
  /**
   * 主机系统。
   */
  MachineOs?: string
  /**
   * 主机安全uuid，若客户端长时间不在线将返回空字符。
   */
  Uuid?: string
  /**
   * CVM或BM机器唯一Uuid。
   */
  Quuid?: string
  /**
   * 主机IP。
   */
  MachineIp?: string
  /**
   * 是否是专业版。
<li>true： 是</li>
<li>false：否</li>
   */
  IsProVersion?: boolean
  /**
   * 主机外网IP。
   */
  MachineWanIp?: string
  /**
   * 主机状态。
<li>POSTPAY: 表示后付费，即按量计费  </li>
<li>PREPAY: 表示预付费，即包年包月</li>
   */
  PayMode?: string
  /**
   * 标签信息
   */
  Tag?: Array<MachineTag>
  /**
   * 地域信息
   */
  RegionInfo?: RegionInfo
  /**
   * 实例状态请参考CVM实例列表InstanceState值
https://cloud.tencent.com/document/api/213/15753#Instance
   */
  InstanceState?: string
  /**
   * 项目ID
   */
  ProjectId?: number
  /**
   * 机器所属专区类型 CVM 云服务器, BM 黑石, ECM 边缘计算, LH 轻量应用服务器 ,Other 混合云专区
   */
  MachineType?: string
  /**
   * 内核版本
   */
  KernelVersion?: string
  /**
   * 防护版本 BASIC_VERSION 基础版， PRO_VERSION 专业版，Flagship 旗舰版，GENERAL_DISCOUNT 普惠版.
   */
  ProtectType?: string
  /**
   * 授权订单对象
   */
  LicenseOrder?: LicenseOrder
  /**
   * 云标签信息
   */
  CloudTags?: Array<Tags>
  /**
   * 实例ID
   */
  InstanceId?: string
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
  /**
   * 排序方式：根据请求次数排序：asc-升序/desc-降序
   */
  Order?: string
  /**
   * 排序字段：CreateTime-发生时间
   */
  By?: string
}

/**
 * DescribeCanNotSeparateMachine返回参数结构体
 */
export interface DescribeCanNotSeparateMachineResponse {
  /**
   * 不可隔离主机列表
   */
  List?: Array<CanNotSeparateInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 基线规则或项的分类
 */
export interface BaselineCategory {
  /**
   * 分类Id
   */
  CategoryId?: number
  /**
   * 分类名称
   */
  CategoryName?: string
  /**
   * 父分类ID,如果为0则没有父分类
   */
  ParentCategoryId?: number
  /**
   * 子分类下检测项总数
   */
  ItemCount?: number
}

/**
 * DescribeEventByTable返回参数结构体
 */
export interface DescribeEventByTableResponse {
  /**
   * 告警类型，爆破bruteattack，高危命令bash，恶意文件malware，恶意请求risk_dns，本地提权privilege_escalation，反弹shell reverse_shell，内存马java_shell
   */
  Type?: string
  /**
   * 事件内容的json编码字符串，字段结构对齐事件表
   */
  Value?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyLogStorageConfig请求参数结构体
 */
export interface ModifyLogStorageConfigRequest {
  /**
   * 是否修改有效期（已废弃）
   */
  IsModifyPeriod: boolean
  /**
   * 存储类型，string数组
   */
  Type?: Array<string>
  /**
   * 日志存储时长，3640表示不限
   */
  Period?: number
  /**
   * 日志存储时长单位，年year/月month/天day
   */
  Granularity?: string
}

/**
 * DescribeAttackVulTypeList请求参数结构体
 */
export type DescribeAttackVulTypeListRequest = null

/**
 * 资产管理负载信息
 */
export interface AssetLoadDetail {
  /**
   * 主机名称
   */
  MachineName?: string
  /**
   * 描述
   */
  Desc?: string
  /**
   * 负载
   */
  Value?: number
  /**
   * 主机Quuid
   */
  Quuid?: string
  /**
   * 主机Uuid
   */
  Uuid?: string
}

/**
 * DescribeLogStorageStatistic请求参数结构体
 */
export type DescribeLogStorageStatisticRequest = null

/**
 * DeleteBaselinePolicy请求参数结构体
 */
export interface DeleteBaselinePolicyRequest {
  /**
   * 策略Id
   */
  PolicyIds: Array<number | bigint>
}

/**
 * SetLocalStorageExpire请求参数结构体
 */
export interface SetLocalStorageExpireRequest {
  /**
   * 键
   */
  Key: string
  /**
   * 过期时间（单位：秒）
   */
  Expire: number
}

/**
 * ExportAssetInitServiceList请求参数结构体
 */
export interface ExportAssetInitServiceListRequest {
  /**
   * 服务器Uuid
   */
  Uuid?: string
  /**
   * 服务器Quuid
   */
  Quuid?: string
  /**
   * 过滤条件。
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
   * 排序方式，asc升序 或 desc降序
   */
  Order?: string
  /**
   * 排序方式：[FirstTime]
   */
  By?: string
}

/**
 * DeleteWebHookReceiver请求参数结构体
 */
export interface DeleteWebHookReceiverRequest {
  /**
   * id数组
   */
  Ids?: Array<number | bigint>
}

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
  ErrCode?: number
  /**
   * 校验信息
   */
  ErrMsg?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteLicenseRecord请求参数结构体
 */
export interface DeleteLicenseRecordRequest {
  /**
   * 授权ID ,可以用授权订单列表获取.
   */
  LicenseId: number
  /**
   * 授权类型
   */
  LicenseType: number
  /**
   * 资源ID
   */
  ResourceId: string
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
 * DescribeAssetWebLocationPathList返回参数结构体
 */
export interface DescribeAssetWebLocationPathListResponse {
  /**
   * 总数
   */
  Total?: number
  /**
   * 列表
   */
  Paths?: Array<AssetWebLocationPath>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
   * 该参数已废弃
   */
  DownloadUrl?: string
  /**
   * 任务ID,需要到接口“异步导出任务”ExportTasks获取DownloadUrl下载地址
   */
  TaskId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeBaselineRuleList返回参数结构体
 */
export interface DescribeBaselineRuleListResponse {
  /**
   * 无
   */
  List?: Array<BaselineRule>
  /**
   * 总数
   */
  Total?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 统计入侵检测
 */
export interface ScreenEventsCnt {
  /**
   * 展示内容：待处理风险总数，影响资产总数
   */
  Title?: string
  /**
   * 事件总数
   */
  Total?: number
  /**
   * name 具体展示内容类型： 攻击事件, 潜在风险, 失陷资产, 潜在风险资产
Value: 事件统计数
   */
  Category?: Array<ScreenNameValue>
}

/**
 * 暴力破解判定规则列表
 */
export interface BruteAttackRuleList {
  /**
   * 爆破事件发生的时间范围，单位：秒
   */
  TimeRange?: number
  /**
   * 爆破事件失败次数
   */
  LoginFailTimes?: number
  /**
   * 规则是否为空，为空则填充默认规则
   */
  Enable?: boolean
  /**
   * 爆破事件发生的时间范围，单位：秒（默认规则）
   */
  TimeRangeDefault?: number
  /**
   * 爆破事件失败次数（默认规则）
   */
  LoginFailTimesDefault?: number
}

/**
 * DescribeBaselineHostIgnoreList请求参数结构体
 */
export interface DescribeBaselineHostIgnoreListRequest {
  /**
   * 请求的规则
   */
  RuleID: number
  /**
   * 限制条数,默认10,最大100
   */
  Limit?: number
  /**
   * 偏移量,默认0
   */
  Offset?: number
}

/**
 * ExportFileTamperEvents返回参数结构体
 */
export interface ExportFileTamperEventsResponse {
  /**
   * 导出任务ID 可通过ExportTasks接口下载
   */
  TaskId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeBanStatus返回参数结构体
 */
export interface DescribeBanStatusResponse {
  /**
   * 阻断开关状态:
 0 -- 关闭 
 1 -- 高级阻断
 2 -- 基础阻断(只阻断情报库黑ip)
   */
  Status?: number
  /**
   * 是否弹窗提示信息 false: 关闭，true: 开启
   */
  ShowTips?: boolean
  /**
   * 是否开启智能过白模式
   */
  OpenSmartMode?: boolean
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
   * 过滤条件。<li>Status - String - 是否必填：否 - 处理状态  0-待处理 1-已加白 2-已删除 3-已修复 5-检测中 6-修复中 8-修复失败</li><li>ModifyTime - String - 是否必填：否 - 最近发生时间</li><li>Uuid- String - 是否必填：否 - 主机uuid查询</li><li>VulName- string -</li><li>VulCategory- string - 是否必填：否 - 漏洞类别 1: web-cms漏洞 2:应用漏洞  4: Linux软件漏洞 5: Windows系统漏洞</li><li>IsSupportDefense - int- 是否必填：否 - 是否支持防御 0:不支持 1:支持</li><li>Labels- string- 是否必填：否 - 标签搜索</li><li>IsSupportAutoFix- string- 是否必填：否 - 是否支持自动修复 0:不支持 1:支持</li><li>CvssScore- string- 是否必填：否 - CvssScore大于多少</li><li>AttackLevel- string- 是否必填：否 - 攻击热度大于多少</li>
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
 * DescribeLicenseBindList返回参数结构体
 */
export interface DescribeLicenseBindListResponse {
  /**
   * 总条数
   */
  TotalCount?: number
  /**
   * 绑定机器列表信息
   */
  List?: Array<LicenseBindDetail>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 基线信息
 */
export interface BaselineInfo {
  /**
   * 基线名
   */
  Name?: string
  /**
   * 危害等级：1-低危；2-中危；3-高危；4-严重
   */
  Level?: number
  /**
   * 检测项数量
   */
  RuleCount?: number
  /**
   * 影响服务器数量
   */
  HostCount?: number
  /**
   * 通过状态:0:未通过,1:已通过
   */
  Status?: number
  /**
   * 基线id
   */
  CategoryId?: number
  /**
   * 最后检测时间
   */
  LastScanTime?: string
  /**
   * 检测中状态: 5
   */
  MaxStatus?: number
  /**
   * 基线风险项
   */
  BaselineFailCount?: number
}

/**
 * DescribeWebHookReceiverUsage返回参数结构体
 */
export interface DescribeWebHookReceiverUsageResponse {
  /**
   * 告警接收人的关联策略使用信息
   */
  List?: Array<WebHookReceiverUsage>
  /**
   * 个数
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
  MachineIp?: string
  /**
   * 主机名称
   */
  MachineName?: string
  /**
   * 主机外网IP
   */
  MachineWanIp?: string
  /**
   * 主机Uuid
   */
  Uuid?: string
  /**
   * 主机Quuid
   */
  Quuid?: string
  /**
   * 主机业务组ID
   */
  ProjectId?: number
  /**
   * 主机标签
   */
  Tag?: Array<MachineTag>
  /**
   * 应用名称
   */
  Name?: string
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
  Type?: number
  /**
   * 二进制路径
   */
  BinPath?: string
  /**
   * 操作系统信息
   */
  OsInfo?: string
  /**
   * 关联进程数
   */
  ProcessCount?: number
  /**
   * 应用描述
   */
  Desc?: string
  /**
   * 版本号
   */
  Version?: string
  /**
   * 配置文件路径
   */
  ConfigPath?: string
  /**
   * 首次采集时间
   */
  FirstTime?: string
  /**
   * 数据更新时间
   */
  UpdateTime?: string
  /**
   * 是否新增[0:否|1:是]
   */
  IsNew?: number
  /**
   * 附加信息
   */
  MachineExtraInfo?: MachineExtraInfo
}

/**
 * DescribeJavaMemShellInfo请求参数结构体
 */
export interface DescribeJavaMemShellInfoRequest {
  /**
   * 事件Id
   */
  Id: number
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
 * ExportAssetAppList请求参数结构体
 */
export interface ExportAssetAppListRequest {
  /**
   * 查询指定Quuid主机的信息
   */
  Quuid?: string
  /**
   * 过滤条件。<li>AppName- string - 是否必填：否 - 应用名搜索</li><li>IP - String - 是否必填：否 - 主机ip</li><li>MachineName - String - 是否必填：否 - 主机名称</li><li>InstanceID - string - 是否必填：否 - 实例ID</li><li>Type - int - 是否必填：否 - 类型	: 仅linux0: 全部1: 运维2 : 数据库3 : 安全4 : 可疑应用5 : 系统架构6 : 系统应用7 : WEB服务99:其他</li><li>OsType - uint64 - 是否必填：否 - Windows/Linux</li>
   */
  Filters?: Array<AssetFilters>
  /**
   * 排序方式，asc升序 或 desc降序
   */
  Order?: string
  /**
   * 排序方式：[FirstTime|ProcessCount]
   */
  By?: string
}

/**
 * ModifyFileTamperEvents请求参数结构体
 */
export interface ModifyFileTamperEventsRequest {
  /**
   * Status 1 -- 加白 2 -- 删除 3 - 忽略
   */
  Status: number
  /**
   * 对应事件id
   */
  Ids: Array<number | bigint>
}

/**
 * ModifyOrderAttribute请求参数结构体
 */
export interface ModifyOrderAttributeRequest {
  /**
   * 授权类型 0 专业版-按量计费, 1专业版-包年包月 , 2 旗舰版-包年包月
   */
  LicenseType: number
  /**
   * 资源ID
   */
  ResourceId: string
  /**
   * 可编辑的属性名称 ,当前支持的有: 
alias 资源别名
projectId 项目ID
   */
  AttrName: string
  /**
   * 属性值
AttrName=alias时,任意字符串,最大字符15长度
AttrName=projectId时,项目ID必须是真实存在的
   */
  AttrValue: string
}

/**
 * java内存马事件信息
 */
export interface JavaMemShellInfo {
  /**
   * 事件ID
   */
  Id?: number
  /**
   * 服务器名称
   */
  Alias?: string
  /**
   * 服务器IP
   */
  HostIp?: string
  /**
   * 内存马类型  0:Filter型 1:Listener型 2:Servlet型 3:Interceptors型 4:Agent型 5:其他
   */
  Type?: number
  /**
   * 说明
   */
  Description?: string
  /**
   * 首次发现时间
   */
  CreateTime?: string
  /**
   * 最近检测时间
   */
  RecentFoundTime?: string
  /**
   * 处理状态  0 -- 待处理 1 -- 已加白 2 -- 已删除 3 - 已忽略  4 - 已手动处理
   */
  Status?: number
  /**
   * 服务器quuid
   */
  Quuid?: string
  /**
   * 主机额外信息
   */
  MachineExtraInfo?: MachineExtraInfo
  /**
   * 服务器uuid
   */
  Uuid?: string
  /**
   * 类名
   */
  ClassName?: string
  /**
   * 父类名
   */
  SuperClassName?: string
  /**
   * 继承的接口
   */
  Interfaces?: string
  /**
   * 注释
   */
  Annotations?: string
  /**
   * 所属的类加载器
   */
  LoaderClassName?: string
}

/**
 * DescribeAssetSystemPackageList返回参数结构体
 */
export interface DescribeAssetSystemPackageListResponse {
  /**
   * 记录总数
   */
  Total?: number
  /**
   * 列表
   */
  Packages?: Array<AssetSystemPackageInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ExportAssetWebFrameList返回参数结构体
 */
export interface ExportAssetWebFrameListResponse {
  /**
   * 异步下载任务ID，需要配合ExportTasks接口使用
   */
  TaskId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 安全事件消息数据。
 */
export interface SecurityDynamic {
  /**
   * 主机安全客户端UUID。
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
<li>UNKNOWNED: 可疑</li>
   */
  SecurityLevel: string
}

/**
 * CheckBashPolicyParams返回参数结构体
 */
export interface CheckBashPolicyParamsResponse {
  /**
   * 0=校验通过  1=规则名称校验不通过 2=正则表达式校验不通过
   */
  ErrCode?: number
  /**
   * 校验信息
   */
  ErrMsg?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeClientException返回参数结构体
 */
export interface DescribeClientExceptionResponse {
  /**
   * 事件总数量
   */
  TotalCount?: number
  /**
   * 事件详情
   */
  Records?: Array<RecordInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
  Total?: number
  /**
   * 记录列表
   */
  Machines?: Array<AssetMachineBaseInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeWebPageGeneralize请求参数结构体
 */
export type DescribeWebPageGeneralizeRequest = null

/**
 * 告警接收人
 */
export interface WebHookReceiver {
  /**
   * id
   */
  Id?: number
  /**
   * 接收人名称
   */
  Name?: string
  /**
   * webhook地址
   */
  Addr?: string
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
 * 网络攻击事件详情
 */
export interface NetAttackEventInfo {
  /**
   * 处理状态，0 待处理 1 已处理 2 已加白  3 已忽略 4 已删除 5: 已开启防御
   */
  Status?: number
  /**
   * 攻击源ip
   */
  SrcIP?: string
  /**
   * 攻击源地
   */
  Location?: string
  /**
   * 漏洞名称
   */
  VulName?: string
  /**
   * 漏洞id
   */
  VulId?: number
  /**
   * 漏洞CVE编号
   */
  CVEId?: string
  /**
   * 漏洞攻击热度
   */
  AttackLevel?: number
  /**
   * 漏洞防御状态，0关闭，1开启
   */
  VulDefenceStatus?: number
  /**
   * 漏洞是否支持防御，0:不支持 1:支持
   */
  VulSupportDefense?: number
  /**
   * 服务进程 base64
   */
  SvcPs?: string
  /**
   * 攻击数据包
   */
  NetPayload?: string
  /**
   * 异常行为
   */
  AbnormalAction?: string
  /**
   * 主机uuid
   */
  Uuid?: string
  /**
   * 事件id
   */
  Id?: number
  /**
   * 主机额外信息
   */
  MachineExtraInfo?: MachineExtraInfo
  /**
   * 目标端口
   */
  DstPort?: number
  /**
   * 攻击次数
   */
  Count?: number
  /**
   * 机器付费版本，0 基础版，1专业版，2旗舰版，3普惠版
   */
  PayVersion?: number
  /**
   * cvm uuid
   */
  Quuid?: string
  /**
   * 攻击发生时间
   */
  MergeTime?: string
  /**
   * 0: 尝试攻击 1:攻击成功
   */
  Type?: number
  /**
   * 0:无失陷行为 1: rce(命令执行) 2: dnslog 3: writefile
   */
  HostOpType?: number
  /**
   * 进程树,需要用base64 解码
   */
  HostOpProcessTree?: string
}

/**
 * GetLocalStorageItem返回参数结构体
 */
export interface GetLocalStorageItemResponse {
  /**
   * 值
   */
  Value?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeScreenDefenseTrends请求参数结构体
 */
export interface DescribeScreenDefenseTrendsRequest {
  /**
   * 开始时间
   */
  StartTime?: string
  /**
   * 结束时间
   */
  EndTime?: string
}

/**
 * 日志存储量记录
 */
export interface LogStorageRecord {
  /**
   * 年月份
   */
  Month?: string
  /**
   * 存储量，字节
   */
  UsedSize?: number
  /**
   * 总量，字节
   */
  InquireSize?: number
}

/**
 * DescribeBruteAttackList返回参数结构体
 */
export interface DescribeBruteAttackListResponse {
  /**
   * 总数
   */
  TotalCount?: number
  /**
   * 密码破解列表
   */
  BruteAttackList?: Array<BruteAttackInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeAssetInfo请求参数结构体
 */
export type DescribeAssetInfoRequest = null

/**
 * DescribeJavaMemShellPluginList请求参数结构体
 */
export interface DescribeJavaMemShellPluginListRequest {
  /**
   * 过滤条件：InstanceID、IP、

MachineName模糊查询, JavaShellStatus，Exception精确匹配
   */
  Filters?: Array<Filters>
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
 * 批量修复漏洞二次弹窗 漏洞主机信息
 */
export interface CanFixVulInfo {
  /**
   * 漏洞id
   */
  VulId?: number
  /**
   * 漏洞名称
   */
  VulName?: string
  /**
   * 该漏洞可修复的主机信息
   */
  HostList?: Array<VulInfoHostInfo>
  /**
   * 修复提示tag
   */
  FixTag?: Array<string>
  /**
   * 漏洞分类1 web cms漏洞,2应用漏洞,4linux软件漏洞,5windows系统漏洞
   */
  VulCategory?: number
}

/**
 * DescribeWebHookPolicy请求参数结构体
 */
export interface DescribeWebHookPolicyRequest {
  /**
   * 过滤条件
   */
  Filter?: Array<Filter>
  /**
   * 偏移量，默认为0。
   */
  Offset?: number
  /**
   * 需要返回的数量，默认为10，最大值为100
   */
  Limit?: number
  /**
   * 排序方式 [asc:升序|desc:降序]
   */
  Order?: string
  /**
   * 排序字段
   */
  By?: string
}

/**
 * EditReverseShellRules返回参数结构体
 */
export interface EditReverseShellRulesResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 漏洞概览
 */
export interface VulOverview {
  /**
   * 总数
   */
  TotalCount?: number
  /**
   * 今日新增数量
   */
  TodayCount?: number
}

/**
 * DescribeAssetUserKeyList返回参数结构体
 */
export interface DescribeAssetUserKeyListResponse {
  /**
   * 公钥列表
   */
  Keys?: Array<AssetUserKeyInfo>
  /**
   * 分区总数
   */
  Total?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeVulLabels请求参数结构体
 */
export type DescribeVulLabelsRequest = null

/**
 * DescribeAssetAppList请求参数结构体
 */
export interface DescribeAssetAppListRequest {
  /**
   * 查询指定Quuid主机的信息
   */
  Quuid?: string
  /**
   * 过滤条件。
<li>AppName- string - 是否必填：否 - 应用名搜索</li>
<li>IP - String - 是否必填：否 - 主机ip</li>
<li>MachineName - String - 是否必填：否 - 主机名称</li>
<li>InstanceID - string - 是否必填：否 - 实例ID</li>
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
   * 需要返回的数量，默认为10，最大值为100
   */
  Limit?: number
  /**
   * 偏移量，默认为0。
   */
  Offset?: number
  /**
   * 排序方式，asc升序 或 desc降序
   */
  Order?: string
  /**
   * 排序方式：[FirstTime|ProcessCount]
   */
  By?: string
}

/**
 * UntrustMalwares返回参数结构体
 */
export interface UntrustMalwaresResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 可用区信息
 */
export interface ZoneInfo {
  /**
   * 可用区名称
   */
  ZoneName?: string
}

/**
 * DescribeExpertServiceList返回参数结构体
 */
export interface DescribeExpertServiceListResponse {
  /**
   * 总条数
   */
  TotalCount?: number
  /**
   * 安全管家数据
   */
  List?: Array<SecurityButlerInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
  TotalCount?: number
  /**
   * 帐号统计列表。
   */
  AccountStatistics?: Array<AccountStatistics>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeProVersionStatus返回参数结构体
 */
export interface DescribeProVersionStatusResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeBashEventsInfoNew请求参数结构体
 */
export interface DescribeBashEventsInfoNewRequest {
  /**
   * 事件id
   */
  Id: number
}

/**
 * 大屏攻防趋势图
 */
export interface ScreenTrendsChart {
  /**
   * X轴 时间
   */
  X?: string
  /**
   * Y轴 数值
   */
  Y?: number
  /**
   * 统计分类类型 值：防御次数，攻击次数
   */
  Type?: string
}

/**
 * DeleteBaselineWeakPassword请求参数结构体
 */
export interface DeleteBaselineWeakPasswordRequest {
  /**
   * 弱口令Id
   */
  PasswordIds: Array<number | bigint>
}

/**
 * ScanAsset请求参数结构体
 */
export interface ScanAssetRequest {
  /**
   * 资产指纹类型id列表
   */
  AssetTypeIds?: Array<number | bigint>
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
  TotalCount?: number
  /**
   * 基线检测项列表
   */
  BaselineRuleList?: Array<BaselineRuleInfo>
  /**
   * 是否显示说明列：true-是，false-否
   */
  ShowRuleRemark?: boolean
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyMachineRemark请求参数结构体
 */
export interface ModifyMachineRemarkRequest {
  /**
   * 主机Quuid
   */
  Quuid: string
  /**
   * 备注信息
   */
  Remark?: string
}

/**
 * ModifyVulDefenceEventStatus返回参数结构体
 */
export interface ModifyVulDefenceEventStatusResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeBaselineItemRiskTop请求参数结构体
 */
export interface DescribeBaselineItemRiskTopRequest {
  /**
   * 策略ID
   */
  PolicyId?: number
}

/**
 * DeleteMaliciousRequests返回参数结构体
 */
export interface DeleteMaliciousRequestsResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeWebHookReceiver请求参数结构体
 */
export interface DescribeWebHookReceiverRequest {
  /**
   * 过滤条件
   */
  Filter?: Array<Filter>
  /**
   * 偏移量，默认为0。
   */
  Offset?: number
  /**
   * 需要返回的数量，默认为10，最大值为100
   */
  Limit?: number
  /**
   * 排序方式 [asc:升序|desc:降序]
   */
  Order?: string
  /**
   * 排序字段
   */
  By?: string
}

/**
 * 漏洞仓库列表信息
 */
export interface VulStoreListInfo {
  /**
   * 漏洞ID
   */
  VulId?: number
  /**
   * 漏洞级别
   */
  Level?: number
  /**
   * 漏洞名称
   */
  Name?: string
  /**
   * cve编号
   */
  CveId?: string
  /**
   * 1: web-cms漏洞 2:应用漏洞  4: Linux软件漏洞 5: Windows系统漏洞 0= 应急漏洞
   */
  VulCategory?: number
  /**
   * 发布时间
   */
  PublishDate?: string
  /**
   * 漏洞检测方法 0 - 版本比对, 1 - POC验证
   */
  Method?: number
  /**
   * 漏洞攻击热度
   */
  AttackLevel?: number
  /**
   * 漏洞是否支持自动修复
0-Windows/Linux均关闭; 1-Windows/Linux均打开; 2-仅Linux; 3-仅Windows
   */
  FixSwitch?: number
  /**
   * 漏洞是否支持防御
0:不支持 1:支持
   */
  SupportDefense?: number
}

/**
 * CreateIncidentBacktracking请求参数结构体
 */
export interface CreateIncidentBacktrackingRequest {
  /**
   * 主机安全quuid
   */
  Quuid: string
}

/**
 * DescribeVulDefencePluginStatus请求参数结构体
 */
export interface DescribeVulDefencePluginStatusRequest {
  /**
   * 过滤条件。
<li>Keywords - String - 是否必填：否 - 主机ip或别名筛选</li>
<li>Exception - String - 是否必填：否 - 插件状态 0:正常,1:异常,2:无java进程注入</li>
   */
  Filters?: Array<Filter>
  /**
   * 数据偏移
   */
  Offset?: number
  /**
   * 数据限制
   */
  Limit?: number
  /**
   * 排序，大小写无关：asc 升序，desc降序
   */
  Order?: string
  /**
   * 排序列，严格相等：CreateTime创建时间，ModifyTime更新时间
   */
  By?: string
}

/**
 * DescribeBashEventsInfoNew返回参数结构体
 */
export interface DescribeBashEventsInfoNewResponse {
  /**
   * 事件详情
   */
  BashEventsInfo?: BashEventsInfoNew
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * GetLocalStorageItem请求参数结构体
 */
export interface GetLocalStorageItemRequest {
  /**
   * 键
   */
  Key: string
}

/**
 * 企微机器人事件类型
 */
export interface WebHookEventKv {
  /**
   * 事件类型
   */
  Type: number
  /**
   * 事件内容
   */
  ControlBit: string
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
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 防勒索诱饵篡改事件
 */
export interface RansomDefenseEvent {
  /**
   * 事件id
   */
  Id?: number
  /**
   * 主机uuid
   */
  Uuid?: string
  /**
   * cvm uuid
   */
  Quuid?: string
  /**
   * 主机名称
   */
  HostName?: string
  /**
   * 事件状态 0待处理，1已处理，2已信任，3处理中，4已恢复备份
   */
  Status?: number
  /**
   * 被篡改文件路径
   */
  BaitFilePath?: string
  /**
   * 恶意文件路径
   */
  FilePath?: string
  /**
   * 恶意进程id
   */
  Pid?: number
  /**
   * 恶意进程参数
   */
  PidParam?: string
  /**
   * 恶意文件大小
   */
  FileSize?: number
  /**
   * 恶意文件md5
   */
  FileMd5?: string
  /**
   * 事件类型：0加密勒索，1文件篡改
   */
  Type?: number
  /**
   * 事件发送时间
   */
  CreateTime?: string
  /**
   * cvm 实例id
   */
  InstanceId?: string
  /**
   * 事件修改事件
   */
  ModifyTime?: string
  /**
   * 策略id
   */
  StrategyId?: number
  /**
   * 策略名称
   */
  StrategyName?: string
  /**
   * 主机外网ip
   */
  HostIp?: string
  /**
   * 主机内网ip
   */
  WanIp?: string
  /**
   * 进程树 base64 json
   */
  PsTree?: string
  /**
   * 进程启动时间
   */
  ProcessStartTime?: string
  /**
   * 主机拥有快照备份数
   */
  SnapshotNum?: number
}

/**
 * DeleteRaspRules请求参数结构体
 */
export interface DeleteRaspRulesRequest {
  /**
   * 待删除的规则ID数组 (最大100条)
   */
  IDs: Array<number | bigint>
}

/**
 * 异地登录合并后白名单
 */
export interface LoginWhiteCombinedInfo {
  /**
   * 白名单地域
   */
  Places?: Array<Place>
  /**
   * 白名单用户（多个用户逗号隔开）
   */
  UserName?: string
  /**
   * 白名单IP（多个IP逗号隔开）
   */
  SrcIp?: string
  /**
   * 地域字符串
   */
  Locale?: string
  /**
   * 备注
   */
  Remark?: string
  /**
   * 开始时间
   */
  StartTime?: string
  /**
   * 结束时间
   */
  EndTime?: string
  /**
   * 是否对全局生效, 1：全局有效 0: 对指定主机列表生效'
   */
  IsGlobal?: number
  /**
   * 白名单名字：IsLocal=1时固定为：全部服务器；单台机器时为机器内网IP，多台服务器时为服务器数量，如：11台
   */
  Name?: string
  /**
   * 仅在单台服务器时，返回服务器名称
   */
  Desc?: string
  /**
   * 白名单ID
   */
  Id?: number
  /**
   * 创建时间
   */
  CreateTime?: string
  /**
   * 最近修改时间
   */
  ModifyTime?: string
  /**
   * 服务器Uuid
   */
  Uuid?: string
  /**
   * 登陆地
   */
  Locations?: string
}

/**
 * ExportBaselineRuleDetectList请求参数结构体
 */
export interface ExportBaselineRuleDetectListRequest {
  /**
   * <li>RuleName - string - 是否必填：否 - 规则名称</li><li>IsPassed - int - 是否必填：否 - 是否通过</li><li>RiskTier - int - 是否必填：否 - 风险等级</li>
   */
  Filters?: Array<Filter>
  /**
   * 0:过滤的结果导出；1:全部导出
   */
  ExportAll?: number
  /**
   * 0:导出界面展示；1:导出全部结果事件
   */
  IsExportDetail?: number
}

/**
 * SetLocalStorageExpire返回参数结构体
 */
export interface SetLocalStorageExpireResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeBaselineDownloadList返回参数结构体
 */
export interface DescribeBaselineDownloadListResponse {
  /**
   * 无
   */
  List?: Array<BaselineDownload>
  /**
   * 总数
   */
  Total?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * RecoverMalwares请求参数结构体
 */
export interface RecoverMalwaresRequest {
  /**
   * 木马Id数组（最大100条）
   */
  Ids: Array<number | bigint>
}

/**
 * DescribeAssetTypeTop返回参数结构体
 */
export interface DescribeAssetTypeTopResponse {
  /**
   * 账号Top5
   */
  User?: Array<AssetKeyVal>
  /**
   * 端口Top5
   */
  Port?: Array<AssetKeyVal>
  /**
   * 进程Top5
   */
  Process?: Array<AssetKeyVal>
  /**
   * 软件Top5
   */
  Software?: Array<AssetKeyVal>
  /**
   * 数据库Top5
   */
  Database?: Array<AssetKeyVal>
  /**
   * Web应用Top5
   */
  WebApp?: Array<AssetKeyVal>
  /**
   * Web站点Top5
   */
  WebLocation?: Array<AssetKeyVal>
  /**
   * Web框架Top5
   */
  WebFrame?: Array<AssetKeyVal>
  /**
   * Web服务Top5
   */
  WebService?: Array<AssetKeyVal>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeVulDefencePluginExceptionCount请求参数结构体
 */
export type DescribeVulDefencePluginExceptionCountRequest = null

/**
 * DescribeLogIndex请求参数结构体
 */
export type DescribeLogIndexRequest = null

/**
 * 标签相关服务器信息
 */
export interface TagMachine {
  /**
   * ID
   */
  Id?: string
  /**
   * 主机ID
   */
  Quuid?: string
  /**
   * 主机名称
   */
  MachineName?: string
  /**
   * 主机内网IP
   */
  MachineIp?: string
  /**
   * 主机外网IP
   */
  MachineWanIp?: string
  /**
   * 主机区域
   */
  MachineRegion?: string
  /**
   * 主机区域类型
   */
  MachineType?: string
}

/**
 * DescribeAssetCoreModuleInfo返回参数结构体
 */
export interface DescribeAssetCoreModuleInfoResponse {
  /**
   * 内核模块详情
   */
  Module?: AssetCoreModuleDetail
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 授权绑定任务详情
 */
export interface LicenseBindTaskDetail {
  /**
   * 云服务器UUID
   */
  Quuid?: string
  /**
   * 错误信息
   */
  ErrMsg?: string
  /**
   * 0 执行中, 1 成功,2失败
   */
  Status?: number
  /**
   * 修复建议
   */
  FixMessage?: string
  /**
   * 机器额外信息
   */
  MachineExtraInfo?: MachineExtraInfo
}

/**
 * DescribeAssetEnvList请求参数结构体
 */
export interface DescribeAssetEnvListRequest {
  /**
   * 服务器Uuid
   */
  Uuid?: string
  /**
   * 服务器Quuid
   */
  Quuid?: string
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
   * 偏移量，默认为0。
   */
  Offset?: number
  /**
   * 需要返回的数量，默认为10，最大值为100
   */
  Limit?: number
  /**
   * 排序方式，asc升序 或 desc降序
   */
  Order?: string
  /**
   * 排序方式：[FirstTime]
   */
  By?: string
}

/**
 * 标签信息
 */
export interface Tag {
  /**
   * 标签ID
   */
  Id?: number
  /**
   * 标签名
   */
  Name?: string
  /**
   * 服务器数
   */
  Count?: number
}

/**
 * StopNoticeBanTips请求参数结构体
 */
export type StopNoticeBanTipsRequest = null

/**
 * 大屏可视化攻防状态
 */
export interface ScreenProtection {
  /**
   * 类型值：文件查杀，暴力破解，漏洞扫描，基线检测
   */
  Name?: string
  /**
   * 文件查杀:  0:从未检测过，或0资产付费情况, 1:已检测，存在恶意文件, 2:已检测，未开启隔离防护, 3:已检测且已开启防护且无风险；
暴力破解: 0:未开启防护（0付费资产情况）1:已开启自动阻断；
漏洞扫描: 0:从未检测过，或0资产付费情况, 1:存在漏洞风险, 2:无风险；
基线检测: 0:从未检测过，或0资产付费情况, 1:存在基线风险,2:无风险；
   */
  Status?: number
}

/**
 * DescribeScanMalwareSchedule请求参数结构体
 */
export type DescribeScanMalwareScheduleRequest = null

/**
 * 基线扫描参数
 */
export interface BaselineDetectParam {
  /**
   * 检测的策略集合
   */
  PolicyIds?: Array<number | bigint>
  /**
   * 检测的规则集合
   */
  RuleIds?: Array<number | bigint>
  /**
   * 检测项集合
   */
  ItemIds?: Array<number | bigint>
  /**
   * 检测的主机ID集合
   */
  HostIds?: Array<string>
}

/**
 * DescribeBashEvents返回参数结构体
 */
export interface DescribeBashEventsResponse {
  /**
   * 总条数
   */
  TotalCount?: number
  /**
   * 高危命令事件列表
   */
  List?: Array<BashEvent>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 索引的value描述
 */
export interface ValueInfo {
  /**
   * 字段的分词符
   */
  Tokenizer?: string
  /**
   * 字段类型
   */
  Type?: string
  /**
   * 字段是否开启分析功能
   */
  SqlFlag?: boolean
  /**
   * 是否包含中文
   */
  ContainZH?: boolean
}

/**
 * ModifyVulDefenceSetting返回参数结构体
 */
export interface ModifyVulDefenceSettingResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeEventByTable请求参数结构体
 */
export interface DescribeEventByTableRequest {
  /**
   * 事件表名
   */
  TableName: string
  /**
   * 事件表id号
   */
  Ids: Array<number | bigint>
}

/**
 * DescribeTrialReport返回参数结构体
 */
export interface DescribeTrialReportResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
   * 过滤条件。
<li>HostName - String - 是否必填：否 - 主机名</li>
<li>Hostip - String - 是否必填：否 - 主机内网IP</li>
<li>RuleCategory - Int - 是否必填：否 - 策略类型,全部或者单选(0:系统 1:用户)</li>
<li>RuleName - String - 是否必填：否 - 策略名称</li>
<li>RuleLevel - Int - 是否必填：否 - 威胁等级,可以多选</li>
<li>Status - Int - 是否必填：否 - 处理状态,可多选(0:待处理 1:已处理 2:已加白  3:已忽略 4:已删除 5:已拦截)</li>
<li>DetectBy - Int - 是否必填：否 - 数据来源,可多选(0:bash日志 1:实时监控)</li>
<li>StartTime - String - 是否必填：否 - 开始时间</li>
<li>EndTime - String - 是否必填：否 - 结束时间</li>
   */
  Filters?: Array<Filter>
  /**
   * 偏移量，默认为0。
   */
  Offset?: number
  /**
   * 排序方式：根据请求次数排序：asc-升序/desc-降序
   */
  Order?: string
  /**
   * 排序字段：CreateTime-发生时间。ModifyTime-处理时间
   */
  By?: string
}

/**
 * DeleteMachineClearHistory请求参数结构体
 */
export interface DeleteMachineClearHistoryRequest {
  /**
   * 需要删除的记录id值,最大长度100个
   */
  Ids: Array<number | bigint>
}

/**
 * DescribeLogHistogram返回参数结构体
 */
export interface DescribeLogHistogramResponse {
  /**
   * 周期内统计结果详情
   */
  Data?: Array<LogHistogram>
  /**
   * 统计周期： 单位ms
   */
  Period?: number
  /**
   * 命中关键字的日志总条数
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeUsersConfig请求参数结构体
 */
export interface DescribeUsersConfigRequest {
  /**
   * 配置名称
<li>license_monitor 授权监控配置 0 关闭, 1开启</li>
   */
  ConfigName: string
}

/**
 * DeleteMachine请求参数结构体
 */
export interface DeleteMachineRequest {
  /**
   * 主机安全客户端Uuid。
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
  Total?: number
  /**
   * 站点列表
   */
  Locations?: Array<AssetWebLocationBaseInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeAssetDiskList返回参数结构体
 */
export interface DescribeAssetDiskListResponse {
  /**
   * 磁盘分区列表
   */
  Disks?: Array<AssetDiskPartitionInfo>
  /**
   * 分区总数
   */
  Total?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ExportAssetPlanTaskList请求参数结构体
 */
export interface ExportAssetPlanTaskListRequest {
  /**
   * 服务器Uuid
   */
  Uuid?: string
  /**
   * 服务器Quuid
   */
  Quuid?: string
  /**
   * 过滤条件。
<li>User- string - 是否必填：否 - 用户</li>
<li>Status- int - 是否必填：否 - 默认启用状态：0未启用， 1启用 </li>
   */
  Filters?: Array<AssetFilters>
  /**
   * 排序方式，asc升序 或 desc降序
   */
  Order?: string
  /**
   * 排序方式：[FirstTime]
   */
  By?: string
}

/**
 * 客户端异常信息结构
 */
export interface RecordInfo {
  /**
   * 主机ip
   */
  HostIP?: string
  /**
   * 主机实例id
   */
  InstanceID?: string
  /**
   * 客户端离线时间
   */
  OfflineTime?: string
  /**
   * 客户端卸载时间
   */
  UninstallTime?: string
  /**
   * 客户端卸载调用链
   */
  UninstallCmd?: string
  /**
   * 客户端uuid
   */
  Uuid?: string
}

/**
 * DescribeAssetHostTotalCount返回参数结构体
 */
export interface DescribeAssetHostTotalCountResponse {
  /**
   * 各项资源数量
system : 资源监控
account: 账号
port: 端口
process: 进程
app: 应用软件
database:数据库
webapp: Web应用
webframe: Web框架
webservice: Web服务
weblocation: Web站点
systempackage: 系统安装包
jar: jar包
initservice:启动服务
env: 环境变量
coremodule: 内核模块
   */
  Types?: Array<AssetKeyVal>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeMachineSnapshot请求参数结构体
 */
export interface DescribeMachineSnapshotRequest {
  /**
   * cvm id 集合
   */
  Quuids: Array<string>
  /**
   * 查询快照类型0 最近一个 1所有
   */
  Type: number
  /**
   * 分页个数
   */
  Limit: number
  /**
   * 分页步长
   */
  Offset: number
}

/**
 * StopAssetScan返回参数结构体
 */
export interface StopAssetScanResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
 * 本地提权数据
 */
export interface PrivilegeEscalationProcess {
  /**
   * 数据ID
   */
  Id?: number
  /**
   * 主机安全ID
   */
  Uuid?: string
  /**
   * 主机ID
   */
  Quuid?: string
  /**
   * 主机内网IP
   */
  Hostip?: string
  /**
   * 进程名
   */
  ProcessName?: string
  /**
   * 进程路径
   */
  FullPath?: string
  /**
   * 执行命令
   */
  CmdLine?: string
  /**
   * 用户名
   */
  UserName?: string
  /**
   * 用户组
   */
  UserGroup?: string
  /**
   * 进程文件权限
   */
  ProcFilePrivilege?: string
  /**
   * 父进程名
   */
  ParentProcName?: string
  /**
   * 父进程用户名
   */
  ParentProcUser?: string
  /**
   * 父进程用户组
   */
  ParentProcGroup?: string
  /**
   * 父进程路径
   */
  ParentProcPath?: string
  /**
   * 进程树
   */
  ProcTree?: string
  /**
   * 处理状态：0-待处理 2-白名单 3-已处理 4-已忽略
   */
  Status?: number
  /**
   * 发生时间
   */
  CreateTime?: string
  /**
   * 机器名
   */
  MachineName?: string
  /**
   * 附加信息
   */
  MachineExtraInfo?: MachineExtraInfo
  /**
   * 进程id
   */
  Pid?: number
}

/**
 * DescribeProtectNetList返回参数结构体
 */
export interface DescribeProtectNetListResponse {
  /**
   * 总条数
   */
  TotalCount?: number
  /**
   * 安全管家数据
   */
  List?: Array<ProtectNetInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
  Ids: Array<number | bigint>
}

/**
 * key-val类型的通用数据结构
 */
export interface AssetKeyVal {
  /**
   * 标签
   */
  Key?: string
  /**
   * 数量
   */
  Value?: number
  /**
   * 描述信息
   */
  Desc?: string
  /**
   * 今日新增数量
   */
  NewCount?: number
}

/**
 * 资产管理Web站点列表信息
 */
export interface AssetWebLocationInfo {
  /**
   * 域名
   */
  Name?: string
  /**
   * 站点端口
   */
  Port?: string
  /**
   * 站点协议
   */
  Proto?: string
  /**
   * 服务类型
   */
  ServiceType?: string
  /**
   * 安全模块状态：0未启用，1启用，999空，仅nginx
   */
  SafeStatus?: number
  /**
   * 运行用户
   */
  User?: string
  /**
   * 主目录
   */
  MainPath?: string
  /**
   * 启动命令
   */
  Command?: string
  /**
   * 绑定IP
   */
  Ip?: string
  /**
   * 数据更新时间
   */
  UpdateTime?: string
}

/**
 * ChangeRuleEventsIgnoreStatus返回参数结构体
 */
export interface ChangeRuleEventsIgnoreStatusResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
  Quuid?: string
  /**
   * 服务器uuid
   */
  Uuid?: string
  /**
   * 服务器内网IP
   */
  MachineIp?: string
  /**
   * 服务器名称
   */
  MachineName?: string
  /**
   * 操作系统名称
   */
  OsInfo?: string
  /**
   * CPU信息
   */
  Cpu?: string
  /**
   * 内存容量：单位G
   */
  MemSize?: number
  /**
   * 内存使用率百分比
   */
  MemLoad?: string
  /**
   * 硬盘容量：单位G
   */
  DiskSize?: number
  /**
   * 硬盘使用率百分比
   */
  DiskLoad?: string
  /**
   * 分区数
   */
  PartitionCount?: number
  /**
   * 主机外网IP
   */
  MachineWanIp?: string
  /**
   * Cpu数量
   */
  CpuSize?: number
  /**
   * Cpu负载
   */
  CpuLoad?: string
  /**
   * 防护级别：0基础版，1专业版，2旗舰版，3普惠版
   */
  ProtectLevel?: number
  /**
   * 风险状态：UNKNOW-未知，RISK-风险，SAFT-安全
   */
  RiskStatus?: string
  /**
   * 已防护天数
   */
  ProtectDays?: number
  /**
   * 专业版开通时间
   */
  BuyTime?: string
  /**
   * 专业版到期时间
   */
  EndTime?: string
  /**
   * 内核版本
   */
  CoreVersion?: string
  /**
   * Linux/Windows
   */
  OsType?: string
  /**
   * agent版本
   */
  AgentVersion?: string
  /**
   * 安装时间
   */
  InstallTime?: string
  /**
   * 系统启动时间
   */
  BootTime?: string
  /**
   * 最后上线时间
   */
  LastLiveTime?: string
  /**
   * 生产商
   */
  Producer?: string
  /**
   * 序列号
   */
  SerialNumber?: string
  /**
   * 网卡
   */
  NetCards?: Array<AssetNetworkCardInfo>
  /**
   * 分区
   */
  Disks?: Array<AssetDiskPartitionInfo>
  /**
   * 0在线，1已离线
   */
  Status?: number
  /**
   * 业务组ID
   */
  ProjectId?: number
  /**
   * 设备型号
   */
  DeviceVersion?: string
  /**
   * 离线时间
   */
  OfflineTime?: string
  /**
   * 主机ID
   */
  InstanceId?: string
  /**
   * 数据更新时间
   */
  UpdateTime?: string
  /**
   * 主机二外信息
   */
  MachineExtraInfo?: MachineExtraInfo
  /**
   * CpuLoadVul
   */
  CpuLoadVul?: string
  /**
   * 时间
   */
  FirstTime?: string
}

/**
 * SeparateMalwares请求参数结构体
 */
export interface SeparateMalwaresRequest {
  /**
   * 木马事件ID数组。(最大100条)
   */
  Ids: Array<number | bigint>
  /**
   * 是否杀掉进程
   */
  KillProcess?: boolean
}

/**
 * 资源管理数据库列表信息
 */
export interface AssetDatabaseBaseInfo {
  /**
   * 主机内网IP
   */
  MachineIp?: string
  /**
   * 主机外网IP
   */
  MachineWanIp?: string
  /**
   * 主机Quuid
   */
  Quuid?: string
  /**
   * 主机Uuid
   */
  Uuid?: string
  /**
   * 操作系统信息
   */
  OsInfo?: string
  /**
   * 主机业务组ID
   */
  ProjectId?: number
  /**
   * 主机标签
   */
  Tag?: Array<MachineTag>
  /**
   * 数据库名
   */
  Name?: string
  /**
   * 版本
   */
  Version?: string
  /**
   * 监听端口
   */
  Port?: string
  /**
   * 协议
   */
  Proto?: string
  /**
   * 运行用户
   */
  User?: string
  /**
   * 绑定IP
   */
  Ip?: string
  /**
   * 配置文件路径
   */
  ConfigPath?: string
  /**
   * 日志文件路径
   */
  LogPath?: string
  /**
   * 数据路径
   */
  DataPath?: string
  /**
   * 运行权限
   */
  Permission?: string
  /**
   * 错误日志路径
   */
  ErrorLogPath?: string
  /**
   * 插件路径
   */
  PlugInPath?: string
  /**
   * 二进制路径
   */
  BinPath?: string
  /**
   * 启动参数
   */
  Param?: string
  /**
   * 数据库ID
   */
  Id?: string
  /**
   * 数据更新时间
   */
  UpdateTime?: string
  /**
   * 首次采集时间
   */
  FirstTime?: string
  /**
   * 是否新增[0:否|1:是]
   */
  IsNew?: number
  /**
   * 主机名称
   */
  MachineName?: string
  /**
   *  附加信息
   */
  MachineExtraInfo?: MachineExtraInfo
}

/**
 * 授权订单对象内容
 */
export interface LicenseOrder {
  /**
   * 授权ID
   */
  LicenseId?: number
  /**
   * 授权类型
   */
  LicenseType?: number
  /**
   * 授权订单资源状态
   */
  Status?: number
  /**
   * 订单类型
   */
  SourceType?: number
  /**
   * 资源ID
   */
  ResourceId?: string
}

/**
 * DeletePrivilegeRules返回参数结构体
 */
export interface DeletePrivilegeRulesResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateMalwareWhiteList返回参数结构体
 */
export interface CreateMalwareWhiteListResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateWhiteListOrder返回参数结构体
 */
export interface CreateWhiteListOrderResponse {
  /**
   * 资源对象
   */
  Resource?: OrderResource
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
  List?: Array<TagMachine>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeHotVulTop返回参数结构体
 */
export interface DescribeHotVulTopResponse {
  /**
   * 漏洞信息
   */
  List?: Array<VulStoreListInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeRansomDefenseMachineStrategyInfo请求参数结构体
 */
export interface DescribeRansomDefenseMachineStrategyInfoRequest {
  /**
   * 主机Quuid列表
   */
  Quuids: Array<string>
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
 * DescribeProductStatus返回参数结构体
 */
export interface DescribeProductStatusResponse {
  /**
   * 接口调用返回状态码
   */
  ReturnCode?: number
  /**
   * 接口调用返回信息
   */
  ReturnMsg?: string
  /**
   * 防护状态及试用信息
   */
  Data?: ProductStatusInfo
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyJavaMemShellPluginSwitch请求参数结构体
 */
export interface ModifyJavaMemShellPluginSwitchRequest {
  /**
   * 主机quuid数组
   */
  Quuids: Array<string>
  /**
   * 插件目标状态：0: 关闭 1: 开启
   */
  JavaShellStatus: number
}

/**
 * DescribeIgnoreHostAndItemConfig返回参数结构体
 */
export interface DescribeIgnoreHostAndItemConfigResponse {
  /**
   * 受影响检测项
   */
  ItemSet?: Array<BaselineItemInfo>
  /**
   * 受影响主机
   */
  HostSet?: Array<BaselineHost>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * RemoveLocalStorageItem返回参数结构体
 */
export interface RemoveLocalStorageItemResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeFileTamperRuleInfo返回参数结构体
 */
export interface DescribeFileTamperRuleInfoResponse {
  /**
   * 规则详情信息
   */
  FileTamperRuleDetail?: FileTamperRuleDetail
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeSafeInfo请求参数结构体
 */
export type DescribeSafeInfoRequest = null

/**
 * DescribeVdbAndPocInfo返回参数结构体
 */
export interface DescribeVdbAndPocInfoResponse {
  /**
   * 病毒库更新时间。
   */
  VdbUpdateTime: string
  /**
   * 漏洞库更新时间。
   */
  PocUpdateTime: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeAttackEvents返回参数结构体
 */
export interface DescribeAttackEventsResponse {
  /**
   * 攻击事件列表
   */
  List?: Array<NetAttackEvent>
  /**
   * 总条数
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeRansomDefenseMachineStrategyInfo返回参数结构体
 */
export interface DescribeRansomDefenseMachineStrategyInfoResponse {
  /**
   * 策略ID列表,0表示未绑定任何策略
   */
  StrategyIds?: Array<number | bigint>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeReverseShellEventInfo返回参数结构体
 */
export interface DescribeReverseShellEventInfoResponse {
  /**
   * 反弹shell详情信息
   */
  ReverseShellEventInfo?: ReverseShellEventInfo
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ExportJavaMemShellPlugins请求参数结构体
 */
export interface ExportJavaMemShellPluginsRequest {
  /**
   * 过滤条件：Keywords: ip或者主机名模糊查询, Pid精确匹配，MainClass模糊匹配
   */
  Filters?: Array<Filter>
  /**
   * 导出字段
   */
  Where?: Array<string>
}

/**
 * DescribeBanWhiteList返回参数结构体
 */
export interface DescribeBanWhiteListResponse {
  /**
   * 总记录数
   */
  TotalCount?: number
  /**
   * 白名单列表
   */
  WhiteList?: Array<BanWhiteListDetail>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyBaselineRuleIgnore返回参数结构体
 */
export interface ModifyBaselineRuleIgnoreResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateVulFix返回参数结构体
 */
export interface CreateVulFixResponse {
  /**
   * 任务id
   */
  FixId?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
  TotalCount?: number
  /**
   * 端口统计数据列表
   */
  OpenPortStatistics?: Array<OpenPortStatistics>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ExportRiskDnsEventList请求参数结构体
 */
export interface ExportRiskDnsEventListRequest {
  /**
   * <li>MachineName  主机名称



InstanceID  实例ID  

 

IP   内网IP或公网IP - 是否必填：否 - 主机Ip或别名筛选</li>
<li>HostId - String - 是否必填：否 - 主机Id</li>
<li>AgentId - String - 是否必填：否 - 客户端Id</li>
<li>PolicyType - String - 是否必填：否 - 策略类型,0:系统策略1:用户自定义策略</li>
<li>Domain - String - 是否必填：否 - 域名(先对域名做urlencode,再base64)</li>
<li>HandleStatus - String - 是否必填：否 - 状态筛选0:待处理；2:信任；3:不信任</li>
<li>BeginTime - String - 是否必填：否 - 最近访问开始时间</li>
<li>EndTime - String - 是否必填：否 - 最近访问结束时间</li>
   */
  Filters?: Array<Filter>
  /**
   * 排序方式：[ASC:升序|DESC:降序]
   */
  Order?: string
  /**
   * 排序字段：[AccessCount:请求次数|LastTime:最近请求时间]
   */
  By?: string
}

/**
 * DescribeRaspMaxCpu返回参数结构体
 */
export interface DescribeRaspMaxCpuResponse {
  /**
   * rasp当前最大cpu限制，0<cpu<=100，默认100表示不限制
   */
  RaspMaxCpu?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeMachineGeneral请求参数结构体
 */
export type DescribeMachineGeneralRequest = null

/**
 * ExportRiskProcessEvents返回参数结构体
 */
export interface ExportRiskProcessEventsResponse {
  /**
   * 任务ID,需要到接口“异步导出任务”ExportTasks获取DownloadUrl下载地址
   */
  TaskId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeAssetDatabaseCount返回参数结构体
 */
export interface DescribeAssetDatabaseCountResponse {
  /**
   * 各数据库数量
   */
  Databases?: Array<AssetKeyVal>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
<li>Status - String - 是否必填：否 - 状态筛选 4待处理,5信任,6已隔离,10隔离中,11恢复隔离中,14 已处理</li>
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
   * 昨日【专业版-按量付费】扣费明细,(实际已账单为准)
   */
  PostPayCost?: number
  /**
   * 新增主机是否自动开通专业版
   */
  IsAutoOpenProVersion?: boolean
  /**
   * 专业版主机数
   */
  ProVersionNum?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteTags返回参数结构体
 */
export interface DeleteTagsResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
  MachineIp?: string
  /**
   * 主机外网IP
   */
  MachineWanIp?: string
  /**
   * 主机名称
   */
  MachineName?: string
  /**
   * 操作系统信息
   */
  OsInfo?: string
  /**
   * 主机Uuid
   */
  Uuid?: string
  /**
   * 主机Quuid
   */
  Quuid?: string
  /**
   * 账号UID
   */
  Uid?: string
  /**
   * 账号GID
   */
  Gid?: string
  /**
   * 账号状态：0-禁用；1-启用
   */
  Status?: number
  /**
   * 是否有root权限：0-否；1是，999为空: 仅linux
   */
  IsRoot?: number
  /**
   * 登录方式：0-不可登录；1-只允许key登录；2只允许密码登录；3-允许key和密码，999为空，仅linux
   */
  LoginType?: number
  /**
   * 上次登录时间
   */
  LastLoginTime?: string
  /**
   * 账号名称
   */
  Name?: string
  /**
   * 主机业务组ID
   */
  ProjectId?: number
  /**
   * 账号类型：0访客用户，1标准用户，2管理员用户 ,999为空,仅Windows
   */
  UserType?: number
  /**
   * 是否域账号：0否， 1是，2否, 999为空  仅Windows
   */
  IsDomain?: number
  /**
   * 是否有sudo权限，1是，0否, 999为空, 仅linux
   */
  IsSudo?: number
  /**
   * 是否允许ssh登录，1是，0否, 999为空, 仅linux
   */
  IsSshLogin?: number
  /**
   * Home目录
   */
  HomePath?: string
  /**
   * Shell路径  仅linux
   */
  Shell?: string
  /**
   * 是否shell登录性，0不是；1是 仅linux
   */
  ShellLoginStatus?: number
  /**
   * 密码修改时间
   */
  PasswordChangeTime?: string
  /**
   * 密码过期时间  仅linux
   */
  PasswordDueTime?: string
  /**
   * 密码锁定时间：单位天, -1为永不锁定 999为空，仅linux
   */
  PasswordLockDays?: number
  /**
   * 密码状态：1正常 2即将过期 3已过期 4已锁定 999为空 仅linux
   */
  PasswordStatus?: number
  /**
   * 更新时间
   */
  UpdateTime?: string
  /**
   * 首次采集时间
   */
  FirstTime?: string
  /**
   * 是否新增[0:否|1:是]
   */
  IsNew?: number
  /**
   * 
 附加信息
   */
  MachineExtraInfo?: MachineExtraInfo
}

/**
 * ModifyRiskEventsStatus请求参数结构体
 */
export interface ModifyRiskEventsStatusRequest {
  /**
   * 操作-0:标记已处理,1:忽略,2:删除记录,3:木马隔离,4:木马恢复隔离,5:木马信任,6:木马取消信任,7:查杀异常进程,8:加入白名单
   */
  Operate: number
  /**
   * 操作事件类型，文件查杀：MALWARE，异常登录：HOST_LOGIN，密码破解：BRUTE_ATTACK，恶意请求：MALICIOUS_REQUEST，高危命令：BASH_EVENT，本地提权：PRIVILEGE_EVENT，反弹shell：REVERSE_SHELL. 异常进程:PROCESS
   */
  RiskType: string
  /**
   * 需要修改的事件id 数组，支持批量
   */
  Ids?: Array<number | bigint>
  /**
   * 是否更新全部，即是否对所有的事件进行操作，当ids 不为空时，此参数无效
   */
  UpdateAll?: boolean
  /**
   * 排除的事件id,当操作全部事件时，需要排除这次id
   */
  ExcludeId?: Array<number | bigint>
  /**
   * 当Operate 是木马隔离时，表示是否要杀进程，其他操作无效
   */
  KillProcess?: boolean
  /**
   * 当RiskType 为异地登录且ids为空时，可以修改所有来源ip的事件的状态
   */
  Ip?: Array<string>
  /**
   * 过滤条件。RiskType为 MALWARE时
1、当RiskType为 MALWARE时：
<li>IpOrAlias - String - 是否必填：否 - 主机ip或别名筛选</li>
<li>FilePath - String - 是否必填：否 - 路径筛选</li>
<li>VirusName - String - 是否必填：否 - 描述筛选</li>
<li>CreateBeginTime - String - 是否必填：否 - 创建时间筛选-开始时间</li>
<li>CreateEndTime - String - 是否必填：否 - 创建时间筛选-结束时间</li>
<li>Status - String - 是否必填：否 - 状态筛选 4待处理,5信任,6已隔离,10隔离中,11恢复隔离中</li>
RiskType 为PROCESS时:
过滤条件。
<li>IpOrName - String - 是否必填：否 - 主机IP或主机名</li>
<li>VirusName - String - 是否必填：否 - 病毒名</li>
<li>BeginTime - String - 是否必填：否 - 进程启动时间-开始</li>
<li>EndTime - String - 是否必填：否 - 进程启动时间-结束</li>
<li>Status - String - 是否必填：否 - 状态筛选 0待处理；1查杀中;2已查杀3已退出;4已信任</li>
   */
  Filters?: Array<Filters>
  /**
   * 当Operate 是木马隔离时
<li> 本操作会修复被篡改的系统命令，计划任务等系统文件，操作中请确保yum/apt 可用。</li>
   */
  DoClean?: boolean
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
 * ScanBaseline请求参数结构体
 */
export interface ScanBaselineRequest {
  /**
   * 策略id数组(StrategyIdList与CategoryIdList和RuleIdList三选一)
   */
  StrategyIdList?: Array<number | bigint>
  /**
   * 基线id数组(StrategyIdList与CategoryIdList和RuleIdList三选一)
   */
  CategoryIdList?: Array<number | bigint>
  /**
   * 检测项id数组(StrategyIdList与CategoryIdList和RuleIdList三选一)
   */
  RuleIdList?: Array<number | bigint>
  /**
   * 选择StrategyIdList时，不需要填写，其他情况必填
   */
  QuuidList?: Array<string>
  /**
   * 主机Uuid数组
   */
  UuidList?: Array<string>
}

/**
 * RansomDefenseRollback请求参数结构体
 */
export interface RansomDefenseRollbackRequest {
  /**
   * 快照时间
   */
  BackupTime: string
  /**
   * 主机Quuid
   */
  Quuid?: string
  /**
   * 需要回滚的硬盘信息，硬盘直接用;分隔，留空为全部已快照磁盘： disk-id1|disk-name1;disk-id2|disk-name2
   */
  DiskInfo?: string
}

/**
 * 批量导入机器信息.
 */
export interface EffectiveMachineInfo {
  /**
   * 机器名称
   */
  MachineName?: string
  /**
   * 机器公网ip
   */
  MachinePublicIp?: string
  /**
   * 机器内网ip
   */
  MachinePrivateIp?: string
  /**
   * 机器标签
   */
  MachineTag?: Array<MachineTag>
  /**
   * 机器Quuid
   */
  Quuid?: string
  /**
   * 主机Uuid
   */
  Uuid?: string
  /**
   * 内核版本号
   */
  KernelVersion?: string
  /**
   * 在线状态 OFFLINE，ONLINE
   */
  MachineStatus?: string
  /**
   * 授权订单对象
   */
  LicenseOrder?: LicenseOrder
  /**
   * 漏洞数量
   */
  VulNum?: number
  /**
   * 云标签信息
   */
  CloudTags?: Array<Tags>
  /**
   * 机器instance ID
   */
  InstanceID?: string
}

/**
 * DescribeVulCountByDates返回参数结构体
 */
export interface DescribeVulCountByDatesResponse {
  /**
   * 批量获得对应天数的漏洞数量
   */
  VulCount?: Array<number | bigint>
  /**
   * 批量获得对应天数的主机数量
   */
  HostCount?: Array<number | bigint>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 创建修复任务的quuids
 */
export interface CreateVulFixTaskQuuids {
  /**
   * 漏洞id
   */
  VulId: number
  /**
   * 需要修复漏洞的主机，所有主机必须有VulId的这个漏洞且是待修复状态。
   */
  Quuids: Array<string>
  /**
   * 修复方式 0组件更新或者安装补丁,1禁用服务
   */
  FixMethod?: number
}

/**
 * DescribeMachineOsList返回参数结构体
 */
export interface DescribeMachineOsListResponse {
  /**
   * 操作系统列表
   */
  List?: Array<OsName>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 快速分析统计信息
 */
export interface FieldValueRatioInfo {
  /**
   * 个数
   */
  Count?: number
  /**
   * 比例
   */
  Ratio?: number
  /**
   * 值
   */
  Value?: string
}

/**
 * DescribeVulDefenceEvent请求参数结构体
 */
export interface DescribeVulDefenceEventRequest {
  /**
   * 过滤条件：Keywords: ip或者主机名, VulKeywords漏洞名或者CveId模糊查询; Quuid，VulId，EventType，Status精确匹配，CreateBeginTime，CreateEndTime时间段查询
   */
  Filters?: Array<Filter>
  /**
   * 数据偏移
   */
  Offset?: number
  /**
   * 数据限制
   */
  Limit?: number
  /**
   * 排序，大小写无关：asc 升序，desc降序
   */
  Order?: string
  /**
   * 排序列，严格相等：CreateTime创建时间，MergeTime合并时间，Count事件数量
   */
  By?: string
}

/**
 * ModifyBaselineRule返回参数结构体
 */
export interface ModifyBaselineRuleResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * rasp白名单漏洞列表
 */
export interface RaspRuleVul {
  /**
   * 漏洞id
   */
  VulVulsID?: number
  /**
   * 漏洞名称
   */
  VulVulsName?: string
  /**
   * cve_id
   */
  CveID?: string
  /**
   * 漏洞防御类型，从漏洞表富化， 1:支持组件漏洞防御，组件漏洞没有正则加白。2:支持正则防御
   */
  SupportDefense?: number
}

/**
 * ExportMaliciousRequests返回参数结构体
 */
export interface ExportMaliciousRequestsResponse {
  /**
   * 该参数已废弃
   */
  DownloadUrl?: string
  /**
   * 任务ID,需要到接口“异步导出任务”ExportTasks获取DownloadUrl下载地址
   */
  TaskId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * RetryVulFix请求参数结构体
 */
export interface RetryVulFixRequest {
  /**
   * 漏洞id
   */
  FixId: number
  /**
   * 主机Quuid
   */
  Quuid: string
  /**
   * 漏洞id
   */
  VulId: number
}

/**
 * DescribeRiskDnsEventList请求参数结构体
 */
export interface DescribeRiskDnsEventListRequest {
  /**
   * <li>MachineName  主机名称



InstanceID  实例ID  

 

IP   内网IP或公网IP- 是否必填：否 - 主机Ip或别名筛选</li>
<li>HostId - String - 是否必填：否 - 主机Id</li>
<li>AgentId - String - 是否必填：否 - 客户端Id</li>
<li>PolicyType - String - 是否必填：否 - 策略类型,0:系统策略1:用户自定义策略</li>
<li>Domain - String - 是否必填：否 - 域名(先对域名做urlencode,再base64)</li>
<li>HandleStatus - String - 是否必填：否 - 状态筛选0:待处理；2:信任；3:不信任</li>
<li>BeginTime - String - 是否必填：否 - 最近访问开始时间</li>
<li>EndTime - String - 是否必填：否 - 最近访问结束时间</li>
   */
  Filters?: Array<Filter>
  /**
   * 需要返回的数量，默认为10，最大值为100
   */
  Limit?: number
  /**
   * 偏移量，默认为0。
   */
  Offset?: number
  /**
   * 排序方式：根据请求次数排序：[asc:升序|desc:降序]
   */
  Order?: string
  /**
   * 排序字段：[AccessCount:请求次数|LastTime:最近请求时间]
   */
  By?: string
}

/**
 * DescribeLogKafkaDeliverInfo返回参数结构体
 */
export interface DescribeLogKafkaDeliverInfoResponse {
  /**
   * 实例环境
   */
  KafkaEnvName?: string
  /**
   * 实例id
   */
  KafkaId?: string
  /**
   * 地域
   */
  Zone?: string
  /**
   * 可用区
   */
  Az?: string
  /**
   * 所属网络
   */
  VpcId?: string
  /**
   * 所在子网
   */
  SubnetId?: string
  /**
   * 接入方式，1公网域名接入，2支撑环境接入
   */
  AccessType?: number
  /**
   * 接入地址
   */
  AccessAddr?: string
  /**
   * 投递状态，1：健康，2：告警，3：异常
   */
  DeliverStatus?: number
  /**
   * kafka版本
   */
  InsVersion?: string
  /**
   * 峰值带宽
   */
  BandWidth?: number
  /**
   * 磁盘容量
   */
  DiskSize?: number
  /**
   * 用户名
   */
  Username?: string
  /**
   * 投递类型细节
   */
  DeliverTypeDetails?: Array<DeliverTypeDetails>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteBashRules请求参数结构体
 */
export interface DeleteBashRulesRequest {
  /**
   * ID数组，最大100条。
   */
  Ids: Array<number | bigint>
}

/**
 * CreateProtectServer返回参数结构体
 */
export interface CreateProtectServerResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ExportRansomDefenseStrategyMachines请求参数结构体
 */
export interface ExportRansomDefenseStrategyMachinesRequest {
  /**
   * 过滤条件。
<li>Ips - String - 是否必填：否 - 通过ip查询 </li>
<li>MachineNames - String - 是否必填：否 - 通过实例名查询 </li>
<li>Names - String - 是否必填：否 - 通过实例名查询 </li>
<li>Status - String - 是否必填：否 - 策略状态：0备份中，1备份成功，2备份失败 </li>
<li>LastBackupTimeBegin - String - 是否必填：否 - 最近一次备份时间开始</li>
<li>LastBackupTimeEnd - String - 是否必填：否 - 最近一次备份时间结束</li>
   */
  Filters?: Array<Filters>
  /**
   * 排序方法 ASC DESC
   */
  Order?: string
  /**
   * 排序字段支持CreateTime、MachineCount
   */
  By?: string
  /**
   * 策略id
   */
  Id?: number
}

/**
 * 防护目录列表集
 */
export interface ProtectDirInfo {
  /**
   * 网站名称
   */
  DirName?: string
  /**
   * 网站防护目录地址
   */
  DirPath?: string
  /**
   * 关联服务器数
   */
  RelatedServerNum?: number
  /**
   * 防护服务器数
   */
  ProtectServerNum?: number
  /**
   * 未防护服务器数
   */
  NoProtectServerNum?: number
  /**
   * 唯一ID
   */
  Id?: string
  /**
   * 防护状态
   */
  ProtectStatus?: number
  /**
   * 防护异常
   */
  ProtectException?: number
  /**
   * 自动恢复开关 (Filters 过滤Quuid 时 返回) 默认0
   */
  AutoRestoreSwitchStatus?: number
  /**
   * 首次开启防护时间
   */
  FirstProtectTime?: string
  /**
   * 最近开启防护时间
   */
  LatestProtectTime?: string
  /**
   * 防护文件类型
   */
  ProtectFileType?: string
  /**
   * 防护文件总数
   */
  ProtectFilesCount?: number
}

/**
 * DescribeMalwareWhiteListAffectList返回参数结构体
 */
export interface DescribeMalwareWhiteListAffectListResponse {
  /**
   * 总记录数
   */
  TotalCount?: number
  /**
   * 白名单规则影响事件列表
   */
  AffectList?: Array<MalwareWhiteListAffectEvent>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyMaliciousRequestWhiteList请求参数结构体
 */
export interface ModifyMaliciousRequestWhiteListRequest {
  /**
   * 白名单id
   */
  Id: number
  /**
   * 白名单域名
   */
  Domain: string
  /**
   * 备注
   */
  Mark?: string
}

/**
 * DescribeRansomDefenseEventsList请求参数结构体
 */
export interface DescribeRansomDefenseEventsListRequest {
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
<li>HostName- string- 主机名称</li>
<li>Status - Uint64 - 0待处理，1已处理，2已信任</li>
<li>HostIp- String - 主机ip</li>
   */
  Filters?: Array<Filters>
  /**
   * 排序方法 ASC DESC
   */
  Order?: string
  /**
   * 排序字段支持CreateTime
   */
  By?: string
}

/**
 * ModifyRaspMaxCpu返回参数结构体
 */
export interface ModifyRaspMaxCpuResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 防勒索策略绑定主机备份详情
 */
export interface RansomDefenseStrategyMachineBackupInfo {
  /**
   * 主机Uuid
   */
  Uuid?: string
  /**
   * 主机Quuid
   */
  Quuid?: string
  /**
   * 主机名称
   */
  MachineName?: string
  /**
   * 主机实例id
   */
  InstanceId?: string
  /**
   * 内网ip
   */
  MachineIp?: string
  /**
   * 外网ip
   */
  MachineWanIp?: string
  /**
   * 云标签
   */
  CloudTags?: Array<Tag>
  /**
   * 可用区信息
   */
  RegionInfo?: RegionInfo
  /**
   * 主机安全标签
   */
  Tag?: Array<MachineTag>
  /**
   * 防护状态：0关闭，1开启
   */
  Status?: number
  /**
   * 策略id，为0时未绑定策略
   */
  StrategyId?: number
  /**
   * 硬盘信息，为空时所有硬盘生效：
;分割 diskId1|diskName1;diskId2|diskName2
   */
  DiskInfo?: string
  /**
   * 策略名称
   */
  StrategyName?: string
  /**
   * 备份数量
   */
  BackupCount?: number
  /**
   * 最近一次备份状态：0备份中，1正常，2失败，9暂无备份
   */
  LastBackupStatus?: number
  /**
   * 最近一次备份失败原因
   */
  LastBackupMessage?: string
  /**
   * 最近一次备份时间
   */
  LastBackupTime?: string
  /**
   * 最近一次回滚进度百分比
   */
  RollBackPercent?: number
  /**
   * 最近一次回滚状态：0进行中，1成功，2失败
   */
  RollBackStatus?: number
  /**
   * 备份成功次数
   */
  BackupSuccessCount?: number
  /**
   * 版本信息：0-基础版 1-专业版 2-旗舰版 3-普惠版
   */
  HostVersion?: number
}

/**
 * DescribeBaselineItemInfo请求参数结构体
 */
export interface DescribeBaselineItemInfoRequest {
  /**
   * <li>ItemId - int64 - 是否必填：否 - 项Id</li>
<li>Level - int - 是否必填：否 - 风险等级</li>
<li>ItemName - string - 是否必填：否 - 检测项名字</li>
<li>RuleId - int - 是否必填：否 - 规则Id</li>
   */
  Filters?: Array<Filter>
  /**
   * 限制条数,默认10,最大100
   */
  Limit?: number
  /**
   * 偏移量,默认0
   */
  Offset?: number
  /**
   * 排序方式: [ASC:升序|DESC:降序]
   */
  Order?: string
  /**
   * 可选排序列
   */
  By?: string
}

/**
 * ExportAssetPlanTaskList返回参数结构体
 */
export interface ExportAssetPlanTaskListResponse {
  /**
   * 异步下载任务ID，需要配合ExportTasks接口使用
   */
  TaskId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ExportRansomDefenseBackupList请求参数结构体
 */
export interface ExportRansomDefenseBackupListRequest {
  /**
   * 主机Quuid
   */
  Quuid: string
  /**
   * 过滤条件。
<li>Status - Int - 是否必填：否 - 通过勒索状态查询：0未勒索，1已勒索 </li>
<li>CreateTimeBegin - string - 是否必填：否 - 创建时间开始 </li>
<li>CreateTimeEnd - string - 是否必填：否 - 创建时间结束 </li>
   */
  Filters?: Array<Filters>
  /**
   * 排序方法 ASC DESC
   */
  Order?: string
  /**
   * 排序字段支持CreateTime
   */
  By?: string
}

/**
 * ModifyRaspRules请求参数结构体
 */
export interface ModifyRaspRulesRequest {
  /**
   * 规则ID(新增时请留空，编辑时候必传)
   */
  Id?: number
  /**
   * 漏洞id数组
   */
  VulVulsIDs?: Array<number | bigint>
  /**
   * 自定义请求范围加白正则表达式，选择全部请求范围时候为空，否则不能为空，base64编码
   */
  URLRegexp?: string
  /**
   * 加白方式，0：自定义请求范围加白。1：全部请求加白
   */
  WhiteType?: number
}

/**
 * DescribeBaselineHostRiskTop请求参数结构体
 */
export interface DescribeBaselineHostRiskTopRequest {
  /**
   * 策略ID
   */
  PolicyId?: number
}

/**
 * DescribeABTestConfig请求参数结构体
 */
export interface DescribeABTestConfigRequest {
  /**
   * 灰度项目名称
   */
  ProjectName?: string
}

/**
 * ExportAssetSystemPackageList返回参数结构体
 */
export interface ExportAssetSystemPackageListResponse {
  /**
   * 异步下载任务ID，需要配合ExportTasks接口使用
   */
  TaskId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyRansomDefenseEventsStatus请求参数结构体
 */
export interface ModifyRansomDefenseEventsStatusRequest {
  /**
   * 需要修改的事件id 数组，支持批量
   */
  Ids: Array<number | bigint>
  /**
   * 操作 0待处理，1已处理,2信任,9:删除记录
   */
  Status: number
  /**
   * 是否更新所有同路径事件
   */
  All?: boolean
}

/**
 * rasp白名单规则
 */
export interface RaspRule {
  /**
   * 规则ID
   */
  Id?: number
  /**
   * 自定义请求url范围正则表达式，为空则保存不成功
   */
  URLRegexp?: string
  /**
   * 漏洞id
   */
  VulVulsID?: number
  /**
   * 漏洞名称
   */
  VulVulsName?: string
  /**
   * cve_id
   */
  CveID?: string
  /**
   * 漏洞防御类型，从漏洞表富化， 1:支持组件漏洞防御，组件漏洞没有正则加白。2:支持正则防御
   */
  SupportDefense?: number
  /**
   * 加白范围，0:全部请求加白，1:自定义请求范围加白
   */
  WhiteType?: number
  /**
   * 状态 0: 有效
   */
  Status?: number
  /**
   * 创建时间
   */
  CreateTime?: string
  /**
   * 修改时间
   */
  ModifyTime?: string
}

/**
 * DescribeUsersConfig返回参数结构体
 */
export interface DescribeUsersConfigResponse {
  /**
   * 配置值
   */
  Value?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeAttackStatistics返回参数结构体
 */
export interface DescribeAttackStatisticsResponse {
  /**
   * 总攻击次数
   */
  PendingAttackCount?: number
  /**
   * 总尝试攻击次数
   */
  PendingTryAttackCount?: number
  /**
   * 总攻击成功次数
   */
  PendingSuccAttackCount?: number
  /**
   * 今日新增攻击次数
   */
  PendingNewAttackCount?: number
  /**
   * 总受攻击资产数量
   */
  AttackedAssetCount?: number
  /**
   * 今日新增受攻击资产数量
   */
  NewAttackedAssetCount?: number
  /**
   * 总受攻击端口数量
   */
  AttackedPortCount?: number
  /**
   * 今日新增受攻击端口数量
   */
  NewAttackedPortCount?: number
  /**
   * 总攻击来源ip数量
   */
  AttackSrcIpCount?: number
  /**
   * 今日新增攻击来源ip数量
   */
  NewAttackSrcIpCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeRansomDefenseState请求参数结构体
 */
export type DescribeRansomDefenseStateRequest = null

/**
 * ExportAssetJarList请求参数结构体
 */
export interface ExportAssetJarListRequest {
  /**
   * 过滤条件。
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
  /**
   * 排序方式，asc升序 或 desc降序
   */
  Order?: string
  /**
   * 排序方式：[FirstTime]
   */
  By?: string
}

/**
 * CreateVulFix请求参数结构体
 */
export interface CreateVulFixRequest {
  /**
   * 漏洞对应要修复的主机列表
   */
  CreateVulFixTaskQuuids: Array<CreateVulFixTaskQuuids>
  /**
   * 快照保存天数，  0 天表示不创建快照。24小时没有快照的主机必须要创建快照才能修复
   */
  SaveDays: number
  /**
   * 快照名称
   */
  SnapshotName?: string
}

/**
 * CheckFirstScanBaseline返回参数结构体
 */
export interface CheckFirstScanBaselineResponse {
  /**
   * 是否是第一次检测 0：不是；1：是
   */
  FirstScan?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyBanStatus请求参数结构体
 */
export interface ModifyBanStatusRequest {
  /**
   * 阻断开关状态: 0 -- 关闭 1 -- 高级阻断 2 -- 基础阻断(只阻断情报库黑ip)
   */
  Status: number
  /**
   * 是否开启智能过白模式
   */
  OpenSmartMode?: boolean
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
 * DescribeVulDefenceList返回参数结构体
 */
export interface DescribeVulDefenceListResponse {
  /**
   * 数据总数
   */
  TotalCount?: number
  /**
   * 漏洞防御列表
   */
  List?: Array<VulDefenceRangeDetail>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * RemoveLocalStorageItem请求参数结构体
 */
export interface RemoveLocalStorageItemRequest {
  /**
   * 键
   */
  Key: string
}

/**
 * CreateBuyBindTask请求参数结构体
 */
export interface CreateBuyBindTaskRequest {
  /**
   * 订单号
   */
  DealName: string
  /**
   * 可选参数: 1专业版-包年包月 , 2 旗舰版-包年包月
   */
  LicenseType: number
  /**
   * 机器列表
   */
  QuuidList?: Array<string>
  /**
   * 是否全选机器
   */
  IsAll?: boolean
}

/**
 * 添加登录审计白名单的主机信息实体
 */
export interface HostInfo {
  /**
   * 主机Quuid
   */
  Quuid: string
  /**
   * Uuid主机
   */
  Uuid: string
}

/**
 * EditPrivilegeRules返回参数结构体
 */
export interface EditPrivilegeRulesResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeVulHostTop返回参数结构体
 */
export interface DescribeVulHostTopResponse {
  /**
   * 服务器风险top列表
   */
  VulHostTopList?: Array<VulHostTopInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 防护事件列表信息
 */
export interface ProtectEventLists {
  /**
   * 服务器名称
   */
  HostName?: string
  /**
   * 服务器ip
   */
  HostIp?: string
  /**
   * 事件地址
   */
  EventDir?: string
  /**
   * 事件类型 0-内容被修改恢复；1-权限被修改恢复；2-归属被修改恢复；3-被删除恢复；4-新增删除
   */
  EventType?: number
  /**
   * 事件状态 1 已恢复 0 未恢复
   */
  EventStatus?: number
  /**
   * 发现时间
   */
  CreateTime?: string
  /**
   * 恢复时间
   */
  RestoreTime?: string
  /**
   * 唯一ID
   */
  Id?: number
  /**
   * 文件类型 0-常规文件；1-目录；2-软链
   */
  FileType?: number
  /**
   * 主机额外信息
   */
  MachineExtraInfo?: MachineExtraInfo
  /**
   * 机器实例uuid
   */
  Quuid?: string
}

/**
 * TrustMalwares返回参数结构体
 */
export interface TrustMalwaresResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeHistoryService请求参数结构体
 */
export type DescribeHistoryServiceRequest = null

/**
 * CreateMaliciousRequestWhiteList请求参数结构体
 */
export interface CreateMaliciousRequestWhiteListRequest {
  /**
   * 白名单域名
   */
  Domain: string
  /**
   * 备注
   */
  Mark?: string
}

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
 * ExportFileTamperEvents请求参数结构体
 */
export interface ExportFileTamperEventsRequest {
  /**
   * 过滤条件。
<li>Status - String - 是否必填：否 - 处理状态  0 -- 待处理 1 -- 已加白 2 -- 已删除 3 - 已忽略</li>
<li>ModifyTime - String - 是否必填：否 - 最近发生时间</li>
<li>Uuid- String - 是否必填：否 - 主机uuid查询</li>
<li>RuleCategory- string - 是否必填：否 - 规则类别 0 系统规则 1 自定义规则</li>
   */
  Filters?: Array<Filters>
  /**
   * 需要导出的字段
   * @deprecated
   */
  Fileds?: Array<string>
  /**
   * 需要导出的字段
   */
  Fields?: string
}

/**
 * 默认策略基础信息
 */
export interface DefaultStrategyInfo {
  /**
   * 策略名
   */
  StrategyName?: string
  /**
   * 策略id
   */
  StrategyId?: number
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
 * 主机漏洞防御插件信息
 */
export interface VulDefencePluginStatus {
  /**
   * 主机quuid
   */
  Quuid?: string
  /**
   * 主机别名
   */
  Alias?: string
  /**
   * 内网ip
   */
  PrivateIp?: string
  /**
   * 公网ip
   */
  PublicIp?: string
  /**
   * 插件状态：0 正常，1 异常
   */
  Exception?: number
  /**
   * 创建时间
   */
  CreateTime?: string
  /**
   * 最后跟新时间
   */
  ModifyTime?: string
}

/**
 * ModifyBanWhiteList请求参数结构体
 */
export interface ModifyBanWhiteListRequest {
  /**
   * 修改白名单规则项
   */
  Rules: BanWhiteList
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
   */
  EventLevelList?: Array<BaselineEventLevelInfo>
  /**
   * 主机名称
   */
  HostName?: string
  /**
   * 主机Quuid
   */
  Quuid?: string
  /**
   * 计算权重的分数
   */
  Score?: number
}

/**
 * DescribeReverseShellRules返回参数结构体
 */
export interface DescribeReverseShellRulesResponse {
  /**
   * 列表内容
   */
  List?: Array<ReverseShellRule>
  /**
   * 总条数
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteWebHookRule请求参数结构体
 */
export interface DeleteWebHookRuleRequest {
  /**
   * 规则Id列表
   */
  Ids: Array<number | bigint>
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
<li>Uuid - String - 是否必填：否 - 主机安全唯一Uuid</li>
<li>Quuid - String - 是否必填：否 - 云服务器uuid</li>
<li>Status - String - 是否必填：否 - 状态筛选：失败：FAILED 成功：SUCCESS</li>
<li>UserName - String - 是否必填：否 - UserName筛选</li>
<li>SrcIp - String - 是否必填：否 - 来源ip筛选</li>
<li>CreateBeginTime - String - 是否必填：否 - 首次攻击时间筛选，开始时间</li>
<li>CreateEndTime - String - 是否必填：否 - 首次攻击时间筛选，结束时间</li>
<li>ModifyBeginTime - String - 是否必填：否 - 最近攻击时间筛选，开始时间</li>
<li>ModifyEndTime - String - 是否必填：否 - 最近攻击时间筛选，结束时间</li>
<li>Banned - String - 是否必填：否 - 阻断状态筛选，多个用","分割：0-未阻断（全局ZK开关关闭），82-未阻断(非专业版)，83-未阻断(已加白名单)，1-阻断成功(已完成)，2-未阻断-程序异常，3-未阻断-内网攻击暂不支持阻断，4-未阻断-安平暂不支持阻断，10-阻断成功(生效中)</li>
<li>DataFrom - Int - 命中规则：0-登录规则，1-情报规则</li>
<li>EventType - String - 是否必填：否 - 破解状态筛选：200-破解失败(密码错误),300-破解成功,400-破解失败(账号不存在)</li>
   */
  Filters?: Array<Filter>
  /**
   * 排序方式：根据请求次数排序：asc-升序/desc-降序
   */
  Order?: string
  /**
   * 排序字段：CreateTime-首次攻击时间
   */
  By?: string
}

/**
 * DescribeVdbAndPocInfo请求参数结构体
 */
export type DescribeVdbAndPocInfoRequest = null

/**
 * ModifyBashPolicyStatus请求参数结构体
 */
export interface ModifyBashPolicyStatusRequest {
  /**
   * 规则ID
   */
  Id: number
  /**
   * 是否禁用
   */
  Enable: number
}

/**
 * DescribeVulList返回参数结构体
 */
export interface DescribeVulListResponse {
  /**
   * 漏洞列表
   */
  VulInfoList?: Array<VulInfoList>
  /**
   * 漏洞总条数
   */
  TotalCount?: number
  /**
   * 重点关注漏洞总数
   */
  FollowVulCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 基线主机信息
 */
export interface BaselineHost {
  /**
   * 主机Id
   */
  HostId?: string
  /**
   * 主机名称
   */
  HostName?: string
  /**
   * 主机标签
   */
  HostTag?: string
  /**
   * 内网Ip
   */
  HostIp?: string
  /**
   * 外网Ip
   */
  WanIp?: string
  /**
   * 主机额外信息
   */
  MachineExtraInfo?: MachineExtraInfo
}

/**
 * KeysLocalStorage请求参数结构体
 */
export type KeysLocalStorageRequest = null

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
 * RemoveMachine请求参数结构体
 */
export interface RemoveMachineRequest {
  /**
   * 主机Uuid
   */
  Uuid: string
  /**
   * 主机Quuid
   */
  Quuid: string
}

/**
 * DescribeWebPageServiceInfo请求参数结构体
 */
export type DescribeWebPageServiceInfoRequest = null

/**
 * ModifyLicenseBinds返回参数结构体
 */
export interface ModifyLicenseBindsResponse {
  /**
   * 任务ID
   */
  TaskId?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CheckFileTamperRule请求参数结构体
 */
export interface CheckFileTamperRuleRequest {
  /**
   * 填入的规则名称
   */
  Name?: string
  /**
   * 编辑时传的规则id
   */
  Id?: number
}

/**
 * DescribeBaselineStrategyList返回参数结构体
 */
export interface DescribeBaselineStrategyListResponse {
  /**
   * 分页查询记录的总数
   */
  TotalCount?: number
  /**
   * 用户策略信息列表
   */
  StrategyList?: Array<Strategy>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 授权机器信息
 */
export interface ProtectMachineInfo {
  /**
   * 机器名称
   */
  HostName?: string
  /**
   * 机器IP
   */
  HostIp?: string
  /**
   * 开通时间
   */
  CreateTime?: string
  /**
   * 到期时间
   */
  ExpireTime?: string
}

/**
 * DescribeBaselineFixList返回参数结构体
 */
export interface DescribeBaselineFixListResponse {
  /**
   * 无
   */
  List?: Array<BaselineFix>
  /**
   * 总数
   */
  Total?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateRansomDefenseStrategy请求参数结构体
 */
export interface CreateRansomDefenseStrategyRequest {
  /**
   * 策略名称
   */
  Name: string
  /**
   * 定时快照执行时间（0-23）：01:00;23:00
   */
  Hour: string
  /**
   * 策略ID，填ID时修改策略，否则新增策略
   */
  Id?: number
  /**
   * 策略备注
   */
  Description?: string
  /**
   * 是否开启：0关，1开
   */
  Status?: number
  /**
   * 是否全部机器生效：0否，1是
   */
  IsAll?: number
  /**
   * 包含目录，;分隔
   */
  IncludeDir?: string
  /**
   * 排除目录，;分隔
   */
  ExcludeDir?: string
  /**
   * 备份模式： 0按周，1按天
   */
  BackupType?: number
  /**
   * 定时任务执行星期天数（1-7）：1;2;7
   */
  Weekday?: string
  /**
   * 保留天数：0永久
   */
  SaveDay?: number
  /**
   * 绑定主机列表
   */
  Machines?: Array<RansomDefenseStrategyMachineInfo>
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
 * DescribeLicenseList请求参数结构体
 */
export interface DescribeLicenseListRequest {
  /**
   * 多个条件筛选时取交集
<li> LicenseStatus 授权状态信息,0 未使用,1 部分使用, 2 已用完, 3 不可用  4 可使用</li>
<li> BuyTime 购买时间</li>
<li> LicenseType  授权类型, 0 专业版-按量计费, 1专业版-包年包月 , 2 旗舰版-包年包月</li>
<li>DeadlineStatus 到期状态 NotExpired 未过期, Expire 已过期(包含已销毁) NearExpiry 即将到期</li>
<li>ResourceId 资源ID</li>
<li>Keywords IP筛选</li>
<li>PayMode 付费模式 0 按量计费 , 1 包年包月</li>
<li>OrderStatus 订单状态 1 正常 2 隔离 3 销毁</li>
<li>DealNames 子订单号,最大长度10个,超出会失败</li>
   */
  Filters?: Array<Filters>
  /**
   * 限制条数,默认10.
   */
  Limit?: number
  /**
   * 偏移量,默认0.
   */
  Offset?: number
  /**
   * 标签筛选,平台标签能力,这里传入 标签键,标签值作为一个对象
   */
  Tags?: Array<Tags>
  /**
   * ASC 正序,  DESC 倒序
   */
  Order?: string
  /**
   * LicenseCnt 授权数量
   */
  By?: string
}

/**
 * CreateMalwareWhiteList请求参数结构体
 */
export interface CreateMalwareWhiteListRequest {
  /**
   * 白名单模式； 0 MD5白名单，1自定义
   */
  Mode: number
  /**
   * quuid 列表
   */
  QuuidList?: Array<string>
  /**
   * 是否全部主机； 0否，1是。
   */
  IsGlobal?: number
  /**
   * 匹配模式 ；0 精确匹配，1模糊匹配（废弃）
   */
  MatchType?: number
  /**
   * 文件名称(正则)；长度不超过200个
   */
  FileName?: Array<string>
  /**
   * 文件目录(正则)；长度不超过200个,内容base64转义
   */
  FileDirectory?: Array<string>
  /**
   * 文件后缀；长度不超过200个,内容base64转义（废弃）
   */
  FileExtension?: Array<string>
  /**
   * MD5列表
   */
  Md5List?: Array<string>
  /**
   * 木马事件ID
   */
  EventId?: number
  /**
   * 对历史待处理执行加白操作；0是不处理，1是处理
   */
  IsHandleHistoryEvents?: number
}

/**
 * ModifyLicenseUnBinds请求参数结构体
 */
export interface ModifyLicenseUnBindsRequest {
  /**
   * 资源ID
   */
  ResourceId: string
  /**
   * 授权类型
   */
  LicenseType: number
  /**
   * 是否全部机器(当全部机器数大于当前订单可用授权数时,多余机器会被跳过)
   */
  IsAll?: boolean
  /**
   * 需要绑定的机器quuid列表, 当IsAll = false 时必填,反之忽略该参数.
最大长度=100
   */
  QuuidList?: Array<string>
}

/**
 * DescribeBaselineRuleDetectList请求参数结构体
 */
export interface DescribeBaselineRuleDetectListRequest {
  /**
   * <li>PolicyId - int64 - 是否必填：否 - 策略Id</li>
<li>ItemId - int64 - 是否必填：否 - 策略Id</li>
<li>RuleName - string - 是否必填：否 - 规则名称</li>
<li>DetectStatus - int - 是否必填：否 - 检测状态</li>
<li>StartTime - string - 是否必填：否 - 开时时间</li>
<li>EndTime - string - 是否必填：否 - 结束时间</li>
   */
  Filters?: Array<Filter>
  /**
   * 限制条数,默认10,最大100
   */
  Limit?: number
  /**
   * 偏移量,默认0
   */
  Offset?: number
  /**
   * 排序方式: [ASC:升序|DESC:降序]
   */
  Order?: string
  /**
   * 可选排序列: [HostCount|FirstTime|LastTime]
   */
  By?: string
}

/**
 * DescribeVulOverview返回参数结构体
 */
export interface DescribeVulOverviewResponse {
  /**
   * 重点关注漏洞统计
   */
  FollowVul?: VulOverview
  /**
   * 全部漏洞统计
   */
  AllVul?: VulOverview
  /**
   * 影响主机统计
   */
  EffectHost?: VulOverview
  /**
   * 漏洞攻击事件（近1月）统计
   */
  VulAttackEvent?: VulOverview
  /**
   * 已防御攻击（近1月）统计
   */
  VulDefenceEvent?: VulOverview
  /**
   * 漏洞库统计
   */
  VulStore?: VulOverview
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ExportRansomDefenseStrategyList请求参数结构体
 */
export interface ExportRansomDefenseStrategyListRequest {
  /**
   * 过滤条件。
<li>Ips - String - 是否必填：否 - 通过ip查询 </li>
<li>MachineNames - String - 是否必填：否 - 通过实例名查询 </li>
<li>Names - String - 是否必填：否 - 通过实例名查询 </li>
<li>Dirs - String - 是否必填：否 - 诱饵目录 </li>
<li>Status - String - 是否必填：否 - 策略状态：0关闭，1开启 </li>
<li>BackupType - String - 是否必填：否 - 备份模式：0-按周;1-按天 </li>
   */
  Filters?: Array<Filters>
  /**
   * 排序方法 ASC DESC
   */
  Order?: string
  /**
   * 排序字段支持CreateTime、MachineCount
   */
  By?: string
}

/**
 * DeleteMaliciousRequests请求参数结构体
 */
export interface DeleteMaliciousRequestsRequest {
  /**
   * 恶意请求记录ID数组，(最大100条)
   */
  Ids?: Array<number | bigint>
  /**
   * 是否删除全部
   */
  All?: boolean
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
 * 批量修复漏洞二次弹窗
 */
export interface VulInfoHostInfo {
  /**
   * 主机名
   */
  HostName?: string
  /**
   * 主机ip
   */
  HostIp?: string
  /**
   * 主机标签
   */
  Tags?: Array<string>
  /**
   * 主机quuid
   */
  Quuid?: string
  /**
   * 0 :漏洞不可自动修复，  1：可自动修复， 2：客户端已离线， 3：主机不是旗舰版只能手动修复， 4：机型不允许 ，5：修复中 ，6：已修复， 7：检测中, 9:修复失败, 10:已忽略 ,11:漏洞只支持linux不支持Windows, 12：漏洞只支持Windows不支持linux
   */
  IsSupportAutoFix?: number
  /**
   * 主机uuid
   */
  Uuid?: string
  /**
   * 主机InstanceId
   */
  InstanceId?: string
}

/**
 * 防勒索主机列表
 */
export interface RansomDefenseStrategyMachineDetail {
  /**
   * 主机Uuid
   */
  Uuid?: string
  /**
   * 主机Quuid
   */
  Quuid?: string
  /**
   * 主机名称
   */
  MachineName?: string
  /**
   * 主机实例id
   */
  InstanceId?: string
  /**
   * 内网ip
   */
  MachineIp?: string
  /**
   * 外网ip
   */
  MachineWanIp?: string
  /**
   * 云标签
   */
  CloudTags?: Array<Tag>
  /**
   * 可用区信息
   */
  RegionInfo?: RegionInfo
  /**
   * 主机安全标签
   */
  Tag?: Array<MachineTag>
  /**
   * 防护状态：0关闭，1开启
   */
  Status?: number
  /**
   * 策略id，为0时未绑定策略
   */
  StrategyId?: number
  /**
   * 硬盘信息，为空时所有硬盘生效：
;分割 diskId1|diskName1;diskId2|diskName2
   */
  DiskInfo?: string
  /**
   * 版本信息：0-基础版 1-专业版 2-旗舰版 3-普惠版
   */
  HostVersion?: number
  /**
   * 策略名称
   */
  StrategyName?: string
}

/**
 * DescribeWebPageServiceInfo返回参数结构体
 */
export interface DescribeWebPageServiceInfoResponse {
  /**
   * 是否已购服务：true-是，false-否
   */
  Status?: boolean
  /**
   * 已使用授权数
   */
  UsedNum?: number
  /**
   * 剩余授权数
   */
  ResidueNum?: number
  /**
   * 已购授权数
   */
  BuyNum?: number
  /**
   * 临近到期数量
   */
  ExpireNum?: number
  /**
   * 所有授权机器信息
   */
  AllAuthorizedMachines?: Array<ProtectMachineInfo>
  /**
   * 临近到期授权机器信息
   */
  ExpireAuthorizedMachines?: Array<ProtectMachine>
  /**
   * 已过期授权数
   */
  ExpiredNum?: number
  /**
   * 防护目录数
   */
  ProtectDirNum?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeJavaMemShellPluginList返回参数结构体
 */
export interface DescribeJavaMemShellPluginListResponse {
  /**
   * java内存马插件列表
   */
  List?: Array<JavaMemShellPluginSetting>
  /**
   * 总数
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyLogKafkaState返回参数结构体
 */
export interface ModifyLogKafkaStateResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 基线策略信息
 */
export interface BaselinePolicy {
  /**
   * 策略名称,长度不超过128英文字符
   */
  PolicyName: string
  /**
   * 检测间隔[1:1天|3:3天|5:5天|7:7天]
   */
  DetectInterval: number
  /**
   * 检测时间
   */
  DetectTime: string
  /**
   * 是否开启[0:未开启|1:开启]
   */
  IsEnabled: number
  /**
   * 资产类型[0:所有专业版旗舰版|1:id|2:ip]
   */
  AssetType: number
  /**
   * 策略Id
   */
  PolicyId?: number
  /**
   * 关联基线项数目
   */
  RuleCount?: number
  /**
   * 关联基线项数目
   */
  ItemCount?: number
  /**
   * 关联基线主机数目
   */
  HostCount?: number
  /**
   * 规则Id
   */
  RuleIds?: Array<number | bigint>
  /**
   * 主机Id
   */
  HostIds?: Array<string>
  /**
   * 主机Ip
   */
  HostIps?: Array<string>
  /**
   * 是否是系统默认
   */
  IsDefault?: number
}

/**
 * DescribeMalwareRiskOverview返回参数结构体
 */
export interface DescribeMalwareRiskOverviewResponse {
  /**
   * 无
   */
  Data?: MalwareRiskOverview
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteMaliciousRequestWhiteList返回参数结构体
 */
export interface DeleteMaliciousRequestWhiteListResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeJavaMemShellList请求参数结构体
 */
export interface DescribeJavaMemShellListRequest {
  /**
   * 过滤条件：InstanceID、IP、

MachineName主机名模糊查询, Type，Status精确匹配，CreateBeginTime，CreateEndTime时间段
   */
  Filters?: Array<Filters>
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
 * DescribeAgentInstallationToken返回参数结构体
 */
export interface DescribeAgentInstallationTokenResponse {
  /**
   * 安装命令token
   */
  Token?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 大屏可视化紧急通知
 */
export interface ScreenEmergentMsg {
  /**
   * 通知标签/标题
   */
  Title?: string
  /**
   * 通知内容
   */
  Text?: string
  /**
   * 跳转类型：0=漏洞管理
   */
  Type?: number
}

/**
 * DescribeAssetMachineTagTop返回参数结构体
 */
export interface DescribeAssetMachineTagTopResponse {
  /**
   * Top5标签及数量
   */
  Tags?: Array<AssetKeyVal>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * FixBaselineDetect返回参数结构体
 */
export interface FixBaselineDetectResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateScanMalwareSetting返回参数结构体
 */
export interface CreateScanMalwareSettingResponse {
  /**
   * 任务id
   */
  TaskId?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeRansomDefenseTrend返回参数结构体
 */
export interface DescribeRansomDefenseTrendResponse {
  /**
   * 勒索事件数量
   */
  EventCount?: number
  /**
   * 影响行业数量
   */
  IndustryCount?: number
  /**
   * 开通勒索的公司数量
   */
  CompanyCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CKafka实例信息
 */
export interface CKafkaInstanceInfo {
  /**
   * 实例ID
   */
  InstanceID?: string
  /**
   * 实例名称
   */
  InstanceName?: string
  /**
   * 版本号
   */
  KafkaVersion?: string
  /**
   * 主题列表
   */
  TopicList?: Array<CKafkaTopicInfo>
  /**
   * 路由列表
   */
  RouteList?: Array<CKafkaRouteInfo>
  /**
   * 磁盘容量，单位GB
   */
  DiskSize?: number
  /**
   * vpcId，如果为空，说明是基础网络
   */
  VpcId?: string
  /**
   * 子网id
   */
  SubnetId?: string
  /**
   * 状态，1表示健康，2表示告警，3 表示实例状态异常
   */
  Healthy?: number
  /**
   * 可用区
   */
  Zone?: string
  /**
   * 地域
   */
  Az?: string
  /**
   * 实例带宽，单位Mbps
   */
  Bandwidth?: number
}

/**
 * ExportProtectDirList返回参数结构体
 */
export interface ExportProtectDirListResponse {
  /**
   * 任务ID,需要到接口“异步导出任务”ExportTasks获取DownloadUrl下载地址
   */
  TaskId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
 * ModifyReverseShellRulesAggregation返回参数结构体
 */
export interface ModifyReverseShellRulesAggregationResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
  MachineIp?: string
  /**
   * 主机外网IP
   */
  MachineWanIp?: string
  /**
   * 主机Quuid
   */
  Quuid?: string
  /**
   * 主机Uuid
   */
  Uuid?: string
  /**
   * 操作系统信息
   */
  OsInfo?: string
  /**
   * 主机业务组ID
   */
  ProjectId?: number
  /**
   * 主机标签
   */
  Tag?: Array<MachineTag>
  /**
   * Web应用名
   */
  Name?: string
  /**
   * 版本
   */
  Version?: string
  /**
   * 语言
   */
  Lang?: string
  /**
   * 服务类型
   */
  ServiceType?: string
  /**
   * 主机名称
   */
  MachineName?: string
  /**
   * 数据更新时间
   */
  UpdateTime?: string
  /**
   * 首次采集时间
   */
  FirstTime?: string
  /**
   * 是否新增[0:否|1:是]
   */
  IsNew?: number
  /**
   *  附加信息
   */
  MachineExtraInfo?: MachineExtraInfo
  /**
   * 应用路径
   */
  Path?: string
}

/**
 * ModifyJavaMemShellsStatus请求参数结构体
 */
export interface ModifyJavaMemShellsStatusRequest {
  /**
   * 目标处理状态： 0 - 待处理 1 - 已加白 2 - 已删除 3 - 已忽略 4 - 已手动处理
   */
  Status: number
  /**
   * 事件Id数组
   */
  Ids?: Array<number | bigint>
  /**
   * 是否更新全部，只支持忽略、已处理、删除
   */
  UpdateAll?: boolean
}

/**
 * DescribeFileTamperRuleInfo请求参数结构体
 */
export interface DescribeFileTamperRuleInfoRequest {
  /**
   * 规则id
   */
  Id: number
  /**
   * 控制返回的uuids 数量
   */
  Limit?: number
  /**
   * 控制返回的uuids 数量，起始位置
   */
  Offset?: number
}

/**
 * ExportAttackEvents请求参数结构体
 */
export interface ExportAttackEventsRequest {
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
 * ModifyBaselineRuleIgnore请求参数结构体
 */
export interface ModifyBaselineRuleIgnoreRequest {
  /**
   * 规则名称
   */
  RuleName: string
  /**
   * 资产类型[0:所有专业版旗舰版|1:id|2:ip]
   */
  AssetType: number
  /**
   * 规则Id
   */
  RuleId?: number
  /**
   * 关联项
   */
  ItemIds?: Array<number | bigint>
  /**
   * 主机Id
   */
  HostIds?: Array<string>
  /**
   * 主机Ip
   */
  HostIps?: Array<string>
  /**
   * 是否全选过滤
   */
  SelectAll?: number
  /**
   * <li>ItemName - string - 是否必填：否 - 项名称</li>
   */
  Filters?: Array<Filter>
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
  /**
   * 自动加购/扩容授权开关,默认 1, 0关闭, 1开启
   */
  AutoRepurchaseSwitch?: number
  /**
   * 自动加购的订单是否自动续费,默认0 ,0关闭, 1开启
   */
  AutoRepurchaseRenewSwitch?: number
  /**
   * 手动购买的订单是否自动续费,默认0, 0关闭 ,1 开启
   */
  RepurchaseRenewSwitch?: number
}

/**
 * DescribeLogDeliveryKafkaOptions请求参数结构体
 */
export interface DescribeLogDeliveryKafkaOptionsRequest {
  /**
   * kafka实例id
   */
  InstanceID?: string
}

/**
 * DescribeAssetWebLocationInfo返回参数结构体
 */
export interface DescribeAssetWebLocationInfoResponse {
  /**
   * 站点信息
   */
  WebLocation?: AssetWebLocationInfo
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateIncidentBacktracking返回参数结构体
 */
export interface CreateIncidentBacktrackingResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 异常进程事件
 */
export interface RiskProcessEvent {
  /**
   * 事件ID
   */
  EventId?: number
  /**
   * 主机名称
   */
  HostName?: string
  /**
   * 主机IP
   */
  HostIp?: string
  /**
   * 外网IP
   */
  WanIp?: string
  /**
   * 进程ID
   */
  ProcessId?: number
  /**
   * 文件路径
   */
  FilePath?: string
  /**
   * 执行命令
   */
  CmdLine?: string
  /**
   * 进程启动时间
   */
  StartTime?: string
  /**
   * 最近检测时间
   */
  DetectTime?: string
  /**
   * 病毒名称
   */
  VirusName?: string
  /**
   * 木马检测平台 [1:云查杀引擎|2:TAV|3:binaryAi|4:异常行为|5:威胁情报]
   */
  CheckPlatform?: Array<string>
  /**
   * 病毒标签
   */
  VirusTags?: Array<string>
  /**
   * 威胁描述
   */
  ThreatDesc?: string
  /**
   * 建议方案
   */
  SuggestSolution?: string
  /**
   * 参考链接
   */
  ReferenceLink?: string
  /**
   * 处理状态[0待处理;1已处理;2查杀中;3已查杀;4已退出;5忽略]
   */
  HandleStatus?: number
  /**
   * 主机在线状态
   */
  OnlineStatus?: number
  /**
   * 附加信息
   */
  MachineExtraInfo?: MachineExtraInfo
  /**
   * 主机uuid
   */
  Uuid?: string
}

/**
 * StartBaselineDetect返回参数结构体
 */
export interface StartBaselineDetectResponse {
  /**
   * 扫描任务ID
   */
  TaskId?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
 * ModifyBashPolicy返回参数结构体
 */
export interface ModifyBashPolicyResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ExportLicenseDetail请求参数结构体
 */
export interface ExportLicenseDetailRequest {
  /**
   * 多个条件筛选时 LicenseStatus,DeadlineStatus,ResourceId,Keywords 取交集
<li> LicenseType  授权类型, 0 专业版-按量计费, 1专业版-包年包月 , 2 旗舰版-包年包月</li>
<li>ResourceId 资源ID</li>
   */
  Filters?: Array<Filters>
  /**
   * 是否导出全部授权详情
   */
  IsHistory?: boolean
  /**
   * 标签筛选,平台标签能力,这里传入 标签键,标签值作为一个对象
   */
  Tags?: Array<Tags>
  /**
   * 导出月份, 该参数仅在IsHistory 时可选.
   */
  ExportMonth?: string
}

/**
 * 【云安全预警】大屏可视化数据Name Value 数据
 */
export interface ScreenNameValue {
  /**
   * 统计类型 不同接口对应不同的内容
   */
  Name?: string
  /**
   * 统计数量
   */
  Value?: number
}

/**
 * CreateLicenseOrder请求参数结构体
 */
export interface CreateLicenseOrderRequest {
  /**
   * 标签数组, 空则表示不需要绑定标签
   */
  Tags?: Array<Tags>
  /**
   * 授权类型, 0 专业版-按量计费, 1专业版-包年包月 , 2 旗舰版-包年包月
默认为0
   */
  LicenseType?: number
  /**
   * 授权数量 , 需要购买的数量.
默认为1
   */
  LicenseNum?: number
  /**
   * 购买订单地域,这里仅支持 1 广州,9 新加坡. 推荐选择广州. 新加坡地域为白名单用户购买.
默认为1
   */
  RegionId?: number
  /**
   * 项目ID .
默认为0
   */
  ProjectId?: number
  /**
   * 购买时间长度,默认1 , 可选值为1,2,3,4,5,6,7,8,9,10,11,12,24,36
该参数仅包年包月生效
   */
  TimeSpan?: number
  /**
   * 是否自动续费, 默认不自动续费.
该参数仅包年包月生效
   */
  AutoRenewFlag?: boolean
  /**
   * 该字段作废
   */
  AutoProtectOpenConfig?: string
  /**
   * 变配参数
   */
  ModifyConfig?: OrderModifyObject
}

/**
 * CreateNetAttackWhiteList返回参数结构体
 */
export interface CreateNetAttackWhiteListResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
  ExportId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
  TaskId?: string
  /**
   * 主机个数
   */
  HostNum?: number
  /**
   * 服务状态 0未启动，·响应中，2响应完成
   */
  Status?: number
  /**
   * 服务开始时间
   */
  StartTime?: string
  /**
   * 服务结束时间
   */
  EndTime?: string
  /**
   * 报告下载地址
   */
  ReportPath?: string
}

/**
 * ExportVulDefenceList返回参数结构体
 */
export interface ExportVulDefenceListResponse {
  /**
   * 导出文件Id 可通过ExportTasks接口下载
   */
  TaskId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyLogKafkaDeliverType返回参数结构体
 */
export interface ModifyLogKafkaDeliverTypeResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
 * DescribeBaselineScanSchedule请求参数结构体
 */
export interface DescribeBaselineScanScheduleRequest {
  /**
   * 任务id
   */
  TaskId: number
}

/**
 * RetryCreateSnapshot请求参数结构体
 */
export interface RetryCreateSnapshotRequest {
  /**
   * 修复任务id
   */
  FixId: number
  /**
   * 主机quuid
   */
  Quuid: string
  /**
   * 任务进度返回的快照唯一Id
   */
  Id: number
}

/**
 * ExportVulDefenceEvent请求参数结构体
 */
export interface ExportVulDefenceEventRequest {
  /**
   * 过滤条件：Keywords: ip或者主机名, VulKeywords漏洞名或者CveId模糊查询; Quuid，VulId，EventType，Status精确匹配，CreateBeginTime，CreateEndTime时间段查询
   */
  Filters?: Array<Filter>
  /**
   * 导出字段，默认全导出
   */
  Where?: Array<string>
}

/**
 * DescribeVulDefenceSetting返回参数结构体
 */
export interface DescribeVulDefenceSettingResponse {
  /**
   * 防御开关，0 关闭 1 开启
   */
  Enable?: number
  /**
   * 影响范围：1 全网旗舰版主机，0 quuid列表主机
   */
  Scope?: number
  /**
   * 影响主机quuid列表
   */
  Quuids?: Array<string>
  /**
   * 当前旗舰版主机数量
   */
  FlagshipCount?: number
  /**
   * 影响主机id列表
   */
  InstanceIds?: Array<string>
  /**
   * 新增旗舰版主机自动加入;1是，0否
   */
  AutoInclude?: number
  /**
   * 排除的主机id列表
   */
  ExcludeInstanceIds?: Array<string>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeEmergencyVulList返回参数结构体
 */
export interface DescribeEmergencyVulListResponse {
  /**
   * 漏洞列表
   */
  List?: Array<EmergencyVul>
  /**
   * 漏洞总条数
   */
  TotalCount?: number
  /**
   * 是否存在风险
   */
  ExistsRisk?: boolean
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DestroyOrder返回参数结构体
 */
export interface DestroyOrderResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
  Total?: number
  /**
   * 账号列表
   */
  Users?: Array<AssetUserBaseInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
  Ttl?: number
}

/**
 * 高危命令数据
 */
export interface BashEvent {
  /**
   * 数据ID
   */
  Id?: number
  /**
   * 主机安全ID
   */
  Uuid?: string
  /**
   * 主机ID
   */
  Quuid?: string
  /**
   * 主机内网IP
   */
  Hostip?: string
  /**
   * 执行用户名
   */
  User?: string
  /**
   * 平台类型
   */
  Platform?: number
  /**
   * 执行命令
   */
  BashCmd?: string
  /**
   * 规则ID
   */
  RuleId?: number
  /**
   * 规则名称
   */
  RuleName?: string
  /**
   * 规则等级：1-高 2-中 3-低
   */
  RuleLevel?: number
  /**
   * 处理状态： 0 = 待处理 1= 已处理, 2 = 已加白， 3 = 已忽略
   */
  Status?: number
  /**
   * 发生时间
   */
  CreateTime?: string
  /**
   * 主机名
   */
  MachineName?: string
  /**
   * 0: bash日志 1: 实时监控(雷霆版)
   */
  DetectBy?: number
  /**
   * 进程id
   */
  Pid?: string
  /**
   * 进程名称
   */
  Exe?: string
  /**
   * 处理时间
   */
  ModifyTime?: string
  /**
   * 规则类别  0=系统规则，1=用户规则
   */
  RuleCategory?: number
  /**
   * 自动生成的正则表达式
   */
  RegexBashCmd?: string
  /**
   * 主机HostName
   */
  HostName?: string
}

/**
 * DeleteMalwares请求参数结构体
 */
export interface DeleteMalwaresRequest {
  /**
   * 木马记录ID数组 (最大100条)
   */
  Ids?: Array<number | bigint>
  /**
   * 是否删除全部
   */
  All?: boolean
}

/**
 * RecoverMalwares返回参数结构体
 */
export interface RecoverMalwaresResponse {
  /**
   * 恢复成功id数组，若无则返回空数组
   */
  SuccessIds?: Array<number | bigint>
  /**
   * 恢复失败id数组，若无则返回空数组
   */
  FailedIds?: Array<number | bigint>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteBaselineRule请求参数结构体
 */
export interface DeleteBaselineRuleRequest {
  /**
   * 规则Id
   */
  RuleId: number
}

/**
 * 本地提权规则
 */
export interface PrivilegeRule {
  /**
   * 规则ID
   */
  Id?: number
  /**
   * 客户端ID
   */
  Uuid?: string
  /**
   * 进程名
   */
  ProcessName?: string
  /**
   * 是否S权限
   */
  SMode?: number
  /**
   * 操作人
   */
  Operator?: string
  /**
   * 是否全局规则
   */
  IsGlobal?: number
  /**
   * 状态(0: 有效 1: 无效)
   */
  Status?: number
  /**
   * 创建时间
   */
  CreateTime?: string
  /**
   * 修改时间
   */
  ModifyTime?: string
  /**
   * 主机IP
   */
  Hostip?: string
}

/**
 * 企微机器人主机范围
 */
export interface WebHookHostLabel {
  /**
   * 主机范围[1:所属项目|2:腾讯云标签|3:主机安全标签|4:自选]空数组为全部
   */
  Type: number
  /**
   * 主机项目或标签内容
   */
  Values: Array<string>
}

/**
 * 主机列表查询接口相应数据HostList的TagList节点
 */
export interface RansomDefenseStrategy {
  /**
   * 策略id
   */
  Id?: number
  /**
   * 操作uin
   */
  Uin?: string
  /**
   * 策略名称
   */
  Name?: string
  /**
   * 策略备注
   */
  Description?: string
  /**
   * 开启状态：0关闭，1开启
   */
  Status?: number
  /**
   * 是否对所有主机生效
   */
  IsAll?: number
  /**
   * 包含目录，用;分隔
   */
  IncludeDir?: string
  /**
   * 包含目录，用;分隔
   */
  ExcludeDir?: string
  /**
   * 备份模式： 0按周，1按天
   */
  BackupType?: number
  /**
   * 备份星期天数（1-7）：1;2;3;4
   */
  Weekday?: string
  /**
   * 备份执行时间点(0-23): 11:00;12:00
   */
  Hour?: string
  /**
   * 保存天数，0永久保存
   */
  SaveDay?: number
  /**
   * 创建时间
   */
  CreateTime?: string
  /**
   * 最近修改时间
   */
  ModifyTime?: string
  /**
   * 绑定机器数
   */
  MachineCount?: number
}

/**
 * DescribeIgnoreHostAndItemConfig请求参数结构体
 */
export interface DescribeIgnoreHostAndItemConfigRequest {
  /**
   * <li>ItemId - int64 - 是否必填：否 - 项Id</li>
<li>RuleId - int64 - 是否必填：否 - 规则Id</li>
<li>HostId - string - 是否必填：否 - 主机Id</li>
   */
  Filters?: Array<Filter>
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
  VulCategories?: string
  /**
   * 危害等级：1-低危；2-中危；3-高危；4-严重 (多选英文逗号分隔)
   */
  VulLevels?: string
  /**
   * 定期检测间隔时间（天）
   */
  TimerInterval?: number
  /**
   * 定期检测时间，如：00:00
   */
  TimerTime?: string
  /**
   * 是否紧急漏洞：0-否 1-是
   */
  VulEmergency?: number
  /**
   * 开始时间
   */
  StartTime?: string
  /**
   * 是否开启
   */
  EnableScan?: number
  /**
   * 结束时间
   */
  EndTime?: string
  /**
   * 一键扫描超时时长，如：1800秒（s）
   */
  ClickTimeout?: number
  /**
   * 为空默认扫描全部专业版、旗舰版、普惠版主机，不为空只扫描选中主机
   */
  Uuids?: Array<string>
  /**
   * 0版本比对,2版本比对+poc
   */
  ScanMethod?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 机器清理记录对象
 */
export interface MachineClearHistory {
  /**
   * ID值
   */
  Id?: number
  /**
   * 实例ID
   */
  InstanceId?: string
  /**
   * 实例名称
   */
  InstanceName?: string
  /**
   * 公网IP
   */
  PublicIp?: string
  /**
   * 内网IP
   */
  PrivateIp?: string
  /**
   * 客户端最后离线时间
   */
  AgentLastOfflineTime?: string
  /**
   * 创建时间
   */
  CreateTime?: string
}

/**
 * DescribeSecurityBroadcasts返回参数结构体
 */
export interface DescribeSecurityBroadcastsResponse {
  /**
   * 列表
   */
  List?: Array<Broadcasts>
  /**
   * 总共多少条
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeSearchLogs返回参数结构体
 */
export interface DescribeSearchLogsResponse {
  /**
   * 历史搜索记录 保留最新的10条
   */
  Data?: Array<string>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
  Database?: AssetDatabaseDetail
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ExportBaselineItemList返回参数结构体
 */
export interface ExportBaselineItemListResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * SyncMachines请求参数结构体
 */
export interface SyncMachinesRequest {
  /**
   * 是否同步
   */
  Sync?: boolean
}

/**
 * 专家服务-月巡检报告
 */
export interface MonthInspectionReport {
  /**
   * 巡检报告名称
   */
  ReportName?: string
  /**
   * 巡检报告下载地址
   */
  ReportPath?: string
  /**
   * 巡检报告更新时间
   */
  ModifyTime?: string
}

/**
 * SetBashEventsStatus请求参数结构体
 */
export interface SetBashEventsStatusRequest {
  /**
   * ID数组，最大100条。
   */
  Ids: Array<number | bigint>
  /**
   * 新状态(0-待处理 1-高危 2-正常)
   */
  Status: number
}

/**
 * 反弹Shell数据
 */
export interface ReverseShell {
  /**
   * ID 主键
   */
  Id?: number
  /**
   * 主机安全UUID
   */
  Uuid?: string
  /**
   * 主机ID
   */
  Quuid?: string
  /**
   * 主机内网IP
   */
  Hostip?: string
  /**
   * 目标IP
   */
  DstIp?: string
  /**
   * 目标端口
   */
  DstPort?: number
  /**
   * 进程名
   */
  ProcessName?: string
  /**
   * 进程路径
   */
  FullPath?: string
  /**
   * 命令详情
   */
  CmdLine?: string
  /**
   * 执行用户
   */
  UserName?: string
  /**
   * 执行用户组
   */
  UserGroup?: string
  /**
   * 父进程名
   */
  ParentProcName?: string
  /**
   * 父进程用户
   */
  ParentProcUser?: string
  /**
   * 父进程用户组
   */
  ParentProcGroup?: string
  /**
   * 父进程路径
   */
  ParentProcPath?: string
  /**
   * 处理状态：0-待处理 2-白名单 3-已处理 4-已忽略 6-已拦截
   */
  Status?: number
  /**
   * 产生时间
   */
  CreateTime?: string
  /**
   * 主机名
   */
  MachineName?: string
  /**
   * 进程树
   */
  ProcTree?: string
  /**
   * 检测方法: 0行为分析; 1命令特征检测
   */
  DetectBy?: number
  /**
   *  主机额外信息
   */
  MachineExtraInfo?: MachineExtraInfo
  /**
   * 进程id
   */
  Pid?: number
  /**
   * 威胁等级：0中危，1高危
   */
  RiskLevel?: number
}

/**
 * 软件应用关联进程信息
 */
export interface AssetAppProcessInfo {
  /**
   * 名称
   */
  Name?: string
  /**
   * 进程状态
   */
  Status?: string
  /**
   * 进程版本
   */
  Version?: string
  /**
   * 路径
   */
  Path?: string
  /**
   * 用户
   */
  User?: string
  /**
   * 启动时间
   */
  StartTime?: string
}

/**
 * DescribeBaselineEffectHostList返回参数结构体
 */
export interface DescribeBaselineEffectHostListResponse {
  /**
   * 记录总数
   */
  TotalCount?: number
  /**
   * 影响服务器列表
   */
  EffectHostList?: Array<BaselineEffectHost>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeWebHookRule返回参数结构体
 */
export interface DescribeWebHookRuleResponse {
  /**
   * 规则内容
   */
  Data?: WebHookRuleDetail
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
 * DescribeBaselineRuleIgnoreList返回参数结构体
 */
export interface DescribeBaselineRuleIgnoreListResponse {
  /**
   * 总数
   */
  Total?: number
  /**
   * 列表
   */
  List?: Array<BaselineRule>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ExportJavaMemShells请求参数结构体
 */
export interface ExportJavaMemShellsRequest {
  /**
   * 过滤条件：InstanceID、IP、

MachineName主机名模糊查询, Type，Status精确匹配，CreateBeginTime，CreateEndTime时间段
   */
  Filters?: Array<Filter>
  /**
   * 导出字段
   */
  Where?: Array<string>
}

/**
 * DescribeVersionCompareChart返回参数结构体
 */
export interface DescribeVersionCompareChartResponse {
  /**
   * json 字符串
   */
  Data?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 专家服务-旗舰重保信息
 */
export interface ProtectNetInfo {
  /**
   * 任务id
   */
  TaskId?: string
  /**
   * 重保天数
   */
  ProtectDays?: number
  /**
   * 重保状态 0未启动，1重保中，2已完成
   */
  Status?: number
  /**
   * 重保启动时间
   */
  StartTime?: string
  /**
   * 重保完成时间
   */
  EndTime?: string
  /**
   * 报告下载地址
   */
  ReportPath?: string
}

/**
 * 网络攻击事件
 */
export interface NetAttackEvent {
  /**
   * 日志ID
   */
  Id?: number
  /**
   * 客户端ID
   */
  Uuid?: string
  /**
   * 目标端口
   */
  DstPort?: number
  /**
   * 来源IP
   */
  SrcIP?: string
  /**
   * 来源地
   */
  Location?: string
  /**
   * 漏洞id
   */
  VulId?: number
  /**
   * 漏洞名称
   */
  VulName?: string
  /**
   * 攻击时间
   */
  MergeTime?: string
  /**
   * 主机额外信息
   */
  MachineExtraInfo?: MachineExtraInfo
  /**
   * 攻击状态，0: 尝试攻击 1: 实锤攻击(攻击成功)
   */
  Type?: number
  /**
   * 处理状态，0 待处理 1 已处理 2 已加白  3 已忽略 4 已删除 5: 已开启防御
   */
  Status?: number
  /**
   * 漏洞是否支持防御，0:不支持 1:支持
   */
  VulSupportDefense?: number
  /**
   * 是否开启漏洞防御，0关1开
   */
  VulDefenceStatus?: number
  /**
   * 机器付费版本，0 基础版，1专业版，2旗舰版，3普惠版
   */
  PayVersion?: number
  /**
   * cvm uuid
   */
  Quuid?: string
  /**
   * 攻击次数
   */
  Count?: number
  /**
   * 是否今日新增主机
   */
  New?: boolean
}

/**
 * DescribeMachineDefenseCnt返回参数结构体
 */
export interface DescribeMachineDefenseCntResponse {
  /**
   * 攻击检测统计
   */
  AttackLogs?: number
  /**
   * 核心文件监控统计
   */
  FileTamper?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 基线信息
 */
export interface BaselineItemInfo {
  /**
   * 基线检测项ID
   */
  ItemId?: number
  /**
   * 检测项名字
   */
  ItemName?: string
  /**
   * 检测项所属规则的ID
   */
  RuleId?: number
  /**
   * 检测项描述
   */
  ItemDesc?: string
  /**
   * 检测项的修复方法
   */
  FixMethod?: string
  /**
   * 检测项所属规则名字
   */
  RuleName?: string
  /**
   * 危险等级
   */
  Level?: number
  /**
   * 系统规则ID
   */
  SysRuleId?: number
  /**
   * 被引自定义规则信息
   */
  RelatedCustomRuleInfo?: Array<BaselineCustomRuleIdName>
}

/**
 * 攻击趋势统计数据
 */
export interface NetAttackTrend {
  /**
   * 时间点，如 2023-05-06
   */
  DateTime?: string
  /**
   * 攻击次数
   */
  AttackCount?: number
  /**
   * 尝试攻击次数
   */
  TryAttackCount?: number
  /**
   * 攻击成功次数
   */
  SuccAttackCount?: number
}

/**
 * DescribeVertexDetail请求参数结构体
 */
export interface DescribeVertexDetailRequest {
  /**
   * 点id列表
   */
  VertexIds: Array<string>
  /**
   * 事件id
   */
  IncidentId: string
  /**
   * 事件所在表名
   */
  TableName: string
}

/**
 * ExportAssetWebServiceInfoList请求参数结构体
 */
export interface ExportAssetWebServiceInfoListRequest {
  /**
   * 查询指定Quuid主机的信息
   */
  Quuid?: string
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
   * 可选排序：[FirstTime|ProcessCount]
   */
  By?: string
}

/**
 * SetBashEventsStatus返回参数结构体
 */
export interface SetBashEventsStatusResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
  HostName?: string
  /**
   * 机器IP
   */
  HostIp?: string
  /**
   * 防护目录数
   */
  SafeguardDirNum?: number
}

/**
 * DescribeAssetUserInfo请求参数结构体
 */
export interface DescribeAssetUserInfoRequest {
  /**
   * 云服务器UUID
   */
  Quuid: string
  /**
   * 主机安全UUID
   */
  Uuid: string
  /**
   * 账户名
   */
  Name: string
}

/**
 * ExportBaselineItemList请求参数结构体
 */
export interface ExportBaselineItemListRequest {
  /**
   * <li>PolicyId - int64 - 是否必填：否 - 策略Id</li>
<li>RuleId - int64 - 是否必填：否 - 规则Id</li>
<li>HostId - string - 是否必填：否 - 主机Id</li>
<li>HostName - string - 是否必填：否 - 主机名</li>
<li>HostIp - string - 是否必填：否 - 主机IP</li>
<li>ItemId - String - 是否必填：否 - 检测项Id</li>
<li>ItemName - String - 是否必填：否 - 项名称</li>
<li>DetectStatus - int - 是否必填：否 - 检测状态[0:未通过|3:通过|5:检测中]</li>
<li>Level - int - 是否必填：否 - 风险等级</li>
<li>StartTime - string - 是否必填：否 - 开始时间</li>
<li>EndTime - string - 是否必填：否 - 结束时间</li>
   */
  Filters?: Array<Filter>
  /**
   * 0:过滤的结果导出；1:全部导出
   */
  ExportAll?: number
}

/**
 * UpdateBaselineStrategy返回参数结构体
 */
export interface UpdateBaselineStrategyResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeAgentInstallCommand请求参数结构体
 */
export interface DescribeAgentInstallCommandRequest {
  /**
   * 是否腾讯云
   */
  IsCloud: boolean
  /**
   * 网络类型：basic-基础网络，private-VPC, public-公网，direct-专线
   */
  NetType: string
  /**
   * 地域标示, NetType=direct时必填
   */
  RegionCode?: string
  /**
   * VpcId, NetType=direct时必填
   */
  VpcId?: string
  /**
   * 标签ID列表，IsCloud=false时才会生效
   */
  TagIds?: Array<number | bigint>
  /**
   * 命令有效期，非腾讯云时必填（已废弃，命令永久生效）
   */
  ExpireDate?: string
  /**
   * 代理方式接入的vip
   */
  Vip?: string
}

/**
 * DescribeMachineRegionList返回参数结构体
 */
export interface DescribeMachineRegionListResponse {
  /**
   * 云服务器类型地域列表
   */
  RegionList?: Array<RegionListDetail>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
 * DescribeScreenGeneralStat请求参数结构体
 */
export type DescribeScreenGeneralStatRequest = null

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
 * ModifyUsersConfig返回参数结构体
 */
export interface ModifyUsersConfigResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 服务器基础信息
 */
export interface MachineExtraInfo {
  /**
   * 公网IP
   */
  WanIP?: string
  /**
   * 内网IP
   */
  PrivateIP?: string
  /**
   * 网络类型，1:vpc网络 2:基础网络 3:非腾讯云网络
   */
  NetworkType?: number
  /**
   * 网络名，vpc网络情况下会返回vpc_id
   */
  NetworkName?: string
  /**
   * 实例ID
   */
  InstanceID?: string
  /**
   * 主机名
   */
  HostName?: string
}

/**
 * DescribeAttackEventInfo请求参数结构体
 */
export interface DescribeAttackEventInfoRequest {
  /**
   * 事件id
   */
  Id: number
}

/**
 * 核心文件监控事件
 */
export interface FileTamperEvent {
  /**
   * 机器名称
   */
  HostName?: string
  /**
   * 机器IP
   */
  HostIp?: string
  /**
   * 发生时间
   */
  CreateTime?: string
  /**
   * 最近发生时间
   */
  ModifyTime?: string
  /**
   * 事件id
   */
  Id?: number
  /**
   * 主机uuid
   */
  Uuid?: string
  /**
   * cvm id
   */
  Quuid?: string
  /**
   * 事件类型/动作  0 -- 告警
   */
  Type?: number
  /**
   * 进程路径
   */
  ProcessExe?: string
  /**
   * 进程参数
   */
  ProcessArgv?: string
  /**
   * 目标文件路径
   */
  Target?: string
  /**
   * 处理状态  0 -- 待处理 1 -- 已加白 2 -- 已删除 3 - 已忽略 4-已手动处理
   */
  Status?: number
  /**
   * 事件产生次数
   */
  EventCount?: number
  /**
   * 规则id
   */
  RuleId?: number
  /**
   * 规则名称
   */
  RuleName?: string
  /**
   * 事件详情: json格式
   */
  Pstree?: string
  /**
   * 规则类型 0系统规则 1自定义规则
   */
  RuleCategory?: number
  /**
   * 主机在线信息 ONLINE、OFFLINE
   */
  MachineStatus?: string
  /**
   * 危害描述
   */
  Description?: string
  /**
   * 修护建议
   */
  Suggestion?: string
  /**
   * 内网ip
   */
  PrivateIp?: string
  /**
   * 进程权限
   */
  ExePermission?: string
  /**
   * 用户名
   */
  UserName?: string
  /**
   * 用户组
   */
  UserGroup?: string
  /**
   * 进程名
   */
  ExeMd5?: string
  /**
   * 进程文件大小
   */
  ExeSize?: number
  /**
   * 进程执行时长
   */
  ExeTime?: number
  /**
   * 目标文件大小
   */
  TargetSize?: number
  /**
   * 目标文件权限
   */
  TargetPermission?: string
  /**
   * 目标文件更新时间
   */
  TargetModifyTime?: string
  /**
   * 目标文件创建时间
   */
  TargetCreatTime?: string
  /**
   * 进程pid
   */
  ExePid?: number
  /**
   * 文件名称
   */
  TargetName?: string
  /**
   * 参考链接
   */
  Reference?: string
  /**
   * 风险等级 0：无， 1: 高危， 2:中危， 3: 低危
   */
  Level?: number
  /**
   * 进程名称
   */
  ExeName?: string
  /**
   *  主机额外信息
   */
  MachineExtraInfo?: MachineExtraInfo
  /**
   * 文件威胁行为
<li>read 读取文件</li>
<li>write 修改文件</li>
   */
  FileAction?: string
}

/**
 * CreateLogExport请求参数结构体
 */
export interface CreateLogExportRequest {
  /**
   * 日志导出数量, 最大值5000万
   */
  Count: number
  /**
   * 日志导出起始时间，毫秒时间戳
   */
  StartTime: number
  /**
   * 日志导出结束时间，毫秒时间戳
   */
  EndTime: number
  /**
   * 日志导出检索语句，不支持[SQL语句]
   */
  QueryString?: string
  /**
   * 日志导出时间排序。desc，asc，默认为desc
   */
  Sort?: string
  /**
   * 日志导出数据格式。json，csv，默认为json
   */
  Format?: string
}

/**
 * DescribeLicense返回参数结构体
 */
export interface DescribeLicenseResponse {
  /**
   * 支持功能
   */
  FunctionsEn?: Array<string>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 主机关联核心文件规则数量信息
 */
export interface FileTamperRuleCount {
  /**
   * 主机uuid
   */
  Uuid?: string
  /**
   * 关联规则的数量
   */
  Count?: number
  /**
   * 关联规则的名称（仅展示其中一条）
   */
  Name?: string
}

/**
 * DescribeMalwareFile返回参数结构体
 */
export interface DescribeMalwareFileResponse {
  /**
   * 木马文件下载地址
   */
  FileUrl?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeWebHookRule请求参数结构体
 */
export interface DescribeWebHookRuleRequest {
  /**
   * 规则Id
   */
  Id?: number
}

/**
 * DescribeSecurityBroadcastInfo返回参数结构体
 */
export interface DescribeSecurityBroadcastInfoResponse {
  /**
   * 安全播报文章详情
   */
  BroadcastInfo?: BroadcastInfo
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeLogDeliveryKafkaOptions返回参数结构体
 */
export interface DescribeLogDeliveryKafkaOptionsResponse {
  /**
   * 实例列表
   */
  InstanceList?: Array<CKafkaInstanceInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeScreenRiskAssetsTop返回参数结构体
 */
export interface DescribeScreenRiskAssetsTopResponse {
  /**
   * 统计详情图标数据 Name：展示主机ip 和地域， value：事件数量
   */
  Chart?: Array<ScreenNameValue>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 命令行内容
 */
export interface CommandLine {
  /**
   * 路径,需要base64加密
   */
  Exe?: string
  /**
   * 命令行,需要base64加密
   */
  Cmdline?: string
}

/**
 * ScanBaseline返回参数结构体
 */
export interface ScanBaselineResponse {
  /**
   * 正在扫描中的主机Quuid
   */
  ScanningQuuids?: Array<string>
  /**
   * 任务下发成功返回的TaskId
   */
  TaskId?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CheckLogKafkaConnectionState请求参数结构体
 */
export interface CheckLogKafkaConnectionStateRequest {
  /**
   * 接入方式,1公网域名接入，2支撑环境接入
   */
  AccessType: number
  /**
   * 接入地址，域名或ip，带端口
   */
  AccessAddr: string
  /**
   * 用户名
   */
  Username: string
  /**
   * 0不用密码，1有密码
   */
  HasPwd: number
  /**
   * 密码，使用aes加密
   */
  Pwd: string
  /**
   * kafka实例id
   */
  KafkaId: string
  /**
   * kafka版本
   */
  InsVersion: string
}

/**
 * ModifyNetAttackSetting请求参数结构体
 */
export interface ModifyNetAttackSettingRequest {
  /**
   * 0 关闭网络攻击检测，1开启网络攻击检测
   */
  NetAttackEnable: number
  /**
   * 0 新增告警事件默认待处理，1新增告警事件默认已处理，3新增告警事件默认忽略
   */
  NetAttackAlarmStatus: number
  /**
   * 1 全部旗舰版主机，0 Quuids列表主机
   */
  Scope?: number
  /**
   * 自选主机
   */
  InstanceIds?: Array<string>
  /**
   * 自选排除的主机
   */
  ExcludeInstanceIds?: Array<string>
  /**
   * 新增资产自动包含 0 不包含 1包含
   */
  AutoInclude?: number
}

/**
 * DescribeRiskDnsList返回参数结构体
 */
export interface DescribeRiskDnsListResponse {
  /**
   * 恶意请求列表数组
   */
  RiskDnsList?: Array<RiskDnsList>
  /**
   * 总数量
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ExportRiskDnsPolicyList请求参数结构体
 */
export interface ExportRiskDnsPolicyListRequest {
  /**
   * <li>PolicyType - int - 是否必填：否 - 策略类型</li>
<li>PolicyName - string - 是否必填：否 - 策略名称</li>
<li>Domain - string - 是否必填：否 - 域名(先对域名做urlencode,再base64)</li>
<li>PolicyAction- int - 是否必填：否 - 策略动作</li>
<li>IsEnabled - int - 是否必填：否 - 是否生效</li>
   */
  Filters?: Array<Filter>
  /**
   * 排序方式: [ASC:升序|DESC:降序]
   */
  Order?: string
  /**
   * 可选排序列: [PolicyName|HostType]
   */
  By?: string
}

/**
 * DescribeAssetWebAppList返回参数结构体
 */
export interface DescribeAssetWebAppListResponse {
  /**
   * 记录总数
   */
  Total?: number
  /**
   * 列表
   */
  WebApps?: Array<AssetWebAppBaseInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ExportAssetProcessInfoList请求参数结构体
 */
export interface ExportAssetProcessInfoListRequest {
  /**
   * 查询指定Quuid主机的信息
   */
  Quuid?: string
  /**
   * 过滤条件。
<li>Name - String - 是否必填：否 - 进程名</li>
<li>User - String - 是否必填：否 - 进程用户</li>
<li>Group - String - 是否必填：否 - 进程用户组</li>
<li>Pid - uint64 - 是否必填：否 - 进程ID</li>
<li>Ppid - uint64 - 是否必填：否 - 父进程ID</li>
<li>OsType - uint64 - 是否必填：否 - windows/linux</li>
<li>Status - string - 是否必填：否 - 进程状态：
0:全部
1:R 可执行
2:S 可中断
3:不可中断</li>
<li>RunTimeStart - String - 是否必填：否 - 运行开始时间</li>
<li>RunTimeEnd - String - 是否必填：否 - 运行结束时间</li>
<li>InstallByPackage - uint64 - 是否必填：否 - 是否包安装：0否，1是</li>
   */
  Filters?: Array<Filter>
  /**
   * 排序方式，asc升序 或 desc降序
   */
  Order?: string
  /**
   * 排序方式：[FirstTime|StartTime]
   */
  By?: string
}

/**
 * DescribeAssetWebAppCount返回参数结构体
 */
export interface DescribeAssetWebAppCountResponse {
  /**
   * 各Web应用数量
   */
  WebApps?: Array<AssetKeyVal>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 资源管理数据库列表信息
 */
export interface AssetDatabaseDetail {
  /**
   * 主机内网IP
   */
  MachineIp?: string
  /**
   * 主机外网IP
   */
  MachineWanIp?: string
  /**
   * 主机Quuid
   */
  Quuid?: string
  /**
   * 主机Uuid
   */
  Uuid?: string
  /**
   * 操作系统信息
   */
  OsInfo?: string
  /**
   * 数据库名
   */
  Name?: string
  /**
   * 版本
   */
  Version?: string
  /**
   * 监听端口
   */
  Port?: string
  /**
   * 协议
   */
  Proto?: string
  /**
   * 运行用户
   */
  User?: string
  /**
   * 绑定IP
   */
  Ip?: string
  /**
   * 配置文件路径
   */
  ConfigPath?: string
  /**
   * 日志文件路径
   */
  LogPath?: string
  /**
   * 数据路径
   */
  DataPath?: string
  /**
   * 运行权限
   */
  Permission?: string
  /**
   * 错误日志路径
   */
  ErrorLogPath?: string
  /**
   * 插件路径
   */
  PlugInPath?: string
  /**
   * 二进制路径
   */
  BinPath?: string
  /**
   * 启动参数
   */
  Param?: string
  /**
   * 数据更新时间
   */
  UpdateTime?: string
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
 * DescribeVulStoreList返回参数结构体
 */
export interface DescribeVulStoreListResponse {
  /**
   * 漏洞信息
   */
  List?: Array<VulStoreListInfo>
  /**
   * 总数
   */
  TotalCount?: number
  /**
   * 今日剩余搜索此时
   */
  Remaining?: number
  /**
   * 免费搜索次数
   */
  FreeSearchTimes?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeLoginWhiteHostList返回参数结构体
 */
export interface DescribeLoginWhiteHostListResponse {
  /**
   * 总数
   */
  TotalCount?: number
  /**
   * 服务器列表
   */
  Hosts?: Array<HostDesc>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteBaselineRule返回参数结构体
 */
export interface DeleteBaselineRuleResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyMaliciousRequestWhiteList返回参数结构体
 */
export interface ModifyMaliciousRequestWhiteListResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
 * 资产管理磁盘分区信息
 */
export interface AssetDiskPartitionInfo {
  /**
   * 分区名
   */
  Name?: string
  /**
   * 分区大小：单位G
   */
  Size?: number
  /**
   * 分区使用率
   */
  Percent?: number
  /**
   * 文件系统类型
   */
  Type?: string
  /**
   * 挂载目录
   */
  Path?: string
  /**
   * 已使用空间：单位G
   */
  Used?: number
}

/**
 * DescribeScreenMachineRegions请求参数结构体
 */
export type DescribeScreenMachineRegionsRequest = null

/**
 * SwitchBashRules返回参数结构体
 */
export interface SwitchBashRulesResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyWebHookPolicyStatus请求参数结构体
 */
export interface ModifyWebHookPolicyStatusRequest {
  /**
   * id
   */
  Id: number
  /**
   * 开关, 1禁用 0启用
   */
  IsDisabled?: number
}

/**
 * 恶意请求事件
 */
export interface RiskDnsEvent {
  /**
   * 事件Id
   */
  Id?: number
  /**
   * 策略ID
   */
  PolicyId?: number
  /**
   * 命中策略类型[-1:未知|0系统|1:用户]
   */
  PolicyType?: number
  /**
   * 命中策略名称
   */
  PolicyName?: string
  /**
   * 保护级别[0:基础版|1:专业版|2:旗舰版]
   */
  ProtectLevel?: number
  /**
   * 主机ID
   */
  HostId?: string
  /**
   * 主机名称
   */
  HostName?: string
  /**
   * 主机IP
   */
  HostIp?: string
  /**
   * 外网IP
   */
  WanIp?: string
  /**
   * 客户端ID
   */
  AgentId?: string
  /**
   * 访问域名
   */
  Domain?: string
  /**
   * 标签特性
   */
  Tags?: Array<string>
  /**
   * 访问次数
   */
  AccessCount?: number
  /**
   * 威胁描述
   */
  ThreatDesc?: string
  /**
   * 修复方案
   */
  SuggestSolution?: string
  /**
   * 参考链接
   */
  ReferenceLink?: string
  /**
   * 处理状态；[0:待处理|2:已加白|3:非信任状态|4:已处理|5:已忽略]
   */
  HandleStatus?: number
  /**
   * 进程ID
   */
  Pid?: number
  /**
   * 进程名
   */
  ProcessName?: string
  /**
   * 进程MD5
   */
  ProcessMd5?: string
  /**
   * 命令行
   */
  CmdLine?: string
  /**
   * 首次访问时间
   */
  FirstTime?: string
  /**
   * 最近访问时间
   */
  LastTime?: string
  /**
   * 主机在线状态[OFFLINE:离线|ONLINE:在线|UNKNOWN:未知]
   */
  HostStatus?: string
  /**
   * 附加信息
   */
  MachineExtraInfo?: MachineExtraInfo
  /**
   * [1:CentOS|2:Debian|3:Gentoo|4:Redhat|5:Ubuntu|6:Windows|7:TencentOS|8:CoreOS|9:FreeBSD|10:SUSE]
   */
  OsType?: number
}

/**
 * 基线检测信息
 */
export interface BaselineRuleInfo {
  /**
   * 检测项名称
   */
  RuleName?: string
  /**
   * 检测项描述
   */
  Description?: string
  /**
   * 修复建议
   */
  FixMessage?: string
  /**
   * 危害等级
   */
  Level?: number
  /**
   * 状态
   */
  Status?: number
  /**
   * 检测项id
   */
  RuleId?: number
  /**
   * 最后检测时间
   */
  LastScanAt?: string
  /**
   * 具体原因说明
   */
  RuleRemark?: string
  /**
   * 唯一Uuid
   */
  Uuid?: string
  /**
   * 唯一事件ID
   */
  EventId?: number
}

/**
 * DescribeExportMachines返回参数结构体
 */
export interface DescribeExportMachinesResponse {
  /**
   * 任务ID,需要到接口“异步导出任务”ExportTasks获取DownloadUrl下载地址
   */
  TaskId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
  State?: TaskStatus
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeBaselineItemRiskTop返回参数结构体
 */
export interface DescribeBaselineItemRiskTopResponse {
  /**
   * 结果数组
   */
  RiskItemTop5?: Array<BaselineRiskItem>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeAssetLoadInfo返回参数结构体
 */
export interface DescribeAssetLoadInfoResponse {
  /**
   * 系统负载
   */
  CpuLoad?: AssetLoadSummary
  /**
   * 内存使用率
   */
  MemLoad?: AssetLoadSummary
  /**
   * 硬盘使用率
   */
  DiskLoad?: AssetLoadSummary
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeMachineRiskCnt返回参数结构体
 */
export interface DescribeMachineRiskCntResponse {
  /**
   * 异地登录
   */
  HostLogin?: number
  /**
   * 密码破解
   */
  BruteAttack?: number
  /**
   * 恶意请求
   */
  MaliciousRequest?: number
  /**
   * 反弹shell
   */
  ReverseShell?: number
  /**
   * 高危命令
   */
  Bash?: number
  /**
   * 本地提权
   */
  PrivilegeEscalation?: number
  /**
   * 木马
   */
  Malware?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 大屏主机3D图 列表
 */
export interface ScreenRegionMachines {
  /**
   * 所有区域
   */
  Region?: string
  /**
   * 区域中文描述
   */
  RegionName?: string
  /**
   * 主机列表
   */
  Machines?: Array<ScreenMachine>
  /**
   * 此区域的主机总数
   */
  TotalCount?: number
  /**
   * 风险主机数量
   */
  RiskCnt?: number
  /**
   * 潜在风险主机数
   */
  AttackCnt?: number
  /**
   * 无风险主机数
   */
  SafetyCnt?: number
  /**
   * 离线/未安装主机数
   */
  UnAgentOfflineCnt?: number
  /**
   * 省略展示多少主机，等于0时没有省略展示
   */
  IgnoreCnt?: number
}

/**
 * 编辑白名单实体
 */
export interface UpdateHostLoginWhiteObj {
  /**
   * 地域信息数组
   */
  Places: Array<Place>
  /**
   * 来源ip
   */
  SrcIp: string
  /**
   * 用户名
   */
  UserName: string
  /**
   * 备注信息
   */
  Remark: string
  /**
   * 要更新的数据id
   */
  Id: number
  /**
   * 开始时间
   */
  StartTime?: string
  /**
   * 结束时间
   */
  EndTime?: string
}

/**
 * ModifyWebPageProtectSwitch返回参数结构体
 */
export interface ModifyWebPageProtectSwitchResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeAssetWebFrameCount返回参数结构体
 */
export interface DescribeAssetWebFrameCountResponse {
  /**
   * 各Web框架数量
   */
  WebFrames?: Array<AssetKeyVal>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
  List?: Array<ProtectEventLists>
  /**
   * 总数
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 不可隔离木马的机器信息
 */
export interface CanNotSeparateInfo {
  /**
   * 主机quuid
   */
  Quuid?: string
  /**
   * 主机uuid
   */
  Uuid?: string
  /**
   * 主机名
   */
  Alias?: string
  /**
   * 内网ip
   */
  PrivateIp?: string
  /**
   * 外网ip
   */
  PublicIp?: string
  /**
   * 隔离失败原因 1:agent离线
   */
  Reason?: number
}

/**
 * DescribeAssetWebLocationCount返回参数结构体
 */
export interface DescribeAssetWebLocationCountResponse {
  /**
   * 各Web站点数量
   */
  WebLocations?: Array<AssetKeyVal>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeBashEventsNew返回参数结构体
 */
export interface DescribeBashEventsNewResponse {
  /**
   * 总条数
   */
  TotalCount?: number
  /**
   * 高危命令事件列表
   */
  List?: Array<BashEventNew>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 查看漏洞修复详情
 */
export interface VulFixStatusInfo {
  /**
   * 漏洞id
   */
  VulId?: number
  /**
   * 漏洞名称
   */
  VulName?: string
  /**
   * 漏洞修复进度 1-100；
   */
  Progress?: number
  /**
   * 漏洞对应主机修复状态
   */
  HostList?: Array<VulFixStatusHostInfo>
  /**
   * 漏洞修复失败主机数量
   */
  FailCnt?: number
  /**
   * 修复成功的数量
   */
  FixSuccessCnt?: number
  /**
   * 修复方式 0组件更新或者安装补丁,1禁用服务
   */
  FixMethod?: number
}

/**
 * DeleteWebHookReceiver返回参数结构体
 */
export interface DeleteWebHookReceiverResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyBashPolicyStatus返回参数结构体
 */
export interface ModifyBashPolicyStatusResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 点详细信息
 */
export interface VertexDetail {
  /**
   * 该节点类型，进程:1；网络:2；文件:3；ssh:4
   */
  Type?: number
  /**
   * 各节点类型用到的时间，2022-11-29 00:00:00 格式
   */
  Time?: string
  /**
   * 告警信息
   */
  AlarmInfo?: Array<AlarmInfo>
  /**
   * 进程名，当该节点为进程时生效
   */
  ProcName?: string
  /**
   * 命令行，当该节点为进程时生效
   */
  CmdLine?: string
  /**
   * 进程id，当该节点为进程时生效
   */
  Pid?: string
  /**
   * 文件md5，当该节点为文件时生效
   */
  FileMd5?: string
  /**
   * 文件写入内容，当该节点为文件时生效
   */
  FileContent?: string
  /**
   * 文件路径，当该节点为文件时生效
   */
  FilePath?: string
  /**
   * 文件创建时间，当该节点为文件时生效
   */
  FileCreateTime?: string
  /**
   * 请求目的地址，当该节点为网络时生效
   */
  Address?: string
  /**
   * 目标端口，当该节点为网络时生效
   */
  DstPort?: number
  /**
   * 登录源ip，当该节点为ssh时生效
   */
  SrcIP?: string
  /**
   * 登录用户名用户组，当该节点为ssh时生效
   */
  User?: string
  /**
   * 漏洞名称，当该节点为漏洞时生效
   */
  VulName?: string
  /**
   * 漏洞利用时间，当该节点为漏洞时生效
   */
  VulTime?: string
  /**
   * http请求内容，当该节点为漏洞时生效
   */
  HttpContent?: string
  /**
   * 漏洞利用者来源ip，当该节点为漏洞时生效
   */
  VulSrcIP?: string
  /**
   * 点id
   */
  VertexId?: string
}

/**
 * DeleteProtectDir返回参数结构体
 */
export interface DeleteProtectDirResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeLogExports返回参数结构体
 */
export interface DescribeLogExportsResponse {
  /**
   * 总数目
   */
  TotalCount?: number
  /**
   * 日志导出列表
   */
  Exports?: Array<ExportInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeVulTrend返回参数结构体
 */
export interface DescribeVulTrendResponse {
  /**
   * 近半年漏洞利用攻击事件数量
   */
  VulEventCount?: number
  /**
   * 近半年新增漏洞利用攻击事件数量
   */
  IncreaseVulEventCount?: number
  /**
   * 近半年热点攻击漏洞
   */
  HotVulCount?: number
  /**
   * 近半年新增热点攻击漏洞
   */
  IncreaseHotVulCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * TestWebHookRule请求参数结构体
 */
export interface TestWebHookRuleRequest {
  /**
   * 规则Id
   */
  Id: number
  /**
   * 测试内容
   */
  Data: string
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
 * 操作系统名称
 */
export interface OsName {
  /**
   * 系统名称
   */
  Name?: string
  /**
   * 操作系统类型枚举值
   */
  MachineOSType?: number
}

/**
 * DescribeMalwareTimingScanSetting请求参数结构体
 */
export type DescribeMalwareTimingScanSettingRequest = null

/**
 * 全文索引的相关配置
 */
export interface FullTextInfo {
  /**
   * 是否大小写敏感
   */
  CaseSensitive?: boolean
  /**
   * 分词符
   */
  Tokenizer?: string
  /**
   * 是否包含中文
   */
  ContainZH?: boolean
}

/**
 * DescribeFileTamperRuleCount返回参数结构体
 */
export interface DescribeFileTamperRuleCountResponse {
  /**
   * 主机关联核心文件规则数量信息
   */
  List?: Array<FileTamperRuleCount>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ExportAssetUserList请求参数结构体
 */
export interface ExportAssetUserListRequest {
  /**
   * 查询指定Quuid主机的信息
   */
  Quuid?: string
  /**
   *   过滤条件。<li>Name - String - 是否必填：否 - 账户名</li> <li>Uid - uint64 - 是否必填：否 - Uid</li><li>Guid - uint64 - 是否必填：否 - Guid</li> <li>LoginTimeStart - String - 是否必填：否 - 开始时间，如：2021-01-11</li><li>LoginTimeEnd - String - 是否必填：否 - 结束时间，如：2021-01-11</li> <li>LoginType - uint64 - 是否必填：否 - 0-不可登录；1-只允许key登录；2只允许密码登录；3-允许key和密码 仅linux</li> <li>OsType - String - 是否必填：否 - windows或linux</li><li>Status - uint64 - 是否必填：否 - 账号状态：0-禁用；1-启用</li> <li>Type - uint64 - 是否必填：否 - 账号类型：0访客用户，1标准用户，2管理员用户 仅windows</li> <li>IsDomain - uint64 - 是否必填：否 - 是否域账号：0 不是，1是 仅windows</li> <li>IsRoot - uint64 - 是否必填：否 - 是否Root权限：0 不是，1是 仅linux</li> <li>IsSudo - uint64 - 是否必填：否 - 是否Sudo权限：0 不是，1是 仅linux</li> <li>IsSshLogin - uint64 - 是否必填：否 - 是否ssh登录：0 不是，1是 仅linux</li> <li>ShellLoginStatus - uint64 - 是否必填：否 - 是否shell登录性，0不是；1是 仅linux</li> <li>PasswordStatus - uint64 - 是否必填：否 - 密码状态：1正常 2即将过期 3已过期 4已锁定 仅linux</li>
   */
  Filters?: Array<Filter>
  /**
   * 排序方式，asc升序 或 desc降序
   */
  Order?: string
  /**
   * 可选排序：[FirstTime|LoginTime|ChangePasswordTime|PasswordDuaTime]
PasswordLockDays
   */
  By?: string
}

/**
 * ModifyBaselineWeakPassword请求参数结构体
 */
export interface ModifyBaselineWeakPasswordRequest {
  /**
   * 无
   */
  Data: Array<BaselineWeakPassword>
}

/**
 * 漏洞数量按等级分布统计结果实体
 */
export interface VulLevelInfo {
  /**
   * // 危害等级：1-低危；2-中危；3-高危；4-严重
   */
  VulLevel?: number
  /**
   * 数量
   */
  Count?: number
}

/**
 * CreateBanWhiteList返回参数结构体
 */
export interface CreateBanWhiteListResponse {
  /**
   * 是否全局规则
   */
  IsGlobal?: boolean
  /**
   * 添加规则是否重复
   */
  IsDuplicate?: boolean
  /**
   * 重复机器的信息
   */
  DuplicateHosts?: Array<DuplicateHosts>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeLogStorageStatistic返回参数结构体
 */
export interface DescribeLogStorageStatisticResponse {
  /**
   * 总容量（单位：GB）
   */
  TotalSize?: number
  /**
   * 已使用容量（单位：GB）
   */
  UsedSize?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyBaselinePolicyState返回参数结构体
 */
export interface ModifyBaselinePolicyStateResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeCanFixVulMachine返回参数结构体
 */
export interface DescribeCanFixVulMachineResponse {
  /**
   * 主机漏洞修护信息列表
   */
  VulInfo?: Array<CanFixVulInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
  Status?: number
  /**
   * 失败原因
   */
  Message?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
 * 事件点信息
 */
export interface IncidentVertexInfo {
  /**
   * 事件id
   */
  IncidentId?: string
  /**
   * 事件所在表名
   */
  TableName?: string
  /**
   * 节点信息列表，数组项中包含节点详细信息
   */
  Vertex?: Array<VertexInfo>
  /**
   * 节点总个数
   */
  VertexCount?: number
}

/**
 * 基线检测项
 */
export interface BaselineItemDetect {
  /**
   * 项Id
   */
  ItemId?: number
  /**
   * 项名称
   */
  ItemName?: string
  /**
   * 项描述
   */
  ItemDesc?: string
  /**
   * 修复方法
   */
  FixMethod?: string
  /**
   * 所属规则
   */
  RuleName?: string
  /**
   * 0:未通过 1:忽略 3:通过 5:检测中
   */
  DetectStatus?: number
  /**
   * 风险等级
   */
  Level?: number
  /**
   * 影响服务器数
   */
  HostCount?: number
  /**
   * 首次检测时间
   */
  FirstTime?: string
  /**
   * 最后检测时间
   */
  LastTime?: string
  /**
   * 检测结果,Json字符串
   */
  DetectResult?: string
  /**
   * 所属规则ID
   */
  RuleId?: number
  /**
   * 通过的服务器数
   */
  PassedHostCount?: number
  /**
   * 未通过的服务器数
   */
  NotPassedHostCount?: number
}

/**
 * DescribeBaselineFixList请求参数结构体
 */
export interface DescribeBaselineFixListRequest {
  /**
   * <li>ItemName- string - 是否必填：否 - 项名称</li>
   */
  Filters?: Array<Filter>
  /**
   * 限制条数,默认10,最大100
   */
  Limit?: number
  /**
   * 偏移量,默认0
   */
  Offset?: number
  /**
   * 排序方式: [ASC:升序|DESC:降序]
   */
  Order?: string
  /**
   * 可选排序列: [CreateTime|MoifyTime|FixTime]
   */
  By?: string
}

/**
 * DescribeAssetProcessCount返回参数结构体
 */
export interface DescribeAssetProcessCountResponse {
  /**
   * 各进程数量
   */
  Process?: Array<AssetKeyVal>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
  ScanState?: number
  /**
   * 扫描进度
   */
  Schedule?: number
  /**
   * 任务Id
   */
  TaskId?: number
  /**
   * 任务扫描的漏洞id
   */
  VulId?: Array<number | bigint>
  /**
   * 0一键检测 1定时检测
   */
  Type?: number
  /**
   * 开始扫描时间
   */
  ScanBeginTime?: string
  /**
   * 扫描漏洞数
   */
  RiskEventCount?: number
  /**
   * 扫描结束时间
   */
  ScanEndTime?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 基线主机检测
 */
export interface BaselineHostDetect {
  /**
   * 主机Id
   */
  HostId?: string
  /**
   * 内网Ip
   */
  HostIp?: string
  /**
   * 主机名称
   */
  HostName?: string
  /**
   * 外网Ip
   */
  WanIp?: string
  /**
   * 0:未通过 1:忽略 3:通过 5:检测中
   */
  DetectStatus?: number
  /**
   * 检测通过数
   */
  PassedItemCount?: number
  /**
   * 关联检测项数
   */
  ItemCount?: number
  /**
   * 检测未通过数
   */
  NotPassedItemCount?: number
  /**
   * 首次检测时间
   */
  FirstTime?: string
  /**
   * 最后检测时间
   */
  LastTime?: string
  /**
   * 主机安全UUID
   */
  Uuid?: string
  /**
   * 主机额外信息
   */
  MachineExtraInfo?: MachineExtraInfo
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
  Ids: Array<number | bigint>
}

/**
 * 大屏漏洞列表
 */
export interface ScreenVulInfo {
  /**
   * 漏洞事件id
   */
  Id?: number
  /**
   * 漏洞名
   */
  Name?: string
  /**
   * 漏洞id
   */
  VulId?: number
  /**
   * 最后检测时间
   */
  LastTime?: string
  /**
   * 漏洞等级 1:低 2:中 3:高 4:提示
   */
  Level?: number
  /**
   * 漏洞类型 1: web-cms漏洞, 2:应用漏洞, 4: Linux软件漏洞, 5: Windows系统漏洞
   */
  Category?: number
  /**
   * 主机UUID
   */
  Uuid?: string
}

/**
 * UntrustMalwares请求参数结构体
 */
export interface UntrustMalwaresRequest {
  /**
   * 木马ID数组 (最大100条)
   */
  Ids: Array<number | bigint>
}

/**
 * DescribeScreenEventsCnt请求参数结构体
 */
export interface DescribeScreenEventsCntRequest {
  /**
   * 数据类型：0:待处理风险总数 1:影响资产总数，默认为0
   */
  BusinessType?: number
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
 * 自定义透传字段结构
 */
export interface WebHookCustomField {
  /**
   * key
   */
  Key: string
  /**
   * value
   */
  Value: string
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
 * DescribeDefenceEventDetail返回参数结构体
 */
export interface DescribeDefenceEventDetailResponse {
  /**
   * 漏洞事件详细信息
   */
  Data?: VulDefenceEventDetail
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ExportBaselineHostDetectList请求参数结构体
 */
export interface ExportBaselineHostDetectListRequest {
  /**
   * <li>HostTag - string - 是否必填：否 - 主机标签</li><li>ItemId - int64 - 是否必填：否 - 项Id</li><li>RuleId - int64 - 是否必填：否 - 规则Id</li><li>IsPassed - int - 是否必填：否 - 是否通过</li><li>RiskTier - int - 是否必填：否 - 风险等级</li>
   */
  Filters?: Array<Filter>
  /**
   * 0:过滤的结果导出；1:全部导出
   */
  ExportAll?: number
  /**
   * 0:导出界面展示；1:导出全部结果事件
   */
  IsExportDetail?: number
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
 * ModifyFileTamperEvents返回参数结构体
 */
export interface ModifyFileTamperEventsResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ExportAssetDatabaseList返回参数结构体
 */
export interface ExportAssetDatabaseListResponse {
  /**
   * 异步下载任务ID，需要配合ExportTasks接口使用
   */
  TaskId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeAssetUserCount请求参数结构体
 */
export interface DescribeAssetUserCountRequest {
  /**
   * 搜索条件：搜索名称中包含name的所有账号列表
   */
  Name?: string
}

/**
 * CreateRansomDefenseStrategy返回参数结构体
 */
export interface CreateRansomDefenseStrategyResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ExportVulDefencePluginEvent请求参数结构体
 */
export interface ExportVulDefencePluginEventRequest {
  /**
   * Keywords: ip或者主机名模糊匹配，Quuid，Exception、Status精确匹配
   */
  Filters?: Array<Filter>
  /**
   * 导出字段，默认全导出
   */
  Where?: Array<string>
}

/**
 * DescribeRansomDefenseRollBackTaskList请求参数结构体
 */
export interface DescribeRansomDefenseRollBackTaskListRequest {
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
<li>Ips- string- 主机名称</li>
<li>Status - Uint64 - 0进行中，1成功，2失败</li>
<li>Names- String - 主机名称</li>
   */
  Filters?: Array<Filters>
  /**
   * 排序方法 ASC DESC
   */
  Order?: string
  /**
   * 排序字段支持CreateTime、ModifyTime
   */
  By?: string
}

/**
 * DescribeWarningHostConfig请求参数结构体
 */
export interface DescribeWarningHostConfigRequest {
  /**
   * 告警类型
   */
  Type: number
  /**
   * 分页单页限制数目, 0表示不分页
   */
  Limit?: number
  /**
   * 分页的偏移量，默认值为0
   */
  Offset?: number
}

/**
 * 高危命令策略
 */
export interface BashPolicy {
  /**
   * 策略名称
   */
  Name: string
  /**
   * 1:有效 0:无效
   */
  Enable: number
  /**
   * 0:黑名单 1:白名单
   */
  White: number
  /**
   * 0:告警 1:白名单 2:拦截
   */
  BashAction: number
  /**
   * 正则表达式 base64 加密,该字段废弃,如果写入则自动替换为Rules.Process.CmdLine
   */
  Rule: string
  /**
   * 危险等级(0:无，1: 高危 2:中危 3: 低危)
   */
  Level: number
  /**
   * 生效范围（0:一组quuid 1:所有专业版(包含旗舰版) 2:所有旗舰版 3:所有主机）
   */
  Scope: number
  /**
   * 策略ID
   */
  Id?: number
  /**
   * 策略描述
   */
  Descript?: string
  /**
   * 事件列表点击“加入白名单”时,需要传EventId 事件的id
   */
  EventId?: number
  /**
   * 是否处理旧事件为白名单 0=不处理 1=处理
   */
  DealOldEvents?: number
  /**
   * 生效主机的QUUID集合
   */
  Quuids?: Array<string>
  /**
   * 策略类型，0:系统  1:用户
   */
  Category?: number
  /**
   * 创建时间
   */
  CreateTime?: string
  /**
   * 修改时间
   */
  ModifyTime?: string
  /**
   * 老版本兼容可能会用到
   */
  Uuids?: Array<string>
  /**
   * 规则表达式
   */
  Rules?: PolicyRules
}

/**
 * ModifyBanWhiteList返回参数结构体
 */
export interface ModifyBanWhiteListResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ExportAssetWebServiceInfoList返回参数结构体
 */
export interface ExportAssetWebServiceInfoListResponse {
  /**
   * 异步下载任务ID，需要配合ExportTasks接口使用
   */
  TaskId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ExportAssetMachineList返回参数结构体
 */
export interface ExportAssetMachineListResponse {
  /**
   * 异步下载任务ID，需要配合ExportTasks接口使用
   */
  TaskId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
  DownloadUrl?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeReverseShellEventInfo请求参数结构体
 */
export interface DescribeReverseShellEventInfoRequest {
  /**
   * 事件id
   */
  Id: number
}

/**
 * ModifyMalwareTimingScanSettings返回参数结构体
 */
export interface ModifyMalwareTimingScanSettingsResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeRiskDnsInfo返回参数结构体
 */
export interface DescribeRiskDnsInfoResponse {
  /**
   * 恶意请求事件详情
   */
  RiskDnsInfo?: RiskDnsList
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ExportRiskProcessEvents请求参数结构体
 */
export interface ExportRiskProcessEventsRequest {
  /**
   * 过滤条件。
<li>HostId - String - 是否必填：否 - 主机ID</li>
<li>IpOrName - String - 是否必填：否 - 主机IP或主机名</li>
<li>VirusName - String - 是否必填：否 - 病毒名</li>
<li>ProcessId - String - 是否必填：否 - 进程ID</li>
<li>ProcessPath - String - 是否必填：否 - 进程路径</li>
<li>BeginTime - String - 是否必填：否 - 进程启动时间-开始</li>
<li>EndTime - String - 是否必填：否 - 进程启动时间-结束</li>
<li>Status - String - 是否必填：否 - 状态筛选 0待处理；1查杀中；2已查杀；3已退出;4已信任</li>
   */
  Filters?: Array<Filter>
  /**
   * 排序方式：[ASC:升序|DESC:降序]
   */
  Order?: string
  /**
   * [StartTime:进程启动时间|DetectTime:最后检测时间]
   */
  By?: string
}

/**
 * DescribeLogKafkaDeliverInfo请求参数结构体
 */
export type DescribeLogKafkaDeliverInfoRequest = null

/**
 * DescribeBaselineWeakPasswordList返回参数结构体
 */
export interface DescribeBaselineWeakPasswordListResponse {
  /**
   * 总数
   */
  Total?: number
  /**
   * 列表
   */
  List?: Array<BaselineWeakPassword>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteNonlocalLoginPlaces返回参数结构体
 */
export interface DeleteNonlocalLoginPlacesResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyFileTamperRuleStatus返回参数结构体
 */
export interface ModifyFileTamperRuleStatusResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyLogKafkaAccess返回参数结构体
 */
export interface ModifyLogKafkaAccessResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteMalwareScanTask返回参数结构体
 */
export interface DeleteMalwareScanTaskResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 基线规则
 */
export interface BaselineRule {
  /**
   * 规则名称,长度不超过128英文字符
   */
  RuleName: string
  /**
   * 规则Id
   */
  RuleId?: number
  /**
   * 规则类型 [0:系统|1:自定义]
   */
  RuleType?: number
  /**
   * 规则分类
   */
  CategoryId?: number
  /**
   * 规则描述
   */
  RuleDesc?: string
  /**
   * 主机数
   */
  HostCount?: number
  /**
   * 适配项ID列表
   */
  Items?: Array<Item>
  /**
   * [0:所有专业版旗舰版|1:hostID|2:ip]
   */
  AssetType?: number
  /**
   * 主机Id集合
   */
  HostIds?: Array<string>
  /**
   * 主机IP
   */
  HostIps?: Array<string>
}

/**
 * 木马白名单信息
 */
export interface MalwareWhiteListInfo {
  /**
   * 唯一ID。
   */
  Id?: number
  /**
   * cvm quuid 按,分割。
   */
  QuuidList?: string
  /**
   * md5列表 按,分割
   */
  Md5List?: string
  /**
   * 是否全部主机； 0否，1是
   */
  IsGlobal?: number
  /**
   * 白名单模式；0 MD5 ，1自定义
   */
  Mode?: number
  /**
   * 匹配模式；0精确匹配，1模糊匹配
   */
  MatchType?: number
  /**
   * 文件名；按,分割
   */
  FileName?: string
  /**
   * 文件目录；按,分割
   */
  FileDirectory?: string
  /**
   * 文件后缀；按,分割
   */
  FileExtension?: string
  /**
   * 规则创建时间
   */
  CreateTime?: string
  /**
   * 受影响记录
   */
  EventsCount?: number
  /**
   * 规则修改时间
   */
  ModifyTime?: string
}

/**
 * DescribeBaselineDetail返回参数结构体
 */
export interface DescribeBaselineDetailResponse {
  /**
   * 基线详情
   */
  BaselineDetail?: BaselineDetail
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeWebHookReceiver返回参数结构体
 */
export interface DescribeWebHookReceiverResponse {
  /**
   * 告警接收人列表
   */
  List?: Array<WebHookReceiver>
  /**
   * 个数
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ExportAttackEvents返回参数结构体
 */
export interface ExportAttackEventsResponse {
  /**
   * 任务ID,需要到接口“异步导出任务”ExportTasks获取DownloadUrl下载地址
   */
  TaskId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ExportIgnoreRuleEffectHostList返回参数结构体
 */
export interface ExportIgnoreRuleEffectHostListResponse {
  /**
   * 该参数已废弃
   */
  DownloadUrl?: string
  /**
   * 任务ID,需要到接口“异步导出任务”ExportTasks获取DownloadUrl下载地址
   */
  TaskId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 地域信息
 */
export interface ScreenRegionInfo {
  /**
   * 地域标志，如 ap-guangzhou，ap-shanghai，ap-beijing
   */
  Region?: string
  /**
   * 地域中文名，如华南地区（广州），华东地区（上海金融），华北地区（北京）
   */
  RegionName?: string
  /**
   * 地域ID
   */
  RegionId?: number
  /**
   * 地域代码，如 gz，sh，bj
   */
  RegionCode?: string
  /**
   * 地域英文名
   */
  RegionNameEn?: string
}

/**
 * DescribeBaselinePolicyList返回参数结构体
 */
export interface DescribeBaselinePolicyListResponse {
  /**
   * 无
   */
  List?: Array<BaselinePolicy>
  /**
   * 总数
   */
  Total?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
  RegionSet?: Array<RegionSet>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeLogStorageRecord返回参数结构体
 */
export interface DescribeLogStorageRecordResponse {
  /**
   * 存储量记录
   */
  Records?: Array<LogStorageRecord>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeletePrivilegeEvents返回参数结构体
 */
export interface DeletePrivilegeEventsResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
  MachineIp?: string
  /**
   * 受主机安全保护天数。
   */
  ProtectDays?: number
  /**
   * 操作系统。
   */
  MachineOs?: string
  /**
   * 主机名称。
   */
  MachineName?: string
  /**
   * 在线状态。
<li>ONLINE： 在线</li>
<li>OFFLINE：离线</li>
   */
  MachineStatus?: string
  /**
   * CVM或BM主机唯一标识。
   */
  InstanceId?: string
  /**
   * 主机外网IP。
   */
  MachineWanIp?: string
  /**
   * CVM或BM主机唯一Uuid。
   */
  Quuid?: string
  /**
   * 主机安全客户端唯一Uuid。
   */
  Uuid?: string
  /**
   * 是否开通专业版。
<li>true：是</li>
<li>false：否</li>
   */
  IsProVersion?: boolean
  /**
   * 专业版开通时间。
   */
  ProVersionOpenDate?: string
  /**
   * 云服务器类型。
<li>CVM: 腾讯云服务器</li>
<li>BM: 黑石物理机</li>
<li>ECM: 边缘计算服务器</li>
<li>LH: 轻量应用服务器</li>
<li>Other: 混合云机器</li>
   */
  MachineType?: string
  /**
   * 机器所属地域。如：ap-guangzhou，ap-shanghai
   */
  MachineRegion?: string
  /**
   * 主机状态。
<li>POSTPAY: 表示后付费，即按量计费  </li>
<li>PREPAY: 表示预付费，即包年包月</li>
   */
  PayMode?: string
  /**
   * 免费木马剩余检测数量。
   */
  FreeMalwaresLeft?: number
  /**
   * 免费漏洞剩余检测数量。
   */
  FreeVulsLeft?: number
  /**
   * agent版本号
   */
  AgentVersion?: string
  /**
   * 专业版到期时间(仅预付费)
   */
  ProVersionDeadline?: string
  /**
   * 是否有资产扫描记录，0无，1有
   */
  HasAssetScan?: number
  /**
   * 防护版本：BASIC_VERSION 基础版，PRO_VERSION 专业版，Flagship 旗舰版，GENERAL_DISCOUNT 普惠版
   */
  ProtectType?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 服务器风险top5实体
 */
export interface VulHostTopInfo {
  /**
   * 主机名
   */
  HostName?: string
  /**
   * 漏洞等级与数量统计列表
   */
  VulLevelList?: Array<VulLevelCountInfo>
  /**
   * 主机Quuid
   */
  Quuid?: string
  /**
   * top评分
   */
  Score?: number
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
   * 过滤条件：
<li>Version - String  是否必填：否 - 当前防护版本（ PRO_VERSION：专业版 | BASIC_VERSION：基础版 | Flagship：旗舰版 | ProtectedMachines：专业版+旗舰版） | BASIC_PROPOST_GENERAL_DISCOUNT：普惠版+专业版按量计费+基础版主机 | UnFlagship：专业版预付费+专业版后付费+基础版+普惠版</li>
   */
  Filters?: Array<Filters>
}

/**
 * DescribeRansomDefenseRollBackTaskList返回参数结构体
 */
export interface DescribeRansomDefenseRollBackTaskListResponse {
  /**
   * 任务列表
   */
  List?: Array<RansomDefenseRollbackTask>
  /**
   * 分页查询记录总数
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 订单资源
 */
export interface OrderResource {
  /**
   * 资源主键ID
   */
  Id?: number
  /**
   * 资源ID
   */
  ResourceId?: string
  /**
   * 开始时间
   */
  BeginTime?: string
  /**
   * 到期时间
   */
  EndTime?: string
  /**
   * 授权类型
   */
  LicenseType?: number
}

/**
 * ExportAssetEnvList请求参数结构体
 */
export interface ExportAssetEnvListRequest {
  /**
   * 服务器Uuid
   */
  Uuid?: string
  /**
   * 服务器Quuid
   */
  Quuid?: string
  /**
   * 过滤条件。
<li>Name- string - 是否必填：否 - 环境变量名</li>
<li>Type- int - 是否必填：否 - 类型：0用户变量，1系统变量</li>
   */
  Filters?: Array<AssetFilters>
  /**
   * 排序方式，asc升序 或 desc降序
   */
  Order?: string
  /**
   * 排序方式：[FirstTime]
   */
  By?: string
}

/**
 * ModifyMachineRemark返回参数结构体
 */
export interface ModifyMachineRemarkResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 防护信息统计
 */
export interface ProtectStat {
  /**
   * 名称
   */
  Name?: string
  /**
   * 数量
   */
  Num?: number
}

/**
 * DescribeVulEffectHostList返回参数结构体
 */
export interface DescribeVulEffectHostListResponse {
  /**
   * 列表总数量
   */
  TotalCount?: number
  /**
   * 影响主机列表
   */
  VulEffectHostList?: Array<VulEffectHostList>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 地域列表详情
 */
export interface RegionListDetail {
  /**
   * 机器类型
CVM 腾讯云云服务器
LH 腾讯云轻量服务器
ECM 腾讯云边缘计算服务器
BM 腾讯云黑石1.0 服务器
Other  其他服务器(非腾讯云)
   */
  MachineType?: string
  /**
   * 0 腾讯云
1 IDC机房
2 阿里云
3 华为云
4 亚马逊
5 微软
6 Google
7 Oracle
8 Digital Ocean
   */
  CloudFrom?: number
  /**
   * 地域列表
   */
  RegionList?: Array<RegionInfo>
}

/**
 * DescribeSearchLogs请求参数结构体
 */
export type DescribeSearchLogsRequest = null

/**
 * ScanVulSetting返回参数结构体
 */
export interface ScanVulSettingResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
  Jar?: AssetJarDetail
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
 * 地域信息
 */
export interface RegionInfo {
  /**
   * 地域标志，如 ap-guangzhou，ap-shanghai，ap-beijing
   */
  Region?: string
  /**
   * 地域中文名，如华南地区（广州），华东地区（上海金融），华北地区（北京）
   */
  RegionName?: string
  /**
   * 地域ID
   */
  RegionId?: number
  /**
   * 地域代码，如 gz，sh，bj
   */
  RegionCode?: string
  /**
   * 地域英文名
   */
  RegionNameEn?: string
}

/**
 * DescribeFileTamperRules返回参数结构体
 */
export interface DescribeFileTamperRulesResponse {
  /**
   * 规则列表
   */
  List?: Array<FileTamperRuleInfo>
  /**
   * 总数
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeAssetProcessCount请求参数结构体
 */
export interface DescribeAssetProcessCountRequest {
  /**
   * 搜索条件：搜索返回所有进程名包含Name的进程列表
   */
  Name?: string
}

/**
 * ModifyBanStatus返回参数结构体
 */
export interface ModifyBanStatusResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
  TotalCount?: number
  /**
   * 异地登录白名单数组
   */
  LoginWhiteLists?: Array<LoginWhiteLists>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeUsualLoginPlaces请求参数结构体
 */
export interface DescribeUsualLoginPlacesRequest {
  /**
   * 主机安全客户端UUID
   */
  Uuid: string
}

/**
 * ModifyWebHookReceiver请求参数结构体
 */
export interface ModifyWebHookReceiverRequest {
  /**
   * id
   */
  Id?: number
  /**
   * 接收人名称
   */
  Name?: string
  /**
   * webhook地址
   */
  Addr?: string
  /**
   * 是否修改
   */
  IsModify?: boolean
}

/**
 * ExportAssetInitServiceList返回参数结构体
 */
export interface ExportAssetInitServiceListResponse {
  /**
   * 异步下载任务ID，需要配合ExportTasks接口使用
   */
  TaskId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyFileTamperRule请求参数结构体
 */
export interface ModifyFileTamperRuleRequest {
  /**
   * 规则名称
   */
  Name: string
  /**
   * 规则内容
   */
  Rules: Array<FileTamperRule>
  /**
   * 是否全局规则(默认否) 0：否 ，1：是，全局是Uuids 可为空
   */
  IsGlobal: number
  /**
   * 启用状态 0: 启用 1: 已关闭
   */
  Status: number
  /**
   * 规则id  不填或者0表示新增
   */
  Id?: number
  /**
   * 影响的主机uuid集合
   */
  Uuids?: Array<string>
  /**
   * 风险等级 0：无， 1: 高危， 2:中危， 3: 低危
   */
  Level?: number
  /**
   * 加白处理类型
<li>cur 仅对当前加白</li>
<li>all 所有符合条件加白</li>
   */
  AddWhiteType?: string
}

/**
 * DescribeScanMalwareSchedule返回参数结构体
 */
export interface DescribeScanMalwareScheduleResponse {
  /**
   * 扫描进度（单位：%）
   */
  Schedule?: number
  /**
   * 风险文件数,当进度满了以后才有该值
   */
  RiskFileNumber?: number
  /**
   * 是否正在扫描中
   */
  IsSchedule?: boolean
  /**
   * 0 从未扫描过、 1 扫描中、 2扫描完成、 3停止中、 4停止完成
   */
  ScanStatus?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ExportRansomDefenseEventsList请求参数结构体
 */
export interface ExportRansomDefenseEventsListRequest {
  /**
   * 过滤条件。
<li>HostName- string- 主机名称</li>
<li>Status - Uint64 - 0待处理，1已处理，2已信任</li>
<li>HostIp- String - 主机ip</li>
   */
  Filters?: Array<Filters>
  /**
   * 排序方法 ASC DESC
   */
  Order?: string
  /**
   * 排序字段支持CreateTime
   */
  By?: string
}

/**
 * DescribeScreenProtectionCnt请求参数结构体
 */
export type DescribeScreenProtectionCntRequest = null

/**
 * 资产管理Web站点列表信息
 */
export interface AssetWebLocationBaseInfo {
  /**
   * 主机Uuid
   */
  Uuid?: string
  /**
   * 主机Quuid
   */
  Quuid?: string
  /**
   * 内网IP
   */
  MachineIp?: string
  /**
   * 外网IP
   */
  MachineWanIp?: string
  /**
   * 主机名称
   */
  MachineName?: string
  /**
   * 操作系统
   */
  OsInfo?: string
  /**
   * 域名
   */
  Name?: string
  /**
   * 站点端口
   */
  Port?: string
  /**
   * 站点协议
   */
  Proto?: string
  /**
   * 服务类型
   */
  ServiceType?: string
  /**
   * 站点路经数
   */
  PathCount?: number
  /**
   * 运行用户
   */
  User?: string
  /**
   * 主目录
   */
  MainPath?: string
  /**
   * 主目录所有者
   */
  MainPathOwner?: string
  /**
   * 拥有者权限
   */
  Permission?: string
  /**
   * 主机业务组ID
   */
  ProjectId?: number
  /**
   * 主机标签
   */
  Tag?: Array<MachineTag>
  /**
   * Web站点Id
   */
  Id?: string
  /**
   * 数据更新时间
   */
  UpdateTime?: string
  /**
   * 首次采集时间
   */
  FirstTime?: string
  /**
   * 是否新增[0:否|1:是]
   */
  IsNew?: number
  /**
   *  附加信息
   */
  MachineExtraInfo?: MachineExtraInfo
}

/**
 * DescribeBaselineItemList请求参数结构体
 */
export interface DescribeBaselineItemListRequest {
  /**
   * <li>PolicyId - int64 - 是否必填：否 - 策略Id</li>
<li>RuleId - int64 - 是否必填：否 - 规则Id</li>
<li>HostId - string - 是否必填：否 - 主机Id</li>
<li>HostName - string - 是否必填：否 - 主机名</li>
<li>HostIp - string - 是否必填：否 - 主机IP</li>
<li>ItemId - String - 是否必填：否 - 检测项Id</li>
<li>ItemName - String - 是否必填：否 - 项名称</li>
<li>DetectStatus - int - 是否必填：否 - 检测状态[0:未通过|3:通过|5:检测中]</li>
<li>Level - int - 是否必填：否 - 风险等级</li>
<li>StartTime - string - 是否必填：否 - 开始时间</li>
<li>EndTime - string - 是否必填：否 - 结束时间</li>
   */
  Filters?: Array<Filter>
  /**
   * 限制条数,默认10,最大100
   */
  Limit?: number
  /**
   * 偏移量,默认0
   */
  Offset?: number
  /**
   * 排序方式: [ASC:升序|DESC:降序]
   */
  Order?: string
  /**
   * 可选排序列
   */
  By?: string
}

/**
 * DescribeScreenHostInvasion请求参数结构体
 */
export interface DescribeScreenHostInvasionRequest {
  /**
   * 主机quuid
   */
  Quuid: string
}

/**
 * 高危命令规则
 */
export interface BashRule {
  /**
   * 规则ID
   */
  Id?: number
  /**
   * 客户端ID
   */
  Uuid?: string
  /**
   * 规则名称
   */
  Name?: string
  /**
   * 危险等级(0 ：无 1: 高危 2:中危 3: 低危)
   */
  Level?: number
  /**
   * 正则表达式
   */
  Rule?: string
  /**
   * 规则描述
   * @deprecated
   */
  Decription?: string
  /**
   * 操作人
   */
  Operator?: string
  /**
   * 是否全局规则
   */
  IsGlobal?: number
  /**
   * 状态 (0: 有效 1: 无效)
   */
  Status?: number
  /**
   * 创建时间
   */
  CreateTime?: string
  /**
   * 修改时间
   */
  ModifyTime?: string
  /**
   * 主机IP
   */
  Hostip?: string
  /**
   * 生效服务器的uuid数组
   */
  Uuids?: Array<string>
  /**
   * 0=黑名单 1=白名单
   */
  White?: number
  /**
   * 是否处理之前的事件 0: 不处理 1:处理
   */
  DealOldEvents?: number
  /**
   * 规则描述
   */
  Description?: string
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
 * ExportVulInfo请求参数结构体
 */
export interface ExportVulInfoRequest {
  /**
   * 漏洞id
   */
  VulId: number
}

/**
 * DescribeAssetUserCount返回参数结构体
 */
export interface DescribeAssetUserCountResponse {
  /**
   * 各账号数量
   */
  Users?: Array<AssetKeyVal>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeScreenBroadcasts请求参数结构体
 */
export type DescribeScreenBroadcastsRequest = null

/**
 * CreateSearchLog返回参数结构体
 */
export interface CreateSearchLogResponse {
  /**
   * 0：成功，非0：失败
   */
  Status?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeRiskDnsPolicyList返回参数结构体
 */
export interface DescribeRiskDnsPolicyListResponse {
  /**
   * 总数
   */
  TotalCount?: number
  /**
   * 列表
   */
  List?: Array<RiskDnsPolicy>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
  Malwares?: Array<SecurityTrend>
  /**
   * 异地登录事件统计数据数组。
   */
  NonLocalLoginPlaces?: Array<SecurityTrend>
  /**
   * 密码破解事件统计数据数组。
   */
  BruteAttacks?: Array<SecurityTrend>
  /**
   * 漏洞统计数据数组。
   */
  Vuls?: Array<SecurityTrend>
  /**
   * 基线统计数据数组。
   */
  BaseLines?: Array<SecurityTrend>
  /**
   * 恶意请求统计数据数组。
   */
  MaliciousRequests?: Array<SecurityTrend>
  /**
   * 高危命令统计数据数组。
   */
  HighRiskBashs?: Array<SecurityTrend>
  /**
   * 反弹shell统计数据数组。
   */
  ReverseShells?: Array<SecurityTrend>
  /**
   * 本地提权统计数据数组。
   */
  PrivilegeEscalations?: Array<SecurityTrend>
  /**
   * 网络攻击统计数据数组。
   */
  CyberAttacks?: Array<SecurityTrend>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 高危命令数据详情
 */
export interface BashEventsInfo {
  /**
   * 数据ID
   */
  Id?: number
  /**
   * 主机uuid
   */
  Uuid?: string
  /**
   * 主机ID
   */
  Quuid?: string
  /**
   * 主机内网IP
   */
  HostIp?: string
  /**
   * 平台类型
   */
  Platform?: number
  /**
   * 执行命令
   */
  BashCmd?: string
  /**
   * 规则ID,等于0表示已规则已被删除或生效范围已修改
   */
  RuleId?: number
  /**
   * 规则名称
   */
  RuleName?: string
  /**
   * 规则等级：1-高 2-中 3-低
   */
  RuleLevel?: number
  /**
   * 处理状态： 0 = 待处理 1= 已处理, 2 = 已加白， 3= 已忽略
   */
  Status?: number
  /**
   * 发生时间
   */
  CreateTime?: string
  /**
   * 主机名
   */
  MachineName?: string
  /**
   * 进程名称
   */
  Exe?: string
  /**
   * 处理时间
   */
  ModifyTime?: string
  /**
   * 规则类别  0=系统规则，1=用户规则
   */
  RuleCategory?: number
  /**
   * 自动生成的正则表达式
   */
  RegexBashCmd?: string
  /**
   * 进程树 json  pid:进程id，exe:文件路径 ，account:进程所属用组和用户 ,cmdline:执行命令，ssh_service: SSH服务ip, ssh_soure:登录源
   */
  PsTree?: string
  /**
   * 建议方案
   */
  SuggestScheme?: string
  /**
   * 描述
   */
  HarmDescribe?: string
  /**
   * 标签
   */
  Tags?: Array<string>
  /**
   * 参考链接
   */
  References?: Array<string>
  /**
   * 主机外网ip
   */
  MachineWanIp?: string
  /**
   * 主机在线状态 OFFLINE  ONLINE
   */
  MachineStatus?: string
  /**
   * 登录用户
   */
  User?: string
  /**
   * 进程号
   */
  Pid?: string
  /**
   * 数据来源
   */
  DetectBy?: string
}

/**
 * StopNoticeBanTips返回参数结构体
 */
export interface StopNoticeBanTipsResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 网络攻击白名单规则
 */
export interface NetAttackWhiteRule {
  /**
   * 规则id
   */
  Id?: number
  /**
   * 规则描述
   */
  Description?: string
  /**
   * 0: 一组quuid 1: 所有主机
   */
  Scope?: number
  /**
   * 是否处理之前的事件 0: 不处理 1:处理
   */
  DealOldEvents?: number
  /**
   * 主机quuid 多个用;隔开
   */
  Quuids?: string
  /**
   * 来源IP 单IP:1.1.1.1  IP范围:1.1.1.1-1.1.2.1  IP范围：1.1.1.0/24 多个用;隔开
   */
  SrcIP?: string
  /**
   * 创建时间
   */
  CreateTime?: string
  /**
   * 修改时间
   */
  ModifyTime?: string
}

/**
 * 资源管理系统安装包列表信息
 */
export interface AssetSystemPackageInfo {
  /**
   * 数据库名
   */
  Name?: string
  /**
   * 描述
   */
  Desc?: string
  /**
   * 版本
   */
  Version?: string
  /**
   * 安装时间
   */
  InstallTime?: string
  /**
   * 类型
   */
  Type?: string
  /**
   * 主机名称
   */
  MachineName?: string
  /**
   * 主机IP
   */
  MachineIp?: string
  /**
   * 操作系统
   */
  OsInfo?: string
  /**
   * 数据更新时间
   */
  UpdateTime?: string
  /**
   * 首次采集时间
   */
  FirstTime?: string
  /**
   * 是否新增[0:否|1:是]
   */
  IsNew?: number
  /**
   * 附加信息
   */
  MachineExtraInfo?: MachineExtraInfo
  /**
   * 主机Id
   */
  Quuid?: string
  /**
   * Agent Id
   */
  Uuid?: string
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
<li>IsSupportDefense - int- 是否必填：否 - 是否支持防御 0:不支持 1:支持</li>
   */
  Filters?: Array<Filters>
  /**
   * 排序方式 desc , asc
   */
  Order?: string
  /**
   * 排序字段 PublishDate  LastScanTime HostCount
   */
  By?: string
  /**
   * 是否热点漏洞
   */
  HotspotAttack?: boolean
}

/**
 * DescribeSecurityDynamics返回参数结构体
 */
export interface DescribeSecurityDynamicsResponse {
  /**
   * 安全事件消息数组。
   */
  SecurityDynamics?: Array<SecurityDynamic>
  /**
   * 记录总数。
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteReverseShellEvents返回参数结构体
 */
export interface DeleteReverseShellEventsResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ExportAssetEnvList返回参数结构体
 */
export interface ExportAssetEnvListResponse {
  /**
   * 异步下载任务ID，需要配合ExportTasks接口使用
   */
  TaskId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 授权绑定详情信息
 */
export interface LicenseBindDetail {
  /**
   * 机器别名
   */
  MachineName?: string
  /**
   * 机器公网IP
   */
  MachineWanIp?: string
  /**
   * 机器内网IP
   */
  MachineIp?: string
  /**
   * 云服务器UUID
   */
  Quuid?: string
  /**
   * 主机安全客户端UUID
   */
  Uuid?: string
  /**
   * 标签信息
   */
  Tags?: Array<string>
  /**
   * 主机安全客户端状态,OFFLINE 离线,ONLINE 在线,UNINSTALL 未安装
   */
  AgentStatus?: string
  /**
   * 是否允许解绑,false 不允许解绑
   */
  IsUnBind?: boolean
  /**
   * 是否允许换绑,false 不允许换绑
   */
  IsSwitchBind?: boolean
  /**
   * 主机额外信息
   */
  MachineExtraInfo?: MachineExtraInfo
}

/**
 * DescribeAttackTrends返回参数结构体
 */
export interface DescribeAttackTrendsResponse {
  /**
   * 攻击趋势统计数据（天）
   */
  NetAttackTrend?: Array<NetAttackTrend>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeVulTrend请求参数结构体
 */
export type DescribeVulTrendRequest = null

/**
 * 基线检测项top5
 */
export interface BaselineRiskItem {
  /**
   * 检测项Id
   */
  ItemId?: number
  /**
   * 检测项名字
   */
  ItemName?: string
  /**
   * 风险等级
   */
  Level?: number
  /**
   * 影响服务器数
   */
  HostCount?: number
}

/**
 * DescribeAttackStatistics请求参数结构体
 */
export type DescribeAttackStatisticsRequest = null

/**
 * ExportFileTamperRules请求参数结构体
 */
export interface ExportFileTamperRulesRequest {
  /**
   * 过滤条件。
<li>RuleCategory- string- 规则类别  0=系统规则，1=用户规则</li>
<li>Name- String - 规则名称</li>
   */
  Filters?: Array<Filters>
}

/**
 * AddLoginWhiteLists返回参数结构体
 */
export interface AddLoginWhiteListsResponse {
  /**
   * 重复添加的提示列表
   */
  DuplicateHosts?: Array<DuplicateHosts>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyLogKafkaState请求参数结构体
 */
export interface ModifyLogKafkaStateRequest {
  /**
   * 实例名称 如 主机安全测试环境
   */
  KafkaEnvName: string
  /**
   * 实例ID
   */
  KafkaId: string
  /**
   * 接入方式，1公网域名接入，2支撑环境接入
   */
  AccessType: number
  /**
   * 接入地址
   */
  AccessAddr: string
  /**
   * 用户名
   */
  Username: string
  /**
   * 区域
   */
  Zone: string
  /**
   * 可用区
   */
  Az: string
  /**
   * 所属网络
   */
  VpcId: string
  /**
   * 所在子网
   */
  SubnetId: string
  /**
   * 投递状态，1：健康，2：告警，3：异常
   */
  DeliverStatus: number
  /**
   * kafka版本
   */
  InsVersion: string
  /**
   * 峰值带宽
   */
  BandWidth: number
  /**
   * 磁盘容量
   */
  DiskSize: number
}

/**
 * 资源管理Web服务列表信息
 */
export interface AssetWebServiceBaseInfo {
  /**
   * 主机内网IP
   */
  MachineIp?: string
  /**
   * 主机外网IP
   */
  MachineWanIp?: string
  /**
   * 主机Quuid
   */
  Quuid?: string
  /**
   * 主机Uuid
   */
  Uuid?: string
  /**
   * 操作系统信息
   */
  OsInfo?: string
  /**
   * 主机业务组ID
   */
  ProjectId?: number
  /**
   * 主机标签
   */
  Tag?: Array<MachineTag>
  /**
   * 服务名
   */
  Name?: string
  /**
   * 版本
   */
  Version?: string
  /**
   * 二进制路径
   */
  BinPath?: string
  /**
   * 启动用户
   */
  User?: string
  /**
   * 安装路径
   */
  InstallPath?: string
  /**
   * 配置路径
   */
  ConfigPath?: string
  /**
   * 关联进程数
   */
  ProcessCount?: number
  /**
   * Web服务ID
   */
  Id?: string
  /**
   * 主机名称
   */
  MachineName?: string
  /**
   * 描述
   */
  Desc?: string
  /**
   * 数据更新时间
   */
  UpdateTime?: string
  /**
   * 首次采集时间
   */
  FirstTime?: string
  /**
   * 是否新增[0:否|1:是]
   */
  IsNew?: number
  /**
   *  附加信息
   */
  MachineExtraInfo?: MachineExtraInfo
}

/**
 * 恶意请求策略
 */
export interface RiskDnsPolicy {
  /**
   * 策略名称
   */
  PolicyName: string
  /**
   * 策略类型[0:系统,1:用户]
   */
  PolicyType: number
  /**
   * 策略动作[0:告警,1:放行,2:拦截+告警]
   */
  PolicyAction: number
  /**
   * 主机范围[1: 所有专业版+旗舰版|2:所有旗舰版|0: 部分主机]
   */
  HostScope: number
  /**
   * 主机ID
   */
  HostIds: Array<string>
  /**
   * 域名,作为入参时需要进行base64 encode
   */
  Domains: Array<string>
  /**
   * 是否生效[0:生效,1:不生效]
   */
  IsEnabled: number
  /**
   * 策略ID
   */
  PolicyId?: number
  /**
   * 策略描述
   */
  PolicyDesc?: string
  /**
   * 是否处理之前的事件[0:不处理|1:处理]
   */
  IsDealOldEvent?: number
  /**
   * 更新时间
   */
  UpdateTime?: string
  /**
   * 事件ID
   */
  EventId?: number
}

/**
 * DeleteAllJavaMemShells返回参数结构体
 */
export interface DeleteAllJavaMemShellsResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeMalwareWhiteList请求参数结构体
 */
export interface DescribeMalwareWhiteListRequest {
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
<li>HostIp - String - 是否必填：否 - 主机ip查询 </li>
<li>FileName - String - 是否必填：否 - 文件名称查询 </li>
<li>FileDirectory - String - 是否必填：否 - 文件目录查询 </li>
<li>FileExtension - String - 是否必填：否 - 文件后缀查询 </li>
<li>Mode - String - 是否必填：否 - 规则类型 0 MD5,1自定义</li>
<li>Md5 - String - 是否必填：否 - MD5查询 </li>
   */
  Filters?: Array<Filter>
  /**
   * 排序方式: [ASC:升序|DESC:降序]
   */
  Order?: string
  /**
   * 可选排序列: [EventsCount|CreateTime|ModifyTime]
   */
  By?: string
}

/**
 * ModifyUsersConfig请求参数结构体
 */
export interface ModifyUsersConfigRequest {
  /**
   * 配置名称
<li>license_monitor 新增授权监控配置 0 关闭, 1开启</li>
   */
  ConfigName: string
  /**
   * 配置值
   */
  ConfigValue: string
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
 * DescribeHotVulTop请求参数结构体
 */
export type DescribeHotVulTopRequest = null

/**
 * ScanAsset返回参数结构体
 */
export interface ScanAssetResponse {
  /**
   * 任务id
   */
  TaskId?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
  Name?: string
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
  Type?: number
  /**
   * 默认启用状态：0未启用，1启用
   */
  Status?: number
  /**
   * 启动用户
   */
  User?: string
  /**
   * 路径
   */
  Path?: string
  /**
   * 服务器IP
   */
  MachineIp?: string
  /**
   * 服务器名称
   */
  MachineName?: string
  /**
   * 操作系统
   */
  OsInfo?: string
  /**
   * 主机Quuid
   */
  Quuid?: string
  /**
   * 主机uuid
   */
  Uuid?: string
  /**
   * 数据更新时间
   */
  UpdateTime?: string
  /**
   * 首次采集时间
   */
  FirstTime?: string
  /**
   * 是否新增[0:否|1:是]
   */
  IsNew?: number
  /**
   * 服务器外网IP
   */
  MachineWanIp?: string
  /**
   *  附加信息

   */
  MachineExtraInfo?: MachineExtraInfo
  /**
   * 开机自启动[0:否|1:是]
   */
  IsAutoRun?: number
}

/**
 * DeleteBanWhiteList请求参数结构体
 */
export interface DeleteBanWhiteListRequest {
  /**
   * 要删除的白名单ID列表 (最大100条)
   */
  Ids: Array<number | bigint>
}

/**
 * DescribeAssetWebFrameCount请求参数结构体
 */
export interface DescribeAssetWebFrameCountRequest {
  /**
   * 搜索条件：返回名称包含Name的所有Web框架列表
   */
  Name?: string
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
 * ExportAssetMachineList请求参数结构体
 */
export interface ExportAssetMachineListRequest {
  /**
   * 过滤条件。
<li>IP - String - 是否必填：否 - 主机ip</li>
<li>MachineName - String - 是否必填：否 - 主机名称</li>
<li>InstanceID - string - 是否必填：否 - 实例ID</li>
<li>OsType - String - 是否必填：否 - windows或linux</li>
<li>CpuLoad - Int - 是否必填：否 - 
0: 0%或未知  1: 0%～20%
2: 20%～50%  3: 50%～80%
4: 80%～100%</li>
<li>DiskLoad - Int - 是否必填：否 - 
0: 0%或未知  1: 0%～20%
2: 20%～50%  3: 50%～80%
4: 80%～100%</li>
<li>MemLoad - Int - 是否必填：否 - 
0: 0%或未知  1: 0%～20%
2: 20%～50%  3: 50%～80%
4: 80%～100%</li>
   */
  Filters?: Array<Filter>
  /**
   * 排序方式，asc升序 或 desc降序
   */
  Order?: string
  /**
   * 可选排序[FirstTime|PartitionCount]
   */
  By?: string
}

/**
 * 日志下载任务列表
 */
export interface ExportInfo {
  /**
   * 日志导出任务ID
   */
  ExportId?: string
  /**
   * 日志导出查询语句
   */
  Query?: string
  /**
   * 日志导出文件名
   */
  FileName?: string
  /**
   * 日志文件大小
   */
  FileSize?: number
  /**
   * 日志导出时间排序
   */
  Order?: string
  /**
   * 日志导出格式
   */
  Format?: string
  /**
   * 日志导出数量
   */
  Count?: number
  /**
   * 日志下载状态。Processing:导出正在进行中，Complete:导出完成，Failed:导出失败，Expired:日志导出已过期（三天有效期）。
   */
  Status?: string
  /**
   * 日志导出起始时间，uinx毫秒时间戳
   */
  StartTime?: number
  /**
   * 日志导出结束时间，uinx毫秒时间戳
   */
  EndTime?: number
  /**
   * 日志导出路径
   */
  CosPath?: string
  /**
   * 日志导出创建时间
   */
  CreateTime?: string
}

/**
 * DescribeScreenProtectionStat返回参数结构体
 */
export interface DescribeScreenProtectionStatResponse {
  /**
   * 文件查杀 status:  0:从未检测过，或0资产付费情况, 1:已检测，存在恶意文件, 2:已检测，未开启隔离防护, 3:已检测且已开启防护且无风险
暴力破解status: 0:未开启防护或0付费资产情况 1:已开启防护 2:存在带处理事件
漏洞扫描status: 0:从未检测过，或0资产付费情况, 1:存在漏洞风险, 2:无风险
基线检测status: 0:从未检测过，或0资产付费情况, 1:存在基线风险,2:无风险
   */
  Info?: Array<ScreenProtection>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ExportBaselineItemDetectList请求参数结构体
 */
export interface ExportBaselineItemDetectListRequest {
  /**
   * <li>HostId - string - 是否必填：否 - 主机Id</li><li>RuleId - int64 - 是否必填：否 - 规则Id</li><li>IsPassed - int - 是否必填：否 - 是否通过</li><li>RiskTier - int - 是否必填：否 - 风险等级</li>
   */
  Filters?: Array<Filter>
  /**
   * 0:过滤的结果导出；1:全部导出
   */
  ExportAll?: number
  /**
   * 0:导出界面展示；1:导出全部结果事件
   */
  IsExportDetail?: number
}

/**
 * CreateNetAttackWhiteList请求参数结构体
 */
export interface CreateNetAttackWhiteListRequest {
  /**
   * 是否全部主机； 0否，1是。
   */
  Scope: number
  /**
   * 来源IP 单IP:1.1.1.1  IP范围:1.1.1.1-1.1.2.1  IP范围：1.1.1.0/24
   */
  SrcIp: Array<string>
  /**
   * quuid 列表
   */
  QuuidList?: Array<string>
  /**
   * 事件id
   */
  EventId?: number
  /**
   * 是否加白所有符合该规则的告警 ，1:处理,0:不处理
   */
  DealOldEvents?: number
  /**
   * 描述
   */
  Description?: string
}

/**
 * DescribeMalwareInfo返回参数结构体
 */
export interface DescribeMalwareInfoResponse {
  /**
   * 恶意文件详情信息
   */
  MalwareInfo?: MalwareInfo
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteRiskDnsPolicy返回参数结构体
 */
export interface DeleteRiskDnsPolicyResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 批量添加白名单：重复情况重复列表实体
 */
export interface DuplicateHosts {
  /**
   * Quuid
   */
  Quuid?: string
  /**
   * Uuid
   */
  Uuid?: string
  /**
   * Id
   */
  Id?: number
}

/**
 * DescribeLogStorageRecord请求参数结构体
 */
export type DescribeLogStorageRecordRequest = null

/**
 * ExportBaselineHostDetectList返回参数结构体
 */
export interface ExportBaselineHostDetectListResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 木马白名单影响事件信息
 */
export interface MalwareWhiteListAffectEvent {
  /**
   * 唯一ID。
   */
  Id?: number
  /**
   * 主机ip
   */
  HostIp?: string
  /**
   * 影响的md5
   */
  Md5?: string
  /**
   * 文件路径
   */
  FilePath?: string
  /**
   * 添加时间
   */
  CreateTime?: string
}

/**
 * CreateBanWhiteList请求参数结构体
 */
export interface CreateBanWhiteListRequest {
  /**
   * 阻断规则
   */
  Rules: BanWhiteList
  /**
   * 事件ID，事件列表加白名单时传递，白名单添加成功后，会将事件变成已加白状态
   */
  EventId?: number
}

/**
 * DescribeMachineRiskCnt请求参数结构体
 */
export interface DescribeMachineRiskCntRequest {
  /**
   * 过滤条件。
<li>Uuids- String - 是否必填：否 - 主机uuid</li>
   */
  Filters?: Array<Filter>
}

/**
 * ExportRansomDefenseStrategyMachines返回参数结构体
 */
export interface ExportRansomDefenseStrategyMachinesResponse {
  /**
   * 任务ID,需要到接口“异步导出任务”ExportTasks获取DownloadUrl下载地址
   */
  TaskId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
  /**
   * 排序方式：根据请求次数排序：asc-升序/desc-降序
   */
  Order?: string
  /**
   * 排序字段：CreateTime-发现时间
   */
  By?: string
}

/**
 * DescribeAssetEnvList返回参数结构体
 */
export interface DescribeAssetEnvListResponse {
  /**
   * 列表
   */
  Envs?: Array<AssetEnvBaseInfo>
  /**
   * 总数量
   */
  Total?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeVulHostCountScanTime请求参数结构体
 */
export type DescribeVulHostCountScanTimeRequest = null

/**
 * DescribeSecurityBroadcasts请求参数结构体
 */
export interface DescribeSecurityBroadcastsRequest {
  /**
   * 偏移量，默认为0。
   */
  Offset?: number
  /**
   * 需要返回的数量，默认为10 ，0=全部
   */
  Limit?: number
  /**
   * 筛选发布日期：开始时间
   */
  BeginDate?: string
  /**
   * 筛选发布日期：结束时间
   */
  EndDate?: string
  /**
   * 过滤安全播报类型：0-紧急通知，1-功能更新，2-行业荣誉，3-版本发布，4-实践教程
   */
  BroadcastType?: string
}

/**
 * DescribeVulDefenceEvent返回参数结构体
 */
export interface DescribeVulDefenceEventResponse {
  /**
   * 数据总数
   */
  TotalCount?: number
  /**
   * 漏洞防御事件列表
   */
  List?: Array<VulDefenceEvent>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ExportBaselineEffectHostList返回参数结构体
 */
export interface ExportBaselineEffectHostListResponse {
  /**
   * 该参数已废弃
   */
  DownloadUrl?: string
  /**
   * 任务ID,需要到接口“异步导出任务”ExportTasks获取DownloadUrl下载地址
   */
  TaskId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 高危命令数据详情(新)
 */
export interface BashEventsInfoNew {
  /**
   * 数据ID
   */
  Id?: number
  /**
   * 主机安全ID
   */
  Uuid?: string
  /**
   * 主机ID
   */
  Quuid?: string
  /**
   * 主机内网IP
   */
  HostIp?: string
  /**
   * 平台类型
   */
  Platform?: number
  /**
   * 执行命令
   */
  BashCmd?: string
  /**
   * 规则ID,等于0表示已规则已被删除或生效范围已修改
   */
  RuleId?: number
  /**
   * 规则名称
   */
  RuleName?: string
  /**
   * 规则等级：1-高 2-中 3-低
   */
  RuleLevel?: number
  /**
   * 处理状态： 0 = 待处理 1= 已处理, 2 = 已加白， 3= 已忽略
   */
  Status?: number
  /**
   * 发生时间
   */
  CreateTime?: string
  /**
   * 主机名
   */
  MachineName?: string
  /**
   * 进程名称
   */
  Exe?: string
  /**
   * 处理时间
   */
  ModifyTime?: string
  /**
   * 规则类别  0=系统规则，1=用户规则
   */
  RuleCategory?: number
  /**
   * 自动生成的正则表达式
   */
  RegexBashCmd?: string
  /**
   * 进程树 json  pid:进程id，exe:文件路径 ，account:进程所属用组和用户 ,cmdline:执行命令，ssh_service: SSH服务ip, ssh_soure:登录源
   */
  PsTree?: string
  /**
   * 建议方案
   */
  SuggestScheme?: string
  /**
   * 描述
   */
  HarmDescribe?: string
  /**
   * 标签
   */
  Tags?: Array<string>
  /**
   * 参考链接
   */
  References?: Array<string>
  /**
   * 主机外网ip
   */
  MachineWanIp?: string
  /**
   * 主机在线状态 OFFLINE  ONLINE
   */
  MachineStatus?: string
  /**
   * 登录用户
   */
  User?: string
  /**
   * 进程号
   */
  Pid?: string
  /**
   * 0:普通 1:专业版 2:旗舰版
   */
  MachineType?: number
  /**
   * 检测来源 0:bash日志 1:实时监控
   */
  DetectBy?: number
}

/**
 * ModifyLogKafkaAccess请求参数结构体
 */
export interface ModifyLogKafkaAccessRequest {
  /**
   * 实例名称 如 主机安全测试环境
   */
  KafkaEnvName: string
  /**
   * 实例ID
   */
  KafkaId: string
  /**
   * 接入方式，1公网域名接入，2支撑环境接入
   */
  AccessType: number
  /**
   * 接入地址
   */
  AccessAddr: string
  /**
   * 用户名
   */
  Username: string
  /**
   * 0不用密码，1有密码
   */
  HasPwd: number
  /**
   * 日志投递类型配置细节
   */
  DeliverTypeDetails: Array<DeliverTypeDetails>
  /**
   * kafka版本
   */
  InsVersion: string
  /**
   * 地域
   */
  Zone: string
  /**
   * 可用区
   */
  Az: string
  /**
   * vpcid地址
   */
  VpcId: string
  /**
   * 子网id
   */
  SubnetId: string
  /**
   * 投递状态，1：健康，2：告警，3：异常
   */
  DeliverStatus: number
  /**
   * 峰值带宽
   */
  BandWidth: number
  /**
   * 磁盘容量
   */
  DiskSize: number
  /**
   * 密码，aes加密
   */
  Pwd?: string
}

/**
 * 未处理的安全事件统计信息
 */
export interface EventStat {
  /**
   * 事件数
   */
  EventsNum?: number
  /**
   * 受影响的主机数
   */
  MachineAffectNum?: number
}

/**
 * DescribeVulEffectModules返回参数结构体
 */
export interface DescribeVulEffectModulesResponse {
  /**
   * 列表总数量
   */
  TotalCount?: number
  /**
   * 影响主机列表
   */
  VulEffectModuleInfo?: Array<VulEffectModuleInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteWebPageEventLog返回参数结构体
 */
export interface DeleteWebPageEventLogResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeLicenseBindSchedule请求参数结构体
 */
export interface DescribeLicenseBindScheduleRequest {
  /**
   * 任务ID
   */
  TaskId: number
  /**
   * 限制条数,默认10.
   */
  Limit?: number
  /**
   * 偏移量,默认0
   */
  Offset?: number
  /**
   * 过滤参数
Status 绑定进度状态 0 进行中 1 已完成 2 失败
   */
  Filters?: Array<Filter>
}

/**
 * DeleteRiskDnsPolicy请求参数结构体
 */
export interface DeleteRiskDnsPolicyRequest {
  /**
   * 策略ID
   */
  PolicyIds?: Array<number | bigint>
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
  TotalCount?: number
  /**
   * 进程统计列表数据数组。
   */
  ProcessStatistics?: Array<ProcessStatistics>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteBaselineRuleIgnore请求参数结构体
 */
export interface DeleteBaselineRuleIgnoreRequest {
  /**
   * 规则Id
   */
  RuleIds: Array<number | bigint>
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
  Ids?: Array<number | bigint>
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
 * 漏洞影响组件详情
 */
export interface VulEffectModuleInfo {
  /**
   * 组件名
   */
  Name?: string
  /**
   * 影响的主机uuid
   */
  Uuids?: Array<string>
  /**
   * 组件影响版本
   */
  Rule?: string
  /**
   * 组件路径
   */
  Path?: string
  /**
   * 组件版本
   */
  Version?: string
  /**
   * 修复命令
   */
  FixCmd?: string
  /**
   * 影响的主机quuid
   */
  Quuids?: Array<string>
}

/**
 * DescribeAssetWebAppPluginList返回参数结构体
 */
export interface DescribeAssetWebAppPluginListResponse {
  /**
   * 列表
   */
  Plugins?: Array<AssetWebAppPluginInfo>
  /**
   * 分区总数
   */
  Total?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeAssetWebAppCount请求参数结构体
 */
export interface DescribeAssetWebAppCountRequest {
  /**
   * 搜索条件：返回名称包含Name的所有Web应用列表
   */
  Name?: string
}

/**
 * DescribeAssetTypes请求参数结构体
 */
export type DescribeAssetTypesRequest = null

/**
 * 服务器风险Top的主机信息
 */
export interface BaselineEventLevelInfo {
  /**
   * 危害等级：1-低危；2-中危；3-高危；4-严重
   */
  EventLevel?: number
  /**
   * 漏洞数量
   */
  EventCount?: number
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
   * 过滤条件。<li>IpOrAlias - String - 是否必填：否 - 主机ip或别名筛选</li><li>UserName - String - 是否必填：否 - 用户名筛选</li><li>SrcIP - String - 是否必填：否 - 来源IP筛选</li><li>Location - String - 是否必填：否 - 登录地筛选</li><li>ModifyBeginTime - String - 是否必填：否 - 按照修改时间段筛选，开始时间</li><li>ModifyEndTime - String - 是否必填：否 - 按照修改时间段筛选，结束时间</li>
   */
  Filters?: Array<Filter>
}

/**
 * 基线安全用户策略信息
 */
export interface Strategy {
  /**
   * 策略名
   */
  StrategyName?: string
  /**
   * 策略id
   */
  StrategyId?: number
  /**
   * 基线检测项总数
   */
  RuleCount?: number
  /**
   * 主机数量
   */
  HostCount?: number
  /**
   * 扫描周期
   */
  ScanCycle?: number
  /**
   * 扫描时间
   */
  ScanAt?: string
  /**
   * 是否可用
   */
  Enabled?: number
  /**
   * 通过率
   */
  PassRate?: number
  /**
   * 基线id
   */
  CategoryIds?: string
  /**
   * 是否默认策略
   */
  IsDefault?: number
}

/**
 * AddLoginWhiteLists请求参数结构体
 */
export interface AddLoginWhiteListsRequest {
  /**
   * 异地登录白名单实体
   */
  HostLoginWhiteObj: HostLoginWhiteObj
  /**
   * 事件同步处理方式：
  "" -- 不操作
  "All" -- 将符合此配置的所有事件记录加白
  "Id" -- 将EventId对应的事件记录加白
   */
  ProcessType?: string
  /**
   * 异地登录事件ID，当ProcessType为Id时此项必填
   */
  EventId?: number
}

/**
 * DeleteSearchTemplate返回参数结构体
 */
export interface DeleteSearchTemplateResponse {
  /**
   * 0：成功，非0：失败
   */
  Status?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteBashPolicies返回参数结构体
 */
export interface DeleteBashPoliciesResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
  TotalCount?: number
  /**
   * 应急响应列表
   */
  List?: Array<EmergencyResponseInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
 * 大屏可视化主机安全返回态势数据
 */
export interface ScreenProtectionCnt {
  /**
   * cloud：云查杀引擎，detect：检测引擎，defend：攻击防御，threat：威胁情报，analysis：异常分析，ai：AI引擎
   */
  Type?: string
  /**
   * cloud：云查杀引擎，detect：检测引擎，defend：攻击防御，threat：威胁情报，analysis：异常分析，ai：AI引擎
   */
  Name?: string
  /**
   * 总数
   */
  Count?: number
}

/**
 * 资产管理计划任务列表
 */
export interface AssetPlanTask {
  /**
   * 默认启用状态：1启用，2未启用
   */
  Status?: number
  /**
   * 执行周期
   */
  Cycle?: string
  /**
   * 执行命令或脚本
   */
  Command?: string
  /**
   * 启动用户
   */
  User?: string
  /**
   * 配置文件路径
   */
  ConfigPath?: string
  /**
   * 服务器IP
   */
  MachineIp?: string
  /**
   * 服务器名称
   */
  MachineName?: string
  /**
   * 操作系统
   */
  OsInfo?: string
  /**
   * 主机Quuid
   */
  Quuid?: string
  /**
   * 主机uuid
   */
  Uuid?: string
  /**
   * 数据更新时间
   */
  UpdateTime?: string
  /**
   * 首次采集时间
   */
  FirstTime?: string
  /**
   * 是否新增[0:否|1:是]
   */
  IsNew?: number
  /**
   * 服务器外网IP
   */
  MachineWanIp?: string
  /**
   *  附加信息
   */
  MachineExtraInfo?: MachineExtraInfo
}

/**
 * 漏洞防御趋势页，包括插件状态及攻防趋势，趋势由三个长度相同，元素一一对应的数组保存，如果某天没有数据将会缺失
 */
export interface VulDefenceOverview {
  /**
   * 防御开关：0 关闭 1 开启
   */
  Enable?: number
  /**
   * 已开启防御主机数
   */
  DefendHostCount?: number
  /**
   * 插件异常数
   */
  ExceptionCount?: number
  /**
   * 每日攻击趋势
   */
  AttackCounts?: Array<number | bigint>
  /**
   * 每日防御趋势
   */
  DefendCounts?: Array<number | bigint>
  /**
   * 日期
   */
  Date?: Array<string>
}

/**
 * DescribeFileTamperEventRuleInfo返回参数结构体
 */
export interface DescribeFileTamperEventRuleInfoResponse {
  /**
   * 规则详情信息
   */
  FileTamperRuleDetail?: FileTamperRuleDetail
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteBaselinePolicy返回参数结构体
 */
export interface DeleteBaselinePolicyResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyVulDefenceSetting请求参数结构体
 */
export interface ModifyVulDefenceSettingRequest {
  /**
   * 防御开关，0 关闭 1 开启
   */
  Enable: number
  /**
   * 1 全部旗舰版主机，0 Quuids列表主机
   */
  Scope: number
  /**
   * 作用范围内旗舰版主机列表
   */
  Quuids?: Array<string>
  /**
   * 排除作用范围内旗舰版主机列表
   */
  ExcludeInstanceIds?: Array<string>
  /**
   * 新增资产自动包含 0 不包含 1包含
   */
  AutoInclude?: number
  /**
   * 作用范围内旗舰版主机列表
   */
  InstanceIds?: Array<string>
}

/**
 * ModifyLoginWhiteRecord返回参数结构体
 */
export interface ModifyLoginWhiteRecordResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeMalwareWhiteListAffectList请求参数结构体
 */
export interface DescribeMalwareWhiteListAffectListRequest {
  /**
   * 白名单规则id
   */
  WhiteListId: number
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
<li>HostIp - String - 是否必填：否 - 主机ip查询 </li>
<li>FileName - String - 是否必填：否 - 文件名称查询 </li>
<li>FileDirectory - String - 是否必填：否 - 文件目录查询 </li>
<li>FileExtension - String - 是否必填：否 - 文件后缀查询 </li>
<li>Mode - String - 是否必填：否 - 规则类型 0 MD5,1自定义</li>
<li>Md5 - String - 是否必填：否 - MD5查询 </li>
   */
  Filters?: Array<Filter>
  /**
   * 排序方式: [ASC:升序|DESC:降序]
   */
  Order?: string
  /**
   * 可选排序列: [CreateTime]
   */
  By?: string
}

/**
 * DeleteWebHookPolicy请求参数结构体
 */
export interface DeleteWebHookPolicyRequest {
  /**
   * id列表
   */
  Ids?: Array<number | bigint>
}

/**
 * ModifyRansomDefenseStrategyStatus请求参数结构体
 */
export interface ModifyRansomDefenseStrategyStatusRequest {
  /**
   * 是否对全部策略生效: 0否，1是
   */
  IsAll: number
  /**
   * 0关闭，1开启，9删除
   */
  Status: number
  /**
   * 策略ID列表
   */
  IdList?: Array<number | bigint>
}

/**
 * DescribeAssetAppList返回参数结构体
 */
export interface DescribeAssetAppListResponse {
  /**
   * 应用列表
   */
  Apps?: Array<AssetAppBaseInfo>
  /**
   * 总数量
   */
  Total?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeWarningHostConfig返回参数结构体
 */
export interface DescribeWarningHostConfigResponse {
  /**
   * 告警主机范围类型，0:全部主机，1:按所属项目选，2:按腾讯云标签选，3:按主机安全标签选，4:自选主机
   */
  HostRange?: number
  /**
   * 项目或标签的名称列表，自选主机时为空
   */
  ItemLabels?: Array<string>
  /**
   * 机器列表
   */
  Quuids?: Array<string>
  /**
   * 机器列表总数量
   */
  TotalCount?: number
  /**
   * 项目或标签的id列表，自选主机时为空
   */
  ItemLabelIds?: Array<string>
  /**
   * 需排除的机器列表
   */
  ExcludedQuuids?: Array<string>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 大屏网络攻击日志
 */
export interface ScreenDefendAttackLog {
  /**
   * 日志ID
   */
  Id?: number
  /**
   * 客户端ID
   */
  Uuid?: string
  /**
   * 来源IP
   */
  SrcIp?: string
  /**
   * 来源端口
   */
  SrcPort?: number
  /**
   * 攻击方式
   */
  HttpMethod?: string
  /**
   * 威胁类型
   */
  VulType?: string
  /**
   * 攻击时间
   */
  CreatedTime?: string
  /**
   * 目标端口
   */
  DstPort?: number
  /**
   * 主机 quuid
   */
  Quuid?: string
  /**
   * 目标IP
   */
  DstIp?: string
}

/**
 * DescribeVulDefencePluginStatus返回参数结构体
 */
export interface DescribeVulDefencePluginStatusResponse {
  /**
   * 数据总数
   */
  TotalCount?: number
  /**
   * 各主机漏洞防御插件信息列表
   */
  List?: Array<VulDefencePluginStatus>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 基线密码修复
 */
export interface BaselineFix {
  /**
   * 修复项名称
   */
  ItemName?: string
  /**
   * 主机Ip
   */
  HostIp?: string
  /**
   * 首次检测时间
   */
  CreateTime?: string
  /**
   * 最后检测时间
   */
  ModifyTime?: string
  /**
   * 修复时间
   */
  FixTime?: string
  /**
   * 基线检测项结果ID
   */
  Id?: number
  /**
   * 主机额外信息
   */
  MachineExtraInfo?: MachineExtraInfo
}

/**
 * ExportAssetWebLocationList请求参数结构体
 */
export interface ExportAssetWebLocationListRequest {
  /**
   * 查询指定Quuid主机的信息
   */
  Quuid?: string
  /**
   * 过滤条件。
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
   */
  Filters?: Array<Filter>
  /**
   * 排序方式，asc升序 或 desc降序
   */
  Order?: string
  /**
   * 可选排序：[FirstTime|PathCount]
   */
  By?: string
}

/**
 * DescribeRansomDefenseEventsList返回参数结构体
 */
export interface DescribeRansomDefenseEventsListResponse {
  /**
   * 事件列表
   */
  List?: Array<RansomDefenseEvent>
  /**
   * 分页查询记录总数
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeVulEffectModules请求参数结构体
 */
export interface DescribeVulEffectModulesRequest {
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
   * 过滤条件：
<li>Uuid - String数组 - Uuid串数组</li>
   */
  Filters?: Array<Filter>
}

/**
 * ModifyRiskDnsPolicyStatus请求参数结构体
 */
export interface ModifyRiskDnsPolicyStatusRequest {
  /**
   * 策略ID
   */
  PolicyId: number
  /**
   * 是否生效[0:生效,1:不生效]
   */
  IsEnabled: number
}

/**
 * DescribeScreenProtectionCnt返回参数结构体
 */
export interface DescribeScreenProtectionCntResponse {
  /**
   * 主机安全防护引擎介绍 内容
   */
  List?: Array<ScreenProtectionCnt>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyRansomDefenseEventsStatus返回参数结构体
 */
export interface ModifyRansomDefenseEventsStatusResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeBaselineDefaultStrategyList请求参数结构体
 */
export type DescribeBaselineDefaultStrategyListRequest = null

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
  /**
   * 是否开启恶意进程查杀[0:未开启,1:开启]
   */
  EnableMemShellScan?: number
}

/**
 * 资源负载概况
 */
export interface AssetLoadSummary {
  /**
   * 负载量数组，依次为：
[
0%或未知数量，
0%～20%，
20%～50%，
50%～80%，
80%～100%
]
   */
  Counts?: Array<number | bigint>
  /**
   * 负载Top5
   */
  Top5?: Array<AssetLoadDetail>
}

/**
 * DescribeMalwareTimingScanSetting返回参数结构体
 */
export interface DescribeMalwareTimingScanSettingResponse {
  /**
   * 检测模式 0 全盘检测  1快速检测
   */
  CheckPattern?: number
  /**
   * 检测周期 开始时间
   */
  StartTime?: string
  /**
   * 检测周期 超时结束时间
   */
  EndTime?: string
  /**
   * 是否全部服务器 1 全部 2 自选
   */
  IsGlobal?: number
  /**
   * 自选服务器时必须 主机quuid的string数组
   */
  QuuidList?: Array<string>
  /**
   * 监控模式 0 标准 1深度
   */
  MonitoringPattern?: number
  /**
   * 周期 1每天
   */
  Cycle?: number
  /**
   * 定时检测开关 0 关闭1 开启
   */
  EnableScan?: number
  /**
   * 唯一ID
   */
  Id?: number
  /**
   * 实时监控0 关闭 1开启
   */
  RealTimeMonitoring?: number
  /**
   * 是否自动隔离：1-是，0-否
   */
  AutoIsolation?: number
  /**
   * 一键扫描超时时长，如：1800秒（s）
   */
  ClickTimeout?: number
  /**
   * 是否杀掉进程 1杀掉 0不杀掉 只有开启自动隔离才生效
   */
  KillProcess?: number
  /**
   * 1标准模式（只报严重、高危）、2增强模式（报严重、高危、中危）、3严格模式（报严重、高、中、低、提示）
   */
  EngineType?: number
  /**
   * 启发引擎 0 关闭 1开启
   */
  EnableInspiredEngine?: number
  /**
   * 是否开启恶意进程查杀[0:未开启,1:开启]
   */
  EnableMemShellScan?: number
  /**
   * 防护模式 0 标准 1 重保
   */
  ProtectMode?: number
  /**
   * 查杀范围 0 脚本类之外的恶意文件，1全部恶意文件
   */
  ProtectFileScope?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
   * 过滤条件。<li>Quuid - String - 是否必填：否 - 云服务器uuid</li><li>Uuid - String - 是否必填：否 - 主机安全唯一Uuid</li><li>MachineName - String - 是否必填：否 - 主机别名</li><li>Ip - String - 是否必填：否 - 主机ip</li><li>InstanceID - String - 是否必填：否 - 主机实例ID</li><li>SrcIp - String - 是否必填：否 - 来源ip筛选</li><li>UserName - String - 是否必填：否 - 用户名筛选</li><li>Status - string - 是否必填：否 - 状态筛选1:正常登录；5：已加白,14:已处理，15：已忽略</li><li>LoginTimeBegin - String - 是否必填：否 - 按照修改时间段筛选，开始时间</li><li>LoginTimeEnd - String - 是否必填：否 - 按照修改时间段筛选，结束时间</li><li>RiskLevel - string - 是否必填：否 - 状态筛选0:高危；1：可疑</li>
   */
  Filters?: Array<Filter>
  /**
   * 排序方式：根据请求次数排序：asc-升序/desc-降序
   */
  Order?: string
  /**
   * 排序字段：LoginTime-发生时间
   */
  By?: string
}

/**
 * ModifyRansomDefenseStrategyStatus返回参数结构体
 */
export interface ModifyRansomDefenseStrategyStatusResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyLoginWhiteInfo返回参数结构体
 */
export interface ModifyLoginWhiteInfoResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
  MachineName?: string
  /**
   * 主机系统。
   */
  MachineOs?: string
  /**
   * 主机状态。
<li>OFFLINE: 离线  </li>
<li>ONLINE: 在线</li>
<li>SHUTDOWN: 已关机</li>
<li>UNINSTALLED: 未防护</li>
   */
  MachineStatus?: string
  /**
   * 主机安全Uuid，若客户端长时间不在线将返回空字符。
   */
  Uuid?: string
  /**
   * CVM或BM机器唯一Uuid。
   */
  Quuid?: string
  /**
   * 漏洞数。
   */
  VulNum?: number
  /**
   * 主机IP。
   */
  MachineIp?: string
  /**
   * 是否是专业版。
<li>true： 是</li>
<li>false：否</li>
   */
  IsProVersion?: boolean
  /**
   * 主机外网IP。
   */
  MachineWanIp?: string
  /**
   * 主机状态。
<li>POSTPAY: 表示后付费，即按量计费  </li>
<li>PREPAY: 表示预付费，即包年包月</li>
   */
  PayMode?: string
  /**
   * 木马数。
   */
  MalwareNum?: number
  /**
   * 标签信息
   */
  Tag?: Array<MachineTag>
  /**
   * 基线风险数。
   */
  BaselineNum?: number
  /**
   * 网络风险数。
   */
  CyberAttackNum?: number
  /**
   * 风险状态。
<li>SAFE：安全</li>
<li>RISK：风险</li>
<li>UNKNOWN：未知</li>
   */
  SecurityStatus?: string
  /**
   * 入侵事件数
   */
  InvasionNum?: number
  /**
   * 地域信息
   */
  RegionInfo?: RegionInfo
  /**
   * 实例状态 TERMINATED_PRO_VERSION 已销毁
   */
  InstanceState?: string
  /**
   * 防篡改 授权状态 1 授权 0 未授权
   */
  LicenseStatus?: number
  /**
   * 项目ID
   */
  ProjectId?: number
  /**
   * 是否有资产扫描接口，0无，1有
   */
  HasAssetScan?: number
  /**
   * 机器所属专区类型 CVM 云服务器, BM 黑石, ECM 边缘计算, LH 轻量应用服务器 ,Other 混合云专区
   */
  MachineType?: string
  /**
   * 内核版本
   */
  KernelVersion?: string
  /**
   * 防护版本：BASIC_VERSION 基础版， PRO_VERSION 专业版，Flagship 旗舰版，GENERAL_DISCOUNT 普惠版
   */
  ProtectType?: string
  /**
   * 云标签信息
   */
  CloudTags?: Array<Tags>
  /**
   * 是否15天内新增的主机 0：非15天内新增的主机，1：15天内增加的主机
   */
  IsAddedOnTheFifteen?: number
  /**
   * 主机ip列表
   */
  IpList?: string
  /**
   * 所属网络
   */
  VpcId?: string
  /**
   * 附加信息
   */
  MachineExtraInfo?: MachineExtraInfo
  /**
   * 实例ID
   */
  InstanceId?: string
  /**
   * 备注信息
   */
  Remark?: string
}

/**
 * 核心文件监控规则
 */
export interface FileTamperRule {
  /**
   * 进程路径
   */
  ProcessPath: string
  /**
   * 被访问文件路径
   */
  Target: string
  /**
   * 执行动作 跳过：skip，告警：alert
   */
  Action: string
  /**
   * 监控行为
<li>read 读取文件</li>
<li>write 修改文件</li>
<li>read-write 读取修改文件</li>
   */
  FileAction?: string
}

/**
 * 安全趋势统计数据。
 */
export interface SecurityTrend {
  /**
   * 事件时间。
   */
  Date?: string
  /**
   * 事件数量。
   */
  EventNum?: number
}

/**
 * ScanTaskAgain返回参数结构体
 */
export interface ScanTaskAgainResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
 * DescribeScreenMachines返回参数结构体
 */
export interface DescribeScreenMachinesResponse {
  /**
   * 列表详情
   */
  List?: Array<ScreenRegionMachines>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 授权订单列表对象
 */
export interface LicenseDetail {
  /**
   * 授权ID
   */
  LicenseId?: number
  /**
   * 授权类型,0 专业版-按量计费, 1专业版-包年包月 , 2 旗舰版-包年包月
   */
  LicenseType?: number
  /**
   * 授权状态 0 未使用,1 部分使用, 2 已用完, 3 不可用
   */
  LicenseStatus?: number
  /**
   * 总授权数
   */
  LicenseCnt?: number
  /**
   * 已使用授权数
   */
  UsedLicenseCnt?: number
  /**
   * 订单状态 1 正常 2隔离, 3销毁
   */
  OrderStatus?: number
  /**
   * 截止日期
   */
  Deadline?: string
  /**
   * 订单资源ID
   */
  ResourceId?: string
  /**
   * 0 初始化,1 自动续费,2 不自动续费
   */
  AutoRenewFlag?: number
  /**
   * 项目ID
   */
  ProjectId?: number
  /**
   * 任务ID ,默认0 ,查询绑定进度用
   */
  TaskId?: number
  /**
   * 购买时间
   */
  BuyTime?: string
  /**
   * 是否试用订单.
   */
  SourceType?: number
  /**
   * 资源别名
   */
  Alias?: string
  /**
   * 平台标签
   */
  Tags?: Array<Tags>
  /**
   * 冻结数,当为0时 为未冻结,非0 则表示冻结授权数额
   */
  FreezeNum?: number
}

/**
 * ExportBashEvents返回参数结构体
 */
export interface ExportBashEventsResponse {
  /**
   * 导出文件下载链接地址。
   */
  DownloadUrl?: string
  /**
   * 任务ID,需要到接口“异步导出任务”ExportTasks获取DownloadUrl下载地址
   */
  TaskId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
  VulCategories?: Array<number | bigint>
  /**
   * 危害等级：1-低危；2-中危；3-高危；4-严重,以数组方式传参[1,2,3]
   */
  VulLevels?: Array<number | bigint>
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
  /**
   * 为空默认扫描全部专业版、旗舰版、普惠版主机，不为空只扫描选中主机
   */
  Uuids?: Array<string>
  /**
   * 0版本比对，2版本比对+poc
   */
  ScanMethod?: number
}

/**
 * 项
 */
export interface Item {
  /**
   * Id
   */
  ItemId: number
  /**
   * 名称
   */
  ItemName?: string
  /**
   * 自定义阈值
   */
  CustomItemValues?: Array<number | bigint>
  /**
   * 检测项所属分类
   */
  CategoryId?: number
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
  /**
   * 扫描超时时长 ，单位秒
   */
  TimeoutPeriod?: number
}

/**
 * StopBaselineDetect请求参数结构体
 */
export interface StopBaselineDetectRequest {
  /**
   * 取消任务ID集合
   */
  TaskIds: Array<number | bigint>
}

/**
 * DescribeProtectDirRelatedServer返回参数结构体
 */
export interface DescribeProtectDirRelatedServerResponse {
  /**
   * 网站关联服务器列表信息
   */
  List?: Array<ProtectDirRelatedServer>
  /**
   * 总数
   */
  TotalCount?: number
  /**
   * 已开启防护总数
   */
  ProtectServerCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyWebHookRuleStatus返回参数结构体
 */
export interface ModifyWebHookRuleStatusResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeBaselineItemIgnoreList请求参数结构体
 */
export interface DescribeBaselineItemIgnoreListRequest {
  /**
   * 忽略规则ID
   */
  RuleID: number
  /**
   * 限制条数,默认10,最大100
   */
  Limit?: number
  /**
   * 请求偏移默认0
   */
  Offset?: number
  /**
   * <li>CatgoryId - int64 - 是否必填：否 - 规则Id</li>
   */
  Filters?: Array<Filter>
  /**
   * 排序方式 [ASC:升序|DESC:降序]
   */
  Order?: string
  /**
   * 可选排序列 [ID]
   */
  By?: string
}

/**
 * DescribeAssetWebServiceCount返回参数结构体
 */
export interface DescribeAssetWebServiceCountResponse {
  /**
   * 各Web服务数量
   */
  WebServices?: Array<AssetKeyVal>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 资产管理内核模块详情
 */
export interface AssetCoreModuleDetail {
  /**
   * 名称
   */
  Name?: string
  /**
   * 描述
   */
  Desc?: string
  /**
   * 路径
   */
  Path?: string
  /**
   * 版本
   */
  Version?: string
  /**
   * 大小
   */
  Size?: number
  /**
   * 依赖进程
   */
  Processes?: string
  /**
   * 被依赖模块
   */
  Modules?: string
  /**
   * 参数信息
   */
  Params?: Array<AssetCoreModuleParam>
  /**
   * 数据更新时间
   */
  UpdateTime?: string
}

/**
 * ExportScanTaskDetails返回参数结构体
 */
export interface ExportScanTaskDetailsResponse {
  /**
   * 任务ID,需要到接口“异步导出任务”ExportTasks获取DownloadUrl下载地址(不同于入参的本次检测任务id)
   */
  TaskId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
   * 1:web-cms 漏洞，2.应用漏洞 4: Linux软件漏洞 5: windows系统漏洞 6:应急漏洞，不填或者填0时返回 1，2，4，5 的总统计数据
   */
  VulCategory?: number
  /**
   * 是否仅统计重点关注漏洞 1=仅统计重点关注漏洞, 0=统计全部漏洞
   */
  IsFollowVul?: number
}

/**
 * DescribeScreenProtectionStat请求参数结构体
 */
export type DescribeScreenProtectionStatRequest = null

/**
 * ModifyLogKafkaDeliverType请求参数结构体
 */
export interface ModifyLogKafkaDeliverTypeRequest {
  /**
   * 安全模块类型 1: 入侵检测 2: 漏洞管理 3: 基线管理 4: 高级防御 5:客户端相关 6: 资产指纹
   */
  SecurityType: number
  /**
   * 安全模块下的日志类型，
   */
  LogType: Array<number | bigint>
  /**
   * 投递开关 0关闭 1开启
   */
  Switch: number
  /**
   * kafka topic id
   */
  TopicId: string
  /**
   * kafka topic name
   */
  TopicName: string
}

/**
 * 忽略的基线检测项信息
 */
export interface IgnoreBaselineRule {
  /**
   * 基线检测项名称
   */
  RuleName?: string
  /**
   * 基线检测项id
   */
  RuleId?: number
  /**
   * 更新时间
   */
  ModifyTime?: string
  /**
   * 修复建议
   */
  Fix?: string
  /**
   * 影响主机数
   */
  EffectHostCount?: number
}

/**
 * DescribeBaselineItemDetectList请求参数结构体
 */
export interface DescribeBaselineItemDetectListRequest {
  /**
   * <li>HostId - string - 是否必填：否 - 主机Id</li>
<li>RuleId - int64 - 是否必填：否 - 规则Id</li>
<li>PolicyId - int64 - 是否必填：否 - 规则Id</li>
<li>ItemName - string - 是否必填：否 - 项名称</li>
<li>DetectStatus - int - 是否必填：否 - 检测状态</li>
<li>Level - int - 是否必填：否 - 风险等级</li>
<li>StartTime - string - 是否必填：否 - 开始时间</li>
<li>EndTime - string - 是否必填：否 - 结束时间</li>
   */
  Filters?: Array<Filter>
  /**
   * 限制条数,默认10,最大100
   */
  Limit?: number
  /**
   * 偏移量,默认0
   */
  Offset?: number
  /**
   * 排序方式: [ASC:升序|DESC:降序]
   */
  Order?: string
  /**
   * 可选排序列: [HostCount|FirstTime|LastTime]
   */
  By?: string
}

/**
 * ExportBaselineItemDetectList返回参数结构体
 */
export interface ExportBaselineItemDetectListResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
   */
  TotalList?: Array<AssetKeyVal>
  /**
   * 在线数量列表
   */
  LiveList?: Array<AssetKeyVal>
  /**
   * 离线数量列表
   */
  OfflineList?: Array<AssetKeyVal>
  /**
   * 风险数量列表
   */
  RiskList?: Array<AssetKeyVal>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeBaselineBasicInfo返回参数结构体
 */
export interface DescribeBaselineBasicInfoResponse {
  /**
   * 基线基础信息列表
   */
  BaselineBasicInfoList?: Array<BaselineBasicInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeMalWareList返回参数结构体
 */
export interface DescribeMalWareListResponse {
  /**
   * 木马列表
   */
  MalWareList?: Array<MalWareList>
  /**
   * 总数量
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyLicenseUnBinds返回参数结构体
 */
export interface ModifyLicenseUnBindsResponse {
  /**
   * 只有解绑失败的才有该值.
   */
  ErrMsg?: Array<LicenseUnBindRsp>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeWebHookRules请求参数结构体
 */
export interface DescribeWebHookRulesRequest {
  /**
   * 过滤条件
   */
  Filter?: Array<Filter>
  /**
   * 偏移量，默认为0。
   */
  Offset?: number
  /**
   * 需要返回的数量，默认为10，最大值为100
   */
  Limit?: number
  /**
   * 排序方式 [asc:升序|desc:降序]
   */
  Order?: string
  /**
   * 排序字段
   */
  By?: string
}

/**
 * ModifyMalwareWhiteList返回参数结构体
 */
export interface ModifyMalwareWhiteListResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
  Total?: number
  /**
   * 列表
   */
  Ports?: Array<AssetPortBaseInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeMalwareRiskOverview请求参数结构体
 */
export type DescribeMalwareRiskOverviewRequest = null

/**
 * DescribeProtectDirList返回参数结构体
 */
export interface DescribeProtectDirListResponse {
  /**
   * 总数
   */
  TotalCount?: number
  /**
   * 防护目录列表信息
   */
  List?: Array<ProtectDirInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeMaliciousRequestWhiteList返回参数结构体
 */
export interface DescribeMaliciousRequestWhiteListResponse {
  /**
   * 白名单信息列表
   */
  List?: Array<MaliciousRequestWhiteListInfo>
  /**
   * 分页查询记录总数
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeBaselinePolicyList请求参数结构体
 */
export interface DescribeBaselinePolicyListRequest {
  /**
   * <li>PolicyName - String - 是否必填：否 - 策略名称</li>
   */
  Filters?: Array<Filter>
  /**
   * 限制条数,默认10,最大100
   */
  Limit?: number
  /**
   * 偏移量,默认0
   */
  Offset?: number
  /**
   * 排序方式: [ASC:升序|DESC:降序]
   */
  Order?: string
  /**
   * 可选排序列: [RuleCount|ItemCount|HostCount]
   */
  By?: string
}

/**
 * 漏洞详细信息
 */
export interface VulDefenceEventDetail {
  /**
   * 漏洞名称
   */
  VulName?: string
  /**
   * cve编号
   */
  CveId?: string
  /**
   * 漏洞事件id
   */
  Id?: number
  /**
   * 主机quuid
   */
  Quuid?: string
  /**
   * 主机名
   */
  Alias?: string
  /**
   * 内网ip
   */
  PrivateIp?: string
  /**
   * 公网ip
   */
  PublicIp?: string
  /**
   * 0: 尝试攻击(WeDetect) 1:尝试攻击成功(WeDetect) 2:rasp防御事件
   */
  EventType?: number
  /**
   * 攻击源ip
   */
  SourceIp?: string
  /**
   * 攻击源ip地址所在城市
   */
  City?: string
  /**
   * 攻击源端口
   */
  SourcePort?: Array<number | bigint>
  /**
   * 创建事件时间
   */
  CreateTime?: string
  /**
   * 更新事件时间
   */
  MergeTime?: string
  /**
   * 事件发生次数
   */
  Count?: number
  /**
   * 状态 0: 待处理 1:已防御 2:已处理 3: 已忽略 4: 已删除
   */
  Status?: number
  /**
   * ONLINE OFFLINE
   */
  MachineStatus?: string
  /**
   * 漏洞描述信息
   */
  Description?: string
  /**
   * 修复建议
   */
  Fix?: string
  /**
   * 攻击payload
   */
  NetworkPayload?: string
  /**
   * 关联进程pid
   */
  Pid?: number
  /**
   * 关联进程主类名
   */
  MainClass?: string
  /**
   * 堆栈信息(rasp特有)
   */
  StackTrace?: string
  /**
   * 漏洞ID相关的事件详情(json array格式 rasp特有)
   */
  EventDetail?: string
  /**
   * 主机失陷事件进程树(json格式 WeDetect特有)
   */
  ExceptionPstree?: string
  /**
   * 主机额外信息
   */
  MachineExtraInfo?: MachineExtraInfo
}

/**
 * DeleteBruteAttacks返回参数结构体
 */
export interface DeleteBruteAttacksResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
  Status?: string
  /**
   * 下载链接
   */
  DownloadUrl?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ExportAssetWebAppList返回参数结构体
 */
export interface ExportAssetWebAppListResponse {
  /**
   * 异步下载任务ID，需要配合ExportTasks接口使用
   */
  TaskId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeIgnoreBaselineRule返回参数结构体
 */
export interface DescribeIgnoreBaselineRuleResponse {
  /**
   * 忽略基线检测项列表信息
   */
  IgnoreBaselineRuleList?: Array<IgnoreBaselineRule>
  /**
   * 分页查询记录总数
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeVulEmergentMsg请求参数结构体
 */
export type DescribeVulEmergentMsgRequest = null

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
  IsCheckRisk?: boolean
  /**
   * 风险文件列表信息
   */
  List?: Array<MalwareRisk>
  /**
   * 是否弹出提示 true 弹出, false不弹
   */
  IsPop?: boolean
  /**
   * 异常进程列表信息
   */
  ProcessList?: Array<MalwareRisk>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
<li>Name - String - 是否必填：否 - 规则名称</li>
<li>Rule - String - 是否必填：否 - 规则内容</li>
<li>Level - Int - 是否必填：否 - 威胁等级</li>
<li>White - Int - 是否必填：否 - 白名单类型</li>
<li>RuleCategory - Int - 是否必填：否 - 策略类型</li>
<li>BashAction - Int - 是否必填：否 - 操作动作</li>
<li>Status - Int - 是否必填：否 - 生效状态</li>
   */
  Filters?: Array<Filter>
}

/**
 * ExportLicenseDetail返回参数结构体
 */
export interface ExportLicenseDetailResponse {
  /**
   * 下载地址,该字段废弃
   */
  DownloadUrl?: string
  /**
   * 任务ID,需要到接口“异步导出任务”ExportTasks获取DownloadUrl下载地址
   */
  TaskId?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 基线基础信息
 */
export interface BaselineBasicInfo {
  /**
   * 基线名称
   */
  Name?: string
  /**
   * 基线id
   */
  BaselineId?: number
  /**
   * 父级id
   */
  ParentId?: number
}

/**
 * DescribeBanMode返回参数结构体
 */
export interface DescribeBanModeResponse {
  /**
   * 阻断模式，STANDARD_MODE：标准阻断，DEEP_MODE：深度阻断
   */
  Mode?: string
  /**
   * 标准阻断模式的配置
   */
  StandardModeConfig?: StandardModeConfig
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeScreenAttackHotspot返回参数结构体
 */
export interface DescribeScreenAttackHotspotResponse {
  /**
   * 攻击热点列表
   */
  List?: Array<ScreenAttackHotspot>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeImportMachineInfo返回参数结构体
 */
export interface DescribeImportMachineInfoResponse {
  /**
   * 有效的机器信息列表：机器名称、机器公网/内网ip、机器标签
   */
  EffectiveMachineInfoList?: Array<EffectiveMachineInfo>
  /**
   * 用户批量导入失败的机器列表（例如机器不存在等...）
   */
  InvalidMachineList?: Array<string>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeRiskDnsEventInfo返回参数结构体
 */
export interface DescribeRiskDnsEventInfoResponse {
  /**
   * 恶意请求事件详情
   */
  Info?: RiskDnsEvent
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
  MalwareStat?: EventStat
  /**
   * 异地事件统计
   */
  HostLoginStat?: EventStat
  /**
   * 爆破事件统计
   */
  BruteAttackStat?: EventStat
  /**
   * 恶意请求事件统计
   */
  MaliciousRequestStat?: EventStat
  /**
   * 本地提权事件统计
   */
  PrivilegeStat?: EventStat
  /**
   * 反弹Shell事件统计
   */
  ReverseShellStat?: EventStat
  /**
   * 高危命令事件统计
   */
  HighRiskBashStat?: EventStat
  /**
   * 网络攻击事件统计
   */
  AttackLogsStat?: EventStat
  /**
   * 高危漏洞事件统计
   */
  VulHighStat?: EventStat
  /**
   * 中危漏洞事件统计
   */
  VulNormalStat?: EventStat
  /**
   * 低危漏洞事件统计
   */
  VulLowStat?: EventStat
  /**
   * 高危基线漏洞事件统计
   */
  BaselineHighStat?: EventStat
  /**
   * 中危基线漏事件统计
   */
  BaselineNormalStat?: EventStat
  /**
   * 低危基线漏事件统计
   */
  BaselineLowStat?: EventStat
  /**
   * 有未处理安全事件的机器总数
   */
  MachineTotalAffectNum?: number
  /**
   * 有未处理入侵安全事件的机器总数
   */
  InvasionTotalAffectNum?: number
  /**
   * 有未处理漏洞安全事件的机器总数
   */
  VulTotalAffectNum?: number
  /**
   * 有未处理基线安全事件的机器总数
   */
  BaseLineTotalAffectNum?: number
  /**
   * 有未处理网络攻击安全事件的机器总数
   */
  CyberAttackTotalAffectNum?: number
  /**
   * 严重漏洞事件统计
   */
  VulRiskStat?: EventStat
  /**
   * 严重基线漏洞事件统计
   */
  BaselineRiskStat?: EventStat
  /**
   * 漏洞数统计
   */
  VulStat?: EventStat
  /**
   * 安全得分
   */
  Score?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeAssetDatabaseList请求参数结构体
 */
export interface DescribeAssetDatabaseListRequest {
  /**
   * 查询指定Quuid主机的信息
   */
  Quuid?: string
  /**
   * 过滤条件。
<li>MachineName- String - 是否必填：否 - 主机别名筛选</li>
<li>IP- String - 是否必填：否 - 主机ip筛选</li>
<li>InstanceID- String - 是否必填：否 - 主机实例ID筛选</li>
<li>User- string - 是否必填：否 - 运行用户</li>
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
   * 偏移量，默认为0。
   */
  Offset?: number
  /**
   * 需要返回的数量，默认为10，最大值为100
   */
  Limit?: number
  /**
   * 排序方式，asc升序 或 desc降序
   */
  Order?: string
  /**
   * 排序方式：[FirstTime]
   */
  By?: string
}

/**
 * ModifyWebHookRuleStatus请求参数结构体
 */
export interface ModifyWebHookRuleStatusRequest {
  /**
   * 规则Id
   */
  Id: number
  /**
   * 开启状态[0:开启|1:关闭]
   */
  IsDisabled: number
}

/**
 * KeysLocalStorage返回参数结构体
 */
export interface KeysLocalStorageResponse {
  /**
   * 键列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  Keys?: Array<string>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeAssetMachineList请求参数结构体
 */
export interface DescribeAssetMachineListRequest {
  /**
   * 过滤条件。
<li>MachineName  主机名称</li>
<li>InstanceID  实例ID  </li>
<li>IP   内网IP或公网IP</li>
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
   * 需要返回的数量，默认为10，最大值为100
   */
  Limit?: number
  /**
   * 偏移量，默认为0。
   */
  Offset?: number
  /**
   * 排序方式，asc升序 或 desc降序
   */
  Order?: string
  /**
   * 可选排序[FirstTime|PartitionCount]
   */
  By?: string
}

/**
 * ExportBaselineRuleDetectList返回参数结构体
 */
export interface ExportBaselineRuleDetectListResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 灰度项目配置
 */
export interface ABTestConfig {
  /**
   * 灰度项目名称
   */
  ProjectName?: string
  /**
   * true：正在灰度，false：不在灰度
   */
  Status?: boolean
}

/**
 * 大屏基线信息
 */
export interface ScreenBaselineInfo {
  /**
   * 基线名
   */
  Name?: string
  /**
   * 危害等级：1-低危；2-中危；3-高危；4-严重
   */
  Level?: number
  /**
   * 基线id
   */
  CategoryId?: number
  /**
   * 最后检测时间
   */
  LastScanTime?: string
  /**
   * 基线风险项
   */
  BaselineFailCount?: number
  /**
   * 主机uuid
   */
  Uuid?: string
}

/**
 * ExportBaselineWeakPasswordList请求参数结构体
 */
export interface ExportBaselineWeakPasswordListRequest {
  /**
   * <li>WeakPassword - string - 是否必填：否 - 弱口令</li>
   */
  Filters?: Array<Filter>
  /**
   * 0:过滤的结果导出；1:全部导出
   */
  ExportAll?: number
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
 * DescribeAssetMachineTagTop请求参数结构体
 */
export type DescribeAssetMachineTagTopRequest = null

/**
 * 授权版本白名单配置信息
 */
export interface VersionWhiteConfig {
  /**
   * 到期天数
   */
  Deadline?: number
  /**
   * 授权数量
   */
  LicenseNum?: number
  /**
   * 是否可申请
   */
  IsApplyFor?: boolean
  /**
   * 类型
   */
  SourceType?: number
}

/**
 * DescribeAgentInstallationToken请求参数结构体
 */
export interface DescribeAgentInstallationTokenRequest {
  /**
   * token 过期时间
   */
  ExpireDate: string
}

/**
 * DescribeVulDefencePluginDetail返回参数结构体
 */
export interface DescribeVulDefencePluginDetailResponse {
  /**
   * 数据总数
   */
  TotalCount?: number
  /**
   * 漏洞防御插件信息详情列表
   */
  List?: Array<VulDefencePluginDetail>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * Java内存马插件信息
 */
export interface JavaMemShellPluginInfo {
  /**
   * 注入进程pid
   */
  Pid?: number
  /**
   * 注入进程主类
   */
  MainClass?: string
  /**
   * 注入状态：0: 注入中, 1: 注入成功, 2: 插件超时, 3: 插件退出, 4: 注入失败 5: 软删除
   */
  Status?: number
  /**
   * 错误日志
   */
  ErrorLog?: string
}

/**
 * DescribeAssetDatabaseList返回参数结构体
 */
export interface DescribeAssetDatabaseListResponse {
  /**
   * 列表
   */
  Databases?: Array<AssetDatabaseBaseInfo>
  /**
   * 总数量
   */
  Total?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
 * 恶意请求列表
 */
export interface RiskDnsList {
  /**
   * 对外访问域名
   */
  Url?: string
  /**
   * 访问次数
   */
  AccessCount?: number
  /**
   * 进程名
   */
  ProcessName?: string
  /**
   * 进程MD5
   */
  ProcessMd5?: string
  /**
   * 是否为全局规则，0否，1是
   */
  GlobalRuleId?: number
  /**
   * 用户规则id
   */
  UserRuleId?: number
  /**
   * 状态；0-待处理，2-已加白，3-非信任状态，4-已处理，5-已忽略
   */
  Status?: number
  /**
   * 首次访问时间
   */
  CreateTime?: string
  /**
   * 最近访问时间
   */
  MergeTime?: string
  /**
   * 唯一 Quuid
   */
  Quuid?: string
  /**
   * 主机ip
   */
  HostIp?: string
  /**
   * 别名
   */
  Alias?: string
  /**
   * 描述
   */
  Description?: string
  /**
   * 唯一ID
   */
  Id?: number
  /**
   * 参考
   */
  Reference?: string
  /**
   * 命令行
   */
  CmdLine?: string
  /**
   * 进程号
   */
  Pid?: number
  /**
   * 唯一UUID
   */
  Uuid?: string
  /**
   * 建议方案
   */
  SuggestScheme?: string
  /**
   * 标签特性
   */
  Tags?: Array<string>
  /**
   * 外网ip
   */
  MachineWanIp?: string
  /**
   * 主机在线状态[OFFLINE:离线|ONLINE:在线|UNKNOWN:未知]
   */
  MachineStatus?: string
}

/**
 * SyncAssetScan返回参数结构体
 */
export interface SyncAssetScanResponse {
  /**
   * 枚举值有(大写)：NOTASK（没有同步任务），SYNCING（同步中），FINISHED（同步完成）
   */
  State?: string
  /**
   * 最新开始同步时间
   */
  LatestStartTime?: string
  /**
   * 最新结束同步时间
   */
  LatestEndTime?: string
  /**
   * 任务ID
   */
  TaskId?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 文件查杀概览信息
 */
export interface MalwareRiskOverview {
  /**
   * 影响主机数
   */
  HostCount?: number
  /**
   * 异常进程数
   */
  ProcessCount?: number
  /**
   * 恶意文件数
   */
  FileCount?: number
  /**
   * 是否首次扫描[false:否|true:是]
   */
  IsFirstScan?: boolean
  /**
   * 最后扫描时间
   */
  ScanTime?: string
}

/**
 * 资产管理内核模块列表
 */
export interface AssetCoreModuleBaseInfo {
  /**
   * 名称
   */
  Name?: string
  /**
   * 描述
   */
  Desc?: string
  /**
   * 路径
   */
  Path?: string
  /**
   * 版本
   */
  Version?: string
  /**
   * 服务器IP
   */
  MachineIp?: string
  /**
   * 服务器名称
   */
  MachineName?: string
  /**
   * 操作系统
   */
  OsInfo?: string
  /**
   * 模块大小
   */
  Size?: number
  /**
   * 依赖进程数
   */
  ProcessCount?: number
  /**
   * 依赖模块数
   */
  ModuleCount?: number
  /**
   * 模块ID
   */
  Id?: string
  /**
   * 主机Quuid
   */
  Quuid?: string
  /**
   * 主机uuid
   */
  Uuid?: string
  /**
   * 数据更新时间
   */
  UpdateTime?: string
  /**
   * 首次采集时间
   */
  FirstTime?: string
  /**
   * 是否新增[0:否|1:是]
   */
  IsNew?: number
  /**
   * 服务器外网IP
   */
  MachineWanIp?: string
  /**
   *  附加信息
   */
  MachineExtraInfo?: MachineExtraInfo
}

/**
 * CheckLogKafkaConnectionState返回参数结构体
 */
export interface CheckLogKafkaConnectionStateResponse {
  /**
   * true连通，false不通
   */
  IsConnect?: boolean
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ExportBashPolicies请求参数结构体
 */
export interface ExportBashPoliciesRequest {
  /**
   * 过滤参数
   */
  Filters?: Array<Filters>
}

/**
 * DescribeScreenBroadcasts返回参数结构体
 */
export interface DescribeScreenBroadcastsResponse {
  /**
   * 播报文章列表
   */
  List?: Array<ScreenBroadcasts>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
  CategoryIds: Array<number | bigint>
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
 * 查看漏洞修复详情 每台主机每个漏洞修复状态
 */
export interface VulFixStatusHostInfo {
  /**
   * 主机名称
   */
  HostName?: string
  /**
   * 主机ip
   */
  HostIp?: string
  /**
   * 主机的quuid
   */
  Quuid?: string
  /**
   * 状态：0-初始状态；1-已下发任务（修复中）2-完成（成功）；3-修复失败（失败）4-快照创建失败 导致修复失败（未修复）；
   */
  Status?: number
  /**
   * 修复时间
   */
  ModifyTime?: string
  /**
   * 修复失败原因
   */
  FailReason?: string
}

/**
 * DescribeAttackVulTypeList返回参数结构体
 */
export interface DescribeAttackVulTypeListResponse {
  /**
   * 威胁类型列表
   */
  List?: Array<string>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
  List?: Array<PrivilegeRule>
  /**
   * 总条数
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
  List?: Array<ReverseShell>
  /**
   * 总条数
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeAssetAppCount请求参数结构体
 */
export interface DescribeAssetAppCountRequest {
  /**
   * 搜索条件：搜索返回所有软件名包含Name的进程列表
   */
  Name?: string
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
  /**
   * 排序方式 [asc:升序|desc:降序]
   */
  Order?: string
  /**
   * 排序字段
   */
  By?: string
}

/**
 * 网络攻击top统计数据
 */
export interface NetAttackTopInfo {
  /**
   * 网络攻击主机维度top统计数据
   */
  Agent?: Array<TopInfo>
  /**
   * 网络攻击ip来源维度top统计数据
   */
  SrcIp?: Array<TopInfo>
  /**
   * 网络攻击目标端口维度top统计数据
   */
  DstPort?: Array<TopInfo>
  /**
   * 网络攻击漏洞维度top统计数据
   */
  Vul?: Array<TopInfo>
}

/**
 * DescribeBashEventsNew请求参数结构体
 */
export interface DescribeBashEventsNewRequest {
  /**
   * 返回数量，默认为10，最大值为100。
   */
  Limit?: number
  /**
   * 过滤条件。
<li>HostName - String - 是否必填：否 - 主机名</li>
<li>Hostip - String - 是否必填：否 - 主机内网IP</li>
<li>HostIp - String - 是否必填：否 - 主机内网IP</li>
<li>RuleCategory - Int - 是否必填：否 - 策略类型,全部或者单选(0:系统 1:用户)</li>
<li>RuleName - String - 是否必填：否 - 策略名称</li>
<li>RuleLevel - Int - 是否必填：否 - 威胁等级,可以多选</li>
<li>Status - Int - 是否必填：否 - 处理状态,可多选(0:待处理 1:已处理 2:已加白  3:已忽略 4:已删除 5:已拦截)</li>
<li>DetectBy - Int - 是否必填：否 - 数据来源,可多选(0:bash日志 1:实时监控)</li>
<li>StartTime - String - 是否必填：否 - 开始时间</li>
<li>EndTime - String - 是否必填：否 - 结束时间</li>
   */
  Filters?: Array<Filter>
  /**
   * 偏移量，默认为0。
   */
  Offset?: number
  /**
   * 排序方式：根据请求次数排序：asc-升序/desc-降序
   */
  Order?: string
  /**
   * 排序字段：CreateTime-发生时间。ModifyTime-处理时间
   */
  By?: string
}

/**
 * 恶意文件风险提示列表信息
 */
export interface MalwareRisk {
  /**
   * 机器IP
   */
  MachineIp?: string
  /**
   * 病毒名
   */
  VirusName?: string
  /**
   * 发现时间
   */
  CreateTime?: string
  /**
   * 唯一ID
   */
  Id?: number
}

/**
 * DescribeWebPageProtectStat返回参数结构体
 */
export interface DescribeWebPageProtectStatResponse {
  /**
   * 文件篡改信息
   */
  FileTamperNum?: Array<ProtectStat>
  /**
   * 防护文件分类信息
   */
  ProtectFileType?: Array<ProtectStat>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeAssetPortInfoList请求参数结构体
 */
export interface DescribeAssetPortInfoListRequest {
  /**
   * 查询指定Quuid主机的信息
   */
  Quuid?: string
  /**
   * 过滤条件。
<li>Port - uint64 - 是否必填：否 - 端口</li>
<li>IP - String - 是否必填：否 - 主机ip</li>
<li>MachineName - String - 是否必填：否 - 主机名称</li>
<li>InstanceID - string - 是否必填：否 - 实例ID</li>
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
   * 需要返回的数量，默认为10，最大值为100
   */
  Limit?: number
  /**
   * 偏移量，默认为0。
   */
  Offset?: number
  /**
   * 排序方式，asc升序 或 desc降序
   */
  Order?: string
  /**
   * 排序方式：[FirstTime|StartTime]
   */
  By?: string
}

/**
 * DescribeVulDefencePluginDetail请求参数结构体
 */
export interface DescribeVulDefencePluginDetailRequest {
  /**
   * 主机Quuid
   */
  Quuid: string
  /**
   * 过滤条件：Keywords: ip或者主机名,Exception，Status精确匹配
   */
  Filters?: Array<Filter>
  /**
   * 数据偏移
   */
  Offset?: number
  /**
   * 数据限制
   */
  Limit?: number
}

/**
 * ModifyLoginWhiteInfo请求参数结构体
 */
export interface ModifyLoginWhiteInfoRequest {
  /**
   * 更新白名单信息实体
   */
  HostLoginWhiteObj: UpdateHostLoginWhiteObj
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
  ProjectIds?: Array<number | bigint>
}

/**
 * DescribeAssetInfo返回参数结构体
 */
export interface DescribeAssetInfoResponse {
  /**
   * 主机数
   */
  MachineCount?: number
  /**
   * 账号数
   */
  AccountCount?: number
  /**
   * 端口数
   */
  PortCount?: number
  /**
   * 进程数
   */
  ProcessCount?: number
  /**
   * 软件数
   */
  SoftwareCount?: number
  /**
   * 数据库数
   */
  DatabaseCount?: number
  /**
   * Web应用数
   */
  WebAppCount?: number
  /**
   * Web框架数
   */
  WebFrameCount?: number
  /**
   * Web服务数
   */
  WebServiceCount?: number
  /**
   * Web站点数
   */
  WebLocationCount?: number
  /**
   * 账号今日新增
   */
  AccountNewCount?: number
  /**
   * 端口今日新增
   */
  PortNewCount?: number
  /**
   * 进程今日新增
   */
  ProcessNewCount?: number
  /**
   * 软件今日新增
   */
  SoftwareNewCount?: number
  /**
   * 数据库今日新增
   */
  DatabaseNewCount?: number
  /**
   * Web应用今日新增
   */
  WebAppNewCount?: number
  /**
   * Web框架今日新增
   */
  WebFrameNewCount?: number
  /**
   * Web服务今日新增
   */
  WebServiceNewCount?: number
  /**
   * Web站点今日新增
   */
  WebLocationNewCount?: number
  /**
   * 主机今日新增
   */
  MachineNewCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 核心文件监控规则详情
 */
export interface FileTamperRuleDetail {
  /**
   * 规则名称
   */
  Name?: string
  /**
   * 更新时间
   */
  ModifyTime?: string
  /**
   * 创建时间
   */
  CreateTime?: string
  /**
   * 状态 0: 启用 1: 已关闭
   */
  Status?: number
  /**
   * 规则
   */
  Rule?: Array<FileTamperRule>
  /**
   * 生效主机uuid,空表示全部主机，通过参数可控制返回的条数
   */
  Uuids?: Array<string>
  /**
   * 规则id
   */
  Id?: number
  /**
   * 是否全局规则(默认否) 0：否 ，1：是
   */
  IsGlobal?: number
  /**
   * 风险等级 0：无， 1: 高危， 2:中危， 3: 低危
   */
  Level?: number
  /**
   * 生效主机的总数
   */
  UuidTotalCount?: number
  /**
   * 加白处理类型
<li>cur 仅对当前加白</li>
<li>all 所有符合条件加白</li>
   */
  AddWhiteType?: string
}

/**
 * DescribeAssetPortCount返回参数结构体
 */
export interface DescribeAssetPortCountResponse {
  /**
   * 各进程数量
   */
  Ports?: Array<AssetKeyVal>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeScreenMachines请求参数结构体
 */
export interface DescribeScreenMachinesRequest {
  /**
   * 主机区域
   */
  MachineRegion?: string
  /**
   * IP 支持内网IP,主机别名
   */
  MachineIpOrAlias?: string
  /**
   * 风险状态类型：0：全部类型，1：风险主机，2：潜在风险主机 ， 3：已关机/离线主机，4：无风险主机
   */
  SecurityStatus?: number
}

/**
 * DeleteMalwareScanTask请求参数结构体
 */
export type DeleteMalwareScanTaskRequest = null

/**
 * 大屏入侵事件详情
 */
export interface ScreenInvasion {
  /**
   * 入侵时间
   */
  CreatedTime?: string
  /**
   * 事件类型：0：文件查杀，1：异常登录， 2：密码破解，3：恶意请求，4：高危命令，5：本地提权， 6：反弹shell
   */
  EventType?: number
  /**
   * 事件数据的json, 每种事件不同，
【文件查杀】病毒名 VirusName、文件名 FileName、文件路径 FilePath、文件大小 FileSize、文件MD5 MD5、首次发现时间 CreateTime、最近检测时间LatestScanTime、危害描述 HarmDescribe、修复建议SuggestScheme
【异常登录】来源IP SrcIp、来源地 Location、登录用户名 UserName、登录时间 LoginTime
【密码破解】来源IP SrcIp、来源地 City,Country、协议 Protocol、登录用户名UserName 、端口 Port、尝试次数 Count、首次攻击时间 CreateTime、最近攻击时间 ModifyTime
【恶意请求】恶意请求域名 Url、进程ProcessName 、MD5 ProcessMd5、PID Pid、请求次数 AccessCount、最近请求时间 MergeTime、危害描述 HarmDescribe、修复建议SuggestScheme
【高危命令】命中规则名 RuleName、规则类别 RuleCategory、命令内容 BashCmd、数据来源 DetectBy、登录用户 User、PID Pid、发生时间 CreateTime 、危害描述 HarmDescribe、修复建议SuggestScheme
【本地提权】提权用户 UserName、父进程 ParentProcName 、父进程所属用户 ParentProcGroup、发现时间 CreateTime、危害描述 HarmDescribe、修复建议SuggestScheme
【反弹shell】连接进程 ProcessName、执行命令CmdLine、父进程ParentProcName、目标主机DstIp、目标端口DstPort、发现时间 CreateTime、危害描述 HarmDescribe、修复建议SuggestScheme
   */
  Content?: string
  /**
   * 事件统一等级 0：提示，1：低危,  2：中危,  3：高危,  4：严重
   */
  Level?: number
  /**
   * 等级中文展示
   */
  LevelZh?: string
  /**
   * 事件id
   */
  Id?: number
  /**
   * 主机uuid
   */
  Uuid?: string
}

/**
 * ExportBashPolicies返回参数结构体
 */
export interface ExportBashPoliciesResponse {
  /**
   * 该参数已废弃
   */
  DownloadUrl?: string
  /**
   * 任务ID,需要到接口“异步导出任务”ExportTasks获取DownloadUrl下载地址
   */
  TaskId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyEventAttackStatus返回参数结构体
 */
export interface ModifyEventAttackStatusResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeIgnoreRuleEffectHostList返回参数结构体
 */
export interface DescribeIgnoreRuleEffectHostListResponse {
  /**
   * 忽略检测项影响主机列表
   */
  IgnoreRuleEffectHostList?: Array<IgnoreRuleEffectHostInfo>
  /**
   * 分页查询记录总数
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
  TaskId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 攻击溯源节点信息
 */
export interface VertexInfo {
  /**
   * 该结点类型，进程:1；网络:2；文件:3；ssh:4；
   */
  Type?: number
  /**
   * 该节点包含的vid
   */
  Vid?: string
  /**
   * 该节点的父节点vid
   */
  ParentVid?: string
  /**
   * 是否叶子
   */
  IsLeaf?: boolean
  /**
   * 进程名，当Type=1时使用
   */
  ProcNamePrefix?: string
  /**
   * 进程名md5，当Type=1时使用
   */
  ProcNameMd5?: string
  /**
   * 命令行，当Type=1时使用
   */
  CmdLinePrefix?: string
  /**
   * 命令行md5，当Type=1时使用
   */
  CmdLineMd5?: string
  /**
   * 文件路径，当Type=3时使用
   */
  FilePathPrefix?: string
  /**
   * 请求目的地址，当Type=2时使用
   */
  AddressPrefix?: string
  /**
   * 是否漏洞节点
   */
  IsWeDetect?: boolean
  /**
   * 是否告警节点
   */
  IsAlarm?: boolean
  /**
   * 文件路径md5，当Type=3时使用
   */
  FilePathMd5?: string
  /**
   * 请求目的地址md5，当Type=2时使用
   */
  AddressMd5?: string
}

/**
 * ModifyMachineAutoClearConfig返回参数结构体
 */
export interface ModifyMachineAutoClearConfigResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyLogStorageConfig返回参数结构体
 */
export interface ModifyLogStorageConfigResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
  TotalCount?: number
  /**
   * 帐号变更历史数据数组。
   */
  HistoryAccounts?: Array<HistoryAccount>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 基线自定规则ID和名字
 */
export interface BaselineCustomRuleIdName {
  /**
   * 自定义规则ID
   */
  RuleId?: number
  /**
   * 自定义规则名字
   */
  RuleName?: string
}

/**
 * DescribeLogStorageConfig返回参数结构体
 */
export interface DescribeLogStorageConfigResponse {
  /**
   * 存储类型，string数组
   */
  Type?: Array<string>
  /**
   * 日志存储时长，3640表示不限
   */
  Period?: number
  /**
   * 本月Period的修改次数
   */
  PeriodModifyCount?: number
  /**
   * 日志存储时长单位，年year/月month/天day
   */
  Granularity?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeVulEmergentMsg返回参数结构体
 */
export interface DescribeVulEmergentMsgResponse {
  /**
   * 漏洞紧急通知数据
   */
  EmergentMsgList?: Array<VulEmergentMsgInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 基线规则检测
 */
export interface BaselineRuleDetect {
  /**
   * 规则Id
   */
  RuleId?: number
  /**
   * 规则名称
   */
  RuleName?: string
  /**
   * 规则描述
   */
  RuleDesc?: string
  /**
   * 关联项数
   */
  ItemCount?: number
  /**
   * 关联主机数
   */
  HostCount?: number
  /**
   * 首次检测时间
   */
  FirstTime?: string
  /**
   * string
   */
  LastTime?: string
  /**
   * 0:未通过 1:忽略 3:通过 5:检测中
   */
  DetectStatus?: number
  /**
   * ItemID集合
   */
  ItemIds?: Array<number | bigint>
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
 * DescribeAssetDatabaseCount请求参数结构体
 */
export interface DescribeAssetDatabaseCountRequest {
  /**
   * 搜索条件：返回名称包含Name的数据库列表
   */
  Name?: string
}

/**
 * ModifyWarningSetting请求参数结构体
 */
export interface ModifyWarningSettingRequest {
  /**
   * 修改告警设置的内容
   */
  WarningObjects: Array<WarningObject>
}

/**
 * ExportVulDetectionReport返回参数结构体
 */
export interface ExportVulDetectionReportResponse {
  /**
   * 导出文件下载链接地址
   */
  DownloadUrl?: string
  /**
   * 导出检测报告的任务Id（不同于入参的漏洞扫描任务id）
   */
  TaskId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
 * CheckFirstScanBaseline请求参数结构体
 */
export type CheckFirstScanBaselineRequest = null

/**
 * DescribeLicenseGeneral返回参数结构体
 */
export interface DescribeLicenseGeneralResponse {
  /**
   * 总授权数 (包含隔离,过期等不可用状态)
   */
  LicenseCnt?: number
  /**
   * 可用授权数
   */
  AvailableLicenseCnt?: number
  /**
   * 可用专业版授权数(包含后付费).
   */
  AvailableProVersionLicenseCnt?: number
  /**
   * 可用旗舰版授权数
   */
  AvailableFlagshipVersionLicenseCnt?: number
  /**
   * 即将到期授权数 (15天内到期的)
   */
  NearExpiryLicenseCnt?: number
  /**
   * 已到期授权数(不包含已删除的记录)
   */
  ExpireLicenseCnt?: number
  /**
   * 自动升级开关状态,默认 false,  true 开启, false 关闭
   */
  AutoOpenStatus?: boolean
  /**
   * PROVERSION_POSTPAY 专业版-后付费, PROVERSION_PREPAY 专业版-预付费, FLAGSHIP_PREPAY 旗舰版-预付费
   */
  ProtectType?: string
  /**
   * 历史是否开通过自动升级开关
   */
  IsOpenStatusHistory?: boolean
  /**
   * 已使用授权数
   */
  UsedLicenseCnt?: number
  /**
   * 未到期授权数
   */
  NotExpiredLicenseCnt?: number
  /**
   * 旗舰版总授权数(有效订单)
   */
  FlagshipVersionLicenseCnt?: number
  /**
   * 专业版总授权数(有效订单)
   */
  ProVersionLicenseCnt?: number
  /**
   * 普惠版总授权数(有效订单的授权数)
   */
  CwpVersionLicenseCnt?: number
  /**
   * 可用惠普版授权数
   */
  AvailableLHLicenseCnt?: number
  /**
   * 自动加购开关, true 开启, false 关闭
   */
  AutoRepurchaseSwitch?: boolean
  /**
   * 自动加购订单是否自动续费 ,true 开启, false 关闭
   */
  AutoRepurchaseRenewSwitch?: boolean
  /**
   * 已销毁订单数
   */
  DestroyOrderNum?: number
  /**
   * 自动加购是否自动续费开关,true 开启,false 关闭
   */
  RepurchaseRenewSwitch?: boolean
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ExportAssetPortInfoList返回参数结构体
 */
export interface ExportAssetPortInfoListResponse {
  /**
   * 异步下载任务ID，需要配合ExportTasks接口使用
   */
  TaskId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeFastAnalysis返回参数结构体
 */
export interface DescribeFastAnalysisResponse {
  /**
   * 分析统计信息
   */
  FieldValueRatioInfos?: Array<FieldValueRatioInfo>
  /**
   * 总数
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 大屏主机列表数据
 */
export interface ScreenMachine {
  /**
   * 主机名称。
   */
  MachineName?: string
  /**
   * 主机系统。
   */
  MachineOs?: string
  /**
   * 主机安全Uuid，若客户端长时间不在线将返回空字符。
   */
  Uuid?: string
  /**
   * 大屏主机状态 0：未安装agent，1：离线状态，2:离线-风险，3：离线-严重
4：安装设备-正常，5：安装设备-正常 且是专业版或旗舰版，6：安装设备-风险（网络攻击事件>0） ，
 7：安装设备-风险（网络攻击事件>0 且是专业版或旗舰版，8：安装设备-严重（入侵检测事件>0），
9：安装设备-严重（入侵检测事件>0）且是专业版或旗舰版
   */
  MachineStatus?: number
  /**
   * CVM或BM机器唯一Uuid。
   */
  Quuid?: string
  /**
   * 漏洞数。
   */
  VulNum?: number
  /**
   * 主机IP。
   */
  MachineIp?: string
  /**
   * 主机外网IP。
   */
  MachineWanIp?: string
  /**
   * 基线风险数。
   */
  BaselineNum?: number
  /**
   * 网络风险数。
   */
  CyberAttackNum?: number
  /**
   * 风险状态。
<li>SAFE：安全</li>
<li>RISK：风险</li>
<li>UNKNOWN：未知</li>
   */
  SecurityStatus?: string
  /**
   * 入侵事件数
   */
  InvasionNum?: number
  /**
   * 机器所属专区类型 CVM 云服务器, BM 黑石, ECM 边缘计算, LH 轻量应用服务器 ,Other 混合云专区
   */
  MachineType?: string
  /**
   * cpu 负载状态
   */
  CpuLoad?: string
  /**
   * cpu 核数
   */
  CpuSize?: number
  /**
   * 硬盘使用率 %
   */
  DiskLoad?: string
  /**
   * 硬盘容量GB
   */
  DiskSize?: number
  /**
   * 内存负载率%
   */
  MemLoad?: string
  /**
   * 内存容量 GB
   */
  MemSize?: number
  /**
   * 内核版本
   */
  CoreVersion?: string
  /**
   * 附加信息
   */
  MachineExtraInfo?: MachineExtraInfo
}

/**
 * DescribeAESKey请求参数结构体
 */
export type DescribeAESKeyRequest = null

/**
 * ModifyWebHookRule返回参数结构体
 */
export interface ModifyWebHookRuleResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeAssetLoadInfo请求参数结构体
 */
export type DescribeAssetLoadInfoRequest = null

/**
 * ExportBaselineWeakPasswordList返回参数结构体
 */
export interface ExportBaselineWeakPasswordListResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * RetryCreateSnapshot返回参数结构体
 */
export interface RetryCreateSnapshotResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateBuyBindTask返回参数结构体
 */
export interface CreateBuyBindTaskResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
   */
  DownloadUrl?: string
  /**
   * 任务ID,需要到接口“异步导出任务”ExportTasks获取DownloadUrl下载地址
   */
  TaskId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
  Rules?: Array<BruteAttackRuleList>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyBanMode返回参数结构体
 */
export interface ModifyBanModeResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeVulDefencePluginExceptionCount返回参数结构体
 */
export interface DescribeVulDefencePluginExceptionCountResponse {
  /**
   * 当前异常插件数
   */
  Count?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteLicenseRecord返回参数结构体
 */
export interface DeleteLicenseRecordResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 资源管理进程基本信息
 */
export interface AssetProcessBaseInfo {
  /**
   * 主机内网IP
   */
  MachineIp?: string
  /**
   * 主机外网IP
   */
  MachineWanIp?: string
  /**
   * 主机Quuid
   */
  Quuid?: string
  /**
   * 主机Uuid
   */
  Uuid?: string
  /**
   * 操作系统信息
   */
  OsInfo?: string
  /**
   * 主机业务组ID
   */
  ProjectId?: number
  /**
   * 主机标签
   */
  Tag?: Array<MachineTag>
  /**
   * 进程名称
   */
  Name?: string
  /**
   * 进程说明
   */
  Desc?: string
  /**
   * 进程路径
   */
  Path?: string
  /**
   * 进程ID
   */
  Pid?: string
  /**
   * 运行用户
   */
  User?: string
  /**
   * 启动时间
   */
  StartTime?: string
  /**
   * 启动参数
   */
  Param?: string
  /**
   * 进程TTY
   */
  Tty?: string
  /**
   * 进程版本
   */
  Version?: string
  /**
   * 进程用户组
   */
  GroupName?: string
  /**
   * 进程MD5
   */
  Md5?: string
  /**
   * 父进程ID
   */
  Ppid?: string
  /**
   * 父进程名称
   */
  ParentProcessName?: string
  /**
   * 进程状态
   */
  Status?: string
  /**
   * 数字签名:0无，1有， 999 空，仅Windows
   */
  HasSign?: number
  /**
   * 是否通过安装包安装：:0否，1是， 999 空，仅linux
   */
  InstallByPackage?: number
  /**
   * 软件包名
   */
  PackageName?: string
  /**
   * 主机名称
   */
  MachineName?: string
  /**
   * 数据更新时间
   */
  UpdateTime?: string
  /**
   * 首次采集时间
   */
  FirstTime?: string
  /**
   * 是否新增[0:否|1:是]
   */
  IsNew?: number
  /**
   * 
 附加信息

   */
  MachineExtraInfo?: MachineExtraInfo
}

/**
 * DescribeVulDefenceOverview请求参数结构体
 */
export type DescribeVulDefenceOverviewRequest = null

/**
 * DescribeCanNotSeparateMachine请求参数结构体
 */
export interface DescribeCanNotSeparateMachineRequest {
  /**
   * 需要修改的事件id 数组，支持批量
   */
  Ids?: Array<number | bigint>
  /**
   * 是否更新全部，即是否对所有的事件进行操作，当ids 不为空时，此参数无效
   */
  UpdateAll?: boolean
  /**
   * 排除的事件id,当操作全部事件时，需要排除这次id
   */
  ExcludeId?: Array<number | bigint>
  /**
   * <li>IpOrAlias - String - 是否必填：否 - 主机ip或别名筛选</li>
<li>FilePath - String - 是否必填：否 - 路径筛选</li>
<li>VirusName - String - 是否必填：否 - 描述筛选</li>
<li>CreateBeginTime - String - 是否必填：否 - 创建时间筛选-开始时间</li>
<li>CreateEndTime - String - 是否必填：否 - 创建时间筛选-结束时间</li>
<li>Status - String - 是否必填：否 - 状态筛选 4待处理,5信任,6已隔离,10隔离中,11恢复隔离中</li>
   */
  Filters?: Array<Filters>
}

/**
 * DescribeRiskDnsEventList返回参数结构体
 */
export interface DescribeRiskDnsEventListResponse {
  /**
   * 恶意请求事件列表
   */
  List?: Array<RiskDnsEvent>
  /**
   * 总数
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
  Ids?: Array<number | bigint>
  /**
   * 是否删除全部
   */
  All?: boolean
}

/**
 * DescribeAssetCoreModuleList返回参数结构体
 */
export interface DescribeAssetCoreModuleListResponse {
  /**
   * 列表
   */
  Modules?: Array<AssetCoreModuleBaseInfo>
  /**
   * 总数量
   */
  Total?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeRansomDefenseState返回参数结构体
 */
export interface DescribeRansomDefenseStateResponse {
  /**
   * 已开启防御策略数量
   */
  StrategyCount?: number
  /**
   * 已开启防御机器数
   */
  MachineCount?: number
  /**
   * 快照总容量
   */
  SnapshotSize?: number
  /**
   * 恢复备份任务数量
   */
  RollBackTaskCount?: number
  /**
   * 进行中的创建快照任务数
   */
  ProgressingSnapshotTaskCount?: number
  /**
   * 进行中的恢复备份任务数
   */
  ProgressingRollBackTaskCount?: number
  /**
   * 机器总数
   */
  MachineTotal?: number
  /**
   * 策略总数
   */
  StrategyTotal?: number
  /**
   * 账户状态：0未欠费，1已欠费
   */
  BalanceStatus?: number
  /**
   * 已备份主机数
   */
  BackupMachineCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeFastAnalysis请求参数结构体
 */
export interface DescribeFastAnalysisRequest {
  /**
   * 起始时间，单位ms
   */
  From: number
  /**
   * 结束时间，单位ms
   */
  To: number
  /**
   * 查询语句，语句长度最大为4096
   */
  Query: string
  /**
   * 日志字段名称
   */
  FieldName: string
}

/**
 * DescribeRiskBatchStatus请求参数结构体
 */
export interface DescribeRiskBatchStatusRequest {
  /**
   * 操作事件类型，文件查杀：MALWARE，异常登录：HOST_LOGIN，密码破解：BRUTE_ATTACK，恶意请求：MALICIOUS_REQUEST，高危命令：BASH_EVENT，本地提权：PRIVILEGE_EVENT，反弹shell：REVERSE_SHELL
   */
  RiskType: string
}

/**
 * 基线检测项TOP信息
 */
export interface BaselineRuleTopInfo {
  /**
   * 基线检测项名
   */
  RuleName?: string
  /**
   * 检测项危害等级
   */
  Level?: number
  /**
   * 事件总数
   */
  EventCount?: number
  /**
   * 检测项id
   */
  RuleId?: number
}

/**
 * DeleteMachineClearHistory返回参数结构体
 */
export interface DeleteMachineClearHistoryResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeLicenseWhiteConfig返回参数结构体
 */
export interface DescribeLicenseWhiteConfigResponse {
  /**
   * 旗舰版 配置信息
   */
  FlagShip?: VersionWhiteConfig
  /**
   * 专业版 配置信息
   */
  Professional?: VersionWhiteConfig
  /**
   * 普惠版 配置信息
   */
  PrattWhitney?: VersionWhiteConfig
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ExportVulDetectionExcel返回参数结构体
 */
export interface ExportVulDetectionExcelResponse {
  /**
   * 该参数已废弃
   */
  DownloadUrl?: string
  /**
   * 任务ID,需要到接口“异步导出任务”ExportTasks获取DownloadUrl下载地址（不同于入参的本次漏洞检测任务id）
   */
  TaskId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyWarningHostConfig返回参数结构体
 */
export interface ModifyWarningHostConfigResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 直方图周期内统计结果详情
 */
export interface LogHistogram {
  /**
   * 统计周期内的日志条数
   */
  Count?: number
  /**
   * 按 period 取整后的 unix timestamp： 单位毫秒
   */
  TimeStamp?: number
}

/**
 * DescribeVulCveIdInfo返回参数结构体
 */
export interface DescribeVulCveIdInfoResponse {
  /**
   * 详情列表
   */
  List?: Array<VulInfoByCveId>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeAlarmVertexId返回参数结构体
 */
export interface DescribeAlarmVertexIdResponse {
  /**
   * 告警点id列表
   */
  AlarmVertexIds?: Array<string>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
  Ids: Array<number | bigint>
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
<li>StrategyId 基线策略ID ,仅ModuleType 为 Baseline 时需要</li>
   */
  Filters?: Array<Filters>
}

/**
 * SyncBaselineDetectSummary返回参数结构体
 */
export interface SyncBaselineDetectSummaryResponse {
  /**
   * 处理进度
   */
  ProgressRate?: number
  /**
   * 未通过策略总数
   */
  NotPassPolicyCount?: number
  /**
   * 主机总数
   */
  HostCount?: number
  /**
   * 开始时间
   */
  StartTime?: string
  /**
   * 结束时间
   */
  EndTime?: string
  /**
   * 1:即将进行首次扫描   0:已经扫描过了
   */
  WillFirstScan?: number
  /**
   * 正在检测的任务ID
   */
  DetectingTaskIds?: Array<number | bigint>
  /**
   * 扫描中剩余时间(分钟)
   */
  LeftMins?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ExportFileTamperRules返回参数结构体
 */
export interface ExportFileTamperRulesResponse {
  /**
   * 导出任务ID 可通过ExportTasks接口下载
   */
  TaskId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeAgentInstallCommand返回参数结构体
 */
export interface DescribeAgentInstallCommandResponse {
  /**
   * linux系统安装命令
   */
  LinuxCommand?: string
  /**
   * windows系统安装命令（windows2008及以上）
   */
  WindowsCommand?: string
  /**
   * windows系统安装命令第一步（windows2003）
   */
  WindowsStepOne?: string
  /**
   * windows系统安装命令第二步（windows2003）
   */
  WindowsStepTwo?: string
  /**
   * windows版agent下载链接
   */
  WindowsDownloadUrl?: string
  /**
   * Arm安装命令
   */
  ARMCommand?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeSafeInfo返回参数结构体
 */
export interface DescribeSafeInfoResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 资产管理环境变量列表
 */
export interface AssetEnvBaseInfo {
  /**
   * 名称
   */
  Name?: string
  /**
   * 类型：
0:用户变量
1:系统变量
   */
  Type?: number
  /**
   * 启动用户
   */
  User?: string
  /**
   * 环境变量值
   */
  Value?: string
  /**
   * 服务器IP
   */
  MachineIp?: string
  /**
   * 服务器名称
   */
  MachineName?: string
  /**
   * 操作系统
   */
  OsInfo?: string
  /**
   * 主机Quuid
   */
  Quuid?: string
  /**
   * 主机uuid
   */
  Uuid?: string
  /**
   * 数据更新时间
   */
  UpdateTime?: string
  /**
   * 首次采集时间
   */
  FirstTime?: string
  /**
   * 是否新增[0:否|1:是]
   */
  IsNew?: number
  /**
   * 服务器外网IP
   */
  MachineWanIp?: string
  /**
   *  附加信息

   */
  MachineExtraInfo?: MachineExtraInfo
}

/**
 * DescribeMachineList返回参数结构体
 */
export interface DescribeMachineListResponse {
  /**
   * 主机列表
   */
  Machines?: Array<Machine>
  /**
   * 主机数量
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
  VirusName?: string
  /**
   * 文件大小
   */
  FileSize?: number
  /**
   * 文件MD5
   */
  MD5?: string
  /**
   * 文件地址
   */
  FilePath?: string
  /**
   * 首次运行时间
   */
  FileCreateTime?: string
  /**
   * 最近一次运行时间
   */
  FileModifierTime?: string
  /**
   * 危害描述
   */
  HarmDescribe?: string
  /**
   * 建议方案
   */
  SuggestScheme?: string
  /**
   * 服务器名称
   */
  ServersName?: string
  /**
   * 服务器IP
   */
  HostIp?: string
  /**
   * 进程名称
   */
  ProcessName?: string
  /**
   * 进程ID
   */
  ProcessID?: string
  /**
   * 标签特性
   */
  Tags?: Array<string>
  /**
   * 影响广度 // 暂时不提供
   */
  Breadth?: string
  /**
   * 查询热度 // 暂时不提供
   */
  Heat?: string
  /**
   * 唯一ID
   */
  Id?: number
  /**
   * 文件名称
   */
  FileName?: string
  /**
   * 首次发现时间
   */
  CreateTime?: string
  /**
   * 最近扫描时间
   */
  LatestScanTime?: string
  /**
   * 参考链接
   */
  Reference?: string
  /**
   * 外网ip
   */
  MachineWanIp?: string
  /**
   * 进程树 json  pid:进程id，exe:文件路径 ，account:进程所属用组和用户 ,cmdline:执行命令，ssh_service: SSH服务ip, ssh_soure:登录源
   */
  PsTree?: string
  /**
   * 主机在线状态 OFFLINE  ONLINE
   */
  MachineStatus?: string
  /**
   * 状态；4-:待处理，5-已信任，6-已隔离
   */
  Status?: number
  /**
   * 风险等级 0提示、1低、2中、3高、4严重
   */
  Level?: number
  /**
   * 木马检测平台用,分割 1云查杀引擎、2TAV、3binaryAi、4异常行为、5威胁情报
   */
  CheckPlatform?: string
  /**
   * 主机uuid
   */
  Uuid?: string
  /**
   * 最近修改时间
   */
  ModifyTime?: string
  /**
   * 最近访问时间
   */
  StrFileAccessTime?: string
  /**
   * 附加信息
   */
  MachineExtraInfo?: MachineExtraInfo
  /**
   * 参考链接
   */
  References?: Array<string>
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
 * 日志详情
 */
export interface LogInfo {
  /**
   * 日志内容的Json序列化字符串
   */
  Content?: string
  /**
   * 日志文件名称
   */
  FileName?: string
  /**
   * 日志来源IP
   */
  Source?: string
  /**
   * 日志时间，单位ms
   */
  TimeStamp?: number
}

/**
 * DescribeHostInfo返回参数结构体
 */
export interface DescribeHostInfoResponse {
  /**
   * 主机信息与标签信息
   */
  HostInfoList?: Array<HostTagInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyWebHookPolicyStatus返回参数结构体
 */
export interface ModifyWebHookPolicyStatusResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ExportRiskDnsPolicyList返回参数结构体
 */
export interface ExportRiskDnsPolicyListResponse {
  /**
   * 异步下载任务ID，需要配合ExportTasks接口使用
   */
  TaskId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
 * DescribeScreenDefenseTrends返回参数结构体
 */
export interface DescribeScreenDefenseTrendsResponse {
  /**
   * 统计详情图标数据
   */
  TrendsChart?: Array<ScreenTrendsChart>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 索引键值信息
 */
export interface KeyValueArrayInfo {
  /**
   * 需要配置键值或者元字段索引的字段
   */
  Key?: string
  /**
   * 字段的索引描述信息
   */
  Value?: ValueInfo
}

/**
 * SyncBaselineDetectSummary请求参数结构体
 */
export interface SyncBaselineDetectSummaryRequest {
  /**
   * 用于计算检测中和进度的任务ID集合，一般不用传入
   */
  TaskIds?: Array<number | bigint>
}

/**
 * DescribeExpertServiceOrderList返回参数结构体
 */
export interface DescribeExpertServiceOrderListResponse {
  /**
   * 总条数
   */
  TotalCount?: number
  /**
   * 订单列表
   */
  List?: Array<ExpertServiceOrderInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteReverseShellRules返回参数结构体
 */
export interface DeleteReverseShellRulesResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 基线导出结果下载
 */
export interface BaselineDownload {
  /**
   * 任务Id
   */
  TaskId?: number
  /**
   * 任务名称
   */
  TaskName?: string
  /**
   * 状态0:未完成 1:完成
   */
  Status?: number
  /**
   * 开始时间
   */
  StartTime?: string
  /**
   * 完成时间
   */
  EndTime?: string
  /**
   * 下载地址
   */
  DownloadUrl?: string
}

/**
 * DescribeAssetPlanTaskList请求参数结构体
 */
export interface DescribeAssetPlanTaskListRequest {
  /**
   * 服务器Uuid
   */
  Uuid?: string
  /**
   * 服务器Quuid
   */
  Quuid?: string
  /**
   * 过滤条件。
<li>IP - String - 是否必填：否 - 主机ip</li>
<li>MachineName - String - 是否必填：否 - 主机名称</li>
<li>InstanceID - string - 是否必填：否 - 实例ID</li>
<li>User- string - 是否必填：否 - 用户</li>
<li>Status- int - 是否必填：否 - 默认启用状态：0未启用， 1启用 </li>
   */
  Filters?: Array<AssetFilters>
  /**
   * 偏移量，默认为0。
   */
  Offset?: number
  /**
   * 需要返回的数量，默认为10，最大值为100
   */
  Limit?: number
  /**
   * 排序方式，asc升序 或 desc降序
   */
  Order?: string
  /**
   * 排序方式：[FirstTime]
   */
  By?: string
}

/**
 * DescribePrivilegeEventInfo返回参数结构体
 */
export interface DescribePrivilegeEventInfoResponse {
  /**
   * 本地提权详情
   */
  PrivilegeEventInfo?: PrivilegeEventInfo
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeMachineLicenseDetail请求参数结构体
 */
export interface DescribeMachineLicenseDetailRequest {
  /**
   * 主机quuid
   */
  Quuids: Array<string>
}

/**
 * DescribeVersionCompareChart请求参数结构体
 */
export type DescribeVersionCompareChartRequest = null

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
 * TestWebHookRule返回参数结构体
 */
export interface TestWebHookRuleResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 平台标签
 */
export interface Tags {
  /**
   * 标签键
   */
  TagKey: string
  /**
   * 标签值
   */
  TagValue: string
}

/**
 * DescribeBaselineItemList返回参数结构体
 */
export interface DescribeBaselineItemListResponse {
  /**
   * 无
   */
  List?: Array<BaselineItem>
  /**
   * 总数
   */
  Total?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeMachinesSimple请求参数结构体
 */
export interface DescribeMachinesSimpleRequest {
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
<li>Version - String  是否必填：否 - 当前防护版本（ PRO_VERSION：专业版 | BASIC_VERSION：基础版 | Flagship : 旗舰版 | ProtectedMachines: 专业版+旗舰版 | UnFlagship : 非旗舰版 | PRO_POST_PAY：专业版按量计费 | PRO_PRE_PAY：专业版包年包月）</li>
<li>TagId - String - 是否必填：否 - 标签ID </li>
   */
  Filters?: Array<Filter>
  /**
   * 机器所属业务ID列表
   */
  ProjectIds?: Array<number | bigint>
}

/**
 * StopBaselineDetect返回参数结构体
 */
export interface StopBaselineDetectResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 基线弱口令
 */
export interface BaselineWeakPassword {
  /**
   * 密码Id
   */
  PasswordId: number
  /**
   * 密码
   */
  WeakPassword: string
  /**
   * 创建时间
   */
  CreateTime?: string
  /**
   * 修改时间
   */
  ModifyTime?: string
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
 * DescribeBashPolicies返回参数结构体
 */
export interface DescribeBashPoliciesResponse {
  /**
   * 列表内容
   */
  List?: Array<BashPolicy>
  /**
   * 总条数
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
  EventCnt?: number
  /**
   * 受影响机器数
   */
  UuidCnt?: number
}

/**
 * 机器快照信息
 */
export interface MachineSnapshotInfo {
  /**
   * cvm id
   */
  Quuid?: string
  /**
   * 主机名称
   */
  HostName?: string
  /**
   * 主机ip
   */
  HostIp?: string
  /**
   * 快照名称
   */
  SnapshotName?: string
  /**
   * 快照创建时间
   */
  CreateTime?: string
  /**
   * 磁盘id
   */
  DiskId?: string
  /**
   * 实例Id
   */
  InstanceId?: string
  /**
   * 地区id
   */
  RegionId?: number
  /**
   * 快照id
   */
  SnapshotId?: string
}

/**
 * DescribeBaselineAnalysisData返回参数结构体
 */
export interface DescribeBaselineAnalysisDataResponse {
  /**
   * 最后检测时间
   */
  LatestScanTime?: string
  /**
   * 是否全部服务器：1-是 0-否
   */
  IsGlobal?: number
  /**
   * 服务器总数
   */
  ScanHostCount?: number
  /**
   * 检测项总数
   */
  ScanRuleCount?: number
  /**
   * 是否是第一次检测  1是 0不是
   */
  IfFirstScan?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteLicenseRecordAll返回参数结构体
 */
export interface DeleteLicenseRecordAllResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
 * DescribeBaselineDefaultStrategyList返回参数结构体
 */
export interface DescribeBaselineDefaultStrategyListResponse {
  /**
   * 默认策略基础信息列表
   */
  StrategyList?: Array<DefaultStrategyInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 阻断白名单展示列表，包含了机器的信息
 */
export interface BanWhiteListDetail {
  /**
   * 白名单ID
   */
  Id?: string
  /**
   * 白名单别名
   */
  Remark?: string
  /**
   * 阻断来源IP
   */
  SrcIp?: string
  /**
   * 修改白名单时间
   */
  ModifyTime?: string
  /**
   * 创建白名单时间
   */
  CreateTime?: string
  /**
   * 白名单是否全局
   */
  IsGlobal?: boolean
  /**
   * 机器的UUID
   */
  Quuid?: string
  /**
   * 主机安全程序的UUID
   */
  Uuid?: string
  /**
   * 机器IP
   */
  MachineIp?: string
  /**
   * 机器名称
   */
  MachineName?: string
}

/**
 * DeleteScanTask返回参数结构体
 */
export interface DeleteScanTaskResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyFileTamperRuleStatus请求参数结构体
 */
export interface ModifyFileTamperRuleStatusRequest {
  /**
   * 0: 启用1: 关闭2：删除
   */
  Status: number
  /**
   * 对应事件id
   */
  Ids: Array<number | bigint>
  /**
   * 是否是系统规则 0=系统规则 1=用户自定义规则，系统规则Status 不支持删除
   */
  RuleCategory: number
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
  /**
   * 策略描述
   */
  Descript?: string
  /**
   * 生效与否  0:不生效 1:生效
   */
  Status?: number
  /**
   * 0:告警  1:白名单  2:拦截
   */
  BashAction?: number
  /**
   * 生效范围（0:一组quuid 1:所有专业版 2:所有专业版+旗舰版 3:所有主机）
   */
  Scope?: number
  /**
   * 生效主机的QUUID集合
   */
  Quuids?: Array<string>
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
 * 防勒索回滚任务
 */
export interface RansomDefenseRollbackTask {
  /**
   * 任务ID
   */
  Id?: number
  /**
   * 主机Uuid
   */
  Uuid?: string
  /**
   * 主机Quuid
   */
  Quuid?: string
  /**
   * 主机名称
   */
  MachineName?: string
  /**
   * 回滚任务状态：0进行中，1成功，2失败
   */
  Status?: number
  /**
   * 硬盘id列表，;分隔
   */
  Disks?: string
  /**
   * 操作时间
   */
  CreateTime?: string
  /**
   * 快照时间
   */
  BackupTime?: string
  /**
   * Status!=0时为完成时间
   */
  ModifyTime?: string
  /**
   * 可用区信息
   */
  RegionInfo?: RegionInfo
  /**
   * 主机示例ID
   */
  InstanceId?: string
}

/**
 * DescribeMachineRegions返回参数结构体
 */
export interface DescribeMachineRegionsResponse {
  /**
   * CVM 云服务器地域列表
   */
  CVM?: Array<RegionInfo>
  /**
   * BM 黑石机器地域列表
   */
  BM?: Array<RegionInfo>
  /**
   * LH 轻量应用服务器地域列表
   */
  LH?: Array<RegionInfo>
  /**
   * ECM 边缘计算服务器地域列表
   */
  ECM?: Array<RegionInfo>
  /**
   * Other 混合云地域列表
   */
  Other?: Array<RegionInfo>
  /**
   * 所有地域列表(包含以上所有地域)
   */
  ALL?: Array<RegionInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ExportVulDefenceList请求参数结构体
 */
export interface ExportVulDefenceListRequest {
  /**
   * 过滤条件：Keywords: 漏洞名称或CVE编号模糊匹配, Level精确匹配
   */
  Filters?: Array<Filter>
  /**
   * 导出字段，默认全导出
   */
  Where?: Array<string>
}

/**
 * 安全管家列表信息
 */
export interface SecurityButlerInfo {
  /**
   * 数据id
   */
  Id?: number
  /**
   * 订单id
   */
  OrderId?: number
  /**
   * cvm id
   */
  Quuid?: string
  /**
   * 服务状态 0-服务中,1-已到期 2已销毁
   */
  Status?: number
  /**
   * 服务开始时间
   */
  StartTime?: string
  /**
   * 服务结束时间
   */
  EndTime?: string
  /**
   * 主机名称
   */
  HostName?: string
  /**
   * 主机Ip
   */
  HostIp?: string
  /**
   * 主机 uuid
   */
  Uuid?: string
  /**
   * 主机风险数
   */
  RiskCount?: number
}

/**
 * 告警接收人的关联策略使用信息
 */
export interface WebHookReceiverUsage {
  /**
   * 接收人id
   */
  ReceiverId?: number
  /**
   * 接收人名称
   */
  ReceiverName?: string
  /**
   * 策略名称
   */
  PolicyName?: string
}

/**
 * DestroyOrder请求参数结构体
 */
export interface DestroyOrderRequest {
  /**
   * 资源ID
   */
  ResourceId: string
  /**
   * 授权类型 0 专业版-按量计费, 1专业版-包年包月 , 2 旗舰版-包年包月
   */
  LicenseType: number
}

/**
 * 资源管理Web应用列表信息
 */
export interface AssetWebAppBaseInfo {
  /**
   * 主机内网IP
   */
  MachineIp?: string
  /**
   * 主机外网IP
   */
  MachineWanIp?: string
  /**
   * 主机Quuid
   */
  Quuid?: string
  /**
   * 主机Uuid
   */
  Uuid?: string
  /**
   * 操作系统信息
   */
  OsInfo?: string
  /**
   * 主机业务组ID
   */
  ProjectId?: number
  /**
   * 主机标签
   */
  Tag?: Array<MachineTag>
  /**
   * 应用名
   */
  Name?: string
  /**
   * 版本
   */
  Version?: string
  /**
   * 根路径
   */
  RootPath?: string
  /**
   * 服务类型
   */
  ServiceType?: string
  /**
   * 站点域名
   */
  Domain?: string
  /**
   * 虚拟路径
   */
  VirtualPath?: string
  /**
   * 插件数
   */
  PluginCount?: number
  /**
   * 应用ID
   */
  Id?: string
  /**
   * 应用描述
   */
  Desc?: string
  /**
   * 主机名称
   */
  MachineName?: string
  /**
   * 数据更新时间
   */
  UpdateTime?: string
  /**
   * 首次采集时间
   */
  FirstTime?: string
  /**
   * 是否新增[0:否|1:是]
   */
  IsNew?: number
  /**
   *  附加信息
   */
  MachineExtraInfo?: MachineExtraInfo
}

/**
 * DescribeRiskDnsInfo请求参数结构体
 */
export interface DescribeRiskDnsInfoRequest {
  /**
   * 恶意请求-事件Id
   */
  Id: number
}

/**
 * DescribeBaselineRuleDetectList返回参数结构体
 */
export interface DescribeBaselineRuleDetectListResponse {
  /**
   * 无
   */
  List?: Array<BaselineRuleDetect>
  /**
   * 总数
   */
  Total?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
 * 资产管理内核模块参数
 */
export interface AssetCoreModuleParam {
  /**
   * 名称
   */
  Name?: string
  /**
   * 数据
   */
  Data?: string
}

/**
 * DescribeMachineLicenseDetail返回参数结构体
 */
export interface DescribeMachineLicenseDetailResponse {
  /**
   * 授权信息
   */
  MachineLicense?: Array<MachineLicenseDetail>
  /**
   * 总数
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeHostInfo请求参数结构体
 */
export interface DescribeHostInfoRequest {
  /**
   * 主机Quuid数组
   */
  QuuidList?: Array<string>
  /**
   * Uuids 查询，Quuid查询时填空
   */
  Uuids?: Array<string>
}

/**
 * DeleteBashEvents请求参数结构体
 */
export interface DeleteBashEventsRequest {
  /**
   * ID数组，最大1000条。
   */
  Ids?: Array<number | bigint>
  /**
   * 是否删除全部
   */
  All?: boolean
}

/**
 * DescribeLicenseWhiteConfig请求参数结构体
 */
export interface DescribeLicenseWhiteConfigRequest {
  /**
   * 规则名称,例如: cwp
   */
  RuleName: string
}

/**
 * 网络攻击top统计数据
 */
export interface TopInfo {
  /**
   * top统计数据，如ip、漏洞名等
   */
  Value?: string
  /**
   * top统计计数
   */
  Count?: number
}

/**
 * 资产管理jar包列表
 */
export interface AssetJarBaseInfo {
  /**
   * 名称
   */
  Name?: string
  /**
   * 类型：1应用程序，2系统类库，3Web服务自带库，8:其他，
   */
  Type?: number
  /**
   * 是否可执行：0未知，1是，2否
   */
  Status?: number
  /**
   * 版本
   */
  Version?: string
  /**
   * 路径
   */
  Path?: string
  /**
   * 服务器IP
   */
  MachineIp?: string
  /**
   * 服务器名称
   */
  MachineName?: string
  /**
   * 操作系统
   */
  OsInfo?: string
  /**
   * Jar包ID
   */
  Id?: string
  /**
   * Jar包Md5
   */
  Md5?: string
  /**
   * 主机Quuid
   */
  Quuid?: string
  /**
   * 主机uuid
   */
  Uuid?: string
  /**
   * 数据更新时间
   */
  UpdateTime?: string
  /**
   * 首次采集时间
   */
  FirstTime?: string
  /**
   * 是否新增[0:否|1:是]
   */
  IsNew?: number
  /**
   * 服务器外网IP
   */
  MachineWanIp?: string
  /**
   *  附加信息

   */
  MachineExtraInfo?: MachineExtraInfo
}

/**
 * DescribeFileTamperEventRuleInfo请求参数结构体
 */
export interface DescribeFileTamperEventRuleInfoRequest {
  /**
   * 事件id
   */
  Id: number
  /**
   * 一页多少个 控制返回的uuids条数
   */
  Limit?: number
  /**
   * 控制返回的uuids条数
   */
  Offset?: number
}

/**
 * 主机安全-漏洞管理-漏洞列表
 */
export interface VulInfoList {
  /**
   * 漏洞包含的事件id串，多个用“,”分割
   */
  Ids?: string
  /**
   * 漏洞名
   */
  Name?: string
  /**
   * 0: 待处理 1:忽略  3:已修复  5:检测中 6:修复中  8:修复失败
   */
  Status?: number
  /**
   * 漏洞id
   */
  VulId?: number
  /**
   * 漏洞披露事件
   */
  PublishTime?: string
  /**
   * 最后检测时间
   */
  LastTime?: string
  /**
   * 影响主机数
   */
  HostCount?: number
  /**
   * 漏洞等级 1:低 2:中 3:高 4:严重
   */
  Level?: number
  /**
   * 废弃字段
   */
  From?: number
  /**
   * 描述
   */
  Descript?: string
  /**
   * 废弃字段
   */
  PublishTimeWisteria?: string
  /**
   * 废弃字段
   */
  NameWisteria?: string
  /**
   * 废弃字段
   */
  DescriptWisteria?: string
  /**
   * 聚合后事件状态串
   */
  StatusStr?: string
  /**
   * cve编号
   */
  CveId?: string
  /**
   * CVSS评分
   */
  CvssScore?: number
  /**
   * 漏洞标签 多个逗号分割

存在EXP:EXP
在野攻击:KNOWN_EXPLOITED
本地利用:LOCAL
必修漏洞:NEED_FIX
远程利用:NETWORK
存在POC:POC
系统重启:RESTART
   */
  Labels?: string
  /**
   * 是否能自动修复且包含能自动修复的主机， 0=否  1=是
   */
  FixSwitch?: number
  /**
   * 最后扫描任务的id
   */
  TaskId?: number
  /**
   * 是否支持防御， 0:不支持 1:支持
   */
  IsSupportDefense?: number
  /**
   * 已防御的攻击次数
   */
  DefenseAttackCount?: number
  /**
   * 首次出现时间
   */
  FirstAppearTime?: string
  /**
   * 漏洞类别 1: web-cms漏洞 2:应用漏洞  4: Linux软件漏洞 5: Windows系统漏洞
   */
  VulCategory?: number
  /**
   * 攻击热度级别
   */
  AttackLevel?: number
  /**
   * 漏洞修复后是否需要重启
   */
  FixNoNeedRestart?: boolean
  /**
   * 检测方式0 - 版本比对, 1 - POC验证
   */
  Method?: number
  /**
   * 漏洞是否支持修复 0不支持，1支持
   */
  VulFixSwitch?: number
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
 * Java内存马插件配置
 */
export interface JavaMemShellPluginSetting {
  /**
   * 容器quuid
   */
  Quuid?: string
  /**
   * 服务器名
   */
  Alias?: string
  /**
   * 服务器ip
   */
  HostIp?: string
  /**
   * javashell插件开关 0: 关闭 1: 开启
   */
  JavaShellStatus?: number
  /**
   * 插件是否存在异常 0: 正常 1: 异常
   */
  Exception?: number
  /**
   * 创建时间
   */
  CreateTime?: string
  /**
   * 修改时间
   */
  ModifyTime?: string
  /**
   * 服务器uuid
   */
  Uuid?: string
  /**
   * 主机额外信息
   */
  MachineExtraInfo?: MachineExtraInfo
}

/**
 * 查询主机相关核心文件监控规则详情
 */
export interface MachineFileTamperRule {
  /**
   * 规则名称
   */
  Name?: string
  /**
   * 规则类型 0 ：系统规则  1：用户规则
   */
  RuleCategory?: number
  /**
   * 规则
   */
  Rule?: Array<FileTamperRule>
  /**
   * 唯一id
   */
  Id?: number
}

/**
 * ModifyLicenseOrder返回参数结构体
 */
export interface ModifyLicenseOrderResponse {
  /**
   * 订单号
   */
  DealNames?: Array<string>
  /**
   * 资源ID
   */
  ResourceIds?: Array<string>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeAttackEventInfo返回参数结构体
 */
export interface DescribeAttackEventInfoResponse {
  /**
   * 网络攻击事件详情
   */
  NetAttackEventInfo?: NetAttackEventInfo
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeMachineSnapshot返回参数结构体
 */
export interface DescribeMachineSnapshotResponse {
  /**
   * 主机快照列表
   */
  List?: Array<MachineSnapshotInfo>
  /**
   * 总个数
   */
  TotalCount?: number
  /**
   * 是否都有24小时内创建的快照
   */
  SnapshotCheck?: boolean
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeVulHostCountScanTime返回参数结构体
 */
export interface DescribeVulHostCountScanTimeResponse {
  /**
   * 总漏洞数
   */
  TotalVulCount?: number
  /**
   * 漏洞影响主机数
   */
  VulHostCount?: number
  /**
   * 扫描时间
   */
  ScanTime?: string
  /**
   * 是否第一次检测
   */
  IfFirstScan?: boolean
  /**
   * 运行中的任务号, 没有任务则为0
   */
  TaskId?: number
  /**
   * 最后一次修复漏洞的时间
   */
  LastFixTime?: string
  /**
   * 是否有支持自动修复的漏洞事件
   */
  hadAutoFixVul?: boolean
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 告警设置列表
 */
export interface WarningInfoObj {
  /**
   * 事件告警类型；1：离线，2：木马，3：异常登录，4：爆破，5：漏洞（已拆分为9-12四种类型）6：高危命令，7：反弹sell，8：本地提权，9：应用漏洞，10：web-cms漏洞，11：应急漏洞，12：安全基线 ,13: 防篡改，14：恶意请求，15: 网络攻击，16：Windows系统漏洞，17：Linux软件漏洞，18：核心文件监控告警，19：客户端卸载告警。20：客户端离线告警
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
   * 时区信息
   */
  TimeZone?: string
  /**
   * 漏洞等级控制位（对应DB的十进制存储）
   */
  ControlBit?: number
  /**
   * 漏洞等级控制位二进制，每一位对应页面漏洞等级的开启关闭：低中高（0:关闭；1：开启），例如：101 → 同时勾选低+高
   */
  ControlBits?: string
  /**
   * 告警主机范围类型，0:全部主机，1:按所属项目选，2:按腾讯云标签选，3:按主机安全标签选，4:自选主机
   */
  HostRange?: number
  /**
   * 配置的告警范围主机个数，前端用此判断展示提示信息
   */
  Count?: number
}

/**
 * 企微机器人规则概要
 */
export interface WebHookRuleSummary {
  /**
   * 规则Id
   */
  RuleId?: number
  /**
   * 规则名称
   */
  RuleName?: string
  /**
   * 机器人地址
   */
  HookAddr?: string
  /**
   * 备注信息
   */
  RuleRemark?: string
  /**
   * 事件类型
   */
  RuleItems?: Array<WebHookEventKv>
  /**
   * 主机范围
   */
  HostLabels?: Array<WebHookHostLabel>
  /**
   * 是否启用[1:禁用|0:启用]
   */
  IsDisabled?: number
  /**
   * 创建时间
   */
  CreateTime?: string
  /**
   * 更新时间
   */
  UpdateTime?: string
  /**
   * 主机数目
   */
  HostCount?: number
}

/**
 * DescribeAssetWebLocationCount请求参数结构体
 */
export interface DescribeAssetWebLocationCountRequest {
  /**
   * 搜索条件：返回名称包含Name的所有Web站点列表
   */
  Name?: string
}

/**
 * DescribeAssetCoreModuleList请求参数结构体
 */
export interface DescribeAssetCoreModuleListRequest {
  /**
   * 服务器Uuid
   */
  Uuid?: string
  /**
   * 服务器Quuid
   */
  Quuid?: string
  /**
   * 过滤条件。
<li>IP - String - 是否必填：否 - 主机ip</li>
<li>MachineName - String - 是否必填：否 - 主机名称</li>
<li>InstanceID - string - 是否必填：否 - 实例ID</li>
<li>Name- string - 是否必填：否 - 包名</li>
<li>User- string - 是否必填：否 - 用户</li>
   */
  Filters?: Array<AssetFilters>
  /**
   * 偏移量，默认为0。
   */
  Offset?: number
  /**
   * 需要返回的数量，默认为10，最大值为100
   */
  Limit?: number
  /**
   * 排序方式，asc升序 或 desc降序
   */
  Order?: string
  /**
   * 排序依据[Size|FirstTime|ProcessCount|ModuleCount]
   */
  By?: string
}

/**
 * 根据cve_id查询漏洞详情
 */
export interface VulInfoByCveId {
  /**
   * 漏洞id
   */
  VulId?: number
  /**
   * 修复支持情况：0-Windows/Linux均不支持修复 ;1-Windows/Linux 均支持修复 ;2-仅Linux支持修复;3-仅Windows支持修复
   */
  FixSwitch?: number
}

/**
 * DeleteLogExport返回参数结构体
 */
export interface DeleteLogExportResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ExportVulEffectHostList返回参数结构体
 */
export interface ExportVulEffectHostListResponse {
  /**
   * 已废弃
   */
  DownloadUrl?: string
  /**
   * 导出任务Id , 可通过ExportTasks 接口下载
   */
  TaskId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteBanWhiteList返回参数结构体
 */
export interface DeleteBanWhiteListResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeBaselineStrategyDetail返回参数结构体
 */
export interface DescribeBaselineStrategyDetailResponse {
  /**
   * 策略扫描通过率
   */
  PassRate?: number
  /**
   * 策略名
   */
  StrategyName?: string
  /**
   * 策略扫描周期(天)
   */
  ScanCycle?: string
  /**
   * 定期检测时间, 该时间下发扫描
   */
  ScanAt?: string
  /**
   * 扫描范围是否全部服务器, 1:是  0:否, 为1则为全部专业版主机
   */
  IsGlobal?: number
  /**
   * 云服务器类型：
cvm：腾讯云服务器
bm：裸金属
ecm：边缘计算主机
lh: 轻量应用服务器
ohter: 混合云机器
   */
  MachineType?: string
  /**
   * 主机地域
   */
  Region?: string
  /**
   * 用户该策略下的所有主机id
   */
  Quuids?: Array<string>
  /**
   * 用户该策略下所有的基线id
   */
  CategoryIds?: Array<string>
  /**
   * 1 表示扫描过, 0没扫描过
   */
  IfScanned?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
   * 过滤条件 <li>StrategyId- Uint64 - 基线策略id</li> <li>Status - Uint64 - 处理状态 1-已通过 0-未通过</li> <li>Level - Uint64 - 威胁等级 1-低危 2-中危 3-高危 4-严重</li> <li>BaselineName  - String - 基线名称</li> <li>Quuid- String - 主机quuid</li> <li>Uuid- String - 主机uuid</li>
   */
  Filters?: Array<Filters>
}

/**
 * DescribePublicProxyInstallCommand请求参数结构体
 */
export interface DescribePublicProxyInstallCommandRequest {
  /**
   * nginx主机IP列表，逗号分隔
   */
  Ip?: string
}

/**
 * ExportJavaMemShells返回参数结构体
 */
export interface ExportJavaMemShellsResponse {
  /**
   * 任务ID,需要到接口 <a href="https://cloud.tencent.com/document/product/296/52508" target="_blank" >异步导出任务</a>获取DownloadUrl下载地址
   */
  TaskId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeProductStatus请求参数结构体
 */
export type DescribeProductStatusRequest = null

/**
 * DescribeRiskProcessEvents返回参数结构体
 */
export interface DescribeRiskProcessEventsResponse {
  /**
   * 总数量
   */
  TotalCount?: number
  /**
   * 异常进程列表
   */
  List?: Array<RiskProcessEvent>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeScreenHostInvasion返回参数结构体
 */
export interface DescribeScreenHostInvasionResponse {
  /**
   * 网络攻击事件列表
   */
  DefendAttackLog?: Array<ScreenDefendAttackLog>
  /**
   * 入侵检测事件列表
   */
  InvasionEvents?: Array<ScreenInvasion>
  /**
   * 漏洞事件列表
   */
  Vul?: Array<ScreenVulInfo>
  /**
   * 基线事件列表
   */
  Baseline?: Array<ScreenBaselineInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ExportBaselineFixList返回参数结构体
 */
export interface ExportBaselineFixListResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ExportBashEventsNew返回参数结构体
 */
export interface ExportBashEventsNewResponse {
  /**
   * 该参数已废弃
   */
  DownloadUrl?: string
  /**
   * 任务ID,需要到接口“异步导出任务”ExportTasks获取DownloadUrl下载地址
   */
  TaskId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeMachineDefenseCnt请求参数结构体
 */
export interface DescribeMachineDefenseCntRequest {
  /**
   * 过滤条件。
<li>Uuids- String - 是否必填：否 - 主机uuid</li>
   */
  Filters?: Array<Filter>
}

/**
 * ModifyBaselineWeakPassword返回参数结构体
 */
export interface ModifyBaselineWeakPasswordResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
 * DescribeRiskDnsPolicyList请求参数结构体
 */
export interface DescribeRiskDnsPolicyListRequest {
  /**
   * <li>PolicyType - int - 是否必填：否 - 策略类型</li>
<li>PolicyName - string - 是否必填：否 - 策略名称</li>
<li>Domain - string - 是否必填：否 - 域名(先对域名做urlencode,再base64)</li>
<li>PolicyAction- int - 是否必填：否 - 策略动作</li>
<li>IsEnabled - int - 是否必填：否 - 是否生效</li>
   */
  Filters?: Array<Filter>
  /**
   * 限制条数,默认10,最大100
   */
  Limit?: number
  /**
   * 偏移量,默认0
   */
  Offset?: number
  /**
   * 排序方式: [ASC:升序|DESC:降序]
   */
  Order?: string
  /**
   * 可选排序列: [HostScope|UpdateTime]
   */
  By?: string
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
 * ScanTaskAgain请求参数结构体
 */
export interface ScanTaskAgainRequest {
  /**
   * 模块类型 当前提供 Malware 木马 , Vul 漏洞 , Baseline 基线
   */
  ModuleType: string
  /**
   * 任务ID
   */
  TaskId: number
  /**
   * 自选服务器时生效，主机quuid的string数组
   */
  QuuidList?: Array<string>
  /**
   * 扫描超时时长
   */
  TimeoutPeriod?: number
}

/**
 * ExportAssetWebAppList请求参数结构体
 */
export interface ExportAssetWebAppListRequest {
  /**
   * 查询指定Quuid主机的信息
   */
  Quuid?: string
  /**
   * 过滤条件。
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
   */
  Filters?: Array<Filter>
  /**
   * 排序方式，asc升序 或 desc降序
   */
  Order?: string
  /**
   * 可选排序：[FirstTime|PluginCount]
   */
  By?: string
}

/**
 * DescribeRecommendedProtectCpu返回参数结构体
 */
export interface DescribeRecommendedProtectCpuResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeLicenseBindList请求参数结构体
 */
export interface DescribeLicenseBindListRequest {
  /**
   * 授权ID
   */
  LicenseId: number
  /**
   * 授权类型
   */
  LicenseType: number
  /**
   * 资源ID
   */
  ResourceId: string
  /**
   * <li>InstanceID、IP、

MachineName 模糊查询</li>
   */
  Filters?: Array<Filters>
  /**
   * 限制条数,默认10.
   */
  Limit?: number
  /**
   * 偏移量,默认0.
   */
  Offset?: number
}

/**
 * DeleteLicenseRecordAll请求参数结构体
 */
export type DeleteLicenseRecordAllRequest = null

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
   * 该参数已废弃
   */
  DownloadUrl?: string
  /**
   * 任务ID,需要到接口“异步导出任务”ExportTasks获取DownloadUrl下载地址
   */
  TaskId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * java内存马事件详细信息
 */
export interface JavaMemShellDetail {
  /**
   * 容器名
   */
  InstanceName?: string
  /**
   * 实例状态：RUNNING,STOPPED,SHUTDOWN...
   */
  InstanceState?: string
  /**
   * 内网IP
   */
  PrivateIp?: string
  /**
   * 公共ip
   */
  PublicIp?: string
  /**
   * 内存马类型  0:Filter型 1:Listener型 2:Servlet型 3:Interceptors型 4:Agent型 5:其他
   */
  Type?: number
  /**
   * 说明
   */
  Description?: string
  /**
   * 首次发现时间
   */
  CreateTime?: string
  /**
   * 最近检测时间
   */
  RecentFoundTime?: string
  /**
   * 处理状态  0 -- 待处理 1 -- 已加白 2 -- 已删除 3 - 已忽略  4 - 已手动处理
   */
  Status?: number
  /**
   * java加载器类名
   */
  ClassLoaderName?: string
  /**
   * 父类名
   */
  SuperClassName?: string
  /**
   * 类文件MD5
   */
  Md5?: string
  /**
   * 继承的接口
   */
  Interfaces?: string
  /**
   * 注释
   */
  Annotations?: string
  /**
   * 进程pid
   */
  Pid?: number
  /**
   * java进程路径
   */
  Exe?: string
  /**
   * java进程命令行参数
   */
  Args?: string
  /**
   * 类名
   */
  ClassName?: string
  /**
   * java内存马二进制代码(base64)
   */
  ClassContent?: string
  /**
   * java内存马反编译代码
   */
  ClassContentPretty?: string
  /**
   * 事件描述
   */
  EventDescription?: string
  /**
   * 安全建议
   */
  SecurityAdvice?: string
  /**
   *  主机额外信息
   */
  MachineExtraInfo?: MachineExtraInfo
  /**
   * agent状态：OFFLINE,ONLINE
   */
  MachineState?: string
}

/**
 * 告警更新或插入的参数
 */
export interface WarningObject {
  /**
   * 事件告警类型；1：离线，2：木马，3：异常登录，4：爆破，5：漏洞（已拆分为9-12四种类型）6：高位命令，7：反弹sell，8：本地提权，9：系统组件漏洞，10：web应用漏洞，11：应急漏洞，12：安全基线，14：恶意请求，15: 网络攻击，16：Windows系统漏洞，17：Linux软件漏洞
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
  /**
   * 告警主机范围类型，0:全部主机，1:按所属项目选，2:按腾讯云标签选，3:按主机安全标签选，4:自选主机
   */
  HostRange?: number
}

/**
 * DescribeBaselineHostDetectList返回参数结构体
 */
export interface DescribeBaselineHostDetectListResponse {
  /**
   * 无
   */
  List?: Array<BaselineHostDetect>
  /**
   * 总数
   */
  Total?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 资产管理Web站点虚拟目录
 */
export interface AssetWebLocationPath {
  /**
   * 虚拟路径
   */
  VirtualPath?: string
  /**
   * 物理路径
   */
  RealPath?: string
  /**
   * 文件所有者
   */
  User?: string
  /**
   * 文件所属组
   */
  Group?: string
  /**
   * 文件权限
   */
  Permission?: string
}

/**
 * DescribeAssetProcessInfoList返回参数结构体
 */
export interface DescribeAssetProcessInfoListResponse {
  /**
   * 记录总数
   */
  Total?: number
  /**
   * 列表
   */
  Process?: Array<AssetProcessBaseInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ChangeStrategyEnableStatus请求参数结构体
 */
export interface ChangeStrategyEnableStatusRequest {
  /**
   * 基线策略id
   */
  StrategyId: number
  /**
   * 开关状态
   */
  Status: number
}

/**
 * ModifyLicenseBinds请求参数结构体
 */
export interface ModifyLicenseBindsRequest {
  /**
   * 资源ID
   */
  ResourceId: string
  /**
   * 授权类型
   */
  LicenseType: number
  /**
   * 是否全部机器(当全部机器数大于当前订单可用授权数时,多余机器会被跳过)
   */
  IsAll?: boolean
  /**
   * 需要绑定的机器quuid列表, 当IsAll = false 时必填,反之忽略该参数. 最大长度=2000
   */
  QuuidList?: Array<string>
}

/**
 * 进程数据统计数据。
 */
export interface ProcessStatistics {
  /**
   * 进程名。
   */
  ProcessName?: string
  /**
   * 主机数量。
   */
  MachineNum?: number
}

/**
 * 主机与主机标签信息
 */
export interface HostTagInfo {
  /**
   * 主机Quuid
   */
  Quuid?: string
  /**
   * 主机标签名数组
   */
  TagList?: Array<string>
  /**
   * 主机内网Ip
   */
  HostIp?: string
  /**
   * 主机名
   */
  AliasName?: string
  /**
   * 主机公网ip
   */
  MachineWanIp?: string
  /**
   * 主机uuid
   */
  Uuid?: string
  /**
   * 内核版本号
   */
  KernelVersion?: string
  /**
   * 主机在线状态 ONLINE，OFFLINE
   */
  MachineStatus?: string
  /**
   * 防护版本 BASIC_VERSION 基础版, PRO_VERSION 专业版 Flagship 旗舰版
   */
  ProtectType?: string
  /**
   * 漏洞数
   */
  VulNum?: number
  /**
   * 云标签信息
   */
  CloudTags?: Array<Tags>
  /**
   * 主机instance ID
   */
  InstanceID?: string
}

/**
 * DescribeScanSchedule返回参数结构体
 */
export interface DescribeScanScheduleResponse {
  /**
   * 检测进度
   */
  Schedule?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 基线详情
 */
export interface BaselineDetail {
  /**
   * 基线描述
   */
  Description?: string
  /**
   * 危害等级
   */
  Level?: number
  /**
   * package名
   */
  PackageName?: string
  /**
   * 父级id
   */
  ParentId?: number
  /**
   * 基线名
   */
  Name?: string
}

/**
 * DescribeVulDefenceOverview返回参数结构体
 */
export interface DescribeVulDefenceOverviewResponse {
  /**
   * 漏洞防御概览信息
   */
  Overview?: VulDefenceOverview
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeAssetWebAppList请求参数结构体
 */
export interface DescribeAssetWebAppListRequest {
  /**
   * 查询指定Quuid主机的信息
   */
  Quuid?: string
  /**
   * 过滤条件。
<li>IP - String - 是否必填：否 - 主机ip</li>
<li>MachineName - String - 是否必填：否 - 主机名称</li>
<li>InstanceID - string - 是否必填：否 - 实例ID</li>
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
   * 偏移量，默认为0。
   */
  Offset?: number
  /**
   * 需要返回的数量，默认为10，最大值为100
   */
  Limit?: number
  /**
   * 排序方式，asc升序 或 desc降序
   */
  Order?: string
  /**
   * 可选排序：[FirstTime|PluginCount]
   */
  By?: string
}

/**
 * 专家服务订单信息
 */
export interface ExpertServiceOrderInfo {
  /**
   * 订单id
   */
  OrderId?: number
  /**
   * 订单类型 1应急 2 旗舰重保 3 安全管家
   */
  InquireType?: number
  /**
   * 服务数量
   */
  InquireNum?: number
  /**
   * 服务开始时间
   */
  BeginTime?: string
  /**
   * 服务结束时间
   */
  EndTime?: string
  /**
   * 服务时长几个月
   */
  ServiceTime?: number
  /**
   * 订单状态 0 未启动 1 服务中 2已过期 3完成，4退费销毁
   */
  Status?: number
}

/**
 * DescribeScreenEventsCnt返回参数结构体
 */
export interface DescribeScreenEventsCntResponse {
  /**
   * 事件统计详情
   */
  Info?: Array<ScreenEventsCnt>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 企微机器人规则详情
 */
export interface WebHookRuleDetail {
  /**
   * 规则名称
   */
  RuleName: string
  /**
   * 机器人地址
   */
  HookAddr: string
  /**
   * 事件类型
   */
  RuleItems: Array<WebHookEventKv>
  /**
   * 规则Id
   */
  RuleId?: number
  /**
   * 备注信息
   */
  RuleRemark?: string
  /**
   * 主机范围
   */
  HostLabels?: Array<WebHookHostLabel>
  /**
   * 主机Id列表
   */
  HostIds?: Array<string>
  /**
   * 是否启用[1:禁用|0:启用]
   */
  IsDisabled?: number
}

/**
 * DescribePrivilegeEventInfo请求参数结构体
 */
export interface DescribePrivilegeEventInfoRequest {
  /**
   * 事件id
   */
  Id: number
}

/**
 * ModifyBashPolicy请求参数结构体
 */
export interface ModifyBashPolicyRequest {
  /**
   * 具体的策略配置
   */
  Policy: BashPolicy
}

/**
 * DescribeScreenEmergentMsg返回参数结构体
 */
export interface DescribeScreenEmergentMsgResponse {
  /**
   * 通知内容
   */
  MessageInfo?: Array<ScreenEmergentMsg>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteAllJavaMemShells请求参数结构体
 */
export interface DeleteAllJavaMemShellsRequest {
  /**
   * 服务器quuid
   */
  Quuid?: string
}

/**
 * 单个进程漏洞防御插件状态
 */
export interface VulDefencePluginDetail {
  /**
   * 注入进程Pid
   */
  Pid?: number
  /**
   * 注入进程主类名
   */
  MainClass?: string
  /**
   * 插件状态：0: 注入中, 1: 注入成功, 2: 插件超时, 3: 插件退出, 4: 注入失败 5: 软删除
   */
  Status?: number
  /**
   * 错误日志
   */
  ErrorLog?: string
  /**
   * 注入日志
   */
  InjectLog?: string
}

/**
 * DescribeBaselineDetectOverview请求参数结构体
 */
export interface DescribeBaselineDetectOverviewRequest {
  /**
   * 策略Id
   */
  PolicyId?: number
}

/**
 * DescribeLicense请求参数结构体
 */
export type DescribeLicenseRequest = null

/**
 * DescribeLicenseGeneral请求参数结构体
 */
export type DescribeLicenseGeneralRequest = null

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
 * 订单变配参数对象
 */
export interface OrderModifyObject {
  /**
   * 资源ID
   */
  ResourceId?: string
  /**
   * 新产品标识,这里支持PRO_VERSION 专业版,FLAGSHIP 旗舰版
   */
  NewSubProductCode?: string
  /**
   * 扩容/缩容数,变配子产品忽略该参数
   */
  InquireNum?: number
}

/**
 * 基线检测项分类树状结构
 */
export interface BaselineItemsCategory {
  /**
   * 基线检测项父分类id
   */
  ParentCategoryId?: number
  /**
   * 基线检测项父分类名称
   */
  ParentCategoryName?: string
  /**
   * 基线检测项子分类数目
   */
  CategoryCount?: number
  /**
   * 基线检测项子分类列表
   */
  CategoryLists?: Array<BaselineCategory>
}

/**
 * 账号统计数据。
 */
export interface AccountStatistics {
  /**
   * 用户名。
   */
  Username?: string
  /**
   * 主机数量。
   */
  MachineNum?: number
}

/**
 * 资产管理账号key详情
 */
export interface AssetUserKeyInfo {
  /**
   * 公钥值
   */
  Value?: string
  /**
   * 公钥备注
   */
  Comment?: string
  /**
   * 加密方式
   */
  EncryptType?: string
}

/**
 * DescribeMachines返回参数结构体
 */
export interface DescribeMachinesResponse {
  /**
   * 主机列表
   */
  Machines?: Array<Machine>
  /**
   * 主机数量
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeMalwareWhiteList返回参数结构体
 */
export interface DescribeMalwareWhiteListResponse {
  /**
   * 总记录数
   */
  TotalCount?: number
  /**
   * 白名单列表
   */
  WhiteList?: Array<MalwareWhiteListInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 防勒索机器硬盘配置
 */
export interface RansomDefenseStrategyMachineInfo {
  /**
   * 主机uuid
   */
  Uuid: string
  /**
   * 指定硬盘列表，为空时表示所有硬盘：disk_id1|disk_name1;disk_id2|disk_name2
   */
  DiskInfo?: string
}

/**
 * DescribeAssetWebLocationList请求参数结构体
 */
export interface DescribeAssetWebLocationListRequest {
  /**
   * 查询指定Quuid主机的信息
   */
  Quuid?: string
  /**
   * 过滤条件。
<li>IP - String - 是否必填：否 - 主机ip</li>
<li>MachineName - String - 是否必填：否 - 主机名称</li>
<li>InstanceID - string - 是否必填：否 - 实例ID</li>
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
   * 偏移量，默认为0。
   */
  Offset?: number
  /**
   * 需要返回的数量，默认为10，最大值为100
   */
  Limit?: number
  /**
   * 排序方式，asc升序 或 desc降序
   */
  Order?: string
  /**
   * 可选排序：[FirstTime|PathCount]
   */
  By?: string
}

/**
 * DescribeAssetHostTotalCount请求参数结构体
 */
export interface DescribeAssetHostTotalCountRequest {
  /**
   * 主机Uuid
   */
  Uuid: string
  /**
   * 主机Quuid
   */
  Quuid: string
}

/**
 * CreateMaliciousRequestWhiteList返回参数结构体
 */
export interface CreateMaliciousRequestWhiteListResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
  Id?: number
  /**
   * 主机安全客户端唯一标识UUID。
   */
  Uuid?: string
  /**
   * 国家 ID。
   */
  CountryId?: number
  /**
   * 省份 ID。
   */
  ProvinceId?: number
  /**
   * 城市 ID。
   */
  CityId?: number
}

/**
 * DescribeVulLevelCount请求参数结构体
 */
export interface DescribeVulLevelCountRequest {
  /**
   * 1:web-cms 漏洞，2.应用漏洞 3:安全基线 4: Linux软件漏洞 5: windows系统漏洞 6:应急漏洞，不填或者填0时返回 1，2，4，5 的总统计数据
   */
  VulCategory?: number
  /**
   * 是否仅统计重点关注漏洞 1=仅统计重点关注漏洞, 0=统计全部漏洞
   */
  IsFollowVul?: number
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
  VulIds?: Array<number | bigint>
  /**
   * 0版本比对，2版本比对+poc
   */
  ScanMethod?: number
}

/**
 * DeleteBaselineWeakPassword返回参数结构体
 */
export interface DeleteBaselineWeakPasswordResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
   * 主机安全客户端UUID、填写"all"表示所有主机。
   */
  Uuid: string
}

/**
 * DescribeBaselineList返回参数结构体
 */
export interface DescribeBaselineListResponse {
  /**
   * 基线信息列表
   */
  BaselineList?: Array<BaselineInfo>
  /**
   * 分页查询记录总数
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeBaselineHostRiskTop返回参数结构体
 */
export interface DescribeBaselineHostRiskTopResponse {
  /**
   * 风险主机top5
   */
  HostRiskTop5?: Array<HostRiskLevelCount>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeBashEventsInfo返回参数结构体
 */
export interface DescribeBashEventsInfoResponse {
  /**
   * 事件详情
   */
  BashEventsInfo?: BashEventsInfo
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeJavaMemShellPluginInfo返回参数结构体
 */
export interface DescribeJavaMemShellPluginInfoResponse {
  /**
   * java内存马插件列表
   */
  List?: Array<JavaMemShellPluginInfo>
  /**
   * 总数
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 漏洞影响主机列表
 */
export interface VulEffectHostList {
  /**
   * 事件id
   */
  EventId?: number
  /**
   * 状态：0: 待处理 1:忽略  3:已修复  5:检测中 6:修复中 7: 回滚中 8:修复失败
   */
  Status?: number
  /**
   * 最后检测时间
   */
  LastTime?: string
  /**
   * 危害等级：1-低危；2-中危；3-高危；4-严重
   */
  Level?: number
  /**
   * 主机Quuid
   */
  Quuid?: string
  /**
   * 主机Uuid
   */
  Uuid?: string
  /**
   * 主机HostIp
   */
  HostIp?: string
  /**
   * 主机别名
   */
  AliasName?: string
  /**
   * 主机标签
   */
  Tags?: Array<string>
  /**
   * 说明
   */
  Description?: string
  /**
   * 版本信息：0-基础版 1-专业版 2-旗舰版 3-普惠版
   */
  HostVersion?: number
  /**
   * 是否能自动修复 0 :漏洞不可自动修复，  1：可自动修复， 2：客户端已离线， 3：主机不是旗舰版只能手动修复， 4：机型不允许 ，5：修复中 ，6：已修复， 7：检测中  9:修复失败，10:已忽略 11:漏洞只支持linux不支持Windows 12：漏洞只支持Windows不支持linux，13:修复失败但此时主机已离线，14:修复失败但此时主机不是旗舰版， 15:已手动修复
   */
  IsSupportAutoFix?: number
  /**
   * 失败原因
   */
  FixStatusMsg?: string
  /**
   * 首次发现时间
   */
  FirstDiscoveryTime?: string
  /**
   * 实例状态："PENDING"-创建中 "LAUNCH_FAILED"-创建失败 "RUNNING"-运行中 "STOPPED"-关机 "STARTING"-表示开机中 "STOPPING"-表示关机中 "REBOOTING"-重启中 "SHUTDOWN"-表示停止待销毁 "TERMINATING"-表示销毁中 "
   */
  InstanceState?: string
  /**
   * 外网ip
   */
  PublicIpAddresses?: string
  /**
   * 云标签信息
   */
  CloudTags?: Array<Tags>
  /**
   * 主机额外信息
   */
  MachineExtraInfo?: MachineExtraInfo
}

/**
 * DescribeAlarmIncidentNodes返回参数结构体
 */
export interface DescribeAlarmIncidentNodesResponse {
  /**
   * 告警点所在事件的所有节点信息,可能包含多事件
   */
  IncidentNodes?: Array<IncidentVertexInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
 * DescribeFileTamperRules请求参数结构体
 */
export interface DescribeFileTamperRulesRequest {
  /**
   * 过滤条件。
<li>RuleCategory- string- 规则类别  0=系统规则，1=用户规则</li>
<li>Name- String - 规则名称</li>
   */
  Filters?: Array<Filters>
  /**
   * 偏移量，默认为0。
   */
  Offset?: number
  /**
   * 需要返回的数量，默认为10，最大值为100
   */
  Limit?: number
  /**
   * 排序方式 ASC,DESC
   */
  Order?: string
  /**
   * 排序字段 CreateTime、ModifyTime、HostCount
   */
  By?: string
}

/**
 * DescribeJavaMemShellInfo返回参数结构体
 */
export interface DescribeJavaMemShellInfoResponse {
  /**
   * java内存马事件详细信息
   */
  Info?: JavaMemShellDetail
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyRaspRules返回参数结构体
 */
export interface ModifyRaspRulesResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeRecommendedProtectCpu请求参数结构体
 */
export type DescribeRecommendedProtectCpuRequest = null

/**
 * DescribeABTestConfig返回参数结构体
 */
export interface DescribeABTestConfigResponse {
  /**
   * 灰度项目配置
   */
  Config?: Array<ABTestConfig>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 主机快照备份列表
 */
export interface RansomDefenseBackup {
  /**
   * 备份时间
   */
  BackupTime?: string
  /**
   * 勒索状态：0无告警, 1有告警
   */
  EventStatus?: number
  /**
   * 备份状态：0备份中，1正常，2、3失败，4快照已过期，9快照已删除
   */
  BackupStatus?: number
  /**
   * 备份磁盘数量
   */
  DiskCount?: number
  /**
   * 硬盘信息，；分隔
   */
  Disks?: string
  /**
   * 快照列表，；分隔
   */
  SnapshotIds?: string
  /**
   * 策略id
   */
  StrategyId?: number
  /**
   * 策略状态:0关闭，1开启，9已删除
   */
  StrategyStatus?: number
  /**
   * 策略名称
   */
  StrategyName?: string
}

/**
 * DescribeMachineInfo请求参数结构体
 */
export interface DescribeMachineInfoRequest {
  /**
   * 主机安全客户端唯一Uuid。
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
 * DescribeVulFixStatus返回参数结构体
 */
export interface DescribeVulFixStatusResponse {
  /**
   * 开始修复时间
   */
  FixStartTime?: string
  /**
   * 修复结束时间，为空表示还没结束
   */
  FixEndTime?: string
  /**
   * 修复成功的主机数
   */
  FixSuccessCnt?: number
  /**
   * 修复失败的主机数
   */
  FixFailCnt?: number
  /**
   * 主机总数
   */
  HostCnt?: number
  /**
   * 修复的任务id
   */
  FixId?: number
  /**
   * 修复快照状态列表
   */
  SnapshotList?: Array<VulFixStatusSnapshotInfo>
  /**
   * 修复漏洞详情列表
   */
  VulFixList?: Array<VulFixStatusInfo>
  /**
   * 快照创建进度0-100
   */
  SnapshotProgress?: number
  /**
   * 修复进度 0-100
   */
  FixProgress?: number
  /**
   * 预计剩余时间（单位秒）
   */
  RemainingTime?: number
  /**
   * 快照是否是重试状态 0=非重试  1=重试
   */
  IsRetrySnapshot?: number
  /**
   * 快照创建失败数
   */
  SnapshotFailCnt?: number
  /**
   * 是否允许重试 0:不允许 1：允许
   */
  IsAllowRetry?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteMalwareWhiteList请求参数结构体
 */
export interface DeleteMalwareWhiteListRequest {
  /**
   * ID数组，最大100条。
   */
  Ids: Array<number | bigint>
}

/**
 * DescribeGeneralStat返回参数结构体
 */
export interface DescribeGeneralStatResponse {
  /**
   * 云主机总数
   */
  MachinesAll?: number
  /**
   * 云主机没有安装主机安全客户端的总数
   */
  MachinesUninstalled?: number
  /**
   * 主机安全客户端总数的总数
   */
  AgentsAll?: number
  /**
   * 主机安全客户端在线的总数
   */
  AgentsOnline?: number
  /**
   * 主机安全客户端 离线+关机 的总数
   */
  AgentsOffline?: number
  /**
   * 主机安全客户端专业版的总数
   */
  AgentsPro?: number
  /**
   * 主机安全客户端基础版的总数
   */
  AgentsBasic?: number
  /**
   * 7天内到期的预付费专业版总数
   */
  AgentsProExpireWithInSevenDays?: number
  /**
   * 风险主机总数
   */
  RiskMachine?: number
  /**
   * 已关机总数
   */
  Shutdown?: number
  /**
   * 已离线总数
   */
  Offline?: number
  /**
   * 旗舰版主机数
   */
  FlagshipMachineCnt?: number
  /**
   * 保护天数
   */
  ProtectDays?: number
  /**
   * 15天内新增的主机数
   */
  AddedOnTheFifteen?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeLogExports请求参数结构体
 */
export interface DescribeLogExportsRequest {
  /**
   * 分页的偏移量，默认值为0
   */
  Offset: number
  /**
   * 分页单页限制数目，默认值为20，最大值100
   */
  Limit?: number
}

/**
 * DeleteMachineTag返回参数结构体
 */
export interface DeleteMachineTagResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * UpdateMachineTags返回参数结构体
 */
export interface UpdateMachineTagsResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
  Id?: number
  /**
   * 主机安全客户端唯一标识UUID
   */
  Uuid?: string
  /**
   * 主机ip
   */
  MachineIp?: string
  /**
   * 主机名
   */
  MachineName?: string
  /**
   * 用户名
   */
  UserName?: string
  /**
   * 来源ip
   */
  SrcIp?: string
  /**
   * SUCCESS：破解成功；FAILED：破解失败
   */
  Status?: string
  /**
   * 国家id
   */
  Country?: number
  /**
   * 城市id
   */
  City?: number
  /**
   * 省份id
   */
  Province?: number
  /**
   * 创建时间
   */
  CreateTime?: string
  /**
   * 0 -不阻断(客户端版本不支持)
1 -已阻断
2 -阻断失败(程序异常)
3 -不阻断(内网不阻断)
4 -可用区不支持阻断
10-阻断中
81-不阻断(未开启阻断)
82-不阻断(非专业版)
83-不阻断(已加白名单)
86-不阻断(系统白名单)
87-不阻断(客户端离线)
88-不阻断(来源Ip归属相同客户)
89-不阻断(ipv6不支持阻断)
   */
  BanStatus?: number
  /**
   * 事件类型：200-暴力破解事件，300-暴力破解成功事件（页面展示），400-暴力破解不存在的账号事件
   */
  EventType?: number
  /**
   * 发生次数
   */
  Count?: number
  /**
   * 机器UUID
   */
  Quuid?: string
  /**
   * 是否为专业版（true/false）
   */
  IsProVersion?: boolean
  /**
   * 被攻击的服务的用户名
   */
  Protocol?: string
  /**
   * 端口
   */
  Port?: number
  /**
   * 最近攻击时间
   */
  ModifyTime?: string
  /**
   * 实例ID
   */
  InstanceId?: string
  /**
   * 0：待处理，1：忽略，5：已处理，6：加入白名单
   */
  DataStatus?: number
  /**
   * 附加信息
   */
  MachineExtraInfo?: MachineExtraInfo
  /**
   * 地理位置中文名
   */
  Location?: string
  /**
   * 威胁等级：0低危，1中危，2高危
   */
  RiskLevel?: number
  /**
   * 事件来源：0--阻断规则，1--威胁情报
   */
  DataFrom?: number
  /**
   * 破解状态说明
   */
  AttackStatusDesc?: string
  /**
   * 阻断过期时间（仅阻断中事件有效）
   */
  BanExpiredTime?: string
}

/**
 * 云服务器类型机器数量
 */
export interface CloudFromCnt {
  /**
   * 云服务器类型
   */
  CloudFrom?: number
  /**
   * 机器数量
   */
  MachineCnt?: number
}

/**
 * DescribeVulFixStatus请求参数结构体
 */
export interface DescribeVulFixStatusRequest {
  /**
   * 任务id 传VulId可以不用传FixId
   */
  FixId?: number
  /**
   * 漏洞id 传FixId可以不用传VulId
   */
  VulId?: number
  /**
   * 主机quuid 和VulId 组合可查 某主机最近一次修复任务详情
   */
  Quuid?: string
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
   * 标签ID，该操作会覆盖原有的标签列表
   */
  TagIds?: Array<number | bigint>
  /**
   * 服务器地区 如: ap-guangzhou
   */
  MachineRegion?: string
  /**
   * 服务器类型(CVM|BM|ECM|LH|Other)
   */
  MachineArea?: string
}

/**
 * DescribeBaselineItemDetectList返回参数结构体
 */
export interface DescribeBaselineItemDetectListResponse {
  /**
   * 总数
   */
  Total?: number
  /**
   * 无
   */
  List?: Array<BaselineItemDetect>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
  ScanTaskDetailList?: Array<ScanTaskDetails>
  /**
   * 总数
   */
  TotalCount?: number
  /**
   * 扫描机器总数
   */
  ScanMachineCount?: number
  /**
   * 发现风险机器数
   */
  RiskMachineCount?: number
  /**
   * 扫描开始时间
   */
  ScanBeginTime?: string
  /**
   * 扫描结束时间
   */
  ScanEndTime?: string
  /**
   * 检测时间
   */
  ScanTime?: number
  /**
   * 扫描进度
   */
  ScanProgress?: number
  /**
   * 扫描剩余时间
   */
  ScanLeftTime?: number
  /**
   * 扫描内容
   */
  ScanContent?: Array<string>
  /**
   * 漏洞信息
   */
  VulInfo?: Array<VulDetailInfo>
  /**
   * 风险事件个数
   */
  RiskEventCount?: number
  /**
   * 0一键检测 1定时检测
   */
  Type?: number
  /**
   * 任务是否全部正在被停止 ture是
   */
  StoppingAll?: boolean
  /**
   * 扫描出漏洞个数
   */
  VulCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyReverseShellRulesAggregation请求参数结构体
 */
export interface ModifyReverseShellRulesAggregationRequest {
  /**
   * 规则ID(新增时请留空)
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
   * 目标IP
   */
  DestIp?: string
  /**
   * 目标端口
   */
  DestPort?: string
  /**
   * 进程名
   */
  ProcessName?: string
  /**
   * 是否全局规则(默认否)
   */
  IsGlobal?: number
  /**
   * 事件列表和详情点击加白时关联的事件id (新增规则时请留空)
   */
  EventId?: number
  /**
   * 加白方式， 0:常规加白 1:正则加白
   */
  WhiteType?: number
  /**
   * 正则表达式
   */
  RuleRegexp?: string
  /**
   * 处理历史事件， 0:不处理 1:处理
   */
  HandleHistory?: number
  /**
   * 批次id
   */
  GroupID?: string
}

/**
 * DescribeHostLoginList返回参数结构体
 */
export interface DescribeHostLoginListResponse {
  /**
   * 总数
   */
  TotalCount?: number
  /**
   * 登录审计列表
   */
  HostLoginList?: Array<HostLoginList>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribePublicProxyInstallCommand返回参数结构体
 */
export interface DescribePublicProxyInstallCommandResponse {
  /**
   * Nginx安装命令
   */
  NginxCommand?: string
  /**
   * Keepalived安装命令
   */
  KeepAliveCommand?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeAttackTop请求参数结构体
 */
export interface DescribeAttackTopRequest {
  /**
   *  过滤条件。
<li>BeginTime - String 起始时间,默认近7天- 是否必填: 否</li>
   */
  Filters?: Array<Filter>
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
 * ModifyRiskEventsStatus返回参数结构体
 */
export interface ModifyRiskEventsStatusResponse {
  /**
   * 此次操作是否是异步操作，0：操作已完成，1：正在异步操作中，前端需要通过DescribeRiskBatchStatus 查询操作是否完成
   */
  IsSync?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeRaspRules返回参数结构体
 */
export interface DescribeRaspRulesResponse {
  /**
   * 列表内容
   */
  List?: Array<RaspRule>
  /**
   * 总条数
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeBaselineDetectList请求参数结构体
 */
export interface DescribeBaselineDetectListRequest {
  /**
   * <li>PolicyName - string - 是否必填：否 - 策略名称</li>
<li>PolicyDetectStatus - int - 是否必填：否 - 1:检测中 2:检测完成</li>
<li>FirstTime - string - 是否必填：否 - 开始时间</li>
<li>LastTime - string - 是否必填：否 - 结束时间</li>
   */
  Filters?: Array<Filter>
  /**
   * 限制条数,默认10,最大100
   */
  Limit?: number
  /**
   * 偏移量,默认0
   */
  Offset?: number
  /**
   * 排序方式: [ASC:升序|DESC:降序]
   */
  Order?: string
  /**
   * 可选排序列: [HostCount|StartTime|StopTime]
   */
  By?: string
}

/**
 * DescribeVulCveIdInfo请求参数结构体
 */
export interface DescribeVulCveIdInfoRequest {
  /**
   * 漏洞cve_id 列表
   */
  CveIds: Array<string>
}

/**
 * ModifyJavaMemShellsStatus返回参数结构体
 */
export interface ModifyJavaMemShellsStatusResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 资源管理账号基本信息
 */
export interface AssetPortBaseInfo {
  /**
   * 主机内网IP
   */
  MachineIp?: string
  /**
   * 主机外网IP
   */
  MachineWanIp?: string
  /**
   * 主机Quuid
   */
  Quuid?: string
  /**
   * 主机Uuid
   */
  Uuid?: string
  /**
   * 操作系统信息
   */
  OsInfo?: string
  /**
   * 主机业务组ID
   */
  ProjectId?: number
  /**
   * 主机标签
   */
  Tag?: Array<MachineTag>
  /**
   * 进程名称
   */
  ProcessName?: string
  /**
   * 进程版本
   */
  ProcessVersion?: string
  /**
   * 进程路径
   */
  ProcessPath?: string
  /**
   * 进程ID
   */
  Pid?: string
  /**
   * 运行用户
   */
  User?: string
  /**
   * 启动时间
   */
  StartTime?: string
  /**
   * 启动参数
   */
  Param?: string
  /**
   * 进程TTY
   */
  Teletype?: string
  /**
   * 端口
   */
  Port?: string
  /**
   * 所属用户组
   */
  GroupName?: string
  /**
   * 进程MD5
   */
  Md5?: string
  /**
   * 父进程ID
   */
  Ppid?: string
  /**
   * 父进程名称
   */
  ParentProcessName?: string
  /**
   * 端口协议
   */
  Proto?: string
  /**
   * 绑定IP
   */
  BindIp?: string
  /**
   * 主机名称
   */
  MachineName?: string
  /**
   * 数据更新时间
   */
  UpdateTime?: string
  /**
   * 首次采集时间
   */
  FirstTime?: string
  /**
   * 是否新增[0:否|1:是]
   */
  IsNew?: number
  /**
   *  附加信息
   */
  MachineExtraInfo?: MachineExtraInfo
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
 * DescribeAlarmVertexId请求参数结构体
 */
export interface DescribeAlarmVertexIdRequest {
  /**
   * 机器uuid
   */
  Uuid: string
  /**
   * 开始时间戳
   */
  StartTime: number
  /**
   * 结束时间戳
   */
  EndTime: number
}

/**
 * DescribeScreenGeneralStat返回参数结构体
 */
export interface DescribeScreenGeneralStatResponse {
  /**
   * name 的值: 在线，关机/离线,未安装，
value : 表示对应的数量
   */
  Machines?: Array<ScreenNameValue>
  /**
   * name 的值: 旗舰版，专业版，基础版
value : 表示对应的数量
   */
  Protection?: Array<ScreenNameValue>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeAssetInitServiceList返回参数结构体
 */
export interface DescribeAssetInitServiceListResponse {
  /**
   * 列表
   */
  Services?: Array<AssetInitServiceBaseInfo>
  /**
   * 总数量
   */
  Total?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyBaselinePolicy请求参数结构体
 */
export interface ModifyBaselinePolicyRequest {
  /**
   * 无
   */
  Data: BaselinePolicy
  /**
   * <li>RuleName - String - 是否必填：否 - 规则名称</li>
<li>CategoryId - int64 - 是否必填：否 自定义筛选为-1 - 规则分类</li>
<li>RuleType - int - 是否必填：否 0:系统 1:自定义 - 规则类型</li>
   */
  Filters?: Array<Filter>
  /**
   * 是否按照过滤的全选
   */
  SelectAll?: number
}

/**
 * DescribeBaselineHostDetectList请求参数结构体
 */
export interface DescribeBaselineHostDetectListRequest {
  /**
   * <li>PolicyId - int64 - 是否必填：否 - 策略Id</li>
<li>HostName - string - 是否必填：否 - 主机名称</li>
<li>HostIp - string - 是否必填：否 - 主机Ip</li>
<li>ItemId - int64 - 是否必填：否 - 项Id</li>
<li>RuleId - int64 - 是否必填：否 - 规则Id</li>
<li>DetectStatus - int - 是否必填：否 - 检测状态</li>
<li>Level - int - 是否必填：否 - 风险等级</li>
<li>StartTime - string - 是否必填：否 - 开时时间</li>
<li>EndTime - string - 是否必填：否 - 结束时间</li>
   */
  Filters?: Array<Filter>
  /**
   * 限制条数,默认10,最大100
   */
  Limit?: number
  /**
   * 偏移量,默认0
   */
  Offset?: number
  /**
   * 排序方式: [ASC:升序|DESC:降序]
   */
  Order?: string
  /**
   * 可选排序列: [LastTime|ItemCount|PassedItemCount|NotPassedItemCount|FirstTime]
   */
  By?: string
}

/**
 * DescribeVulDefenceList请求参数结构体
 */
export interface DescribeVulDefenceListRequest {
  /**
   * 过滤条件：Level、Keywords
   */
  Filters?: Array<Filter>
  /**
   * 数据偏移
   */
  Offset?: number
  /**
   * 数据限制
   */
  Limit?: number
  /**
   * 排序，大小写无关：asc 升序，desc降序
   */
  Order?: string
  /**
   * 排序列，严格相等：PublishTime发布时间
   */
  By?: string
}

/**
 * EditTags返回参数结构体
 */
export interface EditTagsResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
  Total?: number
  /**
   * 列表
   */
  WebFrames?: Array<AssetWebFrameBaseInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeRansomDefenseStrategyDetail请求参数结构体
 */
export interface DescribeRansomDefenseStrategyDetailRequest {
  /**
   * 策略ID
   */
  Id: number
}

/**
 * ModifyRiskDnsPolicy请求参数结构体
 */
export interface ModifyRiskDnsPolicyRequest {
  /**
   * 策略
   */
  Data: RiskDnsPolicy
}

/**
 * DescribeWarningList返回参数结构体
 */
export interface DescribeWarningListResponse {
  /**
   * 获取告警列表
   */
  WarningInfoList?: Array<WarningInfoObj>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ClearLocalStorage请求参数结构体
 */
export type ClearLocalStorageRequest = null

/**
 * DescribeAssetUserList请求参数结构体
 */
export interface DescribeAssetUserListRequest {
  /**
   * 查询指定Quuid主机的信息
   */
  Quuid?: string
  /**
   * 过滤条件。
<li>IP - String - 是否必填：否 - 主机ip</li>
<li>MachineName - String - 是否必填：否 - 主机名称</li>
<li>InstanceID - string - 是否必填：否 - 实例ID</li>
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
<li>IsDomain - uint64 - 是否必填：否 - 是否域账号：0 不是，1是 仅windows</li>
<li>IsRoot - uint64 - 是否必填：否 - 是否Root权限：0 不是，1是 仅linux</li>
<li>IsSudo - uint64 - 是否必填：否 - 是否Sudo权限：0 不是，1是 仅linux</li>
<li>IsSshLogin - uint64 - 是否必填：否 - 是否ssh登录：0 不是，1是 仅linux</li>
<li>ShellLoginStatus - uint64 - 是否必填：否 - 是否shell登录性，0不是；1是 仅linux</li>
<li>PasswordStatus - uint64 - 是否必填：否 - 密码状态：1正常 2即将过期 3已过期 4已锁定 仅linux</li>
<li>Os -String 是否必填: 否 - 操作系统( DescribeMachineOsList 接口 值 )</li>
   */
  Filters?: Array<Filter>
  /**
   * 需要返回的数量，默认为10，最大值为100
   */
  Limit?: number
  /**
   * 偏移量，默认为0。
   */
  Offset?: number
  /**
   * 排序方式，asc升序 或 desc降序
   */
  Order?: string
  /**
   * 可选排序：[FirstTime|LoginTime|PasswordChangeTime|PasswordDuaTime|PasswordLockDays]

   */
  By?: string
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
  Uuid?: string
  /**
   * 主机Quuid
   */
  Quuid?: string
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
   * 偏移量，默认为0。
   */
  Offset?: number
  /**
   * 需要返回的数量，默认为10，最大值为100
   */
  Limit?: number
  /**
   * 排序方式，asc-升序 或 desc-降序。默认：desc-降序
   */
  Order?: string
  /**
   * 排序方式可选：[FistTime|InstallTime:安装时间]
   */
  By?: string
}

/**
 * 紧急通知实体
 */
export interface VulEmergentMsgInfo {
  /**
   * 漏洞id
   */
  VulId?: number
  /**
   * 漏洞纰漏时间
   */
  PublishTime?: string
  /**
   * 漏洞名
   */
  Name?: string
  /**
   * 漏洞名,英文描述
   */
  NameEn?: string
}

/**
 * ModifyBruteAttackRules返回参数结构体
 */
export interface ModifyBruteAttackRulesResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
   * 1:web-cms 漏洞，2.应用漏洞   4: Linux软件漏洞 5: windows系统漏洞 6:应急漏洞，不填或者填0时返回 1，2，4，5 的总统计数据
   */
  VulCategory?: number
  /**
   * 是否仅统计重点关注漏洞 1=仅统计重点关注漏洞, 0=统计全部漏洞
   */
  IsFollowVul?: number
}

/**
 * 服务器标签信息
 */
export interface MachineTag {
  /**
   * 关联标签ID
   */
  Rid?: number
  /**
   * 标签名
   */
  Name?: string
  /**
   * 标签ID
   */
  TagId?: number
}

/**
 * DescribeBaselineItemIgnoreList返回参数结构体
 */
export interface DescribeBaselineItemIgnoreListResponse {
  /**
   * 无
   */
  List?: Array<BaselineItemInfo>
  /**
   * 总数
   */
  Total?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
   * 查询指定Quuid主机的信息
   */
  Quuid?: string
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
   * 偏移量，默认为0。
<li>IpOrAlias - String - 是否必填：否 - 主机ip或别名筛选</li>
   */
  Offset?: number
  /**
   * 需要返回的数量，默认为10，最大值为100
   */
  Limit?: number
  /**
   * 排序方式，asc升序 或 desc降序
   */
  Order?: string
  /**
   * 可选排序：[FirstTime|ProcessCount]
   */
  By?: string
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

/**
 * ExportAssetUserList返回参数结构体
 */
export interface ExportAssetUserListResponse {
  /**
   * 异步下载任务ID，需要配合ExportTasks接口使用
   */
  TaskId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}
