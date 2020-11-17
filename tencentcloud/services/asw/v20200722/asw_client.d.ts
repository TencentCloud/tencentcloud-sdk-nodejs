import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { DescribeExecutionsRequest, DescribeFlowServicesResponse, DescribeExecutionResponse, DescribeFlowServicesRequest, DescribeExecutionRequest, DescribeFlowServiceDetailResponse, CreateFlowServiceResponse, StartExecutionRequest, ModifyFlowServiceResponse, StartExecutionResponse, CreateFlowServiceRequest, DescribeExecutionsResponse, ModifyFlowServiceRequest, DescribeFlowServiceDetailRequest } from "./asw_models";
/**
 * asw client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 为指定的状态机启动一次执行
     */
    StartExecution(req: StartExecutionRequest, cb?: (error: string, rep: StartExecutionResponse) => void): Promise<StartExecutionResponse>;
    /**
     * 查询执行详细信息
     */
    DescribeExecution(req: DescribeExecutionRequest, cb?: (error: string, rep: DescribeExecutionResponse) => void): Promise<DescribeExecutionResponse>;
    /**
     * 查询指定用户下所有状态机，以列表形式返回
     */
    DescribeFlowServices(req: DescribeFlowServicesRequest, cb?: (error: string, rep: DescribeFlowServicesResponse) => void): Promise<DescribeFlowServicesResponse>;
    /**
     * 对状态机的执行历史进行描述.
     */
    DescribeExecutions(req: DescribeExecutionsRequest, cb?: (error: string, rep: DescribeExecutionsResponse) => void): Promise<DescribeExecutionsResponse>;
    /**
     * 该接口用于生成状态机服务
     */
    CreateFlowService(req: CreateFlowServiceRequest, cb?: (error: string, rep: CreateFlowServiceResponse) => void): Promise<CreateFlowServiceResponse>;
    /**
     * 查询该用户指定状态机下的详情数据。
     */
    DescribeFlowServiceDetail(req: DescribeFlowServiceDetailRequest, cb?: (error: string, rep: DescribeFlowServiceDetailResponse) => void): Promise<DescribeFlowServiceDetailResponse>;
    /**
     * 该接口用于修改状态机
     */
    ModifyFlowService(req: ModifyFlowServiceRequest, cb?: (error: string, rep: ModifyFlowServiceResponse) => void): Promise<ModifyFlowServiceResponse>;
}
