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
const models = require("./models");
const AbstractClient = require('../../common/abstract_client')
const ModifySiteAttributeRequest = models.ModifySiteAttributeRequest;
const MonitorsDetail = models.MonitorsDetail;
const DescribeSitesResponse = models.DescribeSitesResponse;
const DescribeMonitorsResponse = models.DescribeMonitorsResponse;
const DeleteSitesRequest = models.DeleteSitesRequest;
const DescribeConfigRequest = models.DescribeConfigRequest;
const DescribeVulsRequest = models.DescribeVulsRequest;
const ModifyConfigAttributeResponse = models.ModifyConfigAttributeResponse;
const CreateSitesResponse = models.CreateSitesResponse;
const DescribeVulsNumberRequest = models.DescribeVulsNumberRequest;
const ModifyMonitorAttributeResponse = models.ModifyMonitorAttributeResponse;
const ModifySiteAttributeResponse = models.ModifySiteAttributeResponse;
const CreateVulsReportRequest = models.CreateVulsReportRequest;
const CreateSitesScansResponse = models.CreateSitesScansResponse;
const SitesVerification = models.SitesVerification;
const DescribeSiteQuotaResponse = models.DescribeSiteQuotaResponse;
const DescribeVulsNumberResponse = models.DescribeVulsNumberResponse;
const CreateVulsMisinformationRequest = models.CreateVulsMisinformationRequest;
const DescribeVulsNumberTimelineRequest = models.DescribeVulsNumberTimelineRequest;
const MonitorMiniSite = models.MonitorMiniSite;
const CreateSitesScansRequest = models.CreateSitesScansRequest;
const CreateMonitorsResponse = models.CreateMonitorsResponse;
const DescribeVulsResponse = models.DescribeVulsResponse;
const VerifySitesResponse = models.VerifySitesResponse;
const CreateMonitorsRequest = models.CreateMonitorsRequest;
const DeleteMonitorsResponse = models.DeleteMonitorsResponse;
const Monitor = models.Monitor;
const Vul = models.Vul;
const VulsTimeline = models.VulsTimeline;
const CreateVulsMisinformationResponse = models.CreateVulsMisinformationResponse;
const VerifySitesRequest = models.VerifySitesRequest;
const MiniSite = models.MiniSite;
const ModifyMonitorAttributeRequest = models.ModifyMonitorAttributeRequest;
const DescribeVulsNumberTimelineResponse = models.DescribeVulsNumberTimelineResponse;
const CreateVulsReportResponse = models.CreateVulsReportResponse;
const CreateSitesRequest = models.CreateSitesRequest;
const ModifyConfigAttributeRequest = models.ModifyConfigAttributeRequest;
const Filter = models.Filter;
const DescribeMonitorsRequest = models.DescribeMonitorsRequest;
const DeleteSitesResponse = models.DeleteSitesResponse;
const DeleteMonitorsRequest = models.DeleteMonitorsRequest;
const DescribeSitesVerificationResponse = models.DescribeSitesVerificationResponse;
const Site = models.Site;
const DescribeConfigResponse = models.DescribeConfigResponse;
const DescribeSitesRequest = models.DescribeSitesRequest;
const DescribeSiteQuotaRequest = models.DescribeSiteQuotaRequest;
const DescribeSitesVerificationRequest = models.DescribeSitesVerificationRequest;


/**
 * cws client
 * @class
 */
class CwsClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("cws.tencentcloudapi.com", "2018-03-12", credential, region, profile);
    }
    
    /**
     * 本接口 (CreateVulsReport) 用于生成漏洞报告并返回下载链接。
     * @param {CreateVulsReportRequest} req
     * @param {function(string, CreateVulsReportResponse):void} cb
     * @public
     */
    CreateVulsReport(req, cb) {
        let resp = new CreateVulsReportResponse();
        this.request("CreateVulsReport", req, resp, cb);
    }

    /**
     * 本接口 (DescribeVuls) 用于查询一个或多个漏洞的详细信息。
     * @param {DescribeVulsRequest} req
     * @param {function(string, DescribeVulsResponse):void} cb
     * @public
     */
    DescribeVuls(req, cb) {
        let resp = new DescribeVulsResponse();
        this.request("DescribeVuls", req, resp, cb);
    }

    /**
     * 本接口 (ModifyMonitorAttribute) 用于修改监测任务的属性。
     * @param {ModifyMonitorAttributeRequest} req
     * @param {function(string, ModifyMonitorAttributeResponse):void} cb
     * @public
     */
    ModifyMonitorAttribute(req, cb) {
        let resp = new ModifyMonitorAttributeResponse();
        this.request("ModifyMonitorAttribute", req, resp, cb);
    }

    /**
     * 本接口（CreateSitesScans）用于新增一个或多个站点的单次扫描任务。
     * @param {CreateSitesScansRequest} req
     * @param {function(string, CreateSitesScansResponse):void} cb
     * @public
     */
    CreateSitesScans(req, cb) {
        let resp = new CreateSitesScansResponse();
        this.request("CreateSitesScans", req, resp, cb);
    }

    /**
     * 本接口（CreateSites）用于新增一个或多个站点。
     * @param {CreateSitesRequest} req
     * @param {function(string, CreateSitesResponse):void} cb
     * @public
     */
    CreateSites(req, cb) {
        let resp = new CreateSitesResponse();
        this.request("CreateSites", req, resp, cb);
    }

    /**
     * 本接口（CreateVulsMisinformation）可以用于新增一个或多个漏洞误报信息。
     * @param {CreateVulsMisinformationRequest} req
     * @param {function(string, CreateVulsMisinformationResponse):void} cb
     * @public
     */
    CreateVulsMisinformation(req, cb) {
        let resp = new CreateVulsMisinformationResponse();
        this.request("CreateVulsMisinformation", req, resp, cb);
    }

    /**
     * 本接口 (DescribeConfig) 用于查询用户配置的详细信息。
     * @param {DescribeConfigRequest} req
     * @param {function(string, DescribeConfigResponse):void} cb
     * @public
     */
    DescribeConfig(req, cb) {
        let resp = new DescribeConfigResponse();
        this.request("DescribeConfig", req, resp, cb);
    }

    /**
     * 本接口 (DescribeSites) 用于查询一个或多个站点的详细信息。
     * @param {DescribeSitesRequest} req
     * @param {function(string, DescribeSitesResponse):void} cb
     * @public
     */
    DescribeSites(req, cb) {
        let resp = new DescribeSitesResponse();
        this.request("DescribeSites", req, resp, cb);
    }

    /**
     * 本接口 (DescribeSitesVerification) 用于查询一个或多个待验证站点的验证信息。
     * @param {DescribeSitesVerificationRequest} req
     * @param {function(string, DescribeSitesVerificationResponse):void} cb
     * @public
     */
    DescribeSitesVerification(req, cb) {
        let resp = new DescribeSitesVerificationResponse();
        this.request("DescribeSitesVerification", req, resp, cb);
    }

    /**
     * 本接口 (ModifySiteAttribute) 用于修改站点的属性。
     * @param {ModifySiteAttributeRequest} req
     * @param {function(string, ModifySiteAttributeResponse):void} cb
     * @public
     */
    ModifySiteAttribute(req, cb) {
        let resp = new ModifySiteAttributeResponse();
        this.request("ModifySiteAttribute", req, resp, cb);
    }

    /**
     * 本接口 (ModifyConfigAttribute) 用于修改用户配置的属性。
     * @param {ModifyConfigAttributeRequest} req
     * @param {function(string, ModifyConfigAttributeResponse):void} cb
     * @public
     */
    ModifyConfigAttribute(req, cb) {
        let resp = new ModifyConfigAttributeResponse();
        this.request("ModifyConfigAttribute", req, resp, cb);
    }

    /**
     * 本接口 (DescribeVulsNumberTimeline) 用于查询漏洞数随时间变化统计信息。
     * @param {DescribeVulsNumberTimelineRequest} req
     * @param {function(string, DescribeVulsNumberTimelineResponse):void} cb
     * @public
     */
    DescribeVulsNumberTimeline(req, cb) {
        let resp = new DescribeVulsNumberTimelineResponse();
        this.request("DescribeVulsNumberTimeline", req, resp, cb);
    }

    /**
     * 本接口 (VerifySites) 用于验证一个或多个待验证站点。
     * @param {VerifySitesRequest} req
     * @param {function(string, VerifySitesResponse):void} cb
     * @public
     */
    VerifySites(req, cb) {
        let resp = new VerifySitesResponse();
        this.request("VerifySites", req, resp, cb);
    }

    /**
     * 本接口 (DeleteMonitors) 用于删除用户监控任务。
     * @param {DeleteMonitorsRequest} req
     * @param {function(string, DeleteMonitorsResponse):void} cb
     * @public
     */
    DeleteMonitors(req, cb) {
        let resp = new DeleteMonitorsResponse();
        this.request("DeleteMonitors", req, resp, cb);
    }

    /**
     * 本接口（CreateMonitors）用于新增一个或多个站点的监测任务。
     * @param {CreateMonitorsRequest} req
     * @param {function(string, CreateMonitorsResponse):void} cb
     * @public
     */
    CreateMonitors(req, cb) {
        let resp = new CreateMonitorsResponse();
        this.request("CreateMonitors", req, resp, cb);
    }

    /**
     * 本接口 (DeleteSites) 用于删除站点。
     * @param {DeleteSitesRequest} req
     * @param {function(string, DeleteSitesResponse):void} cb
     * @public
     */
    DeleteSites(req, cb) {
        let resp = new DeleteSitesResponse();
        this.request("DeleteSites", req, resp, cb);
    }

    /**
     * 本接口 (DescribeVulsNumber) 用于查询用户网站的漏洞总计数量。
     * @param {DescribeVulsNumberRequest} req
     * @param {function(string, DescribeVulsNumberResponse):void} cb
     * @public
     */
    DescribeVulsNumber(req, cb) {
        let resp = new DescribeVulsNumberResponse();
        this.request("DescribeVulsNumber", req, resp, cb);
    }

    /**
     * 本接口 (DescribeMonitors) 用于查询一个或多个监控任务的详细信息。
     * @param {DescribeMonitorsRequest} req
     * @param {function(string, DescribeMonitorsResponse):void} cb
     * @public
     */
    DescribeMonitors(req, cb) {
        let resp = new DescribeMonitorsResponse();
        this.request("DescribeMonitors", req, resp, cb);
    }

    /**
     * 本接口 (DescribeSiteQuota) 用于查询用户购买的扫描次数总数和已使用数。
     * @param {DescribeSiteQuotaRequest} req
     * @param {function(string, DescribeSiteQuotaResponse):void} cb
     * @public
     */
    DescribeSiteQuota(req, cb) {
        let resp = new DescribeSiteQuotaResponse();
        this.request("DescribeSiteQuota", req, resp, cb);
    }


}
module.exports = CwsClient;
