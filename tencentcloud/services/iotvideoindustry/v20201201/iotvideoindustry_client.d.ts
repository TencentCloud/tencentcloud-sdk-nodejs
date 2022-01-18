import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { DescribePresetListRequest, ControlRecordStreamRequest, CreateRecordingPlanResponse, ModifySubscriptionStatusRequest, CreateSceneResponse, DeleteTimeTemplateResponse, DescribeMonitorDataByDateRequest, ModifyLiveChannelResponse, DescribeLiveVideoListRequest, GetRecordPlanByDevRequest, GetRecordDatesByDevResponse, ControlChannelPTZResponse, DescribeChannelsRequest, DescribeLiveChannelRequest, DescribeRecordDatesByChannelResponse, DescribeRecordDatesByChannelRequest, DescribeVideoListByChannelRequest, ModifyPresetResponse, DescribeGroupByPathResponse, DescribeAbnormalEventsRequest, ModifyPresetRequest, DescribeSubscriptionStatusResponse, DescribeScenesResponse, DeleteRecordingPlanRequest, DescribeBindSceneChannelsResponse, DescribeSIPServerRequest, DescribeVideoListByChannelResponse, CreateLiveRecordPlanResponse, GetRecordPlansRequest, DeleteDeviceGroupResponse, DescribeWarningsResponse, DeleteRecordPlanResponse, DeleteMessageForwardResponse, GetTimeTemplatesRequest, UpdateDeviceGroupResponse, ModifyRecordingPlanRequest, DescribeDeviceEventRequest, GetVideoListByConRequest, ResetWarningRequest, DescribeDeviceMonitorDataResponse, DescribeDeviceListRequest, DescribeRecordingPlansResponse, ControlHomePositionResponse, DescribeLiveRecordPlanByIdRequest, DescribeVideoListResponse, DescribeIPCChannelsRequest, DescribeSubGroupsRequest, UpdateTimeTemplateRequest, DeleteRecordPlanRequest, CreateDeviceGroupResponse, GetVideoListByConResponse, DescribeCurrentDeviceDataRequest, DescribeIPCChannelsResponse, UpdateRecordPlanRequest, DescribeRecordingPlanByIdRequest, ModifyDeviceDataResponse, DescribeStatisticDetailsResponse, DescribeWarnModResponse, DescribeSubGroupsResponse, DescribeChannelStreamURLResponse, DescribeStatisticDetailsRequest, DeleteDeviceRequest, UpdateDevicePassWordRequest, DescribeMessageForwardRequest, CreateTimeTemplateRequest, ModifyBindSceneChannelsResponse, CreateMessageForwardRequest, DeleteWarningRequest, ModifyBindPlanLiveChannelRequest, DescribeLiveStreamRequest, ModifyMessageForwardRequest, ModifyLiveRecordPlanResponse, DescribeXP2PDataResponse, DescribeDeviceEventResponse, ModifySceneRequest, DescribeAllDeviceListRequest, DescribeRecordDatesByLiveRequest, DescribeDevicePassWordRequest, GetRecordPlanByIdRequest, ModifyRecordingPlanResponse, DescribeLiveChannelListRequest, GetRecordPlanByDevResponse, DeleteVideoListRequest, ControlPresetRequest, CreateRecordPlanRequest, DeleteRecordingPlanResponse, CreateDeviceGroupRequest, ModifyBindSceneChannelsRequest, DescribeLiveRecordPlanIdsResponse, ModifyBindSceneDeviceRequest, CreateDeviceResponse, CreateDeviceRequest, DescribeStatisticSummaryResponse, ModifyBindPlanLiveChannelResponse, DescribeRecordStreamRequest, BindGroupDevicesRequest, ControlHomePositionRequest, ModifyLiveRecordPlanRequest, DescribeSceneResponse, DescribeDeviceResponse, GetTimeTemplateByIdResponse, DescribeLiveChannelResponse, DescribeChannelsResponse, DescribeMessageForwardsRequest, ControlDevicePTZResponse, DescribeRecordingPlansRequest, ControlDevicePTZRequest, UpdateDeviceGroupRequest, DescribeChannelsByLiveRecordPlanResponse, DescribeGroupDevicesRequest, DescribeGroupByIdRequest, UpdateDevicePassWordResponse, DescribeLiveRecordPlanByIdResponse, DeleteChannelRequest, DescribeXP2PDataRequest, UpdateTimeTemplateResponse, DescribeSubscriptionStatusRequest, DescribeDeviceStreamsRequest, DescribeRecordStreamResponse, CreateRecordPlanResponse, DescribeWarningsRequest, CreateSceneRequest, DescribeAbnormalEventsResponse, DescribeDeviceStreamsResponse, DescribeLiveVideoListResponse, DeleteDeviceGroupRequest, DescribeSceneRequest, DescribeDeviceRequest, ControlPresetResponse, DescribeDeviceGroupResponse, DeleteChannelResponse, ModifySubscriptionStatusResponse, ResetWarningResponse, ModifyDeviceDataRequest, DeleteSceneResponse, GetRecordDatesByDevRequest, DescribeLiveChannelListResponse, GetTimeTemplatesResponse, CreateLiveChannelResponse, DeleteVideoListResponse, ModifyLiveVideoResponse, DescribeChannelStreamURLRequest, DescribeAllDeviceListResponse, DescribeStatisticSummaryRequest, DescribeGroupsResponse, DescribeChannelLiveStreamURLResponse, DeleteLiveRecordPlanRequest, ModifyBindRecordingPlanRequest, DeleteDeviceResponse, DeleteLiveVideoListResponse, DescribeDeviceMonitorDataRequest, CreateTimeTemplateResponse, DeleteLiveChannelRequest, DescribeChannelLiveStreamURLRequest, DescribeSIPServerResponse, DescribeGroupByPathRequest, DescribeRecordDatesByLiveResponse, UpdateRecordPlanResponse, ModifyBindSceneDeviceResponse, DescribeDeviceGroupRequest, DescribeGroupsRequest, ControlChannelPTZRequest, GetRecordPlansResponse, DescribeChannelsByLiveRecordPlanRequest, ControlChannelLocalRecordRequest, ControlChannelLocalRecordResponse, GetTimeTemplateByIdRequest, DescribeMessageForwardsResponse, ModifyVideoInfoRequest, DescribeCurrentDeviceDataResponse, GetRecordPlanByIdResponse, DeleteTimeTemplateRequest, DeleteWarningResponse, ModifyLiveChannelRequest, DescribeMessageForwardResponse, DescribeRecordingPlanByIdResponse, DescribeWarnModRequest, ModifyBindRecordingPlanResponse, DescribeLiveRecordPlanIdsRequest, DeleteLiveVideoListRequest, ModifyVideoInfoResponse, ModifyMessageForwardResponse, DescribeDeviceListResponse, DescribeScenesRequest, DeleteLiveRecordPlanResponse, DescribeBindSceneChannelsRequest, DescribePresetListResponse, DescribeGroupByIdResponse, ControlRecordStreamResponse, DeleteMessageForwardRequest, DeleteLiveChannelResponse, BindGroupDevicesResponse, DescribeChannelLocalRecordURLResponse, DescribeVideoListRequest, CreateLiveRecordPlanRequest, DescribeDevicePassWordResponse, ModifySceneResponse, DescribeBindSceneDevicesRequest, DescribeBindSceneDevicesResponse, DescribeMonitorDataByDateResponse, ModifyLiveVideoRequest, DescribeChannelLocalRecordURLRequest, CreateMessageForwardResponse, CreateLiveChannelRequest, DescribeGroupDevicesResponse, DeleteSceneRequest, CreateRecordingPlanRequest, DescribeLiveStreamResponse } from "./iotvideoindustry_models";
/**
 * iotvideoindustry client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 获取IPC设备下属通道
请使用DescribeChannels接口
     */
    DescribeIPCChannels(req: DescribeIPCChannelsRequest, cb?: (error: string, rep: DescribeIPCChannelsResponse) => void): Promise<DescribeIPCChannelsResponse>;
    /**
     * 修改录像存储列表
     */
    ModifyVideoInfo(req: ModifyVideoInfoRequest, cb?: (error: string, rep: ModifyVideoInfoResponse) => void): Promise<ModifyVideoInfoResponse>;
    /**
     * 本接口(DescribeSubGroups)用于查询分组下的子分组列表。
     */
    DescribeSubGroups(req: DescribeSubGroupsRequest, cb?: (error: string, rep: DescribeSubGroupsResponse) => void): Promise<DescribeSubGroupsResponse>;
    /**
     * 本接口(DescribeStatisticSummary)用于查询用户昨日的概览数据。
     */
    DescribeStatisticSummary(req: DescribeStatisticSummaryRequest, cb?: (error: string, rep: DescribeStatisticSummaryResponse) => void): Promise<DescribeStatisticSummaryResponse>;
    /**
     * 创建场景
     */
    CreateScene(req: CreateSceneRequest, cb?: (error: string, rep: CreateSceneResponse) => void): Promise<CreateSceneResponse>;
    /**
     * 场景详情
     */
    DescribeScene(req: DescribeSceneRequest, cb?: (error: string, rep: DescribeSceneResponse) => void): Promise<DescribeSceneResponse>;
    /**
     * 获取指定设备详细信息
     */
    DescribeDevice(req: DescribeDeviceRequest, cb?: (error: string, rep: DescribeDeviceResponse) => void): Promise<DescribeDeviceResponse>;
    /**
     * 本接口(ModifyBindRecordingPlan)用于更新录制计划绑定的通道
     */
    ModifyBindRecordingPlan(req: ModifyBindRecordingPlanRequest, cb?: (error: string, rep: ModifyBindRecordingPlanResponse) => void): Promise<ModifyBindRecordingPlanResponse>;
    /**
     * 本接口(DescribeVideoListByChannel)用于查询指定通道的录制文件列表
     */
    DescribeVideoListByChannel(req: DescribeVideoListByChannelRequest, cb?: (error: string, rep: DescribeVideoListByChannelResponse) => void): Promise<DescribeVideoListByChannelResponse>;
    /**
     * 直播拉流接口
     */
    DescribeLiveStream(req: DescribeLiveStreamRequest, cb?: (error: string, rep: DescribeLiveStreamResponse) => void): Promise<DescribeLiveStreamResponse>;
    /**
     * 修改场景
     */
    ModifyScene(req: ModifySceneRequest, cb?: (error: string, rep: ModifySceneResponse) => void): Promise<ModifySceneResponse>;
    /**
     * 本接口(DescribeRecordingPlanById)用于根据录制计划ID获取录制计划。
     */
    DescribeRecordingPlanById(req: DescribeRecordingPlanByIdRequest, cb?: (error: string, rep: DescribeRecordingPlanByIdResponse) => void): Promise<DescribeRecordingPlanByIdResponse>;
    /**
     * 本接口(DescribeGroupDevices)用于查询分组下的设备列表。
     */
    DescribeGroupDevices(req: DescribeGroupDevicesRequest, cb?: (error: string, rep: DescribeGroupDevicesResponse) => void): Promise<DescribeGroupDevicesResponse>;
    /**
     * 查询设备统计当前信息
     */
    DescribeCurrentDeviceData(req?: DescribeCurrentDeviceDataRequest, cb?: (error: string, rep: DescribeCurrentDeviceDataResponse) => void): Promise<DescribeCurrentDeviceDataResponse>;
    /**
     * 本接口(DescribeDeviceStreams)用于获取设备实时流地址。
请使用DescribeChannelStreamURL接口
     */
    DescribeDeviceStreams(req: DescribeDeviceStreamsRequest, cb?: (error: string, rep: DescribeDeviceStreamsResponse) => void): Promise<DescribeDeviceStreamsResponse>;
    /**
     * 本接口(GetVideoListByCon)用于查询设备的录制文件列表
请使用DescribeVideoListByChannel接口
     */
    GetVideoListByCon(req: GetVideoListByConRequest, cb?: (error: string, rep: GetVideoListByConResponse) => void): Promise<GetVideoListByConResponse>;
    /**
     * 本接口(DescribeRecordingPlans)用于获取用户的全部录制计划。
     */
    DescribeRecordingPlans(req?: DescribeRecordingPlansRequest, cb?: (error: string, rep: DescribeRecordingPlansResponse) => void): Promise<DescribeRecordingPlansResponse>;
    /**
     * 本接口(DescribeDeviceGroup)用于根据设备ID查询设备所在分组信息，可批量查询。
     */
    DescribeDeviceGroup(req: DescribeDeviceGroupRequest, cb?: (error: string, rep: DescribeDeviceGroupResponse) => void): Promise<DescribeDeviceGroupResponse>;
    /**
     * 本接口(DeleteRecordPlan)用于删除录制计划
录制计划删除的同时，会停止该录制计划下的全部录制任务。
请使用DeleteRecordingPlan接口
     */
    DeleteRecordPlan(req: DeleteRecordPlanRequest, cb?: (error: string, rep: DeleteRecordPlanResponse) => void): Promise<DeleteRecordPlanResponse>;
    /**
     * 创建消息转发配置
     */
    CreateMessageForward(req: CreateMessageForwardRequest, cb?: (error: string, rep: CreateMessageForwardResponse) => void): Promise<CreateMessageForwardResponse>;
    /**
     * 本接口(DeleteTimeTemplate) 用于删除时间模板。
     */
    DeleteTimeTemplate(req: DeleteTimeTemplateRequest, cb?: (error: string, rep: DeleteTimeTemplateResponse) => void): Promise<DeleteTimeTemplateResponse>;
    /**
     * 本接口（DescribeChannels）用于获取设备下属通道列表
     */
    DescribeChannels(req: DescribeChannelsRequest, cb?: (error: string, rep: DescribeChannelsResponse) => void): Promise<DescribeChannelsResponse>;
    /**
     * 编辑直播接口
     */
    ModifyLiveChannel(req: ModifyLiveChannelRequest, cb?: (error: string, rep: ModifyLiveChannelResponse) => void): Promise<ModifyLiveChannelResponse>;
    /**
     * 重置设备告警
     */
    ResetWarning(req: ResetWarningRequest, cb?: (error: string, rep: ResetWarningResponse) => void): Promise<ResetWarningResponse>;
    /**
     * 本接口(ControlDevicePTZ) 用于对支持GB28181 PTZ信令的设备进行远程控制。
请使用ControlChannelPTZ接口
     */
    ControlDevicePTZ(req: ControlDevicePTZRequest, cb?: (error: string, rep: ControlDevicePTZResponse) => void): Promise<ControlDevicePTZResponse>;
    /**
     * 本接口(GetRecordDatesByDev)用于查询设备含有录像文件的日期列表。
请使用DescribeRecordDatesByChannel接口
     */
    GetRecordDatesByDev(req: GetRecordDatesByDevRequest, cb?: (error: string, rep: GetRecordDatesByDevResponse) => void): Promise<GetRecordDatesByDevResponse>;
    /**
     * 看守位控制
     */
    ControlHomePosition(req: ControlHomePositionRequest, cb?: (error: string, rep: ControlHomePositionResponse) => void): Promise<ControlHomePositionResponse>;
    /**
     * 本接口(DescribeStatisticDetails)用于查询指定统计项详情，返回结果按天为单位聚合，支持的最大时间查询范围为31天。
     */
    DescribeStatisticDetails(req: DescribeStatisticDetailsRequest, cb?: (error: string, rep: DescribeStatisticDetailsResponse) => void): Promise<DescribeStatisticDetailsResponse>;
    /**
     * 本接口(DescribeGroupById)用于根据分组ID查询分组。
     */
    DescribeGroupById(req: DescribeGroupByIdRequest, cb?: (error: string, rep: DescribeGroupByIdResponse) => void): Promise<DescribeGroupByIdResponse>;
    /**
     * 本接口(CreateTimeTemplate) 用于根据模板描述的具体录制时间片段，创建定制化的时间模板。
     */
    CreateTimeTemplate(req: CreateTimeTemplateRequest, cb?: (error: string, rep: CreateTimeTemplateResponse) => void): Promise<CreateTimeTemplateResponse>;
    /**
     * 本接口(CreateDeviceGroup) 用于创建设备管理分组。
     */
    CreateDeviceGroup(req: CreateDeviceGroupRequest, cb?: (error: string, rep: CreateDeviceGroupResponse) => void): Promise<CreateDeviceGroupResponse>;
    /**
     * 本接口（ControlChannelLocalRecord）用于对通道本地回放流进行控制，包括暂停、播放、拉动、结束等

     */
    ControlChannelLocalRecord(req: ControlChannelLocalRecordRequest, cb?: (error: string, rep: ControlChannelLocalRecordResponse) => void): Promise<ControlChannelLocalRecordResponse>;
    /**
     * 本接口（DescribeChannelLocalRecordURL）用于将NVR等设备对应通道本地回放文件，通过GB28181信令推送至云端，并生成对应的实时视频流URL，流地址URL是动态生成，如需重新播放请重新调用此接口获取最新地址。
正常推流，如未设置对应录制计划，且180s无人观看此流，将会被自动掐断。
     */
    DescribeChannelLocalRecordURL(req: DescribeChannelLocalRecordURLRequest, cb?: (error: string, rep: DescribeChannelLocalRecordURLResponse) => void): Promise<DescribeChannelLocalRecordURLResponse>;
    /**
     * 本接口(UpdateDevicePassWord)用于修改设备密码。
     */
    UpdateDevicePassWord(req: UpdateDevicePassWordRequest, cb?: (error: string, rep: UpdateDevicePassWordResponse) => void): Promise<UpdateDevicePassWordResponse>;
    /**
     * 编辑设备订阅状态
     */
    ModifySubscriptionStatus(req: ModifySubscriptionStatusRequest, cb?: (error: string, rep: ModifySubscriptionStatusResponse) => void): Promise<ModifySubscriptionStatusResponse>;
    /**
     * 告警等级列表
     */
    DescribeWarnMod(req?: DescribeWarnModRequest, cb?: (error: string, rep: DescribeWarnModResponse) => void): Promise<DescribeWarnModResponse>;
    /**
     * 直播录制计划绑定解绑直播频道
     */
    ModifyBindPlanLiveChannel(req: ModifyBindPlanLiveChannelRequest, cb?: (error: string, rep: ModifyBindPlanLiveChannelResponse) => void): Promise<ModifyBindPlanLiveChannelResponse>;
    /**
     * 获取设备事件
     */
    DescribeDeviceEvent(req: DescribeDeviceEventRequest, cb?: (error: string, rep: DescribeDeviceEventResponse) => void): Promise<DescribeDeviceEventResponse>;
    /**
     * 编辑直播录制计划
     */
    ModifyLiveRecordPlan(req: ModifyLiveRecordPlanRequest, cb?: (error: string, rep: ModifyLiveRecordPlanResponse) => void): Promise<ModifyLiveRecordPlanResponse>;
    /**
     * 本接口用于删除设备下的通道
注意： 在线状态的设备不允许删除
     */
    DeleteChannel(req: DeleteChannelRequest, cb?: (error: string, rep: DeleteChannelResponse) => void): Promise<DeleteChannelResponse>;
    /**
     * 根据直播录制计划获取频道列表
     */
    DescribeChannelsByLiveRecordPlan(req: DescribeChannelsByLiveRecordPlanRequest, cb?: (error: string, rep: DescribeChannelsByLiveRecordPlanResponse) => void): Promise<DescribeChannelsByLiveRecordPlanResponse>;
    /**
     * 场景绑定/解绑通道接口
     */
    ModifyBindSceneDevice(req: ModifyBindSceneDeviceRequest, cb?: (error: string, rep: ModifyBindSceneDeviceResponse) => void): Promise<ModifyBindSceneDeviceResponse>;
    /**
     * 直播录像存储日期列表
     */
    DescribeRecordDatesByLive(req: DescribeRecordDatesByLiveRequest, cb?: (error: string, rep: DescribeRecordDatesByLiveResponse) => void): Promise<DescribeRecordDatesByLiveResponse>;
    /**
     * 本接口(DescribeChannelLiveStreamURL)用于获取设备指定通道实时流地址，地址是动态生成，如重新播放需要调用此接口重新获取最新播放地址。
正常推流，如未设置对应录制计划，且180s无人观看此流，将会被自动掐断。
     */
    DescribeChannelLiveStreamURL(req: DescribeChannelLiveStreamURLRequest, cb?: (error: string, rep: DescribeChannelLiveStreamURLResponse) => void): Promise<DescribeChannelLiveStreamURLResponse>;
    /**
     * 查询主设备订阅状态
     */
    DescribeSubscriptionStatus(req: DescribeSubscriptionStatusRequest, cb?: (error: string, rep: DescribeSubscriptionStatusResponse) => void): Promise<DescribeSubscriptionStatusResponse>;
    /**
     * 本接口(CreateDevice) 用于创建设备。
     */
    CreateDevice(req: CreateDeviceRequest, cb?: (error: string, rep: CreateDeviceResponse) => void): Promise<CreateDeviceResponse>;
    /**
     * 设备告警-删除告警
     */
    DeleteWarning(req: DeleteWarningRequest, cb?: (error: string, rep: DeleteWarningResponse) => void): Promise<DeleteWarningResponse>;
    /**
     * 本接口(DescribeGroups)用于批量查询分组信息。
     */
    DescribeGroups(req: DescribeGroupsRequest, cb?: (error: string, rep: DescribeGroupsResponse) => void): Promise<DescribeGroupsResponse>;
    /**
     * 获取直播录制计划列表
     */
    DescribeLiveRecordPlanIds(req: DescribeLiveRecordPlanIdsRequest, cb?: (error: string, rep: DescribeLiveRecordPlanIdsResponse) => void): Promise<DescribeLiveRecordPlanIdsResponse>;
    /**
     * 预置位控制
     */
    ControlPreset(req: ControlPresetRequest, cb?: (error: string, rep: ControlPresetResponse) => void): Promise<ControlPresetResponse>;
    /**
     * 本接口(CreateRecordPlan) 用于创建录制计划，使设备与时间模板绑定，以便及时启动录制
请使用CreateRecordingPlan代替
     */
    CreateRecordPlan(req: CreateRecordPlanRequest, cb?: (error: string, rep: CreateRecordPlanResponse) => void): Promise<CreateRecordPlanResponse>;
    /**
     * 本接口(UpdateDeviceGroup)用于修改分组信息。
     */
    UpdateDeviceGroup(req: UpdateDeviceGroupRequest, cb?: (error: string, rep: UpdateDeviceGroupResponse) => void): Promise<UpdateDeviceGroupResponse>;
    /**
     * 删除录像存储列表
     */
    DeleteVideoList(req: DeleteVideoListRequest, cb?: (error: string, rep: DeleteVideoListResponse) => void): Promise<DeleteVideoListResponse>;
    /**
     * 获取场景绑定设备列表
     */
    DescribeBindSceneDevices(req: DescribeBindSceneDevicesRequest, cb?: (error: string, rep: DescribeBindSceneDevicesResponse) => void): Promise<DescribeBindSceneDevicesResponse>;
    /**
     * 本接口(UpdateTimeTemplate)用于更新时间模板。
     */
    UpdateTimeTemplate(req: UpdateTimeTemplateRequest, cb?: (error: string, rep: UpdateTimeTemplateResponse) => void): Promise<UpdateTimeTemplateResponse>;
    /**
     * 本接口(CreateRecordingPlan) 用于创建录制计划，使通道与时间模板绑定，以便及时启动录制
     */
    CreateRecordingPlan(req: CreateRecordingPlanRequest, cb?: (error: string, rep: CreateRecordingPlanResponse) => void): Promise<CreateRecordingPlanResponse>;
    /**
     * 查询设备统计monitor信息
     */
    DescribeDeviceMonitorData(req: DescribeDeviceMonitorDataRequest, cb?: (error: string, rep: DescribeDeviceMonitorDataResponse) => void): Promise<DescribeDeviceMonitorDataResponse>;
    /**
     * 本接口(GetTimeTemplateById)用于根据模板ID获取时间模板详情。
     */
    GetTimeTemplateById(req: GetTimeTemplateByIdRequest, cb?: (error: string, rep: GetTimeTemplateByIdResponse) => void): Promise<GetTimeTemplateByIdResponse>;
    /**
     * 查看消息转发配置列表
     */
    DescribeMessageForwards(req: DescribeMessageForwardsRequest, cb?: (error: string, rep: DescribeMessageForwardsResponse) => void): Promise<DescribeMessageForwardsResponse>;
    /**
     * 获取预置位列表
     */
    DescribePresetList(req: DescribePresetListRequest, cb?: (error: string, rep: DescribePresetListResponse) => void): Promise<DescribePresetListResponse>;
    /**
     * 修改消息转发配置
     */
    ModifyMessageForward(req: ModifyMessageForwardRequest, cb?: (error: string, rep: ModifyMessageForwardResponse) => void): Promise<ModifyMessageForwardResponse>;
    /**
     * 本接口(DescribeDevicesList) 用于获取设备列表，支持模糊搜索
     */
    DescribeDeviceList(req: DescribeDeviceListRequest, cb?: (error: string, rep: DescribeDeviceListResponse) => void): Promise<DescribeDeviceListResponse>;
    /**
     * 创建直播录制计划
     */
    CreateLiveRecordPlan(req: CreateLiveRecordPlanRequest, cb?: (error: string, rep: CreateLiveRecordPlanResponse) => void): Promise<CreateLiveRecordPlanResponse>;
    /**
     * 查看消息转发配置详情
     */
    DescribeMessageForward(req: DescribeMessageForwardRequest, cb?: (error: string, rep: DescribeMessageForwardResponse) => void): Promise<DescribeMessageForwardResponse>;
    /**
     * 本接口(GetTimeTemplates)用于获取时间模板列表。
     */
    GetTimeTemplates(req?: GetTimeTemplatesRequest, cb?: (error: string, rep: GetTimeTemplatesResponse) => void): Promise<GetTimeTemplatesResponse>;
    /**
     * 获取异常事件统计
     */
    DescribeAbnormalEvents(req: DescribeAbnormalEventsRequest, cb?: (error: string, rep: DescribeAbnormalEventsResponse) => void): Promise<DescribeAbnormalEventsResponse>;
    /**
     * 本接口(GetRecordPlanById)用于根据录制计划ID获取录制计划。
请使用DescribeRecordingPlanById接口
     */
    GetRecordPlanById(req: GetRecordPlanByIdRequest, cb?: (error: string, rep: GetRecordPlanByIdResponse) => void): Promise<GetRecordPlanByIdResponse>;
    /**
     * 获取回放视频流地址
请使用DescribeChannelLocalRecordURL接口

RecordId和StartTime/EndTime互斥
当存在RecordId时，StartTime和EndTime无效
当RecordId为空，StartTime和EndTime生效
     */
    DescribeRecordStream(req: DescribeRecordStreamRequest, cb?: (error: string, rep: DescribeRecordStreamResponse) => void): Promise<DescribeRecordStreamResponse>;
    /**
     * 删除直播录制计划
     */
    DeleteLiveRecordPlan(req: DeleteLiveRecordPlanRequest, cb?: (error: string, rep: DeleteLiveRecordPlanResponse) => void): Promise<DeleteLiveRecordPlanResponse>;
    /**
     * 运营中心-设备录像存储统计
     */
    DescribeMonitorDataByDate(req: DescribeMonitorDataByDateRequest, cb?: (error: string, rep: DescribeMonitorDataByDateResponse) => void): Promise<DescribeMonitorDataByDateResponse>;
    /**
     * 获取告警列表
     */
    DescribeWarnings(req: DescribeWarningsRequest, cb?: (error: string, rep: DescribeWarningsResponse) => void): Promise<DescribeWarningsResponse>;
    /**
     * 本接口(DeleteDeviceGroup)用于删除分组。
     */
    DeleteDeviceGroup(req: DeleteDeviceGroupRequest, cb?: (error: string, rep: DeleteDeviceGroupResponse) => void): Promise<DeleteDeviceGroupResponse>;
    /**
     * 本接口(ModifyRecordingPlan)用于更新录制计划。

     */
    ModifyRecordingPlan(req: ModifyRecordingPlanRequest, cb?: (error: string, rep: ModifyRecordingPlanResponse) => void): Promise<ModifyRecordingPlanResponse>;
    /**
     * 本接口(DescribeChannelStreamURL)用于获取设备指定通道实时流地址，地址是动态生成，如重新播放需要调用此接口重新获取最新播放地址。
正常推流，如未设置对应录制计划，且180s无人观看此流，将会被自动掐断。
     */
    DescribeChannelStreamURL(req: DescribeChannelStreamURLRequest, cb?: (error: string, rep: DescribeChannelStreamURLResponse) => void): Promise<DescribeChannelStreamURLResponse>;
    /**
     * 直播详情接口
     */
    DescribeLiveChannel(req: DescribeLiveChannelRequest, cb?: (error: string, rep: DescribeLiveChannelResponse) => void): Promise<DescribeLiveChannelResponse>;
    /**
     * 本接口(DescribeAllDeviceList) 用于获取设备列表。
请使用DescribeDevicesList接口
     */
    DescribeAllDeviceList(req: DescribeAllDeviceListRequest, cb?: (error: string, rep: DescribeAllDeviceListResponse) => void): Promise<DescribeAllDeviceListResponse>;
    /**
     * 删除场景
     */
    DeleteScene(req: DeleteSceneRequest, cb?: (error: string, rep: DeleteSceneResponse) => void): Promise<DeleteSceneResponse>;
    /**
     * 创建直播频道
     */
    CreateLiveChannel(req: CreateLiveChannelRequest, cb?: (error: string, rep: CreateLiveChannelResponse) => void): Promise<CreateLiveChannelResponse>;
    /**
     * 获取场景绑定通道列表
     */
    DescribeBindSceneChannels(req: DescribeBindSceneChannelsRequest, cb?: (error: string, rep: DescribeBindSceneChannelsResponse) => void): Promise<DescribeBindSceneChannelsResponse>;
    /**
     * 本接口(UpdateRecordPlan)用于更新录制计划。
请使用 ModifyRecordingPlan接口和ModifyBindRecordingPlan接口
     */
    UpdateRecordPlan(req: UpdateRecordPlanRequest, cb?: (error: string, rep: UpdateRecordPlanResponse) => void): Promise<UpdateRecordPlanResponse>;
    /**
     * 本接口(DeleteRecordingPlan)用于删除录制计划
录制计划删除的同时，会停止该录制计划下的全部录制任务。
     */
    DeleteRecordingPlan(req: DeleteRecordingPlanRequest, cb?: (error: string, rep: DeleteRecordingPlanResponse) => void): Promise<DeleteRecordingPlanResponse>;
    /**
     * 本接口(ControlChannelPTZ) 用于对支持GB28181 PTZ信令的设备进行指定通道的远程控制。
     */
    ControlChannelPTZ(req: ControlChannelPTZRequest, cb?: (error: string, rep: ControlChannelPTZResponse) => void): Promise<ControlChannelPTZResponse>;
    /**
     * 对回放流进行控制，包括暂停、播放、拉动、结束等
请使用ControlChannelLocalRecord接口
     */
    ControlRecordStream(req: ControlRecordStreamRequest, cb?: (error: string, rep: ControlRecordStreamResponse) => void): Promise<ControlRecordStreamResponse>;
    /**
     * 直播录像回放列表
     */
    DescribeLiveVideoList(req: DescribeLiveVideoListRequest, cb?: (error: string, rep: DescribeLiveVideoListResponse) => void): Promise<DescribeLiveVideoListResponse>;
    /**
     * 场景绑定解绑通道接口
     */
    ModifyBindSceneChannels(req: ModifyBindSceneChannelsRequest, cb?: (error: string, rep: ModifyBindSceneChannelsResponse) => void): Promise<ModifyBindSceneChannelsResponse>;
    /**
     * 本接口(DescribeDevicePassWord)用于查询设备密码。
     */
    DescribeDevicePassWord(req: DescribeDevicePassWordRequest, cb?: (error: string, rep: DescribeDevicePassWordResponse) => void): Promise<DescribeDevicePassWordResponse>;
    /**
     * 直播列表接口
     */
    DescribeLiveChannelList(req: DescribeLiveChannelListRequest, cb?: (error: string, rep: DescribeLiveChannelListResponse) => void): Promise<DescribeLiveChannelListResponse>;
    /**
     * 删除消息转发配置
     */
    DeleteMessageForward(req: DeleteMessageForwardRequest, cb?: (error: string, rep: DeleteMessageForwardResponse) => void): Promise<DeleteMessageForwardResponse>;
    /**
     * 编辑预置位信息
     */
    ModifyPreset(req: ModifyPresetRequest, cb?: (error: string, rep: ModifyPresetResponse) => void): Promise<ModifyPresetResponse>;
    /**
     * 本接口(DeleteDevice)用于删除设备。
     */
    DeleteDevice(req: DeleteDeviceRequest, cb?: (error: string, rep: DeleteDeviceResponse) => void): Promise<DeleteDeviceResponse>;
    /**
     * 本接口(ModifyDeviceData)用于编辑设备信息。
     */
    ModifyDeviceData(req: ModifyDeviceDataRequest, cb?: (error: string, rep: ModifyDeviceDataResponse) => void): Promise<ModifyDeviceDataResponse>;
    /**
     * 根据分组路径查询分组
     */
    DescribeGroupByPath(req: DescribeGroupByPathRequest, cb?: (error: string, rep: DescribeGroupByPathResponse) => void): Promise<DescribeGroupByPathResponse>;
    /**
     * 删除直播接口
     */
    DeleteLiveChannel(req: DeleteLiveChannelRequest, cb?: (error: string, rep: DeleteLiveChannelResponse) => void): Promise<DeleteLiveChannelResponse>;
    /**
     * 本接口(GetRecordPlans)用于获取用户的全部录制计划。
请使用DescribeRecordingPlans接口
     */
    GetRecordPlans(req?: GetRecordPlansRequest, cb?: (error: string, rep: GetRecordPlansResponse) => void): Promise<GetRecordPlansResponse>;
    /**
     * 本接口(GetRecordPlanByDev)用于根据设备ID查询其绑定的录制计划.

     */
    GetRecordPlanByDev(req: GetRecordPlanByDevRequest, cb?: (error: string, rep: GetRecordPlanByDevResponse) => void): Promise<GetRecordPlanByDevResponse>;
    /**
     * 本接口用于获取SIP服务器相关配置，用户可以通过这些配置项，将设备通过GB28181协议注册到本服务。
     */
    DescribeSIPServer(req?: DescribeSIPServerRequest, cb?: (error: string, rep: DescribeSIPServerResponse) => void): Promise<DescribeSIPServerResponse>;
    /**
     * 直播录像删除
     */
    DeleteLiveVideoList(req: DeleteLiveVideoListRequest, cb?: (error: string, rep: DeleteLiveVideoListResponse) => void): Promise<DeleteLiveVideoListResponse>;
    /**
     * 根据时间获取云端录制文件列表
     */
    DescribeVideoList(req: DescribeVideoListRequest, cb?: (error: string, rep: DescribeVideoListResponse) => void): Promise<DescribeVideoListResponse>;
    /**
     * 直播录像编辑
     */
    ModifyLiveVideo(req: ModifyLiveVideoRequest, cb?: (error: string, rep: ModifyLiveVideoResponse) => void): Promise<ModifyLiveVideoResponse>;
    /**
     * 获取X-P2P的统计数据
     */
    DescribeXP2PData(req: DescribeXP2PDataRequest, cb?: (error: string, rep: DescribeXP2PDataResponse) => void): Promise<DescribeXP2PDataResponse>;
    /**
     * 获取场景列表
     */
    DescribeScenes(req: DescribeScenesRequest, cb?: (error: string, rep: DescribeScenesResponse) => void): Promise<DescribeScenesResponse>;
    /**
     * 本接口(BindGroupDevices) 用于绑定设备到分组。
     */
    BindGroupDevices(req: BindGroupDevicesRequest, cb?: (error: string, rep: BindGroupDevicesResponse) => void): Promise<BindGroupDevicesResponse>;
    /**
     * 获取直播录制计划详情
     */
    DescribeLiveRecordPlanById(req: DescribeLiveRecordPlanByIdRequest, cb?: (error: string, rep: DescribeLiveRecordPlanByIdResponse) => void): Promise<DescribeLiveRecordPlanByIdResponse>;
    /**
     * 本接口(DescribeRecordDatesByChannel)用于查询设备含有录像文件的日期列表。
     */
    DescribeRecordDatesByChannel(req: DescribeRecordDatesByChannelRequest, cb?: (error: string, rep: DescribeRecordDatesByChannelResponse) => void): Promise<DescribeRecordDatesByChannelResponse>;
}
