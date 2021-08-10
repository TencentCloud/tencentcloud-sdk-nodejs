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
 * waf client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(clientConfig) {
        super("waf.tencentcloudapi.com", "2018-01-25", clientConfig);
    }
    /**
     * 删除攻击日志下载任务记录
     */
    async DeleteAttackDownloadRecord(req, cb) {
        return this.request("DeleteAttackDownloadRecord", req, cb);
    }
    /**
     * 开启或禁用自定义策略
     */
    async ModifyCustomRuleStatus(req, cb) {
        return this.request("ModifyCustomRuleStatus", req, cb);
    }
    /**
     * 本接口用于获取访问日志导出列表
     */
    async DescribeAccessExports(req, cb) {
        return this.request("DescribeAccessExports", req, cb);
    }
    /**
     * 获取防护配置中的自定义策略列表
     */
    async DescribeCustomRules(req, cb) {
        return this.request("DescribeCustomRules", req, cb);
    }
    /**
     * 删除访问日志下载记录
     */
    async DeleteDownloadRecord(req, cb) {
        return this.request("DeleteDownloadRecord", req, cb);
    }
    /**
     * 增加自定义策略
     */
    async AddCustomRule(req, cb) {
        return this.request("AddCustomRule", req, cb);
    }
    /**
     * 删除CC攻击的session设置
     */
    async DeleteSession(req, cb) {
        return this.request("DeleteSession", req, cb);
    }
    /**
     * 本接口用于搜索WAF访问日志
     */
    async SearchAccessLog(req, cb) {
        return this.request("SearchAccessLog", req, cb);
    }
    /**
     * 本接口用于删除访问日志导出
     */
    async DeleteAccessExport(req, cb) {
        return this.request("DeleteAccessExport", req, cb);
    }
    /**
     * 在负载均衡型WAF的添加、编辑域名配置的时候，需要展示负载均衡型WAF（clb-waf)支持的地域列表，通过DescribeUserClbWafRegions既可以获得当前对客户已经开放的地域列表
     */
    async DescribeUserClbWafRegions(req, cb) {
        return this.request("DescribeUserClbWafRegions", req, cb);
    }
    /**
     * 本接口用于修改访问日志保存期限
     */
    async ModifyAccessPeriod(req, cb) {
        return this.request("ModifyAccessPeriod", req, cb);
    }
    /**
     * 获取waf流量访问趋势
     */
    async DescribeFlowTrend(req, cb) {
        return this.request("DescribeFlowTrend", req, cb);
    }
    /**
     * 本接口用于访问日志的快速分析
     */
    async DescribeAccessFastAnalysis(req, cb) {
        return this.request("DescribeAccessFastAnalysis", req, cb);
    }
    /**
     * 本接口用于获取访问日志索引配置信息
     */
    async DescribeAccessIndex(req, cb) {
        return this.request("DescribeAccessIndex", req, cb);
    }
    /**
     * 本接口用于创建访问日志导出
     */
    async CreateAccessExport(req, cb) {
        return this.request("CreateAccessExport", req, cb);
    }
    /**
     * 创建攻击日志下载任务
     */
    async CreateAttackDownloadTask(req, cb) {
        return this.request("CreateAttackDownloadTask", req, cb);
    }
}
exports.Client = Client;
