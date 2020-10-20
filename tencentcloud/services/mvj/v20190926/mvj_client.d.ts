import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { MarketingValueJudgementRequest, MarketingValueJudgementResponse } from "./mvj_models";
/**
 * mvj client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 欢迎使用营销价值判断（Marketing Value Judgement，简称 MVJ）。

营销价值判断（MVJ）是针对零售场景的风控服务，通过识别高价值顾客，以帮助零售商保障营销资金
     */
    MarketingValueJudgement(req: MarketingValueJudgementRequest, cb?: (error: string, rep: MarketingValueJudgementResponse) => void): Promise<MarketingValueJudgementResponse>;
}
