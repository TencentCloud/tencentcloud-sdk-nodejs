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
const GetBlockListRequest = models.GetBlockListRequest;
const PeerSet = models.PeerSet;
const InvokeRequest = models.InvokeRequest;
const GetInvokeTxResponse = models.GetInvokeTxResponse;
const GetBlockListResponse = models.GetBlockListResponse;
const TransactionItem = models.TransactionItem;
const QueryRequest = models.QueryRequest;
const GetClusterSummaryResponse = models.GetClusterSummaryResponse;
const GetLatesdTransactionListRequest = models.GetLatesdTransactionListRequest;
const GetInvokeTxRequest = models.GetInvokeTxRequest;
const GetLatesdTransactionListResponse = models.GetLatesdTransactionListResponse;
const InvokeResponse = models.InvokeResponse;
const QueryResponse = models.QueryResponse;
const GetClusterSummaryRequest = models.GetClusterSummaryRequest;
const Block = models.Block;


/**
 * tbaas client
 * @class
 */
class TbaasClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("tbaas.tencentcloudapi.com", "2018-04-16", credential, region, profile);
    }
    
    /**
     * 新增交易
     * @param {InvokeRequest} req
     * @param {function(string, InvokeResponse):void} cb
     * @public
     */
    Invoke(req, cb) {
        let resp = new InvokeResponse();
        this.request("Invoke", req, resp, cb);
    }

    /**
     * 获取区块链网络概要
     * @param {GetClusterSummaryRequest} req
     * @param {function(string, GetClusterSummaryResponse):void} cb
     * @public
     */
    GetClusterSummary(req, cb) {
        let resp = new GetClusterSummaryResponse();
        this.request("GetClusterSummary", req, resp, cb);
    }

    /**
     * Invoke异步调用结果查询
     * @param {GetInvokeTxRequest} req
     * @param {function(string, GetInvokeTxResponse):void} cb
     * @public
     */
    GetInvokeTx(req, cb) {
        let resp = new GetInvokeTxResponse();
        this.request("GetInvokeTx", req, resp, cb);
    }

    /**
     * 查看当前网络下的所有区块列表，分页展示
     * @param {GetBlockListRequest} req
     * @param {function(string, GetBlockListResponse):void} cb
     * @public
     */
    GetBlockList(req, cb) {
        let resp = new GetBlockListResponse();
        this.request("GetBlockList", req, resp, cb);
    }

    /**
     * 查询交易
     * @param {QueryRequest} req
     * @param {function(string, QueryResponse):void} cb
     * @public
     */
    Query(req, cb) {
        let resp = new QueryResponse();
        this.request("Query", req, resp, cb);
    }

    /**
     * 获取最新交易列表
     * @param {GetLatesdTransactionListRequest} req
     * @param {function(string, GetLatesdTransactionListResponse):void} cb
     * @public
     */
    GetLatesdTransactionList(req, cb) {
        let resp = new GetLatesdTransactionListResponse();
        this.request("GetLatesdTransactionList", req, resp, cb);
    }


}
module.exports = TbaasClient;
