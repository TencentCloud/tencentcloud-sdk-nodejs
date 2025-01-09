import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { InquirePriceRunInstancesResponse, StopInstanceRequest, DescribeServiceLoginSettingsResponse, DescribeInstanceNetworkStatusResponse, TerminateInstancesResponse, DescribeApplicationsResponse, StartInstanceRequest, TerminateInstancesRequest, DescribeMuskPromptsRequest, DescribeScenesResponse, DescribeApplicationsRequest, RunInstancesRequest, DescribeInstancesResponse, RunInstancesResponse, DescribeInstancesRequest, DescribeScenesRequest, DescribeRegionsResponse, InquirePriceRunInstancesRequest, StartInstanceResponse, CreateMuskPromptResponse, DescribeServiceLoginSettingsRequest, CreateMuskPromptRequest, DescribeRegionsRequest, DescribeInstanceNetworkStatusRequest, StopInstanceResponse, DescribeMuskPromptsResponse } from "./hai_models";
/**
 * hai client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 查询实例
     */
    DescribeInstances(req: DescribeInstancesRequest, cb?: (error: string, rep: DescribeInstancesResponse) => void): Promise<DescribeInstancesResponse>;
    /**
     * 查询应用
     */
    DescribeApplications(req: DescribeApplicationsRequest, cb?: (error: string, rep: DescribeApplicationsResponse) => void): Promise<DescribeApplicationsResponse>;
    /**
     * 获取prompt任务列表
     */
    DescribeMuskPrompts(req: DescribeMuskPromptsRequest, cb?: (error: string, rep: DescribeMuskPromptsResponse) => void): Promise<DescribeMuskPromptsResponse>;
    /**
     * 查询场景
     */
    DescribeScenes(req: DescribeScenesRequest, cb?: (error: string, rep: DescribeScenesResponse) => void): Promise<DescribeScenesResponse>;
    /**
     * 查询地域列表
     */
    DescribeRegions(req?: DescribeRegionsRequest, cb?: (error: string, rep: DescribeRegionsResponse) => void): Promise<DescribeRegionsResponse>;
    /**
     * 本接口 (RunInstances) 用于创建一个或多个指定配置的实例。
     */
    RunInstances(req: RunInstancesRequest, cb?: (error: string, rep: RunInstancesResponse) => void): Promise<RunInstancesResponse>;
    /**
     * 本接口 (StartInstance) 用于主动启动实例。
     */
    StartInstance(req: StartInstanceRequest, cb?: (error: string, rep: StartInstanceResponse) => void): Promise<StartInstanceResponse>;
    /**
     * 创建musk prompt 任务
     */
    CreateMuskPrompt(req: CreateMuskPromptRequest, cb?: (error: string, rep: CreateMuskPromptResponse) => void): Promise<CreateMuskPromptResponse>;
    /**
     * 本接口 (TerminateInstances) 用于主动退还实例。
     */
    TerminateInstances(req: TerminateInstancesRequest, cb?: (error: string, rep: TerminateInstancesResponse) => void): Promise<TerminateInstancesResponse>;
    /**
     * 查询实例的网络配置及消耗情况
     */
    DescribeInstanceNetworkStatus(req: DescribeInstanceNetworkStatusRequest, cb?: (error: string, rep: DescribeInstanceNetworkStatusResponse) => void): Promise<DescribeInstanceNetworkStatusResponse>;
    /**
     * 查询服务登录配置
     */
    DescribeServiceLoginSettings(req: DescribeServiceLoginSettingsRequest, cb?: (error: string, rep: DescribeServiceLoginSettingsResponse) => void): Promise<DescribeServiceLoginSettingsResponse>;
    /**
     * 本接口 (InquirePriceRunInstances) 用于实例询价。
     */
    InquirePriceRunInstances(req: InquirePriceRunInstancesRequest, cb?: (error: string, rep: InquirePriceRunInstancesResponse) => void): Promise<InquirePriceRunInstancesResponse>;
    /**
     * 本接口 (StopInstance) 用于主动关闭实例。
     */
    StopInstance(req: StopInstanceRequest, cb?: (error: string, rep: StopInstanceResponse) => void): Promise<StopInstanceResponse>;
}
