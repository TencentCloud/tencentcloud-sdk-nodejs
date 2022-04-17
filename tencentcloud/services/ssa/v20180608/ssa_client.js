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
 * ssa client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(clientConfig) {
        super("ssa.tencentcloudapi.com", "2018-06-08", clientConfig);
    }
    /**
     * 合规管理总览页检查项列表
     */
    async DescribeComplianceList(req, cb) {
        return this.request("DescribeComplianceList", req, cb);
    }
    /**
     * 云配置检查项总览页检查项列表
     */
    async DescribeConfigList(req, cb) {
        return this.request("DescribeConfigList", req, cb);
    }
    /**
     * 资产安全资产列表
     */
    async DescribeAssetList(req, cb) {
        return this.request("DescribeAssetList", req, cb);
    }
    /**
     * 获取安全事件详情
     */
    async DescribeEventDetail(req, cb) {
        return this.request("DescribeEventDetail", req, cb);
    }
    /**
     * 查询【通用字段】【泄露监测数据列表】
     */
    async SaDivulgeDataQueryPub(req, cb) {
        return this.request("SaDivulgeDataQueryPub", req, cb);
    }
    /**
     * 合规管理-资产列表
     */
    async DescribeComplianceAssetList(req, cb) {
        return this.request("DescribeComplianceAssetList", req, cb);
    }
    /**
     * 云安全配置管理资产组列表
     */
    async DescribeCheckConfigAssetList(req, cb) {
        return this.request("DescribeCheckConfigAssetList", req, cb);
    }
    /**
     * 获取泄露列表
     */
    async DescribeLeakDetectionList(req, cb) {
        return this.request("DescribeLeakDetectionList", req, cb);
    }
    /**
     * 资产测绘-测绘列表
     */
    async DescribeAssetsMappingList(req, cb) {
        return this.request("DescribeAssetsMappingList", req, cb);
    }
    /**
     * 合规详情项
     */
    async DescribeSocCspmCompliance(req, cb) {
        return this.request("DescribeSocCspmCompliance", req, cb);
    }
    /**
     * 获取测绘列表
     */
    async DescribeMappingResults(req, cb) {
        return this.request("DescribeMappingResults", req, cb);
    }
    /**
     * 云安全配置检查项列表
     */
    async DescribeSocCheckItemList(req, cb) {
        return this.request("DescribeSocCheckItemList", req, cb);
    }
    /**
     * 漏洞管理页，获取漏洞列表
     */
    async DescribeVulList(req, cb) {
        return this.request("DescribeVulList", req, cb);
    }
    /**
     * 资产安全页资产详情
     */
    async DescribeAssetDetail(req, cb) {
        return this.request("DescribeAssetDetail", req, cb);
    }
    /**
     * 云安全配置检查项详情
     */
    async DescribeCheckConfigDetail(req, cb) {
        return this.request("DescribeCheckConfigDetail", req, cb);
    }
    /**
     * 合规管理检查项详情
     */
    async DescribeComplianceDetail(req, cb) {
        return this.request("DescribeComplianceDetail", req, cb);
    }
    /**
     * 获取安全事件列表
     */
    async DescribeSafetyEventList(req, cb) {
        return this.request("DescribeSafetyEventList", req, cb);
    }
    /**
     * 返回告警详情
     */
    async DescribeSocAlertDetails(req, cb) {
        return this.request("DescribeSocAlertDetails", req, cb);
    }
    /**
     * 拉取告警列表
     */
    async DescribeSocAlertList(req, cb) {
        return this.request("DescribeSocAlertList", req, cb);
    }
    /**
     * 漏洞列表页，获取漏洞详情信息
     */
    async DescribeVulDetail(req, cb) {
        return this.request("DescribeVulDetail", req, cb);
    }
    /**
     * 云安全配置检查项结果列表
     */
    async DescribeSocCheckResultList(req, cb) {
        return this.request("DescribeSocCheckResultList", req, cb);
    }
}
exports.Client = Client;
