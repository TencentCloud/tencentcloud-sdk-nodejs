import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { StartMachinesResponse, DeleteHealthCheckPolicyRequest, CreateNodePoolResponse, DescribeNodePoolsResponse, DescribeClusterInstancesResponse, DescribeHealthCheckPolicyBindingsRequest, CreateHealthCheckPolicyRequest, StartMachinesRequest, RebootMachinesResponse, DeleteNodePoolResponse, ModifyNodePoolRequest, DescribeClusterInstancesRequest, DeleteHealthCheckPolicyResponse, RebootMachinesRequest, ModifyNodePoolResponse, StopMachinesRequest, DescribeHealthCheckPoliciesRequest, DescribeHealthCheckTemplateResponse, CreateNodePoolRequest, DescribeHealthCheckPolicyBindingsResponse, DescribeNodePoolsRequest, DeleteNodePoolRequest, StopMachinesResponse, DescribeHealthCheckTemplateRequest, DescribeHealthCheckPoliciesResponse, ModifyHealthCheckPolicyRequest, ModifyHealthCheckPolicyResponse, CreateHealthCheckPolicyResponse } from "./tke_models";
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
     * 重启原生节点实例
     */
    RebootMachines(req: RebootMachinesRequest, cb?: (error: string, rep: RebootMachinesResponse) => void): Promise<RebootMachinesResponse>;
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
     * 本接口 (StopMachines) 用于关闭一个或多个原生节点实例。

只有状态为 Running 的实例才可以进行此操作。
接口调用成功时，实例会进入 Stopping 状态；关闭实例成功时，实例会进入 Stopped 状态。
支持强制关闭。强制关机的效果等同于关闭物理计算机的电源开关。强制关机可能会导致数据丢失或文件系统损坏，请仅在服务器不能正常关机时使用。
支持批量操作。每次请求批量实例的上限为 100。
本接口为同步接口，关闭实例请求发送成功后会返回一个RequestId，此时操作并未立即完成。实例操作结果可以通过调用 DescribeClusterInstances 接口查询，如果实例的状态为stopped_with_charging，则代表关闭实例操作成功。
     */
    StopMachines(req: StopMachinesRequest, cb?: (error: string, rep: StopMachinesResponse) => void): Promise<StopMachinesResponse>;
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
     * 本接口 (StartMachines) 用于启动一个或多个原生节点实例。

只有状态为 Stopped 的实例才可以进行此操作。
接口调用成功后，等待一分钟左右，实例会进入 Running 状态。
支持批量操作。每次请求批量实例的上限为100。
本接口为同步接口，启动实例请求发送成功后会返回一个RequestId，此时操作并未立即完成。实例操作结果可以通过调用 DescribeClusterInstances 接口查询，如果实例的状态为 Running，则代表启动实例操作成功。
     */
    StartMachines(req: StartMachinesRequest, cb?: (error: string, rep: StartMachinesResponse) => void): Promise<StartMachinesResponse>;
    /**
     * 查询集群下节点实例信息
     */
    DescribeClusterInstances(req: DescribeClusterInstancesRequest, cb?: (error: string, rep: DescribeClusterInstancesResponse) => void): Promise<DescribeClusterInstancesResponse>;
}
