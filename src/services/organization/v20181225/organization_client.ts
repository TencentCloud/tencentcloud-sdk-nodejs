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
  MoveOrganizationMembersToNodeRequest,
  GetOrganizationRequest,
  ListOrganizationMembersRequest,
  DeleteOrganizationMemberFromNodeRequest,
  OrgMember,
  UpdateOrganizationNodeResponse,
  GetOrganizationMemberResponse,
  CreateOrganizationRequest,
  DeleteOrganizationRequest,
  QuitOrganizationResponse,
  UpdateOrganizationMemberResponse,
  DeleteOrganizationMembersRequest,
  CreateOrganizationResponse,
  DeleteOrganizationNodesRequest,
  AddOrganizationNodeResponse,
  ListOrganizationInvitationsResponse,
  AcceptOrganizationInvitationRequest,
  ListOrganizationNodeMembersResponse,
  GetOrganizationMemberRequest,
  DenyOrganizationInvitationResponse,
  SendOrganizationInvitationResponse,
  OrgInvitation,
  UpdateOrganizationMemberRequest,
  QuitOrganizationRequest,
  ListOrganizationInvitationsRequest,
  AddOrganizationNodeRequest,
  ListOrganizationNodeMembersRequest,
  UpdateOrganizationNodeRequest,
  CancelOrganizationInvitationRequest,
  DeleteOrganizationMemberFromNodeResponse,
  DenyOrganizationInvitationRequest,
  DeleteOrganizationNodesResponse,
  DeleteOrganizationResponse,
  CancelOrganizationInvitationResponse,
  AcceptOrganizationInvitationResponse,
  ListOrganizationNodesRequest,
  SendOrganizationInvitationRequest,
  DeleteOrganizationMembersResponse,
  GetOrganizationResponse,
  ListOrganizationMembersResponse,
  ListOrganizationNodesResponse,
  MoveOrganizationMembersToNodeResponse,
  OrgNode,
} from "./organization_models"

/**
 * organization client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("organization.tencentcloudapi.com", "2018-12-25", clientConfig)
  }

  /**
   * 拒绝企业组织邀请
   */
  async DenyOrganizationInvitation(
    req: DenyOrganizationInvitationRequest,
    cb?: (error: string, rep: DenyOrganizationInvitationResponse) => void
  ): Promise<DenyOrganizationInvitationResponse> {
    return this.request("DenyOrganizationInvitation", req, cb)
  }

  /**
   * 获取邀请信息列表
   */
  async ListOrganizationInvitations(
    req: ListOrganizationInvitationsRequest,
    cb?: (error: string, rep: ListOrganizationInvitationsResponse) => void
  ): Promise<ListOrganizationInvitationsResponse> {
    return this.request("ListOrganizationInvitations", req, cb)
  }

  /**
   * 更新企业组织单元
   */
  async UpdateOrganizationNode(
    req: UpdateOrganizationNodeRequest,
    cb?: (error: string, rep: UpdateOrganizationNodeResponse) => void
  ): Promise<UpdateOrganizationNodeResponse> {
    return this.request("UpdateOrganizationNode", req, cb)
  }

  /**
   * 接受加入企业组织邀请
   */
  async AcceptOrganizationInvitation(
    req: AcceptOrganizationInvitationRequest,
    cb?: (error: string, rep: AcceptOrganizationInvitationResponse) => void
  ): Promise<AcceptOrganizationInvitationResponse> {
    return this.request("AcceptOrganizationInvitation", req, cb)
  }

  /**
   * 获取企业组织成员
   */
  async GetOrganizationMember(
    req: GetOrganizationMemberRequest,
    cb?: (error: string, rep: GetOrganizationMemberResponse) => void
  ): Promise<GetOrganizationMemberResponse> {
    return this.request("GetOrganizationMember", req, cb)
  }

  /**
   * 获取企业组织信息
   */
  async GetOrganization(
    req?: GetOrganizationRequest,
    cb?: (error: string, rep: GetOrganizationResponse) => void
  ): Promise<GetOrganizationResponse> {
    return this.request("GetOrganization", req, cb)
  }

  /**
   * 获取企业组织单元列表
   */
  async ListOrganizationNodes(
    req?: ListOrganizationNodesRequest,
    cb?: (error: string, rep: ListOrganizationNodesResponse) => void
  ): Promise<ListOrganizationNodesResponse> {
    return this.request("ListOrganizationNodes", req, cb)
  }

  /**
   * 更新企业成员信息
   */
  async UpdateOrganizationMember(
    req: UpdateOrganizationMemberRequest,
    cb?: (error: string, rep: UpdateOrganizationMemberResponse) => void
  ): Promise<UpdateOrganizationMemberResponse> {
    return this.request("UpdateOrganizationMember", req, cb)
  }

  /**
   * 退出企业组织
   */
  async QuitOrganization(
    req: QuitOrganizationRequest,
    cb?: (error: string, rep: QuitOrganizationResponse) => void
  ): Promise<QuitOrganizationResponse> {
    return this.request("QuitOrganization", req, cb)
  }

  /**
   * 批量删除企业组织单元
   */
  async DeleteOrganizationNodes(
    req: DeleteOrganizationNodesRequest,
    cb?: (error: string, rep: DeleteOrganizationNodesResponse) => void
  ): Promise<DeleteOrganizationNodesResponse> {
    return this.request("DeleteOrganizationNodes", req, cb)
  }

  /**
   * 获取企业组织成员列表
   */
  async ListOrganizationMembers(
    req: ListOrganizationMembersRequest,
    cb?: (error: string, rep: ListOrganizationMembersResponse) => void
  ): Promise<ListOrganizationMembersResponse> {
    return this.request("ListOrganizationMembers", req, cb)
  }

  /**
   * 删除企业组织成员
   */
  async DeleteOrganizationMemberFromNode(
    req: DeleteOrganizationMemberFromNodeRequest,
    cb?: (error: string, rep: DeleteOrganizationMemberFromNodeResponse) => void
  ): Promise<DeleteOrganizationMemberFromNodeResponse> {
    return this.request("DeleteOrganizationMemberFromNode", req, cb)
  }

  /**
   * 添加企业组织单元
   */
  async AddOrganizationNode(
    req: AddOrganizationNodeRequest,
    cb?: (error: string, rep: AddOrganizationNodeResponse) => void
  ): Promise<AddOrganizationNodeResponse> {
    return this.request("AddOrganizationNode", req, cb)
  }

  /**
   * 发送企业组织邀请
   */
  async SendOrganizationInvitation(
    req: SendOrganizationInvitationRequest,
    cb?: (error: string, rep: SendOrganizationInvitationResponse) => void
  ): Promise<SendOrganizationInvitationResponse> {
    return this.request("SendOrganizationInvitation", req, cb)
  }

  /**
   * 取消企业组织邀请
   */
  async CancelOrganizationInvitation(
    req: CancelOrganizationInvitationRequest,
    cb?: (error: string, rep: CancelOrganizationInvitationResponse) => void
  ): Promise<CancelOrganizationInvitationResponse> {
    return this.request("CancelOrganizationInvitation", req, cb)
  }

  /**
   * 删除企业组织
   */
  async DeleteOrganization(
    req?: DeleteOrganizationRequest,
    cb?: (error: string, rep: DeleteOrganizationResponse) => void
  ): Promise<DeleteOrganizationResponse> {
    return this.request("DeleteOrganization", req, cb)
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
   * 获取企业组织单元成员列表
   */
  async ListOrganizationNodeMembers(
    req: ListOrganizationNodeMembersRequest,
    cb?: (error: string, rep: ListOrganizationNodeMembersResponse) => void
  ): Promise<ListOrganizationNodeMembersResponse> {
    return this.request("ListOrganizationNodeMembers", req, cb)
  }

  /**
   * 创建企业组织
   */
  async CreateOrganization(
    req: CreateOrganizationRequest,
    cb?: (error: string, rep: CreateOrganizationResponse) => void
  ): Promise<CreateOrganizationResponse> {
    return this.request("CreateOrganization", req, cb)
  }

  /**
   * 移动成员到指定企业组织单元
   */
  async MoveOrganizationMembersToNode(
    req: MoveOrganizationMembersToNodeRequest,
    cb?: (error: string, rep: MoveOrganizationMembersToNodeResponse) => void
  ): Promise<MoveOrganizationMembersToNodeResponse> {
    return this.request("MoveOrganizationMembersToNode", req, cb)
  }
}
