import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { AppUpdateDeviceRequest, GetDeviceResponse, GetDeviceDataResponse, AppResetPasswordResponse, DeleteRuleRequest, ActivateRuleResponse, UpdateRuleRequest, AppGetDevicesRequest, AppGetDeviceDataResponse, GetTopicResponse, DeactivateRuleResponse, IssueDeviceControlRequest, GetDeviceStatisticsRequest, ResetDeviceResponse, GetDeviceLogResponse, AddRuleRequest, ResetDeviceRequest, DeleteTopicRequest, AddProductResponse, UpdateProductResponse, AppGetDeviceResponse, UpdateRuleResponse, GetDeviceStatisticsResponse, UnassociateSubDeviceFromGatewayProductResponse, AssociateSubDeviceToGatewayProductResponse, GetProductRequest, AppGetTokenRequest, GetRuleRequest, DeleteProductRequest, AppGetUserRequest, GetProductsResponse, AppGetDeviceRequest, GetDataHistoryRequest, AddTopicResponse, AddProductRequest, GetRulesResponse, DeleteDeviceRequest, AssociateSubDeviceToGatewayProductRequest, GetDeviceSignaturesResponse, PublishMsgRequest, GetProductsRequest, AddTopicRequest, AppGetDeviceStatusesRequest, GetDebugLogRequest, GetDeviceRequest, GetDeviceDataRequest, DeactivateRuleRequest, GetTopicRequest, GetDevicesResponse, GetDevicesRequest, AppGetTokenResponse, GetProductResponse, AppAddUserRequest, AddRuleResponse, AppDeleteDeviceResponse, AppIssueDeviceControlRequest, DeleteProductResponse, AppGetUserResponse, AppUpdateUserRequest, GetDebugLogResponse, AppUpdateUserResponse, GetRulesRequest, IssueDeviceControlResponse, GetDataHistoryResponse, PublishMsgResponse, AppGetDevicesResponse, AddDeviceRequest, UpdateProductRequest, DeleteRuleResponse, GetDeviceSignaturesRequest, GetRuleResponse, AppUpdateDeviceResponse, GetDeviceStatusesRequest, GetDeviceStatusesResponse, UnassociateSubDeviceFromGatewayProductRequest, AppDeleteDeviceRequest, AppGetDeviceStatusesResponse, GetTopicsResponse, AppGetDeviceDataRequest, AppAddUserResponse, GetDeviceLogRequest, AddDeviceResponse, ActivateRuleRequest, AppResetPasswordRequest, DeleteTopicResponse, GetTopicsRequest, DeleteDeviceResponse, AppSecureAddDeviceResponse, AppSecureAddDeviceRequest, AppIssueDeviceControlResponse } from "./iot_models";
/**
 * iot client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 批量获取设备某一段时间范围的设备上报数据。该接口适用于使用高级版类型的产品
     */
    GetDataHistory(req: GetDataHistoryRequest, cb?: (error: string, rep: GetDataHistoryResponse) => void): Promise<GetDataHistoryResponse>;
    /**
     * 重置设备操作，将会为设备生成新的证书及清空最新数据，需谨慎操作。
     */
    ResetDevice(req: ResetDeviceRequest, cb?: (error: string, rep: ResetDeviceResponse) => void): Promise<ResetDeviceResponse>;
    /**
     * 查询某段时间范围内产品的在线、激活设备数
     */
    GetDeviceStatistics(req: GetDeviceStatisticsRequest, cb?: (error: string, rep: GetDeviceStatisticsResponse) => void): Promise<GetDeviceStatisticsResponse>;
    /**
     * 用户绑定设备，绑定后可以在APP端进行控制。绑定设备前需调用“获取设备绑定签名”接口
     */
    AppSecureAddDevice(req: AppSecureAddDeviceRequest, cb?: (error: string, rep: AppSecureAddDeviceResponse) => void): Promise<AppSecureAddDeviceResponse>;
    /**
     * 提供下发控制指令到指定设备的能力，该接口适用于使用高级版类型的产品。
     */
    IssueDeviceControl(req: IssueDeviceControlRequest, cb?: (error: string, rep: IssueDeviceControlResponse) => void): Promise<IssueDeviceControlResponse>;
    /**
     * 获取设备的调试日志，用于定位问题
     */
    GetDebugLog(req: GetDebugLogRequest, cb?: (error: string, rep: GetDebugLogResponse) => void): Promise<GetDebugLogResponse>;
    /**
     * 禁用规则
     */
    DeactivateRule(req: DeactivateRuleRequest, cb?: (error: string, rep: DeactivateRuleResponse) => void): Promise<DeactivateRuleResponse>;
    /**
     * 提供分页查询某个产品Id下设备信息的能力。
     */
    GetDevices(req: GetDevicesRequest, cb?: (error: string, rep: GetDevicesResponse) => void): Promise<GetDevicesResponse>;
    /**
     * 新增Topic，用于设备或应用发布消息至该Topic或订阅该Topic的消息。
     */
    AddTopic(req: AddTopicRequest, cb?: (error: string, rep: AddTopicResponse) => void): Promise<AddTopicResponse>;
    /**
     * 获取绑定设备的上下线状态
     */
    AppGetDeviceStatuses(req: AppGetDeviceStatusesRequest, cb?: (error: string, rep: AppGetDeviceStatusesResponse) => void): Promise<AppGetDeviceStatusesResponse>;
    /**
     * 获取用户在物联网套件所创建的所有产品信息。
     */
    GetProducts(req: GetProductsRequest, cb?: (error: string, rep: GetProductsResponse) => void): Promise<GetProductsResponse>;
    /**
     * 获取用户token
     */
    AppGetToken(req: AppGetTokenRequest, cb?: (error: string, rep: AppGetTokenResponse) => void): Promise<AppGetTokenResponse>;
    /**
     * 修改用户信息
     */
    AppUpdateUser(req: AppUpdateUserRequest, cb?: (error: string, rep: AppUpdateUserResponse) => void): Promise<AppUpdateUserResponse>;
    /**
     * 新增规则
     */
    AddRule(req: AddRuleRequest, cb?: (error: string, rep: AddRuleResponse) => void): Promise<AddRuleResponse>;
    /**
     * 取消子设备产品与网关设备产品的关联
     */
    UnassociateSubDeviceFromGatewayProduct(req: UnassociateSubDeviceFromGatewayProductRequest, cb?: (error: string, rep: UnassociateSubDeviceFromGatewayProductResponse) => void): Promise<UnassociateSubDeviceFromGatewayProductResponse>;
    /**
     * 获取设备绑定签名，用于用户绑定某个设备的应用场景
     */
    GetDeviceSignatures(req: GetDeviceSignaturesRequest, cb?: (error: string, rep: GetDeviceSignaturesResponse) => void): Promise<GetDeviceSignaturesResponse>;
    /**
     * 删除规则
     */
    DeleteRule(req: DeleteRuleRequest, cb?: (error: string, rep: DeleteRuleResponse) => void): Promise<DeleteRuleResponse>;
    /**
     * 本接口(AddProduct)用于创建、定义某款硬件产品。
     */
    AddProduct(req: AddProductRequest, cb?: (error: string, rep: AddProductResponse) => void): Promise<AddProductResponse>;
    /**
     * 提供在指定的产品Id下删除一个设备的能力。
     */
    DeleteDevice(req: DeleteDeviceRequest, cb?: (error: string, rep: DeleteDeviceResponse) => void): Promise<DeleteDeviceResponse>;
    /**
     * 提供向指定的Topic发布消息的能力，常用于向设备下发控制指令。该接口只适用于产品版本为“基础版”类型的产品，使用高级版的产品需使用“下发设备控制指令”接口
     */
    PublishMsg(req: PublishMsgRequest, cb?: (error: string, rep: PublishMsgResponse) => void): Promise<PublishMsgResponse>;
    /**
     * 更新规则
     */
    UpdateRule(req: UpdateRuleRequest, cb?: (error: string, rep: UpdateRuleResponse) => void): Promise<UpdateRuleResponse>;
    /**
     * 用户解除与设备的关联关系，解除后APP用户无法控制设备，获取设备数据
     */
    AppDeleteDevice(req: AppDeleteDeviceRequest, cb?: (error: string, rep: AppDeleteDeviceResponse) => void): Promise<AppDeleteDeviceResponse>;
    /**
     * 批量获取设备的当前状态，状态包括在线、离线或未激活状态。
     */
    GetDeviceStatuses(req: GetDeviceStatusesRequest, cb?: (error: string, rep: GetDeviceStatusesResponse) => void): Promise<GetDeviceStatusesResponse>;
    /**
     * 获取转发规则列表
     */
    GetRules(req: GetRulesRequest, cb?: (error: string, rep: GetRulesResponse) => void): Promise<GetRulesResponse>;
    /**
     * 删除用户指定的产品Id对应的信息。
     */
    DeleteProduct(req: DeleteProductRequest, cb?: (error: string, rep: DeleteProductResponse) => void): Promise<DeleteProductResponse>;
    /**
     * 获取用户信息
     */
    AppGetUser(req: AppGetUserRequest, cb?: (error: string, rep: AppGetUserResponse) => void): Promise<AppGetUserResponse>;
    /**
     * 获取用户的绑定设备列表
     */
    AppGetDevices(req: AppGetDevicesRequest, cb?: (error: string, rep: AppGetDevicesResponse) => void): Promise<AppGetDevicesResponse>;
    /**
     * 为APP提供用户注册功能
     */
    AppAddUser(req: AppAddUserRequest, cb?: (error: string, rep: AppAddUserResponse) => void): Promise<AppAddUserResponse>;
    /**
     * 提供修改产品信息及数据模板的能力。
     */
    UpdateProduct(req: UpdateProductRequest, cb?: (error: string, rep: UpdateProductResponse) => void): Promise<UpdateProductResponse>;
    /**
     * 用户通过APP控制设备
     */
    AppIssueDeviceControl(req: AppIssueDeviceControlRequest, cb?: (error: string, rep: AppIssueDeviceControlResponse) => void): Promise<AppIssueDeviceControlResponse>;
    /**
     * 获取Topic信息
     */
    GetTopic(req: GetTopicRequest, cb?: (error: string, rep: GetTopicResponse) => void): Promise<GetTopicResponse>;
    /**
     * 获取绑定设备数据，用于实时展示设备的最新数据
     */
    AppGetDeviceData(req: AppGetDeviceDataRequest, cb?: (error: string, rep: AppGetDeviceDataResponse) => void): Promise<AppGetDeviceDataResponse>;
    /**
     * 提供查询某个设备详细信息的能力。
     */
    GetDevice(req: GetDeviceRequest, cb?: (error: string, rep: GetDeviceResponse) => void): Promise<GetDeviceResponse>;
    /**
     * 获取绑定设备的基本信息与数据模板定义
     */
    AppGetDevice(req: AppGetDeviceRequest, cb?: (error: string, rep: AppGetDeviceResponse) => void): Promise<AppGetDeviceResponse>;
    /**
     * 获取某个设备当前上报到云端的数据，该接口适用于使用数据模板协议的产品。
     */
    GetDeviceData(req: GetDeviceDataRequest, cb?: (error: string, rep: GetDeviceDataResponse) => void): Promise<GetDeviceDataResponse>;
    /**
     * 获取转发规则信息
     */
    GetRule(req: GetRuleRequest, cb?: (error: string, rep: GetRuleResponse) => void): Promise<GetRuleResponse>;
    /**
     * 批量获取设备与云端的详细通信日志，该接口适用于使用高级版类型的产品。
     */
    GetDeviceLog(req: GetDeviceLogRequest, cb?: (error: string, rep: GetDeviceLogResponse) => void): Promise<GetDeviceLogResponse>;
    /**
     * 获取Topic列表
     */
    GetTopics(req: GetTopicsRequest, cb?: (error: string, rep: GetTopicsResponse) => void): Promise<GetTopicsResponse>;
    /**
     * 提供在指定的产品Id下创建一个设备的能力，生成设备名称与设备秘钥。
     */
    AddDevice(req: AddDeviceRequest, cb?: (error: string, rep: AddDeviceResponse) => void): Promise<AddDeviceResponse>;
    /**
     * 获取产品定义的详细信息，包括产品名称、产品描述，鉴权模式等信息。
     */
    GetProduct(req: GetProductRequest, cb?: (error: string, rep: GetProductResponse) => void): Promise<GetProductResponse>;
    /**
     * 重置APP用户密码
     */
    AppResetPassword(req: AppResetPasswordRequest, cb?: (error: string, rep: AppResetPasswordResponse) => void): Promise<AppResetPasswordResponse>;
    /**
     * 启用规则
     */
    ActivateRule(req: ActivateRuleRequest, cb?: (error: string, rep: ActivateRuleResponse) => void): Promise<ActivateRuleResponse>;
    /**
     * 关联子设备产品和网关产品
     */
    AssociateSubDeviceToGatewayProduct(req: AssociateSubDeviceToGatewayProductRequest, cb?: (error: string, rep: AssociateSubDeviceToGatewayProductResponse) => void): Promise<AssociateSubDeviceToGatewayProductResponse>;
    /**
     * 删除Topic
     */
    DeleteTopic(req: DeleteTopicRequest, cb?: (error: string, rep: DeleteTopicResponse) => void): Promise<DeleteTopicResponse>;
    /**
     * 修改设备别名，便于用户个性化定义设备的名称
     */
    AppUpdateDevice(req: AppUpdateDeviceRequest, cb?: (error: string, rep: AppUpdateDeviceResponse) => void): Promise<AppUpdateDeviceResponse>;
}
