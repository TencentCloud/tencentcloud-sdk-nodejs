/* eslint-disable @typescript-eslint/no-unused-vars */
/*
 * Copyright (c) 2018 Tencent. All Rights Reserved.
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
  OrderInfo,
  FlowDetails,
  UpdateApplicationKeyResponse,
  UpdateL3ConnResponse,
  UpdateHardwareResponse,
  UpdateNetInfo,
  UpdateL3SwitchRequest,
  AccessPointInfo,
  AddL3ConnRequest,
  OrderPerLicenseResponse,
  GroupDeleteDeviceRequest,
  GetFlowPackagesRequest,
  SetNotifyUrlResponse,
  GetCustomerGatewayClusterListResponse,
  UpdateL3CidrResponse,
  UpdateApplicationKeyRequest,
  AddApplicationRequest,
  L3ConnInfo,
  GetFlowPackagesResponse,
  ReportOrderRequest,
  DeleteL3ConnRequest,
  DelApplicationList,
  GetVendorHardwareResponse,
  GetApplicationResponse,
  GetActiveDeviceCountResponse,
  DestIpInfo,
  DeviceBaseInfo,
  ModifyPackageRenewFlagRequest,
  AddGroupRequest,
  ModifyDeviceAccessScopeRequest,
  GetGroupListRequest,
  HardwareInfo,
  DeleteApplicationResponse,
  GetGroupDetailRequest,
  GroupDeleteDeviceResponse,
  GroupAddDeviceRequest,
  GetStatisticDataResponse,
  UpdateApplicationInfoRequest,
  DescribeAccessPointListRequest,
  UpdateCustomerGatewayClusterResponse,
  AddL3ConnResponse,
  GetHardwareInfoRequest,
  GatewayInfo,
  GetFlowStatisticByGroupResponse,
  AddGatewayRequest,
  GetNetMonitorResponse,
  GetNetMonitorRequest,
  ModifyDeviceAccessScopeResponse,
  GetFlowStatisticByNameResponse,
  ReportOrderResponse,
  GetFlowAlarmInfoRequest,
  GetVendorHardwareRequest,
  CreateEncryptedKeyRequest,
  AddCustomerGatewayClusterRequest,
  DeleteDeviceRequest,
  GetGatewayListRequest,
  DeleteGroupRequest,
  CreateEncryptedKeyResponse,
  UpdateL3SwitchResponse,
  DescribeAccessRegionsResponse,
  UpdateCustomerGatewayClusterRequest,
  GetL3ConnListResponse,
  DeleteCustomerGatewayClusterRequest,
  GroupInfo,
  AddApplicationResponse,
  ModifyPackageRenewFlagResponse,
  ModifyDeviceAccessRegionsResponse,
  GetDestIPByNameResponse,
  DescribeAccessRegionsRequest,
  DeleteGatewayRequest,
  GetDeviceRequest,
  ActivateHardwareResponse,
  GatewayClusterInfo,
  GetFlowStatisticByGroupRequest,
  GetDevicesResponse,
  GetPublicKeyRequest,
  GetDestIPByNameRequest,
  GetDevicesRequest,
  GetStatisticDataByNameRequest,
  SetNotifyUrlRequest,
  GetDevicePayModeRequest,
  DeleteApplicationRequest,
  ModifyDeviceAccessRegionsRequest,
  SlotNetInfo,
  VendorHardware,
  DeviceNetInfo,
  NetDetails,
  ActivateHardware,
  DownloadActiveDeviceCountResponse,
  GetHardwareListRequest,
  GetFlowStatisticByNameRequest,
  DescribeAccessPointListResponse,
  AddCustomerGatewayClusterResponse,
  DeviceDetails,
  GetHardwareInfoResponse,
  GetFlowStatisticByRegionResponse,
  ActivateHardwareRequest,
  GetMultiFlowStatisticRequest,
  GetFlowAlarmInfoResponse,
  GetFlowStatisticByRegionRequest,
  OrderFlowPackageRequest,
  GetGroupDetailResponse,
  UpdateGroupResponse,
  GetL3ConnListRequest,
  FlowPackageInfo,
  DownloadActiveDeviceCountRequest,
  GetHardwareListResponse,
  AddDeviceRequest,
  GetNetMonitorByNameResponse,
  OrderPerLicenseRequest,
  UpdateGroupRequest,
  GetFlowStatisticResponse,
  UpdateHardwareRequest,
  ActiveDeviceList,
  GetNetMonitorByNameRequest,
  GetGroupListResponse,
  GetGatewayListResponse,
  UpdateApplicationInfoResponse,
  OrderFlowPackageResponse,
  UpdateDeviceResponse,
  RegionInfo,
  GetCustomerGatewayClusterListRequest,
  DeleteCustomerGatewayClusterResponse,
  GetMonitorDataByNameResponse,
  GroupAddDeviceResponse,
  DeleteGatewayResponse,
  GetStatisticDataRequest,
  GetApplicationRequest,
  UpdateDeviceRequest,
  DeleteGroupResponse,
  GetPublicKeyResponse,
  GetStatisticDataByNameResponse,
  AddHardwareResponse,
  GetFlowStatisticRequest,
  AddDeviceResponse,
  GetDevicePayModeResponse,
  GetActiveDeviceCountRequest,
  GetMonitorDataByNameRequest,
  UpdateL3ConnRequest,
  DevicePayModeInfo,
  MonitorData,
  DeleteDeviceResponse,
  AddGatewayResponse,
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
   * 更新互通规则CIDR
   */
  async UpdateL3Cidr(
    req: UpdateL3CidrRequest,
    cb?: (error: string, rep: UpdateL3CidrResponse) => void
  ): Promise<UpdateL3CidrResponse> {
    return this.request("UpdateL3Cidr", req, cb)
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
   * 支持网关列表查询。包含网关名称、创建时间和网关状态（正常/异常）。支持基于网关名称的查询。默认按照创建时间倒序排列。
   */
  async GetGatewayList(
    req: GetGatewayListRequest,
    cb?: (error: string, rep: GetGatewayListResponse) => void
  ): Promise<GetGatewayListResponse> {
    return this.request("GetGatewayList", req, cb)
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
   * 应用查询
   */
  async GetApplication(
    req: GetApplicationRequest,
    cb?: (error: string, rep: GetApplicationResponse) => void
  ): Promise<GetApplicationResponse> {
    return this.request("GetApplication", req, cb)
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
   * 更新应用信息
   */
  async UpdateApplicationInfo(
    req: UpdateApplicationInfoRequest,
    cb?: (error: string, rep: UpdateApplicationInfoResponse) => void
  ): Promise<UpdateApplicationInfoResponse> {
    return this.request("UpdateApplicationInfo", req, cb)
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
   * 删除应用
   */
  async DeleteApplication(
    req: DeleteApplicationRequest,
    cb?: (error: string, rep: DeleteApplicationResponse) => void
  ): Promise<DeleteApplicationResponse> {
    return this.request("DeleteApplication", req, cb)
  }

  /**
   * 修改设备接入地域。
   */
  async ModifyDeviceAccessRegions(
    req: ModifyDeviceAccessRegionsRequest,
    cb?: (error: string, rep: ModifyDeviceAccessRegionsResponse) => void
  ): Promise<ModifyDeviceAccessRegionsResponse> {
    return this.request("ModifyDeviceAccessRegions", req, cb)
  }

  /**
   * 修改设备接入网关类型。
   */
  async ModifyDeviceAccessScope(
    req: ModifyDeviceAccessScopeRequest,
    cb?: (error: string, rep: ModifyDeviceAccessScopeResponse) => void
  ): Promise<ModifyDeviceAccessScopeResponse> {
    return this.request("ModifyDeviceAccessScope", req, cb)
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
   * 统计单个设备访问目标IP地址信息
   */
  async GetDestIPByName(
    req: GetDestIPByNameRequest,
    cb?: (error: string, rep: GetDestIPByNameResponse) => void
  ): Promise<GetDestIPByNameResponse> {
    return this.request("GetDestIPByName", req, cb)
  }

  /**
   * 查询可接入地域列表。
   */
  async DescribeAccessRegions(
    req?: DescribeAccessRegionsRequest,
    cb?: (error: string, rep: DescribeAccessRegionsResponse) => void
  ): Promise<DescribeAccessRegionsResponse> {
    return this.request("DescribeAccessRegions", req, cb)
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
   * 新建应用
   */
  async AddApplication(
    req: AddApplicationRequest,
    cb?: (error: string, rep: AddApplicationResponse) => void
  ): Promise<AddApplicationResponse> {
    return this.request("AddApplication", req, cb)
  }

  /**
   * 用户上报自定义的订单信息，多网聚合加速（腾讯云聚通）服务将相关信息进行保存
   */
  async ReportOrder(
    req: ReportOrderRequest,
    cb?: (error: string, rep: ReportOrderResponse) => void
  ): Promise<ReportOrderResponse> {
    return this.request("ReportOrder", req, cb)
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
   * 更新应用密钥
   */
  async UpdateApplicationKey(
    req: UpdateApplicationKeyRequest,
    cb?: (error: string, rep: UpdateApplicationKeyResponse) => void
  ): Promise<UpdateApplicationKeyResponse> {
    return this.request("UpdateApplicationKey", req, cb)
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
   * 获取指定设备Id，指定时间点数据流量使用情况
   */
  async GetFlowStatisticByName(
    req: GetFlowStatisticByNameRequest,
    cb?: (error: string, rep: GetFlowStatisticByNameResponse) => void
  ): Promise<GetFlowStatisticByNameResponse> {
    return this.request("GetFlowStatisticByName", req, cb)
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
   * 获取互通规则列表
   */
  async GetL3ConnList(
    req: GetL3ConnListRequest,
    cb?: (error: string, rep: GetL3ConnListResponse) => void
  ): Promise<GetL3ConnListResponse> {
    return this.request("GetL3ConnList", req, cb)
  }

  /**
     * 更新客户自有网关集群配置。

目前仅支持修改集群的公网访问 IP。
     */
  async UpdateCustomerGatewayCluster(
    req: UpdateCustomerGatewayClusterRequest,
    cb?: (error: string, rep: UpdateCustomerGatewayClusterResponse) => void
  ): Promise<UpdateCustomerGatewayClusterResponse> {
    return this.request("UpdateCustomerGatewayCluster", req, cb)
  }

  /**
   * 此接口用来查询接入点列表。
   */
  async DescribeAccessPointList(
    req: DescribeAccessPointListRequest,
    cb?: (error: string, rep: DescribeAccessPointListResponse) => void
  ): Promise<DescribeAccessPointListResponse> {
    return this.request("DescribeAccessPointList", req, cb)
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
   * 获取单设备的实时流量统计指标
   */
  async GetNetMonitorByName(
    req: GetNetMonitorByNameRequest,
    cb?: (error: string, rep: GetNetMonitorByNameResponse) => void
  ): Promise<GetNetMonitorByNameResponse> {
    return this.request("GetNetMonitorByName", req, cb)
  }

  /**
     * 删除客户自有网关集群。

删除指定的客户自有网关集群，操作不可逆。调用接口后，若通过 GetCustomerGatewayClusterList 接口查询不到对应集群，则表示删除成功。
     */
  async DeleteCustomerGatewayCluster(
    req: DeleteCustomerGatewayClusterRequest,
    cb?: (error: string, rep: DeleteCustomerGatewayClusterResponse) => void
  ): Promise<DeleteCustomerGatewayClusterResponse> {
    return this.request("DeleteCustomerGatewayCluster", req, cb)
  }

  /**
   * 在用量统计页面下载流量数据
   */
  async GetStatisticDataByName(
    req: GetStatisticDataByNameRequest,
    cb?: (error: string, rep: GetStatisticDataByNameResponse) => void
  ): Promise<GetStatisticDataByNameResponse> {
    return this.request("GetStatisticDataByName", req, cb)
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
     * 向指定的客户自有网关集群注册一个网关实例。

注册成功后返回网关实例 ID、鉴权 Token 及 Agent 相关地址信息，用于后续网关 Agent 上报。
     */
  async AddGateway(
    req: AddGatewayRequest,
    cb?: (error: string, rep: AddGatewayResponse) => void
  ): Promise<AddGatewayResponse> {
    return this.request("AddGateway", req, cb)
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
   * 获取单个设备所有监控指标的下载文件链接
   */
  async GetMonitorDataByName(
    req: GetMonitorDataByNameRequest,
    cb?: (error: string, rep: GetMonitorDataByNameResponse) => void
  ): Promise<GetMonitorDataByNameResponse> {
    return this.request("GetMonitorDataByName", req, cb)
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
   * 新建互通规则
   */
  async AddL3Conn(
    req: AddL3ConnRequest,
    cb?: (error: string, rep: AddL3ConnResponse) => void
  ): Promise<AddL3ConnResponse> {
    return this.request("AddL3Conn", req, cb)
  }

  /**
     * 查询客户自有网关集群列表。

支持按集群名称关键字过滤，使用 Offset/Limit 分页返回集群及其下网关实例信息。
     */
  async GetCustomerGatewayClusterList(
    req: GetCustomerGatewayClusterListRequest,
    cb?: (error: string, rep: GetCustomerGatewayClusterListResponse) => void
  ): Promise<GetCustomerGatewayClusterListResponse> {
    return this.request("GetCustomerGatewayClusterList", req, cb)
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
   * 下载活跃设备数量统计
   */
  async DownloadActiveDeviceCount(
    req: DownloadActiveDeviceCountRequest,
    cb?: (error: string, rep: DownloadActiveDeviceCountResponse) => void
  ): Promise<DownloadActiveDeviceCountResponse> {
    return this.request("DownloadActiveDeviceCount", req, cb)
  }

  /**
   * 获取硬件设备信息
   */
  async GetHardwareInfo(
    req: GetHardwareInfoRequest,
    cb?: (error: string, rep: GetHardwareInfoResponse) => void
  ): Promise<GetHardwareInfoResponse> {
    return this.request("GetHardwareInfo", req, cb)
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
     * 从指定集群下删除一个客户自有网关实例。

删除后，通过 GetCustomerGatewayClusterList 查询不到对应实例，则表示删除成功。
     */
  async DeleteGateway(
    req: DeleteGatewayRequest,
    cb?: (error: string, rep: DeleteGatewayResponse) => void
  ): Promise<DeleteGatewayResponse> {
    return this.request("DeleteGateway", req, cb)
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
     * 创建客户自有网关集群。

用于承载客户侧的自有网关实例，创建成功后返回集群 ID。
     */
  async AddCustomerGatewayCluster(
    req: AddCustomerGatewayClusterRequest,
    cb?: (error: string, rep: AddCustomerGatewayClusterResponse) => void
  ): Promise<AddCustomerGatewayClusterResponse> {
    return this.request("AddCustomerGatewayCluster", req, cb)
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
