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
 * 部门用户
 */
export interface SsoTeamUser {
  /**
   * 用户ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  UserId?: string
  /**
   * 用户名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  RealName?: string
  /**
   * 用户类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  UserType?: string
  /**
   * 所属租户ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  TenantId?: string
  /**
   * 邮箱
注意：此字段可能返回 null，表示取不到有效值。
   */
  Email?: string
  /**
   * 电话
注意：此字段可能返回 null，表示取不到有效值。
   */
  Phone?: string
  /**
   * 用户状态
注意：此字段可能返回 null，表示取不到有效值。
   */
  Status?: number
  /**
   * 创建时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  CreateAt?: number
  /**
   * 部门ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  DepartmentId?: string
  /**
   * 部门名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  DepartmentName?: string
  /**
   * 是否关联权限
注意：此字段可能返回 null，表示取不到有效值。
   */
  LinkFilter?: number
}

/**
 * 空间用户结果
 */
export interface SsoTeamUserResult {
  /**
   * 总数
注意：此字段可能返回 null，表示取不到有效值。
   */
  Total?: number
  /**
   * 部门用户列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  Users?: Array<SsoTeamUser>
}

/**
 * DescribeWorkspaceUserList返回参数结构体
 */
export interface DescribeWorkspaceUserListResponse {
  /**
   * 返回数据
   */
  Result?: SsoTeamUserResult
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeWorkspaceUserList请求参数结构体
 */
export interface DescribeWorkspaceUserListRequest {
  /**
   * 翻页页码
   */
  Offset: number
  /**
   * 翻页大小
   */
  Limit: number
  /**
   * 工作空间ID
   */
  WorkspaceId: string
  /**
   * token
   */
  ApplicationToken: string
  /**
   * 租户ID
   */
  TenantId?: string
  /**
   * 更新时间戳，单位秒
   */
  UpdateAt?: number
}

/**
 * DescribeInterfaceList请求参数结构体
 */
export type DescribeInterfaceListRequest = null

/**
 * DescribeApplicationList返回参数结构体
 */
export interface DescribeApplicationListResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeWorkspaceList返回参数结构体
 */
export interface DescribeWorkspaceListResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeApplicationList请求参数结构体
 */
export type DescribeApplicationListRequest = null

/**
 * DescribeInterfaceList返回参数结构体
 */
export interface DescribeInterfaceListResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeWorkspaceList请求参数结构体
 */
export type DescribeWorkspaceListRequest = null

/**
 * DescribeEdgeApplicationToken返回参数结构体
 */
export interface DescribeEdgeApplicationTokenResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeEdgeApplicationToken请求参数结构体
 */
export type DescribeEdgeApplicationTokenRequest = null
