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
  PublishMessageRequest,
  UpdateDevicesEnableStateResponse,
  UnbindDevicesRequest,
  DescribeDeviceResourcesRequest,
  BindDevicesRequest,
  DescribeProductsRequest,
  TopicRulePayload,
  PayloadLogItem,
  DescribeFirmwareRequest,
  DescribeDevicesResponse,
  DeleteTopicRuleResponse,
  Task,
  DescribeProductTasksRequest,
  DescribeTasksResponse,
  UpdateDeviceShadowRequest,
  ProductResourceInfo,
  DescribeMultiDevTaskRequest,
  DescribeDeviceResourceResponse,
  DescribeProductResourcesRequest,
  DescribeProductRequest,
  DescribeProductsResponse,
  DescribeDeviceShadowResponse,
  EnableTopicRuleResponse,
  DescribePushResourceTaskStatisticsResponse,
  CreateMultiDeviceResponse,
  PublishRRPCMessageRequest,
  ProductProperties,
  DeviceUpdateStatus,
  BatchUpdateFirmwareResponse,
  TaskInfo,
  DeleteProductRequest,
  StatusStatistic,
  DescribeTasksRequest,
  DownloadDeviceResourceRequest,
  DescribeDeviceResourceRequest,
  EditFirmwareRequest,
  MultiDevicesInfo,
  ResetDeviceStateRequest,
  DescribeDeviceClientKeyRequest,
  CLSLogItem,
  BatchUpdateShadow,
  DeleteDeviceRequest,
  DescribeFirmwareTaskDevicesRequest,
  DescribeFirmwareResponse,
  DescribeResourceTasksRequest,
  CreateMultiDevicesTaskRequest,
  DeleteDeviceResourceResponse,
  DescribeFirmwareTaskStatisticsResponse,
  DescribePushResourceTaskStatisticsRequest,
  CreateLoraDeviceRequest,
  UpdateDevicesEnableStateRequest,
  ListSDKLogRequest,
  SetProductsForbiddenStatusResponse,
  CreateProductResponse,
  CreateMultiDeviceRequest,
  DeleteLoraDeviceResponse,
  CreateTaskRequest,
  DescribeAllDevicesRequest,
  DescribeProductResourceResponse,
  CancelDeviceFirmwareTaskResponse,
  CreateTopicPolicyResponse,
  PublishToDeviceResponse,
  RetryDeviceFirmwareTaskResponse,
  CreateDeviceResponse,
  DeleteLoraDeviceRequest,
  CreateDeviceRequest,
  DescribeProductTaskRequest,
  DescribeFirmwareTaskResponse,
  CreateProductRequest,
  DescribeFirmwareTasksRequest,
  DisableTopicRuleResponse,
  BrokerSubscribe,
  GetCOSURLRequest,
  UpdateTopicPolicyResponse,
  DescribeProductTaskResponse,
  DescribeDeviceResponse,
  PublishBroadcastMessageRequest,
  ListLogResponse,
  RetryDeviceFirmwareTaskRequest,
  DescribeFirmwareTaskDevicesResponse,
  DescribeFirmwareTasksResponse,
  DeviceLabel,
  GetCOSURLResponse,
  UpdateDeviceAvailableStateResponse,
  EditFirmwareResponse,
  ListSDKLogResponse,
  CancelTaskRequest,
  DescribeFirmwareTaskDistributionRequest,
  UpdateDeviceAvailableStateRequest,
  GetUserResourceInfoResponse,
  ListLogPayloadResponse,
  DeleteProductResponse,
  DeviceProperty,
  PublishToDeviceRequest,
  SetProductsForbiddenStatusRequest,
  DownloadDeviceResourceResponse,
  UploadFirmwareResponse,
  ProductInfo,
  DescribeFirmwareTaskDistributionResponse,
  PublishBroadcastMessageResponse,
  DescribeDeviceRequest,
  CreateMultiDevicesTaskResponse,
  DescribeProductResourcesResponse,
  UpdateProductDynamicRegisterRequest,
  CreateTopicPolicyRequest,
  DescribeProductResourceRequest,
  DescribeLoraDeviceResponse,
  ProductTaskInfo,
  ReplaceTopicRuleRequest,
  PublishRRPCMessageResponse,
  CancelTaskResponse,
  UpdateTopicPolicyRequest,
  Attribute,
  DescribeDeviceResourcesResponse,
  CreateLoraDeviceResponse,
  DeleteTopicRuleRequest,
  ReplaceTopicRuleResponse,
  PublishAsDeviceRequest,
  CancelDeviceFirmwareTaskRequest,
  DeleteDeviceResourceRequest,
  DescribeMultiDevicesResponse,
  DescribeDeviceShadowRequest,
  UpdateProductDynamicRegisterResponse,
  UnbindDevicesResponse,
  DeviceInfo,
  DescribeMultiDevicesRequest,
  CreateTaskFileUrlRequest,
  UpdateDeviceShadowResponse,
  DescribeTaskResponse,
  CreateTaskResponse,
  BatchPublishMessage,
  BatchUpdateFirmwareRequest,
  DescribeMultiDevTaskResponse,
  GetUserResourceInfoRequest,
  DeviceTag,
  DescribeAllDevicesResponse,
  ListLogRequest,
  ProductMetadata,
  SDKLogItem,
  DescribeProductResponse,
  DescribeLoraDeviceRequest,
  DescribeTaskRequest,
  PublishMessageResponse,
  BindDevicesResponse,
  ResetDeviceResult,
  SearchKeyword,
  DescribeDevicesRequest,
  DescribeDeviceClientKeyResponse,
  UploadFirmwareRequest,
  DisableTopicRuleRequest,
  ResetDeviceStateResponse,
  FirmwareTaskInfo,
  CreateTopicRuleResponse,
  ListLogPayloadRequest,
  CreateTopicRuleRequest,
  DescribeResourceTasksResponse,
  DescribeFirmwareTaskStatisticsRequest,
  DeleteDeviceResponse,
  CreateTaskFileUrlResponse,
  DescribeProductTasksResponse,
  PublishAsDeviceResponse,
  EnableTopicRuleRequest,
  DeviceResourceInfo,
  DescribeFirmwareTaskRequest,
} from "./iotcloud_models"

/**
 * iotcloud client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("iotcloud.tencentcloudapi.com", "2018-06-14", clientConfig)
  }

  /**
   * 本接口（CreateTask）用于创建一个批量任务。目前此接口可以创建批量更新影子以及批量下发消息的任务
   */
  async CreateTask(
    req: CreateTaskRequest,
    cb?: (error: string, rep: CreateTaskResponse) => void
  ): Promise<CreateTaskResponse> {
    return this.request("CreateTask", req, cb)
  }

  /**
   * 本接口（DescribeDevices）用于查询物联网通信设备的设备列表。
   */
  async DescribeDevices(
    req: DescribeDevicesRequest,
    cb?: (error: string, rep: DescribeDevicesResponse) => void
  ): Promise<DescribeDevicesResponse> {
    return this.request("DescribeDevices", req, cb)
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
   * 发布RRPC消息
   */
  async PublishRRPCMessage(
    req: PublishRRPCMessageRequest,
    cb?: (error: string, rep: PublishRRPCMessageResponse) => void
  ): Promise<PublishRRPCMessageResponse> {
    return this.request("PublishRRPCMessage", req, cb)
  }

  /**
   * 删除lora类型的设备
   */
  async DeleteLoraDevice(
    req: DeleteLoraDeviceRequest,
    cb?: (error: string, rep: DeleteLoraDeviceResponse) => void
  ): Promise<DeleteLoraDeviceResponse> {
    return this.request("DeleteLoraDevice", req, cb)
  }

  /**
   * 本接口（DescribeMultiDevices）用于查询批量创建设备的执行结果。
   */
  async DescribeMultiDevices(
    req: DescribeMultiDevicesRequest,
    cb?: (error: string, rep: DescribeMultiDevicesResponse) => void
  ): Promise<DescribeMultiDevicesResponse> {
    return this.request("DescribeMultiDevices", req, cb)
  }

  /**
   * 获取日志内容列表
   */
  async ListLogPayload(
    req: ListLogPayloadRequest,
    cb?: (error: string, rep: ListLogPayloadResponse) => void
  ): Promise<ListLogPayloadResponse> {
    return this.request("ListLogPayload", req, cb)
  }

  /**
   * 查询固件信息
   */
  async DescribeFirmware(
    req: DescribeFirmwareRequest,
    cb?: (error: string, rep: DescribeFirmwareResponse) => void
  ): Promise<DescribeFirmwareResponse> {
    return this.request("DescribeFirmware", req, cb)
  }

  /**
   * 本接口（DescribeDeviceShadow）用于查询虚拟设备信息。
   */
  async DescribeDeviceShadow(
    req: DescribeDeviceShadowRequest,
    cb?: (error: string, rep: DescribeDeviceShadowResponse) => void
  ): Promise<DescribeDeviceShadowResponse> {
    return this.request("DescribeDeviceShadow", req, cb)
  }

  /**
   * 本接口（DescribeDevice）用于查看设备信息
   */
  async DescribeDevice(
    req: DescribeDeviceRequest,
    cb?: (error: string, rep: DescribeDeviceResponse) => void
  ): Promise<DescribeDeviceResponse> {
    return this.request("DescribeDevice", req, cb)
  }

  /**
   * 本接口（CreateMultiDevice）用于批量创建物联云设备。
   */
  async CreateMultiDevice(
    req: CreateMultiDeviceRequest,
    cb?: (error: string, rep: CreateMultiDeviceResponse) => void
  ): Promise<CreateMultiDeviceResponse> {
    return this.request("CreateMultiDevice", req, cb)
  }

  /**
   * 启用或者禁用设备
   */
  async UpdateDeviceAvailableState(
    req: UpdateDeviceAvailableStateRequest,
    cb?: (error: string, rep: UpdateDeviceAvailableStateResponse) => void
  ): Promise<UpdateDeviceAvailableStateResponse> {
    return this.request("UpdateDeviceAvailableState", req, cb)
  }

  /**
   * 本接口（DescribeProduct）用于查看产品详情
   */
  async DescribeProduct(
    req: DescribeProductRequest,
    cb?: (error: string, rep: DescribeProductResponse) => void
  ): Promise<DescribeProductResponse> {
    return this.request("DescribeProduct", req, cb)
  }

  /**
   * 本接口（CreateTopicRule）用于创建一个规则
   */
  async CreateTopicRule(
    req: CreateTopicRuleRequest,
    cb?: (error: string, rep: CreateTopicRuleResponse) => void
  ): Promise<CreateTopicRuleResponse> {
    return this.request("CreateTopicRule", req, cb)
  }

  /**
   * 本接口（CancelTask）用于取消一个未被调度的任务。
   */
  async CancelTask(
    req: CancelTaskRequest,
    cb?: (error: string, rep: CancelTaskResponse) => void
  ): Promise<CancelTaskResponse> {
    return this.request("CancelTask", req, cb)
  }

  /**
   * 重试设备升级任务
   */
  async RetryDeviceFirmwareTask(
    req: RetryDeviceFirmwareTaskRequest,
    cb?: (error: string, rep: RetryDeviceFirmwareTaskResponse) => void
  ): Promise<RetryDeviceFirmwareTaskResponse> {
    return this.request("RetryDeviceFirmwareTask", req, cb)
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
   * 本接口（BatchUpdateFirmware）用于批量更新设备固件
   */
  async BatchUpdateFirmware(
    req: BatchUpdateFirmwareRequest,
    cb?: (error: string, rep: BatchUpdateFirmwareResponse) => void
  ): Promise<BatchUpdateFirmwareResponse> {
    return this.request("BatchUpdateFirmware", req, cb)
  }

  /**
   * 本接口（CreateProduct）用于创建一个新的物联网通信产品
   */
  async CreateProduct(
    req: CreateProductRequest,
    cb?: (error: string, rep: CreateProductResponse) => void
  ): Promise<CreateProductResponse> {
    return this.request("CreateProduct", req, cb)
  }

  /**
   * 本接口（GetUserResourceInfo）用于查询用户资源使用信息。
   */
  async GetUserResourceInfo(
    req?: GetUserResourceInfoRequest,
    cb?: (error: string, rep: GetUserResourceInfoResponse) => void
  ): Promise<GetUserResourceInfoResponse> {
    return this.request("GetUserResourceInfo", req, cb)
  }

  /**
   * 批量设置产品禁用状态
   */
  async SetProductsForbiddenStatus(
    req: SetProductsForbiddenStatusRequest,
    cb?: (error: string, rep: SetProductsForbiddenStatusResponse) => void
  ): Promise<SetProductsForbiddenStatusResponse> {
    return this.request("SetProductsForbiddenStatus", req, cb)
  }

  /**
   * 获取证书认证类型设备的私钥，刚生成或者重置设备后仅可调用一次
   */
  async DescribeDeviceClientKey(
    req: DescribeDeviceClientKeyRequest,
    cb?: (error: string, rep: DescribeDeviceClientKeyResponse) => void
  ): Promise<DescribeDeviceClientKeyResponse> {
    return this.request("DescribeDeviceClientKey", req, cb)
  }

  /**
   * 本接口（DescribeProducts）用于列出产品列表。
   */
  async DescribeProducts(
    req: DescribeProductsRequest,
    cb?: (error: string, rep: DescribeProductsResponse) => void
  ): Promise<DescribeProductsResponse> {
    return this.request("DescribeProducts", req, cb)
  }

  /**
   * 本接口（CreateMultiDevicesTask）用于创建产品级别的批量创建设备任务
   */
  async CreateMultiDevicesTask(
    req: CreateMultiDevicesTaskRequest,
    cb?: (error: string, rep: CreateMultiDevicesTaskResponse) => void
  ): Promise<CreateMultiDevicesTaskResponse> {
    return this.request("CreateMultiDevicesTask", req, cb)
  }

  /**
   * 查询资源推送任务列表
   */
  async DescribeResourceTasks(
    req: DescribeResourceTasksRequest,
    cb?: (error: string, rep: DescribeResourceTasksResponse) => void
  ): Promise<DescribeResourceTasksResponse> {
    return this.request("DescribeResourceTasks", req, cb)
  }

  /**
   * 查询固件升级任务统计信息
   */
  async DescribeFirmwareTaskStatistics(
    req: DescribeFirmwareTaskStatisticsRequest,
    cb?: (error: string, rep: DescribeFirmwareTaskStatisticsResponse) => void
  ): Promise<DescribeFirmwareTaskStatisticsResponse> {
    return this.request("DescribeFirmwareTaskStatistics", req, cb)
  }

  /**
   * 获取lora类型设备的详细信息
   */
  async DescribeLoraDevice(
    req: DescribeLoraDeviceRequest,
    cb?: (error: string, rep: DescribeLoraDeviceResponse) => void
  ): Promise<DescribeLoraDeviceResponse> {
    return this.request("DescribeLoraDevice", req, cb)
  }

  /**
   * 本接口（DescribeTask）用于查询一个已创建任务的详情，任务保留一个月
   */
  async DescribeTask(
    req: DescribeTaskRequest,
    cb?: (error: string, rep: DescribeTaskResponse) => void
  ): Promise<DescribeTaskResponse> {
    return this.request("DescribeTask", req, cb)
  }

  /**
   * 本接口（DeleteDevice）用于删除物联网通信设备。
   */
  async DeleteDevice(
    req: DeleteDeviceRequest,
    cb?: (error: string, rep: DeleteDeviceResponse) => void
  ): Promise<DeleteDeviceResponse> {
    return this.request("DeleteDevice", req, cb)
  }

  /**
   * 批量启用或者禁用设备
   */
  async UpdateDevicesEnableState(
    req: UpdateDevicesEnableStateRequest,
    cb?: (error: string, rep: UpdateDevicesEnableStateResponse) => void
  ): Promise<UpdateDevicesEnableStateResponse> {
    return this.request("UpdateDevicesEnableState", req, cb)
  }

  /**
   * 本接口（ReplaceTopicRule）用于修改替换规则
   */
  async ReplaceTopicRule(
    req: ReplaceTopicRuleRequest,
    cb?: (error: string, rep: ReplaceTopicRuleResponse) => void
  ): Promise<ReplaceTopicRuleResponse> {
    return this.request("ReplaceTopicRule", req, cb)
  }

  /**
   * 获取设备上报的日志
   */
  async ListSDKLog(
    req: ListSDKLogRequest,
    cb?: (error: string, rep: ListSDKLogResponse) => void
  ): Promise<ListSDKLogResponse> {
    return this.request("ListSDKLog", req, cb)
  }

  /**
   * 本接口（DescribeProductResource）用于查询产品资源详情。
   */
  async DescribeProductResource(
    req: DescribeProductResourceRequest,
    cb?: (error: string, rep: DescribeProductResourceResponse) => void
  ): Promise<DescribeProductResourceResponse> {
    return this.request("DescribeProductResource", req, cb)
  }

  /**
   * 查询推送资源任务统计信息
   */
  async DescribePushResourceTaskStatistics(
    req: DescribePushResourceTaskStatisticsRequest,
    cb?: (error: string, rep: DescribePushResourceTaskStatisticsResponse) => void
  ): Promise<DescribePushResourceTaskStatisticsResponse> {
    return this.request("DescribePushResourceTaskStatistics", req, cb)
  }

  /**
   * 编辑固件信息
   */
  async EditFirmware(
    req: EditFirmwareRequest,
    cb?: (error: string, rep: EditFirmwareResponse) => void
  ): Promise<EditFirmwareResponse> {
    return this.request("EditFirmware", req, cb)
  }

  /**
   * 本接口（CreateDevice）用于新建一个物联网通信设备。
   */
  async CreateDevice(
    req: CreateDeviceRequest,
    cb?: (error: string, rep: CreateDeviceResponse) => void
  ): Promise<CreateDeviceResponse> {
    return this.request("CreateDevice", req, cb)
  }

  /**
   * 本接口（DescribeDeviceResource）用于查询设备资源详情。
   */
  async DescribeDeviceResource(
    req: DescribeDeviceResourceRequest,
    cb?: (error: string, rep: DescribeDeviceResourceResponse) => void
  ): Promise<DescribeDeviceResourceResponse> {
    return this.request("DescribeDeviceResource", req, cb)
  }

  /**
   * 本接口（PublishMessage）用于向某个主题发消息。
   */
  async PublishMessage(
    req: PublishMessageRequest,
    cb?: (error: string, rep: PublishMessageResponse) => void
  ): Promise<PublishMessageResponse> {
    return this.request("PublishMessage", req, cb)
  }

  /**
   * 查询固件升级任务状态分布
   */
  async DescribeFirmwareTaskDistribution(
    req: DescribeFirmwareTaskDistributionRequest,
    cb?: (error: string, rep: DescribeFirmwareTaskDistributionResponse) => void
  ): Promise<DescribeFirmwareTaskDistributionResponse> {
    return this.request("DescribeFirmwareTaskDistribution", req, cb)
  }

  /**
   * 本接口（DeleteProduct）用于删除一个物联网通信产品
   */
  async DeleteProduct(
    req: DeleteProductRequest,
    cb?: (error: string, rep: DeleteProductResponse) => void
  ): Promise<DeleteProductResponse> {
    return this.request("DeleteProduct", req, cb)
  }

  /**
   * 本接口（DownloadDeviceResource）用于下载设备资源
   */
  async DownloadDeviceResource(
    req: DownloadDeviceResourceRequest,
    cb?: (error: string, rep: DownloadDeviceResourceResponse) => void
  ): Promise<DownloadDeviceResourceResponse> {
    return this.request("DownloadDeviceResource", req, cb)
  }

  /**
   * 本接口（CreateTaskFileUrl）用于获取产品级任务文件上传链接
   */
  async CreateTaskFileUrl(
    req: CreateTaskFileUrlRequest,
    cb?: (error: string, rep: CreateTaskFileUrlResponse) => void
  ): Promise<CreateTaskFileUrlResponse> {
    return this.request("CreateTaskFileUrl", req, cb)
  }

  /**
   * 重置设备的连接状态
   */
  async ResetDeviceState(
    req: ResetDeviceStateRequest,
    cb?: (error: string, rep: ResetDeviceStateResponse) => void
  ): Promise<ResetDeviceStateResponse> {
    return this.request("ResetDeviceState", req, cb)
  }

  /**
   * 查询固件升级任务详情
   */
  async DescribeFirmwareTask(
    req: DescribeFirmwareTaskRequest,
    cb?: (error: string, rep: DescribeFirmwareTaskResponse) => void
  ): Promise<DescribeFirmwareTaskResponse> {
    return this.request("DescribeFirmwareTask", req, cb)
  }

  /**
   * 本接口（UploadFirmware）用于上传设备固件信息
   */
  async UploadFirmware(
    req: UploadFirmwareRequest,
    cb?: (error: string, rep: UploadFirmwareResponse) => void
  ): Promise<UploadFirmwareResponse> {
    return this.request("UploadFirmware", req, cb)
  }

  /**
   * 本接口（DescribeTasks）用于查询已创建的任务列表，任务保留一个月
   */
  async DescribeTasks(
    req: DescribeTasksRequest,
    cb?: (error: string, rep: DescribeTasksResponse) => void
  ): Promise<DescribeTasksResponse> {
    return this.request("DescribeTasks", req, cb)
  }

  /**
   * 本接口（DescribeDeviceResources）用于查询设备资源列表。
   */
  async DescribeDeviceResources(
    req: DescribeDeviceResourcesRequest,
    cb?: (error: string, rep: DescribeDeviceResourcesResponse) => void
  ): Promise<DescribeDeviceResourcesResponse> {
    return this.request("DescribeDeviceResources", req, cb)
  }

  /**
   * 更新产品动态注册的配置
   */
  async UpdateProductDynamicRegister(
    req: UpdateProductDynamicRegisterRequest,
    cb?: (error: string, rep: UpdateProductDynamicRegisterResponse) => void
  ): Promise<UpdateProductDynamicRegisterResponse> {
    return this.request("UpdateProductDynamicRegister", req, cb)
  }

  /**
   * 本接口（ListLog）用于查看日志信息
   */
  async ListLog(
    req: ListLogRequest,
    cb?: (error: string, rep: ListLogResponse) => void
  ): Promise<ListLogResponse> {
    return this.request("ListLog", req, cb)
  }

  /**
   * 查询固件升级任务的设备列表
   */
  async DescribeFirmwareTaskDevices(
    req: DescribeFirmwareTaskDevicesRequest,
    cb?: (error: string, rep: DescribeFirmwareTaskDevicesResponse) => void
  ): Promise<DescribeFirmwareTaskDevicesResponse> {
    return this.request("DescribeFirmwareTaskDevices", req, cb)
  }

  /**
   * 取消设备升级任务
   */
  async CancelDeviceFirmwareTask(
    req: CancelDeviceFirmwareTaskRequest,
    cb?: (error: string, rep: CancelDeviceFirmwareTaskResponse) => void
  ): Promise<CancelDeviceFirmwareTaskResponse> {
    return this.request("CancelDeviceFirmwareTask", req, cb)
  }

  /**
   * 模拟lora类型的设备端向服务器端发送消息
   */
  async PublishAsDevice(
    req: PublishAsDeviceRequest,
    cb?: (error: string, rep: PublishAsDeviceResponse) => void
  ): Promise<PublishAsDeviceResponse> {
    return this.request("PublishAsDevice", req, cb)
  }

  /**
   * 创建lora类型的设备
   */
  async CreateLoraDevice(
    req: CreateLoraDeviceRequest,
    cb?: (error: string, rep: CreateLoraDeviceResponse) => void
  ): Promise<CreateLoraDeviceResponse> {
    return this.request("CreateLoraDevice", req, cb)
  }

  /**
   * 本接口（EnableTopicRule）用于启用规则
   */
  async EnableTopicRule(
    req: EnableTopicRuleRequest,
    cb?: (error: string, rep: EnableTopicRuleResponse) => void
  ): Promise<EnableTopicRuleResponse> {
    return this.request("EnableTopicRule", req, cb)
  }

  /**
   * 本接口（BindDevices）用于网关设备批量绑定子设备
   */
  async BindDevices(
    req: BindDevicesRequest,
    cb?: (error: string, rep: BindDevicesResponse) => void
  ): Promise<BindDevicesResponse> {
    return this.request("BindDevices", req, cb)
  }

  /**
   * 本接口（UpdateTopicPolicy）用于更新Topic信息
   */
  async UpdateTopicPolicy(
    req: UpdateTopicPolicyRequest,
    cb?: (error: string, rep: UpdateTopicPolicyResponse) => void
  ): Promise<UpdateTopicPolicyResponse> {
    return this.request("UpdateTopicPolicy", req, cb)
  }

  /**
   * 本接口（UnbindDevices）用于网关设备批量解绑子设备
   */
  async UnbindDevices(
    req: UnbindDevicesRequest,
    cb?: (error: string, rep: UnbindDevicesResponse) => void
  ): Promise<UnbindDevicesResponse> {
    return this.request("UnbindDevices", req, cb)
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
   * 本接口（DescribeProductTasks）用于查看产品级别的任务列表
   */
  async DescribeProductTasks(
    req: DescribeProductTasksRequest,
    cb?: (error: string, rep: DescribeProductTasksResponse) => void
  ): Promise<DescribeProductTasksResponse> {
    return this.request("DescribeProductTasks", req, cb)
  }

  /**
   * 查询所有设备列表
   */
  async DescribeAllDevices(
    req: DescribeAllDevicesRequest,
    cb?: (error: string, rep: DescribeAllDevicesResponse) => void
  ): Promise<DescribeAllDevicesResponse> {
    return this.request("DescribeAllDevices", req, cb)
  }

  /**
   * 本接口（DisableTopicRule）用于禁用规则
   */
  async DisableTopicRule(
    req: DisableTopicRuleRequest,
    cb?: (error: string, rep: DisableTopicRuleResponse) => void
  ): Promise<DisableTopicRuleResponse> {
    return this.request("DisableTopicRule", req, cb)
  }

  /**
   * 本接口（DescribeMultiDevTask）用于查询批量创建设备任务的执行状态。
   */
  async DescribeMultiDevTask(
    req: DescribeMultiDevTaskRequest,
    cb?: (error: string, rep: DescribeMultiDevTaskResponse) => void
  ): Promise<DescribeMultiDevTaskResponse> {
    return this.request("DescribeMultiDevTask", req, cb)
  }

  /**
   * 本接口（UpdateDeviceShadow）用于更新虚拟设备信息。
   */
  async UpdateDeviceShadow(
    req: UpdateDeviceShadowRequest,
    cb?: (error: string, rep: UpdateDeviceShadowResponse) => void
  ): Promise<UpdateDeviceShadowResponse> {
    return this.request("UpdateDeviceShadow", req, cb)
  }

  /**
   * 查询固件升级任务列表
   */
  async DescribeFirmwareTasks(
    req: DescribeFirmwareTasksRequest,
    cb?: (error: string, rep: DescribeFirmwareTasksResponse) => void
  ): Promise<DescribeFirmwareTasksResponse> {
    return this.request("DescribeFirmwareTasks", req, cb)
  }

  /**
   * 服务器端下发消息给lora类型的设备
   */
  async PublishToDevice(
    req: PublishToDeviceRequest,
    cb?: (error: string, rep: PublishToDeviceResponse) => void
  ): Promise<PublishToDeviceResponse> {
    return this.request("PublishToDevice", req, cb)
  }

  /**
   * 本接口（DescribeProductResources）用于查询产品资源列表。
   */
  async DescribeProductResources(
    req: DescribeProductResourcesRequest,
    cb?: (error: string, rep: DescribeProductResourcesResponse) => void
  ): Promise<DescribeProductResourcesResponse> {
    return this.request("DescribeProductResources", req, cb)
  }

  /**
   * 本接口（DeleteDeviceResource）用于删除设备资源
   */
  async DeleteDeviceResource(
    req: DeleteDeviceResourceRequest,
    cb?: (error: string, rep: DeleteDeviceResourceResponse) => void
  ): Promise<DeleteDeviceResourceResponse> {
    return this.request("DeleteDeviceResource", req, cb)
  }

  /**
   * 本接口（DescribeProductTask）用于查看产品级别的任务信息
   */
  async DescribeProductTask(
    req: DescribeProductTaskRequest,
    cb?: (error: string, rep: DescribeProductTaskResponse) => void
  ): Promise<DescribeProductTaskResponse> {
    return this.request("DescribeProductTask", req, cb)
  }

  /**
   * 本接口（DeleteTopicRule）用于删除规则
   */
  async DeleteTopicRule(
    req: DeleteTopicRuleRequest,
    cb?: (error: string, rep: DeleteTopicRuleResponse) => void
  ): Promise<DeleteTopicRuleResponse> {
    return this.request("DeleteTopicRule", req, cb)
  }
}
