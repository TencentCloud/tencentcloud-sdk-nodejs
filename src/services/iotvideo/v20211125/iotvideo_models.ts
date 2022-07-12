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
 * 消息数量统计
 */
export interface MessageCntStats {
  /**
   * 统计日期
   */
  Date: string

  /**
      * 物模型上行消息数
注意：此字段可能返回 null，表示取不到有效值。
      */
  UpMsgCnt: number

  /**
      * 物模型下行消息数
注意：此字段可能返回 null，表示取不到有效值。
      */
  DownMsgCnt: number

  /**
      * ntp消息数
注意：此字段可能返回 null，表示取不到有效值。
      */
  NtpMsgCnt: number
}

/**
 * CallDeviceActionAsync返回参数结构体
 */
export interface CallDeviceActionAsyncResponse {
  /**
      * 调用Id
注意：此字段可能返回 null，表示取不到有效值。
      */
  ClientToken: string

  /**
      * 异步调用状态
注意：此字段可能返回 null，表示取不到有效值。
      */
  Status: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDeviceDataStats返回参数结构体
 */
export interface DescribeDeviceDataStatsResponse {
  /**
      * 累计注册设备数
注意：此字段可能返回 null，表示取不到有效值。
      */
  RegisterCnt: number

  /**
      * 设备数量列表
注意：此字段可能返回 null，表示取不到有效值。
      */
  Data: Array<DeviceCntStats>

  /**
      * 总数
注意：此字段可能返回 null，表示取不到有效值。
      */
  Total: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDeviceDataStats请求参数结构体
 */
export interface DescribeDeviceDataStatsRequest {
  /**
   * 开始日期
   */
  StartDate: string

  /**
   * 结束日期
   */
  EndDate: string

  /**
   * 产品id
   */
  ProductId?: string
}

/**
 * CallDeviceActionSync返回参数结构体
 */
export interface CallDeviceActionSyncResponse {
  /**
      * 调用Id
注意：此字段可能返回 null，表示取不到有效值。
      */
  ClientToken: string

  /**
      * 输出参数
注意：此字段可能返回 null，表示取不到有效值。
      */
  OutputParams: string

  /**
      * 返回状态，当设备不在线等部分情况，会通过该 Status 返回。
注意：此字段可能返回 null，表示取不到有效值。
      */
  Status: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 设备数量统计
 */
export interface DeviceCntStats {
  /**
   * 统计日期
   */
  Date: string

  /**
      * 新增注册设备数
注意：此字段可能返回 null，表示取不到有效值。
      */
  NewRegisterCnt: number

  /**
      * 新增激活设备数
注意：此字段可能返回 null，表示取不到有效值。
      */
  NewActivateCnt: number

  /**
      * 活跃设备数
注意：此字段可能返回 null，表示取不到有效值。
      */
  ActiveCnt: number
}

/**
 * DescribeMessageDataStats返回参数结构体
 */
export interface DescribeMessageDataStatsResponse {
  /**
      * 消息数量列表
注意：此字段可能返回 null，表示取不到有效值。
      */
  Data: Array<MessageCntStats>

  /**
      * 总数
注意：此字段可能返回 null，表示取不到有效值。
      */
  Total: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeMessageDataStats请求参数结构体
 */
export interface DescribeMessageDataStatsRequest {
  /**
   * 统计开始日期
   */
  StartDate: string

  /**
   * 统计结束日期
   */
  EndDate: string

  /**
   * 产品id
   */
  ProductId?: string
}

/**
 * CallDeviceActionAsync请求参数结构体
 */
export interface CallDeviceActionAsyncRequest {
  /**
   * 产品Id
   */
  ProductId: string

  /**
   * 设备名称
   */
  DeviceName: string

  /**
   * 产品数据模板中行为功能的标识符，由开发者自行根据设备的应用场景定义
   */
  ActionId: string

  /**
   * 输入参数
   */
  InputParams?: string
}

/**
 * CallDeviceActionSync请求参数结构体
 */
export interface CallDeviceActionSyncRequest {
  /**
   * 产品Id
   */
  ProductId: string

  /**
   * 设备名称
   */
  DeviceName: string

  /**
   * 产品数据模板中行为功能的标识符，由开发者自行根据设备的应用场景定义
   */
  ActionId: string

  /**
   * 输入参数
   */
  InputParams?: string
}
