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
const ApplyCertificateResponse = models.ApplyCertificateResponse;
const ManagerInfo = models.ManagerInfo;
const CompleteCertificateRequest = models.CompleteCertificateRequest;
const DeleteCertificateRequest = models.DeleteCertificateRequest;
const DescribeCertificateOperateLogsResponse = models.DescribeCertificateOperateLogsResponse;
const CommitCertificateInformationRequest = models.CommitCertificateInformationRequest;
const DownloadCertificateResponse = models.DownloadCertificateResponse;
const ReplaceCertificateResponse = models.ReplaceCertificateResponse;
const SubmitAuditManagerResponse = models.SubmitAuditManagerResponse;
const DownloadCertificateRequest = models.DownloadCertificateRequest;
const CancelCertificateOrderRequest = models.CancelCertificateOrderRequest;
const ModifyCertificateProjectResponse = models.ModifyCertificateProjectResponse;
const Certificates = models.Certificates;
const CertificateExtra = models.CertificateExtra;
const CompanyInfo = models.CompanyInfo;
const DescribeManagersResponse = models.DescribeManagersResponse;
const DescribeCertificateResponse = models.DescribeCertificateResponse;
const UploadCertificateRequest = models.UploadCertificateRequest;
const UploadConfirmLetterRequest = models.UploadConfirmLetterRequest;
const OperationLog = models.OperationLog;
const VerifyManagerResponse = models.VerifyManagerResponse;
const DescribeCertificateDetailRequest = models.DescribeCertificateDetailRequest;
const Tags = models.Tags;
const SubmitAuditManagerRequest = models.SubmitAuditManagerRequest;
const DeleteManagerRequest = models.DeleteManagerRequest;
const ApplyCertificateRequest = models.ApplyCertificateRequest;
const ReplaceCertificateRequest = models.ReplaceCertificateRequest;
const UploadRevokeLetterResponse = models.UploadRevokeLetterResponse;
const CreateCertificateResponse = models.CreateCertificateResponse;
const UploadRevokeLetterRequest = models.UploadRevokeLetterRequest;
const DeleteCertificateResponse = models.DeleteCertificateResponse;
const RevokeCertificateResponse = models.RevokeCertificateResponse;
const RevokeDomainValidateAuths = models.RevokeDomainValidateAuths;
const DescribeCertificateDetailResponse = models.DescribeCertificateDetailResponse;
const CheckCertificateChainResponse = models.CheckCertificateChainResponse;
const ModifyCertificateProjectRequest = models.ModifyCertificateProjectRequest;
const DvAuths = models.DvAuths;
const ModifyCertificateAliasRequest = models.ModifyCertificateAliasRequest;
const DescribeCertificateRequest = models.DescribeCertificateRequest;
const DescribeManagerDetailRequest = models.DescribeManagerDetailRequest;
const DvAuthDetail = models.DvAuthDetail;
const ProjectInfo = models.ProjectInfo;
const DescribeCertificateOperateLogsRequest = models.DescribeCertificateOperateLogsRequest;
const CancelCertificateOrderResponse = models.CancelCertificateOrderResponse;
const CreateCertificateRequest = models.CreateCertificateRequest;
const DescribeCertificatesResponse = models.DescribeCertificatesResponse;
const CommitCertificateInformationResponse = models.CommitCertificateInformationResponse;
const UploadConfirmLetterResponse = models.UploadConfirmLetterResponse;
const DeleteManagerResponse = models.DeleteManagerResponse;
const VerifyManagerRequest = models.VerifyManagerRequest;
const UploadCertificateResponse = models.UploadCertificateResponse;
const CheckCertificateChainRequest = models.CheckCertificateChainRequest;
const ModifyCertificateAliasResponse = models.ModifyCertificateAliasResponse;
const DescribeManagerDetailResponse = models.DescribeManagerDetailResponse;
const SubmittedData = models.SubmittedData;
const SubmitCertificateInformationRequest = models.SubmitCertificateInformationRequest;
const DescribeCertificatesRequest = models.DescribeCertificatesRequest;
const DescribeManagersRequest = models.DescribeManagersRequest;
const CompleteCertificateResponse = models.CompleteCertificateResponse;
const SubmitCertificateInformationResponse = models.SubmitCertificateInformationResponse;
const RevokeCertificateRequest = models.RevokeCertificateRequest;


/**
 * ssl client
 * @class
 */
class SslClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("ssl.tencentcloudapi.com", "2019-12-05", credential, region, profile);
    }
    
    /**
     * 本接口（DescribeCertificates）用于获取证书列表。
     * @param {DescribeCertificatesRequest} req
     * @param {function(string, DescribeCertificatesResponse):void} cb
     * @public
     */
    DescribeCertificates(req, cb) {
        let resp = new DescribeCertificatesResponse();
        this.request("DescribeCertificates", req, resp, cb);
    }

    /**
     * 本接口（UploadRevokeLetter）用于上传证书吊销确认函。
     * @param {UploadRevokeLetterRequest} req
     * @param {function(string, UploadRevokeLetterResponse):void} cb
     * @public
     */
    UploadRevokeLetter(req, cb) {
        let resp = new UploadRevokeLetterResponse();
        this.request("UploadRevokeLetter", req, resp, cb);
    }

    /**
     * 删除管理人
     * @param {DeleteManagerRequest} req
     * @param {function(string, DeleteManagerResponse):void} cb
     * @public
     */
    DeleteManager(req, cb) {
        let resp = new DeleteManagerResponse();
        this.request("DeleteManager", req, resp, cb);
    }

    /**
     * 本接口（UploadConfirmLetter）用于上传证书确认函。
     * @param {UploadConfirmLetterRequest} req
     * @param {function(string, UploadConfirmLetterResponse):void} cb
     * @public
     */
    UploadConfirmLetter(req, cb) {
        let resp = new UploadConfirmLetterResponse();
        this.request("UploadConfirmLetter", req, resp, cb);
    }

    /**
     * 重新提交审核管理人
     * @param {SubmitAuditManagerRequest} req
     * @param {function(string, SubmitAuditManagerResponse):void} cb
     * @public
     */
    SubmitAuditManager(req, cb) {
        let resp = new SubmitAuditManagerResponse();
        this.request("SubmitAuditManager", req, resp, cb);
    }

    /**
     * 提交证书资料。输入参数信息可以分多次提交，但提交的证书资料应最低限度保持完整。
     * @param {SubmitCertificateInformationRequest} req
     * @param {function(string, SubmitCertificateInformationResponse):void} cb
     * @public
     */
    SubmitCertificateInformation(req, cb) {
        let resp = new SubmitCertificateInformationResponse();
        this.request("SubmitCertificateInformation", req, resp, cb);
    }

    /**
     * 重新核验管理人
     * @param {VerifyManagerRequest} req
     * @param {function(string, VerifyManagerResponse):void} cb
     * @public
     */
    VerifyManager(req, cb) {
        let resp = new VerifyManagerResponse();
        this.request("VerifyManager", req, resp, cb);
    }

    /**
     * 取消证书订单。
     * @param {CancelCertificateOrderRequest} req
     * @param {function(string, CancelCertificateOrderResponse):void} cb
     * @public
     */
    CancelCertificateOrder(req, cb) {
        let resp = new CancelCertificateOrderResponse();
        this.request("CancelCertificateOrder", req, resp, cb);
    }

    /**
     * 本接口（DownloadCertificate）用于下载证书。
     * @param {DownloadCertificateRequest} req
     * @param {function(string, DownloadCertificateResponse):void} cb
     * @public
     */
    DownloadCertificate(req, cb) {
        let resp = new DownloadCertificateResponse();
        this.request("DownloadCertificate", req, resp, cb);
    }

    /**
     * 本接口（DeleteCertificate）用于删除证书。
     * @param {DeleteCertificateRequest} req
     * @param {function(string, DeleteCertificateResponse):void} cb
     * @public
     */
    DeleteCertificate(req, cb) {
        let resp = new DeleteCertificateResponse();
        this.request("DeleteCertificate", req, resp, cb);
    }

    /**
     * 本接口（CompleteCertificate）用于主动触发证书验证。仅非DNSPod和Wotrus品牌证书支持使用此接口。
     * @param {CompleteCertificateRequest} req
     * @param {function(string, CompleteCertificateResponse):void} cb
     * @public
     */
    CompleteCertificate(req, cb) {
        let resp = new CompleteCertificateResponse();
        this.request("CompleteCertificate", req, resp, cb);
    }

    /**
     * 本接口（UploadCertificate）用于上传证书。
     * @param {UploadCertificateRequest} req
     * @param {function(string, UploadCertificateResponse):void} cb
     * @public
     */
    UploadCertificate(req, cb) {
        let resp = new UploadCertificateResponse();
        this.request("UploadCertificate", req, resp, cb);
    }

    /**
     * 本接口（CheckCertificateChain）用于检查证书链是否完整。
     * @param {CheckCertificateChainRequest} req
     * @param {function(string, CheckCertificateChainResponse):void} cb
     * @public
     */
    CheckCertificateChain(req, cb) {
        let resp = new CheckCertificateChainResponse();
        this.request("CheckCertificateChain", req, resp, cb);
    }

    /**
     * 本接口（DescribeCertificate）用于获取证书信息。
     * @param {DescribeCertificateRequest} req
     * @param {function(string, DescribeCertificateResponse):void} cb
     * @public
     */
    DescribeCertificate(req, cb) {
        let resp = new DescribeCertificateResponse();
        this.request("DescribeCertificate", req, resp, cb);
    }

    /**
     * 获取证书详情。
     * @param {DescribeCertificateDetailRequest} req
     * @param {function(string, DescribeCertificateDetailResponse):void} cb
     * @public
     */
    DescribeCertificateDetail(req, cb) {
        let resp = new DescribeCertificateDetailResponse();
        this.request("DescribeCertificateDetail", req, resp, cb);
    }

    /**
     * 查询管理人详情
     * @param {DescribeManagerDetailRequest} req
     * @param {function(string, DescribeManagerDetailResponse):void} cb
     * @public
     */
    DescribeManagerDetail(req, cb) {
        let resp = new DescribeManagerDetailResponse();
        this.request("DescribeManagerDetail", req, resp, cb);
    }

    /**
     * 批量修改证书所属项目。
     * @param {ModifyCertificateProjectRequest} req
     * @param {function(string, ModifyCertificateProjectResponse):void} cb
     * @public
     */
    ModifyCertificateProject(req, cb) {
        let resp = new ModifyCertificateProjectResponse();
        this.request("ModifyCertificateProject", req, resp, cb);
    }

    /**
     * 用户传入证书id和备注来修改证书备注。
     * @param {ModifyCertificateAliasRequest} req
     * @param {function(string, ModifyCertificateAliasResponse):void} cb
     * @public
     */
    ModifyCertificateAlias(req, cb) {
        let resp = new ModifyCertificateAliasResponse();
        this.request("ModifyCertificateAlias", req, resp, cb);
    }

    /**
     * 本接口（CreateCertificate）用于创建付费证书。
     * @param {CreateCertificateRequest} req
     * @param {function(string, CreateCertificateResponse):void} cb
     * @public
     */
    CreateCertificate(req, cb) {
        let resp = new CreateCertificateResponse();
        this.request("CreateCertificate", req, resp, cb);
    }

    /**
     * 提交证书订单。
     * @param {CommitCertificateInformationRequest} req
     * @param {function(string, CommitCertificateInformationResponse):void} cb
     * @public
     */
    CommitCertificateInformation(req, cb) {
        let resp = new CommitCertificateInformationResponse();
        this.request("CommitCertificateInformation", req, resp, cb);
    }

    /**
     * 获取用户账号下有关证书的操作日志。
     * @param {DescribeCertificateOperateLogsRequest} req
     * @param {function(string, DescribeCertificateOperateLogsResponse):void} cb
     * @public
     */
    DescribeCertificateOperateLogs(req, cb) {
        let resp = new DescribeCertificateOperateLogsResponse();
        this.request("DescribeCertificateOperateLogs", req, resp, cb);
    }

    /**
     * 本接口（ReplaceCertificate）用于重颁发证书。已申请的免费证书仅支持 RSA 算法、密钥对参数为2048的证书重颁发，并且目前仅支持1次重颁发。
     * @param {ReplaceCertificateRequest} req
     * @param {function(string, ReplaceCertificateResponse):void} cb
     * @public
     */
    ReplaceCertificate(req, cb) {
        let resp = new ReplaceCertificateResponse();
        this.request("ReplaceCertificate", req, resp, cb);
    }

    /**
     * 本接口（ApplyCertificate）用于免费证书申请。
     * @param {ApplyCertificateRequest} req
     * @param {function(string, ApplyCertificateResponse):void} cb
     * @public
     */
    ApplyCertificate(req, cb) {
        let resp = new ApplyCertificateResponse();
        this.request("ApplyCertificate", req, resp, cb);
    }

    /**
     * 本接口（RevokeCertificate）用于吊销证书。
     * @param {RevokeCertificateRequest} req
     * @param {function(string, RevokeCertificateResponse):void} cb
     * @public
     */
    RevokeCertificate(req, cb) {
        let resp = new RevokeCertificateResponse();
        this.request("RevokeCertificate", req, resp, cb);
    }

    /**
     * 查询管理人列表
     * @param {DescribeManagersRequest} req
     * @param {function(string, DescribeManagersResponse):void} cb
     * @public
     */
    DescribeManagers(req, cb) {
        let resp = new DescribeManagersResponse();
        this.request("DescribeManagers", req, resp, cb);
    }


}
module.exports = SslClient;
