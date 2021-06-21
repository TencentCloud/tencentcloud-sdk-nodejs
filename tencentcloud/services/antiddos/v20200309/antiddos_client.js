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
 * antiddos client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(clientConfig) {
        super("antiddos.tencentcloudapi.com", "2020-03-09", clientConfig);
    }
    /**
     * 本接口 (AssociateDDoSEipAddress) 用于将高防弹性公网IP绑定到实例或弹性网卡的指定内网 IP 上。
     */
    async AssociateDDoSEipAddress(req, cb) {
        return this.request("AssociateDDoSEipAddress", req, cb);
    }
    /**
     * 修改智能解析域名名称
     */
    async ModifyDomainUsrName(req, cb) {
        return this.request("ModifyDomainUsrName", req, cb);
    }
    /**
     * 获取DDoS防护的水印防护配置列表
     */
    async DescribeListWaterPrintConfig(req, cb) {
        return this.request("DescribeListWaterPrintConfig", req, cb);
    }
    /**
     * 删除DDoS防护的访问限速配置
     */
    async DeleteDDoSSpeedLimitConfig(req, cb) {
        return this.request("DeleteDDoSSpeedLimitConfig", req, cb);
    }
    /**
     * 修改DDoS防护的访问限速配置
     */
    async ModifyDDoSSpeedLimitConfig(req, cb) {
        return this.request("ModifyDDoSSpeedLimitConfig", req, cb);
    }
    /**
     * 删除DDoS防护的区域封禁配置
     */
    async DeleteDDoSGeoIPBlockConfig(req, cb) {
        return this.request("DeleteDDoSGeoIPBlockConfig", req, cb);
    }
    /**
     * 修改DDoS防护的特征过滤规则
     */
    async ModifyPacketFilterConfig(req, cb) {
        return this.request("ModifyPacketFilterConfig", req, cb);
    }
    /**
     * 添加DDoS防护的特征过滤规则
     */
    async CreatePacketFilterConfig(req, cb) {
        return this.request("CreatePacketFilterConfig", req, cb);
    }
    /**
     * 获取单IP告警阈值配置列表
     */
    async DescribeListIPAlarmConfig(req, cb) {
        return this.request("DescribeListIPAlarmConfig", req, cb);
    }
    /**
     * 获取高防IP资产实例列表

     */
    async DescribeListBGPIPInstances(req, cb) {
        return this.request("DescribeListBGPIPInstances", req, cb);
    }
    /**
     * 获取单IP默认告警阈值配置
     */
    async DescribeDefaultAlarmThreshold(req, cb) {
        return this.request("DescribeDefaultAlarmThreshold", req, cb);
    }
    /**
     * 获取DDoS防护的IP黑白名单列表
     */
    async DescribeListBlackWhiteIpList(req, cb) {
        return this.request("DescribeListBlackWhiteIpList", req, cb);
    }
    /**
     * 获取DDoS防护的区域封禁配置列表
     */
    async DescribeListDDoSGeoIPBlockConfig(req, cb) {
        return this.request("DescribeListDDoSGeoIPBlockConfig", req, cb);
    }
    /**
     * 本接口 (DisassociateDDoSEipAddress) 用于解绑高防弹性公网IP。
     */
    async DisassociateDDoSEipAddress(req, cb) {
        return this.request("DisassociateDDoSEipAddress", req, cb);
    }
    /**
     * 获取智能调度域名列表
     */
    async DescribeListSchedulingDomain(req, cb) {
        return this.request("DescribeListSchedulingDomain", req, cb);
    }
    /**
     * 删除DDoS防护的水印防护密钥
     */
    async DeleteWaterPrintKey(req, cb) {
        return this.request("DeleteWaterPrintKey", req, cb);
    }
    /**
     * 设置单IP默认告警阈值配置
     */
    async CreateDefaultAlarmThreshold(req, cb) {
        return this.request("CreateDefaultAlarmThreshold", req, cb);
    }
    /**
     * 添加DDoS防护的水印防护配置
     */
    async CreateWaterPrintConfig(req, cb) {
        return this.request("CreateWaterPrintConfig", req, cb);
    }
    /**
     * 获取DDoS防护的IP黑白名单
     */
    async DescribeBlackWhiteIpList(req, cb) {
        return this.request("DescribeBlackWhiteIpList", req, cb);
    }
    /**
     * 获取DDoS防护的AI防护开关列表
     */
    async DescribeListDDoSAI(req, cb) {
        return this.request("DescribeListDDoSAI", req, cb);
    }
    /**
     * 设置单IP告警阈值配置
     */
    async CreateIPAlarmThresholdConfig(req, cb) {
        return this.request("CreateIPAlarmThresholdConfig", req, cb);
    }
    /**
     * 获取DDoS防护的特征过滤规则列表
     */
    async DescribeListPacketFilterConfig(req, cb) {
        return this.request("DescribeListPacketFilterConfig", req, cb);
    }
    /**
     * 获取DDoS防护的访问限速配置列表
     */
    async DescribeListDDoSSpeedLimitConfig(req, cb) {
        return this.request("DescribeListDDoSSpeedLimitConfig", req, cb);
    }
    /**
     * 获取防护阈值配置列表，包括DDoS的AI、等级、CC阈值开关等
     */
    async DescribeListProtectThresholdConfig(req, cb) {
        return this.request("DescribeListProtectThresholdConfig", req, cb);
    }
    /**
     * 添加DDoS防护的访问限速配置
     */
    async CreateDDoSSpeedLimitConfig(req, cb) {
        return this.request("CreateDDoSSpeedLimitConfig", req, cb);
    }
    /**
     * 获取高防包资产实例列表

     */
    async DescribeListBGPInstances(req, cb) {
        return this.request("DescribeListBGPInstances", req, cb);
    }
    /**
     * 添加DDoS防护的IP黑白名单
     */
    async CreateBlackWhiteIpList(req, cb) {
        return this.request("CreateBlackWhiteIpList", req, cb);
    }
    /**
     * 删除DDoS防护的IP黑白名单
     */
    async DeleteBlackWhiteIpList(req, cb) {
        return this.request("DeleteBlackWhiteIpList", req, cb);
    }
    /**
     * 添加DDoS防护的区域封禁配置
     */
    async CreateDDoSGeoIPBlockConfig(req, cb) {
        return this.request("CreateDDoSGeoIPBlockConfig", req, cb);
    }
    /**
     * 删除DDoS防护的水印防护配置
     */
    async DeleteWaterPrintConfig(req, cb) {
        return this.request("DeleteWaterPrintConfig", req, cb);
    }
    /**
     * 设置DDoS防护的AI防护开关
     */
    async CreateDDoSAI(req, cb) {
        return this.request("CreateDDoSAI", req, cb);
    }
    /**
     * 删除DDoS防护的特征过滤规则
     */
    async DeletePacketFilterConfig(req, cb) {
        return this.request("DeletePacketFilterConfig", req, cb);
    }
    /**
     * 获取DDoS防护的协议封禁配置列表
     */
    async DescribeListProtocolBlockConfig(req, cb) {
        return this.request("DescribeListProtocolBlockConfig", req, cb);
    }
    /**
     * 创建一个域名，可用于在封堵时调度切换IP
     */
    async CreateSchedulingDomain(req, cb) {
        return this.request("CreateSchedulingDomain", req, cb);
    }
    /**
     * 添加DDoS防护的水印防护密钥
     */
    async CreateWaterPrintKey(req, cb) {
        return this.request("CreateWaterPrintKey", req, cb);
    }
    /**
     * 设置DDoS防护的协议封禁配置
     */
    async CreateProtocolBlockConfig(req, cb) {
        return this.request("CreateProtocolBlockConfig", req, cb);
    }
    /**
     * 修改DDoS防护的区域封禁配置
     */
    async ModifyDDoSGeoIPBlockConfig(req, cb) {
        return this.request("ModifyDDoSGeoIPBlockConfig", req, cb);
    }
    /**
     * 获取转发监听器列表
     */
    async DescribeListListener(req, cb) {
        return this.request("DescribeListListener", req, cb);
    }
}
exports.Client = Client;
