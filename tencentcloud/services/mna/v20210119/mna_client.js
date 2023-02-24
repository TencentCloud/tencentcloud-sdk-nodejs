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
 * mna client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(clientConfig) {
        super("mna.tencentcloudapi.com", "2021-01-19", clientConfig);
    }
    /**
     * 在用量统计页面下载流量数据
     */
    async GetStatisticData(req, cb) {
        return this.request("GetStatisticData", req, cb);
    }
    /**
     * 更新设备信息
     */
    async UpdateDevice(req, cb) {
        return this.request("UpdateDevice", req, cb);
    }
    /**
     * 新建设备记录
     */
    async AddDevice(req, cb) {
        return this.request("AddDevice", req, cb);
    }
    /**
     * 获取Qos加速状态
     */
    async DescribeQos(req, cb) {
        return this.request("DescribeQos", req, cb);
    }
    /**
     * 获取指定设备Id，指定时间点数据流量使用情况
     */
    async GetFlowStatistic(req, cb) {
        return this.request("GetFlowStatistic", req, cb);
    }
    /**
     * 获取设备信息列表
     */
    async GetDevices(req, cb) {
        return this.request("GetDevices", req, cb);
    }
    /**
     * 获取公钥用于验签
     */
    async GetPublicKey(req, cb) {
        return this.request("GetPublicKey", req, cb);
    }
    /**
     * 通过此接口设置和更新预置密钥
     */
    async CreateEncryptedKey(req, cb) {
        return this.request("CreateEncryptedKey", req, cb);
    }
    /**
     * 批量获取设备流量统计曲线
     */
    async GetMultiFlowStatistic(req, cb) {
        return this.request("GetMultiFlowStatistic", req, cb);
    }
    /**
     * 删除设备信息
     */
    async DeleteDevice(req, cb) {
        return this.request("DeleteDevice", req, cb);
    }
    /**
     * 移动网络停止Qos加速过程
     */
    async DeleteQos(req, cb) {
        return this.request("DeleteQos", req, cb);
    }
    /**
     * 通过指定设备的ID查找设备详细信息
     */
    async GetDevice(req, cb) {
        return this.request("GetDevice", req, cb);
    }
    /**
     * 移动网络发起Qos加速过程
     */
    async CreateQos(req, cb) {
        return this.request("CreateQos", req, cb);
    }
}
exports.Client = Client;
