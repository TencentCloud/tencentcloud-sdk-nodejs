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
 * cws client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(clientConfig) {
        super("cws.tencentcloudapi.com", "2018-03-12", clientConfig);
    }
    /**
     * 本接口 (CreateVulsReport) 用于生成漏洞报告并返回下载链接。
     */
    async CreateVulsReport(req, cb) {
        return this.request("CreateVulsReport", req, cb);
    }
    /**
     * 本接口 (DescribeVuls) 用于查询一个或多个漏洞的详细信息。
     */
    async DescribeVuls(req, cb) {
        return this.request("DescribeVuls", req, cb);
    }
    /**
     * 本接口 (ModifyMonitorAttribute) 用于修改监测任务的属性。
     */
    async ModifyMonitorAttribute(req, cb) {
        return this.request("ModifyMonitorAttribute", req, cb);
    }
    /**
     * 本接口（CreateSitesScans）用于新增一个或多个站点的单次扫描任务。
     */
    async CreateSitesScans(req, cb) {
        return this.request("CreateSitesScans", req, cb);
    }
    /**
     * 本接口（CreateSites）用于新增一个或多个站点。
     */
    async CreateSites(req, cb) {
        return this.request("CreateSites", req, cb);
    }
    /**
     * 本接口（CreateVulsMisinformation）可以用于新增一个或多个漏洞误报信息。
     */
    async CreateVulsMisinformation(req, cb) {
        return this.request("CreateVulsMisinformation", req, cb);
    }
    /**
     * 本接口 (DescribeConfig) 用于查询用户配置的详细信息。
     */
    async DescribeConfig(req, cb) {
        return this.request("DescribeConfig", req, cb);
    }
    /**
     * 本接口 (DescribeSites) 用于查询一个或多个站点的详细信息。
     */
    async DescribeSites(req, cb) {
        return this.request("DescribeSites", req, cb);
    }
    /**
     * 本接口 (DescribeSitesVerification) 用于查询一个或多个待验证站点的验证信息。
     */
    async DescribeSitesVerification(req, cb) {
        return this.request("DescribeSitesVerification", req, cb);
    }
    /**
     * 本接口 (ModifySiteAttribute) 用于修改站点的属性。
     */
    async ModifySiteAttribute(req, cb) {
        return this.request("ModifySiteAttribute", req, cb);
    }
    /**
     * 本接口 (ModifyConfigAttribute) 用于修改用户配置的属性。
     */
    async ModifyConfigAttribute(req, cb) {
        return this.request("ModifyConfigAttribute", req, cb);
    }
    /**
     * 本接口 (DescribeVulsNumberTimeline) 用于查询漏洞数随时间变化统计信息。
     */
    async DescribeVulsNumberTimeline(req, cb) {
        return this.request("DescribeVulsNumberTimeline", req, cb);
    }
    /**
     * 本接口 (VerifySites) 用于验证一个或多个待验证站点。
     */
    async VerifySites(req, cb) {
        return this.request("VerifySites", req, cb);
    }
    /**
     * 本接口 (DeleteMonitors) 用于删除用户监控任务。
     */
    async DeleteMonitors(req, cb) {
        return this.request("DeleteMonitors", req, cb);
    }
    /**
     * 本接口（CreateMonitors）用于新增一个或多个站点的监测任务。
     */
    async CreateMonitors(req, cb) {
        return this.request("CreateMonitors", req, cb);
    }
    /**
     * 本接口 (DeleteSites) 用于删除站点。
     */
    async DeleteSites(req, cb) {
        return this.request("DeleteSites", req, cb);
    }
    /**
     * 本接口 (DescribeVulsNumber) 用于查询用户网站的漏洞总计数量。
     */
    async DescribeVulsNumber(req, cb) {
        return this.request("DescribeVulsNumber", req, cb);
    }
    /**
     * 本接口 (DescribeMonitors) 用于查询一个或多个监控任务的详细信息。
     */
    async DescribeMonitors(req, cb) {
        return this.request("DescribeMonitors", req, cb);
    }
    /**
     * 本接口 (DescribeSiteQuota) 用于查询用户购买的扫描次数总数和已使用数。
     */
    async DescribeSiteQuota(req, cb) {
        return this.request("DescribeSiteQuota", req, cb);
    }
}
exports.Client = Client;
