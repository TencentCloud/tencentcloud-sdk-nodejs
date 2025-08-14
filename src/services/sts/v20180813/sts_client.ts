/* eslint-disable @typescript-eslint/no-unused-vars */
/*
 * Copyright (c) 2018 Tencent. All Rights Reserved.
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
import { AbstractClient } from "../../../common/abstract_client"
import { ClientConfig } from "../../../common/interface"
import {
  AssumeRoleWithSAMLResponse,
  ApiKey,
  AssumeRoleWithWebIdentityRequest,
  AssumeRoleWithWebIdentityResponse,
  GetFederationTokenResponse,
  QueryApiKeyResponse,
  AssumeRoleResponse,
  GetSessionTokenResponse,
  GetFederationTokenRequest,
  Tag,
  GetCallerIdentityResponse,
  QueryApiKeyRequest,
  GetSessionTokenRequest,
  Credentials,
  AssumeRoleRequest,
  GetCallerIdentityRequest,
  AssumeRoleWithSAMLRequest,
} from "./sts_models"

/**
 * sts client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("sts.tencentcloudapi.com", "2018-08-13", clientConfig)
  }

  /**
     * **使用说明**

1. 返回一组临时身份访问凭证，包含token和获取该身份的临时密钥；

2. 当您需要将当前账号下的部分权限和资源临时委托给第三方（如合作伙伴、外包团队），且希望避免下发永久密钥时，调用此接口；
3. 临时身份的权限为：当前调用账号的权限和输入参数 Policy 权限的交集；
4. 此接口仅支持永久密钥调用。


**典型场景**

1. 代理应用程序集中申请临时访问凭证，下发给企业网络内的其他分布式终端应用。例如：终端应用上传文件到COS。

2. 将指定资源临时委托给第三方代理。例如：申请临时访问凭证，分发给企业外部团队，仅允许查看某个存储桶，有效期结束后权限自动回收。


**最佳实践**
1. 临时访问凭证在有效期内（Expiration）都可以使用，建议在有效期内重复使用，避免业务请求该接口频率达到上限被限频；

2. 授予临时访问凭证权限的CAM策略，建议严格遵循最小权限原则；
3. 建议不要使用主账号永久密钥，对该接口进行调用。
     */
  async GetFederationToken(
    req: GetFederationTokenRequest,
    cb?: (error: string, rep: GetFederationTokenResponse) => void
  ): Promise<GetFederationTokenResponse> {
    return this.request("GetFederationToken", req, cb)
  }

  /**
   * 拉取API密钥列表
   */
  async QueryApiKey(
    req: QueryApiKeyRequest,
    cb?: (error: string, rep: QueryApiKeyResponse) => void
  ): Promise<QueryApiKeyResponse> {
    return this.request("QueryApiKey", req, cb)
  }

  /**
     * **使用说明**

1. 申请扮演某个角色的临时访问凭证，返回临时身份的token和能够扮演该角色的临时密钥；
2. 角色策略组成  
（1）角色载体：指定谁可以扮演该角色；  
（2）角色权限：指定扮演角色后可以执行哪些操作，操作哪些资源。

3. 角色可被扮演的条件  
（1）给该用户绑定包含AssumeRole的策略；  
（2）将该用户配置为角色载体的主体。

4. 此接口可以支持永久密钥或临时密钥调用。


**典型场景**

1. 跨账号授权：主账号A需要操作主账号B的资源。  
例如：A账号下有子用户a，B账号下有角色role b，a可以通过AssumeRole接口扮演b，以角色b身份登录账号B的控制台，并操作资源。

2. 跨服务调用：云上的A服务需要访问或操作B服务的资源。  
例如：为A服务接入一个服务相关角色，用户授权创建角色和策略后，A服务即可调用AssumeRole获取用户的服务相关角色临时密钥，调用B服务接口并访问资源。



**最佳实践**
1. 临时访问凭证在有效期内（Expiration）都可以使用，建议在有效期内重复使用，避免业务请求该接口频率达到上限被限频；
2. 授予临时访问凭证权限的CAM策略，建议严格遵循最小权限原则；
3. 建议不要使用主账号永久密钥，对该接口进行调用。
     */
  async AssumeRole(
    req: AssumeRoleRequest,
    cb?: (error: string, rep: AssumeRoleResponse) => void
  ): Promise<AssumeRoleResponse> {
    return this.request("AssumeRole", req, cb)
  }

  /**
     * 申请OIDC角色临时访问凭证。

注意：当使用签名方法 V3 调用本接口时，请求头无须传入 X-TC-Token, 但 Authorization 需要传入值 SKIP。
     */
  async AssumeRoleWithWebIdentity(
    req: AssumeRoleWithWebIdentityRequest,
    cb?: (error: string, rep: AssumeRoleWithWebIdentityResponse) => void
  ): Promise<AssumeRoleWithWebIdentityResponse> {
    return this.request("AssumeRoleWithWebIdentity", req, cb)
  }

  /**
   * 获取MFA临时证书
   */
  async GetSessionToken(
    req: GetSessionTokenRequest,
    cb?: (error: string, rep: GetSessionTokenResponse) => void
  ): Promise<GetSessionTokenResponse> {
    return this.request("GetSessionToken", req, cb)
  }

  /**
     * 获取当前调用者的身份信息。

接口支持主账号，子账号长期密钥以及AssumeRole，GetFederationToken生成的临时访问凭证身份获取。
     */
  async GetCallerIdentity(
    req?: GetCallerIdentityRequest,
    cb?: (error: string, rep: GetCallerIdentityResponse) => void
  ): Promise<GetCallerIdentityResponse> {
    return this.request("GetCallerIdentity", req, cb)
  }

  /**
     * 本接口（AssumeRoleWithSAML）用于根据 SAML 断言申请角色临时访问凭证。

注意：当使用签名方法 V3 调用本接口时，请求头无须传入 X-TC-Token, 但 Authorization 需要传入值 SKIP。
     */
  async AssumeRoleWithSAML(
    req: AssumeRoleWithSAMLRequest,
    cb?: (error: string, rep: AssumeRoleWithSAMLResponse) => void
  ): Promise<AssumeRoleWithSAMLResponse> {
    return this.request("AssumeRoleWithSAML", req, cb)
  }
}
