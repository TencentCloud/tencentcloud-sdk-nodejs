import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { InquirePriceRunInstancesResponse, TerminateInstancesRequest, DescribeServiceLoginSettingsResponse, DescribeInstanceNetworkStatusResponse, TerminateInstancesResponse, DescribeRegionsRequest, DescribeScenesResponse, DescribeApplicationsRequest, RunInstancesRequest, DescribeInstancesResponse, RunInstancesResponse, DescribeInstancesRequest, DescribeScenesRequest, DescribeRegionsResponse, InquirePriceRunInstancesRequest, DescribeServiceLoginSettingsRequest, DescribeApplicationsResponse, DescribeInstanceNetworkStatusRequest } from "./hai_models";
/**
 * hai client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 查询服务登录配置
     */
    DescribeServiceLoginSettings(req: DescribeServiceLoginSettingsRequest, cb?: (error: string, rep: DescribeServiceLoginSettingsResponse) => void): Promise<DescribeServiceLoginSettingsResponse>;
    /**
     * 查询应用
     */
    DescribeApplications(req: DescribeApplicationsRequest, cb?: (error: string, rep: DescribeApplicationsResponse) => void): Promise<DescribeApplicationsResponse>;
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
     * 查询实例的网络配置及消耗情况
     */
    DescribeInstanceNetworkStatus(req: DescribeInstanceNetworkStatusRequest, cb?: (error: string, rep: DescribeInstanceNetworkStatusResponse) => void): Promise<DescribeInstanceNetworkStatusResponse>;
    /**
     * 查询实例
     */
    DescribeInstances(req: DescribeInstancesRequest, cb?: (error: string, rep: DescribeInstancesResponse) => void): Promise<DescribeInstancesResponse>;
    /**
     * 本接口 (InquirePriceRunInstances) 用于实例询价。
     */
    InquirePriceRunInstances(req: InquirePriceRunInstancesRequest, cb?: (error: string, rep: InquirePriceRunInstancesResponse) => void): Promise<InquirePriceRunInstancesResponse>;
    /**
     * 本接口 (TerminateInstances) 用于主动退还实例。
     */
    TerminateInstances(req: TerminateInstancesRequest, cb?: (error: string, rep: TerminateInstancesResponse) => void): Promise<TerminateInstancesResponse>;
}
