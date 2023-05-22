import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { Describe5GAPNsResponse, Modify5GInstanceAttributeRequest, Delete5GInstanceResponse, Modify5GInstanceAttributeResponse, Describe5GInstancesResponse, Describe5GAPNsRequest, Create5GInstanceResponse, Delete5GInstanceRequest, Describe5GInstancesRequest, Create5GInstanceRequest } from "./csxg_models";
/**
 * csxg client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 修改5G入云服务
     */
    Modify5GInstanceAttribute(req?: Modify5GInstanceAttributeRequest, cb?: (error: string, rep: Modify5GInstanceAttributeResponse) => void): Promise<Modify5GInstanceAttributeResponse>;
    /**
     * 删除5G入云服务
     */
    Delete5GInstance(req?: Delete5GInstanceRequest, cb?: (error: string, rep: Delete5GInstanceResponse) => void): Promise<Delete5GInstanceResponse>;
    /**
     * 创建5G入云服务接口
     */
    Create5GInstance(req?: Create5GInstanceRequest, cb?: (error: string, rep: Create5GInstanceResponse) => void): Promise<Create5GInstanceResponse>;
    /**
     * 查询5G入云服务
     */
    Describe5GInstances(req?: Describe5GInstancesRequest, cb?: (error: string, rep: Describe5GInstancesResponse) => void): Promise<Describe5GInstancesResponse>;
    /**
     * 查询APN信息
     */
    Describe5GAPNs(req?: Describe5GAPNsRequest, cb?: (error: string, rep: Describe5GAPNsResponse) => void): Promise<Describe5GAPNsResponse>;
}
