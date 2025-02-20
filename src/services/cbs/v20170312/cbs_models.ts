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
 * ModifyDiskExtraPerformance请求参数结构体
 */
export interface ModifyDiskExtraPerformanceRequest {
  /**
   * 额外购买的云硬盘性能值，单位MB/s。
   */
  ThroughputPerformance: number
  /**
   * 需要创建快照的云硬盘ID，可通过[DescribeDisks](/document/product/362/16315)接口查询。
   */
  DiskId: string
}

/**
 * ModifyDiskAttributes返回参数结构体
 */
export interface ModifyDiskAttributesResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDiskBackups请求参数结构体
 */
export interface DescribeDiskBackupsRequest {
  /**
   * 要查询备份点的ID列表。参数不支持同时指定 DiskBackupIds 和 Filters。
   */
  DiskBackupIds?: Array<string>
  /**
   * 过滤条件，参数不支持同时指定 DiskBackupIds 和 Filters。过滤条件：<br><li>disk-backup-id - Array of String - 是否必填：否 -（过滤条件）按照备份点的ID过滤。备份点ID形如：dbp-11112222。</li><br><li>disk-id - Array of String - 是否必填：否 -（过滤条件）按照创建备份点的云硬盘ID过滤。</li><br><li>disk-usage - Array of String - 是否必填：否 -（过滤条件）按创建备份点的云硬盘类型过滤。 (SYSTEM_DISK：代表系统盘 | DATA_DISK：代表数据盘。)</li>
   */
  Filters?: Array<Filter>
  /**
   * 偏移量，默认为0。关于`Offset`的更进一步介绍请参考API[简介](/document/product/362/15633)中的相关小节。
   */
  Offset?: number
  /**
   * 返回数量，默认为20，最大值为100。关于`Limit`的更进一步介绍请参考 API [简介](/document/product/362/15633)中的相关小节。
   */
  Limit?: number
  /**
   * 输出云硬盘备份点列表的排列顺序。取值范围：<br><li>ASC：升序排列</li><br><li>DESC：降序排列。</li>
   */
  Order?: string
  /**
   * 云硬盘备份点列表排序的依据字段。取值范围：<br><li>CREATE_TIME：依据云硬盘备份点的创建时间排序</li><br>默认按创建时间排序。
   */
  OrderField?: string
}

/**
 * CreateSnapshotGroup请求参数结构体
 */
export interface CreateSnapshotGroupRequest {
  /**
   * 需要创建快照组的云硬盘ID列表，必须选择挂载在同一实例上的盘列表。
   */
  DiskIds: Array<string>
  /**
   * 快照组名称，快照组关联的快照也会继承快照组的名称。例如：快照组名称为testSnapshotGroup，快照组关联两个快照，则两个快照的名称分别为testSnapshotGroup_0，testSnapshotGroup_1。
   */
  SnapshotGroupName?: string
  /**
   * 快照组需要绑定的标签列表。
   */
  Tags?: Array<Tag>
}

/**
 * 描述了定期快照策略的详细信息
 */
export interface AutoSnapshotPolicy {
  /**
   * 已绑定当前定期快照策略的云盘ID列表。
   */
  DiskIdSet?: Array<string>
  /**
   * 定期快照策略是否激活。
   */
  IsActivated?: boolean
  /**
   * 定期快照策略的状态。取值范围：
<ul>
  <li>NORMAL：正常</li>
  <li>ISOLATED：已隔离</li>
</ul>
   */
  AutoSnapshotPolicyState?: string
  /**
   * 是否是跨账号复制快照快照, 1：是, 0: 不是
注意：此字段可能返回 null，表示取不到有效值。
   */
  IsCopyToRemote?: number
  /**
   * 使用该定期快照策略创建出来的快照是否永久保留。
   */
  IsPermanent?: boolean
  /**
   * 定期快照下次触发的时间。
   */
  NextTriggerTime?: string
  /**
   * 定期快照策略名称。
   */
  AutoSnapshotPolicyName?: string
  /**
   * 定期快照策略ID。
   */
  AutoSnapshotPolicyId?: string
  /**
   * 定期快照的执行策略。
   */
  Policy?: Array<Policy>
  /**
   * 定期快照策略的创建时间。
   */
  CreateTime?: string
  /**
   * 使用该定期快照策略创建出来的快照保留天数。
   */
  RetentionDays?: number
  /**
   * 复制的目标账户ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  CopyToAccountUin?: string
  /**
   * 已绑定当前定期快照策略的实例ID列表。
注意：此字段可能返回 null，表示取不到有效值。
   */
  InstanceIdSet?: Array<string>
  /**
   * 该定期快照创建的快照可以保留的月数。
注意：此字段可能返回 null，表示取不到有效值。
   */
  RetentionMonths?: number
  /**
   * 该定期快照创建的快照最大保留数量。
注意：此字段可能返回 null，表示取不到有效值。
   */
  RetentionAmount?: number
  /**
   * 定期快照高级保留策略。
注意：此字段可能返回 null，表示取不到有效值。
   */
  AdvancedRetentionPolicy?: AdvancedRetentionPolicy
  /**
   * 该复制快照策略的源端账户ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  CopyFromAccountUin?: string
  /**
   * 标签。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Tags?: Array<Tag>
}

/**
 * 描述购买云盘时的费用明细。
 */
export interface DetailPrice {
  /**
   * 描述计费项目名称。
注意：此字段可能返回 null，表示取不到有效值。
   */
  PriceTitle: string
  /**
   * 描述计费项目显示名称，用户控制台展示。
   */
  PriceName: string
  /**
   * 预付费云盘预支费用的原价，单位：元。
注意：此字段可能返回 null，表示取不到有效值。
   */
  OriginalPrice: number
  /**
   * 预付费云盘预支费用的折扣价，单位：元。
注意：此字段可能返回 null，表示取不到有效值。
   */
  DiscountPrice: number
  /**
   * 后付费云盘原单价，单位：元。
注意：此字段可能返回 null，表示取不到有效值。
   */
  UnitPrice: number
  /**
   * 后付费云盘折扣单价，单位：元。
注意：此字段可能返回 null，表示取不到有效值。
   */
  UnitPriceDiscount: number
  /**
   * 后付费云盘的计价单元，取值范围：HOUR：表示后付费云盘的计价单元是按小时计算。
注意：此字段可能返回 null，表示取不到有效值。
   */
  ChargeUnit: string
  /**
   * 高精度预付费云盘预支费用的原价，单位：元。
注意：此字段可能返回 null，表示取不到有效值。
   */
  OriginalPriceHigh?: string
  /**
   * 高精度预付费云盘预支费用的折扣价，单位：元。
注意：此字段可能返回 null，表示取不到有效值。
   */
  DiscountPriceHigh?: string
  /**
   * 高精度后付费云盘原单价，单位：元。
注意：此字段可能返回 null，表示取不到有效值。
   */
  UnitPriceHigh?: string
  /**
   * 高精度后付费云盘折扣单价，单位：元。
注意：此字段可能返回 null，表示取不到有效值。
   */
  UnitPriceDiscountHigh?: string
}

/**
 * ModifySnapshotsSharePermission请求参数结构体
 */
export interface ModifySnapshotsSharePermissionRequest {
  /**
   * 快照ID, 可通过[DescribeSnapshots](https://cloud.tencent.com/document/api/362/15647)查询获取。
   */
  SnapshotIds: Array<string>
  /**
   * 接收分享快照的账号Id列表，array型参数的格式可以参考[API简介](https://cloud.tencent.com/document/api/213/568)。账号ID不同于QQ号，查询用户账号ID请查看[账号信息](https://console.cloud.tencent.com/developer)中的账号ID栏。
   */
  AccountIds: Array<string>
  /**
   * 操作，包括 SHARE，CANCEL。其中SHARE代表分享操作，CANCEL代表取消分享操作。
   */
  Permission: string
}

/**
 * CopySnapshotCrossRegions返回参数结构体
 */
export interface CopySnapshotCrossRegionsResponse {
  /**
   * 快照跨地域复制的结果，如果请求下发成功，则返回相应地地域的新快照ID，否则返回Error。
   */
  SnapshotCopyResultSet?: Array<SnapshotCopyResult>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeSnapshotGroups请求参数结构体
 */
export interface DescribeSnapshotGroupsRequest {
  /**
   * 过滤条件。<br><li>snapshot-group-id - Array of String - 是否必填：否 -（过滤条件）按快照组ID过滤 <br><li>snapshot-group-state - Array of String - 是否必填：否 -（过滤条件）按快照组状态过滤。(NORMAL: 正常 | CREATING:创建中 | ROLLBACKING:回滚中) <br><li>snapshot-group-name - Array of String - 是否必填：否 -（过滤条件）按快照组名称过滤 <br><li>snapshot-id - Array of String - 是否必填：否 -（过滤条件）按快照组内的快照ID过滤
   */
  Filters?: Array<Filter>
  /**
   * 偏移量，默认为0。
   */
  Offset?: number
  /**
   * 返回数量，默认为20，最大值为100。
   */
  Limit?: number
}

/**
 * ModifyDiskBackupQuota请求参数结构体
 */
export interface ModifyDiskBackupQuotaRequest {
  /**
   * 云硬盘ID。
   */
  DiskId: string
  /**
   * 调整之后的云硬盘备份点配额。
   */
  DiskBackupQuota: number
}

/**
 * InquiryPriceCreateDisks返回参数结构体
 */
export interface InquiryPriceCreateDisksResponse {
  /**
   * 描述了新购云盘的价格。
   */
  DiskPrice: Price
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * BindAutoSnapshotPolicy请求参数结构体
 */
export interface BindAutoSnapshotPolicyRequest {
  /**
   * 要绑定的定期快照策略ID。
   */
  AutoSnapshotPolicyId: string
  /**
   * 要绑定的云硬盘ID列表，一次请求最多绑定80块云盘。
   */
  DiskIds?: Array<string>
}

/**
 * CreateSnapshot返回参数结构体
 */
export interface CreateSnapshotResponse {
  /**
   * 新创建的快照ID。
注意：此字段可能返回 null，表示取不到有效值。
   */
  SnapshotId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeAutoSnapshotPolicies请求参数结构体
 */
export interface DescribeAutoSnapshotPoliciesRequest {
  /**
   * 要查询的定期快照策略ID列表。参数不支持同时指定`AutoSnapshotPolicyIds`和`Filters`。
   */
  AutoSnapshotPolicyIds?: Array<string>
  /**
   * 过滤条件。参数不支持同时指定`AutoSnapshotPolicyIds`和`Filters`。<br><li>auto-snapshot-policy-id - Array of String - 是否必填：否 -（过滤条件）按定期快照策略ID进行过滤。定期快照策略ID形如：`asp-11112222`。<br><li>auto-snapshot-policy-state - Array of String - 是否必填：否 -（过滤条件）按定期快照策略的状态进行过滤。定期快照策略ID形如：`asp-11112222`。(NORMAL：正常 | ISOLATED：已隔离。)<br><li>auto-snapshot-policy-name - Array of String - 是否必填：否 -（过滤条件）按定期快照策略名称进行过滤。
   */
  Filters?: Array<Filter>
  /**
   * 返回数量，默认为20，最大值为100。关于`Limit`的更进一步介绍请参考 API [简介](/document/product/362/15633)中的相关小节。
   */
  Limit?: number
  /**
   * 偏移量，默认为0。关于`Offset`的更进一步介绍请参考API[简介](/document/product/362/15633)中的相关小节。
   */
  Offset?: number
  /**
   * 输出定期快照列表的排列顺序。取值范围：<br><li>ASC：升序排列<br><li>DESC：降序排列。
   */
  Order?: string
  /**
   * 定期快照列表排序的依据字段。取值范围：<br><li>CREATETIME：依据定期快照的创建时间排序<br>默认按创建时间排序。
   */
  OrderField?: string
}

/**
 * ModifySnapshotsSharePermission返回参数结构体
 */
export interface ModifySnapshotsSharePermissionResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteDiskBackups请求参数结构体
 */
export interface DeleteDiskBackupsRequest {
  /**
   * 待删除的云硬盘备份点ID。
   */
  DiskBackupIds: Array<string>
}

/**
 * InitializeDisks返回参数结构体
 */
export interface InitializeDisksResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDiskStoragePool请求参数结构体
 */
export interface DescribeDiskStoragePoolRequest {
  /**
   * 返回数量，默认为20，最大值为100。关于`Limit`的更进一步介绍请参考 API [简介](/document/product/362/15633)中的相关小节。
   */
  Limit?: number
  /**
   * 指定需要查询的独享集群ID列表，该入参不能与Filters一起使用。
   */
  CdcIds?: Array<string>
  /**
   * 过滤条件。参数不支持同时指定`CdcIds`和`Filters`。<br><li>cdc-id - Array of String - 是否必填：否 -（过滤条件）按独享集群ID过滤。<br><li>zone - Array of String - 是否必填：否 -（过滤条件）按独享集群所在[可用区](/document/product/213/15753#ZoneInfo)过滤。<br><li>cage-id - Array of String - 是否必填：否 -（过滤条件）按独享集群所在围笼的ID过滤。<br><li>disk-type - Array of String - 是否必填：否 -（过滤条件）按照云盘介质类型过滤。(CLOUD_BASIC：表示普通云硬盘 | CLOUD_PREMIUM：表示高性能云硬盘。| CLOUD_SSD：SSD表示SSD云硬盘。)
   */
  Filters?: Array<Filter>
  /**
   * 偏移量，默认为0。关于`Offset`的更进一步介绍请参考API[简介](/document/product/362/15633)中的相关小节。
   */
  Offset?: number
}

/**
 * DescribeDiskBackups返回参数结构体
 */
export interface DescribeDiskBackupsResponse {
  /**
   * 符合条件的云硬盘备份点数量。
   */
  TotalCount?: number
  /**
   * 云硬盘备份点的详细信息列表。
   */
  DiskBackupSet?: Array<DiskBackup>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 描述快照跨地域复制的结果。
 */
export interface SnapshotCopyResult {
  /**
   * 复制到目标地域的新快照ID。
   */
  SnapshotId?: string
  /**
   * 指示具体错误信息，成功时为空字符串。
   */
  Message?: string
  /**
   * 错误码，成功时取值为“Success”。
   */
  Code?: string
  /**
   * 跨地复制的目标地域。
   */
  DestinationRegion?: string
}

/**
 * RenewDisk请求参数结构体
 */
export interface RenewDiskRequest {
  /**
   * 预付费模式，即包年包月相关参数设置。通过该参数可以指定包年包月云硬盘的续费时长。<br>在云硬盘与挂载的实例一起续费的场景下，可以指定参数CurInstanceDeadline，此时云硬盘会按对齐到实例续费后的到期时间来续费。
   */
  DiskChargePrepaid: DiskChargePrepaid
  /**
   * 云硬盘ID， 通过[DescribeDisks](/document/product/362/16315)接口查询。
   */
  DiskId: string
}

/**
 * InquirePriceModifyDiskExtraPerformance返回参数结构体
 */
export interface InquirePriceModifyDiskExtraPerformanceResponse {
  /**
   * 描述了调整云盘额外性能时对应的价格。
   */
  DiskPrice?: Price
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 定期快照高级保留策略，四个参数都为必选参数
 */
export interface AdvancedRetentionPolicy {
  /**
   * 保留最新快照Days天内的每天最新的一个快照，取值范围：[0, 100]
注意：此字段可能返回 null，表示取不到有效值。
   */
  Days: number
  /**
   * 保留最新快照Weeks周内的每周最新的一个快照，取值范围：[0, 100]
注意：此字段可能返回 null，表示取不到有效值。
   */
  Weeks: number
  /**
   * 保留最新快照Months月内的每月最新的一个快照， 取值范围：[0, 100]
注意：此字段可能返回 null，表示取不到有效值。
   */
  Months: number
  /**
   * 保留最新快照Years年内的每年最新的一个快照，取值范围：[0, 100]
注意：此字段可能返回 null，表示取不到有效值。
   */
  Years: number
}

/**
 * CreateDisks请求参数结构体
 */
export interface CreateDisksRequest {
  /**
   * 实例所在的位置。通过该参数可以指定实例所属可用区，所属项目。若不指定项目，将在默认项目下进行创建。
   */
  Placement: Placement
  /**
   * 云硬盘计费类型。<br><li>PREPAID：预付费，即包年包月</li><br><li>POSTPAID_BY_HOUR：按小时后付费</li><br><li>CDCPAID：独享集群付费<br>各类型价格请参考云硬盘[价格总览](/document/product/362/2413)。</li>
   */
  DiskChargeType: string
  /**
   * 硬盘介质类型。取值范围：<br><li>CLOUD_BASIC：表示普通云硬盘</li><br><li>CLOUD_PREMIUM：表示高性能云硬盘</li><br><li>CLOUD_BSSD：表示通用型SSD云硬盘</li><br><li>CLOUD_SSD：表示SSD云硬盘</li><br><li>CLOUD_HSSD：表示增强型SSD云硬盘</li><br><li>CLOUD_TSSD：表示极速型SSD云硬盘。</li>
   */
  DiskType: string
  /**
   * 云盘显示名称。不传则默认为“未命名”。最大长度不能超60个字节。
   */
  DiskName?: string
  /**
   * 云盘绑定的标签。
   */
  Tags?: Array<Tag>
  /**
   * 快照ID，如果传入则根据此快照创建云硬盘，快照类型必须为数据盘快照，可通过[DescribeSnapshots](/document/product/362/15647)接口查询快照，见输出参数DiskUsage解释。
   */
  SnapshotId?: string
  /**
   * 创建云硬盘数量，不传则默认为1。单次请求最多可创建的云盘数有限制，具体参见[云硬盘使用限制](https://cloud.tencent.com/doc/product/362/5145)。
   */
  DiskCount?: number
  /**
   * 可选参数。使用此参数可给云硬盘购买额外的性能。<br>当前仅支持极速型云盘（CLOUD_TSSD）和增强型SSD云硬盘（CLOUD_HSSD）
   */
  ThroughputPerformance?: number
  /**
   * 可选参数。购买加密盘时自定义密钥， 当传入该参数时, Encrypt入参不为空
   */
  KmsKeyId?: string
  /**
   * 云硬盘大小，单位为GiB。<br><li>如果传入`SnapshotId`则可不传`DiskSize`，此时新建云盘的大小为快照大小</li><br><li>如果传入`SnapshotId`同时传入`DiskSize`，则云盘大小必须大于或等于快照大小</li><br><li>云盘大小取值范围参见云硬盘[产品分类](/document/product/362/2353)的说明。</li>
   */
  DiskSize?: number
  /**
   * 可选参数，默认为False。传入True时，云盘将创建为共享型云盘。
   */
  Shareable?: boolean
  /**
   * 用于保证请求幂等性的字符串。该字符串由客户生成，需保证不同请求之间唯一，最大值不超过64个ASCII字符。若不指定该参数，则无法保证请求的幂等性。
   */
  ClientToken?: string
  /**
   * 传入该参数用于创建加密云盘，取值固定为ENCRYPT。
   */
  Encrypt?: string
  /**
   * 预付费模式，即包年包月相关参数设置。通过该参数指定包年包月云盘的购买时长、是否设置自动续费等属性。<br>创建预付费云盘该参数必传，创建按小时后付费云盘无需传该参数。
   */
  DiskChargePrepaid?: DiskChargePrepaid
  /**
   * 销毁云盘时删除关联的非永久保留快照。0 表示非永久快照不随云盘销毁而销毁，1表示非永久快照随云盘销毁而销毁，默认取0。快照是否永久保留可以通过DescribeSnapshots接口返回的快照详情的IsPermanent字段来判断，true表示永久快照，false表示非永久快照。
   */
  DeleteSnapshot?: number
  /**
   * 创建云盘时指定自动挂载并初始化该数据盘。
   */
  AutoMountConfiguration?: AutoMountConfiguration
  /**
   * 指定云硬盘备份点配额。
   */
  DiskBackupQuota?: number
  /**
   * 创建云盘时是否开启性能突发
   */
  BurstPerformance?: boolean
  /**
   * 指定云硬盘加密类型，取值为ENCRYPT_V1和ENCRYPT_V2，分别表示第一代和第二代加密技术，两种加密技术互不兼容。推荐优先使用第二代加密技术ENCRYPT_V2，第一代加密技术仅支持在部分老旧机型使用。该参数仅当创建加密云硬盘时有效。
   */
  EncryptType?: string
}

/**
 * AttachDisks请求参数结构体
 */
export interface AttachDisksRequest {
  /**
   * 云服务器实例ID。云盘将被挂载到此云服务器上，通过[DescribeInstances](/document/product/213/15728)接口查询。
   */
  InstanceId: string
  /**
   * 将要被挂载的弹性云盘ID。通过[DescribeDisks](/document/product/362/16315)接口查询。单次最多可挂载10块弹性云盘。
   */
  DiskIds: Array<string>
  /**
   * 可选参数，不传该参数则仅执行挂载操作。传入`True`时，会在挂载成功后将云硬盘设置为随云主机销毁模式，仅对按量计费云硬盘有效。
   */
  DeleteWithInstance?: boolean
  /**
   * 可选参数，用于控制云盘挂载时使用的挂载模式，目前仅对黑石裸金属机型有效。取值范围：<br><li>PF</li><br><li>VF</li>
   */
  AttachMode?: string
}

/**
 * DescribeDiskAssociatedAutoSnapshotPolicy请求参数结构体
 */
export interface DescribeDiskAssociatedAutoSnapshotPolicyRequest {
  /**
   * 要查询的云硬盘ID。
   */
  DiskId: string
}

/**
 * DescribeSnapshots请求参数结构体
 */
export interface DescribeSnapshotsRequest {
  /**
   * 要查询快照的ID列表。参数不支持同时指定`SnapshotIds`和`Filters`。
   */
  SnapshotIds?: Array<string>
  /**
   * 过滤条件。参数不支持同时指定`SnapshotIds`和`Filters`。<br><li>snapshot-id - Array of String - 是否必填：否 -（过滤条件）按照快照的ID过滤。快照ID形如：`snap-11112222`。<br><li>snapshot-name - Array of String - 是否必填：否 -（过滤条件）按照快照名称过滤。<br><li>snapshot-state - Array of String - 是否必填：否 -（过滤条件）按照快照状态过滤。 (NORMAL：正常 | CREATING：创建中 | ROLLBACKING：回滚中。)<br><li>disk-usage - Array of String - 是否必填：否 -（过滤条件）按创建快照的云盘类型过滤。 (SYSTEM_DISK：代表系统盘 | DATA_DISK：代表数据盘。)<br><li>project-id  - Array of String - 是否必填：否 -（过滤条件）按云硬盘所属项目ID过滤。<br><li>disk-id  - Array of String - 是否必填：否 -（过滤条件）按照创建快照的云硬盘ID过滤。<br><li>zone - Array of String - 是否必填：否 -（过滤条件）按照[可用区](/document/product/213/15753#ZoneInfo)过滤。<br><li>encrypt - Array of String - 是否必填：否 -（过滤条件）按是否加密盘快照过滤。 (TRUE：表示加密盘快照 | FALSE：表示非加密盘快照。)
<li>snapshot-type- Array of String - 是否必填：否 -（过滤条件）根据snapshot-type指定的快照类型查询对应的快照。
(SHARED_SNAPSHOT：表示共享过来的快照 | PRIVATE_SNAPSHOT：表示自己私有快照。)
   */
  Filters?: Array<Filter>
  /**
   * 返回数量，默认为20，最大值为100。关于`Limit`的更进一步介绍请参考 API [简介](/document/product/362/15633)中的相关小节。
   */
  Limit?: number
  /**
   * 快照列表排序的依据字段。取值范围：<br><li>CREATE_TIME：依据快照的创建时间排序<br>默认按创建时间排序。
   */
  OrderField?: string
  /**
   * 偏移量，默认为0。关于`Offset`的更进一步介绍请参考API[简介](/document/product/362/15633)中的相关小节。
   */
  Offset?: number
  /**
   * 输出云盘列表的排列顺序。取值范围：<br><li>ASC：升序排列<br><li>DESC：降序排列。
   */
  Order?: string
}

/**
 * ModifyAutoSnapshotPolicyAttribute请求参数结构体
 */
export interface ModifyAutoSnapshotPolicyAttributeRequest {
  /**
   * 定期快照策略ID。
   */
  AutoSnapshotPolicyId: string
  /**
   * 是否激活定期快照策略，FALSE表示未激活，TRUE表示激活，默认为TRUE。
   */
  IsActivated?: boolean
  /**
   * 通过该定期快照策略创建的快照是否永久保留。FALSE表示非永久保留，TRUE表示永久保留，默认为FALSE。
   */
  IsPermanent?: boolean
  /**
   * 要创建的定期快照策略名。不传则默认为“未命名”。最大长度不能超60个字节。
   */
  AutoSnapshotPolicyName?: string
  /**
   * 定期快照的执行策略。
   */
  Policy?: Array<Policy>
  /**
   * 通过该定期快照策略创建的快照保留天数。如果指定本参数，则IsPermanent入参不可指定为TRUE，否则会产生冲突。
   */
  RetentionDays?: number
}

/**
 * DescribeDiskConfigQuota返回参数结构体
 */
export interface DescribeDiskConfigQuotaResponse {
  /**
   * 云盘配置列表。
   */
  DiskConfigSet?: Array<DiskConfig>
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
 * InquiryPriceResizeDisk返回参数结构体
 */
export interface InquiryPriceResizeDiskResponse {
  /**
   * 描述了扩容云盘的价格。
   */
  DiskPrice?: PrepayPrice
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 标签。
 */
export interface Tag {
  /**
   * 标签健。
   */
  Key: string
  /**
   * 标签值。
   */
  Value: string
}

/**
 * ResizeDisk返回参数结构体
 */
export interface ResizeDiskResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 描述了云硬盘的详细信息
 */
export interface Disk {
  /**
   * 云盘是否与挂载的实例一起销毁。<br><li>true:销毁实例时会同时销毁云盘，只支持按小时后付费云盘。</li><li>false：销毁实例时不销毁云盘。</li>
注意：此字段可能返回 null，表示取不到有效值。
   */
  DeleteWithInstance?: boolean
  /**
   * 自动续费标识。取值范围：<br><li>NOTIFY_AND_AUTO_RENEW：通知过期且自动续费</li><li>NOTIFY_AND_MANUAL_RENEW：通知过期不自动续费</li><li>DISABLE_NOTIFY_AND_MANUAL_RENEW：不通知过期不自动续费。</li>
注意：此字段可能返回 null，表示取不到有效值。
   */
  RenewFlag?: string
  /**
   * 硬盘介质类型。取值范围：<br><li>CLOUD_BASIC：表示普通云硬盘</li><li>CLOUD_PREMIUM：表示高性能云硬盘</li><li>CLOUD_BSSD：表示通用型SSD云硬盘</li><li>CLOUD_SSD：表示SSD云硬盘</li><li>CLOUD_HSSD：表示增强型SSD云硬盘</li><li>CLOUD_TSSD：表示极速型SSD云硬盘。</li>
   */
  DiskType?: string
  /**
   * 云盘状态。取值范围：<br><li>UNATTACHED：未挂载</li><li>ATTACHING：挂载中</li><li>ATTACHED：已挂载</li><li>DETACHING：解挂中</li><li>EXPANDING：扩容中</li><li>ROLLBACKING：回滚中</li><li>TORECYCLE：待回收</li><li>DUMPING：拷贝硬盘中。</li>
   */
  DiskState?: string
  /**
   * 云盘拥有的快照总数。
   */
  SnapshotCount?: number
  /**
   * 云盘已挂载到子机，且子机与云盘都是包年包月。<br><li>true：子机设置了自动续费标识，但云盘未设置</li><li>false：云盘自动续费标识正常。</li>
注意：此字段可能返回 null，表示取不到有效值。
   */
  AutoRenewFlagError?: boolean
  /**
   * 云盘是否处于快照回滚状态。取值范围：<br><li>false:表示不处于快照回滚状态</li><li>true:表示处于快照回滚状态。</li>
   */
  Rollbacking?: boolean
  /**
   * 对于非共享型云盘，该参数为空数组。对于共享型云盘，则表示该云盘当前被挂载到的CVM实例InstanceId
   */
  InstanceIdList?: Array<string>
  /**
   * 云盘是否为加密盘。取值范围：<br><li>false:表示非加密盘</li><li>true:表示加密盘。</li>
   */
  Encrypt?: boolean
  /**
   * 云硬盘名称。
   */
  DiskName?: string
  /**
   * 云硬盘因欠费销毁或者到期销毁时， 是否使用快照备份数据的标识。true表示销毁时创建快照进行数据备份。false表示直接销毁，不进行数据备份。
   */
  BackupDisk?: boolean
  /**
   * 与云盘绑定的标签，云盘未绑定标签则取值为空。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Tags?: Array<Tag>
  /**
   * 云硬盘挂载的云主机ID。
   */
  InstanceId?: string
  /**
   * 云盘的挂载类型。取值范围：<br><li>PF: PF挂载</li><li>VF: VF挂载</li>
注意：此字段可能返回 null，表示取不到有效值。
   */
  AttachMode?: string
  /**
   * 云盘关联的定期快照ID。只有在调用DescribeDisks接口时，入参ReturnBindAutoSnapshotPolicy取值为TRUE才会返回该参数。
注意：此字段可能返回 null，表示取不到有效值。
   */
  AutoSnapshotPolicyIds?: Array<string>
  /**
   * 云硬盘额外性能值，单位MB/s。
注意：此字段可能返回 null，表示取不到有效值。
   */
  ThroughputPerformance?: number
  /**
   * 云盘是否处于类型变更中。取值范围：<br><li>false:表示云盘不处于类型变更中</li><li>true:表示云盘已发起类型变更，正处于迁移中。</li>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Migrating?: boolean
  /**
   * 云硬盘ID。
   */
  DiskId?: string
  /**
   * 云盘拥有的快照总容量，单位为MB。
   */
  SnapshotSize?: number
  /**
   * 云硬盘所在的位置。
   */
  Placement?: Placement
  /**
   * 判断预付费的云盘是否支持主动退还。<br><li>true:支持主动退还</li><li>false:不支持主动退还。</li>
注意：此字段可能返回 null，表示取不到有效值。
   */
  IsReturnable?: boolean
  /**
   * 云硬盘的到期时间。
   */
  DeadlineTime?: string
  /**
   * 云盘是否挂载到云主机上。取值范围：<br><li>false:表示未挂载</li><li>true:表示已挂载。</li>
   */
  Attached?: boolean
  /**
   * 云硬盘大小，单位GiB。
   */
  DiskSize?: number
  /**
   * 云盘类型变更的迁移进度，取值0到100。
注意：此字段可能返回 null，表示取不到有效值。
   */
  MigratePercent?: number
  /**
   * 云硬盘类型。取值范围：<br><li>SYSTEM_DISK：系统盘</li><li>DATA_DISK：数据盘。</li>
   */
  DiskUsage?: string
  /**
   * 付费模式。取值范围：<br><li>PREPAID：预付费，即包年包月</li><li>POSTPAID_BY_HOUR：后付费，即按量计费。</li>
   */
  DiskChargeType?: string
  /**
   * 是否为弹性云盘，false表示非弹性云盘，true表示弹性云盘。
   */
  Portable?: boolean
  /**
   * 云盘是否具备创建快照的能力。取值范围：<br><li>false表示不具备</li><li>true表示具备。</li>
   */
  SnapshotAbility?: boolean
  /**
   * 在云盘已挂载到实例，且实例与云盘都是包年包月的条件下，此字段才有意义。<br><li>true:云盘到期时间早于实例。</li><li>false：云盘到期时间晚于实例。</li>
注意：此字段可能返回 null，表示取不到有效值。
   */
  DeadlineError?: boolean
  /**
   * 云盘快照回滚的进度。
   */
  RollbackPercent?: number
  /**
   * 当前时间距离盘到期的天数（仅对预付费盘有意义）。
注意：此字段可能返回 null，表示取不到有效值。
   */
  DifferDaysOfDeadline?: number
  /**
   * 预付费云盘在不支持主动退还的情况下，该参数表明不支持主动退还的具体原因。取值范围：<br><li>1：云硬盘已经退还</li><li>2：云硬盘已过期</li><li>3：云盘不支持退还</li><li>8：超过可退还数量的限制。</li>
注意：此字段可能返回 null，表示取不到有效值。
   */
  ReturnFailCode?: number
  /**
   * 云盘是否为共享型云盘。
   */
  Shareable?: boolean
  /**
   * 云硬盘的创建时间。
   */
  CreateTime?: string
  /**
   * 销毁云盘时删除关联的非永久保留快照。0 表示非永久快照不随云盘销毁而销毁，1表示非永久快照随云盘销毁而销毁，默认取0。快照是否永久保留可以通过DescribeSnapshots接口返回的快照详情的IsPermanent字段来判断，true表示永久快照，false表示非永久快照。
   */
  DeleteSnapshot?: number
  /**
   * 云硬盘备份点配额。表示最大可以保留的备份点数量。
   */
  DiskBackupQuota?: number
  /**
   * 云硬盘备份点已使用的数量。
   */
  DiskBackupCount?: number
  /**
   * 云硬盘挂载实例的类型。取值范围：<br><li>CVM</li><li>EKS</li>
   */
  InstanceType?: string
  /**
   * 云硬盘最后一次挂载的实例ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  LastAttachInsId?: string
  /**
   * 云硬盘最后一次操作错误提示
注意：此字段可能返回 null，表示取不到有效值。
   */
  ErrorPrompt?: string
  /**
   * 云盘是否开启性能突发
注意：此字段可能返回 null，表示取不到有效值。
   */
  BurstPerformance?: boolean
  /**
   * 云硬盘加密类型，值为ENCRYPT_V1和ENCRYPT_V2，分别表示第一代和第二代加密技术，两种加密技术互不兼容
注意：此字段可能返回 null，表示取不到有效值。
   */
  EncryptType?: string
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
 * ApplySnapshot返回参数结构体
 */
export interface ApplySnapshotResponse {
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
   * 将要卸载的云硬盘ID， 通过[DescribeDisks](/document/product/362/16315)接口查询，单次请求最多可卸载10块弹性云盘。
   */
  DiskIds: Array<string>
  /**
   * 对于非共享型云盘，会根据该参数校验是否与实际挂载的实例一致；对于共享型云盘，该参数表示要从哪个CVM实例上卸载云盘。
   */
  InstanceId?: string
}

/**
 * DescribeSnapshotGroups返回参数结构体
 */
export interface DescribeSnapshotGroupsResponse {
  /**
   * 符合条件的总数量。
   */
  TotalCount?: number
  /**
   * 快照组列表详情。
   */
  SnapshotGroupSet?: Array<SnapshotGroup>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeSnapshotOverview返回参数结构体
 */
export interface DescribeSnapshotOverviewResponse {
  /**
   * 当前总有效快照数量
   */
  TotalNums?: number
  /**
   * 已使用快照总容量大小，容量单位为GiB
   */
  TotalSize?: number
  /**
   * 快照免费额度大小，额度单位为GiB
   */
  FreeQuota?: number
  /**
   * 快照真实产生计费的总容量大小，单位为GiB
   */
  RealTradeSize?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyDisksChargeType返回参数结构体
 */
export interface ModifyDisksChargeTypeResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateSnapshot请求参数结构体
 */
export interface CreateSnapshotRequest {
  /**
   * 需要创建快照的云硬盘ID，可通过[DescribeDisks](/document/product/362/16315)接口查询。
   */
  DiskId: string
  /**
   * 快照名称，不传则新快照名称默认为“未命名”。
   */
  SnapshotName?: string
  /**
   * 快照的到期时间，到期后该快照将会自动删除,需要传入UTC时间下的ISO-8601标准时间格式,例如:2022-01-08T09:47:55+00:00,。到期时间最小可设置为一天后的当前时间。
   */
  Deadline?: string
  /**
   * 云硬盘备份点ID。传入此参数时，将通过备份点创建快照。
   */
  DiskBackupId?: string
  /**
   * 快照绑定的标签。
   */
  Tags?: Array<Tag>
}

/**
 * DescribeInstancesDiskNum请求参数结构体
 */
export interface DescribeInstancesDiskNumRequest {
  /**
   * 云服务器实例ID，通过[DescribeInstances](/document/product/213/15728)接口查询。
   */
  InstanceIds: Array<string>
}

/**
 * DescribeSnapshotSharePermission返回参数结构体
 */
export interface DescribeSnapshotSharePermissionResponse {
  /**
   * 快照的分享信息的集合
   */
  SharePermissionSet?: Array<SharePermission>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyDiskBackupQuota返回参数结构体
 */
export interface ModifyDiskBackupQuotaResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * InquiryPriceRenewDisks请求参数结构体
 */
export interface InquiryPriceRenewDisksRequest {
  /**
   * 云硬盘ID， 通过[DescribeDisks](/document/product/362/16315)接口查询。
   */
  DiskIds: Array<string>
  /**
   * 预付费模式，即包年包月相关参数设置。通过该参数可以指定包年包月云盘的购买时长。如果在该参数中指定CurInstanceDeadline，则会按对齐到子机到期时间来续费。如果是批量续费询价，该参数与Disks参数一一对应，元素数量需保持一致。
   */
  DiskChargePrepaids?: Array<DiskChargePrepaid>
  /**
   * 指定云盘新的到期时间，形式如：2017-12-17 00:00:00。参数`NewDeadline`和`DiskChargePrepaids`是两种指定询价时长的方式，两者必传一个。
   */
  NewDeadline?: string
  /**
   * 云盘所属项目ID。 如传入则仅用于鉴权。
   */
  ProjectId?: number
}

/**
 * DescribeSnapshotSharePermission请求参数结构体
 */
export interface DescribeSnapshotSharePermissionRequest {
  /**
   * 要查询快照的ID。可通过[DescribeSnapshots](https://cloud.tencent.com/document/api/362/15647)查询获取。
   */
  SnapshotId: string
}

/**
 * InquirePriceModifyDiskBackupQuota请求参数结构体
 */
export interface InquirePriceModifyDiskBackupQuotaRequest {
  /**
   * 云硬盘ID， 通过DescribeDisks（查询云硬盘信息）接口查询。
   */
  DiskId: string
  /**
   * 修改后的云硬盘备份点配额，即云盘可以拥有的备份点数量，单位为个。
   */
  DiskBackupQuota: number
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
   * 要删除的快照ID列表，可通过[DescribeSnapshots](/document/product/362/15647)查询。
   */
  SnapshotIds: Array<string>
  /**
   * 是否强制删除快照关联的镜像
   */
  DeleteBindImages?: boolean
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
 * DeleteAutoSnapshotPolicies返回参数结构体
 */
export interface DeleteAutoSnapshotPoliciesResponse {
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
   * 符合条件的云硬盘数量。
   */
  TotalCount?: number
  /**
   * 云硬盘的详细信息列表。
   */
  DiskSet?: Array<Disk>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 描述了实例的抽象位置，包括其所在的可用区，所属的项目，以及所属的独享集群的ID和名字。
 */
export interface Placement {
  /**
   * 云硬盘所属的[可用区](/document/product/213/15753#ZoneInfo)。该参数也可以通过调用  [DescribeZones](/document/product/213/15707) 的返回值中的Zone字段来获取。
   */
  Zone: string
  /**
   * 围笼Id。作为入参时，表示对指定的CageId的资源进行操作，可为空。 作为出参时，表示资源所属围笼ID，可为空。
注意：此字段可能返回 null，表示取不到有效值。
   */
  CageId?: string
  /**
   * 实例所属项目ID。不填为默认项目。
   */
  ProjectId?: number
  /**
   * 实例所属项目名称。
注意：此字段可能返回 null，表示取不到有效值。
   */
  ProjectName?: string
  /**
   * 独享集群名字。作为入参时，忽略。作为出参时，表示云硬盘所属的独享集群名，可为空。
注意：此字段可能返回 null，表示取不到有效值。
   */
  CdcName?: string
  /**
   * 实例所属的独享集群ID。作为入参时，表示对指定的CdcId独享集群的资源进行操作，可为空。 作为出参时，表示资源所属的独享集群的ID，可为空。
注意：此字段可能返回 null，表示取不到有效值。
   */
  CdcId?: string
  /**
   * 独享集群id。
   */
  DedicatedClusterId?: string
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
 * ModifyDisksRenewFlag请求参数结构体
 */
export interface ModifyDisksRenewFlagRequest {
  /**
   * 一个或多个待操作的云硬盘ID。
   */
  DiskIds: Array<string>
  /**
   * 	云硬盘的自动续费标识。取值范围：<ul><li>NOTIFY_AND_AUTO_RENEW：通知过期且自动续费</li><li>NOTIFY_AND_MANUAL_RENEW：通知过期不自动续费</li><li>DISABLE_NOTIFY_AND_MANUAL_RENEW：不通知过期不自动续费</li></ul>
   */
  RenewFlag: string
  /**
   * 该参数支持设置云硬盘的自动续费周期，单位为月。
   */
  AutoRenewPeriod?: number
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
 * ModifyDiskAttributes请求参数结构体
 */
export interface ModifyDiskAttributesRequest {
  /**
   * 一个或多个待操作的云硬盘ID。如果传入多个云盘ID，仅支持所有云盘修改为同一属性。
   */
  DiskIds: Array<string>
  /**
   * 新的云硬盘名称。
   */
  DiskName?: string
  /**
   * 是否为弹性云盘，FALSE表示非弹性云盘，TRUE表示弹性云盘。仅支持非弹性云盘修改为弹性云盘。
   */
  Portable?: boolean
  /**
   * 新的云硬盘项目ID，只支持修改弹性云盘的项目ID。通过[DescribeProject](/document/api/378/4400)接口查询可用项目及其ID。
   */
  ProjectId?: number
  /**
   * 成功挂载到云主机后该云硬盘是否随云主机销毁，TRUE表示随云主机销毁，FALSE表示不随云主机销毁。仅支持按量计费云硬盘数据盘。
   */
  DeleteWithInstance?: boolean
  /**
   * 变更云盘类型时，可传入该参数，表示变更的目标类型，取值范围：<br><li>CLOUD_PREMIUM：表示高性能云硬盘</li><li>CLOUD_SSD：表示SSD云硬盘。</li>当前不支持批量变更类型，即传入DiskType时，DiskIds仅支持传入一块云盘；<br>变更云盘类型时不支持同时变更其他属性。
   */
  DiskType?: string
  /**
   * 开启/关闭云盘性能突发功能
   */
  BurstPerformanceOperation?: string
}

/**
 * GetSnapOverview请求参数结构体
 */
export type GetSnapOverviewRequest = null

/**
 * 镜像。
 */
export interface Image {
  /**
   * 镜像名称。
   */
  ImageName?: string
  /**
   * 镜像实例ID。
   */
  ImageId?: string
}

/**
 * ModifyAutoSnapshotPolicyAttribute返回参数结构体
 */
export interface ModifyAutoSnapshotPolicyAttributeResponse {
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
   * 需退还的云盘ID列表。
   */
  DiskIds: Array<string>
  /**
   * 销毁云盘时删除关联的非永久保留快照。0 表示非永久快照不随云盘销毁而销毁，1表示非永久快照随云盘销毁而销毁，默认取0。快照是否永久保留可以通过DescribeSnapshots接口返回的快照详情的IsPermanent字段来判断，true表示永久快照，false表示非永久快照。
   */
  DeleteSnapshot?: number
}

/**
 * 显示独享集群的大小
 */
export interface CdcSize {
  /**
   * 独享集群的总容量大小，单位GiB
   */
  DiskTotal?: number
  /**
   * 独享集群的可用容量大小，单位GiB
注意：此字段可能返回 null，表示取不到有效值。
   */
  DiskAvailable?: number
}

/**
 * DescribeInstancesDiskNum返回参数结构体
 */
export interface DescribeInstancesDiskNumResponse {
  /**
   * 各个云服务器已挂载和可挂载弹性云盘的数量。
   */
  AttachDetail?: Array<AttachDetail>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ResizeDisk请求参数结构体
 */
export interface ResizeDiskRequest {
  /**
   * 云硬盘扩容后的大小，单位为GB，必须大于当前云硬盘大小。云盘大小取值范围参见云硬盘[产品分类](/document/product/362/2353)的说明。
   */
  DiskSize: number
  /**
   * 云硬盘ID， 通过[DescribeDisks](/document/product/362/16315)接口查询。该字段仅供单块云硬盘扩容时传入。
   */
  DiskId?: string
}

/**
 * ApplyDiskBackup请求参数结构体
 */
export interface ApplyDiskBackupRequest {
  /**
   * 云硬盘备份点ID，可通过 DescribeDiskBackups 查询。
   */
  DiskBackupId: string
  /**
   * 云硬盘备份点原云硬盘ID，可通过DescribeDisks接口查询。
   */
  DiskId: string
  /**
   * 回滚云硬盘备份点前是否自动关机，默认为FALSE，表示不自动关机
   */
  AutoStopInstance?: boolean
  /**
   * 回滚云硬盘备份点完成后是否自动开机，默认为FALSE，表示不自动开机
   */
  AutoStartInstance?: boolean
}

/**
 * ModifyDisksChargeType请求参数结构体
 */
export interface ModifyDisksChargeTypeRequest {
  /**
   * 一个或多个待操作的云硬盘ID。每次请求批量云硬盘上限为100。
   */
  DiskIds: Array<string>
  /**
   * 设置为预付费模式，即包年包月相关参数设置。通过该参数可以指定包年包月实例的购买时长、是否设置自动续费等属性。
   */
  DiskChargePrepaid?: DiskChargePrepaid
  /**
   * 设置为后付费模式
   */
  DiskChargePostpaid?: boolean
}

/**
 * InitializeDisks请求参数结构体
 */
export interface InitializeDisksRequest {
  /**
   * 待重新初始化的云硬盘ID列表， 单次初始化限制20块以内
   */
  DiskIds: Array<string>
}

/**
 * CreateAutoSnapshotPolicy返回参数结构体
 */
export interface CreateAutoSnapshotPolicyResponse {
  /**
   * 新创建的定期快照策略ID。
   */
  AutoSnapshotPolicyId?: string
  /**
   * 首次开始备份的时间。
   */
  NextTriggerTime?: string
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
   * 快照ID, 可通过[DescribeSnapshots](/document/product/362/15647)查询。
   */
  SnapshotId: string
  /**
   * 快照的保留方式，FALSE表示非永久保留，TRUE表示永久保留。
   */
  IsPermanent?: boolean
  /**
   * 新的快照名称。最长为60个字符。
   */
  SnapshotName?: string
  /**
   * 快照的到期时间；设置好快照将会被同时设置为非永久保留方式；超过到期时间后快照将会被自动删除。
   */
  Deadline?: string
}

/**
 * UnbindAutoSnapshotPolicy请求参数结构体
 */
export interface UnbindAutoSnapshotPolicyRequest {
  /**
   * 要解绑的定期快照策略ID。
   */
  AutoSnapshotPolicyId: string
  /**
   * 要解绑定期快照策略的云盘ID列表。
   */
  DiskIds?: Array<string>
}

/**
 * 云盘配置。
 */
export interface DiskConfig {
  /**
   * 配置是否可用。
   */
  Available?: boolean
  /**
   * 付费模式。取值范围：<br><li>PREPAID：表示预付费，即包年包月<br><li>POSTPAID_BY_HOUR：表示后付费，即按量计费。
   */
  DiskChargeType?: string
  /**
   * 云硬盘所属的[可用区](/document/product/213/15753#ZoneInfo)。
   */
  Zone?: string
  /**
   * 实例机型系列。详见[实例类型](https://cloud.tencent.com/document/product/213/11518)
注意：此字段可能返回 null，表示取不到有效值。
   */
  InstanceFamily?: string
  /**
   * 云盘介质类型。取值范围：<br><li>CLOUD_BASIC：表示普通云硬盘<br><li>CLOUD_PREMIUM：表示高性能云硬盘<br><li>CLOUD_SSD：SSD表示SSD云硬盘。
   */
  DiskType?: string
  /**
   * 云盘大小变化的最小步长，单位GB。
注意：此字段可能返回 null，表示取不到有效值。
   */
  StepSize: number
  /**
   * 额外的性能区间。
注意：此字段可能返回 null，表示取不到有效值。
   */
  ExtraPerformanceRange: Array<number | bigint>
  /**
   * 实例机型。
注意：此字段可能返回 null，表示取不到有效值。
   */
  DeviceClass?: string
  /**
   * 云盘类型。取值范围：<br><li>SYSTEM_DISK：表示系统盘<br><li>DATA_DISK：表示数据盘。
   */
  DiskUsage?: string
  /**
   * 最小可配置云盘大小，单位GB。
   */
  MinDiskSize?: number
  /**
   * 最大可配置云盘大小，单位GB。
   */
  MaxDiskSize?: number
  /**
   * 描述预付费或后付费云盘的价格。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Price?: Price
}

/**
 * CreateDiskBackup返回参数结构体
 */
export interface CreateDiskBackupResponse {
  /**
   * 云硬盘备份点的ID。
   */
  DiskBackupId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * InquirePriceModifyDiskBackupQuota返回参数结构体
 */
export interface InquirePriceModifyDiskBackupQuotaResponse {
  /**
   * 描述了修改云硬盘备份点之后的云盘价格。
   */
  DiskPrice: Price
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteAutoSnapshotPolicies请求参数结构体
 */
export interface DeleteAutoSnapshotPoliciesRequest {
  /**
   * 要删除的定期快照策略ID列表。
   */
  AutoSnapshotPolicyIds: Array<string>
}

/**
 * 描述了实例的计费模式
 */
export interface DiskChargePrepaid {
  /**
   * 购买云盘的时长，默认单位为月，取值范围：1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 24, 36。
   */
  Period: number
  /**
   * 自动续费标识。取值范围：<br><li>NOTIFY_AND_AUTO_RENEW：通知过期且自动续费<br><li>NOTIFY_AND_MANUAL_RENEW：通知过期不自动续费<br><li>DISABLE_NOTIFY_AND_MANUAL_RENEW：不通知过期不自动续费<br><br>默认取值：NOTIFY_AND_MANUAL_RENEW：通知过期不自动续费。
   */
  RenewFlag?: string
  /**
   * 需要将云盘的到期时间与挂载的子机对齐时，可传入该参数。该参数表示子机当前的到期时间，此时Period如果传入，则表示子机需要续费的时长，云盘会自动按对齐到子机续费后的到期时间续费，示例取值：2018-03-30 20:15:03。
   */
  CurInstanceDeadline?: string
}

/**
 * DeleteSnapshotGroup返回参数结构体
 */
export interface DeleteSnapshotGroupResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ApplySnapshotGroup返回参数结构体
 */
export interface ApplySnapshotGroupResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeSnapshotOverview请求参数结构体
 */
export type DescribeSnapshotOverviewRequest = null

/**
 * 过滤条件
 */
export interface Filter {
  /**
   * 过滤键的名称
   */
  Name: string
  /**
   * 一个或者多个过滤值
   */
  Values: Array<string>
}

/**
 * InquiryPriceCreateDisks请求参数结构体
 */
export interface InquiryPriceCreateDisksRequest {
  /**
   * 云硬盘计费类型。<br><li>PREPAID：预付费，即包年包月<br><li>POSTPAID_BY_HOUR：按小时后付费
   */
  DiskChargeType: string
  /**
   * 硬盘介质类型。取值范围：<br><li>CLOUD_BASIC：表示普通云硬盘<br><li>CLOUD_PREMIUM：表示高性能云硬盘<br><li>CLOUD_SSD：表示SSD云硬盘<br><li>CLOUD_HSSD：表示增强型SSD云硬盘<br><li>CLOUD_TSSD：表示极速型SSD云硬盘。
   */
  DiskType: string
  /**
   * 云硬盘大小，单位为GB。云盘大小取值范围参见云硬盘[产品分类](/document/product/362/2353)的说明。
   */
  DiskSize: number
  /**
   * 云盘所属项目ID。
   */
  ProjectId?: number
  /**
   * 购买云盘的数量。不填则默认为1。
   */
  DiskCount?: number
  /**
   * 额外购买的云硬盘性能值，单位MB/s。<br>目前仅支持增强型SSD云硬盘（CLOUD_HSSD）和极速型SSD云硬盘（CLOUD_TSSD）
   */
  ThroughputPerformance?: number
  /**
   * 预付费模式，即包年包月相关参数设置。通过该参数指定包年包月云盘的购买时长、是否设置自动续费等属性。<br>创建预付费云盘该参数必传，创建按小时后付费云盘无需传该参数。
   */
  DiskChargePrepaid?: DiskChargePrepaid
  /**
   * 指定云硬盘备份点配额。
   */
  DiskBackupQuota?: number
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
 * 描述了快照的详细信息
 */
export interface Snapshot {
  /**
   * 快照所在的位置。
   */
  Placement?: Placement
  /**
   * 是否为跨地域复制的快照。取值范围：
<ul>
    <li>true：表示为跨地域复制的快照。</li>
    <li>false：本地域的快照。</li>
</ul>
   */
  CopyFromRemote?: boolean
  /**
   * 快照的状态。取值范围：
<ul>
    <li>NORMAL：正常</li>
    <li>CREATING：创建中</li>
    <li>ROLLBACKING：回滚中</li>
    <li>COPYING_FROM_REMOTE：跨地域复制中</li>
    <li>CHECKING_COPIED：复制校验中</li>
    <li>TORECYCLE：待回收</li>
</ul>
   */
  SnapshotState?: string
  /**
   * 是否为永久快照。取值范围：
<ul>
    <li>true：永久快照</li>
    <li>false：非永久快照</li>
</ul>
   */
  IsPermanent?: boolean
  /**
   * 快照名称，用户自定义的快照别名。调用[ModifySnapshotAttribute](/document/product/362/15650)可修改此字段。
   */
  SnapshotName?: string
  /**
   * 快照到期时间。如果快照为永久保留，此字段为空。
   */
  DeadlineTime?: string
  /**
   * 快照创建进度百分比，快照创建成功后此字段恒为100。
   */
  Percent?: number
  /**
   * 快照关联的镜像列表。
   */
  Images?: Array<Image>
  /**
   * 快照当前被共享数。
   */
  ShareReference?: number
  /**
   * 快照类型，目前该项取值可以为PRIVATE_SNAPSHOT或者SHARED_SNAPSHOT
   */
  SnapshotType?: string
  /**
   * 创建此快照的云硬盘大小，单位GB。
   */
  DiskSize?: number
  /**
   * 创建此快照的云硬盘ID。
   */
  DiskId?: string
  /**
   * 快照正在跨地域复制的目的地域，默认取值为[]。
   */
  CopyingToRegions?: Array<string>
  /**
   * 是否为加密盘创建的快照。取值范围：
<ul>
    <li>true：该快照为加密盘创建的</li>
    <li>false：非加密盘创建的快照</li>
</ul>
   */
  Encrypt?: boolean
  /**
   * 快照的创建时间。
   */
  CreateTime?: string
  /**
   * 快照关联的镜像个数。
   */
  ImageCount?: number
  /**
   * 创建此快照的云硬盘类型。取值范围：
<ul>
    <li>SYSTEM_DISK：系统盘</li>
    <li>DATA_DISK：数据盘</li>
</ul>

   */
  DiskUsage?: string
  /**
   * 快照ID。
   */
  SnapshotId?: string
  /**
   * 快照开始共享的时间。
   */
  TimeStartShare?: string
  /**
   * 快照绑定的标签列表。
   */
  Tags?: Array<Tag>
}

/**
 * CreateDisks返回参数结构体
 */
export interface CreateDisksResponse {
  /**
   * 创建的云硬盘ID列表。
注意：此字段可能返回 null，表示取不到有效值。
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
 * CreateDiskBackup请求参数结构体
 */
export interface CreateDiskBackupRequest {
  /**
   * 要创建备份点的云硬盘名称。
   */
  DiskId: string
  /**
   * 云硬盘备份点名称。长度不能超过100个字符。
   */
  DiskBackupName?: string
}

/**
 * DeleteSnapshotGroup请求参数结构体
 */
export interface DeleteSnapshotGroupRequest {
  /**
   * 快照组ID。
   */
  SnapshotGroupId?: string
  /**
   * 快照组ID 列表。此参数与快照组 ID 至少传 1 个，同时传会与快照组 ID 合并。
   */
  SnapshotGroupIds?: Array<string>
  /**
   * 是否同时删除快照组关联的镜像；取值为false，表示不删除快照组绑定的镜像，此时，如果快照组有绑定的镜像，删除会失败；取值为true，表示同时删除快照组绑定的镜像；默认值为false。
   */
  DeleteBindImages?: boolean
}

/**
 * 描述快照组详情
 */
export interface SnapshotGroup {
  /**
   * 快照组ID。
   */
  SnapshotGroupId: string
  /**
   * 快照组类型。NORMAL: 普通快照组，非一致性快照。
   */
  SnapshotGroupType: string
  /**
   * 快照组是否包含系统盘快照。
   */
  ContainRootSnapshot: boolean
  /**
   * 快照组包含的快照ID列表。
   */
  SnapshotIdSet: Array<string>
  /**
   * 快照组状态。<br><li>NORMAL: 正常<br><li>CREATING:创建中<br><li>ROLLBACKING:回滚中
   */
  SnapshotGroupState: string
  /**
   * 快照组创建进度。
   */
  Percent: number
  /**
   * 快照组创建时间。
   */
  CreateTime: string
  /**
   * 快照组最新修改时间
   */
  ModifyTime: string
  /**
   * 快照组关联的镜像列表。
   */
  Images: Array<Image>
  /**
   * 快照组名称。
   */
  SnapshotGroupName: string
  /**
   * 快照组关联的镜像数量。
   */
  ImageCount: number
  /**
   * 快照组是否永久保留
   */
  IsPermanent: boolean
  /**
   * 快照组到期时间。
注意：此字段可能返回 null，表示取不到有效值。
   */
  DeadlineTime: string
}

/**
 * BindAutoSnapshotPolicy返回参数结构体
 */
export interface BindAutoSnapshotPolicyResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 云硬盘备份点。
 */
export interface DiskBackup {
  /**
   * 云硬盘备份点的ID。
   */
  DiskBackupId: string
  /**
   * 云硬盘备份点关联的云硬盘ID。
   */
  DiskId: string
  /**
   * 云硬盘大小，单位GB。
   */
  DiskSize: number
  /**
   * 云硬盘类型。取值范围：<br><li>SYSTEM_DISK：系统盘<br><li>DATA_DISK：数据盘。
   */
  DiskUsage: string
  /**
   * 备份点名称。
   */
  DiskBackupName: string
  /**
   * 云硬盘备份点状态。取值范围：<br><li>NORMAL：正常<br><li>CREATING：创建中<br><li>ROLLBACKING：回滚中
   */
  DiskBackupState: string
  /**
   * 云硬盘创建进度百分比。
   */
  Percent: number
  /**
   * 云硬盘备份点的创建时间。
   */
  CreateTime: string
  /**
   * 云盘是否为加密盘。取值范围：<br><li>false:表示非加密盘<br><li>true:表示加密盘。
   */
  Encrypt: boolean
}

/**
 * DescribeDisks请求参数结构体
 */
export interface DescribeDisksRequest {
  /**
   * 过滤条件。参数不支持同时指定`DiskIds`和`Filters`。<br> <li>disk-usage - Array of String - 是否必填：否 -（过滤条件）按云盘类型过滤。 (SYSTEM_DISK：表示系统盘 | DATA_DISK：表示数据盘)<br></li> <li>disk-charge-type - Array of String - 是否必填：否 -（过滤条件）按照云硬盘计费模式过滤。 (PREPAID：表示预付费，即包年包月 | POSTPAID_BY_HOUR：表示后付费，即按量计费。)<br></li> <li>portable - Array of String - 是否必填：否 -（过滤条件）按是否为弹性云盘过滤。 (TRUE：表示弹性云盘 | FALSE：表示非弹性云盘。)<br></li> <li>project-id - Array of Integer - 是否必填：否 -（过滤条件）按云硬盘所属项目ID过滤。<br></li> <li>disk-id - Array of String - 是否必填：否 -（过滤条件）按照云硬盘ID过滤。云盘ID形如：`disk-11112222`。<br></li> <li>disk-name - Array of String - 是否必填：否 -（过滤条件）按照云盘名称过滤。<br></li> <li>disk-type - Array of String - 是否必填：否 -（过滤条件）按照云盘介质类型过滤。(CLOUD_BASIC：表示普通云硬盘 | CLOUD_PREMIUM：表示高性能云硬盘。| CLOUD_SSD：表示SSD云硬盘 | CLOUD_HSSD：表示增强型SSD云硬盘。| CLOUD_TSSD：表示极速型云硬盘。)<br></li> <li>disk-state - Array of String - 是否必填：否 -（过滤条件）按照云盘状态过滤。(UNATTACHED：未挂载 | ATTACHING：挂载中 | ATTACHED：已挂载 | DETACHING：解挂中 | EXPANDING：扩容中 | ROLLBACKING：回滚中 | TORECYCLE：待回收。)<br></li> <li>instance-id - Array of String - 是否必填：否 -（过滤条件）按照云盘挂载的云主机实例ID过滤。可根据此参数查询挂载在指定云主机下的云硬盘。<br></li> <li>zone - Array of String - 是否必填：否 -（过滤条件）按照[可用区](/document/product/213/15753#ZoneInfo)过滤。<br></li> <li>instance-ip-address - Array of String - 是否必填：否 -（过滤条件）按云盘所挂载云主机的内网或外网IP过滤。<br></li> <li>instance-name - Array of String - 是否必填：否 -（过滤条件）按云盘所挂载的实例名称过滤。<br></li> <li>tag-key - Array of String - 是否必填：否 -（过滤条件）按照标签键进行过滤。<br></li> <li>tag-value - Array of String - 是否必填：否 -（过滤条件）照标签值进行过滤。<br></li> <li>tag:tag-key - Array of String - 是否必填：否 -（过滤条件）按照标签键值对进行过滤。 tag-key使用具体的标签键进行替换。<br></li> <li>dedicated-cluster-id - Array of String - 是否必填：否 -（过滤条件）按照 CDC 独享集群 ID 进行过滤。<br></li> <li>cluster-group-id - String - 是否必填：否 -（过滤条件）按照 集群群组 ID 进行过滤。</li>
   */
  Filters?: Array<Filter>
  /**
   * 返回数量，默认为20，最大值为100。关于`Limit`的更进一步介绍请参考 API [简介](/document/product/362/15633)中的相关小节。
   */
  Limit?: number
  /**
   * 云盘列表排序的依据字段。取值范围：<br><li>CREATE_TIME：依据云盘的创建时间排序<br></li><li>DEADLINE：依据云盘的到期时间排序<br>默认按云盘创建时间排序。</li>
   */
  OrderField?: string
  /**
   * 偏移量，默认为0。关于`Offset`的更进一步介绍请参考API[简介](/document/product/362/15633)中的相关小节。
   */
  Offset?: number
  /**
   * 云盘详情中是否需要返回云盘绑定的定期快照策略ID，TRUE表示需要返回，FALSE表示不返回。
   */
  ReturnBindAutoSnapshotPolicy?: boolean
  /**
   * 按照一个或者多个云硬盘ID查询。云硬盘ID形如：`disk-11112222`，此参数的具体格式可参考API[简介](/document/product/362/15633)的ids.N一节）。参数不支持同时指定`DiskIds`和`Filters`。
   */
  DiskIds?: Array<string>
  /**
   * 输出云盘列表的排列顺序。取值范围：<br><li>ASC：升序排列<br></li><li>DESC：降序排列。</li>
   */
  Order?: string
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
 * InquiryPriceRenewDisks返回参数结构体
 */
export interface InquiryPriceRenewDisksResponse {
  /**
   * 描述了续费云盘的价格。
   */
  DiskPrice: PrepayPrice
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 快照分享信息集合
 */
export interface SharePermission {
  /**
   * 快照分享的时间
   */
  CreatedTime?: string
  /**
   * 分享的账号Id
   */
  AccountId?: string
}

/**
 * DescribeDiskStoragePool返回参数结构体
 */
export interface DescribeDiskStoragePoolResponse {
  /**
   * 符合条件的独享集群的数量
   */
  TotalCount?: number
  /**
   * 独享集群的详细信息列表
   */
  CdcSet?: Array<Cdc>
  /**
   * 独享集群的详细信息列表
   */
  DiskStoragePoolSet?: Array<Cdc>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 描述了定期快照的执行策略。可理解为在DayOfWeek/DayOfMonth指定的几天中，或者是IntervalDays设定的间隔的几天，在Hour指定的时刻点执行该条定期快照策。注：DayOfWeek/DayOfMonth/IntervalDays为互斥规则，仅可设置其中一条策略规则。
 */
export interface Policy {
  /**
   * 指定定期快照策略的触发时间。单位为小时，取值范围：[0, 23]。00:00 ~ 23:00 共 24 个时间点可选，1表示 01:00，依此类推。
   */
  Hour: Array<number | bigint>
  /**
   * 指定每周从周一到周日需要触发定期快照的日期，取值范围：[0, 6]。0表示周日触发，1-6分别表示周一至周六。
   */
  DayOfWeek?: Array<number | bigint>
  /**
   * 指定每月从月初到月底需要触发定期快照的日期,取值范围：[1, 31]，1-31分别表示每月的具体日期，比如5表示每月的5号。注：若设置29、30、31等部分月份不存在的日期，则对应不存在日期的月份会跳过不打定期快照。
   */
  DayOfMonth?: Array<number | bigint>
  /**
   * 指定创建定期快照的间隔天数，取值范围：[1, 365]，例如设置为5，则间隔5天即触发定期快照创建。注：当选择按天备份时，理论上第一次备份的时间为备份策略创建当天。如果当天备份策略创建的时间已经晚于设置的备份时间，那么将会等到第二个备份周期再进行第一次备份。
   */
  IntervalDays?: number
}

/**
 * ModifyDiskExtraPerformance返回参数结构体
 */
export interface ModifyDiskExtraPerformanceResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * InquirePriceModifyDiskExtraPerformance请求参数结构体
 */
export interface InquirePriceModifyDiskExtraPerformanceRequest {
  /**
   * 额外购买的云硬盘性能值，单位MB/s。
   */
  ThroughputPerformance: number
  /**
   * 云硬盘ID， 通过[DescribeDisks](/document/product/362/16315)接口查询。
   */
  DiskId: string
}

/**
 * InquiryPriceResizeDisk请求参数结构体
 */
export interface InquiryPriceResizeDiskRequest {
  /**
   * 云硬盘扩容后的大小，单位为GB，不得小于当前云硬盘大小。云盘大小取值范围参见云硬盘[产品分类](/document/product/362/2353)的说明。
   */
  DiskSize: number
  /**
   * 云硬盘ID， 通过[DescribeDisks](/document/product/362/16315)接口查询。
   */
  DiskId: string
  /**
   * 云盘所属项目ID。 如传入则仅用于鉴权。
   */
  ProjectId?: number
}

/**
 * DescribeDiskConfigQuota请求参数结构体
 */
export interface DescribeDiskConfigQuotaRequest {
  /**
   * 查询类别，取值范围。<br><li>INQUIRY_CBS_CONFIG：查询云盘配置列表<br><li>INQUIRY_CVM_CONFIG：查询云盘与实例搭配的配置列表。
   */
  InquiryType: string
  /**
   * 付费模式。取值范围：<br><li>PREPAID：预付费<br><li>POSTPAID_BY_HOUR：后付费。
   */
  DiskChargeType?: string
  /**
   * 按照实例机型系列过滤。实例机型系列形如：S1、I1、M1等。详见[实例类型](https://cloud.tencent.com/document/product/213/11518)
   */
  InstanceFamilies?: Array<string>
  /**
   * 硬盘介质类型。取值范围：<br><li>CLOUD_BASIC：表示普通云硬盘<br><li>CLOUD_PREMIUM：表示高性能云硬盘<br><li>CLOUD_SSD：表示SSD云硬盘<br><li>CLOUD_HSSD：表示增强型SSD云硬盘。
   */
  DiskTypes?: Array<string>
  /**
   * 查询一个或多个[可用区](/document/product/213/15753#ZoneInfo)下的配置。
   */
  Zones?: Array<string>
  /**
   * 实例内存大小。
   */
  Memory?: number
  /**
   * 系统盘或数据盘。取值范围：<br><li>SYSTEM_DISK：表示系统盘<br><li>DATA_DISK：表示数据盘。
   */
  DiskUsage?: string
  /**
   * 实例CPU核数。
   */
  CPU?: number
  /**
   * 专用集群ID。
   */
  DedicatedClusterId?: string
}

/**
 * DescribeDiskAssociatedAutoSnapshotPolicy返回参数结构体
 */
export interface DescribeDiskAssociatedAutoSnapshotPolicyResponse {
  /**
   * 云盘绑定的定期快照数量。
   */
  TotalCount?: number
  /**
   * 云盘绑定的定期快照列表。
   */
  AutoSnapshotPolicySet?: Array<AutoSnapshotPolicy>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ApplySnapshotGroup请求参数结构体
 */
export interface ApplySnapshotGroupRequest {
  /**
   * 回滚的快照组ID。
   */
  SnapshotGroupId: string
  /**
   * 回滚的快照组关联的快照ID，及快照对应的原云硬盘ID列表。
   */
  ApplyDisks: Array<ApplyDisk>
  /**
   * 回滚前是否执行自动关机。
   */
  AutoStopInstance?: boolean
  /**
   * 回滚完成后是否自动开机。
   */
  AutoStartInstance?: boolean
}

/**
 * GetSnapOverview返回参数结构体
 */
export interface GetSnapOverviewResponse {
  /**
   * 用户快照总大小
   */
  TotalSize?: number
  /**
   * 用户快照总大小（用于计费）
   */
  RealTradeSize?: number
  /**
   * 快照免费额度
   */
  FreeQuota?: number
  /**
   * 快照总个数
   */
  TotalNums?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 描述了新购云硬盘时自动将云硬盘初始化并挂载至云服务器内部的配置。
 */
export interface AutoMountConfiguration {
  /**
   * 要挂载到的实例ID。
   */
  InstanceId: Array<string>
  /**
   * 子机内的挂载点。
   */
  MountPoint?: Array<string>
  /**
   * 文件系统类型，支持的有 ext4、xfs。
   */
  FileSystemType?: string
}

/**
 * CopySnapshotCrossRegions请求参数结构体
 */
export interface CopySnapshotCrossRegionsRequest {
  /**
   * 快照需要复制到的目标地域，各地域的标准取值可通过接口[DescribeRegions](https://cloud.tencent.com/document/product/213/9456)查询，且只能传入支持快照的地域。
   */
  DestinationRegions: Array<string>
  /**
   * 需要跨地域复制的源快照ID，可通过[DescribeSnapshots](/document/product/362/15647)查询。
   */
  SnapshotId?: string
  /**
   * 新复制快照的名称，如果不传，则默认取值为“Copied 源快照ID from 地域名”。
   */
  SnapshotName?: string
}

/**
 * 预付费订单的费用。
 */
export interface PrepayPrice {
  /**
   * 预付费云盘或快照预支费用的折扣价，单位：元。
注意：此字段可能返回 null，表示取不到有效值。
   */
  DiscountPrice?: number
  /**
   * 后付费云盘的计价单元，取值范围：<br><li>HOUR：表示后付费云盘的计价单元是按小时计算。</li>
注意：此字段可能返回 null，表示取不到有效值。
   */
  ChargeUnit?: string
  /**
   * 高精度后付费云盘原单价, 单位：元
注意：此字段可能返回 null，表示取不到有效值。
   */
  UnitPriceHigh?: string
  /**
   * 高精度预付费云盘或快照预支费用的原价，单位：元
注意：此字段可能返回 null，表示取不到有效值。
   */
  OriginalPriceHigh?: string
  /**
   * 预付费云盘或快照预支费用的原价，单位：元。
注意：此字段可能返回 null，表示取不到有效值。
   */
  OriginalPrice?: number
  /**
   * 后付费云盘折扣单价，单位：元。
注意：此字段可能返回 null，表示取不到有效值。
   */
  UnitPriceDiscount?: number
  /**
   * 高精度后付费云盘折扣单价, 单位：元
注意：此字段可能返回 null，表示取不到有效值。
   */
  UnitPriceDiscountHigh?: string
  /**
   * 高精度预付费云盘或快照预支费用的折扣价，单位：元
注意：此字段可能返回 null，表示取不到有效值。
   */
  DiscountPriceHigh?: string
  /**
   * 后付费云盘原单价，单位：元。
注意：此字段可能返回 null，表示取不到有效值。
   */
  UnitPrice?: number
  /**
   * 计费项目明细列表。
注意：此字段可能返回 null，表示取不到有效值。
   */
  DetailPrices?: Array<DetailPrice>
}

/**
 * RenewDisk返回参数结构体
 */
export interface RenewDiskResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeAutoSnapshotPolicies返回参数结构体
 */
export interface DescribeAutoSnapshotPoliciesResponse {
  /**
   * 有效的定期快照策略数量。
   */
  TotalCount?: number
  /**
   * 定期快照策略列表。
   */
  AutoSnapshotPolicySet?: Array<AutoSnapshotPolicy>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 描述独享集群的详细信息。
 */
export interface Cdc {
  /**
   * 独享集群围笼ID。
注意：此字段可能返回 null，表示取不到有效值。
   */
  CageId?: string
  /**
   * 独享集群状态。取值范围：<br><li>NORMAL：正常；</li><br><li>CLOSED：关闭，此时将不可使用该独享集群创建新的云硬盘；</li><br><li>FAULT：独享集群状态异常，此时独享集群将不可操作，腾讯云运维团队将会及时修复该集群；</li><br><li>ISOLATED：因未及时续费导致独享集群被隔离，此时将不可使用该独享集群创建新的云硬盘，对应的云硬盘也将不可操作。</li>
   */
  CdcState?: string
  /**
   * 独享集群所属的[可用区](/document/product/213/15753#ZoneInfo)ID。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Zone?: string
  /**
   * 独享集群实例名称。
   */
  CdcName?: string
  /**
   * 独享集群的资源容量大小。
注意：此字段可能返回 null，表示取不到有效值。
   */
  CdcResource?: CdcSize
  /**
   * 独享集群实例id。
   */
  CdcId?: string
  /**
   * 独享集群类型。取值范围：<br><li>CLOUD_BASIC：表示普通云硬盘集群</li><br><li>CLOUD_PREMIUM：表示高性能云硬盘集群</li><br><li>CLOUD_SSD：SSD表示SSD云硬盘集群。</li>
   */
  DiskType?: string
  /**
   * 独享集群到期时间。
   */
  ExpiredTime?: string
  /**
   * 存储池创建时间。
   */
  CreatedTime?: string
  /**
   * 当前集群中已创建的云盘数量。
   */
  DiskNumber?: number
}

/**
 * 本参数用于快照组回滚接口的入参，表示回滚的云盘、快照列表。
 */
export interface ApplyDisk {
  /**
   * 快照组关联的快照ID。
   */
  SnapshotId: string
  /**
   * 快照组关联快照对应的原云硬盘ID。
   */
  DiskId: string
}

/**
 * UnbindAutoSnapshotPolicy返回参数结构体
 */
export interface UnbindAutoSnapshotPolicyResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 描述一个实例已挂载和可挂载数据盘的数量。
 */
export interface AttachDetail {
  /**
   * 实例ID。
   */
  InstanceId: string
  /**
   * 实例已挂载数据盘的数量。
   */
  AttachedDiskCount: number
  /**
   * 实例最大可挂载数据盘的数量。
   */
  MaxAttachCount: number
}

/**
 * CreateAutoSnapshotPolicy请求参数结构体
 */
export interface CreateAutoSnapshotPolicyRequest {
  /**
   * 定期快照的执行策略。
   */
  Policy: Array<Policy>
  /**
   * 是否创建定期快照的执行策略。TRUE表示只需获取首次开始备份的时间，不实际创建定期快照策略，FALSE表示创建，默认为FALSE。
   */
  DryRun?: boolean
  /**
   * 是否激活定期快照策略，FALSE表示未激活，TRUE表示激活，默认为TRUE。
   */
  IsActivated?: boolean
  /**
   * 要创建的定期快照策略名。不传则默认为“未命名”。最大长度不能超60个字节。
   */
  AutoSnapshotPolicyName?: string
  /**
   * 通过该定期快照策略创建的快照是否永久保留。FALSE表示非永久保留，TRUE表示永久保留，默认为FALSE。
   */
  IsPermanent?: boolean
  /**
   * 通过该定期快照策略创建的快照保留天数，默认保留7天。如果指定本参数，则IsPermanent入参不可指定为TRUE，否则会产生冲突。
   */
  RetentionDays?: number
}

/**
 * CreateSnapshotGroup返回参数结构体
 */
export interface CreateSnapshotGroupResponse {
  /**
   * 创建成功的快照组ID。
   */
  SnapshotGroupId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 描述预付费或后付费云盘的价格。
 */
export interface Price {
  /**
   * 后付费云盘折扣单价，单位：元。
注意：此字段可能返回 null，表示取不到有效值。
   */
  UnitPriceDiscount?: number
  /**
   * 预付费云盘预支费用的折扣价，单位：元。
注意：此字段可能返回 null，表示取不到有效值。
   */
  DiscountPrice?: number
  /**
   * 后付费云盘原单价，单位：元。
注意：此字段可能返回 null，表示取不到有效值。
   */
  UnitPrice?: number
  /**
   * 高精度后付费云盘原单价, 单位：元
注意：此字段可能返回 null，表示取不到有效值。
   */
  UnitPriceHigh?: string
  /**
   * 高精度预付费云盘预支费用的原价, 单位：元	。
注意：此字段可能返回 null，表示取不到有效值。
   */
  OriginalPriceHigh?: string
  /**
   * 预付费云盘预支费用的原价，单位：元。
注意：此字段可能返回 null，表示取不到有效值。
   */
  OriginalPrice?: number
  /**
   * 高精度预付费云盘预支费用的折扣价, 单位：元
注意：此字段可能返回 null，表示取不到有效值。
   */
  DiscountPriceHigh?: string
  /**
   * 高精度后付费云盘折扣单价, 单位：元
注意：此字段可能返回 null，表示取不到有效值。
   */
  UnitPriceDiscountHigh?: string
  /**
   * 后付费云盘的计价单元，取值范围：<br><li>HOUR：表示后付费云盘的计价单元是按小时计算。</li>
注意：此字段可能返回 null，表示取不到有效值。
   */
  ChargeUnit?: string
}

/**
 * ApplySnapshot请求参数结构体
 */
export interface ApplySnapshotRequest {
  /**
   * 快照ID, 可通过[DescribeSnapshots](/document/product/362/15647)查询。
   */
  SnapshotId: string
  /**
   * 快照原云硬盘ID，可通过[DescribeDisks](/document/product/362/16315)接口查询。
   */
  DiskId: string
  /**
   * 回滚前是否执行自动关机
   */
  AutoStopInstance?: boolean
  /**
   * 回滚完成后是否自动开机
   */
  AutoStartInstance?: boolean
}
