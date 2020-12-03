import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { UnbindDevicesRequest, BindDevicesRequest, DescribeProductsRequest, DescribeFirmwareRequest, DescribeDevicesResponse, DeleteTopicRuleResponse, EnableTopicRuleResponse, DescribeTasksResponse, UpdateDeviceShadowRequest, DescribeMultiDevTaskRequest, DescribeProductsResponse, DescribeDeviceShadowResponse, CreateMultiDeviceResponse, PublishRRPCMessageRequest, UpdateTopicPolicyResponse, DeleteProductRequest, DescribeTasksRequest, EditFirmwareRequest, ResetDeviceStateRequest, DescribeDeviceClientKeyRequest, UpdateTopicPolicyRequest, DeleteDeviceRequest, DescribeFirmwareTaskDevicesRequest, DescribeFirmwareResponse, CreateMultiDevicesTaskRequest, DescribeFirmwareTaskStatisticsResponse, CreateLoraDeviceRequest, CreateProductResponse, CreateMultiDeviceRequest, DeleteLoraDeviceResponse, CreateTaskRequest, DescribeAllDevicesRequest, DescribeFirmwareTaskDevicesResponse, PublishToDeviceResponse, RetryDeviceFirmwareTaskResponse, CreateDeviceResponse, DeleteLoraDeviceRequest, CreateDeviceRequest, DescribeProductTaskRequest, DescribeFirmwareTaskResponse, CreateProductRequest, DescribeFirmwareTasksRequest, DisableTopicRuleResponse, DescribeProductTaskResponse, DescribeDeviceResponse, PublishBroadcastMessageRequest, PublishMessageRequest, RetryDeviceFirmwareTaskRequest, DescribeFirmwareTasksResponse, UpdateDeviceAvailableStateResponse, EditFirmwareResponse, CancelTaskRequest, DescribeFirmwareTaskDistributionRequest, UpdateDeviceAvailableStateRequest, DeleteProductResponse, CreateTopicPolicyResponse, PublishToDeviceRequest, UploadFirmwareResponse, DescribeFirmwareTaskDistributionResponse, PublishBroadcastMessageResponse, DescribeDeviceRequest, CreateMultiDevicesTaskResponse, CreateTopicPolicyRequest, DescribeLoraDeviceResponse, ReplaceTopicRuleRequest, PublishRRPCMessageResponse, CancelTaskResponse, CreateLoraDeviceResponse, DeleteTopicRuleRequest, ReplaceTopicRuleResponse, PublishAsDeviceRequest, CancelDeviceFirmwareTaskRequest, CancelDeviceFirmwareTaskResponse, DescribeMultiDevicesResponse, DescribeDeviceShadowRequest, UnbindDevicesResponse, CreateTaskFileUrlResponse, DescribeMultiDevicesRequest, CreateTaskFileUrlRequest, UpdateDeviceShadowResponse, DescribeTaskResponse, CreateTaskResponse, DescribeMultiDevTaskResponse, DescribeProductTasksRequest, DescribeAllDevicesResponse, DescribeLoraDeviceRequest, DescribeTaskRequest, PublishMessageResponse, BindDevicesResponse, DescribeDevicesRequest, DescribeDeviceClientKeyResponse, UploadFirmwareRequest, DisableTopicRuleRequest, ResetDeviceStateResponse, CreateTopicRuleResponse, CreateTopicRuleRequest, DescribeFirmwareTaskStatisticsRequest, DeleteDeviceResponse, DescribeProductTasksResponse, PublishAsDeviceResponse, EnableTopicRuleRequest, DescribeFirmwareTaskRequest } from "./iotcloud_models";
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
     * 查询所有设备列表
     */
    DescribeAllDevices(req: DescribeAllDevicesRequest, cb?: (error: string, rep: DescribeAllDevicesResponse) => void): Promise<DescribeAllDevicesResponse>;
    /**
     * 发布RRPC消息
     */
    PublishRRPCMessage(req: PublishRRPCMessageRequest, cb?: (error: string, rep: PublishRRPCMessageResponse) => void): Promise<PublishRRPCMessageResponse>;
    /**
     * 删除lora类型的设备
     */
    DeleteLoraDevice(req: DeleteLoraDeviceRequest, cb?: (error: string, rep: DeleteLoraDeviceResponse) => void): Promise<DeleteLoraDeviceResponse>;
    /**
     * 服务器端下发消息给lora类型的设备
     */
    PublishToDevice(req: PublishToDeviceRequest, cb?: (error: string, rep: PublishToDeviceResponse) => void): Promise<PublishToDeviceResponse>;
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
     * 启用或者禁用设备
     */
    UpdateDeviceAvailableState(req: UpdateDeviceAvailableStateRequest, cb?: (error: string, rep: UpdateDeviceAvailableStateResponse) => void): Promise<UpdateDeviceAvailableStateResponse>;
    /**
     * 本接口（CreateProduct）用于创建一个新的物联网通信产品
     */
    CreateProduct(req: CreateProductRequest, cb?: (error: string, rep: CreateProductResponse) => void): Promise<CreateProductResponse>;
    /**
     * 本接口（UploadFirmware）用于上传设备固件信息
     */
    UploadFirmware(req: UploadFirmwareRequest, cb?: (error: string, rep: UploadFirmwareResponse) => void): Promise<UploadFirmwareResponse>;
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
     * 本接口（ReplaceTopicRule）用于修改替换规则
     */
    ReplaceTopicRule(req: ReplaceTopicRuleRequest, cb?: (error: string, rep: ReplaceTopicRuleResponse) => void): Promise<ReplaceTopicRuleResponse>;
    /**
     * 编辑固件信息
     */
    EditFirmware(req: EditFirmwareRequest, cb?: (error: string, rep: EditFirmwareResponse) => void): Promise<EditFirmwareResponse>;
    /**
     * 本接口（CreateDevice）用于新建一个物联网通信设备。
     */
    CreateDevice(req: CreateDeviceRequest, cb?: (error: string, rep: CreateDeviceResponse) => void): Promise<CreateDeviceResponse>;
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
     * 本接口（DescribeTasks）用于查询已创建的任务列表，任务保留一个月
     */
    DescribeTasks(req: DescribeTasksRequest, cb?: (error: string, rep: DescribeTasksResponse) => void): Promise<DescribeTasksResponse>;
    /**
     * 本接口（DescribeMultiDevices）用于查询批量创建设备的执行结果。
     */
    DescribeMultiDevices(req: DescribeMultiDevicesRequest, cb?: (error: string, rep: DescribeMultiDevicesResponse) => void): Promise<DescribeMultiDevicesResponse>;
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
     * 本接口（DescribeDevices）用于查询物联网通信设备的设备列表。
     */
    DescribeDevices(req: DescribeDevicesRequest, cb?: (error: string, rep: DescribeDevicesResponse) => void): Promise<DescribeDevicesResponse>;
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
     * 本接口（DescribeProductTask）用于查看产品级别的任务信息
     */
    DescribeProductTask(req: DescribeProductTaskRequest, cb?: (error: string, rep: DescribeProductTaskResponse) => void): Promise<DescribeProductTaskResponse>;
    /**
     * 本接口（DeleteTopicRule）用于删除规则
     */
    DeleteTopicRule(req: DeleteTopicRuleRequest, cb?: (error: string, rep: DeleteTopicRuleResponse) => void): Promise<DeleteTopicRuleResponse>;
}
