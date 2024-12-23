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
 * privatedns client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(clientConfig) {
        super("privatedns.tencentcloudapi.com", "2020-10-28", clientConfig);
    }
    /**
     * 跨账号关联VPC时绑定其他账号
     */
    async CreatePrivateDNSAccount(req, cb) {
        return this.request("CreatePrivateDNSAccount", req, cb);
    }
    /**
     * 获取私有域信息
     */
    async DescribePrivateZone(req, cb) {
        return this.request("DescribePrivateZone", req, cb);
    }
    /**
     * 获取私有域记录列表
     */
    async DescribePrivateZoneRecordList(req, cb) {
        return this.request("DescribePrivateZoneRecordList", req, cb);
    }
    /**
     * 查询额度使用情况
     */
    async DescribeQuotaUsage(req, cb) {
        return this.request("DescribeQuotaUsage", req, cb);
    }
    /**
     * 获取操作日志列表
     */
    async DescribeAuditLog(req, cb) {
        return this.request("DescribeAuditLog", req, cb);
    }
    /**
     * 添加私有域解析记录
     */
    async CreatePrivateZoneRecord(req, cb) {
        return this.request("CreatePrivateZoneRecord", req, cb);
    }
    /**
     * 创建私有域
     */
    async CreatePrivateZone(req, cb) {
        return this.request("CreatePrivateZone", req, cb);
    }
    /**
     * 获取私有域列表
     */
    async DescribePrivateZoneList(req, cb) {
        return this.request("DescribePrivateZoneList", req, cb);
    }
    /**
     * 追加与私有域关联的VPC
     */
    async AddSpecifyPrivateZoneVpc(req, cb) {
        return this.request("AddSpecifyPrivateZoneVpc", req, cb);
    }
    /**
     * 查询异步绑定vpc操作状态
     */
    async QueryAsyncBindVpcStatus(req, cb) {
        return this.request("QueryAsyncBindVpcStatus", req, cb);
    }
    /**
     * 修改私有域信息
     */
    async ModifyPrivateZone(req, cb) {
        return this.request("ModifyPrivateZone", req, cb);
    }
    /**
     * 修改私有域解析记录
     */
    async ModifyPrivateZoneRecord(req, cb) {
        return this.request("ModifyPrivateZoneRecord", req, cb);
    }
    /**
     * 删除私有域解析账号
     */
    async DeletePrivateDNSAccount(req, cb) {
        return this.request("DeletePrivateDNSAccount", req, cb);
    }
    /**
     * 开通私有域解析
     */
    async SubscribePrivateZoneService(req, cb) {
        return this.request("SubscribePrivateZoneService", req, cb);
    }
    /**
     * 获取私有域解析概览
     */
    async DescribeDashboard(req, cb) {
        return this.request("DescribeDashboard", req, cb);
    }
    /**
     * 修改私有域关联的VPC
     */
    async ModifyPrivateZoneVpc(req, cb) {
        return this.request("ModifyPrivateZoneVpc", req, cb);
    }
    /**
     * 删除私有域并停止解析
     */
    async DeletePrivateZone(req, cb) {
        return this.request("DeletePrivateZone", req, cb);
    }
    /**
     * 获取私有域解析账号的VPC列表
     */
    async DescribeAccountVpcList(req, cb) {
        return this.request("DescribeAccountVpcList", req, cb);
    }
    /**
     * 修改解析记录状态
     */
    async ModifyRecordsStatus(req, cb) {
        return this.request("ModifyRecordsStatus", req, cb);
    }
    /**
     * 删除与私有域关联的VPC
     */
    async DeleteSpecifyPrivateZoneVpc(req, cb) {
        return this.request("DeleteSpecifyPrivateZoneVpc", req, cb);
    }
    /**
     * 查询私有域解析开通状态
     */
    async DescribePrivateZoneService(req, cb) {
        return this.request("DescribePrivateZoneService", req, cb);
    }
    /**
     * 删除私有域解析记录
     */
    async DeletePrivateZoneRecord(req, cb) {
        return this.request("DeletePrivateZoneRecord", req, cb);
    }
    /**
     * 获取私有域解析请求量
     */
    async DescribeRequestData(req, cb) {
        return this.request("DescribeRequestData", req, cb);
    }
    /**
     * 获取私有域解析账号列表
     */
    async DescribePrivateDNSAccountList(req, cb) {
        return this.request("DescribePrivateDNSAccountList", req, cb);
    }
}
exports.Client = Client;
