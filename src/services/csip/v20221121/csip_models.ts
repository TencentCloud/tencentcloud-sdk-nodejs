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
   * 需排序的字段
   */
  Order?: string

  /**
   * 排序采用升序还是降序 升:asc 降 desc
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
 * DescribeSubnetAssets请求参数结构体
 */
export interface DescribeSubnetAssetsRequest {
  /**
   * 过滤参数
   */
  Filter?: Filter
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
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
