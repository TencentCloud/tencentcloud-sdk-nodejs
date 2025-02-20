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
 * CreateModelService请求参数结构体
 */
export interface CreateModelServiceRequest {
  /**
   * 新增版本时需要填写
   */
  ServiceGroupId?: string
  /**
   * 不超过60个字，仅支持英文、数字、下划线"_"、短横"-"，只能以英文、数字开头
   */
  ServiceGroupName?: string
  /**
   * 模型服务的描述
   */
  ServiceDescription?: string
  /**
   * 付费模式,有 PREPAID （包年包月）和 POSTPAID_BY_HOUR（按量付费）
   */
  ChargeType?: string
  /**
   * 预付费模式下所属的资源组id，同服务组下唯一
   */
  ResourceGroupId?: string
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
   * 资源描述，指定包年包月模式下的cpu,mem,gpu等信息，后付费无需填写
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
   * 扩缩容类型 支持：自动 - "AUTO", 手动 - "MANUAL",默认为MANUAL
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
   * 是否开启接口鉴权，开启后自动生成token信息，访问需要token鉴权
   */
  AuthorizationEnable?: boolean
  /**
   * 腾讯云标签
   */
  Tags?: Array<Tag>
  /**
   * 是否新增版本
   */
  NewVersion?: boolean
  /**
   * 定时任务配置，使用定时策略时填写
   */
  CronScaleJobs?: Array<CronScaleJob>
  /**
   * 自动伸缩策略配置 HPA : 通过HPA进行弹性伸缩 CRON 通过定时任务进行伸缩
   */
  ScaleStrategy?: string
  /**
   * 计费模式[HYBRID_PAID]时生效, 用于标识混合计费模式下的预付费实例数
   */
  HybridBillingPrepaidReplicas?: number
  /**
   * [AUTO_ML 自动学习，自动学习正式发布 AUTO_ML_FORMAL, DEFAULT 默认]
   */
  CreateSource?: string
  /**
   * 是否开启模型的热更新。默认不开启
   */
  ModelHotUpdateEnable?: boolean
  /**
   * 定时停止配置
   */
  ScheduledAction?: ScheduledAction
  /**
   * 挂载配置，目前只支持CFS
   */
  VolumeMount?: VolumeMount
  /**
   * 服务限速限流相关配置
   */
  ServiceLimit?: ServiceLimit
  /**
   * 回调地址，用于回调创建服务状态信息，回调格式&内容详情见：[TI-ONE 接口回调说明](https://cloud.tencent.com/document/product/851/84292)
   */
  CallbackUrl?: string
  /**
   * 是否开启模型的加速, 仅对StableDiffusion(动态加速)格式的模型有效。
   */
  ModelTurboEnable?: boolean
  /**
   * 服务分类
   */
  ServiceCategory?: string
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
   * 服务的部署类型 [STANDARD 标准部署，DIST 分布式多机部署] 默认STANDARD
   */
  DeployType?: string
  /**
   * 单副本下的实例数，仅在部署类型为DIST时生效，默认1
   */
  InstancePerReplicas?: number
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
注意：此字段可能返回 null，表示取不到有效值。
   */
  BusinessStatus?: string
  /**
   * 已废弃,以ServiceInfo中的对应为准
注意：此字段可能返回 null，表示取不到有效值。
   * @deprecated
   */
  ServiceLimit?: ServiceLimit
  /**
   * 已废弃,以ServiceInfo中的对应为准
注意：此字段可能返回 null，表示取不到有效值。
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
Normal	正常运行中
Stopped  已停止
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
   * 分页查询起始位置，如：Limit为100，第一页Offset为0，第二页Offset为100....即每页左边为闭区间; 默认0
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
 * Notebook列表元素
 */
export interface NotebookSetItem {
  /**
   * notebook ID
   */
  Id?: string
  /**
   * notebook 名称
   */
  Name?: string
  /**
   * 计费模式
   */
  ChargeType?: string
  /**
   * 资源配置
   */
  ResourceConf?: ResourceConf
  /**
   * 预付费资源组
注意：此字段可能返回 null，表示取不到有效值。
   */
  ResourceGroupId?: string
  /**
   * 存储卷大小
注意：此字段可能返回 null，表示取不到有效值。
   */
  VolumeSizeInGB?: number
  /**
   * 计费金额信息，eg：2.00元/小时 (for后付费)
注意：此字段可能返回 null，表示取不到有效值。
   */
  BillingInfos?: Array<string>
  /**
   * 标签配置
注意：此字段可能返回 null，表示取不到有效值。
   */
  Tags?: Array<Tag>
  /**
   * 创建时间
   */
  CreateTime?: string
  /**
   * 启动时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  StartTime?: string
  /**
   * 更新时间
   */
  UpdateTime?: string
  /**
   * 运行时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  RuntimeInSeconds?: number
  /**
   * 计费状态
注意：此字段可能返回 null，表示取不到有效值。
   */
  ChargeStatus?: string
  /**
   * 状态
   */
  Status?: string
  /**
   * 错误原因
注意：此字段可能返回 null，表示取不到有效值。
   */
  FailureReason?: string
  /**
   * 结束时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  EndTime?: string
  /**
   * Pod名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  PodName?: string
  /**
   * 后付费资源规格名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  InstanceTypeAlias?: string
  /**
   * 预付费资源组名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  ResourceGroupName?: string
  /**
   * 是否自动终止
   */
  AutoStopping?: boolean
  /**
   * 自动停止时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  AutomaticStopTime?: number
  /**
   * 存储的类型。取值包含： 
    FREE:        预付费的免费存储
    CLOUD_PREMIUM： 高性能云硬盘
    CLOUD_SSD： SSD云硬盘
    CFS:     CFS存储，包含NFS和turbo
注意：此字段可能返回 null，表示取不到有效值。
   */
  VolumeSourceType?: string
  /**
   * CFS存储的配置
注意：此字段可能返回 null，表示取不到有效值。
   */
  VolumeSourceCFS?: CFSConfig
  /**
   * notebook 信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  Message?: string
  /**
   * notebook用户类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  UserTypes?: Array<string>
  /**
   * SSH配置
注意：此字段可能返回 null，表示取不到有效值。
   */
  SSHConfig?: SSHConfig
  /**
   * GooseFS存储配置
注意：此字段可能返回 null，表示取不到有效值。
   */
  VolumeSourceGooseFS?: GooseFS
  /**
   * 子用户名称
   */
  SubUinName?: string
  /**
   * AppId
注意：此字段可能返回 null，表示取不到有效值。
   */
  AppId?: string
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
 * DescribeBillingResourceGroups请求参数结构体
 */
export interface DescribeBillingResourceGroupsRequest {
  /**
   * 资源组类型;
枚举值:
空: 通用, TRAIN: 训练, INFERENCE: 推理
   */
  Type?: string
  /**
   * Filter.Name: 枚举值: ResourceGroupId (资源组id列表)                    ResourceGroupName (资源组名称列表)                    AvailableNodeCount（资源组中可用节点数量）Filter.Values: 长度为1且Filter.Fuzzy=true时，支持模糊查询; 不为1时，精确查询每次请求的Filters的上限为5，Filter.Values的上限为100
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
 * DescribeTrainingTasks请求参数结构体
 */
export interface DescribeTrainingTasksRequest {
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
 * 外部挂载信息
 */
export interface VolumeMount {
  /**
   * cfs的配置信息
   */
  CFSConfig: CFSConfig
  /**
   * 挂载源类型，CFS、COS，默认为CFS
   */
  VolumeSourceType?: string
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
 * 计费项询价结果
 */
export interface SpecPrice {
  /**
   * 计费项名称
   */
  SpecName: string
  /**
   * 原价，单位：分。最大值42亿，超过则返回0
   */
  TotalCost: number
  /**
   * 优惠后的价格，单位：分
   */
  RealTotalCost: number
  /**
   * 计费项数量
   */
  SpecCount?: number
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
   * pod名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  PodName?: string
  /**
   * 任务类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  TaskType?: string
  /**
   * 任务id
注意：此字段可能返回 null，表示取不到有效值。
   */
  TaskId?: string
  /**
   * 任务自定义名称
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
 * StartNotebook请求参数结构体
 */
export interface StartNotebookRequest {
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
 * 出参类型
 */
export interface TrainingTaskSetItem {
  /**
   * 训练任务ID
   */
  Id?: string
  /**
   * 训练任务名称
   */
  Name?: string
  /**
   * 框架名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  FrameworkName?: string
  /**
   * 训练框架版本
注意：此字段可能返回 null，表示取不到有效值。
   */
  FrameworkVersion?: string
  /**
   * 框架运行环境
注意：此字段可能返回 null，表示取不到有效值。
   */
  FrameworkEnvironment?: string
  /**
   * 计费模式
   */
  ChargeType?: string
  /**
   * 计费状态，eg：BILLING计费中，ARREARS_STOP欠费停止，NOT_BILLING不在计费中
   */
  ChargeStatus?: string
  /**
   * 预付费专用资源组
注意：此字段可能返回 null，表示取不到有效值。
   */
  ResourceGroupId?: string
  /**
   * 资源配置
   */
  ResourceConfigInfos?: Array<ResourceConfigInfo>
  /**
   * 训练模式eg：PS_WORKER、DDP、MPI、HOROVOD
注意：此字段可能返回 null，表示取不到有效值。
   */
  TrainingMode?: string
  /**
   * 任务状态，eg：SUBMITTING提交中、PENDING排队中、
STARTING启动中、RUNNING运行中、STOPPING停止中、STOPPED已停止、FAILED异常、SUCCEED已完成
   */
  Status?: string
  /**
   * 运行时长
注意：此字段可能返回 null，表示取不到有效值。
   */
  RuntimeInSeconds?: number
  /**
   * 创建时间
   */
  CreateTime?: string
  /**
   * 训练开始时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  StartTime?: string
  /**
   * 训练结束时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  EndTime?: string
  /**
   * 训练输出
   */
  Output?: CosPathInfo
  /**
   * 失败原因
注意：此字段可能返回 null，表示取不到有效值。
   */
  FailureReason?: string
  /**
   * 更新时间
   */
  UpdateTime?: string
  /**
   * 计费金额信息，eg：2.00元/小时 (按量计费)
   */
  BillingInfo?: string
  /**
   * 预付费专用资源组名称
   */
  ResourceGroupName?: string
  /**
   * 自定义镜像信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  ImageInfo?: ImageInfo
  /**
   * 任务信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  Message?: string
  /**
   * 标签配置
注意：此字段可能返回 null，表示取不到有效值。
   */
  Tags?: Array<Tag>
  /**
   * 回调地址
注意：此字段可能返回 null，表示取不到有效值。
   */
  CallbackUrl?: string
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
   * 算法框架 （PYTORCH/TENSORFLOW/DETECTRON2/PMML/MMDETECTION)
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
   * 模型格式 （PYTORCH/TORCH_SCRIPT/DETECTRON2/SAVED_MODEL/FROZEN_GRAPH/PMML/MMDETECTION/ONNX/HUGGING_FACE）
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
 * DescribeModelServiceGroups返回参数结构体
 */
export interface DescribeModelServiceGroupsResponse {
  /**
   * 推理服务组数量。
注意：此字段可能返回 null，表示取不到有效值。
   */
  TotalCount?: number
  /**
   * 服务组信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  ServiceGroups?: Array<ServiceGroup>
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
 * CreateNotebook请求参数结构体
 */
export interface CreateNotebookRequest {
  /**
   * 名称。不超过60个字符，仅支持中英文、数字、下划线"_"、短横"-"，只能以中英文、数字开头
   */
  Name: string
  /**
   * 计算资源付费模式 ，可选值为：
PREPAID：预付费，即包年包月
POSTPAID_BY_HOUR：按小时后付费
   */
  ChargeType: string
  /**
   * 计算资源配置
   */
  ResourceConf: ResourceConf
  /**
   * 是否上报日志
   */
  LogEnable: boolean
  /**
   * 是否ROOT权限
   */
  RootAccess: boolean
  /**
   * 是否自动停止
   */
  AutoStopping: boolean
  /**
   * 是否访问公网
   */
  DirectInternetAccess: boolean
  /**
   * 资源组ID(for预付费)
   */
  ResourceGroupId?: string
  /**
   * Vpc-Id
   */
  VpcId?: string
  /**
   * 子网Id
   */
  SubnetId?: string
  /**
   * 存储的类型。取值包含： 
FREE：预付费的免费存储
CLOUD_PREMIUM：高性能云硬盘
CLOUD_SSD：SSD云硬盘
CFS：CFS存储
CFS_TURBO：CFS Turbo存储
GooseFSx：GooseFSx存储
   */
  VolumeSourceType?: string
  /**
   * 云硬盘存储卷大小，单位GB
   */
  VolumeSizeInGB?: number
  /**
   * CFS存储的配置
   */
  VolumeSourceCFS?: CFSConfig
  /**
   * 日志配置
   */
  LogConfig?: LogConfig
  /**
   * 生命周期脚本的ID
   */
  LifecycleScriptId?: string
  /**
   * 默认GIT存储库的ID
   */
  DefaultCodeRepoId?: string
  /**
   * 其他GIT存储库的ID，最多3个
   */
  AdditionalCodeRepoIds?: Array<string>
  /**
   * 自动停止时间，单位小时
   */
  AutomaticStopTime?: number
  /**
   * 标签配置
   */
  Tags?: Array<Tag>
  /**
   * 数据配置，只支持WEDATA_HDFS存储类型
   */
  DataConfigs?: Array<DataConfig>
  /**
   * 镜像信息
   */
  ImageInfo?: ImageInfo
  /**
   * 镜像类型，包括SYSTEM、TCR、CCR
   */
  ImageType?: string
  /**
   * SSH配置信息
   */
  SSHConfig?: SSHConfig
  /**
   * GooseFS存储配置
   */
  VolumeSourceGooseFS?: GooseFS
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
   * 资资源组已用的资源
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
 * DescribeInferTemplates请求参数结构体
 */
export type DescribeInferTemplatesRequest = null

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
}

/**
 * DescribeModelAccelerateTask返回参数结构体
 */
export interface DescribeModelAccelerateTaskResponse {
  /**
   * 模型加速任务详情
注意：此字段可能返回 null，表示取不到有效值。
   */
  ModelAccelerateTask: ModelAccelerateTask
  /**
   * 模型加速时长，单位s
注意：此字段可能返回 null，表示取不到有效值。
   */
  ModelAccRuntimeInSecond: number
  /**
   * 模型加速任务开始时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  ModelAccStartTime: string
  /**
   * 模型加速任务结束时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  ModelAccEndTime: string
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
 * DescribeModelServiceGroups请求参数结构体
 */
export interface DescribeModelServiceGroupsRequest {
  /**
   * 偏移量，默认为0
   */
  Offset?: number
  /**
   * 返回数量，默认为20，最大值为100
   */
  Limit?: number
  /**
   * 输出列表的排列顺序。取值范围：ASC：升序排列 DESC：降序排列
   */
  Order?: string
  /**
   * 排序的依据字段， 取值范围 "CreateTime" "UpdateTime"
   */
  OrderField?: string
  /**
   * 分页参数，支持的分页过滤Name包括：
["ClusterId", "ServiceId", "ServiceGroupName", "ServiceGroupId","Status","CreatedBy","ModelVersionId"]
   */
  Filters?: Array<Filter>
  /**
   * 标签过滤参数
   */
  TagFilters?: Array<TagFilter>
  /**
   * 服务分类
   */
  ServiceCategory?: string
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
 * 推理服务在集群中的信息
 */
export interface ServiceInfo {
  /**
   * 期望运行的Pod数量，停止状态是0
不同计费模式和调节模式下对应关系如下
PREPAID 和 POSTPAID_BY_HOUR:
手动调节模式下对应 实例数量
自动调节模式下对应 基于时间的默认策略的实例数量
HYBRID_PAID:
后付费实例手动调节模式下对应 实例数量
后付费实例自动调节模式下对应 时间策略的默认策略的实例数量
注意：此字段可能返回 null，表示取不到有效值。
   */
  Replicas: number
  /**
   * 镜像信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  ImageInfo: ImageInfo
  /**
   * 环境变量
注意：此字段可能返回 null，表示取不到有效值。
   */
  Env: Array<EnvVar>
  /**
   * 资源信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  Resources: ResourceInfo
  /**
   * 后付费实例对应的机型规格
注意：此字段可能返回 null，表示取不到有效值。
   */
  InstanceType: string
  /**
   * 模型信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  ModelInfo: ModelInfo
  /**
   * 是否启用日志
注意：此字段可能返回 null，表示取不到有效值。
   */
  LogEnable: boolean
  /**
   * 日志配置
注意：此字段可能返回 null，表示取不到有效值。
   */
  LogConfig: LogConfig
  /**
   * 是否开启鉴权
注意：此字段可能返回 null，表示取不到有效值。
   */
  AuthorizationEnable: boolean
  /**
   * hpa配置
注意：此字段可能返回 null，表示取不到有效值。
   */
  HorizontalPodAutoscaler: HorizontalPodAutoscaler
  /**
   * 服务的状态描述
注意：此字段可能返回 null，表示取不到有效值。
   */
  Status: WorkloadStatus
  /**
   * 权重
注意：此字段可能返回 null，表示取不到有效值。
   */
  Weight: number
  /**
   * 资源总量
注意：此字段可能返回 null，表示取不到有效值。
   */
  ResourceTotal: ResourceInfo
  /**
   * 历史实例数
注意：此字段可能返回 null，表示取不到有效值。
   */
  OldReplicas: number
  /**
   * 计费模式[HYBRID_PAID]时生效, 用于标识混合计费模式下的预付费实例数, 若不填则默认为1
注意：此字段可能返回 null，表示取不到有效值。
   */
  HybridBillingPrepaidReplicas: number
  /**
   * 历史 HYBRID_PAID 时的实例数，用户恢复服务
注意：此字段可能返回 null，表示取不到有效值。
   */
  OldHybridBillingPrepaidReplicas: number
  /**
   * 是否开启模型的热更新。默认不开启
注意：此字段可能返回 null，表示取不到有效值。
   */
  ModelHotUpdateEnable: boolean
  /**
   * 服务的规格别名
   */
  InstanceAlias?: string
  /**
   * 实例数量调节方式,默认为手动
支持：自动 - "AUTO", 手动 - "MANUAL"
注意：此字段可能返回 null，表示取不到有效值。
   */
  ScaleMode?: string
  /**
   * 定时伸缩任务
注意：此字段可能返回 null，表示取不到有效值。
   */
  CronScaleJobs?: Array<CronScaleJob>
  /**
   * 定时伸缩策略
注意：此字段可能返回 null，表示取不到有效值。
   */
  ScaleStrategy?: string
  /**
   * 定时停止的配置
注意：此字段可能返回 null，表示取不到有效值。
   */
  ScheduledAction?: string
  /**
   * 实例列表
注意：此字段可能返回 null，表示取不到有效值。
   * @deprecated
   */
  PodList?: Array<string>
  /**
   * Pod列表信息
注意：此字段可能返回 null，表示取不到有效值。
   * @deprecated
   */
  Pods?: Pod
  /**
   * Pod列表信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  PodInfos?: Array<Pod>
  /**
   * 服务限速限流相关配置
注意：此字段可能返回 null，表示取不到有效值。
   */
  ServiceLimit?: ServiceLimit
  /**
   * 是否开启模型的加速, 仅对StableDiffusion(动态加速)格式的模型有效。
注意：此字段可能返回 null，表示取不到有效值。
   */
  ModelTurboEnable?: boolean
  /**
   * 挂载
注意：此字段可能返回 null，表示取不到有效值。
   */
  VolumeMount?: VolumeMount
  /**
   * 推理代码信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  InferCodeInfo?: InferCodeInfo
  /**
   * 服务的启动命令
注意：此字段可能返回 null，表示取不到有效值。
   */
  Command?: string
  /**
   * 开启TIONE内网访问外部设置
注意：此字段可能返回 null，表示取不到有效值。
   */
  ServiceEIP?: ServiceEIP
  /**
   * 服务端口，默认为8501
注意：此字段可能返回 null，表示取不到有效值。
   */
  ServicePort?: number
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
   */
  ServiceCategory?: string
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
   */
  ServiceCategory?: string
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
   */
  ServiceCategory?: string
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
 * StopNotebook返回参数结构体
 */
export interface StopNotebookResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
   * notebook标志
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
 * DescribeNotebooks返回参数结构体
 */
export interface DescribeNotebooksResponse {
  /**
   * 详情
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
 * 类型NotebookDetail
 */
export interface NotebookDetail {
  /**
   * notebook  ID
   */
  Id?: string
  /**
   * notebook 名称
   */
  Name?: string
  /**
   * 生命周期脚本
注意：此字段可能返回 null，表示取不到有效值。
   */
  LifecycleScriptId?: string
  /**
   * Pod-Name
注意：此字段可能返回 null，表示取不到有效值。
   */
  PodName?: string
  /**
   * Update-Time
   */
  UpdateTime?: string
  /**
   * 是否访问公网
   */
  DirectInternetAccess?: boolean
  /**
   * 预付费专用资源组
注意：此字段可能返回 null，表示取不到有效值。
   */
  ResourceGroupId?: string
  /**
   * 标签配置
注意：此字段可能返回 null，表示取不到有效值。
   */
  Tags?: Array<Tag>
  /**
   * 是否自动停止
   */
  AutoStopping?: boolean
  /**
   * 其他GIT存储库，最多3个，单个
长度不超过512字符
注意：此字段可能返回 null，表示取不到有效值。
   */
  AdditionalCodeRepoIds?: Array<string>
  /**
   * 自动停止时间，单位小时
注意：此字段可能返回 null，表示取不到有效值。
   */
  AutomaticStopTime?: number
  /**
   * 资源配置
   */
  ResourceConf?: ResourceConf
  /**
   * 默认GIT存储库，长度不超过512字符
   */
  DefaultCodeRepoId?: string
  /**
   * 训练输出
注意：此字段可能返回 null，表示取不到有效值。
   */
  EndTime?: string
  /**
   * 是否上报日志
   */
  LogEnable?: boolean
  /**
   * 日志配置
注意：此字段可能返回 null，表示取不到有效值。
   */
  LogConfig?: LogConfig
  /**
   * VPC ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  VpcId?: string
  /**
   * 子网ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  SubnetId?: string
  /**
   * 任务状态
   */
  Status?: string
  /**
   * 运行时长
注意：此字段可能返回 null，表示取不到有效值。
   */
  RuntimeInSeconds?: number
  /**
   * 创建时间
   */
  CreateTime?: string
  /**
   * 训练开始时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  StartTime?: string
  /**
   * 计费状态，eg：BILLING计费中，ARREARS_STOP欠费停止，NOT_BILLING不在计费中
注意：此字段可能返回 null，表示取不到有效值。
   */
  ChargeStatus?: string
  /**
   * 是否ROOT权限
   */
  RootAccess?: boolean
  /**
   * 计贺金额信息，eg:2.00元/小时
注意：此字段可能返回 null，表示取不到有效值。
   */
  BillingInfos?: Array<string>
  /**
   * 存储卷大小 （单位时GB，最小10GB，必须是10G的倍数）
注意：此字段可能返回 null，表示取不到有效值。
   */
  VolumeSizeInGB?: number
  /**
   * 失败原因
注意：此字段可能返回 null，表示取不到有效值。
   */
  FailureReason?: string
  /**
   * 计算资源付费模式 (- PREPAID：预付费，即包年包月 - POSTPAID_BY_HOUR：按小时后付费)
   */
  ChargeType?: string
  /**
   * 后付费资源规格说明
注意：此字段可能返回 null，表示取不到有效值。
   */
  InstanceTypeAlias?: string
  /**
   * 预付费资源组名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  ResourceGroupName?: string
  /**
   * 存储的类型。取值包含： 
    FREE:        预付费的免费存储
    CLOUD_PREMIUM： 高性能云硬盘
    CLOUD_SSD： SSD云硬盘
    CFS:     CFS存储，包含NFS和turbo
注意：此字段可能返回 null，表示取不到有效值。
   */
  VolumeSourceType?: string
  /**
   * CFS存储的配置
注意：此字段可能返回 null，表示取不到有效值。
   */
  VolumeSourceCFS?: CFSConfig
  /**
   * 数据配置
注意：此字段可能返回 null，表示取不到有效值。
   */
  DataConfigs?: Array<DataConfig>
  /**
   * notebook 信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  Message?: string
  /**
   * 数据源来源，eg：WeData_HDFS
注意：此字段可能返回 null，表示取不到有效值。
   */
  DataSource?: string
  /**
   * 镜像信息
   */
  ImageInfo?: ImageInfo
  /**
   * 镜像类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  ImageType?: string
  /**
   * SSH配置
注意：此字段可能返回 null，表示取不到有效值。
   */
  SSHConfig?: SSHConfig
  /**
   * GooseFS存储配置
注意：此字段可能返回 null，表示取不到有效值。
   */
  VolumeSourceGooseFS?: GooseFS
  /**
   * 子用户ID
   */
  SubUin?: string
  /**
   * 调度节点ID
   */
  ResourceGroupInstanceId?: string
  /**
   * 子用户名称
   */
  SubUinName?: string
  /**
   * 任务实例创建时间
   */
  JobCreateTime?: string
  /**
   * Appid
注意：此字段可能返回 null，表示取不到有效值。
   */
  AppId?: string
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
}

/**
 * 模型描述信息
 */
export interface ModelInfo {
  /**
   * 模型版本id, DescribeTrainingModelVersion查询模型接口时的id
自动学习类型的模型填写自动学习的任务id
   */
  ModelVersionId: string
  /**
   * 模型id
   */
  ModelId?: string
  /**
   * 模型名
   */
  ModelName?: string
  /**
   * 模型版本
   */
  ModelVersion?: string
  /**
   * 模型来源
   */
  ModelSource?: string
  /**
   * cos路径信息
   */
  CosPathInfo?: CosPathInfo
  /**
   * 模型对应的算法框架，预留
注意：此字段可能返回 null，表示取不到有效值。
   */
  AlgorithmFramework?: string
  /**
   * 默认为 NORMAL, 已加速模型: ACCELERATE, 自动学习模型 AUTO_ML
注意：此字段可能返回 null，表示取不到有效值。
   */
  ModelType?: string
  /**
   * 模型格式
注意：此字段可能返回 null，表示取不到有效值。
   */
  ModelFormat?: string
  /**
   * 是否为私有化大模型
注意：此字段可能返回 null，表示取不到有效值。
   */
  IsPrivateModel?: boolean
  /**
   * 模型的类别 多模态MultiModal, 文本大模型 LLM
   */
  ModelCategory?: string
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
 * CreateModelService返回参数结构体
 */
export interface CreateModelServiceResponse {
  /**
   * 生成的模型服务
   */
  Service?: Service
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 在线服务一个服务组的信息
 */
export interface ServiceGroup {
  /**
   * 服务组id
   */
  ServiceGroupId?: string
  /**
   * 服务组名
   */
  ServiceGroupName?: string
  /**
   * 创建者
   */
  CreatedBy?: string
  /**
   * 创建时间
   */
  CreateTime?: string
  /**
   * 更新时间
   */
  UpdateTime?: string
  /**
   * 主账号
   */
  Uin?: string
  /**
   * 服务组下服务总数
注意：此字段可能返回 null，表示取不到有效值。
   */
  ServiceCount?: number
  /**
   * 服务组下在运行的服务数量
注意：此字段可能返回 null，表示取不到有效值。
   */
  RunningServiceCount?: number
  /**
   * 服务描述
注意：此字段可能返回 null，表示取不到有效值。
   */
  Services?: Array<Service>
  /**
   * 服务组状态，与服务一致
 CREATING 创建中
     CREATE_FAILED 创建失败
     Normal	正常运行中
     Stopped  已停止
     Stopping 停止中
     Abnormal 异常
     Pending 启动中
     Waiting 就绪中
注意：此字段可能返回 null，表示取不到有效值。
   */
  Status?: string
  /**
   * 服务组标签
注意：此字段可能返回 null，表示取不到有效值。
   */
  Tags?: Array<Tag>
  /**
   * 服务组下最高版本
注意：此字段可能返回 null，表示取不到有效值。
   */
  LatestVersion?: string
  /**
   * 服务的业务状态
CREATING 创建中
     CREATE_FAILED 创建失败
     ARREARS_STOP 因欠费被强制停止
     BILLING 计费中
     WHITELIST_USING 白名单试用中
     WHITELIST_STOP 白名单额度不足
注意：此字段可能返回 null，表示取不到有效值。
   */
  BusinessStatus?: string
  /**
   * 服务的计费信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  BillingInfo?: string
  /**
   * 服务的创建来源
注意：此字段可能返回 null，表示取不到有效值。
   */
  CreateSource?: string
  /**
   * 服务组的权重更新状态 
UPDATING 更新中
     UPDATED 更新成功
     UPDATE_FAILED 更新失败
注意：此字段可能返回 null，表示取不到有效值。
   */
  WeightUpdateStatus?: string
  /**
   * 服务组下运行的pod数量
注意：此字段可能返回 null，表示取不到有效值。
   */
  ReplicasCount?: number
  /**
   * 服务组下期望的pod数
注意：此字段可能返回 null，表示取不到有效值。
   */
  AvailableReplicasCount?: number
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
 * StopModelAccelerateTask返回参数结构体
 */
export interface StopModelAccelerateTaskResponse {
  /**
   * 模型加速任务ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  ModelAccTaskId: string
  /**
   * 异步任务ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  AsyncTaskId: string
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
  DatasetId: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 训练任务详情
 */
export interface TrainingTaskDetail {
  /**
   * 训练任务ID
   */
  Id?: string
  /**
   * 训练任务名称
   */
  Name?: string
  /**
   * 主账号uin
   */
  Uin?: string
  /**
   * 子账号uin
   */
  SubUin?: string
  /**
   * 创建者名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  SubUinName?: string
  /**
   * 地域
   */
  Region?: string
  /**
   * 训练框架名称，eg：SPARK、PYSARK、TENSORFLOW、PYTORCH
注意：此字段可能返回 null，表示取不到有效值。
   */
  FrameworkName?: string
  /**
   * 训练框架版本
注意：此字段可能返回 null，表示取不到有效值。
   */
  FrameworkVersion?: string
  /**
   * 框架运行环境
注意：此字段可能返回 null，表示取不到有效值。
   */
  FrameworkEnvironment?: string
  /**
   * 计费模式
   */
  ChargeType?: string
  /**
   * 预付费专用资源组
注意：此字段可能返回 null，表示取不到有效值。
   */
  ResourceGroupId?: string
  /**
   * 资源配置
   */
  ResourceConfigInfos?: Array<ResourceConfigInfo>
  /**
   * 标签
注意：此字段可能返回 null，表示取不到有效值。
   */
  Tags?: Array<Tag>
  /**
   * 训练模式，eg：PS_WORKER、DDP、MPI、HOROVOD
注意：此字段可能返回 null，表示取不到有效值。
   */
  TrainingMode?: string
  /**
   * 代码包
   */
  CodePackagePath?: CosPathInfo
  /**
   * 启动命令信息
   */
  StartCmdInfo?: StartCmdInfo
  /**
   * 数据来源，eg：DATASET、COS
注意：此字段可能返回 null，表示取不到有效值。
   */
  DataSource?: string
  /**
   * 数据配置
注意：此字段可能返回 null，表示取不到有效值。
   */
  DataConfigs?: Array<DataConfig>
  /**
   * 调优参数
注意：此字段可能返回 null，表示取不到有效值。
   */
  TuningParameters?: string
  /**
   * 训练输出
   */
  Output?: CosPathInfo
  /**
   * 是否上报日志
   */
  LogEnable?: boolean
  /**
   * 日志配置
注意：此字段可能返回 null，表示取不到有效值。
   */
  LogConfig?: LogConfig
  /**
   * VPC ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  VpcId?: string
  /**
   * 子网ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  SubnetId?: string
  /**
   * 自定义镜像信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  ImageInfo?: ImageInfo
  /**
   * 运行时长
注意：此字段可能返回 null，表示取不到有效值。
   */
  RuntimeInSeconds?: number
  /**
   * 创建时间
   */
  CreateTime?: string
  /**
   * 训练开始时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  StartTime?: string
  /**
   * 计费状态，eg：BILLING计费中，ARREARS_STOP欠费停止，NOT_BILLING不在计费中
   */
  ChargeStatus?: string
  /**
   * 最近一次实例ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  LatestInstanceId?: string
  /**
   * TensorBoard ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  TensorBoardId?: string
  /**
   * 备注
注意：此字段可能返回 null，表示取不到有效值。
   */
  Remark?: string
  /**
   * 失败原因
注意：此字段可能返回 null，表示取不到有效值。
   */
  FailureReason?: string
  /**
   * 更新时间
   */
  UpdateTime?: string
  /**
   * 训练结束时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  EndTime?: string
  /**
   * 计费金额信息，eg：2.00元/小时 (按量计费)
注意：此字段可能返回 null，表示取不到有效值。
   */
  BillingInfo?: string
  /**
   * 预付费专用资源组名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  ResourceGroupName?: string
  /**
   * 任务信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  Message?: string
  /**
   * 任务状态，eg：STARTING启动中、RUNNING运行中、STOPPING停止中、STOPPED已停止、FAILED异常、SUCCEED已完成
   */
  Status?: string
  /**
   * 回调地址
注意：此字段可能返回 null，表示取不到有效值。
   */
  CallbackUrl?: string
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
 * DescribeNotebook请求参数结构体
 */
export interface DescribeNotebookRequest {
  /**
   * notebook id
   */
  Id: string
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
   * 过滤条件
注意: 
1. Filter.Name 只支持以下枚举值:
    InstanceId (资源组节点id)
    InstanceStatus (资源组节点状态)
2. Filter.Values: 长度为1且Filter.Fuzzy=true时，支持模糊查询; 不为1时，精确查询
3. 每次请求的Filters的上限为10，Filter.Values的上限为100
   */
  Filters?: Array<Filter>
  /**
   * 分页查询起始位置，如：Limit为10，第一页Offset为0，第二页Offset为10....即每页左边为闭区间; 默认0
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
 * DescribeTrainingTask请求参数结构体
 */
export interface DescribeTrainingTaskRequest {
  /**
   * 训练任务ID
   */
  Id: string
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
 * DescribeTrainingTaskPods请求参数结构体
 */
export interface DescribeTrainingTaskPodsRequest {
  /**
   * 训练任务ID
   */
  Id: string
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
 * 数据配置
 */
export interface DataConfig {
  /**
   * 映射路径
   */
  MappingPath?: string
  /**
   * 存储用途
可选值为 BUILTIN_CODE, BUILTIN_DATA, BUILTIN_MODEL, USER_DATA, USER_CODE, USER_MODEL, OUTPUT, OTHER
注意：此字段可能返回 null，表示取不到有效值。
   */
  DataSourceUsage?: string
  /**
   * DATASET、COS、CFS、CFSTurbo、GooseFSx、HDFS、WEDATA_HDFS
注意：此字段可能返回 null，表示取不到有效值。
   */
  DataSourceType?: string
  /**
   * 来自数据集的数据
注意：此字段可能返回 null，表示取不到有效值。
   */
  DataSetSource?: DataSetConfig
  /**
   * 来自cos的数据
注意：此字段可能返回 null，表示取不到有效值。
   */
  COSSource?: CosPathInfo
  /**
   * 来自CFS的数据
注意：此字段可能返回 null，表示取不到有效值。
   */
  CFSSource?: CFSConfig
  /**
   * 来自HDFS的数据
注意：此字段可能返回 null，表示取不到有效值。
   */
  HDFSSource?: HDFSConfig
  /**
   * 配置GooseFS的数据
注意：此字段可能返回 null，表示取不到有效值。
   */
  GooseFSSource?: GooseFS
  /**
   * 配置TurboFS的数据
注意：此字段可能返回 null，表示取不到有效值。
   */
  CFSTurboSource?: CFSTurbo
  /**
   * 来自本地磁盘的信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  LocalDiskSource?: LocalDisk
  /**
   * CBS配置信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  CBSSource?: CBSConfig
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
 * PushTrainingMetrics返回参数结构体
 */
export interface PushTrainingMetricsResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
  TrainingModelVersion: TrainingModelVersionDTO
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
