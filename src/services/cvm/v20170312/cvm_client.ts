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
  InquiryPriceTerminateInstancesResponse,
  LocalDiskType,
  AssociateInstancesKeyPairsResponse,
  ModifyChcAttributeResponse,
  DescribeHpcClustersRequest,
  DescribeImageQuotaResponse,
  ModifyInstancesProjectRequest,
  ConfigureChcDeployVpcResponse,
  InquiryPriceRenewHostsRequest,
  HostResource,
  DeleteDisasterRecoverGroupsRequest,
  DeleteKeyPairsResponse,
  TerminateInstancesResponse,
  RepairTaskControlResponse,
  ModifyInstancesChargeTypeResponse,
  AccountQuota,
  InquiryPriceResetInstancesInternetMaxBandwidthResponse,
  DescribeZonesRequest,
  ModifyKeyPairAttributeRequest,
  AssociateSecurityGroupsRequest,
  PostPaidQuota,
  ResetInstancesTypeRequest,
  ChcHost,
  RepairTaskInfo,
  DeleteLaunchTemplateVersionsRequest,
  DeleteImagesRequest,
  DeleteLaunchTemplateRequest,
  DescribeInstancesResponse,
  DescribeHostsResponse,
  DeleteKeyPairsRequest,
  SystemDisk,
  ModifyInstancesDisasterRecoverGroupRequest,
  ModifyHpcClusterAttributeRequest,
  ExitRescueModeResponse,
  DescribeChcHostsResponse,
  InstanceTypeConfig,
  RepairTaskControlRequest,
  AllocateHostsRequest,
  DescribeImageFromFamilyRequest,
  DescribeRegionsResponse,
  ImportImageDataDisk,
  RebootInstancesRequest,
  InstanceTypeConfigStatus,
  HostPriceInfo,
  ResetInstancesTypeResponse,
  DeleteInstancesActionTimerRequest,
  AssociateInstancesKeyPairsRequest,
  DeleteLaunchTemplateResponse,
  DescribeChcDeniedActionsResponse,
  DescribeInstancesStatusResponse,
  ZoneInfo,
  ModifyHpcClusterAttributeResponse,
  LaunchTemplateVersionInfo,
  InquiryPriceModifyInstancesChargeTypeResponse,
  ImportInstancesActionTimerResponse,
  DescribeKeyPairsResponse,
  ResetInstancesPasswordRequest,
  RemoveChcAssistVpcResponse,
  InternetChargeTypeConfig,
  DescribeImagesResponse,
  ModifyInstancesVpcAttributeResponse,
  CpuTopology,
  DescribeLaunchTemplatesResponse,
  DeleteHpcClustersResponse,
  DescribeInstancesActionTimerResponse,
  DescribeInstancesOperationLimitRequest,
  ResetInstancesPasswordResponse,
  ModifyImageAttributeRequest,
  EnterRescueModeRequest,
  DescribeInstanceVncUrlRequest,
  StopInstancesResponse,
  ModifyImageSharePermissionRequest,
  DisassociateInstancesKeyPairsResponse,
  DescribeLaunchTemplateVersionsRequest,
  InquiryPriceResizeInstanceDisksRequest,
  RunInstancesResponse,
  DisasterRecoverGroupQuota,
  DescribeHpcClustersResponse,
  ModifyImageSharePermissionResponse,
  DescribeInstancesOperationLimitResponse,
  SyncImagesResponse,
  DescribeZoneInstanceConfigInfosResponse,
  ModifyInstancesAttributeRequest,
  RenewHostsRequest,
  CreateDisasterRecoverGroupResponse,
  RemoveChcAssistVpcRequest,
  ConvertOperatingSystemsRequest,
  StartInstancesRequest,
  Tag,
  ProgramFpgaImageResponse,
  DescribeInstanceInternetBandwidthConfigsResponse,
  RunSecurityServiceEnabled,
  CreateHpcClusterResponse,
  Placement,
  DescribeDisasterRecoverGroupsRequest,
  SyncImagesRequest,
  DisassociateInstancesKeyPairsRequest,
  DescribeImageQuotaRequest,
  SpotPaidQuota,
  ResetInstancesInternetMaxBandwidthResponse,
  ConfigureChcDeployVpcRequest,
  DescribeInstanceFamilyConfigsResponse,
  ImportKeyPairResponse,
  CreateImageResponse,
  DeleteInstancesActionTimerResponse,
  DescribeInstancesModificationRequest,
  InstanceMarketOptionsRequest,
  DescribeImageSharePermissionResponse,
  DeleteLaunchTemplateVersionsResponse,
  DescribeTaskInfoRequest,
  InquiryPriceRunInstancesRequest,
  Image,
  ChcDeployExtraConfig,
  DescribeDisasterRecoverGroupQuotaResponse,
  DescribeRegionsRequest,
  ImportInstancesActionTimerRequest,
  CreateDisasterRecoverGroupRequest,
  DescribeChcDeniedActionsRequest,
  DescribeImportImageOsResponse,
  ModifyKeyPairAttributeResponse,
  PrePaidQuota,
  StopInstancesRequest,
  DataDisk,
  DescribeKeyPairsRequest,
  OperationCountLimit,
  RunAutomationServiceEnabled,
  LaunchTemplateVersionData,
  TargetOS,
  DeleteDisasterRecoverGroupsResponse,
  HostItem,
  OsVersion,
  Externals,
  ConvertOperatingSystemsResponse,
  InquiryPriceModifyInstancesChargeTypeRequest,
  CreateImageRequest,
  Instance,
  CreateLaunchTemplateVersionRequest,
  EnhancedService,
  CreateKeyPairResponse,
  DescribeInstanceVncUrlResponse,
  DescribeInternetChargeTypeConfigsRequest,
  ExitRescueModeRequest,
  DescribeDisasterRecoverGroupsResponse,
  ExportImagesRequest,
  ActionTimer,
  ModifyInstanceDiskTypeResponse,
  CreateLaunchTemplateRequest,
  InquiryPriceResetInstanceRequest,
  DescribeLaunchTemplatesRequest,
  ResetInstancesInternetMaxBandwidthRequest,
  InstanceFamilyConfig,
  RemoveChcDeployVpcResponse,
  AssociateSecurityGroupsResponse,
  ImportImageRequest,
  SpotMarketOptions,
  ConfigureChcAssistVpcRequest,
  DescribeImportImageOsRequest,
  CreateLaunchTemplateResponse,
  CreateKeyPairRequest,
  InstanceStatus,
  InquiryPriceRenewInstancesResponse,
  AllocateHostsResponse,
  DescribeImageSharePermissionRequest,
  DescribeInstancesRequest,
  InquiryPriceResetInstanceResponse,
  RunInstancesRequest,
  Filter,
  CreateHpcClusterRequest,
  InquiryPriceResetInstancesInternetMaxBandwidthRequest,
  ModifyHostsAttributeResponse,
  EnterRescueModeResponse,
  DescribeTaskInfoResponse,
  DescribeDisasterRecoverGroupQuotaRequest,
  StartInstancesResponse,
  ModifyInstancesVpcAttributeRequest,
  ChargePrepaid,
  ModifyInstancesChargeTypeRequest,
  ResizeInstanceDisksRequest,
  DescribeInternetChargeTypeConfigsResponse,
  AccountQuotaOverview,
  DescribeZoneInstanceConfigInfosRequest,
  DescribeZonesResponse,
  ItemPrice,
  InstanceTypeQuotaItem,
  InquiryPriceTerminateInstancesRequest,
  ImageOsList,
  ExportImagesResponse,
  RemoveChcDeployVpcRequest,
  InquiryPriceRunInstancesResponse,
  TagSpecification,
  DescribeHostsRequest,
  DescribeAccountQuotaRequest,
  ModifyChcAttributeRequest,
  ModifyInstancesRenewFlagResponse,
  ModifyLaunchTemplateDefaultVersionResponse,
  DescribeInstancesStatusRequest,
  InquiryPriceResizeInstanceDisksResponse,
  TerminateInstancesRequest,
  SharePermission,
  DeleteImagesResponse,
  ResetInstanceRequest,
  ImportImageResponse,
  ModifyDisasterRecoverGroupAttributeRequest,
  ConfigureChcAssistVpcResponse,
  RebootInstancesResponse,
  DescribeChcHostsRequest,
  ModifyInstanceDiskTypeRequest,
  LaunchTemplate,
  InquiryPriceResetInstancesTypeResponse,
  DeleteHpcClustersRequest,
  CreateLaunchTemplateVersionResponse,
  ImageQuota,
  ModifyImageAttributeResponse,
  InquiryPriceRenewInstancesRequest,
  GPUInfo,
  InstanceRefund,
  DescribeInstanceTypeConfigsRequest,
  RegionInfo,
  DescribeImageFromFamilyResponse,
  ModifyLaunchTemplateDefaultVersionRequest,
  ModifyInstancesAttributeResponse,
  ChcHostDeniedActions,
  DescribeImagesRequest,
  InquiryPriceRenewHostsResponse,
  ResizeInstanceDisksResponse,
  LoginSettings,
  ModifyInstancesRenewFlagRequest,
  DisassociateSecurityGroupsRequest,
  ModifyHostsAttributeRequest,
  RenewInstancesRequest,
  ImportKeyPairRequest,
  SyncImage,
  KeyPair,
  DescribeInstancesModificationResponse,
  RenewInstancesResponse,
  DescribeLaunchTemplateVersionsResponse,
  DescribeAccountQuotaResponse,
  RunMonitorServiceEnabled,
  ResetInstanceResponse,
  ProgramFpgaImageRequest,
  DisasterRecoverGroup,
  ModifyInstancesDisasterRecoverGroupResponse,
  VirtualPrivateCloud,
  InternetBandwidthConfig,
  ModifyDisasterRecoverGroupAttributeResponse,
  DescribeInstanceTypeConfigsResponse,
  DescribeInstancesActionTimerRequest,
  LaunchTemplateInfo,
  DescribeInstanceFamilyConfigsRequest,
  DescribeInstanceInternetBandwidthConfigsRequest,
  HpcClusterInfo,
  StorageBlock,
  InternetAccessible,
  RenewHostsResponse,
  DisassociateSecurityGroupsResponse,
  Snapshot,
  ModifyInstancesProjectResponse,
  InstanceChargePrepaid,
  Price,
  InquiryPriceResetInstancesTypeRequest,
} from "./cvm_models"

/**
 * cvm client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("cvm.tencentcloudapi.com", "2017-03-12", clientConfig)
  }

  /**
   * 本接口(InquiryPriceRunInstances)用于创建实例询价。本接口仅允许针对购买限制范围内的实例配置进行询价, 详见：[创建实例](https://cloud.tencent.com/document/api/213/15730)。
   */
  async InquiryPriceRunInstances(
    req: InquiryPriceRunInstancesRequest,
    cb?: (error: string, rep: InquiryPriceRunInstancesResponse) => void
  ): Promise<InquiryPriceRunInstancesResponse> {
    return this.request("InquiryPriceRunInstances", req, cb)
  }

  /**
     * 本接口 (ModifyInstancesAttribute) 用于修改实例的属性（目前只支持修改实例的名称和关联的安全组）。

* 每次请求必须指定实例的一种属性用于修改。
* “实例名称”仅为方便用户自己管理之用，腾讯云并不以此名称作为在线支持或是进行实例管理操作的依据。
* 支持批量操作。每次请求批量实例的上限为100。
* 修改关联安全组时，子机原来关联的安全组会被解绑。
* 实例操作结果可以通过调用 [DescribeInstances](https://cloud.tencent.com/document/api/213/15728#.E7.A4.BA.E4.BE.8B3-.E6.9F.A5.E8.AF.A2.E5.AE.9E.E4.BE.8B.E7.9A.84.E6.9C.80.E6.96.B0.E6.93.8D.E4.BD.9C.E6.83.85.E5.86.B5) 接口查询，如果实例的最新操作状态(LatestOperationState)为“SUCCESS”，则代表操作成功。
* 修改主机名后实例会立即重启，重启后新的主机名生效。
     */
  async ModifyInstancesAttribute(
    req: ModifyInstancesAttributeRequest,
    cb?: (error: string, rep: ModifyInstancesAttributeResponse) => void
  ): Promise<ModifyInstancesAttributeResponse> {
    return this.request("ModifyInstancesAttribute", req, cb)
  }

  /**
     * 本接口 (InquiryPriceResetInstancesInternetMaxBandwidth) 用于调整实例公网带宽上限询价。

* 不同机型带宽上限范围不一致，具体限制详见[公网带宽上限](https://cloud.tencent.com/document/product/213/12523)。
* 对于`BANDWIDTH_PREPAID`计费方式的带宽，目前不支持调小带宽，且需要输入参数`StartTime`和`EndTime`，指定调整后的带宽的生效时间段。在这种场景下会涉及扣费，请确保账户余额充足。可通过 [DescribeAccountBalance](https://cloud.tencent.com/document/product/555/20253) 接口查询账户余额。
* 对于 `TRAFFIC_POSTPAID_BY_HOUR`、 `BANDWIDTH_POSTPAID_BY_HOUR` 和 `BANDWIDTH_PACKAGE` 计费方式的带宽，使用该接口调整带宽上限是实时生效的，可以在带宽允许的范围内调大或者调小带宽，不支持输入参数 `StartTime` 和 `EndTime` 。
* 接口不支持调整`BANDWIDTH_POSTPAID_BY_MONTH`计费方式的带宽。
* 接口不支持批量调整 `BANDWIDTH_PREPAID` 和 `BANDWIDTH_POSTPAID_BY_HOUR` 计费方式的带宽。
* 接口不支持批量调整混合计费方式的带宽。例如不支持同时调整`TRAFFIC_POSTPAID_BY_HOUR`和`BANDWIDTH_PACKAGE`计费方式的带宽。
     */
  async InquiryPriceResetInstancesInternetMaxBandwidth(
    req: InquiryPriceResetInstancesInternetMaxBandwidthRequest,
    cb?: (error: string, rep: InquiryPriceResetInstancesInternetMaxBandwidthResponse) => void
  ): Promise<InquiryPriceResetInstancesInternetMaxBandwidthResponse> {
    return this.request("InquiryPriceResetInstancesInternetMaxBandwidth", req, cb)
  }

  /**
     * 本接口 (DeleteKeyPairs) 用于删除已在腾讯云托管的密钥对。

* 可以同时删除多个密钥对。
* 不能删除已被实例或镜像引用的密钥对，所以需要独立判断是否所有密钥对都被成功删除。
     */
  async DeleteKeyPairs(
    req: DeleteKeyPairsRequest,
    cb?: (error: string, rep: DeleteKeyPairsResponse) => void
  ): Promise<DeleteKeyPairsResponse> {
    return this.request("DeleteKeyPairs", req, cb)
  }

  /**
     * 本接口 (ImportKeyPair) 用于导入密钥对。

* 本接口的功能是将密钥对导入到用户账户，并不会自动绑定到实例。如需绑定可以使用[AssociasteInstancesKeyPair](https://cloud.tencent.com/document/api/213/9404)接口。
* 需指定密钥对名称以及该密钥对的公钥文本。
* 如果用户只有私钥，可以通过 `SSL` 工具将私钥转换成公钥后再导入。
     */
  async ImportKeyPair(
    req: ImportKeyPairRequest,
    cb?: (error: string, rep: ImportKeyPairResponse) => void
  ): Promise<ImportKeyPairResponse> {
    return this.request("ImportKeyPair", req, cb)
  }

  /**
     * 本接口 (RunInstances) 用于创建一个或多个指定配置的实例。
 
* 实例创建成功后将自动开机启动，[实例状态](https://cloud.tencent.com/document/product/213/15753#InstanceStatus)变为“运行中”。
* 预付费实例的购买会预先扣除本次实例购买所需金额，按小时后付费实例购买会预先冻结本次实例购买一小时内所需金额，在调用本接口前请确保账户余额充足。
* 调用本接口创建实例，支持代金券自动抵扣（注意，代金券不可用于抵扣后付费冻结金额），详情请参考[代金券选用规则](https://cloud.tencent.com/document/product/555/7428)。
* 本接口允许购买的实例数量遵循[CVM实例购买限制](https://cloud.tencent.com/document/product/213/2664)，所创建的实例和官网入口创建的实例共用配额。
* 本接口为异步接口，当创建实例请求下发成功后会返回一个实例`ID`列表和一个`RequestId`，此时创建实例操作并未立即完成。在此期间实例的状态将会处于“PENDING”，实例创建结果可以通过调用 [DescribeInstancesStatus](https://cloud.tencent.com/document/product/213/15738)  接口查询，如果实例状态(InstanceState)由“PENDING(创建中)”变为“RUNNING(运行中)”，则代表实例创建成功，“LAUNCH_FAILED”代表实例创建失败。
     */
  async RunInstances(
    req: RunInstancesRequest,
    cb?: (error: string, rep: RunInstancesResponse) => void
  ): Promise<RunInstancesResponse> {
    return this.request("RunInstances", req, cb)
  }

  /**
   * 本接口（ModifyLaunchTemplateDefaultVersion）用于修改实例启动模板默认版本。
   */
  async ModifyLaunchTemplateDefaultVersion(
    req: ModifyLaunchTemplateDefaultVersionRequest,
    cb?: (error: string, rep: ModifyLaunchTemplateDefaultVersionResponse) => void
  ): Promise<ModifyLaunchTemplateDefaultVersionResponse> {
    return this.request("ModifyLaunchTemplateDefaultVersion", req, cb)
  }

  /**
   * 本接口(ModifyInstancesVpcAttribute)用于修改实例vpc属性，如私有网络IP。
   * 此操作默认会关闭实例，完成后再启动。
   * 当指定私有网络ID和子网ID（子网必须在实例所在的可用区）与指定实例所在私有网络不一致时，会将实例迁移至指定的私有网络的子网下。执行此操作前请确保指定的实例上没有绑定[弹性网卡](https://cloud.tencent.com/document/product/576)和[负载均衡](https://cloud.tencent.com/document/product/214)。
   * 实例操作结果可以通过调用 [DescribeInstances](https://cloud.tencent.com/document/api/213/15728#.E7.A4.BA.E4.BE.8B3-.E6.9F.A5.E8.AF.A2.E5.AE.9E.E4.BE.8B.E7.9A.84.E6.9C.80.E6.96.B0.E6.93.8D.E4.BD.9C.E6.83.85.E5.86.B5) 接口查询，如果实例的最新操作状态(LatestOperationState)为“SUCCESS”，则代表操作成功。
   */
  async ModifyInstancesVpcAttribute(
    req: ModifyInstancesVpcAttributeRequest,
    cb?: (error: string, rep: ModifyInstancesVpcAttributeResponse) => void
  ): Promise<ModifyInstancesVpcAttributeResponse> {
    return this.request("ModifyInstancesVpcAttribute", req, cb)
  }

  /**
   * 本接口 (DescribeDisasterRecoverGroupQuota)用于查询[分散置放群组](https://cloud.tencent.com/document/product/213/15486)配额。
   */
  async DescribeDisasterRecoverGroupQuota(
    req?: DescribeDisasterRecoverGroupQuotaRequest,
    cb?: (error: string, rep: DescribeDisasterRecoverGroupQuotaResponse) => void
  ): Promise<DescribeDisasterRecoverGroupQuotaResponse> {
    return this.request("DescribeDisasterRecoverGroupQuota", req, cb)
  }

  /**
     * 本接口 (DescribeTaskInfo) 用于查询云服务器维修任务列表及详细信息。

- 可以根据实例ID、实例名称或任务状态等信息来查询维修任务列表。过滤信息详情可参考入参说明。
- 如果参数为空，返回当前用户一定数量（`Limit`所指定的数量，默认为20）的维修任务列表。
     */
  async DescribeTaskInfo(
    req: DescribeTaskInfoRequest,
    cb?: (error: string, rep: DescribeTaskInfoResponse) => void
  ): Promise<DescribeTaskInfoResponse> {
    return this.request("DescribeTaskInfo", req, cb)
  }

  /**
   * 本接口(CreateImage)用于将实例的系统盘制作为新镜像，创建后的镜像可以用于创建实例。
   */
  async CreateImage(
    req: CreateImageRequest,
    cb?: (error: string, rep: CreateImageResponse) => void
  ): Promise<CreateImageResponse> {
    return this.request("CreateImage", req, cb)
  }

  /**
   * 配置CHC物理服务器的带外和部署网络。传入带外网络和部署网络信息
   */
  async ConfigureChcAssistVpc(
    req: ConfigureChcAssistVpcRequest,
    cb?: (error: string, rep: ConfigureChcAssistVpcResponse) => void
  ): Promise<ConfigureChcAssistVpcResponse> {
    return this.request("ConfigureChcAssistVpc", req, cb)
  }

  /**
     * 本接口 (ResetInstancesType) 用于调整实例的机型。

* 目前只支持[系统盘类型](/document/api/213/9452#block_device)是CLOUD_BASIC、CLOUD_PREMIUM、CLOUD_SSD、CLOUD_BSSD类型的实例使用该接口进行机型调整。
* 目前不支持[CDH](https://cloud.tencent.com/document/product/416)实例使用该接口调整机型。对于包年包月实例，使用该接口会涉及扣费，请确保账户余额充足。可通过[DescribeAccountBalance](https://cloud.tencent.com/document/product/555/20253)接口查询账户余额。
* 本接口为异步接口，调整实例配置请求发送成功后会返回一个RequestId，此时操作并未立即完成。实例操作结果可以通过调用 [DescribeInstances](https://cloud.tencent.com/document/api/213/15728#.E7.A4.BA.E4.BE.8B3-.E6.9F.A5.E8.AF.A2.E5.AE.9E.E4.BE.8B.E7.9A.84.E6.9C.80.E6.96.B0.E6.93.8D.E4.BD.9C.E6.83.85.E5.86.B5) 接口查询，如果实例的最新操作状态(LatestOperationState)为“SUCCESS”，则代表调整实例配置操作成功。
     */
  async ResetInstancesType(
    req: ResetInstancesTypeRequest,
    cb?: (error: string, rep: ResetInstancesTypeResponse) => void
  ): Promise<ResetInstancesTypeResponse> {
    return this.request("ResetInstancesType", req, cb)
  }

  /**
   * 本接口（DescribeInstanceFamilyConfigs）查询当前用户和地域所支持的机型族列表信息。
   */
  async DescribeInstanceFamilyConfigs(
    req?: DescribeInstanceFamilyConfigsRequest,
    cb?: (error: string, rep: DescribeInstanceFamilyConfigsResponse) => void
  ): Promise<DescribeInstanceFamilyConfigsResponse> {
    return this.request("DescribeInstanceFamilyConfigs", req, cb)
  }

  /**
     * 本接口（SyncImages）用于将自定义镜像同步到其它地区。

* 该接口每次调用只支持同步一个镜像。
* 该接口支持多个同步地域。
* 单个账号在每个地域最多支持存在500个自定义镜像。
     */
  async SyncImages(
    req: SyncImagesRequest,
    cb?: (error: string, rep: SyncImagesResponse) => void
  ): Promise<SyncImagesResponse> {
    return this.request("SyncImages", req, cb)
  }

  /**
   * 本接口(ImportImage)用于导入镜像，导入后的镜像可用于创建实例。目前支持RAW、VHD、QCOW2、VMDK镜像格式。
   */
  async ImportImage(
    req: ImportImageRequest,
    cb?: (error: string, rep: ImportImageResponse) => void
  ): Promise<ImportImageResponse> {
    return this.request("ImportImage", req, cb)
  }

  /**
   * 本接口(DescribeZoneInstanceConfigInfos) 获取可用区的机型信息。
   */
  async DescribeZoneInstanceConfigInfos(
    req: DescribeZoneInstanceConfigInfosRequest,
    cb?: (error: string, rep: DescribeZoneInstanceConfigInfosResponse) => void
  ): Promise<DescribeZoneInstanceConfigInfosResponse> {
    return this.request("DescribeZoneInstanceConfigInfos", req, cb)
  }

  /**
   * 本接口 (AllocateHosts) 用于创建一个或多个指定配置的CDH实例。
   * 当HostChargeType为PREPAID时，必须指定HostChargePrepaid参数。
   */
  async AllocateHosts(
    req: AllocateHostsRequest,
    cb?: (error: string, rep: AllocateHostsResponse) => void
  ): Promise<AllocateHostsResponse> {
    return this.request("AllocateHosts", req, cb)
  }

  /**
   * 修改CHC物理服务器的属性
   */
  async ModifyChcAttribute(
    req: ModifyChcAttributeRequest,
    cb?: (error: string, rep: ModifyChcAttributeResponse) => void
  ): Promise<ModifyChcAttributeResponse> {
    return this.request("ModifyChcAttribute", req, cb)
  }

  /**
   * 创建高性能计算集群
   */
  async CreateHpcCluster(
    req: CreateHpcClusterRequest,
    cb?: (error: string, rep: CreateHpcClusterResponse) => void
  ): Promise<CreateHpcClusterResponse> {
    return this.request("CreateHpcCluster", req, cb)
  }

  /**
   * 本接口 (DisassociateSecurityGroups) 用于解绑实例的指定安全组。
   * 实例操作结果可以通过调用 [DescribeInstances](https://cloud.tencent.com/document/api/213/15728#.E7.A4.BA.E4.BE.8B3-.E6.9F.A5.E8.AF.A2.E5.AE.9E.E4.BE.8B.E7.9A.84.E6.9C.80.E6.96.B0.E6.93.8D.E4.BD.9C.E6.83.85.E5.86.B5) 接口查询，如果实例的最新操作状态(LatestOperationState)为“SUCCESS”，则代表操作成功。
   */
  async DisassociateSecurityGroups(
    req: DisassociateSecurityGroupsRequest,
    cb?: (error: string, rep: DisassociateSecurityGroupsResponse) => void
  ): Promise<DisassociateSecurityGroupsResponse> {
    return this.request("DisassociateSecurityGroups", req, cb)
  }

  /**
   * 清理CHC物理服务器的部署网络
   */
  async RemoveChcDeployVpc(
    req: RemoveChcDeployVpcRequest,
    cb?: (error: string, rep: RemoveChcDeployVpcResponse) => void
  ): Promise<RemoveChcDeployVpcResponse> {
    return this.request("RemoveChcDeployVpc", req, cb)
  }

  /**
   * 本接口（DescribeImageSharePermission）用于查询镜像分享信息。
   */
  async DescribeImageSharePermission(
    req: DescribeImageSharePermissionRequest,
    cb?: (error: string, rep: DescribeImageSharePermissionResponse) => void
  ): Promise<DescribeImageSharePermissionResponse> {
    return this.request("DescribeImageSharePermission", req, cb)
  }

  /**
   * 本接口 (DescribeInstancesModification) 用于查询指定实例支持调整的机型配置。
   */
  async DescribeInstancesModification(
    req: DescribeInstancesModificationRequest,
    cb?: (error: string, rep: DescribeInstancesModificationResponse) => void
  ): Promise<DescribeInstancesModificationResponse> {
    return this.request("DescribeInstancesModification", req, cb)
  }

  /**
   * 退出救援模式
   */
  async ExitRescueMode(
    req: ExitRescueModeRequest,
    cb?: (error: string, rep: ExitRescueModeResponse) => void
  ): Promise<ExitRescueModeResponse> {
    return this.request("ExitRescueMode", req, cb)
  }

  /**
     * 本接口 (AssociateInstancesKeyPairs) 用于将密钥绑定到实例上。

* 将密钥的公钥写入到实例的`SSH`配置当中，用户就可以通过该密钥的私钥来登录实例。
* 如果实例原来绑定过密钥，那么原来的密钥将失效。
* 如果实例原来是通过密码登录，绑定密钥后无法使用密码登录。
* 支持批量操作。每次请求批量实例的上限为100。如果批量实例存在不允许操作的实例，操作会以特定错误码返回。
     */
  async AssociateInstancesKeyPairs(
    req: AssociateInstancesKeyPairsRequest,
    cb?: (error: string, rep: AssociateInstancesKeyPairsResponse) => void
  ): Promise<AssociateInstancesKeyPairsResponse> {
    return this.request("AssociateInstancesKeyPairs", req, cb)
  }

  /**
     * 本接口 (DisassociateInstancesKeyPairs) 用于解除实例的密钥绑定关系。

* 只支持[`STOPPED`](https://cloud.tencent.com/document/product/213/15753#InstanceStatus)状态的`Linux`操作系统的实例。
* 解绑密钥后，实例可以通过原来设置的密码登录。
* 如果原来没有设置密码，解绑后将无法使用 `SSH` 登录。可以调用 [ResetInstancesPassword](https://cloud.tencent.com/document/api/213/15736) 接口来设置登录密码。
* 支持批量操作。每次请求批量实例的上限为100。如果批量实例存在不允许操作的实例，操作会以特定错误码返回。
     */
  async DisassociateInstancesKeyPairs(
    req: DisassociateInstancesKeyPairsRequest,
    cb?: (error: string, rep: DisassociateInstancesKeyPairsResponse) => void
  ): Promise<DisassociateInstancesKeyPairsResponse> {
    return this.request("DisassociateInstancesKeyPairs", req, cb)
  }

  /**
   * 本接口 (DeleteInstancesActionTimer) 用于删除定时任务。
   */
  async DeleteInstancesActionTimer(
    req: DeleteInstancesActionTimerRequest,
    cb?: (error: string, rep: DeleteInstancesActionTimerResponse) => void
  ): Promise<DeleteInstancesActionTimerResponse> {
    return this.request("DeleteInstancesActionTimer", req, cb)
  }

  /**
     * 本接口（CreateLaunchTemplate）用于创建实例启动模板。

实例启动模板是一种配置数据并可用于创建实例，其内容包含创建实例所需的配置，比如实例类型，数据盘和系统盘的类型和大小，以及安全组等信息。

初次创建实例模板后，其模板版本为默认版本1，新版本的创建可使用 [CreateLaunchTemplateVersion](https://cloud.tencent.com/document/product/213/66326) 创建，版本号递增。默认情况下，在[RunInstances](https://cloud.tencent.com/document/product/213/15730) 中指定实例启动模板，若不指定模板版本号，则使用默认版本。
     */
  async CreateLaunchTemplate(
    req: CreateLaunchTemplateRequest,
    cb?: (error: string, rep: CreateLaunchTemplateResponse) => void
  ): Promise<CreateLaunchTemplateResponse> {
    return this.request("CreateLaunchTemplate", req, cb)
  }

  /**
   * 本接口 (ModifyDisasterRecoverGroupAttribute)用于修改[分散置放群组](https://cloud.tencent.com/document/product/213/15486)属性。
   */
  async ModifyDisasterRecoverGroupAttribute(
    req: ModifyDisasterRecoverGroupAttributeRequest,
    cb?: (error: string, rep: ModifyDisasterRecoverGroupAttributeResponse) => void
  ): Promise<ModifyDisasterRecoverGroupAttributeResponse> {
    return this.request("ModifyDisasterRecoverGroupAttribute", req, cb)
  }

  /**
   * 查询高性能集群信息
   */
  async DescribeHpcClusters(
    req: DescribeHpcClustersRequest,
    cb?: (error: string, rep: DescribeHpcClustersResponse) => void
  ): Promise<DescribeHpcClustersResponse> {
    return this.request("DescribeHpcClusters", req, cb)
  }

  /**
     * 本接口（DescribeInstancesOperationLimit）用于查询实例操作限制。

* 目前支持调整配置操作限制次数查询。
     */
  async DescribeInstancesOperationLimit(
    req: DescribeInstancesOperationLimitRequest,
    cb?: (error: string, rep: DescribeInstancesOperationLimitResponse) => void
  ): Promise<DescribeInstancesOperationLimitResponse> {
    return this.request("DescribeInstancesOperationLimit", req, cb)
  }

  /**
   * 本接口（ModifyHostsAttribute）用于修改CDH实例的属性，如实例名称和续费标记等。参数HostName和RenewFlag必须设置其中一个，但不能同时设置。
   */
  async ModifyHostsAttribute(
    req: ModifyHostsAttributeRequest,
    cb?: (error: string, rep: ModifyHostsAttributeResponse) => void
  ): Promise<ModifyHostsAttributeResponse> {
    return this.request("ModifyHostsAttribute", req, cb)
  }

  /**
   * 本接口(DescribeRegions)用于查询地域信息。因平台策略原因，该接口暂时停止更新，为确保您正常调用，可切换至新链接：https://cloud.tencent.com/document/product/1596/77930。
   */
  async DescribeRegions(
    req?: DescribeRegionsRequest,
    cb?: (error: string, rep: DescribeRegionsResponse) => void
  ): Promise<DescribeRegionsResponse> {
    return this.request("DescribeRegions", req, cb)
  }

  /**
   * 查看可以导入的镜像操作系统信息。
   */
  async DescribeImportImageOs(
    req?: DescribeImportImageOsRequest,
    cb?: (error: string, rep: DescribeImportImageOsResponse) => void
  ): Promise<DescribeImportImageOsResponse> {
    return this.request("DescribeImportImageOs", req, cb)
  }

  /**
   * 当高性能计算集群为空, 即集群内没有任何设备时候, 可以删除该集群。
   */
  async DeleteHpcClusters(
    req: DeleteHpcClustersRequest,
    cb?: (error: string, rep: DeleteHpcClustersResponse) => void
  ): Promise<DeleteHpcClustersResponse> {
    return this.request("DeleteHpcClusters", req, cb)
  }

  /**
     * 本接口 (InquiryPriceRenewInstances) 用于续费包年包月实例询价。

* 只支持查询包年包月实例的续费价格。
     */
  async InquiryPriceRenewInstances(
    req: InquiryPriceRenewInstancesRequest,
    cb?: (error: string, rep: InquiryPriceRenewInstancesResponse) => void
  ): Promise<InquiryPriceRenewInstancesResponse> {
    return this.request("InquiryPriceRenewInstances", req, cb)
  }

  /**
     * 本接口 (ModifyInstancesChargeType) 用于切换实例的计费模式。

* 关机不收费的实例、`批量计算型BC1`和`批量计算型BS1`机型族的实例、设置定时销毁的实例不支持该操作。
* 实例操作结果可以通过调用 [DescribeInstances](https://cloud.tencent.com/document/api/213/15728#.E7.A4.BA.E4.BE.8B3-.E6.9F.A5.E8.AF.A2.E5.AE.9E.E4.BE.8B.E7.9A.84.E6.9C.80.E6.96.B0.E6.93.8D.E4.BD.9C.E6.83.85.E5.86.B5) 接口查询，如果实例的最新操作状态(LatestOperationState)为“SUCCESS”，则代表操作成功。
     */
  async ModifyInstancesChargeType(
    req: ModifyInstancesChargeTypeRequest,
    cb?: (error: string, rep: ModifyInstancesChargeTypeResponse) => void
  ): Promise<ModifyInstancesChargeTypeResponse> {
    return this.request("ModifyInstancesChargeType", req, cb)
  }

  /**
     * 本接口 (RenewHosts) 用于续费包年包月CDH实例。

* 只支持操作包年包月实例，否则操作会以特定[错误码](#6.-.E9.94.99.E8.AF.AF.E7.A0.81)返回。
* 续费时请确保账户余额充足。可通过[`DescribeAccountBalance`](https://cloud.tencent.com/document/product/555/20253)接口查询账户余额。
     */
  async RenewHosts(
    req: RenewHostsRequest,
    cb?: (error: string, rep: RenewHostsResponse) => void
  ): Promise<RenewHostsResponse> {
    return this.request("RenewHosts", req, cb)
  }

  /**
     * 本接口（RepairTaskControl）用于对待授权状态的维修任务进行授权操作。

- 仅当任务状态处于`待授权`状态时，可通过此接口对待授权的维修任务进行授权。
- 调用时需指定产品类型、实例ID、维修任务ID、操作类型。
- 可授权立即处理，或提前预约计划维护时间之前的指定时间进行处理（预约时间需晚于当前时间至少5分钟，且在48小时之内）。
- 针对不同类型的维修任务，提供的可选授权处理策略可参见 [维修任务类型与处理策略](https://cloud.tencent.com/document/product/213/67789)。
     */
  async RepairTaskControl(
    req: RepairTaskControlRequest,
    cb?: (error: string, rep: RepairTaskControlResponse) => void
  ): Promise<RepairTaskControlResponse> {
    return this.request("RepairTaskControl", req, cb)
  }

  /**
   * 本接口 (DescribeHosts) 用于获取一个或多个CDH实例的详细信息。
   */
  async DescribeHosts(
    req: DescribeHostsRequest,
    cb?: (error: string, rep: DescribeHostsResponse) => void
  ): Promise<DescribeHostsResponse> {
    return this.request("DescribeHosts", req, cb)
  }

  /**
   * 进入救援模式
   */
  async EnterRescueMode(
    req: EnterRescueModeRequest,
    cb?: (error: string, rep: EnterRescueModeResponse) => void
  ): Promise<EnterRescueModeResponse> {
    return this.request("EnterRescueMode", req, cb)
  }

  /**
     * 本接口 (DescribeInstancesStatus) 用于查询一个或多个实例的状态。

* 可以根据实例`ID`来查询实例的状态。
* 如果参数为空，返回当前用户一定数量（Limit所指定的数量，默认为20）的实例状态。
     */
  async DescribeInstancesStatus(
    req: DescribeInstancesStatusRequest,
    cb?: (error: string, rep: DescribeInstancesStatusResponse) => void
  ): Promise<DescribeInstancesStatusResponse> {
    return this.request("DescribeInstancesStatus", req, cb)
  }

  /**
     * 本接口（ModifyImageSharePermission）用于修改镜像共享信息。

* 共享镜像后，被共享账户可以通过该镜像创建实例。
* 每个自定义镜像最多可共享给500个账户。
* 共享镜像无法更改名称，描述，仅可用于创建实例。
* 只支持共享到对方账户相同地域。
     */
  async ModifyImageSharePermission(
    req: ModifyImageSharePermissionRequest,
    cb?: (error: string, rep: ModifyImageSharePermissionResponse) => void
  ): Promise<ModifyImageSharePermissionResponse> {
    return this.request("ModifyImageSharePermission", req, cb)
  }

  /**
   * 导入定时任务
   */
  async ImportInstancesActionTimer(
    req: ImportInstancesActionTimerRequest,
    cb?: (error: string, rep: ImportInstancesActionTimerResponse) => void
  ): Promise<ImportInstancesActionTimerResponse> {
    return this.request("ImportInstancesActionTimer", req, cb)
  }

  /**
   * 本接口（DeleteLaunchTemplate）用于删除一个实例启动模板。
   */
  async DeleteLaunchTemplate(
    req: DeleteLaunchTemplateRequest,
    cb?: (error: string, rep: DeleteLaunchTemplateResponse) => void
  ): Promise<DeleteLaunchTemplateResponse> {
    return this.request("DeleteLaunchTemplate", req, cb)
  }

  /**
   * 本接口 (ModifyInstancesDisasterRecoverGroup) 用于调整实例所在置放群组。
   * 目前只支持基础网络或私有网络实例。
   */
  async ModifyInstancesDisasterRecoverGroup(
    req: ModifyInstancesDisasterRecoverGroupRequest,
    cb?: (error: string, rep: ModifyInstancesDisasterRecoverGroupResponse) => void
  ): Promise<ModifyInstancesDisasterRecoverGroupResponse> {
    return this.request("ModifyInstancesDisasterRecoverGroup", req, cb)
  }

  /**
     * 本接口 (CreateKeyPair) 用于创建一个 `OpenSSH RSA` 密钥对，可以用于登录 `Linux` 实例。

* 开发者只需指定密钥对名称，即可由系统自动创建密钥对，并返回所生成的密钥对的 `ID` 及其公钥、私钥的内容。
* 密钥对名称不能和已经存在的密钥对的名称重复。
* 私钥的内容可以保存到文件中作为 `SSH` 的一种认证方式。
* 腾讯云不会保存用户的私钥，请妥善保管。
     */
  async CreateKeyPair(
    req: CreateKeyPairRequest,
    cb?: (error: string, rep: CreateKeyPairResponse) => void
  ): Promise<CreateKeyPairResponse> {
    return this.request("CreateKeyPair", req, cb)
  }

  /**
   * 本接口 (DescribeInstancesActionTimer) 用于查询定时任务信息。
   */
  async DescribeInstancesActionTimer(
    req: DescribeInstancesActionTimerRequest,
    cb?: (error: string, rep: DescribeInstancesActionTimerResponse) => void
  ): Promise<DescribeInstancesActionTimerResponse> {
    return this.request("DescribeInstancesActionTimer", req, cb)
  }

  /**
     * 本接口 (InquiryPriceResizeInstanceDisks) 用于扩容实例的数据盘询价。

* 目前只支持扩容非弹性数据盘（[`DescribeDisks`](https://cloud.tencent.com/document/api/362/16315)接口返回值中的`Portable`为`false`表示非弹性）询价。
* 目前不支持[CDH](https://cloud.tencent.com/document/product/416)实例使用该接口扩容数据盘询价。* 仅支持包年包月实例随机器购买的数据盘。* 目前只支持扩容一块数据盘询价。
     */
  async InquiryPriceResizeInstanceDisks(
    req: InquiryPriceResizeInstanceDisksRequest,
    cb?: (error: string, rep: InquiryPriceResizeInstanceDisksResponse) => void
  ): Promise<InquiryPriceResizeInstanceDisksResponse> {
    return this.request("InquiryPriceResizeInstanceDisks", req, cb)
  }

  /**
     * 本接口 (InquiryPriceResetInstance) 用于重装实例询价。

* 如果指定了`ImageId`参数，则使用指定的镜像进行重装询价；否则按照当前实例使用的镜像进行重装询价。
* 目前只支持[系统盘类型](https://cloud.tencent.com/document/api/213/15753#SystemDisk)是`CLOUD_BSSD `、`CLOUD_PREMIUM`、`CLOUD_SSD`类型的实例使用该接口实现`Linux`和`Windows`操作系统切换的重装询价。
* 目前不支持境外地域的实例使用该接口实现`Linux`和`Windows`操作系统切换的重装询价。
     */
  async InquiryPriceResetInstance(
    req: InquiryPriceResetInstanceRequest,
    cb?: (error: string, rep: InquiryPriceResetInstanceResponse) => void
  ): Promise<InquiryPriceResetInstanceResponse> {
    return this.request("InquiryPriceResetInstance", req, cb)
  }

  /**
     * 本接口 (ModifyInstancesRenewFlag) 用于修改包年包月实例续费标识。

* 实例被标识为自动续费后，每次在实例到期时，会自动续费一个月。
* 支持批量操作。每次请求批量实例的上限为100。
* 实例操作结果可以通过调用 [DescribeInstances](https://cloud.tencent.com/document/api/213/15728#.E7.A4.BA.E4.BE.8B3-.E6.9F.A5.E8.AF.A2.E5.AE.9E.E4.BE.8B.E7.9A.84.E6.9C.80.E6.96.B0.E6.93.8D.E4.BD.9C.E6.83.85.E5.86.B5) 接口查询，如果实例的最新操作状态(LatestOperationState)为“SUCCESS”，则代表操作成功。
     */
  async ModifyInstancesRenewFlag(
    req: ModifyInstancesRenewFlagRequest,
    cb?: (error: string, rep: ModifyInstancesRenewFlagResponse) => void
  ): Promise<ModifyInstancesRenewFlagResponse> {
    return this.request("ModifyInstancesRenewFlag", req, cb)
  }

  /**
     * 本接口 (ResetInstance) 用于重装指定实例上的操作系统。

* 如果指定了`ImageId`参数，则使用指定的镜像重装；否则按照当前实例使用的镜像进行重装。
* 系统盘将会被格式化，并重置；请确保系统盘中无重要文件。
* 密码不指定将会通过站内信下发随机密码。
* 目前只支持[系统盘类型](https://cloud.tencent.com/document/api/213/9452#SystemDisk)是`CLOUD_BASIC`、`CLOUD_PREMIUM`、`CLOUD_SSD`、`CLOUD_BSSD`类型的实例使用该接口实现操作系统切换。
* 实例操作结果可以通过调用 [DescribeInstances](https://cloud.tencent.com/document/api/213/15728#.E7.A4.BA.E4.BE.8B3-.E6.9F.A5.E8.AF.A2.E5.AE.9E.E4.BE.8B.E7.9A.84.E6.9C.80.E6.96.B0.E6.93.8D.E4.BD.9C.E6.83.85.E5.86.B5) 接口查询，如果实例的最新操作状态(LatestOperationState)为“SUCCESS”，则代表操作成功。
     */
  async ResetInstance(
    req: ResetInstanceRequest,
    cb?: (error: string, rep: ResetInstanceResponse) => void
  ): Promise<ResetInstanceResponse> {
    return this.request("ResetInstance", req, cb)
  }

  /**
     * 本接口 (StartInstances) 用于启动一个或多个实例。

* 只有状态为`STOPPED`的实例才可以进行此操作。
* 接口调用成功时，实例会进入`STARTING`状态；启动实例成功时，实例会进入`RUNNING`状态。
* 支持批量操作。每次请求批量实例的上限为100。
* 本接口为异步接口，启动实例请求发送成功后会返回一个RequestId，此时操作并未立即完成。实例操作结果可以通过调用 [DescribeInstances](https://cloud.tencent.com/document/api/213/15728#.E7.A4.BA.E4.BE.8B3-.E6.9F.A5.E8.AF.A2.E5.AE.9E.E4.BE.8B.E7.9A.84.E6.9C.80.E6.96.B0.E6.93.8D.E4.BD.9C.E6.83.85.E5.86.B5) 接口查询，如果实例的最新操作状态(LatestOperationState)为“SUCCESS”，则代表启动实例操作成功。
     */
  async StartInstances(
    req: StartInstancesRequest,
    cb?: (error: string, rep: StartInstancesResponse) => void
  ): Promise<StartInstancesResponse> {
    return this.request("StartInstances", req, cb)
  }

  /**
   * 本接口（DescribeLaunchTemplates）用于查询一个或者多个实例启动模板。
   */
  async DescribeLaunchTemplates(
    req: DescribeLaunchTemplatesRequest,
    cb?: (error: string, rep: DescribeLaunchTemplatesResponse) => void
  ): Promise<DescribeLaunchTemplatesResponse> {
    return this.request("DescribeLaunchTemplates", req, cb)
  }

  /**
     * 本接口 (AssociateSecurityGroups) 用于绑定安全组到指定实例。
* 实例操作结果可以通过调用 [DescribeInstances](https://cloud.tencent.com/document/api/213/15728#.E7.A4.BA.E4.BE.8B3-.E6.9F.A5.E8.AF.A2.E5.AE.9E.E4.BE.8B.E7.9A.84.E6.9C.80.E6.96.B0.E6.93.8D.E4.BD.9C.E6.83.85.E5.86.B5) 接口查询，如果实例的最新操作状态(LatestOperationState)为“SUCCESS”，则代表操作成功。
<dx-alert infotype="explain" title="">
多个安全组绑定至实例后，将以绑定顺序作为优先级顺序依次匹配执行。如需调整安全组优先级，请参见 [调整安全组优先级](https://cloud.tencent.com/document/product/213/42842)。
</dx-alert>
     */
  async AssociateSecurityGroups(
    req: AssociateSecurityGroupsRequest,
    cb?: (error: string, rep: AssociateSecurityGroupsResponse) => void
  ): Promise<AssociateSecurityGroupsResponse> {
    return this.request("AssociateSecurityGroups", req, cb)
  }

  /**
     * 本接口（ModifyImageAttribute）用于修改镜像属性。

* 已分享的镜像无法修改属性。
     */
  async ModifyImageAttribute(
    req: ModifyImageAttributeRequest,
    cb?: (error: string, rep: ModifyImageAttributeResponse) => void
  ): Promise<ModifyImageAttributeResponse> {
    return this.request("ModifyImageAttribute", req, cb)
  }

  /**
   * 本接口(ConvertOperatingSystem)用于转换实例的操作系统，仅支持源操作系统为 CentOS 7、CentOS 8 的实例。
   */
  async ConvertOperatingSystems(
    req: ConvertOperatingSystemsRequest,
    cb?: (error: string, rep: ConvertOperatingSystemsResponse) => void
  ): Promise<ConvertOperatingSystemsResponse> {
    return this.request("ConvertOperatingSystems", req, cb)
  }

  /**
   * 本接口 (DeleteDisasterRecoverGroups)用于删除[分散置放群组](https://cloud.tencent.com/document/product/213/15486)。只有空的置放群组才能被删除，非空的群组需要先销毁组内所有云服务器，才能执行删除操作，不然会产生删除置放群组失败的错误。
   */
  async DeleteDisasterRecoverGroups(
    req: DeleteDisasterRecoverGroupsRequest,
    cb?: (error: string, rep: DeleteDisasterRecoverGroupsResponse) => void
  ): Promise<DeleteDisasterRecoverGroupsResponse> {
    return this.request("DeleteDisasterRecoverGroups", req, cb)
  }

  /**
     * 本接口 (TerminateInstances) 用于主动退还实例。

* 不再使用的实例，可通过本接口主动退还。
* 按量计费的实例通过本接口可直接退还；包年包月实例如符合[退还规则](https://cloud.tencent.com/document/product/213/9711)，也可通过本接口主动退还。
* 包年包月实例首次调用本接口，实例将被移至回收站，再次调用本接口，实例将被销毁，且不可恢复。按量计费实例调用本接口将被直接销毁。
* 包年包月实例首次调用本接口，入参中包含ReleasePrepaidDataDisks时，包年包月数据盘同时也会被移至回收站。
* 支持批量操作，每次请求批量实例的上限为100。
* 批量操作时，所有实例的付费类型必须一致。
     */
  async TerminateInstances(
    req: TerminateInstancesRequest,
    cb?: (error: string, rep: TerminateInstancesResponse) => void
  ): Promise<TerminateInstancesResponse> {
    return this.request("TerminateInstances", req, cb)
  }

  /**
   * 清理CHC物理服务器的带外网络和部署网络
   */
  async RemoveChcAssistVpc(
    req: RemoveChcAssistVpcRequest,
    cb?: (error: string, rep: RemoveChcAssistVpcResponse) => void
  ): Promise<RemoveChcAssistVpcResponse> {
    return this.request("RemoveChcAssistVpc", req, cb)
  }

  /**
     * 本接口 ( DescribeInstanceVncUrl ) 用于查询实例管理终端地址，获取的地址可用于实例的 VNC 登录。

* 处于 `STOPPED` 状态的机器无法使用此功能。
* 管理终端地址的有效期为 15 秒，调用接口成功后如果 15 秒内不使用该链接进行访问，管理终端地址自动失效，您需要重新查询。
* 管理终端地址一旦被访问，将自动失效，您需要重新查询。
* 如果连接断开，每分钟内重新连接的次数不能超过 30 次。
获取到 `InstanceVncUrl` 后，您需要在链接 `https://img.qcloud.com/qcloud/app/active_vnc/index.html?` 末尾加上参数 `InstanceVncUrl=xxxx`。

  - 参数 `InstanceVncUrl` ：调用接口成功后会返回的 `InstanceVncUrl` 的值。

    最后组成的 URL 格式如下：

```
https://img.qcloud.com/qcloud/app/active_vnc/index.html?InstanceVncUrl=wss%3A%2F%2Fbjvnc.qcloud.com%3A26789%2Fvnc%3Fs%3DaHpjWnRVMFNhYmxKdDM5MjRHNlVTSVQwajNUSW0wb2tBbmFtREFCTmFrcy8vUUNPMG0wSHZNOUUxRm5PMmUzWmFDcWlOdDJIbUJxSTZDL0RXcHZxYnZZMmRkWWZWcEZia2lyb09XMzdKNmM9
```

     */
  async DescribeInstanceVncUrl(
    req: DescribeInstanceVncUrlRequest,
    cb?: (error: string, rep: DescribeInstanceVncUrlResponse) => void
  ): Promise<DescribeInstanceVncUrlResponse> {
    return this.request("DescribeInstanceVncUrl", req, cb)
  }

  /**
     * 本接口 (ModifyInstancesProject) 用于修改实例所属项目。

* 项目为一个虚拟概念，用户可以在一个账户下面建立多个项目，每个项目中管理不同的资源；将多个不同实例分属到不同项目中，后续使用 [DescribeInstances](https://cloud.tencent.com/document/api/213/15728)接口查询实例，项目ID可用于过滤结果。
* 绑定负载均衡的实例不支持修改实例所属项目，请先使用[DeregisterInstancesFromLoadBalancer](https://cloud.tencent.com/document/api/214/1258)接口解绑负载均衡。
* 支持批量操作。每次请求批量实例的上限为100。
* 实例操作结果可以通过调用 [DescribeInstances](https://cloud.tencent.com/document/api/213/15728#.E7.A4.BA.E4.BE.8B3-.E6.9F.A5.E8.AF.A2.E5.AE.9E.E4.BE.8B.E7.9A.84.E6.9C.80.E6.96.B0.E6.93.8D.E4.BD.9C.E6.83.85.E5.86.B5) 接口查询，如果实例的最新操作状态(LatestOperationState)为“SUCCESS”，则代表操作成功。
     */
  async ModifyInstancesProject(
    req: ModifyInstancesProjectRequest,
    cb?: (error: string, rep: ModifyInstancesProjectResponse) => void
  ): Promise<ModifyInstancesProjectResponse> {
    return this.request("ModifyInstancesProject", req, cb)
  }

  /**
     * 本接口 (DescribeKeyPairs) 用于查询密钥对信息。

* 密钥对是通过一种算法生成的一对密钥，在生成的密钥对中，一个向外界公开，称为公钥；另一个用户自己保留，称为私钥。密钥对的公钥内容可以通过这个接口查询，但私钥内容系统不保留。
     */
  async DescribeKeyPairs(
    req: DescribeKeyPairsRequest,
    cb?: (error: string, rep: DescribeKeyPairsResponse) => void
  ): Promise<DescribeKeyPairsResponse> {
    return this.request("DescribeKeyPairs", req, cb)
  }

  /**
     * 本接口 (InquiryPriceModifyInstancesChargeType) 用于切换实例的计费模式询价。


* 关机不收费的实例、`批量计算型BC1`和`批量计算型BS1`机型族的实例、设置定时销毁的实例、竞价实例不支持该操作。
     */
  async InquiryPriceModifyInstancesChargeType(
    req: InquiryPriceModifyInstancesChargeTypeRequest,
    cb?: (error: string, rep: InquiryPriceModifyInstancesChargeTypeResponse) => void
  ): Promise<InquiryPriceModifyInstancesChargeTypeResponse> {
    return this.request("InquiryPriceModifyInstancesChargeType", req, cb)
  }

  /**
   * 本接口（DescribeInternetChargeTypeConfigs）用于查询网络的计费类型。
   */
  async DescribeInternetChargeTypeConfigs(
    req?: DescribeInternetChargeTypeConfigsRequest,
    cb?: (error: string, rep: DescribeInternetChargeTypeConfigsResponse) => void
  ): Promise<DescribeInternetChargeTypeConfigsResponse> {
    return this.request("DescribeInternetChargeTypeConfigs", req, cb)
  }

  /**
     * 本接口 (RebootInstances) 用于重启实例。

* 只有状态为`RUNNING`的实例才可以进行此操作。
* 接口调用成功时，实例会进入`REBOOTING`状态；重启实例成功时，实例会进入`RUNNING`状态。
* 支持强制重启。强制重启的效果等同于关闭物理计算机的电源开关再重新启动。强制重启可能会导致数据丢失或文件系统损坏，请仅在服务器不能正常重启时使用。
* 支持批量操作，每次请求批量实例的上限为100。
* 实例操作结果可以通过调用 [DescribeInstances](https://cloud.tencent.com/document/api/213/15728#.E7.A4.BA.E4.BE.8B3-.E6.9F.A5.E8.AF.A2.E5.AE.9E.E4.BE.8B.E7.9A.84.E6.9C.80.E6.96.B0.E6.93.8D.E4.BD.9C.E6.83.85.E5.86.B5) 接口查询，如果实例的最新操作状态(LatestOperationState)为“SUCCESS”，则代表操作成功。
     */
  async RebootInstances(
    req: RebootInstancesRequest,
    cb?: (error: string, rep: RebootInstancesResponse) => void
  ): Promise<RebootInstancesResponse> {
    return this.request("RebootInstances", req, cb)
  }

  /**
   * 本接口 (InquiryPriceRenewHosts) 用于续费包年包月`CDH`实例询价。
   * 只支持查询包年包月`CDH`实例的续费价格。
   */
  async InquiryPriceRenewHosts(
    req: InquiryPriceRenewHostsRequest,
    cb?: (error: string, rep: InquiryPriceRenewHostsResponse) => void
  ): Promise<InquiryPriceRenewHostsResponse> {
    return this.request("InquiryPriceRenewHosts", req, cb)
  }

  /**
   * 本接口(DescribeImageFromFamily) 用于查看镜像族内可用镜像信息。
   */
  async DescribeImageFromFamily(
    req: DescribeImageFromFamilyRequest,
    cb?: (error: string, rep: DescribeImageFromFamilyResponse) => void
  ): Promise<DescribeImageFromFamilyResponse> {
    return this.request("DescribeImageFromFamily", req, cb)
  }

  /**
     * 本接口 (StopInstances) 用于关闭一个或多个实例。

* 只有状态为`RUNNING`的实例才可以进行此操作。
* 接口调用成功时，实例会进入`STOPPING`状态；关闭实例成功时，实例会进入`STOPPED`状态。
* 支持强制关闭。强制关机的效果等同于关闭物理计算机的电源开关。强制关机可能会导致数据丢失或文件系统损坏，请仅在服务器不能正常关机时使用。
* 支持批量操作。每次请求批量实例的上限为100。
* 本接口为异步接口，关闭实例请求发送成功后会返回一个RequestId，此时操作并未立即完成。实例操作结果可以通过调用 [DescribeInstances](https://cloud.tencent.com/document/api/213/15728#.E7.A4.BA.E4.BE.8B3-.E6.9F.A5.E8.AF.A2.E5.AE.9E.E4.BE.8B.E7.9A.84.E6.9C.80.E6.96.B0.E6.93.8D.E4.BD.9C.E6.83.85.E5.86.B5) 接口查询，如果实例的最新操作状态(LatestOperationState)为“SUCCESS”，则代表关闭实例操作成功。
     */
  async StopInstances(
    req: StopInstancesRequest,
    cb?: (error: string, rep: StopInstancesResponse) => void
  ): Promise<StopInstancesResponse> {
    return this.request("StopInstances", req, cb)
  }

  /**
   * 修改高性能计算集群属性。
   */
  async ModifyHpcClusterAttribute(
    req: ModifyHpcClusterAttributeRequest,
    cb?: (error: string, rep: ModifyHpcClusterAttributeResponse) => void
  ): Promise<ModifyHpcClusterAttributeResponse> {
    return this.request("ModifyHpcClusterAttribute", req, cb)
  }

  /**
     * 本接口 (ModifyKeyPairAttribute) 用于修改密钥对属性。

* 修改密钥对ID所指定的密钥对的名称和描述信息。
* 密钥对名称不能和已经存在的密钥对的名称重复。
* 密钥对ID是密钥对的唯一标识，不可修改。
* 密钥对名称和描述信息必须指定其中之一，也支持同时指定。
     */
  async ModifyKeyPairAttribute(
    req: ModifyKeyPairAttributeRequest,
    cb?: (error: string, rep: ModifyKeyPairAttributeResponse) => void
  ): Promise<ModifyKeyPairAttributeResponse> {
    return this.request("ModifyKeyPairAttribute", req, cb)
  }

  /**
     * 本接口(DescribeImages) 用于查看镜像列表。

* 可以通过指定镜像ID来查询指定镜像的详细信息，或通过设定过滤器来查询满足过滤条件的镜像的详细信息。
* 指定偏移(Offset)和限制(Limit)来选择结果中的一部分，默认返回满足条件的前20个镜像信息。
     */
  async DescribeImages(
    req: DescribeImagesRequest,
    cb?: (error: string, rep: DescribeImagesResponse) => void
  ): Promise<DescribeImagesResponse> {
    return this.request("DescribeImages", req, cb)
  }

  /**
   * 本接口 (CreateDisasterRecoverGroup)用于创建[分散置放群组](https://cloud.tencent.com/document/product/213/15486)。创建好的置放群组，可在[创建实例](https://cloud.tencent.com/document/api/213/15730)时指定。
   */
  async CreateDisasterRecoverGroup(
    req: CreateDisasterRecoverGroupRequest,
    cb?: (error: string, rep: CreateDisasterRecoverGroupResponse) => void
  ): Promise<CreateDisasterRecoverGroupResponse> {
    return this.request("CreateDisasterRecoverGroup", req, cb)
  }

  /**
     * 本接口 (DescribeInstances) 用于查询一个或多个实例的详细信息。

* 可以根据实例`ID`、实例名称或者实例计费模式等信息来查询实例的详细信息。过滤信息详细请见过滤器`Filter`。
* 如果参数为空，返回当前用户一定数量（`Limit`所指定的数量，默认为20）的实例。
* 支持查询实例的最新操作（LatestOperation）以及最新操作状态(LatestOperationState)。
     */
  async DescribeInstances(
    req: DescribeInstancesRequest,
    cb?: (error: string, rep: DescribeInstancesResponse) => void
  ): Promise<DescribeInstancesResponse> {
    return this.request("DescribeInstances", req, cb)
  }

  /**
   * 本接口（DescribeLaunchTemplateVersions）用于查询实例模板版本信息。
   */
  async DescribeLaunchTemplateVersions(
    req: DescribeLaunchTemplateVersionsRequest,
    cb?: (error: string, rep: DescribeLaunchTemplateVersionsResponse) => void
  ): Promise<DescribeLaunchTemplateVersionsResponse> {
    return this.request("DescribeLaunchTemplateVersions", req, cb)
  }

  /**
     * 本接口 (DescribeInstanceInternetBandwidthConfigs) 用于查询实例带宽配置。

* 只支持查询`BANDWIDTH_PREPAID`（ 预付费按带宽结算 ）计费模式的带宽配置。
* 接口返回实例的所有带宽配置信息（包含历史的带宽配置信息）。
     */
  async DescribeInstanceInternetBandwidthConfigs(
    req: DescribeInstanceInternetBandwidthConfigsRequest,
    cb?: (error: string, rep: DescribeInstanceInternetBandwidthConfigsResponse) => void
  ): Promise<DescribeInstanceInternetBandwidthConfigsResponse> {
    return this.request("DescribeInstanceInternetBandwidthConfigs", req, cb)
  }

  /**
     * 本接口 (InquiryPriceTerminateInstances) 用于退还实例询价。

* 查询退还实例可以返还的费用。
* 在退还包年包月实例时，使用ReleasePrepaidDataDisks参数，会在返回值中包含退还挂载的包年包月数据盘返还的费用。
* 支持批量操作，每次请求批量实例的上限为100。如果批量实例存在不允许操作的实例，操作会以特定错误码返回。
     */
  async InquiryPriceTerminateInstances(
    req: InquiryPriceTerminateInstancesRequest,
    cb?: (error: string, rep: InquiryPriceTerminateInstancesResponse) => void
  ): Promise<InquiryPriceTerminateInstancesResponse> {
    return this.request("InquiryPriceTerminateInstances", req, cb)
  }

  /**
     * 本接口（DeleteImages）用于删除一个或多个镜像。

* 当[镜像状态](https://cloud.tencent.com/document/product/213/15753#Image)为`创建中`和`使用中`时, 不允许删除。镜像状态可以通过[DescribeImages](https://cloud.tencent.com/document/api/213/9418)获取。
* 每个地域最多只支持创建500个自定义镜像，删除镜像可以释放账户的配额。
* 当镜像正在被其它账户分享时，不允许删除。
     */
  async DeleteImages(
    req: DeleteImagesRequest,
    cb?: (error: string, rep: DeleteImagesResponse) => void
  ): Promise<DeleteImagesResponse> {
    return this.request("DeleteImages", req, cb)
  }

  /**
   * 本接口（DeleteLaunchTemplateVersions）用于删除一个或者多个实例启动模板版本。
   */
  async DeleteLaunchTemplateVersions(
    req: DeleteLaunchTemplateVersionsRequest,
    cb?: (error: string, rep: DeleteLaunchTemplateVersionsResponse) => void
  ): Promise<DeleteLaunchTemplateVersionsResponse> {
    return this.request("DeleteLaunchTemplateVersions", req, cb)
  }

  /**
     * 本接口 (ResetInstancesPassword) 用于将实例操作系统的密码重置为用户指定的密码。

*如果是修改系统管理员密码：实例的操作系统不同，管理员账号也会不一样(`Windows`为`Administrator`，`Ubuntu`为`ubuntu`，其它系统为`root`)。
* 重置处于运行中状态的实例密码，需要设置关机参数`ForceStop`为`TRUE`。如果没有显式指定强制关机参数，则只有处于关机状态的实例才允许执行重置密码操作。
* 支持批量操作。将多个实例操作系统的密码重置为相同的密码。每次请求批量实例的上限为100。
* 实例操作结果可以通过调用 [DescribeInstances](https://cloud.tencent.com/document/api/213/15728#.E7.A4.BA.E4.BE.8B3-.E6.9F.A5.E8.AF.A2.E5.AE.9E.E4.BE.8B.E7.9A.84.E6.9C.80.E6.96.B0.E6.93.8D.E4.BD.9C.E6.83.85.E5.86.B5) 接口查询，如果实例的最新操作状态(LatestOperationState)为“SUCCESS”，则代表操作成功。
     */
  async ResetInstancesPassword(
    req: ResetInstancesPasswordRequest,
    cb?: (error: string, rep: ResetInstancesPasswordResponse) => void
  ): Promise<ResetInstancesPasswordResponse> {
    return this.request("ResetInstancesPassword", req, cb)
  }

  /**
     * 本接口 (ResizeInstanceDisks) 用于扩容实例的磁盘。

* 目前只支持扩容非弹性盘（[ DescribeDisks ](https://cloud.tencent.com/document/api/362/16315)接口返回值中的`Portable`为`false`表示非弹性）。
* 对于包年包月实例，使用该接口会涉及扣费，请确保账户余额充足。可通过[ DescribeAccountBalance ](https://cloud.tencent.com/document/product/555/20253)接口查询账户余额。
* 目前只支持扩容一块数据盘。
* 默认扩容方式为关机后扩容。
* 实例操作结果可以通过调用 [DescribeInstances](https://cloud.tencent.com/document/api/213/15728#.E7.A4.BA.E4.BE.8B3-.E6.9F.A5.E8.AF.A2.E5.AE.9E.E4.BE.8B.E7.9A.84.E6.9C.80.E6.96.B0.E6.93.8D.E4.BD.9C.E6.83.85.E5.86.B5) 接口查询，如果实例的最新操作状态(LatestOperationState)为“SUCCESS”，则代表操作成功。
* 如果是系统盘，目前只支持扩容，不支持缩容。
     */
  async ResizeInstanceDisks(
    req: ResizeInstanceDisksRequest,
    cb?: (error: string, rep: ResizeInstanceDisksResponse) => void
  ): Promise<ResizeInstanceDisksResponse> {
    return this.request("ResizeInstanceDisks", req, cb)
  }

  /**
   * 本接口(DescribeZones)用于查询可用区信息。
   */
  async DescribeZones(
    req?: DescribeZonesRequest,
    cb?: (error: string, rep: DescribeZonesResponse) => void
  ): Promise<DescribeZonesResponse> {
    return this.request("DescribeZones", req, cb)
  }

  /**
   * 本接口(DescribeImageQuota)用于查询用户账号的镜像配额。
   */
  async DescribeImageQuota(
    req?: DescribeImageQuotaRequest,
    cb?: (error: string, rep: DescribeImageQuotaResponse) => void
  ): Promise<DescribeImageQuotaResponse> {
    return this.request("DescribeImageQuota", req, cb)
  }

  /**
   * 查询CHC物理服务器禁止做的操作，返回给用户
   */
  async DescribeChcDeniedActions(
    req: DescribeChcDeniedActionsRequest,
    cb?: (error: string, rep: DescribeChcDeniedActionsResponse) => void
  ): Promise<DescribeChcDeniedActionsResponse> {
    return this.request("DescribeChcDeniedActions", req, cb)
  }

  /**
   * 本接口(DescribeAccountQuota)用于查询用户配额详情。
   */
  async DescribeAccountQuota(
    req: DescribeAccountQuotaRequest,
    cb?: (error: string, rep: DescribeAccountQuotaResponse) => void
  ): Promise<DescribeAccountQuotaResponse> {
    return this.request("DescribeAccountQuota", req, cb)
  }

  /**
   * 配置CHC物理服务器部署网络
   */
  async ConfigureChcDeployVpc(
    req: ConfigureChcDeployVpcRequest,
    cb?: (error: string, rep: ConfigureChcDeployVpcResponse) => void
  ): Promise<ConfigureChcDeployVpcResponse> {
    return this.request("ConfigureChcDeployVpc", req, cb)
  }

  /**
     * 本接口 (InquiryPriceResetInstancesType) 用于调整实例的机型询价。

* 目前只支持[系统盘类型](https://cloud.tencent.com/document/product/213/15753#SystemDisk)是`CLOUD_BSSD`、`CLOUD_PREMIUM`、`CLOUD_SSD`类型的实例使用该接口进行调整机型询价。
* 目前不支持[CDH](https://cloud.tencent.com/document/product/416)实例使用该接口调整机型询价。
     */
  async InquiryPriceResetInstancesType(
    req: InquiryPriceResetInstancesTypeRequest,
    cb?: (error: string, rep: InquiryPriceResetInstancesTypeResponse) => void
  ): Promise<InquiryPriceResetInstancesTypeResponse> {
    return this.request("InquiryPriceResetInstancesType", req, cb)
  }

  /**
   * 本接口(ProgramFpgaImage)用于在线烧录由客户提供的FPGA镜像文件到指定实例的指定FPGA卡上。
   * 只支持对单个实例发起在线烧录FPGA镜像的操作。
   * 支持对单个实例的多块FPGA卡同时烧录FPGA镜像，DBDFs参数为空时，默认对指定实例的所有FPGA卡进行烧录。
   */
  async ProgramFpgaImage(
    req: ProgramFpgaImageRequest,
    cb?: (error: string, rep: ProgramFpgaImageResponse) => void
  ): Promise<ProgramFpgaImageResponse> {
    return this.request("ProgramFpgaImage", req, cb)
  }

  /**
   * 本接口（CreateLaunchTemplateVersion）根据指定的实例模板ID以及对应的模板版本号创建新的实例启动模板，若未指定模板版本号则使用默认版本号。每个实例启动模板最多创建30个版本。
   */
  async CreateLaunchTemplateVersion(
    req: CreateLaunchTemplateVersionRequest,
    cb?: (error: string, rep: CreateLaunchTemplateVersionResponse) => void
  ): Promise<CreateLaunchTemplateVersionResponse> {
    return this.request("CreateLaunchTemplateVersion", req, cb)
  }

  /**
   * 提供导出自定义镜像到指定COS存储桶的能力
   */
  async ExportImages(
    req: ExportImagesRequest,
    cb?: (error: string, rep: ExportImagesResponse) => void
  ): Promise<ExportImagesResponse> {
    return this.request("ExportImages", req, cb)
  }

  /**
     * 本接口 (RenewInstances) 用于续费包年包月实例。

* 只支持操作包年包月实例。
* 续费时请确保账户余额充足。可通过[DescribeAccountBalance](https://cloud.tencent.com/document/product/555/20253)接口查询账户余额。
* 实例操作结果可以通过调用 [DescribeInstances](https://cloud.tencent.com/document/api/213/15728#.E7.A4.BA.E4.BE.8B3-.E6.9F.A5.E8.AF.A2.E5.AE.9E.E4.BE.8B.E7.9A.84.E6.9C.80.E6.96.B0.E6.93.8D.E4.BD.9C.E6.83.85.E5.86.B5) 接口查询，如果实例的最新操作状态(LatestOperationState)为“SUCCESS”，则代表操作成功。
     */
  async RenewInstances(
    req: RenewInstancesRequest,
    cb?: (error: string, rep: RenewInstancesResponse) => void
  ): Promise<RenewInstancesResponse> {
    return this.request("RenewInstances", req, cb)
  }

  /**
     * 本接口 (ResetInstancesInternetMaxBandwidth) 用于调整实例公网带宽上限。

* 不同机型带宽上限范围不一致，具体限制详见[公网带宽上限](https://cloud.tencent.com/document/product/213/12523)。
* 对于 `BANDWIDTH_PREPAID` 计费方式的带宽，需要输入参数 `StartTime` 和 `EndTime` ，指定调整后的带宽的生效时间段。在这种场景下目前不支持调小带宽，会涉及扣费，请确保账户余额充足。可通过 [DescribeAccountBalance](https://cloud.tencent.com/document/product/555/20253)接口查询账户余额。
* 对于 `TRAFFIC_POSTPAID_BY_HOUR` 、 `BANDWIDTH_POSTPAID_BY_HOUR` 和 `BANDWIDTH_PACKAGE` 计费方式的带宽，使用该接口调整带宽上限是实时生效的，可以在带宽允许的范围内调大或者调小带宽，不支持输入参数 `StartTime` 和 `EndTime` 。
* 接口不支持调整 `BANDWIDTH_POSTPAID_BY_MONTH` 计费方式的带宽。
* 接口不支持批量调整 `BANDWIDTH_PREPAID` 和 `BANDWIDTH_POSTPAID_BY_HOUR` 计费方式的带宽。
* 接口不支持批量调整混合计费方式的带宽。例如不支持同时调整 `TRAFFIC_POSTPAID_BY_HOUR` 和 `BANDWIDTH_PACKAGE` 计费方式的带宽。
* 实例操作结果可以通过调用 [DescribeInstances](https://cloud.tencent.com/document/api/213/15728#.E7.A4.BA.E4.BE.8B3-.E6.9F.A5.E8.AF.A2.E5.AE.9E.E4.BE.8B.E7.9A.84.E6.9C.80.E6.96.B0.E6.93.8D.E4.BD.9C.E6.83.85.E5.86.B5) 接口查询，如果实例的最新操作状态(LatestOperationState)为“SUCCESS”，则代表操作成功。
     */
  async ResetInstancesInternetMaxBandwidth(
    req: ResetInstancesInternetMaxBandwidthRequest,
    cb?: (error: string, rep: ResetInstancesInternetMaxBandwidthResponse) => void
  ): Promise<ResetInstancesInternetMaxBandwidthResponse> {
    return this.request("ResetInstancesInternetMaxBandwidth", req, cb)
  }

  /**
   * 本接口 (DescribeDisasterRecoverGroups)用于查询[分散置放群组](https://cloud.tencent.com/document/product/213/15486)信息。
   */
  async DescribeDisasterRecoverGroups(
    req: DescribeDisasterRecoverGroupsRequest,
    cb?: (error: string, rep: DescribeDisasterRecoverGroupsResponse) => void
  ): Promise<DescribeDisasterRecoverGroupsResponse> {
    return this.request("DescribeDisasterRecoverGroups", req, cb)
  }

  /**
     * 本接口 (DescribeChcHosts) 用于查询一个或多个CHC物理服务器详细信息。

* 可以根据实例`ID`、实例名称或者设备类型等信息来查询实例的详细信息。过滤信息详细请见过滤器`Filter`。
* 如果参数为空，返回当前用户一定数量（`Limit`所指定的数量，默认为20）的实例。
     */
  async DescribeChcHosts(
    req: DescribeChcHostsRequest,
    cb?: (error: string, rep: DescribeChcHostsResponse) => void
  ): Promise<DescribeChcHostsResponse> {
    return this.request("DescribeChcHosts", req, cb)
  }

  /**
     * 本接口 (DescribeInstanceTypeConfigs) 用于查询实例机型配置。

* 可以根据`zone`、`instance-family`、`instance-type`来查询实例机型配置。过滤条件详见过滤器[`Filter`](https://cloud.tencent.com/document/api/213/15753#Filter)。
* 如果参数为空，返回指定地域的所有实例机型配置。
     */
  async DescribeInstanceTypeConfigs(
    req: DescribeInstanceTypeConfigsRequest,
    cb?: (error: string, rep: DescribeInstanceTypeConfigsResponse) => void
  ): Promise<DescribeInstanceTypeConfigsResponse> {
    return this.request("DescribeInstanceTypeConfigs", req, cb)
  }

  /**
     * 本接口 (ModifyInstanceDiskType) 用于修改实例硬盘介质类型。

* 只支持实例的本地系统盘、本地数据盘转化成指定云硬盘介质。
* 只支持实例在关机状态下转换成指定云硬盘介质。
* 不支持竞价实例类型。
* 若实例同时存在本地系统盘和本地数据盘，需同时调整系统盘和数据盘的介质类型，不支持单独针对本地系统盘或本地数据盘修改介质类型。
* 修改前请确保账户余额充足。可通过[DescribeAccountBalance](https://cloud.tencent.com/document/product/378/4397)接口查询账户余额。
     */
  async ModifyInstanceDiskType(
    req: ModifyInstanceDiskTypeRequest,
    cb?: (error: string, rep: ModifyInstanceDiskTypeResponse) => void
  ): Promise<ModifyInstanceDiskTypeResponse> {
    return this.request("ModifyInstanceDiskType", req, cb)
  }
}
