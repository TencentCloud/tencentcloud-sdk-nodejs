import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { DescribeRechargeRecordsResponse, UploadOtaVersionResponse, CreateGencodeResponse, DescribeLogsRequest, CreateIotDataTypeRequest, DescribePubVersionsRequest, RefundStorageServiceResponse, DescribeIotModelResponse, DisableDeviceResponse, DescribeRunLogRequest, DescribeProductsRequest, DeleteTraceIdsRequest, CreateStorageServiceRequest, DescribeOsListResponse, ModifyProductResponse, ModifyProductRequest, DisableDeviceStreamRequest, CreateIotModelRequest, DescribeTraceStatusResponse, CreateUploadPathRequest, CreateDevTokenRequest, DescribeStorageServiceResponse, DeleteIotDataTypeRequest, DescribeRechargeRecordsRequest, ModifyVerContentResponse, DescribeMessageQueueRequest, DeleteAppUsrResponse, DescribeRegistrationStatusResponse, DescribeProductRequest, DescribeProductsResponse, UpgradeDeviceRequest, DescribeModelDataRetResponse, CreateDevTokenResponse, RunIotModelResponse, RunIotModelRequest, DeleteProductRequest, DescribeBindUsrResponse, DescribeStreamRequest, DeleteOtaVersionRequest, DescribeIotDataTypeResponse, CreateBindingRequest, DeleteDeviceRequest, CreateAppUsrRequest, ModifyDevicePropertyRequest, RunDeviceStreamRequest, RunDeviceResponse, DeleteIotDataTypeResponse, DescribeTraceStatusRequest, CreateUsrTokenResponse, CreateTraceIdsRequest, DeleteMessageQueueResponse, DescribeOtaVersionsRequest, DescribeTraceIdsResponse, ClearDeviceActiveCodeResponse, CreateProductResponse, DescribeRegistrationStatusRequest, CreateStorageRequest, UpgradeDeviceResponse, DisableOtaVersionResponse, DescribeBindDevResponse, CreateProductRequest, RunTestOtaVersionResponse, RunTestOtaVersionRequest, DescribeDeviceResponse, SetMessageQueueResponse, DeleteOtaVersionResponse, UploadOtaVersionRequest, DescribeIotModelsRequest, DescribeModelDataRetRequest, CreateTraceIdsResponse, DescribeDevicesResponse, ModifyVerContentRequest, DeleteBindingRequest, DescribeOtaVersionsResponse, DeleteProductResponse, RunOtaVersionRequest, CreateDevicesResponse, SetMessageQueueRequest, CreateStorageServiceResponse, DescribeIotDataTypeRequest, SendOnlineMsgRequest, DescribeDeviceRequest, DescribeRunLogResponse, DeliverStorageServiceResponse, DescribeIotModelRequest, DescribeTraceIdsRequest, CreateAppUsrResponse, DeleteTraceIdsResponse, DeleteMessageQueueRequest, CreateUsrTokenRequest, RunDeviceRequest, RunOtaVersionResponse, ModifyDeviceRequest, DescribeDeviceModelResponse, DescribeStorageServiceRequest, CreateGencodeRequest, DescribePubVersionsResponse, ClearDeviceActiveCodeRequest, ModifyDeviceActionRequest, CreateIotModelResponse, DescribeBindDevRequest, CreateAnonymousAccessTokenRequest, DeliverStorageServiceRequest, RunDeviceStreamResponse, ModifyDeviceResponse, DescribeDeviceModelRequest, DescribeLogsResponse, ModifyDeviceActionResponse, CreateBindingResponse, DescribeAccountBalanceRequest, CreateDevicesRequest, DisableDeviceRequest, DescribeStreamResponse, DescribeAccountBalanceResponse, DisableOtaVersionRequest, DescribeProductResponse, CreateAnonymousAccessTokenResponse, DescribeBindUsrRequest, SendOnlineMsgResponse, DeleteAppUsrRequest, DescribeIotModelsResponse, DescribeMessageQueueResponse, DescribeOsListRequest, DescribeDevicesRequest, CreateIotDataTypeResponse, ModifyDevicePropertyResponse, DeleteBindingResponse, RefundStorageServiceRequest, CreateStorageResponse, DisableDeviceStreamResponse, DeleteDeviceResponse, CreateUploadPathResponse } from "./iotvideo_models";
/**
 * iotvideo client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 本接口（DescribeOtaVersions）用于查询固件版本信息列表。
     */
    DescribeOtaVersions(req: DescribeOtaVersionsRequest, cb?: (error: string, rep: DescribeOtaVersionsResponse) => void): Promise<DescribeOtaVersionsResponse>;
    /**
     * 本接口（DisableOtaVersion）用于禁用固件版本。
     */
    DisableOtaVersion(req: DisableOtaVersionRequest, cb?: (error: string, rep: DisableOtaVersionResponse) => void): Promise<DisableOtaVersionResponse>;
    /**
     * 清除设备激活码
     */
    ClearDeviceActiveCode(req: ClearDeviceActiveCodeRequest, cb?: (error: string, rep: ClearDeviceActiveCodeResponse) => void): Promise<ClearDeviceActiveCodeResponse>;
    /**
     * 本接口（DescribeIotDataType）用于查询自定义的物模型数据类型。
     */
    DescribeIotDataType(req: DescribeIotDataTypeRequest, cb?: (error: string, rep: DescribeIotDataTypeResponse) => void): Promise<DescribeIotDataTypeResponse>;
    /**
     * 本接口（DisableDevice）用于禁用设备，可进行批量操作，每次操作最多100台设备。
     */
    DisableDevice(req: DisableDeviceRequest, cb?: (error: string, rep: DisableDeviceResponse) => void): Promise<DisableDeviceResponse>;
    /**
     * 本接口（DeleteTraceIds）用于将设备从日志跟踪白名单中删除，该接口可批量操作，最多支持同时操作100台设备。
     */
    DeleteTraceIds(req: DeleteTraceIdsRequest, cb?: (error: string, rep: DeleteTraceIdsResponse) => void): Promise<DeleteTraceIdsResponse>;
    /**
     * 本接口（RunOtaVersion）用于固件版本正式发布。
     */
    RunOtaVersion(req: RunOtaVersionRequest, cb?: (error: string, rep: RunOtaVersionResponse) => void): Promise<RunOtaVersionResponse>;
    /**
     * 本接口（DescribeDevice）获取设备信息。
     */
    DescribeDevice(req: DescribeDeviceRequest, cb?: (error: string, rep: DescribeDeviceResponse) => void): Promise<DescribeDeviceResponse>;
    /**
     * 本接口（RunTestOtaVersion）用于固件版本测试发布。
     */
    RunTestOtaVersion(req: RunTestOtaVersionRequest, cb?: (error: string, rep: RunTestOtaVersionResponse) => void): Promise<RunTestOtaVersionResponse>;
    /**
     * 本接口（DescribeProduct）用于获取单个产品的详细信息。
     */
    DescribeProduct(req: DescribeProductRequest, cb?: (error: string, rep: DescribeProductResponse) => void): Promise<DescribeProductResponse>;
    /**
     * 本接口（SendOnlineMsg）用于向设备发送在线消息。
注意：
若设备当前不在线,会直接返回错误;
若设备网络出现异常时,消息发送可能超时,超时等待最长时间为3秒.waitresp非0情况下,会导致本接口阻塞3秒。
     */
    SendOnlineMsg(req: SendOnlineMsgRequest, cb?: (error: string, rep: SendOnlineMsgResponse) => void): Promise<SendOnlineMsgResponse>;
    /**
     * 本接口（RunIotModel）用于对定义的物模型进行发布。
     */
    RunIotModel(req: RunIotModelRequest, cb?: (error: string, rep: RunIotModelResponse) => void): Promise<RunIotModelResponse>;
    /**
     * 修改设备信息
     */
    ModifyDevice(req: ModifyDeviceRequest, cb?: (error: string, rep: ModifyDeviceResponse) => void): Promise<ModifyDeviceResponse>;
    /**
     * 本接口（CreateIotDataType）用于创建自定义物模型数据类型。
     */
    CreateIotDataType(req: CreateIotDataTypeRequest, cb?: (error: string, rep: CreateIotDataTypeResponse) => void): Promise<CreateIotDataTypeResponse>;
    /**
     * 创建匿名访问Token
     */
    CreateAnonymousAccessToken(req: CreateAnonymousAccessTokenRequest, cb?: (error: string, rep: CreateAnonymousAccessTokenResponse) => void): Promise<CreateAnonymousAccessTokenResponse>;
    /**
     * 本接口（CreateDevices）用于批量创建新的物联网视频通信设备。
注意：腾讯云不会对设备私钥进行保存，请自行保管好您的设备私钥。
     */
    CreateDevices(req: CreateDevicesRequest, cb?: (error: string, rep: CreateDevicesResponse) => void): Promise<CreateDevicesResponse>;
    /**
     * 本接口（CreateProduct）用于创建一个新的物联网智能视频产品。
     */
    CreateProduct(req: CreateProductRequest, cb?: (error: string, rep: CreateProductResponse) => void): Promise<CreateProductResponse>;
    /**
     * 本接口（CreateIotModel）用于定义的物模型提交。
该接口实现了物模型草稿箱的功能，保存用户最后一次编辑的物模型数据。
     */
    CreateIotModel(req: CreateIotModelRequest, cb?: (error: string, rep: CreateIotModelResponse) => void): Promise<CreateIotModelResponse>;
    /**
     * 本接口（DeleteIotDataType）用于删除自定义物模型数据类型。
     */
    DeleteIotDataType(req: DeleteIotDataTypeRequest, cb?: (error: string, rep: DeleteIotDataTypeResponse) => void): Promise<DeleteIotDataTypeResponse>;
    /**
     * 本接口（DescribeMessageQueue）用于查询物联网智能视频产品转发消息配置。
     */
    DescribeMessageQueue(req: DescribeMessageQueueRequest, cb?: (error: string, rep: DescribeMessageQueueResponse) => void): Promise<DescribeMessageQueueResponse>;
    /**
     * 本接口（DescribeIotModel）用于获取物模型定义详情。
     */
    DescribeIotModel(req: DescribeIotModelRequest, cb?: (error: string, rep: DescribeIotModelResponse) => void): Promise<DescribeIotModelResponse>;
    /**
     * 本接口（ModifyDeviceAction）用于修改设备物模型的行为（Action）。

可对ctlVal数据属性进行写入,如:Action.takePhoto.ctlVal,设备在线且成功发送到设备才返回,物模型写入数据时,不需要传入时标信息,平台以当前时标作为数据的时标更新物模型中的时标信息。
注意:
  1.若设备当前不在线,会直接返回错误
  2.若设备网络出现异常时,消息发送可能超时,超时等待最长时间为3秒
  3.value的内容必须与实际物模型的定义一致
     */
    ModifyDeviceAction(req: ModifyDeviceActionRequest, cb?: (error: string, rep: ModifyDeviceActionResponse) => void): Promise<ModifyDeviceActionResponse>;
    /**
     * 本接口（DescribeProducts）用于列出用户账号下的物联网智能视频产品列表。
     */
    DescribeProducts(req: DescribeProductsRequest, cb?: (error: string, rep: DescribeProductsResponse) => void): Promise<DescribeProductsResponse>;
    /**
     * 本接口（CreateTraceIds）用于将设备加到日志跟踪白名单。
     */
    CreateTraceIds(req: CreateTraceIdsRequest, cb?: (error: string, rep: CreateTraceIdsResponse) => void): Promise<CreateTraceIdsResponse>;
    /**
     * 本接口（DescribeBindUsr）用于查询设备被分享的所有用户列表。
     */
    DescribeBindUsr(req: DescribeBindUsrRequest, cb?: (error: string, rep: DescribeBindUsrResponse) => void): Promise<DescribeBindUsrResponse>;
    /**
     * 本接口（CreateAppUsr）用于接收由厂商云发送过来的注册请求,建立厂商云终端用户与IoT Video终端用户的映射关系。
     */
    CreateAppUsr(req: CreateAppUsrRequest, cb?: (error: string, rep: CreateAppUsrResponse) => void): Promise<CreateAppUsrResponse>;
    /**
     * 本接口（CreateBinding）用于终端用户和设备进行绑定，具体的应用场景如下：
    终端用户与设备具有“强关联”关系。用户与设备绑定之后，用户终端即具备了该设备的访问权限,访问或操作设备时，无需获取设备访问Token。
     */
    CreateBinding(req: CreateBindingRequest, cb?: (error: string, rep: CreateBindingResponse) => void): Promise<CreateBindingResponse>;
    /**
     * 本接口（CreateDevToken）用于以下场景：
终端用户与设备没有强绑定关联关系;
允许终端用户短时或一次性临时访问设备;
当终端用户与设备有强绑定关系时，可以不用调用此接口
     */
    CreateDevToken(req: CreateDevTokenRequest, cb?: (error: string, rep: CreateDevTokenResponse) => void): Promise<CreateDevTokenResponse>;
    /**
     * 本接口（DeleteOtaVersion）用于删除固件版本信息。
     */
    DeleteOtaVersion(req: DeleteOtaVersionRequest, cb?: (error: string, rep: DeleteOtaVersionResponse) => void): Promise<DeleteOtaVersionResponse>;
    /**
     * 本接口（DeleteAppUsr）用于删除终端用户。
     */
    DeleteAppUsr(req: DeleteAppUsrRequest, cb?: (error: string, rep: DeleteAppUsrResponse) => void): Promise<DeleteAppUsrResponse>;
    /**
     * 客户可通过本接口获取充值记录信息, 一次最多返回50条记录。
     */
    DescribeRechargeRecords(req: DescribeRechargeRecordsRequest, cb?: (error: string, rep: DescribeRechargeRecordsResponse) => void): Promise<DescribeRechargeRecordsResponse>;
    /**
     * 本接口（ModifyProduct）用于编辑物联网智能视频产品的相关信息。
     */
    ModifyProduct(req: ModifyProductRequest, cb?: (error: string, rep: ModifyProductResponse) => void): Promise<ModifyProductResponse>;
    /**
     * 本接口（DescribeLogs）用于查询设备日志列表。
设备日志最长保留时长为15天,超期自动清除。
     */
    DescribeLogs(req: DescribeLogsRequest, cb?: (error: string, rep: DescribeLogsResponse) => void): Promise<DescribeLogsResponse>;
    /**
     * 本接口（RefundStorageService）用于退订已购买的云存服务。
退订时，云存服务对应订单的处理方式 :
1. 未开始的订单自动回到已付费订单池
2. 已开始的订单自动失效
3. 购买云存接口,优先从已付费订单池中分配订单
     */
    RefundStorageService(req: RefundStorageServiceRequest, cb?: (error: string, rep: RefundStorageServiceResponse) => void): Promise<RefundStorageServiceResponse>;
    /**
     * 购买云存服务
     */
    CreateStorageService(req: CreateStorageServiceRequest, cb?: (error: string, rep: CreateStorageServiceResponse) => void): Promise<CreateStorageServiceResponse>;
    /**
     * 本接口（SetMessageQueue）用于配置物联网智能视频产品的转发消息队列。
     */
    SetMessageQueue(req: SetMessageQueueRequest, cb?: (error: string, rep: SetMessageQueueResponse) => void): Promise<SetMessageQueueResponse>;
    /**
     * 客户可通过本接口获取账户余额信息, 默认接口请求频率限制：1次/秒
     */
    DescribeAccountBalance(req: DescribeAccountBalanceRequest, cb?: (error: string, rep: DescribeAccountBalanceResponse) => void): Promise<DescribeAccountBalanceResponse>;
    /**
     * 本接口（DeleteDevice）用于删除设备，可进行批量操作，每次操作最多100台设备。
     */
    DeleteDevice(req: DeleteDeviceRequest, cb?: (error: string, rep: DeleteDeviceResponse) => void): Promise<DeleteDeviceResponse>;
    /**
     * 查看操作系统支持的芯片列表
     */
    DescribeOsList(req?: DescribeOsListRequest, cb?: (error: string, rep: DescribeOsListResponse) => void): Promise<DescribeOsListResponse>;
    /**
     * 本接口（DescribeIotModels）用于列出物模型历史版本列表。
     */
    DescribeIotModels(req: DescribeIotModelsRequest, cb?: (error: string, rep: DescribeIotModelsResponse) => void): Promise<DescribeIotModelsResponse>;
    /**
     * 本接口（DeleteProduct）用于删除一个物联网智能视频产品。
     */
    DeleteProduct(req: DeleteProductRequest, cb?: (error: string, rep: DeleteProductResponse) => void): Promise<DeleteProductResponse>;
    /**
     * 将已购买的云存服务转移到另一设备
     */
    DeliverStorageService(req: DeliverStorageServiceRequest, cb?: (error: string, rep: DeliverStorageServiceResponse) => void): Promise<DeliverStorageServiceResponse>;
    /**
     * 本接口（DescribeTraceStatus）用于查询指定设备是否在白名单中。
     */
    DescribeTraceStatus(req: DescribeTraceStatusRequest, cb?: (error: string, rep: DescribeTraceStatusResponse) => void): Promise<DescribeTraceStatusResponse>;
    /**
     * 请求设备直播流地址
     */
    DescribeStream(req: DescribeStreamRequest, cb?: (error: string, rep: DescribeStreamResponse) => void): Promise<DescribeStreamResponse>;
    /**
     * 本接口（DescribeRegistrationStatus）用于查询终端用户的注册状态。
     */
    DescribeRegistrationStatus(req: DescribeRegistrationStatusRequest, cb?: (error: string, rep: DescribeRegistrationStatusResponse) => void): Promise<DescribeRegistrationStatusResponse>;
    /**
     * 本接口（DescribeRunLog）用于获取设备运行日志。
     */
    DescribeRunLog(req: DescribeRunLogRequest, cb?: (error: string, rep: DescribeRunLogResponse) => void): Promise<DescribeRunLogResponse>;
    /**
     * 本接口（DescribeBindDev）用于查询终端用户绑定的设备列表。
     */
    DescribeBindDev(req: DescribeBindDevRequest, cb?: (error: string, rep: DescribeBindDevResponse) => void): Promise<DescribeBindDevResponse>;
    /**
     * 查询云存服务
     */
    DescribeStorageService(req: DescribeStorageServiceRequest, cb?: (error: string, rep: DescribeStorageServiceResponse) => void): Promise<DescribeStorageServiceResponse>;
    /**
     * 本接口（DisableDeviceStream）用于停止设备推流，可进行批量操作，每次操作最多100台设备。
     */
    DisableDeviceStream(req: DisableDeviceStreamRequest, cb?: (error: string, rep: DisableDeviceStreamResponse) => void): Promise<DisableDeviceStreamResponse>;
    /**
     * 本接口（CreateUploadPath）用于获取固件上传路径。
     */
    CreateUploadPath(req: CreateUploadPathRequest, cb?: (error: string, rep: CreateUploadPathResponse) => void): Promise<CreateUploadPathResponse>;
    /**
     * 本接口（DescribeModelDataRet）用于根据TaskId获取对设备物模型操作最终响应的结果。
     */
    DescribeModelDataRet(req: DescribeModelDataRetRequest, cb?: (error: string, rep: DescribeModelDataRetResponse) => void): Promise<DescribeModelDataRetResponse>;
    /**
     * 本接口（DescribePubVersions）用于获取某一产品发布过的全部固件版本。
     */
    DescribePubVersions(req: DescribePubVersionsRequest, cb?: (error: string, rep: DescribePubVersionsResponse) => void): Promise<DescribePubVersionsResponse>;
    /**
     * 本接口（RunDeviceStream）用于开启设备推流，可进行批量操作，每次操作最多100台设备。
     */
    RunDeviceStream(req: RunDeviceStreamRequest, cb?: (error: string, rep: RunDeviceStreamResponse) => void): Promise<RunDeviceStreamResponse>;
    /**
     * 编辑版本描述信息
     */
    ModifyVerContent(req: ModifyVerContentRequest, cb?: (error: string, rep: ModifyVerContentResponse) => void): Promise<ModifyVerContentResponse>;
    /**
     * 本接口（DescribeDevices）用于获取设备信息列表。
     */
    DescribeDevices(req: DescribeDevicesRequest, cb?: (error: string, rep: DescribeDevicesResponse) => void): Promise<DescribeDevicesResponse>;
    /**
     * 本接口（CreateGencode）用于生成设备物模型源代码
     */
    CreateGencode(req: CreateGencodeRequest, cb?: (error: string, rep: CreateGencodeResponse) => void): Promise<CreateGencodeResponse>;
    /**
     * 本接口（DescribeDeviceModel）用于获取设备物模型。
     */
    DescribeDeviceModel(req: DescribeDeviceModelRequest, cb?: (error: string, rep: DescribeDeviceModelResponse) => void): Promise<DescribeDeviceModelResponse>;
    /**
     * 本接口（DeleteBinding）用于终端用户和设备进行解绑定。
     */
    DeleteBinding(req: DeleteBindingRequest, cb?: (error: string, rep: DeleteBindingResponse) => void): Promise<DeleteBindingResponse>;
    /**
     * 该接口已经停止维护，请勿使用
     */
    CreateStorage(req: CreateStorageRequest, cb?: (error: string, rep: CreateStorageResponse) => void): Promise<CreateStorageResponse>;
    /**
     * 本接口（DescribeTraceIds）用于查询设备日志跟踪白名单。
     */
    DescribeTraceIds(req?: DescribeTraceIdsRequest, cb?: (error: string, rep: DescribeTraceIdsResponse) => void): Promise<DescribeTraceIdsResponse>;
    /**
     * 本接口（DeleteMessageQueue）用于删除物联网智能视频产品的转发消息配置信息。
     */
    DeleteMessageQueue(req: DeleteMessageQueueRequest, cb?: (error: string, rep: DeleteMessageQueueResponse) => void): Promise<DeleteMessageQueueResponse>;
    /**
     * 本接口（ModifyDeviceProperty）用于修改设备物模型的属性（ProWritable）。
可对setVal数据属性进行写入,如:
ProWritable.Pos.setVal
对于嵌套类型的可写属性，可以仅对其部分数据内容进行写入，如:
ProWritable.Pos.setVal.x;
可写属性云端写入成功即返回;云端向设备端发布属性变更参数;若当前设备不在线,在设备下次上线时会自动更新这些属性参数;
物模型写入数据时,不需要传入时标信息,平台以当前时标作为数据的时标更新物模型中的时标信息。
     */
    ModifyDeviceProperty(req: ModifyDevicePropertyRequest, cb?: (error: string, rep: ModifyDevicePropertyResponse) => void): Promise<ModifyDevicePropertyResponse>;
    /**
     * 本接口（RunDevice）用于启用设备，可进行批量操作，每次操作最多100台设备。
     */
    RunDevice(req: RunDeviceRequest, cb?: (error: string, rep: RunDeviceResponse) => void): Promise<RunDeviceResponse>;
    /**
     * 本接口（UploadOtaVersion）接收上传到控制台的固件版本信息。
     */
    UploadOtaVersion(req: UploadOtaVersionRequest, cb?: (error: string, rep: UploadOtaVersionResponse) => void): Promise<UploadOtaVersionResponse>;
    /**
     * 本接口（UpgradeDevice）用于对设备进行固件升级。
该接口向指定的设备下发固件更新指令,可将固件升级到任意版本(可实现固件降级)。
警告:使能UpgradeNow参数存在一定的风险性！建议仅在debug场景下使用!
     */
    UpgradeDevice(req: UpgradeDeviceRequest, cb?: (error: string, rep: UpgradeDeviceResponse) => void): Promise<UpgradeDeviceResponse>;
    /**
     * 本接口（CreateUsrToken）用于终端用户获取IoT Video平台的accessToken，初始化SDK,连接到IoT Video接入服务器。
     */
    CreateUsrToken(req: CreateUsrTokenRequest, cb?: (error: string, rep: CreateUsrTokenResponse) => void): Promise<CreateUsrTokenResponse>;
}
