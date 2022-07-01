import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { DescribeInstanceDetailResponse, DescribeDBInstancesRequest, DescribeInstanceDetailRequest, DescribeInstancesRequest, ModifyInstanceNameResponse, DescribeHostListResponse, DescribeInstanceListResponse, DescribeDBInstancesResponse, DescribeHostListRequest, DescribeInstancesResponse, DescribeInstanceListRequest, ModifyInstanceNameRequest } from "./dbdc_models";
/**
 * dbdc client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 本接口用于查询独享集群实例列表
     */
    DescribeInstanceList(req: DescribeInstanceListRequest, cb?: (error: string, rep: DescribeInstanceListResponse) => void): Promise<DescribeInstanceListResponse>;
    /**
     * 根据不同地域不同用户，获取集群列表信息
     */
    DescribeInstances(req: DescribeInstancesRequest, cb?: (error: string, rep: DescribeInstancesResponse) => void): Promise<DescribeInstancesResponse>;
    /**
     * 本接口用于查询主机列表
     */
    DescribeHostList(req: DescribeHostListRequest, cb?: (error: string, rep: DescribeHostListResponse) => void): Promise<DescribeHostListResponse>;
    /**
     * 本接口用于修改集群名称
     */
    ModifyInstanceName(req: ModifyInstanceNameRequest, cb?: (error: string, rep: ModifyInstanceNameResponse) => void): Promise<ModifyInstanceNameResponse>;
    /**
     * 本接口用于查询独享集群详情
     */
    DescribeInstanceDetail(req: DescribeInstanceDetailRequest, cb?: (error: string, rep: DescribeInstanceDetailResponse) => void): Promise<DescribeInstanceDetailResponse>;
    /**
     * 本接口用于查询独享集群内的DB实例列表
     */
    DescribeDBInstances(req: DescribeDBInstancesRequest, cb?: (error: string, rep: DescribeDBInstancesResponse) => void): Promise<DescribeDBInstancesResponse>;
}
