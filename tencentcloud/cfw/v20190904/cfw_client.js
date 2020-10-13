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
const DescribeSyncAssetStatusResponse = models.DescribeSyncAssetStatusResponse;
const ModifyAllRuleStatusResponse = models.ModifyAllRuleStatusResponse;
const DescribeRuleOverviewResponse = models.DescribeRuleOverviewResponse;
const ModifyAllSwitchStatusRequest = models.ModifyAllSwitchStatusRequest;
const SequenceData = models.SequenceData;
const ModifyItemSwitchStatusResponse = models.ModifyItemSwitchStatusResponse;
const ModifySequenceRulesResponse = models.ModifySequenceRulesResponse;
const ModifyAcRuleResponse = models.ModifyAcRuleResponse;
const DescribeTableStatusResponse = models.DescribeTableStatusResponse;
const DeleteAcRuleResponse = models.DeleteAcRuleResponse;
const SwitchListsData = models.SwitchListsData;
const DescribeSwitchListsResponse = models.DescribeSwitchListsResponse;
const DescribeSyncAssetStatusRequest = models.DescribeSyncAssetStatusRequest;
const DeleteAllAccessControlRuleRequest = models.DeleteAllAccessControlRuleRequest;
const RunSyncAssetResponse = models.RunSyncAssetResponse;
const RunSyncAssetRequest = models.RunSyncAssetRequest;
const DescribeSwitchListsRequest = models.DescribeSwitchListsRequest;
const ModifyTableStatusResponse = models.ModifyTableStatusResponse;
const ModifyItemSwitchStatusRequest = models.ModifyItemSwitchStatusRequest;
const DescribeRuleOverviewRequest = models.DescribeRuleOverviewRequest;
const DescribeTableStatusRequest = models.DescribeTableStatusRequest;
const DescribeAcListsRequest = models.DescribeAcListsRequest;
const DescribeVpcRuleOverviewRequest = models.DescribeVpcRuleOverviewRequest;
const CreateAcRulesResponse = models.CreateAcRulesResponse;
const ModifyAcRuleRequest = models.ModifyAcRuleRequest;
const DescribeNatRuleOverviewResponse = models.DescribeNatRuleOverviewResponse;
const DeleteAcRuleRequest = models.DeleteAcRuleRequest;
const DeleteAllAccessControlRuleResponse = models.DeleteAllAccessControlRuleResponse;
const CreateAcRulesRequest = models.CreateAcRulesRequest;
const ModifyTableStatusRequest = models.ModifyTableStatusRequest;
const AcListsData = models.AcListsData;
const DescribeNatRuleOverviewRequest = models.DescribeNatRuleOverviewRequest;
const ModifySequenceRulesRequest = models.ModifySequenceRulesRequest;
const ModifyAllRuleStatusRequest = models.ModifyAllRuleStatusRequest;
const RuleInfoData = models.RuleInfoData;
const DescribeAcListsResponse = models.DescribeAcListsResponse;
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
