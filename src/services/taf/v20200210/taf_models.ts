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
 * ManagePortraitRisk返回参数结构体
 */
export interface ManagePortraitRiskResponse {
  /**
   * 业务出参
注意：此字段可能返回 null，表示取不到有效值。
   */
  Data?: ManagePortraitRiskOutput
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 业务出参
 */
export interface ManagePortraitRiskOutput {
  /**
   * 返回码（0，成功，其他失败）
   */
  Code?: number
  /**
   * 返回码对应的信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  Message?: string
  /**
   * 结果
注意：此字段可能返回 null，表示取不到有效值。
   */
  Value?: ManagePortraitRiskValueOutput
}

/**
 * 业务入参
 */
export interface ManagePortraitRiskInput {
  /**
   * 请求时间戳秒
   */
  PostTime: number
  /**
   * 用户公网ip（仅支持IPv4）
   */
  UserIp: string
  /**
   * 渠道号
   */
  Channel: number
}

/**
 * ManagePortraitRisk请求参数结构体
 */
export interface ManagePortraitRiskRequest {
  /**
   * 业务入参
   */
  BusinessSecurityData: ManagePortraitRiskInput
}

/**
 * 业务出参
 */
export interface ManagePortraitRiskValueOutput {
  /**
   * 对应的IP
   */
  UserIp?: string
  /**
   * 返回风险等级, 0 - 4，0代表无风险，数值越大，风险越高
   */
  Level?: number
}
