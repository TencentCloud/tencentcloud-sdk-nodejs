import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { GetTWeCallPkgListRequest, DescribeCloudStoragePackageConsumeDetailsResponse, GetWechatDeviceTicketRequest, DeleteFenceBindRequest, DescribeModelDefinitionResponse, GetGatewaySubDeviceListResponse, DeleteStudioProductResponse, DescribeDevicePackagesRequest, ControlDeviceDataRequest, DeleteLoRaFrequencyResponse, CreateFreeCloudStorageResponse, ModifyPositionFenceResponse, DescribeCloudStorageAIServiceTaskRequest, DescribeCloudStorageThumbnailListRequest, CheckFirmwareUpdateResponse, DescribeCloudStorageUsersResponse, DescribeCloudStoragePackageConsumeDetailsRequest, DescribeActivateLicenseServiceResponse, CreateCloudStorageAIServiceTaskRequest, DescribeCloudStorageOrderRequest, DescribeSpaceFenceEventListResponse, DescribeCloudStorageEventsWithAITasksResponse, SearchTopicRuleResponse, ModifyCloudStorageAIServiceResponse, DescribeDeviceFirmWareRequest, BindCloudStorageUserRequest, CreateLoRaFrequencyRequest, UpdateDeviceTWeCallAuthorizeStatusRequest, CreateProjectResponse, DeleteProjectResponse, CreateTopicPolicyResponse, CreateDeviceResponse, CreateDeviceRequest, InheritCloudStorageUserResponse, DescribeDeviceResponse, PublishBroadcastMessageRequest, GetStudioProductListResponse, GetTWeCallActiveStatusRequest, GetAuthMiniProgramAppListRequest, DescribeFenceEventListRequest, ActivateTWeCallLicenseResponse, DeleteTopicPolicyRequest, ResetCloudStorageEventRequest, GetFamilyDeviceUserListRequest, CreateTRTCSignaturesWithRoomIdRequest, DescribeSpaceFenceEventListRequest, DescribeGatewaySubDeviceListRequest, GetDeviceListRequest, DescribeDeviceDataHistoryRequest, DescribeStudioProductRequest, DescribeCloudStorageThumbnailListResponse, DeletePositionFenceRequest, GetProjectListRequest, ModifyPositionSpaceRequest, DescribeDeviceBindGatewayRequest, ModifyProjectResponse, DescribeCloudStorageThumbnailRequest, ModifyProductCloudStorageAIServiceRequest, CreateExternalSourceAIServiceTaskRequest, GetDeviceSumStatisticsResponse, InheritCloudStorageUserRequest, ModifyProjectRequest, ModifySpacePropertyResponse, PauseTWeCallDeviceRequest, DescribeDeviceDataHistoryResponse, DeleteDeviceResponse, ModifyLoRaFrequencyResponse, ListEventHistoryResponse, GetBatchProductionsListResponse, DescribeDeviceFirmwaresResponse, DescribeCloudStorageUsersRequest, DescribeCloudStorageDateRequest, DescribeTopicPolicyRequest, DescribeDeviceFirmwaresRequest, DeleteDevicesRequest, UnbindDevicesRequest, DeleteCloudStorageEventResponse, DescribeCloudStorageTimeResponse, GetPositionSpaceListRequest, DescribeGatewaySubProductsResponse, GetDeviceListResponse, DescribeCloudStorageMultiThumbnailResponse, DescribeFreeCloudStorageNumRequest, DescribeDevicePositionListRequest, InvokeExternalSourceAIServiceTaskResponse, CreateStudioProductRequest, TransferCloudStorageRequest, DescribeFirmwareRequest, DescribeCloudStorageAIServiceCallbackResponse, ListTopicPolicyResponse, GenSingleDeviceSignatureOfPublicResponse, DescribeBatchProductionResponse, DescribeProductCloudStorageAIServiceResponse, DescribeLoRaFrequencyRequest, DeleteCloudStorageEventRequest, SearchPositionSpaceRequest, BindDevicesResponse, CallDeviceActionSyncResponse, CreateLoRaGatewayRequest, ModifyTopicRuleRequest, DescribeFenceBindListResponse, TransferTWeCallDeviceRequest, UnbindProductsRequest, CreateCloudStorageAIServiceRequest, DescribeDeviceLocationSolveResponse, DescribeStudioProductResponse, CreateIotVideoCloudStorageResponse, DescribePackageConsumeTaskResponse, CheckFirmwareUpdateRequest, RemoveUserByRoomIdFromTRTCRequest, ModifyPositionSpaceResponse, ModifyCloudStorageAIServiceCallbackResponse, CreateFenceBindResponse, DescribeBindedProductsResponse, ModifyTopicRuleResponse, DescribeBatchProductionRequest, DescribeCloudStorageAIServiceTaskResponse, PublishRRPCMessageResponse, DescribeInstanceResponse, GetLoRaGatewayListRequest, DescribeProjectRequest, UploadFirmwareResponse, ModifyTopicPolicyRequest, DeleteTopicRuleRequest, CreateLoRaGatewayResponse, GetBatchProductionsListRequest, DescribeDeviceBindGatewayResponse, ControlDeviceDataResponse, CreatePositionSpaceResponse, ResetCloudStorageEventResponse, DescribeCloudStorageAIServiceTasksResponse, DeletePositionSpaceResponse, DescribeActivateDeviceResponse, ResetTWeCallDeviceResponse, DescribeCloudStorageResponse, DescribeCloudStorageStreamDataRequest, DirectBindDeviceInFamilyRequest, PublishMessageResponse, DescribeModelDefinitionRequest, DisableTopicRuleRequest, ActivateTWeCallLicenseRequest, CreateTopicRuleResponse, DescribeDeviceDataResponse, DescribePositionFenceListRequest, InvokeCloudStorageAIServiceTaskRequest, CreatePositionSpaceRequest, DescribeCloudStorageEventsWithAITasksRequest, DismissRoomByStrRoomIdFromTRTCRequest, DescribeDeviceLocationSolveRequest, DescribeVideoLicenseRequest, DescribeCloudStorageAIServiceResponse, AssignTWeCallLicenseRequest, DeleteDevicesResponse, ModifyStudioProductResponse, BindDevicesRequest, DescribePackageConsumeTaskRequest, DismissRoomByStrRoomIdFromTRTCResponse, DescribeFirmwareUpdateStatusResponse, PublishFirmwareUpdateMessageResponse, CallDeviceActionSyncRequest, ResetCloudStorageAIServiceResponse, InvokeCloudStorageAIServiceTaskResponse, ModifyFenceBindResponse, DescribeGatewayBindDevicesResponse, DeletePositionFenceResponse, GetAuthMiniProgramAppListResponse, UpdateDeviceTWeCallAuthorizeStatusResponse, ModifyProductCloudStorageAIServiceResponse, GetDeviceLocationHistoryRequest, DeletePositionSpaceRequest, DescribeActivateDeviceRequest, CreateProjectRequest, CreateCloudStorageAIServiceResponse, GetTWeCallActiveStatusResponse, PauseTWeCallDeviceResponse, DeleteDeviceRequest, GetProjectListResponse, ListFirmwaresResponse, ReleaseStudioProductResponse, DescribeFirmwareResponse, DescribePackageConsumeTasksResponse, UnbindProductsResponse, DescribeTopicPolicyResponse, DescribeDeviceFirmWareResponse, DescribeFenceEventListResponse, ModifyCloudStorageAIServiceRequest, GetStudioProductListRequest, DescribeFirmwareTaskResponse, DisableTopicRuleResponse, DescribeCloudStorageAIServiceTasksRequest, ListFirmwaresRequest, PublishMessageRequest, GetCOSURLResponse, ReleaseStudioProductRequest, SearchPositionSpaceResponse, GenerateCloudStorageAIServiceTaskFileURLResponse, ResetTWeCallDeviceRequest, CallDeviceActionAsyncRequest, CallDeviceActionAsyncResponse, GetPositionSpaceListResponse, CreatePositionFenceResponse, DescribeTopicRuleResponse, UpdateFirmwareRequest, DescribeDeviceRequest, CreateDeviceChannelRequest, DescribeDevicePackagesResponse, DescribeGatewaySubDeviceListResponse, SearchStudioProductResponse, DescribeVideoLicenseResponse, DescribePackageConsumeTasksRequest, GetFamilyDeviceUserListResponse, DeleteLoRaGatewayResponse, AssignTWeCallLicenseResponse, ModifyLoRaFrequencyRequest, CreateLoRaFrequencyResponse, EnableTopicRuleResponse, GetGatewaySubDeviceListRequest, SearchStudioProductRequest, GenSingleDeviceSignatureOfPublicRequest, BindProductsResponse, DescribeGatewayBindDevicesRequest, DescribeGatewaySubProductsRequest, CreateExternalSourceAIServiceTaskResponse, BindProductsRequest, ModifyLoRaGatewayResponse, DescribeCloudStorageAIServiceRequest, DescribeCloudStorageOrderResponse, DescribeActivateLicenseServiceRequest, CreateTRTCSignaturesWithRoomIdResponse, DescribeCloudStorageEventsRequest, DescribeInstanceRequest, ResetCloudStorageRequest, DeleteProjectRequest, UpdateDevicesEnableStateResponse, GenerateSignedVideoURLRequest, ModifyPositionFenceRequest, ModifySpacePropertyRequest, DeleteTopicRuleResponse, ModifyModelDefinitionRequest, TransferCloudStorageResponse, CreateStudioProductResponse, UpdateFirmwareResponse, ModifyStudioProductRequest, CreateBatchProductionRequest, GetTopicRuleListResponse, CancelAssignTWeCallLicenseRequest, DescribeCloudStoragePackageConsumeStatsResponse, ListEventHistoryRequest, SearchTopicRuleRequest, DescribeDeviceDataRequest, PublishRRPCMessageRequest, DescribePositionFenceListResponse, DescribeCloudStorageMultiThumbnailRequest, DescribeFirmwareUpdateStatusRequest, DescribeDevicePositionListResponse, DescribeProjectResponse, ListTopicPolicyRequest, DeleteLoRaFrequencyRequest, InvokeExternalSourceAIServiceTaskRequest, DescribeProductCloudStorageAIServiceRequest, DeleteLoRaGatewayRequest, ModifyTopicPolicyResponse, DescribeCloudStorageStreamDataResponse, TransferTWeCallDeviceResponse, DescribeTopicRuleRequest, ModifyCloudStorageAIServiceCallbackRequest, GetWechatDeviceTicketResponse, ResumeWeCallDeviceResponse, ResetCloudStorageResponse, ResumeWeCallDeviceRequest, GetCOSURLRequest, CreateFenceBindRequest, UploadFirmwareRequest, GetDeviceLocationHistoryResponse, ModifyFenceBindRequest, GetLoRaGatewayListResponse, DirectBindDeviceInFamilyResponse, DescribeCloudStoragePackageConsumeStatsRequest, DeleteFenceBindResponse, PublishBroadcastMessageResponse, DescribeFenceBindListRequest, CreateDeviceChannelResponse, CreateTopicRuleRequest, CreateTopicPolicyRequest, CancelAssignTWeCallLicenseResponse, DescribeCloudStorageEventsResponse, DescribeBindedProductsRequest, CreateFreeCloudStorageRequest, DescribeLoRaFrequencyResponse, CreateCloudStorageAIServiceTaskResponse, DescribeCloudStorageDateResponse, DescribeFreeCloudStorageNumResponse, CreateIotVideoCloudStorageRequest, GenerateCloudStorageAIServiceTaskFileURLRequest, BindCloudStorageUserResponse, DeleteTopicPolicyResponse, UnbindDevicesResponse, CreateBatchProductionResponse, GetTopicRuleListRequest, DeleteStudioProductRequest, GetDeviceSumStatisticsRequest, DescribeCloudStorageAIServiceCallbackRequest, DescribeCloudStorageRequest, GenerateSignedVideoURLResponse, CreatePositionFenceRequest, DescribeCloudStorageThumbnailResponse, PublishFirmwareUpdateMessageRequest, UpdateDevicesEnableStateRequest, ResetCloudStorageAIServiceRequest, ModifyModelDefinitionResponse, RemoveUserByRoomIdFromTRTCResponse, ModifyLoRaGatewayRequest, DescribeCloudStorageTimeRequest, EnableTopicRuleRequest, GetTWeCallPkgListResponse, DescribeFirmwareTaskRequest } from "./iotexplorer_models";
/**
 * iotexplorer client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 本接口（GetCOSURL）用于获取固件COS存储的上传请求URL地址
     */
    GetCOSURL(req: GetCOSURLRequest, cb?: (error: string, rep: GetCOSURLResponse) => void): Promise<GetCOSURLResponse>;
    /**
     * 提供修改产品的名称和描述等信息的能力，对于已发布产品不允许进行修改。
     */
    ModifyStudioProduct(req: ModifyStudioProductRequest, cb?: (error: string, rep: ModifyStudioProductResponse) => void): Promise<ModifyStudioProductResponse>;
    /**
     * 根据设备信息拉取有效套餐列表
     */
    DescribeDevicePackages(req: DescribeDevicePackagesRequest, cb?: (error: string, rep: DescribeDevicePackagesResponse) => void): Promise<DescribeDevicePackagesResponse>;
    /**
     * 本接口（DescribeFirmwareUpdateStatus）用于查询设备固件升级状态及进度。
     */
    DescribeFirmwareUpdateStatus(req: DescribeFirmwareUpdateStatusRequest, cb?: (error: string, rep: DescribeFirmwareUpdateStatusResponse) => void): Promise<DescribeFirmwareUpdateStatusResponse>;
    /**
     * 用于查看某个设备的详细信息
     */
    DescribeDevice(req: DescribeDeviceRequest, cb?: (error: string, rep: DescribeDeviceResponse) => void): Promise<DescribeDeviceResponse>;
    /**
     * 拉取云存事件列表
     */
    DescribeCloudStorageEventsWithAITasks(req: DescribeCloudStorageEventsWithAITasksRequest, cb?: (error: string, rep: DescribeCloudStorageEventsWithAITasksResponse) => void): Promise<DescribeCloudStorageEventsWithAITasksResponse>;
    /**
     * 本接口（DescribeTopicPolicy）用于查看Topic详细信息
     */
    DescribeTopicPolicy(req: DescribeTopicPolicyRequest, cb?: (error: string, rep: DescribeTopicPolicyResponse) => void): Promise<DescribeTopicPolicyResponse>;
    /**
     * 开通设备云存AI分析服务
     */
    CreateCloudStorageAIService(req: CreateCloudStorageAIServiceRequest, cb?: (error: string, rep: CreateCloudStorageAIServiceResponse) => void): Promise<CreateCloudStorageAIServiceResponse>;
    /**
     * 提供查询用户所创建的项目列表查询功能。
     */
    GetProjectList(req: GetProjectListRequest, cb?: (error: string, rep: GetProjectListResponse) => void): Promise<GetProjectListResponse>;
    /**
     * 为用户提供同步调用设备行为的能力。
     */
    CallDeviceActionSync(req: CallDeviceActionSyncRequest, cb?: (error: string, rep: CallDeviceActionSyncResponse) => void): Promise<CallDeviceActionSyncResponse>;
    /**
     * 直接绑定设备和家庭
     */
    DirectBindDeviceInFamily(req: DirectBindDeviceInFamilyRequest, cb?: (error: string, rep: DirectBindDeviceInFamilyResponse) => void): Promise<DirectBindDeviceInFamilyResponse>;
    /**
     * 获取实时位置解析
     */
    DescribeDeviceLocationSolve(req: DescribeDeviceLocationSolveRequest, cb?: (error: string, rep: DescribeDeviceLocationSolveResponse) => void): Promise<DescribeDeviceLocationSolveResponse>;
    /**
     * 获取视频防盗链播放URL
     */
    GenerateSignedVideoURL(req: GenerateSignedVideoURLRequest, cb?: (error: string, rep: GenerateSignedVideoURLResponse) => void): Promise<GenerateSignedVideoURLResponse>;
    /**
     * 查询设备绑定的网关设备
     */
    DescribeDeviceBindGateway(req: DescribeDeviceBindGatewayRequest, cb?: (error: string, rep: DescribeDeviceBindGatewayResponse) => void): Promise<DescribeDeviceBindGatewayResponse>;
    /**
     * 获取设备历史位置
     */
    GetDeviceLocationHistory(req: GetDeviceLocationHistoryRequest, cb?: (error: string, rep: GetDeviceLocationHistoryResponse) => void): Promise<GetDeviceLocationHistoryResponse>;
    /**
     * 获取设备的历史事件
     */
    ListEventHistory(req: ListEventHistoryRequest, cb?: (error: string, rep: ListEventHistoryResponse) => void): Promise<ListEventHistoryResponse>;
    /**
     * 提供查看产品详细信息的能力，包括产品的ID、数据协议、认证类型等重要参数
     */
    DescribeStudioProduct(req: DescribeStudioProductRequest, cb?: (error: string, rep: DescribeStudioProductResponse) => void): Promise<DescribeStudioProductResponse>;
    /**
     * 获取 LoRa 网关列表接口
     */
    GetLoRaGatewayList(req: GetLoRaGatewayListRequest, cb?: (error: string, rep: GetLoRaGatewayListResponse) => void): Promise<GetLoRaGatewayListResponse>;
    /**
     * 产品开发完成并测试通过后，通过发布产品将产品设置为发布状态
     */
    ReleaseStudioProduct(req: ReleaseStudioProductRequest, cb?: (error: string, rep: ReleaseStudioProductResponse) => void): Promise<ReleaseStudioProductResponse>;
    /**
     * 列出量产数据列表信息。
     */
    GetBatchProductionsList(req: GetBatchProductionsListRequest, cb?: (error: string, rep: GetBatchProductionsListResponse) => void): Promise<GetBatchProductionsListResponse>;
    /**
     * 批量拉取云存事件缩略图
     */
    DescribeCloudStorageThumbnailList(req: DescribeCloudStorageThumbnailListRequest, cb?: (error: string, rep: DescribeCloudStorageThumbnailListResponse) => void): Promise<DescribeCloudStorageThumbnailListResponse>;
    /**
     * 创建TRTC通话参数
     */
    CreateTRTCSignaturesWithRoomId(req: CreateTRTCSignaturesWithRoomIdRequest, cb?: (error: string, rep: CreateTRTCSignaturesWithRoomIdResponse) => void): Promise<CreateTRTCSignaturesWithRoomIdResponse>;
    /**
     * 更新围栏绑定信息
     */
    ModifyFenceBind(req: ModifyFenceBindRequest, cb?: (error: string, rep: ModifyFenceBindResponse) => void): Promise<ModifyFenceBindResponse>;
    /**
     * 查询指定产品的云存 AI 服务开通状态
     */
    DescribeProductCloudStorageAIService(req: DescribeProductCloudStorageAIServiceRequest, cb?: (error: string, rep: DescribeProductCloudStorageAIServiceResponse) => void): Promise<DescribeProductCloudStorageAIServiceResponse>;
    /**
     * 查询套餐消耗记录列表
     */
    DescribePackageConsumeTasks(req: DescribePackageConsumeTasksRequest, cb?: (error: string, rep: DescribePackageConsumeTasksResponse) => void): Promise<DescribePackageConsumeTasksResponse>;
    /**
     * 获取云存套餐包消耗统计
     */
    DescribeCloudStoragePackageConsumeStats(req: DescribeCloudStoragePackageConsumeStatsRequest, cb?: (error: string, rep: DescribeCloudStoragePackageConsumeStatsResponse) => void): Promise<DescribeCloudStoragePackageConsumeStatsResponse>;
    /**
     * 删除位置空间
     */
    DeletePositionSpace(req: DeletePositionSpaceRequest, cb?: (error: string, rep: DeletePositionSpaceResponse) => void): Promise<DeletePositionSpaceResponse>;
    /**
     * 获取设备激活详情
     */
    DescribeActivateDevice(req: DescribeActivateDeviceRequest, cb?: (error: string, rep: DescribeActivateDeviceResponse) => void): Promise<DescribeActivateDeviceResponse>;
    /**
     * 获取网关产品已经绑定的子产品
     */
    DescribeBindedProducts(req: DescribeBindedProductsRequest, cb?: (error: string, rep: DescribeBindedProductsResponse) => void): Promise<DescribeBindedProductsResponse>;
    /**
     * 修改 LoRa 网关信息
     */
    ModifyLoRaGateway(req: ModifyLoRaGatewayRequest, cb?: (error: string, rep: ModifyLoRaGatewayResponse) => void): Promise<ModifyLoRaGatewayResponse>;
    /**
     * 获取围栏告警事件列表
     */
    DescribeFenceEventList(req: DescribeFenceEventListRequest, cb?: (error: string, rep: DescribeFenceEventListResponse) => void): Promise<DescribeFenceEventListResponse>;
    /**
     * 开通云存服务
     */
    CreateIotVideoCloudStorage(req: CreateIotVideoCloudStorageRequest, cb?: (error: string, rep: CreateIotVideoCloudStorageResponse) => void): Promise<CreateIotVideoCloudStorageResponse>;
    /**
     * 删除规则
     */
    DeleteTopicRule(req: DeleteTopicRuleRequest, cb?: (error: string, rep: DeleteTopicRuleResponse) => void): Promise<DeleteTopicRuleResponse>;
    /**
     * 查询指定设备的云存 AI 服务开通状态与参数配置
     */
    DescribeCloudStorageAIService(req: DescribeCloudStorageAIServiceRequest, cb?: (error: string, rep: DescribeCloudStorageAIServiceResponse) => void): Promise<DescribeCloudStorageAIServiceResponse>;
    /**
     * 获取围栏绑定信息列表
     */
    DescribeFenceBindList(req: DescribeFenceBindListRequest, cb?: (error: string, rep: DescribeFenceBindListResponse) => void): Promise<DescribeFenceBindListResponse>;
    /**
     * 删除  LoRa 网关的接口
     */
    DeleteLoRaGateway(req: DeleteLoRaGatewayRequest, cb?: (error: string, rep: DeleteLoRaGatewayResponse) => void): Promise<DeleteLoRaGatewayResponse>;
    /**
     * 取消分配
     */
    CancelAssignTWeCallLicense(req: CancelAssignTWeCallLicenseRequest, cb?: (error: string, rep: CancelAssignTWeCallLicenseResponse) => void): Promise<CancelAssignTWeCallLicenseResponse>;
    /**
     * 为用户提供新建产品的能力，用于管理用户的设备
     */
    CreateStudioProduct(req: CreateStudioProductRequest, cb?: (error: string, rep: CreateStudioProductResponse) => void): Promise<CreateStudioProductResponse>;
    /**
     * 获取具有云存的日期
     */
    DescribeCloudStorageDate(req: DescribeCloudStorageDateRequest, cb?: (error: string, rep: DescribeCloudStorageDateResponse) => void): Promise<DescribeCloudStorageDateResponse>;
    /**
     * 查询云存卡套餐信息
     */
    DescribeFreeCloudStorageNum(req?: DescribeFreeCloudStorageNumRequest, cb?: (error: string, rep: DescribeFreeCloudStorageNumResponse) => void): Promise<DescribeFreeCloudStorageNumResponse>;
    /**
     * 启用规则
     */
    EnableTopicRule(req: EnableTopicRuleRequest, cb?: (error: string, rep: EnableTopicRuleResponse) => void): Promise<EnableTopicRuleResponse>;
    /**
     * 查询绑定到家庭的网关设备的子设备列表
     */
    DescribeGatewaySubDeviceList(req: DescribeGatewaySubDeviceListRequest, cb?: (error: string, rep: DescribeGatewaySubDeviceListResponse) => void): Promise<DescribeGatewaySubDeviceListResponse>;
    /**
     * 拉取云存用户列表
     */
    DescribeCloudStorageUsers(req: DescribeCloudStorageUsersRequest, cb?: (error: string, rep: DescribeCloudStorageUsersResponse) => void): Promise<DescribeCloudStorageUsersResponse>;
    /**
     * 转移云存服务
     */
    TransferCloudStorage(req: TransferCloudStorageRequest, cb?: (error: string, rep: TransferCloudStorageResponse) => void): Promise<TransferCloudStorageResponse>;
    /**
     * 用于查询视频激活码统计概览
     */
    DescribeVideoLicense(req: DescribeVideoLicenseRequest, cb?: (error: string, rep: DescribeVideoLicenseResponse) => void): Promise<DescribeVideoLicenseResponse>;
    /**
     * 提供根据产品名称查找产品的能力
     */
    SearchStudioProduct(req: SearchStudioProductRequest, cb?: (error: string, rep: SearchStudioProductResponse) => void): Promise<SearchStudioProductResponse>;
    /**
     * 修改规则
     */
    ModifyTopicRule(req: ModifyTopicRuleRequest, cb?: (error: string, rep: ModifyTopicRuleResponse) => void): Promise<ModifyTopicRuleResponse>;
    /**
     * 继承云存用户
     */
    InheritCloudStorageUser(req: InheritCloudStorageUserRequest, cb?: (error: string, rep: InheritCloudStorageUserResponse) => void): Promise<InheritCloudStorageUserResponse>;
    /**
     * 转移设备
     */
    TransferTWeCallDevice(req: TransferTWeCallDeviceRequest, cb?: (error: string, rep: TransferTWeCallDeviceResponse) => void): Promise<TransferTWeCallDeviceResponse>;
    /**
     * 本接口（ListFirmwares）用于获取固件列表
     */
    ListFirmwares(req: ListFirmwaresRequest, cb?: (error: string, rep: ListFirmwaresResponse) => void): Promise<ListFirmwaresResponse>;
    /**
     * 本接口（PublishFirmwareUpdateMessage）用于用户确认升级后，云端向设备发起固件升级请求。
     */
    PublishFirmwareUpdateMessage(req: PublishFirmwareUpdateMessageRequest, cb?: (error: string, rep: PublishFirmwareUpdateMessageResponse) => void): Promise<PublishFirmwareUpdateMessageResponse>;
    /**
     * 创建设备
     */
    CreateDevice(req: CreateDeviceRequest, cb?: (error: string, rep: CreateDeviceResponse) => void): Promise<CreateDeviceResponse>;
    /**
     * 删除围栏绑定信息
     */
    DeleteFenceBind(req: DeleteFenceBindRequest, cb?: (error: string, rep: DeleteFenceBindResponse) => void): Promise<DeleteFenceBindResponse>;
    /**
     * 根据设备产品ID、设备名称，设置控制设备的属性数据。
     */
    ControlDeviceData(req: ControlDeviceDataRequest, cb?: (error: string, rep: ControlDeviceDataResponse) => void): Promise<ControlDeviceDataResponse>;
    /**
     * 查询固件升级任务列表
     */
    DescribeFirmwareTask(req: DescribeFirmwareTaskRequest, cb?: (error: string, rep: DescribeFirmwareTaskResponse) => void): Promise<DescribeFirmwareTaskResponse>;
    /**
     * 无
     */
    GenSingleDeviceSignatureOfPublic(req: GenSingleDeviceSignatureOfPublicRequest, cb?: (error: string, rep: GenSingleDeviceSignatureOfPublicResponse) => void): Promise<GenSingleDeviceSignatureOfPublicResponse>;
    /**
     * 重置云存服务
     */
    ResetCloudStorage(req: ResetCloudStorageRequest, cb?: (error: string, rep: ResetCloudStorageResponse) => void): Promise<ResetCloudStorageResponse>;
    /**
     * 创建外部视频 AI 分析任务
     */
    InvokeExternalSourceAIServiceTask(req: InvokeExternalSourceAIServiceTaskRequest, cb?: (error: string, rep: InvokeExternalSourceAIServiceTaskResponse) => void): Promise<InvokeExternalSourceAIServiceTaskResponse>;
    /**
     * 提供查询LoRa自定义频点详情的能力
     */
    DescribeLoRaFrequency(req: DescribeLoRaFrequencyRequest, cb?: (error: string, rep: DescribeLoRaFrequencyResponse) => void): Promise<DescribeLoRaFrequencyResponse>;
    /**
     * 更新位置空间
     */
    ModifyPositionSpace(req: ModifyPositionSpaceRequest, cb?: (error: string, rep: ModifyPositionSpaceResponse) => void): Promise<ModifyPositionSpaceResponse>;
    /**
     * 获取某一天云存时间轴
     */
    DescribeCloudStorageTime(req: DescribeCloudStorageTimeRequest, cb?: (error: string, rep: DescribeCloudStorageTimeResponse) => void): Promise<DescribeCloudStorageTimeResponse>;
    /**
     * 获取规则列表
     */
    GetTopicRuleList(req: GetTopicRuleListRequest, cb?: (error: string, rep: GetTopicRuleListResponse) => void): Promise<GetTopicRuleListResponse>;
    /**
     * 拉取云存事件缩略图
     */
    DescribeCloudStorageThumbnail(req: DescribeCloudStorageThumbnailRequest, cb?: (error: string, rep: DescribeCloudStorageThumbnailResponse) => void): Promise<DescribeCloudStorageThumbnailResponse>;
    /**
     * 重置指定设备的云存 AI 服务
     */
    ResetCloudStorageAIService(req: ResetCloudStorageAIServiceRequest, cb?: (error: string, rep: ResetCloudStorageAIServiceResponse) => void): Promise<ResetCloudStorageAIServiceResponse>;
    /**
     * 查询微信设备授权票据
     */
    GetWechatDeviceTicket(req: GetWechatDeviceTicketRequest, cb?: (error: string, rep: GetWechatDeviceTicketResponse) => void): Promise<GetWechatDeviceTicketResponse>;
    /**
     * 拉取多个云存事件缩略图
     */
    DescribeCloudStorageMultiThumbnail(req: DescribeCloudStorageMultiThumbnailRequest, cb?: (error: string, rep: DescribeCloudStorageMultiThumbnailResponse) => void): Promise<DescribeCloudStorageMultiThumbnailResponse>;
    /**
     * 提供给用户异步调用设备行为的能力
     */
    CallDeviceActionAsync(req: CallDeviceActionAsyncRequest, cb?: (error: string, rep: CallDeviceActionAsyncResponse) => void): Promise<CallDeviceActionAsyncResponse>;
    /**
     * 修改LoRa自定义频点
     */
    ModifyLoRaFrequency(req: ModifyLoRaFrequencyRequest, cb?: (error: string, rep: ModifyLoRaFrequencyResponse) => void): Promise<ModifyLoRaFrequencyResponse>;
    /**
     * 拉取设备统计汇总数据
     */
    GetDeviceSumStatistics(req: GetDeviceSumStatisticsRequest, cb?: (error: string, rep: GetDeviceSumStatisticsResponse) => void): Promise<GetDeviceSumStatisticsResponse>;
    /**
     * 提供删除某个项目的能力
     */
    DeleteProject(req: DeleteProjectRequest, cb?: (error: string, rep: DeleteProjectResponse) => void): Promise<DeleteProjectResponse>;
    /**
     * 获取规则信息
     */
    DescribeTopicRule(req: DescribeTopicRuleRequest, cb?: (error: string, rep: DescribeTopicRuleResponse) => void): Promise<DescribeTopicRuleResponse>;
    /**
     * 发布广播消息、发布RRPC消息属于早期服务，目前已停止维护，需要从官网下线。

发布广播消息
     */
    PublishBroadcastMessage(req: PublishBroadcastMessageRequest, cb?: (error: string, rep: PublishBroadcastMessageResponse) => void): Promise<PublishBroadcastMessageResponse>;
    /**
     * 批量解绑子产品
     */
    UnbindProducts(req: UnbindProductsRequest, cb?: (error: string, rep: UnbindProductsResponse) => void): Promise<UnbindProductsResponse>;
    /**
     * 获取位置空间列表
     */
    GetPositionSpaceList(req: GetPositionSpaceListRequest, cb?: (error: string, rep: GetPositionSpaceListResponse) => void): Promise<GetPositionSpaceListResponse>;
    /**
     * 提供删除某个项目下产品的能力
     */
    DeleteStudioProduct(req: DeleteStudioProductRequest, cb?: (error: string, rep: DeleteStudioProductResponse) => void): Promise<DeleteStudioProductResponse>;
    /**
     * 根据设备产品ID、设备名称，获取设备上报的属性数据。
     */
    DescribeDeviceData(req: DescribeDeviceDataRequest, cb?: (error: string, rep: DescribeDeviceDataResponse) => void): Promise<DescribeDeviceDataResponse>;
    /**
     * 获取网关绑定的子设备列表
     */
    DescribeGatewayBindDevices(req: DescribeGatewayBindDevicesRequest, cb?: (error: string, rep: DescribeGatewayBindDevicesResponse) => void): Promise<DescribeGatewayBindDevicesResponse>;
    /**
     * 解散TRTC房间
     */
    DismissRoomByStrRoomIdFromTRTC(req: DismissRoomByStrRoomIdFromTRTCRequest, cb?: (error: string, rep: DismissRoomByStrRoomIdFromTRTCResponse) => void): Promise<DismissRoomByStrRoomIdFromTRTCResponse>;
    /**
     * 创建围栏
     */
    CreatePositionFence(req: CreatePositionFenceRequest, cb?: (error: string, rep: CreatePositionFenceResponse) => void): Promise<CreatePositionFenceResponse>;
    /**
     * 修改指定产品的云存 AI 服务开通状态
     */
    ModifyProductCloudStorageAIService(req: ModifyProductCloudStorageAIServiceRequest, cb?: (error: string, rep: ModifyProductCloudStorageAIServiceResponse) => void): Promise<ModifyProductCloudStorageAIServiceResponse>;
    /**
     * 创建新 LoRa 网关设备接口
     */
    CreateLoRaGateway(req: CreateLoRaGatewayRequest, cb?: (error: string, rep: CreateLoRaGatewayResponse) => void): Promise<CreateLoRaGatewayResponse>;
    /**
     * 创建规则
     */
    CreateTopicRule(req: CreateTopicRuleRequest, cb?: (error: string, rep: CreateTopicRuleResponse) => void): Promise<CreateTopicRuleResponse>;
    /**
     * 创建 LoRa 自定义频点
     */
    CreateLoRaFrequency(req: CreateLoRaFrequencyRequest, cb?: (error: string, rep: CreateLoRaFrequencyResponse) => void): Promise<CreateLoRaFrequencyResponse>;
    /**
     * 本接口（CreateTopicPolicy）用于创建一个Topic
     */
    CreateTopicPolicy(req: CreateTopicPolicyRequest, cb?: (error: string, rep: CreateTopicPolicyResponse) => void): Promise<CreateTopicPolicyResponse>;
    /**
     * 发布广播消息、发布RRPC消息属于早期服务，目前已停止维护，需要从官网下线。

下发RRPC消息
     */
    PublishRRPCMessage(req: PublishRRPCMessageRequest, cb?: (error: string, rep: PublishRRPCMessageResponse) => void): Promise<PublishRRPCMessageResponse>;
    /**
     * 获取设备云存服务详情
     */
    DescribeCloudStorage(req: DescribeCloudStorageRequest, cb?: (error: string, rep: DescribeCloudStorageResponse) => void): Promise<DescribeCloudStorageResponse>;
    /**
     * 本接口（UploadFirmware）用于创建设备固件版本信息，在平台用于固件版本升级、固件资源下发等。
     */
    UploadFirmware(req: UploadFirmwareRequest, cb?: (error: string, rep: UploadFirmwareResponse) => void): Promise<UploadFirmwareResponse>;
    /**
     * 同步执行设备云存 AI 分析任务
     */
    InvokeCloudStorageAIServiceTask(req: InvokeCloudStorageAIServiceTaskRequest, cb?: (error: string, rep: InvokeCloudStorageAIServiceTaskResponse) => void): Promise<InvokeCloudStorageAIServiceTaskResponse>;
    /**
     * 获取增值服务激活码详情
     */
    DescribeActivateLicenseService(req: DescribeActivateLicenseServiceRequest, cb?: (error: string, rep: DescribeActivateLicenseServiceResponse) => void): Promise<DescribeActivateLicenseServiceResponse>;
    /**
     * 开通免费云存服务
     */
    CreateFreeCloudStorage(req: CreateFreeCloudStorageRequest, cb?: (error: string, rep: CreateFreeCloudStorageResponse) => void): Promise<CreateFreeCloudStorageResponse>;
    /**
     * 微信VOIP功能调整下线

查询TWeCall包列表
     */
    GetTWeCallPkgList(req: GetTWeCallPkgListRequest, cb?: (error: string, rep: GetTWeCallPkgListResponse) => void): Promise<GetTWeCallPkgListResponse>;
    /**
     * 批量禁用启用设备
     */
    UpdateDevicesEnableState(req: UpdateDevicesEnableStateRequest, cb?: (error: string, rep: UpdateDevicesEnableStateResponse) => void): Promise<UpdateDevicesEnableStateResponse>;
    /**
     * 修改项目
     */
    ModifyProject(req: ModifyProjectRequest, cb?: (error: string, rep: ModifyProjectResponse) => void): Promise<ModifyProjectResponse>;
    /**
     * 批量绑定子产品
     */
    BindProducts(req: BindProductsRequest, cb?: (error: string, rep: BindProductsResponse) => void): Promise<BindProductsResponse>;
    /**
     * TRTC操作，将用户从房间移出
     */
    RemoveUserByRoomIdFromTRTC(req: RemoveUserByRoomIdFromTRTCRequest, cb?: (error: string, rep: RemoveUserByRoomIdFromTRTCResponse) => void): Promise<RemoveUserByRoomIdFromTRTCResponse>;
    /**
     * 搜索位置空间
     */
    SearchPositionSpace(req: SearchPositionSpaceRequest, cb?: (error: string, rep: SearchPositionSpaceResponse) => void): Promise<SearchPositionSpaceResponse>;
    /**
     * 微信VOIP功能调整下线

分配License
     */
    AssignTWeCallLicense(req: AssignTWeCallLicenseRequest, cb?: (error: string, rep: AssignTWeCallLicenseResponse) => void): Promise<AssignTWeCallLicenseResponse>;
    /**
     * 重置设备
     */
    ResetTWeCallDevice(req: ResetTWeCallDeviceRequest, cb?: (error: string, rep: ResetTWeCallDeviceResponse) => void): Promise<ResetTWeCallDeviceResponse>;
    /**
     * 本接口（UpdateTopicPolicy）用于更新Topic信息
     */
    ModifyTopicPolicy(req: ModifyTopicPolicyRequest, cb?: (error: string, rep: ModifyTopicPolicyResponse) => void): Promise<ModifyTopicPolicyResponse>;
    /**
     * 获取位置空间中围栏告警事件列表
     */
    DescribeSpaceFenceEventList(req: DescribeSpaceFenceEventListRequest, cb?: (error: string, rep: DescribeSpaceFenceEventListResponse) => void): Promise<DescribeSpaceFenceEventListResponse>;
    /**
     * 本接口（UpdateFirmware）用于对指定设备发起固件升级请求
     */
    UpdateFirmware(req: UpdateFirmwareRequest, cb?: (error: string, rep: UpdateFirmwareResponse) => void): Promise<UpdateFirmwareResponse>;
    /**
     * 查询激活状态
     */
    GetTWeCallActiveStatus(req: GetTWeCallActiveStatusRequest, cb?: (error: string, rep: GetTWeCallActiveStatusResponse) => void): Promise<GetTWeCallActiveStatusResponse>;
    /**
     * 用于获取网关可绑定或解绑的子产品
     */
    DescribeGatewaySubProducts(req: DescribeGatewaySubProductsRequest, cb?: (error: string, rep: DescribeGatewaySubProductsResponse) => void): Promise<DescribeGatewaySubProductsResponse>;
    /**
     * 获取设备位置列表
     */
    DescribeDevicePositionList(req: DescribeDevicePositionListRequest, cb?: (error: string, rep: DescribeDevicePositionListResponse) => void): Promise<DescribeDevicePositionListResponse>;
    /**
     * 查询固件信息
     */
    DescribeFirmware(req: DescribeFirmwareRequest, cb?: (error: string, rep: DescribeFirmwareResponse) => void): Promise<DescribeFirmwareResponse>;
    /**
     * 获取设备当前固件信息
     */
    DescribeDeviceFirmwares(req: DescribeDeviceFirmwaresRequest, cb?: (error: string, rep: DescribeDeviceFirmwaresResponse) => void): Promise<DescribeDeviceFirmwaresResponse>;
    /**
     * 批量绑定子设备
     */
    BindDevices(req: BindDevicesRequest, cb?: (error: string, rep: BindDevicesResponse) => void): Promise<BindDevicesResponse>;
    /**
     * 用于新建批量生产设备
     */
    CreateBatchProduction(req: CreateBatchProductionRequest, cb?: (error: string, rep: CreateBatchProductionResponse) => void): Promise<CreateBatchProductionResponse>;
    /**
     * 创建设备云存 AI 分析任务
     */
    CreateCloudStorageAIServiceTask(req: CreateCloudStorageAIServiceTaskRequest, cb?: (error: string, rep: CreateCloudStorageAIServiceTaskResponse) => void): Promise<CreateCloudStorageAIServiceTaskResponse>;
    /**
     * 禁用规则
     */
    DisableTopicRule(req: DisableTopicRuleRequest, cb?: (error: string, rep: DisableTopicRuleResponse) => void): Promise<DisableTopicRuleResponse>;
    /**
     * 批量解绑子设备
     */
    UnbindDevices(req: UnbindDevicesRequest, cb?: (error: string, rep: UnbindDevicesResponse) => void): Promise<UnbindDevicesResponse>;
    /**
     * 修改指定设备的云存 AI 服务参数配置
     */
    ModifyCloudStorageAIService(req: ModifyCloudStorageAIServiceRequest, cb?: (error: string, rep: ModifyCloudStorageAIServiceResponse) => void): Promise<ModifyCloudStorageAIServiceResponse>;
    /**
     * 恢复设备
     */
    ResumeWeCallDevice(req: ResumeWeCallDeviceRequest, cb?: (error: string, rep: ResumeWeCallDeviceResponse) => void): Promise<ResumeWeCallDeviceResponse>;
    /**
     * 提供查询某个项目下所有产品信息的能力。
     */
    GetStudioProductList(req: GetStudioProductListRequest, cb?: (error: string, rep: GetStudioProductListResponse) => void): Promise<GetStudioProductListResponse>;
    /**
     * 绑定云存用户
     */
    BindCloudStorageUser(req: BindCloudStorageUserRequest, cb?: (error: string, rep: BindCloudStorageUserResponse) => void): Promise<BindCloudStorageUserResponse>;
    /**
     * 获取指定网关设备的子设备列表
     */
    GetGatewaySubDeviceList(req: GetGatewaySubDeviceListRequest, cb?: (error: string, rep: GetGatewaySubDeviceListResponse) => void): Promise<GetGatewaySubDeviceListResponse>;
    /**
     * 获取量产详情信息。
     */
    DescribeBatchProduction(req: DescribeBatchProductionRequest, cb?: (error: string, rep: DescribeBatchProductionResponse) => void): Promise<DescribeBatchProductionResponse>;
    /**
     * 创建外部视频 AI 分析任务
     */
    CreateExternalSourceAIServiceTask(req: CreateExternalSourceAIServiceTaskRequest, cb?: (error: string, rep: CreateExternalSourceAIServiceTaskResponse) => void): Promise<CreateExternalSourceAIServiceTaskResponse>;
    /**
     * 激活
     */
    ActivateTWeCallLicense(req: ActivateTWeCallLicenseRequest, cb?: (error: string, rep: ActivateTWeCallLicenseResponse) => void): Promise<ActivateTWeCallLicenseResponse>;
    /**
     * 更新用户对设备的TweCall授权状态
     */
    UpdateDeviceTWeCallAuthorizeStatus(req: UpdateDeviceTWeCallAuthorizeStatusRequest, cb?: (error: string, rep: UpdateDeviceTWeCallAuthorizeStatusResponse) => void): Promise<UpdateDeviceTWeCallAuthorizeStatusResponse>;
    /**
     * 删除云存事件
     */
    DeleteCloudStorageEvent(req: DeleteCloudStorageEventRequest, cb?: (error: string, rep: DeleteCloudStorageEventResponse) => void): Promise<DeleteCloudStorageEventResponse>;
    /**
     * 批量删除设备
     */
    DeleteDevices(req: DeleteDevicesRequest, cb?: (error: string, rep: DeleteDevicesResponse) => void): Promise<DeleteDevicesResponse>;
    /**
     * 创建设备通道
     */
    CreateDeviceChannel(req: CreateDeviceChannelRequest, cb?: (error: string, rep: CreateDeviceChannelResponse) => void): Promise<CreateDeviceChannelResponse>;
    /**
     * 本接口（CheckFirmwareUpdate）用于查询设备可升级固件版本
     */
    CheckFirmwareUpdate(req: CheckFirmwareUpdateRequest, cb?: (error: string, rep: CheckFirmwareUpdateResponse) => void): Promise<CheckFirmwareUpdateResponse>;
    /**
     * 为用户提供新建项目的能力，用于集中管理产品和应用。
     */
    CreateProject(req: CreateProjectRequest, cb?: (error: string, rep: CreateProjectResponse) => void): Promise<CreateProjectResponse>;
    /**
     * 获取云存 AI 分析任务输出文件的下载地址
     */
    GenerateCloudStorageAIServiceTaskFileURL(req: GenerateCloudStorageAIServiceTaskFileURLRequest, cb?: (error: string, rep: GenerateCloudStorageAIServiceTaskFileURLResponse) => void): Promise<GenerateCloudStorageAIServiceTaskFileURLResponse>;
    /**
     * 查询云存服务详情
     */
    DescribeCloudStorageOrder(req: DescribeCloudStorageOrderRequest, cb?: (error: string, rep: DescribeCloudStorageOrderResponse) => void): Promise<DescribeCloudStorageOrderResponse>;
    /**
     * 本接口（PublishMessage）用于使用自定义透传协议进行设备远控
     */
    PublishMessage(req: PublishMessageRequest, cb?: (error: string, rep: PublishMessageResponse) => void): Promise<PublishMessageResponse>;
    /**
     * 获取设备在指定时间范围内上报的历史数据。
     */
    DescribeDeviceDataHistory(req: DescribeDeviceDataHistoryRequest, cb?: (error: string, rep: DescribeDeviceDataHistoryResponse) => void): Promise<DescribeDeviceDataHistoryResponse>;
    /**
     * 更新围栏
     */
    ModifyPositionFence(req?: ModifyPositionFenceRequest, cb?: (error: string, rep: ModifyPositionFenceResponse) => void): Promise<ModifyPositionFenceResponse>;
    /**
     * 删除设备
     */
    DeleteDevice(req: DeleteDeviceRequest, cb?: (error: string, rep: DeleteDeviceResponse) => void): Promise<DeleteDeviceResponse>;
    /**
     * 获取围栏列表
     */
    DescribePositionFenceList(req: DescribePositionFenceListRequest, cb?: (error: string, rep: DescribePositionFenceListResponse) => void): Promise<DescribePositionFenceListResponse>;
    /**
     * 提供删除LoRa自定义频点的能力
     */
    DeleteLoRaFrequency(req: DeleteLoRaFrequencyRequest, cb?: (error: string, rep: DeleteLoRaFrequencyResponse) => void): Promise<DeleteLoRaFrequencyResponse>;
    /**
     * 查询套餐消耗记录详情
     */
    DescribePackageConsumeTask(req: DescribePackageConsumeTaskRequest, cb?: (error: string, rep: DescribePackageConsumeTaskResponse) => void): Promise<DescribePackageConsumeTaskResponse>;
    /**
     * 重置云存事件
     */
    ResetCloudStorageEvent(req: ResetCloudStorageEventRequest, cb?: (error: string, rep: ResetCloudStorageEventResponse) => void): Promise<ResetCloudStorageEventResponse>;
    /**
     * 查询云存AI分析回调配置
     */
    DescribeCloudStorageAIServiceCallback(req: DescribeCloudStorageAIServiceCallbackRequest, cb?: (error: string, rep: DescribeCloudStorageAIServiceCallbackResponse) => void): Promise<DescribeCloudStorageAIServiceCallbackResponse>;
    /**
     * 更新位置空间产品属性
     */
    ModifySpaceProperty(req: ModifySpacePropertyRequest, cb?: (error: string, rep: ModifySpacePropertyResponse) => void): Promise<ModifySpacePropertyResponse>;
    /**
     * 本接口（DeleteTopicPolicy）用于删除Topic
     */
    DeleteTopicPolicy(req: DeleteTopicPolicyRequest, cb?: (error: string, rep: DeleteTopicPolicyResponse) => void): Promise<DeleteTopicPolicyResponse>;
    /**
     * 用于查询某个产品下的设备列表
     */
    GetDeviceList(req: GetDeviceListRequest, cb?: (error: string, rep: GetDeviceListResponse) => void): Promise<GetDeviceListResponse>;
    /**
     * 本接口（ListTopicPolicy）用于获取Topic列表
     */
    ListTopicPolicy(req: ListTopicPolicyRequest, cb?: (error: string, rep: ListTopicPolicyResponse) => void): Promise<ListTopicPolicyResponse>;
    /**
     * 查询指定的云存 AI 分析任务
     */
    DescribeCloudStorageAIServiceTask(req: DescribeCloudStorageAIServiceTaskRequest, cb?: (error: string, rep: DescribeCloudStorageAIServiceTaskResponse) => void): Promise<DescribeCloudStorageAIServiceTaskResponse>;
    /**
     * 公共实例过期时间 0001-01-01T00:00:00Z，公共实例是永久有效
     */
    DescribeInstance(req: DescribeInstanceRequest, cb?: (error: string, rep: DescribeInstanceResponse) => void): Promise<DescribeInstanceResponse>;
    /**
     * 获取设备图片流数据
     */
    DescribeCloudStorageStreamData(req: DescribeCloudStorageStreamDataRequest, cb?: (error: string, rep: DescribeCloudStorageStreamDataResponse) => void): Promise<DescribeCloudStorageStreamDataResponse>;
    /**
     * 暂停设备
     */
    PauseTWeCallDevice(req: PauseTWeCallDeviceRequest, cb?: (error: string, rep: PauseTWeCallDeviceResponse) => void): Promise<PauseTWeCallDeviceResponse>;
    /**
     * 查询小程序列表
     */
    GetAuthMiniProgramAppList(req: GetAuthMiniProgramAppListRequest, cb?: (error: string, rep: GetAuthMiniProgramAppListResponse) => void): Promise<GetAuthMiniProgramAppListResponse>;
    /**
     * 删除围栏
     */
    DeletePositionFence(req: DeletePositionFenceRequest, cb?: (error: string, rep: DeletePositionFenceResponse) => void): Promise<DeletePositionFenceResponse>;
    /**
     * 修改云存AI分析回调配置
     */
    ModifyCloudStorageAIServiceCallback(req: ModifyCloudStorageAIServiceCallbackRequest, cb?: (error: string, rep: ModifyCloudStorageAIServiceCallbackResponse) => void): Promise<ModifyCloudStorageAIServiceCallbackResponse>;
    /**
     * 查询指定设备的云存 AI 分析任务列表
     */
    DescribeCloudStorageAIServiceTasks(req: DescribeCloudStorageAIServiceTasksRequest, cb?: (error: string, rep: DescribeCloudStorageAIServiceTasksResponse) => void): Promise<DescribeCloudStorageAIServiceTasksResponse>;
    /**
     * 搜索规则
     */
    SearchTopicRule(req: SearchTopicRuleRequest, cb?: (error: string, rep: SearchTopicRuleResponse) => void): Promise<SearchTopicRuleResponse>;
    /**
     * 拉取云存事件列表
     */
    DescribeCloudStorageEvents(req: DescribeCloudStorageEventsRequest, cb?: (error: string, rep: DescribeCloudStorageEventsResponse) => void): Promise<DescribeCloudStorageEventsResponse>;
    /**
     * 提供修改产品的数据模板的能力
     */
    ModifyModelDefinition(req: ModifyModelDefinitionRequest, cb?: (error: string, rep: ModifyModelDefinitionResponse) => void): Promise<ModifyModelDefinitionResponse>;
    /**
     * 用于获取设备绑定的用户列表
     */
    GetFamilyDeviceUserList(req: GetFamilyDeviceUserListRequest, cb?: (error: string, rep: GetFamilyDeviceUserListResponse) => void): Promise<GetFamilyDeviceUserListResponse>;
    /**
     * 查询项目详情
     */
    DescribeProject(req: DescribeProjectRequest, cb?: (error: string, rep: DescribeProjectResponse) => void): Promise<DescribeProjectResponse>;
    /**
     * 查询产品配置的数据模板信息
     */
    DescribeModelDefinition(req: DescribeModelDefinitionRequest, cb?: (error: string, rep: DescribeModelDefinitionResponse) => void): Promise<DescribeModelDefinitionResponse>;
    /**
     * 创建位置空间
     */
    CreatePositionSpace(req: CreatePositionSpaceRequest, cb?: (error: string, rep: CreatePositionSpaceResponse) => void): Promise<CreatePositionSpaceResponse>;
    /**
     * 获取设备固件信息
     */
    DescribeDeviceFirmWare(req: DescribeDeviceFirmWareRequest, cb?: (error: string, rep: DescribeDeviceFirmWareResponse) => void): Promise<DescribeDeviceFirmWareResponse>;
    /**
     * 创建围栏绑定信息
     */
    CreateFenceBind(req: CreateFenceBindRequest, cb?: (error: string, rep: CreateFenceBindResponse) => void): Promise<CreateFenceBindResponse>;
    /**
     * 获取云存套餐包消耗详细记录
     */
    DescribeCloudStoragePackageConsumeDetails(req: DescribeCloudStoragePackageConsumeDetailsRequest, cb?: (error: string, rep: DescribeCloudStoragePackageConsumeDetailsResponse) => void): Promise<DescribeCloudStoragePackageConsumeDetailsResponse>;
}
