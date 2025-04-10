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
 * 状态节点
 */
export interface StatusNode {
  /**
   * 节点id
   */
  NodeId?: string
  /**
   * 节点名称
   */
  NodeName?: string
  /**
   * 节点类型 1:审批节点 2:执行节点 3:条件节点
   */
  NodeType?: number
  /**
   * 下一个节点
   */
  NextNode?: string
  /**
   * 审批意见模型
   */
  Opinion?: ApproveOpinion
  /**
   * scf函数名称
   */
  ScfName?: string
  /**
   * 状态（0：待审批，1：审批通过，2：拒绝，3：scf执行失败，4：scf执行成功）18: 外部审批中
   */
  SubStatus?: number
  /**
   * 审批节点审批人
   */
  ApprovedUin?: Array<number | bigint>
  /**
   * 审批时间
   */
  CreateTime?: string
  /**
   * 审批意见信息 审批节点:审批人意见  执行节点:scf函数执行日志
   */
  Msg?: string
  /**
   * 有权限审批该节点的uin
   */
  Users?: ApproveUser
  /**
   * 是否有权限审批该节点
   */
  IsApprove?: boolean
  /**
   * 审批id
   */
  ApproveId?: string
  /**
   * 审批方式 0或签 1会签
   */
  ApproveMethod?: number
  /**
   * 审批节点审批类型，1人工审批 2自动通过 3自动决绝 4外部审批scf
   */
  ApproveType?: number
  /**
   * 外部审批类型 scf:0或null ; CKafka:1
   */
  CallMethod?: number
  /**
   * CKafka - 接入资源ID
   */
  DataHubId?: string
  /**
   * CKafka - 任务名称
   */
  TaskName?: string
  /**
   * CKafka - 地域
   */
  CKafkaRegion?: string
  /**
   * 外部审批Url
   */
  ExternalUrl?: string
  /**
   * 并行节点 3-4
   */
  ParallelNodes?: string
  /**
   * scf拒绝时返回信息
   */
  RejectedCloudFunctionMsg?: string
  /**
   * 上一个节点
   */
  PrevNode?: string
}

/**
 * 云函数SCF
 */
export interface Scf {
  /**
   * Scf函数地域id
   */
  ScfRegion: string
  /**
   * Scf函数地域
   */
  ScfRegionName: string
  /**
   * Scf函数名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  ScfName?: string
  /**
   * Scf函数入参
注意：此字段可能返回 null，表示取不到有效值。
   */
  Params?: Array<ScfParam>
}

/**
 * 审批意见
 */
export interface ApproveOpinion {
  /**
   * 方式 1:输入文字反馈  2:预设选项
   */
  Type: number
  /**
   * 审批意见
注意：此字段可能返回 null，表示取不到有效值。
   */
  Content?: Array<string>
}

/**
 * OutApproveBpaasApplication返回参数结构体
 */
export interface OutApproveBpaasApplicationResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * GetBpaasApproveDetail请求参数结构体
 */
export interface GetBpaasApproveDetailRequest {
  /**
   * 审批id
   */
  ApproveId: number
}

/**
 * 审批人
 */
export interface ApproveUser {
  /**
   * 用户uin
   */
  Uin: number
  /**
   * 用户类型 (1:用户  2:用户组)
   */
  Type: number
  /**
   * 用户描述
注意：此字段可能返回 null，表示取不到有效值。
   */
  Desc?: string
  /**
   * 用户昵称
注意：此字段可能返回 null，表示取不到有效值。
   */
  Nick?: string
  /**
   * 动态获取Scf
注意：此字段可能返回 null，表示取不到有效值。
   */
  Scf?: Scf
  /**
   * 审批状态 （取值范围 0:待审批  1:审批通过  2:拒绝  6:其他人已审批）
注意：此字段可能返回 null，表示取不到有效值。
   */
  ApproveStatus?: number
  /**
   * 审批意见
注意：此字段可能返回 null，表示取不到有效值。
   */
  ApproveMsg?: string
  /**
   * 审批时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  ApproveTime?: string
  /**
   * 审批组名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  ApproveGroup?: string
}

/**
 * GetBpaasApproveDetail返回参数结构体
 */
export interface GetBpaasApproveDetailResponse {
  /**
   * 申请人uin
   */
  ApplyUin?: number
  /**
   * 申请人主账号
   */
  ApplyOwnUin?: number
  /**
   * 申请人昵称
   */
  ApplyUinNick?: string
  /**
   * 审批流id
   */
  BpaasId?: number
  /**
   * 审批流名称
   */
  BpaasName?: string
  /**
   * 申请参数
   */
  ApplicationParams?: Array<ApplyParam>
  /**
   * 申请原因
   */
  Reason?: string
  /**
   * 申请时间
   */
  CreateTime?: string
  /**
   * 申请单状态
   */
  Status?: number
  /**
   * 节点信息
   */
  Nodes?: Array<StatusNode>
  /**
   * 正在审批的节点id
   */
  ApprovingNodeId?: string
  /**
   * 更新时间，时间格式：2021-12-12 10:12:10
   */
  ModifyTime?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * OutApproveBpaasApplication请求参数结构体
 */
export interface OutApproveBpaasApplicationRequest {
  /**
   * 状态  1:通过  2:拒绝
   */
  Status: number
  /**
   * 审批单id
   */
  ApproveId: number
  /**
   * 审批意见
   */
  Msg?: string
}

/**
 * Scf函数入参
 */
export interface ScfParam {
  /**
   * 参数Key
   */
  Key: string
  /**
   * 参数类型 1用户输入 2预设参数 3表单参数
   */
  Type: number
  /**
   * 参数值
   */
  Values: Array<string>
  /**
   * 参数描述
注意：此字段可能返回 null，表示取不到有效值。
   */
  Name?: string
}

/**
 * bpaas申请入参
 */
export interface ApplyParam {
  /**
   * 审批流中表单唯一标识
注意：此字段可能返回 null，表示取不到有效值。
   */
  Key: string
  /**
   * 表单value
注意：此字段可能返回 null，表示取不到有效值。
   */
  Value: Array<string>
  /**
   * 表单参数描述
注意：此字段可能返回 null，表示取不到有效值。
   */
  Name?: string
}
