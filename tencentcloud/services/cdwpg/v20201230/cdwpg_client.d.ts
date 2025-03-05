import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { ModifyInstanceResponse, DescribeInstanceInfoRequest, DescribeUserHbaConfigResponse, DescribeUserHbaConfigRequest, ModifyDBParametersResponse, DescribeInstanceStateRequest, DescribeAccountsRequest, ScaleOutInstanceResponse, DescribeInstanceNodesRequest, RestartInstanceResponse, DestroyInstanceByApiRequest, DescribeDBConfigHistoryResponse, DescribeDBConfigHistoryRequest, DescribeDBParamsRequest, DescribeInstanceNodesResponse, ModifyInstanceRequest, DescribeSimpleInstancesResponse, UpgradeInstanceRequest, DescribeSlowLogResponse, ModifyUserHbaResponse, DescribeDBParamsResponse, DescribeInstancesResponse, ResetAccountPasswordResponse, ResetAccountPasswordRequest, RestartInstanceRequest, DescribeUpgradeListRequest, DescribeInstancesRequest, UpgradeInstanceResponse, DescribeInstanceOperationsResponse, CreateInstanceByApiResponse, DescribeSlowLogRequest, DescribeUpgradeListResponse, ScaleOutInstanceRequest, DescribeAccountsResponse, DescribeInstanceResponse, ModifyDBParametersRequest, DescribeErrorLogResponse, ModifyUserHbaRequest, ScaleUpInstanceRequest, DestroyInstanceByApiResponse, CreateInstanceByApiRequest, DescribeInstanceOperationsRequest, DescribeInstanceRequest, DescribeInstanceStateResponse, DescribeSimpleInstancesRequest, DescribeErrorLogRequest, ScaleUpInstanceResponse, DescribeInstanceInfoResponse } from "./cdwpg_models";
/**
 * cdwpg client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * user_hba
     */
    DescribeUserHbaConfig(req: DescribeUserHbaConfigRequest, cb?: (error: string, rep: DescribeUserHbaConfigResponse) => void): Promise<DescribeUserHbaConfigResponse>;
    /**
     * 修改账号密码
     */
    ResetAccountPassword(req: ResetAccountPasswordRequest, cb?: (error: string, rep: ResetAccountPasswordResponse) => void): Promise<ResetAccountPasswordResponse>;
    /**
     * 集群配置下发
     */
    ModifyDBParameters(req: ModifyDBParametersRequest, cb?: (error: string, rep: ModifyDBParametersResponse) => void): Promise<ModifyDBParametersResponse>;
    /**
     * 水平扩容
     */
    ScaleOutInstance(req: ScaleOutInstanceRequest, cb?: (error: string, rep: ScaleOutInstanceResponse) => void): Promise<ScaleOutInstanceResponse>;
    /**
     * 控制台垂直变配集群
     */
    ScaleUpInstance(req: ScaleUpInstanceRequest, cb?: (error: string, rep: ScaleUpInstanceResponse) => void): Promise<ScaleUpInstanceResponse>;
    /**
     * 获取云原生实例列表
     */
    DescribeInstances(req: DescribeInstancesRequest, cb?: (error: string, rep: DescribeInstancesResponse) => void): Promise<DescribeInstancesResponse>;
    /**
     * 集群详情页中显示集群状态、流程进度等
     */
    DescribeInstanceState(req: DescribeInstanceStateRequest, cb?: (error: string, rep: DescribeInstanceStateResponse) => void): Promise<DescribeInstanceStateResponse>;
    /**
     * 销毁集群
     */
    DestroyInstanceByApi(req: DestroyInstanceByApiRequest, cb?: (error: string, rep: DestroyInstanceByApiResponse) => void): Promise<DestroyInstanceByApiResponse>;
    /**
     * 获取集群信息
     */
    DescribeInstanceInfo(req: DescribeInstanceInfoRequest, cb?: (error: string, rep: DescribeInstanceInfoResponse) => void): Promise<DescribeInstanceInfoResponse>;
    /**
     * 用户在控制台主动发起重启实例
     */
    RestartInstance(req: RestartInstanceRequest, cb?: (error: string, rep: RestartInstanceResponse) => void): Promise<RestartInstanceResponse>;
    /**
     * DescribeDBConfigHistory1
     */
    DescribeDBConfigHistory(req: DescribeDBConfigHistoryRequest, cb?: (error: string, rep: DescribeDBConfigHistoryResponse) => void): Promise<DescribeDBConfigHistoryResponse>;
    /**
     * 配置描述
     */
    DescribeDBParams(req: DescribeDBParamsRequest, cb?: (error: string, rep: DescribeDBParamsResponse) => void): Promise<DescribeDBParamsResponse>;
    /**
     * 在集群详情页面，拉取该集群的操作
     */
    DescribeInstanceOperations(req: DescribeInstanceOperationsRequest, cb?: (error: string, rep: DescribeInstanceOperationsResponse) => void): Promise<DescribeInstanceOperationsResponse>;
    /**
     * 修改用户Hba配置
     */
    ModifyUserHba(req: ModifyUserHbaRequest, cb?: (error: string, rep: ModifyUserHbaResponse) => void): Promise<ModifyUserHbaResponse>;
    /**
     * 根据实例ID查询某个实例的具体信息
     */
    DescribeInstance(req: DescribeInstanceRequest, cb?: (error: string, rep: DescribeInstanceResponse) => void): Promise<DescribeInstanceResponse>;
    /**
     * 节点list
     */
    DescribeInstanceNodes(req: DescribeInstanceNodesRequest, cb?: (error: string, rep: DescribeInstanceNodesResponse) => void): Promise<DescribeInstanceNodesResponse>;
    /**
     * 创建集群
     */
    CreateInstanceByApi(req: CreateInstanceByApiRequest, cb?: (error: string, rep: CreateInstanceByApiResponse) => void): Promise<CreateInstanceByApiResponse>;
    /**
     * 升级记录
     */
    DescribeUpgradeList(req: DescribeUpgradeListRequest, cb?: (error: string, rep: DescribeUpgradeListResponse) => void): Promise<DescribeUpgradeListResponse>;
    /**
     * 获取云原生实例对应的账号列表
     */
    DescribeAccounts(req: DescribeAccountsRequest, cb?: (error: string, rep: DescribeAccountsResponse) => void): Promise<DescribeAccountsResponse>;
    /**
     * 在线升级
     */
    UpgradeInstance(req: UpgradeInstanceRequest, cb?: (error: string, rep: UpgradeInstanceResponse) => void): Promise<UpgradeInstanceResponse>;
    /**
     * 查询慢SQL日志
     */
    DescribeSlowLog(req: DescribeSlowLogRequest, cb?: (error: string, rep: DescribeSlowLogResponse) => void): Promise<DescribeSlowLogResponse>;
    /**
     * 查询错误日志
     */
    DescribeErrorLog(req: DescribeErrorLogRequest, cb?: (error: string, rep: DescribeErrorLogResponse) => void): Promise<DescribeErrorLogResponse>;
    /**
     * 获取集群实例列表
     */
    DescribeSimpleInstances(req: DescribeSimpleInstancesRequest, cb?: (error: string, rep: DescribeSimpleInstancesResponse) => void): Promise<DescribeSimpleInstancesResponse>;
    /**
     * 修改实例信息，目前为实例名称
     */
    ModifyInstance(req: ModifyInstanceRequest, cb?: (error: string, rep: ModifyInstanceResponse) => void): Promise<ModifyInstanceResponse>;
}
