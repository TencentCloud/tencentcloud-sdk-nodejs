import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { DescribeServiceAlertObjectResponse, DescribeComponentAlertObjectRequest, DescribeComponentAlertObjectResponse, DescribeServiceAlertObjectRequest } from "./tsw_models";
/**
 * tsw client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 获取告警对象-服务告警表
     */
    DescribeServiceAlertObject(req?: DescribeServiceAlertObjectRequest, cb?: (error: string, rep: DescribeServiceAlertObjectResponse) => void): Promise<DescribeServiceAlertObjectResponse>;
    /**
     * 获取告警对象-组件告警
     */
    DescribeComponentAlertObject(req?: DescribeComponentAlertObjectRequest, cb?: (error: string, rep: DescribeComponentAlertObjectResponse) => void): Promise<DescribeComponentAlertObjectResponse>;
}
