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
 * tdid client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(clientConfig) {
        super("tdid.tencentcloudapi.com", "2021-05-19", clientConfig);
    }
    /**
     * 获取某个应用关键指标统计数据
     */
    async GetOverSummary(req, cb) {
        return this.request("GetOverSummary", req, cb);
    }
    /**
     * 查询权威机构信息
     */
    async QueryAuthorityInfo(req, cb) {
        return this.request("QueryAuthorityInfo", req, cb);
    }
    /**
     * 验证已签名的可验证凭证
     */
    async VerifyCredentials(req, cb) {
        return this.request("VerifyCredentials", req, cb);
    }
    /**
     * 查询凭证模板内容
     */
    async QueryCPT(req, cb) {
        return this.request("QueryCPT", req, cb);
    }
    /**
     * 创建凭证持有人的可验证表达
     */
    async CreatePresentation(req, cb) {
        return this.request("CreatePresentation", req, cb);
    }
    /**
     * 自动生成公私钥对托管在DID平台，并注册DID标识
     */
    async CreateTDidByHost(req, cb) {
        return this.request("CreateTDidByHost", req, cb);
    }
    /**
     * 通过业务层绑定的对象ID获取DID标识
     */
    async GetTDidByObjectId(req, cb) {
        return this.request("GetTDidByObjectId", req, cb);
    }
    /**
     * 使用导入的公钥文件注册DID标识
     */
    async CreateTDidByPubKey(req, cb) {
        return this.request("CreateTDidByPubKey", req, cb);
    }
    /**
     * 验证可验证表达的内容
     */
    async VerifyPresentation(req, cb) {
        return this.request("VerifyPresentation", req, cb);
    }
    /**
     * 根据披露策略创建选择性披露凭证
     */
    async CreateDisclosedCredential(req, cb) {
        return this.request("CreateDisclosedCredential", req, cb);
    }
    /**
     * 获取某个应用关键指标统计数据
     */
    async GetAppSummary(req, cb) {
        return this.request("GetAppSummary", req, cb);
    }
    /**
     * 获取DID标识的文档
     */
    async GetTDidDocument(req, cb) {
        return this.request("GetTDidDocument", req, cb);
    }
    /**
     * 查询DID标识的认证公钥
     */
    async GetTDidPubKey(req, cb) {
        return this.request("GetTDidPubKey", req, cb);
    }
    /**
     * 设置DID文档的自定义属性
     */
    async SetTDidAttribute(req, cb) {
        return this.request("SetTDidAttribute", req, cb);
    }
    /**
     * 更新凭证的链上状态
     */
    async UpdateCredentialState(req, cb) {
        return this.request("UpdateCredentialState", req, cb);
    }
    /**
     * 更新DID标识的禁用状态
     */
    async DeactivateTDid(req, cb) {
        return this.request("DeactivateTDid", req, cb);
    }
    /**
     * 获取凭证链上状态信息
     */
    async GetCredentialState(req, cb) {
        return this.request("GetCredentialState", req, cb);
    }
    /**
     * 颁发可验证凭证
     */
    async IssueCredential(req, cb) {
        return this.request("IssueCredential", req, cb);
    }
}
exports.Client = Client;
