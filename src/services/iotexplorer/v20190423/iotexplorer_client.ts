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
  GetTWeCallPkgListRequest,
  PackageConsumeStat,
  DescribeCloudStoragePackageConsumeDetailsResponse,
  TWeCallActiveInfo,
  GetWechatDeviceTicketRequest,
  DeleteFenceBindRequest,
  DescribeModelDefinitionResponse,
  GetGatewaySubDeviceListResponse,
  DeleteStudioProductResponse,
  DescribeDevicePackagesRequest,
  ControlDeviceDataRequest,
  DeviceActiveResult,
  DeleteLoRaFrequencyResponse,
  CreateFreeCloudStorageResponse,
  ModifyPositionFenceResponse,
  DescribeCloudStorageAIServiceTaskRequest,
  DescribeCloudStorageThumbnailListRequest,
  CheckFirmwareUpdateResponse,
  DescribeCloudStorageUsersResponse,
  DescribeCloudStoragePackageConsumeDetailsRequest,
  DescribeActivateLicenseServiceResponse,
  WifiInfo,
  CreateCloudStorageAIServiceTaskRequest,
  DescribeCloudStorageOrderRequest,
  DescribeSpaceFenceEventListResponse,
  DescribeCloudStorageEventsWithAITasksResponse,
  SearchTopicRuleResponse,
  ModifyCloudStorageAIServiceResponse,
  DescribeDeviceFirmWareRequest,
  BindCloudStorageUserRequest,
  CreateLoRaFrequencyRequest,
  UpdateDeviceTWeCallAuthorizeStatusRequest,
  CreateProjectResponse,
  DeleteProjectResponse,
  CreateTopicPolicyResponse,
  CreateDeviceResponse,
  CreateDeviceRequest,
  InheritCloudStorageUserResponse,
  DescribeDeviceResponse,
  PublishBroadcastMessageRequest,
  GetStudioProductListResponse,
  GetTWeCallActiveStatusRequest,
  GetAuthMiniProgramAppListRequest,
  DescribeFenceEventListRequest,
  ActivateTWeCallLicenseResponse,
  DeleteTopicPolicyRequest,
  ResetCloudStorageEventRequest,
  TopicItem,
  GetFamilyDeviceUserListRequest,
  CreateTRTCSignaturesWithRoomIdRequest,
  DescribeSpaceFenceEventListRequest,
  FenceEventItem,
  RegisteredDeviceNetTypeInfo,
  DescribeGatewaySubDeviceListRequest,
  GetDeviceListRequest,
  DescribeDeviceDataHistoryRequest,
  DescribeStudioProductRequest,
  DescribeCloudStorageThumbnailListResponse,
  DeletePositionFenceRequest,
  GetProjectListRequest,
  ModifyPositionSpaceRequest,
  DescribeDeviceBindGatewayRequest,
  ProjectEntry,
  ModifyProjectResponse,
  DescribeCloudStorageThumbnailRequest,
  ModifyProductCloudStorageAIServiceRequest,
  CreateExternalSourceAIServiceTaskRequest,
  GetDeviceSumStatisticsResponse,
  InheritCloudStorageUserRequest,
  ModifyProjectRequest,
  ModifySpacePropertyResponse,
  PauseTWeCallDeviceRequest,
  DescribeDeviceDataHistoryResponse,
  DeviceUser,
  ProductModelDefinition,
  PositionFenceInfo,
  DeleteDeviceResponse,
  ModifyLoRaFrequencyResponse,
  InstanceDetail,
  TWeCallPkgInfo,
  ListEventHistoryResponse,
  GetBatchProductionsListResponse,
  DescribeDeviceFirmwaresResponse,
  DescribeCloudStorageUsersRequest,
  TWeCallLicenseInfo,
  DescribeCloudStorageDateRequest,
  DescribeTopicPolicyRequest,
  DescribeDeviceFirmwaresRequest,
  DeleteDevicesRequest,
  UnbindDevicesRequest,
  DeleteCloudStorageEventResponse,
  DescribeCloudStorageTimeResponse,
  GetPositionSpaceListRequest,
  DescribeGatewaySubProductsResponse,
  GetDeviceListResponse,
  DescribeCloudStorageMultiThumbnailResponse,
  BindProductInfo,
  DescribeFreeCloudStorageNumRequest,
  DescribeDevicePositionListRequest,
  InvokeExternalSourceAIServiceTaskResponse,
  CreateStudioProductRequest,
  TransferCloudStorageRequest,
  FenceAlarmPoint,
  DescribeFirmwareRequest,
  DescribeCloudStorageAIServiceCallbackResponse,
  ListTopicPolicyResponse,
  GenSingleDeviceSignatureOfPublicResponse,
  FenceBindDeviceItem,
  DescribeBatchProductionResponse,
  DescribeProductCloudStorageAIServiceResponse,
  DescribeLoRaFrequencyRequest,
  DeleteCloudStorageEventRequest,
  SearchPositionSpaceRequest,
  BindDevicesResponse,
  CallDeviceActionSyncResponse,
  CreateLoRaGatewayRequest,
  ModifyTopicRuleRequest,
  DescribeFenceBindListResponse,
  TransferTWeCallDeviceRequest,
  PackageConsumeTask,
  UnbindProductsRequest,
  CreateCloudStorageAIServiceRequest,
  DescribeDeviceLocationSolveResponse,
  DescribeStudioProductResponse,
  CreateIotVideoCloudStorageResponse,
  DescribePackageConsumeTaskResponse,
  CheckFirmwareUpdateRequest,
  RemoveUserByRoomIdFromTRTCRequest,
  CloudStorageUserInfo,
  ModifyPositionSpaceResponse,
  ModifyCloudStorageAIServiceCallbackResponse,
  PositionItem,
  CreateFenceBindResponse,
  DescribeBindedProductsResponse,
  LoRaGatewayLocation,
  ModifyTopicRuleResponse,
  DescribeBatchProductionRequest,
  DescribeCloudStorageAIServiceTaskResponse,
  PublishRRPCMessageResponse,
  CloudStorageEvent,
  DescribeInstanceResponse,
  GetLoRaGatewayListRequest,
  DescribeProjectRequest,
  UploadFirmwareResponse,
  ModifyTopicPolicyRequest,
  DeleteTopicRuleRequest,
  CreateLoRaGatewayResponse,
  GetBatchProductionsListRequest,
  DescribeDeviceBindGatewayResponse,
  ControlDeviceDataResponse,
  EventHistoryItem,
  CreatePositionSpaceResponse,
  ResetCloudStorageEventResponse,
  DescribeCloudStorageAIServiceTasksResponse,
  DeletePositionSpaceResponse,
  DescribeActivateDeviceResponse,
  ResetTWeCallDeviceResponse,
  AppDeviceInfo,
  DescribeCloudStorageResponse,
  DescribeCloudStorageStreamDataRequest,
  DirectBindDeviceInFamilyRequest,
  ProjectEntryEx,
  PublishMessageResponse,
  SearchKeyword,
  DescribeModelDefinitionRequest,
  DisableTopicRuleRequest,
  ActivateTWeCallLicenseRequest,
  CreateTopicRuleResponse,
  DescribeDeviceDataResponse,
  DescribePositionFenceListRequest,
  InvokeCloudStorageAIServiceTaskRequest,
  CreatePositionSpaceRequest,
  DescribeCloudStorageEventsWithAITasksRequest,
  DismissRoomByStrRoomIdFromTRTCRequest,
  CloudStorageTimeData,
  DescribeDeviceLocationSolveRequest,
  DescribeVideoLicenseRequest,
  DescribeCloudStorageAIServiceResponse,
  AssignTWeCallLicenseRequest,
  PackageInfo,
  DeleteDevicesResponse,
  ModifyStudioProductResponse,
  BindDevicesRequest,
  DescribePackageConsumeTaskRequest,
  DismissRoomByStrRoomIdFromTRTCResponse,
  DescribeFirmwareUpdateStatusResponse,
  PublishFirmwareUpdateMessageResponse,
  DeviceFirmwareInfo,
  CallDeviceActionSyncRequest,
  ProductDevicesPositionItem,
  ResetCloudStorageAIServiceResponse,
  InvokeCloudStorageAIServiceTaskResponse,
  ModifyFenceBindResponse,
  DescribeGatewayBindDevicesResponse,
  DeletePositionFenceResponse,
  GetAuthMiniProgramAppListResponse,
  UpdateDeviceTWeCallAuthorizeStatusResponse,
  ModifyProductCloudStorageAIServiceResponse,
  DevicePositionItem,
  GetDeviceLocationHistoryRequest,
  DeletePositionSpaceRequest,
  DescribeActivateDeviceRequest,
  CreateProjectRequest,
  CreateCloudStorageAIServiceResponse,
  DeviceDataHistoryItem,
  GetTWeCallActiveStatusResponse,
  PauseTWeCallDeviceResponse,
  BatchProductionInfo,
  DeleteDeviceRequest,
  GetProjectListResponse,
  ListFirmwaresResponse,
  ReleaseStudioProductResponse,
  DescribeFirmwareResponse,
  DescribePackageConsumeTasksResponse,
  UnbindProductsResponse,
  DescribeTopicPolicyResponse,
  LoRaFrequencyEntry,
  DescribeDeviceFirmWareResponse,
  RegisteredDeviceTypeInfo,
  ThumbnailURLInfoList,
  DescribeFenceEventListResponse,
  LicenseServiceNumInfo,
  TRTCParams,
  ModifyCloudStorageAIServiceRequest,
  GetStudioProductListRequest,
  DescribeFirmwareTaskResponse,
  DisableTopicRuleResponse,
  TopicRuleInfo,
  DescribeCloudStorageAIServiceTasksRequest,
  ListFirmwaresRequest,
  PublishMessageRequest,
  PositionFenceItem,
  VideoLicenseEntity,
  GetCOSURLResponse,
  ReleaseStudioProductRequest,
  SearchPositionSpaceResponse,
  GenerateCloudStorageAIServiceTaskFileURLResponse,
  ActivateDeviceInfo,
  ResetTWeCallDeviceRequest,
  CallDeviceActionAsyncRequest,
  CallDeviceActionAsyncResponse,
  GetPositionSpaceListResponse,
  CreatePositionFenceResponse,
  DescribeTopicRuleResponse,
  UpdateFirmwareRequest,
  DeviceSignatureInfo,
  TWeCallInfo,
  DescribeDeviceRequest,
  CamTag,
  WXDeviceInfo,
  CloudStorageEventWithAITasks,
  CreateDeviceChannelRequest,
  DescribeDevicePackagesResponse,
  DescribeGatewaySubDeviceListResponse,
  SearchStudioProductResponse,
  DescribeVideoLicenseResponse,
  DescribePackageConsumeTasksRequest,
  GetFamilyDeviceUserListResponse,
  DeleteLoRaGatewayResponse,
  AssignTWeCallLicenseResponse,
  LoRaGatewayItem,
  ModifyLoRaFrequencyRequest,
  CreateLoRaFrequencyResponse,
  EnableTopicRuleResponse,
  GetGatewaySubDeviceListRequest,
  SearchStudioProductRequest,
  GenSingleDeviceSignatureOfPublicRequest,
  BindProductsResponse,
  DescribeGatewayBindDevicesRequest,
  DescribeGatewaySubProductsRequest,
  CreateExternalSourceAIServiceTaskResponse,
  BindProductsRequest,
  ModifyLoRaGatewayResponse,
  DescribeCloudStorageAIServiceRequest,
  DescribeCloudStorageOrderResponse,
  DescribeActivateLicenseServiceRequest,
  CreateTRTCSignaturesWithRoomIdResponse,
  DescribeCloudStorageEventsRequest,
  DeviceInfo,
  DescribeInstanceRequest,
  ResetCloudStorageRequest,
  DeleteProjectRequest,
  CloudStoragePackageInfo,
  DevicesItem,
  UpdateDevicesEnableStateResponse,
  GenerateSignedVideoURLRequest,
  ModifyPositionFenceRequest,
  ModifySpacePropertyRequest,
  DeleteTopicRuleResponse,
  ModifyModelDefinitionRequest,
  TransferCloudStorageResponse,
  CreateStudioProductResponse,
  UpdateFirmwareResponse,
  ModifyStudioProductRequest,
  CreateBatchProductionRequest,
  GetTopicRuleListResponse,
  CancelAssignTWeCallLicenseRequest,
  DescribeCloudStoragePackageConsumeStatsResponse,
  ListEventHistoryRequest,
  WXIoTDeviceInfo,
  SearchTopicRuleRequest,
  DescribeDeviceDataRequest,
  FenceBindProductItem,
  PublishRRPCMessageRequest,
  DescribePositionFenceListResponse,
  DescribeCloudStorageMultiThumbnailRequest,
  DescribeFirmwareUpdateStatusRequest,
  DescribeDevicePositionListResponse,
  DescribeProjectResponse,
  DeviceData,
  ProductEntry,
  BindDeviceInfo,
  CloudStorageAIServiceTask,
  ListTopicPolicyRequest,
  DeleteLoRaFrequencyRequest,
  InvokeExternalSourceAIServiceTaskRequest,
  DescribeProductCloudStorageAIServiceRequest,
  DeleteLoRaGatewayRequest,
  ModifyTopicPolicyResponse,
  DescribeCloudStorageStreamDataResponse,
  TransferTWeCallDeviceResponse,
  DescribeTopicRuleRequest,
  ModifyCloudStorageAIServiceCallbackRequest,
  GetWechatDeviceTicketResponse,
  ResumeWeCallDeviceResponse,
  TopicRulePayload,
  ResetCloudStorageResponse,
  FirmwareInfo,
  ResumeWeCallDeviceRequest,
  GetCOSURLRequest,
  CreateFenceBindRequest,
  AuthMiniProgramAppInfo,
  FamilySubDevice,
  UploadFirmwareRequest,
  GetDeviceLocationHistoryResponse,
  ModifyFenceBindRequest,
  GetLoRaGatewayListResponse,
  DirectBindDeviceInFamilyResponse,
  TopicRule,
  DescribeCloudStoragePackageConsumeStatsRequest,
  DeleteFenceBindResponse,
  PublishBroadcastMessageResponse,
  DescribeFenceBindListRequest,
  PositionSpaceInfo,
  CreateDeviceChannelResponse,
  CreateTopicRuleRequest,
  CreateTopicPolicyRequest,
  CancelAssignTWeCallLicenseResponse,
  DescribeCloudStorageEventsResponse,
  Filter,
  DescribeBindedProductsRequest,
  CreateFreeCloudStorageRequest,
  DescribeLoRaFrequencyResponse,
  CreateCloudStorageAIServiceTaskResponse,
  DescribeCloudStorageDateResponse,
  DescribeFreeCloudStorageNumResponse,
  CloudStorageTimeInfo,
  CreateIotVideoCloudStorageRequest,
  GenerateCloudStorageAIServiceTaskFileURLRequest,
  BindCloudStorageUserResponse,
  DeleteTopicPolicyResponse,
  DeviceActivationDetail,
  UnbindDevicesResponse,
  CreateBatchProductionResponse,
  GetTopicRuleListRequest,
  DeleteStudioProductRequest,
  GetDeviceSumStatisticsRequest,
  DescribeCloudStorageAIServiceCallbackRequest,
  DescribeCloudStorageRequest,
  GenerateSignedVideoURLResponse,
  CreatePositionFenceRequest,
  DescribeCloudStorageThumbnailResponse,
  PublishFirmwareUpdateMessageRequest,
  UpdateDevicesEnableStateRequest,
  ResetCloudStorageAIServiceRequest,
  TWeCallCategoryPkgInfo,
  ModifyModelDefinitionResponse,
  RemoveUserByRoomIdFromTRTCResponse,
  ModifyLoRaGatewayRequest,
  DescribeCloudStorageTimeRequest,
  EnableTopicRuleRequest,
  GetTWeCallPkgListResponse,
  DescribeFirmwareTaskRequest,
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
   * 本接口（GetCOSURL）用于获取固件COS存储的上传请求URL地址
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
   * 根据设备信息拉取有效套餐列表
   */
  async DescribeDevicePackages(
    req: DescribeDevicePackagesRequest,
    cb?: (error: string, rep: DescribeDevicePackagesResponse) => void
  ): Promise<DescribeDevicePackagesResponse> {
    return this.request("DescribeDevicePackages", req, cb)
  }

  /**
   * 本接口（DescribeFirmwareUpdateStatus）用于查询设备固件升级状态及进度。
   */
  async DescribeFirmwareUpdateStatus(
    req: DescribeFirmwareUpdateStatusRequest,
    cb?: (error: string, rep: DescribeFirmwareUpdateStatusResponse) => void
  ): Promise<DescribeFirmwareUpdateStatusResponse> {
    return this.request("DescribeFirmwareUpdateStatus", req, cb)
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
   * 拉取云存事件列表
   */
  async DescribeCloudStorageEventsWithAITasks(
    req: DescribeCloudStorageEventsWithAITasksRequest,
    cb?: (error: string, rep: DescribeCloudStorageEventsWithAITasksResponse) => void
  ): Promise<DescribeCloudStorageEventsWithAITasksResponse> {
    return this.request("DescribeCloudStorageEventsWithAITasks", req, cb)
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
   * 开通设备云存AI分析服务
   */
  async CreateCloudStorageAIService(
    req: CreateCloudStorageAIServiceRequest,
    cb?: (error: string, rep: CreateCloudStorageAIServiceResponse) => void
  ): Promise<CreateCloudStorageAIServiceResponse> {
    return this.request("CreateCloudStorageAIService", req, cb)
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
   * 获取实时位置解析
   */
  async DescribeDeviceLocationSolve(
    req: DescribeDeviceLocationSolveRequest,
    cb?: (error: string, rep: DescribeDeviceLocationSolveResponse) => void
  ): Promise<DescribeDeviceLocationSolveResponse> {
    return this.request("DescribeDeviceLocationSolve", req, cb)
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
   * 获取设备的历史事件
   */
  async ListEventHistory(
    req: ListEventHistoryRequest,
    cb?: (error: string, rep: ListEventHistoryResponse) => void
  ): Promise<ListEventHistoryResponse> {
    return this.request("ListEventHistory", req, cb)
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
   * 列出量产数据列表信息。
   */
  async GetBatchProductionsList(
    req: GetBatchProductionsListRequest,
    cb?: (error: string, rep: GetBatchProductionsListResponse) => void
  ): Promise<GetBatchProductionsListResponse> {
    return this.request("GetBatchProductionsList", req, cb)
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
   * 创建TRTC通话参数
   */
  async CreateTRTCSignaturesWithRoomId(
    req: CreateTRTCSignaturesWithRoomIdRequest,
    cb?: (error: string, rep: CreateTRTCSignaturesWithRoomIdResponse) => void
  ): Promise<CreateTRTCSignaturesWithRoomIdResponse> {
    return this.request("CreateTRTCSignaturesWithRoomId", req, cb)
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
   * 查询指定产品的云存 AI 服务开通状态
   */
  async DescribeProductCloudStorageAIService(
    req: DescribeProductCloudStorageAIServiceRequest,
    cb?: (error: string, rep: DescribeProductCloudStorageAIServiceResponse) => void
  ): Promise<DescribeProductCloudStorageAIServiceResponse> {
    return this.request("DescribeProductCloudStorageAIService", req, cb)
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
   * 获取云存套餐包消耗统计
   */
  async DescribeCloudStoragePackageConsumeStats(
    req: DescribeCloudStoragePackageConsumeStatsRequest,
    cb?: (error: string, rep: DescribeCloudStoragePackageConsumeStatsResponse) => void
  ): Promise<DescribeCloudStoragePackageConsumeStatsResponse> {
    return this.request("DescribeCloudStoragePackageConsumeStats", req, cb)
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
   * 获取设备激活详情
   */
  async DescribeActivateDevice(
    req: DescribeActivateDeviceRequest,
    cb?: (error: string, rep: DescribeActivateDeviceResponse) => void
  ): Promise<DescribeActivateDeviceResponse> {
    return this.request("DescribeActivateDevice", req, cb)
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
   * 获取围栏告警事件列表
   */
  async DescribeFenceEventList(
    req: DescribeFenceEventListRequest,
    cb?: (error: string, rep: DescribeFenceEventListResponse) => void
  ): Promise<DescribeFenceEventListResponse> {
    return this.request("DescribeFenceEventList", req, cb)
  }

  /**
   * 开通云存服务
   */
  async CreateIotVideoCloudStorage(
    req: CreateIotVideoCloudStorageRequest,
    cb?: (error: string, rep: CreateIotVideoCloudStorageResponse) => void
  ): Promise<CreateIotVideoCloudStorageResponse> {
    return this.request("CreateIotVideoCloudStorage", req, cb)
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
   * 查询指定设备的云存 AI 服务开通状态与参数配置
   */
  async DescribeCloudStorageAIService(
    req: DescribeCloudStorageAIServiceRequest,
    cb?: (error: string, rep: DescribeCloudStorageAIServiceResponse) => void
  ): Promise<DescribeCloudStorageAIServiceResponse> {
    return this.request("DescribeCloudStorageAIService", req, cb)
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
   * 删除  LoRa 网关的接口
   */
  async DeleteLoRaGateway(
    req: DeleteLoRaGatewayRequest,
    cb?: (error: string, rep: DeleteLoRaGatewayResponse) => void
  ): Promise<DeleteLoRaGatewayResponse> {
    return this.request("DeleteLoRaGateway", req, cb)
  }

  /**
   * 取消分配
   */
  async CancelAssignTWeCallLicense(
    req: CancelAssignTWeCallLicenseRequest,
    cb?: (error: string, rep: CancelAssignTWeCallLicenseResponse) => void
  ): Promise<CancelAssignTWeCallLicenseResponse> {
    return this.request("CancelAssignTWeCallLicense", req, cb)
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
   * 用于查询视频激活码统计概览
   */
  async DescribeVideoLicense(
    req: DescribeVideoLicenseRequest,
    cb?: (error: string, rep: DescribeVideoLicenseResponse) => void
  ): Promise<DescribeVideoLicenseResponse> {
    return this.request("DescribeVideoLicense", req, cb)
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
   * 继承云存用户
   */
  async InheritCloudStorageUser(
    req: InheritCloudStorageUserRequest,
    cb?: (error: string, rep: InheritCloudStorageUserResponse) => void
  ): Promise<InheritCloudStorageUserResponse> {
    return this.request("InheritCloudStorageUser", req, cb)
  }

  /**
   * 转移设备
   */
  async TransferTWeCallDevice(
    req: TransferTWeCallDeviceRequest,
    cb?: (error: string, rep: TransferTWeCallDeviceResponse) => void
  ): Promise<TransferTWeCallDeviceResponse> {
    return this.request("TransferTWeCallDevice", req, cb)
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
   * 本接口（PublishFirmwareUpdateMessage）用于用户确认升级后，云端向设备发起固件升级请求。
   */
  async PublishFirmwareUpdateMessage(
    req: PublishFirmwareUpdateMessageRequest,
    cb?: (error: string, rep: PublishFirmwareUpdateMessageResponse) => void
  ): Promise<PublishFirmwareUpdateMessageResponse> {
    return this.request("PublishFirmwareUpdateMessage", req, cb)
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
   * 无
   */
  async GenSingleDeviceSignatureOfPublic(
    req: GenSingleDeviceSignatureOfPublicRequest,
    cb?: (error: string, rep: GenSingleDeviceSignatureOfPublicResponse) => void
  ): Promise<GenSingleDeviceSignatureOfPublicResponse> {
    return this.request("GenSingleDeviceSignatureOfPublic", req, cb)
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
   * 创建外部视频 AI 分析任务
   */
  async InvokeExternalSourceAIServiceTask(
    req: InvokeExternalSourceAIServiceTaskRequest,
    cb?: (error: string, rep: InvokeExternalSourceAIServiceTaskResponse) => void
  ): Promise<InvokeExternalSourceAIServiceTaskResponse> {
    return this.request("InvokeExternalSourceAIServiceTask", req, cb)
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
   * 更新位置空间
   */
  async ModifyPositionSpace(
    req: ModifyPositionSpaceRequest,
    cb?: (error: string, rep: ModifyPositionSpaceResponse) => void
  ): Promise<ModifyPositionSpaceResponse> {
    return this.request("ModifyPositionSpace", req, cb)
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
   * 获取规则列表
   */
  async GetTopicRuleList(
    req: GetTopicRuleListRequest,
    cb?: (error: string, rep: GetTopicRuleListResponse) => void
  ): Promise<GetTopicRuleListResponse> {
    return this.request("GetTopicRuleList", req, cb)
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
   * 重置指定设备的云存 AI 服务
   */
  async ResetCloudStorageAIService(
    req: ResetCloudStorageAIServiceRequest,
    cb?: (error: string, rep: ResetCloudStorageAIServiceResponse) => void
  ): Promise<ResetCloudStorageAIServiceResponse> {
    return this.request("ResetCloudStorageAIService", req, cb)
  }

  /**
   * 查询微信设备授权票据
   */
  async GetWechatDeviceTicket(
    req: GetWechatDeviceTicketRequest,
    cb?: (error: string, rep: GetWechatDeviceTicketResponse) => void
  ): Promise<GetWechatDeviceTicketResponse> {
    return this.request("GetWechatDeviceTicket", req, cb)
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
   * 提供给用户异步调用设备行为的能力
   */
  async CallDeviceActionAsync(
    req: CallDeviceActionAsyncRequest,
    cb?: (error: string, rep: CallDeviceActionAsyncResponse) => void
  ): Promise<CallDeviceActionAsyncResponse> {
    return this.request("CallDeviceActionAsync", req, cb)
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
   * 拉取设备统计汇总数据
   */
  async GetDeviceSumStatistics(
    req: GetDeviceSumStatisticsRequest,
    cb?: (error: string, rep: GetDeviceSumStatisticsResponse) => void
  ): Promise<GetDeviceSumStatisticsResponse> {
    return this.request("GetDeviceSumStatistics", req, cb)
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
     * 发布广播消息、发布RRPC消息属于早期服务，目前已停止维护，需要从官网下线。

发布广播消息
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
   * 获取位置空间列表
   */
  async GetPositionSpaceList(
    req: GetPositionSpaceListRequest,
    cb?: (error: string, rep: GetPositionSpaceListResponse) => void
  ): Promise<GetPositionSpaceListResponse> {
    return this.request("GetPositionSpaceList", req, cb)
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
   * 解散TRTC房间
   */
  async DismissRoomByStrRoomIdFromTRTC(
    req: DismissRoomByStrRoomIdFromTRTCRequest,
    cb?: (error: string, rep: DismissRoomByStrRoomIdFromTRTCResponse) => void
  ): Promise<DismissRoomByStrRoomIdFromTRTCResponse> {
    return this.request("DismissRoomByStrRoomIdFromTRTC", req, cb)
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
   * 修改指定产品的云存 AI 服务开通状态
   */
  async ModifyProductCloudStorageAIService(
    req: ModifyProductCloudStorageAIServiceRequest,
    cb?: (error: string, rep: ModifyProductCloudStorageAIServiceResponse) => void
  ): Promise<ModifyProductCloudStorageAIServiceResponse> {
    return this.request("ModifyProductCloudStorageAIService", req, cb)
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
     * 发布广播消息、发布RRPC消息属于早期服务，目前已停止维护，需要从官网下线。

下发RRPC消息
     */
  async PublishRRPCMessage(
    req: PublishRRPCMessageRequest,
    cb?: (error: string, rep: PublishRRPCMessageResponse) => void
  ): Promise<PublishRRPCMessageResponse> {
    return this.request("PublishRRPCMessage", req, cb)
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
   * 本接口（UploadFirmware）用于创建设备固件版本信息，在平台用于固件版本升级、固件资源下发等。
   */
  async UploadFirmware(
    req: UploadFirmwareRequest,
    cb?: (error: string, rep: UploadFirmwareResponse) => void
  ): Promise<UploadFirmwareResponse> {
    return this.request("UploadFirmware", req, cb)
  }

  /**
   * 同步执行设备云存 AI 分析任务
   */
  async InvokeCloudStorageAIServiceTask(
    req: InvokeCloudStorageAIServiceTaskRequest,
    cb?: (error: string, rep: InvokeCloudStorageAIServiceTaskResponse) => void
  ): Promise<InvokeCloudStorageAIServiceTaskResponse> {
    return this.request("InvokeCloudStorageAIServiceTask", req, cb)
  }

  /**
   * 获取增值服务激活码详情
   */
  async DescribeActivateLicenseService(
    req: DescribeActivateLicenseServiceRequest,
    cb?: (error: string, rep: DescribeActivateLicenseServiceResponse) => void
  ): Promise<DescribeActivateLicenseServiceResponse> {
    return this.request("DescribeActivateLicenseService", req, cb)
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
     * 微信VOIP功能调整下线

查询TWeCall包列表
     */
  async GetTWeCallPkgList(
    req: GetTWeCallPkgListRequest,
    cb?: (error: string, rep: GetTWeCallPkgListResponse) => void
  ): Promise<GetTWeCallPkgListResponse> {
    return this.request("GetTWeCallPkgList", req, cb)
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
   * TRTC操作，将用户从房间移出
   */
  async RemoveUserByRoomIdFromTRTC(
    req: RemoveUserByRoomIdFromTRTCRequest,
    cb?: (error: string, rep: RemoveUserByRoomIdFromTRTCResponse) => void
  ): Promise<RemoveUserByRoomIdFromTRTCResponse> {
    return this.request("RemoveUserByRoomIdFromTRTC", req, cb)
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
     * 微信VOIP功能调整下线

分配License
     */
  async AssignTWeCallLicense(
    req: AssignTWeCallLicenseRequest,
    cb?: (error: string, rep: AssignTWeCallLicenseResponse) => void
  ): Promise<AssignTWeCallLicenseResponse> {
    return this.request("AssignTWeCallLicense", req, cb)
  }

  /**
   * 重置设备
   */
  async ResetTWeCallDevice(
    req: ResetTWeCallDeviceRequest,
    cb?: (error: string, rep: ResetTWeCallDeviceResponse) => void
  ): Promise<ResetTWeCallDeviceResponse> {
    return this.request("ResetTWeCallDevice", req, cb)
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
   * 查询激活状态
   */
  async GetTWeCallActiveStatus(
    req: GetTWeCallActiveStatusRequest,
    cb?: (error: string, rep: GetTWeCallActiveStatusResponse) => void
  ): Promise<GetTWeCallActiveStatusResponse> {
    return this.request("GetTWeCallActiveStatus", req, cb)
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
   * 查询固件信息
   */
  async DescribeFirmware(
    req: DescribeFirmwareRequest,
    cb?: (error: string, rep: DescribeFirmwareResponse) => void
  ): Promise<DescribeFirmwareResponse> {
    return this.request("DescribeFirmware", req, cb)
  }

  /**
   * 获取设备当前固件信息
   */
  async DescribeDeviceFirmwares(
    req: DescribeDeviceFirmwaresRequest,
    cb?: (error: string, rep: DescribeDeviceFirmwaresResponse) => void
  ): Promise<DescribeDeviceFirmwaresResponse> {
    return this.request("DescribeDeviceFirmwares", req, cb)
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
   * 创建设备云存 AI 分析任务
   */
  async CreateCloudStorageAIServiceTask(
    req: CreateCloudStorageAIServiceTaskRequest,
    cb?: (error: string, rep: CreateCloudStorageAIServiceTaskResponse) => void
  ): Promise<CreateCloudStorageAIServiceTaskResponse> {
    return this.request("CreateCloudStorageAIServiceTask", req, cb)
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
   * 修改指定设备的云存 AI 服务参数配置
   */
  async ModifyCloudStorageAIService(
    req: ModifyCloudStorageAIServiceRequest,
    cb?: (error: string, rep: ModifyCloudStorageAIServiceResponse) => void
  ): Promise<ModifyCloudStorageAIServiceResponse> {
    return this.request("ModifyCloudStorageAIService", req, cb)
  }

  /**
   * 恢复设备
   */
  async ResumeWeCallDevice(
    req: ResumeWeCallDeviceRequest,
    cb?: (error: string, rep: ResumeWeCallDeviceResponse) => void
  ): Promise<ResumeWeCallDeviceResponse> {
    return this.request("ResumeWeCallDevice", req, cb)
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
   * 绑定云存用户
   */
  async BindCloudStorageUser(
    req: BindCloudStorageUserRequest,
    cb?: (error: string, rep: BindCloudStorageUserResponse) => void
  ): Promise<BindCloudStorageUserResponse> {
    return this.request("BindCloudStorageUser", req, cb)
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
   * 获取量产详情信息。
   */
  async DescribeBatchProduction(
    req: DescribeBatchProductionRequest,
    cb?: (error: string, rep: DescribeBatchProductionResponse) => void
  ): Promise<DescribeBatchProductionResponse> {
    return this.request("DescribeBatchProduction", req, cb)
  }

  /**
   * 创建外部视频 AI 分析任务
   */
  async CreateExternalSourceAIServiceTask(
    req: CreateExternalSourceAIServiceTaskRequest,
    cb?: (error: string, rep: CreateExternalSourceAIServiceTaskResponse) => void
  ): Promise<CreateExternalSourceAIServiceTaskResponse> {
    return this.request("CreateExternalSourceAIServiceTask", req, cb)
  }

  /**
   * 激活
   */
  async ActivateTWeCallLicense(
    req: ActivateTWeCallLicenseRequest,
    cb?: (error: string, rep: ActivateTWeCallLicenseResponse) => void
  ): Promise<ActivateTWeCallLicenseResponse> {
    return this.request("ActivateTWeCallLicense", req, cb)
  }

  /**
   * 更新用户对设备的TweCall授权状态
   */
  async UpdateDeviceTWeCallAuthorizeStatus(
    req: UpdateDeviceTWeCallAuthorizeStatusRequest,
    cb?: (error: string, rep: UpdateDeviceTWeCallAuthorizeStatusResponse) => void
  ): Promise<UpdateDeviceTWeCallAuthorizeStatusResponse> {
    return this.request("UpdateDeviceTWeCallAuthorizeStatus", req, cb)
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
   * 批量删除设备
   */
  async DeleteDevices(
    req: DeleteDevicesRequest,
    cb?: (error: string, rep: DeleteDevicesResponse) => void
  ): Promise<DeleteDevicesResponse> {
    return this.request("DeleteDevices", req, cb)
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
   * 本接口（CheckFirmwareUpdate）用于查询设备可升级固件版本
   */
  async CheckFirmwareUpdate(
    req: CheckFirmwareUpdateRequest,
    cb?: (error: string, rep: CheckFirmwareUpdateResponse) => void
  ): Promise<CheckFirmwareUpdateResponse> {
    return this.request("CheckFirmwareUpdate", req, cb)
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
   * 获取云存 AI 分析任务输出文件的下载地址
   */
  async GenerateCloudStorageAIServiceTaskFileURL(
    req: GenerateCloudStorageAIServiceTaskFileURLRequest,
    cb?: (error: string, rep: GenerateCloudStorageAIServiceTaskFileURLResponse) => void
  ): Promise<GenerateCloudStorageAIServiceTaskFileURLResponse> {
    return this.request("GenerateCloudStorageAIServiceTaskFileURL", req, cb)
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
   * 本接口（PublishMessage）用于使用自定义透传协议进行设备远控
   */
  async PublishMessage(
    req: PublishMessageRequest,
    cb?: (error: string, rep: PublishMessageResponse) => void
  ): Promise<PublishMessageResponse> {
    return this.request("PublishMessage", req, cb)
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
   * 查询云存AI分析回调配置
   */
  async DescribeCloudStorageAIServiceCallback(
    req: DescribeCloudStorageAIServiceCallbackRequest,
    cb?: (error: string, rep: DescribeCloudStorageAIServiceCallbackResponse) => void
  ): Promise<DescribeCloudStorageAIServiceCallbackResponse> {
    return this.request("DescribeCloudStorageAIServiceCallback", req, cb)
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
   * 查询指定的云存 AI 分析任务
   */
  async DescribeCloudStorageAIServiceTask(
    req: DescribeCloudStorageAIServiceTaskRequest,
    cb?: (error: string, rep: DescribeCloudStorageAIServiceTaskResponse) => void
  ): Promise<DescribeCloudStorageAIServiceTaskResponse> {
    return this.request("DescribeCloudStorageAIServiceTask", req, cb)
  }

  /**
   * 公共实例过期时间 0001-01-01T00:00:00Z，公共实例是永久有效
   */
  async DescribeInstance(
    req: DescribeInstanceRequest,
    cb?: (error: string, rep: DescribeInstanceResponse) => void
  ): Promise<DescribeInstanceResponse> {
    return this.request("DescribeInstance", req, cb)
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
   * 暂停设备
   */
  async PauseTWeCallDevice(
    req: PauseTWeCallDeviceRequest,
    cb?: (error: string, rep: PauseTWeCallDeviceResponse) => void
  ): Promise<PauseTWeCallDeviceResponse> {
    return this.request("PauseTWeCallDevice", req, cb)
  }

  /**
   * 查询小程序列表
   */
  async GetAuthMiniProgramAppList(
    req: GetAuthMiniProgramAppListRequest,
    cb?: (error: string, rep: GetAuthMiniProgramAppListResponse) => void
  ): Promise<GetAuthMiniProgramAppListResponse> {
    return this.request("GetAuthMiniProgramAppList", req, cb)
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
   * 修改云存AI分析回调配置
   */
  async ModifyCloudStorageAIServiceCallback(
    req: ModifyCloudStorageAIServiceCallbackRequest,
    cb?: (error: string, rep: ModifyCloudStorageAIServiceCallbackResponse) => void
  ): Promise<ModifyCloudStorageAIServiceCallbackResponse> {
    return this.request("ModifyCloudStorageAIServiceCallback", req, cb)
  }

  /**
   * 查询指定设备的云存 AI 分析任务列表
   */
  async DescribeCloudStorageAIServiceTasks(
    req: DescribeCloudStorageAIServiceTasksRequest,
    cb?: (error: string, rep: DescribeCloudStorageAIServiceTasksResponse) => void
  ): Promise<DescribeCloudStorageAIServiceTasksResponse> {
    return this.request("DescribeCloudStorageAIServiceTasks", req, cb)
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
   * 获取设备固件信息
   */
  async DescribeDeviceFirmWare(
    req: DescribeDeviceFirmWareRequest,
    cb?: (error: string, rep: DescribeDeviceFirmWareResponse) => void
  ): Promise<DescribeDeviceFirmWareResponse> {
    return this.request("DescribeDeviceFirmWare", req, cb)
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
