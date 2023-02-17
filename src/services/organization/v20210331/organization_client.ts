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
  DescribeOrganizationAuthNodeResponse,
  OrgPermission,
  BindOrganizationMemberAuthAccountRequest,
  DeleteOrganizationMembersResponse,
  OrgMember,
  DescribeOrganizationMemberAuthIdentitiesRequest,
  CreateOrganizationMemberPolicyRequest,
  DescribeOrganizationRequest,
  DescribeOrganizationNodesRequest,
  BindOrganizationMemberAuthAccountResponse,
  CreateOrganizationMemberResponse,
  MoveOrganizationNodeMembersRequest,
  ListOrganizationIdentityRequest,
  AuthNode,
  MoveOrganizationNodeMembersResponse,
  DeleteOrganizationMembersRequest,
  DescribeOrganizationMemberPoliciesResponse,
  DeleteOrganizationNodesRequest,
  AddOrganizationNodeResponse,
  IdentityPolicy,
  ListOrganizationIdentityResponse,
  DescribeOrganizationNodesResponse,
  DescribeOrganizationMembersResponse,
  CreateOrganizationMemberPolicyResponse,
  CancelOrganizationMemberAuthAccountResponse,
  DescribeOrganizationResponse,
  DescribeOrganizationMemberPoliciesRequest,
  AddOrganizationNodeRequest,
  DescribeOrganizationMemberAuthIdentitiesResponse,
  OrgMemberPolicy,
  DescribeOrganizationAuthNodeRequest,
  UpdateOrganizationNodeResponse,
  DescribeOrganizationMemberAuthAccountsRequest,
  CancelOrganizationMemberAuthAccountRequest,
  DeleteOrganizationNodesResponse,
  DescribeOrganizationMemberAuthAccountsResponse,
  OrgMemberAuthAccount,
  OrgMemberAuthIdentity,
  MemberMainInfo,
  CreateOrganizationMemberRequest,
  OrgIdentity,
  DescribeOrganizationMembersRequest,
  MemberIdentity,
  UpdateOrganizationNodeRequest,
  OrgNode,
} from "./organization_models"

/**
 * organization client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("organization.tencentcloudapi.com", "2021-03-31", clientConfig)
  }

  /**
   * 获取企业组织成员列表
   */
  async DescribeOrganizationMembers(
    req: DescribeOrganizationMembersRequest,
    cb?: (error: string, rep: DescribeOrganizationMembersResponse) => void
  ): Promise<DescribeOrganizationMembersResponse> {
    return this.request("DescribeOrganizationMembers", req, cb)
  }

  /**
   * 移动成员到指定企业组织节点
   */
  async MoveOrganizationNodeMembers(
    req: MoveOrganizationNodeMembersRequest,
    cb?: (error: string, rep: MoveOrganizationNodeMembersResponse) => void
  ): Promise<MoveOrganizationNodeMembersResponse> {
    return this.request("MoveOrganizationNodeMembers", req, cb)
  }

  /**
   * 更新企业组织节点
   */
  async UpdateOrganizationNode(
    req: UpdateOrganizationNodeRequest,
    cb?: (error: string, rep: UpdateOrganizationNodeResponse) => void
  ): Promise<UpdateOrganizationNodeResponse> {
    return this.request("UpdateOrganizationNode", req, cb)
  }

  /**
   * 创建组织成员
   */
  async CreateOrganizationMember(
    req: CreateOrganizationMemberRequest,
    cb?: (error: string, rep: CreateOrganizationMemberResponse) => void
  ): Promise<CreateOrganizationMemberResponse> {
    return this.request("CreateOrganizationMember", req, cb)
  }

  /**
   * 绑定组织成员和组织管理员子账号的授权关系
   */
  async BindOrganizationMemberAuthAccount(
    req: BindOrganizationMemberAuthAccountRequest,
    cb?: (error: string, rep: BindOrganizationMemberAuthAccountResponse) => void
  ): Promise<BindOrganizationMemberAuthAccountResponse> {
    return this.request("BindOrganizationMemberAuthAccount", req, cb)
  }

  /**
   * 获取组织成员被绑定授权关系的子账号列表
   */
  async DescribeOrganizationMemberAuthAccounts(
    req: DescribeOrganizationMemberAuthAccountsRequest,
    cb?: (error: string, rep: DescribeOrganizationMemberAuthAccountsResponse) => void
  ): Promise<DescribeOrganizationMemberAuthAccountsResponse> {
    return this.request("DescribeOrganizationMemberAuthAccounts", req, cb)
  }

  /**
   * 获取已设置管理员的互信主体关系列表
   */
  async DescribeOrganizationAuthNode(
    req: DescribeOrganizationAuthNodeRequest,
    cb?: (error: string, rep: DescribeOrganizationAuthNodeResponse) => void
  ): Promise<DescribeOrganizationAuthNodeResponse> {
    return this.request("DescribeOrganizationAuthNode", req, cb)
  }

  /**
     * 取消组织成员和组织管理员子账号的授权关系

     */
  async CancelOrganizationMemberAuthAccount(
    req: CancelOrganizationMemberAuthAccountRequest,
    cb?: (error: string, rep: CancelOrganizationMemberAuthAccountResponse) => void
  ): Promise<CancelOrganizationMemberAuthAccountResponse> {
    return this.request("CancelOrganizationMemberAuthAccount", req, cb)
  }

  /**
   * 批量删除企业组织节点
   */
  async DeleteOrganizationNodes(
    req: DeleteOrganizationNodesRequest,
    cb?: (error: string, rep: DeleteOrganizationNodesResponse) => void
  ): Promise<DeleteOrganizationNodesResponse> {
    return this.request("DeleteOrganizationNodes", req, cb)
  }

  /**
   * 获取企业组织信息
   */
  async DescribeOrganization(
    req: DescribeOrganizationRequest,
    cb?: (error: string, rep: DescribeOrganizationResponse) => void
  ): Promise<DescribeOrganizationResponse> {
    return this.request("DescribeOrganization", req, cb)
  }

  /**
   * 获取组织节点列表
   */
  async DescribeOrganizationNodes(
    req: DescribeOrganizationNodesRequest,
    cb?: (error: string, rep: DescribeOrganizationNodesResponse) => void
  ): Promise<DescribeOrganizationNodesResponse> {
    return this.request("DescribeOrganizationNodes", req, cb)
  }

  /**
   * 添加企业组织节点
   */
  async AddOrganizationNode(
    req: AddOrganizationNodeRequest,
    cb?: (error: string, rep: AddOrganizationNodeResponse) => void
  ): Promise<AddOrganizationNodeResponse> {
    return this.request("AddOrganizationNode", req, cb)
  }

  /**
   * 获取组织成员的授权策略列表
   */
  async DescribeOrganizationMemberPolicies(
    req: DescribeOrganizationMemberPoliciesRequest,
    cb?: (error: string, rep: DescribeOrganizationMemberPoliciesResponse) => void
  ): Promise<DescribeOrganizationMemberPoliciesResponse> {
    return this.request("DescribeOrganizationMemberPolicies", req, cb)
  }

  /**
   * 创建组织成员访问授权策略
   */
  async CreateOrganizationMemberPolicy(
    req: CreateOrganizationMemberPolicyRequest,
    cb?: (error: string, rep: CreateOrganizationMemberPolicyResponse) => void
  ): Promise<CreateOrganizationMemberPolicyResponse> {
    return this.request("CreateOrganizationMemberPolicy", req, cb)
  }

  /**
   * 获取组织成员可被管理的身份列表
   */
  async DescribeOrganizationMemberAuthIdentities(
    req: DescribeOrganizationMemberAuthIdentitiesRequest,
    cb?: (error: string, rep: DescribeOrganizationMemberAuthIdentitiesResponse) => void
  ): Promise<DescribeOrganizationMemberAuthIdentitiesResponse> {
    return this.request("DescribeOrganizationMemberAuthIdentities", req, cb)
  }

  /**
   * 批量删除企业组织成员
   */
  async DeleteOrganizationMembers(
    req: DeleteOrganizationMembersRequest,
    cb?: (error: string, rep: DeleteOrganizationMembersResponse) => void
  ): Promise<DeleteOrganizationMembersResponse> {
    return this.request("DeleteOrganizationMembers", req, cb)
  }

  /**
   * 获取组织成员访问身份列表
   */
  async ListOrganizationIdentity(
    req: ListOrganizationIdentityRequest,
    cb?: (error: string, rep: ListOrganizationIdentityResponse) => void
  ): Promise<ListOrganizationIdentityResponse> {
    return this.request("ListOrganizationIdentity", req, cb)
  }
}
