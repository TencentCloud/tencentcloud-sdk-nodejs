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
 * CreateEmbedToken返回参数结构体
 */
export interface CreateEmbedTokenResponse {
  /**
      * 额外信息
注意：此字段可能返回 null，表示取不到有效值。
      */
  Extra: string

  /**
      * 数据
注意：此字段可能返回 null，表示取不到有效值。
      */
  Data: EmbedTokenInfo

  /**
      * 结果描述
注意：此字段可能返回 null，表示取不到有效值。
      */
  Msg: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ApplyEmbedInterval请求参数结构体
 */
export interface ApplyEmbedIntervalRequest {
  /**
   * 分享项目id，必选
   */
  ProjectId?: number

  /**
   * 分享页面id，嵌出看板时此为空值0
   */
  PageId?: number

  /**
   * 需要申请延期的Token
   */
  BIToken?: string

  /**
   * 备用字段
   */
  ExtraParam?: string

  /**
   * panel,看板；page，页面
   */
  Scope?: string
}

/**
 * 申请Token延期
 */
export interface ApplyEmbedTokenInfo {
  /**
      * 申请结果
注意：此字段可能返回 null，表示取不到有效值。
      */
  Result: boolean
}

/**
 * ApplyEmbedInterval返回参数结构体
 */
export interface ApplyEmbedIntervalResponse {
  /**
      * 额外参数
注意：此字段可能返回 null，表示取不到有效值。
      */
  Extra: string

  /**
      * 结果数据
注意：此字段可能返回 null，表示取不到有效值。
      */
  Data: ApplyEmbedTokenInfo

  /**
      * 结果描述
注意：此字段可能返回 null，表示取不到有效值。
      */
  Msg: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateEmbedToken请求参数结构体
 */
export interface CreateEmbedTokenRequest {
  /**
   * 分享项目id，必选
   */
  ProjectId?: number

  /**
   * 分享页面id，嵌出看板时此为空值0
   */
  PageId?: number

  /**
   * page表示嵌出页面，panel表嵌出整个看板
   */
  Scope?: string

  /**
   * 过期时间。 单位：分钟 最大值：240。即，4小时 默认值：240
   */
  ExpireTime?: string

  /**
   * 备用字段
   */
  ExtraParam?: string
}

/**
 * 报表嵌出数据结构-强鉴权
 */
export interface EmbedTokenInfo {
  /**
      * 信息标识
注意：此字段可能返回 null，表示取不到有效值。
      */
  Id?: number

  /**
      * 令牌
注意：此字段可能返回 null，表示取不到有效值。
      */
  BIToken?: string

  /**
      * 项目Id
注意：此字段可能返回 null，表示取不到有效值。
      */
  ProjectId?: string

  /**
      * 创建人
注意：此字段可能返回 null，表示取不到有效值。
      */
  CreatedUser?: string

  /**
      * 创建时间
注意：此字段可能返回 null，表示取不到有效值。
      */
  CreatedAt?: string

  /**
      * 更新人
注意：此字段可能返回 null，表示取不到有效值。
      */
  UpdatedUser?: string

  /**
      * 更新时间
注意：此字段可能返回 null，表示取不到有效值。
      */
  UpdatedAt?: string

  /**
      * 页面Id
注意：此字段可能返回 null，表示取不到有效值。
      */
  PageId?: string

  /**
      * 备用
注意：此字段可能返回 null，表示取不到有效值。
      */
  ExtraParam?: string

  /**
      * 嵌出类型
注意：此字段可能返回 null，表示取不到有效值。
      */
  Scope: string

  /**
      * 过期时间，分钟为单位，最大240
注意：此字段可能返回 null，表示取不到有效值。
      */
  ExpireTime: number
}
