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
  UpdateDevicesEnableStateResponse,
  DeleteProjectRequest,
  DevicesItem,
  DeleteFenceBindRequest,
  DescribeModelDefinitionResponse,
  UnbindDevicesRequest,
  DeleteDevicesResponse,
  ModifyStudioProductResponse,
  GetGatewaySubDeviceListResponse,
  DeleteStudioProductResponse,
  BindDevicesRequest,
  DescribeGatewaySubProductsResponse,
  GetDeviceListResponse,
  TopicRulePayload,
  DeleteLoRaFrequencyResponse,
  DescribeTopicPolicyRequest,
  BindProductInfo,
  ModifyPositionFenceRequest,
  PositionFenceItem,
  DeleteTopicRuleResponse,
  PositionItem,
  ModifyModelDefinitionRequest,
  CreateStudioProductResponse,
  CallDeviceActionSyncRequest,
  ProductDevicesPositionItem,
  DescribeDevicePositionListRequest,
  GetDeviceLocationHistoryResponse,
  UpdateFirmwareResponse,
  ModifyPositionFenceResponse,
  ModifyStudioProductRequest,
  ModifyPositionSpaceResponse,
  CreateStudioProductRequest,
  ProductModelDefinition,
  ModifyFenceBindResponse,
  CreateBatchProductionRequest,
  DeletePositionFenceResponse,
  FenceAlarmPoint,
  UploadFirmwareRequest,
  ListEventHistoryRequest,
  SearchTopicRuleRequest,
  DescribeDeviceDataRequest,
  FenceBindProductItem,
  PublishRRPCMessageRequest,
  DevicePositionItem,
  ListTopicPolicyResponse,
  SearchPositionSpaceResponse,
  DescribePositionFenceListResponse,
  GenSingleDeviceSignatureOfPublicResponse,
  DescribeDevicePositionListResponse,
  GetProjectListResponse,
  CreateProjectRequest,
  DescribeProjectResponse,
  UnbindProductsRequest,
  SearchStudioProductResponse,
  DeviceData,
  GetTopicRuleListRequest,
  FenceBindDeviceItem,
  DeviceDataHistoryItem,
  GetFamilyDeviceUserListResponse,
  BindDeviceInfo,
  ProjectEntryEx,
  DescribeBatchProductionResponse,
  ListTopicPolicyRequest,
  DescribeLoRaFrequencyRequest,
  DeleteDeviceRequest,
  DeleteLoRaFrequencyRequest,
  ControlDeviceDataRequest,
  ListFirmwaresResponse,
  ReleaseStudioProductResponse,
  DescribeSpaceFenceEventListResponse,
  PositionFenceInfo,
  DeleteLoRaGatewayRequest,
  UnbindProductsResponse,
  DescribeTopicPolicyResponse,
  SearchPositionSpaceRequest,
  LoRaFrequencyEntry,
  ModifyTopicPolicyResponse,
  GetPositionSpaceListRequest,
  SearchTopicRuleResponse,
  DescribeFenceEventListResponse,
  UpdateDevicesEnableStateRequest,
  DescribeTopicRuleRequest,
  GetDeviceLocationHistoryRequest,
  CallDeviceActionSyncResponse,
  CreateLoRaGatewayRequest,
  ReleaseStudioProductRequest,
  CreateProjectResponse,
  DescribeDeviceDataHistoryResponse,
  DeleteProjectResponse,
  CreateTopicPolicyResponse,
  CreateDeviceResponse,
  CreateDeviceRequest,
  DeletePositionSpaceRequest,
  GetStudioProductListRequest,
  DescribeFirmwareTaskResponse,
  FirmwareInfo,
  DisableTopicRuleResponse,
  TopicRuleInfo,
  GetCOSURLRequest,
  DescribeStudioProductResponse,
  CreateFenceBindRequest,
  DescribeDeviceResponse,
  PublishBroadcastMessageRequest,
  ListFirmwaresRequest,
  GetStudioProductListResponse,
  PublishMessageRequest,
  FamilySubDevice,
  ModifyTopicRuleRequest,
  GetDeviceListRequest,
  ModifySpacePropertyRequest,
  GetPositionSpaceListResponse,
  GetCOSURLResponse,
  ModifyFenceBindRequest,
  GetTopicRuleListResponse,
  DescribeFenceEventListRequest,
  ModifyPositionSpaceRequest,
  GetLoRaGatewayListResponse,
  ProjectEntry,
  ModifyLoRaGatewayResponse,
  EventHistoryItem,
  DirectBindDeviceInFamilyResponse,
  TopicRule,
  CallDeviceActionAsyncRequest,
  CallDeviceActionAsyncResponse,
  DeleteFenceBindResponse,
  DeleteTopicPolicyRequest,
  CreateFenceBindResponse,
  DescribeTopicRuleResponse,
  CreatePositionFenceResponse,
  PublishBroadcastMessageResponse,
  DescribeFenceBindListRequest,
  DescribeBindedProductsResponse,
  DeviceSignatureInfo,
  PositionSpaceInfo,
  LoRaGatewayLocation,
  DescribeDeviceRequest,
  DescribePositionFenceListRequest,
  ModifyTopicRuleResponse,
  DescribeBatchProductionRequest,
  CreateTopicPolicyRequest,
  DirectBindDeviceInFamilyRequest,
  TopicItem,
  GetFamilyDeviceUserListRequest,
  DescribeBindedProductsRequest,
  DescribeLoRaFrequencyResponse,
  ProductEntry,
  DescribeGatewaySubDeviceListResponse,
  DescribeSpaceFenceEventListRequest,
  GetLoRaGatewayListRequest,
  FenceEventItem,
  DescribeProjectRequest,
  UnbindDevicesResponse,
  ModifyLoRaFrequencyRequest,
  UploadFirmwareResponse,
  ModifyTopicPolicyRequest,
  DeleteTopicRuleRequest,
  CreateLoRaGatewayResponse,
  DeleteTopicPolicyResponse,
  DeleteLoRaGatewayResponse,
  CreateLoRaFrequencyRequest,
  LoRaGatewayItem,
  DescribeDeviceBindGatewayResponse,
  DescribeGatewaySubDeviceListRequest,
  ControlDeviceDataResponse,
  DescribeDeviceDataHistoryRequest,
  UpdateFirmwareRequest,
  DescribeStudioProductRequest,
  CreatePositionSpaceResponse,
  CreateBatchProductionResponse,
  ModifyModelDefinitionResponse,
  DeletePositionFenceRequest,
  GetProjectListRequest,
  DeletePositionSpaceResponse,
  DescribeDeviceBindGatewayRequest,
  CreateLoRaFrequencyResponse,
  EnableTopicRuleResponse,
  GetGatewaySubDeviceListRequest,
  SearchStudioProductRequest,
  GenSingleDeviceSignatureOfPublicRequest,
  DeleteDevicesRequest,
  AppDeviceInfo,
  BindProductsResponse,
  ModifyProjectResponse,
  BatchProductionInfo,
  DescribeGatewayBindDevicesRequest,
  DescribeGatewaySubProductsRequest,
  DeleteStudioProductRequest,
  BindProductsRequest,
  ModifyProjectRequest,
  ModifySpacePropertyResponse,
  PublishMessageResponse,
  BindDevicesResponse,
  DescribeFenceBindListResponse,
  SearchKeyword,
  CreatePositionFenceRequest,
  DescribeModelDefinitionRequest,
  EnableTopicRuleRequest,
  DisableTopicRuleRequest,
  CreateTopicRuleResponse,
  DescribeDeviceDataResponse,
  CreateTopicRuleRequest,
  PublishRRPCMessageResponse,
  DeviceUser,
  GetBatchProductionsListRequest,
  DeleteDeviceResponse,
  DeviceInfo,
  ModifyLoRaFrequencyResponse,
  ModifyLoRaGatewayRequest,
  ListEventHistoryResponse,
  GetBatchProductionsListResponse,
  DescribeGatewayBindDevicesResponse,
  DescribeFirmwareTaskRequest,
  CreatePositionSpaceRequest,
} from "./iotexplorer_models"

/**
 * iotexplorer client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("iotexplorer.tencentcloudapi.com", "2019-04-23", clientConfig)
  }

  /**
   * 本接口（GetCOSURL）用于获取固件存储在COS的URL
   */
  async GetCOSURL(
    req: GetCOSURLRequest,
    cb?: (error: string, rep: GetCOSURLResponse) => void
  ): Promise<GetCOSURLResponse> {
    return this.request("GetCOSURL", req, cb)
  }

  /**
   * 提供修改产品的名称和描述等信息的能力，对于已发布产品不允许进行修改。
   */
  async ModifyStudioProduct(
    req: ModifyStudioProductRequest,
    cb?: (error: string, rep: ModifyStudioProductResponse) => void
  ): Promise<ModifyStudioProductResponse> {
    return this.request("ModifyStudioProduct", req, cb)
  }

  /**
   * 列出量产数据列表信息。
   */
  async GetBatchProductionsList(
    req: GetBatchProductionsListRequest,
    cb?: (error: string, rep: GetBatchProductionsListResponse) => void
  ): Promise<GetBatchProductionsListResponse> {
    return this.request("GetBatchProductionsList", req, cb)
  }

  /**
   * 本接口（DescribeTopicPolicy）用于查看Topic详细信息
   */
  async DescribeTopicPolicy(
    req: DescribeTopicPolicyRequest,
    cb?: (error: string, rep: DescribeTopicPolicyResponse) => void
  ): Promise<DescribeTopicPolicyResponse> {
    return this.request("DescribeTopicPolicy", req, cb)
  }

  /**
   * 提供查询用户所创建的项目列表查询功能。
   */
  async GetProjectList(
    req: GetProjectListRequest,
    cb?: (error: string, rep: GetProjectListResponse) => void
  ): Promise<GetProjectListResponse> {
    return this.request("GetProjectList", req, cb)
  }

  /**
   * 为用户提供同步调用设备行为的能力。
   */
  async CallDeviceActionSync(
    req: CallDeviceActionSyncRequest,
    cb?: (error: string, rep: CallDeviceActionSyncResponse) => void
  ): Promise<CallDeviceActionSyncResponse> {
    return this.request("CallDeviceActionSync", req, cb)
  }

  /**
   * 直接绑定设备和家庭
   */
  async DirectBindDeviceInFamily(
    req: DirectBindDeviceInFamilyRequest,
    cb?: (error: string, rep: DirectBindDeviceInFamilyResponse) => void
  ): Promise<DirectBindDeviceInFamilyResponse> {
    return this.request("DirectBindDeviceInFamily", req, cb)
  }

  /**
   * 查询设备绑定的网关设备
   */
  async DescribeDeviceBindGateway(
    req: DescribeDeviceBindGatewayRequest,
    cb?: (error: string, rep: DescribeDeviceBindGatewayResponse) => void
  ): Promise<DescribeDeviceBindGatewayResponse> {
    return this.request("DescribeDeviceBindGateway", req, cb)
  }

  /**
   * 获取设备历史位置
   */
  async GetDeviceLocationHistory(
    req: GetDeviceLocationHistoryRequest,
    cb?: (error: string, rep: GetDeviceLocationHistoryResponse) => void
  ): Promise<GetDeviceLocationHistoryResponse> {
    return this.request("GetDeviceLocationHistory", req, cb)
  }

  /**
   * 本接口（PublishMessage）用于使用自定义透传协议进行设备远控
   */
  async PublishMessage(
    req: PublishMessageRequest,
    cb?: (error: string, rep: PublishMessageResponse) => void
  ): Promise<PublishMessageResponse> {
    return this.request("PublishMessage", req, cb)
  }

  /**
   * 提供查看产品详细信息的能力，包括产品的ID、数据协议、认证类型等重要参数
   */
  async DescribeStudioProduct(
    req: DescribeStudioProductRequest,
    cb?: (error: string, rep: DescribeStudioProductResponse) => void
  ): Promise<DescribeStudioProductResponse> {
    return this.request("DescribeStudioProduct", req, cb)
  }

  /**
   * 获取 LoRa 网关列表接口
   */
  async GetLoRaGatewayList(
    req: GetLoRaGatewayListRequest,
    cb?: (error: string, rep: GetLoRaGatewayListResponse) => void
  ): Promise<GetLoRaGatewayListResponse> {
    return this.request("GetLoRaGatewayList", req, cb)
  }

  /**
   * 产品开发完成并测试通过后，通过发布产品将产品设置为发布状态
   */
  async ReleaseStudioProduct(
    req: ReleaseStudioProductRequest,
    cb?: (error: string, rep: ReleaseStudioProductResponse) => void
  ): Promise<ReleaseStudioProductResponse> {
    return this.request("ReleaseStudioProduct", req, cb)
  }

  /**
   * 更新围栏绑定信息
   */
  async ModifyFenceBind(
    req: ModifyFenceBindRequest,
    cb?: (error: string, rep: ModifyFenceBindResponse) => void
  ): Promise<ModifyFenceBindResponse> {
    return this.request("ModifyFenceBind", req, cb)
  }

  /**
   * 删除位置空间
   */
  async DeletePositionSpace(
    req: DeletePositionSpaceRequest,
    cb?: (error: string, rep: DeletePositionSpaceResponse) => void
  ): Promise<DeletePositionSpaceResponse> {
    return this.request("DeletePositionSpace", req, cb)
  }

  /**
   * 获取网关产品已经绑定的子产品
   */
  async DescribeBindedProducts(
    req: DescribeBindedProductsRequest,
    cb?: (error: string, rep: DescribeBindedProductsResponse) => void
  ): Promise<DescribeBindedProductsResponse> {
    return this.request("DescribeBindedProducts", req, cb)
  }

  /**
   * 修改 LoRa 网关信息
   */
  async ModifyLoRaGateway(
    req: ModifyLoRaGatewayRequest,
    cb?: (error: string, rep: ModifyLoRaGatewayResponse) => void
  ): Promise<ModifyLoRaGatewayResponse> {
    return this.request("ModifyLoRaGateway", req, cb)
  }

  /**
   * 用于查看某个设备的详细信息
   */
  async DescribeDevice(
    req: DescribeDeviceRequest,
    cb?: (error: string, rep: DescribeDeviceResponse) => void
  ): Promise<DescribeDeviceResponse> {
    return this.request("DescribeDevice", req, cb)
  }

  /**
   * 获取围栏告警事件列表
   */
  async DescribeFenceEventList(
    req: DescribeFenceEventListRequest,
    cb?: (error: string, rep: DescribeFenceEventListResponse) => void
  ): Promise<DescribeFenceEventListResponse> {
    return this.request("DescribeFenceEventList", req, cb)
  }

  /**
   * 删除规则
   */
  async DeleteTopicRule(
    req: DeleteTopicRuleRequest,
    cb?: (error: string, rep: DeleteTopicRuleResponse) => void
  ): Promise<DeleteTopicRuleResponse> {
    return this.request("DeleteTopicRule", req, cb)
  }

  /**
   * 下发RRPC消息
   */
  async PublishRRPCMessage(
    req: PublishRRPCMessageRequest,
    cb?: (error: string, rep: PublishRRPCMessageResponse) => void
  ): Promise<PublishRRPCMessageResponse> {
    return this.request("PublishRRPCMessage", req, cb)
  }

  /**
   * 搜索位置空间
   */
  async SearchPositionSpace(
    req: SearchPositionSpaceRequest,
    cb?: (error: string, rep: SearchPositionSpaceResponse) => void
  ): Promise<SearchPositionSpaceResponse> {
    return this.request("SearchPositionSpace", req, cb)
  }

  /**
   * 删除  LoRa 网关的接口
   */
  async DeleteLoRaGateway(
    req: DeleteLoRaGatewayRequest,
    cb?: (error: string, rep: DeleteLoRaGatewayResponse) => void
  ): Promise<DeleteLoRaGatewayResponse> {
    return this.request("DeleteLoRaGateway", req, cb)
  }

  /**
   * 为用户提供新建产品的能力，用于管理用户的设备
   */
  async CreateStudioProduct(
    req: CreateStudioProductRequest,
    cb?: (error: string, rep: CreateStudioProductResponse) => void
  ): Promise<CreateStudioProductResponse> {
    return this.request("CreateStudioProduct", req, cb)
  }

  /**
   * 启用规则
   */
  async EnableTopicRule(
    req: EnableTopicRuleRequest,
    cb?: (error: string, rep: EnableTopicRuleResponse) => void
  ): Promise<EnableTopicRuleResponse> {
    return this.request("EnableTopicRule", req, cb)
  }

  /**
   * 查询绑定到家庭的网关设备的子设备列表
   */
  async DescribeGatewaySubDeviceList(
    req: DescribeGatewaySubDeviceListRequest,
    cb?: (error: string, rep: DescribeGatewaySubDeviceListResponse) => void
  ): Promise<DescribeGatewaySubDeviceListResponse> {
    return this.request("DescribeGatewaySubDeviceList", req, cb)
  }

  /**
   * 提供根据产品名称查找产品的能力
   */
  async SearchStudioProduct(
    req: SearchStudioProductRequest,
    cb?: (error: string, rep: SearchStudioProductResponse) => void
  ): Promise<SearchStudioProductResponse> {
    return this.request("SearchStudioProduct", req, cb)
  }

  /**
   * 修改规则
   */
  async ModifyTopicRule(
    req: ModifyTopicRuleRequest,
    cb?: (error: string, rep: ModifyTopicRuleResponse) => void
  ): Promise<ModifyTopicRuleResponse> {
    return this.request("ModifyTopicRule", req, cb)
  }

  /**
   * 本接口（ListFirmwares）用于获取固件列表
   */
  async ListFirmwares(
    req: ListFirmwaresRequest,
    cb?: (error: string, rep: ListFirmwaresResponse) => void
  ): Promise<ListFirmwaresResponse> {
    return this.request("ListFirmwares", req, cb)
  }

  /**
   * 创建设备
   */
  async CreateDevice(
    req: CreateDeviceRequest,
    cb?: (error: string, rep: CreateDeviceResponse) => void
  ): Promise<CreateDeviceResponse> {
    return this.request("CreateDevice", req, cb)
  }

  /**
   * 删除围栏绑定信息
   */
  async DeleteFenceBind(
    req: DeleteFenceBindRequest,
    cb?: (error: string, rep: DeleteFenceBindResponse) => void
  ): Promise<DeleteFenceBindResponse> {
    return this.request("DeleteFenceBind", req, cb)
  }

  /**
   * 根据设备产品ID、设备名称，设置控制设备的属性数据。
   */
  async ControlDeviceData(
    req: ControlDeviceDataRequest,
    cb?: (error: string, rep: ControlDeviceDataResponse) => void
  ): Promise<ControlDeviceDataResponse> {
    return this.request("ControlDeviceData", req, cb)
  }

  /**
   * 查询固件升级任务列表
   */
  async DescribeFirmwareTask(
    req: DescribeFirmwareTaskRequest,
    cb?: (error: string, rep: DescribeFirmwareTaskResponse) => void
  ): Promise<DescribeFirmwareTaskResponse> {
    return this.request("DescribeFirmwareTask", req, cb)
  }

  /**
   * 获取位置空间列表
   */
  async GetPositionSpaceList(
    req: GetPositionSpaceListRequest,
    cb?: (error: string, rep: GetPositionSpaceListResponse) => void
  ): Promise<GetPositionSpaceListResponse> {
    return this.request("GetPositionSpaceList", req, cb)
  }

  /**
   * 提供查询LoRa自定义频点详情的能力
   */
  async DescribeLoRaFrequency(
    req: DescribeLoRaFrequencyRequest,
    cb?: (error: string, rep: DescribeLoRaFrequencyResponse) => void
  ): Promise<DescribeLoRaFrequencyResponse> {
    return this.request("DescribeLoRaFrequency", req, cb)
  }

  /**
   * 本接口（UpdateTopicPolicy）用于更新Topic信息
   */
  async ModifyTopicPolicy(
    req: ModifyTopicPolicyRequest,
    cb?: (error: string, rep: ModifyTopicPolicyResponse) => void
  ): Promise<ModifyTopicPolicyResponse> {
    return this.request("ModifyTopicPolicy", req, cb)
  }

  /**
   * 获取规则列表
   */
  async GetTopicRuleList(
    req: GetTopicRuleListRequest,
    cb?: (error: string, rep: GetTopicRuleListResponse) => void
  ): Promise<GetTopicRuleListResponse> {
    return this.request("GetTopicRuleList", req, cb)
  }

  /**
   * 为用户提供新建项目的能力，用于集中管理产品和应用。
   */
  async CreateProject(
    req: CreateProjectRequest,
    cb?: (error: string, rep: CreateProjectResponse) => void
  ): Promise<CreateProjectResponse> {
    return this.request("CreateProject", req, cb)
  }

  /**
   * 提供给用户异步调用设备行为的能力
   */
  async CallDeviceActionAsync(
    req: CallDeviceActionAsyncRequest,
    cb?: (error: string, rep: CallDeviceActionAsyncResponse) => void
  ): Promise<CallDeviceActionAsyncResponse> {
    return this.request("CallDeviceActionAsync", req, cb)
  }

  /**
   * 提供删除某个项目的能力
   */
  async DeleteProject(
    req: DeleteProjectRequest,
    cb?: (error: string, rep: DeleteProjectResponse) => void
  ): Promise<DeleteProjectResponse> {
    return this.request("DeleteProject", req, cb)
  }

  /**
   * 获取规则信息
   */
  async DescribeTopicRule(
    req: DescribeTopicRuleRequest,
    cb?: (error: string, rep: DescribeTopicRuleResponse) => void
  ): Promise<DescribeTopicRuleResponse> {
    return this.request("DescribeTopicRule", req, cb)
  }

  /**
   * 发布广播消息
   */
  async PublishBroadcastMessage(
    req: PublishBroadcastMessageRequest,
    cb?: (error: string, rep: PublishBroadcastMessageResponse) => void
  ): Promise<PublishBroadcastMessageResponse> {
    return this.request("PublishBroadcastMessage", req, cb)
  }

  /**
   * 批量解绑子产品
   */
  async UnbindProducts(
    req: UnbindProductsRequest,
    cb?: (error: string, rep: UnbindProductsResponse) => void
  ): Promise<UnbindProductsResponse> {
    return this.request("UnbindProducts", req, cb)
  }

  /**
   * 提供删除某个项目下产品的能力
   */
  async DeleteStudioProduct(
    req: DeleteStudioProductRequest,
    cb?: (error: string, rep: DeleteStudioProductResponse) => void
  ): Promise<DeleteStudioProductResponse> {
    return this.request("DeleteStudioProduct", req, cb)
  }

  /**
   * 根据设备产品ID、设备名称，获取设备上报的属性数据。
   */
  async DescribeDeviceData(
    req: DescribeDeviceDataRequest,
    cb?: (error: string, rep: DescribeDeviceDataResponse) => void
  ): Promise<DescribeDeviceDataResponse> {
    return this.request("DescribeDeviceData", req, cb)
  }

  /**
   * 获取网关绑定的子设备列表
   */
  async DescribeGatewayBindDevices(
    req: DescribeGatewayBindDevicesRequest,
    cb?: (error: string, rep: DescribeGatewayBindDevicesResponse) => void
  ): Promise<DescribeGatewayBindDevicesResponse> {
    return this.request("DescribeGatewayBindDevices", req, cb)
  }

  /**
   * 创建围栏
   */
  async CreatePositionFence(
    req: CreatePositionFenceRequest,
    cb?: (error: string, rep: CreatePositionFenceResponse) => void
  ): Promise<CreatePositionFenceResponse> {
    return this.request("CreatePositionFence", req, cb)
  }

  /**
   * 创建新 LoRa 网关设备接口
   */
  async CreateLoRaGateway(
    req: CreateLoRaGatewayRequest,
    cb?: (error: string, rep: CreateLoRaGatewayResponse) => void
  ): Promise<CreateLoRaGatewayResponse> {
    return this.request("CreateLoRaGateway", req, cb)
  }

  /**
   * 创建规则
   */
  async CreateTopicRule(
    req: CreateTopicRuleRequest,
    cb?: (error: string, rep: CreateTopicRuleResponse) => void
  ): Promise<CreateTopicRuleResponse> {
    return this.request("CreateTopicRule", req, cb)
  }

  /**
   * 创建 LoRa 自定义频点
   */
  async CreateLoRaFrequency(
    req: CreateLoRaFrequencyRequest,
    cb?: (error: string, rep: CreateLoRaFrequencyResponse) => void
  ): Promise<CreateLoRaFrequencyResponse> {
    return this.request("CreateLoRaFrequency", req, cb)
  }

  /**
   * 本接口（CreateTopicPolicy）用于创建一个Topic
   */
  async CreateTopicPolicy(
    req: CreateTopicPolicyRequest,
    cb?: (error: string, rep: CreateTopicPolicyResponse) => void
  ): Promise<CreateTopicPolicyResponse> {
    return this.request("CreateTopicPolicy", req, cb)
  }

  /**
   * 本接口（UploadFirmware）用于上传设备固件至平台
   */
  async UploadFirmware(
    req: UploadFirmwareRequest,
    cb?: (error: string, rep: UploadFirmwareResponse) => void
  ): Promise<UploadFirmwareResponse> {
    return this.request("UploadFirmware", req, cb)
  }

  /**
   * 批量禁用启用设备
   */
  async UpdateDevicesEnableState(
    req: UpdateDevicesEnableStateRequest,
    cb?: (error: string, rep: UpdateDevicesEnableStateResponse) => void
  ): Promise<UpdateDevicesEnableStateResponse> {
    return this.request("UpdateDevicesEnableState", req, cb)
  }

  /**
   * 修改项目
   */
  async ModifyProject(
    req: ModifyProjectRequest,
    cb?: (error: string, rep: ModifyProjectResponse) => void
  ): Promise<ModifyProjectResponse> {
    return this.request("ModifyProject", req, cb)
  }

  /**
   * 批量绑定子产品
   */
  async BindProducts(
    req: BindProductsRequest,
    cb?: (error: string, rep: BindProductsResponse) => void
  ): Promise<BindProductsResponse> {
    return this.request("BindProducts", req, cb)
  }

  /**
   * 获取围栏绑定信息列表
   */
  async DescribeFenceBindList(
    req: DescribeFenceBindListRequest,
    cb?: (error: string, rep: DescribeFenceBindListResponse) => void
  ): Promise<DescribeFenceBindListResponse> {
    return this.request("DescribeFenceBindList", req, cb)
  }

  /**
   * 更新位置空间
   */
  async ModifyPositionSpace(
    req: ModifyPositionSpaceRequest,
    cb?: (error: string, rep: ModifyPositionSpaceResponse) => void
  ): Promise<ModifyPositionSpaceResponse> {
    return this.request("ModifyPositionSpace", req, cb)
  }

  /**
   * 获取位置空间中围栏告警事件列表
   */
  async DescribeSpaceFenceEventList(
    req: DescribeSpaceFenceEventListRequest,
    cb?: (error: string, rep: DescribeSpaceFenceEventListResponse) => void
  ): Promise<DescribeSpaceFenceEventListResponse> {
    return this.request("DescribeSpaceFenceEventList", req, cb)
  }

  /**
   * 本接口（UpdateFirmware）用于对指定设备发起固件升级请求
   */
  async UpdateFirmware(
    req: UpdateFirmwareRequest,
    cb?: (error: string, rep: UpdateFirmwareResponse) => void
  ): Promise<UpdateFirmwareResponse> {
    return this.request("UpdateFirmware", req, cb)
  }

  /**
   * 用于获取网关可绑定或解绑的子产品
   */
  async DescribeGatewaySubProducts(
    req: DescribeGatewaySubProductsRequest,
    cb?: (error: string, rep: DescribeGatewaySubProductsResponse) => void
  ): Promise<DescribeGatewaySubProductsResponse> {
    return this.request("DescribeGatewaySubProducts", req, cb)
  }

  /**
   * 获取设备位置列表
   */
  async DescribeDevicePositionList(
    req: DescribeDevicePositionListRequest,
    cb?: (error: string, rep: DescribeDevicePositionListResponse) => void
  ): Promise<DescribeDevicePositionListResponse> {
    return this.request("DescribeDevicePositionList", req, cb)
  }

  /**
   * 批量绑定子设备
   */
  async BindDevices(
    req: BindDevicesRequest,
    cb?: (error: string, rep: BindDevicesResponse) => void
  ): Promise<BindDevicesResponse> {
    return this.request("BindDevices", req, cb)
  }

  /**
   * 用于新建批量生产设备
   */
  async CreateBatchProduction(
    req: CreateBatchProductionRequest,
    cb?: (error: string, rep: CreateBatchProductionResponse) => void
  ): Promise<CreateBatchProductionResponse> {
    return this.request("CreateBatchProduction", req, cb)
  }

  /**
   * 禁用规则
   */
  async DisableTopicRule(
    req: DisableTopicRuleRequest,
    cb?: (error: string, rep: DisableTopicRuleResponse) => void
  ): Promise<DisableTopicRuleResponse> {
    return this.request("DisableTopicRule", req, cb)
  }

  /**
   * 批量解绑子设备
   */
  async UnbindDevices(
    req: UnbindDevicesRequest,
    cb?: (error: string, rep: UnbindDevicesResponse) => void
  ): Promise<UnbindDevicesResponse> {
    return this.request("UnbindDevices", req, cb)
  }

  /**
   * 提供查询某个项目下所有产品信息的能力。
   */
  async GetStudioProductList(
    req: GetStudioProductListRequest,
    cb?: (error: string, rep: GetStudioProductListResponse) => void
  ): Promise<GetStudioProductListResponse> {
    return this.request("GetStudioProductList", req, cb)
  }

  /**
   * 获取量产详情信息。
   */
  async DescribeBatchProduction(
    req: DescribeBatchProductionRequest,
    cb?: (error: string, rep: DescribeBatchProductionResponse) => void
  ): Promise<DescribeBatchProductionResponse> {
    return this.request("DescribeBatchProduction", req, cb)
  }

  /**
   * 批量删除设备
   */
  async DeleteDevices(
    req: DeleteDevicesRequest,
    cb?: (error: string, rep: DeleteDevicesResponse) => void
  ): Promise<DeleteDevicesResponse> {
    return this.request("DeleteDevices", req, cb)
  }

  /**
   * 获取指定网关设备的子设备列表
   */
  async GetGatewaySubDeviceList(
    req: GetGatewaySubDeviceListRequest,
    cb?: (error: string, rep: GetGatewaySubDeviceListResponse) => void
  ): Promise<GetGatewaySubDeviceListResponse> {
    return this.request("GetGatewaySubDeviceList", req, cb)
  }

  /**
   * 获取设备的历史事件
   */
  async ListEventHistory(
    req: ListEventHistoryRequest,
    cb?: (error: string, rep: ListEventHistoryResponse) => void
  ): Promise<ListEventHistoryResponse> {
    return this.request("ListEventHistory", req, cb)
  }

  /**
   * 获取设备在指定时间范围内上报的历史数据。
   */
  async DescribeDeviceDataHistory(
    req: DescribeDeviceDataHistoryRequest,
    cb?: (error: string, rep: DescribeDeviceDataHistoryResponse) => void
  ): Promise<DescribeDeviceDataHistoryResponse> {
    return this.request("DescribeDeviceDataHistory", req, cb)
  }

  /**
   * 更新围栏
   */
  async ModifyPositionFence(
    req?: ModifyPositionFenceRequest,
    cb?: (error: string, rep: ModifyPositionFenceResponse) => void
  ): Promise<ModifyPositionFenceResponse> {
    return this.request("ModifyPositionFence", req, cb)
  }

  /**
   * 删除设备
   */
  async DeleteDevice(
    req: DeleteDeviceRequest,
    cb?: (error: string, rep: DeleteDeviceResponse) => void
  ): Promise<DeleteDeviceResponse> {
    return this.request("DeleteDevice", req, cb)
  }

  /**
   * 获取围栏列表
   */
  async DescribePositionFenceList(
    req: DescribePositionFenceListRequest,
    cb?: (error: string, rep: DescribePositionFenceListResponse) => void
  ): Promise<DescribePositionFenceListResponse> {
    return this.request("DescribePositionFenceList", req, cb)
  }

  /**
   * 提供删除LoRa自定义频点的能力
   */
  async DeleteLoRaFrequency(
    req: DeleteLoRaFrequencyRequest,
    cb?: (error: string, rep: DeleteLoRaFrequencyResponse) => void
  ): Promise<DeleteLoRaFrequencyResponse> {
    return this.request("DeleteLoRaFrequency", req, cb)
  }

  /**
   * 更新位置空间产品属性
   */
  async ModifySpaceProperty(
    req: ModifySpacePropertyRequest,
    cb?: (error: string, rep: ModifySpacePropertyResponse) => void
  ): Promise<ModifySpacePropertyResponse> {
    return this.request("ModifySpaceProperty", req, cb)
  }

  /**
   * 本接口（DeleteTopicPolicy）用于删除Topic
   */
  async DeleteTopicPolicy(
    req: DeleteTopicPolicyRequest,
    cb?: (error: string, rep: DeleteTopicPolicyResponse) => void
  ): Promise<DeleteTopicPolicyResponse> {
    return this.request("DeleteTopicPolicy", req, cb)
  }

  /**
   * 用于查询某个产品下的设备列表
   */
  async GetDeviceList(
    req: GetDeviceListRequest,
    cb?: (error: string, rep: GetDeviceListResponse) => void
  ): Promise<GetDeviceListResponse> {
    return this.request("GetDeviceList", req, cb)
  }

  /**
   * 本接口（ListTopicPolicy）用于获取Topic列表
   */
  async ListTopicPolicy(
    req: ListTopicPolicyRequest,
    cb?: (error: string, rep: ListTopicPolicyResponse) => void
  ): Promise<ListTopicPolicyResponse> {
    return this.request("ListTopicPolicy", req, cb)
  }

  /**
   * 无
   */
  async GenSingleDeviceSignatureOfPublic(
    req: GenSingleDeviceSignatureOfPublicRequest,
    cb?: (error: string, rep: GenSingleDeviceSignatureOfPublicResponse) => void
  ): Promise<GenSingleDeviceSignatureOfPublicResponse> {
    return this.request("GenSingleDeviceSignatureOfPublic", req, cb)
  }

  /**
   * 修改LoRa自定义频点
   */
  async ModifyLoRaFrequency(
    req: ModifyLoRaFrequencyRequest,
    cb?: (error: string, rep: ModifyLoRaFrequencyResponse) => void
  ): Promise<ModifyLoRaFrequencyResponse> {
    return this.request("ModifyLoRaFrequency", req, cb)
  }

  /**
   * 删除围栏
   */
  async DeletePositionFence(
    req: DeletePositionFenceRequest,
    cb?: (error: string, rep: DeletePositionFenceResponse) => void
  ): Promise<DeletePositionFenceResponse> {
    return this.request("DeletePositionFence", req, cb)
  }

  /**
   * 搜索规则
   */
  async SearchTopicRule(
    req: SearchTopicRuleRequest,
    cb?: (error: string, rep: SearchTopicRuleResponse) => void
  ): Promise<SearchTopicRuleResponse> {
    return this.request("SearchTopicRule", req, cb)
  }

  /**
   * 提供修改产品的数据模板的能力
   */
  async ModifyModelDefinition(
    req: ModifyModelDefinitionRequest,
    cb?: (error: string, rep: ModifyModelDefinitionResponse) => void
  ): Promise<ModifyModelDefinitionResponse> {
    return this.request("ModifyModelDefinition", req, cb)
  }

  /**
   * 用于获取设备绑定的用户列表
   */
  async GetFamilyDeviceUserList(
    req: GetFamilyDeviceUserListRequest,
    cb?: (error: string, rep: GetFamilyDeviceUserListResponse) => void
  ): Promise<GetFamilyDeviceUserListResponse> {
    return this.request("GetFamilyDeviceUserList", req, cb)
  }

  /**
   * 查询项目详情
   */
  async DescribeProject(
    req: DescribeProjectRequest,
    cb?: (error: string, rep: DescribeProjectResponse) => void
  ): Promise<DescribeProjectResponse> {
    return this.request("DescribeProject", req, cb)
  }

  /**
   * 查询产品配置的数据模板信息
   */
  async DescribeModelDefinition(
    req: DescribeModelDefinitionRequest,
    cb?: (error: string, rep: DescribeModelDefinitionResponse) => void
  ): Promise<DescribeModelDefinitionResponse> {
    return this.request("DescribeModelDefinition", req, cb)
  }

  /**
   * 创建位置空间
   */
  async CreatePositionSpace(
    req: CreatePositionSpaceRequest,
    cb?: (error: string, rep: CreatePositionSpaceResponse) => void
  ): Promise<CreatePositionSpaceResponse> {
    return this.request("CreatePositionSpace", req, cb)
  }

  /**
   * 创建围栏绑定信息
   */
  async CreateFenceBind(
    req: CreateFenceBindRequest,
    cb?: (error: string, rep: CreateFenceBindResponse) => void
  ): Promise<CreateFenceBindResponse> {
    return this.request("CreateFenceBind", req, cb)
  }
}
