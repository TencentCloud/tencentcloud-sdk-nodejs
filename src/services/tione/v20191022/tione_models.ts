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
 * 输出数据配置
 */
export interface OutputDataConfig {
  /**
      * cos输出桶
注意：此字段可能返回 null，表示取不到有效值。
      */
  CosOutputBucket?: string

  /**
      * cos输出key前缀
注意：此字段可能返回 null，表示取不到有效值。
      */
  CosOutputKeyPrefix?: string

  /**
      * 文件系统输出，如果指定了文件系统，那么Cos输出会被忽略
注意：此字段可能返回 null，表示取不到有效值。
      */
  FileSystemDataSource?: FileSystemDataSource
}

/**
 * StopTrainingJob返回参数结构体
 */
export interface StopTrainingJobResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 计费标签
 */
export interface BillingLabel {
  /**
      * 计费项标识
注意：此字段可能返回 null，表示取不到有效值。
      */
  Label: string

  /**
   * 存储大小
   */
  VolumeSize: number

  /**
      * 计费状态
None: 不计费
StorageOnly: 仅存储计费
Computing: 计算和存储都计费
      */
  Status: string
}

/**
 * 环境变量
 */
export interface EnvConfig {
  /**
   * 名称
   */
  Name: string

  /**
   * 值
   */
  Value: string
}

/**
 * CreateNotebookInstance请求参数结构体
 */
export interface CreateNotebookInstanceRequest {
  /**
      * Notebook实例名称，不能超过63个字符
规则：“^\[a-zA-Z0-9\](-\*\[a-zA-Z0-9\])\*$”
      */
  NotebookInstanceName: string

  /**
      * Notebook算力类型
参考https://cloud.tencent.com/document/product/851/41239
      */
  InstanceType: string

  /**
      * 数据卷大小(GB)
用户持久化Notebook实例的数据
      */
  VolumeSizeInGB: number

  /**
      * 外网访问权限，可取值Enabled/Disabled
开启后，Notebook实例可以具有访问外网80，443端口的权限
      */
  DirectInternetAccess?: string

  /**
      * Root用户权限，可取值Enabled/Disabled
开启后，Notebook实例可以切换至root用户执行命令
      */
  RootAccess?: string

  /**
      * 子网ID
如果需要Notebook实例访问VPC内的资源，则需要选择对应的子网
      */
  SubnetId?: string

  /**
      * 生命周期脚本名称
必须是已存在的生命周期脚本，具体参考https://cloud.tencent.com/document/product/851/43140
      */
  LifecycleScriptsName?: string

  /**
      * 默认存储库名称
可以是已创建的存储库名称或者已https://开头的公共git库
参考https://cloud.tencent.com/document/product/851/43139
      */
  DefaultCodeRepository?: string

  /**
      * 其他存储库列表
每个元素可以是已创建的存储库名称或者已https://开头的公共git库
参考https://cloud.tencent.com/document/product/851/43139
      */
  AdditionalCodeRepositories?: Array<string>

  /**
      * 已弃用，请使用ClsConfig配置。
是否开启CLS日志服务，可取值Enabled/Disabled，默认为Disabled
开启后，Notebook运行的日志会收集到CLS中，CLS会产生费用，请根据需要选择
      */
  ClsAccess?: string

  /**
      * 自动停止配置
选择定时停止Notebook实例
      */
  StoppingCondition?: StoppingCondition

  /**
      * 自动停止，可取值Enabled/Disabled
取值为Disabled的时候StoppingCondition将被忽略
取值为Enabled的时候读取StoppingCondition作为自动停止的配置
      */
  AutoStopping?: string

  /**
   * 接入日志的配置，默认接入免费日志
   */
  ClsConfig?: ClsConfig
}

/**
 * DescribeNotebookSummary请求参数结构体
 */
export type DescribeNotebookSummaryRequest = null

/**
 *  二级状态流水
 */
export interface SecondaryStatusTransition {
  /**
      * 状态开始时间
注意：此字段可能返回 null，表示取不到有效值。
      */
  StartTime: string

  /**
      * 状态结束时间
注意：此字段可能返回 null，表示取不到有效值。
      */
  EndTime: string

  /**
      * 状态名
注意：此字段可能返回 null，表示取不到有效值。
      */
  Status: string

  /**
      * 状态详情
注意：此字段可能返回 null，表示取不到有效值。
      */
  StatusMessage: string
}

/**
 * DescribeNotebookInstance请求参数结构体
 */
export interface DescribeNotebookInstanceRequest {
  /**
      * Notebook实例名称
规则：“^\[a-zA-Z0-9\](-\*\[a-zA-Z0-9\])\*$”
      */
  NotebookInstanceName: string
}

/**
 * DeleteNotebookInstance返回参数结构体
 */
export interface DeleteNotebookInstanceResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * notebook实例概览
 */
export interface NotebookInstanceSummary {
  /**
      * 创建时间
注意：此字段可能返回 null，表示取不到有效值。
      */
  CreationTime: string

  /**
      * 最近修改时间
注意：此字段可能返回 null，表示取不到有效值。
      */
  LastModifiedTime: string

  /**
      * notebook实例名字
注意：此字段可能返回 null，表示取不到有效值。
      */
  NotebookInstanceName: string

  /**
      * notebook实例状态，取值范围：
Pending: 创建中
Inservice: 运行中
Stopping: 停止中
Stopped: 已停止
Failed: 失败
注意：此字段可能返回 null，表示取不到有效值。
      */
  NotebookInstanceStatus: string

  /**
      * 算力类型
注意：此字段可能返回 null，表示取不到有效值。
      */
  InstanceType: string

  /**
      * 实例ID
注意：此字段可能返回 null，表示取不到有效值。
      */
  InstanceId: string

  /**
      * 启动时间
注意：此字段可能返回 null，表示取不到有效值。
      */
  StartupTime: string

  /**
      * 运行截止时间
注意：此字段可能返回 null，表示取不到有效值。
      */
  Deadline: string

  /**
      * 自动停止配置
注意：此字段可能返回 null，表示取不到有效值。
      */
  StoppingCondition: StoppingCondition

  /**
      * 是否是预付费实例
注意：此字段可能返回 null，表示取不到有效值。
      */
  Prepay: boolean

  /**
      * 计费标识
注意：此字段可能返回 null，表示取不到有效值。
      */
  BillingLabel: BillingLabel

  /**
      * 运行时长，秒
注意：此字段可能返回 null，表示取不到有效值。
      */
  RuntimeInSeconds: number

  /**
      * 剩余时长，秒
注意：此字段可能返回 null，表示取不到有效值。
      */
  RemainTimeInSeconds: number
}

/**
 * 存储库Git相关配置
 */
export interface GitConfig {
  /**
   * git地址
   */
  RepositoryUrl: string

  /**
      * 代码分支
注意：此字段可能返回 null，表示取不到有效值。
      */
  Branch?: string
}

/**
 * 存储库列表
 */
export interface CodeRepoSummary {
  /**
   * 创建时间
   */
  CreationTime: string

  /**
   * 更新时间
   */
  LastModifiedTime: string

  /**
   * 存储库名称
   */
  CodeRepositoryName: string

  /**
   * Git配置
   */
  GitConfig: GitConfig

  /**
   * 是否有Git凭证
   */
  NoSecret: boolean
}

/**
 * 计算资源配置
 */
export interface ResourceConfig {
  /**
      * 计算实例数量
注意：此字段可能返回 null，表示取不到有效值。
      */
  InstanceCount: number

  /**
      * 计算实例类型
注意：此字段可能返回 null，表示取不到有效值。
      */
  InstanceType: string

  /**
      * 挂载CBS大小（GB）
注意：此字段可能返回 null，表示取不到有效值。
      */
  VolumeSizeInGB?: number
}

/**
 * DeleteNotebookLifecycleScript返回参数结构体
 */
export interface DeleteNotebookLifecycleScriptResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeNotebookLifecycleScripts请求参数结构体
 */
export interface DescribeNotebookLifecycleScriptsRequest {
  /**
   * 偏移量，默认为0
   */
  Offset?: number

  /**
   * 返回数量，默认为20
   */
  Limit?: number

  /**
      * 过滤条件。
instance-name - String - 是否必填：否 -（过滤条件）按照名称过滤。
search-by-name - String - 是否必填：否 -（过滤条件）按照名称检索，模糊匹配。
      */
  Filters?: Array<Filter>

  /**
      * 排序规则。默认取Descending
Descending 按更新时间降序
Ascending 按更新时间升序
      */
  SortOrder?: string
}

/**
 * Git凭证
 */
export interface GitSecret {
  /**
   * 无秘钥，默认选项
   */
  NoSecret?: boolean

  /**
      * Git用户名密码base64编码后的字符串
编码前的内容应为Json字符串，如
{"UserName": "用户名", "Password":"密码"}
      */
  Secret?: string
}

/**
 * DeleteCodeRepository请求参数结构体
 */
export interface DeleteCodeRepositoryRequest {
  /**
   * 存储库名称
   */
  CodeRepositoryName: string
}

/**
 * DescribeCodeRepository返回参数结构体
 */
export interface DescribeCodeRepositoryResponse {
  /**
   * 创建时间
   */
  CreationTime?: string

  /**
   * 更新时间
   */
  LastModifiedTime?: string

  /**
   * 存储库名称
   */
  CodeRepositoryName?: string

  /**
   * Git存储配置
   */
  GitConfig?: GitConfig

  /**
   * 是否有Git凭证
   */
  NoSecret?: boolean

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 输入数据配置
 */
export interface InputDataConfig {
  /**
      * 通道名
注意：此字段可能返回 null，表示取不到有效值。
      */
  ChannelName?: string

  /**
      * 数据源配置
注意：此字段可能返回 null，表示取不到有效值。
      */
  DataSource?: DataSource

  /**
      * 输入类型
注意：此字段可能返回 null，表示取不到有效值。
      */
  InputMode?: string

  /**
      * 文件类型
注意：此字段可能返回 null，表示取不到有效值。
      */
  ContentType?: string
}

/**
 * StartNotebookInstance返回参数结构体
 */
export interface StartNotebookInstanceResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * UpdateCodeRepository返回参数结构体
 */
export interface UpdateCodeRepositoryResponse {
  /**
   * 存储库名称
   */
  CodeRepositoryName?: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateNotebookInstance返回参数结构体
 */
export interface CreateNotebookInstanceResponse {
  /**
   * Notebook实例名字
   */
  NotebookInstanceName?: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 文件系统输入数据源
 */
export interface FileSystemDataSource {
  /**
      * 文件系统目录
注意：此字段可能返回 null，表示取不到有效值。
      */
  DirectoryPath?: string

  /**
      * 文件系统类型
注意：此字段可能返回 null，表示取不到有效值。
      */
  FileSystemType?: string

  /**
      * 文件系统访问模式
注意：此字段可能返回 null，表示取不到有效值。
      */
  FileSystemAccessMode?: string

  /**
      * 文件系统ID
注意：此字段可能返回 null，表示取不到有效值。
      */
  FileSystemId?: string
}

/**
 * notebook生命周期脚本实例概览
 */
export interface NotebookLifecycleScriptsSummary {
  /**
   * notebook生命周期脚本名称
   */
  NotebookLifecycleScriptsName: string

  /**
   * 创建时间
   */
  CreationTime: string

  /**
   * 修改时间
   */
  LastModifiedTime: string
}

/**
 * StopTrainingJob请求参数结构体
 */
export interface StopTrainingJobRequest {
  /**
   * 训练任务名称
   */
  TrainingJobName: string
}

/**
 * UpdateNotebookInstance返回参数结构体
 */
export interface UpdateNotebookInstanceResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 接入CLS服务的配置
 */
export interface ClsConfig {
  /**
   * 接入类型，可选项为free、customer
   */
  Type: string

  /**
   * 自定义CLS的日志集ID，只有当Type为customer时生效
   */
  LogSetId?: string

  /**
   * 自定义CLS的日志主题ID，只有当Type为customer时生效
   */
  TopicId?: string
}

/**
 * UpdateNotebookLifecycleScript请求参数结构体
 */
export interface UpdateNotebookLifecycleScriptRequest {
  /**
   * notebook生命周期脚本名称
   */
  NotebookLifecycleScriptsName: string

  /**
      * 创建脚本，base64编码
base64后的脚本长度不能超过16384个字符
      */
  CreateScript?: string

  /**
      * 启动脚本，base64编码
base64后的脚本长度不能超过16384个字符
      */
  StartScript?: string
}

/**
 * UpdateNotebookInstance请求参数结构体
 */
export interface UpdateNotebookInstanceRequest {
  /**
      * Notebook实例名称
规则：“^\[a-zA-Z0-9\](-\*\[a-zA-Z0-9\])\*$”
      */
  NotebookInstanceName: string

  /**
   * 角色的资源描述
   */
  RoleArn?: string

  /**
   * Root访问权限
   */
  RootAccess?: string

  /**
   * 数据卷大小(GB)
   */
  VolumeSizeInGB?: number

  /**
   * 算力资源类型
   */
  InstanceType?: string

  /**
   * notebook生命周期脚本名称
   */
  LifecycleScriptsName?: string

  /**
      * 是否解绑生命周期脚本，默认 false。
该值为true时，LifecycleScriptsName将被忽略
      */
  DisassociateLifecycleScript?: boolean

  /**
      * 默认存储库名称
可以是已创建的存储库名称或者已https://开头的公共git库
      */
  DefaultCodeRepository?: string

  /**
      * 其他存储库列表
每个元素可以是已创建的存储库名称或者已https://开头的公共git库
      */
  AdditionalCodeRepositories?: Array<string>

  /**
      * 是否取消关联默认存储库，默认false
该值为true时，DefaultCodeRepository将被忽略
      */
  DisassociateDefaultCodeRepository?: boolean

  /**
      * 是否取消关联其他存储库，默认false
该值为true时，AdditionalCodeRepositories将被忽略
      */
  DisassociateAdditionalCodeRepositories?: boolean

  /**
   * 已弃用，请使用ClsConfig配置。是否开启CLS日志服务，可取值Enabled/Disabled
   */
  ClsAccess?: string

  /**
      * 自动停止，可取值Enabled/Disabled
取值为Disabled的时候StoppingCondition将被忽略
取值为Enabled的时候读取StoppingCondition作为自动停止的配置
      */
  AutoStopping?: string

  /**
   * 自动停止配置，只在AutoStopping为Enabled的时候生效
   */
  StoppingCondition?: StoppingCondition

  /**
   * 接入日志的配置，默认使用免费日志服务。
   */
  ClsConfig?: ClsConfig
}

/**
 * CreatePresignedNotebookInstanceUrl请求参数结构体
 */
export interface CreatePresignedNotebookInstanceUrlRequest {
  /**
      * Notebook实例名称
规则：“^\[a-zA-Z0-9\](-\*\[a-zA-Z0-9\])\*$”
      */
  NotebookInstanceName: string

  /**
   * session有效时间，秒，取值范围[1800, 43200]
   */
  SessionExpirationDurationInSeconds?: number
}

/**
 * CreateNotebookLifecycleScript请求参数结构体
 */
export interface CreateNotebookLifecycleScriptRequest {
  /**
   * Notebook生命周期脚本名称
   */
  NotebookLifecycleScriptsName: string

  /**
      * 创建脚本，base64编码
base64后的脚本长度不能超过16384个字符
      */
  CreateScript?: string

  /**
      * 启动脚本，base64编码
base64后的脚本长度不能超过16384个字符
      */
  StartScript?: string
}

/**
 * CreateCodeRepository请求参数结构体
 */
export interface CreateCodeRepositoryRequest {
  /**
   * 存储库名称
   */
  CodeRepositoryName: string

  /**
   * Git相关配置
   */
  GitConfig: GitConfig

  /**
   * Git凭证
   */
  GitSecret: GitSecret
}

/**
 * DescribeNotebookInstances请求参数结构体
 */
export interface DescribeNotebookInstancesRequest {
  /**
   * 偏移量
   */
  Offset?: number

  /**
   * 限制数目
   */
  Limit?: number

  /**
      * 排序规则。默认取Descending
Descending 按更新时间降序
Ascending 按更新时间升序
      */
  SortOrder?: string

  /**
      * 过滤条件。
instance-name - String - 是否必填：否 -（过滤条件）按照名称过滤。
search-by-name - String - 是否必填：否 -（过滤条件）按照名称检索，模糊匹配。
lifecycle-name - String - 是否必填：否 -（过滤条件）按照生命周期脚本名称过滤。
default-code-repo-name - String - 是否必填：否 -（过滤条件）按照默认存储库名称过滤。
additional-code-repo-name - String - 是否必填：否 -（过滤条件）按照其他存储库名称过滤。
billing-status - String - 是否必填：否 - （过滤条件）按照计费状态过滤，可取以下值
   StorageOnly：仅存储计费的实例
   Computing：计算和存储都计费的实例
      */
  Filters?: Array<Filter>

  /**
   * 【废弃字段】排序字段
   */
  SortBy?: string
}

/**
 * DescribeTrainingJobs返回参数结构体
 */
export interface DescribeTrainingJobsResponse {
  /**
   * 训练任务列表
   */
  TrainingJobSet?: Array<TrainingJobSummary>

  /**
   * 训练任务总数目
   */
  TotalCount?: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 终止条件
 */
export interface StoppingCondition {
  /**
      * 最长运行运行时间（秒）
注意：此字段可能返回 null，表示取不到有效值。
      */
  MaxRuntimeInSeconds?: number

  /**
      * 最长等待运行时间（秒）
注意：此字段可能返回 null，表示取不到有效值。
      */
  MaxWaitTimeInSeconds?: number
}

/**
 * DescribeCodeRepositories返回参数结构体
 */
export interface DescribeCodeRepositoriesResponse {
  /**
   * 存储库总数目
   */
  TotalCount?: number

  /**
      * 存储库列表
注意：此字段可能返回 null，表示取不到有效值。
      */
  CodeRepoSet?: Array<CodeRepoSummary>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeNotebookInstances返回参数结构体
 */
export interface DescribeNotebookInstancesResponse {
  /**
   * Notebook实例列表
   */
  NotebookInstanceSet?: Array<NotebookInstanceSummary>

  /**
   * Notebook实例总数目
   */
  TotalCount?: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeCodeRepository请求参数结构体
 */
export interface DescribeCodeRepositoryRequest {
  /**
   * 存储库名称
   */
  CodeRepositoryName: string
}

/**
 * CreateTrainingJob返回参数结构体
 */
export interface CreateTrainingJobResponse {
  /**
   * 训练任务名称
   */
  TrainingJobName?: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeNotebookInstance返回参数结构体
 */
export interface DescribeNotebookInstanceResponse {
  /**
   * Notebook实例名称
   */
  NotebookInstanceName?: string

  /**
      * Notebook算力资源类型
注意：此字段可能返回 null，表示取不到有效值。
      */
  InstanceType?: string

  /**
      * 角色的资源描述
注意：此字段可能返回 null，表示取不到有效值。
      */
  RoleArn?: string

  /**
      * 外网访问权限
注意：此字段可能返回 null，表示取不到有效值。
      */
  DirectInternetAccess?: string

  /**
      * Root用户权限
注意：此字段可能返回 null，表示取不到有效值。
      */
  RootAccess?: string

  /**
      * 子网ID
注意：此字段可能返回 null，表示取不到有效值。
      */
  SubnetId?: string

  /**
      * 数据卷大小(GB)
注意：此字段可能返回 null，表示取不到有效值。
      */
  VolumeSizeInGB?: number

  /**
      * 创建失败原因
注意：此字段可能返回 null，表示取不到有效值。
      */
  FailureReason?: string

  /**
      * Notebook实例创建时间
注意：此字段可能返回 null，表示取不到有效值。
      */
  CreationTime?: string

  /**
      * Notebook实例最近修改时间
注意：此字段可能返回 null，表示取不到有效值。
      */
  LastModifiedTime?: string

  /**
      * Notebook实例日志链接
注意：此字段可能返回 null，表示取不到有效值。
      */
  LogUrl?: string

  /**
      * Notebook实例状态

Pending: 创建中
Inservice: 运行中
Stopping: 停止中
Stopped: 已停止
Failed: 失败
注意：此字段可能返回 null，表示取不到有效值。
      */
  NotebookInstanceStatus?: string

  /**
      * Notebook实例ID
注意：此字段可能返回 null，表示取不到有效值。
      */
  InstanceId?: string

  /**
      * notebook生命周期脚本名称
注意：此字段可能返回 null，表示取不到有效值。
      */
  LifecycleScriptsName?: string

  /**
      * 默认存储库名称
可以是已创建的存储库名称或者已https://开头的公共git库
注意：此字段可能返回 null，表示取不到有效值。
      */
  DefaultCodeRepository?: string

  /**
      * 其他存储库列表
每个元素可以是已创建的存储库名称或者已https://开头的公共git库
注意：此字段可能返回 null，表示取不到有效值。
      */
  AdditionalCodeRepositories?: Array<string>

  /**
      * 是否开启CLS日志服务
注意：此字段可能返回 null，表示取不到有效值。
      */
  ClsAccess?: string

  /**
      * 是否预付费实例
注意：此字段可能返回 null，表示取不到有效值。
      */
  Prepay?: boolean

  /**
      * 实例运行截止时间
注意：此字段可能返回 null，表示取不到有效值。
      */
  Deadline?: string

  /**
      * 自动停止配置
注意：此字段可能返回 null，表示取不到有效值。
      */
  StoppingCondition?: StoppingCondition

  /**
      * Cls配置
注意：此字段可能返回 null，表示取不到有效值。
      */
  ClsConfig?: ClsConfig

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeTrainingJob请求参数结构体
 */
export interface DescribeTrainingJobRequest {
  /**
   * 训练任务名称
   */
  TrainingJobName: string
}

/**
 * 训练任务概要
 */
export interface TrainingJobSummary {
  /**
      * 任务创建时间
注意：此字段可能返回 null，表示取不到有效值。
      */
  CreationTime: string

  /**
      * 最近修改时间
注意：此字段可能返回 null，表示取不到有效值。
      */
  LastModifiedTime: string

  /**
      * 训练任务名
注意：此字段可能返回 null，表示取不到有效值。
      */
  TrainingJobName: string

  /**
      * 训练任务状态，取值范围
InProgress：运行中
Completed: 已完成
Failed: 失败
Stopping: 停止中
Stopped：已停止
注意：此字段可能返回 null，表示取不到有效值。
      */
  TrainingJobStatus: string

  /**
      * 完成时间
注意：此字段可能返回 null，表示取不到有效值。
      */
  TrainingEndTime: string

  /**
      * 算了实例Id
注意：此字段可能返回 null，表示取不到有效值。
      */
  InstanceId: string

  /**
      * 资源配置
注意：此字段可能返回 null，表示取不到有效值。
      */
  ResourceConfig: ResourceConfig
}

/**
 * 算法配置
 */
export interface AlgorithmSpecification {
  /**
      * 镜像名字
注意：此字段可能返回 null，表示取不到有效值。
      */
  TrainingImageName?: string

  /**
      * 输入模式File|Pipe
注意：此字段可能返回 null，表示取不到有效值。
      */
  TrainingInputMode?: string

  /**
      * 算法名字
注意：此字段可能返回 null，表示取不到有效值。
      */
  AlgorithmName?: string
}

/**
 * cos路径
 */
export interface CosDataSource {
  /**
      * cos桶
注意：此字段可能返回 null，表示取不到有效值。
      */
  Bucket: string

  /**
      * cos文件key
注意：此字段可能返回 null，表示取不到有效值。
      */
  KeyPrefix: string

  /**
      * 分布式数据下载方式
注意：此字段可能返回 null，表示取不到有效值。
      */
  DataDistributionType: string

  /**
      * 数据类型
注意：此字段可能返回 null，表示取不到有效值。
      */
  DataType: string
}

/**
 * DescribeNotebookLifecycleScripts返回参数结构体
 */
export interface DescribeNotebookLifecycleScriptsResponse {
  /**
   * Notebook生命周期脚本列表
   */
  NotebookLifecycleScriptsSet?: Array<NotebookLifecycleScriptsSummary>

  /**
   * Notebook生命周期脚本总数量
   */
  TotalCount?: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeNotebookSummary返回参数结构体
 */
export interface DescribeNotebookSummaryResponse {
  /**
   * 实例总数
   */
  AllInstanceCnt?: number

  /**
   * 计费实例总数
   */
  BillingInstanceCnt?: number

  /**
   * 仅存储计费的实例总数
   */
  StorageOnlyBillingInstanceCnt?: number

  /**
   * 计算和存储都计费的实例总数
   */
  ComputingBillingInstanceCnt?: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 过滤器
 */
export interface Filter {
  /**
   * 过滤字段名称
   */
  Name?: string

  /**
   * 过滤字段取值
   */
  Values?: Array<string>
}

/**
 * StopNotebookInstance请求参数结构体
 */
export interface StopNotebookInstanceRequest {
  /**
   * Notebook实例名称
   */
  NotebookInstanceName: string
}

/**
 * DeleteNotebookLifecycleScript请求参数结构体
 */
export interface DeleteNotebookLifecycleScriptRequest {
  /**
   * 生命周期脚本名称
   */
  NotebookLifecycleScriptsName: string

  /**
   * 是否忽略已关联的 notebook 实例强行删除生命周期脚本，默认 false
   */
  Forcible?: boolean
}

/**
 * DescribeNotebookLifecycleScript返回参数结构体
 */
export interface DescribeNotebookLifecycleScriptResponse {
  /**
   * 生命周期脚本名称
   */
  NotebookLifecycleScriptsName?: string

  /**
      * 创建脚本
注意：此字段可能返回 null，表示取不到有效值。
      */
  CreateScript?: string

  /**
      * 启动脚本
注意：此字段可能返回 null，表示取不到有效值。
      */
  StartScript?: string

  /**
   * 创建时间
   */
  CreationTime?: string

  /**
   * 最后修改时间
   */
  LastModifiedTime?: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeTrainingJob返回参数结构体
 */
export interface DescribeTrainingJobResponse {
  /**
   * 算法镜像配置
   */
  AlgorithmSpecification?: AlgorithmSpecification

  /**
   * 任务名称
   */
  TrainingJobName?: string

  /**
      * 算法超级参数
注意：此字段可能返回 null，表示取不到有效值。
      */
  HyperParameters?: string

  /**
   * 输入数据配置
   */
  InputDataConfig?: Array<InputDataConfig>

  /**
   * 输出数据配置
   */
  OutputDataConfig?: OutputDataConfig

  /**
      * 中止条件
注意：此字段可能返回 null，表示取不到有效值。
      */
  StoppingCondition?: StoppingCondition

  /**
   * 计算实例配置
   */
  ResourceConfig?: ResourceConfig

  /**
      * 私有网络配置
注意：此字段可能返回 null，表示取不到有效值。
      */
  VpcConfig?: VpcConfig

  /**
      * 失败原因
注意：此字段可能返回 null，表示取不到有效值。
      */
  FailureReason?: string

  /**
   * 最近修改时间
   */
  LastModifiedTime?: string

  /**
      * 任务开始时间
注意：此字段可能返回 null，表示取不到有效值。
      */
  TrainingStartTime?: string

  /**
      * 任务完成时间
注意：此字段可能返回 null，表示取不到有效值。
      */
  TrainingEndTime?: string

  /**
      * 模型输出配置
注意：此字段可能返回 null，表示取不到有效值。
      */
  ModelArtifacts?: ModelArtifacts

  /**
      * 详细状态，取值范围
Starting：启动中
Downloading: 准备训练数据
Training: 正在训练
Uploading: 上传训练结果
Completed：已完成
Failed: 失败
MaxRuntimeExceeded: 任务超过最大运行时间
Stopping: 停止中
Stopped：已停止
      */
  SecondaryStatus?: string

  /**
      * 详细状态事件记录
注意：此字段可能返回 null，表示取不到有效值。
      */
  SecondaryStatusTransitions?: Array<SecondaryStatusTransition>

  /**
      * 角色名称
注意：此字段可能返回 null，表示取不到有效值。
      */
  RoleName?: string

  /**
      * 训练任务状态，取值范围
InProgress：运行中
Completed: 已完成
Failed: 失败
Stopping: 停止中
Stopped：已停止
      */
  TrainingJobStatus?: string

  /**
      * 训练任务日志链接
注意：此字段可能返回 null，表示取不到有效值。
      */
  LogUrl?: string

  /**
   * 训练任务实例ID
   */
  InstanceId?: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * StopNotebookInstance返回参数结构体
 */
export interface StopNotebookInstanceResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * UpdateCodeRepository请求参数结构体
 */
export interface UpdateCodeRepositoryRequest {
  /**
   * 查询存储库名称
   */
  CodeRepositoryName: string

  /**
   * Git凭证
   */
  GitSecret?: GitSecret
}

/**
 * CreateTrainingJob请求参数结构体
 */
export interface CreateTrainingJobRequest {
  /**
   * 算法镜像配置
   */
  AlgorithmSpecification: AlgorithmSpecification

  /**
   * 输出数据配置
   */
  OutputDataConfig: OutputDataConfig

  /**
   * 资源实例配置
   */
  ResourceConfig: ResourceConfig

  /**
   * 训练任务名称
   */
  TrainingJobName: string

  /**
   * 输入数据配置
   */
  InputDataConfig?: Array<InputDataConfig>

  /**
   * 中止条件
   */
  StoppingCondition?: StoppingCondition

  /**
   * 私有网络配置
   */
  VpcConfig?: VpcConfig

  /**
   * 算法超级参数
   */
  HyperParameters?: string

  /**
   * 环境变量配置
   */
  EnvConfig?: Array<EnvConfig>

  /**
   * 角色名称
   */
  RoleName?: string

  /**
      * 在资源不足（ResourceInsufficient）时后台不定时尝试重新创建训练任务。可取值Enabled/Disabled
默认值为Disabled即不重新尝试。设为Enabled时重新尝试有一定的时间期限，定义在 StoppingCondition 中 MaxWaitTimeInSecond中 ，默认值为1天，超过该期限创建失败。
      */
  RetryWhenResourceInsufficient?: string
}

/**
 * DeleteNotebookInstance请求参数结构体
 */
export interface DeleteNotebookInstanceRequest {
  /**
   * Notebook实例名称
   */
  NotebookInstanceName: string
}

/**
 * DescribeNotebookLifecycleScript请求参数结构体
 */
export interface DescribeNotebookLifecycleScriptRequest {
  /**
   * 生命周期脚本名称
   */
  NotebookLifecycleScriptsName: string
}

/**
 * VPC配置
 */
export interface VpcConfig {
  /**
      * 安全组id
注意：此字段可能返回 null，表示取不到有效值。
      */
  SecurityGroupIds: Array<string>

  /**
      * 子网id
注意：此字段可能返回 null，表示取不到有效值。
      */
  SubnetId: string
}

/**
 * CreateNotebookLifecycleScript返回参数结构体
 */
export interface CreateNotebookLifecycleScriptResponse {
  /**
   * 生命周期脚本名称
   */
  NotebookLifecycleScriptsName?: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreatePresignedNotebookInstanceUrl返回参数结构体
 */
export interface CreatePresignedNotebookInstanceUrlResponse {
  /**
   * 授权url
   */
  AuthorizedUrl?: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * UpdateNotebookLifecycleScript返回参数结构体
 */
export interface UpdateNotebookLifecycleScriptResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeTrainingJobs请求参数结构体
 */
export interface DescribeTrainingJobsRequest {
  /**
   * 偏移量
   */
  Offset?: number

  /**
   * 限制数目
   */
  Limit?: number

  /**
   * 创建时间晚于
   */
  CreationTimeAfter?: string

  /**
   * 创建时间早于
   */
  CreationTimeBefore?: string

  /**
   * 根据名称过滤
   */
  NameContains?: string

  /**
   * 根据状态过滤
   */
  StatusEquals?: string

  /**
      * 过滤条件。
instance-name - String - 是否必填：否 -（过滤条件）按照名称过滤。
search-by-name - String - 是否必填：否 -（过滤条件）按照名称检索，模糊匹配。
      */
  Filters?: Array<Filter>
}

/**
 * StartNotebookInstance请求参数结构体
 */
export interface StartNotebookInstanceRequest {
  /**
   * Notebook实例名称
   */
  NotebookInstanceName: string

  /**
      * 自动停止，可取值Enabled/Disabled
取值为Disabled的时候StoppingCondition将被忽略
取值为Enabled的时候读取StoppingCondition作为自动停止的配置
      */
  AutoStopping?: string

  /**
   * 自动停止配置，只在AutoStopping为Enabled的时候生效
   */
  StoppingCondition?: StoppingCondition
}

/**
 * CreateCodeRepository返回参数结构体
 */
export interface CreateCodeRepositoryResponse {
  /**
   * 存储库名称
   */
  CodeRepositoryName?: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeCodeRepositories请求参数结构体
 */
export interface DescribeCodeRepositoriesRequest {
  /**
   * 偏移量，默认为0
   */
  Offset?: number

  /**
   * 返回数量，默认为20
   */
  Limit?: number

  /**
      * 过滤条件。
instance-name - String - 是否必填：否 -（过滤条件）按照名称过滤。
search-by-name - String - 是否必填：否 -（过滤条件）按照名称检索，模糊匹配。
      */
  Filters?: Array<Filter>

  /**
      * 排序规则。默认取Descending
Descending 按更新时间降序
Ascending 按更新时间升序
      */
  SortOrder?: string
}

/**
 * 数据源
 */
export interface DataSource {
  /**
      * cos数据源
注意：此字段可能返回 null，表示取不到有效值。
      */
  CosDataSource?: CosDataSource

  /**
      * 文件系统输入源
注意：此字段可能返回 null，表示取不到有效值。
      */
  FileSystemDataSource?: FileSystemDataSource
}

/**
 * 模型输出
 */
export interface ModelArtifacts {
  /**
      * cos输出路径
注意：此字段可能返回 null，表示取不到有效值。
      */
  CosModelArtifacts: string
}

/**
 * DeleteCodeRepository返回参数结构体
 */
export interface DeleteCodeRepositoryResponse {
  /**
   * 存储库名称
   */
  CodeRepositoryName?: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}
