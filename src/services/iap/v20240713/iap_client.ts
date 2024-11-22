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
import { AbstractClient } from "../../../common/abstract_client"
import { ClientConfig } from "../../../common/interface"
import {
  ModifyIAPLoginSessionDurationRequest,
  DescribeIAPLoginSessionDurationRequest,
  CreateIAPUserOIDCConfigResponse,
  CreateIAPUserOIDCConfigRequest,
  DisableIAPUserSSOResponse,
  DescribeIAPUserOIDCConfigRequest,
  ModifyIAPLoginSessionDurationResponse,
  DescribeIAPUserOIDCConfigResponse,
  UpdateIAPUserOIDCConfigResponse,
  UpdateIAPUserOIDCConfigRequest,
  DisableIAPUserSSORequest,
  DescribeIAPLoginSessionDurationResponse,
} from "./iap_models"

/**
 * iap client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("iap.tencentcloudapi.com", "2024-07-13", clientConfig)
  }

  /**
   * 修改用户OIDC配置
   */
  async UpdateIAPUserOIDCConfig(
    req: UpdateIAPUserOIDCConfigRequest,
    cb?: (error: string, rep: UpdateIAPUserOIDCConfigResponse) => void
  ): Promise<UpdateIAPUserOIDCConfigResponse> {
    return this.request("UpdateIAPUserOIDCConfig", req, cb)
  }

  /**
   * 查询登录会话时长
   */
  async DescribeIAPLoginSessionDuration(
    req?: DescribeIAPLoginSessionDurationRequest,
    cb?: (error: string, rep: DescribeIAPLoginSessionDurationResponse) => void
  ): Promise<DescribeIAPLoginSessionDurationResponse> {
    return this.request("DescribeIAPLoginSessionDuration", req, cb)
  }

  /**
   * 查询用户OIDC配置
   */
  async DescribeIAPUserOIDCConfig(
    req?: DescribeIAPUserOIDCConfigRequest,
    cb?: (error: string, rep: DescribeIAPUserOIDCConfigResponse) => void
  ): Promise<DescribeIAPUserOIDCConfigResponse> {
    return this.request("DescribeIAPUserOIDCConfig", req, cb)
  }

  /**
   * 禁用用户SSO
   */
  async DisableIAPUserSSO(
    req?: DisableIAPUserSSORequest,
    cb?: (error: string, rep: DisableIAPUserSSOResponse) => void
  ): Promise<DisableIAPUserSSOResponse> {
    return this.request("DisableIAPUserSSO", req, cb)
  }

  /**
   * 创建用户OIDC配置。只能创建一个用户OIDC身份提供商，并且创建用户OIDC配置之后会自动关闭用户SAML SSO身份提供商。
   */
  async CreateIAPUserOIDCConfig(
    req: CreateIAPUserOIDCConfigRequest,
    cb?: (error: string, rep: CreateIAPUserOIDCConfigResponse) => void
  ): Promise<CreateIAPUserOIDCConfigResponse> {
    return this.request("CreateIAPUserOIDCConfig", req, cb)
  }

  /**
   * 修改登录会话时长
   */
  async ModifyIAPLoginSessionDuration(
    req: ModifyIAPLoginSessionDurationRequest,
    cb?: (error: string, rep: ModifyIAPLoginSessionDurationResponse) => void
  ): Promise<ModifyIAPLoginSessionDurationResponse> {
    return this.request("ModifyIAPLoginSessionDuration", req, cb)
  }
}
