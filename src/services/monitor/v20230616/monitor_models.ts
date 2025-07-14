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
 * DescribeAlarmNotifyHistories请求参数结构体
 */
export interface DescribeAlarmNotifyHistoriesRequest {
  /**
   * 监控类型
   */
  MonitorType: string
  /**
   * 起始时间点，unix秒级时间戳
   */
  QueryBaseTime: number
  /**
   * 从 QueryBaseTime 开始，需要查询往前多久的时间，单位秒
   */
  QueryBeforeSeconds: number
  /**
   * 分页参数
   */
  PageParams: PageByNoParams
  /**
   * 当监控类型为 MT_QCE 时候需要填写，归属的命名空间
   */
  Namespace?: string
  /**
   * 当监控类型为 MT_QCE 时候需要填写， 告警策略类型
   */
  ModelName?: string
  /**
   * 查询某个策略的通知历史
   */
  PolicyId?: string
}

/**
 * DescribeAlarmNotifyHistories返回参数结构体
 */
export interface DescribeAlarmNotifyHistoriesResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 分页请求参数
 */
export interface PageByNoParams {
  /**
   * 每个分页的数量是多少
注意：此字段可能返回 null，表示取不到有效值。
   */
  PerPage?: number
  /**
   * 第几个分页，从1开始
注意：此字段可能返回 null，表示取不到有效值。
   */
  PageNo?: string
}
