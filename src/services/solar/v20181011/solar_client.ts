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
  DescribeProjectResponse,
  CheckStaffChUserRequest,
  DescribeResourceTemplateHeadersResponse,
  DeleteProjectRequest,
  ReplenishProjectStockResponse,
  SendWxTouchTaskResponse,
  DescribeCustomersRequest,
  DescribeProjectsRequest,
  ModifyProjectRequest,
  OffLineProjectRequest,
  DescribeSubProjectRequest,
  ExpireFlowRequest,
  CopyActivityChannelRequest,
  CopyActivityChannelResponse,
  DescribeProjectsResponse,
  ReplenishProjectStockRequest,
  ProjectStock,
  DescribeProjectStockResponse,
  CheckStaffChUserResponse,
  DescribeCustomerRequest,
  ProductInfo,
  SubProjectInfo,
  ResourceTemplateHeader,
  CreateSubProjectResponse,
  Filters,
  ProjectInfo,
  DescribeCustomerResponse,
  DescribeCustomersResponse,
  CreateSubProjectRequest,
  ModifyProjectResponse,
  CreateProjectResponse,
  DescribeProjectStockRequest,
  DeleteProjectResponse,
  SendWxTouchTaskRequest,
  DescribeProjectRequest,
  OffLineProjectResponse,
  CustomerInfo,
  ActivityInfo,
  DescribeResourceTemplateHeadersRequest,
  ExpireFlowResponse,
  DescribeSubProjectResponse,
  CreateProjectRequest,
} from "./solar_models"

/**
 * solar client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("solar.tencentcloudapi.com", "2018-10-11", clientConfig)
  }

  /**
   * 子项目详情
   */
  async DescribeSubProject(
    req: DescribeSubProjectRequest,
    cb?: (error: string, rep: DescribeSubProjectResponse) => void
  ): Promise<DescribeSubProjectResponse> {
    return this.request("DescribeSubProject", req, cb)
  }

  /**
   * 项目库存详情
   */
  async DescribeProjectStock(
    req: DescribeProjectStockRequest,
    cb?: (error: string, rep: DescribeProjectStockResponse) => void
  ): Promise<DescribeProjectStockResponse> {
    return this.request("DescribeProjectStock", req, cb)
  }

  /**
   * 项目详情展示
   */
  async DescribeProject(
    req: DescribeProjectRequest,
    cb?: (error: string, rep: DescribeProjectResponse) => void
  ): Promise<DescribeProjectResponse> {
    return this.request("DescribeProject", req, cb)
  }

  /**
   * 素材查询服务号模板的列表（样例）
   */
  async DescribeResourceTemplateHeaders(
    req: DescribeResourceTemplateHeadersRequest,
    cb?: (error: string, rep: DescribeResourceTemplateHeadersResponse) => void
  ): Promise<DescribeResourceTemplateHeadersResponse> {
    return this.request("DescribeResourceTemplateHeaders", req, cb)
  }

  /**
   * 查询客户档案列表
   */
  async DescribeCustomers(
    req: DescribeCustomersRequest,
    cb?: (error: string, rep: DescribeCustomersResponse) => void
  ): Promise<DescribeCustomersResponse> {
    return this.request("DescribeCustomers", req, cb)
  }

  /**
   * 发送企业微信触达任务
   */
  async SendWxTouchTask(
    req: SendWxTouchTaskRequest,
    cb?: (error: string, rep: SendWxTouchTaskResponse) => void
  ): Promise<SendWxTouchTaskResponse> {
    return this.request("SendWxTouchTask", req, cb)
  }

  /**
   * 创建项目
   */
  async CreateProject(
    req: CreateProjectRequest,
    cb?: (error: string, rep: CreateProjectResponse) => void
  ): Promise<CreateProjectResponse> {
    return this.request("CreateProject", req, cb)
  }

  /**
   * 补充子项目库存
   */
  async ReplenishProjectStock(
    req: ReplenishProjectStockRequest,
    cb?: (error: string, rep: ReplenishProjectStockResponse) => void
  ): Promise<ReplenishProjectStockResponse> {
    return this.request("ReplenishProjectStock", req, cb)
  }

  /**
   * 项目列表展示
   */
  async DescribeProjects(
    req: DescribeProjectsRequest,
    cb?: (error: string, rep: DescribeProjectsResponse) => void
  ): Promise<DescribeProjectsResponse> {
    return this.request("DescribeProjects", req, cb)
  }

  /**
   * 下线项目
   */
  async OffLineProject(
    req: OffLineProjectRequest,
    cb?: (error: string, rep: OffLineProjectResponse) => void
  ): Promise<OffLineProjectResponse> {
    return this.request("OffLineProject", req, cb)
  }

  /**
   * 把审批中的工单置为已失效
   */
  async ExpireFlow(
    req: ExpireFlowRequest,
    cb?: (error: string, rep: ExpireFlowResponse) => void
  ): Promise<ExpireFlowResponse> {
    return this.request("ExpireFlow", req, cb)
  }

  /**
   * 删除项目
   */
  async DeleteProject(
    req: DeleteProjectRequest,
    cb?: (error: string, rep: DeleteProjectResponse) => void
  ): Promise<DeleteProjectResponse> {
    return this.request("DeleteProject", req, cb)
  }

  /**
   * 员工渠道更改员工状态
   */
  async CheckStaffChUser(
    req: CheckStaffChUserRequest,
    cb?: (error: string, rep: CheckStaffChUserResponse) => void
  ): Promise<CheckStaffChUserResponse> {
    return this.request("CheckStaffChUser", req, cb)
  }

  /**
   * 客户档案查询客户详情
   */
  async DescribeCustomer(
    req: DescribeCustomerRequest,
    cb?: (error: string, rep: DescribeCustomerResponse) => void
  ): Promise<DescribeCustomerResponse> {
    return this.request("DescribeCustomer", req, cb)
  }

  /**
   * 修改项目
   */
  async ModifyProject(
    req: ModifyProjectRequest,
    cb?: (error: string, rep: ModifyProjectResponse) => void
  ): Promise<ModifyProjectResponse> {
    return this.request("ModifyProject", req, cb)
  }

  /**
   * 创建子项目
   */
  async CreateSubProject(
    req: CreateSubProjectRequest,
    cb?: (error: string, rep: CreateSubProjectResponse) => void
  ): Promise<CreateSubProjectResponse> {
    return this.request("CreateSubProject", req, cb)
  }

  /**
   * 复制活动渠道的策略
   */
  async CopyActivityChannel(
    req: CopyActivityChannelRequest,
    cb?: (error: string, rep: CopyActivityChannelResponse) => void
  ): Promise<CopyActivityChannelResponse> {
    return this.request("CopyActivityChannel", req, cb)
  }
}
