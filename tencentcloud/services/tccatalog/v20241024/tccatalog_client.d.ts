import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { DescribeTccCatalogRequest, DescribeTccCatalogsRequest, BindTccVpcEndPointServiceWhiteListResponse, AcceptTccVpcEndPointConnectResponse, BindTccVpcEndPointServiceWhiteListRequest, AcceptTccVpcEndPointConnectRequest, DescribeTccCatalogsResponse, DescribeTccCatalogResponse } from "./tccatalog_models";
/**
 * tccatalog client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 获取Tcc数据目录列表
     */
    DescribeTccCatalogs(req: DescribeTccCatalogsRequest, cb?: (error: string, rep: DescribeTccCatalogsResponse) => void): Promise<DescribeTccCatalogsResponse>;
    /**
     * 获取Tcc数据目录详情
     */
    DescribeTccCatalog(req: DescribeTccCatalogRequest, cb?: (error: string, rep: DescribeTccCatalogResponse) => void): Promise<DescribeTccCatalogResponse>;
    /**
     * 绑定终端节点服务白名单用户
     */
    BindTccVpcEndPointServiceWhiteList(req: BindTccVpcEndPointServiceWhiteListRequest, cb?: (error: string, rep: BindTccVpcEndPointServiceWhiteListResponse) => void): Promise<BindTccVpcEndPointServiceWhiteListResponse>;
    /**
     * 接受终端节点连接
     */
    AcceptTccVpcEndPointConnect(req: AcceptTccVpcEndPointConnectRequest, cb?: (error: string, rep: AcceptTccVpcEndPointConnectResponse) => void): Promise<AcceptTccVpcEndPointConnectResponse>;
}
