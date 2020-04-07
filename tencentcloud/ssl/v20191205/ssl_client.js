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
const DeleteCertificateRequest = models.DeleteCertificateRequest;
const DescribeCertificateOperateLogsResponse = models.DescribeCertificateOperateLogsResponse;
const CommitCertificateInformationRequest = models.CommitCertificateInformationRequest;
const CommitCertificateInformationResponse = models.CommitCertificateInformationResponse;
const ReplaceCertificateResponse = models.ReplaceCertificateResponse;
const DownloadCertificateRequest = models.DownloadCertificateRequest;
const CancelCertificateOrderRequest = models.CancelCertificateOrderRequest;
const ModifyCertificateProjectResponse = models.ModifyCertificateProjectResponse;
const Certificates = models.Certificates;
const CertificateExtra = models.CertificateExtra;
const DescribeCertificateResponse = models.DescribeCertificateResponse;
const OperationLog = models.OperationLog;
const UploadCertificateRequest = models.UploadCertificateRequest;
const DescribeCertificateDetailRequest = models.DescribeCertificateDetailRequest;
const ApplyCertificateRequest = models.ApplyCertificateRequest;
const ReplaceCertificateRequest = models.ReplaceCertificateRequest;
const DeleteCertificateResponse = models.DeleteCertificateResponse;
const DvAuthDetail = models.DvAuthDetail;
const ModifyCertificateProjectRequest = models.ModifyCertificateProjectRequest;
const DvAuths = models.DvAuths;
const ModifyCertificateAliasRequest = models.ModifyCertificateAliasRequest;
const DescribeCertificateRequest = models.DescribeCertificateRequest;
const ProjectInfo = models.ProjectInfo;
const DescribeCertificateOperateLogsRequest = models.DescribeCertificateOperateLogsRequest;
const CancelCertificateOrderResponse = models.CancelCertificateOrderResponse;
const SubmitCertificateInformationResponse = models.SubmitCertificateInformationResponse;
const DescribeCertificatesResponse = models.DescribeCertificatesResponse;
const DownloadCertificateResponse = models.DownloadCertificateResponse;
const UploadCertificateResponse = models.UploadCertificateResponse;
const DescribeCertificateDetailResponse = models.DescribeCertificateDetailResponse;
const ModifyCertificateAliasResponse = models.ModifyCertificateAliasResponse;
const SubmitCertificateInformationRequest = models.SubmitCertificateInformationRequest;
const SubmittedData = models.SubmittedData;
const DescribeCertificatesRequest = models.DescribeCertificatesRequest;


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
     * 提交证书资料。
     * @param {SubmitCertificateInformationRequest} req
     * @param {function(string, SubmitCertificateInformationResponse):void} cb
     * @public
     */
    SubmitCertificateInformation(req, cb) {
        let resp = new SubmitCertificateInformationResponse();
        this.request("SubmitCertificateInformation", req, resp, cb);
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
     * 本接口（DescribeCertificate）用于获取证书信息。
     * @param {DescribeCertificateRequest} req
     * @param {function(string, DescribeCertificateResponse):void} cb
     * @public
     */
    DescribeCertificate(req, cb) {
        let resp = new DescribeCertificateResponse();
        this.request("DescribeCertificate", req, resp, cb);
    }


}
module.exports = SslClient;
