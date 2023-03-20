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
 * DescribeOrganizationAuthNode返回参数结构体
 */
export interface DescribeOrganizationAuthNodeResponse {
  /**
      * 总数。
注意：此字段可能返回 null，表示取不到有效值。
      */
  Total?: number

  /**
      * 条目详情。
注意：此字段可能返回 null，表示取不到有效值。
      */
  Items?: Array<AuthNode>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 关系策略权限
 */
export interface OrgPermission {
  /**
   * 权限Id
   */
  Id: number

  /**
   * 权限名
   */
  Name: string
}

/**
 * BindOrganizationMemberAuthAccount请求参数结构体
 */
export interface BindOrganizationMemberAuthAccountRequest {
  /**
   * 成员Uin。
   */
  MemberUin: number

  /**
   * 策略ID。可以调用DescribeOrganizationMemberPolicies获取
   */
  PolicyId: number

  /**
   * 组织管理员子账号Uin列表。最大5个
   */
  OrgSubAccountUins: Array<number>
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
 * 企业组织成员
 */
export interface OrgMember {
  /**
      * 成员Uin
注意：此字段可能返回 null，表示取不到有效值。
      */
  MemberUin: number

  /**
      * 成员名
注意：此字段可能返回 null，表示取不到有效值。
      */
  Name: string

  /**
      * 成员类型，邀请：Invite， 创建：Create
注意：此字段可能返回 null，表示取不到有效值。
      */
  MemberType: string

  /**
      * 关系策略类型
注意：此字段可能返回 null，表示取不到有效值。
      */
  OrgPolicyType: string

  /**
      * 关系策略名
注意：此字段可能返回 null，表示取不到有效值。
      */
  OrgPolicyName: string

  /**
      * 关系策略权限
注意：此字段可能返回 null，表示取不到有效值。
      */
  OrgPermission: Array<OrgPermission>

  /**
      * 所属节点ID
注意：此字段可能返回 null，表示取不到有效值。
      */
  NodeId: number

  /**
      * 所属节点名
注意：此字段可能返回 null，表示取不到有效值。
      */
  NodeName: string

  /**
      * 备注
注意：此字段可能返回 null，表示取不到有效值。
      */
  Remark: string

  /**
      * 创建时间
注意：此字段可能返回 null，表示取不到有效值。
      */
  CreateTime: string

  /**
      * 更新时间
注意：此字段可能返回 null，表示取不到有效值。
      */
  UpdateTime: string

  /**
      * 是否允许成员退出。允许：Allow，不允许：Denied。
注意：此字段可能返回 null，表示取不到有效值。
      */
  IsAllowQuit: string

  /**
      * 代付者Uin
注意：此字段可能返回 null，表示取不到有效值。
      */
  PayUin: string

  /**
      * 代付者名称
注意：此字段可能返回 null，表示取不到有效值。
      */
  PayName: string

  /**
      * 管理身份
注意：此字段可能返回 null，表示取不到有效值。
      */
  OrgIdentity: Array<MemberIdentity>

  /**
      * 安全信息绑定状态  未绑定：Unbound，待激活：Valid，绑定成功：Success，绑定失败：Failed
注意：此字段可能返回 null，表示取不到有效值。
      */
  BindStatus: string

  /**
      * 成员权限状态 已确认：Confirmed ，待确认：UnConfirmed
注意：此字段可能返回 null，表示取不到有效值。
      */
  PermissionStatus: string
}

/**
 * DescribeOrganizationMemberAuthIdentities请求参数结构体
 */
export interface DescribeOrganizationMemberAuthIdentitiesRequest {
  /**
   * 偏移量。取值是limit的整数倍，默认值 : 0
   */
  Offset: number

  /**
   * 限制数目。取值范围：1~50，默认值：10
   */
  Limit: number

  /**
   * 组织成员Uin。
   */
  MemberUin: number
}

/**
 * CreateOrganizationMemberPolicy请求参数结构体
 */
export interface CreateOrganizationMemberPolicyRequest {
  /**
   * 成员Uin。
   */
  MemberUin: number

  /**
   * 策略名。最大长度为128个字符，支持英文字母、数字、符号+=,.@_-
   */
  PolicyName: string

  /**
   * 成员访问身份ID。可以调用DescribeOrganizationMemberAuthIdentities获取
   */
  IdentityId: number

  /**
   * 描述。
   */
  Description?: string
}

/**
 * DescribeOrganization请求参数结构体
 */
export interface DescribeOrganizationRequest {
  /**
   * 国际站：en，国内站：zh
   */
  Lang?: string

  /**
   * 可信服务产品简称。查询是否该可信服务管理员时必须指定
   */
  Product?: string
}

/**
 * DescribeOrganizationNodes请求参数结构体
 */
export interface DescribeOrganizationNodesRequest {
  /**
   * 限制数目。最大50
   */
  Limit: number

  /**
   * 偏移量。
   */
  Offset: number
}

/**
 * BindOrganizationMemberAuthAccount返回参数结构体
 */
export interface BindOrganizationMemberAuthAccountResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateOrganizationMember返回参数结构体
 */
export interface CreateOrganizationMemberResponse {
  /**
      * 成员Uin。
注意：此字段可能返回 null，表示取不到有效值。
      */
  Uin: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * MoveOrganizationNodeMembers请求参数结构体
 */
export interface MoveOrganizationNodeMembersRequest {
  /**
   * 组织节点ID。
   */
  NodeId: number

  /**
   * 成员UIN列表。
   */
  MemberUin: Array<number>
}

/**
 * ListOrganizationIdentity请求参数结构体
 */
export interface ListOrganizationIdentityRequest {
  /**
   * 偏移量。
   */
  Offset: number

  /**
   * 限制数目。最大50
   */
  Limit: number

  /**
   * 名称搜索关键字。
   */
  SearchKey?: string

  /**
   * 身份ID搜索。
   */
  IdentityId?: number
}

/**
 * 互信主体主要信息
 */
export interface AuthNode {
  /**
      * 互信主体关系ID
注意：此字段可能返回 null，表示取不到有效值。
      */
  RelationId: number

  /**
      * 互信主体名称
注意：此字段可能返回 null，表示取不到有效值。
      */
  AuthName: string

  /**
      * 主体管理员
注意：此字段可能返回 null，表示取不到有效值。
      */
  Manager: MemberMainInfo
}

/**
 * MoveOrganizationNodeMembers返回参数结构体
 */
export interface MoveOrganizationNodeMembersResponse {
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
   * 被删除成员的UIN列表。
   */
  MemberUin: Array<number>
}

/**
 * DescribeOrganizationMemberPolicies返回参数结构体
 */
export interface DescribeOrganizationMemberPoliciesResponse {
  /**
      * 列表。
注意：此字段可能返回 null，表示取不到有效值。
      */
  Items: Array<OrgMemberPolicy>

  /**
      * 总数目。
注意：此字段可能返回 null，表示取不到有效值。
      */
  Total: number

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
   * 节点ID列表。
   */
  NodeId: Array<number>
}

/**
 * AddOrganizationNode返回参数结构体
 */
export interface AddOrganizationNodeResponse {
  /**
   * 节点ID。
   */
  NodeId: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 组织身份策略
 */
export interface IdentityPolicy {
  /**
   * 策略ID
   */
  PolicyId: number

  /**
   * 策略名称
   */
  PolicyName: string
}

/**
 * ListOrganizationIdentity返回参数结构体
 */
export interface ListOrganizationIdentityResponse {
  /**
      * 总数。
注意：此字段可能返回 null，表示取不到有效值。
      */
  Total: number

  /**
      * 条目详情。
注意：此字段可能返回 null，表示取不到有效值。
      */
  Items: Array<OrgIdentity>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeOrganizationNodes返回参数结构体
 */
export interface DescribeOrganizationNodesResponse {
  /**
      * 总数。
注意：此字段可能返回 null，表示取不到有效值。
      */
  Total: number

  /**
      * 列表详情。
注意：此字段可能返回 null，表示取不到有效值。
      */
  Items: Array<OrgNode>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeOrganizationMembers返回参数结构体
 */
export interface DescribeOrganizationMembersResponse {
  /**
   * 成员列表。
   */
  Items?: Array<OrgMember>

  /**
   * 总数目。
   */
  Total?: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateOrganizationMemberPolicy返回参数结构体
 */
export interface CreateOrganizationMemberPolicyResponse {
  /**
      * 策略ID。
注意：此字段可能返回 null，表示取不到有效值。
      */
  PolicyId: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CancelOrganizationMemberAuthAccount返回参数结构体
 */
export interface CancelOrganizationMemberAuthAccountResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeOrganization返回参数结构体
 */
export interface DescribeOrganizationResponse {
  /**
      * 企业组织ID。
注意：此字段可能返回 null，表示取不到有效值。
      */
  OrgId: number

  /**
      * 创建者UIN。
注意：此字段可能返回 null，表示取不到有效值。
      */
  HostUin: number

  /**
      * 创建者昵称。
注意：此字段可能返回 null，表示取不到有效值。
      */
  NickName: string

  /**
      * 企业组织类型。
注意：此字段可能返回 null，表示取不到有效值。
      */
  OrgType: number

  /**
      * 是否组织管理员。是：true ，否：false
注意：此字段可能返回 null，表示取不到有效值。
      */
  IsManager: boolean

  /**
      * 策略类型。财务管理：Financial
注意：此字段可能返回 null，表示取不到有效值。
      */
  OrgPolicyType: string

  /**
      * 策略名。
注意：此字段可能返回 null，表示取不到有效值。
      */
  OrgPolicyName: string

  /**
      * 成员财务权限列表。
注意：此字段可能返回 null，表示取不到有效值。
      */
  OrgPermission: Array<OrgPermission>

  /**
      * 组织根节点ID。
注意：此字段可能返回 null，表示取不到有效值。
      */
  RootNodeId: number

  /**
      * 组织创建时间。
注意：此字段可能返回 null，表示取不到有效值。
      */
  CreateTime: string

  /**
      * 成员加入时间。
注意：此字段可能返回 null，表示取不到有效值。
      */
  JoinTime: string

  /**
      * 成员是否允许退出。允许：Allow，不允许：Denied
注意：此字段可能返回 null，表示取不到有效值。
      */
  IsAllowQuit: string

  /**
      * 代付者Uin。
注意：此字段可能返回 null，表示取不到有效值。
      */
  PayUin: string

  /**
      * 代付者名称。
注意：此字段可能返回 null，表示取不到有效值。
      */
  PayName: string

  /**
      * 是否可信服务管理员。是：true，否：false
注意：此字段可能返回 null，表示取不到有效值。
      */
  IsAssignManager: boolean

  /**
      * 是否实名主体管理员。是：true，否：false
注意：此字段可能返回 null，表示取不到有效值。
      */
  IsAuthManager: boolean

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeOrganizationMemberPolicies请求参数结构体
 */
export interface DescribeOrganizationMemberPoliciesRequest {
  /**
   * 偏移量。
   */
  Offset: number

  /**
   * 限制数目。最大50
   */
  Limit: number

  /**
   * 成员Uin。
   */
  MemberUin: number

  /**
   * 搜索关键字。可用于策略名或描述搜索
   */
  SearchKey?: string
}

/**
 * AddOrganizationNode请求参数结构体
 */
export interface AddOrganizationNodeRequest {
  /**
   * 父节点ID。可以调用DescribeOrganizationNodes获取
   */
  ParentNodeId: number

  /**
   * 节点名称。最大长度为40个字符，支持英文字母、数字、汉字、符号+@、&._[]-
   */
  Name: string

  /**
   * 备注。
   */
  Remark?: string
}

/**
 * DescribeOrganizationMemberAuthIdentities返回参数结构体
 */
export interface DescribeOrganizationMemberAuthIdentitiesResponse {
  /**
      * 授权身份列表。
注意：此字段可能返回 null，表示取不到有效值。
      */
  Items?: Array<OrgMemberAuthIdentity>

  /**
      * 总数目。
注意：此字段可能返回 null，表示取不到有效值。
      */
  Total?: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 组织成员被授权的策略
 */
export interface OrgMemberPolicy {
  /**
      * 策略ID。
注意：此字段可能返回 null，表示取不到有效值。
      */
  PolicyId: number

  /**
      * 策略名。
注意：此字段可能返回 null，表示取不到有效值。
      */
  PolicyName: string

  /**
      * 身份ID。
注意：此字段可能返回 null，表示取不到有效值。
      */
  IdentityId: number

  /**
      * 身份角色名。
注意：此字段可能返回 null，表示取不到有效值。
      */
  IdentityRoleName: string

  /**
      * 身份角色别名。
注意：此字段可能返回 null，表示取不到有效值。
      */
  IdentityRoleAliasName: string

  /**
      * 描述。
注意：此字段可能返回 null，表示取不到有效值。
      */
  Description: string

  /**
      * 创建时间。
注意：此字段可能返回 null，表示取不到有效值。
      */
  CreateTime: string

  /**
      * 更新时间。
注意：此字段可能返回 null，表示取不到有效值。
      */
  UpdateTime: string
}

/**
 * DescribeOrganizationAuthNode请求参数结构体
 */
export interface DescribeOrganizationAuthNodeRequest {
  /**
   * 偏移量。
   */
  Offset: number

  /**
   * 限制数目。最大50
   */
  Limit: number

  /**
   * 互信主体名称。
   */
  AuthName?: string
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
 * DescribeOrganizationMemberAuthAccounts请求参数结构体
 */
export interface DescribeOrganizationMemberAuthAccountsRequest {
  /**
   * 偏移量。
   */
  Offset: number

  /**
   * 限制数目。
   */
  Limit: number

  /**
   * 成员Uin。
   */
  MemberUin: number

  /**
   * 策略ID。
   */
  PolicyId: number
}

/**
 * CancelOrganizationMemberAuthAccount请求参数结构体
 */
export interface CancelOrganizationMemberAuthAccountRequest {
  /**
   * 成员Uin。
   */
  MemberUin: number

  /**
   * 策略ID。
   */
  PolicyId: number

  /**
   * 组织子账号Uin。
   */
  OrgSubAccountUin: number
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
 * DescribeOrganizationMemberAuthAccounts返回参数结构体
 */
export interface DescribeOrganizationMemberAuthAccountsResponse {
  /**
      * 列表
注意：此字段可能返回 null，表示取不到有效值。
      */
  Items: Array<OrgMemberAuthAccount>

  /**
      * 总数目
注意：此字段可能返回 null，表示取不到有效值。
      */
  Total: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 成员和子账号的授权关系
 */
export interface OrgMemberAuthAccount {
  /**
      * 组织子账号Uin。
注意：此字段可能返回 null，表示取不到有效值。
      */
  OrgSubAccountUin: number

  /**
      * 策略ID。
注意：此字段可能返回 null，表示取不到有效值。
      */
  PolicyId: number

  /**
      * 策略名。
注意：此字段可能返回 null，表示取不到有效值。
      */
  PolicyName: string

  /**
      * 身份ID。
注意：此字段可能返回 null，表示取不到有效值。
      */
  IdentityId: number

  /**
      * 身份角色名。
注意：此字段可能返回 null，表示取不到有效值。
      */
  IdentityRoleName: string

  /**
      * 身份角色别名。
注意：此字段可能返回 null，表示取不到有效值。
      */
  IdentityRoleAliasName: string

  /**
      * 创建时间。
注意：此字段可能返回 null，表示取不到有效值。
      */
  CreateTime: string

  /**
      * 更新时间。
注意：此字段可能返回 null，表示取不到有效值。
      */
  UpdateTime: string

  /**
      * 子账号名称
注意：此字段可能返回 null，表示取不到有效值。
      */
  OrgSubAccountName: string
}

/**
 * 组织成员可授权的身份
 */
export interface OrgMemberAuthIdentity {
  /**
      * 身份ID。
注意：此字段可能返回 null，表示取不到有效值。
      */
  IdentityId: number

  /**
      * 身份的角色名。
注意：此字段可能返回 null，表示取不到有效值。
      */
  IdentityRoleName: string

  /**
      * 身份的角色别名。
注意：此字段可能返回 null，表示取不到有效值。
      */
  IdentityRoleAliasName: string

  /**
      * 描述。
注意：此字段可能返回 null，表示取不到有效值。
      */
  Description: string

  /**
      * 创建时间。
注意：此字段可能返回 null，表示取不到有效值。
      */
  CreateTime: string

  /**
      * 更新时间。
注意：此字段可能返回 null，表示取不到有效值。
      */
  UpdateTime: string

  /**
      * 身份类型。取值： 1-预设  2-自定义
注意：此字段可能返回 null，表示取不到有效值。
      */
  IdentityType?: number
}

/**
 * 成员主要信息
 */
export interface MemberMainInfo {
  /**
      * 成员uin
注意：此字段可能返回 null，表示取不到有效值。
      */
  MemberUin: number

  /**
      * 成员名称j
注意：此字段可能返回 null，表示取不到有效值。
      */
  MemberName: string
}

/**
 * CreateOrganizationMember请求参数结构体
 */
export interface CreateOrganizationMemberRequest {
  /**
   * 成员名称。最大长度为25个字符，支持英文字母、数字、汉字、符号+@、&._[]-:,
   */
  Name: string

  /**
   * 关系策略。取值：Financial
   */
  PolicyType: string

  /**
   * 成员财务权限ID列表。取值：1-查看账单、2-查看余额、3-资金划拨、4-合并出账、5-开票、6-优惠继承、7-代付费，1、2 默认必须
   */
  PermissionIds: Array<number>

  /**
   * 成员所属部门的节点ID。可以调用DescribeOrganizationNodes获取
   */
  NodeId: number

  /**
   * 账号名称。最大长度为25个字符，支持英文字母、数字、汉字、符号+@、&._[]-:,
   */
  AccountName: string

  /**
   * 备注。
   */
  Remark?: string

  /**
   * 成员创建记录ID。创建异常重试时需要
   */
  RecordId?: number

  /**
   * 代付者Uin。成员代付费时需要
   */
  PayUin?: string

  /**
   * 成员访问身份ID列表。可以调用ListOrganizationIdentity获取，1默认支持
   */
  IdentityRoleID?: Array<number>

  /**
   * 认证主体关系ID。给不同主体创建成员时需要，可以调用DescribeOrganizationAuthNode获取
   */
  AuthRelationId?: number
}

/**
 * 组织身份
 */
export interface OrgIdentity {
  /**
      * 身份ID。
注意：此字段可能返回 null，表示取不到有效值。
      */
  IdentityId: number

  /**
      * 身份名称。
注意：此字段可能返回 null，表示取不到有效值。
      */
  IdentityAliasName: string

  /**
      * 描述。
注意：此字段可能返回 null，表示取不到有效值。
      */
  Description: string

  /**
      * 身份策略。
注意：此字段可能返回 null，表示取不到有效值。
      */
  IdentityPolicy: Array<IdentityPolicy>

  /**
      * 身份类型。 1-预设、 2-自定义
注意：此字段可能返回 null，表示取不到有效值。
      */
  IdentityType: number

  /**
      * 更新时间。
注意：此字段可能返回 null，表示取不到有效值。
      */
  UpdateTime: string
}

/**
 * DescribeOrganizationMembers请求参数结构体
 */
export interface DescribeOrganizationMembersRequest {
  /**
   * 偏移量。取值是limit的整数倍，默认值 : 0
   */
  Offset: number

  /**
   * 限制数目。取值范围：1~50，默认值：10
   */
  Limit: number

  /**
   * 国际站：en，国内站：zh
   */
  Lang?: string

  /**
   * 成员名称或者成员ID搜索。
   */
  SearchKey?: string

  /**
   * 主体名称搜索。
   */
  AuthName?: string

  /**
   * 可信服务产品简称。可信服务管理员查询时必须指定
   */
  Product?: string
}

/**
 * 成员管理身份
 */
export interface MemberIdentity {
  /**
      * 身份ID。
注意：此字段可能返回 null，表示取不到有效值。
      */
  IdentityId: number

  /**
      * 身份名称。
注意：此字段可能返回 null，表示取不到有效值。
      */
  IdentityAliasName: string
}

/**
 * UpdateOrganizationNode请求参数结构体
 */
export interface UpdateOrganizationNodeRequest {
  /**
   * 节点ID。
   */
  NodeId: number

  /**
   * 节点名称。最大长度为40个字符，支持英文字母、数字、汉字、符号+@、&._[]-
   */
  Name?: string

  /**
   * 备注。
   */
  Remark?: string
}

/**
 * 企业组织单元
 */
export interface OrgNode {
  /**
      * 组织节点ID
注意：此字段可能返回 null，表示取不到有效值。
      */
  NodeId: number

  /**
      * 名称
注意：此字段可能返回 null，表示取不到有效值。
      */
  Name: string

  /**
      * 父节点ID
注意：此字段可能返回 null，表示取不到有效值。
      */
  ParentNodeId: number

  /**
      * 备注
注意：此字段可能返回 null，表示取不到有效值。
      */
  Remark: string

  /**
      * 创建时间
注意：此字段可能返回 null，表示取不到有效值。
      */
  CreateTime: string

  /**
      * 更新时间
注意：此字段可能返回 null，表示取不到有效值。
      */
  UpdateTime: string
}
