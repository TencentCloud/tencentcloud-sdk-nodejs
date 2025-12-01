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
 * CreateRoleUser返回参数结构体
 */
export interface CreateRoleUserResponse {
  /**
   * 人员ID
   */
  UserId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateRoleUser请求参数结构体
 */
export interface CreateRoleUserRequest {
  /**
   * 角色体系ID
   */
  RoleSystemId: number
  /**
   * 人员ID
   */
  UserId: string
  /**
   * 人员名称
   */
  Username: string
  /**
   * 是否启用
   */
  Enabled: number
  /**
   * 手机号
   */
  Phone?: string
  /**
   * 属性列表
   */
  Attributes?: Array<UserAttribute>
}

/**
 * 人员属性
 */
export interface UserAttribute {
  /**
   * 属性键名
   */
  Key: string
  /**
   * 属性值
   */
  Value: Array<number | bigint>
}
