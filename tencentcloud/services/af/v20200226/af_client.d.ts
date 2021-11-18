import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { DescribeAntiFraudResponse, GetAntiFraudRequest, DescribeAntiFraudRequest, QueryAntiFraudResponse, GetAntiFraudResponse, QueryAntiFraudRequest } from "./af_models";
/**
 * af client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 天御反欺诈服务，主要应用于银行、证券、保险、消费金融等金融行业客户，通过腾讯的大数据风控能力，
可以准确识别恶意用户信息，解决客户在支付、活动、理财，风控等业务环节遇到的欺诈威胁，降低企业
的损失。
     */
    QueryAntiFraud(req: QueryAntiFraudRequest, cb?: (error: string, rep: QueryAntiFraudResponse) => void): Promise<QueryAntiFraudResponse>;
    /**
     * 反欺诈评分接口
     */
    GetAntiFraud(req: GetAntiFraudRequest, cb?: (error: string, rep: GetAntiFraudResponse) => void): Promise<GetAntiFraudResponse>;
    /**
     * 天御反欺诈服务，主要应用于银行、证券、保险、消费金融等金融行业客户，通过腾讯的大数据风控能力，
可以准确识别恶意用户信息，解决客户在支付、活动、理财，风控等业务环节遇到的欺诈威胁，降低企业
的损失。
     */
    DescribeAntiFraud(req: DescribeAntiFraudRequest, cb?: (error: string, rep: DescribeAntiFraudResponse) => void): Promise<DescribeAntiFraudResponse>;
}
