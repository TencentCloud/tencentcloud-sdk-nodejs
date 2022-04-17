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
 * iotexplorer client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(clientConfig) {
        super("iotexplorer.tencentcloudapi.com", "2019-04-23", clientConfig);
    }
    /**
     * 本接口（GetCOSURL）用于获取固件存储在COS的URL
     */
    async GetCOSURL(req, cb) {
        return this.request("GetCOSURL", req, cb);
    }
    /**
     * 提供修改产品的名称和描述等信息的能力，对于已发布产品不允许进行修改。
     */
    async ModifyStudioProduct(req, cb) {
        return this.request("ModifyStudioProduct", req, cb);
    }
    /**
     * 列出量产数据列表信息。
     */
    async GetBatchProductionsList(req, cb) {
        return this.request("GetBatchProductionsList", req, cb);
    }
    /**
     * 本接口（DescribeTopicPolicy）用于查看Topic详细信息
     */
    async DescribeTopicPolicy(req, cb) {
        return this.request("DescribeTopicPolicy", req, cb);
    }
    /**
     * 提供查询用户所创建的项目列表查询功能。
     */
    async GetProjectList(req, cb) {
        return this.request("GetProjectList", req, cb);
    }
    /**
     * 为用户提供同步调用设备行为的能力。
     */
    async CallDeviceActionSync(req, cb) {
        return this.request("CallDeviceActionSync", req, cb);
    }
    /**
     * 直接绑定设备和家庭
     */
    async DirectBindDeviceInFamily(req, cb) {
        return this.request("DirectBindDeviceInFamily", req, cb);
    }
    /**
     * 查询设备绑定的网关设备
     */
    async DescribeDeviceBindGateway(req, cb) {
        return this.request("DescribeDeviceBindGateway", req, cb);
    }
    /**
     * 获取设备历史位置
     */
    async GetDeviceLocationHistory(req, cb) {
        return this.request("GetDeviceLocationHistory", req, cb);
    }
    /**
     * 本接口（PublishMessage）用于使用自定义透传协议进行设备远控
     */
    async PublishMessage(req, cb) {
        return this.request("PublishMessage", req, cb);
    }
    /**
     * 提供查看产品详细信息的能力，包括产品的ID、数据协议、认证类型等重要参数
     */
    async DescribeStudioProduct(req, cb) {
        return this.request("DescribeStudioProduct", req, cb);
    }
    /**
     * 获取 LoRa 网关列表接口
     */
    async GetLoRaGatewayList(req, cb) {
        return this.request("GetLoRaGatewayList", req, cb);
    }
    /**
     * 产品开发完成并测试通过后，通过发布产品将产品设置为发布状态
     */
    async ReleaseStudioProduct(req, cb) {
        return this.request("ReleaseStudioProduct", req, cb);
    }
    /**
     * 更新围栏绑定信息
     */
    async ModifyFenceBind(req, cb) {
        return this.request("ModifyFenceBind", req, cb);
    }
    /**
     * 删除位置空间
     */
    async DeletePositionSpace(req, cb) {
        return this.request("DeletePositionSpace", req, cb);
    }
    /**
     * 获取网关产品已经绑定的子产品
     */
    async DescribeBindedProducts(req, cb) {
        return this.request("DescribeBindedProducts", req, cb);
    }
    /**
     * 修改 LoRa 网关信息
     */
    async ModifyLoRaGateway(req, cb) {
        return this.request("ModifyLoRaGateway", req, cb);
    }
    /**
     * 用于查看某个设备的详细信息
     */
    async DescribeDevice(req, cb) {
        return this.request("DescribeDevice", req, cb);
    }
    /**
     * 获取围栏告警事件列表
     */
    async DescribeFenceEventList(req, cb) {
        return this.request("DescribeFenceEventList", req, cb);
    }
    /**
     * 删除规则
     */
    async DeleteTopicRule(req, cb) {
        return this.request("DeleteTopicRule", req, cb);
    }
    /**
     * 下发RRPC消息
     */
    async PublishRRPCMessage(req, cb) {
        return this.request("PublishRRPCMessage", req, cb);
    }
    /**
     * 搜索位置空间
     */
    async SearchPositionSpace(req, cb) {
        return this.request("SearchPositionSpace", req, cb);
    }
    /**
     * 删除  LoRa 网关的接口
     */
    async DeleteLoRaGateway(req, cb) {
        return this.request("DeleteLoRaGateway", req, cb);
    }
    /**
     * 为用户提供新建产品的能力，用于管理用户的设备
     */
    async CreateStudioProduct(req, cb) {
        return this.request("CreateStudioProduct", req, cb);
    }
    /**
     * 启用规则
     */
    async EnableTopicRule(req, cb) {
        return this.request("EnableTopicRule", req, cb);
    }
    /**
     * 查询绑定到家庭的网关设备的子设备列表
     */
    async DescribeGatewaySubDeviceList(req, cb) {
        return this.request("DescribeGatewaySubDeviceList", req, cb);
    }
    /**
     * 提供根据产品名称查找产品的能力
     */
    async SearchStudioProduct(req, cb) {
        return this.request("SearchStudioProduct", req, cb);
    }
    /**
     * 修改规则
     */
    async ModifyTopicRule(req, cb) {
        return this.request("ModifyTopicRule", req, cb);
    }
    /**
     * 本接口（ListFirmwares）用于获取固件列表
     */
    async ListFirmwares(req, cb) {
        return this.request("ListFirmwares", req, cb);
    }
    /**
     * 创建设备
     */
    async CreateDevice(req, cb) {
        return this.request("CreateDevice", req, cb);
    }
    /**
     * 删除围栏绑定信息
     */
    async DeleteFenceBind(req, cb) {
        return this.request("DeleteFenceBind", req, cb);
    }
    /**
     * 根据设备产品ID、设备名称，设置控制设备的属性数据。
     */
    async ControlDeviceData(req, cb) {
        return this.request("ControlDeviceData", req, cb);
    }
    /**
     * 查询固件升级任务列表
     */
    async DescribeFirmwareTask(req, cb) {
        return this.request("DescribeFirmwareTask", req, cb);
    }
    /**
     * 获取位置空间列表
     */
    async GetPositionSpaceList(req, cb) {
        return this.request("GetPositionSpaceList", req, cb);
    }
    /**
     * 提供查询LoRa自定义频点详情的能力
     */
    async DescribeLoRaFrequency(req, cb) {
        return this.request("DescribeLoRaFrequency", req, cb);
    }
    /**
     * 本接口（UpdateTopicPolicy）用于更新Topic信息
     */
    async ModifyTopicPolicy(req, cb) {
        return this.request("ModifyTopicPolicy", req, cb);
    }
    /**
     * 获取规则列表
     */
    async GetTopicRuleList(req, cb) {
        return this.request("GetTopicRuleList", req, cb);
    }
    /**
     * 为用户提供新建项目的能力，用于集中管理产品和应用。
     */
    async CreateProject(req, cb) {
        return this.request("CreateProject", req, cb);
    }
    /**
     * 提供给用户异步调用设备行为的能力
     */
    async CallDeviceActionAsync(req, cb) {
        return this.request("CallDeviceActionAsync", req, cb);
    }
    /**
     * 提供删除某个项目的能力
     */
    async DeleteProject(req, cb) {
        return this.request("DeleteProject", req, cb);
    }
    /**
     * 获取规则信息
     */
    async DescribeTopicRule(req, cb) {
        return this.request("DescribeTopicRule", req, cb);
    }
    /**
     * 发布广播消息
     */
    async PublishBroadcastMessage(req, cb) {
        return this.request("PublishBroadcastMessage", req, cb);
    }
    /**
     * 批量解绑子产品
     */
    async UnbindProducts(req, cb) {
        return this.request("UnbindProducts", req, cb);
    }
    /**
     * 提供删除某个项目下产品的能力
     */
    async DeleteStudioProduct(req, cb) {
        return this.request("DeleteStudioProduct", req, cb);
    }
    /**
     * 根据设备产品ID、设备名称，获取设备上报的属性数据。
     */
    async DescribeDeviceData(req, cb) {
        return this.request("DescribeDeviceData", req, cb);
    }
    /**
     * 获取网关绑定的子设备列表
     */
    async DescribeGatewayBindDevices(req, cb) {
        return this.request("DescribeGatewayBindDevices", req, cb);
    }
    /**
     * 创建围栏
     */
    async CreatePositionFence(req, cb) {
        return this.request("CreatePositionFence", req, cb);
    }
    /**
     * 创建新 LoRa 网关设备接口
     */
    async CreateLoRaGateway(req, cb) {
        return this.request("CreateLoRaGateway", req, cb);
    }
    /**
     * 创建规则
     */
    async CreateTopicRule(req, cb) {
        return this.request("CreateTopicRule", req, cb);
    }
    /**
     * 创建 LoRa 自定义频点
     */
    async CreateLoRaFrequency(req, cb) {
        return this.request("CreateLoRaFrequency", req, cb);
    }
    /**
     * 本接口（CreateTopicPolicy）用于创建一个Topic
     */
    async CreateTopicPolicy(req, cb) {
        return this.request("CreateTopicPolicy", req, cb);
    }
    /**
     * 本接口（UploadFirmware）用于上传设备固件至平台
     */
    async UploadFirmware(req, cb) {
        return this.request("UploadFirmware", req, cb);
    }
    /**
     * 批量禁用启用设备
     */
    async UpdateDevicesEnableState(req, cb) {
        return this.request("UpdateDevicesEnableState", req, cb);
    }
    /**
     * 修改项目
     */
    async ModifyProject(req, cb) {
        return this.request("ModifyProject", req, cb);
    }
    /**
     * 批量绑定子产品
     */
    async BindProducts(req, cb) {
        return this.request("BindProducts", req, cb);
    }
    /**
     * 获取围栏绑定信息列表
     */
    async DescribeFenceBindList(req, cb) {
        return this.request("DescribeFenceBindList", req, cb);
    }
    /**
     * 更新位置空间
     */
    async ModifyPositionSpace(req, cb) {
        return this.request("ModifyPositionSpace", req, cb);
    }
    /**
     * 获取位置空间中围栏告警事件列表
     */
    async DescribeSpaceFenceEventList(req, cb) {
        return this.request("DescribeSpaceFenceEventList", req, cb);
    }
    /**
     * 本接口（UpdateFirmware）用于对指定设备发起固件升级请求
     */
    async UpdateFirmware(req, cb) {
        return this.request("UpdateFirmware", req, cb);
    }
    /**
     * 用于获取网关可绑定或解绑的子产品
     */
    async DescribeGatewaySubProducts(req, cb) {
        return this.request("DescribeGatewaySubProducts", req, cb);
    }
    /**
     * 获取设备位置列表
     */
    async DescribeDevicePositionList(req, cb) {
        return this.request("DescribeDevicePositionList", req, cb);
    }
    /**
     * 批量绑定子设备
     */
    async BindDevices(req, cb) {
        return this.request("BindDevices", req, cb);
    }
    /**
     * 用于新建批量生产设备
     */
    async CreateBatchProduction(req, cb) {
        return this.request("CreateBatchProduction", req, cb);
    }
    /**
     * 禁用规则
     */
    async DisableTopicRule(req, cb) {
        return this.request("DisableTopicRule", req, cb);
    }
    /**
     * 批量解绑子设备
     */
    async UnbindDevices(req, cb) {
        return this.request("UnbindDevices", req, cb);
    }
    /**
     * 提供查询某个项目下所有产品信息的能力。
     */
    async GetStudioProductList(req, cb) {
        return this.request("GetStudioProductList", req, cb);
    }
    /**
     * 获取量产详情信息。
     */
    async DescribeBatchProduction(req, cb) {
        return this.request("DescribeBatchProduction", req, cb);
    }
    /**
     * 批量删除设备
     */
    async DeleteDevices(req, cb) {
        return this.request("DeleteDevices", req, cb);
    }
    /**
     * 获取指定网关设备的子设备列表
     */
    async GetGatewaySubDeviceList(req, cb) {
        return this.request("GetGatewaySubDeviceList", req, cb);
    }
    /**
     * 获取设备的历史事件
     */
    async ListEventHistory(req, cb) {
        return this.request("ListEventHistory", req, cb);
    }
    /**
     * 获取设备在指定时间范围内上报的历史数据。
     */
    async DescribeDeviceDataHistory(req, cb) {
        return this.request("DescribeDeviceDataHistory", req, cb);
    }
    /**
     * 更新围栏
     */
    async ModifyPositionFence(req, cb) {
        return this.request("ModifyPositionFence", req, cb);
    }
    /**
     * 删除设备
     */
    async DeleteDevice(req, cb) {
        return this.request("DeleteDevice", req, cb);
    }
    /**
     * 获取围栏列表
     */
    async DescribePositionFenceList(req, cb) {
        return this.request("DescribePositionFenceList", req, cb);
    }
    /**
     * 提供删除LoRa自定义频点的能力
     */
    async DeleteLoRaFrequency(req, cb) {
        return this.request("DeleteLoRaFrequency", req, cb);
    }
    /**
     * 更新位置空间产品属性
     */
    async ModifySpaceProperty(req, cb) {
        return this.request("ModifySpaceProperty", req, cb);
    }
    /**
     * 本接口（DeleteTopicPolicy）用于删除Topic
     */
    async DeleteTopicPolicy(req, cb) {
        return this.request("DeleteTopicPolicy", req, cb);
    }
    /**
     * 用于查询某个产品下的设备列表
     */
    async GetDeviceList(req, cb) {
        return this.request("GetDeviceList", req, cb);
    }
    /**
     * 本接口（ListTopicPolicy）用于获取Topic列表
     */
    async ListTopicPolicy(req, cb) {
        return this.request("ListTopicPolicy", req, cb);
    }
    /**
     * 无
     */
    async GenSingleDeviceSignatureOfPublic(req, cb) {
        return this.request("GenSingleDeviceSignatureOfPublic", req, cb);
    }
    /**
     * 修改LoRa自定义频点
     */
    async ModifyLoRaFrequency(req, cb) {
        return this.request("ModifyLoRaFrequency", req, cb);
    }
    /**
     * 删除围栏
     */
    async DeletePositionFence(req, cb) {
        return this.request("DeletePositionFence", req, cb);
    }
    /**
     * 搜索规则
     */
    async SearchTopicRule(req, cb) {
        return this.request("SearchTopicRule", req, cb);
    }
    /**
     * 提供修改产品的数据模板的能力
     */
    async ModifyModelDefinition(req, cb) {
        return this.request("ModifyModelDefinition", req, cb);
    }
    /**
     * 用于获取设备绑定的用户列表
     */
    async GetFamilyDeviceUserList(req, cb) {
        return this.request("GetFamilyDeviceUserList", req, cb);
    }
    /**
     * 查询项目详情
     */
    async DescribeProject(req, cb) {
        return this.request("DescribeProject", req, cb);
    }
    /**
     * 查询产品配置的数据模板信息
     */
    async DescribeModelDefinition(req, cb) {
        return this.request("DescribeModelDefinition", req, cb);
    }
    /**
     * 创建位置空间
     */
    async CreatePositionSpace(req, cb) {
        return this.request("CreatePositionSpace", req, cb);
    }
    /**
     * 创建围栏绑定信息
     */
    async CreateFenceBind(req, cb) {
        return this.request("CreateFenceBind", req, cb);
    }
}
exports.Client = Client;
