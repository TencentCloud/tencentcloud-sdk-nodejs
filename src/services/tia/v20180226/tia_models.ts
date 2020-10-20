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
 * DeleteModel请求参数结构体
 */
export interface DeleteModelRequest {
  /**
   * 要删除的模型名称
   */
  Name: string

  /**
   * 要删除的模型所在的集群名称，`集群模式` 必填
   */
  Cluster?: string

  /**
   * 模型类型，取值 `serverless` 即为 `无服务器模式`，否则为 `集群模式`
   */
  ServType?: string
}

/**
 * 日志
 */
export interface Log {
  /**
   * 容器名
   */
  ContainerName: string

  /**
   * 日志内容
   */
  Log: string

  /**
   * 空间名
   */
  Namespace: string

  /**
   * Pod Id
   */
  PodId: string

  /**
   * Pod名
   */
  PodName: string

  /**
   * 日志日期，格式为“2018-07-02T09:10:04.916553368Z”
   */
  Time: string
}

/**
 * DeleteJob返回参数结构体
 */
export interface DeleteJobResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateJob请求参数结构体
 */
export interface CreateJobRequest {
  /**
   * 任务名称
   */
  Name: string

  /**
   * 运行任务的集群，详见 [使用集群](https://cloud.tencent.com/document/product/851/17317)
   */
  Cluster: string

  /**
   * 运行任务的环境，详见 [运行环境](https://cloud.tencent.com/document/product/851/17320)
   */
  RuntimeVersion: string

  /**
   * 挂载的路径，支持 NFS，[CFS](https://cloud.tencent.com/product/cfs) 和 [COS](https://cloud.tencent.com/product/cos)，其中 COS 只在 [TI-A 定制环境](https://cloud.tencent.com/document/product/851/17320#ti-a-.E5.AE.9A.E5.88.B6.E7.8E.AF.E5.A2.83) 中支持
   */
  PackageDir?: Array<string>

  /**
   * 任务启动命令
   */
  Command?: Array<string>

  /**
   * 任务启动参数
   */
  Args?: Array<string>

  /**
   * 运行任务的配置信息，详见 [训练规模](https://cloud.tencent.com/document/product/851/17319)
   */
  ScaleTier?: string

  /**
   * Master 机器类型，ScaleTier 取值为 `CUSTOM` 时必填，详见 [训练规模](https://cloud.tencent.com/document/product/851/17319)
   */
  MasterType?: string

  /**
   * Worker 机器类型，ScaleTier 取值为 `CUSTOM` 时必填，详见 [训练规模](https://cloud.tencent.com/document/product/851/17319)
   */
  WorkerType?: string

  /**
   * Parameter server 机器类型，ScaleTier 取值为 `CUSTOM` 时必填,详见 [训练规模](https://cloud.tencent.com/document/product/851/17319)
   */
  ParameterServerType?: string

  /**
   * Worker 机器数量，ScaleTier 取值为 `CUSTOM` 时必填,详见 [训练规模](https://cloud.tencent.com/document/product/851/17319)
   */
  WorkerCount?: number

  /**
   * Parameter server 机器数量，ScaleTier 取值为 `CUSTOM` 时必填,详见 [训练规模](https://cloud.tencent.com/document/product/851/17319)
   */
  ParameterServerCount?: number

  /**
   * 启动 debug 模式，默认为 false
   */
  Debug?: boolean

  /**
   * 运行任务的其他配置信息
   */
  RuntimeConf?: Array<string>
}

/**
 * CreateJob返回参数结构体
 */
export interface CreateJobResponse {
  /**
   * 训练任务信息
   */
  Job?: Job

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * InstallAgent返回参数结构体
 */
export interface InstallAgentResponse {
  /**
   * Agent版本, 用于私有集群的agent安装
   */
  TiaVersion?: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeModel返回参数结构体
 */
export interface DescribeModelResponse {
  /**
   * 模型信息
   */
  Model?: Model

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeModel请求参数结构体
 */
export interface DescribeModelRequest {
  /**
   * 模型名称
   */
  Name: string

  /**
   * 模型所在集群名称，`集群模式` 必填
   */
  Cluster?: string

  /**
   * 模型类型，取值 `serverless` 即为 `无服务器模式`，否则为 `集群模式`
   */
  ServType?: string
}

/**
 * DescribeJob请求参数结构体
 */
export interface DescribeJobRequest {
  /**
   * 任务名称
   */
  Name: string

  /**
   * 运行任务的集群
   */
  Cluster: string
}

/**
 * ListJobs请求参数结构体
 */
export interface ListJobsRequest {
  /**
   * 运行任务的集群
   */
  Cluster: string

  /**
   * 分页参数，返回数量
   */
  Limit?: number

  /**
   * 分页参数，起始位置
   */
  Offset?: number
}

/**
 * 训练任务信息
 */
export interface Job {
  /**
   * 任务名称
   */
  Name: string

  /**
   * 任务创建时间，格式为：2006-01-02 15:04:05.999999999 -0700 MST
   */
  CreateTime: string

  /**
   * 任务开始时间，格式为：2006-01-02 15:04:05.999999999 -0700 MST
   */
  StartTime: string

  /**
   * 任务结束时间，格式为：2006-01-02 15:04:05.999999999 -0700 MST
   */
  EndTime: string

  /**
   * 任务状态，可能的状态为Created（已创建），Running（运行中），Succeeded（运行完成：成功），Failed（运行完成：失败）
   */
  State: string

  /**
   * 任务状态信息
   */
  Message: string

  /**
   * 运行任务的配置信息
   */
  ScaleTier: string

  /**
   * （ScaleTier为Custom时）master机器类型
   */
  MasterType: string

  /**
   * （ScaleTier为Custom时）worker机器类型
   */
  WorkerType: string

  /**
   * （ScaleTier为Custom时）parameter server机器类型
   */
  ParameterServerType: string

  /**
   * （ScaleTier为Custom时）worker机器数量
   */
  WorkerCount: number

  /**
   * （ScaleTier为Custom时）parameter server机器数量
   */
  ParameterServerCount: number

  /**
   * 挂载的路径
   */
  PackageDir: Array<string>

  /**
   * 任务启动命令
   */
  Command: Array<string>

  /**
   * 任务启动参数
   */
  Args: Array<string>

  /**
   * 运行任务的集群
   */
  Cluster: string

  /**
   * 运行任务的环境
   */
  RuntimeVersion: string

  /**
   * 任务删除时间，格式为：2006-01-02 15:04:05.999999999 -0700 MST
   */
  DelTime: string

  /**
   * 创建任务的AppId
   */
  AppId: number

  /**
   * 创建任务的Uin
   */
  Uin: string

  /**
   * 创建任务的Debug模式
   */
  Debug: boolean

  /**
   * Runtime的额外配置信息
   */
  RuntimeConf: Array<string>

  /**
   * 任务Id
   */
  Id: string
}

/**
 * CreateModel返回参数结构体
 */
export interface CreateModelResponse {
  /**
   * 模型的详细信息
   */
  Model?: Model

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ListModels请求参数结构体
 */
export interface ListModelsRequest {
  /**
   * 部署模型的集群， `集群模式` 必填
   */
  Cluster?: string

  /**
   * 分页参数，返回数量上限
   */
  Limit?: number

  /**
   * 分页参数，分页起始位置
   */
  Offset?: number

  /**
   * 部署类型，取值 `serverless` 即为 `无服务器模式`，否则为 `集群模式`。
   */
  ServType?: string
}

/**
 * QueryLogs返回参数结构体
 */
export interface QueryLogsResponse {
  /**
   * 日志查询上下文，用于加载更多日志
   */
  Context?: string

  /**
   * 日志内容列表
   */
  Logs?: Array<Log>

  /**
   * 是否已经返回所有符合条件的日志
   */
  Listover?: boolean

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * InstallAgent请求参数结构体
 */
export interface InstallAgentRequest {
  /**
   * 集群名称
   */
  Cluster: string

  /**
   * Agent版本, 用于私有集群的agent安装，默认为“private-training”
   */
  TiaVersion?: string

  /**
   * 是否允许更新Agent
   */
  Update?: boolean
}

/**
 * ListJobs返回参数结构体
 */
export interface ListJobsResponse {
  /**
   * 训练任务列表
   */
  Jobs?: Array<Job>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * QueryLogs请求参数结构体
 */
export interface QueryLogsRequest {
  /**
   * 任务的名称
   */
  JobName: string

  /**
   * 任务所在集群的名称
   */
  Cluster: string

  /**
   * 查询日志的开始时间，格式：2019-01-01 00:00:00
   */
  StartTime: string

  /**
   * 查询日志的结束时间，格式：2019-01-01 00:00:00
   */
  EndTime: string

  /**
   * 单次要返回的日志条数上限
   */
  Limit: number

  /**
   * 加载更多日志时使用，透传上次返回的 Context 值，获取后续的日志内容；使用 Context 翻页最多能获取 10000 条日志
   */
  Context?: string
}

/**
 * 用于描述模型的详细情况
        "Model": {
            "Name": "test-model",
            "Description": "test-model",
            "Cluster": "ap-beijing",
            "Model": "cos://test-1255502019.cos.ap-shanghai.myqcloud.com/example:/data/mnist",
            "RuntimeVersion": "tiaserv-1.6.0-cpu",
            "CreateTime": "2018-04-26 15:59:25 +0800 CST",
            "State": "Running",
            "ServingUrl": "140.143.51.230",
            "Message": "Deployment does not have minimum availability.",
            "AppId": 1255502019,
            "ServType": "1U2G0P"
        },
 */
export interface Model {
  /**
   * 模型名称
   */
  Name: string

  /**
   * 模型描述
   */
  Description: string

  /**
   * 集群名称
   */
  Cluster: string

  /**
   * 模型地址
   */
  Model: string

  /**
   * 运行环境编号
   */
  RuntimeVersion: string

  /**
   * 模型创建时间
   */
  CreateTime: string

  /**
   * 模型运行状态
   */
  State: string

  /**
   * 提供服务的url
   */
  ServingUrl: string

  /**
   * 相关消息
   */
  Message: string

  /**
   * 编号
   */
  AppId: number

  /**
   * 机型
   */
  ServType: string

  /**
   * 模型暴露方式
   */
  Expose: string

  /**
   * 部署副本数量
   */
  Replicas: number

  /**
   * 模型Id
   */
  Id: string

  /**
   * 创建任务的Uin
   */
  Uin: string

  /**
   * 模型删除时间，格式为：2006-01-02 15:04:05.999999999 -0700 MST
   */
  DelTime: string
}

/**
 * DeleteModel返回参数结构体
 */
export interface DeleteModelResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ListModels返回参数结构体
 */
export interface ListModelsResponse {
  /**
   * Model 数组，用以显示所有模型的信息
   */
  Models?: Array<Model>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteJob请求参数结构体
 */
export interface DeleteJobRequest {
  /**
   * 任务名称
   */
  Name: string

  /**
   * 运行任务的集群
   */
  Cluster: string
}

/**
 * CreateModel请求参数结构体
 */
export interface CreateModelRequest {
  /**
   * 模型名称
   */
  Name: string

  /**
   * 要部署的模型文件路径名
   */
  Model: string

  /**
   * 关于模型的描述
   */
  Description?: string

  /**
   * 部署目标集群的名称，`集群模式` 必填
   */
  Cluster?: string

  /**
   * 运行环境镜像的标签，详见 [Serving 环境](https://cloud.tencent.com/document/product/851/17320#serving-.E7.8E.AF.E5.A2.83)
   */
  RuntimeVersion?: string

  /**
   * 要部署的模型副本数目，`集群模式` 选填
   */
  Replicas?: number

  /**
   * 暴露外网或内网，默认暴露外网，`集群模式` 选填
   */
  Expose?: string

  /**
   * 部署模式，取值 `serverless` 即为 `无服务器模式`，否则为 `集群模式` 下服务的运行规模，形如 `2U4G1P`，详见 [自定义的训练规模](https://cloud.tencent.com/document/product/851/17319#.E8.87.AA.E5.AE.9A.E4.B9.89.E7.9A.84.E8.AE.AD.E7.BB.83.E8.A7.84.E6.A8.A1)
   */
  ServType?: string

  /**
   * `无服务器模式` 可选的其他配置信息，详见 [利用无服务器函数部署](https://cloud.tencent.com/document/product/851/17049#.E5.88.A9.E7.94.A8.E6.97.A0.E6.9C.8D.E5.8A.A1.E5.99.A8.E5.87.BD.E6.95.B0.E9.83.A8.E7.BD.B2)
   */
  RuntimeConf?: Array<string>
}

/**
 * DescribeJob返回参数结构体
 */
export interface DescribeJobResponse {
  /**
   * 训练任务信息
   */
  Job?: Job

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}
