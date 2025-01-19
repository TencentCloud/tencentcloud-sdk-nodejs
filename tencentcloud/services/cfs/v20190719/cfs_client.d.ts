import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { CreateMigrationTaskRequest, ScaleUpFileSystemResponse, DescribeCfsPGroupsResponse, DescribeMountTargetsResponse, DescribeSnapshotOperationLogsRequest, DescribeCfsFileSystemsResponse, CreateCfsFileSystemResponse, BindAutoSnapshotPolicyRequest, ModifyFileSystemAutoScaleUpRuleRequest, ScaleUpFileSystemRequest, CreateCfsPGroupRequest, DescribeMigrationTasksResponse, DescribeAutoSnapshotPoliciesRequest, DescribeAvailableZoneInfoRequest, DescribeMountTargetsRequest, BindAutoSnapshotPolicyResponse, SignUpCfsServiceRequest, SignUpCfsServiceResponse, DescribeCfsRulesRequest, UpdateCfsFileSystemNameRequest, DeleteCfsPGroupRequest, UpdateCfsPGroupResponse, DeleteAutoSnapshotPolicyRequest, DeleteCfsFileSystemResponse, UpdateCfsRuleRequest, DeleteUserQuotaRequest, DescribeAvailableZoneInfoResponse, DeleteCfsSnapshotResponse, DescribeCfsFileSystemClientsResponse, DeleteMountTargetResponse, CreateCfsSnapshotRequest, DescribeBucketListRequest, DeleteCfsRuleRequest, UpdateCfsRuleResponse, DeleteMigrationTaskResponse, UpdateFileSystemBandwidthLimitResponse, DescribeSnapshotOperationLogsResponse, DeleteCfsFileSystemRequest, UpdateFileSystemBandwidthLimitRequest, CreateCfsPGroupResponse, DescribeCfsServiceStatusRequest, DeleteUserQuotaResponse, DeleteMigrationTaskRequest, SetUserQuotaRequest, CreateAutoSnapshotPolicyResponse, ModifyFileSystemAutoScaleUpRuleResponse, CreateCfsSnapshotResponse, DeleteMountTargetRequest, CreateCfsRuleRequest, CreateAccessCertRequest, DescribeUserQuotaRequest, DescribeBucketListResponse, UpdateCfsFileSystemNameResponse, DescribeCfsSnapshotOverviewResponse, DeleteCfsSnapshotRequest, DescribeCfsFileSystemClientsRequest, DescribeCfsFileSystemsRequest, CreateCfsFileSystemRequest, DescribeMigrationTasksRequest, UnbindAutoSnapshotPolicyRequest, UnbindAutoSnapshotPolicyResponse, DescribeCfsServiceStatusResponse, DescribeCfsSnapshotsRequest, UpdateCfsFileSystemSizeLimitResponse, UpdateAutoSnapshotPolicyRequest, UpdateCfsFileSystemSizeLimitRequest, DescribeCfsRulesResponse, UpdateCfsFileSystemPGroupResponse, UpdateAutoSnapshotPolicyResponse, UpdateCfsFileSystemPGroupRequest, CreateMigrationTaskResponse, DeleteAutoSnapshotPolicyResponse, DeleteCfsRuleResponse, UpdateCfsSnapshotAttributeResponse, UpdateCfsPGroupRequest, CreateAccessCertResponse, SetUserQuotaResponse, DescribeCfsPGroupsRequest, DeleteCfsPGroupResponse, UpdateCfsSnapshotAttributeRequest, DescribeUserQuotaResponse, CreateCfsRuleResponse, StopMigrationTaskResponse, DescribeCfsSnapshotsResponse, StopMigrationTaskRequest, DescribeAutoSnapshotPoliciesResponse, DescribeCfsSnapshotOverviewRequest, CreateAutoSnapshotPolicyRequest } from "./cfs_models";
/**
 * cfs client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 本接口（DescribeCfsRules）用于查询权限组规则列表。
     */
    DescribeCfsRules(req: DescribeCfsRulesRequest, cb?: (error: string, rep: DescribeCfsRulesResponse) => void): Promise<DescribeCfsRulesResponse>;
    /**
     * 本接口（UpdateCfsFileSystemPGroup）用于更新文件系统所使用的权限组
     */
    UpdateCfsFileSystemPGroup(req: UpdateCfsFileSystemPGroupRequest, cb?: (error: string, rep: UpdateCfsFileSystemPGroupResponse) => void): Promise<UpdateCfsFileSystemPGroupResponse>;
    /**
     * 本接口（SignUpCfsService）用于开通CFS服务。
     */
    SignUpCfsService(req?: SignUpCfsServiceRequest, cb?: (error: string, rep: SignUpCfsServiceResponse) => void): Promise<SignUpCfsServiceResponse>;
    /**
     * 删除文件系统快照
     */
    DeleteCfsSnapshot(req: DeleteCfsSnapshotRequest, cb?: (error: string, rep: DeleteCfsSnapshotResponse) => void): Promise<DeleteCfsSnapshotResponse>;
    /**
     * 本接口（DescribeCfsPGroups）用于查询权限组列表。
     */
    DescribeCfsPGroups(req?: DescribeCfsPGroupsRequest, cb?: (error: string, rep: DescribeCfsPGroupsResponse) => void): Promise<DescribeCfsPGroupsResponse>;
    /**
     * 更新文件系统吞吐
仅吞吐型支持此接口
     */
    UpdateFileSystemBandwidthLimit(req: UpdateFileSystemBandwidthLimitRequest, cb?: (error: string, rep: UpdateFileSystemBandwidthLimitResponse) => void): Promise<UpdateFileSystemBandwidthLimitResponse>;
    /**
     * 设置文件系统配额，提供UID/GID的配额设置的接口（仅部分Turbo实例能使用，若需要调用请提交工单与我们联系）
     */
    SetUserQuota(req: SetUserQuotaRequest, cb?: (error: string, rep: SetUserQuotaResponse) => void): Promise<SetUserQuotaResponse>;
    /**
     * 查询文件系统快照定期策略列表信息
     */
    DescribeAutoSnapshotPolicies(req: DescribeAutoSnapshotPoliciesRequest, cb?: (error: string, rep: DescribeAutoSnapshotPoliciesResponse) => void): Promise<DescribeAutoSnapshotPoliciesResponse>;
    /**
     * 本接口（DescribeMountTargets）用于查询文件系统挂载点信息
     */
    DescribeMountTargets(req: DescribeMountTargetsRequest, cb?: (error: string, rep: DescribeMountTargetsResponse) => void): Promise<DescribeMountTargetsResponse>;
    /**
     * 本接口（DeleteCfsPGroup）用于删除权限组。
     */
    DeleteCfsPGroup(req: DeleteCfsPGroupRequest, cb?: (error: string, rep: DeleteCfsPGroupResponse) => void): Promise<DeleteCfsPGroupResponse>;
    /**
     * 查询挂载该文件系统的客户端。此功能需要客户端安装CFS监控插件。
     */
    DescribeCfsFileSystemClients(req: DescribeCfsFileSystemClientsRequest, cb?: (error: string, rep: DescribeCfsFileSystemClientsResponse) => void): Promise<DescribeCfsFileSystemClientsResponse>;
    /**
     * 本接口（DescribeCfsServiceStatus）用于查询用户使用CFS的服务状态。
     */
    DescribeCfsServiceStatus(req?: DescribeCfsServiceStatusRequest, cb?: (error: string, rep: DescribeCfsServiceStatusResponse) => void): Promise<DescribeCfsServiceStatusResponse>;
    /**
     * 用于终止迁移任务。
此接口需提交工单，开启白名单之后才能使用。
     */
    StopMigrationTask(req: StopMigrationTaskRequest, cb?: (error: string, rep: StopMigrationTaskResponse) => void): Promise<StopMigrationTaskResponse>;
    /**
     * 用于获取迁移任务列表。
此接口需提交工单，开启白名单之后才能使用。
     */
    DescribeMigrationTasks(req: DescribeMigrationTasksRequest, cb?: (error: string, rep: DescribeMigrationTasksResponse) => void): Promise<DescribeMigrationTasksResponse>;
    /**
     * 本接口（DescribeAvailableZoneInfo）用于查询区域的可用情况。
     */
    DescribeAvailableZoneInfo(req?: DescribeAvailableZoneInfoRequest, cb?: (error: string, rep: DescribeAvailableZoneInfoResponse) => void): Promise<DescribeAvailableZoneInfoResponse>;
    /**
     * 本接口（UpdateCfsFileSystemName）用于更新文件系统名
     */
    UpdateCfsFileSystemName(req: UpdateCfsFileSystemNameRequest, cb?: (error: string, rep: UpdateCfsFileSystemNameResponse) => void): Promise<UpdateCfsFileSystemNameResponse>;
    /**
     * 用于删除迁移任务。
此接口需提交工单，开启白名单之后才能使用。
     */
    DeleteMigrationTask(req: DeleteMigrationTaskRequest, cb?: (error: string, rep: DeleteMigrationTaskResponse) => void): Promise<DeleteMigrationTaskResponse>;
    /**
     * 该接口用于对turbo 文件系统扩容使用
     */
    ScaleUpFileSystem(req: ScaleUpFileSystemRequest, cb?: (error: string, rep: ScaleUpFileSystemResponse) => void): Promise<ScaleUpFileSystemResponse>;
    /**
     * 本接口（UpdateCfsFileSystemSizeLimit）用于更新文件系统存储容量限制。
     */
    UpdateCfsFileSystemSizeLimit(req: UpdateCfsFileSystemSizeLimitRequest, cb?: (error: string, rep: UpdateCfsFileSystemSizeLimitResponse) => void): Promise<UpdateCfsFileSystemSizeLimitResponse>;
    /**
     * 创建定期快照策略
     */
    CreateAutoSnapshotPolicy(req: CreateAutoSnapshotPolicyRequest, cb?: (error: string, rep: CreateAutoSnapshotPolicyResponse) => void): Promise<CreateAutoSnapshotPolicyResponse>;
    /**
     * 用于删除文件系统
     */
    DeleteCfsFileSystem(req: DeleteCfsFileSystemRequest, cb?: (error: string, rep: DeleteCfsFileSystemResponse) => void): Promise<DeleteCfsFileSystemResponse>;
    /**
     * 用于添加新文件系统
     */
    CreateCfsFileSystem(req: CreateCfsFileSystemRequest, cb?: (error: string, rep: CreateCfsFileSystemResponse) => void): Promise<CreateCfsFileSystemResponse>;
    /**
     * 更新文件系统快照名称及保留时长
     */
    UpdateCfsSnapshotAttribute(req: UpdateCfsSnapshotAttributeRequest, cb?: (error: string, rep: UpdateCfsSnapshotAttributeResponse) => void): Promise<UpdateCfsSnapshotAttributeResponse>;
    /**
     * 文件系统快照概览
     */
    DescribeCfsSnapshotOverview(req?: DescribeCfsSnapshotOverviewRequest, cb?: (error: string, rep: DescribeCfsSnapshotOverviewResponse) => void): Promise<DescribeCfsSnapshotOverviewResponse>;
    /**
     * 查询文件系统配额（仅部分Turbo实例能使用，若需要调用请提交工单与我们联系）
     */
    DescribeUserQuota(req: DescribeUserQuotaRequest, cb?: (error: string, rep: DescribeUserQuotaResponse) => void): Promise<DescribeUserQuotaResponse>;
    /**
     * 用来设置文件系统扩容策略
     */
    ModifyFileSystemAutoScaleUpRule(req: ModifyFileSystemAutoScaleUpRuleRequest, cb?: (error: string, rep: ModifyFileSystemAutoScaleUpRuleResponse) => void): Promise<ModifyFileSystemAutoScaleUpRuleResponse>;
    /**
     * 更新定期自动快照策略
     */
    UpdateAutoSnapshotPolicy(req: UpdateAutoSnapshotPolicyRequest, cb?: (error: string, rep: UpdateAutoSnapshotPolicyResponse) => void): Promise<UpdateAutoSnapshotPolicyResponse>;
    /**
     * 本接口（UpdateCfsRule）用于更新权限规则。
     */
    UpdateCfsRule(req: UpdateCfsRuleRequest, cb?: (error: string, rep: UpdateCfsRuleResponse) => void): Promise<UpdateCfsRuleResponse>;
    /**
     * 本接口（DescribeCfsFileSystems）用于查询文件系统
     */
    DescribeCfsFileSystems(req: DescribeCfsFileSystemsRequest, cb?: (error: string, rep: DescribeCfsFileSystemsResponse) => void): Promise<DescribeCfsFileSystemsResponse>;
    /**
     * 查询文件系统快照列表
     */
    DescribeCfsSnapshots(req: DescribeCfsSnapshotsRequest, cb?: (error: string, rep: DescribeCfsSnapshotsResponse) => void): Promise<DescribeCfsSnapshotsResponse>;
    /**
     * 文件系统绑定快照策略，可以同时绑定多个fs，一个fs 只能跟一个策略绑定
     */
    BindAutoSnapshotPolicy(req: BindAutoSnapshotPolicyRequest, cb?: (error: string, rep: BindAutoSnapshotPolicyResponse) => void): Promise<BindAutoSnapshotPolicyResponse>;
    /**
     * 本接口（DeleteCfsRule）用于删除权限组规则。
     */
    DeleteCfsRule(req: DeleteCfsRuleRequest, cb?: (error: string, rep: DeleteCfsRuleResponse) => void): Promise<DeleteCfsRuleResponse>;
    /**
     * 用于获取数据源桶列表。
此接口需提交工单，开启白名单之后才能使用。
     */
    DescribeBucketList(req: DescribeBucketListRequest, cb?: (error: string, rep: DescribeBucketListResponse) => void): Promise<DescribeBucketListResponse>;
    /**
     * 用于创建迁移任务。
此接口需提交工单，开启白名单之后才能使用。
     */
    CreateMigrationTask(req: CreateMigrationTaskRequest, cb?: (error: string, rep: CreateMigrationTaskResponse) => void): Promise<CreateMigrationTaskResponse>;
    /**
     * 本接口（DeleteMountTarget）用于删除挂载点
说明：2022年6月1日之后创建的CFS文件系统删除时无需单独调用删除挂载点操作，此API仅适用老版本的CFS实例。
     */
    DeleteMountTarget(req: DeleteMountTargetRequest, cb?: (error: string, rep: DeleteMountTargetResponse) => void): Promise<DeleteMountTargetResponse>;
    /**
     * 指定条件删除文件系统配额（仅部分Turbo实例能使用，若需要调用请提交工单与我们联系）
     */
    DeleteUserQuota(req: DeleteUserQuotaRequest, cb?: (error: string, rep: DeleteUserQuotaResponse) => void): Promise<DeleteUserQuotaResponse>;
    /**
     * 本接口（CreateCfsPGroup）用于创建权限组
     */
    CreateCfsPGroup(req: CreateCfsPGroupRequest, cb?: (error: string, rep: CreateCfsPGroupResponse) => void): Promise<CreateCfsPGroupResponse>;
    /**
     * 删除快照定期策略
     */
    DeleteAutoSnapshotPolicy(req: DeleteAutoSnapshotPolicyRequest, cb?: (error: string, rep: DeleteAutoSnapshotPolicyResponse) => void): Promise<DeleteAutoSnapshotPolicyResponse>;
    /**
     * 创建文件系统快照
     */
    CreateCfsSnapshot(req: CreateCfsSnapshotRequest, cb?: (error: string, rep: CreateCfsSnapshotResponse) => void): Promise<CreateCfsSnapshotResponse>;
    /**
     * 解除文件系统绑定的快照策略
     */
    UnbindAutoSnapshotPolicy(req: UnbindAutoSnapshotPolicyRequest, cb?: (error: string, rep: UnbindAutoSnapshotPolicyResponse) => void): Promise<UnbindAutoSnapshotPolicyResponse>;
    /**
     * 查询快照操作日志
     */
    DescribeSnapshotOperationLogs(req: DescribeSnapshotOperationLogsRequest, cb?: (error: string, rep: DescribeSnapshotOperationLogsResponse) => void): Promise<DescribeSnapshotOperationLogsResponse>;
    /**
     * 本接口（CreateCfsRule）用于创建权限组规则。
     */
    CreateCfsRule(req: CreateCfsRuleRequest, cb?: (error: string, rep: CreateCfsRuleResponse) => void): Promise<CreateCfsRuleResponse>;
    /**
     * 创建用于访问文件系统的凭证
     */
    CreateAccessCert(req: CreateAccessCertRequest, cb?: (error: string, rep: CreateAccessCertResponse) => void): Promise<CreateAccessCertResponse>;
    /**
     * 本接口（UpdateCfsPGroup）更新权限组信息。
     */
    UpdateCfsPGroup(req: UpdateCfsPGroupRequest, cb?: (error: string, rep: UpdateCfsPGroupResponse) => void): Promise<UpdateCfsPGroupResponse>;
}
