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
     * 判断是否开启的转发的权限
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
     * 修改产品信息
     */
    async ModifyProduct(req, cb) {
        return this.request("ModifyProduct", req, cb);
    }
    /**
     * 获取具有云存的日期
     */
    async DescribeCloudStorageDate(req, cb) {
        return this.request("DescribeCloudStorageDate", req, cb);
    }
    /**
     * 查看设备详情
     */
    async DescribeDevice(req, cb) {
        return this.request("DescribeDevice", req, cb);
    }
    /**
     * 获取产品详情
     */
    async DescribeProduct(req, cb) {
        return this.request("DescribeProduct", req, cb);
    }
    /**
     * 修改设备信息
     */
    async ModifyDevice(req, cb) {
        return this.request("ModifyDevice", req, cb);
    }
    /**
     * 修改转发规则
     */
    async ModifyForwardRule(req, cb) {
        return this.request("ModifyForwardRule", req, cb);
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
     * 删除转发规则
     */
    async DeleteForwardRule(req, cb) {
        return this.request("DeleteForwardRule", req, cb);
    }
    /**
     * 创建批次
     */
    async CreateBatch(req, cb) {
        return this.request("CreateBatch", req, cb);
    }
    /**
     * 获取设备在指定时间范围内上报的历史数据。
     */
    async DescribeDeviceDataHistory(req, cb) {
        return this.request("DescribeDeviceDataHistory", req, cb);
    }
    /**
     * 删除设备
     */
    async DeleteDevice(req, cb) {
        return this.request("DeleteDevice", req, cb);
    }
    /**
     * 获取批次详情
     */
    async DescribeBatch(req, cb) {
        return this.request("DescribeBatch", req, cb);
    }
    /**
     * 设置转发权限
     */
    async SetForwardAuth(req, cb) {
        return this.request("SetForwardAuth", req, cb);
    }
    /**
     * 获取Category详情
     */
    async DescribeCategory(req, cb) {
        return this.request("DescribeCategory", req, cb);
    }
    /**
     * 删除产品
     */
    async DeleteProduct(req, cb) {
        return this.request("DeleteProduct", req, cb);
    }
    /**
     * 获取设备的历史事件
     */
    async DescribeDeviceEventHistory(req, cb) {
        return this.request("DescribeDeviceEventHistory", req, cb);
    }
    /**
     * 开通云存服务
     */
    async CreateCloudStorage(req, cb) {
        return this.request("CreateCloudStorage", req, cb);
    }
    /**
     * 导入其它产品的数据模板，覆盖现有数据模板的物模型和产品分类信息
     */
    async ImportModelDefinition(req, cb) {
        return this.request("ImportModelDefinition", req, cb);
    }
    /**
     * 拉取云存事件列表
     */
    async DescribeCloudStorageEvents(req, cb) {
        return this.request("DescribeCloudStorageEvents", req, cb);
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
     * 提供修改产品的数据模板的能力
     */
    async ModifyModelDefinition(req, cb) {
        return this.request("ModifyModelDefinition", req, cb);
    }
    /**
     * 拉取云存事件缩略图
     */
    async DescribeCloudStorageThumbnail(req, cb) {
        return this.request("DescribeCloudStorageThumbnail", req, cb);
    }
    /**
     * 获取设备列表
     */
    async DescribeDevices(req, cb) {
        return this.request("DescribeDevices", req, cb);
    }
    /**
     * 查询产品配置的数据模板信息
     */
    async DescribeModelDefinition(req, cb) {
        return this.request("DescribeModelDefinition", req, cb);
    }
}
exports.Client = Client;
