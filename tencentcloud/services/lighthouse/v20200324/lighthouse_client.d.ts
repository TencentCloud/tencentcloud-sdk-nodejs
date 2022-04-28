import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { DescribeInstancesTrafficPackagesRequest, AssociateInstancesKeyPairsResponse, RenewInstancesRequest, DescribeDisksDeniedActionsRequest, DescribeInstancesTrafficPackagesResponse, DescribeInstancesDeniedActionsRequest, DeleteKeyPairsResponse, AttachCcnRequest, CreateInstancesRequest, DescribeZonesRequest, DescribeBlueprintInstancesResponse, InquirePriceCreateDisksRequest, DetachCcnResponse, CreateInstanceSnapshotResponse, InquirePriceRenewInstancesResponse, DeleteFirewallRulesResponse, ModifyInstancesAttributeRequest, DescribeGeneralResourceQuotasRequest, DeleteKeyPairsRequest, DescribeBundlesResponse, InquirePriceRenewInstancesRequest, DescribeDiskConfigsRequest, DescribeRegionsResponse, AssociateInstancesKeyPairsRequest, AttachCcnResponse, RebootInstancesRequest, ResetAttachCcnRequest, AttachDisksRequest, ImportKeyPairResponse, DescribeSnapshotsRequest, TerminateDisksResponse, DescribeFirewallRulesTemplateRequest, DescribeKeyPairsResponse, ModifyBlueprintAttributeRequest, InquirePriceRenewDisksRequest, DescribeBlueprintInstancesRequest, ApplyInstanceSnapshotResponse, DetachDisksRequest, ModifyFirewallRulesRequest, CreateBlueprintRequest, DeleteFirewallRulesRequest, DescribeInstanceVncUrlRequest, ModifyFirewallRuleDescriptionRequest, StartInstancesResponse, TerminateInstancesResponse, DescribeInstancesDiskNumRequest, DescribeBlueprintsRequest, DescribeInstancesDeniedActionsResponse, ModifyDisksAttributeRequest, DescribeSnapshotsDeniedActionsResponse, StartInstancesRequest, DeleteSnapshotsRequest, ModifyDisksRenewFlagResponse, ModifySnapshotAttributeRequest, DescribeDisksResponse, DescribeBundleDiscountResponse, DeleteSnapshotsResponse, ModifyDisksRenewFlagRequest, DisassociateInstancesKeyPairsRequest, ImportKeyPairRequest, DeleteBlueprintsResponse, ModifyInstancesLoginKeyPairAttributeRequest, IsolateInstancesRequest, StopInstancesResponse, CreateInstancesResponse, ModifyBlueprintAttributeResponse, DescribeFirewallRulesTemplateResponse, DescribeRegionsRequest, DescribeInstancesDiskNumResponse, InquirePriceCreateBlueprintResponse, DescribeInstancesReturnableRequest, DescribeBlueprintsResponse, DescribeKeyPairsRequest, DescribeCcnAttachedInstancesRequest, ResetInstancesPasswordResponse, IsolateInstancesResponse, CreateKeyPairResponse, DescribeInstanceVncUrlResponse, ModifyFirewallRulesResponse, DescribeCcnAttachedInstancesResponse, DescribeBundlesRequest, ModifyInstancesLoginKeyPairAttributeResponse, InquirePriceRenewDisksResponse, InquirePriceCreateInstancesResponse, DescribeSnapshotsDeniedActionsRequest, DescribeDiskDiscountResponse, ResetInstancesPasswordRequest, CreateKeyPairRequest, DescribeInstancesRequest, DetachCcnRequest, DescribeSnapshotsResponse, ModifyFirewallRuleDescriptionResponse, DescribeDiskDiscountRequest, InquirePriceCreateBlueprintRequest, AttachDisksResponse, CreateFirewallRulesRequest, DescribeFirewallRulesResponse, DescribeInstancesReturnableResponse, DeleteBlueprintsRequest, CreateFirewallRulesResponse, DescribeDisksRequest, DescribeInstancesResponse, DescribeZonesResponse, CreateBlueprintResponse, DetachDisksResponse, DescribeResetInstanceBlueprintsRequest, ResetAttachCcnResponse, ModifyInstancesRenewFlagResponse, ApplyInstanceSnapshotRequest, DisassociateInstancesKeyPairsResponse, TerminateInstancesRequest, TerminateDisksRequest, ResetInstanceRequest, DescribeDiskConfigsResponse, RebootInstancesResponse, DescribeDisksDeniedActionsResponse, DescribeInstanceLoginKeyPairAttributeRequest, DescribeBundleDiscountRequest, DescribeDisksReturnableResponse, DescribeResetInstanceBlueprintsResponse, DescribeDisksReturnableRequest, ModifySnapshotAttributeResponse, DescribeGeneralResourceQuotasResponse, ModifyInstancesRenewFlagRequest, StopInstancesRequest, DescribeModifyInstanceBundlesRequest, RenewInstancesResponse, ResetInstanceResponse, DescribeFirewallRulesRequest, InquirePriceCreateInstancesRequest, DescribeModifyInstanceBundlesResponse, ModifyDisksAttributeResponse, CreateInstanceSnapshotRequest, InquirePriceCreateDisksResponse, ModifyInstancesAttributeResponse, DescribeInstanceLoginKeyPairAttributeResponse } from "./lighthouse_models";
/**
 * lighthouse client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 本接口（StopInstances）用于关闭一个或多个实例。
* 只有状态为 RUNNING 的实例才可以进行此操作。
* 接口调用成功时，实例会进入 STOPPING 状态；关闭实例成功时，实例会进入 STOPPED 状态。
* 支持批量操作。每次请求批量实例的上限为 100。
* 本接口为异步接口，请求发送成功后会返回一个 RequestId，此时操作并未立即完成。实例操作结果可以通过调用 DescribeInstances 接口查询，如果实例的最新操作状态（LatestOperationState）为“SUCCESS”，则代表操作成功。
     */
    StopInstances(req: StopInstancesRequest, cb?: (error: string, rep: StopInstancesResponse) => void): Promise<StopInstancesResponse>;
    /**
     * 本接口（ModifyFirewallRuleDescription）用于修改单条防火墙规则描述。

* FirewallVersion 用于指定要操作的防火墙的版本。传入 FirewallVersion 版本号若不等于当前防火墙的最新版本，将返回失败；若不传 FirewallVersion 则直接修改防火墙规则备注。

在 FirewallRule 参数中：
* Protocol 字段支持输入 TCP，UDP，ICMP，ALL。
* Port 字段允许输入 ALL，或者一个单独的端口号，或者用逗号分隔的离散端口号，或者用减号分隔的两个端口号代表的端口范围。当 Port 为范围时，减号分隔的第一个端口号小于第二个端口号。当 Protocol 字段不是 TCP 或 UDP 时，Port 字段只能为空或 ALL。Port 字段长度不得超过 64。
* CidrBlock 字段允许输入符合 cidr 格式标准的任意字符串。租户之间网络隔离规则优先于防火墙中的内网规则。
* Action 字段只允许输入 ACCEPT 或 DROP。
* FirewallRuleDescription 字段长度不得超过 64。
     */
    ModifyFirewallRuleDescription(req: ModifyFirewallRuleDescriptionRequest, cb?: (error: string, rep: ModifyFirewallRuleDescriptionResponse) => void): Promise<ModifyFirewallRuleDescriptionResponse>;
    /**
     * 本接口 (DeleteBlueprints) 用于删除镜像。
     */
    DeleteBlueprints(req: DeleteBlueprintsRequest, cb?: (error: string, rep: DeleteBlueprintsResponse) => void): Promise<DeleteBlueprintsResponse>;
    /**
     * 本接口(DescribeInstancesDiskNum)用于查询实例挂载云硬盘数量。
     */
    DescribeInstancesDiskNum(req: DescribeInstancesDiskNumRequest, cb?: (error: string, rep: DescribeInstancesDiskNumResponse) => void): Promise<DescribeInstancesDiskNumResponse>;
    /**
     * 本接口(IsolateInstances)用于退还一个或多个轻量应用服务器实例。
* 只有状态为 RUNNING 或 STOPPED 的实例才可以进行此操作。
* 接口调用成功后，实例会进入SHUTDOWN 状态。
* 支持批量操作。每次请求批量资源（包括实例与数据盘）的上限为 20。
* 本接口为异步接口，请求发送成功后会返回一个 RequestId，此时操作并未立即完成。实例操作结果可以通过调用 DescribeInstances 接口查询，如果实例的最新操作状态（LatestOperationState）为“SUCCESS”，则代表操作成功。
     */
    IsolateInstances(req: IsolateInstancesRequest, cb?: (error: string, rep: IsolateInstancesResponse) => void): Promise<IsolateInstancesResponse>;
    /**
     * 本接口 (ModifyInstancesRenewFlag) 用于修改包年包月实例续费标识。

* 实例被标识为自动续费后，每次在实例到期时，会自动续费一个月。
* 支持批量操作。每次请求批量实例的上限为100。
* 实例操作结果可以通过调用 DescribeInstances 接口查询，如果实例的最新操作状态(LatestOperationState)为“SUCCESS”，则代表操作成功。
     */
    ModifyInstancesRenewFlag(req: ModifyInstancesRenewFlagRequest, cb?: (error: string, rep: ModifyInstancesRenewFlagResponse) => void): Promise<ModifyInstancesRenewFlagResponse>;
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
    CreateFirewallRules(req: CreateFirewallRulesRequest, cb?: (error: string, rep: CreateFirewallRulesResponse) => void): Promise<CreateFirewallRulesResponse>;
    /**
     * 本接口（DescribeInstancesReturnable）用于查询实例是否可退还。
     */
    DescribeInstancesReturnable(req: DescribeInstancesReturnableRequest, cb?: (error: string, rep: DescribeInstancesReturnableResponse) => void): Promise<DescribeInstancesReturnableResponse>;
    /**
     * 本接口（ModifyInstancesAttribute）用于修改实例的属性。
* “实例名称”仅为方便用户自己管理之用。
* 支持批量操作。每次请求批量实例的上限为 100。
* 本接口为异步接口，请求发送成功后会返回一个 RequestId，此时操作并未立即完成。实例操作结果可以通过调用 DescribeInstances 接口查询，如果实例的最新操作状态（LatestOperationState）为“SUCCESS”，则代表操作成功。
     */
    ModifyInstancesAttribute(req: ModifyInstancesAttributeRequest, cb?: (error: string, rep: ModifyInstancesAttributeResponse) => void): Promise<ModifyInstancesAttributeResponse>;
    /**
     * 本接口（DescribeModifyInstanceBundles）用于查询实例可变更套餐列表。
     */
    DescribeModifyInstanceBundles(req: DescribeModifyInstanceBundlesRequest, cb?: (error: string, rep: DescribeModifyInstanceBundlesResponse) => void): Promise<DescribeModifyInstanceBundlesResponse>;
    /**
     * 本接口 (DescribeCcnAttachedInstances) 用于查询云联网关联的实例信息。
     */
    DescribeCcnAttachedInstances(req?: DescribeCcnAttachedInstancesRequest, cb?: (error: string, rep: DescribeCcnAttachedInstancesResponse) => void): Promise<DescribeCcnAttachedInstancesResponse>;
    /**
     * 本接口（CreateKeyPair）用于创建一个密钥对。
     */
    CreateKeyPair(req: CreateKeyPairRequest, cb?: (error: string, rep: CreateKeyPairResponse) => void): Promise<CreateKeyPairResponse>;
    /**
     * 本接口（DescribeBundles）用于查询套餐信息。
     */
    DescribeBundles(req: DescribeBundlesRequest, cb?: (error: string, rep: DescribeBundlesResponse) => void): Promise<DescribeBundlesResponse>;
    /**
     * 本接口（DeleteKeyPairs）用于删除密钥对。
     */
    DeleteKeyPairs(req: DeleteKeyPairsRequest, cb?: (error: string, rep: DeleteKeyPairsResponse) => void): Promise<DeleteKeyPairsResponse>;
    /**
     * 本接口（ModifyDisksRenewFlag）用于修改云硬盘续费标识。
     */
    ModifyDisksRenewFlag(req: ModifyDisksRenewFlagRequest, cb?: (error: string, rep: ModifyDisksRenewFlagResponse) => void): Promise<ModifyDisksRenewFlagResponse>;
    /**
     * 本接口（DescribeFirewallRulesTemplate）用于查询防火墙规则模板。
     */
    DescribeFirewallRulesTemplate(req?: DescribeFirewallRulesTemplateRequest, cb?: (error: string, rep: DescribeFirewallRulesTemplateResponse) => void): Promise<DescribeFirewallRulesTemplateResponse>;
    /**
     * 本接口（DescribeInstances）用于查询一个或多个实例的详细信息。

* 可以根据实例 ID、实例名称或者实例的内网 IP 查询实例的详细信息。
* 过滤信息详细请见过滤器 [Filters](https://cloud.tencent.com/document/product/1207/47576#Filter) 。
* 如果参数为空，返回当前用户一定数量（Limit 所指定的数量，默认为 20）的实例。
* 支持查询实例的最新操作（LatestOperation）以及最新操作状态（LatestOperationState）。
     */
    DescribeInstances(req: DescribeInstancesRequest, cb?: (error: string, rep: DescribeInstancesResponse) => void): Promise<DescribeInstancesResponse>;
    /**
     * 本接口（ImportKeyPair）用于导入用户指定密钥对。
     */
    ImportKeyPair(req: ImportKeyPairRequest, cb?: (error: string, rep: ImportKeyPairResponse) => void): Promise<ImportKeyPairResponse>;
    /**
     * 本接口（DescribeInstancesTrafficPackages）用于查询一个或多个实例的流量包详情。
     */
    DescribeInstancesTrafficPackages(req: DescribeInstancesTrafficPackagesRequest, cb?: (error: string, rep: DescribeInstancesTrafficPackagesResponse) => void): Promise<DescribeInstancesTrafficPackagesResponse>;
    /**
     * 本接口 (InquirePriceCreateBlueprint) 用于创建镜像询价。
     */
    InquirePriceCreateBlueprint(req: InquirePriceCreateBlueprintRequest, cb?: (error: string, rep: InquirePriceCreateBlueprintResponse) => void): Promise<InquirePriceCreateBlueprintResponse>;
    /**
     * 本接口（AttachDisks）用于挂载一个或多个云硬盘。
     */
    AttachDisks(req: AttachDisksRequest, cb?: (error: string, rep: AttachDisksResponse) => void): Promise<AttachDisksResponse>;
    /**
     * 本接口（AssociateInstancesKeyPairs）用于绑定用户指定密钥对到实例。
* 只支持 [RUNNING, STOPPED] 状态的 LINUX_UNIX 操作系统的实例。处于 RUNNING 状态的实例会强制关机，然后绑定。
* 将密钥的公钥写入到实例的 SSH 配置当中，用户就可以通过该密钥的私钥来登录实例。
* 如果实例原来绑定过密钥，那么原来的密钥将失效。
* 如果实例原来是通过密码登录，绑定密钥后无法使用密码登录。
* 支持批量操作。每次请求批量实例的上限为 100。如果批量实例存在不允许操作的实例，操作会以特定错误码返回。
* 本接口为异步接口，请求发送成功后会返回一个 RequestId，此时操作并未立即完成。实例操作结果可以通过调用 DescribeInstances 接口查询，如果实例的最新操作状态（LatestOperationState）为“SUCCESS”，则代表操作成功。
     */
    AssociateInstancesKeyPairs(req: AssociateInstancesKeyPairsRequest, cb?: (error: string, rep: AssociateInstancesKeyPairsResponse) => void): Promise<AssociateInstancesKeyPairsResponse>;
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
    DeleteFirewallRules(req: DeleteFirewallRulesRequest, cb?: (error: string, rep: DeleteFirewallRulesResponse) => void): Promise<DeleteFirewallRulesResponse>;
    /**
     * 本接口（DisassociateInstancesKeyPairs）用于解除实例与指定密钥对的绑定关系。

* 只支持 [RUNNING, STOPPED] 状态的 LINUX_UNIX 操作系统的实例。处于 RUNNING 状态的实例会强制关机，然后解绑。
* 解绑密钥后，实例可以通过原来设置的密码登录。
* 如果原来没有设置密码，解绑后将无法使用 SSH 登录。可以调用 ResetInstancesPassword 接口来设置登录密码。
* 支持批量操作。每次请求批量实例的上限为 100。
* 本接口为异步接口，请求发送成功后会返回一个 RequestId，此时操作并未立即完成。实例操作结果可以通过调用 DescribeInstances 接口查询，如果实例的最新操作状态（LatestOperationState）为“SUCCESS”，则代表操作成功。
     */
    DisassociateInstancesKeyPairs(req: DisassociateInstancesKeyPairsRequest, cb?: (error: string, rep: DisassociateInstancesKeyPairsResponse) => void): Promise<DisassociateInstancesKeyPairsResponse>;
    /**
     * 本接口（DescribeBundleDiscount）用于查询套餐折扣信息。
     */
    DescribeBundleDiscount(req: DescribeBundleDiscountRequest, cb?: (error: string, rep: DescribeBundleDiscountResponse) => void): Promise<DescribeBundleDiscountResponse>;
    /**
     * 本接口 (AttachCcn) 用于建立与云联网的关联。
     */
    AttachCcn(req: AttachCcnRequest, cb?: (error: string, rep: AttachCcnResponse) => void): Promise<AttachCcnResponse>;
    /**
     * 本接口（DescribeBlueprints）用于查询镜像信息。
     */
    DescribeBlueprints(req: DescribeBlueprintsRequest, cb?: (error: string, rep: DescribeBlueprintsResponse) => void): Promise<DescribeBlueprintsResponse>;
    /**
     * 本接口（ResetInstancesPassword）用于将实例操作系统的密码重置为用户指定的密码。
* 只修改管理员帐号的密码。实例的操作系统不同，管理员帐号也会不一样（Windows 为 Administrator，Ubuntu 为 ubuntu ，其它系统为 root）。
* 支持批量操作。将多个实例操作系统的密码重置为相同的密码。每次请求批量实例的上限为 100。
* 建议对运行中的实例先手动关机，然后再进行密码重置。如实例处于运行中状态，本接口操作过程中会对实例进行关机操作，尝试正常关机失败后进行强制关机。
* 本接口为异步接口，请求发送成功后会返回一个 RequestId，此时操作并未立即完成。实例操作结果可以通过调用 DescribeInstances 接口查询，如果实例的最新操作状态（LatestOperationState）为“SUCCESS”，则代表操作成功。
注意：强制关机的效果等同于关闭物理计算机的电源开关。强制关机可能会导致数据丢失或文件系统损坏。
     */
    ResetInstancesPassword(req: ResetInstancesPasswordRequest, cb?: (error: string, rep: ResetInstancesPasswordResponse) => void): Promise<ResetInstancesPasswordResponse>;
    /**
     * 本接口用于查询实例默认登录密钥属性。
     */
    DescribeInstanceLoginKeyPairAttribute(req: DescribeInstanceLoginKeyPairAttributeRequest, cb?: (error: string, rep: DescribeInstanceLoginKeyPairAttributeResponse) => void): Promise<DescribeInstanceLoginKeyPairAttributeResponse>;
    /**
     * 本接口（DescribeDisksDeniedActions）用于查询一个或多个云硬盘的操作限制列表信息。
     */
    DescribeDisksDeniedActions(req: DescribeDisksDeniedActionsRequest, cb?: (error: string, rep: DescribeDisksDeniedActionsResponse) => void): Promise<DescribeDisksDeniedActionsResponse>;
    /**
     * 本接口（DescribeFirewallRules）用于查询实例的防火墙规则。
     */
    DescribeFirewallRules(req: DescribeFirewallRulesRequest, cb?: (error: string, rep: DescribeFirewallRulesResponse) => void): Promise<DescribeFirewallRulesResponse>;
    /**
     * 本接口（DescribeDisks）用于查询云硬盘信息。
     */
    DescribeDisks(req: DescribeDisksRequest, cb?: (error: string, rep: DescribeDisksResponse) => void): Promise<DescribeDisksResponse>;
    /**
     * 本接口（DescribeGeneralResourceQuotas）用于查询通用资源配额信息。
     */
    DescribeGeneralResourceQuotas(req: DescribeGeneralResourceQuotasRequest, cb?: (error: string, rep: DescribeGeneralResourceQuotasResponse) => void): Promise<DescribeGeneralResourceQuotasResponse>;
    /**
     * 本接口 (ModifyBlueprintAttribute) 用于修改镜像属性。
     */
    ModifyBlueprintAttribute(req: ModifyBlueprintAttributeRequest, cb?: (error: string, rep: ModifyBlueprintAttributeResponse) => void): Promise<ModifyBlueprintAttributeResponse>;
    /**
     * 本接口（DescribeInstancesDeniedActions）用于查询一个或多个实例的操作限制列表信息。
     */
    DescribeInstancesDeniedActions(req: DescribeInstancesDeniedActionsRequest, cb?: (error: string, rep: DescribeInstancesDeniedActionsResponse) => void): Promise<DescribeInstancesDeniedActionsResponse>;
    /**
     * 本接口（InquirePriceRenewInstances）用于续费实例询价。
     */
    InquirePriceRenewInstances(req: InquirePriceRenewInstancesRequest, cb?: (error: string, rep: InquirePriceRenewInstancesResponse) => void): Promise<InquirePriceRenewInstancesResponse>;
    /**
     * 本接口（DeleteSnapshots）用于删除快照。
快照必须处于 NORMAL 状态，快照状态可以通过 DescribeSnapshots 接口查询，见输出参数中 SnapshotState 字段解释。
     */
    DeleteSnapshots(req: DeleteSnapshotsRequest, cb?: (error: string, rep: DeleteSnapshotsResponse) => void): Promise<DeleteSnapshotsResponse>;
    /**
     * 本接口（InquiryPriceCreateInstances）用于创建实例询价。
     */
    InquirePriceCreateInstances(req: InquirePriceCreateInstancesRequest, cb?: (error: string, rep: InquirePriceCreateInstancesResponse) => void): Promise<InquirePriceCreateInstancesResponse>;
    /**
     * 本接口（CreateInstanceSnapshot）用于创建指定实例的系统盘快照。
     */
    CreateInstanceSnapshot(req: CreateInstanceSnapshotRequest, cb?: (error: string, rep: CreateInstanceSnapshotResponse) => void): Promise<CreateInstanceSnapshotResponse>;
    /**
     * 本接口(ModifyDisksAttribute)用于修改云硬盘属性。
     */
    ModifyDisksAttribute(req: ModifyDisksAttributeRequest, cb?: (error: string, rep: ModifyDisksAttributeResponse) => void): Promise<ModifyDisksAttributeResponse>;
    /**
     * 本接口（DescribeRegions）用于查询地域信息。
     */
    DescribeRegions(req?: DescribeRegionsRequest, cb?: (error: string, rep: DescribeRegionsResponse) => void): Promise<DescribeRegionsResponse>;
    /**
     * 本接口用于设置实例默认登录密钥对属性。


     */
    ModifyInstancesLoginKeyPairAttribute(req: ModifyInstancesLoginKeyPairAttributeRequest, cb?: (error: string, rep: ModifyInstancesLoginKeyPairAttributeResponse) => void): Promise<ModifyInstancesLoginKeyPairAttributeResponse>;
    /**
     * 本接口（ModifySnapshotAttribute）用于修改指定快照的属性。
<li>“快照名称”仅为方便用户自己管理之用。</li>
     */
    ModifySnapshotAttribute(req: ModifySnapshotAttributeRequest, cb?: (error: string, rep: ModifySnapshotAttributeResponse) => void): Promise<ModifySnapshotAttributeResponse>;
    /**
     * 本接口（DescribeDisksReturnable）用于查询云硬盘是否可退还。
     */
    DescribeDisksReturnable(req: DescribeDisksReturnableRequest, cb?: (error: string, rep: DescribeDisksReturnableResponse) => void): Promise<DescribeDisksReturnableResponse>;
    /**
     * 本接口（InquirePriceRenewDisks）用于续费云硬盘询价。
     */
    InquirePriceRenewDisks(req: InquirePriceRenewDisksRequest, cb?: (error: string, rep: InquirePriceRenewDisksResponse) => void): Promise<InquirePriceRenewDisksResponse>;
    /**
     * 本接口（DescribeBlueprintInstances）用于查询镜像实例信息。
     */
    DescribeBlueprintInstances(req: DescribeBlueprintInstancesRequest, cb?: (error: string, rep: DescribeBlueprintInstancesResponse) => void): Promise<DescribeBlueprintInstancesResponse>;
    /**
     * 本接口（ResetInstance）用于重装指定实例上的镜像。

* 如果指定了 BlueprintId 参数，则使用指定的镜像重装；否则按照当前实例使用的镜像进行重装。
* 系统盘将会被格式化，并重置；请确保系统盘中无重要文件。
* 目前不支持实例使用该接口实现 LINUX_UNIX 和 WINDOWS 操作系统切换。
* 本接口为异步接口，请求发送成功后会返回一个 RequestId，此时操作并未立即完成。实例操作结果可以通过调用 DescribeInstances 接口查询，如果实例的最新操作状态（LatestOperationState）为“SUCCESS”，则代表操作成功。
     */
    ResetInstance(req: ResetInstanceRequest, cb?: (error: string, rep: ResetInstanceResponse) => void): Promise<ResetInstanceResponse>;
    /**
     * 本接口（ApplyInstanceSnapshot）用于回滚指定实例的系统盘快照。
<li>仅支持回滚到原系统盘。</li>
<li>用于回滚的快照必须处于 NORMAL 状态。快照状态可以通 DescribeSnapshots 接口查询，见输出参数中 SnapshotState 字段解释。</li>
<li>回滚快照时，实例的状态必须为 STOPPED 或 RUNNING，可通过 DescribeInstances 接口查询实例状态。处于 RUNNING 状态的实例会强制关机，然后回滚快照。</li>
     */
    ApplyInstanceSnapshot(req: ApplyInstanceSnapshotRequest, cb?: (error: string, rep: ApplyInstanceSnapshotResponse) => void): Promise<ApplyInstanceSnapshotResponse>;
    /**
     * 本接口 (AttachCcn) 用于解除与云联网的关联。
     */
    DetachCcn(req: DetachCcnRequest, cb?: (error: string, rep: DetachCcnResponse) => void): Promise<DetachCcnResponse>;
    /**
     * 本接口（DescribeSnapshots）用于查询快照的详细信息。
     */
    DescribeSnapshots(req: DescribeSnapshotsRequest, cb?: (error: string, rep: DescribeSnapshotsResponse) => void): Promise<DescribeSnapshotsResponse>;
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
    ModifyFirewallRules(req: ModifyFirewallRulesRequest, cb?: (error: string, rep: ModifyFirewallRulesResponse) => void): Promise<ModifyFirewallRulesResponse>;
    /**
     * 本接口 (TerminateInstances) 用于销毁实例。

* 处于 SHUTDOWN 状态的实例，可通过本接口销毁，且不可恢复。
* 支持批量操作，每次请求批量实例的上限为100。
* 本接口为异步接口，请求发送成功后会返回一个 RequestId，此时操作并未立即完成。实例操作结果可以通过调用 DescribeInstances 接口查询，如果实例的最新操作状态 (LatestOperationState) 为“SUCCESS”，则代表操作成功。
     */
    TerminateInstances(req: TerminateInstancesRequest, cb?: (error: string, rep: TerminateInstancesResponse) => void): Promise<TerminateInstancesResponse>;
    /**
     * 本接口(RenewInstances)用于续费一个或多个轻量应用服务器实例。
* 只有状态为 RUNNING，STOPPED 或 SHUTDOWN 的实例才可以进行此操作。
* 支持批量操作。每次请求批量实例的上限为 100。
* 本接口为异步接口，请求发送成功后会返回一个 RequestId，此时操作并未立即完成。实例操作结果可以通过调用 DescribeInstances 接口查询，如果实例的最新操作状态（LatestOperationState）为“SUCCESS”，则代表操作成功。
     */
    RenewInstances(req: RenewInstancesRequest, cb?: (error: string, rep: RenewInstancesResponse) => void): Promise<RenewInstancesResponse>;
    /**
     * 本接口（DescribeInstanceVncUrl）用于查询实例管理终端地址，获取的地址可用于实例的 VNC 登录。

* 处于 RUNNING 状态的机器可使用此功能。
* 管理终端地址的有效期为 15 秒，调用接口成功后如果 15 秒内不使用该链接进行访问，管理终端地址自动失效，您需要重新查询。
* 管理终端地址一旦被访问，将自动失效，您需要重新查询。
* 如果连接断开，每分钟内重新连接的次数不能超过 30 次。
     */
    DescribeInstanceVncUrl(req: DescribeInstanceVncUrlRequest, cb?: (error: string, rep: DescribeInstanceVncUrlResponse) => void): Promise<DescribeInstanceVncUrlResponse>;
    /**
     * 本接口（TerminateDisks）用于销毁一个或多个云硬盘。
     */
    TerminateDisks(req: TerminateDisksRequest, cb?: (error: string, rep: TerminateDisksResponse) => void): Promise<TerminateDisksResponse>;
    /**
     * 本接口（StartInstances）用于启动一个或多个实例。

* 只有状态为 STOPPED 的实例才可以进行此操作。
* 接口调用成功时，实例会进入 STARTING 状态；启动实例成功时，实例会进入 RUNNING 状态。
* 支持批量操作。每次请求批量实例的上限为 100。
* 本接口为异步接口，请求发送成功后会返回一个 RequestId，此时操作并未立即完成。实例操作结果可以通过调用 DescribeInstances 接口查询，如果实例的最新操作状态（LatestOperationState）为“SUCCESS”，则代表操作成功。
     */
    StartInstances(req: StartInstancesRequest, cb?: (error: string, rep: StartInstancesResponse) => void): Promise<StartInstancesResponse>;
    /**
     * 本接口 (DescribeKeyPairs) 用于查询用户密钥对信息。
     */
    DescribeKeyPairs(req: DescribeKeyPairsRequest, cb?: (error: string, rep: DescribeKeyPairsResponse) => void): Promise<DescribeKeyPairsResponse>;
    /**
     * 本接口（DescribeResetInstanceBlueprints）查询重置实例的镜像信息。
     */
    DescribeResetInstanceBlueprints(req: DescribeResetInstanceBlueprintsRequest, cb?: (error: string, rep: DescribeResetInstanceBlueprintsResponse) => void): Promise<DescribeResetInstanceBlueprintsResponse>;
    /**
     * 本接口（DescribeSnapshotsDeniedActions）用于查询一个或多个快照的操作限制列表信息。
     */
    DescribeSnapshotsDeniedActions(req: DescribeSnapshotsDeniedActionsRequest, cb?: (error: string, rep: DescribeSnapshotsDeniedActionsResponse) => void): Promise<DescribeSnapshotsDeniedActionsResponse>;
    /**
     * 本接口（InquirePriceCreateDisks）用于新购云硬盘询价。
     */
    InquirePriceCreateDisks(req: InquirePriceCreateDisksRequest, cb?: (error: string, rep: InquirePriceCreateDisksResponse) => void): Promise<InquirePriceCreateDisksResponse>;
    /**
     * 本接口(DescribeDiskDiscount)用于查询云硬盘折扣信息。
     */
    DescribeDiskDiscount(req: DescribeDiskDiscountRequest, cb?: (error: string, rep: DescribeDiskDiscountResponse) => void): Promise<DescribeDiskDiscountResponse>;
    /**
     * 本接口（DescribeDiskConfigs）用于查询云硬盘配置。
     */
    DescribeDiskConfigs(req: DescribeDiskConfigsRequest, cb?: (error: string, rep: DescribeDiskConfigsResponse) => void): Promise<DescribeDiskConfigsResponse>;
    /**
     * 查询地域下可用区
     */
    DescribeZones(req?: DescribeZonesRequest, cb?: (error: string, rep: DescribeZonesResponse) => void): Promise<DescribeZonesResponse>;
    /**
     * 本接口 (ResetAttachCcn) 用于关联云联网实例申请过期时，重新申请关联操作。
     */
    ResetAttachCcn(req: ResetAttachCcnRequest, cb?: (error: string, rep: ResetAttachCcnResponse) => void): Promise<ResetAttachCcnResponse>;
    /**
     * 本接口（RebootInstances）用于重启实例。

* 只有状态为 RUNNING 的实例才可以进行此操作。
* 接口调用成功时，实例会进入 REBOOTING 状态；重启实例成功时，实例会进入 RUNNING 状态。
* 支持批量操作，每次请求批量实例的上限为 100。
* 本接口为异步接口，请求发送成功后会返回一个 RequestId，此时操作并未立即完成。实例操作结果可以通过调用 DescribeInstances 接口查询，如果实例的最新操作状态（LatestOperationState）为“SUCCESS”，则代表操作成功。
     */
    RebootInstances(req: RebootInstancesRequest, cb?: (error: string, rep: RebootInstancesResponse) => void): Promise<RebootInstancesResponse>;
    /**
     * 本接口(CreateInstances)用于创建一个或多个指定套餐的轻量应用服务器实例。
     */
    CreateInstances(req: CreateInstancesRequest, cb?: (error: string, rep: CreateInstancesResponse) => void): Promise<CreateInstancesResponse>;
    /**
     * 本接口 (CreateBlueprint) 用于创建镜像。
     */
    CreateBlueprint(req: CreateBlueprintRequest, cb?: (error: string, rep: CreateBlueprintResponse) => void): Promise<CreateBlueprintResponse>;
    /**
     * 本接口（DetachDisks）用于卸载一个或多个云硬盘。
     */
    DetachDisks(req: DetachDisksRequest, cb?: (error: string, rep: DetachDisksResponse) => void): Promise<DetachDisksResponse>;
}
