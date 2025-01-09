import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { ListAggregateDiscoveredResourcesRequest, DescribeAggregateDiscoveredResourceRequest, ListAggregateConfigRulesRequest, DescribeDiscoveredResourceRequest, PutEvaluationsResponse, DescribeDiscoveredResourceResponse, ListConfigRulesResponse, ListDiscoveredResourcesRequest, PutEvaluationsRequest, ListAggregateConfigRulesResponse, ListAggregateDiscoveredResourcesResponse, DescribeAggregateDiscoveredResourceResponse, ListConfigRulesRequest, ListDiscoveredResourcesResponse } from "./config_models";
/**
 * config client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 账号组获取规则列表
     */
    ListAggregateConfigRules(req: ListAggregateConfigRulesRequest, cb?: (error: string, rep: ListAggregateConfigRulesResponse) => void): Promise<ListAggregateConfigRulesResponse>;
    /**
     * 获取资源列表
     */
    ListDiscoveredResources(req: ListDiscoveredResourcesRequest, cb?: (error: string, rep: ListDiscoveredResourcesResponse) => void): Promise<ListDiscoveredResourcesResponse>;
    /**
     * 获取规则列表
     */
    ListConfigRules(req: ListConfigRulesRequest, cb?: (error: string, rep: ListConfigRulesResponse) => void): Promise<ListConfigRulesResponse>;
    /**
     * 账号组资源详情
     */
    DescribeAggregateDiscoveredResource(req: DescribeAggregateDiscoveredResourceRequest, cb?: (error: string, rep: DescribeAggregateDiscoveredResourceResponse) => void): Promise<DescribeAggregateDiscoveredResourceResponse>;
    /**
     * 资源详情
     */
    DescribeDiscoveredResource(req: DescribeDiscoveredResourceRequest, cb?: (error: string, rep: DescribeDiscoveredResourceResponse) => void): Promise<DescribeDiscoveredResourceResponse>;
    /**
     * 账号组获取资源列表
     */
    ListAggregateDiscoveredResources(req: ListAggregateDiscoveredResourcesRequest, cb?: (error: string, rep: ListAggregateDiscoveredResourcesResponse) => void): Promise<ListAggregateDiscoveredResourcesResponse>;
    /**
     * 上报自定义规则评估结果
     */
    PutEvaluations(req: PutEvaluationsRequest, cb?: (error: string, rep: PutEvaluationsResponse) => void): Promise<PutEvaluationsResponse>;
}
