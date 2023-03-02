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
const MatchKBPURLListResponse = models.MatchKBPURLListResponse;
const DescribeKBComponentVulnerabilityRequest = models.DescribeKBComponentVulnerabilityRequest;
const ComponentVulnerabilityUnion = models.ComponentVulnerabilityUnion;
const LicenseUnion = models.LicenseUnion;
const DescribeKBComponentVulnerabilityResponse = models.DescribeKBComponentVulnerabilityResponse;
const LicenseSummary = models.LicenseSummary;
const Qualifier = models.Qualifier;
const CVSSV3Info = models.CVSSV3Info;
const Component = models.Component;
const DescribeKBVulnerabilityResponse = models.DescribeKBVulnerabilityResponse;
const DescribeKBLicenseResponse = models.DescribeKBLicenseResponse;
const MatchKBPURLListRequest = models.MatchKBPURLListRequest;
const VulnerabilityUnion = models.VulnerabilityUnion;
const LicenseDetail = models.LicenseDetail;
const DescribeKBVulnerabilityRequest = models.DescribeKBVulnerabilityRequest;
const VulnerabilityDetail = models.VulnerabilityDetail;
const DescribeKBComponentResponse = models.DescribeKBComponentResponse;
const VulnerabilitySummary = models.VulnerabilitySummary;
const DescribeKBLicenseRequest = models.DescribeKBLicenseRequest;
const CVSSV2Info = models.CVSSV2Info;
const DescribeKBComponentRequest = models.DescribeKBComponentRequest;
const LicenseRestriction = models.LicenseRestriction;
const ComponentVulnerabilitySummary = models.ComponentVulnerabilitySummary;
const PURL = models.PURL;


/**
 * bsca client
 * @class
 */
class BscaClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("bsca.tencentcloudapi.com", "2021-08-11", credential, region, profile);
    }
    
    /**
     * 本接口(DescribeKBComponentVulnerability)用于在知识库中查询开源组件的漏洞信息。
     * @param {DescribeKBComponentVulnerabilityRequest} req
     * @param {function(string, DescribeKBComponentVulnerabilityResponse):void} cb
     * @public
     */
    DescribeKBComponentVulnerability(req, cb) {
        let resp = new DescribeKBComponentVulnerabilityResponse();
        this.request("DescribeKBComponentVulnerability", req, resp, cb);
    }

    /**
     * 本接口(DescribeKBComponent)用于在知识库中查询开源组件信息。本接口根据用户输入的PURL在知识库中寻找对应的开源组件，其中Name为必填字段。
     * @param {DescribeKBComponentRequest} req
     * @param {function(string, DescribeKBComponentResponse):void} cb
     * @public
     */
    DescribeKBComponent(req, cb) {
        let resp = new DescribeKBComponentResponse();
        this.request("DescribeKBComponent", req, resp, cb);
    }

    /**
     * 本接口(DescribeKBLicense)用于在知识库中查询许可证信息。
     * @param {DescribeKBLicenseRequest} req
     * @param {function(string, DescribeKBLicenseResponse):void} cb
     * @public
     */
    DescribeKBLicense(req, cb) {
        let resp = new DescribeKBLicenseResponse();
        this.request("DescribeKBLicense", req, resp, cb);
    }

    /**
     * 本接口(DescribeKBVulnerability)用于在知识库中查询漏洞详细信息，支持根据CVE ID查询或者根据Vul ID查询。
     * @param {DescribeKBVulnerabilityRequest} req
     * @param {function(string, DescribeKBVulnerabilityResponse):void} cb
     * @public
     */
    DescribeKBVulnerability(req, cb) {
        let resp = new DescribeKBVulnerabilityResponse();
        this.request("DescribeKBVulnerability", req, resp, cb);
    }

    /**
     * 本接口(MatchKBPURLList)用于在知识库中匹配与特征对应的开源组件列表。
     * @param {MatchKBPURLListRequest} req
     * @param {function(string, MatchKBPURLListResponse):void} cb
     * @public
     */
    MatchKBPURLList(req, cb) {
        let resp = new MatchKBPURLListResponse();
        this.request("MatchKBPURLList", req, resp, cb);
    }


}
module.exports = BscaClient;
