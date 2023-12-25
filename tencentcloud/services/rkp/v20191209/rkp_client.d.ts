import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { GetTokenResponse, QueryDevAndRiskRequest, GetOpenIdRequest, QueryDevAndRiskResponse, GetTokenRequest, GetOpenIdResponse } from "./rkp_models";
/**
 * rkp client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 产品侧确认风险探针已停售，无收入，并且已经停服。目前服务使用自建redis，不符合规范需要整改下线。

根据DevicceToken查询OpenID。
     */
    GetOpenId(req: GetOpenIdRequest, cb?: (error: string, rep: GetOpenIdResponse) => void): Promise<GetOpenIdResponse>;
    /**
     * 产品侧确认风险探针已停售，无收入，并且已经停服。目前服务使用自建redis，不符合规范需要整改下线。

获取token接口。
     */
    GetToken(req: GetTokenRequest, cb?: (error: string, rep: GetTokenResponse) => void): Promise<GetTokenResponse>;
    /**
     * 产品侧确认风险探针已停售，无收入，并且已经停服。目前服务使用自建redis，不符合规范需要整改下线。

腾讯天御设备风险查询接口，输入由客户应用自主采集的设备信息， 通过腾讯大数据风控能力，可以准确根据输入设备信息，还原设备库中的设备ID，并且识别设备的风险，解决客户业务过程中的设备风险，降低企业损失。
     */
    QueryDevAndRisk(req: QueryDevAndRiskRequest, cb?: (error: string, rep: QueryDevAndRiskResponse) => void): Promise<QueryDevAndRiskResponse>;
}
