"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
/* eslint-disable @typescript-eslint/no-unused-vars */
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
const abstract_client_1 = require("../../../common/abstract_client");
/**
 * partners client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(clientConfig) {
        super("partners.tencentcloudapi.com", "2018-03-21", clientConfig);
    }
    /**
     * 为代客or申请中代客分派跟进人（业务员），入参可从以下API获取
- 代客列表获取API： [DescribeAgentAuditedClients](https://cloud.tencent.com/document/product/563/19184)
- 申请中代客列表获取API：[DescribeAgentClients](https://cloud.tencent.com/document/product/563/16046)
- 业务员列表获取API：[DescribeSalesmans](https://cloud.tencent.com/document/product/563/35196) <br><br>
     */
    async AssignClientsToSales(req, cb) {
        return this.request("AssignClientsToSales", req, cb);
    }
    /**
     * 查询代理商名下指定代客的自付订单（预付费）
     */
    async DescribeAgentSelfPayDealsV2(req, cb) {
        return this.request("DescribeAgentSelfPayDealsV2", req, cb);
    }
    /**
     * 代理商名下客户解绑记录查询接口
     */
    async DescribeUnbindClientList(req, cb) {
        return this.request("DescribeUnbindClientList", req, cb);
    }
    /**
     * 代理商可以对名下客户添加备注、修改备注
     */
    async ModifyClientRemark(req, cb) {
        return this.request("ModifyClientRemark", req, cb);
    }
    /**
     * 代理商支付订单接口，支持自付/代付
     */
    async AgentPayDeals(req, cb) {
        return this.request("AgentPayDeals", req, cb);
    }
    /**
     * 代理商可查询自己及名下代客所有业务明细
     */
    async DescribeAgentBills(req, cb) {
        return this.request("DescribeAgentBills", req, cb);
    }
    /**
     * 代理商可查询自己名下全部返佣信息
     */
    async DescribeRebateInfosNew(req, cb) {
        return this.request("DescribeRebateInfosNew", req, cb);
    }
    /**
     * 为合作伙伴提供转账给客户能力。仅支持合作伙伴为自己名下客户转账。
     */
    async AgentTransferMoney(req, cb) {
        return this.request("AgentTransferMoney", req, cb);
    }
    /**
     * 【该接口已下线，请切换使用升级版本DescribeRebateInfosNew】代理商可查询自己名下全部返佣信息
     */
    async DescribeRebateInfos(req, cb) {
        return this.request("DescribeRebateInfos", req, cb);
    }
    /**
     * 代理商查询名下业务员列表信息
     */
    async DescribeSalesmans(req, cb) {
        return this.request("DescribeSalesmans", req, cb);
    }
    /**
     * 合作伙伴为客户消除强代付关系
     */
    async RemovePayRelationForClient(req, cb) {
        return this.request("RemovePayRelationForClient", req, cb);
    }
    /**
     * 为合作伙伴提供查询客户余额能力。调用者必须是合作伙伴，只能查询自己名下客户余额
     */
    async DescribeClientBalanceNew(req, cb) {
        return this.request("DescribeClientBalanceNew", req, cb);
    }
    /**
     * 根据大订单号查询关联申请合并支付的其他订单号
     */
    async DescribeAgentRelateBigDealIds(req, cb) {
        return this.request("DescribeAgentRelateBigDealIds", req, cb);
    }
    /**
     * 代理商可查询自己名下待审核客户列表
     */
    async DescribeAgentClients(req, cb) {
        return this.request("DescribeAgentClients", req, cb);
    }
    /**
     * 传入代客uin，查客户级别，客户审核状态，客户实名认证状态
     */
    async DescribeAgentClientGrade(req, cb) {
        return this.request("DescribeAgentClientGrade", req, cb);
    }
    /**
     * 可以查询代理商代付的预付费订单
     */
    async DescribeAgentPayDealsV2(req, cb) {
        return this.request("DescribeAgentPayDealsV2", req, cb);
    }
    /**
     * 查询已审核客户列表
     */
    async DescribeAgentAuditedClients(req, cb) {
        return this.request("DescribeAgentAuditedClients", req, cb);
    }
    /**
     * 合作伙伴为客户创建强代付关系
     */
    async CreatePayRelationForClient(req, cb) {
        return this.request("CreatePayRelationForClient", req, cb);
    }
    /**
     * 代理商可以审核其名下申请中代客
     */
    async AuditApplyClient(req, cb) {
        return this.request("AuditApplyClient", req, cb);
    }
    /**
     * 供代理商拉取缓存的全量预付费客户订单
     */
    async DescribeAgentDealsByCache(req, cb) {
        return this.request("DescribeAgentDealsByCache", req, cb);
    }
}
exports.Client = Client;
