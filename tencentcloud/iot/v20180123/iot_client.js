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
const models = require("./models");
const AbstractClient = require('../../common/abstract_client')
const AppUpdateDeviceRequest = models.AppUpdateDeviceRequest;
const GetDeviceResponse = models.GetDeviceResponse;
const GetDeviceDataResponse = models.GetDeviceDataResponse;
const AppResetPasswordResponse = models.AppResetPasswordResponse;
const DeleteRuleRequest = models.DeleteRuleRequest;
const ActivateRuleResponse = models.ActivateRuleResponse;
const UpdateRuleRequest = models.UpdateRuleRequest;
const DeviceSignature = models.DeviceSignature;
const AppGetDevicesRequest = models.AppGetDevicesRequest;
const AppGetDeviceDataResponse = models.AppGetDeviceDataResponse;
const GetTopicResponse = models.GetTopicResponse;
const DeactivateRuleResponse = models.DeactivateRuleResponse;
const IssueDeviceControlRequest = models.IssueDeviceControlRequest;
const GetDeviceStatisticsRequest = models.GetDeviceStatisticsRequest;
const ResetDeviceResponse = models.ResetDeviceResponse;
const GetDeviceLogResponse = models.GetDeviceLogResponse;
const AddRuleRequest = models.AddRuleRequest;
const ResetDeviceRequest = models.ResetDeviceRequest;
const ServiceAction = models.ServiceAction;
const DataTemplate = models.DataTemplate;
const DeleteTopicRequest = models.DeleteTopicRequest;
const AddProductResponse = models.AddProductResponse;
const UpdateProductResponse = models.UpdateProductResponse;
const DataHistoryEntry = models.DataHistoryEntry;
const AppGetDeviceResponse = models.AppGetDeviceResponse;
const UpdateRuleResponse = models.UpdateRuleResponse;
const AppDeviceDetail = models.AppDeviceDetail;
const GetDeviceStatisticsResponse = models.GetDeviceStatisticsResponse;
const UnassociateSubDeviceFromGatewayProductResponse = models.UnassociateSubDeviceFromGatewayProductResponse;
const Topic = models.Topic;
const AssociateSubDeviceToGatewayProductResponse = models.AssociateSubDeviceToGatewayProductResponse;
const GetProductRequest = models.GetProductRequest;
const AppGetTokenRequest = models.AppGetTokenRequest;
const GetRuleRequest = models.GetRuleRequest;
const DeleteProductRequest = models.DeleteProductRequest;
const AppGetUserRequest = models.AppGetUserRequest;
const GetProductsResponse = models.GetProductsResponse;
const AppGetDeviceRequest = models.AppGetDeviceRequest;
const GetDataHistoryRequest = models.GetDataHistoryRequest;
const AddTopicResponse = models.AddTopicResponse;
const AddProductRequest = models.AddProductRequest;
const ProductEntry = models.ProductEntry;
const GetRulesResponse = models.GetRulesResponse;
const DeleteDeviceRequest = models.DeleteDeviceRequest;
const AssociateSubDeviceToGatewayProductRequest = models.AssociateSubDeviceToGatewayProductRequest;
const GetDeviceSignaturesResponse = models.GetDeviceSignaturesResponse;
const RuleQuery = models.RuleQuery;
const AppUser = models.AppUser;
const BoolData = models.BoolData;
const PublishMsgRequest = models.PublishMsgRequest;
const GetProductsRequest = models.GetProductsRequest;
const AddTopicRequest = models.AddTopicRequest;
const AppGetDeviceStatusesRequest = models.AppGetDeviceStatusesRequest;
const DeviceLogEntry = models.DeviceLogEntry;
const GetDebugLogRequest = models.GetDebugLogRequest;
const GetDeviceRequest = models.GetDeviceRequest;
const GetDeviceDataRequest = models.GetDeviceDataRequest;
const DeactivateRuleRequest = models.DeactivateRuleRequest;
const GetTopicRequest = models.GetTopicRequest;
const GetDevicesResponse = models.GetDevicesResponse;
const NumberData = models.NumberData;
const GetDevicesRequest = models.GetDevicesRequest;
const AppGetTokenResponse = models.AppGetTokenResponse;
const GetProductResponse = models.GetProductResponse;
const AppAddUserRequest = models.AppAddUserRequest;
const AddRuleResponse = models.AddRuleResponse;
const AppDeleteDeviceResponse = models.AppDeleteDeviceResponse;
const AppIssueDeviceControlRequest = models.AppIssueDeviceControlRequest;
const DeviceStatus = models.DeviceStatus;
const DeleteProductResponse = models.DeleteProductResponse;
const AppGetUserResponse = models.AppGetUserResponse;
const AppUpdateUserRequest = models.AppUpdateUserRequest;
const GetDebugLogResponse = models.GetDebugLogResponse;
const AppUpdateUserResponse = models.AppUpdateUserResponse;
const Device = models.Device;
const GetRulesRequest = models.GetRulesRequest;
const Rule = models.Rule;
const IssueDeviceControlResponse = models.IssueDeviceControlResponse;
const GetDataHistoryResponse = models.GetDataHistoryResponse;
const Action = models.Action;
const PublishMsgResponse = models.PublishMsgResponse;
const AppGetDevicesResponse = models.AppGetDevicesResponse;
const CkafkaAction = models.CkafkaAction;
const AddDeviceRequest = models.AddDeviceRequest;
const UpdateProductRequest = models.UpdateProductRequest;
const DeleteRuleResponse = models.DeleteRuleResponse;
const GetDeviceSignaturesRequest = models.GetDeviceSignaturesRequest;
const GetRuleResponse = models.GetRuleResponse;
const AppUpdateDeviceResponse = models.AppUpdateDeviceResponse;
const Product = models.Product;
const DebugLogEntry = models.DebugLogEntry;
const GetDeviceStatusesRequest = models.GetDeviceStatusesRequest;
const GetDeviceStatusesResponse = models.GetDeviceStatusesResponse;
const UnassociateSubDeviceFromGatewayProductRequest = models.UnassociateSubDeviceFromGatewayProductRequest;
const AppDeleteDeviceRequest = models.AppDeleteDeviceRequest;
const StringData = models.StringData;
const AppGetDeviceStatusesResponse = models.AppGetDeviceStatusesResponse;
const GetTopicsResponse = models.GetTopicsResponse;
const AppGetDeviceDataRequest = models.AppGetDeviceDataRequest;
const AppAddUserResponse = models.AppAddUserResponse;
const DeviceEntry = models.DeviceEntry;
const GetDeviceLogRequest = models.GetDeviceLogRequest;
const AddDeviceResponse = models.AddDeviceResponse;
const ActivateRuleRequest = models.ActivateRuleRequest;
const AppResetPasswordRequest = models.AppResetPasswordRequest;
const DeleteTopicResponse = models.DeleteTopicResponse;
const AppDevice = models.AppDevice;
const GetTopicsRequest = models.GetTopicsRequest;
const DeviceStatData = models.DeviceStatData;
const EnumData = models.EnumData;
const DeleteDeviceResponse = models.DeleteDeviceResponse;
const AppSecureAddDeviceResponse = models.AppSecureAddDeviceResponse;
const AppSecureAddDeviceRequest = models.AppSecureAddDeviceRequest;
const AppIssueDeviceControlResponse = models.AppIssueDeviceControlResponse;
const TopicAction = models.TopicAction;


/**
 * iot client
 * @class
 */
class IotClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("iot.tencentcloudapi.com", "2018-01-23", credential, region, profile);
    }
    
    /**
     * 批量获取设备某一段时间范围的设备上报数据。该接口适用于使用高级版类型的产品
     * @param {GetDataHistoryRequest} req
     * @param {function(string, GetDataHistoryResponse):void} cb
     * @public
     */
    GetDataHistory(req, cb) {
        let resp = new GetDataHistoryResponse();
        this.request("GetDataHistory", req, resp, cb);
    }

    /**
     * 重置设备操作，将会为设备生成新的证书及清空最新数据，需谨慎操作。
     * @param {ResetDeviceRequest} req
     * @param {function(string, ResetDeviceResponse):void} cb
     * @public
     */
    ResetDevice(req, cb) {
        let resp = new ResetDeviceResponse();
        this.request("ResetDevice", req, resp, cb);
    }

    /**
     * 查询某段时间范围内产品的在线、激活设备数
     * @param {GetDeviceStatisticsRequest} req
     * @param {function(string, GetDeviceStatisticsResponse):void} cb
     * @public
     */
    GetDeviceStatistics(req, cb) {
        let resp = new GetDeviceStatisticsResponse();
        this.request("GetDeviceStatistics", req, resp, cb);
    }

    /**
     * 用户绑定设备，绑定后可以在APP端进行控制。绑定设备前需调用“获取设备绑定签名”接口
     * @param {AppSecureAddDeviceRequest} req
     * @param {function(string, AppSecureAddDeviceResponse):void} cb
     * @public
     */
    AppSecureAddDevice(req, cb) {
        let resp = new AppSecureAddDeviceResponse();
        this.request("AppSecureAddDevice", req, resp, cb);
    }

    /**
     * 提供下发控制指令到指定设备的能力，该接口适用于使用高级版类型的产品。
     * @param {IssueDeviceControlRequest} req
     * @param {function(string, IssueDeviceControlResponse):void} cb
     * @public
     */
    IssueDeviceControl(req, cb) {
        let resp = new IssueDeviceControlResponse();
        this.request("IssueDeviceControl", req, resp, cb);
    }

    /**
     * 获取设备的调试日志，用于定位问题
     * @param {GetDebugLogRequest} req
     * @param {function(string, GetDebugLogResponse):void} cb
     * @public
     */
    GetDebugLog(req, cb) {
        let resp = new GetDebugLogResponse();
        this.request("GetDebugLog", req, resp, cb);
    }

    /**
     * 禁用规则
     * @param {DeactivateRuleRequest} req
     * @param {function(string, DeactivateRuleResponse):void} cb
     * @public
     */
    DeactivateRule(req, cb) {
        let resp = new DeactivateRuleResponse();
        this.request("DeactivateRule", req, resp, cb);
    }

    /**
     * 提供分页查询某个产品Id下设备信息的能力。
     * @param {GetDevicesRequest} req
     * @param {function(string, GetDevicesResponse):void} cb
     * @public
     */
    GetDevices(req, cb) {
        let resp = new GetDevicesResponse();
        this.request("GetDevices", req, resp, cb);
    }

    /**
     * 新增Topic，用于设备或应用发布消息至该Topic或订阅该Topic的消息。
     * @param {AddTopicRequest} req
     * @param {function(string, AddTopicResponse):void} cb
     * @public
     */
    AddTopic(req, cb) {
        let resp = new AddTopicResponse();
        this.request("AddTopic", req, resp, cb);
    }

    /**
     * 获取绑定设备的上下线状态
     * @param {AppGetDeviceStatusesRequest} req
     * @param {function(string, AppGetDeviceStatusesResponse):void} cb
     * @public
     */
    AppGetDeviceStatuses(req, cb) {
        let resp = new AppGetDeviceStatusesResponse();
        this.request("AppGetDeviceStatuses", req, resp, cb);
    }

    /**
     * 获取用户在物联网套件所创建的所有产品信息。
     * @param {GetProductsRequest} req
     * @param {function(string, GetProductsResponse):void} cb
     * @public
     */
    GetProducts(req, cb) {
        let resp = new GetProductsResponse();
        this.request("GetProducts", req, resp, cb);
    }

    /**
     * 获取用户token
     * @param {AppGetTokenRequest} req
     * @param {function(string, AppGetTokenResponse):void} cb
     * @public
     */
    AppGetToken(req, cb) {
        let resp = new AppGetTokenResponse();
        this.request("AppGetToken", req, resp, cb);
    }

    /**
     * 修改用户信息
     * @param {AppUpdateUserRequest} req
     * @param {function(string, AppUpdateUserResponse):void} cb
     * @public
     */
    AppUpdateUser(req, cb) {
        let resp = new AppUpdateUserResponse();
        this.request("AppUpdateUser", req, resp, cb);
    }

    /**
     * 新增规则
     * @param {AddRuleRequest} req
     * @param {function(string, AddRuleResponse):void} cb
     * @public
     */
    AddRule(req, cb) {
        let resp = new AddRuleResponse();
        this.request("AddRule", req, resp, cb);
    }

    /**
     * 取消子设备产品与网关设备产品的关联
     * @param {UnassociateSubDeviceFromGatewayProductRequest} req
     * @param {function(string, UnassociateSubDeviceFromGatewayProductResponse):void} cb
     * @public
     */
    UnassociateSubDeviceFromGatewayProduct(req, cb) {
        let resp = new UnassociateSubDeviceFromGatewayProductResponse();
        this.request("UnassociateSubDeviceFromGatewayProduct", req, resp, cb);
    }

    /**
     * 获取设备绑定签名，用于用户绑定某个设备的应用场景
     * @param {GetDeviceSignaturesRequest} req
     * @param {function(string, GetDeviceSignaturesResponse):void} cb
     * @public
     */
    GetDeviceSignatures(req, cb) {
        let resp = new GetDeviceSignaturesResponse();
        this.request("GetDeviceSignatures", req, resp, cb);
    }

    /**
     * 删除规则
     * @param {DeleteRuleRequest} req
     * @param {function(string, DeleteRuleResponse):void} cb
     * @public
     */
    DeleteRule(req, cb) {
        let resp = new DeleteRuleResponse();
        this.request("DeleteRule", req, resp, cb);
    }

    /**
     * 本接口(AddProduct)用于创建、定义某款硬件产品。
     * @param {AddProductRequest} req
     * @param {function(string, AddProductResponse):void} cb
     * @public
     */
    AddProduct(req, cb) {
        let resp = new AddProductResponse();
        this.request("AddProduct", req, resp, cb);
    }

    /**
     * 提供在指定的产品Id下删除一个设备的能力。
     * @param {DeleteDeviceRequest} req
     * @param {function(string, DeleteDeviceResponse):void} cb
     * @public
     */
    DeleteDevice(req, cb) {
        let resp = new DeleteDeviceResponse();
        this.request("DeleteDevice", req, resp, cb);
    }

    /**
     * 提供向指定的Topic发布消息的能力，常用于向设备下发控制指令。该接口只适用于产品版本为“基础版”类型的产品，使用高级版的产品需使用“下发设备控制指令”接口
     * @param {PublishMsgRequest} req
     * @param {function(string, PublishMsgResponse):void} cb
     * @public
     */
    PublishMsg(req, cb) {
        let resp = new PublishMsgResponse();
        this.request("PublishMsg", req, resp, cb);
    }

    /**
     * 更新规则
     * @param {UpdateRuleRequest} req
     * @param {function(string, UpdateRuleResponse):void} cb
     * @public
     */
    UpdateRule(req, cb) {
        let resp = new UpdateRuleResponse();
        this.request("UpdateRule", req, resp, cb);
    }

    /**
     * 用户解除与设备的关联关系，解除后APP用户无法控制设备，获取设备数据
     * @param {AppDeleteDeviceRequest} req
     * @param {function(string, AppDeleteDeviceResponse):void} cb
     * @public
     */
    AppDeleteDevice(req, cb) {
        let resp = new AppDeleteDeviceResponse();
        this.request("AppDeleteDevice", req, resp, cb);
    }

    /**
     * 批量获取设备的当前状态，状态包括在线、离线或未激活状态。
     * @param {GetDeviceStatusesRequest} req
     * @param {function(string, GetDeviceStatusesResponse):void} cb
     * @public
     */
    GetDeviceStatuses(req, cb) {
        let resp = new GetDeviceStatusesResponse();
        this.request("GetDeviceStatuses", req, resp, cb);
    }

    /**
     * 获取转发规则列表
     * @param {GetRulesRequest} req
     * @param {function(string, GetRulesResponse):void} cb
     * @public
     */
    GetRules(req, cb) {
        let resp = new GetRulesResponse();
        this.request("GetRules", req, resp, cb);
    }

    /**
     * 删除用户指定的产品Id对应的信息。
     * @param {DeleteProductRequest} req
     * @param {function(string, DeleteProductResponse):void} cb
     * @public
     */
    DeleteProduct(req, cb) {
        let resp = new DeleteProductResponse();
        this.request("DeleteProduct", req, resp, cb);
    }

    /**
     * 获取用户信息
     * @param {AppGetUserRequest} req
     * @param {function(string, AppGetUserResponse):void} cb
     * @public
     */
    AppGetUser(req, cb) {
        let resp = new AppGetUserResponse();
        this.request("AppGetUser", req, resp, cb);
    }

    /**
     * 获取用户的绑定设备列表
     * @param {AppGetDevicesRequest} req
     * @param {function(string, AppGetDevicesResponse):void} cb
     * @public
     */
    AppGetDevices(req, cb) {
        let resp = new AppGetDevicesResponse();
        this.request("AppGetDevices", req, resp, cb);
    }

    /**
     * 为APP提供用户注册功能
     * @param {AppAddUserRequest} req
     * @param {function(string, AppAddUserResponse):void} cb
     * @public
     */
    AppAddUser(req, cb) {
        let resp = new AppAddUserResponse();
        this.request("AppAddUser", req, resp, cb);
    }

    /**
     * 提供修改产品信息及数据模板的能力。
     * @param {UpdateProductRequest} req
     * @param {function(string, UpdateProductResponse):void} cb
     * @public
     */
    UpdateProduct(req, cb) {
        let resp = new UpdateProductResponse();
        this.request("UpdateProduct", req, resp, cb);
    }

    /**
     * 用户通过APP控制设备
     * @param {AppIssueDeviceControlRequest} req
     * @param {function(string, AppIssueDeviceControlResponse):void} cb
     * @public
     */
    AppIssueDeviceControl(req, cb) {
        let resp = new AppIssueDeviceControlResponse();
        this.request("AppIssueDeviceControl", req, resp, cb);
    }

    /**
     * 获取Topic信息
     * @param {GetTopicRequest} req
     * @param {function(string, GetTopicResponse):void} cb
     * @public
     */
    GetTopic(req, cb) {
        let resp = new GetTopicResponse();
        this.request("GetTopic", req, resp, cb);
    }

    /**
     * 获取绑定设备数据，用于实时展示设备的最新数据
     * @param {AppGetDeviceDataRequest} req
     * @param {function(string, AppGetDeviceDataResponse):void} cb
     * @public
     */
    AppGetDeviceData(req, cb) {
        let resp = new AppGetDeviceDataResponse();
        this.request("AppGetDeviceData", req, resp, cb);
    }

    /**
     * 提供查询某个设备详细信息的能力。
     * @param {GetDeviceRequest} req
     * @param {function(string, GetDeviceResponse):void} cb
     * @public
     */
    GetDevice(req, cb) {
        let resp = new GetDeviceResponse();
        this.request("GetDevice", req, resp, cb);
    }

    /**
     * 获取绑定设备的基本信息与数据模板定义
     * @param {AppGetDeviceRequest} req
     * @param {function(string, AppGetDeviceResponse):void} cb
     * @public
     */
    AppGetDevice(req, cb) {
        let resp = new AppGetDeviceResponse();
        this.request("AppGetDevice", req, resp, cb);
    }

    /**
     * 获取某个设备当前上报到云端的数据，该接口适用于使用数据模板协议的产品。
     * @param {GetDeviceDataRequest} req
     * @param {function(string, GetDeviceDataResponse):void} cb
     * @public
     */
    GetDeviceData(req, cb) {
        let resp = new GetDeviceDataResponse();
        this.request("GetDeviceData", req, resp, cb);
    }

    /**
     * 获取转发规则信息
     * @param {GetRuleRequest} req
     * @param {function(string, GetRuleResponse):void} cb
     * @public
     */
    GetRule(req, cb) {
        let resp = new GetRuleResponse();
        this.request("GetRule", req, resp, cb);
    }

    /**
     * 批量获取设备与云端的详细通信日志，该接口适用于使用高级版类型的产品。
     * @param {GetDeviceLogRequest} req
     * @param {function(string, GetDeviceLogResponse):void} cb
     * @public
     */
    GetDeviceLog(req, cb) {
        let resp = new GetDeviceLogResponse();
        this.request("GetDeviceLog", req, resp, cb);
    }

    /**
     * 获取Topic列表
     * @param {GetTopicsRequest} req
     * @param {function(string, GetTopicsResponse):void} cb
     * @public
     */
    GetTopics(req, cb) {
        let resp = new GetTopicsResponse();
        this.request("GetTopics", req, resp, cb);
    }

    /**
     * 提供在指定的产品Id下创建一个设备的能力，生成设备名称与设备秘钥。
     * @param {AddDeviceRequest} req
     * @param {function(string, AddDeviceResponse):void} cb
     * @public
     */
    AddDevice(req, cb) {
        let resp = new AddDeviceResponse();
        this.request("AddDevice", req, resp, cb);
    }

    /**
     * 获取产品定义的详细信息，包括产品名称、产品描述，鉴权模式等信息。
     * @param {GetProductRequest} req
     * @param {function(string, GetProductResponse):void} cb
     * @public
     */
    GetProduct(req, cb) {
        let resp = new GetProductResponse();
        this.request("GetProduct", req, resp, cb);
    }

    /**
     * 重置APP用户密码
     * @param {AppResetPasswordRequest} req
     * @param {function(string, AppResetPasswordResponse):void} cb
     * @public
     */
    AppResetPassword(req, cb) {
        let resp = new AppResetPasswordResponse();
        this.request("AppResetPassword", req, resp, cb);
    }

    /**
     * 启用规则
     * @param {ActivateRuleRequest} req
     * @param {function(string, ActivateRuleResponse):void} cb
     * @public
     */
    ActivateRule(req, cb) {
        let resp = new ActivateRuleResponse();
        this.request("ActivateRule", req, resp, cb);
    }

    /**
     * 关联子设备产品和网关产品
     * @param {AssociateSubDeviceToGatewayProductRequest} req
     * @param {function(string, AssociateSubDeviceToGatewayProductResponse):void} cb
     * @public
     */
    AssociateSubDeviceToGatewayProduct(req, cb) {
        let resp = new AssociateSubDeviceToGatewayProductResponse();
        this.request("AssociateSubDeviceToGatewayProduct", req, resp, cb);
    }

    /**
     * 删除Topic
     * @param {DeleteTopicRequest} req
     * @param {function(string, DeleteTopicResponse):void} cb
     * @public
     */
    DeleteTopic(req, cb) {
        let resp = new DeleteTopicResponse();
        this.request("DeleteTopic", req, resp, cb);
    }

    /**
     * 修改设备别名，便于用户个性化定义设备的名称
     * @param {AppUpdateDeviceRequest} req
     * @param {function(string, AppUpdateDeviceResponse):void} cb
     * @public
     */
    AppUpdateDevice(req, cb) {
        let resp = new AppUpdateDeviceResponse();
        this.request("AppUpdateDevice", req, resp, cb);
    }


}
module.exports = IotClient;
