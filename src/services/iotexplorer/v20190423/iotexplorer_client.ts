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
  DeleteProjectRequest,
  ProjectEntry,
  DescribeModelDefinitionResponse,
  ModifyStudioProductResponse,
  DeleteStudioProductResponse,
  GetDeviceListResponse,
  ControlDeviceDataRequest,
  DeleteLoRaFrequencyResponse,
  DeleteTopicRuleResponse,
  ModifyModelDefinitionRequest,
  CreateStudioProductResponse,
  CallDeviceActionSyncRequest,
  EnableTopicRuleResponse,
  ModifyStudioProductRequest,
  CreateStudioProductRequest,
  ProductModelDefinition,
  ReleaseStudioProductRequest,
  SearchTopicRuleRequest,
  DescribeDeviceDataRequest,
  DescribeStudioProductResponse,
  DescribeProjectResponse,
  DeviceData,
  DeviceDataHistoryItem,
  ProductEntry,
  ProjectEntryEx,
  DescribeLoRaFrequencyRequest,
  DeleteDeviceRequest,
  DeleteLoRaFrequencyRequest,
  ListEventHistoryRequest,
  ReleaseStudioProductResponse,
  DeleteLoRaGatewayRequest,
  LoRaFrequencyEntry,
  SearchTopicRuleResponse,
  DescribeTopicRuleRequest,
  CallDeviceActionSyncResponse,
  CreateLoRaGatewayRequest,
  CreateProjectResponse,
  ModifyTopicRuleRequest,
  DeleteProjectResponse,
  CallDeviceActionAsyncRequest,
  CreateDeviceResponse,
  CreateDeviceRequest,
  GetProjectListResponse,
  GetStudioProductListRequest,
  DisableTopicRuleResponse,
  TopicRuleInfo,
  CreateProjectRequest,
  DescribeDeviceResponse,
  GetStudioProductListResponse,
  PublishMessageRequest,
  GetDeviceListRequest,
  GetTopicRuleListResponse,
  DisableTopicRuleRequest,
  EventHistoryItem,
  TopicRule,
  TopicRulePayload,
  CallDeviceActionAsyncResponse,
  DescribeTopicRuleResponse,
  LoRaGatewayLocation,
  DescribeDeviceRequest,
  ModifyTopicRuleResponse,
  DescribeLoRaFrequencyResponse,
  SearchStudioProductResponse,
  GetLoRaGatewayListRequest,
  DescribeProjectRequest,
  DeleteTopicRuleRequest,
  CreateLoRaGatewayResponse,
  DeleteLoRaGatewayResponse,
  CreateLoRaFrequencyRequest,
  LoRaGatewayItem,
  ControlDeviceDataResponse,
  DescribeDeviceDataHistoryRequest,
  DescribeStudioProductRequest,
  ModifyLoRaFrequencyRequest,
  ModifyModelDefinitionResponse,
  GetProjectListRequest,
  CreateLoRaFrequencyResponse,
  SearchStudioProductRequest,
  GetTopicRuleListRequest,
  ModifyProjectResponse,
  DeleteStudioProductRequest,
  ModifyProjectRequest,
  PublishMessageResponse,
  ModifyLoRaGatewayResponse,
  DescribeDeviceDataHistoryResponse,
  DescribeModelDefinitionRequest,
  GetLoRaGatewayListResponse,
  CreateTopicRuleResponse,
  DescribeDeviceDataResponse,
  CreateTopicRuleRequest,
  DeleteDeviceResponse,
  DeviceInfo,
  ModifyLoRaFrequencyResponse,
  ModifyLoRaGatewayRequest,
  ListEventHistoryResponse,
  EnableTopicRuleRequest,
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
   * 提供修改产品的名称和描述等信息的能力，对于已发布产品不允许进行修改。
   */
  async ModifyStudioProduct(
    req: ModifyStudioProductRequest,
    cb?: (error: string, rep: ModifyStudioProductResponse) => void
  ): Promise<ModifyStudioProductResponse> {
    return this.request("ModifyStudioProduct", req, cb)
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
   * 修改LoRa自定义频点
   */
  async ModifyLoRaFrequency(
    req: ModifyLoRaFrequencyRequest,
    cb?: (error: string, rep: ModifyLoRaFrequencyResponse) => void
  ): Promise<ModifyLoRaFrequencyResponse> {
    return this.request("ModifyLoRaFrequency", req, cb)
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
   * 修改 LoRa 网关信息
   */
  async ModifyLoRaGateway(
    req: ModifyLoRaGatewayRequest,
    cb?: (error: string, rep: ModifyLoRaGatewayResponse) => void
  ): Promise<ModifyLoRaGatewayResponse> {
    return this.request("ModifyLoRaGateway", req, cb)
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
   * 提供查询用户所创建的项目列表查询功能。
   */
  async GetProjectList(
    req: GetProjectListRequest,
    cb?: (error: string, rep: GetProjectListResponse) => void
  ): Promise<GetProjectListResponse> {
    return this.request("GetProjectList", req, cb)
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
   * 为用户提供同步调用设备行为的能力。
   */
  async CallDeviceActionSync(
    req: CallDeviceActionSyncRequest,
    cb?: (error: string, rep: CallDeviceActionSyncResponse) => void
  ): Promise<CallDeviceActionSyncResponse> {
    return this.request("CallDeviceActionSync", req, cb)
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
   * 修改项目
   */
  async ModifyProject(
    req: ModifyProjectRequest,
    cb?: (error: string, rep: ModifyProjectResponse) => void
  ): Promise<ModifyProjectResponse> {
    return this.request("ModifyProject", req, cb)
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
   * 本接口（PublishMessage）用于使用自定义透传协议进行设备远控
   */
  async PublishMessage(
    req: PublishMessageRequest,
    cb?: (error: string, rep: PublishMessageResponse) => void
  ): Promise<PublishMessageResponse> {
    return this.request("PublishMessage", req, cb)
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
   * 创建设备
   */
  async CreateDevice(
    req: CreateDeviceRequest,
    cb?: (error: string, rep: CreateDeviceResponse) => void
  ): Promise<CreateDeviceResponse> {
    return this.request("CreateDevice", req, cb)
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
   * 删除设备
   */
  async DeleteDevice(
    req: DeleteDeviceRequest,
    cb?: (error: string, rep: DeleteDeviceResponse) => void
  ): Promise<DeleteDeviceResponse> {
    return this.request("DeleteDevice", req, cb)
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
   * 获取规则列表
   */
  async GetTopicRuleList(
    req: GetTopicRuleListRequest,
    cb?: (error: string, rep: GetTopicRuleListResponse) => void
  ): Promise<GetTopicRuleListResponse> {
    return this.request("GetTopicRuleList", req, cb)
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
   * 搜索规则
   */
  async SearchTopicRule(
    req: SearchTopicRuleRequest,
    cb?: (error: string, rep: SearchTopicRuleResponse) => void
  ): Promise<SearchTopicRuleResponse> {
    return this.request("SearchTopicRule", req, cb)
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
   * 提供修改产品的数据模板的能力
   */
  async ModifyModelDefinition(
    req: ModifyModelDefinitionRequest,
    cb?: (error: string, rep: ModifyModelDefinitionResponse) => void
  ): Promise<ModifyModelDefinitionResponse> {
    return this.request("ModifyModelDefinition", req, cb)
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
   * 为用户提供新建项目的能力，用于集中管理产品和应用。
   */
  async CreateProject(
    req: CreateProjectRequest,
    cb?: (error: string, rep: CreateProjectResponse) => void
  ): Promise<CreateProjectResponse> {
    return this.request("CreateProject", req, cb)
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
   * 提供给用户异步调用设备行为的能力
   */
  async CallDeviceActionAsync(
    req: CallDeviceActionAsyncRequest,
    cb?: (error: string, rep: CallDeviceActionAsyncResponse) => void
  ): Promise<CallDeviceActionAsyncResponse> {
    return this.request("CallDeviceActionAsync", req, cb)
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
   * 提供删除某个项目的能力
   */
  async DeleteProject(
    req: DeleteProjectRequest,
    cb?: (error: string, rep: DeleteProjectResponse) => void
  ): Promise<DeleteProjectResponse> {
    return this.request("DeleteProject", req, cb)
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
   * 获取规则信息
   */
  async DescribeTopicRule(
    req: DescribeTopicRuleRequest,
    cb?: (error: string, rep: DescribeTopicRuleResponse) => void
  ): Promise<DescribeTopicRuleResponse> {
    return this.request("DescribeTopicRule", req, cb)
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
}
