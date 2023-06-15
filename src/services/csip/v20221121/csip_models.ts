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
 * DescribeDomainAssets返回参数结构体
 */
export interface DescribeDomainAssetsResponse {
  /**
   * -
注意：此字段可能返回 null，表示取不到有效值。
   */
  Total?: number
  /**
   * -
注意：此字段可能返回 null，表示取不到有效值。
   */
  Data?: Array<DomainAssetVO>
  /**
   * 防护状态列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  DefenseStatusList?: Array<FilterDataObject>
  /**
   * 资产归属地列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  AssetLocationList?: Array<FilterDataObject>
  /**
   * 资产类型列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  SourceTypeList?: Array<FilterDataObject>
  /**
   * 地域列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  RegionList?: Array<FilterDataObject>
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDbAssetInfo返回参数结构体
 */
export interface DescribeDbAssetInfoResponse {
  /**
   * db资产详情
注意：此字段可能返回 null，表示取不到有效值。
   */
  Data?: DbAssetInfo
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDbAssets请求参数结构体
 */
export interface DescribeDbAssetsRequest {
  /**
   * -
   */
  Filter?: Filter
}

/**
 * DescribeScanReportList请求参数结构体
 */
export interface DescribeScanReportListRequest {
  /**
   * 列表过滤条件
   */
  Filter?: Filter
}

/**
 * DescribeRiskCenterAssetViewVULRiskList请求参数结构体
 */
export interface DescribeRiskCenterAssetViewVULRiskListRequest {
  /**
   * 过滤内容
   */
  Filter?: Filter
}

/**
 * CreateDomainAndIp请求参数结构体
 */
export interface CreateDomainAndIpRequest {
  /**
   * -
   */
  Content: Array<string>
}

/**
 * 域名资产
 */
export interface DomainAssetVO {
  /**
   * 资产id
注意：此字段可能返回 null，表示取不到有效值。
   */
  AssetId?: Array<string>
  /**
   * 资产名
注意：此字段可能返回 null，表示取不到有效值。
   */
  AssetName?: Array<string>
  /**
   * 资产类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  AssetType?: Array<string>
  /**
   * 地域
注意：此字段可能返回 null，表示取不到有效值。
   */
  Region?: Array<string>
  /**
   * Waf状态
注意：此字段可能返回 null，表示取不到有效值。
   */
  WAFStatus?: number
  /**
   * 资产创建时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  AssetCreateTime?: string
  /**
   * Appid
注意：此字段可能返回 null，表示取不到有效值。
   */
  AppId?: number
  /**
   * 账号id
注意：此字段可能返回 null，表示取不到有效值。
   */
  Uin?: string
  /**
   * 账号名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  NickName?: string
  /**
   * 是否核心
注意：此字段可能返回 null，表示取不到有效值。
   */
  IsCore?: number
  /**
   * 是否云上资产
注意：此字段可能返回 null，表示取不到有效值。
   */
  IsCloud?: number
  /**
   * 网络攻击
注意：此字段可能返回 null，表示取不到有效值。
   */
  Attack?: number
  /**
   * 网络访问
注意：此字段可能返回 null，表示取不到有效值。
   */
  Access?: number
  /**
   * 网络拦截
注意：此字段可能返回 null，表示取不到有效值。
   */
  Intercept?: number
  /**
   * 入站峰值带宽
注意：此字段可能返回 null，表示取不到有效值。
   */
  InBandwidth?: string
  /**
   * 出站峰值带宽
注意：此字段可能返回 null，表示取不到有效值。
   */
  OutBandwidth?: string
  /**
   * 入站累计流量
注意：此字段可能返回 null，表示取不到有效值。
   */
  InFlow?: string
  /**
   * 出站累计流量
注意：此字段可能返回 null，表示取不到有效值。
   */
  OutFlow?: string
  /**
   * 最近扫描时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  LastScanTime?: string
  /**
   * 端口风险
注意：此字段可能返回 null，表示取不到有效值。
   */
  PortRisk?: number
  /**
   * 漏洞风险
注意：此字段可能返回 null，表示取不到有效值。
   */
  VulnerabilityRisk?: number
  /**
   * 配置风险
注意：此字段可能返回 null，表示取不到有效值。
   */
  ConfigurationRisk?: number
  /**
   * 扫描任务
注意：此字段可能返回 null，表示取不到有效值。
   */
  ScanTask?: number
  /**
   * 域名
注意：此字段可能返回 null，表示取不到有效值。
   */
  SubDomain?: string
  /**
   * 解析ip
注意：此字段可能返回 null，表示取不到有效值。
   */
  SeverIp?: Array<string>
  /**
   * boi访问数量
注意：此字段可能返回 null，表示取不到有效值。
   */
  BotCount?: number
  /**
   * 弱口令风险
注意：此字段可能返回 null，表示取不到有效值。
   */
  WeakPassword?: number
  /**
   * 内容风险
注意：此字段可能返回 null，表示取不到有效值。
   */
  WebContentRisk?: number
  /**
   * tag标签
注意：此字段可能返回 null，表示取不到有效值。
   */
  Tag?: Array<Tag>
  /**
   * 关联实例类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  SourceType?: string
  /**
   * memberiD
注意：此字段可能返回 null，表示取不到有效值。
   */
  MemberId?: string
  /**
   * cc攻击
注意：此字段可能返回 null，表示取不到有效值。
   */
  CCAttack?: number
  /**
   * web攻击
注意：此字段可能返回 null，表示取不到有效值。
   */
  WebAttack?: number
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
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
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
 * 主机资产信息
 */
export interface CVMAssetVO {
  /**
   * 资产id
注意：此字段可能返回 null，表示取不到有效值。
   */
  AssetId?: string
  /**
   * 资产名
注意：此字段可能返回 null，表示取不到有效值。
   */
  AssetName?: string
  /**
   * 资产类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  AssetType?: string
  /**
   * 地域
注意：此字段可能返回 null，表示取不到有效值。
   */
  Region?: string
  /**
   * 防护状态
注意：此字段可能返回 null，表示取不到有效值。
   */
  CWPStatus?: number
  /**
   * 资产创建时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  AssetCreateTime?: string
  /**
   * 公网ip
注意：此字段可能返回 null，表示取不到有效值。
   */
  PublicIp?: string
  /**
   * 私网ip
注意：此字段可能返回 null，表示取不到有效值。
   */
  PrivateIp?: string
  /**
   * vpc id
注意：此字段可能返回 null，表示取不到有效值。
   */
  VpcId?: string
  /**
   * vpc 名
注意：此字段可能返回 null，表示取不到有效值。
   */
  VpcName?: string
  /**
   * appid信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  AppId?: number
  /**
   * 用户uin
注意：此字段可能返回 null，表示取不到有效值。
   */
  Uin?: string
  /**
   * 昵称
注意：此字段可能返回 null，表示取不到有效值。
   */
  NickName?: string
  /**
   * 可用区
注意：此字段可能返回 null，表示取不到有效值。
   */
  AvailableArea?: string
  /**
   * 是否核心
注意：此字段可能返回 null，表示取不到有效值。
   */
  IsCore?: number
  /**
   * 子网id
注意：此字段可能返回 null，表示取不到有效值。
   */
  SubnetId?: string
  /**
   * 子网名
注意：此字段可能返回 null，表示取不到有效值。
   */
  SubnetName?: string
  /**
   * uuid
注意：此字段可能返回 null，表示取不到有效值。
   */
  InstanceUuid?: string
  /**
   * qquid
注意：此字段可能返回 null，表示取不到有效值。
   */
  InstanceQUuid?: string
  /**
   * os名
注意：此字段可能返回 null，表示取不到有效值。
   */
  OsName?: string
  /**
   * 分区
注意：此字段可能返回 null，表示取不到有效值。
   */
  PartitionCount?: number
  /**
   * cpu信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  CPUInfo?: string
  /**
   * cpu大小
注意：此字段可能返回 null，表示取不到有效值。
   */
  CPUSize?: number
  /**
   * cpu负载
注意：此字段可能返回 null，表示取不到有效值。
   */
  CPULoad?: string
  /**
   * 内存大小
注意：此字段可能返回 null，表示取不到有效值。
   */
  MemorySize?: string
  /**
   * 内存负载
注意：此字段可能返回 null，表示取不到有效值。
   */
  MemoryLoad?: string
  /**
   * 硬盘大小
注意：此字段可能返回 null，表示取不到有效值。
   */
  DiskSize?: string
  /**
   * 硬盘负载
注意：此字段可能返回 null，表示取不到有效值。
   */
  DiskLoad?: string
  /**
   * 账号数
注意：此字段可能返回 null，表示取不到有效值。
   */
  AccountCount?: string
  /**
   * 进程数
注意：此字段可能返回 null，表示取不到有效值。
   */
  ProcessCount?: string
  /**
   * 软件应用
注意：此字段可能返回 null，表示取不到有效值。
   */
  AppCount?: string
  /**
   * 监听端口
注意：此字段可能返回 null，表示取不到有效值。
   */
  PortCount?: number
  /**
   * 网络攻击
注意：此字段可能返回 null，表示取不到有效值。
   */
  Attack?: number
  /**
   * 网络访问
注意：此字段可能返回 null，表示取不到有效值。
   */
  Access?: number
  /**
   * 网络拦截
注意：此字段可能返回 null，表示取不到有效值。
   */
  Intercept?: number
  /**
   * 入向峰值带宽
注意：此字段可能返回 null，表示取不到有效值。
   */
  InBandwidth?: string
  /**
   * 出向峰值带宽
注意：此字段可能返回 null，表示取不到有效值。
   */
  OutBandwidth?: string
  /**
   * 入向累计流量
注意：此字段可能返回 null，表示取不到有效值。
   */
  InFlow?: string
  /**
   * 出向累计流量
注意：此字段可能返回 null，表示取不到有效值。
   */
  OutFlow?: string
  /**
   * 最近扫描时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  LastScanTime?: string
  /**
   * 恶意主动外联
注意：此字段可能返回 null，表示取不到有效值。
   */
  NetWorkOut?: number
  /**
   * 端口风险
注意：此字段可能返回 null，表示取不到有效值。
   */
  PortRisk?: number
  /**
   * 漏洞风险
注意：此字段可能返回 null，表示取不到有效值。
   */
  VulnerabilityRisk?: number
  /**
   * 配置风险
注意：此字段可能返回 null，表示取不到有效值。
   */
  ConfigurationRisk?: number
  /**
   * 扫描任务数
注意：此字段可能返回 null，表示取不到有效值。
   */
  ScanTask?: number
  /**
   * 标签
注意：此字段可能返回 null，表示取不到有效值。
   */
  Tag?: Array<Tag>
  /**
   * memberId
注意：此字段可能返回 null，表示取不到有效值。
   */
  MemberId?: string
  /**
   * os全称
注意：此字段可能返回 null，表示取不到有效值。
   */
  Os?: string
  /**
   * 风险服务暴露
注意：此字段可能返回 null，表示取不到有效值。
   */
  RiskExposure?: number
  /**
   * 模拟攻击工具状态。0代表未安装，1代表已安装，2代表已离线
注意：此字段可能返回 null，表示取不到有效值。
   */
  BASAgentStatus?: number
}

/**
 * DescribeScanReportList返回参数结构体
 */
export interface DescribeScanReportListResponse {
  /**
   * 总条数
注意：此字段可能返回 null，表示取不到有效值。
   */
  TotalCount?: number
  /**
   * 任务日志列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  Data?: Array<ScanTaskInfo>
  /**
   * 主账户ID列表
   */
  UINList?: Array<string>
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeClusterPodAssets请求参数结构体
 */
export interface DescribeClusterPodAssetsRequest {
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
   * 过滤参数
   */
  Filter?: Filter
}

/**
 * AddNewBindRoleUser请求参数结构体
 */
export type AddNewBindRoleUserRequest = null

/**
 * DescribeCVMAssetInfo返回参数结构体
 */
export interface DescribeCVMAssetInfoResponse {
  /**
   * -
注意：此字段可能返回 null，表示取不到有效值。
   */
  Data?: AssetBaseInfoResponse
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribePublicIpAssets返回参数结构体
 */
export interface DescribePublicIpAssetsResponse {
  /**
   * 列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  Data?: Array<IpAssetListVO>
  /**
   * 总数
   */
  Total?: number
  /**
   * 资产归属地
注意：此字段可能返回 null，表示取不到有效值。
   */
  AssetLocationList?: Array<FilterDataObject>
  /**
   * ip列表枚举
注意：此字段可能返回 null，表示取不到有效值。
   */
  IpTypeList?: Array<FilterDataObject>
  /**
   * 地域列表枚举
注意：此字段可能返回 null，表示取不到有效值。
   */
  RegionList?: Array<FilterDataObject>
  /**
   * 防护枚举
注意：此字段可能返回 null，表示取不到有效值。
   */
  DefenseStatusList?: Array<FilterDataObject>
  /**
   * 资产类型枚举
注意：此字段可能返回 null，表示取不到有效值。
   */
  AssetTypeList?: Array<FilterDataObject>
  /**
   * AppId枚举
注意：此字段可能返回 null，表示取不到有效值。
   */
  AppIdList?: Array<FilterDataObject>
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
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
注意：此字段可能返回 null，表示取不到有效值。
   */
  Tag?: Array<Tag>
  /**
   * dns域名
注意：此字段可能返回 null，表示取不到有效值。
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
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeCVMAssets请求参数结构体
 */
export interface DescribeCVMAssetsRequest {
  /**
   * -
   */
  Filter?: Filter
}

/**
 * db资产输出字段
 */
export interface DBAssetVO {
  /**
   * 资产id
注意：此字段可能返回 null，表示取不到有效值。
   */
  AssetId?: string
  /**
   * 资产名
注意：此字段可能返回 null，表示取不到有效值。
   */
  AssetName?: string
  /**
   * 资产类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  AssetType?: string
  /**
   * vpcid
注意：此字段可能返回 null，表示取不到有效值。
   */
  VpcId?: string
  /**
   * vpc标签
注意：此字段可能返回 null，表示取不到有效值。
   */
  VpcName?: string
  /**
   * 地域
注意：此字段可能返回 null，表示取不到有效值。
   */
  Region?: string
  /**
   * 域名
注意：此字段可能返回 null，表示取不到有效值。
   */
  Domain?: string
  /**
   * 资产创建时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  AssetCreateTime?: string
  /**
   * 最近扫描时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  LastScanTime?: string
  /**
   * 配置风险
注意：此字段可能返回 null，表示取不到有效值。
   */
  ConfigurationRisk?: number
  /**
   * 网络攻击
注意：此字段可能返回 null，表示取不到有效值。
   */
  Attack?: number
  /**
   * 网络访问
注意：此字段可能返回 null，表示取不到有效值。
   */
  Access?: number
  /**
   * 扫描任务
注意：此字段可能返回 null，表示取不到有效值。
   */
  ScanTask?: number
  /**
   * 用户appid
注意：此字段可能返回 null，表示取不到有效值。
   */
  AppId?: number
  /**
   * 用户uin
注意：此字段可能返回 null，表示取不到有效值。
   */
  Uin?: string
  /**
   * 昵称别名
注意：此字段可能返回 null，表示取不到有效值。
   */
  NickName?: string
  /**
   * 端口
注意：此字段可能返回 null，表示取不到有效值。
   */
  Port?: number
  /**
   * 标签
注意：此字段可能返回 null，表示取不到有效值。
   */
  Tag?: Array<Tag>
  /**
   * 内网ip
注意：此字段可能返回 null，表示取不到有效值。
   */
  PrivateIp?: string
  /**
   * 公网ip
注意：此字段可能返回 null，表示取不到有效值。
   */
  PublicIp?: string
  /**
   * 状态
注意：此字段可能返回 null，表示取不到有效值。
   */
  Status?: number
  /**
   * 是否核心
注意：此字段可能返回 null，表示取不到有效值。
   */
  IsCore?: number
}

/**
 * 扫描任务详情
 */
export interface ScanTaskInfo {
  /**
   * 任务日志Id
注意：此字段可能返回 null，表示取不到有效值。
   */
  TaskId: string
  /**
   * 任务日志名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  TaskName: string
  /**
   * 任务状态码：1等待开始  2正在扫描  3扫描出错 4扫描完成
注意：此字段可能返回 null，表示取不到有效值。
   */
  Status: number
  /**
   * 任务进度
注意：此字段可能返回 null，表示取不到有效值。
   */
  Progress: number
  /**
   * 对应的展示时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  TaskTime: string
  /**
   * 报表id
注意：此字段可能返回 null，表示取不到有效值。
   */
  ReportId: string
  /**
   * 报表名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  ReportName: string
  /**
   * 扫描计划，0-周期任务,1-立即扫描,2-定时扫描,3-自定义
注意：此字段可能返回 null，表示取不到有效值。
   */
  ScanPlan: number
  /**
   * 关联的资产数
注意：此字段可能返回 null，表示取不到有效值。
   */
  AssetCount: number
  /**
   * APP ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  AppId?: string
  /**
   * 用户主账户ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  UIN?: string
  /**
   * 用户名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  UserName?: string
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
注意：此字段可能返回 null，表示取不到有效值。
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
注意：此字段可能返回 null，表示取不到有效值。
   */
  IsCore?: number
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
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
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
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
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
 * DescribeRiskCenterAssetViewPortRiskList请求参数结构体
 */
export interface DescribeRiskCenterAssetViewPortRiskListRequest {
  /**
   * 过滤内容
   */
  Filter?: Filter
}

/**
 * DescribeCVMAssets返回参数结构体
 */
export interface DescribeCVMAssetsResponse {
  /**
   * -
注意：此字段可能返回 null，表示取不到有效值。
   */
  Total?: number
  /**
   * -
注意：此字段可能返回 null，表示取不到有效值。
   */
  Data?: Array<CVMAssetVO>
  /**
   * 地域列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  RegionList?: Array<FilterDataObject>
  /**
   * 防护状态
注意：此字段可能返回 null，表示取不到有效值。
   */
  DefenseStatusList?: Array<FilterDataObject>
  /**
   * vpc枚举
注意：此字段可能返回 null，表示取不到有效值。
   */
  VpcList?: Array<FilterDataObject>
  /**
   * 资产类型枚举
注意：此字段可能返回 null，表示取不到有效值。
   */
  AssetTypeList?: Array<FilterDataObject>
  /**
   * 操作系统枚举
注意：此字段可能返回 null，表示取不到有效值。
   */
  SystemTypeList?: Array<FilterDataObject>
  /**
   * ip列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  IpTypeList?: Array<FilterDataObject>
  /**
   * appid列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  AppIdList?: Array<FilterDataObject>
  /**
   * 可用区列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  ZoneList?: Array<FilterDataObject>
  /**
   * os列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  OsList?: Array<FilterDataObject>
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeVpcAssets请求参数结构体
 */
export interface DescribeVpcAssetsRequest {
  /**
   * 过滤参数
   */
  Filter?: Filter
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
 * db资产详情
 */
export interface DbAssetInfo {
  /**
   * 云防状态
注意：此字段可能返回 null，表示取不到有效值。
   */
  CFWStatus?: number
  /**
   * 资产id
注意：此字段可能返回 null，表示取不到有效值。
   */
  AssetId?: string
  /**
   * vpc信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  VpcName?: string
  /**
   * 资产类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  AssetType?: string
  /**
   * 公网ip
注意：此字段可能返回 null，表示取不到有效值。
   */
  PublicIp?: string
  /**
   * 私网ip
注意：此字段可能返回 null，表示取不到有效值。
   */
  PrivateIp?: string
  /**
   * 地域
注意：此字段可能返回 null，表示取不到有效值。
   */
  Region?: string
  /**
   * vpc信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  VpcId?: string
  /**
   * 资产名
注意：此字段可能返回 null，表示取不到有效值。
   */
  AssetName?: string
  /**
   * 云防保护版本
注意：此字段可能返回 null，表示取不到有效值。
   */
  CFWProtectLevel?: number
  /**
   * tag信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  Tag?: Array<Tag>
}

/**
 * ip列表
 */
export interface IpAssetListVO {
  /**
   * 资产id
注意：此字段可能返回 null，表示取不到有效值。
   */
  AssetId?: string
  /**
   * 资产name
注意：此字段可能返回 null，表示取不到有效值。
   */
  AssetName?: string
  /**
   * 资产类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  AssetType?: string
  /**
   * 地域
注意：此字段可能返回 null，表示取不到有效值。
   */
  Region?: string
  /**
   * 云防状态
注意：此字段可能返回 null，表示取不到有效值。
   */
  CFWStatus?: number
  /**
   * 资产创建时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  AssetCreateTime?: string
  /**
   * 公网ip
注意：此字段可能返回 null，表示取不到有效值。
   */
  PublicIp?: string
  /**
   * 公网ip类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  PublicIpType?: number
  /**
   * vpc
注意：此字段可能返回 null，表示取不到有效值。
   */
  VpcId?: string
  /**
   * vpc名
注意：此字段可能返回 null，表示取不到有效值。
   */
  VpcName?: string
  /**
   * appid
注意：此字段可能返回 null，表示取不到有效值。
   */
  AppId?: number
  /**
   * 用户uin
注意：此字段可能返回 null，表示取不到有效值。
   */
  Uin?: string
  /**
   * 名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  NickName?: string
  /**
   * 核心
注意：此字段可能返回 null，表示取不到有效值。
   */
  IsCore?: number
  /**
   * 云上
注意：此字段可能返回 null，表示取不到有效值。
   */
  IsCloud?: number
  /**
   * 网络攻击
注意：此字段可能返回 null，表示取不到有效值。
   */
  Attack?: number
  /**
   * 网络访问
注意：此字段可能返回 null，表示取不到有效值。
   */
  Access?: number
  /**
   * 网络拦截
注意：此字段可能返回 null，表示取不到有效值。
   */
  Intercept?: number
  /**
   * 入向带宽
注意：此字段可能返回 null，表示取不到有效值。
   */
  InBandwidth?: string
  /**
   * 出向带宽
注意：此字段可能返回 null，表示取不到有效值。
   */
  OutBandwidth?: string
  /**
   * 入向流量
注意：此字段可能返回 null，表示取不到有效值。
   */
  InFlow?: string
  /**
   * 出向流量
注意：此字段可能返回 null，表示取不到有效值。
   */
  OutFlow?: string
  /**
   * 最近扫描时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  LastScanTime?: string
  /**
   * 端口风险
注意：此字段可能返回 null，表示取不到有效值。
   */
  PortRisk?: number
  /**
   * 漏洞风险
注意：此字段可能返回 null，表示取不到有效值。
   */
  VulnerabilityRisk?: number
  /**
   * 配置风险
注意：此字段可能返回 null，表示取不到有效值。
   */
  ConfigurationRisk?: number
  /**
   * 扫描任务
注意：此字段可能返回 null，表示取不到有效值。
   */
  ScanTask?: number
  /**
   * 弱口令
注意：此字段可能返回 null，表示取不到有效值。
   */
  WeakPassword?: number
  /**
   * 内容风险
注意：此字段可能返回 null，表示取不到有效值。
   */
  WebContentRisk?: number
  /**
   * 标签
注意：此字段可能返回 null，表示取不到有效值。
   */
  Tag?: Array<Tag>
  /**
   * eip主键
注意：此字段可能返回 null，表示取不到有效值。
   */
  AddressId?: string
  /**
   * memberid信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  MemberId?: string
  /**
   * 风险服务暴露
注意：此字段可能返回 null，表示取不到有效值。
   */
  RiskExposure?: number
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
   * 风险等级
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
   * 资产唯一id
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
注意：此字段可能返回 null，表示取不到有效值。
   */
  Nick?: string
  /**
   * 用户uin
注意：此字段可能返回 null，表示取不到有效值。
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
   * 描述
   */
  Describe?: string
  /**
   * 版本名
   */
  AppName?: string
  /**
   * 相关信息
   */
  References?: string
  /**
   * 版本
   */
  AppVersion?: string
  /**
   * 漏洞url
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
   * 修复建议
   */
  Fix?: string
  /**
   * pocid
   */
  POCId?: string
  /**
   * 来源
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
   * 负载
   */
  Payload?: string
  /**
   * 应急漏洞类型，1-应急漏洞，0-非应急漏洞
注意：此字段可能返回 null，表示取不到有效值。
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
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 主机资产详情
 */
export interface AssetBaseInfoResponse {
  /**
   * vpc-id
注意：此字段可能返回 null，表示取不到有效值。
   */
  VpcId?: string
  /**
   * vpc-name
注意：此字段可能返回 null，表示取不到有效值。
   */
  VpcName?: string
  /**
   * 资产名
注意：此字段可能返回 null，表示取不到有效值。
   */
  AssetName?: string
  /**
   * 操作系统
注意：此字段可能返回 null，表示取不到有效值。
   */
  Os?: string
  /**
   * 公网ip
注意：此字段可能返回 null，表示取不到有效值。
   */
  PublicIp?: string
  /**
   * 内网ip
注意：此字段可能返回 null，表示取不到有效值。
   */
  PrivateIp?: string
  /**
   * 地域
注意：此字段可能返回 null，表示取不到有效值。
   */
  Region?: string
  /**
   * 资产类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  AssetType?: string
  /**
   * 资产id
注意：此字段可能返回 null，表示取不到有效值。
   */
  AssetId?: string
  /**
   * 账号数量
注意：此字段可能返回 null，表示取不到有效值。
   */
  AccountNum?: number
  /**
   * 端口数量
注意：此字段可能返回 null，表示取不到有效值。
   */
  PortNum?: number
  /**
   * 进程数量
注意：此字段可能返回 null，表示取不到有效值。
   */
  ProcessNum?: number
  /**
   * 软件应用数量
注意：此字段可能返回 null，表示取不到有效值。
   */
  SoftApplicationNum?: number
  /**
   * 数据库数量
注意：此字段可能返回 null，表示取不到有效值。
   */
  DatabaseNum?: number
  /**
   * Web应用数量
注意：此字段可能返回 null，表示取不到有效值。
   */
  WebApplicationNum?: number
  /**
   * 服务数量
注意：此字段可能返回 null，表示取不到有效值。
   */
  ServiceNum?: number
  /**
   * web框架数量
注意：此字段可能返回 null，表示取不到有效值。
   */
  WebFrameworkNum?: number
  /**
   * Web站点数量
注意：此字段可能返回 null，表示取不到有效值。
   */
  WebSiteNum?: number
  /**
   * Jar包数量
注意：此字段可能返回 null，表示取不到有效值。
   */
  JarPackageNum?: number
  /**
   * 启动服务数量
注意：此字段可能返回 null，表示取不到有效值。
   */
  StartServiceNum?: number
  /**
   * 计划任务数量
注意：此字段可能返回 null，表示取不到有效值。
   */
  ScheduledTaskNum?: number
  /**
   * 环境变量数量
注意：此字段可能返回 null，表示取不到有效值。
   */
  EnvironmentVariableNum?: number
  /**
   * 内核模块数量
注意：此字段可能返回 null，表示取不到有效值。
   */
  KernelModuleNum?: number
  /**
   * 系统安装包数量
注意：此字段可能返回 null，表示取不到有效值。
   */
  SystemInstallationPackageNum?: number
  /**
   * 剩余防护时长
注意：此字段可能返回 null，表示取不到有效值。
   */
  SurplusProtectDay?: number
  /**
   * 客户端是否安装  1 已安装 0 未安装
注意：此字段可能返回 null，表示取不到有效值。
   */
  CWPStatus?: number
  /**
   * 标签
注意：此字段可能返回 null，表示取不到有效值。
   */
  Tag?: Array<Tag>
  /**
   * 防护等级
注意：此字段可能返回 null，表示取不到有效值。
   */
  ProtectLevel?: string
  /**
   * 防护时长
注意：此字段可能返回 null，表示取不到有效值。
   */
  ProtectedDay?: number
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
   * 风险等级
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
   * 资产唯一id
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
注意：此字段可能返回 null，表示取不到有效值。
   */
  Nick?: string
  /**
   * 用户uin
注意：此字段可能返回 null，表示取不到有效值。
   */
  Uin?: string
  /**
   * 来源
   */
  From?: string
}

/**
 * DescribeDomainAssets请求参数结构体
 */
export interface DescribeDomainAssetsRequest {
  /**
   * -
   */
  Filter?: Filter
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
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribePublicIpAssets请求参数结构体
 */
export interface DescribePublicIpAssetsRequest {
  /**
   * filte过滤条件
   */
  Filter?: Filter
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
注意：此字段可能返回 null，表示取不到有效值。
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
注意：此字段可能返回 null，表示取不到有效值。
   */
  InstanceCreateTime?: string
  /**
   * 命名空间
注意：此字段可能返回 null，表示取不到有效值。
   */
  Namespace?: string
  /**
   * 状态
注意：此字段可能返回 null，表示取不到有效值。
   */
  Status?: string
  /**
   * 集群id
注意：此字段可能返回 null，表示取不到有效值。
   */
  ClusterId?: string
  /**
   * 集群名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  ClusterName?: string
  /**
   * 主机id
注意：此字段可能返回 null，表示取不到有效值。
   */
  MachineId?: string
  /**
   * 主机名
注意：此字段可能返回 null，表示取不到有效值。
   */
  MachineName?: string
  /**
   * pod ip
注意：此字段可能返回 null，表示取不到有效值。
   */
  PodIp?: string
  /**
   * 关联service数
注意：此字段可能返回 null，表示取不到有效值。
   */
  ServiceCount?: number
  /**
   * 关联容器数
注意：此字段可能返回 null，表示取不到有效值。
   */
  ContainerCount?: number
  /**
   * 公网ip
注意：此字段可能返回 null，表示取不到有效值。
   */
  PublicIp?: string
  /**
   * 内网ip
注意：此字段可能返回 null，表示取不到有效值。
   */
  PrivateIp?: string
  /**
   * 是否核心：1:核心，2:非核心
注意：此字段可能返回 null，表示取不到有效值。
   */
  IsCore?: number
}

/**
 * DescribeDbAssets返回参数结构体
 */
export interface DescribeDbAssetsResponse {
  /**
   * 总数
注意：此字段可能返回 null，表示取不到有效值。
   */
  Total?: number
  /**
   * 资产总数
注意：此字段可能返回 null，表示取不到有效值。
   */
  Data?: Array<DBAssetVO>
  /**
   * 地域枚举
注意：此字段可能返回 null，表示取不到有效值。
   */
  RegionList?: Array<FilterDataObject>
  /**
   * 资产类型枚举
注意：此字段可能返回 null，表示取不到有效值。
   */
  AssetTypeList?: Array<FilterDataObject>
  /**
   * Vpc枚举
注意：此字段可能返回 null，表示取不到有效值。
   */
  VpcList?: Array<FilterDataObject>
  /**
   * Appid枚举
注意：此字段可能返回 null，表示取不到有效值。
   */
  AppIdList?: Array<FilterDataObject>
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
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
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeCVMAssetInfo请求参数结构体
 */
export interface DescribeCVMAssetInfoRequest {
  /**
   * -
   */
  AssetId: string
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
   * 精确匹配填 7 模糊匹配填9 ， 兼容 中台定的结构
   */
  OperatorType?: number
}
