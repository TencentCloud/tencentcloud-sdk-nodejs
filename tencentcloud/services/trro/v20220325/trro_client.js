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
 * trro client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(clientConfig) {
        super("trro.tencentcloudapi.com", "2022-03-25", clientConfig);
    }
    /**
     * 获取各时间段的会话统计值
     */
    async DescribeSessionStatisticsByInterval(req, cb) {
        return this.request("DescribeSessionStatisticsByInterval", req, cb);
    }
    /**
     * 用于批量删除修改权限配置
     */
    async BatchDeletePolicy(req, cb) {
        return this.request("BatchDeletePolicy", req, cb);
    }
    /**
     * 用于创建设备
     */
    async CreateDevice(req, cb) {
        return this.request("CreateDevice", req, cb);
    }
    /**
     * 获取会话统计值
     */
    async DescribeSessionStatistics(req, cb) {
        return this.request("DescribeSessionStatistics", req, cb);
    }
    /**
     * 用于批量删除设备
     */
    async BatchDeleteDevices(req, cb) {
        return this.request("BatchDeleteDevices", req, cb);
    }
    /**
     * 获取设备会话列表
     */
    async DescribeDeviceSessionList(req, cb) {
        return this.request("DescribeDeviceSessionList", req, cb);
    }
    /**
     * 用于修改权限配置
     */
    async ModifyPolicy(req, cb) {
        return this.request("ModifyPolicy", req, cb);
    }
    /**
     * 用于获取项目信息
     */
    async DescribeProjectInfo(req, cb) {
        return this.request("DescribeProjectInfo", req, cb);
    }
    /**
     * 用于创建项目
     */
    async CreateProject(req, cb) {
        return this.request("CreateProject", req, cb);
    }
    /**
     * 用于获取指定设备信息
     */
    async DescribeDeviceInfo(req, cb) {
        return this.request("DescribeDeviceInfo", req, cb);
    }
    /**
     * 用于删除项目
     */
    async DeleteProject(req, cb) {
        return this.request("DeleteProject", req, cb);
    }
    /**
     * 用于获取设备信息列表
     */
    async DescribeDeviceList(req, cb) {
        return this.request("DescribeDeviceList", req, cb);
    }
    /**
     * 用于修改项目信息
     */
    async ModifyProject(req, cb) {
        return this.request("ModifyProject", req, cb);
    }
    /**
     * 用于获取项目列表
     */
    async DescribeProjectList(req, cb) {
        return this.request("DescribeProjectList", req, cb);
    }
    /**
     * 用于查看权限配置
     */
    async DescribePolicy(req, cb) {
        return this.request("DescribePolicy", req, cb);
    }
    /**
     * 用于修改设备信息
     */
    async ModifyDevice(req, cb) {
        return this.request("ModifyDevice", req, cb);
    }
    /**
     * 获取设备会话数据详单
     */
    async DescribeDeviceSessionDetails(req, cb) {
        return this.request("DescribeDeviceSessionDetails", req, cb);
    }
}
exports.Client = Client;
