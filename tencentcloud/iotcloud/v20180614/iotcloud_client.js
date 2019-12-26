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
const PublishMessageRequest = models.PublishMessageRequest;
const DeleteProductRequest = models.DeleteProductRequest;
const EnableTopicRuleResponse = models.EnableTopicRuleResponse;
const UpdateDeviceShadowResponse = models.UpdateDeviceShadowResponse;
const DescribeTasksRequest = models.DescribeTasksRequest;
const DisableTopicRuleResponse = models.DisableTopicRuleResponse;
const UpdateDeviceAvailableStateRequest = models.UpdateDeviceAvailableStateRequest;
const DeviceLabel = models.DeviceLabel;
const ReplaceTopicRuleRequest = models.ReplaceTopicRuleRequest;
const DeleteTopicRuleRequest = models.DeleteTopicRuleRequest;
const DescribeMultiDevicesRequest = models.DescribeMultiDevicesRequest;
const UpdateDeviceAvailableStateResponse = models.UpdateDeviceAvailableStateResponse;
const MultiDevicesInfo = models.MultiDevicesInfo;
const PublishAsDeviceRequest = models.PublishAsDeviceRequest;
const DescribeDeviceClientKeyRequest = models.DescribeDeviceClientKeyRequest;
const DescribeTaskResponse = models.DescribeTaskResponse;
const CancelTaskRequest = models.CancelTaskRequest;
const PublishToDeviceResponse = models.PublishToDeviceResponse;
const CreateTaskResponse = models.CreateTaskResponse;
const BatchPublishMessage = models.BatchPublishMessage;
const BatchUpdateShadow = models.BatchUpdateShadow;
const BindDevicesRequest = models.BindDevicesRequest;
const UnbindDevicesRequest = models.UnbindDevicesRequest;
const DeleteDeviceRequest = models.DeleteDeviceRequest;
const DeleteProductResponse = models.DeleteProductResponse;
const ResetDeviceStateResponse = models.ResetDeviceStateResponse;
const DescribeMultiDevTaskResponse = models.DescribeMultiDevTaskResponse;
const TopicRulePayload = models.TopicRulePayload;
const UpdateTopicPolicyRequest = models.UpdateTopicPolicyRequest;
const ProductInfo = models.ProductInfo;
const DescribeDevicesResponse = models.DescribeDevicesResponse;
const DeviceTag = models.DeviceTag;
const DeleteTopicRuleResponse = models.DeleteTopicRuleResponse;
const ProductProperties = models.ProductProperties;
const DeleteLoraDeviceResponse = models.DeleteLoraDeviceResponse;
const DescribeDeviceRequest = models.DescribeDeviceRequest;
const CreateLoraDeviceRequest = models.CreateLoraDeviceRequest;
const DescribeTaskRequest = models.DescribeTaskRequest;
const Task = models.Task;
const ResetDeviceStateRequest = models.ResetDeviceStateRequest;
const CreateTopicPolicyRequest = models.CreateTopicPolicyRequest;
const PublishMessageResponse = models.PublishMessageResponse;
const PublishToDeviceRequest = models.PublishToDeviceRequest;
const ProductMetadata = models.ProductMetadata;
const DescribeLoraDeviceResponse = models.DescribeLoraDeviceResponse;
const DescribeTasksResponse = models.DescribeTasksResponse;
const BindDevicesResponse = models.BindDevicesResponse;
const CreateProductResponse = models.CreateProductResponse;
const DescribeProductsRequest = models.DescribeProductsRequest;
const DescribeDevicesRequest = models.DescribeDevicesRequest;
const BrokerSubscribe = models.BrokerSubscribe;
const CreateTaskRequest = models.CreateTaskRequest;
const DisableTopicRuleRequest = models.DisableTopicRuleRequest;
const CreateTopicPolicyResponse = models.CreateTopicPolicyResponse;
const DescribeMultiDevTaskRequest = models.DescribeMultiDevTaskRequest;
const CreateTopicRuleResponse = models.CreateTopicRuleResponse;
const CancelTaskResponse = models.CancelTaskResponse;
const CreateDeviceResponse = models.CreateDeviceResponse;
const CreateTopicRuleRequest = models.CreateTopicRuleRequest;
const DeleteLoraDeviceRequest = models.DeleteLoraDeviceRequest;
const CreateDeviceRequest = models.CreateDeviceRequest;
const DescribeProductsResponse = models.DescribeProductsResponse;
const UpdateDeviceShadowRequest = models.UpdateDeviceShadowRequest;
const CreateProductRequest = models.CreateProductRequest;
const Attribute = models.Attribute;
const DeleteDeviceResponse = models.DeleteDeviceResponse;
const CreateLoraDeviceResponse = models.CreateLoraDeviceResponse;
const DeviceInfo = models.DeviceInfo;
const CreateMultiDeviceResponse = models.CreateMultiDeviceResponse;
const ReplaceTopicRuleResponse = models.ReplaceTopicRuleResponse;
const DescribeLoraDeviceRequest = models.DescribeLoraDeviceRequest;
const UnbindDevicesResponse = models.UnbindDevicesResponse;
const DescribeDeviceShadowResponse = models.DescribeDeviceShadowResponse;
const DescribeDeviceClientKeyResponse = models.DescribeDeviceClientKeyResponse;
const PublishAsDeviceResponse = models.PublishAsDeviceResponse;
const CreateMultiDeviceRequest = models.CreateMultiDeviceRequest;
const EnableTopicRuleRequest = models.EnableTopicRuleRequest;
const DescribeDeviceResponse = models.DescribeDeviceResponse;
const DescribeDeviceShadowRequest = models.DescribeDeviceShadowRequest;
const DescribeMultiDevicesResponse = models.DescribeMultiDevicesResponse;
const UpdateTopicPolicyResponse = models.UpdateTopicPolicyResponse;
const TaskInfo = models.TaskInfo;


/**
 * iotcloud client
 * @class
 */
class IotcloudClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("iotcloud.tencentcloudapi.com", "2018-06-14", credential, region, profile);
    }
    
    /**
     * 本接口（CreateTask）用于创建一个批量任务。目前此接口可以创建批量更新影子以及批量下发消息的任务 
     * @param {CreateTaskRequest} req
     * @param {function(string, CreateTaskResponse):void} cb
     * @public
     */
    CreateTask(req, cb) {
        let resp = new CreateTaskResponse();
        this.request("CreateTask", req, resp, cb);
    }

    /**
     * 本接口（ReplaceTopicRule）用于修改替换规则
     * @param {ReplaceTopicRuleRequest} req
     * @param {function(string, ReplaceTopicRuleResponse):void} cb
     * @public
     */
    ReplaceTopicRule(req, cb) {
        let resp = new ReplaceTopicRuleResponse();
        this.request("ReplaceTopicRule", req, resp, cb);
    }

    /**
     * 删除lora类型的设备
     * @param {DeleteLoraDeviceRequest} req
     * @param {function(string, DeleteLoraDeviceResponse):void} cb
     * @public
     */
    DeleteLoraDevice(req, cb) {
        let resp = new DeleteLoraDeviceResponse();
        this.request("DeleteLoraDevice", req, resp, cb);
    }

    /**
     * 服务器端下发消息给lora类型的设备
     * @param {PublishToDeviceRequest} req
     * @param {function(string, PublishToDeviceResponse):void} cb
     * @public
     */
    PublishToDevice(req, cb) {
        let resp = new PublishToDeviceResponse();
        this.request("PublishToDevice", req, resp, cb);
    }

    /**
     * 本接口（DescribeDeviceShadow）用于查询虚拟设备信息。 
     * @param {DescribeDeviceShadowRequest} req
     * @param {function(string, DescribeDeviceShadowResponse):void} cb
     * @public
     */
    DescribeDeviceShadow(req, cb) {
        let resp = new DescribeDeviceShadowResponse();
        this.request("DescribeDeviceShadow", req, resp, cb);
    }

    /**
     * 本接口（DescribeDevice）用于查看设备信息 
     * @param {DescribeDeviceRequest} req
     * @param {function(string, DescribeDeviceResponse):void} cb
     * @public
     */
    DescribeDevice(req, cb) {
        let resp = new DescribeDeviceResponse();
        this.request("DescribeDevice", req, resp, cb);
    }

    /**
     * 本接口（CreateMultiDevice）用于批量创建物联云设备。
     * @param {CreateMultiDeviceRequest} req
     * @param {function(string, CreateMultiDeviceResponse):void} cb
     * @public
     */
    CreateMultiDevice(req, cb) {
        let resp = new CreateMultiDeviceResponse();
        this.request("CreateMultiDevice", req, resp, cb);
    }

    /**
     * 本接口（CreateTopicRule）用于创建一个规则
     * @param {CreateTopicRuleRequest} req
     * @param {function(string, CreateTopicRuleResponse):void} cb
     * @public
     */
    CreateTopicRule(req, cb) {
        let resp = new CreateTopicRuleResponse();
        this.request("CreateTopicRule", req, resp, cb);
    }

    /**
     * 本接口（CancelTask）用于取消一个未被调度的任务。 
     * @param {CancelTaskRequest} req
     * @param {function(string, CancelTaskResponse):void} cb
     * @public
     */
    CancelTask(req, cb) {
        let resp = new CancelTaskResponse();
        this.request("CancelTask", req, resp, cb);
    }

    /**
     * 本接口（UpdateDeviceShadow）用于更新虚拟设备信息。
     * @param {UpdateDeviceShadowRequest} req
     * @param {function(string, UpdateDeviceShadowResponse):void} cb
     * @public
     */
    UpdateDeviceShadow(req, cb) {
        let resp = new UpdateDeviceShadowResponse();
        this.request("UpdateDeviceShadow", req, resp, cb);
    }

    /**
     * 本接口（CreateTopicPolicy）用于创建一个Topic 
     * @param {CreateTopicPolicyRequest} req
     * @param {function(string, CreateTopicPolicyResponse):void} cb
     * @public
     */
    CreateTopicPolicy(req, cb) {
        let resp = new CreateTopicPolicyResponse();
        this.request("CreateTopicPolicy", req, resp, cb);
    }

    /**
     * 本接口（CreateProduct）用于创建一个新的物联网通信产品 
     * @param {CreateProductRequest} req
     * @param {function(string, CreateProductResponse):void} cb
     * @public
     */
    CreateProduct(req, cb) {
        let resp = new CreateProductResponse();
        this.request("CreateProduct", req, resp, cb);
    }

    /**
     * 获取证书认证类型设备的私钥，刚生成或者重置设备后仅可调用一次
     * @param {DescribeDeviceClientKeyRequest} req
     * @param {function(string, DescribeDeviceClientKeyResponse):void} cb
     * @public
     */
    DescribeDeviceClientKey(req, cb) {
        let resp = new DescribeDeviceClientKeyResponse();
        this.request("DescribeDeviceClientKey", req, resp, cb);
    }

    /**
     * 本接口（DescribeProducts）用于列出产品列表。 
     * @param {DescribeProductsRequest} req
     * @param {function(string, DescribeProductsResponse):void} cb
     * @public
     */
    DescribeProducts(req, cb) {
        let resp = new DescribeProductsResponse();
        this.request("DescribeProducts", req, resp, cb);
    }

    /**
     * 获取lora类型设备的详细信息
     * @param {DescribeLoraDeviceRequest} req
     * @param {function(string, DescribeLoraDeviceResponse):void} cb
     * @public
     */
    DescribeLoraDevice(req, cb) {
        let resp = new DescribeLoraDeviceResponse();
        this.request("DescribeLoraDevice", req, resp, cb);
    }

    /**
     * 本接口（DescribeTask）用于查询一个已创建任务的详情，任务保留一个月 
     * @param {DescribeTaskRequest} req
     * @param {function(string, DescribeTaskResponse):void} cb
     * @public
     */
    DescribeTask(req, cb) {
        let resp = new DescribeTaskResponse();
        this.request("DescribeTask", req, resp, cb);
    }

    /**
     * 本接口（DeleteDevice）用于删除物联网通信设备。 
     * @param {DeleteDeviceRequest} req
     * @param {function(string, DeleteDeviceResponse):void} cb
     * @public
     */
    DeleteDevice(req, cb) {
        let resp = new DeleteDeviceResponse();
        this.request("DeleteDevice", req, resp, cb);
    }

    /**
     * 本接口（CreateDevice）用于新建一个物联网通信设备。 
     * @param {CreateDeviceRequest} req
     * @param {function(string, CreateDeviceResponse):void} cb
     * @public
     */
    CreateDevice(req, cb) {
        let resp = new CreateDeviceResponse();
        this.request("CreateDevice", req, resp, cb);
    }

    /**
     * 本接口（PublishMessage）用于向某个主题发消息。 
     * @param {PublishMessageRequest} req
     * @param {function(string, PublishMessageResponse):void} cb
     * @public
     */
    PublishMessage(req, cb) {
        let resp = new PublishMessageResponse();
        this.request("PublishMessage", req, resp, cb);
    }

    /**
     * 本接口（DeleteProduct）用于删除一个物联网通信产品
     * @param {DeleteProductRequest} req
     * @param {function(string, DeleteProductResponse):void} cb
     * @public
     */
    DeleteProduct(req, cb) {
        let resp = new DeleteProductResponse();
        this.request("DeleteProduct", req, resp, cb);
    }

    /**
     * 重置设备的连接状态 
     * @param {ResetDeviceStateRequest} req
     * @param {function(string, ResetDeviceStateResponse):void} cb
     * @public
     */
    ResetDeviceState(req, cb) {
        let resp = new ResetDeviceStateResponse();
        this.request("ResetDeviceState", req, resp, cb);
    }

    /**
     * 本接口（DescribeTasks）用于查询已创建的任务列表，任务保留一个月 
     * @param {DescribeTasksRequest} req
     * @param {function(string, DescribeTasksResponse):void} cb
     * @public
     */
    DescribeTasks(req, cb) {
        let resp = new DescribeTasksResponse();
        this.request("DescribeTasks", req, resp, cb);
    }

    /**
     * 本接口（DescribeMultiDevices）用于查询批量创建设备的执行结果。
     * @param {DescribeMultiDevicesRequest} req
     * @param {function(string, DescribeMultiDevicesResponse):void} cb
     * @public
     */
    DescribeMultiDevices(req, cb) {
        let resp = new DescribeMultiDevicesResponse();
        this.request("DescribeMultiDevices", req, resp, cb);
    }

    /**
     * 启用或者禁用设备
     * @param {UpdateDeviceAvailableStateRequest} req
     * @param {function(string, UpdateDeviceAvailableStateResponse):void} cb
     * @public
     */
    UpdateDeviceAvailableState(req, cb) {
        let resp = new UpdateDeviceAvailableStateResponse();
        this.request("UpdateDeviceAvailableState", req, resp, cb);
    }

    /**
     * 模拟lora类型的设备端向服务器端发送消息
     * @param {PublishAsDeviceRequest} req
     * @param {function(string, PublishAsDeviceResponse):void} cb
     * @public
     */
    PublishAsDevice(req, cb) {
        let resp = new PublishAsDeviceResponse();
        this.request("PublishAsDevice", req, resp, cb);
    }

    /**
     * 创建lora类型的设备
     * @param {CreateLoraDeviceRequest} req
     * @param {function(string, CreateLoraDeviceResponse):void} cb
     * @public
     */
    CreateLoraDevice(req, cb) {
        let resp = new CreateLoraDeviceResponse();
        this.request("CreateLoraDevice", req, resp, cb);
    }

    /**
     * 本接口（BindDevices）用于网关设备批量绑定子设备
     * @param {BindDevicesRequest} req
     * @param {function(string, BindDevicesResponse):void} cb
     * @public
     */
    BindDevices(req, cb) {
        let resp = new BindDevicesResponse();
        this.request("BindDevices", req, resp, cb);
    }

    /**
     * 本接口（UpdateTopicPolicy）用于更新Topic信息
     * @param {UpdateTopicPolicyRequest} req
     * @param {function(string, UpdateTopicPolicyResponse):void} cb
     * @public
     */
    UpdateTopicPolicy(req, cb) {
        let resp = new UpdateTopicPolicyResponse();
        this.request("UpdateTopicPolicy", req, resp, cb);
    }

    /**
     * 本接口（UnbindDevices）用于网关设备批量解绑子设备
     * @param {UnbindDevicesRequest} req
     * @param {function(string, UnbindDevicesResponse):void} cb
     * @public
     */
    UnbindDevices(req, cb) {
        let resp = new UnbindDevicesResponse();
        this.request("UnbindDevices", req, resp, cb);
    }

    /**
     * 本接口（DescribeDevices）用于查询物联网通信设备的设备列表。 
     * @param {DescribeDevicesRequest} req
     * @param {function(string, DescribeDevicesResponse):void} cb
     * @public
     */
    DescribeDevices(req, cb) {
        let resp = new DescribeDevicesResponse();
        this.request("DescribeDevices", req, resp, cb);
    }

    /**
     * 本接口（DisableTopicRule）用于禁用规则
     * @param {DisableTopicRuleRequest} req
     * @param {function(string, DisableTopicRuleResponse):void} cb
     * @public
     */
    DisableTopicRule(req, cb) {
        let resp = new DisableTopicRuleResponse();
        this.request("DisableTopicRule", req, resp, cb);
    }

    /**
     * 本接口（DescribeMultiDevTask）用于查询批量创建设备任务的执行状态。
     * @param {DescribeMultiDevTaskRequest} req
     * @param {function(string, DescribeMultiDevTaskResponse):void} cb
     * @public
     */
    DescribeMultiDevTask(req, cb) {
        let resp = new DescribeMultiDevTaskResponse();
        this.request("DescribeMultiDevTask", req, resp, cb);
    }

    /**
     * 本接口（EnableTopicRule）用于启用规则
     * @param {EnableTopicRuleRequest} req
     * @param {function(string, EnableTopicRuleResponse):void} cb
     * @public
     */
    EnableTopicRule(req, cb) {
        let resp = new EnableTopicRuleResponse();
        this.request("EnableTopicRule", req, resp, cb);
    }

    /**
     * 本接口（DeleteTopicRule）用于删除规则
     * @param {DeleteTopicRuleRequest} req
     * @param {function(string, DeleteTopicRuleResponse):void} cb
     * @public
     */
    DeleteTopicRule(req, cb) {
        let resp = new DeleteTopicRuleResponse();
        this.request("DeleteTopicRule", req, resp, cb);
    }


}
module.exports = IotcloudClient;
