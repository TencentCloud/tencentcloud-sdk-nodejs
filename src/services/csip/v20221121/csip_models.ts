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
 * StopBaselineScanTask返回参数结构体
 */
export interface StopBaselineScanTaskResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
 * 云边界待处理风险信息
 */
export interface ExposeRiskItem {
  /**
   * 规则类型
   */
  RuleType?: string
  /**
   * 风险等级
   */
  Severity?: string
  /**
   * 规则名称
   */
  Title?: string
}

/**
 * DescribeUserCSPMInfoList请求参数结构体
 */
export interface DescribeUserCSPMInfoListRequest {
  /**
   * <p>集团账号的成员id</p>
   */
  MemberId?: Array<string>
}

/**
 * DescribeLoginWhiteHostList请求参数结构体
 */
export interface DescribeLoginWhiteHostListRequest {
  /**
   * <p>白名单ID</p>
   */
  Id: number
  /**
   * <p>需要返回的数量，最大值为1000</p>
   */
  Limit: number
  /**
   * <p>偏移量，默认为0。</p>
   */
  Offset: number
  /**
   * <p>集团账号的成员id</p>
   */
  MemberId?: Array<string>
  /**
   * <p>过滤条件 IpOrAlias - String - 是否必填：否 - 主机ip或别名筛选</p>
   */
  Filters?: Array<AssetFilters>
}

/**
 * 灰度用户配置
 */
export interface AbTestUserItem {
  /**
   * appId
   */
  AppId?: number
  /**
   * 是否灰度用户
   */
  IsAbTestUser?: boolean
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
 * StopEDRScanTask请求参数结构体
 */
export interface StopEDRScanTaskRequest {
  /**
   * <p>任务ID</p>
   */
  TaskId: number
  /**
   * <p>集团账号的成员id</p>
   */
  MemberId?: Array<string>
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
   * 执行时间,单位：毫秒
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
 * DescribeLicenseStatus返回参数结构体
 */
export interface DescribeLicenseStatusResponse {
  /**
   * <p>授权状态列表（旗舰版→专业版→RASP）</p>
   */
  List?: Array<LicenseStatusItem>
  /**
   * <p>自动加购开关 0-关 1-开</p>
   */
  AutoRepurchaseSwitch?: number
  /**
   * <p>合并剩余解绑次数 = (旗舰版total + 专业版total) × 2 - 当月已解绑次数</p>
   */
  UnbindCountLeft?: number
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
 * DescribeExposeRules请求参数结构体
 */
export interface DescribeExposeRulesRequest {
  /**
   * 过滤项
   */
  Filters?: Array<Filters>
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
 * 展示登录审计白名单时的主机信息实体
 */
export interface HostDesc {
  /**
   * <p>机器uuid</p>
   */
  Quuid?: string
  /**
   * <p>主机安全uuid</p>
   */
  Uuid?: string
  /**
   * <p>机器名</p>
   */
  MachineName?: string
  /**
   * <p>机器IP:已销毁的服务器IP为空</p>
   */
  MachineIp?: string
  /**
   * <p>公网IP:已销毁的服务器IP为空</p>
   */
  MachineWanIp?: string
  /**
   * <p>标签信息数组</p>
   */
  Tags?: Array<MachineTag>
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
 * 日志高亮信息
 */
export interface LogHighLightItem {
  /**
   * <p>键</p>
   */
  Key?: string
  /**
   * <p>值</p>
   */
  Values?: Array<string>
}

/**
 * DescribeCWPScanIpInfo返回参数结构体
 */
export interface DescribeCWPScanIpInfoResponse {
  /**
   * <p>所属业务</p>
   */
  Bussiness?: string
  /**
   * <p>业务特征</p>
   */
  Characteristic?: string
  /**
   * <p>描述</p>
   */
  Describe?: string
  /**
   * <p>官方公告</p>
   */
  Referer?: string
  /**
   * <p>扫描示例</p>
   */
  Demo?: string
  /**
   * <p>扫描对象</p>
   */
  Target?: string
  /**
   * <p>扫描目的</p>
   */
  Purpose?: string
  /**
   * <p>产品文案</p>
   */
  Announcement?: string
  /**
   * <p>地理位置</p>
   */
  Location?: string
  /**
   * <p>所属运营商</p>
   */
  ISP?: string
  /**
   * <p>是否归属于腾讯</p>
   */
  IsBelongTencent?: boolean
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
 * 日志过滤器
 */
export interface LogCLSFilter {
  /**
   * <p>键</p>
   */
  Key?: string
  /**
   * <p>值</p>
   */
  Values?: Array<string>
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
 * ModifyShareUserCSPM返回参数结构体
 */
export interface ModifyShareUserCSPMResponse {
  /**
   * 0-成功，1-失败
   */
  Result?: number
  /**
   * 成功或失败信息
   */
  Msg?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyEdrAlertStatus请求参数结构体
 */
export interface ModifyEdrAlertStatusRequest {
  /**
   * <p>目标告警信息</p>
   */
  Targets: Array<EdrAlertTarget>
  /**
   * <p>想达到的告警状态枚举值：PROCESSED： 已处理WHITELISTED： 已加白IGNORED： 已忽略DELETED： 已删除-软删除</p>
   */
  Status: string
  /**
   * <p>集团账号的成员id</p>
   */
  MemberId?: Array<string>
}

/**
 * DescribeMachineClearHistory返回参数结构体
 */
export interface DescribeMachineClearHistoryResponse {
  /**
   * <p>总条数</p>
   */
  TotalCount?: number
  /**
   * <p>列表数据</p>
   */
  List?: Array<MachineClearHistory>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 通知设置
 */
export interface NotifySetting {
  /**
   * <p>通知模块</p><p>枚举值：</p><ul><li>AkSk： 云API风险治理</li><li>Alert： 告警中心</li><li>Agent： 客户端</li></ul>
   */
  Module: string
  /**
   * <p>通知设置模式</p><p>枚举值：</p><ul><li>0： 标准模式</li><li>1： 高级模式</li></ul>
   */
  Mode: number
  /**
   * <p>通知状态</p><p>枚举值：</p><ul><li>0： 通知关闭</li><li>1： 通知开启</li></ul>
   */
  Status: number
  /**
   * <p>通知开始时间</p><p>参数格式：hh:mm:ss</p>
   */
  BeginTime: string
  /**
   * <p>通知结束时间</p><p>参数格式：hh:mm:ss</p>
   */
  EndTime: string
  /**
   * <p>资产范围</p><p>枚举值：</p><ul><li>1： 全部主机</li><li>2： 自选主机</li><li>3： 按标签选择</li></ul>
   */
  AssetRange: number
  /**
   * <p>通知选项</p><p>枚举值：</p><ul><li>CRITICAL： 告警等级：严重</li><li>HIGH： 告警等级：高危</li><li>MEDIUM： 告警等级：中危</li><li>LOW： 告警等级：低危</li><li>INFO： 告警等级：提醒</li><li>AGENT_UNINSTALL： 客户端卸载</li><li>AGENT_OFFLINE： 客户端离线</li></ul>
   */
  Option?: Array<string>
  /**
   * <p>通知模块（二级模块）</p>
   */
  SubModule?: string
  /**
   * <p>处置状态等</p>
   */
  Item?: Array<string>
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
 * ExportTasks请求参数结构体
 */
export interface ExportTasksRequest {
  /**
   * <p>任务ID</p>
   */
  TaskId: string
  /**
   * <p>集团账号的成员id</p>
   */
  MemberId?: Array<string>
}

/**
 * ModifyCSIPRaspLicenseUnBinds请求参数结构体
 */
export interface ModifyCSIPRaspLicenseUnBindsRequest {
  /**
   * <p>待解绑的实例ID列表（IsAll=true时可不传）</p>
   */
  InstanceIDs?: Array<string>
  /**
   * <p>是否解绑全部已绑定RASP机器</p>
   */
  IsAll?: boolean
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
 * ExportEDRRules返回参数结构体
 */
export interface ExportEDRRulesResponse {
  /**
   * <p>任务ID,需要到接口 <a href="https://cloud.tencent.com/document/product/296/52508" target="_blank">异步导出任务</a>获取DownloadUrl下载地址</p>
   */
  TaskId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyAgentRunPolicy请求参数结构体
 */
export interface ModifyAgentRunPolicyRequest {
  /**
   * <p>集团账号的成员id</p>
   */
  MemberId?: Array<string>
  /**
   * <p>自定义运行策略（CPU/Memory/NetworkPps），不传则不修改</p>
   */
  CustomPolicy?: CustomAgentRunModePolicy
  /**
   * <p>高级模式机器instance_id列表，后台自动转为quuid存储</p>
   */
  AdvanceModeInstanceIDs?: Array<string>
  /**
   * <p>自定义模式机器instance_id列表，后台自动转为quuid存储</p>
   */
  CustomModeInstanceIDs?: Array<string>
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
 * 云资源配置检测规范关联检查项
 */
export interface ComplianceStandardRuleCount {
  /**
   * <p>规范ID</p>
   */
  ID?: number
  /**
   * <p>规范名称</p>
   */
  Name?: string
  /**
   * <p>关联检查项数量</p>
   */
  Count?: number
}

/**
 * ModifyWebhookPolicy返回参数结构体
 */
export interface ModifyWebhookPolicyResponse {
  /**
   * <p>新增或被修改的策略 ID</p>
   */
  ID?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
 * ModifyCosAuditObjectIdentifyStatus返回参数结构体
 */
export interface ModifyCosAuditObjectIdentifyStatusResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * VPR评级解释卡片
 */
export interface VPRExplainInfo {
  /**
   * <p>漏洞情报</p>
   */
  VulIntel?: Array<VPRExplainDimension>
  /**
   * <p>资产上下文</p>
   */
  AssetContext?: Array<VPRExplainDimension>
}

/**
 * DescribeVulItemList返回参数结构体
 */
export interface DescribeVulItemListResponse {
  /**
   * <p>漏洞条目列表</p>
   */
  List?: Array<VulDetailInfo>
  /**
   * <p>凭据总数</p>
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 集群自定义参数
 */
export interface ClusterCustomParameters {
  /**
   * 占位符名称
入参限制：长度 1-256
适用分支：腾讯云分支（IsCloud=true）
   */
  Name?: string
  /**
   * 一个或多个取值（多个取值以逗号拼接替换占位符）
入参限制：每个元素长度 1-256
适用分支：腾讯云分支（IsCloud=true）
   */
  Values?: Array<string>
  /**
   * 是否精确匹配
默认值：false
   */
  ExactMatch?: boolean
}

/**
 * DeleteWebhookPolicies请求参数结构体
 */
export interface DeleteWebhookPoliciesRequest {
  /**
   * 策略 ID 列表
入参限制：单次最多 100 个
   */
  IDList: Array<number | bigint>
}

/**
 * VPR解释卡片中的单个标签项
 */
export interface VPRExplainDimensionItem {
  /**
   * <p>标签</p>
   */
  Key?: string
  /**
   * <p>标签名称</p>
   */
  Name?: string
  /**
   * <p>标签描述</p>
   */
  Remark?: string
}

/**
 * 云资源配置检测全部检查项统计
 */
export interface ComplianceCheckItemsOverview {
  /**
   * <p>检查项数量</p>
   */
  TotalCount?: number
  /**
   * <p>检查项通过率</p>
   */
  PassRate?: number
  /**
   * <p>检查类型和检查项分布</p>
   */
  CheckTypes?: Array<ComplianceCheckTypeItem>
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
 * DescribeCosActionList请求参数结构体
 */
export interface DescribeCosActionListRequest {
  /**
   * 过滤器
   */
  Filter?: Filter
}

/**
 * DescribeCustomRiskRuleDetail请求参数结构体
 */
export interface DescribeCustomRiskRuleDetailRequest {
  /**
   * <p>集团账号的成员id</p>
   */
  MemberId?: Array<string>
  /**
   * 规则ID
   */
  RuleID?: string
}

/**
 * ModifyBaselinePolicyEnable请求参数结构体
 */
export interface ModifyBaselinePolicyEnableRequest {
  /**
   * <p>待修改的基线策略 ID 列表，不可为空且元素不可为 0。</p>
   */
  PolicyIDList: Array<number | bigint>
  /**
   * <p>基线策略类型。取值：</p><ul><li>SYSTEM：系统策略（CSIP 内置）</li><li>SELF：用户自定义策略</li></ul>
   */
  PolicyType: string
  /**
   * <p>目标启用状态。0 停用，1 启用。</p>
   */
  Enable: number
  /**
   * <p>集团账号的成员id</p>
   */
  MemberId?: Array<string>
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
 * DescribeBaselineOverview请求参数结构体
 */
export interface DescribeBaselineOverviewRequest {
  /**
   * <p>集团账号的成员id</p>
   */
  MemberId?: Array<string>
}

/**
 * dspm分类分级数据项列表项
 */
export interface DspmIdentifyRuleItem {
  /**
   * <p>数据项id</p>
   */
  Id?: number
  /**
   * <p>数据项名称</p>
   */
  Name?: string
  /**
   * <p>数据项描述</p>
   */
  Description?: string
  /**
   * <p>数据项是否启用</p><p>枚举值：</p><ul><li>0： 否</li><li>1： 是</li></ul>
   */
  Status?: number
  /**
   * <p>数据项类型</p><p>枚举值：</p><ul><li>0： 内置</li><li>1： 自定义</li></ul>
   */
  Type?: number
  /**
   * <p>更新时间</p>
   */
  UpdateTime?: string
  /**
   * <p>结构化规则配置状态</p>
   */
  StructuredStatus?: boolean
  /**
   * <p>非结构化规则配置状态</p>
   */
  UnStructuredStatus?: boolean
  /**
   * <p>关联的识别模板信息</p>
   */
  ComplianceRelations?: Array<DspmIdentifyRefComplianceInfo>
}

/**
 * DescribeSCFAliasList返回参数结构体
 */
export interface DescribeSCFAliasListResponse {
  /**
   * SCF 函数别名列表
   */
  List?: Array<SCFAliasInfo>
  /**
   * 别名总数
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeCWPExposures返回参数结构体
 */
export interface DescribeCWPExposuresResponse {
  /**
   * <p>云边界分析资产数量</p>
   */
  TotalCount?: number
  /**
   * <p>云边界分析资产列表</p>
   */
  ExposeList?: Array<ExposesItem>
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
 * CreateVulFixRetryTask请求参数结构体
 */
export interface CreateVulFixRetryTaskRequest {
  /**
   * <p>需要重试的修复任务ID</p>
   */
  TaskId: number
  /**
   * <p>指定需要重试的主机实例ID列表，不传则对所有失败主机进行重试</p>
   */
  InstanceIds?: Array<string>
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
 * ModifyCSIPLicenseBinds请求参数结构体
 */
export interface ModifyCSIPLicenseBindsRequest {
  /**
   * <p>资源ID（指定绑定到哪个订单）</p>
   */
  ResourceId: string
  /**
   * <p>待绑定的实例ID列表（IsAll=true时可不传）</p>
   */
  InstanceIDs?: Array<string>
  /**
   * <p>是否绑定全部未绑定机器（true时自动算差集）</p>
   */
  IsAll?: boolean
  /**
   * <p>授权版本。枚举值：ENTERPRISE_HP(旗舰版) / ADVANCED_HP(专业版) / RASP(RASP)。推荐使用此参数，与InquireKey二选一。</p>
   */
  LicenseType?: string
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
 * ModifyDspmIdentifyLevelItem请求参数结构体
 */
export interface ModifyDspmIdentifyLevelItemRequest {
  /**
   * <p>级别组id</p>
   */
  Id: number
  /**
   * <p>级别组名称</p>
   */
  Name?: string
  /**
   * <p>集团账号的成员id</p>
   */
  MemberId?: Array<string>
  /**
   * <p>敏感程度分</p><p>取值范围：[1, 10]</p><p>单位：敏感程度</p>
   */
  LevelScore?: number
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
 * 安全中心标签
 */
export interface CSIPTag {
  /**
   * <p>标签颜色</p>
   */
  TagColor?: string
  /**
   * <p>标签ID</p>
   */
  TagID?: number
  /**
   * <p>标签键（根据语言环境返回中文或英文）</p>
   */
  TagKey?: string
  /**
   * <p>标签值（根据语言环境返回中文或英文）</p>
   */
  TagValue?: string
}

/**
 * DescribeCloudAssets请求参数结构体
 */
export interface DescribeCloudAssetsRequest {
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
   * 是否查询主机资产
   */
  IsCloudHost?: boolean
}

/**
 * DescribeCWPOrderList请求参数结构体
 */
export interface DescribeCWPOrderListRequest {
  /**
   * <p>多个条件筛选时取交集</p><li>ProductCode 产品编码,p_开头</li><li>SubProductCode 子产品编码,sp_开头</li><li>InquireKey  计费项,sv_开头</li><li>Status 资源状态 1正常 2隔离 3销毁</li><li>PayMode 付费模式 0 按量计费 , 1 包年包月</li><li>ResourceId 资源ID</li><li>RenewFlag 自动续费标签 0 默认不需要(大客户存在自动续费的能力) 1 自动续费 2 手动设置不自动续费</li><li>DealNames 子订单号</li>
   */
  Filters?: Array<Filters>
  /**
   * <p>偏移量,默认0</p>
   */
  Offset?: number
  /**
   * <p>限制条数,默认10 ,最大100</p>
   */
  Limit?: number
}

/**
 * DescribeVulComponentRelateHost返回参数结构体
 */
export interface DescribeVulComponentRelateHostResponse {
  /**
   * <p>受该组件影响的主机列表</p>
   */
  List?: Array<HostVulComponent>
  /**
   * <p>凭据总数</p>
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * EDR命令行规则单规则
 */
export interface RuleContentProcessInfo {
  /**
   * <p>进程文件路径</p>
   */
  Exe: string
  /**
   * <p>进程命令行</p>
   */
  CmdLine: string
}

/**
 * DeleteDspmIdentifyLevelGroup返回参数结构体
 */
export interface DeleteDspmIdentifyLevelGroupResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * AccessAIAnalysisSMTP请求参数结构体
 */
export interface AccessAIAnalysisSMTPRequest {
  /**
   * <p>邮箱账号</p>
   */
  AccountName?: string
  /**
   * <p>邮箱类型</p><p>枚举值：</p><ul><li>1： QQ邮箱</li><li>2： GMail</li><li>3： OutLook</li></ul>
   */
  Type?: number
  /**
   * <p>邮箱授权密码</p>
   */
  Password?: string
}

/**
 * SCF 函数别名精简信息
 */
export interface SCFAliasInfo {
  /**
   * 别名名称
   */
  Name?: string
  /**
   * 别名指向的主版本号
   */
  FunctionVersion?: string
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
 * DescribeAssetRiskDetail请求参数结构体
 */
export interface DescribeAssetRiskDetailRequest {
  /**
   * 资产唯一标识
   */
  AssetRIDs: Array<string>
  /**
   * <p>集团账号的成员id</p>
   */
  MemberId?: Array<string>
}

/**
 * ModifyCSIPLicenseBinds返回参数结构体
 */
export interface ModifyCSIPLicenseBindsResponse {
  /**
   * <p>异步任务ID，用于调用DescribeLicenseBindSchedule轮询进度</p>
   */
  TaskId?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 用户行为概览
 */
export interface BehaviorSummary {
  /**
   * 具体行为数据，用于渲染曲线图
注意：此字段可能返回 null，表示取不到有效值。
   */
  BehaviorInfo?: Array<BehaviorInfo>
  /**
   * 异常行为个数
注意：此字段可能返回 null，表示取不到有效值。
   */
  AbnormalCount?: number
  /**
   * 是否接入
注意：此字段可能返回 null，表示取不到有效值。
   */
  IsAccess?: boolean
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
 * DescribeDspmRiskStrategyGroup请求参数结构体
 */
export interface DescribeDspmRiskStrategyGroupRequest {
  /**
   * <p>集团账号的成员id</p>
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
 * CreateClusterNamespaceListExportJob请求参数结构体
 */
export interface CreateClusterNamespaceListExportJobRequest {
  /**
   * <p>集群CA证书MD5</p>
   */
  ClusterCaMD5: string
  /**
   * <p>集团账号的成员id</p>
   */
  MemberId?: Array<string>
  /**
   * <p>通用过滤条件列表。支持的过滤字段：<br>Name：命名空间名称，模糊匹配。<br>Label：标签，模糊匹配（对标签的 key 或 value 做匹配，任一命中即匹配）。</p>
   */
  Filter?: Filter
  /**
   * <p>导出字段列表（不传则导出全部字段）<br>枚举值：<br>Name：命名空间名称<br>Labels：标签（格式：key1=value1;key2=value2）<br>CreateTime：创建时间</p>
   */
  ExportFields?: Array<string>
}

/**
 * ModifyNFSScanHost返回参数结构体
 */
export interface ModifyNFSScanHostResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteDspmRestoreLogList请求参数结构体
 */
export interface DeleteDspmRestoreLogListRequest {
  /**
   * <p>日志Id</p>
   */
  Id: number
  /**
   * <p>集团账号的成员id</p>
   */
  MemberId?: Array<string>
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
 * DescribeCWPOrderList返回参数结构体
 */
export interface DescribeCWPOrderListResponse {
  /**
   * <p>订单资源对象列表</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  List?: Array<CWPOrderList>
  /**
   * <p>订单总条数</p>
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeVulRiskRelateHost请求参数结构体
 */
export interface DescribeVulRiskRelateHostRequest {
  /**
   * <p>KB 补丁内部 ID（kb_info.id）</p>
   */
  KBID: number
  /**
   * <p>漏洞 ID（vul_vuls.id）</p>
   */
  VulID: number
  /**
   * <p>集团账号的成员id</p>
   */
  MemberId?: Array<string>
  /**
   * <p>筛选条件数组，多条件之间为 AND 关系<br>支持的 Filter.Name：<br>Keyword：关键字模糊搜索（对主机名/IP/InstanceID 模糊匹配）<br>CloudTag: 云标签<br>Tag: 安全中心标签</p>
   */
  Filters?: Array<Filters>
  /**
   * <p>每页返回数量<br>取值范围：[1, 100]<br>默认值：10</p>
   */
  Limit?: number
  /**
   * <p>分页偏移量<br>取值范围：[0, +∞)<br>默认值：0</p>
   */
  Offset?: number
  /**
   * <p>排序方向<br>枚举值：<br>ASC：升序<br>DESC：降序<br>默认值：DESC</p>
   */
  Order?: string
  /**
   * <p>排序字段<br>枚举值：<br>LatestScanTime：最近扫描时间<br>VPRLevel：VPR 评级<br>RiskStatus：修复状态<br>默认值：LatestScanTime</p>
   */
  By?: string
}

/**
 * DescribePodContainerList返回参数结构体
 */
export interface DescribePodContainerListResponse {
  /**
   * <p>查询结果总数</p>
   */
  TotalCount?: number
  /**
   * <p>结果列表</p>
   */
  List?: Array<ClusterContainerListItem>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeCFGRiskStatistics返回参数结构体
 */
export interface DescribeCFGRiskStatisticsResponse {
  /**
   * 云资源配置风险结果统计
   */
  CFGRiskStatistics?: CFGRiskStatisticsItem
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 用户行为分析 用户概览 求和元素
 */
export interface UebaUserSummaryElement {
  /**
   * 成员id
注意：此字段可能返回 null，表示取不到有效值。
   */
  MemberID?: string
  /**
   * 日志类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  LogType?: string
  /**
   * 用户ID依据字段
注意：此字段可能返回 null，表示取不到有效值。
   */
  UserID?: string
  /**
   * 数量
注意：此字段可能返回 null，表示取不到有效值。
   */
  Count?: number
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
 * DescribeCustomRiskRuleDetail返回参数结构体
 */
export interface DescribeCustomRiskRuleDetailResponse {
  /**
   * 指定规则账号开启详情
   */
  CustomRiskRuleDetailList?: Array<CustomRiskRuleDetailItem>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeAgentConfigSetting请求参数结构体
 */
export interface DescribeAgentConfigSettingRequest {
  /**
   * <p>集团账号的成员id</p>
   */
  MemberId?: Array<string>
}

/**
 * DescribeAssetDetail请求参数结构体
 */
export interface DescribeAssetDetailRequest {
  /**
   * <p>资产ID</p>
   */
  AssetID: string
  /**
   * <p>云厂商</p>
   */
  Provider?: string
  /**
   * <p>资产类型</p>
   */
  AssetType?: string
  /**
   * <p>集团账号的成员id</p>
   */
  MemberId?: Array<string>
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
 * ModifyNetAttackSetting请求参数结构体
 */
export interface ModifyNetAttackSettingRequest {
  /**
   * <p>0 关闭网络攻击检测，1开启网络攻击检测</p>
   */
  NetAttackEnable: number
  /**
   * <p>集团账号的成员id</p>
   */
  MemberId?: Array<string>
  /**
   * <p>0 新增告警事件默认待处理，1新增告警事件默认已处理，3新增告警事件默认忽略</p>
   */
  NetAttackAlarmStatus?: number
  /**
   * <p>新增资产自动包含 0 不包含 1包含</p>
   */
  AutoInclude?: number
  /**
   * <p>主机范围：0-指定 1-全部 2-专业版 3-旗舰版 4-专业+旗舰</p>
   */
  CWPScope?: number
  /**
   * <p>指定主机列表（CWPScope=0时使用）</p>
   */
  InstanceIDsWithAppId?: Array<InstanceIDWithAppIdItem>
  /**
   * <p>排除主机列表</p>
   */
  ExcludeInstanceIDsWithAppId?: Array<InstanceIDWithAppIdItem>
  /**
   * <p>标签ID列表</p>
   */
  TagIDs?: Array<string>
  /**
   * <p>容器范围：0-指定集群 1-全部集群</p>
   */
  TCSSScope?: number
  /**
   * <p>指定集群列表（TCSSScope=0时使用）</p>
   */
  ClusterIDsWithAppId?: Array<ClusterIDWithAppIdItem>
  /**
   * <p>排除集群列表</p>
   */
  ExcludeClusterIDsWithAppId?: Array<ClusterIDWithAppIdItem>
}

/**
 * 登录地信息
 */
export interface Place {
  /**
   * <p>城市 ID。</p>
   */
  CityId: number
  /**
   * <p>省份 ID。</p>
   */
  ProvinceId: number
  /**
   * <p>国家ID，暂只支持境内：1。</p>
   */
  CountryId: number
  /**
   * <p>位置名称</p>
   */
  Location?: string
}

/**
 * ModifyRiskScanCronConfig返回参数结构体
 */
export interface ModifyRiskScanCronConfigResponse {
  /**
   * <p>操作返回</p>
   */
  Message?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
 * DescribePortScanTaskCount返回参数结构体
 */
export interface DescribePortScanTaskCountResponse {
  /**
   * 端口扫描任务次数
   */
  PortScanTaskCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyEDRRuleStatus返回参数结构体
 */
export interface ModifyEDRRuleStatusResponse {
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
   * <p>(已废弃) 阻断开关状态: 0 -- 关闭  1 -- 高级阻断 2 -- 基础阻断(只阻断情报库黑ip)</p>
   */
  Status?: number
  /**
   * <p>是否弹窗提示信息 false: 关闭，true: 开启</p>
   */
  ShowTips?: boolean
  /**
   * <p>是否开启智能过白模式</p>
   */
  OpenSmartMode?: boolean
  /**
   * <p>是否开启情报IP阻断</p>
   */
  BanBlackIp?: boolean
  /**
   * <p>是否开启漏洞IP阻断</p>
   */
  BanVulIp?: boolean
  /**
   * <p>是否开启规则阻断</p>
   */
  BanByRule?: boolean
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDynamicAssets返回参数结构体
 */
export interface DescribeDynamicAssetsResponse {
  /**
   * 资产数量
   */
  TotalCount?: number
  /**
   * 资产集合
   */
  Assets?: Array<string>
  /**
   * 表头
   */
  Header?: Array<AssetHeaderItem>
  /**
   * 地域集合
   */
  RegionList?: Array<AttributeOptionSet>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 漏洞全部信息
 */
export interface VulDetailInfo {
  /**
   * <p>漏洞ID</p>
   */
  ID?: number
  /**
   * <p>漏洞名字</p>
   */
  Name?: string
  /**
   * <p>CveID</p>
   */
  CVEID?: string
  /**
   * 漏洞分类
枚举值：
LINUX：Linux 软件漏洞
WINDOWS：Windows 系统补丁
WEB_CMS：Web-CMS 漏洞
APPLICATION：应用漏洞
EMERGENCY：应急漏洞
   */
  Category?: string
  /**
   * 漏洞披露时间
参数格式：YYYY-MM-DD HH:mm:ss
   */
  PublishTime?: string
  /**
   * <p>检测方式</p><p>枚举值：</p><ul><li>VersionCompare： 版本对比</li><li>POC： POC检测</li></ul>
   */
  CheckMethod?: string
  /**
   * 漏洞防御状态
枚举值：
ENABLED：已开启
NOT_SUPPORTED：不支持
NOT_ENABLED：未开启
   */
  DefendStatus?: string
  /**
   * 是否支持一键修复
枚举值：
true：支持
false：不支持
   */
  SupportFix?: boolean
  /**
   * VPR 评级信息（包含评级结果、说明和分阶段评分）
   */
  VRPRatingInfo?: VPRRatingInfo
  /**
   * CVSS 评分
取值范围：[0.0, 10.0]
   */
  CvssScore?: number
  /**
   * VPR 风险标签列表（如在野利用、有 EXP、有 POC、外网暴露、无需重启等）
   */
  Label?: Array<VPRLabel>
  /**
   * 漏洞备注
   */
  Remark?: string
  /**
   * 漏洞概述说明
   */
  Summary?: string
  /**
   * 已开启漏洞防御的主机数
   */
  DefendHostCount?: number
  /**
   * 未开启漏洞防御的主机数
   */
  NotDefendHostCount?: number
  /**
   * 最近扫描时间
参数格式：YYYY-MM-DD HH:mm:ss
   */
  LatestScanTime?: string
  /**
   * CVSS 危害等级
枚举值：
INVALID：无效
INFO：提示
LOW：低危
MEDIUM：中危
HIGH：高危
CRITICAL：严重
   */
  CVSSLevel?: string
  /**
   * 受影响软件描述列表（每项形如 openssl < 1.1.1k）
   */
  VulAffect?: Array<string>
  /**
   * 是否被 KVE（已知被利用漏洞）库收录
枚举值：
true：已收录
false：未收录
   */
  KVERecord?: boolean
  /**
   * KVE 收录时间
参数格式：YYYY-MM-DD HH:mm:ss
   */
  KVERecordTime?: string
  /**
   * EPSS 评分（漏洞利用概率预测）
取值范围：[0.0, 1.0]
   */
  EPSSScore?: number
  /**
   * 受影响厂商列表
   */
  AffectVendor?: Array<string>
  /**
   * 受影响产品列表
   */
  AffectProduct?: Array<string>
  /**
   * 漏洞利用机制说明
   */
  Mechanism?: string
  /**
   * 漏洞利用前置条件说明
   */
  Precondition?: string
  /**
   * 漏洞最新传播趋势数据列表（按日期）
   */
  LatestTrend?: Array<VulSpreadTrend>
  /**
   * <p>修复方案</p>
   */
  FixSolution?: string
  /**
   * <p>参考链接</p>
   */
  RefLink?: string
  /**
   * <p>漏洞危害描述</p>
   */
  HarmDescription?: string
  /**
   * <p>漏洞影响产品</p>
   */
  AffectVendorProduct?: Array<VulVendorProduct>
}

/**
 * DescribeBaselineCategoryItemList返回参数结构体
 */
export interface DescribeBaselineCategoryItemListResponse {
  /**
   * <p>基线检测项列表。</p>
   */
  ItemList?: Array<BaselineItem>
  /**
   * <p>凭据总数</p>
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 漏洞简要信息
 */
export interface VulBriefInfo {
  /**
   * 漏洞 ID（vul_vuls.id）
   */
  VulID?: number
  /**
   * 漏洞名称
   */
  VulName?: string
  /**
   * CVE 编号
参数格式：形如 CVE-2018-5377
   */
  CVEID?: string
  /**
   * VPR 风险标签列表
   */
  Label?: Array<VPRLabel>
  /**
   * CVSS 评分
取值范围：[0.0, 10.0]
   */
  CvssScore?: number
  /**
   * 威胁等级
枚举值：
INVALID：无效
INFO：提示
LOW：低危
MEDIUM：中危
HIGH：高危
CRITICAL：严重
   */
  Level?: string
  /**
   * 漏洞披露时间
参数格式：YYYY-MM-DD HH:mm:ss
   */
  PublishTime?: string
}

/**
 * ModifyNotifySetting返回参数结构体
 */
export interface ModifyNotifySettingResponse {
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
 * 云安全中心标签
 */
export interface CustomTag {
  /**
   * <p>标签ID</p>
   */
  TagID?: number
  /**
   * <p>标签键</p>
   */
  TagKey?: string
  /**
   * <p>标签值</p>
   */
  TagValue?: string
  /**
   * <p>标签颜色</p>
   */
  TagColor?: string
}

/**
 * 修改主机登录方式失败详情
 */
export interface ModifyLoginTypeFailInfo {
  /**
   * <p>主机名称</p>
   */
  MachineName?: string
  /**
   * <p>主机实例ID</p>
   */
  InstanceId?: string
  /**
   * <p>主机内网IP</p>
   */
  MachineIp?: string
  /**
   * <p>主机公网IP</p>
   */
  MachineWanIp?: string
  /**
   * <p>主机可用区</p>
   */
  Region?: string
  /**
   * <p>主机类型</p>
   */
  MachineType?: string
  /**
   * <p>以下几个固定值需要前端特殊处理，其他失败原因可直接展示：</p><ol><li>UNINSTALLED   -- 未安装</li><li>NEED_UPGRADE -- 需要升级</li><li>NOT_RUNNING -- 已关机</li><li>NO_PASSWORD -- 未开启密码登录，无法开启扫码</li></ol>
   */
  Message?: string
  /**
   * <p>失败原因</p>
   */
  MessageDesc?: string
}

/**
 * DeleteDspmIdentifyLevelGroup请求参数结构体
 */
export interface DeleteDspmIdentifyLevelGroupRequest {
  /**
   * <p>级别组id</p>
   */
  Ids: Array<number | bigint>
  /**
   * <p>集团账号的成员id</p>
   */
  MemberId?: Array<string>
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
 * CreatePublicAssetsExportJob请求参数结构体
 */
export interface CreatePublicAssetsExportJobRequest {
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
 * DescribeAssetInfo请求参数结构体
 */
export interface DescribeAssetInfoRequest {
  /**
   * 资产ID
   */
  AssetID: string
  /**
   * <p>集团账号的成员id</p>
   */
  MemberId?: Array<string>
  /**
   * 云厂商
   */
  Provider?: string
  /**
   * 资产类型
   */
  AssetType?: string
}

/**
 * DescribeVulScanTaskList返回参数结构体
 */
export interface DescribeVulScanTaskListResponse {
  /**
   * <p>任务列表</p>
   */
  List?: Array<VulScanTask>
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
 * DescribeSecurityScoreRule返回参数结构体
 */
export interface DescribeSecurityScoreRuleResponse {
  /**
   * <p>是否为默认规则，用户未自定义时为true</p>
   */
  IsDefault?: boolean
  /**
   * <p>当前生效规则列表</p>
   */
  Rules?: Array<ScoreRuleItem>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 端口探测信息
 */
export interface PortDetectInfo {
  /**
   * 主机地址(ip或者域名)
   */
  Host?: string
  /**
   * 端口
   */
  Port?: number
  /**
   * 协议
   */
  Protocol?: string
  /**
   * 状态
   */
  Status?: string
  /**
   * 最近发现时间
   */
  UpdateTime?: string
}

/**
 * DescribeModifyMachinesLoginTypeTasks请求参数结构体
 */
export interface DescribeModifyMachinesLoginTypeTasksRequest {
  /**
   * <p>集团账号的成员id</p>
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
 * DeleteDspmIdentifyComplianceCategoryRelation请求参数结构体
 */
export interface DeleteDspmIdentifyComplianceCategoryRelationRequest {
  /**
   * <p>识别模板ID</p>
   */
  ComplianceId: number
  /**
   * <p>分类ID</p>
   */
  CategoryId: number
  /**
   * <p>集团账号的成员id</p>
   */
  MemberId?: Array<string>
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
 * ModifyBaselineSyncConf请求参数结构体
 */
export interface ModifyBaselineSyncConfRequest {
  /**
   * <p>待更新的基线同步配置。</p>
   */
  SyncConf: BaselineSyncConf
  /**
   * 集团账号场景下的成员账号 Appid 列表。非集团账号或仅查询当前账号时传空。
   */
  MemberId?: Array<string>
}

/**
 * EDR告警大类对应的告警数量
 */
export interface EdrAlertCategoryCount {
  /**
   * <p>告警大类</p>
   */
  AlertCategory?: string
  /**
   * <p>告警数量</p>
   */
  Count?: number
}

/**
 * DescribeEdrAlertThreatTags返回参数结构体
 */
export interface DescribeEdrAlertThreatTagsResponse {
  /**
   * <p>对应告警和标签信息</p>
   */
  List?: Array<EdrAlertTagItem>
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
 * DescribeEdrLogCollectPaths请求参数结构体
 */
export interface DescribeEdrLogCollectPathsRequest {
  /**
   * <p>集团账号的成员id</p>
   */
  MemberId?: Array<string>
  /**
   * <p>返回数量，默认为10，最大值为100</p>
   */
  Limit?: number
  /**
   * <p>偏移量，默认为0</p>
   */
  Offset?: number
}

/**
 * CreateCFGRiskPDFReportExportJob返回参数结构体
 */
export interface CreateCFGRiskPDFReportExportJobResponse {
  /**
   * <p>导出任务ID</p>
   */
  JobId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeAssetLastSyncTime返回参数结构体
 */
export interface DescribeAssetLastSyncTimeResponse {
  /**
   * 资产最近同步时间
   */
  LastSyncTime?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateAssetViewRisksExportJob返回参数结构体
 */
export interface CreateAssetViewRisksExportJobResponse {
  /**
   * 导出任务ID
   */
  JobId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribePublicCloudAssets请求参数结构体
 */
export interface DescribePublicCloudAssetsRequest {
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
 * 资产搜索视图
 */
export interface AssetViewFilter {
  /**
   * <p>视图ID</p>
   */
  ViewID?: number
  /**
   * <p>视图名称</p>
   */
  ViewName?: string
  /**
   * <p>视图过滤项</p>
   */
  Filters?: Array<Filters>
}

/**
 * DescribeCWPLicenseBindSchedule请求参数结构体
 */
export interface DescribeCWPLicenseBindScheduleRequest {
  /**
   * <p>任务ID</p>
   */
  TaskId: number
  /**
   * <p>限制条数,默认10.</p>
   */
  Limit?: number
  /**
   * <p>偏移量,默认0</p>
   */
  Offset?: number
  /**
   * <p>过滤参数<br>Status 绑定进度状态 0 进行中 1 已完成 2 失败</p>
   */
  Filters?: Array<Filters>
}

/**
 * DescribeCFGRiskReportStatistics返回参数结构体
 */
export interface DescribeCFGRiskReportStatisticsResponse {
  /**
   * <p>规则数量</p>
   */
  TotalRuleCount?: number
  /**
   * <p>资产数量</p>
   */
  TotalAssetCount?: number
  /**
   * <p>风险数量</p>
   */
  TotalRiskCount?: number
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
   * <p>备份日志Id</p>
   */
  Id: number
  /**
   * <p>集团账号的成员id</p>
   */
  MemberId?: Array<string>
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
 * dspm资产数据库信息
 */
export interface DspmAssetDatabaseInfo {
  /**
   * <p>资产实例id</p>
   */
  AssetId?: string
  /**
   * <p>数据库名称</p>
   */
  DbName?: string
  /**
   * <p>总表数</p>
   */
  TableCount?: number
  /**
   * <p>敏感表数</p>
   */
  SensitiveTableCount?: number
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
}

/**
 * DescribeEdrAlertCountForAsset请求参数结构体
 */
export interface DescribeEdrAlertCountForAssetRequest {
  /**
   * <p>集团账号的成员id</p>
   */
  MemberId?: Array<string>
  /**
   * <p>主机instance_id列表，为空时返回MemberId对应appid范围内的汇总统计，非空时按每个instance_id粒度分别返回统计</p>
   */
  InstanceIds?: Array<string>
  /**
   * <p>筛选条件列表，与DescribeEdrAlertList保持一致。支持的Name取值及对应Values枚举：Status - string - 是否必填：否 - 告警状态。Values取值：PENDING（待处理）、WHITELISTED（已加白）、PROCESSED（已处理）、IGNORED（已忽略）Level - string - 是否必填：否 - 告警等级。Values取值：CRITICAL（严重）、HIGH（高危）、MEDIUM（中危）、LOW（低危）、INFO（提示）DetectMode - string - 是否必填：否 - 检测模式。Values取值：PRECISE（精准）、BALANCED（均衡）、DEEP（深度）AlertCategory - string - 是否必填：否 - 告警大类。Values取值：VIRUS_TROJAN（病毒木马）、ABNORMAL_LOGIN（异常登录）、HOST_BEHAVIOR（主机行为）、NETWORK_BEHAVIOR（网络行为）、AI_LINK_ENGINE（AI关联引擎）AlertSubType - string - 是否必填：否 - 告警子类型。Values取值：MALWARE_FILE（恶意文件）、MALWARE_PROCESS（恶意进程）、RISK_LOGIN（异常登录）、BRUTE_FORCE（密码破解）、DNS（恶意请求）、BASH（高危命令）、PRIV_ESCALATION（本地提权）、REVERSE_SHELL（反弹Shell）、NET_ATTACK（网络攻击）、VUL_DEFENCE（漏洞防御）、MEMORY_SHELL_INJECT（内存马注入）、MEMORY_SHELL_SCAN（内存马扫描）、MULTI_BEHAVIOR_ATTACK（多行为攻击）AttackStage - string - 是否必填：否 - ATT&amp;CK攻击阶段。Values取值：TA0001~TA0011、TA0040、TA0042、TA0043，空字符串表示未分类AlertSource - string - 是否必填：否 - 告警来源。Values取值：HOST（主机）StartTime - string - 是否必填：否 - 起始时间，格式YYYY-MM-DD HH:MM:SS，不传默认近180天EndTime - string - 是否必填：否 - 结束时间，格式YYYY-MM-DD HH:MM:SS，不传默认当前时间</p>
   */
  Filters?: Array<EDRFilters>
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
 * DescribeAIAnalysisRobotInfo返回参数结构体
 */
export interface DescribeAIAnalysisRobotInfoResponse {
  /**
   * <p>机器人配置url</p>
   */
  URL?: string
  /**
   * <p>访问token</p>
   */
  AccessToken?: string
  /**
   * <p>aes key</p>
   */
  AesKey?: string
  /**
   * <p>机器人ID</p>
   */
  BotID?: string
  /**
   * <p>二维码图片获取地址</p>
   */
  QrcodeImageContext?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyVulScanPeriodic请求参数结构体
 */
export interface ModifyVulScanPeriodicRequest {
  /**
   * <p>周期扫描开关（0-关闭, 1-开启）</p>
   */
  Status: number
  /**
   * <p>漏洞类型</p><p>枚举值：</p><ul><li>LINUX： Linux软件漏洞</li><li>WINDOWS： Windows系统补丁</li><li>WEB_CMS： Web-CMS漏洞</li><li>APPLICATION： 应用漏洞</li><li>EMERGENCY： 应急漏洞</li></ul>
   */
  VulCategory: Array<string>
  /**
   * <p>漏洞等级</p><p>枚举值：</p><ul><li>LOW： 低危</li><li>MEDIUM： 中危</li><li>HIGH： 高危</li><li>CRITICAL： 严重</li></ul>
   */
  Level: Array<string>
  /**
   * <p>扫描方式（VersionCompare: 版本对比, POC: POC检测, VersionComparePOC: 版本对比+POC检测）</p>
   */
  Method: string
  /**
   * <p>开始时间（09:00:00）</p>
   */
  StartTime: string
  /**
   * <p>结束时间（18:00:00）</p>
   */
  EndTime: string
  /**
   * <p>资产范围（0-全部资产，1-自选资产，2-剔除资产，3-自动资产匹配）</p>
   */
  AssetRange: number
  /**
   * <p>周期扫描类型</p><p>枚举值：</p><ul><li>1： 每天</li><li>2： 每周</li><li>3： 每月</li></ul>
   */
  CycleType: number
  /**
   * <p>扫描超时时长</p><p>单位：秒</p>
   */
  Timeout: number
  /**
   * <p>周期值</p><p>取值范围：[1, 31]</p><p>单位：周几或者每月几号</p>
   */
  CycleValue?: Array<number | bigint>
  /**
   * <p>集团账号的成员id</p>
   */
  MemberId?: Array<string>
  /**
   * <p>资产列表（instance_id列表）</p>
   */
  AssetList?: Array<string>
  /**
   * <p>是否运行被同步配置 0-不允许，1-允许</p>
   */
  AllowSync?: number
  /**
   * <p>管理员账号是否开启了自动同步配置开关 0-关闭，1-开启</p>
   */
  EnableSync?: number
  /**
   * <p>配置同步给哪些账号appid</p>
   */
  SyncTo?: Array<number | bigint>
  /**
   * <p>标签ID</p>
   */
  TagIds?: Array<number | bigint>
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
 * ModifyDspmWhitelistStrategy请求参数结构体
 */
export interface ModifyDspmWhitelistStrategyRequest {
  /**
   * <p>集团账号的成员id</p>
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
 * 容器Web服务信息
 */
export interface ContainerWebServiceItem {
  /**
   * Web服务类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  Type?: string
  /**
   * 服务版本号
注意：此字段可能返回 null，表示取不到有效值。
   */
  Version?: string
  /**
   * 服务启动用户
注意：此字段可能返回 null，表示取不到有效值。
   */
  RunAs?: string
  /**
   * 可执行文件路径
注意：此字段可能返回 null，表示取不到有效值。
   */
  ExePath?: string
  /**
   * 配置文件路径
注意：此字段可能返回 null，表示取不到有效值。
   */
  ConfigPath?: string
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
 * ModifyDspmIdentifyCategory返回参数结构体
 */
export interface ModifyDspmIdentifyCategoryResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateDspmIdentifyLevelGroup返回参数结构体
 */
export interface CreateDspmIdentifyLevelGroupResponse {
  /**
   * <p>分级组ID</p>
   */
  Id?: number
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
 * 容器告警分组统计项（仅返回 TotalCount，不做告警大类拆分）
 */
export interface EdrContainerAlertCountItem {
  /**
   * <p>集群 ID（按集群分组时有值，否则空串）</p>
   */
  ClusterId?: string
  /**
   * <p>容器 ID（按容器分组时有值，否则空串）</p>
   */
  ContainerId?: string
  /**
   * <p>该集群/容器的告警总条数</p>
   */
  TotalCount?: number
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
 * Dspm 风险策略
 */
export interface DspmRiskStrategy {
  /**
   * <p>策略类型</p>
   */
  StrategyType?: string
  /**
   * <p>策略名</p>
   */
  Name?: string
  /**
   * <p>策略类型</p>
   */
  StrategyCategory?: string
  /**
   * <p>是否启用。0-禁用 1-启用</p>
   */
  IsEnabled?: number
  /**
   * <p>风险等级。</p>
   */
  RiskLevel?: string
  /**
   * <p>策略规则</p>
   */
  Rule?: string
  /**
   * <p>备注</p>
   */
  Remark?: string
  /**
   * <p>策略内容</p>
   */
  Description?: string
  /**
   * <p>命中次数</p>
   */
  HitCount?: number
  /**
   * <p>风险类型。risk-风险；alarm-告警。</p>
   */
  RiskType?: string
  /**
   * <p>资产所属账号app id</p>
   */
  AppId?: number
  /**
   * <p>账号昵称</p>
   */
  NickName?: string
  /**
   * <p>资产所属账号uin</p>
   */
  Uin?: string
  /**
   * <p>策略id</p>
   */
  StrategyId?: number
  /**
   * <p>规则来源</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  RuleSource?: string
  /**
   * <p>支持的资产类型</p>
   */
  AssetTypes?: Array<string>
  /**
   * <p>风险描述</p>
   */
  RiskDescription?: string
}

/**
 * DescribeClusterInstallCommand返回参数结构体
 */
export interface DescribeClusterInstallCommandResponse {
  /**
   * <p>接入命令</p>
   */
  Command?: string
  /**
   * <p>接入文件下载地址</p>
   */
  URL?: string
  /**
   * <p>接入文件内容</p>
   */
  FileContent?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeSCFAliasList请求参数结构体
 */
export interface DescribeSCFAliasListRequest {
  /**
   * 云函数所在地域
参数格式：腾讯云标准 Region，如 ap-guangzhou
   */
  SCFRegion: string
  /**
   * 命名空间名称
取值参考：通过 DescribeSCFNamespaceList 接口获取
   */
  Namespace: string
  /**
   * 函数名称
取值参考：通过 DescribeSCFFunctionList 接口获取
   */
  FunctionName: string
  /**
   * 单页条数
取值范围：[1, 100]
默认值：20
   */
  Limit: number
  /**
   * 分页偏移量
取值范围：[0, +∞)
默认值：0
   */
  Offset?: number
}

/**
 * 账号CSPM信息
 */
export interface UserCSPMInfo {
  /**
   * <p>APPID</p>
   */
  AppID?: number
  /**
   * <p>UIN</p>
   */
  Uin?: string
  /**
   * <p>账号昵称</p>
   */
  NickName?: string
  /**
   * <p>CSPM扫描配额</p>
   */
  CSPMNum?: number
  /**
   * <p>已消耗CSPM扫描配额</p>
   */
  UsedCount?: number
  /**
   * <p>赠送CSPM扫描配额</p>
   */
  GrantedCSPMNum?: number
  /**
   * <p>是否被共享，1-被共享，2-未被共享</p>
   */
  IsShared?: number
  /**
   * <p>是否单独购买，1-单独购买，2-未单独购买</p>
   */
  IsSelfBuy?: number
  /**
   * <p>配额来源账号</p>
   */
  ShareFromAppID?: number
  /**
   * <p>角色:member:成员;admin:管理员;delegatedAdmin:委派管理员</p>
   */
  Role?: string
  /**
   * <p>所在部门</p>
   */
  Department?: string
}

/**
 * DescribeAssetTags返回参数结构体
 */
export interface DescribeAssetTagsResponse {
  /**
   * 资产数量
   */
  TotalCount?: number
  /**
   * 资产集合
   */
  AssetTags?: Array<AssetTagItem>
  /**
   * 自动打标策略是否开启集合
   */
  AutoTaggingEnabledList?: Array<AttributeOptionSet>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeVulScanTaskDetail返回参数结构体
 */
export interface DescribeVulScanTaskDetailResponse {
  /**
   * <p>任务详情列表</p>
   */
  List?: Array<VulScanTaskDetail>
  /**
   * <p>总数</p>
   */
  Total?: number
  /**
   * <p>漏洞数量</p>
   */
  Vuls?: number
  /**
   * <p>扫描数量</p>
   */
  Scanned?: number
  /**
   * <p>风险数量</p>
   */
  Risk?: number
  /**
   * <p>失败数量</p>
   */
  Failed?: number
  /**
   * <p>扫描进度（0-100）</p>
   */
  Progress?: number
  /**
   * <p>任务pdf报告地址</p>
   */
  TaskPdf?: string
  /**
   * <p>任务excel报告地址</p>
   */
  TaskExcel?: string
  /**
   * <p>任务开始时间，格式：2006-01-02T15:04:05+08:00</p>
   */
  StartTime?: string
  /**
   * <p>任务结束时间，格式：2006-01-02T15:04:05+08:00</p>
   */
  EndTime?: string
  /**
   * <p>漏洞ID</p>
   */
  VulId?: Array<number | bigint>
  /**
   * <p>KB编号</p>
   */
  KbNo?: Array<string>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
 * 添加登录审计白名单的主机信息实体
 */
export interface HostInfo {
  /**
   * <p>主机Quuid</p>
   */
  Quuid: string
  /**
   * <p>Uuid主机</p>
   */
  Uuid: string
}

/**
 * DescribeCosAuditPayInfo请求参数结构体
 */
export type DescribeCosAuditPayInfoRequest = null

/**
 * ModifyNFSScanConf请求参数结构体
 */
export interface ModifyNFSScanConfRequest {
  /**
   * <p>是否开启NFS扫描 0 否 1 是 9未设置,和0一样是未开启</p>
   */
  Enable: number
  /**
   * <p>开启范围 0 自选主机 1 全部主机</p>
   */
  Scope: number
  /**
   * <p>集团账号的成员id</p>
   */
  MemberId?: Array<string>
  /**
   * <p>记录ID，新增时为0</p>
   */
  Id?: number
  /**
   * <p>正选quuid配置列表</p>
   */
  IncludeQuuid?: Array<string>
  /**
   * <p>反选quuid配置列表</p>
   */
  ExcludeQuuid?: Array<string>
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
 * ModifyMachineRemark返回参数结构体
 */
export interface ModifyMachineRemarkResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateDspmIdentifyComplianceCategoryRelation请求参数结构体
 */
export interface CreateDspmIdentifyComplianceCategoryRelationRequest {
  /**
   * <p>识别模板ID</p>
   */
  ComplianceId: number
  /**
   * <p>分类ID</p>
   */
  CategoryId: number
  /**
   * <p>父分类ID</p>
   */
  ParentCategoryId: number
  /**
   * <p>集团账号的成员id</p>
   */
  MemberId?: Array<string>
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
 * DeleteDspmIdentifyComplianceGroup返回参数结构体
 */
export interface DeleteDspmIdentifyComplianceGroupResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeComplianceRiskList返回参数结构体
 */
export interface DescribeComplianceRiskListResponse {
  /**
   * <p>检查视角下风险数量</p>
   */
  TotalCount?: number
  /**
   * <p>检查视角下风险列表</p>
   */
  CheckViewRiskList?: Array<CheckViewRiskItem>
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
 * ScanEDRTaskAgain返回参数结构体
 */
export interface ScanEDRTaskAgainResponse {
  /**
   * <p>新建任务的TaskId</p>
   */
  NewTaskId?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
 * 资产标签树节点
 */
export interface AssetTagTreeNode {
  /**
   * 标签键
   */
  Key?: string
  /**
   * 标签值
   */
  Value?: string
  /**
   * 子节点
   */
  Children?: Array<AssetTagTreeNode>
  /**
   * 颜色
   */
  Color?: string
}

/**
 * 字段样式配置
 */
export interface FieldStyle {
  /**
   * <p>类型</p>
   */
  Type?: string
  /**
   * <p>是否支持复制</p>
   */
  Copy?: boolean
  /**
   * <p>颜色</p>
   */
  Color?: string
  /**
   * <p>跳转url</p>
   */
  URL?: string
}

/**
 * CreateCloudFunctionExportJob请求参数结构体
 */
export interface CreateCloudFunctionExportJobRequest {
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
 * DescribeAIScheduleStats返回参数结构体
 */
export interface DescribeAIScheduleStatsResponse {
  /**
   * <p>定时任务总数。</p>
   */
  ScheduleCount?: number
  /**
   * <p>当前运行中的任务数量。</p>
   */
  RunningTaskCount?: number
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
 * DeleteEDRRules返回参数结构体
 */
export interface DeleteEDRRulesResponse {
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
 * 资产信息
 */
export interface AssetItem {
  /**
   * <p>租户ID</p>
   */
  AppID?: number
  /**
   * <p>云厂商</p>
   */
  Provider?: string
  /**
   * <p>云厂商名称</p>
   */
  ProviderName?: string
  /**
   * <p>云账号ID</p>
   */
  CloudAccountID?: string
  /**
   * <p>云账号名称</p>
   */
  CloudAccountName?: string
  /**
   * <p>资产ID</p>
   */
  AssetID?: string
  /**
   * <p>资产名称</p>
   */
  AssetName?: string
  /**
   * <p>资产类型</p>
   */
  AssetType?: string
  /**
   * <p>资产类型名称</p>
   */
  AssetTypeName?: string
  /**
   * <p>资产运行状态</p>
   */
  AssetStatus?: string
  /**
   * <p>是否公网暴露</p>
   */
  PublicExpose?: number
  /**
   * <p>资产标签</p>
   */
  Tags?: Array<AssetTag>
  /**
   * <p>公网ip</p>
   */
  PublicIP?: string
  /**
   * <p>内网ip</p>
   */
  PrivateIP?: string
  /**
   * <p>公网域名</p>
   */
  PublicDomain?: string
  /**
   * <p>内网域名</p>
   */
  PrivateDomain?: string
  /**
   * <p>防护状态</p>
   */
  ProtectStatus?: number
  /**
   * <p>风险数量</p>
   */
  RiskCount?: number
  /**
   * <p>告警数量</p>
   */
  AlarmCount?: number
  /**
   * <p>实例创建时间</p>
   */
  CreatedAt?: string
  /**
   * <p>首次同步时间</p>
   */
  FirstSyncTime?: string
  /**
   * <p>更新时间</p>
   */
  UpdateTime?: string
  /**
   * <p>操作系统名称</p>
   */
  OsName?: string
  /**
   * <p>严重风险总数</p>
   */
  CriticalRiskCount?: number
  /**
   * <p>高风险总数</p>
   */
  HighRiskCount?: number
  /**
   * <p>中风险总数</p>
   */
  MediumRiskCount?: number
  /**
   * <p>低风险总数</p>
   */
  LowRiskCount?: number
  /**
   * <p>地域</p>
   */
  Region?: string
  /**
   * <p>地域名称</p>
   */
  RegionName?: string
  /**
   * <p>资产唯一ID</p>
   */
  AssetRID?: string
  /**
   * <p>云安全中心标签</p>
   */
  CustomTags?: Array<CustomTag>
  /**
   * <p>资产类型图标</p>
   */
  AssetTypeIconURL?: string
}

/**
 * 自定义Agent运行策略
 */
export interface CustomAgentRunModePolicy {
  /**
   * <p>运行内存</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Memory?: number
  /**
   * <p>运行cpu</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Cpu?: number
  /**
   * <p>网络抓包上限</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  NetworkPps?: number
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
  /**
   * <p>风险忽略原因</p>
   */
  Reason?: string
}

/**
 * DescribeClbListenerList返回参数结构体
 */
export interface DescribeClbListenerListResponse {
  /**
   * <p>总记录数</p>
   */
  TotalCount?: number
  /**
   * <p>监听器列表</p>
   */
  Listeners?: Array<ClbListenerItem>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyDspmIdentifyLevelGroup请求参数结构体
 */
export interface ModifyDspmIdentifyLevelGroupRequest {
  /**
   * <p>级别组id</p>
   */
  Id: number
  /**
   * <p>级别组名称</p>
   */
  Name: string
  /**
   * <p>集团账号的成员id</p>
   */
  MemberId?: Array<string>
  /**
   * <p>级别组描述</p>
   */
  Description?: string
  /**
   * <p>级别信息</p>
   */
  LevelItems?: Array<DspmIdentifyLevelItem>
}

/**
 * DescribeNatRules请求参数结构体
 */
export interface DescribeNatRulesRequest {
  /**
   * <p>资产ID</p>
   */
  AssetID: string
  /**
   * <p>集团账号的成员id</p>
   */
  MemberId?: Array<string>
}

/**
 * DescribeLighthouseFirewallRules请求参数结构体
 */
export interface DescribeLighthouseFirewallRulesRequest {
  /**
   * <p>资产ID</p>
   */
  AssetID: string
  /**
   * <p>集团账号的成员id</p>
   */
  MemberId?: Array<string>
}

/**
 * SCF 命名空间精简信息
 */
export interface SCFNamespaceInfo {
  /**
   * 命名空间名称
   */
  Name?: string
  /**
   * 命名空间类型
枚举值：
Default：默认命名空间
Custom：自定义命名空间
   */
  Type?: string
}

/**
 * 集群service列表项
 */
export interface ClusterServiceListItem {
  /**
   * <p>appid</p>
   */
  AppID?: number
  /**
   * <p>资产id</p>
   * @deprecated
   */
  AssetId?: string
  /**
   * <p>名称</p>
   */
  Name?: string
  /**
   * <p>selector标签</p>
   */
  SelectorLabel?: Array<AssetTag>
  /**
   * <p>命名空间</p>
   */
  Namespace?: string
  /**
   * <p>创建时间</p>
   */
  CreateTime?: string
  /**
   * <p>service 唯一 ID</p>
   */
  ServiceUniqueID?: string
  /**
   * <p>service 类型</p>
   */
  ServiceType?: string
  /**
   * <p>集群IP</p>
   */
  ClusterIP?: string
  /**
   * <p>外网IP</p>
   */
  ExternalIP?: Array<string>
  /**
   * <p>端口</p>
   */
  Ports?: Array<string>
}

/**
 * ModifyAISchedule请求参数结构体
 */
export interface ModifyAIScheduleRequest {
  /**
   * <p>AI 定时任务 ID。可通过 CreateAISchedule 接口获取。</p>
   */
  ScheduleId?: string
  /**
   * <p>任务名称。最大 128 字符。</p>
   */
  Name?: string
  /**
   * <p>执行提示词。最大 2048 字符。</p>
   */
  Prompts?: string
  /**
   * <p>最大触发次数，0 表示无限制。</p>
   */
  MaxFireCount?: number
  /**
   * <p>生效开始时间，Unix 毫秒时间戳，0 表示立即生效。</p>
   */
  StartTime?: number
  /**
   * <p>生效结束时间，Unix 毫秒时间戳，0 表示永不过期。</p>
   */
  EndTime?: number
  /**
   * <p>触发器列表，当 UpdateTriggers 为 true 时全量替换。</p>
   */
  Triggers?: Array<AiScheduleTriggerInfo>
  /**
   * <p>是否更新触发器列表。取值：true（使用 Triggers 字段全量替换）、false（不更新）。</p>
   */
  UpdateTriggers?: boolean
}

/**
 * 用户配置同步状态
 */
export interface UserConfSyncStatus {
  /**
   * <p>用户AppID</p>
   */
  AppID?: number
  /**
   * <p>是否允许管理员同步</p>
   */
  AllowSync?: boolean
  /**
   * <p>是否在配置中</p>
   */
  InConf?: boolean
  /**
   * <p>是否被其他管理员同步</p>
   */
  ManagedByOther?: boolean
}

/**
 * CreateClusterContainerListExportJob返回参数结构体
 */
export interface CreateClusterContainerListExportJobResponse {
  /**
   * <p>导出任务ID</p>
   */
  JobId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeComplianceRiskList请求参数结构体
 */
export interface DescribeComplianceRiskListRequest {
  /**
   * <p>合规标准ID</p>
   */
  StandardID: number
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
  /**
   * <p>条款ID</p>
   */
  TermID?: number
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
 * StopVulScanTask请求参数结构体
 */
export interface StopVulScanTaskRequest {
  /**
   * <p>任务id</p>
   */
  Id?: number
  /**
   * <p>集团账号的成员id</p>
   */
  MemberId?: Array<string>
  /**
   * <p>停止扫描的资产instance_id</p>
   */
  AssetList?: Array<string>
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
 * 容器安全
描述键值对过滤器，用于条件过滤查询。例如过滤ID、名称、状态等
若存在多个Filter时，Filter间的关系为逻辑与（AND）关系。
若同一个Filter存在多个Values，同一Filter下Values间的关系为逻辑或（OR）关系。

 */
export interface AssetFilters {
  /**
   * <p>过滤键的名称。</p>
   */
  Name: string
  /**
   * <p>一个或者多个过滤值。</p>
   */
  Values: Array<string>
  /**
   * <p>是否模糊查询</p>
   */
  ExactMatch?: boolean
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
 * ModifyEdrAlertIsolation请求参数结构体
 */
export interface ModifyEdrAlertIsolationRequest {
  /**
   * <p>告警定位列表（1-500）</p>
   */
  Targets: Array<EdrAlertTarget>
  /**
   * <p>操作类型：Isolate（隔离）/ RestoreIsolate（恢复隔离）/ KillProcess（进程查杀）枚举值：Isolate： 隔离RestoreIsolate： 恢复隔离KillProcess： 进程查杀</p>
   */
  Status: string
  /**
   * <p>集团账号的成员id</p>
   */
  MemberId?: Array<string>
  /**
   * <p>是否终止关联进程，仅 Status=Isolate 有效，Status=KillProcess 时忽略</p>
   */
  KillProcess?: boolean
}

/**
 * 资产详情字段配置
 */
export interface FieldConfig {
  /**
   * <p>字段显示</p>
   */
  Label?: string
  /**
   * <p>字段值</p>
   */
  Value?: string
  /**
   * <p>字段样式配置</p>
   */
  Style?: FieldStyle
  /**
   * <p>字段内容数量</p>
   */
  ValueCount?: number
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
 * 集群节点列表项
 */
export interface ClusterNodeListItem {
  /**
   * <p>资产 ID</p>
   * @deprecated
   */
  AssetId?: string
  /**
   * <p>appid</p>
   */
  AppID?: number
  /**
   * <p>节点id</p>
   */
  NodeId?: string
  /**
   * <p>节点名称</p>
   */
  NodeName?: string
  /**
   * <p>公网ip</p>
   */
  PublicIP?: string
  /**
   * <p>内网ip</p>
   */
  InternalIP?: string
  /**
   * <p>节点类型</p>
   */
  NodeType?: string
  /**
   * <p>核数</p>
   */
  CoresCount?: number
  /**
   * <p>标签</p>
   */
  Tags?: Array<string>
  /**
   * <p>运行状态</p>
   */
  RunStatus?: string
  /**
   * <p>是否为新资产</p>
   */
  IsNew?: boolean
  /**
   * <p>节点唯一 ID</p>
   */
  UniqueID?: string
  /**
   * <p>客户端状态</p><p>枚举值：</p><ul><li>ONLINE： 在线</li><li>OFFLINE： 离线</li><li>UNINSTALL： 未安装</li></ul>
   */
  ClientStatus?: string
  /**
   * <p>节点实例ID</p>
   */
  InstanceId?: string
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
 * DescribeLoginWhiteHostList返回参数结构体
 */
export interface DescribeLoginWhiteHostListResponse {
  /**
   * <p>总数</p>
   */
  TotalCount?: number
  /**
   * <p>服务器列表</p>
   */
  Hosts?: Array<HostDesc>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeClbTargets返回参数结构体
 */
export interface DescribeClbTargetsResponse {
  /**
   * <p>后端服务列表</p>
   */
  Targets?: Array<ClbTargetItem>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ExportClientSettingHostList请求参数结构体
 */
export interface ExportClientSettingHostListRequest {
  /**
   * <p>导出业务类型 PreventUninstall 防卸载主机列表导出 LoginType 扫码登录主机列表导出 ProcessDaemon 进程守护主机列表导出</p>
   */
  BusiType: string
  /**
   * <p>集团账号的成员id</p>
   */
  MemberId?: Array<string>
  /**
   * <p>过滤参数</p>
   */
  Filters?: Array<EDRFilters>
}

/**
 * CreateBaselineAggregatedItemExportJob请求参数结构体
 */
export interface CreateBaselineAggregatedItemExportJobRequest {
  /**
   * <p>基线策略 ID 列表（可同时传多条做联合统计）。</p>
   */
  PolicyID: Array<number | bigint>
  /**
   * <p>基线系统父分类 ID。</p>
   */
  ParentCategoryID: number
  /**
   * <p>基线子分类 ID。</p>
   */
  CategoryID?: number
  /**
   * <p>导出任务名称。不传时自动生成。</p>
   */
  Name?: string
  /**
   * <p>导出类型，默认 RISK。<br>枚举值：<br>STATISTIC：导出统计结果<br>RISK：导出风险明细</p>
   */
  ExportType?: string
  /**
   * <p>集团账号的成员id</p>
   */
  MemberId?: Array<string>
  /**
   * <p>通用过滤条件。支持的 Name：ResultStatus（通过状态 PASS/NOT_PASS）、Name（检测项名称，模糊搜索）、RiskLevel（风险等级 CRITICAL/HIGH/MEDIUM/LOW）、PolicyName（所属基线/策略名称，模糊搜索）。</p>
   */
  Filters?: Array<Filters>
  /**
   * <p>废弃</p>
   */
  CheckAssetType?: string
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
 * DeleteWebhookPolicies返回参数结构体
 */
export interface DeleteWebhookPoliciesResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * AI 定时任务信息
 */
export interface AiScheduleInfo {
  /**
   * <p>AI 定时任务 ID。</p>
   */
  ScheduleId?: string
  /**
   * <p>任务名称。最大 128 字符。</p>
   */
  Name?: string
  /**
   * <p>执行提示词。最大 2048 字符。</p>
   */
  Prompts?: string
  /**
   * <p>状态。取值：1（已启用）、2（已停用）。</p>
   */
  Status?: number
  /**
   * <p>触发器</p>
   */
  Triggers?: Array<AiScheduleTriggerInfo>
  /**
   * <p>最大触发次数，0 表示无限制。</p>
   */
  MaxFireCount?: number
  /**
   * <p>已触发次数。</p>
   */
  CurrentFireCount?: number
  /**
   * <p>生效开始时间，Unix 毫秒时间戳，0 表示立即生效。</p>
   */
  StartTime?: number
  /**
   * <p>生效结束时间，Unix 毫秒时间戳，0 表示永不过期。</p>
   */
  EndTime?: number
  /**
   * <p>创建时间，Unix 毫秒时间戳。</p>
   */
  CreateTime?: number
  /**
   * <p>更新时间，Unix 毫秒时间戳。</p>
   */
  UpdateTime?: number
  /**
   * <p>身份信息</p>
   */
  Identity?: AIScheduleUserIdentity
}

/**
 * 检测任务信息
 */
export interface TaskInfo {
  /**
   * 检测时间
   */
  ScanTime?: string
  /**
   * 任务ID
   */
  TaskID?: string
  /**
   * 任务状态
   */
  Status?: string
  /**
   * 任务进度
   */
  Progress?: number
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
 * ModifyDspmApplyingIdentifyComplianceGroup请求参数结构体
 */
export interface ModifyDspmApplyingIdentifyComplianceGroupRequest {
  /**
   * <p>识别模板id</p>
   */
  ComplianceId: number
  /**
   * <p>集团账号的成员id</p>
   */
  MemberId?: Array<string>
}

/**
 * DescribeComplianceStandardTermTree返回参数结构体
 */
export interface DescribeComplianceStandardTermTreeResponse {
  /**
   * <p>合规规范ID</p>
   */
  StandardID?: number
  /**
   * <p>规范名称</p>
   */
  Name?: string
  /**
   * <p>条款章节</p>
   */
  Chapters?: Array<ComplianceChapterItem>
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
 * DeleteIaCAccessToken返回参数结构体
 */
export interface DeleteIaCAccessTokenResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 漏洞修复项，指定一个漏洞/KB补丁及其需要修复的目标主机
 */
export interface VulFixItem {
  /**
   * <p>需要修复的主机实例ID列表<br>入参限制：单项最多1000个实例ID</p>
   */
  InstanceIds: Array<string>
  /**
   * <p>漏洞ID，VulId和KBId二选一</p>
   */
  VulId?: number
  /**
   * <p>KB补丁ID，VulId和KBId二选一</p>
   */
  KBId?: number
}

/**
 * ModifyNFSScanConf返回参数结构体
 */
export interface ModifyNFSScanConfResponse {
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
 * 暴露趋势周期统计数量信息
 */
export interface ExposeTrendItem {
  /**
   * 完全开放数量
   */
  OpenCount?: number
  /**
   * 受限访问数量
   */
  AclCount?: number
  /**
   * 无法访问数量
   */
  CloseCount?: number
  /**
   * 日期
   */
  Date?: string
}

/**
 * ModifyAgentRunMode请求参数结构体
 */
export interface ModifyAgentRunModeRequest {
  /**
   * <p>集团账号的成员id</p>
   */
  MemberId?: Array<string>
  /**
   * <p>自定义模式配置</p>
   */
  CustomPolicy?: CustomAgentRunModePolicy
  /**
   * <p>高安全防护模式quuid列表</p>
   */
  AdvanceModeQuuids?: Array<string>
  /**
   * <p>自定义模式quuid列表</p>
   */
  CustomModeQuuids?: Array<string>
  /**
   * <p>日志增强开关,0：关闭，1：打开</p>
   */
  EnhanceLogMode?: number
  /**
   * <p>文件查杀自动poc模式开关，0：关闭，1：打开</p>
   */
  MalwarePocMode?: number
  /**
   * <p>五元组是否上报源端口，0:不上报，1:上报</p>
   */
  ReportSourcePort?: number
  /**
   * <p>日志采集设置，采集TCP源端口tcp_src_port，TCP入向日志tcp_ingress，HTTP出向连接日志http_egress，HTTP入向连接日志http_ingress，应用访问日志app_access</p>
   */
  LogCollectSettings?: Array<string>
}

/**
 * ExportEDRRules请求参数结构体
 */
export interface ExportEDRRulesRequest {
  /**
   * <p>集团账号的成员id</p>
   */
  MemberId?: Array<string>
  /**
   * <p>过滤条件：Name、RuleContent、RuleType、ContentType、Action、Level、DetectMode、DetectType、AttackStage、Status</p>
   */
  Filters?: Array<EDRFilter>
  /**
   * <p>排序，大小写无关：ASC 升序，DESC降序</p>
   */
  Order?: string
  /**
   * <p>排序列，ModifyTime</p>
   */
  By?: string
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
 * Dspm 风险分组策略
 */
export interface DspmRiskStrategyGroup {
  /**
   * <p>策略类型</p>
   */
  StrategyType?: string
  /**
   * <p>策略名</p>
   */
  Name?: string
  /**
   * <p>策略类型</p>
   */
  StrategyCategory?: string
  /**
   * <p>是否启用。0-禁用 1-启用</p>
   */
  IsEnabled?: number
  /**
   * <p>命中次数</p>
   */
  HitCount?: number
  /**
   * <p>风险类型。risk-风险；alarm-告警。</p>
   */
  RiskType?: string
  /**
   * <p>策略列表</p>
   */
  StrategyList?: Array<DspmRiskStrategy>
  /**
   * <p>规则来源</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  RuleSource?: string
}

/**
 * 云函数
 */
export interface CloudFunctionItem {
  /**
   * 云函数名称
   */
  InstanceName?: string
  /**
   * 云函数状态
   */
  InstanceStatus?: string
  /**
   * 云函数类型
   */
  FunctionType?: string
  /**
   * 资源标签
   */
  InstanceTag?: string
  /**
   * 命名空间
   */
  Namespace?: string
  /**
   * 地域
   */
  Region?: string
  /**
   * 自定义域名
   */
  Domain?: string
  /**
   * 实例ID
   */
  InstanceID?: string
  /**
   * 实例类型
   */
  InstanceType?: string
  /**
   * 租户ID
   */
  AppID?: number
  /**
   * 云函数状态展示内容
   */
  InstanceStatusDisplay?: string
  /**
   * 核心资产标签
   */
  CoreAssetFlag?: string
  /**
   * 公网访问URL
   */
  PublicURL?: string
  /**
   * 私网访问URL
   */
  PrivateURL?: string
  /**
   * 所属账号
   */
  AccountInfo?: string
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
 * CancelEdrAlertIgnore请求参数结构体
 */
export interface CancelEdrAlertIgnoreRequest {
  /**
   * <p>告警定位列表（支持跨账号），最多500条</p>
   */
  Targets: Array<EdrAlertTargetForIgnore>
  /**
   * <p>集团账号的成员id</p>
   */
  MemberId?: Array<string>
}

/**
 * 机器额外信息
 */
export interface MachineExtraInfo {
  /**
   * 公网IP
注意：此字段可能返回 null，表示取不到有效值。
   */
  WanIP?: string
  /**
   * 内网IP
注意：此字段可能返回 null，表示取不到有效值。
   */
  PrivateIP?: string
  /**
   * 网络类型：1-vpc网络 2-基础网络 3-非腾讯云网络
注意：此字段可能返回 null，表示取不到有效值。
   */
  NetworkType?: number
  /**
   * VPC ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  NetworkName?: string
  /**
   * CVM实例ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  InstanceID?: string
  /**
   * 主机名
注意：此字段可能返回 null，表示取不到有效值。
   */
  HostName?: string
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
 * DescribeSecurityGroupPolicy返回参数结构体
 */
export interface DescribeSecurityGroupPolicyResponse {
  /**
   * 关联安全组ID集合
   */
  SecurityGroupIDList?: Array<string>
  /**
   * 出站规则
   */
  Egress?: Array<SecurityGroupPolicyItem>
  /**
   * 入站规则
   */
  Ingress?: Array<SecurityGroupPolicyItem>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 云边界分析自动打标项
 */
export interface AutoTagRuleItem {
  /**
   * <p>规则ID</p>
   */
  RuleID?: number
  /**
   * <p>规则名称</p>
   */
  RuleName?: string
  /**
   * <p>标签</p>
   */
  Tag?: string
  /**
   * <p>描述</p>
   */
  Description?: string
  /**
   * <p>开关状态</p>
   */
  Enable?: boolean
  /**
   * <p>资产类型</p>
   */
  AssetTypes?: Array<string>
  /**
   * <p>端口</p>
   */
  Ports?: Array<string>
  /**
   * <p>开放状态</p>
   */
  OpenStatuses?: Array<string>
  /**
   * <p>规则优先级</p>
   */
  Priority?: number
  /**
   * <p>创建时间</p>
   */
  CreateTime?: string
  /**
   * <p>更新时间</p>
   */
  UpdateTime?: string
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
 * CreateDspmIdentifyCategory返回参数结构体
 */
export interface CreateDspmIdentifyCategoryResponse {
  /**
   * <p>分类ID</p>
   */
  Id?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
 * DescribeEdrLogCollectPaths返回参数结构体
 */
export interface DescribeEdrLogCollectPathsResponse {
  /**
   * <p>采集路径配置列表</p>
   */
  Paths?: Array<LogAppCollectPath>
  /**
   * <p>总数量</p>
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeMalwareTimingScanSetting请求参数结构体
 */
export interface DescribeMalwareTimingScanSettingRequest {
  /**
   * <p>集团账号的成员id</p>
   */
  MemberId?: Array<string>
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
 * DescribeCWPExposures请求参数结构体
 */
export interface DescribeCWPExposuresRequest {
  /**
   * <p>资产ID</p>
   */
  AssetID: string
  /**
   * <p>资产归属用户AppiD</p>
   */
  AssetAppID: number
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
 * CreateDspmIdentifyComplianceRuleRelation返回参数结构体
 */
export interface CreateDspmIdentifyComplianceRuleRelationResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateCSIPManualMalwareScan返回参数结构体
 */
export interface CreateCSIPManualMalwareScanResponse {
  /**
   * <p>任务ID</p>
   */
  TaskId?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
 * DescribeSCFFunctionVersionList请求参数结构体
 */
export interface DescribeSCFFunctionVersionListRequest {
  /**
   * 云函数所在地域
参数格式：腾讯云标准 Region，如 ap-guangzhou
   */
  SCFRegion: string
  /**
   * 命名空间名称
取值参考：通过 DescribeSCFNamespaceList 接口获取
   */
  Namespace: string
  /**
   * 函数名称
取值参考：通过 DescribeSCFFunctionList 接口获取
   */
  FunctionName: string
  /**
   * 单页条数
取值范围：[1, 100]
默认值：20
   */
  Limit: number
  /**
   * 分页偏移量
取值范围：[0, +∞)
默认值：0
   */
  Offset?: number
}

/**
 * DescribeModifyMachinesLoginTypeTasks返回参数结构体
 */
export interface DescribeModifyMachinesLoginTypeTasksResponse {
  /**
   * <p>任务列表</p>
   */
  List?: Array<ModifyMachinesLoginTypeTask>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 集团管理员侧的基线同步配置。
 */
export interface BaselineSyncConf {
  /**
   * <p>是否开启向成员账号自动同步基线配置。true 开启，false 关闭。</p>
   */
  AutoSync: boolean
  /**
   * <p>自动同步的目标成员账号 Appid 列表，AutoSync=true 时生效。</p>
   */
  TargetAppidList: Array<number | bigint>
  /**
   * <p>用户配置列表</p>
   */
  UserConfList?: Array<UserConfSyncStatus>
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
 * 主机资产扫描详情项
 */
export interface EDRScanTaskHostItem {
  /**
   * <p>主机唯一标识</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Quuid?: string
  /**
   * <p>主机名称</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  HostName?: string
  /**
   * <p>实例ID</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  InstanceId?: string
  /**
   * <p>公网IP</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  PublicIp?: string
  /**
   * <p>内网IP</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  PrivateIp?: string
  /**
   * <p>操作系统</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  OsType?: string
  /**
   * <p>资产所属账号名称（后端富化）</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  AccountName?: string
  /**
   * <p>资产所属账号AppId</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  AppId?: number
  /**
   * <p>云类型</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  CloudType?: number
  /**
   * <p>扫描状态：WAIT/SCANNING/FINISHED/FAILED</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Status?: string
  /**
   * <p>风险数</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  RiskCount?: number
  /**
   * <p>失败原因</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  FailReason?: string
  /**
   * <p>解决方案</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  FixSuggestion?: string
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
 * DescribeAIAnalysisSMTP返回参数结构体
 */
export interface DescribeAIAnalysisSMTPResponse {
  /**
   * <p>是否已接入邮箱</p>
   */
  Exist?: boolean
  /**
   * <p>邮箱账号</p>
   */
  AccountName?: string
  /**
   * <p>邮箱类型</p><p>枚举值：</p><ul><li>1： QQ邮箱</li><li>2： GMail</li><li>3： OutLook</li></ul>
   */
  Type?: number
  /**
   * <p>邮箱授权密码</p>
   */
  Password?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteWebhookReceivers返回参数结构体
 */
export interface DeleteWebhookReceiversResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateDspmIdentifyRule请求参数结构体
 */
export interface CreateDspmIdentifyRuleRequest {
  /**
   * <p>数据项名称</p>
   */
  Name: string
  /**
   * <p>集团账号的成员id</p>
   */
  MemberId?: Array<string>
  /**
   * <p>数据项描述</p>
   */
  Description?: string
  /**
   * <p>数据项启用状态</p><p>枚举值：</p><ul><li>0： 未启用</li><li>1： 启用</li></ul>
   */
  Status?: number
  /**
   * <p>结构化规则</p>
   */
  StructuredRule?: string
  /**
   * <p>非结构化规则</p>
   */
  UnStructuredRule?: string
}

/**
 * DeleteDspmIdentifyCategory返回参数结构体
 */
export interface DeleteDspmIdentifyCategoryResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 异地登录合并后白名单
 */
export interface LoginWhiteCombinedInfo {
  /**
   * <p>白名单地域</p>
   */
  Places?: Array<Place>
  /**
   * <p>白名单用户（多个用户逗号隔开）</p>
   */
  UserName?: string
  /**
   * <p>白名单IP（多个IP逗号隔开）</p>
   */
  SrcIp?: string
  /**
   * <p>地域字符串</p>
   */
  Locale?: string
  /**
   * <p>备注</p>
   */
  Remark?: string
  /**
   * <p>开始时间</p>
   */
  StartTime?: string
  /**
   * <p>结束时间</p>
   */
  EndTime?: string
  /**
   * <p>是否对全局生效, 1：全局有效 0: 对指定主机列表生效&#39;</p>
   */
  IsGlobal?: number
  /**
   * <p>白名单名字：IsLocal=1时固定为：全部服务器；单台机器时为机器内网IP，多台服务器时为服务器数量，如：11台</p>
   */
  Name?: string
  /**
   * <p>仅在单台服务器时，返回服务器名称</p>
   */
  Desc?: string
  /**
   * <p>白名单ID</p>
   */
  Id?: number
  /**
   * <p>创建时间</p>
   */
  CreateTime?: string
  /**
   * <p>最近修改时间</p>
   */
  ModifyTime?: string
  /**
   * <p>服务器Uuid</p>
   */
  Uuid?: string
  /**
   * <p>登录地</p>
   */
  Locations?: string
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
 * CreatePublicAssetsExportJob返回参数结构体
 */
export interface CreatePublicAssetsExportJobResponse {
  /**
   * 导出任务ID
   */
  JobId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteCSIPMalwareScanTask请求参数结构体
 */
export interface DeleteCSIPMalwareScanTaskRequest {
  /**
   * <p>任务ID</p>
   */
  TaskIds: Array<number | bigint>
  /**
   * <p>集团账号的成员id</p>
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
 * ModifyDspmAssetSecurityAnalysisSwitch返回参数结构体
 */
export interface ModifyDspmAssetSecurityAnalysisSwitchResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 检测项维度的聚合结果，承载该检测项在资产上的通过/未通过统计。
 */
export interface BaselineAggregatedItem {
  /**
   * <p>检测项基础信息（含 ID、名称、风险等级、分类等）。</p>
   */
  Item?: BaselineItem
  /**
   * <p>该检测项最近一次扫描中结果为 PASS 的资产数量。</p>
   */
  PassAssetCount?: number
  /**
   * <p>该检测项最近一次扫描中结果为 NOT_PASS 的资产数量。</p>
   */
  NotPassAssetCount?: number
  /**
   * <p>该检测项最近一次扫描中结果为 PASS NOT_PASS 以及 CHECKING 的资产数量。</p>
   */
  TotalAssetCount?: number
  /**
   * <p>该检测项最近一次扫描的资产通过率，单位为百分比（0~100）。</p>
   */
  PassRate?: number
  /**
   * <p>该检测项最近一次完成扫描的时间。</p>
   */
  LatestCheckTime?: string
  /**
   * <p>上次扫描结果状态。取值：</p><ul><li>CHECKING：检测中</li><li>PASS：通过</li><li>NOT_PASS：未通过</li><li>CHECK_FAILED：检测失败</li><li>NOT_INVOLVED：不涉及</li></ul>
   */
  ResultStatus?: string
  /**
   * <p>该聚合结果涉及的租户 Appid 列表。</p>
   */
  Appid?: Array<number | bigint>
  /**
   * <p>该聚合结果涉及的扫描 JobID 列表。</p>
   */
  JobID?: Array<string>
}

/**
 * DescribeEdrAlertList返回参数结构体
 */
export interface DescribeEdrAlertListResponse {
  /**
   * <p>总数</p>
   */
  TotalCount?: number
  /**
   * <p>列表</p>
   */
  List?: Array<EdrAlertItem>
  /**
   * <p>攻击阶段对应的策略数量</p>
   */
  AttackStageCounts?: Array<AttackStageCount>
  /**
   * <p>告警大类统计（随筛选变化，排除 AlertCategory filter）</p>
   */
  AlertCategoryCounts?: Array<EdrAlertCategoryCount>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 最后一天风险摘要项
 */
export interface RiskTrendItem {
  /**
   * 风险项类型：intrusion_alert / vulnerability
   */
  Key?: string
  /**
   * 展示名称，按请求语言返回；漏洞项按是否付费区分文案
   */
  Name?: string
  /**
   * 风险数量
   */
  Count?: number
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
 * CreateAllAssetsExportJob请求参数结构体
 */
export interface CreateAllAssetsExportJobRequest {
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
   * 是否查询主机列表
   */
  IsCloudHost?: boolean
}

/**
 * 日志键值索引详情
 */
export interface LogKeyValueInfo {
  /**
   * <p>键</p>
   */
  Key?: string
  /**
   * <p>值</p>
   */
  Value?: LogValueInfo
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
 * 漏洞修复汇总信息
 */
export interface VulFixSummaryItem {
  /**
   * <p>漏洞ID</p>
   */
  VulId?: number
  /**
   * <p>漏洞名称</p>
   */
  VulName?: string
  /**
   * <p>CVE编号</p>
   */
  CveId?: string
  /**
   * <p>受影响主机数</p>
   */
  AffectedCount?: number
  /**
   * <p>修复后是否需要重启系统</p>
   */
  NeedReboot?: boolean
  /**
   * <p>是否支持一键修复true-支持 false-不支持</p>
   */
  FixSwitch?: boolean
}

/**
 * CreateDspmIdentifyComplianceGroup请求参数结构体
 */
export interface CreateDspmIdentifyComplianceGroupRequest {
  /**
   * <p>级别名称</p>
   */
  Name: string
  /**
   * <p>集团账号的成员id</p>
   */
  MemberId?: Array<string>
  /**
   * <p>描述</p>
   */
  Description?: string
  /**
   * <p>级别组ID</p>
   */
  LevelGroupId?: number
  /**
   * <p>状态</p><p>枚举值：</p><ul><li>0： 不启用</li><li>1： 启用</li></ul>
   */
  Status?: number
}

/**
 * ModifyDspmIdentifyRule返回参数结构体
 */
export interface ModifyDspmIdentifyRuleResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateHostVulExportJob返回参数结构体
 */
export interface CreateHostVulExportJobResponse {
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
 * ModifySecurityScoreRule请求参数结构体
 */
export interface ModifySecurityScoreRuleRequest {
  /**
   * <p>完整规则列表，必须包含所有维度、子项、等级的规则</p>
   */
  Rules: Array<ModifyRuleItem>
  /**
   * <p>集团账号的成员id</p>
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
 * DescribeRiskCenterRiskTrendAnalysis返回参数结构体
 */
export interface DescribeRiskCenterRiskTrendAnalysisResponse {
  /**
   * 趋势列表
   */
  Data?: Array<RiskCenterOverviewTrendAnalysis>
  /**
   * 日期类型列表
   */
  DateTypeLists?: Array<FilterDataObject>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyBaselineUserOtherConf请求参数结构体
 */
export interface ModifyBaselineUserOtherConfRequest {
  /**
   * <p>待更新的用户其他配置；AgentScanTimeout 必须在 [60, 86400] 秒范围内。</p>
   */
  UserConf: BaselineUserOtherConf
  /**
   * 集团账号场景下的成员账号 Appid 列表。非集团账号或仅查询当前账号时传空。
   */
  MemberId?: Array<string>
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
 * 定义进程网络规则内容结构，用于反弹Shell白名单场景，支持进程匹配 + IP/端口过滤
 */
export interface RuleContentProcessNetwork {
  /**
   * <p>当前进程</p>
   */
  Process: RuleContentProcessInfo
  /**
   * <p>目标IP（必填）: 支持单个IP/IP范围/CIDR, 支持IPv4和IPv6</p>
   */
  DstIP: string
  /**
   * <p>父进程</p>
   */
  ParentProcess?: RuleContentProcessInfo
  /**
   * <p>目标端口列表（可选）: 支持1-65535, 为空表示不限端口</p>
   */
  DstPorts?: Array<number | bigint>
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
 * DescribeAIAnalysisHistory返回参数结构体
 */
export interface DescribeAIAnalysisHistoryResponse {
  /**
   * <p>会话记录</p>
   */
  SessionList?: Array<AIAnalysisSession>
  /**
   * <p>会话总数</p>
   */
  Total?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyAILinkSetting返回参数结构体
 */
export interface ModifyAILinkSettingResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyEdrAlertPermanentIgnore返回参数结构体
 */
export interface ModifyEdrAlertPermanentIgnoreResponse {
  /**
   * <p>成功忽略的告警数</p>
   */
  IgnoredCount?: number
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
 * DescribeBanStatus请求参数结构体
 */
export interface DescribeBanStatusRequest {
  /**
   * <p>集团账号的成员id</p>
   */
  MemberId?: Array<string>
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
 * DescribeAssetFilterViews请求参数结构体
 */
export interface DescribeAssetFilterViewsRequest {
  /**
   * <p>集团账号的成员id</p>
   */
  MemberId?: Array<string>
}

/**
 * CreateScanStatisticExportJob返回参数结构体
 */
export interface CreateScanStatisticExportJobResponse {
  /**
   * 导出任务ID
   */
  JobId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * AccessAIAnalysisSMTP返回参数结构体
 */
export interface AccessAIAnalysisSMTPResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
 * DescribeBaselinePolicyList请求参数结构体
 */
export interface DescribeBaselinePolicyListRequest {
  /**
   * <p>基线策略类型。取值：</p><ul><li>SYSTEM：系统策略（CSIP 内置）</li><li>SELF：用户自定义策略</li></ul>
   */
  PolicyType: string
  /**
   * <p>集团账号的成员id</p>
   */
  MemberId?: Array<string>
  /**
   * <p>通用过滤条件，支持的过滤字段如下：</p><li>Name - 策略名称（模糊匹配）</li><li>Enable - 是否开启</li><li>CycleScanEnable - 周期扫描是否开启</li>
   */
  Filters?: Array<Filters>
  /**
   * <p>分页查询每页数量，最大值 100；超过时服务端将自动回退为默认值 10。</p>
   */
  Limit?: number
  /**
   * <p>分页查询起始偏移量，从 0 开始。</p>
   */
  Offset?: number
}

/**
 * CreateCFGRisksExportJob返回参数结构体
 */
export interface CreateCFGRisksExportJobResponse {
  /**
   * <p>导出任务ID</p>
   */
  JobId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * AddVulWhitelist返回参数结构体
 */
export interface AddVulWhitelistResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 主机漏洞风险
 */
export interface HostVulRisk {
  /**
   * <p>风险记录 ID（host_vul_risk.id）</p>
   */
  RiskID?: number
  /**
   * <p>受影响主机数</p>
   */
  EffectHostCount?: number
  /**
   * <p>最近扫描时间<br>参数格式：YYYY-MM-DD HH:mm:ss</p>
   */
  LatestScanTime?: string
  /**
   * <p>所属账号列表</p>
   */
  Account?: Array<AccountBriefInfo>
  /**
   * <p>漏洞防御状态<br>枚举值：<br>ENABLED：已开启<br>NOT_SUPPORTED：不支持<br>NOT_ENABLED：未开启</p>
   */
  DefendStatus?: string
  /**
   * <p>修复状态<br>枚举值：<br>PENDING：待修复<br>SCANNING：扫描中<br>FIXED：已修复<br>IGNORED：已加白<br>FIXING：修复中<br>FIX_FAILED：修复失败<br>NOTSCAN：未扫描<br>WITHOUT_RISK：无风险<br>NEED_REBOOT：修复待重启</p>
   */
  RiskStatus?: string
  /**
   * <p>漏洞详细信息</p>
   */
  VulDetail?: VulDetailInfo
}

/**
 * DescribeCustomRiskRules返回参数结构体
 */
export interface DescribeCustomRiskRulesResponse {
  /**
   * <p>风险规则数量</p>
   */
  TotalCount?: number
  /**
   * <p>风险规则列表</p>
   */
  RiskRuleList?: Array<CustomRiskRuleItem>
  /**
   * <p>云厂商选项</p>
   */
  ProviderList?: Array<AttributeOptionSet>
  /**
   * <p>资产类型选项</p>
   */
  AssetTypeList?: Array<AttributeOptionSet>
  /**
   * <p>安全条款规范</p>
   */
  StandardNameList?: Array<StandardItem>
  /**
   * <p>风险等级</p>
   */
  RuleSeverityList?: Array<RuleStatisticsItem>
  /**
   * <p>检查类型</p>
   */
  CheckTypeList?: Array<RuleStatisticsItem>
  /**
   * <p>安全分类</p>
   */
  ClassifyList?: Array<RuleStatisticsItem>
  /**
   * <p>安全规范</p>
   */
  StandardList?: Array<RuleStatisticsItem>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
 * DescribeBaselineSystemCategoryList请求参数结构体
 */
export type DescribeBaselineSystemCategoryListRequest = null

/**
 * DescribeVulFixTaskDetail请求参数结构体
 */
export interface DescribeVulFixTaskDetailRequest {
  /**
   * <p>修复任务ID</p>
   */
  TaskId: number
  /**
   * <p>分页偏移量<br>取值范围：[0, +∞)<br>默认值：0</p>
   */
  Offset?: number
  /**
   * <p>每页返回数量<br>取值范围：[1, 100]<br>默认值：10</p>
   */
  Limit?: number
  /**
   * <p>过滤条件<br>支持的Filter.Name：<br>InstanceId - 精确匹配，按主机实例ID筛选<br>VulId - 精确匹配，按漏洞ID筛选，过滤出某个漏洞下的主机<br>KBId - 精确匹配，按KB补丁ID筛选，过滤出某个KB补丁下的主机<br>Status - 精确匹配，按执行状态筛选：0-初始状态 1-已下发 11-客户端已确认 2-修复完成 3-客户端离线 4-超时 5-失败 6-不支持 9-等待快照创建完成中 10-快照创建失败<br>FixStatus - 精确匹配，按修复结果筛选：0-初始状态 1-修复成功 2-修复失败<br>SnapshotStatus - 精确匹配，按快照状态筛选：-1-无需创建快照 0-未开始 1-进行中 2-已完成 3-创建失败</p>
   */
  Filters?: Array<Filters>
  /**
   * <p>排序字段<br>枚举值：<br>StartTime：按修复启动时间排序<br>EndTime：按修复结束时间排序</p>
   */
  Order?: string
  /**
   * <p>排序方式<br>枚举值：<br>asc：升序<br>desc：降序<br>默认值：desc</p>
   */
  By?: string
  /**
   * 集团账号的成员id
   */
  MemberId?: Array<string>
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
 * DescribeEdrAlertCountForContainer请求参数结构体
 */
export interface DescribeEdrAlertCountForContainerRequest {
  /**
   * <p>集团账号的成员id</p>
   */
  MemberId?: Array<string>
  /**
   * <p>集群 ID 列表（≤500）；非空且 ContainerIds 为空时按集群分组统计</p>
   */
  ClusterIds?: Array<string>
  /**
   * <p>容器 ID 列表（≤500）；非空时按容器分组统计（优先级高于 ClusterIds）</p>
   */
  ContainerIds?: Array<string>
  /**
   * <li>PolicyType - int - 是否必填：否 - 策略类型</li><li>PolicyName - string - 是否必填：否 - 策略名称</li><li>Domain - string - 是否必填：否 - 域名(先对域名做urlencode,再base64)</li><li>PolicyAction- int - 是否必填：否 - 策略动作</li><li>IsEnabled - int - 是否必填：否 - 是否生效</li><li>ContainerId - string - 是否必填：否 - 容器ID（精确/IN，容器维度筛选）</li><li>ClusterId - string - 是否必填：否 - 集群ID（精确/IN，容器维度筛选）</li><li>ClusterName - string - 是否必填：否 - 集群名称（前缀模糊）</li><li>ContainerName - string - 是否必填：否 - 容器名称（前缀模糊）</li><li>AlertSource - string - 是否必填：否 - 告警来源：HOST-主机告警 / CONTAINER-容器告警，不传返回全部</li>
   */
  Filters?: Array<EDRFilter>
}

/**
 * CreateDynamicAssetsExportJob请求参数结构体
 */
export interface CreateDynamicAssetsExportJobRequest {
  /**
   * 云厂商
   */
  Provider: string
  /**
   * 资产类型
   */
  AssetType: string
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
 * dspm数据识别分类列表项
 */
export interface DspmIdentifyCategoryItem {
  /**
   * <p>分类ID</p>
   */
  Id?: number
  /**
   * <p>分类名称</p>
   */
  Name?: string
  /**
   * <p>类型</p><p>枚举值：</p><ul><li>0： 内置</li><li>1： 自定义</li></ul>
   */
  Type?: number
  /**
   * <p>更新时间</p>
   */
  UpdateTime?: string
  /**
   * <p>关联的识别模板信息</p>
   */
  ComplianceRelations?: Array<DspmIdentifyRefComplianceInfo>
}

/**
 * 操作系统信息
 */
export interface OsName {
  /**
   * <p>操作系统类型ID</p>
   */
  MachineOSType?: number
  /**
   * <p>操作系统名称</p>
   */
  Name?: string
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
 * DescribeLoginTypeGlobalConf返回参数结构体
 */
export interface DescribeLoginTypeGlobalConfResponse {
  /**
   * <p>是否开启防卸载 0 否 1 是 9 未设置,和0一样是未开启</p>
   */
  Enable?: number
  /**
   * <p>开启范围 0 自选主机 1 全部主机</p>
   */
  Scope?: number
  /**
   * <p>正选主机配置数</p>
   */
  IncludeHostCount?: number
  /**
   * <p>反选主机配置数</p>
   */
  ExcludeHostCount?: number
  /**
   * <p>正选quuid配置列表</p>
   */
  IncludeQuuid?: Array<string>
  /**
   * <p>反选quuid配置列表</p>
   */
  ExcludeQuuid?: Array<string>
  /**
   * <p>已开启机器数</p>
   */
  EnableCount?: number
  /**
   * <p>未启机器数</p>
   */
  DisableCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
 * CreateExposuresExportJob返回参数结构体
 */
export interface CreateExposuresExportJobResponse {
  /**
   * 导出任务ID
   */
  JobId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeExportJobManageList返回参数结构体
 */
export interface DescribeExportJobManageListResponse {
  /**
   * 导出任务数量
   */
  TotalCount?: number
  /**
   * 导出任务列表
   */
  List?: Array<ExportJobItem>
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
 * DeleteVulWhitelist请求参数结构体
 */
export interface DeleteVulWhitelistRequest {
  /**
   * <p>id列表</p>
   */
  Id?: Array<number | bigint>
  /**
   * <p>集团账号的成员id</p>
   */
  MemberId?: Array<string>
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
 * DescribeExposureTrend返回参数结构体
 */
export interface DescribeExposureTrendResponse {
  /**
   * 暴露周期趋势数量统计信息
   */
  ExposeTrendList?: Array<ExposeTrendItem>
  /**
   * 暴露周期新增数量统计
   */
  ExposeIncrement?: number
  /**
   * 近1天（24h）完全开放数量
   */
  OpenCount?: number
  /**
   * 近1天（24h）受限访问数量
   */
  AclCount?: number
  /**
   * 近1天（24h）无法访问数量
   */
  CloseCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyCosAuditBucketMonitorStatus请求参数结构体
 */
export interface ModifyCosAuditBucketMonitorStatusRequest {
  /**
   * 存储桶集合
   */
  BucketNameSet: Array<string>
  /**
   * 0 关闭 1 开启
   */
  MonitorStatus: number
}

/**
 * CreateClusterAssetSyncTask请求参数结构体
 */
export interface CreateClusterAssetSyncTaskRequest {
  /**
   * <p>集团账号的成员id</p>
   */
  MemberId?: Array<string>
  /**
   * <p>集群资产id</p>
   * @deprecated
   */
  ClusterAssetIds?: Array<string>
  /**
   * <p>集群ca证书md5值，集群的唯一标识</p>
   */
  ClusterCaMD5List?: Array<string>
}

/**
 * 资产动态表头
 */
export interface AssetHeaderItem {
  /**
   * <p>类型</p>
   */
  ItemType?: string
  /**
   * <p>展示</p>
   */
  Label?: string
  /**
   * <p>是否支持复制</p>
   */
  Copy?: number
  /**
   * <p>值对应字段键</p>
   */
  Values?: Array<string>
  /**
   * <p>跳转URL</p>
   */
  LinkURL?: string
  /**
   * <p>过滤器</p>
   */
  Filters?: Array<AssetFilterConfig>
  /**
   * <p>是否支持排序</p>
   */
  Sort?: number
  /**
   * <p>字段展示样式</p>
   */
  ValueStyle?: string
}

/**
 * DescribeUserCSPMInfoList返回参数结构体
 */
export interface DescribeUserCSPMInfoListResponse {
  /**
   * 账号CSPM列表
   */
  List?: Array<UserCSPMInfo>
  /**
   * 已勾选账号CSPM配额总数
   */
  SelectedCSPMNum?: number
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
 * DescribeBruteAttackRules返回参数结构体
 */
export interface DescribeBruteAttackRulesResponse {
  /**
   * <p>爆破阻断规则列表</p>
   */
  Rules?: Array<BruteAttackRuleList>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeClusterSuperNodeInfo返回参数结构体
 */
export interface DescribeClusterSuperNodeInfoResponse {
  /**
   * <p>所属地域 code（原样，如 ap-chengdu）。</p>
   */
  Region?: string
  /**
   * <p>地域中文名（如 西南地区（成都）；由地域 code 经字典翻译得到）。</p>
   */
  RegionName?: string
  /**
   * <p>地域英文名（如 Southwest China (Chengdu)；由地域 code 经字典翻译得到）。</p>
   */
  RegionNameEn?: string
  /**
   * <p>可用区（中文名，由可用区 code 经字典翻译得到）。</p>
   */
  Zone?: string
  /**
   * <p>资产最后更新时间。<br>参数格式：YYYY-MM-DDTHH:mm:ssZ（ISO8601格式，UTC时区）</p>
   */
  AssetSyncTime?: string
  /**
   * <p>节点来源（所属集群类型）。<br>枚举值：<br>TKE_MANAGED_CLUSTER：腾讯云标准集群<br>TKE_INDEPENDENT_CLUSTER：腾讯云标准集群（Master自维护）<br>TKE_SERVERLESS_CLUSTER：腾讯云Serverless集群<br>TKE_EDGE_CLUSTER：腾讯云边缘集群<br>SELF_BUILT：腾讯云内自建集群<br>SELF_BUILT_OTHER：非腾讯云自建集群（混合云）</p>
   */
  NodeSource?: string
  /**
   * <p>子网名称。</p>
   */
  SubNetName?: string
  /**
   * <p>子网 ID。</p>
   */
  SubNetId?: string
  /**
   * <p>子网网段（CIDR）。</p>
   */
  SubNetCIDR?: string
  /**
   * <p>核数（由 cpu_request 除以 1000 得到）。<br>单位：核</p>
   */
  CoresCount?: number
  /**
   * <p>所属集群名称。</p>
   */
  ClusterName?: string
  /**
   * <p>所属集群 ID。</p>
   */
  ClusterId?: string
  /**
   * <p>所属集群运行状态。<br>枚举值：<br>Running：运行中<br>Exception：异常<br>Unknown：未知<br>Creating：创建中<br>Destroyed：已销毁</p>
   */
  Status?: string
  /**
   * <p>Kubernetes 版本。</p>
   */
  ClusterVersion?: string
  /**
   * <p>Kubelet 版本。</p>
   */
  KubeletVersion?: string
  /**
   * <p>超级节点所属账号APPID</p>
   */
  AppID?: number
  /**
   * <p>超级节点实例ID</p>
   */
  InstanceId?: string
  /**
   * <p>超级节点名称</p>
   */
  NodeName?: string
  /**
   * <p>VPCID</p>
   */
  VpcId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeComplianceOverview返回参数结构体
 */
export interface DescribeComplianceOverviewResponse {
  /**
   * <p>检查类型和检查项分布</p>
   */
  AllCheckItems?: ComplianceCheckItemsOverview
  /**
   * <p>规范和检查项分布</p>
   */
  Standards?: Array<ComplianceStandardOverview>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeClusterServiceList请求参数结构体
 */
export interface DescribeClusterServiceListRequest {
  /**
   * <p>集群资产 id</p>
   * @deprecated
   */
  ClusterAssetId?: string
  /**
   * <p>集团账号的成员id</p>
   */
  MemberId?: Array<string>
  /**
   * <p>通用过滤条件列表。支持的过滤字段：<br>Name：服务名称，模糊匹配。<br>ServiceType：服务类型，精确匹配。取值：ClusterIP、NodePort、LoadBalancer、ExternalName。<br>Namespace：命名空间，精确匹配。<br>SelectorLabel：Selector 标签，模糊匹配。</p>
   */
  Filter?: Filter
  /**
   * <p>集群ca证书md5值，集群的唯一标识</p>
   */
  ClusterCaMD5?: string
  /**
   * <p>Pod唯一标识ID</p>
   */
  PodUniqueID?: string
}

/**
 * DescribePodContainerList请求参数结构体
 */
export interface DescribePodContainerListRequest {
  /**
   * <p>集团账号的成员id</p>
   */
  MemberId?: Array<string>
  /**
   * <p>Pod唯一标识ID</p>
   */
  PodUniqueID?: string
  /**
   * <p>通用过滤条件列表。支持的过滤字段：<br>ContainerId：容器ID，精确匹配。<br>ContainerName：容器名称，模糊匹配。<br>RunStatus：容器运行状态，精确匹配。取值：RUNNING、PAUSED、STOPPED、CREATED、DESTROYED、RESTARTING、REMOVING、DEAD、UNKNOWN。<br>ImageId：镜像ID，精确匹配。<br>ImageName：镜像名称，模糊匹配。<br>IsolateStatus：隔离状态，精确匹配。取值：NORMAL（未隔离）、ISOLATED（已隔离）、ISOLATING（隔离中）、ISOLATE_FAILED（隔离失败）、RESTORING（解除隔离中）、RESTORE_FAILED（解除隔离失败）。<br>NodeUniqueId：所属节点唯一ID，精确匹配（NodeAssetId 为等价别名）。<br>UUID：主机UUID，精确匹配。<br>NodeId：所属节点实例ID，精确匹配。<br>NodeType：节点类型，精确匹配。取值：SUPER、MASTER、WORKER。</p>
   */
  Filter?: Filter
}

/**
 * DescribeSkillScanPayInfo请求参数结构体
 */
export type DescribeSkillScanPayInfoRequest = null

/**
 * DescribeAgentRunPolicy返回参数结构体
 */
export interface DescribeAgentRunPolicyResponse {
  /**
   * <p>基础运行策略</p>
   */
  BasicPolicy?: AgentRunModePolicy
  /**
   * <p>高级运行策略</p>
   */
  AdvancePolicy?: AgentRunModePolicy
  /**
   * <p>自定义运行策略</p>
   */
  CustomPolicy?: AgentRunModePolicy
  /**
   * <p>自定义模式关联的机器instance_id列表</p>
   */
  CustomModeInstanceIDs?: Array<string>
  /**
   * <p>高级模式关联的机器instance_id列表</p>
   */
  AdvanceModeInstanceIDs?: Array<string>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
 * 容器挂载信息
 */
export interface ContainerMountItem {
  /**
   * <p>挂载类型</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Type?: string
  /**
   * <p>宿主机路径</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Source?: string
  /**
   * <p>容器内路径</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Destination?: string
  /**
   * <p>挂载模式</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Mode?: string
  /**
   * <p>是否可读写</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  RW?: boolean
  /**
   * <p>传播方式</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Propagation?: string
  /**
   * <p>挂载名称</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Name?: string
  /**
   * <p>驱动名称</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Driver?: string
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
 * 用户旗舰版信息
 */
export interface UltimateAppItem {
  /**
   * <p>用户AppID</p>
   */
  AppID?: number
  /**
   * <p>是否旗舰版</p>
   */
  IsUltimateVersion?: boolean
}

/**
 * CreateVulFixRetryTask返回参数结构体
 */
export interface CreateVulFixRetryTaskResponse {
  /**
   * <p>重试生成的新任务ID，用于后续查询任务状态</p>
   */
  TaskId?: number
  /**
   * <p>本次重试的主机数量</p>
   */
  RetryCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * SyncDspmUsers请求参数结构体
 */
export type SyncDspmUsersRequest = null

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
 * ModifyAssetTagsByAssetInfo返回参数结构体
 */
export interface ModifyAssetTagsByAssetInfoResponse {
  /**
   * <p>状态码</p>
   */
  Code?: string
  /**
   * <p>信息</p>
   */
  Message?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
 * 过滤条件
 */
export interface LicenseBindFilter {
  /**
   * 过滤字段名，目前支持 Status
   */
  Name?: string
  /**
   * 过滤值列表
   */
  Values?: Array<string>
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
 * CreateDspmIdentifyComplianceGroupCopy返回参数结构体
 */
export interface CreateDspmIdentifyComplianceGroupCopyResponse {
  /**
   * <p>模板ID</p>
   */
  Id?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeClbListenerRules返回参数结构体
 */
export interface DescribeClbListenerRulesResponse {
  /**
   * <p>总记录数</p>
   */
  TotalCount?: number
  /**
   * <p>七层规则列表</p>
   */
  Rules?: Array<ClbListenerRuleItem>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateDspmIdentifyComplianceGroupCopy请求参数结构体
 */
export interface CreateDspmIdentifyComplianceGroupCopyRequest {
  /**
   * <p>来源模板ID</p>
   */
  FromId: number
  /**
   * <p>集团账号的成员id</p>
   */
  MemberId?: Array<string>
  /**
   * <p>模板名称</p>
   */
  Name?: string
  /**
   * <p>模板描述</p>
   */
  Description?: string
}

/**
 * 融合规则目录项
 */
export interface SkillRuleCatalogItem {
  /**
   * 融合规则 ID
参数格式：形如 9xxxx
   */
  RuleID?: string
  /**
   * 风险类别名称
   */
  RuleName?: string
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
 * 单个资产上单个检测项的风险结果记录。
 */
export interface BaselineItemRiskRecord {
  /**
   * <p>风险记录主键 ID。</p>
   */
  ID?: number
  /**
   * <p>命中风险的主机资产信息，无数据时为 null。</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  HostInfo?: BaselineHostAsset
  /**
   * <p>集群资产信息，无数据时为 null。</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  ClusterInfo?: BaselineClusterAsset
  /**
   * <p>命中资产的资产类型。取值：</p><ul><li>HOST：主机</li><li>CLUSTER：集群</li><li>POD：Pod</li><li>CONTAINER：容器</li><li>IMAGE：镜像</li></ul>
   */
  AssetType?: string
  /**
   * <p>风险检测结果状态。取值：</p><ul><li>CHECKING：检测中</li><li>PASS：通过</li><li>NOT_PASS：未通过</li><li>CHECK_FAILED：检测失败</li><li>NOT_INVOLVED：不涉及</li><li>IGNORED：已忽略</li></ul>
   */
  ResultStatus?: string
  /**
   * <p>最近检查时间。</p>
   */
  LatestCheckTime?: string
  /**
   * <p>基线检测项 ID。</p>
   */
  ItemID?: number
  /**
   * <p>风险事件 ID，用于唯一标识该风险记录。</p>
   */
  RiskID?: string
  /**
   * <p>本次扫描的全局 JobID。</p>
   */
  JobID?: string
}

/**
 * DescribeAssetTagTree请求参数结构体
 */
export interface DescribeAssetTagTreeRequest {
  /**
   * <p>集团账号的成员id</p>
   */
  MemberId?: Array<string>
}

/**
 * CreateVulReScan返回参数结构体
 */
export interface CreateVulReScanResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ScanBaselineRiskList返回参数结构体
 */
export interface ScanBaselineRiskListResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
 * DescribeDspmAssetDatabaseList返回参数结构体
 */
export interface DescribeDspmAssetDatabaseListResponse {
  /**
   * <p>总数</p>
   */
  TotalCount?: number
  /**
   * <p>结果集</p>
   */
  DataSet?: Array<DspmAssetDatabaseInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
 * DescribeAssetTagTree返回参数结构体
 */
export interface DescribeAssetTagTreeResponse {
  /**
   * 总数
   */
  TotalCount?: number
  /**
   *  资产标签树结构数据
   */
  TreeData?: Array<AssetTagTreeNode>
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
 * ModifyExposureTag返回参数结构体
 */
export interface ModifyExposureTagResponse {
  /**
   * 更新标签操作返回信息
   */
  Message?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
   * <p>凭据 Skill 安装状态</p>
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
 * OperateRisk请求参数结构体
 */
export interface OperateRiskRequest {
  /**
   * <p>风险规则ID</p>
   */
  RiskRuleId: string
  /**
   * <p>风险ID集合</p>
   */
  RiskIdList: Array<number | bigint>
  /**
   * <p>操作类型</p>
   */
  OperationType: string
  /**
   * <p>集团账号的成员id</p>
   */
  MemberId?: Array<string>
  /**
   * <p>风险忽略原因</p>
   */
  Reason?: string
}

/**
 * DescribeDspmRiskStrategy请求参数结构体
 */
export interface DescribeDspmRiskStrategyRequest {
  /**
   * <p>集团账号的成员id</p>
   */
  MemberId?: Array<string>
  /**
   * 过滤器
   */
  Filter?: Filter
}

/**
 * UninstallClusterAgent请求参数结构体
 */
export interface UninstallClusterAgentRequest {
  /**
   * <p>集群CA证书MD5列表（单/批量统一）<br>用途：指定需要卸载容器安全Agent的集群<br>取值参考：通过 DescribeClusterListV2 接口返回项中的 ClusterCaMD5 字段获取<br>说明：capi 层不对该字段做存在性/类型校验，按 cluster_ca_md5 透传到接入侧 ClusterUninstall RPC</p>
   */
  ClusterCaMD5List: Array<string>
  /**
   * <p>集团账号的成员id</p>
   */
  MemberId?: Array<string>
}

/**
 * CreateAISchedule返回参数结构体
 */
export interface CreateAIScheduleResponse {
  /**
   * <p>AI 定时任务 ID。</p>
   */
  ScheduleId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateVulScanManual返回参数结构体
 */
export interface CreateVulScanManualResponse {
  /**
   * <p>任务id</p>
   */
  TaskId?: number
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
 * DescribeUebaUserSummary返回参数结构体
 */
export interface DescribeUebaUserSummaryResponse {
  /**
   * 用户概览信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  Data?: UebaUserSummary
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
 * DescribeComplianceStatistics请求参数结构体
 */
export interface DescribeComplianceStatisticsRequest {
  /**
   * <p>集团账号的成员id</p>
   */
  MemberId?: Array<string>
}

/**
 * DescribeDspmIdentifyRuleTestResult返回参数结构体
 */
export interface DescribeDspmIdentifyRuleTestResultResponse {
  /**
   * <p>是否匹配成功</p><p>枚举值：</p><ul><li>true： 匹配成功</li><li>false： 匹配失败</li></ul>
   */
  IsMatch?: boolean
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * VRP评级阶段
 */
export interface VPRRatingStage {
  /**
   * 阶段名称（例如：威胁活跃度、可利用性、漏洞严重性等）
   */
  Stage?: string
  /**
   * 该阶段的评级结果
   */
  Result?: string
}

/**
 * 云资产所在地域信息。
 */
export interface RegionInfo {
  /**
   * 地域标志，如 ap-guangzhou、ap-shanghai、ap-beijing。
   */
  Region?: string
  /**
   * 地域中文名，如华南地区（广州）、华东地区（上海）、华北地区（北京）。
   */
  RegionName?: string
  /**
   * 地域数字 ID。
   */
  RegionId?: number
  /**
   * 地域简码，如 gz、sh、bj。
   */
  RegionCode?: string
  /**
   * 地域英文名。
   */
  RegionNameEn?: string
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
 * DeleteVulWhitelist返回参数结构体
 */
export interface DeleteVulWhitelistResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
 * 通知策略完整信息
 */
export interface WebhookPolicy {
  /**
   * <p>策略 ID</p>
   */
  ID?: number
  /**
   * <p>策略名称</p>
   */
  Name?: string
  /**
   * <p>启用状态<br>枚举值：<br>ON：启用<br>OFF：禁用</p>
   */
  Status?: string
  /**
   * <p>通知项列表（模块+子模块+等级+处置状态）</p>
   */
  NotifyItems?: Array<WebhookNotifyItem>
  /**
   * <p>接收的成员账号范围</p>
   */
  MemberId?: Array<string>
  /**
   * <p>通知资产范围</p>
   */
  AssetScope?: WebhookAssetScope
  /**
   * <p>接收格式<br>枚举值：<br>TEXT：文本格式<br>JSON：JSON 格式</p>
   */
  ReceiveFormat?: string
  /**
   * <p>推送语言<br>枚举值：<br>zh：中文<br>en：英文</p>
   */
  MsgLanguage?: string
  /**
   * <p>自定义透传字段列表，关闭时为空数组</p>
   */
  CustomFields?: Array<WebhookCustomField>
  /**
   * <p>接收机器人 ID 列表</p>
   */
  ReceiverIDList?: Array<number | bigint>
  /**
   * <p>接收机器人精简信息（列表行展示用）</p>
   */
  ReceiverList?: Array<WebhookReceiverBrief>
}

/**
 * DescribeCSIPMalwareScanTaskProgress请求参数结构体
 */
export interface DescribeCSIPMalwareScanTaskProgressRequest {
  /**
   * <p>集团账号的成员id</p>
   */
  MemberId?: Array<string>
  /**
   * <p>任务ID</p>
   */
  TaskId?: number
}

/**
 * DescribeBaselinePolicyCategoryList请求参数结构体
 */
export interface DescribeBaselinePolicyCategoryListRequest {
  /**
   * <p>基线策略ID</p>
   */
  PolicyID: number
  /**
   * <p>集团账号的成员id</p>
   */
  MemberId?: Array<string>
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
 * EDR告警定位信息，用于永久忽略/取消忽略
 */
export interface EdrAlertTargetForIgnore {
  /**
   * 告警主键ID
   */
  Id: number
  /**
   * 告警所属账号ID（跨账号，前端必传）
   */
  AppId: number
  /**
   * 告警唯一标识
   */
  AlertId?: string
  /**
   * 主机UUID（可选）
   */
  Quuid?: string
  /**
   * 实例ID（可选，用于白名单删除）
   */
  InstanceId?: string
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
 * 过滤条件。同一 Name 下多个 Values 为或关系；不同 Name 之间为且关系。支持的 Name：Status（执行结果，Values: SUCCESS/FAILED/USER_CANCELED/CHECKING）
 */
export interface Filters {
  /**
   * 过滤条件名称。取值：Status（执行结果，Values: SUCCESS/FAILED/USER_CANCELED/CHECKING）
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
 * DescribeDspmIdentifyCategoryList请求参数结构体
 */
export interface DescribeDspmIdentifyCategoryListRequest {
  /**
   * <p>集团账号的成员id</p>
   */
  MemberId?: Array<string>
  /**
   * <p>过滤条件</p>
   */
  Filter?: Filter
}

/**
 * 云边界规则信息
 */
export interface ExposeRuleItem {
  /**
   * 规则类型
   */
  RuleType?: string
  /**
   * 风险等级
   */
  Severity?: string
  /**
   * 规则名称
   */
  Title?: string
  /**
   * 修复建议
   */
  FixAdvice?: string
}

/**
 * 集群定位信息
 */
export interface ClusterWithAppIdItem {
  /**
   * 集群ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  ClusterID: string
  /**
   * 集群所属AppId
注意：此字段可能返回 null，表示取不到有效值。
   */
  AppId: number
}

/**
 * ModifyPayConfig返回参数结构体
 */
export interface ModifyPayConfigResponse {
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
 * DescribeDspmSupportedAssetType请求参数结构体
 */
export interface DescribeDspmSupportedAssetTypeRequest {
  /**
   * <p>集团账号的成员id</p>
   */
  MemberId?: Array<string>
}

/**
 * DescribeBaselineFixRecordList返回参数结构体
 */
export interface DescribeBaselineFixRecordListResponse {
  /**
   * <p>基线风险修复记录列表。</p>
   */
  List?: Array<BaselineFixRecord>
  /**
   * <p>凭据总数</p>
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 集群容器列表项
 */
export interface ClusterContainerListItem {
  /**
   * <p>appid</p>
   */
  AppID?: number
  /**
   * <p>资产id</p>
   * @deprecated
   */
  AssetId?: string
  /**
   * <p>容器id</p>
   */
  ContainerId?: string
  /**
   * <p>容器名称</p>
   */
  ContainerName?: string
  /**
   * <p>运行状态</p>
   */
  RunStatus?: string
  /**
   * <p>节点id</p>
   */
  NodeId?: string
  /**
   * <p>节点类型</p>
   */
  NodeType?: string
  /**
   * <p>pod唯一id</p>
   */
  PodUid?: string
  /**
   * <p>pod名称</p>
   */
  PodName?: string
  /**
   * <p>镜像id</p>
   */
  ImageId?: string
  /**
   * <p>镜像名称</p>
   */
  ImageName?: string
  /**
   * <p>隔离状态</p>
   */
  IsolateStatus?: string
  /**
   * <p>严重风险数量</p>
   * @deprecated
   */
  RiskEventCriticalCount?: number
  /**
   * <p>高危风险数量</p>
   * @deprecated
   */
  RiskEventHighCount?: number
  /**
   * <p>中危风险数量</p>
   * @deprecated
   */
  RiskEventMiddleCount?: number
  /**
   * <p>低危风险数量</p>
   * @deprecated
   */
  RiskEventLowCount?: number
  /**
   * <p>创建时间</p>
   */
  CreateTime?: string
  /**
   * <p>关联告警数</p>
   */
  AlarmCount?: number
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
 * 可更新补丁主机信息
 */
export interface KBUpdateMachineItem {
  /**
   * <p>KB补丁ID</p>
   */
  KBId?: number
  /**
   * <p>主机实例ID</p>
   */
  InstanceId?: string
  /**
   * <p>主机名称</p>
   */
  MachineName?: string
  /**
   * <p>主机IP</p>
   */
  MachineIp?: string
  /**
   * <p>公网IP</p>
   */
  PublicIp?: string
  /**
   * <p>操作系统名称</p>
   */
  OsName?: string
  /**
   * <p>主机在线状态<br>枚举值：<br>ONLINE：在线<br>OFFLINE：离线</p>
   */
  MachineStatus?: string
  /**
   * <p>是否支持自动更新补丁<br>枚举值：<br>0：不支持<br>1：支持</p>
   */
  SupportAutoFix?: number
  /**
   * <p>当前修复状态<br>枚举值：<br>0：未修复<br>1：修复中<br>2：修复失败<br>3：修复成功<br>4：修复超时</p>
   */
  FixStatus?: number
  /**
   * <p>最近一次修复时间<br>参数格式：YYYY-MM-DDTHH:mm:ssZ（ISO8601格式）</p>
   */
  LatestFixTime?: string
  /**
   * <p>不可修复原因，SupportAutoFix为0时返回</p>
   */
  NotFixableReason?: string
  /**
   * <p>资产标签列表</p>
   */
  TagItems?: Array<MiniTagItem>
  /**
   * <p>所属账号AppId</p>
   */
  AppId?: number
  /**
   * <p>付费版本信息<br>枚举值：<br>BASIC：基础版<br>PRO：专业版<br>ULTIMATE：旗舰版</p>
   */
  PayVersion?: string
}

/**
 * 策略的周期扫描配置（间隔类型 + 间隔取值 + 扫描时段窗口）。
 */
export interface CycleScanConf {
  /**
   * <p>周期扫描开关。0 关闭，1 开启。</p>
   */
  Enable: number
  /**
   * <p>周期扫描的间隔类型。取值：</p><ul><li>DAY：每若干天，IntervalValueList 取间隔天数（如 ["1"] 表示每天）</li><li>WEEK：每周指定星期几，IntervalValueList 取 1~7（周一~周日）</li><li>MONTH：每月指定日期，IntervalValueList 取 1~31</li></ul>
   */
  IntervalType: string
  /**
   * <p>周期取值列表，含义随 IntervalType 变化：</p><ul><li>IntervalType=DAY：每隔多少天，例如 ["1"] 表示每天</li><li>IntervalType=WEEK：每周的星期几，取值 1~7（周一 ~ 周日）</li><li>IntervalType=MONTH：每月的几号，取值 1~31</li></ul>
   */
  IntervalValueList: Array<string>
  /**
   * <p>扫描时段起始时间，格式 HH:mm，例如 02:00。</p>
   */
  ScanStart: string
  /**
   * <p>扫描时段结束时间，格式 HH:mm，例如 06:00。</p>
   */
  ScanEnd: string
}

/**
 * ModifyAISchedule返回参数结构体
 */
export interface ModifyAIScheduleResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribePreventUninstallHost返回参数结构体
 */
export interface DescribePreventUninstallHostResponse {
  /**
   * <p>总数</p>
   */
  Total?: number
  /**
   * <p>主机列表</p>
   */
  List?: Array<ClientSettingHost>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeClusterContainerWebServiceList请求参数结构体
 */
export interface DescribeClusterContainerWebServiceListRequest {
  /**
   * <p>容器ID</p>
   */
  ContainerId: string
  /**
   * <p>集团账号的成员id</p>
   */
  MemberId?: Array<string>
}

/**
 * DescribeAIAnalysisRecommendQuestions请求参数结构体
 */
export interface DescribeAIAnalysisRecommendQuestionsRequest {
  /**
   * <p>问答的SessionID</p>
   */
  SessionID: string
}

/**
 * CheckCWPExposePathPermission请求参数结构体
 */
export interface CheckCWPExposePathPermissionRequest {
  /**
   * <p>集团账号的成员id</p>
   */
  MemberId?: Array<string>
}

/**
 * DescribeDspmIdentifyComplianceGroupDetail返回参数结构体
 */
export interface DescribeDspmIdentifyComplianceGroupDetailResponse {
  /**
   * <p>识别模板ID</p>
   */
  Id?: number
  /**
   * <p>识别模板名称</p>
   */
  Name?: string
  /**
   * <p>描述</p>
   */
  Description?: string
  /**
   * <p>模板类型</p><p>枚举值：</p><ul><li>0： 内置</li><li>1： 自定义</li></ul>
   */
  Type?: number
  /**
   * <p>状态</p><p>枚举值：</p><ul><li>0： 未启用</li><li>1： 启用</li></ul>
   */
  Status?: number
  /**
   * <p>关联级别组ID</p>
   */
  LevelGroupId?: number
  /**
   * <p>无</p>
   */
  Detail?: Array<DspmIdentifyComplianceCategoryRelation>
  /**
   * <p>关联级别组名称</p>
   */
  LevelGroupName?: string
  /**
   * <p>创建时间</p>
   */
  CreateTime?: string
  /**
   * <p>修改时间</p>
   */
  ModifyTime?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateVulFixedExportJob请求参数结构体
 */
export interface CreateVulFixedExportJobRequest {
  /**
   * <p>过滤条件（与 DescribeVulFixedList 一致）<br>支持的Filter.Name：<br>Keyword - 模糊匹配，按关键字搜索（漏洞名称/CVE编号/主机名称/实例ID）<br>VulName - 模糊匹配，按漏洞名称搜索<br>Level - 精确匹配，按漏洞等级筛选：LOW-低危 MEDIUM-中危 HIGH-高危 CRITICAL-严重<br>VprLevel - 精确匹配，按VPR评级筛选：1-Low 2-Medium 3-High 4-Critical<br>VulCategory - 精确匹配，按漏洞类型筛选：LINUX-Linux软件漏洞 WINDOWS-Windows系统补丁漏洞 WEB_CMS-Web-CMS漏洞 APPLICATION-应用漏洞 EMERGENCY-应急漏洞<br>MachineName - 模糊匹配，按主机名称搜索<br>InstanceId - 模糊匹配，按实例ID搜索<br>FixTime - 范围匹配，修复时间范围，传入两个值表示起止时间</p>
   */
  Filters?: Array<Filters>
  /**
   * <p>排序字段<br>枚举值：<br>FixTime：按修复时间排序<br>VulName：按漏洞名称排序</p>
   */
  Order?: string
  /**
   * <p>排序方式<br>枚举值：<br>asc：升序<br>desc：降序<br>默认值：desc</p>
   */
  By?: string
  /**
   * 集团账号的成员id
   */
  MemberId?: Array<string>
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
 * ModifyEdrLogCollectPath返回参数结构体
 */
export interface ModifyEdrLogCollectPathResponse {
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
 * DescribeBaselineUserOtherConf返回参数结构体
 */
export interface DescribeBaselineUserOtherConfResponse {
  /**
   * <p>当前账号的用户级基线配置。</p>
   */
  UserConf?: BaselineUserOtherConf
  /**
   * <p>是否来自同步</p>
   */
  IsSync?: boolean
  /**
   * <p>同步的账号信息</p>
   */
  AdminInfo?: AccountBriefInfo
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
 * 资产树-资产分类节点
 */
export interface CategoryNode {
  /**
   * <p>资产分类名称</p>
   */
  Category?: string
  /**
   * <p>展示顺序</p>
   */
  DisplayOrder?: number
  /**
   * <p>下级资产类型节点</p>
   */
  AssetTypes?: Array<AssetTypeNode>
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
 * DescribeAssetOverview返回参数结构体
 */
export interface DescribeAssetOverviewResponse {
  /**
   * 资产概览统计
   */
  AssetOverview?: AssetStatisticsInfo
  /**
   * 云厂商资产数量
   */
  AssetProviderDistribute?: AssetProviderDistributeInfo
  /**
   * 资产类型以及存在风险的资产类型数量
   */
  AssetTypeOverview?: AssetTypeStatisticsInfo
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
 * DescribeRaspLicenseList请求参数结构体
 */
export interface DescribeRaspLicenseListRequest {
  /**
   * 过滤条件
- AssetType 资产类型(CWP 主机安全资产, TCSS_HOST 容器主机节点,TCSS_EKS 容器超级节点)
- PluginStatus 插件状态(Normal 使用正常,Abnormal 存在异常,Unused 未使用)
- ProtectionSwitch 防护开关(Enable 开启,Disable 未开启)
- ProtectionVersion 防护版本(Rasp 重保授权包,Unauthorized 未授权)
- InstanceID 实例ID
- InstanceName 实例名称
- InstanceIP 实例IP(内网IP/外网IP)
- NodeID 容器节点ID
- NodeName 容器节点名称
- ClusterID 容器集群ID
- ClusterName 容器集群名称
   */
  Filters?: Array<Filters>
  /**
   * 限制条数,默认10
   */
  Limit?: number
  /**
   * 偏移量,默认0
   */
  Offset?: number
  /**
   * 排序方式,ASC 正序,DESC 倒序
   */
  Order?: string
  /**
   * 排序值
- LatestUpdateTime 最近更新时间
   */
  By?: string
}

/**
 * EDR告警定位信息（ID + AlertID + AppID 三元组）
 */
export interface EdrAlertTarget {
  /**
   * <p>告警主键ID</p>
   */
  Id: number
  /**
   * <p>告警所属账号ID（跨账号，前端必传）</p>
   */
  AppId: number
  /**
   * <p>告警唯一标识</p>
   */
  AlertId?: string
  /**
   * <p>主机UUID（可选，由列表带回透传）</p>
   */
  Quuid?: string
  /**
   * <p>实例ID（可选，由列表带回透传，用于安全中心标签富化）</p>
   */
  InstanceId?: string
  /**
   * <p>告警子类型</p>
   */
  AlertSubType?: string
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
 * DescribeHostVulRiskList请求参数结构体
 */
export interface DescribeHostVulRiskListRequest {
  /**
   * <p>集团账号的成员id</p>
   */
  MemberId?: Array<string>
  /**
   * <p>筛选条件数组，多条件之间为 AND 关系<br>支持的 Filter.Name：<br>CVSSLevel：CVSS level过滤<br>Keyword：关键字模糊搜索（多词使用｜分隔，对漏洞名/CVEID 模糊匹配）<br>Category：漏洞分类（LINUX/WEB_CMS/APPLICATION/EMERGENCY）<br>VPRLevel：VPR 评级<br>RiskStatus：修复状态<br>Label：VPR风险标签<br>InstanceID：实例ID<br>CheckMethod：检测方法</p>
   */
  Filters?: Array<Filters>
  /**
   * <p>每页返回数量<br>取值范围：[1, 100]<br>默认值：10</p>
   */
  Limit?: number
  /**
   * <p>分页偏移量<br>取值范围：[0, +∞)<br>默认值：0</p>
   */
  Offset?: number
  /**
   * <p>排序方向<br>枚举值：<br>ASC：升序<br>DESC：降序<br>默认值：DESC</p>
   */
  Order?: string
  /**
   * <p>排序字段<br>枚举值：<br>LatestScanTime：最近扫描时间<br>默认值：LatestScanTime</p>
   */
  By?: string
}

/**
 * DescribeLastScanTaskInfo请求参数结构体
 */
export interface DescribeLastScanTaskInfoRequest {
  /**
   * <p>集团账号的成员id</p>
   */
  MemberId?: Array<string>
  /**
   * <p>任务来源</p>
   */
  TaskSource?: string
}

/**
 * DescribeClusterDetail请求参数结构体
 */
export interface DescribeClusterDetailRequest {
  /**
   * <p>集群资产id</p>
   * @deprecated
   */
  ClusterAssetId?: string
  /**
   * <p>集团账号的成员id</p>
   */
  MemberId?: Array<string>
  /**
   * <p>集群ca证书md5值，集群的唯一标识</p>
   */
  ClusterCaMD5?: string
}

/**
 * 容器端口信息
 */
export interface ContainerPortItem {
  /**
   * 监听进程名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  ProcessName?: string
  /**
   * 容器内监听端口
   */
  ContainerPort?: number
  /**
   * 进程运行用户
注意：此字段可能返回 null，表示取不到有效值。
   */
  RunAs?: string
  /**
   * 容器内进程ID
   */
  ContainerPID?: number
  /**
   * 宿主机内网IP地址
注意：此字段可能返回 null，表示取不到有效值。
   */
  HostInnerIP?: string
  /**
   * 宿主机外网IP地址
注意：此字段可能返回 null，表示取不到有效值。
   */
  HostPublicIP?: string
  /**
   * 宿主机映射端口
   */
  PublicPort?: number
  /**
   * 网络协议类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  ProtocolType?: string
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
 * CreateClusterNodeListExportJob返回参数结构体
 */
export interface CreateClusterNodeListExportJobResponse {
  /**
   * <p>导出任务ID<br>取值参考：前端轮询导出任务状态时使用</p>
   */
  JobId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ScanBaselinePolicyList请求参数结构体
 */
export interface ScanBaselinePolicyListRequest {
  /**
   * <p>基线策略类型。取值：</p><ul><li>SYSTEM：系统策略（CSIP 内置）</li><li>SELF：用户自定义策略</li></ul>
   */
  PolicyType: string
  /**
   * <p>待重新扫描的基线策略 ID 列表，不可为空且元素不可为 0。</p>
   */
  PolicyIDList: Array<number | bigint>
  /**
   * <p>集团账号的成员id</p>
   */
  MemberId?: Array<string>
}

/**
 * CreateDspmAssetIdentifyInfoExportJob请求参数结构体
 */
export interface CreateDspmAssetIdentifyInfoExportJobRequest {
  /**
   * <p>资产实例id</p>
   */
  AssetId: string
  /**
   * <p>集团账号的成员id</p>
   */
  MemberId?: Array<string>
  /**
   * <p>过滤器</p>
   */
  Filter?: Filter
}

/**
 * ModifyCSIPLicenseUnBinds返回参数结构体
 */
export interface ModifyCSIPLicenseUnBindsResponse {
  /**
   * <p>总数</p>
   */
  Total?: number
  /**
   * <p>成功数</p>
   */
  SuccessNum?: number
  /**
   * <p>失败数</p>
   */
  FailedNum?: number
  /**
   * <p>失败明细</p>
   */
  FailedList?: Array<LicenseUnbindFailedItem>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ScanCSIPTaskAgain返回参数结构体
 */
export interface ScanCSIPTaskAgainResponse {
  /**
   * <p>本次实际触发重扫的机器数（= 状态白名单过滤后的候选机器数）单位：个</p>
   */
  SuccessCount?: number
  /**
   * <p>原任务 ID（与入参一致；CWP 原版同样返回原 ID 而非新 ID，重扫为原地复用）</p>
   */
  TaskId?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeVulIgnoreRuleList返回参数结构体
 */
export interface DescribeVulIgnoreRuleListResponse {
  /**
   * <p>白名单列表</p>
   */
  List?: Array<VulWhitelist>
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
 * CreateAISchedule请求参数结构体
 */
export interface CreateAIScheduleRequest {
  /**
   * <p>任务名称。最大 128 字符。</p>
   */
  Name?: string
  /**
   * <p>执行提示词。最大 2048 字符。</p>
   */
  Prompts?: string
  /**
   * <p>触发器列表，多个触发器之间为「或」关系，满足任一即触发。</p>
   */
  Triggers?: Array<AiScheduleTriggerInfo>
  /**
   * <p>最大触发次数，0 表示无限制。</p>
   */
  MaxFireCount?: number
  /**
   * <p>生效开始时间，Unix 毫秒时间戳，0 表示立即生效。</p>
   */
  StartTime?: number
  /**
   * <p>生效结束时间，Unix 毫秒时间戳，0 表示永不过期。</p>
   */
  EndTime?: number
}

/**
 * DescribeUserInfo返回参数结构体
 */
export interface DescribeUserInfoResponse {
  /**
   * <p>用户配额信息</p>
   */
  UserInfo?: UserItem
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeAIScheduleList请求参数结构体
 */
export interface DescribeAIScheduleListRequest {
  /**
   * <p>分页偏移量，默认 0。</p>
   */
  Offset?: number
  /**
   * <p>分页大小，默认 20，最大 100。</p>
   */
  Limit?: number
  /**
   * <p>状态过滤。取值：0（全部）、1（已启用）、2（已停用），默认 0。</p>
   */
  Status?: number
  /**
   * <p>定时任务ID，可选，为空时则全量查询</p>
   */
  ScheduleId?: string
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
 * 漏洞影响厂商和产品
 */
export interface VulVendorProduct {
  /**
   * <p>供应商</p>
   */
  Vendor?: string
  /**
   * <p>产品名称</p>
   */
  Product?: string
  /**
   * <p>影响版本</p>
   */
  VersionRange?: Array<string>
}

/**
 * 漏洞修复任务概要信息
 */
export interface VulFixTaskInfo {
  /**
   * 修复任务主键ID
   */
  Id?: number
  /**
   * 任务ID
   */
  TaskId?: number
  /**
   * 修复状态
枚举值：
0：初始化
1：修复中
2：修复成功
3：部分修复失败
4：全部修复失败
5：停止修复
   */
  FixStatus?: number
  /**
   * 修复资产总数
   */
  AssetCount?: number
  /**
   * 修复成功数
   */
  SuccessCount?: number
  /**
   * 修复失败数
   */
  FailCount?: number
  /**
   * 修复中数量
   */
  FixingCount?: number
  /**
   * 排队中数量（等待下发或等待快照创建）
   */
  QueueCount?: number
  /**
   * 修复进度百分比
取值范围：[0, 100]
补充说明：计算方式为(SuccessCount+FailCount)/AssetCount×100
   */
  Progress?: number
  /**
   * 修复成功的漏洞数
   */
  SuccessVulCount?: number
  /**
   * 修复失败的漏洞数
   */
  FailVulCount?: number
  /**
   * 修复的漏洞名称列表
   */
  VulNames?: Array<string>
  /**
   * 修复启动时间
参数格式：YYYY-MM-DDTHH:mm:ssZ（ISO8601格式）
   */
  StartTime?: string
  /**
   * 修复结束时间
参数格式：YYYY-MM-DDTHH:mm:ssZ（ISO8601格式）
   */
  EndTime?: string
  /**
   * 漏洞维度修复状态列表，每个漏洞的修复状态详情
   */
  VulFixStatusList?: Array<VulFixStatusItem>
}

/**
 * 安全中心标签
 */
export interface EDRRuleTagItem {
  /**
   * <p>安全中心标签ID</p>
   */
  ID?: number
  /**
   * <p>标签中文Key</p>
   */
  TagKey?: string
  /**
   * <p>标签英文key</p>
   */
  TagKeyEn?: string
  /**
   * <p>标签中文值</p>
   */
  TagValue?: string
  /**
   * <p>标签英文值</p>
   */
  TagValueEn?: string
  /**
   * <p>标签描述</p>
   */
  Description?: string
  /**
   * <p>标签颜色</p>
   */
  Color?: string
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
 * DescribeEdrAlertSummary请求参数结构体
 */
export interface DescribeEdrAlertSummaryRequest {
  /**
   * <p>集团账号的成员id</p>
   */
  MemberId?: Array<string>
}

/**
 * ModifyDspmIdentifyComplianceGroup返回参数结构体
 */
export interface ModifyDspmIdentifyComplianceGroupResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeExposureAutoTagRules请求参数结构体
 */
export interface DescribeExposureAutoTagRulesRequest {
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
 * DescribeClusterNamespaceList返回参数结构体
 */
export interface DescribeClusterNamespaceListResponse {
  /**
   * <p>总数</p>
   */
  TotalCount?: number
  /**
   * <p>列表</p>
   */
  List?: Array<ClusterNamespaceListItem>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeBaselineOverview返回参数结构体
 */
export interface DescribeBaselineOverviewResponse {
  /**
   * <p>基线概览统计数据（主机/集群未通过项数、近一年修复数）。</p>
   */
  Statistics?: BaselineOverviewStatistic
  /**
   * <p>最近一次基线扫描完成时间。</p>
   */
  LatestScanTime?: string
  /**
   * <p>当前是否已启用任意周期性扫描。true 启用，false 未启用。</p>
   */
  EnableCycleScan?: boolean
  /**
   * <p>当前进行中的扫描主任务数量。</p>
   */
  ScanningTaskCount?: number
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
 * DescribeNetAttackSetting请求参数结构体
 */
export interface DescribeNetAttackSettingRequest {
  /**
   * <p>集团账号的成员id</p>
   */
  MemberId?: Array<string>
}

/**
 * DescribeBaselineMainTaskList返回参数结构体
 */
export interface DescribeBaselineMainTaskListResponse {
  /**
   * <p>扫描主任务列表。</p>
   */
  List?: Array<BaselineMainTask>
  /**
   * <p>凭据总数</p>
   */
  TotalCount?: number
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
 * ModifyRiskScanCronConfig请求参数结构体
 */
export interface ModifyRiskScanCronConfigRequest {
  /**
   * <p>集团账号的成员id</p>
   */
  MemberId?: Array<string>
  /**
   * <p>计划开启状态</p>
   */
  CronStatus?: number
  /**
   * <p>计划表达式</p>
   */
  CronPlanContent?: string
  /**
   * <p>新增规则是否自动执行</p>
   */
  RuleAutoEnable?: boolean
  /**
   * <p>时区</p>
   */
  ScanPlanTimezone?: string
  /**
   * <p>增量资产开启风险扫描开关</p>
   */
  IncrementAssetScanRisk?: boolean
}

/**
 * DescribeHostKBRiskList返回参数结构体
 */
export interface DescribeHostKBRiskListResponse {
  /**
   * <p>主机 KB 补丁风险列表</p>
   */
  List?: Array<HostKBRisk>
  /**
   * <p>凭据总数</p>
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateEdrLessAlertExportJob请求参数结构体
 */
export interface CreateEdrLessAlertExportJobRequest {
  /**
   * <p>集团账号的成员id</p>
   */
  MemberId?: Array<string>
  /**
   * <p>MachineName  主机名称InstanceID  实例ID  IP   内网IP或公网IP - 是否必填：否 - 主机Ip或别名筛选HostId - String - 是否必填：否 - 主机IdAgentId - String - 是否必填：否 - 客户端IdPolicyType - String - 是否必填：否 - 策略类型,0:系统策略1:用户自定义策略Domain - String - 是否必填：否 - 域名(先对域名做urlencode,再base64)HandleStatus - String - 是否必填：否 - 状态筛选0:待处理；2:信任；3:不信任BeginTime - String - 是否必填：否 - 最近访问开始时间EndTime - String - 是否必填：否 - 最近访问结束时间</p>
   */
  Filters?: Array<EDRFilter>
  /**
   * <p>排序方式：[ASC:升序|DESC:降序]</p>
   */
  Order?: string
  /**
   * <p>排序字段：[ LatestDetectTime:最近请求时间]</p>
   */
  By?: string
}

/**
 * DescribeAssetTree请求参数结构体
 */
export interface DescribeAssetTreeRequest {
  /**
   * <p>集团账号的成员id</p>
   */
  MemberId?: Array<string>
}

/**
 * DescribeCWPTaskDuration返回参数结构体
 */
export interface DescribeCWPTaskDurationResponse {
  /**
   * 任务下发需要的时长，单位为分钟
   */
  Duration?: number
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
   * <p>待新建或编辑的基线策略详情。</p>
   */
  Policy: BaselinePolicy
  /**
   * <p>集团账号的成员id</p>
   */
  MemberId?: Array<string>
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
 * ModifyDspmBackupSetting请求参数结构体
 */
export interface ModifyDspmBackupSettingRequest {
  /**
   * <p>集团账号的成员id</p>
   */
  MemberId?: Array<string>
  /**
   * <p>备份日志保留时长</p>
   */
  BackupLogSaveTime?: number
  /**
   * <p>恢复日志保留时长</p>
   */
  RestoreLogSaveTime?: number
  /**
   * <p>日志最大生命周期限制</p>
   */
  LogMaxSaveTime?: number
  /**
   * <p>在线日志最大天数限制</p>
   */
  OnlineLogMaxSaveTime?: number
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
 * DescribeDspmApproveOrderList请求参数结构体
 */
export interface DescribeDspmApproveOrderListRequest {
  /**
   * 过滤器
   */
  Filter?: Filter
}

/**
 * 命中规则项
 */
export interface SkillScanRuleHit {
  /**
   * 融合规则编号
参数格式：形如 9xxxx
   */
  RuleID?: string
  /**
   * 风险发现描述
   */
  Description?: string
}

/**
 * CreateCloudFunctionExportJob返回参数结构体
 */
export interface CreateCloudFunctionExportJobResponse {
  /**
   * 导出任务ID
   */
  JobId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
 * 即将到期产品
 */
export interface ExpiringProduct {
  /**
   * <p>产品ID</p>
   */
  ProductId?: string
  /**
   * <p>产品名称</p>
   */
  ProductName?: string
  /**
   * <p>距到期天数<br>单位：天</p>
   */
  DaysToExpire?: number
  /**
   * <p>到期时间</p>
   */
  ExpireTime?: string
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
 * DescribeEdrAlertThreatTags请求参数结构体
 */
export interface DescribeEdrAlertThreatTagsRequest {
  /**
   * <p>目标告警的信息</p>
   */
  Targets: Array<EdrAlertTarget>
  /**
   * <p>集团账号的成员id</p>
   */
  MemberId?: Array<string>
}

/**
 * 资产标签元素
 */
export interface AssetTagItem {
  /**
   * <p>标签ID</p>
   */
  ID?: number
  /**
   * <p>appid</p>
   */
  AppID?: number
  /**
   * <p>标签键</p>
   */
  TagKey?: string
  /**
   * <p>标签值</p>
   */
  TagValue?: string
  /**
   * <p>描述</p>
   */
  Description?: string
  /**
   * <p>自动打标策略</p>
   */
  TaggingRule?: string
  /**
   * <p>标签颜色</p>
   */
  Color?: string
  /**
   * <p>标签绑定的资产数量</p>
   */
  AssetCount?: number
  /**
   * <p>创建时间</p>
   */
  CreateTime?: string
  /**
   * <p>更新时间</p>
   */
  UpdateTime?: string
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
 * DescribeHostVulItemVPRInfo返回参数结构体
 */
export interface DescribeHostVulItemVPRInfoResponse {
  /**
   * <p>VPR Label</p>
   */
  Label?: Array<VPRLabel>
  /**
   * <p>VPR评级过程和结果</p>
   */
  VRPRatingInfo?: VPRRatingInfo
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 网段
 */
export interface NetworkSegment {
  /**
   * <p>网段</p>
   */
  Segment?: string
  /**
   * <p>描述</p>
   */
  Desc?: string
}

/**
 * DescribeLoginTypeHost返回参数结构体
 */
export interface DescribeLoginTypeHostResponse {
  /**
   * <p>总数</p>
   */
  Total?: number
  /**
   * <p>主机列表</p>
   */
  List?: Array<ClientSettingHost>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribePreventUninstallHost请求参数结构体
 */
export interface DescribePreventUninstallHostRequest {
  /**
   * <p>集团账号的成员id</p>
   */
  MemberId?: Array<string>
  /**
   * <p>Name - string - 是否必填：否 - 主机名 InstanceId - string - 是否必填：否 - 实例ID PublicIp - string - 是否必填：否 - 公网IP PrivateIp - string - 是否必填：否 - 私网IP</p>
   */
  Filters?: Array<EDRFilter>
  /**
   * <p>限制条数,默认10,最大100</p>
   */
  Limit?: number
  /**
   * <p>偏移量,默认0</p>
   */
  Offset?: number
  /**
   * <p>排序方式: [ASC:升序|DESC:降序]</p>
   */
  Order?: string
  /**
   * <p>可选排序列: [Id]</p>
   */
  By?: string
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
 * CreateClusterAssetSyncTask返回参数结构体
 */
export interface CreateClusterAssetSyncTaskResponse {
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
 * 订单额外参数
 */
export interface CWPOrderExtraParam {
  /**
   * PrePay 包年包月
PostPay 按量计费
Disposable 一次性交付
   */
  Mode?: string
  /**
   * 一次性服务交付状态,仅一次性资源订单才有该值
false 未验收
true 已验收
   */
  DisposableStatus?: boolean
}

/**
 * DescribeEDRScanTaskDetail返回参数结构体
 */
export interface DescribeEDRScanTaskDetailResponse {
  /**
   * <p>任务ID</p>
   */
  TaskId?: number
  /**
   * <p>任务名称</p>
   */
  TaskName?: string
  /**
   * <p>整体状态：WAIT/SCANNING/FINISHED/FAILED/CANCELED/TERMINATED/TIMEOUT</p>
   */
  Status?: string
  /**
   * <p>任务类型：HOST/CONTAINER</p>
   */
  TaskType?: string
  /**
   * <p>触发方式：MANUAL/CYCLE</p>
   */
  TriggerType?: string
  /**
   * <p>任务开始时间</p>
   */
  StartTime?: string
  /**
   * <p>任务结束时间</p>
   */
  EndTime?: string
  /**
   * <p>检测模式：full/quick/include/exclude</p>
   */
  ScanType?: string
  /**
   * <p>自选路径列表</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  CustomPaths?: Array<string>
  /**
   * <p>超时时间（秒）</p>
   */
  Timeout?: number
  /**
   * <p>是否开启深度检测：0-否/1-是</p>
   */
  EnableMemShellScan?: number
  /**
   * <p>创建者账号AppId</p>
   */
  CreateAppID?: number
  /**
   * <p>任务创建者账号名称（后端富化）</p>
   */
  AccountName?: string
  /**
   * <p>创建者云类型</p>
   */
  CloudType?: number
  /**
   * <p>任务总资产数</p>
   */
  TotalAssetCount?: number
  /**
   * <p>已完成资产数</p>
   */
  FinishedAssetCount?: number
  /**
   * <p>风险资产数</p>
   */
  RiskAssetCount?: number
  /**
   * <p>主机资产列表（TaskType=HOST时有值）</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  HostList?: Array<EDRScanTaskHostItem>
  /**
   * <p>容器资产列表（TaskType=CONTAINER时有值）</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  ContainerList?: Array<EDRScanTaskContainerItem>
  /**
   * <p>当前筛选条件下资产列表总条数</p>
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeCWPScanIpInfo请求参数结构体
 */
export interface DescribeCWPScanIpInfoRequest {
  /**
   * <p>IP地址</p>
   */
  IP: string
}

/**
 * CreateExposureAutoTagRule请求参数结构体
 */
export interface CreateExposureAutoTagRuleRequest {
  /**
   * <p>集团账号的成员id</p>
   */
  MemberId?: Array<string>
  /**
   * <p>规则名称</p>
   */
  RuleName?: string
  /**
   * <p>标签</p>
   */
  Tag?: string
  /**
   * <p>规则描述</p>
   */
  Description?: string
  /**
   * <p>规则开启状态</p>
   */
  Enable?: boolean
  /**
   * <p>资产类型</p>
   */
  AssetTypes?: Array<string>
  /**
   * <p>端口</p>
   */
  Ports?: Array<string>
  /**
   * <p>开放状态</p>
   */
  OpenStatuses?: Array<string>
  /**
   * <p>是否立即执行规则</p>
   */
  ApplyNow?: boolean
}

/**
 * StopCSIPManualMalwareScan请求参数结构体
 */
export interface StopCSIPManualMalwareScanRequest {
  /**
   * <p>任务ID</p>
   */
  TaskId: number
  /**
   * <p>集团账号的成员id</p>
   */
  MemberId?: Array<string>
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
 * UpdateClusterOwner请求参数结构体
 */
export interface UpdateClusterOwnerRequest {
  /**
   * <p>集群ClusterCaMD5列表</p>
   */
  ClusterCaMD5List: Array<string>
  /**
   * <p>集团账号的成员id</p>
   */
  MemberId?: Array<string>
  /**
   * <p>负责人名称</p>
   */
  OwnerName?: string
}

/**
 * DescribeVulComponentRelateHost请求参数结构体
 */
export interface DescribeVulComponentRelateHostRequest {
  /**
   * <p>漏洞 ID（vul_vuls.id）</p>
   */
  VulID: number
  /**
   * <p>组件名称</p>
   */
  Name: string
  /**
   * <p>集团账号的成员id</p>
   */
  MemberId?: Array<string>
  /**
   * <p>筛选条件数组，多条件之间为 AND 关系<br>支持的 Filter.Name：<br>Keyword：关键字模糊搜索（对主机名/IP/InstanceID 模糊匹配）</p>
   */
  Filters?: Array<Filters>
  /**
   * <p>每页返回数量<br>取值范围：[1, 100]<br>默认值：10</p>
   */
  Limit?: number
  /**
   * <p>分页偏移量<br>取值范围：[0, +∞)<br>默认值：0</p>
   */
  Offset?: number
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
 * DescribeAIAnalysisRecommendQuestions返回参数结构体
 */
export interface DescribeAIAnalysisRecommendQuestionsResponse {
  /**
   * <p>推荐问题</p>
   */
  RecommendAction?: Array<AIRecommendAction>
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
 * DescribeUebaBehaviorSummary返回参数结构体
 */
export interface DescribeUebaBehaviorSummaryResponse {
  /**
   * NodeInfo中有具体数据，Key为AbnormalUser表示异常账号，
Key为AbnormalBehavior异常行为。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Data?: BehaviorSummary
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateRiskDetailExportJob返回参数结构体
 */
export interface CreateRiskDetailExportJobResponse {
  /**
   * 导出任务ID
   */
  JobId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * InstallClusterAgent返回参数结构体
 */
export interface InstallClusterAgentResponse {
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
 * DescribeCustomAssetTagCount返回参数结构体
 */
export interface DescribeCustomAssetTagCountResponse {
  /**
   * 自定义标签数量
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
 * ModifyEDRRule返回参数结构体
 */
export interface ModifyEDRRuleResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyAgentConfigSetting返回参数结构体
 */
export interface ModifyAgentConfigSettingResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
 * 主机安全模块自动扩容配置
 */
export interface HostAutoScaleConfig {
  /**
   * 主机自动扩容开关
枚举值：
ON：开启
OFF：关闭
补充说明：不传则不修改；映射底层自动加购开关 auto_repurchase_switch
   */
  Switch?: string
  /**
   * 扩容版本
枚举值：
PRO：专业版
ULTIMATE：旗舰版
补充说明：不传则不修改
   */
  ProtectType?: string
}

/**
 * CreateBaselineFixRecordExportJob请求参数结构体
 */
export interface CreateBaselineFixRecordExportJobRequest {
  /**
   * <p>导出任务名称。不传时自动生成。</p>
   */
  Name?: string
  /**
   * <p>集团账号的成员id</p>
   */
  MemberId?: Array<string>
  /**
   * <p>通用过滤条件，支持字段：检测项名称（模糊）、资产名称/ID、风险等级、修复时间区间等。</p>
   */
  Filters?: Array<Filters>
}

/**
 * ExportClientSettingHostList返回参数结构体
 */
export interface ExportClientSettingHostListResponse {
  /**
   * <p>任务ID,需要到接口“异步导出任务”ExportTasks获取DownloadUrl下载地址</p>
   */
  TaskId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeBaselineAggregatedItemList请求参数结构体
 */
export interface DescribeBaselineAggregatedItemListRequest {
  /**
   * <p>基线策略 ID 列表（可同时传多条做联合统计）。</p>
   */
  PolicyID: Array<number | bigint>
  /**
   * <p>基线系统父分类 ID。</p>
   */
  ParentCategoryID: number
  /**
   * <p>检测资产大类，区分主机基线与容器集群基线。取值：</p><ul><li>HOST：主机</li><li>CLUSTER：容器集群</li></ul>
   */
  CheckAssetType?: string
  /**
   * <p>基线子分类 ID。</p>
   */
  CategoryID?: number
  /**
   * <p>集团账号的成员id</p>
   */
  MemberId?: Array<string>
  /**
   * <p>通用过滤条件。支持的 Name：ResultStatus（结果状态 PASS/NOT_PASS/CHECKING/CHECK_FAILED/NOT_INVOLVED）、Name（检测项名称，模糊搜索）、RiskLevel（风险等级 CRITICAL/HIGH/MEDIUM/LOW）、PolicyName（所属基线/策略名称，模糊搜索）。</p>
   */
  Filters?: Array<Filters>
  /**
   * <p>分页查询每页数量，最大值 100；超过时服务端将自动回退为默认值 10。</p>
   */
  Limit?: number
  /**
   * <p>分页查询起始偏移量，从 0 开始。</p>
   */
  Offset?: number
  /**
   * <p>排序方向，取值 asc（升序）或 desc（降序），默认 desc。</p>
   */
  Order?: string
  /**
   * <p>排序字段名，由具体接口定义可选字段。</p>
   */
  By?: string
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
 * DeleteCluster请求参数结构体
 */
export interface DeleteClusterRequest {
  /**
   * <p>集团账号的成员id</p>
   */
  MemberId?: Array<string>
  /**
   * 被调用的集团账号的成员id
   */
  OperatedMemberId?: Array<string>
  /**
   * <p>集群资产 id</p>
   * @deprecated
   */
  ClusterAssetIds?: Array<string>
  /**
   * <p>集群ca证书md5值，集群的唯一标识</p>
   */
  ClusterCaMD5List?: Array<string>
}

/**
 * DescribeBaselineSubTaskList返回参数结构体
 */
export interface DescribeBaselineSubTaskListResponse {
  /**
   * <p>子任务列表。</p>
   */
  List?: Array<BaselineSubTask>
  /**
   * <p>凭据总数</p>
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateDspmIdentifyComplianceGroup返回参数结构体
 */
export interface CreateDspmIdentifyComplianceGroupResponse {
  /**
   * <p>识别模板ID</p>
   */
  Id?: number
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
 * ModifyCspmShardConfig返回参数结构体
 */
export interface ModifyCspmShardConfigResponse {
  /**
   * <p>共享AppID</p>
   */
  ShardFromAppID?: number
  /**
   * <p>共享开关:1:开启;2:关闭</p>
   */
  AutoShardStatus?: number
  /**
   * <p>被共享AppID集合</p>
   */
  ShardAppIDs?: Array<number | bigint>
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
 * DescribeDspmPayInfo请求参数结构体
 */
export interface DescribeDspmPayInfoRequest {
  /**
   * <p>集团账号的成员id</p>
   */
  MemberId?: Array<string>
}

/**
 * CreateHighBaseLineRisksExportJob返回参数结构体
 */
export interface CreateHighBaseLineRisksExportJobResponse {
  /**
   * 导出任务ID
   */
  JobId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyAssetFilterView请求参数结构体
 */
export interface ModifyAssetFilterViewRequest {
  /**
   * 视图ID
   */
  ViewID: number
  /**
   * <p>集团账号的成员id</p>
   */
  MemberId?: Array<string>
  /**
   * 资产搜索过滤项
   */
  Filters?: Array<Filters>
}

/**
 * DescribeEDRScanTaskDetail请求参数结构体
 */
export interface DescribeEDRScanTaskDetailRequest {
  /**
   * <p>任务ID</p>
   */
  TaskId: number
  /**
   * <p>集团账号的成员id</p>
   */
  MemberId?: Array<string>
  /**
   * <p>通用查询参数（含Filters/Limit/Offset）</p>
   */
  Filter?: Filter
}

/**
 * CLB后端服务
 */
export interface ClbTargetItem {
  /**
   * <p>实例ID</p>
   */
  InstanceID?: string
  /**
   * <p>实例名称</p>
   */
  InstanceName?: string
  /**
   * <p>内网IP地址</p>
   */
  PrivateIpAddresses?: string
  /**
   * <p>网卡ID</p>
   */
  EniID?: string
  /**
   * <p>端口</p>
   */
  Port?: number
}

/**
 * DescribeBaselineItemRiskList请求参数结构体
 */
export interface DescribeBaselineItemRiskListRequest {
  /**
   * <p>基线策略 ID 列表。</p>
   */
  PolicyID: Array<number | bigint>
  /**
   * <p>基线系统父分类 ID。</p>
   */
  ParentCategoryID: number
  /**
   * <p>基线检测项 ID。</p>
   */
  ItemID: number
  /**
   * <p>检测资产类型列表，元素取值为 HOST 或 CLUSTER。</p>
   */
  CheckAssetType?: Array<string>
  /**
   * <p>基线子分类 ID。</p>
   */
  CategoryID?: number
  /**
   * <p>集团账号的成员id</p>
   */
  MemberId?: Array<string>
  /**
   * <p>通用过滤条件。支持的 Name：ResultStatus（通过状态，Values: PASS/NOT_PASS）、AssetName（资产名称/ID，模糊搜索）、IP（IP地址，模糊搜索）、Tag（资产标签，模糊搜索）。</p>
   */
  Filters?: Array<Filters>
  /**
   * <p>分页查询每页数量，最大值 100；超过时服务端将自动回退为默认值 10。</p>
   */
  Limit?: number
  /**
   * <p>分页查询起始偏移量，从 0 开始。</p>
   */
  Offset?: number
  /**
   * <p>排序方向，取值 asc（升序）或 desc（降序），默认 desc。</p>
   */
  Order?: string
  /**
   * <p>排序字段名，由具体接口定义可选字段。</p>
   */
  By?: string
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
 * CreateVulFixTask返回参数结构体
 */
export interface CreateVulFixTaskResponse {
  /**
   * <p>修复任务ID，用于后续查询任务状态</p>
   */
  TaskId?: number
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
 * DescribeVulIgnoreRuleList请求参数结构体
 */
export interface DescribeVulIgnoreRuleListRequest {
  /**
   * <p>集团账号的成员id</p>
   */
  MemberId?: Array<string>
  /**
   * <p>过滤条件，支持以下 Name：</p><li>Keyword - 漏洞名/备注，模糊匹配</li><li>Switch - 开关状态，过滤值：0（关闭）/ 1（开启）</li>
   */
  Filters?: Array<Filters>
  /**
   * <p>分页大小，默认 10，最大 100</p>
   */
  Limit?: number
  /**
   * <p>分页偏移，从 0 开始</p>
   */
  Offset?: number
  /**
   * <p>排序方向：asc（升序）/ desc（降序），默认 desc</p>
   */
  Order?: string
  /**
   * <p>排序字段，默认按更新时间（UpdateTime）排序</p>
   */
  By?: string
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
 * DescribeCLSLogListV3返回参数结构体
 */
export interface DescribeCLSLogListV3Response {
  /**
   * <p>上下文</p>
   */
  Context?: string
  /**
   * <p>listover</p>
   */
  ListOver?: boolean
  /**
   * <p>是否采用分析</p>
   */
  Analysis?: boolean
  /**
   * <p>结果</p>
   */
  Results?: Array<LogSearchResult>
  /**
   * <p>列名</p>
   */
  ColNames?: Array<string>
  /**
   * <p>分析结果</p>
   */
  AnalysisResults?: Array<LogItems>
  /**
   * <p>分析记录</p>
   */
  AnalysisRecords?: Array<string>
  /**
   * <p>列名</p>
   */
  Columns?: Array<LogColumn>
  /**
   * <p>采样</p>
   */
  SamplingRate?: number
  /**
   * <p>主题信息</p>
   */
  Topics?: LogSearchTopics
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyAgentRunMode返回参数结构体
 */
export interface ModifyAgentRunModeResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteMachineClearHistory请求参数结构体
 */
export interface DeleteMachineClearHistoryRequest {
  /**
   * <p>需要删除的记录id值,最大长度100个</p>
   */
  Ids: Array<number | bigint>
  /**
   * <p>集团账号的成员id</p>
   */
  MemberId?: Array<string>
}

/**
 * DescribeAssetTagAttributes返回参数结构体
 */
export interface DescribeAssetTagAttributesResponse {
  /**
   * <p>过滤条件</p>
   */
  FilterConditions?: Array<FilterDataObject>
  /**
   * <p>打标策略通用属性</p>
   */
  TaggingAttributes?: Array<FilterDataObject>
  /**
   * <p>已有标签键列表</p>
   */
  TagKeyList?: Array<FilterDataObject>
  /**
   * <p>可选颜色列表</p>
   */
  ColorOptions?: Array<FilterDataObject>
  /**
   * <p>资产类型列表</p>
   */
  AssetTypeList?: Array<FilterDataObject>
  /**
   * <p>标签树</p>
   */
  TagTree?: Array<AssetTagTreeNode>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * StopPreventUninstall请求参数结构体
 */
export interface StopPreventUninstallRequest {
  /**
   * <p>是否关闭全局 0 否 1 是</p>
   */
  StopGlobal: number
  /**
   * <p>集团账号的成员id</p>
   */
  MemberId?: Array<string>
  /**
   * <p>不是全局的情况下关闭的quuid集合</p>
   */
  Quuid?: Array<string>
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
 * ModifyMachineAutoClearConfig请求参数结构体
 */
export interface ModifyMachineAutoClearConfigRequest {
  /**
   * <p>清理规则时间, 0 表示关闭, 单位为天, 最大为 30天</p>
   */
  ClearRule: number
  /**
   * <p>集团账号的成员id</p>
   */
  MemberId?: Array<string>
}

/**
 * ModifyEDRRuleStatus请求参数结构体
 */
export interface ModifyEDRRuleStatusRequest {
  /**
   * <p>开启状态：0-开启，1-关闭</p>
   */
  Status: number
  /**
   * <p>策略ID数组</p>
   */
  RuleIDs: Array<string>
  /**
   * <p>策略类型，0-system 1-custom</p>
   */
  RuleType: number
  /**
   * <p>集团账号的成员id</p>
   */
  MemberId?: Array<string>
  /**
   * <p>修改策略对应的APPID</p>
   */
  TargetAppIDs?: Array<number | bigint>
}

/**
 * DescribeScfCustomDomainEndpoints返回参数结构体
 */
export interface DescribeScfCustomDomainEndpointsResponse {
  /**
   * <p>端点列表</p>
   */
  Endpoints?: Array<ScfCustomDomainEndpointItem>
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
 * CreateCFGRiskPDFReportExportJob请求参数结构体
 */
export interface CreateCFGRiskPDFReportExportJobRequest {
  /**
   * <p>合规规范ID</p>
   */
  StandardID: number
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
 * ModifyDspmIdentifyInfo返回参数结构体
 */
export interface ModifyDspmIdentifyInfoResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyDspmIdentifyComplianceGroup请求参数结构体
 */
export interface ModifyDspmIdentifyComplianceGroupRequest {
  /**
   * <p>识别模板ID</p>
   */
  Id: number
  /**
   * <p>识别模板名称</p>
   */
  Name?: string
  /**
   * <p>集团账号的成员id</p>
   */
  MemberId?: Array<string>
  /**
   * <p>描述</p>
   */
  Description?: string
  /**
   * <p>状态</p><p>枚举值：</p><ul><li>0： 未启用</li><li>1： 启用</li></ul>
   */
  Status?: number
}

/**
 * DescribeBaselineSyncConf返回参数结构体
 */
export interface DescribeBaselineSyncConfResponse {
  /**
   * <p>当前账号的基线同步配置。</p>
   */
  SyncConf?: BaselineSyncConf
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
 * AI助手AI问答推荐操作项
 */
export interface AIRecommendAction {
  /**
   * <p>推荐操作类型</p>
   */
  Action?: string
  /**
   * <p>推荐操作</p>
   */
  Question?: string
}

/**
 * 漏洞扫描任务记录
 */
export interface VulScanTask {
  /**
   * <p>任务id</p>
   */
  Id?: number
  /**
   * <p>任务id</p>
   */
  JobId?: string
  /**
   * <p>任务所属用户appid</p>
   */
  AppId?: number
  /**
   * <p>任务类型</p><p>枚举值：</p><ul><li>0： 一键扫描</li><li>1： 周期扫描</li></ul>
   */
  TaskType?: number
  /**
   * <p>漏洞分类</p><p>枚举值：</p><ul><li>LINUX： Linux软件漏洞</li><li>WINDOWS： Windows系统补丁</li><li>WEB_CMS： Web-CMS漏洞</li><li>APPLICATION： 应用漏洞</li><li>EMERGENCY： 应急漏洞</li></ul>
   */
  VulCategory?: Array<string>
  /**
   * <p>漏洞名称</p>
   */
  VulName?: Array<string>
  /**
   * <p>kb名称</p>
   */
  KbName?: Array<string>
  /**
   * <p>是否应急漏洞</p><p>枚举值：</p><ul><li>0： 否</li><li>1： 是</li></ul>
   */
  Emergency?: number
  /**
   * <p>扫描账号数量（0: 全部账号, others: 账号数量）</p>
   */
  Account?: number
  /**
   * <p>扫描开始时间</p>
   */
  StartTime?: string
  /**
   * <p>扫描结束时间</p>
   */
  EndTime?: string
  /**
   * <p>扫描状态（INITIALIZING: 初始化, SCANNING: 扫描中, SUCCESS: 扫描成功,  TOTAL_FAIL: 全部扫描失败）</p><p>枚举值：</p><ul><li>STOPPED： 已停止</li></ul>
   */
  Status?: string
  /**
   * <p>漏洞威胁等级</p><p>枚举值：</p><ul><li>LOW： 低危</li><li>MEDIUM： 中危</li><li>HIGH： 高危</li><li>CRITICAL： 严重</li></ul>
   */
  Level?: Array<string>
  /**
   * <p>扫描方式</p><p>枚举值：</p><ul><li>VersionCompare： 版本对比</li><li>POC： POC检测</li><li>VersionComparePOC： 版本对比+POC检测</li></ul>
   */
  Method?: Array<string>
  /**
   * <p>资产列表</p>
   */
  AssetList?: Array<string>
  /**
   * <p>资产范围</p><p>枚举值：</p><ul><li>0： 所有资产</li><li>1： 自选资产</li><li>2： 自选排除资产</li></ul>
   */
  AssetRange?: number
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
 * ModifyEdrAlertStatus返回参数结构体
 */
export interface ModifyEdrAlertStatusResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDspmIdentifyComplianceCategoryRuleList请求参数结构体
 */
export interface DescribeDspmIdentifyComplianceCategoryRuleListRequest {
  /**
   * <p>识别模板ID</p>
   */
  ComplianceId: number
  /**
   * <p>分类ID</p>
   */
  CategoryId: number
  /**
   * <p>集团账号的成员id</p>
   */
  MemberId?: Array<string>
  /**
   * <p>过滤条件</p>
   */
  Filter?: Filter
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
 * DeleteAISchedule请求参数结构体
 */
export interface DeleteAIScheduleRequest {
  /**
   * <p>AI 定时任务 ID。可通过 DescribeAIScheduleList 接口获取。</p>
   */
  ScheduleId?: string
}

/**
 * Dspm风险
 */
export interface DspmRisk {
  /**
   * <p>风险id</p>
   */
  RiskId?: string
  /**
   * <p>风险名称</p>
   */
  RiskName?: string
  /**
   * <p>风险英文名称</p>
   */
  RiskNameEn?: string
  /**
   * <p>策略类型</p>
   */
  StrategyType?: string
  /**
   * <p>策略类别</p>
   */
  StrategyCategory?: string
  /**
   * <p>风险等级</p>
   */
  RiskLevel?: string
  /**
   * <p>资产实例Id</p>
   */
  AssetId?: string
  /**
   * <p>资产类型</p>
   */
  AssetType?: string
  /**
   * <p>资产名</p>
   */
  AssetName?: string
  /**
   * <p>地域</p>
   */
  AssetRegion?: string
  /**
   * <p>资产账号</p>
   */
  Account?: string
  /**
   * <p>主机地址</p>
   */
  Host?: string
  /**
   * <p>账号类型</p>
   */
  AccountType?: number
  /**
   * <p>风险检出时间</p>
   */
  DetectTime?: string
  /**
   * <p>处理状态 0-未处理 1-已处置 2-已忽略</p>
   */
  Status?: number
  /**
   * <p>身份id</p>
   */
  IdentifyId?: string
  /**
   * <p>所属云账号uin用户</p>
   */
  OwnerUin?: DspmUinUser
  /**
   * <p>所属个人用户信息</p>
   */
  Person?: DspmPersonUser
  /**
   * <p>风险数据。</p>
   */
  RiskData?: string
  /**
   * <p>是否资产管理员</p>
   */
  IsAssetManager?: number
  /**
   * <p>数据起始时间</p>
   */
  DataBeginTime?: string
  /**
   * <p>数据结束时间</p>
   */
  DataEndTime?: string
  /**
   * <p>风险类型。risk-风险；alarm-告警。</p>
   */
  RiskType?: string
  /**
   * <p>资产所属账号app id</p>
   */
  AppId?: number
  /**
   * <p>账号昵称</p>
   */
  NickName?: string
  /**
   * <p>资产所属账号uin</p>
   */
  Uin?: string
  /**
   * <p>MongoDb的集群类型，非 MongoDB 资产固定 0</p><p>枚举值：</p><ul><li>0： 副本集</li><li>1： 分片</li></ul><p>默认值：0</p>
   */
  ClusterType?: number
  /**
   * <p>集群ID</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  ClusterId?: string
  /**
   * <p>集群名</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  ClusterName?: string
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
 * DescribeClusterListV2返回参数结构体
 */
export interface DescribeClusterListV2Response {
  /**
   * <p>总数</p>
   */
  TotalCount?: number
  /**
   * <p>列表</p>
   */
  List?: Array<ClusterListItem>
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
 * CreateEdrAlertExportJob返回参数结构体
 */
export interface CreateEdrAlertExportJobResponse {
  /**
   * <p>导出任务ID</p>
   */
  JobId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyEdrAlertPermanentIgnore请求参数结构体
 */
export interface ModifyEdrAlertPermanentIgnoreRequest {
  /**
   * <p>告警定位列表（支持跨账号），最多500条</p>
   */
  Targets: Array<EdrAlertTargetForIgnore>
  /**
   * <p>集团账号的成员id</p>
   */
  MemberId?: Array<string>
}

/**
 * EDR告警数量统计项
 */
export interface EdrAlertCountItem {
  /**
   * <p>查询实例ID</p>
   */
  InstanceId?: string
  /**
   * <p>总告警条数</p>
   */
  TotalCount?: number
  /**
   * <p>病毒木马（VIRUS_TROJAN）数量</p>
   */
  VirusTrojanCount?: number
  /**
   * <p>异常登录（ABNORMAL_LOGIN）数量</p>
   */
  AbnormalLoginCount?: number
  /**
   * <p>主机行为（HOST_BEHAVIOR）数量</p>
   */
  HostBehaviorCount?: number
  /**
   * <p>网络行为（NETWORK_BEHAVIOR）数量</p>
   */
  NetworkBehaviorCount?: number
  /**
   * <p>存在告警的主机数量（仅 GlobalCount 模式有值）</p>
   */
  InstancesCount?: number
}

/**
 * 基线主机资产，承载子任务/风险记录关联的主机详情。
 */
export interface BaselineHostAsset {
  /**
   * <p>云主机实例 ID，格式形如 ins-instanceid。</p>
   */
  InstanceID?: string
  /**
   * <p>CWP（云镜）侧主机唯一标识 QUUID。</p>
   */
  QUUID?: string
  /**
   * <p>主机 Agent 上报的 UUID。</p>
   */
  UUID?: string
  /**
   * <p>主机公网 IP。</p>
   */
  PublicIP?: string
  /**
   * <p>主机内网 IP。</p>
   */
  PrivateIP?: string
  /**
   * <p>CWP Agent 状态。取值：</p><ul><li>ONLINE：在线</li><li>OFFLINE：离线</li><li>UNINSTALLED：未安装</li></ul>
   */
  AgentStatus?: string
  /**
   * <p>云主机实例运行状态。取值：</p><ul><li>RUNNING：运行中</li><li>STOPPED：已停止</li><li>UNKNOWN：未知</li></ul>
   */
  InstanceStatus?: string
  /**
   * <p>主机名称。</p>
   */
  Name?: string
  /**
   * <p>主机所属租户 Appid。</p>
   */
  Appid?: number
  /**
   * <p>CSIP 内部资产标签列表。</p>
   */
  TagItem?: Array<MiniTagItem>
  /**
   * <p>云上原生资产标签（Tag）列表。</p>
   */
  CloudTag?: Array<Tag>
  /**
   * <p>主机所在地域信息。</p>
   */
  RegionInfo?: RegionInfo
  /**
   * <p>主机操作系统信息（含发行版与版本号）。</p>
   */
  OsInfo?: string
  /**
   * <p>主机防护版本。取值：NONE（未防护）、BASIC（基础版）、PRO（专业版）、ULTIMATE（旗舰版）、PRO_LH（轻量版）。</p>
   */
  ProtectVersion?: string
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
 * 主机漏洞组件
 */
export interface HostVulComponent {
  /**
   * <p>主机简要信息</p>
   */
  HostInfo?: HostBriefInfo
  /**
   * <p>受影响组件版本</p>
   */
  EffectVersion?: string
  /**
   * <p>组件在主机上的安装路径</p>
   */
  Path?: string
  /**
   * <p>关联进程 ID</p>
   */
  ProcessID?: string
  /**
   * <p>修复命令（仅展示）</p>
   */
  FixCommand?: string
  /**
   * <p>组件名字</p>
   */
  Name?: string
}

/**
 * DescribeSecurityScoreRule请求参数结构体
 */
export interface DescribeSecurityScoreRuleRequest {
  /**
   * <p>集团账号的成员id</p>
   */
  MemberId?: Array<string>
}

/**
 * DescribeRiskScanCronConfig请求参数结构体
 */
export type DescribeRiskScanCronConfigRequest = null

/**
 * CreateExposureAutoTagRule返回参数结构体
 */
export interface CreateExposureAutoTagRuleResponse {
  /**
   * <p>规则ID</p>
   */
  RuleID?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 扫描任务记录项
 */
export interface EDRScanRecordItem {
  /**
   * <p>任务主键 ID</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  TaskId?: number
  /**
   * <p>任务名称，如 Malware_20260702_030000</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  TaskName?: string
  /**
   * <p>扫描类型</p><p>枚举值：</p><ul><li>MANNAL： 手动扫描</li><li>CYCLE： 定时扫描</li></ul>
注意：此字段可能返回 null，表示取不到有效值。
   */
  TriggerType?: string
  /**
   * <p>定时调度描述（ScanType=1 时有值），如“每天 03:00:00”</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  ScheduleDesc?: string
  /**
   * <p>任务资产类型：0=主机扫描，1=容器扫描</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  TaskType?: string
  /**
   * <p>扫描目标涉及的账号AppId列表</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  TargetAppIDs?: Array<number | bigint>
  /**
   * <p>任务创建者账号名称</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  AccountName?: string
  /**
   * <p>云类型：0=腾讯云，1=AWS，2=Azure，4=阿里云</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  CloudType?: number
  /**
   * <p>资产选择方式：all=全部资产，tag=按标签选择，direct=直接选择</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  AssetSelectionType?: string
  /**
   * <p>扫描资产总数</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  TotalAssetCount?: number
  /**
   * <p>创建者账号AppId（前端据此判断操作权限）</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  CreateAppID?: number
  /**
   * <p>创建者账号uin</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Creator?: string
  /**
   * <p>创建者账号名称</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  CreatorName?: string
  /**
   * <p>创建者云类型：0=腾讯云, 1=AWS, 2=Azure, 4=阿里云</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  CreatorCloudType?: number
  /**
   * <p>任务开始时间，格式 2006-01-02 15:04:05</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  StartTime?: string
  /**
   * <p>任务结束时间，未结束为空字符串</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  EndTime?: string
  /**
   * <p>WAIT：待扫描，SCANNING：扫描中，FINISHED：已完成，FAILED：失败，CANCELED：已停止</p><p>枚举值：</p><ul><li>WAIT： 待扫描</li><li>SCANNING： 扫描中</li><li>FINISHED： 已完成</li><li>FAILED： 失败</li><li>CANCELED： 已停止</li></ul>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Status?: string
}

/**
 * 主机实例定位信息
 */
export interface InstanceIDWithAppIdItem {
  /**
   * 机器所属AppId
   */
  AppId: number
  /**
   * 机器实例ID
   */
  InstanceID: string
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
 * DescribeDspmIdentifyLevelGroupList返回参数结构体
 */
export interface DescribeDspmIdentifyLevelGroupListResponse {
  /**
   * <p>总数</p><p>单位：数量</p>
   */
  TotalCount?: number
  /**
   * <p>无</p>
   */
  DataSet?: Array<DspmIdentifyLevelGroupItem>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
 * DeleteDspmIdentifyComplianceCategoryRelation返回参数结构体
 */
export interface DeleteDspmIdentifyComplianceCategoryRelationResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
 * DescribeLicenseStatus请求参数结构体
 */
export type DescribeLicenseStatusRequest = null

/**
 * 漏洞修复任务列表项
 */
export interface VulFixTaskItem {
  /**
   * 修复任务主键ID
   */
  Id?: number
  /**
   * 任务ID，用于交互的hash标识
   */
  TaskId?: number
  /**
   * 任务JobId，对应后台任务系统的任务ID
   */
  JobId?: string
  /**
   * 修复的漏洞ID列表
   */
  VulIds?: Array<number | bigint>
  /**
   * 修复的KB补丁ID列表
   */
  KBIds?: Array<number | bigint>
  /**
   * 修复资产总数
   */
  AssetCount?: number
  /**
   * 修复成功的主机数
   */
  SuccessCount?: number
  /**
   * 修复失败的主机数
   */
  FailCount?: number
  /**
   * 修复进度百分比
取值范围：[0, 100]
补充说明：计算方式为(SuccessCount+FailCount)/AssetCount×100
   */
  Progress?: number
  /**
   * 修复任务用户数
   */
  TargetAppIdsCount?: number
  /**
   * 修复状态
枚举值：
0：初始化
1：修复中
2：修复成功
3：部分修复失败
4：全部修复失败
5：停止修复
   */
  FixStatus?: number
  /**
   * 最大修复时间
单位：秒
   */
  Timeout?: number
  /**
   * 修复启动时间
参数格式：YYYY-MM-DDTHH:mm:ssZ（ISO8601格式）
   */
  StartTime?: string
  /**
   * 修复结束时间
参数格式：YYYY-MM-DDTHH:mm:ssZ（ISO8601格式）
   */
  EndTime?: string
  /**
   * 记录创建时间
参数格式：YYYY-MM-DDTHH:mm:ssZ（ISO8601格式）
   */
  CreateTime?: string
  /**
   * 修复的漏洞名称列表，便于列表页直接展示
   */
  VulNames?: Array<string>
  /**
   * 漏洞类型列表
枚举值：
LINUX：Linux软件漏洞
WINDOWS：Windows系统补丁漏洞
WEB_CMS：Web-CMS漏洞
APPLICATION：应用漏洞
EMERGENCY：应急漏洞
   */
  VulCategory?: Array<string>
  /**
   * 创建者AppId
   */
  AppId?: number
}

/**
 * ModifyNotifyAgentOfflineDuration请求参数结构体
 */
export interface ModifyNotifyAgentOfflineDurationRequest {
  /**
   * <p>离线时长，分钟级20-50m，步长10；小时级1-24h，步长1</p>
   */
  Duration: string
}

/**
 * DescribePreventUninstallGlobalConf请求参数结构体
 */
export interface DescribePreventUninstallGlobalConfRequest {
  /**
   * <p>集团账号的成员id</p>
   */
  MemberId?: Array<string>
}

/**
 * DescribeBaselineUserWeakPasswordConf返回参数结构体
 */
export interface DescribeBaselineUserWeakPasswordConfResponse {
  /**
   * <p>当前账号配置的弱口令字典明文。</p>
   */
  UserConf?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
 * 标签查询结果项
 */
export interface EdrAlertTagItem {
  /**
   * <p>告警ID</p>
   */
  AlertId?: string
  /**
   * <p>腾讯云标签</p>
   */
  CloudTags?: Array<TagItem>
  /**
   * <p>安全中心标签</p>
   */
  CSIPTags?: Array<CSIPTag>
  /**
   * <p>情报标签</p>
   */
  ThreatTags?: Array<string>
  /**
   * <p>IP情报信息</p>
   */
  IPIntel?: IPIntelInfo
}

/**
 * DescribeSecurityScoreOverview返回参数结构体
 */
export interface DescribeSecurityScoreOverviewResponse {
  /**
   * <p>安全评分<br>取值范围：[0, 100]</p>
   */
  Score?: number
  /**
   * <p>安全等级<br>枚举值：<br>safe：安全(90-100分)<br>good：良好(70-89分)<br>medium：一般(40-69分)<br>danger：危险(0-39分)</p>
   */
  Level?: string
  /**
   * <p>评分状态<br>枚举值：<br>success：全部数据源正常<br>partial_error：部分数据源使用了缓存<br>stale：使用上次完整快照<br>error：无法计算</p>
   */
  ScoreStatus?: string
  /**
   * <p>初始分<br>默认值：100</p>
   */
  InitialScore?: number
  /**
   * <p>存在风险的分类数量（X类风险建议尽快处理）</p>
   */
  RiskCategoryCount?: number
  /**
   * <p>总扣分</p>
   */
  DeductScore?: number
  /**
   * <p>计算时间<br>参数格式：YYYY-MM-DDTHH:mm:ss+08:00</p>
   */
  CalculatedAt?: string
  /**
   * <p>维度明细，含子项扣分和待办</p>
   */
  Dimensions?: Array<DimensionItem>
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
   * <p>集团账号的成员id</p>
   */
  MemberId?: Array<string>
}

/**
 * 基线策略
 */
export interface BaselinePolicy {
  /**
   * <p>周期扫描配置（开关、间隔类型、扫描时段等）。</p>
   */
  CycleScanConf: CycleScanConf
  /**
   * <p>检测资产大类，区分主机基线与容器集群基线。取值：</p><ul><li>HOST：主机</li><li>CLUSTER：容器集群</li></ul>
   */
  CheckAssetType: string
  /**
   * <p>是否在系统新增内置检测项时自动加入本策略。true 自动加入，false 不加入。</p>
   */
  AutoSyncItem: boolean
  /**
   * <p>基线策略类型。取值：</p><ul><li>SYSTEM：系统策略（CSIP 内置）</li><li>SELF：用户自定义策略</li></ul>
   */
  Type: string
  /**
   * <p>策略名称（自定义策略由用户填写，系统策略为内置分类名）。</p>
   */
  Name: string
  /**
   * <p>策略描述。</p>
   */
  Description: string
  /**
   * <p>主机生效范围。取值：</p><ul><li>ALL：全部主机（可配合 ConfHostExcludeList 剔除）</li><li>TAG_MATCH：按标签匹配，配合 ConfHostTagValue</li><li>PICK：仅在 ConfHostIncludeList 指定的主机生效</li><li>NONE：未配置</li></ul>
   */
  ConfHostType: string
  /**
   * <p>主机 InstanceID 白名单，在 ConfHostType=PICK / TAG_MATCH 时使用。</p>
   */
  ConfHostIncludeList: Array<string>
  /**
   * <p>主机 InstanceID 剔除名单，在 ConfHostType=ALL 时使用。</p>
   */
  ConfHostExcludeList: Array<string>
  /**
   * <p>策略启用状态。0 停用，1 启用；停用后该策略不参与扫描与统计。</p>
   */
  Enable: boolean
  /**
   * <p>集群生效范围。取值：</p><ul><li>ALL：全部集群（可配合 ConfClusterExcludeList 剔除）</li><li>PICK：仅在 ConfClusterIncludeList 指定的集群生效</li><li>NONE：未配置</li></ul>
   */
  ConfClusterType: string
  /**
   * <p>集群 ID 白名单，在 ConfClusterType=PICK 时使用。</p>
   */
  ConfClusterIncludeList: Array<string>
  /**
   * <p>集群 ID 剔除名单，在 ConfClusterType=ALL 时使用。</p>
   */
  ConfClusterExcludeList: Array<string>
  /**
   * <p>系统分类 / 子分类 / 检测项的命中配置（仅系统策略生效）。</p>
   */
  CategoryConf: Array<BaselinePolicySystemCategoryConf>
  /**
   * <p>自定义检测项的取值配置列表（在系统检测项基础上覆盖判定值）。</p>
   */
  CustomItemConf: Array<BaselineCustomItemConf>
  /**
   * <p>策略所属租户 Appid。</p>
   */
  Appid: number
  /**
   * <p>基线策略 ID。</p>
   */
  ID?: number
  /**
   * <p>当前策略已配置的检测项数量。</p>
   */
  ConfItemCount?: number
  /**
   * <p>当前策略命中的主机数量。</p>
   */
  ConfHostCount?: number
  /**
   * <p>当前策略命中的集群数量。</p>
   */
  ConfClusterCount?: number
  /**
   * <p>策略当前进行中的扫描主任务 ID；未在扫描时为 0。</p>
   */
  ScanningTaskID?: number
  /**
   * <p>最近一次扫描完成时间（含手动 / 周期）。</p>
   */
  LatestScanTime?: string
  /**
   * <p>最近一次周期性扫描完成时间。</p>
   */
  LatestCycleScanTime?: string
  /**
   * <p>安全中心标签ID列表</p>
   */
  TagIDList?: Array<number | bigint>
  /**
   * <p>云标签列表</p>
   */
  CloudTagList?: Array<string>
}

/**
 * 资产详情信息
 */
export interface AssetDetailItem {
  /**
   * <p>租户ID</p>
   */
  AppID?: number
  /**
   * <p>云账号名称</p>
   */
  CloudAccountName?: string
  /**
   * <p>资产ID</p>
   */
  AssetID?: string
  /**
   * <p>资产类型</p>
   */
  AssetType?: string
  /**
   * <p>云API返回标签</p>
   */
  Tags?: Array<AssetTag>
  /**
   * <p>安全组ID集合</p>
   */
  SecurityGroupIDs?: Array<string>
  /**
   * <p>公网IP</p>
   */
  PublicIP?: string
  /**
   * <p>内网IP</p>
   */
  PrivateIP?: string
  /**
   * <p>公网域名</p>
   */
  PublicDomain?: string
  /**
   * <p>内网域名</p>
   */
  PrivateDomain?: string
  /**
   * <p>风险总数</p>
   */
  RiskCount?: number
  /**
   * <p>告警总数</p>
   */
  AlarmCount?: number
  /**
   * <p>资产名称</p>
   */
  AssetName?: string
  /**
   * <p>云安全中心标签</p>
   */
  CustomTags?: Array<CustomTag>
  /**
   * <p>云厂商</p>
   */
  Provider?: string
  /**
   * <p>资产类型名称</p>
   */
  AssetTypeName?: string
  /**
   * <p>资产类型图标</p>
   */
  AssetTypeIconURL?: string
  /**
   * <p>资产唯一标志</p>
   */
  AssetRID?: string
}

/**
 * DescribeVulFixTaskDetail返回参数结构体
 */
export interface DescribeVulFixTaskDetailResponse {
  /**
   * <p>任务明细列表</p>
   */
  Data?: Array<VulFixTaskDetailItem>
  /**
   * <p>总数量</p>
   */
  TotalCount?: number
  /**
   * <p>任务概要信息</p>
   */
  TaskInfo?: VulFixTaskInfo
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
 * CreateClusterListExportJob返回参数结构体
 */
export interface CreateClusterListExportJobResponse {
  /**
   * <p>任务id</p>
   */
  JobId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 云资源配置风险统计信息
 */
export interface CFGRiskStatisticsItem {
  /**
   * <p>风险总数</p>
   */
  TotalRiskCount?: number
  /**
   * <p>近7天新增风险数量</p>
   */
  RiskAddCount?: number
  /**
   * <p>全部云资源配置风险的待修复项</p>
   */
  CheckViewCount?: number
  /**
   * <p>高优待修复风险</p>
   */
  HighPriorityRiskCount?: number
  /**
   * <p>近7天新增的待修复项</p>
   */
  CheckViewAddCount?: number
  /**
   * <p>全部云资源配置风险的待修复项，高优待修复</p>
   */
  HighPriorityCheckViewCount?: number
  /**
   * <p>资产视角下的展示条数</p>
   */
  AssetViewCount?: number
  /**
   * <p>近7天新增的待修复资产条数</p>
   */
  AssetViewAddCount?: number
  /**
   * <p>资产视角下的展示条数，高优待修复量</p>
   */
  HighPriorityAssetViewCount?: number
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
 * DescribeClusterSummary请求参数结构体
 */
export interface DescribeClusterSummaryRequest {
  /**
   * <p>集团账号的成员id</p>
   */
  MemberId?: Array<string>
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
 * ModifyBruteAttackRules请求参数结构体
 */
export interface ModifyBruteAttackRulesRequest {
  /**
   * <p>暴力破解判断规则</p>
   */
  Rules: Array<BruteAttackRule>
  /**
   * <p>集团账号的成员id</p>
   */
  MemberId?: Array<string>
}

/**
 * dspm数据识别级别信息
 */
export interface DspmIdentifyLevelItem {
  /**
   * <p>级别名称</p>
   */
  LevelName: string
  /**
   * <p>级别风险程度（从低到高）</p><p>取值范围：[1, 10]</p><p>单位：程度</p>
   */
  LevelScore: number
  /**
   * <p>级别id</p>
   */
  LevelId?: number
}

/**
 * DescribeVulFixTaskList请求参数结构体
 */
export interface DescribeVulFixTaskListRequest {
  /**
   * <p>分页偏移量<br>取值范围：[0, +∞)<br>默认值：0</p>
   */
  Offset?: number
  /**
   * <p>每页返回数量<br>取值范围：[1, 100]<br>默认值：10</p>
   */
  Limit?: number
  /**
   * <p>过滤条件<br>支持的Filter.Name：<br>TaskId - 精确匹配，按任务ID筛选<br>JobId - 精确匹配，按任务JobId筛选，对应后台任务系统的任务ID<br>FixStatus - 精确匹配，按修复状态筛选：0-初始化 1-修复中 2-修复成功 3-部分修复失败 4-全部修复失败 5-停止修复<br>StartTime - 范围匹配，修复启动时间范围，传入两个值表示起止时间<br>AppId - 精确匹配，按创建者AppId筛选<br>VulCategory - 精确匹配，按漏洞类型筛选：LINUX-Linux软件漏洞 WINDOWS-Windows系统补丁漏洞 WEB_CMS-Web-CMS漏洞 APPLICATION-应用漏洞 EMERGENCY-应急漏洞<br>TaskName - 模糊匹配，按漏洞名称/CVE编号/KB补丁名称筛选，匹配任务关联的漏洞或KB补丁</p>
   */
  Filters?: Array<Filters>
  /**
   * <p>排序字段<br>枚举值：<br>StartTime：按修复启动时间排序<br>EndTime：按修复结束时间排序<br>CreateTime：按创建时间排序</p>
   */
  Order?: string
  /**
   * <p>排序方式<br>枚举值：<br>asc：升序<br>desc：降序<br>默认值：desc</p>
   */
  By?: string
  /**
   * 集团账号的成员id
   */
  MemberId?: Array<string>
}

/**
 * ModifyCSIPRaspLicenseUnBinds返回参数结构体
 */
export interface ModifyCSIPRaspLicenseUnBindsResponse {
  /**
   * <p>总数</p>
   */
  Total?: number
  /**
   * <p>成功数</p>
   */
  SuccessNum?: number
  /**
   * <p>失败数</p>
   */
  FailedNum?: number
  /**
   * <p>失败明细</p>
   */
  FailedList?: Array<LicenseUnbindFailedItem>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyNotifySettingAlert请求参数结构体
 */
export interface ModifyNotifySettingAlertRequest {
  /**
   * <p>通知配置</p>
   */
  Settings: Array<NotifySetting>
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
 * CheckIsUltimateVersion返回参数结构体
 */
export interface CheckIsUltimateVersionResponse {
  /**
   * <p>是否旗舰版用户</p>
   */
  IsUltimateVersion?: boolean
  /**
   * <p>是否新版旗舰版用户</p>
   */
  IsNewUltimateVersion?: boolean
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
   * <p>ID值</p>
   */
  Id?: number
  /**
   * <p>实例ID</p>
   */
  InstanceId?: string
  /**
   * <p>实例名称</p>
   */
  InstanceName?: string
  /**
   * <p>公网IP</p>
   */
  PublicIp?: string
  /**
   * <p>内网IP</p>
   */
  PrivateIp?: string
  /**
   * <p>客户端最后离线时间</p>
   */
  AgentLastOfflineTime?: string
  /**
   * <p>创建时间</p>
   */
  CreateTime?: string
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
 * DescribeVulFixableMachineList返回参数结构体
 */
export interface DescribeVulFixableMachineListResponse {
  /**
   * <p>可修复主机列表</p>
   */
  Data?: Array<VulFixableMachineItem>
  /**
   * <p>总数量</p>
   */
  TotalCount?: number
  /**
   * <p>可一键修复的主机数量</p>
   */
  FixableCount?: number
  /**
   * <p>不可一键修复的主机数量</p>
   */
  NotFixableCount?: number
  /**
   * <p>漏洞维度汇总信息，展示被修复的漏洞列表概要</p>
   */
  VulSummary?: Array<VulFixSummaryItem>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeAssetLastSyncTime请求参数结构体
 */
export interface DescribeAssetLastSyncTimeRequest {
  /**
   * <p>集团账号的成员id</p>
   */
  MemberId?: Array<string>
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
 * 子项扣分及待办信息
 */
export interface CategoryItem {
  /**
   * <p>子项ID<br>枚举值：<br>vulnerability：漏洞治理<br>cloud_config：云产品配置治理<br>system_baseline：系统基线风险<br>intrusion_alert：入侵威胁告警<br>cloud_api_alert：云API告警<br>ai_agent_alert：AI Agent安全告警<br>object_storage_alert：对象存储异常告警<br>database_alert：数据库安全告警<br>protection_config：推荐防护配置未开启<br>edition_coverage：专业版/旗舰版覆盖率不足<br>product_expiry：产品7天内到期</p>
   */
  CategoryId?: string
  /**
   * <p>子项名称</p>
   */
  CategoryName?: string
  /**
   * <p>子类说明</p>
   */
  CategoryDesc?: string
  /**
   * <p>子项扣分上限</p>
   */
  MaxDeductScore?: number
  /**
   * <p>子项实际扣分</p>
   */
  DeductScore?: number
  /**
   * <p>风险总数</p>
   */
  RiskCount?: number
  /**
   * <p>等级明细，风险/威胁类子项有值</p>
   */
  SeverityItems?: Array<SeverityItem>
  /**
   * <p>扣分原因描述</p>
   */
  DeductReason?: string
  /**
   * <p>处理建议文案</p>
   */
  ActionText?: string
  /**
   * <p>防护配置详情，仅防护配置维度子项返回</p>
   */
  ProtectionDetail?: ProtectionDetail
}

/**
 * 扫描任务记录详情
 */
export interface ScanTaskRecordItem {
  /**
   * <p>任务ID</p>
   */
  TaskID?: string
  /**
   * <p>任务状态</p>
   */
  Status?: string
  /**
   * <p>任务进度</p>
   */
  Progress?: number
  /**
   * <p>消耗配额</p>
   */
  CostQuota?: number
  /**
   * <p>任务创建时间</p>
   */
  CreateTime?: string
  /**
   * <p>任务结束时间</p>
   */
  EndTime?: string
  /**
   * <p>任务来源</p>
   */
  TaskSource?: string
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
 * dspm数据识别模板分类关联关系
 */
export interface DspmIdentifyComplianceCategoryRelation {
  /**
   * <p>分类ID</p>
   */
  CategoryId?: number
  /**
   * <p>分类名称</p>
   */
  CategoryName?: string
  /**
   * <p>父分类ID</p>
   */
  CategoryParentId?: string
  /**
   * <p>是否叶子节点</p>
   */
  IsLeaf?: boolean
  /**
   * <p>分类类型</p><p>枚举值：</p><ul><li>0： 内置</li><li>1： 自定义</li></ul>
   */
  CategoryType?: number
  /**
   * <p>分类层级</p><p>单位：层</p>
   */
  CategoryGrade?: number
  /**
   * <p>关联的数据项信息</p>
   */
  RuleRelations?: Array<DspmIdentifyComplianceRuleRelation>
  /**
   * <p>子节点信息</p>
   */
  Children?: Array<DspmIdentifyComplianceCategoryRelation>
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
 * SCF 函数版本精简信息
 */
export interface SCFFunctionVersionInfo {
  /**
   * 函数版本名称
参数格式：$LATEST 或数字版本号，如 1、2、3
   */
  Version?: string
  /**
   * 版本状态。当前实现与 Version 字段同值返回
   */
  Status?: string
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
 * KB补丁修复汇总信息
 */
export interface KBFixSummaryItem {
  /**
   * KB补丁ID
   */
  KBId?: number
  /**
   * KB补丁名称
   */
  KBName?: string
  /**
   * KB编号（如 KB5001234）
   */
  KBNo?: string
  /**
   * 关联漏洞数
   */
  RelatedVulCount?: number
  /**
   * 受影响主机数
   */
  AffectedCount?: number
  /**
   * 修复后是否需要重启系统
   */
  NeedReboot?: boolean
  /**
   * 前置依赖补丁（逗号分隔的KB编号列表）
   */
  KBPreCondition?: string
}

/**
 * ModifyReverseShellSystemPolicyConfig请求参数结构体
 */
export interface ModifyReverseShellSystemPolicyConfigRequest {
  /**
   * <p>集团账号的成员id</p>
   */
  MemberId?: Array<string>
  /**
   * <p>内网告警展示</p>
   */
  InnerNetAlarmShow?: boolean
  /**
   * <p>内网ip展示</p>
   */
  InnerIPShow?: boolean
  /**
   * <p>主机范围：0-指定 1-全部 2-专业版 3-旗舰版 4-专业+旗舰</p>
   */
  CWPScope?: number
  /**
   * <p>指定主机列表（CWPScope=0时使用）</p>
   */
  InstanceIDsWithAppId?: Array<InstanceIDWithAppIdItem>
  /**
   * <p>排除主机列表</p>
   */
  ExcludeInstanceIDsWithAppId?: Array<InstanceIDWithAppIdItem>
  /**
   * <p>标签ID列表</p>
   */
  TagIDs?: Array<string>
  /**
   * <p>容器范围：0-指定集群 1-全部集群</p>
   */
  TCSSScope?: number
  /**
   * <p>指定集群列表（TCSSScope=0时使用）</p>
   */
  ClusterIDsWithAppId?: Array<ClusterIDWithAppIdItem>
  /**
   * <p>排除集群列表</p>
   */
  ExcludeClusterIDsWithAppId?: Array<ClusterIDWithAppIdItem>
}

/**
 * 云资源配置检测章节项
 */
export interface ComplianceChapterItem {
  /**
   * <p>菜单ID</p>
   */
  MenuID?: string
  /**
   * <p>条款分类名称</p>
   */
  Name?: string
  /**
   * <p>条款对应章节</p>
   */
  Terms?: Array<ComplianceTermItem>
}

/**
 * 可修复主机信息
 */
export interface VulFixableMachineItem {
  /**
   * <p>漏洞ID列表，按 SupportAutoFix 维度分组：SupportAutoFix=1 时为可修复的漏洞ID，SupportAutoFix=0 时为不可修复的漏洞ID</p>
   */
  VulIds?: Array<number | bigint>
  /**
   * <p>主机实例ID</p>
   */
  InstanceId?: string
  /**
   * <p>主机名称</p>
   */
  MachineName?: string
  /**
   * <p>主机IP</p>
   */
  MachineIp?: string
  /**
   * <p>公网IP</p>
   */
  PublicIp?: string
  /**
   * <p>操作系统类型<br>枚举值：<br>linux：Linux操作系统<br>windows：Windows操作系统</p>
   */
  OsType?: string
  /**
   * <p>操作系统名称</p>
   */
  OsName?: string
  /**
   * <p>主机在线状态<br>枚举值：<br>ONLINE：在线<br>OFFLINE：离线</p>
   */
  MachineStatus?: string
  /**
   * <p>是否支持自动修复<br>枚举值：<br>0：不支持<br>1：支持</p>
   */
  SupportAutoFix?: number
  /**
   * <p>当前修复状态<br>枚举值：<br>0：未修复<br>1：修复中<br>2：修复失败<br>3：修复成功<br>4：修复超时</p>
   */
  FixStatus?: number
  /**
   * <p>最近一次修复时间<br>参数格式：YYYY-MM-DDTHH:mm:ssZ（ISO8601格式）</p>
   */
  LatestFixTime?: string
  /**
   * <p>不可修复原因，SupportAutoFix为0时返回</p>
   */
  NotFixableReason?: string
  /**
   * <p>修复命令列表，SupportAutoFix为1时返回</p>
   */
  FixCommands?: Array<string>
  /**
   * <p>关联组件列表</p>
   */
  Components?: Array<string>
  /**
   * <p>资产标签列表</p>
   */
  TagItems?: Array<MiniTagItem>
  /**
   * <p>所属账号AppId</p>
   */
  AppId?: number
  /**
   * <p>付费版本信息<br>枚举值：<br>BASIC：基础版<br>PRO：专业版<br>ULTIMATE：旗舰版</p>
   */
  PayVersion?: string
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
 * DescribeAIScheduleList返回参数结构体
 */
export interface DescribeAIScheduleListResponse {
  /**
   * <p>AI 定时任务列表。</p>
   */
  ScheduleSet?: Array<AiScheduleInfo>
  /**
   * <p>总条数。</p>
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeCSIPLicenseBindSchedule请求参数结构体
 */
export interface DescribeCSIPLicenseBindScheduleRequest {
  /**
   * <p>ModifyCSIPLicenseBinds返回的任务ID</p>
   */
  TaskId: number
  /**
   * <p>分页大小，默认10</p>
   */
  Limit?: number
  /**
   * <p>分页偏移</p>
   */
  Offset?: number
  /**
   * <p>过滤条件，支持按 Status 过滤（0-初始化 1-成功 2-失败 3-跳过）</p>
   */
  Filters?: Array<LicenseBindFilter>
}

/**
 * DescribeProcessDaemonHost返回参数结构体
 */
export interface DescribeProcessDaemonHostResponse {
  /**
   * <p>总数</p>
   */
  Total?: number
  /**
   * <p>主机列表</p>
   */
  List?: Array<ClientSettingHost>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyDspmIdentifyComplianceGroupStatus返回参数结构体
 */
export interface ModifyDspmIdentifyComplianceGroupStatusResponse {
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
 * ModifyDspmIdentifyCategory请求参数结构体
 */
export interface ModifyDspmIdentifyCategoryRequest {
  /**
   * <p>分类ID</p>
   */
  Id: number
  /**
   * <p>分类名称</p>
   */
  Name: string
  /**
   * <p>集团账号的成员id</p>
   */
  MemberId?: Array<string>
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
 * DescribeAbTestUser返回参数结构体
 */
export interface DescribeAbTestUserResponse {
  /**
   * 是否灰度用户
   */
  AbTestUserList?: Array<AbTestUserItem>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * dspm数据识别分类数据项关联详情
 */
export interface DspmIdentifyCategoryRuleRelateDetailItem {
  /**
   * <p>识别模板ID</p>
   */
  ComplianceId?: number
  /**
   * <p>分类ID</p>
   */
  CategoryId?: number
  /**
   * <p>数据项ID</p>
   */
  RuleId?: number
  /**
   * <p>数据项名称</p>
   */
  RuleName?: string
  /**
   * <p>级别ID</p>
   */
  LevelId?: number
  /**
   * <p>级别名称</p>
   */
  LevelName?: string
}

/**
 * ModifyVulWhitelistSwitch请求参数结构体
 */
export interface ModifyVulWhitelistSwitchRequest {
  /**
   * <p>id列表</p>
   */
  Id?: Array<number | bigint>
  /**
   * <p>集团账号的成员id</p>
   */
  MemberId?: Array<string>
  /**
   * <p>策略开关</p><p>枚举值：</p><ul><li>0： 关闭</li><li>1： 开启</li></ul>
   */
  Switch?: number
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
 * DescribeBaselinePolicyNameExistAppidList返回参数结构体
 */
export interface DescribeBaselinePolicyNameExistAppidListResponse {
  /**
   * <p>AppID 列表</p>
   */
  AppidList?: Array<number | bigint>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * dspm数据识别级别信息
 */
export interface DspmAddIdentifyLevelItem {
  /**
   * <p>级别名称</p>
   */
  LevelName: string
  /**
   * <p>级别敏感程度</p><p>单位：分数</p>
   */
  LevelScore: number
}

/**
 * dspm数据项详情
 */
export interface DspmIdentifyRuleDetail {
  /**
   * <p>数据项id</p>
   */
  RuleId?: number
  /**
   * <p>数据项名称</p>
   */
  RuleName?: string
  /**
   * <p>敏感级别id</p>
   */
  LevelId?: number
  /**
   * <p>敏感级别名称</p>
   */
  LevelName?: string
  /**
   * <p>敏感程度</p>
   */
  LevelScore?: number
}

/**
 * CreateBaselineAggregatedItemExportJob返回参数结构体
 */
export interface CreateBaselineAggregatedItemExportJobResponse {
  /**
   * <p>导出任务ID，异步导出任务唯一标识，用于查询任务状态与获取下载链接。</p>
   */
  JobId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyExposureAutoTagRule请求参数结构体
 */
export interface ModifyExposureAutoTagRuleRequest {
  /**
   * <p>规则名称</p>
   */
  RuleName: string
  /**
   * <p>标签</p>
   */
  Tag: string
  /**
   * <p>规则ID</p>
   */
  RuleID: number
  /**
   * <p>集团账号的成员id</p>
   */
  MemberId?: Array<string>
  /**
   * <p>规则描述</p>
   */
  Description?: string
  /**
   * <p>开启状态</p>
   */
  Enable?: boolean
  /**
   * <p>资产类型</p>
   */
  AssetTypes?: Array<string>
  /**
   * <p>端口</p>
   */
  Ports?: Array<string>
  /**
   * <p>开放状态</p>
   */
  OpenStatuses?: Array<string>
  /**
   * <p>是否立即执行打标</p>
   */
  ApplyNow?: boolean
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
 * 资产过滤配置器
 */
export interface AssetFilterConfig {
  /**
   * <p>查询属性</p>
   */
  Attr?: string
  /**
   * <p>展示</p>
   */
  Label?: string
  /**
   * <p>样式</p>
   */
  Style?: string
  /**
   * <p>值</p>
   */
  Value?: string
  /**
   * <p>英文展示</p>
   */
  LabelEn?: string
  /**
   * <p>资产私有字段过滤器</p>
   */
  Options?: Array<AssetFilterOptions>
}

/**
 * DescribeHostVulOverview请求参数结构体
 */
export interface DescribeHostVulOverviewRequest {
  /**
   * <p>集团账号的成员id</p>
   */
  MemberId?: Array<string>
}

/**
 * DescribeSecurityGroupPolicy请求参数结构体
 */
export interface DescribeSecurityGroupPolicyRequest {
  /**
   * 云厂商
   */
  Provider: string
  /**
   * 资产ID
   */
  AssetID: string
  /**
   * 资产类型
   */
  AssetType: string
  /**
   * <p>集团账号的成员id</p>
   */
  MemberId?: Array<string>
  /**
   * 安全组ID
   */
  SecurityGroupID?: string
}

/**
 * CopyBaselinePolicy请求参数结构体
 */
export interface CopyBaselinePolicyRequest {
  /**
   * <p>被复制的策略ID</p>
   */
  PolicyID: number
  /**
   * <p>复制的目标AppID</p>
   */
  TargetAppIDList: Array<number | bigint>
  /**
   * <p>集团账号的成员id</p>
   */
  MemberId?: Array<string>
}

/**
 * ScanEDRTaskAgain请求参数结构体
 */
export interface ScanEDRTaskAgainRequest {
  /**
   * <p>原任务ID</p>
   */
  TaskId: number
  /**
   * <p>集团账号的成员id</p>
   */
  MemberId?: Array<string>
  /**
   * <p>主机Quuid或ContainerID（详情页单资产重扫时传，为空则全量重扫）</p>
   */
  AssetId?: string
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
 * 日志索引值描述信息
 */
export interface LogValueInfo {
  /**
   * <p>类型</p>
   */
  Type?: string
  /**
   * <p>标签</p>
   */
  Tokenizer?: string
  /**
   * <p>sql标签</p>
   */
  SqlFlag?: boolean
  /**
   * <p>包含中文</p>
   */
  ContainZH?: boolean
  /**
   * <p>别名</p>
   */
  Alias?: string
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
 * DescribeCLSLogListV3请求参数结构体
 */
export interface DescribeCLSLogListV3Request {
  /**
   * <p>开始时间</p>
   */
  From: number
  /**
   * <p>结束时间</p>
   */
  To: number
  /**
   * <p>查询条件</p>
   */
  Query: string
  /**
   * <p>语法</p>
   */
  SyntaxRule: number
  /**
   * <p>主题</p>
   */
  Topics?: Array<LogContextInfo>
  /**
   * <p>集团账号的成员id</p>
   */
  MemberId?: Array<string>
  /**
   * <p>排序</p>
   */
  Sort?: string
  /**
   * <p>limit</p>
   */
  Limit?: number
  /**
   * <p>offset</p>
   */
  Offset?: number
  /**
   * <p>采样</p>
   */
  SamplingRate?: number
  /**
   * <p>是否高亮</p>
   */
  HighLight?: boolean
  /**
   * <p>是否采用新分析</p>
   */
  UseNewAnalysis?: boolean
  /**
   * <p>查询优化</p>
   */
  QueryOptimize?: number
  /**
   * <p>主题id</p>
   */
  TopicId?: string
  /**
   * <p>上下文信息</p>
   */
  Context?: string
  /**
   * <p>查询类型</p>
   */
  SubQueryTypes?: Array<string>
}

/**
 * CreateExposuresExportJob请求参数结构体
 */
export interface CreateExposuresExportJobRequest {
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
 * DescribeDspmIdentifyRuleList请求参数结构体
 */
export interface DescribeDspmIdentifyRuleListRequest {
  /**
   * <p>集团账号的成员id</p>
   */
  MemberId?: Array<string>
  /**
   * <p>筛选项</p>
   */
  Filter?: Filter
}

/**
 * DescribeExposeRiskStatistics返回参数结构体
 */
export interface DescribeExposeRiskStatisticsResponse {
  /**
   * 云边界风险待治理风险
   */
  ExposureRiskStatistics?: Array<DescribeExposureStatisticsItem>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * StartOrModifyProcessDaemon返回参数结构体
 */
export interface StartOrModifyProcessDaemonResponse {
  /**
   * <p>开启失败的机器数</p>
   */
  FailedHostCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 基线风险修复历史记录
 */
export interface BaselineFixRecord {
  /**
   * <p>修复记录主键 ID。</p>
   */
  ID?: number
  /**
   * <p>租户 AppID。</p>
   */
  AppID?: number
  /**
   * <p>被修复的检测项基础信息。</p>
   */
  ItemInfo?: BaselineItem
  /**
   * <p>本次修复涉及的主机资产信息，无数据时为 null。</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  HostInfo?: BaselineHostAsset
  /**
   * <p>集群资产信息，无数据时为 null。</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  ClusterInfo?: BaselineClusterAsset
  /**
   * <p>资产类型：HOST（主机）、CLUSTER（容器集群）。</p>
   */
  AssetType?: string
  /**
   * <p>修复完成时间。</p>
   */
  FixTime?: string
  /**
   * <p>该风险首次被发现的时间。</p>
   */
  DiscoveryTime?: string
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
 * DescribeEdrExcludeNetworkSegments返回参数结构体
 */
export interface DescribeEdrExcludeNetworkSegmentsResponse {
  /**
   * <p>例外网段列表，支持IP/IP段/CIDR格式</p>
   */
  NetworkSegments?: Array<string>
  /**
   * <p>网段数量</p>
   */
  TotalCount?: number
  /**
   * <p>默认网段配置</p>
   */
  DefaultNetworkSegments?: Array<NetworkSegment>
  /**
   * <p>是否修改过</p>
   */
  IsModified?: boolean
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
 * DescribeClusterContainerProcessList请求参数结构体
 */
export interface DescribeClusterContainerProcessListRequest {
  /**
   * <p>容器ID</p>
   */
  ContainerId: string
  /**
   * <p>集团账号的成员id</p>
   */
  MemberId?: Array<string>
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
 * ModifyBaselinePolicy返回参数结构体
 */
export interface ModifyBaselinePolicyResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateAssetFilterView请求参数结构体
 */
export interface CreateAssetFilterViewRequest {
  /**
   * 视图名称
   */
  ViewName: string
  /**
   * <p>集团账号的成员id</p>
   */
  MemberId?: Array<string>
  /**
   * 资产搜索过滤项
   */
  Filters?: Array<Filters>
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
 * ModifyBaselineUserWeakPasswordConf请求参数结构体
 */
export interface ModifyBaselineUserWeakPasswordConfRequest {
  /**
   * <p>弱口令字典原文（明文），允许为空字符串以清空配置。</p>
   */
  UserConf: string
  /**
   * 集团账号场景下的成员账号 Appid 列表。非集团账号或仅查询当前账号时传空。
   */
  MemberId?: Array<string>
}

/**
 * ModifyShareUserCSPM请求参数结构体
 */
export interface ModifyShareUserCSPMRequest {
  /**
   * <p>集团账号的成员id</p>
   */
  MemberId?: Array<string>
  /**
   * 增加共享账号
   */
  SharedAppIDList?: Array<number | bigint>
}

/**
 * VPR解释卡片中的单个维度
 */
export interface VPRExplainDimension {
  /**
   * <p>标签key</p>
   */
  Key?: string
  /**
   * <p>标签名称</p>
   */
  Name?: string
  /**
   * <p>标签子项</p>
   */
  Items?: Array<VPRExplainDimensionItem>
}

/**
 * 漏洞VPR标签
 */
export interface VPRLabel {
  /**
   * <p>标签名称<br>枚举值：<br>IN_THE_WILD：在野利用<br>EXP：有 EXP<br>POC：有 POC<br>INTERNET_EXPOSED：外网暴露<br>NO_RESTART：无需重启<br>HIGH_VALUE_ASSET：重要资产<br>MALWARE_WEAPONIZED：已武器化</p>
   */
  Name?: string
  /**
   * <p>标签等级<br>枚举值：<br>HIGH：高<br>MEDIUM：中<br>LOW：低</p>
   */
  Level?: string
  /**
   * <p>标签说明</p>
   */
  Remark?: string
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
 * DescribeClusterContainerDetail返回参数结构体
 */
export interface DescribeClusterContainerDetailResponse {
  /**
   * <p>主账号AppID</p>
   */
  AppID?: number
  /**
   * <p>容器ID</p>
   */
  ContainerId?: string
  /**
   * <p>容器启动CMD</p>
   */
  Cmd?: string
  /**
   * <p>容器创建时间</p>
   */
  CreateTime?: string
  /**
   * <p>运行状态</p>
   */
  RunStatus?: string
  /**
   * <p>隔离状态</p>
   */
  IsolateStatus?: string
  /**
   * <p>严重风险事件数</p>
   * @deprecated
   */
  RiskEventCriticalCount?: number
  /**
   * <p>高风险事件数</p>
   * @deprecated
   */
  RiskEventHighCount?: number
  /**
   * <p>中风险事件数</p>
   * @deprecated
   */
  RiskEventMiddleCount?: number
  /**
   * <p>低风险事件数</p>
   * @deprecated
   */
  RiskEventLowCount?: number
  /**
   * <p>镜像名称</p>
   */
  ImageName?: string
  /**
   * <p>镜像ID</p>
   */
  ImageId?: string
  /**
   * <p>镜像大小</p>
   */
  ImageSize?: string
  /**
   * <p>镜像创建时间</p>
   */
  ImageCreateTime?: string
  /**
   * <p>节点名称</p>
   */
  NodeName?: string
  /**
   * <p>节点内网IP</p>
   */
  NodeInternalIP?: string
  /**
   * <p>节点运行状态</p>
   */
  NodeRunStatus?: string
  /**
   * <p>挂载信息列表</p>
   */
  Mounts?: Array<ContainerMountItem>
  /**
   * <p>网络名称</p>
   */
  NetworkName?: string
  /**
   * <p>网络模式</p>
   */
  NetworkMode?: string
  /**
   * <p>网络ID</p>
   */
  NetworkId?: string
  /**
   * <p>端点ID</p>
   */
  EndpointId?: string
  /**
   * <p>网关地址</p>
   */
  Gateway?: string
  /**
   * <p>IPv4地址</p>
   */
  IPv4?: string
  /**
   * <p>IPv6地址</p>
   */
  IPv6?: string
  /**
   * <p>MAC地址</p>
   */
  MAC?: string
  /**
   * <p>容器名称</p>
   */
  ContainerName?: string
  /**
   * <p>节点实例ID</p>
   */
  NodeInstanceId?: string
  /**
   * <p>容器关联节点的节点类型</p>
   */
  NodeType?: string
  /**
   * <p>容器关联节点的节点唯一ID</p>
   */
  NodeUniqueID?: string
  /**
   * <p>容器关联集群的集群ca证书md5值，集群的唯一标识</p>
   */
  ClusterCaMD5?: string
  /**
   * <p>容器镜像能否关联到镜像仓库中的记录</p>
   */
  EnableLinkImage?: boolean
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
 * DescribeEdrExportJobDownloadURL返回参数结构体
 */
export interface DescribeEdrExportJobDownloadURLResponse {
  /**
   * <p>COS 预签名下载链接（2 小时有效）</p>
   */
  DownloadUrl?: string
  /**
   * <p>文件名</p>
   */
  FileName?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
 * DescribeCLSLogIndexV3返回参数结构体
 */
export interface DescribeCLSLogIndexV3Response {
  /**
   * <p>主题信息</p>
   */
  TopicIndexInfos?: Array<LogTopicIndexInfo>
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
 * DescribeBaselineSubTaskList请求参数结构体
 */
export interface DescribeBaselineSubTaskListRequest {
  /**
   * <p>基线主任务 ID。</p>
   */
  TaskID: number
  /**
   * <p>集团账号的成员id</p>
   */
  MemberId?: Array<string>
  /**
   * <p>通用过滤条件，支持的字段包括：TaskID（主任务 ID，精确）、Status（子任务状态）、CheckAssetType、InstanceID/ClusterID 等。</p>
   */
  Filters?: Array<Filters>
  /**
   * <p>分页查询每页数量，最大值 100；超过时服务端将自动回退为默认值 10。</p>
   */
  Limit?: number
  /**
   * <p>分页查询起始偏移量，从 0 开始。</p>
   */
  Offset?: number
  /**
   * <p>排序方向，取值 asc（升序）或 desc（降序），默认 desc。</p>
   */
  Order?: string
  /**
   * <p>排序字段名，由具体接口定义可选字段。</p>
   */
  By?: string
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
 * 在策略上对内置检测项做自定义值覆盖的配置项。
 */
export interface BaselineCustomItemConf {
  /**
   * <p>内置检测项规则 ID，与 CustomItemID 二选一传入。</p>
   */
  RuleID: number
  /**
   * <p>用户自定义的判定值列表，需符合检测项 WebEditParam 定义的取值约束。</p>
   */
  CustomValueList: Array<string>
  /**
   * <p>已存在的自定义配置 ID；新增时可不传，编辑时回填。</p>
   */
  CustomItemID: number
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
 * DescribeReverseShellSystemPolicyConfig返回参数结构体
 */
export interface DescribeReverseShellSystemPolicyConfigResponse {
  /**
   * <p>内网告警展示</p>
   */
  InnerNetAlarmShow?: boolean
  /**
   * <p>内网ip展示</p>
   */
  InnerIPShow?: boolean
  /**
   * <p>主机范围</p>
   */
  CWPScope?: number
  /**
   * <p>指定主机instance_id列表</p>
   */
  InstanceIDs?: Array<string>
  /**
   * <p>排除主机instance_id列表</p>
   */
  ExcludeInstanceIDs?: Array<string>
  /**
   * <p>标签ID列表</p>
   */
  TagIDs?: Array<string>
  /**
   * <p>容器范围</p>
   */
  TCSSScope?: number
  /**
   * <p>指定集群ID列表</p>
   */
  ClusterIDs?: Array<string>
  /**
   * <p>排除集群ID列表</p>
   */
  ExcludeClusterIDs?: Array<string>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyAssetTagsByAssetInfo请求参数结构体
 */
export interface ModifyAssetTagsByAssetInfoRequest {
  /**
   * <p>集团账号的成员id</p>
   */
  MemberId?: Array<string>
  /**
   * <p>资产列表</p>
   */
  Assets?: Array<AssetTagModifyAssetItem>
  /**
   * <p>标签ID列表</p>
   */
  TagIDs?: Array<string>
  /**
   * <p>操作类型</p>
   */
  OperationType?: string
}

/**
 * DeleteDspmIdentifyComplianceRuleRelation返回参数结构体
 */
export interface DeleteDspmIdentifyComplianceRuleRelationResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDspmIdentifyRuleTestResult请求参数结构体
 */
export interface DescribeDspmIdentifyRuleTestResultRequest {
  /**
   * <p>规则类型</p><p>枚举值：</p><ul><li>structured： 结构化规则</li><li>unstructrued： 非结构化规则</li></ul>
   */
  RuleType: string
  /**
   * <p>规则内容</p>
   */
  RuleContent?: string
  /**
   * <p>数据项id</p>
   */
  RuleId?: number
  /**
   * <p>集团账号的成员id</p>
   */
  MemberId?: Array<string>
  /**
   * <p>结构化测试内容</p>
   */
  StructuredTestContent?: Array<DspmIdentifyRuleStructuredTestItem>
  /**
   * <p>非结构化测试内容</p>
   */
  UnStructuredTestContent?: string
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
 * 导出任务信息
 */
export interface ExportJobItem {
  /**
   * 任务ID
   */
  JobID?: string
  /**
   * 任务名称
   */
  JobName?: string
  /**
   * 任务来源
   */
  Source?: string
  /**
   * 任务状态
   */
  ExportJobStatus?: string
  /**
   * 任务进度
   */
  ExportProgress?: number
  /**
   * 错误信息
   */
  FailureMsg?: string
  /**
   * 任务超时时间
   */
  Timeout?: string
  /**
   * 任务创建时间
   */
  InsertTime?: string
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
 * DescribeLoginWhiteCombinedList请求参数结构体
 */
export interface DescribeLoginWhiteCombinedListRequest {
  /**
   * <p>集团账号的成员id</p>
   */
  MemberId?: Array<string>
  /**
   * <p>需要返回的数量，默认为10，最大值为100</p>
   */
  Limit?: number
  /**
   * <p>偏移量，默认为0。</p>
   */
  Offset?: number
  /**
   * <p>过滤条件。IpOrAlias - String - 是否必填：否 - 主机ip或别名筛选UserName - String - 是否必填：否 - 用户名筛选SrcIP - String - 是否必填：否 - 来源IP筛选Location - String - 是否必填：否 - 登录地筛选ModifyBeginTime - String - 是否必填：否 - 按照修改时间段筛选，开始时间ModifyEndTime - String - 是否必填：否 - 按照修改时间段筛选，结束时间</p>
   */
  Filters?: Array<EDRFilter>
}

/**
 * DescribeVulRiskRelateComponent请求参数结构体
 */
export interface DescribeVulRiskRelateComponentRequest {
  /**
   * <p>漏洞 ID（vul_vuls.id）</p>
   */
  VulID: number
  /**
   * <p>集团账号的成员id</p>
   */
  MemberId?: Array<string>
  /**
   * <p>筛选条件数组，多条件之间为 AND 关系<br>支持的 Filter.Name：<br>Keyword：关键字模糊搜索（对组件名称模糊匹配）</p>
   */
  Filters?: Array<Filters>
}

/**
 * CreateCSIPManualMalwareScan请求参数结构体
 */
export interface CreateCSIPManualMalwareScanRequest {
  /**
   * <p>扫描模式：0=全盘扫描 / 1=快速扫描，与 cwp_malware Scan RPC 的 scan_type 字段语义一致</p>
   */
  ScanPattern: number
  /**
   * <p>生效范围档位：0=指定主机（ScopeSpecified） / 1=全选 CSIP 付费机器（ScopeAll）。旧前端不传时零值默认 0，保持兼容</p>
   */
  Scope: number
  /**
   * <p>集团账号的成员id</p>
   */
  MemberId?: Array<string>
  /**
   * <p>是否启用内存马扫描（0/1），透传给 cwp_malware</p>
   */
  EnableMemShellScan?: number
  /**
   * <p>单机扫描超时秒数；&lt;=0 时取默认 3600</p>
   */
  Timeout?: number
  /**
   * <p>多账号体系目标 AppId 列表；为空时 fallback 到 [req.AppID]（仅自身）。无论 Scope=0/1，均经过 csip.ValidateTargetAppIDsViaCSIP 校验</p>
   */
  TargetAppIDs?: Array<number | bigint>
  /**
   * <p>扫描引擎类型，cloudapi 层透传给 cwp_malware，不持久化到主表，引擎模式 1标准模式 2增强模式 3严格模式枚举值：1： 标准模式2： 增强模式3： 严格模式</p>
   */
  EngineType?: number
  /**
   * <p>指定机器列表，实例ID版本</p>
   */
  InstanceIDsWithAppId?: Array<InstanceIDWithAppIdItem>
  /**
   * <p>全选时候排除的机器，实例ID版本</p>
   */
  ExcludeInstanceIDsWithAppId?: Array<InstanceIDWithAppIdItem>
}

/**
 * DescribeDspmSyncUsersStatus请求参数结构体
 */
export type DescribeDspmSyncUsersStatusRequest = null

/**
 * DescribeLighthouseFirewallRules返回参数结构体
 */
export interface DescribeLighthouseFirewallRulesResponse {
  /**
   * <p>防火墙规则列表</p>
   */
  FirewallRules?: Array<LighthouseFirewallRule>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 通知资产范围配置项
 */
export interface NotifyAssetConfigItem {
  /**
   * <p>模块名</p>
   */
  Module: string
  /**
   * <p>子模块</p>
   */
  SubModule: string
  /**
   * <p>资产范围</p><p>枚举值：</p><ul><li>0： 无含义</li><li>1： 全部</li><li>2： 自选</li><li>3： 按标签</li></ul>
   */
  AssetRange: number
  /**
   * <p>选中的实例ID</p>
   */
  InstanceIds?: Array<string>
  /**
   * <p>剔除的实例ID</p>
   */
  ExcludedInstanceIds?: Array<string>
  /**
   * <p>标签ID</p>
   */
  TagIds?: Array<number | bigint>
  /**
   * <p>云标签</p>
   */
  CloudTags?: Array<string>
  /**
   * <p>总数</p>
   */
  TotalCount?: number
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
 * CreateDspmIdentifyRule返回参数结构体
 */
export interface CreateDspmIdentifyRuleResponse {
  /**
   * <p>数据项id</p>
   */
  Id?: number
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
 * DescribeCustomRiskRules请求参数结构体
 */
export interface DescribeCustomRiskRulesRequest {
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
 * DescribeDspmDictionaryList返回参数结构体
 */
export interface DescribeDspmDictionaryListResponse {
  /**
   * <p>结果集</p>
   */
  DataSet?: Array<DspmDictionary>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeMalwareTimingScanSetting返回参数结构体
 */
export interface DescribeMalwareTimingScanSettingResponse {
  /**
   * <p>定时检测开关 0 关闭1 开启</p>
   */
  EnableScan?: number
  /**
   * <p>周期 1每天</p>
   */
  Cycle?: number
  /**
   * <p>检测周期 开始时间</p>
   */
  StartTime?: string
  /**
   * <p>检测周期 超时结束时间</p>
   */
  EndTime?: string
  /**
   * <p>检测模式</p>
   */
  ScanType?: string
  /**
   * <p>自选路径列表</p>
   */
  CustomPaths?: Array<string>
  /**
   * <p>资产选择方式</p>
   */
  AssetSelectionType?: string
  /**
   * <p>标签ID数组</p>
   */
  TagIds?: Array<string>
  /**
   * <p>直接选择的主机列表</p>
   */
  InstanceIDsWithAppId?: Array<InstanceIDWithAppIdItem>
  /**
   * <p>排除的主机列表</p>
   */
  ExcludeInstanceIDsWithAppId?: Array<InstanceIDWithAppIdItem>
  /**
   * <p>直接选择的集群列表</p>
   */
  ClusterIDsWithAppId?: Array<ClusterIDWithAppIdItem>
  /**
   * <p>排除的集群列表</p>
   */
  ExcludeClusterIDsWithAppId?: Array<ClusterIDWithAppIdItem>
  /**
   * <p>实时监控0 关闭 1开启</p>
   */
  RealTimeMonitoring?: number
  /**
   * <p>监控模式 0 标准 1深度</p>
   */
  MonitoringPattern?: number
  /**
   * <p>实时监控自定义路径列表</p>
   */
  MonitorCustomPaths?: Array<string>
  /**
   * <p>1标准模式（只报严重、高危）、2增强模式（报严重、高危、中危）、3严格模式（报严重、高、中、低、提示）</p>
   */
  EngineType?: number
  /**
   * <p>启发引擎 0 关闭 1开启</p>
   */
  EnableInspiredEngine?: number
  /**
   * <p>是否开启恶意进程查杀[0:未开启,1:开启]</p>
   */
  EnableMemShellScan?: number
  /**
   * <p>是否自动隔离：1-是，0-否</p>
   */
  AutoIsolation?: number
  /**
   * <p>是否杀掉进程 1杀掉 0不杀掉 只有开启自动隔离才生效</p>
   */
  KillProcess?: number
  /**
   * <p>执行清理开关 0未开启 1开启</p>
   */
  DoClean?: number
  /**
   * <p>防护模式 0 标准 1 重保</p>
   */
  ProtectMode?: number
  /**
   * <p>查杀范围 0 脚本类之外的恶意文件，1全部恶意文件</p>
   */
  ProtectFileScope?: number
  /**
   * <p>隔离资产选择</p>
   */
  QuaraAssetSelectionType?: string
  /**
   * <p>隔离标签ID数组</p>
   */
  QuaraTagIds?: Array<string>
  /**
   * <p>隔离直接选择的主机</p>
   */
  QuaraInstanceIDsWithAppId?: Array<InstanceIDWithAppIdItem>
  /**
   * <p>隔离排除的主机</p>
   */
  QuaraExcludeInstanceIDsWithAppId?: Array<InstanceIDWithAppIdItem>
  /**
   * <p>隔离直接选择的集群</p>
   */
  QuaraClusterIDsWithAppId?: Array<ClusterIDWithAppIdItem>
  /**
   * <p>隔离排除的集群</p>
   */
  QuaraExcludeClusterIDsWithAppId?: Array<ClusterIDWithAppIdItem>
  /**
   * <p>超时时长（秒）</p>
   */
  Timeout?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 云上原生标签键值对。
 */
export interface Tag {
  /**
   * 标签键。
   */
  Name: string
  /**
   * 标签值。
   */
  Value: string
}

/**
 * DescribeCSIPMalwareScanTaskDetail返回参数结构体
 */
export interface DescribeCSIPMalwareScanTaskDetailResponse {
  /**
   * <p>总数</p>
   */
  TotalCount?: number
  /**
   * <p>列表</p>
   */
  List?: Array<CSIPMalwareScanUuidDetailItem>
  /**
   * <p>扫描开始时间，格式 2006-01-02 15:04:05</p>
   */
  ScanBeginTime?: string
  /**
   * <p>扫描结束时间，格式 2006-01-02 15:04:05，扫描未完成时为空字符串</p>
   */
  ScanEndTime?: string
  /**
   * <p>扫描机器总数</p>
   */
  ScanMachineCount?: number
  /**
   * <p>影响机器数（有风险的机器数）</p>
   */
  RiskMachineCount?: number
  /**
   * <p>扫描内容，0-全盘扫描 1-快速扫描</p>
   */
  ScanContent?: Array<string>
  /**
   * <p>任务类型，0-一键扫描 1-定时扫描 2-重新扫描</p>
   */
  Type?: number
  /**
   * <p>预估剩余扫描时间（分钟），扫描完成时为0</p>
   */
  ScanLeftTime?: number
  /**
   * <p>是否所有机器正在停止中，true表示停止中</p>
   */
  StoppingAll?: boolean
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeCFGRiskStatistics请求参数结构体
 */
export interface DescribeCFGRiskStatisticsRequest {
  /**
   * <p>集团账号的成员id</p>
   */
  MemberId?: Array<string>
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
 * 镜像ID和对应的appid账号信息
 */
export interface ImageIDWithAppIdItem {
  /**
   * <p>账号ID</p>
   */
  AppId?: number
  /**
   * <p>容器镜像ID</p>
   */
  ImageID?: string
}

/**
 * 告警对应的多攻击阶段
 */
export interface MultiAttackStageItem {
  /**
   * <p>表id</p>
   */
  Id?: number
  /**
   * <p>APPID</p>
   */
  AppId?: number
  /**
   * <p>告警ID</p>
   */
  AlertId?: string
  /**
   * <p>攻击阶段列表</p>
   */
  AttackStages?: Array<string>
}

/**
 * DescribeBaselineAggregatedItemList返回参数结构体
 */
export interface DescribeBaselineAggregatedItemListResponse {
  /**
   * <p>检测项聚合结果列表。</p>
   */
  List?: Array<BaselineAggregatedItem>
  /**
   * <p>凭据总数</p>
   */
  TotalCount?: number
  /**
   * <p>当前查询条件下涉及到的检测对象列表。</p>
   */
  CheckObjectEnum?: Array<KeyValue>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
 * DescribeAssetDetail返回参数结构体
 */
export interface DescribeAssetDetailResponse {
  /**
   * <p>动态tab配置</p>
   */
  DynamicTabs?: Array<DynamicTab>
  /**
   * <p>基础tab项</p>
   */
  DetailTabs?: Array<string>
  /**
   * <p>资产详情信息</p>
   */
  AssetDetail?: AssetDetailItem
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
 * ModifyCosAuditMonitorAccount返回参数结构体
 */
export interface ModifyCosAuditMonitorAccountResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeKBUpdatableMachineList返回参数结构体
 */
export interface DescribeKBUpdatableMachineListResponse {
  /**
   * <p>可更新补丁主机列表</p>
   */
  Data?: Array<KBUpdateMachineItem>
  /**
   * <p>总数量</p>
   */
  TotalCount?: number
  /**
   * <p>可一键修复的主机数量</p>
   */
  FixableCount?: number
  /**
   * <p>不可一键修复的主机数量</p>
   */
  NotFixableCount?: number
  /**
   * <p>KB补丁维度汇总信息，展示被修复的补丁列表概要</p>
   */
  KBSummary?: Array<KBFixSummaryItem>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeCustomAssetTagCount请求参数结构体
 */
export interface DescribeCustomAssetTagCountRequest {
  /**
   * <p>集团账号的成员id</p>
   */
  MemberId?: Array<string>
}

/**
 * 主机登录方式
 */
export interface MachineLoginType {
  /**
   * <p>实例ID</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  InstanceId?: string
  /**
   * <p>主机Quuid</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Quuid?: string
  /**
   * <p>登录方式：0-原始登录方式，1-扫码免密登录，2-开启扫码中，3-关闭扫码中</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  LoginType?: number
}

/**
 * DescribeBanMode返回参数结构体
 */
export interface DescribeBanModeResponse {
  /**
   * <p>阻断模式，STANDARD_MODE：标准阻断，DEEP_MODE：深度阻断</p>
   */
  Mode?: string
  /**
   * <p>标准阻断模式的配置</p>
   */
  StandardModeConfig?: StandardModeConfig
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
 * ModifyBaselineUserOtherConf返回参数结构体
 */
export interface ModifyBaselineUserOtherConfResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyWebhookPolicyStatus请求参数结构体
 */
export interface ModifyWebhookPolicyStatusRequest {
  /**
   * 策略 ID
   */
  ID: number
  /**
   * 目标状态
枚举值：
ON：启用
OFF：禁用
   */
  Status: string
}

/**
 * DownloadDspmExportLog返回参数结构体
 */
export interface DownloadDspmExportLogResponse {
  /**
   * <p>下载URL</p>
   */
  Url?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeBaselineAggregatedPolicyList请求参数结构体
 */
export interface DescribeBaselineAggregatedPolicyListRequest {
  /**
   * <p>集团账号的成员id</p>
   */
  MemberId?: Array<string>
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
   * <p>集团账号的成员id</p>
   */
  MemberId?: Array<string>
  /**
   * 筛选项
   */
  Filter?: Filter
}

/**
 * 基线系统子分类（含其下全部内置检测项 ID 列表）。
 */
export interface BaselineSubCategory {
  /**
   * <p>子分类基础信息。</p>
   */
  Category?: BaselineCategory
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
 * DescribeNotifyAgentOfflineDuration请求参数结构体
 */
export type DescribeNotifyAgentOfflineDurationRequest = null

/**
 * CreateVulRisksExportJob请求参数结构体
 */
export interface CreateVulRisksExportJobRequest {
  /**
   * 云账号ID
   */
  CloudAccountID: string
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
 * CreateAssetProcessExportJob返回参数结构体
 */
export interface CreateAssetProcessExportJobResponse {
  /**
   * 导出任务ID
   */
  JobId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeClusterContainerDetail请求参数结构体
 */
export interface DescribeClusterContainerDetailRequest {
  /**
   * <p>容器ID</p>
   */
  ContainerId: string
  /**
   * <p>集团账号的成员id</p>
   */
  MemberId?: Array<string>
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
 * DescribeCWPTaskDuration请求参数结构体
 */
export interface DescribeCWPTaskDurationRequest {
  /**
   * 需要执行任务的主机数
   */
  UuidCnt: number
  /**
   * 是否定时扫描
   */
  TimingScan?: boolean
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
 * EDR任务列表
 */
export interface EDRExportJobItem {
  /**
   * <p>任务ID</p>
   */
  JobId?: string
  /**
   * <p>任务名</p>
   */
  JobName?: string
  /**
   * <p>数据源</p>
   */
  Source?: string
  /**
   * <p>导出状态</p>
   */
  ExportStatus?: string
  /**
   * <p>导出进度</p>
   */
  ExportProgress?: number
  /**
   * <p>失败信息</p>
   */
  FailureMsg?: string
  /**
   * <p>超时时间</p>
   */
  Timeout?: string
  /**
   * <p>插入时间</p>
   */
  InsertTime?: string
}

/**
 * DescribeEdrExportJobList返回参数结构体
 */
export interface DescribeEdrExportJobListResponse {
  /**
   * <p>下载文件数量</p>
   */
  TotalCount?: number
  /**
   * <p>下载文件信息</p>
   */
  List?: Array<EDRExportJobItem>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * dspm资产数据识别统计信息
 */
export interface DspmAssetIdentifyInfo {
  /**
   * <p>资产实例id</p>
   */
  AssetId?: string
  /**
   * <p>资产名称</p>
   */
  AssetName?: string
  /**
   * <p>资产类型</p><p>枚举值：</p><ul><li>cdb： MySQL</li><li>mariadb： MariaDB</li><li>mongodb： MongoDB</li></ul>
   */
  AssetType?: string
  /**
   * <p>已检出数据库数量</p>
   */
  DetectedDbCount?: number
  /**
   * <p>已检出表数量</p>
   */
  DetectedTableCount?: number
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
   * <p>最高级别ID</p>
   */
  LevelId?: number
  /**
   * <p>最高级别名称</p>
   */
  LevelName?: string
  /**
   * <p>级别敏感程度</p>
   */
  LevelScore?: number
  /**
   * <p>检出时间</p>
   */
  DetectedTime?: string
  /**
   * <p>分类详情</p>
   */
  CategoryDetails?: Array<DspmIdentifyCategoryDetail>
  /**
   * <p>APPID</p>
   */
  AppId?: number
  /**
   * <p>账号名称</p>
   */
  NickName?: string
  /**
   * <p>账号ID</p>
   */
  Uin?: string
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
 * DeleteMachineClearHistory返回参数结构体
 */
export interface DeleteMachineClearHistoryResponse {
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
 * CreateAssetSyncTask返回参数结构体
 */
export interface CreateAssetSyncTaskResponse {
  /**
   * 资产同步任务ID集合
   */
  TaskIDs?: Array<string>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 日志全文索引信息
 */
export interface LogFullTextInfo {
  /**
   * <p>大小写敏感</p>
   */
  CaseSensitive?: boolean
  /**
   * <p>token</p>
   */
  Tokenizer?: string
  /**
   * <p>包含中文</p>
   */
  ContainZH?: boolean
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
 * CSIP扫描任务主机额外资产信息
 */
export interface CSIPMachineExtraInfo {
  /**
   * <p>公网IP</p>
   */
  WanIP?: string
  /**
   * <p>内网IP</p>
   */
  PrivateIP?: string
  /**
   * <p>实例ID（CVM/BM/ECM唯一标识）</p>
   */
  InstanceID?: string
}

/**
 * ModifyMalwareTimingScanSettings请求参数结构体
 */
export interface ModifyMalwareTimingScanSettingsRequest {
  /**
   * <p>扫描周期 默认每天 1</p>
   */
  Cycle: number
  /**
   * <p>检测周期 开始时间，如：02:00:00</p>
   */
  StartTime: string
  /**
   * <p>检测周期 超时结束时间，如：04:00:00</p>
   */
  EndTime: string
  /**
   * <p>集团账号的成员id</p>
   */
  MemberId?: Array<string>
  /**
   * <p>定时检测开关 0 关闭 1开启</p>
   */
  EnableScan?: number
  /**
   * <p>检测模式：full/quick/include/exclude</p>
   */
  ScanType?: string
  /**
   * <p>自选路径列表（ScanType=include/exclude时必填，最多100条）</p>
   */
  CustomPaths?: Array<string>
  /**
   * <p>资产选择方式：all/tag/direct</p>
   */
  AssetSelectionType?: string
  /**
   * <p>按标签选择时的标签ID数组</p>
   */
  TagIds?: Array<string>
  /**
   * <p>直接选择的主机列表</p>
   */
  InstanceIDsWithAppId?: Array<InstanceIDWithAppIdItem>
  /**
   * <p>排除的主机列表</p>
   */
  ExcludeInstanceIDsWithAppId?: Array<InstanceIDWithAppIdItem>
  /**
   * <p>直接选择的集群列表</p>
   */
  ClusterIDsWithAppId?: Array<ClusterIDWithAppIdItem>
  /**
   * <p>排除的集群列表</p>
   */
  ExcludeClusterIDsWithAppId?: Array<ClusterIDWithAppIdItem>
  /**
   * <p>实时监控 0 关闭 1开启</p>
   */
  RealTimeMonitoring?: number
  /**
   * <p>监控模式 0 标准 1深度</p>
   */
  MonitoringPattern?: number
  /**
   * <p>实时监控自定义路径列表（MonitoringPattern=2或3时必填，最多100条）</p>
   */
  MonitorCustomPaths?: Array<string>
  /**
   * <p>1标准模式（只报严重、高危）、2增强模式（报严重、高危、中危）、3严格模式（报严重、高、中、低、提示）</p>
   */
  EngineType?: number
  /**
   * <p>启发引擎开关 0 关闭 1开启</p>
   */
  EnableInspiredEngine?: number
  /**
   * <p>是否开启恶意进程查杀[0:未开启,1:开启]</p>
   */
  EnableMemShellScan?: number
  /**
   * <p>是否自动隔离 1隔离 0 不隔离</p>
   */
  AutoIsolation?: number
  /**
   * <p>是否杀掉进程 1杀掉 0不杀掉</p>
   */
  KillProcess?: number
  /**
   * <p>1 清理, 0 不清理本操作会修复被篡改的系统命令，计划任务等系统文件，操作中请确保yum/apt 可用</p>
   */
  DoClean?: number
  /**
   * <p>防护模式 0 标准 1重保</p>
   */
  ProtectMode?: number
  /**
   * <p>查杀范围 0 脚本类之外的恶意文件，1全部恶意文件</p>
   */
  ProtectFileScope?: number
  /**
   * <p>隔离资产选择：all/tag/direct</p>
   */
  QuaraAssetSelectionType?: string
  /**
   * <p>隔离按标签选择时的tagId数组</p>
   */
  QuaraTagIds?: Array<string>
  /**
   * <p>隔离直接选择的主机</p>
   */
  QuaraInstanceIDsWithAppId?: Array<InstanceIDWithAppIdItem>
  /**
   * <p>隔离排除的主机</p>
   */
  QuaraExcludeInstanceIDsWithAppId?: Array<InstanceIDWithAppIdItem>
  /**
   * <p>隔离直接选择的集群</p>
   */
  QuaraClusterIDsWithAppId?: Array<ClusterIDWithAppIdItem>
  /**
   * <p>隔离排除的集群</p>
   */
  QuaraExcludeClusterIDsWithAppId?: Array<ClusterIDWithAppIdItem>
  /**
   * <p>超时时长（秒）</p>
   */
  Timeout?: number
}

/**
 * CreateDspmIdentifyComplianceCategoryRelation返回参数结构体
 */
export interface CreateDspmIdentifyComplianceCategoryRelationResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeRaspLicenseList返回参数结构体
 */
export interface DescribeRaspLicenseListResponse {
  /**
   * 总条数
   */
  TotalCount?: number
  /**
   * 数组对象
   */
  List?: Array<RaspLicenseList>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * OperateRiskRulePolicy返回参数结构体
 */
export interface OperateRiskRulePolicyResponse {
  /**
   * 自定义风险规则返回信息
   */
  Message?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeClusterNodeList请求参数结构体
 */
export interface DescribeClusterNodeListRequest {
  /**
   * <p>集群资产 id</p>
   * @deprecated
   */
  ClusterAssetId?: string
  /**
   * <p>集团账号的成员id</p>
   */
  MemberId?: Array<string>
  /**
   * <p>通用过滤条件列表。支持的过滤字段：<br>NodeName：节点名称，模糊匹配。<br>NodeId：节点ID，精确匹配。<br>NodeUniqueID：节点唯一ID，精确匹配（NodeAssetID 为等价别名）。<br>NodeType：节点类型，精确匹配。取值：SUPER（超级节点）、MASTER（主节点）、WORKER（工作节点）。<br>RunStatus：节点运行状态，精确匹配。<br>InternalIP：内网IP，精确匹配。<br>ClientStatus：客户端状态，精确匹配。取值：ONLINE（在线）、OFFLINE（离线）、UNINSTALL（未安装）。</p>
   */
  Filter?: Filter
  /**
   * <p>集群ca证书md5值，集群的唯一标识</p>
   */
  ClusterCaMD5?: string
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
 * DescribeAIScheduleStats请求参数结构体
 */
export type DescribeAIScheduleStatsRequest = null

/**
 * DescribeTaskPredictCostQuota请求参数结构体
 */
export interface DescribeTaskPredictCostQuotaRequest {
  /**
   * <p>任务模式</p>
   */
  TaskMode?: number
  /**
   * <p>集团账号的成员id</p>
   */
  MemberId?: Array<string>
  /**
   * <p>自定义规则列表</p>
   */
  RuleIDs?: Array<string>
  /**
   * <p>规范ID</p>
   */
  StandardIDs?: Array<number | bigint>
}

/**
 * DescribeVulHostRelateComponent返回参数结构体
 */
export interface DescribeVulHostRelateComponentResponse {
  /**
   * <p>受该组件影响的主机列表</p>
   */
  List?: Array<HostVulComponent>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteDspmIdentifyComplianceGroup请求参数结构体
 */
export interface DeleteDspmIdentifyComplianceGroupRequest {
  /**
   * <p>识别模板ID集合</p>
   */
  Ids: Array<number | bigint>
  /**
   * <p>集团账号的成员id</p>
   */
  MemberId?: Array<string>
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
 * OperateRisk返回参数结构体
 */
export interface OperateRiskResponse {
  /**
   * <p>风险操作返回信息</p>
   */
  Message?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
 * StopEDRScanTask返回参数结构体
 */
export interface StopEDRScanTaskResponse {
  /**
   * <p>任务ID</p>
   */
  TaskId?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeRiskScanCronConfig返回参数结构体
 */
export interface DescribeRiskScanCronConfigResponse {
  /**
   * <p>风险扫描周期配置</p>
   */
  CronConfig?: RiskCronConfig
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeSecurityScoreOverview请求参数结构体
 */
export interface DescribeSecurityScoreOverviewRequest {
  /**
   * <p>集团账号的成员id</p>
   */
  MemberId?: Array<string>
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
 * 集群定位信息
 */
export interface ClusterIDWithAppIdItem {
  /**
   * 集群ID
   */
  ClusterID: string
  /**
   * 集群所属AppId
   */
  AppId: number
}

/**
 * ModifyBanMode请求参数结构体
 */
export interface ModifyBanModeRequest {
  /**
   * <p>阻断模式，STANDARD_MODE：标准阻断，DEEP_MODE：深度阻断</p>
   */
  Mode: string
  /**
   * <p>集团账号的成员id</p>
   */
  MemberId?: Array<string>
  /**
   * <p>阻断时间，用于标准阻断模式</p>
   */
  Ttl?: number
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
 * 资产类型以及存在风险的资产类型数量
 */
export interface AssetTypeStatisticsInfo {
  /**
   * <p>资产类型数量</p>
   */
  AssetTypeCount?: number
  /**
   * <p>存在风险的资产类型数量</p>
   */
  RiskAssetTypeCount?: number
}

/**
 * DescribeAIScheduleTaskDetail返回参数结构体
 */
export interface DescribeAIScheduleTaskDetailResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeNotifySettingAlert返回参数结构体
 */
export interface DescribeNotifySettingAlertResponse {
  /**
   * <p>通知配置</p>
   */
  Settings?: Array<NotifySetting>
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
 * DisableAISchedule返回参数结构体
 */
export interface DisableAIScheduleResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeExposeRisks返回参数结构体
 */
export interface DescribeExposeRisksResponse {
  /**
   * 边界待处理风险列表
   */
  ExposeRiskList?: Array<ExposeRiskItem>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 维度趋势数据
 */
export interface DimensionTrendData {
  /**
   * 维度ID
枚举值：
risk_governance：风险治理
threat_detection：威胁检测
   */
  DimensionId?: string
  /**
   * 每日数据点
   */
  DataPoints?: Array<TrendDataPoint>
}

/**
 * DescribeDefaultSecurityScoreRule返回参数结构体
 */
export interface DescribeDefaultSecurityScoreRuleResponse {
  /**
   * <p>内置默认规则列表</p>
   */
  Rules?: Array<ScoreRuleItem>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeBaselineItemRiskList返回参数结构体
 */
export interface DescribeBaselineItemRiskListResponse {
  /**
   * <p>检测项风险记录列表。</p>
   */
  List?: Array<BaselineItemRiskRecord>
  /**
   * <p>凭据总数</p>
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyMachinesLoginType返回参数结构体
 */
export interface ModifyMachinesLoginTypeResponse {
  /**
   * <p>任务ID</p>
   */
  TaskId?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeClusterContainerPortList返回参数结构体
 */
export interface DescribeClusterContainerPortListResponse {
  /**
   * <p>匹配总数</p>
   */
  TotalCount?: number
  /**
   * <p>端口列表</p>
   */
  List?: Array<ContainerPortItem>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeCloudFunctionList返回参数结构体
 */
export interface DescribeCloudFunctionListResponse {
  /**
   * 云函数数量
   */
  TotalCount?: number
  /**
   * 云函数列表
   */
  FunctionList?: Array<CloudFunctionItem>
  /**
   * 地域列表选项
   */
  RegionList?: Array<AttributeOptionSet>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyNotifySetting请求参数结构体
 */
export interface ModifyNotifySettingRequest {
  /**
   * <p>通知模块</p><p>枚举值：</p><ul><li>AkSk： 云API风险治理</li><li>Alert： 告警中心</li><li>Agent： 客户端</li></ul>
   */
  Module?: string
  /**
   * <p>通知设置模式</p><p>枚举值：</p><ul><li>0： 标准模式</li><li>1： 高级模式</li></ul>
   */
  Mode?: number
  /**
   * <p>通知状态</p><p>枚举值：</p><ul><li>0： 通知关闭</li><li>1： 通知开启</li></ul>
   */
  Status?: number
  /**
   * <p>通知开始时间</p><p>参数格式：hh:mm:ss</p>
   */
  BeginTime?: string
  /**
   * <p>通知结束时间</p><p>参数格式：hh:mm:ss</p>
   */
  EndTime?: string
  /**
   * <p>通知选项</p><p>枚举值：</p><ul><li>CRITICAL： 告警等级：严重</li><li>HIGH： 告警等级：高危</li><li>MEDIUM： 告警等级：中危</li><li>LOW： 告警等级：低危</li><li>INFO： 告警等级：提醒</li><li>AGENT_UNINSTALL： 客户端卸载</li><li>AGENT_OFFLINE： 客户端离线</li></ul>
   */
  Option?: Array<string>
}

/**
 * CreateAssetProcessExportJob请求参数结构体
 */
export interface CreateAssetProcessExportJobRequest {
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
 * SCF 函数精简信息
 */
export interface SCFFunctionInfo {
  /**
   * 函数 ID
参数格式：形如 lam-xxxxxxxx
   */
  FunctionId?: string
  /**
   * 函数名称
   */
  FunctionName?: string
  /**
   * 命名空间
   */
  Namespace?: string
  /**
   * 函数状态
枚举值：
Active：可用
Creating：创建中
Updating：更新中
CreateFailed：创建失败
Deleting：删除中
   */
  Status?: string
  /**
   * 函数类型
枚举值：
Event：事件函数（当前接口仅返回该类型）
   */
  Type?: string
}

/**
 * DescribeVulScanTaskDetail请求参数结构体
 */
export interface DescribeVulScanTaskDetailRequest {
  /**
   * <p>任务id</p>
   */
  Id: number
  /**
   * <p>集团账号的成员id</p>
   */
  MemberId?: Array<string>
  /**
   * <p>过滤条件，支持以下 Name：</p><li>InstanceId - 资产实例 ID，精确匹配</li><li>InstanceName - 资产实例名称，模糊匹配（ExactMatch=1 时精确匹配）</li><li>Ip - 资产 IP 地址，精确匹配</li><li>Status - 扫描状态，精确匹配</li>
   */
  Filters?: Array<Filters>
  /**
   * <p>分页大小，默认 10，最大 100</p>
   */
  Limit?: number
  /**
   * <p>分页偏移，从 0 开始</p>
   */
  Offset?: number
  /**
   * <p>排序方向：asc（升序）/ desc（降序），默认 desc</p>
   */
  Order?: string
  /**
   * <p>排序字段，默认按创建时间（CreateTime）排序</p>
   */
  By?: string
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
 * DescribeCspmShardConfig请求参数结构体
 */
export type DescribeCspmShardConfigRequest = null

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
 * EDR-策略内容
 */
export interface EDRRule {
  /**
   * <p>策略ID</p>
   */
  RuleID?: string
  /**
   * <p>策略类型，0-系统策略/System Rule, 1-自定义策略/Custom Rule</p>
   */
  RuleType?: number
  /**
   * <p>策略名称</p>
   */
  Name?: string
  /**
   * <p>策略描述</p>
   */
  Description?: string
  /**
   * <p>内容类型 / Content Type: md5-文件MD5/File MD5, cmdline-命令行/Command Line, dns-DNS, ip_inbound-入站IP/Inbound IP, ip_outbound-出站IP/Outbound IP, custom_file-自定义文件/Custom File, process_network-进程网络/Process Network</p>
   */
  ContentType?: string
  /**
   * <p>执行动作 / Action: 0-告警/Alert, 1-放行/Allow, 2-告警并拦截/Alert and Block</p>
   */
  Action?: number
  /**
   * <p>告警等级 / Alert Level: 0-无/None, 1-高危/High, 2-中危/Medium, 3-低危/Low, 4-提示/Reminder</p>
   */
  Level?: number
  /**
   * <p>检测模式 / Detect Mode: 0-精准/Precise, 1-均衡/Balanced, 2-深度/Deep</p>
   */
  DetectMode?: number
  /**
   * <p>检测方式 / Detect Type: 0-主机检测/Host Detection, 1-网络检测/Network Detection</p>
   */
  DetectType?: number
  /**
   * <p>攻击阶段</p>
   */
  AttackStage?: string
  /**
   * <p>主机生效资产范围 / Effective Scope: 0-指定主机/Specified Hosts, 1-全部主机/All Hosts, 2-专业版/Professional, 3-旗舰版/Flagship, 4-专业版+旗舰版/Professional+Flagship</p>
   */
  CWPScope?: number
  /**
   * <p>主机运行时的自选主机</p>
   */
  QUUIDS?: Array<string>
  /**
   * <p>状态 / Status: 0-开启/Enabled, 1-关闭/Disabled</p>
   */
  Status?: number
  /**
   * <p>创建时间</p>
   */
  CreateTime?: string
  /**
   * <p>修改时间</p>
   */
  ModifyTime?: string
  /**
   * <p>是否支持拦截 / Support Block: 0-不支持/Not Supported, 1-支持/Supported</p>
   */
  SupportBlock?: number
  /**
   * <p>MD5列表,ContentType=md5 时填充</p>
   */
  Md5List?: Array<string>
  /**
   * <p>文件名列表,ContentType=custom_file 时填充</p>
   */
  FileName?: Array<string>
  /**
   * <p>文件目录列表,ContentType=custom_file 时填充</p>
   */
  FileDirectory?: Array<string>
  /**
   * <p>域名列表,ContentType=dns 时填充</p>
   */
  Domains?: Array<string>
  /**
   * <p>出站IP列表,ContentType=ip_outbound 时填充</p>
   */
  OutboundIP?: Array<string>
  /**
   * <p>入站IP列表,ContentType=ip_inbound 时填充</p>
   */
  InboundIP?: Array<string>
  /**
   * <p>命令行规则,ContentType=cmdline 时填充</p>
   */
  CmdLineRules?: RuleContentCmdLine
  /**
   * <p>容器生效镜像范围 / Container Image Scope: 0-指定镜像/Specified Images, 1-全部镜像/All Images</p>
   */
  TCSSScope?: number
  /**
   * <p>生效镜像ID列表 / Image IDs (when TCSSScope=0)</p>
   */
  ImageIDs?: Array<string>
  /**
   * <p>镜像名正则表达式 / Image Names Regex</p>
   */
  ImageNamesRegex?: string
  /**
   * <p>置信度 / Confidence: 0-低/Low, 1-中/Medium, 2-高/High</p>
   */
  Confidence?: number
  /**
   * <p>排除的主机列表 / Excluded Host QUUIDS</p>
   */
  ExcludeQUUIDS?: Array<string>
  /**
   * <p>排除的镜像ID列表 / Excluded Image IDs</p>
   */
  ExcludeImageIDs?: Array<string>
  /**
   * <p>进程网络规则 / Process network rules</p>
   */
  ProcessNetworkRules?: RuleContentProcessNetwork
  /**
   * <p>策略对应APPID</p>
   */
  AppID?: number
  /**
   * <p>自选实例ID范围</p>
   */
  InstanceIDs?: Array<string>
  /**
   * <p>排除实例ID</p>
   */
  ExcludeInstanceIDs?: Array<string>
  /**
   * <p>生效集群ID列表（TCSSScope=0 时有值；空返回 []）</p>
   */
  ClusterIDs?: Array<string>
  /**
   * <p>排除集群ID列表（空返回 []）</p>
   */
  ExcludeClusterIDs?: Array<string>
  /**
   * <p>容器条件匹配</p>
   */
  ConditionMatches?: Array<ConditionMatch>
  /**
   * <p>安全中心标签</p>
   */
  TagItems?: Array<EDRRuleTagItem>
}

/**
 * ModifyExposureAutoTagRuleStatus返回参数结构体
 */
export interface ModifyExposureAutoTagRuleStatusResponse {
  /**
   * <p>操作结果</p>
   */
  Message?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyAssetTag请求参数结构体
 */
export interface ModifyAssetTagRequest {
  /**
   * <p>标签键</p>
   */
  Key: string
  /**
   * <p>标签值</p>
   */
  Value: string
  /**
   * <p>标签ID</p>
   */
  TagID: number
  /**
   * <p>集团账号的成员id</p>
   */
  MemberId?: Array<string>
  /**
   * <p>颜色</p>
   */
  Color?: string
  /**
   * <p>描述</p>
   */
  Description?: string
  /**
   * <p>打标策略</p>
   */
  TaggingRule?: string
  /**
   * <p>是否立即执行资产打标</p>
   */
  ApplyNow?: boolean
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
 * DescribeScanTaskRecordList返回参数结构体
 */
export interface DescribeScanTaskRecordListResponse {
  /**
   * <p>总记录数</p>
   */
  TotalCount?: number
  /**
   * <p>任务记录列表</p>
   */
  TaskRecordList?: Array<ScanTaskRecordItem>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateRiskDetailExportJob请求参数结构体
 */
export interface CreateRiskDetailExportJobRequest {
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
 * DescribeClusterPodDetail请求参数结构体
 */
export interface DescribeClusterPodDetailRequest {
  /**
   * <p>Pod 唯一 ID</p>
   */
  UniqueID: string
  /**
   * <p>集团账号的成员id</p>
   */
  MemberId?: Array<string>
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
 * 漏洞扫描任务详情
 */
export interface VulScanTaskDetail {
  /**
   * <p>任务id</p>
   */
  Id?: string
  /**
   * <p>创建者AppId</p>
   */
  AppId?: number
  /**
   * <p>实例id</p>
   */
  InstanceId?: string
  /**
   * <p>实例名称</p>
   */
  InstanceName?: string
  /**
   * <p>公网ip</p>
   */
  PublicIp?: string
  /**
   * <p>内网ip</p>
   */
  PrivateIp?: string
  /**
   * <p>操作系统</p>
   */
  OS?: string
  /**
   * <p>扫描状态（SUCCESS: 扫描完成/成功, OFFLINE: 客户端离线, TIMEOUT: 扫描超时, FAILED: 扫描失败, UNSUPPORTED: 客户端版本过低/不支持扫描, TERMINATED: 已终止, TERMINATING: 终止中）</p><p>枚举值：</p><ul><li>SCANNING： 扫描中</li></ul>
   */
  Status?: string
  /**
   * <p>扫描开始时间</p>
   */
  StartTime?: string
  /**
   * <p>扫描结束时间</p>
   */
  EndTime?: string
  /**
   * <p>漏洞数量</p>
   */
  Vuls?: number
  /**
   * <p>失败原因</p>
   */
  Description?: string
}

/**
 * DescribeDspmIdentifyDistributionStatistics请求参数结构体
 */
export interface DescribeDspmIdentifyDistributionStatisticsRequest {
  /**
   * <p>统计类型</p><p>枚举值：</p><ul><li>FieldTop5Asset： 识别字段Top5</li><li>FieldCategoryDistribution： 识别字段分类分布</li><li>FieldLevelDistribution： 识别字段级别分布</li><li>AssetDistribution： 识别资产分布</li></ul>
   */
  StatType: string
  /**
   * <p>集团账号的成员id</p>
   */
  MemberId?: Array<string>
  /**
   * <p>资产类型</p><p>枚举值：</p><ul><li>cdb： 云数据库MySQL</li><li>mariadb： 云数据库MariaDB</li></ul>
   */
  AssetType?: string
  /**
   * <p>识别模板id</p>
   */
  ComplianceId?: number
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
 * AddLoginWhiteLists返回参数结构体
 */
export interface AddLoginWhiteListsResponse {
  /**
   * <p>重复添加的提示列表</p>
   */
  DuplicateHosts?: Array<DuplicateHosts>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 日志检索上下文信息
 */
export interface LogContextInfo {
  /**
   * <p>主题id</p>
   */
  TopicId?: string
  /**
   * <p>上下文</p>
   */
  Context?: string
}

/**
 * AddLoginWhiteLists请求参数结构体
 */
export interface AddLoginWhiteListsRequest {
  /**
   * <p>异地登录白名单实体</p>
   */
  HostLoginWhiteObj: HostLoginWhiteObj
  /**
   * <p>集团账号的成员id</p>
   */
  MemberId?: Array<string>
  /**
   * <p>事件同步处理方式：  &quot;&quot; -- 不操作  &quot;All&quot; -- 将符合此配置的所有事件记录加白  &quot;Id&quot; -- 将EventId对应的事件记录加白</p>
   */
  ProcessType?: string
  /**
   * <p>异地登录事件ID，当ProcessType为Id时此项必填</p>
   */
  EventId?: number
}

/**
 * ModifyProtectionSetting返回参数结构体
 */
export interface ModifyProtectionSettingResponse {
  /**
   * 绑定失败的QUUID,失败原因为未绑定重保授权包
   */
  FailList?: Array<string>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateClusterContainerListExportJob请求参数结构体
 */
export interface CreateClusterContainerListExportJobRequest {
  /**
   * <p>集团账号的成员id</p>
   */
  MemberId?: Array<string>
  /**
   * <p>通用过滤条件列表。支持的过滤字段：<br>ContainerId：容器ID，精确匹配。<br>ContainerName：容器名称，模糊匹配。<br>RunStatus：容器运行状态，精确匹配。取值：RUNNING、PAUSED、STOPPED、CREATED、DESTROYED、RESTARTING、REMOVING、DEAD、UNKNOWN。<br>ImageId：镜像ID，精确匹配。<br>ImageName：镜像名称，模糊匹配。<br>IsolateStatus：隔离状态，精确匹配。取值：NORMAL（未隔离）、ISOLATED（已隔离）、ISOLATING（隔离中）、ISOLATE_FAILED（隔离失败）、RESTORING（解除隔离中）、RESTORE_FAILED（解除隔离失败）。<br>NodeUniqueId：所属节点唯一ID，精确匹配（NodeAssetId 为等价别名）。<br>UUID：主机UUID，精确匹配。</p>
   */
  Filter?: Filter
  /**
   * <p>集群ca证书md5值，集群的唯一标识</p>
   */
  ClusterCaMD5?: string
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
 * DescribeDspmStatistics返回参数结构体
 */
export interface DescribeDspmStatisticsResponse {
  /**
   * <p>资产统计信息</p>
   */
  AssetCount?: DspmAssetCount
  /**
   * <p>访问Ip统计信息</p>
   */
  IpCount?: DspmIpCount
  /**
   * <p>用户账号统计信息</p>
   */
  UserCount?: DspmAccountCount
  /**
   * <p>风险统计信息</p>
   */
  RiskCount?: DspmRiskCount
  /**
   * <p>资产安全分析统计信息</p>
   */
  AnalyseAssetStatusCount?: DspmSecurityAnalyseStatusCount
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateClusterListExportJob请求参数结构体
 */
export interface CreateClusterListExportJobRequest {
  /**
   * <p>集团账号的成员id</p>
   */
  MemberId?: Array<string>
  /**
   * <p>通用过滤条件列表。支持的过滤字段：<br>ClusterId：集群ID，精确匹配。<br>ClusterName：集群名称，模糊匹配。<br>ClusterType：集群类型，精确匹配。取值：TKE_MANAGED_CLUSTER（腾讯云标准集群）、TKE_INDEPENDENT_CLUSTER（标准集群Master自维护）、TKE_SERVERLESS_CLUSTER（Serverless集群）、TKE_EDGE_CLUSTER（边缘集群）、SELF_BUILT（腾讯云内自建）、SELF_BUILT_OTHER（非腾讯云自建/混合云）。<br>RunStatus：集群运行状态，精确匹配。取值：Running（运行中）、Exception（异常）、Unknown（未知）。<br>AccessedStatus：接入状态，精确匹配。取值：AccessedNone（未接入）、AccessedInstalling（接入中）、AccessedException（接入异常）、AccessedInstalled（已接入）。<br>DefendStatus：防护状态，精确匹配。取值：Enabled（已防护）、Partial（部分防护）、Disabled（未防护）。<br>RiskStatus：风险检查状态，精确匹配。<br>RiskLevel：风险等级，精确匹配。取值：CRITICAL、HIGH、MEDIUM、LOW、NONE（无风险）。<br>HasHighRisk：仅筛选含高危及以上风险的集群，无需填入 value，传入 HasHighRisk 即生效。<br>Region：地域，精确匹配。<br>OwnerName：负责人，模糊匹配。<br>ClusterAssetIds：集群资产ID，精确匹配。<br>ExcludeClusterAssetIds：排除的集群资产ID，精确排除。</p>
   */
  Filter?: Filter
  /**
   * <p>可导出字段</p>
   */
  ExportFields?: Array<string>
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
 * 云服务器类型机器数量
 */
export interface CloudFromCnt {
  /**
   * <p>云服务器类型</p>
   */
  CloudFrom?: number
  /**
   * <p>机器数量</p>
   */
  MachineCnt?: number
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
 * 用户信息
 */
export interface UserItem {
  /**
   * <p>登录用户appid</p>
   */
  AppID?: number
  /**
   * <p>用户类型</p>
   */
  AccountType?: number
  /**
   * <p>用户付费类型</p>
   */
  PayType?: number
  /**
   * <p>总配额次数</p>
   */
  TotalQuota?: number
  /**
   * <p>已消耗配额次数</p>
   */
  CostQuota?: number
  /**
   * <p>云厂商信息</p>
   */
  Providers?: Array<string>
  /**
   * <p>refresh:下次仍会刷新;expire:下次不再刷新</p>
   */
  QuotaFlushType?: string
  /**
   * <p>下次配额刷新时间</p>
   */
  QuotaFlushTime?: string
  /**
   * <p>购买类型</p>
   */
  QuotaSource?: number
  /**
   * <p>被共享时为共享方appid，自购或无配额时为0</p>
   */
  ShareFromAppID?: number
  /**
   * <p>配额共享方账号</p>
   */
  ShareFromUser?: string
}

/**
 * DescribeAssetTree返回参数结构体
 */
export interface DescribeAssetTreeResponse {
  /**
   * 资产树
   */
  AssetTree?: Array<ProviderNode>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
 * ScanBaselineItemList返回参数结构体
 */
export interface ScanBaselineItemListResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeSCFFunctionList返回参数结构体
 */
export interface DescribeSCFFunctionListResponse {
  /**
   * SCF 函数列表（仅返回 Event 类型）
   */
  List?: Array<SCFFunctionInfo>
  /**
   * 函数总数
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 自定义透传字段
 */
export interface WebhookCustomField {
  /**
   * 字段名
入参限制：长度 1-64
   */
  Key?: string
  /**
   * 字段值
入参限制：长度 1-256
   */
  Value?: string
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
 * ScanBaselineAssetItemList请求参数结构体
 */
export interface ScanBaselineAssetItemListRequest {
  /**
   * <p>基线策略类型。取值：</p><ul><li>SYSTEM：系统策略（CSIP 内置）</li><li>SELF：用户自定义策略</li></ul>
   */
  PolicyType: string
  /**
   * <p>目标基线策略 ID，必须大于 0。</p>
   */
  PolicyID: number
  /**
   * <p>基线系统父分类 ID。</p>
   */
  ParentCategoryID: number
  /**
   * <p>要重新扫描的检测项 ID 列表，仅对该资产生效。</p>
   */
  ItemIDList: Array<number | bigint>
  /**
   * <p>目标资产 ID（AssetType=HOST 时为 InstanceID，=CLUSTER 时为集群 ID）。</p>
   */
  AssetID: string
  /**
   * <p>基线子分类 ID。</p>
   */
  CategoryID?: number
  /**
   * <p>集团账号的成员id</p>
   */
  MemberId?: Array<string>
  /**
   * <p>命中资产的资产类型。取值：</p><ul><li>HOST：主机</li><li>CLUSTER：集群</li><li>POD：Pod</li><li>CONTAINER：容器</li><li>IMAGE：镜像</li></ul>
   */
  AssetType?: string
}

/**
 * ModifyBruteAttackBanStatus请求参数结构体
 */
export interface ModifyBruteAttackBanStatusRequest {
  /**
   * <p>集团账号的成员id</p>
   */
  MemberId?: Array<string>
  /**
   * <p>是否开启智能过白模式</p>
   */
  OpenSmartMode?: boolean
  /**
   * <p>是否阻断情报黑IP</p>
   */
  BanBlackIp?: boolean
  /**
   * <p>是否阻断漏洞黑IP</p>
   */
  BanVulIp?: boolean
  /**
   * <p>是否开启规则阻断</p>
   */
  BanByRule?: boolean
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
 * DeleteCluster返回参数结构体
 */
export interface DeleteClusterResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyBruteAttackBanStatus返回参数结构体
 */
export interface ModifyBruteAttackBanStatusResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ScanBaselineAssetItemList返回参数结构体
 */
export interface ScanBaselineAssetItemListResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyNotifyAgentOfflineDuration返回参数结构体
 */
export interface ModifyNotifyAgentOfflineDurationResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteExposureAutoTagRule返回参数结构体
 */
export interface DeleteExposureAutoTagRuleResponse {
  /**
   * <p>操作结果</p>
   */
  Message?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 指定策略详情配置
 */
export interface CustomRiskRuleDetailItem {
  /**
   * 规则开启状态
   */
  Status?: string
  /**
   * 租户ID
   */
  AppID?: number
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
 * 新增登录审计白名单实体
 */
export interface HostLoginWhiteObj {
  /**
   * <p>加白地域</p>
   */
  Places: Array<Place>
  /**
   * <p>加白源IP，支持网段，多个IP以逗号隔开</p>
   */
  SrcIp: string
  /**
   * <p>加白用户名，多个用户名以逗号隔开</p>
   */
  UserName: string
  /**
   * <p>是否对全局生效, 1：全局有效 0: 仅针对单台主机&#39;</p>
   */
  IsGlobal: number
  /**
   * <p>白名单生效的机器信息列表</p>
   */
  HostInfos: Array<HostInfo>
  /**
   * <p>备注</p>
   */
  Remark?: string
  /**
   * <p>开始时间</p>
   */
  StartTime?: string
  /**
   * <p>结束时间</p>
   */
  EndTime?: string
}

/**
 * DescribePortDetectList返回参数结构体
 */
export interface DescribePortDetectListResponse {
  /**
   * 端口探测数量
   */
  TotalCount?: number
  /**
   * 端口探测列表
   */
  PortDetectList?: Array<PortDetectInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
 * ModifyAssetCoreAttribute请求参数结构体
 */
export interface ModifyAssetCoreAttributeRequest {
  /**
   * 标记或者取消标记核心资产
   */
  OperateType: string
  /**
   * 资产ID集合
   */
  InstanceIDs: Array<string>
  /**
   * <p>集团账号的成员id</p>
   */
  MemberId?: Array<string>
}

/**
 * OperateRiskRulePolicy请求参数结构体
 */
export interface OperateRiskRulePolicyRequest {
  /**
   * 启用或者禁用
   */
  OperateType: string
  /**
   * 风险规则ID集合
   */
  RuleIDs?: Array<string>
  /**
   * 是否选择全部
   */
  CheckAll?: boolean
  /**
   * <p>集团账号的成员id</p>
   */
  MemberId?: Array<string>
  /**
   * 用户AppID
   */
  UserAppID?: number
}

/**
 * DescribeExposureAutoTagAttribute请求参数结构体
 */
export interface DescribeExposureAutoTagAttributeRequest {
  /**
   * <p>集团账号的成员id</p>
   */
  MemberId?: Array<string>
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
 * ScanCSIPTaskAgain请求参数结构体
 */
export interface ScanCSIPTaskAgainRequest {
  /**
   * <p>扫描任务ID</p>
   */
  TaskId: number
  /**
   * <p>集团账号的成员id</p>
   */
  MemberId?: Array<string>
  /**
   * <p>限定本次重扫的目标主机列表；为空时取主表对应子表的全量 实例ID；长度上限 1000</p>
   */
  InstanceIDList?: Array<string>
  /**
   * <p>扫描超时时长（秒），可选。非零时更新一键扫描超时配置并同步更新子表 timeout 字段。上限 7200 秒（2小时），超出返回 InvalidParameter。</p>
   */
  TimeoutPeriod?: number
}

/**
 * DescribeEdrExportJobDownloadURL请求参数结构体
 */
export interface DescribeEdrExportJobDownloadURLRequest {
  /**
   * <p>集团账号的成员id</p>
   */
  MemberId?: Array<string>
  /**
   * <p>导出任务 ID</p>
   */
  JobId?: string
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
 * DeleteEDRRules请求参数结构体
 */
export interface DeleteEDRRulesRequest {
  /**
   * <p>规则ID数组. (最大100条)</p>
   */
  RuleIDs: Array<string>
  /**
   * <p>规则类型，0-system 1-custom，目前只支持删除自定义规则</p>
   */
  RuleType: number
  /**
   * <p>集团账号的成员id</p>
   */
  MemberId?: Array<string>
  /**
   * <p>删除策略对应的APPID</p>
   */
  TargetAppIDs?: Array<number | bigint>
}

/**
 * 轻量应用服务器防火墙规则
 */
export interface LighthouseFirewallRule {
  /**
   * <p>应用类型</p>
   */
  AppType?: string
  /**
   * <p>协议</p>
   */
  Protocol?: string
  /**
   * <p>端口</p>
   */
  Port?: string
  /**
   * <p>地址</p>
   */
  CidrBlock?: string
  /**
   * <p>ipv6地址</p>
   */
  Ipv6CidrBlock?: string
  /**
   * <p>状态</p>
   */
  Action?: string
  /**
   * <p>描述</p>
   */
  FirewallRuleDescription?: string
}

/**
 * ModifyEdrExcludeNetworkSegments返回参数结构体
 */
export interface ModifyEdrExcludeNetworkSegmentsResponse {
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
 * 日志键值索引规则信息
 */
export interface LogRuleKeyValueInfo {
  /**
   * <p>大小写敏感</p>
   */
  CaseSensitive?: boolean
  /**
   * <p>键值索引信息</p>
   */
  KeyValues?: Array<LogKeyValueInfo>
}

/**
 * dspm数据识别任务状态
 */
export interface DspmAssetIdentifyTaskStatus {
  /**
   * <p>任务ID</p>
   */
  TaskId?: number
  /**
   * <p>任务状态</p><p>枚举值：</p><ul><li>0： 未识别</li><li>1： 识别中</li><li>2： 识别终止</li><li>3： 识别成功</li><li>4： 识别失败</li><li>5： 暂停</li></ul>
   */
  Status?: number
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
 * 基线子分类维度的聚合结果，承载该子分类下检测项的通过/未通过统计。
 */
export interface BaselineAggregatedCategory {
  /**
   * <p>基线子分类基础信息（含分类 ID、名称、描述）。</p>
   */
  Category?: BaselineCategory
  /**
   * <p>该子分类下未通过检测项按风险等级的分布统计。</p>
   */
  NotPassItemRiskLevelStatistic?: Array<BaselineRiskLevelStatistic>
  /**
   * <p>该子分类下结果为 PASS 的检测项数量。</p>
   */
  PassItemCount?: number
  /**
   * <p>该子分类下结果为 NOT_PASS 的检测项数量。</p>
   */
  NotPassItemCount?: number
  /**
   * <p>该子分类下检测项通过率，单位为百分比（0~100），保留两位小数。</p>
   */
  PassRate?: number
  /**
   * <p>该基线类别是否被扫描过</p>
   */
  Scanned?: boolean
}

/**
 * DescribeMachineClearHistory请求参数结构体
 */
export interface DescribeMachineClearHistoryRequest {
  /**
   * <p>集团账号的成员id</p>
   */
  MemberId?: Array<string>
  /**
   * <p>筛选条件多个条件筛选时 Keywords,TimeBetween,取交集 Keywords 实例名称/内网/公网IP TimeBetween 时间区间</p>
   */
  Filters?: Array<EDRFilters>
  /**
   * <p>限制条数,默认10 ,最大100</p>
   */
  Limit?: number
  /**
   * <p>偏移量,默认0</p>
   */
  Offset?: number
  /**
   * <p>正序, ASC , 倒序 DESC , 默认ASC</p>
   */
  Order?: string
  /**
   * <p>AgentLastOfflineTime 客户端最后离线时间AutoClearTime 清理时间</p>
   */
  By?: string
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
 * DescribeTaskPredictCostQuota返回参数结构体
 */
export interface DescribeTaskPredictCostQuotaResponse {
  /**
   * <p>用户消耗配额数量</p>
   */
  CostQuota?: number
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
 * 节点信息
 */
export interface NodeInfo {
  /**
   * 英文名
注意：此字段可能返回 null，表示取不到有效值。
   */
  Key: string
  /**
   * 值
注意：此字段可能返回 null，表示取不到有效值。
   */
  Value: string
  /**
   * 中文名
注意：此字段可能返回 null，表示取不到有效值。
   */
  Name: string
}

/**
 * DescribeScfCustomDomainEndpoints请求参数结构体
 */
export interface DescribeScfCustomDomainEndpointsRequest {
  /**
   * <p>资产ID</p>
   */
  AssetID: string
  /**
   * <p>集团账号的成员id</p>
   */
  MemberId?: Array<string>
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
 * DeleteLoginWhiteList请求参数结构体
 */
export interface DeleteLoginWhiteListRequest {
  /**
   * <p>白名单ID (最大 100 条)</p>
   */
  Ids: Array<number | bigint>
  /**
   * <p>集团账号的成员id</p>
   */
  MemberId?: Array<string>
}

/**
 * 日志条目列表
 */
export interface LogItems {
  /**
   * <p>数值</p>
   */
  Data?: Array<LogItem>
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
 * DescribeDspmIdentifyComplianceGroupDetail请求参数结构体
 */
export interface DescribeDspmIdentifyComplianceGroupDetailRequest {
  /**
   * <p>集团账号的成员id</p>
   */
  MemberId?: Array<string>
  /**
   * <p>识别模板ID</p>
   */
  Id?: number
}

/**
 * CreateAssetTag返回参数结构体
 */
export interface CreateAssetTagResponse {
  /**
   * <p>状态码</p>
   */
  Code?: string
  /**
   * <p>信息</p>
   */
  Message?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyExposureAutoTagRule返回参数结构体
 */
export interface ModifyExposureAutoTagRuleResponse {
  /**
   * <p>操作结果</p>
   */
  Message?: string
  /**
   * <p>当前是否有正在运行的打标任务</p>
   */
  HasRunningApply?: boolean
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeCloudFunctionList请求参数结构体
 */
export interface DescribeCloudFunctionListRequest {
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
 * DescribeNFSScanHost返回参数结构体
 */
export interface DescribeNFSScanHostResponse {
  /**
   * <p>总数</p>
   */
  Total?: number
  /**
   * <p>主机列表</p>
   */
  List?: Array<ClientSettingHost>
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
 * DescribeClusterAssetSyncTaskStatus返回参数结构体
 */
export interface DescribeClusterAssetSyncTaskStatusResponse {
  /**
   * <p>任务状态</p>
   */
  Status?: string
  /**
   * <p>任务进度(%)</p>
   */
  Progress?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyNFSScanHost请求参数结构体
 */
export interface ModifyNFSScanHostRequest {
  /**
   * <p>集团账号的成员id</p>
   */
  MemberId?: Array<string>
  /**
   * <p>移除配置的机器</p>
   */
  Quuid?: Array<string>
}

/**
 * DescribeAssetSyncTaskStatus返回参数结构体
 */
export interface DescribeAssetSyncTaskStatusResponse {
  /**
   * 资产同步任务状态
   */
  TaskStatus?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeAgentConfigSetting返回参数结构体
 */
export interface DescribeAgentConfigSettingResponse {
  /**
   * <p>增强日志模式开关，0-关闭 1-开启（未配置时为空）</p>
   */
  EnhanceLogMode?: number
  /**
   * <p>恶意软件 POC 模式开关，0-关闭 1-开启（未配置时为空）</p>
   */
  MalwarePocMode?: number
  /**
   * <p>上报源端口开关（兼容旧版本），0-关闭 1-开启</p>
   */
  ReportSourcePort?: number
  /**
   * <p>已开启的日志采集类型列表，如 tcp_ingress、tcp_src_port、http_egress、http_ingress、app_access</p>
   */
  LogCollectSettings?: Array<string>
  /**
   * <p>资产选择方式：all/tag/direct</p>
   */
  AssetSelectionType?: string
  /**
   * <p>按标签选择时的标签ID数组</p>
   */
  TagIds?: Array<string>
  /**
   * <p>直接选择的主机instance_id列表</p>
   */
  InstanceIDs?: Array<string>
  /**
   * <p>排除的主机instance_id列表</p>
   */
  ExcludeInstanceIDs?: Array<string>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 基线检测项。
 */
export interface BaselineItem {
  /**
   * <p>基线检测项 ID。</p>
   */
  ID?: number
  /**
   * <p>内置规则 ID。</p>
   */
  RuleID?: number
  /**
   * <p>检测对象描述，例如配置文件路径、内核参数、Kubernetes 资源等。</p>
   */
  CheckObject?: Array<string>
  /**
   * <p>风险等级。取值：</p><ul><li>LOW：低危</li><li>MEDIUM：中危</li><li>HIGH：高危</li><li>CRITICAL：严重</li></ul>
   */
  RiskLevel?: string
  /**
   * <p>检测项名称（中文）。</p>
   */
  Name?: string
  /**
   * <p>检测项描述（中文，说明检测背景与判定逻辑）。</p>
   */
  Description?: string
  /**
   * <p>检测项修复建议（中文，含建议的配置参考值或加固命令）。</p>
   */
  FixSuggestion?: string
  /**
   * <p>检测项的参考链接列表。</p>
   */
  ReferenceLink?: string
  /**
   * <p>所属系统父分类信息。</p>
   */
  SystemCategory?: BaselineCategory
  /**
   * <p>所属子分类信息。</p>
   */
  Category?: BaselineCategory
  /**
   * <p>是否支持一键修复。true 支持，false 不支持。</p>
   */
  SupportFix?: boolean
  /**
   * <p>是否支持用户自定义判定值。true 支持，false 不支持。</p>
   */
  SupportCustomValue?: boolean
  /**
   * <p>该检测项适用的操作系统/组件版本列表。</p>
   */
  AffectedVersionList?: Array<string>
  /**
   * <p>编辑自定义判定值时的参数定义（如取值范围、控件类型等）。</p>
   */
  WebEditParam?: string
  /**
   * <p>检测项默认判定值列表。</p>
   */
  DefaultValueList?: Array<string>
  /**
   * <p>是否已被用户自定义。true 已自定义，false 仍使用默认值。</p>
   */
  IsCustomConf?: boolean
  /**
   * <p>用户自定义配置记录 ID，未自定义时为 0。</p>
   */
  CustomItemID?: number
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
 * 集群pod列表项
 */
export interface ClusterPodListItem {
  /**
   * <p>资产id</p>
   * @deprecated
   */
  AssetId?: string
  /**
   * <p>appid</p>
   */
  AppID?: number
  /**
   * <p>pod唯一id</p>
   */
  PodUid?: string
  /**
   * <p>pod名称</p>
   */
  PodName?: string
  /**
   * <p>podip数组</p>
   */
  PodIPs?: Array<string>
  /**
   * <p>pod状态</p>
   */
  RunStatus?: string
  /**
   * <p>防护核数</p>
   * @deprecated
   */
  DefendCoresCount?: number
  /**
   * <p>节点id</p>
   */
  NodeId?: string
  /**
   * <p>节点类型</p>
   */
  NodeType?: string
  /**
   * <p>负载名称</p>
   */
  WorkloadName?: string
  /**
   * <p>负载类型</p>
   */
  WorkloadType?: string
  /**
   * <p>命名空间</p>
   */
  Namespace?: string
  /**
   * <p>创建时间</p>
   */
  CreateTime?: string
  /**
   * <p>Pod唯一标识ID</p>
   */
  UniqueID?: string
  /**
   * <p>严重风险数量</p>
   * @deprecated
   */
  RiskEventCriticalCount?: number
  /**
   * <p>高危风险数量</p>
   * @deprecated
   */
  RiskEventHighCount?: number
  /**
   * <p>中危风险数量</p>
   * @deprecated
   */
  RiskEventMiddleCount?: number
  /**
   * <p>低危风险数量</p>
   * @deprecated
   */
  RiskEventLowCount?: number
  /**
   * <p>严重告警数量</p>
   * @deprecated
   */
  AlarmEventCriticalCount?: number
  /**
   * <p>高危告警数量</p>
   * @deprecated
   */
  AlarmEventHighCount?: number
  /**
   * <p>中危告警数量</p>
   * @deprecated
   */
  AlarmEventMiddleCount?: number
  /**
   * <p>低危告警数量</p>
   * @deprecated
   */
  AlarmEventLowCount?: number
  /**
   * <p>关联容器列表</p>
   */
  ContainerList?: Array<ClusterContainerListItem>
  /**
   * <p>关联告警数</p>
   */
  AlarmCount?: number
  /**
   * <p>核数</p><p>单位：毫核</p>
   */
  CoresCount?: number
}

/**
 * DescribeDspmIdentifyRuleList返回参数结构体
 */
export interface DescribeDspmIdentifyRuleListResponse {
  /**
   * <p>总数</p><p>单位：数量</p>
   */
  TotalCount?: number
  /**
   * <p>结果</p>
   */
  DataSet?: Array<DspmIdentifyRuleItem>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 评分规则项
 */
export interface ScoreRuleItem {
  /**
   * <p>规则类型<br>枚举值：<br>dimension：维度级规则<br>category：子项级规则<br>severity：等级级规则</p>
   */
  RuleType?: string
  /**
   * <p>维度ID</p>
   */
  DimensionId?: string
  /**
   * <p>维度名称</p>
   */
  DimensionName?: string
  /**
   * <p>子项ID</p>
   */
  CategoryId?: string
  /**
   * <p>子项扣分规则说明</p>
   */
  CategoryDesc?: string
  /**
   * <p>子项名称</p>
   */
  CategoryName?: string
  /**
   * <p>等级<br>枚举值：<br>critical：严重<br>high：高危<br>medium：中危<br>low：低危</p>
   */
  Severity?: string
  /**
   * <p>扣分上限</p>
   */
  MaxDeductScore?: number
  /**
   * <p>单次扣分</p>
   */
  DeductPerItem?: number
  /**
   * <p>单项扣分是否不可编辑（防护配置维度子项为 true）</p>
   */
  DeductPerItemDisabled?: boolean
  /**
   * <p>排序序号</p>
   */
  SortOrder?: number
}

/**
 * ModifyDspmIdentifyComplianceRuleLevelInfo返回参数结构体
 */
export interface ModifyDspmIdentifyComplianceRuleLevelInfoResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
 * DescribeUserDspmInfoList请求参数结构体
 */
export interface DescribeUserDspmInfoListRequest {
  /**
   * <p>集团账号的成员id</p>
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
 * DescribeVulItemList请求参数结构体
 */
export interface DescribeVulItemListRequest {
  /**
   * <p>筛选条件数组，多条件之间为 AND 关系<br>支持的 Filter.Name：<br>Keyword：关键字模糊搜索（对漏洞名/CVE/VulID 模糊匹配）<br>Category：漏洞分类（LINUX/WINDOWS/WEB_CMS/APPLICATION/EMERGENCY）<br>Level：威胁等级<br>VPRLevel：VPR 评级<br>Label：风险标签<br>CheckMethod：检测方式（VERSION_COMPARE/POC/VERSION_COMPARE_POC）<br>DefendStatus：漏洞防御状态（ENABLED/NOT_SUPPORTED/NOT_ENABLED）<br>SupportFix：是否支持一键修复（true/false）<br>Emergency:  紧急漏洞获取 (0/1)<br>Top5HotVul: 热点top 5 漏洞 (0/1)</p>
   */
  Filters?: Array<Filters>
  /**
   * <p>每页返回数量<br>取值范围：[1, 100]<br>默认值：10</p>
   */
  Limit?: number
  /**
   * <p>分页偏移量<br>取值范围：[0, +∞)<br>默认值：0</p>
   */
  Offset?: number
  /**
   * <p>排序方向<br>枚举值：<br>ASC：升序<br>DESC：降序<br>默认值：DESC</p>
   */
  Order?: string
  /**
   * <p>排序字段<br>枚举值：<br>PublishTime：漏洞披露时间<br>默认值：PublishTime</p>
   */
  By?: string
}

/**
 * DescribeClusterNamespaceList请求参数结构体
 */
export interface DescribeClusterNamespaceListRequest {
  /**
   * <p>集群资产 id</p>
   * @deprecated
   */
  ClusterAssetId?: string
  /**
   * <p>通用过滤条件列表。支持的过滤字段：<br>Name：命名空间名称，模糊匹配。<br>Label：标签，模糊匹配（对标签的 key 或 value 做匹配，任一命中即匹配）。</p>
   */
  Filter?: Filter
  /**
   * <p>集团账号的成员id</p>
   */
  MemberId?: Array<string>
  /**
   * <p>集群ca证书md5值，集群的唯一标识</p>
   */
  ClusterCaMD5?: string
}

/**
 * DescribeBaselineCalculatingStatisticsPolicyIDList请求参数结构体
 */
export interface DescribeBaselineCalculatingStatisticsPolicyIDListRequest {
  /**
   * <p>集团账号的成员id</p>
   */
  MemberId?: Array<string>
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
 * StopProcessDaemon请求参数结构体
 */
export interface StopProcessDaemonRequest {
  /**
   * <p>是否关闭全局 0 否 1 是</p>
   */
  StopGlobal: number
  /**
   * <p>集团账号的成员id</p>
   */
  MemberId?: Array<string>
  /**
   * <p>不是全局的情况下关闭的quuid集合</p>
   */
  Quuid?: Array<string>
}

/**
 * 资产树-资产类型节点
 */
export interface AssetTypeNode {
  /**
   * <p>资产类型</p>
   */
  AssetType?: string
  /**
   * <p>资产类型名称</p>
   */
  AssetTypeName?: string
  /**
   * <p>资产类型数量</p>
   */
  AssetCount?: number
  /**
   * <p>资产类型ID</p>
   */
  AssetTypeID?: number
}

/**
 * DescribeBanMode请求参数结构体
 */
export interface DescribeBanModeRequest {
  /**
   * <p>集团账号的成员id</p>
   */
  MemberId?: Array<string>
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
 * CLB七层转发规则
 */
export interface ClbListenerRuleItem {
  /**
   * <p>监听器ID</p>
   */
  ListenerID?: string
  /**
   * <p>规则ID</p>
   */
  LocationID?: string
  /**
   * <p>域名</p>
   */
  Domain?: string
  /**
   * <p>URL</p>
   */
  Url?: string
  /**
   * <p>创建时间</p>
   */
  CreateTime?: string
}

/**
 * ModifyCosAuditBucketMonitorStatus返回参数结构体
 */
export interface ModifyCosAuditBucketMonitorStatusResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
 * DescribeMandatoryVulSet返回参数结构体
 */
export interface DescribeMandatoryVulSetResponse {
  /**
   * 漏洞总数
   */
  Total?: number
  /**
   * 漏洞列表
   */
  Data?: Array<VulInfoListItem>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeBaselinePolicyItemList请求参数结构体
 */
export interface DescribeBaselinePolicyItemListRequest {
  /**
   * <p>基线策略ID</p>
   */
  PolicyID: number
  /**
   * <p>集团账号的成员id</p>
   */
  MemberId?: Array<string>
  /**
   * <p>基线父分类 ID，用于筛选指定父分类下的检测项。</p>
   */
  ParentCategoryID?: number
  /**
   * <p>分页查询每页返回条数，默认值 10，最大值 100。</p>
   */
  Limit?: number
  /**
   * <p>分页查询偏移量，默认值 0。</p>
   */
  Offset?: number
  /**
   * <p>通用过滤条件列表。支持的过滤字段：</p><ul><li>CategoryID：子分类 ID，精确匹配</li><li>Name：检测项名称，模糊匹配</li><li>RiskLevel：风险等级，精确匹配。取值：LOW、MEDIUM、HIGH、CRITICAL</li><li>SupportCustomValue：是否支持编辑，精确匹配。取值：true、false</li></ul>
   */
  Filters?: Array<Filters>
}

/**
 * 主机简要信息
 */
export interface VulHostBriefInfo {
  /**
   * <p>云主机实例 ID<br>参数格式：形如 ins-xxxxxxxx</p>
   */
  InstanceID?: string
  /**
   * <p>主机名称</p>
   */
  Name?: string
  /**
   * <p>公网 IP 地址</p>
   */
  PublicIP?: string
  /**
   * <p>内网 IP 地址</p>
   */
  PrivateIP?: string
  /**
   * <p>防护版本<br>枚举值：<br>NONE：无防护<br>BASIC：基础版<br>PRO：专业版<br>ULTIMATE：旗舰版<br>PRO_LH：轻量版</p>
   */
  DefendVersion?: string
  /**
   * <p>漏洞防御状态<br>枚举值：<br>ENABLED：已开启<br>NOT_SUPPORTED：不支持<br>NOT_ENABLED：未开启</p>
   */
  DefendStatus?: string
  /**
   * <p>所属账号信息</p>
   */
  Account?: AccountBriefInfo
  /**
   * <p>云主机实例状态<br>枚举值：<br>RUNNING：运行中<br>STOPPED：已停止<br>UNKNOWN：未知</p>
   */
  InstanceStatus?: string
  /**
   * <p>修复状态枚举值</p><p>枚举值：</p><ul><li>PENDING： 待修复</li><li>SCANNING： 扫描中</li><li>FIXED： 已修复</li><li>IGNORED： 已忽略</li><li>FIXING： 修复中</li><li>FIX_FAILED： 修复失败</li><li>NEED_REBOOT： 修复待重启</li></ul>
   */
  RiskStatus?: string
  /**
   * <p>VPR 评级信息（含评级结果与各维度详情）</p>
   */
  VPRRating?: VPRRatingInfo
  /**
   * <p>CWP Agent 状态<br>枚举值：<br>ONLINE：在线<br>OFFLINE：离线<br>UNINSTALLED：未安装</p>
   */
  AgentStatus?: string
  /**
   * <p>资产标签列表（CSIP 内部资产标签）</p>
   */
  TagItem?: Array<MiniTagItem>
  /**
   * <p>云上标签列表（云资产侧 Tag）</p>
   */
  CloudTag?: Array<Tag>
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
 * ModifyCosAuditObjectSampleRate返回参数结构体
 */
export interface ModifyCosAuditObjectSampleRateResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
   * <p>集团账号的成员id</p>
   */
  MemberId?: Array<string>
  /**
   * 筛选项
   */
  Filter?: Filter
}

/**
 * ModifyAssetTags请求参数结构体
 */
export interface ModifyAssetTagsRequest {
  /**
   * <p>集团账号的成员id</p>
   */
  MemberId?: Array<string>
  /**
   * 资产RID列表
   */
  AssetRIDs?: Array<string>
  /**
   * 标签ID列表
   */
  TagIDs?: Array<string>
  /**
   * 操作类型
   */
  OperationType?: string
}

/**
 * CreateDspmIdentifyComplianceRuleRelation请求参数结构体
 */
export interface CreateDspmIdentifyComplianceRuleRelationRequest {
  /**
   * <p>识别模板ID</p>
   */
  ComplianceId: number
  /**
   * <p>分类ID</p>
   */
  CategoryId: number
  /**
   * <p>无</p>
   */
  Rules: Array<DspmIdentifyCategoryRuleRelateItem>
  /**
   * <p>集团账号的成员id</p>
   */
  MemberId?: Array<string>
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
 * 文件查杀手动扫描详情
 */
export interface CSIPMalwareScanUuidDetailItem {
  /**
   * <p>UUID</p>
   */
  Uuid?: string
  /**
   * <p>QUUID</p>
   */
  Quuid?: string
  /**
   * <p>机器APPID</p>
   */
  MachineAppId?: number
  /**
   * <p>机器名</p>
   */
  MachineName?: string
  /**
   * <p>机器IP</p>
   */
  MachineIP?: string
  /**
   * <p>类型</p>
   */
  OsType?: string
  /**
   * <p>主机额外信息（公网IP、内网IP、实例ID）</p>
   */
  MachineExtraInfo?: CSIPMachineExtraInfo
  /**
   * <p>状态</p>
   */
  Status?: number
  /**
   * <p>风险个数</p>
   */
  RiskCount?: number
  /**
   * <p>扫描耗时（秒）</p>
   */
  UsedTimeS?: number
  /**
   * <p>异常码</p>
   */
  Exception?: number
  /**
   * <p>异常信息</p>
   */
  ExceptionMessage?: string
  /**
   * <p>创建时间</p>
   */
  CreateTime?: string
  /**
   * <p>修改时间</p>
   */
  ModifyTime?: string
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
 * DescribeEdrAlertSummary返回参数结构体
 */
export interface DescribeEdrAlertSummaryResponse {
  /**
   * <p>严重+高危待处理数（Level IN CRITICAL,HIGH，DB 内部值 1,5）</p>
   */
  CriticalPendingCount?: number
  /**
   * <p>全部待处理数</p>
   */
  TotalPendingCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * StopBaselineScanTask请求参数结构体
 */
export interface StopBaselineScanTaskRequest {
  /**
   * <p>要停止的扫描主任务 ID，必须大于 0。</p>
   */
  TaskID: number
  /**
   * <p>集团账号的成员id</p>
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
 * DescribeAssetTagAttributes请求参数结构体
 */
export interface DescribeAssetTagAttributesRequest {
  /**
   * <p>集团账号的成员id</p>
   */
  MemberId?: Array<string>
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
 * DescribeClusterPodDetail返回参数结构体
 */
export interface DescribeClusterPodDetailResponse {
  /**
   * <p>Pod 唯一 ID</p>
   */
  UniqueID?: string
  /**
   * <p>主账号 AppID</p>
   */
  AppID?: number
  /**
   * <p>Pod 名称</p>
   */
  PodName?: string
  /**
   * <p>Pod IP 地址</p>
   */
  PodIP?: string
  /**
   * <p>Pod 运行状态</p>
   */
  RunStatus?: string
  /**
   * <p>Pod Labels 列表</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Labels?: Array<AssetTag>
  /**
   * <p>Pod 启动时间</p>
   */
  StartTime?: string
  /**
   * <p>启动时间（秒）</p>
   */
  StartupTime?: number
  /**
   * <p>Pod 重启次数</p>
   */
  RestartCount?: number
  /**
   * <p>所属集群名称</p>
   */
  ClusterName?: string
  /**
   * <p>所属集群 ID</p>
   */
  ClusterID?: string
  /**
   * <p>所属集群类型</p>
   */
  ClusterType?: string
  /**
   * <p>所属集群运行状态</p>
   */
  ClusterRunStatus?: string
  /**
   * <p>所属命名空间</p>
   */
  Namespace?: string
  /**
   * <p>所在节点名称</p>
   */
  NodeName?: string
  /**
   * <p>所在节点 ID</p>
   */
  NodeId?: string
  /**
   * <p>所属 Workload 名称</p>
   */
  WorkloadName?: string
  /**
   * <p>所属 Workload 类型</p>
   */
  WorkloadType?: string
  /**
   * <p>严重风险事件数</p>
   */
  RiskEventCriticalCount?: number
  /**
   * <p>高危风险事件数</p>
   */
  RiskEventHighCount?: number
  /**
   * <p>中危风险事件数</p>
   */
  RiskEventMiddleCount?: number
  /**
   * <p>低危风险事件数</p>
   */
  RiskEventLowCount?: number
  /**
   * <p>严重告警事件数</p>
   */
  AlarmEventCriticalCount?: number
  /**
   * <p>高危告警事件数</p>
   */
  AlarmEventHighCount?: number
  /**
   * <p>中危告警事件数</p>
   */
  AlarmEventMiddleCount?: number
  /**
   * <p>低危告警事件数</p>
   */
  AlarmEventLowCount?: number
  /**
   * <p>所属地域</p>
   */
  Region?: string
  /**
   * <p>节点内网 IP</p>
   */
  NodeInternalIP?: string
  /**
   * <p>节点外网 IP</p>
   */
  NodeExternalIP?: string
  /**
   * <p>关联容器数量</p>
   */
  ContainerCount?: number
  /**
   * <p>关联服务数量</p>
   */
  ServiceCount?: number
  /**
   * <p>地域中文名</p>
   */
  RegionName?: string
  /**
   * <p>地域英文名</p>
   */
  RegionNameEn?: string
  /**
   * <p>告警数量</p>
   */
  AlarmCount?: number
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
 * DescribeProcessDaemonHost请求参数结构体
 */
export interface DescribeProcessDaemonHostRequest {
  /**
   * <p>集团账号的成员id</p>
   */
  MemberId?: Array<string>
  /**
   * <p>Name - string - 是否必填：否 - 主机名 InstanceId - string - 是否必填：否 - 实例ID PublicIp - string - 是否必填：否 - 公网IP PrivateIp - string - 是否必填：否 - 私网IP</p>
   */
  Filters?: Array<EDRFilter>
  /**
   * <p>限制条数,默认10,最大100</p>
   */
  Limit?: number
  /**
   * <p>偏移量,默认0</p>
   */
  Offset?: number
  /**
   * <p>排序方式: [ASC:升序|DESC:降序]</p>
   */
  Order?: string
  /**
   * <p>可选排序列: [Id]</p>
   */
  By?: string
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
 * EDR-攻击阶段对应数量
 */
export interface AttackStageCount {
  /**
   * <p>攻击阶段</p>
   */
  AttackStage?: string
  /**
   * <p>策略数量</p>
   */
  Count?: number
}

/**
 * 子分类维度的检测项命中配置。
 */
export interface BaselinePolicySubCategoryConf {
  /**
   * <p>基线子分类 ID。</p>
   */
  CategoryID: number
  /**
   * <p>是否全选该子分类下所有检测项。true 全选，false 按 ItemIDList 明细生效。</p>
   */
  AllSelect: boolean
  /**
   * <p>已选的检测项 ID 列表，AllSelect=false 时按此明细生效。</p>
   */
  ItemIDList: Array<number | bigint>
}

/**
 * DescribeBaselinePolicyCategoryList返回参数结构体
 */
export interface DescribeBaselinePolicyCategoryListResponse {
  /**
   * <p>系统父分类列表，含每个父分类下的子分类与检测项 ID 列表。</p>
   */
  SystemCategoryList?: Array<BaselineSystemCategory>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeClusterContainerComponentList返回参数结构体
 */
export interface DescribeClusterContainerComponentListResponse {
  /**
   * <p>匹配总数</p>
   */
  TotalCount?: number
  /**
   * <p>组件列表</p>
   */
  List?: Array<ContainerComponentItem>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * StartOrModifyPreventUninstall返回参数结构体
 */
export interface StartOrModifyPreventUninstallResponse {
  /**
   * <p>失败机器列表</p>
   */
  FailList?: Array<ModifyLoginTypeFailInfo>
  /**
   * <p>开启失败的机器数</p>
   */
  FailedHostCount?: number
  /**
   * <p>任务id</p>
   */
  TaskId?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeProcessDaemonGlobalConf返回参数结构体
 */
export interface DescribeProcessDaemonGlobalConfResponse {
  /**
   * <p>是否开启进程防护 0 否 1 是 9 未设置,和0一样是未开启</p>
   */
  Enable?: number
  /**
   * <p>开启范围 0 自选主机 1 全部主机</p>
   */
  Scope?: number
  /**
   * <p>正选主机数</p>
   */
  IncludeHostCount?: number
  /**
   * <p>反选主机数</p>
   */
  ExcludeHostCount?: number
  /**
   * <p>正选quuid列表</p>
   */
  IncludeQuuid?: Array<string>
  /**
   * <p>反选quuid列表</p>
   */
  ExcludeQuuid?: Array<string>
  /**
   * <p>已经开启数</p>
   */
  EnableCount?: number
  /**
   * <p>未开启数</p>
   */
  DisableCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateEdrAlertExportJob请求参数结构体
 */
export interface CreateEdrAlertExportJobRequest {
  /**
   * <p>集团账号的成员id</p>
   */
  MemberId?: Array<string>
  /**
   * <p>PolicyType - int - 是否必填：否 - 策略类型PolicyName - string - 是否必填：否 - 策略名称Domain - string - 是否必填：否 - 域名(先对域名做urlencode,再base64)PolicyAction- int - 是否必填：否 - 策略动作IsEnabled - int - 是否必填：否 - 是否生效</p>
   */
  Filters?: Array<EDRFilter>
  /**
   * <p>限制条数,默认10,最大100</p>
   */
  Limit?: number
  /**
   * <p>偏移量,默认0</p>
   */
  Offset?: number
  /**
   * <p>排序方式: [ASC:升序|DESC:降序]</p>
   */
  Order?: string
  /**
   * <p>可选排序列: [LatestDetectTime]</p>
   */
  By?: string
  /**
   * <p>自定义任务名，允许重复；传空自动生成默认名 alert_{appid}_{时间戳}（如 alert_1234567890_20260501114522）；仅支持数字/字母/下划线/短横线/中文，≤100 字符（按字符/rune 计，中文按 1 个字符），校验失败返回 InvalidParameter（文案 TextEdrExportJobNameInvalid）</p>
   */
  JobName?: string
}

/**
 * 重保授权包列表对象
 */
export interface RaspLicenseList {
  /**
   * <p>机器唯一ID</p>
   */
  QUUID?: string
  /**
   * <p>实例名称</p>
   */
  InstanceName?: string
  /**
   * <p>实例ID</p>
   */
  InstanceId?: string
  /**
   * <p>公网IP</p>
   */
  PublicIP?: string
  /**
   * <p>内网IP</p>
   */
  PrivateIP?: string
  /**
   * <p>云标签信息</p>
   */
  Tags?: Array<Tags>
  /**
   * <p>防护版本信息</p><ul><li>CriticalProtection 重保防护包</li><li>Pro 容器安全-专业版</li><li>Ultimate 主机安全-旗舰版</li></ul>
   */
  ProtectionVersion?: Array<string>
  /**
   * <p>防护设置</p><ul><li>0 未配置</li><li>1 已配置</li></ul>
   */
  ConfigurationSetting?: number
  /**
   * <p>总开关</p><ul><li>0 未开启</li><li>1已开启</li></ul>
   */
  Enable?: number
  /**
   * <p>漏洞防御开关</p><ul><li>0 未开启</li><li>1 开启</li></ul>
   */
  VulDefEnable?: number
  /**
   * <p>漏洞防御模式</p><ul><li>0 标准</li><li>1 重保</li></ul>
   */
  VulDefMode?: number
  /**
   * <p>漏洞防御动作</p><ul><li>0 仅检测</li><li>1 检测+防御</li></ul>
   */
  VulDefAction?: number
  /**
   * <p>内存马防御开关</p><ul><li>0 未开启</li><li>1 开启</li></ul>
   */
  MemShellDefEnable?: number
  /**
   * <p>更多防护</p><ul><li>0 不注入会重启的进程 </li><li>1 注入会重启的进程</li></ul>
   */
  SafeInject?: number
  /**
   * <p>性能阈值配置开关</p><ul><li>0 未开启</li><li>1 开启</li></ul>
   */
  PerformanceLimit?: number
  /**
   * <p>CPU阈值,取值1-99</p>
   */
  PerformanceLimitCpu?: number
  /**
   * <p>内存阈值,取值1-99</p>
   */
  PerformanceLimitMem?: number
  /**
   * <p>内存剩余阈值</p>
   */
  PerformanceLimitMemAmount?: number
  /**
   * <p>插件状态</p><ul><li>0 使用正常</li><li>1 存在异常</li><li>2 未使用</li></ul>
   */
  RaspException?: number
  /**
   * <p>最近更新时间</p>
   */
  LatestUpdateTime?: string
  /**
   * <p>集群ID,仅容器资产有值</p>
   */
  ClusterName?: string
  /**
   * <p>集群名称,仅容器资产有值</p>
   */
  ClusterId?: string
  /**
   * <p>订单信息</p>
   */
  OrderDetail?: OrderDetail
  /**
   * <p>是否允许解绑,fasle 不允许 true 允许</p>
   */
  IsUnBind?: boolean
  /**
   * <p>uuid 机器唯一ID,仅AssetType = CWP 时有值</p>
   */
  UUID?: string
  /**
   * <p>无注入/注入失败原因</p><p>默认值：空</p><p>注入失败才会有值</p>
   */
  Reason?: string
}

/**
 * 基线分类基础信息，覆盖父分类与子分类两层。
 */
export interface BaselineCategory {
  /**
   * <p>基线分类 ID。</p>
   */
  ID?: number
  /**
   * <p>基线分类名称（中文）。</p>
   */
  Name?: string
  /**
   * <p>基线分类描述（中文）。</p>
   */
  Description?: string
  /**
   * <p>检测资产大类，区分主机基线与容器集群基线。取值：</p><ul><li>HOST：主机</li><li>CLUSTER：容器集群</li></ul>
   */
  CheckAssetType?: string
}

/**
 * DescribeEdrAlertCountForContainer返回参数结构体
 */
export interface DescribeEdrAlertCountForContainerResponse {
  /**
   * <p>全局模式返回（两个 ID 数组都为空时）；分组模式为 null</p>
   */
  GlobalCount?: EdrContainerGlobalCount
  /**
   * <p>分组模式返回（ContainerIds 或 ClusterIds 非空时）；空返回 []</p>
   */
  Items?: Array<EdrContainerAlertCountItem>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDspmIdentifyLevelGroupList请求参数结构体
 */
export interface DescribeDspmIdentifyLevelGroupListRequest {
  /**
   * <p>集团账号的成员id</p>
   */
  MemberId?: Array<string>
  /**
   * <p>过滤条件</p>
   */
  Filter?: Filter
}

/**
 * CreateHostVulExportJob请求参数结构体
 */
export interface CreateHostVulExportJobRequest {
  /**
   * <p>导出的action</p><p>枚举值：</p><ul><li>LinuxHostVulRiskList： linux漏洞风险列表</li><li>WebCmsHostVulRiskList： WebCms漏洞风险列表</li><li>AppHostVulRiskList： App漏洞风险列表</li><li>EmergencyHostVulRiskList： 紧急漏洞风险列表</li><li>KBRiskList： Windows kb风险列表</li><li>RelateHostList： 关联主机列表</li><li>WhiteList： 漏洞白名单</li></ul>
   */
  BusinessAction: string
  /**
   * <p>集团账号的成员id</p>
   */
  MemberId?: Array<string>
  /**
   * <p>筛选条件数组，多条件之间为 AND 关系<br>支持的 Filter.Name：<br>KbID：KB风险关联主机情况下需要额外加入KB风险ID<br>VulID：漏洞风险关联主机情况下需要额外加入vul风险ID</p>
   */
  Filters?: Array<Filters>
}

/**
 * DescribeAssetTags请求参数结构体
 */
export interface DescribeAssetTagsRequest {
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
 * DescribeBaselinePolicyList返回参数结构体
 */
export interface DescribeBaselinePolicyListResponse {
  /**
   * <p>基线策略列表。</p>
   */
  List?: Array<BaselinePolicy>
  /**
   * <p>凭据总数</p>
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyRaspLicenseBinds返回参数结构体
 */
export interface ModifyRaspLicenseBindsResponse {
  /**
   * 任务ID,用于查询绑定进度
   */
  TaskId?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeEDRScanRecordList返回参数结构体
 */
export interface DescribeEDRScanRecordListResponse {
  /**
   * <p>符合条件的总数</p>
   */
  TotalCount?: number
  /**
   * <p>扫描任务记录列表</p>
   */
  RecordList?: Array<EDRScanRecordItem>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 基线概览页头部的统计指标。
 */
export interface BaselineOverviewStatistic {
  /**
   * <p>当前未通过的检测项总数（含主机和容器集群）。</p>
   */
  NotPassItemCount?: number
  /**
   * <p>未通过检测项按策略分组的统计列表。</p>
   */
  NotPassItemStatistic?: Array<NotPassItemStatistic>
  /**
   * <p>近一年累计已修复的基线风险数量。</p>
   */
  LastYearFixCount?: number
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
 * CreateVulFixTask请求参数结构体
 */
export interface CreateVulFixTaskRequest {
  /**
   * <p>修复项列表，每项指定一个漏洞/KB补丁及其需要修复的主机<br>入参限制：最多100项，总实例数不超过5000</p>
   */
  FixItems: Array<VulFixItem>
  /**
   * <p>最大修复时间<br>单位：秒<br>默认值：3600</p>
   */
  Timeout?: number
  /**
   * <p>是否在修复前创建磁盘快照<br>默认值：false</p>
   */
  CreateSnapshot?: boolean
  /**
   * <p>快照名称，CreateSnapshot为true时有效<br>入参限制：最长128个字符</p>
   */
  SnapshotName?: string
  /**
   * <p>快照保存天数，CreateSnapshot为true时有效</p>
   */
  SaveDays?: number
  /**
   * 集团账号的成员id
   */
  MemberId?: Array<string>
}

/**
 * 基线策略聚合结果，用于策略维度汇总展示当前扫描通过/未通过情况。
 */
export interface BaselineAggregatedPolicy {
  /**
   * <p>系统策略所属父分类 ID（仅 PolicyType=SYSTEM 时聚合使用，自定义策略为 0）。</p>
   */
  ParentCategoryID?: number
  /**
   * <p>本次聚合涉及的基线策略 ID 列表。</p>
   */
  PolicyID?: Array<number | bigint>
  /**
   * <p>策略名称（自定义策略为用户输入，系统策略为内置分类名）。</p>
   */
  Name?: string
  /**
   * <p>策略描述。</p>
   */
  Description?: string
  /**
   * <p>策略已配置的检测项数量。</p>
   */
  ConfItemCount?: number
  /**
   * <p>本策略下结果为 PASS 的检测项数量。</p>
   */
  PassItemCount?: number
  /**
   * <p>本策略下结果为 NOT_PASS 的检测项数量。</p>
   */
  NotPassItemCount?: number
  /**
   * <p>未通过检测项按风险等级（LOW/MEDIUM/HIGH/CRITICAL）的分布统计。</p>
   */
  NotPassItemRiskLevelStatistic?: Array<BaselineRiskLevelStatistic>
  /**
   * <p>本策略最近一次扫描的通过率，单位为百分比（0~100），保留两位小数。</p>
   */
  PassRate?: number
  /**
   * <p>该策略下各子分类的扫描结果统计明细。</p>
   */
  CategoryStatistic?: Array<BaselineAggregatedCategory>
  /**
   * <p>基线策略类型。取值：</p><ul><li>SYSTEM：系统策略（CSIP 内置）</li><li>SELF：用户自定义策略</li></ul>
   */
  PolicyType?: string
  /**
   * <p>检测资产大类，区分主机基线与容器集群基线。取值：</p><ul><li>HOST：主机</li><li>CLUSTER：容器集群</li></ul>
   */
  CheckAssetType?: string
  /**
   * <p>该基线类别是否被扫描过</p>
   */
  Scanned?: boolean
}

/**
 * 暴力破解判定规则列表
 */
export interface BruteAttackRuleList {
  /**
   * <p>爆破事件发生的时间范围，单位：秒</p>
   */
  TimeRange?: number
  /**
   * <p>爆破事件失败次数</p>
   */
  LoginFailTimes?: number
  /**
   * <p>规则是否为空，为空则填充默认规则</p>
   */
  Enable?: boolean
  /**
   * <p>爆破事件发生的时间范围，单位：秒（默认规则）</p>
   */
  TimeRangeDefault?: number
  /**
   * <p>爆破事件失败次数（默认规则）</p>
   */
  LoginFailTimesDefault?: number
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
 * ModifyMachinesLoginType请求参数结构体
 */
export interface ModifyMachinesLoginTypeRequest {
  /**
   * <p>登录方式：0-原始方式，1-扫码免密登录</p>
   */
  LoginType: number
  /**
   * <p>集团账号的成员id</p>
   */
  MemberId?: Array<string>
  /**
   * <p>instance_id列表(instance_ids和quuids至少要填一个)</p>
   */
  InstanceIds?: Array<string>
  /**
   * <p>主机quuid列表(instance_ids和quuids至少要填一个)</p>
   */
  Quuids?: Array<string>
  /**
   * <p>排除的quuid集合</p>
   */
  ExcludeQuuid?: Array<string>
  /**
   * <p>开启范围 0 自选主机 1 全部主机</p>
   */
  Scope?: number
  /**
   * <p>操作来源 :<br>0   主机页面<br>1   客户端设置页面<br>2   安全中心页面<br>3   LightHouse购买页<br>4   LightHouse控制台</p>
   */
  From?: number
  /**
   * <p>请求版本 0   原始版本 1   策略式请求</p>
   */
  RequestVersion?: number
}

/**
 * 反查域名信息
 */
export interface DomainInfo {
  /**
   * <p>域名</p>
   */
  Domain?: string
  /**
   * <p>分析时间</p>
   */
  AnalysisTime?: string
  /**
   * <p>标签</p>
   */
  Tags?: Array<string>
}

/**
 * DescribeAgentRunPolicy请求参数结构体
 */
export interface DescribeAgentRunPolicyRequest {
  /**
   * <p>集团账号的成员id</p>
   */
  MemberId?: Array<string>
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
 * DescribeBaselineAggregatedPolicyList返回参数结构体
 */
export interface DescribeBaselineAggregatedPolicyListResponse {
  /**
   * <p>策略维度聚合结果列表。</p>
   */
  List?: Array<BaselineAggregatedPolicy>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeSecurityRiskTrend返回参数结构体
 */
export interface DescribeSecurityRiskTrendResponse {
  /**
   * <p>按维度分组的趋势数据</p>
   */
  TrendData?: Array<DimensionTrendData>
  /**
   * <p>最后一天风险摘要（告警 + 适用漏洞项）</p>
   */
  RiskItems?: Array<RiskTrendItem>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeLoginTypeGlobalConf请求参数结构体
 */
export interface DescribeLoginTypeGlobalConfRequest {
  /**
   * <p>集团账号的成员id</p>
   */
  MemberId?: Array<string>
}

/**
 * 关联组件&路径详情
 */
export interface ComponentDetailItem {
  /**
   * 组件名称
   */
  Name?: string
  /**
   * 命中版本
   */
  Version?: string
  /**
   * 关联路径
   */
  Path?: string
  /**
   * 修复命令
   */
  FixCommand?: string
}

/**
 * DescribeCLSLogIndexV3请求参数结构体
 */
export interface DescribeCLSLogIndexV3Request {
  /**
   * <p>过滤条件</p>
   */
  Filters: Array<LogCLSFilter>
  /**
   * <p>集团账号的成员id</p>
   */
  MemberId?: Array<string>
  /**
   * <p>limit限制</p>
   */
  Limit?: number
  /**
   * <p>offset</p>
   */
  Offset?: number
}

/**
 * DescribeUserInfo请求参数结构体
 */
export type DescribeUserInfoRequest = null

/**
 * 容器资产扫描详情项
 */
export interface EDRScanTaskContainerItem {
  /**
   * <p>容器ID</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  ContainerID?: string
  /**
   * <p>容器名称</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  ContainerName?: string
  /**
   * <p>Pod名称</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  PodName?: string
  /**
   * <p>集群ID</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  ClusterID?: string
  /**
   * <p>集群名称</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  ClusterName?: string
  /**
   * <p>集群类型</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  ClusterType?: string
  /**
   * <p>资产所属账号名称（后端富化）</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  AccountName?: string
  /**
   * <p>所属账号AppId</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  AppId?: number
  /**
   * <p>云类型</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  CloudType?: number
  /**
   * <p>扫描状态：WAIT/SCANNING/FINISHED/FAILED</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Status?: string
  /**
   * <p>告警数</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  RiskCount?: number
  /**
   * <p>失败原因</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  FailReason?: string
  /**
   * <p>解决方案</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  FixSuggestion?: string
}

/**
 * 执行任务记录
 */
export interface AiScheduleTaskInfo {
  /**
   * <p>任务 ID。</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  TaskId?: string
  /**
   * <p>所属AI 定时任务 ID。</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  ScheduleId?: string
  /**
   * <p>触发该任务的触发器 ID。</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  TriggerId?: string
  /**
   * <p>Agent 调用的唯一会话 ID。</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  SessionId?: string
  /**
   * <p>执行状态。</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Status?: number
  /**
   * <p>Agent 输出结果或错误详情。</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Result?: string
  /**
   * <p>计划触发时间，Unix 毫秒时间戳。</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  ScheduledTime?: number
  /**
   * <p>实际开始执行时间，Unix 毫秒时间戳。</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  StartTime?: number
  /**
   * <p>执行完成时间，Unix 毫秒时间戳。</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  EndTime?: number
  /**
   * <p>创建时间，Unix 毫秒时间戳。</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  CreateTime?: number
  /**
   * <p>更新时间，Unix 毫秒时间戳。</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  UpdateTime?: number
  /**
   * <p>定时任务名称</p>
   */
  TaskName?: string
  /**
   * <p>定时任务提示词</p>
   */
  Prompts?: string
}

/**
 * DescribeProcessDaemonGlobalConf请求参数结构体
 */
export interface DescribeProcessDaemonGlobalConfRequest {
  /**
   * <p>集团账号的成员id</p>
   */
  MemberId?: Array<string>
}

/**
 * CheckRisk请求参数结构体
 */
export interface CheckRiskRequest {
  /**
   * 风险ID
   */
  RiskDetailId: number
  /**
   * <p>集团账号的成员id</p>
   */
  MemberId?: Array<string>
}

/**
 * ModifyAssetTag返回参数结构体
 */
export interface ModifyAssetTagResponse {
  /**
   * <p>状态码</p>
   */
  Code?: string
  /**
   * <p>信息</p>
   */
  Message?: string
  /**
   * <p>该打标规则是否在执行中</p>
   */
  HasRunningApply?: boolean
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDspmBackupSetting返回参数结构体
 */
export interface DescribeDspmBackupSettingResponse {
  /**
   * <p>备份日志保留时长</p>
   */
  BackupLogSaveTime?: number
  /**
   * <p>恢复日志保留时长</p>
   */
  RestoreLogSaveTime?: number
  /**
   * <p>日志最大生命周期限制</p>
   */
  LogMaxSaveTime?: number
  /**
   * <p>在线日志最大天数限制</p>
   */
  OnlineLogMaxSaveTime?: number
  /**
   * <p>最大在线日志条数，单位是：个</p>
   */
  MaxOnlineLogCount?: number
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
 * DescribeCWPMachineOsList请求参数结构体
 */
export interface DescribeCWPMachineOsListRequest {
  /**
   * <p>集团账号的成员id</p>
   */
  MemberId?: Array<string>
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
 * DescribeTagRuleAssets返回参数结构体
 */
export interface DescribeTagRuleAssetsResponse {
  /**
   * 资产数量
   */
  TotalCount?: number
  /**
   * 资产集合
   */
  Assets?: Array<AssetTagPreviewAssetItem>
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
 * ModifyWebhookReceiver请求参数结构体
 */
export interface ModifyWebhookReceiverRequest {
  /**
   * <p>机器人名称<br>入参限制：长度 1-20 个字符，租户内唯一</p>
   */
  Name: string
  /**
   * <p>机器人类型<br>枚举值：<br>WEBHOOK：webhook 类型<br>SCF：云函数类型</p>
   */
  Type: string
  /**
   * <p>机器人 ID。大于 0 表示修改已有记录；等于 0 或不传表示新增<br>默认值：0</p>
   */
  ID?: number
  /**
   * <p>Webhook 地址<br>入参限制：Type=WEBHOOK 时必填，长度 1-2048，必须为合法 http(s) URL，且不允许内网地址</p>
   */
  WebhookAddr?: string
  /**
   * <p>云函数地域，例如 ap-guangzhou<br>入参限制：Type=SCF 时必填</p>
   */
  SCFRegion?: string
  /**
   * <p>云函数命名空间<br>入参限制：Type=SCF 时必填<br>取值参考：通过 DescribeSCFNamespaceList 接口获取</p>
   */
  Namespace?: string
  /**
   * <p>云函数名称<br>入参限制：Type=SCF 时必填<br>取值参考：通过 DescribeSCFFunctionList 接口获取</p>
   */
  FunctionName?: string
  /**
   * <p>云函数版本<br>入参限制：Type=SCF 时必填，例如 $LATEST<br>取值参考：通过 DescribeSCFFunctionVersionList 接口获取</p>
   */
  FunctionVersion?: string
  /**
   * <p>云函数别名<br>入参限制：Type=SCF 时必填，例如 $DEFAULT<br>取值参考：通过 DescribeSCFAliasList 接口获取</p>
   */
  Alias?: string
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
 * 账号简要信息
 */
export interface AccountBriefInfo {
  /**
   * <p>账号 AppID</p>
   */
  AppID?: number
  /**
   * <p>账号昵称</p>
   */
  Nick?: string
  /**
   * <p>账号 Uin</p>
   */
  Uin?: string
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
 * DescribeAssetFilterViews返回参数结构体
 */
export interface DescribeAssetFilterViewsResponse {
  /**
   * 资产搜索视图
   */
  FilterViews?: Array<AssetViewFilter>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 批量修改主机登录方式任务
 */
export interface ModifyMachinesLoginTypeTask {
  /**
   * <p>任务ID</p>
   */
  Id?: number
  /**
   * <p>1-进行中，2已完成</p>
   */
  Status?: number
  /**
   * <p>执行成功数量</p>
   */
  SuccessCount?: number
  /**
   * <p>执行失败主机列表</p>
   */
  FailList?: Array<ModifyLoginTypeFailInfo>
  /**
   * <p>修改成功的实例ID列表</p>
   */
  SuccessInstances?: Array<string>
  /**
   * <p>修改中的实例ID列表</p>
   */
  ProgressingInstances?: Array<string>
  /**
   * <p>失败主机数</p>
   */
  FailedHostCount?: number
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
 * ModifyLoginWhiteRecord请求参数结构体
 */
export interface ModifyLoginWhiteRecordRequest {
  /**
   * <p>白名单用户（多个用户逗号隔开）</p>
   */
  UserName: string
  /**
   * <p>更新后记录的白名单维度信息</p>
   */
  SrcIp: string
  /**
   * <p>开始时间</p>
   */
  StartTime: string
  /**
   * <p>结束时间</p>
   */
  EndTime: string
  /**
   * <p>备注</p>
   */
  Remark: string
  /**
   * <p>是否对所有服务器生效，0-否，1-是</p>
   */
  IsGlobal: number
  /**
   * <p>白名单ID</p>
   */
  Id: number
  /**
   * <p>集团账号的成员id</p>
   */
  MemberId?: Array<string>
  /**
   * <p>服务器列表</p>
   */
  Hosts?: Array<HostInfo>
  /**
   * <p>地域列表</p>
   */
  Places?: Array<Place>
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
 * DescribeAIAnalysisFileDownloadURL请求参数结构体
 */
export interface DescribeAIAnalysisFileDownloadURLRequest {
  /**
   * <p>文件原始下载地址，最大 2048 字符。可通过 AI 分析流式接口返回的文件信息获取。</p>
   */
  Url?: string
}

/**
 * dspm分类分级模板列表信息
 */
export interface DspmIdentifyComplianceItem {
  /**
   * <p>识别模板ID</p>
   */
  Id?: number
  /**
   * <p>识别模板名称</p>
   */
  Name?: string
  /**
   * <p>描述</p>
   */
  Description?: string
  /**
   * <p>启用状态</p><p>枚举值：</p><ul><li>0： 不启用</li><li>1： 启用</li></ul>
   */
  Status?: number
  /**
   * <p>模板类型</p><p>枚举值：</p><ul><li>0： 内置</li><li>1： 自定义</li></ul>
   */
  Type?: number
  /**
   * <p>更新时间</p>
   */
  UpdateTime?: string
  /**
   * <p>应用状态</p><p>枚举值：</p><ul><li>0： 未应用</li><li>1： 应用中</li></ul>
   */
  ApplyStatus?: number
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
 * DescribeMultiCloudAssetCount返回参数结构体
 */
export interface DescribeMultiCloudAssetCountResponse {
  /**
   * <p>云上资产总数<br>取值范围：[0, +∞)</p>
   */
  TotalCount?: number
  /**
   * <p>各云厂商资产数量明细</p>
   */
  CloudAssetInfos?: Array<CloudAssetInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeAISchedulePlanList返回参数结构体
 */
export interface DescribeAISchedulePlanListResponse {
  /**
   * <p>触发计划列表。</p>
   */
  PlanSet?: Array<AiSchedulePlanInfo>
  /**
   * <p>总条数。</p>
   */
  TotalCount?: number
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
   * <p>爆破事件发生的时间范围，单位：秒</p>
   */
  TimeRange: number
  /**
   * <p>爆破事件失败次数</p>
   */
  LoginFailTimes: number
}

/**
 * DeleteEdrLogCollectPaths请求参数结构体
 */
export interface DeleteEdrLogCollectPathsRequest {
  /**
   * <p>配置ID列表</p>
   */
  Ids: Array<number | bigint>
  /**
   * <p>集团账号的成员id</p>
   */
  MemberId?: Array<string>
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
 * 接收机器人信息
 */
export interface WebhookReceiver {
  /**
   * <p>机器人 ID</p>
   */
  ID?: number
  /**
   * <p>机器人名称<br>入参限制：长度 1-20 个字符</p>
   */
  Name?: string
  /**
   * <p>机器人类型<br>枚举值：<br>WEBHOOK：webhook 类型<br>SCF：云函数类型</p>
   */
  Type?: string
  /**
   * <p>Webhook 地址，仅 Type=WEBHOOK 时返回，否则为空串</p>
   */
  WebhookAddr?: string
  /**
   * <p>云函数地域，仅 Type=SCF 时返回</p>
   */
  SCFRegion?: string
  /**
   * <p>云函数命名空间，仅 Type=SCF 时返回</p>
   */
  Namespace?: string
  /**
   * <p>云函数函数名，仅 Type=SCF 时返回</p>
   */
  FunctionName?: string
  /**
   * <p>云函数函数版本，仅 Type=SCF 时返回</p>
   */
  FunctionVersion?: string
  /**
   * <p>云函数函数别名，仅 Type=SCF 时返回</p>
   */
  Alias?: string
}

/**
 * EDR命令行规则
 */
export interface RuleContentCmdLine {
  /**
   * <p>进程命令行信息</p>
   */
  Process?: RuleContentProcessInfo
  /**
   * <p>父进程命令行信息</p>
   */
  ParentProcess?: RuleContentProcessInfo
  /**
   * <p>祖先进程命令行信息</p>
   */
  AncestorProcess?: RuleContentProcessInfo
}

/**
 * DescribeKBDetail返回参数结构体
 */
export interface DescribeKBDetailResponse {
  /**
   * Windows KB 补丁详细信息
   */
  KBDetail?: KBDetail
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
 * ModifyDspmIdentifyLevelGroup返回参数结构体
 */
export interface ModifyDspmIdentifyLevelGroupResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateHighBaseLineRisksExportJob请求参数结构体
 */
export interface CreateHighBaseLineRisksExportJobRequest {
  /**
   * 云账号ID
   */
  CloudAccountID: string
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
 * DescribeExposeRules返回参数结构体
 */
export interface DescribeExposeRulesResponse {
  /**
   * 边界规则列表
   */
  ExposeRuleList?: Array<ExposeRuleItem>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

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
 * RetryDspmExportLog请求参数结构体
 */
export interface RetryDspmExportLogRequest {
  /**
   * <p>集团账号的成员id</p>
   */
  MemberId?: Array<string>
  /**
   * <p>任务ID</p>
   */
  TaskId?: number
}

/**
 * DescribeMachineGeneral请求参数结构体
 */
export interface DescribeMachineGeneralRequest {
  /**
   * <p>集团账号的成员id</p>
   */
  MemberId?: Array<string>
}

/**
 * DescribeHostVulItemVPRInfo请求参数结构体
 */
export interface DescribeHostVulItemVPRInfoRequest {
  /**
   * <p>集团账号的成员id</p>
   */
  MemberId?: Array<string>
  /**
   * <p>漏洞ID</p>
   */
  VulID?: number
}

/**
 * 授权绑定任务详情
 */
export interface LicenseBindTaskDetail {
  /**
   * <p>云服务器UUID</p>
   */
  Quuid?: string
  /**
   * <p>错误信息</p>
   */
  ErrMsg?: string
  /**
   * <p>0 执行中, 1 成功,2失败</p>
   */
  Status?: number
  /**
   * <p>修复建议</p>
   */
  FixMessage?: string
  /**
   * <p>机器额外信息</p>
   */
  MachineExtraInfo?: MachineExtraInfo
}

/**
 * StopProcessDaemon返回参数结构体
 */
export interface StopProcessDaemonResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreatePodContainerListExportJob请求参数结构体
 */
export interface CreatePodContainerListExportJobRequest {
  /**
   * <p>集团账号的成员id</p>
   */
  MemberId?: Array<string>
  /**
   * <p>Pod唯一ID</p>
   */
  PodUniqueID?: string
  /**
   * <p>集群CA证书MD5（用于查节点信息）</p>
   */
  ClusterCaMD5?: string
  /**
   * <p>通用过滤条件列表。支持的过滤字段：<br>ContainerId：容器ID，精确匹配。<br>ContainerName：容器名称，模糊匹配。<br>RunStatus：容器运行状态，精确匹配。取值：RUNNING、PAUSED、STOPPED、CREATED、DESTROYED、RESTARTING、REMOVING、DEAD、UNKNOWN。<br>ImageId：镜像ID，精确匹配。<br>ImageName：镜像名称，模糊匹配。<br>IsolateStatus：隔离状态，精确匹配。取值：NORMAL（未隔离）、ISOLATED（已隔离）、ISOLATING（隔离中）、ISOLATE_FAILED（隔离失败）、RESTORING（解除隔离中）、RESTORE_FAILED（解除隔离失败）。<br>NodeUniqueId：所属节点唯一ID，精确匹配（NodeAssetId 为等价别名）。<br>UUID：主机UUID，精确匹配。</p>
   */
  Filter?: Filter
  /**
   * <p>导出字段列表（不传则导出全部字段）<br>枚举值：<br>ContainerId：容器ID<br>ContainerName：容器名称<br>RunStatus：运行状态<br>NodeId：节点ID<br>NodeType：节点类型<br>ImageId：镜像ID<br>ImageName：镜像名称<br>IsolateStatus：隔离状态</p>
   */
  ExportFields?: Array<string>
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
 * dspm数据识别模板数据项关联关系
 */
export interface DspmIdentifyComplianceRuleRelation {
  /**
   * <p>数据项ID</p>
   */
  RuleId?: number
  /**
   * <p>数据项名称</p>
   */
  RuleName?: string
  /**
   * <p>级别ID</p>
   */
  LevelId?: number
  /**
   * <p>级别名称</p>
   */
  LevelName?: string
  /**
   * <p>级别程度</p><p>单位：分数</p>
   */
  LevelScore?: number
  /**
   * <p>结构化规则状态</p><p>枚举值：</p><ul><li>0： 未配置</li><li>1： 已配置</li></ul>
   */
  StructuredStatus?: number
  /**
   * <p>非结构化规则状态</p><p>枚举值：</p><ul><li>0： 未配置</li><li>1： 已配置</li></ul>
   */
  UnStructuredStatus?: number
  /**
   * <p>数据项开启状态</p><p>枚举值：</p><ul><li>0： 未开启</li><li>1： 已开启</li></ul>
   */
  Status?: number
}

/**
 * 日志检索信息
 */
export interface LogSearchInfos {
  /**
   * <p>主题</p>
   */
  TopicId?: string
  /**
   * <p>时间间隔</p>
   */
  Period?: number
  /**
   * <p>上下文</p>
   */
  Context?: string
}

/**
 * CreateAssetViewRisksExportJob请求参数结构体
 */
export interface CreateAssetViewRisksExportJobRequest {
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
 * DescribeWebhookReceiverList返回参数结构体
 */
export interface DescribeWebhookReceiverListResponse {
  /**
   * 接收机器人列表
   */
  Data?: Array<WebhookReceiver>
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
 * ModifyBaselinePolicyEnable返回参数结构体
 */
export interface ModifyBaselinePolicyEnableResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 容器进程信息
 */
export interface ContainerProcessItem {
  /**
   * 进程名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  ProcessName?: string
  /**
   * 宿主机进程ID
   */
  PID?: number
  /**
   * 容器内进程ID
   */
  ContainerPID?: number
  /**
   * 进程可执行文件路径
注意：此字段可能返回 null，表示取不到有效值。
   */
  ProcessPath?: string
  /**
   * 进程运行用户
注意：此字段可能返回 null，表示取不到有效值。
   */
  RunAs?: string
  /**
   * 进程启动时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  StartTime?: string
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
 * dspm关联识别模板信息
 */
export interface DspmIdentifyRefComplianceInfo {
  /**
   * <p>识别模板ID</p>
   */
  ComplianceId?: number
  /**
   * <p>识别模板名称</p>
   */
  ComplianceName?: string
  /**
   * <p>识别模板类型</p><p>枚举值：</p><ul><li>0： 内置</li><li>1： 自定义</li></ul>
   */
  ComplianceType?: number
}

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
 * DescribeSCFFunctionVersionList返回参数结构体
 */
export interface DescribeSCFFunctionVersionListResponse {
  /**
   * SCF 函数版本列表
   */
  List?: Array<SCFFunctionVersionInfo>
  /**
   * 版本总数
   */
  TotalCount?: number
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
 * DescribeAssetRiskDetail返回参数结构体
 */
export interface DescribeAssetRiskDetailResponse {
  /**
   * 资产风险详情
   */
  AssetRisks?: Array<AssetRiskContent>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyDspmIdentifyComplianceRuleLevelInfo请求参数结构体
 */
export interface ModifyDspmIdentifyComplianceRuleLevelInfoRequest {
  /**
   * <p>识别模板ID</p>
   */
  ComplianceId: number
  /**
   * <p>数据项id</p>
   */
  RuleId: number
  /**
   * <p>级别项id</p>
   */
  LevelId: number
  /**
   * <p>集团账号的成员id</p>
   */
  MemberId?: Array<string>
}

/**
 * 主机漏洞风险
 */
export interface HostKBRisk {
  /**
   * <p>风险记录 ID（kb_risk.id）</p>
   */
  RiskID?: number
  /**
   * <p>Windows KB 补丁详细信息</p>
   */
  KBDetail?: KBDetail
  /**
   * <p>受影响主机数</p>
   */
  EffectHostCount?: number
  /**
   * <p>最近扫描时间<br>参数格式：YYYY-MM-DDTHH:mm:ssZ</p>
   */
  LatestScanTime?: string
  /**
   * <p>所属账号列表</p>
   */
  Account?: Array<AccountBriefInfo>
  /**
   * <p>修复状态<br>枚举值：<br>PENDING：待修复<br>SCANNING：扫描中<br>FIXED：已修复<br>IGNORED：已加白<br>FIXING：修复中<br>FIX_FAILED：修复失败</p>
   */
  RiskStatus?: string
}

/**
 * 未来触发计划条目
 */
export interface AiSchedulePlanInfo {
  /**
   * 触发器 ID。
注意：此字段可能返回 null，表示取不到有效值。
   */
  TriggerId?: string
  /**
   * 预计触发时间，Unix 毫秒时间戳。
注意：此字段可能返回 null，表示取不到有效值。
   */
  FireTime?: number
  /**
   * 触发器类型。取值：1（Cron 表达式）、2（固定时间）。
注意：此字段可能返回 null，表示取不到有效值。
   */
  TriggerType?: number
}

/**
 * DescribeDspmIdentifyCategoryList返回参数结构体
 */
export interface DescribeDspmIdentifyCategoryListResponse {
  /**
   * <p>总数</p><p>单位：数量</p>
   */
  TotalCount?: number
  /**
   * <p>无</p>
   */
  DataSet?: Array<DspmIdentifyCategoryItem>
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
 * ModifyAssetTags返回参数结构体
 */
export interface ModifyAssetTagsResponse {
  /**
   * 状态码
   */
  Code?: string
  /**
   * 信息
   */
  Message?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeEdrExcludeNetworkSegments请求参数结构体
 */
export interface DescribeEdrExcludeNetworkSegmentsRequest {
  /**
   * <p>集团账号的成员id</p>
   */
  MemberId?: Array<string>
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
 * ModifyExposureTag请求参数结构体
 */
export interface ModifyExposureTagRequest {
  /**
   * 云边界分析ID集合
   */
  ExposureIDs: Array<number | bigint>
  /**
   * 标签
   */
  Tag: string
  /**
   * <p>集团账号的成员id</p>
   */
  MemberId?: Array<string>
  /**
   * 备注
   */
  Comment?: string
}

/**
 * CreatePodServiceListExportJob请求参数结构体
 */
export interface CreatePodServiceListExportJobRequest {
  /**
   * <p>集团账号的成员id</p>
   */
  MemberId?: Array<string>
  /**
   * <p>集群CA证书MD5（与PodUniqueID至少传一个）</p>
   */
  ClusterCaMD5?: string
  /**
   * <p>Pod唯一ID（传了即Pod关联Service模式）<br>补充说明：与ClusterCaMD5至少传一个</p>
   */
  PodUniqueID?: string
  /**
   * <p>通用过滤条件列表。支持的过滤字段：<br>Name：服务名称，模糊匹配。<br>ServiceType：服务类型，精确匹配。取值：ClusterIP、NodePort、LoadBalancer、ExternalName。<br>Namespace：命名空间，精确匹配。<br>SelectorLabel：Selector 标签，模糊匹配。</p>
   */
  Filter?: Filter
  /**
   * <p>导出字段列表（不传则导出全部字段）<br>枚举值：<br>Name：服务名称<br>ServiceType：服务类型（如LoadBalancer/ClusterIP）<br>Selector：Selector标签（格式：key1=value1;key2=value2）<br>Namespace：命名空间<br>CreateTime：创建时间</p>
   */
  ExportFields?: Array<string>
}

/**
 * CreatePodServiceListExportJob返回参数结构体
 */
export interface CreatePodServiceListExportJobResponse {
  /**
   * <p>导出任务ID<br>取值参考：前端轮询导出任务状态时使用</p>
   */
  JobId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 系统策略下父分类维度的检测项命中配置。
 */
export interface BaselinePolicySystemCategoryConf {
  /**
   * <p>系统父分类 ID。</p>
   */
  CategoryID: number
  /**
   * <p>是否全选该父分类下所有子分类。true 全选，false 按 SubCategoryConfList 明细生效。</p>
   */
  AllSelect: boolean
  /**
   * <p>子分类配置列表，AllSelect=false 时按此明细生效。</p>
   */
  SubCategoryConfList: Array<BaselinePolicySubCategoryConf>
}

/**
 * ModifyDspmIdentifyRuleStatus请求参数结构体
 */
export interface ModifyDspmIdentifyRuleStatusRequest {
  /**
   * <p>数据项id</p>
   */
  Ids: Array<number | bigint>
  /**
   * <p>数据项状态</p><p>枚举值：</p><ul><li>0： 关闭</li><li>1： 开启</li></ul>
   */
  Status: number
  /**
   * <p>集团账号的成员id</p>
   */
  MemberId?: Array<string>
}

/**
 * CreateComplianceRiskExportJob请求参数结构体
 */
export interface CreateComplianceRiskExportJobRequest {
  /**
   * <p>合规标准ID</p>
   */
  StandardID: number
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
  /**
   * <p>条款ID</p>
   */
  TermID?: number
}

/**
 * 漏洞情报数据
 */
export interface VulInfoListItem {
  /**
   * 风险等级
high 高危/ middle 中危 / low 低危 /info 提示
   */
  Level?: string
  /**
   * 漏洞披露时间
   */
  SubmitTime?: string
  /**
   * 漏洞名
   */
  VULName?: string
  /**
   * cveID/tvdID/ssvid
   */
  VULID?: string
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
 * ModifyDspmApplyingIdentifyComplianceGroup返回参数结构体
 */
export interface ModifyDspmApplyingIdentifyComplianceGroupResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 云资源配置检测检查类型统计
 */
export interface ComplianceCheckTypeItem {
  /**
   * <p>检查类型</p>
   */
  CheckType?: string
  /**
   * <p>关联检查项数量</p>
   */
  Count?: number
}

/**
 * 标准模式阻断配置
 */
export interface StandardModeConfig {
  /**
   * <p>阻断时长，单位：秒</p>
   */
  Ttl?: number
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
 * 单台机器的绑定状态明细
 */
export interface LicenseBindScheduleItem {
  /**
   * 实例ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  Quuid?: string
  /**
   * 绑定状态：0-初始化 1-成功 2-失败 3-跳过
注意：此字段可能返回 null，表示取不到有效值。
   */
  Status?: number
  /**
   * 错误信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  ErrMsg?: string
  /**
   * 修复建议
注意：此字段可能返回 null，表示取不到有效值。
   */
  FixMessage?: string
}

/**
 * DescribeNFSScanHost请求参数结构体
 */
export interface DescribeNFSScanHostRequest {
  /**
   * <p>集团账号的成员id</p>
   */
  MemberId?: Array<string>
  /**
   * <p>Name - string - 是否必填：否 - 主机名 InstanceId - string - 是否必填：否 - 实例ID PublicIp - string - 是否必填：否 - 公网IP PrivateIp - string - 是否必填：否 - 私网IP</p>
   */
  Filters?: Array<EDRFilter>
  /**
   * <p>限制条数,默认10,最大100</p>
   */
  Limit?: number
  /**
   * <p>偏移量,默认0</p>
   */
  Offset?: number
  /**
   * <p>排序方式: [ASC:升序|DESC:降序]</p>
   */
  Order?: string
  /**
   * <p>可选排序列: [Id]</p>
   */
  By?: string
}

/**
 * DeleteAISchedule返回参数结构体
 */
export interface DeleteAIScheduleResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
 * DescribeWebhookPolicyList返回参数结构体
 */
export interface DescribeWebhookPolicyListResponse {
  /**
   * <p>策略列表</p>
   */
  Data?: Array<WebhookPolicy>
  /**
   * <p>总数量</p>
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyAgentConfigSetting请求参数结构体
 */
export interface ModifyAgentConfigSettingRequest {
  /**
   * <p>集团账号的成员id</p>
   */
  MemberId?: Array<string>
  /**
   * <p>日志采集类型列表，可选值：tcp_src_port/tcp_ingress/http_egress/http_ingress/app_access</p>
   */
  LogCollectSettings?: Array<string>
  /**
   * <p>资产选择方式：all-全部付费资产，tag-按标签选择，direct-直接选择</p>
   */
  AssetSelectionType?: string
  /**
   * <p>按标签选择时的标签ID数组（AssetSelectionType=tag时使用）</p>
   */
  TagIds?: Array<string>
  /**
   * <p>直接选择的主机instance_id列表（AssetSelectionType=direct时使用）</p>
   */
  InstanceIDs?: Array<string>
  /**
   * <p>排除的主机instance_id列表（AssetSelectionType=all时使用）</p>
   */
  ExcludeInstanceIDs?: Array<string>
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
 * 描述键值对过滤器，用于条件过滤查询。例如过滤ID、名称、状态等

若存在多个Filter时，Filter间的关系为逻辑与（AND）关系。
若同一个Filter存在多个Values，同一Filter下Values间的关系为逻辑或（OR）关系。

* 最多只能有5个Filter
* 同一个Filter存在多个Values，Values值数量最多不能超过5个。

 */
export interface EDRFilter {
  /**
   * <p>过滤键的名称。</p>
   */
  Name: string
  /**
   * <p>一个或者多个过滤值。</p>
   */
  Values: Array<string>
  /**
   * <p>模糊搜索</p>
   */
  ExactMatch?: boolean
}

/**
 * DescribeCosObjectScanTask返回参数结构体
 */
export interface DescribeCosObjectScanTaskResponse {
  /**
   * <p>存储桶任务详情</p>
   */
  BucketTaskIdSet?: Array<CosBucketTaskInfo>
  /**
   * <p>appid维度任务列表</p>
   */
  MemberTaskIdSet?: Array<CosAssetSyncTaskInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeCSIPMalwareScanTaskProgress返回参数结构体
 */
export interface DescribeCSIPMalwareScanTaskProgressResponse {
  /**
   * <p>任务ID</p>
   */
  TaskId?: number
  /**
   * <p>任务整体状态枚举值：0： NeverScanned1： Scanning2： Finished3： Stopping4： Stopped</p>
   */
  Status?: number
  /**
   * <p>进度百分比 0~100（公式：20 + 80 × finished/total，含运行中机器时强制 ≤ 99；Status=Stopped 时强制 100）</p>
   */
  Schedule?: number
  /**
   * <p>子表机器总数</p>
   */
  TotalCount?: number
  /**
   * <p>进入终态的机器数（含 Terminating(6) / Terminated(7)）</p>
   */
  FinishedCount?: number
  /**
   * <p>累计风险告警数（来自主表 total_risk_count）</p>
   */
  RiskCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 资产信息
 */
export interface PublicAssetInfo {
  /**
   * <p>租户ID</p>
   */
  AppID?: number
  /**
   * <p>云厂商</p>
   */
  Provider?: string
  /**
   * <p>云厂商名称</p>
   */
  ProviderName?: string
  /**
   * <p>云账号ID</p>
   */
  CloudAccountID?: string
  /**
   * <p>云账号名称</p>
   */
  CloudAccountName?: string
  /**
   * <p>资产ID</p>
   */
  AssetID?: string
  /**
   * <p>资产名称</p>
   */
  AssetName?: string
  /**
   * <p>资产类型</p>
   */
  AssetType?: string
  /**
   * <p>资产类型名称</p>
   */
  AssetTypeName?: string
  /**
   * <p>资产标签</p>
   */
  Tags?: Array<AssetTag>
  /**
   * <p>公网地址</p>
   */
  Address?: string
  /**
   * <p>公网地址类型</p>
   */
  AddressType?: string
  /**
   * <p>解析地址</p>
   */
  ResolvedAddress?: Array<string>
  /**
   * <p>地域</p>
   */
  Region?: string
  /**
   * <p>防护状态</p>
   */
  ProtectStatus?: number
  /**
   * <p>风险数量</p>
   */
  RiskCount?: number
  /**
   * <p>告警数量</p>
   */
  AlarmCount?: number
  /**
   * <p>实例创建时间</p>
   */
  CreatedAt?: string
  /**
   * <p>首次同步时间</p>
   */
  FirstSyncTime?: string
  /**
   * <p>更新时间</p>
   */
  UpdateTime?: string
  /**
   * <p>严重风险总数</p>
   */
  CriticalRiskCount?: number
  /**
   * <p>高风险总数</p>
   */
  HighRiskCount?: number
  /**
   * <p>中风险总数</p>
   */
  MediumRiskCount?: number
  /**
   * <p>低风险总数</p>
   */
  LowRiskCount?: number
  /**
   * <p>资产唯一ID</p>
   */
  AssetRID?: string
  /**
   * <p>云安全中心标签</p>
   */
  CustomTags?: Array<CustomTag>
  /**
   * <p>资产类型图标</p>
   */
  AssetTypeIconURL?: string
}

/**
 * DescribeDspmIdentifyComplianceGroupList返回参数结构体
 */
export interface DescribeDspmIdentifyComplianceGroupListResponse {
  /**
   * <p>总数</p><p>单位：数量</p>
   */
  TotalCount?: number
  /**
   * <p>无</p>
   */
  DataSet?: Array<DspmIdentifyComplianceItem>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeExposureTrend请求参数结构体
 */
export interface DescribeExposureTrendRequest {
  /**
   * <p>集团账号的成员id</p>
   */
  MemberId?: Array<string>
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
 * CreateScanTask请求参数结构体
 */
export interface CreateScanTaskRequest {
  /**
   * <p>集团账号的成员id</p>
   */
  MemberId?: Array<string>
  /**
   * <p>检测模式</p>
   */
  TaskMode?: number
  /**
   * <p>规则集合</p>
   */
  RuleIDs?: Array<string>
  /**
   * <p>规范ID</p>
   */
  StandardIDs?: Array<number | bigint>
}

/**
 * 规则统计信息
 */
export interface RuleStatisticsItem {
  /**
   * <p>名称</p>
   */
  Text?: string
  /**
   * <p>值</p>
   */
  Value?: string
  /**
   * <p>统计信息</p>
   */
  Count?: string
}

/**
 * 用户行为 异常行为详细信息
 */
export interface BehaviorInfo {
  /**
   * 日期
注意：此字段可能返回 null，表示取不到有效值。
   */
  Date?: string
  /**
   * 具体数据，用来渲染曲线
注意：此字段可能返回 null，表示取不到有效值。
   */
  NodeInfo?: Array<NodeInfo>
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
 * 云资源配置检测条款项
 */
export interface ComplianceTermItem {
  /**
   * <p>条款ID</p>
   */
  TermID?: number
  /**
   * <p>条款描述</p>
   */
  Description?: string
  /**
   * <p>条款名称</p>
   */
  Name?: string
  /**
   * <p>关联规则数量</p>
   */
  RuleCount?: number
  /**
   * <p>条款原理</p>
   */
  Rationale?: string
  /**
   * <p>编号</p>
   */
  Sn?: string
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
 * CreateEdrLessAlertExportJob返回参数结构体
 */
export interface CreateEdrLessAlertExportJobResponse {
  /**
   * <p>任务ID,需要到接口“异步导出任务”ExportTasks获取DownloadUrl下载地址</p>
   */
  TaskId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 基线系统主分类（含其下所有子分类与检测项 ID 列表）。
 */
export interface BaselineSystemCategory {
  /**
   * <p>该父分类下的子分类列表（每个子分类含其内置检测项 ID 列表）。</p>
   */
  SubCategoryList?: Array<BaselineSubCategory>
  /**
   * <p>系统父分类基础信息（ID、名称、描述、CheckAssetType）。</p>
   */
  Category?: BaselineCategory
  /**
   * <p>检测项个数</p>
   */
  ItemCount?: number
}

/**
 * DeleteEdrLogCollectPaths返回参数结构体
 */
export interface DeleteEdrLogCollectPathsResponse {
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
 * ModifyWebhookPolicy请求参数结构体
 */
export interface ModifyWebhookPolicyRequest {
  /**
   * <p>策略名称<br>入参限制：长度 1-20 个字符，租户内唯一</p>
   */
  Name: string
  /**
   * <p>启用状态<br>枚举值：<br>ON：启用<br>OFF：禁用</p>
   */
  Status: string
  /**
   * <p>通知项列表<br>入参限制：至少 1 项，Module/SubModule 必须为 DescribeWebhookNotifyItemTree 返回的合法组合</p>
   */
  NotifyItems: Array<WebhookNotifyItem>
  /**
   * <p>通知资产范围</p>
   */
  AssetScope: WebhookAssetScope
  /**
   * <p>接收格式<br>枚举值：<br>TEXT：文本格式<br>JSON：JSON 格式</p>
   */
  ReceiveFormat: string
  /**
   * <p>接收机器人 ID 列表<br>入参限制：至少 1 个，最多 50 个</p>
   */
  ReceiverIDList: Array<number | bigint>
  /**
   * <p>集团账号的成员id</p>
   */
  MemberId?: Array<string>
  /**
   * <p>策略 ID。大于 0 表示修改；等于 0 或不传表示新增<br>默认值：0</p>
   */
  ID?: number
  /**
   * <p>推送语言<br>枚举值：<br>zh：中文<br>en：英文<br>默认值：国内站默认 zh，国际站默认 en</p>
   */
  MsgLanguage?: string
  /**
   * <p>自定义透传字段列表<br>入参限制：EnableCustomFields=true 时必填，最多 20 个</p>
   */
  CustomFields?: Array<WebhookCustomField>
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
 * 趋势数据点
 */
export interface TrendDataPoint {
  /**
   * 日期
参数格式：YYYY-MM-DD
   */
  Date?: string
  /**
   * 风险数量，无数据时为0
   */
  RiskCount?: number
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
 * DescribeAIAnalysisSMTP请求参数结构体
 */
export type DescribeAIAnalysisSMTPRequest = null

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
 * EDR告警列表信息
 */
export interface EdrAlertItem {
  /**
   * <p>告警表id</p>
   */
  Id?: number
  /**
   * <p>APPID</p>
   */
  AppId?: number
  /**
   * <p>告警ID</p>
   */
  AlertId?: string
  /**
   * <p>告警大类</p>
   */
  AlertCategory?: string
  /**
   * <p>告警子类</p>
   */
  AlertSubType?: string
  /**
   * <p>策略ID</p>
   */
  RuleId?: string
  /**
   * <p>策略类型</p>
   */
  RuleType?: number
  /**
   * <p>告警等级</p>
   */
  Level?: string
  /**
   * <p>告警状态</p>
   */
  Status?: string
  /**
   * <p>攻击阶段</p>
   */
  AttackStage?: string
  /**
   * <p>检测模式</p>
   */
  DetectMode?: string
  /**
   * <p>实例ID</p>
   */
  InstanceId?: string
  /**
   * <p>QUUID</p>
   */
  Quuid?: string
  /**
   * <p>是否付费</p>
   */
  IsProVersion?: number
  /**
   * <p>告警来源</p>
   */
  AlertSource?: string
  /**
   * <p>机器类型（列表接口专有；不限于容器告警，主机告警同样返回）。按 Quuid 富化自 machines.machine_type，原始枚举值原样透传、不做 i18n 翻译，前端自行映射展示。取值如 CVM / LH / Other / EKS-NATIVE 等；查不到对应机器信息时降级为空串 ""（与 InstanceName / PublicIp / PrivateIp 等资产富化字段降级行为一致）。告警详情接口（DescribeEdrAlertInfo）不返回此字段</p>
   */
  MachineType?: string
  /**
   * <p>镜像ID</p>
   */
  ImageId?: string
  /**
   * <p>容器id</p>
   */
  ContainerId?: string
  /**
   * <p>集群ID</p>
   */
  ClusterId?: string
  /**
   * <p>告警数量</p>
   */
  EventCount?: number
  /**
   * <p>最初发现时间</p>
   */
  FirstDetectTime?: string
  /**
   * <p>最近发现时间</p>
   */
  LatestDetectTime?: string
  /**
   * <p>规则名</p>
   */
  RuleName?: string
  /**
   * <p>策略类型</p>
   */
  ContentType?: string
  /**
   * <p>实例名</p>
   */
  InstanceName?: string
  /**
   * <p>公共IP</p>
   */
  PublicIp?: string
  /**
   * <p>内网IP</p>
   */
  PrivateIp?: string
  /**
   * <p>该机器是否开启应用防护</p>
   */
  RaspOpen?: boolean
  /**
   * <p>容器名称</p>
   */
  ContainerName?: string
  /**
   * <p>容器镜像名称</p>
   */
  ImageName?: string
  /**
   * <p>集群名称</p>
   */
  ClusterName?: string
}

/**
 * DescribeVulFixableMachineList请求参数结构体
 */
export interface DescribeVulFixableMachineListRequest {
  /**
   * <p>漏洞ID列表，最多支持100个</p>
   */
  VulIds: Array<number | bigint>
  /**
   * <p>分页偏移量<br>取值范围：[0, +∞)<br>默认值：0</p>
   */
  Offset?: number
  /**
   * <p>每页返回数量<br>取值范围：[1, 100]<br>默认值：10</p>
   */
  Limit?: number
  /**
   * <p>过滤条件<br>支持的Filter.Name：<br>Keyword - 模糊匹配，按资产ID、资产名称搜索<br>ComponentName - 模糊匹配，按关联组件名称搜索<br>InstanceId - 精确匹配，按主机实例ID筛选<br>MachineName - 模糊匹配，按主机名称搜索<br>MachineIp - 模糊匹配，按主机IP搜索<br>OsType - 精确匹配，按操作系统类型筛选：linux/windows<br>SupportAutoFix - 精确匹配，按是否支持自动修复筛选：0-不支持 1-支持<br>Tag - 精确匹配，按资产标签筛选<br>AppId - 精确匹配，按所属账号筛选</p>
   */
  Filters?: Array<Filters>
  /**
   * 集团账号的成员id
   */
  MemberId?: Array<string>
}

/**
 * DescribeEdrAlertInfo请求参数结构体
 */
export interface DescribeEdrAlertInfoRequest {
  /**
   * <p>告警定位信息（含跨账号AppID）</p>
   */
  Target: EdrAlertTarget
  /**
   * <p>集团账号的成员id</p>
   */
  MemberId?: Array<string>
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
 * DescribeVulLabelList返回参数结构体
 */
export interface DescribeVulLabelListResponse {
  /**
   * <p>漏洞条目列表</p>
   */
  List?: Array<VPRLabel>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteDspmIdentifyComplianceRuleRelation请求参数结构体
 */
export interface DeleteDspmIdentifyComplianceRuleRelationRequest {
  /**
   * <p>识别模板ID</p>
   */
  ComplianceId: number
  /**
   * <p>分类ID</p>
   */
  CategoryId: number
  /**
   * <p>数据项ID集合</p>
   */
  RuleIds: Array<number | bigint>
  /**
   * <p>集团账号的成员id</p>
   */
  MemberId?: Array<string>
}

/**
 * 日志条目
 */
export interface LogItem {
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
 * ModifyAgentRunPolicy返回参数结构体
 */
export interface ModifyAgentRunPolicyResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeExportJobDownloadURL请求参数结构体
 */
export interface DescribeExportJobDownloadURLRequest {
  /**
   * 任务ID
   */
  JobID: string
  /**
   * <p>集团账号的成员id</p>
   */
  MemberId?: Array<string>
}

/**
 * DescribeDspmAssetDatabaseList请求参数结构体
 */
export interface DescribeDspmAssetDatabaseListRequest {
  /**
   * <p>资产实例id</p>
   */
  AssetId: string
  /**
   * <p>集团账号的成员id</p>
   */
  MemberId?: Array<string>
  /**
   * <p>筛选项</p>
   */
  Filter?: Filter
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
 * ModifyProtectionSetting请求参数结构体
 */
export interface ModifyProtectionSettingRequest {
  /**
   * 资产类型
- CWP 主机安全资产
- TCSS_HOST 容器主机节点
- TCSS_EKS 容器超级节点
   */
  AssetType: string
  /**
   * 防护配置
   */
  Config?: Array<ModifyProtectionSetting>
  /**
   * 是否全部,这里需要配合筛选条件Filters
   */
  IsALL?: boolean
  /**
   * 过滤参数,这里IsALL=true生效,结果作用到Config里
   */
  Filters?: Array<Filters>
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
 * CheckRisk返回参数结构体
 */
export interface CheckRiskResponse {
  /**
   * 风险操作返回信息
   */
  Message?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
 * CreateVulFixedExportJob返回参数结构体
 */
export interface CreateVulFixedExportJobResponse {
  /**
   * <p>导出任务ID<br>取值参考：前端轮询导出任务状态时使用</p>
   */
  JobID?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 日志索引规则信息
 */
export interface LogIndexRuleInfo {
  /**
   * <p>全文索引</p>
   */
  FullText?: LogFullTextInfo
  /**
   * <p>键值索引</p>
   */
  KeyValue?: LogRuleKeyValueInfo
  /**
   * <p>标签</p>
   */
  Tag?: LogRuleKeyValueInfo
  /**
   * <p>动态索引</p>
   */
  DynamicIndex?: LogDynamicIndex
}

/**
 * DescribeDspmIdentifyDistributionStatistics返回参数结构体
 */
export interface DescribeDspmIdentifyDistributionStatisticsResponse {
  /**
   * <p>结果</p>
   */
  DataSet?: Array<DspmStatisticsItem>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
 * DescribeVulLabelList请求参数结构体
 */
export type DescribeVulLabelListRequest = null

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
 * 批量添加白名单：重复情况重复列表实体
 */
export interface DuplicateHosts {
  /**
   * <p>Quuid 参数</p>
   */
  Quuid?: string
  /**
   * <p>Uuid 参数</p>
   */
  Uuid?: string
  /**
   * <p>Id 参数</p>
   */
  Id?: number
}

/**
 * AI安全助手会话信息
 */
export interface AIAnalysisSession {
  /**
   * 标题
   */
  Title?: string
  /**
   * 会话ID
   */
  SessionID?: string
  /**
   * 最后修改的时间戳
   */
  ModifyTime?: number
  /**
   * 是否置顶
   */
  IsPinned?: boolean
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
 * CreateEDRManualScan请求参数结构体
 */
export interface CreateEDRManualScanRequest {
  /**
   * <p>资产选择方式：all-全部资产/tag-按标签选择(仅主机)/direct-直接选择</p>
   */
  AssetSelectionType: string
  /**
   * <p>检测模式：full-全盘检测/quick-快速检测/include-仅检测指定路径/exclude-排除指定路径</p>
   */
  ScanType: string
  /**
   * <p>集团账号的成员id</p>
   */
  MemberId?: Array<string>
  /**
   * <p>直接选择的主机列表（AssetSelectionType=direct或all时使用）</p>
   */
  InstanceIDsWithAppId?: Array<InstanceIDWithAppIdItem>
  /**
   * <p>剔除的主机列表（AssetSelectionType=all时使用）</p>
   */
  ExcludeInstanceIDsWithAppId?: Array<InstanceIDWithAppIdItem>
  /**
   * <p>主机对应的标签ID</p>
   */
  TagIds?: Array<number | bigint>
  /**
   * <p>直接选择的集群列表</p>
   */
  ClusterIDsWithAppId?: Array<ClusterWithAppIdItem>
  /**
   * <p>剔除的集群列表（AssetSelectionType=all时使用）</p>
   */
  ExcludeClusterIDsWithAppId?: Array<ClusterWithAppIdItem>
  /**
   * <p>自选路径列表（ScanType=include或exclude时必填，最多100条）</p>
   */
  CustomPaths?: Array<string>
  /**
   * <p>超时时间（秒），上限7200</p>
   */
  Timeout?: number
  /**
   * <p>是否开启深度检测：0-否/1-是</p>
   */
  EnableMemShellScan?: number
}

/**
 * ModifyExposureAutoTagRuleStatus请求参数结构体
 */
export interface ModifyExposureAutoTagRuleStatusRequest {
  /**
   * <p>规则ID</p>
   */
  RuleID: number
  /**
   * <p>开启状态</p>
   */
  Enable: boolean
  /**
   * <p>集团账号的成员id</p>
   */
  MemberId?: Array<string>
}

/**
 * ModifyVulWhitelistSwitch返回参数结构体
 */
export interface ModifyVulWhitelistSwitchResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
 * DescribeAbTestUser请求参数结构体
 */
export interface DescribeAbTestUserRequest {
  /**
   * 项目名称
   */
  ProjectName: string
  /**
   * 租户ID
   */
  UserAppIds: Array<number | bigint>
}

/**
 * 推荐防护配置项
 */
export interface ProtectionConfigItem {
  /**
   * 配置项ID
   */
  ConfigId?: string
  /**
   * 配置项名称
   */
  ConfigName?: string
  /**
   * 配置项描述
   */
  ConfigDescription?: string
  /**
   * 配置分组
枚举值：
auto_risk_discovery：自动风险发现
auto_defense：自动防御
client_hardening：客户端强化
   */
  ConfigGroup?: string
  /**
   * 是否已开启
   */
  Enabled?: boolean
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
 * 日志动态索引信息
 */
export interface LogDynamicIndex {
  /**
   * <p>状态</p>
   */
  Status?: boolean
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
 * ExportCSIPMalwareScanTaskDetail返回参数结构体
 */
export interface ExportCSIPMalwareScanTaskDetailResponse {
  /**
   * <p>导出任务ID，用于查询导出结果</p>
   */
  TaskId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 集群命名空间项
 */
export interface ClusterNamespaceListItem {
  /**
   * <p>appid</p>
   */
  AppID?: number
  /**
   * <p>名称</p>
   */
  Name?: string
  /**
   * <p>标签</p>
   */
  Label?: Array<AssetTag>
  /**
   * <p>创建时间</p>
   */
  CreateTime?: string
  /**
   * <p>资产 ID</p>
   * @deprecated
   */
  AssetId?: string
  /**
   * <p>命名空间唯一标识ID</p>
   */
  UniqueID?: string
}

/**
 * DescribeVulFixedList返回参数结构体
 */
export interface DescribeVulFixedListResponse {
  /**
   * <p>已修复漏洞列表</p>
   */
  Data?: Array<VulFixedItem>
  /**
   * <p>总数量</p>
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * TestWebhookReceiver请求参数结构体
 */
export interface TestWebhookReceiverRequest {
  /**
   * <p>机器人配置ID</p>
   */
  ID: number
  /**
   * <p>自定义测试内容（明文）。不传时使用系统默认测试样例<br>入参限制：长度 0-2048</p>
   */
  Data?: string
}

/**
 * DescribeExposureAutoTagRules返回参数结构体
 */
export interface DescribeExposureAutoTagRulesResponse {
  /**
   * <p>云边界分析资产数量</p>
   */
  TotalCount?: number
  /**
   * <p>云边界分析自动打标规则</p>
   */
  RuleList?: Array<AutoTagRuleItem>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 资产详情动态tab配置
 */
export interface DynamicTab {
  /**
   * <p>key</p>
   */
  TabKey?: string
  /**
   * <p>数量</p>
   */
  Count?: number
  /**
   * <p>关联资产配置</p>
   */
  AssetType?: Array<AssetTypeCount>
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
 * DescribeClusterContainerAppList返回参数结构体
 */
export interface DescribeClusterContainerAppListResponse {
  /**
   * <p>匹配总数</p>
   */
  TotalCount?: number
  /**
   * <p>应用列表</p>
   */
  List?: Array<ContainerAppItem>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 高级镜像条件匹配（三个匹配串有且仅有一个非空）
 */
export interface ConditionMatch {
  /**
   * <p>镜像ID匹配串（三选一，有且仅有一个非空）</p>
   */
  ImageIDMatchString?: string
  /**
   * <p>镜像名匹配串（三选一，有且仅有一个非空）</p>
   */
  ImageNameMatchString?: string
  /**
   * <p>镜像地址匹配串（三选一，有且仅有一个非空）</p>
   */
  ImageAddressMatchString?: string
  /**
   * <p>匹配条件，取值：EQUALS-等于/NOT_EQUALS-不等于/STARTS_WITH-以…开头/NOT_STARTS_WITH-不以…开头/ENDS_WITH-以…结尾/NOT_ENDS_WITH-不以…结尾/CONTAINS-包含/NOT_CONTAINS-不包含</p>
   */
  MatchType?: string
}

/**
 * dspm统计项
 */
export interface DspmStatisticsItem {
  /**
   * <p>统计项名称</p>
   */
  Name?: string
  /**
   * <p>统计值</p>
   */
  Value?: number
  /**
   * <p>描述</p>
   */
  Desc?: string
}

/**
 * 防护设置对象
 */
export interface ModifyProtectionSetting {
  /**
   * 资产唯一ID
   */
  QUUID: string
  /**
   * 总开关 0关闭 1开启
   */
  Enable?: number
  /**
   * 漏洞防护开关 0: 关闭 1:开启
   */
  VulDefEnable?: number
  /**
   * 漏洞防护模式 0: 标准 1: 重保
   */
  VulDefMode?: number
  /**
   * 漏洞防护动作 0: 仅检测 1: 检测+防御
   */
  VulDefAction?: number
  /**
   * 内存马防御开关 0: 关闭 1:开启
   */
  MemShellDefEnable?: number
  /**
   * 性能限制开关 0: 关闭 1:开启
   */
  PerformanceLimit?: number
  /**
   * CPU阈值 取值1-99
   */
  PerformanceLimitCpu?: number
  /**
   * 内存阈值 取值1-99
   */
  PerformanceLimitMem?: number
  /**
   * 内存剩余阈值
   */
  PerformanceLimitMemAmount?: number
  /**
   * 更多防护, 0: 不注入会重启的进程 1: 注入会重启的进程
   */
  SafeInject?: number
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
 * DescribeClusterListV2请求参数结构体
 */
export interface DescribeClusterListV2Request {
  /**
   * <p>集团账号的成员id</p>
   */
  MemberId?: Array<string>
  /**
   * <p>通用过滤条件列表。支持的过滤字段：<br>ClusterId：集群ID，精确匹配。<br>ClusterName：集群名称，模糊匹配。<br>ClusterType：集群类型，精确匹配。取值：TKE_MANAGED_CLUSTER（腾讯云标准集群）、TKE_INDEPENDENT_CLUSTER（标准集群Master自维护）、TKE_SERVERLESS_CLUSTER（Serverless集群）、TKE_EDGE_CLUSTER（边缘集群）、SELF_BUILT（腾讯云内自建）、SELF_BUILT_OTHER（非腾讯云自建/混合云）。<br>RunStatus：集群运行状态，精确匹配。取值：Running（运行中）、Exception（异常）、Unknown（未知）。<br>AccessedStatus：接入状态，精确匹配。取值：AccessedNone（未接入）、AccessedInstalling（接入中）、AccessedException（接入异常）、AccessedInstalled（已接入）。<br>DefendStatus：防护状态，精确匹配。取值：Enabled（已防护）、Partial（部分防护）、Disabled（未防护）。<br>RiskStatus：风险检查状态，精确匹配。<br>RiskLevel：风险等级，精确匹配。取值：CRITICAL、HIGH、MEDIUM、LOW、NONE（无风险）。<br>HasHighRisk：仅筛选含高危及以上风险的集群，无需填入 value，传入 HasHighRisk 即生效。<br>Region：地域，精确匹配。<br>OwnerName：负责人，模糊匹配。<br>ClusterAssetIds：集群资产ID，精确匹配。<br>ExcludeClusterAssetIds：排除的集群资产ID，精确排除。</p>
   */
  Filter?: Filter
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
 * DescribeComplianceOverview请求参数结构体
 */
export interface DescribeComplianceOverviewRequest {
  /**
   * <p>集团账号的成员id</p>
   */
  MemberId?: Array<string>
  /**
   * <p>内容筛选场景</p>
   */
  ContentFilter?: string
}

/**
 * 资产标签预览资产
 */
export interface AssetTagPreviewAssetItem {
  /**
   * <p>资产ID</p>
   */
  AssetID?: string
  /**
   * <p>资产名称</p>
   */
  AssetName?: string
  /**
   * <p>公网IP地址</p>
   */
  PublicIP?: string
  /**
   * <p>内网IP</p>
   */
  PrivateIP?: string
  /**
   * <p>公网域名</p>
   */
  PublicDomain?: string
  /**
   * <p>内网域名</p>
   */
  PrivateDomain?: string
  /**
   * <p>资产类型</p>
   */
  AssetType?: string
  /**
   * <p>资产类型名称</p>
   */
  AssetTypeName?: string
  /**
   * <p>资产类型图标</p>
   */
  AssetTypeIconURL?: string
}

/**
 * DescribeExposureAutoTagAttribute返回参数结构体
 */
export interface DescribeExposureAutoTagAttributeResponse {
  /**
   * <p>资产类型</p>
   */
  AssetTypeList?: Array<ExposeAssetTypeItem>
  /**
   * <p>标签集合</p>
   */
  TagList?: Array<AttributeOptionSet>
  /**
   * <p>开放状态集合</p>
   */
  OpenStatusList?: Array<AttributeOptionSet>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * dspm结构化数据项测试
 */
export interface DspmIdentifyRuleStructuredTestItem {
  /**
   * <p>参数名</p>
   */
  Name: string
  /**
   * <p>参数类型</p>
   */
  Value?: string
}

/**
 * DeleteAssetFilterView请求参数结构体
 */
export interface DeleteAssetFilterViewRequest {
  /**
   * 资产搜索视图ID
   */
  ViewID: number
}

/**
 * DescribeScanTaskRecordList请求参数结构体
 */
export interface DescribeScanTaskRecordListRequest {
  /**
   * <p>集团账号的成员id</p>
   */
  MemberId?: Array<string>
  /**
   * <p>过滤器</p>
   */
  Filters?: Array<Filters>
  /**
   * <p>每页条数</p>
   */
  Limit?: number
  /**
   * <p>偏移</p>
   */
  Offset?: number
  /**
   * <p>排序方向</p>
   */
  Order?: string
  /**
   * <p>排序字段</p>
   */
  By?: string
}

/**
 * DescribePreventUninstallGlobalConf返回参数结构体
 */
export interface DescribePreventUninstallGlobalConfResponse {
  /**
   * <p>是否开启防卸载 0 否 1 是 9 未设置,和0一样是未开启</p>
   */
  Enable?: number
  /**
   * <p>开启范围 0 自选主机 1 全部主机</p>
   */
  Scope?: number
  /**
   * <p>正选主机数</p>
   */
  IncludeHostCount?: number
  /**
   * <p>反选主机数</p>
   */
  ExcludeHostCount?: number
  /**
   * <p>正选quuid列表</p>
   */
  IncludeQuuid?: Array<string>
  /**
   * <p>反选quuid列表</p>
   */
  ExcludeQuuid?: Array<string>
  /**
   * <p>已经开启数</p>
   */
  EnableCount?: number
  /**
   * <p>未开启数</p>
   */
  DisableCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
 * DescribeKBDetail请求参数结构体
 */
export interface DescribeKBDetailRequest {
  /**
   * KB 补丁内部 ID（kb_info.id）
   */
  KBID: number
}

/**
 * ModifyNotifyAssetConfig返回参数结构体
 */
export interface ModifyNotifyAssetConfigResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
 * 容器告警全局统计
 */
export interface EdrContainerGlobalCount {
  /**
   * <p>总告警条数</p>
   */
  TotalCount?: number
  /**
   * <p>存在告警的集群数量（COUNT(DISTINCT cluster_id)，排除空 cluster_id）</p>
   */
  ClustersCount?: number
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
 * DescribeAISchedulePlanList请求参数结构体
 */
export interface DescribeAISchedulePlanListRequest {
  /**
   * <p>AI 定时任务 ID。可通过 DescribeAIScheduleList 接口获取。</p>
   */
  ScheduleId?: string
  /**
   * <p>预览窗口开始时间，Unix 毫秒时间戳，0 表示当前时间。</p>
   */
  StartTime?: number
  /**
   * <p>预览窗口结束时间，Unix 毫秒时间戳。</p>
   */
  EndTime?: number
  /**
   * <p>分页偏移量，默认 0。</p>
   */
  Offset?: number
  /**
   * <p>最大返回条数，默认 20，最大 100。</p>
   */
  Limit?: number
}

/**
 * DescribeClusterDetail返回参数结构体
 */
export interface DescribeClusterDetailResponse {
  /**
   * <p>集群基础信息</p>
   */
  ClusterBaseInfo?: ClusterListItem
  /**
   * <p>运行时组件</p>
   */
  RuntimeComponent?: string
  /**
   * <p>master ip</p>
   */
  MasterIP?: string
  /**
   * <p>节点数</p>
   */
  NodeCount?: number
  /**
   * <p>命名空间数</p>
   */
  NamespaceCount?: number
  /**
   * <p>pod数</p>
   */
  PodCount?: number
  /**
   * <p>容器数</p>
   */
  ContainerCount?: number
  /**
   * <p>service数</p>
   */
  ServiceCount?: number
  /**
   * <p>ingress数</p>
   */
  IngressCount?: number
  /**
   * <p>镜像数</p>
   */
  ImageCount?: number
  /**
   * <p>系统组件数量</p>
   */
  SystemComponentCount?: number
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
 * InstallClusterAgent请求参数结构体
 */
export interface InstallClusterAgentRequest {
  /**
   * <p>集群CA证书MD5列表（单/批量统一）<br>用途：指定需要安装容器安全Agent（平行容器方式）的集群<br>取值参考：通过 DescribeClusterListV2 接口返回项中的 ClusterCaMD5 字段获取<br>说明：capi 层不对该字段做存在性/类型校验，按 cluster_ca_md5 透传到接入侧 ClusterInstall RPC</p>
   */
  ClusterCaMD5List: Array<string>
  /**
   * <p>集团账号的成员id</p>
   */
  MemberId?: Array<string>
}

/**
 * CreateEDRManualScan返回参数结构体
 */
export interface CreateEDRManualScanResponse {
  /**
   * <p>创建的任务列表（主机和容器分别一条）</p>
   */
  Tasks?: Array<CreatedTaskItem>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeVulRiskRelateHost返回参数结构体
 */
export interface DescribeVulRiskRelateHostResponse {
  /**
   * <p>该漏洞影响的主机列表</p>
   */
  List?: Array<VulHostBriefInfo>
  /**
   * <p>符合条件的总数</p>
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribePortScanTaskCount请求参数结构体
 */
export interface DescribePortScanTaskCountRequest {
  /**
   * <p>集团账号的成员id</p>
   */
  MemberId?: Array<string>
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
 * dspm资产数据识别详情
 */
export interface DspmAssetDataScanDetail {
  /**
   * <p>识别任务状态 0:未识别 1:识别中 2:识别终止 3:识别成功 4:识别失败</p>
   */
  Status?: number
  /**
   * <p>识别任务状态 0:未识别 1:识别中 2:识别终止 3:识别成功 4:识别失败</p>
   */
  StatusInfo?: string
  /**
   * <p>识别进度</p>
   */
  Progress?: number
  /**
   * <p>最近扫描时间</p>
   */
  LatestScanTime?: string
  /**
   * <p>识别失败信息</p>
   */
  ErrorInfo?: string
  /**
   * <p>数据库数量</p>
   */
  DbCount?: number
  /**
   * <p>分类id集合</p>
   */
  CategoryIds?: Array<number | bigint>
  /**
   * <p>分类名称集合</p>
   */
  CategoryNames?: Array<string>
  /**
   * <p>扫描任务配置</p>
   */
  TaskConfig?: DspmSensitiveScanTaskConfig
  /**
   * <p>识别结果分类详情</p>
   */
  CategoryDetails?: Array<DspmIdentifyCategoryDetail>
  /**
   * <p>任务ID</p>
   */
  TaskId?: number
}

/**
 * DescribeExportJobManageList请求参数结构体
 */
export interface DescribeExportJobManageListRequest {
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
 * DescribeDspmAssetAccountRecycledPrivileges请求参数结构体
 */
export interface DescribeDspmAssetAccountRecycledPrivilegesRequest {
  /**
   * 风险id
   */
  RiskId?: string
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
 * CreateCheckViewRisksExportJob请求参数结构体
 */
export interface CreateCheckViewRisksExportJobRequest {
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
 * EDR-检测方式对应策略数量
 */
export interface DetectTypeCount {
  /**
   * <p>检测方式，0：主机检测，1：网络检测</p>
   */
  DetectType?: number
  /**
   * <p>策略数量</p>
   */
  Count?: number
}

/**
 * DescribeVulRiskRelateComponent返回参数结构体
 */
export interface DescribeVulRiskRelateComponentResponse {
  /**
   * <p>该漏洞影响的组件列表</p>
   */
  List?: Array<VulComponentSummary>
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
 * 主机漏洞组件概要
 */
export interface VulComponentSummary {
  /**
   * <p>组件名称</p>
   */
  Name: string
  /**
   * <p>关联主机数</p>
   */
  RelateHostCount?: number
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
 * DescribeHostVulOverview返回参数结构体
 */
export interface DescribeHostVulOverviewResponse {
  /**
   * <p>主机漏洞概览数据</p>
   */
  Overview?: HostVulOverview
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeVulFixedHostDetail请求参数结构体
 */
export interface DescribeVulFixedHostDetailRequest {
  /**
   * <p>漏洞ID</p>
   */
  VulId: number
  /**
   * <p>主机实例ID</p>
   */
  InstanceId: string
  /**
   * <p>分页偏移量，用于关联组件&amp;路径列表分页<br>取值范围：[0, +∞)<br>默认值：0</p>
   */
  Offset?: number
  /**
   * <p>每页返回数量，用于关联组件&amp;路径列表分页<br>取值范围：[1, 100]<br>默认值：10</p>
   */
  Limit?: number
  /**
   * 集团账号的成员id
   */
  MemberId?: Array<string>
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
 * CreateBaselineMainTaskExportJob请求参数结构体
 */
export interface CreateBaselineMainTaskExportJobRequest {
  /**
   * <p>基线主任务 ID，精确导出该任务的检测项与子任务；不传时导出为空。</p>
   */
  TaskID?: number
  /**
   * <p>导出任务名称。不传时自动生成。</p>
   */
  Name?: string
  /**
   * <p>集团账号的成员id</p>
   */
  MemberId?: Array<string>
  /**
   * <p>通用过滤条件，支持的字段包括：TaskID（精确）、TaskType、Status、CheckAssetType 等。</p>
   */
  Filters?: Array<Filters>
}

/**
 * Windows KB详细信息
 */
export interface KBDetail {
  /**
   * <p>KB 补丁内部 ID（kb_info.id）</p>
   */
  ID?: number
  /**
   * <p>KB 编号<br>参数格式：形如 KB5001234</p>
   */
  Number?: string
  /**
   * <p>KB 补丁名称</p>
   */
  Name?: string
  /**
   * <p>参考链接（微软官方文档地址）</p>
   */
  ReferUrl?: string
  /**
   * <p>发布时间<br>参数格式：YYYY-MM-DD HH:mm:ss</p>
   */
  PublishTime?: string
  /**
   * <p>安装该 KB 后是否需要重启<br>枚举值：<br>true：需要<br>false：不需要</p>
   */
  NeedRestart?: boolean
  /**
   * <p>关联漏洞列表</p>
   */
  RelateVulList?: Array<VulBriefInfo>
  /**
   * <p>关联漏洞总数</p>
   */
  RelateVulCount?: number
  /**
   * <p>关联os版本</p>
   */
  RelateProduct?: string
}

/**
 * 漏洞白名单
 */
export interface VulWhitelist {
  /**
   * <p>id</p>
   */
  Id?: number
  /**
   * <p>漏洞名称</p>
   */
  Name?: string
  /**
   * <p>备注</p>
   */
  Remark?: string
  /**
   * <p>所属账号</p>
   */
  AppId?: number
  /**
   * <p>资产列表</p>
   */
  AssetList?: Array<string>
  /**
   * <p>更新时间</p>
   */
  UpdateTime?: string
  /**
   * <p>策略开关（0-关闭, 1-开启）</p>
   */
  Switch?: number
  /**
   * <p>资产范围</p><p>枚举值：</p><ul><li>0： 全部资产</li><li>1： 自选资产</li><li>2： 全选排除资产</li></ul>
   */
  AssetRange?: number
  /**
   * <p>补丁KB id</p>
   */
  KBId?: number
  /**
   * <p>漏洞Id</p>
   */
  VulId?: number
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
 * DescribeCosObjectScanTask请求参数结构体
 */
export interface DescribeCosObjectScanTaskRequest {
  /**
   * <p>1: 敏感数据识别 2:恶意文件扫描</p>
   */
  TaskType: number
  /**
   * 集团账号的成员id
   */
  MemberId?: Array<string>
  /**
   * <p>存储桶列表</p>
   */
  BucketSet?: Array<string>
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
 * Agent运行模式策略（CPU/Memory/NetworkPps）
 */
export interface AgentRunModePolicy {
  /**
   * <p>内存限制(MB)，可选0/200/300/500</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Memory?: number
  /**
   * <p>CPU限制(%)，可选10/20/30/40/50/60</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Cpu?: number
  /**
   * <p>网络PPS限制</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  NetworkPps?: number
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
 * DescribeBaselineCategoryItemList请求参数结构体
 */
export interface DescribeBaselineCategoryItemListRequest {
  /**
   * <p>集团账号的成员id</p>
   */
  MemberId?: Array<string>
  /**
   * <p>基线父分类 ID，用于筛选指定父分类下的检测项。</p>
   */
  ParentCategoryID?: number
  /**
   * <p>分页查询每页返回条数，默认值 10，最大值 100。</p>
   */
  Limit?: number
  /**
   * <p>分页查询偏移量，默认值 0。</p>
   */
  Offset?: number
  /**
   * <p>通用过滤条件列表。支持的过滤字段：</p><ul><li>CategoryID：子分类 ID，精确匹配</li><li>Name：检测项名称，模糊匹配</li><li>RiskLevel：风险等级，精确匹配。取值：LOW、MEDIUM、HIGH、CRITICAL</li><li>SupportCustomValue：是否支持编辑，精确匹配。取值：true、false</li></ul>
   */
  Filters?: Array<Filters>
}

/**
 * ModifyWebhookReceiver返回参数结构体
 */
export interface ModifyWebhookReceiverResponse {
  /**
   * <p>新增或被修改的机器人 ID</p>
   */
  ID?: number
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
 * 创建任务返回项
 */
export interface CreatedTaskItem {
  /**
   * <p>任务ID</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  TaskId?: number
  /**
   * <p>任务类型：HOST-主机扫描/CONTAINER-容器扫描</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  TaskType?: string
  /**
   * <p>任务所属账号AppId</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  AppId?: number
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
 * 关联资产数量分布
 */
export interface AssetTypeCount {
  /**
   * <p>关联资产类型</p>
   */
  AssetType?: string
  /**
   * <p>数量</p>
   */
  Count?: number
  /**
   * <p>资产类型展示名称</p>
   */
  AssetTypeName?: string
  /**
   * <p>过滤字段</p>
   */
  Filter?: string
}

/**
 * DescribeCspmShardConfig返回参数结构体
 */
export interface DescribeCspmShardConfigResponse {
  /**
   * <p>共享配额来源appid</p>
   */
  ShardFromAppID?: number
  /**
   * <p>自动共享开关状态</p>
   */
  AutoShardStatus?: number
  /**
   * <p>已被共享配额的目标appid列表</p>
   */
  ShardAppIDs?: Array<number | bigint>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
 * DescribeDspmAssetFieldSamples返回参数结构体
 */
export interface DescribeDspmAssetFieldSamplesResponse {
  /**
   * <p>无</p>
   */
  DataSet?: Array<string>
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
 * DescribeExportJobDownloadURL返回参数结构体
 */
export interface DescribeExportJobDownloadURLResponse {
  /**
   * 下载URL
注意：此字段可能返回 null，表示取不到有效值。
   */
  DownloadURL?: string
  /**
   * 任务状态 RUNNING/SUCCESS/FAILURE
   */
  ExportStatus?: string
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
 * 容器应用信息
 */
export interface ContainerAppItem {
  /**
   * 应用综合类型如web或app或db
注意：此字段可能返回 null，表示取不到有效值。
   */
  MainType?: string
  /**
   * 具体应用类型如nginx或redis
注意：此字段可能返回 null，表示取不到有效值。
   */
  Type?: string
  /**
   * 应用版本号
注意：此字段可能返回 null，表示取不到有效值。
   */
  Version?: string
  /**
   * 运行用户名
注意：此字段可能返回 null，表示取不到有效值。
   */
  RunAs?: string
  /**
   * 可执行文件路径
注意：此字段可能返回 null，表示取不到有效值。
   */
  ExePath?: string
  /**
   * 配置文件路径
注意：此字段可能返回 null，表示取不到有效值。
   */
  ConfigPath?: string
  /**
   * 关联进程数量
   */
  ProcessCnt?: number
}

/**
 * DescribeBaselineMainTaskList请求参数结构体
 */
export interface DescribeBaselineMainTaskListRequest {
  /**
   * <p>集团账号的成员id</p>
   */
  MemberId?: Array<string>
  /**
   * <p>通用过滤条件。支持的 Name：JobID（任务ID精确搜索）、TaskStatus（任务状态 INIT/SCANNING/SUCCESS/FAILED）、TaskType（任务类型 PERIODIC/MANUAL）。</p>
   */
  Filters?: Array<Filters>
  /**
   * <p>分页查询每页数量，最大值 100；超过时服务端将自动回退为默认值 10。</p>
   */
  Limit?: number
  /**
   * <p>分页查询起始偏移量，从 0 开始。</p>
   */
  Offset?: number
  /**
   * <p>排序方向，取值 asc（升序）或 desc（降序），默认 desc。</p>
   */
  Order?: string
  /**
   * <p>排序字段名，由具体接口定义可选字段。</p>
   */
  By?: string
}

/**
 * DeleteAIAnalysisSMTPAccess返回参数结构体
 */
export interface DeleteAIAnalysisSMTPAccessResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeVdbAndPocInfo请求参数结构体
 */
export type DescribeVdbAndPocInfoRequest = null

/**
 * DescribePublicCloudAssets返回参数结构体
 */
export interface DescribePublicCloudAssetsResponse {
  /**
   * 资产数量
   */
  TotalCount?: number
  /**
   * 资产集合
   */
  Assets?: Array<PublicAssetInfo>
  /**
   * 资产类型集合
   */
  AssetTypeList?: Array<AttributeOptionSet>
  /**
   * 地域集合
   */
  RegionList?: Array<AttributeOptionSet>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyEdrAlertIsolation返回参数结构体
 */
export interface ModifyEdrAlertIsolationResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
 * CreateVulScanManual请求参数结构体
 */
export interface CreateVulScanManualRequest {
  /**
   * <p>超时时间（秒）</p>
   */
  Timeout: number
  /**
   * <p>资产范围（0-全部资产，1-自选资产，2-剔除资产，3-自动资产匹配）</p>
   */
  AssetRange: number
  /**
   * <p>扫描方式（VersionCompare: 版本对比, POC: POC检测, VersionComparePOC: 版本对比+POC检测）</p>
   */
  Method?: Array<string>
  /**
   * <p>集团账号的成员id</p>
   */
  MemberId?: Array<string>
  /**
   * <p>漏洞id</p>
   */
  VulId?: Array<number | bigint>
  /**
   * <p>kb编号</p>
   */
  KbNo?: Array<string>
  /**
   * <p>漏扫类型</p><p>枚举值：</p><ul><li>LINUX： Linux软件漏洞</li><li>WINDOWS： Windows系统补丁</li><li>WEB_CMS： Web-CMS漏洞</li><li>APPLICATION： 应用漏洞</li><li>EMERGENCY： 应急漏洞</li></ul>
   */
  VulCategory?: Array<string>
  /**
   * <p>漏洞等级（INVALID: 无效, INFO: 提示, LOW: 低危, MEDIUM: 中危, HIGH: 高危, CRITICAL: 严重）</p>
   */
  Level?: Array<string>
  /**
   * <p>资产列表（Quuid列表）</p>
   */
  AssetList?: Array<string>
  /**
   * <p>标签id</p>
   */
  TagIds?: Array<number | bigint>
}

/**
 * DescribeAIAnalysisFileDownloadURL返回参数结构体
 */
export interface DescribeAIAnalysisFileDownloadURLResponse {
  /**
   * <p>带签名的临时下载链接，有效期 2 小时。</p>
   */
  Url?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeVulFixedList请求参数结构体
 */
export interface DescribeVulFixedListRequest {
  /**
   * <p>分页偏移量<br>取值范围：[0, +∞)<br>默认值：0</p>
   */
  Offset?: number
  /**
   * <p>每页返回数量<br>取值范围：[1, 100]<br>默认值：10</p>
   */
  Limit?: number
  /**
   * <p>过滤条件<br>支持的Filter.Name：<br>Keyword - 模糊匹配，按关键字搜索（漏洞名称/CVE编号/主机名称/实例ID）<br>VulName - 模糊匹配，按漏洞名称搜索<br>Level - 精确匹配，按漏洞等级筛选：LOW-低危 MEDIUM-中危 HIGH-高危 CRITICAL-严重<br>VprLevel - 精确匹配，按VPR评级筛选：1-Low 2-Medium 3-High 4-Critical<br>VulCategory - 精确匹配，按漏洞类型筛选：LINUX-Linux软件漏洞 WINDOWS-Windows系统补丁漏洞 WEB_CMS-Web-CMS漏洞 APPLICATION-应用漏洞 EMERGENCY-应急漏洞<br>MachineName - 模糊匹配，按主机名称搜索<br>InstanceId - 模糊匹配，按实例ID搜索<br>FixTime - 范围匹配，修复时间范围，传入两个值表示起止时间</p>
   */
  Filters?: Array<Filters>
  /**
   * <p>排序字段<br>枚举值：<br>FixTime：按修复时间排序<br>VulName：按漏洞名称排序</p>
   */
  Order?: string
  /**
   * <p>排序方式<br>枚举值：<br>asc：升序<br>desc：降序<br>默认值：desc</p>
   */
  By?: string
  /**
   * 集团账号的成员id
   */
  MemberId?: Array<string>
}

/**
 * DescribeVulFixTaskList返回参数结构体
 */
export interface DescribeVulFixTaskListResponse {
  /**
   * <p>修复任务列表</p>
   */
  Data?: Array<VulFixTaskItem>
  /**
   * <p>总数量</p>
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeMachineLoginType返回参数结构体
 */
export interface DescribeMachineLoginTypeResponse {
  /**
   * <p>登录方式</p>
   */
  List?: Array<MachineLoginType>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDspmIdentifyComplianceCategoryRuleList返回参数结构体
 */
export interface DescribeDspmIdentifyComplianceCategoryRuleListResponse {
  /**
   * <p>总数</p><p>单位：数量</p>
   */
  TotalCount?: number
  /**
   * <p>无</p>
   */
  DataSet?: Array<DspmIdentifyCategoryRuleRelateDetailItem>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
 * UninstallClusterAgent返回参数结构体
 */
export interface UninstallClusterAgentResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyVulScanPeriodic返回参数结构体
 */
export interface ModifyVulScanPeriodicResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 安全组策略
 */
export interface SecurityGroupPolicyItem {
  /**
   * <p>端口</p>
   */
  Port?: string
  /**
   * <p>策略</p>
   */
  Action?: string
  /**
   * <p>协议</p>
   */
  Protocol?: string
  /**
   * <p>访问源</p>
   */
  CidrBlock?: string
  /**
   * <p>描述</p>
   */
  Description?: string
  /**
   * <p>创建时间</p>
   */
  CreateTime?: string
  /**
   * <p>优先级</p><p>单位：1</p>
   */
  Priority?: number
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
 * DescribeExposeRiskStatistics请求参数结构体
 */
export interface DescribeExposeRiskStatisticsRequest {
  /**
   * <p>集团账号的成员id</p>
   */
  MemberId?: Array<string>
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
 * BindClusterOwner请求参数结构体
 */
export interface BindClusterOwnerRequest {
  /**
   * <p>集群资产id</p>
   */
  ClusterAssetIds: Array<string>
  /**
   * <p>集团账号的成员id</p>
   */
  MemberId?: Array<string>
  /**
   * <p>负责人名称</p>
   */
  OwnerName?: string
  /**
   * <p>集群CAMD5值</p>
   */
  ClusterCaMD5List?: Array<string>
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
 * EnableAISchedule请求参数结构体
 */
export interface EnableAIScheduleRequest {
  /**
   * <p>AI 定时任务 ID。可通过 DescribeAIScheduleList 接口获取。</p>
   */
  ScheduleId?: string
}

/**
 * DescribeEDRRuleList返回参数结构体
 */
export interface DescribeEDRRuleListResponse {
  /**
   * <p>总数</p>
   */
  TotalCount?: number
  /**
   * <p>列表</p>
   */
  List?: Array<EDRRule>
  /**
   * <p>攻击阶段对应的策略数量</p>
   */
  AttackStageCounts?: Array<AttackStageCount>
  /**
   * <p>检测方式对应的策略数量</p>
   */
  DetectTypeCounts?: Array<DetectTypeCount>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
 * DescribeDspmIdentifyRuleDetail请求参数结构体
 */
export interface DescribeDspmIdentifyRuleDetailRequest {
  /**
   * <p>数据项id</p>
   */
  Id: number
  /**
   * <p>集团账号的成员id</p>
   */
  MemberId?: Array<string>
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
 * DescribeDynamicAssets请求参数结构体
 */
export interface DescribeDynamicAssetsRequest {
  /**
   * 云厂商
   */
  Provider: string
  /**
   * 资产类型
   */
  AssetType: string
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
 * DescribeNotifyAssetConfig请求参数结构体
 */
export interface DescribeNotifyAssetConfigRequest {
  /**
   * <p>模块名</p>
   */
  Modules?: Array<string>
}

/**
 * StopPreventUninstall返回参数结构体
 */
export interface StopPreventUninstallResponse {
  /**
   * <p>任务ID</p>
   */
  TaskId?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
 * DescribeVulScanTaskList请求参数结构体
 */
export interface DescribeVulScanTaskListRequest {
  /**
   * <p>集团账号的成员id</p>
   */
  MemberId?: Array<string>
  /**
   * <p>过滤条件，支持以下 Name：<li>JobId - 任务 ID 精确匹配</li><li>TaskType- 任务类型精确匹配</li></p>
   */
  Filters?: Array<Filters>
  /**
   * <p>分页大小</p><p>取值范围：[1, 100]</p><p>单位：条</p><p>默认值：10</p>
   */
  Limit?: number
  /**
   * <p>分页偏移</p><p>取值范围：[0, 99999]</p><p>单位：条</p>
   */
  Offset?: number
  /**
   * <p>过滤方向</p><p>枚举值：</p><ul><li>DESC： 倒序</li><li>ASC： 正序</li></ul>
   */
  Order?: string
  /**
   * <p>排序字段</p><p>默认值：ScanTime</p>
   */
  By?: string
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
 * DescribeClusterSuperNodeInfo请求参数结构体
 */
export interface DescribeClusterSuperNodeInfoRequest {
  /**
   * <p>超级节点唯一 ID（对应集群节点表 unique_id）。<br>取值参考：通过 DescribeClusterNodeList 接口返回的 UniqueID 字段获取（节点类型为 SUPER 的节点）</p>
   */
  NodeUniqueID: string
  /**
   * <p>集团账号的成员id</p>
   */
  MemberId?: Array<string>
}

/**
 * DescribeDspmIdentifyComplianceGroupList请求参数结构体
 */
export interface DescribeDspmIdentifyComplianceGroupListRequest {
  /**
   * <p>集团账号的成员id</p>
   */
  MemberId?: Array<string>
  /**
   * <p>过滤条件</p>
   */
  Filter?: Filter
}

/**
 * 云厂商资产数量明细
 */
export interface CloudAssetInfo {
  /**
   * 云厂商类型
枚举值：
tencent：腾讯云
aliyun：阿里云
aws：AWS
huawei：华为云
azure：Azure
   */
  CloudType?: string
  /**
   * 该云厂商的资产数量
取值范围：[0, +∞)
   */
  Count?: number
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
 * CreateAssetFilterView返回参数结构体
 */
export interface CreateAssetFilterViewResponse {
  /**
   * 操作信息
   */
  Message?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeVulScanPeriodic请求参数结构体
 */
export interface DescribeVulScanPeriodicRequest {
  /**
   * <p>集团账号的成员id</p>
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
 * ModifyCosAuditObjectIdentifyStatus请求参数结构体
 */
export interface ModifyCosAuditObjectIdentifyStatusRequest {
  /**
   * <p>资源id</p>
   */
  ResourceId: string
  /**
   * <p>文本识别状态</p>
   */
  TextIdentifyStatus: number
  /**
   * <p>图片识别状态</p>
   */
  ImageIdentifyStatus: number
}

/**
 * 日志检索结果
 */
export interface LogSearchResult {
  /**
   * <p>时间</p>
   */
  Time?: number
  /**
   * <p>主题</p>
   */
  TopicId?: string
  /**
   * <p>主题名</p>
   */
  TopicName?: string
  /**
   * <p>源</p>
   */
  Source?: string
  /**
   * <p>文件名</p>
   */
  FileName?: string
  /**
   * <p>pkgid</p>
   */
  PkgId?: string
  /**
   * <p>pkglogid</p>
   */
  PkgLogId?: string
  /**
   * <p>json数据</p>
   */
  LogJson?: string
  /**
   * <p>主机名</p>
   */
  HostName?: string
  /**
   * <p>log信息</p>
   */
  RawLog?: string
  /**
   * <p>索引状态</p>
   */
  IndexStatus?: string
  /**
   * <p>高亮信息</p>
   */
  HighLights?: Array<LogHighLightItem>
}

/**
 * 日志检索错误信息
 */
export interface LogSearchErrors {
  /**
   * <p>主题</p>
   */
  TopicId?: string
  /**
   * <p>错误信息</p>
   */
  ErrorMsg?: string
  /**
   * <p>错误信息</p>
   */
  ErrorCodeStr?: string
}

/**
 * 容器组件信息
 */
export interface ContainerComponentItem {
  /**
   * 组件名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  Name?: string
  /**
   * 组件版本号
注意：此字段可能返回 null，表示取不到有效值。
   */
  Version?: string
}

/**
 * ModifyDspmIdentifyRuleStatus返回参数结构体
 */
export interface ModifyDspmIdentifyRuleStatusResponse {
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
 * DescribeClusterContainerProcessList返回参数结构体
 */
export interface DescribeClusterContainerProcessListResponse {
  /**
   * <p>匹配总数</p>
   */
  TotalCount?: number
  /**
   * <p>进程列表</p>
   */
  List?: Array<ContainerProcessItem>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
 * DescribeClusterAssetList请求参数结构体
 */
export interface DescribeClusterAssetListRequest {
  /**
   * <p>集团账号的成员id</p>
   */
  MemberId?: Array<string>
  /**
   * <p>通用过滤条件列表。支持的过滤字段：<br>ClusterId：集群ID，精确匹配。<br>ClusterName：集群名称，模糊匹配。<br>ClusterType：集群类型，精确匹配。取值：TKE_MANAGED_CLUSTER（腾讯云标准集群）、TKE_INDEPENDENT_CLUSTER（标准集群Master自维护）、TKE_SERVERLESS_CLUSTER（Serverless集群）、TKE_EDGE_CLUSTER（边缘集群）、SELF_BUILT（腾讯云内自建）、SELF_BUILT_OTHER（非腾讯云自建/混合云）。<br>RunStatus：集群运行状态，精确匹配。取值：Running（运行中）、Exception（异常）、Unknown（未知）。<br>AccessedStatus：接入状态，精确匹配。取值：AccessedNone（未接入）、AccessedInstalling（接入中）、AccessedException（接入异常）、AccessedInstalled（已接入）。<br>DefendStatus：防护状态，精确匹配。取值：Enabled（已防护）、Partial（部分防护）、Disabled（未防护）。<br>RiskStatus：风险检查状态，精确匹配。<br>RiskLevel：风险等级，精确匹配。取值：CRITICAL、HIGH、MEDIUM、LOW、NONE（无风险）。<br>HasHighRisk：仅筛选含高危及以上风险的集群，无需填入 value，传入 HasHighRisk 即生效。<br>Region：地域，精确匹配。<br>OwnerName：负责人，模糊匹配。<br>ClusterAssetIds：集群资产ID，精确匹配。<br>ExcludeClusterAssetIds：排除的集群资产ID，精确排除。</p>
   */
  Filter?: Filter
}

/**
 * 腾讯云标签
 */
export interface TagItem {
  /**
   * <p>标签key</p>
   */
  Key?: string
  /**
   * <p>标签value</p>
   */
  Value?: string
}

/**
 * DescribeCSIPLicenseBindSchedule返回参数结构体
 */
export interface DescribeCSIPLicenseBindScheduleResponse {
  /**
   * <p>任务ID</p>
   */
  TaskId?: number
  /**
   * <p>任务状态：INIT-初始化 / RUNNING-进行中 / DONE-已完成 / FAILED-已失败</p>
   */
  Status?: string
  /**
   * <p>进度百分比 0-100</p>
   */
  Schedule?: number
  /**
   * <p>全部机器数（不受过滤影响）</p>
   */
  Total?: number
  /**
   * <p>成功数</p>
   */
  SuccessNum?: number
  /**
   * <p>失败数</p>
   */
  FailedNum?: number
  /**
   * <p>失败明细（全量，含机器额外信息）</p>
   */
  FailedList?: Array<LicenseBindFailedItem>
  /**
   * <p>逐机器明细（受 Filters + 分页影响）</p>
   */
  List?: Array<LicenseBindScheduleItem>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 按风险等级聚合的未通过检测项数量统计。
 */
export interface BaselineRiskLevelStatistic {
  /**
   * <p>风险等级。取值：LOW（低危）、MEDIUM（中危）、HIGH（高危）、CRITICAL（严重）。</p>
   */
  RiskLevel?: string
  /**
   * <p>该风险等级下结果为 NOT_PASS 的检测项数量。</p>
   */
  NotPassCount?: number
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
 * DescribeBaselineFixRecordList请求参数结构体
 */
export interface DescribeBaselineFixRecordListRequest {
  /**
   * <p>集团账号的成员id</p>
   */
  MemberId?: Array<string>
  /**
   * <p>通用过滤条件。支持字段：ItemName（检测项名称，模糊）、PolicyName（所属基线名称，模糊）、InstanceName（主机名称，模糊）、InstanceID（实例ID，精准）、IP（IP 地址，模糊）。不同 Name 之间为且关系，同一 Name 下多个 Values 为或关系。</p>
   */
  Filters?: Array<Filters>
  /**
   * <p>分页查询每页数量，最大值 100；超过时服务端将自动回退为默认值 10。</p>
   */
  Limit?: number
  /**
   * <p>分页查询起始偏移量，从 0 开始。</p>
   */
  Offset?: number
  /**
   * <p>排序方向，取值 asc（升序）或 desc（降序），默认 desc。</p>
   */
  Order?: string
  /**
   * <p>排序字段名。取值：FixTime（修复时间）、ID（记录 ID）。默认按 ID 倒序。</p>
   */
  By?: string
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
 * DescribeHostVulRiskList返回参数结构体
 */
export interface DescribeHostVulRiskListResponse {
  /**
   * <p>主机漏洞风险列表（按漏洞维度聚合）</p>
   */
  List?: Array<HostVulRisk>
  /**
   * <p>凭据总数</p>
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreatePodContainerListExportJob返回参数结构体
 */
export interface CreatePodContainerListExportJobResponse {
  /**
   * <p>导出任务ID<br>取值参考：前端轮询导出任务状态时使用</p>
   */
  JobId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * SCF自定义域名端点
 */
export interface ScfCustomDomainEndpointItem {
  /**
   * <p>匹配路径</p>
   */
  PathMatch?: string
  /**
   * <p>命名空间</p>
   */
  Namespace?: string
  /**
   * <p>函数名称</p>
   */
  FunctionName?: string
  /**
   * <p>函数版本</p>
   */
  Qualifier?: string
}

/**
 * CreateVulReScan请求参数结构体
 */
export interface CreateVulReScanRequest {
  /**
   * <p>漏洞ID</p>
   */
  VulId?: Array<number | bigint>
  /**
   * <p>补丁编号</p>
   */
  KbNo?: Array<string>
  /**
   * <p>集团账号的成员id</p>
   */
  MemberId?: Array<string>
  /**
   * <p>资产列表</p>
   */
  AssetList?: Array<string>
}

/**
 * DescribeEdrExportJobList请求参数结构体
 */
export interface DescribeEdrExportJobListRequest {
  /**
   * <p>集团账号的成员id</p>
   */
  MemberId?: Array<string>
  /**
   * <p>PolicyType - int - 是否必填：否 - 策略类型PolicyName - string - 是否必填：否 - 策略名称Domain - string - 是否必填：否 - 域名(先对域名做urlencode,再base64)PolicyAction- int - 是否必填：否 - 策略动作IsEnabled - int - 是否必填：否 - 是否生效</p>
   */
  Filters?: Array<EDRFilter>
  /**
   * <p>限制条数,默认10,最大100</p>
   */
  Limit?: number
  /**
   * <p>偏移量,默认0</p>
   */
  Offset?: number
  /**
   * <p>按 任务创建时间排序方向，仅支持 <code>ASC</code> / <code>DESC</code></p><p>枚举值：</p><ul><li>ASC： 升序</li><li>DESC： 降序</li></ul>
   */
  Order?: string
  /**
   * <p>排序字段，目前仅支持 InsertTime（按任务下发时间排序），不传默认 InsertTime；传入其他值返回 InvalidParameter</p>
   */
  By?: string
}

/**
 * ScanBaselineItemList请求参数结构体
 */
export interface ScanBaselineItemListRequest {
  /**
   * <p>基线策略类型。取值：</p><ul><li>SYSTEM：系统策略（CSIP 内置）</li><li>SELF：用户自定义策略</li></ul>
   */
  PolicyType: string
  /**
   * <p>目标基线策略 ID，必须大于 0。</p>
   */
  PolicyID: number
  /**
   * <p>基线系统父分类 ID。</p>
   */
  ParentCategoryID: number
  /**
   * <p>要重新扫描的检测项 ID 列表，不可为空且元素不可为 0。</p>
   */
  ItemIDList: Array<number | bigint>
  /**
   * <p>基线子分类 ID。</p>
   */
  CategoryID?: number
  /**
   * <p>集团账号的成员id</p>
   */
  MemberId?: Array<string>
}

/**
 * DescribeClbListenerRules请求参数结构体
 */
export interface DescribeClbListenerRulesRequest {
  /**
   * <p>资产ID</p>
   */
  AssetID: string
  /**
   * <p>集团账号的成员id</p>
   */
  MemberId?: Array<string>
  /**
   * <p>过滤器</p>
   */
  Filters?: Array<Filters>
  /**
   * <p>每页条数</p>
   */
  Limit?: number
  /**
   * <p>偏移</p>
   */
  Offset?: number
  /**
   * <p>排序方向</p>
   */
  Order?: string
  /**
   * <p>排序字段</p>
   */
  By?: string
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
 * 基线集群资产。
 */
export interface BaselineClusterAsset {
  /**
   * <p>集群 ID。</p>
   */
  ClusterID?: string
  /**
   * <p>集群名称。</p>
   */
  ClusterName?: string
  /**
   * <p>集群类型。</p>
   */
  ClusterType?: string
  /**
   * <p>集群节点总数。</p>
   */
  NodeCount?: number
  /**
   * <p>集群在线节点数。</p>
   */
  OnlineNodeCount?: number
  /**
   * <p>集群所属租户 Appid。</p>
   */
  Appid?: number
  /**
   * <p>集群子资产名称（Pod名/Node名/Container名/Namespace名；CLUSTER 类型时为集群名）。</p>
   */
  AssetName?: string
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
 * 修改规则项
 */
export interface ModifyRuleItem {
  /**
   * 规则类型
枚举值：
dimension：维度级规则
category：子项级规则
severity：等级级规则
   */
  RuleType?: string
  /**
   * 维度ID
   */
  DimensionId?: string
  /**
   * 子项ID，category和severity级别必填
   */
  CategoryId?: string
  /**
   * 等级，severity级别必填
枚举值：
critical：严重
high：高危
medium：中危
low：低危
   */
  Severity?: string
  /**
   * 扣分上限
   */
  MaxDeductScore?: number
  /**
   * 单次扣分
   */
  DeductPerItem?: number
}

/**
 * 资产概览统计信息
 */
export interface AssetStatisticsInfo {
  /**
   * <p>资产总数</p>
   */
  AssetTotalCount?: number
  /**
   * <p>近7天新增资产数量</p>
   */
  AssetAddCount?: number
  /**
   * <p>有风险资产数量</p>
   */
  RiskAssetCount?: number
  /**
   * <p>有告警资产数量</p>
   */
  AlarmAssetCount?: number
  /**
   * <p>公网资产数量</p>
   */
  PublicAssetCount?: number
  /**
   * <p>暴露资产数量</p>
   */
  ExposeAssetCount?: number
  /**
   * <p>主机资产数量</p>
   */
  CloudHostAssetCount?: number
}

/**
 * StopCSIPManualMalwareScan返回参数结构体
 */
export interface StopCSIPManualMalwareScanResponse {
  /**
   * <p>任务ID</p>
   */
  TaskId?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyWebhookPolicyStatus返回参数结构体
 */
export interface ModifyWebhookPolicyStatusResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 订单列表对象成员
 */
export interface CWPOrderList {
  /**
   * <p>所属产品 p_</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  ProductCode?: string
  /**
   * <p>子产品 sp_</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  SubProductCode?: string
  /**
   * <p>计费项四层 sv_</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  InquireKey?: string
  /**
   * <p>资源购买量</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  InquireNum?: number
  /**
   * <p>资源用量</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  UsedNum?: number
  /**
   * <p>云标签</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  TagList?: Array<Tags>
  /**
   * <p>订单状态 1 正常 2隔离 3销毁</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Status?: number
  /**
   * <p>订单的开始时间</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  BeginTime?: string
  /**
   * <p>订单的结束时间</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  EndTime?: string
  /**
   * <p>项目ID</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  ProjectID?: number
  /**
   * <p>资源别名</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Alias?: string
  /**
   * <p>资源ID</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  ResourceId?: string
  /**
   * <p>自动续费标签 0 默认不自动续费(大客户特权会自动续费的) 1 自动续费 2 手动设置不自动续费(大客户特权不会自动续费)</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  AutoRenewFlag?: number
  /**
   * <p>资源类型</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  SourceType?: number
  /**
   * <p>计费模式 0 后付费 1 预付费(包年包月)</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  PayMode?: number
  /**
   * <p>地域ID</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  RegionID?: number
  /**
   * <p>可用区ID</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  ZoneID?: number
  /**
   * <p>当前子订单号</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  DealName?: string
  /**
   * <p>订单额外参数</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  ExtraParam?: CWPOrderExtraParam
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
 * 云边界风险待治理风险信息
 */
export interface DescribeExposureStatisticsItem {
  /**
   * 风险标题
   */
  Title?: string
  /**
   * 风险等级
   */
  Severity?: string
  /**
   * 风险类型
   */
  RuleType?: string
  /**
   * 关联风险数量
   */
  RiskCount?: number
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
   * <p>集团账号的成员id</p>
   */
  MemberId?: Array<string>
  /**
   * <p>风险策略类型</p>
   */
  StrategyType?: string
  /**
   * <p>是否启用</p>
   */
  IsEnabled?: number
  /**
   * <p>策略内容，如：{     ThresholdValue: &quot;100&quot; }</p>
   */
  Rule?: string
  /**
   * <p>可选值：Info/Low/Medium/High</p>
   */
  RiskLevel?: string
  /**
   * <p>策略id</p>
   */
  StrategyId?: Array<number | bigint>
  /**
   * <p>策略名</p>
   */
  Name?: string
  /**
   * <p>策略描述</p>
   */
  Description?: string
  /**
   * <p>支持的数据库类型</p>
   */
  DbTypes?: string
}

/**
 * CreateDspmAssetIdentifyInfoExportJob返回参数结构体
 */
export interface CreateDspmAssetIdentifyInfoExportJobResponse {
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
 * DescribeEdrAlertList请求参数结构体
 */
export interface DescribeEdrAlertListRequest {
  /**
   * <p>集团账号的成员id</p>
   */
  MemberId?: Array<string>
  /**
   * <p>PolicyType - int - 是否必填：否 - 策略类型PolicyName - string - 是否必填：否 - 策略名称Domain - string - 是否必填：否 - 域名(先对域名做urlencode,再base64)PolicyAction- int - 是否必填：否 - 策略动作IsEnabled - int - 是否必填：否 - 是否生效</p>
   */
  Filters?: Array<EDRFilter>
  /**
   * <p>限制条数,默认10,最大100</p>
   */
  Limit?: number
  /**
   * <p>偏移量,默认0</p>
   */
  Offset?: number
  /**
   * <p>排序方式: [ASC:升序|DESC:降序]</p>
   */
  Order?: string
  /**
   * <p>可选排序列: [LatestDetectTime]</p>
   */
  By?: string
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
 * 漏洞传播趋势
 */
export interface VulSpreadTrend {
  /**
   * <p>日期<br>参数格式：YYYY-MM-DD</p>
   */
  Date?: string
  /**
   * <p>该日期的传播趋势数值</p>
   */
  Trend?: number
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
 * DescribeBaselineUserOtherConf请求参数结构体
 */
export interface DescribeBaselineUserOtherConfRequest {
  /**
   * 集团账号场景下的成员账号 Appid 列表。非集团账号或仅查询当前账号时传空。
   */
  MemberId?: Array<string>
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
 * DescribeWebhookReceiverList请求参数结构体
 */
export interface DescribeWebhookReceiverListRequest {
  /**
   * 分页偏移量
取值范围：[0, +∞)
默认值：0
   */
  Offset?: number
  /**
   * 每页返回数量
取值范围：[1, 200]
默认值：20
   */
  Limit?: number
  /**
   * 过滤条件
支持的过滤项：
Name：按机器人名称模糊搜索
Type：机器人类型，可选值：WEBHOOK（webhook） / SCF（云函数）
   */
  Filters?: Array<Filters>
  /**
   * 排序字段
枚举值：
InsertTime：创建时间
UpdateTime：更新时间
默认值：UpdateTime
   */
  Order?: string
  /**
   * 排序方式
枚举值：
asc：升序
desc：降序
默认值：desc
   */
  By?: string
}

/**
 * 集群列表项
 */
export interface ClusterListItem {
  /**
   * <p>appid</p>
   */
  AppID?: number
  /**
   * <p>资产id</p>
   * @deprecated
   */
  AssetId?: string
  /**
   * <p>集群id</p>
   */
  ClusterId?: string
  /**
   * <p>集群名称</p>
   */
  ClusterName?: string
  /**
   * <p>集群类型<br>MANAGED_CLUSTER: 托管集群</p>
   */
  ClusterType?: string
  /**
   * <p>严重告警事件数</p>
   * @deprecated
   */
  AlarmEventCriticalCount?: number
  /**
   * <p>高危告警事件数</p>
   * @deprecated
   */
  AlarmEventHighCount?: number
  /**
   * <p>中危告警事件数</p>
   * @deprecated
   */
  AlarmEventMiddleCount?: number
  /**
   * <p>低危告警事件数</p>
   * @deprecated
   */
  AlarmEventLowCount?: number
  /**
   * <p>严重风险事件数</p>
   * @deprecated
   */
  RiskEventCriticalCount?: number
  /**
   * <p>高危风险事件数</p>
   * @deprecated
   */
  RiskEventHighCount?: number
  /**
   * <p>中危风险事件数</p>
   * @deprecated
   */
  RiskEventMiddleCount?: number
  /**
   * <p>低危风险事件数</p>
   * @deprecated
   */
  RiskEventLowCount?: number
  /**
   * <p>节点总数</p>
   */
  NodeCount?: number
  /**
   * <p>离线节点总数</p>
   */
  OfflineNodeCount?: number
  /**
   * <p>未安装节点总数</p>
   */
  UninstallNodeCount?: number
  /**
   * <p>总核数</p>
   */
  TotalCoresCount?: number
  /**
   * <p>已防护核数</p>
   * @deprecated
   */
  DefendCoresCount?: number
  /**
   * <p>审计日志开关<br>(0:关闭 1:开启 2:开启失败 3:关闭失败)</p>
   */
  AuditLogSwitchStatus?: number
  /**
   * <p>防护状态<br>已防护: Defended</p>
   */
  DefendStatus?: string
  /**
   * <p>集群状态</p>
   */
  RunStatus?: string
  /**
   * <p>地域</p>
   */
  Region?: string
  /**
   * <p>k8s版本</p>
   */
  Version?: string
  /**
   * <p>最近资产同步时间</p>
   */
  LastAssetSyncTime?: string
  /**
   * <p>最近风险检查时间</p>
   */
  LastRiskCheckTime?: string
  /**
   * <p>风险状态</p>
   */
  RiskStatus?: string
  /**
   * <p>标签列表</p>
   */
  Tags?: Array<AssetTag>
  /**
   * <p>负责人名称</p>
   */
  OwnerName?: string
  /**
   * <p>失败原因</p>
   */
  FailMessage?: string
  /**
   * <p>运行子状态</p>
   */
  RunSubStatus?: string
  /**
   * <p>集群接入状态</p><p>枚举值：</p><ul><li>AccessedNone： 未接入</li><li>AccessedInstalling： 接入中</li><li>AccessedInstalled： 已接入-未防护</li><li>AccessedUninstalling： 卸载中</li><li>AccessedUninstallException： 卸载异常</li><li>AccessedDefended： 已接入-已防护</li><li>AccessedPartialDefence： 已接入-部分防护</li><li>AccessedException： 接入异常</li></ul>
   */
  AccessedStatus?: string
  /**
   * <p>接入子状态</p>
   */
  AccessedSubStatus?: string
  /**
   * <p>集群ca证书md5值，集群唯一标识</p>
   */
  ClusterCaMD5?: string
  /**
   * <p>资产同步状态</p><p>枚举值：</p><ul><li>AssetCheckNone： 初始状态</li><li>AssetCheckSync： 同步中</li><li>AssetCheckFinished： 同步完成</li><li>AssetCheckFailed： 同步失败</li></ul>
   */
  AssetSyncStatus?: string
  /**
   * <p>集群配置风险数量</p>
   * @deprecated
   */
  RiskConfigCount?: number
  /**
   * <p>集群接入失败原因</p>
   * @deprecated
   */
  AccessFailedMessage?: string
  /**
   * <p>地域中文名</p>
   */
  RegionName?: string
  /**
   * <p>地域英文名</p>
   */
  RegionNameEn?: string
  /**
   * <p>未绑定旗舰版的节点数量</p>
   */
  UnboundUltimateNodeCount?: number
}

/**
 * DescribeNFSScanConf返回参数结构体
 */
export interface DescribeNFSScanConfResponse {
  /**
   * <p>是否开启NFS扫描 0 否 1 是 9未设置,和0一样是未开启</p>
   */
  Enable?: number
  /**
   * <p>开启范围 0 自选主机 1 全部主机</p>
   */
  Scope?: number
  /**
   * <p>正选quuid配置列表</p>
   */
  IncludeQuuid?: Array<string>
  /**
   * <p>反选quuid配置列表</p>
   */
  ExcludeQuuid?: Array<string>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 服务器标签信息
 */
export interface MachineTag {
  /**
   * <p>关联标签ID</p>
   */
  Rid?: number
  /**
   * <p>标签名</p>
   */
  Name?: string
  /**
   * <p>标签ID</p>
   */
  TagId?: number
}

/**
 * DescribeDspmDictionaryList请求参数结构体
 */
export interface DescribeDspmDictionaryListRequest {
  /**
   * <p>字典类型（RootCategory：一级分类，IdentifyRule:敏感识别数据项）</p>
   */
  DictType: string
  /**
   * <p>集团账号的成员id</p>
   */
  MemberId?: Array<string>
  /**
   * <p>筛选条件</p>
   */
  Filters?: Array<WhereFilter>
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
 * DescribeNetAttackSetting返回参数结构体
 */
export interface DescribeNetAttackSettingResponse {
  /**
   * <p>0 关闭网络攻击检测，1开启网络攻击检测</p>
   */
  NetAttackEnable?: number
  /**
   * <p>0 新增告警事件默认待处理，1新增告警事件默认已处理，3新增告警事件默认忽略</p>
   */
  NetAttackAlarmStatus?: number
  /**
   * <p>新增资产自动包含 0 不包含 1包含</p>
   */
  AutoInclude?: number
  /**
   * <p>主机范围</p>
   */
  CWPScope?: number
  /**
   * <p>指定主机instance_id列表</p>
   */
  InstanceIDs?: Array<string>
  /**
   * <p>排除主机instance_id列表</p>
   */
  ExcludeInstanceIDs?: Array<string>
  /**
   * <p>标签ID列表</p>
   */
  TagIDs?: Array<string>
  /**
   * <p>容器范围</p>
   */
  TCSSScope?: number
  /**
   * <p>指定集群ID列表</p>
   */
  ClusterIDs?: Array<string>
  /**
   * <p>排除集群ID列表</p>
   */
  ExcludeClusterIDs?: Array<string>
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
 * ExportCSIPMalwareScanTaskDetail请求参数结构体
 */
export interface ExportCSIPMalwareScanTaskDetailRequest {
  /**
   * <p>CSIP扫描任务ID</p>
   */
  TaskId: number
  /**
   * <p>集团账号的成员id</p>
   */
  MemberId?: Array<string>
  /**
   * <p>Status - int - 是否必填：否 - 扫描状态过滤Quuid - string - 是否必填：否 - 主机Quuid过滤MachineName - string - 是否必填：否 - 主机名称模糊搜索InstanceID - string - 是否必填：否 - 实例ID过滤（单值模糊匹配，多值精确匹配）IP - string - 是否必填：否 - IP地址过滤（内网IP+公网IP双向模糊匹配）</p>
   */
  Filters?: Array<EDRFilter>
}

/**
 * 描述键值对过滤器，用于条件过滤查询。例如过滤ID、名称、状态等

若存在多个Filter时，Filter间的关系为逻辑与（AND）关系。
若同一个Filter存在多个Values，同一Filter下Values间的关系为逻辑或（OR）关系。
 */
export interface EDRFilters {
  /**
   * <p>过滤键的名称。</p>
   */
  Name: string
  /**
   * <p>一个或者多个过滤值。</p>
   */
  Values: Array<string>
  /**
   * <p>是否模糊匹配，前端框架会带上，可以不管</p>
   */
  ExactMatch?: boolean
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
 * RetryDspmExportLog返回参数结构体
 */
export interface RetryDspmExportLogResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDspmAssetIdentifyInfoList返回参数结构体
 */
export interface DescribeDspmAssetIdentifyInfoListResponse {
  /**
   * <p>总数</p>
   */
  TotalCount?: number
  /**
   * <p>结果集</p>
   */
  DataSet?: Array<DspmAssetIdentifyInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 客户端设置相关功能主机结构体
 */
export interface ClientSettingHost {
  /**
   * <p>host对应的数据库记录ID</p>
   */
  Id?: number
  /**
   * <p>主机名字</p>
   */
  Name?: string
  /**
   * <p>实例ID</p>
   */
  InstanceId?: string
  /**
   * <p>公网IP</p>
   */
  PublicIp?: string
  /**
   * <p>内网IP</p>
   */
  PrivateIp?: string
  /**
   * <p>主机Quuid</p>
   */
  Quuid?: string
  /**
   * <p>主机状态<br>OFFLINE: 离线<br>ONLINE: 在线<br>SHUTDOWN: 已关机<br>UNINSTALLED: 未防护</p>
   */
  Status?: string
  /**
   * <p>ins-sad143</p>
   */
  VpcId?: string
  /**
   * <p>地域信息</p>
   */
  RegionInfo?: RegionInfo
  /**
   * <p>附加信息</p>
   */
  MachineExtraInfo?: MachineExtraInfo
  /**
   * <p>0: 关闭<br>1:  开启<br>2: 开启中<br>3:  关闭中<br>9: 未设置</p>
   */
  FunctionStatus?: number
  /**
   * <p>以下几个固定值需要前端特殊处理，其他失败原因可直接展示：</p><ol><li>UNINSTALLED   -- 未安装</li><li>NEED_UPGRADE -- 需要升级</li><li>NOT_RUNNING -- 已关机</li><li>NO_PASSWORD -- 未开启密码登录，无法开启扫码</li></ol>
   */
  Message?: string
  /**
   * <p>失败原因</p>
   */
  MessageDesc?: string
  /**
   * <p>实例状态<br>RUNNING: 运行中<br>STOPED: 已关机<br>EXPIRED: 待回收</p>
   */
  InstanceStatus?: string
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
 * DeleteAssetTag请求参数结构体
 */
export interface DeleteAssetTagRequest {
  /**
   * 标签ID
   */
  TagID: number
  /**
   * <p>集团账号的成员id</p>
   */
  MemberId?: Array<string>
}

/**
 * DescribeBaselineMainTaskItemList返回参数结构体
 */
export interface DescribeBaselineMainTaskItemListResponse {
  /**
   * <p>基线检测项列表。</p>
   */
  ItemList?: Array<BaselineItem>
  /**
   * <p>符合条件的检测项总数。</p>
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * IP威胁情报信息（通过TIX IPAnalysis接口获取）
 */
export interface IPIntelInfo {
  /**
   * <p>情报标签（如常规木马、漏洞软件、窃密木马）</p>
   */
  Tags?: Array<string>
  /**
   * <p>研判依据</p>
   */
  Basis?: string
  /**
   * <p>所属运营商</p>
   */
  ISP?: string
  /**
   * <p>地理位置</p>
   */
  Location?: string
  /**
   * <p>家族团伙</p>
   */
  Characteristic?: string
  /**
   * <p>IP画像</p>
   */
  Purpose?: string
  /**
   * <p>反查域名列表</p>
   */
  Referer?: Array<DomainInfo>
}

/**
 * 资产树-云厂商节点
 */
export interface ProviderNode {
  /**
   * <p>云厂商</p>
   */
  Provider?: string
  /**
   * <p>云厂商名称</p>
   */
  ProviderName?: string
  /**
   * <p>下属资产分类节点</p>
   */
  Categories?: Array<CategoryNode>
}

/**
 * DescribeCWPMachineOsList返回参数结构体
 */
export interface DescribeCWPMachineOsListResponse {
  /**
   * <p>操作系统列表</p>
   */
  List?: Array<OsName>
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
 * DescribeClusterContainerList返回参数结构体
 */
export interface DescribeClusterContainerListResponse {
  /**
   * <p>总数</p>
   */
  TotalCount?: number
  /**
   * <p>列表</p>
   */
  List?: Array<ClusterContainerListItem>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyDspmIdentifyRule请求参数结构体
 */
export interface ModifyDspmIdentifyRuleRequest {
  /**
   * <p>数据项id</p>
   */
  Id: number
  /**
   * <p>数据项名称</p>
   */
  Name: string
  /**
   * <p>集团账号的成员id</p>
   */
  MemberId?: Array<string>
  /**
   * <p>数据项描述</p>
   */
  Description?: string
  /**
   * <p>数据项启用状态</p><p>枚举值：</p><ul><li>0： 未启用</li><li>1： 启用</li></ul>
   */
  Status?: number
  /**
   * <p>结构化规则</p>
   */
  StructuredRule?: string
  /**
   * <p>非结构化规则</p>
   */
  UnStructuredRule?: string
}

/**
 * 按风险引擎分组风险信息
 */
export interface AssetRiskContent {
  /**
   * <p>风险引擎</p>
   */
  EngineType?: string
  /**
   * <p>风险引擎下具体风险分布</p>
   */
  Risks?: Array<AssetRiskInfo>
  /**
   * <p>资产ID</p>
   */
  AssetRID?: string
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
 * DeleteLoginWhiteList返回参数结构体
 */
export interface DeleteLoginWhiteListResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
 * UpdateClusterOwner返回参数结构体
 */
export interface UpdateClusterOwnerResponse {
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
 * DescribeEDRRuleList请求参数结构体
 */
export interface DescribeEDRRuleListRequest {
  /**
   * <p>集团账号的成员id</p>
   */
  MemberId?: Array<string>
  /**
   * <p>PolicyType - int - 是否必填：否 - 策略类型<br>PolicyName - string - 是否必填：否 - 策略名称<br>Domain - string - 是否必填：否 - 域名(先对域名做urlencode,再base64)<br>PolicyAction- int - 是否必填：否 - 策略动作<br>IsEnabled - int - 是否必填：否 - 是否生效</p>
   */
  Filters?: Array<EDRFilter>
  /**
   * <p>限制条数,默认10,最大100</p>
   */
  Limit?: number
  /**
   * <p>偏移量,默认0</p>
   */
  Offset?: number
  /**
   * <p>排序方式: [ASC:升序|DESC:降序]</p>
   */
  Order?: string
  /**
   * <p>可选排序列: [ModifyTime]</p>
   */
  By?: string
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
 * DeleteCosAkAsset返回参数结构体
 */
export interface DeleteCosAkAssetResponse {
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
 * 绑定失败明细
 */
export interface LicenseBindFailedItem {
  /**
   * 实例ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  InstanceId?: string
  /**
   * 失败原因
注意：此字段可能返回 null，表示取不到有效值。
   */
  ExceptionMessage?: string
  /**
   * 修复建议
注意：此字段可能返回 null，表示取不到有效值。
   */
  FixMessage?: string
  /**
   * 机器额外信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  MachineExtraInfo?: MachineExtraInfo
}

/**
 * 自定义策略详情
 */
export interface CustomRiskRuleItem {
  /**
   * <p>风险规则ID</p>
   */
  RuleID?: string
  /**
   * <p>腾讯云</p>
   */
  Provider?: string
  /**
   * <p>风险标题</p>
   */
  RiskTitle?: string
  /**
   * <p>风险分类</p>
   */
  Classify?: string
  /**
   * <p>风险等级</p>
   */
  Severity?: string
  /**
   * <p>风险规则开启状态</p>
   */
  Status?: string
  /**
   * <p>关联的账号数量</p>
   */
  RelatedUinCount?: number
  /**
   * <p>策略启用的账号数量</p>
   */
  PolicyEnableCount?: number
  /**
   * <p>资产类型</p>
   */
  AssetType?: string
  /**
   * <p>规则是否免费</p>
   */
  IsFree?: number
  /**
   * <p>检查类型</p>
   */
  CheckType?: string
  /**
   * <p>安全条款规范</p>
   */
  StandardTerms?: Array<StandardTerm>
  /**
   * <p>资产类型图标</p>
   */
  AssetTypeIconURL?: string
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
 * DescribeEdrAlertCountForAsset返回参数结构体
 */
export interface DescribeEdrAlertCountForAssetResponse {
  /**
   * <p>全局汇总统计（Quuids为空时返回）</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  GlobalCount?: EdrAlertCountItem
  /**
   * <p>按quuid粒度统计列表（Quuids非空时返回）</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Items?: Array<EdrAlertCountItem>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeAIAnalysisHistory请求参数结构体
 */
export interface DescribeAIAnalysisHistoryRequest {
  /**
   * <p>过滤器</p>
   */
  Filter?: Filter
  /**
   * <p>sessionID，用于游标分页</p>
   */
  SessionID?: string
}

/**
 * ModifyAssetCoreAttribute返回参数结构体
 */
export interface ModifyAssetCoreAttributeResponse {
  /**
   * 标记资产是否核心
   */
  Message?: string
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
 * DeleteAssetFilterView返回参数结构体
 */
export interface DeleteAssetFilterViewResponse {
  /**
   * 删除成功
   */
  Message?: string
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
 * 等级扣分明细
 */
export interface SeverityItem {
  /**
   * 风险等级
枚举值：
critical：严重
high：高危
medium：中危
low：低危
   */
  Severity?: string
  /**
   * 等级中文名
   */
  SeverityName?: string
  /**
   * 该等级风险数量
   */
  RiskCount?: number
  /**
   * 单次扣分
   */
  DeductPerItem?: number
  /**
   * 等级扣分上限
   */
  MaxDeductScore?: number
  /**
   * 实际扣分
   */
  DeductScore?: number
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
 * DescribeBaselinePolicyNameExistAppidList请求参数结构体
 */
export interface DescribeBaselinePolicyNameExistAppidListRequest {
  /**
   * <p>策略名称</p>
   */
  PolicyName: string
  /**
   * <p>集团账号的成员id</p>
   */
  MemberId?: Array<string>
}

/**
 * DescribeEdrAlertInfo返回参数结构体
 */
export interface DescribeEdrAlertInfoResponse {
  /**
   * <p>告警详情</p>
   */
  Alert?: EdrAlertDetail
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyRaspLicenseBinds请求参数结构体
 */
export interface ModifyRaspLicenseBindsRequest {
  /**
   * 资产类型
- CWP 主机安全资产
- TCSS_HOST 容器主机节点
- TCSS_EKS 容器超级节点
   */
  AssetType: string
  /**
   * 资源ID
   */
  ResourceID: string
  /**
   * 计费项类型
- sv_yunjing_vas_small 小型包
- sv_yunjing_vas_medium 中型包
- sv_yunjing_vas_large 大型包
- sv_yunjing_vas_expansion 扩展包
   */
  InquireKey: string
  /**
   * 实例ID数组
   */
  QUUID?: Array<string>
  /**
   * 是否全部机器实例
   */
  IsALL?: boolean
  /**
   * 过滤参数,该参数需要IsALL=true时生效,表示筛选的结果作用到QUUID里
   */
  Filters?: Array<Filters>
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
 * VRP评级信息
 */
export interface VPRRatingInfo {
  /**
   * VPR 评级结果
枚举值：
URGENT：立即修复
SUGGESTED：建议修复
DEFERRABLE：可延迟修复
   */
  Result?: string
  /**
   * 评级说明
   */
  Remark?: string
  /**
   * 分阶段评级详情列表
   */
  Stage?: Array<VPRRatingStage>
}

/**
 * ModifyEdrExcludeNetworkSegments请求参数结构体
 */
export interface ModifyEdrExcludeNetworkSegmentsRequest {
  /**
   * <p>集团账号的成员id</p>
   */
  MemberId?: Array<string>
  /**
   * <p>例外网段列表，支持IP/IP段/CIDR格式，最多可添加100条</p>
   */
  NetworkSegments?: Array<string>
}

/**
 * 云厂商资产数量
 */
export interface AssetProviderDistributeInfo {
  /**
   * <p>腾讯云资产总数</p>
   */
  TencentAssetCount?: number
  /**
   * <p>阿里云资产总数</p>
   */
  AliAssetCount?: number
  /**
   * <p>亚马逊云资产总数</p>
   */
  AwsAssetCount?: number
  /**
   * <p>其他云环境资产总数</p>
   */
  OtherAssetCount?: number
  /**
   * <p>微软云资产数量</p>
   */
  AzureAssetCount?: number
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
 * DescribeEDRScanRecordList请求参数结构体
 */
export interface DescribeEDRScanRecordListRequest {
  /**
   * <p>集团账号的成员id</p>
   */
  MemberId?: Array<string>
  /**
   * <p>通用查询参数（含Filters/Limit/Offset/Order/By）</p>
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
 * CreateCosRiskScanTask返回参数结构体
 */
export interface CreateCosRiskScanTaskResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeNatRules返回参数结构体
 */
export interface DescribeNatRulesResponse {
  /**
   * <p>Dnat规则列表</p>
   */
  DnatRules?: Array<NatDnatRuleItem>
  /**
   * <p>Snat规则列表</p>
   */
  SnatRules?: Array<NatSnatRuleItem>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeRiskCenterRiskTrendAnalysis请求参数结构体
 */
export interface DescribeRiskCenterRiskTrendAnalysisRequest {
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
 * ResetDspmAssetAccountPassword返回参数结构体
 */
export interface ResetDspmAssetAccountPasswordResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 接收机器人精简信息
 */
export interface WebhookReceiverBrief {
  /**
   * 机器人 ID
   */
  ID?: number
  /**
   * 机器人名称
   */
  Name?: string
  /**
   * 机器人类型
枚举值：
WEBHOOK：webhook 类型
SCF：云函数类型
   */
  Type?: string
}

/**
 * DescribeClusterInstallCommand请求参数结构体
 */
export interface DescribeClusterInstallCommandRequest {
  /**
   * <p>是否腾讯云。true：走平行容器 daemonset yaml 安装分支；false：走主机 agent 安装命令分支</p>
   */
  IsCloud: boolean
  /**
   * <p>集团账号的成员id</p>
   */
  MemberId?: Array<string>
  /**
   * <p>网络类型<br>枚举值：<br>basic：基础网络<br>private：VPC<br>public：公网<br>direct：专线</p>
   */
  NetType?: string
  /**
   * <p>地域编码（NetType=direct 时必填；腾讯云分支用于特殊地域镜像仓库替换）</p>
   */
  RegionCode?: string
  /**
   * <p>VPC ID（NetType=direct 时必填）<br>参数格式：形如 vpc-xxxxxxxx</p>
   */
  VpcId?: string
  /**
   * <p>过期时间<br>参数格式：yyyy-MM-dd（如 2026-12-31）<br>用途：腾讯云分支用于 daemonset yaml 的 cos 下载链接过期时间；非腾讯云分支用于 agent 安装 token 过期时间</p>
   */
  ExpireDate?: string
  /**
   * <p>csip 标签 ID 列表（非腾讯云分支用，关联安装标签）</p>
   */
  TagIds?: Array<number | bigint>
  /**
   * <p>集群自定义参数（腾讯云分支用于替换 daemonset 模板占位符）</p>
   */
  ClusterCustomParameters?: Array<ClusterCustomParameters>
  /**
   * <p>接入 VIP（非腾讯云分支用；NetType=direct 且未传 Vip 时由专线服务自动申请）</p>
   */
  Vip?: string
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
 * DescribeClusterContainerWebServiceList返回参数结构体
 */
export interface DescribeClusterContainerWebServiceListResponse {
  /**
   * <p>匹配总数</p>
   */
  TotalCount?: number
  /**
   * <p>Web服务列表</p>
   */
  List?: Array<ContainerWebServiceItem>
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
 * ModifyCSIPRaspLicenseBinds请求参数结构体
 */
export interface ModifyCSIPRaspLicenseBindsRequest {
  /**
   * <p>资源ID（指定绑定到哪个订单）</p>
   */
  ResourceId: string
  /**
   * <p>授权类型。枚举值：rasp(RASP) / enterprise_hp(旗舰版)。为空默认 rasp</p>
   */
  LicenseType: string
  /**
   * <p>资产类型。枚举值：host(主机) / cluster(容器节点) / eks(EKS超级节点)。为空默认 host</p>
   */
  AssetType: string
  /**
   * <p>待绑定的实例ID列表（IsAll=true时可不传）</p>
   */
  InstanceIDs?: Array<string>
  /**
   * <p>是否绑定全部未绑定机器（true时自动算差集）</p>
   */
  IsAll?: boolean
}

/**
 * 应用日志采集路径
 */
export interface LogAppCollectPath {
  /**
   * <p>配置ID</p>
   */
  Id?: number
  /**
   * <p>采集路径</p>
   */
  Path?: string
  /**
   * <p>日志标签</p>
   */
  LogTag?: string
  /**
   * <p>创建时间</p>
   */
  CreateTime?: string
  /**
   * <p>修改时间</p>
   */
  ModifyTime?: string
}

/**
 * 云资源配置风险周期扫描配置
 */
export interface RiskCronConfig {
  /**
   * <p>周期任务创建者appid</p>
   */
  CreateAppID?: number
  /**
   * <p>周期计划</p>
   */
  PlanContent?: string
  /**
   * <p>周期扫描开启状态</p>
   */
  CronStatus?: number
  /**
   * <p>新增规则是否自动加入扫描</p>
   */
  AddRuleEnableStatus?: boolean
  /**
   * <p>时区</p>
   */
  ScanPlanTimezone?: string
  /**
   * <p>增量资产开启风险扫描</p>
   */
  IncrementAssetScanRisk?: boolean
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
 * CreateScanTask返回参数结构体
 */
export interface CreateScanTaskResponse {
  /**
   * <p>扫描任务ID</p>
   */
  TaskID?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeMandatoryVulSet请求参数结构体
 */
export interface DescribeMandatoryVulSetRequest {
  /**
   * 漏洞披露所属年份
   */
  Year?: number
  /**
   * 漏洞披露所属月份
   */
  Month?: number
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
 * DeleteWebhookReceivers请求参数结构体
 */
export interface DeleteWebhookReceiversRequest {
  /**
   * 机器人 ID 列表
入参限制：单次最多 50 个
   */
  IDList: Array<number | bigint>
}

/**
 * DescribeLoginTypeHost请求参数结构体
 */
export interface DescribeLoginTypeHostRequest {
  /**
   * <p>集团账号的成员id</p>
   */
  MemberId?: Array<string>
  /**
   * <p>Name - string - 是否必填：否 - 主机名 InstanceId - string - 是否必填：否 - 实例ID PublicIp - string - 是否必填：否 - 公网IP PrivateIp - string - 是否必填：否 - 私网IP</p>
   */
  Filters?: Array<EDRFilter>
  /**
   * <p>限制条数,默认10,最大100</p>
   */
  Limit?: number
  /**
   * <p>偏移量,默认0</p>
   */
  Offset?: number
  /**
   * <p>排序方式: [ASC:升序|DESC:降序]</p>
   */
  Order?: string
  /**
   * <p>可选排序列: [Id]</p>
   */
  By?: string
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
 * DescribeClusterAssetList返回参数结构体
 */
export interface DescribeClusterAssetListResponse {
  /**
   * <p>总数</p>
   */
  TotalCount?: number
  /**
   * <p>列表</p>
   */
  List?: Array<ClusterListItem>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDspmAssetFieldSamples请求参数结构体
 */
export interface DescribeDspmAssetFieldSamplesRequest {
  /**
   * <p>资产实例ID</p>
   */
  AssetId: string
  /**
   * <p>数据库名</p>
   */
  DbName: string
  /**
   * <p>表名</p>
   */
  TableName: string
  /**
   * <p>字段名</p>
   */
  FieldName: string
  /**
   * <p>集团账号的成员id</p>
   */
  MemberId?: Array<string>
  /**
   * <p>schema名</p>
   */
  SchemaName?: string
}

/**
 * DescribeAIScheduleTaskList请求参数结构体
 */
export interface DescribeAIScheduleTaskListRequest {
  /**
   * <p>AI 定时任务 ID，用于过滤。可通过 DescribeAIScheduleList 接口获取。</p>
   */
  ScheduleId?: string
  /**
   * <p>分页偏移量，默认 0。</p>
   */
  Offset?: number
  /**
   * <p>分页大小，默认 20，最大 100。</p>
   */
  Limit?: number
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
 * DeleteAssetTag返回参数结构体
 */
export interface DeleteAssetTagResponse {
  /**
   * 状态码
   */
  Code?: string
  /**
   * 信息
   */
  Message?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeAIScheduleTaskList返回参数结构体
 */
export interface DescribeAIScheduleTaskListResponse {
  /**
   * <p>任务列表。</p>
   */
  TaskSet?: Array<AiScheduleTaskInfo>
  /**
   * <p>总条数。</p>
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyVulWhitelistConfig请求参数结构体
 */
export interface ModifyVulWhitelistConfigRequest {
  /**
   * <p>id列表</p>
   */
  Id?: number
  /**
   * <p>集团账号的成员id</p>
   */
  MemberId?: Array<string>
  /**
   * <p>备注</p>
   */
  Remark?: string
  /**
   * <p>资产范围</p><p>枚举值：</p><ul><li>0： 全部资产</li><li>1： 自选资产</li><li>2： 全选剔除资产</li></ul>
   */
  AssetRange?: number
  /**
   * <p>资产列表（Quuid列表）</p>
   */
  AssetList?: Array<string>
}

/**
 * 单个计费项的授权状态汇总
 */
export interface LicenseStatusItem {
  /**
   * <p>资源ID</p>
   */
  ResourceId?: string
  /**
   * <p>授权类型（ENTERPRISE_HP=旗舰版/ADVANCED_HP=专业版/RASP）</p>
   */
  LicenseType?: string
  /**
   * <p>授权名称（旗舰版/专业版/RASP）</p>
   */
  Name?: string
  /**
   * <p>授权类别 0-主机授权 1-RASP授权</p>
   */
  Category?: number
  /**
   * <p>总数</p>
   */
  TotalNum?: number
  /**
   * <p>已用</p>
   */
  UsedNum?: number
  /**
   * <p>剩余</p>
   */
  RemainNum?: number
  /**
   * <p>最早开始时间（格式：2006-01-02 15:04:05）</p>
   */
  BeginTime?: string
  /**
   * <p>最晚到期时间（格式：2006-01-02 15:04:05）</p>
   */
  EndTime?: string
}

/**
 * TestWebhookReceiver返回参数结构体
 */
export interface TestWebhookReceiverResponse {
  /**
   * <p>测试结果（需base64解码得到明文）</p>
   */
  RespData?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
 * DescribeMachineGeneral返回参数结构体
 */
export interface DescribeMachineGeneralResponse {
  /**
   * <p>资产总数</p>
   */
  MachineCnt?: number
  /**
   * <p>已防护机器数</p>
   */
  ProtectMachineCnt?: number
  /**
   * <p>已防护基础版机器数</p>
   */
  BaseMachineCnt?: number
  /**
   * <p>已防护专业版机器数</p>
   */
  SpecialtyMachineCnt?: number
  /**
   * <p>已防护旗舰版机器数</p>
   */
  FlagshipMachineCnt?: number
  /**
   * <p>存在风险的机器数</p>
   */
  RiskMachineCnt?: number
  /**
   * <p>比较昨日风险机器数</p>
   */
  CompareYesterdayRiskMachineCnt?: number
  /**
   * <p>比较昨日未防护机器数</p>
   */
  CompareYesterdayNotProtectMachineCnt?: number
  /**
   * <p>比较昨日即将到期的机器数</p>
   */
  CompareYesterdayDeadlineMachineCnt?: number
  /**
   * <p>即将到期的机器数</p>
   */
  DeadlineMachineCnt?: number
  /**
   * <p>未防护机器数</p>
   */
  NotProtectMachineCnt?: number
  /**
   * <p>已防护轻量机器数（Lighthouse机器）</p>
   */
  LHGeneralDiscountCnt?: number
  /**
   * <p>比较昨日新增的主机数</p>
   */
  CompareYesterdayMachineCnt?: number
  /**
   * <p>自动清理时间,最大720小时,最小0, 默认0 ,0=关闭</p>
   */
  MachineDestroyAfterOfflineHours?: number
  /**
   * <p>云服务器类型数组</p>
   */
  CloudFrom?: Array<CloudFromCnt>
  /**
   * <p>腾讯云服务商机器数</p>
   */
  TencentCloudMachineCnt?: number
  /**
   * <p>阿里云服务商机器数</p>
   */
  AliCloudMachineCnt?: number
  /**
   * <p>百度云服务商机器数</p>
   */
  BaiduCloudMachineCnt?: number
  /**
   * <p>IDC机器数</p>
   */
  IDCMachineCnt?: number
  /**
   * <p>其他云服务商机器数</p>
   */
  OtherCloudMachineCnt?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeClusterSummary返回参数结构体
 */
export interface DescribeClusterSummaryResponse {
  /**
   * <p>集群总数</p>
   */
  TotalClusterCount?: number
  /**
   * <p>告警集群总数</p>
   * @deprecated
   */
  AlarmClusterCount?: number
  /**
   * <p>风险集群总数</p>
   * @deprecated
   */
  RiskClusterCount?: number
  /**
   * <p>节点总数</p>
   */
  TotalNodeCount?: number
  /**
   * <p>总核数</p>
   */
  TotalCoreCount?: number
  /**
   * <p>告警事件总数</p>
   * @deprecated
   */
  AlarmEventCount?: number
  /**
   * <p>严重告警事件数</p>
   * @deprecated
   */
  CriticalAlarmEventCount?: number
  /**
   * <p>高危告警事件数</p>
   * @deprecated
   */
  HighAlarmEventCount?: number
  /**
   * <p>中危告警事件数</p>
   * @deprecated
   */
  MiddleAlarmEventCount?: number
  /**
   * <p>低危告警事件数</p>
   * @deprecated
   */
  LowAlarmEventCount?: number
  /**
   * <p>风险事件总数</p>
   * @deprecated
   */
  RiskEventCount?: number
  /**
   * <p>严重风险事件数</p>
   * @deprecated
   */
  CriticalRiskEventCount?: number
  /**
   * <p>高危风险事件数</p>
   * @deprecated
   */
  HighRiskEventCount?: number
  /**
   * <p>中危风险事件个数</p>
   * @deprecated
   */
  MiddleRiskEventCount?: number
  /**
   * <p>低危风险事件个数</p>
   * @deprecated
   */
  LowRiskEventCount?: number
  /**
   * <p>已使用核数额度</p>
   */
  UsedCoreQuota?: number
  /**
   * <p>已购买核数额度</p>
   */
  PurchasedCoreQuota?: number
  /**
   * <p>弹性计费核数</p>
   */
  ElasticCoreQuota?: number
  /**
   * <p>集群未防护核数</p>
   */
  UnprotectedCoreCount?: number
  /**
   * <p>集群已防护核数</p>
   */
  ProtectedCoreCount?: number
  /**
   * <p>未防护集群数</p>
   */
  UnprotectedClusterCount?: number
  /**
   * <p>已防护集群数</p>
   */
  ProtectedClusterCount?: number
  /**
   * <p>腾讯云TKE集群数量</p>
   */
  TkeClusterCount?: number
  /**
   * <p>自建集群数量</p>
   */
  SelfBuiltClusterCount?: number
  /**
   * <p>严重告警集群数量</p>
   * @deprecated
   */
  CriticalAlarmClusterCount?: number
  /**
   * <p>高危告警集群数量</p>
   * @deprecated
   */
  HighAlarmClusterCount?: number
  /**
   * <p>严重风险集群数</p>
   * @deprecated
   */
  CriticalRiskClusterCount?: number
  /**
   * <p>高危风险集群数量</p>
   * @deprecated
   */
  HighRiskClusterCount?: number
  /**
   * <p>未绑定旗舰版节点数量</p>
   */
  UnboundUltimateNodeCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 单个通知项
 */
export interface WebhookNotifyItem {
  /**
   * <p>模块编码（与 ModifyNotifySettingAlert 共用枚举）<br>枚举值：<br>Vul：漏洞与云安全态势<br>Alert：告警中心<br>AkSk：云API风险治理<br>Agent：客户端/主机资产<br>LogAnalysis：日志分析</p>
   */
  Module?: string
  /**
   * <p>子模块编码<br>枚举值（部分）：<br>MALWARE_FILE：恶意文件<br>MALWARE_PROCESS：恶意进程<br>RISK_LOGIN：异常登录<br>BRUTE_FORCE：密码破解<br>MALICIOUS_REQUEST：恶意请求<br>HIGH_RISK_COMMAND：高危命令<br>PRIVILEGE_ESCALATION：本地提权<br>REVERSE_SHELL：反弹Shell<br>NETWORK_ATTACK：网络攻击<br>MULTI_BEHAVIOR_ATTACK：多行为攻击<br>AGENT_OFFLINE：客户端离线<br>AGENT_UNINSTALL：客户端卸载<br>完整枚举见 DescribeWebhookNotifyItemTree</p>
   */
  SubModule?: string
  /**
   * <p>风险等级集合<br>枚举值：<br>CRITICAL：严重<br>HIGH：高危<br>MEDIUM：中危<br>LOW：低危<br>INFO：提示<br>不支持等级的子模块传空数组</p>
   */
  Levels?: Array<string>
  /**
   * <p>处理状态等</p>
   */
  Items?: Array<string>
}

/**
 * DescribeVdbAndPocInfo返回参数结构体
 */
export interface DescribeVdbAndPocInfoResponse {
  /**
   * 病毒库更新时间。
   */
  VdbUpdateTime?: string
  /**
   * 漏洞库更新时间。
   */
  PocUpdateTime?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeBaselineMainTaskItemList请求参数结构体
 */
export interface DescribeBaselineMainTaskItemListRequest {
  /**
   * <p>基线扫描主任务 ID。</p>
   */
  MainTaskID: number
  /**
   * <p>集团账号的成员id</p>
   */
  MemberId?: Array<string>
  /**
   * <p>分页查询每页返回条数，默认值 10，最大值 100。</p>
   */
  Limit?: number
  /**
   * <p>分页查询偏移量，默认值 0。</p>
   */
  Offset?: number
}

/**
 * DescribeNotifySettingAlert请求参数结构体
 */
export type DescribeNotifySettingAlertRequest = null

/**
 * DescribeDspmLogList请求参数结构体
 */
export interface DescribeDspmLogListRequest {
  /**
   * <p>集团账号的成员id</p>
   */
  MemberId?: Array<string>
  /**
   * <p>限制数目</p>
   */
  Limit?: number
  /**
   * <p>偏移量</p>
   */
  Offset?: number
  /**
   * <p>排序方式(desc=倒叙,asc=升序)</p>
   */
  Sort?: string
  /**
   * <p>排序字段(opTime=时间,dangerLvl=风险等级)</p>
   */
  Field?: string
  /**
   * <p>风险等级(0-安全,1-低风险,2-中风险,3-高风险,不传全部)</p>
   */
  DangerLevel?: string
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
   * <p>恢复日志id</p>
   */
  RestoreLogId?: number
  /**
   * <p>客户端</p>
   */
  ClientName?: string
  /**
   * <p>流量来源，取值 Agent/Proxy/空；传Agent会返回Agent的日志，传Proxy会返回Proxy日志，两者都传或不传则返回所有</p>
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
   * <p>数据库类型, 支持的值：cdb，mariadb</p>
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
   * <p>风险等级数组(0-安全,1-低风险,2-中风险,3-高风险)</p>
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
   * <p>客户端MAC</p>
   */
  ClientMac?: string
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
 * DescribeBaselineCalculatingStatisticsPolicyIDList返回参数结构体
 */
export interface DescribeBaselineCalculatingStatisticsPolicyIDListResponse {
  /**
   * <p>当前统计计算中的系统父分类 ID 列表。</p>
   */
  SystemCategoryIDList?: Array<number | bigint>
  /**
   * <p>当前统计计算中的自定义策略 ID 列表。</p>
   */
  SelfDefinedPolicyIDList?: Array<number | bigint>
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
 * ModifyDspmIdentifyLevelItem返回参数结构体
 */
export interface ModifyDspmIdentifyLevelItemResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
 * 订单详情
 */
export interface OrderDetail {
  /**
   * <p>资源ID</p>
   */
  ResourceID?: string
  /**
   * <p>计费项</p>
   */
  InquireKey?: string
  /**
   * <p>订单状态</p><ul><li>1 正常</li><li>2 隔离期</li><li>3 已销毁</li></ul>
   */
  Status?: number
  /**
   * <p>订单类型</p>
   */
  SourceType?: number
}

/**
 * ModifyEDRRulesAction返回参数结构体
 */
export interface ModifyEDRRulesActionResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
 * ScanBaselinePolicyList返回参数结构体
 */
export interface ScanBaselinePolicyListResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
 * 解绑失败明细
 */
export interface LicenseUnbindFailedItem {
  /**
   * <p>实例ID</p>
   */
  InstanceId?: string
  /**
   * <p>失败原因</p>
   */
  ExceptionMessage?: string
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
 * DescribeDspmAssetIdentifyInfoList请求参数结构体
 */
export interface DescribeDspmAssetIdentifyInfoListRequest {
  /**
   * <p>集团账号的成员id</p>
   */
  MemberId?: Array<string>
  /**
   * <p>筛选项</p>
   */
  Filter?: Filter
  /**
   * <p>识别模板id</p>
   */
  ComplianceId?: number
}

/**
 * 主机漏洞概要
 */
export interface HostVulOverview {
  /**
   * <p>需立即修复漏洞数（VPR 评级为 URGENT 的漏洞数量）</p>
   */
  UrgentRepairCount?: number
  /**
   * <p>已开启漏洞防御的主机数</p>
   */
  DefendHostCount?: number
  /**
   * <p>主机总数</p>
   */
  TotalHostCount?: number
  /**
   * <p>已修复漏洞总次数</p>
   */
  FixedVulCount?: number
  /**
   * <p>Linux 软件漏洞数</p>
   */
  LinuxVulCount?: number
  /**
   * <p>Windows 系统补丁数</p>
   */
  WindowVulCount?: number
  /**
   * <p>Web-CMS 漏洞数</p>
   */
  WebCMSVulCount?: number
  /**
   * <p>应用漏洞数</p>
   */
  AppVulCount?: number
  /**
   * <p>应急漏洞数</p>
   */
  EmergencyCount?: number
  /**
   * <p>漏洞知识库总数</p>
   */
  VulItemCount?: number
  /**
   * <p>最近扫描时间</p><p>参数格式：YYYY-MM-DDTHH:mm:ssZ</p>
   */
  LatestScanTime?: string
  /**
   * <p>是否开启周期扫描</p><p>枚举值：</p><ul><li>1： 开启</li><li>0： 未开启</li></ul>
   */
  EnableTimingScan?: number
  /**
   * <p>严重修复数</p>
   */
  CriticalRepairCount?: number
  /**
   * <p>严重修复Linux漏洞数</p>
   */
  CriticalRepairLinuxVulCount?: number
  /**
   * <p>严重修复应用漏洞数</p>
   */
  CriticalRepairAppVulCount?: number
  /**
   * <p>严重修复Web-CMS漏洞数</p>
   */
  CriticalRepairWebCMSVulCount?: number
  /**
   * <p>严重修复紧急漏洞数</p>
   */
  CriticalRepairEmergencyCount?: number
}

/**
 * DescribeAILinkSetting请求参数结构体
 */
export interface DescribeAILinkSettingRequest {
  /**
   * <p>集团账号的成员id</p>
   */
  MemberId?: Array<string>
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
 * ModifyDspmIdentifyComplianceGroupStatus请求参数结构体
 */
export interface ModifyDspmIdentifyComplianceGroupStatusRequest {
  /**
   * <p>识别模板ID</p>
   */
  Id: number
  /**
   * <p>启用状态</p><p>枚举值：</p><ul><li>0： 不启用</li><li>1： 启用</li></ul>
   */
  Status: number
  /**
   * <p>集团账号的成员id</p>
   */
  MemberId?: Array<string>
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
   * <p>集团账号的成员id</p>
   */
  MemberId?: Array<string>
  /**
   * 调度周期配置
   */
  ScheduleConfig?: DspmScheduleConfig
}

/**
 * ModifyDspmAssetDataScanTaskStatus请求参数结构体
 */
export interface ModifyDspmAssetDataScanTaskStatusRequest {
  /**
   * <p>任务ID</p>
   */
  TaskIds: Array<number | bigint>
  /**
   * <p>任务状态</p><p>枚举值：</p><ul><li>1： 识别中</li><li>2： 识别终止</li><li>3： 识别成功</li><li>4： 识别失败</li><li>5： 暂停</li><li>0： 未识别</li></ul>
   */
  Status: number
  /**
   * <p>集团账号的成员id</p>
   */
  MemberId?: Array<string>
}

/**
 * CancelEdrAlertIgnore返回参数结构体
 */
export interface CancelEdrAlertIgnoreResponse {
  /**
   * <p>数量</p>
   */
  CancelledCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
 * ModifyEDRRule请求参数结构体
 */
export interface ModifyEDRRuleRequest {
  /**
   * <p>策略类型 / Rule Type: 0-系统策略/System Rule, 1-自定义策略/Custom Rule</p>
   */
  RuleType: number
  /**
   * <p>执行动作 / Action: 0-告警/Alert, 1-放行/Allow, 2-告警并拦截/Alert and Block</p>
   */
  AlertAction: number
  /**
   * <p>生效资产 / Effective Scope: 0-指定主机/Specified Hosts, 1-全部主机/All Hosts, 2-专业版/Professional, 3-旗舰版/Flagship, 4-专业版+旗舰版/Professional+Flagship     QUUIDS        []string json:&quot;QUUIDS&quot;                                      // 主机列表 / Host QUUIDS (when Scope=0)</p>
   */
  CWPScope: number
  /**
   * <p>容器生效镜像范围 / Container Image Scope: 0-指定镜像/Specified Images, 1-全部镜像/All Images</p>
   */
  TCSSScope: number
  /**
   * <p>开关 / Status: 0-开启/Enabled, 1-关闭/Disabled</p>
   */
  Status: number
  /**
   * <p>集团账号的成员id</p>
   */
  MemberId?: Array<string>
  /**
   * <p>策略名称</p>
   */
  Name?: string
  /**
   * <p>内容类型 / Content Type: md5-文件MD5/File MD5, cmdline-命令行/Command Line, dns-DNS, ip_inbound-入站IP/Inbound IP, ip_outbound-出站IP/Outbound IP, custom_file-自定义文件/Custom File, process_network-进程网络/Process Network</p>
   */
  ContentType?: string
  /**
   * <p>告警等级 / Alert Level: 1-高危/High, 2-中危/Medium, 3-低危/Low, 4-提示/Reminder</p>
   */
  Level?: number
  /**
   * <p>检测模式 / Detect Mode: 0-精准/Precise, 1-均衡/Balanced, 2-深度/Deep</p>
   */
  DetectMode?: number
  /**
   * <p>攻击阶段</p>
   */
  AttackStage?: string
  /**
   * <p>策略</p>
   */
  RuleID?: string
  /**
   * <p>策略描述</p>
   */
  Description?: string
  /**
   * <p>处理历史告警 / Handle Old Events: 0-否/No, 1-是/Yes</p>
   */
  DealOldEvents?: number
  /**
   * <p>ContentType=md5 时传入的 MD5 列表</p>
   */
  Md5List?: Array<string>
  /**
   * <p>ContentType=custom_file 时传入的文件名列表(Base64编码)</p>
   */
  FileName?: Array<string>
  /**
   * <p>ContentType=custom_file 时传入的文件目录列表(Base64编码)</p>
   */
  FileDirectory?: Array<string>
  /**
   * <p>ContentType=cmdline 时传入的命令行规则，Process/PProcess/AProcess 的 Exe/Cmdline 字段需要 Base64 编码</p>
   */
  CmdLineRules?: RuleContentCmdLine
  /**
   * <p>ContentType=dns 时传入的域名列表(Base64编码)</p>
   */
  Domains?: Array<string>
  /**
   * <p>ContentType=ip_outbound 时传入的出站IP列表(Base64编码)</p>
   */
  OutboundIP?: Array<string>
  /**
   * <p>ContentType=ip_inbound 时传入的入站IP列表(Base64编码)</p>
   */
  InboundIP?: Array<string>
  /**
   * <p>镜像ID列表 / Image IDs (when TCSSScope=0)</p>
   */
  ImageIDs?: Array<string>
  /**
   * <p>ContentType=process_network 时传入的进程网络规则</p>
   */
  ProcessNetworkRules?: RuleContentProcessNetwork
  /**
   * <p>选择的多账号的APPID</p>
   */
  TargetAppIDs?: Array<number | bigint>
  /**
   * <p>告警的加白目标机器信息</p>
   */
  Target?: EdrAlertTarget
  /**
   * <p>自选资产对应的实例ID和APPID</p>
   */
  InstanceIDsWithAppId?: Array<InstanceIDWithAppIdItem>
  /**
   * <p>全选资产排除的实例ID和APPID</p>
   */
  ExcludeInstanceIDsWithAppId?: Array<InstanceIDWithAppIdItem>
  /**
   * <p>安全中心标签ID列表（主机资产范围「按标签选择」，仅对主机生效）；上限 100（超限截断）。标签来源接口 DescribeAssetTagTree</p>
   */
  TagIDs?: Array<string>
  /**
   * <p>指定生效集群列表（每项含 AppId + ClusterID，TCSSScope=0 时使用）。入参数组上限 3000（超限截断保留前 3000 项）</p>
   */
  ClusterIDsWithAppId?: Array<ClusterIDWithAppIdItem>
  /**
   * <p>排除集群列表（每项含 AppId + ClusterID）；入参数组上限 3000（超限截断保留前 3000 项）</p>
   */
  ExcludeClusterIDsWithAppId?: Array<ClusterIDWithAppIdItem>
  /**
   * <p>直接选择镜像（每项含 AppId + ImageID，在集群基础上进一步过滤）。多账号场景下各账号只存属于自己的镜像；入参数组上限 3000（超限截断保留前 3000 项）</p>
   */
  ImageIDsWithAppId?: Array<ImageIDWithAppIdItem>
  /**
   * <p>容器条件匹配</p>
   */
  ConditionMatches?: Array<ConditionMatch>
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
   * <p>集团账号的成员id</p>
   */
  MemberId?: Array<string>
  /**
   * <p>按照资产类型过滤</p><p>枚举值：</p><ul><li>cdb： cdb</li><li>mariadb： mariadb</li><li>cynosdb： cynosdb</li></ul><p>默认值：默认值为空，即不按照资产类型过滤，返回所有资产信息</p>
   */
  AssetType?: Array<string>
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
 * DescribeSCFFunctionList请求参数结构体
 */
export interface DescribeSCFFunctionListRequest {
  /**
   * 云函数所在地域
参数格式：腾讯云标准 Region，如 ap-guangzhou
   */
  SCFRegion: string
  /**
   * 命名空间名称
取值参考：通过 DescribeSCFNamespaceList 接口获取
   */
  Namespace: string
  /**
   * 单页条数
取值范围：[1, 100]
默认值：20
   */
  Limit: number
  /**
   * 分页偏移量
取值范围：[0, +∞)
默认值：0
   */
  Offset?: number
}

/**
 * DescribeKBUpdatableMachineList请求参数结构体
 */
export interface DescribeKBUpdatableMachineListRequest {
  /**
   * <p>KB补丁ID列表，最多支持100个</p>
   */
  KBIds: Array<number | bigint>
  /**
   * <p>分页偏移量<br>取值范围：[0, +∞)<br>默认值：0</p>
   */
  Offset?: number
  /**
   * <p>每页返回数量<br>取值范围：[1, 100]<br>默认值：10</p>
   */
  Limit?: number
  /**
   * <p>过滤条件<br>支持的Filter.Name：<br>InstanceId - 精确匹配，按主机实例ID筛选<br>MachineName - 模糊匹配，按主机名称搜索<br>MachineIp - 模糊匹配，按主机IP搜索<br>SupportAutoFix - 精确匹配，按是否支持自动修复筛选：0-不支持 1-支持</p>
   */
  Filters?: Array<Filters>
  /**
   * 集团账号的成员id
   */
  MemberId?: Array<string>
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
 * dspm数据识别分类和数据项关联关系
 */
export interface DspmIdentifyCategoryRuleRelateItem {
  /**
   * <p>数据项ID</p>
   */
  RuleId: number
  /**
   * <p>级别ID</p>
   */
  LevelId: number
}

/**
 * DNAT规则
 */
export interface NatDnatRuleItem {
  /**
   * <p>IP协议</p>
   */
  IpProtocol?: string
  /**
   * <p>公网IP地址</p>
   */
  PublicIpAddress?: string
  /**
   * <p>公网端口</p>
   */
  PublicPort?: number
  /**
   * <p>内网IP地址</p>
   */
  PrivateIpAddress?: string
  /**
   * <p>内网端口</p>
   */
  PrivatePort?: number
  /**
   * <p>描述</p>
   */
  Description?: string
}

/**
 * DescribeUebaBehaviorSummary请求参数结构体
 */
export interface DescribeUebaBehaviorSummaryRequest {
  /**
   * 集团账号的成员id
   */
  MemberId?: Array<string>
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
 * 日志列信息
 */
export interface LogColumn {
  /**
   * <p>名称</p>
   */
  Name?: string
  /**
   * <p>类型</p>
   */
  Type?: string
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
 * ModifyNotifyAssetConfig请求参数结构体
 */
export interface ModifyNotifyAssetConfigRequest {
  /**
   * <p>资产范围配置</p>
   */
  Items?: Array<NotifyAssetConfigItem>
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
  /**
   * <p>是否支持迁移</p>
   */
  MigrationRequired?: boolean
  /**
   * <p>是否支持暴露面扫描</p>
   */
  IsSupportXSPM?: boolean
  /**
   * <p>是否能解绑</p>
   */
  CanUnbind?: boolean
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
 * DeleteAIAnalysisSMTPAccess请求参数结构体
 */
export type DeleteAIAnalysisSMTPAccessRequest = null

/**
 * DescribeComplianceStandardTermTree请求参数结构体
 */
export interface DescribeComplianceStandardTermTreeRequest {
  /**
   * <p>合规规范ID</p>
   */
  StandardID: number
  /**
   * <p>集团账号的成员id</p>
   */
  MemberId?: Array<string>
  /**
   * <p>内容筛选场景</p>
   */
  ContentFilter?: string
}

/**
 * CreateClusterNamespaceListExportJob返回参数结构体
 */
export interface CreateClusterNamespaceListExportJobResponse {
  /**
   * <p>导出任务ID<br>取值参考：前端轮询导出任务状态时使用</p>
   */
  JobId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * EDR告警详情（含content JSON + 资产/情报富化字段）
 */
export interface EdrAlertDetail {
  /**
   * <p>主键ID</p>
   */
  Id?: number
  /**
   * <p>租户ID</p>
   */
  AppId?: number
  /**
   * <p>告警唯一标识</p>
   */
  AlertId?: string
  /**
   * <p>告警大类（英文枚举：VIRUS_TROJAN/ABNORMAL_LOGIN/HOST_BEHAVIOR/NETWORK_BEHAVIOR/LINK_ENGINE）</p>
   */
  AlertCategory?: string
  /**
   * <p>告警子类型（英文枚举：MALWARE_FILE/MALWARE_PROCESS/RISK_LOGIN/BRUTE_FORCE/DNS/BASH/PRIV_ESCALATION/REVERSE_SHELL/NET_ATTACK/VUL_DEFENCE/MEMORY_SHELL_INJECT/MEMORY_SHELL_SCAN/MULTI_BEHAVIOR_ATTACK）</p>
   */
  AlertSubType?: string
  /**
   * <p>关联规则ID</p>
   */
  RuleId?: string
  /**
   * <p>规则类型: 0-系统规则 1-用户自定义</p>
   */
  RuleType?: number
  /**
   * <p>告警等级（英文枚举：CRITICAL/HIGH/MEDIUM/LOW/INFO）</p>
   */
  Level?: string
  /**
   * <p>处理状态（英文枚举：PENDING/PROCESSED/WHITELISTED/ISOLATED/CLEANED/IGNORED/ISOLATING/RESTORING/BLOCKED/DELETED）</p>
   */
  Status?: string
  /**
   * <p>ATT&amp;CK攻击阶段</p>
   */
  AttackStage?: string
  /**
   * <p>检测模式（英文枚举：PRECISE/BALANCED/DEEP）</p>
   */
  DetectMode?: string
  /**
   * <p>实例ID</p>
   */
  InstanceId?: string
  /**
   * <p>主机UUID</p>
   */
  Quuid?: string
  /**
   * <p>聚合事件数</p>
   */
  EventCount?: number
  /**
   * <p>是否付费版</p>
   */
  IsProVersion?: number
  /**
   * <p>告警来源（英文枚举：HOST/CONTAINER/K8S/CSIP）</p>
   */
  AlertSource?: string
  /**
   * <p>容器镜像ID（保留字段，恒为空串）</p>
   */
  ImageId?: string
  /**
   * <p>容器ID（保留字段，恒为空串）</p>
   */
  ContainerId?: string
  /**
   * <p>集群ID（保留字段，恒为空串）</p>
   */
  ClusterId?: string
  /**
   * <p>首次发现时间</p>
   */
  FirstDetectTime?: string
  /**
   * <p>最近发现时间</p>
   */
  LatestDetectTime?: string
  /**
   * <p>规则名称（规则富化）</p>
   */
  RuleName?: string
  /**
   * <p>内容类型: md5/cmdline/dns/ip_inbound/ip_outbound/custom_file/process_network</p>
   */
  ContentType?: string
  /**
   * <p>实例名（资产富化）</p>
   */
  InstanceName?: string
  /**
   * <p>公网IP（资产富化）</p>
   */
  PublicIp?: string
  /**
   * <p>内网IP（资产富化）</p>
   */
  PrivateIp?: string
  /**
   * <p>告警详情JSON字符串（前端通过JSON.parse解析，空值为&quot;{}&quot;）</p>
   */
  Content?: string
  /**
   * <p>告警名称（子类型中英文名）</p>
   */
  AlertName?: string
  /**
   * <p>安全中心标签</p>
   */
  CSIPTags?: Array<CSIPTag>
  /**
   * <p>危害描述（统一字段，合并原各子类型独立字段）</p>
   */
  HarmDesc?: string
  /**
   * <p>修复建议（统一字段）</p>
   */
  SuggestScheme?: string
  /**
   * <p>数据来源: vuldb/vdc/intel/default</p>
   */
  HarmDescSource?: string
  /**
   * <p>统一威胁情报标签（按子类型路由不同情报源）</p>
   */
  ThreatTags?: Array<string>
  /**
   * <p>Base64解码后的命令（高危命令子类型独有）</p>
   */
  BashCmdDecoded?: string
  /**
   * <p>漏洞名称（网络攻击子类型独有）</p>
   */
  NetVulName?: string
  /**
   * <p>CVE编号（网络攻击子类型独有）</p>
   */
  NetCVEId?: string
  /**
   * <p>异常行为（网络攻击子类型独有）</p>
   */
  NetAbnormalAction?: string
  /**
   * <p>IP情报信息（为空时不返回）</p>
   */
  IPIntel?: IPIntelInfo
  /**
   * <p>多行为攻击规则类型分类: sequence/threshold/command</p>
   */
  MultiBehaviorDetectionMode?: string
  /**
   * <p>告警来源描述（按子类型派生，描述哪个引擎/规则检出）</p>
   */
  SourceDesc?: string
  /**
   * <p>处理时间参数格式：2026-05-26 19:45:48</p>
   */
  ModifyTime?: string
  /**
   * <p>情报富化结果来源（标识本次详情是否成功命中外部情报）；取值 &quot;VDC&quot; / &quot;IPAnalysis&quot; / &quot;BreakingTI&quot; / 空串</p>
   */
  IntelSource?: string
  /**
   * <p>综合研判，中英文已翻译，中：恶意/安全/未知；英：Malicious/Safe/Unknown</p>
   */
  Verdict?: string
  /**
   * <p>研判依据</p>
   */
  VerdictBasis?: string
  /**
   * <p>病毒名称</p>
   */
  VirusName?: string
  /**
   * <p>病毒家族</p>
   */
  VirusFamily?: string
  /**
   * <p>NetResponsePayload 响应数据包（base64 编码后的字符串）</p>
   */
  NetResponsePayload?: string
  /**
   * <p>服务进程信息（base64 编码后的 JSON 字符串）</p>
   */
  NetSvcPs?: string
  /**
   * <p>容器名称</p>
   */
  ContainerName?: string
  /**
   * <p>容器镜像名称</p>
   */
  ImageName?: string
  /**
   * <p>集群名称</p>
   */
  ClusterName?: string
  /**
   * <p>容器运行状态（原始枚举 RUNNING/PAUSED/STOPPED…，前端自行映射）</p><p>枚举值：</p><ul><li>RUNNING： 运行</li><li>PAUSED： 暂停</li><li>STOPPED： 停止</li><li>CREATED： 已经创建</li><li>DESTROYED： 已销毁</li><li>RESTARTING： 重启中</li><li>REMOVING： 迁移中</li><li>DEAD： DEAD</li><li>UNKNOWN： 未知</li></ul>
   */
  RunStatus?: string
  /**
   * <p>POD 名称</p>
   */
  PodName?: string
  /**
   * <p>POD IP</p>
   */
  PodIp?: string
  /**
   * <p>命名空间</p>
   */
  Namespace?: string
  /**
   * <p>POD 负载类型</p>
   */
  PodWorkloadType?: string
  /**
   * <p>集群 ca 证书 md5</p>
   */
  ClusterCaMD5?: string
  /**
   * <p>POD 唯一 id</p>
   */
  PodUniqueId?: string
}

/**
 * DescribeSCFNamespaceList请求参数结构体
 */
export interface DescribeSCFNamespaceListRequest {
  /**
   * 云函数所在地域
参数格式：腾讯云标准 Region，如 ap-guangzhou / ap-shanghai
   */
  SCFRegion: string
  /**
   * 单页条数
取值范围：[1, 100]
默认值：20
   */
  Limit: number
  /**
   * 分页偏移量
取值范围：[0, +∞)
默认值：0
   */
  Offset?: number
}

/**
 * 未通过检测项按策略分组的统计。
 */
export interface NotPassItemStatistic {
  /**
   * 策略类型。取值：SYSTEM（系统策略）、SELF（自定义策略）。
   */
  PolicyType?: string
  /**
   * 策略 ID。SYSTEM 策略为 0。
   */
  PolicyID?: number
  /**
   * 父分类 ID。SELF 策略为 0。
   */
  ParentCategoryID?: number
  /**
   * 该策略下未通过的检测项数。
   */
  NotPassCount?: number
  /**
   * 策略或分类名称。SYSTEM 取父分类名称，SELF 取策略名称。
   */
  Name?: string
}

/**
 * DescribeNFSScanConf请求参数结构体
 */
export interface DescribeNFSScanConfRequest {
  /**
   * <p>集团账号的成员id</p>
   */
  MemberId?: Array<string>
}

/**
 * 数据库资产
 */
export interface DspmDbAsset {
  /**
   * <p>资产实例Id</p>
   */
  AssetId?: string
  /**
   * <p>资产类型</p>
   */
  AssetType?: string
  /**
   * <p>资产名</p>
   */
  Name?: string
  /**
   * <p>账号数</p>
   */
  AccountCount?: number
  /**
   * <p>公网访问地址，如果有多个，使用&#39;;&#39;分割</p>
   */
  PublicIp?: string
  /**
   * <p>内网访问地址，如果有多个，使用&#39;;&#39;分割</p>
   */
  PrivateIp?: string
  /**
   * <p>广域网域名地址，如果有多个，使用&#39;;&#39;分割</p>
   */
  WanDomain?: string
  /**
   * <p>地域</p>
   */
  Region?: string
  /**
   * <p>资产所在vpc的vpcid</p>
   */
  VpcId?: string
  /**
   * <p>资产所在vpc的vpc名</p>
   */
  VpcName?: string
  /**
   * <p>资产所在vpc子网的subnetid</p>
   */
  SubnetId?: string
  /**
   * <p>资产所在vpc子网名</p>
   */
  SubnetName?: string
  /**
   * <p>实例状态</p>
   */
  Status?: number
  /**
   * <p>创建时间。</p>
   */
  CreateTime?: string
  /**
   * <p>管理者信息。</p>
   */
  Manager?: Array<DspmUinUser>
  /**
   * <p>是否绑定身份。0-未绑定 1-已绑定</p>
   */
  BindIdentify?: number
  /**
   * <p>是否管理员</p>
   */
  IsManager?: number
  /**
   * <p>风险统计信息</p>
   */
  RiskCount?: DspmRiskCount
  /**
   * <p>安全建议。<br>Resolve 立即解决<br>Reinforcement 加固<br>None 暂无异常</p>
   */
  SafetyAdvice?: string
  /**
   * <p>日志投递状态。<br>0-投递关闭 1-投递打开 2-投递开通中 3-投递关闭中</p>
   */
  LogDeliveryStatus?: number
  /**
   * <p>是否支持日志投递。0-不支持 1-支持</p>
   */
  LogDeliverySupported?: number
  /**
   * <p>数据扫描信息</p>
   */
  DataScanInfo?: DspmAssetDataScanDetail
  /**
   * <p>资产所属账号app id</p>
   */
  AppId?: number
  /**
   * <p>账号昵称</p>
   */
  NickName?: string
  /**
   * <p>资产所属账号uin</p>
   */
  Uin?: string
  /**
   * <p>安全分析状态（0-关闭 1-打开 2-开通中 3-关闭中）</p>
   */
  SecurityAnalyseStatus?: number
  /**
   * <p>当前实例的总日志数</p>
   */
  TotalAuditLogs?: number
  /**
   * <p>日志审计禁止开通的原因，可选值：VersionNotSupportLogSubscription, InstanceIsUpgrading, CdbRuleAuditEnabled, AssetNotExists</p>
   */
  LogDeliveryDisableReason?: string
  /**
   * <p>在线日志的起始时间戳，精确到秒</p>
   */
  OldestOnlineLogTimestamp?: number
  /**
   * <p>在线日志的最新时间戳，精确到秒</p>
   */
  NewestOnlineLogTimestamp?: number
  /**
   * <p>操作错误信息</p>
   */
  OperationErrorMsg?: string
  /**
   * <p>是否支持账号操作。0 不支持；1 支持</p>
   */
  AccountOptSupported?: number
  /**
   * <p>实例类型</p>
   */
  InstanceType?: number
  /**
   * <p>集群类型（MongoDB），与云接口 DescribeDBInstances 的 ClusterType 一致：0-副本集 1-分片；非 MongoDB 资产固定 0</p>
   */
  ClusterType?: number
  /**
   * <p>是否支持敏感数据识别。0 不支持；1 支持</p>
   */
  IdentifyScanSupported?: number
  /**
   * <p>集群ID</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  ClusterId?: string
  /**
   * <p>集群名</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  ClusterName?: string
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
 * DescribeAssetOverview请求参数结构体
 */
export interface DescribeAssetOverviewRequest {
  /**
   * <p>集团账号的成员id</p>
   */
  MemberId?: Array<string>
}

/**
 * DescribeAssetInfo返回参数结构体
 */
export interface DescribeAssetInfoResponse {
  /**
   * 基本信息
   */
  Basic?: Array<FieldConfig>
  /**
   * 网络信息
   */
  Network?: Array<FieldConfig>
  /**
   * 防护信息
   */
  Protection?: Array<FieldConfig>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeTagRuleAssets请求参数结构体
 */
export interface DescribeTagRuleAssetsRequest {
  /**
   * <p>集团账号的成员id</p>
   */
  MemberId?: Array<string>
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
   * 打标策略
   */
  TaggingRule?: string
}

/**
 * DescribeBaselineSyncConf请求参数结构体
 */
export interface DescribeBaselineSyncConfRequest {
  /**
   * 集团账号场景下的成员账号 Appid 列表。非集团账号或仅查询当前账号时传空。
   */
  MemberId?: Array<string>
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
 * CreateBaselineMainTaskExportJob返回参数结构体
 */
export interface CreateBaselineMainTaskExportJobResponse {
  /**
   * <p>导出任务ID，异步导出任务唯一标识，用于查询任务状态与获取下载链接。</p>
   */
  JobId?: string
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
 * DescribeCFGRiskReportStatistics请求参数结构体
 */
export interface DescribeCFGRiskReportStatisticsRequest {
  /**
   * <p>集团账号的成员id</p>
   */
  MemberId?: Array<string>
  /**
   * <p>规范ID</p>
   */
  StandardIDs?: Array<number | bigint>
}

/**
 * ModifyNotifySettingAlert返回参数结构体
 */
export interface ModifyNotifySettingAlertResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 基线扫描的子任务，按检测资产维度拆分（一台主机或一个集群对应一条子任务）。
 */
export interface BaselineSubTask {
  /**
   * <p>子任务 ID。</p>
   */
  ID?: number
  /**
   * <p>所属主任务 ID（对应 BaselineMainTask.ID）。</p>
   */
  TaskID?: number
  /**
   * <p>子任务执行结果。取值：</p><ul><li>SUCCESS：成功</li><li>FAILED：失败</li><li>USER_CANCELED：用户取消</li><li>CHECKING：检测中</li><li>UNKNOWN：未知状态</li></ul>
   */
  Status?: string
  /**
   * <p>子任务所属租户 Appid。</p>
   */
  Appid?: number
  /**
   * <p>子任务开始执行时间。</p>
   */
  StartTime?: string
  /**
   * <p>子任务结束时间，未结束时为空。</p>
   */
  FinishTime?: string
  /**
   * <p>检测资产大类，区分主机基线与容器集群基线。取值：</p><ul><li>HOST：主机</li><li>CLUSTER：容器集群</li></ul>
   */
  CheckAssetType?: string
  /**
   * <p>CheckAssetType=HOST 时返回的主机资产信息，CLUSTER 时为空。</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  HostAsset?: BaselineHostAsset
  /**
   * <p>状态码：失败时返回失败码（如 AGENT_OFFLINE、SCAN_TIMEOUT、CLIENT_SCAN_FAILED 等），检测中时返回检测状态，成功或用户取消时为空。</p>
   */
  ErrCode?: string
  /**
   * <p>失败时的详细原因描述，成功、用户取消或检测中时为空。</p>
   */
  ErrMessage?: string
  /**
   * <p>失败时的解决方案建议，成功、用户取消或检测中时为空。</p>
   */
  Solution?: string
  /**
   * <p>CheckAssetType=CLUSTER 时返回的集群资产信息，HOST 时为空。</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  ClusterAsset?: BaselineClusterAsset
}

/**
 * DescribeClbTargets请求参数结构体
 */
export interface DescribeClbTargetsRequest {
  /**
   * <p>资产ID</p>
   */
  AssetID: string
  /**
   * <p>目标类型</p><p>枚举值：</p><ul><li>listener： 监听器</li><li>rule： 七层规则</li></ul>
   */
  TargetType: string
  /**
   * <p>集团账号的成员id</p>
   */
  MemberId?: Array<string>
}

/**
 * DescribeClbListenerList请求参数结构体
 */
export interface DescribeClbListenerListRequest {
  /**
   * <p>资产ID</p>
   */
  AssetID: string
  /**
   * <p>集团账号的成员id</p>
   */
  MemberId?: Array<string>
  /**
   * <p>过滤器</p>
   */
  Filters?: Array<Filters>
  /**
   * <p>每页条数</p>
   */
  Limit?: number
  /**
   * <p>偏移</p>
   */
  Offset?: number
  /**
   * <p>排序方向</p>
   */
  Order?: string
  /**
   * <p>排序字段</p>
   */
  By?: string
}

/**
 * Skill 能力标签
 */
export interface SkillCapabilityTag {
  /**
   * 能力标签标识
   */
  ID?: string
  /**
   * 能力标签展示名称
   */
  Name?: string
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
 * DescribeAssumeRole请求参数结构体
 */
export interface DescribeAssumeRoleRequest {
  /**
   * 角色名
   */
  RoleName?: string
}

/**
 * CreateDspmWhitelistStrategy返回参数结构体
 */
export interface CreateDspmWhitelistStrategyResponse {
  /**
   * <p>白名单id</p>
   */
  WhitelistStrategyId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
 * DescribeCSIPMalwareScanTaskDetail请求参数结构体
 */
export interface DescribeCSIPMalwareScanTaskDetailRequest {
  /**
   * <p>任务ID</p>
   */
  TaskId: number
  /**
   * <p>集团账号的成员id</p>
   */
  MemberId?: Array<string>
  /**
   * <p>PolicyType - int - 是否必填：否 - 策略类型PolicyName - string - 是否必填：否 - 策略名称Domain - string - 是否必填：否 - 域名(先对域名做urlencode,再base64)PolicyAction- int - 是否必填：否 - 策略动作IsEnabled - int - 是否必填：否 - 是否生效</p>
   */
  Filters?: Array<EDRFilter>
  /**
   * <p>限制条数,默认10,最大100</p>
   */
  Limit?: number
  /**
   * <p>偏移量,默认0</p>
   */
  Offset?: number
  /**
   * <p>排序方式: [ASC:升序|DESC:降序]</p>
   */
  Order?: string
  /**
   * <p>可选排序列，暂不支持排序，默认按照id降序排列</p>
   */
  By?: string
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
 * 资产关联风险信息
 */
export interface AssetRiskInfo {
  /**
   * <p>风险类型</p>
   */
  ResultType?: string
  /**
   * <p>总风险数量</p>
   */
  RiskCount?: number
  /**
   * <p>严重风险数量</p>
   */
  RiskCritical?: number
  /**
   * <p>高风险数量</p>
   */
  RiskHigh?: number
  /**
   * <p>中风险数量</p>
   */
  RiskMedium?: number
  /**
   * <p>低风险数量</p>
   */
  RiskLow?: number
}

/**
 * CreateBaselineFixRecordExportJob返回参数结构体
 */
export interface CreateBaselineFixRecordExportJobResponse {
  /**
   * <p>导出任务ID，异步导出任务唯一标识，用于查询任务状态与获取下载链接。</p>
   */
  JobId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
 * ModifyEDRRulesAction请求参数结构体
 */
export interface ModifyEDRRulesActionRequest {
  /**
   * <p>策略ID数组</p>
   */
  RuleIDs: Array<string>
  /**
   * <p>目标 Action：0-告警 1-放行 2-告警并拦截</p>
   */
  AlertAction: number
  /**
   * <p>目标账号 AppId 列表</p>
   */
  TargetAppIDs: Array<number | bigint>
  /**
   * <p>集团账号的成员id</p>
   */
  MemberId?: Array<string>
}

/**
 * SNAT规则
 */
export interface NatSnatRuleItem {
  /**
   * <p>网关SNat ID</p>
   */
  NatGatewaySnatId?: string
  /**
   * <p>资源ID</p>
   */
  ResourceId?: string
  /**
   * <p>资源类型</p>
   */
  ResourceType?: string
  /**
   * <p>内网IP地址</p>
   */
  PrivateIpAddress?: string
  /**
   * <p>公网IP地址</p>
   */
  PublicIpAddresses?: string
  /**
   * <p>描述</p>
   */
  Description?: string
  /**
   * <p>创建时间</p>
   */
  CreatedTime?: string
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
 * AI Agent 命令沙箱插件状态
 */
export interface CommandPluginState {
  /**
   * <p>插件安装状态（上层聚合）<br>枚举值：<br>NONE：未安装<br>INSTALLING：安装中<br>INSTALLED：已安装<br>INSTALL_FAIL：安装失败</p>
   */
  InstallStatus?: string
}

/**
 * EnableAISchedule返回参数结构体
 */
export interface EnableAIScheduleResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeBaselineSystemCategoryList返回参数结构体
 */
export interface DescribeBaselineSystemCategoryListResponse {
  /**
   * <p>系统父分类列表，含每个父分类下的子分类与检测项 ID 列表。</p>
   */
  SystemCategoryList?: Array<BaselineSystemCategory>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 防护配置详情
 */
export interface ProtectionDetail {
  /**
   * 各配置项开启状态
   */
  ConfigItems?: Array<ProtectionConfigItem>
  /**
   * 应防护资产数
   */
  EligibleAssetCount?: number
  /**
   * 已防护资产数
   */
  ProtectedAssetCount?: number
  /**
   * 覆盖率百分比
取值范围：[0, 100]
   */
  CoveragePercent?: number
  /**
   * 即将到期产品列表
   */
  ExpiringProducts?: Array<ExpiringProduct>
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
 * DeleteCosAkAsset请求参数结构体
 */
export interface DeleteCosAkAssetRequest {
  /**
   * 要删除的cos ak集合
   */
  CosAkSet: Array<CosAkSet>
}

/**
 * DescribeNotifyAssetConfig返回参数结构体
 */
export interface DescribeNotifyAssetConfigResponse {
  /**
   * <p>资产范围配置</p>
   */
  Items?: Array<NotifyAssetConfigItem>
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
 * CreateComplianceRiskExportJob返回参数结构体
 */
export interface CreateComplianceRiskExportJobResponse {
  /**
   * <p>导出任务ID</p>
   */
  JobId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDefaultSecurityScoreRule请求参数结构体
 */
export interface DescribeDefaultSecurityScoreRuleRequest {
  /**
   * <p>集团账号的成员id</p>
   */
  MemberId?: Array<string>
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
 * CreateDspmWhitelistStrategy请求参数结构体
 */
export interface CreateDspmWhitelistStrategyRequest {
  /**
   * <p>策略类型</p>
   */
  StrategyType?: string
  /**
   * <p>集团账号的成员id</p>
   */
  MemberId?: Array<string>
  /**
   * <p>白名单</p>
   */
  Name?: string
  /**
   * <p>规则</p>
   */
  Rule?: string
  /**
   * <p>资产id</p>
   */
  AssetId?: string
  /**
   * <p>账号</p>
   */
  Account?: string
  /**
   * <p>主机</p>
   */
  Host?: string
  /**
   * <p>风险id</p>
   */
  RiskId?: string
  /**
   * <p>备注</p>
   */
  Remark?: string
  /**
   * <p>白名单的类型</p><p>枚举值：</p><ul><li>static_risk： 静态配置扫描的白名单规则</li><li>audit： 审计白名单规则</li><li>ueba： ueba相关的白名单规则</li></ul>
   */
  WhitelistType?: string
}

/**
 * DescribeVulHostRelateComponent请求参数结构体
 */
export interface DescribeVulHostRelateComponentRequest {
  /**
   * <p>漏洞 ID（vul_vuls.id）</p>
   */
  VulID: number
  /**
   * <p>实例ID</p>
   */
  InstanceID: string
  /**
   * <p>集团账号的成员id</p>
   */
  MemberId?: Array<string>
}

/**
 * 维度扣分项
 */
export interface DimensionItem {
  /**
   * 维度ID
枚举值：
risk_governance：风险治理
threat_detection：威胁检测
protection_config：防护配置
   */
  DimensionId?: string
  /**
   * 维度名称
   */
  DimensionName?: string
  /**
   * 维度扣分上限
   */
  MaxDeductScore?: number
  /**
   * 维度实际扣分
   */
  DeductScore?: number
  /**
   * 子项列表
   */
  Categories?: Array<CategoryItem>
}

/**
 * 云资源配置检测合规标准概览
 */
export interface ComplianceStandardOverview {
  /**
   * <p>规范ID</p>
   */
  ID?: number
  /**
   * <p>规范名称</p>
   */
  Name?: string
  /**
   * <p>关联检查项数量</p>
   */
  TotalCount?: number
  /**
   * <p>检查项通过率</p>
   */
  PassRate?: number
}

/**
 * StopVulScanTask返回参数结构体
 */
export interface StopVulScanTaskResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 简要的资产标签元素，CSIP 内部使用。
 */
export interface MiniTagItem {
  /**
   * 标签展示颜色。
   */
  Color?: string
  /**
   * 标签描述。
   */
  Description?: string
  /**
   * 标签 ID。
   */
  ID?: number
  /**
   * 标签键（中文）。
   */
  TagKey?: string
  /**
   * 标签值（中文）。
   */
  TagValue?: string
  /**
   * 标签键（英文）。
   */
  TagKeyEn?: string
  /**
   * 标签值（英文）。
   */
  TagValueEn?: string
}

/**
 * CheckCWPExposePathPermission返回参数结构体
 */
export interface CheckCWPExposePathPermissionResponse {
  /**
   * <p>用户旗舰版信息</p>
   */
  UltimateList?: Array<UltimateAppItem>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
 * DescribeEdrAlertMultiAttackStages请求参数结构体
 */
export interface DescribeEdrAlertMultiAttackStagesRequest {
  /**
   * <p>目标告警信息</p>
   */
  Targets: Array<EdrAlertTarget>
  /**
   * <p>集团账号的成员id</p>
   */
  MemberId?: Array<string>
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
   * 命中规则列表
   */
  RuleList?: Array<SkillScanRuleHit>
}

/**
 * DescribeMultiCloudAssetCount请求参数结构体
 */
export interface DescribeMultiCloudAssetCountRequest {
  /**
   * <p>集团账号的成员id</p>
   */
  MemberId?: Array<string>
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
 * DescribeClusterServiceList返回参数结构体
 */
export interface DescribeClusterServiceListResponse {
  /**
   * <p>总数</p>
   */
  TotalCount?: number
  /**
   * <p>列表</p>
   */
  List?: Array<ClusterServiceListItem>
  /**
   * <p>集群下所有 namespace 名称枚举（用于前端 filter 下拉）</p>
   */
  Namespaces?: Array<string>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 风险趋势
 */
export interface RiskCenterOverviewTrendAnalysis {
  /**
   * 日期
   */
  Date?: string
  /**
   * 端口数
   */
  Port?: number
  /**
   * 漏洞数
   */
  VUL?: number
  /**
   * 弱口令数
   */
  WeakPassword?: number
  /**
   * 网站数
   */
  Website?: number
  /**
   * 配置数
   */
  CFG?: number
  /**
   * 测绘风险数
注意：此字段可能返回 null，表示取不到有效值。
   */
  Server?: number
  /**
   * 主机风险配置数量
   */
  HostCFG?: number
  /**
   * 容器基线风险配置数量
   */
  PodCFG?: number
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
 * CreateAllAssetsExportJob返回参数结构体
 */
export interface CreateAllAssetsExportJobResponse {
  /**
   * 导出任务ID
   */
  JobId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDspmBackupSetting请求参数结构体
 */
export interface DescribeDspmBackupSettingRequest {
  /**
   * <p>集团账号的成员id</p>
   */
  MemberId?: Array<string>
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
 * ModifyAILinkSetting请求参数结构体
 */
export interface ModifyAILinkSettingRequest {
  /**
   * <p>0 关闭AI-Link智链引擎，1 开启AI-Link智链引擎</p>
   */
  AILinkEnable: number
  /**
   * <p>集团账号的成员id</p>
   */
  MemberId?: Array<string>
  /**
   * <p>深度模式 0-关闭 1-开启</p>
   */
  RuleScopeDeep?: number
  /**
   * <p>均衡模式 0-关闭 1-开启</p>
   */
  RuleScopeBalanced?: number
  /**
   * <p>精准模式 0-关闭 1-开启</p>
   */
  RuleScopePrecise?: number
  /**
   * <p>1 全部专业/旗舰版主机，0 自选主机列表</p>
   */
  Scope?: number
  /**
   * <p>自选主机Quuid列表（Scope=0时必填）</p>
   * @deprecated
   */
  Quuids?: Array<string>
  /**
   * <p>排除主机Quuid列表（Scope=1时生效）</p>
   * @deprecated
   */
  ExcludeQuuids?: Array<string>
  /**
   * <p>新增资产自动包含 0 不包含 1包含</p>
   */
  AutoInclude?: number
  /**
   * <p>标签ID</p>
   */
  TagIDs?: Array<string>
  /**
   * <p>0,1</p><p>枚举值：</p><ul><li>0： 部分</li><li>1： 全部</li></ul>
   */
  TCSSScope?: number
  /**
   * <p>集群ID</p>
   */
  ClusterIDs?: Array<string>
  /**
   * <p>排除集群ID</p>
   */
  ExcludeClusterIDs?: Array<string>
  /**
   * <p>实例ID</p>
   */
  InstanceIds?: Array<string>
  /**
   * <p>排除实例ID</p>
   */
  ExcludeInstanceIds?: Array<string>
}

/**
 * 存储桶id
 */
export interface CosBucketId {
  /**
   * <p>appid</p>
   */
  AppId?: string
  /**
   * <p>是否自动监测</p>
   */
  IsAutoMonitor?: number
  /**
   * <p>bucket id集合</p>
   */
  BucketIdSet?: Array<string>
}

/**
 * DescribeNotifySetting返回参数结构体
 */
export interface DescribeNotifySettingResponse {
  /**
   * <p>通知设置列表</p>
   */
  List?: Array<NotifySetting>
  /**
   * <p>成员账号Id</p>
   */
  MemberId?: Array<string>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
 * Dspm 白名单策略
 */
export interface DspmWhitelistStrategy {
  /**
   * <p>白名单策略id</p>
   */
  WhitelistStrategyId?: string
  /**
   * <p>策略类型</p>
   */
  StrategyType?: string
  /**
   * <p>白名单策略名</p>
   */
  Name?: string
  /**
   * <p>策略类型</p>
   */
  StrategyCategory?: string
  /**
   * <p>策略规则</p>
   */
  Rule?: string
  /**
   * <p>备注</p>
   */
  Remark?: string
  /**
   * <p>修改时间</p>
   */
  ModifyTime?: string
  /**
   * <p>资产id</p>
   */
  AssetId?: string
  /**
   * <p>账号</p>
   */
  Account?: string
  /**
   * <p>主机</p>
   */
  Host?: string
  /**
   * <p>策略规则内容描述</p>
   */
  Description?: string
  /**
   * <p>白名单类型。risk-风险白名单；alarm-告警白名单。</p>
   */
  RiskType?: string
  /**
   * <p>资产所属账号app id</p>
   */
  AppId?: number
  /**
   * <p>账号昵称</p>
   */
  NickName?: string
  /**
   * <p>资产所属账号uin</p>
   */
  Uin?: string
  /**
   * <p>白名单类型</p>
   */
  WhitelistType?: string
}

/**
 * CreateDspmIdentifyLevelGroup请求参数结构体
 */
export interface CreateDspmIdentifyLevelGroupRequest {
  /**
   * <p>分级组名称</p>
   */
  Name: string
  /**
   * <p>集团账号的成员id</p>
   */
  MemberId?: Array<string>
  /**
   * <p>描述</p>
   */
  Description?: string
  /**
   * <p>无</p>
   */
  LevelItems?: Array<DspmAddIdentifyLevelItem>
}

/**
 * CreateVulRisksExportJob返回参数结构体
 */
export interface CreateVulRisksExportJobResponse {
  /**
   * 导出任务ID
   */
  JobId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
 * DescribePortDetectList请求参数结构体
 */
export interface DescribePortDetectListRequest {
  /**
   * 边界分析ID
   */
  ExposureID: number
  /**
   * <p>集团账号的成员id</p>
   */
  MemberId?: Array<string>
  /**
   * 分页大小
   */
  Limit?: number
  /**
   * 偏移量
   */
  Offset?: number
}

/**
 * DeleteExposureAutoTagRule请求参数结构体
 */
export interface DeleteExposureAutoTagRuleRequest {
  /**
   * <p>规则ID集合</p>
   */
  RuleIDs: Array<number | bigint>
  /**
   * <p>集团账号的成员id</p>
   */
  MemberId?: Array<string>
}

/**
 * DescribeEdrAlertMultiAttackStages返回参数结构体
 */
export interface DescribeEdrAlertMultiAttackStagesResponse {
  /**
   * <p>多攻击阶段详情</p>
   */
  List?: Array<MultiAttackStageItem>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CopyBaselinePolicy返回参数结构体
 */
export interface CopyBaselinePolicyResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyReverseShellSystemPolicyConfig返回参数结构体
 */
export interface ModifyReverseShellSystemPolicyConfigResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeClusterAssetSyncTaskStatus请求参数结构体
 */
export interface DescribeClusterAssetSyncTaskStatusRequest {
  /**
   * <p>任务id</p>
   */
  TaskId: string
  /**
   * <p>集团账号的成员id</p>
   */
  MemberId?: Array<string>
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
 * CreateDynamicAssetsExportJob返回参数结构体
 */
export interface CreateDynamicAssetsExportJobResponse {
  /**
   * 导出任务ID
   */
  JobId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeBruteAttackRules请求参数结构体
 */
export interface DescribeBruteAttackRulesRequest {
  /**
   * <p>集团账号的成员id</p>
   */
  MemberId?: Array<string>
}

/**
 * DescribeDspmIdentifyRuleDetail返回参数结构体
 */
export interface DescribeDspmIdentifyRuleDetailResponse {
  /**
   * <p>数据项id</p>
   */
  Id?: number
  /**
   * <p>数据项名称</p>
   */
  Name?: string
  /**
   * <p>数据项描述</p>
   */
  Description?: string
  /**
   * <p>数据项是否启用</p><p>枚举值：</p><ul><li>0： 否</li><li>1： 是</li></ul><p>默认值：0</p>
   */
  Status?: number
  /**
   * <p>数据项类型</p><p>枚举值：</p><ul><li>0： 内置</li><li>1： 自定义</li></ul>
   */
  Type?: number
  /**
   * <p>结构化规则</p>
   */
  StructuredRule?: string
  /**
   * <p>非结构化规则</p>
   */
  UnStructuredRule?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
 * DescribeClusterPodList返回参数结构体
 */
export interface DescribeClusterPodListResponse {
  /**
   * <p>总数</p>
   */
  TotalCount?: number
  /**
   * <p>列表</p>
   */
  List?: Array<ClusterPodListItem>
  /**
   * <p>命名空间可选范围</p>
   */
  Namespaces?: Array<string>
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
 * ModifyDspmAssetDataScanTaskStatus返回参数结构体
 */
export interface ModifyDspmAssetDataScanTaskStatusResponse {
  /**
   * <p>无</p>
   */
  DataSet?: Array<DspmAssetIdentifyTaskStatus>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ScanBaselineRiskList请求参数结构体
 */
export interface ScanBaselineRiskListRequest {
  /**
   * <p>基线策略类型。取值：</p><ul><li>SYSTEM：系统策略（CSIP 内置）</li><li>SELF：用户自定义策略</li></ul>
   */
  PolicyType: string
  /**
   * <p>目标基线策略 ID，必须大于 0。</p>
   */
  PolicyID: number
  /**
   * <p>基线系统父分类 ID。</p>
   */
  ParentCategoryID: number
  /**
   * <p>待重新扫描的风险记录 RiskID 列表，不可为空且元素不可为空字符串。</p>
   */
  RiskIDList: Array<string>
  /**
   * <p>检测项ID</p>
   */
  ItemID: number
  /**
   * <p>基线子分类 ID。</p>
   */
  CategoryID?: number
  /**
   * <p>集团账号的成员id</p>
   */
  MemberId?: Array<string>
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
 * DescribeCWPExposePath请求参数结构体
 */
export interface DescribeCWPExposePathRequest {
  /**
   * <p>主机资产ID</p>
   */
  AssetID: string
  /**
   * <p>资产归属用户AppID</p>
   */
  AssetAppID: number
  /**
   * <p>集团账号的成员id</p>
   */
  MemberId?: Array<string>
  /**
   * <p>资产IP</p>
   */
  Ip?: string
  /**
   * <p>资产域名</p>
   */
  Domain?: string
  /**
   * <p>端口或端口范围</p>
   */
  Port?: string
}

/**
 * DeleteDspmBackupLogList请求参数结构体
 */
export interface DeleteDspmBackupLogListRequest {
  /**
   * <p>备份日志Id</p>
   */
  Id: number
  /**
   * <p>集团账号的成员id</p>
   */
  MemberId?: Array<string>
}

/**
 * ModifyPayConfig请求参数结构体
 */
export interface ModifyPayConfigRequest {
  /**
   * 主机安全模块自动扩容配置
补充说明：不传则不修改主机配置；本期至少需传本模块。后续可扩展 ContainerConfig / AIAgentConfig 命名模块字段
   */
  HostConfig?: HostAutoScaleConfig
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
 * 基线扫描主任务，对应一次“一键扫描/周期扫描/分散扫描”动作。
 */
export interface BaselineMainTask {
  /**
   * <p>主任务对应的全局任务 ID。</p>
   */
  JobID?: string
  /**
   * <p>主任务 ID。</p>
   */
  ID?: number
  /**
   * <p>主任务状态。取值：</p><ul><li>INIT：初始化</li><li>SUBTASK_CREATING：子任务创建中</li><li>SCANNING：扫描中</li><li>TIMEOUT：超时</li><li>USER_CANCELED：用户取消</li><li>ALL_FAILED：全部失败</li><li>SUCCESS：成功</li></ul>
   */
  Status?: string
  /**
   * <p>主任务所属租户 Appid。</p>
   */
  Appid?: number
  /**
   * <p>主任务类型。取值：</p><ul><li>ONE_SHOT：一键策略扫描（手动触发）</li><li>PERIODIC：周期扫描（按 CycleScanConf 自动触发）</li><li>OTHER：其他分散扫描（资产维度等触发）</li></ul>
   */
  TaskType?: string
  /**
   * <p>主任务开始执行时间。</p>
   */
  StartTime?: string
  /**
   * <p>主任务结束时间，未结束时为空。</p>
   */
  FinishTime?: string
  /**
   * <p>检测资产大类，区分主机基线与容器集群基线。取值：</p><ul><li>HOST：主机</li><li>CLUSTER：容器集群</li></ul>
   */
  CheckAssetType?: string
  /**
   * <p>失败错误码，成功时为空。</p>
   */
  ErrCode?: string
  /**
   * <p>失败原因，成功时为空。</p>
   */
  ErrMessage?: string
  /**
   * <p>解决方案（根据 ErrCode 映射，成功时为空）</p>
   */
  Solution?: string
  /**
   * <p>扫描成功的资产数量。</p>
   */
  ScanSuccessCount?: number
  /**
   * <p>扫描失败的资产数量。</p>
   */
  ScanFailedCount?: number
  /**
   * <p>子任务总数</p>
   */
  ScanTotalCount?: number
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
 * DescribeAILinkSetting返回参数结构体
 */
export interface DescribeAILinkSettingResponse {
  /**
   * <p>0 关闭AI-Link智链引擎，1 开启AI-Link智链引擎</p>
   */
  AILinkEnable?: number
  /**
   * <p>深度模式 0-关闭 1-开启</p>
   */
  RuleScopeDeep?: number
  /**
   * <p>均衡模式 0-关闭 1-开启</p>
   */
  RuleScopeBalanced?: number
  /**
   * <p>精准模式 0-关闭 1-开启</p>
   */
  RuleScopePrecise?: number
  /**
   * <p>1 全部专业/旗舰版主机，0 Quuids列表主机</p>
   */
  Scope?: number
  /**
   * <p>自选主机Quuid列表</p>
   * @deprecated
   */
  Quuids?: Array<string>
  /**
   * <p>排除主机Quuid列表</p>
   * @deprecated
   */
  ExcludeQuuids?: Array<string>
  /**
   * <p>新增资产自动包含 0 不包含 1包含</p>
   */
  AutoInclude?: number
  /**
   * <p>标签</p>
   */
  TagIDs?: Array<string>
  /**
   * <p>0，1</p><p>枚举值：</p><ul><li>0： 部分</li><li>1： 全部</li></ul>
   */
  TCSSScope?: number
  /**
   * <p>集群ID</p>
   */
  ClusterIDs?: Array<string>
  /**
   * <p>排除集群ID</p>
   */
  ExcludeClusterIDs?: Array<string>
  /**
   * <p>实例ID</p>
   */
  InstanceIds?: Array<string>
  /**
   * <p>排除实例ID</p>
   */
  ExcludeInstanceIds?: Array<string>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeSecurityRiskTrend请求参数结构体
 */
export interface DescribeSecurityRiskTrendRequest {
  /**
   * <p>集团账号的成员id</p>
   */
  MemberId?: Array<string>
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
 * BatchModifyBaselinePolicy请求参数结构体
 */
export interface BatchModifyBaselinePolicyRequest {
  /**
   * <p>待修改的基线策略 ID 列表，不可为空且元素不可为 0。</p>
   */
  PolicyIDList: Array<number | bigint>
  /**
   * <p>周期扫描配置；不修改时可省略。Enable=1 时必须同时传 IntervalType 与 IntervalValueList。</p>
   */
  CycleScanConf: CycleScanConf
  /**
   * <p>新增内置检测项自动同步开关。true 自动加入，false 不加入。</p>
   */
  AutoSyncItem?: boolean
  /**
   * <p>分类 / 子分类 / 检测项命中配置；不修改时可省略。</p>
   */
  CategoryConf?: Array<BaselinePolicySystemCategoryConf>
  /**
   * <p>集团账号的成员id</p>
   */
  MemberId?: Array<string>
  /**
   * <p>自定义检测项取值配置列表；不修改时可省略。每个元素 RuleID 与 CustomItemID 不能同时为 0。</p>
   */
  CustomItemConf?: Array<BaselineCustomItemConf>
}

/**
 * DescribeDspmWhitelistStrategy请求参数结构体
 */
export interface DescribeDspmWhitelistStrategyRequest {
  /**
   * <p>集团账号的成员id</p>
   */
  MemberId?: Array<string>
  /**
   * 过滤器
   */
  Filter?: Filter
}

/**
 * DescribeWebhookPolicyList请求参数结构体
 */
export interface DescribeWebhookPolicyListRequest {
  /**
   * <p>分页偏移量<br>取值范围：[0, +∞)<br>默认值：0</p>
   */
  Offset?: number
  /**
   * <p>每页返回数量<br>取值范围：[1, 200]<br>默认值：20</p>
   */
  Limit?: number
  /**
   * <p>过滤条件<br>支持的过滤项：<br>Name：按策略名称模糊搜索<br>Status：启用状态，可选值：ON / OFF<br>ReceiveFormat：接收格式，可选值：TEXT / JSON<br>Module：通知项模块，可选值：Vul / Alert / AkSk / Agent / LogAnalysis<br>ReceiverID：关联的接收机器人 ID</p>
   */
  Filters?: Array<Filters>
  /**
   * <p>排序字段<br>枚举值：<br>InsertTime：创建时间<br>UpdateTime：更新时间<br>默认值：UpdateTime</p>
   */
  Order?: string
  /**
   * <p>排序方式<br>枚举值：<br>asc：升序<br>desc：降序<br>默认值：desc</p>
   */
  By?: string
}

/**
 * DescribeClusterNodeList返回参数结构体
 */
export interface DescribeClusterNodeListResponse {
  /**
   * <p>总数</p>
   */
  TotalCount?: number
  /**
   * <p>列表</p>
   */
  List?: Array<ClusterNodeListItem>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeBaselineUserWeakPasswordConf请求参数结构体
 */
export interface DescribeBaselineUserWeakPasswordConfRequest {
  /**
   * 集团账号场景下的成员账号 Appid 列表。非集团账号或仅查询当前账号时传空。
   */
  MemberId?: Array<string>
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
 * DescribeNotifyAgentOfflineDuration返回参数结构体
 */
export interface DescribeNotifyAgentOfflineDurationResponse {
  /**
   * <p>离线时长，分钟级20-50m，步长10；小时级1-24h，步长1</p>
   */
  Duration?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeExposeRisks请求参数结构体
 */
export interface DescribeExposeRisksRequest {
  /**
   * <p>集团账号的成员id</p>
   */
  MemberId?: Array<string>
  /**
   * 边界资产ID
   */
  ExposureID?: number
  /**
   * 过滤条件
   */
  Filters?: Array<Filters>
}

/**
 * ExportTasks返回参数结构体
 */
export interface ExportTasksResponse {
  /**
   * <p>PENDING：正在生成下载链接，FINISHED：下载链接已生成，ERROR：网络异常等异常情况</p>
   */
  Status?: string
  /**
   * <p>下载链接</p>
   */
  DownloadUrl?: string
  /**
   * <p>文件名称</p>
   */
  FileName?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
 * DescribeAIScheduleTaskDetail请求参数结构体
 */
export interface DescribeAIScheduleTaskDetailRequest {
  /**
   * <p>任务 ID。可通过 DescribeAIScheduleTaskList 接口获取。</p>
   */
  TaskId?: string
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
 * CreateCFGRisksExportJob请求参数结构体
 */
export interface CreateCFGRisksExportJobRequest {
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
  /**
   * <p>规范ID</p>
   */
  StandardIDs?: Array<number | bigint>
}

/**
 * CLB监听器
 */
export interface ClbListenerItem {
  /**
   * <p>监听器ID</p>
   */
  ListenerID?: string
  /**
   * <p>监听器名称</p>
   */
  ListenerName?: string
  /**
   * <p>协议</p>
   */
  Protocol?: string
  /**
   * <p>端口</p>
   */
  Port?: number
  /**
   * <p>创建时间</p>
   */
  CreateTime?: string
}

/**
 * 漏洞修复任务明细项
 */
export interface VulFixTaskDetailItem {
  /**
   * <p>明细记录ID</p>
   */
  Id?: number
  /**
   * <p>关联的修复任务ID</p>
   */
  TaskId?: number
  /**
   * <p>修复的漏洞ID</p>
   */
  VulId?: number
  /**
   * <p>修复的KB补丁ID</p>
   */
  KBId?: number
  /**
   * <p>主机实例ID</p>
   */
  InstanceId?: string
  /**
   * <p>主机名称</p>
   */
  MachineName?: string
  /**
   * <p>主机内网IP</p>
   */
  MachineIp?: string
  /**
   * <p>漏洞名称</p>
   */
  VulName?: string
  /**
   * <p>执行状态<br>枚举值：<br>0：初始状态<br>1：已下发任务<br>11：客户端已确认<br>2：修复完成<br>3：客户端离线<br>4：超时<br>5：失败<br>6：不支持<br>9：等待快照创建完成中<br>10：快照创建失败</p>
   */
  Status?: number
  /**
   * <p>修复结果</p><p>枚举值：</p><ul><li>0： 初始状态</li><li>1： 修复成功</li><li>2： 修复失败</li><li>3： 修复中</li></ul>
   */
  FixStatus?: number
  /**
   * <p>快照状态<br>枚举值：<br>-1：无需创建快照<br>0：未开始<br>1：进行中<br>2：已完成<br>3：创建失败</p>
   */
  SnapshotStatus?: number
  /**
   * <p>异常提示信息</p>
   */
  ExceptionMessage?: string
  /**
   * <p>修复启动时间<br>参数格式：YYYY-MM-DDTHH:mm:ssZ（ISO8601格式）</p>
   */
  StartTime?: string
  /**
   * <p>修复结束时间<br>参数格式：YYYY-MM-DDTHH:mm:ssZ（ISO8601格式）</p>
   */
  EndTime?: string
  /**
   * <p>快照创建时间<br>参数格式：YYYY-MM-DDTHH:mm:ssZ（ISO8601格式）</p>
   */
  SnapshotCreateTime?: string
  /**
   * <p>快照到期时间<br>参数格式：YYYY-MM-DDTHH:mm:ssZ（ISO8601格式）</p>
   */
  SnapshotExpireTime?: string
  /**
   * <p>快照创建失败原因（当 SnapshotStatus=3 时有值）</p>
   */
  SnapshotFailReason?: string
}

/**
 * ModifyVulWhitelistConfig返回参数结构体
 */
export interface ModifyVulWhitelistConfigResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 通知资产范围
 */
export interface WebhookAssetScope {
  /**
   * 资产范围类型（对齐 NotifyAssetRange）
枚举值：
1：全部主机（可剔除）
2：自选主机
3：按标签选择
   */
  AssetRange: number
  /**
   * 选中的主机 quuid 列表，仅 AssetRange=2 生效
   */
  InstanceIds?: Array<string>
  /**
   * 排除的主机 quuid 列表，仅 AssetRange=1 生效
   */
  ExcludedInstanceIds?: Array<string>
  /**
   * 安全中心标签 ID 列表，仅 AssetRange=3 生效
   */
  TagIds?: Array<number | bigint>
  /**
   * 腾讯云标签列表，仅 AssetRange=3 生效
入参限制：AssetRange=3 时 TagIds + CloudTags 不能同时为空
   */
  CloudTags?: Array<string>
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
 * DeleteDspmIdentifyRule请求参数结构体
 */
export interface DeleteDspmIdentifyRuleRequest {
  /**
   * <p>数据项id</p>
   */
  Ids: Array<number | bigint>
  /**
   * <p>集团账号的成员id</p>
   */
  MemberId?: Array<string>
}

/**
 * DescribeCloudAssets返回参数结构体
 */
export interface DescribeCloudAssetsResponse {
  /**
   * 资产数量
   */
  TotalCount?: number
  /**
   * 资产集合
   */
  Assets?: Array<AssetItem>
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
 * CreateCheckViewRisksExportJob返回参数结构体
 */
export interface CreateCheckViewRisksExportJobResponse {
  /**
   * 导出任务ID
   */
  JobId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
 * DescribeMachineLoginType请求参数结构体
 */
export interface DescribeMachineLoginTypeRequest {
  /**
   * <p>集团账号的成员id</p>
   */
  MemberId?: Array<string>
  /**
   * <p>instance_id</p>
   */
  InstanceIds?: Array<string>
  /**
   * <p>主机Quuid列表</p>
   */
  Quuids?: Array<string>
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
 * DeleteEDRScanTask请求参数结构体
 */
export interface DeleteEDRScanTaskRequest {
  /**
   * <p>任务ID</p>
   */
  TaskId: number
  /**
   * <p>集团账号的成员id</p>
   */
  MemberId?: Array<string>
}

/**
 * 日志主题索性信息
 */
export interface LogTopicIndexInfo {
  /**
   * <p>主题</p>
   */
  TopicId?: string
  /**
   * <p>状态</p>
   */
  Status?: boolean
  /**
   * <p>规则</p>
   */
  Rule?: LogIndexRuleInfo
  /**
   * <p>修改时间</p>
   */
  ModifyTime?: string
  /**
   * <p>是否包含</p>
   */
  IncludeInternalFields?: boolean
  /**
   * <p>元数据标签</p>
   */
  MetadataFlag?: number
}

/**
 * DescribeComplianceStatistics返回参数结构体
 */
export interface DescribeComplianceStatisticsResponse {
  /**
   * <p>检查项数量</p>
   */
  TotalCount?: number
  /**
   * <p>合规标准和检查项分布</p>
   */
  Standards?: Array<ComplianceStandardRuleCount>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
 * 漏洞/KB补丁维度修复状态
 */
export interface VulFixStatusItem {
  /**
   * 漏洞ID（KB补丁修复任务时为空）
   */
  VulId?: number
  /**
   * KB补丁ID（漏洞修复任务时为空）
   */
  KBId?: number
  /**
   * 漏洞名称或KB补丁名称
   */
  VulName?: string
  /**
   * 该漏洞的修复状态
枚举值：
0：修复中
1：全部成功
2：部分失败
3：全部失败
   */
  FixStatus?: number
  /**
   * 该漏洞/KB补丁关联的主机总数
   */
  HostCount?: number
  /**
   * 该漏洞/KB补丁修复成功的主机数
   */
  SuccessHostCount?: number
  /**
   * 该漏洞/KB补丁修复失败的主机数
   */
  FailHostCount?: number
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
 * DescribeUebaUserSummary请求参数结构体
 */
export interface DescribeUebaUserSummaryRequest {
  /**
   * 集团账号的成员id
   */
  MemberId?: Array<string>
}

/**
 * DescribeNotifySetting请求参数结构体
 */
export type DescribeNotifySettingRequest = null

/**
 * DescribeClusterContainerList请求参数结构体
 */
export interface DescribeClusterContainerListRequest {
  /**
   * <p>集群资产 id</p>
   * @deprecated
   */
  ClusterAssetId?: string
  /**
   * <p>集团账号的成员id</p>
   */
  MemberId?: Array<string>
  /**
   * <p>通用过滤条件列表。支持的过滤字段：<br>ContainerId：容器ID，精确匹配。<br>ContainerName：容器名称，模糊匹配。<br>RunStatus：容器运行状态，精确匹配。取值：RUNNING、PAUSED、STOPPED、CREATED、DESTROYED、RESTARTING、REMOVING、DEAD、UNKNOWN。<br>ImageId：镜像ID，精确匹配。<br>ImageName：镜像名称，模糊匹配。<br>IsolateStatus：隔离状态，精确匹配。取值：NORMAL（未隔离）、ISOLATED（已隔离）、ISOLATING（隔离中）、ISOLATE_FAILED（隔离失败）、RESTORING（解除隔离中）、RESTORE_FAILED（解除隔离失败）。<br>NodeUniqueId：所属节点唯一ID，精确匹配（NodeAssetId 为等价别名）。<br>UUID：主机UUID，精确匹配。</p>
   */
  Filter?: Filter
  /**
   * <p>集群ca证书md5值，集群的唯一标识</p>
   */
  ClusterCaMD5?: string
}

/**
 * ModifyEdrLogCollectPath请求参数结构体
 */
export interface ModifyEdrLogCollectPathRequest {
  /**
   * <p>集团账号的成员id</p>
   */
  MemberId?: Array<string>
  /**
   * <p>采集路径，最多可添加1000条</p>
   */
  Paths?: Array<LogAppCollectPath>
}

/**
 * 触发器配置
 */
export interface AiScheduleTriggerInfo {
  /**
   * <p>触发器 ID。</p>
   */
  TriggerId?: string
  /**
   * <p>触发器类型。取值：1（Cron 表达式）、2（固定时间）。</p>
   */
  TriggerType?: number
}

/**
 * DescribeAgentRunMode返回参数结构体
 */
export interface DescribeAgentRunModeResponse {
  /**
   * <p>自定义模式配置</p>
   */
  CustomPolicy?: CustomAgentRunModePolicy
  /**
   * <p>高安全防护模式quuid列表</p>
   */
  AdvanceModeQuuids?: Array<string>
  /**
   * <p>自定义模式quuid列表</p>
   */
  CustomModeQuuids?: Array<string>
  /**
   * <p>日志增强开关,0：关闭，1：打开</p>
   */
  EnhanceLogMode?: number
  /**
   * <p>文件查杀自动poc模式开关，0：关闭，1：打开</p>
   */
  MalwarePocMode?: number
  /**
   * <p>五元组日志是否上报源端口，0：不上报，1：上报</p>
   */
  ReportSourcePort?: number
  /**
   * <p>业务优先配置</p>
   */
  BasicPolicy?: CustomAgentRunModePolicy
  /**
   * <p>安全优先配置</p>
   */
  AdvancePolicy?: CustomAgentRunModePolicy
  /**
   * <p>日志采集设置，采集TCP源端口tcp_src_port，TCP入向日志tcp_ingress，HTTP出向连接日志http_egress，HTTP入向连接日志http_ingress，应用访问日志app_access</p>
   */
  LogCollectSettings?: Array<string>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeClusterPodList请求参数结构体
 */
export interface DescribeClusterPodListRequest {
  /**
   * <p>集群资产 id</p>
   * @deprecated
   */
  ClusterAssetId?: string
  /**
   * <p>集团账号的成员id</p>
   */
  MemberId?: Array<string>
  /**
   * <p>通用过滤条件列表。支持的过滤字段：<br>PodName：Pod名称，模糊匹配。<br>PodIPs：Pod IP，模糊匹配。<br>RunStatus：Pod运行状态，精确匹配。取值：Pending、Running、Succeeded、Failed、Unknown。<br>NodeUniqueID：所属节点唯一ID，精确匹配。<br>InstanceId：所属节点实例ID，精确匹配。<br>WorkloadName：负载名称，模糊匹配。<br>WorkloadType：负载类型，精确匹配（如 DaemonSet/Deployment/StatefulSet/Job/CronJob/ReplicaSet 等）。<br>Namespace：命名空间，精确匹配。</p>
   */
  Filter?: Filter
  /**
   * <p>集群ca证书md5值，集群的唯一标识</p>
   */
  ClusterCaMD5?: string
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
 * ModifyBaselineUserWeakPasswordConf返回参数结构体
 */
export interface ModifyBaselineUserWeakPasswordConfResponse {
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
   * <p>总数量</p>
   */
  TotalCount?: number
  /**
   * <p>合并后的白名单列表</p>
   */
  LoginWhiteCombinedInfos?: Array<LoginWhiteCombinedInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

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
 * StartOrModifyPreventUninstall请求参数结构体
 */
export interface StartOrModifyPreventUninstallRequest {
  /**
   * <p>操作来源 0   主机页面 1   客户端设置页面</p>
   */
  From: number
  /**
   * <p>开启范围 0 自选主机 1 全部主机</p>
   */
  Scope: number
  /**
   * <p>集团账号的成员id</p>
   */
  MemberId?: Array<string>
  /**
   * <p>正选的quuid集合</p>
   */
  IncludeQuuid?: Array<string>
  /**
   * <p>反选的quuid集合</p>
   */
  ExcludeQuuid?: Array<string>
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
 * 主机简要信息
 */
export interface HostBriefInfo {
  /**
   * 云主机实例 ID
参数格式：形如 ins-instance
   */
  InstanceID?: string
  /**
   * 主机 QUUID（CWP 内部唯一标识）
   */
  QUUID?: string
  /**
   * 主机 UUID
   */
  UUID?: string
  /**
   * 公网 IP 地址
   */
  PublicIP?: string
  /**
   * 内网 IP 地址
   */
  PrivateIP?: string
  /**
   * CWP Agent 状态
枚举值：
ONLINE：在线
OFFLINE：离线
UNINSTALLED：未安装
   */
  AgentStatus?: string
  /**
   * 云主机实例状态
枚举值：
RUNNING：运行中
STOPPED：已停止
UNKNOWN：未知
   */
  InstanceStatus?: string
  /**
   * 主机名称
   */
  Name?: string
  /**
   * 所属账号信息
   */
  Account?: AccountBriefInfo
  /**
   * 资产标签列表（CSIP 内部资产标签）
   */
  TagItem?: Array<MiniTagItem>
  /**
   * 云上标签列表（云资产侧 Tag）
   */
  CloudTag?: Array<Tag>
}

/**
 * 已修复漏洞信息
 */
export interface VulFixedItem {
  /**
   * <p>漏洞ID</p>
   */
  VulId?: number
  /**
   * <p>漏洞名称</p>
   */
  VulName?: string
  /**
   * <p>漏洞等级<br>枚举值：<br>LOW：低危<br>MEDIUM：中危<br>HIGH：高危<br>CRITICAL：严重</p>
   */
  Level?: string
  /**
   * <p>VPR 评级信息（包含评级结果、说明和分阶段评分），与 DescribeHostVulRiskList 一致</p>
   */
  VRPRatingInfo?: VPRRatingInfo
  /**
   * <p>漏洞类型<br>枚举值：<br>LINUX：Linux软件漏洞<br>WINDOWS：Windows系统补丁漏洞<br>WEB_CMS：Web-CMS漏洞<br>APPLICATION：应用漏洞<br>EMERGENCY：应急漏洞</p>
   */
  VulCategory?: string
  /**
   * <p>CVE编号</p>
   */
  CveId?: string
  /**
   * <p>修复主机名称</p>
   */
  MachineName?: string
  /**
   * <p>修复主机实例ID</p>
   */
  InstanceId?: string
  /**
   * <p>关联组件&amp;路径数量</p>
   */
  ComponentCount?: number
  /**
   * <p>关联组件&amp;路径列表</p>
   */
  Components?: Array<string>
  /**
   * <p>最近一次修复时间<br>参数格式：YYYY-MM-DDTHH:mm:ssZ（ISO8601格式）</p>
   */
  LatestFixTime?: string
  /**
   * <p>VPR评级依据</p>
   */
  VPRExplainInfo?: VPRExplainInfo
}

/**
 * ModifyCSIPLicenseUnBinds请求参数结构体
 */
export interface ModifyCSIPLicenseUnBindsRequest {
  /**
   * <p>待解绑的实例ID列表（IsAll=true时可不传）</p>
   */
  InstanceIDs?: Array<string>
  /**
   * <p>是否解绑全部已绑定主机授权机器</p>
   */
  IsAll?: boolean
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
 * CreateAssetSyncTask请求参数结构体
 */
export interface CreateAssetSyncTaskRequest {
  /**
   * <p>集团账号的成员id</p>
   */
  MemberId?: Array<string>
}

/**
 * DescribeCWPExposePath返回参数结构体
 */
export interface DescribeCWPExposePathResponse {
  /**
   * <p>云边界分析路径节点内容</p>
   */
  Content?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 日志检索主题信息
 */
export interface LogSearchTopics {
  /**
   * <p>错误信息</p>
   */
  Errors?: Array<LogSearchErrors>
  /**
   * <p>正常信息</p>
   */
  Infos?: Array<LogSearchInfos>
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
 * DescribeAIAnalysisRobotInfo请求参数结构体
 */
export interface DescribeAIAnalysisRobotInfoRequest {
  /**
   * <p>接入类型，0/不传入：企业微信url配置接入 1:企业微信扫码接入 2:微信扫码接入 3:QQ 账密接入 4:飞书 账密接入 5:钉钉 账密接入</p>
   */
  AccessType?: number
  /**
   * <p>QQ/飞书/钉钉 创建Bot账号ID</p>
   */
  AccountId?: string
  /**
   * <p>QQ/飞书/钉钉 创建Bot密钥</p>
   */
  Secret?: string
  /**
   * <p>预设机器人名称，为空时则后台生成</p>
   */
  BotName?: string
}

/**
 * StartOrModifyProcessDaemon请求参数结构体
 */
export interface StartOrModifyProcessDaemonRequest {
  /**
   * <p>操作来源 0   主机页面 1   客户端设置页面</p>
   */
  From: number
  /**
   * <p>开启范围 0 自选主机 1 全部主机</p>
   */
  Scope: number
  /**
   * <p>集团账号的成员id</p>
   */
  MemberId?: Array<string>
  /**
   * <p>正选的quuid集合</p>
   */
  IncludeQuuid?: Array<string>
  /**
   * <p>反选的quuid集合</p>
   */
  ExcludeQuuid?: Array<string>
}

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
 * ModifyCosAuditObjectSampleRate请求参数结构体
 */
export interface ModifyCosAuditObjectSampleRateRequest {
  /**
   * <p>存储桶资产id集合</p>
   */
  BucketIdSet: Array<number | bigint>
  /**
   * <p>采样率集合</p>
   */
  SampleRateSet: Array<number>
}

/**
 * DescribeCWPLicenseBindSchedule返回参数结构体
 */
export interface DescribeCWPLicenseBindScheduleResponse {
  /**
   * <p>进度</p>
   */
  Schedule?: number
  /**
   * <p>绑定任务详情</p>
   */
  List?: Array<LicenseBindTaskDetail>
  /**
   * <p>总条数</p>
   */
  TotalCount?: number
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
 * CreateDspmIdentifyCategory请求参数结构体
 */
export interface CreateDspmIdentifyCategoryRequest {
  /**
   * <p>分类名称</p>
   */
  Name: string
  /**
   * <p>集团账号的成员id</p>
   */
  MemberId?: Array<string>
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
 * DescribeClusterContainerComponentList请求参数结构体
 */
export interface DescribeClusterContainerComponentListRequest {
  /**
   * <p>容器ID</p>
   */
  ContainerId: string
  /**
   * <p>集团账号的成员id</p>
   */
  MemberId?: Array<string>
}

/**
 * DescribeVulScanPeriodic返回参数结构体
 */
export interface DescribeVulScanPeriodicResponse {
  /**
   * <p>周期扫描开关（0-关闭, 1-开启）</p>
   */
  Status?: number
  /**
   * <p>漏洞类型</p><p>枚举值：</p><ul><li>LINUX： Linux软件漏洞</li><li>WINDOWS： Windows系统补丁</li><li>WEB_CMS： Web-CMS漏洞</li><li>APPLICATION： 应用漏洞</li><li>EMERGENCY： 应急漏洞</li></ul>
   */
  VulCategory?: Array<string>
  /**
   * <p>漏洞等级（INVALID: 无效, INFO: 提示, LOW: 低危, MEDIUM: 中危, HIGH: 高危, CRITICAL: 严重）</p>
   */
  Level?: Array<string>
  /**
   * <p>扫描方式（VersionCompare: 版本对比, POC: POC检测, VersionComparePOC: 版本对比+POC检测）</p>
   */
  Method?: string
  /**
   * <p>周期扫描类型</p><p>枚举值：</p><ul><li>1： 每天</li><li>2： 每周</li><li>3： 每月</li></ul>
   */
  CycleType?: number
  /**
   * <p>开始时间（09:00:00）</p>
   */
  StartTime?: string
  /**
   * <p>结束时间（18:00:00）</p>
   */
  EndTime?: string
  /**
   * <p>资产范围（0-全部资产，1-自选资产，2-剔除资产）</p>
   */
  AssetRange?: number
  /**
   * <p>资产列表（instance_id列表）</p>
   */
  AssetList?: Array<string>
  /**
   * <p>周期值</p><p>单位：周几或者每月几号</p>
   */
  CycleValue?: Array<number | bigint>
  /**
   * <p>超时时长</p><p>单位：秒</p>
   */
  Timeout?: number
  /**
   * <p>是否运行被同步配置 0-不允许，1-允许</p>
   */
  AllowSync?: number
  /**
   * <p>管理员账号是否开启了自动同步配置开关 0-关闭，1-开启</p>
   */
  EnableSync?: number
  /**
   * <p>配置信息来自哪个账号，为空表示自己设置</p>
   */
  AdminInfo?: AccountBriefInfo
  /**
   * <p>标签id</p>
   */
  TagIds?: Array<number | bigint>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeAgentRunMode请求参数结构体
 */
export interface DescribeAgentRunModeRequest {
  /**
   * <p>集团账号的成员id</p>
   */
  MemberId?: Array<string>
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
 * CheckIsUltimateVersion请求参数结构体
 */
export type CheckIsUltimateVersionRequest = null

/**
 * AddVulWhitelist请求参数结构体
 */
export interface AddVulWhitelistRequest {
  /**
   * <p>漏洞ID</p>
   */
  VulId?: Array<number | bigint>
  /**
   * <p>补丁ID</p>
   */
  KbId?: Array<number | bigint>
  /**
   * <p>集团账号的成员id</p>
   */
  MemberId?: Array<string>
  /**
   * <p>备注</p>
   */
  Remark?: string
  /**
   * <p>资产列表</p>
   */
  AssetList?: Array<string>
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
 * AI助手用户身份信息
 */
export interface AIScheduleUserIdentity {
  /**
   *
   */
  AppId?: number
  /**
   *
   */
  Uin?: string
  /**
   *
   */
  SubUin?: string
  /**
   *
   */
  UserId?: string
  /**
   *
   */
  BotId?: string
  /**
   *
   */
  ChatId?: string
  /**
   *
   */
  Channel?: string
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
 * CreateClusterNodeListExportJob请求参数结构体
 */
export interface CreateClusterNodeListExportJobRequest {
  /**
   * <p>集群CA证书MD5（32位十六进制；唯一标识）<br>入参限制：长度必须等于32个字符</p>
   */
  ClusterCaMD5: string
  /**
   * <p>集团账号的成员id</p>
   */
  MemberId?: Array<string>
  /**
   * <p>通用过滤条件列表。支持的过滤字段：<br>NodeName：节点名称，模糊匹配。<br>NodeId：节点ID，精确匹配。<br>NodeUniqueID：节点唯一ID，精确匹配（NodeAssetID 为等价别名）。<br>NodeType：节点类型，精确匹配。取值：SUPER（超级节点）、MASTER（主节点）、WORKER（工作节点）。<br>RunStatus：节点运行状态，精确匹配。<br>InternalIP：内网IP，精确匹配。<br>ClientStatus：客户端状态，精确匹配。取值：ONLINE（在线）、OFFLINE（离线）、UNINSTALL（未安装）。</p>
   */
  Filter?: Filter
  /**
   * <p>导出字段列表（不传则导出全部字段）<br>枚举值：<br>NodeId：节点ID<br>NodeName：节点名称<br>PublicIP：公网IP<br>InternalIP：内网IP<br>NodeType：节点类型（NORMAL普通节点 / SUPER超级节点 / WORKER / MASTER / ETCD）<br>CoresCount：核数<br>ClientStatus：客户端状态（ONLINE在线 / OFFLINE离线 / UNINSTALL未安装）<br>RunStatus：运行状态（Running运行中 / Exception异常）</p>
   */
  ExportFields?: Array<string>
}

/**
 * DeleteBaselineSelfDefinedPolicyList返回参数结构体
 */
export interface DeleteBaselineSelfDefinedPolicyListResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteEDRScanTask返回参数结构体
 */
export interface DeleteEDRScanTaskResponse {
  /**
   * <p>被删除任务的taskId</p>
   */
  TaskId?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
 * DeleteBaselineSelfDefinedPolicyList请求参数结构体
 */
export interface DeleteBaselineSelfDefinedPolicyListRequest {
  /**
   * <p>待删除的自定义策略 ID 列表，不可为空且元素不可为 0。</p>
   */
  PolicyIDList: Array<number | bigint>
  /**
   * <p>集团账号的成员id</p>
   */
  MemberId?: Array<string>
}

/**
 * dspm数据识别分级组列表项
 */
export interface DspmIdentifyLevelGroupItem {
  /**
   * <p>级别组id</p>
   */
  Id?: number
  /**
   * <p>级别组名称</p>
   */
  Name?: string
  /**
   * <p>级别组描述</p>
   */
  Description?: string
  /**
   * <p>级别组类型</p><p>枚举值：</p><ul><li>0： 内置</li><li>1： 自定义</li></ul>
   */
  Type?: number
  /**
   * <p>级别信息</p>
   */
  LevelItems?: Array<DspmIdentifyLevelItem>
  /**
   * <p>更新时间</p><p>参数格式：YYYY-MM-DD hh:mm:ss</p>
   */
  UpdateTime?: string
  /**
   * <p>关联的识别模板信息</p>
   */
  ComplianceRelations?: Array<DspmIdentifyRefComplianceInfo>
}

/**
 * DeleteCSIPMalwareScanTask返回参数结构体
 */
export interface DeleteCSIPMalwareScanTaskResponse {
  /**
   * <p>实际物理删除的任务数（主表 affected rows）</p>
   */
  SuccessCount?: number
  /**
   * <p>因运行中（子表 status IN {0,1,11} 计数 &gt; 0）而未删除的 TaskId 列表；越权 / 不存在的 ID 不出现在此</p>
   */
  FailedIds?: Array<number | bigint>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
 * DescribeAssetSyncTaskStatus请求参数结构体
 */
export interface DescribeAssetSyncTaskStatusRequest {
  /**
   * ["csip-xsjdjss"]
   */
  TaskIDs: Array<string>
  /**
   * <p>集团账号的成员id</p>
   */
  MemberId?: Array<string>
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
 * 用户行为分析-用户概览信息
 */
export interface UebaUserSummary {
  /**
   * 全部用户数量
注意：此字段可能返回 null，表示取不到有效值。
   */
  AllUserCount?: number
  /**
   * 异常用户数量
注意：此字段可能返回 null，表示取不到有效值。
   */
  AbnormalUserCount?: number
  /**
   * 云账号用户数量
注意：此字段可能返回 null，表示取不到有效值。
   */
  UserCount?: number
  /**
   * 子用户数量
注意：此字段可能返回 null，表示取不到有效值。
   */
  SubUserCount?: number
  /**
   * 自定义用户数量
注意：此字段可能返回 null，表示取不到有效值。
   */
  CustomUserCount?: number
  /**
   * 自定义用户求和组成元素
注意：此字段可能返回 null，表示取不到有效值。
   */
  Element?: Array<UebaUserSummaryElement>
}

/**
 * CreateAssetTag请求参数结构体
 */
export interface CreateAssetTagRequest {
  /**
   * <p>标签键</p>
   */
  Key: string
  /**
   * <p>标签值</p>
   */
  Value: string
  /**
   * <p>集团账号的成员id</p>
   */
  MemberId?: Array<string>
  /**
   * <p>颜色</p>
   */
  Color?: string
  /**
   * <p>描述</p>
   */
  Description?: string
  /**
   * <p>打标策略</p>
   */
  TaggingRule?: string
  /**
   * <p>是否立即执行资产打标</p>
   */
  ApplyNow?: boolean
}

/**
 * DescribeClusterContainerAppList请求参数结构体
 */
export interface DescribeClusterContainerAppListRequest {
  /**
   * <p>容器ID</p>
   */
  ContainerId: string
  /**
   * <p>集团账号的成员id</p>
   */
  MemberId?: Array<string>
}

/**
 * ModifyCspmShardConfig请求参数结构体
 */
export interface ModifyCspmShardConfigRequest {
  /**
   * <p>开关状态</p>
   */
  AutoShardStatus: number
}

/**
 * CreateScanStatisticExportJob请求参数结构体
 */
export interface CreateScanStatisticExportJobRequest {
  /**
   * 集团账号的成员id
   */
  MemberId?: Array<string>
  /**
   * 过滤内容
   */
  Filter?: Filter
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
   * 体检任务id
   */
  TaskLogId?: string
}

/**
 * 用户级基线其他配置（同步授权、离线清风险、Agent 扫描超时等）。
 */
export interface BaselineUserOtherConf {
  /**
   * <p>是否允许集团管理员将基线配置同步到本账号。true 允许，false 不允许。</p>
   */
  AllowSync: boolean
  /**
   * <p>资产离线时是否自动清除其历史风险结果。true 清除，false 保留。</p>
   */
  CleanRiskWhenOffline: boolean
  /**
   * <p>Agent 单次扫描的超时时间，单位秒。取值范围 [60, 86400]，默认 1800。</p>
   */
  AgentScanTimeout: number
}

/**
 * DescribeVulFixedHostDetail返回参数结构体
 */
export interface DescribeVulFixedHostDetailResponse {
  /**
   * <p>漏洞名称</p>
   */
  VulName?: string
  /**
   * <p>CVE编号</p>
   */
  CveId?: string
  /**
   * <p>漏洞类型<br>枚举值：<br>LINUX：Linux软件漏洞<br>WINDOWS：Windows系统补丁漏洞<br>WEB_CMS：Web-CMS漏洞<br>APPLICATION：应用漏洞</p>
   */
  VulCategory?: string
  /**
   * <p>修复完成时间<br>参数格式：YYYY-MM-DDTHH:mm:ssZ（ISO8601格式）</p>
   */
  FixTime?: string
  /**
   * <p>主机实例ID</p>
   */
  InstanceId?: string
  /**
   * <p>主机名称</p>
   */
  MachineName?: string
  /**
   * <p>主机公网IP</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  PublicIp?: string
  /**
   * <p>主机内网IP</p>
   */
  PrivateIp?: string
  /**
   * <p>关联组件&amp;路径详情列表</p>
   */
  ComponentDetails?: Array<ComponentDetailItem>
  /**
   * <p>关联组件&amp;路径总数量</p>
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeHostKBRiskList请求参数结构体
 */
export interface DescribeHostKBRiskListRequest {
  /**
   * <p>集团账号的成员id</p>
   */
  MemberId?: Array<string>
  /**
   * <p>筛选条件数组，多条件之间为 AND 关系<br>支持的 Filter.Name：<br>Keyword：关键字模糊搜索（对 KB 编号/名称模糊匹配）<br>RiskStatus：修复状态<br>InstanceID：实例ID<br>NewestKB: 最新补丁(0/1)</p>
   */
  Filters?: Array<Filters>
  /**
   * <p>每页返回数量<br>取值范围：[1, 100]<br>默认值：10</p>
   */
  Limit?: number
  /**
   * <p>分页偏移量<br>取值范围：[0, +∞)<br>默认值：0</p>
   */
  Offset?: number
  /**
   * <p>排序方向<br>枚举值：<br>ASC：升序<br>DESC：降序<br>默认值：DESC</p>
   */
  Order?: string
  /**
   * <p>排序字段<br>枚举值：<br>LatestScanTime：最近扫描时间<br>默认值：LatestScanTime</p>
   */
  By?: string
}

/**
 * DescribeBaselinePolicyItemList返回参数结构体
 */
export interface DescribeBaselinePolicyItemListResponse {
  /**
   * <p>基线检测项列表。</p>
   */
  ItemList?: Array<BaselineItem>
  /**
   * <p>凭据总数</p>
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 资产过滤选项
 */
export interface AssetFilterOptions {
  /**
   * <p>显示值</p>
   */
  Text?: string
  /**
   * <p>实际值</p>
   */
  Value?: string
  /**
   * <p>样式</p>
   */
  Style?: string
}

/**
 * DescribeClusterContainerPortList请求参数结构体
 */
export interface DescribeClusterContainerPortListRequest {
  /**
   * <p>容器ID</p>
   */
  ContainerId: string
  /**
   * <p>集团账号的成员id</p>
   */
  MemberId?: Array<string>
}

/**
 * DeleteDspmIdentifyRule返回参数结构体
 */
export interface DeleteDspmIdentifyRuleResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
 * BindClusterOwner返回参数结构体
 */
export interface BindClusterOwnerResponse {
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
   * <p>集团账号的成员id</p>
   */
  MemberId?: Array<string>
  /**
   * <p>要下载的导出任务ID</p>
   */
  TaskId?: number
}

/**
 * DisableAISchedule请求参数结构体
 */
export interface DisableAIScheduleRequest {
  /**
   * <p>AI 定时任务 ID。可通过 DescribeAIScheduleList 接口获取。</p>
   */
  ScheduleId?: string
}

/**
 * DescribeLastScanTaskInfo返回参数结构体
 */
export interface DescribeLastScanTaskInfoResponse {
  /**
   * <p>任务信息</p>
   */
  TaskInfo?: TaskInfo
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteDspmIdentifyCategory请求参数结构体
 */
export interface DeleteDspmIdentifyCategoryRequest {
  /**
   * <p>分类ID集合</p>
   */
  Ids: Array<number | bigint>
  /**
   * <p>集团账号的成员id</p>
   */
  MemberId?: Array<string>
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
 * ModifyAssetFilterView返回参数结构体
 */
export interface ModifyAssetFilterViewResponse {
  /**
   * 操作信息
   */
  Message?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeReverseShellSystemPolicyConfig请求参数结构体
 */
export interface DescribeReverseShellSystemPolicyConfigRequest {
  /**
   * <p>集团账号的成员id</p>
   */
  MemberId?: Array<string>
}

/**
 * ModifySecurityScoreRule返回参数结构体
 */
export interface ModifySecurityScoreRuleResponse {
  /**
   * <p>修改后的完整规则列表</p>
   */
  Rules?: Array<ScoreRuleItem>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
 * ModifyCSIPRaspLicenseBinds返回参数结构体
 */
export interface ModifyCSIPRaspLicenseBindsResponse {
  /**
   * <p>异步任务ID，用于调用DescribeCSIPLicenseBindSchedule轮询进度</p>
   */
  TaskId?: number
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
 * DescribeDspmLogList返回参数结构体
 */
export interface DescribeDspmLogListResponse {
  /**
   * <p>总数目</p>
   */
  TotalCount?: number
  /**
   * <p>日志信息列表</p>
   */
  List?: Array<AuditLogInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeSCFNamespaceList返回参数结构体
 */
export interface DescribeSCFNamespaceListResponse {
  /**
   * SCF 命名空间列表
   */
  List?: Array<SCFNamespaceInfo>
  /**
   * 命名空间总数
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteDspmWhitelistStrategy请求参数结构体
 */
export interface DeleteDspmWhitelistStrategyRequest {
  /**
   * <p>集团账号的成员id</p>
   */
  MemberId?: Array<string>
  /**
   * 白名单id
   */
  WhitelistStrategyId?: Array<string>
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
 * BatchModifyBaselinePolicy返回参数结构体
 */
export interface BatchModifyBaselinePolicyResponse {
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

/**
 * ModifyBaselineSyncConf返回参数结构体
 */
export interface ModifyBaselineSyncConfResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}
