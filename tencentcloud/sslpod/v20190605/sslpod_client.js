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
const RefreshDomainResponse = models.RefreshDomainResponse;
const DeleteDomainRequest = models.DeleteDomainRequest;
const DescribeNoticeInfoRequest = models.DescribeNoticeInfoRequest;
const ModifyDomainTagsResponse = models.ModifyDomainTagsResponse;
const DescribeDomainCertsRequest = models.DescribeDomainCertsRequest;
const RefreshDomainRequest = models.RefreshDomainRequest;
const ResolveDomainRequest = models.ResolveDomainRequest;
const DescribeDomains = models.DescribeDomains;
const DashboardResult = models.DashboardResult;
const DescribeNoticeInfoResponse = models.DescribeNoticeInfoResponse;
const ChartNameValue = models.ChartNameValue;
const CreateDomainRequest = models.CreateDomainRequest;
const ResolveDomainResponse = models.ResolveDomainResponse;
const ModifyDomainTagsRequest = models.ModifyDomainTagsRequest;
const CertInfo = models.CertInfo;
const DescribeDashboardResponse = models.DescribeDashboardResponse;
const DescribeDomainTagsResponse = models.DescribeDomainTagsResponse;
const ChartHistogram = models.ChartHistogram;
const LimitInfo = models.LimitInfo;
const DescribeDashboardRequest = models.DescribeDashboardRequest;
const DescribeDomainsResponse = models.DescribeDomainsResponse;
const NoticeInfoResult = models.NoticeInfoResult;
const DescribeDomainCertsResponse = models.DescribeDomainCertsResponse;
const DomainSiteInfo = models.DomainSiteInfo;
const DeleteDomainResponse = models.DeleteDomainResponse;
const CreateDomainResponse = models.CreateDomainResponse;
const DescribeDomainTagsRequest = models.DescribeDomainTagsRequest;
const DescribeDomainsRequest = models.DescribeDomainsRequest;


/**
 * sslpod client
 * @class
 */
class SslpodClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("sslpod.tencentcloudapi.com", "2019-06-05", credential, region, profile);
    }
    
    /**
     * 获取通知额度信息
     * @param {DescribeNoticeInfoRequest} req
     * @param {function(string, DescribeNoticeInfoResponse):void} cb
     * @public
     */
    DescribeNoticeInfo(req, cb) {
        let resp = new DescribeNoticeInfoResponse();
        this.request("DescribeNoticeInfo", req, resp, cb);
    }

    /**
     * 强制重新检测域名
     * @param {RefreshDomainRequest} req
     * @param {function(string, RefreshDomainResponse):void} cb
     * @public
     */
    RefreshDomain(req, cb) {
        let resp = new RefreshDomainResponse();
        this.request("RefreshDomain", req, resp, cb);
    }

    /**
     * 修改域名tag
     * @param {ModifyDomainTagsRequest} req
     * @param {function(string, ModifyDomainTagsResponse):void} cb
     * @public
     */
    ModifyDomainTags(req, cb) {
        let resp = new ModifyDomainTagsResponse();
        this.request("ModifyDomainTags", req, resp, cb);
    }

    /**
     * 获取账号下所有tag
     * @param {DescribeDomainTagsRequest} req
     * @param {function(string, DescribeDomainTagsResponse):void} cb
     * @public
     */
    DescribeDomainTags(req, cb) {
        let resp = new DescribeDomainTagsResponse();
        this.request("DescribeDomainTags", req, resp, cb);
    }

    /**
     * 获取域名关联证书
     * @param {DescribeDomainCertsRequest} req
     * @param {function(string, DescribeDomainCertsResponse):void} cb
     * @public
     */
    DescribeDomainCerts(req, cb) {
        let resp = new DescribeDomainCertsResponse();
        this.request("DescribeDomainCerts", req, resp, cb);
    }

    /**
     * 获取仪表盘数据
     * @param {DescribeDashboardRequest} req
     * @param {function(string, DescribeDashboardResponse):void} cb
     * @public
     */
    DescribeDashboard(req, cb) {
        let resp = new DescribeDashboardResponse();
        this.request("DescribeDashboard", req, resp, cb);
    }

    /**
     * 通过searchType搜索已经添加的域名
     * @param {DescribeDomainsRequest} req
     * @param {function(string, DescribeDomainsResponse):void} cb
     * @public
     */
    DescribeDomains(req, cb) {
        let resp = new DescribeDomainsResponse();
        this.request("DescribeDomains", req, resp, cb);
    }

    /**
     * 通过域名ID删除监控的域名
     * @param {DeleteDomainRequest} req
     * @param {function(string, DeleteDomainResponse):void} cb
     * @public
     */
    DeleteDomain(req, cb) {
        let resp = new DeleteDomainResponse();
        this.request("DeleteDomain", req, resp, cb);
    }

    /**
     * 通过域名端口添加监控
     * @param {CreateDomainRequest} req
     * @param {function(string, CreateDomainResponse):void} cb
     * @public
     */
    CreateDomain(req, cb) {
        let resp = new CreateDomainResponse();
        this.request("CreateDomain", req, resp, cb);
    }

    /**
     * 解析域名获得多个IP地址
     * @param {ResolveDomainRequest} req
     * @param {function(string, ResolveDomainResponse):void} cb
     * @public
     */
    ResolveDomain(req, cb) {
        let resp = new ResolveDomainResponse();
        this.request("ResolveDomain", req, resp, cb);
    }


}
module.exports = SslpodClient;
