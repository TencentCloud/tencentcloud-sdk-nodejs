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
 * sts client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(clientConfig) {
        super("sts.tencentcloudapi.com", "2018-08-13", clientConfig);
    }
    /**
     * 获取联合身份临时访问凭证
     */
    async GetFederationToken(req, cb) {
        return this.request("GetFederationToken", req, cb);
    }
    /**
     * 拉取API密钥列表
     */
    async QueryApiKey(req, cb) {
        return this.request("QueryApiKey", req, cb);
    }
    /**
     * 申请扮演角色
     */
    async AssumeRole(req, cb) {
        return this.request("AssumeRole", req, cb);
    }
    /**
     * 申请OIDC角色临时密钥
     */
    async AssumeRoleWithWebIdentity(req, cb) {
        return this.request("AssumeRoleWithWebIdentity", req, cb);
    }
    /**
     * 获取当前调用者的身份信息。
接口支持主账号，子账号长期密钥以及AssumeRole，GetFederationToken生成的临时凭据的身份获取。
     */
    async GetCallerIdentity(req, cb) {
        return this.request("GetCallerIdentity", req, cb);
    }
    /**
     * 本接口（AssumeRoleWithSAML）用于根据 SAML 断言申请角色临时凭证。
     */
    async AssumeRoleWithSAML(req, cb) {
        return this.request("AssumeRoleWithSAML", req, cb);
    }
}
exports.Client = Client;
