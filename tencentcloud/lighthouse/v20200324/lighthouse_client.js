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
const models = require("./models");
const AbstractClient = require('../../common/abstract_client')
const DescribeInstancesTrafficPackagesRequest = models.DescribeInstancesTrafficPackagesRequest;
const AssociateInstancesKeyPairsResponse = models.AssociateInstancesKeyPairsResponse;
const RenewInstancesRequest = models.RenewInstancesRequest;
const DescribeDisksDeniedActionsRequest = models.DescribeDisksDeniedActionsRequest;
const DescribeDiskBackupsRequest = models.DescribeDiskBackupsRequest;
const DescribeInstancesDeniedActionsRequest = models.DescribeInstancesDeniedActionsRequest;
const DeleteKeyPairsResponse = models.DeleteKeyPairsResponse;
const AttachCcnRequest = models.AttachCcnRequest;
const CreateInstancesRequest = models.CreateInstancesRequest;
const DescribeZonesRequest = models.DescribeZonesRequest;
const RegionInfo = models.RegionInfo;
const DescribeBlueprintInstancesResponse = models.DescribeBlueprintInstancesResponse;
const InstanceDeniedActions = models.InstanceDeniedActions;
const InquirePriceCreateDisksRequest = models.InquirePriceCreateDisksRequest;
const ModifyBundle = models.ModifyBundle;
const DetachCcnResponse = models.DetachCcnResponse;
const BlueprintPrice = models.BlueprintPrice;
const DescribeScenesResponse = models.DescribeScenesResponse;
const InquirePriceRenewInstancesResponse = models.InquirePriceRenewInstancesResponse;
const DeleteFirewallRulesResponse = models.DeleteFirewallRulesResponse;
const ModifyInstancesAttributeRequest = models.ModifyInstancesAttributeRequest;
const DescribeGeneralResourceQuotasRequest = models.DescribeGeneralResourceQuotasRequest;
const DeleteKeyPairsRequest = models.DeleteKeyPairsRequest;
const SystemDisk = models.SystemDisk;
const ResetInstanceBlueprint = models.ResetInstanceBlueprint;
const DescribeBundlesResponse = models.DescribeBundlesResponse;
const ModifyInstancesBundleRequest = models.ModifyInstancesBundleRequest;
const DeleteDiskBackupsRequest = models.DeleteDiskBackupsRequest;
const InquirePriceRenewInstancesRequest = models.InquirePriceRenewInstancesRequest;
const DiscountDetail = models.DiscountDetail;
const DescribeDiskConfigsRequest = models.DescribeDiskConfigsRequest;
const DescribeRegionsResponse = models.DescribeRegionsResponse;
const DescribeDiskBackupsResponse = models.DescribeDiskBackupsResponse;
const AssociateInstancesKeyPairsRequest = models.AssociateInstancesKeyPairsRequest;
const ModifyDiskBackupsAttributeRequest = models.ModifyDiskBackupsAttributeRequest;
const AttachCcnResponse = models.AttachCcnResponse;
const RebootInstancesRequest = models.RebootInstancesRequest;
const ResetAttachCcnRequest = models.ResetAttachCcnRequest;
const AttachDisksRequest = models.AttachDisksRequest;
const ImportKeyPairResponse = models.ImportKeyPairResponse;
const DescribeSnapshotsRequest = models.DescribeSnapshotsRequest;
const TerminateDisksResponse = models.TerminateDisksResponse;
const DiskBackup = models.DiskBackup;
const DescribeInstancesTrafficPackagesResponse = models.DescribeInstancesTrafficPackagesResponse;
const DescribeDiskBackupsDeniedActionsRequest = models.DescribeDiskBackupsDeniedActionsRequest;
const KeyPair = models.KeyPair;
const DescribeFirewallRulesTemplateRequest = models.DescribeFirewallRulesTemplateRequest;
const DescribeKeyPairsResponse = models.DescribeKeyPairsResponse;
const ModifyBlueprintAttributeRequest = models.ModifyBlueprintAttributeRequest;
const InquirePriceRenewDisksRequest = models.InquirePriceRenewDisksRequest;
const Disk = models.Disk;
const ZoneInfo = models.ZoneInfo;
const DescribeBlueprintInstancesRequest = models.DescribeBlueprintInstancesRequest;
const ApplyInstanceSnapshotResponse = models.ApplyInstanceSnapshotResponse;
const DetachDisksRequest = models.DetachDisksRequest;
const ModifyFirewallRulesRequest = models.ModifyFirewallRulesRequest;
const CreateBlueprintRequest = models.CreateBlueprintRequest;
const DeleteFirewallRulesRequest = models.DeleteFirewallRulesRequest;
const DescribeInstanceVncUrlRequest = models.DescribeInstanceVncUrlRequest;
const ModifyFirewallRuleDescriptionRequest = models.ModifyFirewallRuleDescriptionRequest;
const InstanceTrafficPackage = models.InstanceTrafficPackage;
const SnapshotDeniedActions = models.SnapshotDeniedActions;
const TerminateInstancesResponse = models.TerminateInstancesResponse;
const TrafficPackage = models.TrafficPackage;
const DescribeInstancesDiskNumRequest = models.DescribeInstancesDiskNumRequest;
const DetailPrice = models.DetailPrice;
const ApplyDiskBackupResponse = models.ApplyDiskBackupResponse;
const DescribeBlueprintsRequest = models.DescribeBlueprintsRequest;
const InstanceReturnable = models.InstanceReturnable;
const DescribeInstancesDeniedActionsResponse = models.DescribeInstancesDeniedActionsResponse;
const ModifyDisksAttributeRequest = models.ModifyDisksAttributeRequest;
const DockerContainerPublishPort = models.DockerContainerPublishPort;
const DescribeSnapshotsDeniedActionsResponse = models.DescribeSnapshotsDeniedActionsResponse;
const DescribeScenesRequest = models.DescribeScenesRequest;
const StartInstancesRequest = models.StartInstancesRequest;
const DeleteDiskBackupsResponse = models.DeleteDiskBackupsResponse;
const DeleteSnapshotsRequest = models.DeleteSnapshotsRequest;
const ModifyDisksRenewFlagResponse = models.ModifyDisksRenewFlagResponse;
const ModifySnapshotAttributeRequest = models.ModifySnapshotAttributeRequest;
const DeleteSnapshotsResponse = models.DeleteSnapshotsResponse;
const DescribeDisksResponse = models.DescribeDisksResponse;
const DescribeBundleDiscountResponse = models.DescribeBundleDiscountResponse;
const DescribeAllScenesRequest = models.DescribeAllScenesRequest;
const ModifyDisksRenewFlagRequest = models.ModifyDisksRenewFlagRequest;
const DisassociateInstancesKeyPairsRequest = models.DisassociateInstancesKeyPairsRequest;
const DataDiskPrice = models.DataDiskPrice;
const SceneInfo = models.SceneInfo;
const ImportKeyPairRequest = models.ImportKeyPairRequest;
const DeleteBlueprintsResponse = models.DeleteBlueprintsResponse;
const ModifyInstancesLoginKeyPairAttributeRequest = models.ModifyInstancesLoginKeyPairAttributeRequest;
const IsolateInstancesRequest = models.IsolateInstancesRequest;
const StopInstancesResponse = models.StopInstancesResponse;
const CreateInstancesResponse = models.CreateInstancesResponse;
const ModifyBlueprintAttributeResponse = models.ModifyBlueprintAttributeResponse;
const DescribeModifyInstanceBundlesRequest = models.DescribeModifyInstanceBundlesRequest;
const DescribeRegionsRequest = models.DescribeRegionsRequest;
const DescribeInstancesDiskNumResponse = models.DescribeInstancesDiskNumResponse;
const InquirePriceCreateBlueprintResponse = models.InquirePriceCreateBlueprintResponse;
const DescribeInstancesReturnableRequest = models.DescribeInstancesReturnableRequest;
const DiskReturnable = models.DiskReturnable;
const DescribeBlueprintsResponse = models.DescribeBlueprintsResponse;
const DescribeKeyPairsRequest = models.DescribeKeyPairsRequest;
const DescribeCcnAttachedInstancesRequest = models.DescribeCcnAttachedInstancesRequest;
const ApplyDiskBackupRequest = models.ApplyDiskBackupRequest;
const ResetInstancesPasswordResponse = models.ResetInstancesPasswordResponse;
const StartInstancesResponse = models.StartInstancesResponse;
const LoginSettings = models.LoginSettings;
const Instance = models.Instance;
const DockerContainerVolume = models.DockerContainerVolume;
const IsolateInstancesResponse = models.IsolateInstancesResponse;
const CreateKeyPairResponse = models.CreateKeyPairResponse;
const DescribeInstanceVncUrlResponse = models.DescribeInstanceVncUrlResponse;
const ModifyFirewallRulesResponse = models.ModifyFirewallRulesResponse;
const DiskPrice = models.DiskPrice;
const DescribeCcnAttachedInstancesResponse = models.DescribeCcnAttachedInstancesResponse;
const DescribeBundlesRequest = models.DescribeBundlesRequest;
const Blueprint = models.Blueprint;
const InquirePriceCreateInstancesResponse = models.InquirePriceCreateInstancesResponse;
const TotalPrice = models.TotalPrice;
const DeniedAction = models.DeniedAction;
const DescribeAllScenesResponse = models.DescribeAllScenesResponse;
const ModifyInstancesLoginKeyPairAttributeResponse = models.ModifyInstancesLoginKeyPairAttributeResponse;
const InquirePriceRenewDisksResponse = models.InquirePriceRenewDisksResponse;
const Bundle = models.Bundle;
const DiskConfig = models.DiskConfig;
const CreateDiskBackupResponse = models.CreateDiskBackupResponse;
const DescribeSnapshotsDeniedActionsRequest = models.DescribeSnapshotsDeniedActionsRequest;
const DescribeDiskDiscountResponse = models.DescribeDiskDiscountResponse;
const ResetInstancesPasswordRequest = models.ResetInstancesPasswordRequest;
const DiskChargePrepaid = models.DiskChargePrepaid;
const CreateKeyPairRequest = models.CreateKeyPairRequest;
const DescribeInstancesRequest = models.DescribeInstancesRequest;
const DetachCcnRequest = models.DetachCcnRequest;
const Filter = models.Filter;
const DescribeSnapshotsResponse = models.DescribeSnapshotsResponse;
const Snapshot = models.Snapshot;
const ModifyFirewallRuleDescriptionResponse = models.ModifyFirewallRuleDescriptionResponse;
const DescribeDiskDiscountRequest = models.DescribeDiskDiscountRequest;
const InquirePriceCreateBlueprintRequest = models.InquirePriceCreateBlueprintRequest;
const AttachDisksResponse = models.AttachDisksResponse;
const DiskBackupDeniedActions = models.DiskBackupDeniedActions;
const CreateDiskBackupRequest = models.CreateDiskBackupRequest;
const CreateFirewallRulesRequest = models.CreateFirewallRulesRequest;
const Software = models.Software;
const DescribeFirewallRulesResponse = models.DescribeFirewallRulesResponse;
const DescribeInstancesReturnableResponse = models.DescribeInstancesReturnableResponse;
const ContainerEnv = models.ContainerEnv;
const FirewallRule = models.FirewallRule;
const DeleteBlueprintsRequest = models.DeleteBlueprintsRequest;
const FirewallRuleInfo = models.FirewallRuleInfo;
const CreateFirewallRulesResponse = models.CreateFirewallRulesResponse;
const DescribeDisksRequest = models.DescribeDisksRequest;
const DescribeInstancesResponse = models.DescribeInstancesResponse;
const DescribeZonesResponse = models.DescribeZonesResponse;
const CreateBlueprintResponse = models.CreateBlueprintResponse;
const PolicyDetail = models.PolicyDetail;
const DetachDisksResponse = models.DetachDisksResponse;
const LoginConfiguration = models.LoginConfiguration;
const DescribeResetInstanceBlueprintsRequest = models.DescribeResetInstanceBlueprintsRequest;
const DockerContainerConfiguration = models.DockerContainerConfiguration;
const ResetAttachCcnResponse = models.ResetAttachCcnResponse;
const ModifyInstancesRenewFlagResponse = models.ModifyInstancesRenewFlagResponse;
const ApplyInstanceSnapshotRequest = models.ApplyInstanceSnapshotRequest;
const DisassociateInstancesKeyPairsResponse = models.DisassociateInstancesKeyPairsResponse;
const TerminateInstancesRequest = models.TerminateInstancesRequest;
const RenewDiskChargePrepaid = models.RenewDiskChargePrepaid;
const TerminateDisksRequest = models.TerminateDisksRequest;
const ResetInstanceRequest = models.ResetInstanceRequest;
const DescribeDiskConfigsResponse = models.DescribeDiskConfigsResponse;
const InternetAccessible = models.InternetAccessible;
const InstancePriceDetail = models.InstancePriceDetail;
const RebootInstancesResponse = models.RebootInstancesResponse;
const DescribeDiskBackupsDeniedActionsResponse = models.DescribeDiskBackupsDeniedActionsResponse;
const DescribeInstanceLoginKeyPairAttributeRequest = models.DescribeInstanceLoginKeyPairAttributeRequest;
const DescribeBundleDiscountRequest = models.DescribeBundleDiscountRequest;
const Price = models.Price;
const DescribeDisksReturnableResponse = models.DescribeDisksReturnableResponse;
const ModifyDiskBackupsAttributeResponse = models.ModifyDiskBackupsAttributeResponse;
const CreateInstanceSnapshotResponse = models.CreateInstanceSnapshotResponse;
const ModifyInstancesBundleResponse = models.ModifyInstancesBundleResponse;
const GeneralResourceQuota = models.GeneralResourceQuota;
const DescribeResetInstanceBlueprintsResponse = models.DescribeResetInstanceBlueprintsResponse;
const DescribeDisksReturnableRequest = models.DescribeDisksReturnableRequest;
const SoftwareDetail = models.SoftwareDetail;
const InstancePrice = models.InstancePrice;
const Tag = models.Tag;
const ModifySnapshotAttributeResponse = models.ModifySnapshotAttributeResponse;
const DescribeGeneralResourceQuotasResponse = models.DescribeGeneralResourceQuotasResponse;
const ModifyInstancesRenewFlagRequest = models.ModifyInstancesRenewFlagRequest;
const StopInstancesRequest = models.StopInstancesRequest;
const DescribeFirewallRulesTemplateResponse = models.DescribeFirewallRulesTemplateResponse;
const RenewInstancesResponse = models.RenewInstancesResponse;
const DescribeDisksDeniedActionsResponse = models.DescribeDisksDeniedActionsResponse;
const ResetInstanceResponse = models.ResetInstanceResponse;
const DescribeFirewallRulesRequest = models.DescribeFirewallRulesRequest;
const DiskDeniedActions = models.DiskDeniedActions;
const InquirePriceCreateInstancesRequest = models.InquirePriceCreateInstancesRequest;
const Scene = models.Scene;
const CcnAttachedInstance = models.CcnAttachedInstance;
const DescribeModifyInstanceBundlesResponse = models.DescribeModifyInstanceBundlesResponse;
const AttachDetail = models.AttachDetail;
const ModifyDisksAttributeResponse = models.ModifyDisksAttributeResponse;
const CreateInstanceSnapshotRequest = models.CreateInstanceSnapshotRequest;
const BlueprintInstance = models.BlueprintInstance;
const InquirePriceCreateDisksResponse = models.InquirePriceCreateDisksResponse;
const InstanceChargePrepaid = models.InstanceChargePrepaid;
const ModifyInstancesAttributeResponse = models.ModifyInstancesAttributeResponse;
const DescribeInstanceLoginKeyPairAttributeResponse = models.DescribeInstanceLoginKeyPairAttributeResponse;


/**
 * lighthouse client
 * @class
 */
class LighthouseClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("lighthouse.tencentcloudapi.com", "2020-03-24", credential, region, profile);
    }
    
    /**
     * 本接口（StopInstances）用于关闭一个或多个实例。
* 只有状态为 RUNNING 的实例才可以进行此操作。
* 接口调用成功时，实例会进入 STOPPING 状态；关闭实例成功时，实例会进入 STOPPED 状态。
* 支持批量操作。每次请求批量实例的上限为 100。
* 本接口为异步接口，请求发送成功后会返回一个 RequestId，此时操作并未立即完成。实例操作结果可以通过调用 DescribeInstances 接口查询，如果实例的最新操作状态（LatestOperationState）为“SUCCESS”，则代表操作成功。
     * @param {StopInstancesRequest} req
     * @param {function(string, StopInstancesResponse):void} cb
     * @public
     */
    StopInstances(req, cb) {
        let resp = new StopInstancesResponse();
        this.request("StopInstances", req, resp, cb);
    }

    /**
     * 本接口（ModifyFirewallRuleDescription）用于修改单条防火墙规则描述。

* FirewallVersion 用于指定要操作的防火墙的版本。传入 FirewallVersion 版本号若不等于当前防火墙的最新版本，将返回失败；若不传 FirewallVersion 则直接修改防火墙规则备注。

在 FirewallRule 参数中：
* Protocol 字段支持输入 TCP，UDP，ICMP，ALL。
* Port 字段允许输入 ALL，或者一个单独的端口号，或者用逗号分隔的离散端口号，或者用减号分隔的两个端口号代表的端口范围。当 Port 为范围时，减号分隔的第一个端口号小于第二个端口号。当 Protocol 字段不是 TCP 或 UDP 时，Port 字段只能为空或 ALL。Port 字段长度不得超过 64。
* CidrBlock 字段允许输入符合 cidr 格式标准的任意字符串。租户之间网络隔离规则优先于防火墙中的内网规则。
* Action 字段只允许输入 ACCEPT 或 DROP。
* FirewallRuleDescription 字段长度不得超过 64。
     * @param {ModifyFirewallRuleDescriptionRequest} req
     * @param {function(string, ModifyFirewallRuleDescriptionResponse):void} cb
     * @public
     */
    ModifyFirewallRuleDescription(req, cb) {
        let resp = new ModifyFirewallRuleDescriptionResponse();
        this.request("ModifyFirewallRuleDescription", req, resp, cb);
    }

    /**
     * 本接口 (TerminateInstances) 用于销毁实例。

* 处于 SHUTDOWN 状态的实例，可通过本接口销毁，且不可恢复。
* 支持批量操作，每次请求批量实例的上限为100。
* 本接口为异步接口，请求发送成功后会返回一个 RequestId，此时操作并未立即完成。实例操作结果可以通过调用 DescribeInstances 接口查询，如果实例的最新操作状态 (LatestOperationState) 为“SUCCESS”，则代表操作成功。
     * @param {TerminateInstancesRequest} req
     * @param {function(string, TerminateInstancesResponse):void} cb
     * @public
     */
    TerminateInstances(req, cb) {
        let resp = new TerminateInstancesResponse();
        this.request("TerminateInstances", req, resp, cb);
    }

    /**
     * 本接口 (DeleteBlueprints) 用于删除镜像。
     * @param {DeleteBlueprintsRequest} req
     * @param {function(string, DeleteBlueprintsResponse):void} cb
     * @public
     */
    DeleteBlueprints(req, cb) {
        let resp = new DeleteBlueprintsResponse();
        this.request("DeleteBlueprints", req, resp, cb);
    }

    /**
     * 本接口（ApplyDiskBackup）用于回滚指定云硬盘的备份点。
* 仅支持回滚到原云硬盘。
* 用于回滚的云硬盘备份点必须处于 NORMAL 状态。
  云硬盘备份点状态可以通过  [DescribeDiskBackups](https://cloud.tencent.com/document/api/1207/84379) 接口查询。
* 回滚云硬盘备份点时，云硬盘的状态必须为 UNATTACHED或ATTACHED。
  云硬盘状态可通过 [DescribeDisks](https://cloud.tencent.com/document/api/1207/66093) 接口查询。
* 如果云硬盘处于 ATTACHED状态，相关RUNNING 状态的实例会强制关机，然后回滚云硬盘备份点。
     * @param {ApplyDiskBackupRequest} req
     * @param {function(string, ApplyDiskBackupResponse):void} cb
     * @public
     */
    ApplyDiskBackup(req, cb) {
        let resp = new ApplyDiskBackupResponse();
        this.request("ApplyDiskBackup", req, resp, cb);
    }

    /**
     * 本接口(DescribeAllScenes)用于查询全地域使用场景列表。
     * @param {DescribeAllScenesRequest} req
     * @param {function(string, DescribeAllScenesResponse):void} cb
     * @public
     */
    DescribeAllScenes(req, cb) {
        let resp = new DescribeAllScenesResponse();
        this.request("DescribeAllScenes", req, resp, cb);
    }

    /**
     * 本接口(IsolateInstances)用于退还一个或多个轻量应用服务器实例。
* 只有状态为 RUNNING 或 STOPPED 的实例才可以进行此操作。
* 接口调用成功后，实例会进入SHUTDOWN 状态。
* 支持批量操作。每次请求批量资源（包括实例与数据盘）的上限为 20。
* 本接口为异步接口，请求发送成功后会返回一个 RequestId，此时操作并未立即完成。实例操作结果可以通过调用 DescribeInstances 接口查询，如果实例的最新操作状态（LatestOperationState）为“SUCCESS”，则代表操作成功。
     * @param {IsolateInstancesRequest} req
     * @param {function(string, IsolateInstancesResponse):void} cb
     * @public
     */
    IsolateInstances(req, cb) {
        let resp = new IsolateInstancesResponse();
        this.request("IsolateInstances", req, resp, cb);
    }

    /**
     * 本接口 (ModifyInstancesRenewFlag) 用于修改包年包月实例续费标识。

* 实例被标识为自动续费后，每次在实例到期时，会自动续费一个月。
* 支持批量操作。每次请求批量实例的上限为100。
* 实例操作结果可以通过调用 DescribeInstances 接口查询，如果实例的最新操作状态(LatestOperationState)为“SUCCESS”，则代表操作成功。
     * @param {ModifyInstancesRenewFlagRequest} req
     * @param {function(string, ModifyInstancesRenewFlagResponse):void} cb
     * @public
     */
    ModifyInstancesRenewFlag(req, cb) {
        let resp = new ModifyInstancesRenewFlagResponse();
        this.request("ModifyInstancesRenewFlag", req, resp, cb);
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
     * @param {CreateFirewallRulesRequest} req
     * @param {function(string, CreateFirewallRulesResponse):void} cb
     * @public
     */
    CreateFirewallRules(req, cb) {
        let resp = new CreateFirewallRulesResponse();
        this.request("CreateFirewallRules", req, resp, cb);
    }

    /**
     * 本接口（DescribeInstancesReturnable）用于查询实例是否可退还。
     * @param {DescribeInstancesReturnableRequest} req
     * @param {function(string, DescribeInstancesReturnableResponse):void} cb
     * @public
     */
    DescribeInstancesReturnable(req, cb) {
        let resp = new DescribeInstancesReturnableResponse();
        this.request("DescribeInstancesReturnable", req, resp, cb);
    }

    /**
     * 本接口（ModifyInstancesAttribute）用于修改实例的属性。
* “实例名称”仅为方便用户自己管理之用。
* 支持批量操作。每次请求批量实例的上限为 100。
* 本接口为异步接口，请求发送成功后会返回一个 RequestId，此时操作并未立即完成。实例操作结果可以通过调用 DescribeInstances 接口查询，如果实例的最新操作状态（LatestOperationState）为“SUCCESS”，则代表操作成功。
     * @param {ModifyInstancesAttributeRequest} req
     * @param {function(string, ModifyInstancesAttributeResponse):void} cb
     * @public
     */
    ModifyInstancesAttribute(req, cb) {
        let resp = new ModifyInstancesAttributeResponse();
        this.request("ModifyInstancesAttribute", req, resp, cb);
    }

    /**
     * 本接口（DescribeModifyInstanceBundles）用于查询实例可变更套餐列表。
     * @param {DescribeModifyInstanceBundlesRequest} req
     * @param {function(string, DescribeModifyInstanceBundlesResponse):void} cb
     * @public
     */
    DescribeModifyInstanceBundles(req, cb) {
        let resp = new DescribeModifyInstanceBundlesResponse();
        this.request("DescribeModifyInstanceBundles", req, resp, cb);
    }

    /**
     * 本接口 (DescribeCcnAttachedInstances) 用于查询云联网关联的实例信息。
     * @param {DescribeCcnAttachedInstancesRequest} req
     * @param {function(string, DescribeCcnAttachedInstancesResponse):void} cb
     * @public
     */
    DescribeCcnAttachedInstances(req, cb) {
        let resp = new DescribeCcnAttachedInstancesResponse();
        this.request("DescribeCcnAttachedInstances", req, resp, cb);
    }

    /**
     * 本接口（CreateKeyPair）用于创建一个密钥对。
     * @param {CreateKeyPairRequest} req
     * @param {function(string, CreateKeyPairResponse):void} cb
     * @public
     */
    CreateKeyPair(req, cb) {
        let resp = new CreateKeyPairResponse();
        this.request("CreateKeyPair", req, resp, cb);
    }

    /**
     * 本接口（DescribeBundles）用于查询套餐信息。
     * @param {DescribeBundlesRequest} req
     * @param {function(string, DescribeBundlesResponse):void} cb
     * @public
     */
    DescribeBundles(req, cb) {
        let resp = new DescribeBundlesResponse();
        this.request("DescribeBundles", req, resp, cb);
    }

    /**
     * 本接口(DescribeInstancesDiskNum)用于查询实例挂载云硬盘数量。
     * @param {DescribeInstancesDiskNumRequest} req
     * @param {function(string, DescribeInstancesDiskNumResponse):void} cb
     * @public
     */
    DescribeInstancesDiskNum(req, cb) {
        let resp = new DescribeInstancesDiskNumResponse();
        this.request("DescribeInstancesDiskNum", req, resp, cb);
    }

    /**
     * 本接口（DeleteKeyPairs）用于删除密钥对。
     * @param {DeleteKeyPairsRequest} req
     * @param {function(string, DeleteKeyPairsResponse):void} cb
     * @public
     */
    DeleteKeyPairs(req, cb) {
        let resp = new DeleteKeyPairsResponse();
        this.request("DeleteKeyPairs", req, resp, cb);
    }

    /**
     * 本接口（ModifyDisksRenewFlag）用于修改云硬盘续费标识。
     * @param {ModifyDisksRenewFlagRequest} req
     * @param {function(string, ModifyDisksRenewFlagResponse):void} cb
     * @public
     */
    ModifyDisksRenewFlag(req, cb) {
        let resp = new ModifyDisksRenewFlagResponse();
        this.request("ModifyDisksRenewFlag", req, resp, cb);
    }

    /**
     * 本接口（DescribeFirewallRulesTemplate）用于查询防火墙规则模板。
     * @param {DescribeFirewallRulesTemplateRequest} req
     * @param {function(string, DescribeFirewallRulesTemplateResponse):void} cb
     * @public
     */
    DescribeFirewallRulesTemplate(req, cb) {
        let resp = new DescribeFirewallRulesTemplateResponse();
        this.request("DescribeFirewallRulesTemplate", req, resp, cb);
    }

    /**
     * 本接口（DescribeInstances）用于查询一个或多个实例的详细信息。

* 可以根据实例 ID、实例名称或者实例的内网 IP 查询实例的详细信息。
* 过滤信息详细请见过滤器 [Filters](https://cloud.tencent.com/document/product/1207/47576#Filter) 。
* 如果参数为空，返回当前用户一定数量（Limit 所指定的数量，默认为 20）的实例。
* 支持查询实例的最新操作（LatestOperation）以及最新操作状态（LatestOperationState）。
     * @param {DescribeInstancesRequest} req
     * @param {function(string, DescribeInstancesResponse):void} cb
     * @public
     */
    DescribeInstances(req, cb) {
        let resp = new DescribeInstancesResponse();
        this.request("DescribeInstances", req, resp, cb);
    }

    /**
     * 本接口（ImportKeyPair）用于导入用户指定密钥对。
     * @param {ImportKeyPairRequest} req
     * @param {function(string, ImportKeyPairResponse):void} cb
     * @public
     */
    ImportKeyPair(req, cb) {
        let resp = new ImportKeyPairResponse();
        this.request("ImportKeyPair", req, resp, cb);
    }

    /**
     * 本接口（DeleteDiskBackups）用于删除云硬盘备份点。
云硬盘备份点必须处于 NORMAL 状态，云硬盘备份点状态可以通过 [DescribeDiskBackups](https://cloud.tencent.com/document/api/1207/84379)接口查询，见输出参数中 DiskBackupState 字段解释。
     * @param {DeleteDiskBackupsRequest} req
     * @param {function(string, DeleteDiskBackupsResponse):void} cb
     * @public
     */
    DeleteDiskBackups(req, cb) {
        let resp = new DeleteDiskBackupsResponse();
        this.request("DeleteDiskBackups", req, resp, cb);
    }

    /**
     * 本接口（DescribeInstancesTrafficPackages）用于查询一个或多个实例的流量包详情。
     * @param {DescribeInstancesTrafficPackagesRequest} req
     * @param {function(string, DescribeInstancesTrafficPackagesResponse):void} cb
     * @public
     */
    DescribeInstancesTrafficPackages(req, cb) {
        let resp = new DescribeInstancesTrafficPackagesResponse();
        this.request("DescribeInstancesTrafficPackages", req, resp, cb);
    }

    /**
     * 本接口 (InquirePriceCreateBlueprint) 用于创建镜像询价。
     * @param {InquirePriceCreateBlueprintRequest} req
     * @param {function(string, InquirePriceCreateBlueprintResponse):void} cb
     * @public
     */
    InquirePriceCreateBlueprint(req, cb) {
        let resp = new InquirePriceCreateBlueprintResponse();
        this.request("InquirePriceCreateBlueprint", req, resp, cb);
    }

    /**
     * 本接口（AttachDisks）用于挂载一个或多个云硬盘。
     * @param {AttachDisksRequest} req
     * @param {function(string, AttachDisksResponse):void} cb
     * @public
     */
    AttachDisks(req, cb) {
        let resp = new AttachDisksResponse();
        this.request("AttachDisks", req, resp, cb);
    }

    /**
     * 本接口（AssociateInstancesKeyPairs）用于绑定用户指定密钥对到实例。
* 只支持 [RUNNING, STOPPED] 状态的 LINUX_UNIX 操作系统的实例。处于 RUNNING 状态的实例会强制关机，然后绑定。
* 将密钥的公钥写入到实例的 SSH 配置当中，用户就可以通过该密钥的私钥来登录实例。
* 如果实例原来绑定过密钥，那么原来的密钥将失效。
* 如果实例原来是通过密码登录，绑定密钥后无法使用密码登录。
* 支持批量操作。每次请求批量实例的上限为 100。如果批量实例存在不允许操作的实例，操作会以特定错误码返回。
* 本接口为异步接口，请求发送成功后会返回一个 RequestId，此时操作并未立即完成。实例操作结果可以通过调用 DescribeInstances 接口查询，如果实例的最新操作状态（LatestOperationState）为“SUCCESS”，则代表操作成功。
     * @param {AssociateInstancesKeyPairsRequest} req
     * @param {function(string, AssociateInstancesKeyPairsResponse):void} cb
     * @public
     */
    AssociateInstancesKeyPairs(req, cb) {
        let resp = new AssociateInstancesKeyPairsResponse();
        this.request("AssociateInstancesKeyPairs", req, resp, cb);
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
     * @param {DeleteFirewallRulesRequest} req
     * @param {function(string, DeleteFirewallRulesResponse):void} cb
     * @public
     */
    DeleteFirewallRules(req, cb) {
        let resp = new DeleteFirewallRulesResponse();
        this.request("DeleteFirewallRules", req, resp, cb);
    }

    /**
     * 本接口（DescribeDiskBackups）用于查询云硬盘备份点的详细信息。
     * @param {DescribeDiskBackupsRequest} req
     * @param {function(string, DescribeDiskBackupsResponse):void} cb
     * @public
     */
    DescribeDiskBackups(req, cb) {
        let resp = new DescribeDiskBackupsResponse();
        this.request("DescribeDiskBackups", req, resp, cb);
    }

    /**
     * 本接口（DisassociateInstancesKeyPairs）用于解除实例与指定密钥对的绑定关系。

* 只支持 [RUNNING, STOPPED] 状态的 LINUX_UNIX 操作系统的实例。处于 RUNNING 状态的实例会强制关机，然后解绑。
* 解绑密钥后，实例可以通过原来设置的密码登录。
* 如果原来没有设置密码，解绑后将无法使用 SSH 登录。可以调用 ResetInstancesPassword 接口来设置登录密码。
* 支持批量操作。每次请求批量实例的上限为 100。
* 本接口为异步接口，请求发送成功后会返回一个 RequestId，此时操作并未立即完成。实例操作结果可以通过调用 DescribeInstances 接口查询，如果实例的最新操作状态（LatestOperationState）为“SUCCESS”，则代表操作成功。
     * @param {DisassociateInstancesKeyPairsRequest} req
     * @param {function(string, DisassociateInstancesKeyPairsResponse):void} cb
     * @public
     */
    DisassociateInstancesKeyPairs(req, cb) {
        let resp = new DisassociateInstancesKeyPairsResponse();
        this.request("DisassociateInstancesKeyPairs", req, resp, cb);
    }

    /**
     * 本接口（DescribeBundleDiscount）用于查询套餐折扣信息。
     * @param {DescribeBundleDiscountRequest} req
     * @param {function(string, DescribeBundleDiscountResponse):void} cb
     * @public
     */
    DescribeBundleDiscount(req, cb) {
        let resp = new DescribeBundleDiscountResponse();
        this.request("DescribeBundleDiscount", req, resp, cb);
    }

    /**
     * 本接口 (AttachCcn) 用于建立与云联网的关联。
     * @param {AttachCcnRequest} req
     * @param {function(string, AttachCcnResponse):void} cb
     * @public
     */
    AttachCcn(req, cb) {
        let resp = new AttachCcnResponse();
        this.request("AttachCcn", req, resp, cb);
    }

    /**
     * 本接口（DescribeBlueprints）用于查询镜像信息。
     * @param {DescribeBlueprintsRequest} req
     * @param {function(string, DescribeBlueprintsResponse):void} cb
     * @public
     */
    DescribeBlueprints(req, cb) {
        let resp = new DescribeBlueprintsResponse();
        this.request("DescribeBlueprints", req, resp, cb);
    }

    /**
     * 本接口（ResetInstancesPassword）用于将实例操作系统的密码重置为用户指定的密码。
* 只修改管理员帐号的密码。实例的操作系统不同，管理员帐号也会不一样（Windows 为 Administrator，Ubuntu 为 ubuntu ，其它系统为 root）。
* 支持批量操作。将多个实例操作系统的密码重置为相同的密码。每次请求批量实例的上限为 100。
* 建议对运行中的实例先手动关机，然后再进行密码重置。如实例处于运行中状态，本接口操作过程中会对实例进行关机操作，尝试正常关机失败后进行强制关机。
* 本接口为异步接口，请求发送成功后会返回一个 RequestId，此时操作并未立即完成。实例操作结果可以通过调用 DescribeInstances 接口查询，如果实例的最新操作状态（LatestOperationState）为“SUCCESS”，则代表操作成功。
注意：强制关机的效果等同于关闭物理计算机的电源开关。强制关机可能会导致数据丢失或文件系统损坏。
     * @param {ResetInstancesPasswordRequest} req
     * @param {function(string, ResetInstancesPasswordResponse):void} cb
     * @public
     */
    ResetInstancesPassword(req, cb) {
        let resp = new ResetInstancesPasswordResponse();
        this.request("ResetInstancesPassword", req, resp, cb);
    }

    /**
     * 本接口用于查询实例默认登录密钥属性。
     * @param {DescribeInstanceLoginKeyPairAttributeRequest} req
     * @param {function(string, DescribeInstanceLoginKeyPairAttributeResponse):void} cb
     * @public
     */
    DescribeInstanceLoginKeyPairAttribute(req, cb) {
        let resp = new DescribeInstanceLoginKeyPairAttributeResponse();
        this.request("DescribeInstanceLoginKeyPairAttribute", req, resp, cb);
    }

    /**
     * 本接口（DescribeDisksDeniedActions）用于查询一个或多个云硬盘的操作限制列表信息。
     * @param {DescribeDisksDeniedActionsRequest} req
     * @param {function(string, DescribeDisksDeniedActionsResponse):void} cb
     * @public
     */
    DescribeDisksDeniedActions(req, cb) {
        let resp = new DescribeDisksDeniedActionsResponse();
        this.request("DescribeDisksDeniedActions", req, resp, cb);
    }

    /**
     * 本接口（DescribeFirewallRules）用于查询实例的防火墙规则。
     * @param {DescribeFirewallRulesRequest} req
     * @param {function(string, DescribeFirewallRulesResponse):void} cb
     * @public
     */
    DescribeFirewallRules(req, cb) {
        let resp = new DescribeFirewallRulesResponse();
        this.request("DescribeFirewallRules", req, resp, cb);
    }

    /**
     * 本接口（DescribeDisks）用于查询云硬盘信息。
     * @param {DescribeDisksRequest} req
     * @param {function(string, DescribeDisksResponse):void} cb
     * @public
     */
    DescribeDisks(req, cb) {
        let resp = new DescribeDisksResponse();
        this.request("DescribeDisks", req, resp, cb);
    }

    /**
     * 本接口（DescribeGeneralResourceQuotas）用于查询通用资源配额信息。
     * @param {DescribeGeneralResourceQuotasRequest} req
     * @param {function(string, DescribeGeneralResourceQuotasResponse):void} cb
     * @public
     */
    DescribeGeneralResourceQuotas(req, cb) {
        let resp = new DescribeGeneralResourceQuotasResponse();
        this.request("DescribeGeneralResourceQuotas", req, resp, cb);
    }

    /**
     * 本接口 (ModifyBlueprintAttribute) 用于修改镜像属性。
     * @param {ModifyBlueprintAttributeRequest} req
     * @param {function(string, ModifyBlueprintAttributeResponse):void} cb
     * @public
     */
    ModifyBlueprintAttribute(req, cb) {
        let resp = new ModifyBlueprintAttributeResponse();
        this.request("ModifyBlueprintAttribute", req, resp, cb);
    }

    /**
     * 本接口（DescribeInstancesDeniedActions）用于查询一个或多个实例的操作限制列表信息。
     * @param {DescribeInstancesDeniedActionsRequest} req
     * @param {function(string, DescribeInstancesDeniedActionsResponse):void} cb
     * @public
     */
    DescribeInstancesDeniedActions(req, cb) {
        let resp = new DescribeInstancesDeniedActionsResponse();
        this.request("DescribeInstancesDeniedActions", req, resp, cb);
    }

    /**
     * 本接口 (ModifyDiskBackupsAttribute) 用于修改云硬盘备份点属性。
     * @param {ModifyDiskBackupsAttributeRequest} req
     * @param {function(string, ModifyDiskBackupsAttributeResponse):void} cb
     * @public
     */
    ModifyDiskBackupsAttribute(req, cb) {
        let resp = new ModifyDiskBackupsAttributeResponse();
        this.request("ModifyDiskBackupsAttribute", req, resp, cb);
    }

    /**
     * 本接口（InquirePriceRenewInstances）用于续费实例询价。
     * @param {InquirePriceRenewInstancesRequest} req
     * @param {function(string, InquirePriceRenewInstancesResponse):void} cb
     * @public
     */
    InquirePriceRenewInstances(req, cb) {
        let resp = new InquirePriceRenewInstancesResponse();
        this.request("InquirePriceRenewInstances", req, resp, cb);
    }

    /**
     * 本接口（DeleteSnapshots）用于删除快照。
快照必须处于 NORMAL 状态，快照状态可以通过 DescribeSnapshots 接口查询，见输出参数中 SnapshotState 字段解释。
     * @param {DeleteSnapshotsRequest} req
     * @param {function(string, DeleteSnapshotsResponse):void} cb
     * @public
     */
    DeleteSnapshots(req, cb) {
        let resp = new DeleteSnapshotsResponse();
        this.request("DeleteSnapshots", req, resp, cb);
    }

    /**
     * 本接口（InquiryPriceCreateInstances）用于创建实例询价。
     * @param {InquirePriceCreateInstancesRequest} req
     * @param {function(string, InquirePriceCreateInstancesResponse):void} cb
     * @public
     */
    InquirePriceCreateInstances(req, cb) {
        let resp = new InquirePriceCreateInstancesResponse();
        this.request("InquirePriceCreateInstances", req, resp, cb);
    }

    /**
     * 本接口（CreateInstanceSnapshot）用于创建指定实例的系统盘快照。
     * @param {CreateInstanceSnapshotRequest} req
     * @param {function(string, CreateInstanceSnapshotResponse):void} cb
     * @public
     */
    CreateInstanceSnapshot(req, cb) {
        let resp = new CreateInstanceSnapshotResponse();
        this.request("CreateInstanceSnapshot", req, resp, cb);
    }

    /**
     * 本接口(ModifyDisksAttribute)用于修改云硬盘属性。
     * @param {ModifyDisksAttributeRequest} req
     * @param {function(string, ModifyDisksAttributeResponse):void} cb
     * @public
     */
    ModifyDisksAttribute(req, cb) {
        let resp = new ModifyDisksAttributeResponse();
        this.request("ModifyDisksAttribute", req, resp, cb);
    }

    /**
     * 本接口（DescribeRegions）用于查询地域信息。
     * @param {DescribeRegionsRequest} req
     * @param {function(string, DescribeRegionsResponse):void} cb
     * @public
     */
    DescribeRegions(req, cb) {
        let resp = new DescribeRegionsResponse();
        this.request("DescribeRegions", req, resp, cb);
    }

    /**
     * 本接口用于设置实例默认登录密钥对属性。


     * @param {ModifyInstancesLoginKeyPairAttributeRequest} req
     * @param {function(string, ModifyInstancesLoginKeyPairAttributeResponse):void} cb
     * @public
     */
    ModifyInstancesLoginKeyPairAttribute(req, cb) {
        let resp = new ModifyInstancesLoginKeyPairAttributeResponse();
        this.request("ModifyInstancesLoginKeyPairAttribute", req, resp, cb);
    }

    /**
     * 本接口（ModifySnapshotAttribute）用于修改指定快照的属性。
<li>“快照名称”仅为方便用户自己管理之用。</li>
     * @param {ModifySnapshotAttributeRequest} req
     * @param {function(string, ModifySnapshotAttributeResponse):void} cb
     * @public
     */
    ModifySnapshotAttribute(req, cb) {
        let resp = new ModifySnapshotAttributeResponse();
        this.request("ModifySnapshotAttribute", req, resp, cb);
    }

    /**
     * 本接口（DescribeDisksReturnable）用于查询云硬盘是否可退还。
     * @param {DescribeDisksReturnableRequest} req
     * @param {function(string, DescribeDisksReturnableResponse):void} cb
     * @public
     */
    DescribeDisksReturnable(req, cb) {
        let resp = new DescribeDisksReturnableResponse();
        this.request("DescribeDisksReturnable", req, resp, cb);
    }

    /**
     * 本接口（InquirePriceRenewDisks）用于续费云硬盘询价。
     * @param {InquirePriceRenewDisksRequest} req
     * @param {function(string, InquirePriceRenewDisksResponse):void} cb
     * @public
     */
    InquirePriceRenewDisks(req, cb) {
        let resp = new InquirePriceRenewDisksResponse();
        this.request("InquirePriceRenewDisks", req, resp, cb);
    }

    /**
     * 本接口（DescribeBlueprintInstances）用于查询镜像实例信息。
     * @param {DescribeBlueprintInstancesRequest} req
     * @param {function(string, DescribeBlueprintInstancesResponse):void} cb
     * @public
     */
    DescribeBlueprintInstances(req, cb) {
        let resp = new DescribeBlueprintInstancesResponse();
        this.request("DescribeBlueprintInstances", req, resp, cb);
    }

    /**
     * 本接口（ResetInstance）用于重装指定实例上的镜像。

* 如果指定了 BlueprintId 参数，则使用指定的镜像重装；否则按照当前实例使用的镜像进行重装。
* 系统盘将会被格式化，并重置；请确保系统盘中无重要文件。
* 目前不支持实例使用该接口实现 LINUX_UNIX 和 WINDOWS 操作系统切换。
* 本接口为异步接口，请求发送成功后会返回一个 RequestId，此时操作并未立即完成。实例操作结果可以通过调用 DescribeInstances 接口查询，如果实例的最新操作状态（LatestOperationState）为“SUCCESS”，则代表操作成功。
     * @param {ResetInstanceRequest} req
     * @param {function(string, ResetInstanceResponse):void} cb
     * @public
     */
    ResetInstance(req, cb) {
        let resp = new ResetInstanceResponse();
        this.request("ResetInstance", req, resp, cb);
    }

    /**
     * 本接口（ApplyInstanceSnapshot）用于回滚指定实例的系统盘快照。
<li>仅支持回滚到原系统盘。</li>
<li>用于回滚的快照必须处于 NORMAL 状态。快照状态可以通 DescribeSnapshots 接口查询，见输出参数中 SnapshotState 字段解释。</li>
<li>回滚快照时，实例的状态必须为 STOPPED 或 RUNNING，可通过 DescribeInstances 接口查询实例状态。处于 RUNNING 状态的实例会强制关机，然后回滚快照。</li>
     * @param {ApplyInstanceSnapshotRequest} req
     * @param {function(string, ApplyInstanceSnapshotResponse):void} cb
     * @public
     */
    ApplyInstanceSnapshot(req, cb) {
        let resp = new ApplyInstanceSnapshotResponse();
        this.request("ApplyInstanceSnapshot", req, resp, cb);
    }

    /**
     * 本接口 (AttachCcn) 用于解除与云联网的关联。
     * @param {DetachCcnRequest} req
     * @param {function(string, DetachCcnResponse):void} cb
     * @public
     */
    DetachCcn(req, cb) {
        let resp = new DetachCcnResponse();
        this.request("DetachCcn", req, resp, cb);
    }

    /**
     * 本接口（DescribeSnapshots）用于查询快照的详细信息。
     * @param {DescribeSnapshotsRequest} req
     * @param {function(string, DescribeSnapshotsResponse):void} cb
     * @public
     */
    DescribeSnapshots(req, cb) {
        let resp = new DescribeSnapshotsResponse();
        this.request("DescribeSnapshots", req, resp, cb);
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
     * @param {ModifyFirewallRulesRequest} req
     * @param {function(string, ModifyFirewallRulesResponse):void} cb
     * @public
     */
    ModifyFirewallRules(req, cb) {
        let resp = new ModifyFirewallRulesResponse();
        this.request("ModifyFirewallRules", req, resp, cb);
    }

    /**
     * 本接口（DescribeDiskBackupsDeniedActions）用于查询一个或多个云硬盘备份点的操作限制列表信息。
     * @param {DescribeDiskBackupsDeniedActionsRequest} req
     * @param {function(string, DescribeDiskBackupsDeniedActionsResponse):void} cb
     * @public
     */
    DescribeDiskBackupsDeniedActions(req, cb) {
        let resp = new DescribeDiskBackupsDeniedActionsResponse();
        this.request("DescribeDiskBackupsDeniedActions", req, resp, cb);
    }

    /**
     * 本接口(RenewInstances)用于续费一个或多个轻量应用服务器实例。
* 只有状态为 RUNNING，STOPPED 或 SHUTDOWN 的实例才可以进行此操作。
* 支持批量操作。每次请求批量实例的上限为 100。
* 本接口为异步接口，请求发送成功后会返回一个 RequestId，此时操作并未立即完成。实例操作结果可以通过调用 DescribeInstances 接口查询，如果实例的最新操作状态（LatestOperationState）为“SUCCESS”，则代表操作成功。
     * @param {RenewInstancesRequest} req
     * @param {function(string, RenewInstancesResponse):void} cb
     * @public
     */
    RenewInstances(req, cb) {
        let resp = new RenewInstancesResponse();
        this.request("RenewInstances", req, resp, cb);
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

     * @param {DescribeInstanceVncUrlRequest} req
     * @param {function(string, DescribeInstanceVncUrlResponse):void} cb
     * @public
     */
    DescribeInstanceVncUrl(req, cb) {
        let resp = new DescribeInstanceVncUrlResponse();
        this.request("DescribeInstanceVncUrl", req, resp, cb);
    }

    /**
     * 本接口（TerminateDisks）用于销毁一个或多个云硬盘。
     * @param {TerminateDisksRequest} req
     * @param {function(string, TerminateDisksResponse):void} cb
     * @public
     */
    TerminateDisks(req, cb) {
        let resp = new TerminateDisksResponse();
        this.request("TerminateDisks", req, resp, cb);
    }

    /**
     * 本接口（StartInstances）用于启动一个或多个实例。

* 只有状态为 STOPPED 的实例才可以进行此操作。
* 接口调用成功时，实例会进入 STARTING 状态；启动实例成功时，实例会进入 RUNNING 状态。
* 支持批量操作。每次请求批量实例的上限为 100。
* 本接口为异步接口，请求发送成功后会返回一个 RequestId，此时操作并未立即完成。实例操作结果可以通过调用 DescribeInstances 接口查询，如果实例的最新操作状态（LatestOperationState）为“SUCCESS”，则代表操作成功。
     * @param {StartInstancesRequest} req
     * @param {function(string, StartInstancesResponse):void} cb
     * @public
     */
    StartInstances(req, cb) {
        let resp = new StartInstancesResponse();
        this.request("StartInstances", req, resp, cb);
    }

    /**
     * 本接口 (DescribeKeyPairs) 用于查询用户密钥对信息。
     * @param {DescribeKeyPairsRequest} req
     * @param {function(string, DescribeKeyPairsResponse):void} cb
     * @public
     */
    DescribeKeyPairs(req, cb) {
        let resp = new DescribeKeyPairsResponse();
        this.request("DescribeKeyPairs", req, resp, cb);
    }

    /**
     * 本接口（DescribeResetInstanceBlueprints）查询重置实例的镜像信息。
     * @param {DescribeResetInstanceBlueprintsRequest} req
     * @param {function(string, DescribeResetInstanceBlueprintsResponse):void} cb
     * @public
     */
    DescribeResetInstanceBlueprints(req, cb) {
        let resp = new DescribeResetInstanceBlueprintsResponse();
        this.request("DescribeResetInstanceBlueprints", req, resp, cb);
    }

    /**
     * 本接口 ( CreateDiskBackup  ) 用于创建指定云硬盘（当前只支持数据盘）的备份点。
     * @param {CreateDiskBackupRequest} req
     * @param {function(string, CreateDiskBackupResponse):void} cb
     * @public
     */
    CreateDiskBackup(req, cb) {
        let resp = new CreateDiskBackupResponse();
        this.request("CreateDiskBackup", req, resp, cb);
    }

    /**
     * 本接口(DescribeScenes)用于查看使用场景列表。
     * @param {DescribeScenesRequest} req
     * @param {function(string, DescribeScenesResponse):void} cb
     * @public
     */
    DescribeScenes(req, cb) {
        let resp = new DescribeScenesResponse();
        this.request("DescribeScenes", req, resp, cb);
    }

    /**
     * 本接口（InquirePriceCreateDisks）用于新购云硬盘询价。
     * @param {InquirePriceCreateDisksRequest} req
     * @param {function(string, InquirePriceCreateDisksResponse):void} cb
     * @public
     */
    InquirePriceCreateDisks(req, cb) {
        let resp = new InquirePriceCreateDisksResponse();
        this.request("InquirePriceCreateDisks", req, resp, cb);
    }

    /**
     * 本接口(DescribeDiskDiscount)用于查询云硬盘折扣信息。
     * @param {DescribeDiskDiscountRequest} req
     * @param {function(string, DescribeDiskDiscountResponse):void} cb
     * @public
     */
    DescribeDiskDiscount(req, cb) {
        let resp = new DescribeDiskDiscountResponse();
        this.request("DescribeDiskDiscount", req, resp, cb);
    }

    /**
     * 本接口（DescribeDiskConfigs）用于查询云硬盘配置。
     * @param {DescribeDiskConfigsRequest} req
     * @param {function(string, DescribeDiskConfigsResponse):void} cb
     * @public
     */
    DescribeDiskConfigs(req, cb) {
        let resp = new DescribeDiskConfigsResponse();
        this.request("DescribeDiskConfigs", req, resp, cb);
    }

    /**
     * 查询地域下可用区
     * @param {DescribeZonesRequest} req
     * @param {function(string, DescribeZonesResponse):void} cb
     * @public
     */
    DescribeZones(req, cb) {
        let resp = new DescribeZonesResponse();
        this.request("DescribeZones", req, resp, cb);
    }

    /**
     * 本接口 (ResetAttachCcn) 用于关联云联网实例申请过期时，重新申请关联操作。
     * @param {ResetAttachCcnRequest} req
     * @param {function(string, ResetAttachCcnResponse):void} cb
     * @public
     */
    ResetAttachCcn(req, cb) {
        let resp = new ResetAttachCcnResponse();
        this.request("ResetAttachCcn", req, resp, cb);
    }

    /**
     * 本接口（RebootInstances）用于重启实例。

* 只有状态为 RUNNING 的实例才可以进行此操作。
* 接口调用成功时，实例会进入 REBOOTING 状态；重启实例成功时，实例会进入 RUNNING 状态。
* 支持批量操作，每次请求批量实例的上限为 100。
* 本接口为异步接口，请求发送成功后会返回一个 RequestId，此时操作并未立即完成。实例操作结果可以通过调用 DescribeInstances 接口查询，如果实例的最新操作状态（LatestOperationState）为“SUCCESS”，则代表操作成功。
     * @param {RebootInstancesRequest} req
     * @param {function(string, RebootInstancesResponse):void} cb
     * @public
     */
    RebootInstances(req, cb) {
        let resp = new RebootInstancesResponse();
        this.request("RebootInstances", req, resp, cb);
    }

    /**
     * 本接口(CreateInstances)用于创建一个或多个指定套餐的轻量应用服务器实例。
     * @param {CreateInstancesRequest} req
     * @param {function(string, CreateInstancesResponse):void} cb
     * @public
     */
    CreateInstances(req, cb) {
        let resp = new CreateInstancesResponse();
        this.request("CreateInstances", req, resp, cb);
    }

    /**
     * 本接口 (CreateBlueprint) 用于创建镜像。
     * @param {CreateBlueprintRequest} req
     * @param {function(string, CreateBlueprintResponse):void} cb
     * @public
     */
    CreateBlueprint(req, cb) {
        let resp = new CreateBlueprintResponse();
        this.request("CreateBlueprint", req, resp, cb);
    }

    /**
     * 本接口（DescribeSnapshotsDeniedActions）用于查询一个或多个快照的操作限制列表信息。
     * @param {DescribeSnapshotsDeniedActionsRequest} req
     * @param {function(string, DescribeSnapshotsDeniedActionsResponse):void} cb
     * @public
     */
    DescribeSnapshotsDeniedActions(req, cb) {
        let resp = new DescribeSnapshotsDeniedActionsResponse();
        this.request("DescribeSnapshotsDeniedActions", req, resp, cb);
    }

    /**
     * 本接口（DetachDisks）用于卸载一个或多个云硬盘。
     * @param {DetachDisksRequest} req
     * @param {function(string, DetachDisksResponse):void} cb
     * @public
     */
    DetachDisks(req, cb) {
        let resp = new DetachDisksResponse();
        this.request("DetachDisks", req, resp, cb);
    }

    /**
     * 本接口(ModifyInstancesBundle)用于变更一个或多个轻量应用服务器实例套餐。
* 只有状态为 RUNNING，STOPPED的实例才可以进行此操作。
* 支持批量操作。每次请求批量实例的上限为 30。
* 本接口为异步接口，请求发送成功后会返回一个 RequestId，此时操作并未立即完成。实例操作结果可以通过调用 DescribeInstances 接口查询，如果实例的最新操作状态（LatestOperationState）为“SUCCESS”，则代表操作成功。
     * @param {ModifyInstancesBundleRequest} req
     * @param {function(string, ModifyInstancesBundleResponse):void} cb
     * @public
     */
    ModifyInstancesBundle(req, cb) {
        let resp = new ModifyInstancesBundleResponse();
        this.request("ModifyInstancesBundle", req, resp, cb);
    }


}
module.exports = LighthouseClient;
