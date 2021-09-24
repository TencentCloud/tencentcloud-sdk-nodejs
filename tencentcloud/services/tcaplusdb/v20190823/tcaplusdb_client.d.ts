import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { ImportSnapshotsResponse, ModifyClusterNameRequest, ModifyTableGroupNameResponse, DescribeTableTagsRequest, ModifyClusterPasswordResponse, DeleteClusterResponse, DeleteTableIndexResponse, DescribeTablesResponse, ModifySnapshotsResponse, UpdateApplyResponse, DeleteClusterRequest, DeleteTableIndexRequest, DescribeTasksResponse, DeleteTablesRequest, DescribeRegionsResponse, SetTableDataFlowResponse, ModifyClusterPasswordRequest, DescribeMachineResponse, DeleteTableDataFlowRequest, DeleteTableGroupRequest, DescribeSnapshotsRequest, DescribeApplicationsResponse, CreateTableGroupRequest, ModifyClusterMachineResponse, DeleteIdlFilesResponse, ModifyTableTagsRequest, DescribeTasksRequest, ClearTablesResponse, DescribeIdlFileInfosRequest, ModifyTableTagsResponse, ModifyCensorshipRequest, DisableRestProxyRequest, DescribeTablesInRecycleResponse, ModifyTablesResponse, DeleteSnapshotsRequest, ModifyTableGroupTagsResponse, ModifyClusterTagsRequest, CreateSnapshotsRequest, DescribeTableGroupTagsResponse, SetTableIndexRequest, ModifyTableQuotasResponse, RecoverRecycleTablesRequest, DeleteSnapshotsResponse, DeleteTablesResponse, ModifyTableGroupNameRequest, DescribeTableGroupsRequest, DescribeUinInWhitelistRequest, MergeTablesDataRequest, CreateClusterRequest, ModifyTableGroupTagsRequest, EnableRestProxyRequest, ModifyTableQuotasRequest, CompareIdlFilesResponse, CreateTablesResponse, DescribeRegionsRequest, DescribeClustersResponse, ModifyClusterTagsResponse, DescribeClusterTagsResponse, SetTableIndexResponse, ClearTablesRequest, DescribeIdlFileInfosResponse, CreateSnapshotsResponse, DisableRestProxyResponse, CreateClusterResponse, DescribeClustersRequest, DeleteIdlFilesRequest, CreateBackupResponse, VerifyIdlFilesResponse, DescribeTableTagsResponse, CreateTableGroupResponse, DescribeSnapshotsResponse, VerifyIdlFilesRequest, EnableRestProxyResponse, ModifyClusterNameResponse, ModifyTablesRequest, SetTableDataFlowRequest, DescribeTableGroupTagsRequest, DescribeTablesInRecycleRequest, DescribeTablesRequest, DeleteTableDataFlowResponse, UpdateApplyRequest, ModifyTableMemosRequest, DescribeUinInWhitelistResponse, RollbackTablesResponse, CreateBackupRequest, CreateTablesRequest, DescribeClusterTagsRequest, RecoverRecycleTablesResponse, MergeTablesDataResponse, DescribeApplicationsRequest, DescribeTableGroupsResponse, DeleteTableGroupResponse, DescribeMachineRequest, RollbackTablesRequest, ModifyCensorshipResponse, CompareIdlFilesRequest, ModifyTableMemosResponse, ModifyClusterMachineRequest, ModifySnapshotsRequest, ImportSnapshotsRequest } from "./tcaplusdb_models";
/**
 * tcaplusdb client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 删除表格的分布式索引
     */
    DeleteTableIndex(req: DeleteTableIndexRequest, cb?: (error: string, rep: DeleteTableIndexResponse) => void): Promise<DeleteTableIndexResponse>;
    /**
     * 获取表格标签
     */
    DescribeTableTags(req: DescribeTableTagsRequest, cb?: (error: string, rep: DescribeTableTagsResponse) => void): Promise<DescribeTableTagsResponse>;
    /**
     * 更新申请单状态
     */
    UpdateApply(req: UpdateApplyRequest, cb?: (error: string, rep: UpdateApplyResponse) => void): Promise<UpdateApplyResponse>;
    /**
     * 修改表格标签
     */
    ModifyTableTags(req: ModifyTableTagsRequest, cb?: (error: string, rep: ModifyTableTagsResponse) => void): Promise<ModifyTableTagsResponse>;
    /**
     * 本接口用于创建TcaplusDB集群
     */
    CreateCluster(req: CreateClusterRequest, cb?: (error: string, rep: CreateClusterResponse) => void): Promise<CreateClusterResponse>;
    /**
     * 查询独占集群可以申请的剩余机器
     */
    DescribeMachine(req: DescribeMachineRequest, cb?: (error: string, rep: DescribeMachineResponse) => void): Promise<DescribeMachineResponse>;
    /**
     * 合并指定表格
     */
    MergeTablesData(req: MergeTablesDataRequest, cb?: (error: string, rep: MergeTablesDataResponse) => void): Promise<MergeTablesDataResponse>;
    /**
     * 查询本用户是否在白名单中，控制是否能创建TDR类型的APP或表
     */
    DescribeUinInWhitelist(req?: DescribeUinInWhitelistRequest, cb?: (error: string, rep: DescribeUinInWhitelistResponse) => void): Promise<DescribeUinInWhitelistResponse>;
    /**
     * 查询回收站中的表详情
     */
    DescribeTablesInRecycle(req: DescribeTablesInRecycleRequest, cb?: (error: string, rep: DescribeTablesInRecycleResponse) => void): Promise<DescribeTablesInRecycleResponse>;
    /**
     * 当restful api为关闭状态时，可以通过此接口关闭restful api
     */
    DisableRestProxy(req: DisableRestProxyRequest, cb?: (error: string, rep: DisableRestProxyResponse) => void): Promise<DisableRestProxyResponse>;
    /**
     * 表格数据回档
     */
    RollbackTables(req: RollbackTablesRequest, cb?: (error: string, rep: RollbackTablesResponse) => void): Promise<RollbackTablesResponse>;
    /**
     * 修改指定的集群名称
     */
    ModifyClusterName(req: ModifyClusterNameRequest, cb?: (error: string, rep: ModifyClusterNameResponse) => void): Promise<ModifyClusterNameResponse>;
    /**
     * 新增、修改表格数据订阅
     */
    SetTableDataFlow(req: SetTableDataFlowRequest, cb?: (error: string, rep: SetTableDataFlowResponse) => void): Promise<SetTableDataFlowResponse>;
    /**
     * 删除TcaplusDB集群，必须在集群所属所有资源（包括表格组，表）都已经释放的情况下才会成功。
     */
    DeleteCluster(req: DeleteClusterRequest, cb?: (error: string, rep: DeleteClusterResponse) => void): Promise<DeleteClusterResponse>;
    /**
     * 修改指定集群的密码，后台将在旧密码失效之前同时支持TcaplusDB SDK使用旧密码和新密码访问数据库。在旧密码失效之前不能提交新的密码修改请求，在旧密码失效之后不能提交修改旧密码过期时间的请求。
     */
    ModifyClusterPassword(req: ModifyClusterPasswordRequest, cb?: (error: string, rep: ModifyClusterPasswordResponse) => void): Promise<ModifyClusterPasswordResponse>;
    /**
     * 设置表格分布式索引
     */
    SetTableIndex(req: SetTableIndexRequest, cb?: (error: string, rep: SetTableIndexResponse) => void): Promise<SetTableIndexResponse>;
    /**
     * 指定集群ID和待删除IDL文件的信息，删除目标文件，如果文件正在被表关联则删除失败。
     */
    DeleteIdlFiles(req: DeleteIdlFilesRequest, cb?: (error: string, rep: DeleteIdlFilesResponse) => void): Promise<DeleteIdlFilesResponse>;
    /**
     * 构造表格过去时间点的快照
     */
    CreateSnapshots(req: CreateSnapshotsRequest, cb?: (error: string, rep: CreateSnapshotsResponse) => void): Promise<CreateSnapshotsResponse>;
    /**
     * 当restful api为关闭状态时，可以通过此接口开启restful apu
     */
    EnableRestProxy(req: EnableRestProxyRequest, cb?: (error: string, rep: EnableRestProxyResponse) => void): Promise<EnableRestProxyResponse>;
    /**
     * 用户创建备份任务
     */
    CreateBackup(req: CreateBackupRequest, cb?: (error: string, rep: CreateBackupResponse) => void): Promise<CreateBackupResponse>;
    /**
     * 修改集群审批状态
     */
    ModifyCensorship(req: ModifyCensorshipRequest, cb?: (error: string, rep: ModifyCensorshipResponse) => void): Promise<ModifyCensorshipResponse>;
    /**
     * 根据选择的IDL文件列表，批量创建表格
     */
    CreateTables(req: CreateTablesRequest, cb?: (error: string, rep: CreateTablesResponse) => void): Promise<CreateTablesResponse>;
    /**
     * 表格扩缩容
     */
    ModifyTableQuotas(req: ModifyTableQuotasRequest, cb?: (error: string, rep: ModifyTableQuotasResponse) => void): Promise<ModifyTableQuotasResponse>;
    /**
     * 查询TcaplusDB集群列表，包含集群详细信息。
     */
    DescribeClusters(req: DescribeClustersRequest, cb?: (error: string, rep: DescribeClustersResponse) => void): Promise<DescribeClustersResponse>;
    /**
     * 修改独占集群机器
     */
    ModifyClusterMachine(req: ModifyClusterMachineRequest, cb?: (error: string, rep: ModifyClusterMachineResponse) => void): Promise<ModifyClusterMachineResponse>;
    /**
     * 删除表格组
     */
    DeleteTableGroup(req: DeleteTableGroupRequest, cb?: (error: string, rep: DeleteTableGroupResponse) => void): Promise<DeleteTableGroupResponse>;
    /**
     * 修改TcaplusDB表格组名称
     */
    ModifyTableGroupName(req: ModifyTableGroupNameRequest, cb?: (error: string, rep: ModifyTableGroupNameResponse) => void): Promise<ModifyTableGroupNameResponse>;
    /**
     * 删除表格的快照
     */
    DeleteSnapshots(req: DeleteSnapshotsRequest, cb?: (error: string, rep: DeleteSnapshotsResponse) => void): Promise<DeleteSnapshotsResponse>;
    /**
     * 在TcaplusDB集群下创建表格组
     */
    CreateTableGroup(req: CreateTableGroupRequest, cb?: (error: string, rep: CreateTableGroupResponse) => void): Promise<CreateTableGroupResponse>;
    /**
     * 恢复回收站中，用户自行删除的表。对欠费待释放的表无效。
     */
    RecoverRecycleTables(req: RecoverRecycleTablesRequest, cb?: (error: string, rep: RecoverRecycleTablesResponse) => void): Promise<RecoverRecycleTablesResponse>;
    /**
     * 查询TcaplusDB服务支持的地域列表
     */
    DescribeRegions(req?: DescribeRegionsRequest, cb?: (error: string, rep: DescribeRegionsResponse) => void): Promise<DescribeRegionsResponse>;
    /**
     * 查询任务列表
     */
    DescribeTasks(req: DescribeTasksRequest, cb?: (error: string, rep: DescribeTasksResponse) => void): Promise<DescribeTasksResponse>;
    /**
     * 查询快照列表
     */
    DescribeSnapshots(req: DescribeSnapshotsRequest, cb?: (error: string, rep: DescribeSnapshotsResponse) => void): Promise<DescribeSnapshotsResponse>;
    /**
     * 修改集群标签
     */
    ModifyClusterTags(req: ModifyClusterTagsRequest, cb?: (error: string, rep: ModifyClusterTagsResponse) => void): Promise<ModifyClusterTagsResponse>;
    /**
     * 修改表格组标签
     */
    ModifyTableGroupTags(req: ModifyTableGroupTagsRequest, cb?: (error: string, rep: ModifyTableGroupTagsResponse) => void): Promise<ModifyTableGroupTagsResponse>;
    /**
     * 获取审批管理的申请单
     */
    DescribeApplications(req: DescribeApplicationsRequest, cb?: (error: string, rep: DescribeApplicationsResponse) => void): Promise<DescribeApplicationsResponse>;
    /**
     * 获取表格组关联的标签列表
     */
    DescribeTableGroupTags(req: DescribeTableGroupTagsRequest, cb?: (error: string, rep: DescribeTableGroupTagsResponse) => void): Promise<DescribeTableGroupTagsResponse>;
    /**
     * 将快照数据导入到新表或当前表
     */
    ImportSnapshots(req: ImportSnapshotsRequest, cb?: (error: string, rep: ImportSnapshotsResponse) => void): Promise<ImportSnapshotsResponse>;
    /**
     * 查询表格组列表
     */
    DescribeTableGroups(req: DescribeTableGroupsRequest, cb?: (error: string, rep: DescribeTableGroupsResponse) => void): Promise<DescribeTableGroupsResponse>;
    /**
     * 选中目标表格，上传并校验改表文件，返回是否允许修改表格结构的结果。
     */
    CompareIdlFiles(req: CompareIdlFilesRequest, cb?: (error: string, rep: CompareIdlFilesResponse) => void): Promise<CompareIdlFilesResponse>;
    /**
     * 查询表描述文件详情
     */
    DescribeIdlFileInfos(req: DescribeIdlFileInfosRequest, cb?: (error: string, rep: DescribeIdlFileInfosResponse) => void): Promise<DescribeIdlFileInfosResponse>;
    /**
     * 删除指定的表,第一次调用此接口代表将表移动至回收站，再次调用代表将此表格从回收站中彻底删除。
     */
    DeleteTables(req: DeleteTablesRequest, cb?: (error: string, rep: DeleteTablesResponse) => void): Promise<DeleteTablesResponse>;
    /**
     * 修改表备注信息
     */
    ModifyTableMemos(req: ModifyTableMemosRequest, cb?: (error: string, rep: ModifyTableMemosResponse) => void): Promise<ModifyTableMemosResponse>;
    /**
     * 修改表格快照的过期时间
     */
    ModifySnapshots(req: ModifySnapshotsRequest, cb?: (error: string, rep: ModifySnapshotsResponse) => void): Promise<ModifySnapshotsResponse>;
    /**
     * 上传并校验创建表格文件，返回校验合法的表格定义
     */
    VerifyIdlFiles(req: VerifyIdlFilesRequest, cb?: (error: string, rep: VerifyIdlFilesResponse) => void): Promise<VerifyIdlFilesResponse>;
    /**
     * 根据给定的表信息，清除表数据。
     */
    ClearTables(req: ClearTablesRequest, cb?: (error: string, rep: ClearTablesResponse) => void): Promise<ClearTablesResponse>;
    /**
     * 删除表格的数据订阅
     */
    DeleteTableDataFlow(req: DeleteTableDataFlowRequest, cb?: (error: string, rep: DeleteTableDataFlowResponse) => void): Promise<DeleteTableDataFlowResponse>;
    /**
     * 根据用户选定的表定义IDL文件，批量修改指定的表
     */
    ModifyTables(req: ModifyTablesRequest, cb?: (error: string, rep: ModifyTablesResponse) => void): Promise<ModifyTablesResponse>;
    /**
     * 查询表详情
     */
    DescribeTables(req: DescribeTablesRequest, cb?: (error: string, rep: DescribeTablesResponse) => void): Promise<DescribeTablesResponse>;
    /**
     * 获取集群关联的标签列表
     */
    DescribeClusterTags(req: DescribeClusterTagsRequest, cb?: (error: string, rep: DescribeClusterTagsResponse) => void): Promise<DescribeClusterTagsResponse>;
}
