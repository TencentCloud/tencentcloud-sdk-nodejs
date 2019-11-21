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
const QueryRequest = models.QueryRequest;
const SendTransactionHandlerResponse = models.SendTransactionHandlerResponse;
const ApplyUserCertRequest = models.ApplyUserCertRequest;
const GetTransListHandlerResponse = models.GetTransListHandlerResponse;
const GetTransactionDetailForUserResponse = models.GetTransactionDetailForUserResponse;
const ApplyUserCertResponse = models.ApplyUserCertResponse;
const GetLatesdTransactionListRequest = models.GetLatesdTransactionListRequest;
const InvokeResponse = models.InvokeResponse;
const DownloadUserCertResponse = models.DownloadUserCertResponse;
const GetTransactionDetailForUserRequest = models.GetTransactionDetailForUserRequest;
const GetBlockListResponse = models.GetBlockListResponse;
const SrvInvokeRequest = models.SrvInvokeRequest;
const BlockByNumberHandlerResponse = models.BlockByNumberHandlerResponse;
const GetTransByHashHandlerResponse = models.GetTransByHashHandlerResponse;
const GetInvokeTxRequest = models.GetInvokeTxRequest;
const GetLatesdTransactionListResponse = models.GetLatesdTransactionListResponse;
const DownloadUserCertRequest = models.DownloadUserCertRequest;
const GetClusterSummaryResponse = models.GetClusterSummaryResponse;
const PeerSet = models.PeerSet;
const SrvInvokeResponse = models.SrvInvokeResponse;
const GetBlockListHandlerRequest = models.GetBlockListHandlerRequest;
const GetClusterSummaryRequest = models.GetClusterSummaryRequest;
const Block = models.Block;
const GetBlockListRequest = models.GetBlockListRequest;
const BcosTransInfo = models.BcosTransInfo;
const InvokeRequest = models.InvokeRequest;
const GetInvokeTxResponse = models.GetInvokeTxResponse;
const GetBlockListHandlerResponse = models.GetBlockListHandlerResponse;
const SendTransactionHandlerRequest = models.SendTransactionHandlerRequest;
const GetTransListHandlerRequest = models.GetTransListHandlerRequest;
const TransactionItem = models.TransactionItem;
const BlockByNumberHandlerRequest = models.BlockByNumberHandlerRequest;
const BcosBlockObj = models.BcosBlockObj;
const GetTransByHashHandlerRequest = models.GetTransByHashHandlerRequest;
const QueryResponse = models.QueryResponse;
const EndorserGroup = models.EndorserGroup;


/**
 * tbaas client
 * @class
 */
class TbaasClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("tbaas.tencentcloudapi.com", "2018-04-16", credential, region, profile);
    }
    
    /**
     * 申请用户证书
     * @param {ApplyUserCertRequest} req
     * @param {function(string, ApplyUserCertResponse):void} cb
     * @public
     */
    ApplyUserCert(req, cb) {
        let resp = new ApplyUserCertResponse();
        this.request("ApplyUserCert", req, resp, cb);
    }

    /**
     * trustsql服务统一接口
     * @param {SrvInvokeRequest} req
     * @param {function(string, SrvInvokeResponse):void} cb
     * @public
     */
    SrvInvoke(req, cb) {
        let resp = new SrvInvokeResponse();
        this.request("SrvInvoke", req, resp, cb);
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
     * Bcos根据块高查询区块信息
     * @param {BlockByNumberHandlerRequest} req
     * @param {function(string, BlockByNumberHandlerResponse):void} cb
     * @public
     */
    BlockByNumberHandler(req, cb) {
        let resp = new BlockByNumberHandlerResponse();
        this.request("BlockByNumberHandler", req, resp, cb);
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
     * Bcos分页查询当前群组的交易信息列表
     * @param {GetTransListHandlerRequest} req
     * @param {function(string, GetTransListHandlerResponse):void} cb
     * @public
     */
    GetTransListHandler(req, cb) {
        let resp = new GetTransListHandlerResponse();
        this.request("GetTransListHandler", req, resp, cb);
    }

    /**
     * Bcos发送交易
     * @param {SendTransactionHandlerRequest} req
     * @param {function(string, SendTransactionHandlerResponse):void} cb
     * @public
     */
    SendTransactionHandler(req, cb) {
        let resp = new SendTransactionHandlerResponse();
        this.request("SendTransactionHandler", req, resp, cb);
    }

    /**
     * 下载用户证书
     * @param {DownloadUserCertRequest} req
     * @param {function(string, DownloadUserCertResponse):void} cb
     * @public
     */
    DownloadUserCert(req, cb) {
        let resp = new DownloadUserCertResponse();
        this.request("DownloadUserCert", req, resp, cb);
    }

    /**
     * Bcos根据交易哈希查看交易详细信息
     * @param {GetTransByHashHandlerRequest} req
     * @param {function(string, GetTransByHashHandlerResponse):void} cb
     * @public
     */
    GetTransByHashHandler(req, cb) {
        let resp = new GetTransByHashHandlerResponse();
        this.request("GetTransByHashHandler", req, resp, cb);
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
     * 获取交易详情
     * @param {GetTransactionDetailForUserRequest} req
     * @param {function(string, GetTransactionDetailForUserResponse):void} cb
     * @public
     */
    GetTransactionDetailForUser(req, cb) {
        let resp = new GetTransactionDetailForUserResponse();
        this.request("GetTransactionDetailForUser", req, resp, cb);
    }

    /**
     * bcos分页查询当前群组下的区块列表
     * @param {GetBlockListHandlerRequest} req
     * @param {function(string, GetBlockListHandlerResponse):void} cb
     * @public
     */
    GetBlockListHandler(req, cb) {
        let resp = new GetBlockListHandlerResponse();
        this.request("GetBlockListHandler", req, resp, cb);
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
