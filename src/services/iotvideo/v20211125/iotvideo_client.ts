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
  DescribeCloudStorageDateRequest,
  CloudStorageTimeData,
  PackageConsumeStat,
  DescribeCloudStoragePackageConsumeDetailsResponse,
  CreateCloudStorageRequest,
  CloudStoragePackageInfo,
  MessageCntStats,
  DescribeDeviceDataStatsRequest,
  ThumbnailURLInfoList,
  ImportModelDefinitionResponse,
  ApplyAIModelRequest,
  CreateBatchRequest,
  DeleteCloudStorageEventResponse,
  ModifyProductDynamicRegisterResponse,
  ModifyProductResponse,
  CancelAIModelApplicationResponse,
  DescribeCloudStorageTimeResponse,
  DescribeCloudStorageThumbnailListRequest,
  DescribeDevicePackagesRequest,
  ReportAliveDeviceRequest,
  DescribeProductsRequest,
  DescribeAIModelChannelResponse,
  DescribeMessageDataStatsResponse,
  DescribeDeviceActionHistoryRequest,
  DescribeCloudStorageMultiThumbnailResponse,
  ModifyDataForwardRequest,
  DescribeCloudStorageThumbnailRequest,
  DescribeDevicesResponse,
  CreateFreeCloudStorageResponse,
  ModifyProductRequest,
  ModifyModelDefinitionRequest,
  DescribeBatchsResponse,
  CancelAIModelApplicationRequest,
  SDKLogItem,
  DescribeUserRequest,
  DescribeForwardRuleResponse,
  CallDeviceActionSyncRequest,
  ModifyDeviceLogLevelRequest,
  DescribeBatchRequest,
  DescribeForwardRuleRequest,
  ModifyDeviceRequest,
  VideoBatch,
  CreateCOSCredentialsResponse,
  ProductModelDefinition,
  ActionHistory,
  RetryDeviceFirmwareTaskRequest,
  CreateDataForwardResponse,
  UploadFirmwareRequest,
  DescribeCloudStoragePackageConsumeStatsResponse,
  PackageInfo,
  DescribeFirmwareRequest,
  DescribeCloudStorageUsersResponse,
  DescribeProductRequest,
  DescribeProductsResponse,
  CheckForwardAuthRequest,
  DescribeDeviceDataRequest,
  CreateBatchResponse,
  DescribePackageConsumeTasksResponse,
  DescribeDeviceActionHistoryResponse,
  DescribeCategoryRequest,
  CreateCOSCredentialsRequest,
  DeviceCommLogItem,
  DescribeBonusesResponse,
  DescribeCloudStorageMultiThumbnailRequest,
  GenSingleDeviceSignatureOfPublicResponse,
  DescribeDataForwardListResponse,
  DeleteFirmwareResponse,
  PackageConsumeTask,
  CreateForwardRuleResponse,
  BatchUpdateFirmwareResponse,
  DescribeModelDefinitionResponse,
  DeleteProductRequest,
  StatusStatistic,
  PublishMessageResponse,
  SetForwardAuthResponse,
  EditFirmwareRequest,
  DescribePushChannelResponse,
  ReportAliveDeviceResponse,
  DescribeDeviceEventHistoryRequest,
  DescribeCategoryResponse,
  DescribeSDKLogRequest,
  DescribeBalanceRequest,
  BonusInfo,
  DescribeDataForwardListRequest,
  DescribeDeviceCommLogResponse,
  DeleteDeviceRequest,
  GenerateSignedVideoURLResponse,
  ControlDeviceDataRequest,
  AIModelUsageInfo,
  GetAllFirmwareVersionRequest,
  DescribeFirmwareTaskDevicesRequest,
  DescribeFirmwareResponse,
  DescribeDeviceStatusLogResponse,
  DescribeDeviceCommLogRequest,
  UpdateAIModelChannelRequest,
  WakeUpDeviceResponse,
  DeleteForwardRuleRequest,
  DescribeCloudStorageStreamDataResponse,
  UpdateAIModelChannelResponse,
  DeviceUpdateStatus,
  DescribeAIModelUsageResponse,
  DescribePackageConsumeTaskRequest,
  AIModelApplication,
  BindCloudStorageUserRequest,
  ModifyPushChannelResponse,
  CallDeviceActionSyncResponse,
  CreateProductResponse,
  TRTCParams,
  DescribeDeviceDataHistoryResponse,
  CallTRTCDeviceRequest,
  CallDeviceActionAsyncRequest,
  DescribeAIModelsRequest,
  RetryDeviceFirmwareTaskResponse,
  GenSingleDeviceSignatureOfPublicRequest,
  DescribeP2PInfoResponse,
  ResetCloudStorageResponse,
  InheritCloudStorageUserResponse,
  DescribeDeviceEventHistoryResponse,
  DescribeFirmwareTaskResponse,
  FirmwareInfo,
  CreateProductRequest,
  DescribeFirmwareTasksRequest,
  GetFirmwareURLResponse,
  DescribeUserResponse,
  DescribePackageConsumeTaskResponse,
  DescribeAIModelApplicationsRequest,
  DescribeCloudStorageEventsRequest,
  ListFirmwaresRequest,
  PublishMessageRequest,
  DescribeDeviceStatusLogRequest,
  DescribeSDKLogResponse,
  DescribeBalanceResponse,
  DescribeFirmwareTaskDevicesResponse,
  DescribeFirmwareTasksResponse,
  CloudStorageUserInfo,
  DescribeP2PInfoRequest,
  DescribePackageConsumeTasksRequest,
  DescribeAccountRequest,
  EditFirmwareResponse,
  DescribeFirmwareTaskDistributionRequest,
  ProductTemplate,
  DeleteProductResponse,
  ModifyForwardRuleResponse,
  CallDeviceActionAsyncResponse,
  DescribeCloudStoragePackageConsumeStatsRequest,
  BalanceTransaction,
  FirmwareTaskInfo,
  DescribeProductDynamicRegisterRequest,
  ResetCloudStorageEventRequest,
  DescribeFirmwareTaskDistributionResponse,
  DescribeBatchResponse,
  DeviceSignatureInfo,
  GenerateSignedVideoURLRequest,
  ModifyPushChannelRequest,
  DataForward,
  CreateDeviceChannelResponse,
  ModifyForwardRuleRequest,
  CreateAIDetectionResponse,
  DescribeCloudStorageEventsResponse,
  CreateDeviceChannelRequest,
  DescribeDevicePackagesResponse,
  CreateFreeCloudStorageRequest,
  CloudStorageEvent,
  DeviceDataHistoryItem,
  DescribeCloudStorageDateResponse,
  DescribeFreeCloudStorageNumResponse,
  TransferCloudStorageResponse,
  ModifyDataForwardStatusResponse,
  CloudStorageTimeInfo,
  ModifyDeviceResponse,
  DescribeCloudStoragePackageConsumeDetailsRequest,
  UploadFirmwareResponse,
  DescribeCloudStorageOrderRequest,
  DescribeDeviceRequest,
  CreateCloudStorageResponse,
  BindCloudStorageUserResponse,
  DescribeFreeCloudStorageNumRequest,
  CancelDeviceFirmwareTaskRequest,
  CancelDeviceFirmwareTaskResponse,
  DescribeBatchsRequest,
  WakeUpDeviceRequest,
  ApplyAIModelResponse,
  ControlDeviceDataResponse,
  DescribeDeviceDataHistoryRequest,
  EventHistoryItem,
  CreateForwardRuleRequest,
  DeviceInfo,
  SetForwardAuthRequest,
  DescribeCloudStorageRequest,
  DescribeBalanceTransactionsResponse,
  ImportModelDefinitionRequest,
  CreateTaskFileUrlRequest,
  ModifyModelDefinitionResponse,
  DescribeCloudStorageThumbnailListResponse,
  CallTRTCDeviceResponse,
  ModifyDeviceLogLevelResponse,
  CreateDataForwardRequest,
  ResetCloudStorageEventResponse,
  BatchUpdateFirmwareRequest,
  ModifyProductDynamicRegisterRequest,
  DescribeDeviceDataStatsResponse,
  DescribeAccountResponse,
  DescribePushChannelRequest,
  DeleteCloudStorageEventRequest,
  DescribeMessageDataStatsRequest,
  GetFirmwareURLRequest,
  CreateAIDetectionRequest,
  DescribeCloudStorageResponse,
  ResetCloudStorageRequest,
  DescribeProductResponse,
  DescribeCloudStorageStreamDataRequest,
  DescribeAIModelsResponse,
  InheritCloudStorageUserRequest,
  DescribeAIModelChannelRequest,
  DescribeAIModelUsageRequest,
  DescribeBonusesRequest,
  DeleteFirmwareRequest,
  DescribeBalanceTransactionsRequest,
  GetAllFirmwareVersionResponse,
  AIModelInfo,
  DescribeCloudStorageThumbnailResponse,
  SearchKeyword,
  DescribeDevicesRequest,
  DescribeModelDefinitionRequest,
  DescribeProductDynamicRegisterResponse,
  DescribeFirmwareTaskStatisticsResponse,
  CheckForwardAuthResponse,
  DescribeDeviceResponse,
  DescribeDeviceDataResponse,
  DescribeCloudStorageOrderResponse,
  DeleteForwardRuleResponse,
  DeviceStatusLogItem,
  ListFirmwaresResponse,
  TransferCloudStorageRequest,
  DescribeFirmwareTaskStatisticsRequest,
  DeleteDeviceResponse,
  CreateTaskFileUrlResponse,
  VideoProduct,
  DeviceCntStats,
  ModifyDataForwardResponse,
  DescribeCloudStorageUsersRequest,
  ModifyDataForwardStatusRequest,
  DescribeFirmwareTaskRequest,
  DescribeCloudStorageTimeRequest,
  DescribeAIModelApplicationsResponse,
} from "./iotvideo_models"

/**
 * iotvideo client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("iotvideo.tencentcloudapi.com", "2021-11-25", clientConfig)
  }

  /**
   * 呼叫TRTC设备
   */
  async CallTRTCDevice(
    req: CallTRTCDeviceRequest,
    cb?: (error: string, rep: CallTRTCDeviceResponse) => void
  ): Promise<CallTRTCDeviceResponse> {
    return this.request("CallTRTCDevice", req, cb)
  }

  /**
   * 根据设备信息拉取有效套餐列表
   */
  async DescribeDevicePackages(
    req: DescribeDevicePackagesRequest,
    cb?: (error: string, rep: DescribeDevicePackagesResponse) => void
  ): Promise<DescribeDevicePackagesResponse> {
    return this.request("DescribeDevicePackages", req, cb)
  }

  /**
   * 发起AI推理请求
   */
  async CreateAIDetection(
    req: CreateAIDetectionRequest,
    cb?: (error: string, rep: CreateAIDetectionResponse) => void
  ): Promise<CreateAIDetectionResponse> {
    return this.request("CreateAIDetection", req, cb)
  }

  /**
   * 拉取AI模型列表
   */
  async DescribeAIModels(
    req: DescribeAIModelsRequest,
    cb?: (error: string, rep: DescribeAIModelsResponse) => void
  ): Promise<DescribeAIModelsResponse> {
    return this.request("DescribeAIModels", req, cb)
  }

  /**
   * 用户AI模型申请记录
   */
  async DescribeAIModelApplications(
    req: DescribeAIModelApplicationsRequest,
    cb?: (error: string, rep: DescribeAIModelApplicationsResponse) => void
  ): Promise<DescribeAIModelApplicationsResponse> {
    return this.request("DescribeAIModelApplications", req, cb)
  }

  /**
   * 获取产品详情
   */
  async DescribeProduct(
    req: DescribeProductRequest,
    cb?: (error: string, rep: DescribeProductResponse) => void
  ): Promise<DescribeProductResponse> {
    return this.request("DescribeProduct", req, cb)
  }

  /**
   * 本接口（GetAllFirmwareVersion）用于获取所有的版本列表
   */
  async GetAllFirmwareVersion(
    req: GetAllFirmwareVersionRequest,
    cb?: (error: string, rep: GetAllFirmwareVersionResponse) => void
  ): Promise<GetAllFirmwareVersionResponse> {
    return this.request("GetAllFirmwareVersion", req, cb)
  }

  /**
   * 获取产品列表
   */
  async DescribeProducts(
    req: DescribeProductsRequest,
    cb?: (error: string, rep: DescribeProductsResponse) => void
  ): Promise<DescribeProductsResponse> {
    return this.request("DescribeProducts", req, cb)
  }

  /**
   * 获取video消费版用户信息
   */
  async DescribeUser(
    req?: DescribeUserRequest,
    cb?: (error: string, rep: DescribeUserResponse) => void
  ): Promise<DescribeUserResponse> {
    return this.request("DescribeUser", req, cb)
  }

  /**
   * 本接口用于查询固件升级任务统计信息
   */
  async DescribeFirmwareTaskStatistics(
    req: DescribeFirmwareTaskStatisticsRequest,
    cb?: (error: string, rep: DescribeFirmwareTaskStatisticsResponse) => void
  ): Promise<DescribeFirmwareTaskStatisticsResponse> {
    return this.request("DescribeFirmwareTaskStatistics", req, cb)
  }

  /**
   * 更新设备日志级别
   */
  async ModifyDeviceLogLevel(
    req: ModifyDeviceLogLevelRequest,
    cb?: (error: string, rep: ModifyDeviceLogLevelResponse) => void
  ): Promise<ModifyDeviceLogLevelResponse> {
    return this.request("ModifyDeviceLogLevel", req, cb)
  }

  /**
   * 同步调用设备行为
   */
  async CallDeviceActionSync(
    req: CallDeviceActionSyncRequest,
    cb?: (error: string, rep: CallDeviceActionSyncResponse) => void
  ): Promise<CallDeviceActionSyncResponse> {
    return this.request("CallDeviceActionSync", req, cb)
  }

  /**
   * 更新推送通道
   */
  async ModifyPushChannel(
    req: ModifyPushChannelRequest,
    cb?: (error: string, rep: ModifyPushChannelResponse) => void
  ): Promise<ModifyPushChannelResponse> {
    return this.request("ModifyPushChannel", req, cb)
  }

  /**
   * 获取视频防盗链播放URL
   */
  async GenerateSignedVideoURL(
    req: GenerateSignedVideoURLRequest,
    cb?: (error: string, rep: GenerateSignedVideoURLResponse) => void
  ): Promise<GenerateSignedVideoURLResponse> {
    return this.request("GenerateSignedVideoURL", req, cb)
  }

  /**
   * 本接口用于编辑固件信息
   */
  async EditFirmware(
    req: EditFirmwareRequest,
    cb?: (error: string, rep: EditFirmwareResponse) => void
  ): Promise<EditFirmwareResponse> {
    return this.request("EditFirmware", req, cb)
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
   * 获取设备的历史事件
   */
  async DescribeDeviceEventHistory(
    req: DescribeDeviceEventHistoryRequest,
    cb?: (error: string, rep: DescribeDeviceEventHistoryResponse) => void
  ): Promise<DescribeDeviceEventHistoryResponse> {
    return this.request("DescribeDeviceEventHistory", req, cb)
  }

  /**
   * 导入其它产品的数据模板，覆盖现有数据模板的物模型和产品分类信息
   */
  async ImportModelDefinition(
    req: ImportModelDefinitionRequest,
    cb?: (error: string, rep: ImportModelDefinitionResponse) => void
  ): Promise<ImportModelDefinitionResponse> {
    return this.request("ImportModelDefinition", req, cb)
  }

  /**
   * 批量拉取云存事件缩略图
   */
  async DescribeCloudStorageThumbnailList(
    req: DescribeCloudStorageThumbnailListRequest,
    cb?: (error: string, rep: DescribeCloudStorageThumbnailListResponse) => void
  ): Promise<DescribeCloudStorageThumbnailListResponse> {
    return this.request("DescribeCloudStorageThumbnailList", req, cb)
  }

  /**
   * 本接口用于取消设备升级任务
   */
  async CancelDeviceFirmwareTask(
    req: CancelDeviceFirmwareTaskRequest,
    cb?: (error: string, rep: CancelDeviceFirmwareTaskResponse) => void
  ): Promise<CancelDeviceFirmwareTaskResponse> {
    return this.request("CancelDeviceFirmwareTask", req, cb)
  }

  /**
   * 上报活跃设备
   */
  async ReportAliveDevice(
    req: ReportAliveDeviceRequest,
    cb?: (error: string, rep: ReportAliveDeviceResponse) => void
  ): Promise<ReportAliveDeviceResponse> {
    return this.request("ReportAliveDevice", req, cb)
  }

  /**
   * 获取产品转发规则
   */
  async DescribeForwardRule(
    req: DescribeForwardRuleRequest,
    cb?: (error: string, rep: DescribeForwardRuleResponse) => void
  ): Promise<DescribeForwardRuleResponse> {
    return this.request("DescribeForwardRule", req, cb)
  }

  /**
   * 查询套餐消耗记录列表
   */
  async DescribePackageConsumeTasks(
    req: DescribePackageConsumeTasksRequest,
    cb?: (error: string, rep: DescribePackageConsumeTasksResponse) => void
  ): Promise<DescribePackageConsumeTasksResponse> {
    return this.request("DescribePackageConsumeTasks", req, cb)
  }

  /**
   * 获取消费版账号信息
   */
  async DescribeAccount(
    req: DescribeAccountRequest,
    cb?: (error: string, rep: DescribeAccountResponse) => void
  ): Promise<DescribeAccountResponse> {
    return this.request("DescribeAccount", req, cb)
  }

  /**
   * 获取云存套餐包消耗统计
   */
  async DescribeCloudStoragePackageConsumeStats(
    req: DescribeCloudStoragePackageConsumeStatsRequest,
    cb?: (error: string, rep: DescribeCloudStoragePackageConsumeStatsResponse) => void
  ): Promise<DescribeCloudStoragePackageConsumeStatsResponse> {
    return this.request("DescribeCloudStoragePackageConsumeStats", req, cb)
  }

  /**
   * 本接口用于查询固件升级任务列表
   */
  async DescribeFirmwareTasks(
    req: DescribeFirmwareTasksRequest,
    cb?: (error: string, rep: DescribeFirmwareTasksResponse) => void
  ): Promise<DescribeFirmwareTasksResponse> {
    return this.request("DescribeFirmwareTasks", req, cb)
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
   * 获取设备在指定时间范围内的通讯日志
   */
  async DescribeDeviceCommLog(
    req: DescribeDeviceCommLogRequest,
    cb?: (error: string, rep: DescribeDeviceCommLogResponse) => void
  ): Promise<DescribeDeviceCommLogResponse> {
    return this.request("DescribeDeviceCommLog", req, cb)
  }

  /**
   * 本接口（DescribeFirmware）用于查询固件信息
   */
  async DescribeFirmware(
    req: DescribeFirmwareRequest,
    cb?: (error: string, rep: DescribeFirmwareResponse) => void
  ): Promise<DescribeFirmwareResponse> {
    return this.request("DescribeFirmware", req, cb)
  }

  /**
   * 获取具有云存的日期
   */
  async DescribeCloudStorageDate(
    req: DescribeCloudStorageDateRequest,
    cb?: (error: string, rep: DescribeCloudStorageDateResponse) => void
  ): Promise<DescribeCloudStorageDateResponse> {
    return this.request("DescribeCloudStorageDate", req, cb)
  }

  /**
   * 查询云存卡套餐信息
   */
  async DescribeFreeCloudStorageNum(
    req?: DescribeFreeCloudStorageNumRequest,
    cb?: (error: string, rep: DescribeFreeCloudStorageNumResponse) => void
  ): Promise<DescribeFreeCloudStorageNumResponse> {
    return this.request("DescribeFreeCloudStorageNum", req, cb)
  }

  /**
   * 设置转发权限
   */
  async SetForwardAuth(
    req: SetForwardAuthRequest,
    cb?: (error: string, rep: SetForwardAuthResponse) => void
  ): Promise<SetForwardAuthResponse> {
    return this.request("SetForwardAuth", req, cb)
  }

  /**
   * 拉取云存用户列表
   */
  async DescribeCloudStorageUsers(
    req: DescribeCloudStorageUsersRequest,
    cb?: (error: string, rep: DescribeCloudStorageUsersResponse) => void
  ): Promise<DescribeCloudStorageUsersResponse> {
    return this.request("DescribeCloudStorageUsers", req, cb)
  }

  /**
   * 转移云存服务
   */
  async TransferCloudStorage(
    req: TransferCloudStorageRequest,
    cb?: (error: string, rep: TransferCloudStorageResponse) => void
  ): Promise<TransferCloudStorageResponse> {
    return this.request("TransferCloudStorage", req, cb)
  }

  /**
   * 本接口用于重试设备升级任务
   */
  async RetryDeviceFirmwareTask(
    req: RetryDeviceFirmwareTaskRequest,
    cb?: (error: string, rep: RetryDeviceFirmwareTaskResponse) => void
  ): Promise<RetryDeviceFirmwareTaskResponse> {
    return this.request("RetryDeviceFirmwareTask", req, cb)
  }

  /**
   * 修改设备信息
   */
  async ModifyDevice(
    req: ModifyDeviceRequest,
    cb?: (error: string, rep: ModifyDeviceResponse) => void
  ): Promise<ModifyDeviceResponse> {
    return this.request("ModifyDevice", req, cb)
  }

  /**
   * 修改数据转发
   */
  async ModifyDataForward(
    req: ModifyDataForwardRequest,
    cb?: (error: string, rep: ModifyDataForwardResponse) => void
  ): Promise<ModifyDataForwardResponse> {
    return this.request("ModifyDataForward", req, cb)
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
   * 创建产品
   */
  async CreateProduct(
    req: CreateProductRequest,
    cb?: (error: string, rep: CreateProductResponse) => void
  ): Promise<CreateProductResponse> {
    return this.request("CreateProduct", req, cb)
  }

  /**
   * 继承云存用户
   */
  async InheritCloudStorageUser(
    req: InheritCloudStorageUserRequest,
    cb?: (error: string, rep: InheritCloudStorageUserResponse) => void
  ): Promise<InheritCloudStorageUserResponse> {
    return this.request("InheritCloudStorageUser", req, cb)
  }

  /**
   * 本接口（GetFirmwareURL）用于获取固件存储的URL
   */
  async GetFirmwareURL(
    req: GetFirmwareURLRequest,
    cb?: (error: string, rep: GetFirmwareURLResponse) => void
  ): Promise<GetFirmwareURLResponse> {
    return this.request("GetFirmwareURL", req, cb)
  }

  /**
   * 获取批次详情
   */
  async DescribeBatch(
    req: DescribeBatchRequest,
    cb?: (error: string, rep: DescribeBatchResponse) => void
  ): Promise<DescribeBatchResponse> {
    return this.request("DescribeBatch", req, cb)
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
   * 获取Category详情
   */
  async DescribeCategory(
    req: DescribeCategoryRequest,
    cb?: (error: string, rep: DescribeCategoryResponse) => void
  ): Promise<DescribeCategoryResponse> {
    return this.request("DescribeCategory", req, cb)
  }

  /**
   * 删除产品
   */
  async DeleteProduct(
    req: DeleteProductRequest,
    cb?: (error: string, rep: DeleteProductResponse) => void
  ): Promise<DeleteProductResponse> {
    return this.request("DeleteProduct", req, cb)
  }

  /**
   * 设置数据转发状态
   */
  async ModifyDataForwardStatus(
    req: ModifyDataForwardStatusRequest,
    cb?: (error: string, rep: ModifyDataForwardStatusResponse) => void
  ): Promise<ModifyDataForwardStatusResponse> {
    return this.request("ModifyDataForwardStatus", req, cb)
  }

  /**
   * 此接口查询固件升级任务详情
   */
  async DescribeFirmwareTask(
    req: DescribeFirmwareTaskRequest,
    cb?: (error: string, rep: DescribeFirmwareTaskResponse) => void
  ): Promise<DescribeFirmwareTaskResponse> {
    return this.request("DescribeFirmwareTask", req, cb)
  }

  /**
   * 重置云存服务
   */
  async ResetCloudStorage(
    req: ResetCloudStorageRequest,
    cb?: (error: string, rep: ResetCloudStorageResponse) => void
  ): Promise<ResetCloudStorageResponse> {
    return this.request("ResetCloudStorage", req, cb)
  }

  /**
   * 本接口用于查询固件升级任务的设备列表
   */
  async DescribeFirmwareTaskDevices(
    req: DescribeFirmwareTaskDevicesRequest,
    cb?: (error: string, rep: DescribeFirmwareTaskDevicesResponse) => void
  ): Promise<DescribeFirmwareTaskDevicesResponse> {
    return this.request("DescribeFirmwareTaskDevices", req, cb)
  }

  /**
   * 获取数据转发列表
   */
  async DescribeDataForwardList(
    req: DescribeDataForwardListRequest,
    cb?: (error: string, rep: DescribeDataForwardListResponse) => void
  ): Promise<DescribeDataForwardListResponse> {
    return this.request("DescribeDataForwardList", req, cb)
  }

  /**
   * 获取某一天云存时间轴
   */
  async DescribeCloudStorageTime(
    req: DescribeCloudStorageTimeRequest,
    cb?: (error: string, rep: DescribeCloudStorageTimeResponse) => void
  ): Promise<DescribeCloudStorageTimeResponse> {
    return this.request("DescribeCloudStorageTime", req, cb)
  }

  /**
   * 更新AI推理结果推送配置
   */
  async UpdateAIModelChannel(
    req: UpdateAIModelChannelRequest,
    cb?: (error: string, rep: UpdateAIModelChannelResponse) => void
  ): Promise<UpdateAIModelChannelResponse> {
    return this.request("UpdateAIModelChannel", req, cb)
  }

  /**
   * 拉取云存事件缩略图
   */
  async DescribeCloudStorageThumbnail(
    req: DescribeCloudStorageThumbnailRequest,
    cb?: (error: string, rep: DescribeCloudStorageThumbnailResponse) => void
  ): Promise<DescribeCloudStorageThumbnailResponse> {
    return this.request("DescribeCloudStorageThumbnail", req, cb)
  }

  /**
   * 拉取多个云存事件缩略图
   */
  async DescribeCloudStorageMultiThumbnail(
    req: DescribeCloudStorageMultiThumbnailRequest,
    cb?: (error: string, rep: DescribeCloudStorageMultiThumbnailResponse) => void
  ): Promise<DescribeCloudStorageMultiThumbnailResponse> {
    return this.request("DescribeCloudStorageMultiThumbnail", req, cb)
  }

  /**
   * 本接口（DeleteFirmware）用于删除固件
   */
  async DeleteFirmware(
    req: DeleteFirmwareRequest,
    cb?: (error: string, rep: DeleteFirmwareResponse) => void
  ): Promise<DeleteFirmwareResponse> {
    return this.request("DeleteFirmware", req, cb)
  }

  /**
   * 异步调用设备行为
   */
  async CallDeviceActionAsync(
    req: CallDeviceActionAsyncRequest,
    cb?: (error: string, rep: CallDeviceActionAsyncResponse) => void
  ): Promise<CallDeviceActionAsyncResponse> {
    return this.request("CallDeviceActionAsync", req, cb)
  }

  /**
   * 判断是否开启转发的权限
   */
  async CheckForwardAuth(
    req: CheckForwardAuthRequest,
    cb?: (error: string, rep: CheckForwardAuthResponse) => void
  ): Promise<CheckForwardAuthResponse> {
    return this.request("CheckForwardAuth", req, cb)
  }

  /**
   * 获取设备属性数据
   */
  async DescribeDeviceData(
    req: DescribeDeviceDataRequest,
    cb?: (error: string, rep: DescribeDeviceDataResponse) => void
  ): Promise<DescribeDeviceDataResponse> {
    return this.request("DescribeDeviceData", req, cb)
  }

  /**
   * 修改产品信息
   */
  async ModifyProduct(
    req: ModifyProductRequest,
    cb?: (error: string, rep: ModifyProductResponse) => void
  ): Promise<ModifyProductResponse> {
    return this.request("ModifyProduct", req, cb)
  }

  /**
   * 查看AI模型资源包
   */
  async DescribeAIModelUsage(
    req: DescribeAIModelUsageRequest,
    cb?: (error: string, rep: DescribeAIModelUsageResponse) => void
  ): Promise<DescribeAIModelUsageResponse> {
    return this.request("DescribeAIModelUsage", req, cb)
  }

  /**
   * 修改转发规则
   */
  async ModifyForwardRule(
    req: ModifyForwardRuleRequest,
    cb?: (error: string, rep: ModifyForwardRuleResponse) => void
  ): Promise<ModifyForwardRuleResponse> {
    return this.request("ModifyForwardRule", req, cb)
  }

  /**
   * 取消AI模型申请
   */
  async CancelAIModelApplication(
    req: CancelAIModelApplicationRequest,
    cb?: (error: string, rep: CancelAIModelApplicationResponse) => void
  ): Promise<CancelAIModelApplicationResponse> {
    return this.request("CancelAIModelApplication", req, cb)
  }

  /**
   * 获取设备云存服务详情
   */
  async DescribeCloudStorage(
    req: DescribeCloudStorageRequest,
    cb?: (error: string, rep: DescribeCloudStorageResponse) => void
  ): Promise<DescribeCloudStorageResponse> {
    return this.request("DescribeCloudStorage", req, cb)
  }

  /**
   * 获取批次列表
   */
  async DescribeBatchs(
    req: DescribeBatchsRequest,
    cb?: (error: string, rep: DescribeBatchsResponse) => void
  ): Promise<DescribeBatchsResponse> {
    return this.request("DescribeBatchs", req, cb)
  }

  /**
   * 为用户提供获取动作历史的能力。
   */
  async DescribeDeviceActionHistory(
    req: DescribeDeviceActionHistoryRequest,
    cb?: (error: string, rep: DescribeDeviceActionHistoryResponse) => void
  ): Promise<DescribeDeviceActionHistoryResponse> {
    return this.request("DescribeDeviceActionHistory", req, cb)
  }

  /**
   * 创建COS上传密钥
   */
  async CreateCOSCredentials(
    req: CreateCOSCredentialsRequest,
    cb?: (error: string, rep: CreateCOSCredentialsResponse) => void
  ): Promise<CreateCOSCredentialsResponse> {
    return this.request("CreateCOSCredentials", req, cb)
  }

  /**
   * 开通免费云存服务
   */
  async CreateFreeCloudStorage(
    req: CreateFreeCloudStorageRequest,
    cb?: (error: string, rep: CreateFreeCloudStorageResponse) => void
  ): Promise<CreateFreeCloudStorageResponse> {
    return this.request("CreateFreeCloudStorage", req, cb)
  }

  /**
   * 创建批次
   */
  async CreateBatch(
    req: CreateBatchRequest,
    cb?: (error: string, rep: CreateBatchResponse) => void
  ): Promise<CreateBatchResponse> {
    return this.request("CreateBatch", req, cb)
  }

  /**
   * 查看推送通道
   */
  async DescribePushChannel(
    req: DescribePushChannelRequest,
    cb?: (error: string, rep: DescribePushChannelResponse) => void
  ): Promise<DescribePushChannelResponse> {
    return this.request("DescribePushChannel", req, cb)
  }

  /**
   * 开通云存服务
   */
  async CreateCloudStorage(
    req: CreateCloudStorageRequest,
    cb?: (error: string, rep: CreateCloudStorageResponse) => void
  ): Promise<CreateCloudStorageResponse> {
    return this.request("CreateCloudStorage", req, cb)
  }

  /**
   * 获取产品动态注册详情
   */
  async DescribeProductDynamicRegister(
    req: DescribeProductDynamicRegisterRequest,
    cb?: (error: string, rep: DescribeProductDynamicRegisterResponse) => void
  ): Promise<DescribeProductDynamicRegisterResponse> {
    return this.request("DescribeProductDynamicRegister", req, cb)
  }

  /**
   * 查询设备数据统计
   */
  async DescribeDeviceDataStats(
    req: DescribeDeviceDataStatsRequest,
    cb?: (error: string, rep: DescribeDeviceDataStatsResponse) => void
  ): Promise<DescribeDeviceDataStatsResponse> {
    return this.request("DescribeDeviceDataStats", req, cb)
  }

  /**
   * 设备唤醒
   */
  async WakeUpDevice(
    req: WakeUpDeviceRequest,
    cb?: (error: string, rep: WakeUpDeviceResponse) => void
  ): Promise<WakeUpDeviceResponse> {
    return this.request("WakeUpDevice", req, cb)
  }

  /**
   * 获取设备上下线日志
   */
  async DescribeDeviceStatusLog(
    req: DescribeDeviceStatusLogRequest,
    cb?: (error: string, rep: DescribeDeviceStatusLogResponse) => void
  ): Promise<DescribeDeviceStatusLogResponse> {
    return this.request("DescribeDeviceStatusLog", req, cb)
  }

  /**
   * 创建转发规则
   */
  async CreateForwardRule(
    req: CreateForwardRuleRequest,
    cb?: (error: string, rep: CreateForwardRuleResponse) => void
  ): Promise<CreateForwardRuleResponse> {
    return this.request("CreateForwardRule", req, cb)
  }

  /**
   * 查看AI推理结果推送配置
   */
  async DescribeAIModelChannel(
    req: DescribeAIModelChannelRequest,
    cb?: (error: string, rep: DescribeAIModelChannelResponse) => void
  ): Promise<DescribeAIModelChannelResponse> {
    return this.request("DescribeAIModelChannel", req, cb)
  }

  /**
   * 查询账户余额
   */
  async DescribeBalance(
    req: DescribeBalanceRequest,
    cb?: (error: string, rep: DescribeBalanceResponse) => void
  ): Promise<DescribeBalanceResponse> {
    return this.request("DescribeBalance", req, cb)
  }

  /**
   * 获取设备sdk日志
   */
  async DescribeSDKLog(
    req: DescribeSDKLogRequest,
    cb?: (error: string, rep: DescribeSDKLogResponse) => void
  ): Promise<DescribeSDKLogResponse> {
    return this.request("DescribeSDKLog", req, cb)
  }

  /**
   * 绑定云存用户
   */
  async BindCloudStorageUser(
    req: BindCloudStorageUserRequest,
    cb?: (error: string, rep: BindCloudStorageUserResponse) => void
  ): Promise<BindCloudStorageUserResponse> {
    return this.request("BindCloudStorageUser", req, cb)
  }

  /**
   * 查看设备详情
   */
  async DescribeDevice(
    req: DescribeDeviceRequest,
    cb?: (error: string, rep: DescribeDeviceResponse) => void
  ): Promise<DescribeDeviceResponse> {
    return this.request("DescribeDevice", req, cb)
  }

  /**
   * 查询设备消息数量统计
   */
  async DescribeMessageDataStats(
    req: DescribeMessageDataStatsRequest,
    cb?: (error: string, rep: DescribeMessageDataStatsResponse) => void
  ): Promise<DescribeMessageDataStatsResponse> {
    return this.request("DescribeMessageDataStats", req, cb)
  }

  /**
   * 删除云存事件
   */
  async DeleteCloudStorageEvent(
    req: DeleteCloudStorageEventRequest,
    cb?: (error: string, rep: DeleteCloudStorageEventResponse) => void
  ): Promise<DeleteCloudStorageEventResponse> {
    return this.request("DeleteCloudStorageEvent", req, cb)
  }

  /**
   * 创建设备通道
   */
  async CreateDeviceChannel(
    req: CreateDeviceChannelRequest,
    cb?: (error: string, rep: CreateDeviceChannelResponse) => void
  ): Promise<CreateDeviceChannelResponse> {
    return this.request("CreateDeviceChannel", req, cb)
  }

  /**
   * 拉取设备p2p信息
   */
  async DescribeP2PInfo(
    req: DescribeP2PInfoRequest,
    cb?: (error: string, rep: DescribeP2PInfoResponse) => void
  ): Promise<DescribeP2PInfoResponse> {
    return this.request("DescribeP2PInfo", req, cb)
  }

  /**
   * 查询云存服务详情
   */
  async DescribeCloudStorageOrder(
    req: DescribeCloudStorageOrderRequest,
    cb?: (error: string, rep: DescribeCloudStorageOrderResponse) => void
  ): Promise<DescribeCloudStorageOrderResponse> {
    return this.request("DescribeCloudStorageOrder", req, cb)
  }

  /**
   * 拉取账户流水
   */
  async DescribeBalanceTransactions(
    req: DescribeBalanceTransactionsRequest,
    cb?: (error: string, rep: DescribeBalanceTransactionsResponse) => void
  ): Promise<DescribeBalanceTransactionsResponse> {
    return this.request("DescribeBalanceTransactions", req, cb)
  }

  /**
   * 删除转发规则
   */
  async DeleteForwardRule(
    req: DeleteForwardRuleRequest,
    cb?: (error: string, rep: DeleteForwardRuleResponse) => void
  ): Promise<DeleteForwardRuleResponse> {
    return this.request("DeleteForwardRule", req, cb)
  }

  /**
   * 修改产品动态注册
   */
  async ModifyProductDynamicRegister(
    req: ModifyProductDynamicRegisterRequest,
    cb?: (error: string, rep: ModifyProductDynamicRegisterResponse) => void
  ): Promise<ModifyProductDynamicRegisterResponse> {
    return this.request("ModifyProductDynamicRegister", req, cb)
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
   * 删除设备
   */
  async DeleteDevice(
    req: DeleteDeviceRequest,
    cb?: (error: string, rep: DeleteDeviceResponse) => void
  ): Promise<DeleteDeviceResponse> {
    return this.request("DeleteDevice", req, cb)
  }

  /**
   * 查询套餐消耗记录详情
   */
  async DescribePackageConsumeTask(
    req: DescribePackageConsumeTaskRequest,
    cb?: (error: string, rep: DescribePackageConsumeTaskResponse) => void
  ): Promise<DescribePackageConsumeTaskResponse> {
    return this.request("DescribePackageConsumeTask", req, cb)
  }

  /**
   * 重置云存事件
   */
  async ResetCloudStorageEvent(
    req: ResetCloudStorageEventRequest,
    cb?: (error: string, rep: ResetCloudStorageEventResponse) => void
  ): Promise<ResetCloudStorageEventResponse> {
    return this.request("ResetCloudStorageEvent", req, cb)
  }

  /**
   * 本接口用于查询固件升级任务状态分布
   */
  async DescribeFirmwareTaskDistribution(
    req: DescribeFirmwareTaskDistributionRequest,
    cb?: (error: string, rep: DescribeFirmwareTaskDistributionResponse) => void
  ): Promise<DescribeFirmwareTaskDistributionResponse> {
    return this.request("DescribeFirmwareTaskDistribution", req, cb)
  }

  /**
   * 获取设备的绑定签名
   */
  async GenSingleDeviceSignatureOfPublic(
    req: GenSingleDeviceSignatureOfPublicRequest,
    cb?: (error: string, rep: GenSingleDeviceSignatureOfPublicResponse) => void
  ): Promise<GenSingleDeviceSignatureOfPublicResponse> {
    return this.request("GenSingleDeviceSignatureOfPublic", req, cb)
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
   * 获取设备图片流数据
   */
  async DescribeCloudStorageStreamData(
    req: DescribeCloudStorageStreamDataRequest,
    cb?: (error: string, rep: DescribeCloudStorageStreamDataResponse) => void
  ): Promise<DescribeCloudStorageStreamDataResponse> {
    return this.request("DescribeCloudStorageStreamData", req, cb)
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
   * 创建数据转发
   */
  async CreateDataForward(
    req: CreateDataForwardRequest,
    cb?: (error: string, rep: CreateDataForwardResponse) => void
  ): Promise<CreateDataForwardResponse> {
    return this.request("CreateDataForward", req, cb)
  }

  /**
   * 查看运营活动资源包列表
   */
  async DescribeBonuses(
    req: DescribeBonusesRequest,
    cb?: (error: string, rep: DescribeBonusesResponse) => void
  ): Promise<DescribeBonusesResponse> {
    return this.request("DescribeBonuses", req, cb)
  }

  /**
   * 拉取云存事件列表
   */
  async DescribeCloudStorageEvents(
    req: DescribeCloudStorageEventsRequest,
    cb?: (error: string, rep: DescribeCloudStorageEventsResponse) => void
  ): Promise<DescribeCloudStorageEventsResponse> {
    return this.request("DescribeCloudStorageEvents", req, cb)
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
   * 申请AI模型
   */
  async ApplyAIModel(
    req: ApplyAIModelRequest,
    cb?: (error: string, rep: ApplyAIModelResponse) => void
  ): Promise<ApplyAIModelResponse> {
    return this.request("ApplyAIModel", req, cb)
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
   * 获取设备列表
   */
  async DescribeDevices(
    req: DescribeDevicesRequest,
    cb?: (error: string, rep: DescribeDevicesResponse) => void
  ): Promise<DescribeDevicesResponse> {
    return this.request("DescribeDevices", req, cb)
  }

  /**
   * 获取云存套餐包消耗详细记录
   */
  async DescribeCloudStoragePackageConsumeDetails(
    req: DescribeCloudStoragePackageConsumeDetailsRequest,
    cb?: (error: string, rep: DescribeCloudStoragePackageConsumeDetailsResponse) => void
  ): Promise<DescribeCloudStoragePackageConsumeDetailsResponse> {
    return this.request("DescribeCloudStoragePackageConsumeDetails", req, cb)
  }
}
