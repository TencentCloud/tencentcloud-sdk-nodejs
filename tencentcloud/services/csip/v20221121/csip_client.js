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
 * csip client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(clientConfig) {
        super("csip.tencentcloudapi.com", "2022-11-21", clientConfig);
    }
    /**
     * 获取资产视角的漏洞风险列表
     */
    async DescribeRiskCenterAssetViewVULRiskList(req, cb) {
        return this.request("DescribeRiskCenterAssetViewVULRiskList", req, cb);
    }
    /**
     * 集群pod列表
     */
    async DescribeClusterPodAssets(req, cb) {
        return this.request("DescribeClusterPodAssets", req, cb);
    }
    /**
     * 获取子网列表
     */
    async DescribeSubnetAssets(req, cb) {
        return this.request("DescribeSubnetAssets", req, cb);
    }
    /**
     * 获取vpc列表
     */
    async DescribeVpcAssets(req, cb) {
        return this.request("DescribeVpcAssets", req, cb);
    }
    /**
     * db资产详情
     */
    async DescribeDbAssetInfo(req, cb) {
        return this.request("DescribeDbAssetInfo", req, cb);
    }
    /**
     * cvm列表
     */
    async DescribeCVMAssets(req, cb) {
        return this.request("DescribeCVMAssets", req, cb);
    }
    /**
     * 域名列表
     */
    async DescribeDomainAssets(req, cb) {
        return this.request("DescribeDomainAssets", req, cb);
    }
    /**
     * ip公网列表
     */
    async DescribePublicIpAssets(req, cb) {
        return this.request("DescribePublicIpAssets", req, cb);
    }
    /**
     * csip角色授权绑定接口
     */
    async AddNewBindRoleUser(req, cb) {
        return this.request("AddNewBindRoleUser", req, cb);
    }
    /**
     * 获取扫描报告列表
     */
    async DescribeScanReportList(req, cb) {
        return this.request("DescribeScanReportList", req, cb);
    }
    /**
     * 创建域名、ip相关信息
     */
    async CreateDomainAndIp(req, cb) {
        return this.request("CreateDomainAndIp", req, cb);
    }
    /**
     * 获取资产视角的端口风险列表
     */
    async DescribeRiskCenterAssetViewPortRiskList(req, cb) {
        return this.request("DescribeRiskCenterAssetViewPortRiskList", req, cb);
    }
    /**
     * 资产列表
     */
    async DescribeDbAssets(req, cb) {
        return this.request("DescribeDbAssets", req, cb);
    }
    /**
     * cvm详情
     */
    async DescribeCVMAssetInfo(req, cb) {
        return this.request("DescribeCVMAssetInfo", req, cb);
    }
}
exports.Client = Client;
