import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { ResetAccountPasswordResponse, ModifyClusterNameRequest, ModifyClustersAutoRenewFlagResponse, DescribeClustersRequest, DeleteClusterInstancesResponse, ModifyClusterInstancesSpecRequest, DescribeClusterBackupsRequest, ResetAccountPasswordRequest, DescribeClusterInstancesResponse, DeleteClusterResponse, CreateClusterInstancesResponse, RestartClusterInstancesRequest, CreateClusterResponse, RecoverClusterInstancesRequest, CloneClusterToPointInTimeResponse, CreateClusterRequest, DeleteClusterInstancesRequest, RestartClusterInstancesResponse, ModifyClusterInstancesSpecResponse, CreateClusterInstancesRequest, DescribeClusterRecoveryTimeRangeResponse, DescribeClusterEndpointsResponse, DescribeResourcesByDealNameRequest, ModifyClusterEndpointWanStatusResponse, ModifyClusterEndpointWanStatusRequest, RecoverClusterRequest, DescribeClusterInstancesRequest, DeleteClusterRequest, RecoverClusterInstancesResponse, RecoverClusterResponse, DescribeClusterBackupsResponse, DescribeAccountsResponse, TransformClusterPayModeRequest, RenewClusterRequest, DescribeClusterEndpointsRequest, ModifyClusterNameResponse, IsolateClusterInstancesResponse, RenewClusterResponse, IsolateClusterInstancesRequest, IsolateClusterResponse, ModifyAccountDescriptionRequest, ModifyAccountDescriptionResponse, IsolateClusterRequest, ModifyClustersAutoRenewFlagRequest, TransformClusterPayModeResponse, DescribeClustersResponse, DescribeResourcesByDealNameResponse, CloneClusterToPointInTimeRequest, DescribeClusterRecoveryTimeRangeRequest, DescribeAccountsRequest } from "./tdcpg_models";
/**
 * tdcpg client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 修改实例规格，此接口只针对状态为running(运行中)的实例生效
     */
    ModifyClusterInstancesSpec(req: ModifyClusterInstancesSpecRequest, cb?: (error: string, rep: ModifyClusterInstancesSpecResponse) => void): Promise<ModifyClusterInstancesSpecResponse>;
    /**
     * 创建集群
     */
    CreateCluster(req: CreateClusterRequest, cb?: (error: string, rep: CreateClusterResponse) => void): Promise<CreateClusterResponse>;
    /**
     * 修改数据库账号描述
     */
    ModifyAccountDescription(req: ModifyAccountDescriptionRequest, cb?: (error: string, rep: ModifyAccountDescriptionResponse) => void): Promise<ModifyAccountDescriptionResponse>;
    /**
     * 修改集群名字
     */
    ModifyClusterName(req: ModifyClusterNameRequest, cb?: (error: string, rep: ModifyClusterNameResponse) => void): Promise<ModifyClusterNameResponse>;
    /**
     * 转换集群付费模式，目前只支持从 后付费 转换成 与预付费。
     */
    TransformClusterPayMode(req: TransformClusterPayModeRequest, cb?: (error: string, rep: TransformClusterPayModeResponse) => void): Promise<TransformClusterPayModeResponse>;
    /**
     * 修改集群自动续费，只对预付费集群生效。
     */
    ModifyClustersAutoRenewFlag(req: ModifyClustersAutoRenewFlagRequest, cb?: (error: string, rep: ModifyClustersAutoRenewFlagResponse) => void): Promise<ModifyClustersAutoRenewFlagResponse>;
    /**
     * 重置数据库账号密码
     */
    ResetAccountPassword(req: ResetAccountPasswordRequest, cb?: (error: string, rep: ResetAccountPasswordResponse) => void): Promise<ResetAccountPasswordResponse>;
    /**
     * 在集群中新建实例
     */
    CreateClusterInstances(req: CreateClusterInstancesRequest, cb?: (error: string, rep: CreateClusterInstancesResponse) => void): Promise<CreateClusterInstancesResponse>;
    /**
     * 删除集群，集群中的实例和数据都将被删除，且无法恢复。只有当集群状态处于isolated(已隔离)时才生效。
     */
    DeleteCluster(req: DeleteClusterRequest, cb?: (error: string, rep: DeleteClusterResponse) => void): Promise<DeleteClusterResponse>;
    /**
     * 查询实例
     */
    DescribeClusterInstances(req: DescribeClusterInstancesRequest, cb?: (error: string, rep: DescribeClusterInstancesResponse) => void): Promise<DescribeClusterInstancesResponse>;
    /**
     * 查询集群可回档时间范围
     */
    DescribeClusterRecoveryTimeRange(req: DescribeClusterRecoveryTimeRangeRequest, cb?: (error: string, rep: DescribeClusterRecoveryTimeRangeResponse) => void): Promise<DescribeClusterRecoveryTimeRangeResponse>;
    /**
     * 隔离集群，集群的接入点网络将会断掉无法连接使用数据库。只有当集群状态处于running(运行中)时才生效。
     */
    IsolateCluster(req: IsolateClusterRequest, cb?: (error: string, rep: IsolateClusterResponse) => void): Promise<IsolateClusterResponse>;
    /**
     * 查询集群
     */
    DescribeClusters(req: DescribeClustersRequest, cb?: (error: string, rep: DescribeClustersResponse) => void): Promise<DescribeClustersResponse>;
    /**
     * 重启实例，此接口只针对状态为running(运行中)的实例生效。
     */
    RestartClusterInstances(req: RestartClusterInstancesRequest, cb?: (error: string, rep: RestartClusterInstancesResponse) => void): Promise<RestartClusterInstancesResponse>;
    /**
     * 恢复实例。此接口的使用场景包括：
 - 读写实例状态为running(运行中)时，批量恢复状态为isolated(已隔离)的只读实例
 - 读写实例状态为isolated(已隔离)时，恢复读写实例
 - 读写实例状态为isolated(已隔离)时，批量恢复读写实例以及状态为isolated(已隔离)的只读实例
     */
    RecoverClusterInstances(req: RecoverClusterInstancesRequest, cb?: (error: string, rep: RecoverClusterInstancesResponse) => void): Promise<RecoverClusterInstancesResponse>;
    /**
     * 开启或者关闭接入点外网
     */
    ModifyClusterEndpointWanStatus(req: ModifyClusterEndpointWanStatusRequest, cb?: (error: string, rep: ModifyClusterEndpointWanStatusResponse) => void): Promise<ModifyClusterEndpointWanStatusResponse>;
    /**
     * 恢复集群，恢复集群的接入点网络，恢复后继续连接使用数据库。只有当集群状态处于isolated(已隔离)时才生效。
     */
    RecoverCluster(req: RecoverClusterRequest, cb?: (error: string, rep: RecoverClusterResponse) => void): Promise<RecoverClusterResponse>;
    /**
     * 使用指定时间点的备份克隆一个新的集群
     */
    CloneClusterToPointInTime(req: CloneClusterToPointInTimeRequest, cb?: (error: string, rep: CloneClusterToPointInTimeResponse) => void): Promise<CloneClusterToPointInTimeResponse>;
    /**
     * 查询数据库账号信息
     */
    DescribeAccounts(req: DescribeAccountsRequest, cb?: (error: string, rep: DescribeAccountsResponse) => void): Promise<DescribeAccountsResponse>;
    /**
     * 根据订单号获取资源信息
     */
    DescribeResourcesByDealName(req: DescribeResourcesByDealNameRequest, cb?: (error: string, rep: DescribeResourcesByDealNameResponse) => void): Promise<DescribeResourcesByDealNameResponse>;
    /**
     * 删除实例。只有当实例状态处于isolated(已隔离)时才生效。
     */
    DeleteClusterInstances(req: DeleteClusterInstancesRequest, cb?: (error: string, rep: DeleteClusterInstancesResponse) => void): Promise<DeleteClusterInstancesResponse>;
    /**
     * 查询集群接入点信息
     */
    DescribeClusterEndpoints(req: DescribeClusterEndpointsRequest, cb?: (error: string, rep: DescribeClusterEndpointsResponse) => void): Promise<DescribeClusterEndpointsResponse>;
    /**
     * 查询集群的备份集
     */
    DescribeClusterBackups(req: DescribeClusterBackupsRequest, cb?: (error: string, rep: DescribeClusterBackupsResponse) => void): Promise<DescribeClusterBackupsResponse>;
    /**
     * 续费集群
     */
    RenewCluster(req: RenewClusterRequest, cb?: (error: string, rep: RenewClusterResponse) => void): Promise<RenewClusterResponse>;
    /**
     * 隔离实例。此接口只针对状态为running的实例生效，使用场景包括：
 - 批量隔离集群内所有的实例
 - 在读写实例为running(运行中)时，单个/批量隔离只读实例
 - 集群内所有只读实例为isolated(已隔离)时，单独隔离读写实例
     */
    IsolateClusterInstances(req: IsolateClusterInstancesRequest, cb?: (error: string, rep: IsolateClusterInstancesResponse) => void): Promise<IsolateClusterInstancesResponse>;
}
