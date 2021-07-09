import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { DescribeSREInstancesRequest, ManageConfigRequest, DescribeSREInstanceAccessAddressResponse, DescribeConfigRequest, DescribeSREInstancesResponse, DescribeConfigResponse, DescribeSREInstanceAccessAddressRequest, ManageConfigResponse } from "./tse_models";
/**
 * tse client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 用于查询微服务引擎实例列表
     */
    DescribeSREInstances(req: DescribeSREInstancesRequest, cb?: (error: string, rep: DescribeSREInstancesResponse) => void): Promise<DescribeSREInstancesResponse>;
    /**
     * 管理配置
     */
    ManageConfig(req: ManageConfigRequest, cb?: (error: string, rep: ManageConfigResponse) => void): Promise<ManageConfigResponse>;
    /**
     * 查询微服务注册引擎实例访问地址
     */
    DescribeSREInstanceAccessAddress(req: DescribeSREInstanceAccessAddressRequest, cb?: (error: string, rep: DescribeSREInstanceAccessAddressResponse) => void): Promise<DescribeSREInstanceAccessAddressResponse>;
    /**
     * 查看配置项
     */
    DescribeConfig(req: DescribeConfigRequest, cb?: (error: string, rep: DescribeConfigResponse) => void): Promise<DescribeConfigResponse>;
}
