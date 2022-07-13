import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { CallDeviceActionAsyncResponse, GenSingleDeviceSignatureOfPublicResponse, CreateProductRequest, GenSingleDeviceSignatureOfPublicRequest, DescribeDeviceDataStatsRequest, CallDeviceActionSyncResponse, CreateProductResponse, DescribeDeviceDataStatsResponse, DescribeMessageDataStatsRequest, DescribeMessageDataStatsResponse, CallDeviceActionAsyncRequest, CallDeviceActionSyncRequest } from "./iotvideo_models";
/**
 * iotvideo client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 查询设备消息数量统计
     */
    DescribeMessageDataStats(req: DescribeMessageDataStatsRequest, cb?: (error: string, rep: DescribeMessageDataStatsResponse) => void): Promise<DescribeMessageDataStatsResponse>;
    /**
     * 创建产品
     */
    CreateProduct(req: CreateProductRequest, cb?: (error: string, rep: CreateProductResponse) => void): Promise<CreateProductResponse>;
    /**
     * 查询设备数据统计
     */
    DescribeDeviceDataStats(req: DescribeDeviceDataStatsRequest, cb?: (error: string, rep: DescribeDeviceDataStatsResponse) => void): Promise<DescribeDeviceDataStatsResponse>;
    /**
     * 获取设备的绑定签名
     */
    GenSingleDeviceSignatureOfPublic(req: GenSingleDeviceSignatureOfPublicRequest, cb?: (error: string, rep: GenSingleDeviceSignatureOfPublicResponse) => void): Promise<GenSingleDeviceSignatureOfPublicResponse>;
    /**
     * 异步调用设备行为
     */
    CallDeviceActionAsync(req: CallDeviceActionAsyncRequest, cb?: (error: string, rep: CallDeviceActionAsyncResponse) => void): Promise<CallDeviceActionAsyncResponse>;
    /**
     * 同步调用设备行为
     */
    CallDeviceActionSync(req: CallDeviceActionSyncRequest, cb?: (error: string, rep: CallDeviceActionSyncResponse) => void): Promise<CallDeviceActionSyncResponse>;
}
