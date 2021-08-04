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
 * 版本pod
 */
export interface RunVersionPod {
  /**
   * shell地址
   */
  Webshell: string

  /**
   * pod的id
   */
  PodId: string

  /**
   * 状态
   */
  Status: string

  /**
   * 创建时间
   */
  CreateTime: string

  /**
   * 实例的ip
   */
  PodIp: string

  /**
      * 可用区
注意：此字段可能返回 null，表示取不到有效值。
      */
  Zone: string

  /**
      * 部署版本
注意：此字段可能返回 null，表示取不到有效值。
      */
  DeployVersion: string

  /**
      * 重启次数
注意：此字段可能返回 null，表示取不到有效值。
      */
  RestartCount: number
}

/**
 * ResumeDeployApplication请求参数结构体
 */
export interface ResumeDeployApplicationRequest {
  /**
   * 需要开始下一批次的服务id
   */
  ApplicationId?: string

  /**
   * 环境id
   */
  EnvironmentId?: string
}

/**
 * ResumeDeployApplication返回参数结构体
 */
export interface ResumeDeployApplicationResponse {
  /**
   * 是否成功
   */
  Result: boolean

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * RevertDeployApplication返回参数结构体
 */
export interface RevertDeployApplicationResponse {
  /**
   * 是否成功
   */
  Result: boolean

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 分批发布策略配置
 */
export interface DeployStrategyConf {
  /**
   * 总分批数
   */
  TotalBatchCount?: number

  /**
   * beta分批实例数
   */
  BetaBatchNum?: number

  /**
   * 分批策略：0-全自动，1-全手动，2-beta分批，beta批一定是手动的
   */
  DeployStrategyType?: number

  /**
   * 每批暂停间隔
   */
  BatchInterval?: number
}

/**
 * RevertDeployApplication请求参数结构体
 */
export interface RevertDeployApplicationRequest {
  /**
   * 需要回滚的服务id
   */
  ApplicationId?: string

  /**
   * 需要回滚的服务所在环境id
   */
  EnvironmentId?: string
}

/**
 * 分批发布详情
 */
export interface TemDeployApplicationDetailInfo {
  /**
      * 分批发布策略
注意：此字段可能返回 null，表示取不到有效值。
      */
  DeployStrategyConf: DeployStrategyConf

  /**
      * 开始时间
注意：此字段可能返回 null，表示取不到有效值。
      */
  StartTime: string

  /**
      * 结束时间
注意：此字段可能返回 null，表示取不到有效值。
      */
  EndTime: string

  /**
      * 当前状态
注意：此字段可能返回 null，表示取不到有效值。
      */
  Status: string

  /**
      * beta分批详情
注意：此字段可能返回 null，表示取不到有效值。
      */
  BetaBatchDetail: DeployServiceBatchDetail

  /**
      * 其他分批详情
注意：此字段可能返回 null，表示取不到有效值。
      */
  OtherBatchDetail: Array<DeployServiceBatchDetail>

  /**
      * 老版本pod列表
注意：此字段可能返回 null，表示取不到有效值。
      */
  OldVersionPodList: DescribeRunPodPage

  /**
      * 当前批次id
注意：此字段可能返回 null，表示取不到有效值。
      */
  CurrentBatchIndex: number

  /**
      * 错误原因
注意：此字段可能返回 null，表示取不到有效值。
      */
  ErrorMessage: string

  /**
      * 当前批次状态
注意：此字段可能返回 null，表示取不到有效值。
      */
  CurrentBatchStatus: string
}

/**
 * DescribeDeployApplicationDetail请求参数结构体
 */
export interface DescribeDeployApplicationDetailRequest {
  /**
   * 服务id
   */
  ApplicationId?: string

  /**
   * 环境id
   */
  EnvironmentId?: string
}

/**
 * DescribeDeployApplicationDetail返回参数结构体
 */
export interface DescribeDeployApplicationDetailResponse {
  /**
   * 分批发布结果详情
   */
  Result: TemDeployApplicationDetailInfo

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 分批发布单批次详情
 */
export interface DeployServiceBatchDetail {
  /**
      * 旧实例列表
注意：此字段可能返回 null，表示取不到有效值。
      */
  OldPodList?: DeployServicePodDetail

  /**
      * 新实例列表
注意：此字段可能返回 null，表示取不到有效值。
      */
  NewPodList?: DeployServicePodDetail

  /**
      * 当前批次状态："WaitForTimeExceed", "WaitForResume", "Deploying", "Finish", "NotStart"
注意：此字段可能返回 null，表示取不到有效值。
      */
  BatchStatus?: string

  /**
      * 该批次预计旧实例数量
注意：此字段可能返回 null，表示取不到有效值。
      */
  PodNum?: number

  /**
      * 批次id
注意：此字段可能返回 null，表示取不到有效值。
      */
  BatchIndex?: number
}

/**
 * 版本pod列表
 */
export interface DescribeRunPodPage {
  /**
   * 分页下标
   */
  Offset: number

  /**
   * 单页条数
   */
  Limit: number

  /**
   * 总数
   */
  TotalCount: number

  /**
   * 请求id
   */
  RequestId: string

  /**
   * 条目
   */
  PodList: Array<RunVersionPod>
}

/**
 * 分批发布单批次详情
 */
export interface DeployServicePodDetail {
  /**
      * pod Id
注意：此字段可能返回 null，表示取不到有效值。
      */
  PodId?: string

  /**
      * pod状态
注意：此字段可能返回 null，表示取不到有效值。
      */
  PodStatus?: Array<string>

  /**
      * pod版本
注意：此字段可能返回 null，表示取不到有效值。
      */
  PodVersion?: string

  /**
      * pod创建时间
注意：此字段可能返回 null，表示取不到有效值。
      */
  CreateTime?: string

  /**
      * pod所在可用区
注意：此字段可能返回 null，表示取不到有效值。
      */
  Zone?: string
}
