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
  CreateRoomRequest,
  SetAppCustomContentRequest,
  CreateSupervisorRequest,
  DescribeRoomResponse,
  RegisterUserRequest,
  LoginOriginIdRequest,
  DescribeUserRequest,
  RegisterUserResponse,
  CreateDocumentResponse,
  LoginUserRequest,
  CreateSupervisorResponse,
  CreateDocumentRequest,
  CreateRoomResponse,
  DescribeUserResponse,
  SetAppCustomContentResponse,
  DescribeRoomRequest,
  LoginOriginIdResponse,
  LoginUserResponse,
  AppCustomContent,
} from "./lcic_models"

/**
 * lcic client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("lcic.tencentcloudapi.com", "2022-08-17", clientConfig)
  }

  /**
   * 创建房间内可以使用的文档。
   */
  async CreateDocument(
    req: CreateDocumentRequest,
    cb?: (error: string, rep: CreateDocumentResponse) => void
  ): Promise<CreateDocumentResponse> {
    return this.request("CreateDocument", req, cb)
  }

  /**
   * 获取用户信息
   */
  async DescribeUser(
    req: DescribeUserRequest,
    cb?: (error: string, rep: DescribeUserResponse) => void
  ): Promise<DescribeUserResponse> {
    return this.request("DescribeUser", req, cb)
  }

  /**
   * 使用源账号登录，源账号为注册时填入的originId
   */
  async LoginOriginId(
    req: LoginOriginIdRequest,
    cb?: (error: string, rep: LoginOriginIdResponse) => void
  ): Promise<LoginOriginIdResponse> {
    return this.request("LoginOriginId", req, cb)
  }

  /**
   * 注册用户
   */
  async RegisterUser(
    req: RegisterUserRequest,
    cb?: (error: string, rep: RegisterUserResponse) => void
  ): Promise<RegisterUserResponse> {
    return this.request("RegisterUser", req, cb)
  }

  /**
   * 登录
   */
  async LoginUser(
    req: LoginUserRequest,
    cb?: (error: string, rep: LoginUserResponse) => void
  ): Promise<LoginUserResponse> {
    return this.request("LoginUser", req, cb)
  }

  /**
   * 创建巡课
   */
  async CreateSupervisor(
    req?: CreateSupervisorRequest,
    cb?: (error: string, rep: CreateSupervisorResponse) => void
  ): Promise<CreateSupervisorResponse> {
    return this.request("CreateSupervisor", req, cb)
  }

  /**
   * 设置应用的自定义内容，包括应用图标，自定义的代码等。如果已存在，则为更新。更新js、css内容后，要生效也需要调用该接口
   */
  async SetAppCustomContent(
    req: SetAppCustomContentRequest,
    cb?: (error: string, rep: SetAppCustomContentResponse) => void
  ): Promise<SetAppCustomContentResponse> {
    return this.request("SetAppCustomContent", req, cb)
  }

  /**
   * 获取房间信息
   */
  async DescribeRoom(
    req: DescribeRoomRequest,
    cb?: (error: string, rep: DescribeRoomResponse) => void
  ): Promise<DescribeRoomResponse> {
    return this.request("DescribeRoom", req, cb)
  }

  /**
   * 创建房间
   */
  async CreateRoom(
    req: CreateRoomRequest,
    cb?: (error: string, rep: CreateRoomResponse) => void
  ): Promise<CreateRoomResponse> {
    return this.request("CreateRoom", req, cb)
  }
}
