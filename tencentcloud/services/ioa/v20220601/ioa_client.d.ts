import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { DescribeDevicesResponse, DescribeDevicesRequest } from "./ioa_models";
/**
 * ioa client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 查询满足条件的终端数据详情，私有化调用path为：/capi/Assets/Device/DescribeDevices
     */
    DescribeDevices(req: DescribeDevicesRequest, cb?: (error: string, rep: DescribeDevicesResponse) => void): Promise<DescribeDevicesResponse>;
}
