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
 * DescribeAssetDetail请求参数结构体
 */
export interface DescribeAssetDetailRequest {
  /**
   * 查询过滤参数
   */
  Params: string
}

/**
 * DescribeSocCheckItemList返回参数结构体
 */
export interface DescribeSocCheckItemListResponse {
  /**
   * 检查项列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  Data: DescribeSocCheckItemListRspRsp
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DataSaEventPub
 */
export interface ListDataSaEventPub {
  /**
   * 时间
   */
  Time: string
  /**
   * 安全事件1级分类
   */
  EventType1: number
  /**
   * 安全事件2级分类
   */
  EventType2: number
  /**
   * 安全事件名称
   */
  EventName: string
  /**
   * 风险等级
   */
  Level: number
  /**
   * 安全事件状态
   */
  Status: number
  /**
   * 攻击源ip
   */
  SrcIp: string
  /**
   * 攻击目标ip
   */
  DstIp: string
  /**
   * 攻击目标端口
   */
  DstPort: number
  /**
   * 受影响资产
   */
  Asset: string
  /**
   * 私有字段和公有字段映射的原始采集数据唯一标识的MD5值
   */
  OldIdMd5: string
}

/**
 * DescribeAlarmStat返回参数结构体
 */
export interface DescribeAlarmStatResponse {
  /**
   * 威胁告警信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  Data?: AlarmInfoRsp
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 资产类型
 */
export interface Asset {
  /**
   * 资产类型
   */
  AssetType: string
  /**
   * 名字
   */
  Name: string
  /**
   * 区域
   */
  AssetRegionName: string
  /**
   * 所属网络
   */
  AssetVpcid: string
  /**
   * 主机类型
   */
  InstanceType: string
  /**
   * 主机状态
   */
  InstanceState: string
  /**
   * 引擎版本
   */
  EngineVersion: string
  /**
   * 数据库标识
   */
  Id: string
  /**
   * 标签
   */
  Tag: Array<Tag>
  /**
   * 配置风险统计数
   */
  AssetCspmRiskNum: number
  /**
   * 主机IP
   */
  PublicIpAddresses: Array<string>
  /**
   * 资产唯一标识
   */
  AssetUniqid: string
  /**
   * 付费类型
   */
  ChargeType: string
  /**
   * 安全事件统计数
   */
  AssetEventNum: number
  /**
   * 漏洞统计数
   */
  AssetVulNum: number
  /**
   * 主机IP内网
   */
  PrivateIpAddresses: Array<string>
  /**
   * 所属分组
   */
  GroupName: string
  /**
   * 发现时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  SsaAssetDiscoverTime: string
  /**
   * 下线时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  SsaAssetDeleteTime: string
  /**
   * 是否是新增资产
注意：此字段可能返回 null，表示取不到有效值。
   */
  IsNew: boolean
  /**
   * 所属子网
注意：此字段可能返回 null，表示取不到有效值。
   */
  AssetSubnetId: string
  /**
   * 子网名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  AssetSubnetName: string
  /**
   * vpc名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  AssetVpcName: string
  /**
   * 集群类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  ClusterType: number
  /**
   * 命名空间
注意：此字段可能返回 null，表示取不到有效值。
   */
  NameSpace: string
  /**
   * 负载均衡实例的网络类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  LoadBalancerType: string
  /**
   * 负载均衡实例的vip列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  LoadBalancerVips: Array<string>
  /**
   * ipv6信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  AssetIpv6: Array<string>
  /**
   * ssh端口暴露风险
注意：此字段可能返回 null，表示取不到有效值。
   */
  SSHRisk: string
  /**
   * rdp端口暴露风险
注意：此字段可能返回 null，表示取不到有效值。
   */
  RDPRisk: string
  /**
   * 资产失陷事件风险
注意：此字段可能返回 null，表示取不到有效值。
   */
  EventRisk: string
}

/**
 * 攻击事件
 */
export interface AttackEvent {
  /**
   * 来源ip
注意：此字段可能返回 null，表示取不到有效值。
   */
  SsaSrcIp?: string
  /**
   * 目标ip
注意：此字段可能返回 null，表示取不到有效值。
   */
  SsaDstIp?: string
  /**
   * 目标省份
注意：此字段可能返回 null，表示取不到有效值。
   */
  SsaDstProvince?: string
  /**
   * 目标城市
注意：此字段可能返回 null，表示取不到有效值。
   */
  SsaDstCity?: string
  /**
   * 目标国家
注意：此字段可能返回 null，表示取不到有效值。
   */
  SsaDstCountry?: string
  /**
   * 来源省份
注意：此字段可能返回 null，表示取不到有效值。
   */
  SsaSrcProvince?: string
  /**
   * 来源国家
注意：此字段可能返回 null，表示取不到有效值。
   */
  SsaSrcCountry?: string
  /**
   * 来源城市
注意：此字段可能返回 null，表示取不到有效值。
   */
  SsaSrcCity?: string
}

/**
 * SaEventPub请求参数结构体
 */
export interface SaEventPubRequest {
  /**
   * 受影响资产
   */
  Asset: string
  /**
   * 安全事件名称
   */
  EventName: string
  /**
   * 安全事件1级分类，-1:未知 0:全部 1:攻击事件 2:侦查事件 3:僵木蠕毒 4:违规策略
   */
  EventType1: number
  /**
   * 安全事件2级分类，-1:未知 0:全部 1:DDOS事件 2:Web攻击 3:木马 4:异地登录 5:密码破解
   */
  EventType2: number
  /**
   * 风险等级，-1:未知 0:全部 1:低危 2:中危 3:高危 4:严重，可多选，如：1,2
   */
  Level: string
  /**
   * 安全事件状态，-1:未知 0:全部 1:待处理 2:已处理 3:误报 4:已忽略 5:已知晓 6:已信任
   */
  Status: number
  /**
   * 开始时间
   */
  StartTime: string
  /**
   * 查询起始地址
   */
  Offset: number
  /**
   * 查询个数
   */
  Limit: number
  /**
   * 结束时间
   */
  EndTime: string
  /**
   * 私有字段和公有字段映射的原始采集数据唯一标识的MD5值
   */
  OldIdMd5: string
}

/**
 * DescribeConfigList返回参数结构体
 */
export interface DescribeConfigListResponse {
  /**
   * 检查项列表
   */
  Data?: Array<DataCheck>
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 聚合类型
 */
export interface AggregationObj {
  /**
   * 类型
   */
  Type: string
  /**
   * 数组
   */
  Bucket: Array<Bucket>
}

/**
 * DescribeCheckConfigDetail返回参数结构体
 */
export interface DescribeCheckConfigDetailResponse {
  /**
   * 检查项详情
   */
  CheckConfigDetail?: CheckConfigDetail
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeAssetList返回参数结构体
 */
export interface DescribeAssetListResponse {
  /**
   * 资产列表
   */
  AssetList: AssetList
  /**
   * 聚合数据
   */
  AggregationData: Array<AggregationObj>
  /**
   * 命名空间数据
   */
  NamespaceData: Array<string>
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeCheckConfigAssetList返回参数结构体
 */
export interface DescribeCheckConfigAssetListResponse {
  /**
   * 资产列表总数
   */
  Total?: number
  /**
   * 资产列表项
注意：此字段可能返回 null，表示取不到有效值。
   */
  CheckAssetsList?: Array<CheckAssetItem>
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 过滤条件
 */
export interface QueryFilter {
  /**
   * 过滤key
   */
  FilterKey?: string
  /**
   * 操作符(只支持32位)
   */
  FilterOperatorType?: number
  /**
   * 过滤value
   */
  FilterValue?: string
}

/**
 * 过滤
 */
export interface QueryFilterV3 {
  /**
   * 过滤条件
   */
  Filter?: QueryFilter
  /**
   * 有无子条件
   */
  HasSub?: boolean
  /**
   * 查询条件
   */
  SubFilters?: Array<QueryFilter>
  /**
   * 逻辑操作(只支持32位)
   */
  Logic?: number
}

/**
 * soc合规信息
 */
export interface SocComplianceItem {
  /**
   * 唯一id
注意：此字段可能返回 null，表示取不到有效值。
   */
  Item: string
  /**
   * 描述
注意：此字段可能返回 null，表示取不到有效值。
   */
  Description: string
  /**
   * 分类
注意：此字段可能返回 null，表示取不到有效值。
   */
  StandardItem: string
  /**
   * 结果
注意：此字段可能返回 null，表示取不到有效值。
   */
  Result: number
  /**
   * 建议
注意：此字段可能返回 null，表示取不到有效值。
   */
  Suggestion: string
  /**
   * 产品字符
注意：此字段可能返回 null，表示取不到有效值。
   */
  ProStr: string
  /**
   * 产品数组
注意：此字段可能返回 null，表示取不到有效值。
   */
  Production: Array<SocProductionItem>
  /**
   * 配置项数组
注意：此字段可能返回 null，表示取不到有效值。
   */
  CheckItems: Array<SocCheckItem>
}

/**
 * SaEventPub返回参数结构体
 */
export interface SaEventPubResponse {
  /**
   * DataSaEventPub
   */
  DataSaEventPub?: ObjDataSaEventPub
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
   * 查询过滤参数:(json序列化的结果）
   */
  Params: string
}

/**
 * DescribeLeakDetectionList请求参数结构体
 */
export interface DescribeLeakDetectionListRequest {
  /**
   * 筛选条件
   */
  Filters: Array<Filter>
  /**
   * 每页数量
   */
  Limit: number
  /**
   * 页码
   */
  Page: number
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
 * DescribeSocAlertList请求参数结构体
 */
export interface DescribeSocAlertListRequest {
  /**
   * 页大小
   */
  PageSize: number
  /**
   * 页码
   */
  PageIndex: number
  /**
   * 1:急需关注 2.重保监控 3.全量告警
   */
  Scenes: number
  /**
   * 查询参数
   */
  Filter?: Array<QueryFilter>
  /**
   * 排序参数
   */
  Sorter?: Array<QuerySort>
  /**
   * 是否导出；默认为否，如量级超过1000，则使用单独的导出接口
   */
  ExportFlag?: boolean
}

/**
 * 域名列表
 */
export interface DomainInfo {
  /**
   * 域名
注意：此字段可能返回 null，表示取不到有效值。
   */
  Domain: string
  /**
   * 解析地址
注意：此字段可能返回 null，表示取不到有效值。
   */
  ResolveAddr: Array<string>
  /**
   * 地域
注意：此字段可能返回 null，表示取不到有效值。
   */
  Region: Array<string>
  /**
   * 资产类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  AssetType: Array<string>
  /**
   * 漏洞风险
注意：此字段可能返回 null，表示取不到有效值。
   */
  RiskVulCount: number
  /**
   * 敏感内容
注意：此字段可能返回 null，表示取不到有效值。
   */
  SensitiveCount: number
  /**
   * 挂马暗链
注意：此字段可能返回 null，表示取不到有效值。
   */
  HorseLinkCount: number
  /**
   * 网页篡改
   */
  WebModifyCount: number
  /**
   * 上次扫描时间
   */
  ScanTime: string
  /**
   * 最近发现时间
   */
  DiscoverTime: string
  /**
   * 扫描次数
   */
  ScanTaskCount: number
  /**
   * 端口
   */
  PortRisk: number
  /**
   * 弱口令
   */
  WeekPwdCount: number
  /**
   * 资产归属
注意：此字段可能返回 null，表示取不到有效值。
   */
  AssetLocation: string
  /**
   * 网络风险
注意：此字段可能返回 null，表示取不到有效值。
   */
  NetworkRisk: number
  /**
   * 网络攻击
注意：此字段可能返回 null，表示取不到有效值。
   */
  NetworkAttack: number
  /**
   * bot访问
注意：此字段可能返回 null，表示取不到有效值。
   */
  BotVisit: number
  /**
   * 网络访问

注意：此字段可能返回 null，表示取不到有效值。
   */
  NetworkAccess: number
  /**
   * 资产创建时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  CreateTime: string
  /**
   * waf状态
注意：此字段可能返回 null，表示取不到有效值。
   */
  WafStatus: number
  /**
   * 最近扫描时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  LastScanTime: string
  /**
   * 资产id
注意：此字段可能返回 null，表示取不到有效值。
   */
  AssetId: Array<string>
  /**
   * 资产名
注意：此字段可能返回 null，表示取不到有效值。
   */
  AssetName: Array<string>
  /**
   * 类别
注意：此字段可能返回 null，表示取不到有效值。
   */
  SourceType: string
  /**
   * 是否核心资产
注意：此字段可能返回 null，表示取不到有效值。
   */
  IsNotCore: number
  /**
   * 是否云外资产
注意：此字段可能返回 null，表示取不到有效值。
   */
  IsCloud: number
}

/**
 * DescribeConfigList请求参数结构体
 */
export interface DescribeConfigListRequest {
  /**
   * 搜索过滤条件
   */
  Filter?: string
}

/**
 * DescribeComplianceDetail返回参数结构体
 */
export interface DescribeComplianceDetailResponse {
  /**
   * 合规管理检查项详情
   */
  CheckConfigDetail?: ComplianceCheckDetail
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * SocCheckItem类型
 */
export interface SocCheckItem {
  /**
   * 名字
注意：此字段可能返回 null，表示取不到有效值。
   */
  Name: string
  /**
   * 唯一id
注意：此字段可能返回 null，表示取不到有效值。
   */
  LevelId: string
  /**
   * 成功数
注意：此字段可能返回 null，表示取不到有效值。
   */
  SuccessCount: number
  /**
   * 失败数
注意：此字段可能返回 null，表示取不到有效值。
   */
  FailCount: number
}

/**
 * SaDivulgeScanRuleMutate请求参数结构体
 */
export interface SaDivulgeScanRuleMutateRequest {
  /**
   * Id
   */
  Id: string
  /**
   * DivulgeSoure
   */
  DivulgeSoure: string
  /**
   * DivulgeSoureUrl
   */
  DivulgeSoureUrl: string
  /**
   * RuleName
   */
  RuleName: string
  /**
   * RuleWord
   */
  RuleWord: string
  /**
   * ScanStatus
   */
  ScanStatus: string
  /**
   * DivulgeType
   */
  DivulgeType?: string
  /**
   * RepairAdvice
   */
  RepairAdvice?: string
}

/**
 * 标签
 */
export interface Tag {
  /**
   * 数据库标识
   */
  Fid?: number
  /**
   * 标签名称字段
   */
  Fname?: string
}

/**
 * DescribeAssetDetailList请求参数结构体
 */
export interface DescribeAssetDetailListRequest {
  /**
   * 查询条件，可支持的查询字段：AssetUniqid,AssetName,AssetIpAll,AssetVpcid,Tag
   */
  Filter?: Array<AssetQueryFilter>
  /**
   * 排序条件，可支持的排序字段：
AssetCspmRiskNum,AssetVulNum,AssetEventNum,SsaAssetDiscoverTime
   */
  Sorter?: Array<QuerySort>
  /**
   * 风险标签
   */
  RiskTags?: Array<string>
  /**
   * 标签
   */
  Tags?: Array<string>
  /**
   * 页
   */
  PageIndex?: number
  /**
   * 页大小
   */
  PageSize?: number
}

/**
 * 告警详情
 */
export interface AlertDetail {
  /**
   * 告警基础信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  BaseInfo: AlertType
  /**
   * 告警详情，json序列化
注意：此字段可能返回 null，表示取不到有效值。
   */
  Detail: string
}

/**
 * DescribeMappingResults返回参数结构体
 */
export interface DescribeMappingResultsResponse {
  /**
   * 总记录数
注意：此字段可能返回 null，表示取不到有效值。
   */
  Total: number
  /**
   * 列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  Data: Results
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 漏洞管理漏洞数据
 */
export interface VulItem {
  /**
   * 标识
   */
  Id: string
  /**
   * 漏洞名称
   */
  VulName: string
  /**
   * 漏洞类型
   */
  Type: number
  /**
   * 风险等级
   */
  Level: number
  /**
   * 处理状态
   */
  Status: number
  /**
   * 发现时间
   */
  Time: string
  /**
   * 影响资产数
   */
  ImpactAssetNum: number
  /**
   * 影响资产id
   */
  ImpactAsset: string
  /**
   * 影响资产名称
   */
  ImpactAssetName: string
  /**
   * 漏洞描述
   */
  VulDetail: string
  /**
   * 参考链接
   */
  VulRefLink: string
  /**
   * Md5值
   */
  OldIdMd5: string
  /**
   * 漏洞唯一标识
   */
  UniqId: string
  /**
   * 忽略时间
   */
  OperateTime: string
  /**
   * 受影响资产是否下线
注意：此字段可能返回 null，表示取不到有效值。
   */
  IsAssetDeleted: string
  /**
   * 漏洞首次发现时间
   */
  DiscoverTime: string
  /**
   * 主机源信息标识符
   */
  OriginId: number
  /**
   * 资产区域
注意：此字段可能返回 null，表示取不到有效值。
   */
  Region: string
  /**
   * 资产所属网络
注意：此字段可能返回 null，表示取不到有效值。
   */
  Vpcid: string
  /**
   * 资产类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  AssetType: string
  /**
   * 资产子类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  AssetSubType: string
  /**
   * 资产IP
注意：此字段可能返回 null，表示取不到有效值。
   */
  AssetIpAll: Array<string>
  /**
   * cvm类型的公网ip
注意：此字段可能返回 null，表示取不到有效值。
   */
  PublicIpAddresses: Array<string>
  /**
   * cvm类型的内网ip
注意：此字段可能返回 null，表示取不到有效值。
   */
  PrivateIpAddresses: Array<string>
  /**
   * 漏洞来源
注意：此字段可能返回 null，表示取不到有效值。
   */
  VulSource: string
  /**
   * 影响URL
注意：此字段可能返回 null，表示取不到有效值。
   */
  AffectedUrl: string
  /**
   * 资产归属
注意：此字段可能返回 null，表示取不到有效值。
   */
  SsaAssetCategory: number
  /**
   * 影响url
注意：此字段可能返回 null，表示取不到有效值。
   */
  VulUrl: string
  /**
   * 是否扫描
注意：此字段可能返回 null，表示取不到有效值。
   */
  IsOpen: boolean
  /**
   * 御知主机id
注意：此字段可能返回 null，表示取不到有效值。
   */
  YzHostId: number
  /**
   * 漏洞描述
注意：此字段可能返回 null，表示取不到有效值。
   */
  VulRepairPlan: string
  /**
   * 漏洞文件路径
注意：此字段可能返回 null，表示取不到有效值。
   */
  VulPath: string
}

/**
 * DescribeCheckConfigAssetList请求参数结构体
 */
export interface DescribeCheckConfigAssetListRequest {
  /**
   * 检查项UUID
   */
  Id: string
  /**
   * 页码
   */
  Offset: number
  /**
   * 每页列表数
   */
  Limit: number
  /**
   * db搜索条件
   */
  Search?: Array<Filter>
  /**
   * ES过滤条件
   */
  Filter?: Array<Filter>
}

/**
 * DescribeSocCheckResultList返回参数结构体
 */
export interface DescribeSocCheckResultListResponse {
  /**
   * 无
注意：此字段可能返回 null，表示取不到有效值。
   */
  Data: DescribeSocCheckResultListRspRsp
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeCheckConfigDetail请求参数结构体
 */
export interface DescribeCheckConfigDetailRequest {
  /**
   * 检查项ID
   */
  Id: string
}

/**
 * DescribeAssetList请求参数结构体
 */
export interface DescribeAssetListRequest {
  /**
   * 查询过滤参数
   */
  Params: string
}

/**
 * DescribeComplianceAssetList请求参数结构体
 */
export interface DescribeComplianceAssetListRequest {
  /**
   * 页码
   */
  Offset: number
  /**
   * 每页数量
   */
  Limit: number
  /**
   * 检查项uuid
   */
  Id: string
  /**
   * 过滤条件
   */
  Filter?: Array<Filter>
  /**
   * 查询条件
   */
  Search?: Array<Filter>
}

/**
 * DescribeEventDetail返回参数结构体
 */
export interface DescribeEventDetailResponse {
  /**
   * 事件详情
   */
  Data?: string
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 资产查询过滤参数
 */
export interface AssetQueryFilter {
  /**
   * 查询参数
   */
  Filter?: Array<QueryFilter>
  /**
   * 查询连接符，1 and  ，2 or
   */
  Logic?: number
}

/**
 * 等保资产组记录
 */
export interface ComplianceCheckDetail {
  /**
   * 检查项ID
   */
  Id: string
  /**
   * 检查项类别
   */
  Category: string
  /**
   * 检查项类型
   */
  Type: string
  /**
   * 不通过总数
   */
  ErrorCount: number
  /**
   * 检查项英文名
   */
  NameEn: string
  /**
   * 检查项名称
   */
  CheckName: string
  /**
   * 检查项处置方式
   */
  Method: string
  /**
   * 帮助文档
   */
  Doc: string
  /**
   * 通过总数
   */
  SafeCount: number
  /**
   * 检查项检查内容
   */
  Content: string
  /**
   * 是否通过检测
   */
  IsPass: number
  /**
   * 忽略总数
   */
  IgnoreCount: number
  /**
   * 风险总数
   */
  RiskCount: number
  /**
   * 最近一次检测时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  LastCheckTime: string
  /**
   * 资产组类型
   */
  AssetType: string
  /**
   * res_count
   */
  ResCount: number
  /**
   * 检查项UUID
   */
  UUID: string
  /**
   * 标准项
注意：此字段可能返回 null，表示取不到有效值。
   */
  StandardItem: string
  /**
   * 章节
注意：此字段可能返回 null，表示取不到有效值。
   */
  Chapter: string
  /**
   * 资产类型描述
注意：此字段可能返回 null，表示取不到有效值。
   */
  AssetTypeDesc: string
  /**
   * 是否忽略
注意：此字段可能返回 null，表示取不到有效值。
   */
  IsIgnore?: number
  /**
   * 风险项
注意：此字段可能返回 null，表示取不到有效值。
   */
  RiskItem?: string
  /**
   * 合规检查项完整名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  Title?: string
}

/**
 * DescribeMappingResults请求参数结构体
 */
export interface DescribeMappingResultsRequest {
  /**
   * 过滤条件，FilterKey 取值范围：AssetId，AssetIp，PrivateIp，Protocol，Service，OS，Process，Component，AssetType，Domain，Port，LastMappingTime，MappingType，Disposal，Vpc
   */
  Filter?: Array<AssetQueryFilter>
  /**
   * 排序条件，SortKey取值范围：CreateTime，LastMappingTime
   */
  Sorter?: Array<QuerySort>
  /**
   * 页码
   */
  PageIndex?: number
  /**
   * 页大小，默认大小20
   */
  PageSize?: number
}

/**
 * 资产列表
 */
export interface AssetList {
  /**
   * 总数
   */
  Total: number
  /**
   * 资产数组
   */
  List: Array<Asset>
}

/**
 * 漏洞管理漏洞列表
 */
export interface VulList {
  /**
   * 列表
   */
  List: Array<VulItem>
  /**
   * 总数
   */
  Total: number
}

/**
 * 云安全配置检查项列表
 */
export interface DescribeSocCheckItemListRspRsp {
  /**
   * 检查项详情列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  List: Array<SocCheckItemV1>
  /**
   * 检查项总数
注意：此字段可能返回 null，表示取不到有效值。
   */
  Total: number
}

/**
 * DescribeDomainList返回参数结构体
 */
export interface DescribeDomainListResponse {
  /**
   * 无
   */
  Total?: number
  /**
   * 无
   */
  DomainInfoCollection?: Array<DomainInfo>
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 合规检查项详情对象
 */
export interface DataCompliance {
  /**
   * 等保唯一标识符
   */
  Id: string
  /**
   * 检查项唯一标识符
   */
  CheckItemId: string
  /**
   * 检查项名称
   */
  Name: string
  /**
   * 检查项资产类型
   */
  AssetType: string
  /**
   * 检查项类型
   */
  Type: string
  /**
   * 检查项类别
   */
  Category: string
  /**
   * 检查项标准项
   */
  StandardItem: string
  /**
   * 检查项章节号
   */
  Chapter: string
  /**
   * 最近一次检查时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  LastCheckTime: string
  /**
   * 初始未检测状态0, 已通过为1，未通过为2
注意：此字段可能返回 null，表示取不到有效值。
   */
  Status: number
  /**
   * 有风险的资源总数，未通过数量
注意：此字段可能返回 null，表示取不到有效值。
   */
  RiskCount: number
  /**
   * 0-检测中,1-结束检测
注意：此字段可能返回 null，表示取不到有效值。
   */
  IsChecked: number
  /**
   * 检查项风险项
注意：此字段可能返回 null，表示取不到有效值。
   */
  RiskItem: string
  /**
   * 0-未忽略,1-已忽略
注意：此字段可能返回 null，表示取不到有效值。
   */
  IsIgnored: number
  /**
   * 等保检查项完整名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  Title: string
  /**
   * 资产总数
注意：此字段可能返回 null，表示取不到有效值。
   */
  AssetTotal: number
  /**
   * 忽略内容
注意：此字段可能返回 null，表示取不到有效值。
   */
  Remarks: string
}

/**
 * DescribeSocCspmCompliance请求参数结构体
 */
export type DescribeSocCspmComplianceRequest = null

/**
 * 排序的字段
 */
export interface QuerySort {
  /**
   * 排序字段
   */
  SortKey: string
  /**
   * 顺序，1升序2降序
   */
  SortType: number
}

/**
 * 测绘记录
 */
export interface MappingResult {
  /**
   * 资产名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  AssetName: string
  /**
   * 公网ip
注意：此字段可能返回 null，表示取不到有效值。
   */
  AssetIp: string
  /**
   * 内网ip
注意：此字段可能返回 null，表示取不到有效值。
   */
  PrivateIp: string
  /**
   * 资产id
注意：此字段可能返回 null，表示取不到有效值。
   */
  AssetId: string
  /**
   * 协议
注意：此字段可能返回 null，表示取不到有效值。
   */
  Protocol: string
  /**
   * 端口
注意：此字段可能返回 null，表示取不到有效值。
   */
  Port: string
  /**
   * 服务
注意：此字段可能返回 null，表示取不到有效值。
   */
  Service: string
  /**
   * 组件
注意：此字段可能返回 null，表示取不到有效值。
   */
  Component: string
  /**
   * 进程
注意：此字段可能返回 null，表示取不到有效值。
   */
  Process: string
  /**
   * 操作系统
注意：此字段可能返回 null，表示取不到有效值。
   */
  OS: string
  /**
   * 测绘时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  LastMappingTime: string
  /**
   * 处置建议
注意：此字段可能返回 null，表示取不到有效值。
   */
  DisposalRecommendations: string
  /**
   * 处置建议详情
注意：此字段可能返回 null，表示取不到有效值。
   */
  DisposalRecommendationDetails: string
  /**
   * 资产类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  AssetType: string
  /**
   * 域名
注意：此字段可能返回 null，表示取不到有效值。
   */
  Domain: string
  /**
   * 测绘状态
注意：此字段可能返回 null，表示取不到有效值。
   */
  MappingStatus: number
  /**
   * 区域
注意：此字段可能返回 null，表示取不到有效值。
   */
  Region: string
  /**
   * 安全防护状态
注意：此字段可能返回 null，表示取不到有效值。
   */
  SecurityStatus: Array<SecurityStatus>
  /**
   * 处置建议
注意：此字段可能返回 null，表示取不到有效值。
   */
  DisposalRecommendation?: number
  /**
   * 测绘类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  MappingType?: string
}

/**
 * DescribeComplianceList返回参数结构体
 */
export interface DescribeComplianceListResponse {
  /**
   * 检查项列表
   */
  Data?: Array<DataCompliance>
  /**
   * 总检查资产数
注意：此字段可能返回 null，表示取不到有效值。
   */
  AssetTotalNum?: number
  /**
   * 总检查项
注意：此字段可能返回 null，表示取不到有效值。
   */
  ConfigTotalNum?: number
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeSocAlertDetails返回参数结构体
 */
export interface DescribeSocAlertDetailsResponse {
  /**
   * 返回详情数据
注意：此字段可能返回 null，表示取不到有效值。
   */
  Data: AlertDetail
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 云安全配置检测结果
 */
export interface SocCheckResult {
  /**
   * 检查项的uuid
   */
  CheckId: string
  /**
   * 配置要求
   */
  Name: string
  /**
   * 检查项的类型
   */
  Type: string
  /**
   * 检查对象
   */
  AssetType: string
  /**
   * 策略名
   */
  PloyName: string
  /**
   * 策略id
   */
  PloyId: number
  /**
   * 正常,低危,中危,高危
   */
  Result: string
  /**
   * 不符合数
   */
  FailAssetNum: number
  /**
   * 总数
   */
  TotalAssetNum: number
  /**
   * 处置建议url链接
   */
  DealUrl: string
}

/**
 * 告警列表响应数据
 */
export interface AlertListData {
  /**
   * 总数
注意：此字段可能返回 null，表示取不到有效值。
   */
  Total: number
  /**
   * 返回列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  AlertList: Array<AlertType>
  /**
   * 聚合参数
注意：此字段可能返回 null，表示取不到有效值。
   */
  Aggregations?: AlertListAggregations
}

/**
 * 安全放回状态
 */
export type SecurityStatus = null

/**
 * DescribeSocCheckResultList请求参数结构体
 */
export interface DescribeSocCheckResultListRequest {
  /**
   * 查询参数,可支持的查询参数：
Name,Type,AssetType,Result,PloyName,PloyId
   */
  Filter?: Array<QueryFilter>
  /**
   * 排序参数,可支持的排序参数：CheckStatus,RiskCount
   */
  Sorter?: Array<QuerySort>
  /**
   * 当前页码数据，默认值为10
   */
  PageSize?: number
  /**
   * 当前页面索引，默认值为0
   */
  PageIndex?: number
  /**
   * 资产id
   */
  AssetId?: string
}

/**
 * DescribeSocAlertDetails请求参数结构体
 */
export interface DescribeSocAlertDetailsRequest {
  /**
   * 告警id
   */
  AlertId: string
  /**
   * 告警时间，取Timestamp字段
   */
  AlertTimestamp?: string
}

/**
 * SaDivulgeScanRuleMutate返回参数结构体
 */
export interface SaDivulgeScanRuleMutateResponse {
  /**
   * Data
   */
  Data?: SaDivulgeScanRuleSetList
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeSocCspmCompliance返回参数结构体
 */
export interface DescribeSocCspmComplianceResponse {
  /**
   * 数据
注意：此字段可能返回 null，表示取不到有效值。
   */
  Data: SocComplianceInfoResp
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeSocCheckItemList请求参数结构体
 */
export interface DescribeSocCheckItemListRequest {
  /**
   * 查询参数,可支持的排序字段:Name,Type,AssetType,Level,Standard,IsFree
   */
  Filter?: Array<QueryFilter>
  /**
   * 排序参数:无
   */
  Sorter?: Array<QuerySort>
  /**
   * 当前页码数据，默认值为10
   */
  PageSize?: number
  /**
   * 当前页面索引，默认值为0
   */
  PageIndex?: number
}

/**
 * 描述键值对过滤器，用于条件过滤查询。例如过滤ID、名称、状态等

若存在多个Filter时，Filter间的关系为逻辑与（AND）关系。
若同一个Filter存在多个Values，同一Filter下Values间的关系为逻辑或（OR）关系。
 */
export interface Filter {
  /**
   * 过滤键的名称。
   */
  Name?: string
  /**
   * 一个或者多个过滤值。
   */
  Values?: Array<string>
  /**
   * 是否需要精确匹配
   */
  ExactMatch?: boolean
}

/**
 * 用户威胁告警信息
 */
export interface AlarmInfoRsp {
  /**
   * 近7天威胁告警
注意：此字段可能返回 null，表示取不到有效值。
   */
  AttackEvent?: Array<AttackEvent>
}

/**
 * 设置_泄露监测产品监测扫描规则策略
 */
export interface SaDivulgeScanRuleSetList {
  /**
   * Value
   */
  Value: string
  /**
   * Code
   */
  Code: number
  /**
   * Message
   */
  Message: string
}

/**
 * 检查项相关信息
 */
export interface SocCheckItemV1 {
  /**
   * 检查项id
注意：此字段可能返回 null，表示取不到有效值。
   */
  CheckId: string
  /**
   * 配置要求
注意：此字段可能返回 null，表示取不到有效值。
   */
  Name: string
  /**
   * 检查项类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  Type: string
  /**
   * 检查对象
注意：此字段可能返回 null，表示取不到有效值。
   */
  AssetType: string
  /**
   * 默认风险等级 2:低危 3:中危 4:高危
注意：此字段可能返回 null，表示取不到有效值。
   */
  Level: number
  /**
   * 相关规范
注意：此字段可能返回 null，表示取不到有效值。
   */
  Standard: string
  /**
   * 检查项是否付费 1:免费 2:付费
注意：此字段可能返回 null，表示取不到有效值。
   */
  IsFree?: number
}

/**
 * 检查项资产组每一项
 */
export interface CheckAssetItem {
  /**
   * 检查项下资产组ID
   */
  Id: number
  /**
   * 资产组实例id
   */
  Instid: string
  /**
   * 处置跳转URL
   */
  Url: string
  /**
   * 检查任务id
   */
  Taskid: string
  /**
   * 检查结果
   */
  Result: number
  /**
   * 更新时间
   */
  Updatetime: string
  /**
   * 标签
注意：此字段可能返回 null，表示取不到有效值。
   */
  Tag: string
  /**
   * 是否忽略
   */
  IsIgnore: number
  /**
   * 检查状态
   */
  IsChecked: number
  /**
   * 资产组信息
   */
  AssetInfo: string
  /**
   * 资产组ES的_id
   */
  AssetId: string
  /**
   * 详情
   */
  Detail?: string
  /**
   * 备注内容
   */
  Remarks?: string
}

/**
 * DescribeComplianceDetail请求参数结构体
 */
export interface DescribeComplianceDetailRequest {
  /**
   * 检查项uuid
   */
  Id: string
}

/**
 * 资产详情信息
 */
export interface AssetDetail {
  /**
   * 资产类型
   */
  AssetType: string
  /**
   * 名字
   */
  Name: string
  /**
   * 区域
   */
  Region: string
  /**
   * 所属网络
   */
  VpcId: string
  /**
   * 主机类型
   */
  InstanceType: string
  /**
   * 主机状态
   */
  InstanceState: string
  /**
   * 主机IP-公网
   */
  PublicIpAddresses: Array<string>
  /**
   * 引擎版本
   */
  EngineVersion: string
  /**
   * 标识
   */
  Id: string
  /**
   * 标签
   */
  Tag: Array<Tag>
  /**
   * 内网IP地址
注意：此字段可能返回 null，表示取不到有效值。
   */
  Vip: string
  /**
   * 状态
注意：此字段可能返回 null，表示取不到有效值。
   */
  Status: number
  /**
   * 负载均衡示例的vip列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  LoadBalancerVips: Array<string>
  /**
   * 账号ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  Uin: number
  /**
   * 创建时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  CreationDate: string
  /**
   * 访问域名
注意：此字段可能返回 null，表示取不到有效值。
   */
  Domain: string
  /**
   * 资产唯一id
   */
  AssetUniqid: string
  /**
   * 关联实例
注意：此字段可能返回 null，表示取不到有效值。
   */
  InstanceId: string
  /**
   * 配置硬盘类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  DiskType: string
  /**
   * 配置硬盘大小
注意：此字段可能返回 null，表示取不到有效值。
   */
  DiskSize: number
  /**
   * 云硬盘/证书状态
注意：此字段可能返回 null，表示取不到有效值。
   */
  AssetStatus: string
  /**
   * 证书类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  CertType: string
  /**
   * 所属项目
注意：此字段可能返回 null，表示取不到有效值。
   */
  ProjectName: string
  /**
   * 到期时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  CertEndTime: string
  /**
   * nosql引擎/版本
注意：此字段可能返回 null，表示取不到有效值。
   */
  ProductType: number
  /**
   * 主机IP-内网
   */
  PrivateIpAddresses: Array<string>
  /**
   * 证书有效期
注意：此字段可能返回 null，表示取不到有效值。
   */
  ValidityPeriod: string
  /**
   * 分组名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  GroupName: string
  /**
   * 端口服务数组
注意：此字段可能返回 null，表示取不到有效值。
   */
  Port: Array<string>
  /**
   * 配置风险数组
注意：此字段可能返回 null，表示取不到有效值。
   */
  RiskConfig: Array<string>
  /**
   * 相关待处理事件
注意：此字段可能返回 null，表示取不到有效值。
   */
  Event: string
  /**
   * 相关待处理漏洞
注意：此字段可能返回 null，表示取不到有效值。
   */
  Vul: string
  /**
   * 资产发现时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  SsaAssetDiscoverTime: string
  /**
   * 所属子网
注意：此字段可能返回 null，表示取不到有效值。
   */
  AssetSubnetId: string
  /**
   * 子网名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  AssetSubnetName: string
  /**
   * vpc名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  AssetVpcName: string
  /**
   * 集群类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  ClusterType: number
  /**
   * 命名空间
注意：此字段可能返回 null，表示取不到有效值。
   */
  NameSpace: string
  /**
   * 创建时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  AssetCreateTime: string
  /**
   * 负载均衡网络类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  LoadBalancerType: string
  /**
   * ipv6信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  AssetIpv6: Array<string>
  /**
   * ssh风险
注意：此字段可能返回 null，表示取不到有效值。
   */
  SSHRisk: string
  /**
   * rdp风险
注意：此字段可能返回 null，表示取不到有效值。
   */
  RDPRisk: string
  /**
   * 安全事件风险
注意：此字段可能返回 null，表示取不到有效值。
   */
  EventRisk: string
  /**
   * 漏洞数量
注意：此字段可能返回 null，表示取不到有效值。
   */
  AssetVulNum: number
  /**
   * 资产事件
注意：此字段可能返回 null，表示取不到有效值。
   */
  AssetEventNum?: number
  /**
   * cspm风险
注意：此字段可能返回 null，表示取不到有效值。
   */
  AssetCspmRiskNum?: number
  /**
   * 资产删除时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  SsaAssetDeleteTime?: string
  /**
   * 费用类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  ChargeType?: string
  /**
   * 地域
注意：此字段可能返回 null，表示取不到有效值。
   */
  AssetRegionName?: string
  /**
   * vpc信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  AssetVpcid?: string
}

/**
 * soc产品购买信息
 */
export interface SocProductionItem {
  /**
   * 名字
注意：此字段可能返回 null，表示取不到有效值。
   */
  Name: string
  /**
   * 标识
注意：此字段可能返回 null，表示取不到有效值。
   */
  Index: number
  /**
   * 状态
注意：此字段可能返回 null，表示取不到有效值。
   */
  Status: number
}

/**
 * 返回结构
 */
export interface SocComplianceInfoResp {
  /**
   * 合格项
注意：此字段可能返回 null，表示取不到有效值。
   */
  Items: Array<SocComplianceItem>
}

/**
 * DescribeVulList返回参数结构体
 */
export interface DescribeVulListResponse {
  /**
   * 漏洞列表
   */
  Data?: VulList
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeComplianceAssetList返回参数结构体
 */
export interface DescribeComplianceAssetListResponse {
  /**
   * 资产组列表
   */
  CheckAssetsList?: Array<CheckAssetItem>
  /**
   * 资产组列表总数
   */
  Total?: number
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 检查项详情对象
 */
export interface DataCheck {
  /**
   * 检查项唯一标识符uuid
   */
  Id: string
  /**
   * 检查项名称
   */
  Name: string
  /**
   * 检查项类型
   */
  Type: string
  /**
   * 最近一次检查时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  LastCheckTime: string
  /**
   * 初始未检测状态0, 已通过为1，未通过为2
注意：此字段可能返回 null，表示取不到有效值。
   */
  Status: number
  /**
   * 0-未忽略,1-已忽略
注意：此字段可能返回 null，表示取不到有效值。
   */
  IsIgnored: number
  /**
   * 有风险的资源总数，未通过数量
注意：此字段可能返回 null，表示取不到有效值。
   */
  RiskCount: number
  /**
   * 0-检测中,1-结束检测
注意：此字段可能返回 null，表示取不到有效值。
   */
  IsChecked: number
  /**
   * 总资产数
注意：此字段可能返回 null，表示取不到有效值。
   */
  AssetTotal: number
  /**
   * 备注内容
注意：此字段可能返回 null，表示取不到有效值。
   */
  Remarks: string
}

/**
 * DescribeAlarmStat请求参数结构体
 */
export interface DescribeAlarmStatRequest {
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
 * DescribeDomainList请求参数结构体
 */
export interface DescribeDomainListRequest {
  /**
   * 起始，从0开始(只支持32位)
   */
  Offset?: number
  /**
   * limit,最大值200(只支持32位)
   */
  Limit?: number
  /**
   * 资产大类，根据此字段时返回不同的子结构,AssetBasicType(只支持32位)
   */
  AssetBasicType?: number
  /**
   * 过滤条件
   */
  Filter?: Array<QueryFilterV3>
  /**
   * 排序
   */
  Order?: string
  /**
   * 排序字段
   */
  By?: string
  /**
   * 导出字段
   */
  Field?: Array<string>
  /**
   * 时间范围(只支持32位)
   */
  TimeRange?: number
  /**
   * 逻辑字段(只支持32位)
   */
  Logic?: number
  /**
   * 聚合字段
   */
  GroupByField?: string
  /**
   * -
   */
  Task?: string
  /**
   * 0:cfw 1:vss 2.soc 3.waf 4.cwp
   */
  RequestFrom?: number
}

/**
 * 云安全配置检查项详情
 */
export interface CheckConfigDetail {
  /**
   * 检查项Id
   */
  Id: string
  /**
   * 检查项名称
   */
  CheckName: string
  /**
   * 检查项内容
   */
  Content: string
  /**
   * 检查项处置方案
   */
  Method: string
  /**
   * 检查项帮助文档
   */
  Doc: string
  /**
   * 未通过总数
   */
  ErrorCount: number
  /**
   * 是否通过检查
   */
  IsPass: number
  /**
   * 通过检查项
   */
  SafeCount: number
  /**
   * 忽略检查项
   */
  IgnoreCount: number
  /**
   * 风险检查项
   */
  RiskCount: number
  /**
   * 检查项英文
   */
  NameEn: string
  /**
   * 检查项类型
   */
  AssetType: string
  /**
   * res_count
   */
  ResCount: number
  /**
   * 是否忽略
   */
  IsIgnore: number
}

/**
 * DescribeComplianceList请求参数结构体
 */
export interface DescribeComplianceListRequest {
  /**
   * 搜索过滤条件
   */
  Filter?: string
}

/**
 * 空Aggregations结构体
 */
export interface AlertListAggregations {
  /**
   * 名字
注意：此字段可能返回 null，表示取不到有效值。
   */
  Name?: string
  /**
   * 值
注意：此字段可能返回 null，表示取不到有效值。
   */
  Value?: string
}

/**
 * 告警字段
 */
export interface AlertType {
  /**
   * 标准时间格式
注意：此字段可能返回 null，表示取不到有效值。
   */
  AlertTime: string
  /**
   * 唯一id
注意：此字段可能返回 null，表示取不到有效值。
   */
  AlertId: string
  /**
   * 资产id
注意：此字段可能返回 null，表示取不到有效值。
   */
  AssetId: string
  /**
   * 内网ip
注意：此字段可能返回 null，表示取不到有效值。
   */
  AssetPrivateIp: Array<string>
  /**
   * 名字
注意：此字段可能返回 null，表示取不到有效值。
   */
  AlertName: string
  /**
   * 告警级别  0:未知 1:低危 2:中危 3:高危 4:严重
注意：此字段可能返回 null，表示取不到有效值。
   */
  Level: number
  /**
   * 类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  Type: string
  /**
   * 来源
注意：此字段可能返回 null，表示取不到有效值。
   */
  Source: string
  /**
   * 攻击字段1
注意：此字段可能返回 null，表示取不到有效值。
   */
  AttackChain: string
  /**
   * 攻击字段2
注意：此字段可能返回 null，表示取不到有效值。
   */
  AttackId: string
  /**
   * 关注点
注意：此字段可能返回 null，表示取不到有效值。
   */
  Concerns: Array<ConcernInfo>
  /**
   * 1：已防御，0,2：仅检测(0:告警类 1:拦截类 2:放行类 )
注意：此字段可能返回 null，表示取不到有效值。
   */
  Action: number
  /**
   * 0/空：未知，1：未成功，2：成功
注意：此字段可能返回 null，表示取不到有效值。
   */
  AttackResult: number
  /**
   * //调查状态  0/空：未启用，1：调查中，2：完成调查
注意：此字段可能返回 null，表示取不到有效值。
   */
  EventStatus: number
  /**
   * //关联事件ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  EventId: string
  /**
   * //处置状态  0：未关闭，1：已关闭
注意：此字段可能返回 null，表示取不到有效值。
   */
  Status: number
  /**
   * 资产名
注意：此字段可能返回 null，表示取不到有效值。
   */
  AssetName: string
  /**
   * 恶意实体
注意：此字段可能返回 null，表示取不到有效值。
   */
  ConcernMaliciousCount: number
  /**
   * 受害者实体
注意：此字段可能返回 null，表示取不到有效值。
   */
  ConcernVictimCount: number
  /**
   * 资产类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  VictimAssetType: string
  /**
   * 告警子类
注意：此字段可能返回 null，表示取不到有效值。
   */
  SubType: string
  /**
   * 攻击技术名字
注意：此字段可能返回 null，表示取不到有效值。
   */
  AttackName: string
  /**
   * 外网ip
注意：此字段可能返回 null，表示取不到有效值。
   */
  AssetPublicIp: Array<string>
  /**
   * 攻击战术名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  AttackTactic: string
  /**
   * 资产子网
注意：此字段可能返回 null，表示取不到有效值。
   */
  VictimAssetSub: string
  /**
   * 资产vpc
注意：此字段可能返回 null，表示取不到有效值。
   */
  VictimAssetVpc?: string
  /**
   * 时间戳
注意：此字段可能返回 null，表示取不到有效值。
   */
  Timestamp?: string
  /**
   * 资产组名
注意：此字段可能返回 null，表示取不到有效值。
   */
  AssetGroupName?: Array<string>
  /**
   * 资产项目名
注意：此字段可能返回 null，表示取不到有效值。
   */
  AssetProjectName?: string
  /**
   * 失陷资产内容
注意：此字段可能返回 null，表示取不到有效值。
   */
  VictimAssetContent?: Array<string>
  /**
   * 错误报告状态
注意：此字段可能返回 null，表示取不到有效值。
   */
  WrongReportStatus?: number
  /**
   * 错误报告Id
注意：此字段可能返回 null，表示取不到有效值。
   */
  WrongReportConditionId?: number
}

/**
 * es聚合数据类型
 */
export interface Bucket {
  /**
   * key
   */
  Key: string
  /**
   * 数量
   */
  Count: number
}

/**
 * DescribeLeakDetectionList返回参数结构体
 */
export interface DescribeLeakDetectionListResponse {
  /**
   * 总数
   */
  TotalCount?: number
  /**
   * 数据列表
   */
  List?: Array<string>
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeAssetDetailList返回参数结构体
 */
export interface DescribeAssetDetailListResponse {
  /**
   * 业务数据
注意：此字段可能返回 null，表示取不到有效值。
   */
  Data: Array<AssetDetail>
  /**
   * 总数
注意：此字段可能返回 null，表示取不到有效值。
   */
  Total: number
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeEventDetail请求参数结构体
 */
export interface DescribeEventDetailRequest {
  /**
   * 事件索引名
   */
  Index?: string
  /**
   * 事件id
   */
  Id?: string
  /**
   * 事件来源
   */
  Source?: string
  /**
   * 事件子类型
   */
  SubEventType?: number
  /**
   * 事件名称
   */
  Name?: string
}

/**
 * 资产测绘结果统计
 */
export interface AssetTypeStatistic {
  /**
   * 资产类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  AssetType: string
  /**
   * 统计计数
注意：此字段可能返回 null，表示取不到有效值。
   */
  AssetCount: number
}

/**
 * 检查项结果详情列表
 */
export interface DescribeSocCheckResultListRspRsp {
  /**
   * 具体检查项详情
   */
  List: Array<SocCheckResult>
  /**
   * 检查结果总数
   */
  Total: number
  /**
   * 低危个数
   */
  LowTotal: number
  /**
   * 中危个数
   */
  MiddleTotal: number
  /**
   * 高危个数
   */
  HighTotal: number
  /**
   * 正常个数
   */
  NormalTotal: number
}

/**
 * DescribeVulDetail请求参数结构体
 */
export interface DescribeVulDetailRequest {
  /**
   * 漏洞唯一标识符
   */
  UniqId: string
  /**
   * 查看详情来源
   */
  Source?: string
}

/**
 * 关注点类型
 */
export interface ConcernInfo {
  /**
   * 关注点类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  ConcernType?: number
  /**
   * 实体类型 1: 非云上IP，2: 云上IP，3: 域名，4: IP，5: 文件，6: 进程
注意：此字段可能返回 null，表示取不到有效值。
   */
  EntityType?: number
  /**
   * 关注点
注意：此字段可能返回 null，表示取不到有效值。
   */
  Concern?: string
  /**
   * 最近数量
注意：此字段可能返回 null，表示取不到有效值。
   */
  StatisticsCount?: number
  /**
   * IP国家
注意：此字段可能返回 null，表示取不到有效值。
   */
  IpCountry?: string
  /**
   * IP省份
注意：此字段可能返回 null，表示取不到有效值。
   */
  IpProvince?: string
  /**
   * 结果
注意：此字段可能返回 null，表示取不到有效值。
   */
  Result?: string
  /**
   * 置信度
注意：此字段可能返回 null，表示取不到有效值。
   */
  Confidence?: number
  /**
   * 服务商
注意：此字段可能返回 null，表示取不到有效值。
   */
  IpIsp?: string
  /**
   * 是否基础设施
注意：此字段可能返回 null，表示取不到有效值。
   */
  IpInfrastructure?: string
  /**
   * 威胁类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  ThreatType?: Array<string>
  /**
   * 威胁团伙
注意：此字段可能返回 null，表示取不到有效值。
   */
  Groups?: Array<string>
  /**
   * 状态威胁情报接口
注意：此字段可能返回 null，表示取不到有效值。
   */
  Status?: string
  /**
   * 恶意标签
注意：此字段可能返回 null，表示取不到有效值。
   */
  Tags?: Array<string>
  /**
   * 资产类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  VictimAssetType?: string
  /**
   * 资产名
注意：此字段可能返回 null，表示取不到有效值。
   */
  VictimAssetName?: string
  /**
   * 注册者
注意：此字段可能返回 null，表示取不到有效值。
   */
  DomainRegistrant?: string
  /**
   * 注册机构
注意：此字段可能返回 null，表示取不到有效值。
   */
  DomainRegisteredInstitution?: string
  /**
   * 注册时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  DomainRegistrationTime?: string
  /**
   * 文件名
注意：此字段可能返回 null，表示取不到有效值。
   */
  FileName?: string
  /**
   * MD5
注意：此字段可能返回 null，表示取不到有效值。
   */
  FileMd5?: string
  /**
   * 病毒名
注意：此字段可能返回 null，表示取不到有效值。
   */
  VirusName?: string
  /**
   * 文件路径
注意：此字段可能返回 null，表示取不到有效值。
   */
  FilePath?: string
  /**
   * 文件大小
注意：此字段可能返回 null，表示取不到有效值。
   */
  FileSize?: string
  /**
   * 进程名
注意：此字段可能返回 null，表示取不到有效值。
   */
  ProcName?: string
  /**
   * 进程ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  Pid?: string
  /**
   * 进程路径
注意：此字段可能返回 null，表示取不到有效值。
   */
  ProcPath?: string
  /**
   * 用户名
注意：此字段可能返回 null，表示取不到有效值。
   */
  ProcUser?: string
  /**
   * 已防御
注意：此字段可能返回 null，表示取不到有效值。
   */
  DefendedCount?: number
  /**
   * 仅检测
注意：此字段可能返回 null，表示取不到有效值。
   */
  DetectedCount?: number
  /**
   * 可疑关注点字段
注意：此字段可能返回 null，表示取不到有效值。
   */
  SearchData?: string
  /**
   * 可疑关注点字段
注意：此字段可能返回 null，表示取不到有效值。
   */
  IpCountryIso?: string
  /**
   * 可疑关注点字段
注意：此字段可能返回 null，表示取不到有效值。
   */
  IpProvinceIso?: string
  /**
   * 可疑关注点字段
注意：此字段可能返回 null，表示取不到有效值。
   */
  IpCity?: string
  /**
   * 可疑关注点字段
注意：此字段可能返回 null，表示取不到有效值。
   */
  EventSubType?: string
}

/**
 * 测绘结果
 */
export interface Results {
  /**
   * 测绘类型统计
注意：此字段可能返回 null，表示取不到有效值。
   */
  Statistics: Array<AssetTypeStatistic>
  /**
   * 测绘结果列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  Result: Array<MappingResult>
  /**
   * 测绘任务数
注意：此字段可能返回 null，表示取不到有效值。
   */
  TaskCount: number
  /**
   * 最大测绘任务数
注意：此字段可能返回 null，表示取不到有效值。
   */
  TaskMaxCount: number
}

/**
 * DescribeSocAlertList返回参数结构体
 */
export interface DescribeSocAlertListResponse {
  /**
   * 业务数据
   */
  Data?: AlertListData
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DataSaEventPub
 */
export interface ObjDataSaEventPub {
  /**
   * Count
   */
  Count: number
  /**
   * List
   */
  List: Array<ListDataSaEventPub>
}

/**
 * DescribeAssetDetail返回参数结构体
 */
export interface DescribeAssetDetailResponse {
  /**
   * 资产详情
注意：此字段可能返回 null，表示取不到有效值。
   */
  Data: AssetDetail
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeVulDetail返回参数结构体
 */
export interface DescribeVulDetailResponse {
  /**
   * 漏洞类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  VulType: number
  /**
   * 漏洞子类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  SubVulType: string
  /**
   * cvss分数
注意：此字段可能返回 null，表示取不到有效值。
   */
  CvssScore: string
  /**
   * cvss值
注意：此字段可能返回 null，表示取不到有效值。
   */
  Cvss: string
  /**
   * cve编号
注意：此字段可能返回 null，表示取不到有效值。
   */
  Cve: string
  /**
   * cnvd编号
注意：此字段可能返回 null，表示取不到有效值。
   */
  Cnvd: string
  /**
   * cnnvd编号
注意：此字段可能返回 null，表示取不到有效值。
   */
  Cnnvd: string
  /**
   * 描述
注意：此字段可能返回 null，表示取不到有效值。
   */
  Desc: string
  /**
   * 参考
注意：此字段可能返回 null，表示取不到有效值。
   */
  Reference: string
  /**
   * 修复意见
注意：此字段可能返回 null，表示取不到有效值。
   */
  Repair: string
  /**
   * 披露时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  ReleaseTime: string
  /**
   * 更新时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  UpdateTime: string
  /**
   * 漏洞名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  Name: string
  /**
   * 等级
注意：此字段可能返回 null，表示取不到有效值。
   */
  Level: number
  /**
   * 状态
注意：此字段可能返回 null，表示取不到有效值。
   */
  Status: number
  /**
   * 受影响资产唯一标识
注意：此字段可能返回 null，表示取不到有效值。
   */
  ImpactAsset: string
  /**
   * 受影响资产名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  ImpactAssetName: string
  /**
   * 受影响资产是否已删除
注意：此字段可能返回 null，表示取不到有效值。
   */
  IsAssetDeleted: boolean
  /**
   * 漏洞来源
注意：此字段可能返回 null，表示取不到有效值。
   */
  Source: string
  /**
   * 漏洞URL
注意：此字段可能返回 null，表示取不到有效值。
   */
  VulUrl: string
  /**
   * 资产归属
注意：此字段可能返回 null，表示取不到有效值。
   */
  SsaAssetCategory: number
  /**
   * 资产文件路径
注意：此字段可能返回 null，表示取不到有效值。
   */
  VulPath: string
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}
