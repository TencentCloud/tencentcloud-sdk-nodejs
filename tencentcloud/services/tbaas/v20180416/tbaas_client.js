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
 * tbaas client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(clientConfig) {
        super("tbaas.tencentcloudapi.com", "2018-04-16", clientConfig);
    }
    /**
     * 通过交易ID查询长安链交易
     */
    async QueryChainMakerTransaction(req, cb) {
        return this.request("QueryChainMakerTransaction", req, cb);
    }
    /**
     * 批量申请长安链用户签名证书
     */
    async ApplyChainMakerBatchUserCert(req, cb) {
        return this.request("ApplyChainMakerBatchUserCert", req, cb);
    }
    /**
     * 通过交易ID查询长安链体验网络交易
     */
    async QueryChainMakerDemoTransaction(req, cb) {
        return this.request("QueryChainMakerDemoTransaction", req, cb);
    }
    /**
     * 调用长安链合约查询
     */
    async QueryChainMakerContract(req, cb) {
        return this.request("QueryChainMakerContract", req, cb);
    }
    /**
     * 查询长安链体验网络指定高度区块的交易
     */
    async QueryChainMakerDemoBlockTransaction(req, cb) {
        return this.request("QueryChainMakerDemoBlockTransaction", req, cb);
    }
    /**
     * 获取Fabric某区块的详细信息
     */
    async DescribeFabricBlock(req, cb) {
        return this.request("DescribeFabricBlock", req, cb);
    }
    /**
     * 新增交易
     */
    async Invoke(req, cb) {
        return this.request("Invoke", req, cb);
    }
    /**
     * 获取区块链网络概要
     */
    async GetClusterSummary(req, cb) {
        return this.request("GetClusterSummary", req, cb);
    }
    /**
     * 获取fabric最新交易列表
     */
    async GetLatestTransactionList(req, cb) {
        return this.request("GetLatestTransactionList", req, cb);
    }
    /**
     * 下载用户证书
     */
    async DownloadUserCert(req, cb) {
        return this.request("DownloadUserCert", req, cb);
    }
    /**
     * 获取最新交易列表（已废弃）
     */
    async GetLatesdTransactionList(req, cb) {
        return this.request("GetLatesdTransactionList", req, cb);
    }
    /**
     * 申请用户证书
     */
    async ApplyUserCert(req, cb) {
        return this.request("ApplyUserCert", req, cb);
    }
    /**
     * 调用长安链合约执行交易
     */
    async InvokeChainMakerContract(req, cb) {
        return this.request("InvokeChainMakerContract", req, cb);
    }
    /**
     * Invoke异步调用结果查询
     */
    async GetInvokeTx(req, cb) {
        return this.request("GetInvokeTx", req, cb);
    }
    /**
     * 查询长安链指定高度区块的交易
     */
    async QueryChainMakerBlockTransaction(req, cb) {
        return this.request("QueryChainMakerBlockTransaction", req, cb);
    }
    /**
     * 调用长安链体验网络合约查询
     */
    async QueryChainMakerDemoContract(req, cb) {
        return this.request("QueryChainMakerDemoContract", req, cb);
    }
    /**
     * 获取交易的详情
     */
    async GetTransactionDetailForUser(req, cb) {
        return this.request("GetTransactionDetailForUser", req, cb);
    }
    /**
     * 调用Fabric用户合约查询
     */
    async QueryFabricChaincode(req, cb) {
        return this.request("QueryFabricChaincode", req, cb);
    }
    /**
     * trustsql服务统一接口
     */
    async SrvInvoke(req, cb) {
        return this.request("SrvInvoke", req, cb);
    }
    /**
     * 获取Fabric交易的详细信息
     */
    async DescribeFabricTransaction(req, cb) {
        return this.request("DescribeFabricTransaction", req, cb);
    }
    /**
     * 调用长安链体验网络合约执行交易
     */
    async InvokeChainMakerDemoContract(req, cb) {
        return this.request("InvokeChainMakerDemoContract", req, cb);
    }
    /**
     * 获取区块内交易列表
     */
    async GetBlockTransactionListForUser(req, cb) {
        return this.request("GetBlockTransactionListForUser", req, cb);
    }
    /**
     * 查看当前网络下的所有区块列表，分页展示
     */
    async GetBlockList(req, cb) {
        return this.request("GetBlockList", req, cb);
    }
    /**
     * 调用Fabric用户合约执行交易
     */
    async InvokeFabricChaincode(req, cb) {
        return this.request("InvokeFabricChaincode", req, cb);
    }
    /**
     * 查询交易
     */
    async Query(req, cb) {
        return this.request("Query", req, cb);
    }
}
exports.Client = Client;
