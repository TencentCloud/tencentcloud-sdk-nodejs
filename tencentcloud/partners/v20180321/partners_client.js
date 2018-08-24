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
const DescribeAgentClientsRequest = models.DescribeAgentClientsRequest;
const ModifyClientRemarkResponse = models.ModifyClientRemarkResponse;
const AuditApplyClientResponse = models.AuditApplyClientResponse;
const AgentAuditedClient = models.AgentAuditedClient;
const DescribeAgentAuditedClientsRequest = models.DescribeAgentAuditedClientsRequest;
const DescribeAgentBillsRequest = models.DescribeAgentBillsRequest;
const DescribeRebateInfosResponse = models.DescribeRebateInfosResponse;
const AgentPayDealsResponse = models.AgentPayDealsResponse;
const DescribeRebateInfosRequest = models.DescribeRebateInfosRequest;
const AgentPayDealsRequest = models.AgentPayDealsRequest;
const DescribeAgentAuditedClientsResponse = models.DescribeAgentAuditedClientsResponse;
const DescribeAgentBillsResponse = models.DescribeAgentBillsResponse;
const AuditApplyClientRequest = models.AuditApplyClientRequest;
const AgentBillElem = models.AgentBillElem;
const RebateInfoElem = models.RebateInfoElem;
const ModifyClientRemarkRequest = models.ModifyClientRemarkRequest;
const DescribeAgentClientsResponse = models.DescribeAgentClientsResponse;


/**
 * partners client
 * @class
 */
class PartnersClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("partners.tencentcloudapi.com", "2018-03-21", credential, region, profile);
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
     * 代理商可查询自己名下全部返佣信息
     * @param {DescribeRebateInfosRequest} req
     * @param {function(string, DescribeRebateInfosResponse):void} cb
     * @public
     */
    DescribeRebateInfos(req, cb) {
        let resp = new DescribeRebateInfosResponse();
        this.request("DescribeRebateInfos", req, resp, cb);
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
     * 代理商可以审核其名下申请中代客
     * @param {AuditApplyClientRequest} req
     * @param {function(string, AuditApplyClientResponse):void} cb
     * @public
     */
    AuditApplyClient(req, cb) {
        let resp = new AuditApplyClientResponse();
        this.request("AuditApplyClient", req, resp, cb);
    }


}
module.exports = PartnersClient;
