import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { PublishMessageRequest, UpdateDevicesEnableStateResponse, DescribeProductCAResponse, DeleteDeviceShadowResponse, UpdateProductPrivateCARequest, UnbindDevicesRequest, DescribeDeviceResourcesRequest, DeletePrivateCAResponse, UpdatePrivateCARequest, BindDevicesRequest, CreatePrivateCAResponse, DescribeProductsRequest, DescribeDevicesResponse, DeleteDeviceShadowRequest, DeleteTopicRuleResponse, DescribeProductCARequest, DescribeProductTasksRequest, UpdateProductPrivateCAResponse, UpdateOtaTaskStatusRequest, UpdateDeviceShadowRequest, DescribeGatewayBindDevicesResponse, DescribeFirmwareRequest, DescribeDeviceResourceResponse, DescribeProductResourcesRequest, DescribeProductRequest, DescribeProductsResponse, DescribeDeviceShadowResponse, EnableTopicRuleResponse, DescribePushResourceTaskStatisticsResponse, UpdateDeviceLogLevelRequest, UpdateOtaTaskStatusResponse, PublishRRPCMessageRequest, ListLogRequest, BatchUpdateFirmwareResponse, DeleteProductRequest, DeleteProductPrivateCAResponse, DownloadDeviceResourceRequest, DescribeDeviceResourceRequest, EditFirmwareRequest, ResetDeviceStateRequest, DescribeDeviceClientKeyRequest, DeleteDeviceRequest, DescribeFirmwareTaskDistributionRequest, ListFirmwaresResponse, DescribeFirmwareTaskDevicesRequest, DescribeFirmwareResponse, DescribeResourceTasksRequest, CreateMultiDevicesTaskRequest, DeleteDeviceResourceResponse, DescribeFirmwareTaskStatisticsResponse, DescribePushResourceTaskStatisticsRequest, UpdateDevicesEnableStateRequest, ListTopicRulesRequest, ListSDKLogRequest, SetProductsForbiddenStatusResponse, CreateProductResponse, DescribeProductResourceResponse, CancelDeviceFirmwareTaskResponse, CreateTopicPolicyResponse, RetryDeviceFirmwareTaskResponse, CreateDeviceResponse, CreateDeviceRequest, DescribeProductTaskRequest, DescribeFirmwareTaskResponse, CreateProductRequest, DescribeFirmwareTasksRequest, DisableTopicRuleResponse, GetAllVersionResponse, UpdateTopicPolicyResponse, DescribeProductTaskResponse, DescribeDeviceResponse, PublishBroadcastMessageRequest, ListFirmwaresRequest, ListLogResponse, RetryDeviceFirmwareTaskRequest, DescribeFirmwareTaskDevicesResponse, DescribeFirmwareTasksResponse, DescribePrivateCARequest, GetCOSURLResponse, UpdateDeviceAvailableStateResponse, EditFirmwareResponse, ListSDKLogResponse, UpdateDevicePSKRequest, DeleteProductPrivateCARequest, UpdateDeviceAvailableStateRequest, GetUserResourceInfoResponse, DescribePrivateCABindedProductsResponse, DeleteProductResponse, ListLogPayloadResponse, SetProductsForbiddenStatusRequest, DownloadDeviceResourceResponse, DescribeFirmwareTaskDistributionResponse, PublishBroadcastMessageResponse, CreatePrivateCARequest, UpdateDevicePSKResponse, DescribeDeviceRequest, CreateMultiDevicesTaskResponse, DescribeProductResourcesResponse, UpdateProductDynamicRegisterRequest, CreateTopicPolicyRequest, DescribeProductResourceRequest, ReplaceTopicRuleRequest, PublishRRPCMessageResponse, UpdateTopicPolicyRequest, UpdatePrivateCAResponse, DescribeDeviceResourcesResponse, UploadFirmwareResponse, DeleteTopicRuleRequest, ReplaceTopicRuleResponse, ListTopicRulesResponse, CancelDeviceFirmwareTaskRequest, DeleteDeviceResourceRequest, DescribeDeviceShadowRequest, UpdateProductDynamicRegisterResponse, GetAllVersionRequest, UnbindDevicesResponse, DescribePrivateCABindedProductsRequest, DescribePrivateCAsResponse, CreateTaskFileUrlRequest, UpdateDeviceShadowResponse, BatchUpdateFirmwareRequest, GetUserResourceInfoRequest, GetCOSURLRequest, DescribeProductResponse, DescribeGatewayBindDevicesRequest, PublishMessageResponse, DescribePrivateCAsRequest, BindDevicesResponse, DescribeDevicesRequest, DescribeDeviceClientKeyResponse, DescribePrivateCAResponse, UploadFirmwareRequest, UpdateDeviceLogLevelResponse, DisableTopicRuleRequest, ResetDeviceStateResponse, CreateTopicRuleResponse, ListLogPayloadRequest, CreateTopicRuleRequest, DescribeResourceTasksResponse, DescribeFirmwareTaskStatisticsRequest, DeleteDeviceResponse, DeletePrivateCARequest, CreateTaskFileUrlResponse, DescribeProductTasksResponse, EnableTopicRuleRequest, DescribeFirmwareTaskRequest } from "./iotcloud_models";
/**
 * iotcloud client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 本接口（GetCOSURL）用于获取固件存储在COS的URL
     */
    GetCOSURL(req: GetCOSURLRequest, cb?: (error: string, rep: GetCOSURLResponse) => void): Promise<GetCOSURLResponse>;
    /**
     * 本接口（ReplaceTopicRule）用于修改替换规则
     */
    ReplaceTopicRule(req: ReplaceTopicRuleRequest, cb?: (error: string, rep: ReplaceTopicRuleResponse) => void): Promise<ReplaceTopicRuleResponse>;
    /**
     * 发布RRPC消息
     */
    PublishRRPCMessage(req: PublishRRPCMessageRequest, cb?: (error: string, rep: PublishRRPCMessageResponse) => void): Promise<PublishRRPCMessageResponse>;
    /**
     * 设置设备上报的日志级别
     */
    UpdateDeviceLogLevel(req: UpdateDeviceLogLevelRequest, cb?: (error: string, rep: UpdateDeviceLogLevelResponse) => void): Promise<UpdateDeviceLogLevelResponse>;
    /**
     * 本接口（DescribeGatewayBindDevices）用于获取网关绑定的子设备列表
     */
    DescribeGatewayBindDevices(req: DescribeGatewayBindDevicesRequest, cb?: (error: string, rep: DescribeGatewayBindDevicesResponse) => void): Promise<DescribeGatewayBindDevicesResponse>;
    /**
     * 获取日志内容列表
     */
    ListLogPayload(req: ListLogPayloadRequest, cb?: (error: string, rep: ListLogPayloadResponse) => void): Promise<ListLogPayloadResponse>;
    /**
     * 本接口（UpdateTopicPolicy）用于更新Topic信息
     */
    UpdateTopicPolicy(req: UpdateTopicPolicyRequest, cb?: (error: string, rep: UpdateTopicPolicyResponse) => void): Promise<UpdateTopicPolicyResponse>;
    /**
     * 查询固件信息
     */
    DescribeFirmware(req: DescribeFirmwareRequest, cb?: (error: string, rep: DescribeFirmwareResponse) => void): Promise<DescribeFirmwareResponse>;
    /**
     * 本接口（DescribeDeviceShadow）用于查询虚拟设备信息。
     */
    DescribeDeviceShadow(req: DescribeDeviceShadowRequest, cb?: (error: string, rep: DescribeDeviceShadowResponse) => void): Promise<DescribeDeviceShadowResponse>;
    /**
     * 本接口（DescribeDevice）用于查看设备信息
     */
    DescribeDevice(req: DescribeDeviceRequest, cb?: (error: string, rep: DescribeDeviceResponse) => void): Promise<DescribeDeviceResponse>;
    /**
     * 发布广播消息
     */
    PublishBroadcastMessage(req: PublishBroadcastMessageRequest, cb?: (error: string, rep: PublishBroadcastMessageResponse) => void): Promise<PublishBroadcastMessageResponse>;
    /**
     * 启用或者禁用设备
     */
    UpdateDeviceAvailableState(req: UpdateDeviceAvailableStateRequest, cb?: (error: string, rep: UpdateDeviceAvailableStateResponse) => void): Promise<UpdateDeviceAvailableStateResponse>;
    /**
     * 本接口（DescribeProduct）用于查看产品详情
     */
    DescribeProduct(req: DescribeProductRequest, cb?: (error: string, rep: DescribeProductResponse) => void): Promise<DescribeProductResponse>;
    /**
     * 本接口（CreateTopicRule）用于创建一个规则
     */
    CreateTopicRule(req: CreateTopicRuleRequest, cb?: (error: string, rep: CreateTopicRuleResponse) => void): Promise<CreateTopicRuleResponse>;
    /**
     * 重试设备升级任务
     */
    RetryDeviceFirmwareTask(req: RetryDeviceFirmwareTaskRequest, cb?: (error: string, rep: RetryDeviceFirmwareTaskResponse) => void): Promise<RetryDeviceFirmwareTaskResponse>;
    /**
     * 本接口（CreateTopicPolicy）用于创建一个Topic
     */
    CreateTopicPolicy(req: CreateTopicPolicyRequest, cb?: (error: string, rep: CreateTopicPolicyResponse) => void): Promise<CreateTopicPolicyResponse>;
    /**
     * 更新产品的私有CA
     */
    UpdateProductPrivateCA(req: UpdateProductPrivateCARequest, cb?: (error: string, rep: UpdateProductPrivateCAResponse) => void): Promise<UpdateProductPrivateCAResponse>;
    /**
     * 查询私有CA绑定的产品列表
     */
    DescribePrivateCABindedProducts(req: DescribePrivateCABindedProductsRequest, cb?: (error: string, rep: DescribePrivateCABindedProductsResponse) => void): Promise<DescribePrivateCABindedProductsResponse>;
    /**
     * 本接口（BatchUpdateFirmware）用于批量更新设备固件
     */
    BatchUpdateFirmware(req: BatchUpdateFirmwareRequest, cb?: (error: string, rep: BatchUpdateFirmwareResponse) => void): Promise<BatchUpdateFirmwareResponse>;
    /**
     * 本接口（CreateProduct）用于创建一个新的物联网通信产品
     */
    CreateProduct(req: CreateProductRequest, cb?: (error: string, rep: CreateProductResponse) => void): Promise<CreateProductResponse>;
    /**
     * 本接口（GetUserResourceInfo）用于查询用户资源使用信息。
     */
    GetUserResourceInfo(req?: GetUserResourceInfoRequest, cb?: (error: string, rep: GetUserResourceInfoResponse) => void): Promise<GetUserResourceInfoResponse>;
    /**
     * 批量设置产品禁用状态
     */
    SetProductsForbiddenStatus(req: SetProductsForbiddenStatusRequest, cb?: (error: string, rep: SetProductsForbiddenStatusResponse) => void): Promise<SetProductsForbiddenStatusResponse>;
    /**
     * 查询产品绑定的CA证书
     */
    DescribeProductCA(req: DescribeProductCARequest, cb?: (error: string, rep: DescribeProductCAResponse) => void): Promise<DescribeProductCAResponse>;
    /**
     * 获取证书认证类型设备的私钥，刚生成或者重置设备后仅可调用一次
     */
    DescribeDeviceClientKey(req: DescribeDeviceClientKeyRequest, cb?: (error: string, rep: DescribeDeviceClientKeyResponse) => void): Promise<DescribeDeviceClientKeyResponse>;
    /**
     * 本接口（DescribeProducts）用于列出产品列表。
     */
    DescribeProducts(req: DescribeProductsRequest, cb?: (error: string, rep: DescribeProductsResponse) => void): Promise<DescribeProductsResponse>;
    /**
     * 本接口（CreateMultiDevicesTask）用于创建产品级别的批量创建设备任务
     */
    CreateMultiDevicesTask(req: CreateMultiDevicesTaskRequest, cb?: (error: string, rep: CreateMultiDevicesTaskResponse) => void): Promise<CreateMultiDevicesTaskResponse>;
    /**
     * 查询资源推送任务列表
     */
    DescribeResourceTasks(req: DescribeResourceTasksRequest, cb?: (error: string, rep: DescribeResourceTasksResponse) => void): Promise<DescribeResourceTasksResponse>;
    /**
     * 查询固件升级任务统计信息
     */
    DescribeFirmwareTaskStatistics(req: DescribeFirmwareTaskStatisticsRequest, cb?: (error: string, rep: DescribeFirmwareTaskStatisticsResponse) => void): Promise<DescribeFirmwareTaskStatisticsResponse>;
    /**
     * 删除产品的私有CA证书
     */
    DeleteProductPrivateCA(req: DeleteProductPrivateCARequest, cb?: (error: string, rep: DeleteProductPrivateCAResponse) => void): Promise<DeleteProductPrivateCAResponse>;
    /**
     * 查询推送资源任务统计信息
     */
    DescribePushResourceTaskStatistics(req: DescribePushResourceTaskStatisticsRequest, cb?: (error: string, rep: DescribePushResourceTaskStatisticsResponse) => void): Promise<DescribePushResourceTaskStatisticsResponse>;
    /**
     * 本接口（DescribeProductTask）用于查看产品级别的任务信息
     */
    DescribeProductTask(req: DescribeProductTaskRequest, cb?: (error: string, rep: DescribeProductTaskResponse) => void): Promise<DescribeProductTaskResponse>;
    /**
     * 本接口（DeleteDevice）用于删除物联网通信设备。
     */
    DeleteDevice(req: DeleteDeviceRequest, cb?: (error: string, rep: DeleteDeviceResponse) => void): Promise<DeleteDeviceResponse>;
    /**
     * 批量启用或者禁用设备
     */
    UpdateDevicesEnableState(req: UpdateDevicesEnableStateRequest, cb?: (error: string, rep: UpdateDevicesEnableStateResponse) => void): Promise<UpdateDevicesEnableStateResponse>;
    /**
     * 本接口（UpdateOtaTask）当固件升级大任务处于没有在全部成功的状态时，可修改为取消状态，取消部分或全部设备的升级;或其它允许的可修改的状态
     */
    UpdateOtaTaskStatus(req: UpdateOtaTaskStatusRequest, cb?: (error: string, rep: UpdateOtaTaskStatusResponse) => void): Promise<UpdateOtaTaskStatusResponse>;
    /**
     * 本接口（ListFirmwares）用于获取固件列表
     */
    ListFirmwares(req: ListFirmwaresRequest, cb?: (error: string, rep: ListFirmwaresResponse) => void): Promise<ListFirmwaresResponse>;
    /**
     * 获取设备上报的日志
     */
    ListSDKLog(req: ListSDKLogRequest, cb?: (error: string, rep: ListSDKLogResponse) => void): Promise<ListSDKLogResponse>;
    /**
     * 本接口（DescribeProductResource）用于查询产品资源详情。
     */
    DescribeProductResource(req: DescribeProductResourceRequest, cb?: (error: string, rep: DescribeProductResourceResponse) => void): Promise<DescribeProductResourceResponse>;
    /**
     * 编辑固件信息
     */
    EditFirmware(req: EditFirmwareRequest, cb?: (error: string, rep: EditFirmwareResponse) => void): Promise<EditFirmwareResponse>;
    /**
     * 本接口（DeleteDeviceShadow）用于删除设备影子
     */
    DeleteDeviceShadow(req: DeleteDeviceShadowRequest, cb?: (error: string, rep: DeleteDeviceShadowResponse) => void): Promise<DeleteDeviceShadowResponse>;
    /**
     * 本接口（CreateDevice）用于新建一个物联网通信设备。
     */
    CreateDevice(req: CreateDeviceRequest, cb?: (error: string, rep: CreateDeviceResponse) => void): Promise<CreateDeviceResponse>;
    /**
     * 本接口（DescribeDeviceResource）用于查询设备资源详情。
     */
    DescribeDeviceResource(req: DescribeDeviceResourceRequest, cb?: (error: string, rep: DescribeDeviceResourceResponse) => void): Promise<DescribeDeviceResourceResponse>;
    /**
     * 本接口（PublishMessage）用于向某个主题发消息。
     */
    PublishMessage(req: PublishMessageRequest, cb?: (error: string, rep: PublishMessageResponse) => void): Promise<PublishMessageResponse>;
    /**
     * 查询固件升级任务状态分布
     */
    DescribeFirmwareTaskDistribution(req: DescribeFirmwareTaskDistributionRequest, cb?: (error: string, rep: DescribeFirmwareTaskDistributionResponse) => void): Promise<DescribeFirmwareTaskDistributionResponse>;
    /**
     * 创建私有CA证书
     */
    CreatePrivateCA(req: CreatePrivateCARequest, cb?: (error: string, rep: CreatePrivateCAResponse) => void): Promise<CreatePrivateCAResponse>;
    /**
     * 本接口（DeleteProduct）用于删除一个物联网通信产品
     */
    DeleteProduct(req: DeleteProductRequest, cb?: (error: string, rep: DeleteProductResponse) => void): Promise<DeleteProductResponse>;
    /**
     * 更新私有CA证书
     */
    UpdatePrivateCA(req: UpdatePrivateCARequest, cb?: (error: string, rep: UpdatePrivateCAResponse) => void): Promise<UpdatePrivateCAResponse>;
    /**
     * 本接口（DownloadDeviceResource）用于下载设备资源
     */
    DownloadDeviceResource(req: DownloadDeviceResourceRequest, cb?: (error: string, rep: DownloadDeviceResourceResponse) => void): Promise<DownloadDeviceResourceResponse>;
    /**
     * 删除私有CA证书
     */
    DeletePrivateCA(req: DeletePrivateCARequest, cb?: (error: string, rep: DeletePrivateCAResponse) => void): Promise<DeletePrivateCAResponse>;
    /**
     * 重置设备的连接状态
     */
    ResetDeviceState(req: ResetDeviceStateRequest, cb?: (error: string, rep: ResetDeviceStateResponse) => void): Promise<ResetDeviceStateResponse>;
    /**
     * 查询固件升级任务详情
     */
    DescribeFirmwareTask(req: DescribeFirmwareTaskRequest, cb?: (error: string, rep: DescribeFirmwareTaskResponse) => void): Promise<DescribeFirmwareTaskResponse>;
    /**
     * 本接口（UploadFirmware）用于上传设备固件信息
     */
    UploadFirmware(req: UploadFirmwareRequest, cb?: (error: string, rep: UploadFirmwareResponse) => void): Promise<UploadFirmwareResponse>;
    /**
     * 本接口（DescribeDeviceResources）用于查询设备资源列表。
     */
    DescribeDeviceResources(req: DescribeDeviceResourcesRequest, cb?: (error: string, rep: DescribeDeviceResourcesResponse) => void): Promise<DescribeDeviceResourcesResponse>;
    /**
     * 更新产品动态注册的配置
     */
    UpdateProductDynamicRegister(req: UpdateProductDynamicRegisterRequest, cb?: (error: string, rep: UpdateProductDynamicRegisterResponse) => void): Promise<UpdateProductDynamicRegisterResponse>;
    /**
     * 本接口（ListLog）用于查看日志信息
     */
    ListLog(req: ListLogRequest, cb?: (error: string, rep: ListLogResponse) => void): Promise<ListLogResponse>;
    /**
     * 查询固件升级任务的设备列表
     */
    DescribeFirmwareTaskDevices(req: DescribeFirmwareTaskDevicesRequest, cb?: (error: string, rep: DescribeFirmwareTaskDevicesResponse) => void): Promise<DescribeFirmwareTaskDevicesResponse>;
    /**
     * 取消设备升级任务
     */
    CancelDeviceFirmwareTask(req: CancelDeviceFirmwareTaskRequest, cb?: (error: string, rep: CancelDeviceFirmwareTaskResponse) => void): Promise<CancelDeviceFirmwareTaskResponse>;
    /**
     * 本接口（EnableTopicRule）用于启用规则
     */
    EnableTopicRule(req: EnableTopicRuleRequest, cb?: (error: string, rep: EnableTopicRuleResponse) => void): Promise<EnableTopicRuleResponse>;
    /**
     * 本接口（BindDevices）用于网关设备批量绑定子设备
     */
    BindDevices(req: BindDevicesRequest, cb?: (error: string, rep: BindDevicesResponse) => void): Promise<BindDevicesResponse>;
    /**
     * 本接口（CreateTaskFileUrl）用于获取产品级任务文件上传链接
     */
    CreateTaskFileUrl(req: CreateTaskFileUrlRequest, cb?: (error: string, rep: CreateTaskFileUrlResponse) => void): Promise<CreateTaskFileUrlResponse>;
    /**
     * 本接口（UnbindDevices）用于网关设备批量解绑子设备
     */
    UnbindDevices(req: UnbindDevicesRequest, cb?: (error: string, rep: UnbindDevicesResponse) => void): Promise<UnbindDevicesResponse>;
    /**
     * 查询私有化CA信息
     */
    DescribePrivateCA(req: DescribePrivateCARequest, cb?: (error: string, rep: DescribePrivateCAResponse) => void): Promise<DescribePrivateCAResponse>;
    /**
     * 本接口（DescribeProductTasks）用于查看产品级别的任务列表
     */
    DescribeProductTasks(req: DescribeProductTasksRequest, cb?: (error: string, rep: DescribeProductTasksResponse) => void): Promise<DescribeProductTasksResponse>;
    /**
     * 本接口（DescribeDevices）用于查询物联网通信设备的设备列表。
     */
    DescribeDevices(req: DescribeDevicesRequest, cb?: (error: string, rep: DescribeDevicesResponse) => void): Promise<DescribeDevicesResponse>;
    /**
     * 本接口（GetAllVersion）用于获取所有的版本列表
     */
    GetAllVersion(req: GetAllVersionRequest, cb?: (error: string, rep: GetAllVersionResponse) => void): Promise<GetAllVersionResponse>;
    /**
     * 本接口（DisableTopicRule）用于禁用规则
     */
    DisableTopicRule(req: DisableTopicRuleRequest, cb?: (error: string, rep: DisableTopicRuleResponse) => void): Promise<DisableTopicRuleResponse>;
    /**
     * 本接口（UpdateDeviceShadow）用于更新虚拟设备信息。
     */
    UpdateDeviceShadow(req: UpdateDeviceShadowRequest, cb?: (error: string, rep: UpdateDeviceShadowResponse) => void): Promise<UpdateDeviceShadowResponse>;
    /**
     * 查询固件升级任务列表
     */
    DescribeFirmwareTasks(req: DescribeFirmwareTasksRequest, cb?: (error: string, rep: DescribeFirmwareTasksResponse) => void): Promise<DescribeFirmwareTasksResponse>;
    /**
     * 本接口（ListTopicRules）用于分页获取规则列表
     */
    ListTopicRules(req: ListTopicRulesRequest, cb?: (error: string, rep: ListTopicRulesResponse) => void): Promise<ListTopicRulesResponse>;
    /**
     * 本接口（DescribeProductResources）用于查询产品资源列表。
     */
    DescribeProductResources(req: DescribeProductResourcesRequest, cb?: (error: string, rep: DescribeProductResourcesResponse) => void): Promise<DescribeProductResourcesResponse>;
    /**
     * 本接口（DeleteDeviceResource）用于删除设备资源
     */
    DeleteDeviceResource(req: DeleteDeviceResourceRequest, cb?: (error: string, rep: DeleteDeviceResourceResponse) => void): Promise<DeleteDeviceResourceResponse>;
    /**
     * 查询私有CA证书列表
     */
    DescribePrivateCAs(req?: DescribePrivateCAsRequest, cb?: (error: string, rep: DescribePrivateCAsResponse) => void): Promise<DescribePrivateCAsResponse>;
    /**
     * 本接口（UpdateDevicePSK）用于更新设备的PSK
     */
    UpdateDevicePSK(req: UpdateDevicePSKRequest, cb?: (error: string, rep: UpdateDevicePSKResponse) => void): Promise<UpdateDevicePSKResponse>;
    /**
     * 本接口（DeleteTopicRule）用于删除规则
     */
    DeleteTopicRule(req: DeleteTopicRuleRequest, cb?: (error: string, rep: DeleteTopicRuleResponse) => void): Promise<DeleteTopicRuleResponse>;
}
