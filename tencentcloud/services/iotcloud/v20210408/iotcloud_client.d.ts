import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { ListLogResponse, DeleteProductRequest, DescribePrivateCABindedProductsRequest, DeleteProductPrivateCAResponse, UpdatePrivateCARequest, UpdateDevicesEnableStateResponse, DescribePrivateCARequest, DescribeProductCAResponse, UpdatePrivateCAResponse, DeletePrivateCAResponse, DescribePrivateCAsResponse, DeleteProductPrivateCARequest, DescribePrivateCABindedProductsResponse, DeleteDeviceRequest, DeleteProductResponse, CreatePrivateCAResponse, SetProductsForbiddenStatusResponse, UpdateProductPrivateCARequest, DescribeDevicesResponse, PublishBroadcastMessageResponse, DescribeProductCARequest, CreatePrivateCARequest, UpdateDevicePSKResponse, DescribeProductResponse, DescribeDeviceRequest, UpdateDevicesEnableStateRequest, UpdateDeviceLogLevelRequest, UpdateProductDynamicRegisterRequest, DescribePrivateCAsRequest, UpdateDevicePSKRequest, DescribeDevicesRequest, ListLogPayloadResponse, DescribePrivateCAResponse, UpdateDeviceLogLevelResponse, ListSDKLogResponse, ListLogPayloadRequest, CreateDeviceResponse, ListSDKLogRequest, CreateDeviceRequest, DescribeProductRequest, UpdateProductPrivateCAResponse, DeleteDeviceResponse, DeletePrivateCARequest, SetProductsForbiddenStatusRequest, ListLogRequest, DescribeDeviceResponse, PublishBroadcastMessageRequest, UpdateProductDynamicRegisterResponse } from "./iotcloud_models";
/**
 * iotcloud client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 设置设备上报的日志级别
     */
    UpdateDeviceLogLevel(req: UpdateDeviceLogLevelRequest, cb?: (error: string, rep: UpdateDeviceLogLevelResponse) => void): Promise<UpdateDeviceLogLevelResponse>;
    /**
     * 查询私有CA证书列表
     */
    DescribePrivateCAs(req?: DescribePrivateCAsRequest, cb?: (error: string, rep: DescribePrivateCAsResponse) => void): Promise<DescribePrivateCAsResponse>;
    /**
     * 获取日志内容列表
     */
    ListLogPayload(req: ListLogPayloadRequest, cb?: (error: string, rep: ListLogPayloadResponse) => void): Promise<ListLogPayloadResponse>;
    /**
     * 本接口（DescribeDevice）用于查看设备信息
     */
    DescribeDevice(req: DescribeDeviceRequest, cb?: (error: string, rep: DescribeDeviceResponse) => void): Promise<DescribeDeviceResponse>;
    /**
     * 本接口（DescribeProduct）用于查看产品详情
     */
    DescribeProduct(req: DescribeProductRequest, cb?: (error: string, rep: DescribeProductResponse) => void): Promise<DescribeProductResponse>;
    /**
     * 更新产品的私有CA
     */
    UpdateProductPrivateCA(req: UpdateProductPrivateCARequest, cb?: (error: string, rep: UpdateProductPrivateCAResponse) => void): Promise<UpdateProductPrivateCAResponse>;
    /**
     * 查询产品绑定的CA证书
     */
    DescribeProductCA(req: DescribeProductCARequest, cb?: (error: string, rep: DescribeProductCAResponse) => void): Promise<DescribeProductCAResponse>;
    /**
     * 删除产品的私有CA证书
     */
    DeleteProductPrivateCA(req: DeleteProductPrivateCARequest, cb?: (error: string, rep: DeleteProductPrivateCAResponse) => void): Promise<DeleteProductPrivateCAResponse>;
    /**
     * 批量启用或者禁用设备
     */
    UpdateDevicesEnableState(req: UpdateDevicesEnableStateRequest, cb?: (error: string, rep: UpdateDevicesEnableStateResponse) => void): Promise<UpdateDevicesEnableStateResponse>;
    /**
     * 本接口（DeleteDevice）用于删除物联网通信设备。
     */
    DeleteDevice(req: DeleteDeviceRequest, cb?: (error: string, rep: DeleteDeviceResponse) => void): Promise<DeleteDeviceResponse>;
    /**
     * 获取设备上报的日志
     */
    ListSDKLog(req: ListSDKLogRequest, cb?: (error: string, rep: ListSDKLogResponse) => void): Promise<ListSDKLogResponse>;
    /**
     * 本接口（CreateDevice）用于新建一个物联网通信设备。
     */
    CreateDevice(req: CreateDeviceRequest, cb?: (error: string, rep: CreateDeviceResponse) => void): Promise<CreateDeviceResponse>;
    /**
     * 查询私有CA绑定的产品列表
     */
    DescribePrivateCABindedProducts(req: DescribePrivateCABindedProductsRequest, cb?: (error: string, rep: DescribePrivateCABindedProductsResponse) => void): Promise<DescribePrivateCABindedProductsResponse>;
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
     * 删除私有CA证书
     */
    DeletePrivateCA(req: DeletePrivateCARequest, cb?: (error: string, rep: DeletePrivateCAResponse) => void): Promise<DeletePrivateCAResponse>;
    /**
     * 更新产品动态注册的配置
     */
    UpdateProductDynamicRegister(req: UpdateProductDynamicRegisterRequest, cb?: (error: string, rep: UpdateProductDynamicRegisterResponse) => void): Promise<UpdateProductDynamicRegisterResponse>;
    /**
     * 本接口（ListLog）用于查看日志信息
     */
    ListLog(req: ListLogRequest, cb?: (error: string, rep: ListLogResponse) => void): Promise<ListLogResponse>;
    /**
     * 查询私有化CA信息
     */
    DescribePrivateCA(req: DescribePrivateCARequest, cb?: (error: string, rep: DescribePrivateCAResponse) => void): Promise<DescribePrivateCAResponse>;
    /**
     * 本接口（DescribeDevices）用于查询物联网通信设备的设备列表。
     */
    DescribeDevices(req: DescribeDevicesRequest, cb?: (error: string, rep: DescribeDevicesResponse) => void): Promise<DescribeDevicesResponse>;
    /**
     * 批量设置产品禁用状态
     */
    SetProductsForbiddenStatus(req: SetProductsForbiddenStatusRequest, cb?: (error: string, rep: SetProductsForbiddenStatusResponse) => void): Promise<SetProductsForbiddenStatusResponse>;
    /**
     * 发布广播消息
     */
    PublishBroadcastMessage(req: PublishBroadcastMessageRequest, cb?: (error: string, rep: PublishBroadcastMessageResponse) => void): Promise<PublishBroadcastMessageResponse>;
    /**
     * 本接口（UpdateDevicePSK）用于更新设备的PSK
     */
    UpdateDevicePSK(req: UpdateDevicePSKRequest, cb?: (error: string, rep: UpdateDevicePSKResponse) => void): Promise<UpdateDevicePSKResponse>;
}
