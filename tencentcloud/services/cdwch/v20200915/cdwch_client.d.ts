import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { DescribeInstanceShardsRequest, ScaleOutInstanceResponse, ResizeDiskRequest, DestroyInstanceResponse, DescribeInstanceKeyValConfigsRequest, OpenBackUpResponse, DescribeClusterConfigsResponse, ActionAlterCkUserRequest, DescribeSpecRequest, DescribeBackUpScheduleRequest, DescribeSpecResponse, ModifyInstanceKeyValConfigsResponse, DestroyInstanceRequest, ModifyUserNewPrivilegeRequest, DescribeCkSqlApisRequest, DescribeInstanceClustersRequest, OpenBackUpRequest, CreateInstanceNewResponse, DescribeInstanceClustersResponse, CreateInstanceNewRequest, ModifyClusterConfigsRequest, ScaleUpInstanceRequest, DescribeInstanceKeyValConfigsResponse, ModifyClusterConfigsResponse, DescribeClusterConfigsRequest, ModifyInstanceKeyValConfigsRequest, ScaleOutInstanceRequest, CreateBackUpScheduleResponse, DescribeInstanceResponse, DescribeInstanceStateRequest, DescribeInstanceShardsResponse, CreateBackUpScheduleRequest, DescribeInstanceRequest, ActionAlterCkUserResponse, DescribeInstanceStateResponse, ResizeDiskResponse, DescribeBackUpScheduleResponse, DescribeCkSqlApisResponse, ScaleUpInstanceResponse, ModifyUserNewPrivilegeResponse } from "./cdwch_models";
/**
 * cdwch client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 查询备份策略信息
     */
    DescribeBackUpSchedule(req: DescribeBackUpScheduleRequest, cb?: (error: string, rep: DescribeBackUpScheduleResponse) => void): Promise<DescribeBackUpScheduleResponse>;
    /**
     * 创建或者修改备份策略
     */
    CreateBackUpSchedule(req: CreateBackUpScheduleRequest, cb?: (error: string, rep: CreateBackUpScheduleResponse) => void): Promise<CreateBackUpScheduleResponse>;
    /**
     * 垂直扩缩容节点规格，修改节点cvm的规格cpu，内存。 规格变化阶段，服务不可用。
     */
    ScaleUpInstance(req: ScaleUpInstanceRequest, cb?: (error: string, rep: ScaleUpInstanceResponse) => void): Promise<ScaleUpInstanceResponse>;
    /**
     * 查询集群用户、集群表，数据库等相关信息
     */
    DescribeCkSqlApis(req: DescribeCkSqlApisRequest, cb?: (error: string, rep: DescribeCkSqlApisResponse) => void): Promise<DescribeCkSqlApisResponse>;
    /**
     * 新增和修改用户接口
     */
    ActionAlterCkUser(req: ActionAlterCkUserRequest, cb?: (error: string, rep: ActionAlterCkUserResponse) => void): Promise<ActionAlterCkUserResponse>;
    /**
     * 集群详情页中显示集群状态、流程进度等
     */
    DescribeInstanceState(req: DescribeInstanceStateRequest, cb?: (error: string, rep: DescribeInstanceStateResponse) => void): Promise<DescribeInstanceStateResponse>;
    /**
     * 开启或者关闭策略
     */
    OpenBackUp(req: OpenBackUpRequest, cb?: (error: string, rep: OpenBackUpResponse) => void): Promise<OpenBackUpResponse>;
    /**
     * 集群vcluster列表
     */
    DescribeInstanceClusters(req: DescribeInstanceClustersRequest, cb?: (error: string, rep: DescribeInstanceClustersResponse) => void): Promise<DescribeInstanceClustersResponse>;
    /**
     * 在集群详情页面获取所有参数列表
     */
    DescribeInstanceKeyValConfigs(req: DescribeInstanceKeyValConfigsRequest, cb?: (error: string, rep: DescribeInstanceKeyValConfigsResponse) => void): Promise<DescribeInstanceKeyValConfigsResponse>;
    /**
     * 购买页拉取集群的数据节点和zookeeper节点的规格列表
     */
    DescribeSpec(req: DescribeSpecRequest, cb?: (error: string, rep: DescribeSpecResponse) => void): Promise<DescribeSpecResponse>;
    /**
     * 获取集群的最新的几个配置文件（config.xml、metrika.xml、user.xml）的内容，显示给用户
     */
    DescribeClusterConfigs(req: DescribeClusterConfigsRequest, cb?: (error: string, rep: DescribeClusterConfigsResponse) => void): Promise<DescribeClusterConfigsResponse>;
    /**
     * 销毁集群 open api
     */
    DestroyInstance(req: DestroyInstanceRequest, cb?: (error: string, rep: DestroyInstanceResponse) => void): Promise<DestroyInstanceResponse>;
    /**
     * 根据实例ID查询某个实例的具体信息
     */
    DescribeInstance(req: DescribeInstanceRequest, cb?: (error: string, rep: DescribeInstanceResponse) => void): Promise<DescribeInstanceResponse>;
    /**
     * 在集群配置页面修改集群配置文件接口，xml模式
     */
    ModifyClusterConfigs(req: ModifyClusterConfigsRequest, cb?: (error: string, rep: ModifyClusterConfigsResponse) => void): Promise<ModifyClusterConfigsResponse>;
    /**
     * 创建集群
     */
    CreateInstanceNew(req: CreateInstanceNewRequest, cb?: (error: string, rep: CreateInstanceNewResponse) => void): Promise<CreateInstanceNewResponse>;
    /**
     * KV模式修改配置接口
     */
    ModifyInstanceKeyValConfigs(req: ModifyInstanceKeyValConfigsRequest, cb?: (error: string, rep: ModifyInstanceKeyValConfigsResponse) => void): Promise<ModifyInstanceKeyValConfigsResponse>;
    /**
     * 针对ck账号的权限做管控（新版）
     */
    ModifyUserNewPrivilege(req?: ModifyUserNewPrivilegeRequest, cb?: (error: string, rep: ModifyUserNewPrivilegeResponse) => void): Promise<ModifyUserNewPrivilegeResponse>;
    /**
     * 调整clickhouse节点数量
     */
    ScaleOutInstance(req: ScaleOutInstanceRequest, cb?: (error: string, rep: ScaleOutInstanceResponse) => void): Promise<ScaleOutInstanceResponse>;
    /**
     * 扩容磁盘，包含扩容数据节点，zk节点
     */
    ResizeDisk(req: ResizeDiskRequest, cb?: (error: string, rep: ResizeDiskResponse) => void): Promise<ResizeDiskResponse>;
    /**
     * 获取实例shard信息列表
     */
    DescribeInstanceShards(req: DescribeInstanceShardsRequest, cb?: (error: string, rep: DescribeInstanceShardsResponse) => void): Promise<DescribeInstanceShardsResponse>;
}
