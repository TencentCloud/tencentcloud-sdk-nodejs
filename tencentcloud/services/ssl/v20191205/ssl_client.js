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
 * ssl client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(clientConfig) {
        super("ssl.tencentcloudapi.com", "2019-12-05", clientConfig);
    }
    /**
     * 查询证书cos云资源部署实例列表
     */
    async DescribeHostCosInstanceList(req, cb) {
        return this.request("DescribeHostCosInstanceList", req, cb);
    }
    /**
     * 本接口（DescribeCertificates）用于获取证书列表。
     */
    async DescribeCertificates(req, cb) {
        return this.request("DescribeCertificates", req, cb);
    }
    /**
     * 查询证书cdn云资源部署实例列表
     */
    async DescribeHostCdnInstanceList(req, cb) {
        return this.request("DescribeHostCdnInstanceList", req, cb);
    }
    /**
     * 查询证书tke云资源部署实例列表
     */
    async DescribeHostTkeInstanceList(req, cb) {
        return this.request("DescribeHostTkeInstanceList", req, cb);
    }
    /**
     * 查询证书云资源更新记录列表
     */
    async DescribeHostUpdateRecord(req, cb) {
        return this.request("DescribeHostUpdateRecord", req, cb);
    }
    /**
     * 本接口（UploadRevokeLetter）用于上传证书吊销确认函。
     */
    async UploadRevokeLetter(req, cb) {
        return this.request("UploadRevokeLetter", req, cb);
    }
    /**
     * 删除管理人
     */
    async DeleteManager(req, cb) {
        return this.request("DeleteManager", req, cb);
    }
    /**
     * 获取下载证书链接
     */
    async DescribeDownloadCertificateUrl(req, cb) {
        return this.request("DescribeDownloadCertificateUrl", req, cb);
    }
    /**
     * 证书部署到云资源实例列表
     */
    async DeployCertificateInstance(req, cb) {
        return this.request("DeployCertificateInstance", req, cb);
    }
    /**
     * 重新提交审核管理人
     */
    async SubmitAuditManager(req, cb) {
        return this.request("SubmitAuditManager", req, cb);
    }
    /**
     * 获得权益包列表
     */
    async DescribePackages(req, cb) {
        return this.request("DescribePackages", req, cb);
    }
    /**
     * 提交证书资料。输入参数信息可以分多次提交，但提交的证书资料应最低限度保持完整。
     */
    async SubmitCertificateInformation(req, cb) {
        return this.request("SubmitCertificateInformation", req, cb);
    }
    /**
     * 云资源更新一键回滚
     */
    async UpdateCertificateRecordRollback(req, cb) {
        return this.request("UpdateCertificateRecordRollback", req, cb);
    }
    /**
     * 查询证书ddos云资源部署实例列表
     */
    async DescribeHostDdosInstanceList(req, cb) {
        return this.request("DescribeHostDdosInstanceList", req, cb);
    }
    /**
     * 重新核验管理人
     */
    async VerifyManager(req, cb) {
        return this.request("VerifyManager", req, cb);
    }
    /**
     * 查询证书clb云资源部署实例列表
     */
    async DescribeHostClbInstanceList(req, cb) {
        return this.request("DescribeHostClbInstanceList", req, cb);
    }
    /**
     * 查询证书EdgeOne云资源部署实例列表
     */
    async DescribeHostTeoInstanceList(req, cb) {
        return this.request("DescribeHostTeoInstanceList", req, cb);
    }
    /**
     * 取消证书订单。
     */
    async CancelCertificateOrder(req, cb) {
        return this.request("CancelCertificateOrder", req, cb);
    }
    /**
     * 本接口（DownloadCertificate）用于下载证书。
     */
    async DownloadCertificate(req, cb) {
        return this.request("DownloadCertificate", req, cb);
    }
    /**
     * 本接口（DeleteCertificate）用于删除证书。
     */
    async DeleteCertificate(req, cb) {
        return this.request("DeleteCertificate", req, cb);
    }
    /**
     * 本接口（CompleteCertificate）用于主动触发证书验证。仅非DNSPod和Wotrus品牌证书支持使用此接口。
     */
    async CompleteCertificate(req, cb) {
        return this.request("CompleteCertificate", req, cb);
    }
    /**
     * 一键更新旧证书资源，本接口为异步接口， 调用之后DeployRecordId为0表示任务进行中， 重复请求这个接口， 当返回DeployRecordId大于0则表示任务创建成功。 未创建成功则会抛出异常
     */
    async UpdateCertificateInstance(req, cb) {
        return this.request("UpdateCertificateInstance", req, cb);
    }
    /**
     * 本接口（UploadCertificate）用于上传证书。
     */
    async UploadCertificate(req, cb) {
        return this.request("UploadCertificate", req, cb);
    }
    /**
     * 本接口（CheckCertificateChain）用于检查证书链是否完整。
     */
    async CheckCertificateChain(req, cb) {
        return this.request("CheckCertificateChain", req, cb);
    }
    /**
     * 用户传入证书id和备注来修改证书备注。
     */
    async ModifyCertificateAlias(req, cb) {
        return this.request("ModifyCertificateAlias", req, cb);
    }
    /**
     * 查询公司列表
     */
    async DescribeCompanies(req, cb) {
        return this.request("DescribeCompanies", req, cb);
    }
    /**
     * 获取证书详情。
     */
    async DescribeCertificateDetail(req, cb) {
        return this.request("DescribeCertificateDetail", req, cb);
    }
    /**
     * 查询证书Vod云资源部署实例列表
     */
    async DescribeHostVodInstanceList(req, cb) {
        return this.request("DescribeHostVodInstanceList", req, cb);
    }
    /**
     * 查询证书live云资源部署实例列表
     */
    async DescribeHostLiveInstanceList(req, cb) {
        return this.request("DescribeHostLiveInstanceList", req, cb);
    }
    /**
     * 查询证书waf云资源部署实例列表
     */
    async DescribeHostWafInstanceList(req, cb) {
        return this.request("DescribeHostWafInstanceList", req, cb);
    }
    /**
     * 查询管理人详情
     */
    async DescribeManagerDetail(req, cb) {
        return this.request("DescribeManagerDetail", req, cb);
    }
    /**
     * 查询证书云资源部署记录详情列表
     */
    async DescribeHostDeployRecordDetail(req, cb) {
        return this.request("DescribeHostDeployRecordDetail", req, cb);
    }
    /**
     * 云资源部署一键回滚
     */
    async DeployCertificateRecordRollback(req, cb) {
        return this.request("DeployCertificateRecordRollback", req, cb);
    }
    /**
     * 云资源部署重试部署记录
     */
    async DeployCertificateRecordRetry(req, cb) {
        return this.request("DeployCertificateRecordRetry", req, cb);
    }
    /**
     * 查询CreateCertificateBindResourceSyncTask任务结果， 返回证书关联云资源异步任务结果， 支持以下云资源：clb、cdn、waf、live、vod、ddos、tke、apigateway、tcb、teo（edgeOne）
     */
    async DescribeCertificateBindResourceTaskResult(req, cb) {
        return this.request("DescribeCertificateBindResourceTaskResult", req, cb);
    }
    /**
     * 取消证书审核
     */
    async CancelAuditCertificate(req, cb) {
        return this.request("CancelAuditCertificate", req, cb);
    }
    /**
     * 查询证书云资源部署记录列表
     */
    async DescribeHostDeployRecord(req, cb) {
        return this.request("DescribeHostDeployRecord", req, cb);
    }
    /**
     * 云资源更新重试部署记录
     */
    async UpdateCertificateRecordRetry(req, cb) {
        return this.request("UpdateCertificateRecordRetry", req, cb);
    }
    /**
     * 本接口（RevokeCertificate）用于吊销证书。
     */
    async RevokeCertificate(req, cb) {
        return this.request("RevokeCertificate", req, cb);
    }
    /**
     * 批量修改证书所属项目。
     */
    async ModifyCertificateProject(req, cb) {
        return this.request("ModifyCertificateProject", req, cb);
    }
    /**
     * 本接口（DescribeCertificate）用于获取证书信息。
     */
    async DescribeCertificate(req, cb) {
        return this.request("DescribeCertificate", req, cb);
    }
    /**
     * 证书查询关联资源， 最新查询接口请使用CreateCertificateBindResourceSyncTask， 可以查询更多支持的云资源
     */
    async DescribeDeployedResources(req, cb) {
        return this.request("DescribeDeployedResources", req, cb);
    }
    /**
     * 本接口（CreateCertificate）用于创建付费证书。
     */
    async CreateCertificate(req, cb) {
        return this.request("CreateCertificate", req, cb);
    }
    /**
     * 本接口（UploadConfirmLetter）用于上传证书确认函。
     */
    async UploadConfirmLetter(req, cb) {
        return this.request("UploadConfirmLetter", req, cb);
    }
    /**
     * 查询证书Lighthouse云资源部署实例列表
     */
    async DescribeHostLighthouseInstanceList(req, cb) {
        return this.request("DescribeHostLighthouseInstanceList", req, cb);
    }
    /**
     * 查询证书云资源更新记录详情列表
     */
    async DescribeHostUpdateRecordDetail(req, cb) {
        return this.request("DescribeHostUpdateRecordDetail", req, cb);
    }
    /**
     * 提交证书订单。
     */
    async CommitCertificateInformation(req, cb) {
        return this.request("CommitCertificateInformation", req, cb);
    }
    /**
     * 获取用户账号下有关证书的操作日志。
     */
    async DescribeCertificateOperateLogs(req, cb) {
        return this.request("DescribeCertificateOperateLogs", req, cb);
    }
    /**
     * 查询证书apiGateway云资源部署实例列表
     */
    async DescribeHostApiGatewayInstanceList(req, cb) {
        return this.request("DescribeHostApiGatewayInstanceList", req, cb);
    }
    /**
     * 使用权益点创建证书
     */
    async CreateCertificateByPackage(req, cb) {
        return this.request("CreateCertificateByPackage", req, cb);
    }
    /**
     * 创建证书绑定关联云资源异步任务， 该接口用于查询证书关联云资源。 若证书ID已存在查询云资源任务，则结果返回该任务ID。关联云资源类型，支持以下云资源：clb、cdn、waf、live、vod、ddos、tke、apigateway、tcb、teo（edgeOne）。查询关联云资源结果使用DescribeCertificateBindResourceTaskResult接口
     */
    async CreateCertificateBindResourceSyncTask(req, cb) {
        return this.request("CreateCertificateBindResourceSyncTask", req, cb);
    }
    /**
     * 修改忽略证书到期通知。打开或关闭证书到期通知。
     */
    async ModifyCertificatesExpiringNotificationSwitch(req, cb) {
        return this.request("ModifyCertificatesExpiringNotificationSwitch", req, cb);
    }
    /**
     * 本接口（ReplaceCertificate）用于重颁发证书。已申请的免费证书仅支持 RSA 算法、密钥对参数为2048的证书重颁发，并且目前仅支持1次重颁发。
     */
    async ReplaceCertificate(req, cb) {
        return this.request("ReplaceCertificate", req, cb);
    }
    /**
     * 本接口（ApplyCertificate）用于免费证书申请。
     */
    async ApplyCertificate(req, cb) {
        return this.request("ApplyCertificate", req, cb);
    }
    /**
     * 查询批量删除任务结果
     */
    async DescribeDeleteCertificatesTaskResult(req, cb) {
        return this.request("DescribeDeleteCertificatesTaskResult", req, cb);
    }
    /**
     * 查询管理人列表
     */
    async DescribeManagers(req, cb) {
        return this.request("DescribeManagers", req, cb);
    }
    /**
     * 查询CreateCertificateBindResourceSyncTask任务结果， 返回证书关联云资源异步任务结果， 支持以下云资源：clb、cdn、waf、live、vod、ddos、tke、apigateway、tcb、teo（edgeOne）
     */
    async DescribeCertificateBindResourceTaskDetail(req, cb) {
        return this.request("DescribeCertificateBindResourceTaskDetail", req, cb);
    }
    /**
     * 针对审核失败或审核取消的付费证书，重新发起审核
     */
    async ModifyCertificateResubmit(req, cb) {
        return this.request("ModifyCertificateResubmit", req, cb);
    }
}
exports.Client = Client;
