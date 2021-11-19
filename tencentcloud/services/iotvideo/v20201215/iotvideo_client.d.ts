import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { DescribeCloudStorageDateRequest, RetryDeviceFirmwareTaskRequest, CreateCloudStorageRequest, ImportModelDefinitionResponse, ApplyAIModelRequest, CreateBatchRequest, ModifyProductDynamicRegisterResponse, CancelAIModelApplicationResponse, DescribeCloudStorageTimeResponse, DescribeDeviceStatusLogResponse, ReportAliveDeviceRequest, DescribeProductsRequest, DescribeAIModelChannelResponse, DescribeDeviceActionHistoryRequest, ModifyDataForwardRequest, DescribeDevicesResponse, ModifyProductResponse, ModifyProductRequest, ModifyModelDefinitionRequest, DescribeBatchsResponse, CancelAIModelApplicationRequest, TransferCloudStorageResponse, DescribeForwardRuleResponse, ModifyDeviceLogLevelRequest, DescribeBatchRequest, DescribeForwardRuleRequest, ModifyDeviceRequest, CreateCOSCredentialsResponse, CreateDataForwardResponse, DescribeFirmwareRequest, DescribeCloudStorageUsersResponse, DescribeProductRequest, DescribeProductsResponse, CheckForwardAuthRequest, DescribeDeviceDataRequest, CreateBatchResponse, DescribeDeviceActionHistoryResponse, GetAllFirmwareVersionRequest, CreateCOSCredentialsRequest, DescribeDataForwardListResponse, DeleteFirmwareResponse, CreateForwardRuleResponse, BatchUpdateFirmwareResponse, DescribeModelDefinitionResponse, DeleteProductRequest, PublishMessageResponse, SetForwardAuthResponse, EditFirmwareRequest, ReportAliveDeviceResponse, DescribeDeviceEventHistoryRequest, DescribeCategoryResponse, DescribeSDKLogRequest, DescribeBalanceRequest, ImportModelDefinitionRequest, DescribeDataForwardListRequest, DescribeDeviceCommLogResponse, DeleteDeviceRequest, GenerateSignedVideoURLResponse, ControlDeviceDataRequest, DescribeFirmwareTaskDevicesRequest, DescribeFirmwareResponse, DescribeDeviceCommLogRequest, WakeUpDeviceResponse, DeleteForwardRuleRequest, UpdateAIModelChannelResponse, DescribeAIModelUsageResponse, DescribeBalanceTransactionsRequest, BindCloudStorageUserRequest, CreateProductResponse, DescribeFirmwareTaskDevicesResponse, ModifyDataForwardResponse, DescribeCloudStorageThumbnailResponse, DescribeAIModelsRequest, RetryDeviceFirmwareTaskResponse, GenerateSignedVideoURLRequest, ResetCloudStorageResponse, InheritCloudStorageUserResponse, DescribeDeviceEventHistoryResponse, DescribeFirmwareTaskResponse, CreateProductRequest, DescribeFirmwareTasksRequest, GetFirmwareURLResponse, DescribeAIModelApplicationsRequest, DescribeCloudStorageEventsRequest, ListFirmwaresRequest, PublishMessageRequest, DescribeDeviceStatusLogRequest, DescribeSDKLogResponse, DescribeBalanceResponse, UploadFirmwareRequest, DescribeFirmwareTasksResponse, EditFirmwareResponse, DescribeFirmwareTaskDistributionRequest, DeleteProductResponse, ModifyForwardRuleResponse, DescribeProductDynamicRegisterRequest, DescribeFirmwareTaskDistributionResponse, DescribeBatchResponse, DescribeDeviceRequest, ModifyForwardRuleRequest, CreateAIDetectionResponse, DescribeCloudStorageEventsResponse, DescribeCloudStorageDateResponse, ModifyDataForwardStatusResponse, UploadFirmwareResponse, UpdateAIModelChannelRequest, CreateCloudStorageResponse, BindCloudStorageUserResponse, CancelDeviceFirmwareTaskRequest, CancelDeviceFirmwareTaskResponse, DeleteDeviceResponse, WakeUpDeviceRequest, ApplyAIModelResponse, ControlDeviceDataResponse, DescribeDeviceDataHistoryRequest, CreateForwardRuleRequest, SetForwardAuthRequest, DescribeBalanceTransactionsResponse, ModifyDeviceResponse, CreateTaskFileUrlRequest, ModifyDeviceLogLevelResponse, CreateDataForwardRequest, BatchUpdateFirmwareRequest, ModifyProductDynamicRegisterRequest, DescribeCloudStorageThumbnailRequest, GetFirmwareURLRequest, CreateAIDetectionRequest, DescribeCloudStorageResponse, ResetCloudStorageRequest, DescribeProductResponse, DescribeAIModelsResponse, InheritCloudStorageUserRequest, DescribeAIModelChannelRequest, DescribeAIModelUsageRequest, DescribeCategoryRequest, DeleteFirmwareRequest, DescribeCloudStorageRequest, GetAllFirmwareVersionResponse, DescribeDeviceDataHistoryResponse, DescribeDevicesRequest, DescribeModelDefinitionRequest, DescribeProductDynamicRegisterResponse, DescribeFirmwareTaskStatisticsResponse, CheckForwardAuthResponse, DescribeDeviceResponse, DescribeDeviceDataResponse, DeleteForwardRuleResponse, ListFirmwaresResponse, TransferCloudStorageRequest, DescribeFirmwareTaskStatisticsRequest, DescribeBatchsRequest, CreateTaskFileUrlResponse, ModifyModelDefinitionResponse, DescribeCloudStorageTimeRequest, ModifyDataForwardStatusRequest, DescribeFirmwareTaskRequest, DescribeCloudStorageUsersRequest, DescribeAIModelApplicationsResponse } from "./iotvideo_models";
/**
 * iotvideo client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 获取产品列表
     */
    DescribeProducts(req: DescribeProductsRequest, cb?: (error: string, rep: DescribeProductsResponse) => void): Promise<DescribeProductsResponse>;
    /**
     * 获取设备在指定时间范围内的通讯日志
     */
    DescribeDeviceCommLog(req: DescribeDeviceCommLogRequest, cb?: (error: string, rep: DescribeDeviceCommLogResponse) => void): Promise<DescribeDeviceCommLogResponse>;
    /**
     * 判断是否开启的转发的权限
     */
    CheckForwardAuth(req: CheckForwardAuthRequest, cb?: (error: string, rep: CheckForwardAuthResponse) => void): Promise<CheckForwardAuthResponse>;
    /**
     * 获取设备属性数据
     */
    DescribeDeviceData(req: DescribeDeviceDataRequest, cb?: (error: string, rep: DescribeDeviceDataResponse) => void): Promise<DescribeDeviceDataResponse>;
    /**
     * 获取设备sdk日志
     */
    DescribeSDKLog(req: DescribeSDKLogRequest, cb?: (error: string, rep: DescribeSDKLogResponse) => void): Promise<DescribeSDKLogResponse>;
    /**
     * 修改产品信息
     */
    ModifyProduct(req: ModifyProductRequest, cb?: (error: string, rep: ModifyProductResponse) => void): Promise<ModifyProductResponse>;
    /**
     * 转移云存服务
     */
    TransferCloudStorage(req: TransferCloudStorageRequest, cb?: (error: string, rep: TransferCloudStorageResponse) => void): Promise<TransferCloudStorageResponse>;
    /**
     * 更新设备日志级别
     */
    ModifyDeviceLogLevel(req: ModifyDeviceLogLevelRequest, cb?: (error: string, rep: ModifyDeviceLogLevelResponse) => void): Promise<ModifyDeviceLogLevelResponse>;
    /**
     * 发起AI推理请求
     */
    CreateAIDetection(req: CreateAIDetectionRequest, cb?: (error: string, rep: CreateAIDetectionResponse) => void): Promise<CreateAIDetectionResponse>;
    /**
     * 本接口（DescribeFirmware）用于查询固件信息
     */
    DescribeFirmware(req: DescribeFirmwareRequest, cb?: (error: string, rep: DescribeFirmwareResponse) => void): Promise<DescribeFirmwareResponse>;
    /**
     * 获取具有云存的日期
     */
    DescribeCloudStorageDate(req: DescribeCloudStorageDateRequest, cb?: (error: string, rep: DescribeCloudStorageDateResponse) => void): Promise<DescribeCloudStorageDateResponse>;
    /**
     * 本接口用于重试设备升级任务
     */
    RetryDeviceFirmwareTask(req: RetryDeviceFirmwareTaskRequest, cb?: (error: string, rep: RetryDeviceFirmwareTaskResponse) => void): Promise<RetryDeviceFirmwareTaskResponse>;
    /**
     * 拉取AI模型列表
     */
    DescribeAIModels(req: DescribeAIModelsRequest, cb?: (error: string, rep: DescribeAIModelsResponse) => void): Promise<DescribeAIModelsResponse>;
    /**
     * 本接口（UploadFirmware）用于上传设备固件信息
     */
    UploadFirmware(req: UploadFirmwareRequest, cb?: (error: string, rep: UploadFirmwareResponse) => void): Promise<UploadFirmwareResponse>;
    /**
     * 用户AI模型申请记录
     */
    DescribeAIModelApplications(req: DescribeAIModelApplicationsRequest, cb?: (error: string, rep: DescribeAIModelApplicationsResponse) => void): Promise<DescribeAIModelApplicationsResponse>;
    /**
     * 获取产品详情
     */
    DescribeProduct(req: DescribeProductRequest, cb?: (error: string, rep: DescribeProductResponse) => void): Promise<DescribeProductResponse>;
    /**
     * 查看AI模型资源包
     */
    DescribeAIModelUsage(req: DescribeAIModelUsageRequest, cb?: (error: string, rep: DescribeAIModelUsageResponse) => void): Promise<DescribeAIModelUsageResponse>;
    /**
     * 获取批次详情
     */
    DescribeBatch(req: DescribeBatchRequest, cb?: (error: string, rep: DescribeBatchResponse) => void): Promise<DescribeBatchResponse>;
    /**
     * 修改设备信息
     */
    ModifyDevice(req: ModifyDeviceRequest, cb?: (error: string, rep: ModifyDeviceResponse) => void): Promise<ModifyDeviceResponse>;
    /**
     * 拉取云存用户列表
     */
    DescribeCloudStorageUsers(req: DescribeCloudStorageUsersRequest, cb?: (error: string, rep: DescribeCloudStorageUsersResponse) => void): Promise<DescribeCloudStorageUsersResponse>;
    /**
     * 取消AI模型申请
     */
    CancelAIModelApplication(req: CancelAIModelApplicationRequest, cb?: (error: string, rep: CancelAIModelApplicationResponse) => void): Promise<CancelAIModelApplicationResponse>;
    /**
     * 修改数据转发
     */
    ModifyDataForward(req: ModifyDataForwardRequest, cb?: (error: string, rep: ModifyDataForwardResponse) => void): Promise<ModifyDataForwardResponse>;
    /**
     * 获取设备云存服务详情
     */
    DescribeCloudStorage(req: DescribeCloudStorageRequest, cb?: (error: string, rep: DescribeCloudStorageResponse) => void): Promise<DescribeCloudStorageResponse>;
    /**
     * 获取批次列表
     */
    DescribeBatchs(req: DescribeBatchsRequest, cb?: (error: string, rep: DescribeBatchsResponse) => void): Promise<DescribeBatchsResponse>;
    /**
     * 本接口（BatchUpdateFirmware）用于批量更新设备固件
     */
    BatchUpdateFirmware(req: BatchUpdateFirmwareRequest, cb?: (error: string, rep: BatchUpdateFirmwareResponse) => void): Promise<BatchUpdateFirmwareResponse>;
    /**
     * 创建产品
     */
    CreateProduct(req: CreateProductRequest, cb?: (error: string, rep: CreateProductResponse) => void): Promise<CreateProductResponse>;
    /**
     * 为用户提供获取动作历史的能力。
     */
    DescribeDeviceActionHistory(req: DescribeDeviceActionHistoryRequest, cb?: (error: string, rep: DescribeDeviceActionHistoryResponse) => void): Promise<DescribeDeviceActionHistoryResponse>;
    /**
     * 更新AI推理结果推送配置
     */
    UpdateAIModelChannel(req: UpdateAIModelChannelRequest, cb?: (error: string, rep: UpdateAIModelChannelResponse) => void): Promise<UpdateAIModelChannelResponse>;
    /**
     * 创建COS上传密钥
     */
    CreateCOSCredentials(req: CreateCOSCredentialsRequest, cb?: (error: string, rep: CreateCOSCredentialsResponse) => void): Promise<CreateCOSCredentialsResponse>;
    /**
     * 查询产品配置的数据模板信息
     */
    DescribeModelDefinition(req: DescribeModelDefinitionRequest, cb?: (error: string, rep: DescribeModelDefinitionResponse) => void): Promise<DescribeModelDefinitionResponse>;
    /**
     * 删除转发规则
     */
    DeleteForwardRule(req: DeleteForwardRuleRequest, cb?: (error: string, rep: DeleteForwardRuleResponse) => void): Promise<DeleteForwardRuleResponse>;
    /**
     * 继承云存用户
     */
    InheritCloudStorageUser(req: InheritCloudStorageUserRequest, cb?: (error: string, rep: InheritCloudStorageUserResponse) => void): Promise<InheritCloudStorageUserResponse>;
    /**
     * 创建批次
     */
    CreateBatch(req: CreateBatchRequest, cb?: (error: string, rep: CreateBatchResponse) => void): Promise<CreateBatchResponse>;
    /**
     * 本接口用于查询固件升级任务统计信息
     */
    DescribeFirmwareTaskStatistics(req: DescribeFirmwareTaskStatisticsRequest, cb?: (error: string, rep: DescribeFirmwareTaskStatisticsResponse) => void): Promise<DescribeFirmwareTaskStatisticsResponse>;
    /**
     * 修改产品动态注册
     */
    ModifyProductDynamicRegister(req: ModifyProductDynamicRegisterRequest, cb?: (error: string, rep: ModifyProductDynamicRegisterResponse) => void): Promise<ModifyProductDynamicRegisterResponse>;
    /**
     * 获取设备在指定时间范围内上报的历史数据。
     */
    DescribeDeviceDataHistory(req: DescribeDeviceDataHistoryRequest, cb?: (error: string, rep: DescribeDeviceDataHistoryResponse) => void): Promise<DescribeDeviceDataHistoryResponse>;
    /**
     * 本接口用于查询固件升级任务列表
     */
    DescribeFirmwareTasks(req: DescribeFirmwareTasksRequest, cb?: (error: string, rep: DescribeFirmwareTasksResponse) => void): Promise<DescribeFirmwareTasksResponse>;
    /**
     * 本接口（GetFirmwareURL）用于获取固件存储的URL
     */
    GetFirmwareURL(req: GetFirmwareURLRequest, cb?: (error: string, rep: GetFirmwareURLResponse) => void): Promise<GetFirmwareURLResponse>;
    /**
     * 修改转发规则
     */
    ModifyForwardRule(req: ModifyForwardRuleRequest, cb?: (error: string, rep: ModifyForwardRuleResponse) => void): Promise<ModifyForwardRuleResponse>;
    /**
     * 删除设备
     */
    DeleteDevice(req: DeleteDeviceRequest, cb?: (error: string, rep: DeleteDeviceResponse) => void): Promise<DeleteDeviceResponse>;
    /**
     * 开通云存服务
     */
    CreateCloudStorage(req: CreateCloudStorageRequest, cb?: (error: string, rep: CreateCloudStorageResponse) => void): Promise<CreateCloudStorageResponse>;
    /**
     * 获取视频防盗链播放URL
     */
    GenerateSignedVideoURL(req: GenerateSignedVideoURLRequest, cb?: (error: string, rep: GenerateSignedVideoURLResponse) => void): Promise<GenerateSignedVideoURLResponse>;
    /**
     * 设置转发权限
     */
    SetForwardAuth(req: SetForwardAuthRequest, cb?: (error: string, rep: SetForwardAuthResponse) => void): Promise<SetForwardAuthResponse>;
    /**
     * 本接口（ListFirmwares）用于获取固件列表
     */
    ListFirmwares(req: ListFirmwaresRequest, cb?: (error: string, rep: ListFirmwaresResponse) => void): Promise<ListFirmwaresResponse>;
    /**
     * 本接口用于编辑固件信息
     */
    EditFirmware(req: EditFirmwareRequest, cb?: (error: string, rep: EditFirmwareResponse) => void): Promise<EditFirmwareResponse>;
    /**
     * 获取Category详情
     */
    DescribeCategory(req: DescribeCategoryRequest, cb?: (error: string, rep: DescribeCategoryResponse) => void): Promise<DescribeCategoryResponse>;
    /**
     * 本接口（PublishMessage）用于使用自定义透传协议进行设备远控
     */
    PublishMessage(req: PublishMessageRequest, cb?: (error: string, rep: PublishMessageResponse) => void): Promise<PublishMessageResponse>;
    /**
     * 本接口用于查询固件升级任务状态分布
     */
    DescribeFirmwareTaskDistribution(req: DescribeFirmwareTaskDistributionRequest, cb?: (error: string, rep: DescribeFirmwareTaskDistributionResponse) => void): Promise<DescribeFirmwareTaskDistributionResponse>;
    /**
     * 删除产品
     */
    DeleteProduct(req: DeleteProductRequest, cb?: (error: string, rep: DeleteProductResponse) => void): Promise<DeleteProductResponse>;
    /**
     * 获取产品动态注册详情
     */
    DescribeProductDynamicRegister(req: DescribeProductDynamicRegisterRequest, cb?: (error: string, rep: DescribeProductDynamicRegisterResponse) => void): Promise<DescribeProductDynamicRegisterResponse>;
    /**
     * 获取设备的历史事件
     */
    DescribeDeviceEventHistory(req: DescribeDeviceEventHistoryRequest, cb?: (error: string, rep: DescribeDeviceEventHistoryResponse) => void): Promise<DescribeDeviceEventHistoryResponse>;
    /**
     * 设置数据转发状态
     */
    ModifyDataForwardStatus(req: ModifyDataForwardStatusRequest, cb?: (error: string, rep: ModifyDataForwardStatusResponse) => void): Promise<ModifyDataForwardStatusResponse>;
    /**
     * 本接口（CreateTaskFileUrl）用于获取产品级任务文件上传链接
     */
    CreateTaskFileUrl(req: CreateTaskFileUrlRequest, cb?: (error: string, rep: CreateTaskFileUrlResponse) => void): Promise<CreateTaskFileUrlResponse>;
    /**
     * 此接口查询固件升级任务详情
     */
    DescribeFirmwareTask(req: DescribeFirmwareTaskRequest, cb?: (error: string, rep: DescribeFirmwareTaskResponse) => void): Promise<DescribeFirmwareTaskResponse>;
    /**
     * 导入其它产品的数据模板，覆盖现有数据模板的物模型和产品分类信息
     */
    ImportModelDefinition(req: ImportModelDefinitionRequest, cb?: (error: string, rep: ImportModelDefinitionResponse) => void): Promise<ImportModelDefinitionResponse>;
    /**
     * 上报活跃设备
     */
    ReportAliveDevice(req: ReportAliveDeviceRequest, cb?: (error: string, rep: ReportAliveDeviceResponse) => void): Promise<ReportAliveDeviceResponse>;
    /**
     * 重置云存服务
     */
    ResetCloudStorage(req: ResetCloudStorageRequest, cb?: (error: string, rep: ResetCloudStorageResponse) => void): Promise<ResetCloudStorageResponse>;
    /**
     * 获取设备上下线日志
     */
    DescribeDeviceStatusLog(req: DescribeDeviceStatusLogRequest, cb?: (error: string, rep: DescribeDeviceStatusLogResponse) => void): Promise<DescribeDeviceStatusLogResponse>;
    /**
     * 拉取云存事件列表
     */
    DescribeCloudStorageEvents(req: DescribeCloudStorageEventsRequest, cb?: (error: string, rep: DescribeCloudStorageEventsResponse) => void): Promise<DescribeCloudStorageEventsResponse>;
    /**
     * 创建数据转发
     */
    CreateDataForward(req: CreateDataForwardRequest, cb?: (error: string, rep: CreateDataForwardResponse) => void): Promise<CreateDataForwardResponse>;
    /**
     * 本接口用于查询固件升级任务的设备列表
     */
    DescribeFirmwareTaskDevices(req: DescribeFirmwareTaskDevicesRequest, cb?: (error: string, rep: DescribeFirmwareTaskDevicesResponse) => void): Promise<DescribeFirmwareTaskDevicesResponse>;
    /**
     * 本接口用于取消设备升级任务
     */
    CancelDeviceFirmwareTask(req: CancelDeviceFirmwareTaskRequest, cb?: (error: string, rep: CancelDeviceFirmwareTaskResponse) => void): Promise<CancelDeviceFirmwareTaskResponse>;
    /**
     * 查看AI推理结果推送配置
     */
    DescribeAIModelChannel(req: DescribeAIModelChannelRequest, cb?: (error: string, rep: DescribeAIModelChannelResponse) => void): Promise<DescribeAIModelChannelResponse>;
    /**
     * 获取数据转发列表
     */
    DescribeDataForwardList(req: DescribeDataForwardListRequest, cb?: (error: string, rep: DescribeDataForwardListResponse) => void): Promise<DescribeDataForwardListResponse>;
    /**
     * 获取某一天云存时间轴
     */
    DescribeCloudStorageTime(req: DescribeCloudStorageTimeRequest, cb?: (error: string, rep: DescribeCloudStorageTimeResponse) => void): Promise<DescribeCloudStorageTimeResponse>;
    /**
     * 获取产品转发规则
     */
    DescribeForwardRule(req: DescribeForwardRuleRequest, cb?: (error: string, rep: DescribeForwardRuleResponse) => void): Promise<DescribeForwardRuleResponse>;
    /**
     * 创建转发规则
     */
    CreateForwardRule(req: CreateForwardRuleRequest, cb?: (error: string, rep: CreateForwardRuleResponse) => void): Promise<CreateForwardRuleResponse>;
    /**
     * 本接口（GetAllFirmwareVersion）用于获取所有的版本列表
     */
    GetAllFirmwareVersion(req: GetAllFirmwareVersionRequest, cb?: (error: string, rep: GetAllFirmwareVersionResponse) => void): Promise<GetAllFirmwareVersionResponse>;
    /**
     * 提供修改产品的数据模板的能力
     */
    ModifyModelDefinition(req: ModifyModelDefinitionRequest, cb?: (error: string, rep: ModifyModelDefinitionResponse) => void): Promise<ModifyModelDefinitionResponse>;
    /**
     * 申请AI模型
     */
    ApplyAIModel(req: ApplyAIModelRequest, cb?: (error: string, rep: ApplyAIModelResponse) => void): Promise<ApplyAIModelResponse>;
    /**
     * 绑定云存用户
     */
    BindCloudStorageUser(req: BindCloudStorageUserRequest, cb?: (error: string, rep: BindCloudStorageUserResponse) => void): Promise<BindCloudStorageUserResponse>;
    /**
     * 获取设备列表
     */
    DescribeDevices(req: DescribeDevicesRequest, cb?: (error: string, rep: DescribeDevicesResponse) => void): Promise<DescribeDevicesResponse>;
    /**
     * 本接口（DeleteFirmware）用于删除固件
     */
    DeleteFirmware(req: DeleteFirmwareRequest, cb?: (error: string, rep: DeleteFirmwareResponse) => void): Promise<DeleteFirmwareResponse>;
    /**
     * 查看设备详情
     */
    DescribeDevice(req: DescribeDeviceRequest, cb?: (error: string, rep: DescribeDeviceResponse) => void): Promise<DescribeDeviceResponse>;
    /**
     * 拉取账户流水
     */
    DescribeBalanceTransactions(req: DescribeBalanceTransactionsRequest, cb?: (error: string, rep: DescribeBalanceTransactionsResponse) => void): Promise<DescribeBalanceTransactionsResponse>;
    /**
     * 根据设备产品ID、设备名称，设置控制设备的属性数据。
     */
    ControlDeviceData(req: ControlDeviceDataRequest, cb?: (error: string, rep: ControlDeviceDataResponse) => void): Promise<ControlDeviceDataResponse>;
    /**
     * 拉取云存事件缩略图
     */
    DescribeCloudStorageThumbnail(req: DescribeCloudStorageThumbnailRequest, cb?: (error: string, rep: DescribeCloudStorageThumbnailResponse) => void): Promise<DescribeCloudStorageThumbnailResponse>;
    /**
     * 查询账户余额
     */
    DescribeBalance(req: DescribeBalanceRequest, cb?: (error: string, rep: DescribeBalanceResponse) => void): Promise<DescribeBalanceResponse>;
    /**
     * 设备唤醒
     */
    WakeUpDevice(req: WakeUpDeviceRequest, cb?: (error: string, rep: WakeUpDeviceResponse) => void): Promise<WakeUpDeviceResponse>;
}
