/* eslint-disable @typescript-eslint/no-unused-vars */
/*
 * Copyright (c) 2018 THL A29 Limited, a Tencent company. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
import { AbstractClient } from "../../../common/abstract_client"
import { ClientConfig } from "../../../common/interface"
import {
  DeleteL3ConnResponse,
  GetDeviceResponse,
  GetMultiFlowStatisticResponse,
  DestAddressInfo,
  UpdateL3ConnResponse,
  UpdateHardwareResponse,
  UpdateNetInfo,
  UpdateL3SwitchRequest,
  DescribeQosResponse,
  AddL3ConnRequest,
  OrderPerLicenseResponse,
  GetFlowPackagesRequest,
  SetNotifyUrlResponse,
  UpdateL3CidrResponse,
  ModifyPackageRenewFlagRequest,
  GetFlowPackagesResponse,
  DeleteL3ConnRequest,
  GetVendorHardwareResponse,
  GetActiveDeviceCountResponse,
  DeviceBaseInfo,
  AddGroupRequest,
  GetGroupListRequest,
  HardwareInfo,
  GetGroupDetailRequest,
  GroupDeleteDeviceResponse,
  GroupAddDeviceRequest,
  NetworkData,
  GetStatisticDataResponse,
  GetPublicKeyRequest,
  GetFlowStatisticByGroupResponse,
  GetNetMonitorResponse,
  DeleteQosRequest,
  GetFlowStatisticByRegionRequest,
  GetFlowAlarmInfoRequest,
  GetVendorHardwareRequest,
  CreateEncryptedKeyRequest,
  DeleteDeviceRequest,
  DeleteGroupRequest,
  CreateEncryptedKeyResponse,
  UpdateL3SwitchResponse,
  GetL3ConnListResponse,
  CreateQosRequest,
  GroupInfo,
  ModifyPackageRenewFlagResponse,
  DeleteQosResponse,
  VendorHardware,
  GetDeviceRequest,
  ActivateHardwareResponse,
  GetFlowStatisticByGroupRequest,
  GetDevicesResponse,
  DescribeQosRequest,
  AddL3ConnResponse,
  GetDevicesRequest,
  SetNotifyUrlRequest,
  GetDevicePayModeRequest,
  Capacity,
  GetFlowStatisticRequest,
  SlotNetInfo,
  DeviceNetInfo,
  NetDetails,
  CreateQosResponse,
  ActivateHardware,
  DownloadActiveDeviceCountResponse,
  GetHardwareListRequest,
  FlowDetails,
  GroupDeleteDeviceRequest,
  DeviceDetails,
  GetFlowStatisticByRegionResponse,
  ActiveDeviceList,
  GetMultiFlowStatisticRequest,
  ExpectedThreshold,
  GetFlowAlarmInfoResponse,
  OrderFlowPackageRequest,
  GetGroupDetailResponse,
  UpdateGroupResponse,
  GetL3ConnListRequest,
  FlowPackageInfo,
  DownloadActiveDeviceCountRequest,
  GetHardwareListResponse,
  AddDeviceRequest,
  OrderPerLicenseRequest,
  UpdateGroupRequest,
  GetFlowStatisticResponse,
  UpdateHardwareRequest,
  GetNetMonitorRequest,
  SrcAddressInfo,
  GetGroupListResponse,
  OrderFlowPackageResponse,
  UpdateDeviceResponse,
  L3ConnInfo,
  ActivateHardwareRequest,
  GroupAddDeviceResponse,
  GetStatisticDataRequest,
  UpdateDeviceRequest,
  DeleteGroupResponse,
  GetPublicKeyResponse,
  AddHardwareResponse,
  Context,
  AddDeviceResponse,
  GetDevicePayModeResponse,
  GetActiveDeviceCountRequest,
  UpdateL3ConnRequest,
  DevicePayModeInfo,
  MonitorData,
  DeleteDeviceResponse,
  DeviceInfo,
  AddHardwareRequest,
  Hardware,
  UpdateL3CidrRequest,
  AddGroupResponse,
} from "./mna_models"

/**
 * mna client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("mna.tencentcloudapi.com", "2021-01-19", clientConfig)
  }

  /**
   * 设置用户流量告警信息接口，通过该接口设置流量包告警阈值以及告警时回调的url和key
   */
  async SetNotifyUrl(
    req: SetNotifyUrlRequest,
    cb?: (error: string, rep: SetNotifyUrlResponse) => void
  ): Promise<SetNotifyUrlResponse> {
    return this.request("SetNotifyUrl", req, cb)
  }

  /**
   * 更新硬件信息
   */
  async UpdateHardware(
    req: UpdateHardwareRequest,
    cb?: (error: string, rep: UpdateHardwareResponse) => void
  ): Promise<UpdateHardwareResponse> {
    return this.request("UpdateHardware", req, cb)
  }

  /**
   * 下载活跃设备数量统计
   */
  async DownloadActiveDeviceCount(
    req: DownloadActiveDeviceCountRequest,
    cb?: (error: string, rep: DownloadActiveDeviceCountResponse) => void
  ): Promise<DownloadActiveDeviceCountResponse> {
    return this.request("DownloadActiveDeviceCount", req, cb)
  }

  /**
   * 可开启/关闭流量包自动续费，不影响当前周期正在生效的流量包。
   */
  async ModifyPackageRenewFlag(
    req: ModifyPackageRenewFlagRequest,
    cb?: (error: string, rep: ModifyPackageRenewFlagResponse) => void
  ): Promise<ModifyPackageRenewFlagResponse> {
    return this.request("ModifyPackageRenewFlag", req, cb)
  }

  /**
   * 获取指定设备Id，指定时间点数据流量使用情况
   */
  async GetFlowStatistic(
    req: GetFlowStatisticRequest,
    cb?: (error: string, rep: GetFlowStatisticResponse) => void
  ): Promise<GetFlowStatisticResponse> {
    return this.request("GetFlowStatistic", req, cb)
  }

  /**
   * 获取指定分组，指定时间数据流量使用情况
   */
  async GetFlowStatisticByGroup(
    req: GetFlowStatisticByGroupRequest,
    cb?: (error: string, rep: GetFlowStatisticByGroupResponse) => void
  ): Promise<GetFlowStatisticByGroupResponse> {
    return this.request("GetFlowStatisticByGroup", req, cb)
  }

  /**
   * 批量获取设备流量统计曲线
   */
  async GetMultiFlowStatistic(
    req: GetMultiFlowStatisticRequest,
    cb?: (error: string, rep: GetMultiFlowStatisticResponse) => void
  ): Promise<GetMultiFlowStatisticResponse> {
    return this.request("GetMultiFlowStatistic", req, cb)
  }

  /**
   * 获取设备信息列表
   */
  async GetDevices(
    req: GetDevicesRequest,
    cb?: (error: string, rep: GetDevicesResponse) => void
  ): Promise<GetDevicesResponse> {
    return this.request("GetDevices", req, cb)
  }

  /**
   * 获取公钥用于验签
   */
  async GetPublicKey(
    req?: GetPublicKeyRequest,
    cb?: (error: string, rep: GetPublicKeyResponse) => void
  ): Promise<GetPublicKeyResponse> {
    return this.request("GetPublicKey", req, cb)
  }

  /**
   * 向已存在分组中添加设备
   */
  async GroupAddDevice(
    req: GroupAddDeviceRequest,
    cb?: (error: string, rep: GroupAddDeviceResponse) => void
  ): Promise<GroupAddDeviceResponse> {
    return this.request("GroupAddDevice", req, cb)
  }

  /**
   * 激活硬件设备
   */
  async ActivateHardware(
    req: ActivateHardwareRequest,
    cb?: (error: string, rep: ActivateHardwareResponse) => void
  ): Promise<ActivateHardwareResponse> {
    return this.request("ActivateHardware", req, cb)
  }

  /**
   * 获取流量包列表
   */
  async GetFlowPackages(
    req: GetFlowPackagesRequest,
    cb?: (error: string, rep: GetFlowPackagesResponse) => void
  ): Promise<GetFlowPackagesResponse> {
    return this.request("GetFlowPackages", req, cb)
  }

  /**
   * 添加硬件设备，生成未激活的硬件设备，可支持批量添加
   */
  async AddHardware(
    req: AddHardwareRequest,
    cb?: (error: string, rep: AddHardwareResponse) => void
  ): Promise<AddHardwareResponse> {
    return this.request("AddHardware", req, cb)
  }

  /**
   * 通过指定设备的ID查找设备详细信息
   */
  async GetDevice(
    req: GetDeviceRequest,
    cb?: (error: string, rep: GetDeviceResponse) => void
  ): Promise<GetDeviceResponse> {
    return this.request("GetDevice", req, cb)
  }

  /**
     * 产品下线

移动网络发起Qos加速过程
     */
  async CreateQos(
    req: CreateQosRequest,
    cb?: (error: string, rep: CreateQosResponse) => void
  ): Promise<CreateQosResponse> {
    return this.request("CreateQos", req, cb)
  }

  /**
   * 删除互通规则
   */
  async DeleteL3Conn(
    req: DeleteL3ConnRequest,
    cb?: (error: string, rep: DeleteL3ConnResponse) => void
  ): Promise<DeleteL3ConnResponse> {
    return this.request("DeleteL3Conn", req, cb)
  }

  /**
   * 删除分组
   */
  async DeleteGroup(
    req: DeleteGroupRequest,
    cb?: (error: string, rep: DeleteGroupResponse) => void
  ): Promise<DeleteGroupResponse> {
    return this.request("DeleteGroup", req, cb)
  }

  /**
     * 产品下线

获取Qos加速状态
     */
  async DescribeQos(
    req: DescribeQosRequest,
    cb?: (error: string, rep: DescribeQosResponse) => void
  ): Promise<DescribeQosResponse> {
    return this.request("DescribeQos", req, cb)
  }

  /**
   * 活跃设备数量统计
   */
  async GetActiveDeviceCount(
    req: GetActiveDeviceCountRequest,
    cb?: (error: string, rep: GetActiveDeviceCountResponse) => void
  ): Promise<GetActiveDeviceCountResponse> {
    return this.request("GetActiveDeviceCount", req, cb)
  }

  /**
   * 删除设备信息
   */
  async DeleteDevice(
    req: DeleteDeviceRequest,
    cb?: (error: string, rep: DeleteDeviceResponse) => void
  ): Promise<DeleteDeviceResponse> {
    return this.request("DeleteDevice", req, cb)
  }

  /**
   * 更新设备信息
   */
  async UpdateDevice(
    req: UpdateDeviceRequest,
    cb?: (error: string, rep: UpdateDeviceResponse) => void
  ): Promise<UpdateDeviceResponse> {
    return this.request("UpdateDevice", req, cb)
  }

  /**
   * 购买一次性授权License
   */
  async OrderPerLicense(
    req: OrderPerLicenseRequest,
    cb?: (error: string, rep: OrderPerLicenseResponse) => void
  ): Promise<OrderPerLicenseResponse> {
    return this.request("OrderPerLicense", req, cb)
  }

  /**
   * 获取单设备的实时流量统计指标
   */
  async GetNetMonitor(
    req: GetNetMonitorRequest,
    cb?: (error: string, rep: GetNetMonitorResponse) => void
  ): Promise<GetNetMonitorResponse> {
    return this.request("GetNetMonitor", req, cb)
  }

  /**
   * 获取设备付费模式
   */
  async GetDevicePayMode(
    req: GetDevicePayModeRequest,
    cb?: (error: string, rep: GetDevicePayModeResponse) => void
  ): Promise<GetDevicePayModeResponse> {
    return this.request("GetDevicePayMode", req, cb)
  }

  /**
   * 查看分组详细信息
   */
  async GetGroupDetail(
    req: GetGroupDetailRequest,
    cb?: (error: string, rep: GetGroupDetailResponse) => void
  ): Promise<GetGroupDetailResponse> {
    return this.request("GetGroupDetail", req, cb)
  }

  /**
   * 更新互通规则CIDR
   */
  async UpdateL3Cidr(
    req: UpdateL3CidrRequest,
    cb?: (error: string, rep: UpdateL3CidrResponse) => void
  ): Promise<UpdateL3CidrResponse> {
    return this.request("UpdateL3Cidr", req, cb)
  }

  /**
   * 获取厂商硬件设备列表
   */
  async GetVendorHardware(
    req: GetVendorHardwareRequest,
    cb?: (error: string, rep: GetVendorHardwareResponse) => void
  ): Promise<GetVendorHardwareResponse> {
    return this.request("GetVendorHardware", req, cb)
  }

  /**
   * 新建互通规则
   */
  async AddL3Conn(
    req: AddL3ConnRequest,
    cb?: (error: string, rep: AddL3ConnResponse) => void
  ): Promise<AddL3ConnResponse> {
    return this.request("AddL3Conn", req, cb)
  }

  /**
   * 通过此接口设置和更新预置密钥
   */
  async CreateEncryptedKey(
    req?: CreateEncryptedKeyRequest,
    cb?: (error: string, rep: CreateEncryptedKeyResponse) => void
  ): Promise<CreateEncryptedKeyResponse> {
    return this.request("CreateEncryptedKey", req, cb)
  }

  /**
     * 产品下线

移动网络停止Qos加速过程
     */
  async DeleteQos(
    req: DeleteQosRequest,
    cb?: (error: string, rep: DeleteQosResponse) => void
  ): Promise<DeleteQosResponse> {
    return this.request("DeleteQos", req, cb)
  }

  /**
   * 根据AppId查询用户设置的流量告警信息，包括阈值，回调url和key
   */
  async GetFlowAlarmInfo(
    req?: GetFlowAlarmInfoRequest,
    cb?: (error: string, rep: GetFlowAlarmInfoResponse) => void
  ): Promise<GetFlowAlarmInfoResponse> {
    return this.request("GetFlowAlarmInfo", req, cb)
  }

  /**
   * 删除分组中的设备
   */
  async GroupDeleteDevice(
    req: GroupDeleteDeviceRequest,
    cb?: (error: string, rep: GroupDeleteDeviceResponse) => void
  ): Promise<GroupDeleteDeviceResponse> {
    return this.request("GroupDeleteDevice", req, cb)
  }

  /**
   * 购买预付费流量包
   */
  async OrderFlowPackage(
    req: OrderFlowPackageRequest,
    cb?: (error: string, rep: OrderFlowPackageResponse) => void
  ): Promise<OrderFlowPackageResponse> {
    return this.request("OrderFlowPackage", req, cb)
  }

  /**
   * 在用量统计页面下载流量数据
   */
  async GetStatisticData(
    req: GetStatisticDataRequest,
    cb?: (error: string, rep: GetStatisticDataResponse) => void
  ): Promise<GetStatisticDataResponse> {
    return this.request("GetStatisticData", req, cb)
  }

  /**
   * 获取厂商硬件列表
   */
  async GetHardwareList(
    req: GetHardwareListRequest,
    cb?: (error: string, rep: GetHardwareListResponse) => void
  ): Promise<GetHardwareListResponse> {
    return this.request("GetHardwareList", req, cb)
  }

  /**
   * 更新互通规则开关
   */
  async UpdateL3Switch(
    req: UpdateL3SwitchRequest,
    cb?: (error: string, rep: UpdateL3SwitchResponse) => void
  ): Promise<UpdateL3SwitchResponse> {
    return this.request("UpdateL3Switch", req, cb)
  }

  /**
   * 新建设备记录
   */
  async AddDevice(
    req: AddDeviceRequest,
    cb?: (error: string, rep: AddDeviceResponse) => void
  ): Promise<AddDeviceResponse> {
    return this.request("AddDevice", req, cb)
  }

  /**
   * 获取指定区域，指定时间点数据流量使用情况
   */
  async GetFlowStatisticByRegion(
    req: GetFlowStatisticByRegionRequest,
    cb?: (error: string, rep: GetFlowStatisticByRegionResponse) => void
  ): Promise<GetFlowStatisticByRegionResponse> {
    return this.request("GetFlowStatisticByRegion", req, cb)
  }

  /**
   * 获取分组列表
   */
  async GetGroupList(
    req: GetGroupListRequest,
    cb?: (error: string, rep: GetGroupListResponse) => void
  ): Promise<GetGroupListResponse> {
    return this.request("GetGroupList", req, cb)
  }

  /**
   * 更新分组备注
   */
  async UpdateGroup(
    req: UpdateGroupRequest,
    cb?: (error: string, rep: UpdateGroupResponse) => void
  ): Promise<UpdateGroupResponse> {
    return this.request("UpdateGroup", req, cb)
  }

  /**
   * 新建分组
   */
  async AddGroup(
    req: AddGroupRequest,
    cb?: (error: string, rep: AddGroupResponse) => void
  ): Promise<AddGroupResponse> {
    return this.request("AddGroup", req, cb)
  }

  /**
   * 获取互通规则列表
   */
  async GetL3ConnList(
    req: GetL3ConnListRequest,
    cb?: (error: string, rep: GetL3ConnListResponse) => void
  ): Promise<GetL3ConnListResponse> {
    return this.request("GetL3ConnList", req, cb)
  }

  /**
   * 更新互通规则备注
   */
  async UpdateL3Conn(
    req: UpdateL3ConnRequest,
    cb?: (error: string, rep: UpdateL3ConnResponse) => void
  ): Promise<UpdateL3ConnResponse> {
    return this.request("UpdateL3Conn", req, cb)
  }
}
