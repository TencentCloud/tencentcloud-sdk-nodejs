import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { GetDeviceResponse, GetFlowStatisticResponse, GetFlowStatisticRequest, DeleteQosRequest, GetMultiFlowStatisticResponse, CreateQosResponse, DescribeQosResponse, CreateEncryptedKeyRequest, DeleteDeviceRequest, CreateEncryptedKeyResponse, UpdateDeviceResponse, CreateQosRequest, GetStatisticDataRequest, UpdateDeviceRequest, GetPublicKeyResponse, GetMultiFlowStatisticRequest, DeleteQosResponse, AddDeviceResponse, GetDeviceRequest, GetDevicesResponse, DescribeQosRequest, DeleteDeviceResponse, GetStatisticDataResponse, GetDevicesRequest, AddDeviceRequest, GetPublicKeyRequest } from "./mna_models";
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
     * 获取指定设备Id，指定时间点数据流量使用情况
     */
    GetFlowStatistic(req: GetFlowStatisticRequest, cb?: (error: string, rep: GetFlowStatisticResponse) => void): Promise<GetFlowStatisticResponse>;
    /**
     * 获取设备信息列表
     */
    GetDevices(req: GetDevicesRequest, cb?: (error: string, rep: GetDevicesResponse) => void): Promise<GetDevicesResponse>;
    /**
     * 获取公钥用于验签
     */
    GetPublicKey(req?: GetPublicKeyRequest, cb?: (error: string, rep: GetPublicKeyResponse) => void): Promise<GetPublicKeyResponse>;
    /**
     * 通过此接口设置和更新预置密钥
     */
    CreateEncryptedKey(req?: CreateEncryptedKeyRequest, cb?: (error: string, rep: CreateEncryptedKeyResponse) => void): Promise<CreateEncryptedKeyResponse>;
    /**
     * 批量获取设备流量统计曲线
     */
    GetMultiFlowStatistic(req: GetMultiFlowStatisticRequest, cb?: (error: string, rep: GetMultiFlowStatisticResponse) => void): Promise<GetMultiFlowStatisticResponse>;
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
