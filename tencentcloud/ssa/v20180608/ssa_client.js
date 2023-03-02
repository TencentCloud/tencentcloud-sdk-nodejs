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
const DescribeMappingResultsResponse = models.DescribeMappingResultsResponse;
const DescribeAssetDetailRequest = models.DescribeAssetDetailRequest;
const DescribeSocCheckItemListResponse = models.DescribeSocCheckItemListResponse;
const DescribeVulListResponse = models.DescribeVulListResponse;
const DescribeSocAlertDetailsRequest = models.DescribeSocAlertDetailsRequest;
const DescribeComplianceAssetListResponse = models.DescribeComplianceAssetListResponse;
const DataCheck = models.DataCheck;
const DescribeSocCheckResultListResponse = models.DescribeSocCheckResultListResponse;
const SocCheckItem = models.SocCheckItem;
const DescribeVulDetailResponse = models.DescribeVulDetailResponse;
const MappingResult = models.MappingResult;
const DescribeCheckConfigAssetListRequest = models.DescribeCheckConfigAssetListRequest;
const Asset = models.Asset;
const SaDivulgeDataQueryPubRequest = models.SaDivulgeDataQueryPubRequest;
const DescribeComplianceListResponse = models.DescribeComplianceListResponse;
const DescribeConfigListResponse = models.DescribeConfigListResponse;
const AggregationObj = models.AggregationObj;
const DescribeCheckConfigDetailResponse = models.DescribeCheckConfigDetailResponse;
const DescribeAssetListResponse = models.DescribeAssetListResponse;
const DescribeSocAlertDetailsResponse = models.DescribeSocAlertDetailsResponse;
const VulItem = models.VulItem;
const DescribeCheckConfigAssetListResponse = models.DescribeCheckConfigAssetListResponse;
const Tag = models.Tag;
const SocCheckResult = models.SocCheckResult;
const AlertListData = models.AlertListData;
const SaDivulgeDataQueryPub = models.SaDivulgeDataQueryPub;
const SocComplianceInfoResp = models.SocComplianceInfoResp;
const DescribeAssetListRequest = models.DescribeAssetListRequest;
const DescribeComplianceDetailResponse = models.DescribeComplianceDetailResponse;
const SocProductionItem = models.SocProductionItem;
const DescribeAssetsMappingListResponse = models.DescribeAssetsMappingListResponse;
const DescribeSocAlertListResponse = models.DescribeSocAlertListResponse;
const SocComplianceItem = models.SocComplianceItem;
const QueryFilter = models.QueryFilter;
const SecurityStatus = models.SecurityStatus;
const QuerySort = models.QuerySort;
const DescribeComplianceListRequest = models.DescribeComplianceListRequest;
const DescribeVulListRequest = models.DescribeVulListRequest;
const DescribeLeakDetectionListRequest = models.DescribeLeakDetectionListRequest;
const SocCheckItemV1 = models.SocCheckItemV1;
const DescribeEventDetailResponse = models.DescribeEventDetailResponse;
const DescribeSafetyEventListResponse = models.DescribeSafetyEventListResponse;
const SaDivulgeDataQueryPubList = models.SaDivulgeDataQueryPubList;
const DescribeSocCheckResultListRequest = models.DescribeSocCheckResultListRequest;
const DescribeSafetyEventListRequest = models.DescribeSafetyEventListRequest;
const AssetQueryFilter = models.AssetQueryFilter;
const AlertType = models.AlertType;
const SaEventPubRequest = models.SaEventPubRequest;
const DescribeSocAlertListRequest = models.DescribeSocAlertListRequest;
const ComplianceCheckDetail = models.ComplianceCheckDetail;
const SaDivulgeDataQueryPubResponse = models.SaDivulgeDataQueryPubResponse;
const Bucket = models.Bucket;
const DescribeConfigListRequest = models.DescribeConfigListRequest;
const DescribeSocCspmComplianceResponse = models.DescribeSocCspmComplianceResponse;
const DescribeMappingResultsRequest = models.DescribeMappingResultsRequest;
const Filter = models.Filter;
const AssetList = models.AssetList;
const DataAssetMapping = models.DataAssetMapping;
const DescribeCheckConfigDetailRequest = models.DescribeCheckConfigDetailRequest;
const VulList = models.VulList;
const DescribeLeakDetectionListResponse = models.DescribeLeakDetectionListResponse;
const DescribeAssetDetailListResponse = models.DescribeAssetDetailListResponse;
const DataEvent = models.DataEvent;
const DescribeSocCheckItemListRequest = models.DescribeSocCheckItemListRequest;
const CheckConfigDetail = models.CheckConfigDetail;
const DescribeSocCheckItemListRspRsp = models.DescribeSocCheckItemListRspRsp;
const SaEventPubResponse = models.SaEventPubResponse;
const DescribeEventDetailRequest = models.DescribeEventDetailRequest;
const CheckAssetItem = models.CheckAssetItem;
const AssetTypeStatistic = models.AssetTypeStatistic;
const DescribeSocCheckResultListRspRsp = models.DescribeSocCheckResultListRspRsp;
const DescribeVulDetailRequest = models.DescribeVulDetailRequest;
const ConcernInfo = models.ConcernInfo;
const DescribeAssetsMappingListRequest = models.DescribeAssetsMappingListRequest;
const DataCompliance = models.DataCompliance;
const Results = models.Results;
const ListDataSaEventPub = models.ListDataSaEventPub;
const AssetDetail = models.AssetDetail;
const DescribeComplianceAssetListRequest = models.DescribeComplianceAssetListRequest;
const ObjDataSaEventPub = models.ObjDataSaEventPub;
const DescribeAssetDetailResponse = models.DescribeAssetDetailResponse;
const DescribeAssetDetailListRequest = models.DescribeAssetDetailListRequest;
const DescribeSocCspmComplianceRequest = models.DescribeSocCspmComplianceRequest;
const AlertDetail = models.AlertDetail;
const DescribeComplianceDetailRequest = models.DescribeComplianceDetailRequest;


/**
 * ssa client
 * @class
 */
class SsaClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("ssa.tencentcloudapi.com", "2018-06-08", credential, region, profile);
    }
    
    /**
     * 资产条件查询
     * @param {DescribeAssetDetailListRequest} req
     * @param {function(string, DescribeAssetDetailListResponse):void} cb
     * @public
     */
    DescribeAssetDetailList(req, cb) {
        let resp = new DescribeAssetDetailListResponse();
        this.request("DescribeAssetDetailList", req, resp, cb);
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
     * 获取测绘列表
     * @param {DescribeMappingResultsRequest} req
     * @param {function(string, DescribeMappingResultsResponse):void} cb
     * @public
     */
    DescribeMappingResults(req, cb) {
        let resp = new DescribeMappingResultsResponse();
        this.request("DescribeMappingResults", req, resp, cb);
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
     * 云安全配置检查项列表
     * @param {DescribeSocCheckItemListRequest} req
     * @param {function(string, DescribeSocCheckItemListResponse):void} cb
     * @public
     */
    DescribeSocCheckItemList(req, cb) {
        let resp = new DescribeSocCheckItemListResponse();
        this.request("DescribeSocCheckItemList", req, resp, cb);
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
     * 安全事件通用字段
     * @param {SaEventPubRequest} req
     * @param {function(string, SaEventPubResponse):void} cb
     * @public
     */
    SaEventPub(req, cb) {
        let resp = new SaEventPubResponse();
        this.request("SaEventPub", req, resp, cb);
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
     * 云安全配置检查项结果列表
     * @param {DescribeSocCheckResultListRequest} req
     * @param {function(string, DescribeSocCheckResultListResponse):void} cb
     * @public
     */
    DescribeSocCheckResultList(req, cb) {
        let resp = new DescribeSocCheckResultListResponse();
        this.request("DescribeSocCheckResultList", req, resp, cb);
    }

    /**
     * 返回告警详情
     * @param {DescribeSocAlertDetailsRequest} req
     * @param {function(string, DescribeSocAlertDetailsResponse):void} cb
     * @public
     */
    DescribeSocAlertDetails(req, cb) {
        let resp = new DescribeSocAlertDetailsResponse();
        this.request("DescribeSocAlertDetails", req, resp, cb);
    }

    /**
     * 合规详情项
     * @param {DescribeSocCspmComplianceRequest} req
     * @param {function(string, DescribeSocCspmComplianceResponse):void} cb
     * @public
     */
    DescribeSocCspmCompliance(req, cb) {
        let resp = new DescribeSocCspmComplianceResponse();
        this.request("DescribeSocCspmCompliance", req, resp, cb);
    }

    /**
     * 拉取告警列表
     * @param {DescribeSocAlertListRequest} req
     * @param {function(string, DescribeSocAlertListResponse):void} cb
     * @public
     */
    DescribeSocAlertList(req, cb) {
        let resp = new DescribeSocAlertListResponse();
        this.request("DescribeSocAlertList", req, resp, cb);
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
