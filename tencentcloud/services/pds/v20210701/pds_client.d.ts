import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { DescribeStockEstimationResponse, DescribeNewUserAcquisitionRequest, DescribeStockEstimationRequest, DescribeNewUserAcquisitionResponse } from "./pds_models";
/**
 * pds client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 查询存量判断服务
     */
    DescribeStockEstimation(req: DescribeStockEstimationRequest, cb?: (error: string, rep: DescribeStockEstimationResponse) => void): Promise<DescribeStockEstimationResponse>;
    /**
     * 判断新用户信誉值
     */
    DescribeNewUserAcquisition(req: DescribeNewUserAcquisitionRequest, cb?: (error: string, rep: DescribeNewUserAcquisitionResponse) => void): Promise<DescribeNewUserAcquisitionResponse>;
}
