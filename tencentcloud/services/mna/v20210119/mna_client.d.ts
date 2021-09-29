import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { DescribeQosRequest, DeleteQosRequest, DeleteQosResponse, CreateQosResponse, DescribeQosResponse, CreateQosRequest } from "./mna_models";
/**
 * mna client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 移动网络停止Qos加速过程
     */
    DeleteQos(req: DeleteQosRequest, cb?: (error: string, rep: DeleteQosResponse) => void): Promise<DeleteQosResponse>;
    /**
     * 移动网络发起Qos加速过程
     */
    CreateQos(req: CreateQosRequest, cb?: (error: string, rep: CreateQosResponse) => void): Promise<CreateQosResponse>;
    /**
     * 获取Qos加速状态
     */
    DescribeQos(req: DescribeQosRequest, cb?: (error: string, rep: DescribeQosResponse) => void): Promise<DescribeQosResponse>;
}
