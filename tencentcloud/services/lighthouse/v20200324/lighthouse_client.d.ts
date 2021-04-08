import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { DescribeBlueprintsResponse, ApplyInstanceSnapshotResponse, ApplyInstanceSnapshotRequest, CreateBlueprintRequest, DeleteFirewallRulesRequest, StartInstancesResponse, DescribeInstancesTrafficPackagesResponse, ModifySnapshotAttributeResponse, RebootInstancesResponse, DescribeBundlesRequest, ResetInstanceResponse, StartInstancesRequest, CreateInstanceSnapshotResponse, ModifyBlueprintAttributeRequest, DeleteFirewallRulesResponse, DeleteSnapshotsRequest, DescribeBlueprintsRequest, DescribeInstancesResponse, ResetInstanceRequest, DescribeBundlesResponse, DescribeInstancesRequest, DeleteSnapshotsResponse, RebootInstancesRequest, DescribeSnapshotsResponse, DescribeInstancesTrafficPackagesRequest, DeleteBlueprintsResponse, CreateFirewallRulesRequest, DescribeFirewallRulesRequest, DescribeFirewallRulesResponse, DeleteBlueprintsRequest, ModifyBlueprintAttributeResponse, DescribeSnapshotsRequest, CreateFirewallRulesResponse, StopInstancesResponse, ModifySnapshotAttributeRequest, CreateBlueprintResponse, CreateInstanceSnapshotRequest, StopInstancesRequest } from "./lighthouse_models";
/**
 * lighthouse client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 本接口（DescribeInstancesTrafficPackages）用于查询一个或多个实例的流量包详情。
     */
    DescribeInstancesTrafficPackages(req: DescribeInstancesTrafficPackagesRequest, cb?: (error: string, rep: DescribeInstancesTrafficPackagesResponse) => void): Promise<DescribeInstancesTrafficPackagesResponse>;
    /**
     * 本接口（StopInstances）用于关闭一个或多个实例。
* 只有状态为 RUNNING 的实例才可以进行此操作。
* 接口调用成功时，实例会进入 STOPPING 状态；关闭实例成功时，实例会进入 STOPPED 状态。
* 支持批量操作。每次请求批量实例的上限为 100。
* 本接口为异步接口，请求发送成功后会返回一个 RequestId，此时操作并未立即完成。实例操作结果可以通过调用 DescribeInstances 接口查询，如果实例的最新操作状态（LatestOperationState）为“SUCCESS”，则代表操作成功。
     */
    StopInstances(req: StopInstancesRequest, cb?: (error: string, rep: StopInstancesResponse) => void): Promise<StopInstancesResponse>;
    /**
     * 本接口（DescribeInstances）用于查询一个或多个实例的详细信息。

* 可以根据实例 ID、实例名称或者实例的内网 IP 查询实例的详细信息。
* 过滤信息详细请见过滤器 [Filters](https://cloud.tencent.com/document/product/1207/47576#Filter) 。
* 如果参数为空，返回当前用户一定数量（Limit 所指定的数量，默认为 20）的实例。
* 支持查询实例的最新操作（LatestOperation）以及最新操作状态（LatestOperationState）。
     */
    DescribeInstances(req: DescribeInstancesRequest, cb?: (error: string, rep: DescribeInstancesResponse) => void): Promise<DescribeInstancesResponse>;
    /**
     * 本接口 (DeleteBlueprints) 用于删除镜像。
     */
    DeleteBlueprints(req: DeleteBlueprintsRequest, cb?: (error: string, rep: DeleteBlueprintsResponse) => void): Promise<DeleteBlueprintsResponse>;
    /**
     * 本接口（DeleteSnapshots）用于删除快照。
快照必须处于 NORMAL 状态，快照状态可以通过 DescribeSnapshots 接口查询，见输出参数中 SnapshotState 字段解释。
     */
    DeleteSnapshots(req: DeleteSnapshotsRequest, cb?: (error: string, rep: DeleteSnapshotsResponse) => void): Promise<DeleteSnapshotsResponse>;
    /**
     * 本接口（RebootInstances）用于重启实例。

* 只有状态为 RUNNING 的实例才可以进行此操作。
* 接口调用成功时，实例会进入 REBOOTING 状态；重启实例成功时，实例会进入 RUNNING 状态。
* 支持批量操作，每次请求批量实例的上限为 100。
* 本接口为异步接口，请求发送成功后会返回一个 RequestId，此时操作并未立即完成。实例操作结果可以通过调用 DescribeInstances 接口查询，如果实例的最新操作状态（LatestOperationState）为“SUCCESS”，则代表操作成功。
     */
    RebootInstances(req: RebootInstancesRequest, cb?: (error: string, rep: RebootInstancesResponse) => void): Promise<RebootInstancesResponse>;
    /**
     * 本接口（StartInstances）用于启动一个或多个实例。

* 只有状态为 STOPPED 的实例才可以进行此操作。
* 接口调用成功时，实例会进入 STARTING 状态；启动实例成功时，实例会进入 RUNNING 状态。
* 支持批量操作。每次请求批量实例的上限为 100。
* 本接口为异步接口，请求发送成功后会返回一个 RequestId，此时操作并未立即完成。实例操作结果可以通过调用 DescribeInstances 接口查询，如果实例的最新操作状态（LatestOperationState）为“SUCCESS”，则代表操作成功。
     */
    StartInstances(req: StartInstancesRequest, cb?: (error: string, rep: StartInstancesResponse) => void): Promise<StartInstancesResponse>;
    /**
     * 本接口（CreateInstanceSnapshot）用于创建指定实例的系统盘快照。
     */
    CreateInstanceSnapshot(req: CreateInstanceSnapshotRequest, cb?: (error: string, rep: CreateInstanceSnapshotResponse) => void): Promise<CreateInstanceSnapshotResponse>;
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
     * 本接口（DescribeFirewallRules）用于查询实例的防火墙规则。
     */
    DescribeFirewallRules(req: DescribeFirewallRulesRequest, cb?: (error: string, rep: DescribeFirewallRulesResponse) => void): Promise<DescribeFirewallRulesResponse>;
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
     * 本接口（DescribeBlueprints）用于查询镜像信息。
     */
    DescribeBlueprints(req: DescribeBlueprintsRequest, cb?: (error: string, rep: DescribeBlueprintsResponse) => void): Promise<DescribeBlueprintsResponse>;
    /**
     * 本接口 (ModifyBlueprintAttribute) 用于修改镜像属性。
     */
    ModifyBlueprintAttribute(req: ModifyBlueprintAttributeRequest, cb?: (error: string, rep: ModifyBlueprintAttributeResponse) => void): Promise<ModifyBlueprintAttributeResponse>;
    /**
     * 本接口（ApplyInstanceSnapshot）用于回滚指定实例的系统盘快照。
<li>仅支持回滚到原系统盘。</li>
<li>用于回滚的快照必须处于 NORMAL 状态。快照状态可以通 DescribeSnapshots 接口查询，见输出参数中 SnapshotState 字段解释。</li>
<li>回滚快照时，实例的状态必须为 STOPPED 或 RUNNING，可通过 DescribeInstances 接口查询实例状态。处于 RUNNING 状态的实例会强制关机，然后回滚快照。</li>
     */
    ApplyInstanceSnapshot(req: ApplyInstanceSnapshotRequest, cb?: (error: string, rep: ApplyInstanceSnapshotResponse) => void): Promise<ApplyInstanceSnapshotResponse>;
    /**
     * 本接口（ResetInstance）用于重装指定实例上的镜像。

* 如果指定了 BlueprintId 参数，则使用指定的镜像重装；否则按照当前实例使用的镜像进行重装。
* 系统盘将会被格式化，并重置；请确保系统盘中无重要文件。
* 目前不支持实例使用该接口实现 LINUX_UNIX 和 WINDOWS 操作系统切换。
* 本接口为异步接口，请求发送成功后会返回一个 RequestId，此时操作并未立即完成。实例操作结果可以通过调用 DescribeInstances 接口查询，如果实例的最新操作状态（LatestOperationState）为“SUCCESS”，则代表操作成功。
     */
    ResetInstance(req: ResetInstanceRequest, cb?: (error: string, rep: ResetInstanceResponse) => void): Promise<ResetInstanceResponse>;
    /**
     * 本接口 (CreateBlueprint) 用于创建镜像。
     */
    CreateBlueprint(req: CreateBlueprintRequest, cb?: (error: string, rep: CreateBlueprintResponse) => void): Promise<CreateBlueprintResponse>;
    /**
     * 本接口（DescribeSnapshots）用于查询快照的详细信息。
     */
    DescribeSnapshots(req: DescribeSnapshotsRequest, cb?: (error: string, rep: DescribeSnapshotsResponse) => void): Promise<DescribeSnapshotsResponse>;
    /**
     * 本接口（DescribeBundles）用于查询套餐信息。
     */
    DescribeBundles(req: DescribeBundlesRequest, cb?: (error: string, rep: DescribeBundlesResponse) => void): Promise<DescribeBundlesResponse>;
    /**
     * 本接口（ModifySnapshotAttribute）用于修改指定快照的属性。
<li>“快照名称”仅为方便用户自己管理之用，腾讯云并不以此名称作为提交工单或是进行快照管理操作的依据。</li>
     */
    ModifySnapshotAttribute(req: ModifySnapshotAttributeRequest, cb?: (error: string, rep: ModifySnapshotAttributeResponse) => void): Promise<ModifySnapshotAttributeResponse>;
}
