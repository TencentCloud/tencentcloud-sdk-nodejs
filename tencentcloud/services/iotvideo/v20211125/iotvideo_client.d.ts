import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { DescribeCloudStorageDateRequest, DescribeCloudStoragePackageConsumeDetailsResponse, CreateCloudStorageRequest, DescribeDeviceDataStatsRequest, ImportModelDefinitionResponse, ApplyAIModelRequest, CreateBatchRequest, DeleteCloudStorageEventResponse, ModifyProductDynamicRegisterResponse, ModifyProductResponse, CancelAIModelApplicationResponse, DescribeCloudStorageTimeResponse, DescribeCloudStorageThumbnailListRequest, DescribeDevicePackagesRequest, ReportAliveDeviceRequest, DescribeProductsRequest, DescribeAIModelChannelResponse, DescribeMessageDataStatsResponse, DescribeDeviceActionHistoryRequest, DescribeCloudStorageMultiThumbnailResponse, ModifyDataForwardRequest, DescribeCloudStorageThumbnailRequest, DescribeDevicesResponse, CreateFreeCloudStorageResponse, ModifyProductRequest, ModifyModelDefinitionRequest, DescribeBatchsResponse, CancelAIModelApplicationRequest, DescribeUserRequest, DescribeForwardRuleResponse, CallDeviceActionSyncRequest, ModifyDeviceLogLevelRequest, DescribeBatchRequest, DescribeForwardRuleRequest, ModifyDeviceRequest, CreateCOSCredentialsResponse, RetryDeviceFirmwareTaskRequest, CreateDataForwardResponse, UploadFirmwareRequest, DescribeCloudStoragePackageConsumeStatsResponse, DescribeFirmwareRequest, DescribeCloudStorageUsersResponse, DescribeProductRequest, DescribeProductsResponse, CheckForwardAuthRequest, DescribeDeviceDataRequest, CreateBatchResponse, DescribePackageConsumeTasksResponse, DescribeDeviceActionHistoryResponse, DescribeCategoryRequest, CreateCOSCredentialsRequest, DescribeBonusesResponse, DescribeCloudStorageMultiThumbnailRequest, GenSingleDeviceSignatureOfPublicResponse, DescribeDataForwardListResponse, DeleteFirmwareResponse, CreateForwardRuleResponse, BatchUpdateFirmwareResponse, DescribeModelDefinitionResponse, DeleteProductRequest, PublishMessageResponse, SetForwardAuthResponse, EditFirmwareRequest, DescribePushChannelResponse, ReportAliveDeviceResponse, DescribeDeviceEventHistoryRequest, DescribeCategoryResponse, DescribeSDKLogRequest, DescribeBalanceRequest, DescribeDataForwardListRequest, DescribeDeviceCommLogResponse, DeleteDeviceRequest, GenerateSignedVideoURLResponse, ControlDeviceDataRequest, GetAllFirmwareVersionRequest, DescribeFirmwareTaskDevicesRequest, DescribeFirmwareResponse, DescribeDeviceStatusLogResponse, DescribeDeviceCommLogRequest, UpdateAIModelChannelRequest, WakeUpDeviceResponse, DeleteForwardRuleRequest, DescribeCloudStorageStreamDataResponse, UpdateAIModelChannelResponse, DescribeAIModelUsageResponse, DescribePackageConsumeTaskRequest, BindCloudStorageUserRequest, ModifyPushChannelResponse, CallDeviceActionSyncResponse, CreateProductResponse, DescribeDeviceDataHistoryResponse, CallTRTCDeviceRequest, CallDeviceActionAsyncRequest, DescribeAIModelsRequest, RetryDeviceFirmwareTaskResponse, GenSingleDeviceSignatureOfPublicRequest, DescribeP2PInfoResponse, ResetCloudStorageResponse, InheritCloudStorageUserResponse, DescribeDeviceEventHistoryResponse, DescribeFirmwareTaskResponse, CreateProductRequest, DescribeFirmwareTasksRequest, GetFirmwareURLResponse, DescribeUserResponse, DescribePackageConsumeTaskResponse, DescribeAIModelApplicationsRequest, DescribeCloudStorageEventsRequest, ListFirmwaresRequest, PublishMessageRequest, DescribeDeviceStatusLogRequest, DescribeSDKLogResponse, DescribeBalanceResponse, DescribeFirmwareTaskDevicesResponse, DescribeFirmwareTasksResponse, DescribeP2PInfoRequest, DescribePackageConsumeTasksRequest, DescribeAccountRequest, EditFirmwareResponse, DescribeFirmwareTaskDistributionRequest, DeleteProductResponse, ModifyForwardRuleResponse, CallDeviceActionAsyncResponse, DescribeCloudStoragePackageConsumeStatsRequest, DescribeProductDynamicRegisterRequest, ResetCloudStorageEventRequest, DescribeFirmwareTaskDistributionResponse, DescribeBatchResponse, GenerateSignedVideoURLRequest, ModifyPushChannelRequest, CreateDeviceChannelResponse, ModifyForwardRuleRequest, CreateAIDetectionResponse, DescribeCloudStorageEventsResponse, CreateDeviceChannelRequest, DescribeDevicePackagesResponse, CreateFreeCloudStorageRequest, DescribeCloudStorageDateResponse, DescribeFreeCloudStorageNumResponse, TransferCloudStorageResponse, ModifyDataForwardStatusResponse, ModifyDeviceResponse, DescribeCloudStoragePackageConsumeDetailsRequest, UploadFirmwareResponse, DescribeCloudStorageOrderRequest, DescribeDeviceRequest, CreateCloudStorageResponse, BindCloudStorageUserResponse, DescribeFreeCloudStorageNumRequest, CancelDeviceFirmwareTaskRequest, CancelDeviceFirmwareTaskResponse, DescribeBatchsRequest, WakeUpDeviceRequest, ApplyAIModelResponse, ControlDeviceDataResponse, DescribeDeviceDataHistoryRequest, CreateForwardRuleRequest, SetForwardAuthRequest, DescribeCloudStorageRequest, DescribeBalanceTransactionsResponse, ImportModelDefinitionRequest, CreateTaskFileUrlRequest, ModifyModelDefinitionResponse, DescribeCloudStorageThumbnailListResponse, CallTRTCDeviceResponse, ModifyDeviceLogLevelResponse, CreateDataForwardRequest, ResetCloudStorageEventResponse, BatchUpdateFirmwareRequest, ModifyProductDynamicRegisterRequest, DescribeDeviceDataStatsResponse, DescribeAccountResponse, DescribePushChannelRequest, DeleteCloudStorageEventRequest, DescribeMessageDataStatsRequest, GetFirmwareURLRequest, CreateAIDetectionRequest, DescribeCloudStorageResponse, ResetCloudStorageRequest, DescribeProductResponse, DescribeCloudStorageStreamDataRequest, DescribeAIModelsResponse, InheritCloudStorageUserRequest, DescribeAIModelChannelRequest, DescribeAIModelUsageRequest, DescribeBonusesRequest, DeleteFirmwareRequest, DescribeBalanceTransactionsRequest, GetAllFirmwareVersionResponse, DescribeCloudStorageThumbnailResponse, DescribeDevicesRequest, DescribeModelDefinitionRequest, DescribeProductDynamicRegisterResponse, DescribeFirmwareTaskStatisticsResponse, CheckForwardAuthResponse, DescribeDeviceResponse, DescribeDeviceDataResponse, DescribeCloudStorageOrderResponse, DeleteForwardRuleResponse, ListFirmwaresResponse, TransferCloudStorageRequest, DescribeFirmwareTaskStatisticsRequest, DeleteDeviceResponse, CreateTaskFileUrlResponse, ModifyDataForwardResponse, DescribeCloudStorageUsersRequest, ModifyDataForwardStatusRequest, DescribeFirmwareTaskRequest, DescribeCloudStorageTimeRequest, DescribeAIModelApplicationsResponse } from "./iotvideo_models";
/**
 * iotvideo client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 呼叫TRTC设备
     */
    CallTRTCDevice(req: CallTRTCDeviceRequest, cb?: (error: string, rep: CallTRTCDeviceResponse) => void): Promise<CallTRTCDeviceResponse>;
    /**
     * 根据设备信息拉取有效套餐列表
     */
    DescribeDevicePackages(req: DescribeDevicePackagesRequest, cb?: (error: string, rep: DescribeDevicePackagesResponse) => void): Promise<DescribeDevicePackagesResponse>;
    /**
     * 发起AI推理请求
     */
    CreateAIDetection(req: CreateAIDetectionRequest, cb?: (error: string, rep: CreateAIDetectionResponse) => void): Promise<CreateAIDetectionResponse>;
    /**
     * 拉取AI模型列表
     */
    DescribeAIModels(req: DescribeAIModelsRequest, cb?: (error: string, rep: DescribeAIModelsResponse) => void): Promise<DescribeAIModelsResponse>;
    /**
     * 用户AI模型申请记录
     */
    DescribeAIModelApplications(req: DescribeAIModelApplicationsRequest, cb?: (error: string, rep: DescribeAIModelApplicationsResponse) => void): Promise<DescribeAIModelApplicationsResponse>;
    /**
     * 获取产品详情
     */
    DescribeProduct(req: DescribeProductRequest, cb?: (error: string, rep: DescribeProductResponse) => void): Promise<DescribeProductResponse>;
    /**
     * 本接口（GetAllFirmwareVersion）用于获取所有的版本列表
     */
    GetAllFirmwareVersion(req: GetAllFirmwareVersionRequest, cb?: (error: string, rep: GetAllFirmwareVersionResponse) => void): Promise<GetAllFirmwareVersionResponse>;
    /**
     * 获取产品列表
     */
    DescribeProducts(req: DescribeProductsRequest, cb?: (error: string, rep: DescribeProductsResponse) => void): Promise<DescribeProductsResponse>;
    /**
     * 获取video消费版用户信息
     */
    DescribeUser(req?: DescribeUserRequest, cb?: (error: string, rep: DescribeUserResponse) => void): Promise<DescribeUserResponse>;
    /**
     * 本接口用于查询固件升级任务统计信息
     */
    DescribeFirmwareTaskStatistics(req: DescribeFirmwareTaskStatisticsRequest, cb?: (error: string, rep: DescribeFirmwareTaskStatisticsResponse) => void): Promise<DescribeFirmwareTaskStatisticsResponse>;
    /**
     * 更新设备日志级别
     */
    ModifyDeviceLogLevel(req: ModifyDeviceLogLevelRequest, cb?: (error: string, rep: ModifyDeviceLogLevelResponse) => void): Promise<ModifyDeviceLogLevelResponse>;
    /**
     * 同步调用设备行为
     */
    CallDeviceActionSync(req: CallDeviceActionSyncRequest, cb?: (error: string, rep: CallDeviceActionSyncResponse) => void): Promise<CallDeviceActionSyncResponse>;
    /**
     * 更新推送通道
     */
    ModifyPushChannel(req: ModifyPushChannelRequest, cb?: (error: string, rep: ModifyPushChannelResponse) => void): Promise<ModifyPushChannelResponse>;
    /**
     * 获取视频防盗链播放URL
     */
    GenerateSignedVideoURL(req: GenerateSignedVideoURLRequest, cb?: (error: string, rep: GenerateSignedVideoURLResponse) => void): Promise<GenerateSignedVideoURLResponse>;
    /**
     * 本接口用于编辑固件信息
     */
    EditFirmware(req: EditFirmwareRequest, cb?: (error: string, rep: EditFirmwareResponse) => void): Promise<EditFirmwareResponse>;
    /**
     * 本接口（PublishMessage）用于使用自定义透传协议进行设备远控
     */
    PublishMessage(req: PublishMessageRequest, cb?: (error: string, rep: PublishMessageResponse) => void): Promise<PublishMessageResponse>;
    /**
     * 获取设备的历史事件
     */
    DescribeDeviceEventHistory(req: DescribeDeviceEventHistoryRequest, cb?: (error: string, rep: DescribeDeviceEventHistoryResponse) => void): Promise<DescribeDeviceEventHistoryResponse>;
    /**
     * 导入其它产品的数据模板，覆盖现有数据模板的物模型和产品分类信息
     */
    ImportModelDefinition(req: ImportModelDefinitionRequest, cb?: (error: string, rep: ImportModelDefinitionResponse) => void): Promise<ImportModelDefinitionResponse>;
    /**
     * 批量拉取云存事件缩略图
     */
    DescribeCloudStorageThumbnailList(req: DescribeCloudStorageThumbnailListRequest, cb?: (error: string, rep: DescribeCloudStorageThumbnailListResponse) => void): Promise<DescribeCloudStorageThumbnailListResponse>;
    /**
     * 本接口用于取消设备升级任务
     */
    CancelDeviceFirmwareTask(req: CancelDeviceFirmwareTaskRequest, cb?: (error: string, rep: CancelDeviceFirmwareTaskResponse) => void): Promise<CancelDeviceFirmwareTaskResponse>;
    /**
     * 上报活跃设备
     */
    ReportAliveDevice(req: ReportAliveDeviceRequest, cb?: (error: string, rep: ReportAliveDeviceResponse) => void): Promise<ReportAliveDeviceResponse>;
    /**
     * 获取产品转发规则
     */
    DescribeForwardRule(req: DescribeForwardRuleRequest, cb?: (error: string, rep: DescribeForwardRuleResponse) => void): Promise<DescribeForwardRuleResponse>;
    /**
     * 查询套餐消耗记录列表
     */
    DescribePackageConsumeTasks(req: DescribePackageConsumeTasksRequest, cb?: (error: string, rep: DescribePackageConsumeTasksResponse) => void): Promise<DescribePackageConsumeTasksResponse>;
    /**
     * 获取消费版账号信息
     */
    DescribeAccount(req: DescribeAccountRequest, cb?: (error: string, rep: DescribeAccountResponse) => void): Promise<DescribeAccountResponse>;
    /**
     * 获取云存套餐包消耗统计
     */
    DescribeCloudStoragePackageConsumeStats(req: DescribeCloudStoragePackageConsumeStatsRequest, cb?: (error: string, rep: DescribeCloudStoragePackageConsumeStatsResponse) => void): Promise<DescribeCloudStoragePackageConsumeStatsResponse>;
    /**
     * 本接口用于查询固件升级任务列表
     */
    DescribeFirmwareTasks(req: DescribeFirmwareTasksRequest, cb?: (error: string, rep: DescribeFirmwareTasksResponse) => void): Promise<DescribeFirmwareTasksResponse>;
    /**
     * 根据设备产品ID、设备名称，设置控制设备的属性数据。
     */
    ControlDeviceData(req: ControlDeviceDataRequest, cb?: (error: string, rep: ControlDeviceDataResponse) => void): Promise<ControlDeviceDataResponse>;
    /**
     * 获取设备在指定时间范围内的通讯日志
     */
    DescribeDeviceCommLog(req: DescribeDeviceCommLogRequest, cb?: (error: string, rep: DescribeDeviceCommLogResponse) => void): Promise<DescribeDeviceCommLogResponse>;
    /**
     * 本接口（DescribeFirmware）用于查询固件信息
     */
    DescribeFirmware(req: DescribeFirmwareRequest, cb?: (error: string, rep: DescribeFirmwareResponse) => void): Promise<DescribeFirmwareResponse>;
    /**
     * 获取具有云存的日期
     */
    DescribeCloudStorageDate(req: DescribeCloudStorageDateRequest, cb?: (error: string, rep: DescribeCloudStorageDateResponse) => void): Promise<DescribeCloudStorageDateResponse>;
    /**
     * 查询云存卡套餐信息
     */
    DescribeFreeCloudStorageNum(req?: DescribeFreeCloudStorageNumRequest, cb?: (error: string, rep: DescribeFreeCloudStorageNumResponse) => void): Promise<DescribeFreeCloudStorageNumResponse>;
    /**
     * 设置转发权限
     */
    SetForwardAuth(req: SetForwardAuthRequest, cb?: (error: string, rep: SetForwardAuthResponse) => void): Promise<SetForwardAuthResponse>;
    /**
     * 拉取云存用户列表
     */
    DescribeCloudStorageUsers(req: DescribeCloudStorageUsersRequest, cb?: (error: string, rep: DescribeCloudStorageUsersResponse) => void): Promise<DescribeCloudStorageUsersResponse>;
    /**
     * 转移云存服务
     */
    TransferCloudStorage(req: TransferCloudStorageRequest, cb?: (error: string, rep: TransferCloudStorageResponse) => void): Promise<TransferCloudStorageResponse>;
    /**
     * 本接口用于重试设备升级任务
     */
    RetryDeviceFirmwareTask(req: RetryDeviceFirmwareTaskRequest, cb?: (error: string, rep: RetryDeviceFirmwareTaskResponse) => void): Promise<RetryDeviceFirmwareTaskResponse>;
    /**
     * 修改设备信息
     */
    ModifyDevice(req: ModifyDeviceRequest, cb?: (error: string, rep: ModifyDeviceResponse) => void): Promise<ModifyDeviceResponse>;
    /**
     * 修改数据转发
     */
    ModifyDataForward(req: ModifyDataForwardRequest, cb?: (error: string, rep: ModifyDataForwardResponse) => void): Promise<ModifyDataForwardResponse>;
    /**
     * 本接口（BatchUpdateFirmware）用于批量更新设备固件
     */
    BatchUpdateFirmware(req: BatchUpdateFirmwareRequest, cb?: (error: string, rep: BatchUpdateFirmwareResponse) => void): Promise<BatchUpdateFirmwareResponse>;
    /**
     * 创建产品
     */
    CreateProduct(req: CreateProductRequest, cb?: (error: string, rep: CreateProductResponse) => void): Promise<CreateProductResponse>;
    /**
     * 继承云存用户
     */
    InheritCloudStorageUser(req: InheritCloudStorageUserRequest, cb?: (error: string, rep: InheritCloudStorageUserResponse) => void): Promise<InheritCloudStorageUserResponse>;
    /**
     * 本接口（GetFirmwareURL）用于获取固件存储的URL
     */
    GetFirmwareURL(req: GetFirmwareURLRequest, cb?: (error: string, rep: GetFirmwareURLResponse) => void): Promise<GetFirmwareURLResponse>;
    /**
     * 获取批次详情
     */
    DescribeBatch(req: DescribeBatchRequest, cb?: (error: string, rep: DescribeBatchResponse) => void): Promise<DescribeBatchResponse>;
    /**
     * 本接口（ListFirmwares）用于获取固件列表
     */
    ListFirmwares(req: ListFirmwaresRequest, cb?: (error: string, rep: ListFirmwaresResponse) => void): Promise<ListFirmwaresResponse>;
    /**
     * 获取Category详情
     */
    DescribeCategory(req: DescribeCategoryRequest, cb?: (error: string, rep: DescribeCategoryResponse) => void): Promise<DescribeCategoryResponse>;
    /**
     * 删除产品
     */
    DeleteProduct(req: DeleteProductRequest, cb?: (error: string, rep: DeleteProductResponse) => void): Promise<DeleteProductResponse>;
    /**
     * 设置数据转发状态
     */
    ModifyDataForwardStatus(req: ModifyDataForwardStatusRequest, cb?: (error: string, rep: ModifyDataForwardStatusResponse) => void): Promise<ModifyDataForwardStatusResponse>;
    /**
     * 此接口查询固件升级任务详情
     */
    DescribeFirmwareTask(req: DescribeFirmwareTaskRequest, cb?: (error: string, rep: DescribeFirmwareTaskResponse) => void): Promise<DescribeFirmwareTaskResponse>;
    /**
     * 重置云存服务
     */
    ResetCloudStorage(req: ResetCloudStorageRequest, cb?: (error: string, rep: ResetCloudStorageResponse) => void): Promise<ResetCloudStorageResponse>;
    /**
     * 本接口用于查询固件升级任务的设备列表
     */
    DescribeFirmwareTaskDevices(req: DescribeFirmwareTaskDevicesRequest, cb?: (error: string, rep: DescribeFirmwareTaskDevicesResponse) => void): Promise<DescribeFirmwareTaskDevicesResponse>;
    /**
     * 获取数据转发列表
     */
    DescribeDataForwardList(req: DescribeDataForwardListRequest, cb?: (error: string, rep: DescribeDataForwardListResponse) => void): Promise<DescribeDataForwardListResponse>;
    /**
     * 获取某一天云存时间轴
     */
    DescribeCloudStorageTime(req: DescribeCloudStorageTimeRequest, cb?: (error: string, rep: DescribeCloudStorageTimeResponse) => void): Promise<DescribeCloudStorageTimeResponse>;
    /**
     * 更新AI推理结果推送配置
     */
    UpdateAIModelChannel(req: UpdateAIModelChannelRequest, cb?: (error: string, rep: UpdateAIModelChannelResponse) => void): Promise<UpdateAIModelChannelResponse>;
    /**
     * 拉取云存事件缩略图
     */
    DescribeCloudStorageThumbnail(req: DescribeCloudStorageThumbnailRequest, cb?: (error: string, rep: DescribeCloudStorageThumbnailResponse) => void): Promise<DescribeCloudStorageThumbnailResponse>;
    /**
     * 拉取多个云存事件缩略图
     */
    DescribeCloudStorageMultiThumbnail(req: DescribeCloudStorageMultiThumbnailRequest, cb?: (error: string, rep: DescribeCloudStorageMultiThumbnailResponse) => void): Promise<DescribeCloudStorageMultiThumbnailResponse>;
    /**
     * 本接口（DeleteFirmware）用于删除固件
     */
    DeleteFirmware(req: DeleteFirmwareRequest, cb?: (error: string, rep: DeleteFirmwareResponse) => void): Promise<DeleteFirmwareResponse>;
    /**
     * 异步调用设备行为
     */
    CallDeviceActionAsync(req: CallDeviceActionAsyncRequest, cb?: (error: string, rep: CallDeviceActionAsyncResponse) => void): Promise<CallDeviceActionAsyncResponse>;
    /**
     * 判断是否开启转发的权限
     */
    CheckForwardAuth(req: CheckForwardAuthRequest, cb?: (error: string, rep: CheckForwardAuthResponse) => void): Promise<CheckForwardAuthResponse>;
    /**
     * 获取设备属性数据
     */
    DescribeDeviceData(req: DescribeDeviceDataRequest, cb?: (error: string, rep: DescribeDeviceDataResponse) => void): Promise<DescribeDeviceDataResponse>;
    /**
     * 修改产品信息
     */
    ModifyProduct(req: ModifyProductRequest, cb?: (error: string, rep: ModifyProductResponse) => void): Promise<ModifyProductResponse>;
    /**
     * 查看AI模型资源包
     */
    DescribeAIModelUsage(req: DescribeAIModelUsageRequest, cb?: (error: string, rep: DescribeAIModelUsageResponse) => void): Promise<DescribeAIModelUsageResponse>;
    /**
     * 修改转发规则
     */
    ModifyForwardRule(req: ModifyForwardRuleRequest, cb?: (error: string, rep: ModifyForwardRuleResponse) => void): Promise<ModifyForwardRuleResponse>;
    /**
     * 取消AI模型申请
     */
    CancelAIModelApplication(req: CancelAIModelApplicationRequest, cb?: (error: string, rep: CancelAIModelApplicationResponse) => void): Promise<CancelAIModelApplicationResponse>;
    /**
     * 获取设备云存服务详情
     */
    DescribeCloudStorage(req: DescribeCloudStorageRequest, cb?: (error: string, rep: DescribeCloudStorageResponse) => void): Promise<DescribeCloudStorageResponse>;
    /**
     * 获取批次列表
     */
    DescribeBatchs(req: DescribeBatchsRequest, cb?: (error: string, rep: DescribeBatchsResponse) => void): Promise<DescribeBatchsResponse>;
    /**
     * 为用户提供获取动作历史的能力。
     */
    DescribeDeviceActionHistory(req: DescribeDeviceActionHistoryRequest, cb?: (error: string, rep: DescribeDeviceActionHistoryResponse) => void): Promise<DescribeDeviceActionHistoryResponse>;
    /**
     * 创建COS上传密钥
     */
    CreateCOSCredentials(req: CreateCOSCredentialsRequest, cb?: (error: string, rep: CreateCOSCredentialsResponse) => void): Promise<CreateCOSCredentialsResponse>;
    /**
     * 开通免费云存服务
     */
    CreateFreeCloudStorage(req: CreateFreeCloudStorageRequest, cb?: (error: string, rep: CreateFreeCloudStorageResponse) => void): Promise<CreateFreeCloudStorageResponse>;
    /**
     * 创建批次
     */
    CreateBatch(req: CreateBatchRequest, cb?: (error: string, rep: CreateBatchResponse) => void): Promise<CreateBatchResponse>;
    /**
     * 查看推送通道
     */
    DescribePushChannel(req: DescribePushChannelRequest, cb?: (error: string, rep: DescribePushChannelResponse) => void): Promise<DescribePushChannelResponse>;
    /**
     * 开通云存服务
     */
    CreateCloudStorage(req: CreateCloudStorageRequest, cb?: (error: string, rep: CreateCloudStorageResponse) => void): Promise<CreateCloudStorageResponse>;
    /**
     * 获取产品动态注册详情
     */
    DescribeProductDynamicRegister(req: DescribeProductDynamicRegisterRequest, cb?: (error: string, rep: DescribeProductDynamicRegisterResponse) => void): Promise<DescribeProductDynamicRegisterResponse>;
    /**
     * 查询设备数据统计
     */
    DescribeDeviceDataStats(req: DescribeDeviceDataStatsRequest, cb?: (error: string, rep: DescribeDeviceDataStatsResponse) => void): Promise<DescribeDeviceDataStatsResponse>;
    /**
     * 设备唤醒
     */
    WakeUpDevice(req: WakeUpDeviceRequest, cb?: (error: string, rep: WakeUpDeviceResponse) => void): Promise<WakeUpDeviceResponse>;
    /**
     * 获取设备上下线日志
     */
    DescribeDeviceStatusLog(req: DescribeDeviceStatusLogRequest, cb?: (error: string, rep: DescribeDeviceStatusLogResponse) => void): Promise<DescribeDeviceStatusLogResponse>;
    /**
     * 创建转发规则
     */
    CreateForwardRule(req: CreateForwardRuleRequest, cb?: (error: string, rep: CreateForwardRuleResponse) => void): Promise<CreateForwardRuleResponse>;
    /**
     * 查看AI推理结果推送配置
     */
    DescribeAIModelChannel(req: DescribeAIModelChannelRequest, cb?: (error: string, rep: DescribeAIModelChannelResponse) => void): Promise<DescribeAIModelChannelResponse>;
    /**
     * 查询账户余额
     */
    DescribeBalance(req: DescribeBalanceRequest, cb?: (error: string, rep: DescribeBalanceResponse) => void): Promise<DescribeBalanceResponse>;
    /**
     * 获取设备sdk日志
     */
    DescribeSDKLog(req: DescribeSDKLogRequest, cb?: (error: string, rep: DescribeSDKLogResponse) => void): Promise<DescribeSDKLogResponse>;
    /**
     * 绑定云存用户
     */
    BindCloudStorageUser(req: BindCloudStorageUserRequest, cb?: (error: string, rep: BindCloudStorageUserResponse) => void): Promise<BindCloudStorageUserResponse>;
    /**
     * 查看设备详情
     */
    DescribeDevice(req: DescribeDeviceRequest, cb?: (error: string, rep: DescribeDeviceResponse) => void): Promise<DescribeDeviceResponse>;
    /**
     * 查询设备消息数量统计
     */
    DescribeMessageDataStats(req: DescribeMessageDataStatsRequest, cb?: (error: string, rep: DescribeMessageDataStatsResponse) => void): Promise<DescribeMessageDataStatsResponse>;
    /**
     * 删除云存事件
     */
    DeleteCloudStorageEvent(req: DeleteCloudStorageEventRequest, cb?: (error: string, rep: DeleteCloudStorageEventResponse) => void): Promise<DeleteCloudStorageEventResponse>;
    /**
     * 创建设备通道
     */
    CreateDeviceChannel(req: CreateDeviceChannelRequest, cb?: (error: string, rep: CreateDeviceChannelResponse) => void): Promise<CreateDeviceChannelResponse>;
    /**
     * 拉取设备p2p信息
     */
    DescribeP2PInfo(req: DescribeP2PInfoRequest, cb?: (error: string, rep: DescribeP2PInfoResponse) => void): Promise<DescribeP2PInfoResponse>;
    /**
     * 查询云存服务详情
     */
    DescribeCloudStorageOrder(req: DescribeCloudStorageOrderRequest, cb?: (error: string, rep: DescribeCloudStorageOrderResponse) => void): Promise<DescribeCloudStorageOrderResponse>;
    /**
     * 拉取账户流水
     */
    DescribeBalanceTransactions(req: DescribeBalanceTransactionsRequest, cb?: (error: string, rep: DescribeBalanceTransactionsResponse) => void): Promise<DescribeBalanceTransactionsResponse>;
    /**
     * 删除转发规则
     */
    DeleteForwardRule(req: DeleteForwardRuleRequest, cb?: (error: string, rep: DeleteForwardRuleResponse) => void): Promise<DeleteForwardRuleResponse>;
    /**
     * 修改产品动态注册
     */
    ModifyProductDynamicRegister(req: ModifyProductDynamicRegisterRequest, cb?: (error: string, rep: ModifyProductDynamicRegisterResponse) => void): Promise<ModifyProductDynamicRegisterResponse>;
    /**
     * 获取设备在指定时间范围内上报的历史数据。
     */
    DescribeDeviceDataHistory(req: DescribeDeviceDataHistoryRequest, cb?: (error: string, rep: DescribeDeviceDataHistoryResponse) => void): Promise<DescribeDeviceDataHistoryResponse>;
    /**
     * 删除设备
     */
    DeleteDevice(req: DeleteDeviceRequest, cb?: (error: string, rep: DeleteDeviceResponse) => void): Promise<DeleteDeviceResponse>;
    /**
     * 查询套餐消耗记录详情
     */
    DescribePackageConsumeTask(req: DescribePackageConsumeTaskRequest, cb?: (error: string, rep: DescribePackageConsumeTaskResponse) => void): Promise<DescribePackageConsumeTaskResponse>;
    /**
     * 重置云存事件
     */
    ResetCloudStorageEvent(req: ResetCloudStorageEventRequest, cb?: (error: string, rep: ResetCloudStorageEventResponse) => void): Promise<ResetCloudStorageEventResponse>;
    /**
     * 本接口用于查询固件升级任务状态分布
     */
    DescribeFirmwareTaskDistribution(req: DescribeFirmwareTaskDistributionRequest, cb?: (error: string, rep: DescribeFirmwareTaskDistributionResponse) => void): Promise<DescribeFirmwareTaskDistributionResponse>;
    /**
     * 获取设备的绑定签名
     */
    GenSingleDeviceSignatureOfPublic(req: GenSingleDeviceSignatureOfPublicRequest, cb?: (error: string, rep: GenSingleDeviceSignatureOfPublicResponse) => void): Promise<GenSingleDeviceSignatureOfPublicResponse>;
    /**
     * 本接口（CreateTaskFileUrl）用于获取产品级任务文件上传链接
     */
    CreateTaskFileUrl(req: CreateTaskFileUrlRequest, cb?: (error: string, rep: CreateTaskFileUrlResponse) => void): Promise<CreateTaskFileUrlResponse>;
    /**
     * 获取设备图片流数据
     */
    DescribeCloudStorageStreamData(req: DescribeCloudStorageStreamDataRequest, cb?: (error: string, rep: DescribeCloudStorageStreamDataResponse) => void): Promise<DescribeCloudStorageStreamDataResponse>;
    /**
     * 本接口（UploadFirmware）用于上传设备固件信息
     */
    UploadFirmware(req: UploadFirmwareRequest, cb?: (error: string, rep: UploadFirmwareResponse) => void): Promise<UploadFirmwareResponse>;
    /**
     * 创建数据转发
     */
    CreateDataForward(req: CreateDataForwardRequest, cb?: (error: string, rep: CreateDataForwardResponse) => void): Promise<CreateDataForwardResponse>;
    /**
     * 查看运营活动资源包列表
     */
    DescribeBonuses(req: DescribeBonusesRequest, cb?: (error: string, rep: DescribeBonusesResponse) => void): Promise<DescribeBonusesResponse>;
    /**
     * 拉取云存事件列表
     */
    DescribeCloudStorageEvents(req: DescribeCloudStorageEventsRequest, cb?: (error: string, rep: DescribeCloudStorageEventsResponse) => void): Promise<DescribeCloudStorageEventsResponse>;
    /**
     * 提供修改产品的数据模板的能力
     */
    ModifyModelDefinition(req: ModifyModelDefinitionRequest, cb?: (error: string, rep: ModifyModelDefinitionResponse) => void): Promise<ModifyModelDefinitionResponse>;
    /**
     * 申请AI模型
     */
    ApplyAIModel(req: ApplyAIModelRequest, cb?: (error: string, rep: ApplyAIModelResponse) => void): Promise<ApplyAIModelResponse>;
    /**
     * 查询产品配置的数据模板信息
     */
    DescribeModelDefinition(req: DescribeModelDefinitionRequest, cb?: (error: string, rep: DescribeModelDefinitionResponse) => void): Promise<DescribeModelDefinitionResponse>;
    /**
     * 获取设备列表
     */
    DescribeDevices(req: DescribeDevicesRequest, cb?: (error: string, rep: DescribeDevicesResponse) => void): Promise<DescribeDevicesResponse>;
    /**
     * 获取云存套餐包消耗详细记录
     */
    DescribeCloudStoragePackageConsumeDetails(req: DescribeCloudStoragePackageConsumeDetailsRequest, cb?: (error: string, rep: DescribeCloudStoragePackageConsumeDetailsResponse) => void): Promise<DescribeCloudStoragePackageConsumeDetailsResponse>;
}
