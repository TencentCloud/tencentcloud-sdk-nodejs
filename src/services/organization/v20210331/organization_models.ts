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
 * DescribeOrganization返回参数结构体
 */
export interface DescribeOrganizationResponse {
  /**
      * 企业组织ID
注意：此字段可能返回 null，表示取不到有效值。
      */
  OrgId: number

  /**
      * 创建者UIN
注意：此字段可能返回 null，表示取不到有效值。
      */
  HostUin: number

  /**
      * 创建者昵称
注意：此字段可能返回 null，表示取不到有效值。
      */
  NickName: string

  /**
      * 企业组织类型
注意：此字段可能返回 null，表示取不到有效值。
      */
  OrgType: number

  /**
      * 组织管理员：true，组织成员：false
注意：此字段可能返回 null，表示取不到有效值。
      */
  IsManager: boolean

  /**
      * 策略类型
注意：此字段可能返回 null，表示取不到有效值。
      */
  OrgPolicyType: string

  /**
      * 策略名
注意：此字段可能返回 null，表示取不到有效值。
      */
  OrgPolicyName: string

  /**
      * 策略权限
注意：此字段可能返回 null，表示取不到有效值。
      */
  OrgPermission: Array<OrgPermission>

  /**
      * 根节点ID
注意：此字段可能返回 null，表示取不到有效值。
      */
  RootNodeId: number

  /**
      * 创建时间
注意：此字段可能返回 null，表示取不到有效值。
      */
  CreateTime: string

  /**
      * 成员加入时间
注意：此字段可能返回 null，表示取不到有效值。
      */
  JoinTime: string

  /**
      * 是否允许退出。允许：Allow，不允许：Denied。
注意：此字段可能返回 null，表示取不到有效值。
      */
  IsAllowQuit: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
   * 策略ID。
   */
  PolicyId: number

  /**
   * 组织子账号Uin。
   */
  OrgSubAccountUins: Array<number>
}

/**
 * CreateOrganizationMember请求参数结构体
 */
export interface CreateOrganizationMemberRequest {
  /**
   * 名称
   */
  Name: string

  /**
   * 关系策略
   */
  PolicyType: string

  /**
   * 关系权限
   */
  PermissionIds: Array<number>

  /**
   * 需要调节的节点
   */
  NodeId: number

  /**
   * 账号名
   */
  AccountName: string

  /**
   * 备注
   */
  Remark?: string

  /**
   * 重试创建传记录ID
   */
  RecordId?: number
}

/**
 * DescribeOrganization请求参数结构体
 */
export interface DescribeOrganizationRequest {
  /**
   * 国际站：en，国内站：zh
   */
  Lang?: string
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
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}
