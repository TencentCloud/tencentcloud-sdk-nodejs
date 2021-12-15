import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { ControlRecordStreamRequest, ModifySubscriptionStatusRequest, CreateSceneResponse, DeleteTimeTemplateResponse, GetTimeTemplatesRequest, GetRecordPlanByDevRequest, GetRecordDatesByDevResponse, CreateLiveRecordPlanRequest, DescribeLiveChannelRequest, DescribeSubscriptionStatusResponse, DescribeScenesResponse, DescribeDeviceStreamsResponse, DescribeSIPServerRequest, CreateLiveRecordPlanResponse, DeleteDeviceGroupResponse, DeleteRecordPlanResponse, ModifyVideoInfoRequest, ModifyBindPlanLiveChannelResponse, UpdateDeviceGroupResponse, GetVideoListByConRequest, DescribeLiveRecordPlanByIdRequest, DescribeIPCChannelsRequest, DescribeSubGroupsRequest, DeleteRecordPlanRequest, CreateDeviceGroupResponse, GetVideoListByConResponse, UpdateTimeTemplateResponse, UpdateRecordPlanRequest, ModifyDeviceDataResponse, DescribeStatisticDetailsResponse, DescribeSubGroupsResponse, GetRecordPlanByIdResponse, DeleteDeviceRequest, UpdateDevicePassWordRequest, CreateTimeTemplateRequest, ModifyBindPlanLiveChannelRequest, DescribeLiveStreamRequest, ModifyLiveRecordPlanResponse, DescribeAllDeviceListRequest, DescribeRecordDatesByLiveRequest, DescribeDevicePassWordRequest, GetRecordPlanByIdRequest, DescribeLiveChannelListRequest, GetRecordPlanByDevResponse, DeleteVideoListRequest, DescribeStatisticDetailsRequest, CreateRecordPlanRequest, CreateDeviceGroupRequest, UpdateTimeTemplateRequest, DescribeLiveRecordPlanIdsResponse, CreateDeviceResponse, CreateDeviceRequest, DescribeStatisticSummaryResponse, DescribeRecordStreamRequest, BindGroupDevicesRequest, ModifyLiveRecordPlanRequest, GetTimeTemplateByIdResponse, DescribeLiveChannelResponse, ControlDevicePTZResponse, ControlDevicePTZRequest, UpdateDeviceGroupRequest, DescribeChannelsByLiveRecordPlanResponse, DescribeGroupDevicesRequest, DescribeGroupByIdRequest, UpdateDevicePassWordResponse, DeleteChannelRequest, DescribeSubscriptionStatusRequest, DescribeDeviceStreamsRequest, DescribeRecordStreamResponse, CreateRecordPlanResponse, CreateSceneRequest, DescribeLiveVideoListResponse, DeleteDeviceGroupRequest, DescribeLiveRecordPlanByIdResponse, DescribeRecordDatesByLiveResponse, ModifySubscriptionStatusResponse, ModifyDeviceDataRequest, DeleteSceneResponse, GetRecordDatesByDevRequest, DescribeLiveVideoListRequest, GetTimeTemplatesResponse, CreateLiveChannelResponse, DeleteVideoListResponse, ModifyLiveVideoResponse, DescribeIPCChannelsResponse, DescribeAllDeviceListResponse, DescribeStatisticSummaryRequest, DescribeGroupsResponse, DeleteLiveRecordPlanRequest, DeleteDeviceResponse, DeleteLiveVideoListResponse, DescribeDeviceGroupResponse, CreateTimeTemplateResponse, DeleteLiveChannelRequest, DescribeSIPServerResponse, DescribeGroupByPathRequest, DeleteChannelResponse, UpdateRecordPlanResponse, DescribeDeviceGroupRequest, DescribeGroupsRequest, GetRecordPlansResponse, DescribeChannelsByLiveRecordPlanRequest, ModifyLiveChannelResponse, GetTimeTemplateByIdRequest, GetRecordPlansRequest, DeleteTimeTemplateRequest, ModifyLiveChannelRequest, DescribeVideoListResponse, DescribeLiveRecordPlanIdsRequest, DeleteLiveVideoListRequest, DescribeScenesRequest, DeleteLiveRecordPlanResponse, ModifyVideoInfoResponse, DescribeGroupByIdResponse, ControlRecordStreamResponse, DeleteLiveChannelResponse, BindGroupDevicesResponse, DescribeVideoListRequest, DescribeLiveChannelListResponse, DescribeDevicePassWordResponse, DescribeBindSceneDevicesRequest, DescribeBindSceneDevicesResponse, ModifyLiveVideoRequest, DescribeGroupByPathResponse, CreateLiveChannelRequest, DescribeGroupDevicesResponse, DeleteSceneRequest, DescribeLiveStreamResponse } from "./iotvideoindustry_models";
/**
 * iotvideoindustry client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 获取IPC设备下属通道
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
     * 本接口(UpdateDeviceGroup)用于修改分组信息。
     */
    UpdateDeviceGroup(req: UpdateDeviceGroupRequest, cb?: (error: string, rep: UpdateDeviceGroupResponse) => void): Promise<UpdateDeviceGroupResponse>;
    /**
     * 本接口(DescribeDeviceStreams)用于获取设备实时流地址。
     */
    DescribeDeviceStreams(req: DescribeDeviceStreamsRequest, cb?: (error: string, rep: DescribeDeviceStreamsResponse) => void): Promise<DescribeDeviceStreamsResponse>;
    /**
     * 删除录像存储列表
     */
    DeleteVideoList(req: DeleteVideoListRequest, cb?: (error: string, rep: DeleteVideoListResponse) => void): Promise<DeleteVideoListResponse>;
    /**
     * 本接口(CreateDeviceGroup) 用于创建设备管理分组。
     */
    CreateDeviceGroup(req: CreateDeviceGroupRequest, cb?: (error: string, rep: CreateDeviceGroupResponse) => void): Promise<CreateDeviceGroupResponse>;
    /**
     * 获取回放视频流(NVR录制用)
RecordId和StartTime/EndTime互斥
当存在RecordId时，StartTime和EndTime无效
当RecordId为空，StartTime和EndTime生效
     */
    DescribeRecordStream(req: DescribeRecordStreamRequest, cb?: (error: string, rep: DescribeRecordStreamResponse) => void): Promise<DescribeRecordStreamResponse>;
    /**
     * 直播录像回放列表
     */
    DescribeLiveVideoList(req: DescribeLiveVideoListRequest, cb?: (error: string, rep: DescribeLiveVideoListResponse) => void): Promise<DescribeLiveVideoListResponse>;
    /**
     * 创建场景
     */
    CreateScene(req: CreateSceneRequest, cb?: (error: string, rep: CreateSceneResponse) => void): Promise<CreateSceneResponse>;
    /**
     * 本接口(GetVideoListByCon)用于查询设备的录制文件列表
     */
    GetVideoListByCon(req: GetVideoListByConRequest, cb?: (error: string, rep: GetVideoListByConResponse) => void): Promise<GetVideoListByConResponse>;
    /**
     * 本接口(UpdateTimeTemplate)用于更新时间模板。
     */
    UpdateTimeTemplate(req: UpdateTimeTemplateRequest, cb?: (error: string, rep: UpdateTimeTemplateResponse) => void): Promise<UpdateTimeTemplateResponse>;
    /**
     * 本接口(UpdateDevicePassWord)用于修改设备密码。
     */
    UpdateDevicePassWord(req: UpdateDevicePassWordRequest, cb?: (error: string, rep: UpdateDevicePassWordResponse) => void): Promise<UpdateDevicePassWordResponse>;
    /**
     * 查询主设备订阅状态
     */
    DescribeSubscriptionStatus(req: DescribeSubscriptionStatusRequest, cb?: (error: string, rep: DescribeSubscriptionStatusResponse) => void): Promise<DescribeSubscriptionStatusResponse>;
    /**
     * 对回放流进行控制，包括暂停、播放、拉动、结束等
     */
    ControlRecordStream(req: ControlRecordStreamRequest, cb?: (error: string, rep: ControlRecordStreamResponse) => void): Promise<ControlRecordStreamResponse>;
    /**
     * 直播录制计划绑定解绑直播频道
     */
    ModifyBindPlanLiveChannel(req: ModifyBindPlanLiveChannelRequest, cb?: (error: string, rep: ModifyBindPlanLiveChannelResponse) => void): Promise<ModifyBindPlanLiveChannelResponse>;
    /**
     * 本接口(GetTimeTemplateById)用于根据模板ID获取时间模板详情。
     */
    GetTimeTemplateById(req: GetTimeTemplateByIdRequest, cb?: (error: string, rep: GetTimeTemplateByIdResponse) => void): Promise<GetTimeTemplateByIdResponse>;
    /**
     * 直播录像删除
     */
    DeleteLiveVideoList(req: DeleteLiveVideoListRequest, cb?: (error: string, rep: DeleteLiveVideoListResponse) => void): Promise<DeleteLiveVideoListResponse>;
    /**
     * 编辑直播录制计划
     */
    ModifyLiveRecordPlan(req: ModifyLiveRecordPlanRequest, cb?: (error: string, rep: ModifyLiveRecordPlanResponse) => void): Promise<ModifyLiveRecordPlanResponse>;
    /**
     * 删除通道接口
     */
    DeleteChannel(req: DeleteChannelRequest, cb?: (error: string, rep: DeleteChannelResponse) => void): Promise<DeleteChannelResponse>;
    /**
     * 本接口(DescribeDevicePassWord)用于查询设备密码。
     */
    DescribeDevicePassWord(req: DescribeDevicePassWordRequest, cb?: (error: string, rep: DescribeDevicePassWordResponse) => void): Promise<DescribeDevicePassWordResponse>;
    /**
     * 本接口(DescribeGroupDevices)用于查询分组下的设备列表。
     */
    DescribeGroupDevices(req: DescribeGroupDevicesRequest, cb?: (error: string, rep: DescribeGroupDevicesResponse) => void): Promise<DescribeGroupDevicesResponse>;
    /**
     * 本接口(GetRecordPlanByDev)用于根据设备ID查询其绑定的录制计划.
     */
    GetRecordPlanByDev(req: GetRecordPlanByDevRequest, cb?: (error: string, rep: GetRecordPlanByDevResponse) => void): Promise<GetRecordPlanByDevResponse>;
    /**
     * 本接口(GetRecordPlans)用于获取用户的全部录制计划。
     */
    GetRecordPlans(req?: GetRecordPlansRequest, cb?: (error: string, rep: GetRecordPlansResponse) => void): Promise<GetRecordPlansResponse>;
    /**
     * 本接口(DeleteDevice)用于删除设备。
     */
    DeleteDevice(req: DeleteDeviceRequest, cb?: (error: string, rep: DeleteDeviceResponse) => void): Promise<DeleteDeviceResponse>;
    /**
     * 创建直播录制计划
     */
    CreateLiveRecordPlan(req: CreateLiveRecordPlanRequest, cb?: (error: string, rep: CreateLiveRecordPlanResponse) => void): Promise<CreateLiveRecordPlanResponse>;
    /**
     * 根据分组路径查询分组
     */
    DescribeGroupByPath(req: DescribeGroupByPathRequest, cb?: (error: string, rep: DescribeGroupByPathResponse) => void): Promise<DescribeGroupByPathResponse>;
    /**
     * 直播录像存储日期列表
     */
    DescribeRecordDatesByLive(req: DescribeRecordDatesByLiveRequest, cb?: (error: string, rep: DescribeRecordDatesByLiveResponse) => void): Promise<DescribeRecordDatesByLiveResponse>;
    /**
     * 本接口(GetRecordDatesByDev)用于查询设备含有录像文件的日期列表。
     */
    GetRecordDatesByDev(req: GetRecordDatesByDevRequest, cb?: (error: string, rep: GetRecordDatesByDevResponse) => void): Promise<GetRecordDatesByDevResponse>;
    /**
     * 本接口(GetTimeTemplates)用于获取时间模板列表。
     */
    GetTimeTemplates(req?: GetTimeTemplatesRequest, cb?: (error: string, rep: GetTimeTemplatesResponse) => void): Promise<GetTimeTemplatesResponse>;
    /**
     * 删除直播接口
     */
    DeleteLiveChannel(req: DeleteLiveChannelRequest, cb?: (error: string, rep: DeleteLiveChannelResponse) => void): Promise<DeleteLiveChannelResponse>;
    /**
     * 本接口(DescribeStatisticDetails)用于查询指定统计项详情，返回结果按天为单位聚合，支持的最大时间查询范围为31天。
     */
    DescribeStatisticDetails(req: DescribeStatisticDetailsRequest, cb?: (error: string, rep: DescribeStatisticDetailsResponse) => void): Promise<DescribeStatisticDetailsResponse>;
    /**
     * 获取场景列表
     */
    DescribeScenes(req: DescribeScenesRequest, cb?: (error: string, rep: DescribeScenesResponse) => void): Promise<DescribeScenesResponse>;
    /**
     * 本接口(CreateDevice) 用于创建设备。
     */
    CreateDevice(req: CreateDeviceRequest, cb?: (error: string, rep: CreateDeviceResponse) => void): Promise<CreateDeviceResponse>;
    /**
     * 本接口(GetRecordPlanById)用于根据录制计划ID获取录制计划。
     */
    GetRecordPlanById(req: GetRecordPlanByIdRequest, cb?: (error: string, rep: GetRecordPlanByIdResponse) => void): Promise<GetRecordPlanByIdResponse>;
    /**
     * 根据直播录制计划获取频道列表
     */
    DescribeChannelsByLiveRecordPlan(req: DescribeChannelsByLiveRecordPlanRequest, cb?: (error: string, rep: DescribeChannelsByLiveRecordPlanResponse) => void): Promise<DescribeChannelsByLiveRecordPlanResponse>;
    /**
     * 本接口(DescribeDeviceGroup)用于根据设备ID查询设备所在分组信息，可批量查询。
     */
    DescribeDeviceGroup(req: DescribeDeviceGroupRequest, cb?: (error: string, rep: DescribeDeviceGroupResponse) => void): Promise<DescribeDeviceGroupResponse>;
    /**
     * 本接口(DeleteRecordPlan)用于删除录制计划
录制计划删除的同时，会停止该录制计划下的全部录制任务。
     */
    DeleteRecordPlan(req: DeleteRecordPlanRequest, cb?: (error: string, rep: DeleteRecordPlanResponse) => void): Promise<DeleteRecordPlanResponse>;
    /**
     * 本接口(DescribeStatisticSummary)用于查询用户昨日的概览数据。
     */
    DescribeStatisticSummary(req: DescribeStatisticSummaryRequest, cb?: (error: string, rep: DescribeStatisticSummaryResponse) => void): Promise<DescribeStatisticSummaryResponse>;
    /**
     * 删除直播录制计划
     */
    DeleteLiveRecordPlan(req: DeleteLiveRecordPlanRequest, cb?: (error: string, rep: DeleteLiveRecordPlanResponse) => void): Promise<DeleteLiveRecordPlanResponse>;
    /**
     * 本接口(DeleteTimeTemplate) 用于删除时间模板。
     */
    DeleteTimeTemplate(req: DeleteTimeTemplateRequest, cb?: (error: string, rep: DeleteTimeTemplateResponse) => void): Promise<DeleteTimeTemplateResponse>;
    /**
     * 本接口(DescribeGroups)用于批量查询分组信息。
     */
    DescribeGroups(req: DescribeGroupsRequest, cb?: (error: string, rep: DescribeGroupsResponse) => void): Promise<DescribeGroupsResponse>;
    /**
     * 本接口(ModifyDeviceData)用于编辑设备信息。
     */
    ModifyDeviceData(req: ModifyDeviceDataRequest, cb?: (error: string, rep: ModifyDeviceDataResponse) => void): Promise<ModifyDeviceDataResponse>;
    /**
     * 直播拉流接口
     */
    DescribeLiveStream(req: DescribeLiveStreamRequest, cb?: (error: string, rep: DescribeLiveStreamResponse) => void): Promise<DescribeLiveStreamResponse>;
    /**
     * 编辑直播接口
     */
    ModifyLiveChannel(req: ModifyLiveChannelRequest, cb?: (error: string, rep: ModifyLiveChannelResponse) => void): Promise<ModifyLiveChannelResponse>;
    /**
     * 本接口(DeleteDeviceGroup)用于删除分组。
     */
    DeleteDeviceGroup(req: DeleteDeviceGroupRequest, cb?: (error: string, rep: DeleteDeviceGroupResponse) => void): Promise<DeleteDeviceGroupResponse>;
    /**
     * 获取场景绑定设备列表
     */
    DescribeBindSceneDevices(req: DescribeBindSceneDevicesRequest, cb?: (error: string, rep: DescribeBindSceneDevicesResponse) => void): Promise<DescribeBindSceneDevicesResponse>;
    /**
     * 本接口(ControlDevicePTZ) 用于对支持GB28181 PTZ信令的设备进行远程控制。
     */
    ControlDevicePTZ(req: ControlDevicePTZRequest, cb?: (error: string, rep: ControlDevicePTZResponse) => void): Promise<ControlDevicePTZResponse>;
    /**
     * 获取直播录制计划列表
     */
    DescribeLiveRecordPlanIds(req: DescribeLiveRecordPlanIdsRequest, cb?: (error: string, rep: DescribeLiveRecordPlanIdsResponse) => void): Promise<DescribeLiveRecordPlanIdsResponse>;
    /**
     * 根据时间获取回放文件列表(云端录制用)
     */
    DescribeVideoList(req: DescribeVideoListRequest, cb?: (error: string, rep: DescribeVideoListResponse) => void): Promise<DescribeVideoListResponse>;
    /**
     * 直播录像编辑
     */
    ModifyLiveVideo(req: ModifyLiveVideoRequest, cb?: (error: string, rep: ModifyLiveVideoResponse) => void): Promise<ModifyLiveVideoResponse>;
    /**
     * 直播详情接口
     */
    DescribeLiveChannel(req: DescribeLiveChannelRequest, cb?: (error: string, rep: DescribeLiveChannelResponse) => void): Promise<DescribeLiveChannelResponse>;
    /**
     * 本接口(DescribeAllDeviceList) 用于获取设备列表。
     */
    DescribeAllDeviceList(req: DescribeAllDeviceListRequest, cb?: (error: string, rep: DescribeAllDeviceListResponse) => void): Promise<DescribeAllDeviceListResponse>;
    /**
     * 删除场景
     */
    DeleteScene(req: DeleteSceneRequest, cb?: (error: string, rep: DeleteSceneResponse) => void): Promise<DeleteSceneResponse>;
    /**
     * 本接口用于获取SIP服务器相关配置，用户可以通过这些配置项，将设备通过GB28181协议注册到本服务。
     */
    DescribeSIPServer(req?: DescribeSIPServerRequest, cb?: (error: string, rep: DescribeSIPServerResponse) => void): Promise<DescribeSIPServerResponse>;
    /**
     * 编辑设备订阅状态
     */
    ModifySubscriptionStatus(req: ModifySubscriptionStatusRequest, cb?: (error: string, rep: ModifySubscriptionStatusResponse) => void): Promise<ModifySubscriptionStatusResponse>;
    /**
     * 本接口(UpdateRecordPlan)用于更新录制计划。
     */
    UpdateRecordPlan(req: UpdateRecordPlanRequest, cb?: (error: string, rep: UpdateRecordPlanResponse) => void): Promise<UpdateRecordPlanResponse>;
    /**
     * 创建直播频道
     */
    CreateLiveChannel(req: CreateLiveChannelRequest, cb?: (error: string, rep: CreateLiveChannelResponse) => void): Promise<CreateLiveChannelResponse>;
    /**
     * 本接口(BindGroupDevices) 用于绑定设备到分组。
     */
    BindGroupDevices(req: BindGroupDevicesRequest, cb?: (error: string, rep: BindGroupDevicesResponse) => void): Promise<BindGroupDevicesResponse>;
    /**
     * 获取直播录制计划详情
     */
    DescribeLiveRecordPlanById(req: DescribeLiveRecordPlanByIdRequest, cb?: (error: string, rep: DescribeLiveRecordPlanByIdResponse) => void): Promise<DescribeLiveRecordPlanByIdResponse>;
    /**
     * 本接口(DescribeGroupById)用于根据分组ID查询分组。
     */
    DescribeGroupById(req: DescribeGroupByIdRequest, cb?: (error: string, rep: DescribeGroupByIdResponse) => void): Promise<DescribeGroupByIdResponse>;
    /**
     * 本接口(CreateRecordPlan) 用于创建录制计划，使设备与时间模板绑定，以便及时启动录制
     */
    CreateRecordPlan(req: CreateRecordPlanRequest, cb?: (error: string, rep: CreateRecordPlanResponse) => void): Promise<CreateRecordPlanResponse>;
    /**
     * 本接口(CreateTimeTemplate) 用于根据模板描述的具体录制时间片段，创建定制化的时间模板。
     */
    CreateTimeTemplate(req: CreateTimeTemplateRequest, cb?: (error: string, rep: CreateTimeTemplateResponse) => void): Promise<CreateTimeTemplateResponse>;
    /**
     * 直播列表接口
     */
    DescribeLiveChannelList(req: DescribeLiveChannelListRequest, cb?: (error: string, rep: DescribeLiveChannelListResponse) => void): Promise<DescribeLiveChannelListResponse>;
}
