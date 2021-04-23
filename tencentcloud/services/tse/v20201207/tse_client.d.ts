import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { DescribeSREInstancesRequest, ManageConfigRequest, DescribeSREInstanceAccessAddressResponse, DescribeSREInstancesResponse, DescribeSREInstanceAccessAddressRequest, ManageConfigResponse } from "./tse_models";
/**
 * tse client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 管理配置
     */
    ManageConfig(req: ManageConfigRequest, cb?: (error: string, rep: ManageConfigResponse) => void): Promise<ManageConfigResponse>;
    /**
     * 查询微服务注册引擎实例访问地址
     */
    DescribeSREInstanceAccessAddress(req: DescribeSREInstanceAccessAddressRequest, cb?: (error: string, rep: DescribeSREInstanceAccessAddressResponse) => void): Promise<DescribeSREInstanceAccessAddressResponse>;
    /**
     * 用于查询微服务注册中心实例列表
     */
    DescribeSREInstances(req: DescribeSREInstancesRequest, cb?: (error: string, rep: DescribeSREInstancesResponse) => void): Promise<DescribeSREInstancesResponse>;
}
