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
const DescribeTagsResponse = models.DescribeTagsResponse;
const DescribeLinkResponse = models.DescribeLinkResponse;
const DeleteRuleResponse = models.DeleteRuleResponse;
const CreateTacticRequest = models.CreateTacticRequest;
const DeleteTagRequest = models.DeleteTagRequest;
const DescribeOrdersResponse = models.DescribeOrdersResponse;
const DeviceReport = models.DeviceReport;
const ModifyTacticRequest = models.ModifyTacticRequest;
const Tactic = models.Tactic;
const DeleteRuleRequest = models.DeleteRuleRequest;
const DescribeRulesRequest = models.DescribeRulesRequest;
const ModifyLinkAdvancedLogRequest = models.ModifyLinkAdvancedLogRequest;
const DescribeRuleResponse = models.DescribeRuleResponse;
const ModifyRuleRequest = models.ModifyRuleRequest;
const LinkInfos = models.LinkInfos;
const TagInfos = models.TagInfos;
const ModifyTagResponse = models.ModifyTagResponse;
const CreateRuleRequest = models.CreateRuleRequest;
const LinkDetailInfo = models.LinkDetailInfo;
const DescribeRuleRequest = models.DescribeRuleRequest;
const RuleInfos = models.RuleInfos;
const ModifyRuleStatusResponse = models.ModifyRuleStatusResponse;
const ModifyLinkTacticResponse = models.ModifyLinkTacticResponse;
const DescribeTagsRequest = models.DescribeTagsRequest;
const DescribeLinksResponse = models.DescribeLinksResponse;
const ModifyTacticResponse = models.ModifyTacticResponse;
const ModifyRuleStatusRequest = models.ModifyRuleStatusRequest;
const DescribeTacticsRequest = models.DescribeTacticsRequest;
const TacticInfos = models.TacticInfos;
const RenewLinkInfoRequest = models.RenewLinkInfoRequest;
const CreateTagRequest = models.CreateTagRequest;
const DeleteTacticResponse = models.DeleteTacticResponse;
const DeleteTacticRequest = models.DeleteTacticRequest;
const DescribeTacticResponse = models.DescribeTacticResponse;
const ModifyLinkTacticRequest = models.ModifyLinkTacticRequest;
const DescribeTacticRequest = models.DescribeTacticRequest;
const Rule = models.Rule;
const CreateTagResponse = models.CreateTagResponse;
const DescribeLinksRequest = models.DescribeLinksRequest;
const CreateRuleResponse = models.CreateRuleResponse;
const RuleDetail = models.RuleDetail;
const DescribeTacticsResponse = models.DescribeTacticsResponse;
const RenewLinkInfoResponse = models.RenewLinkInfoResponse;
const DescribeRulesResponse = models.DescribeRulesResponse;
const DeleteTagResponse = models.DeleteTagResponse;
const TeleOperatorCard = models.TeleOperatorCard;
const ModifyLinkTeleResponse = models.ModifyLinkTeleResponse;
const Orders = models.Orders;
const ModifyTagRequest = models.ModifyTagRequest;
const Tag = models.Tag;
const OrderInfo = models.OrderInfo;
const CreateTacticResponse = models.CreateTacticResponse;
const DescribeOrdersRequest = models.DescribeOrdersRequest;
const ModifyLinkTeleRequest = models.ModifyLinkTeleRequest;
const LinkInfo = models.LinkInfo;
const DescribeLinkRequest = models.DescribeLinkRequest;
const ModifyLinkAdvancedLogResponse = models.ModifyLinkAdvancedLogResponse;
const ModifyRuleResponse = models.ModifyRuleResponse;


/**
 * hasim client
 * @class
 */
class HasimClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("hasim.tencentcloudapi.com", "2021-07-16", credential, region, profile);
    }
    
    /**
     * 删除策略
     * @param {DeleteTacticRequest} req
     * @param {function(string, DeleteTacticResponse):void} cb
     * @public
     */
    DeleteTactic(req, cb) {
        let resp = new DeleteTacticResponse();
        this.request("DeleteTactic", req, resp, cb);
    }

    /**
     * 查询订单列表
     * @param {DescribeOrdersRequest} req
     * @param {function(string, DescribeOrdersResponse):void} cb
     * @public
     */
    DescribeOrders(req, cb) {
        let resp = new DescribeOrdersResponse();
        this.request("DescribeOrders", req, resp, cb);
    }

    /**
     * 查询云兔切换策略列表
     * @param {DescribeTacticsRequest} req
     * @param {function(string, DescribeTacticsResponse):void} cb
     * @public
     */
    DescribeTactics(req, cb) {
        let resp = new DescribeTacticsResponse();
        this.request("DescribeTactics", req, resp, cb);
    }

    /**
     * 创建自动化规则
     * @param {CreateRuleRequest} req
     * @param {function(string, CreateRuleResponse):void} cb
     * @public
     */
    CreateRule(req, cb) {
        let resp = new CreateRuleResponse();
        this.request("CreateRule", req, resp, cb);
    }

    /**
     * 删除标签
     * @param {DeleteTagRequest} req
     * @param {function(string, DeleteTagResponse):void} cb
     * @public
     */
    DeleteTag(req, cb) {
        let resp = new DeleteTagResponse();
        this.request("DeleteTag", req, resp, cb);
    }

    /**
     * 查询云兔连接列表
     * @param {DescribeLinksRequest} req
     * @param {function(string, DescribeLinksResponse):void} cb
     * @public
     */
    DescribeLinks(req, cb) {
        let resp = new DescribeLinksResponse();
        this.request("DescribeLinks", req, resp, cb);
    }

    /**
     * 删除自动化规则
     * @param {DeleteRuleRequest} req
     * @param {function(string, DeleteRuleResponse):void} cb
     * @public
     */
    DeleteRule(req, cb) {
        let resp = new DeleteRuleResponse();
        this.request("DeleteRule", req, resp, cb);
    }

    /**
     * 编辑自动化规则状态
     * @param {ModifyRuleStatusRequest} req
     * @param {function(string, ModifyRuleStatusResponse):void} cb
     * @public
     */
    ModifyRuleStatus(req, cb) {
        let resp = new ModifyRuleStatusResponse();
        this.request("ModifyRuleStatus", req, resp, cb);
    }

    /**
     * 编辑云兔高级日志状态
     * @param {ModifyLinkAdvancedLogRequest} req
     * @param {function(string, ModifyLinkAdvancedLogResponse):void} cb
     * @public
     */
    ModifyLinkAdvancedLog(req, cb) {
        let resp = new ModifyLinkAdvancedLogResponse();
        this.request("ModifyLinkAdvancedLog", req, resp, cb);
    }

    /**
     * 创建标签
     * @param {CreateTagRequest} req
     * @param {function(string, CreateTagResponse):void} cb
     * @public
     */
    CreateTag(req, cb) {
        let resp = new CreateTagResponse();
        this.request("CreateTag", req, resp, cb);
    }

    /**
     * 修改云兔运营商
     * @param {ModifyLinkTeleRequest} req
     * @param {function(string, ModifyLinkTeleResponse):void} cb
     * @public
     */
    ModifyLinkTele(req, cb) {
        let resp = new ModifyLinkTeleResponse();
        this.request("ModifyLinkTele", req, resp, cb);
    }

    /**
     * 查询自动化规则
     * @param {DescribeRuleRequest} req
     * @param {function(string, DescribeRuleResponse):void} cb
     * @public
     */
    DescribeRule(req, cb) {
        let resp = new DescribeRuleResponse();
        this.request("DescribeRule", req, resp, cb);
    }

    /**
     * 查询标签列表
     * @param {DescribeTagsRequest} req
     * @param {function(string, DescribeTagsResponse):void} cb
     * @public
     */
    DescribeTags(req, cb) {
        let resp = new DescribeTagsResponse();
        this.request("DescribeTags", req, resp, cb);
    }

    /**
     * 编辑自动化规则
     * @param {ModifyRuleRequest} req
     * @param {function(string, ModifyRuleResponse):void} cb
     * @public
     */
    ModifyRule(req, cb) {
        let resp = new ModifyRuleResponse();
        this.request("ModifyRule", req, resp, cb);
    }

    /**
     * 查询云兔连接详细信息
     * @param {DescribeLinkRequest} req
     * @param {function(string, DescribeLinkResponse):void} cb
     * @public
     */
    DescribeLink(req, cb) {
        let resp = new DescribeLinkResponse();
        this.request("DescribeLink", req, resp, cb);
    }

    /**
     * 创建云兔切换策略
     * @param {CreateTacticRequest} req
     * @param {function(string, CreateTacticResponse):void} cb
     * @public
     */
    CreateTactic(req, cb) {
        let resp = new CreateTacticResponse();
        this.request("CreateTactic", req, resp, cb);
    }

    /**
     * 刷新云兔连接信息同步
     * @param {RenewLinkInfoRequest} req
     * @param {function(string, RenewLinkInfoResponse):void} cb
     * @public
     */
    RenewLinkInfo(req, cb) {
        let resp = new RenewLinkInfoResponse();
        this.request("RenewLinkInfo", req, resp, cb);
    }

    /**
     * 修改云兔切换策略
     * @param {ModifyTacticRequest} req
     * @param {function(string, ModifyTacticResponse):void} cb
     * @public
     */
    ModifyTactic(req, cb) {
        let resp = new ModifyTacticResponse();
        this.request("ModifyTactic", req, resp, cb);
    }

    /**
     * 查询云兔切换策略信息
     * @param {DescribeTacticRequest} req
     * @param {function(string, DescribeTacticResponse):void} cb
     * @public
     */
    DescribeTactic(req, cb) {
        let resp = new DescribeTacticResponse();
        this.request("DescribeTactic", req, resp, cb);
    }

    /**
     * 查询自动化规则列表
     * @param {DescribeRulesRequest} req
     * @param {function(string, DescribeRulesResponse):void} cb
     * @public
     */
    DescribeRules(req, cb) {
        let resp = new DescribeRulesResponse();
        this.request("DescribeRules", req, resp, cb);
    }

    /**
     * 编辑云兔策略
     * @param {ModifyLinkTacticRequest} req
     * @param {function(string, ModifyLinkTacticResponse):void} cb
     * @public
     */
    ModifyLinkTactic(req, cb) {
        let resp = new ModifyLinkTacticResponse();
        this.request("ModifyLinkTactic", req, resp, cb);
    }

    /**
     * 编辑标签
     * @param {ModifyTagRequest} req
     * @param {function(string, ModifyTagResponse):void} cb
     * @public
     */
    ModifyTag(req, cb) {
        let resp = new ModifyTagResponse();
        this.request("ModifyTag", req, resp, cb);
    }


}
module.exports = HasimClient;
