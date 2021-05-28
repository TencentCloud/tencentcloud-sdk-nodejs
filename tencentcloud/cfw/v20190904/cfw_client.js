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
const DescribeVpcRuleOverviewResponse = models.DescribeVpcRuleOverviewResponse;
const ScanResultInfo = models.ScanResultInfo;
const ScanInfo = models.ScanInfo;
const SetNatFwDnatRuleRequest = models.SetNatFwDnatRuleRequest;
const DescribeSyncAssetStatusResponse = models.DescribeSyncAssetStatusResponse;
const ModifyAllSwitchStatusRequest = models.ModifyAllSwitchStatusRequest;
const ModifyAllRuleStatusResponse = models.ModifyAllRuleStatusResponse;
const DescribeGuideScanInfoRequest = models.DescribeGuideScanInfoRequest;
const IocListData = models.IocListData;
const DescribeRuleOverviewResponse = models.DescribeRuleOverviewResponse;
const CfwNatDnatRule = models.CfwNatDnatRule;
const CreateSecurityGroupApiRulesRequest = models.CreateSecurityGroupApiRulesRequest;
const DescribeSecurityGroupListResponse = models.DescribeSecurityGroupListResponse;
const ExpandCfwVerticalResponse = models.ExpandCfwVerticalResponse;
const AcListsData = models.AcListsData;
const ModifyItemSwitchStatusRequest = models.ModifyItemSwitchStatusRequest;
const SequenceData = models.SequenceData;
const ModifyItemSwitchStatusResponse = models.ModifyItemSwitchStatusResponse;
const CreateSecurityGroupApiRulesResponse = models.CreateSecurityGroupApiRulesResponse;
const ModifyAcRuleResponse = models.ModifyAcRuleResponse;
const ModifySequenceRulesResponse = models.ModifySequenceRulesResponse;
const DescribeTableStatusResponse = models.DescribeTableStatusResponse;
const DeleteAcRuleResponse = models.DeleteAcRuleResponse;
const ModifySequenceRulesRequest = models.ModifySequenceRulesRequest;
const NatFwEipsInfo = models.NatFwEipsInfo;
const SecurityGroupApiRuleData = models.SecurityGroupApiRuleData;
const DescribeSwitchListsResponse = models.DescribeSwitchListsResponse;
const DescribeSyncAssetStatusRequest = models.DescribeSyncAssetStatusRequest;
const ModifySecurityGroupAllRuleStatusResponse = models.ModifySecurityGroupAllRuleStatusResponse;
const DescribeCfwEipsResponse = models.DescribeCfwEipsResponse;
const DeleteAllAccessControlRuleRequest = models.DeleteAllAccessControlRuleRequest;
const RunSyncAssetResponse = models.RunSyncAssetResponse;
const RunSyncAssetRequest = models.RunSyncAssetRequest;
const DeleteSecurityGroupRuleRequest = models.DeleteSecurityGroupRuleRequest;
const ModifyTableStatusResponse = models.ModifyTableStatusResponse;
const SetNatFwDnatRuleResponse = models.SetNatFwDnatRuleResponse;
const DescribeCfwEipsRequest = models.DescribeCfwEipsRequest;
const DescribeRuleOverviewRequest = models.DescribeRuleOverviewRequest;
const DescribeVpcRuleOverviewRequest = models.DescribeVpcRuleOverviewRequest;
const DescribeAcListsRequest = models.DescribeAcListsRequest;
const DescribeTableStatusRequest = models.DescribeTableStatusRequest;
const CreateAcRulesResponse = models.CreateAcRulesResponse;
const DescribeAssociatedInstanceListResponse = models.DescribeAssociatedInstanceListResponse;
const AssociatedInstanceInfo = models.AssociatedInstanceInfo;
const DescribeAssociatedInstanceListRequest = models.DescribeAssociatedInstanceListRequest;
const ModifyAcRuleRequest = models.ModifyAcRuleRequest;
const DescribeNatRuleOverviewResponse = models.DescribeNatRuleOverviewResponse;
const DeleteAcRuleRequest = models.DeleteAcRuleRequest;
const DeleteAllAccessControlRuleResponse = models.DeleteAllAccessControlRuleResponse;
const ModifyBlockIgnoreListResponse = models.ModifyBlockIgnoreListResponse;
const DeleteSecurityGroupAllRuleResponse = models.DeleteSecurityGroupAllRuleResponse;
const ExpandCfwVerticalRequest = models.ExpandCfwVerticalRequest;
const RuleInfoData = models.RuleInfoData;
const SecurityGroupListData = models.SecurityGroupListData;
const ModifyBlockIgnoreListRequest = models.ModifyBlockIgnoreListRequest;
const CreateAcRulesRequest = models.CreateAcRulesRequest;
const DescribeSecurityGroupListRequest = models.DescribeSecurityGroupListRequest;
const DescribeSwitchListsRequest = models.DescribeSwitchListsRequest;
const ModifyTableStatusRequest = models.ModifyTableStatusRequest;
const DeleteSecurityGroupRuleResponse = models.DeleteSecurityGroupRuleResponse;
const DescribeNatRuleOverviewRequest = models.DescribeNatRuleOverviewRequest;
const ModifySecurityGroupAllRuleStatusRequest = models.ModifySecurityGroupAllRuleStatusRequest;
const DeleteSecurityGroupAllRuleRequest = models.DeleteSecurityGroupAllRuleRequest;
const ModifyAllRuleStatusRequest = models.ModifyAllRuleStatusRequest;
const DescribeGuideScanInfoResponse = models.DescribeGuideScanInfoResponse;
const DescribeAcListsResponse = models.DescribeAcListsResponse;
const SwitchListsData = models.SwitchListsData;
const ModifyAllSwitchStatusResponse = models.ModifyAllSwitchStatusResponse;


/**
 * cfw client
 * @class
 */
class CfwClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("cfw.tencentcloudapi.com", "2019-09-04", credential, region, profile);
    }
    
    /**
     * nat规则列表概况
     * @param {DescribeNatRuleOverviewRequest} req
     * @param {function(string, DescribeNatRuleOverviewResponse):void} cb
     * @public
     */
    DescribeNatRuleOverview(req, cb) {
        let resp = new DescribeNatRuleOverviewResponse();
        this.request("DescribeNatRuleOverview", req, resp, cb);
    }

    /**
     * 修改规则表状态
     * @param {ModifyTableStatusRequest} req
     * @param {function(string, ModifyTableStatusResponse):void} cb
     * @public
     */
    ModifyTableStatus(req, cb) {
        let resp = new ModifyTableStatusResponse();
        this.request("ModifyTableStatus", req, resp, cb);
    }

    /**
     * 获取安全组关联实例列表
     * @param {DescribeAssociatedInstanceListRequest} req
     * @param {function(string, DescribeAssociatedInstanceListResponse):void} cb
     * @public
     */
    DescribeAssociatedInstanceList(req, cb) {
        let resp = new DescribeAssociatedInstanceListResponse();
        this.request("DescribeAssociatedInstanceList", req, resp, cb);
    }

    /**
     * vpc规则列表概况
     * @param {DescribeVpcRuleOverviewRequest} req
     * @param {function(string, DescribeVpcRuleOverviewResponse):void} cb
     * @public
     */
    DescribeVpcRuleOverview(req, cb) {
        let resp = new DescribeVpcRuleOverviewResponse();
        this.request("DescribeVpcRuleOverview", req, resp, cb);
    }

    /**
     * 删除规则
     * @param {DeleteAcRuleRequest} req
     * @param {function(string, DeleteAcRuleResponse):void} cb
     * @public
     */
    DeleteAcRule(req, cb) {
        let resp = new DeleteAcRuleResponse();
        this.request("DeleteAcRule", req, resp, cb);
    }

    /**
     * 创建安全组API规则
     * @param {CreateSecurityGroupApiRulesRequest} req
     * @param {function(string, CreateSecurityGroupApiRulesResponse):void} cb
     * @public
     */
    CreateSecurityGroupApiRules(req, cb) {
        let resp = new CreateSecurityGroupApiRulesResponse();
        this.request("CreateSecurityGroupApiRules", req, resp, cb);
    }

    /**
     * 同步资产状态查询-互联网&VPC
     * @param {DescribeSyncAssetStatusRequest} req
     * @param {function(string, DescribeSyncAssetStatusResponse):void} cb
     * @public
     */
    DescribeSyncAssetStatus(req, cb) {
        let resp = new DescribeSyncAssetStatusResponse();
        this.request("DescribeSyncAssetStatus", req, resp, cb);
    }

    /**
     * 查询安全组规则列表
     * @param {DescribeSecurityGroupListRequest} req
     * @param {function(string, DescribeSecurityGroupListResponse):void} cb
     * @public
     */
    DescribeSecurityGroupList(req, cb) {
        let resp = new DescribeSecurityGroupListResponse();
        this.request("DescribeSecurityGroupList", req, resp, cb);
    }

    /**
     * 删除全部规则
     * @param {DeleteSecurityGroupAllRuleRequest} req
     * @param {function(string, DeleteSecurityGroupAllRuleResponse):void} cb
     * @public
     */
    DeleteSecurityGroupAllRule(req, cb) {
        let resp = new DeleteSecurityGroupAllRuleResponse();
        this.request("DeleteSecurityGroupAllRule", req, resp, cb);
    }

    /**
     * 创建规则
     * @param {CreateAcRulesRequest} req
     * @param {function(string, CreateAcRulesResponse):void} cb
     * @public
     */
    CreateAcRules(req, cb) {
        let resp = new CreateAcRulesResponse();
        this.request("CreateAcRules", req, resp, cb);
    }

    /**
     * 启用停用全部规则
     * @param {ModifySecurityGroupAllRuleStatusRequest} req
     * @param {function(string, ModifySecurityGroupAllRuleStatusResponse):void} cb
     * @public
     */
    ModifySecurityGroupAllRuleStatus(req, cb) {
        let resp = new ModifySecurityGroupAllRuleStatusResponse();
        this.request("ModifySecurityGroupAllRuleStatus", req, resp, cb);
    }

    /**
     * 防火墙开关列表
     * @param {DescribeSwitchListsRequest} req
     * @param {function(string, DescribeSwitchListsResponse):void} cb
     * @public
     */
    DescribeSwitchLists(req, cb) {
        let resp = new DescribeSwitchListsResponse();
        this.request("DescribeSwitchLists", req, resp, cb);
    }

    /**
     * 查询规则列表概况
     * @param {DescribeRuleOverviewRequest} req
     * @param {function(string, DescribeRuleOverviewResponse):void} cb
     * @public
     */
    DescribeRuleOverview(req, cb) {
        let resp = new DescribeRuleOverviewResponse();
        this.request("DescribeRuleOverview", req, resp, cb);
    }

    /**
     * 支持对拦截列表、忽略列表如下操作：
批量增加拦截IP、忽略IP/域名
批量删除拦截IP、忽略IP/域名
批量修改拦截IP、忽略IP/域名生效事件
     * @param {ModifyBlockIgnoreListRequest} req
     * @param {function(string, ModifyBlockIgnoreListResponse):void} cb
     * @public
     */
    ModifyBlockIgnoreList(req, cb) {
        let resp = new ModifyBlockIgnoreListResponse();
        this.request("ModifyBlockIgnoreList", req, resp, cb);
    }

    /**
     * DescribeGuideScanInfo新手引导扫描接口信息
     * @param {DescribeGuideScanInfoRequest} req
     * @param {function(string, DescribeGuideScanInfoResponse):void} cb
     * @public
     */
    DescribeGuideScanInfo(req, cb) {
        let resp = new DescribeGuideScanInfoResponse();
        this.request("DescribeGuideScanInfo", req, resp, cb);
    }

    /**
     * 修改规则执行顺序
     * @param {ModifySequenceRulesRequest} req
     * @param {function(string, ModifySequenceRulesResponse):void} cb
     * @public
     */
    ModifySequenceRules(req, cb) {
        let resp = new ModifySequenceRulesResponse();
        this.request("ModifySequenceRules", req, resp, cb);
    }

    /**
     * 一键开启和关闭
     * @param {ModifyAllSwitchStatusRequest} req
     * @param {function(string, ModifyAllSwitchStatusResponse):void} cb
     * @public
     */
    ModifyAllSwitchStatus(req, cb) {
        let resp = new ModifyAllSwitchStatusResponse();
        this.request("ModifyAllSwitchStatus", req, resp, cb);
    }

    /**
     * 配置防火墙Dnat规则
     * @param {SetNatFwDnatRuleRequest} req
     * @param {function(string, SetNatFwDnatRuleResponse):void} cb
     * @public
     */
    SetNatFwDnatRule(req, cb) {
        let resp = new SetNatFwDnatRuleResponse();
        this.request("SetNatFwDnatRule", req, resp, cb);
    }

    /**
     * 启用停用全部规则
     * @param {ModifyAllRuleStatusRequest} req
     * @param {function(string, ModifyAllRuleStatusResponse):void} cb
     * @public
     */
    ModifyAllRuleStatus(req, cb) {
        let resp = new ModifyAllRuleStatusResponse();
        this.request("ModifyAllRuleStatus", req, resp, cb);
    }

    /**
     * 查询规则表状态
     * @param {DescribeTableStatusRequest} req
     * @param {function(string, DescribeTableStatusResponse):void} cb
     * @public
     */
    DescribeTableStatus(req, cb) {
        let resp = new DescribeTableStatusResponse();
        this.request("DescribeTableStatus", req, resp, cb);
    }

    /**
     * 查询防火墙弹性公网ip
     * @param {DescribeCfwEipsRequest} req
     * @param {function(string, DescribeCfwEipsResponse):void} cb
     * @public
     */
    DescribeCfwEips(req, cb) {
        let resp = new DescribeCfwEipsResponse();
        this.request("DescribeCfwEips", req, resp, cb);
    }

    /**
     * 同步资产-互联网&VPC
     * @param {RunSyncAssetRequest} req
     * @param {function(string, RunSyncAssetResponse):void} cb
     * @public
     */
    RunSyncAsset(req, cb) {
        let resp = new RunSyncAssetResponse();
        this.request("RunSyncAsset", req, resp, cb);
    }

    /**
     * 修改规则
     * @param {ModifyAcRuleRequest} req
     * @param {function(string, ModifyAcRuleResponse):void} cb
     * @public
     */
    ModifyAcRule(req, cb) {
        let resp = new ModifyAcRuleResponse();
        this.request("ModifyAcRule", req, resp, cb);
    }

    /**
     * 删除规则
     * @param {DeleteSecurityGroupRuleRequest} req
     * @param {function(string, DeleteSecurityGroupRuleResponse):void} cb
     * @public
     */
    DeleteSecurityGroupRule(req, cb) {
        let resp = new DeleteSecurityGroupRuleResponse();
        this.request("DeleteSecurityGroupRule", req, resp, cb);
    }

    /**
     * 访问控制列表
     * @param {DescribeAcListsRequest} req
     * @param {function(string, DescribeAcListsResponse):void} cb
     * @public
     */
    DescribeAcLists(req, cb) {
        let resp = new DescribeAcListsResponse();
        this.request("DescribeAcLists", req, resp, cb);
    }

    /**
     * 全部删除规则
     * @param {DeleteAllAccessControlRuleRequest} req
     * @param {function(string, DeleteAllAccessControlRuleResponse):void} cb
     * @public
     */
    DeleteAllAccessControlRule(req, cb) {
        let resp = new DeleteAllAccessControlRuleResponse();
        this.request("DeleteAllAccessControlRule", req, resp, cb);
    }

    /**
     * 防火墙垂直扩容
     * @param {ExpandCfwVerticalRequest} req
     * @param {function(string, ExpandCfwVerticalResponse):void} cb
     * @public
     */
    ExpandCfwVertical(req, cb) {
        let resp = new ExpandCfwVerticalResponse();
        this.request("ExpandCfwVertical", req, resp, cb);
    }

    /**
     * 修改单个防火墙开关
     * @param {ModifyItemSwitchStatusRequest} req
     * @param {function(string, ModifyItemSwitchStatusResponse):void} cb
     * @public
     */
    ModifyItemSwitchStatus(req, cb) {
        let resp = new ModifyItemSwitchStatusResponse();
        this.request("ModifyItemSwitchStatus", req, resp, cb);
    }


}
module.exports = CfwClient;
