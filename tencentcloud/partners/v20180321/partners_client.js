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
const AgentClientElem = models.AgentClientElem;
const DescribeAgentDealsCacheRequest = models.DescribeAgentDealsCacheRequest;
const DescribeSalesmansRequest = models.DescribeSalesmansRequest;
const DescribeAgentAuditedClientsRequest = models.DescribeAgentAuditedClientsRequest;
const DescribeRebateInfosNewRequest = models.DescribeRebateInfosNewRequest;
const RemovePayRelationForClientRequest = models.RemovePayRelationForClientRequest;
const DescribeRebateInfosNewResponse = models.DescribeRebateInfosNewResponse;
const AgentPayDealsRequest = models.AgentPayDealsRequest;
const DescribeAgentClientGradeResponse = models.DescribeAgentClientGradeResponse;
const DescribeAgentDealsByCacheResponse = models.DescribeAgentDealsByCacheResponse;
const RebateInfoElem = models.RebateInfoElem;
const DescribeClientBalanceResponse = models.DescribeClientBalanceResponse;
const DescribeAgentSelfPayDealsResponse = models.DescribeAgentSelfPayDealsResponse;
const DescribeAgentPayDealsV2Response = models.DescribeAgentPayDealsV2Response;
const AgentTransferMoneyRequest = models.AgentTransferMoneyRequest;
const DescribeClientBalanceRequest = models.DescribeClientBalanceRequest;
const DescribeAgentPayDealsV2Request = models.DescribeAgentPayDealsV2Request;
const ProductInfoElem = models.ProductInfoElem;
const UnbindClientElem = models.UnbindClientElem;
const RemovePayRelationForClientResponse = models.RemovePayRelationForClientResponse;
const DescribeRebateInfosRequest = models.DescribeRebateInfosRequest;
const CreatePayRelationForClientResponse = models.CreatePayRelationForClientResponse;
const DescribeAgentAuditedClientsResponse = models.DescribeAgentAuditedClientsResponse;
const DescribeAgentBillsResponse = models.DescribeAgentBillsResponse;
const DescribeAgentPayDealsRequest = models.DescribeAgentPayDealsRequest;
const AuditApplyClientRequest = models.AuditApplyClientRequest;
const ModifyClientRemarkResponse = models.ModifyClientRemarkResponse;
const DescribeAgentClientsResponse = models.DescribeAgentClientsResponse;
const AgentDealNewElem = models.AgentDealNewElem;
const DescribeAgentClientsRequest = models.DescribeAgentClientsRequest;
const DescribeAgentSelfPayDealsV2Request = models.DescribeAgentSelfPayDealsV2Request;
const DescribeSalesmansResponse = models.DescribeSalesmansResponse;
const AgentAuditedClient = models.AgentAuditedClient;
const DescribeUnbindClientListRequest = models.DescribeUnbindClientListRequest;
const DescribeAgentPayDealsResponse = models.DescribeAgentPayDealsResponse;
const DealGoodsPriceElem = models.DealGoodsPriceElem;
const DescribeAgentDealsByCacheRequest = models.DescribeAgentDealsByCacheRequest;
const DescribeAgentSelfPayDealsRequest = models.DescribeAgentSelfPayDealsRequest;
const ModifyClientRemarkRequest = models.ModifyClientRemarkRequest;
const CreatePayRelationForClientRequest = models.CreatePayRelationForClientRequest;
const AgentTransferMoneyResponse = models.AgentTransferMoneyResponse;
const DescribeUnbindClientListResponse = models.DescribeUnbindClientListResponse;
const DescribeAgentSelfPayDealsV2Response = models.DescribeAgentSelfPayDealsV2Response;
const AssignClientsToSalesResponse = models.AssignClientsToSalesResponse;
const AgentBillElem = models.AgentBillElem;
const AuditApplyClientResponse = models.AuditApplyClientResponse;
const DescribeAgentDealsCacheResponse = models.DescribeAgentDealsCacheResponse;
const DescribeAgentBillsRequest = models.DescribeAgentBillsRequest;
const AgentPayDealsResponse = models.AgentPayDealsResponse;
const AgentDealElem = models.AgentDealElem;
const AgentSalesmanElem = models.AgentSalesmanElem;
const DescribeClientBalanceNewRequest = models.DescribeClientBalanceNewRequest;
const DealGoodsPriceNewElem = models.DealGoodsPriceNewElem;
const DescribeRebateInfosResponse = models.DescribeRebateInfosResponse;
const DescribeAgentClientGradeRequest = models.DescribeAgentClientGradeRequest;
const RebateInfoElemNew = models.RebateInfoElemNew;
const AssignClientsToSalesRequest = models.AssignClientsToSalesRequest;
const DescribeClientBalanceNewResponse = models.DescribeClientBalanceNewResponse;


/**
 * partners client
 * @class
 */
class PartnersClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("partners.tencentcloudapi.com", "2018-03-21", credential, region, profile);
    }
    
    /**
     * 为代客or申请中代客分派跟进人（业务员），入参可从以下API获取
- 代客列表获取API： [DescribeAgentAuditedClients](https://cloud.tencent.com/document/product/563/19184)
- 申请中代客列表获取API：[DescribeAgentClients](https://cloud.tencent.com/document/product/563/16046)
- 业务员列表获取API：[DescribeSalesmans](https://cloud.tencent.com/document/product/563/35196) <br><br>
     * @param {AssignClientsToSalesRequest} req
     * @param {function(string, AssignClientsToSalesResponse):void} cb
     * @public
     */
    AssignClientsToSales(req, cb) {
        let resp = new AssignClientsToSalesResponse();
        this.request("AssignClientsToSales", req, resp, cb);
    }

    /**
     * 【该接口已下线，请使用升级版本DescribeAgentDealsByCache】代理商拉取缓存的全量客户订单
     * @param {DescribeAgentDealsCacheRequest} req
     * @param {function(string, DescribeAgentDealsCacheResponse):void} cb
     * @public
     */
    DescribeAgentDealsCache(req, cb) {
        let resp = new DescribeAgentDealsCacheResponse();
        this.request("DescribeAgentDealsCache", req, resp, cb);
    }

    /**
     * 代理商可查询自己及名下代客所有业务明细
     * @param {DescribeAgentBillsRequest} req
     * @param {function(string, DescribeAgentBillsResponse):void} cb
     * @public
     */
    DescribeAgentBills(req, cb) {
        let resp = new DescribeAgentBillsResponse();
        this.request("DescribeAgentBills", req, resp, cb);
    }

    /**
     * 为合作伙伴提供转账给客户能力。仅支持合作伙伴为自己名下客户转账。
     * @param {AgentTransferMoneyRequest} req
     * @param {function(string, AgentTransferMoneyResponse):void} cb
     * @public
     */
    AgentTransferMoney(req, cb) {
        let resp = new AgentTransferMoneyResponse();
        this.request("AgentTransferMoney", req, resp, cb);
    }

    /**
     * 【该接口已下线，请切换使用升级版本DescribeRebateInfosNew】代理商可查询自己名下全部返佣信息
     * @param {DescribeRebateInfosRequest} req
     * @param {function(string, DescribeRebateInfosResponse):void} cb
     * @public
     */
    DescribeRebateInfos(req, cb) {
        let resp = new DescribeRebateInfosResponse();
        this.request("DescribeRebateInfos", req, resp, cb);
    }

    /**
     * 合作伙伴为客户消除强代付关系
     * @param {RemovePayRelationForClientRequest} req
     * @param {function(string, RemovePayRelationForClientResponse):void} cb
     * @public
     */
    RemovePayRelationForClient(req, cb) {
        let resp = new RemovePayRelationForClientResponse();
        this.request("RemovePayRelationForClient", req, resp, cb);
    }

    /**
     * 代理商可以对名下客户添加备注、修改备注
     * @param {ModifyClientRemarkRequest} req
     * @param {function(string, ModifyClientRemarkResponse):void} cb
     * @public
     */
    ModifyClientRemark(req, cb) {
        let resp = new ModifyClientRemarkResponse();
        this.request("ModifyClientRemark", req, resp, cb);
    }

    /**
     * 【该接口将逐步下线，请切换使用升级版本DescribeClientBalanceNew】为合作伙伴提供查询客户余额能力。调用者必须是合作伙伴，只能查询自己名下客户余额.
     * @param {DescribeClientBalanceRequest} req
     * @param {function(string, DescribeClientBalanceResponse):void} cb
     * @public
     */
    DescribeClientBalance(req, cb) {
        let resp = new DescribeClientBalanceResponse();
        this.request("DescribeClientBalance", req, resp, cb);
    }

    /**
     * 为合作伙伴提供查询客户余额能力。调用者必须是合作伙伴，只能查询自己名下客户余额
     * @param {DescribeClientBalanceNewRequest} req
     * @param {function(string, DescribeClientBalanceNewResponse):void} cb
     * @public
     */
    DescribeClientBalanceNew(req, cb) {
        let resp = new DescribeClientBalanceNewResponse();
        this.request("DescribeClientBalanceNew", req, resp, cb);
    }

    /**
     * 传入代客uin，查客户级别，客户审核状态，客户实名认证状态
     * @param {DescribeAgentClientGradeRequest} req
     * @param {function(string, DescribeAgentClientGradeResponse):void} cb
     * @public
     */
    DescribeAgentClientGrade(req, cb) {
        let resp = new DescribeAgentClientGradeResponse();
        this.request("DescribeAgentClientGrade", req, resp, cb);
    }

    /**
     * 代理商名下客户解绑记录查询接口
     * @param {DescribeUnbindClientListRequest} req
     * @param {function(string, DescribeUnbindClientListResponse):void} cb
     * @public
     */
    DescribeUnbindClientList(req, cb) {
        let resp = new DescribeUnbindClientListResponse();
        this.request("DescribeUnbindClientList", req, resp, cb);
    }

    /**
     * 代理商支付订单接口，支持自付/代付
     * @param {AgentPayDealsRequest} req
     * @param {function(string, AgentPayDealsResponse):void} cb
     * @public
     */
    AgentPayDeals(req, cb) {
        let resp = new AgentPayDealsResponse();
        this.request("AgentPayDeals", req, resp, cb);
    }

    /**
     * 代理商查询名下业务员列表信息
     * @param {DescribeSalesmansRequest} req
     * @param {function(string, DescribeSalesmansResponse):void} cb
     * @public
     */
    DescribeSalesmans(req, cb) {
        let resp = new DescribeSalesmansResponse();
        this.request("DescribeSalesmans", req, resp, cb);
    }

    /**
     * 【该接口已下线，请切换使用升级版本DescribeAgentPayDealsV2】可以查询代理商代付的所有订单
     * @param {DescribeAgentPayDealsRequest} req
     * @param {function(string, DescribeAgentPayDealsResponse):void} cb
     * @public
     */
    DescribeAgentPayDeals(req, cb) {
        let resp = new DescribeAgentPayDealsResponse();
        this.request("DescribeAgentPayDeals", req, resp, cb);
    }

    /**
     * 可以查询代理商代付的预付费订单
     * @param {DescribeAgentPayDealsV2Request} req
     * @param {function(string, DescribeAgentPayDealsV2Response):void} cb
     * @public
     */
    DescribeAgentPayDealsV2(req, cb) {
        let resp = new DescribeAgentPayDealsV2Response();
        this.request("DescribeAgentPayDealsV2", req, resp, cb);
    }

    /**
     * 查询已审核客户列表
     * @param {DescribeAgentAuditedClientsRequest} req
     * @param {function(string, DescribeAgentAuditedClientsResponse):void} cb
     * @public
     */
    DescribeAgentAuditedClients(req, cb) {
        let resp = new DescribeAgentAuditedClientsResponse();
        this.request("DescribeAgentAuditedClients", req, resp, cb);
    }

    /**
     * 查询代理商名下指定代客的自付订单（预付费）
     * @param {DescribeAgentSelfPayDealsV2Request} req
     * @param {function(string, DescribeAgentSelfPayDealsV2Response):void} cb
     * @public
     */
    DescribeAgentSelfPayDealsV2(req, cb) {
        let resp = new DescribeAgentSelfPayDealsV2Response();
        this.request("DescribeAgentSelfPayDealsV2", req, resp, cb);
    }

    /**
     * 代理商可以审核其名下申请中代客
     * @param {AuditApplyClientRequest} req
     * @param {function(string, AuditApplyClientResponse):void} cb
     * @public
     */
    AuditApplyClient(req, cb) {
        let resp = new AuditApplyClientResponse();
        this.request("AuditApplyClient", req, resp, cb);
    }

    /**
     * 供代理商拉取缓存的全量预付费客户订单
     * @param {DescribeAgentDealsByCacheRequest} req
     * @param {function(string, DescribeAgentDealsByCacheResponse):void} cb
     * @public
     */
    DescribeAgentDealsByCache(req, cb) {
        let resp = new DescribeAgentDealsByCacheResponse();
        this.request("DescribeAgentDealsByCache", req, resp, cb);
    }

    /**
     * 【该接口已下线，请切换使用升级版本DescribeAgentSelfPayDealsV2】可以查询代理商下指定客户的自付订单
     * @param {DescribeAgentSelfPayDealsRequest} req
     * @param {function(string, DescribeAgentSelfPayDealsResponse):void} cb
     * @public
     */
    DescribeAgentSelfPayDeals(req, cb) {
        let resp = new DescribeAgentSelfPayDealsResponse();
        this.request("DescribeAgentSelfPayDeals", req, resp, cb);
    }

    /**
     * 代理商可查询自己名下全部返佣信息
     * @param {DescribeRebateInfosNewRequest} req
     * @param {function(string, DescribeRebateInfosNewResponse):void} cb
     * @public
     */
    DescribeRebateInfosNew(req, cb) {
        let resp = new DescribeRebateInfosNewResponse();
        this.request("DescribeRebateInfosNew", req, resp, cb);
    }

    /**
     * 代理商可查询自己名下待审核客户列表
     * @param {DescribeAgentClientsRequest} req
     * @param {function(string, DescribeAgentClientsResponse):void} cb
     * @public
     */
    DescribeAgentClients(req, cb) {
        let resp = new DescribeAgentClientsResponse();
        this.request("DescribeAgentClients", req, resp, cb);
    }

    /**
     * 合作伙伴为客户创建强代付关系
     * @param {CreatePayRelationForClientRequest} req
     * @param {function(string, CreatePayRelationForClientResponse):void} cb
     * @public
     */
    CreatePayRelationForClient(req, cb) {
        let resp = new CreatePayRelationForClientResponse();
        this.request("CreatePayRelationForClient", req, resp, cb);
    }


}
module.exports = PartnersClient;
