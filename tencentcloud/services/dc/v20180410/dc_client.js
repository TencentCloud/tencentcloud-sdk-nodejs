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
 * dc client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(clientConfig) {
        super("dc.tencentcloudapi.com", "2018-04-10", clientConfig);
    }
    /**
     * 修改专用通道扩展信息。
     */
    async ModifyDirectConnectTunnelExtra(req, cb) {
        return this.request("ModifyDirectConnectTunnelExtra", req, cb);
    }
    /**
     * 获取用户互联网公网地址分配统计信息
     */
    async DescribeInternetAddressStatistics(req, cb) {
        return this.request("DescribeInternetAddressStatistics", req, cb);
    }
    /**
     * 删除物理专线。只能删除处于已连接状态的物理专线。
     */
    async DeleteDirectConnect(req, cb) {
        return this.request("DeleteDirectConnect", req, cb);
    }
    /**
     * 删除专用通道。
     */
    async DeleteDirectConnectTunnel(req, cb) {
        return this.request("DeleteDirectConnectTunnel", req, cb);
    }
    /**
     * 申请物理专线接入。
调用该接口时，请注意：
账号要进行实名认证，否则不允许申请物理专线；
若账户下存在欠费状态的物理专线，则不能申请更多的物理专线。
     */
    async CreateDirectConnect(req, cb) {
        return this.request("CreateDirectConnect", req, cb);
    }
    /**
     * 查询物理专线列表。
     */
    async DescribeDirectConnects(req, cb) {
        return this.request("DescribeDirectConnects", req, cb);
    }
    /**
     * 启用已停用的互联网公网地址
     */
    async EnableInternetAddress(req, cb) {
        return this.request("EnableInternetAddress", req, cb);
    }
    /**
     * 修改物理专线的属性。
     */
    async ModifyDirectConnectAttribute(req, cb) {
        return this.request("ModifyDirectConnectAttribute", req, cb);
    }
    /**
     * 查询专用通道扩展信息。
     */
    async DescribeDirectConnectTunnelExtra(req, cb) {
        return this.request("DescribeDirectConnectTunnelExtra", req, cb);
    }
    /**
     * 停用用户申请的公网互联网地址
     */
    async DisableInternetAddress(req, cb) {
        return this.request("DisableInternetAddress", req, cb);
    }
    /**
     * 查询互联网通道路由列表。
     */
    async DescribePublicDirectConnectTunnelRoutes(req, cb) {
        return this.request("DescribePublicDirectConnectTunnelRoutes", req, cb);
    }
    /**
     * 创建专用通道。
     */
    async CreateDirectConnectTunnel(req, cb) {
        return this.request("CreateDirectConnectTunnel", req, cb);
    }
    /**
     * 拒绝专用通道申请。
     */
    async RejectDirectConnectTunnel(req, cb) {
        return this.request("RejectDirectConnectTunnel", req, cb);
    }
    /**
     * 申请互联网CIDR地址
     */
    async ApplyInternetAddress(req, cb) {
        return this.request("ApplyInternetAddress", req, cb);
    }
    /**
     * 获取用户互联网公网地址配额
     */
    async DescribeInternetAddressQuota(req, cb) {
        return this.request("DescribeInternetAddressQuota", req, cb);
    }
    /**
     * 查询专用通道列表。
     */
    async DescribeDirectConnectTunnels(req, cb) {
        return this.request("DescribeDirectConnectTunnels", req, cb);
    }
    /**
     * 查询物理专线接入点。
     */
    async DescribeAccessPoints(req, cb) {
        return this.request("DescribeAccessPoints", req, cb);
    }
    /**
     * 创建敏捷上云服务
     */
    async CreateCloudAttachService(req, cb) {
        return this.request("CreateCloudAttachService", req, cb);
    }
    /**
     * 修改专用通道属性。
     */
    async ModifyDirectConnectTunnelAttribute(req, cb) {
        return this.request("ModifyDirectConnectTunnelAttribute", req, cb);
    }
    /**
     * 接受专用通道申请。
     */
    async AcceptDirectConnectTunnel(req, cb) {
        return this.request("AcceptDirectConnectTunnel", req, cb);
    }
    /**
     * 获取用户互联网公网地址信息
     */
    async DescribeInternetAddress(req, cb) {
        return this.request("DescribeInternetAddress", req, cb);
    }
    /**
     * 释放已申请的互联网地址
     */
    async ReleaseInternetAddress(req, cb) {
        return this.request("ReleaseInternetAddress", req, cb);
    }
}
exports.Client = Client;
