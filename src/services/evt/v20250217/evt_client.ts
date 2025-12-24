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
  CreateRoleUserRequest,
  CompleteApprovalRequest,
  DeleteRoleUserRequest,
  UserAttribute,
  DeleteRoleUserResponse,
  CreateRoleUserResponse,
  CompleteApprovalResponse,
} from "./evt_models"

/**
 * evt client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("evt.tencentcloudapi.com", "2025-02-17", clientConfig)
  }

  /**
   * 删除自定义用户
   */
  async DeleteRoleUser(
    req: DeleteRoleUserRequest,
    cb?: (error: string, rep: DeleteRoleUserResponse) => void
  ): Promise<DeleteRoleUserResponse> {
    return this.request("DeleteRoleUser", req, cb)
  }

  /**
   * 创建人员
   */
  async CreateRoleUser(
    req: CreateRoleUserRequest,
    cb?: (error: string, rep: CreateRoleUserResponse) => void
  ): Promise<CreateRoleUserResponse> {
    return this.request("CreateRoleUser", req, cb)
  }

  /**
   * 执行审批
   */
  async CompleteApproval(
    req: CompleteApprovalRequest,
    cb?: (error: string, rep: CompleteApprovalResponse) => void
  ): Promise<CompleteApprovalResponse> {
    return this.request("CompleteApproval", req, cb)
  }
}
