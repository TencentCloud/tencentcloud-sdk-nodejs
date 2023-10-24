import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { ModifyInstanceResponse, DescribeInstanceInfoRequest, DescribeInstanceStateRequest, DestroyInstanceByApiRequest, ModifyInstanceRequest, DescribeSimpleInstancesResponse, DescribeInstancesResponse, DescribeInstancesRequest, CreateInstanceByApiResponse, DescribeInstanceResponse, DestroyInstanceByApiResponse, CreateInstanceByApiRequest, DescribeInstanceRequest, DescribeInstanceStateResponse, DescribeSimpleInstancesRequest, DescribeInstanceInfoResponse } from "./cdwpg_models";
/**
 * cdwpg client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
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
     * 根据实例ID查询某个实例的具体信息
     */
    DescribeInstance(req: DescribeInstanceRequest, cb?: (error: string, rep: DescribeInstanceResponse) => void): Promise<DescribeInstanceResponse>;
    /**
     * 获取集群信息
     */
    DescribeInstanceInfo(req: DescribeInstanceInfoRequest, cb?: (error: string, rep: DescribeInstanceInfoResponse) => void): Promise<DescribeInstanceInfoResponse>;
    /**
     * 创建集群
     */
    CreateInstanceByApi(req: CreateInstanceByApiRequest, cb?: (error: string, rep: CreateInstanceByApiResponse) => void): Promise<CreateInstanceByApiResponse>;
    /**
     * 获取集群实例列表
     */
    DescribeSimpleInstances(req: DescribeSimpleInstancesRequest, cb?: (error: string, rep: DescribeSimpleInstancesResponse) => void): Promise<DescribeSimpleInstancesResponse>;
    /**
     * 修改实例信息，目前为实例名称
     */
    ModifyInstance(req: ModifyInstanceRequest, cb?: (error: string, rep: ModifyInstanceResponse) => void): Promise<ModifyInstanceResponse>;
}
