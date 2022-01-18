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
  DescribePresetListRequest,
  ControlRecordStreamRequest,
  CreateRecordingPlanResponse,
  ModifySubscriptionStatusRequest,
  CreateSceneResponse,
  DeleteTimeTemplateResponse,
  DescribeMonitorDataByDateRequest,
  ModifyLiveChannelResponse,
  ServerConfiguration,
  DescribeLiveVideoListRequest,
  GetRecordPlanByDevRequest,
  GetRecordDatesByDevResponse,
  ControlChannelPTZResponse,
  DescribeChannelsRequest,
  DescribeLiveChannelRequest,
  DescribeRecordDatesByChannelResponse,
  DescribeRecordDatesByChannelRequest,
  DescribeVideoListByChannelRequest,
  ModifyPresetResponse,
  DescribeGroupByPathResponse,
  DescribeAbnormalEventsRequest,
  ModifyPresetRequest,
  DescribeSubscriptionStatusResponse,
  DescribeScenesResponse,
  DeleteRecordingPlanRequest,
  DescribeBindSceneChannelsResponse,
  DescribeSIPServerRequest,
  DescribeVideoListByChannelResponse,
  CreateLiveRecordPlanResponse,
  GetRecordPlansRequest,
  DeviceItem,
  DeleteDeviceGroupResponse,
  DescribeWarningsResponse,
  DeleteRecordPlanResponse,
  DeleteMessageForwardResponse,
  GetTimeTemplatesRequest,
  UpdateDeviceGroupResponse,
  ModifyRecordingPlanRequest,
  DescribeDeviceEventRequest,
  GetVideoListByConRequest,
  ResetWarningRequest,
  DescribeDeviceMonitorDataResponse,
  DevGroupInfo,
  DescribeDeviceListRequest,
  DescribeRecordingPlansResponse,
  ControlHomePositionResponse,
  DescribeLiveRecordPlanByIdRequest,
  LiveRecordPlanItem,
  DescribeVideoListResponse,
  RecordPlanDetail,
  RecordTaskItem,
  ChannelItem,
  DescribeIPCChannelsRequest,
  DescribeSubGroupsRequest,
  UpdateTimeTemplateRequest,
  DeleteRecordPlanRequest,
  CreateDeviceGroupResponse,
  GetVideoListByConResponse,
  DescribeCurrentDeviceDataRequest,
  LiveRecordItem,
  DescribeIPCChannelsResponse,
  UpdateRecordPlanRequest,
  DescribeRecordingPlanByIdRequest,
  ModifyDeviceDataResponse,
  DescribeStatisticDetailsResponse,
  DescribeWarnModResponse,
  GroupDeviceItem,
  DescribeSubGroupsResponse,
  DescribeChannelStreamURLResponse,
  DescribeStatisticDetailsRequest,
  DeleteDeviceRequest,
  UpdateDevicePassWordRequest,
  DescribeMessageForwardRequest,
  CreateTimeTemplateRequest,
  ModifyBindSceneChannelsResponse,
  CreateMessageForwardRequest,
  GroupItem,
  DeleteWarningRequest,
  ModifyBindPlanLiveChannelRequest,
  DescribeLiveStreamRequest,
  ModifyMessageForwardRequest,
  ModifyLiveRecordPlanResponse,
  DescribeXP2PDataResponse,
  DescribeDeviceEventResponse,
  RecordStatisticValue,
  ModifySceneRequest,
  DescribeAllDeviceListRequest,
  DescribeRecordDatesByLiveRequest,
  DescribeDevicePassWordRequest,
  GetRecordPlanByIdRequest,
  ModifyRecordingPlanResponse,
  DescribeLiveChannelListRequest,
  GetRecordPlanByDevResponse,
  DeleteVideoListRequest,
  GroupInfo,
  ControlPresetRequest,
  CreateRecordPlanRequest,
  DescribeRecordStreamData,
  DeleteRecordingPlanResponse,
  CreateDeviceGroupRequest,
  SceneItem,
  ModifyBindSceneChannelsRequest,
  DescribeLiveRecordPlanIdsResponse,
  ModifyBindSceneDeviceRequest,
  CreateDeviceResponse,
  CreateDeviceRequest,
  WarningsData,
  DescribeStatisticSummaryResponse,
  ModifyBindPlanLiveChannelResponse,
  DescribeRecordStreamRequest,
  PresetItem,
  BindGroupDevicesRequest,
  ControlHomePositionRequest,
  ModifyLiveRecordPlanRequest,
  DescribeSceneResponse,
  DescribeDeviceResponse,
  GetTimeTemplateByIdResponse,
  DescribeLiveChannelResponse,
  DescribeChannelsResponse,
  DeviceMonitorValue,
  DescribeMessageForwardsRequest,
  ControlDevicePTZResponse,
  DescribeRecordingPlansRequest,
  TimeTemplateSpec,
  ControlDevicePTZRequest,
  UpdateDeviceGroupRequest,
  DescribeChannelsByLiveRecordPlanResponse,
  DescribeGroupDevicesRequest,
  DescribeGroupByIdRequest,
  Events,
  UpdateDevicePassWordResponse,
  DescribeLiveRecordPlanByIdResponse,
  DeleteChannelRequest,
  DescribeXP2PDataRequest,
  UpdateTimeTemplateResponse,
  DescribeSubscriptionStatusRequest,
  DescribeDeviceStreamsRequest,
  DescribeRecordStreamResponse,
  CreateRecordPlanResponse,
  DescribeWarningsRequest,
  CreateSceneRequest,
  AllDeviceInfo,
  DescribeAbnormalEventsResponse,
  DescribeDeviceStreamsResponse,
  DescribeLiveVideoListResponse,
  DeleteDeviceGroupRequest,
  DescribeSceneRequest,
  DescribeDeviceRequest,
  ControlPresetResponse,
  DescribeDeviceGroupResponse,
  DeleteChannelResponse,
  ModifySubscriptionStatusResponse,
  MessageForward,
  ResetWarningResponse,
  ModifyDeviceDataRequest,
  DeleteSceneResponse,
  GetRecordDatesByDevRequest,
  DescribeLiveChannelListResponse,
  GetTimeTemplatesResponse,
  CreateLiveChannelResponse,
  DeleteVideoListResponse,
  ModifyLiveVideoResponse,
  DescribeChannelStreamURLRequest,
  DescribeAllDeviceListResponse,
  DescribeStatisticSummaryRequest,
  DescribeGroupsResponse,
  ChannelDetail,
  DescribeChannelLiveStreamURLResponse,
  DescribeDeviceStreamsData,
  DeleteLiveRecordPlanRequest,
  ModifyBindRecordingPlanRequest,
  DeleteDeviceResponse,
  DeleteLiveVideoListResponse,
  DescribeDeviceMonitorDataRequest,
  CreateTimeTemplateResponse,
  DeleteLiveChannelRequest,
  StatisticItem,
  DescribeChannelLiveStreamURLRequest,
  DescribeSIPServerResponse,
  DescribeGroupByPathRequest,
  DescribeRecordDatesByLiveResponse,
  UpdateRecordPlanResponse,
  ModifyBindSceneDeviceResponse,
  AbnormalEventsInfo,
  TimeTemplateItem,
  AbnormalEvents,
  DescribeDeviceGroupRequest,
  LiveChannelInfo,
  LiveChannelItem,
  DescribeGroupsRequest,
  ControlChannelPTZRequest,
  GetRecordPlansResponse,
  DescribeChannelsByLiveRecordPlanRequest,
  ControlChannelLocalRecordRequest,
  ControlChannelLocalRecordResponse,
  GetTimeTemplateByIdRequest,
  RecordPlanItem,
  DescribeMessageForwardsResponse,
  ModifyVideoInfoRequest,
  DescribeCurrentDeviceDataResponse,
  GetRecordPlanByIdResponse,
  DeleteTimeTemplateRequest,
  DeleteWarningResponse,
  ModifyLiveChannelRequest,
  DescribeMessageForwardResponse,
  DescribeRecordingPlanByIdResponse,
  DescribeWarnModRequest,
  ModifyBindRecordingPlanResponse,
  DescribeLiveRecordPlanIdsRequest,
  DeleteLiveVideoListRequest,
  ModifyVideoInfoResponse,
  ModifyMessageForwardResponse,
  DescribeDeviceListResponse,
  DescribeScenesRequest,
  DeleteLiveRecordPlanResponse,
  DescribeBindSceneChannelsRequest,
  DescribePresetListResponse,
  DescribeGroupByIdResponse,
  ControlRecordStreamResponse,
  DeleteMessageForwardRequest,
  DeleteLiveChannelResponse,
  StreamAddress,
  BindGroupDevicesResponse,
  DescribeChannelLocalRecordURLResponse,
  RecordStatistic,
  DescribeVideoListRequest,
  CreateLiveRecordPlanRequest,
  DescribeDevicePassWordResponse,
  ModifySceneResponse,
  DescribeBindSceneDevicesRequest,
  DescribeBindSceneDevicesResponse,
  DescribeMonitorDataByDateResponse,
  ModifyLiveVideoRequest,
  DescribeChannelLocalRecordURLRequest,
  CreateMessageForwardResponse,
  CreateLiveChannelRequest,
  DescribeGroupDevicesResponse,
  DeleteSceneRequest,
  CreateRecordingPlanRequest,
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
请使用DescribeChannels接口
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
   * 本接口(DescribeStatisticSummary)用于查询用户昨日的概览数据。
   */
  async DescribeStatisticSummary(
    req: DescribeStatisticSummaryRequest,
    cb?: (error: string, rep: DescribeStatisticSummaryResponse) => void
  ): Promise<DescribeStatisticSummaryResponse> {
    return this.request("DescribeStatisticSummary", req, cb)
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
   * 场景详情
   */
  async DescribeScene(
    req: DescribeSceneRequest,
    cb?: (error: string, rep: DescribeSceneResponse) => void
  ): Promise<DescribeSceneResponse> {
    return this.request("DescribeScene", req, cb)
  }

  /**
   * 获取指定设备详细信息
   */
  async DescribeDevice(
    req: DescribeDeviceRequest,
    cb?: (error: string, rep: DescribeDeviceResponse) => void
  ): Promise<DescribeDeviceResponse> {
    return this.request("DescribeDevice", req, cb)
  }

  /**
   * 本接口(ModifyBindRecordingPlan)用于更新录制计划绑定的通道
   */
  async ModifyBindRecordingPlan(
    req: ModifyBindRecordingPlanRequest,
    cb?: (error: string, rep: ModifyBindRecordingPlanResponse) => void
  ): Promise<ModifyBindRecordingPlanResponse> {
    return this.request("ModifyBindRecordingPlan", req, cb)
  }

  /**
   * 本接口(DescribeVideoListByChannel)用于查询指定通道的录制文件列表
   */
  async DescribeVideoListByChannel(
    req: DescribeVideoListByChannelRequest,
    cb?: (error: string, rep: DescribeVideoListByChannelResponse) => void
  ): Promise<DescribeVideoListByChannelResponse> {
    return this.request("DescribeVideoListByChannel", req, cb)
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
   * 修改场景
   */
  async ModifyScene(
    req: ModifySceneRequest,
    cb?: (error: string, rep: ModifySceneResponse) => void
  ): Promise<ModifySceneResponse> {
    return this.request("ModifyScene", req, cb)
  }

  /**
   * 本接口(DescribeRecordingPlanById)用于根据录制计划ID获取录制计划。
   */
  async DescribeRecordingPlanById(
    req: DescribeRecordingPlanByIdRequest,
    cb?: (error: string, rep: DescribeRecordingPlanByIdResponse) => void
  ): Promise<DescribeRecordingPlanByIdResponse> {
    return this.request("DescribeRecordingPlanById", req, cb)
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
   * 查询设备统计当前信息
   */
  async DescribeCurrentDeviceData(
    req?: DescribeCurrentDeviceDataRequest,
    cb?: (error: string, rep: DescribeCurrentDeviceDataResponse) => void
  ): Promise<DescribeCurrentDeviceDataResponse> {
    return this.request("DescribeCurrentDeviceData", req, cb)
  }

  /**
     * 本接口(DescribeDeviceStreams)用于获取设备实时流地址。
请使用DescribeChannelStreamURL接口
     */
  async DescribeDeviceStreams(
    req: DescribeDeviceStreamsRequest,
    cb?: (error: string, rep: DescribeDeviceStreamsResponse) => void
  ): Promise<DescribeDeviceStreamsResponse> {
    return this.request("DescribeDeviceStreams", req, cb)
  }

  /**
     * 本接口(GetVideoListByCon)用于查询设备的录制文件列表
请使用DescribeVideoListByChannel接口
     */
  async GetVideoListByCon(
    req: GetVideoListByConRequest,
    cb?: (error: string, rep: GetVideoListByConResponse) => void
  ): Promise<GetVideoListByConResponse> {
    return this.request("GetVideoListByCon", req, cb)
  }

  /**
   * 本接口(DescribeRecordingPlans)用于获取用户的全部录制计划。
   */
  async DescribeRecordingPlans(
    req?: DescribeRecordingPlansRequest,
    cb?: (error: string, rep: DescribeRecordingPlansResponse) => void
  ): Promise<DescribeRecordingPlansResponse> {
    return this.request("DescribeRecordingPlans", req, cb)
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
请使用DeleteRecordingPlan接口
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
   * 本接口(DeleteTimeTemplate) 用于删除时间模板。
   */
  async DeleteTimeTemplate(
    req: DeleteTimeTemplateRequest,
    cb?: (error: string, rep: DeleteTimeTemplateResponse) => void
  ): Promise<DeleteTimeTemplateResponse> {
    return this.request("DeleteTimeTemplate", req, cb)
  }

  /**
   * 本接口（DescribeChannels）用于获取设备下属通道列表
   */
  async DescribeChannels(
    req: DescribeChannelsRequest,
    cb?: (error: string, rep: DescribeChannelsResponse) => void
  ): Promise<DescribeChannelsResponse> {
    return this.request("DescribeChannels", req, cb)
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
   * 重置设备告警
   */
  async ResetWarning(
    req: ResetWarningRequest,
    cb?: (error: string, rep: ResetWarningResponse) => void
  ): Promise<ResetWarningResponse> {
    return this.request("ResetWarning", req, cb)
  }

  /**
     * 本接口(ControlDevicePTZ) 用于对支持GB28181 PTZ信令的设备进行远程控制。
请使用ControlChannelPTZ接口
     */
  async ControlDevicePTZ(
    req: ControlDevicePTZRequest,
    cb?: (error: string, rep: ControlDevicePTZResponse) => void
  ): Promise<ControlDevicePTZResponse> {
    return this.request("ControlDevicePTZ", req, cb)
  }

  /**
     * 本接口(GetRecordDatesByDev)用于查询设备含有录像文件的日期列表。
请使用DescribeRecordDatesByChannel接口
     */
  async GetRecordDatesByDev(
    req: GetRecordDatesByDevRequest,
    cb?: (error: string, rep: GetRecordDatesByDevResponse) => void
  ): Promise<GetRecordDatesByDevResponse> {
    return this.request("GetRecordDatesByDev", req, cb)
  }

  /**
   * 看守位控制
   */
  async ControlHomePosition(
    req: ControlHomePositionRequest,
    cb?: (error: string, rep: ControlHomePositionResponse) => void
  ): Promise<ControlHomePositionResponse> {
    return this.request("ControlHomePosition", req, cb)
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
   * 本接口(DescribeGroupById)用于根据分组ID查询分组。
   */
  async DescribeGroupById(
    req: DescribeGroupByIdRequest,
    cb?: (error: string, rep: DescribeGroupByIdResponse) => void
  ): Promise<DescribeGroupByIdResponse> {
    return this.request("DescribeGroupById", req, cb)
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
   * 本接口(CreateDeviceGroup) 用于创建设备管理分组。
   */
  async CreateDeviceGroup(
    req: CreateDeviceGroupRequest,
    cb?: (error: string, rep: CreateDeviceGroupResponse) => void
  ): Promise<CreateDeviceGroupResponse> {
    return this.request("CreateDeviceGroup", req, cb)
  }

  /**
     * 本接口（ControlChannelLocalRecord）用于对通道本地回放流进行控制，包括暂停、播放、拉动、结束等

     */
  async ControlChannelLocalRecord(
    req: ControlChannelLocalRecordRequest,
    cb?: (error: string, rep: ControlChannelLocalRecordResponse) => void
  ): Promise<ControlChannelLocalRecordResponse> {
    return this.request("ControlChannelLocalRecord", req, cb)
  }

  /**
     * 本接口（DescribeChannelLocalRecordURL）用于将NVR等设备对应通道本地回放文件，通过GB28181信令推送至云端，并生成对应的实时视频流URL，流地址URL是动态生成，如需重新播放请重新调用此接口获取最新地址。
正常推流，如未设置对应录制计划，且180s无人观看此流，将会被自动掐断。
     */
  async DescribeChannelLocalRecordURL(
    req: DescribeChannelLocalRecordURLRequest,
    cb?: (error: string, rep: DescribeChannelLocalRecordURLResponse) => void
  ): Promise<DescribeChannelLocalRecordURLResponse> {
    return this.request("DescribeChannelLocalRecordURL", req, cb)
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
   * 编辑设备订阅状态
   */
  async ModifySubscriptionStatus(
    req: ModifySubscriptionStatusRequest,
    cb?: (error: string, rep: ModifySubscriptionStatusResponse) => void
  ): Promise<ModifySubscriptionStatusResponse> {
    return this.request("ModifySubscriptionStatus", req, cb)
  }

  /**
   * 告警等级列表
   */
  async DescribeWarnMod(
    req?: DescribeWarnModRequest,
    cb?: (error: string, rep: DescribeWarnModResponse) => void
  ): Promise<DescribeWarnModResponse> {
    return this.request("DescribeWarnMod", req, cb)
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
   * 获取设备事件
   */
  async DescribeDeviceEvent(
    req: DescribeDeviceEventRequest,
    cb?: (error: string, rep: DescribeDeviceEventResponse) => void
  ): Promise<DescribeDeviceEventResponse> {
    return this.request("DescribeDeviceEvent", req, cb)
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
     * 本接口用于删除设备下的通道
注意： 在线状态的设备不允许删除
     */
  async DeleteChannel(
    req: DeleteChannelRequest,
    cb?: (error: string, rep: DeleteChannelResponse) => void
  ): Promise<DeleteChannelResponse> {
    return this.request("DeleteChannel", req, cb)
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
   * 场景绑定/解绑通道接口
   */
  async ModifyBindSceneDevice(
    req: ModifyBindSceneDeviceRequest,
    cb?: (error: string, rep: ModifyBindSceneDeviceResponse) => void
  ): Promise<ModifyBindSceneDeviceResponse> {
    return this.request("ModifyBindSceneDevice", req, cb)
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
     * 本接口(DescribeChannelLiveStreamURL)用于获取设备指定通道实时流地址，地址是动态生成，如重新播放需要调用此接口重新获取最新播放地址。
正常推流，如未设置对应录制计划，且180s无人观看此流，将会被自动掐断。
     */
  async DescribeChannelLiveStreamURL(
    req: DescribeChannelLiveStreamURLRequest,
    cb?: (error: string, rep: DescribeChannelLiveStreamURLResponse) => void
  ): Promise<DescribeChannelLiveStreamURLResponse> {
    return this.request("DescribeChannelLiveStreamURL", req, cb)
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
   * 本接口(CreateDevice) 用于创建设备。
   */
  async CreateDevice(
    req: CreateDeviceRequest,
    cb?: (error: string, rep: CreateDeviceResponse) => void
  ): Promise<CreateDeviceResponse> {
    return this.request("CreateDevice", req, cb)
  }

  /**
   * 设备告警-删除告警
   */
  async DeleteWarning(
    req: DeleteWarningRequest,
    cb?: (error: string, rep: DeleteWarningResponse) => void
  ): Promise<DeleteWarningResponse> {
    return this.request("DeleteWarning", req, cb)
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
   * 获取直播录制计划列表
   */
  async DescribeLiveRecordPlanIds(
    req: DescribeLiveRecordPlanIdsRequest,
    cb?: (error: string, rep: DescribeLiveRecordPlanIdsResponse) => void
  ): Promise<DescribeLiveRecordPlanIdsResponse> {
    return this.request("DescribeLiveRecordPlanIds", req, cb)
  }

  /**
   * 预置位控制
   */
  async ControlPreset(
    req: ControlPresetRequest,
    cb?: (error: string, rep: ControlPresetResponse) => void
  ): Promise<ControlPresetResponse> {
    return this.request("ControlPreset", req, cb)
  }

  /**
     * 本接口(CreateRecordPlan) 用于创建录制计划，使设备与时间模板绑定，以便及时启动录制
请使用CreateRecordingPlan代替
     */
  async CreateRecordPlan(
    req: CreateRecordPlanRequest,
    cb?: (error: string, rep: CreateRecordPlanResponse) => void
  ): Promise<CreateRecordPlanResponse> {
    return this.request("CreateRecordPlan", req, cb)
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
   * 删除录像存储列表
   */
  async DeleteVideoList(
    req: DeleteVideoListRequest,
    cb?: (error: string, rep: DeleteVideoListResponse) => void
  ): Promise<DeleteVideoListResponse> {
    return this.request("DeleteVideoList", req, cb)
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
   * 本接口(UpdateTimeTemplate)用于更新时间模板。
   */
  async UpdateTimeTemplate(
    req: UpdateTimeTemplateRequest,
    cb?: (error: string, rep: UpdateTimeTemplateResponse) => void
  ): Promise<UpdateTimeTemplateResponse> {
    return this.request("UpdateTimeTemplate", req, cb)
  }

  /**
   * 本接口(CreateRecordingPlan) 用于创建录制计划，使通道与时间模板绑定，以便及时启动录制
   */
  async CreateRecordingPlan(
    req: CreateRecordingPlanRequest,
    cb?: (error: string, rep: CreateRecordingPlanResponse) => void
  ): Promise<CreateRecordingPlanResponse> {
    return this.request("CreateRecordingPlan", req, cb)
  }

  /**
   * 查询设备统计monitor信息
   */
  async DescribeDeviceMonitorData(
    req: DescribeDeviceMonitorDataRequest,
    cb?: (error: string, rep: DescribeDeviceMonitorDataResponse) => void
  ): Promise<DescribeDeviceMonitorDataResponse> {
    return this.request("DescribeDeviceMonitorData", req, cb)
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
   * 查看消息转发配置列表
   */
  async DescribeMessageForwards(
    req: DescribeMessageForwardsRequest,
    cb?: (error: string, rep: DescribeMessageForwardsResponse) => void
  ): Promise<DescribeMessageForwardsResponse> {
    return this.request("DescribeMessageForwards", req, cb)
  }

  /**
   * 获取预置位列表
   */
  async DescribePresetList(
    req: DescribePresetListRequest,
    cb?: (error: string, rep: DescribePresetListResponse) => void
  ): Promise<DescribePresetListResponse> {
    return this.request("DescribePresetList", req, cb)
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
   * 本接口(DescribeDevicesList) 用于获取设备列表，支持模糊搜索
   */
  async DescribeDeviceList(
    req: DescribeDeviceListRequest,
    cb?: (error: string, rep: DescribeDeviceListResponse) => void
  ): Promise<DescribeDeviceListResponse> {
    return this.request("DescribeDeviceList", req, cb)
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
   * 查看消息转发配置详情
   */
  async DescribeMessageForward(
    req: DescribeMessageForwardRequest,
    cb?: (error: string, rep: DescribeMessageForwardResponse) => void
  ): Promise<DescribeMessageForwardResponse> {
    return this.request("DescribeMessageForward", req, cb)
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
   * 获取异常事件统计
   */
  async DescribeAbnormalEvents(
    req: DescribeAbnormalEventsRequest,
    cb?: (error: string, rep: DescribeAbnormalEventsResponse) => void
  ): Promise<DescribeAbnormalEventsResponse> {
    return this.request("DescribeAbnormalEvents", req, cb)
  }

  /**
     * 本接口(GetRecordPlanById)用于根据录制计划ID获取录制计划。
请使用DescribeRecordingPlanById接口
     */
  async GetRecordPlanById(
    req: GetRecordPlanByIdRequest,
    cb?: (error: string, rep: GetRecordPlanByIdResponse) => void
  ): Promise<GetRecordPlanByIdResponse> {
    return this.request("GetRecordPlanById", req, cb)
  }

  /**
     * 获取回放视频流地址
请使用DescribeChannelLocalRecordURL接口

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
   * 删除直播录制计划
   */
  async DeleteLiveRecordPlan(
    req: DeleteLiveRecordPlanRequest,
    cb?: (error: string, rep: DeleteLiveRecordPlanResponse) => void
  ): Promise<DeleteLiveRecordPlanResponse> {
    return this.request("DeleteLiveRecordPlan", req, cb)
  }

  /**
   * 运营中心-设备录像存储统计
   */
  async DescribeMonitorDataByDate(
    req: DescribeMonitorDataByDateRequest,
    cb?: (error: string, rep: DescribeMonitorDataByDateResponse) => void
  ): Promise<DescribeMonitorDataByDateResponse> {
    return this.request("DescribeMonitorDataByDate", req, cb)
  }

  /**
   * 获取告警列表
   */
  async DescribeWarnings(
    req: DescribeWarningsRequest,
    cb?: (error: string, rep: DescribeWarningsResponse) => void
  ): Promise<DescribeWarningsResponse> {
    return this.request("DescribeWarnings", req, cb)
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
     * 本接口(ModifyRecordingPlan)用于更新录制计划。

     */
  async ModifyRecordingPlan(
    req: ModifyRecordingPlanRequest,
    cb?: (error: string, rep: ModifyRecordingPlanResponse) => void
  ): Promise<ModifyRecordingPlanResponse> {
    return this.request("ModifyRecordingPlan", req, cb)
  }

  /**
     * 本接口(DescribeChannelStreamURL)用于获取设备指定通道实时流地址，地址是动态生成，如重新播放需要调用此接口重新获取最新播放地址。
正常推流，如未设置对应录制计划，且180s无人观看此流，将会被自动掐断。
     */
  async DescribeChannelStreamURL(
    req: DescribeChannelStreamURLRequest,
    cb?: (error: string, rep: DescribeChannelStreamURLResponse) => void
  ): Promise<DescribeChannelStreamURLResponse> {
    return this.request("DescribeChannelStreamURL", req, cb)
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
请使用DescribeDevicesList接口
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
   * 创建直播频道
   */
  async CreateLiveChannel(
    req: CreateLiveChannelRequest,
    cb?: (error: string, rep: CreateLiveChannelResponse) => void
  ): Promise<CreateLiveChannelResponse> {
    return this.request("CreateLiveChannel", req, cb)
  }

  /**
   * 获取场景绑定通道列表
   */
  async DescribeBindSceneChannels(
    req: DescribeBindSceneChannelsRequest,
    cb?: (error: string, rep: DescribeBindSceneChannelsResponse) => void
  ): Promise<DescribeBindSceneChannelsResponse> {
    return this.request("DescribeBindSceneChannels", req, cb)
  }

  /**
     * 本接口(UpdateRecordPlan)用于更新录制计划。
请使用 ModifyRecordingPlan接口和ModifyBindRecordingPlan接口
     */
  async UpdateRecordPlan(
    req: UpdateRecordPlanRequest,
    cb?: (error: string, rep: UpdateRecordPlanResponse) => void
  ): Promise<UpdateRecordPlanResponse> {
    return this.request("UpdateRecordPlan", req, cb)
  }

  /**
     * 本接口(DeleteRecordingPlan)用于删除录制计划
录制计划删除的同时，会停止该录制计划下的全部录制任务。
     */
  async DeleteRecordingPlan(
    req: DeleteRecordingPlanRequest,
    cb?: (error: string, rep: DeleteRecordingPlanResponse) => void
  ): Promise<DeleteRecordingPlanResponse> {
    return this.request("DeleteRecordingPlan", req, cb)
  }

  /**
   * 本接口(ControlChannelPTZ) 用于对支持GB28181 PTZ信令的设备进行指定通道的远程控制。
   */
  async ControlChannelPTZ(
    req: ControlChannelPTZRequest,
    cb?: (error: string, rep: ControlChannelPTZResponse) => void
  ): Promise<ControlChannelPTZResponse> {
    return this.request("ControlChannelPTZ", req, cb)
  }

  /**
     * 对回放流进行控制，包括暂停、播放、拉动、结束等
请使用ControlChannelLocalRecord接口
     */
  async ControlRecordStream(
    req: ControlRecordStreamRequest,
    cb?: (error: string, rep: ControlRecordStreamResponse) => void
  ): Promise<ControlRecordStreamResponse> {
    return this.request("ControlRecordStream", req, cb)
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
   * 场景绑定解绑通道接口
   */
  async ModifyBindSceneChannels(
    req: ModifyBindSceneChannelsRequest,
    cb?: (error: string, rep: ModifyBindSceneChannelsResponse) => void
  ): Promise<ModifyBindSceneChannelsResponse> {
    return this.request("ModifyBindSceneChannels", req, cb)
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
   * 直播列表接口
   */
  async DescribeLiveChannelList(
    req: DescribeLiveChannelListRequest,
    cb?: (error: string, rep: DescribeLiveChannelListResponse) => void
  ): Promise<DescribeLiveChannelListResponse> {
    return this.request("DescribeLiveChannelList", req, cb)
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
   * 编辑预置位信息
   */
  async ModifyPreset(
    req: ModifyPresetRequest,
    cb?: (error: string, rep: ModifyPresetResponse) => void
  ): Promise<ModifyPresetResponse> {
    return this.request("ModifyPreset", req, cb)
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
   * 本接口(ModifyDeviceData)用于编辑设备信息。
   */
  async ModifyDeviceData(
    req: ModifyDeviceDataRequest,
    cb?: (error: string, rep: ModifyDeviceDataResponse) => void
  ): Promise<ModifyDeviceDataResponse> {
    return this.request("ModifyDeviceData", req, cb)
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
   * 删除直播接口
   */
  async DeleteLiveChannel(
    req: DeleteLiveChannelRequest,
    cb?: (error: string, rep: DeleteLiveChannelResponse) => void
  ): Promise<DeleteLiveChannelResponse> {
    return this.request("DeleteLiveChannel", req, cb)
  }

  /**
     * 本接口(GetRecordPlans)用于获取用户的全部录制计划。
请使用DescribeRecordingPlans接口
     */
  async GetRecordPlans(
    req?: GetRecordPlansRequest,
    cb?: (error: string, rep: GetRecordPlansResponse) => void
  ): Promise<GetRecordPlansResponse> {
    return this.request("GetRecordPlans", req, cb)
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
   * 本接口用于获取SIP服务器相关配置，用户可以通过这些配置项，将设备通过GB28181协议注册到本服务。
   */
  async DescribeSIPServer(
    req?: DescribeSIPServerRequest,
    cb?: (error: string, rep: DescribeSIPServerResponse) => void
  ): Promise<DescribeSIPServerResponse> {
    return this.request("DescribeSIPServer", req, cb)
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
   * 根据时间获取云端录制文件列表
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
   * 获取X-P2P的统计数据
   */
  async DescribeXP2PData(
    req: DescribeXP2PDataRequest,
    cb?: (error: string, rep: DescribeXP2PDataResponse) => void
  ): Promise<DescribeXP2PDataResponse> {
    return this.request("DescribeXP2PData", req, cb)
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
   * 本接口(DescribeRecordDatesByChannel)用于查询设备含有录像文件的日期列表。
   */
  async DescribeRecordDatesByChannel(
    req: DescribeRecordDatesByChannelRequest,
    cb?: (error: string, rep: DescribeRecordDatesByChannelResponse) => void
  ): Promise<DescribeRecordDatesByChannelResponse> {
    return this.request("DescribeRecordDatesByChannel", req, cb)
  }
}
