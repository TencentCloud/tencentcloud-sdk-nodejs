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

/**
 * MoveOrganizationMembersToNode请求参数结构体
 */
export interface MoveOrganizationMembersToNodeRequest {
  /**
   * 组织单元ID
   */
  NodeId: number

  /**
   * 成员UIN列表
   */
  Uins: Array<number>
}

/**
 * GetOrganization请求参数结构体
 */
export type GetOrganizationRequest = null

/**
 * ListOrganizationMembers请求参数结构体
 */
export interface ListOrganizationMembersRequest {
  /**
   * 偏移量
   */
  Offset?: number

  /**
   * 限制数目
   */
  Limit?: number
}

/**
 * DeleteOrganizationMemberFromNode请求参数结构体
 */
export interface DeleteOrganizationMemberFromNodeRequest {
  /**
   * 被删除成员UIN
   */
  MemberUin: number

  /**
   * 组织单元ID
   */
  NodeId: number
}

/**
 * 企业组织成员
 */
export interface OrgMember {
  /**
   * UIN
   */
  Uin: number

  /**
   * 名称
   */
  Name: string

  /**
   * 备注
   */
  Remark: string

  /**
   * 加入时间
   */
  JoinTime: string
}

/**
 * UpdateOrganizationNode返回参数结构体
 */
export interface UpdateOrganizationNodeResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * GetOrganizationMember返回参数结构体
 */
export interface GetOrganizationMemberResponse {
  /**
   * 组织成员UIN
   */
  Uin?: number

  /**
   * 组织成员名称
   */
  Name?: string

  /**
   * 备注
   */
  Remark?: string

  /**
   * 加入时间
   */
  JoinTime?: string

  /**
   * 组织单元ID
   */
  NodeId?: number

  /**
   * 组织单元名称
   */
  NodeName?: string

  /**
   * 父组织单元ID
   */
  ParentNodeId?: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateOrganization请求参数结构体
 */
export interface CreateOrganizationRequest {
  /**
   * 组织类型（目前固定为1）
   */
  OrgType: number
}

/**
 * DeleteOrganization请求参数结构体
 */
export type DeleteOrganizationRequest = null

/**
 * QuitOrganization返回参数结构体
 */
export interface QuitOrganizationResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * UpdateOrganizationMember返回参数结构体
 */
export interface UpdateOrganizationMemberResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteOrganizationMembers请求参数结构体
 */
export interface DeleteOrganizationMembersRequest {
  /**
   * 被删除成员的UIN列表
   */
  Uins: Array<number>
}

/**
 * CreateOrganization返回参数结构体
 */
export interface CreateOrganizationResponse {
  /**
   * 企业组织ID
   */
  OrgId?: number

  /**
   * 创建者昵称
   */
  Nickname?: string

  /**
   * 创建者邮箱
   */
  Mail?: string

  /**
   * 组织类型
   */
  OrgType?: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteOrganizationNodes请求参数结构体
 */
export interface DeleteOrganizationNodesRequest {
  /**
   * 组织单元ID列表
   */
  NodeIds: Array<number>
}

/**
 * AddOrganizationNode返回参数结构体
 */
export interface AddOrganizationNodeResponse {
  /**
   * 组织单元ID
   */
  NodeId?: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ListOrganizationInvitations返回参数结构体
 */
export interface ListOrganizationInvitationsResponse {
  /**
   * 邀请信息列表
   */
  Invitations?: Array<OrgInvitation>

  /**
   * 总数目
   */
  TotalCount?: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * AcceptOrganizationInvitation请求参数结构体
 */
export interface AcceptOrganizationInvitationRequest {
  /**
   * 邀请ID
   */
  Id: number
}

/**
 * ListOrganizationNodeMembers返回参数结构体
 */
export interface ListOrganizationNodeMembersResponse {
  /**
   * 总数目
   */
  TotalCount?: number

  /**
   * 成员列表
   */
  Members?: Array<OrgMember>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * GetOrganizationMember请求参数结构体
 */
export interface GetOrganizationMemberRequest {
  /**
   * 组织成员UIN
   */
  MemberUin: number
}

/**
 * DenyOrganizationInvitation返回参数结构体
 */
export interface DenyOrganizationInvitationResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * SendOrganizationInvitation返回参数结构体
 */
export interface SendOrganizationInvitationResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 企业组织邀请
 */
export interface OrgInvitation {
  /**
   * 邀请ID
   */
  Id: number

  /**
   * 被邀请UIN
   */
  Uin: number

  /**
   * 创建者UIN
   */
  HostUin: number

  /**
   * 创建者名称
   */
  HostName: string

  /**
   * 创建者邮箱
   */
  HostMail: string

  /**
   * 邀请状态。-1：已过期，0：正常，1：已接受，2：已失效，3：已取消
   */
  Status: number

  /**
   * 名称
   */
  Name: string

  /**
   * 备注
   */
  Remark: string

  /**
   * 企业组织类型
   */
  OrgType: number

  /**
   * 邀请时间
   */
  InviteTime: string

  /**
   * 过期时间
   */
  ExpireTime: string
}

/**
 * UpdateOrganizationMember请求参数结构体
 */
export interface UpdateOrganizationMemberRequest {
  /**
   * 成员UIN
   */
  MemberUin: number

  /**
   * 名称
   */
  Name?: string

  /**
   * 备注
   */
  Remark?: string
}

/**
 * QuitOrganization请求参数结构体
 */
export interface QuitOrganizationRequest {
  /**
   * 企业组织ID
   */
  OrgId: number
}

/**
 * ListOrganizationInvitations请求参数结构体
 */
export interface ListOrganizationInvitationsRequest {
  /**
   * 是否被邀请。1：被邀请，0：发出的邀请
   */
  Invited: number

  /**
   * 偏移量
   */
  Offset?: number

  /**
   * 限制数目
   */
  Limit?: number
}

/**
 * AddOrganizationNode请求参数结构体
 */
export interface AddOrganizationNodeRequest {
  /**
   * 父组织单元ID
   */
  ParentNodeId: number

  /**
   * 组织单元名字
   */
  Name: string
}

/**
 * ListOrganizationNodeMembers请求参数结构体
 */
export interface ListOrganizationNodeMembersRequest {
  /**
   * 企业组织单元ID
   */
  NodeId: number

  /**
   * 偏移量
   */
  Offset?: number

  /**
   * 限制数目
   */
  Limit?: number
}

/**
 * UpdateOrganizationNode请求参数结构体
 */
export interface UpdateOrganizationNodeRequest {
  /**
   * 企业组织单元ID
   */
  NodeId: number

  /**
   * 名称
   */
  Name?: string

  /**
   * 父单元ID
   */
  ParentNodeId?: number
}

/**
 * CancelOrganizationInvitation请求参数结构体
 */
export interface CancelOrganizationInvitationRequest {
  /**
   * 邀请ID
   */
  Id: number
}

/**
 * DeleteOrganizationMemberFromNode返回参数结构体
 */
export interface DeleteOrganizationMemberFromNodeResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DenyOrganizationInvitation请求参数结构体
 */
export interface DenyOrganizationInvitationRequest {
  /**
   * 邀请ID
   */
  Id: number
}

/**
 * DeleteOrganizationNodes返回参数结构体
 */
export interface DeleteOrganizationNodesResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteOrganization返回参数结构体
 */
export interface DeleteOrganizationResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CancelOrganizationInvitation返回参数结构体
 */
export interface CancelOrganizationInvitationResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * AcceptOrganizationInvitation返回参数结构体
 */
export interface AcceptOrganizationInvitationResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ListOrganizationNodes请求参数结构体
 */
export type ListOrganizationNodesRequest = null

/**
 * SendOrganizationInvitation请求参数结构体
 */
export interface SendOrganizationInvitationRequest {
  /**
   * 被邀请账户UIN
   */
  InviteUin: number

  /**
   * 名称
   */
  Name: string

  /**
   * 备注
   */
  Remark: string
}

/**
 * DeleteOrganizationMembers返回参数结构体
 */
export interface DeleteOrganizationMembersResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * GetOrganization返回参数结构体
 */
export interface GetOrganizationResponse {
  /**
   * 企业组织ID
   */
  OrgId?: number

  /**
   * 创建者UIN
   */
  HostUin?: number

  /**
   * 创建者昵称
   */
  Nickname?: string

  /**
   * 创建者邮箱
   */
  Mail?: string

  /**
   * 企业组织类型
   */
  OrgType?: number

  /**
   * 是否为空
   */
  IsEmpty?: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ListOrganizationMembers返回参数结构体
 */
export interface ListOrganizationMembersResponse {
  /**
   * 成员列表
   */
  Members?: Array<OrgMember>

  /**
   * 总数目
   */
  TotalCount?: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ListOrganizationNodes返回参数结构体
 */
export interface ListOrganizationNodesResponse {
  /**
   * 企业组织单元列表
   */
  Nodes?: Array<OrgNode>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * MoveOrganizationMembersToNode返回参数结构体
 */
export interface MoveOrganizationMembersToNodeResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 企业组织单元
 */
export interface OrgNode {
  /**
   * 组织单元ID
   */
  NodeId: number

  /**
   * 名称
   */
  Name: string

  /**
   * 父单元ID
   */
  ParentNodeId: number

  /**
   * 成员数量
   */
  MemberCount: number
}
