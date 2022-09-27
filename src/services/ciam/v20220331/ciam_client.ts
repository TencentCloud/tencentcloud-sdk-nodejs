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
  UpdateUserRequest,
  DescribeUserByIdRequest,
  ListUserRequest,
  ResetPasswordRequest,
  ErrorDetails,
  DescribeUserRequest,
  DeleteUsersRequest,
  ImportUser,
  UpdateUserStatusResponse,
  FailedUsers,
  ListUserByPropertyRequest,
  CreateUserResponse,
  Filter,
  SetPasswordResponse,
  ListUserByPropertyResponse,
  ListJobsRequest,
  DescribeUserByIdResponse,
  Job,
  CreateFileExportUserJobRequest,
  User,
  Sort,
  Pageable,
  ResetPasswordResponse,
  UpdateUserResponse,
  SetPasswordRequest,
  SaltLocation,
  UpdateUserStatusRequest,
  ListJobsResponse,
  ExportPropertyMap,
  LinkAccountResponse,
  CreateUserRequest,
  Salt,
  DeleteUsersResponse,
  CreateApiImportUserJobRequest,
  CreateFileExportUserJobResponse,
  CreateApiImportUserJobResponse,
  LinkAccountRequest,
  ListLogMessageByConditionRequest,
  SaltLocationRule,
  MemberMap,
  QueryUserFilter,
  DescribeUserResponse,
  ListUserResponse,
  LogMessage,
  ListLogMessageByConditionResponse,
} from "./ciam_models"

/**
 * ciam client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("ciam.tencentcloudapi.com", "2022-03-31", clientConfig)
  }

  /**
   * 批量删除用户
   */
  async DeleteUsers(
    req: DeleteUsersRequest,
    cb?: (error: string, rep: DeleteUsersResponse) => void
  ): Promise<DeleteUsersResponse> {
    return this.request("DeleteUsers", req, cb)
  }

  /**
   * 查询任务详情
   */
  async ListJobs(
    req: ListJobsRequest,
    cb?: (error: string, rep: ListJobsResponse) => void
  ): Promise<ListJobsResponse> {
    return this.request("ListJobs", req, cb)
  }

  /**
   * 更新用户
   */
  async UpdateUser(
    req: UpdateUserRequest,
    cb?: (error: string, rep: UpdateUserResponse) => void
  ): Promise<UpdateUserResponse> {
    return this.request("UpdateUser", req, cb)
  }

  /**
   * 多条件查询用户信息
   */
  async DescribeUser(
    req: DescribeUserRequest,
    cb?: (error: string, rep: DescribeUserResponse) => void
  ): Promise<DescribeUserResponse> {
    return this.request("DescribeUser", req, cb)
  }

  /**
   * 查询用户列表
   */
  async ListUser(
    req: ListUserRequest,
    cb?: (error: string, rep: ListUserResponse) => void
  ): Promise<ListUserResponse> {
    return this.request("ListUser", req, cb)
  }

  /**
   * 更新用户状态
   */
  async UpdateUserStatus(
    req: UpdateUserStatusRequest,
    cb?: (error: string, rep: UpdateUserStatusResponse) => void
  ): Promise<UpdateUserStatusResponse> {
    return this.request("UpdateUserStatus", req, cb)
  }

  /**
   * 根据属性查询用户列表
   */
  async ListUserByProperty(
    req: ListUserByPropertyRequest,
    cb?: (error: string, rep: ListUserByPropertyResponse) => void
  ): Promise<ListUserByPropertyResponse> {
    return this.request("ListUserByProperty", req, cb)
  }

  /**
   * 查询日志信息
   */
  async ListLogMessageByCondition(
    req: ListLogMessageByConditionRequest,
    cb?: (error: string, rep: ListLogMessageByConditionResponse) => void
  ): Promise<ListLogMessageByConditionResponse> {
    return this.request("ListLogMessageByCondition", req, cb)
  }

  /**
   * 根据ID查询用户信息
   */
  async DescribeUserById(
    req: DescribeUserByIdRequest,
    cb?: (error: string, rep: DescribeUserByIdResponse) => void
  ): Promise<DescribeUserByIdResponse> {
    return this.request("DescribeUserById", req, cb)
  }

  /**
   * 创建用户
   */
  async CreateUser(
    req: CreateUserRequest,
    cb?: (error: string, rep: CreateUserResponse) => void
  ): Promise<CreateUserResponse> {
    return this.request("CreateUser", req, cb)
  }

  /**
   * 设置用户密码
   */
  async SetPassword(
    req: SetPasswordRequest,
    cb?: (error: string, rep: SetPasswordResponse) => void
  ): Promise<SetPasswordResponse> {
    return this.request("SetPassword", req, cb)
  }

  /**
   * 新建文件导出用户任务
   */
  async CreateFileExportUserJob(
    req: CreateFileExportUserJobRequest,
    cb?: (error: string, rep: CreateFileExportUserJobResponse) => void
  ): Promise<CreateFileExportUserJobResponse> {
    return this.request("CreateFileExportUserJob", req, cb)
  }

  /**
   * 新建接口导入用户任务
   */
  async CreateApiImportUserJob(
    req: CreateApiImportUserJobRequest,
    cb?: (error: string, rep: CreateApiImportUserJobResponse) => void
  ): Promise<CreateApiImportUserJobResponse> {
    return this.request("CreateApiImportUserJob", req, cb)
  }

  /**
   * 账号融合
   */
  async LinkAccount(
    req: LinkAccountRequest,
    cb?: (error: string, rep: LinkAccountResponse) => void
  ): Promise<LinkAccountResponse> {
    return this.request("LinkAccount", req, cb)
  }

  /**
   * 重置用户密码
   */
  async ResetPassword(
    req: ResetPasswordRequest,
    cb?: (error: string, rep: ResetPasswordResponse) => void
  ): Promise<ResetPasswordResponse> {
    return this.request("ResetPassword", req, cb)
  }
}
