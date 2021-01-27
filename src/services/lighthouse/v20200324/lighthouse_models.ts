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
 * DescribeBlueprints返回参数结构体
 */
export interface DescribeBlueprintsResponse {
  /**
   * 符合条件的镜像数量。
   */
  TotalCount?: number

  /**
   * 镜像详细信息列表。
   */
  BlueprintSet?: Array<Blueprint>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeInstancesTrafficPackages请求参数结构体
 */
export interface DescribeInstancesTrafficPackagesRequest {
  /**
   * 实例 ID 列表。每次请求批量实例的上限为 100。可通过[DescribeInstances](https://cloud.tencent.com/document/api/1207/47573)接口返回值中的InstanceId获取。
   */
  InstanceIds?: Array<string>

  /**
   * 偏移量，默认为 0。
   */
  Offset?: number

  /**
   * 返回数量，默认为 20，最大值为 100。
   */
  Limit?: number
}

/**
 * DeleteFirewallRules请求参数结构体
 */
export interface DeleteFirewallRulesRequest {
  /**
   * 实例 ID。
   */
  InstanceId: string

  /**
   * 防火墙规则列表。
   */
  FirewallRules: Array<FirewallRule>
}

/**
 * 描述了实例登录相关配置与信息。
 */
export interface LoginSettings {
  /**
   * 密钥 ID 列表。关联密钥后，就可以通过对应的私钥来访问实例。注意：此字段可能返回 []，表示取不到有效值。
   */
  KeyIds: Array<string>
}

/**
 * 实例流量包详情
 */
export interface InstanceTrafficPackage {
  /**
   * 实例ID。
   */
  InstanceId: string

  /**
   * 流量包详情列表。
   */
  TrafficPackageSet: Array<TrafficPackage>
}

/**
 * StartInstances返回参数结构体
 */
export interface StartInstancesResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 描述了实例信息。
 */
export interface Instance {
  /**
   * 实例 ID。
   */
  InstanceId: string

  /**
   * 套餐 ID。
   */
  BundleId: string

  /**
   * 镜像 ID。
   */
  BlueprintId: string

  /**
   * 实例的 CPU 核数，单位：核。
   */
  CPU: number

  /**
   * 实例内存容量，单位：GB 。
   */
  Memory: number

  /**
   * 实例名称。
   */
  InstanceName: string

  /**
      * 实例计费模式。取值范围： 
PREPAID：表示预付费，即包年包月。
      */
  InstanceChargeType: string

  /**
   * 实例系统盘信息。
   */
  SystemDisk: SystemDisk

  /**
      * 实例主网卡的内网 IP。 
注意：此字段可能返回 空，表示取不到有效值。
      */
  PrivateAddresses: Array<string>

  /**
      * 实例主网卡的公网 IP。 
注意：此字段可能返回 空，表示取不到有效值。
      */
  PublicAddresses: Array<string>

  /**
   * 实例带宽信息。
   */
  InternetAccessible: InternetAccessible

  /**
      * 自动续费标识。取值范围： 
NOTIFY_AND_MANUAL_RENEW：表示通知即将过期，但不自动续费  
NOTIFY_AND_AUTO_RENEW：表示通知即将过期，而且自动续费 。
      */
  RenewFlag: string

  /**
   * 实例登录设置。
   */
  LoginSettings: LoginSettings

  /**
      * 实例状态。取值范围： 
<li>PENDING：表示创建中</li><li>LAUNCH_FAILED：表示创建失败</li><li>RUNNING：表示运行中</li><li>STOPPED：表示关机</li><li>STARTING：表示开机中</li><li>STOPPING：表示关机中</li><li>REBOOTING：表示重启中</li><li>SHUTDOWN：表示停止待销毁</li><li>TERMINATING：表示销毁中</li>
      */
  InstanceState: string

  /**
   * 实例全局唯一 ID。
   */
  Uuid: string

  /**
   * 实例的最新操作。例：StopInstances、ResetInstance。注意：此字段可能返回 空值，表示取不到有效值。
   */
  LatestOperation: string

  /**
      * 实例的最新操作状态。取值范围： 
SUCCESS：表示操作成功 
OPERATING：表示操作执行中 
FAILED：表示操作失败 
注意：此字段可能返回 空值，表示取不到有效值。
      */
  LatestOperationState: string

  /**
      * 实例最新操作的唯一请求 ID。 
注意：此字段可能返回 空值，表示取不到有效值。
      */
  LatestOperationRequestId: string

  /**
      * 隔离时间。按照 ISO8601 标准表示，并且使用 UTC 时间。 
格式为： YYYY-MM-DDThh:mm:ssZ。
注意：此字段可能返回 null，表示取不到有效值。
      */
  IsolatedTime: string

  /**
      * 创建时间。按照 ISO8601 标准表示，并且使用 UTC 时间。 
格式为： YYYY-MM-DDThh:mm:ssZ。
注意：此字段可能返回 null，表示取不到有效值。
      */
  CreatedTime: string

  /**
      * 到期时间。按照 ISO8601 标准表示，并且使用 UTC 时间。 
格式为： YYYY-MM-DDThh:mm:ssZ 。
注意：此字段可能返回 null，表示取不到有效值。
      */
  ExpiredTime: string

  /**
   * 操作系统平台类型，如 LINUX_UNIX、WINDOWS。
   */
  PlatformType: string

  /**
   * 操作系统平台。
   */
  Platform: string

  /**
   * 操作系统名称。
   */
  OsName: string
}

/**
 * DescribeInstancesTrafficPackages返回参数结构体
 */
export interface DescribeInstancesTrafficPackagesResponse {
  /**
   * 符合条件的实例流量包详情数量。
   */
  TotalCount?: number

  /**
   * 实例流量包详情列表。
   */
  InstanceTrafficPackageSet?: Array<InstanceTrafficPackage>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 流量包详情
 */
export interface TrafficPackage {
  /**
   * 流量包ID。
   */
  TrafficPackageId: string

  /**
   * 流量包生效周期内已使用流量，单位字节。
   */
  TrafficUsed: number

  /**
   * 流量包生效周期内的总流量，单位字节。
   */
  TrafficPackageTotal: number

  /**
   * 流量包生效周期内的剩余流量，单位字节。
   */
  TrafficPackageRemaining: number

  /**
   * 流量包生效周期内超出流量包额度的流量，单位字节。
   */
  TrafficOverflow: number

  /**
      * 流量包生效周期开始时间。按照 ISO8601 标准表示，并且使用 UTC 时间。 
格式为： YYYY-MM-DDThh:mm:ssZ。
注意：此字段可能返回 null，表示取不到有效值。
      */
  StartTime: string

  /**
      * 流量包生效周期结束时间。按照 ISO8601 标准表示，并且使用 UTC 时间。 
格式为： YYYY-MM-DDThh:mm:ssZ。
注意：此字段可能返回 null，表示取不到有效值。
      */
  EndTime: string

  /**
      * 流量包到期时间。按照 ISO8601 标准表示，并且使用 UTC 时间。 
格式为： YYYY-MM-DDThh:mm:ssZ。
注意：此字段可能返回 null，表示取不到有效值。
      */
  Deadline: string

  /**
      * 流量包状态：
<li>NETWORK_NORMAL：正常</li>
<li>OVERDUE_NETWORK_DISABLED：欠费断网</li>
      */
  Status: string
}

/**
 * RebootInstances返回参数结构体
 */
export interface RebootInstancesResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeBundles请求参数结构体
 */
export interface DescribeBundlesRequest {
  /**
   * 套餐 ID 列表。
   */
  BundleIds?: Array<string>

  /**
   * 偏移量，默认为 0。关于`Offset`的更进一步介绍请参考 API [简介](https://cloud.tencent.com/document/product/1207/47578)中的相关小节。
   */
  Offset?: number

  /**
   * 返回数量，默认为 20，最大值为 100。关于`Limit`的更进一步介绍请参考 API [简介](https://cloud.tencent.com/document/product/1207/47578)中的相关小节。
   */
  Limit?: number

  /**
      * 过滤器列表。
<li>bundle-id</li>按照【套餐 ID】进行过滤。
类型：String
必选：否
<li>support-platform-type</li>按照【系统类型】进行过滤。
取值： LINUX_UNIX（Linux/Unix系统）；WINDOWS（Windows 系统）
类型：String
必选：否
每次请求的 Filters 的上限为 10，Filter.Values 的上限为 5。参数不支持同时指定 BundleIds 和 Filters。
      */
  Filters?: Array<Filter>
}

/**
 * 描述了镜像信息。
 */
export interface Blueprint {
  /**
   * 镜像 ID  ，是 blueprint 的唯一标识。
   */
  BlueprintId: string

  /**
   * 镜像对外展示标题。
   */
  DisplayTitle: string

  /**
   * 镜像对外展示版本。
   */
  DisplayVersion: string

  /**
   * 镜像描述信息。
   */
  Description: string

  /**
   * 操作系统名称。
   */
  OsName: string

  /**
   * 操作系统平台。
   */
  Platform: string

  /**
   * 操作系统平台类型，如 LINUX_UNIX、WINDOWS。
   */
  PlatformType: string

  /**
   * 镜像类型，如 APP_OS、PURE_OS。
   */
  BlueprintType: string

  /**
   * 镜像图片 URL。
   */
  ImageUrl: string

  /**
   * 镜像所需系统盘大小。
   */
  RequiredSystemDiskSize: number

  /**
   * 镜像状态。
   */
  BlueprintState: string
}

/**
 * 价格信息
 */
export interface Price {
  /**
   * 实例价格。
   */
  InstancePrice: InstancePrice
}

/**
 * 套餐信息。
 */
export interface Bundle {
  /**
   * 套餐 ID。
   */
  BundleId: string

  /**
   * 内存大小，单位 GB。
   */
  Memory: number

  /**
      * 系统盘类型。
取值范围： 
<li> LOCAL_BASIC：本地硬盘</li><li> LOCAL_SSD：本地 SSD 硬盘</li><li> CLOUD_BASIC：普通云硬盘</li><li> CLOUD_SSD：SSD 云硬盘</li><li> CLOUD_PREMIUM：高性能云硬盘</li>
      */
  SystemDiskType: string

  /**
   * 系统盘大小。
   */
  SystemDiskSize: number

  /**
   * 每月网络流量，单位 Gb。
   */
  MonthlyTraffic: number

  /**
   * 是否支持 Linux/Unix 平台。
   */
  SupportLinuxUnixPlatform: boolean

  /**
   * 是否支持 Windows 平台。
   */
  SupportWindowsPlatform: boolean

  /**
   * 套餐当前单位价格信息。
   */
  Price: Price

  /**
   * CPU 核数。
   */
  CPU: number

  /**
   * 峰值带宽，单位 Mbps。
   */
  InternetMaxBandwidthOut: number

  /**
   * 网络计费类型。
   */
  InternetChargeType: string

  /**
   * 套餐售卖状态,取值:‘AVAILABLE’(可用) , ‘SOLD_OUT’(售罄)
   */
  BundleSalesState: string

  /**
      * 套餐类型。
取值范围：
<li> GENERAL_BUNDLE：通用型</li><li> STORAGE_BUNDLE：存储型 </li>
      */
  BundleType: string

  /**
      * 套餐展示标签.
取值范围:
"ACTIVITY": 活动套餐,
"NORMAL": 普通套餐
      */
  BundleDisplayLabel: string
}

/**
 * StartInstances请求参数结构体
 */
export interface StartInstancesRequest {
  /**
   * 实例 ID 列表。每次请求批量实例的上限为 100。可通过[DescribeInstances](https://cloud.tencent.com/document/api/1207/47573)接口返回值中的InstanceId获取。
   */
  InstanceIds: Array<string>
}

/**
 * DeleteFirewallRules返回参数结构体
 */
export interface DeleteFirewallRulesResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * RebootInstances请求参数结构体
 */
export interface RebootInstancesRequest {
  /**
   * 实例 ID 列表。每次请求批量实例的上限为 100。可通过[DescribeInstances](https://cloud.tencent.com/document/api/1207/47573)接口返回值中的InstanceId获取。
   */
  InstanceIds: Array<string>
}

/**
 * DescribeBlueprints请求参数结构体
 */
export interface DescribeBlueprintsRequest {
  /**
   * 镜像 ID 列表。
   */
  BlueprintIds?: Array<string>

  /**
   * 偏移量，默认为 0。关于`Offset`的更进一步介绍请参考 API [简介](https://cloud.tencent.com/document/product/1207/47578)中的相关小节。
   */
  Offset?: number

  /**
   * 返回数量，默认为 20，最大值为 100。关于`Limit`的更进一步介绍请参考 API [简介](https://cloud.tencent.com/document/product/1207/47578)中的相关小节。
   */
  Limit?: number

  /**
      * 过滤器列表。
<li>blueprint-id</li>按照【镜像 ID】进行过滤。
类型：String
必选：否
<li>blueprint-type</li>按照【镜像类型】进行过滤。
取值： APP_OS（预置应用的系统 ）；PURE_OS（纯净的 OS 系统）。
类型：String
必选：否
<li>platform-type</li>按照【镜像平台类型】进行过滤。
取值： LINUX_UNIX（Linux/Unix系统）；WINDOWS（Windows 系统）。
类型：String
必选：否
每次请求的 Filters 的上限为 10，Filter.Values 的上限为 5。参数不支持同时指定 BlueprintIds 和 Filters 。
      */
  Filters?: Array<Filter>
}

/**
 * DescribeInstances返回参数结构体
 */
export interface DescribeInstancesResponse {
  /**
   * 符合条件的实例数量。
   */
  TotalCount?: number

  /**
   * 实例详细信息列表。
   */
  InstanceSet?: Array<Instance>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 关于Lighthouse Instance实例的价格信息
 */
export interface InstancePrice {
  /**
   * 套餐单价原价。
   */
  OriginalBundlePrice: number

  /**
   * 原价。
   */
  OriginalPrice: number

  /**
   * 折扣。
   */
  Discount: number

  /**
   * 折后价。
   */
  DiscountPrice: number
}

/**
 * 描述了操作系统所在块设备即系统盘的信息。
 */
export interface SystemDisk {
  /**
      * 系统盘类型。
取值范围： 
<li> LOCAL_BASIC：本地硬盘</li><li> LOCAL_SSD：本地 SSD 硬盘</li><li> CLOUD_BASIC：普通云硬盘</li><li> CLOUD_SSD：SSD 云硬盘</li><li> CLOUD_PREMIUM：高性能云硬盘</li>
      */
  DiskType: string

  /**
   * 系统盘大小，单位：GB。
   */
  DiskSize: number

  /**
      * 系统盘ID。
注意：此字段可能返回 null，表示取不到有效值。
      */
  DiskId: string
}

/**
 * ResetInstance请求参数结构体
 */
export interface ResetInstanceRequest {
  /**
   * 实例 ID。可通过[DescribeInstances](https://cloud.tencent.com/document/api/1207/47573)接口返回值中的InstanceId获取。
   */
  InstanceId: string

  /**
   * 镜像 ID。可通过[DescribeBlueprints](https://cloud.tencent.com/document/product/1207/47689)接口返回值中的BlueprintId获取。
   */
  BlueprintId?: string
}

/**
 * DescribeBundles返回参数结构体
 */
export interface DescribeBundlesResponse {
  /**
   * 套餐详细信息列表。
   */
  BundleSet: Array<Bundle>

  /**
   * 符合要求的套餐总数，用于分页展示。
   */
  TotalCount: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeInstances请求参数结构体
 */
export interface DescribeInstancesRequest {
  /**
   * 实例 ID 列表。每次请求批量实例的上限为 100。
   */
  InstanceIds?: Array<string>

  /**
      * 过滤器列表。
<li>instance-name</li>按照【实例名称】进行过滤。
类型：String
必选：否
<li>private-ip-address</li>按照【实例主网卡的内网 IP】进行过滤。
类型：String
必选：否
<li>public-ip-address</li>按照【实例主网卡的公网 IP】进行过滤。
类型：String
必选：否
每次请求的 Filters 的上限为 10，Filter.Values 的上限为 5。参数不支持同时指定 InstanceIds 和 Filters。
      */
  Filters?: Array<Filter>

  /**
   * 偏移量，默认为 0。关于`Offset`的更进一步介绍请参考 API [简介](https://cloud.tencent.com/document/product/1207/47578)中的相关小节。
   */
  Offset?: number

  /**
   * 返回数量，默认为 20，最大值为 100。关于`Limit`的更进一步介绍请参考 API [简介](https://cloud.tencent.com/document/product/1207/47578)中的相关小节。
   */
  Limit?: number
}

/**
 * >描述键值对过滤器，用于条件过滤查询。例如过滤名称等
> * 若存在多个`Filter`时，`Filter`间的关系为逻辑与（`AND`）关系。
> * 若同一个`Filter`存在多个`Values`，同一`Filter`下`Values`间的关系为逻辑或（`OR`）关系。
>
> 以DescribeInstances接口的`Filter`为例。若我们需要查询实例名称（`instance-name`）为test ***并且*** 实例内网IP（`private-ip-address`）为10.10.10.10的实例时，可如下实现：
```
Filters.0.Name=instance-name
&Filters.0.Values.0=test
&Filters.1.Name=private-ip-address
&Filters.1.Values.0=10.10.10.10
```
 */
export interface Filter {
  /**
   * 需要过滤的字段。
   */
  Name: string

  /**
   * 字段的过滤值。
   */
  Values: Array<string>
}

/**
 * ResetInstance返回参数结构体
 */
export interface ResetInstanceResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateFirewallRules请求参数结构体
 */
export interface CreateFirewallRulesRequest {
  /**
   * 实例 ID。
   */
  InstanceId: string

  /**
   * 防火墙规则列表。
   */
  FirewallRules: Array<FirewallRule>
}

/**
 * DescribeFirewallRules请求参数结构体
 */
export interface DescribeFirewallRulesRequest {
  /**
   * 实例 ID。
   */
  InstanceId: string

  /**
   * 偏移量，默认为 0。
   */
  Offset?: number

  /**
   * 返回数量，默认为 20，最大值为 100。
   */
  Limit?: number
}

/**
 * DescribeFirewallRules返回参数结构体
 */
export interface DescribeFirewallRulesResponse {
  /**
   * 符合条件的防火墙规则数量。
   */
  TotalCount?: number

  /**
   * 防火墙规则详细信息列表。
   */
  FirewallRuleSet?: Array<FirewallRuleInfo>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 描述防火墙规则信息。
 */
export interface FirewallRule {
  /**
   * 协议，取值：TCP，UDP，ALL。
   */
  Protocol: string

  /**
   * 端口，取值：ALL，单独的端口，逗号分隔的离散端口，减号分隔的端口范围。
   */
  Port?: string
}

/**
 * 描述防火墙规则详细信息。
 */
export interface FirewallRuleInfo {
  /**
   * 应用类型，取值：自定义，HTTP(80)，HTTPS(443)，Linux登录(22)，Windows登录(3389)，MySQL(3306)，SQL Server(1433)，全部TCP，全部UDP，ALL。
   */
  AppType: string

  /**
   * 协议，取值：TCP，UDP，ALL。
   */
  Protocol: string

  /**
   * 端口，取值：ALL，单独的端口，逗号分隔的离散端口，减号分隔的端口范围。
   */
  Port: string
}

/**
 * CreateFirewallRules返回参数结构体
 */
export interface CreateFirewallRulesResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * StopInstances返回参数结构体
 */
export interface StopInstancesResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 描述了启动配置创建实例的公网可访问性，声明了实例的公网使用计费模式，最大带宽等。
 */
export interface InternetAccessible {
  /**
   * 网络计费类型。
   */
  InternetChargeType: string

  /**
   * 公网出带宽上限，单位：Mbps。
   */
  InternetMaxBandwidthOut: number

  /**
   * 是否分配公网 IP。
   */
  PublicIpAssigned: boolean
}

/**
 * StopInstances请求参数结构体
 */
export interface StopInstancesRequest {
  /**
   * 实例 ID 列表。每次请求批量实例的上限为 100。可通过[DescribeInstances](https://cloud.tencent.com/document/api/1207/47573)接口返回值中的InstanceId获取。
   */
  InstanceIds: Array<string>
}
