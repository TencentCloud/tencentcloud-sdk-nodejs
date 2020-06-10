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
const UnbindDevicesRequest = models.UnbindDevicesRequest;
const BindDevicesRequest = models.BindDevicesRequest;
const DescribeProductsRequest = models.DescribeProductsRequest;
const DescribeDevicesResponse = models.DescribeDevicesResponse;
const ProductInfo = models.ProductInfo;
const Task = models.Task;
const EnableTopicRuleResponse = models.EnableTopicRuleResponse;
const DescribeTasksResponse = models.DescribeTasksResponse;
const UpdateDeviceShadowRequest = models.UpdateDeviceShadowRequest;
const DescribeMultiDevTaskRequest = models.DescribeMultiDevTaskRequest;
const DescribeProductsResponse = models.DescribeProductsResponse;
const DescribeDeviceShadowResponse = models.DescribeDeviceShadowResponse;
const CreateMultiDeviceResponse = models.CreateMultiDeviceResponse;
const ProductProperties = models.ProductProperties;
const UpdateTopicPolicyResponse = models.UpdateTopicPolicyResponse;
const TaskInfo = models.TaskInfo;
const DeleteProductRequest = models.DeleteProductRequest;
const DescribeTasksRequest = models.DescribeTasksRequest;
const ReplaceTopicRuleRequest = models.ReplaceTopicRuleRequest;
const MultiDevicesInfo = models.MultiDevicesInfo;
const ReplaceTopicRuleResponse = models.ReplaceTopicRuleResponse;
const DescribeDeviceClientKeyRequest = models.DescribeDeviceClientKeyRequest;
const UpdateTopicPolicyRequest = models.UpdateTopicPolicyRequest;
const BatchUpdateShadow = models.BatchUpdateShadow;
const DeleteDeviceRequest = models.DeleteDeviceRequest;
const CreateMultiDevicesTaskRequest = models.CreateMultiDevicesTaskRequest;
const CreateLoraDeviceRequest = models.CreateLoraDeviceRequest;
const CreateProductResponse = models.CreateProductResponse;
const DeleteLoraDeviceResponse = models.DeleteLoraDeviceResponse;
const CreateTaskRequest = models.CreateTaskRequest;
const TopicRulePayload = models.TopicRulePayload;
const DescribeMultiDevicesResponse = models.DescribeMultiDevicesResponse;
const CreateDeviceResponse = models.CreateDeviceResponse;
const DeleteLoraDeviceRequest = models.DeleteLoraDeviceRequest;
const CreateDeviceRequest = models.CreateDeviceRequest;
const DescribeProductTaskRequest = models.DescribeProductTaskRequest;
const CreateProductRequest = models.CreateProductRequest;
const DisableTopicRuleResponse = models.DisableTopicRuleResponse;
const BrokerSubscribe = models.BrokerSubscribe;
const DescribeProductTaskResponse = models.DescribeProductTaskResponse;
const DescribeDeviceResponse = models.DescribeDeviceResponse;
const PublishMessageRequest = models.PublishMessageRequest;
const DeviceLabel = models.DeviceLabel;
const UpdateDeviceAvailableStateResponse = models.UpdateDeviceAvailableStateResponse;
const CancelTaskRequest = models.CancelTaskRequest;
const UpdateDeviceAvailableStateRequest = models.UpdateDeviceAvailableStateRequest;
const DeleteProductResponse = models.DeleteProductResponse;
const CreateTopicPolicyResponse = models.CreateTopicPolicyResponse;
const PublishToDeviceRequest = models.PublishToDeviceRequest;
const DeleteTopicRuleResponse = models.DeleteTopicRuleResponse;
const DescribeDeviceRequest = models.DescribeDeviceRequest;
const CreateMultiDevicesTaskResponse = models.CreateMultiDevicesTaskResponse;
const CreateTopicPolicyRequest = models.CreateTopicPolicyRequest;
const ProductMetadata = models.ProductMetadata;
const DescribeLoraDeviceResponse = models.DescribeLoraDeviceResponse;
const ProductTaskInfo = models.ProductTaskInfo;
const CancelTaskResponse = models.CancelTaskResponse;
const Attribute = models.Attribute;
const CreateLoraDeviceResponse = models.CreateLoraDeviceResponse;
const DeleteTopicRuleRequest = models.DeleteTopicRuleRequest;
const ResetDeviceStateRequest = models.ResetDeviceStateRequest;
const CreateMultiDeviceRequest = models.CreateMultiDeviceRequest;
const PublishToDeviceResponse = models.PublishToDeviceResponse;
const DescribeDeviceShadowRequest = models.DescribeDeviceShadowRequest;
const UnbindDevicesResponse = models.UnbindDevicesResponse;
const CreateTaskFileUrlResponse = models.CreateTaskFileUrlResponse;
const DescribeMultiDevicesRequest = models.DescribeMultiDevicesRequest;
const CreateTaskFileUrlRequest = models.CreateTaskFileUrlRequest;
const UpdateDeviceShadowResponse = models.UpdateDeviceShadowResponse;
const DescribeTaskResponse = models.DescribeTaskResponse;
const CreateTaskResponse = models.CreateTaskResponse;
const BatchPublishMessage = models.BatchPublishMessage;
const DescribeMultiDevTaskResponse = models.DescribeMultiDevTaskResponse;
const DescribeProductTasksRequest = models.DescribeProductTasksRequest;
const DeviceTag = models.DeviceTag;
const DescribeLoraDeviceRequest = models.DescribeLoraDeviceRequest;
const DescribeTaskRequest = models.DescribeTaskRequest;
const PublishMessageResponse = models.PublishMessageResponse;
const BindDevicesResponse = models.BindDevicesResponse;
const ResetDeviceResult = models.ResetDeviceResult;
const DescribeDevicesRequest = models.DescribeDevicesRequest;
const DescribeDeviceClientKeyResponse = models.DescribeDeviceClientKeyResponse;
const DisableTopicRuleRequest = models.DisableTopicRuleRequest;
const ResetDeviceStateResponse = models.ResetDeviceStateResponse;
const CreateTopicRuleResponse = models.CreateTopicRuleResponse;
const CreateTopicRuleRequest = models.CreateTopicRuleRequest;
const PublishAsDeviceRequest = models.PublishAsDeviceRequest;
const DeleteDeviceResponse = models.DeleteDeviceResponse;
const DeviceInfo = models.DeviceInfo;
const DescribeProductTasksResponse = models.DescribeProductTasksResponse;
const PublishAsDeviceResponse = models.PublishAsDeviceResponse;
const EnableTopicRuleRequest = models.EnableTopicRuleRequest;


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
     * 本接口（CreateMultiDevicesTask）用于创建产品级别的批量创建设备任务
     * @param {CreateMultiDevicesTaskRequest} req
     * @param {function(string, CreateMultiDevicesTaskResponse):void} cb
     * @public
     */
    CreateMultiDevicesTask(req, cb) {
        let resp = new CreateMultiDevicesTaskResponse();
        this.request("CreateMultiDevicesTask", req, resp, cb);
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
     * 本接口（CreateTaskFileUrl）用于获取产品级任务文件上传链接
     * @param {CreateTaskFileUrlRequest} req
     * @param {function(string, CreateTaskFileUrlResponse):void} cb
     * @public
     */
    CreateTaskFileUrl(req, cb) {
        let resp = new CreateTaskFileUrlResponse();
        this.request("CreateTaskFileUrl", req, resp, cb);
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
     * 本接口（DescribeProductTasks）用于查看产品级别的任务列表
     * @param {DescribeProductTasksRequest} req
     * @param {function(string, DescribeProductTasksResponse):void} cb
     * @public
     */
    DescribeProductTasks(req, cb) {
        let resp = new DescribeProductTasksResponse();
        this.request("DescribeProductTasks", req, resp, cb);
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
     * 本接口（DescribeProductTask）用于查看产品级别的任务信息
     * @param {DescribeProductTaskRequest} req
     * @param {function(string, DescribeProductTaskResponse):void} cb
     * @public
     */
    DescribeProductTask(req, cb) {
        let resp = new DescribeProductTaskResponse();
        this.request("DescribeProductTask", req, resp, cb);
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
