import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { DescribeSREInstancesRequest, DescribeSREInstancesResponse, DescribeSREInstanceAccessAddressResponse, DeleteEngineResponse, CreateEngineResponse, CreateEngineRequest, DeleteEngineRequest, DescribeSREInstanceAccessAddressRequest } from "./tse_models";
/**
 * tse client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 删除引擎实例
     */
    DeleteEngine(req: DeleteEngineRequest, cb?: (error: string, rep: DeleteEngineResponse) => void): Promise<DeleteEngineResponse>;
    /**
     * 查询引擎实例访问地址
     */
    DescribeSREInstanceAccessAddress(req: DescribeSREInstanceAccessAddressRequest, cb?: (error: string, rep: DescribeSREInstanceAccessAddressResponse) => void): Promise<DescribeSREInstanceAccessAddressResponse>;
    /**
     * 创建引擎实例
     */
    CreateEngine(req: CreateEngineRequest, cb?: (error: string, rep: CreateEngineResponse) => void): Promise<CreateEngineResponse>;
    /**
     * 用于查询引擎实例列表
     */
    DescribeSREInstances(req: DescribeSREInstancesRequest, cb?: (error: string, rep: DescribeSREInstancesResponse) => void): Promise<DescribeSREInstancesResponse>;
}
