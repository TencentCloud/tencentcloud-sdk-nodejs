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
 * 后端提交任务事件返回Data复杂类型
 */
export interface TaskEventData {
  /**
      * 状态码
注意：此字段可能返回 null，表示取不到有效值。
      */
  Code?: number

  /**
      * 提示信息
注意：此字段可能返回 null，表示取不到有效值。
      */
  Message?: string

  /**
      * 任务ID
注意：此字段可能返回 null，表示取不到有效值。
      */
  TaskId?: number

  /**
      * 当前完成或正在完成的任务订单ID
注意：此字段可能返回 null，表示取不到有效值。
      */
  TaskOrderId?: string

  /**
      * 当前任务订单状态码
注意：此字段可能返回 null，表示取不到有效值。
      */
  TaskCode?: number

  /**
      * 获得积分数/成长值
注意：此字段可能返回 null，表示取不到有效值。
      */
  TaskCoinNumber?: number

  /**
      * 任务类型后台代码
注意：此字段可能返回 null，表示取不到有效值。
      */
  TaskType?: number

  /**
      * 当前积分
注意：此字段可能返回 null，表示取不到有效值。
      */
  TotalCoin?: number

  /**
      * 用户透传的代码块
注意：此字段可能返回 null，表示取不到有效值。
      */
  Attach?: string

  /**
      * 计次任务当前完成次数
注意：此字段可能返回 null，表示取不到有效值。
      */
  DoneTimes?: number

  /**
      * 计次任务当前所需完成次数
注意：此字段可能返回 null，表示取不到有效值。
      */
  TotalTimes?: number

  /**
      * 任务名称
注意：此字段可能返回 null，表示取不到有效值。
      */
  TaskName?: string

  /**
      * 当前成长值
注意：此字段可能返回 null，表示取不到有效值。
      */
  GrowScore?: number
}

/**
 * SubmitTaskEvent返回参数结构体
 */
export interface SubmitTaskEventResponse {
  /**
      * 订单ID
注意：此字段可能返回 null，表示取不到有效值。
      */
  OrderId?: string

  /**
      * 信息码
注意：此字段可能返回 null，表示取不到有效值。
      */
  Code?: number

  /**
      * success
注意：此字段可能返回 null，表示取不到有效值。
      */
  Message?: string

  /**
      * 任务处理结果列表
注意：此字段可能返回 null，表示取不到有效值。
      */
  Data?: Array<TaskEventData>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * SubmitTaskEvent请求参数结构体
 */
export interface SubmitTaskEventRequest {
  /**
   * 用户ID
   */
  AccountId: string

  /**
   * 设备ID
   */
  DeviceId: string

  /**
   * 订单ID
   */
  OrderId: string

  /**
   * 任务事件Code
   */
  Code: string

  /**
   * 同步异步方式：0为同步、1位异步
   */
  Async: number

  /**
   * 产品ID
   */
  ProductId: number

  /**
   * 回调地址
   */
  NotifyURL?: string
}
