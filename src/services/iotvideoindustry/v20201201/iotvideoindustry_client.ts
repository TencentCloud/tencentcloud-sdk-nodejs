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
  ControlRecordStreamRequest,
  ModifySubscriptionStatusRequest,
  CreateSceneResponse,
  DeleteTimeTemplateResponse,
  GetTimeTemplatesRequest,
  ServerConfiguration,
  GetRecordPlanByDevRequest,
  GetRecordDatesByDevResponse,
  CreateLiveRecordPlanRequest,
  DescribeLiveChannelRequest,
  DescribeSubscriptionStatusResponse,
  DescribeScenesResponse,
  DescribeDeviceStreamsResponse,
  DescribeSIPServerRequest,
  CreateLiveRecordPlanResponse,
  GroupItem,
  DeviceItem,
  DeleteDeviceGroupResponse,
  DeleteRecordPlanResponse,
  DeleteMessageForwardResponse,
  ModifyBindPlanLiveChannelResponse,
  UpdateDeviceGroupResponse,
  GetVideoListByConRequest,
  DevGroupInfo,
  DescribeLiveRecordPlanByIdRequest,
  LiveRecordPlanItem,
  DescribeVideoListResponse,
  RecordTaskItem,
  DescribeIPCChannelsRequest,
  DescribeSubGroupsRequest,
  DeleteRecordPlanRequest,
  CreateDeviceGroupResponse,
  GetVideoListByConResponse,
  LiveRecordItem,
  UpdateTimeTemplateResponse,
  UpdateRecordPlanRequest,
  ModifyDeviceDataResponse,
  DescribeStatisticDetailsResponse,
  GroupDeviceItem,
  DescribeSubGroupsResponse,
  GetRecordPlanByIdResponse,
  DeleteDeviceRequest,
  UpdateDevicePassWordRequest,
  DescribeMessageForwardRequest,
  CreateTimeTemplateRequest,
  CreateMessageForwardRequest,
  ModifyBindPlanLiveChannelRequest,
  DescribeLiveStreamRequest,
  ModifyMessageForwardRequest,
  ModifyLiveRecordPlanResponse,
  LiveChannelInfo,
  DescribeAllDeviceListRequest,
  DescribeRecordDatesByLiveRequest,
  DescribeDevicePassWordRequest,
  GetRecordPlanByIdRequest,
  DescribeLiveChannelListRequest,
  GetRecordPlanByDevResponse,
  DeleteVideoListRequest,
  GroupInfo,
  DescribeStatisticDetailsRequest,
  CreateRecordPlanRequest,
  DescribeRecordStreamData,
  CreateDeviceGroupRequest,
  UpdateTimeTemplateRequest,
  DescribeLiveRecordPlanIdsResponse,
  CreateDeviceResponse,
  CreateDeviceRequest,
  DescribeStatisticSummaryResponse,
  DescribeRecordStreamRequest,
  BindGroupDevicesRequest,
  ModifyLiveRecordPlanRequest,
  SceneItem,
  GetTimeTemplateByIdResponse,
  DescribeLiveChannelResponse,
  DescribeMessageForwardsRequest,
  ControlDevicePTZResponse,
  TimeTemplateSpec,
  ControlDevicePTZRequest,
  UpdateDeviceGroupRequest,
  DescribeChannelsByLiveRecordPlanResponse,
  DescribeGroupDevicesRequest,
  DescribeGroupByIdRequest,
  UpdateDevicePassWordResponse,
  DeleteChannelRequest,
  DescribeSubscriptionStatusRequest,
  DescribeDeviceStreamsRequest,
  DescribeRecordStreamResponse,
  CreateRecordPlanResponse,
  CreateSceneRequest,
  AllDeviceInfo,
  DescribeLiveVideoListResponse,
  DeleteDeviceGroupRequest,
  DescribeLiveRecordPlanByIdResponse,
  DescribeRecordDatesByLiveResponse,
  ModifySubscriptionStatusResponse,
  MessageForward,
  ModifyDeviceDataRequest,
  DeleteSceneResponse,
  GetRecordDatesByDevRequest,
  DescribeLiveVideoListRequest,
  GetTimeTemplatesResponse,
  CreateLiveChannelResponse,
  DeleteVideoListResponse,
  ModifyLiveVideoResponse,
  DescribeIPCChannelsResponse,
  DescribeAllDeviceListResponse,
  DescribeStatisticSummaryRequest,
  DescribeGroupsResponse,
  DescribeDeviceStreamsData,
  DeleteLiveRecordPlanRequest,
  DeleteDeviceResponse,
  DeleteLiveVideoListResponse,
  DescribeDeviceGroupResponse,
  CreateTimeTemplateResponse,
  DeleteLiveChannelRequest,
  StatisticItem,
  DescribeSIPServerResponse,
  DescribeGroupByPathRequest,
  DeleteChannelResponse,
  UpdateRecordPlanResponse,
  TimeTemplateItem,
  DescribeDeviceGroupRequest,
  LiveChannelItem,
  DescribeGroupsRequest,
  GetRecordPlansResponse,
  DescribeChannelsByLiveRecordPlanRequest,
  ModifyLiveChannelResponse,
  GetTimeTemplateByIdRequest,
  RecordPlanItem,
  DescribeMessageForwardsResponse,
  ModifyVideoInfoRequest,
  GetRecordPlansRequest,
  DeleteTimeTemplateRequest,
  ModifyLiveChannelRequest,
  DescribeMessageForwardResponse,
  DescribeLiveRecordPlanIdsRequest,
  DeleteLiveVideoListRequest,
  ModifyMessageForwardResponse,
  DescribeScenesRequest,
  DeleteLiveRecordPlanResponse,
  ModifyVideoInfoResponse,
  DescribeGroupByIdResponse,
  ControlRecordStreamResponse,
  DeleteMessageForwardRequest,
  DeleteLiveChannelResponse,
  StreamAddress,
  BindGroupDevicesResponse,
  DescribeVideoListRequest,
  DescribeLiveChannelListResponse,
  DescribeDevicePassWordResponse,
  DescribeBindSceneDevicesRequest,
  DescribeBindSceneDevicesResponse,
  ModifyLiveVideoRequest,
  DescribeGroupByPathResponse,
  CreateMessageForwardResponse,
  CreateLiveChannelRequest,
  DescribeGroupDevicesResponse,
  DeleteSceneRequest,
  DescribeLiveStreamResponse,
} from "./iotvideoindustry_models"

/**
 * iotvideoindustry client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("iotvideoindustry.tencentcloudapi.com", "2020-12-01", clientConfig)
  }

  /**
   * 获取IPC设备下属通道
   */
  async DescribeIPCChannels(
    req: DescribeIPCChannelsRequest,
    cb?: (error: string, rep: DescribeIPCChannelsResponse) => void
  ): Promise<DescribeIPCChannelsResponse> {
    return this.request("DescribeIPCChannels", req, cb)
  }

  /**
   * 修改录像存储列表
   */
  async ModifyVideoInfo(
    req: ModifyVideoInfoRequest,
    cb?: (error: string, rep: ModifyVideoInfoResponse) => void
  ): Promise<ModifyVideoInfoResponse> {
    return this.request("ModifyVideoInfo", req, cb)
  }

  /**
   * 本接口(DescribeSubGroups)用于查询分组下的子分组列表。
   */
  async DescribeSubGroups(
    req: DescribeSubGroupsRequest,
    cb?: (error: string, rep: DescribeSubGroupsResponse) => void
  ): Promise<DescribeSubGroupsResponse> {
    return this.request("DescribeSubGroups", req, cb)
  }

  /**
   * 本接口(UpdateDeviceGroup)用于修改分组信息。
   */
  async UpdateDeviceGroup(
    req: UpdateDeviceGroupRequest,
    cb?: (error: string, rep: UpdateDeviceGroupResponse) => void
  ): Promise<UpdateDeviceGroupResponse> {
    return this.request("UpdateDeviceGroup", req, cb)
  }

  /**
   * 修改消息转发配置
   */
  async ModifyMessageForward(
    req: ModifyMessageForwardRequest,
    cb?: (error: string, rep: ModifyMessageForwardResponse) => void
  ): Promise<ModifyMessageForwardResponse> {
    return this.request("ModifyMessageForward", req, cb)
  }

  /**
   * 本接口(DescribeDeviceStreams)用于获取设备实时流地址。
   */
  async DescribeDeviceStreams(
    req: DescribeDeviceStreamsRequest,
    cb?: (error: string, rep: DescribeDeviceStreamsResponse) => void
  ): Promise<DescribeDeviceStreamsResponse> {
    return this.request("DescribeDeviceStreams", req, cb)
  }

  /**
   * 删除录像存储列表
   */
  async DeleteVideoList(
    req: DeleteVideoListRequest,
    cb?: (error: string, rep: DeleteVideoListResponse) => void
  ): Promise<DeleteVideoListResponse> {
    return this.request("DeleteVideoList", req, cb)
  }

  /**
   * 本接口(CreateDeviceGroup) 用于创建设备管理分组。
   */
  async CreateDeviceGroup(
    req: CreateDeviceGroupRequest,
    cb?: (error: string, rep: CreateDeviceGroupResponse) => void
  ): Promise<CreateDeviceGroupResponse> {
    return this.request("CreateDeviceGroup", req, cb)
  }

  /**
     * 获取回放视频流(NVR录制用)
RecordId和StartTime/EndTime互斥
当存在RecordId时，StartTime和EndTime无效
当RecordId为空，StartTime和EndTime生效
     */
  async DescribeRecordStream(
    req: DescribeRecordStreamRequest,
    cb?: (error: string, rep: DescribeRecordStreamResponse) => void
  ): Promise<DescribeRecordStreamResponse> {
    return this.request("DescribeRecordStream", req, cb)
  }

  /**
   * 直播录像回放列表
   */
  async DescribeLiveVideoList(
    req: DescribeLiveVideoListRequest,
    cb?: (error: string, rep: DescribeLiveVideoListResponse) => void
  ): Promise<DescribeLiveVideoListResponse> {
    return this.request("DescribeLiveVideoList", req, cb)
  }

  /**
   * 创建场景
   */
  async CreateScene(
    req: CreateSceneRequest,
    cb?: (error: string, rep: CreateSceneResponse) => void
  ): Promise<CreateSceneResponse> {
    return this.request("CreateScene", req, cb)
  }

  /**
   * 本接口(GetVideoListByCon)用于查询设备的录制文件列表
   */
  async GetVideoListByCon(
    req: GetVideoListByConRequest,
    cb?: (error: string, rep: GetVideoListByConResponse) => void
  ): Promise<GetVideoListByConResponse> {
    return this.request("GetVideoListByCon", req, cb)
  }

  /**
   * 本接口(UpdateTimeTemplate)用于更新时间模板。
   */
  async UpdateTimeTemplate(
    req: UpdateTimeTemplateRequest,
    cb?: (error: string, rep: UpdateTimeTemplateResponse) => void
  ): Promise<UpdateTimeTemplateResponse> {
    return this.request("UpdateTimeTemplate", req, cb)
  }

  /**
   * 本接口(UpdateDevicePassWord)用于修改设备密码。
   */
  async UpdateDevicePassWord(
    req: UpdateDevicePassWordRequest,
    cb?: (error: string, rep: UpdateDevicePassWordResponse) => void
  ): Promise<UpdateDevicePassWordResponse> {
    return this.request("UpdateDevicePassWord", req, cb)
  }

  /**
   * 查询主设备订阅状态
   */
  async DescribeSubscriptionStatus(
    req: DescribeSubscriptionStatusRequest,
    cb?: (error: string, rep: DescribeSubscriptionStatusResponse) => void
  ): Promise<DescribeSubscriptionStatusResponse> {
    return this.request("DescribeSubscriptionStatus", req, cb)
  }

  /**
   * 对回放流进行控制，包括暂停、播放、拉动、结束等
   */
  async ControlRecordStream(
    req: ControlRecordStreamRequest,
    cb?: (error: string, rep: ControlRecordStreamResponse) => void
  ): Promise<ControlRecordStreamResponse> {
    return this.request("ControlRecordStream", req, cb)
  }

  /**
   * 直播录制计划绑定解绑直播频道
   */
  async ModifyBindPlanLiveChannel(
    req: ModifyBindPlanLiveChannelRequest,
    cb?: (error: string, rep: ModifyBindPlanLiveChannelResponse) => void
  ): Promise<ModifyBindPlanLiveChannelResponse> {
    return this.request("ModifyBindPlanLiveChannel", req, cb)
  }

  /**
   * 本接口(GetTimeTemplateById)用于根据模板ID获取时间模板详情。
   */
  async GetTimeTemplateById(
    req: GetTimeTemplateByIdRequest,
    cb?: (error: string, rep: GetTimeTemplateByIdResponse) => void
  ): Promise<GetTimeTemplateByIdResponse> {
    return this.request("GetTimeTemplateById", req, cb)
  }

  /**
   * 直播录像删除
   */
  async DeleteLiveVideoList(
    req: DeleteLiveVideoListRequest,
    cb?: (error: string, rep: DeleteLiveVideoListResponse) => void
  ): Promise<DeleteLiveVideoListResponse> {
    return this.request("DeleteLiveVideoList", req, cb)
  }

  /**
   * 本接口(GetRecordPlanByDev)用于根据设备ID查询其绑定的录制计划.
   */
  async GetRecordPlanByDev(
    req: GetRecordPlanByDevRequest,
    cb?: (error: string, rep: GetRecordPlanByDevResponse) => void
  ): Promise<GetRecordPlanByDevResponse> {
    return this.request("GetRecordPlanByDev", req, cb)
  }

  /**
   * 编辑直播录制计划
   */
  async ModifyLiveRecordPlan(
    req: ModifyLiveRecordPlanRequest,
    cb?: (error: string, rep: ModifyLiveRecordPlanResponse) => void
  ): Promise<ModifyLiveRecordPlanResponse> {
    return this.request("ModifyLiveRecordPlan", req, cb)
  }

  /**
   * 查看消息转发配置列表
   */
  async DescribeMessageForwards(
    req: DescribeMessageForwardsRequest,
    cb?: (error: string, rep: DescribeMessageForwardsResponse) => void
  ): Promise<DescribeMessageForwardsResponse> {
    return this.request("DescribeMessageForwards", req, cb)
  }

  /**
   * 删除通道接口
   */
  async DeleteChannel(
    req: DeleteChannelRequest,
    cb?: (error: string, rep: DeleteChannelResponse) => void
  ): Promise<DeleteChannelResponse> {
    return this.request("DeleteChannel", req, cb)
  }

  /**
   * 本接口(DescribeDevicePassWord)用于查询设备密码。
   */
  async DescribeDevicePassWord(
    req: DescribeDevicePassWordRequest,
    cb?: (error: string, rep: DescribeDevicePassWordResponse) => void
  ): Promise<DescribeDevicePassWordResponse> {
    return this.request("DescribeDevicePassWord", req, cb)
  }

  /**
   * 本接口(DescribeGroupDevices)用于查询分组下的设备列表。
   */
  async DescribeGroupDevices(
    req: DescribeGroupDevicesRequest,
    cb?: (error: string, rep: DescribeGroupDevicesResponse) => void
  ): Promise<DescribeGroupDevicesResponse> {
    return this.request("DescribeGroupDevices", req, cb)
  }

  /**
   * 删除消息转发配置
   */
  async DeleteMessageForward(
    req: DeleteMessageForwardRequest,
    cb?: (error: string, rep: DeleteMessageForwardResponse) => void
  ): Promise<DeleteMessageForwardResponse> {
    return this.request("DeleteMessageForward", req, cb)
  }

  /**
   * 本接口(GetRecordPlans)用于获取用户的全部录制计划。
   */
  async GetRecordPlans(
    req?: GetRecordPlansRequest,
    cb?: (error: string, rep: GetRecordPlansResponse) => void
  ): Promise<GetRecordPlansResponse> {
    return this.request("GetRecordPlans", req, cb)
  }

  /**
   * 本接口(DeleteDevice)用于删除设备。
   */
  async DeleteDevice(
    req: DeleteDeviceRequest,
    cb?: (error: string, rep: DeleteDeviceResponse) => void
  ): Promise<DeleteDeviceResponse> {
    return this.request("DeleteDevice", req, cb)
  }

  /**
   * 创建直播录制计划
   */
  async CreateLiveRecordPlan(
    req: CreateLiveRecordPlanRequest,
    cb?: (error: string, rep: CreateLiveRecordPlanResponse) => void
  ): Promise<CreateLiveRecordPlanResponse> {
    return this.request("CreateLiveRecordPlan", req, cb)
  }

  /**
   * 根据分组路径查询分组
   */
  async DescribeGroupByPath(
    req: DescribeGroupByPathRequest,
    cb?: (error: string, rep: DescribeGroupByPathResponse) => void
  ): Promise<DescribeGroupByPathResponse> {
    return this.request("DescribeGroupByPath", req, cb)
  }

  /**
   * 本接口(DescribeStatisticSummary)用于查询用户昨日的概览数据。
   */
  async DescribeStatisticSummary(
    req: DescribeStatisticSummaryRequest,
    cb?: (error: string, rep: DescribeStatisticSummaryResponse) => void
  ): Promise<DescribeStatisticSummaryResponse> {
    return this.request("DescribeStatisticSummary", req, cb)
  }

  /**
   * 直播录像存储日期列表
   */
  async DescribeRecordDatesByLive(
    req: DescribeRecordDatesByLiveRequest,
    cb?: (error: string, rep: DescribeRecordDatesByLiveResponse) => void
  ): Promise<DescribeRecordDatesByLiveResponse> {
    return this.request("DescribeRecordDatesByLive", req, cb)
  }

  /**
   * 本接口(GetRecordDatesByDev)用于查询设备含有录像文件的日期列表。
   */
  async GetRecordDatesByDev(
    req: GetRecordDatesByDevRequest,
    cb?: (error: string, rep: GetRecordDatesByDevResponse) => void
  ): Promise<GetRecordDatesByDevResponse> {
    return this.request("GetRecordDatesByDev", req, cb)
  }

  /**
   * 本接口(GetTimeTemplates)用于获取时间模板列表。
   */
  async GetTimeTemplates(
    req?: GetTimeTemplatesRequest,
    cb?: (error: string, rep: GetTimeTemplatesResponse) => void
  ): Promise<GetTimeTemplatesResponse> {
    return this.request("GetTimeTemplates", req, cb)
  }

  /**
   * 删除直播接口
   */
  async DeleteLiveChannel(
    req: DeleteLiveChannelRequest,
    cb?: (error: string, rep: DeleteLiveChannelResponse) => void
  ): Promise<DeleteLiveChannelResponse> {
    return this.request("DeleteLiveChannel", req, cb)
  }

  /**
   * 本接口(DescribeStatisticDetails)用于查询指定统计项详情，返回结果按天为单位聚合，支持的最大时间查询范围为31天。
   */
  async DescribeStatisticDetails(
    req: DescribeStatisticDetailsRequest,
    cb?: (error: string, rep: DescribeStatisticDetailsResponse) => void
  ): Promise<DescribeStatisticDetailsResponse> {
    return this.request("DescribeStatisticDetails", req, cb)
  }

  /**
   * 获取场景列表
   */
  async DescribeScenes(
    req: DescribeScenesRequest,
    cb?: (error: string, rep: DescribeScenesResponse) => void
  ): Promise<DescribeScenesResponse> {
    return this.request("DescribeScenes", req, cb)
  }

  /**
   * 本接口(CreateDevice) 用于创建设备。
   */
  async CreateDevice(
    req: CreateDeviceRequest,
    cb?: (error: string, rep: CreateDeviceResponse) => void
  ): Promise<CreateDeviceResponse> {
    return this.request("CreateDevice", req, cb)
  }

  /**
   * 本接口(GetRecordPlanById)用于根据录制计划ID获取录制计划。
   */
  async GetRecordPlanById(
    req: GetRecordPlanByIdRequest,
    cb?: (error: string, rep: GetRecordPlanByIdResponse) => void
  ): Promise<GetRecordPlanByIdResponse> {
    return this.request("GetRecordPlanById", req, cb)
  }

  /**
   * 根据直播录制计划获取频道列表
   */
  async DescribeChannelsByLiveRecordPlan(
    req: DescribeChannelsByLiveRecordPlanRequest,
    cb?: (error: string, rep: DescribeChannelsByLiveRecordPlanResponse) => void
  ): Promise<DescribeChannelsByLiveRecordPlanResponse> {
    return this.request("DescribeChannelsByLiveRecordPlan", req, cb)
  }

  /**
   * 本接口(DescribeDeviceGroup)用于根据设备ID查询设备所在分组信息，可批量查询。
   */
  async DescribeDeviceGroup(
    req: DescribeDeviceGroupRequest,
    cb?: (error: string, rep: DescribeDeviceGroupResponse) => void
  ): Promise<DescribeDeviceGroupResponse> {
    return this.request("DescribeDeviceGroup", req, cb)
  }

  /**
     * 本接口(DeleteRecordPlan)用于删除录制计划
录制计划删除的同时，会停止该录制计划下的全部录制任务。
     */
  async DeleteRecordPlan(
    req: DeleteRecordPlanRequest,
    cb?: (error: string, rep: DeleteRecordPlanResponse) => void
  ): Promise<DeleteRecordPlanResponse> {
    return this.request("DeleteRecordPlan", req, cb)
  }

  /**
   * 创建消息转发配置
   */
  async CreateMessageForward(
    req: CreateMessageForwardRequest,
    cb?: (error: string, rep: CreateMessageForwardResponse) => void
  ): Promise<CreateMessageForwardResponse> {
    return this.request("CreateMessageForward", req, cb)
  }

  /**
   * 删除直播录制计划
   */
  async DeleteLiveRecordPlan(
    req: DeleteLiveRecordPlanRequest,
    cb?: (error: string, rep: DeleteLiveRecordPlanResponse) => void
  ): Promise<DeleteLiveRecordPlanResponse> {
    return this.request("DeleteLiveRecordPlan", req, cb)
  }

  /**
   * 本接口(DeleteTimeTemplate) 用于删除时间模板。
   */
  async DeleteTimeTemplate(
    req: DeleteTimeTemplateRequest,
    cb?: (error: string, rep: DeleteTimeTemplateResponse) => void
  ): Promise<DeleteTimeTemplateResponse> {
    return this.request("DeleteTimeTemplate", req, cb)
  }

  /**
   * 本接口(DescribeGroups)用于批量查询分组信息。
   */
  async DescribeGroups(
    req: DescribeGroupsRequest,
    cb?: (error: string, rep: DescribeGroupsResponse) => void
  ): Promise<DescribeGroupsResponse> {
    return this.request("DescribeGroups", req, cb)
  }

  /**
   * 本接口(ModifyDeviceData)用于编辑设备信息。
   */
  async ModifyDeviceData(
    req: ModifyDeviceDataRequest,
    cb?: (error: string, rep: ModifyDeviceDataResponse) => void
  ): Promise<ModifyDeviceDataResponse> {
    return this.request("ModifyDeviceData", req, cb)
  }

  /**
   * 直播拉流接口
   */
  async DescribeLiveStream(
    req: DescribeLiveStreamRequest,
    cb?: (error: string, rep: DescribeLiveStreamResponse) => void
  ): Promise<DescribeLiveStreamResponse> {
    return this.request("DescribeLiveStream", req, cb)
  }

  /**
   * 编辑直播接口
   */
  async ModifyLiveChannel(
    req: ModifyLiveChannelRequest,
    cb?: (error: string, rep: ModifyLiveChannelResponse) => void
  ): Promise<ModifyLiveChannelResponse> {
    return this.request("ModifyLiveChannel", req, cb)
  }

  /**
   * 查看消息转发配置详情
   */
  async DescribeMessageForward(
    req: DescribeMessageForwardRequest,
    cb?: (error: string, rep: DescribeMessageForwardResponse) => void
  ): Promise<DescribeMessageForwardResponse> {
    return this.request("DescribeMessageForward", req, cb)
  }

  /**
   * 本接口(DeleteDeviceGroup)用于删除分组。
   */
  async DeleteDeviceGroup(
    req: DeleteDeviceGroupRequest,
    cb?: (error: string, rep: DeleteDeviceGroupResponse) => void
  ): Promise<DeleteDeviceGroupResponse> {
    return this.request("DeleteDeviceGroup", req, cb)
  }

  /**
   * 获取场景绑定设备列表
   */
  async DescribeBindSceneDevices(
    req: DescribeBindSceneDevicesRequest,
    cb?: (error: string, rep: DescribeBindSceneDevicesResponse) => void
  ): Promise<DescribeBindSceneDevicesResponse> {
    return this.request("DescribeBindSceneDevices", req, cb)
  }

  /**
   * 本接口(ControlDevicePTZ) 用于对支持GB28181 PTZ信令的设备进行远程控制。
   */
  async ControlDevicePTZ(
    req: ControlDevicePTZRequest,
    cb?: (error: string, rep: ControlDevicePTZResponse) => void
  ): Promise<ControlDevicePTZResponse> {
    return this.request("ControlDevicePTZ", req, cb)
  }

  /**
   * 获取直播录制计划列表
   */
  async DescribeLiveRecordPlanIds(
    req: DescribeLiveRecordPlanIdsRequest,
    cb?: (error: string, rep: DescribeLiveRecordPlanIdsResponse) => void
  ): Promise<DescribeLiveRecordPlanIdsResponse> {
    return this.request("DescribeLiveRecordPlanIds", req, cb)
  }

  /**
   * 根据时间获取回放文件列表(云端录制用)
   */
  async DescribeVideoList(
    req: DescribeVideoListRequest,
    cb?: (error: string, rep: DescribeVideoListResponse) => void
  ): Promise<DescribeVideoListResponse> {
    return this.request("DescribeVideoList", req, cb)
  }

  /**
   * 直播录像编辑
   */
  async ModifyLiveVideo(
    req: ModifyLiveVideoRequest,
    cb?: (error: string, rep: ModifyLiveVideoResponse) => void
  ): Promise<ModifyLiveVideoResponse> {
    return this.request("ModifyLiveVideo", req, cb)
  }

  /**
   * 直播详情接口
   */
  async DescribeLiveChannel(
    req: DescribeLiveChannelRequest,
    cb?: (error: string, rep: DescribeLiveChannelResponse) => void
  ): Promise<DescribeLiveChannelResponse> {
    return this.request("DescribeLiveChannel", req, cb)
  }

  /**
   * 本接口(DescribeAllDeviceList) 用于获取设备列表。
   */
  async DescribeAllDeviceList(
    req: DescribeAllDeviceListRequest,
    cb?: (error: string, rep: DescribeAllDeviceListResponse) => void
  ): Promise<DescribeAllDeviceListResponse> {
    return this.request("DescribeAllDeviceList", req, cb)
  }

  /**
   * 删除场景
   */
  async DeleteScene(
    req: DeleteSceneRequest,
    cb?: (error: string, rep: DeleteSceneResponse) => void
  ): Promise<DeleteSceneResponse> {
    return this.request("DeleteScene", req, cb)
  }

  /**
   * 本接口用于获取SIP服务器相关配置，用户可以通过这些配置项，将设备通过GB28181协议注册到本服务。
   */
  async DescribeSIPServer(
    req?: DescribeSIPServerRequest,
    cb?: (error: string, rep: DescribeSIPServerResponse) => void
  ): Promise<DescribeSIPServerResponse> {
    return this.request("DescribeSIPServer", req, cb)
  }

  /**
   * 编辑设备订阅状态
   */
  async ModifySubscriptionStatus(
    req: ModifySubscriptionStatusRequest,
    cb?: (error: string, rep: ModifySubscriptionStatusResponse) => void
  ): Promise<ModifySubscriptionStatusResponse> {
    return this.request("ModifySubscriptionStatus", req, cb)
  }

  /**
   * 本接口(UpdateRecordPlan)用于更新录制计划。
   */
  async UpdateRecordPlan(
    req: UpdateRecordPlanRequest,
    cb?: (error: string, rep: UpdateRecordPlanResponse) => void
  ): Promise<UpdateRecordPlanResponse> {
    return this.request("UpdateRecordPlan", req, cb)
  }

  /**
   * 创建直播频道
   */
  async CreateLiveChannel(
    req: CreateLiveChannelRequest,
    cb?: (error: string, rep: CreateLiveChannelResponse) => void
  ): Promise<CreateLiveChannelResponse> {
    return this.request("CreateLiveChannel", req, cb)
  }

  /**
   * 本接口(BindGroupDevices) 用于绑定设备到分组。
   */
  async BindGroupDevices(
    req: BindGroupDevicesRequest,
    cb?: (error: string, rep: BindGroupDevicesResponse) => void
  ): Promise<BindGroupDevicesResponse> {
    return this.request("BindGroupDevices", req, cb)
  }

  /**
   * 获取直播录制计划详情
   */
  async DescribeLiveRecordPlanById(
    req: DescribeLiveRecordPlanByIdRequest,
    cb?: (error: string, rep: DescribeLiveRecordPlanByIdResponse) => void
  ): Promise<DescribeLiveRecordPlanByIdResponse> {
    return this.request("DescribeLiveRecordPlanById", req, cb)
  }

  /**
   * 本接口(DescribeGroupById)用于根据分组ID查询分组。
   */
  async DescribeGroupById(
    req: DescribeGroupByIdRequest,
    cb?: (error: string, rep: DescribeGroupByIdResponse) => void
  ): Promise<DescribeGroupByIdResponse> {
    return this.request("DescribeGroupById", req, cb)
  }

  /**
   * 本接口(CreateRecordPlan) 用于创建录制计划，使设备与时间模板绑定，以便及时启动录制
   */
  async CreateRecordPlan(
    req: CreateRecordPlanRequest,
    cb?: (error: string, rep: CreateRecordPlanResponse) => void
  ): Promise<CreateRecordPlanResponse> {
    return this.request("CreateRecordPlan", req, cb)
  }

  /**
   * 本接口(CreateTimeTemplate) 用于根据模板描述的具体录制时间片段，创建定制化的时间模板。
   */
  async CreateTimeTemplate(
    req: CreateTimeTemplateRequest,
    cb?: (error: string, rep: CreateTimeTemplateResponse) => void
  ): Promise<CreateTimeTemplateResponse> {
    return this.request("CreateTimeTemplate", req, cb)
  }

  /**
   * 直播列表接口
   */
  async DescribeLiveChannelList(
    req: DescribeLiveChannelListRequest,
    cb?: (error: string, rep: DescribeLiveChannelListResponse) => void
  ): Promise<DescribeLiveChannelListResponse> {
    return this.request("DescribeLiveChannelList", req, cb)
  }
}
