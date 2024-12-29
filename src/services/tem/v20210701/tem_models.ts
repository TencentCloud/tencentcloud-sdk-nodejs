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
 * CreateResource请求参数结构体
 */
export interface CreateResourceRequest {
  /**
   * 环境 Id
   */
  EnvironmentId: string
  /**
   * 资源类型，目前支持文件系统：CFS；注册中心：TSE_SRE
   */
  ResourceType: string
  /**
   * 资源 Id
   */
  ResourceId?: string
  /**
   * 来源渠道
   */
  SourceChannel?: number
  /**
   * 资源来源，目前支持：existing，已有资源；creating，自动创建
   */
  ResourceFrom?: string
  /**
   * 设置 resource 的额外配置
   */
  ResourceConfig?: string
}

/**
 * DescribeConfigData返回参数结构体
 */
export interface DescribeConfigDataResponse {
  /**
   * 配置
   */
  Result?: ConfigData
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 命名空间分页
 */
export interface NamespacePage {
  /**
   * 分页内容
   */
  Records: Array<TemNamespaceInfo>
  /**
   * 总数
   */
  Total: number
  /**
   * 条目数
   */
  Size: number
  /**
   * 页数
   */
  Pages: number
  /**
   * 当前条目
注意：此字段可能返回 null，表示取不到有效值。
   */
  Current: number
}

/**
 * DescribeApplicationInfo返回参数结构体
 */
export interface DescribeApplicationInfoResponse {
  /**
   * 返回结果
   */
  Result?: TemServiceVersionInfo
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyIngress返回参数结构体
 */
export interface ModifyIngressResponse {
  /**
   * 创建成功
注意：此字段可能返回 null，表示取不到有效值。
   */
  Result: boolean
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteApplicationService请求参数结构体
 */
export interface DeleteApplicationServiceRequest {
  /**
   * 服务id
   */
  ApplicationId: string
  /**
   * 环境ID
   */
  EnvironmentId: string
  /**
   * 访问方式服务名
   */
  ServiceName: string
  /**
   * 来源渠道
   */
  SourceChannel?: number
}

/**
 * RestartApplicationPod请求参数结构体
 */
export interface RestartApplicationPodRequest {
  /**
   * 环境id
   */
  EnvironmentId: string
  /**
   * 应用id
   */
  ApplicationId: string
  /**
   * 名字
   */
  PodName: string
  /**
   * 单页条数
   */
  Limit?: number
  /**
   * 分页下标
   */
  Offset?: number
  /**
   * pod状态
   */
  Status?: string
  /**
   * 来源渠道
   */
  SourceChannel?: number
}

/**
 * DestroyLogConfig返回参数结构体
 */
export interface DestroyLogConfigResponse {
  /**
   * 返回结果
   */
  Result?: boolean
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 查询过滤器
 */
export interface QueryFilter {
  /**
   * 查询字段名称
   */
  Name?: string
  /**
   * 查询字段值
   */
  Value?: Array<string>
}

/**
 * ResumeDeployApplication返回参数结构体
 */
export interface ResumeDeployApplicationResponse {
  /**
   * 是否成功
   */
  Result?: boolean
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 存储卷配置
 */
export interface StorageConf {
  /**
   * 存储卷名称
   */
  StorageVolName: string
  /**
   * 存储卷路径
   */
  StorageVolPath: string
  /**
   * 存储卷IP
注意：此字段可能返回 null，表示取不到有效值。
   */
  StorageVolIp?: string
}

/**
 * DescribeApplicationPods请求参数结构体
 */
export interface DescribeApplicationPodsRequest {
  /**
   * 环境id
   */
  EnvironmentId: string
  /**
   * 应用id
   */
  ApplicationId: string
  /**
   * 单页条数，默认值20
   */
  Limit?: number
  /**
   * 分页下标，默认值0
   */
  Offset?: number
  /**
   * 实例状态 
- Running 
- Pending 
- Error
   */
  Status?: string
  /**
   * 实例名字
   */
  PodName?: string
  /**
   * 来源渠道
   */
  SourceChannel?: number
}

/**
 * ingress tls 配置
 */
export interface IngressTls {
  /**
   * host 数组, 空数组表示全部域名的默认证书
   */
  Hosts: Array<string>
  /**
   * secret name，如使用证书，则填空字符串
   */
  SecretName: string
  /**
   * SSL Certificate Id
   */
  CertificateId?: string
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
  /**
   * webshell地址
注意：此字段可能返回 null，表示取不到有效值。
   */
  Webshell?: string
  /**
   * 状态
注意：此字段可能返回 null，表示取不到有效值。
   */
  Status?: string
}

/**
 * 日志输出配置
 */
export interface LogOutputConf {
  /**
   * 日志消费端类型
   */
  OutputType: string
  /**
   * cls日志集
   */
  ClsLogsetName?: string
  /**
   * cls日志主题
   */
  ClsLogTopicId?: string
  /**
   * cls日志集id
   */
  ClsLogsetId?: string
  /**
   * cls日志名称
   */
  ClsLogTopicName?: string
}

/**
 * DeleteIngress返回参数结构体
 */
export interface DeleteIngressResponse {
  /**
   * 是否删除成功
   */
  Result?: boolean
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteApplication返回参数结构体
 */
export interface DeleteApplicationResponse {
  /**
   * 返回结果
   */
  Result?: boolean
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyApplicationAutoscaler返回参数结构体
 */
export interface ModifyApplicationAutoscalerResponse {
  /**
   * 是否成功
注意：此字段可能返回 null，表示取不到有效值。
   */
  Result?: boolean
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * RollingUpdateApplicationByVersion请求参数结构体
 */
export interface RollingUpdateApplicationByVersionRequest {
  /**
   * 应用ID
   */
  ApplicationId: string
  /**
   * 环境ID
   */
  EnvironmentId: string
  /**
   * 更新版本，IMAGE 部署为 tag 值；JAR/WAR 部署 为 Version
   */
  DeployVersion: string
  /**
   * JAR/WAR 包名，仅 JAR/WAR 部署时必填
   */
  PackageName?: string
  /**
   * 请求来源平台，含 IntelliJ，Coding
   */
  From?: string
  /**
   * 部署策略，AUTO 为全自动；BETA 为小批量验证后自动；MANUAL 为全手动；
   */
  DeployStrategyType?: string
  /**
   * 发布批次数
   */
  TotalBatchCount?: number
  /**
   * 批次间隔时间
   */
  BatchInterval?: number
  /**
   * 小批量验证批次的实例数
   */
  BetaBatchNum?: number
  /**
   * 发布过程中保障的最小可用实例数
   */
  MinAvailable?: number
  /**
   * 是否强制发布
   */
  Force?: boolean
}

/**
 * CreateCosToken返回参数结构体
 */
export interface CreateCosTokenResponse {
  /**
   * 成功时为CosToken对象，失败为null
注意：此字段可能返回 null，表示取不到有效值。
   */
  Result?: CosToken
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyLogConfig返回参数结构体
 */
export interface ModifyLogConfigResponse {
  /**
   * 编辑是否成功
   */
  Result?: boolean
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * RollingUpdateApplicationByVersion返回参数结构体
 */
export interface RollingUpdateApplicationByVersionResponse {
  /**
   * 版本ID
   */
  Result?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * StopApplication请求参数结构体
 */
export interface StopApplicationRequest {
  /**
   * 服务id
   */
  ApplicationId: string
  /**
   * 环境ID/命名空间ID
   */
  EnvironmentId: string
  /**
   * 来源渠道
   */
  SourceChannel?: number
}

/**
 * ModifyApplicationInfo请求参数结构体
 */
export interface ModifyApplicationInfoRequest {
  /**
   * 应用ID
   */
  ApplicationId: string
  /**
   * 描述
   */
  Description: string
  /**
   * 来源渠道
   */
  SourceChannel?: number
  /**
   * 是否开启调用链,（此参数已弃用）
   */
  EnableTracing?: number
}

/**
 * DestroyEnvironment请求参数结构体
 */
export interface DestroyEnvironmentRequest {
  /**
   * 命名空间ID
   */
  EnvironmentId: string
  /**
   * 来源渠道
   */
  SourceChannel?: number
}

/**
 * CreateEnvironment返回参数结构体
 */
export interface CreateEnvironmentResponse {
  /**
   * 成功时为环境ID，失败为null
注意：此字段可能返回 null，表示取不到有效值。
   */
  Result?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeEnvironmentStatus请求参数结构体
 */
export interface DescribeEnvironmentStatusRequest {
  /**
   * 命名空间id
   */
  EnvironmentIds: Array<string>
  /**
   * 来源Channel
   */
  SourceChannel?: number
}

/**
 * RevertDeployApplication返回参数结构体
 */
export interface RevertDeployApplicationResponse {
  /**
   * 是否成功
   */
  Result?: boolean
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
   * 分批策略：0-全自动，1-全手动，2-beta分批，beta批一定是手动的，3-首次发布
   */
  DeployStrategyType?: number
  /**
   * 每批暂停间隔
   */
  BatchInterval?: number
  /**
   * 最小可用实例数
   */
  MinAvailable?: number
  /**
   * 是否强制发布
   */
  Force?: boolean
}

/**
 * DescribeApplications返回参数结构体
 */
export interface DescribeApplicationsResponse {
  /**
   * 返回结果
   */
  Result?: ServicePage
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateCosToken请求参数结构体
 */
export interface CreateCosTokenRequest {
  /**
   * 应用ID
   */
  ApplicationId: string
  /**
   * 包名
   */
  PkgName: string
  /**
   * optType 1上传  2查询
   */
  OptType: number
  /**
   * 来源 channel
   */
  SourceChannel?: number
  /**
   * 充当deployVersion入参
   */
  TimeVersion?: string
}

/**
 * DescribeEnvironments请求参数结构体
 */
export interface DescribeEnvironmentsRequest {
  /**
   * 分页limit，默认：20
   */
  Limit?: number
  /**
   * 分页下标，默认：0
   */
  Offset?: number
  /**
   * 来源source
   */
  SourceChannel?: number
  /**
   * 查询过滤器
   */
  Filters?: Array<QueryFilter>
  /**
   * 排序字段
   */
  SortInfo?: SortType
  /**
   * 环境id
   */
  EnvironmentId?: string
}

/**
 * LogConfig 列表结果
 */
export interface LogConfigListPage {
  /**
   * 记录
注意：此字段可能返回 null，表示取不到有效值。
   */
  Records?: Array<LogConfig>
  /**
   * 翻页游标
注意：此字段可能返回 null，表示取不到有效值。
   */
  ContinueToken?: string
}

/**
 * 服务版本信息列表
 */
export interface ServiceVersionBrief {
  /**
   * 版本名称
   */
  VersionName: string
  /**
   * 状态
   */
  Status: string
  /**
   * 是否启动弹性 -- 已废弃
   */
  EnableEs: number
  /**
   * 当前实例
   */
  CurrentInstances: number
  /**
   * version的id
   */
  VersionId: string
  /**
   * 日志输出配置 -- 已废弃
注意：此字段可能返回 null，表示取不到有效值。
   */
  LogOutputConf: LogOutputConf
  /**
   * 期望实例
注意：此字段可能返回 null，表示取不到有效值。
   */
  ExpectedInstances: number
  /**
   * 部署方式
注意：此字段可能返回 null，表示取不到有效值。
   */
  DeployMode: string
  /**
   * 建构任务ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  BuildTaskId: string
  /**
   * 环境ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  EnvironmentId: string
  /**
   * 环境name
注意：此字段可能返回 null，表示取不到有效值。
   */
  EnvironmentName: string
  /**
   * 服务ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  ApplicationId: string
  /**
   * 服务name
注意：此字段可能返回 null，表示取不到有效值。
   */
  ApplicationName: string
  /**
   * 是否正在发布中
注意：此字段可能返回 null，表示取不到有效值。
   */
  UnderDeploying: boolean
  /**
   * 分批次部署状态
注意：此字段可能返回 null，表示取不到有效值。
   */
  BatchDeployStatus: string
  /**
   * 可用区
注意：此字段可能返回 null，表示取不到有效值。
   */
  Zones: Array<string>
  /**
   * 节点信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  NodeInfos: Array<NodeInfo>
  /**
   * 实例信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  PodList: DescribeRunPodPage
  /**
   * 工作负载信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  WorkloadInfo: WorkloadInfo
  /**
   * 创建日期
注意：此字段可能返回 null，表示取不到有效值。
   */
  CreateDate: string
  /**
   * 地域id
注意：此字段可能返回 null，表示取不到有效值。
   */
  RegionId?: string
}

/**
 * 日志采集的导出规则配置
 */
export interface LogConfigExtractRule {
  /**
   * 首行正则表达式
注意：此字段可能返回 null，表示取不到有效值。
   */
  BeginningRegex?: string
  /**
   * 提取结果
注意：此字段可能返回 null，表示取不到有效值。
   */
  Keys?: Array<string>
  /**
   * 过滤键
注意：此字段可能返回 null，表示取不到有效值。
   */
  FilterKeys?: Array<string>
  /**
   * 过滤值
注意：此字段可能返回 null，表示取不到有效值。
   */
  FilterRegex?: Array<string>
  /**
   * 日志正则表达式
注意：此字段可能返回 null，表示取不到有效值。
   */
  LogRegex?: string
  /**
   * 时间字段
注意：此字段可能返回 null，表示取不到有效值。
   */
  TimeKey?: string
  /**
   * 时间格式
注意：此字段可能返回 null，表示取不到有效值。
   */
  TimeFormat?: string
  /**
   * 是否上传解析失败日志
注意：此字段可能返回 null，表示取不到有效值。
   */
  UnMatchUpload?: string
  /**
   * 解析失败日志的键名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  UnMatchedKey?: string
  /**
   * tracking
注意：此字段可能返回 null，表示取不到有效值。
   */
  Backtracking?: string
  /**
   * 分隔符
注意：此字段可能返回 null，表示取不到有效值。
   */
  Delimiter?: string
}

/**
 * CreateEnvironment请求参数结构体
 */
export interface CreateEnvironmentRequest {
  /**
   * 环境名称
   */
  EnvironmentName: string
  /**
   * 环境描述
   */
  Description?: string
  /**
   * 私有网络名称
   */
  Vpc?: string
  /**
   * 子网列表
   */
  SubnetIds?: Array<string>
  /**
   * K8s version
   */
  K8sVersion?: string
  /**
   * 来源渠道
   */
  SourceChannel?: number
  /**
   * 是否开启tsw服务。默认值：false
   */
  EnableTswTraceService?: boolean
  /**
   * 标签
   */
  Tags?: Array<Tag>
  /**
   * 环境类型：test、pre、prod。默认值：prod
   */
  EnvType?: string
  /**
   * 创建环境的region
   */
  CreateRegion?: string
  /**
   * 是否创建私有网络.默认值:true
   */
  SetupVpc?: boolean
  /**
   * 是否创建 Prometheus 实例。默认值：false
   */
  SetupPrometheus?: boolean
  /**
   * prometheus 实例 id
   */
  PrometheusId?: string
  /**
   * apm id
   */
  ApmId?: string
}

/**
 * node信息
 */
export interface NodeInfo {
  /**
   * node名字
   */
  Name?: string
  /**
   * node可用区
注意：此字段可能返回 null，表示取不到有效值。
   */
  Zone?: string
  /**
   * node子网ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  SubnetId?: string
  /**
   * 可用IP数
注意：此字段可能返回 null，表示取不到有效值。
   */
  AvailableIpCount?: string
  /**
   * cidr块
注意：此字段可能返回 null，表示取不到有效值。
   */
  Cidr?: string
}

/**
 * DescribeApplicationServiceList返回参数结构体
 */
export interface DescribeApplicationServiceListResponse {
  /**
   * 应用 EKS Service 列表
   */
  Result?: EksService
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeLogConfig请求参数结构体
 */
export interface DescribeLogConfigRequest {
  /**
   * 环境 ID
   */
  EnvironmentId: string
  /**
   * 配置名
   */
  Name: string
  /**
   * 应用 ID
   */
  ApplicationId: string
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
  /**
   * 新版本version
注意：此字段可能返回 null，表示取不到有效值。
   */
  NewDeployVersion: string
  /**
   * 旧版本version
注意：此字段可能返回 null，表示取不到有效值。
   */
  OldDeployVersion: string
  /**
   * 包名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  NewVersionPackageInfo: string
  /**
   * 下一批次开始时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  NextBatchStartTime: number
}

/**
 * DescribeEnvironmentStatus返回参数结构体
 */
export interface DescribeEnvironmentStatusResponse {
  /**
   * 返回状态列表
   */
  Result?: Array<NamespaceStatusInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 弹性伸缩配置
 */
export interface EsInfo {
  /**
   * 最小实例数
   */
  MinAliveInstances: number
  /**
   * 最大实例数
   */
  MaxAliveInstances: number
  /**
   * 弹性策略,1:cpu，2:内存
   */
  EsStrategy: number
  /**
   * 弹性扩缩容条件值
   */
  Threshold: number
  /**
   * 版本Id
   */
  VersionId?: string
}

/**
 * DescribeApplicationPods返回参数结构体
 */
export interface DescribeApplicationPodsResponse {
  /**
   * 返回结果
   */
  Result?: DescribeRunPodPage
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeConfigDataList请求参数结构体
 */
export interface DescribeConfigDataListRequest {
  /**
   * 环境 ID
   */
  EnvironmentId: string
  /**
   * 来源渠道
   */
  SourceChannel?: number
  /**
   * 查询游标
   */
  ContinueToken?: string
  /**
   * 分页 limit
   */
  Limit?: number
}

/**
 * EnableApplicationAutoscaler返回参数结构体
 */
export interface EnableApplicationAutoscalerResponse {
  /**
   * 是否成功
注意：此字段可能返回 null，表示取不到有效值。
   */
  Result?: boolean
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 服务分页
 */
export interface ServicePage {
  /**
   * 条目
   */
  Records: Array<TemService>
  /**
   * 总数
   */
  Total: number
  /**
   * 条目
   */
  Size: number
  /**
   * 页数
   */
  Pages: number
  /**
   * 当前条数
注意：此字段可能返回 null，表示取不到有效值。
   */
  Current?: number
}

/**
 * 版本信息
 */
export interface TemServiceVersionInfo {
  /**
   * 主键
   */
  VersionId: string
  /**
   * 服务id
   */
  ApplicationId: string
  /**
   * 部署方式
   */
  DeployMode: string
  /**
   * jdk版本
   */
  JdkVersion: string
  /**
   * 描述
   */
  Description: string
  /**
   * 部署版本
   */
  DeployVersion: string
  /**
   * 发布方式
   */
  PublishMode: string
  /**
   * 启动参数
   */
  JvmOpts: string
  /**
   * 初始实例
   */
  InitPodNum: number
  /**
   * cpu规格
   */
  CpuSpec: number
  /**
   * 内存规格
   */
  MemorySpec: number
  /**
   * 镜像路径
   */
  ImgRepo: string
  /**
   * 镜像名称
   */
  ImgName: string
  /**
   * 镜像版本
   */
  ImgVersion: string
  /**
   * 弹性配置
注意：此字段可能返回 null，表示取不到有效值。
   */
  EsInfo: EsInfo
  /**
   * 环境配置
   */
  EnvConf: Array<Pair>
  /**
   * 存储配置
   */
  StorageConfs: Array<StorageConf>
  /**
   * 运行状态
   */
  Status: string
  /**
   * 私有网络
   */
  Vpc: string
  /**
   * 子网网络
   */
  SubnetId: string
  /**
   * 创建时间
   */
  CreateDate: string
  /**
   * 修改时间
   */
  ModifyDate: string
  /**
   * 挂载配置
注意：此字段可能返回 null，表示取不到有效值。
   */
  StorageMountConfs: Array<StorageMountConf>
  /**
   * 版本名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  VersionName: string
  /**
   * 日志输出配置
注意：此字段可能返回 null，表示取不到有效值。
   */
  LogOutputConf?: LogOutputConf
  /**
   * 服务名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  ApplicationName?: string
  /**
   * 服务描述
注意：此字段可能返回 null，表示取不到有效值。
   */
  ApplicationDescription?: string
  /**
   * 环境名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  EnvironmentName?: string
  /**
   * 环境ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  EnvironmentId?: string
  /**
   * 公网地址
注意：此字段可能返回 null，表示取不到有效值。
   */
  PublicDomain?: string
  /**
   * 是否开通公网访问
注意：此字段可能返回 null，表示取不到有效值。
   */
  EnablePublicAccess?: boolean
  /**
   * 现有的实例
注意：此字段可能返回 null，表示取不到有效值。
   */
  CurrentInstances?: number
  /**
   * 期望的实例
注意：此字段可能返回 null，表示取不到有效值。
   */
  ExpectedInstances?: number
  /**
   * 编程语言
注意：此字段可能返回 null，表示取不到有效值。
   */
  CodingLanguage?: string
  /**
   * 程序包名
注意：此字段可能返回 null，表示取不到有效值。
   */
  PkgName?: string
  /**
   * 是否启用弹性伸缩
注意：此字段可能返回 null，表示取不到有效值。
   */
  EsEnable?: number
  /**
   * 弹性策略
注意：此字段可能返回 null，表示取不到有效值。
   */
  EsStrategy?: number
  /**
   * 镜像tag
注意：此字段可能返回 null，表示取不到有效值。
   */
  ImageTag?: string
  /**
   * 是否启用log
注意：此字段可能返回 null，表示取不到有效值。
   */
  LogEnable?: number
  /**
   * 最小实例数
注意：此字段可能返回 null，表示取不到有效值。
   */
  MinAliveInstances?: string
  /**
   * 安全组
注意：此字段可能返回 null，表示取不到有效值。
   */
  SecurityGroupIds?: Array<string>
  /**
   * 镜像命令
注意：此字段可能返回 null，表示取不到有效值。
   */
  ImageCommand?: string
  /**
   * 镜像命令参数
注意：此字段可能返回 null，表示取不到有效值。
   */
  ImageArgs?: Array<string>
  /**
   * 是否使用默认注册中心配置
注意：此字段可能返回 null，表示取不到有效值。
   */
  UseRegistryDefaultConfig?: boolean
  /**
   * eks 访问设置
注意：此字段可能返回 null，表示取不到有效值。
   */
  Service?: EksService
  /**
   * 挂载配置信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  SettingConfs?: Array<MountedSettingConf>
  /**
   * log path数组信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  LogConfs?: Array<string>
  /**
   * 启动后立即执行的脚本
注意：此字段可能返回 null，表示取不到有效值。
   */
  PostStart?: string
  /**
   * 停止前执行的脚本
注意：此字段可能返回 null，表示取不到有效值。
   */
  PreStop?: string
  /**
   * 存活探针配置
注意：此字段可能返回 null，表示取不到有效值。
   */
  Liveness?: HealthCheckConfig
  /**
   * 就绪探针配置
注意：此字段可能返回 null，表示取不到有效值。
   */
  Readiness?: HealthCheckConfig
  /**
   * 弹性策略
注意：此字段可能返回 null，表示取不到有效值。
   */
  HorizontalAutoscaler?: Array<HorizontalAutoscaler>
  /**
   * 定时弹性策略
注意：此字段可能返回 null，表示取不到有效值。
   */
  CronHorizontalAutoscaler?: Array<CronHorizontalAutoscaler>
  /**
   * 应用实际可用区
注意：此字段可能返回 null，表示取不到有效值。
   */
  Zones?: Array<string>
  /**
   * 最新部署时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  LastDeployDate?: string
  /**
   * 最新部署成功时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  LastDeploySuccessDate?: string
  /**
   * 应用所在node信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  NodeInfos?: Array<NodeInfo>
  /**
   * image类型 -0 为demo -1为正常image
注意：此字段可能返回 null，表示取不到有效值。
   */
  ImageType?: number
  /**
   * 是否启用调用链组件
注意：此字段可能返回 null，表示取不到有效值。
   */
  EnableTracing?: number
  /**
   * 是否开启调用链上报，只有 EnableTracing=1 时生效（参数已弃用）
注意：此字段可能返回 null，表示取不到有效值。
   */
  EnableTracingReport?: number
  /**
   * 镜像类型：0-个人镜像、1-企业镜像、2-公有镜像
注意：此字段可能返回 null，表示取不到有效值。
   */
  RepoType?: number
  /**
   * 分批发布子状态：batch_updating、batch_updating_waiting_confirm
注意：此字段可能返回 null，表示取不到有效值。
   */
  BatchDeployStatus?: string
  /**
   * APM 资源 ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  ApmInstanceId?: string
  /**
   * 工作负载信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  WorkloadInfo?: WorkloadInfo
  /**
   * 是否启用应用加速
注意：此字段可能返回 null，表示取不到有效值。
   */
  SpeedUp?: boolean
  /**
   * 启动检测探针配置
注意：此字段可能返回 null，表示取不到有效值。
   */
  StartupProbe?: HealthCheckConfig
  /**
   * 操作系统版本，可选参数：
- ALPINE
- CENTOS
注意：此字段可能返回 null，表示取不到有效值。
   */
  OsFlavour?: string
  /**
   * 镜像仓库server
注意：此字段可能返回 null，表示取不到有效值。
   */
  RepoServer?: string
  /**
   * 是否正在发布中
注意：此字段可能返回 null，表示取不到有效值。
   */
  UnderDeploying?: boolean
  /**
   * 监控业务指标监控
注意：此字段可能返回 null，表示取不到有效值。
   */
  EnablePrometheusConf?: EnablePrometheusConf
  /**
   * 是否为手动停止
注意：此字段可能返回 null，表示取不到有效值。
   */
  StoppedManually?: boolean
  /**
   * tcr实例ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  TcrInstanceId?: string
  /**
   * 1：开始自动metrics采集（open-telemetry）；
0：关闭metrics采集；
注意：此字段可能返回 null，表示取不到有效值。
   */
  EnableMetrics?: number
  /**
   * 用户AppId
注意：此字段可能返回 null，表示取不到有效值。
   */
  AppId?: string
  /**
   * 用户SubAccountUin
注意：此字段可能返回 null，表示取不到有效值。
   */
  SubAccountUin?: string
  /**
   * 用户Uin
注意：此字段可能返回 null，表示取不到有效值。
   */
  Uin?: string
  /**
   * 地域
注意：此字段可能返回 null，表示取不到有效值。
   */
  Region?: string
  /**
   * 应用分组ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  GroupId?: string
  /**
   * 是否启用注册中心
注意：此字段可能返回 null，表示取不到有效值。
   */
  EnableRegistry?: number
  /**
   * 弹性伸缩数组
注意：此字段可能返回 null，表示取不到有效值。
   */
  AutoscalerList?: Array<Autoscaler>
  /**
   * 修改人
注意：此字段可能返回 null，表示取不到有效值。
   */
  Modifier?: string
  /**
   * 创建人
注意：此字段可能返回 null，表示取不到有效值。
   */
  Creator?: string
  /**
   * 部署策略
注意：此字段可能返回 null，表示取不到有效值。
   */
  DeployStrategyConf?: DeployStrategyConf
  /**
   * 实例列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  PodList?: DescribeRunPodPage
  /**
   * 发布时配置是否有修改
注意：此字段可能返回 null，表示取不到有效值。
   */
  ConfEdited?: boolean
  /**
   * 标签
注意：此字段可能返回 null，表示取不到有效值。
   */
  Tags?: Array<Tag>
  /**
   * 是否编码
注意：此字段可能返回 null，表示取不到有效值。
   */
  PreStopEncoded?: string
  /**
   * 是否编码
注意：此字段可能返回 null，表示取不到有效值。
   */
  PostStartEncoded?: string
}

/**
 * 端口映射详细信息结构体
 */
export interface ServicePortMapping {
  /**
   * 服务类型：如：EXTERNAL，VPC，CLUSTER
注意：此字段可能返回 null，表示取不到有效值。
   */
  Type?: string
  /**
   * 服务名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  ServiceName?: string
  /**
   * 集群内访问vip
注意：此字段可能返回 null，表示取不到有效值。
   */
  ClusterIp?: string
  /**
   * 集群外方位vip
注意：此字段可能返回 null，表示取不到有效值。
   */
  ExternalIp?: string
  /**
   * 子网id
注意：此字段可能返回 null，表示取不到有效值。
   */
  SubnetId?: string
  /**
   * vpc id
注意：此字段可能返回 null，表示取不到有效值。
   */
  VpcId?: string
  /**
   * LoadBalance Id
注意：此字段可能返回 null，表示取不到有效值。
   */
  LoadBalanceId?: string
  /**
   * yaml 内容
注意：此字段可能返回 null，表示取不到有效值。
   */
  Yaml?: string
  /**
   * 暴露端口列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  Ports?: Array<number | bigint>
  /**
   * 端口映射数组
注意：此字段可能返回 null，表示取不到有效值。
   */
  PortMappingItemList?: Array<ServicePortMappingItem>
  /**
   * clb domain
注意：此字段可能返回 null，表示取不到有效值。
   */
  ExternalDomain?: string
}

/**
 * Ingress 配置
 */
export interface IngressInfo {
  /**
   * 环境ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  EnvironmentId: string
  /**
   * ip version
   */
  AddressIPVersion: string
  /**
   * ingress name
   */
  IngressName: string
  /**
   * rules 配置
   */
  Rules: Array<IngressRule>
  /**
   * clb ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  ClbId: string
  /**
   * 环境namespace
   */
  ClusterNamespace?: string
  /**
   * tls 配置
注意：此字段可能返回 null，表示取不到有效值。
   */
  Tls?: Array<IngressTls>
  /**
   * 环境集群ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  ClusterId?: string
  /**
   * clb ip
注意：此字段可能返回 null，表示取不到有效值。
   */
  Vip?: string
  /**
   * 创建时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  CreateTime?: string
  /**
   * 是否混合 https，默认 false，可选值 true 代表有 https 协议监听
   */
  Mixed?: boolean
  /**
   * 重定向模式，可选值：
- AUTO（自动重定向http到https）
- NONE（不使用重定向）
注意：此字段可能返回 null，表示取不到有效值。
   */
  RewriteType?: string
  /**
   * clb 域名
注意：此字段可能返回 null，表示取不到有效值。
   */
  Domain?: string
}

/**
 * ModifyApplicationAutoscaler请求参数结构体
 */
export interface ModifyApplicationAutoscalerRequest {
  /**
   * 服务id
   */
  ApplicationId: string
  /**
   * 环境ID
   */
  EnvironmentId: string
  /**
   * 弹性伸缩策略ID
   */
  AutoscalerId: string
  /**
   * 弹性伸缩策略
   */
  Autoscaler: Autoscaler
  /**
   * 来源渠道
   */
  SourceChannel?: number
}

/**
 * ModifyConfigData返回参数结构体
 */
export interface ModifyConfigDataResponse {
  /**
   * 编辑是否成功
   */
  Result?: boolean
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyIngress请求参数结构体
 */
export interface ModifyIngressRequest {
  /**
   * Ingress 规则配置
   */
  Ingress: IngressInfo
  /**
   * 来源渠道
   */
  SourceChannel?: number
}

/**
 * 标签
 */
export interface Tag {
  /**
   * 标签键
注意：此字段可能返回 null，表示取不到有效值。
   */
  TagKey?: string
  /**
   * 标签值
注意：此字段可能返回 null，表示取不到有效值。
   */
  TagValue?: string
}

/**
 * 开启prometheus监控配置
 */
export interface EnablePrometheusConf {
  /**
   * 应用开放的监听端口
   */
  Port?: number
  /**
   * 业务指标暴露的url path
   */
  Path?: string
}

/**
 * DescribeIngresses请求参数结构体
 */
export interface DescribeIngressesRequest {
  /**
   * 环境 id
   */
  EnvironmentId: string
  /**
   * 环境 namespace
   */
  ClusterNamespace: string
  /**
   * 来源渠道
   */
  SourceChannel?: number
  /**
   * ingress 规则名列表
   */
  IngressNames?: Array<string>
}

/**
 * 数据卷挂载信息
 */
export interface StorageMountConf {
  /**
   * 数据卷名
   */
  VolumeName: string
  /**
   * 数据卷绑定路径
   */
  MountPath: string
}

/**
 * CreateLogConfig请求参数结构体
 */
export interface CreateLogConfigRequest {
  /**
   * 环境 ID
   */
  EnvironmentId: string
  /**
   * 配置名
   */
  Name: string
  /**
   * 收集类型，container_stdout 为标准输出；container_file 为文件；
   */
  InputType: string
  /**
   * 应用 ID
   */
  ApplicationId: string
  /**
   * 日志集 ID
   */
  LogsetId?: string
  /**
   * 日志主题 ID
   */
  TopicId?: string
  /**
   * 日志提取模式，minimalist_log 为单行全文；multiline_log 为多行全文；json_log 为 json格式；fullregex_log 为单行正则；multiline_fullregex_log 为多行正则
   */
  LogType?: string
  /**
   * 首行正则表达式，当LogType=multiline_log 时生效
   */
  BeginningRegex?: string
  /**
   * 收集文件目录，当 InputType=container_file 时生效
   */
  LogPath?: string
  /**
   * 收集文件名模式，当 InputType=container_file 时生效
   */
  FilePattern?: string
  /**
   * 导出规则
   */
  ExtractRule?: LogConfigExtractRule
}

/**
 * RestartApplication返回参数结构体
 */
export interface RestartApplicationResponse {
  /**
   * 返回结果
   */
  Result?: boolean
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeIngresses返回参数结构体
 */
export interface DescribeIngressesResponse {
  /**
   * ingress 数组
注意：此字段可能返回 null，表示取不到有效值。
   */
  Result?: Array<IngressInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyConfigData请求参数结构体
 */
export interface ModifyConfigDataRequest {
  /**
   * 环境 ID
   */
  EnvironmentId: string
  /**
   * 配置名
   */
  Name: string
  /**
   * 配置信息
   */
  Data: Array<Pair>
  /**
   * 来源渠道
   */
  SourceChannel?: number
}

/**
 * CreateConfigData返回参数结构体
 */
export interface CreateConfigDataResponse {
  /**
   * 创建是否成功
   */
  Result?: boolean
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeApplicationsStatus请求参数结构体
 */
export interface DescribeApplicationsStatusRequest {
  /**
   * 环境ID
   */
  EnvironmentId: string
  /**
   * 来源渠道
   */
  SourceChannel?: number
}

/**
 * DescribeIngress返回参数结构体
 */
export interface DescribeIngressResponse {
  /**
   * Ingress 规则配置
   */
  Result?: IngressInfo
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 应用实例
 */
export interface RunVersionPod {
  /**
   * shell地址
   */
  Webshell?: string
  /**
   * pod的id
   */
  PodId?: string
  /**
   * 状态
   */
  Status?: string
  /**
   * 创建时间
   */
  CreateTime?: string
  /**
   * 实例的ip
   */
  PodIp?: string
  /**
   * 可用区
注意：此字段可能返回 null，表示取不到有效值。
   */
  Zone?: string
  /**
   * 部署版本
注意：此字段可能返回 null，表示取不到有效值。
   */
  DeployVersion?: string
  /**
   * 重启次数
注意：此字段可能返回 null，表示取不到有效值。
   */
  RestartCount?: number
  /**
   * pod是否就绪
注意：此字段可能返回 null，表示取不到有效值。
   */
  Ready?: boolean
  /**
   * 容器状态
注意：此字段可能返回 null，表示取不到有效值。
   */
  ContainerState?: string
  /**
   * 实例所在节点信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  NodeInfo?: NodeInfo
  /**
   * 启动时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  StartTime?: string
  /**
   * 是否健康
注意：此字段可能返回 null，表示取不到有效值。
   */
  Unhealthy?: boolean
  /**
   * 不健康时的提示信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  UnhealthyWarningMsg?: string
  /**
   * 版本ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  VersionId?: string
  /**
   * 应用名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  ApplicationName?: string
}

/**
 * CreateResource返回参数结构体
 */
export interface CreateResourceResponse {
  /**
   * 成功与否
注意：此字段可能返回 null，表示取不到有效值。
   */
  Result?: boolean
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyApplicationInfo返回参数结构体
 */
export interface ModifyApplicationInfoResponse {
  /**
   * 成功与否
注意：此字段可能返回 null，表示取不到有效值。
   */
  Result?: boolean
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * RestartApplication请求参数结构体
 */
export interface RestartApplicationRequest {
  /**
   * 服务id
   */
  ApplicationId: string
  /**
   * 环境ID/命名空间ID
   */
  EnvironmentId: string
  /**
   * 来源渠道
   */
  SourceChannel?: number
}

/**
 * DestroyEnvironment返回参数结构体
 */
export interface DestroyEnvironmentResponse {
  /**
   * 返回结果
   */
  Result?: boolean
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DisableApplicationAutoscaler返回参数结构体
 */
export interface DisableApplicationAutoscalerResponse {
  /**
   * 是否成功
注意：此字段可能返回 null，表示取不到有效值。
   */
  Result?: boolean
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeIngress请求参数结构体
 */
export interface DescribeIngressRequest {
  /**
   * 环境ID
   */
  EnvironmentId: string
  /**
   * 环境namespace
   */
  ClusterNamespace: string
  /**
   * ingress 规则名
   */
  IngressName: string
  /**
   * 来源渠道
   */
  SourceChannel?: number
}

/**
 * StopApplication返回参数结构体
 */
export interface StopApplicationResponse {
  /**
   * 返回结果
   */
  Result?: boolean
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeployApplication返回参数结构体
 */
export interface DeployApplicationResponse {
  /**
   * 版本ID（前端可忽略）
   */
  Result?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * RestartApplicationPod返回参数结构体
 */
export interface RestartApplicationPodResponse {
  /**
   * 返回结果
注意：此字段可能返回 null，表示取不到有效值。
   */
  Result?: boolean
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 环境停止进程（只统计由环境停止操作触发的应用数量）
 */
export interface TemEnvironmentStoppingStatus {
  /**
   * 需要停止的应用数量
注意：此字段可能返回 null，表示取不到有效值。
   */
  ApplicationNumNeedToStop?: number
  /**
   * 已经停止的应用数量
注意：此字段可能返回 null，表示取不到有效值。
   */
  StoppedApplicationNum?: number
  /**
   * 停止失败的应用数量
注意：此字段可能返回 null，表示取不到有效值。
   */
  StopFailedApplicationNum?: number
}

/**
 * DeleteApplication请求参数结构体
 */
export interface DeleteApplicationRequest {
  /**
   * 服务Id
   */
  ApplicationId: string
  /**
   * 环境ID
   */
  EnvironmentId: string
  /**
   * 来源渠道(用户不需要关心此参数)
   */
  SourceChannel?: number
  /**
   * 当服务没有任何运行版本时，是否删除此服务
   */
  DeleteApplicationIfNoRunningVersion?: boolean
}

/**
 * CreateApplicationAutoscaler返回参数结构体
 */
export interface CreateApplicationAutoscalerResponse {
  /**
   * 弹性伸缩策略组合ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  Result?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteApplicationAutoscaler请求参数结构体
 */
export interface DeleteApplicationAutoscalerRequest {
  /**
   * 服务id
   */
  ApplicationId: string
  /**
   * 环境ID
   */
  EnvironmentId: string
  /**
   * 弹性伸缩策略ID
   */
  AutoscalerId: string
  /**
   * 来源渠道
   */
  SourceChannel?: number
}

/**
 * DescribeApplicationAutoscalerList请求参数结构体
 */
export interface DescribeApplicationAutoscalerListRequest {
  /**
   * 服务id
   */
  ApplicationId: string
  /**
   * 环境ID
   */
  EnvironmentId: string
  /**
   * 来源渠道
   */
  SourceChannel?: number
}

/**
 * DescribeApplicationsStatus返回参数结构体
 */
export interface DescribeApplicationsStatusResponse {
  /**
   * 返回结果
   */
  Result?: Array<ServiceVersionBrief>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDeployApplicationDetail请求参数结构体
 */
export interface DescribeDeployApplicationDetailRequest {
  /**
   * 服务id
   */
  ApplicationId: string
  /**
   * 环境id
   */
  EnvironmentId: string
  /**
   * 版本部署id
   */
  VersionId?: string
}

/**
 * DeleteIngress请求参数结构体
 */
export interface DeleteIngressRequest {
  /**
   * 环境ID
   */
  EnvironmentId: string
  /**
   * 环境 namespace
   */
  ClusterNamespace: string
  /**
   * ingress 规则名
   */
  IngressName: string
  /**
   * 来源渠道
   */
  SourceChannel?: number
}

/**
 * DisableApplicationAutoscaler请求参数结构体
 */
export interface DisableApplicationAutoscalerRequest {
  /**
   * 服务id
   */
  ApplicationId: string
  /**
   * 环境ID
   */
  EnvironmentId: string
  /**
   * 弹性伸缩策略ID
   */
  AutoscalerId: string
  /**
   * 来源渠道
   */
  SourceChannel?: number
}

/**
 * DescribeRelatedIngresses请求参数结构体
 */
export interface DescribeRelatedIngressesRequest {
  /**
   * 环境 id
   */
  EnvironmentId: string
  /**
   * 环境 namespace
   */
  ClusterNamespace: string
  /**
   * 应用 ID
   */
  ApplicationId: string
  /**
   * 来源渠道
   */
  SourceChannel?: number
}

/**
 * Cos token
 */
export interface CosToken {
  /**
   * 唯一请求 ID
   */
  RequestId: string
  /**
   * 存储桶桶名
   */
  Bucket: string
  /**
   * 存储桶所在区域
   */
  Region: string
  /**
   * 临时密钥的SecretId
   */
  TmpSecretId: string
  /**
   * 临时密钥的SecretKey
   */
  TmpSecretKey: string
  /**
   * 临时密钥的 sessionToken
   */
  SessionToken: string
  /**
   * 临时密钥获取的开始时间
   */
  StartTime: string
  /**
   * 临时密钥的 expiredTime
   */
  ExpiredTime: string
  /**
   * 包完整路径
   */
  FullPath: string
}

/**
 * GenerateApplicationPackageDownloadUrl请求参数结构体
 */
export interface GenerateApplicationPackageDownloadUrlRequest {
  /**
   * 应用ID
   */
  ApplicationId: string
  /**
   * 包名
   */
  PkgName: string
  /**
   * 需要下载的包版本
   */
  DeployVersion: string
  /**
   * 来源 channel
   */
  SourceChannel?: number
}

/**
 * DescribeEnvironments返回参数结构体
 */
export interface DescribeEnvironmentsResponse {
  /**
   * 返回结果
   */
  Result?: NamespacePage
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteApplicationAutoscaler返回参数结构体
 */
export interface DeleteApplicationAutoscalerResponse {
  /**
   * 是否成功
注意：此字段可能返回 null，表示取不到有效值。
   */
  Result?: boolean
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeRelatedIngresses返回参数结构体
 */
export interface DescribeRelatedIngressesResponse {
  /**
   * ingress 数组
注意：此字段可能返回 null，表示取不到有效值。
   */
  Result?: Array<IngressInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeEnvironment请求参数结构体
 */
export interface DescribeEnvironmentRequest {
  /**
   * 命名空间id
   */
  EnvironmentId: string
  /**
   * 来源Channel
   */
  SourceChannel?: number
}

/**
 * DescribePagedLogConfigList请求参数结构体
 */
export interface DescribePagedLogConfigListRequest {
  /**
   * 环境 ID
   */
  EnvironmentId: string
  /**
   * 应用 ID
   */
  ApplicationId?: string
  /**
   * 应用名
   */
  ApplicationName?: string
  /**
   * 规则名
   */
  Name?: string
  /**
   * 分页大小，默认 20
   */
  Limit?: number
  /**
   * 翻页游标
   */
  ContinueToken?: string
}

/**
 * 环境启动进程（只统计由环境启动操作触发的应用数量）
 */
export interface TemEnvironmentStartingStatus {
  /**
   * 需要启动的应用数量
注意：此字段可能返回 null，表示取不到有效值。
   */
  ApplicationNumNeedToStart?: number
  /**
   * 已经启动的应用数量
注意：此字段可能返回 null，表示取不到有效值。
   */
  StartedApplicationNum?: number
  /**
   * 启动失败的应用数量
注意：此字段可能返回 null，表示取不到有效值。
   */
  StartFailedApplicationNum?: number
}

/**
 * 服务
 */
export interface TemService {
  /**
   * 主键
注意：此字段可能返回 null，表示取不到有效值。
   */
  ApplicationId: string
  /**
   * 服务名
注意：此字段可能返回 null，表示取不到有效值。
   */
  ApplicationName: string
  /**
   * 描述
注意：此字段可能返回 null，表示取不到有效值。
   */
  Description: string
  /**
   * 命名空间id
注意：此字段可能返回 null，表示取不到有效值。
   */
  EnvironmentId: string
  /**
   * 创建时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  CreateDate: string
  /**
   * 修改时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  ModifyDate: string
  /**
   * 修改人
注意：此字段可能返回 null，表示取不到有效值。
   */
  Modifier: string
  /**
   * 创建者
注意：此字段可能返回 null，表示取不到有效值。
   */
  Creator: string
  /**
   * tcr个人版or企业版
注意：此字段可能返回 null，表示取不到有效值。
   */
  RepoType: number
  /**
   * 企业版实例id
注意：此字段可能返回 null，表示取不到有效值。
   */
  InstanceId: string
  /**
   * 镜像仓库名
注意：此字段可能返回 null，表示取不到有效值。
   */
  RepoName: string
  /**
   * 编程语言
注意：此字段可能返回 null，表示取不到有效值。
   */
  CodingLanguage: string
  /**
   * 部署方式
注意：此字段可能返回 null，表示取不到有效值。
   */
  DeployMode: string
  /**
   * 环境名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  EnvironmentName: string
  /**
   * 服务当前运行环境的实例信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  ActiveVersions: Array<ServiceVersionBrief>
  /**
   * 是否启用链路追踪
注意：此字段可能返回 null，表示取不到有效值。
   */
  EnableTracing: number
  /**
   * 标签
注意：此字段可能返回 null，表示取不到有效值。
   */
  Tags: Array<Tag>
  /**
   * 是否有资源权限
注意：此字段可能返回 null，表示取不到有效值。
   */
  HasAuthority: boolean
}

/**
 * ingress rule 配置
 */
export interface IngressRule {
  /**
   * ingress rule value
   */
  Http: IngressRuleValue
  /**
   * host 地址
注意：此字段可能返回 null，表示取不到有效值。
   */
  Host?: string
  /**
   * 协议，选项为 http， https，默认为 http
   */
  Protocol?: string
}

/**
 * 定时伸缩策略
 */
export interface CronHorizontalAutoscaler {
  /**
   * 定时伸缩策略名称
   */
  Name?: string
  /**
   * 策略周期
* * *，三个范围，第一个是天，第二个是月，第三个是周，中间用空格隔开
例子：
* * * （每天）
* * 0-3 （每周日到周三）
1,11,21 * *（每个月1号，11号，21号）
   */
  Period?: string
  /**
   * 定时伸缩策略明细
   */
  Schedules?: Array<CronHorizontalAutoscalerSchedule>
  /**
   * 是否启用
   */
  Enabled?: boolean
  /**
   * 策略优先级，值越大优先级越高，0为最小值
   */
  Priority?: number
}

/**
 * DescribeApplicationServiceList请求参数结构体
 */
export interface DescribeApplicationServiceListRequest {
  /**
   * namespace id
   */
  EnvironmentId: string
  /**
   * 服务ID
   */
  ApplicationId: string
  /**
   * 来源渠道
   */
  SourceChannel?: number
}

/**
 * DescribeDeployApplicationDetail返回参数结构体
 */
export interface DescribeDeployApplicationDetailResponse {
  /**
   * 分批发布结果详情
   */
  Result?: TemDeployApplicationDetailInfo
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * Ingress Rule Value 配置
 */
export interface IngressRuleValue {
  /**
   * rule 整体配置
   */
  Paths: Array<IngressRulePath>
}

/**
 * DescribeEnvironment返回参数结构体
 */
export interface DescribeEnvironmentResponse {
  /**
   * 环境信息
   */
  Result?: NamespaceInfo
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 命名空间对象
 */
export interface TemNamespaceInfo {
  /**
   * 环境id
   */
  EnvironmentId?: string
  /**
   * 渠道
   */
  Channel?: string
  /**
   * 环境名称
   */
  EnvironmentName?: string
  /**
   * 区域名称
   */
  Region?: string
  /**
   * 环境描述
注意：此字段可能返回 null，表示取不到有效值。
   */
  Description?: string
  /**
   * 状态,1:已销毁;0:正常
   */
  Status?: number
  /**
   * vpc网络
   */
  Vpc?: string
  /**
   * 创建时间
   */
  CreateDate?: string
  /**
   * 修改时间
   */
  ModifyDate?: string
  /**
   * 修改人
   */
  Modifier?: string
  /**
   * 创建人
   */
  Creator?: string
  /**
   * 应用数
   */
  ApplicationNum?: number
  /**
   * 运行实例数
   */
  RunInstancesNum?: number
  /**
   * 子网络
   */
  SubnetId?: string
  /**
   * 环境集群 status
   */
  ClusterStatus?: string
  /**
   * 是否开启tsw
   */
  EnableTswTraceService?: boolean
  /**
   * 环境锁，1为上锁，0则为上锁
   */
  Locked?: number
  /**
   * 用户AppId
注意：此字段可能返回 null，表示取不到有效值。
   */
  AppId?: string
  /**
   * 用户Uin
注意：此字段可能返回 null，表示取不到有效值。
   */
  Uin?: string
  /**
   * 用户SubAccountUin
注意：此字段可能返回 null，表示取不到有效值。
   */
  SubAccountUin?: string
  /**
   * 集群ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  ClusterId?: string
  /**
   * 标签
注意：此字段可能返回 null，表示取不到有效值。
   */
  Tags?: Array<Tag>
  /**
   * 资源是否有权限
注意：此字段可能返回 null，表示取不到有效值。
   */
  HasAuthority?: boolean
  /**
   * 环境类型: test、pre、prod
注意：此字段可能返回 null，表示取不到有效值。
   */
  EnvType?: string
  /**
   * 地域码
注意：此字段可能返回 null，表示取不到有效值。
   */
  RegionId?: string
}

/**
 * CreateApplicationAutoscaler请求参数结构体
 */
export interface CreateApplicationAutoscalerRequest {
  /**
   * 服务id
   */
  ApplicationId: string
  /**
   * 环境ID
   */
  EnvironmentId: string
  /**
   * 弹性伸缩策略
   */
  Autoscaler: Autoscaler
  /**
   * 来源渠道
   */
  SourceChannel?: number
}

/**
 * DeleteApplicationService返回参数结构体
 */
export interface DeleteApplicationServiceResponse {
  /**
   * 是否成功
注意：此字段可能返回 null，表示取不到有效值。
   */
  Result?: boolean
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 配置
 */
export interface ConfigData {
  /**
   * 配置名称
   */
  Name?: string
  /**
   * 创建时间
   */
  CreateTime?: string
  /**
   * 关联的服务列表
   */
  RelatedApplications?: Array<TemService>
  /**
   * 配置条目
   */
  Data?: Array<Pair>
}

/**
 * ResumeDeployApplication请求参数结构体
 */
export interface ResumeDeployApplicationRequest {
  /**
   * 需要开始下一批次的服务id
   */
  ApplicationId: string
  /**
   * 环境id
   */
  EnvironmentId: string
}

/**
 * DescribeConfigData请求参数结构体
 */
export interface DescribeConfigDataRequest {
  /**
   * 环境 ID
   */
  EnvironmentId: string
  /**
   * 配置名
   */
  Name: string
  /**
   * 来源渠道
   */
  SourceChannel?: number
}

/**
 * 挂载配置信息
 */
export interface MountedSettingConf {
  /**
   * 配置名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  ConfigDataName: string
  /**
   * 挂载路径
注意：此字段可能返回 null，表示取不到有效值。
   */
  MountedPath: string
  /**
   * 配置内容
注意：此字段可能返回 null，表示取不到有效值。
   */
  Data?: Array<Pair>
  /**
   * 加密配置名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  SecretDataName?: string
}

/**
 * CreateLogConfig返回参数结构体
 */
export interface CreateLogConfigResponse {
  /**
   * 创建是否成功
   */
  Result?: boolean
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeConfigDataList返回参数结构体
 */
export interface DescribeConfigDataListResponse {
  /**
   * 配置列表
   */
  Result?: DescribeConfigDataListPage
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyApplicationService请求参数结构体
 */
export interface ModifyApplicationServiceRequest {
  /**
   * 服务id
   */
  ApplicationId: string
  /**
   * 环境ID
   */
  EnvironmentId: string
  /**
   * 来源渠道
   */
  SourceChannel?: number
  /**
   * 全量访问方式设置
   */
  Service?: EksService
  /**
   * 单条访问方式设置
   */
  Data?: ServicePortMapping
}

/**
 * DescribePagedLogConfigList返回参数结构体
 */
export interface DescribePagedLogConfigListResponse {
  /**
   * 日志收集配置列表
   */
  Result?: LogConfigListPage
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 健康检查配置
 */
export interface HealthCheckConfig {
  /**
   * 支持的健康检查类型，如 HttpGet，TcpSocket，Exec
   */
  Type: string
  /**
   * 仅当健康检查类型为 HttpGet 时有效，表示协议类型，如 HTTP，HTTPS
   */
  Protocol?: string
  /**
   * 仅当健康检查类型为 HttpGet 时有效，表示请求路径
   */
  Path?: string
  /**
   * 仅当健康检查类型为 Exec 时有效，表示执行的脚本内容
   */
  Exec?: string
  /**
   * 仅当健康检查类型为 HttpGet\TcpSocket 时有效，表示请求路径
   */
  Port?: number
  /**
   * 检查延迟开始时间，单位为秒，默认为 0
   */
  InitialDelaySeconds?: number
  /**
   * 超时时间，单位为秒，默认为 1
   */
  TimeoutSeconds?: number
  /**
   * 间隔时间，单位为秒，默认为 10
   */
  PeriodSeconds?: number
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
  /**
   * 旧实例列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  OldPods?: Array<DeployServicePodDetail>
  /**
   * 新实例列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  NewPods?: Array<DeployServicePodDetail>
  /**
   * =0：手动确认批次；>0：下一批次开始时间戳
注意：此字段可能返回 null，表示取不到有效值。
   */
  NextBatchStartTime?: number
}

/**
 * 弹性伸缩策略组合
 */
export interface Autoscaler {
  /**
   * 弹性伸缩最小实例数
   */
  MinReplicas: number
  /**
   * 弹性伸缩最大实例数
   */
  MaxReplicas: number
  /**
   * 指标弹性伸缩策略(指标策略和定时策略必须填写一个)
注意：此字段可能返回 null，表示取不到有效值。
   */
  HorizontalAutoscaler?: Array<HorizontalAutoscaler>
  /**
   * 定时弹性伸缩策略(指标策略和定时策略必须填写一个)
注意：此字段可能返回 null，表示取不到有效值。
   */
  CronHorizontalAutoscaler?: Array<CronHorizontalAutoscaler>
  /**
   * 弹性伸缩ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  AutoscalerId?: string
  /**
   * 弹性伸缩名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  AutoscalerName?: string
  /**
   * 弹性伸缩描述
注意：此字段可能返回 null，表示取不到有效值。
   */
  Description?: string
  /**
   * 创建日期
注意：此字段可能返回 null，表示取不到有效值。
   */
  CreateDate?: string
  /**
   * 修改时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  ModifyDate?: string
  /**
   * 启用时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  EnableDate?: string
  /**
   * 是否启用
注意：此字段可能返回 null，表示取不到有效值。
   */
  Enabled?: boolean
}

/**
 * CreateConfigData请求参数结构体
 */
export interface CreateConfigDataRequest {
  /**
   * 环境 ID
   */
  EnvironmentId: string
  /**
   * 配置名
   */
  Name: string
  /**
   * 配置信息
   */
  Data: Array<Pair>
  /**
   * 来源渠道
   */
  SourceChannel?: number
}

/**
 * 配置信息的分页列表
 */
export interface DescribeConfigDataListPage {
  /**
   * 记录
   */
  Records?: Array<ConfigData>
  /**
   * 分页游标，用以查询下一页
注意：此字段可能返回 null，表示取不到有效值。
   */
  ContinueToken?: string
  /**
   * 剩余数目
注意：此字段可能返回 null，表示取不到有效值。
   */
  RemainingCount?: number
}

/**
 * DeployApplication请求参数结构体
 */
export interface DeployApplicationRequest {
  /**
   * 应用ID
   */
  ApplicationId: string
  /**
   * 初始化 pod 数
   */
  InitPodNum: number
  /**
   * cpu规格 单位：核
   */
  CpuSpec: number
  /**
   * 内存规格 单位：G
   */
  MemorySpec: number
  /**
   * 环境ID
   */
  EnvironmentId: string
  /**
   * 部署类型为 IMAGE 时，该参数表示镜像 tag。
部署类型为 JAR/WAR 时，该参数表示包版本号。
   */
  DeployVersion: string
  /**
   * 镜像仓库
   */
  ImgRepo?: string
  /**
   * 版本描述信息
   */
  VersionDesc?: string
  /**
   * 启动参数
   */
  JvmOpts?: string
  /**
   * 弹性伸缩配置（已废弃，请使用HorizontalAutoscaler设置弹性策略）
   */
  EsInfo?: EsInfo
  /**
   * 环境变量配置
   */
  EnvConf?: Array<Pair>
  /**
   * 日志配置
   */
  LogConfs?: Array<string>
  /**
   * 数据卷配置
   */
  StorageConfs?: Array<StorageConf>
  /**
   * 数据卷挂载配置
   */
  StorageMountConfs?: Array<StorageMountConf>
  /**
   * 部署类型。
- JAR：通过 jar 包部署
- WAR：通过 war 包部署
- IMAGE：通过镜像部署
   */
  DeployMode?: string
  /**
   * 传入内容为 /jar包名字 的形式。也就是在 jar包名字前增加一个/。

如上传的 jar 包名字为 demo-1.0.0.jar，那么这里传入内容为：/demo-1.0.0.jar

注：jar 包需要通过 tem 页面上传过，tem 后端才能拉到该 jar 包。
   */
  PkgName?: string
  /**
   * JDK 版本。
- KONA:8：使用 kona jdk 8。
- OPEN:8：使用 open jdk 8。
- KONA:11：使用 kona jdk 11。
- OPEN:11：使用 open jdk 11。
   */
  JdkVersion?: string
  /**
   * 安全组ID s
   */
  SecurityGroupIds?: Array<string>
  /**
   * 日志输出配置
   */
  LogOutputConf?: LogOutputConf
  /**
   * 来源渠道
   */
  SourceChannel?: number
  /**
   * 版本描述
   */
  Description?: string
  /**
   * 镜像命令
   */
  ImageCommand?: string
  /**
   * 镜像命令参数
   */
  ImageArgs?: Array<string>
  /**
   * 是否添加默认注册中心配置
   */
  UseRegistryDefaultConfig?: boolean
  /**
   * 挂载配置信息
   */
  SettingConfs?: Array<MountedSettingConf>
  /**
   * 应用访问设置
   */
  Service?: EksService
  /**
   * 要回滚到的历史版本id
   */
  VersionId?: string
  /**
   * 启动后执行的脚本
   */
  PostStart?: string
  /**
   * 停止前执行的脚本
   */
  PreStop?: string
  /**
   * 存活探针配置
   */
  Liveness?: HealthCheckConfig
  /**
   * 就绪探针配置
   */
  Readiness?: HealthCheckConfig
  /**
   * 分批发布策略配置
   */
  DeployStrategyConf?: DeployStrategyConf
  /**
   * 弹性策略（已弃用，请使用弹性伸缩策略组合相关接口）
   */
  HorizontalAutoscaler?: Array<HorizontalAutoscaler>
  /**
   * 定时弹性策略（已弃用，请使用弹性伸缩策略组合相关接口）
   */
  CronHorizontalAutoscaler?: Array<CronHorizontalAutoscaler>
  /**
   * 是否启用log，1为启用，0为不启用
   */
  LogEnable?: number
  /**
   * （除开镜像配置）配置是否修改
   */
  ConfEdited?: boolean
  /**
   * 是否开启应用加速
   */
  SpeedUp?: boolean
  /**
   * 启动探针配置
   */
  StartupProbe?: HealthCheckConfig
  /**
   * 操作系统版本；
当选择openjdk时，可选参数：
- ALPINE
- CENTOS
当选择konajdk时，可选参数：
- ALPINE
- TENCENTOS
   */
  OsFlavour?: string
  /**
   * metrics业务指标监控配置
   */
  EnablePrometheusConf?: EnablePrometheusConf
  /**
   * 1：开始自动apm采集（skywalking）；
0：关闭apm采集；
   */
  EnableTracing?: number
  /**
   * 1：开始自动metrics采集（open-telemetry）；
0：关闭metrics采集；
   */
  EnableMetrics?: number
  /**
   * 镜像部署时，选择的tcr实例id
   */
  TcrInstanceId?: string
  /**
   * 镜像部署时，选择的镜像服务器地址
   */
  RepoServer?: string
  /**
   * 镜像部署时，仓库类型：0：个人仓库；1：企业版；2：公共仓库；3：tem托管仓库；4：demo仓库
   */
  RepoType?: number
  /**
   * 启动后执行的脚本，base64 编码
   */
  PostStartEncoded?: string
  /**
   * 停止前执行的脚本，base64 编码
   */
  PreStopEncoded?: string
}

/**
 * DescribeApplicationAutoscalerList返回参数结构体
 */
export interface DescribeApplicationAutoscalerListResponse {
  /**
   * 弹性伸缩策略组合
注意：此字段可能返回 null，表示取不到有效值。
   */
  Result?: Array<Autoscaler>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DestroyConfigData请求参数结构体
 */
export interface DestroyConfigDataRequest {
  /**
   * 环境 ID
   */
  EnvironmentId: string
  /**
   * 配置名
   */
  Name: string
  /**
   * 来源渠道
   */
  SourceChannel?: number
}

/**
 * DestroyConfigData返回参数结构体
 */
export interface DestroyConfigDataResponse {
  /**
   * 返回结果
   */
  Result?: boolean
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeApplications请求参数结构体
 */
export interface DescribeApplicationsRequest {
  /**
   * 命名空间ID
   */
  EnvironmentId?: string
  /**
   * 分页Limit，默认值：20
   */
  Limit?: number
  /**
   * 分页offset,默认值：0
   */
  Offset?: number
  /**
   * 来源渠道
   */
  SourceChannel?: number
  /**
   * 服务id
   */
  ApplicationId?: string
  /**
   * 搜索关键字
   */
  Keyword?: string
  /**
   * 查询过滤器
   */
  Filters?: Array<QueryFilter>
  /**
   * 排序字段
   */
  SortInfo?: SortType
}

/**
 * DescribeApplicationInfo请求参数结构体
 */
export interface DescribeApplicationInfoRequest {
  /**
   * 服务版本ID
   */
  ApplicationId: string
  /**
   * 来源渠道
   */
  SourceChannel?: number
  /**
   * 环境ID
   */
  EnvironmentId?: string
}

/**
 * CreateApplication请求参数结构体
 */
export interface CreateApplicationRequest {
  /**
   * 应用名
   */
  ApplicationName: string
  /**
   * 描述
   */
  Description: string
  /**
   * 是否使用默认镜像服务 1-是，0-否
   */
  UseDefaultImageService?: number
  /**
   * 如果是绑定仓库，绑定的仓库类型，0-个人版，1-企业版
   */
  RepoType?: number
  /**
   * 企业版镜像服务的实例id
   */
  InstanceId?: string
  /**
   * 绑定镜像服务器地址
   */
  RepoServer?: string
  /**
   * 绑定镜像仓库名
   */
  RepoName?: string
  /**
   * 来源渠道
   */
  SourceChannel?: number
  /**
   * 应用所在子网
   */
  SubnetList?: Array<string>
  /**
   * 编程语言 
- JAVA
- OTHER
   */
  CodingLanguage?: string
  /**
   * 部署方式 
- IMAGE
- JAR
- WAR
   */
  DeployMode?: string
  /**
   * 是否开启 Java 应用的 APM 自动上报功能，1 表示启用；0 表示关闭
   */
  EnableTracing?: number
  /**
   * 使用默认镜像服务额外参数
   */
  UseDefaultImageServiceParameters?: UseDefaultRepoParameters
  /**
   * 标签
   */
  Tags?: Array<Tag>
}

/**
 * 命名空间状态
 */
export interface NamespaceStatusInfo {
  /**
   * 命名空间id
   */
  EnvironmentId: string
  /**
   * 命名空间名称
   */
  EnvironmentName: string
  /**
   * TCB envId | EKS clusterId
   */
  ClusterId?: string
  /**
   * 环境状态
   */
  ClusterStatus?: string
  /**
   * 环境启动状态（不在启动中为null）
注意：此字段可能返回 null，表示取不到有效值。
   */
  EnvironmentStartingStatus?: TemEnvironmentStartingStatus
  /**
   * 环境停止状态（不在停止中为null）
注意：此字段可能返回 null，表示取不到有效值。
   */
  EnvironmentStoppingStatus?: TemEnvironmentStoppingStatus
}

/**
 * 版本pod列表
 */
export interface DescribeRunPodPage {
  /**
   * 分页下标
   */
  Offset?: number
  /**
   * 单页条数
   */
  Limit?: number
  /**
   * 总数
   */
  TotalCount?: number
  /**
   * 请求id
   */
  RequestId?: string
  /**
   * 条目
   */
  PodList?: Array<RunVersionPod>
}

/**
 * CreateApplicationService请求参数结构体
 */
export interface CreateApplicationServiceRequest {
  /**
   * 服务id
   */
  ApplicationId: string
  /**
   * 环境ID
   */
  EnvironmentId: string
  /**
   * 访问方式详情
   */
  Service: ServicePortMapping
  /**
   * 来源渠道
   */
  SourceChannel?: number
}

/**
 * ModifyApplicationReplicas返回参数结构体
 */
export interface ModifyApplicationReplicasResponse {
  /**
   * 是否成功
注意：此字段可能返回 null，表示取不到有效值。
   */
  Result?: boolean
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 创建应用，创建仓库参数
 */
export interface UseDefaultRepoParameters {
  /**
   * 企业版实例名
注意：此字段可能返回 null，表示取不到有效值。
   */
  EnterpriseInstanceName?: string
  /**
   * 企业版收费类型  0 按量收费   1 包年包月
注意：此字段可能返回 null，表示取不到有效值。
   */
  EnterpriseInstanceChargeType?: number
  /**
   * 企业版规格：basic-基础班 ，standard-标准版，premium-高级版
注意：此字段可能返回 null，表示取不到有效值。
   */
  EnterpriseInstanceType?: string
}

/**
 * 定时伸缩策略明细
 */
export interface CronHorizontalAutoscalerSchedule {
  /**
   * 触发事件，小时分钟，用:分割
例如
00:00（零点零分触发）
   */
  StartAt: string
  /**
   * 目标实例数（不大于50）
注意：此字段可能返回 null，表示取不到有效值。
   */
  TargetReplicas?: number
}

/**
 * ModifyEnvironment请求参数结构体
 */
export interface ModifyEnvironmentRequest {
  /**
   * 环境id
   */
  EnvironmentId: string
  /**
   * 环境名称。环境名称不可修改
   */
  EnvironmentName?: string
  /**
   * 环境描述
   */
  Description?: string
  /**
   * 私有网络名称
   */
  Vpc?: string
  /**
   * 子网网络
   */
  SubnetIds?: Array<string>
  /**
   * 来源渠道
   */
  SourceChannel?: number
  /**
   * 环境类型：test、pre、prod
   */
  EnvType?: string
}

/**
 * GenerateApplicationPackageDownloadUrl返回参数结构体
 */
export interface GenerateApplicationPackageDownloadUrlResponse {
  /**
   * 包下载临时链接
注意：此字段可能返回 null，表示取不到有效值。
   */
  Result?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * Ingress 规则 backend 配置
 */
export interface IngressRuleBackend {
  /**
   * eks service 名
   */
  ServiceName: string
  /**
   * eks service 端口
   */
  ServicePort: number
}

/**
 * CreateApplicationService返回参数结构体
 */
export interface CreateApplicationServiceResponse {
  /**
   * 是否成功
注意：此字段可能返回 null，表示取不到有效值。
   */
  Result?: boolean
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 工作负载详情
 */
export interface WorkloadInfo {
  /**
   * 资源 ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  ClusterId?: string
  /**
   * 应用名
注意：此字段可能返回 null，表示取不到有效值。
   */
  ApplicationName?: string
  /**
   * 版本名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  VersionName?: string
  /**
   * Ready实例数
注意：此字段可能返回 null，表示取不到有效值。
   */
  ReadyReplicas?: number
  /**
   * 实例数
注意：此字段可能返回 null，表示取不到有效值。
   */
  Replicas?: number
  /**
   * Updated实例数
注意：此字段可能返回 null，表示取不到有效值。
   */
  UpdatedReplicas?: number
  /**
   * UpdatedReady实例数
注意：此字段可能返回 null，表示取不到有效值。
   */
  UpdatedReadyReplicas?: number
  /**
   * 更新版本
注意：此字段可能返回 null，表示取不到有效值。
   */
  UpdateRevision?: string
  /**
   * 当前版本
注意：此字段可能返回 null，表示取不到有效值。
   */
  CurrentRevision?: string
}

/**
 * Ingress Rule Path 配置
 */
export interface IngressRulePath {
  /**
   * path 信息
   */
  Path: string
  /**
   * backend 配置
   */
  Backend: IngressRuleBackend
}

/**
 * Namespace 基础信息
 */
export interface NamespaceInfo {
  /**
   * ID 信息
   */
  EnvironmentId?: string
  /**
   * 名字（已弃用）
   */
  NamespaceName?: string
  /**
   * 地域
   */
  Region?: string
  /**
   * vpc id
   */
  VpcId?: string
  /**
   * subnet id 数组
   */
  SubnetIds?: Array<string>
  /**
   * 描述
   */
  Description?: string
  /**
   * 创建时间
   */
  CreatedDate?: string
  /**
   * 环境名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  EnvironmentName?: string
  /**
   * APM 资源 ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  ApmInstanceId?: string
  /**
   * 环境是否上锁，1为上锁，0则未上锁
注意：此字段可能返回 null，表示取不到有效值。
   */
  Locked?: number
  /**
   * 标签
注意：此字段可能返回 null，表示取不到有效值。
   */
  Tags?: Array<Tag>
  /**
   * 环境类型：test、pre、prod
注意：此字段可能返回 null，表示取不到有效值。
   */
  EnvType?: string
}

/**
 * DescribeLogConfig返回参数结构体
 */
export interface DescribeLogConfigResponse {
  /**
   * 配置
   */
  Result?: LogConfig
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 服务端口映射条目
 */
export interface ServicePortMappingItem {
  /**
   * 应用访问端口
注意：此字段可能返回 null，表示取不到有效值。
   */
  Port?: number
  /**
   * 应用监听端口
注意：此字段可能返回 null，表示取不到有效值。
   */
  TargetPort?: number
  /**
   * 协议类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  Protocol?: string
}

/**
 * RevertDeployApplication请求参数结构体
 */
export interface RevertDeployApplicationRequest {
  /**
   * 需要回滚的服务id
   */
  ApplicationId: string
  /**
   * 需要回滚的服务所在环境id
   */
  EnvironmentId: string
}

/**
 * 查询过滤器
 */
export interface SortType {
  /**
   * 排序字段名称
   */
  Key?: string
  /**
   * 0：升序，1：倒序
   */
  Type?: number
}

/**
 * CreateApplication返回参数结构体
 */
export interface CreateApplicationResponse {
  /**
   * 应用ID
   */
  Result?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 弹性伸缩策略
 */
export interface HorizontalAutoscaler {
  /**
   * 最小实例数（可以不传）
   */
  MinReplicas?: number
  /**
   * 最大实例数（可以不传）
   */
  MaxReplicas?: number
  /**
   * 指标度量
CPU（CPU使用率，%）
MEMORY（内存使用率，%）
CPU_CORE_USED（CPU使用量，core）
MEMORY_SIZE_USED(内存使用量，MiB)
NETWORK_BANDWIDTH_RECEIVE(网络入带宽，MBps)
NETWORK_BANDWIDTH_TRANSMIT(网络出带宽，MBps)
NETWORK_TRAFFIC_RECEIVE(网络入流量，MiB/s)
NETWORK_TRAFFIC_TRANSMIT(网络出流量，MiB/s)
NETWORK_PACKETS_RECEIVE(网络入包量，Count/s)
NETWORK_PACKETS_TRANSMIT(网络出包量，Count/s)
FS_IOPS_WRITE(磁盘写次数，Count/s)
FS_IOPS_READ(磁盘读次数，Count/s)
FS_SIZE_WRITE(磁盘写大小，MiB/s)
FS_SIZE_READ(磁盘读大小，MiB/s)
   */
  Metrics?: string
  /**
   * 阈值（整数）
   */
  Threshold?: number
  /**
   * 是否启用
   */
  Enabled?: boolean
  /**
   * 阈值（小数，优先使用）
注意：此字段可能返回 null，表示取不到有效值。
   */
  DoubleThreshold?: number
}

/**
 * ModifyApplicationService返回参数结构体
 */
export interface ModifyApplicationServiceResponse {
  /**
   * 是否成功
注意：此字段可能返回 null，表示取不到有效值。
   */
  Result?: boolean
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 服务端口映射
 */
export interface PortMapping {
  /**
   * 端口
   */
  Port: number
  /**
   * 映射端口
   */
  TargetPort: number
  /**
   * 协议栈 TCP/UDP
   */
  Protocol: string
  /**
   * k8s service名称
   */
  ServiceName?: string
}

/**
 * 日志收集配置
 */
export interface LogConfig {
  /**
   * 名称
   */
  Name?: string
  /**
   * 收集类型，container_stdout 为标准输出；container_file 为文件；
   */
  InputType?: string
  /**
   * 日志集 ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  LogsetId?: string
  /**
   * 日志主题 ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  TopicId?: string
  /**
   * 日志提取模式，minimalist_log 为单行全文；multiline_log 为多行全文；  fullregex_log 为单行正则； multiline_fullregex_log 为多行正则； json_log 为 json；
   */
  LogType?: string
  /**
   * 首行正则表达式，当 LogType 为多行全文、多行正则时生效
注意：此字段可能返回 null，表示取不到有效值。
   */
  BeginningRegex?: string
  /**
   * 收集文件目录，当 InputType=container_file 时生效
注意：此字段可能返回 null，表示取不到有效值。
   */
  LogPath?: string
  /**
   * 收集文件名模式，当 InputType=container_file 时生效
注意：此字段可能返回 null，表示取不到有效值。
   */
  FilePattern?: string
  /**
   * 创建时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  CreateDate?: string
  /**
   * 更新时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  ModifyDate?: string
  /**
   * 应用 ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  ApplicationId?: string
  /**
   * 应用名
注意：此字段可能返回 null，表示取不到有效值。
   */
  ApplicationName?: string
  /**
   * 导出规则
注意：此字段可能返回 null，表示取不到有效值。
   */
  ExtractRule?: LogConfigExtractRule
}

/**
 * ModifyEnvironment返回参数结构体
 */
export interface ModifyEnvironmentResponse {
  /**
   * 成功时为环境ID，失败为null
注意：此字段可能返回 null，表示取不到有效值。
   */
  Result?: boolean
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyApplicationReplicas请求参数结构体
 */
export interface ModifyApplicationReplicasRequest {
  /**
   * 应用id
   */
  ApplicationId: string
  /**
   * 环境ID
   */
  EnvironmentId: string
  /**
   * 实例数量
   */
  Replicas: number
  /**
   * 来源渠道
   */
  SourceChannel?: number
}

/**
 * ModifyLogConfig请求参数结构体
 */
export interface ModifyLogConfigRequest {
  /**
   * 环境 ID
   */
  EnvironmentId: string
  /**
   * 配置名
   */
  Name: string
  /**
   * 日志收集配置信息
   */
  Data: LogConfig
  /**
   * 应用 ID
   */
  ApplicationId: string
}

/**
 * DestroyLogConfig请求参数结构体
 */
export interface DestroyLogConfigRequest {
  /**
   * 环境 ID
   */
  EnvironmentId: string
  /**
   * 配置名
   */
  Name: string
  /**
   * 应用 ID
   */
  ApplicationId?: string
}

/**
 * EnableApplicationAutoscaler请求参数结构体
 */
export interface EnableApplicationAutoscalerRequest {
  /**
   * 服务id
   */
  ApplicationId: string
  /**
   * 环境ID
   */
  EnvironmentId: string
  /**
   * 弹性伸缩策略ID
   */
  AutoscalerId: string
  /**
   * 来源渠道
   */
  SourceChannel?: number
}

/**
 * eks service info
 */
export interface EksService {
  /**
   * service name
   */
  Name?: string
  /**
   * 可用端口
   */
  Ports?: Array<number | bigint>
  /**
   * yaml 内容
   */
  Yaml?: string
  /**
   * 服务名
注意：此字段可能返回 null，表示取不到有效值。
   */
  ApplicationName?: string
  /**
   * 版本名
注意：此字段可能返回 null，表示取不到有效值。
   */
  VersionName?: string
  /**
   * 内网ip
注意：此字段可能返回 null，表示取不到有效值。
   */
  ClusterIp?: Array<string>
  /**
   * 外网ip
注意：此字段可能返回 null，表示取不到有效值。
   */
  ExternalIp?: string
  /**
   * 访问类型，可选值：
- EXTERNAL（公网访问）
- VPC（vpc内访问）
- CLUSTER（集群内访问）
注意：此字段可能返回 null，表示取不到有效值。
   */
  Type?: string
  /**
   * 子网ID，只在类型为vpc访问时才有值
注意：此字段可能返回 null，表示取不到有效值。
   */
  SubnetId?: string
  /**
   * 负载均衡ID，只在外网访问和vpc内访问才有值，默认自动创建
注意：此字段可能返回 null，表示取不到有效值。
   */
  LoadBalanceId?: string
  /**
   * 端口映射
注意：此字段可能返回 null，表示取不到有效值。
   */
  PortMappings?: Array<PortMapping>
  /**
   * 每种类型访问配置详情
注意：此字段可能返回 null，表示取不到有效值。
   */
  ServicePortMappingList?: Array<ServicePortMapping>
  /**
   * 刷新复写所有类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  FlushAll?: boolean
  /**
   * 1: 下次部署自动注入注册中心信息；0：不注入
注意：此字段可能返回 null，表示取不到有效值。
   */
  EnableRegistryNextDeploy?: number
  /**
   * 返回应用id
注意：此字段可能返回 null，表示取不到有效值。
   */
  ApplicationId?: string
  /**
   * 所有服务IP是否已经ready
注意：此字段可能返回 null，表示取不到有效值。
   */
  AllIpDone?: boolean
  /**
   * clb 域名
注意：此字段可能返回 null，表示取不到有效值。
   */
  ExternalDomain?: string
}

/**
 * 键值对
 */
export interface Pair {
  /**
   * 键
   */
  Key: string
  /**
   * 值
   */
  Value: string
  /**
   * 类型，default 为自定义，reserved 为系统变量，referenced 为引用配置项
注意：此字段可能返回 null，表示取不到有效值。
   */
  Type?: string
  /**
   * 配置名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  Config?: string
  /**
   * 加密配置名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  Secret?: string
}
