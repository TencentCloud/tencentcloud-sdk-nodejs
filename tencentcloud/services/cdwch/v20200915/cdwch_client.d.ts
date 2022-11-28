import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { DescribeInstanceShardsRequest, ModifyUserNewPrivilegeRequest, CreateBackUpScheduleRequest, DescribeInstanceShardsResponse, OpenBackUpRequest, ModifyClusterConfigsResponse, OpenBackUpResponse, ActionAlterCkUserResponse, DescribeCkSqlApisRequest, ActionAlterCkUserRequest, CreateBackUpScheduleResponse, ModifyClusterConfigsRequest, DescribeCkSqlApisResponse, ModifyUserNewPrivilegeResponse } from "./cdwch_models";
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
     * 针对驱动sql命令查询ck集群接口
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
     * 在集群配置页面修改集群配置文件接口，xml模式
     */
    ModifyClusterConfigs(req: ModifyClusterConfigsRequest, cb?: (error: string, rep: ModifyClusterConfigsResponse) => void): Promise<ModifyClusterConfigsResponse>;
    /**
     * 针对ck账号的权限做管控（新版）
     */
    ModifyUserNewPrivilege(req?: ModifyUserNewPrivilegeRequest, cb?: (error: string, rep: ModifyUserNewPrivilegeResponse) => void): Promise<ModifyUserNewPrivilegeResponse>;
    /**
     * 获取实例shard信息列表
     */
    DescribeInstanceShards(req: DescribeInstanceShardsRequest, cb?: (error: string, rep: DescribeInstanceShardsResponse) => void): Promise<DescribeInstanceShardsResponse>;
}
