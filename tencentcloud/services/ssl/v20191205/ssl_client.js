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
     * 本接口（DescribeCertificates）用于获取证书列表。
     */
    async DescribeCertificates(req, cb) {
        return this.request("DescribeCertificates", req, cb);
    }
    /**
     * 批量修改证书所属项目。
     */
    async ModifyCertificateProject(req, cb) {
        return this.request("ModifyCertificateProject", req, cb);
    }
    /**
     * 本接口（UploadCertificate）用于上传证书。
     */
    async UploadCertificate(req, cb) {
        return this.request("UploadCertificate", req, cb);
    }
    /**
     * 取消证书订单。
     */
    async CancelCertificateOrder(req, cb) {
        return this.request("CancelCertificateOrder", req, cb);
    }
    /**
     * 提交证书订单。
     */
    async CommitCertificateInformation(req, cb) {
        return this.request("CommitCertificateInformation", req, cb);
    }
    /**
     * 本接口（DeleteCertificate）用于删除证书。
     */
    async DeleteCertificate(req, cb) {
        return this.request("DeleteCertificate", req, cb);
    }
    /**
     * 用户传入证书id和备注来修改证书备注。
     */
    async ModifyCertificateAlias(req, cb) {
        return this.request("ModifyCertificateAlias", req, cb);
    }
    /**
     * 本接口（DownloadCertificate）用于下载证书。
     */
    async DownloadCertificate(req, cb) {
        return this.request("DownloadCertificate", req, cb);
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
     * 获取用户账号下有关证书的操作日志。
     */
    async DescribeCertificateOperateLogs(req, cb) {
        return this.request("DescribeCertificateOperateLogs", req, cb);
    }
    /**
     * 提交证书资料。
     */
    async SubmitCertificateInformation(req, cb) {
        return this.request("SubmitCertificateInformation", req, cb);
    }
    /**
     * 获取证书详情。
     */
    async DescribeCertificateDetail(req, cb) {
        return this.request("DescribeCertificateDetail", req, cb);
    }
    /**
     * 本接口（DescribeCertificate）用于获取证书信息。
     */
    async DescribeCertificate(req, cb) {
        return this.request("DescribeCertificate", req, cb);
    }
}
exports.Client = Client;
