import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { DescribeInstanceShardsRequest, OpenBackUpResponse, ActionAlterCkUserRequest, DescribeSpecRequest, DescribeSpecResponse, ModifyUserNewPrivilegeRequest, DescribeInstanceResponse, OpenBackUpRequest, CreateInstanceNewResponse, CreateInstanceNewRequest, ModifyClusterConfigsResponse, DescribeCkSqlApisRequest, CreateBackUpScheduleResponse, ModifyClusterConfigsRequest, DescribeInstanceShardsResponse, CreateBackUpScheduleRequest, DescribeInstanceRequest, ActionAlterCkUserResponse, DescribeCkSqlApisResponse, ModifyUserNewPrivilegeResponse } from "./cdwch_models";
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
     * 查询集群用户、集群表，数据库等相关信息
     */
    DescribeCkSqlApis(req: DescribeCkSqlApisRequest, cb?: (error: string, rep: DescribeCkSqlApisResponse) => void): Promise<DescribeCkSqlApisResponse>;
    /**
     * 新增和修改用户接口
     */
    ActionAlterCkUser(req: ActionAlterCkUserRequest, cb?: (error: string, rep: ActionAlterCkUserResponse) => void): Promise<ActionAlterCkUserResponse>;
    /**
     * 开启或者关闭策略
     */
    OpenBackUp(req: OpenBackUpRequest, cb?: (error: string, rep: OpenBackUpResponse) => void): Promise<OpenBackUpResponse>;
    /**
     * 购买页拉取集群的数据节点和zookeeper节点的规格列表
     */
    DescribeSpec(req: DescribeSpecRequest, cb?: (error: string, rep: DescribeSpecResponse) => void): Promise<DescribeSpecResponse>;
    /**
     * 在集群配置页面修改集群配置文件接口，xml模式
     */
    ModifyClusterConfigs(req: ModifyClusterConfigsRequest, cb?: (error: string, rep: ModifyClusterConfigsResponse) => void): Promise<ModifyClusterConfigsResponse>;
    /**
     * 根据实例ID查询某个实例的具体信息
     */
    DescribeInstance(req: DescribeInstanceRequest, cb?: (error: string, rep: DescribeInstanceResponse) => void): Promise<DescribeInstanceResponse>;
    /**
     * 创建集群
     */
    CreateInstanceNew(req: CreateInstanceNewRequest, cb?: (error: string, rep: CreateInstanceNewResponse) => void): Promise<CreateInstanceNewResponse>;
    /**
     * 针对ck账号的权限做管控（新版）
     */
    ModifyUserNewPrivilege(req?: ModifyUserNewPrivilegeRequest, cb?: (error: string, rep: ModifyUserNewPrivilegeResponse) => void): Promise<ModifyUserNewPrivilegeResponse>;
    /**
     * 获取实例shard信息列表
     */
    DescribeInstanceShards(req: DescribeInstanceShardsRequest, cb?: (error: string, rep: DescribeInstanceShardsResponse) => void): Promise<DescribeInstanceShardsResponse>;
}
