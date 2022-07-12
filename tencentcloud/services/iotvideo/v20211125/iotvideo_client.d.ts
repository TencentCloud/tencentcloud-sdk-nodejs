import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { CallDeviceActionAsyncResponse, DescribeDeviceDataStatsResponse, DescribeDeviceDataStatsRequest, CallDeviceActionSyncResponse, DescribeMessageDataStatsResponse, DescribeMessageDataStatsRequest, CallDeviceActionAsyncRequest, CallDeviceActionSyncRequest } from "./iotvideo_models";
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
     * 异步调用设备行为
     */
    CallDeviceActionAsync(req: CallDeviceActionAsyncRequest, cb?: (error: string, rep: CallDeviceActionAsyncResponse) => void): Promise<CallDeviceActionAsyncResponse>;
    /**
     * 同步调用设备行为
     */
    CallDeviceActionSync(req: CallDeviceActionSyncRequest, cb?: (error: string, rep: CallDeviceActionSyncResponse) => void): Promise<CallDeviceActionSyncResponse>;
    /**
     * 查询设备数据统计
     */
    DescribeDeviceDataStats(req: DescribeDeviceDataStatsRequest, cb?: (error: string, rep: DescribeDeviceDataStatsResponse) => void): Promise<DescribeDeviceDataStatsResponse>;
}
