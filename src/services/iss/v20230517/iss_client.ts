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
  UpdateDeviceStatusRequest,
  ListDevicesRequest,
  PhoneCallAIResultInfo,
  DeleteRecordBackupPlanResponse,
  DescribeDeviceChannelData,
  ListOrganizationChannelsRequest,
  DescribeDevicePresetData,
  ListSubTasksRequest,
  DescribeGatewayMonitor,
  AddRecordBackupPlanResponse,
  DescribeCNAMERequest,
  DescribeVideoDownloadUrlData,
  ControlRecordTimelineRequest,
  DeleteOrganizationRequest,
  OperTimeSlot,
  SetForbidPlayChannelsRequest,
  SubTaskData,
  DescribeCNAMEResponse,
  ISAPIOutputData,
  UpdateOrganizationResponse,
  DescribeDeviceData,
  ListAITasksResponse,
  AIConfig,
  UpdateDeviceOrganizationRequest,
  UpdateDeviceOrganizationResponse,
  AddOrganizationResponse,
  BatchOperateDeviceResponse,
  DescribeDeviceRegionResponse,
  ListRecordPlanChannelsData,
  DescribeVideoBitRateResponse,
  DescribeDomainResponse,
  DescribeRecordRetrieveTaskData,
  DescribeRecordBackupTemplateData,
  ControlDeviceStreamResponse,
  DeleteRecordRetrieveTaskResponse,
  DescribeUserDeviceResponse,
  DeleteRecordPlanResponse,
  DescribeOrganizationResponse,
  UpgradeGatewayResponse,
  UpdateUserDeviceRequest,
  DescribeDeviceChannelResponse,
  AddRecordBackupTemplateRequest,
  DescribeVideoBitRateRequest,
  DeleteAITaskRequest,
  ChefHatAIResultInfo,
  UpdateGatewayResponse,
  DescribeRecordRetrieveTaskRequest,
  DescribeAITaskRequest,
  RefreshDeviceChannelResponse,
  DeleteOrganizationResponse,
  PetAIResultInfo,
  DescribeRecordTemplateRequest,
  DeleteRecordTemplateRequest,
  DescribeGatewayResponse,
  ListRecordBackupPlanDevicesData,
  TaskData,
  DescribeGatewayRequest,
  AddRecordBackupTemplateData,
  DeleteUserDeviceRequest,
  AddRecordPlanResponse,
  DescribeGatewayData,
  ListOrganizationChannelNumbersRequest,
  GatewayVersion,
  UpdateRecordBackupPlanModify,
  UpdateAITaskRequest,
  FaceMaskAIResultInfo,
  SmokingAIResultInfo,
  BaseAIResultInfo,
  DeleteDomainRequest,
  ListRecordRetrieveTasksRequest,
  DeleteRecordPlanRequest,
  AITaskResultInfo,
  DescribeStreamAuthData,
  AddRecordTemplateResponse,
  ListRecordPlansRequest,
  DescribeAITaskResultRequest,
  SnapshotConfig,
  ListSubTasksResponse,
  ListAITasksRequest,
  UpdateRecordPlanRequest,
  Location,
  AITemplates,
  DescribeOrganizationRequest,
  UpdateAITaskStatusResponse,
  ControlRecordResponse,
  UpdateDeviceData,
  AddRecordPlanRequest,
  ListRecordTemplatesRequest,
  DescribeOrganizationData,
  DescribeVideoDownloadUrlResponse,
  RecordPlanOptData,
  DescribeRecordPlanResponse,
  ListGatewaysData,
  CallISAPIRequest,
  AddRecordRetrieveTaskRequest,
  DescribeRecordPlanRequest,
  ControlDevicePresetResponse,
  ListRecordBackupPlansResponse,
  OrganizationChannelInfo,
  ChannelInfo,
  RecordRetrieveTaskChannelInfo,
  DescribeDomainRequest,
  BatchOperateDeviceData,
  RecordPlaybackUrl,
  ListSubTasksData,
  ListOrganizationChannelNumbersData,
  CallISAPIResponse,
  ListRecordPlanDevicesRequest,
  ListTasksResponse,
  AddStreamAuthResponse,
  ListDevicesResponse,
  AddStreamAuthData,
  DescribeGatewayMonitorRequest,
  DeleteGatewayRequest,
  ListDeviceInfo,
  LifeCycleData,
  ListOrganizationChannelNumbersResponse,
  ListGatewayDevicesResponse,
  DescribeDomainData,
  ListRecordBackupTemplatesResponse,
  ListRecordPlanChannelsResponse,
  CarAIResultInfo,
  DescribeRecordPlaybackUrlRequest,
  ListRecordPlansResponse,
  DescribeRecordTemplateResponse,
  DescribeAITaskResultResponse,
  ListRecordPlanDevicesResponse,
  DescribeDevicePresetResponse,
  UpdateRecordBackupPlanRequest,
  RecordTimeLine,
  DescribeGatewayVersionData,
  ControlRecordRequest,
  ControlDevicePTZResponse,
  ListRecordBackupPlansRequest,
  AddOrgData,
  AddUserDeviceRequest,
  ListRecordBackupPlanDevicesResponse,
  GatewayDevice,
  ControlDevicePTZRequest,
  DescribeRecordBackupPlanRequest,
  DescribeRecordBackupPlanResponse,
  DescribeDeviceChannelRequest,
  UpdateUserDeviceResponse,
  GatewaysData,
  ListGatewayDevicesData,
  ListForbidplayChannelsData,
  DescribeDevicePresetRequest,
  ListGatewaysResponse,
  AddRecordBackupPlanData,
  DescribeGatewayProtocolResponse,
  Timeline,
  ListAITaskData,
  UpdateRecordTemplateData,
  DescribeDomainRegionRequest,
  AddRecordTemplateRequest,
  DescribeGatewayProtocolRequest,
  AddAITaskRequest,
  DescribeGatewayProtocolData,
  QueryForbidPlayChannelListResponse,
  DescribeVideoDownloadUrlRequest,
  DescribeGatewayVersionResponse,
  ListGatewaysRequest,
  ListTasksRequest,
  DescribeGatewayVersionRequest,
  DescribeRecordSliceRequest,
  DescribeRecordBackupTemplateRequest,
  DescribeUserDeviceRequest,
  DescribeDeviceRegionRequest,
  RefreshDeviceChannelRequest,
  BodyAIResultInfo,
  DescribeRecordFileRequest,
  AddStreamAuthRequest,
  RecordTemplateTimeSections,
  BitRateInfo,
  PlayRecordRequest,
  UpdateRecordBackupTemplateModify,
  QueryForbidPlayChannelListRequest,
  PlateContent,
  UpgradeGatewayRequest,
  DescribeRecordFileResponse,
  ControlDevicePresetRequest,
  ControlDeviceStreamRequest,
  ListRecordRetrieveTasksResponse,
  RecordPlanBaseInfo,
  ListRecordBackupPlanDevicesRequest,
  DeleteDomainResponse,
  AddRecordRetrieveTaskResponse,
  DeleteRecordTemplateResponse,
  ListRecordPlanDevicesData,
  ListRecordBackupTemplatesData,
  ListRecordTemplatesResponse,
  DescribeAITaskResponse,
  UpdateRecordBackupTemplateResponse,
  ControlRecordTimelineResponse,
  AddRecordRetrieveTaskData,
  AITaskResultData,
  DeleteRecordRetrieveTaskRequest,
  DescribeRecordBackupPlanData,
  DescribeRecordSliceResponse,
  ChannelAttrInfo,
  UpdateRecordPlanResponse,
  DescribeTaskResponse,
  DescribeGatewayVersion,
  RecordRetrieveTaskDetailsInfo,
  DeleteRecordBackupPlanRequest,
  UpdateGatewayData,
  ListRecordBackupTemplatesRequest,
  AddAITaskResponse,
  DescribeDeviceRegion,
  RecordPlanChannelInfo,
  SetForbidPlayChannelsResponse,
  UpdateRecordTemplateRequest,
  DeleteRecordBackupTemplateRequest,
  ListGatewayDevicesRequest,
  DeleteAITaskResponse,
  DescribeVideoBitRateList,
  AddRecordBackupTemplateResponse,
  PlayRecordResponse,
  DescribeGatewayMonitorResponse,
  DescribeRecordBackupTemplateResponse,
  AddUserDeviceResponse,
  PlayRecordData,
  DeleteGatewayResponse,
  DescribeRecordPlaybackUrlResponse,
  UpdateRecordPlanData,
  DescribeTaskRequest,
  ListRecordPlanChannelsRequest,
  ListOrganizationChannelsResponse,
  UpdateOrganizationRequest,
  UpdateAITaskStatusRequest,
  AITaskInfo,
  UpdateGatewayRequest,
  UpdateAITaskResponse,
  DescribeRecordFileData,
  UpdateOrgData,
  DescribeDomainRegionResponse,
  BatchOperateDeviceRequest,
  ListOrganizationChannelsData,
  AddRecordBackupPlanRequest,
  ListTasksData,
  ControlDeviceStreamData,
  RecordSliceInfo,
  RecordTemplateInfo,
  UpdateRecordBackupTemplateRequest,
  UpdateDeviceStatusResponse,
  DeleteUserDeviceResponse,
  UpdateRecordBackupPlanResponse,
  DescribeDomainRegionData,
  AddOrganizationRequest,
  ChefClothAIResultInfo,
  DescribeStreamAuthResponse,
  ListRecordBackupPlanData,
  DeleteRecordBackupTemplateResponse,
  UpdateRecordTemplateResponse,
  DescribeRecordRetrieveTaskResponse,
  DescribeStreamAuthRequest,
  UpdateRecordBackupTemplateData,
  UpdateRecordBackupPlanData,
  AddDeviceData,
  SetForbidplayChannelParam,
} from "./iss_models"

/**
 * iss client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("iss.tencentcloudapi.com", "2023-05-17", clientConfig)
  }

  /**
   * 用于删除实时上云模板
   */
  async DeleteRecordTemplate(
    req: DeleteRecordTemplateRequest,
    cb?: (error: string, rep: DeleteRecordTemplateResponse) => void
  ): Promise<DeleteRecordTemplateResponse> {
    return this.request("DeleteRecordTemplate", req, cb)
  }

  /**
   * 用于启用/禁用设备，禁用后拒绝设备注册。
   */
  async UpdateDeviceStatus(
    req: UpdateDeviceStatusRequest,
    cb?: (error: string, rep: UpdateDeviceStatusResponse) => void
  ): Promise<UpdateDeviceStatusResponse> {
    return this.request("UpdateDeviceStatus", req, cb)
  }

  /**
   * 用于修改网关信息（支持对网关名称和描述的修改）。
   */
  async UpdateGateway(
    req: UpdateGatewayRequest,
    cb?: (error: string, rep: UpdateGatewayResponse) => void
  ): Promise<UpdateGatewayResponse> {
    return this.request("UpdateGateway", req, cb)
  }

  /**
   * 用于查询取回任务列表
   */
  async ListRecordRetrieveTasks(
    req?: ListRecordRetrieveTasksRequest,
    cb?: (error: string, rep: ListRecordRetrieveTasksResponse) => void
  ): Promise<ListRecordRetrieveTasksResponse> {
    return this.request("ListRecordRetrieveTasks", req, cb)
  }

  /**
   * 用于修改录像上云模板。
   */
  async UpdateRecordBackupTemplate(
    req: UpdateRecordBackupTemplateRequest,
    cb?: (error: string, rep: UpdateRecordBackupTemplateResponse) => void
  ): Promise<UpdateRecordBackupTemplateResponse> {
    return this.request("UpdateRecordBackupTemplate", req, cb)
  }

  /**
   * 用于删除已添加的设备。
   */
  async DeleteUserDevice(
    req: DeleteUserDeviceRequest,
    cb?: (error: string, rep: DeleteUserDeviceResponse) => void
  ): Promise<DeleteUserDeviceResponse> {
    return this.request("DeleteUserDevice", req, cb)
  }

  /**
   * 用于查询设备的通道。
   */
  async DescribeDeviceChannel(
    req: DescribeDeviceChannelRequest,
    cb?: (error: string, rep: DescribeDeviceChannelResponse) => void
  ): Promise<DescribeDeviceChannelResponse> {
    return this.request("DescribeDeviceChannel", req, cb)
  }

  /**
   * 用于删除录像上云模板。
   */
  async DeleteRecordBackupTemplate(
    req: DeleteRecordBackupTemplateRequest,
    cb?: (error: string, rep: DeleteRecordBackupTemplateResponse) => void
  ): Promise<DeleteRecordBackupTemplateResponse> {
    return this.request("DeleteRecordBackupTemplate", req, cb)
  }

  /**
   * 用于用户添加域名时，查询可以绑定的服务节点，结果为平台支持的所有服务节点。（注意：每个服务节点只能绑定一个域名）
   */
  async DescribeDomainRegion(
    req?: DescribeDomainRegionRequest,
    cb?: (error: string, rep: DescribeDomainRegionResponse) => void
  ): Promise<DescribeDomainRegionResponse> {
    return this.request("DescribeDomainRegion", req, cb)
  }

  /**
     * 平台支持将数据以TS切片的形式存入客户自有COS桶，该接口用于支持客户快捷查询切片信息列表
（注意：只支持标准存储类型的查询）
     */
  async DescribeRecordSlice(
    req: DescribeRecordSliceRequest,
    cb?: (error: string, rep: DescribeRecordSliceResponse) => void
  ): Promise<DescribeRecordSliceResponse> {
    return this.request("DescribeRecordSlice", req, cb)
  }

  /**
   * 用于查询网关接入协议。
   */
  async DescribeGatewayProtocol(
    req?: DescribeGatewayProtocolRequest,
    cb?: (error: string, rep: DescribeGatewayProtocolResponse) => void
  ): Promise<DescribeGatewayProtocolResponse> {
    return this.request("DescribeGatewayProtocol", req, cb)
  }

  /**
   * 用于查询录像上云模板详情。
   */
  async DescribeRecordBackupTemplate(
    req: DescribeRecordBackupTemplateRequest,
    cb?: (error: string, rep: DescribeRecordBackupTemplateResponse) => void
  ): Promise<DescribeRecordBackupTemplateResponse> {
    return this.request("DescribeRecordBackupTemplate", req, cb)
  }

  /**
   * 用于获取网关的数据及流量监控信息。
   */
  async DescribeGatewayMonitor(
    req: DescribeGatewayMonitorRequest,
    cb?: (error: string, rep: DescribeGatewayMonitorResponse) => void
  ): Promise<DescribeGatewayMonitorResponse> {
    return this.request("DescribeGatewayMonitor", req, cb)
  }

  /**
   * 用于查询录像上云计划列表。
   */
  async ListRecordBackupPlans(
    req?: ListRecordBackupPlansRequest,
    cb?: (error: string, rep: ListRecordBackupPlansResponse) => void
  ): Promise<ListRecordBackupPlansResponse> {
    return this.request("ListRecordBackupPlans", req, cb)
  }

  /**
   * 用于获取视频通道的码率信息
   */
  async DescribeVideoBitRate(
    req: DescribeVideoBitRateRequest,
    cb?: (error: string, rep: DescribeVideoBitRateResponse) => void
  ): Promise<DescribeVideoBitRateResponse> {
    return this.request("DescribeVideoBitRate", req, cb)
  }

  /**
   * 查询网关服务版本
   */
  async DescribeGatewayVersion(
    req: DescribeGatewayVersionRequest,
    cb?: (error: string, rep: DescribeGatewayVersionResponse) => void
  ): Promise<DescribeGatewayVersionResponse> {
    return this.request("DescribeGatewayVersion", req, cb)
  }

  /**
   * 更新AI任务
   */
  async UpdateAITask(
    req: UpdateAITaskRequest,
    cb?: (error: string, rep: UpdateAITaskResponse) => void
  ): Promise<UpdateAITaskResponse> {
    return this.request("UpdateAITask", req, cb)
  }

  /**
   * 用于查询任务的子任务列表
   */
  async ListSubTasks(
    req: ListSubTasksRequest,
    cb?: (error: string, rep: ListSubTasksResponse) => void
  ): Promise<ListSubTasksResponse> {
    return this.request("ListSubTasks", req, cb)
  }

  /**
   * 用于查询用户下所有实时上云计划中的通道列表
   */
  async ListRecordPlanChannels(
    req?: ListRecordPlanChannelsRequest,
    cb?: (error: string, rep: ListRecordPlanChannelsResponse) => void
  ): Promise<ListRecordPlanChannelsResponse> {
    return this.request("ListRecordPlanChannels", req, cb)
  }

  /**
   * 用于添加设备时，查询设备可以使用的服务节点，查询结果为已经绑定了域名的服务节点。
   */
  async DescribeDeviceRegion(
    req?: DescribeDeviceRegionRequest,
    cb?: (error: string, rep: DescribeDeviceRegionResponse) => void
  ): Promise<DescribeDeviceRegionResponse> {
    return this.request("DescribeDeviceRegion", req, cb)
  }

  /**
   * 用于新增组织。
   */
  async AddOrganization(
    req: AddOrganizationRequest,
    cb?: (error: string, rep: AddOrganizationResponse) => void
  ): Promise<AddOrganizationResponse> {
    return this.request("AddOrganization", req, cb)
  }

  /**
   * 用于查询设备通道预置位信息。
   */
  async DescribeDevicePreset(
    req: DescribeDevicePresetRequest,
    cb?: (error: string, rep: DescribeDevicePresetResponse) => void
  ): Promise<DescribeDevicePresetResponse> {
    return this.request("DescribeDevicePreset", req, cb)
  }

  /**
   * 用于查询实时上云计划列表
   */
  async ListRecordPlans(
    req?: ListRecordPlansRequest,
    cb?: (error: string, rep: ListRecordPlansResponse) => void
  ): Promise<ListRecordPlansResponse> {
    return this.request("ListRecordPlans", req, cb)
  }

  /**
   * 用于查询录像上云计划详情。
   */
  async DescribeRecordBackupPlan(
    req: DescribeRecordBackupPlanRequest,
    cb?: (error: string, rep: DescribeRecordBackupPlanResponse) => void
  ): Promise<DescribeRecordBackupPlanResponse> {
    return this.request("DescribeRecordBackupPlan", req, cb)
  }

  /**
   * 用于查询设备云端录像时间轴信息（即为视频上云后设置录像计划后云存储的录像）
   */
  async DescribeRecordFile(
    req: DescribeRecordFileRequest,
    cb?: (error: string, rep: DescribeRecordFileResponse) => void
  ): Promise<DescribeRecordFileResponse> {
    return this.request("DescribeRecordFile", req, cb)
  }

  /**
   * 用于查询云录像取回任务详情
   */
  async DescribeRecordRetrieveTask(
    req: DescribeRecordRetrieveTaskRequest,
    cb?: (error: string, rep: DescribeRecordRetrieveTaskResponse) => void
  ): Promise<DescribeRecordRetrieveTaskResponse> {
    return this.request("DescribeRecordRetrieveTask", req, cb)
  }

  /**
   * 用于查询设备的详细信息。
   */
  async DescribeUserDevice(
    req: DescribeUserDeviceRequest,
    cb?: (error: string, rep: DescribeUserDeviceResponse) => void
  ): Promise<DescribeUserDeviceResponse> {
    return this.request("DescribeUserDevice", req, cb)
  }

  /**
   * 查询禁播通道列表
   */
  async QueryForbidPlayChannelList(
    req: QueryForbidPlayChannelListRequest,
    cb?: (error: string, rep: QueryForbidPlayChannelListResponse) => void
  ): Promise<QueryForbidPlayChannelListResponse> {
    return this.request("QueryForbidPlayChannelList", req, cb)
  }

  /**
   * 获取AI任务识别结果
   */
  async DescribeAITaskResult(
    req: DescribeAITaskResultRequest,
    cb?: (error: string, rep: DescribeAITaskResultResponse) => void
  ): Promise<DescribeAITaskResultResponse> {
    return this.request("DescribeAITaskResult", req, cb)
  }

  /**
   * 用于查询实时上云模板详情
   */
  async DescribeRecordTemplate(
    req: DescribeRecordTemplateRequest,
    cb?: (error: string, rep: DescribeRecordTemplateResponse) => void
  ): Promise<DescribeRecordTemplateResponse> {
    return this.request("DescribeRecordTemplate", req, cb)
  }

  /**
   * 用于修改实时上云模板
   */
  async UpdateRecordTemplate(
    req: UpdateRecordTemplateRequest,
    cb?: (error: string, rep: UpdateRecordTemplateResponse) => void
  ): Promise<UpdateRecordTemplateResponse> {
    return this.request("UpdateRecordTemplate", req, cb)
  }

  /**
   * 用于新建取回任务
   */
  async AddRecordRetrieveTask(
    req: AddRecordRetrieveTaskRequest,
    cb?: (error: string, rep: AddRecordRetrieveTaskResponse) => void
  ): Promise<AddRecordRetrieveTaskResponse> {
    return this.request("AddRecordRetrieveTask", req, cb)
  }

  /**
   * 用于根据服务节点获取 CNAME 值。
   */
  async DescribeCNAME(
    req: DescribeCNAMERequest,
    cb?: (error: string, rep: DescribeCNAMEResponse) => void
  ): Promise<DescribeCNAMEResponse> {
    return this.request("DescribeCNAME", req, cb)
  }

  /**
   * 用于新增单个设备。添加设备之后，可根据返回结果到设备上进行配置，配置后等待设备注册/推流。
   */
  async AddUserDevice(
    req: AddUserDeviceRequest,
    cb?: (error: string, rep: AddUserDeviceResponse) => void
  ): Promise<AddUserDeviceResponse> {
    return this.request("AddUserDevice", req, cb)
  }

  /**
   * 用于查询任务详情
   */
  async DescribeTask(
    req: DescribeTaskRequest,
    cb?: (error: string, rep: DescribeTaskResponse) => void
  ): Promise<DescribeTaskResponse> {
    return this.request("DescribeTask", req, cb)
  }

  /**
   * 添加AI任务
   */
  async AddAITask(
    req: AddAITaskRequest,
    cb?: (error: string, rep: AddAITaskResponse) => void
  ): Promise<AddAITaskResponse> {
    return this.request("AddAITask", req, cb)
  }

  /**
   * 用于删除组织。
   */
  async DeleteOrganization(
    req: DeleteOrganizationRequest,
    cb?: (error: string, rep: DeleteOrganizationResponse) => void
  ): Promise<DeleteOrganizationResponse> {
    return this.request("DeleteOrganization", req, cb)
  }

  /**
   * 用于获取云端录像回放url地址
   */
  async DescribeRecordPlaybackUrl(
    req: DescribeRecordPlaybackUrlRequest,
    cb?: (error: string, rep: DescribeRecordPlaybackUrlResponse) => void
  ): Promise<DescribeRecordPlaybackUrlResponse> {
    return this.request("DescribeRecordPlaybackUrl", req, cb)
  }

  /**
   * 用于批量更改设备的组织。
   */
  async UpdateDeviceOrganization(
    req: UpdateDeviceOrganizationRequest,
    cb?: (error: string, rep: UpdateDeviceOrganizationResponse) => void
  ): Promise<UpdateDeviceOrganizationResponse> {
    return this.request("UpdateDeviceOrganization", req, cb)
  }

  /**
   * 用于查询添加的域名列表。
   */
  async DescribeDomain(
    req?: DescribeDomainRequest,
    cb?: (error: string, rep: DescribeDomainResponse) => void
  ): Promise<DescribeDomainResponse> {
    return this.request("DescribeDomain", req, cb)
  }

  /**
   * 用于获取设备的实时开流地址。
   */
  async ControlDeviceStream(
    req: ControlDeviceStreamRequest,
    cb?: (error: string, rep: ControlDeviceStreamResponse) => void
  ): Promise<ControlDeviceStreamResponse> {
    return this.request("ControlDeviceStream", req, cb)
  }

  /**
   * 用于获取云录像下载 url
   */
  async DescribeVideoDownloadUrl(
    req: DescribeVideoDownloadUrlRequest,
    cb?: (error: string, rep: DescribeVideoDownloadUrlResponse) => void
  ): Promise<DescribeVideoDownloadUrlResponse> {
    return this.request("DescribeVideoDownloadUrl", req, cb)
  }

  /**
   * 用于同步国标设备的通道（接口调用后，触发向设备请求通道列表，新增的通道入库，设备上已删除的通道需自行删除、后台不自动删除）。
   */
  async RefreshDeviceChannel(
    req: RefreshDeviceChannelRequest,
    cb?: (error: string, rep: RefreshDeviceChannelResponse) => void
  ): Promise<RefreshDeviceChannelResponse> {
    return this.request("RefreshDeviceChannel", req, cb)
  }

  /**
   * 用于操作设备预置位，包括设置、删除、调用。
   */
  async ControlDevicePreset(
    req: ControlDevicePresetRequest,
    cb?: (error: string, rep: ControlDevicePresetResponse) => void
  ): Promise<ControlDevicePresetResponse> {
    return this.request("ControlDevicePreset", req, cb)
  }

  /**
   * 用于批量操作（启用，禁用，删除）设备
   */
  async BatchOperateDevice(
    req: BatchOperateDeviceRequest,
    cb?: (error: string, rep: BatchOperateDeviceResponse) => void
  ): Promise<BatchOperateDeviceResponse> {
    return this.request("BatchOperateDevice", req, cb)
  }

  /**
   * 本接口可基于海康ISUP 5.0协议实现透传ISAPI的请求数据，调用接口前需确保设备采用ISUP协议成功注册至本平台
   */
  async CallISAPI(
    req: CallISAPIRequest,
    cb?: (error: string, rep: CallISAPIResponse) => void
  ): Promise<CallISAPIResponse> {
    return this.request("CallISAPI", req, cb)
  }

  /**
   * 用于查询实时上云计划详情
   */
  async DescribeRecordPlan(
    req: DescribeRecordPlanRequest,
    cb?: (error: string, rep: DescribeRecordPlanResponse) => void
  ): Promise<DescribeRecordPlanResponse> {
    return this.request("DescribeRecordPlan", req, cb)
  }

  /**
   * 用于修改实时上云计划
   */
  async UpdateRecordPlan(
    req: UpdateRecordPlanRequest,
    cb?: (error: string, rep: UpdateRecordPlanResponse) => void
  ): Promise<UpdateRecordPlanResponse> {
    return this.request("UpdateRecordPlan", req, cb)
  }

  /**
   * 用于获取网关详情。
   */
  async DescribeGateway(
    req: DescribeGatewayRequest,
    cb?: (error: string, rep: DescribeGatewayResponse) => void
  ): Promise<DescribeGatewayResponse> {
    return this.request("DescribeGateway", req, cb)
  }

  /**
   * 用于网关升级（支持对所有待更新的服务一键升级）。
   */
  async UpgradeGateway(
    req: UpgradeGatewayRequest,
    cb?: (error: string, rep: UpgradeGatewayResponse) => void
  ): Promise<UpgradeGatewayResponse> {
    return this.request("UpgradeGateway", req, cb)
  }

  /**
   * 用于修改组织。
   */
  async UpdateOrganization(
    req: UpdateOrganizationRequest,
    cb?: (error: string, rep: UpdateOrganizationResponse) => void
  ): Promise<UpdateOrganizationResponse> {
    return this.request("UpdateOrganization", req, cb)
  }

  /**
   * 用于删除实时上云计划
   */
  async DeleteRecordPlan(
    req: DeleteRecordPlanRequest,
    cb?: (error: string, rep: DeleteRecordPlanResponse) => void
  ): Promise<DeleteRecordPlanResponse> {
    return this.request("DeleteRecordPlan", req, cb)
  }

  /**
   * 用于新增实时上云模板
   */
  async AddRecordTemplate(
    req: AddRecordTemplateRequest,
    cb?: (error: string, rep: AddRecordTemplateResponse) => void
  ): Promise<AddRecordTemplateResponse> {
    return this.request("AddRecordTemplate", req, cb)
  }

  /**
   * 用于新增实时上云计划
   */
  async AddRecordPlan(
    req: AddRecordPlanRequest,
    cb?: (error: string, rep: AddRecordPlanResponse) => void
  ): Promise<AddRecordPlanResponse> {
    return this.request("AddRecordPlan", req, cb)
  }

  /**
   * 禁止主、子账号对视频通道的实况预览
   */
  async SetForbidPlayChannels(
    req: SetForbidPlayChannelsRequest,
    cb?: (error: string, rep: SetForbidPlayChannelsResponse) => void
  ): Promise<SetForbidPlayChannelsResponse> {
    return this.request("SetForbidPlayChannels", req, cb)
  }

  /**
   * 用于查询组织目录下的未添加到实时上云计划中的通道数量
   */
  async ListOrganizationChannelNumbers(
    req: ListOrganizationChannelNumbersRequest,
    cb?: (error: string, rep: ListOrganizationChannelNumbersResponse) => void
  ): Promise<ListOrganizationChannelNumbersResponse> {
    return this.request("ListOrganizationChannelNumbers", req, cb)
  }

  /**
   * 用于修改录像上云计划。
   */
  async UpdateRecordBackupPlan(
    req: UpdateRecordBackupPlanRequest,
    cb?: (error: string, rep: UpdateRecordBackupPlanResponse) => void
  ): Promise<UpdateRecordBackupPlanResponse> {
    return this.request("UpdateRecordBackupPlan", req, cb)
  }

  /**
   * 用于获取网关列表。
   */
  async ListGateways(
    req: ListGatewaysRequest,
    cb?: (error: string, rep: ListGatewaysResponse) => void
  ): Promise<ListGatewaysResponse> {
    return this.request("ListGateways", req, cb)
  }

  /**
   * 用于查询组织。
   */
  async DescribeOrganization(
    req?: DescribeOrganizationRequest,
    cb?: (error: string, rep: DescribeOrganizationResponse) => void
  ): Promise<DescribeOrganizationResponse> {
    return this.request("DescribeOrganization", req, cb)
  }

  /**
   * 用于录像回放过程中的倍速、跳转、播放/暂停/停止等控制。
   */
  async ControlRecord(
    req: ControlRecordRequest,
    cb?: (error: string, rep: ControlRecordResponse) => void
  ): Promise<ControlRecordResponse> {
    return this.request("ControlRecord", req, cb)
  }

  /**
   * 用于获取对应组织下的设备列表。
   */
  async ListDevices(
    req: ListDevicesRequest,
    cb?: (error: string, rep: ListDevicesResponse) => void
  ): Promise<ListDevicesResponse> {
    return this.request("ListDevices", req, cb)
  }

  /**
   * 用于查询录像上云模板列表。
   */
  async ListRecordBackupTemplates(
    req?: ListRecordBackupTemplatesRequest,
    cb?: (error: string, rep: ListRecordBackupTemplatesResponse) => void
  ): Promise<ListRecordBackupTemplatesResponse> {
    return this.request("ListRecordBackupTemplates", req, cb)
  }

  /**
   * 用于设备通道云台控制，包括转动、变倍、变焦、光圈等。
   */
  async ControlDevicePTZ(
    req: ControlDevicePTZRequest,
    cb?: (error: string, rep: ControlDevicePTZResponse) => void
  ): Promise<ControlDevicePTZResponse> {
    return this.request("ControlDevicePTZ", req, cb)
  }

  /**
   * 更新 AI 任务状态
   */
  async UpdateAITaskStatus(
    req: UpdateAITaskStatusRequest,
    cb?: (error: string, rep: UpdateAITaskStatusResponse) => void
  ): Promise<UpdateAITaskStatusResponse> {
    return this.request("UpdateAITaskStatus", req, cb)
  }

  /**
   * 用于修改设备的配置信息。
   */
  async UpdateUserDevice(
    req: UpdateUserDeviceRequest,
    cb?: (error: string, rep: UpdateUserDeviceResponse) => void
  ): Promise<UpdateUserDeviceResponse> {
    return this.request("UpdateUserDevice", req, cb)
  }

  /**
   * 用于查询录像上云计划下的设备通道列表。
   */
  async ListRecordBackupPlanDevices(
    req: ListRecordBackupPlanDevicesRequest,
    cb?: (error: string, rep: ListRecordBackupPlanDevicesResponse) => void
  ): Promise<ListRecordBackupPlanDevicesResponse> {
    return this.request("ListRecordBackupPlanDevices", req, cb)
  }

  /**
   * 获取AI任务列表
   */
  async ListAITasks(
    req: ListAITasksRequest,
    cb?: (error: string, rep: ListAITasksResponse) => void
  ): Promise<ListAITasksResponse> {
    return this.request("ListAITasks", req, cb)
  }

  /**
   * 用于查询实时上云模板列表
   */
  async ListRecordTemplates(
    req?: ListRecordTemplatesRequest,
    cb?: (error: string, rep: ListRecordTemplatesResponse) => void
  ): Promise<ListRecordTemplatesResponse> {
    return this.request("ListRecordTemplates", req, cb)
  }

  /**
   * 用于查询实时上云计划下的设备通道列表
   */
  async ListRecordPlanDevices(
    req: ListRecordPlanDevicesRequest,
    cb?: (error: string, rep: ListRecordPlanDevicesResponse) => void
  ): Promise<ListRecordPlanDevicesResponse> {
    return this.request("ListRecordPlanDevices", req, cb)
  }

  /**
   * 删除AI任务
   */
  async DeleteAITask(
    req: DeleteAITaskRequest,
    cb?: (error: string, rep: DeleteAITaskResponse) => void
  ): Promise<DeleteAITaskResponse> {
    return this.request("DeleteAITask", req, cb)
  }

  /**
   * 用于设置推拉流鉴权配置。
   */
  async AddStreamAuth(
    req: AddStreamAuthRequest,
    cb?: (error: string, rep: AddStreamAuthResponse) => void
  ): Promise<AddStreamAuthResponse> {
    return this.request("AddStreamAuth", req, cb)
  }

  /**
   * 用于查询批量任务和简单任务列表
   */
  async ListTasks(
    req: ListTasksRequest,
    cb?: (error: string, rep: ListTasksResponse) => void
  ): Promise<ListTasksResponse> {
    return this.request("ListTasks", req, cb)
  }

  /**
   * 用于删除取回任务
   */
  async DeleteRecordRetrieveTask(
    req: DeleteRecordRetrieveTaskRequest,
    cb?: (error: string, rep: DeleteRecordRetrieveTaskResponse) => void
  ): Promise<DeleteRecordRetrieveTaskResponse> {
    return this.request("DeleteRecordRetrieveTask", req, cb)
  }

  /**
   * 用于新增录像上云计划 （当前仅适用于通过GB28181协议和网关接入的设备/视频通道）
   */
  async AddRecordBackupPlan(
    req: AddRecordBackupPlanRequest,
    cb?: (error: string, rep: AddRecordBackupPlanResponse) => void
  ): Promise<AddRecordBackupPlanResponse> {
    return this.request("AddRecordBackupPlan", req, cb)
  }

  /**
   * 用于查询推拉流鉴权配置。
   */
  async DescribeStreamAuth(
    req?: DescribeStreamAuthRequest,
    cb?: (error: string, rep: DescribeStreamAuthResponse) => void
  ): Promise<DescribeStreamAuthResponse> {
    return this.request("DescribeStreamAuth", req, cb)
  }

  /**
   * 用于查询设备本地录像时间轴信息，为NVR/IPC本地存储的录像。
   */
  async ControlRecordTimeline(
    req: ControlRecordTimelineRequest,
    cb?: (error: string, rep: ControlRecordTimelineResponse) => void
  ): Promise<ControlRecordTimelineResponse> {
    return this.request("ControlRecordTimeline", req, cb)
  }

  /**
   * 获取AI任务详情
   */
  async DescribeAITask(
    req: DescribeAITaskRequest,
    cb?: (error: string, rep: DescribeAITaskResponse) => void
  ): Promise<DescribeAITaskResponse> {
    return this.request("DescribeAITask", req, cb)
  }

  /**
   * 用于删除录像上云模板。
   */
  async DeleteRecordBackupPlan(
    req: DeleteRecordBackupPlanRequest,
    cb?: (error: string, rep: DeleteRecordBackupPlanResponse) => void
  ): Promise<DeleteRecordBackupPlanResponse> {
    return this.request("DeleteRecordBackupPlan", req, cb)
  }

  /**
   * 用于删除网关。
   */
  async DeleteGateway(
    req: DeleteGatewayRequest,
    cb?: (error: string, rep: DeleteGatewayResponse) => void
  ): Promise<DeleteGatewayResponse> {
    return this.request("DeleteGateway", req, cb)
  }

  /**
   * 用于查询网关下挂载的设备列表。
   */
  async ListGatewayDevices(
    req: ListGatewayDevicesRequest,
    cb?: (error: string, rep: ListGatewayDevicesResponse) => void
  ): Promise<ListGatewayDevicesResponse> {
    return this.request("ListGatewayDevices", req, cb)
  }

  /**
   * 用于删除域名。
   */
  async DeleteDomain(
    req: DeleteDomainRequest,
    cb?: (error: string, rep: DeleteDomainResponse) => void
  ): Promise<DeleteDomainResponse> {
    return this.request("DeleteDomain", req, cb)
  }

  /**
   * 用于获取设备本地录像 URL 地址。
   */
  async PlayRecord(
    req: PlayRecordRequest,
    cb?: (error: string, rep: PlayRecordResponse) => void
  ): Promise<PlayRecordResponse> {
    return this.request("PlayRecord", req, cb)
  }

  /**
     * 用于新增录像上云模板。
> 该功能本质是拉取设备本地录像数据上云（即存在 IPC 摄像头存储卡或 NVR 硬盘中的录像），操作时需先设定录像时间段（即想要上云的设备本地录像），再设定上云时间段和上云倍速，平台将于上云时间段倍速拉取设备对应前一天的录像时间段数据。

> 设定需至少满足（上云时间段=前一天的录像时间段/上云倍速），建议上云时间段可多设定10%左右的时间，避免因网络波动导致数据拉取不完整。
     */
  async AddRecordBackupTemplate(
    req: AddRecordBackupTemplateRequest,
    cb?: (error: string, rep: AddRecordBackupTemplateResponse) => void
  ): Promise<AddRecordBackupTemplateResponse> {
    return this.request("AddRecordBackupTemplate", req, cb)
  }

  /**
   * 用于查询组织目录下的通道列表
   */
  async ListOrganizationChannels(
    req: ListOrganizationChannelsRequest,
    cb?: (error: string, rep: ListOrganizationChannelsResponse) => void
  ): Promise<ListOrganizationChannelsResponse> {
    return this.request("ListOrganizationChannels", req, cb)
  }
}
