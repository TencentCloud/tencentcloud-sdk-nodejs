"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
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
const abstract_client_1 = require("../../../common/abstract_client");
/**
 * iotcloud client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(clientConfig) {
        super("iotcloud.tencentcloudapi.com", "2018-06-14", clientConfig);
    }
    /**
     * 本接口（CreateTask）用于创建一个批量任务。目前此接口可以创建批量更新影子以及批量下发消息的任务
     */
    async CreateTask(req, cb) {
        return this.request("CreateTask", req, cb);
    }
    /**
     * 本接口（DescribeDevices）用于查询物联网通信设备的设备列表。
     */
    async DescribeDevices(req, cb) {
        return this.request("DescribeDevices", req, cb);
    }
    /**
     * 本接口（GetCOSURL）用于获取固件存储在COS的URL
     */
    async GetCOSURL(req, cb) {
        return this.request("GetCOSURL", req, cb);
    }
    /**
     * 发布RRPC消息
     */
    async PublishRRPCMessage(req, cb) {
        return this.request("PublishRRPCMessage", req, cb);
    }
    /**
     * 删除lora类型的设备
     */
    async DeleteLoraDevice(req, cb) {
        return this.request("DeleteLoraDevice", req, cb);
    }
    /**
     * 本接口（DescribeMultiDevices）用于查询批量创建设备的执行结果。
     */
    async DescribeMultiDevices(req, cb) {
        return this.request("DescribeMultiDevices", req, cb);
    }
    /**
     * 获取日志内容列表
     */
    async ListLogPayload(req, cb) {
        return this.request("ListLogPayload", req, cb);
    }
    /**
     * 查询固件信息
     */
    async DescribeFirmware(req, cb) {
        return this.request("DescribeFirmware", req, cb);
    }
    /**
     * 本接口（DescribeDeviceShadow）用于查询虚拟设备信息。
     */
    async DescribeDeviceShadow(req, cb) {
        return this.request("DescribeDeviceShadow", req, cb);
    }
    /**
     * 本接口（DescribeDevice）用于查看设备信息
     */
    async DescribeDevice(req, cb) {
        return this.request("DescribeDevice", req, cb);
    }
    /**
     * 本接口（CreateMultiDevice）用于批量创建物联云设备。
     */
    async CreateMultiDevice(req, cb) {
        return this.request("CreateMultiDevice", req, cb);
    }
    /**
     * 启用或者禁用设备
     */
    async UpdateDeviceAvailableState(req, cb) {
        return this.request("UpdateDeviceAvailableState", req, cb);
    }
    /**
     * 本接口（DescribeProduct）用于查看产品详情
     */
    async DescribeProduct(req, cb) {
        return this.request("DescribeProduct", req, cb);
    }
    /**
     * 本接口（CreateTopicRule）用于创建一个规则
     */
    async CreateTopicRule(req, cb) {
        return this.request("CreateTopicRule", req, cb);
    }
    /**
     * 本接口（CancelTask）用于取消一个未被调度的任务。
     */
    async CancelTask(req, cb) {
        return this.request("CancelTask", req, cb);
    }
    /**
     * 重试设备升级任务
     */
    async RetryDeviceFirmwareTask(req, cb) {
        return this.request("RetryDeviceFirmwareTask", req, cb);
    }
    /**
     * 本接口（CreateTopicPolicy）用于创建一个Topic
     */
    async CreateTopicPolicy(req, cb) {
        return this.request("CreateTopicPolicy", req, cb);
    }
    /**
     * 本接口（BatchUpdateFirmware）用于批量更新设备固件
     */
    async BatchUpdateFirmware(req, cb) {
        return this.request("BatchUpdateFirmware", req, cb);
    }
    /**
     * 本接口（CreateProduct）用于创建一个新的物联网通信产品
     */
    async CreateProduct(req, cb) {
        return this.request("CreateProduct", req, cb);
    }
    /**
     * 本接口（GetUserResourceInfo）用于查询用户资源使用信息。
     */
    async GetUserResourceInfo(req, cb) {
        return this.request("GetUserResourceInfo", req, cb);
    }
    /**
     * 批量设置产品禁用状态
     */
    async SetProductsForbiddenStatus(req, cb) {
        return this.request("SetProductsForbiddenStatus", req, cb);
    }
    /**
     * 获取证书认证类型设备的私钥，刚生成或者重置设备后仅可调用一次
     */
    async DescribeDeviceClientKey(req, cb) {
        return this.request("DescribeDeviceClientKey", req, cb);
    }
    /**
     * 本接口（DescribeProducts）用于列出产品列表。
     */
    async DescribeProducts(req, cb) {
        return this.request("DescribeProducts", req, cb);
    }
    /**
     * 本接口（CreateMultiDevicesTask）用于创建产品级别的批量创建设备任务
     */
    async CreateMultiDevicesTask(req, cb) {
        return this.request("CreateMultiDevicesTask", req, cb);
    }
    /**
     * 查询资源推送任务列表
     */
    async DescribeResourceTasks(req, cb) {
        return this.request("DescribeResourceTasks", req, cb);
    }
    /**
     * 查询固件升级任务统计信息
     */
    async DescribeFirmwareTaskStatistics(req, cb) {
        return this.request("DescribeFirmwareTaskStatistics", req, cb);
    }
    /**
     * 获取lora类型设备的详细信息
     */
    async DescribeLoraDevice(req, cb) {
        return this.request("DescribeLoraDevice", req, cb);
    }
    /**
     * 本接口（DescribeTask）用于查询一个已创建任务的详情，任务保留一个月
     */
    async DescribeTask(req, cb) {
        return this.request("DescribeTask", req, cb);
    }
    /**
     * 本接口（DeleteDevice）用于删除物联网通信设备。
     */
    async DeleteDevice(req, cb) {
        return this.request("DeleteDevice", req, cb);
    }
    /**
     * 批量启用或者禁用设备
     */
    async UpdateDevicesEnableState(req, cb) {
        return this.request("UpdateDevicesEnableState", req, cb);
    }
    /**
     * 本接口（ReplaceTopicRule）用于修改替换规则
     */
    async ReplaceTopicRule(req, cb) {
        return this.request("ReplaceTopicRule", req, cb);
    }
    /**
     * 获取设备上报的日志
     */
    async ListSDKLog(req, cb) {
        return this.request("ListSDKLog", req, cb);
    }
    /**
     * 本接口（DescribeProductResource）用于查询产品资源详情。
     */
    async DescribeProductResource(req, cb) {
        return this.request("DescribeProductResource", req, cb);
    }
    /**
     * 查询推送资源任务统计信息
     */
    async DescribePushResourceTaskStatistics(req, cb) {
        return this.request("DescribePushResourceTaskStatistics", req, cb);
    }
    /**
     * 编辑固件信息
     */
    async EditFirmware(req, cb) {
        return this.request("EditFirmware", req, cb);
    }
    /**
     * 本接口（CreateDevice）用于新建一个物联网通信设备。
     */
    async CreateDevice(req, cb) {
        return this.request("CreateDevice", req, cb);
    }
    /**
     * 本接口（DescribeDeviceResource）用于查询设备资源详情。
     */
    async DescribeDeviceResource(req, cb) {
        return this.request("DescribeDeviceResource", req, cb);
    }
    /**
     * 本接口（PublishMessage）用于向某个主题发消息。
     */
    async PublishMessage(req, cb) {
        return this.request("PublishMessage", req, cb);
    }
    /**
     * 查询固件升级任务状态分布
     */
    async DescribeFirmwareTaskDistribution(req, cb) {
        return this.request("DescribeFirmwareTaskDistribution", req, cb);
    }
    /**
     * 本接口（DeleteProduct）用于删除一个物联网通信产品
     */
    async DeleteProduct(req, cb) {
        return this.request("DeleteProduct", req, cb);
    }
    /**
     * 本接口（DownloadDeviceResource）用于下载设备资源
     */
    async DownloadDeviceResource(req, cb) {
        return this.request("DownloadDeviceResource", req, cb);
    }
    /**
     * 本接口（CreateTaskFileUrl）用于获取产品级任务文件上传链接
     */
    async CreateTaskFileUrl(req, cb) {
        return this.request("CreateTaskFileUrl", req, cb);
    }
    /**
     * 重置设备的连接状态
     */
    async ResetDeviceState(req, cb) {
        return this.request("ResetDeviceState", req, cb);
    }
    /**
     * 查询固件升级任务详情
     */
    async DescribeFirmwareTask(req, cb) {
        return this.request("DescribeFirmwareTask", req, cb);
    }
    /**
     * 本接口（UploadFirmware）用于上传设备固件信息
     */
    async UploadFirmware(req, cb) {
        return this.request("UploadFirmware", req, cb);
    }
    /**
     * 本接口（DescribeTasks）用于查询已创建的任务列表，任务保留一个月
     */
    async DescribeTasks(req, cb) {
        return this.request("DescribeTasks", req, cb);
    }
    /**
     * 本接口（DescribeDeviceResources）用于查询设备资源列表。
     */
    async DescribeDeviceResources(req, cb) {
        return this.request("DescribeDeviceResources", req, cb);
    }
    /**
     * 更新产品动态注册的配置
     */
    async UpdateProductDynamicRegister(req, cb) {
        return this.request("UpdateProductDynamicRegister", req, cb);
    }
    /**
     * 本接口（ListLog）用于查看日志信息
     */
    async ListLog(req, cb) {
        return this.request("ListLog", req, cb);
    }
    /**
     * 查询固件升级任务的设备列表
     */
    async DescribeFirmwareTaskDevices(req, cb) {
        return this.request("DescribeFirmwareTaskDevices", req, cb);
    }
    /**
     * 取消设备升级任务
     */
    async CancelDeviceFirmwareTask(req, cb) {
        return this.request("CancelDeviceFirmwareTask", req, cb);
    }
    /**
     * 模拟lora类型的设备端向服务器端发送消息
     */
    async PublishAsDevice(req, cb) {
        return this.request("PublishAsDevice", req, cb);
    }
    /**
     * 创建lora类型的设备
     */
    async CreateLoraDevice(req, cb) {
        return this.request("CreateLoraDevice", req, cb);
    }
    /**
     * 本接口（EnableTopicRule）用于启用规则
     */
    async EnableTopicRule(req, cb) {
        return this.request("EnableTopicRule", req, cb);
    }
    /**
     * 本接口（BindDevices）用于网关设备批量绑定子设备
     */
    async BindDevices(req, cb) {
        return this.request("BindDevices", req, cb);
    }
    /**
     * 本接口（UpdateTopicPolicy）用于更新Topic信息
     */
    async UpdateTopicPolicy(req, cb) {
        return this.request("UpdateTopicPolicy", req, cb);
    }
    /**
     * 本接口（UnbindDevices）用于网关设备批量解绑子设备
     */
    async UnbindDevices(req, cb) {
        return this.request("UnbindDevices", req, cb);
    }
    /**
     * 发布广播消息
     */
    async PublishBroadcastMessage(req, cb) {
        return this.request("PublishBroadcastMessage", req, cb);
    }
    /**
     * 本接口（DescribeProductTasks）用于查看产品级别的任务列表
     */
    async DescribeProductTasks(req, cb) {
        return this.request("DescribeProductTasks", req, cb);
    }
    /**
     * 查询所有设备列表
     */
    async DescribeAllDevices(req, cb) {
        return this.request("DescribeAllDevices", req, cb);
    }
    /**
     * 本接口（DisableTopicRule）用于禁用规则
     */
    async DisableTopicRule(req, cb) {
        return this.request("DisableTopicRule", req, cb);
    }
    /**
     * 本接口（DescribeMultiDevTask）用于查询批量创建设备任务的执行状态。
     */
    async DescribeMultiDevTask(req, cb) {
        return this.request("DescribeMultiDevTask", req, cb);
    }
    /**
     * 本接口（UpdateDeviceShadow）用于更新虚拟设备信息。
     */
    async UpdateDeviceShadow(req, cb) {
        return this.request("UpdateDeviceShadow", req, cb);
    }
    /**
     * 查询固件升级任务列表
     */
    async DescribeFirmwareTasks(req, cb) {
        return this.request("DescribeFirmwareTasks", req, cb);
    }
    /**
     * 服务器端下发消息给lora类型的设备
     */
    async PublishToDevice(req, cb) {
        return this.request("PublishToDevice", req, cb);
    }
    /**
     * 本接口（DescribeProductResources）用于查询产品资源列表。
     */
    async DescribeProductResources(req, cb) {
        return this.request("DescribeProductResources", req, cb);
    }
    /**
     * 本接口（DeleteDeviceResource）用于删除设备资源
     */
    async DeleteDeviceResource(req, cb) {
        return this.request("DeleteDeviceResource", req, cb);
    }
    /**
     * 本接口（DescribeProductTask）用于查看产品级别的任务信息
     */
    async DescribeProductTask(req, cb) {
        return this.request("DescribeProductTask", req, cb);
    }
    /**
     * 本接口（DeleteTopicRule）用于删除规则
     */
    async DeleteTopicRule(req, cb) {
        return this.request("DeleteTopicRule", req, cb);
    }
}
exports.Client = Client;
