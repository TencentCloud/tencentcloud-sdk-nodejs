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
 * 请求参数Vagrant
 */
export interface ReqMetadataVagrant {
  /**
   * 无
   */
  Key?: string
  /**
   * 无
   */
  Value?: string
}

/**
 * 获取成员列表回包Industry
 */
export interface GetIndustryV1HomeMembersRespIndustry {
  /**
   * 行业ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  ID: string
  /**
   * 行业名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  IndustryName: string
}

/**
 * 请求的Metadata
 */
export interface ReqMetadata {
  /**
   * 渠道
   */
  ChannelID?: string
  /**
   * 无
   */
  BusinessName?: string
  /**
   * 无
   */
  GUID?: string
  /**
   * 无
   */
  AppKey?: string
  /**
   * 位置定位服务
   */
  LBS?: ReqMetadataLBS
  /**
   * 透传字段
   */
  Vagrants?: Array<ReqMetadataVagrant>
}

/**
 * 获取成员列表回包DataList
 */
export interface GetIndustryV1HomeMembersRespData {
  /**
   * 修改时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  EditTime: number
  /**
   * 功能列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  FeatureList: GetIndustryV1HomeMembersRespFeature
  /**
   * 用户ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  ID: string
  /**
   * 用户行业分类
注意：此字段可能返回 null，表示取不到有效值。
   */
  IndustryType: string
  /**
   * 子用户数量
注意：此字段可能返回 null，表示取不到有效值。
   */
  MemberNum: number
  /**
   * 机器人列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  ProductList: GetIndustryV1HomeMembersRespProduct
  /**
   * 备注
注意：此字段可能返回 null，表示取不到有效值。
   */
  Remark: string
  /**
   * 是否有效
注意：此字段可能返回 null，表示取不到有效值。
   */
  Status: number
  /**
   * 功能列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  TypeList: GetIndustryV1HomeMembersRespType
  /**
   * 用户账号
注意：此字段可能返回 null，表示取不到有效值。
   */
  UserAccount: string
}

/**
 * GetIndustryV1HomeMembers请求参数结构体
 */
export interface GetIndustryV1HomeMembersRequest {
  /**
   * 无
   */
  Payload: GetIndustryV1HomeMembersReqPayload
  /**
   * 无
   */
  Metadata?: ReqMetadata
}

/**
 * 获取成员列表接口回包Feature
 */
export interface GetIndustryV1HomeMembersRespFeature {
  /**
   * 功能名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  FeatureName: string
  /**
   * 功能ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  ID: string
}

/**
 * 获取成员列表入参payload
 */
export interface GetIndustryV1HomeMembersReqPayload {
  /**
   * 用户ID
   */
  ID: string
}

/**
 * 获取成员列表接口回包ProductList
 */
export interface GetIndustryV1HomeMembersRespProduct {
  /**
   * 创建时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  CreateTime: string
  /**
   * 编辑时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  EditTime: string
  /**
   * 机器人ID（AppKey信息）
注意：此字段可能返回 null，表示取不到有效值。
   */
  AppKey: string
  /**
   * 机器人图标
注意：此字段可能返回 null，表示取不到有效值。
   */
  Image: string
  /**
   * 行业信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  Industry: Array<GetIndustryV1HomeMembersRespIndustry>
  /**
   * 操作员列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  OperatorList: string
  /**
   * 机器人名字
注意：此字段可能返回 null，表示取不到有效值。
   */
  ProductName: string
  /**
   * 备注
注意：此字段可能返回 null，表示取不到有效值。
   */
  Remark: string
  /**
   * 模板列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  TemplateList: string
}

/**
 * 回包的meta data
 */
export interface RspMetadata {
  /**
   * 无
   */
  Code: number
  /**
   * 无
   */
  Message: string
  /**
   * 无
   */
  SessionID: string
  /**
   * 无
   */
  SessionDelta: string
}

/**
 * 获取成员列表回包Payload
 */
export interface GetIndustryV1HomeMembersRespPayload {
  /**
   * 用户级别
注意：此字段可能返回 null，表示取不到有效值。
   */
  AccountLevel: string
  /**
   * 用户列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  DataList: Array<GetIndustryV1HomeMembersRespData>
  /**
   * 每页数量
注意：此字段可能返回 null，表示取不到有效值。
   */
  Limit: number
  /**
   * 分页偏移量，从0开始
注意：此字段可能返回 null，表示取不到有效值。
   */
  Offset: number
  /**
   * 用户总数
注意：此字段可能返回 null，表示取不到有效值。
   */
  Total: number
}

/**
 * GetIndustryV1HomeMembers返回参数结构体
 */
export interface GetIndustryV1HomeMembersResponse {
  /**
   * 无
注意：此字段可能返回 null，表示取不到有效值。
   */
  Metadata: RspMetadata
  /**
   * 无
注意：此字段可能返回 null，表示取不到有效值。
   */
  Payload: GetIndustryV1HomeMembersRespPayload
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 请求参数的lbs
 */
export interface ReqMetadataLBS {
  /**
   * 纬度
   */
  Latitude?: number
  /**
   * 经度
   */
  Longitude?: number
}

/**
 * 获取成员列表接口回包TypeList
 */
export interface GetIndustryV1HomeMembersRespType {
  /**
   * 类型ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  Type: string
  /**
   * 类型名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  TypeName: string
}
