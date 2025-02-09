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
  RunDockerContainersRequest,
  DescribeDockerContainersRequest,
  AssociateInstancesKeyPairsResponse,
  DescribeInstancesTrafficPackagesRequest,
  DescribeDisksDeniedActionsRequest,
  DockerContainerPublishPort,
  InquirePriceCreateBlueprintRequest,
  DescribeDiskBackupsRequest,
  DescribeInstancesDeniedActionsRequest,
  DeleteKeyPairsResponse,
  DescribeFirewallTemplateRulesRequest,
  AttachCcnRequest,
  CreateInstancesRequest,
  DescribeZonesRequest,
  RebootInstancesResponse,
  RegionInfo,
  DescribeBlueprintInstancesResponse,
  InstanceDeniedActions,
  InquirePriceCreateDisksRequest,
  ModifyBundle,
  DetachCcnResponse,
  ShareBlueprintAcrossAccountsRequest,
  BlueprintPrice,
  DescribeScenesResponse,
  InquirePriceRenewInstancesResponse,
  DeleteFirewallRulesResponse,
  ModifyInstancesAttributeRequest,
  DescribeDockerContainerDetailRequest,
  DescribeGeneralResourceQuotasRequest,
  RestartDockerContainersRequest,
  DeleteKeyPairsRequest,
  RerunDockerContainerResponse,
  ResetInstanceBlueprint,
  DescribeBundlesResponse,
  DeleteFirewallTemplateRulesResponse,
  DescribeFirewallTemplatesRequest,
  ModifyInstancesBundleRequest,
  DeleteDiskBackupsRequest,
  InquirePriceRenewInstancesRequest,
  DiscountDetail,
  DescribeDiskConfigsRequest,
  DescribeFirewallTemplateQuotaResponse,
  DescribeRegionsResponse,
  DescribeFirewallTemplateApplyRecordsRequest,
  DescribeDiskBackupsResponse,
  AttachDisksRequest,
  ModifyDiskBackupsAttributeRequest,
  AttachCcnResponse,
  RebootInstancesRequest,
  ResetAttachCcnRequest,
  CreateDisksRequest,
  AssociateInstancesKeyPairsRequest,
  DockerContainer,
  CancelShareBlueprintAcrossAccountsResponse,
  DescribeSnapshotsRequest,
  TerminateDisksResponse,
  DiskBackup,
  DescribeInstancesTrafficPackagesResponse,
  DescribeDiskBackupsDeniedActionsRequest,
  KeyPair,
  DescribeFirewallRulesTemplateRequest,
  DescribeDockerContainerConfigurationRequest,
  ModifyBlueprintAttributeRequest,
  InquirePriceRenewDisksRequest,
  ShareBlueprintAcrossAccountsResponse,
  FirewallTemplateRuleInfo,
  Disk,
  ModifyFirewallRulesResponse,
  ZoneInfo,
  DescribeBlueprintInstancesRequest,
  ApplyInstanceSnapshotResponse,
  DetachDisksRequest,
  ModifyFirewallRulesRequest,
  CreateBlueprintRequest,
  DeleteFirewallRulesRequest,
  RerunDockerContainerRequest,
  DescribeInstanceVncUrlRequest,
  ModifyFirewallRuleDescriptionRequest,
  InstanceTrafficPackage,
  SnapshotDeniedActions,
  TerminateInstancesResponse,
  FirewallTemplateApplyRecordDetail,
  DescribeInstancesDiskNumRequest,
  DetailPrice,
  StopDockerContainersResponse,
  ApplyDiskBackupResponse,
  DescribeBlueprintsRequest,
  InstanceReturnable,
  DescribeInstancesDeniedActionsResponse,
  RestartDockerContainersResponse,
  CreateFirewallTemplateRequest,
  RemoveDockerContainersRequest,
  RenewDisksRequest,
  ModifyDisksAttributeRequest,
  ModifyDisksBackupQuotaRequest,
  DescribeKeyPairsResponse,
  FirewallTemplate,
  DescribeSnapshotsDeniedActionsResponse,
  DescribeScenesRequest,
  SoftwareDetail,
  DeleteDiskBackupsResponse,
  DeleteSnapshotsRequest,
  ModifyDisksRenewFlagResponse,
  ModifySnapshotAttributeRequest,
  DeleteSnapshotsResponse,
  ReplaceFirewallTemplateRuleResponse,
  DescribeDisksResponse,
  StartInstancesRequest,
  DescribeBundleDiscountResponse,
  DescribeAllScenesRequest,
  ModifyDisksRenewFlagRequest,
  StartDockerContainersResponse,
  DisassociateInstancesKeyPairsRequest,
  DescribeFirewallTemplateQuotaRequest,
  DataDiskPrice,
  Command,
  SceneInfo,
  ImportKeyPairRequest,
  DescribeDockerActivitiesRequest,
  ImportKeyPairResponse,
  DeleteBlueprintsResponse,
  ModifyInstancesLoginKeyPairAttributeRequest,
  IsolateInstancesRequest,
  DeleteFirewallTemplateResponse,
  CreateInstancesResponse,
  ModifyBlueprintAttributeResponse,
  ModifyFirewallTemplateRequest,
  StopDockerContainersRequest,
  DescribeModifyInstanceBundlesRequest,
  DescribeRegionsRequest,
  InstanceIdentifier,
  DescribeInstancesDiskNumResponse,
  InquirePriceCreateBlueprintResponse,
  ResetFirewallTemplateRulesRequest,
  ModifyFirewallTemplateResponse,
  DescribeInstancesReturnableRequest,
  DiskReturnable,
  DescribeBlueprintsResponse,
  DescribeKeyPairsRequest,
  DescribeCcnAttachedInstancesRequest,
  SupportIpv6Detail,
  ApplyDiskBackupRequest,
  ResetInstancesPasswordResponse,
  StartInstancesResponse,
  LoginSettings,
  DescribeDockerContainerConfigurationResponse,
  Instance,
  DockerContainerVolume,
  StopInstancesRequest,
  IsolateInstancesResponse,
  CreateKeyPairResponse,
  InstanceViolationDetail,
  DescribeInstanceVncUrlResponse,
  DescribeDockerActivitiesResponse,
  DescribeFirewallTemplateRuleQuotaRequest,
  CreateFirewallTemplateResponse,
  DescribeCcnAttachedInstancesResponse,
  DescribeBundlesRequest,
  Blueprint,
  InquirePriceCreateInstancesResponse,
  TotalPrice,
  DeniedAction,
  DescribeAllScenesResponse,
  ModifyInstancesLoginKeyPairAttributeResponse,
  InquirePriceRenewDisksResponse,
  Bundle,
  DiskConfig,
  CreateDiskBackupResponse,
  DescribeSnapshotsDeniedActionsRequest,
  DescribeDiskDiscountResponse,
  CreateFirewallTemplateRulesResponse,
  ModifyDockerContainerRequest,
  ResizeDisksRequest,
  DiskChargePrepaid,
  RunDockerContainersResponse,
  CreateKeyPairRequest,
  StopInstancesResponse,
  ResetInstancesPasswordRequest,
  DiskPrice,
  DescribeInstancesRequest,
  DescribeFirewallTemplateRuleQuotaResponse,
  DetachCcnRequest,
  RenameDockerContainerResponse,
  DockerActivity,
  DescribeFirewallTemplateApplyRecordsResponse,
  Filter,
  DescribeSnapshotsResponse,
  Snapshot,
  ApplyFirewallTemplateRequest,
  ModifyFirewallRuleDescriptionResponse,
  DescribeDiskDiscountRequest,
  CreateDisksResponse,
  AttachDisksResponse,
  DiskBackupDeniedActions,
  CreateDiskBackupRequest,
  CreateFirewallRulesRequest,
  Software,
  DescribeFirewallRulesResponse,
  DescribeInstancesReturnableResponse,
  ContainerEnv,
  TrafficPackage,
  FirewallRule,
  DeleteBlueprintsRequest,
  FirewallRuleInfo,
  CreateFirewallRulesResponse,
  DescribeDisksRequest,
  DescribeInstancesResponse,
  DescribeZonesResponse,
  CreateBlueprintResponse,
  DescribeFirewallTemplatesResponse,
  PolicyDetail,
  DetachDisksResponse,
  LoginConfiguration,
  DescribeResetInstanceBlueprintsRequest,
  RemoveDockerContainersResponse,
  DockerContainerConfiguration,
  ResetAttachCcnResponse,
  ModifyInstancesRenewFlagResponse,
  ApplyInstanceSnapshotRequest,
  DisassociateInstancesKeyPairsResponse,
  TerminateInstancesRequest,
  RenewDiskChargePrepaid,
  SystemDisk,
  ApplyFirewallTemplateResponse,
  TerminateDisksRequest,
  RenewDisksResponse,
  ResetInstanceRequest,
  ResizeDisksResponse,
  DescribeDiskConfigsResponse,
  CreateFirewallTemplateRulesRequest,
  InternetAccessible,
  ReplaceFirewallTemplateRuleRequest,
  InstancePriceDetail,
  DescribeDockerContainersResponse,
  ModifyDockerContainerResponse,
  DescribeDiskBackupsDeniedActionsResponse,
  DescribeInstanceLoginKeyPairAttributeRequest,
  FirewallTemplateApplyRecord,
  DescribeDockerContainerDetailResponse,
  DescribeBundleDiscountRequest,
  DescribeFirewallTemplateRulesResponse,
  DescribeDisksReturnableResponse,
  ModifyDiskBackupsAttributeResponse,
  DeleteFirewallTemplateRequest,
  IsolateDisksRequest,
  CreateInstanceSnapshotResponse,
  ModifyInstancesBundleResponse,
  GeneralResourceQuota,
  DescribeResetInstanceBlueprintsResponse,
  DescribeDisksReturnableRequest,
  ResetFirewallTemplateRulesResponse,
  AutoMountConfiguration,
  InstancePrice,
  Tag,
  ModifySnapshotAttributeResponse,
  ModifyDisksBackupQuotaResponse,
  DescribeGeneralResourceQuotasResponse,
  ModifyInstancesRenewFlagRequest,
  StartDockerContainersRequest,
  RenewInstancesRequest,
  DescribeFirewallRulesTemplateResponse,
  RenewInstancesResponse,
  RenameDockerContainerRequest,
  DescribeDisksDeniedActionsResponse,
  ResetInstanceResponse,
  IsolateDisksResponse,
  DescribeFirewallRulesRequest,
  FirewallTemplateRule,
  DiskDeniedActions,
  InquirePriceCreateInstancesRequest,
  Scene,
  CcnAttachedInstance,
  DescribeModifyInstanceBundlesResponse,
  AttachDetail,
  ModifyDisksAttributeResponse,
  CreateInstanceSnapshotRequest,
  CancelShareBlueprintAcrossAccountsRequest,
  BlueprintInstance,
  InquirePriceCreateDisksResponse,
  InstanceChargePrepaid,
  ModifyInstancesAttributeResponse,
  Price,
  DescribeInstanceLoginKeyPairAttributeResponse,
  DeleteFirewallTemplateRulesRequest,
} from "./lighthouse_models"

/**
 * lighthouse client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("lighthouse.tencentcloudapi.com", "2020-03-24", clientConfig)
  }

  /**
   * 本接口 (ModifyFirewallTemplate) 用于修改防火墙模板。
   */
  async ModifyFirewallTemplate(
    req: ModifyFirewallTemplateRequest,
    cb?: (error: string, rep: ModifyFirewallTemplateResponse) => void
  ): Promise<ModifyFirewallTemplateResponse> {
    return this.request("ModifyFirewallTemplate", req, cb)
  }

  /**
   * 本接口 (DeleteBlueprints) 用于删除镜像。
   */
  async DeleteBlueprints(
    req: DeleteBlueprintsRequest,
    cb?: (error: string, rep: DeleteBlueprintsResponse) => void
  ): Promise<DeleteBlueprintsResponse> {
    return this.request("DeleteBlueprints", req, cb)
  }

  /**
     * 本接口（CancelShareBlueprintAcrossAccounts）用于取消镜像跨账号共享。
指定的镜像ID必须为自定义镜像，且指定账号ID必须已进行共享。
     */
  async CancelShareBlueprintAcrossAccounts(
    req: CancelShareBlueprintAcrossAccountsRequest,
    cb?: (error: string, rep: CancelShareBlueprintAcrossAccountsResponse) => void
  ): Promise<CancelShareBlueprintAcrossAccountsResponse> {
    return this.request("CancelShareBlueprintAcrossAccounts", req, cb)
  }

  /**
     * 本接口（CreateFirewallRules）用于在实例上添加防火墙规则。


* FirewallVersion 为防火墙版本号，用户每次更新防火墙规则版本会自动加1，防止您更新的规则已过期，不填不考虑冲突。

在 FirewallRules 参数中：
* Protocol 字段支持输入 TCP，UDP，ICMP，ALL。
* Port 字段允许输入 ALL，或者一个单独的端口号，或者用逗号分隔的离散端口号，或者用减号分隔的两个端口号代表的端口范围。当 Port 为范围时，减号分隔的第一个端口号小于第二个端口号。当 Protocol 字段不是 TCP 或 UDP 时，Port 字段只能为空或 ALL。Port 字段长度不得超过 64。
* CidrBlock 字段允许输入符合 cidr 格式标准的任意字符串。租户之间网络隔离规则优先于防火墙中的内网规则。
* Action 字段只允许输入 ACCEPT 或 DROP。
* FirewallRuleDescription 字段长度不得超过 64。
     */
  async CreateFirewallRules(
    req: CreateFirewallRulesRequest,
    cb?: (error: string, rep: CreateFirewallRulesResponse) => void
  ): Promise<CreateFirewallRulesResponse> {
    return this.request("CreateFirewallRules", req, cb)
  }

  /**
   * 本接口（ModifyInstancesAttribute）用于修改实例的属性。
   * “实例名称”仅为方便用户自己管理之用。
   * 支持批量操作。每次请求批量实例的上限为 100。
   */
  async ModifyInstancesAttribute(
    req: ModifyInstancesAttributeRequest,
    cb?: (error: string, rep: ModifyInstancesAttributeResponse) => void
  ): Promise<ModifyInstancesAttributeResponse> {
    return this.request("ModifyInstancesAttribute", req, cb)
  }

  /**
   * 本接口 (DescribeCcnAttachedInstances) 用于查询云联网关联的实例信息。
   */
  async DescribeCcnAttachedInstances(
    req?: DescribeCcnAttachedInstancesRequest,
    cb?: (error: string, rep: DescribeCcnAttachedInstancesResponse) => void
  ): Promise<DescribeCcnAttachedInstancesResponse> {
    return this.request("DescribeCcnAttachedInstances", req, cb)
  }

  /**
   * 本接口（DeleteKeyPairs）用于删除密钥对。
   */
  async DeleteKeyPairs(
    req: DeleteKeyPairsRequest,
    cb?: (error: string, rep: DeleteKeyPairsResponse) => void
  ): Promise<DeleteKeyPairsResponse> {
    return this.request("DeleteKeyPairs", req, cb)
  }

  /**
   * 本接口（ModifyDisksRenewFlag）用于修改云硬盘续费标识。
   */
  async ModifyDisksRenewFlag(
    req: ModifyDisksRenewFlagRequest,
    cb?: (error: string, rep: ModifyDisksRenewFlagResponse) => void
  ): Promise<ModifyDisksRenewFlagResponse> {
    return this.request("ModifyDisksRenewFlag", req, cb)
  }

  /**
   * 重命名实例内的Docker容器，之后可以通过返回的ActivityId调用[DescribeDockerActivities](https://cloud.tencent.com/document/product/1207/95476)接口查询重命名情况。
   */
  async RenameDockerContainer(
    req: RenameDockerContainerRequest,
    cb?: (error: string, rep: RenameDockerContainerResponse) => void
  ): Promise<RenameDockerContainerResponse> {
    return this.request("RenameDockerContainer", req, cb)
  }

  /**
   * 本接口（ImportKeyPair）用于导入用户指定密钥对。
   */
  async ImportKeyPair(
    req: ImportKeyPairRequest,
    cb?: (error: string, rep: ImportKeyPairResponse) => void
  ): Promise<ImportKeyPairResponse> {
    return this.request("ImportKeyPair", req, cb)
  }

  /**
   * 本接口（InquirePriceCreateDisks）用于新购云硬盘询价。
   */
  async InquirePriceCreateDisks(
    req: InquirePriceCreateDisksRequest,
    cb?: (error: string, rep: InquirePriceCreateDisksResponse) => void
  ): Promise<InquirePriceCreateDisksResponse> {
    return this.request("InquirePriceCreateDisks", req, cb)
  }

  /**
     * 本接口 (TerminateInstances) 用于销毁实例。

* 处于 SHUTDOWN 状态的实例，可通过本接口销毁，且不可恢复。
* 支持批量操作，每次请求批量实例的上限为100。
* 本接口为异步接口，请求发送成功后会返回一个 RequestId，此时操作并未立即完成。实例操作结果可以通过调用 <a href="https://cloud.tencent.com/document/product/1207/47573" target="_blank">DescribeInstances</a> 接口查询，如果实例的最新操作状态 (LatestOperationState) 为“SUCCESS”，则代表操作成功。
     */
  async TerminateInstances(
    req: TerminateInstancesRequest,
    cb?: (error: string, rep: TerminateInstancesResponse) => void
  ): Promise<TerminateInstancesResponse> {
    return this.request("TerminateInstances", req, cb)
  }

  /**
   * 本接口（DescribeBundleDiscount）用于查询套餐折扣信息。
   */
  async DescribeBundleDiscount(
    req: DescribeBundleDiscountRequest,
    cb?: (error: string, rep: DescribeBundleDiscountResponse) => void
  ): Promise<DescribeBundleDiscountResponse> {
    return this.request("DescribeBundleDiscount", req, cb)
  }

  /**
   * 本接口 (ModifyBlueprintAttribute) 用于修改镜像属性。
   */
  async ModifyBlueprintAttribute(
    req: ModifyBlueprintAttributeRequest,
    cb?: (error: string, rep: ModifyBlueprintAttributeResponse) => void
  ): Promise<ModifyBlueprintAttributeResponse> {
    return this.request("ModifyBlueprintAttribute", req, cb)
  }

  /**
   * 重启实例内的Docker容器，之后可以通过返回的ActivityId调用[DescribeDockerActivities](https://cloud.tencent.com/document/product/1207/95476)接口查询重启情况。
   */
  async RestartDockerContainers(
    req: RestartDockerContainersRequest,
    cb?: (error: string, rep: RestartDockerContainersResponse) => void
  ): Promise<RestartDockerContainersResponse> {
    return this.request("RestartDockerContainers", req, cb)
  }

  /**
   * 本接口 (DescribeFirewallTemplateRules) 用于查询防火墙模板规则列表。
   */
  async DescribeFirewallTemplateRules(
    req: DescribeFirewallTemplateRulesRequest,
    cb?: (error: string, rep: DescribeFirewallTemplateRulesResponse) => void
  ): Promise<DescribeFirewallTemplateRulesResponse> {
    return this.request("DescribeFirewallTemplateRules", req, cb)
  }

  /**
   * 本接口 (ModifyDiskBackupsAttribute) 用于修改云硬盘备份点属性。
   */
  async ModifyDiskBackupsAttribute(
    req: ModifyDiskBackupsAttributeRequest,
    cb?: (error: string, rep: ModifyDiskBackupsAttributeResponse) => void
  ): Promise<ModifyDiskBackupsAttributeResponse> {
    return this.request("ModifyDiskBackupsAttribute", req, cb)
  }

  /**
   * 查询实例内的Docker容器配置信息
   */
  async DescribeDockerContainerConfiguration(
    req: DescribeDockerContainerConfigurationRequest,
    cb?: (error: string, rep: DescribeDockerContainerConfigurationResponse) => void
  ): Promise<DescribeDockerContainerConfigurationResponse> {
    return this.request("DescribeDockerContainerConfiguration", req, cb)
  }

  /**
   * 本接口（InquirePriceRenewDisks）用于续费云硬盘询价。
   */
  async InquirePriceRenewDisks(
    req: InquirePriceRenewDisksRequest,
    cb?: (error: string, rep: InquirePriceRenewDisksResponse) => void
  ): Promise<InquirePriceRenewDisksResponse> {
    return this.request("InquirePriceRenewDisks", req, cb)
  }

  /**
   * 本接口(ModifyDisksAttribute)用于修改云硬盘属性。
   */
  async ModifyDisksAttribute(
    req: ModifyDisksAttributeRequest,
    cb?: (error: string, rep: ModifyDisksAttributeResponse) => void
  ): Promise<ModifyDisksAttributeResponse> {
    return this.request("ModifyDisksAttribute", req, cb)
  }

  /**
     * 后端代码已与23年2月4号下线
近90天只有一次调用记录，且明确返回前端接口下线错误信息

经评估无风险，操作接口下线

本接口用于设置实例默认登录密钥对属性。


     */
  async ModifyInstancesLoginKeyPairAttribute(
    req: ModifyInstancesLoginKeyPairAttributeRequest,
    cb?: (error: string, rep: ModifyInstancesLoginKeyPairAttributeResponse) => void
  ): Promise<ModifyInstancesLoginKeyPairAttributeResponse> {
    return this.request("ModifyInstancesLoginKeyPairAttribute", req, cb)
  }

  /**
   * 重新创建并运行实例内的Docker容器，之后可以通过返回的ActivityId调用[DescribeDockerActivities](https://cloud.tencent.com/document/product/1207/95476)接口查询重建情况。
   */
  async RerunDockerContainer(
    req: RerunDockerContainerRequest,
    cb?: (error: string, rep: RerunDockerContainerResponse) => void
  ): Promise<RerunDockerContainerResponse> {
    return this.request("RerunDockerContainer", req, cb)
  }

  /**
   * 本接口（DescribeDisksReturnable）用于查询云硬盘是否可退还。
   */
  async DescribeDisksReturnable(
    req: DescribeDisksReturnableRequest,
    cb?: (error: string, rep: DescribeDisksReturnableResponse) => void
  ): Promise<DescribeDisksReturnableResponse> {
    return this.request("DescribeDisksReturnable", req, cb)
  }

  /**
     * 本接口（ModifyFirewallRules）用于重置实例防火墙规则。

本接口先删除当前实例的所有防火墙规则，然后添加新的规则。

* FirewallVersion 用于指定要操作的防火墙的版本。传入 FirewallVersion 版本号若不等于当前防火墙的最新版本，将返回失败；若不传 FirewallVersion 则直接重置防火墙规则。

在 FirewallRules 参数中：
* Protocol 字段支持输入 TCP，UDP，ICMP，ALL。
* Port 字段允许输入 ALL，或者一个单独的端口号，或者用逗号分隔的离散端口号，或者用减号分隔的两个端口号代表的端口范围。当 Port 为范围时，减号分隔的第一个端口号小于第二个端口号。当 Protocol 字段不是 TCP 或 UDP 时，Port 字段只能为空或 ALL。Port 字段长度不得超过 64。
* CidrBlock 字段允许输入符合 cidr 格式标准的任意字符串。租户之间网络隔离规则优先于防火墙中的内网规则。
* Action 字段只允许输入 ACCEPT 或 DROP。
* FirewallRuleDescription 字段长度不得超过 64。
     */
  async ModifyFirewallRules(
    req: ModifyFirewallRulesRequest,
    cb?: (error: string, rep: ModifyFirewallRulesResponse) => void
  ): Promise<ModifyFirewallRulesResponse> {
    return this.request("ModifyFirewallRules", req, cb)
  }

  /**
   * 本接口(ResizeDisks)用于扩容云硬盘。该操作目前仅支持云硬盘类型为数据盘的云硬盘。
   */
  async ResizeDisks(
    req: ResizeDisksRequest,
    cb?: (error: string, rep: ResizeDisksResponse) => void
  ): Promise<ResizeDisksResponse> {
    return this.request("ResizeDisks", req, cb)
  }

  /**
   * 本接口 ( CreateDiskBackup  ) 用于创建指定云硬盘（当前只支持数据盘）的备份点。
   */
  async CreateDiskBackup(
    req: CreateDiskBackupRequest,
    cb?: (error: string, rep: CreateDiskBackupResponse) => void
  ): Promise<CreateDiskBackupResponse> {
    return this.request("CreateDiskBackup", req, cb)
  }

  /**
   * 本接口(DescribeDiskDiscount)用于查询云硬盘折扣信息。
   */
  async DescribeDiskDiscount(
    req: DescribeDiskDiscountRequest,
    cb?: (error: string, rep: DescribeDiskDiscountResponse) => void
  ): Promise<DescribeDiskDiscountResponse> {
    return this.request("DescribeDiskDiscount", req, cb)
  }

  /**
   * 本接口 (DescribeFirewallTemplateQuota) 用于查询防火墙模板配额。
   */
  async DescribeFirewallTemplateQuota(
    req?: DescribeFirewallTemplateQuotaRequest,
    cb?: (error: string, rep: DescribeFirewallTemplateQuotaResponse) => void
  ): Promise<DescribeFirewallTemplateQuotaResponse> {
    return this.request("DescribeFirewallTemplateQuota", req, cb)
  }

  /**
   * 本接口(DescribeAllScenes)用于查询全地域使用场景列表。
   */
  async DescribeAllScenes(
    req: DescribeAllScenesRequest,
    cb?: (error: string, rep: DescribeAllScenesResponse) => void
  ): Promise<DescribeAllScenesResponse> {
    return this.request("DescribeAllScenes", req, cb)
  }

  /**
   * 本接口 (CreateFirewallTemplate) 用于创建防火墙模板。
   */
  async CreateFirewallTemplate(
    req: CreateFirewallTemplateRequest,
    cb?: (error: string, rep: CreateFirewallTemplateResponse) => void
  ): Promise<CreateFirewallTemplateResponse> {
    return this.request("CreateFirewallTemplate", req, cb)
  }

  /**
   * 本接口（AttachDisks）用于挂载一个或多个云硬盘。
   */
  async AttachDisks(
    req: AttachDisksRequest,
    cb?: (error: string, rep: AttachDisksResponse) => void
  ): Promise<AttachDisksResponse> {
    return this.request("AttachDisks", req, cb)
  }

  /**
     * 本接口（DeleteDiskBackups）用于删除云硬盘备份点。
云硬盘备份点必须处于 NORMAL 状态，云硬盘备份点状态可以通过 [DescribeDiskBackups](https://cloud.tencent.com/document/api/1207/84379)接口查询，见输出参数中 DiskBackupState 字段解释。
     */
  async DeleteDiskBackups(
    req: DeleteDiskBackupsRequest,
    cb?: (error: string, rep: DeleteDiskBackupsResponse) => void
  ): Promise<DeleteDiskBackupsResponse> {
    return this.request("DeleteDiskBackups", req, cb)
  }

  /**
   * 本接口（AssociateInstancesKeyPairs）用于绑定用户指定密钥对到实例。
   * 只支持 [RUNNING, STOPPED] 状态的 LINUX_UNIX 操作系统的实例。处于 RUNNING 状态的实例会强制关机，然后绑定。
   * 将密钥的公钥写入到实例的 SSH 配置当中，用户就可以通过该密钥的私钥来登录实例。
   * 如果实例原来绑定过密钥，那么原来的密钥将失效。
   * 如果实例原来是通过密码登录，绑定密钥后无法使用密码登录。
   * 支持批量操作。每次请求批量实例的上限为 100。如果批量实例存在不允许操作的实例，操作会以特定错误码返回。
   * 本接口为异步接口，请求发送成功后会返回一个 RequestId，此时操作并未立即完成。实例操作结果可以通过调用 <a href="https://cloud.tencent.com/document/product/1207/47573" target="_blank">DescribeInstances</a> 接口查询，如果实例的最新操作状态（LatestOperationState）为“SUCCESS”，则代表操作成功。
   */
  async AssociateInstancesKeyPairs(
    req: AssociateInstancesKeyPairsRequest,
    cb?: (error: string, rep: AssociateInstancesKeyPairsResponse) => void
  ): Promise<AssociateInstancesKeyPairsResponse> {
    return this.request("AssociateInstancesKeyPairs", req, cb)
  }

  /**
   * 本接口 (DeleteFirewallTemplate) 用于删除防火墙模板。
   */
  async DeleteFirewallTemplate(
    req: DeleteFirewallTemplateRequest,
    cb?: (error: string, rep: DeleteFirewallTemplateResponse) => void
  ): Promise<DeleteFirewallTemplateResponse> {
    return this.request("DeleteFirewallTemplate", req, cb)
  }

  /**
     * 本接口（DisassociateInstancesKeyPairs）用于解除实例与指定密钥对的绑定关系。

* 只支持 [RUNNING, STOPPED] 状态的 LINUX_UNIX 操作系统的实例。处于 RUNNING 状态的实例会强制关机，然后解绑。
* 解绑密钥后，实例可以通过原来设置的密码登录。
* 如果原来没有设置密码，解绑后将无法使用 SSH 登录。可以调用 <a href="https://cloud.tencent.com/document/product/1207/55546" target="_blank">ResetInstancesPassword</a> 接口来设置登录密码。
* 支持批量操作。每次请求批量实例的上限为 100。
* 本接口为异步接口，请求发送成功后会返回一个 RequestId，此时操作并未立即完成。实例操作结果可以通过调用 <a href="https://cloud.tencent.com/document/product/1207/47573" target="_blank">DescribeInstances</a> 接口查询，如果实例的最新操作状态（LatestOperationState）为“SUCCESS”，则代表操作成功。
     */
  async DisassociateInstancesKeyPairs(
    req: DisassociateInstancesKeyPairsRequest,
    cb?: (error: string, rep: DisassociateInstancesKeyPairsResponse) => void
  ): Promise<DisassociateInstancesKeyPairsResponse> {
    return this.request("DisassociateInstancesKeyPairs", req, cb)
  }

  /**
   * 本接口（DescribeBlueprints）用于查询镜像信息。
   */
  async DescribeBlueprints(
    req: DescribeBlueprintsRequest,
    cb?: (error: string, rep: DescribeBlueprintsResponse) => void
  ): Promise<DescribeBlueprintsResponse> {
    return this.request("DescribeBlueprints", req, cb)
  }

  /**
     * 修改实例内的Docker容器，之后可以通过返回的ActivityId调用<a href="https://cloud.tencent.com/document/product/1207/95476" target="_blank">DescribeDockerActivities</a>接口查询重建情况。
请注意：本接口会重新创建并运行实例内的Docker容器。
     */
  async ModifyDockerContainer(
    req: ModifyDockerContainerRequest,
    cb?: (error: string, rep: ModifyDockerContainerResponse) => void
  ): Promise<ModifyDockerContainerResponse> {
    return this.request("ModifyDockerContainer", req, cb)
  }

  /**
     * 后端代码已与23年2月4号下线
近90天无调用记录
经评估，下线无风险，操作下线

本接口用于查询实例默认登录密钥属性。
     */
  async DescribeInstanceLoginKeyPairAttribute(
    req: DescribeInstanceLoginKeyPairAttributeRequest,
    cb?: (error: string, rep: DescribeInstanceLoginKeyPairAttributeResponse) => void
  ): Promise<DescribeInstanceLoginKeyPairAttributeResponse> {
    return this.request("DescribeInstanceLoginKeyPairAttribute", req, cb)
  }

  /**
   * 本接口（DescribeInstancesDeniedActions）用于查询一个或多个实例的操作限制列表信息。
   */
  async DescribeInstancesDeniedActions(
    req: DescribeInstancesDeniedActionsRequest,
    cb?: (error: string, rep: DescribeInstancesDeniedActionsResponse) => void
  ): Promise<DescribeInstancesDeniedActionsResponse> {
    return this.request("DescribeInstancesDeniedActions", req, cb)
  }

  /**
   * 本接口（InquiryPriceCreateInstances）用于创建实例询价。
   */
  async InquirePriceCreateInstances(
    req: InquirePriceCreateInstancesRequest,
    cb?: (error: string, rep: InquirePriceCreateInstancesResponse) => void
  ): Promise<InquirePriceCreateInstancesResponse> {
    return this.request("InquirePriceCreateInstances", req, cb)
  }

  /**
   * 本接口（CreateInstanceSnapshot）用于创建指定实例的系统盘快照。
   */
  async CreateInstanceSnapshot(
    req: CreateInstanceSnapshotRequest,
    cb?: (error: string, rep: CreateInstanceSnapshotResponse) => void
  ): Promise<CreateInstanceSnapshotResponse> {
    return this.request("CreateInstanceSnapshot", req, cb)
  }

  /**
   * 本接口(ModifyDisksBackupQuota)用于调整云硬盘备份点配额。该操作目前仅支持云硬盘类型为数据盘的云硬盘。
   */
  async ModifyDisksBackupQuota(
    req: ModifyDisksBackupQuotaRequest,
    cb?: (error: string, rep: ModifyDisksBackupQuotaResponse) => void
  ): Promise<ModifyDisksBackupQuotaResponse> {
    return this.request("ModifyDisksBackupQuota", req, cb)
  }

  /**
   * 本接口（DescribeRegions）用于查询地域信息。
   */
  async DescribeRegions(
    req?: DescribeRegionsRequest,
    cb?: (error: string, rep: DescribeRegionsResponse) => void
  ): Promise<DescribeRegionsResponse> {
    return this.request("DescribeRegions", req, cb)
  }

  /**
     * 本接口（ModifySnapshotAttribute）用于修改指定快照的属性。
<li>“快照名称”仅为方便用户自己管理之用。</li>
     */
  async ModifySnapshotAttribute(
    req: ModifySnapshotAttributeRequest,
    cb?: (error: string, rep: ModifySnapshotAttributeResponse) => void
  ): Promise<ModifySnapshotAttributeResponse> {
    return this.request("ModifySnapshotAttribute", req, cb)
  }

  /**
   * 查询实例内的Docker容器详情
   */
  async DescribeDockerContainerDetail(
    req: DescribeDockerContainerDetailRequest,
    cb?: (error: string, rep: DescribeDockerContainerDetailResponse) => void
  ): Promise<DescribeDockerContainerDetailResponse> {
    return this.request("DescribeDockerContainerDetail", req, cb)
  }

  /**
   * 本接口（DescribeBlueprintInstances）用于查询镜像实例信息。
   */
  async DescribeBlueprintInstances(
    req: DescribeBlueprintInstancesRequest,
    cb?: (error: string, rep: DescribeBlueprintInstancesResponse) => void
  ): Promise<DescribeBlueprintInstancesResponse> {
    return this.request("DescribeBlueprintInstances", req, cb)
  }

  /**
   * 查询实例内的容器列表。
   */
  async DescribeDockerContainers(
    req: DescribeDockerContainersRequest,
    cb?: (error: string, rep: DescribeDockerContainersResponse) => void
  ): Promise<DescribeDockerContainersResponse> {
    return this.request("DescribeDockerContainers", req, cb)
  }

  /**
   * 本接口（TerminateDisks）用于销毁一个或多个云硬盘。
   */
  async TerminateDisks(
    req: TerminateDisksRequest,
    cb?: (error: string, rep: TerminateDisksResponse) => void
  ): Promise<TerminateDisksResponse> {
    return this.request("TerminateDisks", req, cb)
  }

  /**
   * 本接口 (CreateFirewallTemplateRules) 用于创建防火墙模板规则。
   */
  async CreateFirewallTemplateRules(
    req: CreateFirewallTemplateRulesRequest,
    cb?: (error: string, rep: CreateFirewallTemplateRulesResponse) => void
  ): Promise<CreateFirewallTemplateRulesResponse> {
    return this.request("CreateFirewallTemplateRules", req, cb)
  }

  /**
   * 本接口（DescribeSnapshotsDeniedActions）用于查询一个或多个快照的操作限制列表信息。
   */
  async DescribeSnapshotsDeniedActions(
    req: DescribeSnapshotsDeniedActionsRequest,
    cb?: (error: string, rep: DescribeSnapshotsDeniedActionsResponse) => void
  ): Promise<DescribeSnapshotsDeniedActionsResponse> {
    return this.request("DescribeSnapshotsDeniedActions", req, cb)
  }

  /**
   * 本接口(IsolateInstances)用于退还一个或多个轻量应用服务器实例。
   * 只有状态为 RUNNING 或 STOPPED 的实例才可以进行此操作。
   * 接口调用成功后，实例会进入SHUTDOWN 状态。
   * 支持批量操作。每次请求批量资源（包括实例与数据盘）的上限为 20。
   * 本接口为异步接口，请求发送成功后会返回一个 RequestId，此时操作并未立即完成。实例操作结果可以通过调用 <a href="https://cloud.tencent.com/document/product/1207/47573" target="_blank">DescribeInstances</a> 接口查询，如果实例的最新操作状态（LatestOperationState）为“SUCCESS”，则代表操作成功。
   */
  async IsolateInstances(
    req: IsolateInstancesRequest,
    cb?: (error: string, rep: IsolateInstancesResponse) => void
  ): Promise<IsolateInstancesResponse> {
    return this.request("IsolateInstances", req, cb)
  }

  /**
   * 本接口 (CreateBlueprint) 用于创建镜像。
   */
  async CreateBlueprint(
    req: CreateBlueprintRequest,
    cb?: (error: string, rep: CreateBlueprintResponse) => void
  ): Promise<CreateBlueprintResponse> {
    return this.request("CreateBlueprint", req, cb)
  }

  /**
   * 查询实例内的Docker活动列表。
   */
  async DescribeDockerActivities(
    req: DescribeDockerActivitiesRequest,
    cb?: (error: string, rep: DescribeDockerActivitiesResponse) => void
  ): Promise<DescribeDockerActivitiesResponse> {
    return this.request("DescribeDockerActivities", req, cb)
  }

  /**
   * 本接口（DetachDisks）用于卸载一个或多个云硬盘。
   */
  async DetachDisks(
    req: DetachDisksRequest,
    cb?: (error: string, rep: DetachDisksResponse) => void
  ): Promise<DetachDisksResponse> {
    return this.request("DetachDisks", req, cb)
  }

  /**
   * 启动实例内的Docker容器，之后可以通过返回的ActivityId调用[DescribeDockerActivities](https://cloud.tencent.com/document/product/1207/95476)接口查询启动情况。
   */
  async StartDockerContainers(
    req: StartDockerContainersRequest,
    cb?: (error: string, rep: StartDockerContainersResponse) => void
  ): Promise<StartDockerContainersResponse> {
    return this.request("StartDockerContainers", req, cb)
  }

  /**
   * 本接口（DescribeModifyInstanceBundles）用于查询实例可变更套餐列表。
   */
  async DescribeModifyInstanceBundles(
    req: DescribeModifyInstanceBundlesRequest,
    cb?: (error: string, rep: DescribeModifyInstanceBundlesResponse) => void
  ): Promise<DescribeModifyInstanceBundlesResponse> {
    return this.request("DescribeModifyInstanceBundles", req, cb)
  }

  /**
   * 本接口（CreateKeyPair）用于创建一个密钥对。
   */
  async CreateKeyPair(
    req: CreateKeyPairRequest,
    cb?: (error: string, rep: CreateKeyPairResponse) => void
  ): Promise<CreateKeyPairResponse> {
    return this.request("CreateKeyPair", req, cb)
  }

  /**
   * 本接口（DescribeBundles）用于查询套餐信息。
   */
  async DescribeBundles(
    req: DescribeBundlesRequest,
    cb?: (error: string, rep: DescribeBundlesResponse) => void
  ): Promise<DescribeBundlesResponse> {
    return this.request("DescribeBundles", req, cb)
  }

  /**
     * 本接口（ShareBlueprintAcrossAccounts）用于跨账号共享镜像。
仅支持共享自定义镜像， 且用于共享的镜像状态必须为NORMAL。
共享的账号必须为主账号。
     */
  async ShareBlueprintAcrossAccounts(
    req: ShareBlueprintAcrossAccountsRequest,
    cb?: (error: string, rep: ShareBlueprintAcrossAccountsResponse) => void
  ): Promise<ShareBlueprintAcrossAccountsResponse> {
    return this.request("ShareBlueprintAcrossAccounts", req, cb)
  }

  /**
   * 本接口（DescribeInstancesTrafficPackages）用于查询一个或多个实例的流量包详情。
   */
  async DescribeInstancesTrafficPackages(
    req: DescribeInstancesTrafficPackagesRequest,
    cb?: (error: string, rep: DescribeInstancesTrafficPackagesResponse) => void
  ): Promise<DescribeInstancesTrafficPackagesResponse> {
    return this.request("DescribeInstancesTrafficPackages", req, cb)
  }

  /**
   * 本接口（DescribeDiskBackups）用于查询云硬盘备份点的详细信息。
   */
  async DescribeDiskBackups(
    req: DescribeDiskBackupsRequest,
    cb?: (error: string, rep: DescribeDiskBackupsResponse) => void
  ): Promise<DescribeDiskBackupsResponse> {
    return this.request("DescribeDiskBackups", req, cb)
  }

  /**
   * 本接口 (AttachCcn) 用于建立与云联网的关联。
   */
  async AttachCcn(
    req: AttachCcnRequest,
    cb?: (error: string, rep: AttachCcnResponse) => void
  ): Promise<AttachCcnResponse> {
    return this.request("AttachCcn", req, cb)
  }

  /**
     * 本接口 (ModifyInstancesRenewFlag) 用于修改包年包月实例续费标识。

* 实例被标识为自动续费后，每次在实例到期时，会自动续费一个月。
* 支持批量操作。每次请求批量实例的上限为100。
     */
  async ModifyInstancesRenewFlag(
    req: ModifyInstancesRenewFlagRequest,
    cb?: (error: string, rep: ModifyInstancesRenewFlagResponse) => void
  ): Promise<ModifyInstancesRenewFlagResponse> {
    return this.request("ModifyInstancesRenewFlag", req, cb)
  }

  /**
     * 本接口（ResetInstance）用于重装指定实例上的镜像。

* 如果指定了 BlueprintId 参数，则使用指定的镜像重装；否则按照当前实例使用的镜像进行重装。
* 系统盘将会被格式化，并重置；请确保系统盘中无重要文件。
* 目前不支持实例使用该接口实现 LINUX_UNIX 和 WINDOWS 操作系统切换。
* 本接口为异步接口，请求发送成功后会返回一个 RequestId，此时操作并未立即完成。实例操作结果可以通过调用 <a href="https://cloud.tencent.com/document/product/1207/47573" target="_blank">DescribeInstances</a> 接口查询，如果实例的最新操作状态（LatestOperationState）为“SUCCESS”，则代表操作成功。
* 对于游戏专区实例，仅支持重装当前镜像。
     */
  async ResetInstance(
    req: ResetInstanceRequest,
    cb?: (error: string, rep: ResetInstanceResponse) => void
  ): Promise<ResetInstanceResponse> {
    return this.request("ResetInstance", req, cb)
  }

  /**
   * 本接口（DescribeFirewallRules）用于查询实例的防火墙规则。
   */
  async DescribeFirewallRules(
    req: DescribeFirewallRulesRequest,
    cb?: (error: string, rep: DescribeFirewallRulesResponse) => void
  ): Promise<DescribeFirewallRulesResponse> {
    return this.request("DescribeFirewallRules", req, cb)
  }

  /**
   * 本接口（DescribeGeneralResourceQuotas）用于查询通用资源配额信息。
   */
  async DescribeGeneralResourceQuotas(
    req: DescribeGeneralResourceQuotasRequest,
    cb?: (error: string, rep: DescribeGeneralResourceQuotasResponse) => void
  ): Promise<DescribeGeneralResourceQuotasResponse> {
    return this.request("DescribeGeneralResourceQuotas", req, cb)
  }

  /**
   * 本接口(CreateDisks)用于创建一个或多个云硬盘。
   */
  async CreateDisks(
    req: CreateDisksRequest,
    cb?: (error: string, rep: CreateDisksResponse) => void
  ): Promise<CreateDisksResponse> {
    return this.request("CreateDisks", req, cb)
  }

  /**
   * 本接口 (ApplyFirewallTemplate) 用于应用防火墙模板到多个实例。
   */
  async ApplyFirewallTemplate(
    req: ApplyFirewallTemplateRequest,
    cb?: (error: string, rep: ApplyFirewallTemplateResponse) => void
  ): Promise<ApplyFirewallTemplateResponse> {
    return this.request("ApplyFirewallTemplate", req, cb)
  }

  /**
   * 本接口（DescribeSnapshots）用于查询快照的详细信息。
   */
  async DescribeSnapshots(
    req: DescribeSnapshotsRequest,
    cb?: (error: string, rep: DescribeSnapshotsResponse) => void
  ): Promise<DescribeSnapshotsResponse> {
    return this.request("DescribeSnapshots", req, cb)
  }

  /**
   * 本接口（DescribeDiskBackupsDeniedActions）用于查询一个或多个云硬盘备份点的操作限制列表信息。
   */
  async DescribeDiskBackupsDeniedActions(
    req: DescribeDiskBackupsDeniedActionsRequest,
    cb?: (error: string, rep: DescribeDiskBackupsDeniedActionsResponse) => void
  ): Promise<DescribeDiskBackupsDeniedActionsResponse> {
    return this.request("DescribeDiskBackupsDeniedActions", req, cb)
  }

  /**
   * 创建并运行多个Docker容器，之后可以通过返回的ActivityIds调用<a href="https://cloud.tencent.com/document/product/1207/95476" target="_blank">DescribeDockerActivities</a>接口查询创建情况。
   */
  async RunDockerContainers(
    req: RunDockerContainersRequest,
    cb?: (error: string, rep: RunDockerContainersResponse) => void
  ): Promise<RunDockerContainersResponse> {
    return this.request("RunDockerContainers", req, cb)
  }

  /**
     * 本接口 ( DescribeInstanceVncUrl ) 用于查询实例管理终端地址，获取的地址可用于实例的 VNC 登录。

* 处于 `STOPPED` 状态的机器无法使用此功能。
* 管理终端地址的有效期为 15 秒，调用接口成功后如果 15 秒内不使用该链接进行访问，管理终端地址自动失效，您需要重新查询。
* 管理终端地址一旦被访问，将自动失效，您需要重新查询。
* 如果连接断开，每分钟内重新连接的次数不能超过 30 次。
* 参数 `InstanceVncUrl` ：调用接口成功后会返回的 `InstanceVncUrl` 的值。
获取到 `InstanceVncUrl` 后，您需要在链接 `https://img.qcloud.com/qcloud/app/active_vnc/index.html?` 末尾加上参数 `InstanceVncUrl=xxxx`。
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
     * 本接口（StartInstances）用于启动一个或多个实例。

* 只有状态为 STOPPED 的实例才可以进行此操作。
* 接口调用成功时，实例会进入 STARTING 状态；启动实例成功时，实例会进入 RUNNING 状态。
* 支持批量操作。每次请求批量实例的上限为 100。
* 本接口为异步接口，请求发送成功后会返回一个 RequestId，此时操作并未立即完成。实例操作结果可以通过调用 <a href="https://cloud.tencent.com/document/product/1207/47573" target="_blank">DescribeInstances</a> 接口查询，如果实例的最新操作状态（LatestOperationState）为“SUCCESS”，则代表操作成功。
     */
  async StartInstances(
    req: StartInstancesRequest,
    cb?: (error: string, rep: StartInstancesResponse) => void
  ): Promise<StartInstancesResponse> {
    return this.request("StartInstances", req, cb)
  }

  /**
   * 本接口 (DescribeKeyPairs) 用于查询用户密钥对信息。
   */
  async DescribeKeyPairs(
    req: DescribeKeyPairsRequest,
    cb?: (error: string, rep: DescribeKeyPairsResponse) => void
  ): Promise<DescribeKeyPairsResponse> {
    return this.request("DescribeKeyPairs", req, cb)
  }

  /**
   * 本接口（DescribeDiskConfigs）用于查询云硬盘配置。
   */
  async DescribeDiskConfigs(
    req: DescribeDiskConfigsRequest,
    cb?: (error: string, rep: DescribeDiskConfigsResponse) => void
  ): Promise<DescribeDiskConfigsResponse> {
    return this.request("DescribeDiskConfigs", req, cb)
  }

  /**
     * 本接口（ModifyFirewallRuleDescription）用于修改单条防火墙规则描述。

* FirewallVersion 用于指定要操作的防火墙的版本。传入 FirewallVersion 版本号若不等于当前防火墙的最新版本，将返回失败；若不传 FirewallVersion 则直接修改防火墙规则备注。

用FirewallRule参数来指定要修改的防火墙规则，使用其中的Protocol， Port， CidrBlock，Action字段来匹配要修改的防火墙规则。

在 FirewallRule 参数中：
* Protocol 字段支持输入 TCP，UDP，ICMP，ALL。
* Port 字段允许输入 ALL，或者一个单独的端口号，或者用逗号分隔的离散端口号，或者用减号分隔的两个端口号代表的端口范围。当 Port 为范围时，减号分隔的第一个端口号小于第二个端口号。当 Protocol 字段不是 TCP 或 UDP 时，Port 字段只能为空或 ALL。Port 字段长度不得超过 64。
* CidrBlock 字段允许输入符合 cidr 格式标准的任意字符串。租户之间网络隔离规则优先于防火墙中的内网规则。
* Action 字段只允许输入 ACCEPT 或 DROP。
* FirewallRuleDescription 字段长度不得超过 64。
     */
  async ModifyFirewallRuleDescription(
    req: ModifyFirewallRuleDescriptionRequest,
    cb?: (error: string, rep: ModifyFirewallRuleDescriptionResponse) => void
  ): Promise<ModifyFirewallRuleDescriptionResponse> {
    return this.request("ModifyFirewallRuleDescription", req, cb)
  }

  /**
   * 本接口 (ResetAttachCcn) 用于关联云联网实例申请过期时，重新申请关联操作。
   */
  async ResetAttachCcn(
    req: ResetAttachCcnRequest,
    cb?: (error: string, rep: ResetAttachCcnResponse) => void
  ): Promise<ResetAttachCcnResponse> {
    return this.request("ResetAttachCcn", req, cb)
  }

  /**
     * 本接口（RebootInstances）用于重启实例。

* 只有状态为 RUNNING 的实例才可以进行此操作。
* 接口调用成功时，实例会进入 REBOOTING 状态；重启实例成功时，实例会进入 RUNNING 状态。
* 支持批量操作，每次请求批量实例的上限为 100。
* 本接口为异步接口，请求发送成功后会返回一个 RequestId，此时操作并未立即完成。实例操作结果可以通过调用 <a href="https://cloud.tencent.com/document/product/1207/47573" target="_blank">DescribeInstances</a> 接口查询，如果实例的最新操作状态（LatestOperationState）为“SUCCESS”，则代表操作成功。
     */
  async RebootInstances(
    req: RebootInstancesRequest,
    cb?: (error: string, rep: RebootInstancesResponse) => void
  ): Promise<RebootInstancesResponse> {
    return this.request("RebootInstances", req, cb)
  }

  /**
   * 本接口(ModifyInstancesBundle)用于变更一个或多个轻量应用服务器实例套餐。
   * 只有状态为 RUNNING，STOPPED的实例才可以进行此操作。
   * 支持批量操作。每次请求批量实例的上限为 30。
   * 本接口为异步接口，请求发送成功后会返回一个 RequestId，此时操作并未立即完成。实例操作结果可以通过调用 <a href="https://cloud.tencent.com/document/product/1207/47573" target="_blank">DescribeInstances</a> 接口查询，如果实例的最新操作状态（LatestOperationState）为“SUCCESS”，则代表操作成功。
   */
  async ModifyInstancesBundle(
    req: ModifyInstancesBundleRequest,
    cb?: (error: string, rep: ModifyInstancesBundleResponse) => void
  ): Promise<ModifyInstancesBundleResponse> {
    return this.request("ModifyInstancesBundle", req, cb)
  }

  /**
   * 本接口（StopInstances）用于关闭一个或多个实例。
   * 只有状态为 RUNNING 的实例才可以进行此操作。
   * 接口调用成功时，实例会进入 STOPPING 状态；关闭实例成功时，实例会进入 STOPPED 状态。
   * 支持批量操作。每次请求批量实例的上限为 100。
   * 本接口为异步接口，请求发送成功后会返回一个 RequestId，此时操作并未立即完成。实例操作结果可以通过调用 <a href="https://cloud.tencent.com/document/product/1207/47573" target="_blank">DescribeInstances</a> 接口查询，如果实例的最新操作状态（LatestOperationState）为“SUCCESS”，则代表操作成功。
   */
  async StopInstances(
    req: StopInstancesRequest,
    cb?: (error: string, rep: StopInstancesResponse) => void
  ): Promise<StopInstancesResponse> {
    return this.request("StopInstances", req, cb)
  }

  /**
   * 停止实例内的Docker容器，之后可以通过返回的ActivityId调用[DescribeDockerActivities](https://cloud.tencent.com/document/product/1207/95476)接口查询停止情况。
   */
  async StopDockerContainers(
    req: StopDockerContainersRequest,
    cb?: (error: string, rep: StopDockerContainersResponse) => void
  ): Promise<StopDockerContainersResponse> {
    return this.request("StopDockerContainers", req, cb)
  }

  /**
     * 本接口（ApplyDiskBackup）用于回滚指定云硬盘的备份点。
* 仅支持回滚到原云硬盘。
* 用于回滚的云硬盘备份点必须处于 NORMAL 状态。
  云硬盘备份点状态可以通过  [DescribeDiskBackups](https://cloud.tencent.com/document/api/1207/84379) 接口查询。
* 回滚云硬盘备份点时，云硬盘的状态必须为 UNATTACHED或ATTACHED。
  云硬盘状态可通过 [DescribeDisks](https://cloud.tencent.com/document/api/1207/66093) 接口查询。
* 如果云硬盘处于 ATTACHED状态，相关RUNNING 状态的实例会强制关机，然后回滚云硬盘备份点。
     */
  async ApplyDiskBackup(
    req: ApplyDiskBackupRequest,
    cb?: (error: string, rep: ApplyDiskBackupResponse) => void
  ): Promise<ApplyDiskBackupResponse> {
    return this.request("ApplyDiskBackup", req, cb)
  }

  /**
   * 本接口(DescribeInstancesDiskNum)用于查询实例挂载云硬盘数量。
   */
  async DescribeInstancesDiskNum(
    req: DescribeInstancesDiskNumRequest,
    cb?: (error: string, rep: DescribeInstancesDiskNumResponse) => void
  ): Promise<DescribeInstancesDiskNumResponse> {
    return this.request("DescribeInstancesDiskNum", req, cb)
  }

  /**
   * 本接口 (DeleteFirewallTemplateRules) 用于删除防火墙模板规则。
   */
  async DeleteFirewallTemplateRules(
    req: DeleteFirewallTemplateRulesRequest,
    cb?: (error: string, rep: DeleteFirewallTemplateRulesResponse) => void
  ): Promise<DeleteFirewallTemplateRulesResponse> {
    return this.request("DeleteFirewallTemplateRules", req, cb)
  }

  /**
   * 本接口 (DescribeFirewallTemplateRuleQuota) 用于查询防火墙模板规则配额。
   */
  async DescribeFirewallTemplateRuleQuota(
    req: DescribeFirewallTemplateRuleQuotaRequest,
    cb?: (error: string, rep: DescribeFirewallTemplateRuleQuotaResponse) => void
  ): Promise<DescribeFirewallTemplateRuleQuotaResponse> {
    return this.request("DescribeFirewallTemplateRuleQuota", req, cb)
  }

  /**
   * 本接口（DescribeInstancesReturnable）用于查询实例是否可退还。
   */
  async DescribeInstancesReturnable(
    req: DescribeInstancesReturnableRequest,
    cb?: (error: string, rep: DescribeInstancesReturnableResponse) => void
  ): Promise<DescribeInstancesReturnableResponse> {
    return this.request("DescribeInstancesReturnable", req, cb)
  }

  /**
   * 本接口（DescribeFirewallRulesTemplate）用于查询防火墙规则模板。
   */
  async DescribeFirewallRulesTemplate(
    req?: DescribeFirewallRulesTemplateRequest,
    cb?: (error: string, rep: DescribeFirewallRulesTemplateResponse) => void
  ): Promise<DescribeFirewallRulesTemplateResponse> {
    return this.request("DescribeFirewallRulesTemplate", req, cb)
  }

  /**
     * 本接口（DescribeInstances）用于查询一个或多个实例的详细信息。

* 可以根据实例 ID、实例名称或者实例的内网 IP 查询实例的详细信息。
* 过滤信息详细请见过滤器 [Filters](https://cloud.tencent.com/document/product/1207/47576#Filter) 。
* 如果参数为空，返回当前用户一定数量（Limit 所指定的数量，默认为 20）的实例。
* 支持查询实例的最新操作（LatestOperation）以及最新操作状态（LatestOperationState）。
     */
  async DescribeInstances(
    req: DescribeInstancesRequest,
    cb?: (error: string, rep: DescribeInstancesResponse) => void
  ): Promise<DescribeInstancesResponse> {
    return this.request("DescribeInstances", req, cb)
  }

  /**
   * 删除实例内的Docker容器，之后可以通过返回的ActivityId调用[DescribeDockerActivities](https://cloud.tencent.com/document/product/1207/95476)接口查询删除情况。
   */
  async RemoveDockerContainers(
    req: RemoveDockerContainersRequest,
    cb?: (error: string, rep: RemoveDockerContainersResponse) => void
  ): Promise<RemoveDockerContainersResponse> {
    return this.request("RemoveDockerContainers", req, cb)
  }

  /**
     * 本接口(IsolateDisks)用于退还一个或多个轻量应用服务器云硬盘。

只有状态为 UNATTACHED 的数据盘才可以进行此操作。
接口调用成功后，云硬盘会进入SHUTDOWN 状态。
支持批量操作。每次请求批量资源的上限为 20。
本接口为异步接口，请求发送成功后会返回一个 RequestId，此时操作并未立即完成。云硬盘操作结果可以通过调用 [DescribeDisks](https://cloud.tencent.com/document/product/1207/66093) 接口查询，如果云硬盘的最新操作状态（LatestOperationState）为“SUCCESS”，则代表操作成功。
     */
  async IsolateDisks(
    req: IsolateDisksRequest,
    cb?: (error: string, rep: IsolateDisksResponse) => void
  ): Promise<IsolateDisksResponse> {
    return this.request("IsolateDisks", req, cb)
  }

  /**
   * 本接口 (InquirePriceCreateBlueprint) 用于创建镜像询价。
   */
  async InquirePriceCreateBlueprint(
    req: InquirePriceCreateBlueprintRequest,
    cb?: (error: string, rep: InquirePriceCreateBlueprintResponse) => void
  ): Promise<InquirePriceCreateBlueprintResponse> {
    return this.request("InquirePriceCreateBlueprint", req, cb)
  }

  /**
     * 本接口（DeleteFirewallRules）用于删除实例的防火墙规则。

* FirewallVersion 用于指定要操作的防火墙的版本。传入 FirewallVersion 版本号若不等于当前防火墙的最新版本，将返回失败；若不传 FirewallVersion 则直接删除指定的规则。

在 FirewallRules 参数中：
* Protocol 字段支持输入 TCP，UDP，ICMP，ALL。
* Port 字段允许输入 ALL，或者一个单独的端口号，或者用逗号分隔的离散端口号，或者用减号分隔的两个端口号代表的端口范围。当 Port 为范围时，减号分隔的第一个端口号小于第二个端口号。当 Protocol 字段不是 TCP 或 UDP 时，Port 字段只能为空或 ALL。Port 字段长度不得超过 64。
* CidrBlock 字段允许输入符合 cidr 格式标准的任意字符串。租户之间网络隔离规则优先于防火墙中的内网规则。
* Action 字段只允许输入 ACCEPT 或 DROP。
* FirewallRuleDescription 字段长度不得超过 64。
     */
  async DeleteFirewallRules(
    req: DeleteFirewallRulesRequest,
    cb?: (error: string, rep: DeleteFirewallRulesResponse) => void
  ): Promise<DeleteFirewallRulesResponse> {
    return this.request("DeleteFirewallRules", req, cb)
  }

  /**
     * 本接口（ResetInstancesPassword）用于将实例操作系统的密码重置为用户指定的密码。
* 只修改管理员账号的密码。实例的操作系统不同，管理员账号也会不一样（Windows 为 Administrator，Ubuntu 为 ubuntu ，其它系统为 root）。
* 支持批量操作。将多个实例操作系统的密码重置为相同的密码。每次请求批量实例的上限为 100。
* 建议对运行中的实例先手动关机，然后再进行密码重置。如实例处于运行中状态，本接口操作过程中会对实例进行关机操作，尝试正常关机失败后进行强制关机。
* 本接口为异步接口，请求发送成功后会返回一个 RequestId，此时操作并未立即完成。实例操作结果可以通过调用 <a href="https://cloud.tencent.com/document/product/1207/47573" target="_blank">DescribeInstances</a> 接口查询，如果实例的最新操作状态（LatestOperationState）为“SUCCESS”，则代表操作成功。
注意：强制关机的效果等同于关闭物理计算机的电源开关。强制关机可能会导致数据丢失或文件系统损坏。
     */
  async ResetInstancesPassword(
    req: ResetInstancesPasswordRequest,
    cb?: (error: string, rep: ResetInstancesPasswordResponse) => void
  ): Promise<ResetInstancesPasswordResponse> {
    return this.request("ResetInstancesPassword", req, cb)
  }

  /**
   * 本接口（DescribeDisksDeniedActions）用于查询一个或多个云硬盘的操作限制列表信息。
   */
  async DescribeDisksDeniedActions(
    req: DescribeDisksDeniedActionsRequest,
    cb?: (error: string, rep: DescribeDisksDeniedActionsResponse) => void
  ): Promise<DescribeDisksDeniedActionsResponse> {
    return this.request("DescribeDisksDeniedActions", req, cb)
  }

  /**
   * 查询地域下可用区
   */
  async DescribeZones(
    req: DescribeZonesRequest,
    cb?: (error: string, rep: DescribeZonesResponse) => void
  ): Promise<DescribeZonesResponse> {
    return this.request("DescribeZones", req, cb)
  }

  /**
   * 本接口（DescribeDisks）用于查询云硬盘信息。
   */
  async DescribeDisks(
    req: DescribeDisksRequest,
    cb?: (error: string, rep: DescribeDisksResponse) => void
  ): Promise<DescribeDisksResponse> {
    return this.request("DescribeDisks", req, cb)
  }

  /**
   * 本接口（InquirePriceRenewInstances）用于续费实例询价。
   */
  async InquirePriceRenewInstances(
    req: InquirePriceRenewInstancesRequest,
    cb?: (error: string, rep: InquirePriceRenewInstancesResponse) => void
  ): Promise<InquirePriceRenewInstancesResponse> {
    return this.request("InquirePriceRenewInstances", req, cb)
  }

  /**
     * 本接口（DeleteSnapshots）用于删除快照。
快照必须处于 NORMAL 状态，快照状态可以通过 <a href="https://cloud.tencent.com/document/product/1207/54388" target="_blank">DescribeSnapshots</a> 接口查询，见输出参数中 SnapshotState 字段解释。
     */
  async DeleteSnapshots(
    req: DeleteSnapshotsRequest,
    cb?: (error: string, rep: DeleteSnapshotsResponse) => void
  ): Promise<DeleteSnapshotsResponse> {
    return this.request("DeleteSnapshots", req, cb)
  }

  /**
   * 本接口 (DescribeFirewallTemplateApplyRecords) 用于查询防火墙模板应用记录列表。
   */
  async DescribeFirewallTemplateApplyRecords(
    req: DescribeFirewallTemplateApplyRecordsRequest,
    cb?: (error: string, rep: DescribeFirewallTemplateApplyRecordsResponse) => void
  ): Promise<DescribeFirewallTemplateApplyRecordsResponse> {
    return this.request("DescribeFirewallTemplateApplyRecords", req, cb)
  }

  /**
   * 本接口 (ResetFirewallTemplateRules) 用于重置防火墙模板下所有规则。
   */
  async ResetFirewallTemplateRules(
    req: ResetFirewallTemplateRulesRequest,
    cb?: (error: string, rep: ResetFirewallTemplateRulesResponse) => void
  ): Promise<ResetFirewallTemplateRulesResponse> {
    return this.request("ResetFirewallTemplateRules", req, cb)
  }

  /**
   * 本接口（DescribeResetInstanceBlueprints）查询重置实例的镜像信息。对于游戏专区实例，该接口只会返回当前镜像，且不支持 Filters 参数。
   */
  async DescribeResetInstanceBlueprints(
    req: DescribeResetInstanceBlueprintsRequest,
    cb?: (error: string, rep: DescribeResetInstanceBlueprintsResponse) => void
  ): Promise<DescribeResetInstanceBlueprintsResponse> {
    return this.request("DescribeResetInstanceBlueprints", req, cb)
  }

  /**
     * 本接口（ApplyInstanceSnapshot）用于回滚指定实例的系统盘快照。
<li>仅支持回滚到原系统盘。</li>
<li>用于回滚的快照必须处于 NORMAL 状态。快照状态可以通过 DescribeSnapshots 接口查询，见输出参数中 SnapshotState 字段解释。</li>
<li>回滚快照时，实例的状态必须为 STOPPED 或 RUNNING，可通过 DescribeInstances 接口查询实例状态。处于 RUNNING 状态的实例会强制关机，然后回滚快照。</li>
     */
  async ApplyInstanceSnapshot(
    req: ApplyInstanceSnapshotRequest,
    cb?: (error: string, rep: ApplyInstanceSnapshotResponse) => void
  ): Promise<ApplyInstanceSnapshotResponse> {
    return this.request("ApplyInstanceSnapshot", req, cb)
  }

  /**
   * 本接口 (DetachCcn) 用于解除与云联网的关联。
   */
  async DetachCcn(
    req: DetachCcnRequest,
    cb?: (error: string, rep: DetachCcnResponse) => void
  ): Promise<DetachCcnResponse> {
    return this.request("DetachCcn", req, cb)
  }

  /**
     * 本接口(RenewDisks)用于续费一个或多个轻量应用服务器云硬盘。

只有状态为 ATTACHED，UNATTACHED 或 SHUTDOWN 的数据盘才可以进行此操作。
支持批量操作。每次请求批量云硬盘的上限为 50。
本接口为异步接口，请求发送成功后会返回一个 RequestId，此时操作并未立即完成。云硬盘操作结果可以通过调用 [DescribeDisks](https://cloud.tencent.com/document/product/1207/66093) 接口查询，如果云硬盘的最新操作状态（LatestOperationState）为“SUCCESS”，则代表操作成功。
     */
  async RenewDisks(
    req: RenewDisksRequest,
    cb?: (error: string, rep: RenewDisksResponse) => void
  ): Promise<RenewDisksResponse> {
    return this.request("RenewDisks", req, cb)
  }

  /**
   * 本接口(RenewInstances)用于续费一个或多个轻量应用服务器实例。
   * 只有状态为 RUNNING，STOPPED 或 SHUTDOWN 的实例才可以进行此操作。
   * 支持批量操作。每次请求批量实例的上限为 100。
   * 本接口为异步接口，请求发送成功后会返回一个 RequestId，此时操作并未立即完成。实例操作结果可以通过调用 <a href="https://cloud.tencent.com/document/product/1207/47573" target="_blank">DescribeInstances</a> 接口查询，如果实例的最新操作状态（LatestOperationState）为“SUCCESS”，则代表操作成功。
   */
  async RenewInstances(
    req: RenewInstancesRequest,
    cb?: (error: string, rep: RenewInstancesResponse) => void
  ): Promise<RenewInstancesResponse> {
    return this.request("RenewInstances", req, cb)
  }

  /**
   * 本接口(DescribeScenes)用于查看使用场景列表。
   */
  async DescribeScenes(
    req: DescribeScenesRequest,
    cb?: (error: string, rep: DescribeScenesResponse) => void
  ): Promise<DescribeScenesResponse> {
    return this.request("DescribeScenes", req, cb)
  }

  /**
   * 本接口(CreateInstances)用于创建一个或多个指定套餐的轻量应用服务器实例。
   */
  async CreateInstances(
    req: CreateInstancesRequest,
    cb?: (error: string, rep: CreateInstancesResponse) => void
  ): Promise<CreateInstancesResponse> {
    return this.request("CreateInstances", req, cb)
  }

  /**
   * 本接口 (ReplaceFirewallTemplateRules) 用于替换防火墙模板规则。
   */
  async ReplaceFirewallTemplateRule(
    req: ReplaceFirewallTemplateRuleRequest,
    cb?: (error: string, rep: ReplaceFirewallTemplateRuleResponse) => void
  ): Promise<ReplaceFirewallTemplateRuleResponse> {
    return this.request("ReplaceFirewallTemplateRule", req, cb)
  }

  /**
   * 本接口 (DescribeFirewallTemplates) 用于查询防火墙模板列表。
   */
  async DescribeFirewallTemplates(
    req: DescribeFirewallTemplatesRequest,
    cb?: (error: string, rep: DescribeFirewallTemplatesResponse) => void
  ): Promise<DescribeFirewallTemplatesResponse> {
    return this.request("DescribeFirewallTemplates", req, cb)
  }
}
