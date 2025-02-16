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
 * DescribeDbAssetInfo返回参数结构体
 */
export interface DescribeDbAssetInfoResponse {
  /**
   * db资产详情
   */
  Data?: DbAssetInfo
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteRiskScanTask请求参数结构体
 */
export interface DeleteRiskScanTaskRequest {
  /**
   * 任务id 列表
   */
  TaskIdList: Array<TaskIdListKey>
  /**
   * 集团账号的成员id
   */
  MemberId?: Array<string>
}

/**
 * DescribeRiskCenterAssetViewWeakPasswordRiskList返回参数结构体
 */
export interface DescribeRiskCenterAssetViewWeakPasswordRiskListResponse {
  /**
   * 总条数
   */
  TotalCount?: number
  /**
   * 风险列表
   */
  Data?: Array<AssetViewWeakPassRisk>
  /**
   * 状态列表
   */
  StatusLists?: Array<FilterDataObject>
  /**
   * 危险等级列表
   */
  LevelLists?: Array<FilterDataObject>
  /**
   * 来源列表
   */
  FromLists?: Array<FilterDataObject>
  /**
   * 资产类型列表
   */
  InstanceTypeLists?: Array<FilterDataObject>
  /**
   * 弱口令类型列表
   */
  PasswordTypeLists?: Array<FilterDataObject>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeVULRiskAdvanceCFGList返回参数结构体
 */
export interface DescribeVULRiskAdvanceCFGListResponse {
  /**
   * 配置项列表
   */
  Data?: Array<VULRiskAdvanceCFGList>
  /**
   * 总数
   */
  TotalCount?: number
  /**
   * 风险等级过滤列表
   */
  RiskLevelLists?: Array<FilterDataObject>
  /**
   * 漏洞类型过滤列表
   */
  VULTypeLists?: Array<FilterDataObject>
  /**
   * 识别来源过滤列表
   */
  CheckFromLists?: Array<FilterDataObject>
  /**
   * 漏洞标签列表
   */
  VulTagList?: Array<FilterDataObject>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 弱口令风险高级配置
 */
export interface TaskCenterWeakPwdRiskInputParam {
  /**
   * 检测项ID
   */
  CheckItemId: number
  /**
   * 是否开启，0-不开启，1-开启
   */
  Enable: number
}

/**
 * DescribeAssetViewVulRiskList返回参数结构体
 */
export interface DescribeAssetViewVulRiskListResponse {
  /**
   * 总条数
   */
  TotalCount?: number
  /**
   * 资产视角的漏洞风险列表
   */
  Data?: Array<AssetViewVULRiskData>
  /**
   * 状态列表
   */
  StatusLists?: Array<FilterDataObject>
  /**
   * 危险等级列表
   */
  LevelLists?: Array<FilterDataObject>
  /**
   * 来源列表
   */
  FromLists?: Array<FilterDataObject>
  /**
   * 漏洞类型列表
   */
  VULTypeLists?: Array<FilterDataObject>
  /**
   * 资产类型列表
   */
  InstanceTypeLists?: Array<FilterDataObject>
  /**
   * tag枚举
   */
  Tags?: Array<FilterDataObject>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeOrganizationUserInfo请求参数结构体
 */
export interface DescribeOrganizationUserInfoRequest {
  /**
   * 集团账号的成员id
   */
  MemberId?: Array<string>
  /**
   * 过滤内容
   */
  Filter?: Filter
  /**
   * 不支持多云
   */
  NotSupportCloud?: boolean
}

/**
 * ModifyUebaRuleSwitch返回参数结构体
 */
export interface ModifyUebaRuleSwitchResponse {
  /**
   * 0成功，1失败
   */
  Code?: number
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
 * 过滤数据对象
 */
export interface FilterDataObject {
  /**
   * 英文翻译
   */
  Value?: string
  /**
   * 中文翻译
   */
  Text?: string
}

/**
 * 报告项key
 */
export interface ReportItemKey {
  /**
   * 日志Id列表
   */
  TaskLogList: Array<string>
}

/**
 * 任务高级配置
 */
export interface TaskAdvanceCFG {
  /**
   * 端口风险高级配置
   */
  PortRisk?: Array<PortRiskAdvanceCFGParamItem>
  /**
   * 漏洞风险高级配置
   */
  VulRisk?: Array<TaskCenterVulRiskInputParam>
  /**
   * 弱口令风险高级配置
   */
  WeakPwdRisk?: Array<TaskCenterWeakPwdRiskInputParam>
  /**
   * 配置风险高级配置
   */
  CFGRisk?: Array<TaskCenterCFGRiskInputParam>
}

/**
 * 主机资产信息

主机防护状态枚举，左边是常量，右边是显示
0：未安装
1：基础版防护中
2：普惠版防护中
3：专业版防护中
4：旗舰版防护中
5：已离线
6：已关机
 */
export interface CVMAssetVO {
  /**
   * 资产id
   */
  AssetId?: string
  /**
   * 资产名
   */
  AssetName?: string
  /**
   * 资产类型
   */
  AssetType?: string
  /**
   * 地域
   */
  Region?: string
  /**
   * 防护状态
   */
  CWPStatus?: number
  /**
   * 资产创建时间
   */
  AssetCreateTime?: string
  /**
   * 公网ip
   */
  PublicIp?: string
  /**
   * 私网ip
   */
  PrivateIp?: string
  /**
   * vpc id
   */
  VpcId?: string
  /**
   * vpc 名
   */
  VpcName?: string
  /**
   * appid信息
   */
  AppId?: number
  /**
   * 用户uin
   */
  Uin?: string
  /**
   * 昵称
   */
  NickName?: string
  /**
   * 可用区
   */
  AvailableArea?: string
  /**
   * 是否核心
   */
  IsCore?: number
  /**
   * 子网id
   */
  SubnetId?: string
  /**
   * 子网名
   */
  SubnetName?: string
  /**
   * uuid
   */
  InstanceUuid?: string
  /**
   * qquid
   */
  InstanceQUuid?: string
  /**
   * os名
   */
  OsName?: string
  /**
   * 分区
   */
  PartitionCount?: number
  /**
   * cpu信息
   */
  CPUInfo?: string
  /**
   * cpu大小
   */
  CPUSize?: number
  /**
   * cpu负载
   */
  CPULoad?: string
  /**
   * 内存大小
   */
  MemorySize?: string
  /**
   * 内存负载
   */
  MemoryLoad?: string
  /**
   * 硬盘大小
   */
  DiskSize?: string
  /**
   * 硬盘负载
   */
  DiskLoad?: string
  /**
   * 账号数
   */
  AccountCount?: string
  /**
   * 进程数
   */
  ProcessCount?: string
  /**
   * 软件应用
   */
  AppCount?: string
  /**
   * 监听端口
   */
  PortCount?: number
  /**
   * 网络攻击
   */
  Attack?: number
  /**
   * 网络访问
   */
  Access?: number
  /**
   * 网络拦截
   */
  Intercept?: number
  /**
   * 入向峰值带宽
   */
  InBandwidth?: string
  /**
   * 出向峰值带宽
   */
  OutBandwidth?: string
  /**
   * 入向累计流量
   */
  InFlow?: string
  /**
   * 出向累计流量
   */
  OutFlow?: string
  /**
   * 最近扫描时间
   */
  LastScanTime?: string
  /**
   * 恶意主动外联
   */
  NetWorkOut?: number
  /**
   * 端口风险
   */
  PortRisk?: number
  /**
   * 漏洞风险
   */
  VulnerabilityRisk?: number
  /**
   * 配置风险
   */
  ConfigurationRisk?: number
  /**
   * 扫描任务数
   */
  ScanTask?: number
  /**
   * 标签
   */
  Tag?: Array<Tag>
  /**
   * memberId
   */
  MemberId?: string
  /**
   * os全称
   */
  Os?: string
  /**
   * 风险服务暴露
   */
  RiskExposure?: number
  /**
   * 模拟攻击工具状态。0代表未安装，1代表已安装，2代表已离线
   */
  BASAgentStatus?: number
  /**
   * 1新资产；0 非新资产
   */
  IsNewAsset?: number
  /**
   * 0 未安装  1安装 2:安装中
   */
  CVMAgentStatus?: number
  /**
   * 1:开启 0:未开启
   */
  CVMStatus?: number
  /**
   * 1:客户端已安装 0：未安装 2: Agentless
   */
  DefenseModel?: number
  /**
   * 1:已安装 0:未安装
   */
  TatStatus?: number
  /**
   * cpu趋势图
   */
  CpuTrend?: Array<Element>
  /**
   * 内存趋势图
   */
  MemoryTrend?: Array<Element>
  /**
   * 1:agent在线 0:agent离线 2:主机离线
   */
  AgentStatus?: number
  /**
   * 本月防护关闭次数
   */
  CloseDefenseCount?: number
  /**
   * 运行状态
   */
  InstanceState?: string
  /**
   * 安全组数据
   */
  SecurityGroupIds?: Array<string>
  /**
   * 物理内存占用KB
   */
  AgentMemRss?: number
  /**
   * CPU使用率百分比
   */
  AgentCpuPer?: number
  /**
   * cvm真正所属的appid
   */
  RealAppid?: number
  /**
   * 云资产类型：0：腾讯云，1：aws，2：azure
   */
  CloudType?: number
  /**
   * 主机防护状态枚举
0：未安装
1：基础版防护中
2：普惠版防护中
3：专业版防护中
4：旗舰版防护中
5：已离线
6：已关机
   */
  ProtectStatus?: number
  /**
   * 最后离线时间
   */
  OfflineTime?: string
}

/**
 * 资产视角配置风险
 */
export interface AssetViewCFGRisk {
  /**
   * 唯一id
   */
  Id?: string
  /**
   * 配置名
   */
  CFGName?: string
  /**
   * 检查类型
   */
  CheckType?: string
  /**
   * 实例id
   */
  InstanceId?: string
  /**
   * 实例名
   */
  InstanceName?: string
  /**
   * 实例类型
   */
  InstanceType?: string
  /**
   * 影响资产
   */
  AffectAsset?: string
  /**
   * 风险等级，low-低危，high-高危，middle-中危，info-提示，extreme-严重。
   */
  Level?: string
  /**
   * 首次识别时间
   */
  FirstTime?: string
  /**
   * 最近识别时间
   */
  RecentTime?: string
  /**
   * 来源
   */
  From?: string
  /**
   * 状态
   */
  Status?: number
  /**
   * 相关规范
   */
  CFGSTD?: string
  /**
   * 配置详情
   */
  CFGDescribe?: string
  /**
   * 修复建议
   */
  CFGFix?: string
  /**
   * 帮助文档链接
   */
  CFGHelpURL?: string
  /**
   * 前端使用索引
   */
  Index?: string
  /**
   * 用户appid
   */
  AppId?: string
  /**
   * 用户昵称
   */
  Nick?: string
  /**
   * 用户uin
   */
  Uin?: string
  /**
   * 当资产类型为LBL的时候，展示该字段，方便定位具体的LB
   */
  ClbId?: string
}

/**
 * DescribeSubnetAssets请求参数结构体
 */
export interface DescribeSubnetAssetsRequest {
  /**
   * 集团账号的成员id
   */
  MemberId?: Array<string>
  /**
   * 过滤参数
   */
  Filter?: Filter
}

/**
 * DescribeScanReportList请求参数结构体
 */
export interface DescribeScanReportListRequest {
  /**
   * 集团账号的成员id
   */
  MemberId?: Array<string>
  /**
   * 列表过滤条件
   */
  Filter?: Filter
}

/**
 * 告警中心全量告警列表数据
 */
export interface AlertInfo {
  /**
   * 告警ID
   */
  ID?: string
  /**
   * 告警名称
   */
  Name?: string
  /**
   * 告警来源
CFW:云防火墙
WAF:Web应用防火墙
CWP:主机安全
CSIP:云安全中心
   */
  Source?: string
  /**
   * 告警等级
1:提示
2:低危
3:中危
4:高危
5:严重
   */
  Level?: number
  /**
   * 攻击者
   */
  Attacker?: RoleInfo
  /**
   * 受害者
   */
  Victim?: RoleInfo
  /**
   * 证据数据(例如攻击内容等，base64编码)
   */
  EvidenceData?: string
  /**
   * 证据位置(例如协议端口)
   */
  EvidenceLocation?: string
  /**
   * 证据路径
   */
  EvidencePath?: string
  /**
   * 首次告警时间
   */
  CreateTime?: string
  /**
   * 最近告警时间
   */
  UpdateTime?: string
  /**
   * 告警次数
   */
  Count?: number
  /**
   * 紧急缓解建议
   */
  UrgentSuggestion?: string
  /**
   * 根治建议
   */
  RemediationSuggestion?: string
  /**
   * 处理状态
0：未处置，1：已忽略，2：已处置
   */
  Status?: number
  /**
   * 告警处理类型
   */
  ProcessType?: string
  /**
   * 告警大类
   */
  Type?: string
  /**
   * 告警小类
   */
  SubType?: string
  /**
   * 下拉字段
   */
  ExtraInfo?: AlertExtraInfo
  /**
   * 聚合字段
   */
  Key?: string
  /**
   * 告警日期
   */
  Date?: string
  /**
   * appid
   */
  AppID?: string
  /**
   * 账户名称
   */
  NickName?: string
  /**
   * 账户ID
   */
  Uin?: string
  /**
   * 行为
   */
  Action?: number
  /**
   * 风险排查
   */
  RiskInvestigation?: string
  /**
   * 风险处置
   */
  RiskTreatment?: string
  /**
   * 日志类型
   */
  LogType?: string
  /**
   * 语句检索
   */
  LogSearch?: string
}

/**
 * KeyValue对
 */
export interface KeyValue {
  /**
   * 字段
   */
  Key?: string
  /**
   * 值
   */
  Value?: string
}

/**
 * vpc列表数据
 */
export interface Vpc {
  /**
   * 子网(只支持32位)
   */
  Subnet?: number
  /**
   * 互通vpc(只支持32位)
   */
  ConnectedVpc?: number
  /**
   * 资产id
   */
  AssetId?: string
  /**
   * region区域
   */
  Region?: string
  /**
   * 云服务器(只支持32位)
   */
  CVM?: number
  /**
   * 标签
   */
  Tag?: Array<Tag>
  /**
   * dns域名
   */
  DNS?: Array<string>
  /**
   * 资产名称
   */
  AssetName?: string
  /**
   * cidr网段
   */
  CIDR?: string
  /**
   * 资产创建时间
   */
  CreateTime?: string
  /**
   * appid
   */
  AppId?: string
  /**
   * uin
   */
  Uin?: string
  /**
   * 昵称
   */
  Nick?: string
  /**
   * 是否新资产 1新
   */
  IsNewAsset?: number
  /**
   * 是否核心资产1是 2不是
   */
  IsCore?: number
}

/**
 * 端口风险高级配置项
 */
export interface PortRiskAdvanceCFGParamItem {
  /**
   * 端口集合,以逗号分隔
   */
  PortSets: string
  /**
   * 检测项类型，0-系统定义，1-用户自定义
   */
  CheckType: number
  /**
   * 检测项描述
   */
  Detail?: string
  /**
   * 是否启用，1-启用，0-禁用
   */
  Enable?: number
}

/**
 * 用户行为分析 统计条件
 */
export interface StatisticalFilter {
  /**
   * 0:不基于统计检测
1:发生次数高于固定值
2:发生次数高于周期平均值的百分之
3:发生次数高于用户平均值的百分之
   */
  OperatorType: number
  /**
   * 统计值
   */
  Value: number
}

/**
 * 主机资产详情
 */
export interface AssetBaseInfoResponse {
  /**
   * vpc-id
   */
  VpcId?: string
  /**
   * vpc-name
   */
  VpcName?: string
  /**
   * 资产名
   */
  AssetName?: string
  /**
   * 操作系统
   */
  Os?: string
  /**
   * 公网ip
   */
  PublicIp?: string
  /**
   * 内网ip
   */
  PrivateIp?: string
  /**
   * 地域
   */
  Region?: string
  /**
   * 资产类型
   */
  AssetType?: string
  /**
   * 资产id
   */
  AssetId?: string
  /**
   * 账号数量
   */
  AccountNum?: number
  /**
   * 端口数量
   */
  PortNum?: number
  /**
   * 进程数量
   */
  ProcessNum?: number
  /**
   * 软件应用数量
   */
  SoftApplicationNum?: number
  /**
   * 数据库数量
   */
  DatabaseNum?: number
  /**
   * Web应用数量
   */
  WebApplicationNum?: number
  /**
   * 服务数量
   */
  ServiceNum?: number
  /**
   * web框架数量
   */
  WebFrameworkNum?: number
  /**
   * Web站点数量
   */
  WebSiteNum?: number
  /**
   * Jar包数量
   */
  JarPackageNum?: number
  /**
   * 启动服务数量
   */
  StartServiceNum?: number
  /**
   * 计划任务数量
   */
  ScheduledTaskNum?: number
  /**
   * 环境变量数量
   */
  EnvironmentVariableNum?: number
  /**
   * 内核模块数量
   */
  KernelModuleNum?: number
  /**
   * 系统安装包数量
   */
  SystemInstallationPackageNum?: number
  /**
   * 剩余防护时长
   */
  SurplusProtectDay?: number
  /**
   * 客户端是否安装  1 已安装 0 未安装
   */
  CWPStatus?: number
  /**
   * 标签
   */
  Tag?: Array<Tag>
  /**
   * 防护等级
   */
  ProtectLevel?: string
  /**
   * 防护时长
   */
  ProtectedDay?: number
}

/**
 * DescribeVULRiskDetail请求参数结构体
 */
export interface DescribeVULRiskDetailRequest {
  /**
   * 集团账号的成员id
   */
  MemberId?: Array<string>
  /**
   * 风险id
   */
  RiskId?: string
  /**
   * pcMgrId
   */
  PCMGRId?: string
}

/**
 * 漏洞和资产信息
 */
export interface DataSearchBug {
  /**
   * 返回查询状态
   */
  StateCode?: string
  /**
   * 漏洞详情
   */
  DataBug?: Array<BugInfoDetail>
  /**
   * 漏洞影响资产详情
   */
  DataAsset?: Array<AssetInfoDetail>
  /**
   * true支持扫描。false不支持扫描
   */
  VSSScan?: boolean
  /**
   * 0不支持，1支持
   */
  CWPScan?: string
  /**
   * 1支持虚拟补丁，0或空不支持
   */
  CFWPatch?: string
  /**
   * 0不支持，1支持
   */
  WafPatch?: number
  /**
   * 0不支持，1支持
   */
  CWPFix?: number
  /**
   * 产品支持状态
   */
  DataSupport?: Array<ProductSupport>
  /**
   * cveId
   */
  CveId?: string
}

/**
 * 集团账号成员详情
 */
export interface OrganizationUserInfo {
  /**
   * 成员账号Uin
   */
  Uin?: string
  /**
   * 成员账号名称
   */
  NickName?: string
  /**
   * 部门节点名称，账号所属部门
   */
  NodeName?: string
  /**
   * 资产数量
   */
  AssetCount?: number
  /**
   * 风险数量
   */
  RiskCount?: number
  /**
   * 攻击数量
   */
  AttackCount?: number
  /**
   * Member/Admin/;成员或者管理员
   */
  Role?: string
  /**
   * 成员账号id
   */
  MemberId?: string
  /**
   * 成员账号Appid
   */
  AppId?: string
  /**
   * 账号加入方式,create/invite
   */
  JoinType?: string
  /**
   * 空则未开启，否则不同字符串对应不同版本，common为通用，不区分版本
   */
  CFWProtect?: string
  /**
   * 空则未开启，否则不同字符串对应不同版本，common为通用，不区分版本
   */
  WAFProtect?: string
  /**
   * 空则未开启，否则不同字符串对应不同版本，common为通用，不区分版本
   */
  CWPProtect?: string
  /**
   * 1启用，0未启用
   */
  Enable?: number
  /**
   * "Free"       //免费版  "Advanced"   //高级版 "Enterprise" //企业版 "Ultimate"   //旗舰版
   */
  CSIPProtect?: string
  /**
   * 1为配额消耗者
   */
  QuotaConsumer?: number
  /**
   * 账户类型，0为腾讯云账户，1为AWS账户
   */
  CloudType?: number
  /**
   * 0为缺省值，1为10分钟，2为1小时，3为24小时
   */
  SyncFrequency?: number
  /**
   * 多云账户是否过期
   */
  IsExpired?: boolean
  /**
   * 多云账户 权限列表
   */
  PermissionList?: Array<string>
  /**
   * 1
   */
  AuthType?: number
  /**
   * 0 腾讯云集团账户
1 腾讯云接入账户
2 非腾讯云
   */
  TcMemberType?: number
  /**
   * 子账号数量
   */
  SubUserCount?: number
  /**
   * 加入方式详细信息
   */
  JoinTypeInfo?: string
}

/**
 * 安全中心资产标签
 */
export interface AssetTag {
  /**
   * 标签的key值,可以是字母、数字、下划线
   */
  TagKey?: string
  /**
   * 标签的vale值,可以是字母、数字、下划线
   */
  TagValue?: string
}

/**
 * 该结构体用来传入告警的key，以更新告警的status
 */
export interface NewAlertKey {
  /**
   * 需要更改的用户appid
   */
  AppId: string
  /**
   * 告警类别
   */
  Type: string
  /**
   * 告警子类别
   */
  SubType: string
  /**
   * 告警来源
   */
  Source: string
  /**
   * 告警名称
   */
  Name: string
  /**
   * 告警key
   */
  Key: string
  /**
   * 时间
   */
  Date: string
  /**
   * 状态
   */
  Status?: number
}

/**
 * ip列表
 */
export interface IpAssetListVO {
  /**
   * 资产id
   */
  AssetId?: string
  /**
   * 资产name
   */
  AssetName?: string
  /**
   * 资产类型
   */
  AssetType?: string
  /**
   * 地域
   */
  Region?: string
  /**
   * 云防状态
   */
  CFWStatus?: number
  /**
   * 资产创建时间
   */
  AssetCreateTime?: string
  /**
   * 公网ip
   */
  PublicIp?: string
  /**
   * 公网ip类型
   */
  PublicIpType?: number
  /**
   * vpc
   */
  VpcId?: string
  /**
   * vpc名
   */
  VpcName?: string
  /**
   * appid
   */
  AppId?: number
  /**
   * 用户uin
   */
  Uin?: string
  /**
   * 名称
   */
  NickName?: string
  /**
   * 核心
   */
  IsCore?: number
  /**
   * 云上
   */
  IsCloud?: number
  /**
   * 网络攻击
   */
  Attack?: number
  /**
   * 网络访问
   */
  Access?: number
  /**
   * 网络拦截
   */
  Intercept?: number
  /**
   * 入向带宽
   */
  InBandwidth?: string
  /**
   * 出向带宽
   */
  OutBandwidth?: string
  /**
   * 入向流量
   */
  InFlow?: string
  /**
   * 出向流量
   */
  OutFlow?: string
  /**
   * 最近扫描时间
   */
  LastScanTime?: string
  /**
   * 端口风险
   */
  PortRisk?: number
  /**
   * 漏洞风险
   */
  VulnerabilityRisk?: number
  /**
   * 配置风险
   */
  ConfigurationRisk?: number
  /**
   * 扫描任务
   */
  ScanTask?: number
  /**
   * 弱口令
   */
  WeakPassword?: number
  /**
   * 内容风险
   */
  WebContentRisk?: number
  /**
   * 标签
   */
  Tag?: Array<Tag>
  /**
   * eip主键
   */
  AddressId?: string
  /**
   * memberid信息
   */
  MemberId?: string
  /**
   * 风险服务暴露
   */
  RiskExposure?: number
  /**
   * 是否新资产 1新
   */
  IsNewAsset?: number
  /**
   * 资产认证状态，0-待认证，1-认证成功，2-认证中，3+-认证失败
   */
  VerifyStatus?: number
}

/**
 * 用户行为分析  自定义策略结构体
 */
export interface UebaCustomRule {
  /**
   * 策略名称
   */
  RuleName: string
  /**
   * 1: 云账号
2: 自定义用户
   */
  UserType: number
  /**
   * 发生时间
1：10分钟
2：1小时
3：一天
4：一周
5：一个月
   */
  TimeInterval: number
  /**
   * 发生事件
   */
  EventContent: UebaEventContent
  /**
   * 告警名称
   */
  AlertName: string
  /**
   * 告警类型
0:  提示
1:  低危
2:  中危
3:  高危
4:  严重
   */
  AlterLevel: number
  /**
   * 操作者
   */
  Operator: Array<string>
  /**
   * 操作对象
   */
  OperateObject: Array<string>
  /**
   * 操作方式
   */
  OperateMethod: Array<string>
  /**
   * 日志类型
   */
  LogType?: string
  /**
   * 日志中文名
   */
  LogTypeStr?: string
}

/**
 * DescribeClusterAssets请求参数结构体
 */
export interface DescribeClusterAssetsRequest {
  /**
   * 集团账号的成员id
   */
  MemberId?: Array<string>
  /**
   * 过滤
   */
  Filter?: Filter
}

/**
 * DescribeTopAttackInfo返回参数结构体
 */
export interface DescribeTopAttackInfoResponse {
  /**
   * Top攻击类型/攻击者次数
   */
  TopAttackInfo?: Array<TagCount>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeVULRiskDetail返回参数结构体
 */
export interface DescribeVULRiskDetailResponse {
  /**
   * 安全产品支持情况
   */
  ServiceSupport?: Array<ServiceSupport>
  /**
   * 漏洞趋势
   */
  VulTrend?: Array<VulTrend>
  /**
   * 漏洞补充信息
   */
  VulData?: VULRiskInfo
  /**
   * 小助手问答id
   */
  QuestionId?: string
  /**
   * 会话id
   */
  SessionId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDomainAssets请求参数结构体
 */
export interface DescribeDomainAssetsRequest {
  /**
   * 集团账号的成员id
   */
  MemberId?: Array<string>
  /**
   * 过滤器参数
   */
  Filter?: Filter
  /**
   * 安全中心自定义标签
   */
  Tags?: Array<AssetTag>
}

/**
 * ModifyRiskCenterScanTask返回参数结构体
 */
export interface ModifyRiskCenterScanTaskResponse {
  /**
   * 任务id
   */
  TaskId?: string
  /**
   * 0，修改成功，其他失败；-1为存在资产未认证
   */
  Status?: number
  /**
   * 未认证资产列表
   */
  UnAuthAsset?: Array<string>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeRiskCenterAssetViewCFGRiskList请求参数结构体
 */
export interface DescribeRiskCenterAssetViewCFGRiskListRequest {
  /**
   * 集团账号的成员id
   */
  MemberId?: Array<string>
  /**
   * 过滤内容
   */
  Filter?: Filter
  /**
   * 资产标签
   */
  Tags?: Array<AssetTag>
}

/**
 * DescribeRiskCenterWebsiteRiskList返回参数结构体
 */
export interface DescribeRiskCenterWebsiteRiskListResponse {
  /**
   * 总条数
   */
  TotalCount?: number
  /**
   * 内容风险列表
   */
  Data?: Array<WebsiteRisk>
  /**
   * 状态列表
   */
  StatusLists?: Array<FilterDataObject>
  /**
   * 危险等级列表
   */
  LevelLists?: Array<FilterDataObject>
  /**
   * 资产类型列表
   */
  InstanceTypeLists?: Array<FilterDataObject>
  /**
   * 风险类型列表
   */
  DetectEngineLists?: Array<FilterDataObject>
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
   * 标签名称
   */
  Name: string
  /**
   * 标签内容
   */
  Value: string
}

/**
 * ModifyRiskCenterRiskStatus返回参数结构体
 */
export interface ModifyRiskCenterRiskStatusResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * UpdateAlertStatusList返回参数结构体
 */
export interface UpdateAlertStatusListResponse {
  /**
   * 结果信息
   */
  Msg?: string
  /**
   * 结果代码
   */
  Code?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteDomainAndIp请求参数结构体
 */
export interface DeleteDomainAndIpRequest {
  /**
   * 集团账号的成员id
   */
  MemberId?: Array<string>
  /**
   * 资产
   */
  Content?: Array<PublicIpDomainListKey>
  /**
   * 是否保留路径配置，1：保留，其他：不保留，默认不传为不保留
   */
  RetainPath?: number
  /**
   * 以后是否忽略该资产，，1：忽略，其他：不忽略，默认不传为忽略
   */
  IgnoreAsset?: number
  /**
   * 资产标签
   */
  Tags?: Array<AssetTag>
  /**
   * 删除类型，取值： ALL， 删除全部，将直接忽略Content的内容；                                           其他值 ,非全部，则Centent必填，  默认为其他值。
   */
  Type?: string
}

/**
 * DescribeNICAssets请求参数结构体
 */
export interface DescribeNICAssetsRequest {
  /**
   * 集团账号的成员id
   */
  MemberId?: Array<string>
  /**
   * 过滤参数
   */
  Filter?: Filter
}

/**
 * DescribeScanTaskList请求参数结构体
 */
export interface DescribeScanTaskListRequest {
  /**
   * 集团账号的成员id
   */
  MemberId?: Array<string>
  /**
   * 过滤内容
   */
  Filter?: Filter
  /**
   * 标签
   */
  Tags?: Array<Tags>
}

/**
 * DescribeOrganizationInfo请求参数结构体
 */
export interface DescribeOrganizationInfoRequest {
  /**
   * 集团账号的成员id
   */
  MemberId?: Array<string>
}

/**
 * 任务ID列表Key
 */
export interface TaskIdListKey {
  /**
   * 任务ID
   */
  TaskId: string
}

/**
 * 告警数据攻击者或受害者信息
 */
export interface RoleInfo {
  /**
   * IP
   */
  IP?: string
  /**
   * HostIP
   */
  HostIP?: string
  /**
   * 原始IP
   */
  OriginIP?: string
  /**
   * 端口
   */
  Port?: number
  /**
   * 资产ID
   */
  InstanceID?: string
  /**
   * 城市
   */
  City?: string
  /**
   * 省份
   */
  Province?: string
  /**
   * 国家
   */
  Country?: string
  /**
   * 地址
   */
  Address?: string
  /**
   * 纬度
   */
  Latitude?: string
  /**
   * 经度
   */
  Longitude?: string
  /**
   * 信息
   */
  Info?: string
  /**
   * 域名
   */
  Domain?: string
  /**
   * 企业名称
   */
  Name?: string
  /**
   * 账号
   */
  Account?: string
  /**
   * 家族团伙
   */
  Family?: string
  /**
   * 病毒名
   */
  VirusName?: string
  /**
   * MD5值
   */
  MD5?: string
  /**
   * 恶意进程文件名
   */
  FileName?: string
  /**
   * 1:主机资产 2:域名资产 3:网络资产
   */
  AssetType?: number
  /**
   * 来源日志分析的信息字段
   */
  FromLogAnalysisData?: Array<KeyValue>
  /**
   * 容器名
   */
  ContainerName?: string
  /**
   * 容器ID
   */
  ContainerID?: string
}

/**
 * DescribeUebaRule返回参数结构体
 */
export interface DescribeUebaRuleResponse {
  /**
   * 总数
   */
  TotalCount?: number
  /**
   * 策略列表
   */
  Data?: Array<UebaRule>
  /**
   * 自定义策略对应的告警类别枚举
   */
  AlterType?: Array<FilterDataObject>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 用户行为分析 发生事件结构体
 */
export interface UebaEventContent {
  /**
   * 发生事件类型
1:语句检索
2:过滤检索
   */
  EventType: number
  /**
   * 语句检索内容
   */
  Content?: string
  /**
   * 检索条件

   */
  Filters?: Array<WhereFilter>
  /**
   * 统计条件
   */
  StatisticalFilter?: StatisticalFilter
}

/**
 * 网关资产
 */
export interface GateWayAsset {
  /**
   * appid
   */
  AppId?: string
  /**
   * uin
   */
  Uin?: string
  /**
   * 资产ID
   */
  AssetId?: string
  /**
   * 资产名
   */
  AssetName?: string
  /**
   * 资产类型
   */
  AssetType?: string
  /**
   * 私有ip
   */
  PrivateIp?: string
  /**
   * 公网ip
   */
  PublicIp?: string
  /**
   * 区域
   */
  Region?: string
  /**
   * 私有网络id
   */
  VpcId?: string
  /**
   * 私有网络名
   */
  VpcName?: string
  /**
   * 标签
   */
  Tag?: Array<Tag>
  /**
   * 出向峰值带宽
   */
  OutboundPeakBandwidth?: string
  /**
   * 入向峰值带宽
   */
  InboundPeakBandwidth?: string
  /**
   * 出站累计流量
   */
  OutboundCumulativeFlow?: string
  /**
   * 入站累计流量
   */
  InboundCumulativeFlow?: string
  /**
   * 网络攻击
   */
  NetworkAttack?: number
  /**
   * 暴露端口
   */
  ExposedPort?: number
  /**
   * 暴露漏洞
   */
  ExposedVUL?: number
  /**
   * 配置风险
   */
  ConfigureRisk?: number
  /**
   * 创建时间
   */
  CreateTime?: string
  /**
   * 任务数
   */
  ScanTask?: number
  /**
   * 最后扫描时间
   */
  LastScanTime?: string
  /**
   * 昵称
   */
  Nick?: string
  /**
   * ipv6地址
   */
  AddressIPV6?: string
  /**
   * 是否核心
   */
  IsCore?: number
  /**
   * 风险服务暴露
   */
  RiskExposure?: number
  /**
   * 是否新资产 1新
   */
  IsNewAsset?: number
  /**
   * 网关状态
   */
  Status?: string
  /**
   * TSE的网关真实地域
   */
  EngineRegion?: string
}

/**
 * ModifyUebaRuleSwitch请求参数结构体
 */
export interface ModifyUebaRuleSwitchRequest {
  /**
   * 策略ID
   */
  RuleID: string
  /**
   * 开关状态
   */
  Status: boolean
  /**
   * 集团账号的成员id
   */
  MemberId?: Array<string>
}

/**
 * DescribeScanReportList返回参数结构体
 */
export interface DescribeScanReportListResponse {
  /**
   * 总条数
   */
  TotalCount?: number
  /**
   * 任务日志列表
   */
  Data?: Array<ScanTaskInfo>
  /**
   * 主账户ID列表
   */
  UINList?: Array<string>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeSearchBugInfo请求参数结构体
 */
export interface DescribeSearchBugInfoRequest {
  /**
   * 1的时候返回应急漏洞，2的时候返回应急漏洞列表，3的时候搭配输入CVEId字段展示该漏洞数据
   */
  Id: string
  /**
   * id=3时传入该参数
   */
  CVEId?: string
}

/**
 * 报告pdf下载的临时链接
 */
export interface TaskLogURL {
  /**
   * 报告下载临时链接
   */
  URL?: string
  /**
   * 任务报告id
   */
  LogId?: string
  /**
   * 任务报告名称
   */
  TaskLogName?: string
  /**
   * APP ID
   */
  AppId?: string
}

/**
 * 资产视角的漏洞风险对象
 */
export interface AssetViewVULRiskData {
  /**
   * 影响资产
   */
  AffectAsset?: string
  /**
   * 风险等级，low-低危，high-高危，middle-中危，info-提示，extreme-严重。
   */
  Level?: string
  /**
   * 资产类型
   */
  InstanceType?: string
  /**
   * 组件
   */
  Component?: string
  /**
   * 最近识别时间
   */
  RecentTime?: string
  /**
   * 首次识别时间
   */
  FirstTime?: string
  /**
   * 状态，0未处理、1标记已处置、2已忽略，3已处置 ，4 处置中 ，5 检测中 ，6部分已处置
   */
  Status?: number
  /**
   * 风险ID
   */
  RiskId?: string
  /**
   * 实例id
   */
  InstanceId?: string
  /**
   * 实例名
   */
  InstanceName?: string
  /**
   * 用户appid
   */
  AppId?: string
  /**
   * 用户昵称
   */
  Nick?: string
  /**
   * 用户uin
   */
  Uin?: string
  /**
   * 漏洞类型
   */
  VULType?: string
  /**
   * 端口
   */
  Port?: string
  /**
   * 漏洞影响组件
   */
  AppName?: string
  /**
   * 漏洞影响版本
   */
  AppVersion?: string
  /**
   * 风险点
   */
  VULURL?: string
  /**
   * 漏洞名称
   */
  VULName?: string
  /**
   * cve
   */
  CVE?: string
  /**
   * pocid
   */
  POCId?: string
  /**
   * 扫描来源
   */
  From?: string
  /**
   * 主机版本
   */
  CWPVersion?: number
  /**
   * 实例uuid
   */
  InstanceUUID?: string
  /**
   * 攻击载荷
   */
  Payload?: string
  /**
   * 应急漏洞类型，1-应急漏洞，0-非应急漏洞
   */
  EMGCVulType?: number
  /**
   * CVSS评分
   */
  CVSS?: number
  /**
   * 前端索引id
   */
  Index?: string
  /**
   * pcmgrId
   */
  PCMGRId?: string
  /**
   * 报告id
   */
  LogId?: string
  /**
   * 任务id
   */
  TaskId?: string
  /**
   * 漏洞标签
   */
  VulTag?: Array<string>
  /**
   * 漏洞披露时间
   */
  DisclosureTime?: string
  /**
   * 攻击热度
   */
  AttackHeat?: number
  /**
   * 是否必修漏洞1是，0不是
   */
  IsSuggest?: number
  /**
   * 处置任务ID
   */
  HandleTaskId?: string
  /**
   * 引擎来源
   */
  EngineSource?: string
  /**
   * 新的漏洞风险id(同全网漏洞表的riskid)
   */
  VulRiskId?: string
  /**
   * 新版漏洞id
   */
  TvdID?: string
  /**
   * 是否可以一键体检，1-可以，0-不可以
   */
  IsOneClick?: number
}

/**
 * DescribeOrganizationUserInfo返回参数结构体
 */
export interface DescribeOrganizationUserInfoResponse {
  /**
   * 总条数
   */
  TotalCount?: number
  /**
   * 集团用户列表
   */
  Data?: Array<OrganizationUserInfo>
  /**
   * 加入方式枚举
   */
  JoinTypeLst?: Array<FilterDataObject>
  /**
   * 云厂商枚举
   */
  CloudTypeLst?: Array<FilterDataObject>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 网卡资产
 */
export interface NICAsset {
  /**
   * appid
   */
  AppId?: string
  /**
   * uin
   */
  Uin?: string
  /**
   * 资产ID
   */
  AssetId?: string
  /**
   * 资产名
   */
  AssetName?: string
  /**
   * 资产类型
   */
  AssetType?: string
  /**
   * 私有ip
   */
  PrivateIp?: string
  /**
   * 公网ip
   */
  PublicIp?: string
  /**
   * 区域
   */
  Region?: string
  /**
   * 私有网络id
   */
  VpcId?: string
  /**
   * 私有网络名
   */
  VpcName?: string
  /**
   * 标签
   */
  Tag?: Array<Tag>
  /**
   * 出向峰值带宽
   */
  OutboundPeakBandwidth?: string
  /**
   * 入向峰值带宽
   */
  InboundPeakBandwidth?: string
  /**
   * 出站累计流量
   */
  OutboundCumulativeFlow?: string
  /**
   * 入站累计流量
   */
  InboundCumulativeFlow?: string
  /**
   * 网络攻击
   */
  NetworkAttack?: number
  /**
   * 暴露端口
   */
  ExposedPort?: number
  /**
   * 暴露漏洞
   */
  ExposedVUL?: number
  /**
   * 配置风险
   */
  ConfigureRisk?: number
  /**
   * 创建时间
   */
  CreateTime?: string
  /**
   * 任务数
   */
  ScanTask?: number
  /**
   * 最后扫描时间
   */
  LastScanTime?: string
  /**
   * 昵称
   */
  Nick?: string
  /**
   * 是否核心
   */
  IsCore?: number
  /**
   * 是否新资产 1新
   */
  IsNewAsset?: number
}

/**
 * 集团账号详情
 */
export interface OrganizationInfo {
  /**
   * 成员账号名称
   */
  NickName?: string
  /**
   * 部门节点名称，账号所属部门
   */
  NodeName?: string
  /**
   * Member/Admin/DelegatedAdmin/EntityAdmin; 成员/管理员/委派管理员/主体管理员
   */
  Role?: string
  /**
   * 成员账号id
   */
  MemberId?: string
  /**
   * 账号加入方式,create/invite
   */
  JoinType?: string
  /**
   * 集团名称
   */
  GroupName?: string
  /**
   * 管理员账号名称
   */
  AdminName?: string
  /**
   * 管理员Uin
   */
  AdminUin?: string
  /**
   * 创建时间
   */
  CreateTime?: string
  /**
   * 部门数
   */
  NodeCount?: number
  /**
   * 成员数
   */
  MemberCount?: number
  /**
   * 子账号数
   */
  SubAccountCount?: number
  /**
   * 异常子账号数量
   */
  AbnormalSubUserCount?: number
  /**
   * 集团关系策略权限
   */
  GroupPermission?: Array<string>
  /**
   * 成员关系策略权限
   */
  MemberPermission?: Array<string>
  /**
   * 集团付费模式；0/自付费，1/代付费
   */
  GroupPayMode?: number
  /**
   * 个人付费模式；0/自付费，1/代付费
   */
  MemberPayMode?: number
  /**
   * 空则未开启，否则不同字符串对应不同版本，common为通用，不区分版本
   */
  CFWProtect?: string
  /**
   * 空则未开启，否则不同字符串对应不同版本，common为通用，不区分版本
   */
  WAFProtect?: string
  /**
   * 空则未开启，否则不同字符串对应不同版本，common为通用，不区分版本
   */
  CWPProtect?: string
  /**
   * 所有部门的集合数组
   */
  Departments?: Array<string>
  /**
   * 成员创建时间
   */
  MemberCreateTime?: string
  /**
   * Advanced/Enterprise/Ultimate
   */
  CSIPProtect?: string
  /**
   * 1表示配额消耗方
   */
  QuotaConsumer?: number
  /**
   * 管理员/委派管理员 已开启数量
   */
  EnableAdminCount?: number
  /**
   * 账户多云信息统计，数组形式，具体参考CloudCountDesc描述
   */
  CloudCountDesc?: Array<CloudCountDesc>
  /**
   * 管理员/委派管理员 总数量
   */
  AdminCount?: number
}

/**
 * DescribeListenerList返回参数结构体
 */
export interface DescribeListenerListResponse {
  /**
   * 总数
   */
  Total?: number
  /**
   * 监听器列表
   */
  Data?: Array<ClbListenerListInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * db资产输出字段
 */
export interface DBAssetVO {
  /**
   * 资产id
   */
  AssetId?: string
  /**
   * 资产名
   */
  AssetName?: string
  /**
   * 资产类型
   */
  AssetType?: string
  /**
   * vpcid
   */
  VpcId?: string
  /**
   * vpc标签
   */
  VpcName?: string
  /**
   * 地域
   */
  Region?: string
  /**
   * 域名
   */
  Domain?: string
  /**
   * 资产创建时间
   */
  AssetCreateTime?: string
  /**
   * 最近扫描时间
   */
  LastScanTime?: string
  /**
   * 配置风险
   */
  ConfigurationRisk?: number
  /**
   * 网络攻击
   */
  Attack?: number
  /**
   * 网络访问
   */
  Access?: number
  /**
   * 扫描任务
   */
  ScanTask?: number
  /**
   * 用户appid
   */
  AppId?: number
  /**
   * 用户uin
   */
  Uin?: string
  /**
   * 昵称别名
   */
  NickName?: string
  /**
   * 端口
   */
  Port?: number
  /**
   * 标签
   */
  Tag?: Array<Tag>
  /**
   * 内网ip
   */
  PrivateIp?: string
  /**
   * 公网ip
   */
  PublicIp?: string
  /**
   * 状态
   */
  Status?: number
  /**
   * 是否核心
   */
  IsCore?: number
  /**
   * 是否新资产: 1新
   */
  IsNewAsset?: number
}

/**
 * 资产扫描结构细节
 */
export interface AssetInfoDetail {
  /**
   * 用户appid
   */
  AppID?: string
  /**
   * CVE编号
   */
  CVEId?: string
  /**
   * 是扫描，0默认未扫描，1正在扫描，2扫描完成，3扫描出错
   */
  IsScan?: number
  /**
   * 影响资产数目
   */
  InfluenceAsset?: number
  /**
   * 未修复资产数目
   */
  NotRepairAsset?: number
  /**
   * 未防护资产数目
   */
  NotProtectAsset?: number
  /**
   * 任务ID
   */
  TaskId?: string
  /**
   * 任务百分比
   */
  TaskPercent?: number
  /**
   * 任务时间
   */
  TaskTime?: number
  /**
   * 扫描时间
   */
  ScanTime?: string
}

/**
 * 子网资产
 */
export interface SubnetAsset {
  /**
   * appid
   */
  AppId?: string
  /**
   * uin
   */
  Uin?: string
  /**
   * 资产ID
   */
  AssetId?: string
  /**
   * 资产名
   */
  AssetName?: string
  /**
   * 区域
   */
  Region?: string
  /**
   * 私有网络id
   */
  VpcId?: string
  /**
   * 私有网络名
   */
  VpcName?: string
  /**
   * 标签
   */
  Tag?: Array<Tag>
  /**
   * 昵称
   */
  Nick?: string
  /**
   * cidr
   */
  CIDR?: string
  /**
   * 可用区
   */
  Zone?: string
  /**
   * cvm数
   */
  CVM?: number
  /**
   * 可用ip数
   */
  AvailableIp?: number
  /**
   * 创建时间
   */
  CreateTime?: string
  /**
   * 配置风险
   */
  ConfigureRisk?: number
  /**
   * 任务数
   */
  ScanTask?: number
  /**
   * 最后扫描时间
   */
  LastScanTime?: string
  /**
   * 是否核心
   */
  IsCore?: number
  /**
   * 是否新资产 1新
   */
  IsNewAsset?: number
}

/**
 * CreateRiskCenterScanTask返回参数结构体
 */
export interface CreateRiskCenterScanTaskResponse {
  /**
   * 任务id
   */
  TaskId?: string
  /**
   * 0,任务创建成功；小于0失败；-1为存在资产未认证
   */
  Status?: number
  /**
   * 未认证资产列表
   */
  UnAuthAsset?: Array<string>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeSubnetAssets返回参数结构体
 */
export interface DescribeSubnetAssetsResponse {
  /**
   * 列表
   */
  Data?: Array<SubnetAsset>
  /**
   * 总数
   */
  TotalCount?: number
  /**
   * 地域列表
   */
  RegionList?: Array<FilterDataObject>
  /**
   * vpc列表
   */
  VpcList?: Array<FilterDataObject>
  /**
   * appid列表
   */
  AppIdList?: Array<FilterDataObject>
  /**
   * 可用区列表
   */
  ZoneList?: Array<FilterDataObject>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeRiskCenterAssetViewPortRiskList请求参数结构体
 */
export interface DescribeRiskCenterAssetViewPortRiskListRequest {
  /**
   * 集团账号的成员id
   */
  MemberId?: Array<string>
  /**
   * 过滤内容
   */
  Filter?: Filter
  /**
   * 资产标签
   */
  Tags?: Array<AssetTag>
}

/**
 * StopRiskCenterTask返回参数结构体
 */
export interface StopRiskCenterTaskResponse {
  /**
   * Status为0， 停止成功
   */
  Status?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeOrganizationInfo返回参数结构体
 */
export interface DescribeOrganizationInfoResponse {
  /**
   * 总条数
   */
  TotalCount?: number
  /**
   * 集团用户列表
   */
  Data?: Array<OrganizationInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeVpcAssets请求参数结构体
 */
export interface DescribeVpcAssetsRequest {
  /**
   * 集团账号的成员id
   */
  MemberId?: Array<string>
  /**
   * 过滤参数
   */
  Filter?: Filter
}

/**
 * 任务资产项
 */
export interface TaskAssetObject {
  /**
   * 资产名
   */
  AssetName?: string
  /**
   * 资产类型
   */
  InstanceType?: string
  /**
   * 资产分类
   */
  AssetType?: string
  /**
   * ip/域名/资产id，数据库id等
   */
  Asset?: string
  /**
   * 地域
   */
  Region?: string
  /**
   * 多云资产唯一id
   */
  Arn?: string
}

/**
 * db资产详情
 */
export interface DbAssetInfo {
  /**
   * 云防状态
   */
  CFWStatus?: number
  /**
   * 资产id
   */
  AssetId?: string
  /**
   * vpc信息
   */
  VpcName?: string
  /**
   * 资产类型
   */
  AssetType?: string
  /**
   * 公网ip
   */
  PublicIp?: string
  /**
   * 私网ip
   */
  PrivateIp?: string
  /**
   * 地域
   */
  Region?: string
  /**
   * vpc信息
   */
  VpcId?: string
  /**
   * 资产名
   */
  AssetName?: string
  /**
   * 云防保护版本
   */
  CFWProtectLevel?: number
  /**
   * tag信息
   */
  Tag?: Array<Tag>
}

/**
 * ModifyRiskCenterRiskStatus请求参数结构体
 */
export interface ModifyRiskCenterRiskStatusRequest {
  /**
   * 风险资产相关数据
   */
  RiskStatusKeys: Array<RiskCenterStatusKey>
  /**
   * 处置状态，1为已处置、2为已忽略，3为取消已处置，4为取消已忽略
   */
  Status: number
  /**
   * 风险类型，0-端口风险， 1-漏洞风险，2-弱口令风险， 3-网站内容风险，4-配置风险，5-风险服务暴露
   */
  Type: number
  /**
   * 集团账号的成员id
   */
  MemberId?: Array<string>
}

/**
 * 风险中心状态处理Key
 */
export interface RiskCenterStatusKey {
  /**
   * 风险ID
   */
  Id: string
  /**
   * 公网IP/域名
   */
  PublicIPDomain?: string
  /**
   * 实例ID
   */
  InstanceId?: string
  /**
   * APP ID
   */
  AppId?: string
}

/**
 * DescribeRiskCenterAssetViewWeakPasswordRiskList请求参数结构体
 */
export interface DescribeRiskCenterAssetViewWeakPasswordRiskListRequest {
  /**
   * 集团账号的成员id
   */
  MemberId?: Array<string>
  /**
   * 过滤内容
   */
  Filter?: Filter
  /**
   * 资产标签
   */
  Tags?: Array<AssetTag>
}

/**
 * 公网IP和域名资产列表key
 */
export interface PublicIpDomainListKey {
  /**
   * 资产值
   */
  Asset: string
}

/**
 * DescribeTopAttackInfo请求参数结构体
 */
export interface DescribeTopAttackInfoRequest {
  /**
   * 集团账号的成员id
   */
  MemberId?: Array<string>
  /**
   * 被调用的集团账号的成员id
   */
  OperatedMemberId?: Array<string>
}

/**
 * 漏洞信息产品支持状态
 */
export interface ProductSupport {
  /**
   * true支持扫描。false不支持扫描
   */
  VSSScan?: boolean
  /**
   * 0不支持，1支持
   */
  CWPScan?: string
  /**
   * 1支持虚拟补丁，0或空不支持
   */
  CFWPatch?: string
  /**
   * 0不支持，1支持
   */
  WafPatch?: number
  /**
   * 0不支持，1支持
   */
  CWPFix?: number
  /**
   * cveid
   */
  CveId?: string
}

/**
 * DescribeCVMAssets返回参数结构体
 */
export interface DescribeCVMAssetsResponse {
  /**
   * 总数
   */
  Total?: number
  /**
   * 机器列表
   */
  Data?: Array<CVMAssetVO>
  /**
   * 地域列表
   */
  RegionList?: Array<FilterDataObject>
  /**
   * 防护状态
   */
  DefenseStatusList?: Array<FilterDataObject>
  /**
   * vpc枚举
   */
  VpcList?: Array<FilterDataObject>
  /**
   * 资产类型枚举
   */
  AssetTypeList?: Array<FilterDataObject>
  /**
   * 操作系统枚举
   */
  SystemTypeList?: Array<FilterDataObject>
  /**
   * ip列表
   */
  IpTypeList?: Array<FilterDataObject>
  /**
   * appid列表
   */
  AppIdList?: Array<FilterDataObject>
  /**
   * 可用区列表
   */
  ZoneList?: Array<FilterDataObject>
  /**
   * os列表
   */
  OsList?: Array<FilterDataObject>
  /**
   * 资产类型和实例类型的对应关系
   */
  AssetMapInstanceTypeList?: Array<AssetInstanceTypeMap>
  /**
   * 公网内网枚举
   */
  PublicPrivateAttr?: Array<FilterDataObject>
  /**
   * 主机防护状态
   */
  ProtectStatusList?: Array<FilterDataObject>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 漏洞影响组件信息
 */
export interface VulImpactComponentInfo {
  /**
   * 组件名称
   */
  Component?: string
  /**
   * 版本名称
   */
  Version?: string
}

/**
 * 漏洞风险高级配置列表
 */
export interface VULRiskAdvanceCFGList {
  /**
   * 风险ID
   */
  RiskId?: string
  /**
   * 漏洞名称
   */
  VULName?: string
  /**
   * 风险等级，low-低危，high-高危，middle-中危，info-提示，extreme-严重。
   */
  RiskLevel?: string
  /**
   * 识别来源
   */
  CheckFrom?: string
  /**
   * 是否启用，1-启用，0-禁用
   */
  Enable?: number
  /**
   * 风险类型
   */
  VULType?: string
  /**
   * 影响版本
   */
  ImpactVersion?: string
  /**
   * CVE
   */
  CVE?: string
  /**
   * 漏洞标签
   */
  VULTag?: Array<string>
  /**
   * 修复方式
   */
  FixMethod?: Array<string>
  /**
   * 披露时间
   */
  ReleaseTime?: string
  /**
   * 应急漏洞类型，1-应急漏洞，0-非应急漏洞
   */
  EMGCVulType?: number
  /**
   * 漏洞描述
   */
  VULDescribe?: string
  /**
   * 影响组件
   */
  ImpactComponent?: string
  /**
   * 漏洞Payload
   */
  Payload?: string
  /**
   * 技术参考
   */
  References?: string
  /**
   * cvss评分
   */
  CVSS?: string
  /**
   * 攻击热度
   */
  AttackHeat?: string
  /**
   * 安全产品支持情况
   */
  ServiceSupport?: Array<ServiceSupport>
  /**
   * 最新检测时间
   */
  RecentScanTime?: string
}

/**
 * 过滤条件
 */
export interface WhereFilter {
  /**
   * 过滤的项
   */
  Name: string
  /**
   * 过滤的值
   */
  Values: Array<string>
  /**
   * 中台定义：
1等于 2大于 3小于 4大于等于 5小于等于 6不等于 9模糊匹配 13非模糊匹配 14按位与
精确匹配填 7 模糊匹配填9 

   */
  OperatorType?: number
}

/**
 * 子账号详情
 */
export interface SubUserInfo {
  /**
   * 主键ID，无业务意义
仅作为唯一键
   */
  ID?: number
  /**
   * 子账号Appid
   */
  AppID?: string
  /**
   * 子账号UIn
   */
  Uin?: string
  /**
   * 子账号名称
   */
  NickName?: string
  /**
   * 主账号Appid
   */
  OwnerAppID?: string
  /**
   * 主账号Uin
   */
  OwnerUin?: string
  /**
   * 主账号名称
   */
  OwnerNickName?: string
  /**
   * 所属主账号memberid
   */
  OwnerMemberID?: string
  /**
   * 账户类型，0为腾讯云账户，1为AWS账户
   */
  CloudType?: number
  /**
   * 可访问服务数量
   */
  ServiceCount?: number
  /**
   * 可访问接口数量
   */
  InterfaceCount?: number
  /**
   * 可访问资源数量
   */
  AssetCount?: number
  /**
   * 访问/行为日志数量
   */
  LogCount?: number
  /**
   * 权限配置风险
   */
  ConfigRiskCount?: number
  /**
   * 危险行为告警
   */
  ActionRiskCount?: number
  /**
   * 是否接入云审计日志
   */
  IsAccessCloudAudit?: boolean
  /**
   * 是否配置风险的安全体检
   */
  IsAccessCheck?: boolean
  /**
   * 是否配置用户行为管理策略
   */
  IsAccessUeba?: boolean
}

/**
 * 多云账户统计信息
 */
export interface CloudCountDesc {
  /**
   * 0表示腾讯云
1表示AWS
   */
  CloudType?: number
  /**
   * 账户数量
   */
  CloudCount?: number
  /**
   * 该云账号类型描述
   */
  CloudDesc?: string
}

/**
 * DescribePublicIpAssets请求参数结构体
 */
export interface DescribePublicIpAssetsRequest {
  /**
   * 集团账号的成员id
   */
  MemberId?: Array<string>
  /**
   * 过滤器参数
   */
  Filter?: Filter
  /**
   * 安全中心自定义标签
   */
  Tags?: Array<AssetTag>
}

/**
 * 集群pod列表
 */
export interface AssetClusterPod {
  /**
   * 租户id
   */
  AppId?: number
  /**
   * 租户uin
   */
  Uin?: string
  /**
   * 租户昵称
   */
  Nick?: string
  /**
   * 地域
   */
  Region?: string
  /**
   * pod id
   */
  AssetId?: string
  /**
   * pod名称
   */
  AssetName?: string
  /**
   * pod创建时间
   */
  InstanceCreateTime?: string
  /**
   * 命名空间
   */
  Namespace?: string
  /**
   * 状态
   */
  Status?: string
  /**
   * 集群id
   */
  ClusterId?: string
  /**
   * 集群名称
   */
  ClusterName?: string
  /**
   * 主机id
   */
  MachineId?: string
  /**
   * 主机名
   */
  MachineName?: string
  /**
   * pod ip
   */
  PodIp?: string
  /**
   * 关联service数
   */
  ServiceCount?: number
  /**
   * 关联容器数
   */
  ContainerCount?: number
  /**
   * 公网ip
   */
  PublicIp?: string
  /**
   * 内网ip
   */
  PrivateIp?: string
  /**
   * 是否核心：1:核心，2:非核心
   */
  IsCore?: number
  /**
   * 是否新资产 1新
   */
  IsNewAsset?: number
}

/**
 * DescribeCVMAssetInfo请求参数结构体
 */
export interface DescribeCVMAssetInfoRequest {
  /**
   * 资产id
   */
  AssetId: string
}

/**
 * 资产视角的弱口令风险
 */
export interface AssetViewWeakPassRisk {
  /**
   * 影响资产
   */
  AffectAsset?: string
  /**
   * 风险等级，low-低危，high-高危，middle-中危，info-提示，extreme-严重。
   */
  Level?: string
  /**
   * 资产类型
   */
  InstanceType?: string
  /**
   * 组件
   */
  Component?: string
  /**
   * 服务
   */
  Service?: string
  /**
   * 最近识别时间
   */
  RecentTime?: string
  /**
   * 首次识别时间
   */
  FirstTime?: string
  /**
   * 状态，0未处理、1已处置、2已忽略
   */
  Status?: number
  /**
   * ID，处理风险使用
   */
  Id?: string
  /**
   * 前端索引
   */
  Index?: string
  /**
   * 实例id
   */
  InstanceId?: string
  /**
   * 实例名
   */
  InstanceName?: string
  /**
   * 用户appid
   */
  AppId?: string
  /**
   * 用户昵称
   */
  Nick?: string
  /**
   * 用户uin
   */
  Uin?: string
  /**
   * 弱口令类型
   */
  PasswordType?: string
  /**
   * 来源
   */
  From?: string
  /**
   * 漏洞类型
   */
  VULType?: string
  /**
   * 漏洞url
   */
  VULURL?: string
  /**
   * 修复建议
   */
  Fix?: string
  /**
   * 证明
   */
  Payload?: string
}

/**
 * 网站风险对象
 */
export interface WebsiteRisk {
  /**
   * 影响资产
   */
  AffectAsset?: string
  /**
   * 风险等级，low-低危，high-高危，middle-中危，info-提示，extreme-严重。
   */
  Level?: string
  /**
   * 最近识别时间
   */
  RecentTime?: string
  /**
   * 首次识别时间
   */
  FirstTime?: string
  /**
   * 状态，0未处理、1已处置、2已忽略
   */
  Status?: number
  /**
   * ID,处理风险使用
   */
  Id?: string
  /**
   * 前端索引
   */
  Index?: string
  /**
   * 实例id
   */
  InstanceId?: string
  /**
   * 实例名
   */
  InstanceName?: string
  /**
   * 用户appid
   */
  AppId?: string
  /**
   * 用户昵称
   */
  Nick?: string
  /**
   * 用户uin
   */
  Uin?: string
  /**
   * 风险链接
   */
  URL?: string
  /**
   * 风险文件地址
   */
  URLPath?: string
  /**
   * 实例类型
   */
  InstanceType?: string
  /**
   * 类型
   */
  DetectEngine?: string
  /**
   * 结果描述
   */
  ResultDescribe?: string
  /**
   * 源地址url
   */
  SourceURL?: string
  /**
   * 源文件地址
   */
  SourceURLPath?: string
}

/**
 * 产品支持情况
 */
export interface ServiceSupport {
  /**
   * 产品名称:
"cfw_waf_virtual", "cwp_detect", "cwp_defense", "cwp_fix"
   */
  ServiceName?: string
  /**
   * 已处理的资产总数
   */
  SupportHandledCount?: number
  /**
   * 支持的资产总数
   */
  SupportTotalCount?: number
  /**
   * 是否支持该产品1支持；0不支持
   */
  IsSupport?: boolean
}

/**
 * CreateRiskCenterScanTask请求参数结构体
 */
export interface CreateRiskCenterScanTaskRequest {
  /**
   * 任务名称
   */
  TaskName: string
  /**
   * 0-全扫，1-指定资产扫，2-排除资产扫，3-手动填写扫；1和2则Assets字段必填，3则SelfDefiningAssets必填
   */
  ScanAssetType: number
  /**
   * 扫描项目；port/poc/weakpass/webcontent/configrisk/exposedserver
   */
  ScanItem: Array<string>
  /**
   * 0-周期任务,1-立即扫描,2-定时扫描,3-自定义；0,2,3则ScanPlanContent必填
   */
  ScanPlanType: number
  /**
   * 集团账号的成员id
   */
  MemberId?: Array<string>
  /**
   * 扫描资产信息列表
   */
  Assets?: Array<TaskAssetObject>
  /**
   * 扫描计划详情
   */
  ScanPlanContent?: string
  /**
   * ip/域名/url数组
   */
  SelfDefiningAssets?: Array<string>
  /**
   * 请求发起源，vss表示漏洞扫描服务，云安全中心的用户请填充csip，默认csip
   */
  ScanFrom?: string
  /**
   * 高级配置
   */
  TaskAdvanceCFG?: TaskAdvanceCFG
  /**
   * 体检模式，0-标准模式，1-快速模式，2-高级模式，默认标准模式
   */
  TaskMode?: number
  /**
   * 资产标签
   */
  Tags?: AssetTag
  /**
   * 任务完成回调webhook地址
   */
  FinishWebHook?: string
}

/**
 * DescribeRiskCenterAssetViewCFGRiskList返回参数结构体
 */
export interface DescribeRiskCenterAssetViewCFGRiskListResponse {
  /**
   * 总条数
   */
  TotalCount?: number
  /**
   * 资产视角的配置风险列表
   */
  Data?: Array<AssetViewCFGRisk>
  /**
   * 状态列表
   */
  StatusLists?: Array<FilterDataObject>
  /**
   * 危险等级列表
   */
  LevelLists?: Array<FilterDataObject>
  /**
   * 配置名列表
   */
  CFGNameLists?: Array<FilterDataObject>
  /**
   * 检查类型列表
   */
  CheckTypeLists?: Array<FilterDataObject>
  /**
   * 资产类型列表
   */
  InstanceTypeLists?: Array<FilterDataObject>
  /**
   * 来源列表
   */
  FromLists?: Array<FilterDataObject>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeRiskCenterVULViewVULRiskList返回参数结构体
 */
export interface DescribeRiskCenterVULViewVULRiskListResponse {
  /**
   * 总条数
   */
  TotalCount?: number
  /**
   * 漏洞产视角的漏洞风险列表
   */
  Data?: Array<VULViewVULRisk>
  /**
   * 危险等级列表
   */
  LevelLists?: Array<FilterDataObject>
  /**
   * 来源列表
   */
  FromLists?: Array<FilterDataObject>
  /**
   * 漏洞类型列表
   */
  VULTypeLists?: Array<FilterDataObject>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeRiskCenterVULViewVULRiskList请求参数结构体
 */
export interface DescribeRiskCenterVULViewVULRiskListRequest {
  /**
   * 集团账号的成员id
   */
  MemberId?: Array<string>
  /**
   * 过滤内容
   */
  Filter?: Filter
  /**
   * 资产标签
   */
  Tags?: Array<AssetTag>
}

/**
 * UpdateAlertStatusList请求参数结构体
 */
export interface UpdateAlertStatusListRequest {
  /**
   * 告警ID列表
   */
  ID: Array<NewAlertKey>
  /**
   * 操作类型 
1:撤销处置 
2:标记为已处置 
3:标记忽略 
4:取消标记处置
5:取消标记忽略
   */
  OperateType: number
  /**
   * 集团账号的成员id
   */
  MemberId?: Array<string>
  /**
   * 被调用的集团账号的成员id
   */
  OperatedMemberId?: Array<string>
}

/**
 * 漏洞风险高级配置
 */
export interface TaskCenterVulRiskInputParam {
  /**
   * 风险ID
   */
  RiskId: string
  /**
   * 是否开启，0-不开启，1-开启
   */
  Enable: number
}

/**
 * StopRiskCenterTask请求参数结构体
 */
export interface StopRiskCenterTaskRequest {
  /**
   * 任务id 列表
   */
  TaskIdList: Array<TaskIdListKey>
  /**
   * 集团账号的成员id
   */
  MemberId?: Array<string>
}

/**
 * DescribeScanTaskList返回参数结构体
 */
export interface DescribeScanTaskListResponse {
  /**
   * 总条数
   */
  TotalCount?: number
  /**
   * 任务日志列表
   */
  Data?: Array<ScanTaskInfoList>
  /**
   * 主账户ID列表
   */
  UINList?: Array<string>
  /**
   * 体检模式过滤列表
   */
  TaskModeList?: Array<FilterDataObject>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 扫描任务详情
 */
export interface ScanTaskInfo {
  /**
   * 任务Id
   */
  TaskId?: string
  /**
   * 任务名称
   */
  TaskName?: string
  /**
   * 任务状态码：1等待开始  2正在扫描  3扫描出错 4扫描完成
   */
  Status?: number
  /**
   * 任务进度
   */
  Progress?: number
  /**
   * 任务完成时间
   */
  TaskTime?: string
  /**
   * 报告ID
   */
  ReportId?: string
  /**
   * 报告名称
   */
  ReportName?: string
  /**
   * 扫描计划，0-周期任务,1-立即扫描,2-定时扫描,3-自定义
   */
  ScanPlan?: number
  /**
   * 关联的资产数
   */
  AssetCount?: number
  /**
   * APP ID
   */
  AppId?: string
  /**
   * 用户主账户ID
   */
  UIN?: string
  /**
   * 用户名称
   */
  UserName?: string
}

/**
 * 资产类型和实例类型的映射
 */
export interface AssetInstanceTypeMap {
  /**
   * 资产类型
   */
  Text?: string
  /**
   * 资产类型
   */
  Value?: string
  /**
   * 资产类型和实例类型映射关系
   */
  InstanceTypeList?: Array<FilterDataObject>
}

/**
 * 主机标签信息
 */
export interface Tags {
  /**
   * 主机标签key
   */
  TagKey?: string
  /**
   * 主机标签value
   */
  TagValue?: string
}

/**
 * 漏洞视角的漏洞风险对象
 */
export interface VULViewVULRisk {
  /**
   * 端口
   */
  Port?: string
  /**
   * 影响资产
   */
  NoHandleCount?: number
  /**
   * 风险等级，low-低危，high-高危，middle-中危，info-提示，extreme-严重。
   */
  Level?: string
  /**
   * 组件
   */
  Component?: string
  /**
   * 最近识别时间
   */
  RecentTime?: string
  /**
   * 首次识别时间
   */
  FirstTime?: string
  /**
   * 影响资产数量
   */
  AffectAssetCount?: number
  /**
   * 风险ID
   */
  Id?: string
  /**
   * 扫描来源，具体看接口返回枚举类型
   */
  From?: string
  /**
   * 前端索引
   */
  Index?: string
  /**
   * 漏洞类型
   */
  VULType?: string
  /**
   * 漏洞名
   */
  VULName?: string
  /**
   * cve
   */
  CVE?: string
  /**
   * 描述
   */
  Describe?: string
  /**
   * 漏洞payload
   */
  Payload?: string
  /**
   * 漏洞影响组件
   */
  AppName?: string
  /**
   * 技术参考
   */
  References?: string
  /**
   * 漏洞影响版本
   */
  AppVersion?: string
  /**
   * 风险点
   */
  VULURL?: string
  /**
   * 用户昵称
   */
  Nick?: string
  /**
   * 用户appid
   */
  AppId?: string
  /**
   * 用户uin
   */
  Uin?: string
  /**
   * 修复建议
   */
  Fix?: string
  /**
   * 应急漏洞类型，1-应急漏洞，0-非应急漏洞
   */
  EMGCVulType?: number
}

/**
 * 端口视角的端口风险对象
 */
export interface PortViewPortRisk {
  /**
   * 未处理数量
   */
  NoHandleCount?: number
  /**
   * 风险等级，low-低危，high-高危，middle-中危，info-提示，extreme-严重。
   */
  Level?: string
  /**
   * 协议
   */
  Protocol?: string
  /**
   * 组件
   */
  Component?: string
  /**
   * 端口
   */
  Port?: number
  /**
   * 最近识别时间
   */
  RecentTime?: string
  /**
   * 首次识别时间
   */
  FirstTime?: string
  /**
   * 处置建议,0保持现状、1限制访问、2封禁端口
   */
  Suggestion?: number
  /**
   * 影响资产数量
   */
  AffectAssetCount?: string
  /**
   * ID
   */
  Id?: string
  /**
   * 识别来源
   */
  From?: string
  /**
   * 前端索引
   */
  Index?: string
  /**
   * 用户appid
   */
  AppId?: string
  /**
   * 用户昵称
   */
  Nick?: string
  /**
   * 用户uin
   */
  Uin?: string
  /**
   * 服务
   */
  Service?: string
}

/**
 * 漏洞风险信息
 */
export interface VULRiskInfo {
  /**
   * 修复建议
   */
  Fix?: string
  /**
   * 技术参考/参考链接
   */
  References?: string
  /**
   * 漏洞描述
   */
  Describe?: string
  /**
   * 受影响组件
   */
  ImpactComponent?: Array<VulImpactComponentInfo>
}

/**
 * DescribeClusterPodAssets请求参数结构体
 */
export interface DescribeClusterPodAssetsRequest {
  /**
   * 集团账号的成员id
   */
  MemberId?: Array<string>
  /**
   * 过滤
   */
  Filter?: Filter
}

/**
 * DescribeCVMAssetInfo返回参数结构体
 */
export interface DescribeCVMAssetInfoResponse {
  /**
   * 数据
   */
  Data?: AssetBaseInfoResponse
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribePublicIpAssets返回参数结构体
 */
export interface DescribePublicIpAssetsResponse {
  /**
   * 列表
   */
  Data?: Array<IpAssetListVO>
  /**
   * 总数
   */
  Total?: number
  /**
   * 资产归属地
   */
  AssetLocationList?: Array<FilterDataObject>
  /**
   * ip列表枚举
   */
  IpTypeList?: Array<FilterDataObject>
  /**
   * 地域列表枚举
   */
  RegionList?: Array<FilterDataObject>
  /**
   * 防护枚举
   */
  DefenseStatusList?: Array<FilterDataObject>
  /**
   * 资产类型枚举
   */
  AssetTypeList?: Array<FilterDataObject>
  /**
   * AppId枚举
   */
  AppIdList?: Array<FilterDataObject>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeVulViewVulRiskList请求参数结构体
 */
export interface DescribeVulViewVulRiskListRequest {
  /**
   * 集团账号的成员id
   */
  MemberId?: Array<string>
  /**
   * 过滤内容
   */
  Filter?: Filter
  /**
   * 资产标签
   */
  Tags?: Array<AssetTag>
}

/**
 * DescribeTaskLogURL返回参数结构体
 */
export interface DescribeTaskLogURLResponse {
  /**
   * 返回报告临时下载url
   */
  Data?: Array<TaskLogURL>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 漏洞趋势-攻击趋势、影响用户、影响资产
 */
export interface VulTrend {
  /**
   * 影响的资产数
   */
  AffectAssetCount?: number
  /**
   * 影响的用户数
   */
  AffectUserCount?: number
  /**
   * 攻击数
   */
  AttackCount?: number
  /**
   * 时间
   */
  Date?: string
}

/**
 * ModifyOrganizationAccountStatus返回参数结构体
 */
export interface ModifyOrganizationAccountStatusResponse {
  /**
   * 返回值为0，则修改成功
   */
  Status?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 告警下拉字段
 */
export interface AlertExtraInfo {
  /**
   * 相关攻击事件
   */
  RelateEvent?: RelatedEvent
  /**
   * 泄漏内容
   */
  LeakContent?: string
  /**
   * 泄漏API
   */
  LeakAPI?: string
  /**
   * secretID
   */
  SecretID?: string
  /**
   * 命中规则
   */
  Rule?: string
  /**
   * 规则描述
   */
  RuleDesc?: string
  /**
   * 协议端口
   */
  ProtocolPort?: string
  /**
   * 攻击内容
   */
  AttackContent?: string
  /**
   * 攻击IP画像
   */
  AttackIPProfile?: string
  /**
   * 攻击IP标签
   */
  AttackIPTags?: string
  /**
   * 请求方式
   */
  RequestMethod?: string
  /**
   * HTTP日志
   */
  HttpLog?: string
  /**
   * 被攻击域名
   */
  AttackDomain?: string
  /**
   * 文件路径
   */
  FilePath?: string
  /**
   * user_agent
   */
  UserAgent?: string
  /**
   * 请求头
   */
  RequestHeaders?: string
  /**
   * 登录用户名
   */
  LoginUserName?: string
  /**
   * 漏洞名称
   */
  VulnerabilityName?: string
  /**
   * 公共漏洞和暴露
   */
  CVE?: string
  /**
   * 服务进程
   */
  ServiceProcess?: string
  /**
   * 文件名
   */
  FileName?: string
  /**
   * 文件大小
   */
  FileSize?: string
  /**
   * 文件MD5
   */
  FileMD5?: string
  /**
   * 文件最近访问时间
   */
  FileLastAccessTime?: string
  /**
   * 文件修改时间
   */
  FileModifyTime?: string
  /**
   * 最近访问时间
   */
  RecentAccessTime?: string
  /**
   * 最近修改时间
   */
  RecentModifyTime?: string
  /**
   * 病毒名
   */
  VirusName?: string
  /**
   * 病毒文件标签
   */
  VirusFileTags?: string
  /**
   * 行为特征
   */
  BehavioralCharacteristics?: string
  /**
   * 进程名（PID）
   */
  ProcessNamePID?: string
  /**
   * 进程路径
   */
  ProcessPath?: string
  /**
   * 进程命令行
   */
  ProcessCommandLine?: string
  /**
   * 进程权限
   */
  ProcessPermissions?: string
  /**
   * 执行命令
   */
  ExecutedCommand?: string
  /**
   * 受影响文件名
   */
  AffectedFileName?: string
  /**
   * 诱饵路径
   */
  DecoyPath?: string
  /**
   * 恶意进程文件大小
   */
  MaliciousProcessFileSize?: string
  /**
   * 恶意进程文件MD5
   */
  MaliciousProcessFileMD5?: string
  /**
   * 恶意进程名（PID）
   */
  MaliciousProcessNamePID?: string
  /**
   * 恶意进程路径
   */
  MaliciousProcessPath?: string
  /**
   * 恶意进程启动时间
   */
  MaliciousProcessStartTime?: string
  /**
   * 命令内容
   */
  CommandContent?: string
  /**
   * 启动用户
   */
  StartupUser?: string
  /**
   * 用户所属组
   */
  UserGroup?: string
  /**
   * 新增权限
   */
  NewPermissions?: string
  /**
   * 父进程
   */
  ParentProcess?: string
  /**
   * 类名
   */
  ClassName?: string
  /**
   * 所属类加载器
   */
  ClassLoader?: string
  /**
   * 类文件大小
   */
  ClassFileSize?: string
  /**
   * 类文件MD5
   */
  ClassFileMD5?: string
  /**
   * 父类名
   */
  ParentClassName?: string
  /**
   * 继承接口
   */
  InheritedInterface?: string
  /**
   * 注释
   */
  Comment?: string
  /**
   * 载荷内容
   */
  PayloadContent?: string
  /**
   * 回连地址画像
   */
  CallbackAddressPortrait?: string
  /**
   * 回连地址标签
   */
  CallbackAddressTag?: string
  /**
   * 进程MD5
   */
  ProcessMD5?: string
  /**
   * 文件权限
   */
  FilePermission?: string
  /**
   * 来源于日志分析的信息字段
   */
  FromLogAnalysisData?: Array<KeyValue>
  /**
   * 命中探针
   */
  HitProbe?: string
  /**
   * 命中蜜罐

   */
  HitHoneyPot?: string
  /**
   * 命令列表
   */
  CommandList?: string
  /**
   * 攻击事件描述

   */
  AttackEventDesc?: string
  /**
   * 进程信息
   */
  ProcessInfo?: string
  /**
   * 使用用户名&密码
   */
  UserNameAndPwd?: string
  /**
   * 主机防护策略ID
   */
  StrategyID?: string
  /**
   * 主机防护策略名称
   */
  StrategyName?: string
  /**
   * 主机防护命中策略，是策略ID和策略名称的组合
   */
  HitStrategy?: string
  /**
   * 进程名
   */
  ProcessName?: string
  /**
   * PID
   */
  PID?: string
  /**
   * 容器Pod名
   */
  PodName?: string
  /**
   * 容器PodID
   */
  PodID?: string
  /**
   * Http响应
   */
  Response?: string
  /**
   * 系统调用
   */
  SystemCall?: string
  /**
   * 操作类型verb
   */
  Verb?: string
  /**
   * 日志ID
   */
  LogID?: string
  /**
   * 变更内容
   */
  Different?: string
  /**
   * 事件类型
   */
  EventType?: string
  /**
   * 事件描述
   */
  Description?: string
  /**
   * 目标地址(容器反弹shell)
   */
  TargetAddress?: string
  /**
   * 恶意请求域名(容器恶意外联)
   */
  MaliciousRequestDomain?: string
  /**
   * 规则类型(容器K8sAPI异常请求)
   */
  RuleType?: string
  /**
   * 请求资源(容器K8sAPI异常请求)
   */
  RequestURI?: string
  /**
   * 发起请求用户(容器K8sAPI异常请求)
   */
  RequestUser?: string
  /**
   * 请求对象(容器K8sAPI异常请求)
   */
  RequestObject?: string
  /**
   * 响应对象(容器K8sAPI异常请求)
   */
  ResponseObject?: string
  /**
   * 文件类型(容器文件篡改)
   */
  FileType?: string
  /**
   * 标签特征(容器恶意外联)
   */
  TIType?: string
  /**
   * 来源IP(容器K8sAPI异常请求)
   */
  SourceIP?: string
}

/**
 * DescribeDbAssetInfo请求参数结构体
 */
export interface DescribeDbAssetInfoRequest {
  /**
   * 资产id
   */
  AssetId: string
}

/**
 * DescribeAssetViewVulRiskList请求参数结构体
 */
export interface DescribeAssetViewVulRiskListRequest {
  /**
   * 集团账号的成员id
   */
  MemberId?: Array<string>
  /**
   * 过滤内容
   */
  Filter?: Filter
  /**
   * 资产标签
   */
  Tags?: Array<AssetTag>
}

/**
 * DescribeUebaRule请求参数结构体
 */
export interface DescribeUebaRuleRequest {
  /**
   * 集团账号的成员id
   */
  MemberId?: Array<string>
  /**
   * 过滤条件
   */
  Filter?: Filter
}

/**
 * DescribeVulViewVulRiskList返回参数结构体
 */
export interface DescribeVulViewVulRiskListResponse {
  /**
   * 总条数
   */
  TotalCount?: number
  /**
   * 漏洞产视角的漏洞风险列表
   */
  Data?: Array<VULViewVULRiskData>
  /**
   * 危险等级列表
   */
  LevelLists?: Array<FilterDataObject>
  /**
   * 来源列表
   */
  FromLists?: Array<FilterDataObject>
  /**
   * 漏洞类型列表
   */
  VULTypeLists?: Array<FilterDataObject>
  /**
   * tag枚举
   */
  Tags?: Array<FilterDataObject>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 列表查询接口采用新filter 接口，直接传给后台供后台查询过滤
 */
export interface Filter {
  /**
   * 查询数量限制
   */
  Limit?: number
  /**
   * 查询偏移位置
   */
  Offset?: number
  /**
   * 排序采用升序还是降序 升:asc 降 desc
   */
  Order?: string
  /**
   * 需排序的字段
   */
  By?: string
  /**
   * 过滤的列及内容
   */
  Filters?: Array<WhereFilter>
  /**
   * 可填无， 日志使用查询时间
   */
  StartTime?: string
  /**
   * 可填无， 日志使用查询时间
   */
  EndTime?: string
}

/**
 * DescribeRiskCenterWebsiteRiskList请求参数结构体
 */
export interface DescribeRiskCenterWebsiteRiskListRequest {
  /**
   * 集团账号的成员id
   */
  MemberId?: Array<string>
  /**
   * 过滤内容
   */
  Filter?: Filter
  /**
   * 资产标签
   */
  Tags?: Array<AssetTag>
}

/**
 * 风险详情
 */
export interface ServerRiskSuggestion {
  /**
   * 标题
   */
  Title?: string
  /**
   * 详情
   */
  Body?: string
}

/**
 * 资产视角的漏洞风险对象
 */
export interface AssetViewVULRisk {
  /**
   * 影响资产
   */
  AffectAsset?: string
  /**
   * 风险等级，low-低危，high-高危，middle-中危，info-提示，extreme-严重。

   */
  Level?: string
  /**
   * 资产类型
   */
  InstanceType?: string
  /**
   * 组件
   */
  Component?: string
  /**
   * 服务
   */
  Service?: string
  /**
   * 最近识别时间
   */
  RecentTime?: string
  /**
   * 首次识别时间
   */
  FirstTime?: string
  /**
   * 状态，0未处理、1已处置、2已忽略
   */
  Status?: number
  /**
   * 风险ID
   */
  Id?: string
  /**
   * 前端索引
   */
  Index?: string
  /**
   * 实例id
   */
  InstanceId?: string
  /**
   * 实例名
   */
  InstanceName?: string
  /**
   * 用户appid
   */
  AppId?: string
  /**
   * 用户昵称
   */
  Nick?: string
  /**
   * 用户uin
   */
  Uin?: string
  /**
   * 漏洞类型
   */
  VULType?: string
  /**
   * 端口
   */
  Port?: string
  /**
   * 漏洞描述
   */
  Describe?: string
  /**
   * 漏洞影响组件
   */
  AppName?: string
  /**
   * 技术参考
   */
  References?: string
  /**
   * 漏洞影响版本
   */
  AppVersion?: string
  /**
   * 风险点
   */
  VULURL?: string
  /**
   * 漏洞名称
   */
  VULName?: string
  /**
   * cve
   */
  CVE?: string
  /**
   * 修复方案
   */
  Fix?: string
  /**
   * pocid
   */
  POCId?: string
  /**
   * 扫描来源
   */
  From?: string
  /**
   * 主机版本
   */
  CWPVersion?: number
  /**
   * 是否支持修复
   */
  IsSupportRepair?: boolean
  /**
   * 是否支持扫描
   */
  IsSupportDetect?: boolean
  /**
   * 实例uuid
   */
  InstanceUUID?: string
  /**
   * 攻击载荷
   */
  Payload?: string
  /**
   * 应急漏洞类型，1-应急漏洞，0-非应急漏洞
   */
  EMGCVulType?: number
}

/**
 * DescribeClusterPodAssets返回参数结构体
 */
export interface DescribeClusterPodAssetsResponse {
  /**
   * 列表
   */
  Data?: Array<AssetClusterPod>
  /**
   * 总数
   */
  TotalCount?: number
  /**
   * 集群pod状态枚举
   */
  PodStatusList?: Array<FilterDataObject>
  /**
   * 命名空间枚举
   */
  NamespaceList?: Array<FilterDataObject>
  /**
   * 地域枚举
   */
  RegionList?: Array<FilterDataObject>
  /**
   * 租户枚举
   */
  AppIdList?: Array<FilterDataObject>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeCFWAssetStatistics返回参数结构体
 */
export interface DescribeCFWAssetStatisticsResponse {
  /**
   * 网络资产总数
   */
  NetworkTotal?: number
  /**
   * 资产clb数量
   */
  ClbTotal?: number
  /**
   * nat数量
   */
  NatTotal?: number
  /**
   * 公网ip数量
   */
  PublicAssetTotal?: number
  /**
   * 主机数量
   */
  CVMAssetTotal?: number
  /**
   * 配置风险
   */
  CFGTotal?: number
  /**
   * 端口风险
   */
  PortTotal?: number
  /**
   * 内容风险
   */
  WebsiteTotal?: number
  /**
   * 风险服务暴露
   */
  ServerTotal?: number
  /**
   * 弱口令风险
   */
  WeakPasswordTotal?: number
  /**
   * 漏洞风险
   */
  VULTotal?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeGatewayAssets返回参数结构体
 */
export interface DescribeGatewayAssetsResponse {
  /**
   * 列表
   */
  Data?: Array<GateWayAsset>
  /**
   * 总数
   */
  TotalCount?: number
  /**
   * 地域列表
   */
  RegionList?: Array<FilterDataObject>
  /**
   * 资产类型列表
   */
  AssetTypeList?: Array<FilterDataObject>
  /**
   * vpc列表
   */
  VpcList?: Array<FilterDataObject>
  /**
   * appid列表
   */
  AppIdList?: Array<FilterDataObject>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 资产视角的端口风险对象
 */
export interface AssetViewPortRisk {
  /**
   * 端口
   */
  Port?: number
  /**
   * 影响资产
   */
  AffectAsset?: string
  /**
   * 风险等级，low-低危，high-高危，middle-中危，info-提示，extreme-严重。
   */
  Level?: string
  /**
   * 资产类型
   */
  InstanceType?: string
  /**
   * 协议
   */
  Protocol?: string
  /**
   * 组件
   */
  Component?: string
  /**
   * 服务
   */
  Service?: string
  /**
   * 最近识别时间
   */
  RecentTime?: string
  /**
   * 首次识别时间
   */
  FirstTime?: string
  /**
   * 处置建议,0保持现状、1限制访问、2封禁端口
   */
  Suggestion?: number
  /**
   * 状态，0未处理、1已处置、2已忽略
   */
  Status?: number
  /**
   * 风险ID
   */
  Id?: string
  /**
   * 前端索引
   */
  Index?: string
  /**
   * 实例id
   */
  InstanceId?: string
  /**
   * 实例名
   */
  InstanceName?: string
  /**
   * 用户appid
   */
  AppId?: string
  /**
   * 用户昵称
   */
  Nick?: string
  /**
   * 用户uin
   */
  Uin?: string
  /**
   * 识别来源，详细看枚举返回。
   */
  From?: string
}

/**
 * DescribeRiskCenterPortViewPortRiskList请求参数结构体
 */
export interface DescribeRiskCenterPortViewPortRiskListRequest {
  /**
   * 集团账号的成员id
   */
  MemberId?: Array<string>
  /**
   * 过滤内容
   */
  Filter?: Filter
  /**
   * 资产标签
   */
  Tags?: Array<AssetTag>
}

/**
 * DescribeVpcAssets返回参数结构体
 */
export interface DescribeVpcAssetsResponse {
  /**
   * 列表
   */
  Data?: Array<Vpc>
  /**
   * 总数
   */
  TotalCount?: number
  /**
   * vpc列表
   */
  VpcList?: Array<FilterDataObject>
  /**
   * 地域列表
   */
  RegionList?: Array<FilterDataObject>
  /**
   * appid列表
   */
  AppIdList?: Array<FilterDataObject>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeRiskCenterPortViewPortRiskList返回参数结构体
 */
export interface DescribeRiskCenterPortViewPortRiskListResponse {
  /**
   * 总条数
   */
  TotalCount?: number
  /**
   * 端口视角的端口风险列表
   */
  Data?: Array<PortViewPortRisk>
  /**
   * 危险等级列表
   */
  LevelLists?: Array<FilterDataObject>
  /**
   * 处置建议列表
   */
  SuggestionLists?: Array<FilterDataObject>
  /**
   * 来源列表
   */
  FromLists?: Array<FilterDataObject>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteDomainAndIp返回参数结构体
 */
export interface DeleteDomainAndIpResponse {
  /**
   * 删除的资产数量
   */
  Data?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 服务风险
 */
export interface ServerRisk {
  /**
   * 测绘标签
   */
  ServiceTag?: string
  /**
   * 端口
   */
  Port?: number
  /**
   * 影响资产
   */
  AffectAsset?: string
  /**
   * 实例id
   */
  InstanceId?: string
  /**
   * 实例名
   */
  InstanceName?: string
  /**
   * 资产类型
   */
  InstanceType?: string
  /**
   * 风险等级 low:低危 high:高危 middle:中危 info:提示 extreme:严重
   */
  Level?: string
  /**
   * 协议
   */
  Protocol?: string
  /**
   * 组件
   */
  Component?: string
  /**
   * 服务
   */
  Service?: string
  /**
   * 最近识别时间
   */
  RecentTime?: string
  /**
   * 首次识别时间
   */
  FirstTime?: string
  /**
   * 风险详情
   */
  RiskDetails?: string
  /**
   * 处置建议
   */
  Suggestion?: string
  /**
   * 状态，0未处理、1已处置、2已忽略
   */
  Status?: number
  /**
   * 资产唯一id
   */
  Id?: string
  /**
   * 用户appid
   */
  AppId?: string
  /**
   * 用户昵称
   */
  Nick?: string
  /**
   * 用户uin
   */
  Uin?: string
  /**
   * 服务快照
   */
  ServiceSnapshot?: string
  /**
   * 服务访问的url
   */
  Url?: string
  /**
   * 列表索引值
   */
  Index?: string
  /**
   * 风险列表
   */
  RiskList?: Array<ServerRiskSuggestion>
  /**
   * 建议列表
   */
  SuggestionList?: Array<ServerRiskSuggestion>
  /**
   * HTTP响应状态码
   */
  StatusCode?: string
}

/**
 * 报告中的task_id list
 */
export interface ReportTaskIdList {
  /**
   * 任务id列表
   */
  TaskIdList: Array<string>
  /**
   * 租户ID
   */
  AppId?: string
}

/**
 * 用户行为分析策略
 */
export interface UebaRule {
  /**
   * 策略id
   */
  RuleID?: string
  /**
   * 规则名称
   */
  RuleName?: string
  /**
   * 策略类型
0:系统策略
1:自定义策略
   */
  RuleType?: number
  /**
   * 策略等级
0:提示
1:低危
2:中危
3:高危
4:严重
   */
  RuleLevel?: number
  /**
   * 策略内容
   */
  RuleContent?: string
  /**
   * 策略开关
   */
  RuleStatus?: boolean
  /**
   * 命中次数
   */
  HitCount?: number
  /**
   * 所属账号Appid
   */
  AppID?: string
  /**
   * 多账号，成员ID
   */
  MemberID?: string
  /**
   * Uin
   */
  Uin?: string
  /**
   * 昵称
   */
  Nickname?: string
  /**
   * 自定义规则具体内容
   */
  CustomRuleDetail?: UebaCustomRule
  /**
   * 云类型
腾讯云：0
aws：1
   */
  CloudType?: number
}

/**
 * AddNewBindRoleUser返回参数结构体
 */
export interface AddNewBindRoleUserResponse {
  /**
   * 0成功，其他失败
   */
  Status?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 相关攻击事件结构
 */
export interface RelatedEvent {
  /**
   * 事件ID
   */
  EventID?: string
  /**
   * 事件描述
   */
  Description?: string
  /**
   * 与事件关联的告警数量
   */
  RelatedCount?: number
}

/**
 * 漏洞视角的漏洞风险对象
 */
export interface VULViewVULRiskData {
  /**
   * 端口
   */
  Port?: string
  /**
   * 影响资产
   */
  NoHandleCount?: number
  /**
   * 风险等级，low-低危，high-高危，middle-中危，info-提示，extreme-严重。
   */
  Level?: string
  /**
   * 组件
   */
  Component?: string
  /**
   * 最近识别时间
   */
  RecentTime?: string
  /**
   * 首次识别时间
   */
  FirstTime?: string
  /**
   * 影响资产数量
   */
  AffectAssetCount?: number
  /**
   * 风险ID
   */
  RiskId?: string
  /**
   * 扫描来源，具体看接口返回枚举类型
   */
  From?: string
  /**
   * 前端索引
   */
  Index?: string
  /**
   * 漏洞类型
   */
  VULType?: string
  /**
   * 漏洞名
   */
  VULName?: string
  /**
   * cve
   */
  CVE?: string
  /**
   * 漏洞payload
   */
  Payload?: string
  /**
   * 漏洞影响组件
   */
  AppName?: string
  /**
   * 漏洞影响版本
   */
  AppVersion?: string
  /**
   * 风险点
   */
  VULURL?: string
  /**
   * 用户昵称
   */
  Nick?: string
  /**
   * 用户appid
   */
  AppId?: string
  /**
   * 用户uin
   */
  Uin?: string
  /**
   * 应急漏洞类型，1-应急漏洞，0-非应急漏洞
   */
  EMGCVulType?: number
  /**
   * CVSS评分
   */
  CVSS?: number
  /**
   * PCMGRId
   */
  PCMGRId?: string
  /**
   * 漏洞标签。搜索时应急 必修传参VulTag=SuggestRepair/EMGCVul
   */
  VulTag?: Array<string>
  /**
   * 漏洞披露时间
   */
  DisclosureTime?: string
  /**
   * 攻击热度
   */
  AttackHeat?: number
  /**
   * 是否必修漏洞，1-是，0-不是
   */
  IsSuggest?: number
  /**
   * 处置任务id
   */
  HandleTaskId?: string
  /**
   * 引擎来源
   */
  EngineSource?: string
  /**
   * 新的漏洞风险id
   */
  VulRiskId?: string
  /**
   * 新版漏洞id
   */
  TvdID?: string
  /**
   * 是否可以一键体检，1-可以，0-不可以
   */
  IsOneClick?: number
}

/**
 * DescribeAlertList返回参数结构体
 */
export interface DescribeAlertListResponse {
  /**
   * 全量告警列表
   */
  AlertList?: Array<AlertInfo>
  /**
   * 告警大类数量
   */
  AlertTypeCount?: Array<TagCount>
  /**
   * 告警总数
   */
  TotalCount?: number
  /**
   * 0：succeed 1：timeout
   */
  ReturnCode?: number
  /**
   * 返回状态信息
   */
  ReturnMsg?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 扫描任务列表展示信息
 */
export interface ScanTaskInfoList {
  /**
   * 任务名称
   */
  TaskName?: string
  /**
   * 任务开始时间
   */
  StartTime?: string
  /**
   * 任务结束时间
   */
  EndTime?: string
  /**
   * cron格式
   */
  ScanPlanContent?: string
  /**
   * 0-周期任务,1-立即扫描,2-定时扫描,3-自定义
   */
  TaskType?: number
  /**
   * 创建时间
   */
  InsertTime?: string
  /**
   * 任务ID
   */
  TaskId?: string
  /**
   * 自定义指定扫描资产信息
   */
  SelfDefiningAssets?: Array<string>
  /**
   * 预估时间
   */
  PredictTime?: number
  /**
   * 预估完成时间
   */
  PredictEndTime?: string
  /**
   * 报告数量
   */
  ReportNumber?: number
  /**
   * 资产数量
   */
  AssetNumber?: number
  /**
   * 扫描状态, 0-初始值，1-正在扫描，2-扫描完成，3-扫描出错，4-停止扫描
   */
  ScanStatus?: number
  /**
   * 任务进度
   */
  Percent?: number
  /**
   * port/poc/weakpass/webcontent/configrisk
   */
  ScanItem?: string
  /**
   * 0-全扫，1-指定资产扫，2-排除资产扫，3-自定义指定资产扫描
   */
  ScanAssetType?: number
  /**
   * vss子任务id
   */
  VSSTaskId?: string
  /**
   * cspm子任务id
   */
  CSPMTaskId?: string
  /**
   * 主机漏扫子任务id
   */
  CWPPOCId?: string
  /**
   * 主机基线子任务id
   */
  CWPBlId?: string
  /**
   * vss子任务进度
   */
  VSSTaskProcess?: number
  /**
   * cspm子任务进度
   */
  CSPMTaskProcess?: number
  /**
   * 主机漏扫子任务进度
   */
  CWPPOCProcess?: number
  /**
   * 主机基线子任务进度
   */
  CWPBlProcess?: number
  /**
   * 异常状态码
   */
  ErrorCode?: number
  /**
   * 异常信息
   */
  ErrorInfo?: string
  /**
   * 周期任务开始的天数
   */
  StartDay?: number
  /**
   * 扫描频率,单位天,1-每天,7-每周,30-月,0-扫描一次
   */
  Frequency?: number
  /**
   * 完成次数
   */
  CompleteNumber?: number
  /**
   * 已完成资产个数
   */
  CompleteAssetNumber?: number
  /**
   * 风险数
   */
  RiskCount?: number
  /**
   * 资产
   */
  Assets?: Array<TaskAssetObject>
  /**
   * 用户Appid
   */
  AppId?: string
  /**
   * 用户主账户ID
   */
  UIN?: string
  /**
   * 用户名称
   */
  UserName?: string
  /**
   * 体检模式，0-标准模式，1-快速模式，2-高级模式
   */
  TaskMode?: number
  /**
   * 扫描来源
   */
  ScanFrom?: string
  /**
   * 是否限免体检0不是，1是
   */
  IsFree?: number
  /**
   * 是否可以删除，1-可以，0-不可以，对应多账户管理使用
   */
  IsDelete?: number
  /**
   * 任务源类型，0-默认，1-小助手，2-体检项
   */
  SourceType?: number
}

/**
 * DescribeDbAssets请求参数结构体
 */
export interface DescribeDbAssetsRequest {
  /**
   * 集团账号的成员id
   */
  MemberId?: Array<string>
  /**
   * 过滤器参数
   */
  Filter?: Filter
  /**
   * 资产类型:MYSQL/MARIADB/REDIS/MONGODB/POSTGRES/CTS/ES/KAFKA/COS/CBS/CFS
   */
  AssetTypes?: Array<string>
}

/**
 * 任务报告信息
 */
export interface TaskLogInfo {
  /**
   * 报告名称
   */
  TaskLogName?: string
  /**
   * 报告ID
   */
  TaskLogId?: string
  /**
   * 关联资产个数
   */
  AssetsNumber?: number
  /**
   * 安全风险数量
   */
  RiskNumber?: number
  /**
   * 报告生成时间
   */
  Time?: string
  /**
   * 任务状态码：0 初始值  1正在扫描  2扫描完成  3扫描出错，4停止，5暂停，6该任务已被重启过
   */
  Status?: number
  /**
   * 关联任务名称
   */
  TaskName?: string
  /**
   * 扫描开始时间
   */
  StartTime?: string
  /**
   * 任务中心扫描任务ID
   */
  TaskCenterTaskId?: string
  /**
   * 租户ID
   */
  AppId?: string
  /**
   * 主账户ID
   */
  UIN?: string
  /**
   * 用户名称
   */
  UserName?: string
  /**
   * 报告类型： 1安全体检 2日报 3周报 4月报
   */
  ReportType?: number
  /**
   * 报告模板id
   */
  TemplateId?: number
}

/**
 * DescribeVULRiskAdvanceCFGList请求参数结构体
 */
export interface DescribeVULRiskAdvanceCFGListRequest {
  /**
   * 集团账号的成员id
   */
  MemberId?: Array<string>
  /**
   * 任务ID
   */
  TaskId?: string
  /**
   * 过滤条件
   */
  Filter?: Filter
}

/**
 * DescribeRiskCenterAssetViewVULRiskList请求参数结构体
 */
export interface DescribeRiskCenterAssetViewVULRiskListRequest {
  /**
   * 集团账号的成员id
   */
  MemberId?: Array<string>
  /**
   * 过滤内容
   */
  Filter?: Filter
  /**
   * 资产标签
   */
  Tags?: Array<AssetTag>
}

/**
 * 配置风险高级配置
 */
export interface TaskCenterCFGRiskInputParam {
  /**
   * 检测项ID
   */
  ItemId: string
  /**
   * 是否开启，0-不开启，1-开启
   */
  Enable: number
  /**
   * 资源类型
   */
  ResourceType: string
}

/**
 * DescribeAlertList请求参数结构体
 */
export interface DescribeAlertListRequest {
  /**
   * 标签搜索筛选
   */
  Filter: Filter
  /**
   * 集团账号的成员id
   */
  MemberId?: Array<string>
  /**
   * 被调用的集团账号的成员id
   */
  OperatedMemberId?: Array<string>
  /**
   * 0:默认全部 1:资产ID 2:域名
   */
  AssetType?: number
}

/**
 * CreateDomainAndIp请求参数结构体
 */
export interface CreateDomainAndIpRequest {
  /**
   * 公网IP/域名
   */
  Content: Array<string>
  /**
   * 集团账号的成员id
   */
  MemberId?: Array<string>
  /**
   * 资产标签
   */
  Tags?: Array<AssetTag>
}

/**
 * 域名资产
 */
export interface DomainAssetVO {
  /**
   * 资产id
   */
  AssetId?: Array<string>
  /**
   * 资产名
   */
  AssetName?: Array<string>
  /**
   * 资产类型
   */
  AssetType?: Array<string>
  /**
   * 地域
   */
  Region?: Array<string>
  /**
   * Waf状态
   */
  WAFStatus?: number
  /**
   * 资产创建时间
   */
  AssetCreateTime?: string
  /**
   * Appid
   */
  AppId?: number
  /**
   * 账号id
   */
  Uin?: string
  /**
   * 账号名称
   */
  NickName?: string
  /**
   * 是否核心
   */
  IsCore?: number
  /**
   * 是否云上资产
   */
  IsCloud?: number
  /**
   * 网络攻击
   */
  Attack?: number
  /**
   * 网络访问
   */
  Access?: number
  /**
   * 网络拦截
   */
  Intercept?: number
  /**
   * 入站峰值带宽
   */
  InBandwidth?: string
  /**
   * 出站峰值带宽
   */
  OutBandwidth?: string
  /**
   * 入站累计流量
   */
  InFlow?: string
  /**
   * 出站累计流量
   */
  OutFlow?: string
  /**
   * 最近扫描时间
   */
  LastScanTime?: string
  /**
   * 端口风险
   */
  PortRisk?: number
  /**
   * 漏洞风险
   */
  VulnerabilityRisk?: number
  /**
   * 配置风险
   */
  ConfigurationRisk?: number
  /**
   * 扫描任务
   */
  ScanTask?: number
  /**
   * 域名
   */
  SubDomain?: string
  /**
   * 解析ip
   */
  SeverIp?: Array<string>
  /**
   * bot攻击数量
   */
  BotCount?: number
  /**
   * 弱口令风险
   */
  WeakPassword?: number
  /**
   * 内容风险
   */
  WebContentRisk?: number
  /**
   * tag标签
   */
  Tag?: Array<Tag>
  /**
   * 关联实例类型
   */
  SourceType?: string
  /**
   * memberiD
   */
  MemberId?: string
  /**
   * cc攻击
   */
  CCAttack?: number
  /**
   * web攻击
   */
  WebAttack?: number
  /**
   * 风险服务暴露数量
   */
  ServiceRisk?: number
  /**
   * 是否新资产 1新
   */
  IsNewAsset?: number
  /**
   * 待确认资产的随机三级域名
   */
  VerifyDomain?: string
  /**
   * 待确认资产的TXT记录内容
   */
  VerifyTXTRecord?: string
  /**
   * 待确认资产的认证状态，0-待认证，1-认证成功，2-认证中，3-txt认证失败，4-人工认证失败
   */
  VerifyStatus?: number
  /**
   * bot访问数量
   */
  BotAccessCount?: number
}

/**
 * DescribeSearchBugInfo返回参数结构体
 */
export interface DescribeSearchBugInfoResponse {
  /**
   * 漏洞信息和资产信息
   */
  Data?: DataSearchBug
  /**
   * 状态值，0：查询成功，非0：查询失败
   */
  ReturnCode?: number
  /**
   * 状态信息，success：查询成功，fail：查询失败
   */
  ReturnMsg?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyOrganizationAccountStatus请求参数结构体
 */
export interface ModifyOrganizationAccountStatusRequest {
  /**
   * 修改集团账号状态，1 开启， 2关闭
   */
  Status: number
  /**
   * 集团账号的成员id
   */
  MemberId?: Array<string>
}

/**
 * DescribeClusterAssets返回参数结构体
 */
export interface DescribeClusterAssetsResponse {
  /**
   * 列表
   */
  Data?: Array<AssetCluster>
  /**
   * 总数
   */
  TotalCount?: number
  /**
   * 集群类型枚举
   */
  ClusterTypeList?: Array<FilterDataObject>
  /**
   * 集群状态枚举
   */
  ClusterStatusList?: Array<FilterDataObject>
  /**
   * 组件状态枚举
   */
  ComponentStatusList?: Array<FilterDataObject>
  /**
   * 私有网络枚举
   */
  VpcList?: Array<FilterDataObject>
  /**
   * 地域枚举
   */
  RegionList?: Array<FilterDataObject>
  /**
   * 租户枚举
   */
  AppIdList?: Array<FilterDataObject>
  /**
   * 集群防护状态枚举
   */
  ProtectStatusList?: Array<FilterDataObject>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeSubUserInfo返回参数结构体
 */
export interface DescribeSubUserInfoResponse {
  /**
   * 总数
   */
  TotalCount?: number
  /**
   * 子用户列表
   */
  Data?: Array<SubUserInfo>
  /**
   * 厂商枚举列表
   */
  CloudTypeLst?: Array<FilterDataObject>
  /**
   * 所属主账号appid枚举
   */
  OwnerAppIDLst?: Array<FilterDataObject>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 漏洞详细信息
 */
export interface BugInfoDetail {
  /**
   * 漏洞编号
   */
  Id?: number
  /**
   * 漏洞对应pocId
   */
  PatchId?: string
  /**
   * 漏洞名称
   */
  VULName?: string
  /**
   * 漏洞严重性：high,middle，low，info
   */
  Level?: string
  /**
   * cvss评分
   */
  CVSSScore?: string
  /**
   * cve编号
   */
  CVEId?: string
  /**
   * 漏洞标签
   */
  Tag?: string
  /**
   * 漏洞种类，1:web应用，2:系统组件漏洞，3:配置风险
   */
  VULCategory?: number
  /**
   * 漏洞影响系统
   */
  ImpactOs?: string
  /**
   * 漏洞影响组件
   */
  ImpactCOMPENT?: string
  /**
   * 漏洞影响版本
   */
  ImpactVersion?: string
  /**
   * 链接
   */
  Reference?: string
  /**
   * 漏洞描述
   */
  VULDescribe?: string
  /**
   * 修复建议
   */
  Fix?: string
  /**
   * 产品支持状态，实时返回
   */
  ProSupport?: number
  /**
   * 是否公开，0为未发布，1为发布
   */
  IsPublish?: number
  /**
   * 释放时间
   */
  ReleaseTime?: string
  /**
   * 创建时间
   */
  CreateTime?: string
  /**
   * 更新时间
   */
  UpdateTime?: string
  /**
   * 漏洞子类别
   */
  SubCategory?: string
}

/**
 * 产品日志条数
 */
export interface TagCount {
  /**
   * 产品名
   */
  Name?: string
  /**
   * 日志条数
   */
  Count?: number
}

/**
 * DescribeDomainAssets返回参数结构体
 */
export interface DescribeDomainAssetsResponse {
  /**
   * 总数
   */
  Total?: number
  /**
   * 域名列表
   */
  Data?: Array<DomainAssetVO>
  /**
   * 防护状态列表
   */
  DefenseStatusList?: Array<FilterDataObject>
  /**
   * 资产归属地列表
   */
  AssetLocationList?: Array<FilterDataObject>
  /**
   * 资产类型列表
   */
  SourceTypeList?: Array<FilterDataObject>
  /**
   * 地域列表
   */
  RegionList?: Array<FilterDataObject>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDbAssets返回参数结构体
 */
export interface DescribeDbAssetsResponse {
  /**
   * 总数
   */
  Total?: number
  /**
   * 资产总数
   */
  Data?: Array<DBAssetVO>
  /**
   * 地域枚举
   */
  RegionList?: Array<FilterDataObject>
  /**
   * 资产类型枚举
   */
  AssetTypeList?: Array<FilterDataObject>
  /**
   * Vpc枚举
   */
  VpcList?: Array<FilterDataObject>
  /**
   * Appid枚举
   */
  AppIdList?: Array<FilterDataObject>
  /**
   * 公网内网枚举
   */
  PublicPrivateAttr?: Array<FilterDataObject>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeNICAssets返回参数结构体
 */
export interface DescribeNICAssetsResponse {
  /**
   * 列表
   */
  Data?: Array<NICAsset>
  /**
   * 总数
   */
  TotalCount?: number
  /**
   * 地域列表
   */
  RegionList?: Array<FilterDataObject>
  /**
   * 资产类型列表
   */
  AssetTypeList?: Array<FilterDataObject>
  /**
   * vpc列表
   */
  VpcList?: Array<FilterDataObject>
  /**
   * appid列表
   */
  AppIdList?: Array<FilterDataObject>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeRiskCenterAssetViewVULRiskList返回参数结构体
 */
export interface DescribeRiskCenterAssetViewVULRiskListResponse {
  /**
   * 总条数
   */
  TotalCount?: number
  /**
   * 资产视角的漏洞风险列表
   */
  Data?: Array<AssetViewVULRisk>
  /**
   * 状态列表
   */
  StatusLists?: Array<FilterDataObject>
  /**
   * 危险等级列表
   */
  LevelLists?: Array<FilterDataObject>
  /**
   * 来源列表
   */
  FromLists?: Array<FilterDataObject>
  /**
   * 漏洞类型列表
   */
  VULTypeLists?: Array<FilterDataObject>
  /**
   * 资产类型列表
   */
  InstanceTypeLists?: Array<FilterDataObject>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeCVMAssets请求参数结构体
 */
export interface DescribeCVMAssetsRequest {
  /**
   * 集团账号的成员id
   */
  MemberId?: Array<string>
  /**
   * 过滤器参数
   */
  Filter?: Filter
}

/**
 * DescribeRiskCenterServerRiskList请求参数结构体
 */
export interface DescribeRiskCenterServerRiskListRequest {
  /**
   * 集团账号的成员id
   */
  MemberId?: Array<string>
  /**
   * 过滤内容
   */
  Filter?: Filter
  /**
   * 资产标签
   */
  Tags?: Array<AssetTag>
}

/**
 * DescribeTaskLogList请求参数结构体
 */
export interface DescribeTaskLogListRequest {
  /**
   * 集团账号的成员id
   */
  MemberId?: Array<string>
  /**
   * 过滤内容
   */
  Filter?: Filter
}

/**
 * ModifyRiskCenterScanTask请求参数结构体
 */
export interface ModifyRiskCenterScanTaskRequest {
  /**
   * 任务名称
   */
  TaskName: string
  /**
   * 0-全扫，1-指定资产扫，2-排除资产扫，3-手动填写扫；1和2则Assets字段必填，3则SelfDefiningAssets必填
   */
  ScanAssetType: number
  /**
   * 扫描项目；port/poc/weakpass/webcontent/configrisk
   */
  ScanItem: Array<string>
  /**
   * 0-周期任务,1-立即扫描,2-定时扫描,3-自定义；0,2,3则ScanPlanContent必填
   */
  ScanPlanType: number
  /**
   * 要修改的任务id
   */
  TaskId: string
  /**
   * 集团账号的成员id
   */
  MemberId?: Array<string>
  /**
   * 扫描资产信息列表
   */
  Assets?: Array<TaskAssetObject>
  /**
   * 扫描计划详情
   */
  ScanPlanContent?: string
  /**
   * ip/域名/url数组
   */
  SelfDefiningAssets?: Array<string>
  /**
   * 高级配置
   */
  TaskAdvanceCFG?: TaskAdvanceCFG
  /**
   * 体检模式，0-标准模式，1-快速模式，2-高级模式，默认标准模式
   */
  TaskMode?: number
  /**
   * 任务完成回调webhook地址
   */
  FinishWebHook?: string
}

/**
 * clb实例和监听器信息
 */
export interface ClbListenerListInfo {
  /**
   * 监听器id
   */
  ListenerId?: string
  /**
   * 监听器名称
   */
  ListenerName?: string
  /**
   * 负载均衡Id
   */
  LoadBalancerId?: string
  /**
   * 负载均衡名称
   */
  LoadBalancerName?: string
  /**
   * 协议
   */
  Protocol?: string
  /**
   * 地域
   */
  Region?: string
  /**
   * 负载均衡ip
   */
  Vip?: string
  /**
   * 端口
   */
  VPort?: number
  /**
   * 区域
   */
  Zone?: string
  /**
   * 私有网络id
   */
  NumericalVpcId?: number
  /**
   * 负载均衡类型
   */
  LoadBalancerType?: string
  /**
   * 监听器域名
   */
  Domain?: string
  /**
   * 负载均衡域名
   */
  LoadBalancerDomain?: string
}

/**
 * 统计条目
 */
export interface Element {
  /**
   * 统计类型
   */
  Key?: string
  /**
   * 统计对象
   */
  Value?: string
}

/**
 * DescribeRiskCenterServerRiskList返回参数结构体
 */
export interface DescribeRiskCenterServerRiskListResponse {
  /**
   * 总条数
   */
  TotalCount?: number
  /**
   * 风险服务列表
   */
  Data?: Array<ServerRisk>
  /**
   * 资产类型枚举
   */
  InstanceTypeLists?: Array<FilterDataObject>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeListenerList请求参数结构体
 */
export interface DescribeListenerListRequest {
  /**
   * 集团账号的成员id
   */
  MemberId?: Array<string>
  /**
   * 过滤器参数
   */
  Filter?: Filter
}

/**
 * DeleteRiskScanTask返回参数结构体
 */
export interface DeleteRiskScanTaskResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeGatewayAssets请求参数结构体
 */
export interface DescribeGatewayAssetsRequest {
  /**
   * 集团账号的成员id
   */
  MemberId?: Array<string>
  /**
   * 过滤参数
   */
  Filter?: Filter
}

/**
 * DescribeCFWAssetStatistics请求参数结构体
 */
export type DescribeCFWAssetStatisticsRequest = null

/**
 * 集群列表

集群防护状态，左边枚举,右边为显示
集群防护状态 
0:未接入
1:未防护 
2:部分防护 
3:防护中 
4:接入异常 
5:接入中 
6:卸载中 
7:卸载异常
 */
export interface AssetCluster {
  /**
   * 租户id
   */
  AppId?: number
  /**
   * 租户uin
   */
  Uin?: string
  /**
   * 租户昵称
   */
  Nick?: string
  /**
   * 地域
   */
  Region?: string
  /**
   * 集群id
   */
  AssetId?: string
  /**
   * 集群名称
   */
  AssetName?: string
  /**
   * 集群类型
   */
  AssetType?: string
  /**
   * 集群创建时间
   */
  InstanceCreateTime?: string
  /**
   * 状态
   */
  Status?: string
  /**
   * 集群防护状态，左边枚举,右边为显示
集群防护状态 
0:未接入
1:未防护 
2:部分防护 
3:防护中 
4:接入异常 
5:接入中 
6:卸载中 
7:卸载异常
   */
  ProtectStatus?: number
  /**
   * 接入信息，不为空表示有接入异常信息
   */
  ProtectInfo?: string
  /**
   * 私有网络id
   */
  VpcId?: string
  /**
   * 私有网络名称
   */
  VpcName?: string
  /**
   * kubernetes版本
   */
  KubernetesVersion?: string
  /**
   * 运行时组件
   */
  Component?: string
  /**
   * 运行时组件版本
   */
  ComponentVersion?: string
  /**
   * 组件状态
   */
  ComponentStatus?: string
  /**
   * 体检时间
   */
  CheckTime?: string
  /**
   * 关联主机数
   */
  MachineCount?: number
  /**
   * 关联pod数
   */
  PodCount?: number
  /**
   * 关联service数
   */
  ServiceCount?: number
  /**
   * 漏洞风险
   */
  VulRisk?: number
  /**
   * 配置风险
   */
  CFGRisk?: number
  /**
   * 体检数
   */
  CheckCount?: number
  /**
   * 是否核心：1:核心，2:非核心
   */
  IsCore?: number
  /**
   * 是否新资产 1新
   */
  IsNewAsset?: number
  /**
   * 云资产类型：0：腾讯云，1：aws，2：azure
   */
  CloudType?: number
}

/**
 * CreateDomainAndIp返回参数结构体
 */
export interface CreateDomainAndIpResponse {
  /**
   * 返回创建成功的数量
   */
  Data?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeTaskLogList返回参数结构体
 */
export interface DescribeTaskLogListResponse {
  /**
   * 总条数
   */
  TotalCount?: number
  /**
   * 报告列表
   */
  Data?: Array<TaskLogInfo>
  /**
   * 待查看数量
   */
  NotViewNumber?: number
  /**
   * 报告模板数
   */
  ReportTemplateNumber?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeSubUserInfo请求参数结构体
 */
export interface DescribeSubUserInfoRequest {
  /**
   * 集团账号的成员id
   */
  MemberId?: Array<string>
  /**
   * 过滤内容
   */
  Filter?: Filter
}

/**
 * DescribeRiskCenterAssetViewPortRiskList返回参数结构体
 */
export interface DescribeRiskCenterAssetViewPortRiskListResponse {
  /**
   * 总条数
   */
  TotalCount?: number
  /**
   * 资产视角的配置风险列表
   */
  Data?: Array<AssetViewPortRisk>
  /**
   * 状态列表
   */
  StatusLists?: Array<FilterDataObject>
  /**
   * 危险等级列表
   */
  LevelLists?: Array<FilterDataObject>
  /**
   * 建议列表
   */
  SuggestionLists?: Array<FilterDataObject>
  /**
   * 资产类型列表
   */
  InstanceTypeLists?: Array<FilterDataObject>
  /**
   * 来源列表
   */
  FromLists?: Array<FilterDataObject>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeTaskLogURL请求参数结构体
 */
export interface DescribeTaskLogURLRequest {
  /**
   * 0: 预览， 1: 下载
   */
  Type: number
  /**
   * 集团账号的成员id
   */
  MemberId?: Array<string>
  /**
   * 任务报告Id 列表
   */
  ReportItemKeyList?: Array<ReportItemKey>
  /**
   * 报告中任务id列表
   */
  ReportTaskIdList?: Array<ReportTaskIdList>
}

/**
 * AddNewBindRoleUser请求参数结构体
 */
export type AddNewBindRoleUserRequest = null
