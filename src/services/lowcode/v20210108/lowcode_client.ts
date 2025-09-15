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
  WedaUser,
  DescribeKnowledgeSetListRequest,
  KnowledgeDocumentSetInfo,
  DeleteKnowledgeDocumentSetRsp,
  UploadKnowledgeDocumentSetRequest,
  UpdateKnowledgeSetResponse,
  DescribeAppsRequest,
  DescribeKnowledgeDocumentSetListResponse,
  DeleteAppBindWxAppResponse,
  DataSourceQueryOption,
  RoleGroup,
  PageQuery,
  CheckDeployAppResponse,
  SearchDocListResponse,
  RelationField,
  CheckDeployAppRequest,
  DescribeKnowledgeDocumentSetListRequest,
  UploadKnowledgeDocumentSetRsp,
  PutWxAppIdToWeAppRequest,
  DocumentQuery,
  Weapp,
  UpdateKnowledgeSetRequest,
  RoleListPage,
  SearchDocInfo,
  DataSourceDetail,
  KnowledgeSet,
  DeployAppRequest,
  KnowledgeSplitterPreprocess,
  DescribeKnowledgeDocumentSetDetailRequest,
  DeployAppResponse,
  DeleteKnowledgeSetRequest,
  AppJobInfo,
  KnowledgeSetRsp,
  DeleteKnowledgeSetResponse,
  DescribeDataSourceListRequest,
  DeleteKnowledgeDocumentSetRequest,
  DescribeResourceRoleListResponse,
  DescribeRelatedUsersResponse,
  QureyKnowledgeDocumentSet,
  DescribeKnowledgeSetListResponse,
  DescribeDataSourceListResponse,
  DescribeAppsResponse,
  DeleteAppBindWxAppRequest,
  UploadKnowledgeDocumentSetResponse,
  DeleteKnowledgeDocumentSetResponse,
  TicketAuthInfo,
  CreateKnowledgeSetRequest,
  DescribeKnowledgeDocumentSetDetailRsp,
  QureyKnowledgeDocumentSetInfo,
  DescribeKnowledgeDocumentSetListRsp,
  KnowledgeDocumentSet,
  DescribeKnowledgeDocumentSetDetailResponse,
  SearchDocListRequest,
  DescribeResourceRoleListRequest,
  DataSourceLinkApp,
  SearchDocRsp,
  DescribeRelatedUsersRequest,
  DataSourceDetailItems,
  OrgResp,
  PutWxAppIdToWeAppResponse,
  CreateKnowledgeSetResponse,
  WedaRole,
} from "./lowcode_models"

/**
 * lowcode client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("lowcode.tencentcloudapi.com", "2021-01-08", clientConfig)
  }

  /**
   * 创建知识库
   */
  async CreateKnowledgeSet(
    req: CreateKnowledgeSetRequest,
    cb?: (error: string, rep: CreateKnowledgeSetResponse) => void
  ): Promise<CreateKnowledgeSetResponse> {
    return this.request("CreateKnowledgeSet", req, cb)
  }

  /**
   * 检查应用发布状态
   */
  async CheckDeployApp(
    req: CheckDeployAppRequest,
    cb?: (error: string, rep: CheckDeployAppResponse) => void
  ): Promise<CheckDeployAppResponse> {
    return this.request("CheckDeployApp", req, cb)
  }

  /**
   * 更新知识库
   */
  async UpdateKnowledgeSet(
    req: UpdateKnowledgeSetRequest,
    cb?: (error: string, rep: UpdateKnowledgeSetResponse) => void
  ): Promise<UpdateKnowledgeSetResponse> {
    return this.request("UpdateKnowledgeSet", req, cb)
  }

  /**
   * 分页获取当前用户的应用列表
   */
  async DescribeApps(
    req: DescribeAppsRequest,
    cb?: (error: string, rep: DescribeAppsResponse) => void
  ): Promise<DescribeAppsResponse> {
    return this.request("DescribeApps", req, cb)
  }

  /**
   * 获取角色关联的用户列表
   */
  async DescribeRelatedUsers(
    req: DescribeRelatedUsersRequest,
    cb?: (error: string, rep: DescribeRelatedUsersResponse) => void
  ): Promise<DescribeRelatedUsersResponse> {
    return this.request("DescribeRelatedUsers", req, cb)
  }

  /**
   * 查询知识库
   */
  async DescribeKnowledgeSetList(
    req: DescribeKnowledgeSetListRequest,
    cb?: (error: string, rep: DescribeKnowledgeSetListResponse) => void
  ): Promise<DescribeKnowledgeSetListResponse> {
    return this.request("DescribeKnowledgeSetList", req, cb)
  }

  /**
   * 知识库文档搜索接口
   */
  async SearchDocList(
    req: SearchDocListRequest,
    cb?: (error: string, rep: SearchDocListResponse) => void
  ): Promise<SearchDocListResponse> {
    return this.request("SearchDocList", req, cb)
  }

  /**
   * 获取数据源详情列表
   */
  async DescribeDataSourceList(
    req: DescribeDataSourceListRequest,
    cb?: (error: string, rep: DescribeDataSourceListResponse) => void
  ): Promise<DescribeDataSourceListResponse> {
    return this.request("DescribeDataSourceList", req, cb)
  }

  /**
   * 接口提供应用绑定微信ID功能。
   */
  async PutWxAppIdToWeApp(
    req: PutWxAppIdToWeAppRequest,
    cb?: (error: string, rep: PutWxAppIdToWeAppResponse) => void
  ): Promise<PutWxAppIdToWeAppResponse> {
    return this.request("PutWxAppIdToWeApp", req, cb)
  }

  /**
   * 删除知识库下文档
   */
  async DeleteKnowledgeDocumentSet(
    req: DeleteKnowledgeDocumentSetRequest,
    cb?: (error: string, rep: DeleteKnowledgeDocumentSetResponse) => void
  ): Promise<DeleteKnowledgeDocumentSetResponse> {
    return this.request("DeleteKnowledgeDocumentSet", req, cb)
  }

  /**
   * 获取知识库下文档详情
   */
  async DescribeKnowledgeDocumentSetDetail(
    req: DescribeKnowledgeDocumentSetDetailRequest,
    cb?: (error: string, rep: DescribeKnowledgeDocumentSetDetailResponse) => void
  ): Promise<DescribeKnowledgeDocumentSetDetailResponse> {
    return this.request("DescribeKnowledgeDocumentSetDetail", req, cb)
  }

  /**
   * 更新知识库
   */
  async UploadKnowledgeDocumentSet(
    req: UploadKnowledgeDocumentSetRequest,
    cb?: (error: string, rep: UploadKnowledgeDocumentSetResponse) => void
  ): Promise<UploadKnowledgeDocumentSetResponse> {
    return this.request("UploadKnowledgeDocumentSet", req, cb)
  }

  /**
   * 删除应用绑定小程序
   */
  async DeleteAppBindWxApp(
    req: DeleteAppBindWxAppRequest,
    cb?: (error: string, rep: DeleteAppBindWxAppResponse) => void
  ): Promise<DeleteAppBindWxAppResponse> {
    return this.request("DeleteAppBindWxApp", req, cb)
  }

  /**
   * 查询知识库下文件集合
   */
  async DescribeKnowledgeDocumentSetList(
    req: DescribeKnowledgeDocumentSetListRequest,
    cb?: (error: string, rep: DescribeKnowledgeDocumentSetListResponse) => void
  ): Promise<DescribeKnowledgeDocumentSetListResponse> {
    return this.request("DescribeKnowledgeDocumentSetList", req, cb)
  }

  /**
   * 发布应用
   */
  async DeployApp(
    req: DeployAppRequest,
    cb?: (error: string, rep: DeployAppResponse) => void
  ): Promise<DeployAppResponse> {
    return this.request("DeployApp", req, cb)
  }

  /**
   * 查询资源关联的角色列表
   */
  async DescribeResourceRoleList(
    req: DescribeResourceRoleListRequest,
    cb?: (error: string, rep: DescribeResourceRoleListResponse) => void
  ): Promise<DescribeResourceRoleListResponse> {
    return this.request("DescribeResourceRoleList", req, cb)
  }

  /**
   * 删除知识库
   */
  async DeleteKnowledgeSet(
    req: DeleteKnowledgeSetRequest,
    cb?: (error: string, rep: DeleteKnowledgeSetResponse) => void
  ): Promise<DeleteKnowledgeSetResponse> {
    return this.request("DeleteKnowledgeSet", req, cb)
  }
}
