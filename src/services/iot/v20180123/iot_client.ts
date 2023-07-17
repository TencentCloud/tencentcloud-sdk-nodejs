/* eslint-disable @typescript-eslint/no-unused-vars */
/*
 * Copyright (c) 2018 THL A29 Limited, a Tencent company. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
import { AbstractClient } from "../../../common/abstract_client"
import { ClientConfig } from "../../../common/interface"
import {
  AppUpdateDeviceRequest,
  GetDeviceResponse,
  GetDeviceDataResponse,
  AppResetPasswordResponse,
  DeleteRuleRequest,
  ActivateRuleResponse,
  UpdateRuleRequest,
  DeviceSignature,
  AppGetDevicesRequest,
  AppGetDeviceDataResponse,
  GetTopicResponse,
  DeactivateRuleResponse,
  IssueDeviceControlRequest,
  GetDeviceStatisticsRequest,
  ResetDeviceResponse,
  GetDeviceLogResponse,
  AddRuleRequest,
  ResetDeviceRequest,
  ServiceAction,
  DataTemplate,
  DeleteTopicRequest,
  AddProductResponse,
  UpdateProductResponse,
  DataHistoryEntry,
  AppGetDeviceResponse,
  UpdateRuleResponse,
  AppDeviceDetail,
  GetDeviceStatisticsResponse,
  UnassociateSubDeviceFromGatewayProductResponse,
  Topic,
  AssociateSubDeviceToGatewayProductResponse,
  GetProductRequest,
  AppGetTokenRequest,
  GetRuleRequest,
  DeleteProductRequest,
  AppGetUserRequest,
  GetProductsResponse,
  AppGetDeviceRequest,
  GetDataHistoryRequest,
  AddTopicResponse,
  AddProductRequest,
  ProductEntry,
  GetRulesResponse,
  DeleteDeviceRequest,
  AssociateSubDeviceToGatewayProductRequest,
  GetDeviceSignaturesResponse,
  RuleQuery,
  AppUser,
  BoolData,
  PublishMsgRequest,
  GetProductsRequest,
  AddTopicRequest,
  AppGetDeviceStatusesRequest,
  DeviceLogEntry,
  GetDebugLogRequest,
  GetDeviceRequest,
  GetDeviceDataRequest,
  DeactivateRuleRequest,
  GetTopicRequest,
  GetDevicesResponse,
  NumberData,
  GetDevicesRequest,
  AppGetTokenResponse,
  GetProductResponse,
  AppAddUserRequest,
  AddRuleResponse,
  AppDeleteDeviceResponse,
  AppIssueDeviceControlRequest,
  DeviceStatus,
  DeleteProductResponse,
  AppGetUserResponse,
  AppUpdateUserRequest,
  GetDebugLogResponse,
  AppUpdateUserResponse,
  Device,
  GetRulesRequest,
  Rule,
  IssueDeviceControlResponse,
  GetDataHistoryResponse,
  Action,
  PublishMsgResponse,
  AppGetDevicesResponse,
  CkafkaAction,
  AddDeviceRequest,
  UpdateProductRequest,
  DeleteRuleResponse,
  GetDeviceSignaturesRequest,
  GetRuleResponse,
  AppUpdateDeviceResponse,
  Product,
  DebugLogEntry,
  GetDeviceStatusesRequest,
  GetDeviceStatusesResponse,
  UnassociateSubDeviceFromGatewayProductRequest,
  AppDeleteDeviceRequest,
  StringData,
  AppGetDeviceStatusesResponse,
  GetTopicsResponse,
  AppGetDeviceDataRequest,
  AppAddUserResponse,
  DeviceEntry,
  GetDeviceLogRequest,
  AddDeviceResponse,
  ActivateRuleRequest,
  AppResetPasswordRequest,
  DeleteTopicResponse,
  AppDevice,
  GetTopicsRequest,
  DeviceStatData,
  EnumData,
  DeleteDeviceResponse,
  AppSecureAddDeviceResponse,
  AppSecureAddDeviceRequest,
  AppIssueDeviceControlResponse,
  TopicAction,
} from "./iot_models"

/**
 * iot client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("iot.tencentcloudapi.com", "2018-01-23", clientConfig)
  }

  /**
   * 批量获取设备某一段时间范围的设备上报数据。该接口适用于使用高级版类型的产品
   */
  async GetDataHistory(
    req: GetDataHistoryRequest,
    cb?: (error: string, rep: GetDataHistoryResponse) => void
  ): Promise<GetDataHistoryResponse> {
    return this.request("GetDataHistory", req, cb)
  }

  /**
   * 重置设备操作，将会为设备生成新的证书及清空最新数据，需谨慎操作。
   */
  async ResetDevice(
    req: ResetDeviceRequest,
    cb?: (error: string, rep: ResetDeviceResponse) => void
  ): Promise<ResetDeviceResponse> {
    return this.request("ResetDevice", req, cb)
  }

  /**
   * 查询某段时间范围内产品的在线、激活设备数
   */
  async GetDeviceStatistics(
    req: GetDeviceStatisticsRequest,
    cb?: (error: string, rep: GetDeviceStatisticsResponse) => void
  ): Promise<GetDeviceStatisticsResponse> {
    return this.request("GetDeviceStatistics", req, cb)
  }

  /**
   * 用户绑定设备，绑定后可以在APP端进行控制。绑定设备前需调用“获取设备绑定签名”接口
   */
  async AppSecureAddDevice(
    req: AppSecureAddDeviceRequest,
    cb?: (error: string, rep: AppSecureAddDeviceResponse) => void
  ): Promise<AppSecureAddDeviceResponse> {
    return this.request("AppSecureAddDevice", req, cb)
  }

  /**
   * 提供下发控制指令到指定设备的能力，该接口适用于使用高级版类型的产品。
   */
  async IssueDeviceControl(
    req: IssueDeviceControlRequest,
    cb?: (error: string, rep: IssueDeviceControlResponse) => void
  ): Promise<IssueDeviceControlResponse> {
    return this.request("IssueDeviceControl", req, cb)
  }

  /**
   * 获取设备的调试日志，用于定位问题
   */
  async GetDebugLog(
    req: GetDebugLogRequest,
    cb?: (error: string, rep: GetDebugLogResponse) => void
  ): Promise<GetDebugLogResponse> {
    return this.request("GetDebugLog", req, cb)
  }

  /**
   * 禁用规则
   */
  async DeactivateRule(
    req: DeactivateRuleRequest,
    cb?: (error: string, rep: DeactivateRuleResponse) => void
  ): Promise<DeactivateRuleResponse> {
    return this.request("DeactivateRule", req, cb)
  }

  /**
   * 提供分页查询某个产品Id下设备信息的能力。
   */
  async GetDevices(
    req: GetDevicesRequest,
    cb?: (error: string, rep: GetDevicesResponse) => void
  ): Promise<GetDevicesResponse> {
    return this.request("GetDevices", req, cb)
  }

  /**
   * 新增Topic，用于设备或应用发布消息至该Topic或订阅该Topic的消息。
   */
  async AddTopic(
    req: AddTopicRequest,
    cb?: (error: string, rep: AddTopicResponse) => void
  ): Promise<AddTopicResponse> {
    return this.request("AddTopic", req, cb)
  }

  /**
   * 获取绑定设备的上下线状态
   */
  async AppGetDeviceStatuses(
    req: AppGetDeviceStatusesRequest,
    cb?: (error: string, rep: AppGetDeviceStatusesResponse) => void
  ): Promise<AppGetDeviceStatusesResponse> {
    return this.request("AppGetDeviceStatuses", req, cb)
  }

  /**
   * 获取用户在物联网套件所创建的所有产品信息。
   */
  async GetProducts(
    req: GetProductsRequest,
    cb?: (error: string, rep: GetProductsResponse) => void
  ): Promise<GetProductsResponse> {
    return this.request("GetProducts", req, cb)
  }

  /**
   * 获取用户token
   */
  async AppGetToken(
    req: AppGetTokenRequest,
    cb?: (error: string, rep: AppGetTokenResponse) => void
  ): Promise<AppGetTokenResponse> {
    return this.request("AppGetToken", req, cb)
  }

  /**
   * 修改用户信息
   */
  async AppUpdateUser(
    req: AppUpdateUserRequest,
    cb?: (error: string, rep: AppUpdateUserResponse) => void
  ): Promise<AppUpdateUserResponse> {
    return this.request("AppUpdateUser", req, cb)
  }

  /**
   * 新增规则
   */
  async AddRule(
    req: AddRuleRequest,
    cb?: (error: string, rep: AddRuleResponse) => void
  ): Promise<AddRuleResponse> {
    return this.request("AddRule", req, cb)
  }

  /**
     * 业务无客户使用，下线接口。

取消子设备产品与网关设备产品的关联
     */
  async UnassociateSubDeviceFromGatewayProduct(
    req: UnassociateSubDeviceFromGatewayProductRequest,
    cb?: (error: string, rep: UnassociateSubDeviceFromGatewayProductResponse) => void
  ): Promise<UnassociateSubDeviceFromGatewayProductResponse> {
    return this.request("UnassociateSubDeviceFromGatewayProduct", req, cb)
  }

  /**
   * 获取设备绑定签名，用于用户绑定某个设备的应用场景
   */
  async GetDeviceSignatures(
    req: GetDeviceSignaturesRequest,
    cb?: (error: string, rep: GetDeviceSignaturesResponse) => void
  ): Promise<GetDeviceSignaturesResponse> {
    return this.request("GetDeviceSignatures", req, cb)
  }

  /**
   * 删除规则
   */
  async DeleteRule(
    req: DeleteRuleRequest,
    cb?: (error: string, rep: DeleteRuleResponse) => void
  ): Promise<DeleteRuleResponse> {
    return this.request("DeleteRule", req, cb)
  }

  /**
   * 本接口(AddProduct)用于创建、定义某款硬件产品。
   */
  async AddProduct(
    req: AddProductRequest,
    cb?: (error: string, rep: AddProductResponse) => void
  ): Promise<AddProductResponse> {
    return this.request("AddProduct", req, cb)
  }

  /**
   * 提供在指定的产品Id下删除一个设备的能力。
   */
  async DeleteDevice(
    req: DeleteDeviceRequest,
    cb?: (error: string, rep: DeleteDeviceResponse) => void
  ): Promise<DeleteDeviceResponse> {
    return this.request("DeleteDevice", req, cb)
  }

  /**
   * 提供向指定的Topic发布消息的能力，常用于向设备下发控制指令。该接口只适用于产品版本为“基础版”类型的产品，使用高级版的产品需使用“下发设备控制指令”接口
   */
  async PublishMsg(
    req: PublishMsgRequest,
    cb?: (error: string, rep: PublishMsgResponse) => void
  ): Promise<PublishMsgResponse> {
    return this.request("PublishMsg", req, cb)
  }

  /**
   * 更新规则
   */
  async UpdateRule(
    req: UpdateRuleRequest,
    cb?: (error: string, rep: UpdateRuleResponse) => void
  ): Promise<UpdateRuleResponse> {
    return this.request("UpdateRule", req, cb)
  }

  /**
   * 用户解除与设备的关联关系，解除后APP用户无法控制设备，获取设备数据
   */
  async AppDeleteDevice(
    req: AppDeleteDeviceRequest,
    cb?: (error: string, rep: AppDeleteDeviceResponse) => void
  ): Promise<AppDeleteDeviceResponse> {
    return this.request("AppDeleteDevice", req, cb)
  }

  /**
   * 批量获取设备的当前状态，状态包括在线、离线或未激活状态。
   */
  async GetDeviceStatuses(
    req: GetDeviceStatusesRequest,
    cb?: (error: string, rep: GetDeviceStatusesResponse) => void
  ): Promise<GetDeviceStatusesResponse> {
    return this.request("GetDeviceStatuses", req, cb)
  }

  /**
   * 获取转发规则列表
   */
  async GetRules(
    req: GetRulesRequest,
    cb?: (error: string, rep: GetRulesResponse) => void
  ): Promise<GetRulesResponse> {
    return this.request("GetRules", req, cb)
  }

  /**
   * 删除用户指定的产品Id对应的信息。
   */
  async DeleteProduct(
    req: DeleteProductRequest,
    cb?: (error: string, rep: DeleteProductResponse) => void
  ): Promise<DeleteProductResponse> {
    return this.request("DeleteProduct", req, cb)
  }

  /**
   * 获取用户信息
   */
  async AppGetUser(
    req: AppGetUserRequest,
    cb?: (error: string, rep: AppGetUserResponse) => void
  ): Promise<AppGetUserResponse> {
    return this.request("AppGetUser", req, cb)
  }

  /**
   * 获取用户的绑定设备列表
   */
  async AppGetDevices(
    req: AppGetDevicesRequest,
    cb?: (error: string, rep: AppGetDevicesResponse) => void
  ): Promise<AppGetDevicesResponse> {
    return this.request("AppGetDevices", req, cb)
  }

  /**
   * 为APP提供用户注册功能
   */
  async AppAddUser(
    req: AppAddUserRequest,
    cb?: (error: string, rep: AppAddUserResponse) => void
  ): Promise<AppAddUserResponse> {
    return this.request("AppAddUser", req, cb)
  }

  /**
   * 提供修改产品信息及数据模板的能力。
   */
  async UpdateProduct(
    req: UpdateProductRequest,
    cb?: (error: string, rep: UpdateProductResponse) => void
  ): Promise<UpdateProductResponse> {
    return this.request("UpdateProduct", req, cb)
  }

  /**
   * 用户通过APP控制设备
   */
  async AppIssueDeviceControl(
    req: AppIssueDeviceControlRequest,
    cb?: (error: string, rep: AppIssueDeviceControlResponse) => void
  ): Promise<AppIssueDeviceControlResponse> {
    return this.request("AppIssueDeviceControl", req, cb)
  }

  /**
   * 获取Topic信息
   */
  async GetTopic(
    req: GetTopicRequest,
    cb?: (error: string, rep: GetTopicResponse) => void
  ): Promise<GetTopicResponse> {
    return this.request("GetTopic", req, cb)
  }

  /**
   * 获取绑定设备数据，用于实时展示设备的最新数据
   */
  async AppGetDeviceData(
    req: AppGetDeviceDataRequest,
    cb?: (error: string, rep: AppGetDeviceDataResponse) => void
  ): Promise<AppGetDeviceDataResponse> {
    return this.request("AppGetDeviceData", req, cb)
  }

  /**
   * 提供查询某个设备详细信息的能力。
   */
  async GetDevice(
    req: GetDeviceRequest,
    cb?: (error: string, rep: GetDeviceResponse) => void
  ): Promise<GetDeviceResponse> {
    return this.request("GetDevice", req, cb)
  }

  /**
   * 获取绑定设备的基本信息与数据模板定义
   */
  async AppGetDevice(
    req: AppGetDeviceRequest,
    cb?: (error: string, rep: AppGetDeviceResponse) => void
  ): Promise<AppGetDeviceResponse> {
    return this.request("AppGetDevice", req, cb)
  }

  /**
   * 获取某个设备当前上报到云端的数据，该接口适用于使用数据模板协议的产品。
   */
  async GetDeviceData(
    req: GetDeviceDataRequest,
    cb?: (error: string, rep: GetDeviceDataResponse) => void
  ): Promise<GetDeviceDataResponse> {
    return this.request("GetDeviceData", req, cb)
  }

  /**
   * 获取转发规则信息
   */
  async GetRule(
    req: GetRuleRequest,
    cb?: (error: string, rep: GetRuleResponse) => void
  ): Promise<GetRuleResponse> {
    return this.request("GetRule", req, cb)
  }

  /**
   * 批量获取设备与云端的详细通信日志，该接口适用于使用高级版类型的产品。
   */
  async GetDeviceLog(
    req: GetDeviceLogRequest,
    cb?: (error: string, rep: GetDeviceLogResponse) => void
  ): Promise<GetDeviceLogResponse> {
    return this.request("GetDeviceLog", req, cb)
  }

  /**
   * 获取Topic列表
   */
  async GetTopics(
    req: GetTopicsRequest,
    cb?: (error: string, rep: GetTopicsResponse) => void
  ): Promise<GetTopicsResponse> {
    return this.request("GetTopics", req, cb)
  }

  /**
   * 提供在指定的产品Id下创建一个设备的能力，生成设备名称与设备秘钥。
   */
  async AddDevice(
    req: AddDeviceRequest,
    cb?: (error: string, rep: AddDeviceResponse) => void
  ): Promise<AddDeviceResponse> {
    return this.request("AddDevice", req, cb)
  }

  /**
   * 获取产品定义的详细信息，包括产品名称、产品描述，鉴权模式等信息。
   */
  async GetProduct(
    req: GetProductRequest,
    cb?: (error: string, rep: GetProductResponse) => void
  ): Promise<GetProductResponse> {
    return this.request("GetProduct", req, cb)
  }

  /**
   * 重置APP用户密码
   */
  async AppResetPassword(
    req: AppResetPasswordRequest,
    cb?: (error: string, rep: AppResetPasswordResponse) => void
  ): Promise<AppResetPasswordResponse> {
    return this.request("AppResetPassword", req, cb)
  }

  /**
   * 启用规则
   */
  async ActivateRule(
    req: ActivateRuleRequest,
    cb?: (error: string, rep: ActivateRuleResponse) => void
  ): Promise<ActivateRuleResponse> {
    return this.request("ActivateRule", req, cb)
  }

  /**
   * 关联子设备产品和网关产品
   */
  async AssociateSubDeviceToGatewayProduct(
    req: AssociateSubDeviceToGatewayProductRequest,
    cb?: (error: string, rep: AssociateSubDeviceToGatewayProductResponse) => void
  ): Promise<AssociateSubDeviceToGatewayProductResponse> {
    return this.request("AssociateSubDeviceToGatewayProduct", req, cb)
  }

  /**
   * 删除Topic
   */
  async DeleteTopic(
    req: DeleteTopicRequest,
    cb?: (error: string, rep: DeleteTopicResponse) => void
  ): Promise<DeleteTopicResponse> {
    return this.request("DeleteTopic", req, cb)
  }

  /**
   * 修改设备别名，便于用户个性化定义设备的名称
   */
  async AppUpdateDevice(
    req: AppUpdateDeviceRequest,
    cb?: (error: string, rep: AppUpdateDeviceResponse) => void
  ): Promise<AppUpdateDeviceResponse> {
    return this.request("AppUpdateDevice", req, cb)
  }
}
