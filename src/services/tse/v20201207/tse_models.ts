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
 * ManageConfig请求参数结构体
 */
export interface ManageConfigRequest {
  /**
   * 实例ID
   */
  InstanceId: string

  /**
   * 配置中心类型（consul、zookeeper、apollo等）
   */
  Type: string

  /**
   * 请求命名 PUT GET DELETE
   */
  Command: string

  /**
   * 配置的Key
   */
  Key: string

  /**
   * 配置的Value
   */
  Value?: string
}

/**
 * ManageConfig返回参数结构体
 */
export interface ManageConfigResponse {
  /**
      * 对配置中心操作配置之后的返回值
注意：此字段可能返回 null，表示取不到有效值。
      */
  Result: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}
