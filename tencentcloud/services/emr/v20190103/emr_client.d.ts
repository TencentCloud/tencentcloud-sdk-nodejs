import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { InquirePriceRenewEmrResponse, RunJobFlowRequest, DescribeInstanceRenewNodesRequest, ScaleOutInstanceResponse, InquiryPriceCreateInstanceRequest, TerminateInstanceRequest, TerminateTasksRequest, TerminateInstanceResponse, CreateInstanceResponse, InquiryPriceRenewInstanceResponse, DescribeJobFlowRequest, InquiryPriceCreateInstanceResponse, DescribeClusterNodesRequest, CreateInstanceRequest, InquirePriceRenewEmrRequest, DescribeInstancesResponse, InquiryPriceScaleOutInstanceRequest, DescribeInstancesRequest, InquiryPriceUpdateInstanceRequest, DescribeInstanceRenewNodesResponse, RunJobFlowResponse, InquiryPriceScaleOutInstanceResponse, TerminateTasksResponse, DescribeClusterNodesResponse, InquiryPriceUpdateInstanceResponse, DescribeJobFlowResponse, InquiryPriceRenewInstanceRequest, ScaleOutInstanceRequest } from "./emr_models";
/**
 * emr client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 预付费集群隔离后续费资源查询
     */
    DescribeInstanceRenewNodes(req: DescribeInstanceRenewNodesRequest, cb?: (error: string, rep: DescribeInstanceRenewNodesResponse) => void): Promise<DescribeInstanceRenewNodesResponse>;
    /**
     * 缩容Task节点
     */
    TerminateTasks(req: TerminateTasksRequest, cb?: (error: string, rep: TerminateTasksResponse) => void): Promise<TerminateTasksResponse>;
    /**
     * 查询EMR实例
     */
    DescribeInstances(req: DescribeInstancesRequest, cb?: (error: string, rep: DescribeInstancesResponse) => void): Promise<DescribeInstancesResponse>;
    /**
     * 变配询价
     */
    InquiryPriceUpdateInstance(req: InquiryPriceUpdateInstanceRequest, cb?: (error: string, rep: InquiryPriceUpdateInstanceResponse) => void): Promise<InquiryPriceUpdateInstanceResponse>;
    /**
     * 查询硬件节点信息
     */
    DescribeClusterNodes(req: DescribeClusterNodesRequest, cb?: (error: string, rep: DescribeClusterNodesResponse) => void): Promise<DescribeClusterNodesResponse>;
    /**
     * 续费询价。
     */
    InquiryPriceRenewInstance(req: InquiryPriceRenewInstanceRequest, cb?: (error: string, rep: InquiryPriceRenewInstanceResponse) => void): Promise<InquiryPriceRenewInstanceResponse>;
    /**
     * 创建EMR集群实例
     */
    CreateInstance(req: CreateInstanceRequest, cb?: (error: string, rep: CreateInstanceResponse) => void): Promise<CreateInstanceResponse>;
    /**
     * 创建实例询价
     */
    InquiryPriceCreateInstance(req: InquiryPriceCreateInstanceRequest, cb?: (error: string, rep: InquiryPriceCreateInstanceResponse) => void): Promise<InquiryPriceCreateInstanceResponse>;
    /**
     * 集群续费询价。
     */
    InquirePriceRenewEmr(req: InquirePriceRenewEmrRequest, cb?: (error: string, rep: InquirePriceRenewEmrResponse) => void): Promise<InquirePriceRenewEmrResponse>;
    /**
     * 扩容询价. 当扩容时候，请通过该接口查询价格。
     */
    InquiryPriceScaleOutInstance(req: InquiryPriceScaleOutInstanceRequest, cb?: (error: string, rep: InquiryPriceScaleOutInstanceResponse) => void): Promise<InquiryPriceScaleOutInstanceResponse>;
    /**
     * 查询流程任务
     */
    DescribeJobFlow(req: DescribeJobFlowRequest, cb?: (error: string, rep: DescribeJobFlowResponse) => void): Promise<DescribeJobFlowResponse>;
    /**
     * 实例扩容
     */
    ScaleOutInstance(req: ScaleOutInstanceRequest, cb?: (error: string, rep: ScaleOutInstanceResponse) => void): Promise<ScaleOutInstanceResponse>;
    /**
     * 创建流程作业
     */
    RunJobFlow(req: RunJobFlowRequest, cb?: (error: string, rep: RunJobFlowResponse) => void): Promise<RunJobFlowResponse>;
    /**
     * 销毁EMR实例。此接口仅支持弹性MapReduce正式计费版本。
     */
    TerminateInstance(req: TerminateInstanceRequest, cb?: (error: string, rep: TerminateInstanceResponse) => void): Promise<TerminateInstanceResponse>;
}
