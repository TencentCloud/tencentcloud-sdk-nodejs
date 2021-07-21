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
        super("iotcloud.tencentcloudapi.com", "2021-04-08", clientConfig);
    }
    /**
     * 设置设备上报的日志级别
     */
    async UpdateDeviceLogLevel(req, cb) {
        return this.request("UpdateDeviceLogLevel", req, cb);
    }
    /**
     * 查询私有CA绑定的产品列表
     */
    async DescribePrivateCABindedProducts(req, cb) {
        return this.request("DescribePrivateCABindedProducts", req, cb);
    }
    /**
     * 本接口（DescribeDevices）用于查询物联网通信设备的设备列表。
     */
    async DescribeDevices(req, cb) {
        return this.request("DescribeDevices", req, cb);
    }
    /**
     * 本接口（CreateDevice）用于新建一个物联网通信设备。
     */
    async CreateDevice(req, cb) {
        return this.request("CreateDevice", req, cb);
    }
    /**
     * 查询产品绑定的CA证书
     */
    async DescribeProductCA(req, cb) {
        return this.request("DescribeProductCA", req, cb);
    }
    /**
     * 查询私有化CA信息
     */
    async DescribePrivateCA(req, cb) {
        return this.request("DescribePrivateCA", req, cb);
    }
    /**
     * 创建私有CA证书
     */
    async CreatePrivateCA(req, cb) {
        return this.request("CreatePrivateCA", req, cb);
    }
    /**
     * 本接口（DeleteProduct）用于删除一个物联网通信产品
     */
    async DeleteProduct(req, cb) {
        return this.request("DeleteProduct", req, cb);
    }
    /**
     * 更新私有CA证书
     */
    async UpdatePrivateCA(req, cb) {
        return this.request("UpdatePrivateCA", req, cb);
    }
    /**
     * 查询私有CA证书列表
     */
    async DescribePrivateCAs(req, cb) {
        return this.request("DescribePrivateCAs", req, cb);
    }
    /**
     * 删除私有CA证书
     */
    async DeletePrivateCA(req, cb) {
        return this.request("DeletePrivateCA", req, cb);
    }
    /**
     * 本接口（DescribeDevice）用于查看设备信息
     */
    async DescribeDevice(req, cb) {
        return this.request("DescribeDevice", req, cb);
    }
    /**
     * 批量启用或者禁用设备
     */
    async UpdateDevicesEnableState(req, cb) {
        return this.request("UpdateDevicesEnableState", req, cb);
    }
    /**
     * 本接口（DeleteDevice）用于删除物联网通信设备。
     */
    async DeleteDevice(req, cb) {
        return this.request("DeleteDevice", req, cb);
    }
    /**
     * 本接口（DescribeProduct）用于查看产品详情
     */
    async DescribeProduct(req, cb) {
        return this.request("DescribeProduct", req, cb);
    }
}
exports.Client = Client;
