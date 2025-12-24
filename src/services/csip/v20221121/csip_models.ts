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
   * 任务id 和目标AppID列表
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
 * 风险中心风险概览统计数据
 */
export interface CsipRiskCenterStatistics {
  /**
   * 端口风险总数
   */
  PortTotal?: number
  /**
   * 端口风险高危数量
   */
  PortHighLevel?: number
  /**
   * 	弱口令风险总数
   */
  WeakPasswordTotal?: number
  /**
   * 弱口令风险高危数量
   */
  WeakPasswordHighLevel?: number
  /**
   * 网站风险数量
   */
  WebsiteTotal?: number
  /**
   * 网站高危风险数量
   */
  WebsiteHighLevel?: number
  /**
   * 最新的扫描时间
   */
  LastScanTime?: string
  /**
   * 漏洞风险数
   */
  VULTotal?: number
  /**
   * 高危漏洞风险数
   */
  VULHighLevel?: number
  /**
   * 配置项风险数量
   */
  CFGTotal?: number
  /**
   * 高危配置项风险数量
   */
  CFGHighLevel?: number
  /**
   * 测绘服务风险数量
注意：此字段可能返回 null，表示取不到有效值。
   */
  ServerTotal?: number
  /**
   * 测绘服务高危数量
注意：此字段可能返回 null，表示取不到有效值。
   */
  ServerHighLevel?: number
  /**
   * 主机基线风险数量
   */
  HostBaseLineRiskTotal?: number
  /**
   * 主机基线高危风险数量
   */
  HostBaseLineRiskHighLevel?: number
  /**
   * 容器基线风险数量
   */
  PodBaseLineRiskTotal?: number
  /**
   * 容器基线高危风险数量
   */
  PodBaseLineRiskHighLevel?: number
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
 * CSPM规范
 */
export interface StandardItem {
  /**
   * 规范ID
   */
  ID?: number
  /**
   * 规范名称
   */
  Name?: string
}

/**
 * 高危基线风险内容
 */
export interface HighBaseLineRiskItem {
  /**
   * 云账号ID
   */
  CloudAccountID?: string
  /**
   * 实例ID
   */
  AssetID?: string
  /**
   * 实例状态
   */
  InstanceStatus?: string
  /**
   * 实例名称
   */
  InstanceName?: string
  /**
   * 风险名称
   */
  RiskName?: string
  /**
   * 风险分类
   */
  RiskCategory?: string
  /**
   * 风险等级
   */
  RiskLevel?: string
  /**
   * 风险描述
   */
  RiskDesc?: string
  /**
   * 风险结果
   */
  RiskResult?: string
  /**
   * 修复建议
   */
  FixAdvice?: string
  /**
   * Linux漏洞
   */
  RiskCategoryName?: string
  /**
   * 风险等级名称
   */
  RiskLevelName?: string
  /**
   * 实例状态
   */
  InstanceStatusName?: string
  /**
   * 首次发现时间
   */
  CreateTime?: string
  /**
   * 最近发现时间
   */
  UpdateTime?: string
  /**
   * 租户ID
   */
  AppID?: number
}

/**
 * 访问密钥资产告警信息
 */
export interface AccessKeyAlarmInfo {
  /**
   * 告警类型/风险类型
告警类型：
0异常调用
1泄漏检测
2自定义

风险类型：
0：配置风险
1: 自定义风险
   */
  Type?: number
  /**
   * 告警数量/风险数量
   */
  Count?: number
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
 * DescribeRepositoryImageAssets请求参数结构体
 */
export interface DescribeRepositoryImageAssetsRequest {
  /**
   * 集团账号的成员id
   */
  MemberId?: Array<string>
  /**
   * filter过滤条件
   */
  Filter?: Filter
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
 * CreateAccessKeySyncTask请求参数结构体
 */
export interface CreateAccessKeySyncTaskRequest {
  /**
   * 集团账号的成员id
   */
  MemberId?: Array<string>
}

/**
 * AddNewBindRoleUser请求参数结构体
 */
export type AddNewBindRoleUserRequest = null

/**
 * DescribeCheckViewRisks请求参数结构体
 */
export interface DescribeCheckViewRisksRequest {
  /**
   * 集团账号的成员id
   */
  MemberId?: Array<string>
  /**
   * 过滤内容
   */
  Filters?: Array<Filters>
  /**
   * 分页大小
   */
  Limit?: number
  /**
   * 偏移量
   */
  Offset?: number
  /**
   * 排序类型
   */
  Order?: string
  /**
   * 排序字段
   */
  By?: string
}

/**
 * 应急漏洞基本数据
 */
export interface VULBaseInfo {
  /**
   * 风险等级
high 高危/ middle 中危 / low 低危 /info 提示
   */
  Level?: string
  /**
   * 组件
   */
  Component?: string
  /**
   * 漏洞发布时间
   */
  PublishTime?: string
  /**
   * 最近扫描时间
   */
  LastScanTime?: string
  /**
   * 影响资产数量
   */
  AffectAssetCount?: number
  /**
   * 风险ID
   */
  RiskId?: string
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
注意：此字段可能返回 null，表示取不到有效值。
   */
  Nick?: string
  /**
   * 用户appid
   */
  AppId?: string
  /**
   * 用户uin
注意：此字段可能返回 null，表示取不到有效值。
   */
  Uin?: string
  /**
   * 修复建议
注意：此字段可能返回 null，表示取不到有效值。
   */
  Fix?: string
  /**
   * 应急漏洞类型，1-应急漏洞，0-非应急漏洞
注意：此字段可能返回 null，表示取不到有效值。
   */
  EMGCVulType?: number
  /**
   * CVSS评分
注意：此字段可能返回 null，表示取不到有效值。
   */
  CVSS?: number
  /**
   * 攻击热度
0/1/2/3 
注意：此字段可能返回 null，表示取不到有效值。
   */
  AttackHeat?: number
  /**
   * 检测状态 0 未扫描 1扫描中 2 扫描完成
注意：此字段可能返回 null，表示取不到有效值。
   */
  ScanStatus?: number
  /**
   * 1/0是否必修
注意：此字段可能返回 null，表示取不到有效值。
   */
  IsSuggest?: number
  /**
   * 标签
注意：此字段可能返回 null，表示取不到有效值。
   */
  VulTag?: Array<string>
  /**
   * 支持产品 逗号分隔  "cfw_waf_virtual", "cwp_detect", "cwp_defense", "cwp_fix"
注意：此字段可能返回 null，表示取不到有效值。
   */
  SupportProduct?: string
  /**
   * 漏洞检测任务id
注意：此字段可能返回 null，表示取不到有效值。
   */
  TaskId?: string
  /**
   * 主键
注意：此字段可能返回 null，表示取不到有效值。
   */
  Index?: string
  /**
   * 漏洞id 旧版
注意：此字段可能返回 null，表示取不到有效值。
   */
  PcmgrID?: string
  /**
   * 漏洞id  新版
注意：此字段可能返回 null，表示取不到有效值。
   */
  TvdID?: string
}

/**
 * DescribeCallRecord返回参数结构体
 */
export interface DescribeCallRecordResponse {
  /**
   * 调用记录列表
   */
  Data?: Array<CallRecord>
  /**
   * 调用记录总数
   */
  Total?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
 * DescribeRepositoryImageAssets返回参数结构体
 */
export interface DescribeRepositoryImageAssetsResponse {
  /**
   * 仓库镜像列表
   */
  Data?: Array<RepositoryImageVO>
  /**
   * 总数
   */
  Total?: number
  /**
   * region列表
   */
  RegionList?: Array<FilterDataObject>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
 * DescribeCheckViewRisks返回参数结构体
 */
export interface DescribeCheckViewRisksResponse {
  /**
   * 检查视角下风险数量
   */
  TotalCount?: number
  /**
   * 检查视角下风险列表
   */
  CheckViewRiskList?: Array<CheckViewRiskItem>
  /**
   * 检查视角下cspm规范标签列表
   */
  StandardNameList?: Array<StandardItem>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeConfigCheckRules请求参数结构体
 */
export interface DescribeConfigCheckRulesRequest {
  /**
   * 集团账号的成员id
   */
  MemberId?: Array<string>
  /**
   * 过滤内容
   */
  Filters?: Array<Filters>
  /**
   * 分页大小
   */
  Limit?: number
  /**
   * 偏移量
   */
  Offset?: number
  /**
   * 排序类型
   */
  Order?: string
  /**
   * 排序字段
   */
  By?: string
}

/**
 * DescribeRiskCallRecord返回参数结构体
 */
export interface DescribeRiskCallRecordResponse {
  /**
   * 风险调用记录列表
   */
  Data?: Array<RiskCallRecord>
  /**
   * 调用记录总数
   */
  Total?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
   * 公网IP
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
   * MemberId信息
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
 * 访问密钥告警数量
 */
export interface AccessKeyAlarmCount {
  /**
   * 访问密钥的ID
   */
  ID?: number
  /**
   * 访问密钥
   */
  AccessKey?: string
  /**
   * 告警数量
   */
  AlarmCount?: number
}

/**
 * 风险规则
 */
export interface RiskRuleItem {
  /**
   * 风险检查项ID
   */
  ItemId?: string
  /**
   * 云厂商名称
   */
  Provider?: string
  /**
   * 实例类型
   */
  InstanceType?: string
  /**
   * 实例类型名称
   */
  InstanceName?: string
  /**
   * 风险名称
   */
  RiskTitle?: string
  /**
   * 检查类型
   */
  CheckType?: string
  /**
   * 风险等级
   */
  Severity?: string
  /**
   * 风险危害
   */
  RiskInfluence?: string
}

/**
 * DescribeRiskCenterCFGViewCFGRiskList请求参数结构体
 */
export interface DescribeRiskCenterCFGViewCFGRiskListRequest {
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
 * DescribeAssetProcessList请求参数结构体
 */
export interface DescribeAssetProcessListRequest {
  /**
   * 集团账号的成员id
   */
  MemberId?: Array<string>
  /**
   * 过滤内容
   */
  Filters?: Array<Filters>
  /**
   * 分页大小
   */
  Limit?: number
  /**
   * 偏移量
   */
  Offset?: number
  /**
   * 排序类型
   */
  Order?: string
  /**
   * 排序字段
   */
  By?: string
  /**
   * 云厂商
   */
  Provider?: string
}

/**
 * DescribeAssetProcessList返回参数结构体
 */
export interface DescribeAssetProcessListResponse {
  /**
   * 进程数量
   */
  TotalCount?: number
  /**
   * 进程列表
   */
  AssetProcessList?: Array<AssetProcessItem>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeAbnormalCallRecord请求参数结构体
 */
export interface DescribeAbnormalCallRecordRequest {
  /**
   * 告警规则ID
   */
  AlarmRuleID: number
  /**
   * 集团账号的成员id
   */
  MemberId?: Array<string>
  /**
   * 访问密钥
   */
  AccessKey?: string
  /**
   * 调用源IP
   */
  SourceIP?: string
  /**
   * 过滤器
   */
  Filter?: Filter
}

/**
 * UpdateAccessKeyAlarmStatus请求参数结构体
 */
export interface UpdateAccessKeyAlarmStatusRequest {
  /**
   * 状态  0:未处理 1:已处理 2:已忽略
   */
  Status: number
  /**
   * 集团账号的成员id
   */
  MemberId?: Array<string>
  /**
   * 告警ID列表
   */
  AlarmIDList?: Array<number | bigint>
  /**
   * 风险ID列表
   */
  RiskIDList?: Array<number | bigint>
}

/**
 * DescribeCSIPRiskStatistics返回参数结构体
 */
export interface DescribeCSIPRiskStatisticsResponse {
  /**
   * 资产概况数据
   */
  Data?: CsipRiskCenterStatistics
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeAccessKeyUserList请求参数结构体
 */
export interface DescribeAccessKeyUserListRequest {
  /**
   * 集团账号的成员id
   */
  MemberId?: Array<string>
  /**
   * 过滤器
   */
  Filter?: Filter
}

/**
 * 资产视角风险项
 */
export interface AssetRiskItem {
  /**
   * 租户ID
   */
  AppId?: number
  /**
   * 云厂商
   */
  Provider?: string
  /**
   * 云厂商名称
   */
  ProviderName?: string
  /**
   * 云账号名称
   */
  CloudAccountName?: string
  /**
   * 云账号ID
   */
  CloudAccountId?: string
  /**
   * 实例名称
   */
  InstanceName?: string
  /**
   * 实例ID
   */
  InstanceId?: string
  /**
   * 首次发现时间
   */
  CreateTime?: string
  /**
   * 更新时间
   */
  UpdateTime?: string
  /**
   * 风险状态
   */
  RiskStatus?: number
  /**
   * 风险名称
   */
  RiskTitle?: string
  /**
   * 检查类型
   */
  CheckType?: string
  /**
   * 风险等级
   */
  Severity?: string
  /**
   * 风险规则ID
   */
  RiskRuleId?: string
  /**
   * 处置分类
   */
  Classify?: string
  /**
   * 等保合规
   */
  StandardTerms?: Array<StandardTerm>
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
 * DescribeRiskDetailList请求参数结构体
 */
export interface DescribeRiskDetailListRequest {
  /**
   * 风险规则ID
   */
  RiskRuleId: string
  /**
   * 集团账号的成员id
   */
  MemberId?: Array<string>
  /**
   * 过滤内容
   */
  Filters?: Array<Filters>
  /**
   * 分页大小
   */
  Limit?: number
  /**
   * 偏移量
   */
  Offset?: number
  /**
   * 排序类型
   */
  Order?: string
  /**
   * 排序字段
   */
  By?: string
  /**
   * 实例ID
   */
  InstanceId?: string
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
 * DescribeRiskRuleDetail请求参数结构体
 */
export interface DescribeRiskRuleDetailRequest {
  /**
   * 风险规则ID
   */
  RiskRuleId: string
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
 * CreateAccessKeyCheckTask返回参数结构体
 */
export interface CreateAccessKeyCheckTaskResponse {
  /**
   * 0表示成功 1表示失败
   */
  Code?: number
  /**
   * 错误信息
   */
  Msg?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
  /**
   * APP ID
   */
  TargetAppId?: string
}

/**
 * 调用记录详情
 */
export interface UserCallRecord {
  /**
   * 调用源IP
   */
  SourceIP?: string
  /**
   * 调用类型
0:控制台调用
1:API
   */
  EventType?: number
  /**
   * 调用次数
   */
  CallCount?: number
  /**
   * 调用错误码
0表示成功
   */
  Code?: number
  /**
   * 首次调用时间
   */
  FirstCallTime?: string
  /**
   * 最后调用时间
   */
  LastCallTime?: string
  /**
   * 调用源IP备注
   */
  SourceIPRemark?: string
  /**
   * 调用源IP地域
   */
  Region?: string
  /**
   * 用户/角色名称
   */
  UserName?: string
  /**
   * 聚合日期
   */
  Date?: string
  /**
   * appid
   */
  AppID?: number
  /**
   * 运营商
   */
  ISP?: string
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
  /**
   * 弱口令风险
   */
  WeakPasswordRisk?: number
}

/**
 * CreateAccessKeySyncTask返回参数结构体
 */
export interface CreateAccessKeySyncTaskResponse {
  /**
   * 发起同步任务
   */
  TaskID?: number
  /**
   * 0成功 1失败
   */
  Code?: number
  /**
   * 错误信息
   */
  Msg?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeSourceIPAsset返回参数结构体
 */
export interface DescribeSourceIPAssetResponse {
  /**
   * 访问密钥资产列表
   */
  Data?: Array<SourceIPAsset>
  /**
   * 全部数量
   */
  Total?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
 * 检查项视角风险
 */
export interface CheckViewRiskItem {
  /**
   * 检查项规则ID
   */
  RiskRuleId?: string
  /**
   * 风险名称
   */
  RiskTitle?: string
  /**
   * 检查类型
   */
  CheckType?: string
  /**
   * 风险等级
   */
  Severity?: string
  /**
   * 存在1个风险项
   */
  RiskDesc?: string
  /**
   * 首次发现时间
   */
  CreateTime?: string
  /**
   * 风险更新时间
   */
  UpdateTime?: string
  /**
   * 云厂商
   */
  Provider?: string
  /**
   * 风险状态
   */
  RiskStatus?: number
  /**
   * 受影响资产数量
   */
  AssetCount?: number
  /**
   * 风险数量
   */
  RiskCount?: number
  /**
   * 资产类型
   */
  AssetType?: string
  /**
   * 事件类型
   */
  EventType?: string
  /**
   * 处置分类
   */
  Classify?: string
  /**
   * cspm规范条款
   */
  StandardTerms?: Array<StandardTerm>
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
   * 新的漏洞风险id(同全网漏洞表的RiskId)
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
  /**
   * 是否POC扫描，0-非POC，1-POC
   */
  IsPOC?: number
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
 * 风险规则
 */
export interface RiskRuleInfo {
  /**
   * 风险检查项ID
   */
  RuleID?: string
  /**
   * 云厂商名称
   */
  Provider?: string
  /**
   * 实例类型
   */
  InstanceType?: string
  /**
   * 风险名称
   */
  RiskTitle?: string
  /**
   * 检查类型
   */
  CheckType?: string
  /**
   * 风险等级
   */
  RiskLevel?: string
  /**
   * 风险危害
   */
  RiskInfluence?: string
  /**
   * 风险修复指引报告链接
   */
  RiskFixAdvance?: string
  /**
   * 边界管控
   */
  DispositionType?: string
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
 * 访问密钥风险记录
 */
export interface AccessKeyRisk {
  /**
   * 风险名称
   */
  Name?: string
  /**
   * 风险等级
0-无效 1-提示 2-低危 3-中危 4-高危 5-严重
   */
  Level?: number
  /**
   * 风险记录ID
   */
  ID?: number
  /**
   * 风险规则ID
   */
  RiskRuleID?: number
  /**
   * 风险类型
0-配置风险
   */
  RiskType?: number
  /**
   * 访问密钥
   */
  AccessKey?: string
  /**
   * 访问密钥ID
   */
  AccessKeyID?: number
  /**
   * 访问密钥备注
   */
  AccessKeyRemark?: string
  /**
   * 风险检出时间
   */
  RiskTime?: string
  /**
   * 风险状态
0-未处理 2-已忽略 3-已收敛
   */
  Status?: number
  /**
   * 风险标签
   */
  Tag?: Array<string>
  /**
   * 风险证据
   */
  Evidence?: string
  /**
   * 风险描述
   */
  Description?: string
  /**
   * 所属主账号Uin
   */
  Uin?: string
  /**
   * 所属主账号昵称
   */
  Nickname?: string
  /**
   * 所属子账号Uin
   */
  SubUin?: string
  /**
   * 所属子账号昵称
   */
  SubNickname?: string
  /**
   * 账号类型
0 主账号AK 1子账号AK
2 临时密钥
   */
  Type?: number
  /**
   * 检测状态
0表示 已检测
1表示 检测中
   */
  CheckStatus?: number
  /**
   * 所属appid
   */
  AppID?: number
  /**
   * 对应风险的查询参数
   */
  QueryParam?: string
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
 * 主机进程内容
 */
export interface AssetProcessItem {
  /**
   * 云账号ID
   */
  CloudAccountID?: string
  /**
   * 实例名称
   */
  InstanceName?: string
  /**
   * 租户ID
   */
  AppID?: number
  /**
   * 云账号名称
   */
  CloudAccountName?: string
  /**
   * 实例ID
   */
  InstanceID?: string
  /**
   * 公网IP
   */
  PublicIp?: string
  /**
   * 内网IP
   */
  PrivateIp?: string
  /**
   * 进程ID
   */
  ProcessID?: string
  /**
   * 进程名称
   */
  ProcessName?: string
  /**
   * 命令行
   */
  CmdLine?: string
  /**
   * 监听端口列表
   */
  Port?: string
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
 * DescribeAccessKeyAsset返回参数结构体
 */
export interface DescribeAccessKeyAssetResponse {
  /**
   * 访问密钥资产列表
   */
  Data?: Array<AccessKeyAsset>
  /**
   * 全部数量
   */
  Total?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeAccessKeyRiskDetail返回参数结构体
 */
export interface DescribeAccessKeyRiskDetailResponse {
  /**
   * 风险列表
   */
  RiskInfo?: AccessKeyRisk
  /**
   * CAM策略总数
   */
  CamCount?: number
  /**
   * 账号关联告警数量
   */
  AlarmCount?: number
  /**
   * 访问方式 0 API 1 控制台与API
   */
  AccessType?: number
  /**
   * 访问密钥告警数量列表
   */
  AccessKeyAlarmCount?: Array<AccessKeyAlarmCount>
  /**
   * 操作保护是否开启 0 未开启 1 已开启
   */
  ActionFlag?: number
  /**
   * 登录保护是否开启 0 未开启 1 已开启
   */
  LoginFlag?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
 * CSPM条款
 */
export interface StandardTerm {
  /**
   * 标签
   */
  Tag?: string
  /**
   * 条款
   */
  Terms?: Array<string>
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
 * DescribeExposePath请求参数结构体
 */
export interface DescribeExposePathRequest {
  /**
   * 集团账号的成员id
   */
  MemberId?: Array<string>
  /**
   * 资产ID
   */
  AssetId?: string
  /**
   * 资产IP
   */
  Ip?: string
  /**
   * 资产域名
   */
  Domain?: string
  /**
   * 端口或端口范围
   */
  Port?: string
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
 * 暴露资产
 */
export interface ExposesItem {
  /**
   * 云厂商
   */
  Provider?: string
  /**
   * 云账号名称
   */
  CloudAccountName?: string
  /**
   * 云账号
   */
  CloudAccountId?: string
  /**
   * 域名
   */
  Domain?: string
  /**
   * IP
   */
  Ip?: string
  /**
   * 端口或者端口范围
   */
  Port?: string
  /**
   * 开放
   */
  Status?: string
  /**
   * 风险类型
   */
  RiskType?: string
  /**
   * acl类型
   */
  AclType?: string
  /**
   * acl列表
   */
  AclList?: string
  /**
   * 资产ID
   */
  AssetId?: string
  /**
   * 实例名称
   */
  InstanceName?: string
  /**
   * 资产类型
   */
  AssetType?: string
  /**
   * 端口服务数量
   */
  PortServiceCount?: number
  /**
   * 高危端口数量
   */
  HighRiskPortServiceCount?: number
  /**
   * web应用数量
   */
  WebAppCount?: number
  /**
   * 有风险web应用数量
   */
  RiskWebAppCount?: number
  /**
   * 弱口令数量
   */
  WeakPasswordCount?: number
  /**
   * 漏洞数量
   */
  VulCount?: number
  /**
   * 首次发现时间
   */
  CreateTime?: string
  /**
   * 最近更新时间
   */
  UpdateTime?: string
  /**
   * 实例类型名称
   */
  AssetTypeName?: string
  /**
   * 开放状态
   */
  DisplayStatus?: string
  /**
   * 端口状态
   */
  DisplayRiskType?: string
  /**
   * 扫描任务状态
   */
  ScanTaskStatus?: string
  /**
   * uuid
   */
  Uuid?: string
  /**
   * 是否进行过安全体检
   */
  HasScan?: string
  /**
   * 租户ID
   */
  AppId?: number
  /**
   * 租户ID字符串
   */
  AppIdStr?: string
  /**
   * 记录ID
   */
  ExposureID?: number
  /**
   * 端口开放数量
   */
  PortDetectCount?: number
  /**
   * 端口开放结果
   */
  PortDetectResult?: string
  /**
   * 标签
   */
  Tag?: string
  /**
   * 备注
   */
  Comment?: string
  /**
   * 待治理风险数量
   */
  ToGovernedRiskCount?: number
  /**
   * 待治理风险内容
   */
  ToGovernedRiskContent?: string
}

/**
 * DescribeAccessKeyRisk请求参数结构体
 */
export interface DescribeAccessKeyRiskRequest {
  /**
   * 过滤器
   */
  Filter?: Filter
  /**
   * 集团账号的成员id
   */
  MemberId?: Array<string>
  /**
   * 访问密钥的ID
   */
  AccessKeyID?: number
  /**
   * 账号uin
   */
  SubUin?: string
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
 * DescribeUserCallRecord请求参数结构体
 */
export interface DescribeUserCallRecordRequest {
  /**
   * 账号uin
   */
  SubUin: string
  /**
   * 集团账号的成员id
   */
  MemberId?: Array<string>
  /**
   * 过滤器
   */
  Filter?: Filter
}

/**
 * DescribeTopAttackInfo请求参数结构体
 */
export interface DescribeTopAttackInfoRequest {
  /**
   * 起始时间
   */
  StartTime: string
  /**
   * 结束时间
   */
  EndTime: string
  /**
   * 1:攻击类型 2:攻击者
   */
  QueryType: number
  /**
   * 集团账号的成员id
   */
  MemberId?: Array<string>
  /**
   * 被调用的集团账号的成员id
   */
  OperatedMemberId?: Array<string>
  /**
   * 资产名称
   */
  AssetName?: string
  /**
   * 0: 默认全部 1:资产ID 2:域名
   */
  AssetType?: number
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
 * UpdateAccessKeyRemark返回参数结构体
 */
export interface UpdateAccessKeyRemarkResponse {
  /**
   * 0:成功 1:失败
   */
  Code?: number
  /**
   * 错误信息
   */
  Msg?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 通用的下拉框列表
 */
export interface AttributeOptionSet {
  /**
   * cvm实例类型
   */
  Text?: string
  /**
   * cvm实例名称
   */
  Value?: string
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
   * 公网IP
   */
  PublicIp?: string
  /**
   * 私网IP
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
   * 主机安全Agent UUID
   */
  InstanceUuid?: string
  /**
   * 云主机 CVM UUID
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
 * 访问密钥告警记录
 */
export interface AccessKeyAlarm {
  /**
   * 告警名称
   */
  Name?: string
  /**
   * 告警等级
0-无效 1-提示 2-低危 3-中危 4-高危 5-严重
   */
  Level?: number
  /**
   * 告警记录ID
   */
  ID?: number
  /**
   * 告警规则ID
   */
  AlarmRuleID?: number
  /**
   * 告警类型
0 异常调用
1 泄漏监测
   */
  AlarmType?: number
  /**
   * 访问密钥
   */
  AccessKey?: string
  /**
   * 访问密钥ID
   */
  AccessKeyID?: number
  /**
   * 访问密钥备注
   */
  AccessKeyRemark?: string
  /**
   * 最后告警时间
   */
  LastAlarmTime?: string
  /**
   * 告警状态
0-未处理 1-已处理 2-已忽略
   */
  Status?: number
  /**
   * 聚合日期
   */
  Date?: string
  /**
   * 告警标签
   */
  Tag?: Array<string>
  /**
   * 所属主账号Uin
   */
  Uin?: string
  /**
   * 所属主账号昵称
   */
  Nickname?: string
  /**
   * 所属子账号Uin
   */
  SubUin?: string
  /**
   * 所属子账号昵称
   */
  SubNickname?: string
  /**
   * 账号类型
0 主账号AK 1 子账号AK 2 临时密钥
   */
  Type?: number
  /**
   * 所属appid
   */
  AppID?: number
  /**
   * 泄漏证据
   */
  LeakEvidence?: Array<string>
  /**
   * 是否支持编辑信任账号
   */
  IsSupportEditWhiteAccount?: boolean
  /**
   * 告警证据
   */
  Evidence?: string
  /**
   * 告警规则标识
   */
  RuleKey?: string
  /**
   * 云厂商类型 0:腾讯云 1:亚马逊云 2:微软云 3:谷歌云 4:阿里云 5:华为云
   */
  CloudType?: number
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
  /**
   * 端口
   */
  Port?: number
}

/**
 * UpdateAccessKeyAlarmStatus返回参数结构体
 */
export interface UpdateAccessKeyAlarmStatusResponse {
  /**
   * 0成功，1失败
   */
  Code?: number
  /**
   * 错误信息
   */
  Msg?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 配置视角的配置风险对象
 */
export interface CFGViewCFGRisk {
  /**
   * 影响资产
   */
  NoHandleCount?: number
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
  AffectAssetCount?: number
  /**
   * 资产唯一id
   */
  Id?: string
  /**
   * 资产子类型
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
注意：此字段可能返回 null，表示取不到有效值。
   */
  Nick?: string
  /**
   * 用户uin
注意：此字段可能返回 null，表示取不到有效值。
   */
  Uin?: string
  /**
   * 配置名
注意：此字段可能返回 null，表示取不到有效值。
   */
  CFGName?: string
  /**
   * 检查类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  CheckType?: string
  /**
   * -
注意：此字段可能返回 null，表示取不到有效值。
   */
  CFGSTD?: string
  /**
   * 描述
注意：此字段可能返回 null，表示取不到有效值。
   */
  CFGDescribe?: string
  /**
   * 修复建议
注意：此字段可能返回 null，表示取不到有效值。
   */
  CFGFix?: string
  /**
   * 帮助文档
注意：此字段可能返回 null，表示取不到有效值。
   */
  CFGHelpURL?: string
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
 * DescribeAssetRiskList返回参数结构体
 */
export interface DescribeAssetRiskListResponse {
  /**
   * 资产视角下风险数量
   */
  TotalCount?: number
  /**
   * 资产视角下风险列表
   */
  AssetRiskList?: Array<AssetRiskItem>
  /**
   * 等保规范名称集合
   */
  StandardNameList?: Array<StandardItem>
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
 * DescribeConfigCheckRules返回参数结构体
 */
export interface DescribeConfigCheckRulesResponse {
  /**
   * 风险规则数量
   */
  TotalCount?: number
  /**
   * 风险规则列表
   */
  RuleList?: Array<RiskRuleInfo>
  /**
   * 云厂商类型选项
   */
  ProviderList?: Array<AttributeOptionSet>
  /**
   * 风险等级类型选项
   */
  RiskLevelList?: Array<AttributeOptionSet>
  /**
   * 处置分类选项
   */
  DispositionTypeList?: Array<AttributeOptionSet>
  /**
   * 检查类型选项
   */
  CheckTypeList?: Array<AttributeOptionSet>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeAccessKeyAsset请求参数结构体
 */
export interface DescribeAccessKeyAssetRequest {
  /**
   * 集团账号的成员id
   */
  MemberId?: Array<string>
  /**
   * 过滤器
   */
  Filter?: Filter
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
 * DescribeAccessKeyAlarmDetail请求参数结构体
 */
export interface DescribeAccessKeyAlarmDetailRequest {
  /**
   * 告警记录ID
   */
  ID: number
  /**
   * 集团账号的成员id
   */
  MemberId?: Array<string>
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
 * ModifyRiskCenterRiskStatus返回参数结构体
 */
export interface ModifyRiskCenterRiskStatusResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
 * 风险详情
 */
export interface RiskDetailItem {
  /**
   * 首次发现时间
   */
  CreateTime?: string
  /**
   * 更新时间
   */
  UpdateTime?: string
  /**
   * 风险状态
   */
  RiskStatus?: number
  /**
   * 风险内容
   */
  RiskContent?: string
  /**
   * 云厂商
   */
  Provider?: string
  /**
   * 云厂商名称
   */
  ProviderName?: string
  /**
   * 云账号
   */
  CloudAccountId?: string
  /**
   * 云账号名称
   */
  CloudAccountName?: string
  /**
   * 实例ID
   */
  InstanceId?: string
  /**
   * 实例名称
   */
  InstanceName?: string
  /**
   * 风险ID
   */
  RiskId?: number
  /**
   * 风险规则ID
   */
  RiskRuleId?: string
  /**
   * 风险验证状态
   */
  CheckStatus?: string
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
 * DescribeAssetRiskList请求参数结构体
 */
export interface DescribeAssetRiskListRequest {
  /**
   * 集团账号的成员id
   */
  MemberId?: Array<string>
  /**
   * 过滤内容
   */
  Filters?: Array<Filters>
  /**
   * 分页大小
   */
  Limit?: number
  /**
   * 偏移量
   */
  Offset?: number
  /**
   * 排序类型
   */
  Order?: string
  /**
   * 排序字段
   */
  By?: string
}

/**
 * DescribeRiskRules请求参数结构体
 */
export interface DescribeRiskRulesRequest {
  /**
   * 集团账号的成员id
   */
  MemberId?: Array<string>
  /**
   * 过滤内容
   */
  Filters?: Array<Filters>
  /**
   * 分页大小
   */
  Limit?: number
  /**
   * 偏移量
   */
  Offset?: number
  /**
   * 排序类型
   */
  Order?: string
  /**
   * 排序字段
   */
  By?: string
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
 * DescribeSourceIPAsset请求参数结构体
 */
export interface DescribeSourceIPAssetRequest {
  /**
   * 集团账号的成员id
   */
  MemberId?: Array<string>
  /**
   * 过滤器
   */
  Filter?: Filter
}

/**
 * DescribeVulRiskList请求参数结构体
 */
export interface DescribeVulRiskListRequest {
  /**
   * 集团账号的成员id
   */
  MemberId?: Array<string>
  /**
   * 过滤内容
   */
  Filters?: Array<Filters>
  /**
   * 分页大小
   */
  Limit?: number
  /**
   * 偏移量
   */
  Offset?: number
  /**
   * 排序类型
   */
  Order?: string
  /**
   * 排序字段
   */
  By?: string
  /**
   * 云账号ID
   */
  CloudAccountID?: string
  /**
   * 云厂商
   */
  Provider?: string
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
 * DescribeAccessKeyRisk返回参数结构体
 */
export interface DescribeAccessKeyRiskResponse {
  /**
   * 风险列表
   */
  Data?: Array<AccessKeyRisk>
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
 * DescribeDbAssetInfo请求参数结构体
 */
export interface DescribeDbAssetInfoRequest {
  /**
   * 资产id
   */
  AssetId: string
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
 * CreateAccessKeyCheckTask请求参数结构体
 */
export interface CreateAccessKeyCheckTaskRequest {
  /**
   * 集团账号的成员id
   */
  MemberId?: Array<string>
  /**
   * 风险列表
   */
  RiskIDList?: Array<number | bigint>
  /**
   * 访问密钥列表
   */
  AccessKeyList?: Array<string>
  /**
   * 账号uin列表
   */
  SubUinList?: Array<string>
  /**
   * 风险规则id列表
   */
  RiskRuleIDList?: Array<number | bigint>
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
 * 访问密钥资产信息
 */
export interface AccessKeyAsset {
  /**
   * AK 的id
   */
  ID?: number
  /**
   * AK名称
   */
  Name?: string
  /**
   * 备注
   */
  Remark?: string
  /**
   * 账号所属APPID
   */
  AppID?: number
  /**
   * 所属主账号Uin
   */
  Uin?: string
  /**
   * 主账号昵称
   */
  Nickname?: string
  /**
   * 所属子账号Uin
   */
  SubUin?: string
  /**
   * 所属子账号昵称
   */
  SubNickname?: string
  /**
   * 0 主账号AK
1 子账号AK
2 临时密钥
   */
  Type?: number
  /**
   * 安全建议 枚举
0 正常
1 立即处理
2 建议加固
   */
  Advice?: number
  /**
   * 告警信息列表
   */
  AccessKeyAlarmList?: Array<AccessKeyAlarmInfo>
  /**
   * 风险信息列表
   */
  AccessKeyRiskList?: Array<AccessKeyAlarmInfo>
  /**
   * 源IP数量
   */
  IPCount?: number
  /**
   * 创建时间
   */
  CreateTime?: string
  /**
   * 最近访问时间
   */
  LastAccessTime?: string
  /**
   * AK状态 
0:禁用
1:已启用
2:已删除(已在cam侧删除，安全中心仍然存留之前的记录)
   */
  Status?: number
  /**
   * 0 表示已检测
1 表示检测中
   */
  CheckStatus?: number
  /**
   * 云厂商类型 0:腾讯云 1:亚马逊云 2:微软云 3:谷歌云 4:阿里云 5:华为云
   */
  CloudType?: number
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
 * DescribeCallRecord请求参数结构体
 */
export interface DescribeCallRecordRequest {
  /**
   * 集团账号的成员id
   */
  MemberId?: Array<string>
  /**
   * 访问密钥的ID
   */
  AccessKeyID?: number
  /**
   * 调用源IP的ID
   */
  SourceIPID?: number
  /**
   * 访问账号uin
   */
  AccUin?: string
  /**
   * 过滤器
   */
  Filter?: Filter
}

/**
 * 主机漏洞风险内容
 */
export interface VulRiskItem {
  /**
   * 云账号ID
   */
  CloudAccountID?: string
  /**
   * 实例ID
   */
  AssetID?: string
  /**
   * 实例状态
   */
  InstanceStatus?: string
  /**
   * 实例名称
   */
  InstanceName?: string
  /**
   * 创建时间
   */
  CreateTime?: string
  /**
   * 更新时间
   */
  UpdateTime?: string
  /**
   * 漏洞名称
   */
  VulName?: string
  /**
   * 漏洞类型
   */
  VulCategory?: string
  /**
   * 漏洞等级
   */
  VulLevel?: string
  /**
   * CVE编号
   */
  CveID?: string
  /**
   * 漏洞描述
   */
  Description?: string
  /**
   * 容器ID
   */
  ContainerID?: string
  /**
   * 漏洞风险修复建议
   */
  Fix?: string
  /**
   * Linux漏洞
   */
  VulCategoryName?: string
  /**
   * 漏洞等级名称
   */
  VulLevelName?: string
  /**
   * 实例状态中文信息
   */
  InstanceStatusName?: string
  /**
   * 租户ID
   */
  AppID?: number
}

/**
 * 仓库镜像列表
 */
export interface RepositoryImageVO {
  /**
   * 用户appid
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
   * 镜像id
   */
  InstanceId?: string
  /**
   * 镜像名称
   */
  InstanceName?: string
  /**
   * 镜像创建时间
   */
  InstanceCreateTime?: string
  /**
   * 镜像大小带单位
   */
  InstanceSize?: string
  /**
   * 构建次数
   */
  BuildCount?: number
  /**
   * 镜像类型
   */
  InstanceType?: string
  /**
   * 授权状态
   */
  AuthStatus?: number
  /**
   * 镜像版本
   */
  InstanceVersion?: string
  /**
   * 地域
   */
  Region?: string
  /**
   * 仓库地址
   */
  RepositoryUrl?: string
  /**
   * 仓库名称
   */
  RepositoryName?: string
  /**
   * 是否核心
   */
  IsCore?: number
  /**
   * 漏洞风险
   */
  VulRisk?: number
  /**
   * 检查任务
   */
  CheckCount?: number
  /**
   * 体检时间
   */
  CheckTime?: string
  /**
   * 是否新资产 1新
   */
  IsNewAsset?: number
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
 * DescribeAccessKeyAlarm返回参数结构体
 */
export interface DescribeAccessKeyAlarmResponse {
  /**
   * 告警列表
   */
  Data?: Array<AccessKeyAlarm>
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
   * 状态，0未处理、1已处置、2已忽略、3云防已防护
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
  /**
   * 服务判定,high_risk_service 高危服务 web_service web服务 other_service 其他服务
   */
  ServiceJudge?: string
  /**
   * 状态，0未处理、1已处置、2已忽略、3云防已防护、4无需处理
   */
  XspmStatus?: number
}

/**
 * 子账号详情
 */
export interface SubUserInfo {
  /**
   * 主键ID，无业务意义仅作为唯一键
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
   * 所属主账号memberId信息
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
   * 是否接入操作审计日志
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
 * DescribeRiskRuleDetail返回参数结构体
 */
export interface DescribeRiskRuleDetailResponse {
  /**
   * 风险规则ID
   */
  RiskRuleId?: string
  /**
   * 云厂商
   */
  Provider?: string
  /**
   * 风险名称
   */
  RiskName?: string
  /**
   * 风险危害
   */
  RiskInfluence?: string
  /**
   * 修复指引
   */
  RiskFixAdvice?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeAccessKeyUserDetail请求参数结构体
 */
export interface DescribeAccessKeyUserDetailRequest {
  /**
   * 账号自身uin
   */
  SubUin: string
  /**
   * 集团账号的成员id
   */
  MemberId?: Array<string>
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
 * 调用记录详情
 */
export interface CallRecord {
  /**
   * 调用记录ID
   */
  CallID?: string
  /**
   * 访问密钥
   */
  AccessKey?: string
  /**
   * 访问密钥备注
   */
  AccessKeyRemark?: string
  /**
   * 访问密钥ID
   */
  AccessKeyID?: number
  /**
   * 调用源IP
   */
  SourceIP?: string
  /**
   * 调用源IP备注
   */
  SourceIPRemark?: string
  /**
   * 调用源IP地域
   */
  Region?: string
  /**
   * IP类型 0:账号内（未备注） 1:账号外（未备注） 2:账号内 (已备注) 3:账号外 (已备注)
   */
  IPType?: number
  /**
   * 调用接口名称
   */
  EventName?: string
  /**
   * 调用产品名称
   */
  ProductName?: string
  /**
   * 调用类型
0:控制台调用
1:API
   */
  EventType?: number
  /**
   * 用户类型CAMUser/root/AssumedRole

   */
  UserType?: string
  /**
   * 用户/角色名称
   */
  UserName?: string
  /**
   * 策略列表
   */
  PolicySet?: Array<string>
  /**
   * 调用次数
   */
  CallCount?: number
  /**
   * 调用错误码
0表示成功
   */
  Code?: number
  /**
   * 首次调用时间
   */
  FirstCallTime?: string
  /**
   * 最后调用时间
   */
  LastCallTime?: string
  /**
   * IP关联资产ID，如果为空字符串，表示没有关联
   */
  InstanceID?: string
  /**
   * IP关联资产名称
   */
  InstanceName?: string
  /**
   * 聚合日期
   */
  Date?: string
  /**
   * appid
   */
  AppID?: number
  /**
   * 展示状态
   */
  ShowStatus?: boolean
  /**
   * 运营商
   */
  ISP?: string
  /**
   * 账号外vpc信息列表
   */
  VpcInfo?: Array<SourceIPVpcInfo>
  /**
   * 调用请求客户端列表
   */
  ReqClient?: Array<string>
}

/**
 * DescribeHighBaseLineRiskList返回参数结构体
 */
export interface DescribeHighBaseLineRiskListResponse {
  /**
   * 高危基线风险数量
   */
  TotalCount?: number
  /**
   * 高危基线风险列表
   */
  HighBaseLineRiskList?: Array<HighBaseLineRiskItem>
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
   * 状态，0未处理、1已处置、2已忽略、3云防已防护
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
  /**
   * 新风险等级,high_risk 高危 suspect 疑似 Normal 暂无风险
   */
  NewLevel?: string
  /**
   * 状态，0未处理、1已处置、2已忽略、3云防已防护、4无需处理
   */
  XspmStatus?: number
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
 * DescribeExposeAssetCategory返回参数结构体
 */
export interface DescribeExposeAssetCategoryResponse {
  /**
   * 云边界分析资产分类列表
   */
  ExposeAssetTypeList?: Array<ExposeAssetTypeItem>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
   * memberId信息
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
 * AK简要信息
 */
export interface AKInfo {
  /**
   * ak对应id
   */
  ID?: number
  /**
   * ak具体值 临时密钥时返回临时密钥
   */
  Name?: string
  /**
   * 所属账号
   */
  User?: string
  /**
   * 备注
   */
  Remark?: string
}

/**
 * DescribeRiskRules返回参数结构体
 */
export interface DescribeRiskRulesResponse {
  /**
   * 风险规则数量
   */
  TotalCount?: number
  /**
   * 风险规则列表
   */
  RiskRuleList?: Array<RiskRuleItem>
  /**
   * 实例类型选项
   */
  InstanceTypeList?: Array<AttributeOptionSet>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
 * 暴露资产分类
 */
export interface ExposeAssetTypeItem {
  /**
   * 云厂商
   */
  Provider?: string
  /**
   * 云厂商名称
   */
  ProviderName?: string
  /**
   * 资产类型
   */
  AssetType?: string
  /**
   * 资产类型名称
   */
  AssetTypeName?: string
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
 * DescribeRiskDetailList返回参数结构体
 */
export interface DescribeRiskDetailListResponse {
  /**
   * 资产视角下风险详情数量
   */
  TotalCount?: number
  /**
   * 资产视角下风险详情列表
   */
  AssetRiskDetailList?: Array<RiskDetailItem>
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
 * DescribeExposePath返回参数结构体
 */
export interface DescribeExposePathResponse {
  /**
   * 云边界分析路径节点内容
   */
  Content?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
 * DescribeAccessKeyAlarm请求参数结构体
 */
export interface DescribeAccessKeyAlarmRequest {
  /**
   * 过滤器
   */
  Filter?: Filter
  /**
   * 集团账号的成员id
   */
  MemberId?: Array<string>
  /**
   * 访问密钥的ID
   */
  AccessKeyID?: number
  /**
   * 源IP的ID
   */
  SourceIPID?: number
  /**
   * 账号uin
   */
  SubUin?: string
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
 * DescribeExposures请求参数结构体
 */
export interface DescribeExposuresRequest {
  /**
   * 集团账号的成员id
   */
  MemberId?: Array<string>
  /**
   * 过滤内容
   */
  Filters?: Array<Filters>
  /**
   * 分页大小
   */
  Limit?: number
  /**
   * 偏移量
   */
  Offset?: number
  /**
   * 排序类型
   */
  Order?: string
  /**
   * 排序字段
   */
  By?: string
}

/**
 * 访问密钥资产信息（源IP角度）
 */
export interface SourceIPAsset {
  /**
   * 源IP id
   */
  ID?: number
  /**
   * 源IP
   */
  SourceIP?: string
  /**
   * 备注
   */
  Remark?: string
  /**
   * 账号所属APPID
   */
  AppID?: number
  /**
   * IP地域
   */
  Region?: string
  /**
   * 调用方式
-1:未统计
0:控制台调用
1:API
   */
  EventType?: number
  /**
   * IP类型
0:账号内（未备注）
1:账号外（未备注）
2:账号内   (已备注)
3:账号外   (已备注)
   */
  IPType?: number
  /**
   * 告警信息列表
   */
  AccessKeyAlarmList?: Array<AccessKeyAlarmInfo>
  /**
   * ak信息列表
   */
  AKInfo?: Array<AKInfo>
  /**
   * 调用接口数量
   */
  ActionCount?: number
  /**
   * 最近访问时间
   */
  LastAccessTime?: string
  /**
   * IP关联实例ID，如果为空字符串，代表非账号内资产
   */
  InstanceID?: string
  /**
   * IP关联实例名称
   */
  InstanceName?: string
  /**
   * 账号所属Uin
   */
  Uin?: string
  /**
   * 昵称
   */
  Nickname?: string
  /**
   * 展示状态
   */
  ShowStatus?: boolean
  /**
   * 运营商字段
   */
  ISP?: string
  /**
   * 账号外vpc信息
   */
  VpcInfo?: Array<SourceIPVpcInfo>
  /**
   * 云类型
0为腾讯云
   */
  CloudType?: number
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
 * DescribeRiskCenterCFGViewCFGRiskList返回参数结构体
 */
export interface DescribeRiskCenterCFGViewCFGRiskListResponse {
  /**
   * 总条数
   */
  TotalCount?: number
  /**
   * 资产视角的配置风险列表
   */
  Data?: Array<CFGViewCFGRisk>
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
 * DescribeAccessKeyUserDetail返回参数结构体
 */
export interface DescribeAccessKeyUserDetailResponse {
  /**
   * 账号详情信息
   */
  User?: AccessKeyUser
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
 * DescribeAccessKeyRiskDetail请求参数结构体
 */
export interface DescribeAccessKeyRiskDetailRequest {
  /**
   * 风险记录ID
   */
  ID: number
  /**
   * 集团账号的成员id
   */
  MemberId?: Array<string>
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
 * DescribeVULList返回参数结构体
 */
export interface DescribeVULListResponse {
  /**
   * 总数
   */
  TotalCount?: number
  /**
   * 漏洞列表
   */
  Data?: Array<VULBaseInfo>
  /**
   * 漏洞类型列表
   */
  VULTypeLists?: Array<FilterDataObject>
  /**
   * 风险等级列表
   */
  RiskLevels?: Array<FilterDataObject>
  /**
   * 标签
   */
  Tags?: Array<FilterDataObject>
  /**
   * 产品支持情况
   */
  ProductSupport?: Array<FilterDataObject>
  /**
   * 产品支持情况
   */
  CheckStatus?: Array<FilterDataObject>
  /**
   * 攻击热度枚举
   */
  AttackHeat?: Array<FilterDataObject>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeExposeAssetCategory请求参数结构体
 */
export interface DescribeExposeAssetCategoryRequest {
  /**
   * 集团账号的成员id
   */
  MemberId?: Array<string>
}

/**
 * DescribeAbnormalCallRecord返回参数结构体
 */
export interface DescribeAbnormalCallRecordResponse {
  /**
   * 调用记录列表
   */
  Data?: Array<CallRecord>
  /**
   * 调用记录总数
   */
  Total?: number
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
 * DescribeVulRiskList返回参数结构体
 */
export interface DescribeVulRiskListResponse {
  /**
   * 漏洞数量
   */
  TotalCount?: number
  /**
   * 漏洞列表
   */
  VulRiskList?: Array<VulRiskItem>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeCSIPRiskStatistics请求参数结构体
 */
export interface DescribeCSIPRiskStatisticsRequest {
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
 * DescribeScanStatistic返回参数结构体
 */
export interface DescribeScanStatisticResponse {
  /**
   * 端口服务数量
   */
  PortServiceCount?: number
  /**
   * Web服务数量
   */
  WebAppCount?: number
  /**
   * 弱口令风险数量
   */
  WeakPasswordCount?: number
  /**
   * 漏洞风险数量
   */
  VulCount?: number
  /**
   * 高危端口服务数量
   */
  HighRiskPortServiceCount?: number
  /**
   * 风险Web服务数量
   */
  RiskWebAppCount?: number
  /**
   * 端口服务近7天新增数量
   */
  PortServiceIncrement?: number
  /**
   * Web服务近7天新增数量
   */
  WebAppIncrement?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
 * DescribeExposures返回参数结构体
 */
export interface DescribeExposuresResponse {
  /**
   * 云边界分析资产数量
   */
  TotalCount?: number
  /**
   * 云边界分析资产列表
   */
  ExposeList?: Array<ExposesItem>
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
 * DescribeUserCallRecord返回参数结构体
 */
export interface DescribeUserCallRecordResponse {
  /**
   * 账号调用记录列表
   */
  Data?: Array<UserCallRecord>
  /**
   * 调用记录总数
   */
  Total?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
 * DescribeAccessKeyAlarmDetail返回参数结构体
 */
export interface DescribeAccessKeyAlarmDetailResponse {
  /**
   * 告警信息
   */
  AlarmInfo?: AccessKeyAlarm
  /**
   * 所属账号CAM策略数量
   */
  CamCount?: number
  /**
   * AK风险数量
   */
  RiskCount?: number
  /**
   * 告警策略描述
   */
  AlarmDesc?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * filter过滤条件
 */
export interface Filters {
  /**
   * 实例ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  Name?: string
  /**
   * 实例ID内容
注意：此字段可能返回 null，表示取不到有效值。
   */
  Values?: Array<string>
  /**
   * 模糊匹配
注意：此字段可能返回 null，表示取不到有效值。
   */
  ExactMatch?: string
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
 * DescribeOtherCloudAssets请求参数结构体
 */
export interface DescribeOtherCloudAssetsRequest {
  /**
   * 集团账号的成员id
   */
  MemberId?: Array<string>
  /**
   * -
   */
  Filter?: Filter
  /**
   * 资产类型:MYSQL/MARIADB/REDIS/MONGODB/POSTGRES/CTS/ES/KAFKA/COS/CBS/CFS
   */
  AssetTypes?: Array<string>
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
 * 调用源IP 外部账号信息
 */
export interface SourceIPVpcInfo {
  /**
   * 账号名称
   */
  Name?: string
  /**
   * vpc所属appid
   */
  AppID?: number
  /**
   * vpc id
   */
  VpcID?: string
  /**
   * vpc 名称
   */
  VpcName?: string
}

/**
 * 访问密钥账号信息
 */
export interface AccessKeyUser {
  /**
   * 账号ID
   */
  ID?: number
  /**
   * 账号名称
   */
  Name?: string
  /**
   * 0 主账号 1子账号
   */
  Type?: number
  /**
   * 访问方式
0 API
1 控制台与API
   */
  AccessType?: number
  /**
   * 安全建议 枚举 0 正常 1 立即处理 2 建议加固
   */
  Advice?: number
  /**
   * 告警信息列表
   */
  AccessKeyAlarmList?: Array<AccessKeyAlarmInfo>
  /**
   * 风险信息列表
   */
  AccessKeyRiskList?: Array<AccessKeyAlarmInfo>
  /**
   * 账号所属APPID
   */
  AppID?: number
  /**
   * 主账号昵称
   */
  Nickname?: string
  /**
   * 子账号昵称
   */
  SubNickname?: string
  /**
   * 账号所属主账号Uin
   */
  Uin?: string
  /**
   * 账号自身uin，主账号时与主账号uin一致
   */
  SubUin?: string
  /**
   * 登录IP
   */
  LoginIP?: string
  /**
   * 登录地址
   */
  LoginLocation?: string
  /**
   * 登录时间
   */
  LoginTime?: string
  /**
   * 运营商名称
   */
  ISP?: string
  /**
   * 操作保护是否开启
0 未开启
1 已开启
   */
  ActionFlag?: number
  /**
   * 登录保护是否开启
0 未开启
1 已开启
   */
  LoginFlag?: number
  /**
   * 0 表示已检测 1 表示检测中
   */
  CheckStatus?: number
  /**
   * 云厂商类型 0:腾讯云 1:亚马逊云 2:微软云 3:谷歌云 4:阿里云 5:华为云
   */
  CloudType?: number
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
 * DescribeVULList请求参数结构体
 */
export interface DescribeVULListRequest {
  /**
   * 集团账号的成员id
   */
  MemberId?: Array<string>
  /**
   * 查询条件
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
 * DescribeScanStatistic请求参数结构体
 */
export interface DescribeScanStatisticRequest {
  /**
   * 集团账号的成员id
   */
  MemberId?: Array<string>
  /**
   * 体检任务id
   */
  TaskLogId?: string
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
 * DescribeAccessKeyUserList返回参数结构体
 */
export interface DescribeAccessKeyUserListResponse {
  /**
   * 账号列表
   */
  Data?: Array<AccessKeyUser>
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
 * DescribeRiskCallRecord请求参数结构体
 */
export interface DescribeRiskCallRecordRequest {
  /**
   * 风险记录ID
   */
  RiskID: number
  /**
   * 集团账号的成员id
   */
  MemberId?: Array<string>
  /**
   * 过滤器
   */
  Filter?: Filter
}

/**
 * DescribeOtherCloudAssets返回参数结构体
 */
export interface DescribeOtherCloudAssetsResponse {
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
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

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
 * UpdateAccessKeyRemark请求参数结构体
 */
export interface UpdateAccessKeyRemarkRequest {
  /**
   * 备注
   */
  Remark: string
  /**
   * 集团账号的成员id
   */
  MemberId?: Array<string>
  /**
   * 源IP 名称
   */
  SourceIPList?: Array<string>
  /**
   * ak名称
   */
  AccessKeyList?: Array<string>
  /**
   * 源IP的ID
   */
  SourceIPIDList?: Array<number | bigint>
  /**
   * AK的ID
   */
  AccessKeyIDList?: Array<number | bigint>
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
 * 风险调用记录详情
 */
export interface RiskCallRecord {
  /**
   * 接口名称
   */
  EventName?: string
  /**
   * 接口中文描述
   */
  EventDescCN?: string
  /**
   * 接口英文描述
   */
  EventDescEN?: string
  /**
   * 产品名称
   */
  ProductName?: string
  /**
   * 产品中文名称
   */
  ProductNameCN?: string
  /**
   * 调用次数
   */
  CallCount?: number
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
 * DescribeHighBaseLineRiskList请求参数结构体
 */
export interface DescribeHighBaseLineRiskListRequest {
  /**
   * 集团账号的成员id
   */
  MemberId?: Array<string>
  /**
   * 过滤内容
   */
  Filters?: Array<Filters>
  /**
   * 分页大小
   */
  Limit?: number
  /**
   * 偏移量
   */
  Offset?: number
  /**
   * 排序类型
   */
  Order?: string
  /**
   * 排序字段
   */
  By?: string
  /**
   * 云账号ID
   */
  CloudAccountID?: string
  /**
   * 云厂商
   */
  Provider?: string
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
