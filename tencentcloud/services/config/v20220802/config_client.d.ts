import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { ListConfigRulesResponse, ListConfigRulesRequest, PutEvaluationsRequest, ListAggregateConfigRulesRequest, ListAggregateConfigRulesResponse, PutEvaluationsResponse } from "./config_models";
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
     * 账号组获取规则列表
     */
    ListAggregateConfigRules(req: ListAggregateConfigRulesRequest, cb?: (error: string, rep: ListAggregateConfigRulesResponse) => void): Promise<ListAggregateConfigRulesResponse>;
    /**
     * 上报自定义规则评估结果
     */
    PutEvaluations(req: PutEvaluationsRequest, cb?: (error: string, rep: PutEvaluationsResponse) => void): Promise<PutEvaluationsResponse>;
}
