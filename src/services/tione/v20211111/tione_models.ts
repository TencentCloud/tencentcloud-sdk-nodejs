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
 * CreateModelService请求参数结构体
 */
export interface CreateModelServiceRequest {
  /**
   * <p>新增版本时需要填写</p>
   */
  ServiceGroupId?: string
  /**
   * <p>不超过60个字，仅支持英文、数字、下划线&quot;_&quot;、短横&quot;-&quot;，只能以英文、数字开头</p>
   */
  ServiceGroupName?: string
  /**
   * <p>模型服务的描述</p>
   */
  ServiceDescription?: string
  /**
   * <p>付费模式,有 PREPAID （包年包月）和 POSTPAID_BY_HOUR（按量付费）</p>
   */
  ChargeType?: string
  /**
   * <p>预付费模式下所属的资源组id，同服务组下唯一</p>
   */
  ResourceGroupId?: string
  /**
   * <p>模型信息，需要挂载模型时填写</p>
   */
  ModelInfo?: ModelInfo
  /**
   * <p>镜像信息，配置服务运行所需的镜像地址等信息</p>
   */
  ImageInfo?: ImageInfo
  /**
   * <p>环境变量，可选参数，用于配置容器中的环境变量</p>
   */
  Env?: Array<EnvVar>
  /**
   * <p>资源描述，指定包年包月模式下的cpu,mem,gpu等信息，后付费无需填写</p>
   */
  Resources?: ResourceInfo
  /**
   * <p>使用DescribeBillingSpecs接口返回的规格列表中的值，或者参考实例列表:<br>TI.S.MEDIUM.POST    2C4G<br>TI.S.LARGE.POST    4C8G<br>TI.S.2XLARGE16.POST    8C16G<br>TI.S.2XLARGE32.POST    8C32G<br>TI.S.4XLARGE32.POST    16C32G<br>TI.S.4XLARGE64.POST    16C64G<br>TI.S.6XLARGE48.POST    24C48G<br>TI.S.6XLARGE96.POST    24C96G<br>TI.S.8XLARGE64.POST    32C64G<br>TI.S.8XLARGE128.POST 32C128G<br>TI.GN7.LARGE20.POST    4C20G T4<em>1/4<br>TI.GN7.2XLARGE40.POST    10C40G T4</em>1/2<br>TI.GN7.2XLARGE32.POST    8C32G T4<em>1<br>TI.GN7.5XLARGE80.POST    20C80G T4</em>1<br>TI.GN7.8XLARGE128.POST    32C128G T4<em>1<br>TI.GN7.10XLARGE160.POST    40C160G T4</em>2<br>TI.GN7.20XLARGE320.POST    80C320G T4*4</p>
   */
  InstanceType?: string
  /**
   * <p>扩缩容类型 支持：自动 - &quot;AUTO&quot;, 手动 - &quot;MANUAL&quot;,默认为MANUAL</p>
   */
  ScaleMode?: string
  /**
   * <p>实例数量, 不同计费模式和调节模式下对应关系如下<br>PREPAID 和 POSTPAID_BY_HOUR:<br>手动调节模式下对应 实例数量<br>自动调节模式下对应 基于时间的默认策略的实例数量<br>HYBRID_PAID:<br>后付费实例手动调节模式下对应 实例数量<br>后付费实例自动调节模式下对应 时间策略的默认策略的实例数量</p>
   */
  Replicas?: number
  /**
   * <p>自动伸缩信息</p>
   */
  HorizontalPodAutoscaler?: HorizontalPodAutoscaler
  /**
   * <p>是否开启日志投递，开启后需填写配置投递到指定cls</p>
   */
  LogEnable?: boolean
  /**
   * <p>日志配置，需要投递服务日志到指定cls时填写</p>
   */
  LogConfig?: LogConfig
  /**
   * <p>是否开启接口鉴权，开启后自动生成token信息，访问需要token鉴权</p>
   */
  AuthorizationEnable?: boolean
  /**
   * <p>腾讯云标签</p>
   */
  Tags?: Array<Tag>
  /**
   * <p>是否新增版本</p>
   */
  NewVersion?: boolean
  /**
   * <p>定时任务配置，使用定时策略时填写</p>
   */
  CronScaleJobs?: Array<CronScaleJob>
  /**
   * <p>自动伸缩策略配置 HPA : 通过HPA进行弹性伸缩 CRON 通过定时任务进行伸缩</p>
   */
  ScaleStrategy?: string
  /**
   * <p>计费模式[HYBRID_PAID]时生效, 用于标识混合计费模式下的预付费实例数</p>
   */
  HybridBillingPrepaidReplicas?: number
  /**
   * <p>[AUTO_ML 自动学习，自动学习正式发布 AUTO_ML_FORMAL, DEFAULT 默认]</p>
   */
  CreateSource?: string
  /**
   * <p>是否开启模型的热更新。默认不开启</p>
   */
  ModelHotUpdateEnable?: boolean
  /**
   * <p>定时停止配置</p>
   */
  ScheduledAction?: ScheduledAction
  /**
   * <p>挂载配置，目前只支持CFS</p>
   */
  VolumeMount?: VolumeMount
  /**
   * <p>服务限速限流相关配置</p>
   */
  ServiceLimit?: ServiceLimit
  /**
   * <p>回调地址，用于回调创建服务状态信息，回调格式&amp;内容详情见：<a href="https://cloud.tencent.com/document/product/851/84292">TI-ONE 接口回调说明</a></p>
   */
  CallbackUrl?: string
  /**
   * <p>是否开启模型的加速, 仅对StableDiffusion(动态加速)格式的模型有效。</p>
   */
  ModelTurboEnable?: boolean
  /**
   * <p>服务分类</p>
   */
  ServiceCategory?: string
  /**
   * <p>服务的启动命令，如遇特殊字符导致配置失败，可使用CommandBase64参数</p>
   */
  Command?: string
  /**
   * <p>是否开启TIONE内网访问外部，此功能仅支持后付费机型与从TIONE平台购买的预付费机型；使用从CVM选择资源组时此配置不生效。</p>
   */
  ServiceEIP?: ServiceEIP
  /**
   * <p>服务的启动命令，以base64格式进行输入，与Command同时配置时，仅当前参数生效</p>
   */
  CommandBase64?: string
  /**
   * <p>服务端口，仅在非内置镜像时生效，默认8501。不支持输入8501-8510,6006,9092</p>
   */
  ServicePort?: number
  /**
   * <p>服务的部署类型 [标准部署，分布式多机部署，] 默认STANDARD</p><p>枚举值：</p><ul><li>STANDARD： 标准部署</li><li>DIST： 多机分布式部署</li><li>ROLE_SET： 多角色部署</li></ul>
   */
  DeployType?: string
  /**
   * <p>单副本下的实例数，仅在部署类型为DIST时生效，默认1</p>
   */
  InstancePerReplicas?: number
  /**
   * <p>服务的优雅退出时限。单位为秒，默认值为30，最小为1</p>
   */
  TerminationGracePeriodSeconds?: number
  /**
   * <p>服务实例停止前执行的命令，执行完毕或执行时间超过优雅退出时限后实例结束</p>
   */
  PreStopCommand?: Array<string>
  /**
   * <p>是否启用 grpc 端口</p>
   */
  GrpcEnable?: boolean
  /**
   * <p>健康探针</p>
   */
  HealthProbe?: HealthProbe
  /**
   * <p>滚动更新策略</p>
   */
  RollingUpdate?: RollingUpdate
  /**
   * <p>sidecar配置</p>
   */
  Sidecar?: SidecarSpec
  /**
   * <p>数据盘批量挂载配置，当前仅支持CFS，仅针对“模型来源-腾讯云存储、模型来源-腾讯云容器镜像、模型来源-资源组、模型来源-数据源”。</p>
   */
  VolumeMounts?: Array<VolumeMount>
  /**
   * <p>调度策略 [binpack] 优先占满整机，尽量避免碎卡（默认值）[spread] 优先分散在各个节点，确保服务高可用</p>
   */
  SchedulingStrategy?: string
  /**
   * <p>网关日志投递相关配置</p>
   */
  GatewayLogConfig?: LogConfig
  /**
   * <p>网关相关配置</p>
   */
  GatewayConfig?: GatewayConfig
}

/**
 * DescribeLogs请求参数结构体
 */
export interface DescribeLogsRequest {
  /**
   * <p>服务类型，TRAIN为任务式建模, NOTEBOOK为Notebook, INFER为在线服务, BATCH为批量预测<br>枚举值：</p><ul><li>TRAIN</li><li>NOTEBOOK</li><li>INFER</li><li>BATCH</li></ul>
   */
  Service: string
  /**
   * <p>日志查询开始时间（RFC3339格式的时间字符串），默认值为当前时间的前一个小时</p>
   */
  StartTime?: string
  /**
   * <p>日志查询结束时间（RFC3339格式的时间字符串），默认值为当前时间</p>
   */
  EndTime?: string
  /**
   * <p>日志查询条数，默认值100，最大值1000</p>
   */
  Limit?: number
  /**
   * <p>服务ID，和Service参数对应，不同Service的服务ID获取方式不同，具体如下：</p><ul><li>Service类型为TRAIN：<br>调用<a href="/document/product/851/75089">DescribeTrainingTask接口</a>查询训练任务详情，ServiceId为接口返回值中Response.TrainingTaskDetail.LatestInstanceId</li><li>Service类型为NOTEBOOK：<br>调用<a href="/document/product/851/95662">DescribeNotebook接口</a>查询Notebook详情，ServiceId为接口返回值中Response.NotebookDetail.PodName</li><li>Service类型为INFER：<br>调用<a href="/document/product/851/82285">DescribeModelServiceGroup接口</a>查询服务组详情，ServiceId为接口返回值中Response.ServiceGroup.Services.ServiceId</li><li>Service类型为BATCH：<br>调用<a href="/document/product/851/80180">DescribeBatchTask接口</a>查询跑批任务详情，ServiceId为接口返回值中Response.BatchTaskDetail.LatestInstanceId</li></ul>
   */
  ServiceId?: string
  /**
   * <p>Pod的名称，即需要查询服务对应的Pod，和Service参数对应，不同Service的PodName获取方式不同，具体如下：</p><ul><li>Service类型为TRAIN：<br>调用<a href="/document/product/851/75088">DescribeTrainingTaskPods接口</a>查询训练任务pod列表，PodName为接口返回值中Response.PodNames</li><li>Service类型为NOTEBOOK：<br>调用<a href="/document/product/851/95662">DescribeNotebook接口</a>查询Notebook详情，PodName为接口返回值中Response.NotebookDetail.PodName</li><li>Service类型为INFER：<br>调用<a href="/document/product/851/82287">DescribeModelService接口</a>查询单个服务详情，PodName为接口返回值中Response.Service.ServiceInfo.PodInfos</li><li>Service类型为BATCH：<br>调用<a href="/document/product/851/80180">DescribeBatchTask接口</a>查询跑批任务详情，PodName为接口返回值中Response.BatchTaskDetail. PodList<br>注：支持结尾通配符*</li></ul>
   */
  PodName?: string
  /**
   * <p>排序方向（可选值为ASC, DESC ），默认为DESC</p>
   */
  Order?: string
  /**
   * <p>按哪个字段排序（可选值为Timestamp），默认值为Timestamp</p>
   */
  OrderField?: string
  /**
   * <p>日志查询上下文，查询下一页的时候需要回传这个字段，该字段来自本接口的返回</p>
   */
  Context?: string
  /**
   * <p>过滤条件<br>注意: </p><ol><li>Filter.Name：目前只支持Key（也就是按关键字过滤日志）</li><li>Filter.Values：表示过滤日志的关键字；Values为多个的时候表示同时满足</li><li>Filter. Negative和Filter. Fuzzy没有使用</li></ol>
   */
  Filters?: Array<Filter>
  /**
   * <p>使用OFFSET分页查询时，指定返回的数据偏移量，默认为0</p>
   */
  Offset?: number
}

/**
 * DescribeModelAccelerateVersions请求参数结构体
 */
export interface DescribeModelAccelerateVersionsRequest {
  /**
   * 过滤条件
    Filter.Name: 枚举值: ModelJobName (任务名称)|TrainingModelVersionId (模型版本id)
    Filter.Values: 当长度为1时，支持模糊查询; 不为1时，精确查询
每次请求的Filters的上限为10，Filter.Values的上限为100
   */
  Filters?: Array<Filter>
  /**
   * 排序字段; 枚举值: CreateTime (创建时间) ；默认CreateTime
   */
  OrderField?: string
  /**
   * 排序方向; 枚举值: ASC | DESC；默认DESC
   */
  Order?: string
  /**
   * 分页查询起始位置，如：Limit为100，第一页Offset为0，第二页Offset为100...即每页左边为闭区间; 默认0
   */
  Offset?: number
  /**
   * 分页查询每页大小，最大20000; 默认10
   */
  Limit?: number
  /**
   * 模型ID
   */
  TrainingModelId?: string
}

/**
 * StopModelAccelerateTask请求参数结构体
 */
export interface StopModelAccelerateTaskRequest {
  /**
   * 模型加速任务ID
   */
  ModelAccTaskId: string
}

/**
 * DeleteTrainingModelVersion返回参数结构体
 */
export interface DeleteTrainingModelVersionResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 服务共享弹性网卡设置
 */
export interface ServiceEIP {
  /**
   * 是否开启TIONE内网到外部的访问
注意：此字段可能返回 null，表示取不到有效值。
   */
  EnableEIP?: boolean
  /**
   * 用户VpcId
注意：此字段可能返回 null，表示取不到有效值。
   */
  VpcId?: string
  /**
   * 用户subnetId
注意：此字段可能返回 null，表示取不到有效值。
   */
  SubnetId?: string
}

/**
 * DescribeExport返回参数结构体
 */
export interface DescribeExportResponse {
  /**
   * 日志下载任务的ID
   */
  ExportId?: string
  /**
   * 日志下载文件名
   */
  FileName?: string
  /**
   * 日志导出路径,有效期一个小时，请尽快使用该路径下载。
   */
  CosPath?: string
  /**
   * 下载任务创建时间
   */
  CreateTime?: string
  /**
   * 日志文件大小
   */
  FileSize?: string
  /**
   * 日志下载状态。Processing:导出正在进行中，Completed:导出完成，Failed:导出失败，Expired:日志导出已过期(三天有效期), Queuing 排队中
   */
  Status?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * Notebook列表元素
 */
export interface NotebookSetItem {
  /**
   * <p>notebook ID</p>
   */
  Id?: string
  /**
   * <p>notebook 名称</p>
   */
  Name?: string
  /**
   * <p>计费模式</p>
   */
  ChargeType?: string
  /**
   * <p>资源配置</p>
   */
  ResourceConf?: ResourceConf
  /**
   * <p>预付费资源组</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  ResourceGroupId?: string
  /**
   * <p>存储卷大小</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  VolumeSizeInGB?: number
  /**
   * <p>计费金额信息，eg：2.00元/小时 (for后付费)</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  BillingInfos?: Array<string>
  /**
   * <p>标签配置</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Tags?: Array<Tag>
  /**
   * <p>创建时间</p>
   */
  CreateTime?: string
  /**
   * <p>启动时间</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  StartTime?: string
  /**
   * <p>更新时间</p>
   */
  UpdateTime?: string
  /**
   * <p>运行时间</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  RuntimeInSeconds?: number
  /**
   * <p>计费状态</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  ChargeStatus?: string
  /**
   * <p>状态</p>
   */
  Status?: string
  /**
   * <p>错误原因</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  FailureReason?: string
  /**
   * <p>结束时间</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  EndTime?: string
  /**
   * <p>Pod名称</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  PodName?: string
  /**
   * <p>后付费资源规格名称</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  InstanceTypeAlias?: string
  /**
   * <p>预付费资源组名称</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  ResourceGroupName?: string
  /**
   * <p>是否自动终止</p>
   */
  AutoStopping?: boolean
  /**
   * <p>自动停止时间</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  AutomaticStopTime?: number
  /**
   * <p>存储的类型。取值包含：<br>    FREE:        预付费的免费存储<br>    CLOUD_PREMIUM： 高性能云硬盘<br>    CLOUD_SSD： SSD云硬盘<br>    CFS:     CFS存储，包含NFS和turbo</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  VolumeSourceType?: string
  /**
   * <p>CFS存储的配置</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  VolumeSourceCFS?: CFSConfig
  /**
   * <p>notebook 信息</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Message?: string
  /**
   * <p>notebook用户类型</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  UserTypes?: Array<string>
  /**
   * <p>SSH配置</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  SSHConfig?: SSHConfig
  /**
   * <p>GooseFS存储配置</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  VolumeSourceGooseFS?: GooseFS
  /**
   * <p>子用户ID</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  SubUin?: string
  /**
   * <p>子用户名称</p>
   */
  SubUinName?: string
  /**
   * <p>AppId</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  AppId?: string
  /**
   * <p>容器服务暴露端口配置</p>
   */
  ExposePortConfig?: ExposePortConfig
  /**
   * <p>描述</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Description?: string
  /**
   * <p>操作者信息</p>
   */
  LatestOperatorInfo?: OperatorInfo
}

/**
 * DescribeBillingResourceGroupAttachedWorkspaces返回参数结构体
 */
export interface DescribeBillingResourceGroupAttachedWorkspacesResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDataSources返回参数结构体
 */
export interface DescribeDataSourcesResponse {
  /**
   * 数据源列表
   */
  DataSourceInfos?: Array<DataSourceInfo>
  /**
   * 总条数
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyServiceGroupWeights返回参数结构体
 */
export interface ModifyServiceGroupWeightsResponse {
  /**
   * 更新权重后的服务组信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  ServiceGroup?: ServiceGroup
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 大模型生成Token统计
 */
export interface Usage {
  /**
   * 生成的token数目
   */
  CompletionTokens?: number
  /**
   * 输入的token数目
   */
  PromptTokens?: number
  /**
   * 总共token数目
   */
  TotalTokens?: number
}

/**
 * 描述网关相关配置
 */
export interface GatewayConfig {
  /**
   * 网关类型
   */
  GatewayType?: string
  /**
   * 网关调度算法：轮询、一致性哈希等
   */
  SchedulingAlgorithm?: string
  /**
   * 一致性哈希使用的Header字段名
   */
  HashHeaderKey?: string
}

/**
 * DescribeBillingResourceGroups请求参数结构体
 */
export interface DescribeBillingResourceGroupsRequest {
  /**
   * <p>TI工作空间ID</p><p>仅用于“工作空间”白名单功能。如需使用，请联系TI管理员开通白名单。</p>
   */
  TiProjectId?: string
  /**
   * Filter.Name: 枚举值: ResourceGroupId (资源组id列表)                    ResourceGroupName (资源组名称列表)                    AvailableNodeCount（资源组中可用节点数量） Filter.Values: 长度为1且Filter.Fuzzy=true时，支持模糊查询; 不为1时，精确查询每次请求的Filters的上限为5，Filter.Values的上限为100
   */
  Filters?: Array<Filter>
  /**
   * 标签过滤
   */
  TagFilters?: Array<TagFilter>
  /**
   * 偏移量，默认为0；分页查询起始位置，如：Limit为100，第一页Offset为0，第二页OffSet为100....即每页左边为闭区间
   */
  Offset?: number
  /**
   * 分页查询每页大小，默认20
   */
  Limit?: number
  /**
   * 支持模糊查找资源组id和资源组名
   */
  SearchWord?: string
  /**
   * 是否不展示节点列表; 
true: 不展示，false 展示；
默认为false
   */
  DontShowInstanceSet?: boolean
}

/**
 * DeleteNotebook请求参数结构体
 */
export interface DeleteNotebookRequest {
  /**
   * notebook id
   */
  Id: string
}

/**
 * PushTrainingMetrics请求参数结构体
 */
export interface PushTrainingMetricsRequest {
  /**
   * 指标数据
   */
  Data?: Array<MetricData>
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
  /**
   * 是否开启反向查询
   */
  Negative?: boolean
  /**
   * 是否开启模糊匹配
   */
  Fuzzy?: boolean
}

/**
 * DescribeTrainingModelVersions请求参数结构体
 */
export interface DescribeTrainingModelVersionsRequest {
  /**
   * 模型ID
   */
  TrainingModelId: string
  /**
   * 过滤条件
Filter.Name: 枚举值:
    TrainingModelVersionId (模型版本ID)
    ModelVersionType (模型版本类型) 其值支持: NORMAL(通用) ACCELERATE (加速)
    ModelFormat（模型格式）其值Filter.Values支持：
TORCH_SCRIPT/PYTORCH/DETECTRON2/SAVED_MODEL/FROZEN_GRAPH/PMML
    AlgorithmFramework (算法框架) 其值Filter.Values支持：TENSORFLOW/PYTORCH/DETECTRON2
Filter.Values: 当长度为1时，支持模糊查询; 不为1时，精确查询
每次请求的Filters的上限为10，Filter.Values的上限为100
   */
  Filters?: Array<Filter>
}

/**
 * CreateDataset请求参数结构体
 */
export interface CreateDatasetRequest {
  /**
   * 数据集名称，不超过60个字符，仅支持中英文、数字、下划线"_"、短横"-"，只能以中英文、数字开头
   */
  DatasetName: string
  /**
   * 数据集类型:
TYPE_DATASET_TEXT，文本
TYPE_DATASET_IMAGE，图片
TYPE_DATASET_TABLE，表格
TYPE_DATASET_OTHER，其他
   */
  DatasetType?: string
  /**
   * 数据源cos路径
   */
  StorageDataPath?: CosPathInfo
  /**
   * 数据集标签cos存储路径
   */
  StorageLabelPath?: CosPathInfo
  /**
   * 数据集标签
   */
  DatasetTags?: Array<Tag>
  /**
   * 数据集标注状态:
STATUS_NON_ANNOTATED，未标注
STATUS_ANNOTATED，已标注
   */
  AnnotationStatus?: string
  /**
   * 标注类型:
ANNOTATION_TYPE_CLASSIFICATION，图片分类
ANNOTATION_TYPE_DETECTION，目标检测
ANNOTATION_TYPE_SEGMENTATION，图片分割
ANNOTATION_TYPE_TRACKING，目标跟踪
ANNOTATION_TYPE_OCR，OCR
ANNOTATION_TYPE_TEXT_CLASSIFICATION，文本分类
   */
  AnnotationType?: string
  /**
   * 标注格式:
ANNOTATION_FORMAT_TI，TI平台格式
ANNOTATION_FORMAT_PASCAL，Pascal Voc
ANNOTATION_FORMAT_COCO，COCO
ANNOTATION_FORMAT_FILE，文件目录结构
ANNOTATION_FORMAT_TEXT_TI，文本类型TI平台格式
ANNOTATION_FORMAT_TXT，文本类型TXT格式
ANNOTATION_FORMAT_CSV，文本类型CSV格式
ANNOTATION_FORMAT_JSON，文本类型JSON格式
   */
  AnnotationFormat?: string
  /**
   * 表头信息
   */
  SchemaInfos?: Array<SchemaInfo>
  /**
   * 数据是否存在表头
   */
  IsSchemaExisted?: boolean
  /**
   * 导入文件粒度
TYPE_TEXT_LINE，按行
TYPE_TEXT_FILE，按文件
   */
  ContentType?: string
  /**
   * 数据集建模一级类别。LLM,CV,STRUCTURE,OTHER
   */
  DatasetScene?: string
  /**
   * 数据集标签。
   */
  SceneTags?: Array<string>
  /**
   * 数据集CFS配置。仅支持LLM场景
   */
  CFSConfig?: CFSConfig
}

/**
 * CreateDataset返回参数结构体
 */
export interface CreateDatasetResponse {
  /**
   * 数据集ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  DatasetId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 描述在线服务
 */
export interface Service {
  /**
   * 服务组id
   */
  ServiceGroupId?: string
  /**
   * 服务id
   */
  ServiceId?: string
  /**
   * 服务组名
   */
  ServiceGroupName?: string
  /**
   * 服务描述
注意：此字段可能返回 null，表示取不到有效值。
   */
  ServiceDescription?: string
  /**
   * 服务的详细信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  ServiceInfo?: ServiceInfo
  /**
   * 集群id
注意：此字段可能返回 null，表示取不到有效值。
   */
  ClusterId?: string
  /**
   * 地域
注意：此字段可能返回 null，表示取不到有效值。
   */
  Region?: string
  /**
   * 命名空间
注意：此字段可能返回 null，表示取不到有效值。
   */
  Namespace?: string
  /**
   * 付费类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  ChargeType?: string
  /**
   * 包年包月服务的资源组id，按量计费的服务为空
注意：此字段可能返回 null，表示取不到有效值。
   */
  ResourceGroupId?: string
  /**
   * 包年包月服务对应的资源组名字
注意：此字段可能返回 null，表示取不到有效值。
   */
  ResourceGroupName?: string
  /**
   * 服务的标签
注意：此字段可能返回 null，表示取不到有效值。
   */
  Tags?: Array<Tag>
  /**
   * 服务所在的 ingress 的 name
注意：此字段可能返回 null，表示取不到有效值。
   */
  IngressName?: string
  /**
   * 创建者
注意：此字段可能返回 null，表示取不到有效值。
   */
  CreatedBy?: string
  /**
   * 创建时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  CreateTime?: string
  /**
   * 更新时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  UpdateTime?: string
  /**
   * 主账号
注意：此字段可能返回 null，表示取不到有效值。
   */
  Uin?: string
  /**
   * 子账号
注意：此字段可能返回 null，表示取不到有效值。
   */
  SubUin?: string
  /**
   * app_id
注意：此字段可能返回 null，表示取不到有效值。
   */
  AppId?: number
  /**
   * 服务的业务状态
CREATING 创建中
CREATE_FAILED 创建失败
CREATE_SUCCEED 创建成功
ARREARS_STOP 因欠费停止
WHITELIST_STOP 白名单额度不足
RELEASE_FAILED 资源释放失败
WHITELIST_RELEASE_FAILED 白名单资源释放失败
TIMEOUT_EXCEPTION 创建超时异常
BILLING 计费中
WHITELIST_USING 白名单试用中
注意：此字段可能返回 null，表示取不到有效值。
   */
  BusinessStatus?: string
  /**
   * 已废弃,以ServiceInfo中的对应为准
   * @deprecated
   */
  ServiceLimit?: ServiceLimit
  /**
   * 已废弃,以ServiceInfo中的对应为准
   * @deprecated
   */
  ScheduledAction?: ScheduledAction
  /**
   * 服务创建失败的原因，创建成功后该字段为默认值 CREATE_SUCCEED
注意：此字段可能返回 null，表示取不到有效值。
   */
  CreateFailedReason?: string
  /**
   * 服务状态
CREATING 创建中
CREATE_FAILED 创建失败
TIMEOUT_EXCEPTION 创建超时异常
Normal 正常运行中
Stopped 已停止
Stopping 停止中
Abnormal 异常
Pending 启动中
Waiting 就绪中
注意：此字段可能返回 null，表示取不到有效值。
   */
  Status?: string
  /**
   * 费用信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  BillingInfo?: string
  /**
   * 模型权重
注意：此字段可能返回 null，表示取不到有效值。
   */
  Weight?: number
  /**
   * 服务的创建来源
AUTO_ML: 来自自动学习的一键发布
DEFAULT: 其他来源
注意：此字段可能返回 null，表示取不到有效值。
   */
  CreateSource?: string
  /**
   * 版本号
注意：此字段可能返回 null，表示取不到有效值。
   */
  Version?: string
  /**
   * 服务组下服务的最高版本号
注意：此字段可能返回 null，表示取不到有效值。
   */
  LatestVersion?: string
  /**
   * 资源组类别 托管 NORMAL，纳管 SW
注意：此字段可能返回 null，表示取不到有效值。
   */
  ResourceGroupSWType?: string
  /**
   * 服务的归档状态  Waiting 等待归档中，Archived 已归档
注意：此字段可能返回 null，表示取不到有效值。
   */
  ArchiveStatus?: string
  /**
   * 服务的部署类型 [STANDARD 标准部署，DIST 分布式多机部署] 默认STANDARD
注意：此字段可能返回 null，表示取不到有效值。
   */
  DeployType?: string
  /**
   * 单副本下的实例数，仅在部署类型为DIST时生效，默认1
注意：此字段可能返回 null，表示取不到有效值。
   */
  InstancePerReplicas?: string
  /**
   * 用于监控查询的Source
枚举值，部分情况下与CreateSource不同，通过该字段兼容
   */
  MonitorSource?: string
  /**
   * 服务创建者的子账号名称
   */
  SubUinName?: string
  /**
   * 服务的调度策略
   */
  SchedulingPolicy?: SchedulingPolicy
  /**
   * 外部的资源组信息，表示借调了哪些资源组的资源
   */
  ExternalResourceGroups?: Array<ResourceGroupInfo>
}

/**
 * 设备对应的镜像信息
 */
export interface DeviceImageInfo {
  /**
   * 设备类型, 支持GPU等
注意：此字段可能返回 null，表示取不到有效值。
   */
  DeviceType?: string
  /**
   * 镜像信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  ImageInfo?: ImageInfo
}

/**
 * 跨租户弹性网卡下Pod调用信息
 */
export interface CrossTenantENIInfo {
  /**
   * Pod IP
注意：此字段可能返回 null，表示取不到有效值。
   */
  PrimaryIP?: string
  /**
   * Pod Port
注意：此字段可能返回 null，表示取不到有效值。
   */
  Port?: string
}

/**
 * 模型专业参数
 */
export interface HyperParameter {
  /**
   * 最大nnz数
注意：此字段可能返回 null，表示取不到有效值。
   */
  MaxNNZ?: string
  /**
   * slot数
注意：此字段可能返回 null，表示取不到有效值。
   */
  SlotNum?: string
  /**
   * gpu cache 使用率
注意：此字段可能返回 null，表示取不到有效值。
   */
  CpuCachePercentage?: string
  /**
   * cpu cache 使用率
注意：此字段可能返回 null，表示取不到有效值。
   */
  GpuCachePercentage?: string
  /**
   * 是否开启分布式模式(true/false)
注意：此字段可能返回 null，表示取不到有效值。
   */
  EnableDistributed?: string
  /**
   * TORCH_SCRIPT、MMDETECTION、DETECTRON2、HUGGINGFACE格式在进行优化时切分子图的最小算子数目，一般无需进行改动，默认为3
注意：此字段可能返回 null，表示取不到有效值。
   */
  MinBlockSizePt?: string
  /**
   * FROZEN_GRAPH、SAVED_MODEL格式在进行优化时切分子图的最小算子数目，一般无需进行改动，默认为10
注意：此字段可能返回 null，表示取不到有效值。
   */
  MinBlockSizeTf?: string
  /**
   * Stable Diffusion 模型优化参数
注意：此字段可能返回 null，表示取不到有效值。
   */
  PipelineArgs?: string
  /**
   * Stable Diffusion 模型优化参数，控制Lora模型的影响效果
注意：此字段可能返回 null，表示取不到有效值。
   */
  LoraScale?: string
}

/**
 * DescribeDataSources请求参数结构体
 */
export interface DescribeDataSourcesRequest {
  /**
   * 过滤条件
   */
  Filters?: Array<Filter>
  /**
   * 标签过滤条件
   */
  TagFilters?: Array<TagFilter>
  /**
   * 偏移量
   */
  Offset?: number
  /**
   * 分页大小
   */
  Limit?: number
  /**
   * 排序的依据字段
   */
  OrderField?: string
  /**
   * 输出列表的排列顺序。取值范围：ASC：升序排列 DESC：降序排列
   */
  Order?: string
}

/**
 * CreateDataSource请求参数结构体
 */
export interface CreateDataSourceRequest {
  /**
   * 数据源名称
   */
  Name?: string
  /**
   * 数据源类型英文名
   */
  Type?: string
  /**
   * 数据源权限，取值有RW RO
   */
  Permission?: string
  /**
   * 存储实例ID
   */
  StorageId?: string
  /**
   * 数据源挂载配置
   */
  MountConfigure?: MountConfigureInfo
  /**
   * 标签配置
   */
  Tags?: Array<Tag>
}

/**
 * ModifyServiceGroupWeights请求参数结构体
 */
export interface ModifyServiceGroupWeightsRequest {
  /**
   * 服务组id
   */
  ServiceGroupId: string
  /**
   * 权重设置
   */
  Weights: Array<WeightEntry>
}

/**
 * DescribeTrainingTasks请求参数结构体
 */
export interface DescribeTrainingTasksRequest {
  /**
   * <p>TI工作空间ID</p><p>仅用于“工作空间”白名单功能。如需使用，请联系TI管理员开通白名单。</p>
   */
  TiProjectId?: string
  /**
   * 过滤器，eg：[{ "Name": "Id", "Values": ["train-23091792777383936"] }]

取值范围：
Name（名称）：task1
Id（task ID）：train-23091792777383936
Status（状态）：SUBMITTING/PENDING/STARTING / RUNNING / STOPPING / STOPPED / FAILED / SUCCEED / SUBMIT_FAILED
ResourceGroupId（资源组 Id）：trsg-kvvfrwl7
Creator（创建者 uin）：100014761913
ChargeType（计费类型）：PREPAID（预付费）/ POSTPAID_BY_HOUR（后付费）
CHARGE_STATUS（计费状态）：NOT_BILLING（未开始计费）/ BILLING（计费中）/ ARREARS_STOP（欠费停止）
   */
  Filters?: Array<Filter>
  /**
   * 标签过滤器，eg：[{ "TagKey": "TagKeyA", "TagValue": ["TagValueA"] }]
   */
  TagFilters?: Array<TagFilter>
  /**
   * 偏移量，默认为0
   */
  Offset?: number
  /**
   * 返回数量，默认为10，最大为50
   */
  Limit?: number
  /**
   * 输出列表的排列顺序。取值范围：ASC（升序排列）/ DESC（降序排列），默认为DESC
   */
  Order?: string
  /**
   * 排序的依据字段， 取值范围 "CreateTime" 、"UpdateTime"、"StartTime"，默认为UpdateTime
   */
  OrderField?: string
}

/**
 * 滚动更新策略
 */
export interface RollingUpdate {
  /**
   * 滚动更新的最大不可用
   */
  MaxUnavailable?: NumOrPercent
  /**
   * 滚动更新的最大新增实例
   */
  MaxSurge?: NumOrPercent
}

/**
 * 代码仓库配置
 */
export interface CodeRepoConfig {
  /**
   * 代码仓库Id
   */
  Id: string
  /**
   * 代码仓下载目标地址
   */
  TargetPath: string
}

/**
 * DescribeMountInstance返回参数结构体
 */
export interface DescribeMountInstanceResponse {
  /**
   * 挂载的实例详情
   */
  MountInstance?: MountInstanceInfo
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeMountInstances请求参数结构体
 */
export interface DescribeMountInstancesRequest {
  /**
   * 数据源类型英文名
   */
  Type: string
  /**
   * 偏移量
   */
  Offset?: number
  /**
   * 分页大小
   */
  Limit?: number
}

/**
 * ModifyNotebookTags返回参数结构体
 */
export interface ModifyNotebookTagsResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * UpdateDataSource请求参数结构体
 */
export interface UpdateDataSourceRequest {
  /**
   * 数据源ID
   */
  Id?: string
  /**
   * 数据源名称
   */
  Name?: string
  /**
   * 数据源权限，取值有RW RO
   */
  Permission?: string
  /**
   * 数据源挂载配置
   */
  MountConfigure?: MountConfigureInfo
}

/**
 * DescribeBillingResourceGroup返回参数结构体
 */
export interface DescribeBillingResourceGroupResponse {
  /**
   * 资源组节点总数； 注意接口是分页拉取的，total是指资源组节点总数，不是本次返回中InstanceSet数组的大小
注意：此字段可能返回 null，表示取不到有效值。
   */
  TotalCount?: number
  /**
   * 资源组节点信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  InstanceSet?: Array<Instance>
  /**
   * 资源组纳管类型
   */
  ResourceGroupSWType?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyNotebookTags请求参数结构体
 */
export interface ModifyNotebookTagsRequest {
  /**
   * Notebook Id
   */
  Id: string
  /**
   * Notebook修改标签集合
   */
  Tags?: Array<Tag>
}

/**
 * 服务的调用信息，服务组下唯一
 */
export interface ServiceCallInfo {
  /**
   * 服务组id
注意：此字段可能返回 null，表示取不到有效值。
   */
  ServiceGroupId?: string
  /**
   * 内网http调用地址
注意：此字段可能返回 null，表示取不到有效值。
   */
  InnerHttpAddr?: string
  /**
   * 内网https调用地址
注意：此字段可能返回 null，表示取不到有效值。
   */
  InnerHttpsAddr?: string
  /**
   * 内网http调用地址
注意：此字段可能返回 null，表示取不到有效值。
   */
  OuterHttpAddr?: string
  /**
   * 内网https调用地址
注意：此字段可能返回 null，表示取不到有效值。
   */
  OuterHttpsAddr?: string
  /**
   * 调用key
注意：此字段可能返回 null，表示取不到有效值。
   */
  AppKey?: string
  /**
   * 调用secret
注意：此字段可能返回 null，表示取不到有效值。
   */
  AppSecret?: string
  /**
   * 鉴权是否开启
注意：此字段可能返回 null，表示取不到有效值。
   */
  AuthorizationEnable?: boolean
}

/**
 * cos的路径信息
 */
export interface CosPathInfo {
  /**
   * 存储桶
注意：此字段可能返回 null，表示取不到有效值。
   */
  Bucket: string
  /**
   * 所在地域
注意：此字段可能返回 null，表示取不到有效值。
   */
  Region: string
  /**
   * 路径列表，目前只支持单个
注意：此字段可能返回 null，表示取不到有效值。
   */
  Paths: Array<string>
}

/**
 * DescribeBillingResourceGroups返回参数结构体
 */
export interface DescribeBillingResourceGroupsResponse {
  /**
   * 资源组总数； 注意接口是分页拉取的，total是指资源组总数，不是本次返回中ResourceGroupSet数组的大小
   */
  TotalCount?: number
  /**
   * 资源组详情
注意：此字段可能返回 null，表示取不到有效值。
   */
  ResourceGroupSet?: Array<ResourceGroup>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeTrainingTask请求参数结构体
 */
export interface DescribeTrainingTaskRequest {
  /**
   * 训练任务ID
   */
  Id: string
  /**
   * <p>TI工作空间ID</p><p>仅用于“工作空间”白名单功能。如需使用，请联系TI管理员开通白名单。</p>
   */
  TiProjectId?: string
  /**
   * 训练任务实例ID
   */
  InstanceId?: string
}

/**
 * StartNotebook返回参数结构体
 */
export interface StartNotebookResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 模型输入信息
 */
export interface ModelInputInfo {
  /**
   * input数据类型
FIXED：固定
RANGE：浮动
注意：此字段可能返回 null，表示取不到有效值。
   */
  ModelInputType: string
  /**
   * input数据尺寸
注意：此字段可能返回 null，表示取不到有效值。
   */
  ModelInputDimension: Array<string>
}

/**
 * 配置CFSTurbo参数
 */
export interface CFSTurbo {
  /**
   * CFSTurbo实例id
注意：此字段可能返回 null，表示取不到有效值。
   */
  Id?: string
  /**
   * CFSTurbo路径
注意：此字段可能返回 null，表示取不到有效值。
   */
  Path?: string
}

/**
 * DescribeTrainingModelVersion请求参数结构体
 */
export interface DescribeTrainingModelVersionRequest {
  /**
   * 模型版本ID
   */
  TrainingModelVersionId: string
}

/**
 * 资源组节点运行任务信息
 */
export interface ResourceInstanceRunningJobInfo {
  /**
   * <p>pod名称</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  PodName?: string
  /**
   * <p>任务类型</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  TaskType?: string
  /**
   * <p>任务id</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  TaskId?: string
  /**
   * <p>任务自定义名称</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  TaskName?: string
}

/**
 * 镜像列表过滤
 */
export interface ImageFIlter {
  /**
   * 过滤字段名称
   */
  Name: string
  /**
   * 过滤值
   */
  Values: Array<string>
  /**
   * 是否反选
   */
  Negative?: boolean
}

/**
 * 操作者信息
 */
export interface OperatorInfo {
  /**
   * <p>操作者子账号 UIN</p>
   */
  SubUin?: string
  /**
   * <p>操作者子账号名称</p>
   */
  SubUinName?: string
  /**
   * <p>是否为平台操作</p>
   */
  IsPlatformOperator?: boolean
  /**
   * <p>操作类型</p>
   */
  OperationType?: string
}

/**
 * 默认Nginx网关结构
 */
export interface DefaultNginxGatewayCallInfo {
  /**
   * host
注意：此字段可能返回 null，表示取不到有效值。
   */
  Host?: string
}

/**
 * CFS存储的配置
 */
export interface CFSConfig {
  /**
   * cfs的实例的ID
   */
  Id: string
  /**
   * 存储的路径
   */
  Path: string
  /**
   * cfs的挂载类型，可选值为：STORAGE、SOURCE 分别表示存储拓展模式和数据源模式，默认为 STORAGE
注意：此字段可能返回 null，表示取不到有效值。
   */
  MountType?: string
  /**
   * 协议 1: NFS, 2: TURBO
注意：此字段可能返回 null，表示取不到有效值。
   */
  Protocol?: string
}

/**
 * DescribeMountInstance请求参数结构体
 */
export interface DescribeMountInstanceRequest {
  /**
   * 数据源类型英文名
   */
  Type: string
  /**
   * 存储实例ID
   */
  StorageId?: string
}

/**
 * StartNotebook请求参数结构体
 */
export interface StartNotebookRequest {
  /**
   * notebook id
   */
  Id: string
}

/**
 * 用于表示百分比或数量
 */
export interface NumOrPercent {
  /**
   * Num,Percent ,分别表示数量和百分比，默认为 Num
   */
  Type?: string
  /**
   * 数值
   */
  Value?: number
}

/**
 * 推理镜像详情
 */
export interface InferTemplate {
  /**
   * 模板ID
   */
  InferTemplateId: string
  /**
   * 模板镜像
   */
  InferTemplateImage: string
}

/**
 * DescribeModelAccelerateVersions返回参数结构体
 */
export interface DescribeModelAccelerateVersionsResponse {
  /**
   * 优化模型总数； 注意接口是分页拉取的，total是指优化模型节点总数，不是本次返回中ModelAccelerateVersions数组的大小
注意：此字段可能返回 null，表示取不到有效值。
注意：此字段可能返回 null，表示取不到有效值。
   */
  TotalCount?: number
  /**
   * 优化模型列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  ModelAccelerateVersions?: Array<ModelAccelerateVersion>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeBuildInImages请求参数结构体
 */
export interface DescribeBuildInImagesRequest {
  /**
   * 镜像过滤器
   */
  ImageFilters?: Array<ImageFIlter>
}

/**
 * 数据源挂载配置
 */
export interface MountConfigureInfo {
  /**
   * 数据源的相对路径，支持<@subaccount>这样的占位符
   */
  WorkDir?: string
}

/**
 * StartTrainingTask请求参数结构体
 */
export interface StartTrainingTaskRequest {
  /**
   * 训练任务ID
   */
  Id: string
}

/**
 * DescribePlatformImages返回参数结构体
 */
export interface DescribePlatformImagesResponse {
  /**
   * 数量
   */
  TotalCount?: number
  /**
   * 镜像列表
   */
  PlatformImageInfos?: Array<PlatformImageInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 容器状态
 */
export interface ContainerStatus {
  /**
   * 重启次数
注意：此字段可能返回 null，表示取不到有效值。
   */
  RestartCount: number
  /**
   * 状态
注意：此字段可能返回 null，表示取不到有效值。
   */
  State: string
  /**
   * 是否就绪
注意：此字段可能返回 null，表示取不到有效值。
   */
  Ready: boolean
  /**
   * 状态原因
注意：此字段可能返回 null，表示取不到有效值。
   */
  Reason: string
  /**
   * 容器的错误信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  Message: string
}

/**
 * DescribeMountInstances返回参数结构体
 */
export interface DescribeMountInstancesResponse {
  /**
   * 挂载的实例列表
   */
  MountInstances?: Array<MountInstanceInfo>
  /**
   * 总条数
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * UpdateMountLimit请求参数结构体
 */
export interface UpdateMountLimitRequest {
  /**
   * 数据源类型英文名
   */
  Type: string
  /**
   * 存储实例ID
   */
  StorageId: string
  /**
   * 限制开关是否开启，只有开启时才有限制，默认关闭
   */
  LimitMount: boolean
}

/**
 * ModifyModelService请求参数结构体
 */
export interface ModifyModelServiceRequest {
  /**
   * 服务id
   */
  ServiceId: string
  /**
   * 模型信息，需要挂载模型时填写
   */
  ModelInfo?: ModelInfo
  /**
   * 镜像信息，配置服务运行所需的镜像地址等信息
   */
  ImageInfo?: ImageInfo
  /**
   * 环境变量，可选参数，用于配置容器中的环境变量
   */
  Env?: Array<EnvVar>
  /**
   * 资源描述，指定预付费模式下的cpu,mem,gpu等信息，后付费无需填写
   */
  Resources?: ResourceInfo
  /**
   * 使用DescribeBillingSpecs接口返回的规格列表中的值，或者参考实例列表:
TI.S.MEDIUM.POST	2C4G
TI.S.LARGE.POST	4C8G
TI.S.2XLARGE16.POST	8C16G
TI.S.2XLARGE32.POST	8C32G
TI.S.4XLARGE32.POST	16C32G
TI.S.4XLARGE64.POST	16C64G
TI.S.6XLARGE48.POST	24C48G
TI.S.6XLARGE96.POST	24C96G
TI.S.8XLARGE64.POST	32C64G
TI.S.8XLARGE128.POST 32C128G
TI.GN7.LARGE20.POST	4C20G T4*1/4
TI.GN7.2XLARGE40.POST	10C40G T4*1/2
TI.GN7.2XLARGE32.POST	8C32G T4*1
TI.GN7.5XLARGE80.POST	20C80G T4*1
TI.GN7.8XLARGE128.POST	32C128G T4*1
TI.GN7.10XLARGE160.POST	40C160G T4*2
TI.GN7.20XLARGE320.POST	80C320G T4*4
   */
  InstanceType?: string
  /**
   * 扩缩容类型 支持：自动 - "AUTO", 手动 - "MANUAL"
   */
  ScaleMode?: string
  /**
   * 实例数量, 不同计费模式和调节模式下对应关系如下
PREPAID 和 POSTPAID_BY_HOUR:
手动调节模式下对应 实例数量
自动调节模式下对应 基于时间的默认策略的实例数量
HYBRID_PAID:
后付费实例手动调节模式下对应 实例数量
后付费实例自动调节模式下对应 时间策略的默认策略的实例数量
   */
  Replicas?: number
  /**
   * 自动伸缩信息
   */
  HorizontalPodAutoscaler?: HorizontalPodAutoscaler
  /**
   * 是否开启日志投递，开启后需填写配置投递到指定cls
   */
  LogEnable?: boolean
  /**
   * 日志配置，需要投递服务日志到指定cls时填写
   */
  LogConfig?: LogConfig
  /**
   * 特殊更新行为： "STOP": 停止, "RESUME": 重启, "SCALE": 扩缩容, 存在这些特殊更新行为时，会忽略其他更新字段
   */
  ServiceAction?: string
  /**
   * 服务的描述
   */
  ServiceDescription?: string
  /**
   * 自动伸缩策略
   */
  ScaleStrategy?: string
  /**
   * 自动伸缩策略配置 HPA : 通过HPA进行弹性伸缩 CRON 通过定时任务进行伸缩
   */
  CronScaleJobs?: Array<CronScaleJob>
  /**
   * 计费模式[HYBRID_PAID]时生效, 用于标识混合计费模式下的预付费实例数, 若不填则默认为1
   */
  HybridBillingPrepaidReplicas?: number
  /**
   * 是否开启模型的热更新。默认不开启
   */
  ModelHotUpdateEnable?: boolean
  /**
   * 定时停止配置
   */
  ScheduledAction?: ScheduledAction
  /**
   * 服务限速限流相关配置
   */
  ServiceLimit?: ServiceLimit
  /**
   * 挂载配置，目前只支持CFS
   */
  VolumeMount?: VolumeMount
  /**
   * 是否开启模型的加速, 仅对StableDiffusion(动态加速)格式的模型有效。默认不开启
   */
  ModelTurboEnable?: boolean
  /**
   * 服务的启动命令，如遇特殊字符导致配置失败，可使用CommandBase64参数
   */
  Command?: string
  /**
   * 是否开启TIONE内网访问外部，此功能仅支持后付费机型与从TIONE平台购买的预付费机型；使用从CVM选择资源组时此配置不生效。
   */
  ServiceEIP?: ServiceEIP
  /**
   * 服务的启动命令，以base64格式进行输入，与Command同时配置时，仅当前参数生效
   */
  CommandBase64?: string
  /**
   * 服务端口，仅在非内置镜像时生效，默认8501。不支持输入8501-8510,6006,9092
   */
  ServicePort?: number
  /**
   * 单副本下的实例数，仅在部署类型为DIST时生效，默认1
   */
  InstancePerReplicas?: number
  /**
   * 服务的优雅退出时限。单位为秒，默认值为30，最小为1
   */
  TerminationGracePeriodSeconds?: number
  /**
   * 服务实例停止前执行的命令，执行完毕或执行时间超过优雅退出时限后实例结束
   */
  PreStopCommand?: Array<string>
  /**
   * 是否启动grpc端口
   */
  GrpcEnable?: boolean
  /**
   * 健康探针
   */
  HealthProbe?: HealthProbe
  /**
   * 滚动更新策略
   */
  RollingUpdate?: RollingUpdate
  /**
   * sidecar配置
   */
  Sidecar?: SidecarSpec
  /**
   * 资源组 id
   */
  ResourceGroupId?: string
  /**
   * 数据盘批量挂载配置，当前仅支持CFS，仅针对“模型来源-腾讯云存储、模型来源-腾讯云容器镜像、模型来源-资源组、模型来源-数据源”。
   */
  VolumeMounts?: Array<VolumeMount>
  /**
   * 调度策略 [binpack] 优先占满整机，尽量避免碎卡（默认值）[spread] 优先分散在各个节点，确保服务高可用
   */
  SchedulingStrategy?: string
  /**
   * 目标工作空间，不为0则进行迁移，源服务只允许在默认空间
   */
  TargetProjectId?: number
}

/**
 * ChatCompletion请求参数结构体
 */
export interface ChatCompletionRequest {
  /**
   * 对话的目标模型ID。
自行部署的开源大模型聊天：部署的模型服务组ID，形如ms-q7pfr29p。
   */
  Model: string
  /**
   * 输入对话历史。旧的对话在前，数组中最后一项应该为这次的问题。
   */
  Messages: Array<Message>
  /**
   * 仅当模型为自行部署的开源大模型时生效。采样随机值，默认值为0.7，取值范围[0,2]。较高的值(如0.8)将使输出更加随机，而较低的值(如0.2)将使输出更加确定。建议仅修改此参数或TopP，但不建议两者都修改。
   */
  Temperature?: number
  /**
   * 仅当模型为自行部署的开源大模型时生效。核采样，默认值为1，取值范围[0,1]。指的是预先设置一个概率界限 p，然后将所有可能生成的token，根据概率大小从高到低排列，依次选取。当这些选取的token的累积概率大于或等于 p 值时停止，然后从已经选取的token中进行采样，生成下一个token。例如top_p为0.1时意味着模型只考虑累积概率为10%的token。建议仅修改此参数或Temperature，不建议两者都修改。
   */
  TopP?: number
  /**
   * 仅当模型为自行部署的开源大模型时生效。默认 512，模型可生成内容的最长 token 数量，最大不能超过模型支持的上下文长度。
   */
  MaxTokens?: number
}

/**
 * CreateMountLimit返回参数结构体
 */
export interface CreateMountLimitResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 出参类型
 */
export interface TrainingTaskSetItem {
  /**
   * <p>训练任务ID</p>
   */
  Id?: string
  /**
   * <p>训练任务名称</p>
   */
  Name?: string
  /**
   * <p>框架名称</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  FrameworkName?: string
  /**
   * <p>训练框架版本</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  FrameworkVersion?: string
  /**
   * <p>框架运行环境</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  FrameworkEnvironment?: string
  /**
   * <p>计费模式</p>
   */
  ChargeType?: string
  /**
   * <p>计费状态，eg：BILLING计费中，ARREARS_STOP欠费停止，NOT_BILLING不在计费中</p>
   */
  ChargeStatus?: string
  /**
   * <p>预付费专用资源组</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  ResourceGroupId?: string
  /**
   * <p>资源配置</p>
   */
  ResourceConfigInfos?: Array<ResourceConfigInfo>
  /**
   * <p>训练模式eg：PS_WORKER、DDP、MPI、HOROVOD</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  TrainingMode?: string
  /**
   * <p>任务状态，eg：SUBMITTING提交中、PENDING排队中、<br>STARTING启动中、RUNNING运行中、STOPPING停止中、STOPPED已停止、FAILED异常、SUCCEED已完成</p>
   */
  Status?: string
  /**
   * <p>运行时长</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  RuntimeInSeconds?: number
  /**
   * <p>创建时间</p>
   */
  CreateTime?: string
  /**
   * <p>训练开始时间</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  StartTime?: string
  /**
   * <p>训练结束时间</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  EndTime?: string
  /**
   * <p>训练输出</p>
   */
  Output?: CosPathInfo
  /**
   * <p>失败原因</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  FailureReason?: string
  /**
   * <p>更新时间</p>
   */
  UpdateTime?: string
  /**
   * <p>计费金额信息，eg：2.00元/小时 (按量计费)</p>
   */
  BillingInfo?: string
  /**
   * <p>预付费专用资源组名称</p>
   */
  ResourceGroupName?: string
  /**
   * <p>自定义镜像信息</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  ImageInfo?: ImageInfo
  /**
   * <p>任务信息</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Message?: string
  /**
   * <p>标签配置</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Tags?: Array<Tag>
  /**
   * <p>回调地址</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  CallbackUrl?: string
  /**
   * <p>任务subUin信息</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  SubUin?: string
  /**
   * <p>任务创建者名称</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  SubUinName?: string
  /**
   * <p>任务AppId</p>
   */
  AppId?: string
  /**
   * <p>环境变量</p>
   */
  Envs?: Array<EnvVar>
  /**
   * <p>操作者信息</p>
   */
  LatestOperatorInfo?: OperatorInfo
}

/**
 * DescribeModelServiceCallInfo请求参数结构体
 */
export interface DescribeModelServiceCallInfoRequest {
  /**
   * 服务组id
   */
  ServiceGroupId: string
  /**
   * 服务分类
   * @deprecated
   */
  ServiceCategory?: string
}

/**
 * 数据点
 */
export interface DataPoint {
  /**
   * 指标名字
   */
  Name: string
  /**
   * 值
   */
  Value: number
}

/**
 * DescribeNotebook返回参数结构体
 */
export interface DescribeNotebookResponse {
  /**
   * 详情
   */
  NotebookDetail?: NotebookDetail
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 太极服务的调用信息
 */
export interface TJCallInfo {
  /**
   * 调用地址
注意：此字段可能返回 null，表示取不到有效值。
   */
  HttpAddr?: string
  /**
   * token
注意：此字段可能返回 null，表示取不到有效值。
   */
  Token?: string
  /**
   * 调用示例
注意：此字段可能返回 null，表示取不到有效值。
   */
  CallExample?: string
}

/**
 * CBS存储配置
 */
export interface CBSConfig {
  /**
   * 存储大小
注意：此字段可能返回 null，表示取不到有效值。
   */
  VolumeSizeInGB: number
}

/**
 * CreateTrainingModel请求参数结构体
 */
export interface CreateTrainingModelRequest {
  /**
   * 导入方式
MODEL：导入新模型
VERSION：导入新版本
EXIST：导入现有版本
   */
  ImportMethod: string
  /**
   * 推理环境来源（SYSTEM/CUSTOM）
   */
  ReasoningEnvironmentSource: string
  /**
   * 模型名称，不超过60个字符，仅支持中英文、数字、下划线"_"、短横"-"，只能以中英文、数字开头
   */
  TrainingModelName?: string
  /**
   * 标签配置
   */
  Tags?: Array<Tag>
  /**
   * 训练任务名称
   */
  TrainingJobName?: string
  /**
   * 模型来源cos目录，以/结尾
   */
  TrainingModelCosPath?: CosPathInfo
  /**
   * 算法框架 （PYTORCH/TENSORFLOW/DETECTRON2/PMML/MMDETECTION/ONNX)
   */
  AlgorithmFramework?: string
  /**
   * 推理环境
   */
  ReasoningEnvironment?: string
  /**
   * 训练指标，最多支持1000字符
   */
  TrainingModelIndex?: string
  /**
   * 模型版本
   */
  TrainingModelVersion?: string
  /**
   * 自定义推理环境
   */
  ReasoningImageInfo?: ImageInfo
  /**
   * 模型移动方式（CUT/COPY）
   */
  ModelMoveMode?: string
  /**
   * 训练任务ID
   */
  TrainingJobId?: string
  /**
   * 模型ID（导入新模型不需要，导入新版本需要）
   */
  TrainingModelId?: string
  /**
   * 模型存储cos目录
   */
  ModelOutputPath?: CosPathInfo
  /**
   * 模型来源 （JOB/COS）
   */
  TrainingModelSource?: string
  /**
   * 模型偏好
   */
  TrainingPreference?: string
  /**
   * 自动学习任务ID（已废弃）
   */
  AutoMLTaskId?: string
  /**
   * 任务版本
   */
  TrainingJobVersion?: string
  /**
   * 模型版本类型；
枚举值：NORMAL(通用)  ACCELERATE(加速)
注意:  默认为NORMAL
   */
  ModelVersionType?: string
  /**
   * 模型格式 （PYTORCH/TORCH_SCRIPT/DETECTRON2/SAVED_MODEL/FROZEN_GRAPH/PMML/MMDETECTION/ONNX/HUGGING_FACE_BERT/HUGGING_FACE_STABLE_DIFFUSION/HUGGING_FACE_STABLE_DIFFUSION_LORA/WEB_UI_STABLE_DIFFUSION）
   */
  ModelFormat?: string
  /**
   * 推理镜像ID
   */
  ReasoningEnvironmentId?: string
  /**
   * 模型自动清理开关(true/false)，当前版本仅支持SAVED_MODEL格式模型
   */
  AutoClean?: string
  /**
   * 模型数量保留上限(默认值为24个，上限为24，下限为1，步长为1)
   */
  MaxReservedModels?: number
  /**
   * 模型清理周期(默认值为1分钟，上限为1440，下限为1分钟，步长为1)
   */
  ModelCleanPeriod?: number
  /**
   * 是否QAT模型
   */
  IsQAT?: boolean
}

/**
 * 表格数据集表头信息
 */
export interface SchemaInfo {
  /**
   * 长度30字符内
   */
  Name: string
  /**
   * 数据类型
   */
  Type: string
}

/**
 * 启动命令信息
 */
export interface StartCmdInfo {
  /**
   * 启动命令
   */
  StartCmd?: string
  /**
   * ps启动命令
   */
  PsStartCmd?: string
  /**
   * worker启动命令
   */
  WorkerStartCmd?: string
}

/**
 * K8s的Event
 */
export interface Event {
  /**
   * 事件的id
注意：此字段可能返回 null，表示取不到有效值。
   */
  Id: string
  /**
   * 事件的具体信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  Message: string
  /**
   * 事件第一次发生的时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  FirstTimestamp: string
  /**
   * 事件最后一次发生的时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  LastTimestamp: string
  /**
   * 事件发生的次数
注意：此字段可能返回 null，表示取不到有效值。
   */
  Count: number
  /**
   * 事件的类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  Type: string
  /**
   * 事件关联的资源的类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  ResourceKind: string
  /**
   * 事件关联的资源的名字
注意：此字段可能返回 null，表示取不到有效值。
   */
  ResourceName: string
}

/**
 * DescribeBillingResourceGroupAttachedWorkspaces请求参数结构体
 */
export interface DescribeBillingResourceGroupAttachedWorkspacesRequest {
  /**
   * <p>TI工作空间ID</p><p>仅用于“工作空间”白名单功能。如需使用，请联系TI管理员开通白名单。</p>
   */
  TiProjectId?: string
}

/**
 * DescribeModelServiceGroups返回参数结构体
 */
export interface DescribeModelServiceGroupsResponse {
  /**
   * <p>推理服务组数量。</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  TotalCount?: number
  /**
   * <p>服务组信息</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  ServiceGroups?: Array<ServiceGroup>
  /**
   * <p>当前uin和region下全量服务组数量</p>
   */
  GlobalTotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 计费项内容
 */
export interface Spec {
  /**
   * 计费项标签
   */
  SpecId?: string
  /**
   * 计费项名称
   */
  SpecName?: string
  /**
   * 计费项显示名称
   */
  SpecAlias?: string
  /**
   * 是否售罄
   */
  Available?: boolean
  /**
   * 当前资源售罄时，可用的区域有哪些
   */
  AvailableRegion?: Array<string>
  /**
   * 当前计费项支持的特性
注意：此字段可能返回 null，表示取不到有效值。
   */
  SpecFeatures?: Array<string>
  /**
   * 计费项类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  SpecType?: string
  /**
   * GPU类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  GpuType?: string
  /**
   * 计费项CategoryId
注意：此字段可能返回 null，表示取不到有效值。
   */
  CategoryId?: string
}

/**
 * DescribeDataSource请求参数结构体
 */
export interface DescribeDataSourceRequest {
  /**
   * <p>TI工作空间ID</p><p>仅用于“工作空间”白名单功能。如需使用，请联系TI管理员开通白名单。</p>
   */
  TiProjectId?: string
  /**
   * 数据源id
   */
  Id?: string
}

/**
 * DescribePublicAlgoVersionList返回参数结构体
 */
export interface DescribePublicAlgoVersionListResponse {
  /**
   * 算法版本数量
注意：此字段可能返回 null，表示取不到有效值。
   */
  TotalCount?: number
  /**
   * 公共算法版本列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  PublicAlgoVersions?: Array<PublicAlgoVersion>
  /**
   * 聚合后的公共算法版本列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  AggregatePublicAlgoVersions?: Array<AggregatePublicAlgoVersion>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeBillingResourceInstanceRunningJobs返回参数结构体
 */
export interface DescribeBillingResourceInstanceRunningJobsResponse {
  /**
   * 资源组节点运行中的任务信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  ResourceInstanceRunningJobInfos?: Array<ResourceInstanceRunningJobInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 服务的调用信息，服务组下唯一
 */
export interface InferGatewayCallInfo {
  /**
   * 内网http调用地址
注意：此字段可能返回 null，表示取不到有效值。
   */
  VpcHttpAddr: string
  /**
   * 内网https调用地址
注意：此字段可能返回 null，表示取不到有效值。
   */
  VpcHttpsAddr: string
  /**
   * 内网grpc调用地址
注意：此字段可能返回 null，表示取不到有效值。
   */
  VpcGrpcTlsAddr: string
  /**
   * 可访问的vpcid
注意：此字段可能返回 null，表示取不到有效值。
   */
  VpcId: string
  /**
   * 后端ip对应的子网
注意：此字段可能返回 null，表示取不到有效值。
   */
  SubnetId: string
}

/**
 * CreateDataSource返回参数结构体
 */
export interface CreateDataSourceResponse {
  /**
   * 数据源ID
   */
  Id?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 在线服务中服务的资源组简略信息结构
 */
export interface ResourceGroupInfo {
  /**
   * 资源组 id
   */
  ResourceGroupId?: string
  /**
   * 资源组名称
   */
  ResourceGroupName?: string
}

/**
 * CreateNotebook请求参数结构体
 */
export interface CreateNotebookRequest {
  /**
   * <p>名称。不超过60个字符，仅支持中英文、数字、下划线&quot;_&quot;、短横&quot;-&quot;，只能以中英文、数字开头</p>
   */
  Name: string
  /**
   * <p>计算资源付费模式 ，可选值为：<br>PREPAID：预付费，即包年包月<br>POSTPAID_BY_HOUR：按小时后付费</p>
   */
  ChargeType: string
  /**
   * <p>计算资源配置</p>
   */
  ResourceConf: ResourceConf
  /**
   * <p>是否上报日志</p>
   */
  LogEnable: boolean
  /**
   * <p>是否ROOT权限</p>
   */
  RootAccess: boolean
  /**
   * <p>是否自动停止</p>
   */
  AutoStopping: boolean
  /**
   * <p>是否访问公网</p>
   */
  DirectInternetAccess: boolean
  /**
   * <p>资源组ID(for预付费)</p>
   */
  ResourceGroupId?: string
  /**
   * <p>Vpc-Id</p>
   */
  VpcId?: string
  /**
   * <p>子网Id</p>
   */
  SubnetId?: string
  /**
   * <p>存储的类型。取值包含：<br>FREE：预付费的免费存储<br>CLOUD_PREMIUM：高性能云硬盘<br>CLOUD_SSD：SSD云硬盘<br>CFS：CFS存储<br>CFS_TURBO：CFS Turbo存储<br>GooseFSx：GooseFSx存储</p>
   */
  VolumeSourceType?: string
  /**
   * <p>云硬盘存储卷大小，单位GB</p>
   */
  VolumeSizeInGB?: number
  /**
   * <p>CFS存储的配置</p>
   */
  VolumeSourceCFS?: CFSConfig
  /**
   * <p>日志配置</p>
   */
  LogConfig?: LogConfig
  /**
   * <p>生命周期脚本的ID</p>
   */
  LifecycleScriptId?: string
  /**
   * <p>默认GIT存储库的ID</p>
   */
  DefaultCodeRepoId?: string
  /**
   * <p>其他GIT存储库的ID，最多3个</p>
   */
  AdditionalCodeRepoIds?: Array<string>
  /**
   * <p>自动停止时间，单位小时</p>
   */
  AutomaticStopTime?: number
  /**
   * <p>标签配置</p>
   */
  Tags?: Array<Tag>
  /**
   * <p>数据存储挂载配置</p>
   */
  DataConfigs?: Array<DataConfig>
  /**
   * <p>镜像信息</p>
   */
  ImageInfo?: ImageInfo
  /**
   * <p>镜像类型，包括SYSTEM、TCR、CCR</p>
   */
  ImageType?: string
  /**
   * <p>SSH配置信息</p>
   */
  SSHConfig?: SSHConfig
  /**
   * <p>GooseFS存储配置</p>
   */
  VolumeSourceGooseFS?: GooseFS
  /**
   * <p>描述</p>
   */
  Description?: string
}

/**
 * CreatePresignedNotebookUrl返回参数结构体
 */
export interface CreatePresignedNotebookUrlResponse {
  /**
   * 携带认证TOKEN的URL
   */
  AuthorizedUrl?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyNotebook请求参数结构体
 */
export interface ModifyNotebookRequest {
  /**
   * <p>notebook id</p>
   */
  Id: string
  /**
   * <p>名称。不超过60个字符，仅支持中英文、数字、下划线&quot;_&quot;、短横&quot;-&quot;，只能以中英文、数字开头</p>
   */
  Name: string
  /**
   * <p>（不允许修改）计算资源付费模式 ，可选值为：<br>PREPAID：预付费，即包年包月<br>POSTPAID_BY_HOUR：按小时后付费</p>
   */
  ChargeType: string
  /**
   * <p>计算资源配置</p>
   */
  ResourceConf: ResourceConf
  /**
   * <p>是否自动停止</p>
   */
  AutoStopping: boolean
  /**
   * <p>是否访问公网</p>
   */
  DirectInternetAccess: boolean
  /**
   * <p>是否ROOT权限</p>
   */
  RootAccess: boolean
  /**
   * <p>是否上报日志</p>
   */
  LogEnable: boolean
  /**
   * <p>资源组ID(for预付费)</p>
   */
  ResourceGroupId?: string
  /**
   * <p>（不允许修改）Vpc-Id</p>
   */
  VpcId?: string
  /**
   * <p>（不允许修改）子网Id</p>
   */
  SubnetId?: string
  /**
   * <p>存储卷大小，单位GB</p>
   */
  VolumeSizeInGB?: number
  /**
   * <p>（不允许修改）存储的类型。取值包含：<br>    FREE:    预付费的免费存储<br>    CLOUD_PREMIUM： 高性能云硬盘<br>    CLOUD_SSD： SSD云硬盘<br>    CFS:     CFS存储，包含NFS和turbo</p>
   */
  VolumeSourceType?: string
  /**
   * <p>（不允许修改）CFS存储的配置</p>
   */
  VolumeSourceCFS?: CFSConfig
  /**
   * <p>日志配置</p>
   */
  LogConfig?: LogConfig
  /**
   * <p>生命周期脚本的ID</p>
   */
  LifecycleScriptId?: string
  /**
   * <p>默认GIT存储库的ID</p>
   */
  DefaultCodeRepoId?: string
  /**
   * <p>其他GIT存储库的ID，最多3个</p>
   */
  AdditionalCodeRepoIds?: Array<string>
  /**
   * <p>自动停止时间，单位小时</p>
   */
  AutomaticStopTime?: number
  /**
   * <p>标签配置</p>
   */
  Tags?: Array<Tag>
  /**
   * <p>数据配置，只支持WEDATA_HDFS</p>
   */
  DataConfigs?: Array<DataConfig>
  /**
   * <p>镜像信息</p>
   */
  ImageInfo?: ImageInfo
  /**
   * <p>镜像类型，包括SYSTEM、TCR、CCR</p>
   */
  ImageType?: string
  /**
   * <p>SSH配置</p>
   */
  SSHConfig?: SSHConfig
  /**
   * <p>自定义环境变量</p>
   */
  Envs?: Array<EnvVar>
  /**
   * <p>描述</p>
   */
  Description?: string
}

/**
 * hpa的描述
 */
export interface HorizontalPodAutoscaler {
  /**
   * 最小实例数
注意：此字段可能返回 null，表示取不到有效值。
   */
  MinReplicas: number
  /**
   * 最大实例数
注意：此字段可能返回 null，表示取不到有效值。
   */
  MaxReplicas: number
  /**
   * 支持：
"gpu-util": GPU利用率。范围{10, 100}      "cpu-util": CPU利用率。范围{10, 100}	      "memory-util": 内存利用率。范围{10, 100}      "service-qps": 单个实例QPS值。范围{1, 5000}
"concurrency-util":单个实例请求数量值。范围{1,100000}
注意：此字段可能返回 null，表示取不到有效值。
   */
  HpaMetrics: Array<Option>
  /**
   * 扩容观察期，单位秒
   */
  ScaleUpStabilizationWindowSeconds?: number
  /**
   * 缩容观察期，单位秒
   */
  ScaleDownStabilizationWindowSeconds?: number
}

/**
 * CreateTrainingModel返回参数结构体
 */
export interface CreateTrainingModelResponse {
  /**
   * 模型ID，TrainingModel ID
   */
  Id?: string
  /**
   * 模型版本ID
   */
  TrainingModelVersionId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 资源配置
 */
export interface ResourceConfigInfo {
  /**
   * 角色，eg：PS、WORKER、DRIVER、EXECUTOR
   */
  Role: string
  /**
   * cpu核数，使用资源组时需配置。单位：1/1000，即1000=1核
   */
  Cpu?: number
  /**
   * 内存，使用资源组时需配置。单位为MB
   */
  Memory?: number
  /**
   * gpu卡类型，使用资源组时需配置
   */
  GpuType?: string
  /**
   * gpu卡数，使用资源组时需配置。单位：1/100，即100=1卡
   */
  Gpu?: number
  /**
   * 算力规格ID
计算规格 (for后付费)，可选值如下：
TI.S.LARGE.POST: 4C8G 
TI.S.2XLARGE16.POST:  8C16G 
TI.S.2XLARGE32.POST:  8C32G 
TI.S.4XLARGE32.POST:  16C32G
TI.S.4XLARGE64.POST:  16C64G
TI.S.6XLARGE48.POST:  24C48G
TI.S.6XLARGE96.POST:  24C96G
TI.S.8XLARGE64.POST:  32C64G
TI.S.8XLARGE128.POST : 32C128G
TI.GN10.2XLARGE40.POST: 8C40G V100*1 
TI.GN10.5XLARGE80.POST:  18C80G V100*2 
TI.GN10.10XLARGE160.POST :  32C160G V100*4
TI.GN10.20XLARGE320.POST :  72C320G V100*8
TI.GN7.8XLARGE128.POST: 32C128G T4*1 
TI.GN7.10XLARGE160.POST: 40C160G T4*2 
TI.GN7.20XLARGE320.POST: 80C32
   */
  InstanceType?: string
  /**
   * 计算节点数
   */
  InstanceNum?: number
  /**
   * 算力规格名称
计算规格 (for后付费)，可选值如下：
4C8G 
8C16G 
8C32G 
16C32G
6C64G
24C48G
24C96G
32C64G
32C128G
8C40G V100*1 
8C80G V100*2 
32C160G V100*4
72C320G V100*8
32C128G T4*1 
40C160G T4*2 
80C32
   */
  InstanceTypeAlias?: string
  /**
   * RDMA配置
注意：此字段可能返回 null，表示取不到有效值。
   */
  RDMAConfig?: RDMAConfig
}

/**
 * 公有云数据源结构
 */
export interface PublicDataSourceFS {
  /**
   * 数据源id
   */
  DataSourceId?: string
  /**
   * 相对数据源子路径
   */
  SubPath?: string
}

/**
 * 暴露端口信息
 */
export interface ExposePortConfig {
  /**
   * 是否开启暴露容器服务端口
注意：此字段可能返回 null，表示取不到有效值。
   */
  Enable?: boolean
  /**
   * vpc id
注意：此字段可能返回 null，表示取不到有效值。
   */
  VpcId?: string
  /**
   * clb id
注意：此字段可能返回 null，表示取不到有效值。
   */
  ClbId?: string
  /**
   * clb domain
注意：此字段可能返回 null，表示取不到有效值。
   */
  ClbHost?: string
}

/**
 * 键值对
 */
export interface Option {
  /**
   * 指标名
   */
  Name: string
  /**
   * 指标值
   */
  Value: number
}

/**
 * DescribeMountLimits请求参数结构体
 */
export interface DescribeMountLimitsRequest {
  /**
   * 过滤条件
   */
  Filters?: Array<Filter>
  /**
   * 偏移量
   */
  Offset?: number
  /**
   * 分页大小
   */
  Limit?: number
  /**
   * 输出列表的排列顺序。取值范围：ASC：升序排列 DESC：降序排列
   */
  Order?: string
  /**
   * 排序的依据字段
   */
  OrderField?: string
}

/**
 * DeleteExport返回参数结构体
 */
export interface DeleteExportResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 默认内网调用信息
 */
export interface DefaultInnerCallInfo {
  /**
   * 可以进行调用的VPC-ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  VpcIds?: Array<string>
  /**
   * 默认内网调用地址
注意：此字段可能返回 null，表示取不到有效值。
   */
  InnerHttpAddr?: string
}

/**
 * AuthToken 的基础信息
 */
export interface AuthTokenBase {
  /**
   * token 值
   */
  Value?: string
  /**
   * token 别名
   */
  Name?: string
  /**
   * token 描述
   */
  Description?: string
  /**
   * token 创建时间
   */
  CreateTime?: string
  /**
   * token状态
   */
  Status?: string
  /**
   * token的唯一id，与value一一对应，重置后id也会一并变化
   */
  Id?: string
}

/**
 * ModifyModelServiceAuthToken请求参数结构体
 */
export interface ModifyModelServiceAuthTokenRequest {
  /**
   * 服务组 id
   */
  ServiceGroupId: string
  /**
   * 是否需要重置，如果为 true，重置 token 值
   */
  NeedReset?: boolean
  /**
   * AuthToken 数据
   */
  AuthToken?: AuthToken
}

/**
 * 服务的调度策略配置
 */
export interface SchedulingPolicy {
  /**
   * 是否启用了跨资源组调度开关
   */
  CrossResourceGroupScheduling?: boolean
}

/**
 * 单条日志数据结构
 */
export interface LogIdentity {
  /**
   * 单条日志的ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  Id: string
  /**
   * 单条日志的内容
注意：此字段可能返回 null，表示取不到有效值。
   */
  Message: string
  /**
   * 这条日志对应的Pod名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  PodName: string
  /**
   * 日志的时间戳（RFC3339格式的时间字符串）
注意：此字段可能返回 null，表示取不到有效值。
   */
  Timestamp: string
}

/**
 * 挂载的实例列表
 */
export interface MountInstanceInfo {
  /**
   * <p>类型英文名</p>
   */
  Type?: string
  /**
   * <p>存储实例ID</p>
   */
  StorageId?: string
  /**
   * <p>存储实例名称</p>
   */
  StorageName?: string
  /**
   * <p>状态</p><p>枚举值：</p><ul><li>0： 可挂载（正常）</li><li>1： 不可挂载（挂载限制）</li><li>2： 不可挂载（存储配置关闭）</li></ul>
   */
  Status?: number
  /**
   * <p>额外配置</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  ExtraConf?: StorageExtraConf
}

/**
 * DescribeDatasets请求参数结构体
 */
export interface DescribeDatasetsRequest {
  /**
   * 数据集id列表
   */
  DatasetIds?: Array<string>
  /**
   * 数据集查询过滤条件，多个Filter之间的关系为逻辑与（AND）关系，过滤字段Filter.Name，类型为String
DatasetName，数据集名称
DatasetScope，数据集范围，SCOPE_DATASET_PRIVATE或SCOPE_DATASET_PUBLIC
   */
  Filters?: Array<Filter>
  /**
   * 标签过滤条件
   */
  TagFilters?: Array<TagFilter>
  /**
   * 排序值，支持Asc或Desc，默认Desc
   */
  Order?: string
  /**
   * 排序字段，支持CreateTime或UpdateTime，默认CreateTime
   */
  OrderField?: string
  /**
   * 偏移值
   */
  Offset?: number
  /**
   * 返回数据个数，默认20，最大支持200
   */
  Limit?: number
  /**
   * 是否检查CFS。若开启，则在CFS挂载好之前，不会返回数据集列表。
   */
  CFSChecking?: boolean
  /**
   * 是否返回CFS详情。
   */
  CFSDetail?: boolean
}

/**
 * 优化模型版本列表
 */
export interface ModelAccelerateVersion {
  /**
   * 模型id
注意：此字段可能返回 null，表示取不到有效值。
   */
  ModelId: string
  /**
   * 优化模型版本id
注意：此字段可能返回 null，表示取不到有效值。
   */
  ModelVersionId: string
  /**
   * 优化任务id
注意：此字段可能返回 null，表示取不到有效值。
   */
  ModelJobId: string
  /**
   * 优化任务名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  ModelJobName: string
  /**
   * 优化后模型版本
注意：此字段可能返回 null，表示取不到有效值。
   */
  ModelVersion: string
  /**
   * 加速比
注意：此字段可能返回 null，表示取不到有效值。
   */
  SpeedUp: string
  /**
   * 模型来源/任务名称/任务版本
注意：此字段可能返回 null，表示取不到有效值。
   */
  ModelSource: ModelSource
  /**
   * 模型cos路径
注意：此字段可能返回 null，表示取不到有效值。
   */
  CosPathInfo: CosPathInfo
  /**
   * 创建时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  CreateTime: string
  /**
   * 模型规范
注意：此字段可能返回 null，表示取不到有效值。
   */
  ModelFormat: string
  /**
   * 状态
注意：此字段可能返回 null，表示取不到有效值。
   */
  Status: string
  /**
   * 进度
注意：此字段可能返回 null，表示取不到有效值。
   */
  Progress: number
  /**
   * 错误信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  ErrorMsg: string
  /**
   * GPU类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  GPUType: string
  /**
   * 模型cos路径
注意：此字段可能返回 null，表示取不到有效值。
   */
  ModelCosPath: CosPathInfo
}

/**
 * DeleteTrainingModel返回参数结构体
 */
export interface DeleteTrainingModelResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeInferTemplates返回参数结构体
 */
export interface DescribeInferTemplatesResponse {
  /**
   * 模板列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  FrameworkTemplates: Array<InferTemplateGroup>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeBillingSpecs请求参数结构体
 */
export interface DescribeBillingSpecsRequest {
  /**
   * 付费模式：POSTPAID_BY_HOUR按量计费、PREPAID包年包月
   */
  ChargeType: string
  /**
   * 枚举值：空、TRAIN、NOTEBOOK、INFERENCE或EMS
   */
  TaskType?: string
  /**
   * 资源类型：["", "CALC", "CPU", "GPU", "GPU-SW"]
   */
  ResourceType?: string
}

/**
 * RDMA配置
 */
export interface RDMAConfig {
  /**
   * 是否开启RDMA
注意：此字段可能返回 null，表示取不到有效值。
   */
  Enable?: boolean
}

/**
 * 推理代码的信息
 */
export interface InferCodeInfo {
  /**
   * 推理代码所在的cos详情
注意：此字段可能返回 null，表示取不到有效值。
   */
  CosPathInfo: CosPathInfo
}

/**
 * 训练超参
 */
export interface TrainParam {
  /**
   * 参数名
注意：此字段可能返回 null，表示取不到有效值。
   */
  Name?: string
  /**
   * 默认参数值
注意：此字段可能返回 null，表示取不到有效值。
   */
  DefaultValue?: string
  /**
   * 参数注释
注意：此字段可能返回 null，表示取不到有效值。
   */
  Comment?: string
  /**
   * 参数类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  Type?: string
  /**
   * 是否必选
   */
  Required?: boolean
  /**
   * 参数值
   */
  Value?: string
  /**
   * 参数范围
   */
  Range?: Array<string>
  /**
   * 参数选项
   */
  Enum?: Array<string>
}

/**
 * DescribeInferTemplates请求参数结构体
 */
export type DescribeInferTemplatesRequest = null

/**
 * ModifyModelServiceAuthorization请求参数结构体
 */
export interface ModifyModelServiceAuthorizationRequest {
  /**
   * 服务组Id
   */
  ServiceGroupId: string
  /**
   * 是否开启鉴权,true表示开启
   */
  AuthorizationEnable?: boolean
}

/**
 * DeleteModelServiceGroup返回参数结构体
 */
export interface DeleteModelServiceGroupResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 对应设备的物料信息
 */
export interface DeviceMaterialInfo {
  /**
   * 设备信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  DeviceType?: string
  /**
   * 物料信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  MaterialInfo?: MaterialInfo
}

/**
 * gpu 详情
 */
export interface GpuDetail {
  /**
   * GPU 显卡类型；枚举值: V100 A100 T4
注意：此字段可能返回 null，表示取不到有效值。
   */
  Name?: string
  /**
   * GPU 显卡数；单位为1/100卡，比如100代表1卡
注意：此字段可能返回 null，表示取不到有效值。
   */
  Value?: number
}

/**
 * CreateExport返回参数结构体
 */
export interface CreateExportResponse {
  /**
   * 日志下载任务的ID
   */
  ExportId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 定时扩缩任务
 */
export interface CronScaleJob {
  /**
   * Cron表达式，标识任务的执行时间，精确到分钟级
   */
  Schedule: string
  /**
   * 定时任务名
注意：此字段可能返回 null，表示取不到有效值。
   */
  Name?: string
  /**
   * 目标实例数
注意：此字段可能返回 null，表示取不到有效值。
   */
  TargetReplicas?: number
  /**
   * 目标min
注意：此字段可能返回 null，表示取不到有效值。
   */
  MinReplicas?: number
  /**
   * 目标max
注意：此字段可能返回 null，表示取不到有效值。
   */
  MaxReplicas?: number
  /**
   * 例外时间，Cron表达式，在对应时间内不执行任务。最多支持3条。
注意：此字段可能返回 null，表示取不到有效值。
   */
  ExcludeDates?: Array<string>
}

/**
 * 私有连接信息
 */
export interface PrivateLinkInfo {
  /**
   * 私有连接所在的VPCID
注意：此字段可能返回 null，表示取不到有效值。
   */
  VpcId?: string
  /**
   * 私有连接所在的子网ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  SubnetId?: string
  /**
   * HTTP内网调用地址
注意：此字段可能返回 null，表示取不到有效值。
   */
  InnerHttpAddr?: Array<string>
  /**
   * HTTPS内网调用地址
注意：此字段可能返回 null，表示取不到有效值。
   */
  InnerHttpsAddr?: Array<string>
  /**
   * 私有连接状态
注意：此字段可能返回 null，表示取不到有效值。
   */
  State?: string
  /**
   * grpc内网调用地址
   */
  InnerGrpcAddr?: Array<string>
}

/**
 * DescribeNotebooks返回参数结构体
 */
export interface DescribeNotebooksResponse {
  /**
   * notebook详情
   */
  NotebookSet?: Array<NotebookSetItem>
  /**
   * 总条数
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeMountLimits返回参数结构体
 */
export interface DescribeMountLimitsResponse {
  /**
   * 挂载限制列表
   */
  MountLimits?: Array<MountLimitInfo>
  /**
   * 总数
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 推理镜像组
 */
export interface InferTemplateGroup {
  /**
   * 算法框架
注意：此字段可能返回 null，表示取不到有效值。
   */
  Framework: string
  /**
   * 版本号
注意：此字段可能返回 null，表示取不到有效值。
   */
  FrameworkVersion: string
  /**
   * 支持的训练框架集合
注意：此字段可能返回 null，表示取不到有效值。
   */
  Groups: Array<string>
  /**
   * 镜像模板参数列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  InferTemplates: Array<InferTemplate>
}

/**
 * DescribeModelServiceHotUpdated返回参数结构体
 */
export interface DescribeModelServiceHotUpdatedResponse {
  /**
   * 模型加速标志位.Allowed 允许模型加速. Forbidden 禁止模型加速
   */
  ModelTurboFlag?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 数据集详情
 */
export interface DatasetInfo {
  /**
   * 数据集id
注意：此字段可能返回 null，表示取不到有效值。
   */
  DatasetId?: string
  /**
   * 数据集名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  DatasetName?: string
  /**
   * 数据集创建者
注意：此字段可能返回 null，表示取不到有效值。
   */
  Creator?: string
  /**
   * 数据集版本
注意：此字段可能返回 null，表示取不到有效值。
   */
  DatasetVersion?: string
  /**
   * 数据集类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  DatasetType?: string
  /**
   * 数据集标签
注意：此字段可能返回 null，表示取不到有效值。
   */
  DatasetTags?: Array<Tag>
  /**
   * 数据集对应标注任务名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  DatasetAnnotationTaskName?: string
  /**
   * 数据集对应标注任务ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  DatasetAnnotationTaskId?: string
  /**
   * 处理进度
注意：此字段可能返回 null，表示取不到有效值。
   */
  Process?: number
  /**
   * 数据集状态
注意：此字段可能返回 null，表示取不到有效值。
   */
  DatasetStatus?: string
  /**
   * 错误详情
注意：此字段可能返回 null，表示取不到有效值。
   */
  ErrorMsg?: string
  /**
   * 数据集创建时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  CreateTime?: string
  /**
   * 数据集更新时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  UpdateTime?: string
  /**
   * 外部任务类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  ExternalTaskType?: string
  /**
   * 数据集存储大小
注意：此字段可能返回 null，表示取不到有效值。
   */
  DatasetSize?: string
  /**
   * 数据集数据数量
注意：此字段可能返回 null，表示取不到有效值。
   */
  FileNum?: number
  /**
   * 数据集源cos 路径
注意：此字段可能返回 null，表示取不到有效值。
   */
  StorageDataPath?: CosPathInfo
  /**
   * 数据集输出cos路径
注意：此字段可能返回 null，表示取不到有效值。
   */
  StorageLabelPath?: CosPathInfo
  /**
   * 数据集标注状态
注意：此字段可能返回 null，表示取不到有效值。
   */
  AnnotationStatus?: string
  /**
   * 数据集类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  AnnotationType?: string
  /**
   * 数据集标注格式
注意：此字段可能返回 null，表示取不到有效值。
   */
  AnnotationFormat?: string
  /**
   * 数据集范围
注意：此字段可能返回 null，表示取不到有效值。
   */
  DatasetScope?: string
  /**
   * 数据集OCR子场景
注意：此字段可能返回 null，表示取不到有效值。
   */
  OcrScene?: string
  /**
   * 数据集字典修改状态
注意：此字段可能返回 null，表示取不到有效值。
   */
  AnnotationKeyStatus?: string
  /**
   * 内容类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  ContentType?: string
  /**
   * 数据集建模类别。
注意：此字段可能返回 null，表示取不到有效值。
   */
  DatasetScene?: string
  /**
   * CFS配置
注意：此字段可能返回 null，表示取不到有效值。
   */
  CFSConfig?: CFSConfig
  /**
   * 数据集标签
注意：此字段可能返回 null，表示取不到有效值。
   */
  SceneTags?: Array<string>
  /**
   * 已标注数量
注意：此字段可能返回 null，表示取不到有效值。
   */
  NumAnnotated?: number
  /**
   * 标注规范
注意：此字段可能返回 null，表示取不到有效值。
   */
  AnnotationSpecification?: string
  /**
   * 标注Schema是否配置
注意：此字段可能返回 null，表示取不到有效值。
   */
  AnnotationSchemaConfigured?: boolean
  /**
   * 创建者名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  CreatorNickname?: string
  /**
   * cfs路径是否有修改
注意：此字段可能返回 null，表示取不到有效值。
   */
  IsCfsUpdated?: boolean
}

/**
 * DescribeModelAccelerateTask返回参数结构体
 */
export interface DescribeModelAccelerateTaskResponse {
  /**
   * 模型加速任务详情
注意：此字段可能返回 null，表示取不到有效值。
   */
  ModelAccelerateTask?: ModelAccelerateTask
  /**
   * 模型加速时长，单位s
注意：此字段可能返回 null，表示取不到有效值。
   */
  ModelAccRuntimeInSecond?: number
  /**
   * 模型加速任务开始时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  ModelAccStartTime?: string
  /**
   * 模型加速任务结束时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  ModelAccEndTime?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * Tag过滤参数
 */
export interface TagFilter {
  /**
   * 标签键
   */
  TagKey?: string
  /**
   * 多个标签值
   */
  TagValues?: Array<string>
}

/**
 * SSH pod访问信息
 */
export interface PodSSHInfo {
  /**
   * pod访问ip
   */
  Host?: string
  /**
   * pod ssh访问端口
   */
  Port?: number
  /**
   * ssh访问命令
   */
  LoginCommand?: string
}

/**
 * DescribeModelServiceGroups请求参数结构体
 */
export interface DescribeModelServiceGroupsRequest {
  /**
   * <p>TI工作空间ID</p><p>仅用于“工作空间”白名单功能。如需使用，请联系TI管理员开通白名单。</p>
   */
  TiProjectId?: string
  /**
   * <p>偏移量，默认为0</p>
   */
  Offset?: number
  /**
   * <p>返回数量，默认为20，最大值为100</p>
   */
  Limit?: number
  /**
   * <p>输出列表的排列顺序。取值范围：ASC：升序排列 DESC：降序排列</p>
   */
  Order?: string
  /**
   * <p>排序的依据字段， 取值范围 &quot;CreateTime&quot; &quot;UpdateTime&quot;</p>
   */
  OrderField?: string
  /**
   * <p>分页参数，支持的分页过滤Name包括：<br>[&quot;ClusterId&quot;, &quot;ServiceId&quot;, &quot;ServiceGroupName&quot;, &quot;ServiceGroupId&quot;,&quot;Status&quot;,&quot;CreatedBy&quot;,&quot;ModelVersionId&quot;]</p>
   */
  Filters?: Array<Filter>
  /**
   * <p>标签过滤参数</p>
   */
  TagFilters?: Array<TagFilter>
  /**
   * <p>服务分类</p>
   * @deprecated
   */
  ServiceCategory?: string
}

/**
 * 子账号信息
 */
export interface SubAccountInfo {
  /**
   * 腾讯云主账号UIN
   */
  Uin?: string
  /**
   * 腾讯云子账号UIN
   */
  SubUin?: string
  /**
   * 子账号名称
   */
  SubUinName?: string
  /**
   * 子账号在Linux下的UID
   */
  LinuxUid?: number
  /**
   * 子账号在Linux下的GID
   */
  LinuxGid?: number
  /**
   * 子账号在Linux下的用户名
   */
  LinuxUserName?: string
  /**
   * 是否开启 root 登录
   */
  EnableRootLogin?: boolean
  /**
   * 更新时间
   */
  UpdateTime?: string
}

/**
 * UpdateSubAccountLinuxUserInfo返回参数结构体
 */
export interface UpdateSubAccountLinuxUserInfoResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 镜像描述信息
 */
export interface ImageInfo {
  /**
   * 镜像类型：TCR为腾讯云TCR镜像; CCR为腾讯云TCR个人版镜像，PreSet为平台预置镜像，CUSTOM为第三方自定义镜像
   */
  ImageType: string
  /**
   * 镜像地址
   */
  ImageUrl: string
  /**
   * TCR镜像对应的地域
注意：此字段可能返回 null，表示取不到有效值。
   */
  RegistryRegion?: string
  /**
   * TCR镜像对应的实例id
注意：此字段可能返回 null，表示取不到有效值。
   */
  RegistryId?: string
  /**
   * 是否允许导出全部内容
注意：此字段可能返回 null，表示取不到有效值。
   */
  AllowSaveAllContent?: boolean
  /**
   * 镜像名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  ImageName?: string
  /**
   * 是否支持数据构建
注意：此字段可能返回 null，表示取不到有效值。
   */
  SupportDataPipeline?: boolean
}

/**
 * 描述腾讯云标签
 */
export interface Tag {
  /**
   * 标签键
注意：此字段可能返回 null，表示取不到有效值。
   */
  TagKey: string
  /**
   * 标签值
注意：此字段可能返回 null，表示取不到有效值。
   */
  TagValue: string
}

/**
 * 推理服务在集群中的信息
 */
export interface ServiceInfo {
  /**
   * <p>期望运行的Pod数量，停止状态是0<br>不同计费模式和调节模式下对应关系如下<br>PREPAID 和 POSTPAID_BY_HOUR:<br>手动调节模式下对应 实例数量<br>自动调节模式下对应 基于时间的默认策略的实例数量<br>HYBRID_PAID:<br>后付费实例手动调节模式下对应 实例数量<br>后付费实例自动调节模式下对应 时间策略的默认策略的实例数量</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Replicas: number
  /**
   * <p>镜像信息</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  ImageInfo: ImageInfo
  /**
   * <p>环境变量</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Env: Array<EnvVar>
  /**
   * <p>资源信息</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Resources: ResourceInfo
  /**
   * <p>后付费实例对应的机型规格</p>
   */
  InstanceType: string
  /**
   * <p>模型信息</p>
   */
  ModelInfo: ModelInfo
  /**
   * <p>是否启用日志</p>
   */
  LogEnable: boolean
  /**
   * <p>日志配置</p>
   */
  LogConfig: LogConfig
  /**
   * <p>是否开启鉴权</p>
   */
  AuthorizationEnable: boolean
  /**
   * <p>hpa配置</p>
   */
  HorizontalPodAutoscaler: HorizontalPodAutoscaler
  /**
   * <p>服务的状态描述</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Status: WorkloadStatus
  /**
   * <p>权重</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Weight: number
  /**
   * <p>资源总量</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  ResourceTotal: ResourceInfo
  /**
   * <p>历史实例数</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  OldReplicas: number
  /**
   * <p>计费模式[HYBRID_PAID]时生效, 用于标识混合计费模式下的预付费实例数, 若不填则默认为1</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  HybridBillingPrepaidReplicas: number
  /**
   * <p>历史 HYBRID_PAID 时的实例数，用户恢复服务</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  OldHybridBillingPrepaidReplicas: number
  /**
   * <p>是否开启模型的热更新。默认不开启</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  ModelHotUpdateEnable: boolean
  /**
   * <p>服务的规格别名</p>
   */
  InstanceAlias?: string
  /**
   * <p>实例数量调节方式,默认为手动<br>支持：自动 - &quot;AUTO&quot;, 手动 - &quot;MANUAL&quot;</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  ScaleMode?: string
  /**
   * <p>定时伸缩任务</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  CronScaleJobs?: Array<CronScaleJob>
  /**
   * <p>定时伸缩策略</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  ScaleStrategy?: string
  /**
   * <p>定时停止的配置</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  ScheduledAction?: ScheduledAction
  /**
   * <p>实例列表</p>
注意：此字段可能返回 null，表示取不到有效值。
   * @deprecated
   */
  PodList?: Array<string>
  /**
   * <p>Pod列表信息</p>
注意：此字段可能返回 null，表示取不到有效值。
   * @deprecated
   */
  Pods?: Pod
  /**
   * <p>Pod列表信息</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  PodInfos?: Array<Pod>
  /**
   * <p>服务限速限流相关配置</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  ServiceLimit?: ServiceLimit
  /**
   * <p>是否开启模型的加速, 仅对StableDiffusion(动态加速)格式的模型有效。</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  ModelTurboEnable?: boolean
  /**
   * <p>挂载</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  VolumeMount?: VolumeMount
  /**
   * <p>推理代码信息</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  InferCodeInfo?: InferCodeInfo
  /**
   * <p>服务的启动命令</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Command?: string
  /**
   * <p>开启TIONE内网访问外部设置</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  ServiceEIP?: ServiceEIP
  /**
   * <p>服务端口，默认为8501</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  ServicePort?: number
  /**
   * <p>服务的优雅退出时限。单位为秒，默认值为30，最小为1</p>
   */
  TerminationGracePeriodSeconds?: number
  /**
   * <p>服务实例停止前执行的命令，执行完毕或执行时间超过优雅退出时限后实例结束</p>
   */
  PreStopCommand?: Array<string>
  /**
   * <p>是否启用grpc端口</p>
   */
  GrpcEnable?: boolean
  /**
   * <p>健康探针</p>
   */
  HealthProbe?: HealthProbe
  /**
   * <p>滚动更新配置</p>
   */
  RollingUpdate?: RollingUpdate
  /**
   * <p>单副本下的实例数，仅在部署类型为DIST、ROLE时生效，默认1</p>
   */
  InstancePerReplicas?: number
  /**
   * <p>批量数据盘挂载配置</p>
   */
  VolumeMounts?: Array<VolumeMount>
  /**
   * <p>调度策略 [binpack] 优先占满整机，尽量避免碎卡（默认值）[spread] 优先分散在各个节点，确保服务高可用</p>
   */
  SchedulingStrategy?: string
  /**
   * <p>服务实际运行的节点数</p>
   */
  NodeCount?: number
}

/**
 * StopNotebook返回参数结构体
 */
export interface StopNotebookResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeModelService请求参数结构体
 */
export interface DescribeModelServiceRequest {
  /**
   * 服务id
   */
  ServiceId: string
  /**
   * 服务分类
   * @deprecated
   */
  ServiceCategory?: string
}

/**
 * CreateTrainingTask返回参数结构体
 */
export interface CreateTrainingTaskResponse {
  /**
   * <p>训练任务ID</p>
   */
  Id?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyModelServiceAuthToken返回参数结构体
 */
export interface ModifyModelServiceAuthTokenResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyModelServiceAuthorization返回参数结构体
 */
export interface ModifyModelServiceAuthorizationResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteModelService请求参数结构体
 */
export interface DeleteModelServiceRequest {
  /**
   * 服务id
   */
  ServiceId: string
  /**
   * 服务分类
   * @deprecated
   */
  ServiceCategory?: string
}

/**
 * DeleteModelServiceAuthToken请求参数结构体
 */
export interface DeleteModelServiceAuthTokenRequest {
  /**
   * 服务组 id
   */
  ServiceGroupId: string
  /**
   * token 值
   */
  AuthTokenValue?: string
}

/**
 * CreateTrainingTask请求参数结构体
 */
export interface CreateTrainingTaskRequest {
  /**
   * <p>训练任务名称，不超过60个字符，仅支持中英文、数字、下划线&quot;_&quot;、短横&quot;-&quot;，只能以中英文、数字开头</p>
   */
  Name: string
  /**
   * <p>计费模式，eg：PREPAID 包年包月（资源组）;<br>POSTPAID_BY_HOUR 按量计费</p>
   */
  ChargeType: string
  /**
   * <p>资源配置，需填写对应算力规格ID和节点数量，算力规格ID查询接口为DescribeBillingSpecsPrice，eg：[{&quot;Role&quot;:&quot;WORKER&quot;, &quot;InstanceType&quot;: &quot;TI.S.MEDIUM.POST&quot;, &quot;InstanceNum&quot;: 1}]</p>
   */
  ResourceConfigInfos: Array<ResourceConfigInfo>
  /**
   * <p>训练框架名称，通过DescribeTrainingFrameworks接口查询，eg：SPARK、PYSPARK、TENSORFLOW、PYTORCH</p>
   */
  FrameworkName?: string
  /**
   * <p>训练框架版本，通过DescribeTrainingFrameworks接口查询，eg：1.15、1.9</p>
   */
  FrameworkVersion?: string
  /**
   * <p>训练框架环境，通过DescribeTrainingFrameworks接口查询，eg：tf1.15-py3.7-cpu、torch1.9-py3.8-cuda11.1-gpu</p>
   */
  FrameworkEnvironment?: string
  /**
   * <p>预付费专用资源组ID，通过DescribeBillingResourceGroups接口查询</p>
   */
  ResourceGroupId?: string
  /**
   * <p>标签配置</p>
   */
  Tags?: Array<Tag>
  /**
   * <p>自定义镜像信息</p>
   */
  ImageInfo?: ImageInfo
  /**
   * <p>COS代码包路径</p>
   */
  CodePackagePath?: CosPathInfo
  /**
   * <p>任务的启动命令，按任务训练模式输入，如遇特殊字符导致配置失败，可使用EncodedStartCmdInfo参数</p>
   */
  StartCmdInfo?: StartCmdInfo
  /**
   * <p>训练模式，通过DescribeTrainingFrameworks接口查询，eg：PS_WORKER、DDP、MPI、HOROVOD</p>
   */
  TrainingMode?: string
  /**
   * <p>数据配置，依赖DataSource字段，数量不超过10个</p>
   */
  DataConfigs?: Array<DataConfig>
  /**
   * <p>VPC Id</p>
   */
  VpcId?: string
  /**
   * <p>子网Id</p>
   */
  SubnetId?: string
  /**
   * <p>COS训练输出路径</p>
   */
  Output?: CosPathInfo
  /**
   * <p>CLS日志配置</p>
   */
  LogConfig?: LogConfig
  /**
   * <p>调优参数，不超过2048个字符</p>
   */
  TuningParameters?: string
  /**
   * <p>是否上报日志</p>
   */
  LogEnable?: boolean
  /**
   * <p>备注，不超过1024个字符</p>
   */
  Remark?: string
  /**
   * <p>数据来源，eg：DATASET、COS、CFS、CFSTurbo、HDFS、GooseFSx</p>
   */
  DataSource?: string
  /**
   * <p>回调地址，用于创建/启动/停止训练任务的异步回调。回调格式&amp;内容详见：<a href="https://cloud.tencent.com/document/product/851/84292">[TI-ONE接口回调说明]</a></p>
   */
  CallbackUrl?: string
  /**
   * <p>编码后的任务启动命令，与StartCmdInfo同时配置时，仅当前参数生效</p>
   */
  EncodedStartCmdInfo?: EncodedStartCmdInfo
  /**
   * <p>代码仓库配置</p>
   */
  CodeRepos?: Array<CodeRepoConfig>
  /**
   * <p>网络暴露配置</p>
   */
  ExposeNetworkConfig?: ExposeNetworkConfig
  /**
   * <p>环境变量</p>
   */
  Envs?: Array<EnvVar>
}

/**
 * 对话输入内容
 */
export interface Message {
  /**
   * 角色名。支持三个角色：system、user、assistant，其中system仅开头可出现一次，也可忽略。
   */
  Role: string
  /**
   * 对话输入内容。
   */
  Content?: string
  /**
   * 多模态对话输入内容，Content与MultiModalContents两者只需要填写其中一个即可，当对话中包含多模态对话信息时，则填写本参数
   */
  MultiModalContents?: Array<MultiModalContent>
}

/**
 * CreatePresignedNotebookUrl请求参数结构体
 */
export interface CreatePresignedNotebookUrlRequest {
  /**
   * Notebook ID
   */
  Id: string
}

/**
 * ModifyNotebook返回参数结构体
 */
export interface ModifyNotebookResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeModelService返回参数结构体
 */
export interface DescribeModelServiceResponse {
  /**
   * 服务信息
   */
  Service?: Service
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeBuildInImages返回参数结构体
 */
export interface DescribeBuildInImagesResponse {
  /**
   * 内置镜像详情列表
   */
  BuildInImageInfos?: Array<ImageInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDatasets返回参数结构体
 */
export interface DescribeDatasetsResponse {
  /**
   * 数据集总量（名称维度）
注意：此字段可能返回 null，表示取不到有效值。
   */
  TotalCount?: number
  /**
   * 数据集按照数据集名称聚合的分组
注意：此字段可能返回 null，表示取不到有效值。
   */
  DatasetGroups?: Array<DatasetGroup>
  /**
   * 数据集ID总量
注意：此字段可能返回 null，表示取不到有效值。
   */
  DatasetIdNums?: number
  /**
   * 若开启了CFSChecking，则检查CFS是否准备完毕。若CFS未准备完毕，则返回true，并且TotalCount为0，DatasetGroups为空。
   */
  CFSNotReady?: boolean
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 多模态对话图片信息
 */
export interface ImageUrl {
  /**
   * 图片url
   */
  Url?: string
}

/**
 * 模型来源
 */
export interface ModelSource {
  /**
   * 来源
注意：此字段可能返回 null，表示取不到有效值。
   */
  Source: string
  /**
   * 来源任务名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  JobName: string
  /**
   * 来源任务版本
注意：此字段可能返回 null，表示取不到有效值。
   */
  JobVersion: string
  /**
   * 来源任务id
注意：此字段可能返回 null，表示取不到有效值。
   */
  JobId: string
  /**
   * 模型名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  ModelName: string
  /**
   * 算法框架
注意：此字段可能返回 null，表示取不到有效值。
   */
  AlgorithmFramework: string
  /**
   * 训练偏好
注意：此字段可能返回 null，表示取不到有效值。
   */
  TrainingPreference: string
  /**
   * 推理环境来源，SYSTEM/CUSTOM
注意：此字段可能返回 null，表示取不到有效值。
   */
  ReasoningEnvironmentSource: string
  /**
   * 推理环境
注意：此字段可能返回 null，表示取不到有效值。
   */
  ReasoningEnvironment: string
  /**
   * 推理环境id
注意：此字段可能返回 null，表示取不到有效值。
   */
  ReasoningEnvironmentId: string
  /**
   * 自定义推理环境
注意：此字段可能返回 null，表示取不到有效值。
   */
  ReasoningImageInfo: ImageInfo
}

/**
 * CreateNotebook返回参数结构体
 */
export interface CreateNotebookResponse {
  /**
   * <p>notebook标志</p>
   */
  Id?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 内网调用信息
 */
export interface IntranetCallInfo {
  /**
   * 私有连接通道信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  IngressPrivateLinkInfo?: IngressPrivateLinkInfo
  /**
   * 共享弹性网卡信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  ServiceEIPInfo?: Array<ServiceEIPInfo>
  /**
   * 默认内网调用信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  DefaultInnerCallInfos?: Array<DefaultInnerCallInfo>
  /**
   * 私有连接信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  PrivateLinkInfos?: Array<PrivateLinkInfo>
  /**
   * 基于新网关的私有连接信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  PrivateLinkInfosV2?: Array<PrivateLinkInfo>
}

/**
 * DescribeBillingSpecsPrice请求参数结构体
 */
export interface DescribeBillingSpecsPriceRequest {
  /**
   * 询价参数，支持批量询价
   */
  SpecsParam: Array<SpecUnit>
}

/**
 * 服务的权重
 */
export interface WeightEntry {
  /**
   * 服务id
   */
  ServiceId: string
  /**
   * 流量权重值，ServiceGroup 下，不同服务版本根据权重比例分配流量
   */
  Weight: number
}

/**
 * 资源组节点信息
 */
export interface Instance {
  /**
   * 资源组节点id
   */
  InstanceId?: string
  /**
   * 节点已用资源
注意：此字段可能返回 null，表示取不到有效值。
   */
  UsedResource?: ResourceInfo
  /**
   * 节点总资源
注意：此字段可能返回 null，表示取不到有效值。
   */
  TotalResource?: ResourceInfo
  /**
   * 节点状态 
注意：此字段为枚举值
说明: 
DEPLOYING: 部署中
RUNNING: 运行中 
DEPLOY_FAILED: 部署失败
RELEASING 释放中 
RELEASED：已释放 
EXCEPTION：异常
DEBT_OR_EXPIRED: 欠费过期
注意：此字段可能返回 null，表示取不到有效值。
   */
  InstanceStatus?: string
  /**
   * 创建人
   */
  SubUin?: string
  /**
   * 创建时间: 
注意：北京时间，比如: 2021-12-01 12:00:00
注意：此字段可能返回 null，表示取不到有效值。
   */
  CreateTime?: string
  /**
   * 到期时间
注意：北京时间，比如：2021-12-11 12:00:00
注意：此字段可能返回 null，表示取不到有效值。
   */
  ExpireTime?: string
  /**
   * 自动续费标识
注意：此字段为枚举值
说明：
NOTIFY_AND_MANUAL_RENEW：手动续费(取消自动续费)且到期通知
NOTIFY_AND_AUTO_RENEW：自动续费且到期通知
DISABLE_NOTIFY_AND_MANUAL_RENEW：手动续费(取消自动续费)且到期不通知
注意：此字段可能返回 null，表示取不到有效值。
   */
  AutoRenewFlag?: string
  /**
   * 计费项ID
   */
  SpecId?: string
  /**
   * 计费项别名
   */
  SpecAlias?: string
  /**
   * 计费项特性列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  SpecFeatures?: Array<string>
  /**
   * 纳管cvmid
   */
  CvmInstanceId?: string
  /**
   * 部署失败错误码
注意：此字段可能返回 null，表示取不到有效值。
   */
  ErrCode?: string
  /**
   * 部署失败错误信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  ErrMsg?: string
}

/**
 * 计费项询价结果
 */
export interface SpecPrice {
  /**
   * 计费项名称
   */
  SpecName?: string
  /**
   * 原价，单位：分。最大值42亿，超过则返回0
   */
  TotalCost?: number
  /**
   * 优惠后的价格，单位：分
   */
  RealTotalCost?: number
  /**
   * 计费项数量
   */
  SpecCount?: number
}

/**
 * CreateExport请求参数结构体
 */
export interface CreateExportRequest {
  /**
   * 服务类型，TRAIN为任务式建模, NOTEBOOK为Notebook, INFER为在线服务, BATCH为批量预测枚举值：- TRAIN- NOTEBOOK- INFER- BATCH
   */
  Service: string
  /**
   * 服务ID，和Service参数对应，不同Service的服务ID获取方式不同，具体如下：- Service类型为TRAIN：  调用[DescribeTrainingTask接口](/document/product/851/75089)查询训练任务详情，ServiceId为接口返回值中Response.TrainingTaskDetail.LatestInstanceId- Service类型为NOTEBOOK：  调用[DescribeNotebook接口](/document/product/851/95662)查询Notebook详情，ServiceId为接口返回值中Response.NotebookDetail.PodName- Service类型为INFER：  调用[DescribeModelServiceGroup接口](/document/product/851/82285)查询服务组详情，ServiceId为接口返回值中Response.ServiceGroup.Services.ServiceId- Service类型为BATCH：  调用[DescribeBatchTask接口](/document/product/851/80180)查询跑批任务详情，ServiceId为接口返回值中Response.BatchTaskDetail.LatestInstanceId
   */
  ServiceId?: string
  /**
   * 日志查询开始时间（RFC3339格式的时间字符串），默认值为当前时间的前一个小时
   */
  StartTime?: string
  /**
   * 日志查询结束时间（RFC3339格式的时间字符串），开始时间和结束时间必须同时填或同时不填，默认值为当前时间
   */
  EndTime?: string
  /**
   * 日志导出数据格式。json，csv，默认为csv
   */
  Format?: string
  /**
   * Pod的名称，即需要查询服务对应的Pod，和Service参数对应，不同Service的PodName获取方式不同，具体如下：- Service类型为TRAIN：  调用[DescribeTrainingTaskPods接口](/document/product/851/75088)查询训练任务pod列表，PodName为接口返回值中Response.PodNames- Service类型为NOTEBOOK：  调用[DescribeNotebook接口](/document/product/851/95662)查询Notebook详情，PodName为接口返回值中Response.NotebookDetail.PodName- Service类型为INFER：  调用[DescribeModelService接口](/document/product/851/82287)查询单个服务详情，PodName为接口返回值中Response.Service.ServiceInfo.PodInfos- Service类型为BATCH：  调用[DescribeBatchTask接口](/document/product/851/80180)查询跑批任务详情，PodName为接口返回值中Response.BatchTaskDetail. PodList注：支持结尾通配符*
   */
  PodName?: string
  /**
   * 描述任务的类型
   */
  JobCategory?: string
  /**
   * 实例的类型
   */
  InstanceType?: string
  /**
   * 查实例Id
   */
  InstanceId?: string
  /**
   * 日志类型： PLATFORM_INIT, PLATFORM_SANITY_CHECK, USER
   */
  Type?: string
}

/**
 * DescribeBillingSpecs返回参数结构体
 */
export interface DescribeBillingSpecsResponse {
  /**
   * 计费项列表
   */
  Specs?: Array<Spec>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteTrainingTask返回参数结构体
 */
export interface DeleteTrainingTaskResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateMountLimit请求参数结构体
 */
export interface CreateMountLimitRequest {
  /**
   * 数据源类型英文名
   */
  Type: string
  /**
   * 存储实例ID
   */
  StorageId: string
  /**
   * 限制开关是否开启，只有开启时才有限制，默认关闭
   */
  LimitMount?: boolean
}

/**
 * 在线服务的 AuthToken 数据
 */
export interface AuthToken {
  /**
   * AuthToken 基础信息
   */
  Base?: AuthTokenBase
  /**
   * AuthToken 限流数组
   */
  Limits?: Array<AuthTokenLimit>
}

/**
 * DescribeEvents返回参数结构体
 */
export interface DescribeEventsResponse {
  /**
   * 事件的列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  Events?: Array<Event>
  /**
   * 此次查询的事件的个数
注意：此字段可能返回 null，表示取不到有效值。
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 数据集组
 */
export interface DatasetGroup {
  /**
   * 数据集ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  DatasetId?: string
  /**
   * 数据集名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  DatasetName?: string
  /**
   * 创建者
注意：此字段可能返回 null，表示取不到有效值。
   */
  Creator?: string
  /**
   * 数据集版本
注意：此字段可能返回 null，表示取不到有效值。
   */
  DatasetVersion?: string
  /**
   * 数据集类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  DatasetType?: string
  /**
   * 数据集标签
注意：此字段可能返回 null，表示取不到有效值。
   */
  DatasetTags?: Array<Tag>
  /**
   * 数据集标注任务名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  DatasetAnnotationTaskName?: string
  /**
   * 数据集标注任务ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  DatasetAnnotationTaskId?: string
  /**
   * 处理进度
注意：此字段可能返回 null，表示取不到有效值。
   */
  Process?: number
  /**
   * 数据集状态
注意：此字段可能返回 null，表示取不到有效值。
   */
  DatasetStatus?: string
  /**
   * 错误详情
注意：此字段可能返回 null，表示取不到有效值。
   */
  ErrorMsg?: string
  /**
   * 创建时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  CreateTime?: string
  /**
   * 更新时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  UpdateTime?: string
  /**
   * 外部关联TASKType
注意：此字段可能返回 null，表示取不到有效值。
   */
  ExternalTaskType?: string
  /**
   * 数据集大小
注意：此字段可能返回 null，表示取不到有效值。
   */
  DatasetSize?: string
  /**
   * 数据集数据量
注意：此字段可能返回 null，表示取不到有效值。
   */
  FileNum?: number
  /**
   * 数据集源COS路径
注意：此字段可能返回 null，表示取不到有效值。
   */
  StorageDataPath?: CosPathInfo
  /**
   * 数据集标签存储路径
注意：此字段可能返回 null，表示取不到有效值。
   */
  StorageLabelPath?: CosPathInfo
  /**
   * 数据集版本聚合详情
注意：此字段可能返回 null，表示取不到有效值。
   */
  DatasetVersions?: Array<DatasetInfo>
  /**
   * 数据集标注状态
注意：此字段可能返回 null，表示取不到有效值。
   */
  AnnotationStatus?: string
  /**
   * 数据集类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  AnnotationType?: string
  /**
   * 数据集标注格式
注意：此字段可能返回 null，表示取不到有效值。
   */
  AnnotationFormat?: string
  /**
   * 数据集范围
注意：此字段可能返回 null，表示取不到有效值。
   */
  DatasetScope?: string
  /**
   * 数据集OCR子场景
注意：此字段可能返回 null，表示取不到有效值。
   */
  OcrScene?: string
  /**
   * 数据集字典修改状态
注意：此字段可能返回 null，表示取不到有效值。
   */
  AnnotationKeyStatus?: string
  /**
   * 文本数据集导入方式
注意：此字段可能返回 null，表示取不到有效值。
   */
  ContentType?: string
  /**
   * 数据集建模类别。
注意：此字段可能返回 null，表示取不到有效值。
   */
  DatasetScene?: string
  /**
   * CFS配置
注意：此字段可能返回 null，表示取不到有效值。
   */
  CFSConfig?: CFSConfig
  /**
   * 数据集标签
注意：此字段可能返回 null，表示取不到有效值。
   */
  SceneTags?: Array<string>
  /**
   * 已标注数量
注意：此字段可能返回 null，表示取不到有效值。
   */
  NumAnnotated?: number
  /**
   * 标注规范
注意：此字段可能返回 null，表示取不到有效值。
   */
  AnnotationSpecification?: string
  /**
   * 标注Schema是否配置
注意：此字段可能返回 null，表示取不到有效值。
   */
  AnnotationSchemaConfigured?: boolean
  /**
   * 创建者名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  CreatorNickname?: string
  /**
   * cfs路径是否有修改
注意：此字段可能返回 null，表示取不到有效值。
   */
  IsCfsUpdated?: boolean
}

/**
 * 实例状况
 */
export interface StatefulSetCondition {
  /**
   * 信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  Message: string
  /**
   * 原因
注意：此字段可能返回 null，表示取不到有效值。
   */
  Reason: string
  /**
   * Status of the condition, one of True, False, Unknown.
注意：此字段可能返回 null，表示取不到有效值。
   */
  Status: string
  /**
   * 类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  Type: string
  /**
   * 上次更新的时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  LastTransitionTime: string
  /**
   * 上次更新的时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  LastUpdateTime?: string
}

/**
 * http get 行为
 */
export interface HTTPGetAction {
  /**
   * http 路径
   */
  Path?: string
  /**
   * 调用端口
   */
  Port?: number
}

/**
 * sidecar容器配置
 */
export interface SidecarSpec {
  /**
   * 镜像配置
   */
  ImageInfo?: ImageInfo
}

/**
 * tcp socket 健康探针检查行为
 */
export interface TCPSocketAction {
  /**
   * 调用端口
   */
  Port?: number
}

/**
 * 描述资源信息
 */
export interface ResourceInfo {
  /**
   * 处理器资源, 单位为1/1000核
注意：此字段可能返回 null，表示取不到有效值。
   */
  Cpu: number
  /**
   * 内存资源, 单位为1M
注意：此字段可能返回 null，表示取不到有效值。
   */
  Memory: number
  /**
   * Gpu卡个数资源, 单位为0.01单位的GpuType.
Gpu=100表示使用了“一张”gpu卡, 但此处的“一张”卡有可能是虚拟化后的1/4卡, 也有可能是整张卡. 取决于实例的机型
例1 实例的机型带有1张虚拟gpu卡, 每张虚拟gpu卡对应1/4张实际T4卡, 则此时 GpuType=T4, Gpu=100, RealGpu=25.
例2 实例的机型带有4张gpu整卡, 每张卡对应1张实际T4卡, 则 此时 GpuType=T4, Gpu=400, RealGpu=400.
注意：此字段可能返回 null，表示取不到有效值。
   */
  Gpu?: number
  /**
   * Gpu卡型号 T4或者V100。仅展示当前 GPU 卡型号，若存在多类型同时使用，则参考 RealGpuDetailSet 的值。
注意：此字段可能返回 null，表示取不到有效值。
   */
  GpuType?: string
  /**
   * 创建或更新时无需填写，仅展示需要关注
后付费非整卡实例对应的实际的Gpu卡资源, 表示gpu资源对应实际的gpu卡个数.
RealGpu=100表示实际使用了一张gpu卡, 对应实际的实例机型, 有可能代表带有1/4卡的实例4个, 或者带有1/2卡的实例2个, 或者带有1卡的实力1个.
   */
  RealGpu?: number
  /**
   * 创建或更新时无需填写，仅展示需要关注。详细的GPU使用信息。
   */
  RealGpuDetailSet?: Array<GpuDetail>
  /**
   * 是否开启rdma
注意：此字段可能返回 null，表示取不到有效值。
   */
  EnableRDMA?: boolean
  /**
   * root disk size(GB)
   */
  RootDisk?: number
  /**
   * data disk size(GB)
   */
  DataDisk?: number
}

/**
 * 资源信息
 */
export interface GroupResource {
  /**
   * CPU核数; 单位为1/1000核，比如100表示0.1核
   */
  Cpu?: number
  /**
   * 内存；单位为MB
   */
  Memory?: number
  /**
   * 总卡数；GPUDetail 显卡数之和；单位为1/100卡，比如100代表1卡
注意：此字段可能返回 null，表示取不到有效值。
   */
  Gpu?: number
  /**
   * Gpu详情
注意：此字段可能返回 null，表示取不到有效值。
   */
  GpuDetailSet?: Array<GpuDetail>
}

/**
 * DescribeModelServiceCallInfo返回参数结构体
 */
export interface DescribeModelServiceCallInfoResponse {
  /**
   * 服务调用信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  ServiceCallInfo?: ServiceCallInfo
  /**
   * 升级网关调用信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  InferGatewayCallInfo?: InferGatewayCallInfo
  /**
   * 默认nginx网关的调用信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  DefaultNginxGatewayCallInfo?: DefaultNginxGatewayCallInfo
  /**
   * 太极服务的调用信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  TJCallInfo?: TJCallInfo
  /**
   * 内网调用信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  IntranetCallInfo?: IntranetCallInfo
  /**
   * 基于新网关的服务调用信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  ServiceCallInfoV2?: ServiceCallInfoV2
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 数据集结构体
 */
export interface DataSetConfig {
  /**
   * 数据集ID
   */
  Id: string
}

/**
 * 定时的事务和行为
 */
export interface ScheduledAction {
  /**
   * 是否要定时停止服务，true or false。true 则 ScheduleStopTime 必填， false 则 ScheduleStopTime 不生效
   */
  ScheduleStop?: boolean
  /**
   * 要执行定时停止的时间，格式：“2022-01-26T19:46:22+08:00”
   */
  ScheduleStopTime?: string
}

/**
 * DescribeNotebooks请求参数结构体
 */
export interface DescribeNotebooksRequest {
  /**
   * <p>TI工作空间ID</p><p>仅用于“工作空间”白名单功能。如需使用，请联系TI管理员开通白名单。</p>
   */
  TiProjectId?: string
  /**
   * 偏移量，默认为0
   */
  Offset?: number
  /**
   * 每页返回的实例数，默认为10
   */
  Limit?: number
  /**
   * 输出列表的排列顺序。取值范围：ASC：升序排列 DESC：降序排列。默认为DESC
   */
  Order?: string
  /**
   * 根据哪个字段排序，如：CreateTime、UpdateTime，默认为UpdateTime
   */
  OrderField?: string
  /**
   * 过滤器，eg：[{ "Name": "Id", "Values": ["nb-123456789"] }]

取值范围
Name（名称）：notebook1
Id（notebook ID）：nb-123456789
Status（状态）：Starting / Running / Stopped / Stopping / Failed / SubmitFailed
Creator（创建者 uin）：100014761913
ChargeType（计费类型）：PREPAID（预付费）/ POSTPAID_BY_HOUR（后付费）
ChargeStatus（计费状态）：NOT_BILLING（未开始计费）/ BILLING（计费中）/ BILLING_STORAGE（存储计费中）/ARREARS_STOP（欠费停止）
DefaultCodeRepoId（默认代码仓库ID）：cr-123456789
AdditionalCodeRepoId（关联代码仓库ID）：cr-123456789
LifecycleScriptId（生命周期ID）：ls-12312312311312
   */
  Filters?: Array<Filter>
  /**
   * 标签过滤器，eg：[{ "TagKey": "TagKeyA", "TagValue": ["TagValueA"] }]
   */
  TagFilters?: Array<TagFilter>
}

/**
 * DeleteNotebook返回参数结构体
 */
export interface DeleteNotebookResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteTrainingTask请求参数结构体
 */
export interface DeleteTrainingTaskRequest {
  /**
   * 训练任务ID
   */
  Id: string
}

/**
 * CreateModelServiceAuthToken返回参数结构体
 */
export interface CreateModelServiceAuthTokenResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 配置GooseFS参数
 */
export interface GooseFS {
  /**
   * goosefs实例id
注意：此字段可能返回 null，表示取不到有效值。
   */
  Id?: string
  /**
   * GooseFS类型，包括GooseFS和GooseFSx
注意：此字段可能返回 null，表示取不到有效值。
   */
  Type?: string
  /**
   * GooseFSx实例需要挂载的路径
注意：此字段可能返回 null，表示取不到有效值。
   */
  Path?: string
  /**
   * GooseFS命名空间
注意：此字段可能返回 null，表示取不到有效值。
   */
  NameSpace?: string
}

/**
 * 类型NotebookDetail
 */
export interface NotebookDetail {
  /**
   * <p>notebook  ID</p>
   */
  Id?: string
  /**
   * <p>notebook 名称</p>
   */
  Name?: string
  /**
   * <p>生命周期脚本</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  LifecycleScriptId?: string
  /**
   * <p>Pod-Name</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  PodName?: string
  /**
   * <p>Update-Time</p>
   */
  UpdateTime?: string
  /**
   * <p>是否访问公网</p>
   */
  DirectInternetAccess?: boolean
  /**
   * <p>预付费专用资源组</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  ResourceGroupId?: string
  /**
   * <p>标签配置</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Tags?: Array<Tag>
  /**
   * <p>是否自动停止</p>
   */
  AutoStopping?: boolean
  /**
   * <p>其他GIT存储库，最多3个，单个<br>长度不超过512字符</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  AdditionalCodeRepoIds?: Array<string>
  /**
   * <p>自动停止时间，单位小时</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  AutomaticStopTime?: number
  /**
   * <p>资源配置</p>
   */
  ResourceConf?: ResourceConf
  /**
   * <p>默认GIT存储库，长度不超过512字符</p>
   */
  DefaultCodeRepoId?: string
  /**
   * <p>训练输出</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  EndTime?: string
  /**
   * <p>是否上报日志</p>
   */
  LogEnable?: boolean
  /**
   * <p>日志配置</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  LogConfig?: LogConfig
  /**
   * <p>VPC ID</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  VpcId?: string
  /**
   * <p>子网ID</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  SubnetId?: string
  /**
   * <p>任务状态</p>
   */
  Status?: string
  /**
   * <p>运行时长</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  RuntimeInSeconds?: number
  /**
   * <p>创建时间</p>
   */
  CreateTime?: string
  /**
   * <p>训练开始时间</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  StartTime?: string
  /**
   * <p>计费状态，eg：BILLING计费中，ARREARS_STOP欠费停止，NOT_BILLING不在计费中</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  ChargeStatus?: string
  /**
   * <p>是否ROOT权限</p>
   */
  RootAccess?: boolean
  /**
   * <p>计贺金额信息，eg:2.00元/小时</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  BillingInfos?: Array<string>
  /**
   * <p>存储卷大小 （单位时GB，最小10GB，必须是10G的倍数）</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  VolumeSizeInGB?: number
  /**
   * <p>失败原因</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  FailureReason?: string
  /**
   * <p>计算资源付费模式 (- PREPAID：预付费，即包年包月 - POSTPAID_BY_HOUR：按小时后付费)</p>
   */
  ChargeType?: string
  /**
   * <p>后付费资源规格说明</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  InstanceTypeAlias?: string
  /**
   * <p>预付费资源组名称</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  ResourceGroupName?: string
  /**
   * <p>存储的类型。取值包含：<br>    FREE:        预付费的免费存储<br>    CLOUD_PREMIUM： 高性能云硬盘<br>    CLOUD_SSD： SSD云硬盘<br>    CFS:     CFS存储，包含NFS和turbo</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  VolumeSourceType?: string
  /**
   * <p>CFS存储的配置</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  VolumeSourceCFS?: CFSConfig
  /**
   * <p>数据配置</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  DataConfigs?: Array<DataConfig>
  /**
   * <p>notebook 信息</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Message?: string
  /**
   * <p>数据源来源，eg：WeData_HDFS</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  DataSource?: string
  /**
   * <p>镜像信息</p>
   */
  ImageInfo?: ImageInfo
  /**
   * <p>镜像类型</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  ImageType?: string
  /**
   * <p>SSH配置</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  SSHConfig?: SSHConfig
  /**
   * <p>GooseFS存储配置</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  VolumeSourceGooseFS?: GooseFS
  /**
   * <p>子用户ID</p>
   */
  SubUin?: string
  /**
   * <p>调度节点ID</p>
   */
  ResourceGroupInstanceId?: string
  /**
   * <p>子用户名称</p>
   */
  SubUinName?: string
  /**
   * <p>任务实例创建时间</p>
   */
  JobCreateTime?: string
  /**
   * <p>Appid</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  AppId?: string
  /**
   * <p>描述</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Description?: string
  /**
   * <p>最后操作者信息</p>
   */
  LatestOperatorInfo?: OperatorInfo
}

/**
 * DescribeBillingResourceInstanceRunningJobs请求参数结构体
 */
export interface DescribeBillingResourceInstanceRunningJobsRequest {
  /**
   * 资源组id
   */
  ResourceGroupId: string
  /**
   * 资源组节点id
   */
  ResourceInstanceId: string
  /**
   * <p>TI工作空间ID</p><p>仅用于“工作空间”白名单功能。如需使用，请联系TI管理员开通白名单。</p>
   */
  TiProjectId?: string
}

/**
 * ModifyModelService返回参数结构体
 */
export interface ModifyModelServiceResponse {
  /**
   * 生成的模型服务
注意：此字段可能返回 null，表示取不到有效值。
   */
  Service?: Service
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 任务建模Pod信息
 */
export interface PodInfo {
  /**
   * pod名
注意：此字段可能返回 null，表示取不到有效值。
   */
  Name?: string
  /**
   * pod的IP
注意：此字段可能返回 null，表示取不到有效值。
   */
  IP?: string
  /**
   * pod状态。eg：SUBMITTING提交中、PENDING排队中、RUNNING运行中、SUCCEEDED已完成、FAILED异常、TERMINATING停止中、TERMINATED已停止
注意：此字段可能返回 null，表示取不到有效值。
   */
  Status?: string
  /**
   * pod启动时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  StartTime?: string
  /**
   * pod结束时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  EndTime?: string
  /**
   * pod资源配置
注意：此字段可能返回 null，表示取不到有效值。
   */
  ResourceConfigInfo?: ResourceConfigInfo
  /**
   * Pod所属任务的SubUin信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  SubUin?: string
}

/**
 * 探针行为
 */
export interface ProbeAction {
  /**
   * http get 行为
   */
  HTTPGet?: HTTPGetAction
  /**
   * 执行命令检查 行为
   */
  Exec?: ExecAction
  /**
   * tcp socket 检查行为
   */
  TCPSocket?: TCPSocketAction
  /**
   * 探针类型，默认 HTTPGet，可选值：HTTPGet、Exec、TCPSocket
   */
  ActionType?: string
}

/**
 * DeleteModelServiceAuthToken返回参数结构体
 */
export interface DeleteModelServiceAuthTokenResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 模型描述信息
 */
export interface ModelInfo {
  /**
   * <p>模型版本id, DescribeTrainingModelVersion查询模型接口时的id<br>自动学习类型的模型填写自动学习的任务id</p>
   */
  ModelVersionId: string
  /**
   * <p>模型id</p>
   */
  ModelId?: string
  /**
   * <p>模型名</p>
   */
  ModelName?: string
  /**
   * <p>模型版本</p>
   */
  ModelVersion?: string
  /**
   * <p>模型来源</p>
   */
  ModelSource?: string
  /**
   * <p>cos路径信息</p>
   */
  CosPathInfo?: CosPathInfo
  /**
   * <p>GooseFSx的配置，ModelSource为GooseFSx时有效</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  GooseFSx?: GooseFSx
  /**
   * <p>模型对应的算法框架，预留</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  AlgorithmFramework?: string
  /**
   * <p>默认为 NORMAL, 已加速模型: ACCELERATE, 自动学习模型 AUTO_ML</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  ModelType?: string
  /**
   * <p>模型格式</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  ModelFormat?: string
  /**
   * <p>是否为私有化大模型</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  IsPrivateModel?: boolean
  /**
   * <p>模型的类别 多模态MultiModal, 文本大模型 LLM</p>
   */
  ModelCategory?: string
  /**
   * <p>数据源的配置</p>
   */
  PublicDataSource?: PublicDataSourceFS
}

/**
 * UpdateDataSource返回参数结构体
 */
export interface UpdateDataSourceResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDataSource返回参数结构体
 */
export interface DescribeDataSourceResponse {
  /**
   * 数据源信息
   */
  DataSourceInfo?: DataSourceInfo
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 外部挂载信息
 */
export interface VolumeMount {
  /**
   * <p>cfs的配置信息</p>
   */
  CFSConfig?: CFSConfig
  /**
   * <p>挂载源类型，CFS、COS、PUBLIC_DATA_SOURCE，默认为CFS</p>
   */
  VolumeSourceType?: string
  /**
   * <p>自定义容器内挂载路径</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  MountPath?: string
  /**
   * <p>挂载数据源时的配置信息</p>
   */
  PublicDataSource?: PublicDataSourceFS
}

/**
 * CreateModelService返回参数结构体
 */
export interface CreateModelServiceResponse {
  /**
   * <p>生成的模型服务</p>
   */
  Service?: Service
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteExport请求参数结构体
 */
export interface DeleteExportRequest {
  /**
   * 日志下载任务的ID
   */
  ExportId: string
}

/**
 * 在线服务一个服务组的信息
 */
export interface ServiceGroup {
  /**
   * <p>服务组id</p>
   */
  ServiceGroupId?: string
  /**
   * <p>服务组名</p>
   */
  ServiceGroupName?: string
  /**
   * <p>创建者</p>
   */
  CreatedBy?: string
  /**
   * <p>创建时间</p>
   */
  CreateTime?: string
  /**
   * <p>更新时间</p>
   */
  UpdateTime?: string
  /**
   * <p>主账号</p>
   */
  Uin?: string
  /**
   * <p>服务组下服务总数</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  ServiceCount?: number
  /**
   * <p>服务组下在运行的服务数量</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  RunningServiceCount?: number
  /**
   * <p>服务描述</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Services?: Array<Service>
  /**
   * <p>服务组状态，与服务一致<br> CREATING 创建中<br>     CREATE_FAILED 创建失败<br>     Normal    正常运行中<br>     Stopped  已停止<br>     Stopping 停止中<br>     Abnormal 异常<br>     Pending 启动中<br>     Waiting 就绪中</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Status?: string
  /**
   * <p>服务组标签</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Tags?: Array<Tag>
  /**
   * <p>服务组下最高版本</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  LatestVersion?: string
  /**
   * <p>服务的业务状态<br>CREATING 创建中<br>     CREATE_FAILED 创建失败<br>     ARREARS_STOP 因欠费被强制停止<br>     BILLING 计费中<br>     WHITELIST_USING 白名单试用中<br>     WHITELIST_STOP 白名单额度不足</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  BusinessStatus?: string
  /**
   * <p>服务的计费信息</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  BillingInfo?: string
  /**
   * <p>服务的创建来源</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  CreateSource?: string
  /**
   * <p>服务组的权重更新状态<br>UPDATING 更新中<br>     UPDATED 更新成功<br>     UPDATE_FAILED 更新失败</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  WeightUpdateStatus?: string
  /**
   * <p>服务组下运行的pod数量</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  ReplicasCount?: number
  /**
   * <p>服务组下期望的pod数</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  AvailableReplicasCount?: number
  /**
   * <p>服务组的subuin</p>
   */
  SubUin?: string
  /**
   * <p>服务组的app_id</p>
   */
  AppId?: number
  /**
   * <p>是否开启鉴权</p>
   */
  AuthorizationEnable?: boolean
  /**
   * <p>限流鉴权 token 列表</p>
   */
  AuthTokens?: Array<AuthToken>
  /**
   * <p>用于监控的创建来源字段</p>
   */
  MonitorSource?: string
  /**
   * <p>子用户的 nickname</p>
   */
  SubUinName?: string
  /**
   * <p>网关日志投递相关配置</p>
   */
  GatewayLogConfig?: LogConfig
  /**
   * <p>网关路由相关配置</p>
   */
  GatewayConfig?: GatewayConfig
}

/**
 * 服务的限流限速等配置
 */
export interface ServiceLimit {
  /**
   * 是否开启实例层面限流限速，true or false。true 则 InstanceRpsLimit 必填， false 则 InstanceRpsLimit 不生效
   */
  EnableInstanceRpsLimit?: boolean
  /**
   * 每个服务实例的 request per second 限速, 0 为不限流
   */
  InstanceRpsLimit?: number
  /**
   * 是否开启单实例最大并发数限制，true or false。true 则 InstanceReqLimit 必填， false 则 InstanceReqLimit 不生效
   */
  EnableInstanceReqLimit?: boolean
  /**
   * 每个服务实例的最大并发
   */
  InstanceReqLimit?: number
}

/**
 * DescribeModelServiceGroup返回参数结构体
 */
export interface DescribeModelServiceGroupResponse {
  /**
   * 服务组信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  ServiceGroup?: ServiceGroup
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 镜像属性
 */
export interface Attribute {
  /**
   * 为‘List’时属性值取Values 否则取Value
注意：此字段可能返回 null，表示取不到有效值。
   */
  Type?: string
  /**
   * 属性key
注意：此字段可能返回 null，表示取不到有效值。
   */
  Key?: string
  /**
   * 属性值
注意：此字段可能返回 null，表示取不到有效值。
   */
  Value?: string
  /**
   * 属性值列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  Values?: Array<string>
}

/**
 * 资源组
 */
export interface ResourceGroup {
  /**
   * 资源组id
   */
  ResourceGroupId?: string
  /**
   * 资源组名称
   */
  ResourceGroupName?: string
  /**
   * 可用节点个数(运行中的节点)
   */
  FreeInstance?: number
  /**
   * 总节点个数(所有节点)
   */
  TotalInstance?: number
  /**
   * 资源组已用的资源
注意：此字段可能返回 null，表示取不到有效值。
   */
  UsedResource?: GroupResource
  /**
   * 资源组总资源
注意：此字段可能返回 null，表示取不到有效值。
   */
  TotalResource?: GroupResource
  /**
   * 节点信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  InstanceSet?: Array<Instance>
  /**
   * 标签列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  TagSet?: Array<Tag>
}

/**
 * AuthToken 限流信息
 */
export interface AuthTokenLimit {
  /**
   * 限频策略：PerMinute 每分钟限频；PerDay 每日限频
   */
  Strategy?: string
  /**
   * 上限值
   */
  Max?: number
}

/**
 * DeleteDataSource请求参数结构体
 */
export interface DeleteDataSourceRequest {
  /**
   * 数据源ID
   */
  Id?: string
}

/**
 * DeleteMountLimit请求参数结构体
 */
export interface DeleteMountLimitRequest {
  /**
   * 数据源类型英文名
   */
  Type?: string
  /**
   * 存储实例ID
   */
  StorageId?: string
}

/**
 * 主机路径挂载配置
 */
export interface HostPath {
  /**
   * 需要挂载的主机路径
   */
  Path?: string
}

/**
 * StopModelAccelerateTask返回参数结构体
 */
export interface StopModelAccelerateTaskResponse {
  /**
   * 模型加速任务ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  ModelAccTaskId?: string
  /**
   * 异步任务ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  AsyncTaskId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 私有连接通道信息
 */
export interface IngressPrivateLinkInfo {
  /**
   * 用户VpcId
注意：此字段可能返回 null，表示取不到有效值。
   */
  VpcId?: string
  /**
   * 用户子网ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  SubnetId?: string
  /**
   * 内网http调用地址
注意：此字段可能返回 null，表示取不到有效值。
   */
  InnerHttpAddr?: Array<string>
  /**
   * 内网https调用地址
注意：此字段可能返回 null，表示取不到有效值。
   */
  InnerHttpsAddr?: Array<string>
  /**
   * 私有连接状态
注意：此字段可能返回 null，表示取不到有效值。
   */
  State?: string
}

/**
 * 公共算法版本信息
 */
export interface PublicAlgoVersion {
  /**
   * 公共算法版本Id
注意：此字段可能返回 null，表示取不到有效值。
   */
  PublicAlgoVersionId?: string
  /**
   * 对应的公共算法组Id
注意：此字段可能返回 null，表示取不到有效值。
   */
  PublicAlgoGroupId?: string
  /**
   * 版本号
注意：此字段可能返回 null，表示取不到有效值。
   */
  Version?: string
  /**
   * 模型简介
注意：此字段可能返回 null，表示取不到有效值。
   */
  Introduction?: string
  /**
   * 预览信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  PreviewInfo?: string
  /**
   * 预置训练镜像信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  PresetTrainImageInfo?: ImageInfo
  /**
   * 预置训练代码信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  PresetTrainCodeInfo?: MaterialInfo
  /**
   * 预置模型信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  PresetModelInfo?: MaterialInfo
  /**
   * 是否已经被导入到我的算法
注意：此字段可能返回 null，表示取不到有效值。
   */
  IsImported?: boolean
  /**
   * 创建时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  CreateTime?: string
  /**
   * 更新时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  UpdateTime?: string
  /**
   * 默认训练资源规格
注意：此字段可能返回 null，表示取不到有效值。
   */
  DefaultResourceSpec?: ResourceSpec
  /**
   * 默认推理资源规格
注意：此字段可能返回 null，表示取不到有效值。
   */
  DefaultInferenceResourceSpec?: ResourceSpec
  /**
   * 是否支持直接部署推理服务
注意：此字段可能返回 null，表示取不到有效值。
   */
  SupportDeploy?: boolean
  /**
   * 内置训练数据集
注意：此字段可能返回 null，表示取不到有效值。
   */
  PresetTrainDataset?: MaterialInfo
  /**
   * 训练代码包下载路径
注意：此字段可能返回 null，表示取不到有效值。
   */
  TrainCodeDownloadUrl?: string
  /**
   * 内置数据下载路径
注意：此字段可能返回 null，表示取不到有效值。
   */
  TrainDataDownloadUrl?: string
  /**
   * 训练参数列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  TrainParams?: Array<TrainParam>
  /**
   * 训练启动命令
注意：此字段可能返回 null，表示取不到有效值。
   */
  PresetTrainCodeStartCmd?: string
  /**
   * 是否非公开模型
注意：此字段可能返回 null，表示取不到有效值。
   */
  IsPrivateModel?: boolean
  /**
   * 各种设备下的训练镜像
注意：此字段可能返回 null，表示取不到有效值。
   */
  PresetTrainImageInfoList?: Array<DeviceImageInfo>
  /**
   * 各种设备下的推理镜像
注意：此字段可能返回 null，表示取不到有效值。
   */
  PresetInferenceImageInfoList?: Array<DeviceImageInfo>
  /**
   * 各种设备下的训练代码信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  PresetTrainCodeInfoList?: Array<DeviceMaterialInfo>
  /**
   * 各种设备下的内置模型信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  PresetModelInfoList?: Array<DeviceMaterialInfo>
  /**
   * 模型类别，比如LLM/MultiModal
注意：此字段可能返回 null，表示取不到有效值。
   */
  ModelCategory?: string
  /**
   * 公共算法Id
   */
  PublicAlgoSeriesId?: string
}

/**
 * 共享弹性网卡信息
 */
export interface ServiceEIPInfo {
  /**
   * 服务ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  ServiceId?: string
  /**
   * 用户VpcId
注意：此字段可能返回 null，表示取不到有效值。
   */
  VpcId?: string
  /**
   * 用户子网Id
注意：此字段可能返回 null，表示取不到有效值。
   */
  SubnetId?: string
}

/**
 * DescribeTrainingTasks返回参数结构体
 */
export interface DescribeTrainingTasksResponse {
  /**
   * 训练任务集
   */
  TrainingTaskSet?: Array<TrainingTaskSetItem>
  /**
   * 数量
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * UpdateMountLimit返回参数结构体
 */
export interface UpdateMountLimitResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeModelAccelerateTask请求参数结构体
 */
export interface DescribeModelAccelerateTaskRequest {
  /**
   * 模型加速任务ID
   */
  ModelAccTaskId: string
}

/**
 * 容器信息
 */
export interface Container {
  /**
   * 名字
注意：此字段可能返回 null，表示取不到有效值。
   */
  Name: string
  /**
   * id
注意：此字段可能返回 null，表示取不到有效值。
   */
  ContainerId: string
  /**
   * 镜像地址
注意：此字段可能返回 null，表示取不到有效值。
   */
  Image: string
  /**
   * 容器状态
注意：此字段可能返回 null，表示取不到有效值。
   */
  Status: ContainerStatus
}

/**
 * DeleteDataset返回参数结构体
 */
export interface DeleteDatasetResponse {
  /**
   * 删除的datasetId
   */
  DatasetId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 挂载限制
 */
export interface MountLimitInfo {
  /**
   * <p>数据源类型英文名</p>
   */
  Type?: string
  /**
   * <p>数据源所属存储实例ID</p>
   */
  StorageId?: string
  /**
   * <p>数据源所属存储实例名称</p>
   */
  StorageName?: string
  /**
   * <p>限制开关是否开启，只有开启时才有限制</p>
   */
  LimitMount?: boolean
  /**
   * <p>创建者uin</p>
   */
  Creator?: string
  /**
   * <p>创建者名称</p>
   */
  CreatorName?: string
  /**
   * <p>创建时间, 格式为yyyy-mm-ddThh:mm:ssZ</p>
   */
  CreateTime?: string
  /**
   * <p>更新时间, 格式为yyyy-mm-ddThh:mm:ssZ</p>
   */
  UpdateTime?: string
  /**
   * <p>额外配置</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  ExtraConf?: StorageExtraConf
}

/**
 * 执行命令探针检查行为
 */
export interface ExecAction {
  /**
   * 执行命令列表
   */
  Command?: Array<string>
}

/**
 * 训练任务详情
 */
export interface TrainingTaskDetail {
  /**
   * <p>训练任务ID</p>
   */
  Id?: string
  /**
   * <p>训练任务名称</p>
   */
  Name?: string
  /**
   * <p>主账号uin</p>
   */
  Uin?: string
  /**
   * <p>子账号uin</p>
   */
  SubUin?: string
  /**
   * <p>创建者名称</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  SubUinName?: string
  /**
   * <p>地域</p>
   */
  Region?: string
  /**
   * <p>训练框架名称，eg：SPARK、PYSARK、TENSORFLOW、PYTORCH</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  FrameworkName?: string
  /**
   * <p>训练框架版本</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  FrameworkVersion?: string
  /**
   * <p>框架运行环境</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  FrameworkEnvironment?: string
  /**
   * <p>计费模式</p>
   */
  ChargeType?: string
  /**
   * <p>预付费专用资源组</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  ResourceGroupId?: string
  /**
   * <p>资源配置</p>
   */
  ResourceConfigInfos?: Array<ResourceConfigInfo>
  /**
   * <p>标签</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Tags?: Array<Tag>
  /**
   * <p>训练模式，eg：PS_WORKER、DDP、MPI、HOROVOD</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  TrainingMode?: string
  /**
   * <p>代码包</p>
   */
  CodePackagePath?: CosPathInfo
  /**
   * <p>启动命令信息</p>
   */
  StartCmdInfo?: StartCmdInfo
  /**
   * <p>数据来源，eg：DATASET、COS</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  DataSource?: string
  /**
   * <p>数据配置</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  DataConfigs?: Array<DataConfig>
  /**
   * <p>调优参数</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  TuningParameters?: string
  /**
   * <p>训练输出</p>
   */
  Output?: CosPathInfo
  /**
   * <p>是否上报日志</p>
   */
  LogEnable?: boolean
  /**
   * <p>日志配置</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  LogConfig?: LogConfig
  /**
   * <p>VPC ID</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  VpcId?: string
  /**
   * <p>子网ID</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  SubnetId?: string
  /**
   * <p>自定义镜像信息</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  ImageInfo?: ImageInfo
  /**
   * <p>运行时长</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  RuntimeInSeconds?: number
  /**
   * <p>创建时间</p>
   */
  CreateTime?: string
  /**
   * <p>训练开始时间</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  StartTime?: string
  /**
   * <p>计费状态，eg：BILLING计费中，ARREARS_STOP欠费停止，NOT_BILLING不在计费中</p>
   */
  ChargeStatus?: string
  /**
   * <p>最近一次实例ID</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  LatestInstanceId?: string
  /**
   * <p>TensorBoard ID</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  TensorBoardId?: string
  /**
   * <p>备注</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Remark?: string
  /**
   * <p>失败原因</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  FailureReason?: string
  /**
   * <p>更新时间</p>
   */
  UpdateTime?: string
  /**
   * <p>训练结束时间</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  EndTime?: string
  /**
   * <p>计费金额信息，eg：2.00元/小时 (按量计费)</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  BillingInfo?: string
  /**
   * <p>预付费专用资源组名称</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  ResourceGroupName?: string
  /**
   * <p>任务信息</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Message?: string
  /**
   * <p>任务状态，eg：STARTING启动中、RUNNING运行中、STOPPING停止中、STOPPED已停止、FAILED异常、SUCCEED已完成</p>
   */
  Status?: string
  /**
   * <p>回调地址</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  CallbackUrl?: string
  /**
   * <p>任务关联的代码仓库配置</p>
   */
  CodeRepos?: Array<CodeRepoConfig>
  /**
   * <p>暴露网络配置</p>
   */
  ExposeNetworkConfig?: ExposeNetworkConfig
  /**
   * <p>操作者信息</p>
   */
  OperatorInfo?: OperatorInfo
}

/**
 * DescribeExport请求参数结构体
 */
export interface DescribeExportRequest {
  /**
   * 日志下载任务的ID
   */
  ExportId: string
}

/**
 * UpdateSubAccountLinuxUserInfo请求参数结构体
 */
export interface UpdateSubAccountLinuxUserInfoRequest {
  /**
   * 子账号信息列表
   */
  SubAccountList?: Array<SubAccountInfo>
}

/**
 * DescribeNotebook请求参数结构体
 */
export interface DescribeNotebookRequest {
  /**
   * notebook id
   */
  Id: string
  /**
   * <p>TI工作空间ID</p><p>仅用于“工作空间”白名单功能。如需使用，请联系TI管理员开通白名单。</p>
   */
  TiProjectId?: string
}

/**
 * DescribePublicAlgoVersionList请求参数结构体
 */
export interface DescribePublicAlgoVersionListRequest {
  /**
   * 过滤器
   */
  Filters?: Array<Filter>
  /**
   * 偏移量
   */
  Offset?: number
  /**
   * 返回记录条数，默认10
   */
  Limit?: number
  /**
   * 是否需要聚合
   */
  NeedsAggregate?: boolean
}

/**
 * 存储额外配置
 */
export interface StorageExtraConf {
  /**
   * cfs的存储类型
  // HP:通用性能型
  // SD:通用标准型
  // TP:turbo性能型
  // TB:turbo标准型
  // THP:吞吐型
   */
  CFSStorageType?: string
  /**
   * cfs的协议
   */
  CFSProtocol?: string
}

/**
 * 健康探针
 */
export interface HealthProbe {
  /**
   * 存活探针
   */
  LivenessProbe?: Probe
  /**
   * 就绪探针
   */
  ReadinessProbe?: Probe
  /**
   * 启动探针
   */
  StartupProbe?: Probe
}

/**
 * 本地磁盘信息
 */
export interface LocalDisk {
  /**
   * 节点ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  InstanceId: string
  /**
   * 本地路径
注意：此字段可能返回 null，表示取不到有效值。
   */
  LocalPath?: string
}

/**
 * TI资源规格
 */
export interface ResourceSpec {
  /**
   * 规格简称
注意：此字段可能返回 null，表示取不到有效值。
   */
  SpecAlias?: string
  /**
   * 规格Id
注意：此字段可能返回 null，表示取不到有效值。
   */
  SpecId?: string
  /**
   * 规则名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  SpecName?: string
}

/**
 * DescribeLogs返回参数结构体
 */
export interface DescribeLogsResponse {
  /**
   * <p>分页的游标</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Context?: string
  /**
   * <p>日志数组</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Content?: Array<LogIdentity>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 编码后的启动命令信息
 */
export interface EncodedStartCmdInfo {
  /**
   * 任务的启动命令，以base64格式输入，注意转换时需要完整输入{"StartCmd":"","PsStartCmd":"","WorkerStartCmd":""}
   */
  StartCmdInfo?: string
}

/**
 * StopNotebook请求参数结构体
 */
export interface StopNotebookRequest {
  /**
   * notebook id
   */
  Id: string
}

/**
 * DeleteModelServiceGroup请求参数结构体
 */
export interface DeleteModelServiceGroupRequest {
  /**
   * 服务id
   */
  ServiceGroupId: string
}

/**
 * 模型版本列表
 */
export interface TrainingModelVersionDTO {
  /**
   * 模型id
   */
  TrainingModelId?: string
  /**
   * 模型版本id
   */
  TrainingModelVersionId?: string
  /**
   * 模型版本
   */
  TrainingModelVersion?: string
  /**
   * 模型来源
   */
  TrainingModelSource?: string
  /**
   * 创建时间
   */
  TrainingModelCreateTime?: string
  /**
   * 创建人uin
   */
  TrainingModelCreator?: string
  /**
   * 算法框架
   */
  AlgorithmFramework?: string
  /**
   * 推理环境
   */
  ReasoningEnvironment?: string
  /**
   * 推理环境来源
   */
  ReasoningEnvironmentSource?: string
  /**
   * 模型指标
   */
  TrainingModelIndex?: string
  /**
   * 训练任务名称
   */
  TrainingJobName?: string
  /**
   * 模型cos路径
   */
  TrainingModelCosPath?: CosPathInfo
  /**
   * 模型名称
   */
  TrainingModelName?: string
  /**
   * 训练任务id
   */
  TrainingJobId?: string
  /**
   * 自定义推理环境
   */
  ReasoningImageInfo?: ImageInfo
  /**
   * 模型版本创建时间
   */
  CreateTime?: string
  /**
   * 模型处理状态
STATUS_SUCCESS：导入成功，STATUS_FAILED：导入失败 ，STATUS_RUNNING：导入中
注意：此字段可能返回 null，表示取不到有效值。
   */
  TrainingModelStatus?: string
  /**
   * 模型处理进度
注意：此字段可能返回 null，表示取不到有效值。
   */
  TrainingModelProgress?: number
  /**
   * 模型错误信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  TrainingModelErrorMsg?: string
  /**
   * 模型格式
注意：此字段可能返回 null，表示取不到有效值。
   */
  TrainingModelFormat?: string
  /**
   * 模型版本类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  VersionType?: string
  /**
   * GPU类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  GPUType?: string
  /**
   * 模型自动清理开关
注意：此字段可能返回 null，表示取不到有效值。
   */
  AutoClean?: string
  /**
   * 模型清理周期
注意：此字段可能返回 null，表示取不到有效值。
   */
  ModelCleanPeriod?: number
  /**
   * 模型数量保留上限
注意：此字段可能返回 null，表示取不到有效值。
   */
  MaxReservedModels?: number
  /**
   * 模型热更新目录
注意：此字段可能返回 null，表示取不到有效值。
   */
  ModelHotUpdatePath?: CosPathInfo
  /**
   * 推理环境id
注意：此字段可能返回 null，表示取不到有效值。
   */
  ReasoningEnvironmentId?: string
  /**
   * 训练任务版本
注意：此字段可能返回 null，表示取不到有效值。
   */
  TrainingJobVersion?: string
  /**
   * 训练偏好
注意：此字段可能返回 null，表示取不到有效值。
   */
  TrainingPreference?: string
  /**
   * 自动学习任务id
注意：此字段可能返回 null，表示取不到有效值。
   */
  AutoMLTaskId?: string
  /**
   * 是否QAT模型
注意：此字段可能返回 null，表示取不到有效值。
   */
  IsQAT?: boolean
}

/**
 * CreateModelServiceAuthToken请求参数结构体
 */
export interface CreateModelServiceAuthTokenRequest {
  /**
   * 服务组 id
   */
  ServiceGroupId: string
  /**
   * token 名称
   */
  Name?: string
  /**
   * Description 描述
   */
  Description?: string
}

/**
 * 暴露网络配置
 */
export interface ExposeNetworkConfig {
  /**
   * ssh配置
   */
  SSHConfig?: SSHConfig
  /**
   * 容器端口暴露到公网配置
   */
  ExposePortConfig?: ExposePortConfig
}

/**
 * V2版本的服务调用信息
 */
export interface ServiceCallInfoV2 {
  /**
   * 服务组id
注意：此字段可能返回 null，表示取不到有效值。
   */
  ServiceGroupId?: string
  /**
   * 服务的公网调用地址
注意：此字段可能返回 null，表示取不到有效值。
   */
  InternetEndpoint?: string
  /**
   * 鉴权是否开启
注意：此字段可能返回 null，表示取不到有效值。
   */
  AuthorizationEnable?: boolean
  /**
   * 鉴权token，仅当AuthorizationEnable为true时有效
注意：此字段可能返回 null，表示取不到有效值。
   */
  AuthToken?: string
  /**
   * LLM token 列表
   */
  AuthTokens?: Array<AuthToken>
  /**
   * 是否开启限流
   */
  EnableLimit?: boolean
  /**
   * 访问grpc时需携带的虚拟Host
   */
  GrpcHost?: string
  /**
   * 网关相关配置
   */
  GatewayConfig?: GatewayConfig
}

/**
 * 数据源信息
 */
export interface DataSourceInfo {
  /**
   * <p>数据源ID</p>
   */
  Id?: string
  /**
   * <p>数据源名称</p>
   */
  Name?: string
  /**
   * <p>创建者uin</p>
   */
  Creator?: string
  /**
   * <p>创建者名称</p>
   */
  CreatorName?: string
  /**
   * <p>数据源类型英文名</p>
   */
  Type?: string
  /**
   * <p>数据源权限，取值有RW RO</p>
   */
  Permission?: string
  /**
   * <p>数据源所属存储实例ID</p>
   */
  StorageId?: string
  /**
   * <p>数据源所属存储实例名称</p>
   */
  StorageName?: string
  /**
   * <p>数据源挂载配置</p>
   */
  MountConfigure?: MountConfigureInfo
  /**
   * <p>创建时间, 格式为yyyy-mm-ddThh:mm:ssZ</p>
   */
  CreateTime?: string
  /**
   * <p>更新时间, 格式为yyyy-mm-ddThh:mm:ssZ</p>
   */
  UpdateTime?: string
  /**
   * <p>限制开关是否开启，只有开启时才有限制</p>
   */
  LimitMount?: boolean
  /**
   * <p>标签配置</p>
   */
  Tags?: Array<Tag>
  /**
   * <p>额外配置,对应存储实例的额外配置</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  ExtraConf?: StorageExtraConf
}

/**
 * DescribeBillingResourceGroup请求参数结构体
 */
export interface DescribeBillingResourceGroupRequest {
  /**
   * 资源组id, 取值为创建资源组接口(CreateBillingResourceGroup)响应中的ResourceGroupId
   */
  ResourceGroupId: string
  /**
   * <p>TI工作空间ID</p><p>仅用于“工作空间”白名单功能。如需使用，请联系TI管理员开通白名单。</p>
   */
  TiProjectId?: string
  /**
   * 过滤条件
注意: 
1. Filter.Name 只支持以下枚举值:
    InstanceId (资源组节点id)
    InstanceStatus (资源组节点状态)
2. Filter.Values: 长度为1且Filter.Fuzzy=true时，支持模糊查询; 不为1时，精确查询
3. Filter.Negative: 是否取反，默认为false
4. Filter.Fuzzy: 是否模糊查询，默认为false
5. 每次请求的Filters的上限为10，Filter.Values的上限为100
   */
  Filters?: Array<Filter>
  /**
   * 分页查询起始位置，如：Limit为10，第一页Offset为0，第二页Offset为10...即每页左边为闭区间; 默认0
   */
  Offset?: number
  /**
   * 分页查询每页大小，默认20
   */
  Limit?: number
  /**
   * 排序方向; 枚举值: ASC | DESC；默认DESC
   */
  Order?: string
  /**
   * 排序字段; 枚举值: CreateTime (创建时间) ｜ ExpireTime (到期时间)；默认CreateTime
   */
  OrderField?: string
}

/**
 * notebook ssh端口配置
 */
export interface SSHConfig {
  /**
   * 是否开启ssh
注意：此字段可能返回 null，表示取不到有效值。
   */
  Enable?: boolean
  /**
   * 公钥信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  PublicKey?: string
  /**
   * 端口号
注意：此字段可能返回 null，表示取不到有效值。
   */
  Port?: number
  /**
   * 登录命令
注意：此字段可能返回 null，表示取不到有效值。
   */
  LoginCommand?: string
  /**
   * 登录地址是否改变
注意：此字段可能返回 null，表示取不到有效值。
   */
  IsAddressChanged?: boolean
  /**
   * POD访问信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  PodSSHInfo?: PodSSHInfo
}

/**
 * DescribeSubAccountLinuxUserInfos请求参数结构体
 */
export interface DescribeSubAccountLinuxUserInfosRequest {
  /**
   * 分页偏移量（0 表示全量）
   */
  Offset?: number
  /**
   * 每页数量（0 表示全量）
   */
  Limit?: number
  /**
   * 过滤条件
   */
  Filters?: Array<Filter>
}

/**
 * ChatCompletion返回参数结构体
 */
export interface ChatCompletionResponse {
  /**
   * 对话的模型服务组ID
   */
  Model?: string
  /**
   * 本次问答的答案。
   */
  Choices?: Array<Choice>
  /**
   * 会话Id。
   */
  Id?: string
  /**
   * token统计
   */
  Usage?: Usage
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * GosseFSx的配置
 */
export interface GooseFSx {
  /**
   * goosefsx实例id
   */
  Id?: string
  /**
   * GooseFSx实例需要挂载的路径
   */
  Path?: string
}

/**
 * 聚合后的公共算法版本
 */
export interface AggregatePublicAlgoVersion {
  /**
   * 用于聚合的系列名字
注意：此字段可能返回 null，表示取不到有效值。
   */
  GroupName?: string
  /**
   * 算法公共版本列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  PublicAlgoVersions?: Array<PublicAlgoVersion>
}

/**
 * DescribeTrainingTaskPods请求参数结构体
 */
export interface DescribeTrainingTaskPodsRequest {
  /**
   * 训练任务ID
   */
  Id: string
  /**
   * <p>TI工作空间ID</p><p>仅用于“工作空间”白名单功能。如需使用，请联系TI管理员开通白名单。</p>
   */
  TiProjectId?: string
}

/**
 * DescribeTrainingModelVersions返回参数结构体
 */
export interface DescribeTrainingModelVersionsResponse {
  /**
   * 模型版本列表
   */
  TrainingModelVersions?: Array<TrainingModelVersionDTO>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeSubAccountLinuxUserInfos返回参数结构体
 */
export interface DescribeSubAccountLinuxUserInfosResponse {
  /**
   * 子账号信息列表
   */
  SubAccountList?: Array<SubAccountInfo>
  /**
   * 总数（配合分页使用）
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteDataset请求参数结构体
 */
export interface DeleteDatasetRequest {
  /**
   * 数据集id
   */
  DatasetId: string
  /**
   * 是否删除cos标签文件
   */
  DeleteLabelEnable: boolean
}

/**
 * 物料信息
 */
export interface MaterialInfo {
  /**
   * 存储类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  StorageType?: string
  /**
   * Cos存储信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  CosPathInfo?: CosPathInfo
  /**
   * 物料名，支持Code、Model
注意：此字段可能返回 null，表示取不到有效值。
   */
  MaterialName?: string
  /**
   * 物料类型，支持PreSet(预置)、 Custom(自定义)
注意：此字段可能返回 null，表示取不到有效值。
   */
  MaterialType?: string
  /**
   * 训练任务挂载路径
注意：此字段可能返回 null，表示取不到有效值。
   */
  MountPath?: string
}

/**
 * 数据配置
 */
export interface DataConfig {
  /**
   * <p>映射路径</p>
   */
  MappingPath?: string
  /**
   * <p>存储用途<br>可选值为 BUILTIN_CODE, BUILTIN_DATA, BUILTIN_MODEL, USER_DATA, USER_CODE, USER_MODEL, OUTPUT, OTHER</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  DataSourceUsage?: string
  /**
   * <p>DATASET、COS、CFS、CFSTurbo、GooseFSx、HDFS、WEDATA_HDFS</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  DataSourceType?: string
  /**
   * <p>来自数据集的数据</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  DataSetSource?: DataSetConfig
  /**
   * <p>来自cos的数据</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  COSSource?: CosPathInfo
  /**
   * <p>来自CFS的数据</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  CFSSource?: CFSConfig
  /**
   * <p>来自HDFS的数据</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  HDFSSource?: HDFSConfig
  /**
   * <p>配置GooseFS的数据</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  GooseFSSource?: GooseFS
  /**
   * <p>配置TurboFS的数据</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  CFSTurboSource?: CFSTurbo
  /**
   * <p>来自本地磁盘的信息</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  LocalDiskSource?: LocalDisk
  /**
   * <p>CBS配置信息</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  CBSSource?: CBSConfig
  /**
   * <p>主机路径信息</p>
   */
  HostPathSource?: HostPath
  /**
   * <p>公有云数据源</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  PublicDataSource?: PublicDataSourceFS
}

/**
 * Notebook资源参数
 */
export interface ResourceConf {
  /**
   * cpu 处理器资源, 单位为1/1000核 (for预付费)
注意：此字段可能返回 null，表示取不到有效值。
   */
  Cpu?: number
  /**
   * memory 内存资源, 单位为1M (for预付费)
注意：此字段可能返回 null，表示取不到有效值。
   */
  Memory?: number
  /**
   * gpu Gpu卡资源，单位为1/100卡，例如GpuType=T4时，1 Gpu = 1/100 T4卡 (for预付费)
注意：此字段可能返回 null，表示取不到有效值。
   */
  Gpu?: number
  /**
   * GpuType 卡类型，参考资源组上对应的卡类型。eg: H800,A800,A100,T4,P4,V100等 (for预付费)
注意：此字段可能返回 null，表示取不到有效值。
   */
  GpuType?: string
  /**
   * 计算规格 (for后付费)，可选值如下：
TI.S.LARGE.POST: 4C8G 
TI.S.2XLARGE16.POST:  8C16G 
TI.S.2XLARGE32.POST:  8C32G 
TI.S.4XLARGE32.POST:  16C32G
TI.S.4XLARGE64.POST:  16C64G
TI.S.6XLARGE48.POST:  24C48G
TI.S.6XLARGE96.POST:  24C96G
TI.S.8XLARGE64.POST:  32C64G
TI.S.8XLARGE128.POST : 32C128G
TI.GN10.2XLARGE40.POST: 8C40G V100*1 
TI.GN10.5XLARGE80.POST:  18C80G V100*2 
TI.GN10.10XLARGE160.POST :  32C160G V100*4
TI.GN10.20XLARGE320.POST :  72C320G V100*8
TI.GN7.8XLARGE128.POST: 32C128G T4*1 
TI.GN7.10XLARGE160.POST: 40C160G T4*2 
TI.GN7.20XLARGE320.POST: 80C320G T4*4
注意：此字段可能返回 null，表示取不到有效值。
   */
  InstanceType?: string
}

/**
 * DescribeModelServiceGroup请求参数结构体
 */
export interface DescribeModelServiceGroupRequest {
  /**
   * 服务组ID
   */
  ServiceGroupId: string
  /**
   * 服务分类
   * @deprecated
   */
  ServiceCategory?: string
}

/**
 * PushTrainingMetrics返回参数结构体
 */
export interface PushTrainingMetricsResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * StopTrainingTask返回参数结构体
 */
export interface StopTrainingTaskResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 对话结果
 */
export interface Choice {
  /**
   * 对话结果
   */
  Message?: Message
  /**
   * 结束理由: stop, length, content_filter, null
   */
  FinishReason?: string
  /**
   * 序号
   */
  Index?: number
}

/**
 * HDFS的参数配置
 */
export interface HDFSConfig {
  /**
   * 集群实例ID,实例ID形如: emr-xxxxxxxx
   */
  Id: string
  /**
   * 路径
   */
  Path: string
}

/**
 * DescribeTrainingTaskPods返回参数结构体
 */
export interface DescribeTrainingTaskPodsResponse {
  /**
   * pod名称列表
   */
  PodNames?: Array<string>
  /**
   * 数量
   */
  TotalCount?: number
  /**
   * pod详细信息
   */
  PodInfoList?: Array<PodInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 计费项询价单元
 */
export interface SpecUnit {
  /**
   * 计费项名称
   */
  SpecName: string
  /**
   * 计费项数量,建议不超过100万
   */
  SpecCount: number
}

/**
 * DeleteDataSource返回参数结构体
 */
export interface DeleteDataSourceResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 模型加速任务
 */
export interface ModelAccelerateTask {
  /**
   * 模型加速任务ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  ModelAccTaskId?: string
  /**
   * 模型加速任务名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  ModelAccTaskName?: string
  /**
   * 模型ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  ModelId?: string
  /**
   * 模型名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  ModelName?: string
  /**
   * 模型版本
注意：此字段可能返回 null，表示取不到有效值。
   */
  ModelVersion?: string
  /**
   * 模型来源
注意：此字段可能返回 null，表示取不到有效值。
   */
  ModelSource?: string
  /**
   * 优化级别
注意：此字段可能返回 null，表示取不到有效值。
   */
  OptimizationLevel?: string
  /**
   * 任务状态
注意：此字段可能返回 null，表示取不到有效值。
   */
  TaskStatus?: string
  /**
   * input节点个数
注意：此字段可能返回 null，表示取不到有效值。
   */
  ModelInputNum?: number
  /**
   * input节点信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  ModelInputInfos?: Array<ModelInputInfo>
  /**
   * GPU型号
注意：此字段可能返回 null，表示取不到有效值。
   */
  GPUType?: string
  /**
   * 计费模式
注意：此字段可能返回 null，表示取不到有效值。
   */
  ChargeType?: string
  /**
   * 加速比
注意：此字段可能返回 null，表示取不到有效值。
   */
  Speedup?: string
  /**
   * 模型输入cos路径
注意：此字段可能返回 null，表示取不到有效值。
   */
  ModelInputPath?: CosPathInfo
  /**
   * 模型输出cos路径
注意：此字段可能返回 null，表示取不到有效值。
   */
  ModelOutputPath?: CosPathInfo
  /**
   * 错误信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  ErrorMsg?: string
  /**
   * 算法框架
注意：此字段可能返回 null，表示取不到有效值。
   */
  AlgorithmFramework?: string
  /**
   * 排队个数
注意：此字段可能返回 null，表示取不到有效值。
   */
  WaitNumber?: number
  /**
   * 创建时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  CreateTime?: string
  /**
   * 任务进度
注意：此字段可能返回 null，表示取不到有效值。
   */
  TaskProgress?: number
  /**
   * 模型格式
注意：此字段可能返回 null，表示取不到有效值。
   */
  ModelFormat?: string
  /**
   * 模型Tensor信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  TensorInfos?: Array<string>
  /**
   * 模型专业参数
注意：此字段可能返回 null，表示取不到有效值。
   */
  HyperParameter?: HyperParameter
  /**
   * 加速引擎版本
注意：此字段可能返回 null，表示取不到有效值。
   */
  AccEngineVersion?: string
  /**
   * 标签
注意：此字段可能返回 null，表示取不到有效值。
   */
  Tags?: Array<Tag>
  /**
   * 优化模型是否已保存到模型仓库
注意：此字段可能返回 null，表示取不到有效值。
   */
  IsSaved?: boolean
  /**
   * SAVED_MODEL保存时配置的签名
注意：此字段可能返回 null，表示取不到有效值。
   */
  ModelSignature?: string
  /**
   * 是否是QAT模型
注意：此字段可能返回 null，表示取不到有效值。
   */
  QATModel?: boolean
  /**
   * 加速引擎对应的框架版本
注意：此字段可能返回 null，表示取不到有效值。
   */
  FrameworkVersion?: string
  /**
   * 模型版本ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  ModelVersionId?: string
  /**
   * 资源组id
注意：此字段可能返回 null，表示取不到有效值。
   */
  ResourceGroupId?: string
  /**
   * 资源组名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  ResourceGroupName?: string
}

/**
 * Pod信息展示
 */
export interface Pod {
  /**
   * pod名
注意：此字段可能返回 null，表示取不到有效值。
   */
  Name?: string
  /**
   * pod的唯一id
注意：此字段可能返回 null，表示取不到有效值。
   */
  Uid?: string
  /**
   * 服务付费模式
注意：此字段可能返回 null，表示取不到有效值。
   */
  ChargeType?: string
  /**
   * pod的状态
注意：此字段可能返回 null，表示取不到有效值。
   */
  Phase?: string
  /**
   * pod的IP
注意：此字段可能返回 null，表示取不到有效值。
   */
  IP?: string
  /**
   * pod的创建时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  CreateTime?: string
  /**
   * 容器列表
注意：此字段可能返回 null，表示取不到有效值。
   * @deprecated
   */
  Containers?: Container
  /**
   * 容器列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  ContainerInfos?: Array<Container>
  /**
   * 容器调用信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  CrossTenantENIInfo?: CrossTenantENIInfo
  /**
   * 实例的状态信息
   */
  Status?: string
  /**
   * 实例的开始调度时间
   */
  StartScheduleTime?: string
  /**
   * 实例状态的补充信息
   */
  Message?: string
  /**
   * 当前实例所在的节点 IP
   */
  NodeIP?: string
  /**
   * 当前实例所在节点id
   */
  NodeId?: string
  /**
   * 当时实例所属资源组 id
   */
  ResourceGroupId?: string
  /**
   * 资源组名称
   */
  ResourceGroupName?: string
  /**
   * 实例的资源占用信息
   */
  ResourceInfo?: ResourceInfo
}

/**
 * DescribeEvents请求参数结构体
 */
export interface DescribeEventsRequest {
  /**
   * 服务类型，TRAIN为任务式建模, NOTEBOOK为Notebook, INFER为在线服务, BATCH为批量预测
枚举值：
- TRAIN
- NOTEBOOK
- INFER
- BATCH
   */
  Service: string
  /**
   * 服务ID，和Service参数对应，不同Service的服务ID获取方式不同，具体如下：
- Service类型为TRAIN：
  调用[DescribeTrainingTask接口](/document/product/851/75089)查询训练任务详情，ServiceId为接口返回值中Response.TrainingTaskDetail.LatestInstanceId
- Service类型为NOTEBOOK：
  调用[DescribeNotebook接口](/document/product/851/95662)查询Notebook详情，ServiceId为接口返回值中Response.NotebookDetail.PodName
- Service类型为INFER：
  调用[DescribeModelServiceGroup接口](/document/product/851/82285)查询服务组详情，ServiceId为接口返回值中Response.ServiceGroup.Services.ServiceId
- Service类型为BATCH：
  调用[DescribeBatchTask接口](/document/product/851/80180)查询跑批任务详情，ServiceId为接口返回值中Response.BatchTaskDetail.LatestInstanceId
   */
  ServiceId?: string
  /**
   * 查询事件最早发生的时间（RFC3339格式的时间字符串），默认值为当前时间的前一天
   */
  StartTime?: string
  /**
   * 查询事件最晚发生的时间（RFC3339格式的时间字符串），默认值为当前时间
   */
  EndTime?: string
  /**
   * 分页Limit，默认值为100，最大值为100
   */
  Limit?: number
  /**
   * 分页Offset，默认值为0
   */
  Offset?: number
  /**
   * 排列顺序（可选值为ASC, DESC ），默认为DESC
   */
  Order?: string
  /**
   * 排序的依据字段（可选值为FirstTimestamp, LastTimestamp），默认值为LastTimestamp
   */
  OrderField?: string
  /**
   * 过滤条件
注意: 
1. Filter.Name：目前支持ResourceKind（按事件关联的资源类型过滤）；Type（按事件类型过滤）
2. Filter.Values：
对于Name为ResourceKind，Values的可选取值为Deployment, Replicaset, Pod等K8S资源类型；
对于Name为Type，Values的可选取值仅为Normal或者Warning；
Values为多个的时候表示同时满足
3. Filter. Negative和Filter. Fuzzy没有使用
   */
  Filters?: Array<Filter>
}

/**
 * DeleteTrainingModel请求参数结构体
 */
export interface DeleteTrainingModelRequest {
  /**
   * 模型ID
   */
  TrainingModelId: string
  /**
   * 是否同步清理cos
   */
  EnableDeleteCos?: boolean
  /**
   * 删除模型类型，枚举值：NORMAL 普通，ACCELERATE 加速，不传则删除所有
   */
  ModelVersionType?: string
}

/**
 * DescribeModelServiceHotUpdated请求参数结构体
 */
export interface DescribeModelServiceHotUpdatedRequest {
  /**
   * 镜像信息，配置服务运行所需的镜像地址等信息
   */
  ImageInfo: ImageInfo
  /**
   * 模型信息，需要挂载模型时填写
   */
  ModelInfo?: ModelInfo
  /**
   * 挂载信息
   */
  VolumeMount?: VolumeMount
}

/**
 * DescribeTrainingTask返回参数结构体
 */
export interface DescribeTrainingTaskResponse {
  /**
   * 训练任务详情
   */
  TrainingTaskDetail?: TrainingTaskDetail
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteMountLimit返回参数结构体
 */
export interface DeleteMountLimitResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 平台镜像信息详情
 */
export interface PlatformImageInfo {
  /**
   * 框架名
注意：此字段可能返回 null，表示取不到有效值。
   */
  Framework?: string
  /**
   * 镜像类型: ccr or tcr
注意：此字段可能返回 null，表示取不到有效值。
   */
  ImageType?: string
  /**
   * 镜像地址
注意：此字段可能返回 null，表示取不到有效值。
   */
  ImageUrl?: string
  /**
   * TCR镜像示例所属地域
注意：此字段可能返回 null，表示取不到有效值。
   */
  RegistryRegion?: string
  /**
   * TCR镜像所属实例ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  RegistryId?: string
  /**
   * 镜像名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  ImageName?: string
  /**
   * 镜像Id
注意：此字段可能返回 null，表示取不到有效值。
   */
  ImageId?: string
  /**
   * 框架版本
注意：此字段可能返回 null，表示取不到有效值。
   */
  FrameworkVersion?: string
  /**
   * 支持的gpu列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  SupportGpuList?: Array<string>
  /**
   * 描述信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  Description?: string
  /**
   * 业务属性
注意：此字段可能返回 null，表示取不到有效值。
   */
  ExtraAttributes?: Array<Attribute>
  /**
   * 镜像适用场景Train/Inference/Notebook
注意：此字段可能返回 null，表示取不到有效值。
   */
  ImageRange?: Array<string>
  /**
   * 是否支持分布式部署
注意：此字段可能返回 null，表示取不到有效值。
   */
  SupportDistributedDeploy?: boolean
  /**
   * 支持的地域 all(所有地域)/autonomous(自动驾驶地域)/general(通用地域)
注意：此字段可能返回 null，表示取不到有效值。
   */
  RegionScope?: string
}

/**
 * DescribePlatformImages请求参数结构体
 */
export interface DescribePlatformImagesRequest {
  /**
   * 过滤器,  Name支持ImageId/ImageName/SupportDataPipeline/AllowSaveAllContent/ImageRange，其中ImageRange支持枚举值Train,Inference,Notebook
   */
  Filters?: Array<Filter>
  /**
   * 偏移信息
   */
  Offset?: number
  /**
   * 返回数量, 默认100
   */
  Limit?: number
}

/**
 * 探针结构信息
 */
export interface Probe {
  /**
   * 探针行为
   */
  ProbeAction?: ProbeAction
  /**
   * 等待服务启动的延迟
   */
  InitialDelaySeconds?: number
  /**
   * 轮询检查时间间隔
   */
  PeriodSeconds?: number
  /**
   * 检查超时时长
   */
  TimeoutSeconds?: number
  /**
   * 检测失败认定次数
   */
  FailureThreshold?: number
  /**
   * 检测成功认定次数，就绪默认 3，存活/启动默认 1
   */
  SuccessThreshold?: number
}

/**
 * DeleteModelService返回参数结构体
 */
export interface DeleteModelServiceResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 指标数据
 */
export interface MetricData {
  /**
   * 训练任务id
   */
  TaskId: string
  /**
   * 时间戳.unix timestamp,单位为秒
注意：此字段可能返回 null，表示取不到有效值。
   */
  Timestamp?: number
  /**
   * 用户uin
注意：此字段可能返回 null，表示取不到有效值。
   */
  Uin?: string
  /**
   * 本次上报数据所处的训练周期数。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Epoch?: number
  /**
   * 本次上报数据所处的训练迭代次数。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Step?: number
  /**
   * 训练停止所需的迭代总数。
注意：此字段可能返回 null，表示取不到有效值。
   */
  TotalSteps?: number
  /**
   * 数据点。数组元素为不同指标的数据。数组长度不超过10。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Points?: Array<DataPoint>
}

/**
 * DeleteTrainingModelVersion请求参数结构体
 */
export interface DeleteTrainingModelVersionRequest {
  /**
   * 模型版本ID
   */
  TrainingModelVersionId: string
  /**
   * 是否同步清理cos
   */
  EnableDeleteCos?: boolean
}

/**
 * DescribeBillingSpecsPrice返回参数结构体
 */
export interface DescribeBillingSpecsPriceResponse {
  /**
   * 计费项价格，支持批量返回
   */
  SpecsPrice?: Array<SpecPrice>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 多模态对话内容,支持图片与文字信息
 */
export interface MultiModalContent {
  /**
   * 对话类型，text表示文本对话内容，image_url表示图片对话内容
   */
  Type: string
  /**
   * 文本对话内容，当Type为text时需要填写该值
   */
  Text?: string
  /**
   * 图片对话内容，当Type为image_url时需要填写该值
   */
  ImageUrl?: ImageUrl
}

/**
 * DescribeTrainingModelVersion返回参数结构体
 */
export interface DescribeTrainingModelVersionResponse {
  /**
   * 模型版本
   */
  TrainingModelVersion?: TrainingModelVersionDTO
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 工作负载的状态
 */
export interface WorkloadStatus {
  /**
   * 当前实例数
   */
  Replicas: number
  /**
   * 更新的实例数
   */
  UpdatedReplicas: number
  /**
   * 就绪的实例数
   */
  ReadyReplicas: number
  /**
   * 可用的实例数
   */
  AvailableReplicas: number
  /**
   * 不可用的实例数
   */
  UnavailableReplicas: number
  /**
   * Normal	正常运行中
Abnormal	服务异常，例如容器启动失败等
Waiting	服务等待中，例如容器下载镜像过程等
Stopped   已停止 
Pending 启动中
Stopping 停止中
   */
  Status: string
  /**
   * 工作负载的状况信息
   * @deprecated
   */
  StatefulSetCondition?: Array<StatefulSetCondition>
  /**
   * 工作负载历史的状况信息
   */
  Conditions?: Array<StatefulSetCondition>
  /**
   * 状态异常时，展示原因
注意：此字段可能返回 null，表示取不到有效值。
   */
  Reason?: string
}

/**
 * 环境变量
 */
export interface EnvVar {
  /**
   * 环境变量key
注意：此字段可能返回 null，表示取不到有效值。
   */
  Name?: string
  /**
   * 环境变量value
注意：此字段可能返回 null，表示取不到有效值。
   */
  Value?: string
}

/**
 * StopTrainingTask请求参数结构体
 */
export interface StopTrainingTaskRequest {
  /**
   * 训练任务ID
   */
  Id: string
}

/**
 * 日志配置
 */
export interface LogConfig {
  /**
   * 日志需要投递到cls的日志集
注意：此字段可能返回 null，表示取不到有效值。
   */
  LogsetId: string
  /**
   * 日志需要投递到cls的主题
注意：此字段可能返回 null，表示取不到有效值。
   */
  TopicId: string
}

/**
 * StartTrainingTask返回参数结构体
 */
export interface StartTrainingTaskResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}
