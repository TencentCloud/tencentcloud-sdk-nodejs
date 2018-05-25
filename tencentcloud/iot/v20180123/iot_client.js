const models = require("./models");
const AbstractClient = require('../../common/abstract_client')
const DeleteProductRequest = models.DeleteProductRequest;
const GetDeviceResponse = models.GetDeviceResponse;
const AppAddUserRequest = models.AppAddUserRequest;
const GetDeviceDataResponse = models.GetDeviceDataResponse;
const DeleteRuleResponse = models.DeleteRuleResponse;
const GetDataHistoryRequest = models.GetDataHistoryRequest;
const AddTopicResponse = models.AddTopicResponse;
const AddProductRequest = models.AddProductRequest;
const GetProductResponse = models.GetProductResponse;
const GetDeviceLogResponse = models.GetDeviceLogResponse;
const GetRuleResponse = models.GetRuleResponse;
const GetTopicResponse = models.GetTopicResponse;
const GetProductsResponse = models.GetProductsResponse;
const DeleteRuleRequest = models.DeleteRuleRequest;
const ActivateRuleResponse = models.ActivateRuleResponse;
const UpdateRuleRequest = models.UpdateRuleRequest;
const RuleQuery = models.RuleQuery;
const AppUser = models.AppUser;
const GetRulesResponse = models.GetRulesResponse;
const DeleteDeviceRequest = models.DeleteDeviceRequest;
const DeleteProductResponse = models.DeleteProductResponse;
const DeactivateRuleResponse = models.DeactivateRuleResponse;
const IssueDeviceControlRequest = models.IssueDeviceControlRequest;
const PublishMsgResponse = models.PublishMsgResponse;
const ResetDeviceResponse = models.ResetDeviceResponse;
const GetUserResponse = models.GetUserResponse;
const AddRuleResponse = models.AddRuleResponse;
const GetDeviceStatusesRequest = models.GetDeviceStatusesRequest;
const AddRuleRequest = models.AddRuleRequest;
const GetDeviceStatusesResponse = models.GetDeviceStatusesResponse;
const ResetDeviceRequest = models.ResetDeviceRequest;
const GetUserRequest = models.GetUserRequest;
const Device = models.Device;
const AddUserResponse = models.AddUserResponse;
const DeleteTopicRequest = models.DeleteTopicRequest;
const AddProductResponse = models.AddProductResponse;
const GetDataHistoryResponse = models.GetDataHistoryResponse;
const User = models.User;
const UpdateProductResponse = models.UpdateProductResponse;
const GetRulesRequest = models.GetRulesRequest;
const GetTopicsResponse = models.GetTopicsResponse;
const AddUserRequest = models.AddUserRequest;
const PublishMsgRequest = models.PublishMsgRequest;
const DeviceStatus = models.DeviceStatus;
const GetProductsRequest = models.GetProductsRequest;
const AppAddUserResponse = models.AppAddUserResponse;
const Product = models.Product;
const AddTopicRequest = models.AddTopicRequest;
const Rule = models.Rule;
const Object = models.Object;
const UpdateProductRequest = models.UpdateProductRequest;
const GetDeviceLogRequest = models.GetDeviceLogRequest;
const IssueDeviceControlResponse = models.IssueDeviceControlResponse;
const AddDeviceResponse = models.AddDeviceResponse;
const GetDeviceRequest = models.GetDeviceRequest;
const ActivateRuleRequest = models.ActivateRuleRequest;
const GetDeviceDataRequest = models.GetDeviceDataRequest;
const DeactivateRuleRequest = models.DeactivateRuleRequest;
const DeleteTopicResponse = models.DeleteTopicResponse;
const GetTopicRequest = models.GetTopicRequest;
const GetDevicesResponse = models.GetDevicesResponse;
const DeleteDeviceResponse = models.DeleteDeviceResponse;
const UpdateRuleResponse = models.UpdateRuleResponse;
const Topic = models.Topic;
const GetDevicesRequest = models.GetDevicesRequest;
const GetProductRequest = models.GetProductRequest;
const AddDeviceRequest = models.AddDeviceRequest;
const GetRuleRequest = models.GetRuleRequest;
const GetTopicsRequest = models.GetTopicsRequest;


/**
 * iot client
 * @class
 */
class IotClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("iot.tencentcloudapi.com", "2018-01-23", credential, region, profile);
    }
    
    /**
     * 批量获取设备某一段时间范围的设备上报数据。该接口只允许使用数据模板类型的产品通过REST API方式同步设备上报数据至用户的应用系统。
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
     * 注册用户
     * @param {AddUserRequest} req
     * @param {function(string, AddUserResponse):void} cb
     * @public
     */
    AddUser(req, cb) {
        let resp = new AddUserResponse();
        this.request("AddUser", req, resp, cb);
    }

    /**
     * 提供下发控制指令到指定设备的能力，该接口适用于使用数据模板类型的产品。
     * @param {IssueDeviceControlRequest} req
     * @param {function(string, IssueDeviceControlResponse):void} cb
     * @public
     */
    IssueDeviceControl(req, cb) {
        let resp = new IssueDeviceControlResponse();
        this.request("IssueDeviceControl", req, resp, cb);
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
     * 获取用户信息
     * @param {GetUserRequest} req
     * @param {function(string, GetUserResponse):void} cb
     * @public
     */
    GetUser(req, cb) {
        let resp = new GetUserResponse();
        this.request("GetUser", req, resp, cb);
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
     * 提供向指定的Topic发布消息的能力，常用于向设备下发控制指令；该接口只适用于数据协议为“自定义”类型的产品，使用数据模板类型的产品需使用IssueDeviceControl接口
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
     * 注册应用用户
     * @param {AppAddUserRequest} req
     * @param {function(string, AppAddUserResponse):void} cb
     * @public
     */
    AppAddUser(req, cb) {
        let resp = new AppAddUserResponse();
        this.request("AppAddUser", req, resp, cb);
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
     * 批量获取设备与云端的详细通信日志，该接口适用于使用数据模板类型的产品。
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
     * 删除Topic
     * @param {DeleteTopicRequest} req
     * @param {function(string, DeleteTopicResponse):void} cb
     * @public
     */
    DeleteTopic(req, cb) {
        let resp = new DeleteTopicResponse();
        this.request("DeleteTopic", req, resp, cb);
    }


}
module.exports = IotClient;
