import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { GetDeviceResponse, GetDevicePayModeRequest, GetFlowAlarmInfoResponse, GetNetMonitorResponse, DeleteQosRequest, GetNetMonitorRequest, OrderFlowPackageRequest, GetMultiFlowStatisticResponse, GetFlowStatisticResponse, GetFlowAlarmInfoRequest, CreateQosResponse, DescribeQosResponse, GetVendorHardwareRequest, CreateEncryptedKeyRequest, DeleteDeviceRequest, GetFlowPackagesRequest, GetHardwareListRequest, CreateEncryptedKeyResponse, OrderFlowPackageResponse, UpdateDeviceResponse, ModifyPackageRenewFlagRequest, CreateQosRequest, GetStatisticDataRequest, GetFlowPackagesResponse, GetVendorHardwareResponse, UpdateDeviceRequest, GetPublicKeyResponse, GetFlowStatisticRequest, ActivateHardwareRequest, AddHardwareResponse, ModifyPackageRenewFlagResponse, GetMultiFlowStatisticRequest, DeleteQosResponse, AddDeviceResponse, GetDevicePayModeResponse, GetDeviceRequest, ActivateHardwareResponse, UpdateHardwareResponse, GetFlowStatisticByGroupRequest, GetDevicesResponse, DescribeQosRequest, DeleteDeviceResponse, GetStatisticDataResponse, AddHardwareRequest, GetFlowStatisticByGroupResponse, GetDevicesRequest, GetHardwareListResponse, UpdateHardwareRequest, AddDeviceRequest, GetPublicKeyRequest } from "./mna_models";
/**
 * mna client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 更新硬件信息
     */
    UpdateHardware(req: UpdateHardwareRequest, cb?: (error: string, rep: UpdateHardwareResponse) => void): Promise<UpdateHardwareResponse>;
    /**
     * 可开启/关闭流量包自动续费，不影响当前周期正在生效的流量包。
     */
    ModifyPackageRenewFlag(req: ModifyPackageRenewFlagRequest, cb?: (error: string, rep: ModifyPackageRenewFlagResponse) => void): Promise<ModifyPackageRenewFlagResponse>;
    /**
     * 获取指定设备Id，指定时间点数据流量使用情况
     */
    GetFlowStatistic(req: GetFlowStatisticRequest, cb?: (error: string, rep: GetFlowStatisticResponse) => void): Promise<GetFlowStatisticResponse>;
    /**
     * 获取指定分组，指定时间数据流量使用情况
     */
    GetFlowStatisticByGroup(req: GetFlowStatisticByGroupRequest, cb?: (error: string, rep: GetFlowStatisticByGroupResponse) => void): Promise<GetFlowStatisticByGroupResponse>;
    /**
     * 批量获取设备流量统计曲线
     */
    GetMultiFlowStatistic(req: GetMultiFlowStatisticRequest, cb?: (error: string, rep: GetMultiFlowStatisticResponse) => void): Promise<GetMultiFlowStatisticResponse>;
    /**
     * 获取设备信息列表
     */
    GetDevices(req: GetDevicesRequest, cb?: (error: string, rep: GetDevicesResponse) => void): Promise<GetDevicesResponse>;
    /**
     * 获取公钥用于验签
     */
    GetPublicKey(req?: GetPublicKeyRequest, cb?: (error: string, rep: GetPublicKeyResponse) => void): Promise<GetPublicKeyResponse>;
    /**
     * 激活硬件设备
     */
    ActivateHardware(req: ActivateHardwareRequest, cb?: (error: string, rep: ActivateHardwareResponse) => void): Promise<ActivateHardwareResponse>;
    /**
     * 获取流量包列表
     */
    GetFlowPackages(req: GetFlowPackagesRequest, cb?: (error: string, rep: GetFlowPackagesResponse) => void): Promise<GetFlowPackagesResponse>;
    /**
     * 添加硬件设备，生成未激活的硬件设备，可支持批量添加
     */
    AddHardware(req: AddHardwareRequest, cb?: (error: string, rep: AddHardwareResponse) => void): Promise<AddHardwareResponse>;
    /**
     * 通过指定设备的ID查找设备详细信息
     */
    GetDevice(req: GetDeviceRequest, cb?: (error: string, rep: GetDeviceResponse) => void): Promise<GetDeviceResponse>;
    /**
     * 移动网络发起Qos加速过程
     */
    CreateQos(req: CreateQosRequest, cb?: (error: string, rep: CreateQosResponse) => void): Promise<CreateQosResponse>;
    /**
     * 删除设备信息
     */
    DeleteDevice(req: DeleteDeviceRequest, cb?: (error: string, rep: DeleteDeviceResponse) => void): Promise<DeleteDeviceResponse>;
    /**
     * 更新设备信息
     */
    UpdateDevice(req: UpdateDeviceRequest, cb?: (error: string, rep: UpdateDeviceResponse) => void): Promise<UpdateDeviceResponse>;
    /**
     * 获取单设备的实时流量统计指标
     */
    GetNetMonitor(req: GetNetMonitorRequest, cb?: (error: string, rep: GetNetMonitorResponse) => void): Promise<GetNetMonitorResponse>;
    /**
     * 获取设备付费模式
     */
    GetDevicePayMode(req: GetDevicePayModeRequest, cb?: (error: string, rep: GetDevicePayModeResponse) => void): Promise<GetDevicePayModeResponse>;
    /**
     * 获取厂商硬件设备列表
     */
    GetVendorHardware(req: GetVendorHardwareRequest, cb?: (error: string, rep: GetVendorHardwareResponse) => void): Promise<GetVendorHardwareResponse>;
    /**
     * 通过此接口设置和更新预置密钥
     */
    CreateEncryptedKey(req?: CreateEncryptedKeyRequest, cb?: (error: string, rep: CreateEncryptedKeyResponse) => void): Promise<CreateEncryptedKeyResponse>;
    /**
     * 移动网络停止Qos加速过程
     */
    DeleteQos(req: DeleteQosRequest, cb?: (error: string, rep: DeleteQosResponse) => void): Promise<DeleteQosResponse>;
    /**
     * 根据AppId查询用户设置的流量告警信息，包括阈值，回调url和key
     */
    GetFlowAlarmInfo(req?: GetFlowAlarmInfoRequest, cb?: (error: string, rep: GetFlowAlarmInfoResponse) => void): Promise<GetFlowAlarmInfoResponse>;
    /**
     * 购买预付费流量包
     */
    OrderFlowPackage(req: OrderFlowPackageRequest, cb?: (error: string, rep: OrderFlowPackageResponse) => void): Promise<OrderFlowPackageResponse>;
    /**
     * 在用量统计页面下载流量数据
     */
    GetStatisticData(req: GetStatisticDataRequest, cb?: (error: string, rep: GetStatisticDataResponse) => void): Promise<GetStatisticDataResponse>;
    /**
     * 获取厂商硬件列表
     */
    GetHardwareList(req: GetHardwareListRequest, cb?: (error: string, rep: GetHardwareListResponse) => void): Promise<GetHardwareListResponse>;
    /**
     * 新建设备记录
     */
    AddDevice(req: AddDeviceRequest, cb?: (error: string, rep: AddDeviceResponse) => void): Promise<AddDeviceResponse>;
    /**
     * 获取Qos加速状态
     */
    DescribeQos(req: DescribeQosRequest, cb?: (error: string, rep: DescribeQosResponse) => void): Promise<DescribeQosResponse>;
}
