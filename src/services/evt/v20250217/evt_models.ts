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

/**
 * CreateRoleUser请求参数结构体
 */
export interface CreateRoleUserRequest {
  /**
   * <p>自定义角色体系的ID</p><p>角色体系ID</p>
   */
  RoleSystemId: number
  /**
   * <p>要添加的自定义用户ID，建议与腾讯云-子用户的用户名称保持一致</p><p>人员ID</p>
   */
  UserId: string
  /**
   * <p>自定义用户的名称</p><p>人员名称</p>
   */
  Username: string
  /**
   * <p>是否启用当前用户</p>枚举值：<ul><li> 1： 启用</li><li> 2： 禁用</li></ul><p>是否启用</p>
   */
  Enabled: number
  /**
   * <p>自定义用户的手机号</p><p>手机号</p>
   */
  Phone?: string
  /**
   * <p>自定义用户的身份属性列表</p><p>属性列表</p>
   */
  Attributes?: Array<UserAttribute>
  /**
   * <p>自定义用户与腾讯云-子用户关联，如果不传默认按照子用户名称进行匹配</p>
   */
  TencentUin?: number
}

/**
 * CompleteApproval请求参数结构体
 */
export interface CompleteApprovalRequest {
  /**
   * <p>审批单号</p>
   */
  ApprovalId: string
  /**
   * <p>审批节点</p>
   */
  NodeId: string
  /**
   * <p>审批结果，1通过2拒绝</p>
   */
  Result: number
  /**
   * <p>审批意见</p>
   */
  Opinion?: string
  /**
   * <p>审批人的身份认证Token，通过自定义角色体系回调接口分发</p><p>token信息</p>
   */
  UserToken?: string
}

/**
 * DeleteRoleUser请求参数结构体
 */
export interface DeleteRoleUserRequest {
  /**
   * <p>自定义角色体系的ID</p>
   */
  RoleSystemId?: number
  /**
   * <p>需要删除的自定义用户ID</p>
   */
  UserId?: string
}

/**
 * 人员属性
 */
export interface UserAttribute {
  /**
   * <p>自定义角色体系中用户属性的ID</p><p>属性键名</p>
   */
  Key: string
  /**
   * <p>自定义角色体系中的用户属性值，只支持传入对应用户属性支持的角色ID</p><p>属性值</p>
   */
  Value: Array<number | bigint>
}

/**
 * DeleteRoleUser返回参数结构体
 */
export interface DeleteRoleUserResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateRoleUser返回参数结构体
 */
export interface CreateRoleUserResponse {
  /**
   * <p>人员ID</p>
   */
  UserId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CompleteApproval返回参数结构体
 */
export interface CompleteApprovalResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * PutMessage返回参数结构体
 */
export interface PutMessageResponse {
  /**
   * <p>满足条件时生成的事件单id，不满足条件时为空</p>
   */
  TicketId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * PutMessage请求参数结构体
 */
export interface PutMessageRequest {
  /**
   * <p>事件ID</p>
   */
  EventId: string
  /**
   * <p>需要推送的事件数据内容，格式为json，字段定义需要与事件中的定义一致</p>
   */
  Data?: string
  /**
   * <p>数据推送来源，会在生成的单据中展示数据来源</p>
   */
  Source?: string
}
