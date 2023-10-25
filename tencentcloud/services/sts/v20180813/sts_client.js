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
     * **使用说明**

返回一组临时访问凭证，典型的应用场景是代理应用程序集中申请临时访问凭证，下发给企业网络内其他分布式终端应用，比如终端应用上传文件到COS场景，本接口仅支持永久密钥调用。

**最佳实践**

1. 临时访问凭据在有效期内都可以使用，建议在有效期内重复使用，以避免业务请求速率上升后被限频
2. 授予临时访问凭证权限的CAM策略，建议按权限最小化原则
3. 调用接口的永久密钥，建议不要使用主账号
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
     * 申请扮演角色临时访问凭证。

1、角色策略组成

（1）角色信任策略：指定谁可以扮演该角色；

（2）角色权限策略：指定扮演角色后可以执行哪些操作。


2、角色可扮演条件

（1）给用户绑定允许调用AssumeRole的策略 ；

（2）将用户添加为角色信任策略中的主体。
     */
    async AssumeRole(req, cb) {
        return this.request("AssumeRole", req, cb);
    }
    /**
     * 申请OIDC角色临时访问凭证。

注意：当使用签名方法 V3 调用本接口时，请求头无须传入 X-TC-Token, 但 Authorization 需要传入值 SKIP。
     */
    async AssumeRoleWithWebIdentity(req, cb) {
        return this.request("AssumeRoleWithWebIdentity", req, cb);
    }
    /**
     * 获取当前调用者的身份信息。

接口支持主账号，子账号长期密钥以及AssumeRole，GetFederationToken生成的临时访问凭证身份获取。
     */
    async GetCallerIdentity(req, cb) {
        return this.request("GetCallerIdentity", req, cb);
    }
    /**
     * 本接口（AssumeRoleWithSAML）用于根据 SAML 断言申请角色临时访问凭证。

注意：当使用签名方法 V3 调用本接口时，请求头无须传入 X-TC-Token, 但 Authorization 需要传入值 SKIP。
     */
    async AssumeRoleWithSAML(req, cb) {
        return this.request("AssumeRoleWithSAML", req, cb);
    }
}
exports.Client = Client;
