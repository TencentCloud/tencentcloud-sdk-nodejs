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
const DescribeAssetDetailRequest = models.DescribeAssetDetailRequest;
const DescribeVulListResponse = models.DescribeVulListResponse;
const DescribeComplianceAssetListResponse = models.DescribeComplianceAssetListResponse;
const DataCheck = models.DataCheck;
const DescribeCheckConfigAssetListRequest = models.DescribeCheckConfigAssetListRequest;
const Asset = models.Asset;
const DescribeComplianceListResponse = models.DescribeComplianceListResponse;
const DescribeConfigListResponse = models.DescribeConfigListResponse;
const AggregationObj = models.AggregationObj;
const DescribeCheckConfigDetailResponse = models.DescribeCheckConfigDetailResponse;
const DescribeAssetListResponse = models.DescribeAssetListResponse;
const DescribeCheckConfigAssetListResponse = models.DescribeCheckConfigAssetListResponse;
const DescribeCheckConfigDetailRequest = models.DescribeCheckConfigDetailRequest;
const SaDivulgeDataQueryPub = models.SaDivulgeDataQueryPub;
const DescribeAssetListRequest = models.DescribeAssetListRequest;
const DescribeComplianceDetailResponse = models.DescribeComplianceDetailResponse;
const DescribeAssetsMappingListResponse = models.DescribeAssetsMappingListResponse;
const Tag = models.Tag;
const VulItem = models.VulItem;
const DescribeComplianceListRequest = models.DescribeComplianceListRequest;
const DescribeVulListRequest = models.DescribeVulListRequest;
const DescribeLeakDetectionListRequest = models.DescribeLeakDetectionListRequest;
const DescribeEventDetailResponse = models.DescribeEventDetailResponse;
const DescribeSafetyEventListResponse = models.DescribeSafetyEventListResponse;
const SaDivulgeDataQueryPubList = models.SaDivulgeDataQueryPubList;
const DescribeSafetyEventListRequest = models.DescribeSafetyEventListRequest;
const ComplianceCheckDetail = models.ComplianceCheckDetail;
const SaDivulgeDataQueryPubResponse = models.SaDivulgeDataQueryPubResponse;
const Bucket = models.Bucket;
const DescribeConfigListRequest = models.DescribeConfigListRequest;
const Filter = models.Filter;
const AssetList = models.AssetList;
const DataAssetMapping = models.DataAssetMapping;
const VulList = models.VulList;
const DescribeLeakDetectionListResponse = models.DescribeLeakDetectionListResponse;
const DataEvent = models.DataEvent;
const CheckConfigDetail = models.CheckConfigDetail;
const DescribeEventDetailRequest = models.DescribeEventDetailRequest;
const CheckAssetItem = models.CheckAssetItem;
const SaDivulgeDataQueryPubRequest = models.SaDivulgeDataQueryPubRequest;
const DescribeVulDetailRequest = models.DescribeVulDetailRequest;
const DataCompliance = models.DataCompliance;
const DescribeAssetsMappingListRequest = models.DescribeAssetsMappingListRequest;
const DescribeComplianceDetailRequest = models.DescribeComplianceDetailRequest;
const AssetDetail = models.AssetDetail;
const DescribeComplianceAssetListRequest = models.DescribeComplianceAssetListRequest;
const DescribeAssetDetailResponse = models.DescribeAssetDetailResponse;
const DescribeVulDetailResponse = models.DescribeVulDetailResponse;


/**
 * ssa client
 * @class
 */
class SsaClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("ssa.tencentcloudapi.com", "2018-06-08", credential, region, profile);
    }
    
    /**
     * 合规管理总览页检查项列表
     * @param {DescribeComplianceListRequest} req
     * @param {function(string, DescribeComplianceListResponse):void} cb
     * @public
     */
    DescribeComplianceList(req, cb) {
        let resp = new DescribeComplianceListResponse();
        this.request("DescribeComplianceList", req, resp, cb);
    }

    /**
     * 云配置检查项总览页检查项列表
     * @param {DescribeConfigListRequest} req
     * @param {function(string, DescribeConfigListResponse):void} cb
     * @public
     */
    DescribeConfigList(req, cb) {
        let resp = new DescribeConfigListResponse();
        this.request("DescribeConfigList", req, resp, cb);
    }

    /**
     * 资产安全资产列表
     * @param {DescribeAssetListRequest} req
     * @param {function(string, DescribeAssetListResponse):void} cb
     * @public
     */
    DescribeAssetList(req, cb) {
        let resp = new DescribeAssetListResponse();
        this.request("DescribeAssetList", req, resp, cb);
    }

    /**
     * 获取安全事件详情
     * @param {DescribeEventDetailRequest} req
     * @param {function(string, DescribeEventDetailResponse):void} cb
     * @public
     */
    DescribeEventDetail(req, cb) {
        let resp = new DescribeEventDetailResponse();
        this.request("DescribeEventDetail", req, resp, cb);
    }

    /**
     * 查询【通用字段】【泄露监测数据列表】
     * @param {SaDivulgeDataQueryPubRequest} req
     * @param {function(string, SaDivulgeDataQueryPubResponse):void} cb
     * @public
     */
    SaDivulgeDataQueryPub(req, cb) {
        let resp = new SaDivulgeDataQueryPubResponse();
        this.request("SaDivulgeDataQueryPub", req, resp, cb);
    }

    /**
     * 合规管理-资产列表
     * @param {DescribeComplianceAssetListRequest} req
     * @param {function(string, DescribeComplianceAssetListResponse):void} cb
     * @public
     */
    DescribeComplianceAssetList(req, cb) {
        let resp = new DescribeComplianceAssetListResponse();
        this.request("DescribeComplianceAssetList", req, resp, cb);
    }

    /**
     * 云安全配置管理资产组列表
     * @param {DescribeCheckConfigAssetListRequest} req
     * @param {function(string, DescribeCheckConfigAssetListResponse):void} cb
     * @public
     */
    DescribeCheckConfigAssetList(req, cb) {
        let resp = new DescribeCheckConfigAssetListResponse();
        this.request("DescribeCheckConfigAssetList", req, resp, cb);
    }

    /**
     * 获取泄露列表
     * @param {DescribeLeakDetectionListRequest} req
     * @param {function(string, DescribeLeakDetectionListResponse):void} cb
     * @public
     */
    DescribeLeakDetectionList(req, cb) {
        let resp = new DescribeLeakDetectionListResponse();
        this.request("DescribeLeakDetectionList", req, resp, cb);
    }

    /**
     * 资产测绘-测绘列表
     * @param {DescribeAssetsMappingListRequest} req
     * @param {function(string, DescribeAssetsMappingListResponse):void} cb
     * @public
     */
    DescribeAssetsMappingList(req, cb) {
        let resp = new DescribeAssetsMappingListResponse();
        this.request("DescribeAssetsMappingList", req, resp, cb);
    }

    /**
     * 漏洞管理页，获取漏洞列表
     * @param {DescribeVulListRequest} req
     * @param {function(string, DescribeVulListResponse):void} cb
     * @public
     */
    DescribeVulList(req, cb) {
        let resp = new DescribeVulListResponse();
        this.request("DescribeVulList", req, resp, cb);
    }

    /**
     * 资产安全页资产详情
     * @param {DescribeAssetDetailRequest} req
     * @param {function(string, DescribeAssetDetailResponse):void} cb
     * @public
     */
    DescribeAssetDetail(req, cb) {
        let resp = new DescribeAssetDetailResponse();
        this.request("DescribeAssetDetail", req, resp, cb);
    }

    /**
     * 云安全配置检查项详情
     * @param {DescribeCheckConfigDetailRequest} req
     * @param {function(string, DescribeCheckConfigDetailResponse):void} cb
     * @public
     */
    DescribeCheckConfigDetail(req, cb) {
        let resp = new DescribeCheckConfigDetailResponse();
        this.request("DescribeCheckConfigDetail", req, resp, cb);
    }

    /**
     * 合规管理检查项详情
     * @param {DescribeComplianceDetailRequest} req
     * @param {function(string, DescribeComplianceDetailResponse):void} cb
     * @public
     */
    DescribeComplianceDetail(req, cb) {
        let resp = new DescribeComplianceDetailResponse();
        this.request("DescribeComplianceDetail", req, resp, cb);
    }

    /**
     * 获取安全事件列表
     * @param {DescribeSafetyEventListRequest} req
     * @param {function(string, DescribeSafetyEventListResponse):void} cb
     * @public
     */
    DescribeSafetyEventList(req, cb) {
        let resp = new DescribeSafetyEventListResponse();
        this.request("DescribeSafetyEventList", req, resp, cb);
    }

    /**
     * 漏洞列表页，获取漏洞详情信息
     * @param {DescribeVulDetailRequest} req
     * @param {function(string, DescribeVulDetailResponse):void} cb
     * @public
     */
    DescribeVulDetail(req, cb) {
        let resp = new DescribeVulDetailResponse();
        this.request("DescribeVulDetail", req, resp, cb);
    }


}
module.exports = SsaClient;
