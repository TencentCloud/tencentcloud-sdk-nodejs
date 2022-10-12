import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { DescribeNacosReplicasRequest, UpdateEngineInternetAccessRequest, UpdateEngineInternetAccessResponse, DeleteEngineResponse, CreateEngineResponse, DescribeZookeeperReplicasRequest, DeleteEngineRequest, DescribeCloudNativeAPIGatewayNodesRequest, DescribeNacosServerInterfacesRequest, DescribeSREInstanceAccessAddressResponse, DescribeSREInstancesResponse, DescribeNacosReplicasResponse, DescribeZookeeperServerInterfacesResponse, DescribeSREInstancesRequest, DescribeCloudNativeAPIGatewayNodesResponse, DescribeZookeeperReplicasResponse, CreateEngineRequest, DescribeSREInstanceAccessAddressRequest, DescribeNacosServerInterfacesResponse, DescribeZookeeperServerInterfacesRequest } from "./tse_models";
/**
 * tse client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 查询Zookeeper类型注册引擎实例副本信息
     */
    DescribeZookeeperReplicas(req: DescribeZookeeperReplicasRequest, cb?: (error: string, rep: DescribeZookeeperReplicasResponse) => void): Promise<DescribeZookeeperReplicasResponse>;
    /**
     * 删除引擎实例
     */
    DeleteEngine(req: DeleteEngineRequest, cb?: (error: string, rep: DeleteEngineResponse) => void): Promise<DeleteEngineResponse>;
    /**
     * 用于查询引擎实例列表
     */
    DescribeSREInstances(req: DescribeSREInstancesRequest, cb?: (error: string, rep: DescribeSREInstancesResponse) => void): Promise<DescribeSREInstancesResponse>;
    /**
     * 查询Nacos类型引擎实例副本信息
     */
    DescribeNacosReplicas(req: DescribeNacosReplicasRequest, cb?: (error: string, rep: DescribeNacosReplicasResponse) => void): Promise<DescribeNacosReplicasResponse>;
    /**
     * 获取云原生网关节点列表
     */
    DescribeCloudNativeAPIGatewayNodes(req: DescribeCloudNativeAPIGatewayNodesRequest, cb?: (error: string, rep: DescribeCloudNativeAPIGatewayNodesResponse) => void): Promise<DescribeCloudNativeAPIGatewayNodesResponse>;
    /**
     * 查询zookeeper服务接口列表
     */
    DescribeZookeeperServerInterfaces(req: DescribeZookeeperServerInterfacesRequest, cb?: (error: string, rep: DescribeZookeeperServerInterfacesResponse) => void): Promise<DescribeZookeeperServerInterfacesResponse>;
    /**
     * 修改引擎公网访问配置
     */
    UpdateEngineInternetAccess(req: UpdateEngineInternetAccessRequest, cb?: (error: string, rep: UpdateEngineInternetAccessResponse) => void): Promise<UpdateEngineInternetAccessResponse>;
    /**
     * 创建引擎实例
     */
    CreateEngine(req: CreateEngineRequest, cb?: (error: string, rep: CreateEngineResponse) => void): Promise<CreateEngineResponse>;
    /**
     * 查询nacos服务接口列表
     */
    DescribeNacosServerInterfaces(req: DescribeNacosServerInterfacesRequest, cb?: (error: string, rep: DescribeNacosServerInterfacesResponse) => void): Promise<DescribeNacosServerInterfacesResponse>;
    /**
     * 查询引擎实例访问地址
     */
    DescribeSREInstanceAccessAddress(req: DescribeSREInstanceAccessAddressRequest, cb?: (error: string, rep: DescribeSREInstanceAccessAddressResponse) => void): Promise<DescribeSREInstanceAccessAddressResponse>;
}
