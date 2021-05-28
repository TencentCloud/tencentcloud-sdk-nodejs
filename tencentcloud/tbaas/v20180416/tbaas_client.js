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
const QueryRequest = models.QueryRequest;
const DeployDynamicBcosContractResponse = models.DeployDynamicBcosContractResponse;
const GetClusterListForUserResponse = models.GetClusterListForUserResponse;
const GetBlockTransactionListForUserResponse = models.GetBlockTransactionListForUserResponse;
const SendTransactionHandlerResponse = models.SendTransactionHandlerResponse;
const ApplyUserCertRequest = models.ApplyUserCertRequest;
const TransByDynamicContractHandlerRequest = models.TransByDynamicContractHandlerRequest;
const GetTransListHandlerResponse = models.GetTransListHandlerResponse;
const InvokeBcosTransRequest = models.InvokeBcosTransRequest;
const GetChaincodeInitializeResultForUserRequest = models.GetChaincodeInitializeResultForUserRequest;
const InitializeChaincodeForUserRequest = models.InitializeChaincodeForUserRequest;
const DeployDynamicContractHandlerResponse = models.DeployDynamicContractHandlerResponse;
const SrvInvokeRequest = models.SrvInvokeRequest;
const ApplyUserCertResponse = models.ApplyUserCertResponse;
const GetChaincodeCompileLogForUserRequest = models.GetChaincodeCompileLogForUserRequest;
const GetBcosBlockByNumberRequest = models.GetBcosBlockByNumberRequest;
const GetPeerLogForUserResponse = models.GetPeerLogForUserResponse;
const GetBcosBlockListResponse = models.GetBcosBlockListResponse;
const DownloadUserCertResponse = models.DownloadUserCertResponse;
const GetChaincodeLogForUserRequest = models.GetChaincodeLogForUserRequest;
const GetLatesdTransactionListRequest = models.GetLatesdTransactionListRequest;
const InvokeResponse = models.InvokeResponse;
const GetTransactionDetailForUserRequest = models.GetTransactionDetailForUserRequest;
const GetBlockListResponse = models.GetBlockListResponse;
const TransactionItem = models.TransactionItem;
const GetBcosBlockListRequest = models.GetBcosBlockListRequest;
const GetClusterSummaryRequest = models.GetClusterSummaryRequest;
const BlockByNumberHandlerResponse = models.BlockByNumberHandlerResponse;
const GetTransListHandlerRequest = models.GetTransListHandlerRequest;
const GetTransByHashHandlerResponse = models.GetTransByHashHandlerResponse;
const GetInvokeTxRequest = models.GetInvokeTxRequest;
const DeployDynamicContractHandlerRequest = models.DeployDynamicContractHandlerRequest;
const ClusterDetailForUser = models.ClusterDetailForUser;
const GetPeerLogForUserRequest = models.GetPeerLogForUserRequest;
const GetLatesdTransactionListResponse = models.GetLatesdTransactionListResponse;
const DownloadUserCertRequest = models.DownloadUserCertRequest;
const GetClusterSummaryResponse = models.GetClusterSummaryResponse;
const TransByDynamicContractHandlerResponse = models.TransByDynamicContractHandlerResponse;
const PeerSet = models.PeerSet;
const GetBlockTransactionListForUserRequest = models.GetBlockTransactionListForUserRequest;
const CreateChaincodeAndInstallForUserRequest = models.CreateChaincodeAndInstallForUserRequest;
const SrvInvokeResponse = models.SrvInvokeResponse;
const GetBcosTransByHashResponse = models.GetBcosTransByHashResponse;
const GetBlockListHandlerRequest = models.GetBlockListHandlerRequest;
const GetChaincodeLogForUserResponse = models.GetChaincodeLogForUserResponse;
const LogDetailForUser = models.LogDetailForUser;
const InvokeBcosTransResponse = models.InvokeBcosTransResponse;
const InitializeChaincodeForUserResponse = models.InitializeChaincodeForUserResponse;
const GroupDetailForUser = models.GroupDetailForUser;
const GetBcosBlockByNumberResponse = models.GetBcosBlockByNumberResponse;
const GetClusterListForUserRequest = models.GetClusterListForUserRequest;
const Block = models.Block;
const GetBlockListRequest = models.GetBlockListRequest;
const BcosTransInfo = models.BcosTransInfo;
const GetChaincodeInitializeResultForUserResponse = models.GetChaincodeInitializeResultForUserResponse;
const InvokeRequest = models.InvokeRequest;
const GetInvokeTxResponse = models.GetInvokeTxResponse;
const GetBlockListHandlerResponse = models.GetBlockListHandlerResponse;
const GetTransactionDetailForUserResponse = models.GetTransactionDetailForUserResponse;
const GetBcosTransByHashRequest = models.GetBcosTransByHashRequest;
const GetChannelListForUserResponse = models.GetChannelListForUserResponse;
const GetChaincodeCompileLogForUserResponse = models.GetChaincodeCompileLogForUserResponse;
const DeployDynamicBcosContractRequest = models.DeployDynamicBcosContractRequest;
const SendTransactionHandlerRequest = models.SendTransactionHandlerRequest;
const GetBcosTransListResponse = models.GetBcosTransListResponse;
const BlockByNumberHandlerRequest = models.BlockByNumberHandlerRequest;
const BcosBlockObj = models.BcosBlockObj;
const ChannelDetailForUser = models.ChannelDetailForUser;
const GetTransByHashHandlerRequest = models.GetTransByHashHandlerRequest;
const CreateChaincodeAndInstallForUserResponse = models.CreateChaincodeAndInstallForUserResponse;
const GetChannelListForUserRequest = models.GetChannelListForUserRequest;
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
     * 版本升级

Bcos分页查询当前群组的交易信息列表
     * @param {GetTransListHandlerRequest} req
     * @param {function(string, GetTransListHandlerResponse):void} cb
     * @public
     */
    GetTransListHandler(req, cb) {
        let resp = new GetTransListHandlerResponse();
        this.request("GetTransListHandler", req, resp, cb);
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
     * 版本升级

Bcos根据交易哈希查看交易详细信息
     * @param {GetTransByHashHandlerRequest} req
     * @param {function(string, GetTransByHashHandlerResponse):void} cb
     * @public
     */
    GetTransByHashHandler(req, cb) {
        let resp = new GetTransByHashHandlerResponse();
        this.request("GetTransByHashHandler", req, resp, cb);
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
     * 版本升级

Bcos根据块高查询区块信息
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
     * 版本升级

动态部署合约
     * @param {DeployDynamicContractHandlerRequest} req
     * @param {function(string, DeployDynamicContractHandlerResponse):void} cb
     * @public
     */
    DeployDynamicContractHandler(req, cb) {
        let resp = new DeployDynamicContractHandlerResponse();
        this.request("DeployDynamicContractHandler", req, resp, cb);
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
     * 版本升级

根据动态部署的合约发送交易
     * @param {TransByDynamicContractHandlerRequest} req
     * @param {function(string, TransByDynamicContractHandlerResponse):void} cb
     * @public
     */
    TransByDynamicContractHandler(req, cb) {
        let resp = new TransByDynamicContractHandlerResponse();
        this.request("TransByDynamicContractHandler", req, resp, cb);
    }

    /**
     * 版本升级

Bcos发送交易
     * @param {SendTransactionHandlerRequest} req
     * @param {function(string, SendTransactionHandlerResponse):void} cb
     * @public
     */
    SendTransactionHandler(req, cb) {
        let resp = new SendTransactionHandlerResponse();
        this.request("SendTransactionHandler", req, resp, cb);
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

    /**
     * 版本升级

Bcos分页查询当前群组下的区块列表
     * @param {GetBlockListHandlerRequest} req
     * @param {function(string, GetBlockListHandlerResponse):void} cb
     * @public
     */
    GetBlockListHandler(req, cb) {
        let resp = new GetBlockListHandlerResponse();
        this.request("GetBlockListHandler", req, resp, cb);
    }


}
module.exports = TbaasClient;
