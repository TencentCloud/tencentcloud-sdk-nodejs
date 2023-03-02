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
const CredentialStatus = models.CredentialStatus;
const QueryPolicyRequest = models.QueryPolicyRequest;
const RegisterClaimPolicyRequest = models.RegisterClaimPolicyRequest;
const GetDidServiceDetailResponse = models.GetDidServiceDetailResponse;
const CreateCredentialResponse = models.CreateCredentialResponse;
const GetConsortiumListRequest = models.GetConsortiumListRequest;
const DownCptResponse = models.DownCptResponse;
const GetCredentialIssueTrendResponse = models.GetCredentialIssueTrendResponse;
const CreateCredentialRequest = models.CreateCredentialRequest;
const CreateDidServiceResponse = models.CreateDidServiceResponse;
const GetConsortiumListResponse = models.GetConsortiumListResponse;
const GetCredentialCptRankRequest = models.GetCredentialCptRankRequest;
const GetPolicyListRequest = models.GetPolicyListRequest;
const GetConsortiumClusterListResponse = models.GetConsortiumClusterListResponse;
const Task = models.Task;
const GetCptListRequest = models.GetCptListRequest;
const GetAuthoritiesListRequest = models.GetAuthoritiesListRequest;
const GetAgencyTDidRequest = models.GetAgencyTDidRequest;
const RemoveHashRequest = models.RemoveHashRequest;
const GetGroupListRequest = models.GetGroupListRequest;
const Proof = models.Proof;
const GetDeployInfoRequest = models.GetDeployInfoRequest;
const Authority = models.Authority;
const CreateLabelResponse = models.CreateLabelResponse;
const GetPublicKeyRequest = models.GetPublicKeyRequest;
const Label = models.Label;
const GetDidServiceListResponse = models.GetDidServiceListResponse;
const DeployByNameResponse = models.DeployByNameResponse;
const CreateLabelRequest = models.CreateLabelRequest;
const CreateDidServiceRequest = models.CreateDidServiceRequest;
const GetDidClusterDetailResponse = models.GetDidClusterDetailResponse;
const RecognizeAuthorityIssuerResponse = models.RecognizeAuthorityIssuerResponse;
const EnableHashResponse = models.EnableHashResponse;
const GetCredentialIssueTrendRequest = models.GetCredentialIssueTrendRequest;
const EnableHashRequest = models.EnableHashRequest;
const GetDidClusterListRequest = models.GetDidClusterListRequest;
const GetCptInfoRequest = models.GetCptInfoRequest;
const DownCptRequest = models.DownCptRequest;
const GetCptListResponse = models.GetCptListResponse;
const GetCptInfoResponse = models.GetCptInfoResponse;
const GetDidRegisterTrendRequest = models.GetDidRegisterTrendRequest;
const AddLabelRequest = models.AddLabelRequest;
const GetAuthorityIssuerResponse = models.GetAuthorityIssuerResponse;
const CreateSelectiveCredentialResponse = models.CreateSelectiveCredentialResponse;
const VerifyCredentialResponse = models.VerifyCredentialResponse;
const CptListData = models.CptListData;
const FunctionArg = models.FunctionArg;
const CreateTDidByPrivateKeyRequest = models.CreateTDidByPrivateKeyRequest;
const RegisterCptResponse = models.RegisterCptResponse;
const SetCredentialStatusRequest = models.SetCredentialStatusRequest;
const RemoveHashResponse = models.RemoveHashResponse;
const CheckDidDeployRequest = models.CheckDidDeployRequest;
const GetDidDocumentResponse = models.GetDidDocumentResponse;
const RegisterIssuerResponse = models.RegisterIssuerResponse;
const CancelAuthorityIssuerRequest = models.CancelAuthorityIssuerRequest;
const CancelAuthorityIssuerResponse = models.CancelAuthorityIssuerResponse;
const CreateTDidRequest = models.CreateTDidRequest;
const GetAuthoritiesListResponse = models.GetAuthoritiesListResponse;
const CreateSelectiveCredentialRequest = models.CreateSelectiveCredentialRequest;
const CreateTDidByPrivateKeyResponse = models.CreateTDidByPrivateKeyResponse;
const DeployByNameRequest = models.DeployByNameRequest;
const GetDidServiceListRequest = models.GetDidServiceListRequest;
const GetAuthorityIssuerRequest = models.GetAuthorityIssuerRequest;
const GetDidClusterListResponse = models.GetDidClusterListResponse;
const RecognizeAuthorityIssuerRequest = models.RecognizeAuthorityIssuerRequest;
const GetCredentialStatusRequest = models.GetCredentialStatusRequest;
const GetAgencyTDidResponse = models.GetAgencyTDidResponse;
const DidServiceInfo = models.DidServiceInfo;
const SetCredentialStatusResponse = models.SetCredentialStatusResponse;
const CptIssueRank = models.CptIssueRank;
const GetCredentialCptRankResponse = models.GetCredentialCptRankResponse;
const TransactionArg = models.TransactionArg;
const RegisterIssuerRequest = models.RegisterIssuerRequest;
const GetDidListResponse = models.GetDidListResponse;
const GetDeployInfoResponse = models.GetDeployInfoResponse;
const Contract = models.Contract;
const CreateTDidByPublicKeyResponse = models.CreateTDidByPublicKeyResponse;
const CheckDidDeployResponse = models.CheckDidDeployResponse;
const GetDidClusterDetailRequest = models.GetDidClusterDetailRequest;
const GetConsortiumClusterListRequest = models.GetConsortiumClusterListRequest;
const GetDidDetailResponse = models.GetDidDetailResponse;
const Trend = models.Trend;
const BcosClusterItem = models.BcosClusterItem;
const GetLabelListRequest = models.GetLabelListRequest;
const DidCluster = models.DidCluster;
const GetDataPanelResponse = models.GetDataPanelResponse;
const Identity = models.Identity;
const QueryPolicyResponse = models.QueryPolicyResponse;
const GetDidListRequest = models.GetDidListRequest;
const Group = models.Group;
const CheckChainResponse = models.CheckChainResponse;
const CreateTDidByPublicKeyRequest = models.CreateTDidByPublicKeyRequest;
const Policy = models.Policy;
const GetDataPanelRequest = models.GetDataPanelRequest;
const GetGroupListResponse = models.GetGroupListResponse;
const RegisterClaimPolicyResponse = models.RegisterClaimPolicyResponse;
const GetDidDetailRequest = models.GetDidDetailRequest;
const GetDidServiceDetailRequest = models.GetDidServiceDetailRequest;
const GetDidDocumentRequest = models.GetDidDocumentRequest;
const ConsortiumItem = models.ConsortiumItem;
const GetCredentialIssueRankResponse = models.GetCredentialIssueRankResponse;
const AddLabelResponse = models.AddLabelResponse;
const GetDeployListResponse = models.GetDeployListResponse;
const CheckChainRequest = models.CheckChainRequest;
const GetPublicKeyResponse = models.GetPublicKeyResponse;
const GetDidRegisterTrendResponse = models.GetDidRegisterTrendResponse;
const GetCredentialStatusResponse = models.GetCredentialStatusResponse;
const CreateTDidResponse = models.CreateTDidResponse;
const VerifyCredentialRequest = models.VerifyCredentialRequest;
const RegisterCptRequest = models.RegisterCptRequest;
const GetLabelListResponse = models.GetLabelListResponse;
const VerifyFunctionArg = models.VerifyFunctionArg;
const GetPolicyListResponse = models.GetPolicyListResponse;
const DidData = models.DidData;
const GetCredentialIssueRankRequest = models.GetCredentialIssueRankRequest;
const GetDeployListRequest = models.GetDeployListRequest;


/**
 * tdid client
 * @class
 */
class TdidClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("tdid.tencentcloudapi.com", "2021-05-19", credential, region, profile);
    }
    
    /**
     * 创建选择性批露凭证
     * @param {CreateSelectiveCredentialRequest} req
     * @param {function(string, CreateSelectiveCredentialResponse):void} cb
     * @public
     */
    CreateSelectiveCredential(req, cb) {
        let resp = new CreateSelectiveCredentialResponse();
        this.request("CreateSelectiveCredential", req, resp, cb);
    }

    /**
     * 权威机构列表
     * @param {GetAuthoritiesListRequest} req
     * @param {function(string, GetAuthoritiesListResponse):void} cb
     * @public
     */
    GetAuthoritiesList(req, cb) {
        let resp = new GetAuthoritiesListResponse();
        this.request("GetAuthoritiesList", req, resp, cb);
    }

    /**
     * 披露策略Policy管理列表
     * @param {GetPolicyListRequest} req
     * @param {function(string, GetPolicyListResponse):void} cb
     * @public
     */
    GetPolicyList(req, cb) {
        let resp = new GetPolicyListResponse();
        this.request("GetPolicyList", req, resp, cb);
    }

    /**
     * 获取凭证链上状态信息
     * @param {GetCredentialStatusRequest} req
     * @param {function(string, GetCredentialStatusResponse):void} cb
     * @public
     */
    GetCredentialStatus(req, cb) {
        let resp = new GetCredentialStatusResponse();
        this.request("GetCredentialStatus", req, resp, cb);
    }

    /**
     * 查看公钥
     * @param {GetPublicKeyRequest} req
     * @param {function(string, GetPublicKeyResponse):void} cb
     * @public
     */
    GetPublicKey(req, cb) {
        let resp = new GetPublicKeyResponse();
        this.request("GetPublicKey", req, resp, cb);
    }

    /**
     * 检查区块链信息
     * @param {CheckChainRequest} req
     * @param {function(string, CheckChainResponse):void} cb
     * @public
     */
    CheckChain(req, cb) {
        let resp = new CheckChainResponse();
        this.request("CheckChain", req, resp, cb);
    }

    /**
     * 披露策略Policy查看
     * @param {QueryPolicyRequest} req
     * @param {function(string, QueryPolicyResponse):void} cb
     * @public
     */
    QueryPolicy(req, cb) {
        let resp = new QueryPolicyResponse();
        this.request("QueryPolicy", req, resp, cb);
    }

    /**
     * 检查部署情况
     * @param {CheckDidDeployRequest} req
     * @param {function(string, CheckDidDeployResponse):void} cb
     * @public
     */
    CheckDidDeploy(req, cb) {
        let resp = new CheckDidDeployResponse();
        this.request("CheckDidDeploy", req, resp, cb);
    }

    /**
     * 认证权威机构
     * @param {RecognizeAuthorityIssuerRequest} req
     * @param {function(string, RecognizeAuthorityIssuerResponse):void} cb
     * @public
     */
    RecognizeAuthorityIssuer(req, cb) {
        let resp = new RecognizeAuthorityIssuerResponse();
        this.request("RecognizeAuthorityIssuer", req, resp, cb);
    }

    /**
     * 撤消权威机构认证
     * @param {CancelAuthorityIssuerRequest} req
     * @param {function(string, CancelAuthorityIssuerResponse):void} cb
     * @public
     */
    CancelAuthorityIssuer(req, cb) {
        let resp = new CancelAuthorityIssuerResponse();
        this.request("CancelAuthorityIssuer", req, resp, cb);
    }

    /**
     * DID注册趋势
     * @param {GetDidRegisterTrendRequest} req
     * @param {function(string, GetDidRegisterTrendResponse):void} cb
     * @public
     */
    GetDidRegisterTrend(req, cb) {
        let resp = new GetDidRegisterTrendResponse();
        this.request("GetDidRegisterTrend", req, resp, cb);
    }

    /**
     * DID详情
     * @param {GetDidDetailRequest} req
     * @param {function(string, GetDidDetailResponse):void} cb
     * @public
     */
    GetDidDetail(req, cb) {
        let resp = new GetDidDetailResponse();
        this.request("GetDidDetail", req, resp, cb);
    }

    /**
     * 删除合约
     * @param {RemoveHashRequest} req
     * @param {function(string, RemoveHashResponse):void} cb
     * @public
     */
    RemoveHash(req, cb) {
        let resp = new RemoveHashResponse();
        this.request("RemoveHash", req, resp, cb);
    }

    /**
     * 凭证颁发按机构排行
     * @param {GetCredentialIssueRankRequest} req
     * @param {function(string, GetCredentialIssueRankResponse):void} cb
     * @public
     */
    GetCredentialIssueRank(req, cb) {
        let resp = new GetCredentialIssueRankResponse();
        this.request("GetCredentialIssueRank", req, resp, cb);
    }

    /**
     * 主群组配置列表
     * @param {GetGroupListRequest} req
     * @param {function(string, GetGroupListResponse):void} cb
     * @public
     */
    GetGroupList(req, cb) {
        let resp = new GetGroupListResponse();
        this.request("GetGroupList", req, resp, cb);
    }

    /**
     * 披露策略Policy注册
     * @param {RegisterClaimPolicyRequest} req
     * @param {function(string, RegisterClaimPolicyResponse):void} cb
     * @public
     */
    RegisterClaimPolicy(req, cb) {
        let resp = new RegisterClaimPolicyResponse();
        this.request("RegisterClaimPolicy", req, resp, cb);
    }

    /**
     * 获取联盟列表
     * @param {GetConsortiumListRequest} req
     * @param {function(string, GetConsortiumListResponse):void} cb
     * @public
     */
    GetConsortiumList(req, cb) {
        let resp = new GetConsortiumListResponse();
        this.request("GetConsortiumList", req, resp, cb);
    }

    /**
     * 获取用户的DID网络列表
     * @param {GetDidClusterListRequest} req
     * @param {function(string, GetDidClusterListResponse):void} cb
     * @public
     */
    GetDidClusterList(req, cb) {
        let resp = new GetDidClusterListResponse();
        this.request("GetDidClusterList", req, resp, cb);
    }

    /**
     * 获取DID服务详情
     * @param {GetDidServiceDetailRequest} req
     * @param {function(string, GetDidServiceDetailResponse):void} cb
     * @public
     */
    GetDidServiceDetail(req, cb) {
        let resp = new GetDidServiceDetailResponse();
        this.request("GetDidServiceDetail", req, resp, cb);
    }

    /**
     * 凭证模版列表
     * @param {GetCptListRequest} req
     * @param {function(string, GetCptListResponse):void} cb
     * @public
     */
    GetCptList(req, cb) {
        let resp = new GetCptListResponse();
        this.request("GetCptList", req, resp, cb);
    }

    /**
     * 凭证颁发趋势
     * @param {GetCredentialIssueTrendRequest} req
     * @param {function(string, GetCredentialIssueTrendResponse):void} cb
     * @public
     */
    GetCredentialIssueTrend(req, cb) {
        let resp = new GetCredentialIssueTrendResponse();
        this.request("GetCredentialIssueTrend", req, resp, cb);
    }

    /**
     * 通过Name部署TDID合约
     * @param {DeployByNameRequest} req
     * @param {function(string, DeployByNameResponse):void} cb
     * @public
     */
    DeployByName(req, cb) {
        let resp = new DeployByNameResponse();
        this.request("DeployByName", req, resp, cb);
    }

    /**
     * 创建DID服务
     * @param {CreateDidServiceRequest} req
     * @param {function(string, CreateDidServiceResponse):void} cb
     * @public
     */
    CreateDidService(req, cb) {
        let resp = new CreateDidServiceResponse();
        this.request("CreateDidService", req, resp, cb);
    }

    /**
     * 创建凭证
     * @param {CreateCredentialRequest} req
     * @param {function(string, CreateCredentialResponse):void} cb
     * @public
     */
    CreateCredential(req, cb) {
        let resp = new CreateCredentialResponse();
        this.request("CreateCredential", req, resp, cb);
    }

    /**
     * 获取DID区块链网络详情
     * @param {GetDidClusterDetailRequest} req
     * @param {function(string, GetDidClusterDetailResponse):void} cb
     * @public
     */
    GetDidClusterDetail(req, cb) {
        let resp = new GetDidClusterDetailResponse();
        this.request("GetDidClusterDetail", req, resp, cb);
    }

    /**
     * 设置凭证链上状态
     * @param {SetCredentialStatusRequest} req
     * @param {function(string, SetCredentialStatusResponse):void} cb
     * @public
     */
    SetCredentialStatus(req, cb) {
        let resp = new SetCredentialStatusResponse();
        this.request("SetCredentialStatus", req, resp, cb);
    }

    /**
     * 标签列表
     * @param {GetLabelListRequest} req
     * @param {function(string, GetLabelListResponse):void} cb
     * @public
     */
    GetLabelList(req, cb) {
        let resp = new GetLabelListResponse();
        this.request("GetLabelList", req, resp, cb);
    }

    /**
     * 启用合约
     * @param {EnableHashRequest} req
     * @param {function(string, EnableHashResponse):void} cb
     * @public
     */
    EnableHash(req, cb) {
        let resp = new EnableHashResponse();
        this.request("EnableHash", req, resp, cb);
    }

    /**
     * 合约部署列表
     * @param {GetDeployListRequest} req
     * @param {function(string, GetDeployListResponse):void} cb
     * @public
     */
    GetDeployList(req, cb) {
        let resp = new GetDeployListResponse();
        this.request("GetDeployList", req, resp, cb);
    }

    /**
     * 创建机构DID
     * @param {CreateTDidRequest} req
     * @param {function(string, CreateTDidResponse):void} cb
     * @public
     */
    CreateTDid(req, cb) {
        let resp = new CreateTDidResponse();
        this.request("CreateTDid", req, resp, cb);
    }

    /**
     * 注册为权威机构
     * @param {RegisterIssuerRequest} req
     * @param {function(string, RegisterIssuerResponse):void} cb
     * @public
     */
    RegisterIssuer(req, cb) {
        let resp = new RegisterIssuerResponse();
        this.request("RegisterIssuer", req, resp, cb);
    }

    /**
     * 合约部署详情

     * @param {GetDeployInfoRequest} req
     * @param {function(string, GetDeployInfoResponse):void} cb
     * @public
     */
    GetDeployInfo(req, cb) {
        let resp = new GetDeployInfoResponse();
        this.request("GetDeployInfo", req, resp, cb);
    }

    /**
     * 凭证颁发按机构排行
     * @param {GetCredentialCptRankRequest} req
     * @param {function(string, GetCredentialCptRankResponse):void} cb
     * @public
     */
    GetCredentialCptRank(req, cb) {
        let resp = new GetCredentialCptRankResponse();
        this.request("GetCredentialCptRank", req, resp, cb);
    }

    /**
     * 凭证模版详情
     * @param {GetCptInfoRequest} req
     * @param {function(string, GetCptInfoResponse):void} cb
     * @public
     */
    GetCptInfo(req, cb) {
        let resp = new GetCptInfoResponse();
        this.request("GetCptInfo", req, resp, cb);
    }

    /**
     * 查看DID文档

     * @param {GetDidDocumentRequest} req
     * @param {function(string, GetDidDocumentResponse):void} cb
     * @public
     */
    GetDidDocument(req, cb) {
        let resp = new GetDidDocumentResponse();
        this.request("GetDidDocument", req, resp, cb);
    }

    /**
     * 获取DID服务列表
     * @param {GetDidServiceListRequest} req
     * @param {function(string, GetDidServiceListResponse):void} cb
     * @public
     */
    GetDidServiceList(req, cb) {
        let resp = new GetDidServiceListResponse();
        this.request("GetDidServiceList", req, resp, cb);
    }

    /**
     * DID列表
     * @param {GetDidListRequest} req
     * @param {function(string, GetDidListResponse):void} cb
     * @public
     */
    GetDidList(req, cb) {
        let resp = new GetDidListResponse();
        this.request("GetDidList", req, resp, cb);
    }

    /**
     *  新建DID根据公钥生成Tdid
     * @param {CreateTDidByPublicKeyRequest} req
     * @param {function(string, CreateTDidByPublicKeyResponse):void} cb
     * @public
     */
    CreateTDidByPublicKey(req, cb) {
        let resp = new CreateTDidByPublicKeyResponse();
        this.request("CreateTDidByPublicKey", req, resp, cb);
    }

    /**
     * 该接口已废弃

本机构DID详情
     * @param {GetAgencyTDidRequest} req
     * @param {function(string, GetAgencyTDidResponse):void} cb
     * @public
     */
    GetAgencyTDid(req, cb) {
        let resp = new GetAgencyTDidResponse();
        this.request("GetAgencyTDid", req, resp, cb);
    }

    /**
     * 新建DID根据私钥生成Tdid
     * @param {CreateTDidByPrivateKeyRequest} req
     * @param {function(string, CreateTDidByPrivateKeyResponse):void} cb
     * @public
     */
    CreateTDidByPrivateKey(req, cb) {
        let resp = new CreateTDidByPrivateKeyResponse();
        this.request("CreateTDidByPrivateKey", req, resp, cb);
    }

    /**
     * DID添加标签

     * @param {AddLabelRequest} req
     * @param {function(string, AddLabelResponse):void} cb
     * @public
     */
    AddLabel(req, cb) {
        let resp = new AddLabelResponse();
        this.request("AddLabel", req, resp, cb);
    }

    /**
     * 凭证模版下载
     * @param {DownCptRequest} req
     * @param {function(string, DownCptResponse):void} cb
     * @public
     */
    DownCpt(req, cb) {
        let resp = new DownCptResponse();
        this.request("DownCpt", req, resp, cb);
    }

    /**
     * 凭证模版新建
     * @param {RegisterCptRequest} req
     * @param {function(string, RegisterCptResponse):void} cb
     * @public
     */
    RegisterCpt(req, cb) {
        let resp = new RegisterCptResponse();
        this.request("RegisterCpt", req, resp, cb);
    }

    /**
     * 获取联盟bcos网络列表
     * @param {GetConsortiumClusterListRequest} req
     * @param {function(string, GetConsortiumClusterListResponse):void} cb
     * @public
     */
    GetConsortiumClusterList(req, cb) {
        let resp = new GetConsortiumClusterListResponse();
        this.request("GetConsortiumClusterList", req, resp, cb);
    }

    /**
     * 验证凭证
     * @param {VerifyCredentialRequest} req
     * @param {function(string, VerifyCredentialResponse):void} cb
     * @public
     */
    VerifyCredential(req, cb) {
        let resp = new VerifyCredentialResponse();
        this.request("VerifyCredential", req, resp, cb);
    }

    /**
     * 概览

     * @param {GetDataPanelRequest} req
     * @param {function(string, GetDataPanelResponse):void} cb
     * @public
     */
    GetDataPanel(req, cb) {
        let resp = new GetDataPanelResponse();
        this.request("GetDataPanel", req, resp, cb);
    }

    /**
     * 获取权威机构信息
     * @param {GetAuthorityIssuerRequest} req
     * @param {function(string, GetAuthorityIssuerResponse):void} cb
     * @public
     */
    GetAuthorityIssuer(req, cb) {
        let resp = new GetAuthorityIssuerResponse();
        this.request("GetAuthorityIssuer", req, resp, cb);
    }

    /**
     * 新建标签
     * @param {CreateLabelRequest} req
     * @param {function(string, CreateLabelResponse):void} cb
     * @public
     */
    CreateLabel(req, cb) {
        let resp = new CreateLabelResponse();
        this.request("CreateLabel", req, resp, cb);
    }


}
module.exports = TdidClient;
