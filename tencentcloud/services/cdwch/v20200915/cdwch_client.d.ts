import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { DescribeInstanceShardsRequest, ScaleOutInstanceRequest, ScaleOutInstanceResponse, DescribeInstancesNewResponse, DescribeInstanceKeyValConfigsRequest, DescribeInstanceNodesRequest, DescribeClusterConfigsResponse, ActionAlterCkUserRequest, DescribeCkSqlApisRequest, DescribeBackUpScheduleRequest, DescribeSpecResponse, DescribeSpecRequest, ScaleCNOutUpInstanceResponse, DestroyInstanceRequest, ModifyUserNewPrivilegeRequest, DescribeBackUpTablesResponse, OpenBackUpRequest, ModifyInstanceKeyValConfigsResponse, OpenBackUpResponse, CreateInstanceNewResponse, DescribeInstanceClustersResponse, CreateInstanceNewRequest, DescribeBackUpJobDetailResponse, ModifyClusterConfigsRequest, ScaleUpInstanceRequest, DescribeInstanceKeyValConfigsResponse, ModifyClusterConfigsResponse, RecoverBackUpJobRequest, DescribeInstancesNewRequest, DeleteBackUpDataResponse, ModifyInstanceKeyValConfigsRequest, DescribeInstanceNodesResponse, DescribeClusterConfigsRequest, CreateBackUpScheduleResponse, RecoverBackUpJobResponse, DescribeInstanceResponse, DescribeBackUpJobResponse, DescribeInstanceClustersRequest, ResizeDiskRequest, DescribeInstanceStateRequest, DescribeInstanceShardsResponse, DescribeBackUpJobDetailRequest, CreateBackUpScheduleRequest, DeleteBackUpDataRequest, DescribeInstanceRequest, ActionAlterCkUserResponse, DescribeInstanceStateResponse, DescribeBackUpTablesRequest, DestroyInstanceResponse, ResizeDiskResponse, DescribeBackUpScheduleResponse, ScaleCNOutUpInstanceRequest, DescribeCkSqlApisResponse, DescribeBackUpJobRequest, ScaleUpInstanceResponse, ModifyUserNewPrivilegeResponse } from "./cdwch_models";
/**
 * cdwch client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 创建或者修改备份策略
     */
    CreateBackUpSchedule(req: CreateBackUpScheduleRequest, cb?: (error: string, rep: CreateBackUpScheduleResponse) => void): Promise<CreateBackUpScheduleResponse>;
    /**
     * 查询备份任务列表
     */
    DescribeBackUpJob(req: DescribeBackUpJobRequest, cb?: (error: string, rep: DescribeBackUpJobResponse) => void): Promise<DescribeBackUpJobResponse>;
    /**
     * 销毁集群 open api
     */
    DestroyInstance(req: DestroyInstanceRequest, cb?: (error: string, rep: DestroyInstanceResponse) => void): Promise<DestroyInstanceResponse>;
    /**
     * 在集群详情页面获取所有参数列表
     */
    DescribeInstanceKeyValConfigs(req: DescribeInstanceKeyValConfigsRequest, cb?: (error: string, rep: DescribeInstanceKeyValConfigsResponse) => void): Promise<DescribeInstanceKeyValConfigsResponse>;
    /**
     * 开启或者关闭策略
     */
    OpenBackUp(req: OpenBackUpRequest, cb?: (error: string, rep: OpenBackUpResponse) => void): Promise<OpenBackUpResponse>;
    /**
     * KV模式修改配置接口
     */
    ModifyInstanceKeyValConfigs(req: ModifyInstanceKeyValConfigsRequest, cb?: (error: string, rep: ModifyInstanceKeyValConfigsResponse) => void): Promise<ModifyInstanceKeyValConfigsResponse>;
    /**
     * 垂直扩缩容节点规格，修改节点cvm的规格cpu，内存。 规格变化阶段，服务不可用。
     */
    ScaleUpInstance(req: ScaleUpInstanceRequest, cb?: (error: string, rep: ScaleUpInstanceResponse) => void): Promise<ScaleUpInstanceResponse>;
    /**
     * 获取可备份表信息
     */
    DescribeBackUpTables(req: DescribeBackUpTablesRequest, cb?: (error: string, rep: DescribeBackUpTablesResponse) => void): Promise<DescribeBackUpTablesResponse>;
    /**
     * 调整clickhouse节点数量
     */
    ScaleOutInstance(req: ScaleOutInstanceRequest, cb?: (error: string, rep: ScaleOutInstanceResponse) => void): Promise<ScaleOutInstanceResponse>;
    /**
     * 获取实例shard信息列表
     */
    DescribeInstanceShards(req: DescribeInstanceShardsRequest, cb?: (error: string, rep: DescribeInstanceShardsResponse) => void): Promise<DescribeInstanceShardsResponse>;
    /**
     * 获取实例列表，供外部sdk使用
     */
    DescribeInstancesNew(req: DescribeInstancesNewRequest, cb?: (error: string, rep: DescribeInstancesNewResponse) => void): Promise<DescribeInstancesNewResponse>;
    /**
     * 删除备份数据
     */
    DeleteBackUpData(req: DeleteBackUpDataRequest, cb?: (error: string, rep: DeleteBackUpDataResponse) => void): Promise<DeleteBackUpDataResponse>;
    /**
     * 新增和修改用户接口
     */
    ActionAlterCkUser(req: ActionAlterCkUserRequest, cb?: (error: string, rep: ActionAlterCkUserResponse) => void): Promise<ActionAlterCkUserResponse>;
    /**
     * 集群详情页中显示集群状态、流程进度等
     */
    DescribeInstanceState(req: DescribeInstanceStateRequest, cb?: (error: string, rep: DescribeInstanceStateResponse) => void): Promise<DescribeInstanceStateResponse>;
    /**
     * 获取集群的最新的几个配置文件（config.xml、metrika.xml、user.xml）的内容，显示给用户
     */
    DescribeClusterConfigs(req: DescribeClusterConfigsRequest, cb?: (error: string, rep: DescribeClusterConfigsResponse) => void): Promise<DescribeClusterConfigsResponse>;
    /**
     * 在集群配置页面修改集群配置文件接口，xml模式
     */
    ModifyClusterConfigs(req: ModifyClusterConfigsRequest, cb?: (error: string, rep: ModifyClusterConfigsResponse) => void): Promise<ModifyClusterConfigsResponse>;
    /**
     * open-api接口提供弹性伸缩云原生集群能力
     */
    ScaleCNOutUpInstance(req: ScaleCNOutUpInstanceRequest, cb?: (error: string, rep: ScaleCNOutUpInstanceResponse) => void): Promise<ScaleCNOutUpInstanceResponse>;
    /**
     * 备份恢复
     */
    RecoverBackUpJob(req: RecoverBackUpJobRequest, cb?: (error: string, rep: RecoverBackUpJobResponse) => void): Promise<RecoverBackUpJobResponse>;
    /**
     * 查询集群用户、集群表，数据库等相关信息
     */
    DescribeCkSqlApis(req: DescribeCkSqlApisRequest, cb?: (error: string, rep: DescribeCkSqlApisResponse) => void): Promise<DescribeCkSqlApisResponse>;
    /**
     * 购买页拉取集群的数据节点和zookeeper节点的规格列表
     */
    DescribeSpec(req: DescribeSpecRequest, cb?: (error: string, rep: DescribeSpecResponse) => void): Promise<DescribeSpecResponse>;
    /**
     * 创建集群
     */
    CreateInstanceNew(req: CreateInstanceNewRequest, cb?: (error: string, rep: CreateInstanceNewResponse) => void): Promise<CreateInstanceNewResponse>;
    /**
     * 查询备份策略信息
     */
    DescribeBackUpSchedule(req: DescribeBackUpScheduleRequest, cb?: (error: string, rep: DescribeBackUpScheduleResponse) => void): Promise<DescribeBackUpScheduleResponse>;
    /**
     * 查询备份任务详情
     */
    DescribeBackUpJobDetail(req: DescribeBackUpJobDetailRequest, cb?: (error: string, rep: DescribeBackUpJobDetailResponse) => void): Promise<DescribeBackUpJobDetailResponse>;
    /**
     * 集群vcluster列表
     */
    DescribeInstanceClusters(req: DescribeInstanceClustersRequest, cb?: (error: string, rep: DescribeInstanceClustersResponse) => void): Promise<DescribeInstanceClustersResponse>;
    /**
     * 根据实例ID查询某个实例的具体信息
     */
    DescribeInstance(req: DescribeInstanceRequest, cb?: (error: string, rep: DescribeInstanceResponse) => void): Promise<DescribeInstanceResponse>;
    /**
     * 获取实例节点信息列表
     */
    DescribeInstanceNodes(req: DescribeInstanceNodesRequest, cb?: (error: string, rep: DescribeInstanceNodesResponse) => void): Promise<DescribeInstanceNodesResponse>;
    /**
     * 针对集群账号的权限做管控（新版）
     */
    ModifyUserNewPrivilege(req: ModifyUserNewPrivilegeRequest, cb?: (error: string, rep: ModifyUserNewPrivilegeResponse) => void): Promise<ModifyUserNewPrivilegeResponse>;
    /**
     * 扩容磁盘，包含扩容数据节点，zk节点
     */
    ResizeDisk(req: ResizeDiskRequest, cb?: (error: string, rep: ResizeDiskResponse) => void): Promise<ResizeDiskResponse>;
}
