import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { QueryAntiFraudVipResponse, TransportGeneralInterfaceRequest, GetAntiFraudVipResponse, TransportGeneralInterfaceResponse, QueryAntiFraudVipRequest, GetAntiFraudVipRequest } from "./afc_models";
/**
 * afc client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 天御反欺诈服务，主要应用于银行、证券、保险、P2P等金融行业客户，通过腾讯的大数据风控能力，
可以准确识别恶意用户信息，解决客户在支付、活动、理财，风控等业务环节遇到的欺诈威胁，降低企业
的损失。
     */
    QueryAntiFraudVip(req: QueryAntiFraudVipRequest, cb?: (error: string, rep: QueryAntiFraudVipResponse) => void): Promise<QueryAntiFraudVipResponse>;
    /**
     * 反欺诈VIP评分接口
     */
    GetAntiFraudVip(req: GetAntiFraudVipRequest, cb?: (error: string, rep: GetAntiFraudVipResponse) => void): Promise<GetAntiFraudVipResponse>;
    /**
     * 天御信鸽取数平台接口
     */
    TransportGeneralInterface(req: TransportGeneralInterfaceRequest, cb?: (error: string, rep: TransportGeneralInterfaceResponse) => void): Promise<TransportGeneralInterfaceResponse>;
}
