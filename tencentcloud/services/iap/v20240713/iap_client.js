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
 * iap client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(clientConfig) {
        super("iap.tencentcloudapi.com", "2024-07-13", clientConfig);
    }
    /**
     * 修改用户OIDC配置
     */
    async UpdateIAPUserOIDCConfig(req, cb) {
        return this.request("UpdateIAPUserOIDCConfig", req, cb);
    }
    /**
     * 查询登录会话时长
     */
    async DescribeIAPLoginSessionDuration(req, cb) {
        return this.request("DescribeIAPLoginSessionDuration", req, cb);
    }
    /**
     * 查询用户OIDC配置
     */
    async DescribeIAPUserOIDCConfig(req, cb) {
        return this.request("DescribeIAPUserOIDCConfig", req, cb);
    }
    /**
     * 禁用用户SSO
     */
    async DisableIAPUserSSO(req, cb) {
        return this.request("DisableIAPUserSSO", req, cb);
    }
    /**
     * 创建用户OIDC配置。只能创建一个用户OIDC身份提供商，并且创建用户OIDC配置之后会自动关闭用户SAML SSO身份提供商。
     */
    async CreateIAPUserOIDCConfig(req, cb) {
        return this.request("CreateIAPUserOIDCConfig", req, cb);
    }
    /**
     * 修改登录会话时长
     */
    async ModifyIAPLoginSessionDuration(req, cb) {
        return this.request("ModifyIAPLoginSessionDuration", req, cb);
    }
}
exports.Client = Client;
