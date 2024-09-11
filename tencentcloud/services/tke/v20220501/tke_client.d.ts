import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { DeleteHealthCheckPolicyRequest, CreateNodePoolResponse, DescribeNodePoolsResponse, DescribeClusterInstancesResponse, DescribeHealthCheckPolicyBindingsRequest, CreateHealthCheckPolicyRequest, DeleteNodePoolResponse, ModifyNodePoolRequest, DescribeClusterInstancesRequest, DeleteHealthCheckPolicyResponse, ModifyNodePoolResponse, DescribeHealthCheckPoliciesRequest, DescribeHealthCheckTemplateResponse, CreateNodePoolRequest, DescribeHealthCheckPolicyBindingsResponse, DescribeNodePoolsRequest, DeleteNodePoolRequest, DescribeHealthCheckTemplateRequest, DescribeHealthCheckPoliciesResponse, ModifyHealthCheckPolicyRequest, ModifyHealthCheckPolicyResponse, CreateHealthCheckPolicyResponse } from "./tke_models";
/**
 * tke client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 查询 TKE 节点池列表
     */
    DescribeNodePools(req: DescribeNodePoolsRequest, cb?: (error: string, rep: DescribeNodePoolsResponse) => void): Promise<DescribeNodePoolsResponse>;
    /**
     * 更新 TKE 节点池
     */
    ModifyNodePool(req: ModifyNodePoolRequest, cb?: (error: string, rep: ModifyNodePoolResponse) => void): Promise<ModifyNodePoolResponse>;
    /**
     * 删除健康检测策略
     */
    DeleteHealthCheckPolicy(req: DeleteHealthCheckPolicyRequest, cb?: (error: string, rep: DeleteHealthCheckPolicyResponse) => void): Promise<DeleteHealthCheckPolicyResponse>;
    /**
     * 删除 TKE 节点池
     */
    DeleteNodePool(req: DeleteNodePoolRequest, cb?: (error: string, rep: DeleteNodePoolResponse) => void): Promise<DeleteNodePoolResponse>;
    /**
     * 查询健康检测策略
     */
    DescribeHealthCheckPolicies(req: DescribeHealthCheckPoliciesRequest, cb?: (error: string, rep: DescribeHealthCheckPoliciesResponse) => void): Promise<DescribeHealthCheckPoliciesResponse>;
    /**
     * 修改健康检测策略
     */
    ModifyHealthCheckPolicy(req: ModifyHealthCheckPolicyRequest, cb?: (error: string, rep: ModifyHealthCheckPolicyResponse) => void): Promise<ModifyHealthCheckPolicyResponse>;
    /**
     * 创建 TKE 节点池
     */
    CreateNodePool(req: CreateNodePoolRequest, cb?: (error: string, rep: CreateNodePoolResponse) => void): Promise<CreateNodePoolResponse>;
    /**
     * 查询健康检测策略模板
     */
    DescribeHealthCheckTemplate(req?: DescribeHealthCheckTemplateRequest, cb?: (error: string, rep: DescribeHealthCheckTemplateResponse) => void): Promise<DescribeHealthCheckTemplateResponse>;
    /**
     * 查询健康检测策略绑定关系
     */
    DescribeHealthCheckPolicyBindings(req: DescribeHealthCheckPolicyBindingsRequest, cb?: (error: string, rep: DescribeHealthCheckPolicyBindingsResponse) => void): Promise<DescribeHealthCheckPolicyBindingsResponse>;
    /**
     * 创建健康检测策略
     */
    CreateHealthCheckPolicy(req: CreateHealthCheckPolicyRequest, cb?: (error: string, rep: CreateHealthCheckPolicyResponse) => void): Promise<CreateHealthCheckPolicyResponse>;
    /**
     * 查询集群下节点实例信息
     */
    DescribeClusterInstances(req: DescribeClusterInstancesRequest, cb?: (error: string, rep: DescribeClusterInstancesResponse) => void): Promise<DescribeClusterInstancesResponse>;
}
