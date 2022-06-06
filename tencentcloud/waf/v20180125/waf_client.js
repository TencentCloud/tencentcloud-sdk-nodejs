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
const CreateAccessExportRequest = models.CreateAccessExportRequest;
const DescribeWafAutoDenyRulesResponse = models.DescribeWafAutoDenyRulesResponse;
const DescribeIpHitItemsResponse = models.DescribeIpHitItemsResponse;
const DescribeCustomRulesRspRuleListItem = models.DescribeCustomRulesRspRuleListItem;
const DescribeUserClbWafRegionsResponse = models.DescribeUserClbWafRegionsResponse;
const IpHitItemsData = models.IpHitItemsData;
const DeleteAttackDownloadRecordResponse = models.DeleteAttackDownloadRecordResponse;
const DescribeFlowTrendRequest = models.DescribeFlowTrendRequest;
const DescribeWafAutoDenyStatusRequest = models.DescribeWafAutoDenyStatusRequest;
const AccessLogItems = models.AccessLogItems;
const AddDomainWhiteRuleResponse = models.AddDomainWhiteRuleResponse;
const DescribeIpAccessControlResponse = models.DescribeIpAccessControlResponse;
const ModifyDomainWhiteRuleRequest = models.ModifyDomainWhiteRuleRequest;
const AccessRuleTagInfo = models.AccessRuleTagInfo;
const DescribeAccessIndexRequest = models.DescribeAccessIndexRequest;
const DomainInfo = models.DomainInfo;
const AccessLogItem = models.AccessLogItem;
const DescribeCustomRulesResponse = models.DescribeCustomRulesResponse;
const DeleteSessionRequest = models.DeleteSessionRequest;
const DescribeWafAutoDenyRulesRequest = models.DescribeWafAutoDenyRulesRequest;
const AddCustomRuleResponse = models.AddCustomRuleResponse;
const DescribeFlowTrendResponse = models.DescribeFlowTrendResponse;
const UpsertIpAccessControlRequest = models.UpsertIpAccessControlRequest;
const DescribeCustomRulesPagingInfo = models.DescribeCustomRulesPagingInfo;
const DeleteDownloadRecordRequest = models.DeleteDownloadRecordRequest;
const RuleList = models.RuleList;
const DescribeAccessExportsRequest = models.DescribeAccessExportsRequest;
const ResponseCode = models.ResponseCode;
const ModifyAccessPeriodResponse = models.ModifyAccessPeriodResponse;
const DeleteAccessExportResponse = models.DeleteAccessExportResponse;
const FiltersItemNew = models.FiltersItemNew;
const DescribeAutoDenyIPResponse = models.DescribeAutoDenyIPResponse;
const SearchAccessLogResponse = models.SearchAccessLogResponse;
const IpAccessControlItem = models.IpAccessControlItem;
const DescribeAutoDenyIPRequest = models.DescribeAutoDenyIPRequest;
const DescribeIpAccessControlRequest = models.DescribeIpAccessControlRequest;
const AddSpartaProtectionRequest = models.AddSpartaProtectionRequest;
const DescribeAccessFastAnalysisRequest = models.DescribeAccessFastAnalysisRequest;
const DeleteIpAccessControlRequest = models.DeleteIpAccessControlRequest;
const DeleteDomainWhiteRulesResponse = models.DeleteDomainWhiteRulesResponse;
const CreateAttackDownloadTaskRequest = models.CreateAttackDownloadTaskRequest;
const DescribeWafAutoDenyStatusResponse = models.DescribeWafAutoDenyStatusResponse;
const DeleteDomainWhiteRulesRequest = models.DeleteDomainWhiteRulesRequest;
const ModifyCustomRuleStatusResponse = models.ModifyCustomRuleStatusResponse;
const AddSpartaProtectionResponse = models.AddSpartaProtectionResponse;
const IpAccessControlData = models.IpAccessControlData;
const PortItem = models.PortItem;
const CreateAttackDownloadTaskResponse = models.CreateAttackDownloadTaskResponse;
const WafThreatenIntelligenceDetails = models.WafThreatenIntelligenceDetails;
const DescribeDomainWhiteRulesRequest = models.DescribeDomainWhiteRulesRequest;
const ModifyCustomRuleStatusRequest = models.ModifyCustomRuleStatusRequest;
const DeleteDownloadRecordResponse = models.DeleteDownloadRecordResponse;
const ModifyAccessPeriodRequest = models.ModifyAccessPeriodRequest;
const ModifyWafAutoDenyRulesResponse = models.ModifyWafAutoDenyRulesResponse;
const AccessValueInfo = models.AccessValueInfo;
const DeleteIpAccessControlResponse = models.DeleteIpAccessControlResponse;
const SearchAccessLogRequest = models.SearchAccessLogRequest;
const AccessKeyValueInfo = models.AccessKeyValueInfo;
const AddCustomRuleRequest = models.AddCustomRuleRequest;
const DescribeCustomRulesRequest = models.DescribeCustomRulesRequest;
const ModifyDomainWhiteRuleResponse = models.ModifyDomainWhiteRuleResponse;
const ExportAccessInfo = models.ExportAccessInfo;
const ModifyWafAutoDenyRulesRequest = models.ModifyWafAutoDenyRulesRequest;
const DescribeAccessFastAnalysisResponse = models.DescribeAccessFastAnalysisResponse;
const DescribeDomainsResponse = models.DescribeDomainsResponse;
const AutoDenyDetail = models.AutoDenyDetail;
const ModifyWafAutoDenyStatusRequest = models.ModifyWafAutoDenyStatusRequest;
const ModifyWafThreatenIntelligenceRequest = models.ModifyWafThreatenIntelligenceRequest;
const Strategy = models.Strategy;
const AccessFullTextInfo = models.AccessFullTextInfo;
const DescribeIpHitItemsRequest = models.DescribeIpHitItemsRequest;
const AccessRuleInfo = models.AccessRuleInfo;
const DeleteAccessExportRequest = models.DeleteAccessExportRequest;
const DescribeUserClbWafRegionsRequest = models.DescribeUserClbWafRegionsRequest;
const DescribeDomainWhiteRulesResponse = models.DescribeDomainWhiteRulesResponse;
const DeleteAttackDownloadRecordRequest = models.DeleteAttackDownloadRecordRequest;
const DescribeWafThreatenIntelligenceResponse = models.DescribeWafThreatenIntelligenceResponse;
const AddDomainWhiteRuleRequest = models.AddDomainWhiteRuleRequest;
const UpsertIpAccessControlResponse = models.UpsertIpAccessControlResponse;
const IpHitItem = models.IpHitItem;
const DeleteSessionResponse = models.DeleteSessionResponse;
const ModifyWafAutoDenyStatusResponse = models.ModifyWafAutoDenyStatusResponse;
const DescribeWafThreatenIntelligenceRequest = models.DescribeWafThreatenIntelligenceRequest;
const DescribeAccessIndexResponse = models.DescribeAccessIndexResponse;
const DescribeAccessExportsResponse = models.DescribeAccessExportsResponse;
const CreateAccessExportResponse = models.CreateAccessExportResponse;
const BotStatPointItem = models.BotStatPointItem;
const AccessLogInfo = models.AccessLogInfo;
const AccessRuleKeyValueInfo = models.AccessRuleKeyValueInfo;
const DescribeDomainsRequest = models.DescribeDomainsRequest;
const ModifyWafThreatenIntelligenceResponse = models.ModifyWafThreatenIntelligenceResponse;


/**
 * waf client
 * @class
 */
class WafClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("waf.tencentcloudapi.com", "2018-01-25", credential, region, profile);
    }
    
    /**
     * 本接口用于获取访问日志导出列表
     * @param {DescribeAccessExportsRequest} req
     * @param {function(string, DescribeAccessExportsResponse):void} cb
     * @public
     */
    DescribeAccessExports(req, cb) {
        let resp = new DescribeAccessExportsResponse();
        this.request("DescribeAccessExports", req, resp, cb);
    }

    /**
     * 获取防护配置中的自定义策略列表
     * @param {DescribeCustomRulesRequest} req
     * @param {function(string, DescribeCustomRulesResponse):void} cb
     * @public
     */
    DescribeCustomRules(req, cb) {
        let resp = new DescribeCustomRulesResponse();
        this.request("DescribeCustomRules", req, resp, cb);
    }

    /**
     * 开启或禁用自定义策略
     * @param {ModifyCustomRuleStatusRequest} req
     * @param {function(string, ModifyCustomRuleStatusResponse):void} cb
     * @public
     */
    ModifyCustomRuleStatus(req, cb) {
        let resp = new ModifyCustomRuleStatusResponse();
        this.request("ModifyCustomRuleStatus", req, resp, cb);
    }

    /**
     * 本接口用于删除访问日志导出
     * @param {DeleteAccessExportRequest} req
     * @param {function(string, DeleteAccessExportResponse):void} cb
     * @public
     */
    DeleteAccessExport(req, cb) {
        let resp = new DeleteAccessExportResponse();
        this.request("DeleteAccessExport", req, resp, cb);
    }

    /**
     * 删除域名规则白名单


     * @param {DeleteDomainWhiteRulesRequest} req
     * @param {function(string, DeleteDomainWhiteRulesResponse):void} cb
     * @public
     */
    DeleteDomainWhiteRules(req, cb) {
        let resp = new DeleteDomainWhiteRulesResponse();
        this.request("DeleteDomainWhiteRules", req, resp, cb);
    }

    /**
     * 查询用户所有域名的详细信息
     * @param {DescribeDomainsRequest} req
     * @param {function(string, DescribeDomainsResponse):void} cb
     * @public
     */
    DescribeDomains(req, cb) {
        let resp = new DescribeDomainsResponse();
        this.request("DescribeDomains", req, resp, cb);
    }

    /**
     * 本接口用于获取访问日志索引配置信息
     * @param {DescribeAccessIndexRequest} req
     * @param {function(string, DescribeAccessIndexResponse):void} cb
     * @public
     */
    DescribeAccessIndex(req, cb) {
        let resp = new DescribeAccessIndexResponse();
        this.request("DescribeAccessIndex", req, resp, cb);
    }

    /**
     * 本接口用于创建访问日志导出
     * @param {CreateAccessExportRequest} req
     * @param {function(string, CreateAccessExportResponse):void} cb
     * @public
     */
    CreateAccessExport(req, cb) {
        let resp = new CreateAccessExportResponse();
        this.request("CreateAccessExport", req, resp, cb);
    }

    /**
     * Waf IP黑白名单Delete接口
     * @param {DeleteIpAccessControlRequest} req
     * @param {function(string, DeleteIpAccessControlResponse):void} cb
     * @public
     */
    DeleteIpAccessControl(req, cb) {
        let resp = new DeleteIpAccessControlResponse();
        this.request("DeleteIpAccessControl", req, resp, cb);
    }

    /**
     * 配置WAF自动封禁模块状态
     * @param {ModifyWafAutoDenyStatusRequest} req
     * @param {function(string, ModifyWafAutoDenyStatusResponse):void} cb
     * @public
     */
    ModifyWafAutoDenyStatus(req, cb) {
        let resp = new ModifyWafAutoDenyStatusResponse();
        this.request("ModifyWafAutoDenyStatus", req, resp, cb);
    }

    /**
     * 本接口用于修改访问日志保存期限
     * @param {ModifyAccessPeriodRequest} req
     * @param {function(string, ModifyAccessPeriodResponse):void} cb
     * @public
     */
    ModifyAccessPeriod(req, cb) {
        let resp = new ModifyAccessPeriodResponse();
        this.request("ModifyAccessPeriod", req, resp, cb);
    }

    /**
     * 获取waf流量访问趋势
     * @param {DescribeFlowTrendRequest} req
     * @param {function(string, DescribeFlowTrendResponse):void} cb
     * @public
     */
    DescribeFlowTrend(req, cb) {
        let resp = new DescribeFlowTrendResponse();
        this.request("DescribeFlowTrend", req, resp, cb);
    }

    /**
     * 创建攻击日志下载任务
     * @param {CreateAttackDownloadTaskRequest} req
     * @param {function(string, CreateAttackDownloadTaskResponse):void} cb
     * @public
     */
    CreateAttackDownloadTask(req, cb) {
        let resp = new CreateAttackDownloadTaskResponse();
        this.request("CreateAttackDownloadTask", req, resp, cb);
    }

    /**
     * 更改某一条规则
     * @param {ModifyDomainWhiteRuleRequest} req
     * @param {function(string, ModifyDomainWhiteRuleResponse):void} cb
     * @public
     */
    ModifyDomainWhiteRule(req, cb) {
        let resp = new ModifyDomainWhiteRuleResponse();
        this.request("ModifyDomainWhiteRule", req, resp, cb);
    }

    /**
     * 本接口用于访问日志的快速分析
     * @param {DescribeAccessFastAnalysisRequest} req
     * @param {function(string, DescribeAccessFastAnalysisResponse):void} cb
     * @public
     */
    DescribeAccessFastAnalysis(req, cb) {
        let resp = new DescribeAccessFastAnalysisResponse();
        this.request("DescribeAccessFastAnalysis", req, resp, cb);
    }

    /**
     * 描述WAF自动封禁IP详情,对齐自动封堵状态
     * @param {DescribeAutoDenyIPRequest} req
     * @param {function(string, DescribeAutoDenyIPResponse):void} cb
     * @public
     */
    DescribeAutoDenyIP(req, cb) {
        let resp = new DescribeAutoDenyIPResponse();
        this.request("DescribeAutoDenyIP", req, resp, cb);
    }

    /**
     * 描述WAF自动封禁模块详情
     * @param {DescribeWafAutoDenyStatusRequest} req
     * @param {function(string, DescribeWafAutoDenyStatusResponse):void} cb
     * @public
     */
    DescribeWafAutoDenyStatus(req, cb) {
        let resp = new DescribeWafAutoDenyStatusResponse();
        this.request("DescribeWafAutoDenyStatus", req, resp, cb);
    }

    /**
     * 增加自定义策略
     * @param {AddCustomRuleRequest} req
     * @param {function(string, AddCustomRuleResponse):void} cb
     * @public
     */
    AddCustomRule(req, cb) {
        let resp = new AddCustomRuleResponse();
        this.request("AddCustomRule", req, resp, cb);
    }

    /**
     * Waf ip黑白名单查询
     * @param {DescribeIpAccessControlRequest} req
     * @param {function(string, DescribeIpAccessControlResponse):void} cb
     * @public
     */
    DescribeIpAccessControl(req, cb) {
        let resp = new DescribeIpAccessControlResponse();
        this.request("DescribeIpAccessControl", req, resp, cb);
    }

    /**
     * 配置WAF威胁情报封禁模块详情
     * @param {ModifyWafThreatenIntelligenceRequest} req
     * @param {function(string, ModifyWafThreatenIntelligenceResponse):void} cb
     * @public
     */
    ModifyWafThreatenIntelligence(req, cb) {
        let resp = new ModifyWafThreatenIntelligenceResponse();
        this.request("ModifyWafThreatenIntelligence", req, resp, cb);
    }

    /**
     * 修改ip惩罚规则
     * @param {ModifyWafAutoDenyRulesRequest} req
     * @param {function(string, ModifyWafAutoDenyRulesResponse):void} cb
     * @public
     */
    ModifyWafAutoDenyRules(req, cb) {
        let resp = new ModifyWafAutoDenyRulesResponse();
        this.request("ModifyWafAutoDenyRules", req, resp, cb);
    }

    /**
     * 在负载均衡型WAF的添加、编辑域名配置的时候，需要展示负载均衡型WAF（clb-waf)支持的地域列表，通过DescribeUserClbWafRegions既可以获得当前对客户已经开放的地域列表
     * @param {DescribeUserClbWafRegionsRequest} req
     * @param {function(string, DescribeUserClbWafRegionsResponse):void} cb
     * @public
     */
    DescribeUserClbWafRegions(req, cb) {
        let resp = new DescribeUserClbWafRegionsResponse();
        this.request("DescribeUserClbWafRegions", req, resp, cb);
    }

    /**
     * 删除攻击日志下载任务记录
     * @param {DeleteAttackDownloadRecordRequest} req
     * @param {function(string, DeleteAttackDownloadRecordResponse):void} cb
     * @public
     */
    DeleteAttackDownloadRecord(req, cb) {
        let resp = new DeleteAttackDownloadRecordResponse();
        this.request("DeleteAttackDownloadRecord", req, resp, cb);
    }

    /**
     * 返回ip惩罚规则详细信息
     * @param {DescribeWafAutoDenyRulesRequest} req
     * @param {function(string, DescribeWafAutoDenyRulesResponse):void} cb
     * @public
     */
    DescribeWafAutoDenyRules(req, cb) {
        let resp = new DescribeWafAutoDenyRulesResponse();
        this.request("DescribeWafAutoDenyRules", req, resp, cb);
    }

    /**
     * 删除访问日志下载记录
     * @param {DeleteDownloadRecordRequest} req
     * @param {function(string, DeleteDownloadRecordResponse):void} cb
     * @public
     */
    DeleteDownloadRecord(req, cb) {
        let resp = new DeleteDownloadRecordResponse();
        this.request("DeleteDownloadRecord", req, resp, cb);
    }

    /**
     * 删除CC攻击的session设置
     * @param {DeleteSessionRequest} req
     * @param {function(string, DeleteSessionResponse):void} cb
     * @public
     */
    DeleteSession(req, cb) {
        let resp = new DeleteSessionResponse();
        this.request("DeleteSession", req, resp, cb);
    }

    /**
     * 获取域名的规则白名单


     * @param {DescribeDomainWhiteRulesRequest} req
     * @param {function(string, DescribeDomainWhiteRulesResponse):void} cb
     * @public
     */
    DescribeDomainWhiteRules(req, cb) {
        let resp = new DescribeDomainWhiteRulesResponse();
        this.request("DescribeDomainWhiteRules", req, resp, cb);
    }

    /**
     * 添加Spart防护域名
     * @param {AddSpartaProtectionRequest} req
     * @param {function(string, AddSpartaProtectionResponse):void} cb
     * @public
     */
    AddSpartaProtection(req, cb) {
        let resp = new AddSpartaProtectionResponse();
        this.request("AddSpartaProtection", req, resp, cb);
    }

    /**
     * 描述WAF威胁情报封禁模块配置详情
     * @param {DescribeWafThreatenIntelligenceRequest} req
     * @param {function(string, DescribeWafThreatenIntelligenceResponse):void} cb
     * @public
     */
    DescribeWafThreatenIntelligence(req, cb) {
        let resp = new DescribeWafThreatenIntelligenceResponse();
        this.request("DescribeWafThreatenIntelligence", req, resp, cb);
    }

    /**
     * 本接口用于搜索WAF访问日志
     * @param {SearchAccessLogRequest} req
     * @param {function(string, SearchAccessLogResponse):void} cb
     * @public
     */
    SearchAccessLog(req, cb) {
        let resp = new SearchAccessLogResponse();
        this.request("SearchAccessLog", req, resp, cb);
    }

    /**
     * Waf  IP封堵状态查询
     * @param {DescribeIpHitItemsRequest} req
     * @param {function(string, DescribeIpHitItemsResponse):void} cb
     * @public
     */
    DescribeIpHitItems(req, cb) {
        let resp = new DescribeIpHitItemsResponse();
        this.request("DescribeIpHitItems", req, resp, cb);
    }

    /**
     * 增加域名规则白名单
     * @param {AddDomainWhiteRuleRequest} req
     * @param {function(string, AddDomainWhiteRuleResponse):void} cb
     * @public
     */
    AddDomainWhiteRule(req, cb) {
        let resp = new AddDomainWhiteRuleResponse();
        this.request("AddDomainWhiteRule", req, resp, cb);
    }

    /**
     * Waf IP黑白名单Upsert接口
     * @param {UpsertIpAccessControlRequest} req
     * @param {function(string, UpsertIpAccessControlResponse):void} cb
     * @public
     */
    UpsertIpAccessControl(req, cb) {
        let resp = new UpsertIpAccessControlResponse();
        this.request("UpsertIpAccessControl", req, resp, cb);
    }


}
module.exports = WafClient;
