import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { DeleteCfsFileSystemResponse, DescribeCfsFileSystemsRequest, DeleteMountTargetRequest, CreateCfsRuleRequest, DescribeAvailableZoneInfoResponse, UpdateCfsFileSystemNameRequest, DeleteCfsSnapshotResponse, DescribeCfsPGroupsResponse, DescribeCfsFileSystemClientsResponse, DescribeSnapshotOperationLogsResponse, UpdateCfsRuleRequest, DeleteAutoSnapshotPolicyResponse, CreateCfsSnapshotRequest, DescribeSnapshotOperationLogsRequest, DeleteCfsRuleResponse, DescribeCfsSnapshotOverviewResponse, DeleteCfsRuleRequest, DeleteMountTargetResponse, UpdateCfsPGroupRequest, UpdateCfsRuleResponse, DescribeCfsFileSystemsResponse, DescribeAutoSnapshotPoliciesResponse, CreateCfsFileSystemResponse, DescribeMountTargetsResponse, BindAutoSnapshotPolicyRequest, DescribeCfsFileSystemClientsRequest, DeleteCfsSnapshotRequest, DescribeCfsPGroupsRequest, CreateCfsPGroupRequest, DeleteCfsPGroupResponse, DescribeCfsSnapshotsResponse, DescribeAutoSnapshotPoliciesRequest, DeleteCfsFileSystemRequest, UpdateCfsSnapshotAttributeRequest, CreateCfsFileSystemRequest, DescribeMountTargetsRequest, CreateCfsPGroupResponse, UpdateCfsFileSystemPGroupRequest, UpdateCfsFileSystemNameResponse, DescribeCfsServiceStatusRequest, UpdateCfsSnapshotAttributeResponse, UnbindAutoSnapshotPolicyRequest, SignUpCfsServiceResponse, DescribeCfsServiceStatusResponse, CreateCfsRuleResponse, CreateAutoSnapshotPolicyResponse, UpdateCfsFileSystemPGroupResponse, DescribeCfsRulesRequest, BindAutoSnapshotPolicyResponse, DescribeCfsSnapshotsRequest, UpdateCfsFileSystemSizeLimitResponse, DeleteCfsPGroupRequest, UpdateAutoSnapshotPolicyRequest, DescribeCfsSnapshotOverviewRequest, UnbindAutoSnapshotPolicyResponse, UpdateCfsFileSystemSizeLimitRequest, DescribeAvailableZoneInfoRequest, UpdateCfsPGroupResponse, DescribeCfsRulesResponse, SignUpCfsServiceRequest, DeleteAutoSnapshotPolicyRequest, CreateAutoSnapshotPolicyRequest, UpdateAutoSnapshotPolicyResponse, CreateCfsSnapshotResponse } from "./cfs_models";
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
     * 查询文件系统快照d定期策略列表信息
     */
    DescribeAutoSnapshotPolicies(req: DescribeAutoSnapshotPoliciesRequest, cb?: (error: string, rep: DescribeAutoSnapshotPoliciesResponse) => void): Promise<DescribeAutoSnapshotPoliciesResponse>;
    /**
     * 文件系统绑定快照策略，可以同时绑定多个fs，一个fs 只能跟一个策略绑定
     */
    BindAutoSnapshotPolicy(req: BindAutoSnapshotPolicyRequest, cb?: (error: string, rep: BindAutoSnapshotPolicyResponse) => void): Promise<BindAutoSnapshotPolicyResponse>;
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
     * 本接口（DescribeAvailableZoneInfo）用于查询区域的可用情况。
     */
    DescribeAvailableZoneInfo(req?: DescribeAvailableZoneInfoRequest, cb?: (error: string, rep: DescribeAvailableZoneInfoResponse) => void): Promise<DescribeAvailableZoneInfoResponse>;
    /**
     * 本接口（UpdateCfsFileSystemName）用于更新文件系统名
     */
    UpdateCfsFileSystemName(req: UpdateCfsFileSystemNameRequest, cb?: (error: string, rep: UpdateCfsFileSystemNameResponse) => void): Promise<UpdateCfsFileSystemNameResponse>;
    /**
     * 本接口（UpdateCfsFileSystemSizeLimit）用于更新文件系统存储容量限制。
     */
    UpdateCfsFileSystemSizeLimit(req: UpdateCfsFileSystemSizeLimitRequest, cb?: (error: string, rep: UpdateCfsFileSystemSizeLimitResponse) => void): Promise<UpdateCfsFileSystemSizeLimitResponse>;
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
     * 更新定期自动快照策略
     */
    UpdateAutoSnapshotPolicy(req: UpdateAutoSnapshotPolicyRequest, cb?: (error: string, rep: UpdateAutoSnapshotPolicyResponse) => void): Promise<UpdateAutoSnapshotPolicyResponse>;
    /**
     * 本接口（DescribeCfsFileSystems）用于查询文件系统
     */
    DescribeCfsFileSystems(req: DescribeCfsFileSystemsRequest, cb?: (error: string, rep: DescribeCfsFileSystemsResponse) => void): Promise<DescribeCfsFileSystemsResponse>;
    /**
     * 查询文件系统快照列表
     */
    DescribeCfsSnapshots(req: DescribeCfsSnapshotsRequest, cb?: (error: string, rep: DescribeCfsSnapshotsResponse) => void): Promise<DescribeCfsSnapshotsResponse>;
    /**
     * 本接口（DescribeMountTargets）用于查询文件系统挂载点信息
     */
    DescribeMountTargets(req: DescribeMountTargetsRequest, cb?: (error: string, rep: DescribeMountTargetsResponse) => void): Promise<DescribeMountTargetsResponse>;
    /**
     * 本接口（DeleteCfsRule）用于删除权限组规则。
     */
    DeleteCfsRule(req: DeleteCfsRuleRequest, cb?: (error: string, rep: DeleteCfsRuleResponse) => void): Promise<DeleteCfsRuleResponse>;
    /**
     * 本接口（DeleteMountTarget）用于删除挂载点
     */
    DeleteMountTarget(req: DeleteMountTargetRequest, cb?: (error: string, rep: DeleteMountTargetResponse) => void): Promise<DeleteMountTargetResponse>;
    /**
     * 创建定期快照策略
     */
    CreateAutoSnapshotPolicy(req: CreateAutoSnapshotPolicyRequest, cb?: (error: string, rep: CreateAutoSnapshotPolicyResponse) => void): Promise<CreateAutoSnapshotPolicyResponse>;
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
     * 本接口（UpdateCfsRule）用于更新权限规则。
     */
    UpdateCfsRule(req: UpdateCfsRuleRequest, cb?: (error: string, rep: UpdateCfsRuleResponse) => void): Promise<UpdateCfsRuleResponse>;
    /**
     * 本接口（UpdateCfsPGroup）更新权限组信息。
     */
    UpdateCfsPGroup(req: UpdateCfsPGroupRequest, cb?: (error: string, rep: UpdateCfsPGroupResponse) => void): Promise<UpdateCfsPGroupResponse>;
}
