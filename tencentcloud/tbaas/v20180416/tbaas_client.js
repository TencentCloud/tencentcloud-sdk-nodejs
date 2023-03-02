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
const PeerDetailForUser = models.PeerDetailForUser;
const GetBcosTransListRequest = models.GetBcosTransListRequest;
const QueryChainMakerDemoBlockTransactionResponse = models.QueryChainMakerDemoBlockTransactionResponse;
const QueryChainMakerContractRequest = models.QueryChainMakerContractRequest;
const DeployDynamicBcosContractResponse = models.DeployDynamicBcosContractResponse;
const GetClusterListForUserResponse = models.GetClusterListForUserResponse;
const GetBlockTransactionListForUserResponse = models.GetBlockTransactionListForUserResponse;
const ApplyChainMakerBatchUserCertResponse = models.ApplyChainMakerBatchUserCertResponse;
const ApplyUserCertRequest = models.ApplyUserCertRequest;
const SrvInvokeRequest = models.SrvInvokeRequest;
const SrvInvokeResponse = models.SrvInvokeResponse;
const GetChaincodeInitializeResultForUserRequest = models.GetChaincodeInitializeResultForUserRequest;
const InitializeChaincodeForUserRequest = models.InitializeChaincodeForUserRequest;
const GetTransactionDetailForUserResponse = models.GetTransactionDetailForUserResponse;
const InvokeChainMakerDemoContractRequest = models.InvokeChainMakerDemoContractRequest;
const ApplyUserCertResponse = models.ApplyUserCertResponse;
const GetChaincodeCompileLogForUserRequest = models.GetChaincodeCompileLogForUserRequest;
const GetInvokeTxRequest = models.GetInvokeTxRequest;
const GetBcosBlockListResponse = models.GetBcosBlockListResponse;
const SignCertCsr = models.SignCertCsr;
const DownloadUserCertResponse = models.DownloadUserCertResponse;
const QueryChainMakerBlockTransactionRequest = models.QueryChainMakerBlockTransactionRequest;
const GetChaincodeLogForUserRequest = models.GetChaincodeLogForUserRequest;
const GetLatesdTransactionListRequest = models.GetLatesdTransactionListRequest;
const InvokeResponse = models.InvokeResponse;
const GetTransactionDetailForUserRequest = models.GetTransactionDetailForUserRequest;
const GetBlockListResponse = models.GetBlockListResponse;
const GetBlockTransactionListForUserRequest = models.GetBlockTransactionListForUserRequest;
const QueryChainMakerBlockTransactionResponse = models.QueryChainMakerBlockTransactionResponse;
const GetBcosBlockListRequest = models.GetBcosBlockListRequest;
const GetClusterSummaryRequest = models.GetClusterSummaryRequest;
const InvokeBcosTransRequest = models.InvokeBcosTransRequest;
const InvokeChainMakerContractResponse = models.InvokeChainMakerContractResponse;
const QueryChainMakerDemoBlockTransactionRequest = models.QueryChainMakerDemoBlockTransactionRequest;
const ClusterDetailForUser = models.ClusterDetailForUser;
const GetPeerLogForUserRequest = models.GetPeerLogForUserRequest;
const GetLatesdTransactionListResponse = models.GetLatesdTransactionListResponse;
const QueryChainMakerTransactionResponse = models.QueryChainMakerTransactionResponse;
const DownloadUserCertRequest = models.DownloadUserCertRequest;
const GetClusterSummaryResponse = models.GetClusterSummaryResponse;
const PeerSet = models.PeerSet;
const ChainMakerTransactionResult = models.ChainMakerTransactionResult;
const CreateChaincodeAndInstallForUserRequest = models.CreateChaincodeAndInstallForUserRequest;
const EndorserGroup = models.EndorserGroup;
const GetBcosTransByHashResponse = models.GetBcosTransByHashResponse;
const GetPeerLogForUserResponse = models.GetPeerLogForUserResponse;
const QueryChainMakerDemoContractRequest = models.QueryChainMakerDemoContractRequest;
const QueryChainMakerDemoTransactionResponse = models.QueryChainMakerDemoTransactionResponse;
const ApplyChainMakerBatchUserCertRequest = models.ApplyChainMakerBatchUserCertRequest;
const GetChaincodeLogForUserResponse = models.GetChaincodeLogForUserResponse;
const QueryChainMakerDemoTransactionRequest = models.QueryChainMakerDemoTransactionRequest;
const LogDetailForUser = models.LogDetailForUser;
const InvokeBcosTransResponse = models.InvokeBcosTransResponse;
const InitializeChaincodeForUserResponse = models.InitializeChaincodeForUserResponse;
const GroupDetailForUser = models.GroupDetailForUser;
const GetBcosBlockByNumberResponse = models.GetBcosBlockByNumberResponse;
const ChainMakerContractResult = models.ChainMakerContractResult;
const GetClusterListForUserRequest = models.GetClusterListForUserRequest;
const Block = models.Block;
const QueryChainMakerDemoContractResponse = models.QueryChainMakerDemoContractResponse;
const GetBlockListRequest = models.GetBlockListRequest;
const BcosTransInfo = models.BcosTransInfo;
const GetChaincodeInitializeResultForUserResponse = models.GetChaincodeInitializeResultForUserResponse;
const InvokeRequest = models.InvokeRequest;
const GetInvokeTxResponse = models.GetInvokeTxResponse;
const GetChannelListForUserResponse = models.GetChannelListForUserResponse;
const QueryChainMakerContractResponse = models.QueryChainMakerContractResponse;
const GetBcosTransByHashRequest = models.GetBcosTransByHashRequest;
const GetChaincodeCompileLogForUserResponse = models.GetChaincodeCompileLogForUserResponse;
const DeployDynamicBcosContractRequest = models.DeployDynamicBcosContractRequest;
const InvokeChainMakerContractRequest = models.InvokeChainMakerContractRequest;
const GetBcosTransListResponse = models.GetBcosTransListResponse;
const QueryChainMakerTransactionRequest = models.QueryChainMakerTransactionRequest;
const BcosBlockObj = models.BcosBlockObj;
const ChannelDetailForUser = models.ChannelDetailForUser;
const QueryRequest = models.QueryRequest;
const CreateChaincodeAndInstallForUserResponse = models.CreateChaincodeAndInstallForUserResponse;
const GetChannelListForUserRequest = models.GetChannelListForUserRequest;
const InvokeChainMakerDemoContractResponse = models.InvokeChainMakerDemoContractResponse;
const QueryResponse = models.QueryResponse;
const GetBcosBlockByNumberRequest = models.GetBcosBlockByNumberRequest;
const TransactionItem = models.TransactionItem;


/**
 * tbaas client
 * @class
 */
class TbaasClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("tbaas.tencentcloudapi.com", "2018-04-16", credential, region, profile);
    }
    
    /**
     * 执行Bcos交易，支持动态部署的合约
     * @param {InvokeBcosTransRequest} req
     * @param {function(string, InvokeBcosTransResponse):void} cb
     * @public
     */
    InvokeBcosTrans(req, cb) {
        let resp = new InvokeBcosTransResponse();
        this.request("InvokeBcosTrans", req, resp, cb);
    }

    /**
     * 通过交易ID查询长安链交易
     * @param {QueryChainMakerTransactionRequest} req
     * @param {function(string, QueryChainMakerTransactionResponse):void} cb
     * @public
     */
    QueryChainMakerTransaction(req, cb) {
        let resp = new QueryChainMakerTransactionResponse();
        this.request("QueryChainMakerTransaction", req, resp, cb);
    }

    /**
     * 使用块高查询Bcos区块信息
     * @param {GetBcosBlockByNumberRequest} req
     * @param {function(string, GetBcosBlockByNumberResponse):void} cb
     * @public
     */
    GetBcosBlockByNumber(req, cb) {
        let resp = new GetBcosBlockByNumberResponse();
        this.request("GetBcosBlockByNumber", req, resp, cb);
    }

    /**
     * 批量申请长安链用户签名证书
     * @param {ApplyChainMakerBatchUserCertRequest} req
     * @param {function(string, ApplyChainMakerBatchUserCertResponse):void} cb
     * @public
     */
    ApplyChainMakerBatchUserCert(req, cb) {
        let resp = new ApplyChainMakerBatchUserCertResponse();
        this.request("ApplyChainMakerBatchUserCert", req, resp, cb);
    }

    /**
     * 获取合约容器日志
     * @param {GetChaincodeLogForUserRequest} req
     * @param {function(string, GetChaincodeLogForUserResponse):void} cb
     * @public
     */
    GetChaincodeLogForUser(req, cb) {
        let resp = new GetChaincodeLogForUserResponse();
        this.request("GetChaincodeLogForUser", req, resp, cb);
    }

    /**
     * Bcos根据交易哈希查看交易详细信息
     * @param {GetBcosTransByHashRequest} req
     * @param {function(string, GetBcosTransByHashResponse):void} cb
     * @public
     */
    GetBcosTransByHash(req, cb) {
        let resp = new GetBcosTransByHashResponse();
        this.request("GetBcosTransByHash", req, resp, cb);
    }

    /**
     * 获取该用户的网络列表。网络信息中包含组织信息，但仅包含该用户所在组织的信息。
     * @param {GetClusterListForUserRequest} req
     * @param {function(string, GetClusterListForUserResponse):void} cb
     * @public
     */
    GetClusterListForUser(req, cb) {
        let resp = new GetClusterListForUserResponse();
        this.request("GetClusterListForUser", req, resp, cb);
    }

    /**
     * Bcos分页查询当前群组下的区块列表
     * @param {GetBcosBlockListRequest} req
     * @param {function(string, GetBcosBlockListResponse):void} cb
     * @public
     */
    GetBcosBlockList(req, cb) {
        let resp = new GetBcosBlockListResponse();
        this.request("GetBcosBlockList", req, resp, cb);
    }

    /**
     * 调用长安链合约查询
     * @param {QueryChainMakerContractRequest} req
     * @param {function(string, QueryChainMakerContractResponse):void} cb
     * @public
     */
    QueryChainMakerContract(req, cb) {
        let resp = new QueryChainMakerContractResponse();
        this.request("QueryChainMakerContract", req, resp, cb);
    }

    /**
     * 查询长安链体验网络指定高度区块的交易
     * @param {QueryChainMakerDemoBlockTransactionRequest} req
     * @param {function(string, QueryChainMakerDemoBlockTransactionResponse):void} cb
     * @public
     */
    QueryChainMakerDemoBlockTransaction(req, cb) {
        let resp = new QueryChainMakerDemoBlockTransactionResponse();
        this.request("QueryChainMakerDemoBlockTransaction", req, resp, cb);
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
     * 获取节点日志
     * @param {GetPeerLogForUserRequest} req
     * @param {function(string, GetPeerLogForUserResponse):void} cb
     * @public
     */
    GetPeerLogForUser(req, cb) {
        let resp = new GetPeerLogForUserResponse();
        this.request("GetPeerLogForUser", req, resp, cb);
    }

    /**
     * 动态部署并发布Bcos合约
     * @param {DeployDynamicBcosContractRequest} req
     * @param {function(string, DeployDynamicBcosContractResponse):void} cb
     * @public
     */
    DeployDynamicBcosContract(req, cb) {
        let resp = new DeployDynamicBcosContractResponse();
        this.request("DeployDynamicBcosContract", req, resp, cb);
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
     * 创建并安装合约
     * @param {CreateChaincodeAndInstallForUserRequest} req
     * @param {function(string, CreateChaincodeAndInstallForUserResponse):void} cb
     * @public
     */
    CreateChaincodeAndInstallForUser(req, cb) {
        let resp = new CreateChaincodeAndInstallForUserResponse();
        this.request("CreateChaincodeAndInstallForUser", req, resp, cb);
    }

    /**
     * 通过交易ID查询长安链体验网络交易
     * @param {QueryChainMakerDemoTransactionRequest} req
     * @param {function(string, QueryChainMakerDemoTransactionResponse):void} cb
     * @public
     */
    QueryChainMakerDemoTransaction(req, cb) {
        let resp = new QueryChainMakerDemoTransactionResponse();
        this.request("QueryChainMakerDemoTransaction", req, resp, cb);
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
     * 调用长安链合约执行交易
     * @param {InvokeChainMakerContractRequest} req
     * @param {function(string, InvokeChainMakerContractResponse):void} cb
     * @public
     */
    InvokeChainMakerContract(req, cb) {
        let resp = new InvokeChainMakerContractResponse();
        this.request("InvokeChainMakerContract", req, resp, cb);
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
     * 实例化结果查询
     * @param {GetChaincodeInitializeResultForUserRequest} req
     * @param {function(string, GetChaincodeInitializeResultForUserResponse):void} cb
     * @public
     */
    GetChaincodeInitializeResultForUser(req, cb) {
        let resp = new GetChaincodeInitializeResultForUserResponse();
        this.request("GetChaincodeInitializeResultForUser", req, resp, cb);
    }

    /**
     * 获取通道列表
     * @param {GetChannelListForUserRequest} req
     * @param {function(string, GetChannelListForUserResponse):void} cb
     * @public
     */
    GetChannelListForUser(req, cb) {
        let resp = new GetChannelListForUserResponse();
        this.request("GetChannelListForUser", req, resp, cb);
    }

    /**
     * 查询长安链指定高度区块的交易
     * @param {QueryChainMakerBlockTransactionRequest} req
     * @param {function(string, QueryChainMakerBlockTransactionResponse):void} cb
     * @public
     */
    QueryChainMakerBlockTransaction(req, cb) {
        let resp = new QueryChainMakerBlockTransactionResponse();
        this.request("QueryChainMakerBlockTransaction", req, resp, cb);
    }

    /**
     * 实例化合约
     * @param {InitializeChaincodeForUserRequest} req
     * @param {function(string, InitializeChaincodeForUserResponse):void} cb
     * @public
     */
    InitializeChaincodeForUser(req, cb) {
        let resp = new InitializeChaincodeForUserResponse();
        this.request("InitializeChaincodeForUser", req, resp, cb);
    }

    /**
     * 调用长安链体验网络合约查询
     * @param {QueryChainMakerDemoContractRequest} req
     * @param {function(string, QueryChainMakerDemoContractResponse):void} cb
     * @public
     */
    QueryChainMakerDemoContract(req, cb) {
        let resp = new QueryChainMakerDemoContractResponse();
        this.request("QueryChainMakerDemoContract", req, resp, cb);
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
     * Bcos分页查询当前群组的交易信息列表
     * @param {GetBcosTransListRequest} req
     * @param {function(string, GetBcosTransListResponse):void} cb
     * @public
     */
    GetBcosTransList(req, cb) {
        let resp = new GetBcosTransListResponse();
        this.request("GetBcosTransList", req, resp, cb);
    }

    /**
     * 调用长安链体验网络合约执行交易
     * @param {InvokeChainMakerDemoContractRequest} req
     * @param {function(string, InvokeChainMakerDemoContractResponse):void} cb
     * @public
     */
    InvokeChainMakerDemoContract(req, cb) {
        let resp = new InvokeChainMakerDemoContractResponse();
        this.request("InvokeChainMakerDemoContract", req, resp, cb);
    }

    /**
     * 获取合约编译日志
     * @param {GetChaincodeCompileLogForUserRequest} req
     * @param {function(string, GetChaincodeCompileLogForUserResponse):void} cb
     * @public
     */
    GetChaincodeCompileLogForUser(req, cb) {
        let resp = new GetChaincodeCompileLogForUserResponse();
        this.request("GetChaincodeCompileLogForUser", req, resp, cb);
    }

    /**
     * 获取区块内的交易列表
     * @param {GetBlockTransactionListForUserRequest} req
     * @param {function(string, GetBlockTransactionListForUserResponse):void} cb
     * @public
     */
    GetBlockTransactionListForUser(req, cb) {
        let resp = new GetBlockTransactionListForUserResponse();
        this.request("GetBlockTransactionListForUser", req, resp, cb);
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


}
module.exports = TbaasClient;
