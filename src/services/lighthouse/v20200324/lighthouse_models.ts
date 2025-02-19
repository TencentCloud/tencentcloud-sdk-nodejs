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
 * RunDockerContainers请求参数结构体
 */
export interface RunDockerContainersRequest {
  /**
   * 实例ID。可通过[DescribeInstances](https://cloud.tencent.com/document/product/1207/47573)接口返回值中的InstanceId获取。
   */
  InstanceId: string
  /**
   * 要创建的容器列表。
   */
  Containers: Array<DockerContainerConfiguration>
}

/**
 * DescribeDockerContainers请求参数结构体
 */
export interface DescribeDockerContainersRequest {
  /**
   * 实例ID。可通过[DescribeInstances](https://cloud.tencent.com/document/product/1207/47573)接口返回值中的InstanceId获取。
   */
  InstanceId: string
  /**
   * 容器ID列表。可通过[DescribeDockerContainers](https://cloud.tencent.com/document/product/1207/95473)接口返回值中的ContainerId获取。
   */
  ContainerIds?: Array<string>
  /**
   * 返回数量，默认为 20，最大值为 100。
   */
  Limit?: number
  /**
   * 偏移量，默认为 0。
   */
  Offset?: number
  /**
   * 过滤器列表。
<li>container-id</li>按照【容器ID】进行过滤。
类型：String
必选：否
<li>container-name</li>按照【容器名称】进行过滤。
类型：String
必选：否
每次请求的 Filters 的上限为 10，Filter.Values 的上限为 5。参数不支持同时指定 ContainerIds 和 Filters。
   */
  Filters?: Array<Filter>
}

/**
 * AssociateInstancesKeyPairs返回参数结构体
 */
export interface AssociateInstancesKeyPairsResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
 * DescribeDisksDeniedActions请求参数结构体
 */
export interface DescribeDisksDeniedActionsRequest {
  /**
   * 云硬盘ID列表。每次批量请求云硬盘的上限为 100。可通过[DescribeDisks](https://cloud.tencent.com/document/product/1207/66093)接口返回值中的DiskId获取。
   */
  DiskIds: Array<string>
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
   */
  Ip?: string
  /**
   * 协议，默认tcp，支持tcp/udp/sctp
   */
  Protocol?: string
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
 * DescribeDiskBackups请求参数结构体
 */
export interface DescribeDiskBackupsRequest {
  /**
   * 查询的云硬盘备份点ID列表。最大支持 100 个。参数不支持同时指定 DiskBackupIds 和 Filters。
   */
  DiskBackupIds?: Array<string>
  /**
   * 过滤器列表。
<li>disk-backup-id</li>按照【云硬盘备份点 ID】进行过滤。
类型：String
必选：否
<li>disk-id</li>按照【云硬盘 ID】进行过滤。
类型：String
必选：否
<li>disk-backup-state</li>按照【云硬盘备份点状态】进行过滤。
类型：String
必选：否
取值：参考数据结构 
<a href="https://cloud.tencent.com/document/product/1207/47576#DiskBackup">DescribeSnapshots</a> 下的DiskBackupState取值。
<li>disk-usage</li>按照【云硬盘类型】进行过滤。
类型：String
必选：否
取值：SYSTEM_DISK或DATA_DISK
每次请求的 Filters 的上限为 10，Filter.Values 的上限为5。参数不支持同时指定DiskBackupIds 和 Filters。
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
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeFirewallTemplateRules请求参数结构体
 */
export interface DescribeFirewallTemplateRulesRequest {
  /**
   * 防火墙模板ID。
   */
  TemplateId: string
  /**
   * 防火墙模板规则ID列表。
   */
  TemplateRuleIds?: Array<string>
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
 * AttachCcn请求参数结构体
 */
export interface AttachCcnRequest {
  /**
   * 云联网实例ID。可通过[DescribeCcns](https://cloud.tencent.com/document/product/215/19199)接口返回值中的CcnId获取。
   */
  CcnId: string
}

/**
 * CreateInstances请求参数结构体
 */
export interface CreateInstancesRequest {
  /**
   * 套餐ID。可以通过调用 [DescribeBundles](https://cloud.tencent.com/document/api/1207/47575) 接口获取。
   */
  BundleId: string
  /**
   * 镜像ID。可以通过调用 [DescribeBlueprints](https://cloud.tencent.com/document/api/1207/47689) 接口获取。
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
   * 可用区列表。
不填此参数，表示为随机可用区。
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
   * 实例登录密码信息配置。默认缺失情况下代表用户选择实例创建后设置登录密码。
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
  /**
   * 防火墙模板ID。若不指定该参数，则使用默认防火墙策略。
   */
  FirewallTemplateId?: string
  /**
   * 标签键和标签值。
如果指定多个标签，则会为指定资源同时创建并绑定该多个标签。
同一个资源上的同一个标签键只能对应一个标签值。如果您尝试添加已有标签键，则对应的标签值会更新为新值。
如果标签不存在会为您自动创建标签。
数组最多支持10个元素。
   */
  Tags?: Array<Tag>
  /**
   * 创建实例后自动执行的命令。
   */
  InitCommand?: Command
  /**
   * 主域名。
   */
  DomainName?: string
  /**
   * 子域名。
   */
  Subdomain?: string
}

/**
 * DescribeZones请求参数结构体
 */
export interface DescribeZonesRequest {
  /**
   * 可用区列表排序的依据字段。取值范围：
<li>ZONE：依据可用区排序。</li>
<li>INSTANCE_DISPLAY_LABEL：依据可用区展示标签排序，可用区展示标签包括：HIDDEN（隐藏）、NORMAL（普通）、SELECTED（默认选中），默认采用的升序排列为：['HIDDEN', 'NORMAL', 'SELECTED']。
默认按可用区排序。</li>
   */
  OrderField?: string
  /**
   * 输出可用区列表的排列顺序。取值范围：
<li>ASC：升序排列。 </li>
<li>DESC：降序排列。</li>
默认按升序排列。
   */
  Order?: string
}

/**
 * RebootInstances返回参数结构体
 */
export interface RebootInstancesResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

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
  TotalCount?: number
  /**
   * 镜像实例列表信息。
   */
  BlueprintInstanceSet?: Array<BlueprintInstance>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 实例操作限制列表。
 */
export interface InstanceDeniedActions {
  /**
   * 实例 ID。
   */
  InstanceId?: string
  /**
   * 操作限制列表。
   */
  DeniedActions?: Array<DeniedAction>
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
  /**
   * 指定云硬盘备份点配额，不传时默认为不带备份点配额。目前只支持不带或设置1个云硬盘备份点配额。
   */
  DiskBackupQuota?: number
}

/**
 * 描述了实例可变更的套餐。
 */
export interface ModifyBundle {
  /**
   * 更改实例套餐后需要补的差价。
   */
  ModifyPrice?: Price
  /**
   * 变更套餐状态。取值：
<li>SOLD_OUT：套餐售罄</li>
<li>AVAILABLE：支持套餐变更</li>
<li>UNAVAILABLE：暂不支持套餐变更</li>
   */
  ModifyBundleState?: string
  /**
   * 套餐信息。
   */
  Bundle?: Bundle
  /**
   * 不支持套餐变更原因信息。变更套餐状态为"AVAILABLE"时, 该信息为空
   */
  NotSupportModifyMessage?: string
}

/**
 * DetachCcn返回参数结构体
 */
export interface DetachCcnResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ShareBlueprintAcrossAccounts请求参数结构体
 */
export interface ShareBlueprintAcrossAccountsRequest {
  /**
   * 镜像ID, 可以通过[DescribeBlueprints](https://cloud.tencent.com/document/product/1207/47689)接口返回的BlueprintId获取。
   */
  BlueprintId: string
  /**
   * 接收共享镜像的账号Id列表。账号ID不同于QQ号，查询用户账号ID请查看账号信息中的账号ID栏。账号个数取值最大为10。
   */
  AccountIds: Array<string>
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
 * DescribeScenes返回参数结构体
 */
export interface DescribeScenesResponse {
  /**
   * 使用场景列表。
   */
  SceneSet?: Array<Scene>
  /**
   * 使用场景总数量。
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * InquirePriceRenewInstances返回参数结构体
 */
export interface InquirePriceRenewInstancesResponse {
  /**
   * 询价信息。默认为列表中第一个实例的价格信息。
   */
  Price?: Price
  /**
   * 数据盘价格信息列表。
   */
  DataDiskPriceSet?: Array<DataDiskPrice>
  /**
   * 待续费实例价格列表。
   */
  InstancePriceDetailSet?: Array<InstancePriceDetail>
  /**
   * 总计价格。
   */
  TotalPrice?: TotalPrice
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteFirewallRules返回参数结构体
 */
export interface DeleteFirewallRulesResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
 * DescribeDockerContainerDetail请求参数结构体
 */
export interface DescribeDockerContainerDetailRequest {
  /**
   * 实例ID。可通过[DescribeInstances](https://cloud.tencent.com/document/product/1207/47573)接口返回值中的InstanceId获取。
   */
  InstanceId: string
  /**
   * 容器ID。可通过[DescribeDockerContainers](https://cloud.tencent.com/document/product/1207/95473)接口返回值中的ContainerId获取。
   */
  ContainerId: string
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
- STARTER_BUNDLE_INSTANCE 入门型套餐实例
- HK_EXCLUSIVE_BUNDLE_INSTANCE 中国香港专属型套餐实例
- CAREFREE_BUNDLE_INSTANCE 无忧型套餐实例
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
 * RestartDockerContainers请求参数结构体
 */
export interface RestartDockerContainersRequest {
  /**
   * 实例ID。可通过[DescribeInstances](https://cloud.tencent.com/document/product/1207/47573)接口返回值中的InstanceId获取。
   */
  InstanceId: string
  /**
   * 容器ID列表。可通过[DescribeDockerContainers](https://cloud.tencent.com/document/product/1207/95473)接口返回值中的ContainerId获取。
   */
  ContainerIds: Array<string>
}

/**
 * DeleteKeyPairs请求参数结构体
 */
export interface DeleteKeyPairsRequest {
  /**
   * 密钥对 ID 列表，每次请求批量密钥对的上限为 10。可通过[DescribeKeyPairs](https://cloud.tencent.com/document/api/1207/55540)接口返回值中的KeyId获取。
   */
  KeyIds: Array<string>
}

/**
 * RerunDockerContainer返回参数结构体
 */
export interface RerunDockerContainerResponse {
  /**
   * Docker活动ID。
   */
  DockerActivityId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 描述了镜像重置信息
 */
export interface ResetInstanceBlueprint {
  /**
   * 镜像详细信息
   */
  BlueprintInfo?: Blueprint
  /**
   * 实例镜像是否可重置为目标镜像
   */
  IsResettable?: boolean
  /**
   * 不可重置信息.当镜像可重置时为""
   */
  NonResettableMessage?: string
}

/**
 * DescribeBundles返回参数结构体
 */
export interface DescribeBundlesResponse {
  /**
   * 套餐详细信息列表。
   */
  BundleSet?: Array<Bundle>
  /**
   * 符合要求的套餐总数，用于分页展示。
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteFirewallTemplateRules返回参数结构体
 */
export interface DeleteFirewallTemplateRulesResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeFirewallTemplates请求参数结构体
 */
export interface DescribeFirewallTemplatesRequest {
  /**
   * 防火墙模板ID列表。可通过[DescribeFirewallTemplates](https://cloud.tencent.com/document/product/1207/96874)接口返回值字段TemplateSet获取。列表长度最大值为100。
   */
  TemplateIds?: Array<string>
  /**
   * 过滤器列表。
<li>template-id</li>按照【防火墙模板所属的ID】进行过滤。
类型：String
必选：否
<li>template-name</li>按照【防火墙模板所属的名称】进行过滤。
类型：String
必选：否
<li>template-type</li>按照【防火墙模板的类型】进行过滤。
类型：String
必选：否
每次请求的 Filters 的上限为 10，Filter.Values 的上限为 100。参数不支持同时指定 TemplateIds 和 Filters。
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
 * ModifyInstancesBundle请求参数结构体
 */
export interface ModifyInstancesBundleRequest {
  /**
   * 实例ID列表。一个或多个待操作的实例ID。可通过[DescribeInstances](https://cloud.tencent.com/document/api/1207/47573)接口返回值中的InstanceId获取。每次请求批量实例的上限为15。
   */
  InstanceIds: Array<string>
  /**
   * 待变更的套餐Id。可通过[DescribeBundles](https://cloud.tencent.com/document/api/1207/47575)接口返回值中的BundleId获取。
   */
  BundleId: string
  /**
   * 是否自动抵扣代金券。取值范围：
true：表示自动抵扣代金券
false：表示不自动抵扣代金券
默认取值：false。
   */
  AutoVoucher?: boolean
}

/**
 * DeleteDiskBackups请求参数结构体
 */
export interface DeleteDiskBackupsRequest {
  /**
   * 云硬盘备份点ID列表，可通过 [DescribeDiskBackups](https://cloud.tencent.com/document/api/1207/84379)接口查询。
   */
  DiskBackupIds: Array<string>
}

/**
 * InquirePriceRenewInstances请求参数结构体
 */
export interface InquirePriceRenewInstancesRequest {
  /**
   * 待续费的实例ID。可通过[DescribeInstances](https://cloud.tencent.com/document/api/1207/47573 )接口返回值中的InstanceId获取。每次请求批量实例的上限为50。
   */
  InstanceIds: Array<string>
  /**
   * 预付费模式，即包年包月相关参数设置。通过该参数可以指定包年包月实例的购买时长、是否设置自动续费等属性。
   */
  InstanceChargePrepaid: InstanceChargePrepaid
  /**
   * 是否续费数据盘。默认值: false, 即不续费。
   */
  RenewDataDisk?: boolean
  /**
   * 数据盘是否对齐实例到期时间。默认值: false, 即不对齐。
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
  TimeSpan?: number
  /**
   * 计费单元。
   */
  TimeUnit?: string
  /**
   * 总价。
   */
  TotalCost?: number
  /**
   * 折后总价。
   */
  RealTotalCost?: number
  /**
   * 折扣。
   */
  Discount?: number
  /**
   * 具体折扣详情。
   */
  PolicyDetail?: PolicyDetail
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
 * DescribeFirewallTemplateQuota返回参数结构体
 */
export interface DescribeFirewallTemplateQuotaResponse {
  /**
   * 当前可用配额。
   */
  Available?: number
  /**
   * 总配额。
   */
  Total?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeRegions返回参数结构体
 */
export interface DescribeRegionsResponse {
  /**
   * 地域数量。
   */
  TotalCount?: number
  /**
   * 地域信息列表。
   */
  RegionSet?: Array<RegionInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeFirewallTemplateApplyRecords请求参数结构体
 */
export interface DescribeFirewallTemplateApplyRecordsRequest {
  /**
   * 防火墙模板ID。可通过[DescribeFirewallTemplates](https://cloud.tencent.com/document/product/1207/96874)接口返回值字段TemplateSet获取。
   */
  TemplateId: string
  /**
   * 应用防火墙模板任务ID列表。可通过[ApplyFirewallTemplate](https://cloud.tencent.com/document/product/1207/96883)接口返回值TaskId字段获取。
   */
  TaskIds?: Array<string>
}

/**
 * DescribeDiskBackups返回参数结构体
 */
export interface DescribeDiskBackupsResponse {
  /**
   * 云硬盘备份点的数量。
   */
  TotalCount?: number
  /**
   * 云硬盘备份点信息列表。
   */
  DiskBackupSet?: Array<DiskBackup>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * AttachDisks请求参数结构体
 */
export interface AttachDisksRequest {
  /**
   * 云硬盘ID列表。每次批量请求云硬盘的上限为 100。可通过[DescribeDisks](https://cloud.tencent.com/document/product/1207/66093)接口返回值中的DiskId获取。
   */
  DiskIds: Array<string>
  /**
   * 实例ID。可通过[DescribeInstances](https://cloud.tencent.com/document/product/1207/47573)接口返回值中的InstanceId获取。
   */
  InstanceId: string
  /**
   * 自动续费标识。取值范围：

NOTIFY_AND_AUTO_RENEW：通知过期且自动续费。 NOTIFY_AND_MANUAL_RENEW：通知过期不自动续费，用户需要手动续费。 DISABLE_NOTIFY_AND_MANUAL_RENEW：不自动续费，且不通知。

默认取值：NOTIFY_AND_MANUAL_RENEW。若该参数指定为NOTIFY_AND_AUTO_RENEW，在账户余额充足的情况下，云盘到期后将按月自动续费。
   */
  RenewFlag?: string
}

/**
 * ModifyDiskBackupsAttribute请求参数结构体
 */
export interface ModifyDiskBackupsAttributeRequest {
  /**
   * 云硬盘备份点ID，可通过 [DescribeDiskBackups](https://cloud.tencent.com/document/api/1207/84379) 接口返回值中的 DiskBackupId 获取。
   */
  DiskBackupIds: Array<string>
  /**
   * 云硬盘备份点名称，最大长度 90 。
   */
  DiskBackupName?: string
}

/**
 * AttachCcn返回参数结构体
 */
export interface AttachCcnResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
   * 云联网实例ID。可通过[DescribeCcns](https://cloud.tencent.com/document/product/215/19199)接口返回值中的CcnId获取。
   */
  CcnId: string
}

/**
 * CreateDisks请求参数结构体
 */
export interface CreateDisksRequest {
  /**
   * 可用区。可通过[DescribeZones](https://cloud.tencent.com/document/product/1207/57513)返回值中的Zone获取。
   */
  Zone: string
  /**
   * 云硬盘大小, 单位: GB。
   */
  DiskSize: number
  /**
   * 云硬盘介质类型。取值: "CLOUD_PREMIUM"(高性能云盘), "CLOUD_SSD"(SSD云硬盘)。
   */
  DiskType: string
  /**
   * 云硬盘包年包月相关参数设置。
   */
  DiskChargePrepaid: DiskChargePrepaid
  /**
   * 云硬盘名称。最大长度60。
   */
  DiskName?: string
  /**
   * 云硬盘个数。取值范围: [1, 30]。默认值: 1。
   */
  DiskCount?: number
  /**
   * 指定云硬盘备份点配额，取值范围: [0, 500]。不传时默认为不带备份点配额。
   */
  DiskBackupQuota?: number
  /**
   * 是否自动使用代金券。默认不使用。
   */
  AutoVoucher?: boolean
  /**
   * 自动挂载并初始化数据盘。
   */
  AutoMountConfiguration?: AutoMountConfiguration
}

/**
 * AssociateInstancesKeyPairs请求参数结构体
 */
export interface AssociateInstancesKeyPairsRequest {
  /**
   * 密钥对 ID 列表，每次请求批量密钥对的上限为 100。可通过[DescribeKeyPairs](https://cloud.tencent.com/document/api/1207/55540)接口返回值中的KeyId获取。
   */
  KeyIds: Array<string>
  /**
   * 实例 ID 列表。每次请求批量实例的上限为 100。可通过[DescribeInstances](https://cloud.tencent.com/document/api/1207/47573)接口返回值中的InstanceId获取。
   */
  InstanceIds: Array<string>
}

/**
 * Docker容器信息
 */
export interface DockerContainer {
  /**
   * 容器ID
   */
  ContainerId: string
  /**
   * 容器名称
   */
  ContainerName: string
  /**
   * 容器镜像地址
   */
  ContainerImage: string
  /**
   * 容器Command
   */
  Command: string
  /**
   * 容器状态描述
   */
  Status: string
  /**
   * 容器状态，和docker的容器状态保持一致，当前取值有：created, restarting, running, removing, paused, exited, or dead
   */
  State: string
  /**
   * 容器端口主机端口映射列表
   */
  PublishPortSet: Array<DockerContainerPublishPort>
  /**
   * 容器挂载本地卷列表
   */
  VolumeSet: Array<DockerContainerVolume>
  /**
   * 创建时间。按照 ISO8601 标准表示，并且使用 UTC 时间。
   */
  CreatedTime: string
}

/**
 * CancelShareBlueprintAcrossAccounts返回参数结构体
 */
export interface CancelShareBlueprintAcrossAccountsResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeSnapshots请求参数结构体
 */
export interface DescribeSnapshotsRequest {
  /**
   * 要查询快照的 ID 列表。每次请求批量快照的上限为 100。 
可通过 [DescribeSnapshots](https://cloud.tencent.com/document/product/1207/54388) 接口返回值中的 SnapshotId		获取。
参数不支持同时指定 SnapshotIds 和 Filters。
   */
  SnapshotIds?: Array<string>
  /**
   * 过滤器列表。
<li>snapshot-id</li>按照【快照 ID】进行过滤。
类型：String
必选：否
可通过 <a href="https://cloud.tencent.com/document/product/1207/54388">DescribeSnapshots</a> 接口返回值中的 SnapshotId 获取。

<li>disk-id</li>按照【磁盘 ID】进行过滤。
类型：String
必选：否
可通过 <a href="https://cloud.tencent.com/document/product/1207/66093">DescribeDisks</a> 接口返回值中的 DiskId 获取。

<li>snapshot-name</li>按照【快照名称】进行过滤。
类型：String
必选：否
可通过 <a href="https://cloud.tencent.com/document/product/1207/54388">DescribeSnapshots</a> 接口返回值中的 SnapshotName 获取。
<li>instance-id</li>按照【实例 ID 】进行过滤。
类型：String
必选：否
可通过 <a href="https://cloud.tencent.com/document/product/1207/47573">DescribeInstances</a> 接口返回值中的 InstanceId 获取。

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
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 描述了云硬盘备份点相关信息。
 */
export interface DiskBackup {
  /**
   * 云硬盘备份点ID。
   */
  DiskBackupId?: string
  /**
   * 创建此云硬盘备份点的云硬盘类型。取值：<li>DATA_DISK：数据盘</li>
   */
  DiskUsage?: string
  /**
   * 创建此云硬盘备份点的云硬盘 ID。
   */
  DiskId?: string
  /**
   * 创建此云硬盘备份点的云硬盘大小，单位 GB。
   */
  DiskSize?: number
  /**
   * 云硬盘备份点名称，用户自定义的云硬盘备份点别名。
   */
  DiskBackupName?: string
  /**
   * 云硬盘备份点的状态。取值范围：
<li>NORMAL：正常。 </li>
<li>CREATING：创建中。</li>
<li>ROLLBACKING：回滚中。</li>
<li>DELETING：删除中。</li>
   */
  DiskBackupState?: string
  /**
   * 创建或回滚云硬盘备份点进度百分比，成功后此字段取值为 100。
   */
  Percent?: number
  /**
   * 上一次操作
   */
  LatestOperation?: string
  /**
   * 上一次操作状态
   */
  LatestOperationState?: string
  /**
   * 上一次请求ID
   */
  LatestOperationRequestId?: string
  /**
   * 创建时间。按照 ISO8601 标准表示，并且使用 UTC 时间。 
格式为： YYYY-MM-DDThh:mm:ssZ。
   */
  CreatedTime?: string
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
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDiskBackupsDeniedActions请求参数结构体
 */
export interface DescribeDiskBackupsDeniedActionsRequest {
  /**
   * 云硬盘备份点 ID 列表, 可通过<a href="https://cloud.tencent.com/document/product/1207/84379" target="_blank">DescribeDiskBackups</a>接口查询。
   */
  DiskBackupIds: Array<string>
}

/**
 * 描述密钥对信息。
 */
export interface KeyPair {
  /**
   * 密钥对 ID ，是密钥对的唯一标识。
   */
  KeyId?: string
  /**
   * 密钥对名称。
   */
  KeyName?: string
  /**
   * 密钥对的纯文本公钥。
   */
  PublicKey?: string
  /**
   * 密钥对关联的实例 ID 列表。
   */
  AssociatedInstanceIds?: Array<string>
  /**
   * 创建时间。按照 ISO8601 标准表示，并且使用 UTC 时间。格式为：YYYY-MM-DDThh:mm:ssZ
注意：此字段可能返回 null，表示取不到有效值。
   */
  CreatedTime?: string
  /**
   * 密钥对私钥。
注意：此字段可能返回 null，表示取不到有效值。
   */
  PrivateKey?: string
}

/**
 * DescribeFirewallRulesTemplate请求参数结构体
 */
export type DescribeFirewallRulesTemplateRequest = null

/**
 * DescribeDockerContainerConfiguration请求参数结构体
 */
export interface DescribeDockerContainerConfigurationRequest {
  /**
   * 实例ID。可通过[DescribeInstances](https://cloud.tencent.com/document/product/1207/47573)接口返回值中的InstanceId获取。
   */
  InstanceId: string
  /**
   * 容器ID。可通过[DescribeDockerContainers](https://cloud.tencent.com/document/product/1207/95473)接口返回值中的ContainerId获取。
   */
  ContainerId: string
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
   * 云硬盘ID列表。每次批量请求云硬盘的上限为 1。可通过[DescribeDisks](https://cloud.tencent.com/document/product/1207/66093)接口返回值中的DiskId获取。
   */
  DiskIds: Array<string>
  /**
   * 续费云硬盘包年包月相关参数设置。
   */
  RenewDiskChargePrepaid: RenewDiskChargePrepaid
}

/**
 * ShareBlueprintAcrossAccounts返回参数结构体
 */
export interface ShareBlueprintAcrossAccountsResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 防火墙模板规则信息
 */
export interface FirewallTemplateRuleInfo {
  /**
   * 防火墙模板规则ID。
   */
  TemplateRuleId?: string
  /**
   * 防火墙规则信息。
   */
  FirewallRuleInfo?: FirewallRuleInfo
}

/**
 * 磁盘信息
 */
export interface Disk {
  /**
   * 磁盘ID
   */
  DiskId?: string
  /**
   * 实例ID
   */
  InstanceId?: string
  /**
   * 可用区
   */
  Zone?: string
  /**
   * 磁盘名称
   */
  DiskName?: string
  /**
   * 磁盘类型
   */
  DiskUsage?: string
  /**
   * 磁盘介质类型
   */
  DiskType?: string
  /**
   * 磁盘付费类型
   */
  DiskChargeType?: string
  /**
   * 磁盘大小
   */
  DiskSize?: number
  /**
   * 续费标识
   */
  RenewFlag?: string
  /**
   * 磁盘状态，取值范围：
<li>PENDING：创建中。 </li>
<li>UNATTACHED：未挂载。</li>
<li>ATTACHING：挂载中。</li>
<li>ATTACHED：已挂载。</li>
<li>DETACHING：卸载中。 </li>
<li> SHUTDOWN：已隔离。</li>
<li> CREATED_FAILED：创建失败。</li>
<li>TERMINATING：销毁中。</li>
<li> DELETING：删除中。</li>
<li> FREEZING：冻结中。</li>
   */
  DiskState?: string
  /**
   * 磁盘挂载状态
   */
  Attached?: boolean
  /**
   * 是否随实例释放
   */
  DeleteWithInstance?: boolean
  /**
   * 上一次操作
   */
  LatestOperation?: string
  /**
   * 上一次操作状态
   */
  LatestOperationState?: string
  /**
   * 上一次请求ID
   */
  LatestOperationRequestId?: string
  /**
   * 创建时间。按照 ISO8601 标准表示，并且使用 UTC 时间。 
格式为： YYYY-MM-DDThh:mm:ssZ。
注意：此字段可能返回 null，表示取不到有效值。
   */
  CreatedTime?: string
  /**
   * 到期时间。按照 ISO8601 标准表示，并且使用 UTC 时间。 
格式为： YYYY-MM-DDThh:mm:ssZ。
注意：此字段可能返回 null，表示取不到有效值。
   */
  ExpiredTime?: string
  /**
   * 隔离时间。按照 ISO8601 标准表示，并且使用 UTC 时间。 
格式为： YYYY-MM-DDThh:mm:ssZ。
注意：此字段可能返回 null，表示取不到有效值。
   */
  IsolatedTime?: string
  /**
   * 云硬盘的已有备份点数量。
   */
  DiskBackupCount?: number
  /**
   * 云硬盘的备份点配额数量。
   */
  DiskBackupQuota?: number
}

/**
 * ModifyFirewallRules返回参数结构体
 */
export interface ModifyFirewallRulesResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
   * 实例 ID 列表。可通过[DescribeInstances](https://cloud.tencent.com/document/api/1207/47573)接口返回值中的InstanceId获取。 当前最多支持1个。
   */
  InstanceIds: Array<string>
}

/**
 * ApplyInstanceSnapshot返回参数结构体
 */
export interface ApplyInstanceSnapshotResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DetachDisks请求参数结构体
 */
export interface DetachDisksRequest {
  /**
   * 云硬盘ID列表。每次批量请求云硬盘的上限为 100。可通过[DescribeDisks](https://cloud.tencent.com/document/product/1207/66093)接口返回值中的DiskId获取。
   */
  DiskIds: Array<string>
}

/**
 * ModifyFirewallRules请求参数结构体
 */
export interface ModifyFirewallRulesRequest {
  /**
   * 实例 ID。实例的ID可通过[DescribeInstances](https://cloud.tencent.com/document/product/1207/47573)接口返回值中的InstanceId获取。
   */
  InstanceId: string
  /**
   * 防火墙规则列表。列表长度最大值是100。
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
  /**
   * 是否执行强制关机以制作镜像。
取值范围：
True：表示关机之后制作镜像
False：表示开机状态制作镜像
默认取值：True
开机状态制作镜像，可能导致部分数据未备份，影响数据安全。
   */
  ForcePowerOff?: boolean
}

/**
 * DeleteFirewallRules请求参数结构体
 */
export interface DeleteFirewallRulesRequest {
  /**
   * 实例ID。可通过 [DescribeInstances](https://cloud.tencent.com/document/api/1207/47573) 接口返回值中的 InstanceId 获取。
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
 * RerunDockerContainer请求参数结构体
 */
export interface RerunDockerContainerRequest {
  /**
   * 实例ID。可通过[DescribeInstances](https://cloud.tencent.com/document/product/1207/47573)接口返回值中的InstanceId获取。
   */
  InstanceId: string
  /**
   * 重新创建的容器配置。
   */
  ContainerConfiguration: DockerContainerConfiguration
  /**
   * 容器ID。可通过[DescribeDockerContainers](https://cloud.tencent.com/document/product/1207/95473)接口返回值中的ContainerId获取。
   */
  ContainerId: string
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
   * 实例ID。可通过 [DescribeInstances](https://cloud.tencent.com/document/api/1207/47573) 接口返回值中的 InstanceId 获取。
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
  InstanceId?: string
  /**
   * 流量包详情列表。
   */
  TrafficPackageSet?: Array<TrafficPackage>
}

/**
 * 快照操作限制列表。
 */
export interface SnapshotDeniedActions {
  /**
   * 快照 ID。
   */
  SnapshotId?: string
  /**
   * 操作限制列表。
   */
  DeniedActions?: Array<DeniedAction>
}

/**
 * TerminateInstances返回参数结构体
 */
export interface TerminateInstancesResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 防火墙模板应用记录详情。
 */
export interface FirewallTemplateApplyRecordDetail {
  /**
   * 实例标识信息。
   */
  Instance?: InstanceIdentifier
  /**
   * 防火墙模板应用状态。

- SUCCESS：成功
- FAILED：失败
   */
  ApplyState?: string
  /**
   * 防火墙模板应用错误信息。
   */
  ErrorMessage?: string
}

/**
 * DescribeInstancesDiskNum请求参数结构体
 */
export interface DescribeInstancesDiskNumRequest {
  /**
   * 实例ID列表。每次请求批量实例的上限为 100。
可通过 <a href="https://cloud.tencent.com/document/product/1207/47573">DescribeInstances</a> 接口返回值中的 InstanceId 获取。
   */
  InstanceIds: Array<string>
}

/**
 * 计费项目明细。
 */
export interface DetailPrice {
  /**
   * 描述计费项目名称，目前取值
<li>"DiskSpace"代表云硬盘空间收费项。</li>
<li>"DiskBackupQuota"代表云硬盘备份点配额收费项。</li>
   */
  PriceName: string
  /**
   * 云硬盘计费项维度单价。
   */
  OriginUnitPrice: number
  /**
   * 云硬盘计费项维度总价。
   */
  OriginalPrice: number
  /**
   * 云硬盘在计费项维度折扣。
   */
  Discount: number
  /**
   * 云硬盘在计费项维度折后总价。
   */
  DiscountPrice: number
}

/**
 * StopDockerContainers返回参数结构体
 */
export interface StopDockerContainersResponse {
  /**
   * Docker活动ID。
   */
  DockerActivityId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ApplyDiskBackup返回参数结构体
 */
export interface ApplyDiskBackupResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
取值：APP_OS（应用镜像 ）；PURE_OS（系统镜像）；DOCKER（Docker容器镜像）；PRIVATE（自定义镜像）；SHARED（共享镜像）。
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
<li>scene-id</li>按照【使用场景Id】进行过滤。
类型：String
必选：否

每次请求的 Filters 的上限为 10，Filter.Values 的上限为 100。参数不支持同时指定 BlueprintIds 和 Filters 。
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
  InstanceId?: string
  /**
   * 实例是否可退还。
   */
  IsReturnable?: boolean
  /**
   * 实例退还失败错误码。
   */
  ReturnFailCode?: number
  /**
   * 实例退还失败错误信息。
   */
  ReturnFailMessage?: string
}

/**
 * DescribeInstancesDeniedActions返回参数结构体
 */
export interface DescribeInstancesDeniedActionsResponse {
  /**
   * 实例操作限制列表详细信息。
   */
  InstanceDeniedActionSet?: Array<InstanceDeniedActions>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * RestartDockerContainers返回参数结构体
 */
export interface RestartDockerContainersResponse {
  /**
   * Docker活动ID。
   */
  DockerActivityId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateFirewallTemplate请求参数结构体
 */
export interface CreateFirewallTemplateRequest {
  /**
   * 模板名称。
   */
  TemplateName: string
  /**
   * 防火墙规则列表。
   */
  TemplateRules?: Array<FirewallRule>
}

/**
 * RemoveDockerContainers请求参数结构体
 */
export interface RemoveDockerContainersRequest {
  /**
   * 实例ID。可通过[DescribeInstances](https://cloud.tencent.com/document/product/1207/47573)接口返回值中的InstanceId获取。
   */
  InstanceId: string
  /**
   * 容器ID列表。可通过[DescribeDockerContainers](https://cloud.tencent.com/document/product/1207/95473)接口返回值中的ContainerId获取。
   */
  ContainerIds: Array<string>
}

/**
 * RenewDisks请求参数结构体
 */
export interface RenewDisksRequest {
  /**
   * 云硬盘ID列表。一个或多个待操作的云硬盘ID。可通过[DescribeDisks](https://cloud.tencent.com/document/product/1207/66093)接口返回值中的DiskId获取。每次请求续费数据盘数量总计上限为50。
   */
  DiskIds: Array<string>
  /**
   * 续费云硬盘包年包月相关参数设置。
   */
  RenewDiskChargePrepaid: RenewDiskChargePrepaid
  /**
   * 是否自动使用代金券。默认不使用。
   */
  AutoVoucher?: boolean
}

/**
 * ModifyDisksAttribute请求参数结构体
 */
export interface ModifyDisksAttributeRequest {
  /**
   * 云硬盘ID列表。每次批量请求云硬盘的上限为 100。可通过[DescribeDisks](https://cloud.tencent.com/document/product/1207/66093)接口返回值中的DiskId获取。
   */
  DiskIds: Array<string>
  /**
   * 云硬盘名称。
   */
  DiskName: string
}

/**
 * ModifyDisksBackupQuota请求参数结构体
 */
export interface ModifyDisksBackupQuotaRequest {
  /**
   * 云硬盘ID列表，可通过[DescribeDisks](https://cloud.tencent.com/document/api/1207/66093)接口查询。列表最大长度为15。
   */
  DiskIds: Array<string>
  /**
   * 云硬盘备份点配额。取值范围: [0, 500]。调整后的配额必须不小于已存在的备份点数量。
   */
  DiskBackupQuota: number
}

/**
 * DescribeKeyPairs返回参数结构体
 */
export interface DescribeKeyPairsResponse {
  /**
   * 符合条件的密钥对数量。
   */
  TotalCount?: number
  /**
   * 密钥对详细信息列表。
   */
  KeyPairSet?: Array<KeyPair>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 防火墙模板信息。
 */
export interface FirewallTemplate {
  /**
   * 模板Id。
   */
  TemplateId?: string
  /**
   * 模板名称。
   */
  TemplateName?: string
  /**
   * 模板类型。
   */
  TemplateType?: string
  /**
   * 模板状态。
   */
  TemplateState?: string
  /**
   * 模板创建时间。
   */
  CreatedTime?: string
}

/**
 * DescribeSnapshotsDeniedActions返回参数结构体
 */
export interface DescribeSnapshotsDeniedActionsResponse {
  /**
   * 快照操作限制列表详细信息。
   */
  SnapshotDeniedActionSet?: Array<SnapshotDeniedActions>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeScenes请求参数结构体
 */
export interface DescribeScenesRequest {
  /**
   * 使用场景ID列表。可通过[DescribeScenes](https://cloud.tencent.com/document/product/1207/83512)接口返回值中的SceneId获取。
   */
  SceneIds?: Array<string>
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
 * 描述镜像软件详细信息。
 */
export interface SoftwareDetail {
  /**
   * 软件的属性标识
   */
  Key?: string
  /**
   * 软件的属性标识描述
   */
  Title?: string
  /**
   * 软件的属性值
   */
  Value?: string
}

/**
 * DeleteDiskBackups返回参数结构体
 */
export interface DeleteDiskBackupsResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteSnapshots请求参数结构体
 */
export interface DeleteSnapshotsRequest {
  /**
   * 要删除的快照 ID 列表，可通过 <a href="https://cloud.tencent.com/document/product/1207/54388" target="_blank">DescribeSnapshots</a>查询。
   */
  SnapshotIds: Array<string>
}

/**
 * ModifyDisksRenewFlag返回参数结构体
 */
export interface ModifyDisksRenewFlagResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifySnapshotAttribute请求参数结构体
 */
export interface ModifySnapshotAttributeRequest {
  /**
   * 快照 ID, 可通过 <a href="https://cloud.tencent.com/document/product/1207/54388">DescribeSnapshots</a> 查询。
   */
  SnapshotId: string
  /**
   * 新的快照名称，最长为 60 个字符。
   */
  SnapshotName?: string
}

/**
 * DeleteSnapshots返回参数结构体
 */
export interface DeleteSnapshotsResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ReplaceFirewallTemplateRule返回参数结构体
 */
export interface ReplaceFirewallTemplateRuleResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDisks返回参数结构体
 */
export interface DescribeDisksResponse {
  /**
   * 云硬盘信息列表。
   */
  DiskSet?: Array<Disk>
  /**
   * 符合条件的云硬盘信息数量。
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
 * DescribeBundleDiscount返回参数结构体
 */
export interface DescribeBundleDiscountResponse {
  /**
   * 币种：CNY人民币，USD 美元。
   */
  Currency?: string
  /**
   * 折扣梯度详情，每个梯度包含的信息有：时长，折扣数，总价，折扣价，折扣详情（用户折扣、官网折扣、最终折扣）。
   */
  DiscountDetail?: Array<DiscountDetail>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeAllScenes请求参数结构体
 */
export interface DescribeAllScenesRequest {
  /**
   * 使用场景ID列表。可通过[DescribeAllScenes](https://cloud.tencent.com/document/product/1207/83513)接口返回值中的SceneId获取。
   */
  SceneIds?: Array<string>
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
 * ModifyDisksRenewFlag请求参数结构体
 */
export interface ModifyDisksRenewFlagRequest {
  /**
   * 云硬盘ID列表。每次批量请求云硬盘的上限为 100。可通过[DescribeDisks](https://cloud.tencent.com/document/product/1207/66093)接口返回值中的DiskId获取。
   */
  DiskIds: Array<string>
  /**
   * 自动续费标识。取值范围：

- NOTIFY_AND_AUTO_RENEW：通知过期且自动续费
- NOTIFY_AND_MANUAL_RENEW：通知过期不自动续费
- DISABLE_NOTIFY_AND_MANUAL_RENEW：不通知过期不自动续费

若该参数指定为NOTIFY_AND_AUTO_RENEW，在账户余额充足的情况下，实例到期后将按月自动续费。
   */
  RenewFlag: string
}

/**
 * StartDockerContainers返回参数结构体
 */
export interface StartDockerContainersResponse {
  /**
   * Docker活动ID。
   */
  DockerActivityId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DisassociateInstancesKeyPairs请求参数结构体
 */
export interface DisassociateInstancesKeyPairsRequest {
  /**
   * 密钥对 ID 列表，每次请求批量密钥对的上限为 100。可通过[DescribeKeyPairs](https://cloud.tencent.com/document/api/1207/55540)接口返回值中的KeyId获取。
   */
  KeyIds: Array<string>
  /**
   * 实例 ID 列表。每次请求批量实例的上限为 100。可通过[DescribeInstances](https://cloud.tencent.com/document/api/1207/47573)接口返回值中的InstanceId获取。
   */
  InstanceIds: Array<string>
}

/**
 * DescribeFirewallTemplateQuota请求参数结构体
 */
export type DescribeFirewallTemplateQuotaRequest = null

/**
 * 数据盘价格
 */
export interface DataDiskPrice {
  /**
   * 云硬盘ID。
   */
  DiskId?: string
  /**
   * 云硬盘单价。
   */
  OriginalDiskPrice?: number
  /**
   * 云硬盘总价。
   */
  OriginalPrice?: number
  /**
   * 折扣。
   */
  Discount?: number
  /**
   * 折后总价。
   */
  DiscountPrice?: number
  /**
   * 数据盘挂载的实例ID。
   */
  InstanceId?: string
}

/**
 * 用户执行TAT命令的数据结构。
 */
export interface Command {
  /**
   * Base64编码后的命令内容，长度不可超过64KB。
   */
  Content: string
  /**
   * 命令超时时间，默认60秒。取值范围[1, 86400]。
   */
  Timeout?: number
  /**
   * 命令执行路径，对于 SHELL 命令默认为 /root，对于 POWERSHELL 命令默认为 C:\Program Files\qcloud\tat_agent\workdir。
   */
  WorkingDirectory?: string
  /**
   * 在 Lighthouse 实例中执行命令的用户名称。
默认情况下，在 Linux 实例中以 root 用户执行命令；在Windows 实例中以 System 用户执行命令。
   */
  Username?: string
}

/**
 * 使用场景详细信息
 */
export interface SceneInfo {
  /**
   * 使用场景Id。
   */
  SceneId?: string
  /**
   * 使用场景展示名称。
   */
  DisplayName?: string
  /**
   * 使用场景描述信息。
   */
  Description?: string
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
 * DescribeDockerActivities请求参数结构体
 */
export interface DescribeDockerActivitiesRequest {
  /**
   * 实例ID。可通过[DescribeInstances](https://cloud.tencent.com/document/product/1207/47573)接口返回值中的InstanceId获取。
   */
  InstanceId: string
  /**
   * Docker活动ID列表。可通过[DescribeDockerActivities](https://cloud.tencent.com/document/product/1207/95476)接口返回值中的ActivityId获取。
   */
  ActivityIds?: Array<string>
  /**
   * 偏移量，默认为 0。
   */
  Offset?: number
  /**
   * 返回数量，默认为 20，最大值为 100。
   */
  Limit?: number
  /**
   * 活动创建时间的起始值，时间戳秒数。
   */
  CreatedTimeBegin?: number
  /**
   * 活动创建时间的结束值，时间戳秒数。
   */
  CreatedTimeEnd?: number
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
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteBlueprints返回参数结构体
 */
export interface DeleteBlueprintsResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
 * DeleteFirewallTemplate返回参数结构体
 */
export interface DeleteFirewallTemplateResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
  InstanceIdSet?: Array<string>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyBlueprintAttribute返回参数结构体
 */
export interface ModifyBlueprintAttributeResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyFirewallTemplate请求参数结构体
 */
export interface ModifyFirewallTemplateRequest {
  /**
   * 防火墙模板ID。可通过[DescribeFirewallTemplates](https://cloud.tencent.com/document/product/1207/96874)接口返回值字段TemplateSet获取。
   */
  TemplateId: string
  /**
   * 防火墙模板名称。可通过[DescribeFirewallTemplates](https://cloud.tencent.com/document/product/1207/96874)接口返回值字段TemplateSet获取。
   */
  TemplateName?: string
}

/**
 * StopDockerContainers请求参数结构体
 */
export interface StopDockerContainersRequest {
  /**
   * 实例ID。可通过[DescribeInstances](https://cloud.tencent.com/document/product/1207/47573)接口返回值中的InstanceId获取。
   */
  InstanceId: string
  /**
   * 容器ID列表。可通过[DescribeDockerContainers](https://cloud.tencent.com/document/product/1207/95473)接口返回值中的ContainerId获取。
   */
  ContainerIds: Array<string>
}

/**
 * DescribeModifyInstanceBundles请求参数结构体
 */
export interface DescribeModifyInstanceBundlesRequest {
  /**
   * 实例 ID。可通过 <a href="https://cloud.tencent.com/document/product/1207/47573">DescribeInstances</a> 接口返回值中的 InstanceId 获取。
   */
  InstanceId: string
  /**
   * 过滤器列表。
<li>bundle-id</li>按照【套餐 ID】进行过滤。
类型：String
必选：否
可通过<a href="https://cloud.tencent.com/document/product/1207/47575"> DescribeBundles </a>接口返回值中的 BundleId 获取。
<li>support-platform-type</li>按照【系统类型】进行过滤。
取值： LINUX_UNIX（Linux/Unix系统）；WINDOWS（Windows 系统）
类型：String
必选：否
<li>bundle-type</li>按照 【套餐类型进行过滤】。
取值：GENERAL_BUNDLE (通用型套餐); STORAGE_BUNDLE(存储型套餐);ENTERPRISE_BUNDLE( 企业型套餐);EXCLUSIVE_BUNDLE(专属型套餐);BEFAST_BUNDLE(蜂驰型套餐);
类型：String
必选：否
<li>bundle-state</li>按照【套餐状态】进行过滤。
取值: ‘ONLINE’(在线); ‘OFFLINE’(下线);
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
 * DescribeRegions请求参数结构体
 */
export type DescribeRegionsRequest = null

/**
 * 实例标识信息。
 */
export interface InstanceIdentifier {
  /**
   * 实例ID。
   */
  InstanceId: string
  /**
   * 实例地域。
   */
  Region: string
}

/**
 * DescribeInstancesDiskNum返回参数结构体
 */
export interface DescribeInstancesDiskNumResponse {
  /**
   * 挂载信息列表
   */
  AttachDetailSet?: Array<AttachDetail>
  /**
   * 挂载信息数量
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ResetFirewallTemplateRules请求参数结构体
 */
export interface ResetFirewallTemplateRulesRequest {
  /**
   * 防火墙模板ID。可通过 [DescribeFirewallTemplates](https://cloud.tencent.com/document/product/1207/96874) 接口返回值中的 TemplateId	获取。
   */
  TemplateId: string
  /**
   * 重置后的防火墙模板规则列表。每次请求批量防火墙规则的上限为 100。
   */
  TemplateRules: Array<FirewallRule>
}

/**
 * ModifyFirewallTemplate返回参数结构体
 */
export interface ModifyFirewallTemplateResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
  DiskId?: string
  /**
   * 云硬盘是否可退还。
   */
  IsReturnable?: boolean
  /**
   * 云硬盘退还失败错误码。
   */
  ReturnFailCode?: number
  /**
   * 云硬盘退还失败错误信息。
   */
  ReturnFailMessage?: string
}

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
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeKeyPairs请求参数结构体
 */
export interface DescribeKeyPairsRequest {
  /**
   * 密钥对 ID 列表，每次请求批量密钥对的上限为 100。
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
<li>key-name</li>按照【密钥对名称】进行过滤（支持模糊匹配）。
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
 * 实例支持IPv6详情描述。
 */
export interface SupportIpv6Detail {
  /**
   * 是否支持开启IPv6。
   */
  IsSupport?: boolean
  /**
   * 详情。

当IsSupport为True，Detail枚举值为:

EFFECTIVE_IMMEDIATELY: 立即生效

EFFECTIVE_AFTER_REBOOT: 分配过程需要开关机，用户需备份数据

 

当IsSupport为False，Detail枚举值为:

HAD_BEEN_ASSIGNED: 已分配IPv6地址

REGION_NOT_SUPPORT: 地域不支持

BLUEPRINT_NOT_SUPPORT: 镜像不支持

BUNDLE_INSTANCE_NOT_SUPPORT: 套餐实例不支持

BUNDLE_BANDWIDTH_NOT_SUPPORT: 套餐带宽不支持
   */
  Detail?: string
  /**
   * 提示信息。
   */
  Message?: string
}

/**
 * ApplyDiskBackup请求参数结构体
 */
export interface ApplyDiskBackupRequest {
  /**
   * 云硬盘ID，可通过[DescribeDisks](https://cloud.tencent.com/document/api/1207/66093)接口查询。
   */
  DiskId: string
  /**
   * 云硬盘备份点ID，可通过[DescribeDiskBackups](https://cloud.tencent.com/document/api/1207/84379)接口查询。
   */
  DiskBackupId: string
}

/**
 * ResetInstancesPassword返回参数结构体
 */
export interface ResetInstancesPasswordResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * StartInstances返回参数结构体
 */
export interface StartInstancesResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
  KeyIds?: Array<string>
}

/**
 * DescribeDockerContainerConfiguration返回参数结构体
 */
export interface DescribeDockerContainerConfigurationResponse {
  /**
   * Docker容器配置信息。
   */
  ContainerConfiguration?: DockerContainerConfiguration
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
  InstanceId?: string
  /**
   * 套餐 ID。
   */
  BundleId?: string
  /**
   * 镜像 ID。
   */
  BlueprintId?: string
  /**
   * 实例的 CPU 核数，单位：核。
   */
  CPU?: number
  /**
   * 实例内存容量，单位：GB 。
   */
  Memory?: number
  /**
   * 实例名称。
   */
  InstanceName?: string
  /**
   * 实例计费模式。取值范围： 
PREPAID：表示预付费，即包年包月。
   */
  InstanceChargeType?: string
  /**
   * 实例系统盘信息。
   */
  SystemDisk?: SystemDisk
  /**
   * 实例主网卡的内网 IP。 
注意：此字段可能返回 空，表示取不到有效值。
   */
  PrivateAddresses?: Array<string>
  /**
   * 实例主网卡的公网 IP。 
注意：此字段可能返回 空，表示取不到有效值。
   */
  PublicAddresses?: Array<string>
  /**
   * 实例带宽信息。
   */
  InternetAccessible?: InternetAccessible
  /**
   * 自动续费标识。取值范围： 
NOTIFY_AND_MANUAL_RENEW：表示通知即将过期，但不自动续费  
NOTIFY_AND_AUTO_RENEW：表示通知即将过期，而且自动续费 DISABLE_NOTIFY_AND_MANUAL_RENEW：不自动续费，且不通知。
   */
  RenewFlag?: string
  /**
   * 实例登录设置。
   */
  LoginSettings?: LoginSettings
  /**
   * 实例状态。取值范围： 
<li>PENDING：表示创建中</li><li>LAUNCH_FAILED：表示创建失败</li><li>RUNNING：表示运行中</li><li>STOPPED：表示关机</li><li>STARTING：表示开机中</li><li>STOPPING：表示关机中</li><li>REBOOTING：表示重启中</li><li>SHUTDOWN：表示停止待销毁</li><li>TERMINATING：表示销毁中</li><li>DELETING：表示删除中</li><li>FREEZING：表示冻结中</li><li>ENTER_RESCUE_MODE：表示进入救援模式中</li><li>RESCUE_MODE：表示救援模式</li><li>EXIT_RESCUE_MODE：表示退出救援模式中</li>
   */
  InstanceState?: string
  /**
   * 实例全局唯一 ID。
   */
  Uuid?: string
  /**
   * 实例的最新操作。例：StopInstances、ResetInstance。注意：此字段可能返回 空值，表示取不到有效值。
   */
  LatestOperation?: string
  /**
   * 实例的最新操作状态。取值范围： 
SUCCESS：表示操作成功 
OPERATING：表示操作执行中 
FAILED：表示操作失败 
注意：此字段可能返回 空值，表示取不到有效值。
   */
  LatestOperationState?: string
  /**
   * 实例最新操作的唯一请求 ID。 
注意：此字段可能返回 空值，表示取不到有效值。
   */
  LatestOperationRequestId?: string
  /**
   * 实例最新操作的开始时间。
注意：此字段可能返回 null，表示取不到有效值。
   */
  LatestOperationStartedTime?: string
  /**
   * 隔离时间。按照 ISO8601 标准表示，并且使用 UTC 时间。 
格式为： YYYY-MM-DDThh:mm:ssZ。
注意：此字段可能返回 null，表示取不到有效值。
   */
  IsolatedTime?: string
  /**
   * 创建时间。按照 ISO8601 标准表示，并且使用 UTC 时间。 
格式为： YYYY-MM-DDThh:mm:ssZ。
注意：此字段可能返回 null，表示取不到有效值。
   */
  CreatedTime?: string
  /**
   * 到期时间。按照 ISO8601 标准表示，并且使用 UTC 时间。 
格式为： YYYY-MM-DDThh:mm:ssZ 。
注意：此字段可能返回 null，表示取不到有效值。
   */
  ExpiredTime?: string
  /**
   * 操作系统平台类型，如 LINUX_UNIX、WINDOWS。
   */
  PlatformType?: string
  /**
   * 操作系统平台。
   */
  Platform?: string
  /**
   * 操作系统名称。
   */
  OsName?: string
  /**
   * 可用区。
   */
  Zone?: string
  /**
   * 实例绑定的标签列表。
   */
  Tags?: Array<Tag>
  /**
   * 实例封禁状态。取值范围：
<li>NORMAL实例正常。</li><li>NETWORK_RESTRICT：网络封禁。</li>
   */
  InstanceRestrictState?: string
  /**
   * 描述实例是否支持IPv6。
   */
  SupportIpv6Detail?: SupportIpv6Detail
  /**
   * 公网IPv6地址列表。
   */
  PublicIpv6Addresses?: Array<string>
  /**
   * 创建实例后自动执行TAT命令的调用ID。
   */
  InitInvocationId?: string
  /**
   * 实例违规详情。
   */
  InstanceViolationDetail?: InstanceViolationDetail
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
 * StopInstances请求参数结构体
 */
export interface StopInstancesRequest {
  /**
   * 实例 ID 列表。每次请求批量实例的上限为 100。可通过[DescribeInstances](https://cloud.tencent.com/document/api/1207/47573)接口返回值中的InstanceId获取。
   */
  InstanceIds: Array<string>
}

/**
 * IsolateInstances返回参数结构体
 */
export interface IsolateInstancesResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
  KeyPair?: KeyPair
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 实例违规详情。
 */
export interface InstanceViolationDetail {
  /**
   *  来源：RESTRICT：封禁、FREEZW：冻结
   */
  Source?: string
  /**
   * 是否允许自助解封：1是，2否
   */
  State?: string
  /**
   * 违规类型
   */
  Reason?: string
  /**
   * 违规内容（URL、关联域名）
   */
  Content?: string
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
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDockerActivities返回参数结构体
 */
export interface DescribeDockerActivitiesResponse {
  /**
   * 总数量。
   */
  TotalCount?: number
  /**
   * Docker活动列表。
   */
  DockerActivitySet?: Array<DockerActivity>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeFirewallTemplateRuleQuota请求参数结构体
 */
export interface DescribeFirewallTemplateRuleQuotaRequest {
  /**
   * 防火墙模板ID。可通过[DescribeFirewallTemplates](https://cloud.tencent.com/document/product/1207/96874)接口返回值字段TemplateSet获取。
   */
  TemplateId: string
}

/**
 * CreateFirewallTemplate返回参数结构体
 */
export interface CreateFirewallTemplateResponse {
  /**
   * 防火墙模板ID。
   */
  TemplateId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeCcnAttachedInstances返回参数结构体
 */
export interface DescribeCcnAttachedInstancesResponse {
  /**
   * 云联网关联的实例列表。
   */
  CcnAttachedInstanceSet?: Array<CcnAttachedInstance>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeBundles请求参数结构体
 */
export interface DescribeBundlesRequest {
  /**
   * 套餐 ID 列表。每次请求批量套餐的上限为 100。可通过[DescribeBundles](https://cloud.tencent.com/document/product/1207/47575)接口返回值中的BundleId获取。
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
取值： LINUX_UNIX(Linux/Unix系统) ;WINDOWS(Windows 系统)
类型：String
必选：否
<li>bundle-type</li>按照 【套餐类型进行过滤】。
取值：GENERAL_BUNDLE (通用型套餐); STORAGE_BUNDLE(存储型套餐);ENTERPRISE_BUNDLE( 企业型套餐);EXCLUSIVE_BUNDLE(专属型套餐);BEFAST_BUNDLE(蜂驰型套餐);STARTER_BUNDLE(入门型套餐);CAREFREE_BUNDLE(无忧型套餐);
类型：String
必选：否
<li>bundle-state</li>按照【套餐状态】进行过滤。
取值: ONLINE(在线); OFFLINE(下线);
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
  BlueprintId?: string
  /**
   * 镜像对外展示标题。
   */
  DisplayTitle?: string
  /**
   * 镜像对外展示版本。
   */
  DisplayVersion?: string
  /**
   * 镜像描述信息。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Description?: string
  /**
   * 操作系统名称。
   */
  OsName?: string
  /**
   * 操作系统平台。
   */
  Platform?: string
  /**
   * 操作系统平台类型，如 LINUX_UNIX、WINDOWS。
   */
  PlatformType?: string
  /**
   * 镜像类型，如 APP_OS、PURE_OS、PRIVATE。
   */
  BlueprintType?: string
  /**
   * 镜像图片 URL。
   */
  ImageUrl?: string
  /**
   * 镜像所需系统盘大小，单位 GB。
   */
  RequiredSystemDiskSize?: number
  /**
   * 镜像状态。
   */
  BlueprintState?: string
  /**
   * 创建时间。按照 ISO8601 标准表示，并且使用 UTC 时间。 
格式为： YYYY-MM-DDThh:mm:ssZ。
注意：此字段可能返回 null，表示取不到有效值。
   */
  CreatedTime?: string
  /**
   * 镜像名称。
   */
  BlueprintName?: string
  /**
   * 镜像是否支持自动化助手。
   */
  SupportAutomationTools?: boolean
  /**
   * 镜像所需内存大小, 单位: GB
   */
  RequiredMemorySize?: number
  /**
   * CVM镜像共享到轻量应用服务器轻量应用服务器后的CVM镜像ID。
   */
  ImageId?: string
  /**
   * 官方网站Url。
   */
  CommunityUrl?: string
  /**
   * 指导文章Url。
   */
  GuideUrl?: string
  /**
   * 镜像关联使用场景Id列表。
   */
  SceneIdSet?: Array<string>
  /**
   * Docker版本号。
注意：此字段可能返回 null，表示取不到有效值。
   */
  DockerVersion?: string
  /**
   * 镜像是否已共享。
   */
  BlueprintShared?: boolean
}

/**
 * InquirePriceCreateInstances返回参数结构体
 */
export interface InquirePriceCreateInstancesResponse {
  /**
   * 询价信息。
   */
  Price?: Price
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 总计价格信息
 */
export interface TotalPrice {
  /**
   * 原始总计价格。
   */
  OriginalPrice?: number
  /**
   * 折扣总计价格。
   */
  DiscountPrice?: number
}

/**
 * 限制操作。
 */
export interface DeniedAction {
  /**
   * 限制操作名。
   */
  Action?: string
  /**
   * 限制操作消息码。
   */
  Code?: string
  /**
   * 限制操作消息。
   */
  Message?: string
}

/**
 * DescribeAllScenes返回参数结构体
 */
export interface DescribeAllScenesResponse {
  /**
   * 使用场景详细信息列表。
   */
  SceneInfoSet?: Array<SceneInfo>
  /**
   * 使用场景详细信息总数量。
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyInstancesLoginKeyPairAttribute返回参数结构体
 */
export interface ModifyInstancesLoginKeyPairAttributeResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
  DiskPrice?: DiskPrice
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
  BundleId?: string
  /**
   * 内存大小，单位 GB。
   */
  Memory?: number
  /**
   * 系统盘类型。
取值范围： 
<li> CLOUD_SSD：SSD 云硬盘</li><li> CLOUD_PREMIUM：高性能云硬盘</li>
   */
  SystemDiskType?: string
  /**
   * 系统盘大小。单位GB。
   */
  SystemDiskSize?: number
  /**
   * 每月网络流量，单位 GB。
   */
  MonthlyTraffic?: number
  /**
   * 是否支持 Linux/Unix 平台。
   */
  SupportLinuxUnixPlatform?: boolean
  /**
   * 是否支持 Windows 平台。
   */
  SupportWindowsPlatform?: boolean
  /**
   * 套餐当前单位价格信息。
   */
  Price?: Price
  /**
   * CPU 核数。
   */
  CPU?: number
  /**
   * 峰值带宽，单位 Mbps。
   */
  InternetMaxBandwidthOut?: number
  /**
   * 网络计费类型。
   */
  InternetChargeType?: string
  /**
   * 套餐售卖状态,取值:‘AVAILABLE’(可用) , ‘SOLD_OUT’(售罄)
   */
  BundleSalesState?: string
  /**
   * 套餐类型。
取值范围：
<li>STARTER_BUNDLE：入门型</li>
<li>GENERAL_BUNDLE：通用型</li>
<li>ENTERPRISE_BUNDLE：企业型</li>
<li>STORAGE_BUNDLE：存储型</li>
<li>EXCLUSIVE_BUNDLE：专属型</li>
<li>HK_EXCLUSIVE_BUNDLE：香港专属型 </li>
<li>CAREFREE_BUNDLE：无忧型</li>
<li>BEFAST_BUNDLE：蜂驰型 </li>
   */
  BundleType?: string
  /**
   * 套餐类型描述信息。
   */
  BundleTypeDescription?: string
  /**
   * 套餐展示标签.
取值范围:
"ACTIVITY": 活动套餐,
"NORMAL": 普通套餐
"CAREFREE": 无忧套餐
   */
  BundleDisplayLabel?: string
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
 * CreateDiskBackup返回参数结构体
 */
export interface CreateDiskBackupResponse {
  /**
   * 备份点ID。
   */
  DiskBackupId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeSnapshotsDeniedActions请求参数结构体
 */
export interface DescribeSnapshotsDeniedActionsRequest {
  /**
   * 快照 ID 列表, 可通过 <a href="https://cloud.tencent.com/document/product/1207/54388" target="_blank">DescribeSnapshots</a> 查询。
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
  Currency?: string
  /**
   * 折扣梯度详情，每个梯度包含的信息有：时长，折扣数，总价，折扣价，折扣详情（用户折扣、官网折扣、最终折扣）。
   */
  DiscountDetail?: Array<DiscountDetail>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateFirewallTemplateRules返回参数结构体
 */
export interface CreateFirewallTemplateRulesResponse {
  /**
   * 规则ID列表。
   */
  TemplateRuleIdSet?: Array<string>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyDockerContainer请求参数结构体
 */
export interface ModifyDockerContainerRequest {
  /**
   * 实例ID。可通过[DescribeInstances](https://cloud.tencent.com/document/product/1207/47573)接口返回值中的InstanceId获取。
   */
  InstanceId: string
  /**
   * 容器ID。可通过[DescribeDockerContainers](https://cloud.tencent.com/document/product/1207/95473)接口返回值中的ContainerId获取。
   */
  ContainerId: string
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
  /**
   * 容器重启策略，对应docker "--restart"参数。

枚举值:
no: 不自动重启。默认策略。
on-failure[:max-retries]: 当容器退出码非0时重启容器。使用max-retries限制重启次数，比如on-failure:10，限制最多重启10次。
always: 只要容器退出就重启。
unless-stopped: 始终重新启动容器，包括在守护进程启动时，除非容器在 Docker 守护进程停止之前进入停止状态。
   */
  RestartPolicy?: string
}

/**
 * ResizeDisks请求参数结构体
 */
export interface ResizeDisksRequest {
  /**
   * 云硬盘ID列表，可通过[DescribeDisks](https://cloud.tencent.com/document/api/1207/66093)接口查询。列表最大长度为15。
   */
  DiskIds: Array<string>
  /**
   * 扩容后的云硬盘大小。单位: GB。高性能云硬盘大小取值范围：[10, 4000] ,SSD云硬盘大小取值范围：[20, 4000]。扩容后的云硬盘大小必须大于当前云硬盘大小。
   */
  DiskSize: number
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
   * 自动续费标识。取值范围：<br><li>NOTIFY_AND_AUTO_RENEW：通知过期且自动续费<br><li>NOTIFY_AND_MANUAL_RENEW：通知过期不自动续费，用户需要手动续费<br><li>DISABLE_NOTIFY_AND_MANUAL_RENEW：不自动续费，且不通知<br><br>默认取值：NOTIFY_AND_MANUAL_RENEW。若该参数指定为NOTIFY_AND_AUTO_RENEW，在账户余额充足的情况下，云硬盘到期后将按月自动续费。
   */
  RenewFlag?: string
  /**
   * 新购单位. 默认值: "m"。
   */
  TimeUnit?: string
}

/**
 * RunDockerContainers返回参数结构体
 */
export interface RunDockerContainersResponse {
  /**
   * Docker活动ID列表。
   */
  DockerActivitySet?: Array<string>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
 * StopInstances返回参数结构体
 */
export interface StopInstancesResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ResetInstancesPassword请求参数结构体
 */
export interface ResetInstancesPasswordRequest {
  /**
   * 实例 ID 列表。每次请求批量实例的上限为 100。可通过 <a href="https://cloud.tencent.com/document/product/1207/47573">DescribeInstances</a> 接口返回值中的 InstanceId 获取。
   */
  InstanceIds: Array<string>
  /**
   * 实例登录密码。不同操作系统类型密码复杂度限制不一样，具体如下：</br> `LINUX_UNIX` 实例密码必须 8-30 位，推荐使用 12 位以上密码，不能以“/”开头，至少包含以下字符中的三种不同字符，字符种类：</br> <li>小写字母：[a-z]</br></li> <li>大写字母：[A-Z]</br></li> <li>数字：0-9</br></li> <li>特殊字符： ()\`\~!@#$%^&\*-+=\_|{}[]:;' <>,.?/</li></br> `WINDOWS` 实例密码必须 12-30 位，不能以“/”开头且不包括用户名，至少包含以下字符中的三种不同字符</br> <li>小写字母：[a-z]</br></li> <li>大写字母：[A-Z]</br></li> <li>数字： 0-9</br></li> <li>特殊字符：()\`~!@#$%^&\*-+=\_|{}[]:;' <>,.?/</br></li> <li>如果实例即包含 `LINUX_UNIX` 实例又包含 `WINDOWS` 实例，则密码复杂度限制按照 `WINDOWS` 实例的限制。</li>
   */
  Password: string
  /**
   * 待重置密码的实例操作系统用户名。不得超过 64 个字符。
   */
  UserName?: string
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
  /**
   * 计费项目明细列表。
   */
  DetailPrices: Array<DetailPrice>
}

/**
 * DescribeInstances请求参数结构体
 */
export interface DescribeInstancesRequest {
  /**
   * 实例 ID 列表。每次请求批量实例的上限为 100。可通过[DescribeInstances](https://cloud.tencent.com/document/api/1207/47573)接口返回值中的InstanceId获取。
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
<li>tag-key</li>按照【标签键】进行过滤。
类型：String
必选：否
<li>tag-value</li>按照【标签值】进行过滤。
类型：String
必选：否
<li> tag:tag-key</li>按照【标签键值对】进行过滤。 tag-key使用具体的标签键进行替换。
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
  /**
   * 指定排序字段 。取值范围： "EXPIRED_TIME"：依据实例的到期时间排序。 
 不传入此字段时, 优先返回实例状态为“待回收”的实例, 其余实例以“创建时间”倒序返回。
   */
  OrderField?: string
  /**
   * 输出实例列表的排列顺序。取值范围：
"ASC"：升序排列。
"DESC"：降序排列。
默认按升序排序。当传入该字段时，必须指定OrderField。
   */
  Order?: string
}

/**
 * DescribeFirewallTemplateRuleQuota返回参数结构体
 */
export interface DescribeFirewallTemplateRuleQuotaResponse {
  /**
   * 当前可用配额。
   */
  Available?: number
  /**
   * 总配额。
   */
  Total?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DetachCcn请求参数结构体
 */
export interface DetachCcnRequest {
  /**
   * 云联网实例ID。可通过[DescribeCcnAttachedInstances](https://cloud.tencent.com/document/product/1207/58797)接口返回值中的CcnId获取。
   */
  CcnId: string
}

/**
 * RenameDockerContainer返回参数结构体
 */
export interface RenameDockerContainerResponse {
  /**
   * Docker活动ID。
   */
  DockerActivityId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * Docker活动信息
 */
export interface DockerActivity {
  /**
   * 活动ID。
   */
  ActivityId?: string
  /**
   * 活动名称。
   */
  ActivityName?: string
  /**
   * 活动状态。取值范围： 
<li>INIT：表示初始化，活动尚未执行</li>
<li>OPERATING：表示活动执行中</li>
<li>SUCCESS：表示活动执行成功</li>
<li>FAILED：表示活动执行失败</li>
   */
  ActivityState?: string
  /**
   * 活动执行的命令输出，以base64编码。
   */
  ActivityCommandOutput?: string
  /**
   * 容器ID列表。
   */
  ContainerIds?: Array<string>
  /**
   * 创建时间。按照 ISO8601 标准表示，并且使用 UTC 时间。
   */
  CreatedTime?: string
  /**
   * 结束时间。按照 ISO8601 标准表示，并且使用 UTC 时间。
   */
  EndTime?: string
}

/**
 * DescribeFirewallTemplateApplyRecords返回参数结构体
 */
export interface DescribeFirewallTemplateApplyRecordsResponse {
  /**
   * 防火墙模板应用记录列表。
   */
  ApplyRecordSet?: Array<FirewallTemplateApplyRecord>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
  TotalCount?: number
  /**
   * 快照的详情列表。
   */
  SnapshotSet?: Array<Snapshot>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
  SnapshotId?: string
  /**
   * 创建此快照的磁盘类型。取值：<li>SYSTEM_DISK：系统盘</li>
   */
  DiskUsage?: string
  /**
   * 创建此快照的磁盘 ID。
   */
  DiskId?: string
  /**
   * 创建此快照的磁盘大小，单位 GB。
   */
  DiskSize?: number
  /**
   * 快照名称，用户自定义的快照别名。
   */
  SnapshotName?: string
  /**
   * 快照的状态。取值范围：
<li>NORMAL：正常 </li>
<li>CREATING：创建中</li>
<li>ROLLBACKING：回滚中。</li>
   */
  SnapshotState?: string
  /**
   * 创建或回滚快照进度百分比，成功后此字段取值为 100。
   */
  Percent?: number
  /**
   * 快照的最新操作，只有创建、回滚快照时记录。
取值如 CreateInstanceSnapshot，RollbackInstanceSnapshot。
   */
  LatestOperation?: string
  /**
   * 快照的最新操作状态，只有创建、回滚快照时记录。
取值范围：
<li>SUCCESS：表示操作成功</li>
<li>OPERATING：表示操作执行中</li>
<li>FAILED：表示操作失败</li>
   */
  LatestOperationState?: string
  /**
   * 快照最新操作的唯一请求 ID，只有创建、回滚快照时记录。
   */
  LatestOperationRequestId?: string
  /**
   * 快照的创建时间。
   */
  CreatedTime?: string
}

/**
 * ApplyFirewallTemplate请求参数结构体
 */
export interface ApplyFirewallTemplateRequest {
  /**
   * 防火墙模板ID。可通过[DescribeFirewallTemplates](https://cloud.tencent.com/document/product/1207/96874)接口返回值字段TemplateSet获取。
   */
  TemplateId: string
  /**
   * 应用防火墙模板的实例列表。列表长度最大值是100。
   */
  ApplyInstances: Array<InstanceIdentifier>
}

/**
 * ModifyFirewallRuleDescription返回参数结构体
 */
export interface ModifyFirewallRuleDescriptionResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDiskDiscount请求参数结构体
 */
export interface DescribeDiskDiscountRequest {
  /**
   * 云硬盘类型, 取值范围: CLOUD_PREMIUM: 高性能云硬盘，CLOUD_SSD: SSD云硬盘
   */
  DiskType: string
  /**
   * 云硬盘大小, 单位: GB。
   */
  DiskSize: number
  /**
   * 指定云硬盘备份点配额，不传时默认为不带备份点配额。目前只支持不带或设置1个云硬盘备份点配额。
   */
  DiskBackupQuota?: number
}

/**
 * CreateDisks返回参数结构体
 */
export interface CreateDisksResponse {
  /**
   * 当通过本接口来创建云硬盘时会返回该参数，表示一个或多个云硬盘ID。返回云硬盘ID列表并不代表云硬盘创建成功。

可根据 [DescribeDisks](https://cloud.tencent.com/document/product/1207/66093) 接口查询返回的DiskSet中对应云硬盘的ID的状态来判断创建是否完成；如果云硬盘状态由“PENDING”变为“UNATTACHED”或“ATTACHED”，则为创建成功。
   */
  DiskIdSet?: Array<string>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * AttachDisks返回参数结构体
 */
export interface AttachDisksResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 云硬盘备份点操作限制列表。
 */
export interface DiskBackupDeniedActions {
  /**
   * 云硬盘备份点ID。
   */
  DiskBackupId: string
  /**
   * 操作限制列表。
   */
  DeniedActions: Array<DeniedAction>
}

/**
 * CreateDiskBackup请求参数结构体
 */
export interface CreateDiskBackupRequest {
  /**
   * 云硬盘ID，可通过 [DescribeDisks](https://cloud.tencent.com/document/api/1207/66093) 接口返回值中的 DiskId 获取。
   */
  DiskId: string
  /**
   * 云硬盘备份点名称，最大长度为 90 。
   */
  DiskBackupName?: string
}

/**
 * CreateFirewallRules请求参数结构体
 */
export interface CreateFirewallRulesRequest {
  /**
   * 实例ID。可通过 [DescribeInstances](https://cloud.tencent.com/document/api/1207/47573) 接口返回值中的 InstanceId 获取。
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
  Name?: string
  /**
   * 软件版本。
   */
  Version?: string
  /**
   * 软件图片 URL。
   */
  ImageUrl?: string
  /**
   * 软件安装目录。
   */
  InstallDir?: string
  /**
   * 软件详情列表。
   */
  DetailSet?: Array<SoftwareDetail>
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
   * 防火墙版本号。
   */
  FirewallVersion?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
  TotalCount?: number
  /**
   * 可退还实例详细信息列表。
   */
  InstanceReturnableSet?: Array<InstanceReturnable>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 容器环境变量
 */
export interface ContainerEnv {
  /**
   * 环境变量Key
注意：此字段可能返回 null，表示取不到有效值。
   */
  Key: string
  /**
   * 环境变量值
注意：此字段可能返回 null，表示取不到有效值。
   */
  Value: string
}

/**
 * 流量包详情
 */
export interface TrafficPackage {
  /**
   * 流量包ID。
   */
  TrafficPackageId?: string
  /**
   * 流量包生效周期内已使用流量，单位字节。
   */
  TrafficUsed?: number
  /**
   * 流量包生效周期内的总流量，单位字节。
   */
  TrafficPackageTotal?: number
  /**
   * 流量包生效周期内的剩余流量，单位字节。
   */
  TrafficPackageRemaining?: number
  /**
   * 流量包生效周期内超出流量包额度的流量，单位字节。
   */
  TrafficOverflow?: number
  /**
   * 流量包生效周期开始时间。按照 ISO8601 标准表示，并且使用 UTC 时间。 
格式为： YYYY-MM-DDThh:mm:ssZ。
   */
  StartTime?: string
  /**
   * 流量包生效周期结束时间。按照 ISO8601 标准表示，并且使用 UTC 时间。 
格式为： YYYY-MM-DDThh:mm:ssZ。
   */
  EndTime?: string
  /**
   * 流量包到期时间。按照 ISO8601 标准表示，并且使用 UTC 时间。 
格式为： YYYY-MM-DDThh:mm:ssZ。
   */
  Deadline?: string
  /**
   * 流量包状态：
<li>NETWORK_NORMAL：正常</li>
<li>OVERDUE_NETWORK_DISABLED：欠费断网</li>
   */
  Status?: string
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
   * IPv4网段或 IPv4地址(互斥)。
示例值：0.0.0.0/0。

和Ipv6CidrBlock互斥，两者都不指定时，如果Protocol不是ICMPv6，则取默认值0.0.0.0/0。
   */
  CidrBlock?: string
  /**
   * IPv6网段或IPv6地址(互斥)。
示例值：::/0。

和CidrBlock互斥，两者都不指定时，如果Protocol是ICMPv6，则取默认值::/0。
   */
  Ipv6CidrBlock?: string
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
  AppType?: string
  /**
   * 协议，取值：TCP，UDP，ICMP，ALL。
   */
  Protocol?: string
  /**
   * 端口，取值：ALL，单独的端口，逗号分隔的离散端口，减号分隔的端口范围。
   */
  Port?: string
  /**
   * IPv4网段或 IPv4地址(互斥)。
示例值：0.0.0.0/0。

和Ipv6CidrBlock互斥，两者都不指定时，如果Protocol不是ICMPv6，则取默认值0.0.0.0/0。
   */
  CidrBlock?: string
  /**
   * IPv6网段或IPv6地址(互斥)。
示例值：::/0。

和CidrBlock互斥，两者都不指定时，如果Protocol是ICMPv6，则取默认值::/0。
   */
  Ipv6CidrBlock?: string
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
 * CreateFirewallRules返回参数结构体
 */
export interface CreateFirewallRulesResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDisks请求参数结构体
 */
export interface DescribeDisksRequest {
  /**
   * 云硬盘ID列表。每次批量请求云硬盘的上限为 100。
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
取值：SYSTEM_DISK或DATA_DISK
disk-state
按照【云硬盘状态】进行过滤。
类型：String
必选：否
取值：参考数据结构[Disk](https://cloud.tencent.com/document/api/1207/47576#Disk)中DiskState取值。
每次请求的 Filters 的上限为 10，Filter.Values 的上限为 100。参数不支持同时指定 DiskIds 和 Filters。
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
  TotalCount?: number
  /**
   * 实例详细信息列表。
   */
  InstanceSet?: Array<Instance>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
  TotalCount?: number
  /**
   * 可用区详细信息列表
   */
  ZoneInfoSet?: Array<ZoneInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
  BlueprintId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeFirewallTemplates返回参数结构体
 */
export interface DescribeFirewallTemplatesResponse {
  /**
   * 模板总数量。
   */
  TotalCount?: number
  /**
   * 防火墙模板列表。
   */
  TemplateSet?: Array<FirewallTemplate>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
  UserDiscount?: number
  /**
   * 公共折扣。
   */
  CommonDiscount?: number
  /**
   * 最终折扣。
   */
  FinalDiscount?: number
  /**
   * 活动折扣。取值为null，表示无有效值，即没有折扣。
注意：此字段可能返回 null，表示取不到有效值。
   */
  ActivityDiscount?: number
  /**
   * 折扣类型。
user：用户折扣; common：官网折扣; activity：活动折扣。 取值为null，表示无有效值，即没有折扣。
注意：此字段可能返回 null，表示取不到有效值。
   */
  DiscountType?: string
}

/**
 * DetachDisks返回参数结构体
 */
export interface DetachDisksResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
  AutoGeneratePassword?: string
  /**
   * 实例登录密码。具体按照操作系统的复杂度要求。 

`LINUX_UNIX` 实例密码必须 8-30 位，推荐使用 12 位以上密码，不能包含空格，不能以“/”开头，至少包含以下字符中的三种不同字符，字符种类：<br>
<li>小写字母：[a-z]</li>
<li>大写字母：[A-Z]</li>
<li>数字：0-9</li>
<li>特殊字符： ()\`\~!@#$%^&\*-+=\_|{}[]:;' <>,.?/</li> 

`WINDOWS` 实例密码必须 12-30 位，不能包含空格，不能以“/”开头且不包括用户名，至少包含以下字符中的三种不同字符：<br>
<li>小写字母：[a-z]</li>
<li>大写字母：[A-Z]</li>
<li>数字：0-9</li>
<li>特殊字符：()\`~!@#$%^&\*-+=\_|{}[]:;' <>,.?/</li> 
   */
  Password?: string
  /**
   * 密钥ID列表，最多同时指定5个密钥。关联密钥后，就可以通过对应的私钥来访问实例。密钥与密码不能同时指定，同时WINDOWS操作系统不支持指定密钥。密钥ID列表可以通过[DescribeKeyPairs](https://cloud.tencent.com/document/product/1207/55540)接口获取。
   */
  KeyIds?: Array<string>
}

/**
 * DescribeResetInstanceBlueprints请求参数结构体
 */
export interface DescribeResetInstanceBlueprintsRequest {
  /**
   * 实例ID。可通过 <a href="https://cloud.tencent.com/document/product/1207/47573">DescribeInstances</a> 接口返回值中的 InstanceId 获取。
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
可通过 <a href="https://cloud.tencent.com/document/product/1207/47689">DescribeBlueprints</a> 接口返回值中的 BlueprintId 获取。
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
可通过 <a href="https://cloud.tencent.com/document/product/1207/47689">DescribeBlueprints</a> 接口返回值中的 BlueprintName 获取。
<li>blueprint-state</li>按照【镜像状态】进行过滤。
类型：String
必选：否
可通过 <a href="https://cloud.tencent.com/document/product/1207/47689">DescribeBlueprints</a> 接口返回值中的 BlueprintState 获取。

每次请求的 Filters 的上限为 10，Filter.Values 的上限为 5。参数不支持同时指定 BlueprintIds 和 Filters 。
   */
  Filters?: Array<Filter>
}

/**
 * RemoveDockerContainers返回参数结构体
 */
export interface RemoveDockerContainersResponse {
  /**
   * Docker活动ID。
   */
  DockerActivityId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
  /**
   * 容器重启策略
   */
  RestartPolicy?: string
}

/**
 * ResetAttachCcn返回参数结构体
 */
export interface ResetAttachCcnResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyInstancesRenewFlag返回参数结构体
 */
export interface ModifyInstancesRenewFlagResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ApplyInstanceSnapshot请求参数结构体
 */
export interface ApplyInstanceSnapshotRequest {
  /**
   * 实例 ID。可通过 [DescribeInstances](https://cloud.tencent.com/document/product/1207/47573) 接口返回值中的 InstanceId	获取。
   */
  InstanceId: string
  /**
   * 快照 ID。可通过 [DescribeSnapshots](https://cloud.tencent.com/document/product/1207/54388) 接口返回值中的 SnapshotId		获取。
   */
  SnapshotId: string
}

/**
 * DisassociateInstancesKeyPairs返回参数结构体
 */
export interface DisassociateInstancesKeyPairsResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
   * 续费周期。
   */
  Period?: number
  /**
   * 自动续费标识。取值范围：<br><li>NOTIFY_AND_AUTO_RENEW：通知过期且自动续费<br><li>NOTIFY_AND_MANUAL_RENEW：通知过期不自动续费，用户需要手动续费<br><li>DISABLE_NOTIFY_AND_MANUAL_RENEW：不自动续费，且不通知<br><br>默认取值：NOTIFY_AND_MANUAL_RENEW。若该参数指定为NOTIFY_AND_AUTO_RENEW，在账户余额充足的情况下，云硬盘到期后将按月自动续费。
   */
  RenewFlag?: string
  /**
   * 周期单位。取值范围：“m”(月)。默认值: "m"。
   */
  TimeUnit?: string
  /**
   * 当前实例到期时间。如“2018-01-01 00:00:00”。指定该参数即可对齐云硬盘所挂载的实例到期时间。该参数与Period必须指定其一，且不支持同时指定。
   */
  CurInstanceDeadline?: string
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
  DiskType?: string
  /**
   * 系统盘大小，单位：GB。
   */
  DiskSize?: number
  /**
   * 系统盘ID。
注意：此字段可能返回 null，表示取不到有效值。
   */
  DiskId?: string
}

/**
 * ApplyFirewallTemplate返回参数结构体
 */
export interface ApplyFirewallTemplateResponse {
  /**
   * 任务ID。
   */
  TaskId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * TerminateDisks请求参数结构体
 */
export interface TerminateDisksRequest {
  /**
   * 云硬盘ID列表。可通过[DescribeDisks](https://cloud.tencent.com/document/product/1207/66093)接口返回值中的DiskId获取。
   */
  DiskIds: Array<string>
}

/**
 * RenewDisks返回参数结构体
 */
export interface RenewDisksResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
  /**
   * 要创建的容器配置列表。
   */
  Containers?: Array<DockerContainerConfiguration>
  /**
   * 实例登录信息配置。默认缺失情况下代表用户选择实例创建后设置登录密码或绑定密钥。
   */
  LoginConfiguration?: LoginConfiguration
}

/**
 * ResizeDisks返回参数结构体
 */
export interface ResizeDisksResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateFirewallTemplateRules请求参数结构体
 */
export interface CreateFirewallTemplateRulesRequest {
  /**
   * 防火墙模板ID。可通过[DescribeFirewallTemplates](https://cloud.tencent.com/document/product/1207/96874)接口返回值字段TemplateSet获取。
   */
  TemplateId: string
  /**
   * 防火墙模板规则列表。
   */
  TemplateRules: Array<FirewallRule>
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
  InternetChargeType?: string
  /**
   * 公网出带宽上限，单位：Mbps。
   */
  InternetMaxBandwidthOut?: number
  /**
   * 是否分配公网 IP。
   */
  PublicIpAssigned?: boolean
}

/**
 * ReplaceFirewallTemplateRule请求参数结构体
 */
export interface ReplaceFirewallTemplateRuleRequest {
  /**
   * 防火墙模板ID。可通过 [DescribeFirewallTemplates](https://cloud.tencent.com/document/product/1207/96874) 接口返回值中的 TemplateId 获取。
   */
  TemplateId: string
  /**
   * 防火墙模板规则ID。可通过 [DescribeFirewallTemplateRules](https://cloud.tencent.com/document/product/1207/96875) 接口返回值中的 TemplateRuleId 获取。
   */
  TemplateRuleId: string
  /**
   * 替换后的防火墙模板规则。
   */
  TemplateRule: FirewallRule
}

/**
 * 实例价格详细信息
 */
export interface InstancePriceDetail {
  /**
   * 实例ID。
   */
  InstanceId?: string
  /**
   * 询价信息。
   */
  InstancePrice?: InstancePrice
  /**
   * 折扣梯度详情，每个梯度包含的信息有：时长，折扣数，总价，折扣价，折扣详情（用户折扣、官网折扣、最终折扣）。
   */
  DiscountDetail?: Array<DiscountDetail>
}

/**
 * DescribeDockerContainers返回参数结构体
 */
export interface DescribeDockerContainersResponse {
  /**
   * 总数量。
   */
  TotalCount?: number
  /**
   * 容器列表。
   */
  DockerContainerSet?: Array<DockerContainer>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyDockerContainer返回参数结构体
 */
export interface ModifyDockerContainerResponse {
  /**
   * Docker活动ID。
   */
  DockerActivityId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDiskBackupsDeniedActions返回参数结构体
 */
export interface DescribeDiskBackupsDeniedActionsResponse {
  /**
   * 云硬盘备份点操作限制列表详细信息。
   */
  DiskBackupDeniedActionSet?: Array<DiskBackupDeniedActions>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
 * 防火墙模板应用记录。
 */
export interface FirewallTemplateApplyRecord {
  /**
   * 任务ID。
   */
  TaskId?: string
  /**
   * 应用模板的时间。
   */
  ApplyTime?: string
  /**
   * 模板规则列表。
   */
  TemplateRuleSet?: Array<FirewallTemplateRule>
  /**
   * 应用模板的执行状态。

- SUCCESS：成功
- FAILED：失败
   */
  ApplyState?: string
  /**
   * 应用成功的实例数量。
   */
  SuccessCount?: number
  /**
   * 应用失败的实例数量。
   */
  FailedCount?: number
  /**
   * 正在应用中的实例数量。
   */
  RunningCount?: number
  /**
   * 应用模板的执行细节。
   */
  ApplyDetailSet?: Array<FirewallTemplateApplyRecordDetail>
}

/**
 * DescribeDockerContainerDetail返回参数结构体
 */
export interface DescribeDockerContainerDetailResponse {
  /**
   * Docker容器详情，json字符串base64编码。
   */
  ContainerDetail?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeBundleDiscount请求参数结构体
 */
export interface DescribeBundleDiscountRequest {
  /**
   * 套餐 ID。可通过[DescribeBundles](https://cloud.tencent.com/document/product/1207/47575)接口返回值中的BundleId获取。
   */
  BundleId: string
}

/**
 * DescribeFirewallTemplateRules返回参数结构体
 */
export interface DescribeFirewallTemplateRulesResponse {
  /**
   * 防火墙模板规则总数量。
   */
  TotalCount?: number
  /**
   * 防火墙模板规则信息列表。
   */
  TemplateRuleSet?: Array<FirewallTemplateRuleInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDisksReturnable返回参数结构体
 */
export interface DescribeDisksReturnableResponse {
  /**
   * 可退还云硬盘详细信息列表。
   */
  DiskReturnableSet?: Array<DiskReturnable>
  /**
   * 符合条件的云硬盘数量。
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyDiskBackupsAttribute返回参数结构体
 */
export interface ModifyDiskBackupsAttributeResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteFirewallTemplate请求参数结构体
 */
export interface DeleteFirewallTemplateRequest {
  /**
   * 防火墙模板ID。可通过[DescribeFirewallTemplates](https://cloud.tencent.com/document/product/1207/96874)接口返回值字段TemplateSet获取。
   */
  TemplateId: string
}

/**
 * IsolateDisks请求参数结构体
 */
export interface IsolateDisksRequest {
  /**
   * 云硬盘ID列表。一个或多个待操作的云硬盘ID。可通过[DescribeDisks](https://cloud.tencent.com/document/product/1207/66093)接口返回值中的DiskId获取。每次请求退还数据盘数量总计上限为20。
   */
  DiskIds: Array<string>
}

/**
 * CreateInstanceSnapshot返回参数结构体
 */
export interface CreateInstanceSnapshotResponse {
  /**
   * 快照 ID。
   */
  SnapshotId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyInstancesBundle返回参数结构体
 */
export interface ModifyInstancesBundleResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 描述通用资源配额信息。
 */
export interface GeneralResourceQuota {
  /**
   * 资源名称。
   */
  ResourceName?: string
  /**
   * 资源当前可用数量。
   */
  ResourceQuotaAvailable?: number
  /**
   * 资源总数量。
   */
  ResourceQuotaTotal?: number
}

/**
 * DescribeResetInstanceBlueprints返回参数结构体
 */
export interface DescribeResetInstanceBlueprintsResponse {
  /**
   * 符合条件的镜像数量。
   */
  TotalCount?: number
  /**
   * 镜像重置信息列表
   */
  ResetInstanceBlueprintSet?: Array<ResetInstanceBlueprint>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDisksReturnable请求参数结构体
 */
export interface DescribeDisksReturnableRequest {
  /**
   * 云硬盘ID列表。每次批量请求云硬盘的上限为 10。可通过[DescribeDisks](https://cloud.tencent.com/document/product/1207/66093)接口返回值中的DiskId获取。
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
 * ResetFirewallTemplateRules返回参数结构体
 */
export interface ResetFirewallTemplateRulesResponse {
  /**
   * 重置后的规则ID列表。
   */
  TemplateRuleIdSet?: Array<string>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 自动挂载并初始化该数据盘。
 */
export interface AutoMountConfiguration {
  /**
   * 待挂载的实例ID。指定的实例必须与指定的数据盘处于同一可用区，实例状态必须处于“运行中”状态，且实例必须支持[自动化助手](https://cloud.tencent.com/document/product/1340/50752)。
   */
  InstanceId: string
  /**
   * 实例内的挂载点。仅Linux操作系统的实例可传入该参数, 不传则默认挂载在“/data/disk”路径下。
   */
  MountPoint?: string
  /**
   * 文件系统类型。取值: “ext4”、“xfs”。仅Linux操作系统的实例可传入该参数, 不传则默认为“ext4”。
   */
  FileSystemType?: string
}

/**
 * 关于Lighthouse Instance实例的价格信息
 */
export interface InstancePrice {
  /**
   * 套餐单价原价。
   */
  OriginalBundlePrice?: number
  /**
   * 原价。
   */
  OriginalPrice?: number
  /**
   * 折扣。
   */
  Discount?: number
  /**
   * 折后价。
   */
  DiscountPrice?: number
  /**
   * 价格货币单位。取值范围CNY:人民币。USD:美元。
   */
  Currency?: string
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
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyDisksBackupQuota返回参数结构体
 */
export interface ModifyDisksBackupQuotaResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
  GeneralResourceQuotaSet?: Array<GeneralResourceQuota>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
   * 自动续费标识。取值范围：

- NOTIFY_AND_AUTO_RENEW：通知过期且自动续费
- NOTIFY_AND_MANUAL_RENEW：通知过期不自动续费
- DISABLE_NOTIFY_AND_MANUAL_RENEW：不通知过期不自动续费

若该参数指定为NOTIFY_AND_AUTO_RENEW，在账户余额充足的情况下，实例到期后将按月自动续费。
   */
  RenewFlag: string
}

/**
 * StartDockerContainers请求参数结构体
 */
export interface StartDockerContainersRequest {
  /**
   * 实例ID。可通过[DescribeInstances](https://cloud.tencent.com/document/product/1207/47573)接口返回值中的InstanceId获取。
   */
  InstanceId: string
  /**
   * 容器ID列表。可通过[DescribeDockerContainers](https://cloud.tencent.com/document/product/1207/95473)接口返回值中的ContainerId获取。
   */
  ContainerIds: Array<string>
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
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * RenewInstances返回参数结构体
 */
export interface RenewInstancesResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * RenameDockerContainer请求参数结构体
 */
export interface RenameDockerContainerRequest {
  /**
   * 实例ID。可通过[DescribeInstances](https://cloud.tencent.com/document/product/1207/47573)接口返回值中的InstanceId获取。
   */
  InstanceId: string
  /**
   * 容器ID。可通过[DescribeDockerContainers](https://cloud.tencent.com/document/product/1207/95473)接口返回值中的ContainerId获取。
   */
  ContainerId: string
  /**
   * 容器新的名称。
   */
  ContainerName: string
}

/**
 * DescribeDisksDeniedActions返回参数结构体
 */
export interface DescribeDisksDeniedActionsResponse {
  /**
   * 云硬盘操作限制列表详细信息。
   */
  DiskDeniedActionSet?: Array<DiskDeniedActions>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ResetInstance返回参数结构体
 */
export interface ResetInstanceResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * IsolateDisks返回参数结构体
 */
export interface IsolateDisksResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeFirewallRules请求参数结构体
 */
export interface DescribeFirewallRulesRequest {
  /**
   * 实例ID。可通过 [DescribeInstances](https://cloud.tencent.com/document/api/1207/47573) 接口返回值中的 InstanceId 获取。
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
}

/**
 * 防火墙模板规则信息
 */
export interface FirewallTemplateRule {
  /**
   * 防火墙模板规则ID。
   */
  TemplateRuleId?: string
  /**
   * 防火墙规则。
   */
  FirewallRule?: FirewallRule
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
   * 实例的套餐 ID。可以通过调用[DescribeBundles](https://cloud.tencent.com/document/api/1207/47575)接口获取。
   */
  BundleId: string
  /**
   * 预付费模式，即包年包月相关参数设置。通过该参数可以指定包年包月实例的购买时长、是否设置自动续费等属性。
   */
  InstanceChargePrepaid: InstanceChargePrepaid
  /**
   * 创建数量，默认为 1。
   */
  InstanceCount?: number
  /**
   * 应用镜像 ID，使用收费应用镜像时必填。可通过[DescribeBlueprints](https://cloud.tencent.com/document/product/1207/47689)接口返回值中的BlueprintId获取。
   */
  BlueprintId?: string
}

/**
 * 使用场景信息
 */
export interface Scene {
  /**
   * 使用场景Id
   */
  SceneId?: string
  /**
   * 使用场景展示名称
   */
  DisplayName?: string
  /**
   * 使用场景描述
   */
  Description?: string
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
  TotalCount?: number
  /**
   * 变更套餐详细信息。
   */
  ModifyBundleSet?: Array<ModifyBundle>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateInstanceSnapshot请求参数结构体
 */
export interface CreateInstanceSnapshotRequest {
  /**
   * 需要创建快照的实例 ID。可通过 [DescribeInstances](https://cloud.tencent.com/document/product/1207/47573) 接口返回值中的 InstanceId	获取。
   */
  InstanceId: string
  /**
   * 快照名称，最长为 60 个字符。
   */
  SnapshotName?: string
}

/**
 * CancelShareBlueprintAcrossAccounts请求参数结构体
 */
export interface CancelShareBlueprintAcrossAccountsRequest {
  /**
   * 镜像ID, 可以通过[DescribeBlueprints](https://cloud.tencent.com/document/product/1207/47689)接口返回的BlueprintId获取。
   */
  BlueprintId: string
  /**
   * 接收共享镜像的账号ID列表。账号ID不同于QQ号，查询用户账号ID请查看账号信息中的账号ID栏。账号个数取值最大为10。
   */
  AccountIds: Array<string>
}

/**
 * 描述镜像实例信息。
 */
export interface BlueprintInstance {
  /**
   * 镜像信息。
   */
  Blueprint?: Blueprint
  /**
   * 软件列表。
   */
  SoftwareSet?: Array<Software>
  /**
   * 实例 ID。
   */
  InstanceId?: string
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
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
   * 自动续费标识。取值范围：<br><li>NOTIFY_AND_AUTO_RENEW：通知过期且自动续费</li><br><li>NOTIFY_AND_MANUAL_RENEW：通知过期不自动续费，用户需要手动续费</li><br><li>DISABLE_NOTIFY_AND_MANUAL_RENEW：不自动续费，且不通知</li><br><br>默认取值：NOTIFY_AND_MANUAL_RENEW。若该参数指定为NOTIFY_AND_AUTO_RENEW，在账户余额充足的情况下，实例到期后将按月自动续费。
   */
  RenewFlag?: string
}

/**
 * ModifyInstancesAttribute返回参数结构体
 */
export interface ModifyInstancesAttributeResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 价格信息
 */
export interface Price {
  /**
   * 实例价格。
   */
  InstancePrice?: InstancePrice
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
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteFirewallTemplateRules请求参数结构体
 */
export interface DeleteFirewallTemplateRulesRequest {
  /**
   * 防火墙模板ID。可通过[DescribeFirewallTemplates](https://cloud.tencent.com/document/product/1207/96874)接口返回值字段TemplateSet获取。
   */
  TemplateId: string
  /**
   * 防火墙模板规则ID列表。可通过[DescribeFirewallTemplateRules](https://cloud.tencent.com/document/product/1207/96875)接口返回值字段TemplateRuleSet获取。

   */
  TemplateRuleIds: Array<string>
}
