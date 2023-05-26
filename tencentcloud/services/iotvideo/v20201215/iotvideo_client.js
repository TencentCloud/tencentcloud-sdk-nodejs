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
 * iotvideo client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(clientConfig) {
        super("iotvideo.tencentcloudapi.com", "2020-12-15", clientConfig);
    }
    /**
     * 获取产品列表
     */
    async DescribeProducts(req, cb) {
        return this.request("DescribeProducts", req, cb);
    }
    /**
     * 获取设备在指定时间范围内的通讯日志
     */
    async DescribeDeviceCommLog(req, cb) {
        return this.request("DescribeDeviceCommLog", req, cb);
    }
    /**
     * 判断是否开启转发的权限
     */
    async CheckForwardAuth(req, cb) {
        return this.request("CheckForwardAuth", req, cb);
    }
    /**
     * 获取设备属性数据
     */
    async DescribeDeviceData(req, cb) {
        return this.request("DescribeDeviceData", req, cb);
    }
    /**
     * 获取设备sdk日志
     */
    async DescribeSDKLog(req, cb) {
        return this.request("DescribeSDKLog", req, cb);
    }
    /**
     * 修改产品信息
     */
    async ModifyProduct(req, cb) {
        return this.request("ModifyProduct", req, cb);
    }
    /**
     * 转移云存服务
     */
    async TransferCloudStorage(req, cb) {
        return this.request("TransferCloudStorage", req, cb);
    }
    /**
     * 更新设备日志级别
     */
    async ModifyDeviceLogLevel(req, cb) {
        return this.request("ModifyDeviceLogLevel", req, cb);
    }
    /**
     * 发起AI推理请求
     */
    async CreateAIDetection(req, cb) {
        return this.request("CreateAIDetection", req, cb);
    }
    /**
     * 本接口（DescribeFirmware）用于查询固件信息
     */
    async DescribeFirmware(req, cb) {
        return this.request("DescribeFirmware", req, cb);
    }
    /**
     * 获取具有云存的日期
     */
    async DescribeCloudStorageDate(req, cb) {
        return this.request("DescribeCloudStorageDate", req, cb);
    }
    /**
     * 本接口用于重试设备升级任务
     */
    async RetryDeviceFirmwareTask(req, cb) {
        return this.request("RetryDeviceFirmwareTask", req, cb);
    }
    /**
     * 拉取AI模型列表
     */
    async DescribeAIModels(req, cb) {
        return this.request("DescribeAIModels", req, cb);
    }
    /**
     * 本接口（UploadFirmware）用于上传设备固件信息
     */
    async UploadFirmware(req, cb) {
        return this.request("UploadFirmware", req, cb);
    }
    /**
     * 用户AI模型申请记录
     */
    async DescribeAIModelApplications(req, cb) {
        return this.request("DescribeAIModelApplications", req, cb);
    }
    /**
     * 获取产品详情
     */
    async DescribeProduct(req, cb) {
        return this.request("DescribeProduct", req, cb);
    }
    /**
     * 查看AI模型资源包
     */
    async DescribeAIModelUsage(req, cb) {
        return this.request("DescribeAIModelUsage", req, cb);
    }
    /**
     * 获取批次详情
     */
    async DescribeBatch(req, cb) {
        return this.request("DescribeBatch", req, cb);
    }
    /**
     * 修改设备信息
     */
    async ModifyDevice(req, cb) {
        return this.request("ModifyDevice", req, cb);
    }
    /**
     * 拉取云存用户列表
     */
    async DescribeCloudStorageUsers(req, cb) {
        return this.request("DescribeCloudStorageUsers", req, cb);
    }
    /**
     * 取消AI模型申请
     */
    async CancelAIModelApplication(req, cb) {
        return this.request("CancelAIModelApplication", req, cb);
    }
    /**
     * 修改数据转发
     */
    async ModifyDataForward(req, cb) {
        return this.request("ModifyDataForward", req, cb);
    }
    /**
     * 获取设备云存服务详情
     */
    async DescribeCloudStorage(req, cb) {
        return this.request("DescribeCloudStorage", req, cb);
    }
    /**
     * 获取批次列表
     */
    async DescribeBatchs(req, cb) {
        return this.request("DescribeBatchs", req, cb);
    }
    /**
     * 本接口（BatchUpdateFirmware）用于批量更新设备固件
     */
    async BatchUpdateFirmware(req, cb) {
        return this.request("BatchUpdateFirmware", req, cb);
    }
    /**
     * 创建产品
     */
    async CreateProduct(req, cb) {
        return this.request("CreateProduct", req, cb);
    }
    /**
     * 为用户提供获取动作历史的能力。
     */
    async DescribeDeviceActionHistory(req, cb) {
        return this.request("DescribeDeviceActionHistory", req, cb);
    }
    /**
     * 更新AI推理结果推送配置
     */
    async UpdateAIModelChannel(req, cb) {
        return this.request("UpdateAIModelChannel", req, cb);
    }
    /**
     * 创建COS上传密钥
     */
    async CreateCOSCredentials(req, cb) {
        return this.request("CreateCOSCredentials", req, cb);
    }
    /**
     * 查询产品配置的数据模板信息
     */
    async DescribeModelDefinition(req, cb) {
        return this.request("DescribeModelDefinition", req, cb);
    }
    /**
     * 删除转发规则
     */
    async DeleteForwardRule(req, cb) {
        return this.request("DeleteForwardRule", req, cb);
    }
    /**
     * 继承云存用户
     */
    async InheritCloudStorageUser(req, cb) {
        return this.request("InheritCloudStorageUser", req, cb);
    }
    /**
     * 创建批次
     */
    async CreateBatch(req, cb) {
        return this.request("CreateBatch", req, cb);
    }
    /**
     * 本接口用于查询固件升级任务统计信息
     */
    async DescribeFirmwareTaskStatistics(req, cb) {
        return this.request("DescribeFirmwareTaskStatistics", req, cb);
    }
    /**
     * 修改产品动态注册
     */
    async ModifyProductDynamicRegister(req, cb) {
        return this.request("ModifyProductDynamicRegister", req, cb);
    }
    /**
     * 获取设备在指定时间范围内上报的历史数据。
     */
    async DescribeDeviceDataHistory(req, cb) {
        return this.request("DescribeDeviceDataHistory", req, cb);
    }
    /**
     * 本接口用于查询固件升级任务列表
     */
    async DescribeFirmwareTasks(req, cb) {
        return this.request("DescribeFirmwareTasks", req, cb);
    }
    /**
     * 本接口（GetFirmwareURL）用于获取固件存储的URL
     */
    async GetFirmwareURL(req, cb) {
        return this.request("GetFirmwareURL", req, cb);
    }
    /**
     * 修改转发规则
     */
    async ModifyForwardRule(req, cb) {
        return this.request("ModifyForwardRule", req, cb);
    }
    /**
     * 删除设备
     */
    async DeleteDevice(req, cb) {
        return this.request("DeleteDevice", req, cb);
    }
    /**
     * 开通云存服务
     */
    async CreateCloudStorage(req, cb) {
        return this.request("CreateCloudStorage", req, cb);
    }
    /**
     * 获取视频防盗链播放URL
     */
    async GenerateSignedVideoURL(req, cb) {
        return this.request("GenerateSignedVideoURL", req, cb);
    }
    /**
     * 设置转发权限
     */
    async SetForwardAuth(req, cb) {
        return this.request("SetForwardAuth", req, cb);
    }
    /**
     * 本接口（ListFirmwares）用于获取固件列表
     */
    async ListFirmwares(req, cb) {
        return this.request("ListFirmwares", req, cb);
    }
    /**
     * 本接口用于编辑固件信息
     */
    async EditFirmware(req, cb) {
        return this.request("EditFirmware", req, cb);
    }
    /**
     * 获取Category详情
     */
    async DescribeCategory(req, cb) {
        return this.request("DescribeCategory", req, cb);
    }
    /**
     * 本接口（PublishMessage）用于使用自定义透传协议进行设备远控
     */
    async PublishMessage(req, cb) {
        return this.request("PublishMessage", req, cb);
    }
    /**
     * 本接口用于查询固件升级任务状态分布
     */
    async DescribeFirmwareTaskDistribution(req, cb) {
        return this.request("DescribeFirmwareTaskDistribution", req, cb);
    }
    /**
     * 删除产品
     */
    async DeleteProduct(req, cb) {
        return this.request("DeleteProduct", req, cb);
    }
    /**
     * 获取产品动态注册详情
     */
    async DescribeProductDynamicRegister(req, cb) {
        return this.request("DescribeProductDynamicRegister", req, cb);
    }
    /**
     * 获取设备的历史事件
     */
    async DescribeDeviceEventHistory(req, cb) {
        return this.request("DescribeDeviceEventHistory", req, cb);
    }
    /**
     * 设置数据转发状态
     */
    async ModifyDataForwardStatus(req, cb) {
        return this.request("ModifyDataForwardStatus", req, cb);
    }
    /**
     * 本接口（CreateTaskFileUrl）用于获取产品级任务文件上传链接
     */
    async CreateTaskFileUrl(req, cb) {
        return this.request("CreateTaskFileUrl", req, cb);
    }
    /**
     * 此接口查询固件升级任务详情
     */
    async DescribeFirmwareTask(req, cb) {
        return this.request("DescribeFirmwareTask", req, cb);
    }
    /**
     * 导入其它产品的数据模板，覆盖现有数据模板的物模型和产品分类信息
     */
    async ImportModelDefinition(req, cb) {
        return this.request("ImportModelDefinition", req, cb);
    }
    /**
     * 上报活跃设备
     */
    async ReportAliveDevice(req, cb) {
        return this.request("ReportAliveDevice", req, cb);
    }
    /**
     * 重置云存服务
     */
    async ResetCloudStorage(req, cb) {
        return this.request("ResetCloudStorage", req, cb);
    }
    /**
     * 获取设备上下线日志
     */
    async DescribeDeviceStatusLog(req, cb) {
        return this.request("DescribeDeviceStatusLog", req, cb);
    }
    /**
     * 拉取云存事件列表
     */
    async DescribeCloudStorageEvents(req, cb) {
        return this.request("DescribeCloudStorageEvents", req, cb);
    }
    /**
     * 创建数据转发
     */
    async CreateDataForward(req, cb) {
        return this.request("CreateDataForward", req, cb);
    }
    /**
     * 本接口用于查询固件升级任务的设备列表
     */
    async DescribeFirmwareTaskDevices(req, cb) {
        return this.request("DescribeFirmwareTaskDevices", req, cb);
    }
    /**
     * 本接口用于取消设备升级任务
     */
    async CancelDeviceFirmwareTask(req, cb) {
        return this.request("CancelDeviceFirmwareTask", req, cb);
    }
    /**
     * 查看AI推理结果推送配置
     */
    async DescribeAIModelChannel(req, cb) {
        return this.request("DescribeAIModelChannel", req, cb);
    }
    /**
     * 获取数据转发列表
     */
    async DescribeDataForwardList(req, cb) {
        return this.request("DescribeDataForwardList", req, cb);
    }
    /**
     * 获取某一天云存时间轴
     */
    async DescribeCloudStorageTime(req, cb) {
        return this.request("DescribeCloudStorageTime", req, cb);
    }
    /**
     * 获取产品转发规则
     */
    async DescribeForwardRule(req, cb) {
        return this.request("DescribeForwardRule", req, cb);
    }
    /**
     * 创建转发规则
     */
    async CreateForwardRule(req, cb) {
        return this.request("CreateForwardRule", req, cb);
    }
    /**
     * 本接口（GetAllFirmwareVersion）用于获取所有的版本列表
     */
    async GetAllFirmwareVersion(req, cb) {
        return this.request("GetAllFirmwareVersion", req, cb);
    }
    /**
     * 提供修改产品的数据模板的能力
     */
    async ModifyModelDefinition(req, cb) {
        return this.request("ModifyModelDefinition", req, cb);
    }
    /**
     * 申请AI模型
     */
    async ApplyAIModel(req, cb) {
        return this.request("ApplyAIModel", req, cb);
    }
    /**
     * 绑定云存用户
     */
    async BindCloudStorageUser(req, cb) {
        return this.request("BindCloudStorageUser", req, cb);
    }
    /**
     * 获取设备列表
     */
    async DescribeDevices(req, cb) {
        return this.request("DescribeDevices", req, cb);
    }
    /**
     * 本接口（DeleteFirmware）用于删除固件
     */
    async DeleteFirmware(req, cb) {
        return this.request("DeleteFirmware", req, cb);
    }
    /**
     * 查看设备详情
     */
    async DescribeDevice(req, cb) {
        return this.request("DescribeDevice", req, cb);
    }
    /**
     * 拉取账户流水
     */
    async DescribeBalanceTransactions(req, cb) {
        return this.request("DescribeBalanceTransactions", req, cb);
    }
    /**
     * 根据设备产品ID、设备名称，设置控制设备的属性数据。
     */
    async ControlDeviceData(req, cb) {
        return this.request("ControlDeviceData", req, cb);
    }
    /**
     * 拉取云存事件缩略图
     */
    async DescribeCloudStorageThumbnail(req, cb) {
        return this.request("DescribeCloudStorageThumbnail", req, cb);
    }
    /**
     * 查询账户余额
     */
    async DescribeBalance(req, cb) {
        return this.request("DescribeBalance", req, cb);
    }
    /**
     * 设备唤醒
     */
    async WakeUpDevice(req, cb) {
        return this.request("WakeUpDevice", req, cb);
    }
}
exports.Client = Client;
