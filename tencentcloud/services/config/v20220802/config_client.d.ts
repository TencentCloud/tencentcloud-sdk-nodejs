import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { ListAggregateConfigRulesRequest, ListConfigRulesResponse, DescribeDiscoveredResourceResponse, ListAggregateConfigRulesResponse, ListConfigRulesRequest, PutEvaluationsRequest, DescribeDiscoveredResourceRequest, ListDiscoveredResourcesResponse, ListDiscoveredResourcesRequest, PutEvaluationsResponse } from "./config_models";
/**
 * config client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 获取规则列表
     */
    ListConfigRules(req: ListConfigRulesRequest, cb?: (error: string, rep: ListConfigRulesResponse) => void): Promise<ListConfigRulesResponse>;
    /**
     * 获取资源列表
     */
    ListDiscoveredResources(req: ListDiscoveredResourcesRequest, cb?: (error: string, rep: ListDiscoveredResourcesResponse) => void): Promise<ListDiscoveredResourcesResponse>;
    /**
     * 账号组获取规则列表
     */
    ListAggregateConfigRules(req: ListAggregateConfigRulesRequest, cb?: (error: string, rep: ListAggregateConfigRulesResponse) => void): Promise<ListAggregateConfigRulesResponse>;
    /**
     * 上报自定义规则评估结果
     */
    PutEvaluations(req: PutEvaluationsRequest, cb?: (error: string, rep: PutEvaluationsResponse) => void): Promise<PutEvaluationsResponse>;
    /**
     * 资源详情
     */
    DescribeDiscoveredResource(req: DescribeDiscoveredResourceRequest, cb?: (error: string, rep: DescribeDiscoveredResourceResponse) => void): Promise<DescribeDiscoveredResourceResponse>;
}
