import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { ControlRecordStreamRequest, DeleteTimeTemplateResponse, GetTimeTemplatesRequest, GetRecordPlanByDevRequest, GetRecordDatesByDevResponse, DescribeDeviceStreamsResponse, DescribeSIPServerRequest, GetRecordPlanByIdRequest, GetRecordPlansRequest, DeleteDeviceGroupResponse, DeleteRecordPlanResponse, UpdateDeviceGroupResponse, GetVideoListByConRequest, DescribeIPCChannelsRequest, DescribeSubGroupsRequest, DeleteRecordPlanRequest, CreateDeviceGroupResponse, GetVideoListByConResponse, UpdateTimeTemplateResponse, DescribeStatisticDetailsResponse, DescribeStatisticSummaryRequest, GetRecordPlanByIdResponse, DeleteDeviceRequest, UpdateDevicePassWordRequest, CreateTimeTemplateRequest, DescribeAllDeviceListRequest, DescribeDevicePassWordRequest, GetRecordPlanByDevResponse, UpdateRecordPlanRequest, DescribeStatisticDetailsRequest, CreateRecordPlanRequest, CreateDeviceGroupRequest, UpdateTimeTemplateRequest, CreateDeviceResponse, CreateDeviceRequest, DescribeStatisticSummaryResponse, DescribeRecordStreamRequest, GetTimeTemplateByIdResponse, ControlDevicePTZResponse, ControlDevicePTZRequest, UpdateDeviceGroupRequest, DescribeGroupDevicesRequest, DescribeGroupByIdRequest, UpdateDevicePassWordResponse, DescribeDeviceStreamsRequest, DescribeRecordStreamResponse, CreateRecordPlanResponse, DeleteDeviceGroupRequest, DescribeDeviceGroupResponse, ModifyDeviceDataRequest, GetRecordDatesByDevRequest, GetTimeTemplatesResponse, DescribeDevicePassWordResponse, DescribeIPCChannelsResponse, DescribeAllDeviceListResponse, DescribeSubGroupsResponse, DescribeGroupsResponse, BindGroupDevicesRequest, CreateTimeTemplateResponse, DescribeSIPServerResponse, DescribeGroupByPathRequest, UpdateRecordPlanResponse, DescribeDeviceGroupRequest, DescribeGroupsRequest, GetRecordPlansResponse, DescribeGroupByIdResponse, GetTimeTemplateByIdRequest, DeleteTimeTemplateRequest, DescribeVideoListResponse, ControlRecordStreamResponse, BindGroupDevicesResponse, DescribeVideoListRequest, ModifyDeviceDataResponse, DeleteDeviceResponse, DescribeGroupByPathResponse, DescribeGroupDevicesResponse } from "./iotvideoindustry_models";
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
     * 本接口(UpdateRecordPlan)用于更新录制计划。
     */
    UpdateRecordPlan(req: UpdateRecordPlanRequest, cb?: (error: string, rep: UpdateRecordPlanResponse) => void): Promise<UpdateRecordPlanResponse>;
    /**
     * 本接口(DescribeSubGroups)用于查询分组下的子分组列表。
     */
    DescribeSubGroups(req: DescribeSubGroupsRequest, cb?: (error: string, rep: DescribeSubGroupsResponse) => void): Promise<DescribeSubGroupsResponse>;
    /**
     * 本接口(UpdateDeviceGroup)用于修改分组信息。
     */
    UpdateDeviceGroup(req: UpdateDeviceGroupRequest, cb?: (error: string, rep: UpdateDeviceGroupResponse) => void): Promise<UpdateDeviceGroupResponse>;
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
     * 本接口(DescribeStatisticSummary)用于查询用户昨日的概览数据。
     */
    DescribeStatisticSummary(req: DescribeStatisticSummaryRequest, cb?: (error: string, rep: DescribeStatisticSummaryResponse) => void): Promise<DescribeStatisticSummaryResponse>;
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
     * 对回放流进行控制，包括暂停、播放、拉动、结束等
     */
    ControlRecordStream(req: ControlRecordStreamRequest, cb?: (error: string, rep: ControlRecordStreamResponse) => void): Promise<ControlRecordStreamResponse>;
    /**
     * 本接口(GetTimeTemplateById)用于根据模板ID获取时间模板详情。
     */
    GetTimeTemplateById(req: GetTimeTemplateByIdRequest, cb?: (error: string, rep: GetTimeTemplateByIdResponse) => void): Promise<GetTimeTemplateByIdResponse>;
    /**
     * 本接口(DescribeDevicePassWord)用于查询设备密码。
     */
    DescribeDevicePassWord(req: DescribeDevicePassWordRequest, cb?: (error: string, rep: DescribeDevicePassWordResponse) => void): Promise<DescribeDevicePassWordResponse>;
    /**
     * 本接口(DescribeGroupDevices)用于查询分组下的设备列表。
     */
    DescribeGroupDevices(req: DescribeGroupDevicesRequest, cb?: (error: string, rep: DescribeGroupDevicesResponse) => void): Promise<DescribeGroupDevicesResponse>;
    /**
     * 本接口(GetRecordPlans)用于获取用户的全部录制计划。
     */
    GetRecordPlans(req?: GetRecordPlansRequest, cb?: (error: string, rep: GetRecordPlansResponse) => void): Promise<GetRecordPlansResponse>;
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
     * 本接口(GetRecordDatesByDev)用于查询设备含有录像文件的日期列表。
     */
    GetRecordDatesByDev(req: GetRecordDatesByDevRequest, cb?: (error: string, rep: GetRecordDatesByDevResponse) => void): Promise<GetRecordDatesByDevResponse>;
    /**
     * 本接口(GetTimeTemplates)用于获取时间模板列表。
     */
    GetTimeTemplates(req?: GetTimeTemplatesRequest, cb?: (error: string, rep: GetTimeTemplatesResponse) => void): Promise<GetTimeTemplatesResponse>;
    /**
     * 本接口(DescribeDeviceStreams)用于获取设备实时流地址。
     */
    DescribeDeviceStreams(req: DescribeDeviceStreamsRequest, cb?: (error: string, rep: DescribeDeviceStreamsResponse) => void): Promise<DescribeDeviceStreamsResponse>;
    /**
     * 本接口(DescribeStatisticDetails)用于查询指定统计项详情，返回结果按天为单位聚合，支持的最大时间查询范围为31天。
     */
    DescribeStatisticDetails(req: DescribeStatisticDetailsRequest, cb?: (error: string, rep: DescribeStatisticDetailsResponse) => void): Promise<DescribeStatisticDetailsResponse>;
    /**
     * 本接口(CreateDevice) 用于创建设备。
     */
    CreateDevice(req: CreateDeviceRequest, cb?: (error: string, rep: CreateDeviceResponse) => void): Promise<CreateDeviceResponse>;
    /**
     * 本接口(GetRecordPlanById)用于根据录制计划ID获取录制计划。
     */
    GetRecordPlanById(req: GetRecordPlanByIdRequest, cb?: (error: string, rep: GetRecordPlanByIdResponse) => void): Promise<GetRecordPlanByIdResponse>;
    /**
     * 本接口(GetRecordPlanByDev)用于根据设备ID查询其绑定的录制计划.
     */
    GetRecordPlanByDev(req: GetRecordPlanByDevRequest, cb?: (error: string, rep: GetRecordPlanByDevResponse) => void): Promise<GetRecordPlanByDevResponse>;
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
     * 本接口(DescribeGroups)用于批量查询分组信息。
     */
    DescribeGroups(req: DescribeGroupsRequest, cb?: (error: string, rep: DescribeGroupsResponse) => void): Promise<DescribeGroupsResponse>;
    /**
     * 本接口(DeleteTimeTemplate) 用于删除时间模板。
     */
    DeleteTimeTemplate(req: DeleteTimeTemplateRequest, cb?: (error: string, rep: DeleteTimeTemplateResponse) => void): Promise<DeleteTimeTemplateResponse>;
    /**
     * 本接口用于获取SIP服务器相关配置，用户可以通过这些配置项，将设备通过GB28181协议注册到本服务。
     */
    DescribeSIPServer(req?: DescribeSIPServerRequest, cb?: (error: string, rep: DescribeSIPServerResponse) => void): Promise<DescribeSIPServerResponse>;
    /**
     * 本接口(DeleteDeviceGroup)用于删除分组。
     */
    DeleteDeviceGroup(req: DeleteDeviceGroupRequest, cb?: (error: string, rep: DeleteDeviceGroupResponse) => void): Promise<DeleteDeviceGroupResponse>;
    /**
     * 本接口(ControlDevicePTZ) 用于对支持GB28181 PTZ信令的设备进行远程控制。
     */
    ControlDevicePTZ(req: ControlDevicePTZRequest, cb?: (error: string, rep: ControlDevicePTZResponse) => void): Promise<ControlDevicePTZResponse>;
    /**
     * 根据时间获取回放文件列表(云端录制用)
     */
    DescribeVideoList(req: DescribeVideoListRequest, cb?: (error: string, rep: DescribeVideoListResponse) => void): Promise<DescribeVideoListResponse>;
    /**
     * 本接口(DescribeAllDeviceList) 用于获取设备列表。
     */
    DescribeAllDeviceList(req: DescribeAllDeviceListRequest, cb?: (error: string, rep: DescribeAllDeviceListResponse) => void): Promise<DescribeAllDeviceListResponse>;
    /**
     * 本接口(BindGroupDevices) 用于绑定设备到分组。
     */
    BindGroupDevices(req: BindGroupDevicesRequest, cb?: (error: string, rep: BindGroupDevicesResponse) => void): Promise<BindGroupDevicesResponse>;
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
}
