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
export type ExportBashEventsRequest = null

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
 * DescribeProcessTaskStatus返回参数结构体
 */
export interface DescribeProcessTaskStatusResponse {
  /**
      * 任务状态。
<li>COMPLETE：完成（此时可以调用DescribeProcesses接口获取实时进程列表）</li>
<li>AGENT_OFFLINE：云镜客户端离线</li>
<li>COLLECTING：进程获取中</li>
<li>FAILED：进程获取失败</li>
      */
  Status?: string

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
  DownloadUrl?: string

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
   * 返回数量，默认为10，最大值为100。
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
 * ExportPrivilegeEvents返回参数结构体
 */
export interface ExportPrivilegeEventsResponse {
  /**
   * 导出文件下载链接地址。
   */
  DownloadUrl?: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeAlarmAttribute返回参数结构体
 */
export interface DescribeAlarmAttributeResponse {
  /**
      * 防护软件离线告警状态：
<li>OPEN：告警已开启</li>
<li>CLOSE： 告警已关闭</li>
      */
  Offline?: string

  /**
      * 发现木马告警状态：
<li>OPEN：告警已开启</li>
<li>CLOSE： 告警已关闭</li>
      */
  Malware?: string

  /**
      * 发现异地登录告警状态：
<li>OPEN：告警已开启</li>
<li>CLOSE： 告警已关闭</li>
      */
  NonlocalLogin?: string

  /**
      * 被暴力破解成功告警状态：
<li>OPEN：告警已开启</li>
<li>CLOSE： 告警已关闭</li>
      */
  CrackSuccess?: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeWeeklyReportBruteAttacks返回参数结构体
 */
export interface DescribeWeeklyReportBruteAttacksResponse {
  /**
   * 专业周报密码破解数组。
   */
  WeeklyReportBruteAttacks?: Array<WeeklyReportBruteAttack>

  /**
   * 记录总数。
   */
  TotalCount?: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeAgentVuls请求参数结构体
 */
export interface DescribeAgentVulsRequest {
  /**
      * 漏洞类型。
<li>WEB: Web应用漏洞</li>
<li>SYSTEM：系统组件漏洞</li>
<li>BASELINE：安全基线</li>
      */
  VulType: string

  /**
   * 客户端UUID。
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
<li>Status - String - 是否必填：否 - 状态筛选（UN_OPERATED: 待处理 | FIXED：已修复）
      */
  Filters?: Array<Filter>
}

/**
 * DescribeTags请求参数结构体
 */
export interface DescribeTagsRequest {
  /**
      * 云主机类型。
<li>CVM：表示虚拟主机</li>
<li>BM:  表示黑石物理机</li>
      */
  MachineType?: string

  /**
   * 机器所属地域。如：ap-guangzhou，ap-shanghai
   */
  MachineRegion?: string
}

/**
 * AddMachineTag返回参数结构体
 */
export interface AddMachineTagResponse {
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
 * DescribeReverseShellEvents请求参数结构体
 */
export interface DescribeReverseShellEventsRequest {
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
<li>Keywords - String - 是否必填：否 - 关键字(主机内网IP|进程名)</li>
      */
  Filters?: Array<Filter>
}

/**
 * 专业版周报漏洞数据。
 */
export interface WeeklyReportVul {
  /**
   * 主机内网IP。
   */
  MachineIp: string

  /**
   * 漏洞名称。
   */
  VulName: string

  /**
      * 漏洞类型。
<li> WEB : Web漏洞</li>
<li> SYSTEM :系统组件漏洞</li>
<li> BASELINE : 安全基线</li>
      */
  VulType: string

  /**
   * 漏洞描述。
   */
  Description: string

  /**
      * 漏洞状态。
<li> UN_OPERATED : 待处理</li>
<li> SCANING : 扫描中</li>
<li> FIXED : 已修复</li>
      */
  VulStatus: string

  /**
   * 最后扫描时间。
   */
  LastScanTime: string
}

/**
 * DescribeWeeklyReportBruteAttacks请求参数结构体
 */
export interface DescribeWeeklyReportBruteAttacksRequest {
  /**
   * 专业周报开始时间。
   */
  BeginDate: string

  /**
   * 返回数量，默认为10，最大值为100。
   */
  Limit?: number

  /**
   * 偏移量，默认为0。
   */
  Offset?: number
}

/**
 * CreateUsualLoginPlaces请求参数结构体
 */
export interface CreateUsualLoginPlacesRequest {
  /**
   * 云镜客户端UUID数组。
   */
  Uuids: Array<string>

  /**
   * 登录地域信息数组。
   */
  Places: Array<Place>
}

/**
 * DescribeProcessTaskStatus请求参数结构体
 */
export interface DescribeProcessTaskStatusRequest {
  /**
   * 云镜客户端唯一Uuid。
   */
  Uuid: string
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
}

/**
 * DescribeVulScanResult返回参数结构体
 */
export interface DescribeVulScanResultResponse {
  /**
   * 漏洞数量。
   */
  VulNum?: number

  /**
   * 专业版机器数。
   */
  ProVersionNum?: number

  /**
   * 受影响的专业版主机数。
   */
  ImpactedHostNum?: number

  /**
   * 主机总数。
   */
  HostNum?: number

  /**
   * 基础版机器数。
   */
  BasicVersionNum?: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyAlarmAttribute请求参数结构体
 */
export interface ModifyAlarmAttributeRequest {
  /**
      * 告警项目。
<li>Offline：防护软件离线</li>
<li>Malware：发现木马文件</li>
<li>NonlocalLogin：发现异地登录行为</li>
<li>CrackSuccess：被暴力破解成功</li>
      */
  Attribute: string

  /**
      * 告警项目属性。
<li>CLOSE：关闭</li>
<li>OPEN：打开</li>
      */
  Value: string
}

/**
 * DescribeAttackLogs请求参数结构体
 */
export interface DescribeAttackLogsRequest {
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
<li>HttpMethod - String - 是否必填：否 - 攻击方法(POST|GET)</li>
<li>MachineIp - String - 是否必填：否 - 主机内网IP</li>
<li>DateRange - String - 是否必填：否 - 时间范围(存储最近3个月的数据)，如最近一个月["2019-11-17", "2019-12-17"]</li>
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
 * ExportMalwares请求参数结构体
 */
export type ExportMalwaresRequest = null

/**
 * DescribeProcesses返回参数结构体
 */
export interface DescribeProcessesResponse {
  /**
   * 进程列表记录总数。
   */
  TotalCount?: number

  /**
   * 进程列表数据数组。
   */
  Processes?: Array<Process>

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
 * ExportPrivilegeEvents请求参数结构体
 */
export type ExportPrivilegeEventsRequest = null

/**
 * 专业周报木马数据。
 */
export interface WeeklyReportMalware {
  /**
   * 主机IP。
   */
  MachineIp: string

  /**
   * 木马文件路径。
   */
  FilePath: string

  /**
   * 木马文件MD5值。
   */
  Md5: string

  /**
   * 木马发现时间。
   */
  FindTime: string

  /**
      * 当前木马状态。
<li>UN_OPERATED：未处理</li>
<li>SEGREGATED：已隔离</li>
<li>TRUSTED：已信任</li>
<li>SEPARATING：隔离中</li>
<li>RECOVERING：恢复中</li>
      */
  Status: string
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
   * 云主机类型：“CVM”：虚拟主机，"BMS"：裸金属，"ECM"：边缘计算主机
   */
  MachineType: string

  /**
   * 主机地域. 示例: "ap-bj"
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
   * 开始时间。
   */
  BeginDate: string

  /**
   * 结束时间。
   */
  EndDate: string
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
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribePrivilegeRules请求参数结构体
 */
export interface DescribePrivilegeRulesRequest {
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
 * 暴力破解列表
 */
export interface BruteAttack {
  /**
   * 事件ID。
   */
  Id: number

  /**
   * 主机IP。
   */
  MachineIp: string

  /**
      * 破解事件状态
<li>BRUTEATTACK_FAIL_ACCOUNT： 暴力破解事件-失败(存在帐号)  </li>
<li>BRUTEATTACK_FAIL_NOACCOUNT：暴力破解事件-失败(帐号不存在)</li>
<li>BRUTEATTACK_SUCCESS：暴力破解事件-成功</li>
      */
  Status: string

  /**
   * 用户名称。
   */
  UserName: string

  /**
   * 城市ID。
   */
  City: number

  /**
   * 国家ID。
   */
  Country: number

  /**
   * 省份ID。
   */
  Province: number

  /**
   * 来源IP。
   */
  SrcIp: string

  /**
   * 尝试破解次数。
   */
  Count: number

  /**
   * 发生时间。
   */
  CreateTime: string

  /**
   * 主机名称。
   */
  MachineName: string

  /**
   * 云镜客户端唯一标识UUID。
   */
  Uuid: string

  /**
   * 是否专业版。
   */
  IsProVersion: boolean

  /**
   * 阻断状态。
   */
  BanStatus: string

  /**
   * 机器UUID
   */
  Quuid: string
}

/**
 * DescribeOpenPorts请求参数结构体
 */
export interface DescribeOpenPortsRequest {
  /**
   * 云镜客户端唯一Uuid。Port和Uuid必填其一，使用Uuid表示，查询该主机列表信息。
   */
  Uuid?: string

  /**
   * 开放端口号。Port和Uuid必填其一，使用Port表示查询该端口的列表信息。
   */
  Port?: number

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
<li>ProcessName - String - 是否必填：否 - 进程名</li>
<li>MachineIp - String - 是否必填：否 - 主机内网IP</li>
      */
  Filters?: Array<Filter>
}

/**
 * DescribeImpactedHosts请求参数结构体
 */
export interface DescribeImpactedHostsRequest {
  /**
   * 漏洞种类ID。
   */
  VulId: number

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
<li>Status - String - 是否必填：否 - 状态筛选（UN_OPERATED：待处理 | FIXED：已修复）</li>
      */
  Filters?: Array<Filter>
}

/**
 * DescribeMaliciousRequests返回参数结构体
 */
export interface DescribeMaliciousRequestsResponse {
  /**
   * 记录总数。
   */
  TotalCount?: number

  /**
   * 恶意请求记录数组。
   */
  MaliciousRequests?: Array<MaliciousRequest>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 异地登录
 */
export interface NonLocalLoginPlace {
  /**
   * 事件ID。
   */
  Id: number

  /**
   * 主机IP。
   */
  MachineIp: string

  /**
      * 登录状态
<li>NON_LOCAL_LOGIN：异地登录</li>
<li>NORMAL_LOGIN：正常登录</li>
      */
  Status: string

  /**
   * 用户名。
   */
  UserName: string

  /**
   * 城市ID。
   */
  City: number

  /**
   * 国家ID。
   */
  Country: number

  /**
   * 省份ID。
   */
  Province: number

  /**
   * 登录IP。
   */
  SrcIp: string

  /**
   * 机器名称。
   */
  MachineName: string

  /**
   * 登录时间。
   */
  LoginTime: string

  /**
   * 云镜客户端唯一标识Uuid。
   */
  Uuid: string
}

/**
 * CreateProcessTask返回参数结构体
 */
export interface CreateProcessTaskResponse {
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
   * 安全事件发生事件。
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
 * DescribeComponents请求参数结构体
 */
export interface DescribeComponentsRequest {
  /**
   * 云镜客户端唯一Uuid。Uuid和ComponentId必填其一，使用Uuid表示，查询该主机列表信息。
   */
  Uuid?: string

  /**
   * 组件ID。Uuid和ComponentId必填其一，使用ComponentId表示，查询该组件列表信息。
   */
  ComponentId?: number

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
<li>ComponentVersion - String - 是否必填：否 - 组件版本号</li>
<li>MachineIp - String - 是否必填：否 - 主机内网IP</li>
      */
  Filters?: Array<Filter>
}

/**
 * DescribeNonlocalLoginPlaces请求参数结构体
 */
export interface DescribeNonlocalLoginPlacesRequest {
  /**
   * 客户端唯一Uuid。
   */
  Uuid?: string

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
<li>Keywords - String - 是否必填：否 -  查询关键字</li>
<li>Status - String - 是否必填：否 -  登录状态（NON_LOCAL_LOGIN: 异地登录 | NORMAL_LOGIN : 正常登录）</li>
      */
  Filters?: Array<Filter>
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
 * CreateBaselineStrategy返回参数结构体
 */
export interface CreateBaselineStrategyResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
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
 * EditPrivilegeRule返回参数结构体
 */
export interface EditPrivilegeRuleResponse {
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
  TotalCount?: number

  /**
   * 帐号变更历史数据数组。
   */
  HistoryAccounts?: Array<HistoryAccount>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 主机漏洞信息
 */
export interface AgentVul {
  /**
   * 漏洞ID。
   */
  Id: number

  /**
   * 主机IP。
   */
  MachineIp: string

  /**
   * 漏洞名称。
   */
  VulName: string

  /**
      * 漏洞危害等级。
<li>HIGH：高危</li>
<li>MIDDLE：中危</li>
<li>LOW：低危</li>
<li>NOTICE：提示</li>
      */
  VulLevel: string

  /**
   * 最后扫描时间。
   */
  LastScanTime: string

  /**
   * 漏洞描述。
   */
  Description: string

  /**
   * 漏洞种类ID。
   */
  VulId: number

  /**
      * 漏洞状态。
<li>UN_OPERATED : 待处理</li>
<li>FIXED : 已修复</li>
      */
  VulStatus: string
}

/**
 * UntrustMalwares请求参数结构体
 */
export interface UntrustMalwaresRequest {
  /**
   * 木马ID数组，单次最大处理不能超过200条。
   */
  Ids: Array<number>
}

/**
 * ExportAttackLogs返回参数结构体
 */
export interface ExportAttackLogsResponse {
  /**
   * 导出文件下载链接地址。
   */
  DownloadUrl?: string

  /**
   * 导出任务ID
   */
  TaskId?: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
 * DescribeLoginWhiteList请求参数结构体
 */
export interface DescribeLoginWhiteListRequest {
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
      */
  Filters?: Array<Filter>
}

/**
 * 反弹Shell数据
 */
export interface ReverseShell {
  /**
   * ID
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
   * 处理状态
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
}

/**
 * UntrustMaliciousRequest请求参数结构体
 */
export interface UntrustMaliciousRequestRequest {
  /**
   * 受信任记录ID。
   */
  Id: number
}

/**
 * ExportNonlocalLoginPlaces请求参数结构体
 */
export type ExportNonlocalLoginPlacesRequest = null

/**
 * DescribeComponentInfo返回参数结构体
 */
export interface DescribeComponentInfoResponse {
  /**
   * 组件ID。
   */
  Id?: number

  /**
   * 组件名称。
   */
  ComponentName?: string

  /**
      * 组件类型。
<li>WEB：web组件</li>
<li>SYSTEM：系统组件</li>
      */
  ComponentType?: string

  /**
   * 组件官网。
   */
  Homepage?: string

  /**
   * 组件描述。
   */
  Description?: string

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
  TotalCount?: number

  /**
   * 帐号统计列表。
   */
  AccountStatistics?: Array<AccountStatistics>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
 * ModifyLoginWhiteList返回参数结构体
 */
export interface ModifyLoginWhiteListResponse {
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
  List?: Array<Tag>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 端口列表
 */
export interface OpenPort {
  /**
   * 唯一ID。
   */
  Id: number

  /**
   * 云镜客户端唯一UUID。
   */
  Uuid: string

  /**
   * 开放端口号。
   */
  Port: number

  /**
   * 主机IP。
   */
  MachineIp: string

  /**
   * 主机名。
   */
  MachineName: string

  /**
   * 端口对应进程名。
   */
  ProcessName: string

  /**
   * 端口对应进程Pid。
   */
  Pid: number

  /**
   * 记录创建时间。
   */
  CreateTime: string

  /**
   * 记录更新时间。
   */
  ModifyTime: string
}

/**
 * DescribeProVersionInfo请求参数结构体
 */
export type DescribeProVersionInfoRequest = null

/**
 * CreateProcessTask请求参数结构体
 */
export interface CreateProcessTaskRequest {
  /**
   * 云镜客户端唯一Uuid。
   */
  Uuid: string
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
  DownloadUrl?: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * EditReverseShellRule返回参数结构体
 */
export interface EditReverseShellRuleResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ExportBruteAttacks请求参数结构体
 */
export type ExportBruteAttacksRequest = null

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
 * DeleteLoginWhiteList请求参数结构体
 */
export interface DeleteLoginWhiteListRequest {
  /**
   * 白名单ID
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
  Id?: number

  /**
   * 主机ID
   */
  Quuid?: string

  /**
   * 攻击来源端口
   */
  SrcPort?: number

  /**
   * 攻击来源IP
   */
  SrcIp?: string

  /**
   * 攻击目标端口
   */
  DstPort?: number

  /**
   * 攻击目标IP
   */
  DstIp?: string

  /**
   * 攻击方法
   */
  HttpMethod?: string

  /**
   * 攻击目标主机
   */
  HttpHost?: string

  /**
   * 攻击头信息
   */
  HttpHead?: string

  /**
   * 攻击者浏览器标识
   */
  HttpUserAgent?: string

  /**
   * 请求源
   */
  HttpReferer?: string

  /**
   * 威胁类型
   */
  VulType?: string

  /**
   * 攻击路径
   */
  HttpCgi?: string

  /**
   * 攻击参数
   */
  HttpParam?: string

  /**
   * 攻击时间
   */
  CreatedAt?: string

  /**
   * 攻击内容
   */
  HttpContent?: string

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
  List?: Array<PrivilegeEscalationProcess>

  /**
   * 总条数
   */
  TotalCount?: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 专业周报异地登录数据。
 */
export interface WeeklyReportNonlocalLoginPlace {
  /**
   * 主机IP。
   */
  MachineIp: string

  /**
   * 用户名。
   */
  Username: string

  /**
   * 源IP。
   */
  SrcIp: string

  /**
   * 国家ID。
   */
  Country: number

  /**
   * 省份ID。
   */
  Province: number

  /**
   * 城市ID。
   */
  City: number

  /**
   * 登录时间。
   */
  LoginTime: string
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
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * RecoverMalwares请求参数结构体
 */
export interface RecoverMalwaresRequest {
  /**
   * 木马Id数组,单次最大删除不能超过200条
   */
  Ids: Array<number>
}

/**
 * 恶意请求数据。
 */
export interface MaliciousRequest {
  /**
   * 记录ID。
   */
  Id: number

  /**
   * 云镜客户端UUID。
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
   * 恶意请求域名。
   */
  Domain: string

  /**
   * 恶意请求数。
   */
  Count: number

  /**
   * 进程名。
   */
  ProcessName: string

  /**
      * 记录状态。
<li>UN_OPERATED：待处理</li>
<li>TRUSTED：已信任</li>
<li>UN_TRUSTED：已取消信任</li>
      */
  Status: string

  /**
   * 恶意请求域名描述。
   */
  Description: string

  /**
   * 参考地址。
   */
  Reference: string

  /**
   * 发现时间。
   */
  CreateTime: string

  /**
   * 记录合并时间。
   */
  MergeTime: string

  /**
      * 进程MD5
值。
      */
  ProcessMd5: string

  /**
   * 执行命令行。
   */
  CmdLine: string

  /**
   * 进程PID。
   */
  Pid: number
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
 * DescribeWeeklyReportInfo请求参数结构体
 */
export interface DescribeWeeklyReportInfoRequest {
  /**
   * 专业周报开始时间。
   */
  BeginDate: string
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
   * CVM主机ID
   */
  Quuids?: Array<string>
}

/**
 * AddLoginWhiteList请求参数结构体
 */
export interface AddLoginWhiteListRequest {
  /**
   * 白名单规则
   */
  Rules: LoginWhiteListsRule
}

/**
 * DeleteReverseShellRules请求参数结构体
 */
export interface DeleteReverseShellRulesRequest {
  /**
   * ID数组，最大100条。
   */
  Ids: Array<number>
}

/**
 * DescribeWeeklyReports请求参数结构体
 */
export interface DescribeWeeklyReportsRequest {
  /**
   * 返回数量，默认为10，最大值为100。
   */
  Limit?: number

  /**
   * 偏移量，默认为0。
   */
  Offset?: number
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
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeImpactedHosts返回参数结构体
 */
export interface DescribeImpactedHostsResponse {
  /**
   * 记录总数
   */
  TotalCount?: number

  /**
   * 漏洞影响机器列表数组
   */
  ImpactedHosts?: Array<ImpactedHost>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyLoginWhiteList请求参数结构体
 */
export interface ModifyLoginWhiteListRequest {
  /**
   * 白名单规则
   */
  Rules: LoginWhiteListsRule
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
 * DeleteTags请求参数结构体
 */
export interface DeleteTagsRequest {
  /**
   * 标签ID
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
 * ExportAttackLogs请求参数结构体
 */
export type ExportAttackLogsRequest = null

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
 * DescribeVulInfo请求参数结构体
 */
export interface DescribeVulInfoRequest {
  /**
   * 漏洞种类ID。
   */
  VulId: number
}

/**
 * UntrustMaliciousRequest返回参数结构体
 */
export interface UntrustMaliciousRequestResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeComponentStatistics返回参数结构体
 */
export interface DescribeComponentStatisticsResponse {
  /**
   * 组件统计列表记录总数。
   */
  TotalCount?: number

  /**
   * 组件统计列表数据数组。
   */
  ComponentStatistics?: Array<ComponentStatistics>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
   * 处理状态
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
 * DeleteUsualLoginPlaces返回参数结构体
 */
export interface DeleteUsualLoginPlacesResponse {
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
 * DescribeNonlocalLoginPlaces返回参数结构体
 */
export interface DescribeNonlocalLoginPlacesResponse {
  /**
   * 记录总数。
   */
  TotalCount?: number

  /**
   * 异地登录信息数组。
   */
  NonLocalLoginPlaces?: Array<NonLocalLoginPlace>

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
 * ExportMalwares返回参数结构体
 */
export interface ExportMalwaresResponse {
  /**
   * 导出文件下载链接地址。
   */
  DownloadUrl?: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
 * DeletePrivilegeRules返回参数结构体
 */
export interface DeletePrivilegeRulesResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateOpenPortTask返回参数结构体
 */
export interface CreateOpenPortTaskResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * EditBashRule请求参数结构体
 */
export interface EditBashRuleRequest {
  /**
   * 规则名称
   */
  Name: string

  /**
   * 危险等级(1: 高危 2:中危 3: 低危)
   */
  Level: number

  /**
   * 正则表达式
   */
  Rule: string

  /**
   * 规则ID(新增时不填)
   */
  Id?: number

  /**
   * 客户端ID(IsGlobal为1时，Uuid或Hostip必填一个)
   */
  Uuid?: string

  /**
   * 主机IP(IsGlobal为1时，Uuid或Hostip必填一个)
   */
  Hostip?: string

  /**
   * 是否全局规则(默认否)
   */
  IsGlobal?: number
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
 * InquiryPriceOpenProVersionPrepaid返回参数结构体
 */
export interface InquiryPriceOpenProVersionPrepaidResponse {
  /**
   * 预支费用的原价，单位：元。
   */
  OriginalPrice?: number

  /**
   * 预支费用的折扣价，单位：元。
   */
  DiscountPrice?: number

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
      * 主机唯一标识Uuid。
黑石的InstanceId，CVM的Uuid
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
 * DescribeUsualLoginPlaces返回参数结构体
 */
export interface DescribeUsualLoginPlacesResponse {
  /**
   * 常用登录地数组
   */
  UsualLoginPlaces?: Array<UsualPlace>

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
  TotalCount?: number

  /**
   * 进程统计列表数据数组。
   */
  ProcessStatistics?: Array<ProcessStatistics>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * MisAlarmNonlocalLoginPlaces请求参数结构体
 */
export interface MisAlarmNonlocalLoginPlacesRequest {
  /**
   * 异地登录事件Id数组。
   */
  Ids: Array<number>
}

/**
 * TrustMaliciousRequest请求参数结构体
 */
export interface TrustMaliciousRequestRequest {
  /**
   * 恶意请求记录ID。
   */
  Id: number
}

/**
 * ExportMaliciousRequests返回参数结构体
 */
export interface ExportMaliciousRequestsResponse {
  /**
   * 导出文件下载链接地址。
   */
  DownloadUrl?: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

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
 * DescribeWeeklyReportMalwares请求参数结构体
 */
export interface DescribeWeeklyReportMalwaresRequest {
  /**
   * 专业周报开始时间。
   */
  BeginDate: string

  /**
   * 返回数量，默认为10，最大值为100。
   */
  Limit?: number

  /**
   * 偏移量，默认为0。
   */
  Offset?: number
}

/**
 * DescribeBruteAttacks返回参数结构体
 */
export interface DescribeBruteAttacksResponse {
  /**
   * 事件数量
   */
  TotalCount?: number

  /**
   * 暴力破解事件列表
   */
  BruteAttacks?: Array<BruteAttack>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ExportNonlocalLoginPlaces返回参数结构体
 */
export interface ExportNonlocalLoginPlacesResponse {
  /**
   * 导出文件下载链接地址。
   */
  DownloadUrl?: string

  /**
   * 导出任务ID
   */
  TaskId?: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
 * DescribeOverviewStatistics请求参数结构体
 */
export type DescribeOverviewStatisticsRequest = null

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
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeVulInfo返回参数结构体
 */
export interface DescribeVulInfoResponse {
  /**
   * 漏洞种类ID。
   */
  VulId?: number

  /**
   * 漏洞名称。
   */
  VulName?: string

  /**
   * 漏洞等级。
   */
  VulLevel?: string

  /**
   * 漏洞类型。
   */
  VulType?: string

  /**
   * 漏洞描述。
   */
  Description?: string

  /**
   * 修复方案。
   */
  RepairPlan?: string

  /**
   * 漏洞CVE。
   */
  CveId?: string

  /**
   * 参考链接。
   */
  Reference?: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
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
 * EditReverseShellRule请求参数结构体
 */
export interface EditReverseShellRuleRequest {
  /**
   * 规则ID(新增时请留空)
   */
  Id?: number

  /**
   * 客户端ID(IsGlobal为1时，Uuid或Hostip必填一个)
   */
  Uuid?: string

  /**
   * 主机IP(IsGlobal为1时，Uuid或Hostip必填一个)
   */
  Hostip?: string

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
}

/**
 * DescribeProVersionInfo返回参数结构体
 */
export interface DescribeProVersionInfoResponse {
  /**
   * 后付费昨日扣费
   */
  PostPayCost?: number

  /**
   * 新增主机是否自动开通专业版
   */
  IsAutoOpenProVersion?: boolean

  /**
   * 开通专业版主机数
   */
  ProVersionNum?: number

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
 * DeleteBruteAttacks请求参数结构体
 */
export interface DeleteBruteAttacksRequest {
  /**
   * 暴力破解事件Id数组。
   */
  Ids: Array<number>
}

/**
 * DescribeWeeklyReportVuls请求参数结构体
 */
export interface DescribeWeeklyReportVulsRequest {
  /**
   * 专业版周报开始时间。
   */
  BeginDate: string

  /**
   * 返回数量，默认为10，最大值为100。
   */
  Limit?: number

  /**
   * 偏移量，默认为0。
   */
  Offset?: number
}

/**
 * AddLoginWhiteList返回参数结构体
 */
export interface AddLoginWhiteListResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

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
   * 危险等级(1: 高危 2:中危 3: 低危)
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
}

/**
 * DescribeOpenPortTaskStatus返回参数结构体
 */
export interface DescribeOpenPortTaskStatusResponse {
  /**
      * 任务状态。
<li>COMPLETE：完成（此时可以调用DescribeOpenPorts接口获取实时进程列表）</li>
<li>AGENT_OFFLINE：云镜客户端离线</li>
<li>COLLECTING：端口获取中</li>
<li>FAILED：进程获取失败</li>
      */
  Status?: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeWeeklyReportNonlocalLoginPlaces返回参数结构体
 */
export interface DescribeWeeklyReportNonlocalLoginPlacesResponse {
  /**
   * 专业周报异地登录数据。
   */
  WeeklyReportNonlocalLoginPlaces?: Array<WeeklyReportNonlocalLoginPlace>

  /**
   * 记录总数。
   */
  TotalCount?: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * SeparateMalwares请求参数结构体
 */
export interface SeparateMalwaresRequest {
  /**
   * 木马事件ID数组。
   */
  Ids: Array<number>
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
 * 白名单规则
 */
export interface LoginWhiteListsRule {
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
   * 是否对全局生效
   */
  IsGlobal: boolean

  /**
   * 白名单生效的机器
   */
  HostIp: string

  /**
   * 规则ID，用于更新规则
   */
  Id?: number

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
 * DescribeTagMachines返回参数结构体
 */
export interface DescribeTagMachinesResponse {
  /**
   * 列表数据
   */
  List?: Array<TagMachine>

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
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 需要开通专业版机器信息。
 */
export interface ProVersionMachine {
  /**
      * 主机类型。
<li>CVM: 虚拟主机</li>
<li>BM: 黑石物理机</li>
      */
  MachineType: string

  /**
      * 主机所在地域。
如：ap-guangzhou、ap-beijing
      */
  MachineRegion: string

  /**
      * 主机唯一标识Uuid。
黑石的InstanceId，CVM的Uuid
      */
  Quuid: string
}

/**
 * CreateOpenPortTask请求参数结构体
 */
export interface CreateOpenPortTaskRequest {
  /**
   * 云镜客户端唯一Uuid。
   */
  Uuid: string
}

/**
 * DescribeWeeklyReportInfo返回参数结构体
 */
export interface DescribeWeeklyReportInfoResponse {
  /**
   * 账号所属公司或个人名称。
   */
  CompanyName?: string

  /**
   * 机器总数。
   */
  MachineNum?: number

  /**
   * 云镜客户端在线数。
   */
  OnlineMachineNum?: number

  /**
   * 云镜客户端离线数。
   */
  OfflineMachineNum?: number

  /**
   * 开通云镜专业版数量。
   */
  ProVersionMachineNum?: number

  /**
   * 周报开始时间。
   */
  BeginDate?: string

  /**
   * 周报结束时间。
   */
  EndDate?: string

  /**
      * 安全等级。
<li>HIGH：高</li>
<li>MIDDLE：中</li>
<li>LOW：低</li>
      */
  Level?: string

  /**
   * 木马记录数。
   */
  MalwareNum?: number

  /**
   * 异地登录数。
   */
  NonlocalLoginNum?: number

  /**
   * 密码破解成功数。
   */
  BruteAttackSuccessNum?: number

  /**
   * 漏洞数。
   */
  VulNum?: number

  /**
   * 导出文件下载地址。
   */
  DownloadUrl?: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
 * DeletePrivilegeEvents请求参数结构体
 */
export interface DeletePrivilegeEventsRequest {
  /**
   * ID数组，最大100条。
   */
  Ids: Array<number>
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
 * DescribeOpenPorts返回参数结构体
 */
export interface DescribeOpenPortsResponse {
  /**
   * 端口列表记录总数。
   */
  TotalCount?: number

  /**
   * 端口列表。
   */
  OpenPorts?: Array<OpenPort>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * EditBashRule返回参数结构体
 */
export interface EditBashRuleResponse {
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
 * DescribeMachineInfo请求参数结构体
 */
export interface DescribeMachineInfoRequest {
  /**
   * 云镜客户端唯一Uuid。
   */
  Uuid?: string
}

/**
 * DescribeMaliciousRequests请求参数结构体
 */
export interface DescribeMaliciousRequestsRequest {
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
<li>Status - String - 是否必填：否 - 状态筛选（UN_OPERATED: 待处理 | TRUSTED：已信任 | UN_TRUSTED：已取消信任）</li>
<li>Domain - String - 是否必填：否 - 恶意请求的域名</li>
<li>MachineIp - String - 是否必填：否 - 主机内网IP</li>
      */
  Filters?: Array<Filter>

  /**
   * 云镜客户端唯一UUID。
   */
  Uuid?: string
}

/**
 * DescribeProcesses请求参数结构体
 */
export interface DescribeProcessesRequest {
  /**
   * 云镜客户端唯一Uuid。Uuid和ProcessName必填其一，使用Uuid表示，查询该主机列表信息。
   */
  Uuid?: string

  /**
   * 进程名。Uuid和ProcessName必填其一，使用ProcessName表示，查询该进程列表信息。
   */
  ProcessName?: string

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
<li>MachineIp - String - 是否必填：否 - 主机内网IP</li>
      */
  Filters?: Array<Filter>
}

/**
 * DeleteUsualLoginPlaces请求参数结构体
 */
export interface DeleteUsualLoginPlacesRequest {
  /**
   * 云镜客户端Uuid
   */
  Uuid: string

  /**
   * 已添加常用登录地城市ID数组
   */
  CityIds: Array<number>
}

/**
 * 周报列表。
 */
export interface WeeklyReport {
  /**
   * 周报开始时间。
   */
  BeginDate: string

  /**
   * 周报结束时间。
   */
  EndDate: string
}

/**
 * DescribeOpenPortTaskStatus请求参数结构体
 */
export interface DescribeOpenPortTaskStatusRequest {
  /**
   * 云镜客户端唯一Uuid。
   */
  Uuid: string
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
 * DescribeAttackLogs返回参数结构体
 */
export interface DescribeAttackLogsResponse {
  /**
      * 日志列表
注意：此字段可能返回 null，表示取不到有效值。
      */
  AttackLogs?: Array<DefendAttackLog>

  /**
   * 总条数
   */
  TotalCount?: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * OpenProVersionPrepaid返回参数结构体
 */
export interface OpenProVersionPrepaidResponse {
  /**
   * 订单ID列表。
   */
  DealIds?: Array<string>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * MisAlarmNonlocalLoginPlaces返回参数结构体
 */
export interface MisAlarmNonlocalLoginPlacesResponse {
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
 * DescribeWeeklyReportNonlocalLoginPlaces请求参数结构体
 */
export interface DescribeWeeklyReportNonlocalLoginPlacesRequest {
  /**
   * 专业周报开始时间。
   */
  BeginDate: string

  /**
   * 返回数量，默认为10，最大值为100。
   */
  Limit?: number

  /**
   * 偏移量，默认为0。
   */
  Offset?: number
}

/**
 * SeparateMalwares返回参数结构体
 */
export interface SeparateMalwaresResponse {
  /**
   * 隔离成功的id数组。
   */
  SuccessIds?: Array<number>

  /**
   * 隔离失败的id数组。
   */
  FailedIds?: Array<number>

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
 * 进程信息数据。
 */
export interface Process {
  /**
   * 唯一ID。
   */
  Id: number

  /**
   * 云镜客户端唯一UUID。
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
   * 进程Pid。
   */
  Pid: number

  /**
   * 进程Ppid。
   */
  Ppid: number

  /**
   * 进程名。
   */
  ProcessName: string

  /**
   * 进程用户名。
   */
  Username: string

  /**
      * 所属平台。
<li>WIN32：windows32位</li>
<li>WIN64：windows64位</li>
<li>LINUX32：Linux32位</li>
<li>LINUX64：Linux64位</li>
      */
  Platform: string

  /**
   * 进程路径。
   */
  FullPath: string

  /**
   * 创建时间。
   */
  CreateTime: string
}

/**
 * DescribeBruteAttacks请求参数结构体
 */
export interface DescribeBruteAttacksRequest {
  /**
   * 客户端唯一Uuid。
   */
  Uuid?: string

  /**
   * 偏移量，默认为0。
   */
  Offset?: number

  /**
      * 过滤条件。
<li>Keywords - String - 是否必填：否 -  查询关键字</li>
<li>Status - String - 是否必填：否 -  查询状态（FAILED：破解失败 |SUCCESS：破解成功）</li>
      */
  Filters?: Array<Filter>

  /**
   * 返回数量，默认为10，最大值为100。
   */
  Limit?: number
}

/**
 * DescribeVulScanResult请求参数结构体
 */
export type DescribeVulScanResultRequest = null

/**
 * DescribePrivilegeEvents请求参数结构体
 */
export interface DescribePrivilegeEventsRequest {
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
<li>Keywords - String - 是否必填：否 - 关键词(主机IP)</li>
      */
  Filters?: Array<Filter>
}

/**
 * DescribeWeeklyReportMalwares返回参数结构体
 */
export interface DescribeWeeklyReportMalwaresResponse {
  /**
   * 专业周报木马数据。
   */
  WeeklyReportMalwares?: Array<WeeklyReportMalware>

  /**
   * 记录总数。
   */
  TotalCount?: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeSecurityDynamics请求参数结构体
 */
export interface DescribeSecurityDynamicsRequest {
  /**
   * 返回数量，默认为10，最大值为100。
   */
  Limit?: number

  /**
   * 偏移量，默认为0。
   */
  Offset?: number
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
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 受影响主机信息
 */
export interface ImpactedHost {
  /**
   * 漏洞ID。
   */
  Id: number

  /**
   * 主机IP。
   */
  MachineIp: string

  /**
   * 主机名称。
   */
  MachineName: string

  /**
   * 最后检测时间。
   */
  LastScanTime: string

  /**
      * 漏洞状态。
<li>UN_OPERATED ：待处理</li>
<li>SCANING : 扫描中</li>
<li>FIXED : 已修复</li>
      */
  VulStatus: string

  /**
   * 云镜客户端唯一标识UUID。
   */
  Uuid: string

  /**
   * 漏洞描述。
   */
  Description: string

  /**
   * 漏洞种类ID。
   */
  VulId: number

  /**
   * 是否为专业版。
   */
  IsProVersion: boolean
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
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeComponentInfo请求参数结构体
 */
export interface DescribeComponentInfoRequest {
  /**
   * 组件ID。
   */
  ComponentId: number
}

/**
 * DeleteNonlocalLoginPlaces请求参数结构体
 */
export interface DeleteNonlocalLoginPlacesRequest {
  /**
   * 异地登录事件ID数组。
   */
  Ids: Array<number>
}

/**
 * EditPrivilegeRule请求参数结构体
 */
export interface EditPrivilegeRuleRequest {
  /**
   * 规则ID(新增时请留空)
   */
  Id?: number

  /**
   * 客户端ID(IsGlobal为1时，Uuid或Hostip必填一个)
   */
  Uuid?: string

  /**
   * 主机IP(IsGlobal为1时，Uuid或Hostip必填一个)
   */
  Hostip?: string

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
}

/**
 * ExportMaliciousRequests请求参数结构体
 */
export type ExportMaliciousRequestsRequest = null

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
  Machines?: Array<Machine>

  /**
   * 主机数量
   */
  TotalCount?: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateUsualLoginPlaces返回参数结构体
 */
export interface CreateUsualLoginPlacesResponse {
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
  List?: Array<PrivilegeRule>

  /**
   * 总条数
   */
  TotalCount?: number

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
<li>MACHINE_STOPPED: 已关机</li>
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
}

/**
 * TrustMalwares请求参数结构体
 */
export interface TrustMalwaresRequest {
  /**
   * 木马ID数组。
   */
  Ids: Array<number>
}

/**
 * 木马相关信息
 */
export interface Malware {
  /**
   * 事件ID。
   */
  Id: number

  /**
   * 主机IP。
   */
  MachineIp: string

  /**
      * 当前木马状态。
<li>UN_OPERATED：未处理</li><li>SEGREGATED：已隔离</li><li>TRUSTED：已信任</li>
<li>SEPARATING：隔离中</li><li>RECOVERING：恢复中</li>
      */
  Status: string

  /**
   * 木马所在的路径。
   */
  FilePath: string

  /**
   * 木马描述。
   */
  Description: string

  /**
   * 主机名称。
   */
  MachineName: string

  /**
   * 木马文件创建时间。
   */
  FileCreateTime: string

  /**
   * 木马文件修改时间。
   */
  ModifyTime: string

  /**
   * 云镜客户端唯一标识UUID。
   */
  Uuid: string
}

/**
 * DescribeWeeklyReportVuls返回参数结构体
 */
export interface DescribeWeeklyReportVulsResponse {
  /**
   * 专业周报漏洞数据数组。
   */
  WeeklyReportVuls?: Array<WeeklyReportVul>

  /**
   * 记录总数。
   */
  TotalCount?: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 专业周报密码破解数据。
 */
export interface WeeklyReportBruteAttack {
  /**
   * 主机IP。
   */
  MachineIp: string

  /**
   * 被破解用户名。
   */
  Username: string

  /**
   * 源IP。
   */
  SrcIp: string

  /**
   * 尝试次数。
   */
  Count: number

  /**
   * 攻击时间。
   */
  AttackTime: string
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
 * TrustMaliciousRequest返回参数结构体
 */
export interface TrustMaliciousRequestResponse {
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
 * 组件列表数据。
 */
export interface Component {
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
   * 组件版本号。
   */
  ComponentVersion: string

  /**
      * 组件类型。
<li>SYSTEM：系统组件</li>
<li>WEB：Web组件</li>
      */
  ComponentType: string

  /**
   * 组件名称。
   */
  ComponentName: string

  /**
   * 组件检测更新时间。
   */
  ModifyTime: string
}

/**
 * DescribeVuls请求参数结构体
 */
export interface DescribeVulsRequest {
  /**
      * 漏洞类型。
<li>WEB：Web应用漏洞</li>
<li>SYSTEM：系统组件漏洞</li>
<li>BASELINE：安全基线</li>
      */
  VulType: string

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
<li>Status - String - 是否必填：否 - 状态筛选（UN_OPERATED: 待处理 | FIXED：已修复）

Status过滤条件值只能取其一，不能是“或”逻辑。
      */
  Filters?: Array<Filter>
}

/**
 * DescribeAgentVuls返回参数结构体
 */
export interface DescribeAgentVulsResponse {
  /**
   * 记录总数
   */
  TotalCount?: number

  /**
   * 主机漏洞信息
   */
  AgentVuls?: Array<AgentVul>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
 * DeleteMachineTag返回参数结构体
 */
export interface DeleteMachineTagResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
 * DescribeMachineInfo返回参数结构体
 */
export interface DescribeMachineInfoResponse {
  /**
   * 机器ip。
   */
  MachineIp?: string

  /**
   * 受云镜保护天数。
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
   * 云镜客户端唯一Uuid。
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
      * 云主机类型。
<li>CVM: 虚拟主机</li>
<li>BM: 黑石物理机</li>
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
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * OpenProVersion请求参数结构体
 */
export interface OpenProVersionRequest {
  /**
      * 云主机类型。
<li>CVM：表示虚拟主机</li>
<li>BM:  表示黑石物理机</li>
      */
  MachineType: string

  /**
      * 机器所属地域。
如：ap-guangzhou，ap-shanghai
      */
  MachineRegion: string

  /**
      * 主机唯一标识Uuid数组。
黑石的InstanceId，CVM的Uuid
      */
  Quuids: Array<string>

  /**
   * 活动ID。
   */
  ActivityId?: number
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
 * IgnoreImpactedHosts返回参数结构体
 */
export interface IgnoreImpactedHostsResponse {
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
 * DescribeComponents返回参数结构体
 */
export interface DescribeComponentsResponse {
  /**
   * 组件列表记录总数。
   */
  TotalCount?: number

  /**
   * 组件列表数据。
   */
  Components?: Array<Component>

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
 * RescanImpactedHost返回参数结构体
 */
export interface RescanImpactedHostResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
 * 漏洞列表数据
 */
export interface Vul {
  /**
   * 漏洞种类ID
   */
  VulId: number

  /**
   * 漏洞名称
   */
  VulName: string

  /**
      * 漏洞危害等级:
HIGH：高危
MIDDLE：中危
LOW：低危
NOTICE：提示
      */
  VulLevel: string

  /**
   * 最后扫描时间
   */
  LastScanTime: string

  /**
   * 受影响机器数量
   */
  ImpactedHostNum: number

  /**
   * 漏洞状态
   * UN_OPERATED : 待处理
   * FIXED : 已修复
   */
  VulStatus: string
}

/**
 * AddMachineTag请求参数结构体
 */
export interface AddMachineTagRequest {
  /**
   * 云服务器ID
   */
  Quuid: string

  /**
   * 标签ID
   */
  TagId: number

  /**
   * 云服务器地区
   */
  MRegion: string

  /**
   * 云服务器类型(CVM|BM)
   */
  MArea: string
}

/**
 * DescribeWeeklyReports返回参数结构体
 */
export interface DescribeWeeklyReportsResponse {
  /**
   * 专业周报列表数组。
   */
  WeeklyReports?: Array<WeeklyReport>

  /**
   * 记录总数。
   */
  TotalCount?: number

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
   * ID数组，最大100条。
   */
  Ids: Array<number>
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
 * ExportReverseShellEvents请求参数结构体
 */
export type ExportReverseShellEventsRequest = null

/**
 * DescribeVuls返回参数结构体
 */
export interface DescribeVulsResponse {
  /**
   * 漏洞数量。
   */
  TotalCount?: number

  /**
   * 漏洞列表数组。
   */
  Vuls?: Array<Vul>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * RecoverMalwares返回参数结构体
 */
export interface RecoverMalwaresResponse {
  /**
   * 恢复成功id数组
   */
  SuccessIds?: Array<number>

  /**
   * 恢复失败id数组
   */
  FailedIds?: Array<number>

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
 * IgnoreImpactedHosts请求参数结构体
 */
export interface IgnoreImpactedHostsRequest {
  /**
   * 漏洞ID数组。
   */
  Ids: Array<number>
}

/**
 * DescribeAlarmAttribute请求参数结构体
 */
export type DescribeAlarmAttributeRequest = null

/**
 * DescribeMalwares请求参数结构体
 */
export interface DescribeMalwaresRequest {
  /**
   * 客户端唯一Uuid。
   */
  Uuid?: string

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
<li>Status - String - 是否必填：否 - 木马状态（UN_OPERATED: 未处理 | SEGREGATED: 已隔离|TRUSTED：信任）</li>
每个过滤条件只支持一个值，暂不支持多个值“或”关系查询。
      */
  Filters?: Array<Filter>
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
 * DeleteMaliciousRequests请求参数结构体
 */
export interface DeleteMaliciousRequestsRequest {
  /**
   * 恶意请求记录ID数组，最大100条。
   */
  Ids: Array<number>
}

/**
 * DescribeMachines请求参数结构体
 */
export interface DescribeMachinesRequest {
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
}

/**
 * ModifyAlarmAttribute返回参数结构体
 */
export interface ModifyAlarmAttributeResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 高危命令数据
 */
export interface BashEvent {
  /**
   * ID
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
   * 规则等级
   */
  RuleLevel: number

  /**
   * 处理状态
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
}

/**
 * DeleteMalwares请求参数结构体
 */
export interface DeleteMalwaresRequest {
  /**
   * 木马记录ID数组
   */
  Ids: Array<number>
}

/**
 * DescribeMalwares返回参数结构体
 */
export interface DescribeMalwaresResponse {
  /**
   * 木马总数。
   */
  TotalCount?: number

  /**
   * Malware数组。
   */
  Malwares?: Array<Malware>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
