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
 * AssociateInstancesKeyPairs返回参数结构体
 */
export interface AssociateInstancesKeyPairsResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * RenewInstances请求参数结构体
 */
export interface RenewInstancesRequest {
  /**
   * 实例ID列表。一个或多个待操作的实例ID。可通过[DescribeInstances](https://cloud.tencent.com/document/api/1207/47573)接口返回值中的InstanceId获取。每次请求批量实例的上限为100。
   */
  InstanceIds: Array<string>

  /**
   * 预付费模式，即包年包月相关参数设置。通过该参数可以指定包年包月实例的购买时长、是否设置自动续费等属性。若指定实例的付费模式为预付费则该参数必传。
   */
  InstanceChargePrepaid: InstanceChargePrepaid

  /**
      * 是否续费弹性数据盘。取值范围：
TRUE：表示续费实例同时续费其挂载的数据盘
FALSE：表示续费实例同时不再续费其挂载的数据盘
默认取值：TRUE。
      */
  RenewDataDisk?: boolean

  /**
      * 是否自动抵扣代金券。取值范围：
TRUE：表示自动抵扣代金券
FALSE：表示不自动抵扣代金券
默认取值：FALSE。
      */
  AutoVoucher?: boolean
}

/**
 * DescribeDisksDeniedActions请求参数结构体
 */
export interface DescribeDisksDeniedActionsRequest {
  /**
   * 云硬盘ID列表。
   */
  DiskIds: Array<string>
}

/**
 * DescribeInstancesTrafficPackages返回参数结构体
 */
export interface DescribeInstancesTrafficPackagesResponse {
  /**
   * 符合条件的实例流量包详情数量。
   */
  TotalCount: number

  /**
   * 实例流量包详情列表。
   */
  InstanceTrafficPackageSet: Array<InstanceTrafficPackage>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeInstancesDeniedActions请求参数结构体
 */
export interface DescribeInstancesDeniedActionsRequest {
  /**
   * 实例 ID 列表。每次请求批量实例的上限为 100。可通过[DescribeInstances](https://cloud.tencent.com/document/api/1207/47573)接口返回值中的InstanceId获取。
   */
  InstanceIds: Array<string>
}

/**
 * DeleteKeyPairs返回参数结构体
 */
export interface DeleteKeyPairsResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * AttachCcn请求参数结构体
 */
export interface AttachCcnRequest {
  /**
   * 云联网实例ID。
   */
  CcnId: string
}

/**
 * CreateInstances请求参数结构体
 */
export interface CreateInstancesRequest {
  /**
   * 套餐ID。
   */
  BundleId: string

  /**
   * 镜像ID。
   */
  BlueprintId: string

  /**
   * 当前实例仅支持预付费模式，即包年包月相关参数设置，单位（月）。通过该参数可以指定包年包月实例的购买时长、是否设置自动续费等属性。该参数必传。
   */
  InstanceChargePrepaid: InstanceChargePrepaid

  /**
   * 实例显示名称。
   */
  InstanceName?: string

  /**
   * 购买实例数量。包年包月实例取值范围：[1，30]。默认取值：1。指定购买实例的数量不能超过用户所能购买的剩余配额数量
   */
  InstanceCount?: number

  /**
   * 可用区列表。默认为随机可用区
   */
  Zones?: Array<string>

  /**
      * 是否只预检此次请求。
true：发送检查请求，不会创建实例。检查项包括是否填写了必需参数，请求格式，业务限制和库存。
如果检查不通过，则返回对应错误码；
如果检查通过，则返回RequestId.
false（默认）：发送正常请求，通过检查后直接创建实例
      */
  DryRun?: boolean

  /**
   * 用于保证请求幂等性的字符串。该字符串由客户生成，需保证不同请求之间唯一，最大值不超过64个ASCII字符。若不指定该参数，则无法保证请求的幂等性。
   */
  ClientToken?: string

  /**
   * 实例登录密码信息配置。本字段目前仅支持WINDOWS实例进行密码设置。默认缺失情况下代表用户选择实例创建后设置登录密码。
   */
  LoginConfiguration?: LoginConfiguration

  /**
   * 要创建的容器配置列表。
   */
  Containers?: Array<DockerContainerConfiguration>

  /**
   * 是否自动使用代金券。默认不使用。
   */
  AutoVoucher?: boolean
}

/**
 * DescribeZones请求参数结构体
 */
export type DescribeZonesRequest = null

/**
 * 描述地域信息。
 */
export interface RegionInfo {
  /**
   * 地域名称，例如，ap-guangzhou。
   */
  Region: string

  /**
   * 地域描述，例如，华南地区(广州)。
   */
  RegionName: string

  /**
   * 地域是否可用状态，取值仅为AVAILABLE。
   */
  RegionState: string

  /**
   * 是否中国大陆地域
   */
  IsChinaMainland: boolean
}

/**
 * DescribeBlueprintInstances返回参数结构体
 */
export interface DescribeBlueprintInstancesResponse {
  /**
   * 符合条件的镜像实例数量。
   */
  TotalCount: number

  /**
   * 镜像实例列表信息。
   */
  BlueprintInstanceSet: Array<BlueprintInstance>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 实例操作限制列表。
 */
export interface InstanceDeniedActions {
  /**
      * 实例 ID。
注意：此字段可能返回 null，表示取不到有效值。
      */
  InstanceId: string

  /**
   * 操作限制列表。
   */
  DeniedActions: Array<DeniedAction>
}

/**
 * InquirePriceCreateDisks请求参数结构体
 */
export interface InquirePriceCreateDisksRequest {
  /**
   * 云硬盘大小, 单位: GB。
   */
  DiskSize: number

  /**
   * 云硬盘介质类型。取值: "CLOUD_PREMIUM"(高性能云盘), "CLOUD_SSD"(SSD云硬盘)。
   */
  DiskType: string

  /**
   * 新购云硬盘包年包月相关参数设置。
   */
  DiskChargePrepaid: DiskChargePrepaid

  /**
   * 云硬盘个数, 默认值: 1。
   */
  DiskCount?: number
}

/**
 * 描述了实例可变更的套餐。
 */
export interface ModifyBundle {
  /**
   * 更改实例套餐后需要补的差价。
   */
  ModifyPrice: Price

  /**
      * 变更套餐状态。取值：
<li>SOLD_OUT：套餐售罄</li>
<li>AVAILABLE：支持套餐变更</li>
<li>UNAVAILABLE：暂不支持套餐变更</li>
      */
  ModifyBundleState: string

  /**
   * 套餐信息。
   */
  Bundle: Bundle

  /**
      * 不支持套餐变更原因信息。变更套餐状态为"AVAILABLE"时, 该信息为空
注意：此字段可能返回 null，表示取不到有效值。
      */
  NotSupportModifyMessage: string
}

/**
 * DetachCcn返回参数结构体
 */
export interface DetachCcnResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateInstanceSnapshot返回参数结构体
 */
export interface CreateInstanceSnapshotResponse {
  /**
   * 快照 ID。
   */
  SnapshotId: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * InquirePriceRenewInstances返回参数结构体
 */
export interface InquirePriceRenewInstancesResponse {
  /**
   * 询价信息。
   */
  Price: Price

  /**
      * 数据盘价格信息列表。
注意：此字段可能返回 null，表示取不到有效值。
      */
  DataDiskPriceSet: Array<DataDiskPrice>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
 * ModifyInstancesAttribute请求参数结构体
 */
export interface ModifyInstancesAttributeRequest {
  /**
   * 实例 ID 列表。每次请求批量实例的上限为 100。可通过[DescribeInstances](https://cloud.tencent.com/document/api/1207/47573)接口返回值中的InstanceId获取。
   */
  InstanceIds: Array<string>

  /**
   * 实例名称。可任意命名，但不得超过 60 个字符。
   */
  InstanceName?: string
}

/**
 * DescribeGeneralResourceQuotas请求参数结构体
 */
export interface DescribeGeneralResourceQuotasRequest {
  /**
      * 资源名列表，可取值:
- GENERAL_BUNDLE_INSTANCE 通用型套餐实例
- STORAGE_BUNDLE_INSTANCE 存储型套餐实例 
- ENTERPRISE_BUNDLE_INSTANCE 企业型套餐实例 
- EXCLUSIVE_BUNDLE_INSTANCE 专属型套餐实例
- BEFAST_BUNDLE_INSTANCE 蜂驰型套餐实例
- USER_KEY_PAIR 密钥对
- SNAPSHOT 快照
- BLUEPRINT 自定义镜像
- FREE_BLUEPRINT 免费自定义镜像
- DATA_DISK 数据盘
- FIREWALL_RULE 防火墙规则
      */
  ResourceNames: Array<string>
}

/**
 * DeleteKeyPairs请求参数结构体
 */
export interface DeleteKeyPairsRequest {
  /**
   * 密钥对 ID 列表，每次请求批量密钥对的上限为 10。
   */
  KeyIds: Array<string>
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
 * 描述了镜像重置信息
 */
export interface ResetInstanceBlueprint {
  /**
   * 镜像详细信息
   */
  BlueprintInfo: Blueprint

  /**
   * 实例镜像是否可重置为目标镜像
   */
  IsResettable: boolean

  /**
   * 不可重置信息.当镜像可重置时为""
   */
  NonResettableMessage: string
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
 * InquirePriceRenewInstances请求参数结构体
 */
export interface InquirePriceRenewInstancesRequest {
  /**
   * 待续费的实例。
   */
  InstanceIds: Array<string>

  /**
   * 预付费模式，即包年包月相关参数设置。通过该参数可以指定包年包月实例的购买时长、是否设置自动续费等属性。若指定实例的付费模式为预付费则该参数必传。
   */
  InstanceChargePrepaid?: InstanceChargePrepaid

  /**
   * 是否续费数据盘
   */
  RenewDataDisk?: boolean

  /**
   * 数据盘是否对齐实例到期时间
   */
  AlignInstanceExpiredTime?: boolean
}

/**
 * 套餐折扣详情（仅用于控制台调用询价相关接口返回）。
 */
export interface DiscountDetail {
  /**
   * 计费时长。
   */
  TimeSpan: number

  /**
   * 计费单元。
   */
  TimeUnit: string

  /**
   * 总价。
   */
  TotalCost: number

  /**
   * 折后总价。
   */
  RealTotalCost: number

  /**
   * 折扣。
   */
  Discount: number

  /**
   * 具体折扣详情。
   */
  PolicyDetail: PolicyDetail
}

/**
 * DescribeDiskConfigs请求参数结构体
 */
export interface DescribeDiskConfigsRequest {
  /**
      * 过滤器列表。
<li>zone</li>按照【可用区】进行过滤。
类型：String
必选：否
      */
  Filters?: Array<Filter>
}

/**
 * DescribeRegions返回参数结构体
 */
export interface DescribeRegionsResponse {
  /**
   * 地域数量。
   */
  TotalCount: number

  /**
   * 地域信息列表。
   */
  RegionSet: Array<RegionInfo>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * AssociateInstancesKeyPairs请求参数结构体
 */
export interface AssociateInstancesKeyPairsRequest {
  /**
   * 密钥对 ID 列表。每次请求批量密钥对的上限为 100。
   */
  KeyIds: Array<string>

  /**
   * 实例 ID 列表。每次请求批量实例的上限为 100。可通过[DescribeInstances](https://cloud.tencent.com/document/api/1207/47573)接口返回值中的InstanceId获取。
   */
  InstanceIds: Array<string>
}

/**
 * AttachCcn返回参数结构体
 */
export interface AttachCcnResponse {
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
 * ResetAttachCcn请求参数结构体
 */
export interface ResetAttachCcnRequest {
  /**
   * 云联网实例ID。
   */
  CcnId: string
}

/**
 * AttachDisks请求参数结构体
 */
export interface AttachDisksRequest {
  /**
   * 云硬盘ID列表。
   */
  DiskIds: Array<string>

  /**
   * 实例ID。
   */
  InstanceId: string

  /**
   * 续费标识。
   */
  RenewFlag?: string
}

/**
 * ImportKeyPair返回参数结构体
 */
export interface ImportKeyPairResponse {
  /**
   * 密钥对 ID。
   */
  KeyId: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeSnapshots请求参数结构体
 */
export interface DescribeSnapshotsRequest {
  /**
      * 要查询快照的 ID 列表。
参数不支持同时指定 SnapshotIds 和 Filters。
      */
  SnapshotIds?: Array<string>

  /**
      * 过滤器列表。
<li>snapshot-id</li>按照【快照 ID】进行过滤。
类型：String
必选：否
<li>disk-id</li>按照【磁盘 ID】进行过滤。
类型：String
必选：否
<li>snapshot-name</li>按照【快照名称】进行过滤。
类型：String
必选：否
<li>instance-id</li>按照【实例 ID 】进行过滤。
类型：String
必选：否
每次请求的 Filters 的上限为 10，Filter.Values 的上限为 5。参数不支持同时指定 SnapshotIds 和 Filters。
      */
  Filters?: Array<Filter>

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
 * TerminateDisks返回参数结构体
 */
export interface TerminateDisksResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 描述密钥对信息。
 */
export interface KeyPair {
  /**
   * 密钥对 ID ，是密钥对的唯一标识。
   */
  KeyId: string

  /**
   * 密钥对名称。
   */
  KeyName: string

  /**
   * 密钥对的纯文本公钥。
   */
  PublicKey: string

  /**
      * 密钥对关联的实例 ID 列表。
注意：此字段可能返回 null，表示取不到有效值。
      */
  AssociatedInstanceIds: Array<string>

  /**
      * 创建时间。按照 ISO8601 标准表示，并且使用 UTC 时间。格式为：YYYY-MM-DDThh:mm:ssZ
注意：此字段可能返回 null，表示取不到有效值。
      */
  CreatedTime: string

  /**
      * 密钥对私钥。
注意：此字段可能返回 null，表示取不到有效值。
      */
  PrivateKey: string
}

/**
 * DescribeFirewallRulesTemplate请求参数结构体
 */
export type DescribeFirewallRulesTemplateRequest = null

/**
 * DescribeKeyPairs返回参数结构体
 */
export interface DescribeKeyPairsResponse {
  /**
   * 符合条件的密钥对数量。
   */
  TotalCount: number

  /**
   * 密钥对详细信息列表。
   */
  KeyPairSet: Array<KeyPair>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyBlueprintAttribute请求参数结构体
 */
export interface ModifyBlueprintAttributeRequest {
  /**
   * 镜像 ID。可通过[DescribeBlueprints](https://cloud.tencent.com/document/product/1207/47689)接口返回值中的BlueprintId获取。
   */
  BlueprintId: string

  /**
   * 设置新的镜像名称。最大长度60。
   */
  BlueprintName?: string

  /**
   * 设置新的镜像描述。最大长度60。
   */
  Description?: string
}

/**
 * InquirePriceRenewDisks请求参数结构体
 */
export interface InquirePriceRenewDisksRequest {
  /**
   * 云硬盘ID列表。
   */
  DiskIds: Array<string>

  /**
   * 续费云硬盘包年包月相关参数设置。
   */
  RenewDiskChargePrepaid: RenewDiskChargePrepaid
}

/**
 * 磁盘信息
 */
export interface Disk {
  /**
   * 磁盘ID
   */
  DiskId: string

  /**
   * 实例ID
   */
  InstanceId: string

  /**
   * 可用区
   */
  Zone: string

  /**
   * 磁盘名称
   */
  DiskName: string

  /**
   * 磁盘类型
   */
  DiskUsage: string

  /**
   * 磁盘介质类型
   */
  DiskType: string

  /**
   * 磁盘付费类型
   */
  DiskChargeType: string

  /**
   * 磁盘大小
   */
  DiskSize: number

  /**
   * 续费标识
   */
  RenewFlag: string

  /**
   * 磁盘状态
   */
  DiskState: string

  /**
   * 磁盘挂载状态
   */
  Attached: boolean

  /**
   * 是否随实例释放
   */
  DeleteWithInstance: boolean

  /**
   * 上一次操作
   */
  LatestOperation: string

  /**
   * 上一次操作状态
   */
  LatestOperationState: string

  /**
   * 上一次请求ID
   */
  LatestOperationRequestId: string

  /**
   * 创建时间
   */
  CreatedTime: string

  /**
      * 到期时间
注意：此字段可能返回 null，表示取不到有效值。
      */
  ExpiredTime: string

  /**
      * 隔离时间
注意：此字段可能返回 null，表示取不到有效值。
      */
  IsolatedTime: string
}

/**
 * 可用区详细信息
 */
export interface ZoneInfo {
  /**
   * 可用区
   */
  Zone: string

  /**
   * 可用区中文名称
   */
  ZoneName: string

  /**
   * 实例购买页可用区展示标签
   */
  InstanceDisplayLabel: string
}

/**
 * DescribeBlueprintInstances请求参数结构体
 */
export interface DescribeBlueprintInstancesRequest {
  /**
   * 实例 ID 列表，当前最多支持 1 个。
   */
  InstanceIds: Array<string>
}

/**
 * ApplyInstanceSnapshot返回参数结构体
 */
export interface ApplyInstanceSnapshotResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DetachDisks请求参数结构体
 */
export interface DetachDisksRequest {
  /**
   * 云硬盘ID列表。
   */
  DiskIds: Array<string>
}

/**
 * ModifyFirewallRules请求参数结构体
 */
export interface ModifyFirewallRulesRequest {
  /**
   * 实例 ID。
   */
  InstanceId: string

  /**
   * 防火墙规则列表。
   */
  FirewallRules: Array<FirewallRule>

  /**
   * 防火墙当前版本。用户每次更新防火墙规则时版本会自动加1，防止规则已过期，不填不考虑冲突。
   */
  FirewallVersion?: number
}

/**
 * CreateBlueprint请求参数结构体
 */
export interface CreateBlueprintRequest {
  /**
   * 镜像名称。最大长度60。
   */
  BlueprintName: string

  /**
   * 镜像描述。最大长度60。
   */
  Description?: string

  /**
   * 需要制作镜像的实例ID。
   */
  InstanceId?: string
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

  /**
   * 防火墙当前版本。用户每次更新防火墙规则时版本会自动加1，防止规则已过期，不填不考虑冲突。
   */
  FirewallVersion?: number
}

/**
 * DescribeInstanceVncUrl请求参数结构体
 */
export interface DescribeInstanceVncUrlRequest {
  /**
   * 实例 ID。可通过[DescribeInstances](https://cloud.tencent.com/document/api/1207/47573)接口返回值中的InstanceId获取。
   */
  InstanceId: string
}

/**
 * ModifyFirewallRuleDescription请求参数结构体
 */
export interface ModifyFirewallRuleDescriptionRequest {
  /**
   * 实例 ID。
   */
  InstanceId: string

  /**
   * 防火墙规则。
   */
  FirewallRule: FirewallRule

  /**
   * 防火墙当前版本。用户每次更新防火墙规则时版本会自动加1，防止规则已过期，不填不考虑冲突。
   */
  FirewallVersion?: number
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
 * TerminateInstances返回参数结构体
 */
export interface TerminateInstancesResponse {
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
 * DescribeInstancesDiskNum请求参数结构体
 */
export interface DescribeInstancesDiskNumRequest {
  /**
   * 实例ID列表。
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
取值：APP_OS（应用镜像 ）；PURE_OS（系统镜像）；PRIVATE（自定义镜像）；SHARED（共享镜像）。
类型：String
必选：否
<li>platform-type</li>按照【镜像平台类型】进行过滤。
取值： LINUX_UNIX（Linux/Unix系统）；WINDOWS（Windows 系统）。
类型：String
必选：否
<li>blueprint-name</li>按照【镜像名称】进行过滤。
类型：String
必选：否
<li>blueprint-state</li>按照【镜像状态】进行过滤。
类型：String
必选：否

每次请求的 Filters 的上限为 10，Filter.Values 的上限为 5。参数不支持同时指定 BlueprintIds 和 Filters 。
      */
  Filters?: Array<Filter>
}

/**
 * 实例可退还信息。
 */
export interface InstanceReturnable {
  /**
   * 实例 ID。
   */
  InstanceId: string

  /**
   * 实例是否可退还。
   */
  IsReturnable: boolean

  /**
   * 实例退还失败错误码。
   */
  ReturnFailCode: number

  /**
   * 实例退还失败错误信息。
   */
  ReturnFailMessage: string
}

/**
 * DescribeInstancesDeniedActions返回参数结构体
 */
export interface DescribeInstancesDeniedActionsResponse {
  /**
   * 实例操作限制列表详细信息。
   */
  InstanceDeniedActionSet: Array<InstanceDeniedActions>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyDisksAttribute请求参数结构体
 */
export interface ModifyDisksAttributeRequest {
  /**
   * 云硬盘ID列表。
   */
  DiskIds: Array<string>

  /**
   * 云硬盘名称。
   */
  DiskName: string
}

/**
 * Docker容器映射的端口
 */
export interface DockerContainerPublishPort {
  /**
   * 主机端口
   */
  HostPort: number

  /**
   * 容器端口
   */
  ContainerPort: number

  /**
      * 对外绑定IP，默认0.0.0.0
注意：此字段可能返回 null，表示取不到有效值。
      */
  Ip?: string

  /**
      * 协议，默认tcp，支持tcp/udp/sctp
注意：此字段可能返回 null，表示取不到有效值。
      */
  Protocol?: string
}

/**
 * DescribeSnapshotsDeniedActions返回参数结构体
 */
export interface DescribeSnapshotsDeniedActionsResponse {
  /**
   * 快照操作限制列表详细信息。
   */
  SnapshotDeniedActionSet: Array<SnapshotDeniedActions>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
 * 快照操作限制列表。
 */
export interface SnapshotDeniedActions {
  /**
   * 快照 ID。
   */
  SnapshotId: string

  /**
   * 操作限制列表。
   */
  DeniedActions: Array<DeniedAction>
}

/**
 * DeleteSnapshots请求参数结构体
 */
export interface DeleteSnapshotsRequest {
  /**
   * 要删除的快照 ID 列表，可通过 DescribeSnapshots 查询。
   */
  SnapshotIds: Array<string>
}

/**
 * ModifyDisksRenewFlag返回参数结构体
 */
export interface ModifyDisksRenewFlagResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifySnapshotAttribute请求参数结构体
 */
export interface ModifySnapshotAttributeRequest {
  /**
   * 快照 ID, 可通过 DescribeSnapshots 查询。
   */
  SnapshotId: string

  /**
   * 新的快照名称，最长为 60 个字符。
   */
  SnapshotName?: string
}

/**
 * DescribeDisks返回参数结构体
 */
export interface DescribeDisksResponse {
  /**
   * 云硬盘信息列表。
   */
  DiskSet: Array<Disk>

  /**
   * 符合条件的云硬盘信息数量。
   */
  TotalCount: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeBundleDiscount返回参数结构体
 */
export interface DescribeBundleDiscountResponse {
  /**
   * 币种：CNY人民币，USD 美元。
   */
  Currency: string

  /**
   * 折扣梯度详情，每个梯度包含的信息有：时长，折扣数，总价，折扣价，折扣详情（用户折扣、官网折扣、最终折扣）。
   */
  DiscountDetail: Array<DiscountDetail>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteSnapshots返回参数结构体
 */
export interface DeleteSnapshotsResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyDisksRenewFlag请求参数结构体
 */
export interface ModifyDisksRenewFlagRequest {
  /**
   * 云硬盘ID列表。
   */
  DiskIds: Array<string>

  /**
   * 续费标识。
   */
  RenewFlag: string
}

/**
 * DisassociateInstancesKeyPairs请求参数结构体
 */
export interface DisassociateInstancesKeyPairsRequest {
  /**
   * 密钥对 ID 列表。每次请求批量密钥对的上限为 100。
   */
  KeyIds: Array<string>

  /**
   * 实例 ID 列表。每次请求批量实例的上限为 100。可通过[DescribeInstances](https://cloud.tencent.com/document/api/1207/47573)接口返回值中的InstanceId获取。
   */
  InstanceIds: Array<string>
}

/**
 * 数据盘价格
 */
export interface DataDiskPrice {
  /**
   * 云硬盘ID。
   */
  DiskId: string

  /**
   * 云硬盘单价。
   */
  OriginalDiskPrice: number

  /**
   * 云硬盘总价。
   */
  OriginalPrice: number

  /**
   * 折扣。
   */
  Discount: number

  /**
   * 折后总价。
   */
  DiscountPrice: number
}

/**
 * ImportKeyPair请求参数结构体
 */
export interface ImportKeyPairRequest {
  /**
   * 密钥对名称，可由数字，字母和下划线组成，长度不超过 25 个字符。
   */
  KeyName: string

  /**
   * 密钥对的公钥内容， OpenSSH RSA 格式。
   */
  PublicKey: string
}

/**
 * DeleteBlueprints返回参数结构体
 */
export interface DeleteBlueprintsResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyInstancesLoginKeyPairAttribute请求参数结构体
 */
export interface ModifyInstancesLoginKeyPairAttributeRequest {
  /**
   * 实例 ID 列表。每次请求批量实例的上限为 100。
   */
  InstanceIds: Array<string>

  /**
   * 是否允许使用默认密钥对登录，YES：允许登录；NO：禁止登录
   */
  PermitLogin?: string
}

/**
 * IsolateInstances请求参数结构体
 */
export interface IsolateInstancesRequest {
  /**
   * 实例ID列表。一个或多个待操作的实例ID。可通过[DescribeInstances](https://cloud.tencent.com/document/api/1207/47573)接口返回值中的InstanceId获取。每次请求退还实例和数据盘数量总计上限为20。
   */
  InstanceIds: Array<string>

  /**
      * 是否退还挂载的数据盘。取值范围：
TRUE：表示退还实例同时退还其挂载的数据盘。
FALSE：表示退还实例同时不再退还其挂载的数据盘。
默认取值：TRUE。
      */
  IsolateDataDisk?: boolean
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
 * CreateInstances返回参数结构体
 */
export interface CreateInstancesResponse {
  /**
      * 当通过本接口来创建实例时会返回该参数，表示一个或多个实例ID。返回实例ID列表并不代表实例创建成功。

可根据 DescribeInstances 接口查询返回的InstancesSet中对应实例的ID的状态来判断创建是否完成；如果实例状态由“启动中”变为“运行中”，则为创建成功。
      */
  InstanceIdSet: Array<string>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyBlueprintAttribute返回参数结构体
 */
export interface ModifyBlueprintAttributeResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeFirewallRulesTemplate返回参数结构体
 */
export interface DescribeFirewallRulesTemplateResponse {
  /**
   * 符合条件的防火墙规则数量。
   */
  TotalCount: number

  /**
   * 防火墙规则详细信息列表。
   */
  FirewallRuleSet: Array<FirewallRuleInfo>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeRegions请求参数结构体
 */
export type DescribeRegionsRequest = null

/**
 * DescribeInstancesDiskNum返回参数结构体
 */
export interface DescribeInstancesDiskNumResponse {
  /**
   * 挂载信息列表
   */
  AttachDetailSet: Array<AttachDetail>

  /**
   * 挂载信息数量
   */
  TotalCount: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * InquirePriceCreateBlueprint返回参数结构体
 */
export interface InquirePriceCreateBlueprintResponse {
  /**
   * 自定义镜像的价格参数。
   */
  BlueprintPrice: BlueprintPrice

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeInstancesReturnable请求参数结构体
 */
export interface DescribeInstancesReturnableRequest {
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
 * 可退还云硬盘详细信息
 */
export interface DiskReturnable {
  /**
   * 云硬盘ID。
   */
  DiskId: string

  /**
   * 云硬盘是否可退还。
   */
  IsReturnable: boolean

  /**
   * 云硬盘退还失败错误码。
   */
  ReturnFailCode: number

  /**
   * 云硬盘退还失败错误信息。
   */
  ReturnFailMessage: string
}

/**
 * DescribeBlueprints返回参数结构体
 */
export interface DescribeBlueprintsResponse {
  /**
   * 符合条件的镜像数量。
   */
  TotalCount: number

  /**
   * 镜像详细信息列表。
   */
  BlueprintSet: Array<Blueprint>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeKeyPairs请求参数结构体
 */
export interface DescribeKeyPairsRequest {
  /**
   * 密钥对 ID 列表。
   */
  KeyIds?: Array<string>

  /**
   * 偏移量，默认为 0。
   */
  Offset?: number

  /**
   * 返回数量，默认为 20，最大值为 100。
   */
  Limit?: number

  /**
      * 过滤器列表。
<li>key-id</li>按照【密钥对ID】进行过滤。
类型：String
必选：否
<li>key-name</li>按照【密钥对名称】进行过滤。
类型：String
必选：否
每次请求的 Filters 的上限为 10，Filter.Values 的上限为 5。参数不支持同时指定 KeyIds 和 Filters。
      */
  Filters?: Array<Filter>
}

/**
 * DescribeCcnAttachedInstances请求参数结构体
 */
export type DescribeCcnAttachedInstancesRequest = null

/**
 * ResetInstancesPassword返回参数结构体
 */
export interface ResetInstancesPasswordResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
<li>PENDING：表示创建中</li><li>LAUNCH_FAILED：表示创建失败</li><li>RUNNING：表示运行中</li><li>STOPPED：表示关机</li><li>STARTING：表示开机中</li><li>STOPPING：表示关机中</li><li>REBOOTING：表示重启中</li><li>SHUTDOWN：表示停止待销毁</li><li>TERMINATING：表示销毁中</li><li>DELETING：表示删除中</li><li>FREEZING：表示冻结中</li>
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

  /**
   * 可用区。
   */
  Zone: string

  /**
   * 实例绑定的标签列表。
   */
  Tags: Array<Tag>

  /**
      * 实例封禁状态。取值范围：
<li>NORMAL实例正常。</li><li>NETWORK_RESTRICT：网络封禁。</li>
      */
  InstanceRestrictState: string
}

/**
 * Docker容器挂载卷
 */
export interface DockerContainerVolume {
  /**
   * 容器路径
   */
  ContainerPath: string

  /**
   * 主机路径
   */
  HostPath?: string
}

/**
 * IsolateInstances返回参数结构体
 */
export interface IsolateInstancesResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateKeyPair返回参数结构体
 */
export interface CreateKeyPairResponse {
  /**
   * 密钥对信息。
   */
  KeyPair: KeyPair

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeInstanceVncUrl返回参数结构体
 */
export interface DescribeInstanceVncUrlResponse {
  /**
   * 实例的管理终端地址。
   */
  InstanceVncUrl: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyFirewallRules返回参数结构体
 */
export interface ModifyFirewallRulesResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 云硬盘价格
 */
export interface DiskPrice {
  /**
   * 云硬盘单价。
   */
  OriginalDiskPrice: number

  /**
   * 云硬盘总价。
   */
  OriginalPrice: number

  /**
   * 折扣。
   */
  Discount: number

  /**
   * 折后总价。
   */
  DiscountPrice: number
}

/**
 * DescribeCcnAttachedInstances返回参数结构体
 */
export interface DescribeCcnAttachedInstancesResponse {
  /**
      * 云联网关联的实例列表。
注意：此字段可能返回 null，表示取不到有效值。
      */
  CcnAttachedInstanceSet: Array<CcnAttachedInstance>

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

  /**
   * 可用区列表。默认为全部可用区。
   */
  Zones?: Array<string>
}

/**
 * 描述了镜像信息。
 */
export interface Blueprint {
  /**
   * 镜像 ID  ，是 Blueprint 的唯一标识。
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
   * 镜像类型，如 APP_OS、PURE_OS、PRIVATE。
   */
  BlueprintType: string

  /**
   * 镜像图片 URL。
   */
  ImageUrl: string

  /**
   * 镜像所需系统盘大小，单位 GB。
   */
  RequiredSystemDiskSize: number

  /**
   * 镜像状态。
   */
  BlueprintState: string

  /**
      * 创建时间。按照 ISO8601 标准表示，并且使用 UTC 时间。 
格式为： YYYY-MM-DDThh:mm:ssZ。
注意：此字段可能返回 null，表示取不到有效值。
      */
  CreatedTime: string

  /**
   * 镜像名称。
   */
  BlueprintName: string

  /**
   * 镜像是否支持自动化助手。
   */
  SupportAutomationTools: boolean

  /**
   * 镜像所需内存大小, 单位: GB
   */
  RequiredMemorySize: number

  /**
      * CVM镜像共享到轻量应用服务器轻量应用服务器后的CVM镜像ID。
注意：此字段可能返回 null，表示取不到有效值。
      */
  ImageId: string
}

/**
 * 限制操作。
 */
export interface DeniedAction {
  /**
   * 限制操作名。
   */
  Action: string

  /**
   * 限制操作消息码。
   */
  Code: string

  /**
   * 限制操作消息。
   */
  Message: string
}

/**
 * ModifyInstancesLoginKeyPairAttribute返回参数结构体
 */
export interface ModifyInstancesLoginKeyPairAttributeResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * InquirePriceRenewDisks返回参数结构体
 */
export interface InquirePriceRenewDisksResponse {
  /**
   * 云硬盘价格。
   */
  DiskPrice: DiskPrice

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
"CAREFREE": 无忧套餐
      */
  BundleDisplayLabel: string
}

/**
 * 云硬盘配置
 */
export interface DiskConfig {
  /**
   * 可用区。
   */
  Zone: string

  /**
   * 云硬盘类型。
   */
  DiskType: string

  /**
   * 云硬盘可售卖状态。
   */
  DiskSalesState: string

  /**
   * 最大云硬盘大小。
   */
  MaxDiskSize: number

  /**
   * 最小云硬盘大小。
   */
  MinDiskSize: number

  /**
   * 云硬盘步长。
   */
  DiskStepSize: number
}

/**
 * InquirePriceCreateInstances返回参数结构体
 */
export interface InquirePriceCreateInstancesResponse {
  /**
   * 询价信息。
   */
  Price: Price

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeSnapshotsDeniedActions请求参数结构体
 */
export interface DescribeSnapshotsDeniedActionsRequest {
  /**
   * 快照 ID 列表, 可通过 DescribeSnapshots 查询。
   */
  SnapshotIds: Array<string>
}

/**
 * DescribeDiskDiscount返回参数结构体
 */
export interface DescribeDiskDiscountResponse {
  /**
   * 币种：CNY人民币，USD 美元。
   */
  Currency: string

  /**
   * 折扣梯度详情，每个梯度包含的信息有：时长，折扣数，总价，折扣价，折扣详情（用户折扣、官网折扣、最终折扣）。
   */
  DiscountDetail: Array<DiscountDetail>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ResetInstancesPassword请求参数结构体
 */
export interface ResetInstancesPasswordRequest {
  /**
   * 实例 ID 列表。每次请求批量实例的上限为 100。
   */
  InstanceIds: Array<string>

  /**
      * 实例登录密码。不同操作系统类型密码复杂度限制不一样，具体如下：
`LINUX_UNIX` 实例密码必须 8-30 位，推荐使用 12 位以上密码，不能以“/”开头，至少包含以下字符中的三种不同字符，字符种类：<br><li>小写字母：[a-z]<br><li>大写字母：[A-Z]<br><li>数字：0-9<br><li>特殊字符： ()\`~!@#$%^&\*-+=\_|{}[]:;'<>,.?/</li>
`WINDOWS` 实例密码必须 12-30 位，不能以“/”开头且不包括用户名，至少包含以下字符中的三种不同字符<br><li>小写字母：[a-z]<br><li>大写字母：[A-Z]<br><li>数字： 0-9<br><li>特殊字符：()\`~!@#$%^&\*-+=\_|{}[]:;' <>,.?/<br><li>如果实例即包含 `LINUX_UNIX` 实例又包含 `WINDOWS` 实例，则密码复杂度限制按照 `WINDOWS` 实例的限制。
      */
  Password: string

  /**
   * 待重置密码的实例操作系统用户名。不得超过 64 个字符。
   */
  UserName?: string
}

/**
 * 云硬盘包年包月相关参数设置
 */
export interface DiskChargePrepaid {
  /**
   * 新购周期。
   */
  Period: number

  /**
   * 续费标识。
   */
  RenewFlag?: string

  /**
   * 新购单位. 默认值: "m"。
   */
  TimeUnit?: string
}

/**
 * CreateKeyPair请求参数结构体
 */
export interface CreateKeyPairRequest {
  /**
   * 密钥对名称，可由数字，字母和下划线组成，长度不超过 25 个字符。
   */
  KeyName: string
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
<li>zone</li>按照【可用区】进行过滤。
类型：String
必选：否
<li>instance-state</li>按照【实例状态】进行过滤。
类型：String
必选：否
每次请求的 Filters 的上限为 10，Filter.Values 的上限为 100。参数不支持同时指定 InstanceIds 和 Filters。
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
 * DetachCcn请求参数结构体
 */
export interface DetachCcnRequest {
  /**
   * 云联网实例ID。
   */
  CcnId: string
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
 * DescribeSnapshots返回参数结构体
 */
export interface DescribeSnapshotsResponse {
  /**
   * 快照的数量。
   */
  TotalCount: number

  /**
   * 快照的详情列表。
   */
  SnapshotSet: Array<Snapshot>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 描述了快照相关信息。
 */
export interface Snapshot {
  /**
   * 快照 ID。
   */
  SnapshotId: string

  /**
   * 创建此快照的磁盘类型。取值：<li>SYSTEM_DISK：系统盘</li>
   */
  DiskUsage: string

  /**
   * 创建此快照的磁盘 ID。
   */
  DiskId: string

  /**
   * 创建此快照的磁盘大小，单位 GB。
   */
  DiskSize: number

  /**
   * 快照名称，用户自定义的快照别名。
   */
  SnapshotName: string

  /**
      * 快照的状态。取值范围：
<li>NORMAL：正常 </li>
<li>CREATING：创建中</li>
<li>ROLLBACKING：回滚中。</li>
      */
  SnapshotState: string

  /**
   * 创建或回滚快照进度百分比，成功后此字段取值为 100。
   */
  Percent: number

  /**
      * 快照的最新操作，只有创建、回滚快照时记录。
取值如 CreateInstanceSnapshot，RollbackInstanceSnapshot。
注意：此字段可能返回 null，表示取不到有效值。
      */
  LatestOperation: string

  /**
      * 快照的最新操作状态，只有创建、回滚快照时记录。
取值范围：
<li>SUCCESS：表示操作成功</li>
<li>OPERATING：表示操作执行中</li>
<li>FAILED：表示操作失败</li>
注意：此字段可能返回 null，表示取不到有效值。
      */
  LatestOperationState: string

  /**
      * 快照最新操作的唯一请求 ID，只有创建、回滚快照时记录。
注意：此字段可能返回 null，表示取不到有效值。
      */
  LatestOperationRequestId: string

  /**
   * 快照的创建时间。
   */
  CreatedTime: string
}

/**
 * ModifyFirewallRuleDescription返回参数结构体
 */
export interface ModifyFirewallRuleDescriptionResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDiskDiscount请求参数结构体
 */
export interface DescribeDiskDiscountRequest {
  /**
   * 云硬盘类型, 取值: "CLOUD_PREMIUM"。
   */
  DiskType: string

  /**
   * 云硬盘大小。
   */
  DiskSize: number
}

/**
 * InquirePriceCreateBlueprint请求参数结构体
 */
export interface InquirePriceCreateBlueprintRequest {
  /**
   * 自定义镜像的个数。默认值为1。
   */
  BlueprintCount?: number
}

/**
 * AttachDisks返回参数结构体
 */
export interface AttachDisksResponse {
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

  /**
   * 防火墙当前版本。用户每次更新防火墙规则时版本会自动加1，防止规则已过期，不填不考虑冲突。
   */
  FirewallVersion?: number
}

/**
 * 描述镜像软件信息。
 */
export interface Software {
  /**
   * 软件名称。
   */
  Name: string

  /**
   * 软件版本。
   */
  Version: string

  /**
   * 软件图片 URL。
   */
  ImageUrl: string

  /**
   * 软件安装目录。
   */
  InstallDir: string

  /**
   * 软件详情列表。
   */
  DetailSet: Array<SoftwareDetail>
}

/**
 * DescribeFirewallRules返回参数结构体
 */
export interface DescribeFirewallRulesResponse {
  /**
   * 符合条件的防火墙规则数量。
   */
  TotalCount: number

  /**
   * 防火墙规则详细信息列表。
   */
  FirewallRuleSet: Array<FirewallRuleInfo>

  /**
   * 防火墙版本号。
   */
  FirewallVersion: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeInstancesReturnable返回参数结构体
 */
export interface DescribeInstancesReturnableResponse {
  /**
   * 符合条件的实例数量。
   */
  TotalCount: number

  /**
   * 可退还实例详细信息列表。
   */
  InstanceReturnableSet: Array<InstanceReturnable>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 容器环境变量
 */
export interface ContainerEnv {
  /**
   * 环境变量Key
   */
  Key: string

  /**
   * 环境变量值
   */
  Value: string
}

/**
 * 描述防火墙规则信息。
 */
export interface FirewallRule {
  /**
   * 协议，取值：TCP，UDP，ICMP，ALL。
   */
  Protocol: string

  /**
   * 端口，取值：ALL，单独的端口，逗号分隔的离散端口，减号分隔的端口范围。
   */
  Port?: string

  /**
   * 网段或 IP (互斥)。默认为 0.0.0.0/0，表示所有来源。
   */
  CidrBlock?: string

  /**
   * 取值：ACCEPT，DROP。默认为 ACCEPT。
   */
  Action?: string

  /**
   * 防火墙规则描述。
   */
  FirewallRuleDescription?: string
}

/**
 * DeleteBlueprints请求参数结构体
 */
export interface DeleteBlueprintsRequest {
  /**
   * 镜像ID列表。镜像ID，可通过[DescribeBlueprints](https://cloud.tencent.com/document/product/1207/47689)接口返回值中的BlueprintId获取。
   */
  BlueprintIds: Array<string>
}

/**
 * 描述防火墙规则详细信息。
 */
export interface FirewallRuleInfo {
  /**
   * 应用类型，取值：自定义，HTTP(80)，HTTPS(443)，Linux登录(22)，Windows登录(3389)，MySQL(3306)，SQL Server(1433)，全部TCP，全部UDP，Ping-ICMP，ALL。
   */
  AppType: string

  /**
   * 协议，取值：TCP，UDP，ICMP，ALL。
   */
  Protocol: string

  /**
   * 端口，取值：ALL，单独的端口，逗号分隔的离散端口，减号分隔的端口范围。
   */
  Port: string

  /**
   * 网段或 IP (互斥)。默认为 0.0.0.0/0，表示所有来源。
   */
  CidrBlock: string

  /**
   * 取值：ACCEPT，DROP。默认为 ACCEPT。
   */
  Action: string

  /**
   * 防火墙规则描述。
   */
  FirewallRuleDescription: string
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
 * DescribeDisks请求参数结构体
 */
export interface DescribeDisksRequest {
  /**
   * 云硬盘ID列表。
   */
  DiskIds?: Array<string>

  /**
      * 过滤器列表。
disk-id
按照【云硬盘 ID】进行过滤。
类型：String
必选：否
instance-id
按照【实例ID】进行过滤。
类型：String
必选：否
disk-name
按照【云硬盘名称】进行过滤。
类型：String
必选：否
zone
按照【可用区】进行过滤。
类型：String
必选：否
disk-usage
按照【云硬盘类型】进行过滤。
类型：String
必选：否
disk-state
按照【云硬盘状态】进行过滤。
类型：String
必选：否
每次请求的 Filters 的上限为 10，Filter.Values 的上限为 5。参数不支持同时指定 DiskIds 和 Filters。
      */
  Filters?: Array<Filter>

  /**
   * 返回数量，默认为20，最大值为100。
   */
  Limit?: number

  /**
   * 偏移量，默认为0。
   */
  Offset?: number

  /**
   * 云硬盘列表排序的依据字段。取值范围："CREATED_TIME"：依据云硬盘的创建时间排序。 "EXPIRED_TIME"：依据云硬盘的到期时间排序。"DISK_SIZE"：依据云硬盘的大小排序。默认按云硬盘创建时间排序。
   */
  OrderField?: string

  /**
   * 输出云硬盘列表的排列顺序。取值范围："ASC"：升序排列。 "DESC"：降序排列。默认按降序排列。
   */
  Order?: string
}

/**
 * DescribeInstances返回参数结构体
 */
export interface DescribeInstancesResponse {
  /**
   * 符合条件的实例数量。
   */
  TotalCount: number

  /**
   * 实例详细信息列表。
   */
  InstanceSet: Array<Instance>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeZones返回参数结构体
 */
export interface DescribeZonesResponse {
  /**
   * 可用区数量
   */
  TotalCount: number

  /**
   * 可用区详细信息列表
   */
  ZoneInfoSet: Array<ZoneInfo>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateBlueprint返回参数结构体
 */
export interface CreateBlueprintResponse {
  /**
   * 自定义镜像ID。
   */
  BlueprintId: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 折扣详情信息。
 */
export interface PolicyDetail {
  /**
   * 用户折扣。
   */
  UserDiscount: number

  /**
   * 公共折扣。
   */
  CommonDiscount: number

  /**
   * 最终折扣。
   */
  FinalDiscount: number
}

/**
 * DetachDisks返回参数结构体
 */
export interface DetachDisksResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 实例密码登录配置信息。
 */
export interface LoginConfiguration {
  /**
      * <li>"YES"代表选择自动生成密码，这时不指定Password字段。</li>
<li>"NO"代表选择自定义密码，这时要指定Password字段。</li>
      */
  AutoGeneratePassword: string

  /**
      * 实例登录密码。具体按照操作系统的复杂度要求。
WINDOWS 实例密码必须 12-30 位，不能以“/”开头且不包括用户名，至少包含以下字符中的三种不同字符
<li>小写字母：[a-z]</li>
<li>大写字母：[A-Z]</li>
<li>数字： 0-9</li>
<li>特殊字符：()`~!@#$%^&*-+=_|{}[]:;' <>,.?/</li>
      */
  Password?: string
}

/**
 * DescribeResetInstanceBlueprints请求参数结构体
 */
export interface DescribeResetInstanceBlueprintsRequest {
  /**
   * 实例ID
   */
  InstanceId: string

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
取值： APP_OS（应用镜像 ）；PURE_OS（ 系统镜像）；PRIVATE（自定义镜像）。
类型：String
必选：否
<li>platform-type</li>按照【镜像平台类型】进行过滤。
取值： LINUX_UNIX（Linux/Unix系统）；WINDOWS（Windows 系统）。
类型：String
必选：否
<li>blueprint-name</li>按照【镜像名称】进行过滤。
类型：String
必选：否
<li>blueprint-state</li>按照【镜像状态】进行过滤。
类型：String
必选：否

每次请求的 Filters 的上限为 10，Filter.Values 的上限为 5。参数不支持同时指定 BlueprintIds 和 Filters 。
      */
  Filters?: Array<Filter>
}

/**
 * Docker容器创建时的配置
 */
export interface DockerContainerConfiguration {
  /**
   * 容器镜像地址
   */
  ContainerImage: string

  /**
   * 容器名称
   */
  ContainerName?: string

  /**
   * 环境变量列表
   */
  Envs?: Array<ContainerEnv>

  /**
   * 容器端口主机端口映射列表
   */
  PublishPorts?: Array<DockerContainerPublishPort>

  /**
   * 容器加载本地卷列表
   */
  Volumes?: Array<DockerContainerVolume>

  /**
   * 运行的命令
   */
  Command?: string
}

/**
 * ResetAttachCcn返回参数结构体
 */
export interface ResetAttachCcnResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyInstancesRenewFlag返回参数结构体
 */
export interface ModifyInstancesRenewFlagResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ApplyInstanceSnapshot请求参数结构体
 */
export interface ApplyInstanceSnapshotRequest {
  /**
   * 实例 ID。
   */
  InstanceId: string

  /**
   * 快照 ID。
   */
  SnapshotId: string
}

/**
 * DisassociateInstancesKeyPairs返回参数结构体
 */
export interface DisassociateInstancesKeyPairsResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * TerminateInstances请求参数结构体
 */
export interface TerminateInstancesRequest {
  /**
   * 实例ID列表。可通过[DescribeInstances](https://cloud.tencent.com/document/api/1207/47573)接口返回值中的InstanceId获取。
   */
  InstanceIds: Array<string>
}

/**
 * 续费云硬盘包年包月相关参数设置
 */
export interface RenewDiskChargePrepaid {
  /**
   * 新购周期。
   */
  Period?: number

  /**
   * 续费标识。
   */
  RenewFlag?: string

  /**
   * 周期单位. 默认值: "m"。
   */
  TimeUnit?: string

  /**
   * 当前实例到期时间。
   */
  CurInstanceDeadline?: string
}

/**
 * TerminateDisks请求参数结构体
 */
export interface TerminateDisksRequest {
  /**
   * 云硬盘ID列表。
   */
  DiskIds: Array<string>
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
 * DescribeDiskConfigs返回参数结构体
 */
export interface DescribeDiskConfigsResponse {
  /**
   * 云硬盘配置列表。
   */
  DiskConfigSet: Array<DiskConfig>

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
      * 网络计费类型，取值范围：
<li>按流量包付费：TRAFFIC_POSTPAID_BY_HOUR</li>
<li>按带宽付费： BANDWIDTH_POSTPAID_BY_HOUR</li>
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
 * RebootInstances返回参数结构体
 */
export interface RebootInstancesResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDisksDeniedActions返回参数结构体
 */
export interface DescribeDisksDeniedActionsResponse {
  /**
   * 云硬盘操作限制列表详细信息。
   */
  DiskDeniedActionSet: Array<DiskDeniedActions>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeInstanceLoginKeyPairAttribute请求参数结构体
 */
export interface DescribeInstanceLoginKeyPairAttributeRequest {
  /**
   * 实例ID。
   */
  InstanceId: string
}

/**
 * DescribeBundleDiscount请求参数结构体
 */
export interface DescribeBundleDiscountRequest {
  /**
   * 套餐 ID。
   */
  BundleId: string
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
 * DescribeDisksReturnable返回参数结构体
 */
export interface DescribeDisksReturnableResponse {
  /**
   * 可退还云硬盘详细信息列表。
   */
  DiskReturnableSet: Array<DiskReturnable>

  /**
   * 符合条件的云硬盘数量。
   */
  TotalCount: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * BlueprintPrice	自定义镜像的价格参数。
 */
export interface BlueprintPrice {
  /**
   * 镜像单价，原价。单位元。
   */
  OriginalBlueprintPrice: number

  /**
   * 镜像总价，原价。单位元。
   */
  OriginalPrice: number

  /**
   * 折扣。
   */
  Discount: number

  /**
   * 镜像折扣后总价。单位元。
   */
  DiscountPrice: number
}

/**
 * 描述通用资源配额信息。


 */
export interface GeneralResourceQuota {
  /**
   * 资源名称。
   */
  ResourceName: string

  /**
   * 资源当前可用数量。
   */
  ResourceQuotaAvailable: number

  /**
   * 资源总数量。
   */
  ResourceQuotaTotal: number
}

/**
 * DescribeResetInstanceBlueprints返回参数结构体
 */
export interface DescribeResetInstanceBlueprintsResponse {
  /**
   * 符合条件的镜像数量。
   */
  TotalCount: number

  /**
   * 镜像重置信息列表
   */
  ResetInstanceBlueprintSet: Array<ResetInstanceBlueprint>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDisksReturnable请求参数结构体
 */
export interface DescribeDisksReturnableRequest {
  /**
   * 云硬盘ID列表。
   */
  DiskIds?: Array<string>

  /**
   * 返回数量，默认为20，最大值为100。
   */
  Limit?: number

  /**
   * 偏移量，默认为0。
   */
  Offset?: number
}

/**
 * 描述镜像软件详细信息。
 */
export interface SoftwareDetail {
  /**
   * 详情唯一键。
   */
  Key: string

  /**
   * 详情标题。
   */
  Title: string

  /**
   * 详情值。
   */
  Value: string
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
 * 标签
 */
export interface Tag {
  /**
   * 标签键
   */
  Key: string

  /**
   * 标签值
   */
  Value: string
}

/**
 * ModifySnapshotAttribute返回参数结构体
 */
export interface ModifySnapshotAttributeResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeGeneralResourceQuotas返回参数结构体
 */
export interface DescribeGeneralResourceQuotasResponse {
  /**
   * 通用资源配额详细信息列表。
   */
  GeneralResourceQuotaSet: Array<GeneralResourceQuota>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyInstancesRenewFlag请求参数结构体
 */
export interface ModifyInstancesRenewFlagRequest {
  /**
   * 实例 ID 列表。每次请求批量实例的上限为 100。可通过[DescribeInstances](https://cloud.tencent.com/document/api/1207/47573)接口返回值中的InstanceId获取。
   */
  InstanceIds: Array<string>

  /**
   * 自动续费标识。取值范围：<br><li>NOTIFY_AND_AUTO_RENEW：通知过期且自动续费<br><li>NOTIFY_AND_MANUAL_RENEW：通知过期不自动续费<br><li>DISABLE_NOTIFY_AND_MANUAL_RENEW：不通知过期不自动续费<br><br>若该参数指定为NOTIFY_AND_AUTO_RENEW，在账户余额充足的情况下，实例到期后将按月自动续费。
   */
  RenewFlag: string
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

/**
 * DescribeModifyInstanceBundles请求参数结构体
 */
export interface DescribeModifyInstanceBundlesRequest {
  /**
   * 实例 ID。
   */
  InstanceId: string

  /**
      * 过滤器列表。
<li>bundle-id</li>按照【套餐 ID】进行过滤。
类型：String
必选：否
<li>support-platform-type</li>按照【系统类型】进行过滤。
取值： LINUX_UNIX（Linux/Unix系统）；WINDOWS（Windows 系统）
类型：String
必选：否
每次请求的 Filters 的上限为 10，Filter.Values 的上限为 5。
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
 * RenewInstances返回参数结构体
 */
export interface RenewInstancesResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
 * 磁盘操作限制列表详细信息
 */
export interface DiskDeniedActions {
  /**
   * 云硬盘ID。
   */
  DiskId: string

  /**
   * 操作限制列表。
   */
  DeniedActions: Array<DeniedAction>
}

/**
 * InquirePriceCreateInstances请求参数结构体
 */
export interface InquirePriceCreateInstancesRequest {
  /**
   * 实例的套餐 ID。
   */
  BundleId: string

  /**
   * 创建数量，默认为 1。
   */
  InstanceCount?: number

  /**
   * 预付费模式，即包年包月相关参数设置。通过该参数可以指定包年包月实例的购买时长、是否设置自动续费等属性。若指定实例的付费模式为预付费则该参数必传。
   */
  InstanceChargePrepaid?: InstanceChargePrepaid

  /**
   * 应用镜像 ID，使用收费应用镜像时必填。可通过[DescribeBlueprints](https://cloud.tencent.com/document/product/1207/47689)接口返回值中的BlueprintId获取。
   */
  BlueprintId?: string
}

/**
 * 云联网关联的实例列表。
 */
export interface CcnAttachedInstance {
  /**
   * 云联网ID。
   */
  CcnId: string

  /**
   * 关联实例CIDR。
   */
  CidrBlock: Array<string>

  /**
      * 关联实例状态：

•  PENDING：申请中
•  ACTIVE：已连接
•  EXPIRED：已过期
•  REJECTED：已拒绝
•  DELETED：已删除
•  FAILED：失败的（2小时后将异步强制解关联）
•  ATTACHING：关联中
•  DETACHING：解关联中
•  DETACHFAILED：解关联失败（2小时后将异步强制解关联）
      */
  State: string

  /**
      * 关联时间。
注意：此字段可能返回 null，表示取不到有效值。
      */
  AttachedTime: string

  /**
   * 备注
   */
  Description: string
}

/**
 * DescribeModifyInstanceBundles返回参数结构体
 */
export interface DescribeModifyInstanceBundlesResponse {
  /**
   * 符合条件的套餐数量。
   */
  TotalCount: number

  /**
   * 变更套餐详细信息。
   */
  ModifyBundleSet: Array<ModifyBundle>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 挂载信息
 */
export interface AttachDetail {
  /**
   * 实例ID
   */
  InstanceId: string

  /**
   * 实例已挂载弹性云盘数量
   */
  AttachedDiskCount: number

  /**
   * 可挂载弹性云盘数量
   */
  MaxAttachCount: number
}

/**
 * ModifyDisksAttribute返回参数结构体
 */
export interface ModifyDisksAttributeResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateInstanceSnapshot请求参数结构体
 */
export interface CreateInstanceSnapshotRequest {
  /**
   * 需要创建快照的实例 ID。
   */
  InstanceId: string

  /**
   * 快照名称，最长为 60 个字符。
   */
  SnapshotName?: string
}

/**
 * 描述镜像实例信息。
 */
export interface BlueprintInstance {
  /**
   * 镜像信息。
   */
  Blueprint: Blueprint

  /**
   * 软件列表。
   */
  SoftwareSet: Array<Software>

  /**
   * 实例 ID。
   */
  InstanceId: string
}

/**
 * InquirePriceCreateDisks返回参数结构体
 */
export interface InquirePriceCreateDisksResponse {
  /**
   * 云硬盘价格。
   */
  DiskPrice: DiskPrice

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 描述了实例的计费模式
 */
export interface InstanceChargePrepaid {
  /**
   * 购买实例的时长，单位：月。取值范围：1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 24, 36, 48, 60。
   */
  Period: number

  /**
   * 自动续费标识。取值范围：<br><li>NOTIFY_AND_AUTO_RENEW：通知过期且自动续费<br><li>NOTIFY_AND_MANUAL_RENEW：通知过期不自动续费，用户需要手动续费<br><li>DISABLE_NOTIFY_AND_AUTO_RENEW：不自动续费，且不通知<br><br>默认取值：NOTIFY_AND_MANUAL_RENEW。若该参数指定为NOTIFY_AND_AUTO_RENEW，在账户余额充足的情况下，实例到期后将按月自动续费。
   */
  RenewFlag?: string
}

/**
 * ModifyInstancesAttribute返回参数结构体
 */
export interface ModifyInstancesAttributeResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeInstanceLoginKeyPairAttribute返回参数结构体
 */
export interface DescribeInstanceLoginKeyPairAttributeResponse {
  /**
   * 是否允许使用默认密钥对登录，YES：允许登录 NO：禁止登录。
   */
  PermitLogin: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}
