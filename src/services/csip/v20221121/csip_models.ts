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
 * DescribeCosInvokeUa请求参数结构体
 */
export interface DescribeCosInvokeUaRequest {
  /**
   * appid
   */
  RelAppId: number
  /**
   * 过滤器
   */
  Filter?: Filter
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
 * ModifyDspmApproveStatus请求参数结构体
 */
export interface ModifyDspmApproveStatusRequest {
  /**
   * 申请单id
   */
  OrderId: string
  /**
   * 状态。1-通过 2-拒绝
   */
  Status: number
  /**
   * 审批信息
   */
  Comment?: string
}

/**
 * DescribeCWPMachineDetail请求参数结构体
 */
export interface DescribeCWPMachineDetailRequest {
  /**
   * <p>实例ID</p>
   */
  InstanceId?: string
  /**
   * <p>集团账号的成员id</p>
   */
  MemberId?: Array<string>
}

/**
 * DescribeRiskItemList返回参数结构体
 */
export interface DescribeRiskItemListResponse {
  /**
   * 列表信息
   */
  Data?: Array<CosRiskViewInfo>
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
 * ModifyPolicyStatus请求参数结构体
 */
export interface ModifyPolicyStatusRequest {
  /**
   * 策略id集合
   */
  PolicyIdSet: Array<number | bigint>
  /**
   * 状态值
   */
  Status: number
}

/**
 * DescribeCosAsset返回参数结构体
 */
export interface DescribeCosAssetResponse {
  /**
   * 总数
   */
  Total?: number
  /**
   * 桶信息
   */
  Data?: Array<CosAssetInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateCosAssetSyncTask返回参数结构体
 */
export interface CreateCosAssetSyncTaskResponse {
  /**
   * 同步任务id
   */
  TaskId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDspmSupportedAssetType请求参数结构体
 */
export interface DescribeDspmSupportedAssetTypeRequest {
  /**
   * <p>集团账号的成员id</p>
   */
  MemberId?: Array<string>
}

/**
 * DescribeDspmSupportedAssetType返回参数结构体
 */
export interface DescribeDspmSupportedAssetTypeResponse {
  /**
   * <p>实例支持的全局权限。</p>
   */
  AssetTypeSet?: Array<DspmSupportedAssetType>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyDspmBackupSetting请求参数结构体
 */
export interface ModifyDspmBackupSettingRequest {
  /**
   * 集团账号的成员id
   */
  MemberId?: Array<string>
  /**
   * 备份日志保留时长
   */
  BackupLogSaveTime?: number
  /**
   * 恢复日志保留时长
   */
  RestoreLogSaveTime?: number
  /**
   * 日志最大生命周期限制
   */
  LogMaxSaveTime?: number
  /**
   * 在线日志最大天数限制
   */
  OnlineLogMaxSaveTime?: number
}

/**
 * 审计日志列表信息
 */
export interface AuditLogInfo {
  /**
   * ai分数
   */
  AiScore?: number
  /**
   * 应用用户
   */
  AppUser?: string
  /**
   * 备份数据包
   */
  BackPacket?: string
  /**
   * 客户端 IP
   */
  ClientIp?: string
  /**
   * 客户端 Mac
   */
  ClientMac?: string
  /**
   * 终端名称，取值Proxy时为casb代理流量，其它为Agent流量
   */
  ClientName?: string
  /**
   * 客户端用户
   */
  ClientUser?: string
  /**
   * 客户端端口
   */
  ClientPort?: number
  /**
   * 风险等级
   */
  DangerLevel?: number
  /**
   * 数据库 IP
   */
  DbIp?: string
  /**
   * 数据库名称
   */
  DbName?: string
  /**
   * 数据库端口
   */
  DbPort?: number
  /**
   * 数据库用户
   */
  DbUser?: string
  /**
   * 影响行数
   */
  EffectRow?: number
  /**
   * 执行时间
   */
  ExecTime?: number
  /**
   * 命中规则
   */
  HitRule?: string
  /**
   * 日志 ID
   */
  Id?: number
  /**
   * 数据资产名称
   */
  InstanceId?: number
  /**
   * 审计单元名
   */
  InstanceName?: string
  /**
   * 操作语句(sql 语句)
   */
  OpSql?: string
  /**
   * 操作时间(时间)
   */
  OpTime?: number
  /**
   * 返回消息
   */
  RetMsg?: string
  /**
   * 返回码
   */
  RetNo?: number
  /**
   * 会话ID
   */
  SessionId?: string
  /**
   * 操作类型
   */
  SqlType?: string
  /**
   * 表名
   */
  TableName?: string
  /**
   * 数据资产名称
   */
  AssetName?: string
  /**
   * 规则集合
   */
  HitRules?: Array<HitRules>
  /**
   * 流量来源
   */
  SourceType?: string
  /**
   * 单条审计日志id
   */
  ReqId?: string
  /**
   * SQL 主要类型，DML/DDL/DCL/TCL
   */
  SqlMainType?: string
  /**
   * 表名集合
   */
  TableNames?: Array<string>
  /**
   * 字段名集合
   */
  FieldNames?: Array<string>
  /**
   * 字段名
   */
  FieldName?: string
  /**
   * 数据库类型
   */
  DbType?: string
  /**
   * 客户端工具
   */
  ClientDriverName?: string
  /**
   * 位置信息
   */
  Location?: Location
  /**
   * 字段信息（包含敏感信息）
   */
  FieldDetails?: Array<TableField>
  /**
   * 资产所属账号app id
   */
  AppId?: number
  /**
   * 账号昵称
   */
  NickName?: string
  /**
   * 资产所属账号uin
   */
  Uin?: string
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
 * DescribeIpInvokeRecordDetail请求参数结构体
 */
export interface DescribeIpInvokeRecordDetailRequest {
  /**
   * 过滤器
   */
  Filter?: Filter
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
 * DescribeCosBucketBillingInfo返回参数结构体
 */
export interface DescribeCosBucketBillingInfoResponse {
  /**
   * 存储桶计费信息
   */
  CosBucketBillingInfoSet?: Array<CosBucketBillingInfo>
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
   * <p>检查视角下风险数量</p>
   */
  TotalCount?: number
  /**
   * <p>检查视角下风险列表</p>
   */
  CheckViewRiskList?: Array<CheckViewRiskItem>
  /**
   * <p>检查视角下cspm规范标签列表</p>
   */
  StandardNameList?: Array<StandardItem>
  /**
   * <p>资产类型集合</p>
   */
  AssetTypeList?: Array<AttributeOptionSet>
  /**
   * <p>云厂商类型集合</p>
   */
  ProviderList?: Array<AttributeOptionSet>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * dspm支持的产品信息
 */
export interface DspmSupportedAssetType {
  /**
   * <p>产品名（用于查询）</p>
   */
  Product?: string
  /**
   * <p>地域列表</p>
   */
  Regions?: Array<RegionConfig>
  /**
   * <p>产品名-用于展示</p>
   */
  ProductDisplayName?: string
  /**
   * <p>产品组名</p>
   */
  ProductGroup?: string
  /**
   * <p>给定资产类型的资产实例总数</p>
   */
  AssetTotal?: number
}

/**
 * Dspm身份信息
 */
export interface DspmIdentifyInfoItem {
  /**
   * 身份id。
   */
  IdentifyId?: string
  /**
   * 备注。
   */
  Remark?: string
  /**
   * 身份类型。0-未定义 2-长期身份 3-临时身份
   */
  IdentifyType?: number
  /**
   * 所属云账号uin用户。
注意：此字段可能返回 null，表示取不到有效值。
   */
  OwnerUin?: DspmUinUser
  /**
   * 创建者账号uin用户。
   */
  CreatorUin?: DspmUinUser
  /**
   * 关联资产。
   */
  AssetCount?: number
  /**
   * 创建时间。
   */
  CreateTime?: string
  /**
   * 状态。0-不活跃 1-活跃
   */
  Status?: number
  /**
   * 所属个人用户信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  Person?: DspmPersonUser
  /**
   * 关联数据资产统计信息。
   */
  AssetStatistic?: DspmIdentifyAssetStatistic
  /**
   * 风险统计信息
   */
  RiskCount?: DspmRiskCount
  /**
   * 安全建议。 Resolve 立即解决 Reinforcement 加固 None 暂无异常
   */
  SafetyAdvice?: string
  /**
   * 资产所属账号app id
   */
  AppId?: number
  /**
   * 账号昵称
   */
  NickName?: string
  /**
   * 资产所属账号uin
   */
  Uin?: string
}

/**
 * DescribeDspmRiskStrategy返回参数结构体
 */
export interface DescribeDspmRiskStrategyResponse {
  /**
   * 策略列表
   */
  StrategySet?: Array<DspmRiskStrategy>
  /**
   * 策略总数
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteIaCFile返回参数结构体
 */
export interface DeleteIaCFileResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * Dspm 账号统计数
 */
export interface DspmAccountCount {
  /**
   * 云账号个数
   */
  UinAccountCount?: number
  /**
   * 访客账号个数
   */
  PersonCount?: number
  /**
   * 未管控账号个数
   */
  UncontrolledAccountCount?: number
  /**
   * 总账号个数
   */
  TotalAccountCount?: number
}

/**
 * ModifyDspmRiskStrategy请求参数结构体
 */
export interface ModifyDspmRiskStrategyRequest {
  /**
   * 集团账号的成员id
   */
  MemberId?: Array<string>
  /**
   * 风险策略类型
   */
  StrategyType?: string
  /**
   * 是否启用
   */
  IsEnabled?: number
  /**
   * 策略内容，如：{     ThresholdValue: "100" }
   */
  Rule?: string
  /**
   * 可选值：Info/Low/Medium/High
   */
  RiskLevel?: string
  /**
   * 策略id
   */
  StrategyId?: Array<number | bigint>
}

/**
 * DeleteDspmPersonalIdentify请求参数结构体
 */
export interface DeleteDspmPersonalIdentifyRequest {
  /**
   * 个人id
   */
  PersonId: string
}

/**
 * ModifyCosAuditMonitorAccount请求参数结构体
 */
export interface ModifyCosAuditMonitorAccountRequest {
  /**
   * 资源id
   */
  ResourceId: string
  /**
   * 需要监测的appid信息
   */
  MonitorAppIdSet?: Array<number | bigint>
  /**
   * 选择存储桶映射关系
   */
  BindBucket?: Array<CosBucketId>
}

/**
 * DescribeDspmAccessTopologyIps返回参数结构体
 */
export interface DescribeDspmAccessTopologyIpsResponse {
  /**
   * ip列表
   */
  Items?: Array<string>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateDspmAssetsExportJob返回参数结构体
 */
export interface CreateDspmAssetsExportJobResponse {
  /**
   * 任务ID
   */
  JobID?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
 * DescribeDspmSyncAssetsStatus请求参数结构体
 */
export type DescribeDspmSyncAssetsStatusRequest = null

/**
 * 申请单信息
 */
export interface DspmApplyOrder {
  /**
   * 申请单id
   */
  OrderId?: string
  /**
   * 身份id。
   */
  IdentifyId?: string
  /**
   * 申请人账号uin
   */
  ApplicantUin?: DspmUinUser
  /**
   * 资产id
   */
  AssetId?: string
  /**
   * 资产名
   */
  AssetName?: string
  /**
   * 资产所属地域
   */
  Region?: string
  /**
   * 申请类型。0-关联身份 1-编辑身份 2-创建临时身份
   */
  ApplyType?: number
  /**
   * 申请权限。
   */
  Privilege?: DspmDbAccountPrivilege
  /**
   * 从审批完成后开始计算的访问权限失效时间，临时账号有效。单位毫秒。
   */
  ValidatePeriod?: number
  /**
   * 申请原因。
   */
  Reason?: string
  /**
   * 审批步骤
   */
  ApproverSteps?: Array<DspmApproverStep>
  /**
   * 管理类型。0-普通成员 1-管理员
   */
  ManagerType?: number
  /**
   * 个人用户信息
   */
  Person?: DspmPersonUser
  /**
   * 云账号用户信息
   */
  SubjectUser?: DspmUinUser
  /**
   * 审批状态。 0-未审批 1-通过 2-拒绝
   */
  Status?: number
  /**
   * 申请单创建时间。
   */
  CreateTime?: string
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
 * 审批单信息
 */
export interface DspmApproverOrder {
  /**
   * 对应申请单id
   */
  OrderId?: string
  /**
   * 身份id。
   */
  IdentifyId?: string
  /**
   * 申请人账号uin
   */
  ApplicantUin?: DspmUinUser
  /**
   * 资产id
   */
  AssetId?: string
  /**
   * 资产名
   */
  AssetName?: string
  /**
   * 申请类型。0-关联身份 1-编辑身份 2-创建临时身份
   */
  ApplyType?: number
  /**
   * 申请权限
   */
  Privilege?: DspmDbAccountPrivilege
  /**
   * 从审批完成后开始计算的访问权限失效时间，临时账号有效。单位毫秒。
   */
  ValidatePeriod?: number
  /**
   * 申请原因
   */
  Reason?: string
  /**
   * 管理类型。0-普通成员 1-管理员
   */
  ManagerType?: number
  /**
   * 个人用户信息
   */
  Person?: DspmPersonUser
  /**
   * 云账号用户信息
   */
  SubjectUser?: DspmUinUser
  /**
   * 对应申请单创建时间。
   */
  CreateTime?: string
}

/**
 * SyncDspmAssets返回参数结构体
 */
export interface SyncDspmAssetsResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
 * DescribeCosActionList返回参数结构体
 */
export interface DescribeCosActionListResponse {
  /**
   * 列表
   */
  Data?: Array<CosActionInfo>
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
 * DescribeIaCTokenList返回参数结构体
 */
export interface DescribeIaCTokenListResponse {
  /**
   * <p>列表</p>
   */
  List?: Array<CICDToken>
  /**
   * <p>总数</p>
   */
  TotalCount?: number
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
 * DescribeOrganizationInfo请求参数结构体
 */
export interface DescribeOrganizationInfoRequest {
  /**
   * 集团账号的成员id
   */
  MemberId?: Array<string>
}

/**
 * Dspm地域信息
 */
export interface DspmArea {
  /**
   * 国家
   */
  Country?: string
  /**
   * 省
   */
  Province?: string
  /**
   * 市
   */
  City?: string
}

/**
 * DescribeDspmBackupLogList请求参数结构体
 */
export interface DescribeDspmBackupLogListRequest {
  /**
   * <p>限制数目</p>
   */
  Limit: number
  /**
   * <p>偏移量</p>
   */
  Offset: number
  /**
   * <p>集团账号的成员id</p>
   */
  MemberId?: Array<string>
  /**
   * <p>排序方式(desc=倒叙,asc=升序)</p>
   */
  Sort?: string
  /**
   * <p>排序字段(支持&#39;StartTime&#39;)</p>
   */
  Field?: string
  /**
   * <p>开始时间</p>
   */
  StartTime?: number
  /**
   * <p>结束时间</p>
   */
  EndTime?: number
  /**
   * <p>备份日志状态0未完成的,1备份文件，2恢复中，3已恢复，4.已删除,全部查询-1</p>
   */
  Status?: number
  /**
   * <p>数据库类型,如：cdb, mariadb</p>
   */
  DbTypes?: Array<string>
}

/**
 * ModifyDspmAssetSecurityAnalysisSwitch请求参数结构体
 */
export interface ModifyDspmAssetSecurityAnalysisSwitchRequest {
  /**
   * 实例信息
   */
  Instances: Array<DspmAssetInstance>
  /**
   * 集团账号的成员id
   */
  MemberId?: Array<string>
  /**
   * 开关。1-打开 0-关闭
   */
  Enable?: number
}

/**
 * DescribeCosBucketBillingInfo请求参数结构体
 */
export interface DescribeCosBucketBillingInfoRequest {
  /**
   * 集团账号的成员id
   */
  MemberId?: Array<string>
}

/**
 * DescribeDspmRisk返回参数结构体
 */
export interface DescribeDspmRiskResponse {
  /**
   * 风险列表
   */
  RiskSet?: Array<DspmRisk>
  /**
   * 风险总数
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyDspmWhitelistStrategy返回参数结构体
 */
export interface ModifyDspmWhitelistStrategyResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeKeySandboxCredential请求参数结构体
 */
export interface DescribeKeySandboxCredentialRequest {
  /**
   * 凭证ID
   */
  CredentialId: string
  /**
   * 集团账号的成员id
   */
  MemberId?: Array<string>
}

/**
 * DescribeDspmDictionaryList请求参数结构体
 */
export interface DescribeDspmDictionaryListRequest {
  /**
   * 字典类型（RootCategory：一级分类，IdentifyRule:敏感识别数据项）
   */
  DictType: string
  /**
   * 筛选条件
   */
  Filters?: Array<WhereFilter>
}

/**
 * DescribeDspmRiskTendency请求参数结构体
 */
export interface DescribeDspmRiskTendencyRequest {
  /**
   * 集团账号的成员id
   */
  MemberId?: Array<string>
  /**
   * 起始日期
   */
  StartDate?: string
  /**
   * 结束日期
   */
  EndDate?: string
}

/**
 * 审批步骤
 */
export interface DspmApproverStep {
  /**
   * 审批人列表
   */
  ApproverUinSet?: Array<DspmUinUser>
  /**
   * 审批人
   */
  ApproverUin?: string
  /**
   * 审批状态  0-未审批 1-通过 2-拒绝
   */
  Status?: number
  /**
   * 审批意见
   */
  Comment?: string
  /**
   * 审批时间。
   */
  ApproveTime?: string
}

/**
 * AddNewBindRoleUser请求参数结构体
 */
export type AddNewBindRoleUserRequest = null

/**
 * ModifyDspmAssetLogDeliverySwitch返回参数结构体
 */
export interface ModifyDspmAssetLogDeliverySwitchResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeCosIpInvokeRecordFile请求参数结构体
 */
export interface DescribeCosIpInvokeRecordFileRequest {
  /**
   * appid
   */
  RelAppId: number
  /**
   * 过滤器
   */
  Filter?: Filter
}

/**
 * DescribeBucketInvokeIpList请求参数结构体
 */
export interface DescribeBucketInvokeIpListRequest {
  /**
   * appid
   */
  RelAppId: number
  /**
   * 桶名
   */
  BucketName: string
  /**
   * 过滤条件
   */
  Filter?: Filter
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
 * DescribeDspmAssets请求参数结构体
 */
export interface DescribeDspmAssetsRequest {
  /**
   * 集团账号的成员id
   */
  MemberId?: Array<string>
  /**
   * 筛选项
   */
  Filter?: Filter
}

/**
 * DescribeCWPMachineDetail返回参数结构体
 */
export interface DescribeCWPMachineDetailResponse {
  /**
   * <p>主机详情</p>
   */
  MachineDetail?: MachineDetail
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
 * DescribeExposePath请求参数结构体
 */
export interface DescribeExposePathRequest {
  /**
   * <p>集团账号的成员id</p>
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
 * ModifyDspmRestoreLogTask返回参数结构体
 */
export interface ModifyDspmRestoreLogTaskResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeKeySandboxCredentialList返回参数结构体
 */
export interface DescribeKeySandboxCredentialListResponse {
  /**
   * 凭证数据列表
   */
  Data?: Array<KeySandboxCredential>
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
 * DeleteDspmApplyOrder请求参数结构体
 */
export interface DeleteDspmApplyOrderRequest {
  /**
   * 申请单id
   */
  OrderId?: Array<string>
}

/**
 * 子账号详情
 */
export interface SubUserInfo {
  /**
   * <p>主键ID，无业务意义仅作为唯一键</p>
   */
  ID?: number
  /**
   * <p>子账号Appid</p>
   */
  AppID?: string
  /**
   * <p>子账号UIn</p>
   */
  Uin?: string
  /**
   * <p>子账号名称</p>
   */
  NickName?: string
  /**
   * <p>主账号Appid</p>
   */
  OwnerAppID?: string
  /**
   * <p>主账号Uin</p>
   */
  OwnerUin?: string
  /**
   * <p>主账号名称</p>
   */
  OwnerNickName?: string
  /**
   * <p>所属主账号memberId信息</p>
   */
  OwnerMemberID?: string
  /**
   * <p>账户类型，0为腾讯云账户，1为AWS账户</p>
   */
  CloudType?: number
  /**
   * <p>可访问服务数量</p>
   */
  ServiceCount?: number
  /**
   * <p>可访问接口数量</p>
   */
  InterfaceCount?: number
  /**
   * <p>可访问资源数量</p>
   */
  AssetCount?: number
  /**
   * <p>访问/行为日志数量</p>
   */
  LogCount?: number
  /**
   * <p>权限配置风险</p>
   */
  ConfigRiskCount?: number
  /**
   * <p>危险行为告警</p>
   */
  ActionRiskCount?: number
  /**
   * <p>是否接入操作审计日志</p>
   */
  IsAccessCloudAudit?: boolean
  /**
   * <p>是否配置风险的安全体检</p>
   */
  IsAccessCheck?: boolean
  /**
   * <p>是否配置用户行为管理策略</p>
   */
  IsAccessUeba?: boolean
  /**
   * <p>创建时间（Unix时间戳）</p>
   */
  CreateTime?: number
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
 * 磁盘分区信息
 */
export interface DiskPartitionInfo {
  /**
   * <p>分区名称</p>
   */
  Name?: string
  /**
   * <p>挂载路径</p>
   */
  Path?: string
  /**
   * <p>使用百分比</p>
   */
  Percent?: number
  /**
   * <p>分区大小(MB)</p>
   */
  Size?: number
  /**
   * <p>分区类型</p>
   */
  Type?: string
  /**
   * <p>已使用(MB)</p>
   */
  Used?: number
}

/**
 * ModifyDspmApproveStatus返回参数结构体
 */
export interface ModifyDspmApproveStatusResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeAIAgentAssetList请求参数结构体
 */
export interface DescribeAIAgentAssetListRequest {
  /**
   * 集团账号的成员id
   */
  MemberId?: Array<string>
  /**
   * 筛选
   */
  Filter?: Filter
}

/**
 * SendDspmAssetLoginSmsCode返回参数结构体
 */
export interface SendDspmAssetLoginSmsCodeResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 风险接口情况
 */
export interface CosRiskActionInfo {
  /**
   * 接口名
   */
  ActionName?: string
  /**
   * 接口名中文
   */
  ActionNameCn?: string
  /**
   * 调用次数
   */
  InvokeCount?: number
  /**
   * 最后访问时间Unix时间单位毫秒
   */
  ActionAccessTime?: number
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
 * ModifyDspmAssetAccount返回参数结构体
 */
export interface ModifyDspmAssetAccountResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyDspmRestoreLogTask请求参数结构体
 */
export interface ModifyDspmRestoreLogTaskRequest {
  /**
   * 备份日志Id
   */
  Id: number
  /**
   * 集团账号的成员id
   */
  MemberId?: Array<string>
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
 * Dspm身份关联资产统计
 */
export interface DspmIdentifyAssetStatistic {
  /**
   * 关联资产管理员数。
   */
  ManagerCount?: number
  /**
   * 关联资产普通成员数。
   */
  MemberCount?: number
}

/**
 * DescribeIaCFileList请求参数结构体
 */
export interface DescribeIaCFileListRequest {
  /**
   * <p>过滤条件</p>
   */
  Filter?: Filter
  /**
   * 集团账号的成员id
   */
  MemberId?: Array<string>
}

/**
 * DescribeCosActionList请求参数结构体
 */
export interface DescribeCosActionListRequest {
  /**
   * 过滤器
   */
  Filter?: Filter
}

/**
 * DescribeUserDspmInfoList请求参数结构体
 */
export interface DescribeUserDspmInfoListRequest {
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
 * DescribeCosAlarmList请求参数结构体
 */
export interface DescribeCosAlarmListRequest {
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
 * DescribeSkillScanPayInfo返回参数结构体
 */
export interface DescribeSkillScanPayInfoResponse {
  /**
   * <p>订单所属租户 AppID</p>
   */
  AppID?: number
  /**
   * <p>订单状态<br>枚举值：<br>0：未购买<br>1：正常<br>2：隔离<br>6：试用中<br>7：已过期<br>8：试用到期</p>
   */
  OrderStatus?: number
  /**
   * <p>总配额</p>
   */
  TotalQuota?: number
  /**
   * <p>已消耗配额</p>
   */
  UsedCount?: number
  /**
   * <p>支付模式<br>枚举值：<br>0：后付费<br>1：预付费</p>
   */
  PayMode?: number
  /**
   * <p>自动续费标志<br>枚举值：<br>0：未设置<br>1：自动续费<br>2：不自动续费</p>
   */
  AutoRenew?: number
  /**
   * <p>资源ID</p>
   */
  ResourceId?: string
  /**
   * <p>购买时长</p>
   */
  TimeSpan?: number
  /**
   * <p>时长单位</p>
   */
  TimeUnit?: string
  /**
   * <p>订单开始时间</p>
   */
  BeginTime?: string
  /**
   * <p>订单到期时间</p>
   */
  EndTime?: string
  /**
   * <p>公测结束时间，固定为 2026-06-30 23:59:59</p>
   */
  BetaEndTime?: string
  /**
   * <p>服务器当前时间</p>
   */
  TimeNow?: string
  /**
   * <p>租户 Uin</p>
   */
  Uin?: string
  /**
   * <p>租户昵称</p>
   */
  NickName?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDspmApproveHistory返回参数结构体
 */
export interface DescribeDspmApproveHistoryResponse {
  /**
   * 审批记录总数
   */
  TotalCount?: number
  /**
   * 审批记录信息
   */
  ApproveSet?: Array<DspmApplyOrder>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeCosAccessPermissions返回参数结构体
 */
export interface DescribeCosAccessPermissionsResponse {
  /**
   * 返回数据列表
   */
  Data?: Array<CosAccessInfo>
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
 * ResetDspmAssetAccountPassword请求参数结构体
 */
export interface ResetDspmAssetAccountPasswordRequest {
  /**
   * 实例id
   */
  AssetId: string
  /**
   * 账号名
   */
  Account: string
  /**
   * 主机地址
   */
  Host?: string
  /**
   * 风险id
   */
  RiskId?: string
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
 * 账号dspm信息
 */
export interface UserDspmInfo {
  /**
   * APPID
   */
  AppID?: number
  /**
   * UIN
   */
  Uin?: string
  /**
   * 账号昵称
   */
  NickName?: string
  /**
   * 账号下数据库资产数量
   */
  AssetNum?: number
  /**
   * 账号下开启安全分析数据库资产数量
   */
  UsedAssetNum?: number
  /**
   * 是否被共享，1-被共享，2-未被共享
   */
  IsShared?: number
  /**
   * 是否单独购买，1-单独购买，2-未单独购买
   */
  IsSelfBuy?: number
  /**
   * 配额来源账号
   */
  ShareFromAppID?: number
  /**
   * 云类型（0：腾讯云 1:亚马逊云 2:微软云 3:谷歌云 4:阿里云 5:华为云）
   */
  CloudType?: number
  /**
   * 账号是否隔离中
   */
  IsIsolating?: boolean
  /**
   * 是否正在数据清理
   */
  IsDataCleaning?: boolean
}

/**
 * cos存储桶任务信息
 */
export interface CosBucketTaskInfo {
  /**
   * appid
   */
  AppId?: number
  /**
   * 存储桶名
   */
  BucketName?: string
  /**
   * 任务id
   */
  TaskId?: string
  /**
   * 最后一次扫描时间
   */
  LastScanTime?: number
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
 * DescribeBucketInvokeIpList返回参数结构体
 */
export interface DescribeBucketInvokeIpListResponse {
  /**
   * ip信息
   */
  Data?: Array<CosSourceIpInfo>
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
 * DescribeDspmIdentifyInfo请求参数结构体
 */
export interface DescribeDspmIdentifyInfoRequest {
  /**
   * 集团账号的成员id
   */
  MemberId?: Array<string>
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
 * DescribeCosIpInvokeLog请求参数结构体
 */
export interface DescribeCosIpInvokeLogRequest {
  /**
   * appid
   */
  RelAppId: number
  /**
   * 过滤器
   */
  Filter?: Filter
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
 * DescribeDspmIdentifyInfoList请求参数结构体
 */
export interface DescribeDspmIdentifyInfoListRequest {
  /**
   * 集团账号的成员id
   */
  MemberId?: Array<string>
  /**
   * 筛选项
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
 * DeleteCosAkAsset返回参数结构体
 */
export interface DeleteCosAkAssetResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 操作资产标签资产信息
 */
export interface AssetTagModifyAssetItem {
  /**
   * <p>appid</p>
   */
  AppID: number
  /**
   * <p>资产类型</p>
   */
  AssetType: string
  /**
   * <p>实例ID</p>
   */
  InstanceID: string
  /**
   * <p>云厂商</p>
   */
  Provider: string
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
 * CreateCosObjectScanTask返回参数结构体
 */
export interface CreateCosObjectScanTaskResponse {
  /**
   * <p>任务id</p>
   */
  TaskId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDspmApproveOrderList返回参数结构体
 */
export interface DescribeDspmApproveOrderListResponse {
  /**
   * 审批单总数
   */
  TotalCount?: number
  /**
   * 审批单详情
   */
  OrderSet?: Array<DspmApproverOrder>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDspmApproveOrderList请求参数结构体
 */
export interface DescribeDspmApproveOrderListRequest {
  /**
   * 过滤器
   */
  Filter?: Filter
}

/**
 * Dspm风险趋势
 */
export interface DspmRiskTendency {
  /**
   * 日期
   */
  Date?: string
  /**
   * 未管控账号个数
   */
  UncontrolledAccount?: number
  /**
   * 配置风险个数
   * @deprecated
   */
  ConfigurationRisk?: number
  /**
   * 基线风险个数
   * @deprecated
   */
  BaselineRisk?: number
  /**
   * 泄露风险个数
   * @deprecated
   */
  LeakDetectionRisk?: number
  /**
   * SQL行为异常风险个数
   */
  SQLBehaviorAnomaly?: number
  /**
   * 权限异常风险个数
   */
  PermissionAnomaly?: number
  /**
   * 登录行为异常风险个数
   */
  LoginBehaviorAnomaly?: number
  /**
   * 攻击面风险风险个数
   */
  AttackSurfaceRisk?: number
  /**
   * 账号敏感操作个数
   */
  AccountSensitiveOperation?: number
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
 * cos字典信息
 */
export interface CosDictionary {
  /**
   * <p>字典id</p>
   */
  DictId?: number
  /**
   * <p>字典名称</p>
   */
  DictName?: string
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
 * Skill 能力标签
 */
export interface SkillCapabilityTag {
  /**
   * 能力标签标识，适合程序判定、过滤或聚合使用
   */
  ID?: string
  /**
   * 能力标签展示名称
   */
  Name?: string
}

/**
 * VerifyDspmAssetLoginCode返回参数结构体
 */
export interface VerifyDspmAssetLoginCodeResponse {
  /**
   * 账号
   */
  Account?: string
  /**
   * 密码信息
   */
  Password?: string
  /**
   * 有效期开始时间
   */
  ValidateStart?: string
  /**
   * 有效期结束时间
   */
  ValidateEnd?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
 * DescribeCosAlarmList返回参数结构体
 */
export interface DescribeCosAlarmListResponse {
  /**
   * 总数
   */
  Total?: number
  /**
   * 告警列表
   */
  Data?: Array<CosAlarmInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * Cos资产信息
 */
export interface CosAssetInfo {
  /**
   * <p>appid</p>
   */
  AppId?: number
  /**
   * <p>cos桶名</p>
   */
  BucketName?: string
  /**
   * <p>cos region名</p>
   */
  BucketRegion?: string
  /**
   * <p>地域码值</p>
   */
  BucketRegionCode?: string
  /**
   * <p>cos桶备注</p>
   */
  BucketMarker?: string
  /**
   * <p>cos桶主账号所属者</p>
   */
  BucketOwnerUin?: string
  /**
   * <p>cos主账号所属者昵称</p>
   */
  BucketOwnerNickName?: string
  /**
   * <p>cos桶标签详情</p>
   */
  BucketTagInfo?: string
  /**
   * <p>安全建议<br>1 暂无异常<br>2 建议加固<br>3 立即处理</p>
   */
  BucketSecuritySuggestion?: number
  /**
   * <p>告警列表</p>
   */
  BucketAlarmList?: Array<CosRiskAlarmInfo>
  /**
   * <p>风险列表</p>
   */
  BucketRiskList?: Array<CosRiskAlarmInfo>
  /**
   * <p>调用源ip数</p>
   */
  BucketInvokeSourceIpCount?: number
  /**
   * <p>访问策略</p>
   */
  BucketAccessWay?: CosBucketAccessWay
  /**
   * <p>创建时间Unix时间单位毫秒</p>
   */
  CreateTime?: number
  /**
   * <p>最后访问时间Unix时间单位毫秒</p>
   */
  LastAccessTime?: number
  /**
   * <p>存储桶id</p>
   */
  BucketId?: number
  /**
   * <p>0 关闭<br>1 开启</p>
   */
  MonitorStatus?: number
  /**
   * <p>数据识别扫描信息</p>
   */
  DataScanInfo?: CosAssetDataScanDetail
  /**
   * <p>存储桶Az类型</p><p>枚举值：</p><ul><li>MAZ： 多az</li><li>SAZ： 单az</li></ul>
   */
  BucketAzType?: string
  /**
   * <p>存储桶存储大小</p><p>默认值：0</p>
   */
  BucketStorageSize?: number
  /**
   * <p>存储桶对象个数</p><p>默认值：0</p>
   */
  BucketObjectCount?: number
  /**
   * <p>存储桶敏感识别采样率</p><p>取值范围：[0, 1]</p><p>默认值：0</p>
   */
  IdentifySampleRate?: number
}

/**
 * DescribeExposures请求参数结构体
 */
export interface DescribeExposuresRequest {
  /**
   * <p>集团账号的成员id</p>
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
 * DescribeCosRiskEvidence请求参数结构体
 */
export interface DescribeCosRiskEvidenceRequest {
  /**
   * appid
   */
  RelAppId: number
  /**
   * 策略id
   */
  PolicyId: number
  /**
   * 存储桶名
   */
  BucketName: string
  /**
   * 过滤器
   */
  Filter?: Filter
}

/**
 * DescribeDspmAssetTableList请求参数结构体
 */
export interface DescribeDspmAssetTableListRequest {
  /**
   * 资产实例id
   */
  AssetId: string
  /**
   * 数据库名称
   */
  DbName: string
  /**
   * 集团账号的成员id
   */
  MemberId?: Array<string>
  /**
   * 筛选项
   */
  Filter?: Filter
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
 * DescribeDspmRiskDetail请求参数结构体
 */
export interface DescribeDspmRiskDetailRequest {
  /**
   * 集团账号的成员id
   */
  MemberId?: Array<string>
  /**
   * 过滤器
   */
  Filter?: Filter
  /**
   * 风险id
   */
  RiskId?: string
}

/**
 * cos概览页面数据结构
 */
export interface CosOverview {
  /**
   * 资产总数
   */
  AssetCount?: number
  /**
   * 需要立即处理的资产数
   */
  AlarmAssetCount?: number
  /**
   * 需要加固的资产数
   */
  RiskAssetCount?: number
  /**
   * 告警总数
   */
  AlarmCount?: number
  /**
   * 当日新增告警总数
   */
  IncrementAlarmCount?: number
  /**
   * 风险总数
   */
  RiskCount?: number
  /**
   * 当日新增告警总数
   */
  IncrementRiskCount?: number
  /**
   * 风险top详情
   */
  RiskTop?: Array<CosRiskInfo>
  /**
   * 告警风险top
   */
  AlarmTop?: Array<CosRiskInfo>
}

/**
 * DescribeCosIdentifyFileList请求参数结构体
 */
export interface DescribeCosIdentifyFileListRequest {
  /**
   * <p>存储桶名</p>
   */
  BucketName: string
  /**
   * 集团账号的成员id
   */
  MemberId?: Array<string>
  /**
   * <p>筛选项</p>
   */
  Filter?: Filter
  /**
   * <p>0：没有识别结果 1：有识别结果</p>
   */
  ResultStatus?: number
}

/**
 * DescribeDspmAssetSupportedPrivileges请求参数结构体
 */
export interface DescribeDspmAssetSupportedPrivilegesRequest {
  /**
   * 资产id
   */
  AssetId: string
}

/**
 * DescribePolicyHitData请求参数结构体
 */
export interface DescribePolicyHitDataRequest {
  /**
   * 查看的日期时间戳
   */
  IndexTimestamp: number
  /**
   * 集团账号的成员id
   */
  MemberId?: Array<string>
}

/**
 * DescribeCosSourceIp返回参数结构体
 */
export interface DescribeCosSourceIpResponse {
  /**
   * 列表信息
   */
  Data?: Array<CosSourceIpInfo>
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
 * CreateDspmAccessExportJob请求参数结构体
 */
export interface CreateDspmAccessExportJobRequest {
  /**
   * 集团账号的成员id
   */
  MemberId?: Array<string>
  /**
   * 视图类型
   */
  View?: string
  /**
   * 过滤器
   */
  Filter?: Filter
}

/**
 * DescribeDspmRiskStrategyGroup请求参数结构体
 */
export interface DescribeDspmRiskStrategyGroupRequest {
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
 * IaC检测文件风险
 */
export interface IaCFileRisk {
  /**
   * <p>风险等级(0:低危,1:中危,2:高危,3:严重)</p>
   */
  Level?: number
  /**
   * <p>风险所在行数</p>
   */
  Line?: number
  /**
   * <p>规则名称</p>
   */
  RuleName?: string
  /**
   * <p>问题描述</p>
   */
  Description?: string
  /**
   * <p>修复建议</p>
   */
  Suggestion?: string
}

/**
 * 访客申请记录
 */
export interface DspmPersonApplyHistoryItem {
  /**
   * 资产id
   */
  AssetId?: string
  /**
   * 姓名
   */
  PersonName?: string
  /**
   * 手机号
   */
  Phone?: string
  /**
   * 访问权限生效时间。
   */
  ValidateFrom?: string
  /**
   * 访问权限失效时间。
   */
  ValidateTo?: string
  /**
   * 访问权限有效时间。单位毫秒。
   */
  ValidatePeriod?: number
  /**
   * 权限信息。
   */
  Privilege?: DspmDbAccountPrivilege
  /**
   * 是否有效。0-无效；1-有效。
   */
  ValidStatus?: number
}

/**
 * DescribeCosAccessPermission请求参数结构体
 */
export interface DescribeCosAccessPermissionRequest {
  /**
   * 关联的appid
   */
  RelAppId: number
  /**
   * 桶名
   */
  BucketName: string
  /**
   * 需要查看的uin
   */
  RelUin: string
  /**
   * 过滤器
   */
  Filter?: Filter
}

/**
 * 调度任务配置
 */
export interface DspmScheduleConfig {
  /**
   * 调度类型: daily(按天), weekly(按周), monthly(按月)
   */
  ScheduleType?: string
  /**
   * 按天不传，按周调度配置（星期几 (1=周一, ..., 7=周日)），按月调度配置（每月第几天 (1-31)）
注意：此字段可能返回 null，表示取不到有效值。
   */
  Day?: number
  /**
   * 调度时间配置
注意：此字段可能返回 null，表示取不到有效值。
   */
  Time?: string
  /**
   * 时区,默认东八区（Asia/Shanghai）
   */
  TimeZone?: string
}

/**
 * DeleteDspmRestoreLogList请求参数结构体
 */
export interface DeleteDspmRestoreLogListRequest {
  /**
   * 日志Id
   */
  Id: number
  /**
   * 集团账号的成员id
   */
  MemberId?: Array<string>
}

/**
 * CreateDspmAccessExportJob返回参数结构体
 */
export interface CreateDspmAccessExportJobResponse {
  /**
   * 任务ID
   */
  JobID?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateDspmAssetsExportJob请求参数结构体
 */
export interface CreateDspmAssetsExportJobRequest {
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
 * CreateDspmPersonalIdentify返回参数结构体
 */
export interface CreateDspmPersonalIdentifyResponse {
  /**
   * 个人id
   */
  PersonId?: string
  /**
   * 身份id
   */
  IdentifyId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * Dspm ip 统计数
 */
export interface DspmIpCount {
  /**
   * 访问Ip个数
   */
  IpCount?: number
  /**
   * 未打标公网Ip个数
   */
  UnmarkedPublicIpCount?: number
  /**
   * 内网Ip个数
   */
  PrivateIpCount?: number
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
 * dspm资产字段信息
 */
export interface DspmAssetFieldInfo {
  /**
   * <p>资产实例id</p>
   */
  AssetId?: string
  /**
   * <p>数据库名称</p>
   */
  DbName?: string
  /**
   * <p>schema名</p>
   */
  SchemaName?: string
  /**
   * <p>表名</p>
   */
  TableName?: string
  /**
   * <p>字段名</p>
   */
  FieldName?: string
  /**
   * <p>数据项id集合</p>
   */
  RuleIds?: Array<number | bigint>
  /**
   * <p>数据项名称集合</p>
   */
  RuleNames?: Array<string>
  /**
   * <p>分类id集合</p>
   */
  CategoryIds?: Array<number | bigint>
  /**
   * <p>分类名称集合</p>
   */
  CategoryNames?: Array<string>
  /**
   * <p>分类详情</p>
   */
  CategoryDetails?: Array<DspmIdentifyCategoryDetail>
  /**
   * <p>字段注释</p>
   */
  FieldComment?: string
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
 * RetryDspmExportLog返回参数结构体
 */
export interface RetryDspmExportLogResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 主机列表
 */
export interface MachineDetail {
  /**
   * <p>Agent状态</p>
   */
  AgentStatus?: string
  /**
   * <p>Agent版本</p>
   */
  AgentVersion?: string
  /**
   * <p>账号AppId</p>
   */
  AppId?: number
  /**
   * <p>资产类型名称</p>
   */
  AssetTypeName?: string
  /**
   * <p>系统启动时间（Unix时间戳）</p>
   */
  BootTime?: number
  /**
   * <p>购买时间（Unix时间戳）</p>
   */
  BuyTime?: number
  /**
   * <p>云服务商</p>
   */
  CloudFromEnum?: string
  /**
   * <p>云标签列表</p>
   */
  CloudTags?: Array<Tags>
  /**
   * <p>内核版本</p>
   */
  CoreVersion?: string
  /**
   * <p>CPU信息</p>
   */
  Cpu?: string
  /**
   * <p>CPU负载</p>
   */
  CpuLoad?: string
  /**
   * <p>CPU核数</p>
   */
  CpuSize?: number
  /**
   * <p>设备型号</p>
   */
  DeviceVersion?: string
  /**
   * <p>磁盘分区信息</p>
   */
  Disks?: Array<DiskPartitionInfo>
  /**
   * <p>到期时间（Unix时间戳）</p>
   */
  EndTime?: number
  /**
   * <p>暴露状态</p>
   */
  ExposedStatus?: string
  /**
   * <p>安装时间（Unix时间戳）</p>
   */
  InstallTime?: number
  /**
   * <p>实例ID</p>
   */
  InstanceID?: string
  /**
   * <p>实例状态</p>
   */
  InstanceStatus?: string
  /**
   * <p>内核版本</p>
   */
  KernelVersion?: string
  /**
   * <p>最近一次在线时间（Unix时间戳）</p>
   */
  LatestLiveTime?: number
  /**
   * <p>最近一次离线时间（Unix时间戳）</p>
   */
  LatestOfflineTime?: number
  /**
   * <p>内网IP</p>
   */
  MachineIp?: string
  /**
   * <p>主机名称</p>
   */
  MachineName?: string
  /**
   * <p>操作系统（云采集）</p>
   */
  MachineOs?: string
  /**
   * <p>主机状态</p>
   */
  MachineStatus?: string
  /**
   * <p>外网IP</p>
   */
  MachineWanIp?: string
  /**
   * <p>内存大小(MB)</p>
   */
  MemSize?: number
  /**
   * <p>内存使用率</p>
   */
  MemoryLoad?: string
  /**
   * <p>网卡信息</p>
   */
  NetCards?: Array<NetworkCardInfo>
  /**
   * <p>操作系统（端采集）</p>
   */
  OsByAgent?: string
  /**
   * <p>付费模式</p>
   */
  PayMode?: string
  /**
   * <p>项目ID</p>
   */
  ProjectId?: number
  /**
   * <p>已防护天数</p>
   */
  ProtectDays?: number
  /**
   * <p>防护类型</p>
   */
  ProtectType?: string
  /**
   * <p>主机唯一标识</p>
   */
  Quuid?: string
  /**
   * <p>地域信息</p>
   */
  RegionInfo?: RegionInfo
  /**
   * <p>备注</p>
   */
  Remark?: string
  /**
   * <p>序列号</p>
   */
  SerialNumber?: string
  /**
   * <p>资产标签列表</p>
   */
  TagItems?: Array<MiniTagItem>
  /**
   * <p>标签修改信息</p>
   */
  TagModifyInfo?: AssetTagModifyAssetItem
  /**
   * <p>Agent唯一标识</p>
   */
  Uuid?: string
  /**
   * <p>VPC CIDR</p>
   */
  VpcCidrBlock?: string
  /**
   * <p>VPC ID</p>
   */
  VpcId?: string
  /**
   * <p>VPC名称</p>
   */
  VpcName?: string
  /**
   * <p>主机节点类型</p><p>枚举值：</p><ul><li>NONE： 主机节点</li><li>CLUSTER： 集群节点</li><li>CONTAINER： 容器节点</li></ul>
   */
  NodeType?: string
  /**
   * <p>容器防护状态</p><p>枚举值：</p><ul><li>Enabled： 开启防护</li><li>Disabled： 关闭防护</li><li>Unknown： 未知</li></ul>
   */
  ContainerDefendStatus?: string
  /**
   * <p>集群签证md5</p>
   */
  ClusterCaMd5?: string
  /**
   * <p>容器环境信息</p>
   */
  ContainerEnvInfo?: ContainerEnvInfo
  /**
   * <p>集群id</p>
   */
  ClusterId?: string
  /**
   * <p>集群名称</p>
   */
  ClusterName?: string
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
 * CreateDspmApproveHistoryExportJob请求参数结构体
 */
export interface CreateDspmApproveHistoryExportJobRequest {
  /**
   * 过滤器
   */
  Filter?: Filter
}

/**
 * CreateDspmRiskExportJob返回参数结构体
 */
export interface CreateDspmRiskExportJobResponse {
  /**
   * 任务ID
   */
  JobID?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeIpInvokeRecord返回参数结构体
 */
export interface DescribeIpInvokeRecordResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeCosRoleAccessPermissions返回参数结构体
 */
export interface DescribeCosRoleAccessPermissionsResponse {
  /**
   * 总数
   */
  Total?: number
  /**
   * 角色详情
   */
  Data?: Array<CosRoleAccessInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyCosMarkInfo返回参数结构体
 */
export interface ModifyCosMarkInfoResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 命中规则项
 */
export interface SkillScanRuleHit {
  /**
   * 融合规则编号（9xxxx），可与 RuleCatalog 交叉引用
   */
  RuleID?: string
  /**
   * 当前命中规则的具体发现描述，包含文件位置、行为特征、风险点等信息
   */
  Description?: string
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
 * ModifyDspmAssetLogDeliverySwitch请求参数结构体
 */
export interface ModifyDspmAssetLogDeliverySwitchRequest {
  /**
   * 实例id
   */
  AssetId: string
  /**
   * 集团账号的成员id
   */
  MemberId?: Array<string>
  /**
   * 开关。1-打开 0-关闭
   */
  Enable?: number
}

/**
 * 个人用户信息
 */
export interface DspmPersonUser {
  /**
   * 个人id
   */
  PersonId?: string
  /**
   * 姓名
   */
  PersonName?: string
  /**
   * 手机号
   */
  Phone?: string
}

/**
 * ModifyDspmAssetAccountPrivileges请求参数结构体
 */
export interface ModifyDspmAssetAccountPrivilegesRequest {
  /**
   * 实例id
   */
  AssetId: string
  /**
   * 账号名
   */
  Account: string
  /**
   * 权限信息
   */
  Privilege?: DspmDbAccountPrivilege
  /**
   * 主机地址
   */
  Host?: string
  /**
   * 风险id
   */
  RiskId?: string
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
 * DescribeDspmAssetDatabases请求参数结构体
 */
export interface DescribeDspmAssetDatabasesRequest {
  /**
   * 资产id
   */
  AssetId: string
}

/**
 * DescribeRiskBucketList请求参数结构体
 */
export interface DescribeRiskBucketListRequest {
  /**
   * 关联的appid
   */
  RelAppId: number
  /**
   * 规则id
   */
  PolicyId: string
  /**
   * 过滤器
   */
  Filter?: Filter
}

/**
 * CreateCosRiskScanTask返回参数结构体
 */
export interface CreateCosRiskScanTaskResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeCosRoleAccessPermission返回参数结构体
 */
export interface DescribeCosRoleAccessPermissionResponse {
  /**
   * cos权限信息
   */
  Data?: Array<CosPermissionInfo>
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
 * CreateDspmIdentifyInfoListExportJob请求参数结构体
 */
export interface CreateDspmIdentifyInfoListExportJobRequest {
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
 * CreateIaCFileExportJob请求参数结构体
 */
export interface CreateIaCFileExportJobRequest {
  /**
   * <p>过滤条件</p>
   */
  Filter?: Filter
  /**
   * 集团账号的成员id
   */
  MemberId?: Array<string>
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
 * STS临时密钥凭据（出参专用），用于查询详情接口的响应。SecretID和SecretKey字段返回打码后的值，System返回原文
 */
export interface STSCredentialOutput {
  /**
   * 凭据提供商标识（原文），如tencentCam、aws、aliyun等
   */
  System?: string
  /**
   * SecretID（打码后）
补充说明：保留前3后4位，中间用***替代；长度不足7位时全部替换为***
   */
  SecretID?: string
  /**
   * SecretKey（打码后）
补充说明：保留前3后4位，中间用***替代；长度不足7位时全部替换为***
   */
  SecretKey?: string
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
 * CreateIaCAccessToken请求参数结构体
 */
export interface CreateIaCAccessTokenRequest {
  /**
   * <p>CI/CD名称</p>
   */
  Name: string
  /**
   * <p>扫描结果存储时长(30/60/90/120/150/180天)</p>
   */
  Period: number
}

/**
 * DescribeDspmExportTask返回参数结构体
 */
export interface DescribeDspmExportTaskResponse {
  /**
   * 任务列表
   */
  List?: Array<ExportTask>
  /**
   * 任务总数
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
 * CreateDspmApproveHistoryExportJob返回参数结构体
 */
export interface CreateDspmApproveHistoryExportJobResponse {
  /**
   * 任务ID
   */
  JobID?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * cos权限信息
 */
export interface CosPermissionInfo {
  /**
   * 权限来源
   */
  PermissionSource?: string
  /**
   * 权限内容
   */
  PermissionContent?: string
  /**
   * 授权资源
   */
  GrantResource?: string
  /**
   * 授权动作
   */
  GrantAction?: string
  /**
   * 授权条件
   */
  GrantCondition?: string
}

/**
 * DescribeDspmDictionaryList返回参数结构体
 */
export interface DescribeDspmDictionaryListResponse {
  /**
   * 结果集
   */
  DataSet?: Array<DspmDictionary>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeIaCFileList返回参数结构体
 */
export interface DescribeIaCFileListResponse {
  /**
   * <p>列表</p>
   */
  List?: Array<IaCFile>
  /**
   * <p>总数</p>
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDspmAssetSupportedPrivileges返回参数结构体
 */
export interface DescribeDspmAssetSupportedPrivilegesResponse {
  /**
   * 实例支持的全局权限。
   */
  GlobalSupportedPrivileges?: Array<string>
  /**
   * 实例支持的数据库权限。
   */
  DatabaseSupportedPrivileges?: Array<string>
  /**
   * 实例支持的数据库表权限。
   */
  TableSupportedPrivileges?: Array<string>
  /**
   * 实例支持的数据库列权限。
   */
  ColumnSupportedPrivileges?: Array<string>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateDspmWhitelistStrategy返回参数结构体
 */
export interface CreateDspmWhitelistStrategyResponse {
  /**
   * 白名单id
   */
  WhitelistStrategyId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 规则集合
 */
export interface HitRules {
  /**
   * 规则Id
   */
  RuleId: number
  /**
   * 规则
   */
  RuleName: string
}

/**
 * Dspm身份统计信息
 */
export interface DspmIdentifyCount {
  /**
   * 身份类型。0-未定义 2-长期身份 3-临时身份
   */
  IdentifyType?: number
  /**
   * 个数。
   */
  Count?: number
}

/**
 * Dspm访问记录
 */
export interface DspmAccessRecord {
  /**
   * 资产信息
   */
  Asset?: DspmDbAsset
  /**
   * 账号
   */
  Accounts?: Array<DspmAssetAccount>
  /**
   * 来源ip信息
   */
  SourceIpList?: Array<DspmIp>
  /**
   * 记录时间
   */
  RecordTime?: string
  /**
   * 登录成功次数
   */
  LoginSuccessCount?: number
  /**
   * 登录失败次数
   */
  LoginFailedCount?: number
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
 * ModifyDspmPersonalIdentify请求参数结构体
 */
export interface ModifyDspmPersonalIdentifyRequest {
  /**
   * 身份id
   */
  PersonId: string
  /**
   * 手机号
   */
  Phone?: string
  /**
   * 备注
   */
  Remark?: string
}

/**
 * CreateIaCAccessToken返回参数结构体
 */
export interface CreateIaCAccessTokenResponse {
  /**
   * <p>接入Token</p>
   */
  Token?: string
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
 * Dspm 资产按类型统计数
 */
export interface DspmAssetTypeCount {
  /**
   * 资产类型
   */
  AssetType?: string
  /**
   * 资产安全分析开启数
   */
  OpenCount?: number
  /**
   * 资产安全分析开启中数
   */
  OpeningCount?: number
  /**
   * 资产安全分析关闭中数
   */
  ClosingCount?: number
  /**
   * 资产安全分析未开启数
   */
  CloseCount?: number
}

/**
 * DescribeCosAssetSyncTask返回参数结构体
 */
export interface DescribeCosAssetSyncTaskResponse {
  /**
   * 数据信息
   */
  Data?: Array<CosAssetSyncTaskInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDspmApproveHistory请求参数结构体
 */
export interface DescribeDspmApproveHistoryRequest {
  /**
   * 筛选项
   */
  Filter?: Filter
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
 * DescribeRiskRuleDetail返回参数结构体
 */
export interface DescribeRiskRuleDetailResponse {
  /**
   * <p>风险规则ID</p>
   */
  RiskRuleId?: string
  /**
   * <p>云厂商</p>
   */
  Provider?: string
  /**
   * <p>风险名称</p>
   */
  RiskName?: string
  /**
   * <p>风险危害</p>
   */
  RiskInfluence?: string
  /**
   * <p>修复指引</p>
   */
  RiskFixAdvice?: string
  /**
   * <p>资产类型</p>
   */
  AssetType?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * VerifyDspmAssetLoginCode请求参数结构体
 */
export interface VerifyDspmAssetLoginCodeRequest {
  /**
   * 个人id
   */
  PersonId: string
  /**
   * 数据库资产id
   */
  AssetId: string
  /**
   * 验证码
   */
  Code: string
  /**
   * 主机。默认'%'
   */
  Host?: string
}

/**
 * DescribeDspmBackupSetting返回参数结构体
 */
export interface DescribeDspmBackupSettingResponse {
  /**
   * 备份日志保留时长
   */
  BackupLogSaveTime?: number
  /**
   * 恢复日志保留时长
   */
  RestoreLogSaveTime?: number
  /**
   * 日志最大生命周期限制
   */
  LogMaxSaveTime?: number
  /**
   * 在线日志最大天数限制
   */
  OnlineLogMaxSaveTime?: number
  /**
   * 最大在线日志条数，单位是：个
   */
  MaxOnlineLogCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateSkillScan返回参数结构体
 */
export interface CreateSkillScanResponse {
  /**
   * 文件的 SHA256 Hash，用于轮询 DescribeSkillScanResult 接口
参数格式：sha256:<64位hex>
   */
  ContentHash?: string
  /**
   * 本次请求实际绑定的引擎版本号。调用方应保存并在后续 DescribeSkillScanResult 时显式传入
   */
  EngineVersion?: number
  /**
   * 任务状态，固定为 SCANNING，表示任务已接收
   */
  Status?: string
  /**
   * 可读的操作结果描述
   */
  Message?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeCosAkAsset返回参数结构体
 */
export interface DescribeCosAkAssetResponse {
  /**
   * 总数
   */
  Total?: number
  /**
   * ak资产列表
   */
  Data?: Array<CosAkAssetInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDspmPayInfo请求参数结构体
 */
export interface DescribeDspmPayInfoRequest {
  /**
   * 集团账号的成员id
   */
  MemberId?: Array<string>
}

/**
 * 数据库字段描述
 */
export interface TableField {
  /**
   * 数据库名
   */
  DB?: string
  /**
   * 数据库视图名
   */
  Schema?: string
  /**
   * 数据库表名
   */
  Table?: string
  /**
   * 数据库字段名
   */
  Field?: string
  /**
   * 字段敏感信息
   */
  Sensitive?: SensitiveDetail
}

/**
 * DescribeIaCFileReport请求参数结构体
 */
export interface DescribeIaCFileReportRequest {
  /**
   * <p>资产ID</p>
   */
  AssetId: number
  /**
   * 集团账号的成员id
   */
  MemberId?: Array<string>
}

/**
 * ModifyDspmAssetAccountPrivileges返回参数结构体
 */
export interface ModifyDspmAssetAccountPrivilegesResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyDspmWhitelistStrategy请求参数结构体
 */
export interface ModifyDspmWhitelistStrategyRequest {
  /**
   * 集团账号的成员id
   */
  MemberId?: Array<string>
  /**
   * 白名单id
   */
  WhitelistStrategyId?: string
  /**
   * 白名单名
   */
  Name?: string
  /**
   * 规则
   */
  Rule?: string
  /**
   * 备注
   */
  Remark?: string
}

/**
 * CI/CD接入Token
 */
export interface CICDToken {
  /**
   * <p>ID</p>
   */
  Id?: number
  /**
   * <p>appid</p>
   */
  AppId?: number
  /**
   * <p>CI/CD名称</p>
   */
  Name?: string
  /**
   * <p>用于接入的Token</p>
   */
  Token?: string
  /**
   * <p>扫描结果存储时长</p>
   */
  Period?: number
  /**
   * <p>已扫描文件</p>
   */
  FileCnt?: number
  /**
   * <p>最近扫描状态</p>
   */
  LastScanStatus?: string
  /**
   * <p>最近扫描时间</p>
   */
  LastScanTime?: string
}

/**
 * DescribeSkillScanResult请求参数结构体
 */
export interface DescribeSkillScanResultRequest {
  /**
   * ZIP 文件的 SHA256 Hash
参数格式：sha256:<64位hex>
   */
  ContentHash: string
  /**
   * 指定引擎版本号
取值参考：由 CreateSkillScan 接口返回
   */
  EngineVersion: number
  /**
   * 报告签名地址有效期
单位：小时
默认值：8760（1年）
补充说明：对返回的 ReportURL 生效
   */
  ReportURLExpireHours?: number
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
 * 存储桶数量
 */
export interface CosBucketBillingInfo {
  /**
   * <p>appid</p>
   */
  AppId?: number
  /**
   * <p>uin</p>
   */
  OwnerUin?: string
  /**
   * <p>昵称</p>
   */
  OwnerNickName?: string
  /**
   * <p>存储桶数量</p>
   */
  BucketCount?: number
  /**
   * <p>0 未购买 1  已单独购买 2 已被共享</p>
   */
  BuyStatus?: number
  /**
   * <p>共享账号appid</p>
   */
  ShareFromAppId?: number
  /**
   * <p>共享账号uin</p>
   */
  ShareFromUin?: string
  /**
   * <p>共享账号昵称</p>
   */
  ShareFromNickName?: string
  /**
   * <p>监控的存储桶数</p>
   */
  MonitorBucketCount?: number
  /**
   * <p>0 关闭 1 开启</p>
   */
  IsAutoMonitor?: number
  /**
   * <p>是否启用白名单日志功能</p>
   */
  LogFeatureWhitelist?: boolean
  /**
   * <p>是否存在新的后付费订单</p>
   */
  IsHaveNewPostOrder?: boolean
  /**
   * <p>是否存在旧后付费订单</p>
   */
  IsHaveOldPostOrder?: boolean
  /**
   * <p>后付费产品列表</p>
   */
  PostProductList?: Array<number | bigint>
}

/**
 * CreateIaCFileExportJob返回参数结构体
 */
export interface CreateIaCFileExportJobResponse {
  /**
   * <p>任务ID</p>
   */
  JobID?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDspmApplyOrderList返回参数结构体
 */
export interface DescribeDspmApplyOrderListResponse {
  /**
   * 申请单总数
   */
  TotalCount?: number
  /**
   * 申请单详情
   */
  OrderSet?: Array<DspmApplyOrder>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDspmAccessTopologyAssets请求参数结构体
 */
export interface DescribeDspmAccessTopologyAssetsRequest {
  /**
   * 集团账号的成员id
   */
  MemberId?: Array<string>
  /**
   * 过滤器。 支持的FilterName:  Ip/Account
   */
  Filter?: Filter
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
 * Dspm Ip信息
 */
export interface DspmIp {
  /**
   * ip地址
   */
  Ip?: string
  /**
   * ip类型。public-公网 private-内网
   */
  IpType?: string
  /**
   * ip标记信息
   */
  Remark?: string
  /**
   * 是否已经标记信息
   */
  IsRemarked?: number
  /**
   * ip归属实例id
   */
  ResourceInstanceId?: string
  /**
   * ip所属产品
   */
  ResourceType?: string
  /**
   * ip所属地域
   */
  Area?: DspmArea
  /**
   * 是否新ip地址
   */
  IsNewIp?: number
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
 * ModifyDspmAssetDataScanTask返回参数结构体
 */
export interface ModifyDspmAssetDataScanTaskResponse {
  /**
   * 识别任务id集合
   */
  TaskIdSet?: Array<number | bigint>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
 * DescribeCosIpInvokeRecordFile返回参数结构体
 */
export interface DescribeCosIpInvokeRecordFileResponse {
  /**
   * 总数
   */
  Total?: number
  /**
   * 文件列表
   * @deprecated
   */
  Data?: Array<string>
  /**
   * 文件列表详情
   */
  DataSet?: Array<CosAssetFileIdentifyInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeCosAccessPermission返回参数结构体
 */
export interface DescribeCosAccessPermissionResponse {
  /**
   * cos权限信息
   */
  Data?: Array<CosPermissionInfo>
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
 * 公网IP和域名资产列表key
 */
export interface PublicIpDomainListKey {
  /**
   * 资产值
   */
  Asset: string
}

/**
 * DescribeDspmLogList请求参数结构体
 */
export interface DescribeDspmLogListRequest {
  /**
   * 集团账号的成员id
   */
  MemberId?: Array<string>
  /**
   * 限制数目
   */
  Limit?: number
  /**
   * 偏移量
   */
  Offset?: number
  /**
   * 排序方式(desc=倒叙,asc=升序)
   */
  Sort?: string
  /**
   * 排序字段(opTime=时间,dangerLvl=风险等级)
   */
  Field?: string
  /**
   * 风险等级(0-安全,1-低风险,2-中风险,3-高风险,不传全部)
   */
  DangerLevel?: string
  /**
   * 数据库名称
   */
  DbName?: string
  /**
   * 数据库端口
   */
  DbPort?: number
  /**
   * 数据库 IP
   */
  DbIp?: string
  /**
   * 资产 ID
   */
  AssetsId?: number
  /**
   * 会话 ID
   */
  SessionId?: string
  /**
   * 客户端 IP
   */
  ClientSideIp?: string
  /**
   * 结束时间
   */
  EndTime?: number
  /**
   * 命中规则
   */
  HitRule?: number
  /**
   * 开始时间
   */
  StartTime?: number
  /**
   * 模糊查询
   */
  FuzzySearch?: string
  /**
   * 用户名
   */
  UserName?: string
  /**
   * 恢复日志id
   */
  RestoreLogId?: number
  /**
   * 客户端
   */
  ClientName?: string
  /**
   * 流量来源，取值 Agent/Proxy/空；传Agent会返回Agent的日志，传Proxy会返回Proxy日志，两者都传或不传则返回所有
   */
  SourceTypes?: Array<string>
  /**
   * 表名，长度限制64，多个表名查询的话可以用空格连接
   */
  TableName?: string
  /**
   * 字段名，长度限制64，多个字段名查询的话可以用空格连接
   */
  FieldName?: string
  /**
   * SQL 主要类型，DDL, DML, DCL, TCL
   */
  SqlMainTypes?: Array<string>
  /**
   * 操作类型
   */
  SqlType?: string
  /**
   * 影响行数最小值
   */
  RowNumMin?: number
  /**
   * 影响行数最大值
   */
  RowNumMax?: number
  /**
   * 数据库类型
   */
  DbTypes?: Array<string>
  /**
   * 返回码
   */
  RetNo?: number
  /**
   * 客户端工具
   */
  ClientDriverName?: string
  /**
   * 客户端端口
   */
  ClientPort?: number
  /**
   * 审计日志 ID
   */
  LogId?: string
  /**
   * 风险等级数组(0-安全,1-低风险,2-中风险,3-高风险)
   */
  DangerLevels?: Array<number | bigint>
  /**
   * 字段分类
   */
  SensitiveCategoryRule?: string
  /**
   * 字段分级
   */
  SensitiveLevelRisk?: string
  /**
   * 客户端MAC
   */
  ClientMac?: string
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
 * 数据库账号权限信息
 */
export interface DspmDbAccountPrivilege {
  /**
   * 使用默认权限。0-未使用；1-只读权限，即SELECT权限；2-全部权限，即global级别全部权限。
   */
  UseDefaultPrivilege?: number
  /**
   * 全局权限数组。
   */
  GlobalPrivileges?: Array<string>
  /**
   * 数据库权限数组。
   */
  DatabasePrivilegesList?: Array<DspmDatabasePrivilege>
  /**
   * 数据库中的表权限数组。
   */
  TablePrivileges?: Array<DspmTablePrivilege>
  /**
   * 数据库表中的列权限数组。
   */
  ColumnPrivileges?: Array<DspmColumnPrivilege>
}

/**
 * ModifyDspmIdentifyInfo返回参数结构体
 */
export interface ModifyDspmIdentifyInfoResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * dspm资产数据库信息
 */
export interface DspmAssetDatabaseInfo {
  /**
   * 资产实例id
   */
  AssetId?: string
  /**
   * 数据库名称
   */
  DbName?: string
  /**
   * 总表数
   */
  TableCount?: number
  /**
   * 敏感表数
   */
  SensitiveTableCount?: number
  /**
   * 数据项id集合
   */
  RuleIds?: Array<number | bigint>
  /**
   * 数据项名称集合
   */
  RuleNames?: Array<string>
  /**
   * 分类id集合
   */
  CategoryIds?: Array<number | bigint>
  /**
   * 分类名称集合
   */
  CategoryNames?: Array<string>
  /**
   * 分类详情
   */
  CategoryDetails?: Array<DspmIdentifyCategoryDetail>
}

/**
 * 列权限信息
 */
export interface DspmColumnPrivilege {
  /**
   * 数据库名
   */
  Database?: string
  /**
   * 数据库表名
   */
  Table?: string
  /**
   * 数据库列名
   */
  Column?: string
  /**
   * 权限信息
   */
  Privileges?: Array<string>
}

/**
 * CreateDspmAssetAccessTopologyExportJob返回参数结构体
 */
export interface CreateDspmAssetAccessTopologyExportJobResponse {
  /**
   * 任务ID
   */
  JobID?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeCosBucketList返回参数结构体
 */
export interface DescribeCosBucketListResponse {
  /**
   * 总数
   */
  Total?: number
  /**
   * 资产信息
   */
  Data?: Array<CosAssetInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDspmAccessRecord返回参数结构体
 */
export interface DescribeDspmAccessRecordResponse {
  /**
   * 访问记录
   */
  AccessSet?: Array<DspmAccessRecord>
  /**
   * 记录总数
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDspmIdentifyIdList返回参数结构体
 */
export interface DescribeDspmIdentifyIdListResponse {
  /**
   * id总数
   */
  TotalCount?: number
  /**
   * 身份id列表
   */
  IdSet?: Array<DspmIdentifyIdItem>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteDspmBackupLogList返回参数结构体
 */
export interface DeleteDspmBackupLogListResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeCosAuditAppIdList请求参数结构体
 */
export type DescribeCosAuditAppIdListRequest = null

/**
 * cos风险详情
 */
export interface CosRiskInfo {
  /**
   * 策略类型码值
   */
  PolicyType?: number
  /**
   * 策略分类名
   */
  PolicyTypeName?: string
  /**
   * 命中策略总数
   */
  PolicyCount?: number
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
 * 资产账号身份信息
 */
export interface DspmAssetAccountIdentify {
  /**
   * 资产id
   */
  AssetId?: string
  /**
   * 所属云账号uin用户。
   */
  OwnerUin?: DspmUinUser
  /**
   * 是否管理员
   */
  IsManager?: number
  /**
   * 主机地址
   */
  Host?: string
  /**
   * 账号类型。 0-未定义 1-服务账号 2-个人账号 3-临时账号
   */
  AccountType?: number
  /**
   * 权限信息
   */
  Privilege?: DspmDbAccountPrivilege
  /**
   * 活跃状态。 0-不活跃 1-活跃
   */
  Status?: number
  /**
   * 账号创建时间。
   */
  CreateTime?: string
  /**
   * 访问权限生效时间。
   */
  ValidateFrom?: string
  /**
   * 访问权限失效时间。
   */
  ValidateTo?: string
  /**
   * 备注
   */
  Remark?: string
  /**
   * 访客权限申请次数
   */
  PersonApplyCount?: number
  /**
   * 资产名
   */
  AssetName?: string
  /**
   * 资产类型
   */
  AssetType?: string
  /**
   * 所属地域
   */
  Region?: string
  /**
   * 风险统计信息
   */
  RiskCount?: DspmRiskCount
  /**
   * 身份类型。非身份账号为null。0-未定义 2-长期身份 3-临时身份
   */
  IdentifyType?: number
  /**
   * 所属个人用户信息。
   */
  Person?: DspmPersonUser
  /**
   * 创建者账号uin用户。
   */
  CreatorUin?: DspmUinUser
  /**
   * 预设权限。
   */
  PresetPrivilege?: DspmDbAccountPrivilege
  /**
   * 内网访问地址，如果有多个，使用';'分割
   */
  PrivateIp?: string
  /**
   * 身份id
   */
  IdentifyId?: string
  /**
   * 资产所属账号app id
   */
  AppId?: number
  /**
   * 账号昵称
   */
  NickName?: string
  /**
   * 资产所属账号uin
   */
  Uin?: string
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
 * DescribeCosAlarmTrendData请求参数结构体
 */
export interface DescribeCosAlarmTrendDataRequest {
  /**
   * 集团账号的成员id
   */
  MemberId?: Array<string>
  /**
   * 需要查看多久的时间
   */
  LastDays?: number
}

/**
 * RetryDspmExportLog请求参数结构体
 */
export interface RetryDspmExportLogRequest {
  /**
   * 集团账号的成员id
   */
  MemberId?: Array<string>
  /**
   * 任务ID
   */
  TaskId?: number
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
 * CreateCosObjectScanTask请求参数结构体
 */
export interface CreateCosObjectScanTaskRequest {
  /**
   * <p>1: 敏感数据识别 2:恶意文件扫描 3:批量扫描敏感数据</p>
   */
  TaskType: number
  /**
   * <p>集团账号的成员id</p>
   */
  MemberId?: Array<string>
  /**
   * <p>存储桶列表</p>
   */
  BucketSet?: Array<string>
  /**
   * <p>任务参数</p>
   */
  TaskArgs?: string
  /**
   * <p>是否全部扫描</p>
   */
  IsScanAll?: boolean
  /**
   * <p>扫描时需要剔除的存储桶</p>
   */
  DeleteBucketSet?: Array<string>
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
 * ModifyDspmAssetAccount请求参数结构体
 */
export interface ModifyDspmAssetAccountRequest {
  /**
   * 实例id
   */
  AssetId: string
  /**
   * 账号名
   */
  Account: string
  /**
   * 集团账号的成员id
   */
  MemberId?: Array<string>
  /**
   * 主机地址
   */
  Host?: string
  /**
   * 账号类型
   */
  AccountType?: number
  /**
   * 备注
   */
  Remark?: string
  /**
   * 风险id
   */
  RiskId?: string
}

/**
 * CreateDspmAssetAccessTopologyExportJob请求参数结构体
 */
export interface CreateDspmAssetAccessTopologyExportJobRequest {
  /**
   * 集团账号的成员id
   */
  MemberId?: Array<string>
  /**
   * 视图类型。ip或instance
   */
  View?: string
  /**
   * 过滤器
   */
  Filter?: Filter
}

/**
 * DeleteDspmApplyOrder返回参数结构体
 */
export interface DeleteDspmApplyOrderResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeCosPolicy请求参数结构体
 */
export interface DescribeCosPolicyRequest {
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
 * DescribeCWPMachines请求参数结构体
 */
export interface DescribeCWPMachinesRequest {
  /**
   * <p>集团账号的成员id</p>
   */
  MemberId?: Array<string>
  /**
   * <p>一、主表字段筛选（需要指定 OperatorType）<br>MachineName：主机名称，支持 OperatorType 9(模糊)、7(IN)，Values示例：[&quot;test-server&quot;]<br>MachineIp：内网IP，支持 OperatorType 9(模糊)、7(IN)，Values示例：[&quot;10.0.0.1&quot;]<br>MachineWanIp：外网IP，支持 OperatorType 9(模糊)、7(IN)，Values示例：[&quot;1.2.3.4&quot;]<br>InstanceID：实例ID，支持 OperatorType 9(模糊)、7(IN)，Values示例：[&quot;ins-xxxxx&quot;]<br>MachineStatus / InstanceStatus：实例状态，支持 OperatorType 7(IN)、1(等于)，Values示例：[&quot;RUNNING&quot;]，可选值：RUNNING/STOPPED/EXPIRED<br>MachineOs：操作系统类型，支持 OperatorType 7(IN)，Values示例：[&quot;1&quot;]，值为数字编码，见下方OsType说明<br>VpcId：VPC ID，支持 OperatorType 7(IN)、1(等于)，Values示例：[&quot;vpc-xxxxx&quot;]<br>CloudFromEnum：云服务商，支持 OperatorType 7(IN)、1(等于)，Values示例：[&quot;0&quot;]，值为数字编码，见下方CloudFrom说明<br>Region ：地域，支持 OperatorType 7(IN)、1(等于)，Values示例：[&quot;ap-guangzhou&quot;]<br>AppId：账号AppId，支持 OperatorType 7(IN)、1(等于)，Values示例：[&quot;1234567890&quot;]<br>ProjectId：项目ID，支持 OperatorType 7(IN)、1(等于)，Values示例：[&quot;0&quot;]</p><p>二、预筛选字段（不需要指定 OperatorType）<br>AgentStatus：Agent状态，单选，Values示例：[&quot;ONLINE&quot;]，可选值：ONLINE/OFFLINE/UNINSTALL<br>ProtectType：防护类型（综合），Values示例：[&quot;ULTIMATE&quot;]，可选值：BASIC/PRO/ULTIMATE/NONE<br>CsipProtectType：CSIP防护类型，Values示例：[&quot;ULTIMATE&quot;]，可选值：BASIC/PRO/ULTIMATE/NONE<br>CloudTags：云标签，Values示例：[&quot;tagKey$tagValue&quot;]，格式：tagKey$tagValue 或 tagKey（只匹配key），最多5个值<br>Tags：资产标签，Values示例：[&quot;123&quot;]，值为标签ID<br>ExposedStatus：暴露状态，单选，Values示例：[&quot;EXPOSED&quot;]，可选值：NOT_APPLICABLE/EXPOSED/UNEXPOSED</p><p>三、特殊筛选字段（不需要指定 OperatorType）<br>NetworkType：网络类型，单选，Values示例：[&quot;1&quot;]，1=VPC网络, 2=基础网络, 3=非腾讯云网络<br>MachineType：机器类型，可多选，Values示例：[&quot;CVM&quot;]，可选值：CVM/BM/ECM/LH/EKS-NATIVE/ECS/EC2/VMS<br>Common：通用搜索，单选，Values示例：[&quot;关键词&quot;]，同时对内网IP、外网IP、主机名称、实例ID做模糊匹配</p>
   */
  Filter?: Filter
  /**
   * <p>是否需要tat状态信息</p>
   */
  NeedTatStatus?: boolean
  /**
   * <p>是否需要额外信息，如安全中心标签、腾讯云标签</p>
   */
  MoreInformation?: boolean
  /**
   * <p>是否需要容器信息，如容器数、核数、容器防护状态</p>
   */
  NeedContainerInfo?: boolean
}

/**
 * 资产账号信息
 */
export interface DspmAssetAccount {
  /**
   * 账号名
   */
  Account?: string
  /**
   * 主机地址
   */
  Host?: string
  /**
   * 账号类型。 0-未定义 1-服务账号 2-个人账号 3-临时账号
   */
  AccountType?: number
  /**
   * 所属对象。uin或个人id
   */
  Subject?: string
  /**
   * 权限信息
   */
  Privilege?: DspmDbAccountPrivilege
  /**
   * 状态。 0-不活跃 1-活跃 2-已删除
   */
  Status?: number
  /**
   * 账号创建时间。
   */
  CreateTime?: string
  /**
   * 访问权限生效时间。
   */
  ValidateFrom?: string
  /**
   * 访问权限失效时间。
   */
  ValidateTo?: string
  /**
   * 备注
   */
  Remark?: string
  /**
   * 资产id
   */
  AssetId?: string
  /**
   * 是否新账号
   */
  IsNewAccount?: number
  /**
   * 身份类型。非身份账号为null。0-未定义 2-长期身份 3-临时身份
   */
  IdentifyType?: number
  /**
   * 所属云账号uin用户。
   */
  OwnerUin?: DspmUinUser
  /**
   * 所属个人用户信息。
   */
  Person?: DspmPersonUser
  /**
   * 风险统计信息
   */
  RiskCount?: DspmRiskCount
  /**
   * 预设权限。
   */
  PresetPrivilege?: DspmDbAccountPrivilege
}

/**
 * DescribeDspmIdentifyIdList请求参数结构体
 */
export interface DescribeDspmIdentifyIdListRequest {
  /**
   * 筛选项
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
 * ModifyDspmBackupSetting返回参数结构体
 */
export interface ModifyDspmBackupSettingResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * Dspm风险
 */
export interface DspmRisk {
  /**
   * 风险id
   */
  RiskId?: string
  /**
   * 风险名称
   */
  RiskName?: string
  /**
   * 风险英文名称
   */
  RiskNameEn?: string
  /**
   * 策略类型
   */
  StrategyType?: string
  /**
   * 策略类别
   */
  StrategyCategory?: string
  /**
   * 风险等级
   */
  RiskLevel?: string
  /**
   * 资产实例Id
   */
  AssetId?: string
  /**
   * 资产类型
   */
  AssetType?: string
  /**
   * 资产名
   */
  AssetName?: string
  /**
   * 地域
   */
  AssetRegion?: string
  /**
   * 资产账号
   */
  Account?: string
  /**
   * 主机地址
   */
  Host?: string
  /**
   * 账号类型
   */
  AccountType?: number
  /**
   * 风险检出时间
   */
  DetectTime?: string
  /**
   * 处理状态 0-未处理 1-已处置 2-已忽略
   */
  Status?: number
  /**
   * 身份id
   */
  IdentifyId?: string
  /**
   * 所属云账号uin用户
   */
  OwnerUin?: DspmUinUser
  /**
   * 所属个人用户信息
   */
  Person?: DspmPersonUser
  /**
   * 风险数据。
   */
  RiskData?: string
  /**
   * 是否资产管理员
   */
  IsAssetManager?: number
  /**
   * 数据起始时间
   */
  DataBeginTime?: string
  /**
   * 数据结束时间
   */
  DataEndTime?: string
  /**
   * 风险类型。risk-风险；alarm-告警。
   */
  RiskType?: string
  /**
   * 资产所属账号app id
   */
  AppId?: number
  /**
   * 账号昵称
   */
  NickName?: string
  /**
   * 资产所属账号uin
   */
  Uin?: string
}

/**
 * DescribeAIAgentAssetList返回参数结构体
 */
export interface DescribeAIAgentAssetListResponse {
  /**
   * 资产列表
   */
  AssetList?: Array<AIAgentAsset>
  /**
   * 资产总数
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * cos命令信息
 */
export interface CosActionInfo {
  /**
   * 接口名
   */
  ActionName?: string
  /**
   * 接口中文名
   */
  ActionNameCn?: string
  /**
   * 接口描述
   */
  ActionDescription?: string
}

/**
 * DescribeUserDspmInfoList返回参数结构体
 */
export interface DescribeUserDspmInfoListResponse {
  /**
   * 账号dspm信息列表
   */
  List?: Array<UserDspmInfo>
  /**
   * 已勾选数据库资产总数
   */
  SelectedAssetNum?: number
  /**
   * 账号总数
   */
  Count?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * dspm敏感数据扫描任务配置
 */
export interface DspmSensitiveScanTaskConfig {
  /**
   * 是否定时任务
   */
  IsScheduled?: boolean
  /**
   * 调度周期配置
   */
  ScheduleConfig?: DspmScheduleConfig
  /**
   * 是否立即扫描
   */
  IsRunAtOnce?: boolean
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
 * dspm资产表信息
 */
export interface DspmAssetTableInfo {
  /**
   * <p>资产实例id</p>
   */
  AssetId?: string
  /**
   * <p>数据库名称</p>
   */
  DbName?: string
  /**
   * <p>schema名称</p>
   */
  SchemaName?: string
  /**
   * <p>表名</p>
   */
  TableName?: string
  /**
   * <p>字段数</p>
   */
  FieldCount?: number
  /**
   * <p>敏感字段数</p>
   */
  SensitiveFieldCount?: number
  /**
   * <p>数据项id集合</p>
   */
  RuleIds?: Array<number | bigint>
  /**
   * <p>数据项名称集合</p>
   */
  RuleNames?: Array<string>
  /**
   * <p>分类id集合</p>
   */
  CategoryIds?: Array<number | bigint>
  /**
   * <p>分类名称集合</p>
   */
  CategoryNames?: Array<string>
  /**
   * <p>分类详情</p>
   */
  CategoryDetails?: Array<DspmIdentifyCategoryDetail>
  /**
   * <p>数据表id</p>
   */
  TableId?: number
  /**
   * <p>表注释</p>
   */
  TableComment?: string
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
 * CreateDspmApplyOrder返回参数结构体
 */
export interface CreateDspmApplyOrderResponse {
  /**
   * 申请单id
   */
  OrderId?: string
  /**
   * 自动审批
注意：此字段可能返回 null，表示取不到有效值。
   */
  AutoApproval?: boolean
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
 * DescribeDspmAssetAccessTopology请求参数结构体
 */
export interface DescribeDspmAssetAccessTopologyRequest {
  /**
   * 集团账号的成员id
   */
  MemberId?: Array<string>
  /**
   * 视图类型。ip或instance
   */
  View?: string
  /**
   * - 来源ip方式查看
View: "ip"

Filter:{
	{
		"Name":"Ip",
		"Values":["172.1.1.1"]
	},
	{
		"Name":"AssetId",
		"Values":["cdb-1111|ap-guangzhou","cdb-2222|ap-guangzhou","cdb-3333|ap-guangzhou"]
	},
	{
		"Name":"Account",
		"Values":["root|%","test|%"]
	}
}


- 实例方式查看
View: "instance"

Filter:{
	{
		"Name":"AssetId",
		"Values":["cdb-1111|ap-guangzhou"]
	},
	{
		"Name":"Ip",
		"Values":["172.1.1.1","172.1.1.2","172.1.1.3"]
	},
	{
		"Name":"Account",
		"Values":["root|%","test|%"]
	}
}

   */
  Filter?: Filter
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
 * DescribeDspmStatistics请求参数结构体
 */
export interface DescribeDspmStatisticsRequest {
  /**
   * 集团账号的成员id
   */
  MemberId?: Array<string>
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
 * DescribeDspmRiskStrategyGroup返回参数结构体
 */
export interface DescribeDspmRiskStrategyGroupResponse {
  /**
   * 分组策略列表
   */
  StrategyGroupSet?: Array<DspmRiskStrategyGroup>
  /**
   * 分组策略总数
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeCosAuditPayInfo请求参数结构体
 */
export type DescribeCosAuditPayInfoRequest = null

/**
 * DescribeCosAkInvokeIpList返回参数结构体
 */
export interface DescribeCosAkInvokeIpListResponse {
  /**
   * ip信息
   */
  Data?: Array<CosSourceIpInfo>
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
 * DescribeCosIdentifyFileList返回参数结构体
 */
export interface DescribeCosIdentifyFileListResponse {
  /**
   * <p>总数</p>
   */
  TotalCount?: number
  /**
   * <p>结果集</p>
   */
  DataSet?: Array<CosAssetFileIdentifyInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteCosPolicy请求参数结构体
 */
export interface DeleteCosPolicyRequest {
  /**
   * 要删除的策略集合
   */
  PolicyIdSet?: Array<number | bigint>
  /**
   * 是否删除所有
   */
  IsDeleteAll?: number
}

/**
 * DescribeCosAkAsset请求参数结构体
 */
export interface DescribeCosAkAssetRequest {
  /**
   * 集团账号的成员id
   */
  MemberId?: Array<string>
  /**
   * 查询过滤器
   */
  Filter?: Filter
}

/**
 * DescribeDspmIdentifyInfo返回参数结构体
 */
export interface DescribeDspmIdentifyInfoResponse {
  /**
   * 身份id
   */
  IdentifyId?: string
  /**
   * 身份统计信息
   */
  IdentifyCount?: Array<DspmIdentifyCount>
  /**
   * 申请单个数
   */
  ApplyOrderCount?: number
  /**
   * 审批单个数
   */
  ApproveOrderCount?: number
  /**
   * 已审批个数
   */
  ApproveHistoryCount?: number
  /**
   * 资产总数
注意：此字段可能返回 null，表示取不到有效值。
   */
  AssetCount?: number
  /**
   * 云账号总数
注意：此字段可能返回 null，表示取不到有效值。
   */
  UinAccountCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeCosOverview请求参数结构体
 */
export interface DescribeCosOverviewRequest {
  /**
   * 集团账号的成员id
   */
  MemberId?: Array<string>
  /**
   * 过滤信息
   */
  Filter?: Filter
}

/**
 * DescribeDspmPayInfo返回参数结构体
 */
export interface DescribeDspmPayInfoResponse {
  /**
   * APPID
   */
  AppID?: number
  /**
   * 订单状态 0未购买 1正常，2隔离，3销毁，6试用中，7到期
   */
  OrderStatus?: number
  /**
   * 已购数据库实例数量
   */
  AssetNum?: number
  /**
   * 已购审计日志量（TB）
   */
  LogStorage?: number
  /**
   * 已使用数据库实例数量
   */
  UsedAssetNum?: number
  /**
   * 已使用审计日志量（TB）
   */
  UsedLogStorage?: number
  /**
   * 已购sql存储总量（单位百万）
   */
  SqlTotal?: number
  /**
   * 已购sql qps
   */
  SqlQps?: number
  /**
   * 支付模式，0-后付费 1-预付费
   */
  PayMode?: number
  /**
   * 是否单独购买，1-单独购买，2-被其它账号共享
   */
  IsSelfBuy?: number
  /**
   * 订单开始时间
   */
  BeginTime?: string
  /**
   * 订单到期时间
   */
  EndTime?: string
  /**
   * 0-用户未设置,1-用户设置自动续费,2-用户设置不自动续费
   */
  AutoRenew?: number
  /**
   * 订单时长
   */
  TimeSpan?: number
  /**
   * 时长单位
   */
  TimeUnit?: string
  /**
   * 资源id
   */
  ResourceId?: string
  /**
   * 公测结束时间
   */
  BetaEndTime?: string
  /**
   * 系统当前时间
   */
  TimeNow?: string
  /**
   * 是否分享给其它账号，1-是，2-否
   */
  IsShareToOther?: number
  /**
   * uin
   */
  Uin?: string
  /**
   * 昵称
   */
  NickName?: string
  /**
   * 购买信息
   */
  InquireData?: Array<InquireInfo>
  /**
   * 版本(专业版：professional 试用版：trial)
   */
  Version?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
 * DeleteDspmWhitelistStrategy返回参数结构体
 */
export interface DeleteDspmWhitelistStrategyResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
 * cos审计文件数据识别信息
 */
export interface CosAssetFileIdentifyInfo {
  /**
   * 文件名称
   */
  FileName?: string
  /**
   * 文件路径
   */
  DirName?: string
  /**
   * 分类数据项详情
   */
  CategoryDetails?: Array<CosIdentifyCategoryDetail>
}

/**
 * 主机列表
 */
export interface Machine {
  /**
   * <p>Agent状态，取值：ONLINE-在线，OFFLINE-离线，UNINSTALL-未安装</p>
   */
  AgentStatus?: string
  /**
   * <p>Agent版本</p>
   */
  AgentVersion?: string
  /**
   * <p>账号AppId</p>
   */
  AppId?: number
  /**
   * <p>云服务商</p>
   */
  CloudFromEnum?: string
  /**
   * <p>云标签列表</p>
   */
  CloudTags?: Array<Tag>
  /**
   * <p>CSIP防护类型，取值：BASIC-基础版，PRO-专业版，ULTIMATE-旗舰版</p>
   */
  CsipProtectType?: string
  /**
   * <p>暴露状态</p>
   */
  ExposedStatus?: string
  /**
   * <p>实例ID</p>
   */
  InstanceID?: string
  /**
   * <p>实例状态，取值：RUNNING-运行中，STOPPED-已关机，EXPIRED-待回收</p>
   */
  InstanceStatus?: string
  /**
   * <p>网卡IP列表</p>
   */
  IpList?: Array<string>
  /**
   * <p>是否为新增主机（15天内新增）</p>
   */
  IsNew?: boolean
  /**
   * <p>内核版本</p>
   */
  KernelVersion?: string
  /**
   * <p>最近一次离线时间（Unix时间戳）</p>
   */
  LatestOfflineTime?: number
  /**
   * <p>内网IP</p>
   */
  MachineIp?: string
  /**
   * <p>主机名称</p>
   */
  MachineName?: string
  /**
   * <p>操作系统</p>
   */
  MachineOs?: string
  /**
   * <p>外网IP</p>
   */
  MachineWanIp?: string
  /**
   * <p>付费模式，取值：PREPAID-预付费，POSTPAID-后付费</p>
   */
  PayMode?: string
  /**
   * <p>项目ID</p>
   */
  ProjectId?: number
  /**
   * <p>防护类型，取值：NONE-无防护，BASIC-基础版，PRO-专业版，ULTIMATE-旗舰版，PRO_LH-轻量版</p>
   */
  ProtectType?: string
  /**
   * <p>主机唯一标识</p>
   */
  Quuid?: string
  /**
   * <p>地域信息</p>
   */
  RegionInfo?: RegionInfo
  /**
   * <p>备注</p>
   */
  Remark?: string
  /**
   * <p>资产标签列表</p>
   */
  TagItems?: Array<MiniTagItem>
  /**
   * <p>标签修改信息</p>
   */
  TagModifyInfo?: AssetTagModifyAssetItem
  /**
   * <p>TAT状态，取值：ONLINE-在线，OFFLINE-离线</p>
   */
  TatStatus?: string
  /**
   * <p>Agent唯一标识</p>
   */
  Uuid?: string
  /**
   * <p>VPC ID</p>
   */
  VpcId?: string
  /**
   * <p>主机节点类型</p><p>枚举值：</p><ul><li>NONE： 主机节点</li><li>CLUSTER： 集群节点</li><li>CONTAINER： 容器节点</li></ul>
   */
  NodeType?: string
  /**
   * <p>容器防护状态</p><p>枚举值：</p><ul><li>Enabled： 开启防护</li><li>Disabled： 关闭防护</li><li>Unknown： 未知</li></ul>
   */
  ContainerDefendStatus?: string
  /**
   * <p>容器数量</p>
   */
  ContainerCount?: number
  /**
   * <p>核数</p>
   */
  CpuCoreCount?: number
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
 * DescribeCosAuditDictionaryList返回参数结构体
 */
export interface DescribeCosAuditDictionaryListResponse {
  /**
   * <p>结果集</p>
   */
  DataSet?: Array<CosDictionary>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
 * 表权限
 */
export interface DspmTablePrivilege {
  /**
   * 数据库名
   */
  Database?: string
  /**
   * 数据库表名
   */
  Table?: string
  /**
   * 权限信息
   */
  Privileges?: Array<string>
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
 * cos策略信息
 */
export interface CosPolicyInfo {
  /**
   * 策略名称
   */
  PolicyName: string
  /**
   * 策略类型
PolicyType：1 告警策略 2 风险策略  3  白名单策略  4 ip隐藏策略
   */
  PolicyType: number
  /**
   * system:系统内置 user:用户自定义
   */
  PolicySource: number
  /**
   * 策略内容
   */
  PolicyContent: string
  /**
   * 0 关闭
1 开启
   */
  PolicyStatus: number
  /**
   * 策略分类
   */
  PolicyAbnormalType: number
  /**
   * 风险级别
   */
  RiskLevel: number
  /**
   * 策略id
   */
  PolicyId?: number
  /**
   * 创建时间
   */
  PolicyCreateTime?: number
  /**
   * 更新时间
   */
  PolicyUpdateTime?: number
  /**
   * 策略近七天命中次数
   */
  PolicyHitCount?: number
  /**
   * 告警内容hash
   */
  PolicyContentHash?: string
  /**
   * 关联账户数
   */
  RelAccountCount?: number
  /**
   * 关联账号uin
   */
  RelAccountUin?: string
  /**
   * 关联账号名
   */
  RelAccountName?: string
  /**
   * 描述信息
   */
  PolicyDescription?: string
  /**
   * 备注信息
   */
  PolicyMarker?: string
  /**
   * appid
   */
  AppId?: number
  /**
   * 多账号场景下的id集合
   */
  PolicyIdSet?: Array<number | bigint>
  /**
   * 是否处置历史数据状态  0 无须处置 1 需要处置 2 已处置
   */
  PolicyHistoryHandleStatus?: number
  /**
   * 系统策略编辑状态
   */
  SystemPolicyEditStatus?: number
}

/**
 * DescribeIpInvokeRecord请求参数结构体
 */
export interface DescribeIpInvokeRecordRequest {
  /**
   * 过滤条件
   */
  Filter?: Filter
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
   * 修改集团账号状态，1 开启， 0关闭
   */
  Status: number
  /**
   * 集团账号的成员id
   */
  MemberId?: Array<string>
}

/**
 * DescribeExposeAssetCategory请求参数结构体
 */
export interface DescribeExposeAssetCategoryRequest {
  /**
   * <p>集团账号的成员id</p>
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
 * 数据库资产
 */
export interface DspmDbAsset {
  /**
   * 资产实例Id
   */
  AssetId?: string
  /**
   * 资产类型
   */
  AssetType?: string
  /**
   *  资产名
   */
  Name?: string
  /**
   * 账号数
   */
  AccountCount?: number
  /**
   * 公网访问地址，如果有多个，使用';'分割
   */
  PublicIp?: string
  /**
   * 内网访问地址，如果有多个，使用';'分割
   */
  PrivateIp?: string
  /**
   * 广域网域名地址，如果有多个，使用';'分割
   */
  WanDomain?: string
  /**
   * 地域
   */
  Region?: string
  /**
   * 资产所在vpc的vpcid
   */
  VpcId?: string
  /**
   * 资产所在vpc的vpc名
   */
  VpcName?: string
  /**
   * 资产所在vpc子网的subnetid
   */
  SubnetId?: string
  /**
   * 资产所在vpc子网名
   */
  SubnetName?: string
  /**
   * 实例状态
   */
  Status?: number
  /**
   * 创建时间。
   */
  CreateTime?: string
  /**
   * 管理者信息。
   */
  Manager?: Array<DspmUinUser>
  /**
   * 是否绑定身份。0-未绑定 1-已绑定
   */
  BindIdentify?: number
  /**
   * 是否管理员
   */
  IsManager?: number
  /**
   * 风险统计信息
   */
  RiskCount?: DspmRiskCount
  /**
   * 安全建议。
Resolve 立即解决
Reinforcement 加固
None 暂无异常

   */
  SafetyAdvice?: string
  /**
   * 日志投递状态。
0-投递关闭 1-投递打开 2-投递开通中 3-投递关闭中
   */
  LogDeliveryStatus?: number
  /**
   * 是否支持日志投递。0-不支持 1-支持
   */
  LogDeliverySupported?: number
  /**
   * 数据扫描信息
   */
  DataScanInfo?: DspmAssetDataScanDetail
  /**
   * 资产所属账号app id
   */
  AppId?: number
  /**
   * 账号昵称
   */
  NickName?: string
  /**
   * 资产所属账号uin
   */
  Uin?: string
  /**
   * 安全分析状态（0-关闭 1-打开 2-开通中 3-关闭中）

   */
  SecurityAnalyseStatus?: number
  /**
   * 当前实例的总日志数
   */
  TotalAuditLogs?: number
  /**
   * 日志审计禁止开通的原因，可选值：VersionNotSupportLogSubscription, InstanceIsUpgrading, CdbRuleAuditEnabled, AssetNotExists
   */
  LogDeliveryDisableReason?: string
  /**
   * 在线日志的起始时间戳，精确到秒
   */
  OldestOnlineLogTimestamp?: number
  /**
   * 在线日志的最新时间戳，精确到秒
   */
  NewestOnlineLogTimestamp?: number
  /**
   * 操作错误信息
   */
  OperationErrorMsg?: string
  /**
   * 是否支持账号操作。0 不支持；1 支持
   */
  AccountOptSupported?: number
  /**
   * 实例类型
   */
  InstanceType?: number
  /**
   * 是否支持敏感数据识别。0 不支持；1 支持
   */
  IdentifyScanSupported?: number
}

/**
 * DescribeRiskItemList请求参数结构体
 */
export interface DescribeRiskItemListRequest {
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
 * DescribeCosIpInvokeLog返回参数结构体
 */
export interface DescribeCosIpInvokeLogResponse {
  /**
   * 总数
   */
  Total?: number
  /**
   * 请求日志数据
   */
  Data?: Array<CosInvokeLog>
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
 * DescribeCosRiskEvidence返回参数结构体
 */
export interface DescribeCosRiskEvidenceResponse {
  /**
   * 证据信息
   */
  Evidences?: Array<CosPermissionInfo>
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
 * cos调用详情信息
 */
export interface CosInvokeDetailInfo {
  /**
   * 调用时间
   */
  InvokeTimestamp: number
  /**
   * 请求id
   */
  InvokeRequestId: string
  /**
   * 调用内容
   */
  InvokeContent: string
}

/**
 * DescribeDspmAccessTopologyAssets返回参数结构体
 */
export interface DescribeDspmAccessTopologyAssetsResponse {
  /**
   * 资产id列表
   */
  Items?: Array<string>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * cos资产同步任务信息
 */
export interface CosAssetSyncTaskInfo {
  /**
   * appid
   */
  AppId?: number
  /**
   * 同步任务id
   */
  TaskId?: string
  /**
   * 最后一次扫描时间
   */
  LastScanTime?: number
}

/**
 * dspm字典信息
 */
export interface DspmDictionary {
  /**
   * 字典id
   */
  DictId?: number
  /**
   * 字典名称
   */
  DictName?: string
}

/**
 * 计费项信息
 */
export interface InquireInfo {
  /**
   * 计费项名称
   */
  Name?: string
  /**
   * 购买量
   */
  Value?: number
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
 * Dspm 风险策略
 */
export interface DspmRiskStrategy {
  /**
   * 策略类型
   */
  StrategyType?: string
  /**
   * 策略名
   */
  Name?: string
  /**
   * 策略类型
   */
  StrategyCategory?: string
  /**
   * 是否启用。0-禁用 1-启用
   */
  IsEnabled?: number
  /**
   * 风险等级。
   */
  RiskLevel?: string
  /**
   * 策略规则
   */
  Rule?: string
  /**
   * 备注
   */
  Remark?: string
  /**
   * 策略内容
   */
  Description?: string
  /**
   * 命中次数
   */
  HitCount?: number
  /**
   * 风险类型。risk-风险；alarm-告警。
   */
  RiskType?: string
  /**
   * 资产所属账号app id
   */
  AppId?: number
  /**
   * 账号昵称
   */
  NickName?: string
  /**
   * 资产所属账号uin
   */
  Uin?: string
  /**
   * 策略id
   */
  StrategyId?: number
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
 * Dspm 资产统计数
 */
export interface DspmAssetCount {
  /**
   * 资产个数
   */
  AssetCount?: number
  /**
   * 资产有危险风险的个数
   */
  DangerRiskCount?: number
  /**
   * 资产有低风险的个数
   */
  LowRiskCount?: number
  /**
   * 有待处理风险的实例数
   */
  RiskAssetCount?: number
  /**
   * 有待处理告警的实例数
   */
  AlarmAssetCount?: number
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
 * cos审计资产数据识别详情
 */
export interface CosAssetDataScanDetail {
  /**
   * <p>识别任务状态 0:未识别 1:识别中 2:识别终止 3:识别成功 4:识别失败</p>
   */
  Status?: number
  /**
   * <p>识别进度</p>
   */
  Progress?: number
  /**
   * <p>最近扫描时间</p>
   */
  LatestScanTime?: number
  /**
   * <p>识别失败信息</p>
   */
  ErrorInfo?: string
  /**
   * <p>识别结果分类详情</p>
   */
  CategoryDetails?: Array<CosIdentifyCategoryDetail>
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
 * Dspm 风险分组策略
 */
export interface DspmRiskStrategyGroup {
  /**
   * 策略类型
   */
  StrategyType?: string
  /**
   * 策略名
   */
  Name?: string
  /**
   * 策略类型
   */
  StrategyCategory?: string
  /**
   * 是否启用。0-禁用 1-启用
   */
  IsEnabled?: number
  /**
   * 命中次数
   */
  HitCount?: number
  /**
   * 风险类型。risk-风险；alarm-告警。
   */
  RiskType?: string
  /**
   * 策略列表
   */
  StrategyList?: Array<DspmRiskStrategy>
}

/**
 * 导出任务列表
 */
export interface ExportTask {
  /**
   * 任务Id
   */
  Id?: number
  /**
   * 用户AppId
   */
  AppId?: number
  /**
   * 进度百分比
   */
  Percentage?: number
  /**
   * 任务状态：0.未开始 1.执行中 2.执行成功 3.执行超时 4.执行失败
   */
  TaskStatus?: number
  /**
   * 任务创建时间
   */
  CreateTime?: number
  /**
   * 任务更新时间
   */
  ModifyTime?: number
  /**
   * 文件名
   */
  FileName?: string
  /**
   * 文件大小  字节
   */
  FileSize?: number
  /**
   * 剩余时间(单位：秒)
   */
  RemainingTime?: number
}

/**
 * AddDspmAssetManager返回参数结构体
 */
export interface AddDspmAssetManagerResponse {
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
 * AddDspmAssetManager请求参数结构体
 */
export interface AddDspmAssetManagerRequest {
  /**
   * 管理员uin
   */
  IdentifyIds: Array<string>
  /**
   * 资产id
   */
  AssetId: Array<string>
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
   * 访问密钥，注意：不支持临时密钥的情况
   */
  AccessKey?: string
  /**
   * 过滤器
   */
  Filter?: Filter
}

/**
 * CreateDspmPersonalIdentify请求参数结构体
 */
export interface CreateDspmPersonalIdentifyRequest {
  /**
   * 手机号
   */
  Phone: string
  /**
   * 姓名
   */
  Name: string
  /**
   * 备注
   */
  Remark?: string
}

/**
 * DescribeAssumeRole请求参数结构体
 */
export interface DescribeAssumeRoleRequest {
  /**
   * 角色名
   */
  RoleName?: string
}

/**
 * DescribeCosOverview返回参数结构体
 */
export interface DescribeCosOverviewResponse {
  /**
   * cos概览
   */
  CosOverview?: CosOverview
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateCosPolicy请求参数结构体
 */
export interface CreateCosPolicyRequest {
  /**
   * 策略信息
   */
  CosPolicyInfo: CosPolicyInfo
  /**
   * 集团账号的成员id
   */
  MemberId?: Array<string>
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
 * DescribeCosRoleAccessPermission请求参数结构体
 */
export interface DescribeCosRoleAccessPermissionRequest {
  /**
   * 关联的appid
   */
  RelAppId: number
  /**
   * 需要查看的角色id
   */
  RelRoleId: string
  /**
   * 桶名
   */
  BucketName: string
  /**
   * 过滤器
   */
  Filter?: Filter
}

/**
 * ModifyDspmRiskStrategy返回参数结构体
 */
export interface ModifyDspmRiskStrategyResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeCosAuditAppIdList返回参数结构体
 */
export interface DescribeCosAuditAppIdListResponse {
  /**
   * 已购买appid集合
   */
  Data?: Array<number | bigint>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
 * DescribeRiskTrendData返回参数结构体
 */
export interface DescribeRiskTrendDataResponse {
  /**
   * 风险趋势数据
   */
  CosRiskTrendData?: Array<CosRiskTrendInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * cos审计支付信息
 */
export interface CosAuditPayInfo {
  /**
   * <p>APPID</p>
   */
  AppId?: number
  /**
   * <p>订单状态 0未购买 1正常，2隔离，3销毁，6试用中，7到期</p>
   */
  OrderStatus?: number
  /**
   * <p>已购对象存储数量</p>
   */
  BucketNum?: number
  /**
   * <p>支付模式，0-后付费 1-预付费</p>
   */
  PayMode?: number
  /**
   * <p>是否单独购买，1-单独购买，2-被其它账号共享</p>
   */
  IsSelfBuy?: number
  /**
   * <p>订单开始时间</p>
   */
  BeginTime?: string
  /**
   * <p>订单到期时间</p>
   */
  EndTime?: string
  /**
   * <p>0-用户未设置,1-用户设置自动续费,2-用户设置不自动续费</p>
   */
  AutoRenew?: number
  /**
   * <p>订单时长</p>
   */
  TimeSpan?: number
  /**
   * <p>时长单位</p>
   */
  TimeUnit?: string
  /**
   * <p>资源id</p>
   */
  ResourceId?: string
  /**
   * <p>公测结束时间</p>
   */
  BetaEndTime?: string
  /**
   * <p>系统当前时间</p>
   */
  TimeNow?: string
  /**
   * <p>是否分享给其它账号，1-是，2-否</p>
   */
  IsShareToOther?: number
  /**
   * <p>uin</p>
   */
  Uin?: string
  /**
   * <p>昵称</p>
   */
  NickName?: string
  /**
   * <p>共享的bucketIdSet</p>
   */
  BindBucket?: Array<CosBucketId>
  /**
   * <p>共享的appid</p>
   */
  SharedAppIdSet?: Array<number | bigint>
  /**
   * <p>是否已经开启后付费</p>
   */
  PostPayStatus?: number
  /**
   * <p>0：未做过试用期试用   1 ：做过试用期试用</p>
   */
  IsTestUser?: number
  /**
   * <p>剩余可用数</p>
   */
  AvailableBucketNum?: number
  /**
   * <p>已开启的监测存储桶数</p>
   */
  MonitorBucketNum?: number
  /**
   * <p>总的存储桶数</p>
   */
  TotalBucketNum?: number
  /**
   * <p>后付费产品开关状态</p>
   */
  PostProductStatusList?: Array<number | bigint>
  /**
   * <p>后付费产品购买状态</p>
   */
  PostProductBuyStatusList?: Array<number | bigint>
  /**
   * <p>新后付费资源id</p>
   */
  NewPostPayResourceId?: string
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
 * 检查项视角风险
 */
export interface CheckViewRiskItem {
  /**
   * <p>检查项规则ID</p>
   */
  RiskRuleId?: string
  /**
   * <p>风险名称</p>
   */
  RiskTitle?: string
  /**
   * <p>检查类型</p>
   */
  CheckType?: string
  /**
   * <p>风险等级</p>
   */
  Severity?: string
  /**
   * <p>存在1个风险项</p>
   */
  RiskDesc?: string
  /**
   * <p>首次发现时间</p>
   */
  CreateTime?: string
  /**
   * <p>风险更新时间</p>
   */
  UpdateTime?: string
  /**
   * <p>云厂商</p>
   */
  Provider?: string
  /**
   * <p>风险状态</p>
   */
  RiskStatus?: number
  /**
   * <p>受影响资产数量</p>
   */
  AssetCount?: number
  /**
   * <p>风险数量</p>
   */
  RiskCount?: number
  /**
   * <p>资产类型</p>
   */
  AssetType?: string
  /**
   * <p>事件类型</p>
   */
  EventType?: string
  /**
   * <p>处置分类</p>
   */
  Classify?: string
  /**
   * <p>cspm规范条款</p>
   */
  StandardTerms?: Array<StandardTerm>
  /**
   * <p>资产类型图标</p>
   */
  AssetTypeIconURL?: string
}

/**
 * 键值对（整数）
 */
export interface KeyValueInt {
  /**
   * <p>键</p>
   */
  Key?: number
  /**
   * <p>值</p>
   */
  Value?: number
}

/**
 * 云账号用户信息
 */
export interface DspmUinUser {
  /**
   * 账号uin
   */
  Uin?: string
  /**
   * 姓名
   */
  Name?: string
  /**
   * 用户类型。1-主账号 2-子用户
   */
  UserType?: number
}

/**
 * cos ak 集合
 */
export interface CosAkSet {
  /**
   * ak所属appid
   */
  AppId?: number
  /**
   * ak名称集合
   */
  AkNameSet?: Array<string>
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
 * Dspm资产实例
 */
export interface DspmAssetInstance {
  /**
   * 资产实例Id
   */
  AssetId: string
  /**
   * 资产类型
   */
  AssetType: string
  /**
   * 地域
   */
  Region: string
  /**
   * 资产所属账号app id
   */
  AppId?: number
}

/**
 * AI Agent 命令沙箱插件状态
 */
export interface CommandPluginState {
  /**
   * <p>插件安装状态（上层聚合）<br>枚举值：<br>NONE：未安装<br>INSTALLING：安装中<br>INSTALLED：已安装<br>INSTALL_FAIL：安装失败</p>
   */
  InstallStatus?: string
}

/**
 * DescribeIaCFileOverview返回参数结构体
 */
export interface DescribeIaCFileOverviewResponse {
  /**
   * <p>文件数量</p>
   */
  TotalFile?: number
  /**
   * <p>风险文件数量(1:Dockerfile,2:Terraform,3:KubernetesYaml)</p>
   */
  RiskFile?: Array<KeyValueInt>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * Dspm资产安全分析状态
 */
export interface DspmAssetSecurityAnalyseStatus {
  /**
   * 资产所属账号app id
   */
  AppId?: number
  /**
   * 资产实例Id
   */
  AssetId?: string
  /**
   * 资产类型
   */
  AssetType?: string
  /**
   * 地域
   */
  Region?: string
  /**
   * 是否支持敏感数据识别。0 不支持；1 支持
   */
  IdentifyScanSupported?: number
  /**
   * 是否支持日志投递。0-不支持 1-支持
   */
  LogDeliverySupported?: number
  /**
   * 安全分析状态（0-关闭 1-打开 2-开通中 3-关闭中）

   */
  SecurityAnalyseStatus?: number
  /**
   * 日志投递状态。
0-投递关闭 1-投递打开 2-投递开通中 3-投递关闭中
   */
  LogDeliveryStatus?: number
  /**
   * 日志审计禁止开通的原因，可选值：VersionNotSupportLogSubscription, InstanceIsUpgrading,CdbRuleAuditEnabled
   */
  LogDeliveryDisableReason?: string
  /**
   * 当前实例的总日志数
   */
  TotalAuditLogs?: number
  /**
   * 已识别敏感数据项个数
   */
  DataScanDetailRuleCount?: number
  /**
   * 操作错误信息
   */
  OperationErrorMsg?: string
}

/**
 * dspm资产数据识别详情
 */
export interface DspmAssetDataScanDetail {
  /**
   * 识别任务状态 0:未识别 1:识别中 2:识别终止 3:识别成功 4:识别失败
   */
  Status?: number
  /**
   * 识别任务状态 0:未识别 1:识别中 2:识别终止 3:识别成功 4:识别失败
   */
  StatusInfo?: string
  /**
   * 识别进度
   */
  Progress?: number
  /**
   * 最近扫描时间
   */
  LatestScanTime?: string
  /**
   * 识别失败信息
   */
  ErrorInfo?: string
  /**
   * 数据库数量
   */
  DbCount?: number
  /**
   * 分类id集合
   */
  CategoryIds?: Array<number | bigint>
  /**
   * 分类名称集合
   */
  CategoryNames?: Array<string>
  /**
   * 扫描任务配置
   */
  TaskConfig?: DspmSensitiveScanTaskConfig
  /**
   * 识别结果分类详情
   */
  CategoryDetails?: Array<DspmIdentifyCategoryDetail>
}

/**
 * 日志备份
 */
export interface BackupLog {
  /**
   * 索引
   */
  Id: number
  /**
   * 索引开始时间
   */
  IndexStartTime: number
  /**
   * 索引结束时间
   */
  IndexEndTime: number
  /**
   * 备份后压缩的大小，单位M
   */
  BackupSize: number
  /**
   * 日志状态 0备份未完成， 1备份文件，2恢复中，3已恢复，4.已删除
   */
  Status: number
  /**
   * 恢复剩余的分钟数，分钟，需要前端转换
   */
  RestoreProcessRemindTime?: number
  /**
   * 恢复日志保留的时间
   */
  RestoreRemindTime?: number
  /**
   * 恢复索引大小
   */
  RestoreIndexSize?: number
  /**
   * 恢复日志执行结束时间
   */
  RestoreEndTime?: number
  /**
   * 备份所属的appId
   */
  AppId?: number
  /**
   * 备份所属的资产ID
   */
  AssetId?: number
  /**
   * 账号昵称
   */
  NickName?: string
  /**
   * 资产所属账号uin
   */
  Uin?: string
}

/**
 * CreateIaCFileReScanTask返回参数结构体
 */
export interface CreateIaCFileReScanTaskResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
 * ResetDspmAssetAccountPassword返回参数结构体
 */
export interface ResetDspmAssetAccountPasswordResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDspmAssetAccountPresetPrivileges返回参数结构体
 */
export interface DescribeDspmAssetAccountPresetPrivilegesResponse {
  /**
   * 权限信息
   */
  Privilege?: DspmDbAccountPrivilege
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
 * DeleteCosAkAsset请求参数结构体
 */
export interface DeleteCosAkAssetRequest {
  /**
   * 要删除的cos ak集合
   */
  CosAkSet: Array<CosAkSet>
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
 * DescribeIaCFileReport返回参数结构体
 */
export interface DescribeIaCFileReportResponse {
  /**
   * <p>检测文件</p>
   */
  File?: string
  /**
   * <p>检测状态(0:待扫描,1:检测中,2:已完成,3:检测异常)</p>
   */
  Status?: number
  /**
   * <p>检测时间</p>
   */
  ScanTime?: string
  /**
   * <p>风险列表</p>
   */
  Risks?: Array<IaCFileRisk>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDspmAssetFieldList返回参数结构体
 */
export interface DescribeDspmAssetFieldListResponse {
  /**
   * 总数
   */
  TotalCount?: number
  /**
   * 结果集
   */
  DataSet?: Array<DspmAssetFieldInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDspmPersonApplyHistory返回参数结构体
 */
export interface DescribeDspmPersonApplyHistoryResponse {
  /**
   * 申请记录总数
   */
  TotalCount?: number
  /**
   * 申请记录信息
   */
  ApplySet?: Array<DspmPersonApplyHistoryItem>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeAssetProcessList请求参数结构体
 */
export interface DescribeAssetProcessListRequest {
  /**
   * <p>集团账号的成员id</p>
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
 * cos风险告警信息
 */
export interface CosRiskAlarmInfo {
  /**
   * 策略类型枚举值
   */
  PolicyType?: number
  /**
   * 策略名
   */
  PolicyTypeName?: string
  /**
   * 策略类型对应的策略数量
   */
  PolicyCount?: number
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
 * 凭证数据结构，用于列表查询和详情查询的响应
 */
export interface KeySandboxCredential {
  /**
   * 凭证ID
   */
  CredentialId?: string
  /**
   * 凭证名称
   */
  CredentialName?: string
  /**
   * 凭证类型
枚举值：
access：常规密钥（Key/Value键值对）
sts：STS临时密钥凭据
   */
  CredentialType?: string
  /**
   * 生效机器范围
   */
  CredentialEffectScope?: CredentialEffectScope
  /**
   * 创建时间
参数格式：YYYY-MM-DDTHH:mm:ssZ（ISO8601格式）
   */
  CreateTime?: string
  /**
   * 更新时间
参数格式：YYYY-MM-DDTHH:mm:ssZ（ISO8601格式）
   */
  UpdateTime?: string
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
 * DescribeIpInvokeRecordDetail返回参数结构体
 */
export interface DescribeIpInvokeRecordDetailResponse {
  /**
   * 调用详情信息
   */
  InvokeDetailInfo?: Array<CosInvokeDetailInfo>
  /**
   * 调用权限相关
   */
  InvokePermission?: Array<CosPermissionInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * cos访问权限信息
 */
export interface CosAccessInfo {
  /**
   * 可访问账号uin
   */
  AccessUin?: string
  /**
   * 可访问账号uid
   */
  AccessUid?: string
  /**
   * 昵称
   */
  NickName?: string
  /**
   * 身份标识 
1 主账号
2 子账号
   */
  Identity?: number
  /**
   * 所属主账号名称
   */
  MainNickName?: string
  /**
   * 可访问ak列表
   */
  AkList?: Array<string>
  /**
   * 可访问权限数
   */
  CamPolicyCount?: number
  /**
   * 修改时间Unix时间单位毫秒
   */
  UpdateTime?: number
}

/**
 * DescribeRiskRuleDetail请求参数结构体
 */
export interface DescribeRiskRuleDetailRequest {
  /**
   * <p>风险规则ID</p>
   */
  RiskRuleId: string
}

/**
 * DescribeDspmAssetAccountPresetPrivileges请求参数结构体
 */
export interface DescribeDspmAssetAccountPresetPrivilegesRequest {
  /**
   * 资产id
   */
  AssetId?: string
  /**
   * 账号
   */
  Account?: string
  /**
   * 地址
   */
  Host?: string
  /**
   * 过滤器
   */
  Filter?: Filter
}

/**
 * DescribeDspmPersonalIdentifyList返回参数结构体
 */
export interface DescribeDspmPersonalIdentifyListResponse {
  /**
   * 身份总数
   */
  TotalCount?: number
  /**
   * 个人身份信息
   */
  InfoSet?: Array<DspmPersonIdentifyItem>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteIaCAccessToken返回参数结构体
 */
export interface DeleteIaCAccessTokenResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 位置信息
 */
export interface Location {
  /**
   * 国家
   */
  Country?: string
  /**
   * 地区
   */
  Region?: string
  /**
   * 城市
   */
  City?: string
}

/**
 * Cos桶关联角色列表信息
 */
export interface CosRoleAccessInfo {
  /**
   * 角色ID
   */
  RoleId?: string
  /**
   * 角色名称
   */
  RoleName?: string
  /**
   * 角色描述
   */
  RoleDescription?: string
  /**
   * 可访问权限数
   */
  PermissionCount?: number
  /**
   * 策略创建时间
   */
  CreateTime?: number
}

/**
 * 简要的资产标签元素
 */
export interface MiniTagItem {
  /**
   * <p>标签颜色</p>
   */
  Color?: string
  /**
   * <p>描述</p>
   */
  Description?: string
  /**
   * <p>标签ID</p>
   */
  ID?: number
  /**
   * <p>标签键</p>
   */
  TagKey?: string
  /**
   * <p>标签值</p>
   */
  TagValue?: string
  /**
   * <p>标签键英文</p>
   */
  TagKeyEn?: string
  /**
   * <p>标签值英文</p>
   */
  TagValueEn?: string
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
 * ModifyIaCTokenPeriod返回参数结构体
 */
export interface ModifyIaCTokenPeriodResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDspmSyncUsersStatus返回参数结构体
 */
export interface DescribeDspmSyncUsersStatusResponse {
  /**
   * 用户同步任务状态。0-未执行。1-执行中
   */
  Status?: number
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
 * DescribeDspmRiskDetail返回参数结构体
 */
export interface DescribeDspmRiskDetailResponse {
  /**
   * 风险等级
   */
  RiskLevel?: string
  /**
   * 风险检出时间
   */
  DetectTime?: string
  /**
   * 资产实例Id
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
   * 公网访问地址
   */
  PublicIp?: string
  /**
   * 内网访问地址
   */
  PrivateIp?: string
  /**
   * 账号
   */
  Account?: string
  /**
   * 主机地址
   */
  Host?: string
  /**
   * 身份id
   */
  IdentifyId?: string
  /**
   * 所属云账号uin用户
   */
  OwnerUin?: DspmUinUser
  /**
   * 所属个人用户信息
   */
  Person?: DspmPersonUser
  /**
   * 风险名称
   */
  RiskName?: string
  /**
   * 风险英文名称
   */
  RiskNameEn?: string
  /**
   * 风险数据
   */
  RiskData?: string
  /**
   * 基线数据
   */
  BaselineData?: string
  /**
   * 风险id
   */
  RiskId?: string
  /**
   * 策略类型
   */
  StrategyType?: string
  /**
   * 策略类别
   */
  StrategyCategory?: string
  /**
   * 账号类型
   */
  AccountType?: number
  /**
   * 风险状态
   */
  Status?: number
  /**
   * 是否资产管理员
   */
  IsAssetManager?: number
  /**
   * 数据起始时间
   */
  DataBeginTime?: string
  /**
   * 数据结束时间
   */
  DataEndTime?: string
  /**
   * 风险类型。risk-风险；alarm-告警。
   */
  RiskType?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeCosRiskScanTask请求参数结构体
 */
export interface DescribeCosRiskScanTaskRequest {
  /**
   * 需要查看的存储桶详情
   */
  BucketInfoSet?: Array<CosBucketInfo>
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
  /**
   * 云类型 0-腾讯云 4-阿里云
   */
  CloudType?: number
  /**
   * 相关的AK列表，包含AK名和AK备注
   */
  RelatedAK?: Array<AKInfo>
}

/**
 * dspm数据项详情
 */
export interface DspmIdentifyRuleDetail {
  /**
   * 数据项id
   */
  RuleId?: number
  /**
   * 数据项名称
   */
  RuleName?: string
  /**
   * 敏感级别id
   */
  LevelId?: number
  /**
   * 敏感级别名称
   */
  LevelName?: string
  /**
   * 敏感程度
   */
  LevelScore?: number
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
 * CreateDspmWhitelistStrategy请求参数结构体
 */
export interface CreateDspmWhitelistStrategyRequest {
  /**
   * 策略类型
   */
  StrategyType: string
  /**
   * 集团账号的成员id
   */
  MemberId?: Array<string>
  /**
   * 白名单
   */
  Name?: string
  /**
   * 规则
   */
  Rule?: string
  /**
   * 资产id
   */
  AssetId?: string
  /**
   * 账号
   */
  Account?: string
  /**
   * 主机
   */
  Host?: string
  /**
   * 风险id
   */
  RiskId?: string
  /**
   * 备注
   */
  Remark?: string
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
 * DeleteCosPolicy返回参数结构体
 */
export interface DeleteCosPolicyResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDspmAssetDatabaseList请求参数结构体
 */
export interface DescribeDspmAssetDatabaseListRequest {
  /**
   * 资产实例id
   */
  AssetId: string
  /**
   * 集团账号的成员id
   */
  MemberId?: Array<string>
  /**
   * 筛选项
   */
  Filter?: Filter
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
 * DescribeIaCTokenList请求参数结构体
 */
export interface DescribeIaCTokenListRequest {
  /**
   * 集团账号的成员id
   */
  MemberId?: Array<string>
  /**
   * <p>过滤条件</p>
   */
  Filter?: Filter
}

/**
 * 子引擎扫描结果
 */
export interface SkillScanEngineResult {
  /**
   * 子引擎类型
枚举值：
AI：AI 引擎
STATIC：静态分析引擎
   */
  ScanType?: string
  /**
   * 该引擎命中的规则列表
   */
  RuleList?: Array<SkillScanRuleHit>
}

/**
 * cos关联ak资产信息
 */
export interface CosAkAssetInfo {
  /**
   * appid
   */
  AppId?: number
  /**
   * ak id
   */
  AkId?: string
  /**
   * ak名称
   */
  AkName?: string
  /**
   * ak备注
   */
  AkRemark?: string
  /**
   * ak所属uin
   */
  AkOwnerUin?: string
  /**
   * ak类型 1 主 2 子
   */
  AkOwnerType?: number
  /**
   * ak所属账号名
   */
  AkOwnerName?: string
  /**
   * ak主账号名
   */
  AkMainOwnerName?: string
  /**
   * ak关联桶集合
   */
  AkRelBucketSet?: Array<string>
  /**
   * ak关联告警集合
   */
  AkRelAlarmSet?: Array<CosRiskInfo>
  /**
   * Ak关联ip数
   */
  AkRelIpCount?: number
  /**
   * ak状态 0 禁用 1 启用
   */
  AkStatus?: number
  /**
   * 创建时间
   */
  CreateTimestamp?: number
  /**
   * 最后访问时间
   */
  LastAccessTimestamp?: number
}

/**
 * cos风险识别桶访问规则
 */
export interface CosBucketAccessWay {
  /**
   * 可访问方式：
specify 指定用户
anonymous 可匿名访问
   */
  AccessType?: string
  /**
   * 用户数
   */
  AccessUserCount?: number
  /**
   * ak数
   */
  AccessAkCount?: number
  /**
   * 角色数
   */
  AccessRoleCount?: number
}

/**
 * DescribeAKAnalysisDetail返回参数结构体
 */
export interface DescribeAKAnalysisDetailResponse {
  /**
   * 告警AI分析状态 -1 分析失败 0 未分析 1 分析中 2 分析成功，真实告警 3 分析成功，可疑告警
   */
  AIStatus?: number
  /**
   * AI分析任务ID
   */
  AITaskID?: string
  /**
   * 告警AI分析结果，base64格式，避免数据被拦截
   */
  AIResult?: string
  /**
   * 反馈建议
   */
  Feedback?: string
  /**
   * 反馈状态  0表示没有反馈，1表示认可，2表示不认可
   */
  FeedbackResult?: number
  /**
   * 失败原因
   */
  FailedReason?: string
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
 * 受影响的存储桶信息
 */
export interface CosRiskBucketInfo {
  /**
   * appid
   */
  AppId?: number
  /**
   * 桶名
   */
  BucketName?: string
  /**
   * 桶地域
   */
  BucketRegion?: string
  /**
   * 桶备注信息
   */
  BucketMarker?: string
  /**
   * 桶uin
   */
  BucketUin?: string
  /**
   * uin昵称
   */
  BucketNickName?: string
  /**
   * uin主账号昵称
   */
  BucketMainNickName?: string
  /**
   * uin身份
   */
  BucketIdentify?: number
  /**
   * 风险检出时间Unix时间单位毫秒
   */
  LastScanTimestamp?: number
  /**
   * 状态信息
   */
  HandleStatus?: number
  /**
   * 风险名称
   */
  PolicyName?: string
  /**
   * 风险类型
   */
  PolicyType?: number
  /**
   * 策略id
   */
  PolicyId?: number
  /**
   * 策略级别
   */
  PolicyLevel?: number
  /**
   * 策略描述
   */
  PolicyDescription?: string
  /**
   * 访问方式
   */
  BucketAccessWay?: string
  /**
   * 标签信息
   */
  BucketTagInfo?: string
  /**
   * 风险id
   */
  RiskId?: number
  /**
   * cos地域码值
   */
  BucketRegionCode?: string
  /**
   * 是否开启自动监测状态 0 关闭 1 开启
   */
  BucketMonitorStatus?: number
}

/**
 * DescribeDspmAssetIds请求参数结构体
 */
export interface DescribeDspmAssetIdsRequest {
  /**
   * 集团账号的成员id
   */
  MemberId?: Array<string>
  /**
   * 筛选项
   */
  Filter?: Filter
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
 * DescribeDspmAssetAccountIdentify返回参数结构体
 */
export interface DescribeDspmAssetAccountIdentifyResponse {
  /**
   * 资产账号身份总数
   */
  TotalCount?: number
  /**
   * 资产账号身份信息
   */
  IdentifySet?: Array<DspmAssetAccountIdentify>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDspmAssetLoginCredential请求参数结构体
 */
export interface DescribeDspmAssetLoginCredentialRequest {
  /**
   * 数据库资产id
   */
  AssetId: string
  /**
   * 主机。默认'%'
   */
  Host?: string
  /**
   * 加密算法
   */
  EncryptMethod?: string
}

/**
 * DescribeDspmIdentifyInfoList返回参数结构体
 */
export interface DescribeDspmIdentifyInfoListResponse {
  /**
   * 身份总数
   */
  TotalCount?: number
  /**
   * 身份 信息
   */
  InfoSet?: Array<DspmIdentifyInfoItem>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
 * DescribeCosSourceIp请求参数结构体
 */
export interface DescribeCosSourceIpRequest {
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
 * DescribeDspmBackupSetting请求参数结构体
 */
export interface DescribeDspmBackupSettingRequest {
  /**
   * 集团账号的成员id
   */
  MemberId?: Array<string>
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
 * ModifyMachineRemark返回参数结构体
 */
export interface ModifyMachineRemarkResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
 * DescribeDspmSyncAssetsStatus返回参数结构体
 */
export interface DescribeDspmSyncAssetsStatusResponse {
  /**
   * 资产同步任务状态。0-未执行。1-执行中
   */
  Status?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * Dspm 风险统计数
 */
export interface DspmRiskCount {
  /**
   * 待处理风险个数
   */
  UnprocessedRisk?: number
  /**
   * 配置风险个数
   * @deprecated
   */
  ConfigurationRisk?: number
  /**
   * 基线风险个数
   * @deprecated
   */
  BaselineDeviation?: number
  /**
   * 泄露风险个数
   * @deprecated
   */
  LeakDetection?: number
  /**
   * SQL行为异常风险个数
   */
  SQLBehaviorAnomaly?: number
  /**
   * 权限异常风险个数
   */
  PermissionAnomaly?: number
  /**
   * 登录行为异常风险个数
   */
  LoginBehaviorAnomaly?: number
  /**
   * 攻击面风险个数
   */
  AttackSurfaceRisk?: number
  /**
   * 账号敏感操作个数
   */
  AccountSensitiveOperation?: number
  /**
   * 待处理告警个数
   */
  UnprocessedAlarm?: number
  /**
   * 新增事件告警
   */
  NumOfNewAlarmEvent?: number
  /**
   * 新增配置风险
   */
  NumOfNewConfigRisk?: number
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
 * DescribeDspmAssetAccountRecycledPrivileges返回参数结构体
 */
export interface DescribeDspmAssetAccountRecycledPrivilegesResponse {
  /**
   * 权限信息
   */
  Privilege?: DspmDbAccountPrivilege
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
   * 资产类型集合
   */
  AssetTypeList?: Array<AttributeOptionSet>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteDspmRestoreLogList返回参数结构体
 */
export interface DeleteDspmRestoreLogListResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 存储桶id
 */
export interface CosBucketId {
  /**
   * appid
   */
  AppId?: string
  /**
   * bucket id集合
   */
  BucketIdSet?: Array<string>
}

/**
 * 常规密钥凭据（出参专用），用于查询详情接口的响应。Value字段返回打码后的值，不暴露明文
 */
export interface AccessCredentialOutput {
  /**
   * 凭据键名（原文），如SecretId、SecretKey、Token等
   */
  Key?: string
  /**
   * 凭据键值（打码后）
补充说明：保留前3后4位，中间用***替代；长度不足7位时全部替换为***
   */
  Value?: string
}

/**
 * CreateDspmExportTask返回参数结构体
 */
export interface CreateDspmExportTaskResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
 * CreateDspmIdentifyInfoListExportJob返回参数结构体
 */
export interface CreateDspmIdentifyInfoListExportJobResponse {
  /**
   * 任务ID
   */
  JobID?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
 * ModifyDspmIpInfo请求参数结构体
 */
export interface ModifyDspmIpInfoRequest {
  /**
   * ip地址
   */
  Ip: string
  /**
   * 集团账号的成员id
   */
  MemberId?: Array<string>
  /**
   * 备注
   */
  Remark?: string
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
 * AI Agent 流量沙箱插件状态
 */
export interface TrafficPluginState {
  /**
   * 插件安装状态（上层聚合）
枚举值：
NONE：未安装
INSTALLING：安装中
INSTALLED：已安装
INSTALL_FAIL：安装失败
   */
  InstallStatus?: string
  /**
   * 插件安装细分状态。取值与 InstallStatus 对应：未安装（InstallStatus=UNINSTALL）时为空字符串；安装成功（InstallStatus=INSTALLED）时为 SUCCESS；安装失败（InstallStatus=INSTALL_FAIL）时为具体失败原因
枚举值：
NOT_SUPPORT：环境不支持
CONTAINER_NOT_FOUND：容器不存在
REQUIRE_RESTART：需要重启
CA_FAILED：CA 失败
EBPF_FAILED：eBPF 失败
IPTABLE_FAILED：iptables 失败
REDIRECT_FAILED：流量重定向失败
   */
  Status?: string
  /**
   * 状态文案（由 Status 根据请求语言派生的国际化描述）
   */
  Message?: string
  /**
   * 插件最近活跃时间
参数格式：YYYY-MM-DDTHH:mm:ssZ（ISO8601格式）
   */
  ActivityTime?: string
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
 * ModifyDspmRiskInfo请求参数结构体
 */
export interface ModifyDspmRiskInfoRequest {
  /**
   * 风险id
   */
  RiskId: Array<string>
  /**
   * 集团账号的成员id
   */
  MemberId?: Array<string>
  /**
   * 风险状态 2-已忽略
   */
  Status?: number
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
 * DescribeDspmAccessTopologyAccounts返回参数结构体
 */
export interface DescribeDspmAccessTopologyAccountsResponse {
  /**
   * 资产账号列表
   */
  Items?: Array<string>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDspmPersonApplyHistory请求参数结构体
 */
export interface DescribeDspmPersonApplyHistoryRequest {
  /**
   * 对象
   */
  Subject?: string
  /**
   * 资产id
   */
  AssetId?: string
  /**
   * 筛选项
   */
  Filter?: Filter
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
 * DescribeDspmAccessTopologyIps请求参数结构体
 */
export interface DescribeDspmAccessTopologyIpsRequest {
  /**
   * 集团账号的成员id
   */
  MemberId?: Array<string>
  /**
   * 过滤器。 支持的FilterName: AssetId/Account
   */
  Filter?: Filter
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
 * RevertDspmAssetAccount请求参数结构体
 */
export interface RevertDspmAssetAccountRequest {
  /**
   * 实例id
   */
  AssetId: string
  /**
   * 账号名
   */
  Account: string
  /**
   * 主机地址
   */
  Host?: string
  /**
   * 是否回退权限
   */
  PrivilegeFlag?: number
  /**
   * 是否回退密码
   */
  PasswordFlag?: number
  /**
   * 风险id
   */
  RiskId?: string
}

/**
 * DescribeAssetRiskList请求参数结构体
 */
export interface DescribeAssetRiskListRequest {
  /**
   * <p>集团账号的成员id</p>
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
 * SKILL安装状态信息
 */
export interface SkillState {
  /**
   * SKILL安装状态
枚举值：
0：未安装
1：安装中
2：已安装
3：安装失败
4：卸载中
5：卸载失败
   */
  SkillInstallStatus?: number
  /**
   * SKILL安装/卸载操作时间
参数格式：YYYY-MM-DDTHH:mm:ssZ（ISO8601格式）
   */
  SkillInstallTime?: string
  /**
   * SKILL安装/卸载结果描述信息
   */
  SkillInstallResult?: string
}

/**
 * DescribeCosRiskActionList返回参数结构体
 */
export interface DescribeCosRiskActionListResponse {
  /**
   * 总数
   */
  Total?: number
  /**
   * 列表
   */
  Data?: Array<CosRiskActionInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDspmAssetAccounts请求参数结构体
 */
export interface DescribeDspmAssetAccountsRequest {
  /**
   * 集团账号的成员id
   */
  MemberId?: Array<string>
  /**
   * 资产id
   */
  AssetId?: string
  /**
   * 筛选项
   */
  Filter?: Filter
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
 * ModifyCosMarkInfo请求参数结构体
 */
export interface ModifyCosMarkInfoRequest {
  /**
   * 需要修改的存储桶列表
   */
  BucketNameSet: Array<CosBucketInfo>
  /**
   * 备注信息
   */
  MarkInfo: string
}

/**
 * DescribeDspmApplyHistory返回参数结构体
 */
export interface DescribeDspmApplyHistoryResponse {
  /**
   * 申请记录总数
   */
  TotalCount?: number
  /**
   * 申请记录信息
   */
  ApplySet?: Array<DspmApplyOrder>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyDspmIpInfo返回参数结构体
 */
export interface ModifyDspmIpInfoResponse {
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
 * Dspm频率
 */
export interface DspmFrequency {
  /**
   * 数量。
   */
  Count?: number
  /**
   * 单位。
   */
  Unit?: string
}

/**
 * SyncDspmUsers返回参数结构体
 */
export interface SyncDspmUsersResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDspmAssetAccounts返回参数结构体
 */
export interface DescribeDspmAssetAccountsResponse {
  /**
   * 资产账号总数
   */
  TotalCount?: number
  /**
   * 账号信息
   */
  AccountSet?: Array<DspmAssetAccount>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
 * DescribeDspmAssetIds返回参数结构体
 */
export interface DescribeDspmAssetIdsResponse {
  /**
   * 数据库资产总数
   */
  TotalCount?: number
  /**
   * 资产id信息
   */
  AssetSet?: Array<DspmDbAssetId>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
 * ModifyDspmAssetSecurityAnalysisSwitch返回参数结构体
 */
export interface ModifyDspmAssetSecurityAnalysisSwitchResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 暴露资产
 */
export interface ExposesItem {
  /**
   * <p>云厂商</p>
   */
  Provider?: string
  /**
   * <p>云账号名称</p>
   */
  CloudAccountName?: string
  /**
   * <p>云账号</p>
   */
  CloudAccountId?: string
  /**
   * <p>域名</p>
   */
  Domain?: string
  /**
   * <p>IP</p>
   */
  Ip?: string
  /**
   * <p>端口或者端口范围</p>
   */
  Port?: string
  /**
   * <p>开放</p>
   */
  Status?: string
  /**
   * <p>风险类型</p>
   */
  RiskType?: string
  /**
   * <p>acl类型</p>
   */
  AclType?: string
  /**
   * <p>acl列表</p>
   */
  AclList?: string
  /**
   * <p>资产ID</p>
   */
  AssetId?: string
  /**
   * <p>实例名称</p>
   */
  InstanceName?: string
  /**
   * <p>资产类型</p>
   */
  AssetType?: string
  /**
   * <p>端口服务数量</p>
   */
  PortServiceCount?: number
  /**
   * <p>高危端口数量</p>
   */
  HighRiskPortServiceCount?: number
  /**
   * <p>web应用数量</p>
   */
  WebAppCount?: number
  /**
   * <p>有风险web应用数量</p>
   */
  RiskWebAppCount?: number
  /**
   * <p>弱口令数量</p>
   */
  WeakPasswordCount?: number
  /**
   * <p>漏洞数量</p>
   */
  VulCount?: number
  /**
   * <p>首次发现时间</p>
   */
  CreateTime?: string
  /**
   * <p>最近更新时间</p>
   */
  UpdateTime?: string
  /**
   * <p>实例类型名称</p>
   */
  AssetTypeName?: string
  /**
   * <p>开放状态</p>
   */
  DisplayStatus?: string
  /**
   * <p>端口状态</p>
   */
  DisplayRiskType?: string
  /**
   * <p>扫描任务状态</p>
   */
  ScanTaskStatus?: string
  /**
   * <p>uuid</p>
   */
  Uuid?: string
  /**
   * <p>是否进行过安全体检</p>
   */
  HasScan?: string
  /**
   * <p>租户ID</p>
   */
  AppId?: number
  /**
   * <p>租户ID字符串</p>
   */
  AppIdStr?: string
  /**
   * <p>记录ID</p>
   */
  ExposureID?: number
  /**
   * <p>端口开放数量</p>
   */
  PortDetectCount?: number
  /**
   * <p>端口开放结果</p>
   */
  PortDetectResult?: string
  /**
   * <p>标签</p>
   */
  Tag?: string
  /**
   * <p>备注</p>
   */
  Comment?: string
  /**
   * <p>待治理风险数量</p>
   */
  ToGovernedRiskCount?: number
  /**
   * <p>待治理风险内容</p>
   */
  ToGovernedRiskContent?: string
  /**
   * <p>资产类型图标</p>
   */
  AssetTypeIconURL?: string
  /**
   * <p>资产类型3D图标</p>
   */
  AssetTypeIconSolidURL?: string
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
 * Dspm个人身份信息
 */
export interface DspmPersonIdentifyItem {
  /**
   * 身份id。
   */
  PersonId?: string
  /**
   * 姓名。
   */
  Name?: string
  /**
   * 手机号
   */
  Phone?: string
  /**
   * 备注。
   */
  Remark?: string
  /**
   * 创建时间。
   */
  CreateTime?: string
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
 * DescribeCosAuditDictionaryList请求参数结构体
 */
export interface DescribeCosAuditDictionaryListRequest {
  /**
   * <p>字典类型（RootCategory：一级分类，IdentifyRule:敏感识别数据项）</p>
   */
  DictType: string
  /**
   * <p>筛选条件</p>
   */
  Filters?: Array<WhereFilter>
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
 * DeleteIaCFile请求参数结构体
 */
export interface DeleteIaCFileRequest {
  /**
   * <p>删除ID列表</p>
   */
  Id: Array<number | bigint>
}

/**
 * DeleteDspmExportTask返回参数结构体
 */
export interface DeleteDspmExportTaskResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
 * DescribeDspmSyncUsersStatus请求参数结构体
 */
export type DescribeDspmSyncUsersStatusRequest = null

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
 * cos每日告警/风险信息
 */
export interface CosAlarmTrendInfo {
  /**
   * 当前日期字符串格式
   */
  CurrentDateStr?: string
  /**
   * 当前日期总数
   */
  CurrentDayCount?: number
  /**
   * 当天告警分类详情
   */
  CurrentDayOverView?: Array<CosRiskInfo>
}

/**
 * 生效机器范围，用于指定凭证在哪些机器上生效
 */
export interface CredentialEffectScope {
  /**
   * 是否排除模式
枚举值：
0：包含模式（仅Instances中的机器生效），此时Instances必填
1：排除模式（Instances中的机器不生效，其余机器生效），此时Instances可选（空列表表示全部机器生效）
   */
  Exclude?: number
  /**
   * 机器实例ID列表。Exclude为0时必填，表示仅这些机器可访问凭证；Exclude为1时可选，表示这些机器不可访问凭证（空列表表示全部机器生效）
注意：此字段可能返回 null，表示取不到有效值。
   */
  Instances?: Array<string>
}

/**
 * RevertDspmAssetAccount返回参数结构体
 */
export interface RevertDspmAssetAccountResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyDspmPersonalIdentify返回参数结构体
 */
export interface ModifyDspmPersonalIdentifyResponse {
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
 * DeleteDspmBackupLogList请求参数结构体
 */
export interface DeleteDspmBackupLogListRequest {
  /**
   * 备份日志Id
   */
  Id: number
  /**
   * 集团账号的成员id
   */
  MemberId?: Array<string>
}

/**
 * DescribeDspmRiskTendency返回参数结构体
 */
export interface DescribeDspmRiskTendencyResponse {
  /**
   * 风险趋势
   */
  RiskTendencySet?: Array<DspmRiskTendency>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
 * CreateCosAssetSyncTask请求参数结构体
 */
export interface CreateCosAssetSyncTaskRequest {
  /**
   * 集团账号的成员id
   */
  MemberId?: Array<string>
  /**
   * 1 同步所有 2 仅同步资产数
   */
  SyncType?: number
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
 * DescribeDspmAssetSecurityAnalyseStatus返回参数结构体
 */
export interface DescribeDspmAssetSecurityAnalyseStatusResponse {
  /**
   * 数据库资产总数
   */
  TotalCount?: number
  /**
   * 资产安全分析状态信息
   */
  AssetSet?: Array<DspmAssetSecurityAnalyseStatus>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 告警或者风险id信息
 */
export interface CosAlarmRiskIdInfo {
  /**
   * 告警id
   */
  AlarmRiskId: number
  /**
   * 租户id
   */
  AppId: number
}

/**
 * DescribeDspmBackupLogList返回参数结构体
 */
export interface DescribeDspmBackupLogListResponse {
  /**
   * <p>总共多少条</p>
   */
  TotalCount?: number
  /**
   * <p>备份日志列表</p>
   */
  List?: Array<BackupLog>
  /**
   * <p>当前是否存在恢复中任务</p>
   */
  HasRestoringTask?: boolean
  /**
   * <p>最大恢复空间</p>
   */
  MaxRestoreSizeInGB?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyDspmIdentifyInfo请求参数结构体
 */
export interface ModifyDspmIdentifyInfoRequest {
  /**
   * 对象。uin或person id
   */
  Subject: string
  /**
   * 备注
   */
  Remark?: string
}

/**
 * DescribeDspmWhitelistStrategy请求参数结构体
 */
export interface DescribeDspmWhitelistStrategyRequest {
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
 * DescribeDspmAssetDatabases返回参数结构体
 */
export interface DescribeDspmAssetDatabasesResponse {
  /**
   * 数据库列表
   */
  Items?: Array<string>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * SendDspmAssetLoginSmsCode请求参数结构体
 */
export interface SendDspmAssetLoginSmsCodeRequest {
  /**
   * 个人id
   */
  PersonId: string
  /**
   * 数据库资产id
   */
  AssetId: string
  /**
   * 主机。默认'%'
   */
  Host?: string
}

/**
 * DescribeHighBaseLineRiskList请求参数结构体
 */
export interface DescribeHighBaseLineRiskListRequest {
  /**
   * <p>集团账号的成员id</p>
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

/**
 * ModifyCosAuditMonitorAccount返回参数结构体
 */
export interface ModifyCosAuditMonitorAccountResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * Dspm身份id信息
 */
export interface DspmIdentifyIdItem {
  /**
   * 身份id。
   */
  IdentifyId?: string
  /**
   * 备注。
   */
  Remark?: string
  /**
   * 身份类型。0-未定义 2-长期身份 3-临时身份
   */
  IdentifyType?: number
  /**
   * 所属云账号uin用户。
注意：此字段可能返回 null，表示取不到有效值。
   */
  OwnerUin?: DspmUinUser
  /**
   * 创建者账号uin用户。
   */
  CreatorUin?: DspmUinUser
  /**
   * 创建时间。
   */
  CreateTime?: string
  /**
   * 状态。0-不活跃 1-活跃
   */
  Status?: number
  /**
   * 所属个人用户信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  Person?: DspmPersonUser
}

/**
 * DescribeCosAkInvokeIpList请求参数结构体
 */
export interface DescribeCosAkInvokeIpListRequest {
  /**
   * appid
   */
  RelAppId: number
  /**
   * ak
   */
  Ak: string
  /**
   * 过滤条件
   */
  Filter?: Filter
}

/**
 * CreateDspmRiskExportJob请求参数结构体
 */
export interface CreateDspmRiskExportJobRequest {
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
 * cos调用源ip vpc信息
 */
export interface CosInvokeIpVpcInfo {
  /**
   * vpc所属uin
   */
  Uin?: string
  /**
   * vpc所属appid
   */
  AppId?: number
  /**
   * 昵称
   */
  NickName?: string
  /**
   * vpcid信息
   */
  VpcId?: string
  /**
   * vpc名称
   */
  VpcName?: string
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
 * DescribeDspmAssetAccountRecycledPrivileges请求参数结构体
 */
export interface DescribeDspmAssetAccountRecycledPrivilegesRequest {
  /**
   * 风险id
   */
  RiskId?: string
}

/**
 * DescribeCosRiskScanTask返回参数结构体
 */
export interface DescribeCosRiskScanTaskResponse {
  /**
   * cos桶任务详情
   */
  BucketTaskInfoSet?: Array<CosBucketTaskInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * cos调用日志
 */
export interface CosInvokeLog {
  /**
   * 调用时间戳
   */
  InvokeTimestamp?: number
  /**
   * 请求id
   */
  RequestId?: string
  /**
   * 请求内容 base64 json 结构
   */
  RequestContent?: string
}

/**
 * DownloadDspmExportLog返回参数结构体
 */
export interface DownloadDspmExportLogResponse {
  /**
   * 下载URL
   */
  Url?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * cos数据识别结果分类详情
 */
export interface CosIdentifyCategoryDetail {
  /**
   * <p>分类id</p>
   */
  CategoryId?: number
  /**
   * <p>分类名称</p>
   */
  CategoryName?: string
  /**
   * <p>数据项集合</p>
   */
  RuleSet?: Array<CosIdentifyRuleDetail>
}

/**
 * DescribeCheckViewRisks请求参数结构体
 */
export interface DescribeCheckViewRisksRequest {
  /**
   * <p>集团账号的成员id</p>
   */
  MemberId?: Array<string>
  /**
   * <p>过滤内容</p>
   */
  Filters?: Array<Filters>
  /**
   * <p>分页大小</p>
   */
  Limit?: number
  /**
   * <p>偏移量</p>
   */
  Offset?: number
  /**
   * <p>排序类型</p>
   */
  Order?: string
  /**
   * <p>排序字段</p>
   */
  By?: string
}

/**
 * DescribeDspmAssetFieldList请求参数结构体
 */
export interface DescribeDspmAssetFieldListRequest {
  /**
   * 资产实例id
   */
  AssetId: string
  /**
   * 数据库名称
   */
  DbName: string
  /**
   * 表名
   */
  TableName: string
  /**
   * 集团账号的成员id
   */
  MemberId?: Array<string>
  /**
   * 筛选项
   */
  Filter?: Filter
}

/**
 * DeleteDspmPersonalIdentify返回参数结构体
 */
export interface DeleteDspmPersonalIdentifyResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribePolicyHitData返回参数结构体
 */
export interface DescribePolicyHitDataResponse {
  /**
   * 策略命中详情信息
   */
  PolicyHitDetail?: Array<CosRiskInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
 * DescribeSkillScanResult返回参数结构体
 */
export interface DescribeSkillScanResultResponse {
  /**
   * 检测状态
枚举值：
SUCCESS：检测完成，有结果
SCANNING：检测进行中
NOT_FOUND：无检测记录
FAILED：检测失败
   */
  Status?: string
  /**
   * 检测结果详情。Status=SUCCESS 时大部分字段有值；Status=SCANNING 时仅包含 ContentHash 和 CreatedAt；Status=FAILED 时仅包含 ContentHash、FailedAt 和 Message；Status=NOT_FOUND 时仅包含 ContentHash
   */
  Data?: SkillScanItem
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 数据库资产Id信息
 */
export interface DspmDbAssetId {
  /**
   * 资产实例Id
   */
  AssetId?: string
  /**
   * 资产类型
   */
  AssetType?: string
  /**
   *  资产名
   */
  Name?: string
  /**
   * 资产记录id
   */
  Id?: number
  /**
   * 资产所属账号app id
   */
  AppId?: number
  /**
   * 账号昵称
   */
  NickName?: string
  /**
   * 资产所属账号uin
   */
  Uin?: string
}

/**
 * DescribeConfigCheckRules请求参数结构体
 */
export interface DescribeConfigCheckRulesRequest {
  /**
   * <p>集团账号的成员id</p>
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
 * ModifyDspmAccessRecord请求参数结构体
 */
export interface ModifyDspmAccessRecordRequest {
  /**
   * 集团账号的成员id
   */
  MemberId?: Array<string>
  /**
   * 来源ip
   */
  Id?: Array<DspmAccessRecordId>
  /**
   * 视图。ip或instance
   */
  View?: string
  /**
   * 阅读标记。 1-已阅
   */
  Noted?: number
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
 * DescribeDspmAssetLoginCredential返回参数结构体
 */
export interface DescribeDspmAssetLoginCredentialResponse {
  /**
   * 账号
   */
  Account?: string
  /**
   * 密码信息
   */
  Password?: string
  /**
   * 有效期开始时间
   */
  ValidateStart?: string
  /**
   * 有效期结束时间
   */
  ValidateEnd?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeCosPolicy返回参数结构体
 */
export interface DescribeCosPolicyResponse {
  /**
   * 策略总数
   */
  Total?: number
  /**
   * 策略信息
   */
  Data?: Array<CosPolicyInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeCosBucketRisk返回参数结构体
 */
export interface DescribeCosBucketRiskResponse {
  /**
   * 总数
   */
  Total?: number
  /**
   * 列表
   */
  Data?: Array<CosRiskBucketInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeCosRiskActionList请求参数结构体
 */
export interface DescribeCosRiskActionListRequest {
  /**
   * appid
   */
  RelAppId: number
  /**
   * 策略id
   */
  PolicyId: number
  /**
   * 桶名
   */
  BucketName: string
  /**
   * 过滤器
   */
  Filter?: Filter
}

/**
 * DescribeCosRoleAccessPermissions请求参数结构体
 */
export interface DescribeCosRoleAccessPermissionsRequest {
  /**
   * 存储桶所属appid
   */
  RelAppId: number
  /**
   * 存储桶名
   */
  BucketName: string
  /**
   * 过滤条件
   */
  Filter?: Filter
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
 * ModifyAlarmRiskStatus请求参数结构体
 */
export interface ModifyAlarmRiskStatusRequest {
  /**
   * 告警或者风险id
   */
  AlarmRiskIdSet: Array<CosAlarmRiskIdInfo>
  /**
   * 风险或告警状态  1 告警 2风险
   */
  AlarmRiskType: number
  /**
   * 处置状态
   */
  HandleStatus: number
}

/**
 * 流量沙箱规则状态
 */
export interface TrafficRuleState {
  /**
   * <p>沙箱插件模块名</p>
   */
  Module?: string
  /**
   * <p>沙箱规则状态</p><p>枚举值：</p><ul><li>ON： 开启</li><li>OFF： 关闭</li></ul>
   */
  Status?: string
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
  /**
   * 访问密钥状态 0 禁用 1 已启用 2 已删除
   */
  AccessKeyStatus?: number
  /**
   * AK创建时间
   */
  AccessKeyCreateTime?: string
  /**
   * AK最后使用时间，从未使用过则返回“-”
   */
  LastAccessTime?: string
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
 * ModifyDspmAssetDataScanTask请求参数结构体
 */
export interface ModifyDspmAssetDataScanTaskRequest {
  /**
   * 实例id
   */
  AssetIds: Array<string>
  /**
   * 是否定时任务
   */
  IsScheduled: boolean
  /**
   * 是否同意一键授权
   */
  IsAgreeAuth: boolean
  /**
   * 是否立即执行
   */
  IsRunAtOnce: boolean
  /**
   * 集团账号的成员id
   */
  MemberId?: Array<string>
  /**
   * 调度周期配置
   */
  ScheduleConfig?: DspmScheduleConfig
}

/**
 * 资产视角风险信息
 */
export interface AssetRiskItem {
  /**
   * <p>租户ID</p>
   */
  AppId?: number
  /**
   * <p>云厂商</p>
   */
  Provider?: string
  /**
   * <p>云厂商名称</p>
   */
  ProviderName?: string
  /**
   * <p>云账号名称</p>
   */
  CloudAccountName?: string
  /**
   * <p>云账号ID</p>
   */
  CloudAccountId?: string
  /**
   * <p>实例名称</p>
   */
  InstanceName?: string
  /**
   * <p>实例ID</p>
   */
  InstanceId?: string
  /**
   * <p>首次发现时间</p>
   */
  CreateTime?: string
  /**
   * <p>更新时间</p>
   */
  UpdateTime?: string
  /**
   * <p>风险状态</p>
   */
  RiskStatus?: number
  /**
   * <p>风险名称</p>
   */
  RiskTitle?: string
  /**
   * <p>检查类型</p>
   */
  CheckType?: string
  /**
   * <p>风险等级</p>
   */
  Severity?: string
  /**
   * <p>风险规则ID</p>
   */
  RiskRuleId?: string
  /**
   * <p>处置分类</p>
   */
  Classify?: string
  /**
   * <p>等保合规</p>
   */
  StandardTerms?: Array<StandardTerm>
  /**
   * <p>资产类型</p>
   */
  AssetType?: string
  /**
   * <p>资产类型图标</p>
   */
  AssetTypeIconURL?: string
  /**
   * <p>资产类型</p>
   */
  AssetTypeName?: string
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
   * <p>集团账号的成员id</p>
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
 * Dspm访问管理记录Id
 */
export interface DspmAccessRecordId {
  /**
   * 来源ip
   */
  SourceIp?: string
  /**
   * 资产列表
   */
  AssetId?: string
  /**
   * 资产所在地域
   */
  Region?: string
  /**
   * 资产账号
   */
  Account?: string
  /**
   * 主机地址
   */
  Host?: string
  /**
   * 记录时间
   */
  RecordTime?: string
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
 * 地域配置
 */
export interface RegionConfig {
  /**
   * <p>地域</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Region?: string
  /**
   * <p>地域中文</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  RegionName?: string
  /**
   * <p>是否境外</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Foreign?: number
  /**
   * <p>地域码</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Code?: number
  /**
   * <p>是否自驾云</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  IsAutoDriveCloud?: number
  /**
   * <p>是否支持nat</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  IsSupportNat?: number
  /**
   * <p>地区信息</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  RegionArea?: string
  /**
   * <p>地域英文</p>
   */
  RegionNameEN?: string
}

/**
 * SyncDspmAssets请求参数结构体
 */
export interface SyncDspmAssetsRequest {
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
 * DescribeDspmWhitelistStrategy返回参数结构体
 */
export interface DescribeDspmWhitelistStrategyResponse {
  /**
   * 白名单列表
   */
  WhitelistSet?: Array<DspmWhitelistStrategy>
  /**
   * 白名单总数
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDspmAssetAccountIdentify请求参数结构体
 */
export interface DescribeDspmAssetAccountIdentifyRequest {
  /**
   * 集团账号的成员id
   */
  MemberId?: Array<string>
  /**
   * 资产id
   */
  AssetId?: string
  /**
   * 筛选项
   */
  Filter?: Filter
}

/**
 * DescribeDspmAssetAccessTopology返回参数结构体
 */
export interface DescribeDspmAssetAccessTopologyResponse {
  /**
   * 拓扑数据
   */
  ItemSet?: Array<DspmAssetAccessTopologyItem>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeSkillScanPayInfo请求参数结构体
 */
export type DescribeSkillScanPayInfoRequest = null

/**
 * DescribeCosInvokeUa返回参数结构体
 */
export interface DescribeCosInvokeUaResponse {
  /**
   * 总数
   */
  Total?: number
  /**
   * 文件列表
   */
  Data?: Array<string>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDspmApplyHistory请求参数结构体
 */
export interface DescribeDspmApplyHistoryRequest {
  /**
   * 筛选项
   */
  Filter?: Filter
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
 * DescribeCosAuditPayInfo返回参数结构体
 */
export interface DescribeCosAuditPayInfoResponse {
  /**
   * cos审计支付信息
   */
  CosAuditPayInfo?: CosAuditPayInfo
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
 * 容器环境信息
 */
export interface ContainerEnvInfo {
  /**
   * <p>节点类型</p>
   */
  NodeType?: string
  /**
   * <p>docker版本</p>
   */
  DockerVersion?: string
  /**
   * <p>containerd版本</p>
   */
  ContainerdVersion?: string
  /**
   * <p>文件系统类型</p>
   */
  FileSystemType?: string
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
 * IaC检测文件
 */
export interface IaCFile {
  /**
   * <p>ID</p>
   */
  Id?: number
  /**
   * <p>appid</p>
   */
  AppId?: number
  /**
   * <p>文件ID</p>
   */
  FileId?: string
  /**
   * <p>文件名称</p>
   */
  FileName?: string
  /**
   * <p>CI/CD名称</p>
   */
  CICDName?: string
  /**
   * <p>文件路径</p>
   */
  FilePath?: string
  /**
   * <p>文件类型(1:Dockerfile,2:Terraform,3:KubernetesYaml)</p>
   */
  FileType?: number
  /**
   * <p>风险总计数量</p>
   */
  RiskTotalCnt?: number
  /**
   * <p>风险等级数量(0:低危,1:中危,2:高危,3:严重)</p>
   */
  RiskLevelCnt?: Array<KeyValueInt>
  /**
   * <p>扫描时间</p>
   */
  ScanTime?: string
  /**
   * <p>检测状态(0:待扫描,1:检测中,2:已完成,3:检测异常)</p>
   */
  Status?: number
  /**
   * <p>扫描失败类型(0:无失败, 1:检测超时, 2:文件格式解析失败, 3:检测失败)</p>
   */
  FailType?: number
}

/**
 * DescribeCosAccessPermissions请求参数结构体
 */
export interface DescribeCosAccessPermissionsRequest {
  /**
   * appid
   */
  RelAppId: number
  /**
   * 桶名
   */
  BucketName: string
  /**
   * 过滤条件
   */
  Filter?: Filter
}

/**
 * CreateCosRiskScanTask请求参数结构体
 */
export interface CreateCosRiskScanTaskRequest {
  /**
   * 集团账号的成员id
   */
  MemberId?: Array<string>
  /**
   * 需要扫描的桶列表
   */
  BucketNameSet?: Array<CosBucketInfo>
  /**
   * 是否扫描全部的桶
   */
  IsScanAllBucket?: boolean
}

/**
 * cos数据项详情
 */
export interface CosIdentifyRuleDetail {
  /**
   * 数据项id
   */
  RuleId?: number
  /**
   * 数据项名称
   */
  RuleName?: string
  /**
   * 敏感级别id
   */
  LevelId?: number
  /**
   * 敏感级别名称
   */
  LevelName?: string
  /**
   * 敏感程度
   */
  LevelScore?: number
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
 * SyncDspmUsers请求参数结构体
 */
export type SyncDspmUsersRequest = null

/**
 * DescribeDspmAssetTableList返回参数结构体
 */
export interface DescribeDspmAssetTableListResponse {
  /**
   * 总数
   */
  TotalCount?: number
  /**
   * 结果集
   */
  DataSet?: Array<DspmAssetTableInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyAlarmRiskStatus返回参数结构体
 */
export interface ModifyAlarmRiskStatusResponse {
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
 * dspm数据识别结果分类详情
 */
export interface DspmIdentifyCategoryDetail {
  /**
   * 分类id
   */
  CategoryId?: number
  /**
   * 分类名称
   */
  CategoryName?: string
  /**
   * 数据项集合
   */
  RuleSet?: Array<DspmIdentifyRuleDetail>
}

/**
 * 访问密钥告警记录
 */
export interface AccessKeyAlarm {
  /**
   * <p>告警名称</p>
   */
  Name?: string
  /**
   * <p>告警等级<br>0-无效 1-提示 2-低危 3-中危 4-高危 5-严重</p>
   */
  Level?: number
  /**
   * <p>告警记录ID</p>
   */
  ID?: number
  /**
   * <p>告警规则ID</p>
   */
  AlarmRuleID?: number
  /**
   * <p>告警类型<br>0 异常调用<br>1 泄漏监测</p>
   */
  AlarmType?: number
  /**
   * <p>访问密钥</p>
   */
  AccessKey?: string
  /**
   * <p>访问密钥ID</p>
   */
  AccessKeyID?: number
  /**
   * <p>访问密钥备注</p>
   */
  AccessKeyRemark?: string
  /**
   * <p>最后告警时间</p>
   */
  LastAlarmTime?: string
  /**
   * <p>告警状态<br>0-未处理 1-已处理 2-已忽略</p>
   */
  Status?: number
  /**
   * <p>聚合日期</p>
   */
  Date?: string
  /**
   * <p>告警标签</p>
   */
  Tag?: Array<string>
  /**
   * <p>所属主账号Uin</p>
   */
  Uin?: string
  /**
   * <p>所属主账号昵称</p>
   */
  Nickname?: string
  /**
   * <p>所属子账号Uin</p>
   */
  SubUin?: string
  /**
   * <p>所属子账号昵称</p>
   */
  SubNickname?: string
  /**
   * <p>账号类型<br>0 主账号AK 1 子账号AK 2 临时密钥</p>
   */
  Type?: number
  /**
   * <p>所属appid</p>
   */
  AppID?: number
  /**
   * <p>泄漏证据</p>
   */
  LeakEvidence?: Array<string>
  /**
   * <p>是否支持编辑信任账号</p>
   */
  IsSupportEditWhiteAccount?: boolean
  /**
   * <p>告警证据</p>
   */
  Evidence?: string
  /**
   * <p>告警规则标识</p>
   */
  RuleKey?: string
  /**
   * <p>云厂商类型 0:腾讯云 1:亚马逊云 2:微软云 3:谷歌云 4:阿里云 5:华为云</p>
   */
  CloudType?: number
  /**
   * <p>告警AI分析状态<br>-1 分析失败<br>0 未分析<br>1 分析中<br>2 分析成功，真实告警<br>3 分析成功，可疑告警</p>
   */
  AIStatus?: number
  /**
   * <p>首次告警时间戳（秒级）</p>
   */
  FirstAlarmTimestamp?: number
  /**
   * <p>最后告警时间戳（秒级）</p>
   */
  LastAlarmTimestamp?: number
  /**
   * <p>ai分析失败描述，未失败为空字符串</p>
   */
  AIFailedReason?: string
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
 * DescribeDspmAccessRecord请求参数结构体
 */
export interface DescribeDspmAccessRecordRequest {
  /**
   * 集团账号的成员id
   */
  MemberId?: Array<string>
  /**
   * 视图类型。ip或instance
   */
  View?: string
  /**
   * 过滤器
   */
  Filter?: Filter
}

/**
 * DescribeKeySandboxCredential返回参数结构体
 */
export interface DescribeKeySandboxCredentialResponse {
  /**
   * 凭证ID
   */
  CredentialId?: string
  /**
   * 凭证名称
   */
  CredentialName?: string
  /**
   * 凭证类型
枚举值：
access：常规密钥
sts：STS临时密钥
   */
  CredentialType?: string
  /**
   * 生效机器范围
   */
  CredentialEffectScope?: CredentialEffectScope
  /**
   * 常规密钥凭据数据（打码后），CredentialType为access时返回
补充说明：Key为原文，Value为打码后的值（保留前3后4位，中间用***替代）
注意：此字段可能返回 null，表示取不到有效值。
   */
  Access?: Array<AccessCredentialOutput>
  /**
   * STS凭据数据（打码后），CredentialType为sts时返回
补充说明：System为原文，SecretID和SecretKey为打码后的值（保留前3后4位，中间用***替代）
注意：此字段可能返回 null，表示取不到有效值。
   */
  STS?: STSCredentialOutput
  /**
   * 创建时间
参数格式：YYYY-MM-DDTHH:mm:ssZ（ISO8601格式）
   */
  CreateTime?: string
  /**
   * 更新时间
参数格式：YYYY-MM-DDTHH:mm:ssZ（ISO8601格式）
   */
  UpdateTime?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * Skill 安全检测结果详情
 */
export interface SkillScanItem {
  /**
   * <p>Skill 名称</p>
   */
  SkillName?: string
  /**
   * <p>Skill 描述，帮助理解 Skill 的主要用途</p>
   */
  SkillDescription?: string
  /**
   * <p>ZIP 文件的 SHA256 Hash<br>参数格式：sha256:&lt;64位hex&gt;</p>
   */
  ContentHash?: string
  /**
   * <p>原始上传 ZIP 文件解压后的实际文件数，也是计费的范围，扫描成功后1个文件计为1次额度</p>
   */
  UploadFileCount?: number
  /**
   * <p>综合风险等级<br>枚举值：<br>malicious：恶意<br>suspicious：可疑<br>benign：可信</p>
   */
  RiskLevel?: string
  /**
   * <p>风险主标签融合规则 ID（9xxxx），由服务端从命中的融合风险标签中生成；benign 且无规则命中时为空。展示名称可通过 RuleCatalog 获取</p>
   */
  PrimaryRuleID?: string
  /**
   * <p>综合处置建议，用于指导调用方优先执行下线、隔离、修复、复检等动作。历史结果中可能为空。传 Language=en-US 时返回英文文案</p>
   */
  Mitigation?: string
  /**
   * <p>风险综合描述，对本次检测发现的风险进行概括性说明。传 Language=en-US 时返回英文文案</p>
   */
  RiskDescription?: string
  /**
   * <p>安全评分取值范围：[0, 100]补充说明：分数越高越安全</p>
   */
  SecurityScore?: number
  /**
   * <p>本次扫描使用的引擎版本号</p>
   */
  EngineVersion?: number
  /**
   * <p>Skill 能力标签列表，描述 Skill 具备的能力特征或适用场景。不等同于风险标签，也不参与风险等级判定。传 Language=en-US 时 Name 切换为英文，ID 保持不变</p>
   */
  CapabilityTags?: Array<SkillCapabilityTag>
  /**
   * <p>融合规则目录全集，包含所有融合规则类别（9xxxx），调用方可据此展示分类标签，无需本地维护映射表。传 Language=en-US 时返回英文名称</p>
   */
  RuleCatalog?: Array<SkillRuleCatalogItem>
  /**
   * <p>扫描结果详情，按子引擎分组。每个元素包含 ScanType（引擎类型）和 RuleList（命中规则列表）。规则中的 RuleID 使用融合编码（9xxxx），可与 RuleCatalog 交叉引用。传 Language=en-US 时 Description 返回英文文本</p>
   */
  ScanItems?: Array<SkillScanEngineResult>
  /**
   * <p>综合安全审计报告地址（签名 URL）。有效期由请求参数 ReportURLExpireHours 控制</p>
   */
  ReportURL?: string
  /**
   * <p>扫描完成时间。仅 Status=SUCCESS 时有值<br>参数格式：YYYY-MM-DDTHH:mm:ssZ（ISO8601格式）</p>
   */
  ScannedAt?: string
  /**
   * <p>任务创建时间。仅 Status=SCANNING 时有值<br>参数格式：YYYY-MM-DDTHH:mm:ssZ（ISO8601格式）</p>
   */
  CreatedAt?: string
  /**
   * <p>失败时间。仅 Status=FAILED 时有值<br>参数格式：YYYY-MM-DDTHH:mm:ssZ（ISO8601格式）</p>
   */
  FailedAt?: string
  /**
   * <p>失败原因描述。仅 Status=FAILED 时有值</p>
   */
  Message?: string
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
 * ModifyPolicyStatus返回参数结构体
 */
export interface ModifyPolicyStatusResponse {
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
 * DescribeCWPMachines返回参数结构体
 */
export interface DescribeCWPMachinesResponse {
  /**
   * <p>主机列表</p>
   */
  Machines?: Array<Machine>
  /**
   * <p>总数</p>
   */
  Total?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateIaCFileReScanTask请求参数结构体
 */
export interface CreateIaCFileReScanTaskRequest {
  /**
   * <p>文件ID</p>
   */
  Id: number
  /**
   * 集团账号的成员id
   */
  MemberId?: Array<string>
}

/**
 * cos存储桶详情信息
 */
export interface CosBucketInfo {
  /**
   * appid信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  AppId: number
  /**
   * 存储桶名
注意：此字段可能返回 null，表示取不到有效值。
   */
  BucketName: string
  /**
   * 地域信息
   */
  BucketRegion?: string
  /**
   * 地域码值
   */
  BucketRegionCode?: string
  /**
   * 备注
   */
  BucketMarker?: string
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
 * DeleteDspmAssetAccount请求参数结构体
 */
export interface DeleteDspmAssetAccountRequest {
  /**
   * 实例id
   */
  AssetId: string
  /**
   * 账号名
   */
  Account: string
  /**
   * 主机地址
   */
  Host?: string
  /**
   * 风险id
   */
  RiskId?: string
}

/**
 * 敏感分类分级描述
 */
export interface SensitiveDetail {
  /**
   * 字段分类
   */
  CategoryRule?: string
  /**
   * 字段分级
   */
  LevelRisk?: string
  /**
   * 1:敏感信息字段
0:非敏感字段
   */
  IsSensitive?: number
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
 * CreateDspmExportTask请求参数结构体
 */
export interface CreateDspmExportTaskRequest {
  /**
   * <p>集团账号的成员id</p>
   */
  MemberId?: Array<string>
  /**
   * <p>风险等级(0-安全,1-低风险,2-中风险,3-高风险,-1-全部)</p>
   */
  DangerLevel?: number
  /**
   * <p>数据库名称</p>
   */
  DbName?: string
  /**
   * <p>数据库端口</p>
   */
  DbPort?: number
  /**
   * <p>数据库 IP</p>
   */
  DbIp?: string
  /**
   * <p>资产 ID</p>
   */
  AssetsId?: number
  /**
   * <p>会话 ID</p>
   */
  SessionId?: string
  /**
   * <p>客户端 IP</p>
   */
  ClientSideIp?: string
  /**
   * <p>结束时间</p>
   */
  EndTime?: number
  /**
   * <p>命中规则</p>
   */
  HitRule?: number
  /**
   * <p>开始时间</p>
   */
  StartTime?: number
  /**
   * <p>模糊查询</p>
   */
  FuzzySearch?: string
  /**
   * <p>用户名</p>
   */
  UserName?: string
  /**
   * <p>客户端</p>
   */
  ClientName?: string
  /**
   * <p>流量来源，取值 Agent/Proxy/空；传Agent会返回Agent的日志，传Proxy会返回Proxy日志，两都传或不传则返回所有</p>
   */
  SourceTypes?: Array<string>
  /**
   * <p>表名，长度限制64，多个表名查询的话可以用空格连接</p>
   */
  TableName?: string
  /**
   * <p>字段名，长度限制64，多个字段名查询的话可以用空格连接</p>
   */
  FieldName?: string
  /**
   * <p>SQL 主要类型，DDL, DML, DCL, TCL</p>
   */
  SqlMainTypes?: Array<string>
  /**
   * <p>操作类型</p>
   */
  SqlType?: string
  /**
   * <p>影响行数最小值</p>
   */
  RowNumMin?: number
  /**
   * <p>影响行数最大值</p>
   */
  RowNumMax?: number
  /**
   * <p>数据库类型</p>
   */
  DbTypes?: Array<string>
  /**
   * <p>返回码</p>
   */
  RetNo?: number
  /**
   * <p>客户端工具</p>
   */
  ClientDriverName?: string
  /**
   * <p>客户端端口</p>
   */
  ClientPort?: number
  /**
   * <p>审计日志 ID</p>
   */
  LogId?: string
  /**
   * <p>风险等级数组(0-安全,1-低风险,2-中风险,3-高风险), 如果要全部，则需要将所有的值都传入。如果为空，则会参考：DangerLevel 入参</p>
   */
  DangerLevels?: Array<number | bigint>
  /**
   * <p>字段分类</p>
   */
  SensitiveCategoryRule?: string
  /**
   * <p>字段分级</p>
   */
  SensitiveLevelRisk?: string
  /**
   * <p>事务Id</p>
   */
  TrxId?: number
  /**
   * <p>clientMac</p>
   */
  ClientMac?: string
}

/**
 * 融合规则目录项
 */
export interface SkillRuleCatalogItem {
  /**
   * 融合规则 ID（9xxxx）
   */
  RuleID?: string
  /**
   * 风险类别名称
   */
  RuleName?: string
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
 * 对象存储风险趋势图
 */
export interface CosRiskTrendInfo {
  /**
   * 当前日期
   */
  CurrentDateStr?: string
  /**
   * 风险数据信息
   */
  RiskDataSet?: Array<CosRiskInfo>
}

/**
 * DescribeCosAssetSyncTask请求参数结构体
 */
export interface DescribeCosAssetSyncTaskRequest {
  /**
   * 集团账号的成员id
   */
  MemberId?: Array<string>
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
 * CreateDspmApplyOrder请求参数结构体
 */
export interface CreateDspmApplyOrderRequest {
  /**
   * 资产id
   */
  AssetId: string
  /**
   * 申请类型。0-子账号授权 1-访客授权。
   */
  ApplyType: number
  /**
   * 权限信息。
   */
  Privilege?: DspmDbAccountPrivilege
  /**
   * 主机地址。当前仅支持'%'。默认'%'。
   */
  Host?: string
  /**
   * 从审批完成后开始计算的访问权限失效时间，临时账号有效。单位毫秒。
   */
  ValidatePeriod?: number
  /**
   * 审批人列表。为空使用资产全部管理员。
   */
  ApproverUin?: Array<string>
  /**
   * 申请原因
   */
  Reason?: string
  /**
   * 管理类型。0-普通成员 1-管理员
   */
  ManagerType?: number
  /**
   * 被授权者。子账号授权时，传目标uin，为空时默认使用当前uin；访客授权时传访客身份id。
   */
  Subject?: string
}

/**
 * 风险详情
 */
export interface RiskDetailItem {
  /**
   * <p>首次发现时间</p>
   */
  CreateTime?: string
  /**
   * <p>更新时间</p>
   */
  UpdateTime?: string
  /**
   * <p>风险状态</p>
   */
  RiskStatus?: number
  /**
   * <p>风险内容</p>
   */
  RiskContent?: string
  /**
   * <p>云厂商</p>
   */
  Provider?: string
  /**
   * <p>云厂商名称</p>
   */
  ProviderName?: string
  /**
   * <p>云账号</p>
   */
  CloudAccountId?: string
  /**
   * <p>云账号名称</p>
   */
  CloudAccountName?: string
  /**
   * <p>实例ID</p>
   */
  InstanceId?: string
  /**
   * <p>实例名称</p>
   */
  InstanceName?: string
  /**
   * <p>风险ID</p>
   */
  RiskId?: number
  /**
   * <p>风险规则ID</p>
   */
  RiskRuleId?: string
  /**
   * <p>风险验证状态</p>
   */
  CheckStatus?: string
  /**
   * <p>用户AppID</p>
   */
  AppID?: number
  /**
   * <p>资产类型</p>
   */
  AssetType?: string
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
 * DescribeCosAlarmTrendData返回参数结构体
 */
export interface DescribeCosAlarmTrendDataResponse {
  /**
   * 告警趋势信息
   */
  CosAlarmTrendInfo?: Array<CosAlarmTrendInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDspmAssetDatabaseList返回参数结构体
 */
export interface DescribeDspmAssetDatabaseListResponse {
  /**
   * 总数
   */
  TotalCount?: number
  /**
   * 结果集
   */
  DataSet?: Array<DspmAssetDatabaseInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateSkillScan请求参数结构体
 */
export interface CreateSkillScanRequest {
  /**
   * ZIP 文件内容的 Base64 编码
入参限制：文件大小上限 7MB（编码前），仅接受有效的 ZIP 格式
   */
  FileBase64: string
  /**
   * 文件名，用于服务端日志记录
参数格式：形如 my-skill.zip
   */
  FileName?: string
}

/**
 * ModifyDspmAccessRecord返回参数结构体
 */
export interface ModifyDspmAccessRecordResponse {
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
   * <p>实例ID</p>
   */
  InstanceId: string
  /**
   * <p>备注信息</p>
   */
  Remark: string
  /**
   * <p>集团账号的成员id</p>
   */
  MemberId?: Array<string>
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
 * DescribeCosBucketList请求参数结构体
 */
export interface DescribeCosBucketListRequest {
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
 * DescribeVulRiskList请求参数结构体
 */
export interface DescribeVulRiskListRequest {
  /**
   * <p>集团账号的成员id</p>
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
 * ModifyIaCTokenPeriod请求参数结构体
 */
export interface ModifyIaCTokenPeriodRequest {
  /**
   * <p>ID</p>
   */
  Id: number
  /**
   * <p>扫描结果存储周期</p>
   */
  Period: number
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
 * Dspm 白名单策略
 */
export interface DspmWhitelistStrategy {
  /**
   * 白名单策略id
   */
  WhitelistStrategyId?: string
  /**
   * 策略类型
   */
  StrategyType?: string
  /**
   * 白名单策略名
   */
  Name?: string
  /**
   * 策略类型
   */
  StrategyCategory?: string
  /**
   * 策略规则
   */
  Rule?: string
  /**
   * 备注
   */
  Remark?: string
  /**
   * 修改时间
   */
  ModifyTime?: string
  /**
   * 资产id
   */
  AssetId?: string
  /**
   * 账号
   */
  Account?: string
  /**
   * 主机
   */
  Host?: string
  /**
   * 策略规则内容描述
   */
  Description?: string
  /**
   * 白名单类型。risk-风险白名单；alarm-告警白名单。
   */
  RiskType?: string
  /**
   * 资产所属账号app id
   */
  AppId?: number
  /**
   * 账号昵称
   */
  NickName?: string
  /**
   * 资产所属账号uin
   */
  Uin?: string
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
 * DescribeDspmRisk请求参数结构体
 */
export interface DescribeDspmRiskRequest {
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
 * DeleteDspmExportTask请求参数结构体
 */
export interface DeleteDspmExportTaskRequest {
  /**
   * 集团账号的成员id
   */
  MemberId?: Array<string>
  /**
   * 要删除的导出任务ID
   */
  TaskIds?: Array<number | bigint>
}

/**
 * Ai Agent 资产信息列表项
 */
export interface AIAgentAsset {
  /**
   * <p>ID 标识</p>
   */
  ID?: string
  /**
   * <p>agent 名称</p>
   */
  AgentName?: string
  /**
   * <p>agent 使用模型名称</p>
   */
  AgentModel?: Array<string>
  /**
   * <p>实例 ID</p>
   */
  InstanceID?: string
  /**
   * <p>实例名称</p>
   */
  InstanceName?: string
  /**
   * <p>metadata 风险列表。有如下枚举值: 1. AK_TMP  2. USER_DATA</p>
   */
  MetadataRiskList?: Array<string>
  /**
   * <p>首次检出时间</p>
   */
  IdentityTimeFirst?: string
  /**
   * <p>最近检出时间</p>
   */
  IdentityTimeLast?: string
  /**
   * <p>检出方式。有如下枚举值 1. FINGER 资产指纹方式检出 2. NETWORK 网络访问方式检出</p>
   */
  IdentityMethod?: string
  /**
   * <p>暴露状态。有如下枚举值。1. EXPOSED；2.UNEXPOSED；</p><ol start="3"><li>UNKNOWN;</li></ol>
   */
  ExposureStatus?: string
  /**
   * <p>metadata 有风险时对应路径</p>
   */
  MetadataRiskURL?: string
  /**
   * <p>无</p>
   */
  SkillState?: SkillState
  /**
   * <p>流量沙箱插件状态</p>
   */
  TrafficPluginState?: TrafficPluginState
  /**
   * <p>流量沙箱规则状态</p>
   */
  TrafficRuleState?: Array<TrafficRuleState>
  /**
   * <p>命令沙箱插件状态</p>
   */
  CommandPluginState?: CommandPluginState
}

/**
 * Dspm 资产安全分析状态统计数
 */
export interface DspmSecurityAnalyseStatusCount {
  /**
   * 资产安全分析开启数
   */
  OpenCount?: number
  /**
   * 资产安全分析开启中数
   */
  OpeningCount?: number
  /**
   * 资产安全分析关闭中数
   */
  ClosingCount?: number
  /**
   * 资产安全分析未开启数
   */
  CloseCount?: number
  /**
   * 按照资产类型分组的资产安全分析状态统计数
   */
  AssetTypeCountSet?: Array<DspmAssetTypeCount>
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
 * 数据库权限
 */
export interface DspmDatabasePrivilege {
  /**
   * 权限信息
   */
  Privileges?: Array<string>
  /**
   * 数据库名
   */
  Database?: string
}

/**
 * DescribeDspmExportTask请求参数结构体
 */
export interface DescribeDspmExportTaskRequest {
  /**
   * 集团账号的成员id
   */
  MemberId?: Array<string>
  /**
   * 任务状态：0.未开始 1.执行中 2.执行成功 3.执行超时 4.执行失败
   */
  TaskStatus?: number
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
 * DescribeDspmApplyOrderList请求参数结构体
 */
export interface DescribeDspmApplyOrderListRequest {
  /**
   * 过滤器
   */
  Filter?: Filter
}

/**
 * DescribeCosBucketRisk请求参数结构体
 */
export interface DescribeCosBucketRiskRequest {
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
 * DescribeDspmRiskStrategy请求参数结构体
 */
export interface DescribeDspmRiskStrategyRequest {
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
 * DescribeKeySandboxCredentialList请求参数结构体
 */
export interface DescribeKeySandboxCredentialListRequest {
  /**
   * 过滤条件列表，支持的过滤条件如下：
CredentialName - 凭证名称（模糊匹配）
CredentialType - 凭证类型（精确匹配），取值：access、sts
   */
  Filter?: Filter
  /**
   * 集团账号的成员id
   */
  MemberId?: Array<string>
}

/**
 * DescribeDspmAssets返回参数结构体
 */
export interface DescribeDspmAssetsResponse {
  /**
   * 数据库资产总数
   */
  TotalCount?: number
  /**
   * 资产信息
   */
  AssetSet?: Array<DspmDbAsset>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDspmAccessTopologyAccounts请求参数结构体
 */
export interface DescribeDspmAccessTopologyAccountsRequest {
  /**
   * 集团账号的成员id
   */
  MemberId?: Array<string>
  /**
   * 过滤器。 支持的FilterName: Ip/AssetId
   */
  Filter?: Filter
}

/**
 * DescribeDspmPersonalIdentifyList请求参数结构体
 */
export interface DescribeDspmPersonalIdentifyListRequest {
  /**
   * 筛选项
   */
  Filter?: Filter
}

/**
 * 对象存储调用源ip信息
 */
export interface CosSourceIpInfo {
  /**
   * 调用UA
   */
  UA?: Array<string>
  /**
   * 调用vpc信息
   */
  VpcInfo?: CosInvokeIpVpcInfo
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
 * DescribeDspmAssetSecurityAnalyseStatus请求参数结构体
 */
export interface DescribeDspmAssetSecurityAnalyseStatusRequest {
  /**
   * 集团账号的成员id
   */
  MemberId?: Array<string>
  /**
   * 筛选项
   */
  Filter?: Filter
}

/**
 * ModifyDspmRiskInfo返回参数结构体
 */
export interface ModifyDspmRiskInfoResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
 * DownloadDspmExportLog请求参数结构体
 */
export interface DownloadDspmExportLogRequest {
  /**
   * 集团账号的成员id
   */
  MemberId?: Array<string>
  /**
   * 要下载的导出任务ID
   */
  TaskId?: number
}

/**
 * DescribeAKAnalysisDetail请求参数结构体
 */
export interface DescribeAKAnalysisDetailRequest {
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
 * DescribeDspmStatistics返回参数结构体
 */
export interface DescribeDspmStatisticsResponse {
  /**
   * 资产统计信息
   */
  AssetCount?: DspmAssetCount
  /**
   * 访问Ip统计信息
   */
  IpCount?: DspmIpCount
  /**
   * 用户账号统计信息
   */
  UserCount?: DspmAccountCount
  /**
   * 风险统计信息
   */
  RiskCount?: DspmRiskCount
  /**
   * 资产安全分析统计信息
   */
  AnalyseAssetStatusCount?: DspmSecurityAnalyseStatusCount
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
   * <p>集团账号的成员id</p>
   */
  MemberId?: Array<string>
  /**
   * 过滤内容
   */
  Filter?: Filter
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
 * 地域信息
 */
export interface RegionInfo {
  /**
   * <p>地域</p>
   */
  Region?: string
  /**
   * <p>地域编码</p>
   */
  RegionCode?: string
  /**
   * <p>地域ID</p>
   */
  RegionId?: number
  /**
   * <p>地域名称</p>
   */
  RegionName?: string
  /**
   * <p>地域英文名称</p>
   */
  RegionNameEn?: string
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
 * DescribeRiskTrendData请求参数结构体
 */
export interface DescribeRiskTrendDataRequest {
  /**
   * 集团账号的成员id
   */
  MemberId?: Array<string>
  /**
   * 指定的日期
   */
  LastDays?: number
}

/**
 * 网卡信息
 */
export interface NetworkCardInfo {
  /**
   * <p>DNS服务器</p>
   */
  DnsServer?: string
  /**
   * <p>网关</p>
   */
  Gateway?: string
  /**
   * <p>IP地址</p>
   */
  Ip?: string
  /**
   * <p>IPv6地址</p>
   */
  Ipv6?: string
  /**
   * <p>MAC地址</p>
   */
  Mac?: string
  /**
   * <p>网卡名称</p>
   */
  Name?: string
}

/**
 * 风险视角风险列表
 */
export interface CosRiskViewInfo {
  /**
   * appid
   */
  AppId?: number
  /**
   * 策略名称
   */
  PolicyName?: string
  /**
   * 策略id
   */
  PolicyId?: string
  /**
   * 策略分类
   */
  PolicyType?: number
  /**
   * 策略风险等级
   */
  PolicyRiskLevel?: number
  /**
   * 策略描述
   */
  PolicyDescription?: string
  /**
   * 待处理的桶数
   */
  HandleBucketCount?: number
  /**
   * 最近风险检出时间Unix时间单位毫秒
   */
  LastScanTimestamp?: number
}

/**
 * 过滤条件。同一 Name 下多个 Values 为或关系；不同 Name 之间为且关系
 */
export interface Filters {
  /**
   * 过滤条件名称
   */
  Name?: string
  /**
   * 过滤条件值列表
   */
  Values?: Array<string>
  /**
   * 是否精确匹配：1 精确匹配；默认模糊匹配
   */
  ExactMatch?: string
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
 * DescribeCosAsset请求参数结构体
 */
export interface DescribeCosAssetRequest {
  /**
   * 请求过滤器
   */
  Filter: Filter
  /**
   * 集团账号的成员id
   */
  MemberId?: Array<string>
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
 * DescribeIaCFileOverview请求参数结构体
 */
export interface DescribeIaCFileOverviewRequest {
  /**
   * <p>开始时间</p>
   */
  StartTime?: string
  /**
   * <p>结束时间</p>
   */
  EndTime?: string
  /**
   * 集团账号的成员id
   */
  MemberId?: Array<string>
}

/**
 * DeleteIaCAccessToken请求参数结构体
 */
export interface DeleteIaCAccessTokenRequest {
  /**
   * <p>删除ID列表</p>
   */
  Id: Array<number | bigint>
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
 * CreateCosPolicy返回参数结构体
 */
export interface CreateCosPolicyResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
 * 对象存储告警信息
 */
export interface CosAlarmInfo {
  /**
   * appid

   */
  AppId?: number
  /**
   * 策略id
   */
  PolicyId?: number
  /**
   * 策略名称
   */
  PolicyName?: string
  /**
   * 策略类型 0-未知规则分类(Unknown), 1-异常行为(AbnormalBehavior), 2-权限过大(ExcessivePermission), 3-资源枚举(ResourceEnumerated), 4-匿名访问(AnonymousAccess)

   */
  PolicyAbnormalType?: number
  /**
   * 风险等级：0:Normal, 1:Tip, 2:Low, 3:Middle, 4:High, 5:Critical
   */
  PolicyRiskLevel?: number
  /**
   * 策略信息描述
   */
  PolicyDescription?: string
  /**
   * 桶名
   */
  BucketName?: string
  /**
   * 桶地域
   */
  BucketRegion?: string
  /**
   * 桶备注
   */
  BucketMarker?: string
  /**
   * 桶tag信息
   */
  BucketTagInfo?: string
  /**
   * 桶可访问属性
   */
  BucketAccessWay?: string
  /**
   * 所属账号uin
   */
  AccountUin?: string
  /**
   * 所属账号昵称
   */
  AccountNickName?: string
  /**
   * 所属账号社身份 1 主 2子
   */
  AccountIdentify?: number
  /**
   * 子账号所属主账号昵称
   */
  AccountMainNickName?: string
  /**
   * 告警时间戳Unix时间单位毫秒
   */
  AlarmTimestamp?: number
  /**
   * 处置状态 0 未处理 1 标记处置 2标记忽略
   */
  HandleStatus?: number
  /**
   * 告警对象id
   */
  AlarmId?: number
  /**
   * 桶地域码值
   */
  BucketRegionCode?: string
  /**
   * 数据识别分类详情
   */
  CategoryDetails?: Array<CosIdentifyCategoryDetail>
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
 * DescribeDspmLogList返回参数结构体
 */
export interface DescribeDspmLogListResponse {
  /**
   * 总数目
   */
  TotalCount?: number
  /**
   * 日志信息列表
   */
  List?: Array<AuditLogInfo>
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
 * DeleteDspmWhitelistStrategy请求参数结构体
 */
export interface DeleteDspmWhitelistStrategyRequest {
  /**
   * 集团账号的成员id
   */
  MemberId?: Array<string>
  /**
   * 白名单id
   */
  WhitelistStrategyId?: Array<string>
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
 * Dspm资产访问拓扑
 */
export interface DspmAssetAccessTopologyItem {
  /**
   * 资产id
   */
  AssetId?: string
  /**
   * 资产类型
   */
  AssetType?: string
  /**
   * 资产名
   */
  AssetName?: string
  /**
   * 资产账号
   */
  AssetAccount?: string
  /**
   * 主机地址
   */
  Host?: string
  /**
   * 账号类型
   */
  AccountType?: number
  /**
   * 资产地址
   */
  AssetIp?: string
  /**
   * 访问来源ip地址
   */
  SourceIp?: string
  /**
   * 访问来源ip类型
   */
  SourceIpType?: string
  /**
   * 访问频率。次/天
   */
  AccessFrequency?: DspmFrequency
  /**
   * 执行SQL频率。条/小时。
   */
  ExecSQLFrequency?: DspmFrequency
  /**
   * 访问起始时间
   */
  AccessBeginTime?: string
  /**
   * 访问结束时间
   */
  AccessEndTime?: string
  /**
   * 账号风险数
   */
  AccountRisk?: number
  /**
   * 资产风险数
   */
  AssetRisk?: number
  /**
   * 所属地域
   */
  Region?: string
  /**
   * 身份类型。非身份账号为null。0-未定义 2-长期身份 3-临时身份
   */
  IdentifyType?: number
  /**
   * 所属云账号uin用户。
   */
  OwnerUin?: DspmUinUser
  /**
   * 所属个人用户信息。
   */
  Person?: DspmPersonUser
  /**
   * 账号告警数
   */
  AccountAlarm?: number
  /**
   * 资产告警数
   */
  AssetAlarm?: number
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
 * DeleteDspmAssetAccount返回参数结构体
 */
export interface DeleteDspmAssetAccountResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeRiskBucketList返回参数结构体
 */
export interface DescribeRiskBucketListResponse {
  /**
   * 总数
   */
  Total?: number
  /**
   * 受影响的存储桶
   */
  Data?: Array<CosRiskBucketInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeAssumeRole返回参数结构体
 */
export interface DescribeAssumeRoleResponse {
  /**
   * 是否绑定角色。0-未绑定 1-已绑定
   */
  Bind?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}
