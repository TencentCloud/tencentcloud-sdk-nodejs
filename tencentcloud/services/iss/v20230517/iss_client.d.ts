import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { UpdateDeviceStatusRequest, ListDevicesRequest, DeleteRecordBackupPlanResponse, ListOrganizationChannelsRequest, ListSubTasksRequest, AddRecordBackupPlanResponse, DescribeCNAMERequest, ControlRecordTimelineRequest, DeleteOrganizationRequest, SetForbidPlayChannelsRequest, DescribeCNAMEResponse, UpdateOrganizationResponse, ListAITasksResponse, UpdateDeviceOrganizationRequest, UpdateDeviceOrganizationResponse, AddOrganizationResponse, BatchOperateDeviceResponse, DescribeDeviceRegionResponse, DescribeVideoBitRateResponse, DescribeDomainResponse, ControlDeviceStreamResponse, DeleteRecordRetrieveTaskResponse, DescribeUserDeviceResponse, DeleteRecordPlanResponse, DescribeOrganizationResponse, UpgradeGatewayResponse, UpdateUserDeviceRequest, DescribeDeviceChannelResponse, AddRecordBackupTemplateRequest, DescribeVideoBitRateRequest, DeleteAITaskRequest, UpdateGatewayResponse, DescribeRecordRetrieveTaskRequest, DescribeAITaskRequest, RefreshDeviceChannelResponse, DeleteOrganizationResponse, DescribeRecordTemplateRequest, DeleteRecordTemplateRequest, DescribeGatewayResponse, DescribeGatewayRequest, DeleteUserDeviceRequest, AddRecordPlanResponse, ListOrganizationChannelNumbersRequest, UpdateAITaskRequest, DeleteDomainRequest, ListRecordRetrieveTasksRequest, DeleteRecordPlanRequest, AddRecordTemplateResponse, ListRecordPlansRequest, DescribeAITaskResultRequest, ListSubTasksResponse, ListAITasksRequest, UpdateRecordPlanRequest, DescribeOrganizationRequest, UpdateAITaskStatusResponse, ControlRecordResponse, AddRecordPlanRequest, ListRecordTemplatesRequest, DescribeVideoDownloadUrlResponse, DescribeRecordPlanResponse, CallISAPIRequest, AddRecordRetrieveTaskRequest, DescribeRecordPlanRequest, ControlDevicePresetResponse, ListRecordBackupPlansResponse, DescribeDomainRequest, CallISAPIResponse, ListRecordPlanDevicesRequest, ListTasksResponse, AddStreamAuthResponse, ListDevicesResponse, DescribeGatewayMonitorRequest, DeleteGatewayRequest, ListOrganizationChannelNumbersResponse, ListGatewayDevicesResponse, ListRecordBackupTemplatesResponse, ListRecordPlanChannelsResponse, DescribeRecordPlaybackUrlRequest, ListRecordPlansResponse, DescribeRecordTemplateResponse, DescribeAITaskResultResponse, ListRecordPlanDevicesResponse, DescribeDevicePresetResponse, UpdateRecordBackupPlanRequest, ControlRecordRequest, ControlDevicePTZResponse, ListRecordBackupPlansRequest, AddUserDeviceRequest, ListRecordBackupPlanDevicesResponse, ControlDevicePTZRequest, DescribeRecordBackupPlanRequest, DescribeRecordBackupPlanResponse, DescribeDeviceChannelRequest, UpdateUserDeviceResponse, DescribeDevicePresetRequest, ListGatewaysResponse, DescribeGatewayProtocolResponse, DescribeDomainRegionRequest, AddRecordTemplateRequest, DescribeGatewayProtocolRequest, AddAITaskRequest, QueryForbidPlayChannelListResponse, DescribeVideoDownloadUrlRequest, DescribeGatewayVersionResponse, ListGatewaysRequest, ListTasksRequest, DescribeGatewayVersionRequest, DescribeRecordSliceRequest, DescribeRecordBackupTemplateRequest, DescribeUserDeviceRequest, DescribeDeviceRegionRequest, RefreshDeviceChannelRequest, DescribeRecordFileRequest, AddStreamAuthRequest, PlayRecordRequest, QueryForbidPlayChannelListRequest, UpgradeGatewayRequest, DescribeRecordFileResponse, ControlDevicePresetRequest, ControlDeviceStreamRequest, ListRecordRetrieveTasksResponse, ListRecordBackupPlanDevicesRequest, DeleteDomainResponse, AddRecordRetrieveTaskResponse, DeleteRecordTemplateResponse, ListRecordTemplatesResponse, DescribeAITaskResponse, UpdateRecordBackupTemplateResponse, ControlRecordTimelineResponse, DeleteRecordRetrieveTaskRequest, DescribeRecordSliceResponse, UpdateRecordPlanResponse, DescribeTaskResponse, DeleteRecordBackupPlanRequest, ListRecordBackupTemplatesRequest, AddAITaskResponse, SetForbidPlayChannelsResponse, UpdateRecordTemplateRequest, DeleteRecordBackupTemplateRequest, ListGatewayDevicesRequest, DeleteAITaskResponse, AddRecordBackupTemplateResponse, PlayRecordResponse, DescribeGatewayMonitorResponse, DescribeRecordBackupTemplateResponse, AddUserDeviceResponse, DeleteGatewayResponse, DescribeRecordPlaybackUrlResponse, DescribeTaskRequest, ListRecordPlanChannelsRequest, ListOrganizationChannelsResponse, UpdateOrganizationRequest, UpdateAITaskStatusRequest, UpdateGatewayRequest, UpdateAITaskResponse, DescribeDomainRegionResponse, BatchOperateDeviceRequest, AddRecordBackupPlanRequest, UpdateRecordBackupTemplateRequest, UpdateDeviceStatusResponse, DeleteUserDeviceResponse, UpdateRecordBackupPlanResponse, AddOrganizationRequest, DescribeStreamAuthResponse, DeleteRecordBackupTemplateResponse, UpdateRecordTemplateResponse, DescribeRecordRetrieveTaskResponse, DescribeStreamAuthRequest } from "./iss_models";
/**
 * iss client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 用于删除实时上云模板
     */
    DeleteRecordTemplate(req: DeleteRecordTemplateRequest, cb?: (error: string, rep: DeleteRecordTemplateResponse) => void): Promise<DeleteRecordTemplateResponse>;
    /**
     * 用于启用/禁用设备，禁用后拒绝设备注册。
     */
    UpdateDeviceStatus(req: UpdateDeviceStatusRequest, cb?: (error: string, rep: UpdateDeviceStatusResponse) => void): Promise<UpdateDeviceStatusResponse>;
    /**
     * 用于修改网关信息（支持对网关名称和描述的修改）。
     */
    UpdateGateway(req: UpdateGatewayRequest, cb?: (error: string, rep: UpdateGatewayResponse) => void): Promise<UpdateGatewayResponse>;
    /**
     * 用于查询取回任务列表
     */
    ListRecordRetrieveTasks(req?: ListRecordRetrieveTasksRequest, cb?: (error: string, rep: ListRecordRetrieveTasksResponse) => void): Promise<ListRecordRetrieveTasksResponse>;
    /**
     * 用于修改录像上云模板。
     */
    UpdateRecordBackupTemplate(req: UpdateRecordBackupTemplateRequest, cb?: (error: string, rep: UpdateRecordBackupTemplateResponse) => void): Promise<UpdateRecordBackupTemplateResponse>;
    /**
     * 用于删除已添加的设备。
     */
    DeleteUserDevice(req: DeleteUserDeviceRequest, cb?: (error: string, rep: DeleteUserDeviceResponse) => void): Promise<DeleteUserDeviceResponse>;
    /**
     * 用于查询设备的通道。
     */
    DescribeDeviceChannel(req: DescribeDeviceChannelRequest, cb?: (error: string, rep: DescribeDeviceChannelResponse) => void): Promise<DescribeDeviceChannelResponse>;
    /**
     * 用于删除录像上云模板。
     */
    DeleteRecordBackupTemplate(req: DeleteRecordBackupTemplateRequest, cb?: (error: string, rep: DeleteRecordBackupTemplateResponse) => void): Promise<DeleteRecordBackupTemplateResponse>;
    /**
     * 用于用户添加域名时，查询可以绑定的服务节点，结果为平台支持的所有服务节点。（注意：每个服务节点只能绑定一个域名）
     */
    DescribeDomainRegion(req?: DescribeDomainRegionRequest, cb?: (error: string, rep: DescribeDomainRegionResponse) => void): Promise<DescribeDomainRegionResponse>;
    /**
     * 平台支持将数据以TS切片的形式存入客户自有COS桶，该接口用于支持客户快捷查询切片信息列表
（注意：只支持标准存储类型的查询）
     */
    DescribeRecordSlice(req: DescribeRecordSliceRequest, cb?: (error: string, rep: DescribeRecordSliceResponse) => void): Promise<DescribeRecordSliceResponse>;
    /**
     * 用于查询网关接入协议。
     */
    DescribeGatewayProtocol(req?: DescribeGatewayProtocolRequest, cb?: (error: string, rep: DescribeGatewayProtocolResponse) => void): Promise<DescribeGatewayProtocolResponse>;
    /**
     * 用于查询录像上云模板详情。
     */
    DescribeRecordBackupTemplate(req: DescribeRecordBackupTemplateRequest, cb?: (error: string, rep: DescribeRecordBackupTemplateResponse) => void): Promise<DescribeRecordBackupTemplateResponse>;
    /**
     * 用于获取网关的数据及流量监控信息。
     */
    DescribeGatewayMonitor(req: DescribeGatewayMonitorRequest, cb?: (error: string, rep: DescribeGatewayMonitorResponse) => void): Promise<DescribeGatewayMonitorResponse>;
    /**
     * 用于查询录像上云计划列表。
     */
    ListRecordBackupPlans(req?: ListRecordBackupPlansRequest, cb?: (error: string, rep: ListRecordBackupPlansResponse) => void): Promise<ListRecordBackupPlansResponse>;
    /**
     * 用于获取视频通道的码率信息
     */
    DescribeVideoBitRate(req: DescribeVideoBitRateRequest, cb?: (error: string, rep: DescribeVideoBitRateResponse) => void): Promise<DescribeVideoBitRateResponse>;
    /**
     * 查询网关服务版本
     */
    DescribeGatewayVersion(req: DescribeGatewayVersionRequest, cb?: (error: string, rep: DescribeGatewayVersionResponse) => void): Promise<DescribeGatewayVersionResponse>;
    /**
     * 更新AI任务
     */
    UpdateAITask(req: UpdateAITaskRequest, cb?: (error: string, rep: UpdateAITaskResponse) => void): Promise<UpdateAITaskResponse>;
    /**
     * 用于查询任务的子任务列表
     */
    ListSubTasks(req: ListSubTasksRequest, cb?: (error: string, rep: ListSubTasksResponse) => void): Promise<ListSubTasksResponse>;
    /**
     * 用于查询用户下所有实时上云计划中的通道列表
     */
    ListRecordPlanChannels(req?: ListRecordPlanChannelsRequest, cb?: (error: string, rep: ListRecordPlanChannelsResponse) => void): Promise<ListRecordPlanChannelsResponse>;
    /**
     * 用于添加设备时，查询设备可以使用的服务节点，查询结果为已经绑定了域名的服务节点。
     */
    DescribeDeviceRegion(req?: DescribeDeviceRegionRequest, cb?: (error: string, rep: DescribeDeviceRegionResponse) => void): Promise<DescribeDeviceRegionResponse>;
    /**
     * 用于新增组织。
     */
    AddOrganization(req: AddOrganizationRequest, cb?: (error: string, rep: AddOrganizationResponse) => void): Promise<AddOrganizationResponse>;
    /**
     * 用于查询设备通道预置位信息。
     */
    DescribeDevicePreset(req: DescribeDevicePresetRequest, cb?: (error: string, rep: DescribeDevicePresetResponse) => void): Promise<DescribeDevicePresetResponse>;
    /**
     * 用于查询实时上云计划列表
     */
    ListRecordPlans(req?: ListRecordPlansRequest, cb?: (error: string, rep: ListRecordPlansResponse) => void): Promise<ListRecordPlansResponse>;
    /**
     * 用于查询录像上云计划详情。
     */
    DescribeRecordBackupPlan(req: DescribeRecordBackupPlanRequest, cb?: (error: string, rep: DescribeRecordBackupPlanResponse) => void): Promise<DescribeRecordBackupPlanResponse>;
    /**
     * 用于查询设备云端录像时间轴信息（即为视频上云后设置录像计划后云存储的录像）
     */
    DescribeRecordFile(req: DescribeRecordFileRequest, cb?: (error: string, rep: DescribeRecordFileResponse) => void): Promise<DescribeRecordFileResponse>;
    /**
     * 用于查询云录像取回任务详情
     */
    DescribeRecordRetrieveTask(req: DescribeRecordRetrieveTaskRequest, cb?: (error: string, rep: DescribeRecordRetrieveTaskResponse) => void): Promise<DescribeRecordRetrieveTaskResponse>;
    /**
     * 用于查询设备的详细信息。
     */
    DescribeUserDevice(req: DescribeUserDeviceRequest, cb?: (error: string, rep: DescribeUserDeviceResponse) => void): Promise<DescribeUserDeviceResponse>;
    /**
     * 查询禁播通道列表
     */
    QueryForbidPlayChannelList(req: QueryForbidPlayChannelListRequest, cb?: (error: string, rep: QueryForbidPlayChannelListResponse) => void): Promise<QueryForbidPlayChannelListResponse>;
    /**
     * 获取AI任务识别结果
     */
    DescribeAITaskResult(req: DescribeAITaskResultRequest, cb?: (error: string, rep: DescribeAITaskResultResponse) => void): Promise<DescribeAITaskResultResponse>;
    /**
     * 用于查询实时上云模板详情
     */
    DescribeRecordTemplate(req: DescribeRecordTemplateRequest, cb?: (error: string, rep: DescribeRecordTemplateResponse) => void): Promise<DescribeRecordTemplateResponse>;
    /**
     * 用于修改实时上云模板
     */
    UpdateRecordTemplate(req: UpdateRecordTemplateRequest, cb?: (error: string, rep: UpdateRecordTemplateResponse) => void): Promise<UpdateRecordTemplateResponse>;
    /**
     * 用于新建取回任务
     */
    AddRecordRetrieveTask(req: AddRecordRetrieveTaskRequest, cb?: (error: string, rep: AddRecordRetrieveTaskResponse) => void): Promise<AddRecordRetrieveTaskResponse>;
    /**
     * 用于根据服务节点获取 CNAME 值。
     */
    DescribeCNAME(req: DescribeCNAMERequest, cb?: (error: string, rep: DescribeCNAMEResponse) => void): Promise<DescribeCNAMEResponse>;
    /**
     * 用于新增单个设备。添加设备之后，可根据返回结果到设备上进行配置，配置后等待设备注册/推流。
     */
    AddUserDevice(req: AddUserDeviceRequest, cb?: (error: string, rep: AddUserDeviceResponse) => void): Promise<AddUserDeviceResponse>;
    /**
     * 用于查询任务详情
     */
    DescribeTask(req: DescribeTaskRequest, cb?: (error: string, rep: DescribeTaskResponse) => void): Promise<DescribeTaskResponse>;
    /**
     * 添加AI任务
     */
    AddAITask(req: AddAITaskRequest, cb?: (error: string, rep: AddAITaskResponse) => void): Promise<AddAITaskResponse>;
    /**
     * 用于删除组织。
     */
    DeleteOrganization(req: DeleteOrganizationRequest, cb?: (error: string, rep: DeleteOrganizationResponse) => void): Promise<DeleteOrganizationResponse>;
    /**
     * 用于获取云端录像回放url地址
     */
    DescribeRecordPlaybackUrl(req: DescribeRecordPlaybackUrlRequest, cb?: (error: string, rep: DescribeRecordPlaybackUrlResponse) => void): Promise<DescribeRecordPlaybackUrlResponse>;
    /**
     * 用于批量更改设备的组织。
     */
    UpdateDeviceOrganization(req: UpdateDeviceOrganizationRequest, cb?: (error: string, rep: UpdateDeviceOrganizationResponse) => void): Promise<UpdateDeviceOrganizationResponse>;
    /**
     * 用于查询添加的域名列表。
     */
    DescribeDomain(req?: DescribeDomainRequest, cb?: (error: string, rep: DescribeDomainResponse) => void): Promise<DescribeDomainResponse>;
    /**
     * 用于获取设备的实时开流地址。
     */
    ControlDeviceStream(req: ControlDeviceStreamRequest, cb?: (error: string, rep: ControlDeviceStreamResponse) => void): Promise<ControlDeviceStreamResponse>;
    /**
     * 用于获取云录像下载 url
     */
    DescribeVideoDownloadUrl(req: DescribeVideoDownloadUrlRequest, cb?: (error: string, rep: DescribeVideoDownloadUrlResponse) => void): Promise<DescribeVideoDownloadUrlResponse>;
    /**
     * 用于同步国标设备的通道（接口调用后，触发向设备请求通道列表，新增的通道入库，设备上已删除的通道需自行删除、后台不自动删除）。
     */
    RefreshDeviceChannel(req: RefreshDeviceChannelRequest, cb?: (error: string, rep: RefreshDeviceChannelResponse) => void): Promise<RefreshDeviceChannelResponse>;
    /**
     * 用于操作设备预置位，包括设置、删除、调用。
     */
    ControlDevicePreset(req: ControlDevicePresetRequest, cb?: (error: string, rep: ControlDevicePresetResponse) => void): Promise<ControlDevicePresetResponse>;
    /**
     * 用于批量操作（启用，禁用，删除）设备
     */
    BatchOperateDevice(req: BatchOperateDeviceRequest, cb?: (error: string, rep: BatchOperateDeviceResponse) => void): Promise<BatchOperateDeviceResponse>;
    /**
     * 本接口可基于海康ISUP 5.0协议实现透传ISAPI的请求数据，调用接口前需确保设备采用ISUP协议成功注册至本平台
     */
    CallISAPI(req: CallISAPIRequest, cb?: (error: string, rep: CallISAPIResponse) => void): Promise<CallISAPIResponse>;
    /**
     * 用于查询实时上云计划详情
     */
    DescribeRecordPlan(req: DescribeRecordPlanRequest, cb?: (error: string, rep: DescribeRecordPlanResponse) => void): Promise<DescribeRecordPlanResponse>;
    /**
     * 用于修改实时上云计划
     */
    UpdateRecordPlan(req: UpdateRecordPlanRequest, cb?: (error: string, rep: UpdateRecordPlanResponse) => void): Promise<UpdateRecordPlanResponse>;
    /**
     * 用于获取网关详情。
     */
    DescribeGateway(req: DescribeGatewayRequest, cb?: (error: string, rep: DescribeGatewayResponse) => void): Promise<DescribeGatewayResponse>;
    /**
     * 用于网关升级（支持对所有待更新的服务一键升级）。
     */
    UpgradeGateway(req: UpgradeGatewayRequest, cb?: (error: string, rep: UpgradeGatewayResponse) => void): Promise<UpgradeGatewayResponse>;
    /**
     * 用于修改组织。
     */
    UpdateOrganization(req: UpdateOrganizationRequest, cb?: (error: string, rep: UpdateOrganizationResponse) => void): Promise<UpdateOrganizationResponse>;
    /**
     * 用于删除实时上云计划
     */
    DeleteRecordPlan(req: DeleteRecordPlanRequest, cb?: (error: string, rep: DeleteRecordPlanResponse) => void): Promise<DeleteRecordPlanResponse>;
    /**
     * 用于新增实时上云模板
     */
    AddRecordTemplate(req: AddRecordTemplateRequest, cb?: (error: string, rep: AddRecordTemplateResponse) => void): Promise<AddRecordTemplateResponse>;
    /**
     * 用于新增实时上云计划
     */
    AddRecordPlan(req: AddRecordPlanRequest, cb?: (error: string, rep: AddRecordPlanResponse) => void): Promise<AddRecordPlanResponse>;
    /**
     * 禁止主、子账号对视频通道的实况预览
     */
    SetForbidPlayChannels(req: SetForbidPlayChannelsRequest, cb?: (error: string, rep: SetForbidPlayChannelsResponse) => void): Promise<SetForbidPlayChannelsResponse>;
    /**
     * 用于查询组织目录下的未添加到实时上云计划中的通道数量
     */
    ListOrganizationChannelNumbers(req: ListOrganizationChannelNumbersRequest, cb?: (error: string, rep: ListOrganizationChannelNumbersResponse) => void): Promise<ListOrganizationChannelNumbersResponse>;
    /**
     * 用于修改录像上云计划。
     */
    UpdateRecordBackupPlan(req: UpdateRecordBackupPlanRequest, cb?: (error: string, rep: UpdateRecordBackupPlanResponse) => void): Promise<UpdateRecordBackupPlanResponse>;
    /**
     * 用于获取网关列表。
     */
    ListGateways(req: ListGatewaysRequest, cb?: (error: string, rep: ListGatewaysResponse) => void): Promise<ListGatewaysResponse>;
    /**
     * 用于查询组织。
     */
    DescribeOrganization(req?: DescribeOrganizationRequest, cb?: (error: string, rep: DescribeOrganizationResponse) => void): Promise<DescribeOrganizationResponse>;
    /**
     * 用于录像回放过程中的倍速、跳转、播放/暂停/停止等控制。
     */
    ControlRecord(req: ControlRecordRequest, cb?: (error: string, rep: ControlRecordResponse) => void): Promise<ControlRecordResponse>;
    /**
     * 用于获取对应组织下的设备列表。
     */
    ListDevices(req: ListDevicesRequest, cb?: (error: string, rep: ListDevicesResponse) => void): Promise<ListDevicesResponse>;
    /**
     * 用于查询录像上云模板列表。
     */
    ListRecordBackupTemplates(req?: ListRecordBackupTemplatesRequest, cb?: (error: string, rep: ListRecordBackupTemplatesResponse) => void): Promise<ListRecordBackupTemplatesResponse>;
    /**
     * 用于设备通道云台控制，包括转动、变倍、变焦、光圈等。
     */
    ControlDevicePTZ(req: ControlDevicePTZRequest, cb?: (error: string, rep: ControlDevicePTZResponse) => void): Promise<ControlDevicePTZResponse>;
    /**
     * 更新 AI 任务状态
     */
    UpdateAITaskStatus(req: UpdateAITaskStatusRequest, cb?: (error: string, rep: UpdateAITaskStatusResponse) => void): Promise<UpdateAITaskStatusResponse>;
    /**
     * 用于修改设备的配置信息。
     */
    UpdateUserDevice(req: UpdateUserDeviceRequest, cb?: (error: string, rep: UpdateUserDeviceResponse) => void): Promise<UpdateUserDeviceResponse>;
    /**
     * 用于查询录像上云计划下的设备通道列表。
     */
    ListRecordBackupPlanDevices(req: ListRecordBackupPlanDevicesRequest, cb?: (error: string, rep: ListRecordBackupPlanDevicesResponse) => void): Promise<ListRecordBackupPlanDevicesResponse>;
    /**
     * 获取AI任务列表
     */
    ListAITasks(req: ListAITasksRequest, cb?: (error: string, rep: ListAITasksResponse) => void): Promise<ListAITasksResponse>;
    /**
     * 用于查询实时上云模板列表
     */
    ListRecordTemplates(req?: ListRecordTemplatesRequest, cb?: (error: string, rep: ListRecordTemplatesResponse) => void): Promise<ListRecordTemplatesResponse>;
    /**
     * 用于查询实时上云计划下的设备通道列表
     */
    ListRecordPlanDevices(req: ListRecordPlanDevicesRequest, cb?: (error: string, rep: ListRecordPlanDevicesResponse) => void): Promise<ListRecordPlanDevicesResponse>;
    /**
     * 删除AI任务
     */
    DeleteAITask(req: DeleteAITaskRequest, cb?: (error: string, rep: DeleteAITaskResponse) => void): Promise<DeleteAITaskResponse>;
    /**
     * 用于设置推拉流鉴权配置。
     */
    AddStreamAuth(req: AddStreamAuthRequest, cb?: (error: string, rep: AddStreamAuthResponse) => void): Promise<AddStreamAuthResponse>;
    /**
     * 用于查询批量任务和简单任务列表
     */
    ListTasks(req: ListTasksRequest, cb?: (error: string, rep: ListTasksResponse) => void): Promise<ListTasksResponse>;
    /**
     * 用于删除取回任务
     */
    DeleteRecordRetrieveTask(req: DeleteRecordRetrieveTaskRequest, cb?: (error: string, rep: DeleteRecordRetrieveTaskResponse) => void): Promise<DeleteRecordRetrieveTaskResponse>;
    /**
     * 用于新增录像上云计划 （当前仅适用于通过GB28181协议和网关接入的设备/视频通道）
     */
    AddRecordBackupPlan(req: AddRecordBackupPlanRequest, cb?: (error: string, rep: AddRecordBackupPlanResponse) => void): Promise<AddRecordBackupPlanResponse>;
    /**
     * 用于查询推拉流鉴权配置。
     */
    DescribeStreamAuth(req?: DescribeStreamAuthRequest, cb?: (error: string, rep: DescribeStreamAuthResponse) => void): Promise<DescribeStreamAuthResponse>;
    /**
     * 用于查询设备本地录像时间轴信息，为NVR/IPC本地存储的录像。
     */
    ControlRecordTimeline(req: ControlRecordTimelineRequest, cb?: (error: string, rep: ControlRecordTimelineResponse) => void): Promise<ControlRecordTimelineResponse>;
    /**
     * 获取AI任务详情
     */
    DescribeAITask(req: DescribeAITaskRequest, cb?: (error: string, rep: DescribeAITaskResponse) => void): Promise<DescribeAITaskResponse>;
    /**
     * 用于删除录像上云模板。
     */
    DeleteRecordBackupPlan(req: DeleteRecordBackupPlanRequest, cb?: (error: string, rep: DeleteRecordBackupPlanResponse) => void): Promise<DeleteRecordBackupPlanResponse>;
    /**
     * 用于删除网关。
     */
    DeleteGateway(req: DeleteGatewayRequest, cb?: (error: string, rep: DeleteGatewayResponse) => void): Promise<DeleteGatewayResponse>;
    /**
     * 用于查询网关下挂载的设备列表。
     */
    ListGatewayDevices(req: ListGatewayDevicesRequest, cb?: (error: string, rep: ListGatewayDevicesResponse) => void): Promise<ListGatewayDevicesResponse>;
    /**
     * 用于删除域名。
     */
    DeleteDomain(req: DeleteDomainRequest, cb?: (error: string, rep: DeleteDomainResponse) => void): Promise<DeleteDomainResponse>;
    /**
     * 用于获取设备本地录像 URL 地址。
     */
    PlayRecord(req: PlayRecordRequest, cb?: (error: string, rep: PlayRecordResponse) => void): Promise<PlayRecordResponse>;
    /**
     * 用于新增录像上云模板。
> 该功能本质是拉取设备本地录像数据上云（即存在 IPC 摄像头存储卡或 NVR 硬盘中的录像），操作时需先设定录像时间段（即想要上云的设备本地录像），再设定上云时间段和上云倍速，平台将于上云时间段倍速拉取设备对应前一天的录像时间段数据。

> 设定需至少满足（上云时间段=前一天的录像时间段/上云倍速），建议上云时间段可多设定10%左右的时间，避免因网络波动导致数据拉取不完整。
     */
    AddRecordBackupTemplate(req: AddRecordBackupTemplateRequest, cb?: (error: string, rep: AddRecordBackupTemplateResponse) => void): Promise<AddRecordBackupTemplateResponse>;
    /**
     * 用于查询组织目录下的通道列表
     */
    ListOrganizationChannels(req: ListOrganizationChannelsRequest, cb?: (error: string, rep: ListOrganizationChannelsResponse) => void): Promise<ListOrganizationChannelsResponse>;
}
