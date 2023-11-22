import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { ListConfigRulesResponse, ListAggregateConfigRulesRequest, ListAggregateConfigRulesResponse, ListConfigRulesRequest } from "./config_models";
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
}
