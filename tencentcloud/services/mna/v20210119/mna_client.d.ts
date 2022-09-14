import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { GetDeviceResponse, DeleteQosRequest, CreateQosResponse, DescribeQosResponse, DeleteDeviceRequest, UpdateDeviceResponse, CreateQosRequest, GetStatisticDataRequest, UpdateDeviceRequest, DeleteQosResponse, AddDeviceResponse, GetDeviceRequest, GetDevicesResponse, DescribeQosRequest, DeleteDeviceResponse, GetStatisticDataResponse, GetDevicesRequest, AddDeviceRequest } from "./mna_models";
/**
 * mna client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 在用量统计页面下载流量数据
     */
    GetStatisticData(req: GetStatisticDataRequest, cb?: (error: string, rep: GetStatisticDataResponse) => void): Promise<GetStatisticDataResponse>;
    /**
     * 更新设备信息
     */
    UpdateDevice(req: UpdateDeviceRequest, cb?: (error: string, rep: UpdateDeviceResponse) => void): Promise<UpdateDeviceResponse>;
    /**
     * 新建设备记录
     */
    AddDevice(req: AddDeviceRequest, cb?: (error: string, rep: AddDeviceResponse) => void): Promise<AddDeviceResponse>;
    /**
     * 获取Qos加速状态
     */
    DescribeQos(req: DescribeQosRequest, cb?: (error: string, rep: DescribeQosResponse) => void): Promise<DescribeQosResponse>;
    /**
     * 获取设备信息列表
     */
    GetDevices(req: GetDevicesRequest, cb?: (error: string, rep: GetDevicesResponse) => void): Promise<GetDevicesResponse>;
    /**
     * 删除设备信息
     */
    DeleteDevice(req: DeleteDeviceRequest, cb?: (error: string, rep: DeleteDeviceResponse) => void): Promise<DeleteDeviceResponse>;
    /**
     * 移动网络停止Qos加速过程
     */
    DeleteQos(req: DeleteQosRequest, cb?: (error: string, rep: DeleteQosResponse) => void): Promise<DeleteQosResponse>;
    /**
     * 通过指定设备的ID查找设备详细信息
     */
    GetDevice(req: GetDeviceRequest, cb?: (error: string, rep: GetDeviceResponse) => void): Promise<GetDeviceResponse>;
    /**
     * 移动网络发起Qos加速过程
     */
    CreateQos(req: CreateQosRequest, cb?: (error: string, rep: CreateQosResponse) => void): Promise<CreateQosResponse>;
}
