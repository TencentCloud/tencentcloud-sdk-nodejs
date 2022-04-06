import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { PublishMessageRequest, UpdateDevicesEnableStateResponse, UnbindDevicesRequest, DescribeDeviceResourcesRequest, BindDevicesRequest, DescribeProductsRequest, DescribeFirmwareRequest, DescribeDevicesResponse, DeleteTopicRuleResponse, DescribeProductTasksRequest, DescribeTasksResponse, UpdateDeviceShadowRequest, DescribeMultiDevTaskRequest, DescribeDeviceResourceResponse, DescribeProductResourcesRequest, DescribeProductRequest, DescribeProductsResponse, DescribeDeviceShadowResponse, EnableTopicRuleResponse, DescribePushResourceTaskStatisticsResponse, CreateMultiDeviceResponse, PublishRRPCMessageRequest, BatchUpdateFirmwareResponse, DeleteProductRequest, DescribeTasksRequest, DownloadDeviceResourceRequest, DescribeDeviceResourceRequest, EditFirmwareRequest, ResetDeviceStateRequest, DescribeDeviceClientKeyRequest, DeleteDeviceRequest, DescribeFirmwareTaskDevicesRequest, DescribeFirmwareResponse, DescribeResourceTasksRequest, CreateMultiDevicesTaskRequest, DeleteDeviceResourceResponse, DescribeFirmwareTaskStatisticsResponse, DescribePushResourceTaskStatisticsRequest, CreateLoraDeviceRequest, UpdateDevicesEnableStateRequest, ListSDKLogRequest, SetProductsForbiddenStatusResponse, CreateProductResponse, CreateMultiDeviceRequest, DeleteLoraDeviceResponse, CreateTaskRequest, DescribeAllDevicesRequest, DescribeProductResourceResponse, CancelDeviceFirmwareTaskResponse, CreateTopicPolicyResponse, PublishToDeviceResponse, RetryDeviceFirmwareTaskResponse, CreateDeviceResponse, DeleteLoraDeviceRequest, CreateDeviceRequest, DescribeProductTaskRequest, DescribeFirmwareTaskResponse, CreateProductRequest, DescribeFirmwareTasksRequest, DisableTopicRuleResponse, GetCOSURLRequest, UpdateTopicPolicyResponse, DescribeProductTaskResponse, DescribeDeviceResponse, PublishBroadcastMessageRequest, ListLogResponse, RetryDeviceFirmwareTaskRequest, DescribeFirmwareTaskDevicesResponse, DescribeFirmwareTasksResponse, GetCOSURLResponse, UpdateDeviceAvailableStateResponse, EditFirmwareResponse, ListSDKLogResponse, CancelTaskRequest, DescribeFirmwareTaskDistributionRequest, UpdateDeviceAvailableStateRequest, GetUserResourceInfoResponse, ListLogPayloadResponse, DeleteProductResponse, PublishToDeviceRequest, SetProductsForbiddenStatusRequest, DownloadDeviceResourceResponse, UploadFirmwareResponse, DescribeFirmwareTaskDistributionResponse, PublishBroadcastMessageResponse, DescribeDeviceRequest, CreateMultiDevicesTaskResponse, DescribeProductResourcesResponse, UpdateProductDynamicRegisterRequest, CreateTopicPolicyRequest, DescribeProductResourceRequest, DescribeLoraDeviceResponse, ReplaceTopicRuleRequest, PublishRRPCMessageResponse, CancelTaskResponse, UpdateTopicPolicyRequest, DescribeDeviceResourcesResponse, CreateLoraDeviceResponse, DeleteTopicRuleRequest, ReplaceTopicRuleResponse, PublishAsDeviceRequest, CancelDeviceFirmwareTaskRequest, DeleteDeviceResourceRequest, DescribeMultiDevicesResponse, DescribeDeviceShadowRequest, UpdateProductDynamicRegisterResponse, UnbindDevicesResponse, DescribeMultiDevicesRequest, CreateTaskFileUrlRequest, UpdateDeviceShadowResponse, DescribeTaskResponse, CreateTaskResponse, BatchUpdateFirmwareRequest, DescribeMultiDevTaskResponse, GetUserResourceInfoRequest, DescribeAllDevicesResponse, ListLogRequest, DescribeProductResponse, DescribeLoraDeviceRequest, DescribeTaskRequest, PublishMessageResponse, BindDevicesResponse, DescribeDevicesRequest, DescribeDeviceClientKeyResponse, UploadFirmwareRequest, DisableTopicRuleRequest, ResetDeviceStateResponse, CreateTopicRuleResponse, ListLogPayloadRequest, CreateTopicRuleRequest, DescribeResourceTasksResponse, DescribeFirmwareTaskStatisticsRequest, DeleteDeviceResponse, CreateTaskFileUrlResponse, DescribeProductTasksResponse, PublishAsDeviceResponse, EnableTopicRuleRequest, DescribeFirmwareTaskRequest } from "./iotcloud_models";
/**
 * iotcloud client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 本接口（CreateTask）用于创建一个批量任务。目前此接口可以创建批量更新影子以及批量下发消息的任务
     */
    CreateTask(req: CreateTaskRequest, cb?: (error: string, rep: CreateTaskResponse) => void): Promise<CreateTaskResponse>;
    /**
     * 本接口（DescribeDevices）用于查询物联网通信设备的设备列表。
     */
    DescribeDevices(req: DescribeDevicesRequest, cb?: (error: string, rep: DescribeDevicesResponse) => void): Promise<DescribeDevicesResponse>;
    /**
     * 本接口（GetCOSURL）用于获取固件存储在COS的URL
     */
    GetCOSURL(req: GetCOSURLRequest, cb?: (error: string, rep: GetCOSURLResponse) => void): Promise<GetCOSURLResponse>;
    /**
     * 发布RRPC消息
     */
    PublishRRPCMessage(req: PublishRRPCMessageRequest, cb?: (error: string, rep: PublishRRPCMessageResponse) => void): Promise<PublishRRPCMessageResponse>;
    /**
     * 删除lora类型的设备
     */
    DeleteLoraDevice(req: DeleteLoraDeviceRequest, cb?: (error: string, rep: DeleteLoraDeviceResponse) => void): Promise<DeleteLoraDeviceResponse>;
    /**
     * 本接口（DescribeMultiDevices）用于查询批量创建设备的执行结果。
     */
    DescribeMultiDevices(req: DescribeMultiDevicesRequest, cb?: (error: string, rep: DescribeMultiDevicesResponse) => void): Promise<DescribeMultiDevicesResponse>;
    /**
     * 获取日志内容列表
     */
    ListLogPayload(req: ListLogPayloadRequest, cb?: (error: string, rep: ListLogPayloadResponse) => void): Promise<ListLogPayloadResponse>;
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
     * 本接口（CreateMultiDevice）用于批量创建物联云设备。
     */
    CreateMultiDevice(req: CreateMultiDeviceRequest, cb?: (error: string, rep: CreateMultiDeviceResponse) => void): Promise<CreateMultiDeviceResponse>;
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
     * 本接口（CancelTask）用于取消一个未被调度的任务。
     */
    CancelTask(req: CancelTaskRequest, cb?: (error: string, rep: CancelTaskResponse) => void): Promise<CancelTaskResponse>;
    /**
     * 重试设备升级任务
     */
    RetryDeviceFirmwareTask(req: RetryDeviceFirmwareTaskRequest, cb?: (error: string, rep: RetryDeviceFirmwareTaskResponse) => void): Promise<RetryDeviceFirmwareTaskResponse>;
    /**
     * 本接口（CreateTopicPolicy）用于创建一个Topic
     */
    CreateTopicPolicy(req: CreateTopicPolicyRequest, cb?: (error: string, rep: CreateTopicPolicyResponse) => void): Promise<CreateTopicPolicyResponse>;
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
     * 获取lora类型设备的详细信息
     */
    DescribeLoraDevice(req: DescribeLoraDeviceRequest, cb?: (error: string, rep: DescribeLoraDeviceResponse) => void): Promise<DescribeLoraDeviceResponse>;
    /**
     * 本接口（DescribeTask）用于查询一个已创建任务的详情，任务保留一个月
     */
    DescribeTask(req: DescribeTaskRequest, cb?: (error: string, rep: DescribeTaskResponse) => void): Promise<DescribeTaskResponse>;
    /**
     * 本接口（DeleteDevice）用于删除物联网通信设备。
     */
    DeleteDevice(req: DeleteDeviceRequest, cb?: (error: string, rep: DeleteDeviceResponse) => void): Promise<DeleteDeviceResponse>;
    /**
     * 批量启用或者禁用设备
     */
    UpdateDevicesEnableState(req: UpdateDevicesEnableStateRequest, cb?: (error: string, rep: UpdateDevicesEnableStateResponse) => void): Promise<UpdateDevicesEnableStateResponse>;
    /**
     * 本接口（ReplaceTopicRule）用于修改替换规则
     */
    ReplaceTopicRule(req: ReplaceTopicRuleRequest, cb?: (error: string, rep: ReplaceTopicRuleResponse) => void): Promise<ReplaceTopicRuleResponse>;
    /**
     * 获取设备上报的日志
     */
    ListSDKLog(req: ListSDKLogRequest, cb?: (error: string, rep: ListSDKLogResponse) => void): Promise<ListSDKLogResponse>;
    /**
     * 本接口（DescribeProductResource）用于查询产品资源详情。
     */
    DescribeProductResource(req: DescribeProductResourceRequest, cb?: (error: string, rep: DescribeProductResourceResponse) => void): Promise<DescribeProductResourceResponse>;
    /**
     * 查询推送资源任务统计信息
     */
    DescribePushResourceTaskStatistics(req: DescribePushResourceTaskStatisticsRequest, cb?: (error: string, rep: DescribePushResourceTaskStatisticsResponse) => void): Promise<DescribePushResourceTaskStatisticsResponse>;
    /**
     * 编辑固件信息
     */
    EditFirmware(req: EditFirmwareRequest, cb?: (error: string, rep: EditFirmwareResponse) => void): Promise<EditFirmwareResponse>;
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
     * 本接口（DeleteProduct）用于删除一个物联网通信产品
     */
    DeleteProduct(req: DeleteProductRequest, cb?: (error: string, rep: DeleteProductResponse) => void): Promise<DeleteProductResponse>;
    /**
     * 本接口（DownloadDeviceResource）用于下载设备资源
     */
    DownloadDeviceResource(req: DownloadDeviceResourceRequest, cb?: (error: string, rep: DownloadDeviceResourceResponse) => void): Promise<DownloadDeviceResourceResponse>;
    /**
     * 本接口（CreateTaskFileUrl）用于获取产品级任务文件上传链接
     */
    CreateTaskFileUrl(req: CreateTaskFileUrlRequest, cb?: (error: string, rep: CreateTaskFileUrlResponse) => void): Promise<CreateTaskFileUrlResponse>;
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
     * 本接口（DescribeTasks）用于查询已创建的任务列表，任务保留一个月
     */
    DescribeTasks(req: DescribeTasksRequest, cb?: (error: string, rep: DescribeTasksResponse) => void): Promise<DescribeTasksResponse>;
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
     * 模拟lora类型的设备端向服务器端发送消息
     */
    PublishAsDevice(req: PublishAsDeviceRequest, cb?: (error: string, rep: PublishAsDeviceResponse) => void): Promise<PublishAsDeviceResponse>;
    /**
     * 创建lora类型的设备
     */
    CreateLoraDevice(req: CreateLoraDeviceRequest, cb?: (error: string, rep: CreateLoraDeviceResponse) => void): Promise<CreateLoraDeviceResponse>;
    /**
     * 本接口（EnableTopicRule）用于启用规则
     */
    EnableTopicRule(req: EnableTopicRuleRequest, cb?: (error: string, rep: EnableTopicRuleResponse) => void): Promise<EnableTopicRuleResponse>;
    /**
     * 本接口（BindDevices）用于网关设备批量绑定子设备
     */
    BindDevices(req: BindDevicesRequest, cb?: (error: string, rep: BindDevicesResponse) => void): Promise<BindDevicesResponse>;
    /**
     * 本接口（UpdateTopicPolicy）用于更新Topic信息
     */
    UpdateTopicPolicy(req: UpdateTopicPolicyRequest, cb?: (error: string, rep: UpdateTopicPolicyResponse) => void): Promise<UpdateTopicPolicyResponse>;
    /**
     * 本接口（UnbindDevices）用于网关设备批量解绑子设备
     */
    UnbindDevices(req: UnbindDevicesRequest, cb?: (error: string, rep: UnbindDevicesResponse) => void): Promise<UnbindDevicesResponse>;
    /**
     * 发布广播消息
     */
    PublishBroadcastMessage(req: PublishBroadcastMessageRequest, cb?: (error: string, rep: PublishBroadcastMessageResponse) => void): Promise<PublishBroadcastMessageResponse>;
    /**
     * 本接口（DescribeProductTasks）用于查看产品级别的任务列表
     */
    DescribeProductTasks(req: DescribeProductTasksRequest, cb?: (error: string, rep: DescribeProductTasksResponse) => void): Promise<DescribeProductTasksResponse>;
    /**
     * 查询所有设备列表
     */
    DescribeAllDevices(req: DescribeAllDevicesRequest, cb?: (error: string, rep: DescribeAllDevicesResponse) => void): Promise<DescribeAllDevicesResponse>;
    /**
     * 本接口（DisableTopicRule）用于禁用规则
     */
    DisableTopicRule(req: DisableTopicRuleRequest, cb?: (error: string, rep: DisableTopicRuleResponse) => void): Promise<DisableTopicRuleResponse>;
    /**
     * 本接口（DescribeMultiDevTask）用于查询批量创建设备任务的执行状态。
     */
    DescribeMultiDevTask(req: DescribeMultiDevTaskRequest, cb?: (error: string, rep: DescribeMultiDevTaskResponse) => void): Promise<DescribeMultiDevTaskResponse>;
    /**
     * 本接口（UpdateDeviceShadow）用于更新虚拟设备信息。
     */
    UpdateDeviceShadow(req: UpdateDeviceShadowRequest, cb?: (error: string, rep: UpdateDeviceShadowResponse) => void): Promise<UpdateDeviceShadowResponse>;
    /**
     * 查询固件升级任务列表
     */
    DescribeFirmwareTasks(req: DescribeFirmwareTasksRequest, cb?: (error: string, rep: DescribeFirmwareTasksResponse) => void): Promise<DescribeFirmwareTasksResponse>;
    /**
     * 服务器端下发消息给lora类型的设备
     */
    PublishToDevice(req: PublishToDeviceRequest, cb?: (error: string, rep: PublishToDeviceResponse) => void): Promise<PublishToDeviceResponse>;
    /**
     * 本接口（DescribeProductResources）用于查询产品资源列表。
     */
    DescribeProductResources(req: DescribeProductResourcesRequest, cb?: (error: string, rep: DescribeProductResourcesResponse) => void): Promise<DescribeProductResourcesResponse>;
    /**
     * 本接口（DeleteDeviceResource）用于删除设备资源
     */
    DeleteDeviceResource(req: DeleteDeviceResourceRequest, cb?: (error: string, rep: DeleteDeviceResourceResponse) => void): Promise<DeleteDeviceResourceResponse>;
    /**
     * 本接口（DescribeProductTask）用于查看产品级别的任务信息
     */
    DescribeProductTask(req: DescribeProductTaskRequest, cb?: (error: string, rep: DescribeProductTaskResponse) => void): Promise<DescribeProductTaskResponse>;
    /**
     * 本接口（DeleteTopicRule）用于删除规则
     */
    DeleteTopicRule(req: DeleteTopicRuleRequest, cb?: (error: string, rep: DeleteTopicRuleResponse) => void): Promise<DeleteTopicRuleResponse>;
}
