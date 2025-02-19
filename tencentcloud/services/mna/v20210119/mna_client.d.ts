import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { DeleteL3ConnResponse, GetDeviceResponse, GetMultiFlowStatisticResponse, UpdateL3ConnResponse, UpdateHardwareResponse, UpdateL3SwitchRequest, DescribeQosResponse, AddL3ConnRequest, OrderPerLicenseResponse, GetFlowPackagesRequest, SetNotifyUrlResponse, UpdateL3CidrResponse, ModifyPackageRenewFlagRequest, GetFlowPackagesResponse, DeleteL3ConnRequest, GetVendorHardwareResponse, GetActiveDeviceCountResponse, AddGroupRequest, GetGroupListRequest, GetGroupDetailRequest, GroupDeleteDeviceResponse, GroupAddDeviceRequest, GetStatisticDataResponse, GetPublicKeyRequest, GetFlowStatisticByGroupResponse, GetNetMonitorResponse, DeleteQosRequest, GetFlowStatisticByRegionRequest, GetFlowAlarmInfoRequest, GetVendorHardwareRequest, CreateEncryptedKeyRequest, DeleteDeviceRequest, DeleteGroupRequest, CreateEncryptedKeyResponse, UpdateL3SwitchResponse, GetL3ConnListResponse, CreateQosRequest, ModifyPackageRenewFlagResponse, DeleteQosResponse, GetDeviceRequest, ActivateHardwareResponse, GetFlowStatisticByGroupRequest, GetDevicesResponse, DescribeQosRequest, AddL3ConnResponse, GetDevicesRequest, SetNotifyUrlRequest, GetDevicePayModeRequest, GetFlowStatisticRequest, CreateQosResponse, DownloadActiveDeviceCountResponse, GetHardwareListRequest, GroupDeleteDeviceRequest, GetFlowStatisticByRegionResponse, GetMultiFlowStatisticRequest, GetFlowAlarmInfoResponse, OrderFlowPackageRequest, GetGroupDetailResponse, UpdateGroupResponse, GetL3ConnListRequest, DownloadActiveDeviceCountRequest, GetHardwareListResponse, AddDeviceRequest, OrderPerLicenseRequest, UpdateGroupRequest, GetFlowStatisticResponse, UpdateHardwareRequest, GetNetMonitorRequest, GetGroupListResponse, OrderFlowPackageResponse, UpdateDeviceResponse, ActivateHardwareRequest, GroupAddDeviceResponse, GetStatisticDataRequest, UpdateDeviceRequest, DeleteGroupResponse, GetPublicKeyResponse, AddHardwareResponse, AddDeviceResponse, GetDevicePayModeResponse, GetActiveDeviceCountRequest, UpdateL3ConnRequest, DeleteDeviceResponse, AddHardwareRequest, UpdateL3CidrRequest, AddGroupResponse } from "./mna_models";
/**
 * mna client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 设置用户流量告警信息接口，通过该接口设置流量包告警阈值以及告警时回调的url和key
     */
    SetNotifyUrl(req: SetNotifyUrlRequest, cb?: (error: string, rep: SetNotifyUrlResponse) => void): Promise<SetNotifyUrlResponse>;
    /**
     * 更新硬件信息
     */
    UpdateHardware(req: UpdateHardwareRequest, cb?: (error: string, rep: UpdateHardwareResponse) => void): Promise<UpdateHardwareResponse>;
    /**
     * 下载活跃设备数量统计
     */
    DownloadActiveDeviceCount(req: DownloadActiveDeviceCountRequest, cb?: (error: string, rep: DownloadActiveDeviceCountResponse) => void): Promise<DownloadActiveDeviceCountResponse>;
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
     * 向已存在分组中添加设备
     */
    GroupAddDevice(req: GroupAddDeviceRequest, cb?: (error: string, rep: GroupAddDeviceResponse) => void): Promise<GroupAddDeviceResponse>;
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
     * 产品下线

移动网络发起Qos加速过程
     */
    CreateQos(req: CreateQosRequest, cb?: (error: string, rep: CreateQosResponse) => void): Promise<CreateQosResponse>;
    /**
     * 删除互通规则
     */
    DeleteL3Conn(req: DeleteL3ConnRequest, cb?: (error: string, rep: DeleteL3ConnResponse) => void): Promise<DeleteL3ConnResponse>;
    /**
     * 删除分组
     */
    DeleteGroup(req: DeleteGroupRequest, cb?: (error: string, rep: DeleteGroupResponse) => void): Promise<DeleteGroupResponse>;
    /**
     * 产品下线

获取Qos加速状态
     */
    DescribeQos(req: DescribeQosRequest, cb?: (error: string, rep: DescribeQosResponse) => void): Promise<DescribeQosResponse>;
    /**
     * 活跃设备数量统计
     */
    GetActiveDeviceCount(req: GetActiveDeviceCountRequest, cb?: (error: string, rep: GetActiveDeviceCountResponse) => void): Promise<GetActiveDeviceCountResponse>;
    /**
     * 删除设备信息
     */
    DeleteDevice(req: DeleteDeviceRequest, cb?: (error: string, rep: DeleteDeviceResponse) => void): Promise<DeleteDeviceResponse>;
    /**
     * 更新设备信息
     */
    UpdateDevice(req: UpdateDeviceRequest, cb?: (error: string, rep: UpdateDeviceResponse) => void): Promise<UpdateDeviceResponse>;
    /**
     * 购买一次性授权License
     */
    OrderPerLicense(req: OrderPerLicenseRequest, cb?: (error: string, rep: OrderPerLicenseResponse) => void): Promise<OrderPerLicenseResponse>;
    /**
     * 获取单设备的实时流量统计指标
     */
    GetNetMonitor(req: GetNetMonitorRequest, cb?: (error: string, rep: GetNetMonitorResponse) => void): Promise<GetNetMonitorResponse>;
    /**
     * 获取设备付费模式
     */
    GetDevicePayMode(req: GetDevicePayModeRequest, cb?: (error: string, rep: GetDevicePayModeResponse) => void): Promise<GetDevicePayModeResponse>;
    /**
     * 查看分组详细信息
     */
    GetGroupDetail(req: GetGroupDetailRequest, cb?: (error: string, rep: GetGroupDetailResponse) => void): Promise<GetGroupDetailResponse>;
    /**
     * 更新互通规则CIDR
     */
    UpdateL3Cidr(req: UpdateL3CidrRequest, cb?: (error: string, rep: UpdateL3CidrResponse) => void): Promise<UpdateL3CidrResponse>;
    /**
     * 获取厂商硬件设备列表
     */
    GetVendorHardware(req: GetVendorHardwareRequest, cb?: (error: string, rep: GetVendorHardwareResponse) => void): Promise<GetVendorHardwareResponse>;
    /**
     * 新建互通规则
     */
    AddL3Conn(req: AddL3ConnRequest, cb?: (error: string, rep: AddL3ConnResponse) => void): Promise<AddL3ConnResponse>;
    /**
     * 通过此接口设置和更新预置密钥
     */
    CreateEncryptedKey(req?: CreateEncryptedKeyRequest, cb?: (error: string, rep: CreateEncryptedKeyResponse) => void): Promise<CreateEncryptedKeyResponse>;
    /**
     * 产品下线

移动网络停止Qos加速过程
     */
    DeleteQos(req: DeleteQosRequest, cb?: (error: string, rep: DeleteQosResponse) => void): Promise<DeleteQosResponse>;
    /**
     * 根据AppId查询用户设置的流量告警信息，包括阈值，回调url和key
     */
    GetFlowAlarmInfo(req?: GetFlowAlarmInfoRequest, cb?: (error: string, rep: GetFlowAlarmInfoResponse) => void): Promise<GetFlowAlarmInfoResponse>;
    /**
     * 删除分组中的设备
     */
    GroupDeleteDevice(req: GroupDeleteDeviceRequest, cb?: (error: string, rep: GroupDeleteDeviceResponse) => void): Promise<GroupDeleteDeviceResponse>;
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
     * 更新互通规则开关
     */
    UpdateL3Switch(req: UpdateL3SwitchRequest, cb?: (error: string, rep: UpdateL3SwitchResponse) => void): Promise<UpdateL3SwitchResponse>;
    /**
     * 新建设备记录
     */
    AddDevice(req: AddDeviceRequest, cb?: (error: string, rep: AddDeviceResponse) => void): Promise<AddDeviceResponse>;
    /**
     * 获取指定区域，指定时间点数据流量使用情况
     */
    GetFlowStatisticByRegion(req: GetFlowStatisticByRegionRequest, cb?: (error: string, rep: GetFlowStatisticByRegionResponse) => void): Promise<GetFlowStatisticByRegionResponse>;
    /**
     * 获取分组列表
     */
    GetGroupList(req: GetGroupListRequest, cb?: (error: string, rep: GetGroupListResponse) => void): Promise<GetGroupListResponse>;
    /**
     * 更新分组备注
     */
    UpdateGroup(req: UpdateGroupRequest, cb?: (error: string, rep: UpdateGroupResponse) => void): Promise<UpdateGroupResponse>;
    /**
     * 新建分组
     */
    AddGroup(req: AddGroupRequest, cb?: (error: string, rep: AddGroupResponse) => void): Promise<AddGroupResponse>;
    /**
     * 获取互通规则列表
     */
    GetL3ConnList(req: GetL3ConnListRequest, cb?: (error: string, rep: GetL3ConnListResponse) => void): Promise<GetL3ConnListResponse>;
    /**
     * 更新互通规则备注
     */
    UpdateL3Conn(req: UpdateL3ConnRequest, cb?: (error: string, rep: UpdateL3ConnResponse) => void): Promise<UpdateL3ConnResponse>;
}
