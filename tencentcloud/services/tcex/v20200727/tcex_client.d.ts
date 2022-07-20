import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { InvokeServiceRequest, DescribeInvocationResultResponse, InvokeServiceResponse, DescribeInvocationResultRequest } from "./tcex_models";
/**
 * tcex client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 产品控制台已经下线

获取服务调用结果。和InvokeService接口配置合适，其InvokeId参数为InvokeService接口返回的RequestId。
     */
    DescribeInvocationResult(req: DescribeInvocationResultRequest, cb?: (error: string, rep: DescribeInvocationResultResponse) => void): Promise<DescribeInvocationResultResponse>;
    /**
     * 产品控制台已经下线

通过传入文档url，测试服务算法。此接口需要和DescribeInvocationResult接口配置使用，该接口使用InvokeService返回的RequestId作为InvokeId参数，用于查询调用结果。
     */
    InvokeService(req: InvokeServiceRequest, cb?: (error: string, rep: InvokeServiceResponse) => void): Promise<InvokeServiceResponse>;
}
