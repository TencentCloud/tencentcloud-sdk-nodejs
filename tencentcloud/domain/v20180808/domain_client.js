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
const CheckDomainResponse = models.CheckDomainResponse;
const BatchStatus = models.BatchStatus;
const DomainList = models.DomainList;
const DescribeDomainPriceListRequest = models.DescribeDomainPriceListRequest;
const DescribeDomainBaseInfoResponse = models.DescribeDomainBaseInfoResponse;
const TemplateInfo = models.TemplateInfo;
const CreateDomainBatchRequest = models.CreateDomainBatchRequest;
const CheckBatchStatusRequest = models.CheckBatchStatusRequest;
const CheckBatchStatusResponse = models.CheckBatchStatusResponse;
const DescribeTemplateListResponse = models.DescribeTemplateListResponse;
const DescribeDomainBaseInfoRequest = models.DescribeDomainBaseInfoRequest;
const DescribeTemplateListRequest = models.DescribeTemplateListRequest;
const CreateDomainBatchResponse = models.CreateDomainBatchResponse;
const DomainBaseInfo = models.DomainBaseInfo;
const PriceInfo = models.PriceInfo;
const DescribeDomainNameListRequest = models.DescribeDomainNameListRequest;
const DescribeDomainNameListResponse = models.DescribeDomainNameListResponse;
const ContactInfo = models.ContactInfo;
const DescribeDomainPriceListResponse = models.DescribeDomainPriceListResponse;
const CheckDomainRequest = models.CheckDomainRequest;
const CertificateInfo = models.CertificateInfo;


/**
 * domain client
 * @class
 */
class DomainClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("domain.tencentcloudapi.com", "2018-08-08", credential, region, profile);
    }
    
    /**
     * 本接口 (  DescribeDomainNameList ) 获取域名列表。

默认接口请求频率限制：20次/秒。

     * @param {DescribeDomainNameListRequest} req
     * @param {function(string, DescribeDomainNameListResponse):void} cb
     * @public
     */
    DescribeDomainNameList(req, cb) {
        let resp = new DescribeDomainNameListResponse();
        this.request("DescribeDomainNameList", req, resp, cb);
    }

    /**
     * 本接口 ( CreateDomainBatch ) 用于批量注册域名 。

默认接口请求频率限制：20次/秒。
     * @param {CreateDomainBatchRequest} req
     * @param {function(string, CreateDomainBatchResponse):void} cb
     * @public
     */
    CreateDomainBatch(req, cb) {
        let resp = new CreateDomainBatchResponse();
        this.request("CreateDomainBatch", req, resp, cb);
    }

    /**
     * 本接口 (  DescribeDomainBaseInfo) 获取域名基础信息。

默认接口请求频率限制：20次/秒。

     * @param {DescribeDomainBaseInfoRequest} req
     * @param {function(string, DescribeDomainBaseInfoResponse):void} cb
     * @public
     */
    DescribeDomainBaseInfo(req, cb) {
        let resp = new DescribeDomainBaseInfoResponse();
        this.request("DescribeDomainBaseInfo", req, resp, cb);
    }

    /**
     * 本接口 (DescribeTemplateList) 用于获取模板列表。

默认接口请求频率限制：20次/秒。

     * @param {DescribeTemplateListRequest} req
     * @param {function(string, DescribeTemplateListResponse):void} cb
     * @public
     */
    DescribeTemplateList(req, cb) {
        let resp = new DescribeTemplateListResponse();
        this.request("DescribeTemplateList", req, resp, cb);
    }

    /**
     * 按照域名后缀获取对应的价格列表
     * @param {DescribeDomainPriceListRequest} req
     * @param {function(string, DescribeDomainPriceListResponse):void} cb
     * @public
     */
    DescribeDomainPriceList(req, cb) {
        let resp = new DescribeDomainPriceListResponse();
        this.request("DescribeDomainPriceList", req, resp, cb);
    }

    /**
     * 本接口 ( CheckBatchStatus ) 用于检查批量任务状态 。

默认接口请求频率限制：20次/秒。
     * @param {CheckBatchStatusRequest} req
     * @param {function(string, CheckBatchStatusResponse):void} cb
     * @public
     */
    CheckBatchStatus(req, cb) {
        let resp = new CheckBatchStatusResponse();
        this.request("CheckBatchStatus", req, resp, cb);
    }

    /**
     * 检查域名是否可以注册。
     * @param {CheckDomainRequest} req
     * @param {function(string, CheckDomainResponse):void} cb
     * @public
     */
    CheckDomain(req, cb) {
        let resp = new CheckDomainResponse();
        this.request("CheckDomain", req, resp, cb);
    }


}
module.exports = DomainClient;
