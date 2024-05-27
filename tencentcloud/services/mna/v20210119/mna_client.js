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
     * 更新硬件信息
     */
    async UpdateHardware(req, cb) {
        return this.request("UpdateHardware", req, cb);
    }
    /**
     * 可开启/关闭流量包自动续费，不影响当前周期正在生效的流量包。
     */
    async ModifyPackageRenewFlag(req, cb) {
        return this.request("ModifyPackageRenewFlag", req, cb);
    }
    /**
     * 获取指定设备Id，指定时间点数据流量使用情况
     */
    async GetFlowStatistic(req, cb) {
        return this.request("GetFlowStatistic", req, cb);
    }
    /**
     * 获取指定分组，指定时间数据流量使用情况
     */
    async GetFlowStatisticByGroup(req, cb) {
        return this.request("GetFlowStatisticByGroup", req, cb);
    }
    /**
     * 批量获取设备流量统计曲线
     */
    async GetMultiFlowStatistic(req, cb) {
        return this.request("GetMultiFlowStatistic", req, cb);
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
     * 激活硬件设备
     */
    async ActivateHardware(req, cb) {
        return this.request("ActivateHardware", req, cb);
    }
    /**
     * 获取流量包列表
     */
    async GetFlowPackages(req, cb) {
        return this.request("GetFlowPackages", req, cb);
    }
    /**
     * 添加硬件设备，生成未激活的硬件设备，可支持批量添加
     */
    async AddHardware(req, cb) {
        return this.request("AddHardware", req, cb);
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
    /**
     * 删除设备信息
     */
    async DeleteDevice(req, cb) {
        return this.request("DeleteDevice", req, cb);
    }
    /**
     * 更新设备信息
     */
    async UpdateDevice(req, cb) {
        return this.request("UpdateDevice", req, cb);
    }
    /**
     * 获取单设备的实时流量统计指标
     */
    async GetNetMonitor(req, cb) {
        return this.request("GetNetMonitor", req, cb);
    }
    /**
     * 获取设备付费模式
     */
    async GetDevicePayMode(req, cb) {
        return this.request("GetDevicePayMode", req, cb);
    }
    /**
     * 获取厂商硬件设备列表
     */
    async GetVendorHardware(req, cb) {
        return this.request("GetVendorHardware", req, cb);
    }
    /**
     * 通过此接口设置和更新预置密钥
     */
    async CreateEncryptedKey(req, cb) {
        return this.request("CreateEncryptedKey", req, cb);
    }
    /**
     * 移动网络停止Qos加速过程
     */
    async DeleteQos(req, cb) {
        return this.request("DeleteQos", req, cb);
    }
    /**
     * 根据AppId查询用户设置的流量告警信息，包括阈值，回调url和key
     */
    async GetFlowAlarmInfo(req, cb) {
        return this.request("GetFlowAlarmInfo", req, cb);
    }
    /**
     * 购买预付费流量包
     */
    async OrderFlowPackage(req, cb) {
        return this.request("OrderFlowPackage", req, cb);
    }
    /**
     * 在用量统计页面下载流量数据
     */
    async GetStatisticData(req, cb) {
        return this.request("GetStatisticData", req, cb);
    }
    /**
     * 获取厂商硬件列表
     */
    async GetHardwareList(req, cb) {
        return this.request("GetHardwareList", req, cb);
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
}
exports.Client = Client;
