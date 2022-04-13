/* eslint-disable @typescript-eslint/no-unused-vars */
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
import { AbstractClient } from "../../../common/abstract_client"
import { ClientConfig } from "../../../common/interface"
import {
  ModifyDiskExtraPerformanceRequest,
  ModifyDiskAttributesResponse,
  AutoSnapshotPolicy,
  DescribeSnapshotOperationLogsRequest,
  CopySnapshotCrossRegionsResponse,
  ModifyAutoSnapshotPolicyAttributeResponse,
  InquiryPriceCreateDisksResponse,
  BindAutoSnapshotPolicyRequest,
  CreateSnapshotResponse,
  DescribeAutoSnapshotPoliciesRequest,
  ModifySnapshotsSharePermissionResponse,
  InitializeDisksResponse,
  DescribeDiskStoragePoolRequest,
  SnapshotOperationLog,
  SnapshotCopyResult,
  RenewDiskRequest,
  InquirePriceModifyDiskExtraPerformanceResponse,
  CreateDisksRequest,
  AttachDisksRequest,
  DescribeDiskAssociatedAutoSnapshotPolicyRequest,
  DescribeSnapshotsRequest,
  ModifyAutoSnapshotPolicyAttributeRequest,
  DescribeDiskConfigQuotaResponse,
  InquiryPriceResizeDiskResponse,
  Tag,
  ResizeDiskResponse,
  Disk,
  TerminateDisksResponse,
  ApplySnapshotResponse,
  DetachDisksRequest,
  ModifyDisksChargeTypeResponse,
  CreateSnapshotRequest,
  DescribeInstancesDiskNumRequest,
  DescribeSnapshotSharePermissionResponse,
  CopySnapshotCrossRegionsRequest,
  InquiryPriceRenewDisksRequest,
  DescribeSnapshotSharePermissionRequest,
  DescribeSnapshotOperationLogsResponse,
  DeleteSnapshotsRequest,
  ModifyDisksRenewFlagResponse,
  DeleteAutoSnapshotPoliciesResponse,
  DescribeDisksResponse,
  Placement,
  DeleteSnapshotsResponse,
  ModifyDisksRenewFlagRequest,
  ModifyDiskAttributesRequest,
  GetSnapOverviewRequest,
  Image,
  TerminateDisksRequest,
  CdcSize,
  DescribeInstancesDiskNumResponse,
  DescribeDiskOperationLogsResponse,
  ResizeDiskRequest,
  ModifyDisksChargeTypeRequest,
  InitializeDisksRequest,
  CreateAutoSnapshotPolicyResponse,
  ModifySnapshotAttributeRequest,
  UnbindAutoSnapshotPolicyRequest,
  DiskConfig,
  DeleteAutoSnapshotPoliciesRequest,
  DiskChargePrepaid,
  Filter,
  InquiryPriceCreateDisksRequest,
  DescribeSnapshotsResponse,
  Snapshot,
  CreateDisksResponse,
  AttachDisksResponse,
  ModifySnapshotsSharePermissionRequest,
  DiskOperationLog,
  BindAutoSnapshotPolicyResponse,
  DescribeDiskOperationLogsRequest,
  DescribeDisksRequest,
  DetachDisksResponse,
  InquiryPriceRenewDisksResponse,
  SharePermission,
  DescribeDiskStoragePoolResponse,
  Policy,
  Price,
  InquirePriceModifyDiskExtraPerformanceRequest,
  InquiryPriceResizeDiskRequest,
  DescribeDiskConfigQuotaRequest,
  DescribeDiskAssociatedAutoSnapshotPolicyResponse,
  GetSnapOverviewResponse,
  AutoMountConfiguration,
  ModifySnapshotAttributeResponse,
  PrepayPrice,
  RenewDiskResponse,
  DescribeAutoSnapshotPoliciesResponse,
  Cdc,
  UnbindAutoSnapshotPolicyResponse,
  AttachDetail,
  CreateAutoSnapshotPolicyRequest,
  ModifyDiskExtraPerformanceResponse,
  ApplySnapshotRequest,
} from "./cbs_models"

/**
 * cbs client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("cbs.tencentcloudapi.com", "2017-03-12", clientConfig)
  }

  /**
     * 本接口（ModifyDiskExtraPerformance）用于调整云硬盘额外的性能。

* 目前仅支持极速型SSD云硬盘（CLOUD_TSSD）和高性能SSD云硬盘(CLOUD_HSSD)。
     */
  async ModifyDiskExtraPerformance(
    req: ModifyDiskExtraPerformanceRequest,
    cb?: (error: string, rep: ModifyDiskExtraPerformanceResponse) => void
  ): Promise<ModifyDiskExtraPerformanceResponse> {
    return this.request("ModifyDiskExtraPerformance", req, cb)
  }

  /**
     * 本接口（RenewDisk）用于续费云硬盘。

* 只支持预付费的云硬盘。云硬盘类型可以通过[DescribeDisks](/document/product/362/16315)接口查询，见输出参数中DiskChargeType字段解释。
* 支持与挂载实例一起续费的场景，需要在[DiskChargePrepaid](/document/product/362/15669#DiskChargePrepaid)参数中指定CurInstanceDeadline，此时会按对齐到子机续费后的到期时间来续费。
     */
  async RenewDisk(
    req: RenewDiskRequest,
    cb?: (error: string, rep: RenewDiskResponse) => void
  ): Promise<RenewDiskResponse> {
    return this.request("RenewDisk", req, cb)
  }

  /**
     * 本接口（CopySnapshotCrossRegions）用于快照跨地域复制。

* 本接口为异步接口，当跨地域复制的请求下发成功后会返回一个新的快照ID，此时快照未立即复制到目标地域，可请求目标地域的[DescribeSnapshots](/document/product/362/15647)接口查询新快照的状态，判断是否复制完成。如果快照的状态为“NORMAL”，表示快照复制完成。
* 本接口实现的快照跨地域复制操作将产生跨地域流量，预计2022年第三季度会针对此功能进行商业化计费；请留意后续站内信公告，避免产生预期外扣费。
     */
  async CopySnapshotCrossRegions(
    req: CopySnapshotCrossRegionsRequest,
    cb?: (error: string, rep: CopySnapshotCrossRegionsResponse) => void
  ): Promise<CopySnapshotCrossRegionsResponse> {
    return this.request("CopySnapshotCrossRegions", req, cb)
  }

  /**
     * 本接口（DescribeInstancesDiskNum）用于查询实例已挂载云硬盘数量。

* 支持批量操作，当传入多个云服务器实例ID，返回结果会分别列出每个云服务器挂载的云硬盘数量。
     */
  async DescribeInstancesDiskNum(
    req: DescribeInstancesDiskNumRequest,
    cb?: (error: string, rep: DescribeInstancesDiskNumResponse) => void
  ): Promise<DescribeInstancesDiskNumResponse> {
    return this.request("DescribeInstancesDiskNum", req, cb)
  }

  /**
     * 本接口（InquiryPriceResizeDisk）用于扩容云硬盘询价。

* 只支持预付费模式的云硬盘扩容询价。
     */
  async InquiryPriceResizeDisk(
    req: InquiryPriceResizeDiskRequest,
    cb?: (error: string, rep: InquiryPriceResizeDiskResponse) => void
  ): Promise<InquiryPriceResizeDiskResponse> {
    return this.request("InquiryPriceResizeDisk", req, cb)
  }

  /**
   * 本接口（InquirePriceModifyDiskExtraPerformance）用于调整云硬盘额外性能询价。
   */
  async InquirePriceModifyDiskExtraPerformance(
    req: InquirePriceModifyDiskExtraPerformanceRequest,
    cb?: (error: string, rep: InquirePriceModifyDiskExtraPerformanceResponse) => void
  ): Promise<InquirePriceModifyDiskExtraPerformanceResponse> {
    return this.request("InquirePriceModifyDiskExtraPerformance", req, cb)
  }

  /**
     * 本接口（DescribeAutoSnapshotPolicies）用于查询定期快照策略。

* 可以根据定期快照策略ID、名称或者状态等信息来查询定期快照策略的详细信息，不同条件之间为与(AND)的关系，过滤信息详细请见过滤器`Filter`。
* 如果参数为空，返回当前用户一定数量（`Limit`所指定的数量，默认为20）的定期快照策略表。

     */
  async DescribeAutoSnapshotPolicies(
    req: DescribeAutoSnapshotPoliciesRequest,
    cb?: (error: string, rep: DescribeAutoSnapshotPoliciesResponse) => void
  ): Promise<DescribeAutoSnapshotPoliciesResponse> {
    return this.request("DescribeAutoSnapshotPolicies", req, cb)
  }

  /**
     * 本接口（AttachDisks）用于挂载云硬盘。
 
* 支持批量操作，将多块云盘挂载到同一云主机。如果多个云盘中存在不允许挂载的云盘，则操作不执行，返回特定的错误码。
* 本接口为异步接口，当挂载云盘的请求成功返回时，表示后台已发起挂载云盘的操作，可通过接口[DescribeDisks](/document/product/362/16315)来查询对应云盘的状态，如果云盘的状态由“ATTACHING”变为“ATTACHED”，则为挂载成功。
     */
  async AttachDisks(
    req: AttachDisksRequest,
    cb?: (error: string, rep: AttachDisksResponse) => void
  ): Promise<AttachDisksResponse> {
    return this.request("AttachDisks", req, cb)
  }

  /**
   * 本接口（ModifyDisksRenewFlag）用于修改云硬盘续费标识，支持批量修改。
   */
  async ModifyDisksRenewFlag(
    req: ModifyDisksRenewFlagRequest,
    cb?: (error: string, rep: ModifyDisksRenewFlagResponse) => void
  ): Promise<ModifyDisksRenewFlagResponse> {
    return this.request("ModifyDisksRenewFlag", req, cb)
  }

  /**
     * 本接口（ModifyAutoSnapshotPolicyAttribute）用于修改定期快照策略属性。

* 可通过该接口修改定期快照策略的执行策略、名称、是否激活等属性。
* 修改保留天数时必须保证不与是否永久保留属性冲突，否则整个操作失败，以特定的错误码返回。
     */
  async ModifyAutoSnapshotPolicyAttribute(
    req: ModifyAutoSnapshotPolicyAttributeRequest,
    cb?: (error: string, rep: ModifyAutoSnapshotPolicyAttributeResponse) => void
  ): Promise<ModifyAutoSnapshotPolicyAttributeResponse> {
    return this.request("ModifyAutoSnapshotPolicyAttribute", req, cb)
  }

  /**
     * 本接口（InquiryPriceCreateDisks）用于创建云硬盘询价。

* 支持查询创建多块云硬盘的价格，此时返回结果为总价格。
     */
  async InquiryPriceCreateDisks(
    req: InquiryPriceCreateDisksRequest,
    cb?: (error: string, rep: InquiryPriceCreateDisksResponse) => void
  ): Promise<InquiryPriceCreateDisksResponse> {
    return this.request("InquiryPriceCreateDisks", req, cb)
  }

  /**
   * 查询云盘操作日志功能已迁移至LookUpEvents接口（https://cloud.tencent.com/document/product/629/12359），本接口（DescribeDiskOperationLogs）即将下线，后续不再提供调用，请知悉。
   */
  async DescribeDiskOperationLogs(
    req: DescribeDiskOperationLogsRequest,
    cb?: (error: string, rep: DescribeDiskOperationLogsResponse) => void
  ): Promise<DescribeDiskOperationLogsResponse> {
    return this.request("DescribeDiskOperationLogs", req, cb)
  }

  /**
     * 本接口（DeleteAutoSnapshotPolicies）用于删除定期快照策略。

*  支持批量操作。如果多个定期快照策略存在无法删除的，则操作不执行，以特定错误码返回。
     */
  async DeleteAutoSnapshotPolicies(
    req: DeleteAutoSnapshotPoliciesRequest,
    cb?: (error: string, rep: DeleteAutoSnapshotPoliciesResponse) => void
  ): Promise<DeleteAutoSnapshotPoliciesResponse> {
    return this.request("DeleteAutoSnapshotPolicies", req, cb)
  }

  /**
     * 本接口（CreateAutoSnapshotPolicy）用于创建定期快照策略。

* 每个地域可创建的定期快照策略数量限制请参考文档[定期快照](/document/product/362/8191)。
* 每个地域可创建的快照有数量和容量的限制，具体请见腾讯云控制台快照页面提示，如果快照超配额，定期快照创建会失败。
     */
  async CreateAutoSnapshotPolicy(
    req: CreateAutoSnapshotPolicyRequest,
    cb?: (error: string, rep: CreateAutoSnapshotPolicyResponse) => void
  ): Promise<CreateAutoSnapshotPolicyResponse> {
    return this.request("CreateAutoSnapshotPolicy", req, cb)
  }

  /**
     * 本接口（DescribeDisks）用于查询云硬盘列表。

* 可以根据云硬盘ID、云硬盘类型或者云硬盘状态等信息来查询云硬盘的详细信息，不同条件之间为与(AND)的关系，过滤信息详细请见过滤器`Filter`。
* 如果参数为空，返回当前用户一定数量（`Limit`所指定的数量，默认为20）的云硬盘列表。
     */
  async DescribeDisks(
    req: DescribeDisksRequest,
    cb?: (error: string, rep: DescribeDisksResponse) => void
  ): Promise<DescribeDisksResponse> {
    return this.request("DescribeDisks", req, cb)
  }

  /**
     * 本接口（CreateDisks）用于创建云硬盘。

* 预付费云盘的购买会预先扣除本次云盘购买所需金额，在调用本接口前请确保账户余额充足。
* 本接口支持传入数据盘快照来创建云盘，实现将快照数据复制到新购云盘上。
* 本接口为异步接口，当创建请求下发成功后会返回一个新建的云盘ID列表，此时云盘的创建并未立即完成。可以通过调用[DescribeDisks](/document/product/362/16315)接口根据DiskId查询对应云盘，如果能查到云盘，且状态为'UNATTACHED'或'ATTACHED'，则表示创建成功。
     */
  async CreateDisks(
    req: CreateDisksRequest,
    cb?: (error: string, rep: CreateDisksResponse) => void
  ): Promise<CreateDisksResponse> {
    return this.request("CreateDisks", req, cb)
  }

  /**
   * * 只支持修改弹性云盘的项目ID。随云主机创建的云硬盘项目ID与云主机联动。可以通过[DescribeDisks](/document/product/362/16315)接口查询，见输出参数中Portable字段解释。
   * “云硬盘名称”仅为方便用户自己管理之用，腾讯云并不以此名称作为提交工单或是进行云盘管理操作的依据。
   * 支持批量操作，如果传入多个云盘ID，则所有云盘修改为同一属性。如果存在不允许操作的云盘，则操作不执行，以特定错误码返回。
   */
  async ModifyDiskAttributes(
    req: ModifyDiskAttributesRequest,
    cb?: (error: string, rep: ModifyDiskAttributesResponse) => void
  ): Promise<ModifyDiskAttributesResponse> {
    return this.request("ModifyDiskAttributes", req, cb)
  }

  /**
     * 本接口（DeleteSnapshots）用于删除快照。

* 快照必须处于NORMAL状态，快照状态可以通过[DescribeSnapshots](/document/product/362/15647)接口查询，见输出参数中SnapshotState字段解释。
* 支持批量操作。如果多个快照存在无法删除的快照，则操作不执行，以特定的错误码返回。
     */
  async DeleteSnapshots(
    req: DeleteSnapshotsRequest,
    cb?: (error: string, rep: DeleteSnapshotsResponse) => void
  ): Promise<DeleteSnapshotsResponse> {
    return this.request("DeleteSnapshots", req, cb)
  }

  /**
     * 本接口（ModifySnapshotAttribute）用于修改指定快照的属性。

* 当前仅支持修改快照名称及将非永久快照修改为永久快照。
* “快照名称”仅为方便用户自己管理之用，腾讯云并不以此名称作为提交工单或是进行快照管理操作的依据。
     */
  async ModifySnapshotAttribute(
    req: ModifySnapshotAttributeRequest,
    cb?: (error: string, rep: ModifySnapshotAttributeResponse) => void
  ): Promise<ModifySnapshotAttributeResponse> {
    return this.request("ModifySnapshotAttribute", req, cb)
  }

  /**
   * 本接口（DescribeDiskAssociatedAutoSnapshotPolicy）用于查询云盘绑定的定期快照策略。
   */
  async DescribeDiskAssociatedAutoSnapshotPolicy(
    req: DescribeDiskAssociatedAutoSnapshotPolicyRequest,
    cb?: (error: string, rep: DescribeDiskAssociatedAutoSnapshotPolicyResponse) => void
  ): Promise<DescribeDiskAssociatedAutoSnapshotPolicyResponse> {
    return this.request("DescribeDiskAssociatedAutoSnapshotPolicy", req, cb)
  }

  /**
     * 本接口（BindAutoSnapshotPolicy）用于绑定云硬盘到指定的定期快照策略。

* 每个地域下的定期快照策略配额限制请参考文档[定期快照](/document/product/362/8191)。
* 当已绑定定期快照策略的云硬盘处于未使用状态（即弹性云盘未挂载或非弹性云盘的主机处于关机状态）将不会创建定期快照。
     */
  async BindAutoSnapshotPolicy(
    req: BindAutoSnapshotPolicyRequest,
    cb?: (error: string, rep: BindAutoSnapshotPolicyResponse) => void
  ): Promise<BindAutoSnapshotPolicyResponse> {
    return this.request("BindAutoSnapshotPolicy", req, cb)
  }

  /**
     * 本接口（DescribeSnapshots）用于查询快照的详细信息。

* 根据快照ID、创建快照的云硬盘ID、创建快照的云硬盘类型等对结果进行过滤，不同条件之间为与(AND)的关系，过滤信息详细请见过滤器`Filter`。
*  如果参数为空，返回当前用户一定数量（`Limit`所指定的数量，默认为20）的快照列表。
     */
  async DescribeSnapshots(
    req: DescribeSnapshotsRequest,
    cb?: (error: string, rep: DescribeSnapshotsResponse) => void
  ): Promise<DescribeSnapshotsResponse> {
    return this.request("DescribeSnapshots", req, cb)
  }

  /**
   * 本接口（DescribeSnapshotSharePermission）用于查询快照的分享信息。
   */
  async DescribeSnapshotSharePermission(
    req: DescribeSnapshotSharePermissionRequest,
    cb?: (error: string, rep: DescribeSnapshotSharePermissionResponse) => void
  ): Promise<DescribeSnapshotSharePermissionResponse> {
    return this.request("DescribeSnapshotSharePermission", req, cb)
  }

  /**
     * 重新初始化云硬盘至云硬盘初始创建时的状态。使用云硬盘的重新初始化功能时需要注意以下4点：
1. 如果云硬盘是由快照创建的，则重新初始化会通过此快照重新回滚此云硬盘，即将云硬盘恢复为与快照一致的状态；
2. 如果云硬盘不是通过快照创建的，则重新初始化会清空此云硬盘的数据；请在重新初始化云硬盘前检查并备份必要的数据；
3. 当前仅未挂载的、非共享属性的数据盘云硬盘支持重新初始化；
4. 当创建此云硬盘的原始快照被删除时，不再支持重新初始化此云硬盘。
     */
  async InitializeDisks(
    req: InitializeDisksRequest,
    cb?: (error: string, rep: InitializeDisksResponse) => void
  ): Promise<InitializeDisksResponse> {
    return this.request("InitializeDisks", req, cb)
  }

  /**
     * 接口请求域名： cbs.tencentcloudapi.com 。

本接口 (ModifyDisksChargeType) 用于切换云盘的计费模式。

只支持从 POSTPAID_BY_HOUR 计费模式切换为PREPAID计费模式。
非弹性云盘不支持此接口，请通过修改实例计费模式接口将实例连同非弹性云盘一起转换。
默认接口请求频率限制：10次/秒。

     */
  async ModifyDisksChargeType(
    req: ModifyDisksChargeTypeRequest,
    cb?: (error: string, rep: ModifyDisksChargeTypeResponse) => void
  ): Promise<ModifyDisksChargeTypeResponse> {
    return this.request("ModifyDisksChargeType", req, cb)
  }

  /**
     * 本接口（TerminateDisks）用于退还云硬盘。

* 不再使用的云盘，可通过本接口主动退还。
* 本接口支持退还预付费云盘和按小时后付费云盘。按小时后付费云盘可直接退还，预付费云盘需符合退还规则。
* 支持批量操作，每次请求批量云硬盘的上限为50。如果批量云盘存在不允许操作的，请求会以特定错误码返回。
     */
  async TerminateDisks(
    req: TerminateDisksRequest,
    cb?: (error: string, rep: TerminateDisksResponse) => void
  ): Promise<TerminateDisksResponse> {
    return this.request("TerminateDisks", req, cb)
  }

  /**
   * 本接口（DescribeDiskConfigQuota）用于查询云硬盘配额。
   */
  async DescribeDiskConfigQuota(
    req: DescribeDiskConfigQuotaRequest,
    cb?: (error: string, rep: DescribeDiskConfigQuotaResponse) => void
  ): Promise<DescribeDiskConfigQuotaResponse> {
    return this.request("DescribeDiskConfigQuota", req, cb)
  }

  /**
     * 本接口（UnbindAutoSnapshotPolicy）用于解除云硬盘绑定的定期快照策略。

* 支持批量操作，可一次解除多个云盘与同一定期快照策略的绑定。 
* 如果传入的云盘未绑定到当前定期快照策略，接口将自动跳过，仅解绑与当前定期快照策略绑定的云盘。
     */
  async UnbindAutoSnapshotPolicy(
    req: UnbindAutoSnapshotPolicyRequest,
    cb?: (error: string, rep: UnbindAutoSnapshotPolicyResponse) => void
  ): Promise<UnbindAutoSnapshotPolicyResponse> {
    return this.request("UnbindAutoSnapshotPolicy", req, cb)
  }

  /**
     * 本接口（DescribeDiskStoragePool）查询用户的云硬盘独享集群列表。

* 可以根据独享集群ID(CdcId)、可用区(zone)等信息来查询和过滤云硬盘独享集群详细信息，不同的过滤条件之间为与(AND)的关系，过滤信息详细请见过滤器`Filter`。
* 如果参数为空，返回当前用户一定数量（`Limit`所指定的数量，默认为20）的云硬盘独享集群列表。
     */
  async DescribeDiskStoragePool(
    req: DescribeDiskStoragePoolRequest,
    cb?: (error: string, rep: DescribeDiskStoragePoolResponse) => void
  ): Promise<DescribeDiskStoragePoolResponse> {
    return this.request("DescribeDiskStoragePool", req, cb)
  }

  /**
     * 本接口（ApplySnapshot）用于回滚快照到原云硬盘。

* 仅支持回滚到原云硬盘上。对于数据盘快照，如果您需要复制快照数据到其它云硬盘上，请使用[CreateDisks](/document/product/362/16312)接口创建新的弹性云盘，将快照数据复制到新购云盘上。 
* 用于回滚的快照必须处于NORMAL状态。快照状态可以通过[DescribeSnapshots](/document/product/362/15647)接口查询，见输出参数中SnapshotState字段解释。
* 如果是弹性云盘，则云盘必须处于未挂载状态，云硬盘挂载状态可以通过[DescribeDisks](/document/product/362/16315)接口查询，见Attached字段解释；如果是随实例一起购买的非弹性云盘，则实例必须处于关机状态，实例状态可以通过[DescribeInstancesStatus](/document/product/213/15738)接口查询。
     */
  async ApplySnapshot(
    req: ApplySnapshotRequest,
    cb?: (error: string, rep: ApplySnapshotResponse) => void
  ): Promise<ApplySnapshotResponse> {
    return this.request("ApplySnapshot", req, cb)
  }

  /**
     * 本接口（DescribeSnapshotOperationLogs）用于查询快照操作日志列表。

可根据快照ID过滤。快照ID形如：snap-a1kmcp13。

     */
  async DescribeSnapshotOperationLogs(
    req: DescribeSnapshotOperationLogsRequest,
    cb?: (error: string, rep: DescribeSnapshotOperationLogsResponse) => void
  ): Promise<DescribeSnapshotOperationLogsResponse> {
    return this.request("DescribeSnapshotOperationLogs", req, cb)
  }

  /**
     * 本接口（ModifySnapshotsSharePermission）用于修改快照分享信息。

分享快照后，被分享账户可以通过该快照创建云硬盘。
* 每个快照最多可分享给50个账户。
* 分享快照无法更改名称，描述，仅可用于创建云硬盘。
* 只支持分享到对方账户相同地域。
* 仅支持分享数据盘快照。
     */
  async ModifySnapshotsSharePermission(
    req: ModifySnapshotsSharePermissionRequest,
    cb?: (error: string, rep: ModifySnapshotsSharePermissionResponse) => void
  ): Promise<ModifySnapshotsSharePermissionResponse> {
    return this.request("ModifySnapshotsSharePermission", req, cb)
  }

  /**
     * 本接口（CreateSnapshot）用于对指定云盘创建快照。

* 只有具有快照能力的云硬盘才能创建快照。云硬盘是否具有快照能力可由[DescribeDisks](/document/product/362/16315)接口查询，见SnapshotAbility字段。
* 可创建快照数量限制见[产品使用限制](https://cloud.tencent.com/doc/product/362/5145)。
* 当前支持将备份点转化为普通快照，转化之后可能会收取快照使用费用，备份点不保留，其占用的备份点配额也将被释放。
     */
  async CreateSnapshot(
    req: CreateSnapshotRequest,
    cb?: (error: string, rep: CreateSnapshotResponse) => void
  ): Promise<CreateSnapshotResponse> {
    return this.request("CreateSnapshot", req, cb)
  }

  /**
   * 获取快照概览信息
   */
  async GetSnapOverview(
    req?: GetSnapOverviewRequest,
    cb?: (error: string, rep: GetSnapOverviewResponse) => void
  ): Promise<GetSnapOverviewResponse> {
    return this.request("GetSnapOverview", req, cb)
  }

  /**
     * 本接口（ResizeDisk）用于扩容云硬盘。

* 只支持扩容弹性云盘。云硬盘类型可以通过[DescribeDisks](/document/product/362/16315)接口查询，见输出参数中Portable字段解释。非弹性云硬盘需通过[ResizeInstanceDisks](/document/product/213/15731)接口扩容。
* 本接口为异步接口，接口成功返回时，云盘并未立即扩容到指定大小，可通过接口[DescribeDisks](/document/product/362/16315)来查询对应云盘的状态，如果云盘的状态为“EXPANDING”，表示正在扩容中。 
     */
  async ResizeDisk(
    req: ResizeDiskRequest,
    cb?: (error: string, rep: ResizeDiskResponse) => void
  ): Promise<ResizeDiskResponse> {
    return this.request("ResizeDisk", req, cb)
  }

  /**
     * 本接口（DetachDisks）用于卸载云硬盘。

* 支持批量操作，卸载挂载在同一主机上的多块云盘。如果多块云盘中存在不允许卸载的云盘，则操作不执行，返回特定的错误码。
* 本接口为异步接口，当请求成功返回时，云盘并未立即从主机卸载，可通过接口[DescribeDisks](/document/product/362/16315)来查询对应云盘的状态，如果云盘的状态由“ATTACHED”变为“UNATTACHED”，则为卸载成功。
     */
  async DetachDisks(
    req: DetachDisksRequest,
    cb?: (error: string, rep: DetachDisksResponse) => void
  ): Promise<DetachDisksResponse> {
    return this.request("DetachDisks", req, cb)
  }

  /**
     * 本接口（InquiryPriceRenewDisks）用于续费云硬盘询价。

* 只支持查询预付费模式的弹性云盘续费价格。
* 支持与挂载实例一起续费的场景，需要在[DiskChargePrepaid](/document/product/362/15669#DiskChargePrepaid)参数中指定CurInstanceDeadline，此时会按对齐到实例续费后的到期时间来续费询价。
* 支持为多块云盘指定不同的续费时长，此时返回的价格为多块云盘续费的总价格。
     */
  async InquiryPriceRenewDisks(
    req: InquiryPriceRenewDisksRequest,
    cb?: (error: string, rep: InquiryPriceRenewDisksResponse) => void
  ): Promise<InquiryPriceRenewDisksResponse> {
    return this.request("InquiryPriceRenewDisks", req, cb)
  }
}
