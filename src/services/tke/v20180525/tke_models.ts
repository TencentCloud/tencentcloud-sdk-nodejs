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
 * DescribeClusterEndpointVipStatus请求参数结构体
 */
export interface DescribeClusterEndpointVipStatusRequest {
  /**
   * 集群ID
   */
  ClusterId: string
}

/**
 * DescribeClusterSecurity请求参数结构体
 */
export interface DescribeClusterSecurityRequest {
  /**
   * 集群 ID，请填写 查询集群列表 接口中返回的 clusterId 字段
   */
  ClusterId: string
}

/**
 * EKS Instance Volume,  可选包括CbsVolume和NfsVolume
 */
export interface EksCiVolume {
  /**
   * Cbs Volume
注意：此字段可能返回 null，表示取不到有效值。
   */
  CbsVolumes?: Array<CbsVolume>
  /**
   * Nfs Volume
注意：此字段可能返回 null，表示取不到有效值。
   */
  NfsVolumes?: Array<NfsVolume>
}

/**
 * GetTkeAppChartList请求参数结构体
 */
export interface GetTkeAppChartListRequest {
  /**
   * app类型，取值log,scheduler,network,storage,monitor,dns,image,other,invisible
   */
  Kind?: string
  /**
   * app支持的操作系统，取值arm32、arm64、amd64
   */
  Arch?: string
  /**
   * 集群类型，取值tke、eks
   */
  ClusterType?: string
}

/**
 * DescribeEdgeCVMInstances请求参数结构体
 */
export interface DescribeEdgeCVMInstancesRequest {
  /**
   * 集群id
   */
  ClusterID: string
  /**
   * 过滤条件
仅支持cvm-id过滤
   */
  Filters?: Array<Filter>
}

/**
 * InstallLogAgent请求参数结构体
 */
export interface InstallLogAgentRequest {
  /**
   * TKE集群ID
   */
  ClusterId: string
  /**
   * kubelet根目录
   */
  KubeletRootDir?: string
  /**
   * 集群类型 tke/eks，默认tke
   */
  ClusterType?: string
}

/**
 * DescribeClusterEndpointVipStatus返回参数结构体
 */
export interface DescribeClusterEndpointVipStatusResponse {
  /**
   * 端口操作状态 (Creating 创建中  CreateFailed 创建失败 Created 创建完成 Deleting 删除中 DeletedFailed 删除失败 Deleted 已删除 NotFound 未发现操作 )
   */
  Status?: string
  /**
   * 操作失败的原因
注意：此字段可能返回 null，表示取不到有效值。
   */
  ErrorMsg?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteCluster返回参数结构体
 */
export interface DeleteClusterResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 容器状态
 */
export interface ContainerState {
  /**
   * 容器运行开始时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  StartTime?: string
  /**
   * 容器状态：created, running, exited, unknown
   */
  State?: string
  /**
   * 容器运行结束时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  FinishTime?: string
  /**
   * 容器运行退出码
注意：此字段可能返回 null，表示取不到有效值。
   */
  ExitCode?: number
  /**
   * 容器状态 Reason
注意：此字段可能返回 null，表示取不到有效值。
   */
  Reason?: string
  /**
   * 容器状态信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  Message?: string
  /**
   * 容器重启次数
注意：此字段可能返回 null，表示取不到有效值。
   */
  RestartCount?: number
}

/**
 * CreateClusterRouteTable返回参数结构体
 */
export interface CreateClusterRouteTableResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 子网信息
 */
export interface SubnetInfos {
  /**
   * 子网id
   */
  SubnetId: string
  /**
   * 子网节点名称
   */
  Name: string
  /**
   * 安全组id
   */
  SecurityGroups?: Array<string>
  /**
   * 系统，默认linux
   */
  Os?: string
  /**
   * 硬件架构，默认amd64
   */
  Arch?: string
}

/**
 * ModifyClusterImage返回参数结构体
 */
export interface ModifyClusterImageResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * EKS Instnace CBS volume
 */
export interface CbsVolume {
  /**
   * cbs volume 数据卷名称
   */
  Name: string
  /**
   * 腾讯云cbs盘Id
   */
  CbsDiskId: string
}

/**
 * DescribeAddon返回参数结构体
 */
export interface DescribeAddonResponse {
  /**
   * addon列表
   */
  Addons?: Array<Addon>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeEKSClusters请求参数结构体
 */
export interface DescribeEKSClustersRequest {
  /**
   * 集群ID列表(为空时，
表示获取账号下所有集群)
   */
  ClusterIds?: Array<string>
  /**
   * 偏移量,默认0
   */
  Offset?: number
  /**
   * 最大输出条数，默认20
   */
  Limit?: number
  /**
   * 过滤条件,当前只支持按照单个条件ClusterName进行过滤
   */
  Filters?: Array<Filter>
}

/**
 * DescribePrometheusInstancesOverview请求参数结构体
 */
export interface DescribePrometheusInstancesOverviewRequest {
  /**
   * 用于分页
   */
  Offset?: number
  /**
   * 用于分页
   */
  Limit?: number
  /**
   * 过滤实例，目前支持：
ID: 通过实例ID来过滤 
Name: 通过实例名称来过滤
   */
  Filters?: Array<Filter>
}

/**
 * ServiceAccount认证相关配置
 */
export interface ServiceAccountAuthenticationOptions {
  /**
   * 使用TKE默认issuer和jwksuri
注意：此字段可能返回 null，表示取不到有效值。
   */
  UseTKEDefault?: boolean
  /**
   * service-account-issuer
注意：此字段可能返回 null，表示取不到有效值。
   */
  Issuer?: string
  /**
   * service-account-jwks-uri
注意：此字段可能返回 null，表示取不到有效值。
   */
  JWKSURI?: string
  /**
   * 如果为true，则会自动创建允许匿名用户访问'/.well-known/openid-configuration'和/openid/v1/jwks的rbac规则
注意：此字段可能返回 null，表示取不到有效值。
   */
  AutoCreateDiscoveryAnonymousAuth?: boolean
}

/**
 * ModifyOpenPolicyList返回参数结构体
 */
export interface ModifyOpenPolicyListResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 执行步骤信息
 */
export interface Step {
  /**
   * 名称
   */
  Name?: string
  /**
   * 开始时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  StartAt?: string
  /**
   * 结束时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  EndAt?: string
  /**
   * 当前状态
注意：此字段可能返回 null，表示取不到有效值。
   */
  Status?: string
  /**
   * 执行信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  Message?: string
}

/**
 * 日志开关详细信息
 */
export interface SwitchInfo {
  /**
   * 开启标识符 true代表开启
注意：此字段可能返回 null，表示取不到有效值。
   */
  Enable?: boolean
  /**
   * CLS日志集ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  LogsetId?: string
  /**
   * CLS日志主题ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  TopicId?: string
  /**
   * 当前log-agent版本
注意：此字段可能返回 null，表示取不到有效值。
   */
  Version?: string
  /**
   * 是否可升级
注意：此字段可能返回 null，表示取不到有效值。
   */
  UpgradeAble?: boolean
  /**
   * CLS日志主题所属region
注意：此字段可能返回 null，表示取不到有效值。
   */
  TopicRegion?: string
}

/**
 * CreateClusterNodePool请求参数结构体
 */
export interface CreateClusterNodePoolRequest {
  /**
   * cluster id
   */
  ClusterId: string
  /**
   * AutoScalingGroupPara AS组参数，参考 https://cloud.tencent.com/document/product/377/20440
   */
  AutoScalingGroupPara: string
  /**
   * LaunchConfigurePara 运行参数，参考 https://cloud.tencent.com/document/product/377/20447
   */
  LaunchConfigurePara: string
  /**
   * InstanceAdvancedSettings
   */
  InstanceAdvancedSettings: InstanceAdvancedSettings
  /**
   * 是否启用自动伸缩
   */
  EnableAutoscale: boolean
  /**
   * 节点池名称
   */
  Name?: string
  /**
   * Labels标签
   */
  Labels?: Array<Label>
  /**
   * Taints互斥
   */
  Taints?: Array<Taint>
  /**
   * 节点Annotation 列表
   */
  Annotations?: Array<AnnotationValue>
  /**
   * 节点池纬度运行时类型及版本
   */
  ContainerRuntime?: string
  /**
   * 运行时版本
   */
  RuntimeVersion?: string
  /**
   * 节点池os，当为自定义镜像时，传镜像id；否则为公共镜像的osName
   */
  NodePoolOs?: string
  /**
   * 容器的镜像版本，"DOCKER_CUSTOMIZE"(容器定制版),"GENERAL"(普通版本，默认值)
   */
  OsCustomizeType?: string
  /**
   * 资源标签
   */
  Tags?: Array<Tag>
  /**
   * 删除保护开关
   */
  DeletionProtection?: boolean
}

/**
 * UpgradeClusterRelease请求参数结构体
 */
export interface UpgradeClusterReleaseRequest {
  /**
   * 集群ID
   */
  ClusterId: string
  /**
   * 自定义的应用名称
   */
  Name: string
  /**
   * 应用命名空间
   */
  Namespace: string
  /**
   * 制品名称或从第三方repo 安装chart时，制品压缩包下载地址, 不支持重定向类型chart 地址，结尾为*.tgz
   */
  Chart: string
  /**
   * 自定义参数，覆盖chart 中values.yaml 中的参数
   */
  Values?: ReleaseValues
  /**
   * 制品来源，范围：tke-market 或 other 默认值：tke-market，示例值：tke-market
   */
  ChartFrom?: string
  /**
   * 制品版本( 从第三方安装时，不传这个参数）
   */
  ChartVersion?: string
  /**
   * 制品仓库URL地址
   */
  ChartRepoURL?: string
  /**
   * 制品访问用户名
   */
  Username?: string
  /**
   * 制品访问密码
   */
  Password?: string
  /**
   * 制品命名空间，ChartFrom为tke-market时ChartNamespace不为空，值为DescribeProducts接口反馈的Namespace
   */
  ChartNamespace?: string
  /**
   * 集群类型，支持传 tke, eks, tkeedge, external(注册集群）
   */
  ClusterType?: string
}

/**
 * addon的具体描述
 */
export interface Addon {
  /**
   * addon名称
   */
  AddonName?: string
  /**
   * addon的版本
   */
  AddonVersion?: string
  /**
   * addon的参数，是一个json格式的base64转码后的字符串
注意：此字段可能返回 null，表示取不到有效值。
   */
  RawValues?: string
  /**
   * addon的状态
注意：此字段可能返回 null，表示取不到有效值。
   */
  Phase?: string
  /**
   * addon失败的原因
注意：此字段可能返回 null，表示取不到有效值。
   */
  Reason?: string
  /**
   * addon的创建时间
   */
  CreateTime?: string
}

/**
 * opa策略信息
 */
export interface OpenPolicyInfo {
  /**
   * 策略分类：cluster集群策略、node节点策略、namespace命名空间策略、configuration配置相关策略、compute计算资源策略、storage存储资源策略、network网络资源策略
注意：此字段可能返回 null，表示取不到有效值。
   */
  PolicyCategory?: string
  /**
   * 策略中文名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  PolicyName?: string
  /**
   * 策略描述
注意：此字段可能返回 null，表示取不到有效值。
   */
  PolicyDesc?: string
  /**
   * 策略运行模式：dryrun空跑不生效，deny拦截生效
注意：此字段可能返回 null，表示取不到有效值。
   */
  EnforcementAction?: string
  /**
   * 关联的事件数量(最近7d)
注意：此字段可能返回 null，表示取不到有效值。
   */
  EventNums?: number
  /**
   * 策略英文名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  Name?: string
  /**
   * 策略模板类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  Kind?: string
  /**
   * 策略开关状态：open打开，close关闭
注意：此字段可能返回 null，表示取不到有效值。
   */
  EnabledStatus?: string
  /**
   * 策略的实例的yaml示例base64编码
注意：此字段可能返回 null，表示取不到有效值。
   */
  ConstraintYamlExample?: string
  /**
   * 策略关联的实例列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  OpenConstraintInfoList?: Array<OpenConstraintInfo>
}

/**
 * DescribeEdgeClusterUpgradeInfo请求参数结构体
 */
export interface DescribeEdgeClusterUpgradeInfoRequest {
  /**
   * 集群ID
   */
  ClusterId: string
  /**
   * 要升级到的TKEEdge版本
   */
  EdgeVersion: string
}

/**
 * 不同角色的节点配置参数
 */
export interface RunInstancesForNode {
  /**
   * 节点角色，取值:MASTER_ETCD, WORKER。MASTER_ETCD只有在创建 INDEPENDENT_CLUSTER 独立集群时需要指定。MASTER_ETCD节点数量为3～7，建议为奇数。MASTER_ETCD节点最小配置为4C8G。
   */
  NodeRole: string
  /**
   * CVM创建透传参数，json化字符串格式，详见[CVM创建实例](https://cloud.tencent.com/document/product/213/15730)接口，传入公共参数外的其他参数即可，其中ImageId会替换为TKE集群OS对应的镜像。
   */
  RunInstancesPara: Array<string>
  /**
   * 节点高级设置，该参数会覆盖集群级别设置的InstanceAdvancedSettings，和上边的RunInstancesPara按照顺序一一对应（当前只对节点自定义参数ExtraArgs生效）。
   */
  InstanceAdvancedSettingsOverrides?: Array<InstanceAdvancedSettings>
}

/**
 * DisableVpcCniNetworkType返回参数结构体
 */
export interface DisableVpcCniNetworkTypeResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 可被预留券抵扣的 Pod 某种规格的抵扣率
 */
export interface PodDeductionRate {
  /**
   * Pod的 CPU
注意：此字段可能返回 null，表示取不到有效值。
   */
  Cpu?: number
  /**
   * Pod 的内存
注意：此字段可能返回 null，表示取不到有效值。
   */
  Memory?: number
  /**
   *  Pod 的类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  Type?: string
  /**
   *  Pod 的 GPU 卡数，Pod 类型为 GPU 时有效。
注意：此字段可能返回 null，表示取不到有效值。
   */
  GpuNum?: string
  /**
   * 这种规格的 Pod总数
注意：此字段可能返回 null，表示取不到有效值。
   */
  TotalNum?: number
  /**
   * 这种规格的 Pod被预留券抵扣的数量
注意：此字段可能返回 null，表示取不到有效值。
   */
  DeductionNum?: number
}

/**
 * DescribeClusterControllers返回参数结构体
 */
export interface DescribeClusterControllersResponse {
  /**
   * 描述集群中各个控制器的状态
   */
  ControllerStatusSet?: Array<ControllerStatus>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeExistedInstances请求参数结构体
 */
export interface DescribeExistedInstancesRequest {
  /**
   * 集群 ID，请填写查询集群列表 接口中返回的 ClusterId 字段（仅通过ClusterId获取需要过滤条件中的VPCID。节点状态比较时会使用该地域下所有集群中的节点进行比较。参数不支持同时指定InstanceIds和ClusterId。
   */
  ClusterId?: string
  /**
   * 按照一个或者多个实例ID查询。实例ID形如：ins-xxxxxxxx。（此参数的具体格式可参考API简介的id.N一节）。每次请求的实例的上限为100。参数不支持同时指定InstanceIds和Filters。
   */
  InstanceIds?: Array<string>
  /**
   * 过滤条件,字段和详见[CVM查询实例](https://cloud.tencent.com/document/api/213/15728)如果设置了ClusterId，会附加集群的VPCID作为查询字段，在此情况下如果在Filter中指定了"vpc-id"作为过滤字段，指定的VPCID必须与集群的VPCID相同。
   */
  Filters?: Array<Filter>
  /**
   * 实例IP进行过滤(同时支持内网IP和外网IP)
   */
  VagueIpAddress?: string
  /**
   * 实例名称进行过滤
   */
  VagueInstanceName?: string
  /**
   * 偏移量，默认为0。关于Offset的更进一步介绍请参考 API [简介](https://cloud.tencent.com/document/api/213/15688)中的相关小节。
   */
  Offset?: number
  /**
   * 返回数量，默认为20，最大值为100。关于Limit的更进一步介绍请参考 API [简介](https://cloud.tencent.com/document/api/213/15688)中的相关小节。
   */
  Limit?: number
  /**
   * 根据多个实例IP进行过滤
   */
  IpAddresses?: Array<string>
}

/**
 * DeletePrometheusClusterAgent请求参数结构体
 */
export interface DeletePrometheusClusterAgentRequest {
  /**
   * agent列表
   */
  Agents: Array<PrometheusAgentInfo>
  /**
   * 实例id
   */
  InstanceId: string
  /**
   * 在7天可回收期间，强制解除绑定
   */
  Force?: boolean
}

/**
 * 集群等级变配记录
 */
export interface ClusterLevelChangeRecord {
  /**
   * 记录ID
   */
  ID?: string
  /**
   * 集群ID
   */
  ClusterID?: string
  /**
   * 变配状态：trading 发货中,upgrading 变配中,success 变配成功,failed 变配失败。
   */
  Status?: string
  /**
   * 状态描述
   */
  Message?: string
  /**
   * 变配前规模
   */
  OldLevel?: string
  /**
   * 变配后规模
   */
  NewLevel?: string
  /**
   * 变配触发类型：manual 手动,auto 自动
   */
  TriggerType?: string
  /**
   * 创建时间
   */
  CreatedAt?: string
  /**
   * 开始时间
   */
  StartedAt?: string
  /**
   * 结束时间
   */
  EndedAt?: string
}

/**
 * ModifyPrometheusAlertRule返回参数结构体
 */
export interface ModifyPrometheusAlertRuleResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeEKSContainerInstanceEvent返回参数结构体
 */
export interface DescribeEKSContainerInstanceEventResponse {
  /**
   * 事件集合
   */
  Events?: Array<Event>
  /**
   * 容器实例id
   */
  EksCiId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 集群路由表对象
 */
export interface RouteTableInfo {
  /**
   * 路由表名称。
   */
  RouteTableName?: string
  /**
   * 路由表CIDR。
   */
  RouteTableCidrBlock?: string
  /**
   * VPC实例ID。
   */
  VpcId?: string
}

/**
 * EnableClusterDeletionProtection返回参数结构体
 */
export interface EnableClusterDeletionProtectionResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 集群关联的伸缩组信息
 */
export interface ClusterAsGroup {
  /**
   * 伸缩组ID
   */
  AutoScalingGroupId?: string
  /**
   * 伸缩组状态(开启 enabled 开启中 enabling 关闭 disabled 关闭中 disabling 更新中 updating 删除中 deleting 开启缩容中 scaleDownEnabling 关闭缩容中 scaleDownDisabling)
   */
  Status?: string
  /**
   * 节点是否设置成不可调度
注意：此字段可能返回 null，表示取不到有效值。
   */
  IsUnschedulable?: boolean
  /**
   * 伸缩组的label列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  Labels?: Array<Label>
  /**
   * 创建时间
   */
  CreatedTime?: string
}

/**
 * 云原生Prometheus模板可修改项
 */
export interface PrometheusTempModify {
  /**
   * 修改名称
   */
  Name?: string
  /**
   * 修改描述
注意：此字段可能返回 null，表示取不到有效值。
   */
  Describe?: string
  /**
   * 当Level为cluster时有效，
模板中的ServiceMonitor规则列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  ServiceMonitors?: Array<PrometheusConfigItem>
  /**
   * 当Level为cluster时有效，
模板中的PodMonitors规则列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  PodMonitors?: Array<PrometheusConfigItem>
  /**
   * 当Level为cluster时有效，
模板中的RawJobs规则列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  RawJobs?: Array<PrometheusConfigItem>
  /**
   * 当Level为instance时有效，
模板中的聚合规则列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  RecordRules?: Array<PrometheusConfigItem>
  /**
   * 修改内容，只有当模板类型是Alert时生效
注意：此字段可能返回 null，表示取不到有效值。
   */
  AlertDetailRules?: Array<PrometheusAlertPolicyItem>
}

/**
 * EnableClusterAudit返回参数结构体
 */
export interface EnableClusterAuditResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateBackupStorageLocation返回参数结构体
 */
export interface CreateBackupStorageLocationResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 集群巡检诊断结果
 */
export interface KubeJarvisStateDiagnostic {
  /**
   * 诊断开始时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  StartTime?: string
  /**
   * 诊断结束时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  EndTime?: string
  /**
   * 诊断目录
注意：此字段可能返回 null，表示取不到有效值。
   */
  Catalogues?: Array<KubeJarvisStateCatalogue>
  /**
   * 诊断类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  Type?: string
  /**
   * 诊断名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  Name?: string
  /**
   * 诊断描述
注意：此字段可能返回 null，表示取不到有效值。
   */
  Desc?: string
  /**
   * 诊断结果列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  Results?: Array<KubeJarvisStateResultsItem>
  /**
   * 诊断结果统计
注意：此字段可能返回 null，表示取不到有效值。
   */
  Statistics?: Array<KubeJarvisStateStatistic>
}

/**
 * EnvironmentVariable
 */
export interface EnvironmentVariable {
  /**
   * key
   */
  Name?: string
  /**
   * val
   */
  Value?: string
}

/**
 * UpdateImageCache请求参数结构体
 */
export interface UpdateImageCacheRequest {
  /**
   * 镜像缓存ID
   */
  ImageCacheId: string
  /**
   * 镜像缓存名称
   */
  ImageCacheName?: string
  /**
   * 镜像仓库凭证数组
   */
  ImageRegistryCredentials?: Array<ImageRegistryCredential>
  /**
   * 用于制作镜像缓存的容器镜像列表
   */
  Images?: Array<string>
  /**
   * 镜像缓存的大小。默认为20 GiB。取值范围参考[云硬盘类型](https://cloud.tencent.com/document/product/362/2353)中的高性能云盘类型的大小限制。
   */
  ImageCacheSize?: number
  /**
   * 镜像缓存保留时间天数，过期将会自动清理，默认为0，永不过期。
   */
  RetentionDays?: number
  /**
   * 安全组Id
   */
  SecurityGroupIds?: Array<string>
}

/**
 * 手动加入的节点
 */
export interface ManuallyAdded {
  /**
   * 加入中的节点数量
   */
  Joining?: number
  /**
   * 初始化中的节点数量
   */
  Initializing?: number
  /**
   * 正常的节点数量
   */
  Normal?: number
  /**
   * 节点总数
   */
  Total?: number
}

/**
 * 标签绑定的资源类型，当前支持类型："cluster"
 */
export interface Tag {
  /**
   * 标签键
   */
  Key?: string
  /**
   * 标签值
   */
  Value?: string
}

/**
 * DescribePrometheusAgentInstances请求参数结构体
 */
export interface DescribePrometheusAgentInstancesRequest {
  /**
   * 集群id
可以是tke, eks, edge的集群id
   */
  ClusterId: string
}

/**
 * ModifyClusterAttribute请求参数结构体
 */
export interface ModifyClusterAttributeRequest {
  /**
   * 集群ID
   */
  ClusterId: string
  /**
   * 集群所属项目
   */
  ProjectId?: number
  /**
   * 集群名称
   */
  ClusterName?: string
  /**
   * 集群描述
   */
  ClusterDesc?: string
  /**
   * 集群等级
   */
  ClusterLevel?: string
  /**
   * 自动变配集群等级
   */
  AutoUpgradeClusterLevel?: AutoUpgradeClusterLevel
  /**
   * 是否开启QGPU共享
   */
  QGPUShareEnable?: boolean
  /**
   * 集群属性
   */
  ClusterProperty?: ClusterProperty
}

/**
 * DescribeClusterRoutes返回参数结构体
 */
export interface DescribeClusterRoutesResponse {
  /**
   * 符合条件的实例数量。
   */
  TotalCount?: number
  /**
   * 集群路由对象。
   */
  RouteSet?: Array<RouteInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeClusters请求参数结构体
 */
export interface DescribeClustersRequest {
  /**
   * 集群ID列表(为空时，
表示获取账号下所有集群)
   */
  ClusterIds?: Array<string>
  /**
   * 偏移量,默认0
   */
  Offset?: number
  /**
   * 最大输出条数，默认20，最大为100
   */
  Limit?: number
  /**
   * · "Name":"ClusterName","Values": ["test"] 按照【集群名】进行过滤。 类型：String 必选：否 · "Name":"ClusterType","Values": ["MANAGED_CLUSTER"] 按照【集群类型】进行过滤。 类型：String 必选：否 · "Name":"ClusterStatus","Values": ["Running"] 按照【集群状态】进行过滤。 类型：String 必选：否 · "Name":"vpc-id","Values": ["vpc-2wds9k9p"] 按照【VPC】进行过滤。 类型：String 必选：否 · "Name":"tag-key","Values": ["testKey"] 按照【标签键】进行过滤。 类型：String 必选：否 · "Name":"tag-value","Values": ["testValue"] 按照【标签值】进行过滤。 类型：String 必选：否 · "Name":"Tags","Values": ["product:tke"] 按照【标签键值对】进行过滤。 类型：String 必选：否
   */
  Filters?: Array<Filter>
  /**
   * 集群类型，例如：MANAGED_CLUSTER
   */
  ClusterType?: string
}

/**
 * UpgradeClusterInstances请求参数结构体
 */
export interface UpgradeClusterInstancesRequest {
  /**
   * 集群ID
   */
  ClusterId: string
  /**
   * create 表示开始一次升级任务
pause 表示停止任务
resume表示继续任务
abort表示终止任务
   */
  Operation: string
  /**
   * 升级类型，只有Operation是create需要设置
reset 大版本重装升级
hot 小版本热升级
major 大版本原地升级
   */
  UpgradeType?: string
  /**
   * 需要升级的节点列表
   */
  InstanceIds?: Array<string>
  /**
   * 当节点重新加入集群时候所使用的参数，参考添加已有节点接口
   */
  ResetParam?: UpgradeNodeResetParam
  /**
   * 是否忽略节点升级前检查
   */
  SkipPreCheck?: boolean
  /**
   * 最大可容忍的不可用Pod比例
   */
  MaxNotReadyPercent?: number
  /**
   * 是否升级节点运行时，默认false不升级
   */
  UpgradeRunTime?: boolean
}

/**
 * 创建集群时，选择安装的扩展组件的信息
 */
export interface ExtensionAddon {
  /**
   * 扩展组件名称
   */
  AddonName: string
  /**
   * 扩展组件信息(扩展组件资源对象的json字符串描述)
   */
  AddonParam: string
}

/**
 * DescribeAddonValues请求参数结构体
 */
export interface DescribeAddonValuesRequest {
  /**
   * 集群ID
   */
  ClusterId: string
  /**
   * addon名称
   */
  AddonName: string
}

/**
 * DescribeResourceUsage请求参数结构体
 */
export interface DescribeResourceUsageRequest {
  /**
   * 集群ID
   */
  ClusterId: string
}

/**
 * prometheus聚合规则实例详情，包含所属集群ID
 */
export interface PrometheusRecordRuleYamlItem {
  /**
   * 实例名称
   */
  Name?: string
  /**
   * 最近更新时间
   */
  UpdateTime?: string
  /**
   * Yaml内容
   */
  TemplateId?: string
  /**
   * 如果该聚合规则来至模板，则TemplateId为模板id
注意：此字段可能返回 null，表示取不到有效值。
   */
  Content?: string
  /**
   * 该聚合规则如果来源于用户集群crd资源定义，则ClusterId为所属集群ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  ClusterId?: string
}

/**
 * k8s中标签，一般以数组的方式存在
 */
export interface Label {
  /**
   * map表中的Name
   */
  Name: string
  /**
   * map表中的Value
   */
  Value: string
}

/**
 * 某机型可支持的最大 VPC-CNI 模式的 Pod 数量
 */
export interface PodLimitsByType {
  /**
   * TKE共享网卡非固定IP模式可支持的Pod数量
注意：此字段可能返回 null，表示取不到有效值。
   */
  TKERouteENINonStaticIP?: number
  /**
   * TKE共享网卡固定IP模式可支持的Pod数量
注意：此字段可能返回 null，表示取不到有效值。
   */
  TKERouteENIStaticIP?: number
  /**
   * TKE独立网卡模式可支持的Pod数量
注意：此字段可能返回 null，表示取不到有效值。
   */
  TKEDirectENI?: number
  /**
   * TKE中继网卡模式可支持的Pod数量
注意：此字段可能返回 null，表示取不到有效值。
   */
  TKESubENI?: number
}

/**
 * DeletePrometheusTemplateSync请求参数结构体
 */
export interface DeletePrometheusTemplateSyncRequest {
  /**
   * 模板id
   */
  TemplateId: string
  /**
   * 取消同步的对象列表
   */
  Targets: Array<PrometheusTemplateSyncTarget>
}

/**
 * DisableVpcCniNetworkType请求参数结构体
 */
export interface DisableVpcCniNetworkTypeRequest {
  /**
   * 集群ID
   */
  ClusterId: string
}

/**
 * DescribeClusterReleaseDetails返回参数结构体
 */
export interface DescribeClusterReleaseDetailsResponse {
  /**
   * 应用详情
注意：此字段可能返回 null，表示取不到有效值。
   */
  Release?: ReleaseDetails
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 自动扩缩容的节点
 */
export interface AutoscalingAdded {
  /**
   * 正在加入中的节点数量
   */
  Joining?: number
  /**
   * 初始化中的节点数量
   */
  Initializing?: number
  /**
   * 正常的节点数量
   */
  Normal?: number
  /**
   * 节点总数
   */
  Total?: number
}

/**
 * SyncPrometheusTemp返回参数结构体
 */
export interface SyncPrometheusTempResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateEdgeLogConfig请求参数结构体
 */
export interface CreateEdgeLogConfigRequest {
  /**
   * 集群ID
   */
  ClusterId: string
  /**
   * 日志采集配置的json表达
   */
  LogConfig: string
  /**
   * CLS日志集ID
   */
  LogsetId?: string
}

/**
 * CreatePrometheusDashboard返回参数结构体
 */
export interface CreatePrometheusDashboardResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CancelClusterRelease请求参数结构体
 */
export interface CancelClusterReleaseRequest {
  /**
   * 应用ID
   */
  ID: string
  /**
   * 集群ID
   */
  ClusterId?: string
  /**
   * 集群类型
   */
  ClusterType?: string
}

/**
 * DescribeTKEEdgeClusterStatus返回参数结构体
 */
export interface DescribeTKEEdgeClusterStatusResponse {
  /**
   * 集群当前状态
   */
  Phase?: string
  /**
   * 集群过程数组
   */
  Conditions?: Array<ClusterCondition>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyClusterAsGroupOptionAttribute请求参数结构体
 */
export interface ModifyClusterAsGroupOptionAttributeRequest {
  /**
   * 集群ID
   */
  ClusterId: string
  /**
   * 集群弹性伸缩属性
   */
  ClusterAsGroupOption: ClusterAsGroupOption
}

/**
 * DescribeClusterStatus请求参数结构体
 */
export interface DescribeClusterStatusRequest {
  /**
   * 集群ID列表，不传默认拉取所有集群
   */
  ClusterIds?: Array<string>
}

/**
 * CreateBackupStorageLocation请求参数结构体
 */
export interface CreateBackupStorageLocationRequest {
  /**
   * 存储仓库所属地域，比如COS广州(ap-guangzhou)
   */
  StorageRegion: string
  /**
   * 对象存储桶名称，如果是COS必须是tke-backup前缀开头
   */
  Bucket: string
  /**
   * 备份仓库名称
   */
  Name: string
  /**
   * 存储服务提供方，默认腾讯云
   */
  Provider?: string
  /**
   * 对象存储桶路径
   */
  Path?: string
}

/**
 * prometheus配置
 */
export interface PrometheusConfigItem {
  /**
   * 名称
   */
  Name: string
  /**
   * 配置内容
   */
  Config: string
  /**
   * 用于出参，如果该配置来至模板，则为模板id
注意：此字段可能返回 null，表示取不到有效值。
   */
  TemplateId?: string
}

/**
 * DeleteClusterNodePool请求参数结构体
 */
export interface DeleteClusterNodePoolRequest {
  /**
   * 节点池对应的 ClusterId
   */
  ClusterId: string
  /**
   * 需要删除的节点池 Id 列表
   */
  NodePoolIds: Array<string>
  /**
   * 删除节点池时是否保留节点池内节点(节点仍然会被移出集群，但对应的实例不会被销毁)
   */
  KeepInstance: boolean
}

/**
 * DescribeEKSClusterCredential返回参数结构体
 */
export interface DescribeEKSClusterCredentialResponse {
  /**
   * 集群的接入地址信息
   */
  Addresses?: Array<IPAddress>
  /**
   * 集群的认证信息（token只有请求是主账号才返回，子账户请使用返回的kubeconfig）
   */
  Credential?: ClusterCredential
  /**
   * 集群的公网访问信息
   */
  PublicLB?: ClusterPublicLB
  /**
   * 集群的内网访问信息
   */
  InternalLB?: ClusterInternalLB
  /**
   * 标记是否新的内外网功能
   */
  ProxyLB?: boolean
  /**
   * 连接用户集群k8s 的Config
   */
  Kubeconfig?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CheckInstancesUpgradeAble请求参数结构体
 */
export interface CheckInstancesUpgradeAbleRequest {
  /**
   * 集群ID
   */
  ClusterId: string
  /**
   * 节点列表，空为全部节点
   */
  InstanceIds?: Array<string>
  /**
   * 升级类型，枚举值：reset(重装升级，支持大版本和小版本)，hot(原地滚动小版本升级)，major(原地滚动大版本升级)
   */
  UpgradeType?: string
  /**
   * 分页Offset
   */
  Offset?: number
  /**
   * 分页Limit
   */
  Limit?: number
  /**
   * 过滤
   */
  Filter?: Array<Filter>
}

/**
 * ModifyPrometheusTemplate请求参数结构体
 */
export interface ModifyPrometheusTemplateRequest {
  /**
   * 模板ID
   */
  TemplateId: string
  /**
   * 修改内容
   */
  Template: PrometheusTemplateModify
}

/**
 * DescribeEncryptionStatus请求参数结构体
 */
export interface DescribeEncryptionStatusRequest {
  /**
   * 集群id
   */
  ClusterId: string
}

/**
 * DeleteClusterVirtualNodePool请求参数结构体
 */
export interface DeleteClusterVirtualNodePoolRequest {
  /**
   * 集群ID
   */
  ClusterId: string
  /**
   * 超级节点池ID列表
   */
  NodePoolIds: Array<string>
  /**
   * 是否强制删除，在超级节点上有pod的情况下，如果选择非强制删除，则删除会失败
   */
  Force?: boolean
}

/**
 * DescribeImageCaches请求参数结构体
 */
export interface DescribeImageCachesRequest {
  /**
   * 镜像缓存Id数组
   */
  ImageCacheIds?: Array<string>
  /**
   * 镜像缓存名称数组
   */
  ImageCacheNames?: Array<string>
  /**
   * 限定此次返回资源的数量。如果不设定，默认返回20，最大不能超过50
   */
  Limit?: number
  /**
   * 偏移量,默认0
   */
  Offset?: number
  /**
   * 过滤条件，可选条件：
(1)实例名称
KeyName: image-cache-name
类型：String
   */
  Filters?: Array<Filter>
}

/**
 * DeleteAddon请求参数结构体
 */
export interface DeleteAddonRequest {
  /**
   * 集群ID
   */
  ClusterId: string
  /**
   * addon名称
   */
  AddonName: string
}

/**
 * DescribeEdgeAvailableExtraArgs请求参数结构体
 */
export interface DescribeEdgeAvailableExtraArgsRequest {
  /**
   * 集群版本
   */
  ClusterVersion?: string
}

/**
 * 已经存在的实例信息
 */
export interface ExistedInstance {
  /**
   * 实例是否支持加入集群(TRUE 可以加入 FALSE 不能加入)。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Usable?: boolean
  /**
   * 实例不支持加入的原因。
注意：此字段可能返回 null，表示取不到有效值。
   */
  UnusableReason?: string
  /**
   * 实例已经所在的集群ID。
注意：此字段可能返回 null，表示取不到有效值。
   */
  AlreadyInCluster?: string
  /**
   * 实例ID形如：ins-e55paxnt。
   */
  InstanceId?: string
  /**
   * 实例名称。
注意：此字段可能返回 null，表示取不到有效值。
   */
  InstanceName?: string
  /**
   * 实例主网卡的内网IP列表。
注意：此字段可能返回 null，表示取不到有效值。
   */
  PrivateIpAddresses?: Array<string>
  /**
   * 实例主网卡的公网IP列表。
注意：此字段可能返回 null，表示取不到有效值。
注意：此字段可能返回 null，表示取不到有效值。
   */
  PublicIpAddresses?: Array<string>
  /**
   * 创建时间。按照ISO8601标准表示，并且使用UTC时间。格式为：YYYY-MM-DDThh:mm:ssZ。
注意：此字段可能返回 null，表示取不到有效值。
   */
  CreatedTime?: string
  /**
   * 实例的CPU核数，单位：核。
注意：此字段可能返回 null，表示取不到有效值。
   */
  CPU?: number
  /**
   * 实例内存容量，单位：GB。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Memory?: number
  /**
   * 操作系统名称。
注意：此字段可能返回 null，表示取不到有效值。
   */
  OsName?: string
  /**
   * 实例机型。
注意：此字段可能返回 null，表示取不到有效值。
   */
  InstanceType?: string
  /**
   * 伸缩组ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  AutoscalingGroupId?: string
  /**
   * 实例计费模式。取值范围： PREPAID：表示预付费，即包年包月 POSTPAID_BY_HOUR：表示后付费，即按量计费 CDHPAID：CDH付费，即只对CDH计费，不对CDH上的实例计费。
注意：此字段可能返回 null，表示取不到有效值。
   */
  InstanceChargeType?: string
  /**
   * 实例的IPv6地址。
注意：此字段可能返回 null，表示取不到有效值。
注意：此字段可能返回 null，表示取不到有效值。
   */
  IPv6Addresses?: Array<string>
}

/**
 * CreateReservedInstances返回参数结构体
 */
export interface CreateReservedInstancesResponse {
  /**
   * 预留券实例 ID。
   */
  ReservedInstanceIds?: Array<string>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * AddNodeToNodePool返回参数结构体
 */
export interface AddNodeToNodePoolResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribePostNodeResources请求参数结构体
 */
export interface DescribePostNodeResourcesRequest {
  /**
   * 集群 ID
   */
  ClusterId: string
  /**
   *  节点名称
   */
  NodeName?: string
}

/**
 * 托管prometheusV2实例概览
 */
export interface PrometheusInstancesOverview {
  /**
   * 实例ID
   */
  InstanceId?: string
  /**
   * 实例名
   */
  InstanceName?: string
  /**
   * VPC ID
   */
  VpcId?: string
  /**
   * 子网ID
   */
  SubnetId?: string
  /**
   * 运行状态（1:正在创建；2:运行中；3:异常；4:重启中；5:销毁中； 6:已停机； 7: 已删除）
   */
  InstanceStatus?: number
  /**
   * 计费状态（1:正常；2:过期; 3:销毁; 4:分配中; 5:分配失败）
注意：此字段可能返回 null，表示取不到有效值。
   */
  ChargeStatus?: number
  /**
   * 是否开启 Grafana（0:不开启，1:开启）
   */
  EnableGrafana?: number
  /**
   * Grafana 面板 URL
注意：此字段可能返回 null，表示取不到有效值。
   */
  GrafanaURL?: string
  /**
   * 实例付费类型（1:试用版；2:预付费）
   */
  InstanceChargeType?: number
  /**
   * 规格名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  SpecName?: string
  /**
   * 存储周期
注意：此字段可能返回 null，表示取不到有效值。
   */
  DataRetentionTime?: number
  /**
   * 购买的实例过期时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  ExpireTime?: string
  /**
   * 自动续费标记(0:不自动续费；1:开启自动续费；2:禁止自动续费；-1:无效)
注意：此字段可能返回 null，表示取不到有效值。
   */
  AutoRenewFlag?: number
  /**
   * 绑定集群总数
   */
  BoundTotal?: number
  /**
   * 绑定集群正常状态总数
   */
  BoundNormal?: number
}

/**
 * DescribePrometheusInstanceInitStatus返回参数结构体
 */
export interface DescribePrometheusInstanceInitStatusResponse {
  /**
   * 实例初始化状态，取值：
uninitialized 未初始化 
initializing 初始化中
running 初始化完成，运行中
注意：此字段可能返回 null，表示取不到有效值。
   */
  Status?: string
  /**
   * 初始化任务步骤
注意：此字段可能返回 null，表示取不到有效值。
   */
  Steps?: Array<TaskStepInfo>
  /**
   * 实例eks集群ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  EksClusterId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DisableEventPersistence返回参数结构体
 */
export interface DisableEventPersistenceResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * UpdateEKSContainerInstance请求参数结构体
 */
export interface UpdateEKSContainerInstanceRequest {
  /**
   * 容器实例 ID
   */
  EksCiId: string
  /**
   * 实例重启策略： Always(总是重启)、Never(从不重启)、OnFailure(失败时重启)
   */
  RestartPolicy?: string
  /**
   * 数据卷，包含NfsVolume数组和CbsVolume数组
   */
  EksCiVolume?: EksCiVolume
  /**
   * 容器组
   */
  Containers?: Array<Container>
  /**
   * Init 容器组
   */
  InitContainers?: Array<Container>
  /**
   * 容器实例名称
   */
  Name?: string
  /**
   * 镜像仓库凭证数组
   */
  ImageRegistryCredentials?: Array<ImageRegistryCredential>
}

/**
 * cuDNN的版本信息
 */
export interface CUDNN {
  /**
   * cuDNN的版本
注意：此字段可能返回 null，表示取不到有效值。
   */
  Version: string
  /**
   * cuDNN的名字
注意：此字段可能返回 null，表示取不到有效值。
   */
  Name: string
  /**
   * cuDNN的Doc名字
注意：此字段可能返回 null，表示取不到有效值。
   */
  DocName?: string
  /**
   * cuDNN的Dev名字
注意：此字段可能返回 null，表示取不到有效值。
   */
  DevName?: string
}

/**
 * DescribeReservedInstances返回参数结构体
 */
export interface DescribeReservedInstancesResponse {
  /**
   * 总数。
   */
  TotalCount?: number
  /**
   * 预留实例列表。
   */
  ReservedInstanceSet?: Array<ReservedInstance>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 集群巡检诊断的默认目录类型
 */
export interface KubeJarvisStateCatalogue {
  /**
   * 目录级别，支持参数：
first：一级目录
second：二级目录
注意：此字段可能返回 null，表示取不到有效值。
   */
  CatalogueLevel?: string
  /**
   * 目录名
注意：此字段可能返回 null，表示取不到有效值。
   */
  CatalogueName?: string
}

/**
 * ModifyClusterTags返回参数结构体
 */
export interface ModifyClusterTagsResponse {
  /**
   * 集群标签
注意：此字段可能返回 null，表示取不到有效值。
   */
  Tags?: Array<Tag>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 服务事件
 */
export interface Event {
  /**
   * pod名称
   */
  PodName?: string
  /**
   * 事件原因内容
   */
  Reason?: string
  /**
   * 事件类型
   */
  Type?: string
  /**
   * 事件出现次数
   */
  Count?: number
  /**
   * 事件第一次出现时间
   */
  FirstTimestamp?: string
  /**
   * 事件最后一次出现时间
   */
  LastTimestamp?: string
  /**
   * 事件内容
   */
  Message?: string
}

/**
 * 探针在容器内执行检测命令参数类型
 */
export interface Exec {
  /**
   * 容器内检测的命令
注意：此字段可能返回 null，表示取不到有效值。
   */
  Commands?: Array<string>
}

/**
 * DescribeEdgeAvailableExtraArgs返回参数结构体
 */
export interface DescribeEdgeAvailableExtraArgsResponse {
  /**
   * 集群版本
注意：此字段可能返回 null，表示取不到有效值。
   */
  ClusterVersion?: string
  /**
   * 可用的自定义参数
注意：此字段可能返回 null，表示取不到有效值。
   */
  AvailableExtraArgs?: EdgeAvailableExtraArgs
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreatePrometheusRecordRuleYaml请求参数结构体
 */
export interface CreatePrometheusRecordRuleYamlRequest {
  /**
   * 实例id
   */
  InstanceId: string
  /**
   * yaml的内容
   */
  Content: string
}

/**
 * DescribeEnableVpcCniProgress请求参数结构体
 */
export interface DescribeEnableVpcCniProgressRequest {
  /**
   * 开启vpc-cni的集群ID
   */
  ClusterId: string
}

/**
 * 集群的实例信息
 */
export interface Instance {
  /**
   * 实例ID
   */
  InstanceId?: string
  /**
   * 节点角色, MASTER, WORKER, ETCD, MASTER_ETCD,ALL, 默认为WORKER
   */
  InstanceRole?: string
  /**
   * 实例异常(或者处于初始化中)的原因
   */
  FailedReason?: string
  /**
   * 实例的状态（running 运行中，initializing 初始化中，failed 异常）
   */
  InstanceState?: string
  /**
   * 实例是否封锁状态
注意：此字段可能返回 null，表示取不到有效值。
   */
  DrainStatus?: string
  /**
   * 节点配置
注意：此字段可能返回 null，表示取不到有效值。
   */
  InstanceAdvancedSettings?: InstanceAdvancedSettings
  /**
   * 添加时间
   */
  CreatedTime?: string
  /**
   * 节点内网IP
注意：此字段可能返回 null，表示取不到有效值。
   */
  LanIP?: string
  /**
   * 资源池ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  NodePoolId?: string
  /**
   * 自动伸缩组ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  AutoscalingGroupId?: string
}

/**
 * ModifyClusterAttribute返回参数结构体
 */
export interface ModifyClusterAttributeResponse {
  /**
   * 集群所属项目
注意：此字段可能返回 null，表示取不到有效值。
   */
  ProjectId?: number
  /**
   * 集群名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  ClusterName?: string
  /**
   * 集群描述
注意：此字段可能返回 null，表示取不到有效值。
   */
  ClusterDesc?: string
  /**
   * 集群等级
注意：此字段可能返回 null，表示取不到有效值。
   */
  ClusterLevel?: string
  /**
   * 自动变配集群等级
注意：此字段可能返回 null，表示取不到有效值。
   */
  AutoUpgradeClusterLevel?: AutoUpgradeClusterLevel
  /**
   * 是否开启QGPU共享
注意：此字段可能返回 null，表示取不到有效值。
   */
  QGPUShareEnable?: boolean
  /**
   * 集群属性
注意：此字段可能返回 null，表示取不到有效值。
   */
  ClusterProperty?: ClusterProperty
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 集群巡检检查结果
 */
export interface KubeJarvisStateInspectionResult {
  /**
   * 集群ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  ClusterId?: string
  /**
   * 诊断开始时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  StartTime?: string
  /**
   * 诊断结束时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  EndTime?: string
  /**
   * 诊断结果统计
注意：此字段可能返回 null，表示取不到有效值。
   */
  Statistics?: Array<KubeJarvisStateStatistic>
  /**
   * 诊断结果详情
注意：此字段可能返回 null，表示取不到有效值。
   */
  Diagnostics?: Array<KubeJarvisStateDiagnostic>
  /**
   * 查询巡检报告相关报错
注意：此字段可能返回 null，表示取不到有效值。
   */
  Error?: string
}

/**
 * CreateEksLogConfig请求参数结构体
 */
export interface CreateEksLogConfigRequest {
  /**
   * 集群ID
   */
  ClusterId: string
  /**
   * 日志采集配置的json表达
   */
  LogConfig: string
  /**
   * 日志集ID
   */
  LogsetId?: string
}

/**
 * CreateCluster返回参数结构体
 */
export interface CreateClusterResponse {
  /**
   * 集群ID
   */
  ClusterId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 关联集群时在集群内部署组件的pod额外配置
 */
export interface PrometheusClusterAgentPodConfig {
  /**
   * 是否使用HostNetWork
   */
  HostNet?: boolean
  /**
   * 指定pod运行节点
   */
  NodeSelector?: Array<Label>
  /**
   * 容忍污点
   */
  Tolerations?: Array<Toleration>
}

/**
 * 描述了 “云安全” 服务相关的信息
 */
export interface RunSecurityServiceEnabled {
  /**
   * 是否开启[云安全](/document/product/296)服务。取值范围：<br><li>true：表示开启云安全服务<br><li>false：表示不开启云安全服务<br><br>默认取值：true。
   */
  Enabled?: boolean
}

/**
 * 镜像缓存的信息
 */
export interface ImageCache {
  /**
   * 镜像缓存Id
   */
  ImageCacheId?: string
  /**
   * 镜像缓存名称
   */
  ImageCacheName?: string
  /**
   * 镜像缓存大小。单位：GiB
   */
  ImageCacheSize?: number
  /**
   * 镜像缓存包含的镜像列表
   */
  Images?: Array<string>
  /**
   * 创建时间
   */
  CreationTime?: string
  /**
   * 到期时间
   */
  ExpireDateTime?: string
  /**
   * 镜像缓存事件信息
   */
  Events?: Array<ImageCacheEvent>
  /**
   * 最新一次匹配到镜像缓存的时间
   */
  LastMatchedTime?: string
  /**
   * 镜像缓存对应的快照Id
   */
  SnapshotId?: string
  /**
   * 镜像缓存状态，可能取值：
Pending：创建中
Ready：创建完成
Failed：创建失败
Updating：更新中
UpdateFailed：更新失败
只有状态为Ready时，才能正常使用镜像缓存
   */
  Status?: string
}

/**
 * DeletePrometheusAlertRule返回参数结构体
 */
export interface DeletePrometheusAlertRuleResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeClusterPendingReleases请求参数结构体
 */
export interface DescribeClusterPendingReleasesRequest {
  /**
   * 集群ID
   */
  ClusterId: string
  /**
   * 返回数量限制，默认20，最大100
   */
  Limit?: number
  /**
   * 偏移量，默认0
   */
  Offset?: number
  /**
   * 集群类型
   */
  ClusterType?: string
}

/**
 * DeletePrometheusConfig返回参数结构体
 */
export interface DeletePrometheusConfigResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeEksContainerInstanceLog请求参数结构体
 */
export interface DescribeEksContainerInstanceLogRequest {
  /**
   * Eks Container Instance Id，即容器实例Id
   */
  EksCiId: string
  /**
   * 容器名称，单容器的实例可选填。如果为多容器实例，请指定容器名称。
   */
  ContainerName?: string
  /**
   * 返回最新日志行数，默认500，最大2000。日志内容最大返回 1M 数据。
   */
  Tail?: number
  /**
   * UTC时间，RFC3339标准
   */
  StartTime?: string
  /**
   * 是否是查上一个容器（如果容器退出重启了）
   */
  Previous?: boolean
  /**
   * 查询最近多少秒内的日志
   */
  SinceSeconds?: number
  /**
   * 日志总大小限制
   */
  LimitBytes?: number
}

/**
 * CreatePrometheusRecordRuleYaml返回参数结构体
 */
export interface CreatePrometheusRecordRuleYamlResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeClusterInstances请求参数结构体
 */
export interface DescribeClusterInstancesRequest {
  /**
   * 集群ID
   */
  ClusterId: string
  /**
   * 偏移量，默认为0。关于Offset的更进一步介绍请参考 API [简介](https://cloud.tencent.com/document/api/213/15688)中的相关小节。
   */
  Offset?: number
  /**
   * 返回数量，默认为20，最大值为100。关于Limit的更进一步介绍请参考 API [简介](https://cloud.tencent.com/document/api/213/15688)中的相关小节。
   */
  Limit?: number
  /**
   * 需要获取的节点实例Id列表。如果为空，表示拉取集群下所有节点实例。
   */
  InstanceIds?: Array<string>
  /**
   * 节点角色, MASTER, WORKER, ETCD, MASTER_ETCD,ALL, 默认为WORKER。默认为WORKER类型。
   */
  InstanceRole?: string
  /**
   * 过滤条件列表；Name的可选值为nodepool-id、nodepool-instance-type；Name为nodepool-id表示根据节点池id过滤机器，Value的值为具体的节点池id，Name为nodepool-instance-type表示节点加入节点池的方式，Value的值为MANUALLY_ADDED（手动加入节点池）、AUTOSCALING_ADDED（伸缩组扩容方式加入节点池）、ALL（手动加入节点池 和 伸缩组扩容方式加入节点池）
   */
  Filters?: Array<Filter>
}

/**
 * 机型信息和其可支持的最大VPC-CNI模式Pod数量信息
 */
export interface PodLimitsInstance {
  /**
   * 机型所在可用区
注意：此字段可能返回 null，表示取不到有效值。
   */
  Zone?: string
  /**
   * 机型所属机型族
注意：此字段可能返回 null，表示取不到有效值。
   */
  InstanceFamily?: string
  /**
   * 实例机型名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  InstanceType?: string
  /**
   * 机型可支持的最大VPC-CNI模式Pod数量信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  PodLimits?: PodLimitsByType
}

/**
 * ModifyPrometheusTemp请求参数结构体
 */
export interface ModifyPrometheusTempRequest {
  /**
   * 模板ID
   */
  TemplateId: string
  /**
   * 修改内容
   */
  Template: PrometheusTempModify
}

/**
 * 集群中控制器的状态描述
 */
export interface ControllerStatus {
  /**
   * 控制器的名字
   */
  Name: string
  /**
   * 控制器是否开启
   */
  Enabled: boolean
}

/**
 * DeletePrometheusTempSync返回参数结构体
 */
export interface DeletePrometheusTempSyncResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribePrometheusRecordRules请求参数结构体
 */
export interface DescribePrometheusRecordRulesRequest {
  /**
   * 实例id
   */
  InstanceId: string
  /**
   * 分页
   */
  Offset?: number
  /**
   * 分页
   */
  Limit?: number
  /**
   * 过滤
   */
  Filters?: Array<Filter>
}

/**
 * 虚拟节点池
 */
export interface VirtualNodePool {
  /**
   * 节点池ID
   */
  NodePoolId?: string
  /**
   * 子网列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  SubnetIds?: Array<string>
  /**
   * 节点池名称
   */
  Name?: string
  /**
   * 节点池生命周期
   */
  LifeState?: string
  /**
   * 虚拟节点label
注意：此字段可能返回 null，表示取不到有效值。
   */
  Labels?: Array<Label>
  /**
   * 虚拟节点taint
注意：此字段可能返回 null，表示取不到有效值。
   */
  Taints?: Array<Taint>
}

/**
 * DescribeTKEEdgeClusterStatus请求参数结构体
 */
export interface DescribeTKEEdgeClusterStatusRequest {
  /**
   * 边缘计算容器集群Id
   */
  ClusterId: string
}

/**
 * AcquireClusterAdminRole返回参数结构体
 */
export interface AcquireClusterAdminRoleResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeEdgeClusterInstances返回参数结构体
 */
export interface DescribeEdgeClusterInstancesResponse {
  /**
   * 该集群总数
   */
  TotalCount?: number
  /**
   * 节点信息集合
   */
  InstanceInfoSet?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * UpdateEdgeClusterVersion请求参数结构体
 */
export interface UpdateEdgeClusterVersionRequest {
  /**
   * 集群 Id
   */
  ClusterId: string
  /**
   * 需要升级到的版本
   */
  EdgeVersion: string
  /**
   * 自定义边缘组件镜像仓库前缀
   */
  RegistryPrefix?: string
  /**
   * 是否跳过预检查阶段
   */
  SkipPreCheck?: boolean
}

/**
 * GetTkeAppChartList返回参数结构体
 */
export interface GetTkeAppChartListResponse {
  /**
   * 所支持的chart列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  AppCharts?: Array<AppChart>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribePrometheusTemplateSync请求参数结构体
 */
export interface DescribePrometheusTemplateSyncRequest {
  /**
   * 模板ID
   */
  TemplateId: string
}

/**
 * DescribeExternalNodeSupportConfig请求参数结构体
 */
export interface DescribeExternalNodeSupportConfigRequest {
  /**
   * 集群Id
   */
  ClusterId: string
}

/**
 * 可升级节点信息
 */
export interface UpgradeAbleInstancesItem {
  /**
   * 节点Id
   */
  InstanceId?: string
  /**
   * 节点的当前版本
   */
  Version?: string
  /**
   * 当前版本的最新小版本
注意：此字段可能返回 null，表示取不到有效值。
   */
  LatestVersion?: string
  /**
   * RuntimeVersion
   */
  RuntimeVersion?: string
  /**
   * RuntimeLatestVersion
   */
  RuntimeLatestVersion?: string
}

/**
 * ModifyClusterImage请求参数结构体
 */
export interface ModifyClusterImageRequest {
  /**
   * 集群ID
   */
  ClusterId: string
  /**
   * 指定有效的镜像ID，格式形如img-e55paxnt。可通过登录控制台查询，也可调用接口 [DescribeImages](https://cloud.tencent.com/document/api/213/15715)，取返回信息中的ImageId字段。
   */
  ImageId: string
}

/**
 * UpgradeClusterInstances返回参数结构体
 */
export interface UpgradeClusterInstancesResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 自定义驱动信息
 */
export interface CustomDriver {
  /**
   * 自定义GPU驱动地址链接
注意：此字段可能返回 null，表示取不到有效值。
   */
  Address?: string
}

/**
 * DescribeClusterAsGroupOption请求参数结构体
 */
export interface DescribeClusterAsGroupOptionRequest {
  /**
   * 集群ID
   */
  ClusterId: string
}

/**
 * DescribePrometheusAgentInstances返回参数结构体
 */
export interface DescribePrometheusAgentInstancesResponse {
  /**
   * 关联该集群的实例列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  Instances?: Array<string>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * AddExistedInstances请求参数结构体
 */
export interface AddExistedInstancesRequest {
  /**
   * 集群ID
   */
  ClusterId: string
  /**
   * 实例列表，不支持竞价实例
   */
  InstanceIds: Array<string>
  /**
   * 实例额外需要设置参数信息(默认值)
   */
  InstanceAdvancedSettings?: InstanceAdvancedSettings
  /**
   * 增强服务。通过该参数可以指定是否开启云安全、云监控等服务。若不指定该参数，则默认开启云监控、云安全服务。
   */
  EnhancedService?: EnhancedService
  /**
   * 节点登录信息（目前仅支持使用Password或者单个KeyIds）
   */
  LoginSettings?: LoginSettings
  /**
   * 重装系统时，可以指定修改实例的HostName(集群为HostName模式时，此参数必传，规则名称除不支持大写字符外与[CVM创建实例](https://cloud.tencent.com/document/product/213/15730)接口HostName一致)
   */
  HostName?: string
  /**
   * 实例所属安全组。该参数可以通过调用 DescribeSecurityGroups 的返回值中的sgId字段来获取。若不指定该参数，则绑定默认安全组。（目前仅支持设置单个sgId）
   */
  SecurityGroupIds?: Array<string>
  /**
   * 节点池选项
   */
  NodePool?: NodePoolOption
  /**
   * 校验规则相关选项，可配置跳过某些校验规则。目前支持GlobalRouteCIDRCheck（跳过GlobalRouter的相关校验），VpcCniCIDRCheck（跳过VpcCni相关校验）
   */
  SkipValidateOptions?: Array<string>
  /**
   * 参数InstanceAdvancedSettingsOverride数组用于定制化地配置各台instance，与InstanceIds顺序对应。当传入InstanceAdvancedSettingsOverrides数组时，将覆盖默认参数InstanceAdvancedSettings；当没有传入参数InstanceAdvancedSettingsOverrides时，InstanceAdvancedSettings参数对每台instance生效。参数InstanceAdvancedSettingsOverride数组的长度应与InstanceIds数组一致；当长度大于InstanceIds数组长度时将报错；当长度小于InstanceIds数组时，没有对应配置的instance将使用默认配置。
   */
  InstanceAdvancedSettingsOverrides?: Array<InstanceAdvancedSettings>
  /**
   * 节点镜像
   */
  ImageId?: string
}

/**
 * 集群弹性伸缩配置
 */
export interface ClusterAsGroupOption {
  /**
   * 是否开启缩容
注意：此字段可能返回 null，表示取不到有效值。
   */
  IsScaleDownEnabled?: boolean
  /**
   * 多伸缩组情况下扩容选择算法(random 随机选择，most-pods 最多类型的Pod least-waste 最少的资源浪费，默认为random)
注意：此字段可能返回 null，表示取不到有效值。
   */
  Expander?: string
  /**
   * 最大并发缩容数
注意：此字段可能返回 null，表示取不到有效值。
   */
  MaxEmptyBulkDelete?: number
  /**
   * 集群扩容后多少分钟开始判断缩容（默认为10分钟）
注意：此字段可能返回 null，表示取不到有效值。
   */
  ScaleDownDelay?: number
  /**
   * 节点连续空闲多少分钟后被缩容（默认为 10分钟）
注意：此字段可能返回 null，表示取不到有效值。
   */
  ScaleDownUnneededTime?: number
  /**
   * 节点资源使用量低于多少(百分比)时认为空闲(默认: 50(百分比))
注意：此字段可能返回 null，表示取不到有效值。
   */
  ScaleDownUtilizationThreshold?: number
  /**
   * 含有本地存储Pod的节点是否不缩容(默认： true)
注意：此字段可能返回 null，表示取不到有效值。
   */
  SkipNodesWithLocalStorage?: boolean
  /**
   * 含有kube-system namespace下非DaemonSet管理的Pod的节点是否不缩容 (默认： true)
注意：此字段可能返回 null，表示取不到有效值。
   */
  SkipNodesWithSystemPods?: boolean
  /**
   * 计算资源使用量时是否默认忽略DaemonSet的实例(默认值: False，不忽略)
注意：此字段可能返回 null，表示取不到有效值。
   */
  IgnoreDaemonSetsUtilization?: boolean
  /**
   * CA做健康性判断的个数，默认3，即超过OkTotalUnreadyCount个数后，CA会进行健康性判断。
注意：此字段可能返回 null，表示取不到有效值。
   */
  OkTotalUnreadyCount?: number
  /**
   * 未就绪节点的最大百分比，此后CA会停止操作
注意：此字段可能返回 null，表示取不到有效值。
   */
  MaxTotalUnreadyPercentage?: number
  /**
   * 表示未准备就绪的节点在有资格进行缩减之前应该停留多长时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  ScaleDownUnreadyTime?: number
  /**
   * CA删除未在Kubernetes中注册的节点之前等待的时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  UnregisteredNodeRemovalTime?: number
}

/**
 * DeletePrometheusTemp返回参数结构体
 */
export interface DeletePrometheusTempResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeClusterNodePools请求参数结构体
 */
export interface DescribeClusterNodePoolsRequest {
  /**
   * ClusterId（集群id）
   */
  ClusterId: string
  /**
   * · "Name":"NodePoolsName","Values": ["test"]
    按照【节点池名】进行过滤。
    类型：String
    必选：否

·  "Name":"NodePoolsId","Values": ["np-d2mb2zb"]
    按照【节点池id】进行过滤。
    类型：String
    必选：否

·  "Name":"Tags","Values": ["product:tke"]
    按照【标签键值对】进行过滤。
    类型：String
    必选：否
   */
  Filters?: Array<Filter>
}

/**
 * DescribeClusterRouteTables请求参数结构体
 */
export type DescribeClusterRouteTablesRequest = null

/**
 * DeleteClusterRoute请求参数结构体
 */
export interface DeleteClusterRouteRequest {
  /**
   * 路由表名称。
   */
  RouteTableName: string
  /**
   * 下一跳地址。
   */
  GatewayIp: string
  /**
   * 目的端CIDR。
   */
  DestinationCidrBlock: string
}

/**
 * CreateCLSLogConfig返回参数结构体
 */
export interface CreateCLSLogConfigResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteClusterEndpoint请求参数结构体
 */
export interface DeleteClusterEndpointRequest {
  /**
   * 集群ID
   */
  ClusterId: string
  /**
   * 是否为外网访问（TRUE 外网访问 FALSE 内网访问，默认值： FALSE）
   */
  IsExtranet?: boolean
}

/**
 * DeleteClusterVirtualNode请求参数结构体
 */
export interface DeleteClusterVirtualNodeRequest {
  /**
   * 集群ID
   */
  ClusterId: string
  /**
   * 虚拟节点列表
   */
  NodeNames: Array<string>
  /**
   * 是否强制删除：如果虚拟节点上有运行中Pod，则非强制删除状态下不会进行删除
   */
  Force?: boolean
}

/**
 * DescribeClusterNodePoolDetail请求参数结构体
 */
export interface DescribeClusterNodePoolDetailRequest {
  /**
   * 集群id
   */
  ClusterId: string
  /**
   * 节点池id
   */
  NodePoolId: string
}

/**
 * DescribePrometheusTempSync请求参数结构体
 */
export interface DescribePrometheusTempSyncRequest {
  /**
   * 模板ID
   */
  TemplateId: string
}

/**
 * DescribePrometheusGlobalConfig返回参数结构体
 */
export interface DescribePrometheusGlobalConfigResponse {
  /**
   * 配置内容
   */
  Config?: string
  /**
   * ServiceMonitors列表以及对应targets信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  ServiceMonitors?: Array<PrometheusConfigItem>
  /**
   * PodMonitors列表以及对应targets信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  PodMonitors?: Array<PrometheusConfigItem>
  /**
   * RawJobs列表以及对应targets信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  RawJobs?: Array<PrometheusConfigItem>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 集群巡检结果历史列表
 */
export interface KubeJarvisStateInspectionResultsItem {
  /**
   * 巡检结果名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  Name?: string
  /**
   * 诊断结果统计
注意：此字段可能返回 null，表示取不到有效值。
   */
  Statistics?: Array<KubeJarvisStateStatistic>
}

/**
 * DescribeClusterReleaseHistory返回参数结构体
 */
export interface DescribeClusterReleaseHistoryResponse {
  /**
   * 已安装应用版本历史
注意：此字段可能返回 null，表示取不到有效值。
   */
  ReleaseHistorySet: Array<ReleaseHistory>
  /**
   * 总数量
注意：此字段可能返回 null，表示取不到有效值。
   */
  Total: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeImages请求参数结构体
 */
export type DescribeImagesRequest = null

/**
 * UninstallEdgeLogAgent返回参数结构体
 */
export interface UninstallEdgeLogAgentResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeSupportedRuntime请求参数结构体
 */
export interface DescribeSupportedRuntimeRequest {
  /**
   * K8S版本
   */
  K8sVersion: string
}

/**
 * AddVpcCniSubnets请求参数结构体
 */
export interface AddVpcCniSubnetsRequest {
  /**
   * 集群ID
   */
  ClusterId: string
  /**
   * 为集群容器网络增加的子网列表
   */
  SubnetIds: Array<string>
  /**
   * 集群所属的VPC的ID
   */
  VpcId: string
  /**
   * 是否同步添加 vpc 网段到 ip-masq-agent-config 的 NonMasqueradeCIDRs 字段，默认 false 会同步添加
   */
  SkipAddingNonMasqueradeCIDRs?: boolean
}

/**
 * DescribePrometheusAlertHistory返回参数结构体
 */
export interface DescribePrometheusAlertHistoryResponse {
  /**
   * 告警历史
   */
  Items?: Array<PrometheusAlertHistoryItem>
  /**
   * 总数
   */
  Total?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 已存在实例的重装参数
 */
export interface ExistedInstancesPara {
  /**
   * 集群ID
   */
  InstanceIds: Array<string>
  /**
   * 实例额外需要设置参数信息（目前后端暂不支持此字段，我们将在未来的版本中实现）
   */
  InstanceAdvancedSettings?: InstanceAdvancedSettings
  /**
   * 增强服务。通过该参数可以指定是否开启云安全、云监控等服务。若不指定该参数，则默认开启云监控、云安全服务。
   */
  EnhancedService?: EnhancedService
  /**
   * 节点登录信息（目前仅支持使用Password或者单个KeyIds）
   */
  LoginSettings?: LoginSettings
  /**
   * 实例所属安全组。该参数可以通过调用 DescribeSecurityGroups 的返回值中的sgId字段来获取。若不指定该参数，则绑定默认安全组。
   */
  SecurityGroupIds?: Array<string>
  /**
   * 重装系统时，可以指定修改实例的HostName(集群为HostName模式时，此参数必传，规则名称除不支持大写字符外与[CVM创建实例](https://cloud.tencent.com/document/product/213/15730)接口HostName一致)
   */
  HostName?: string
}

/**
 * DescribeClusterAsGroupOption返回参数结构体
 */
export interface DescribeClusterAsGroupOptionResponse {
  /**
   * 集群弹性伸缩属性
注意：此字段可能返回 null，表示取不到有效值。
   */
  ClusterAsGroupOption?: ClusterAsGroupOption
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateTKEEdgeCluster返回参数结构体
 */
export interface CreateTKEEdgeClusterResponse {
  /**
   * 边缘计算集群Id
   */
  ClusterId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeEdgeClusterExtraArgs返回参数结构体
 */
export interface DescribeEdgeClusterExtraArgsResponse {
  /**
   * 集群自定义参数
注意：此字段可能返回 null，表示取不到有效值。
   */
  ClusterExtraArgs?: EdgeClusterExtraArgs
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 资源删除选项
 */
export interface ResourceDeleteOption {
  /**
   * 资源类型，例如CBS、CLB、CVM
   */
  ResourceType: string
  /**
   * 集群删除时CBS资源的删除模式：terminate（销毁），retain （保留）。其他资源默认为销毁。
   */
  DeleteMode: string
  /**
   * 是否跳过开启删除保护的资源，默认false，设置为true时不清理开启了删除保护的资源，clb有终端节点的情况也属于开了删除保护。
   */
  SkipDeletionProtection?: boolean
}

/**
 * ListClusterInspectionResults返回参数结构体
 */
export interface ListClusterInspectionResultsResponse {
  /**
   * 集群诊断结果列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  InspectionResults?: Array<KubeJarvisStateInspectionResult>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * InstallEdgeLogAgent请求参数结构体
 */
export interface InstallEdgeLogAgentRequest {
  /**
   * 集群ID
   */
  ClusterId: string
}

/**
 * CheckEdgeClusterCIDR请求参数结构体
 */
export interface CheckEdgeClusterCIDRRequest {
  /**
   * 集群的vpc-id
   */
  VpcId: string
  /**
   * 集群的pod CIDR
   */
  PodCIDR: string
  /**
   * 集群的service CIDR
   */
  ServiceCIDR: string
}

/**
 * CreateImageCache请求参数结构体
 */
export interface CreateImageCacheRequest {
  /**
   * 用于制作镜像缓存的容器镜像列表
   */
  Images: Array<string>
  /**
   * 实例所属子网 ID
   */
  SubnetId: string
  /**
   * 实例所属 VPC ID
   */
  VpcId: string
  /**
   * 镜像缓存名称
   */
  ImageCacheName?: string
  /**
   * 安全组 ID
   */
  SecurityGroupIds?: Array<string>
  /**
   * 镜像仓库凭证数组
   */
  ImageRegistryCredentials?: Array<ImageRegistryCredential>
  /**
   * 用来绑定容器实例的已有EIP
   */
  ExistedEipId?: string
  /**
   * 是否为容器实例自动创建EIP，默认为false。若传true，则此参数和ExistedEipIds互斥
   */
  AutoCreateEip?: boolean
  /**
   * 自动创建EIP的可选参数。若传此参数，则会自动创建EIP。
另外此参数和ExistedEipIds互斥
   */
  AutoCreateEipAttribute?: EipAttribute
  /**
   * 镜像缓存的大小。默认为20 GiB。取值范围参考[云硬盘类型](https://cloud.tencent.com/document/product/362/2353)中的高性能云盘类型的大小限制。
   */
  ImageCacheSize?: number
  /**
   * 镜像缓存保留时间天数，过期将会自动清理，默认为0，永不过期。
   */
  RetentionDays?: number
  /**
   * 指定拉取镜像仓库的镜像时不校验证书。如["harbor.example.com"]。
   */
  RegistrySkipVerifyList?: Array<string>
  /**
   * 指定拉取镜像仓库的镜像时使用 HTTP 协议。如["harbor.example.com"]。
   */
  RegistryHttpEndPointList?: Array<string>
  /**
   * 自定义制作镜像缓存过程中容器实例的宿主机上的 DNS。如：
"nameserver 4.4.4.4\nnameserver 8.8.8.8"
   */
  ResolveConfig?: string
}

/**
 * UpdateClusterVersion请求参数结构体
 */
export interface UpdateClusterVersionRequest {
  /**
   * 集群 Id
   */
  ClusterId: string
  /**
   * 需要升级到的版本
   */
  DstVersion: string
  /**
   * 集群自定义参数
   */
  ExtraArgs?: ClusterExtraArgs
  /**
   * 可容忍的最大不可用pod数目
   */
  MaxNotReadyPercent?: number
  /**
   * 是否跳过预检查阶段
   */
  SkipPreCheck?: boolean
}

/**
 * ModifyOpenPolicyList请求参数结构体
 */
export interface ModifyOpenPolicyListRequest {
  /**
   * 集群ID
   */
  ClusterId: string
  /**
   * 修改的策略列表，目前仅支持修改EnforcementAction字段
   */
  OpenPolicyInfoList?: Array<OpenPolicySwitch>
  /**
   * 策略分类 基线：baseline 优选：priority 可选：optional
   */
  Category?: string
}

/**
 * 健康检查探测参数
 */
export interface Probe {
  /**
   * Number of seconds after the container has started before liveness probes are initiated.
注意：此字段可能返回 null，表示取不到有效值。
   */
  InitialDelaySeconds?: number
  /**
   * Number of seconds after which the probe times out.
Defaults to 1 second. Minimum value is 1.
注意：此字段可能返回 null，表示取不到有效值。
   */
  TimeoutSeconds?: number
  /**
   * How often (in seconds) to perform the probe. Default to 10 seconds. Minimum value is 1.
注意：此字段可能返回 null，表示取不到有效值。
   */
  PeriodSeconds?: number
  /**
   * Minimum consecutive successes for the probe to be considered successful after having failed.Defaults to 1. Must be 1 for liveness. Minimum value is 1.
注意：此字段可能返回 null，表示取不到有效值。
   */
  SuccessThreshold?: number
  /**
   * Minimum consecutive failures for the probe to be considered failed after having succeeded.Defaults to 3. Minimum value is 1.
注意：此字段可能返回 null，表示取不到有效值。
   */
  FailureThreshold?: number
}

/**
 * 节点统计列表
 */
export interface NodeCountSummary {
  /**
   * 手动管理的节点
注意：此字段可能返回 null，表示取不到有效值。
   */
  ManuallyAdded?: ManuallyAdded
  /**
   * 自动管理的节点
注意：此字段可能返回 null，表示取不到有效值。
   */
  AutoscalingAdded?: AutoscalingAdded
}

/**
 * 边缘计算集群信息
 */
export interface EdgeCluster {
  /**
   * 集群Id
   */
  ClusterId: string
  /**
   * 集群名称
   */
  ClusterName: string
  /**
   * Vpc Id
   */
  VpcId: string
  /**
   * 集群pod cidr
   */
  PodCIDR: string
  /**
   * 集群 service cidr
   */
  ServiceCIDR: string
  /**
   * k8s 版本号
   */
  K8SVersion: string
  /**
   * 集群状态
   */
  Status?: string
  /**
   * 集群描述信息
   */
  ClusterDesc?: string
  /**
   * 集群创建时间
   */
  CreatedTime?: string
  /**
   * 边缘集群版本
   */
  EdgeClusterVersion?: string
  /**
   * 节点最大Pod数
注意：此字段可能返回 null，表示取不到有效值。
   */
  MaxNodePodNum?: number
  /**
   * 集群高级设置
注意：此字段可能返回 null，表示取不到有效值。
   */
  ClusterAdvancedSettings?: EdgeClusterAdvancedSettings
  /**
   * 边缘容器集群级别
注意：此字段可能返回 null，表示取不到有效值。
   */
  Level?: string
  /**
   * 是否支持自动提升集群配置
注意：此字段可能返回 null，表示取不到有效值。
   */
  AutoUpgradeClusterLevel?: boolean
  /**
   * 集群付费模式，支持POSTPAID_BY_HOUR或者PREPAID
注意：此字段可能返回 null，表示取不到有效值。
   */
  ChargeType?: string
  /**
   * 边缘集群组件的版本
注意：此字段可能返回 null，表示取不到有效值。
   */
  EdgeVersion?: string
  /**
   * 集群绑定的云标签
注意：此字段可能返回 null，表示取不到有效值。
   */
  TagSpecification?: TagSpecification
}

/**
 * DescribeClusterNodePoolDetail返回参数结构体
 */
export interface DescribeClusterNodePoolDetailResponse {
  /**
   * 节点池详情
   */
  NodePool?: NodePool
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeletePrometheusConfig请求参数结构体
 */
export interface DeletePrometheusConfigRequest {
  /**
   * 实例id
   */
  InstanceId: string
  /**
   * 集群类型
   */
  ClusterType: string
  /**
   * 集群id
   */
  ClusterId: string
  /**
   * 要删除的ServiceMonitor名字列表
   */
  ServiceMonitors?: Array<string>
  /**
   * 要删除的PodMonitor名字列表
   */
  PodMonitors?: Array<string>
  /**
   * 要删除的RawJobs名字列表
   */
  RawJobs?: Array<string>
  /**
   * 要删除的Probe名字列表
   */
  Probes?: Array<string>
}

/**
 * DescribeEKSContainerInstanceEvent请求参数结构体
 */
export interface DescribeEKSContainerInstanceEventRequest {
  /**
   * 容器实例id
   */
  EksCiId: string
  /**
   * 最大事件数量。默认为50，最大取值100。
   */
  Limit?: number
}

/**
 * ScaleOutClusterMaster返回参数结构体
 */
export interface ScaleOutClusterMasterResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteClusterAsGroups请求参数结构体
 */
export interface DeleteClusterAsGroupsRequest {
  /**
   * 集群ID，通过[DescribeClusters](https://cloud.tencent.com/document/api/457/31862)接口获取。
   */
  ClusterId: string
  /**
   * 集群伸缩组ID的列表
   */
  AutoScalingGroupIds: Array<string>
  /**
   * 是否保留伸缩组中的节点(默认值： false(不保留))
   */
  KeepInstance?: boolean
}

/**
 * kubernetes Taint
 */
export interface Toleration {
  /**
   * 容忍应用到的 taint key
   */
  Key?: string
  /**
   * 键与值的关系
   */
  Operator?: string
  /**
   * 要匹配的污点效果
   */
  Effect?: string
}

/**
 * CreateEKSContainerInstances返回参数结构体
 */
export interface CreateEKSContainerInstancesResponse {
  /**
   * EKS Container Instance Id集合，格式为eksci-xxx，是容器实例的唯一标识。
   */
  EksCiIds?: Array<string>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteEdgeCVMInstances返回参数结构体
 */
export interface DeleteEdgeCVMInstancesResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeIPAMD请求参数结构体
 */
export interface DescribeIPAMDRequest {
  /**
   * 集群ID
   */
  ClusterId: string
}

/**
 * DescribeClusterKubeconfig返回参数结构体
 */
export interface DescribeClusterKubeconfigResponse {
  /**
   * 子账户kubeconfig文件，可用于直接访问集群kube-apiserver（入参IsExtranet为false，返回内网访问的kubeconfig，没开内网的情况下server会是一个默认域名；入参IsExtranet为true，返回外网的kubeconfig，没开外网的情况下server会是一个默认域名。默认域名默认不可达，需要自行处理）
   */
  Kubeconfig?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeClusterCommonNames请求参数结构体
 */
export interface DescribeClusterCommonNamesRequest {
  /**
   * 集群ID
   */
  ClusterId: string
  /**
   * 子账户列表，不可超出最大值50
   */
  SubaccountUins?: Array<string>
  /**
   * 角色ID列表，不可超出最大值50
   */
  RoleIds?: Array<string>
}

/**
 * EKS Instance Nfs Volume
 */
export interface NfsVolume {
  /**
   * nfs volume 数据卷名称
   */
  Name: string
  /**
   * NFS 服务器地址
   */
  Server: string
  /**
   * NFS 数据卷路径
   */
  Path: string
  /**
   * 默认为 False
   */
  ReadOnly?: boolean
}

/**
 * 预留券抵扣详情
 */
export interface RIUtilizationDetail {
  /**
   * 预留券ID
   */
  ReservedInstanceId?: string
  /**
   * Pod唯一ID
   */
  EksId?: string
  /**
   * 集群ID
   */
  ClusterId?: string
  /**
   * Pod的名称
   */
  Name?: string
  /**
   * Pod的命名空间
   */
  Namespace?: string
  /**
   * 工作负载类型
   */
  Kind?: string
  /**
   * 工作负载名称
   */
  KindName?: string
  /**
   * Pod的uid
   */
  Uid?: string
  /**
   * 用量开始时间
   */
  StartTime?: string
  /**
   * 用量结束时间
   */
  EndTime?: string
  /**
   * 抵扣资源所属产品
   */
  Product?: string
}

/**
 * DescribeBatchModifyTagsStatus返回参数结构体
 */
export interface DescribeBatchModifyTagsStatusResponse {
  /**
   * 失败资源列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  FailedResources?: Array<FailedResource>
  /**
   * 任务状态：
- running 运行中
- failed 失败
- done 成功
注意：此字段可能返回 null，表示取不到有效值。
   */
  Status?: string
  /**
   * 是否同步集群内子资源标签
   */
  SyncSubresource?: boolean
  /**
   * 集群标签
   */
  Tags?: Array<Tag>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * amp告警渠道配置
 */
export interface PrometheusNotification {
  /**
   * 是否启用
   */
  Enabled: boolean
  /**
   * 收敛时间
   */
  RepeatInterval: string
  /**
   * 生效起始时间
   */
  TimeRangeStart: string
  /**
   * 生效结束时间
   */
  TimeRangeEnd: string
  /**
   * 告警通知方式。目前有SMS、EMAIL、CALL、WECHAT方式。
分别代表：短信、邮件、电话、微信
注意：此字段可能返回 null，表示取不到有效值。
   */
  NotifyWay?: Array<string>
  /**
   * 告警接收组（用户组）
注意：此字段可能返回 null，表示取不到有效值。
   */
  ReceiverGroups?: Array<number | bigint>
  /**
   * 电话告警顺序。
注：NotifyWay选择CALL，采用该参数。
注意：此字段可能返回 null，表示取不到有效值。
   */
  PhoneNotifyOrder?: Array<number | bigint>
  /**
   * 电话告警次数。
注：NotifyWay选择CALL，采用该参数。
注意：此字段可能返回 null，表示取不到有效值。
   */
  PhoneCircleTimes?: number
  /**
   * 电话告警轮内间隔。单位：秒
注：NotifyWay选择CALL，采用该参数。
注意：此字段可能返回 null，表示取不到有效值。
   */
  PhoneInnerInterval?: number
  /**
   * 电话告警轮外间隔。单位：秒
注：NotifyWay选择CALL，采用该参数。
注意：此字段可能返回 null，表示取不到有效值。
   */
  PhoneCircleInterval?: number
  /**
   * 电话告警触达通知
注：NotifyWay选择CALL，采用该参数。
注意：此字段可能返回 null，表示取不到有效值。
   */
  PhoneArriveNotice?: boolean
  /**
   * 通道类型，默认为amp，支持以下
amp
webhook
注意：此字段可能返回 null，表示取不到有效值。
   */
  Type?: string
  /**
   * 如果Type为webhook, 则该字段为必填项
注意：此字段可能返回 null，表示取不到有效值。
   */
  WebHook?: string
}

/**
 * DescribeRIUtilizationDetail请求参数结构体
 */
export interface DescribeRIUtilizationDetailRequest {
  /**
   * 偏移量，默认0。
   */
  Offset?: number
  /**
   * 返回数量，默认为20，最大值为100。
   */
  Limit?: number
  /**
   * reserved-instance-id
按照**【预留实例ID**】进行过滤。预留实例ID形如：eksri-xxxxxxxx。
类型：String
必选：否

begin-time
按照**【抵扣开始时间**】进行过滤。形如：2023-06-28 15:27:40。
类型：String
必选：否

end-time
按照**【抵扣结束时间**】进行过滤。形如：2023-06-28 15:27:40。
类型：String
必选：否
   */
  Filters?: Array<Filter>
}

/**
 * 集群创建过程
 */
export interface ClusterCondition {
  /**
   * 集群创建过程类型
   */
  Type?: string
  /**
   * 集群创建过程状态
   */
  Status?: string
  /**
   * 最后一次探测到该状态的时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  LastProbeTime?: string
  /**
   * 最后一次转换到该过程的时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  LastTransitionTime?: string
  /**
   * 转换到该过程的简明原因
注意：此字段可能返回 null，表示取不到有效值。
   */
  Reason?: string
  /**
   * 转换到该过程的更多信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  Message?: string
}

/**
 * 仓储仓库信息
 */
export interface BackupStorageLocation {
  /**
   * 备份仓库名称
   */
  Name?: string
  /**
   * 存储仓库所属地域，比如COS广州(ap-guangzhou)
   */
  StorageRegion?: string
  /**
   * 存储服务提供方，默认腾讯云	
注意：此字段可能返回 null，表示取不到有效值。
   */
  Provider?: string
  /**
   * 对象存储桶名称，如果是COS必须是tke-backup-前缀开头	
注意：此字段可能返回 null，表示取不到有效值。
   */
  Bucket?: string
  /**
   * 对象存储桶路径
注意：此字段可能返回 null，表示取不到有效值。
   */
  Path?: string
  /**
   * 存储仓库状态
注意：此字段可能返回 null，表示取不到有效值。
   */
  State?: string
  /**
   * 详细状态信息	
注意：此字段可能返回 null，表示取不到有效值。
   */
  Message?: string
  /**
   * 最后一次检查时间	
注意：此字段可能返回 null，表示取不到有效值。
   */
  LastValidationTime?: string
}

/**
 * DescribeEKSClusters返回参数结构体
 */
export interface DescribeEKSClustersResponse {
  /**
   * 集群总个数
   */
  TotalCount?: number
  /**
   * 集群信息列表
   */
  Clusters?: Array<EksCluster>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 数据卷挂载路径信息
 */
export interface VolumeMount {
  /**
   * volume名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  Name: string
  /**
   * 挂载路径
注意：此字段可能返回 null，表示取不到有效值。
   */
  MountPath: string
  /**
   * 是否只读
注意：此字段可能返回 null，表示取不到有效值。
   */
  ReadOnly?: boolean
  /**
   * 子路径
注意：此字段可能返回 null，表示取不到有效值。
   */
  SubPath?: string
  /**
   * 传播挂载方式
注意：此字段可能返回 null，表示取不到有效值。
   */
  MountPropagation?: string
  /**
   * 子路径表达式
注意：此字段可能返回 null，表示取不到有效值。
   */
  SubPathExpr?: string
}

/**
 * DeleteCluster请求参数结构体
 */
export interface DeleteClusterRequest {
  /**
   * 集群ID
   */
  ClusterId: string
  /**
   * 集群实例删除时的策略：terminate（销毁实例，仅支持按量计费云主机实例） retain （仅移除，保留实例）
   */
  InstanceDeleteMode: string
  /**
   * 集群删除时资源的删除策略，目前支持CBS（默认保留CBS）
   */
  ResourceDeleteOptions?: Array<ResourceDeleteOption>
}

/**
 * DescribeTKEEdgeClusters返回参数结构体
 */
export interface DescribeTKEEdgeClustersResponse {
  /**
   * 集群总个数
   */
  TotalCount?: number
  /**
   * 集群信息列表
   */
  Clusters?: Array<EdgeCluster>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 集群巡检诊断对象信息
 */
export interface KubeJarvisStateResultObjInfo {
  /**
   * 对象属性名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  PropertyName?: string
  /**
   * 对象属性值
注意：此字段可能返回 null，表示取不到有效值。
   */
  PropertyValue?: string
}

/**
 * DescribeAvailableTKEEdgeVersion请求参数结构体
 */
export interface DescribeAvailableTKEEdgeVersionRequest {
  /**
   * 填写ClusterId获取当前集群各个组件版本和最新版本
   */
  ClusterId?: string
}

/**
 * 策略实例信息
 */
export interface OpenConstraintInfo {
  /**
   * 策略实例名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  Name?: string
  /**
   * 策略实例关联事件数
注意：此字段可能返回 null，表示取不到有效值。
   */
  EventNums?: number
  /**
   * 实例yaml详情base64编码
注意：此字段可能返回 null，表示取不到有效值。
   */
  YamlDetail?: string
}

/**
 * DescribeClusterInspectionResultsOverview请求参数结构体
 */
export interface DescribeClusterInspectionResultsOverviewRequest {
  /**
   * Array of String	目标集群列表，为空查询用户所有集群

   */
  ClusterIds?: Array<string>
  /**
   * 聚合字段信息，概览结果按照 GroupBy 信息聚合后返回，可选参数：
catalogue.first：按一级分类聚合
catalogue.second：按二级分类聚合
   */
  GroupBy?: Array<string>
}

/**
 * ModifyPrometheusAlertPolicy请求参数结构体
 */
export interface ModifyPrometheusAlertPolicyRequest {
  /**
   * 实例id
   */
  InstanceId: string
  /**
   * 告警配置
   */
  AlertRule: PrometheusAlertPolicyItem
}

/**
 * ForwardApplicationRequestV3请求参数结构体
 */
export interface ForwardApplicationRequestV3Request {
  /**
   * 请求集群addon的访问
   */
  Method: string
  /**
   * 请求集群addon的路径
   */
  Path: string
  /**
   * 请求集群addon后允许接收的数据格式
   */
  Accept?: string
  /**
   * 请求集群addon的数据格式
   */
  ContentType?: string
  /**
   * 请求集群addon的数据
   */
  RequestBody?: string
  /**
   * 集群名称
   */
  ClusterName?: string
  /**
   * 是否编码请求内容
   */
  EncodedBody?: string
}

/**
 * DescribeOpenPolicyList请求参数结构体
 */
export interface DescribeOpenPolicyListRequest {
  /**
   * 集群ID
   */
  ClusterId: string
  /**
   * 策略分类 基线：baseline 优选：priority 可选：optional
   */
  Category?: string
}

/**
 * 云原生Prometheus模板同步目标
 */
export interface PrometheusTemplateSyncTarget {
  /**
   * 目标所在地域
   */
  Region: string
  /**
   * 目标实例
   */
  InstanceId: string
  /**
   * 集群id，只有当采集模板的Level为cluster的时候需要
注意：此字段可能返回 null，表示取不到有效值。
   */
  ClusterId?: string
  /**
   * 最后一次同步时间， 用于出参
注意：此字段可能返回 null，表示取不到有效值。
   */
  SyncTime?: string
  /**
   * 当前使用的模板版本，用于出参
注意：此字段可能返回 null，表示取不到有效值。
   */
  Version?: string
  /**
   * 集群类型，只有当采集模板的Level为cluster的时候需要
注意：此字段可能返回 null，表示取不到有效值。
   */
  ClusterType?: string
  /**
   * 用于出参，实例名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  InstanceName?: string
  /**
   * 用于出参，集群名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  ClusterName?: string
}

/**
 * DescribePrometheusTemplates请求参数结构体
 */
export interface DescribePrometheusTemplatesRequest {
  /**
   * 模糊过滤条件，支持
Level 按模板级别过滤
Name 按名称过滤
Describe 按描述过滤
ID 按templateId过滤
   */
  Filters?: Array<Filter>
  /**
   * 分页偏移
   */
  Offset?: number
  /**
   * 总数限制
   */
  Limit?: number
}

/**
 * DescribePrometheusAlertPolicy返回参数结构体
 */
export interface DescribePrometheusAlertPolicyResponse {
  /**
   * 告警详情
注意：此字段可能返回 null，表示取不到有效值。
   */
  AlertRules?: Array<PrometheusAlertPolicyItem>
  /**
   * 总数
   */
  Total?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * EnableVpcCniNetworkType返回参数结构体
 */
export interface EnableVpcCniNetworkTypeResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribePrometheusAlertRule返回参数结构体
 */
export interface DescribePrometheusAlertRuleResponse {
  /**
   * 告警详情
   */
  AlertRules?: Array<PrometheusAlertRuleDetail>
  /**
   * 总数
   */
  Total?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * EksCi地域信息
 */
export interface EksCiRegionInfo {
  /**
   * 地域别名，形如gz
   */
  Alias?: string
  /**
   * 地域名，形如ap-guangzhou
   */
  RegionName?: string
  /**
   * 地域ID
   */
  RegionId?: number
}

/**
 * DescribeEdgeClusterInstances请求参数结构体
 */
export interface DescribeEdgeClusterInstancesRequest {
  /**
   * 集群id
   */
  ClusterID: string
  /**
   * 查询总数
   */
  Limit: number
  /**
   * 偏移量
   */
  Offset: number
  /**
   * 过滤条件，仅支持NodeName过滤
   */
  Filters?: Array<Filter>
}

/**
 * DisableClusterAudit请求参数结构体
 */
export interface DisableClusterAuditRequest {
  /**
   * 集群ID
   */
  ClusterId: string
  /**
   * 取值为true代表关闭集群审计时删除默认创建的日志集和主题，false代表不删除
   */
  DeleteLogSetAndTopic?: boolean
}

/**
 * SyncPrometheusTemp请求参数结构体
 */
export interface SyncPrometheusTempRequest {
  /**
   * 实例id
   */
  TemplateId: string
  /**
   * 同步目标
   */
  Targets: Array<PrometheusTemplateSyncTarget>
}

/**
 * DeleteBackupStorageLocation返回参数结构体
 */
export interface DeleteBackupStorageLocationResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribePrometheusGlobalNotification返回参数结构体
 */
export interface DescribePrometheusGlobalNotificationResponse {
  /**
   * 全局告警通知渠道
注意：此字段可能返回 null，表示取不到有效值。
   */
  Notification?: PrometheusNotificationItem
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeBatchModifyTagsStatus请求参数结构体
 */
export interface DescribeBatchModifyTagsStatusRequest {
  /**
   * 集群id
   */
  ClusterId: string
}

/**
 * Probe中的HttpGet
 */
export interface HttpGet {
  /**
   * HttpGet检测的路径
注意：此字段可能返回 null，表示取不到有效值。
   */
  Path: string
  /**
   * HttpGet检测的端口号
注意：此字段可能返回 null，表示取不到有效值。
   */
  Port: number
  /**
   * HTTP or HTTPS
注意：此字段可能返回 null，表示取不到有效值。
   */
  Scheme: string
}

/**
 * 集群资源使用量
 */
export interface ResourceUsage {
  /**
   * 资源类型
   */
  Name?: string
  /**
   * 资源使用量
   */
  Usage?: number
  /**
   * 资源使用详情
   */
  Details?: Array<ResourceUsageDetail>
}

/**
 * CreateClusterVirtualNode请求参数结构体
 */
export interface CreateClusterVirtualNodeRequest {
  /**
   * 集群ID
   */
  ClusterId: string
  /**
   * 虚拟节点所属节点池
   */
  NodePoolId: string
  /**
   * 虚拟节点所属子网
   */
  SubnetId?: string
  /**
   * 虚拟节点子网ID列表，和参数SubnetId互斥
   */
  SubnetIds?: Array<string>
  /**
   * 虚拟节点列表
   */
  VirtualNodes?: Array<VirtualNodeSpec>
}

/**
 * DescribeTKEEdgeClusters请求参数结构体
 */
export interface DescribeTKEEdgeClustersRequest {
  /**
   * 集群ID列表(为空时，
表示获取账号下所有集群)
   */
  ClusterIds?: Array<string>
  /**
   * 偏移量,默认0
   */
  Offset?: number
  /**
   * 最大输出条数，默认20
   */
  Limit?: number
  /**
   * 过滤条件,当前只支持按照ClusterName和云标签进行过滤,云标签过滤格式Tags:["key1:value1","key2:value2"]
   */
  Filters?: Array<Filter>
}

/**
 * DescribePrometheusAlertHistory请求参数结构体
 */
export interface DescribePrometheusAlertHistoryRequest {
  /**
   * 实例id
   */
  InstanceId: string
  /**
   * 告警名称
   */
  RuleName?: string
  /**
   * 开始时间
   */
  StartTime?: string
  /**
   * 结束时间
   */
  EndTime?: string
  /**
   * label集合
   */
  Labels?: string
  /**
   * 分片
   */
  Offset?: number
  /**
   * 分片
   */
  Limit?: number
}

/**
 * SetNodePoolNodeProtection返回参数结构体
 */
export interface SetNodePoolNodeProtectionResponse {
  /**
   * 成功设置的节点id
注意：此字段可能返回 null，表示取不到有效值。
   */
  SucceedInstanceIds?: Array<string>
  /**
   * 没有成功设置的节点id
注意：此字段可能返回 null，表示取不到有效值。
   */
  FailedInstanceIds?: Array<string>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeletePrometheusAlertPolicy请求参数结构体
 */
export interface DeletePrometheusAlertPolicyRequest {
  /**
   * 实例id
   */
  InstanceId: string
  /**
   * 告警策略id列表
   */
  AlertIds: Array<string>
  /**
   * 告警策略名称
   */
  Names?: Array<string>
}

/**
 * ModifyPrometheusAgentExternalLabels返回参数结构体
 */
export interface ModifyPrometheusAgentExternalLabelsResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * RollbackClusterRelease请求参数结构体
 */
export interface RollbackClusterReleaseRequest {
  /**
   * 集群ID
   */
  ClusterId: string
  /**
   * 应用名称
   */
  Name: string
  /**
   * 应用命名空间
   */
  Namespace: string
  /**
   * 回滚版本号
   */
  Revision: number
  /**
   * 集群类型
   */
  ClusterType?: string
}

/**
 * DescribePodDeductionRate返回参数结构体
 */
export interface DescribePodDeductionRateResponse {
  /**
   * 各个规格的 可被预留券抵扣的Pod 抵扣率
   */
  PodDeductionRateSet?: Array<PodDeductionRate>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteClusterInstances请求参数结构体
 */
export interface DeleteClusterInstancesRequest {
  /**
   * 集群ID
   */
  ClusterId: string
  /**
   * 主机InstanceId列表
   */
  InstanceIds: Array<string>
  /**
   * 集群实例删除时的策略：terminate（销毁实例，仅支持按量计费云主机实例） retain （仅移除，保留实例）
   */
  InstanceDeleteMode?: string
  /**
   * 是否强制删除(当节点在初始化时，可以指定参数为TRUE)
   */
  ForceDelete?: boolean
}

/**
 * 节点升级重装参数
 */
export interface UpgradeNodeResetParam {
  /**
   * 实例额外需要设置参数信息
   */
  InstanceAdvancedSettings?: InstanceAdvancedSettings
  /**
   * 增强服务。通过该参数可以指定是否开启云安全、云监控等服务。若不指定该参数，则默认开启云监控、云安全服务。
   */
  EnhancedService?: EnhancedService
  /**
   * 节点登录信息（目前仅支持使用Password或者单个KeyIds）
   */
  LoginSettings?: LoginSettings
  /**
   * 实例所属安全组。该参数可以通过调用 DescribeSecurityGroups 的返回值中的sgId字段来获取。若不指定该参数，则绑定默认安全组。（目前仅支持设置单个sgId）
   */
  SecurityGroupIds?: Array<string>
}

/**
 * GPU驱动和CUDA的版本信息
 */
export interface DriverVersion {
  /**
   * GPU驱动或者CUDA的版本
注意：此字段可能返回 null，表示取不到有效值。
   */
  Version: string
  /**
   * GPU驱动或者CUDA的名字
注意：此字段可能返回 null，表示取不到有效值。
   */
  Name: string
}

/**
 * CreateClusterInstances请求参数结构体
 */
export interface CreateClusterInstancesRequest {
  /**
   * 集群 ID，请填写 查询集群列表 接口中返回的 clusterId 字段
   */
  ClusterId: string
  /**
   * CVM创建透传参数，json化字符串格式，如需要保证扩展集群节点请求幂等性需要在此参数添加ClientToken字段，详见[CVM创建实例](https://cloud.tencent.com/document/product/213/15730)接口。
   */
  RunInstancePara: string
  /**
   * 实例额外需要设置参数信息
   */
  InstanceAdvancedSettings?: InstanceAdvancedSettings
  /**
   * 校验规则相关选项，可配置跳过某些校验规则。目前支持GlobalRouteCIDRCheck（跳过GlobalRouter的相关校验），VpcCniCIDRCheck（跳过VpcCni相关校验）
   */
  SkipValidateOptions?: Array<string>
}

/**
 * DeleteBackupStorageLocation请求参数结构体
 */
export interface DeleteBackupStorageLocationRequest {
  /**
   * 备份仓库名称
   */
  Name: string
}

/**
 * UninstallClusterRelease返回参数结构体
 */
export interface UninstallClusterReleaseResponse {
  /**
   * 应用详情
注意：此字段可能返回 null，表示取不到有效值。
   */
  Release: PendingRelease
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 集群容器网络相关参数
 */
export interface ClusterCIDRSettings {
  /**
   * 用于分配集群容器和服务 IP 的 CIDR，不得与 VPC CIDR 冲突，也不得与同 VPC 内其他集群 CIDR 冲突。且网段范围必须在内网网段内，例如:10.1.0.0/14, 192.168.0.1/18,172.16.0.0/16。
   */
  ClusterCIDR?: string
  /**
   * 是否忽略 ClusterCIDR 冲突错误, 默认不忽略
   */
  IgnoreClusterCIDRConflict?: boolean
  /**
   * 集群中每个Node上最大的Pod数量。取值范围16～256。不为2的幂值时会向上取最接近的2的幂值。
   */
  MaxNodePodNum?: number
  /**
   * 集群最大的service数量。取值范围32～32768，不为2的幂值时会向上取最接近的2的幂值。默认值256
   */
  MaxClusterServiceNum?: number
  /**
   * 用于分配集群服务 IP 的 CIDR，不得与 VPC CIDR 冲突，也不得与同 VPC 内其他集群 CIDR 冲突。且网段范围必须在内网网段内，例如:10.1.0.0/14, 192.168.0.1/18,172.16.0.0/16。
   */
  ServiceCIDR?: string
  /**
   * VPC-CNI网络模式下，弹性网卡的子网Id。
   */
  EniSubnetIds?: Array<string>
  /**
   * VPC-CNI网络模式下，弹性网卡IP的回收时间，取值范围[300,15768000)
   */
  ClaimExpiredSeconds?: number
  /**
   * 是否忽略 ServiceCIDR 冲突错误, 仅在 VPC-CNI 模式生效，默认不忽略
   */
  IgnoreServiceCIDRConflict?: boolean
}

/**
 * kubernetes Taint
 */
export interface Taint {
  /**
   * Key
   */
  Key?: string
  /**
   * Value
   */
  Value?: string
  /**
   * Effect
   */
  Effect?: string
}

/**
 * 预留券的使用率信息
 */
export interface ReservedInstanceUtilizationRate {
  /**
   * 使用率
注意：此字段可能返回 null，表示取不到有效值。
   */
  Rate?: number
  /**
   * 预留券数量
注意：此字段可能返回 null，表示取不到有效值。
   */
  Num?: number
  /**
   * 核数
注意：此字段可能返回 null，表示取不到有效值。
   */
  CPU?: number
  /**
   * 内存
注意：此字段可能返回 null，表示取不到有效值。
   */
  Memory?: number
  /**
   *  预留券类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  Type?: string
  /**
   * GPU 卡数
注意：此字段可能返回 null，表示取不到有效值。
   */
  GpuNum?: string
  /**
   * 可用区
注意：此字段可能返回 null，表示取不到有效值。
   */
  Zone?: string
  /**
   * 集群 ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  ClusterId?: string
  /**
   * 节点名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  NodeName?: string
  /**
   * Pod 数量
注意：此字段可能返回 null，表示取不到有效值。
   */
  PodNum?: number
}

/**
 * ModifyNodePoolInstanceTypes请求参数结构体
 */
export interface ModifyNodePoolInstanceTypesRequest {
  /**
   * 集群id
   */
  ClusterId: string
  /**
   * 节点池id
   */
  NodePoolId: string
  /**
   * 机型列表，主实例机型不支持修改
   */
  InstanceTypes: Array<string>
}

/**
 * AddClusterCIDR请求参数结构体
 */
export interface AddClusterCIDRRequest {
  /**
   * 集群ID
   */
  ClusterId: string
  /**
   * 增加的ClusterCIDR
   */
  ClusterCIDRs: Array<string>
  /**
   * 是否忽略ClusterCIDR与VPC路由表的冲突
   */
  IgnoreClusterCIDRConflict?: boolean
}

/**
 * OIDC认证相关配置
 */
export interface OIDCConfigAuthenticationOptions {
  /**
   * 创建身份提供商
注意：此字段可能返回 null，表示取不到有效值。
   */
  AutoCreateOIDCConfig?: boolean
  /**
   * 创建身份提供商的ClientId
注意：此字段可能返回 null，表示取不到有效值。
   */
  AutoCreateClientId?: Array<string>
  /**
   * 创建PodIdentityWebhook组件
注意：此字段可能返回 null，表示取不到有效值。
   */
  AutoInstallPodIdentityWebhookAddon?: boolean
}

/**
 * CreateCluster请求参数结构体
 */
export interface CreateClusterRequest {
  /**
   * 集群类型，托管集群：MANAGED_CLUSTER，独立集群：INDEPENDENT_CLUSTER。
   */
  ClusterType: string
  /**
   * 集群容器网络配置信息
   */
  ClusterCIDRSettings: ClusterCIDRSettings
  /**
   * CVM创建透传参数，json化字符串格式，详见[CVM创建实例](https://cloud.tencent.com/document/product/213/15730)接口。总机型(包括地域)数量不超过10个，相同机型(地域)购买多台机器可以通过设置参数中RunInstances中InstanceCount来实现。
   */
  RunInstancesForNode?: Array<RunInstancesForNode>
  /**
   * 集群的基本配置信息
   */
  ClusterBasicSettings?: ClusterBasicSettings
  /**
   * 集群高级配置信息
   */
  ClusterAdvancedSettings?: ClusterAdvancedSettings
  /**
   * 节点高级配置信息
   */
  InstanceAdvancedSettings?: InstanceAdvancedSettings
  /**
   * 已存在实例的配置信息。所有实例必须在同一个VPC中，最大数量不超过100，不支持添加竞价实例。
   */
  ExistedInstancesForNode?: Array<ExistedInstancesForNode>
  /**
   * CVM类型和其对应的数据盘挂载配置信息
   */
  InstanceDataDiskMountSettings?: Array<InstanceDataDiskMountSetting>
  /**
   * 需要安装的扩展组件信息
   */
  ExtensionAddons?: Array<ExtensionAddon>
  /**
   * 本地专用集群Id
   */
  CdcId?: string
}

/**
 * CreateEdgeCVMInstances请求参数结构体
 */
export interface CreateEdgeCVMInstancesRequest {
  /**
   * 集群id，边缘集群需要先开启公网访问才能添加cvm节点
   */
  ClusterID: string
  /**
   * CVM创建透传参数，json化字符串格式，如需要保证扩展集群节点请求幂等性需要在此参数添加ClientToken字段，详见[CVM创建实例](https://cloud.tencent.com/document/product/213/15730)接口。
   */
  RunInstancePara: string
  /**
   * CVM所属Region
   */
  CvmRegion: string
  /**
   * CVM数量
   */
  CvmCount: number
  /**
   * 实例扩展信息
   */
  External?: string
  /**
   * 用户自定义脚本
   */
  UserScript?: string
  /**
   * 是否开启弹性网卡功能
   */
  EnableEni?: boolean
}

/**
 * DescribeClusterReleaseHistory请求参数结构体
 */
export interface DescribeClusterReleaseHistoryRequest {
  /**
   * 集群ID
   */
  ClusterId: string
  /**
   * 应用名称
   */
  Name: string
  /**
   * 应用所在命名空间
   */
  Namespace: string
  /**
   * 集群类型
   */
  ClusterType?: string
}

/**
 * 加入存量节点时的节点池选项
 */
export interface NodePoolOption {
  /**
   * 是否加入节点池
   */
  AddToNodePool?: boolean
  /**
   * 节点池id
   */
  NodePoolId?: string
  /**
   * 是否继承节点池相关配置
   */
  InheritConfigurationFromNodePool?: boolean
}

/**
 * DescribeEdgeClusterExtraArgs请求参数结构体
 */
export interface DescribeEdgeClusterExtraArgsRequest {
  /**
   * 集群ID
   */
  ClusterId: string
}

/**
 * DescribeClusters返回参数结构体
 */
export interface DescribeClustersResponse {
  /**
   * 集群总个数
   */
  TotalCount?: number
  /**
   * 集群信息列表
   */
  Clusters?: Array<Cluster>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteClusterVirtualNode返回参数结构体
 */
export interface DeleteClusterVirtualNodeResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 托管Prometheus agent信息
 */
export interface PrometheusAgentInfo {
  /**
   * 集群类型
   */
  ClusterType: string
  /**
   * 集群id
   */
  ClusterId: string
  /**
   * 备注
   */
  Describe?: string
  /**
   * 集群所在地域
   */
  Region?: string
}

/**
 * CreateEdgeCVMInstances返回参数结构体
 */
export interface CreateEdgeCVMInstancesResponse {
  /**
   * cvm id 列表
   */
  CvmIdSet?: Array<string>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeEdgeLogSwitches返回参数结构体
 */
export interface DescribeEdgeLogSwitchesResponse {
  /**
   * 集群日志开关集合
注意：此字段可能返回 null，表示取不到有效值。
   */
  SwitchSet?: Array<string>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreatePrometheusClusterAgent返回参数结构体
 */
export interface CreatePrometheusClusterAgentResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribePrometheusTemplates返回参数结构体
 */
export interface DescribePrometheusTemplatesResponse {
  /**
   * 模板列表
   */
  Templates?: Array<PrometheusTemplate>
  /**
   * 总数
   */
  Total?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * UpdateEKSContainerInstance返回参数结构体
 */
export interface UpdateEKSContainerInstanceResponse {
  /**
   * 容器实例 ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  EksCiId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * Eks 自定义域名服务器 配置
 */
export interface DnsServerConf {
  /**
   * 域名。空字符串表示所有域名。
   */
  Domain: string
  /**
   * dns 服务器地址列表。地址格式 ip:port
   */
  DnsServers: Array<string>
}

/**
 * 弹性集群信息
 */
export interface EksCluster {
  /**
   * 集群Id
   */
  ClusterId: string
  /**
   * 集群名称
   */
  ClusterName: string
  /**
   * Vpc Id
   */
  VpcId: string
  /**
   * 子网列表
   */
  SubnetIds: Array<string>
  /**
   * k8s 版本号
   */
  K8SVersion: string
  /**
   * 集群状态(running 运行中，initializing 初始化中，Failed 异常，Idling 空闲中，Activating 激活中，Terminating 删除中)
   */
  Status?: string
  /**
   * 集群描述信息
   */
  ClusterDesc?: string
  /**
   * 集群创建时间
   */
  CreatedTime?: string
  /**
   * Service 子网Id
   */
  ServiceSubnetId?: string
  /**
   * 集群的自定义dns 服务器信息
   */
  DnsServers?: Array<DnsServerConf>
  /**
   * 将来删除集群时是否要删除cbs。默认为 FALSE
   */
  NeedDeleteCbs?: boolean
  /**
   * 是否在用户集群内开启Dns。默认为TRUE
   */
  EnableVpcCoreDNS?: boolean
  /**
   * 标签描述列表。
注意：此字段可能返回 null，表示取不到有效值。
   */
  TagSpecification?: Array<TagSpecification>
}

/**
 * ModifyNodePoolInstanceTypes返回参数结构体
 */
export interface ModifyNodePoolInstanceTypesResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 告警渠道使用自建alertmanager的配置
 */
export interface PrometheusAlertManagerConfig {
  /**
   * alertmanager url
   */
  Url: string
  /**
   * alertmanager部署所在集群类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  ClusterType?: string
  /**
   * alertmanager部署所在集群ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  ClusterId?: string
}

/**
 * GetClusterLevelPrice返回参数结构体
 */
export interface GetClusterLevelPriceResponse {
  /**
   * 询价结果，单位：分，打折后
   */
  Cost?: number
  /**
   * 询价结果，单位：分，折扣前
   */
  TotalCost?: number
  /**
   * 总的折扣，100表示100%不打折
   */
  Policy?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeResourceUsage返回参数结构体
 */
export interface DescribeResourceUsageResponse {
  /**
   * CRD使用量
   */
  CRDUsage?: ResourceUsage
  /**
   * Pod使用量
   */
  PodUsage?: number
  /**
   * ReplicaSet使用量
   */
  RSUsage?: number
  /**
   * ConfigMap使用量
   */
  ConfigMapUsage?: number
  /**
   * 其他资源使用量
   */
  OtherUsage?: ResourceUsage
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * RenewReservedInstances返回参数结构体
 */
export interface RenewReservedInstancesResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 边缘计算集群内网访问LB信息
 */
export interface EdgeClusterInternalLB {
  /**
   * 是否开启内网访问LB
注意：此字段可能返回 null，表示取不到有效值。
   */
  Enabled: boolean
  /**
   * 内网访问LB关联的子网Id
注意：此字段可能返回 null，表示取不到有效值。
   */
  SubnetId?: Array<string>
}

/**
 * 预留券抵扣范围的描述信息，当抵扣范围为 Region 时，表示地域抵扣，其他参数不需要传；当抵扣范围为 Zone 时，表示可用区抵扣，Zone 参数必传；当抵扣范围为 Node 时，表示节点抵扣，参数 Zone、ClusterId和NodeName均必传。
 */
export interface ReservedInstanceScope {
  /**
   * 抵扣范围，取值：Region、Zone 和 Node
   */
  Scope: string
  /**
   * 可用区
   */
  Zone?: string
  /**
   * 集群 ID
   */
  ClusterId?: string
  /**
   *  节点名称
   */
  NodeName?: string
}

/**
 * DescribeAvailableClusterVersion请求参数结构体
 */
export interface DescribeAvailableClusterVersionRequest {
  /**
   * 集群 Id。若只查询某个集群可升级的版本，需填写此项。
   */
  ClusterId?: string
  /**
   * 集群 Id 列表。若查询多个集群可升级的版本，需填写此项。
   */
  ClusterIds?: Array<string>
}

/**
 * UpgradeClusterRelease返回参数结构体
 */
export interface UpgradeClusterReleaseResponse {
  /**
   * 应用详情
注意：此字段可能返回 null，表示取不到有效值。
   */
  Release?: PendingRelease
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribePrometheusAlertPolicy请求参数结构体
 */
export interface DescribePrometheusAlertPolicyRequest {
  /**
   * 实例id
   */
  InstanceId: string
  /**
   * 分页
   */
  Offset?: number
  /**
   * 分页
   */
  Limit?: number
  /**
   * 过滤
支持ID，Name
   */
  Filters?: Array<Filter>
}

/**
 * DeleteClusterAsGroups返回参数结构体
 */
export interface DeleteClusterAsGroupsResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyClusterRuntimeConfig请求参数结构体
 */
export interface ModifyClusterRuntimeConfigRequest {
  /**
   * 集群ID，必填
   */
  ClusterId: string
  /**
   * 当需要修改运行时版本是根据另外的K8S版本获取时，需填写。例如升级校验有冲突后修改场景
   */
  DstK8SVersion?: string
  /**
   * 需要修改集群运行时时填写
   */
  ClusterRuntimeConfig?: RuntimeConfig
  /**
   * 需要修改节点池运行时时，填需要修改的部分
   */
  NodePoolRuntimeConfig?: Array<NodePoolRuntime>
}

/**
 * 地域属性信息
 */
export interface RegionInstance {
  /**
   * 地域名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  RegionName?: string
  /**
   * 地域ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  RegionId?: number
  /**
   * 地域状态
注意：此字段可能返回 null，表示取不到有效值。
   */
  Status?: string
  /**
   * 地域特性开关(按照JSON的形式返回所有属性)
注意：此字段可能返回 null，表示取不到有效值。
   */
  FeatureGates?: string
  /**
   * 地域简称
注意：此字段可能返回 null，表示取不到有效值。
   */
  Alias?: string
  /**
   * 地域白名单
注意：此字段可能返回 null，表示取不到有效值。
   */
  Remark?: string
}

/**
 * DescribePrometheusConfig请求参数结构体
 */
export interface DescribePrometheusConfigRequest {
  /**
   * 实例id
   */
  InstanceId: string
  /**
   * 集群id
   */
  ClusterId: string
  /**
   * 集群类型
   */
  ClusterType: string
}

/**
 * DescribeEdgeLogSwitches请求参数结构体
 */
export interface DescribeEdgeLogSwitchesRequest {
  /**
   * 集群ID列表
   */
  ClusterIds: Array<string>
}

/**
 * 边缘容器集群高级配置
 */
export interface EdgeClusterAdvancedSettings {
  /**
   * 集群自定义参数
注意：此字段可能返回 null，表示取不到有效值。
   */
  ExtraArgs?: EdgeClusterExtraArgs
  /**
   * 运行时类型，支持"docker"和"containerd"，默认为docker
注意：此字段可能返回 null，表示取不到有效值。
   */
  Runtime?: string
  /**
   * 集群kube-proxy转发模式，支持"iptables"和"ipvs"，默认为iptables
注意：此字段可能返回 null，表示取不到有效值。
   */
  ProxyMode?: string
}

/**
 * DescribeExternalNodeSupportConfig返回参数结构体
 */
export interface DescribeExternalNodeSupportConfigResponse {
  /**
   * 用于分配集群容器和服务 IP 的 CIDR，不得与 VPC CIDR 冲突，也不得与同 VPC 内其他集群 CIDR 冲突。且网段范围必须在内网网段内，例如:10.1.0.0/14, 192.168.0.1/18,172.16.0.0/16。
注意：此字段可能返回 null，表示取不到有效值。
   */
  ClusterCIDR?: string
  /**
   * 集群网络插件类型，支持：CiliumBGP、CiliumVXLan
注意：此字段可能返回 null，表示取不到有效值。
   */
  NetworkType?: string
  /**
   * 子网ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  SubnetId?: string
  /**
   * 是否开启第三方节点专线连接支持
注意：此字段可能返回 null，表示取不到有效值。
   */
  Enabled?: boolean
  /**
   * 节点所属交换机的BGP AS 号
注意：此字段可能返回 null，表示取不到有效值。
   */
  AS?: string
  /**
   * 节点所属交换机的交换机 IP
注意：此字段可能返回 null，表示取不到有效值。
   */
  SwitchIP?: string
  /**
   * 开启第三方节点池状态
   */
  Status?: string
  /**
   * 如果开启失败原因
注意：此字段可能返回 null，表示取不到有效值。
   */
  FailedReason?: string
  /**
   * 内网访问地址
注意：此字段可能返回 null，表示取不到有效值。
   */
  Master?: string
  /**
   * 镜像仓库代理地址
注意：此字段可能返回 null，表示取不到有效值。
   */
  Proxy?: string
  /**
   * 用于记录开启第三方节点的过程进行到哪一步了
注意：此字段可能返回 null，表示取不到有效值。
   */
  Progress?: Array<Step>
  /**
   * 是否开启第三方节点公网连接支持
   */
  EnabledPublicConnect?: boolean
  /**
   * 注册节点公网版公网连接地址
   */
  PublicConnectUrl?: string
  /**
   * 注册节点公网版自定义域名
注意：此字段可能返回 null，表示取不到有效值。
   */
  PublicCustomDomain?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * EnableEncryptionProtection返回参数结构体
 */
export interface EnableEncryptionProtectionResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeletePrometheusTemplate请求参数结构体
 */
export interface DeletePrometheusTemplateRequest {
  /**
   * 模板id
   */
  TemplateId: string
}

/**
 * DeletePrometheusRecordRuleYaml返回参数结构体
 */
export interface DeletePrometheusRecordRuleYamlResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribePrometheusTempSync返回参数结构体
 */
export interface DescribePrometheusTempSyncResponse {
  /**
   * 同步目标详情
注意：此字段可能返回 null，表示取不到有效值。
   */
  Targets?: Array<PrometheusTemplateSyncTarget>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreatePrometheusConfig返回参数结构体
 */
export interface CreatePrometheusConfigResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeClusterEndpointStatus返回参数结构体
 */
export interface DescribeClusterEndpointStatusResponse {
  /**
   * 查询集群访问端口状态（Created 开启成功，Creating 开启中，NotFound 未开启）
注意：此字段可能返回 null，表示取不到有效值。
   */
  Status?: string
  /**
   * 开启访问入口失败信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  ErrorMsg?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 描述了 “云自动化助手” 服务相关的信息
 */
export interface RunAutomationServiceEnabled {
  /**
   * 是否开启云自动化助手。取值范围：<br><li>true：表示开启云自动化助手服务<br><li>false：表示不开启云自动化助手服务<br><br>默认取值：false。
   */
  Enabled?: boolean
}

/**
 * AddExistedInstances返回参数结构体
 */
export interface AddExistedInstancesResponse {
  /**
   * 失败的节点ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  FailedInstanceIds?: Array<string>
  /**
   * 成功的节点ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  SuccInstanceIds?: Array<string>
  /**
   * 超时未返回出来节点的ID(可能失败，也可能成功)
注意：此字段可能返回 null，表示取不到有效值。
   */
  TimeoutInstanceIds?: Array<string>
  /**
   * 失败的节点的失败原因
注意：此字段可能返回 null，表示取不到有效值。
   */
  FailedReasons?: Array<string>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * RestartEKSContainerInstances返回参数结构体
 */
export interface RestartEKSContainerInstancesResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DisableClusterDeletionProtection返回参数结构体
 */
export interface DisableClusterDeletionProtectionResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * EnableVpcCniNetworkType请求参数结构体
 */
export interface EnableVpcCniNetworkTypeRequest {
  /**
   * 集群ID
   */
  ClusterId: string
  /**
   * 开启vpc-cni的模式，tke-route-eni开启的是策略路由模式，tke-direct-eni开启的是独立网卡模式
   */
  VpcCniType: string
  /**
   * 是否开启固定IP模式
   */
  EnableStaticIp: boolean
  /**
   * 使用的容器子网
   */
  Subnets: Array<string>
  /**
   * 在固定IP模式下，Pod销毁后退还IP的时间，传参必须大于300；不传默认IP永不销毁。
   */
  ExpiredSeconds?: number
  /**
   * 是否同步添加 vpc 网段到 ip-masq-agent-config 的 NonMasqueradeCIDRs 字段，默认 false 会同步添加
   */
  SkipAddingNonMasqueradeCIDRs?: boolean
}

/**
 * EKS Instance Container容器
 */
export interface Container {
  /**
   * 镜像
   */
  Image: string
  /**
   * 容器名
   */
  Name: string
  /**
   * 容器启动命令
   */
  Commands?: Array<string>
  /**
   * 容器启动参数
   */
  Args?: Array<string>
  /**
   * 容器内操作系统的环境变量
   */
  EnvironmentVars?: Array<EnvironmentVariable>
  /**
   * CPU，制改容器最多可使用的核数，该值不可超过容器实例的总核数。单位：核。
   */
  Cpu?: number
  /**
   * 内存，限制该容器最多可使用的内存值，该值不可超过容器实例的总内存值。单位：GiB
   */
  Memory?: number
  /**
   * 数据卷挂载信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  VolumeMounts?: Array<VolumeMount>
  /**
   * 当前状态
注意：此字段可能返回 null，表示取不到有效值。
   */
  CurrentState?: ContainerState
  /**
   * 重启次数
注意：此字段可能返回 null，表示取不到有效值。
   */
  RestartCount?: number
  /**
   * 容器工作目录
注意：此字段可能返回 null，表示取不到有效值。
   */
  WorkingDir?: string
  /**
   * 存活探针
注意：此字段可能返回 null，表示取不到有效值。
   */
  LivenessProbe?: LivenessOrReadinessProbe
  /**
   * 就绪探针
注意：此字段可能返回 null，表示取不到有效值。
   */
  ReadinessProbe?: LivenessOrReadinessProbe
  /**
   * Gpu限制
注意：此字段可能返回 null，表示取不到有效值。
   */
  GpuLimit?: number
  /**
   * 容器的安全上下文
注意：此字段可能返回 null，表示取不到有效值。
   */
  SecurityContext?: SecurityContext
}

/**
 * CreateClusterEndpoint请求参数结构体
 */
export interface CreateClusterEndpointRequest {
  /**
   * 集群ID
   */
  ClusterId: string
  /**
   * 集群端口所在的子网ID  (仅在开启非外网访问时需要填，必须为集群所在VPC内的子网)
   */
  SubnetId?: string
  /**
   * 是否为外网访问（TRUE 外网访问 FALSE 内网访问，默认值： FALSE）
   */
  IsExtranet?: boolean
  /**
   * 设置域名
   */
  Domain?: string
  /**
   * 使用的安全组，只有外网访问需要传递（开启外网访问且不使用已有clb时必传）
   */
  SecurityGroup?: string
  /**
   * 创建lb参数，只有外网访问需要设置，是一个json格式化后的字符串：{"InternetAccessible":{"InternetChargeType":"TRAFFIC_POSTPAID_BY_HOUR","InternetMaxBandwidthOut":200},"VipIsp":"","BandwidthPackageId":""}。
各个参数意义：
InternetAccessible.InternetChargeType含义：TRAFFIC_POSTPAID_BY_HOUR按流量按小时后计费;BANDWIDTH_POSTPAID_BY_HOUR 按带宽按小时后计费;InternetAccessible.BANDWIDTH_PACKAGE 按带宽包计费。
InternetMaxBandwidthOut含义：最大出带宽，单位Mbps，范围支持0到2048，默认值10。
VipIsp含义：CMCC | CTCC | CUCC，分别对应 移动 | 电信 | 联通，如果不指定本参数，则默认使用BGP。可通过 DescribeSingleIsp 接口查询一个地域所支持的Isp。如果指定运营商，则网络计费式只能使用按带宽包计费BANDWIDTH_PACKAGE。
BandwidthPackageId含义：带宽包ID，指定此参数时，网络计费方式InternetAccessible.InternetChargeType只支持按带宽包计费BANDWIDTH_PACKAGE。
   */
  ExtensiveParameters?: string
}

/**
 * DeletePrometheusClusterAgent返回参数结构体
 */
export interface DeletePrometheusClusterAgentResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribePrometheusInstance返回参数结构体
 */
export interface DescribePrometheusInstanceResponse {
  /**
   * 实例id
   */
  InstanceId?: string
  /**
   * 实例名称
   */
  Name?: string
  /**
   * 私有网络id
   */
  VpcId?: string
  /**
   * 子网id
   */
  SubnetId?: string
  /**
   * cos桶名称
   */
  COSBucket?: string
  /**
   * 数据查询地址
   */
  QueryAddress?: string
  /**
   * 实例中grafana相关的信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  Grafana?: PrometheusGrafanaInfo
  /**
   * 用户自定义alertmanager
注意：此字段可能返回 null，表示取不到有效值。
   */
  AlertManagerUrl?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * cloudrun安全特性能力
 */
export interface Capabilities {
  /**
   * 启用安全能力项列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  Add?: Array<string>
  /**
   * 禁用安全能力向列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  Drop?: Array<string>
}

/**
 * UpdateTKEEdgeCluster请求参数结构体
 */
export interface UpdateTKEEdgeClusterRequest {
  /**
   * 边缘计算集群ID
   */
  ClusterId: string
  /**
   * 边缘计算集群名称
   */
  ClusterName?: string
  /**
   * 边缘计算集群描述信息
   */
  ClusterDesc?: string
  /**
   * 边缘计算集群的pod cidr
   */
  PodCIDR?: string
  /**
   * 边缘计算集群的service cidr
   */
  ServiceCIDR?: string
  /**
   * 边缘计算集群公网访问LB信息
   */
  PublicLB?: EdgeClusterPublicLB
  /**
   * 边缘计算集群内网访问LB信息
   */
  InternalLB?: EdgeClusterInternalLB
  /**
   * 边缘计算集群的CoreDns部署信息
   */
  CoreDns?: string
  /**
   * 边缘计算集群的健康检查多地域部署信息
   */
  HealthRegion?: string
  /**
   * 边缘计算集群的健康检查部署信息
   */
  Health?: string
  /**
   * 边缘计算集群的GridDaemon部署信息
   */
  GridDaemon?: string
  /**
   * 边缘集群开启自动升配
   */
  AutoUpgradeClusterLevel?: boolean
  /**
   * 边缘集群的集群规模
   */
  ClusterLevel?: string
}

/**
 * DescribeOpenPolicyList返回参数结构体
 */
export interface DescribeOpenPolicyListResponse {
  /**
   * 策略信息列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  OpenPolicyInfoList?: Array<OpenPolicyInfo>
  /**
   * 集群内是否安装了gatekeeper addon
   */
  GatekeeperStatus?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateClusterInstances返回参数结构体
 */
export interface CreateClusterInstancesResponse {
  /**
   * 节点实例ID
   */
  InstanceIdSet?: Array<string>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteReservedInstances返回参数结构体
 */
export interface DeleteReservedInstancesResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeLogSwitches返回参数结构体
 */
export interface DescribeLogSwitchesResponse {
  /**
   * 集群日志开关集合
注意：此字段可能返回 null，表示取不到有效值。
   */
  SwitchSet?: Array<Switch>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyClusterVirtualNodePool返回参数结构体
 */
export interface ModifyClusterVirtualNodePoolResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 超级节点上的资源统计
 */
export interface SuperNodeResource {
  /**
   * 节点名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  NodeName?: string
  /**
   * 节点上的资源总数
注意：此字段可能返回 null，表示取不到有效值。
   */
  Num?: number
  /**
   * 节点上的总核数
注意：此字段可能返回 null，表示取不到有效值。
   */
  Cpu?: number
  /**
   * 节点上的总内存数
注意：此字段可能返回 null，表示取不到有效值。
   */
  Memory?: number
  /**
   * 节点上的总 GPU 卡数
注意：此字段可能返回 null，表示取不到有效值。
   */
  Gpu?: number
}

/**
 * 节点升级过程中集群当前状态
 */
export interface InstanceUpgradeClusterStatus {
  /**
   * pod总数
   */
  PodTotal?: number
  /**
   * NotReady pod总数
   */
  NotReadyPod?: number
}

/**
 * DescribeClusterRoutes请求参数结构体
 */
export interface DescribeClusterRoutesRequest {
  /**
   * 路由表名称。
   */
  RouteTableName: string
  /**
   * 过滤条件,当前只支持按照单个条件GatewayIP进行过滤（可选）
   */
  Filters?: Array<Filter>
}

/**
 * DeleteECMInstances请求参数结构体
 */
export interface DeleteECMInstancesRequest {
  /**
   * 集群ID
   */
  ClusterID: string
  /**
   * ecm id集合
   */
  EcmIdSet: Array<string>
}

/**
 * 托管集群等级属性
 */
export interface ClusterLevelAttribute {
  /**
   * 集群等级
   */
  Name?: string
  /**
   * 等级名称
   */
  Alias?: string
  /**
   * 节点数量
   */
  NodeCount?: number
  /**
   * Pod数量
   */
  PodCount?: number
  /**
   * Configmap数量
   */
  ConfigMapCount?: number
  /**
   * ReplicaSets数量
   */
  RSCount?: number
  /**
   * CRD数量
   */
  CRDCount?: number
  /**
   * 是否启用
   */
  Enable?: boolean
  /**
   * 其他资源数量
注意：此字段可能返回 null，表示取不到有效值。
   */
  OtherCount?: number
}

/**
 * Pod计费信息
 */
export interface PodChargeInfo {
  /**
   * Pod计费开始时间
   */
  StartTime?: string
  /**
   * Pod的Uid
   */
  Uid?: string
  /**
   * Pod的CPU
   */
  Cpu?: number
  /**
   * Pod的内存
   */
  Memory?: number
  /**
   * Pod类型：intel、amd、v100、t4、a10\*gnv4、a10\*gnv4v等。
   */
  Type?: string
  /**
   * Pod是GPU时，表示GPU卡数
注意：此字段可能返回 null，表示取不到有效值。
   */
  Gpu?: string
  /**
   * 计费类型
PREPAID：Pod调度到包月超级节点
POSTPAID_BY_HOUR：按量计费
RESERVED_INSTANCE：上个周期被预留券抵扣
SPOT：竞价实例
TPOD：特惠实例
   */
  ChargeType?: string
  /**
   * 命名空间
   */
  Namespace?: string
  /**
   * Pod名称
   */
  Name?: string
}

/**
 * RemoveNodeFromNodePool返回参数结构体
 */
export interface RemoveNodeFromNodePoolResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * SetNodePoolNodeProtection请求参数结构体
 */
export interface SetNodePoolNodeProtectionRequest {
  /**
   * 集群id
   */
  ClusterId: string
  /**
   * 节点池id
   */
  NodePoolId: string
  /**
   * 节点id
   */
  InstanceIds: Array<string>
  /**
   * 节点是否需要移出保护
   */
  ProtectedFromScaleIn: boolean
}

/**
 * EnableClusterAudit请求参数结构体
 */
export interface EnableClusterAuditRequest {
  /**
   * 集群ID
   */
  ClusterId: string
  /**
   * CLS日志集ID
   */
  LogsetId?: string
  /**
   * CLS日志主题ID
   */
  TopicId?: string
  /**
   * topic所在region，默认为集群当前region
   */
  TopicRegion?: string
}

/**
 * CreateClusterRouteTable请求参数结构体
 */
export interface CreateClusterRouteTableRequest {
  /**
   * 路由表名称，一般为集群ID
   */
  RouteTableName: string
  /**
   * 路由表CIDR
   */
  RouteTableCidrBlock: string
  /**
   * 路由表绑定的VPC
   */
  VpcId: string
  /**
   * 是否忽略CIDR与 vpc 路由表的冲突， 0 表示不忽略，1表示忽略。默认不忽略
   */
  IgnoreClusterCidrConflict?: number
}

/**
 * DisableClusterAudit返回参数结构体
 */
export interface DisableClusterAuditResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeClusterEndpoints返回参数结构体
 */
export interface DescribeClusterEndpointsResponse {
  /**
   * 集群APIServer的CA证书
   */
  CertificationAuthority?: string
  /**
   * 集群APIServer的外网访问地址
   */
  ClusterExternalEndpoint?: string
  /**
   * 集群APIServer的内网访问地址
   */
  ClusterIntranetEndpoint?: string
  /**
   * 集群APIServer的域名
注意：此字段可能返回 null，表示取不到有效值。
   */
  ClusterDomain?: string
  /**
   * 集群APIServer的外网访问ACL列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  ClusterExternalACL?: Array<string>
  /**
   * 外网域名
注意：此字段可能返回 null，表示取不到有效值。
   */
  ClusterExternalDomain?: string
  /**
   * 内网域名
注意：此字段可能返回 null，表示取不到有效值。
   */
  ClusterIntranetDomain?: string
  /**
   * 外网安全组
注意：此字段可能返回 null，表示取不到有效值。
   */
  SecurityGroup?: string
  /**
   * 内网访问所属子网
注意：此字段可能返回 null，表示取不到有效值。
   */
  ClusterIntranetSubnetId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * RemoveNodeFromNodePool请求参数结构体
 */
export interface RemoveNodeFromNodePoolRequest {
  /**
   * 集群id
   */
  ClusterId: string
  /**
   * 节点池id
   */
  NodePoolId: string
  /**
   * 节点id列表，一次最多支持100台
   */
  InstanceIds: Array<string>
}

/**
 * DescribeEncryptionStatus返回参数结构体
 */
export interface DescribeEncryptionStatusResponse {
  /**
   * 加密状态
   */
  Status?: string
  /**
   * 加密错误信息
   */
  ErrorMsg?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeClusterLevelChangeRecords请求参数结构体
 */
export interface DescribeClusterLevelChangeRecordsRequest {
  /**
   * 集群ID
   */
  ClusterID: string
  /**
   * 开始时间
   */
  StartAt?: string
  /**
   * 结束时间
   */
  EndAt?: string
  /**
   * 偏移量,默认0
   */
  Offset?: number
  /**
   * 最大输出条数，默认20
   */
  Limit?: number
}

/**
 * UpdateClusterVersion返回参数结构体
 */
export interface UpdateClusterVersionResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 节点升级检查项结果
 */
export interface InstanceUpgradePreCheckResultItem {
  /**
   * 工作负载的命名空间
   */
  Namespace?: string
  /**
   * 工作负载类型
   */
  WorkLoadKind?: string
  /**
   * 工作负载名称
   */
  WorkLoadName?: string
  /**
   * 驱逐节点前工作负载running的pod数目
   */
  Before?: number
  /**
   * 驱逐节点后工作负载running的pod数目
   */
  After?: number
  /**
   * 工作负载在本节点上的pod列表
   */
  Pods?: Array<string>
}

/**
 * DeleteClusterNodePool返回参数结构体
 */
export interface DeleteClusterNodePoolResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteImageCaches请求参数结构体
 */
export interface DeleteImageCachesRequest {
  /**
   * 镜像缓存ID数组
   */
  ImageCacheIds: Array<string>
}

/**
 * 应用市场自定义参数
 */
export interface ReleaseValues {
  /**
   * 自定义参数原始值
   */
  RawOriginal: string
  /**
   * 自定义参数值类型
   */
  ValuesType: string
}

/**
 * CreateClusterNodePool返回参数结构体
 */
export interface CreateClusterNodePoolResponse {
  /**
   * 节点池id
   */
  NodePoolId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 过滤器
 */
export interface Filter {
  /**
   * 属性名称, 若存在多个Filter时，Filter间的关系为逻辑与（AND）关系。
   */
  Name: string
  /**
   * 属性值, 若同一个Filter存在多个Values，同一Filter下Values间的关系为逻辑或（OR）关系。
   */
  Values: Array<string>
}

/**
 * kms加密参数
 */
export interface KMSConfiguration {
  /**
   * kms id
   */
  KeyId?: string
  /**
   * kms 地域
   */
  KmsRegion?: string
}

/**
 * UpdateTKEEdgeCluster返回参数结构体
 */
export interface UpdateTKEEdgeClusterResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 用以帮助用户自动创建EIP的配置
 */
export interface EipAttribute {
  /**
   * 容器实例删除后，EIP是否释放。
Never表示不释放，其他任意值（包括空字符串）表示释放。
   */
  DeletePolicy: string
  /**
   * EIP线路类型。默认值：BGP。
已开通静态单线IP白名单的用户，可选值：
CMCC：中国移动
CTCC：中国电信
CUCC：中国联通
注意：仅部分地域支持静态单线IP。
注意：此字段可能返回 null，表示取不到有效值。
   */
  InternetServiceProvider?: string
  /**
   * EIP出带宽上限，单位：Mbps。
注意：此字段可能返回 null，表示取不到有效值。
   */
  InternetMaxBandwidthOut?: number
}

/**
 * UpdateAddon返回参数结构体
 */
export interface UpdateAddonResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeEKSContainerInstances请求参数结构体
 */
export interface DescribeEKSContainerInstancesRequest {
  /**
   * 限定此次返回资源的数量。如果不设定，默认返回20，最大不能超过100
   */
  Limit?: number
  /**
   * 偏移量,默认0
   */
  Offset?: number
  /**
   * 过滤条件，可条件：
(1)实例名称
KeyName: eks-ci-name
类型：String

(2)实例状态
KeyName: status
类型：String
可选值："Pending", "Running", "Succeeded", "Failed"

(3)内网ip
KeyName: private-ip
类型：String

(4)EIP地址
KeyName: eip-address
类型：String

(5)VpcId
KeyName: vpc-id
类型：String
   */
  Filters?: Array<Filter>
  /**
   * 容器实例 ID 数组
   */
  EksCiIds?: Array<string>
}

/**
 * DescribeClusterControllers请求参数结构体
 */
export interface DescribeClusterControllersRequest {
  /**
   * 集群ID
   */
  ClusterId: string
}

/**
 * ModifyPrometheusAlertRule请求参数结构体
 */
export interface ModifyPrometheusAlertRuleRequest {
  /**
   * 实例id
   */
  InstanceId: string
  /**
   * 告警配置
   */
  AlertRule: PrometheusAlertRuleDetail
}

/**
 * DescribeClusterSecurity返回参数结构体
 */
export interface DescribeClusterSecurityResponse {
  /**
   * 集群的账号名称
   */
  UserName?: string
  /**
   * 集群的访问密码
   */
  Password?: string
  /**
   * 集群访问CA证书
   */
  CertificationAuthority?: string
  /**
   * 集群访问的地址
   */
  ClusterExternalEndpoint?: string
  /**
   * 集群访问的域名
   */
  Domain?: string
  /**
   * 集群Endpoint地址
   */
  PgwEndpoint?: string
  /**
   * 集群访问策略组
注意：此字段可能返回 null，表示取不到有效值。
   */
  SecurityPolicy?: Array<string>
  /**
   * 集群Kubeconfig文件
注意：此字段可能返回 null，表示取不到有效值。
   */
  Kubeconfig?: string
  /**
   * 集群JnsGw的访问地址
注意：此字段可能返回 null，表示取不到有效值。
   */
  JnsGwEndpoint?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 集群路由对象
 */
export interface RouteInfo {
  /**
   * 路由表名称。
   */
  RouteTableName?: string
  /**
   * 目的端CIDR。
   */
  DestinationCidrBlock?: string
  /**
   * 下一跳地址。
   */
  GatewayIp?: string
}

/**
 * ModifyNodePoolDesiredCapacityAboutAsg返回参数结构体
 */
export interface ModifyNodePoolDesiredCapacityAboutAsgResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeReservedInstanceUtilizationRate请求参数结构体
 */
export interface DescribeReservedInstanceUtilizationRateRequest {
  /**
   * 可用区
   */
  Zone?: string
  /**
   * 集群 ID
   */
  ClusterId?: string
  /**
   *  节点名称
   */
  NodeName?: string
}

/**
 * CreateClusterRoute请求参数结构体
 */
export interface CreateClusterRouteRequest {
  /**
   * 路由表名称。
   */
  RouteTableName: string
  /**
   * 目的节点的 PodCIDR
   */
  DestinationCidrBlock: string
  /**
   * 下一跳地址，即目的节点的内网 IP 地址
   */
  GatewayIp: string
}

/**
 * DescribeReservedInstanceUtilizationRate返回参数结构体
 */
export interface DescribeReservedInstanceUtilizationRateResponse {
  /**
   * 预留券使用率
   */
  UtilizationRateSet?: Array<ReservedInstanceUtilizationRate>
  /**
   * 按量计费的 Pod 总数
   */
  PodNum?: number
  /**
   *  Pod 被预留券抵扣的抵扣率
   */
  PodRate?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyClusterEndpointSP请求参数结构体
 */
export interface ModifyClusterEndpointSPRequest {
  /**
   * 集群ID
   */
  ClusterId: string
  /**
   * 安全策略放通单个IP或CIDR(例如: "192.168.1.0/24",默认为拒绝所有)
   */
  SecurityPolicies?: Array<string>
  /**
   * 修改外网访问安全组
   */
  SecurityGroup?: string
}

/**
 * DescribePrometheusConfig返回参数结构体
 */
export interface DescribePrometheusConfigResponse {
  /**
   * 全局配置
   */
  Config?: string
  /**
   * ServiceMonitor配置
   */
  ServiceMonitors?: Array<PrometheusConfigItem>
  /**
   * PodMonitor配置
   */
  PodMonitors?: Array<PrometheusConfigItem>
  /**
   * 原生Job
   */
  RawJobs?: Array<PrometheusConfigItem>
  /**
   * Probe配置
   */
  Probes?: Array<PrometheusConfigItem>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteClusterEndpoint返回参数结构体
 */
export interface DeleteClusterEndpointResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 云原生Prometheus模板可修改项
 */
export interface PrometheusTemplateModify {
  /**
   * 修改名称
   */
  Name?: string
  /**
   * 修改描述
注意：此字段可能返回 null，表示取不到有效值。
   */
  Describe?: string
  /**
   * 修改内容，只有当模板类型是Alert时生效
注意：此字段可能返回 null，表示取不到有效值。
   */
  AlertRules?: Array<PrometheusAlertRule>
  /**
   * 当Level为instance时有效，
模板中的聚合规则列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  RecordRules?: Array<PrometheusConfigItem>
  /**
   * 当Level为cluster时有效，
模板中的ServiceMonitor规则列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  ServiceMonitors?: Array<PrometheusConfigItem>
  /**
   * 当Level为cluster时有效，
模板中的PodMonitors规则列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  PodMonitors?: Array<PrometheusConfigItem>
  /**
   * 当Level为cluster时有效，
模板中的RawJobs规则列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  RawJobs?: Array<PrometheusConfigItem>
  /**
   * 修改内容，只有当模板类型是Alert时生效
注意：此字段可能返回 null，表示取不到有效值。
   */
  AlertDetailRules?: Array<PrometheusAlertRuleDetail>
}

/**
 * RollbackClusterRelease返回参数结构体
 */
export interface RollbackClusterReleaseResponse {
  /**
   * 应用详情
注意：此字段可能返回 null，表示取不到有效值。
   */
  Release: PendingRelease
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 集群版本信息
 */
export interface ClusterVersion {
  /**
   * 集群ID
   */
  ClusterId?: string
  /**
   * 集群主版本号列表，例如1.18.4
   */
  Versions?: Array<string>
}

/**
 * 某个节点的升级进度
 */
export interface InstanceUpgradeProgressItem {
  /**
   * 节点instanceID
   */
  InstanceID?: string
  /**
   * 任务生命周期
process 运行中
paused 已停止
pauing 正在停止
done  已完成
timeout 已超时
aborted 已取消
pending 还未开始
   */
  LifeState?: string
  /**
   * 升级开始时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  StartAt?: string
  /**
   * 升级结束时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  EndAt?: string
  /**
   * 升级前检查结果
   */
  CheckResult?: InstanceUpgradePreCheckResult
  /**
   * 升级步骤详情
   */
  Detail?: Array<TaskStepInfo>
}

/**
 * DescribeClusterVirtualNodePools请求参数结构体
 */
export interface DescribeClusterVirtualNodePoolsRequest {
  /**
   * 集群ID
   */
  ClusterId: string
}

/**
 * DescribePrometheusRecordRules返回参数结构体
 */
export interface DescribePrometheusRecordRulesResponse {
  /**
   * 聚合规则
   */
  Records?: Array<PrometheusRecordRuleYamlItem>
  /**
   * 总数
   */
  Total?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 集群高级配置
 */
export interface ClusterAdvancedSettings {
  /**
   * 是否启用IPVS
   */
  IPVS?: boolean
  /**
   * 是否启用集群节点自动扩缩容(创建集群流程不支持开启此功能)
   */
  AsEnabled?: boolean
  /**
   * 集群使用的runtime类型，包括"docker"和"containerd"两种类型，默认为"docker"
   */
  ContainerRuntime?: string
  /**
   * 集群中节点NodeName类型（包括 hostname,lan-ip两种形式，默认为lan-ip。如果开启了hostname模式，创建节点时需要设置HostName参数，并且InstanceName需要和HostName一致）
   */
  NodeNameType?: string
  /**
   * 集群自定义参数
   */
  ExtraArgs?: ClusterExtraArgs
  /**
   * 集群网络类型（包括GR(全局路由)和VPC-CNI两种模式，默认为GR。
   */
  NetworkType?: string
  /**
   * 集群VPC-CNI模式是否为非固定IP，默认: FALSE 固定IP。
   */
  IsNonStaticIpMode?: boolean
  /**
   * 是否启用集群删除保护
   */
  DeletionProtection?: boolean
  /**
   * 集群的网络代理模型，目前tke集群支持的网络代理模式有三种：iptables,ipvs,ipvs-bpf，此参数仅在使用ipvs-bpf模式时使用，三种网络模式的参数设置关系如下：
iptables模式：IPVS和KubeProxyMode都不设置
ipvs模式: 设置IPVS为true, KubeProxyMode不设置
ipvs-bpf模式: 设置KubeProxyMode为kube-proxy-bpf
使用ipvs-bpf的网络模式需要满足以下条件：
1. 集群版本必须为1.14及以上；
2. 系统镜像必须是: Tencent Linux 2.4；
   */
  KubeProxyMode?: string
  /**
   * 是否开启审计开关
   */
  AuditEnabled?: boolean
  /**
   * 审计日志上传到的logset日志集
   */
  AuditLogsetId?: string
  /**
   * 审计日志上传到的topic
   */
  AuditLogTopicId?: string
  /**
   * 区分共享网卡多IP模式和独立网卡模式，共享网卡多 IP 模式填写"tke-route-eni"，独立网卡模式填写"tke-direct-eni"，默认为共享网卡模式
   */
  VpcCniType?: string
  /**
   * 运行时版本
   */
  RuntimeVersion?: string
  /**
   * 是否开节点podCIDR大小的自定义模式
   */
  EnableCustomizedPodCIDR?: boolean
  /**
   * 自定义模式下的基础pod数量
   */
  BasePodNumber?: number
  /**
   * 启用 CiliumMode 的模式，空值表示不启用，“clusterIP” 表示启用 Cilium 支持 ClusterIP
   */
  CiliumMode?: string
  /**
   * 集群VPC-CNI模式下是否是双栈集群，默认false，表明非双栈集群。
   */
  IsDualStack?: boolean
  /**
   * 是否开启QGPU共享
   */
  QGPUShareEnable?: boolean
}

/**
 * DescribePodsBySpec返回参数结构体
 */
export interface DescribePodsBySpecResponse {
  /**
   * Pod 总数
   */
  TotalCount?: number
  /**
   * Pod 节点信息
   */
  PodSet?: Array<PodNodeInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * cloudrun安全特性
 */
export interface SecurityContext {
  /**
   * 安全能力清单
注意：此字段可能返回 null，表示取不到有效值。
   */
  Capabilities?: Capabilities
}

/**
 * 自定义DNS配置
 */
export interface DNSConfig {
  /**
   * DNS 服务器IP地址列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  Nameservers?: Array<string>
  /**
   * DNS搜索域列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  Searches?: Array<string>
  /**
   * 对象选项列表，每个对象由name和value（可选）构成
注意：此字段可能返回 null，表示取不到有效值。
   */
  Options?: Array<DNSConfigOption>
}

/**
 * ModifyPrometheusConfig返回参数结构体
 */
export interface ModifyPrometheusConfigResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeTKEEdgeExternalKubeconfig请求参数结构体
 */
export interface DescribeTKEEdgeExternalKubeconfigRequest {
  /**
   * 集群id
   */
  ClusterId: string
}

/**
 * CreatePrometheusAlertPolicy返回参数结构体
 */
export interface CreatePrometheusAlertPolicyResponse {
  /**
   * 告警id
   */
  Id?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DNS配置选项
 */
export interface DNSConfigOption {
  /**
   * 配置项名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  Name: string
  /**
   * 项值
注意：此字段可能返回 null，表示取不到有效值。
   */
  Value: string
}

/**
 * DescribeClusterVirtualNode请求参数结构体
 */
export interface DescribeClusterVirtualNodeRequest {
  /**
   * 集群ID
   */
  ClusterId: string
  /**
   * 节点池ID
   */
  NodePoolId?: string
  /**
   * 节点名称
   */
  NodeNames?: Array<string>
}

/**
 * DescribeClusterReleases返回参数结构体
 */
export interface DescribeClusterReleasesResponse {
  /**
   * 数量限制
注意：此字段可能返回 null，表示取不到有效值。
   */
  Limit?: number
  /**
   * 偏移量
注意：此字段可能返回 null，表示取不到有效值。
   */
  Offset?: number
  /**
   * 已安装应用列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  ReleaseSet?: Array<Release>
  /**
   * 已安装应用总数量
注意：此字段可能返回 null，表示取不到有效值。
   */
  Total?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * AddNodeToNodePool请求参数结构体
 */
export interface AddNodeToNodePoolRequest {
  /**
   * 集群id
   */
  ClusterId: string
  /**
   * 节点池id
   */
  NodePoolId: string
  /**
   * 节点id
   */
  InstanceIds: Array<string>
}

/**
 * CreateReservedInstances请求参数结构体
 */
export interface CreateReservedInstancesRequest {
  /**
   * 预留券实例规格。
   */
  ReservedInstanceSpec: ReservedInstanceSpec
  /**
   * 购买实例数量，一次最大购买数量为300。
   */
  InstanceCount: number
  /**
   * 预付费模式，即包年包月相关参数设置。通过该参数可以指定包年包月实例的购买时长、是否设置自动续费等属性。
   */
  InstanceChargePrepaid: InstanceChargePrepaid
  /**
   * 预留券名称。
   */
  InstanceName?: string
  /**
   * 用于保证请求幂等性的字符串。该字符串由客户生成，需保证不同请求之间唯一，最大值不超过64个ASCII字符。若不指定该参数，则无法保证请求的幂等性。
   */
  ClientToken?: string
}

/**
 * 节点池描述
 */
export interface NodePool {
  /**
   * NodePoolId 资源池id
   */
  NodePoolId?: string
  /**
   * Name 资源池名称
   */
  Name?: string
  /**
   * ClusterInstanceId 集群实例id
   */
  ClusterInstanceId?: string
  /**
   * LifeState 状态，当前节点池生命周期状态包括：creating，normal，updating，deleting，deleted
   */
  LifeState?: string
  /**
   * LaunchConfigurationId 配置
   */
  LaunchConfigurationId?: string
  /**
   * AutoscalingGroupId 分组id
   */
  AutoscalingGroupId?: string
  /**
   * Labels 标签
   */
  Labels?: Array<Label>
  /**
   * Taints 污点标记
   */
  Taints?: Array<Taint>
  /**
   * 节点 Annotation 列表
   */
  Annotations?: Array<AnnotationValue>
  /**
   * NodeCountSummary 节点列表
   */
  NodeCountSummary?: NodeCountSummary
  /**
   * 状态信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  AutoscalingGroupStatus?: string
  /**
   * 最大节点数量
注意：此字段可能返回 null，表示取不到有效值。
   */
  MaxNodesNum?: number
  /**
   * 最小节点数量
注意：此字段可能返回 null，表示取不到有效值。
   */
  MinNodesNum?: number
  /**
   * 期望的节点数量
注意：此字段可能返回 null，表示取不到有效值。
   */
  DesiredNodesNum?: number
  /**
   * 运行时描述
注意：此字段可能返回 null，表示取不到有效值。
   */
  RuntimeConfig?: RuntimeConfig
  /**
   * 节点池osName
注意：此字段可能返回 null，表示取不到有效值。
   */
  NodePoolOs?: string
  /**
   * 容器的镜像版本，"DOCKER_CUSTOMIZE"(容器定制版),"GENERAL"(普通版本，默认值)
注意：此字段可能返回 null，表示取不到有效值。
   */
  OsCustomizeType?: string
  /**
   * 镜像id
注意：此字段可能返回 null，表示取不到有效值。
   */
  ImageId?: string
  /**
   * 集群属于节点podCIDR大小自定义模式时，节点池需要带上pod数量属性
注意：此字段可能返回 null，表示取不到有效值。
   */
  DesiredPodNum?: number
  /**
   * 用户自定义脚本
注意：此字段可能返回 null，表示取不到有效值。
   */
  UserScript?: string
  /**
   * 资源标签
注意：此字段可能返回 null，表示取不到有效值。
   */
  Tags?: Array<Tag>
  /**
   * 删除保护开关
注意：此字段可能返回 null，表示取不到有效值。
   */
  DeletionProtection?: boolean
  /**
   * 节点配置
注意：此字段可能返回 null，表示取不到有效值。
   */
  ExtraArgs?: InstanceExtraArgs
  /**
   * GPU驱动相关参数
注意：此字段可能返回 null，表示取不到有效值。
   */
  GPUArgs?: GPUArgs
  /**
   * dockerd --graph 指定值, 默认为 /var/lib/docker
注意：此字段可能返回 null，表示取不到有效值。
   */
  DockerGraphPath?: string
  /**
   * 多盘数据盘挂载信息：新建节点时请确保购买CVM的参数传递了购买多个数据盘的信息，如CreateClusterInstances API的RunInstancesPara下的DataDisks也需要设置购买多个数据盘, 具体可以参考CreateClusterInstances接口的添加集群节点(多块数据盘)样例；添加已有节点时，请确保填写的分区信息在节点上真实存在
注意：此字段可能返回 null，表示取不到有效值。
   */
  DataDisks?: Array<DataDisk>
  /**
   * 是否不可调度
注意：此字段可能返回 null，表示取不到有效值。
   */
  Unschedulable?: number
  /**
   * 用户自定义脚本,在UserScript前执行
注意：此字段可能返回 null，表示取不到有效值。
   */
  PreStartUserScript?: string
}

/**
 * ModifyPrometheusGlobalNotification返回参数结构体
 */
export interface ModifyPrometheusGlobalNotificationResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * UninstallClusterRelease请求参数结构体
 */
export interface UninstallClusterReleaseRequest {
  /**
   * 集群ID
   */
  ClusterId: string
  /**
   * 应用名称
   */
  Name: string
  /**
   * 应用命名空间
   */
  Namespace: string
  /**
   * 集群类型
   */
  ClusterType?: string
}

/**
 * ModifyPrometheusTemp返回参数结构体
 */
export interface ModifyPrometheusTempResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 虚拟节点
 */
export interface VirtualNode {
  /**
   * 虚拟节点名称
   */
  Name?: string
  /**
   * 虚拟节点所属子网
   */
  SubnetId?: string
  /**
   * 虚拟节点状态
   */
  Phase?: string
  /**
   * 创建时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  CreatedTime?: string
}

/**
 * Pod所在的节点信息
 */
export interface PodNodeInfo {
  /**
   * 集群 ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  ClusterId?: string
  /**
   *  节点名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  NodeName?: string
  /**
   * 可用区
注意：此字段可能返回 null，表示取不到有效值。
   */
  Zone?: string
  /**
   * 命名空间
注意：此字段可能返回 null，表示取不到有效值。
   */
  Namespace?: string
  /**
   *  Pod 名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  Name?: string
}

/**
 * DescribePodChargeInfo请求参数结构体
 */
export interface DescribePodChargeInfoRequest {
  /**
   * 集群ID
   */
  ClusterId: string
  /**
   * 命名空间
   */
  Namespace?: string
  /**
   * Pod名称
   */
  Name?: string
  /**
   * Pod的Uid
   */
  Uids?: Array<string>
}

/**
 * ForwardTKEEdgeApplicationRequestV3返回参数结构体
 */
export interface ForwardTKEEdgeApplicationRequestV3Response {
  /**
   * 请求集群addon后返回的数据
   */
  ResponseBody?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateClusterVirtualNodePool请求参数结构体
 */
export interface CreateClusterVirtualNodePoolRequest {
  /**
   * 集群Id
   */
  ClusterId: string
  /**
   * 节点池名称
   */
  Name: string
  /**
   * 子网ID列表
   */
  SubnetIds?: Array<string>
  /**
   * 安全组ID列表
   */
  SecurityGroupIds?: Array<string>
  /**
   * 虚拟节点label
   */
  Labels?: Array<Label>
  /**
   * 虚拟节点taint
   */
  Taints?: Array<Taint>
  /**
   * 节点列表
   */
  VirtualNodes?: Array<VirtualNodeSpec>
  /**
   * 删除保护开关
   */
  DeletionProtection?: boolean
  /**
   * 节点池操作系统：
- linux（默认）
- windows
   */
  OS?: string
}

/**
 * ModifyPrometheusConfig请求参数结构体
 */
export interface ModifyPrometheusConfigRequest {
  /**
   * 实例id
   */
  InstanceId: string
  /**
   * 集群类型
   */
  ClusterType: string
  /**
   * 集群id
   */
  ClusterId: string
  /**
   * ServiceMonitors配置
   */
  ServiceMonitors?: Array<PrometheusConfigItem>
  /**
   * PodMonitors配置
   */
  PodMonitors?: Array<PrometheusConfigItem>
  /**
   * prometheus原生Job配置
   */
  RawJobs?: Array<PrometheusConfigItem>
  /**
   * Probes 配置
   */
  Probes?: Array<PrometheusConfigItem>
}

/**
 * 集群关联的伸缩组最大实例数最小值实例数
 */
export interface AutoScalingGroupRange {
  /**
   * 伸缩组最小实例数
   */
  MinSize?: number
  /**
   * 伸缩组最大实例数
   */
  MaxSize?: number
}

/**
 * DescribePrometheusGlobalNotification请求参数结构体
 */
export interface DescribePrometheusGlobalNotificationRequest {
  /**
   * 实例ID
   */
  InstanceId: string
}

/**
 * 弹性容器集群公网访问负载均衡信息
 */
export interface ClusterPublicLB {
  /**
   * 是否开启公网访问LB
注意：此字段可能返回 null，表示取不到有效值。
   */
  Enabled: boolean
  /**
   * 允许访问的来源CIDR列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  AllowFromCidrs?: Array<string>
  /**
   * 安全策略放通单个IP或CIDR(例如: "192.168.1.0/24",默认为拒绝所有)
注意：此字段可能返回 null，表示取不到有效值。
   */
  SecurityPolicies?: Array<string>
  /**
   * 外网访问相关的扩展参数，格式为json
注意：此字段可能返回 null，表示取不到有效值。
   */
  ExtraParam?: string
  /**
   * 新内外网功能，需要传递安全组
注意：此字段可能返回 null，表示取不到有效值。
   */
  SecurityGroup?: string
}

/**
 * DescribePrometheusTemplateSync返回参数结构体
 */
export interface DescribePrometheusTemplateSyncResponse {
  /**
   * 同步目标详情
   */
  Targets?: Array<PrometheusTemplateSyncTarget>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateEksLogConfig返回参数结构体
 */
export interface CreateEksLogConfigResponse {
  /**
   * 日志采集topicid
注意：此字段可能返回 null，表示取不到有效值。
   */
  TopicId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyPrometheusTemplate返回参数结构体
 */
export interface ModifyPrometheusTemplateResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyPrometheusAlertPolicy返回参数结构体
 */
export interface ModifyPrometheusAlertPolicyResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 集群信息结构体
 */
export interface Cluster {
  /**
   * 集群ID
   */
  ClusterId?: string
  /**
   * 集群名称
   */
  ClusterName?: string
  /**
   * 集群描述
   */
  ClusterDescription?: string
  /**
   * 集群版本（默认值为1.10.5）
   */
  ClusterVersion?: string
  /**
   * 集群系统。centos7.2x86_64 或者 ubuntu16.04.1 LTSx86_64，默认取值为ubuntu16.04.1 LTSx86_64
   */
  ClusterOs?: string
  /**
   * 集群类型，托管集群：MANAGED_CLUSTER，独立集群：INDEPENDENT_CLUSTER。
   */
  ClusterType?: string
  /**
   * 集群网络相关参数
   */
  ClusterNetworkSettings?: ClusterNetworkSettings
  /**
   * 集群当前node数量
   */
  ClusterNodeNum?: number
  /**
   * 集群所属的项目ID
   */
  ProjectId?: number
  /**
   * 标签描述列表。
注意：此字段可能返回 null，表示取不到有效值。
   */
  TagSpecification?: Array<TagSpecification>
  /**
   * 集群状态 (Trading 集群开通中,Creating 创建中,Running 运行中,Deleting 删除中,Idling 闲置中,Recovering 唤醒中,Scaling 规模调整中,Upgrading 升级中,WaittingForConnect 等待注册,Trading 集群开通中,Isolated 欠费隔离中,Pause 集群升级暂停,NodeUpgrading 节点升级中,RuntimeUpgrading 节点运行时升级中,MasterScaling Master扩缩容中,ClusterLevelUpgrading 调整规格中,ResourceIsolate 隔离中,ResourceIsolated 已隔离,ResourceReverse 冲正中,Abnormal 异常)
   */
  ClusterStatus?: string
  /**
   * 集群属性(包括集群不同属性的MAP，属性字段包括NodeNameType (lan-ip模式和hostname 模式，默认无lan-ip模式))
注意：此字段可能返回 null，表示取不到有效值。
   */
  Property?: string
  /**
   * 集群当前master数量
   */
  ClusterMaterNodeNum?: number
  /**
   * 集群使用镜像id
注意：此字段可能返回 null，表示取不到有效值。
   */
  ImageId?: string
  /**
   * OsCustomizeType 系统定制类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  OsCustomizeType?: string
  /**
   * 集群运行环境docker或container
注意：此字段可能返回 null，表示取不到有效值。
   */
  ContainerRuntime?: string
  /**
   * 创建时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  CreatedTime?: string
  /**
   * 删除保护开关
注意：此字段可能返回 null，表示取不到有效值。
   */
  DeletionProtection?: boolean
  /**
   * 集群是否开启第三方节点支持
注意：此字段可能返回 null，表示取不到有效值。
   */
  EnableExternalNode?: boolean
  /**
   * 集群等级，针对托管集群生效
注意：此字段可能返回 null，表示取不到有效值。
   */
  ClusterLevel?: string
  /**
   * 自动变配集群等级，针对托管集群生效
注意：此字段可能返回 null，表示取不到有效值。
   */
  AutoUpgradeClusterLevel?: boolean
  /**
   * 是否开启QGPU共享
注意：此字段可能返回 null，表示取不到有效值。
   */
  QGPUShareEnable?: boolean
  /**
   * 运行时版本
注意：此字段可能返回 null，表示取不到有效值。
   */
  RuntimeVersion?: string
  /**
   * 集群当前etcd数量
注意：此字段可能返回 null，表示取不到有效值。
   */
  ClusterEtcdNodeNum?: number
  /**
   * 本地专用集群Id
注意：此字段可能返回 null，表示取不到有效值。
   */
  CdcId?: string
}

/**
 * DescribeClusterAuthenticationOptions请求参数结构体
 */
export interface DescribeClusterAuthenticationOptionsRequest {
  /**
   * 集群ID
   */
  ClusterId: string
}

/**
 * DescribeEksContainerInstanceLog返回参数结构体
 */
export interface DescribeEksContainerInstanceLogResponse {
  /**
   * 容器名称
   */
  ContainerName?: string
  /**
   * 日志内容
   */
  LogContent?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteEKSCluster返回参数结构体
 */
export interface DeleteEKSClusterResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * RenewReservedInstances请求参数结构体
 */
export interface RenewReservedInstancesRequest {
  /**
   * 预留券实例ID，每次请求实例的上限为100。
   */
  ReservedInstanceIds: Array<string>
  /**
   * 预付费模式，即包年包月相关参数设置。通过该参数可以指定包年包月实例的续费时长、是否设置自动续费等属性。
   */
  InstanceChargePrepaid: InstanceChargePrepaid
  /**
   * 用于保证请求幂等性的字符串。该字符串由客户生成，需保证不同请求之间唯一，最大值不超过64个ASCII字符。若不指定该参数，则无法保证请求的幂等性。
   */
  ClientToken?: string
}

/**
 * 版本信息
 */
export interface VersionInstance {
  /**
   * 版本名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  Name?: string
  /**
   * 版本信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  Version?: string
  /**
   * Remark
注意：此字段可能返回 null，表示取不到有效值。
   */
  Remark?: string
}

/**
 * EksContainerInstance实例类型
 */
export interface EksCi {
  /**
   * EKS Cotainer Instance Id
   */
  EksCiId?: string
  /**
   * EKS Cotainer Instance Name
   */
  EksCiName?: string
  /**
   * 内存大小
   */
  Memory?: number
  /**
   * CPU大小
   */
  Cpu?: number
  /**
   * 安全组ID
   */
  SecurityGroupIds?: Array<string>
  /**
   * 容器组的重启策略
注意：此字段可能返回 null，表示取不到有效值。
   */
  RestartPolicy?: string
  /**
   * 返回容器组创建状态：Pending，Running，Succeeded，Failed。其中：
Failed （运行失败）指的容器组退出，RestartPolilcy为Never， 有容器exitCode非0；
Succeeded（运行成功）指的是容器组退出了，RestartPolicy为Never或onFailure，所有容器exitCode都为0；
Failed和Succeeded这两种状态都会停止运行，停止计费。
Pending是创建中，Running是 运行中。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Status?: string
  /**
   * 接到请求后的系统创建时间。
注意：此字段可能返回 null，表示取不到有效值。
   */
  CreationTime?: string
  /**
   * 容器全部成功退出后的时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  SucceededTime?: string
  /**
   * 容器列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  Containers?: Array<Container>
  /**
   * 数据卷信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  EksCiVolume?: EksCiVolume
  /**
   * 容器组运行的安全上下文
注意：此字段可能返回 null，表示取不到有效值。
   */
  SecurityContext?: SecurityContext
  /**
   * 内网ip地址
注意：此字段可能返回 null，表示取不到有效值。
   */
  PrivateIp?: string
  /**
   * 容器实例绑定的Eip地址，注意可能为空
注意：此字段可能返回 null，表示取不到有效值。
   */
  EipAddress?: string
  /**
   * GPU类型。如无使用GPU则不返回
注意：此字段可能返回 null，表示取不到有效值。
   */
  GpuType?: string
  /**
   * CPU类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  CpuType?: string
  /**
   * GPU卡数量
注意：此字段可能返回 null，表示取不到有效值。
   */
  GpuCount?: number
  /**
   * 实例所属VPC的Id
注意：此字段可能返回 null，表示取不到有效值。
   */
  VpcId?: string
  /**
   * 实例所属子网Id
注意：此字段可能返回 null，表示取不到有效值。
   */
  SubnetId?: string
  /**
   * 初始化容器列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  InitContainers?: Array<Container>
  /**
   * 为容器实例关联 CAM 角色，value 填写 CAM 角色名称，容器实例可获取该 CAM 角色包含的权限策略，方便 容器实例 内的程序进行如购买资源、读写存储等云资源操作。
注意：此字段可能返回 null，表示取不到有效值。
   */
  CamRoleName?: string
  /**
   * 自动为用户创建的EipId
注意：此字段可能返回 null，表示取不到有效值。
   */
  AutoCreatedEipId?: string
  /**
   * 容器状态是否持久化
注意：此字段可能返回 null，表示取不到有效值。
   */
  PersistStatus?: boolean
}

/**
 * UpdateImageCache返回参数结构体
 */
export interface UpdateImageCacheResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeIPAMD返回参数结构体
 */
export interface DescribeIPAMDResponse {
  /**
   * 是否安装了eniipamd组件
   */
  EnableIPAMD?: boolean
  /**
   * 是否开启自定义podcidr，默认为false，已安装eniipamd组件才意义
注意：此字段可能返回 null，表示取不到有效值。
   */
  EnableCustomizedPodCidr?: boolean
  /**
   * 是否不开启vpccni模式，默认为false，已安装eniipamd组件才意义
注意：此字段可能返回 null，表示取不到有效值。
   */
  DisableVpcCniMode?: boolean
  /**
   * 组件状态，已安装eniipamd组件才会有值
注意：此字段可能返回 null，表示取不到有效值。
   */
  Phase?: string
  /**
   * 错误信息，已安装eniipamd组件且状态为非running才会有错误信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  Reason?: string
  /**
   * 子网信息，已安装eniipamd组件才会有值
注意：此字段可能返回 null，表示取不到有效值。
   */
  SubnetIds?: Array<string>
  /**
   * 固定ip回收时间，已安装eniipamd组件才会有值
注意：此字段可能返回 null，表示取不到有效值。
   */
  ClaimExpiredDuration?: string
  /**
   * 是否开启了中继网卡模式
注意：此字段可能返回 null，表示取不到有效值。
   */
  EnableTrunkingENI?: boolean
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreatePrometheusConfig请求参数结构体
 */
export interface CreatePrometheusConfigRequest {
  /**
   * 实例id
   */
  InstanceId: string
  /**
   * 集群类型
   */
  ClusterType: string
  /**
   * 集群id
   */
  ClusterId: string
  /**
   * ServiceMonitors配置
   */
  ServiceMonitors?: Array<PrometheusConfigItem>
  /**
   * PodMonitors配置
   */
  PodMonitors?: Array<PrometheusConfigItem>
  /**
   * prometheus原生Job配置
   */
  RawJobs?: Array<PrometheusConfigItem>
  /**
   * Probe 配置
   */
  Probes?: Array<PrometheusConfigItem>
}

/**
 * CreateCLSLogConfig请求参数结构体
 */
export interface CreateCLSLogConfigRequest {
  /**
   * 日志采集配置的json表达
   */
  LogConfig: string
  /**
   * 集群ID
   */
  ClusterId: string
  /**
   * CLS日志集ID
   */
  LogsetId?: string
  /**
   * 当前集群类型支持tke、eks
   */
  ClusterType?: string
}

/**
 * CreateClusterVirtualNode返回参数结构体
 */
export interface CreateClusterVirtualNodeResponse {
  /**
   * 虚拟节点名称
   */
  NodeName?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 镜像缓存的事件
 */
export interface ImageCacheEvent {
  /**
   * 镜像缓存Id
   */
  ImageCacheId?: string
  /**
   * 事件类型, Normal或者Warning
   */
  Type?: string
  /**
   * 事件原因简述
   */
  Reason?: string
  /**
   * 事件原因详述
   */
  Message?: string
  /**
   * 事件第一次出现时间
   */
  FirstTimestamp?: string
  /**
   * 事件最后一次出现时间
   */
  LastTimestamp?: string
}

/**
 * CreatePrometheusClusterAgent请求参数结构体
 */
export interface CreatePrometheusClusterAgentRequest {
  /**
   * 实例ID
   */
  InstanceId: string
  /**
   * agent列表
   */
  Agents: Array<PrometheusClusterAgentBasic>
}

/**
 * DescribeRouteTableConflicts返回参数结构体
 */
export interface DescribeRouteTableConflictsResponse {
  /**
   * 路由表是否冲突。
   */
  HasConflict?: boolean
  /**
   * 路由表冲突列表。
注意：此字段可能返回 null，表示取不到有效值。
   */
  RouteTableConflictSet?: Array<RouteTableConflict>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribePrometheusInstancesOverview返回参数结构体
 */
export interface DescribePrometheusInstancesOverviewResponse {
  /**
   * 实例列表
   */
  Instances?: Array<PrometheusInstancesOverview>
  /**
   * 实例总数
注意：此字段可能返回 null，表示取不到有效值。
   */
  Total?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeEKSClusterCredential请求参数结构体
 */
export interface DescribeEKSClusterCredentialRequest {
  /**
   * 集群Id
   */
  ClusterId: string
}

/**
 * EnableClusterDeletionProtection请求参数结构体
 */
export interface EnableClusterDeletionProtectionRequest {
  /**
   * 集群ID
   */
  ClusterId: string
}

/**
 * RestartEKSContainerInstances请求参数结构体
 */
export interface RestartEKSContainerInstancesRequest {
  /**
   * EKS instance ids
   */
  EksCiIds: Array<string>
}

/**
 * DrainClusterVirtualNode请求参数结构体
 */
export interface DrainClusterVirtualNodeRequest {
  /**
   * 集群ID
   */
  ClusterId: string
  /**
   * 节点名
   */
  NodeName: string
}

/**
 * DescribeClusterLevelAttribute请求参数结构体
 */
export interface DescribeClusterLevelAttributeRequest {
  /**
   * 集群ID，变配时使用
   */
  ClusterID?: string
}

/**
 * DescribeClusterReleaseDetails请求参数结构体
 */
export interface DescribeClusterReleaseDetailsRequest {
  /**
   * 集群ID
   */
  ClusterId: string
  /**
   * 应用名称
   */
  Name: string
  /**
   * 应用所在命名空间
   */
  Namespace: string
  /**
   * 集群类型
   */
  ClusterType?: string
}

/**
 * 集群巡检诊断结果详情信息
 */
export interface KubeJarvisStateResultsItem {
  /**
   * 诊断结果级别
注意：此字段可能返回 null，表示取不到有效值。
   */
  Level?: string
  /**
   * 诊断对象名
注意：此字段可能返回 null，表示取不到有效值。
   */
  ObjName?: string
  /**
   * 诊断对象信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  ObjInfo?: Array<KubeJarvisStateResultObjInfo>
  /**
   * 诊断项标题
注意：此字段可能返回 null，表示取不到有效值。
   */
  Title?: string
  /**
   * 诊断项描述
注意：此字段可能返回 null，表示取不到有效值。
   */
  Desc?: string
  /**
   * 诊断建议
注意：此字段可能返回 null，表示取不到有效值。
   */
  Proposal?: string
  /**
   * 诊断建议文档链接
注意：此字段可能返回 null，表示取不到有效值。
   */
  ProposalDocUrl?: string
  /**
   * 诊断建议文档名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  ProposalDocName?: string
}

/**
 * CreateECMInstances请求参数结构体
 */
export interface CreateECMInstancesRequest {
  /**
   * 集群id，边缘集群需要先开启公网访问才能添加ecm节点
   */
  ClusterID: string
  /**
   * 边缘模块id
   */
  ModuleId: string
  /**
   * 需要创建实例的可用区及创建数目及运营商的列表
   */
  ZoneInstanceCountISPSet: Array<ECMZoneInstanceCountISP>
  /**
   * 密码
   */
  Password?: string
  /**
   * 公网带宽
   */
  InternetMaxBandwidthOut?: number
  /**
   * 镜像id
   */
  ImageId?: string
  /**
   * 实例名称
   */
  InstanceName?: string
  /**
   * 主机名称
   */
  HostName?: string
  /**
   * 增强服务，包括云镜和云监控
   */
  EnhancedService?: ECMEnhancedService
  /**
   * 用户自定义脚本
   */
  UserData?: string
  /**
   * 实例扩展信息
   */
  External?: string
  /**
   * 实例所属安全组
   */
  SecurityGroupIds?: Array<string>
}

/**
 * DescribeClusterReleases请求参数结构体
 */
export interface DescribeClusterReleasesRequest {
  /**
   * 集群id
   */
  ClusterId: string
  /**
   * 每页数量限制
   */
  Limit?: number
  /**
   * 页偏移量
   */
  Offset?: number
  /**
   * 集群类型, 目前支持传入 tke, eks, tkeedge, external
   */
  ClusterType?: string
  /**
   * helm Release 安装的namespace
   */
  Namespace?: string
  /**
   * helm Release 的名字
   */
  ReleaseName?: string
  /**
   * helm Chart 的名字
   */
  ChartName?: string
}

/**
 * 接入k8s 的认证信息
 */
export interface ClusterCredential {
  /**
   * CA 根证书
   */
  CACert: string
  /**
   * 认证用的Token
   */
  Token?: string
}

/**
 * DescribePrometheusOverviews请求参数结构体
 */
export interface DescribePrometheusOverviewsRequest {
  /**
   * 用于分页
   */
  Offset?: number
  /**
   * 用于分页
   */
  Limit?: number
  /**
   * 过滤实例，目前支持：
ID: 通过实例ID来过滤 
Name: 通过实例名称来过滤
   */
  Filters?: Array<Filter>
}

/**
 * DescribeClusterPendingReleases返回参数结构体
 */
export interface DescribeClusterPendingReleasesResponse {
  /**
   * 正在安装中应用列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  ReleaseSet?: Array<PendingRelease>
  /**
   * 每页返回数量限制
注意：此字段可能返回 null，表示取不到有效值。
   */
  Limit?: number
  /**
   * 页偏移量
注意：此字段可能返回 null，表示取不到有效值。
   */
  Offset?: number
  /**
   * 总数量
注意：此字段可能返回 null，表示取不到有效值。
   */
  Total?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 描述了k8s节点数据盘相关配置与信息。
 */
export interface DataDisk {
  /**
   * 云盘类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  DiskType: string
  /**
   * 文件系统(ext3/ext4/xfs)
注意：此字段可能返回 null，表示取不到有效值。
   */
  FileSystem: string
  /**
   * 云盘大小(G）
注意：此字段可能返回 null，表示取不到有效值。
   */
  DiskSize: number
  /**
   * 是否自动化格式盘并挂载
注意：此字段可能返回 null，表示取不到有效值。
   */
  AutoFormatAndMount: boolean
  /**
   * 挂载目录
注意：此字段可能返回 null，表示取不到有效值。
   */
  MountTarget: string
  /**
   * 挂载设备名或分区名，当且仅当添加已有节点时需要
注意：此字段可能返回 null，表示取不到有效值。
   */
  DiskPartition: string
}

/**
 * DeleteEKSCluster请求参数结构体
 */
export interface DeleteEKSClusterRequest {
  /**
   * 弹性集群Id
   */
  ClusterId: string
}

/**
 * DescribeLogConfigs返回参数结构体
 */
export interface DescribeLogConfigsResponse {
  /**
   * 分页查找时返回采集规则总数
注意：此字段可能返回 null，表示取不到有效值。
   */
  Total?: number
  /**
   * 指定采集规则名称查找，部分失败时返回失败采集规则名称及最后一个失败原因
注意：此字段可能返回 null，表示取不到有效值。
   */
  Message?: string
  /**
   * 采集规则查询结果
注意：此字段可能返回 null，表示取不到有效值。
   */
  LogConfigs?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeExistedInstances返回参数结构体
 */
export interface DescribeExistedInstancesResponse {
  /**
   * 已经存在的实例信息数组。
注意：此字段可能返回 null，表示取不到有效值。
   */
  ExistedInstanceSet?: Array<ExistedInstance>
  /**
   * 符合条件的实例数量。
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreatePrometheusTemplate请求参数结构体
 */
export interface CreatePrometheusTemplateRequest {
  /**
   * 模板设置
   */
  Template: PrometheusTemplate
}

/**
 * DescribeEKSContainerInstances返回参数结构体
 */
export interface DescribeEKSContainerInstancesResponse {
  /**
   * 容器组总数
   */
  TotalCount?: number
  /**
   * 容器组列表
   */
  EksCis?: Array<EksCi>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreatePrometheusAlertRule返回参数结构体
 */
export interface CreatePrometheusAlertRuleResponse {
  /**
   * 告警id
   */
  Id?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ECM增强服务
 */
export interface ECMEnhancedService {
  /**
   * 是否开启云监控服务
   */
  SecurityService?: ECMRunMonitorServiceEnabled
  /**
   * 是否开启云镜服务
   */
  MonitorService?: ECMRunSecurityServiceEnabled
}

/**
 * CVM实例数据盘挂载配置
 */
export interface InstanceDataDiskMountSetting {
  /**
   * CVM实例类型
   */
  InstanceType: string
  /**
   * 数据盘挂载信息
   */
  DataDisks: Array<DataDisk>
  /**
   * CVM实例所属可用区
   */
  Zone: string
}

/**
 * 边缘计算集群公网访问负载均衡信息
 */
export interface EdgeClusterPublicLB {
  /**
   * 是否开启公网访问LB
注意：此字段可能返回 null，表示取不到有效值。
   */
  Enabled: boolean
  /**
   * 允许访问的公网cidr
注意：此字段可能返回 null，表示取不到有效值。
   */
  AllowFromCidrs?: Array<string>
}

/**
 * EnableEncryptionProtection请求参数结构体
 */
export interface EnableEncryptionProtectionRequest {
  /**
   * 集群ID
   */
  ClusterId: string
  /**
   * kms加密配置
   */
  KMSConfiguration: KMSConfiguration
}

/**
 * 描述了实例的增强服务启用情况与其设置，如云安全，云监控等实例 Agent
 */
export interface EnhancedService {
  /**
   * 开启云安全服务。若不指定该参数，则默认开启云安全服务。
   */
  SecurityService?: RunSecurityServiceEnabled
  /**
   * 开启云监控服务。若不指定该参数，则默认开启云监控服务。
   */
  MonitorService?: RunMonitorServiceEnabled
  /**
   * 开启云自动化助手服务（TencentCloud Automation Tools，TAT）。若不指定该参数，则公共镜像默认开启云自动化助手服务，其他镜像默认不开启云自动化助手服务。
   */
  AutomationService?: RunAutomationServiceEnabled
}

/**
 * DeleteEKSContainerInstances返回参数结构体
 */
export interface DeleteEKSContainerInstancesResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribePostNodeResources返回参数结构体
 */
export interface DescribePostNodeResourcesResponse {
  /**
   * Pod详情
   */
  PodSet?: Array<SuperNodeResource>
  /**
   * 预留券详情
   */
  ReservedInstanceSet?: Array<SuperNodeResource>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribePrometheusAlertRule请求参数结构体
 */
export interface DescribePrometheusAlertRuleRequest {
  /**
   * 实例id
   */
  InstanceId: string
  /**
   * 分页
   */
  Offset?: number
  /**
   * 分页
   */
  Limit?: number
  /**
   * 过滤
支持ID，Name
   */
  Filters?: Array<Filter>
}

/**
 * UninstallLogAgent请求参数结构体
 */
export interface UninstallLogAgentRequest {
  /**
   * 集群ID
   */
  ClusterId: string
}

/**
 * 探针使用TcpSocket检测容器
 */
export interface TcpSocket {
  /**
   * TcpSocket检测的端口
注意：此字段可能返回 null，表示取不到有效值。
   */
  Port?: number
}

/**
 * 标签描述列表。通过指定该参数可以同时绑定标签到相应的资源实例，当前仅支持绑定标签到云主机实例。
 */
export interface TagSpecification {
  /**
   * 标签绑定的资源类型，当前支持类型："cluster"
注意：此字段可能返回 null，表示取不到有效值。
   */
  ResourceType?: string
  /**
   * 标签对列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  Tags?: Array<Tag>
}

/**
 * 集群巡检诊断概览
 */
export interface KubeJarvisStateDiagnosticOverview {
  /**
   * 诊断目录
注意：此字段可能返回 null，表示取不到有效值。
   */
  Catalogues?: Array<KubeJarvisStateCatalogue>
  /**
   * 诊断结果统计
注意：此字段可能返回 null，表示取不到有效值。
   */
  Statistics?: Array<KubeJarvisStateStatistic>
}

/**
 * DeleteEdgeClusterInstances返回参数结构体
 */
export interface DeleteEdgeClusterInstancesResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteTKEEdgeCluster请求参数结构体
 */
export interface DeleteTKEEdgeClusterRequest {
  /**
   * 集群ID
   */
  ClusterId: string
}

/**
 * CreatePrometheusGlobalNotification返回参数结构体
 */
export interface CreatePrometheusGlobalNotificationResponse {
  /**
   * 全局告警通知渠道ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  Id?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ListClusterInspectionResultsItems请求参数结构体
 */
export interface ListClusterInspectionResultsItemsRequest {
  /**
   * 目标集群ID
   */
  ClusterId: string
  /**
   * 查询历史结果的开始时间，Unix时间戳
   */
  StartTime?: string
  /**
   * 查询历史结果的结束时间，默认当前距离开始时间3天，Unix时间戳
   */
  EndTime?: string
}

/**
 * DescribeClusterAuthenticationOptions返回参数结构体
 */
export interface DescribeClusterAuthenticationOptionsResponse {
  /**
   * ServiceAccount认证配置
注意：此字段可能返回 null，表示取不到有效值。
   */
  ServiceAccounts?: ServiceAccountAuthenticationOptions
  /**
   * 最近一次修改操作结果，返回值可能为：Updating，Success，Failed，TimeOut
注意：此字段可能返回 null，表示取不到有效值。
   */
  LatestOperationState?: string
  /**
   * OIDC认证配置
注意：此字段可能返回 null，表示取不到有效值。
   */
  OIDCConfig?: OIDCConfigAuthenticationOptions
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateClusterRelease请求参数结构体
 */
export interface CreateClusterReleaseRequest {
  /**
   * 集群ID
   */
  ClusterId: string
  /**
   * 应用名称
   */
  Name: string
  /**
   * 应用命名空间
   */
  Namespace: string
  /**
   * 制品名称或从第三方repo 安装chart时，制品压缩包下载地址, 不支持重定向类型chart 地址，结尾为*.tgz
   */
  Chart: string
  /**
   * 自定义参数
   */
  Values?: ReleaseValues
  /**
   * 制品来源，范围：tke-market 或 other默认值：tke-market。
   */
  ChartFrom?: string
  /**
   * 制品版本
   */
  ChartVersion?: string
  /**
   * 制品仓库URL地址
   */
  ChartRepoURL?: string
  /**
   * 制品访问用户名
   */
  Username?: string
  /**
   * 制品访问密码
   */
  Password?: string
  /**
   * 制品命名空间，ChartFrom为tke-market时ChartNamespace不为空，值为DescribeProducts接口反馈的Namespace
   */
  ChartNamespace?: string
  /**
   * 集群类型，支持传 tke, eks, tkeedge, external(注册集群）
   */
  ClusterType?: string
}

/**
 * DescribePrometheusAgents请求参数结构体
 */
export interface DescribePrometheusAgentsRequest {
  /**
   * 实例id
   */
  InstanceId: string
  /**
   * 用于分页
   */
  Offset?: number
  /**
   * 用于分页
   */
  Limit?: number
}

/**
 * AddClusterCIDR返回参数结构体
 */
export interface AddClusterCIDRResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 应用市场的安装应用详情
 */
export interface ReleaseDetails {
  /**
   * 应用名称
   */
  Name?: string
  /**
   * 应用所在命名空间
   */
  Namespace?: string
  /**
   * 应用当前版本
注意：此字段可能返回 null，表示取不到有效值。
   */
  Version?: number
  /**
   * 应用状态
注意：此字段可能返回 null，表示取不到有效值。
   */
  Status?: string
  /**
   * 应用描述
注意：此字段可能返回 null，表示取不到有效值。
   */
  Description?: string
  /**
   * 应用提示
注意：此字段可能返回 null，表示取不到有效值。
   */
  Notes?: string
  /**
   * 用户自定义参数
注意：此字段可能返回 null，表示取不到有效值。
   */
  Config?: string
  /**
   * 应用资源详情
注意：此字段可能返回 null，表示取不到有效值。
   */
  Manifest?: string
  /**
   * 应用制品版本
注意：此字段可能返回 null，表示取不到有效值。
   */
  ChartVersion?: string
  /**
   * 应用制品名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  ChartName?: string
  /**
   * 应用制品描述
注意：此字段可能返回 null，表示取不到有效值。
   */
  ChartDescription?: string
  /**
   * 应用制品app版本
注意：此字段可能返回 null，表示取不到有效值。
   */
  AppVersion?: string
  /**
   * 应用首次部署时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  FirstDeployedTime?: string
  /**
   * 应用最近部署时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  LastDeployedTime?: string
  /**
   * 应用参数
注意：此字段可能返回 null，表示取不到有效值。
   */
  ComputedValues?: string
  /**
   * chart 的来源， tke-market, others
注意：此字段可能返回 null，表示取不到有效值。
   */
  ChartFrom?: string
  /**
   * 第三方chart 的安装地址
注意：此字段可能返回 null，表示取不到有效值。
   */
  ChartURL?: string
  /**
   * 通过chart 创建的资源
注意：此字段可能返回 null，表示取不到有效值。
   */
  Resources?: string
}

/**
 * DescribePrometheusInstanceInitStatus请求参数结构体
 */
export interface DescribePrometheusInstanceInitStatusRequest {
  /**
   * 实例ID
   */
  InstanceId: string
}

/**
 * DescribeClusterLevelAttribute返回参数结构体
 */
export interface DescribeClusterLevelAttributeResponse {
  /**
   * 总数
   */
  TotalCount?: number
  /**
   * 集群规模
   */
  Items?: Array<ClusterLevelAttribute>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 托管prometheus中grafana的信息
 */
export interface PrometheusGrafanaInfo {
  /**
   * 是否启用
   */
  Enabled?: boolean
  /**
   * 域名，只有开启外网访问才有效果
   */
  Domain?: string
  /**
   * 内网地址，或者外网地址
   */
  Address?: string
  /**
   * 是否开启了外网访问
close = 未开启外网访问
opening = 正在开启外网访问
open  = 已开启外网访问
   */
  Internet?: string
  /**
   * grafana管理员用户名
   */
  AdminUser?: string
}

/**
 * 集群日志开关集合
 */
export interface Switch {
  /**
   * 集群ID
   */
  ClusterId?: string
  /**
   * 审计开关的详细信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  Audit?: SwitchInfo
  /**
   * 事件开关的详细信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  Event?: SwitchInfo
  /**
   * 普通日志的详细信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  Log?: SwitchInfo
  /**
   * master 日志详细信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  MasterLog?: SwitchInfo
}

/**
 * 镜像信息
 */
export interface ImageInstance {
  /**
   * 镜像别名
注意：此字段可能返回 null，表示取不到有效值。
   */
  Alias?: string
  /**
   * 操作系统名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  OsName?: string
  /**
   * 镜像ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  ImageId?: string
  /**
   * 容器的镜像版本，"DOCKER_CUSTOMIZE"(容器定制版),"GENERAL"(普通版本，默认值)
注意：此字段可能返回 null，表示取不到有效值。
   */
  OsCustomizeType?: string
}

/**
 * CreatePrometheusAlertPolicy请求参数结构体
 */
export interface CreatePrometheusAlertPolicyRequest {
  /**
   * 实例id
   */
  InstanceId: string
  /**
   * 告警配置
   */
  AlertRule: PrometheusAlertPolicyItem
}

/**
 * DescribeImageCaches返回参数结构体
 */
export interface DescribeImageCachesResponse {
  /**
   * 镜像缓存总数
   */
  TotalCount?: number
  /**
   * 镜像缓存信息列表
   */
  ImageCaches?: Array<ImageCache>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 资源使用明细
 */
export interface ResourceUsageDetail {
  /**
   * 资源名称
   */
  Name?: string
  /**
   * 资源使用量
   */
  Usage?: number
}

/**
 * DescribeClusterVirtualNodePools返回参数结构体
 */
export interface DescribeClusterVirtualNodePoolsResponse {
  /**
   * 节点池总数
注意：此字段可能返回 null，表示取不到有效值。
   */
  TotalCount?: number
  /**
   * 虚拟节点池列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  NodePoolSet?: Array<VirtualNodePool>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CheckEdgeClusterCIDR返回参数结构体
 */
export interface CheckEdgeClusterCIDRResponse {
  /**
   * 返回码，具体如下
-1 内部错误
0 没冲突
1 vpc 和 serviceCIDR 冲突
2 vpc 和 podCIDR 冲突
3 serviceCIDR  和 podCIDR 冲突
   */
  ConflictCode?: number
  /**
   * CIDR冲突描述信息。
   */
  ConflictMsg?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribePrometheusClusterAgents请求参数结构体
 */
export interface DescribePrometheusClusterAgentsRequest {
  /**
   * 实例id
   */
  InstanceId: string
  /**
   * 用于分页
   */
  Offset?: number
  /**
   * 用于分页
   */
  Limit?: number
}

/**
 * DescribeTKEEdgeExternalKubeconfig返回参数结构体
 */
export interface DescribeTKEEdgeExternalKubeconfigResponse {
  /**
   * kubeconfig文件内容
   */
  Kubeconfig?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 边缘容器参数描述
 */
export interface EdgeArgsFlag {
  /**
   * 参数名
注意：此字段可能返回 null，表示取不到有效值。
   */
  Name?: string
  /**
   * 参数类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  Type?: string
  /**
   * 参数描述
注意：此字段可能返回 null，表示取不到有效值。
   */
  Usage?: string
  /**
   * 参数默认值
注意：此字段可能返回 null，表示取不到有效值。
   */
  Default?: string
  /**
   * 参数可选范围（目前包含range和in两种，"[]"代表range，如"[1, 5]"表示参数必须>=1且 <=5, "()"代表in， 如"('aa', 'bb')"表示参数只能为字符串'aa'或者'bb'，该参数为空表示不校验）
注意：此字段可能返回 null，表示取不到有效值。
   */
  Constraint?: string
}

/**
 * CheckInstancesUpgradeAble返回参数结构体
 */
export interface CheckInstancesUpgradeAbleResponse {
  /**
   * 集群master当前小版本
   */
  ClusterVersion?: string
  /**
   * 集群master对应的大版本目前最新小版本
   */
  LatestVersion?: string
  /**
   * 可升级节点列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  UpgradeAbleInstances?: Array<UpgradeAbleInstancesItem>
  /**
   * 总数
注意：此字段可能返回 null，表示取不到有效值。
   */
  Total?: number
  /**
   * 不可升级原因
注意：此字段可能返回 null，表示取不到有效值。
   */
  UnavailableVersionReason?: Array<UnavailableReason>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreatePrometheusTemp请求参数结构体
 */
export interface CreatePrometheusTempRequest {
  /**
   * 模板设置
   */
  Template: PrometheusTemp
}

/**
 * CreatePrometheusDashboard请求参数结构体
 */
export interface CreatePrometheusDashboardRequest {
  /**
   * 实例id
   */
  InstanceId: string
  /**
   * 面板组名称
   */
  DashboardName: string
  /**
   * 面板列表
每一项是一个grafana dashboard的json定义
   */
  Contents: Array<string>
}

/**
 * DeleteClusterRouteTable返回参数结构体
 */
export interface DeleteClusterRouteTableResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeAddonValues返回参数结构体
 */
export interface DescribeAddonValuesResponse {
  /**
   * 参数列表，如果addon已安装，会使用已设置的参数和chart里的默认参数做渲染，是一个json格式的字符串，未安装addon时返回为空值。
   */
  Values?: string
  /**
   * addon支持的参数列表，值为chart的默认值，是一个json格式的字符串。
   */
  DefaultValues?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DisableClusterDeletionProtection请求参数结构体
 */
export interface DisableClusterDeletionProtectionRequest {
  /**
   * 集群ID
   */
  ClusterId: string
}

/**
 * ListClusterInspectionResultsItems返回参数结构体
 */
export interface ListClusterInspectionResultsItemsResponse {
  /**
   * 巡检结果历史列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  InspectionResultsItems?: Array<KubeJarvisStateInspectionResultsItem>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * prometheus一个job的targets
 */
export interface PrometheusJobTargets {
  /**
   * 该Job的targets列表
   */
  Targets?: Array<PrometheusTarget>
  /**
   * job的名称
   */
  JobName?: string
  /**
   * targets总数
   */
  Total?: number
  /**
   * 健康的target总数
   */
  Up?: number
}

/**
 * ModifyClusterAsGroupOptionAttribute返回参数结构体
 */
export interface ModifyClusterAsGroupOptionAttributeResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * UninstallLogAgent返回参数结构体
 */
export interface UninstallLogAgentResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 与云监控融合托管prometheus实例，关联集群基础信息
 */
export interface PrometheusClusterAgentBasic {
  /**
   * 地域
   */
  Region: string
  /**
   * 集群类型
   */
  ClusterType: string
  /**
   * 集群ID
   */
  ClusterId: string
  /**
   * 是否开启公网CLB
   */
  EnableExternal: boolean
  /**
   * 集群内部署组件的pod配置
   */
  InClusterPodConfig?: PrometheusClusterAgentPodConfig
  /**
   * 该集群采集的所有指标都会带上这些labels
   */
  ExternalLabels?: Array<Label>
  /**
   * 是否安装默认采集配置
   */
  NotInstallBasicScrape?: boolean
  /**
   * 是否采集指标，true代表drop所有指标，false代表采集默认指标
   */
  NotScrape?: boolean
}

/**
 * DeleteTKEEdgeCluster返回参数结构体
 */
export interface DeleteTKEEdgeClusterResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreatePrometheusTemp返回参数结构体
 */
export interface CreatePrometheusTempResponse {
  /**
   * 模板Id
   */
  TemplateId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribePrometheusTargets请求参数结构体
 */
export interface DescribePrometheusTargetsRequest {
  /**
   * 实例id
   */
  InstanceId: string
  /**
   * 集群类型
   */
  ClusterType: string
  /**
   * 集群id
   */
  ClusterId: string
  /**
   * 过滤条件，当前支持
Name=state
Value=up, down, unknown
   */
  Filters?: Array<Filter>
}

/**
 * RunPrometheusInstance返回参数结构体
 */
export interface RunPrometheusInstanceResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeletePrometheusTemplateSync返回参数结构体
 */
export interface DeletePrometheusTemplateSyncResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeClusterAsGroups请求参数结构体
 */
export interface DescribeClusterAsGroupsRequest {
  /**
   * 集群ID
   */
  ClusterId: string
  /**
   * 伸缩组ID列表，如果为空，表示拉取集群关联的所有伸缩组。
   */
  AutoScalingGroupIds?: Array<string>
  /**
   * 偏移量，默认为0。关于Offset的更进一步介绍请参考 API [简介](https://cloud.tencent.com/document/api/213/15688)中的相关小节。
   */
  Offset?: number
  /**
   * 返回数量，默认为20，最大值为100。关于Limit的更进一步介绍请参考 API [简介](https://cloud.tencent.com/document/api/213/15688)中的相关小节。
   */
  Limit?: number
}

/**
 * ECM云监控服务
 */
export interface ECMRunMonitorServiceEnabled {
  /**
   * 是否开启
   */
  Enabled?: boolean
}

/**
 * GetMostSuitableImageCache返回参数结构体
 */
export interface GetMostSuitableImageCacheResponse {
  /**
   * 是否有匹配的镜像缓存
   */
  Found?: boolean
  /**
   * 匹配的镜像缓存
注意：此字段可能返回 null，表示取不到有效值。
   */
  ImageCache?: ImageCache
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyClusterEndpointSP返回参数结构体
 */
export interface ModifyClusterEndpointSPResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ECM云镜服务
 */
export interface ECMRunSecurityServiceEnabled {
  /**
   * 是否开启
   */
  Enabled?: boolean
  /**
   * 云镜版本：0 基础版，1 专业版
   */
  Version?: number
}

/**
 * SyncPrometheusTemplate返回参数结构体
 */
export interface SyncPrometheusTemplateResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeClusterExtraArgs返回参数结构体
 */
export interface DescribeClusterExtraArgsResponse {
  /**
   * 集群自定义参数
注意：此字段可能返回 null，表示取不到有效值。
   */
  ClusterExtraArgs?: ClusterExtraArgs
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 集群伸缩组属性
 */
export interface ClusterAsGroupAttribute {
  /**
   * 伸缩组ID
   */
  AutoScalingGroupId?: string
  /**
   * 是否开启
   */
  AutoScalingGroupEnabled?: boolean
  /**
   * 伸缩组最大最小实例数
   */
  AutoScalingGroupRange?: AutoScalingGroupRange
}

/**
 * ForwardTKEEdgeApplicationRequestV3请求参数结构体
 */
export interface ForwardTKEEdgeApplicationRequestV3Request {
  /**
   * 请求集群addon的访问
   */
  Method: string
  /**
   * 请求集群addon的路径
   */
  Path: string
  /**
   * 请求集群addon后允许接收的数据格式
   */
  Accept?: string
  /**
   * 请求集群addon的数据格式
   */
  ContentType?: string
  /**
   * 请求集群addon的数据
   */
  RequestBody?: string
  /**
   * 集群名称，例如cls-1234abcd
   */
  ClusterName?: string
  /**
   * 是否编码请求内容
   */
  EncodedBody?: string
}

/**
 * DisableEventPersistence请求参数结构体
 */
export interface DisableEventPersistenceRequest {
  /**
   * 集群ID
   */
  ClusterId: string
  /**
   * 取值为true代表关闭集群审计时删除默认创建的日志集和主题，false代表不删除
   */
  DeleteLogSetAndTopic?: boolean
}

/**
 * 描述了 “云监控” 服务相关的信息
 */
export interface RunMonitorServiceEnabled {
  /**
   * 是否开启[云监控](/document/product/248)服务。取值范围：<br><li>true：表示开启云监控服务<br><li>false：表示不开启云监控服务<br><br>默认取值：true。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Enabled?: boolean
}

/**
 * CreateEKSContainerInstances请求参数结构体
 */
export interface CreateEKSContainerInstancesRequest {
  /**
   * 容器组
   */
  Containers: Array<Container>
  /**
   * EKS Container Instance容器实例名称
   */
  EksCiName: string
  /**
   * 指定新创建实例所属于的安全组Id
   */
  SecurityGroupIds: Array<string>
  /**
   * 实例所属子网Id
   */
  SubnetId: string
  /**
   * 实例所属VPC的Id
   */
  VpcId: string
  /**
   * 内存，单位：GiB。可参考[资源规格](https://cloud.tencent.com/document/product/457/39808)文档
   */
  Memory: number
  /**
   * CPU，单位：核。可参考[资源规格](https://cloud.tencent.com/document/product/457/39808)文档
   */
  Cpu: number
  /**
   * 实例重启策略： Always(总是重启)、Never(从不重启)、OnFailure(失败时重启)，默认：Always。
   */
  RestartPolicy?: string
  /**
   * 镜像仓库凭证数组
   */
  ImageRegistryCredentials?: Array<ImageRegistryCredential>
  /**
   * 数据卷，包含NfsVolume数组和CbsVolume数组
   */
  EksCiVolume?: EksCiVolume
  /**
   * 实例副本数，默认为1
   */
  Replicas?: number
  /**
   * Init 容器
   */
  InitContainers?: Array<Container>
  /**
   * 自定义DNS配置
   */
  DnsConfig?: DNSConfig
  /**
   * 用来绑定容器实例的已有EIP的列表。如传值，需要保证数值和Replicas相等。
另外此参数和AutoCreateEipAttribute互斥。
   */
  ExistedEipIds?: Array<string>
  /**
   * 自动创建EIP的可选参数。若传此参数，则会自动创建EIP。
另外此参数和ExistedEipIds互斥
   */
  AutoCreateEipAttribute?: EipAttribute
  /**
   * 是否为容器实例自动创建EIP，默认为false。若传true，则此参数和ExistedEipIds互斥
   */
  AutoCreateEip?: boolean
  /**
   * Pod 所需的 CPU 资源型号，如果不填写则默认不强制指定 CPU 类型。目前支持型号如下：
intel
amd
- 支持优先级顺序写法，如 “amd,intel” 表示优先创建 amd 资源 Pod，如果所选地域可用区 amd 资源不足，则会创建 intel 资源 Pod。
   */
  CpuType?: string
  /**
   * 容器实例所需的 GPU 资源型号，目前支持型号如下：
1/4\*V100
1/2\*V100
V100
1/4\*T4
1/2\*T4
T4
   */
  GpuType?: string
  /**
   * Pod 所需的 GPU 数量，如填写，请确保为支持的规格。默认单位为卡，无需再次注明。
   */
  GpuCount?: number
  /**
   * 为容器实例关联 CAM 角色，value 填写 CAM 角色名称，容器实例可获取该 CAM 角色包含的权限策略，方便 容器实例 内的程序进行如购买资源、读写存储等云资源操作。
   */
  CamRoleName?: string
}

/**
 * DescribeTKEEdgeClusterCredential返回参数结构体
 */
export interface DescribeTKEEdgeClusterCredentialResponse {
  /**
   * 集群的接入地址信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  Addresses?: Array<IPAddress>
  /**
   * 集群的认证信息
   */
  Credential?: ClusterCredential
  /**
   * 集群的公网访问信息
   */
  PublicLB?: EdgeClusterPublicLB
  /**
   * 集群的内网访问信息
   */
  InternalLB?: EdgeClusterInternalLB
  /**
   * 集群的CoreDns部署信息
   */
  CoreDns?: string
  /**
   * 集群的健康检查多地域部署信息
   */
  HealthRegion?: string
  /**
   * 集群的健康检查部署信息
   */
  Health?: string
  /**
   * 是否部署GridDaemon以支持headless service
   */
  GridDaemon?: string
  /**
   * 公网访问kins集群
   */
  UnitCluster?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 描述了k8s集群相关配置与信息。
 */
export interface InstanceAdvancedSettings {
  /**
   * 该节点属于podCIDR大小自定义模式时，可指定节点上运行的pod数量上限
注意：此字段可能返回 null，表示取不到有效值。
   */
  DesiredPodNumber: number
  /**
   * GPU驱动相关参数,相关的GPU参数获取:https://cloud.tencent.com/document/api/213/15715
注意：此字段可能返回 null，表示取不到有效值。
   */
  GPUArgs: GPUArgs
  /**
   * base64 编码的用户脚本，在初始化节点之前执行，目前只对添加已有节点生效
注意：此字段可能返回 null，表示取不到有效值。
   */
  PreStartUserScript: string
  /**
   * 节点污点
注意：此字段可能返回 null，表示取不到有效值。
   */
  Taints: Array<Taint>
  /**
   * 数据盘挂载点, 默认不挂载数据盘. 已格式化的 ext3，ext4，xfs 文件系统的数据盘将直接挂载，其他文件系统或未格式化的数据盘将自动格式化为ext4 (tlinux系统格式化成xfs)并挂载，请注意备份数据! 无数据盘或有多块数据盘的云主机此设置不生效。
注意，注意，多盘场景请使用下方的DataDisks数据结构，设置对应的云盘类型、云盘大小、挂载路径、是否格式化等信息。
注意：此字段可能返回 null，表示取不到有效值。
   */
  MountTarget?: string
  /**
   * dockerd --graph 指定值, 默认为 /var/lib/docker
注意：此字段可能返回 null，表示取不到有效值。
   */
  DockerGraphPath?: string
  /**
   * base64 编码的用户脚本, 此脚本会在 k8s 组件运行后执行, 需要用户保证脚本的可重入及重试逻辑, 脚本及其生成的日志文件可在节点的 /data/ccs_userscript/ 路径查看, 如果要求节点需要在进行初始化完成后才可加入调度, 可配合 unschedulable 参数使用, 在 userScript 最后初始化完成后, 添加 kubectl uncordon nodename --kubeconfig=/root/.kube/config 命令使节点加入调度
注意：此字段可能返回 null，表示取不到有效值。
   */
  UserScript?: string
  /**
   * 设置加入的节点是否参与调度，默认值为0，表示参与调度；非0表示不参与调度, 待节点初始化完成之后, 可执行kubectl uncordon nodename使node加入调度.
   */
  Unschedulable?: number
  /**
   * 节点Label数组
注意：此字段可能返回 null，表示取不到有效值。
   */
  Labels?: Array<Label>
  /**
   * 多盘数据盘挂载信息：新建节点时请确保购买CVM的参数传递了购买多个数据盘的信息，如CreateClusterInstances API的RunInstancesPara下的DataDisks也需要设置购买多个数据盘, 具体可以参考CreateClusterInstances接口的添加集群节点(多块数据盘)样例；添加已有节点时，请确保填写的分区信息在节点上真实存在
注意：此字段可能返回 null，表示取不到有效值。
   */
  DataDisks?: Array<DataDisk>
  /**
   * 节点相关的自定义参数信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  ExtraArgs?: InstanceExtraArgs
}

/**
 * CancelClusterRelease返回参数结构体
 */
export interface CancelClusterReleaseResponse {
  /**
   * 应用信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  Release: PendingRelease
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * UpdateEdgeClusterVersion返回参数结构体
 */
export interface UpdateEdgeClusterVersionResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyClusterAsGroupAttribute请求参数结构体
 */
export interface ModifyClusterAsGroupAttributeRequest {
  /**
   * 集群ID
   */
  ClusterId: string
  /**
   * 集群关联的伸缩组属性
   */
  ClusterAsGroupAttribute?: ClusterAsGroupAttribute
}

/**
 * DescribeClusterExtraArgs请求参数结构体
 */
export interface DescribeClusterExtraArgsRequest {
  /**
   * 集群ID
   */
  ClusterId: string
}

/**
 * DescribeClusterAsGroups返回参数结构体
 */
export interface DescribeClusterAsGroupsResponse {
  /**
   * 集群关联的伸缩组总数
   */
  TotalCount?: number
  /**
   * 集群关联的伸缩组列表
   */
  ClusterAsGroupSet?: Array<ClusterAsGroup>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * prometheus告警历史
 */
export interface PrometheusAlertHistoryItem {
  /**
   * 告警名称
   */
  RuleName: string
  /**
   * 告警开始时间
   */
  StartTime: string
  /**
   * 告警内容
   */
  Content: string
  /**
   * 告警状态
注意：此字段可能返回 null，表示取不到有效值。
   */
  State?: string
  /**
   * 触发的规则名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  RuleItem?: string
  /**
   * 告警渠道的id
注意：此字段可能返回 null，表示取不到有效值。
   */
  TopicId?: string
  /**
   * 告警渠道的名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  TopicName?: string
}

/**
 * DescribeLogSwitches请求参数结构体
 */
export interface DescribeLogSwitchesRequest {
  /**
   * 集群ID列表
   */
  ClusterIds: Array<string>
  /**
   * 集群类型，tke 或eks
   */
  ClusterType?: string
}

/**
 * ScaleOutClusterMaster请求参数结构体
 */
export interface ScaleOutClusterMasterRequest {
  /**
   * 集群实例ID
   */
  ClusterId: string
  /**
   * 新建节点参数
   */
  RunInstancesForNode?: Array<RunInstancesForNode>
  /**
   * 添加已有节点相关参数
   */
  ExistedInstancesForNode?: Array<ExistedInstancesForNode>
  /**
   * 实例高级设置
   */
  InstanceAdvancedSettings?: InstanceAdvancedSettings
  /**
   * 集群master组件自定义参数
   */
  ExtraArgs?: ClusterExtraArgs
}

/**
 * DeleteClusterInstances返回参数结构体
 */
export interface DeleteClusterInstancesResponse {
  /**
   * 删除成功的实例ID列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  SuccInstanceIds?: Array<string>
  /**
   * 删除失败的实例ID列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  FailedInstanceIds?: Array<string>
  /**
   * 未匹配到的实例ID列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  NotFoundInstanceIds?: Array<string>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreatePrometheusGlobalNotification请求参数结构体
 */
export interface CreatePrometheusGlobalNotificationRequest {
  /**
   * 实例ID
   */
  InstanceId: string
  /**
   * 告警通知渠道
   */
  Notification: PrometheusNotificationItem
}

/**
 * DescribeRIUtilizationDetail返回参数结构体
 */
export interface DescribeRIUtilizationDetailResponse {
  /**
   * 总数。
   */
  TotalCount?: number
  /**
   * 详情。
   */
  RIUtilizationDetailSet?: Array<RIUtilizationDetail>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 托管prometheus告警配置实例
 */
export interface PrometheusAlertRuleDetail {
  /**
   * 规则名称
   */
  Name: string
  /**
   * 规则列表
   */
  Rules: Array<PrometheusAlertRule>
  /**
   * 最后修改时间
   */
  UpdatedAt?: string
  /**
   * 告警渠道
   */
  Notification?: PrometheusNotification
  /**
   * 告警 id
   */
  Id?: string
  /**
   * 如果该告警来至模板下发，则TemplateId为模板id
注意：此字段可能返回 null，表示取不到有效值。
   */
  TemplateId?: string
  /**
   * 计算周期
注意：此字段可能返回 null，表示取不到有效值。
   */
  Interval?: string
}

/**
 * GetUpgradeInstanceProgress返回参数结构体
 */
export interface GetUpgradeInstanceProgressResponse {
  /**
   * 升级节点总数
   */
  Total?: number
  /**
   * 已升级节点总数
   */
  Done?: number
  /**
   * 升级任务生命周期
process 运行中
paused 已停止
pauing 正在停止
done  已完成
timeout 已超时
aborted 已取消
   */
  LifeState?: string
  /**
   * 各节点升级进度详情
   */
  Instances?: Array<InstanceUpgradeProgressItem>
  /**
   * 集群当前状态
   */
  ClusterStatus?: InstanceUpgradeClusterStatus
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeClusterInstances返回参数结构体
 */
export interface DescribeClusterInstancesResponse {
  /**
   * 集群中实例总数
   */
  TotalCount?: number
  /**
   * 集群中实例列表
   */
  InstanceSet?: Array<Instance>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreatePrometheusAlertRule请求参数结构体
 */
export interface CreatePrometheusAlertRuleRequest {
  /**
   * 实例id
   */
  InstanceId: string
  /**
   * 告警配置
   */
  AlertRule: PrometheusAlertRuleDetail
}

/**
 * UpdateEKSCluster请求参数结构体
 */
export interface UpdateEKSClusterRequest {
  /**
   * 弹性集群Id
   */
  ClusterId: string
  /**
   * 弹性集群名称
   */
  ClusterName?: string
  /**
   * 弹性集群描述信息
   */
  ClusterDesc?: string
  /**
   * 子网Id 列表
   */
  SubnetIds?: Array<string>
  /**
   * 弹性容器集群公网访问LB信息
   */
  PublicLB?: ClusterPublicLB
  /**
   * 弹性容器集群内网访问LB信息
   */
  InternalLB?: ClusterInternalLB
  /**
   * Service 子网Id
   */
  ServiceSubnetId?: string
  /**
   * 集群自定义的dns 服务器信息
   */
  DnsServers?: Array<DnsServerConf>
  /**
   * 是否清空自定义dns 服务器设置。为1 表示 是。其他表示 否。
   */
  ClearDnsServer?: string
  /**
   * 将来删除集群时是否要删除cbs。默认为 FALSE
   */
  NeedDeleteCbs?: boolean
  /**
   * 标记是否是新的内外网。默认为false
   */
  ProxyLB?: boolean
  /**
   * 扩展参数。须是map[string]string 的json 格式。
   */
  ExtraParam?: string
}

/**
 * CreateTKEEdgeCluster请求参数结构体
 */
export interface CreateTKEEdgeClusterRequest {
  /**
   * k8s版本号
   */
  K8SVersion: string
  /**
   * vpc 的Id
   */
  VpcId: string
  /**
   * 集群名称
   */
  ClusterName: string
  /**
   * 集群pod cidr
   */
  PodCIDR: string
  /**
   * 集群service cidr
   */
  ServiceCIDR: string
  /**
   * 集群描述信息
   */
  ClusterDesc?: string
  /**
   * 集群高级设置
   */
  ClusterAdvancedSettings?: EdgeClusterAdvancedSettings
  /**
   * 节点上最大Pod数量
   */
  MaxNodePodNum?: number
  /**
   * 边缘计算集群公网访问LB信息
   */
  PublicLB?: EdgeClusterPublicLB
  /**
   * 集群的级别
   */
  ClusterLevel?: string
  /**
   * 集群是否支持自动升配
   */
  AutoUpgradeClusterLevel?: boolean
  /**
   * 集群计费方式
   */
  ChargeType?: string
  /**
   * 边缘集群版本，此版本区别于k8s版本，是整个集群各组件版本集合
   */
  EdgeVersion?: string
  /**
   * 边缘组件镜像仓库前缀
   */
  RegistryPrefix?: string
  /**
   * 集群绑定的云标签
   */
  TagSpecification?: TagSpecification
}

/**
 * DescribeSupportedRuntime返回参数结构体
 */
export interface DescribeSupportedRuntimeResponse {
  /**
   * 可选运行时列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  OptionalRuntimes?: Array<OptionalRuntimes>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateClusterVirtualNodePool返回参数结构体
 */
export interface CreateClusterVirtualNodePoolResponse {
  /**
   * 节点池ID
   */
  NodePoolId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateEKSCluster返回参数结构体
 */
export interface CreateEKSClusterResponse {
  /**
   * 弹性集群Id
   */
  ClusterId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateImageCache返回参数结构体
 */
export interface CreateImageCacheResponse {
  /**
   * 镜像缓存Id
   */
  ImageCacheId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateEdgeLogConfig返回参数结构体
 */
export interface CreateEdgeLogConfigResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeAvailableTKEEdgeVersion返回参数结构体
 */
export interface DescribeAvailableTKEEdgeVersionResponse {
  /**
   * 版本列表
   */
  Versions?: Array<string>
  /**
   * 边缘集群最新版本
注意：此字段可能返回 null，表示取不到有效值。
   */
  EdgeVersionLatest?: string
  /**
   * 边缘集群当前版本
注意：此字段可能返回 null，表示取不到有效值。
   */
  EdgeVersionCurrent?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyPrometheusRecordRuleYaml请求参数结构体
 */
export interface ModifyPrometheusRecordRuleYamlRequest {
  /**
   * 实例id
   */
  InstanceId: string
  /**
   * 聚合实例名称
   */
  Name: string
  /**
   * 新的内容
   */
  Content: string
}

/**
 * DeletePrometheusAlertPolicy返回参数结构体
 */
export interface DeletePrometheusAlertPolicyResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * InstallEdgeLogAgent返回参数结构体
 */
export interface InstallEdgeLogAgentResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 边缘容器集群可用的自定义参数
 */
export interface EdgeAvailableExtraArgs {
  /**
   * kube-apiserver可用的自定义参数
注意：此字段可能返回 null，表示取不到有效值。
   */
  KubeAPIServer?: Array<EdgeArgsFlag>
  /**
   * kube-controller-manager可用的自定义参数
注意：此字段可能返回 null，表示取不到有效值。
   */
  KubeControllerManager?: Array<EdgeArgsFlag>
  /**
   * kube-scheduler可用的自定义参数
注意：此字段可能返回 null，表示取不到有效值。
   */
  KubeScheduler?: Array<EdgeArgsFlag>
  /**
   * kubelet可用的自定义参数
注意：此字段可能返回 null，表示取不到有效值。
   */
  Kubelet?: Array<EdgeArgsFlag>
}

/**
 * IP 地址
 */
export interface IPAddress {
  /**
   * Ip 地址的类型。可为 advertise, public 等
   */
  Type: string
  /**
   * Ip 地址
   */
  Ip: string
  /**
   * 网络端口
   */
  Port: number
}

/**
 * DescribeTKEEdgeClusterCredential请求参数结构体
 */
export interface DescribeTKEEdgeClusterCredentialRequest {
  /**
   * 集群Id
   */
  ClusterId: string
}

/**
 * DescribeLogConfigs请求参数结构体
 */
export interface DescribeLogConfigsRequest {
  /**
   * 集群ID
   */
  ClusterId: string
  /**
   * 当前集群类型支持tke、eks。默认为tke
   */
  ClusterType?: string
  /**
   * 按照采集规则名称查找，多个采集规则使用 "," 分隔。
   */
  LogConfigNames?: string
  /**
   * 偏移量,默认0
   */
  Offset?: number
  /**
   * 最大输出条数，默认20，最大为100
   */
  Limit?: number
}

/**
 * 自动变配集群等级
 */
export interface AutoUpgradeClusterLevel {
  /**
   * 是否开启自动变配集群等级
   */
  IsAutoUpgrade: boolean
}

/**
 * DisableEncryptionProtection返回参数结构体
 */
export interface DisableEncryptionProtectionResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateEKSCluster请求参数结构体
 */
export interface CreateEKSClusterRequest {
  /**
   * k8s版本号。可为1.18.4 1.20.6。
   */
  K8SVersion: string
  /**
   * vpc 的Id
   */
  VpcId: string
  /**
   * 集群名称
   */
  ClusterName: string
  /**
   * 子网Id 列表
   */
  SubnetIds: Array<string>
  /**
   * 集群描述信息
   */
  ClusterDesc?: string
  /**
   * Service CIDR 或 Serivce 所在子网Id
   */
  ServiceSubnetId?: string
  /**
   * 集群自定义的Dns服务器信息
   */
  DnsServers?: Array<DnsServerConf>
  /**
   * 扩展参数。须是map[string]string 的json 格式。
   */
  ExtraParam?: string
  /**
   * 是否在用户集群内开启Dns。默认为true
   */
  EnableVpcCoreDNS?: boolean
  /**
   * 标签描述列表。通过指定该参数可以同时绑定标签到相应的资源实例，当前仅支持绑定标签到集群实例。
   */
  TagSpecification?: Array<TagSpecification>
  /**
   * 子网信息列表
   */
  SubnetInfos?: Array<SubnetInfos>
}

/**
 * 账户UIN与客户端证书CommonName的映射
 */
export interface CommonName {
  /**
   * 子账户UIN
   */
  SubaccountUin?: string
  /**
   * 子账户客户端证书中的CommonName字段
   */
  CN?: string
}

/**
 * EnableEventPersistence请求参数结构体
 */
export interface EnableEventPersistenceRequest {
  /**
   * 集群ID
   */
  ClusterId: string
  /**
   * cls服务的logsetID
   */
  LogsetId?: string
  /**
   * cls服务的topicID
   */
  TopicId?: string
  /**
   * topic所在地域，默认为集群所在地域
   */
  TopicRegion?: string
}

/**
 * ModifyClusterAuthenticationOptions返回参数结构体
 */
export interface ModifyClusterAuthenticationOptionsResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * UpdateAddon请求参数结构体
 */
export interface UpdateAddonRequest {
  /**
   * 集群ID
   */
  ClusterId: string
  /**
   * addon名称
   */
  AddonName: string
  /**
   * addon版本（不传默认不更新，不传AddonVersion时RawValues必传）
   */
  AddonVersion?: string
  /**
   * addon的参数，是一个json格式的base64转码后的字符串（addon参数由DescribeAddonValues获取，不传RawValues时AddonVersion必传））
   */
  RawValues?: string
  /**
   * addon参数的更新策略，支持replace和merge两种策略，默认值为merge，兼容旧版本API。replace：使用新RawValues全量替换addon原RawValues，merge：根据新RawValues新增或更新addon原RawValues中对应参数。
   */
  UpdateStrategy?: string
  /**
   * 是否仅做更新检查，设置为true时仅做检查，不会更新组件
   */
  DryRun?: boolean
}

/**
 * ModifyClusterVirtualNodePool请求参数结构体
 */
export interface ModifyClusterVirtualNodePoolRequest {
  /**
   * 集群ID
   */
  ClusterId: string
  /**
   * 节点池ID
   */
  NodePoolId: string
  /**
   * 节点池名称
   */
  Name?: string
  /**
   * 安全组ID列表
   */
  SecurityGroupIds?: Array<string>
  /**
   * 虚拟节点label
   */
  Labels?: Array<Label>
  /**
   * 虚拟节点taint
   */
  Taints?: Array<Taint>
  /**
   * 删除保护开关
   */
  DeletionProtection?: boolean
}

/**
 * DescribeRegions返回参数结构体
 */
export interface DescribeRegionsResponse {
  /**
   * 地域的数量
注意：此字段可能返回 null，表示取不到有效值。
   */
  TotalCount?: number
  /**
   * 地域列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  RegionInstanceSet?: Array<RegionInstance>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateClusterRoute返回参数结构体
 */
export interface CreateClusterRouteResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 应用市场部署的应用结构
 */
export interface Release {
  /**
   * 应用名称
   */
  Name?: string
  /**
   * 应用命名空间
   */
  Namespace?: string
  /**
   * 应用当前版本
注意：此字段可能返回 null，表示取不到有效值。
   */
  Revision?: string
  /**
   * 应用状态
注意：此字段可能返回 null，表示取不到有效值。
   */
  Status?: string
  /**
   * 制品名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  ChartName?: string
  /**
   * 制品版本
注意：此字段可能返回 null，表示取不到有效值。
   */
  ChartVersion?: string
  /**
   * 制品应用版本
注意：此字段可能返回 null，表示取不到有效值。
   */
  AppVersion?: string
  /**
   * 更新时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  UpdatedTime?: string
  /**
   * 应用描述
注意：此字段可能返回 null，表示取不到有效值。
   */
  Description?: string
}

/**
 * DescribeEKSContainerInstanceRegions请求参数结构体
 */
export type DescribeEKSContainerInstanceRegionsRequest = null

/**
 * DescribeECMInstances请求参数结构体
 */
export interface DescribeECMInstancesRequest {
  /**
   * 集群id
   */
  ClusterID: string
  /**
   * 过滤条件
仅支持ecm-id过滤
   */
  Filters?: Array<Filter>
}

/**
 * DrainClusterVirtualNode返回参数结构体
 */
export interface DrainClusterVirtualNodeResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ECM实例可用区及对应的实例创建数目及运营商的组合
 */
export interface ECMZoneInstanceCountISP {
  /**
   * 创建实例的可用区
   */
  Zone: string
  /**
   * 在当前可用区欲创建的实例数目
   */
  InstanceCount: number
  /**
   * 运营商
   */
  ISP: string
}

/**
 * DescribeVpcCniPodLimits返回参数结构体
 */
export interface DescribeVpcCniPodLimitsResponse {
  /**
   * 机型数据数量
注意：此字段可能返回 null，表示取不到有效值。
   */
  TotalCount?: number
  /**
   * 机型信息及其可支持的最大VPC-CNI模式Pod数量信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  PodLimitsInstanceSet?: Array<PodLimitsInstance>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeVersions返回参数结构体
 */
export interface DescribeVersionsResponse {
  /**
   * 版本数量
注意：此字段可能返回 null，表示取不到有效值。
   */
  TotalCount?: number
  /**
   * 版本列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  VersionInstanceSet?: Array<VersionInstance>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * opa策略开关
 */
export interface OpenPolicySwitch {
  /**
   * 策略运行模式：dryrun空跑不生效，deny拦截生效
   */
  EnforcementAction: string
  /**
   * 策略英文名称
   */
  Name: string
  /**
   * 策略模板类型
   */
  Kind: string
  /**
   * 策略开关状态：open打开，close关闭
   */
  EnabledStatus?: string
  /**
   * 策略关联的实例列表
   */
  OpenConstraintInfoList?: Array<OpenConstraintInfo>
}

/**
 * ScaleInClusterMaster请求参数结构体
 */
export interface ScaleInClusterMasterRequest {
  /**
   * 集群实例ID
   */
  ClusterId: string
  /**
   * master缩容选项
   */
  ScaleInMasters: Array<ScaleInMaster>
}

/**
 * DeleteEdgeClusterInstances请求参数结构体
 */
export interface DeleteEdgeClusterInstancesRequest {
  /**
   * 集群ID
   */
  ClusterId: string
  /**
   * 待删除实例ID数组
   */
  InstanceIds: Array<string>
}

/**
 * EnableEventPersistence返回参数结构体
 */
export interface EnableEventPersistenceResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 超级节点
 */
export interface VirtualNodeSpec {
  /**
   * 节点展示名称
   */
  DisplayName: string
  /**
   * 子网ID
   */
  SubnetId: string
  /**
   * 腾讯云标签
   */
  Tags?: Array<Tag>
}

/**
 * 集群网络相关的参数
 */
export interface ClusterNetworkSettings {
  /**
   * 用于分配集群容器和服务 IP 的 CIDR，不得与 VPC CIDR 冲突，也不得与同 VPC 内其他集群 CIDR 冲突
   */
  ClusterCIDR?: string
  /**
   * 是否忽略 ClusterCIDR 冲突错误, 默认不忽略
   */
  IgnoreClusterCIDRConflict?: boolean
  /**
   * 集群中每个Node上最大的Pod数量(默认为256)
   */
  MaxNodePodNum?: number
  /**
   * 集群最大的service数量(默认为256)
   */
  MaxClusterServiceNum?: number
  /**
   * 是否启用IPVS(默认不开启)
   */
  Ipvs?: boolean
  /**
   * 集群的VPCID（如果创建空集群，为必传值，否则自动设置为和集群的节点保持一致）
   */
  VpcId?: string
  /**
   * 网络插件是否启用CNI(默认开启)
   */
  Cni?: boolean
  /**
   * service的网络模式，当前参数只适用于ipvs+bpf模式
注意：此字段可能返回 null，表示取不到有效值。
   */
  KubeProxyMode?: string
  /**
   * 用于分配service的IP range，不得与 VPC CIDR 冲突，也不得与同 VPC 内其他集群 CIDR 冲突
注意：此字段可能返回 null，表示取不到有效值。
   */
  ServiceCIDR?: string
  /**
   * 集群关联的容器子网
注意：此字段可能返回 null，表示取不到有效值。
   */
  Subnets?: Array<string>
  /**
   * 是否忽略 ServiceCIDR 冲突错误, 仅在 VPC-CNI 模式生效，默认不忽略
注意：此字段可能返回 null，表示取不到有效值。
   */
  IgnoreServiceCIDRConflict?: boolean
  /**
   * 集群VPC-CNI模式是否为非双栈集群，默认false，非双栈。
注意：此字段可能返回 null，表示取不到有效值。
   */
  IsDualStack?: boolean
  /**
   * 用于分配service的IP range，由系统自动分配
注意：此字段可能返回 null，表示取不到有效值。
   */
  Ipv6ServiceCIDR?: string
  /**
   * 集群Cilium Mode配置
- clusterIP
注意：此字段可能返回 null，表示取不到有效值。
   */
  CiliumMode?: string
}

/**
 * DescribeImages返回参数结构体
 */
export interface DescribeImagesResponse {
  /**
   * 镜像数量
注意：此字段可能返回 null，表示取不到有效值。
   */
  TotalCount?: number
  /**
   * 镜像信息列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  ImageInstanceSet?: Array<ImageInstance>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * UninstallEdgeLogAgent请求参数结构体
 */
export interface UninstallEdgeLogAgentRequest {
  /**
   * 集群ID
   */
  ClusterId: string
}

/**
 * 集群master自定义参数
 */
export interface ClusterExtraArgs {
  /**
   * kube-apiserver自定义参数，参数格式为["k1=v1", "k1=v2"]， 例如["max-requests-inflight=500","feature-gates=PodShareProcessNamespace=true,DynamicKubeletConfig=true"]
注意：此字段可能返回 null，表示取不到有效值。
   */
  KubeAPIServer?: Array<string>
  /**
   * kube-controller-manager自定义参数
注意：此字段可能返回 null，表示取不到有效值。
   */
  KubeControllerManager?: Array<string>
  /**
   * kube-scheduler自定义参数
注意：此字段可能返回 null，表示取不到有效值。
   */
  KubeScheduler?: Array<string>
  /**
   * etcd自定义参数，只支持独立集群
注意：此字段可能返回 null，表示取不到有效值。
   */
  Etcd?: Array<string>
}

/**
 * 注释
 */
export interface AnnotationValue {
  /**
   * 注释键
   */
  Name: string
  /**
   * 注释值
   */
  Value: string
}

/**
 * CreateClusterEndpointVip返回参数结构体
 */
export interface CreateClusterEndpointVipResponse {
  /**
   * 请求任务的FlowId
   */
  RequestFlowId?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 任务步骤信息
 */
export interface TaskStepInfo {
  /**
   * 步骤名称
   */
  Step?: string
  /**
   * 生命周期
pending : 步骤未开始
running: 步骤执行中
success: 步骤成功完成
failed: 步骤失败
   */
  LifeState?: string
  /**
   * 步骤开始时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  StartAt?: string
  /**
   * 步骤结束时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  EndAt?: string
  /**
   * 若步骤生命周期为failed,则此字段显示错误信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  FailedMsg?: string
}

/**
 * DeletePrometheusAlertRule请求参数结构体
 */
export interface DeletePrometheusAlertRuleRequest {
  /**
   * 实例id
   */
  InstanceId: string
  /**
   * 告警规则id列表
   */
  AlertIds: Array<string>
}

/**
 * NodePool的运行时配置
 */
export interface NodePoolRuntime {
  /**
   * 节点池ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  NodePoolId?: string
  /**
   * 运行时类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  RuntimeType?: string
  /**
   * 运行时版本
注意：此字段可能返回 null，表示取不到有效值。
   */
  RuntimeVersion?: string
  /**
   * 节点池名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  NodePoolName?: string
}

/**
 * ModifyReservedInstanceScope返回参数结构体
 */
export interface ModifyReservedInstanceScopeResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeRouteTableConflicts请求参数结构体
 */
export interface DescribeRouteTableConflictsRequest {
  /**
   * 路由表CIDR
   */
  RouteTableCidrBlock: string
  /**
   * 路由表绑定的VPC
   */
  VpcId: string
}

/**
 * DeleteClusterEndpointVip返回参数结构体
 */
export interface DeleteClusterEndpointVipResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 描述集群的基本配置信息
 */
export interface ClusterBasicSettings {
  /**
   * 集群操作系统，支持设置公共镜像(字段传相应镜像Name)和自定义镜像(字段传相应镜像ID)，详情参考：https://cloud.tencent.com/document/product/457/68289
   */
  ClusterOs?: string
  /**
   * 集群版本,默认值为1.10.5
   */
  ClusterVersion?: string
  /**
   * 集群名称
   */
  ClusterName?: string
  /**
   * 集群描述
   */
  ClusterDescription?: string
  /**
   * 私有网络ID，形如vpc-e55paxnt。创建托管空集群时必传。
   */
  VpcId?: string
  /**
   * 集群内新增资源所属项目ID。
   */
  ProjectId?: number
  /**
   * 标签描述列表。通过指定该参数可以同时绑定标签到相应的资源实例，当前仅支持绑定标签到集群实例。
   */
  TagSpecification?: Array<TagSpecification>
  /**
   * 容器的镜像版本，"DOCKER_CUSTOMIZE"(容器定制版),"GENERAL"(普通版本，默认值)
   */
  OsCustomizeType?: string
  /**
   * 是否开启节点的默认安全组(默认: 否，Alpha特性)
   */
  NeedWorkSecurityGroup?: boolean
  /**
   * 当选择Cilium Overlay网络插件时，TKE会从该子网获取2个IP用来创建内网负载均衡
   */
  SubnetId?: string
  /**
   * 集群等级，针对托管集群生效
   */
  ClusterLevel?: string
  /**
   * 自动变配集群等级，针对托管集群生效
   */
  AutoUpgradeClusterLevel?: AutoUpgradeClusterLevel
}

/**
 * 模板实例
 */
export interface PrometheusTemp {
  /**
   * 模板名称
   */
  Name: string
  /**
   * 模板维度，支持以下类型
instance 实例级别
cluster 集群级别
   */
  Level: string
  /**
   * 模板描述
注意：此字段可能返回 null，表示取不到有效值。
   */
  Describe?: string
  /**
   * 当Level为instance时有效，
模板中的聚合规则列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  RecordRules?: Array<PrometheusConfigItem>
  /**
   * 当Level为cluster时有效，
模板中的ServiceMonitor规则列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  ServiceMonitors?: Array<PrometheusConfigItem>
  /**
   * 当Level为cluster时有效，
模板中的PodMonitors规则列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  PodMonitors?: Array<PrometheusConfigItem>
  /**
   * 当Level为cluster时有效，
模板中的RawJobs规则列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  RawJobs?: Array<PrometheusConfigItem>
  /**
   * 模板的ID, 用于出参
注意：此字段可能返回 null，表示取不到有效值。
   */
  TemplateId?: string
  /**
   * 最近更新时间，用于出参
注意：此字段可能返回 null，表示取不到有效值。
   */
  UpdateTime?: string
  /**
   * 当前版本，用于出参
注意：此字段可能返回 null，表示取不到有效值。
   */
  Version?: string
  /**
   * 是否系统提供的默认模板，用于出参
注意：此字段可能返回 null，表示取不到有效值。
   */
  IsDefault?: boolean
  /**
   * 当Level为instance时有效，
模板中的告警配置列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  AlertDetailRules?: Array<PrometheusAlertPolicyItem>
  /**
   * 关联实例数目
注意：此字段可能返回 null，表示取不到有效值。
   */
  TargetsTotal?: number
}

/**
 * DescribeBackupStorageLocations返回参数结构体
 */
export interface DescribeBackupStorageLocationsResponse {
  /**
   * 详细备份仓库信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  BackupStorageLocationSet?: Array<BackupStorageLocation>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 可选运行时
 */
export interface OptionalRuntimes {
  /**
   * 运行时类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  RuntimeType?: string
  /**
   * 运行时版本列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  RuntimeVersions?: Array<string>
  /**
   * 该类型的默认运行时版本
注意：此字段可能返回 null，表示取不到有效值。
   */
  DefaultVersion?: string
}

/**
 * ModifyClusterAsGroupAttribute返回参数结构体
 */
export interface ModifyClusterAsGroupAttributeResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeletePrometheusTemp请求参数结构体
 */
export interface DeletePrometheusTempRequest {
  /**
   * 模板id
   */
  TemplateId: string
}

/**
 * DescribeTKEEdgeScript返回参数结构体
 */
export interface DescribeTKEEdgeScriptResponse {
  /**
   * 下载链接
   */
  Link?: string
  /**
   * 下载需要的token
   */
  Token?: string
  /**
   * 下载命令
   */
  Command?: string
  /**
   * edgectl脚本版本，默认拉取最新版本
注意：此字段可能返回 null，表示取不到有效值。
   */
  ScriptVersion?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeClusterRouteTables返回参数结构体
 */
export interface DescribeClusterRouteTablesResponse {
  /**
   * 符合条件的实例数量。
   */
  TotalCount?: number
  /**
   * 集群路由表对象。
   */
  RouteTableSet?: Array<RouteTableInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteLogConfigs请求参数结构体
 */
export interface DeleteLogConfigsRequest {
  /**
   * 集群ID
   */
  ClusterId: string
  /**
   * 待删除采集规则名称，多个采集规则使用","分隔
   */
  LogConfigNames: string
  /**
   * 集群集群类型, tke/eks 默认为 tke 集群
   */
  ClusterType?: string
}

/**
 * ModifyClusterTags请求参数结构体
 */
export interface ModifyClusterTagsRequest {
  /**
   * 集群ID
   */
  ClusterId: string
  /**
   * 集群标签
   */
  Tags?: Array<Tag>
  /**
   * 是否同步集群内子资源标签
   */
  SyncSubresource?: boolean
}

/**
 * DescribeClusterKubeconfig请求参数结构体
 */
export interface DescribeClusterKubeconfigRequest {
  /**
   * 集群ID
   */
  ClusterId: string
  /**
   * 默认false 获取内网，是否获取外网访问的kubeconfig
   */
  IsExtranet?: boolean
}

/**
 * DeletePrometheusTempSync请求参数结构体
 */
export interface DeletePrometheusTempSyncRequest {
  /**
   * 模板id
   */
  TemplateId: string
  /**
   * 取消同步的对象列表
   */
  Targets: Array<PrometheusTemplateSyncTarget>
}

/**
 * CreatePrometheusTemplate返回参数结构体
 */
export interface CreatePrometheusTemplateResponse {
  /**
   * 模板Id
   */
  TemplateId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateClusterEndpointVip请求参数结构体
 */
export interface CreateClusterEndpointVipRequest {
  /**
   * 集群ID
   */
  ClusterId: string
  /**
   * 安全策略放通单个IP或CIDR(例如: "192.168.1.0/24",默认为拒绝所有)
   */
  SecurityPolicies?: Array<string>
}

/**
 * 弹性容器集群内网访问LB信息
 */
export interface ClusterInternalLB {
  /**
   * 是否开启内网访问LB
注意：此字段可能返回 null，表示取不到有效值。
   */
  Enabled: boolean
  /**
   * 内网访问LB关联的子网Id
注意：此字段可能返回 null，表示取不到有效值。
   */
  SubnetId?: string
}

/**
 * UpdateClusterKubeconfig请求参数结构体
 */
export interface UpdateClusterKubeconfigRequest {
  /**
   * 集群ID
   */
  ClusterId: string
  /**
   * 子账户Uin列表，传空默认为调用此接口的SubUin
   */
  SubAccounts?: Array<string>
}

/**
 * DeleteReservedInstances请求参数结构体
 */
export interface DeleteReservedInstancesRequest {
  /**
   * 预留券实例ID。
   */
  ReservedInstanceIds: Array<string>
}

/**
 * DescribePrometheusGlobalConfig请求参数结构体
 */
export interface DescribePrometheusGlobalConfigRequest {
  /**
   * 实例级别抓取配置
   */
  InstanceId: string
  /**
   * 是否禁用统计
   */
  DisableStatistics?: boolean
}

/**
 * CreateECMInstances返回参数结构体
 */
export interface CreateECMInstancesResponse {
  /**
   * ecm id 列表
   */
  EcmIdSet?: Array<string>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyPrometheusGlobalNotification请求参数结构体
 */
export interface ModifyPrometheusGlobalNotificationRequest {
  /**
   * 实例ID
   */
  InstanceId: string
  /**
   * 告警通知渠道
   */
  Notification: PrometheusNotificationItem
}

/**
 * 修改标签失败的资源
 */
export interface FailedResource {
  /**
   * 资源六段式
注意：此字段可能返回 null，表示取不到有效值。
   */
  Resource?: string
  /**
   * 执行失败的原因
注意：此字段可能返回 null，表示取不到有效值。
   */
  Error?: string
}

/**
 * DescribeClusterNodePools返回参数结构体
 */
export interface DescribeClusterNodePoolsResponse {
  /**
   * NodePools（节点池列表）
注意：此字段可能返回 null，表示取不到有效值。
   */
  NodePoolSet?: Array<NodePool>
  /**
   * 资源总数
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 不可用原因
 */
export interface UnavailableReason {
  /**
   * 实例ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  InstanceId?: string
  /**
   * 原因
注意：此字段可能返回 null，表示取不到有效值。
   */
  Reason?: string
}

/**
 * GetUpgradeInstanceProgress请求参数结构体
 */
export interface GetUpgradeInstanceProgressRequest {
  /**
   * 集群ID
   */
  ClusterId: string
  /**
   * 最多获取多少个节点的进度
   */
  Limit?: number
  /**
   * 从第几个节点开始获取进度
   */
  Offset?: number
}

/**
 * UpdateEKSCluster返回参数结构体
 */
export interface UpdateEKSClusterResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeEdgeCVMInstances返回参数结构体
 */
export interface DescribeEdgeCVMInstancesResponse {
  /**
   * 返回的实例相关信息列表的长度
   */
  TotalCount?: number
  /**
   * 返回的实例相关信息列表
   */
  InstanceInfoSet?: Array<string>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeRegions请求参数结构体
 */
export type DescribeRegionsRequest = null

/**
 * ModifyNodePoolDesiredCapacityAboutAsg请求参数结构体
 */
export interface ModifyNodePoolDesiredCapacityAboutAsgRequest {
  /**
   * 集群id
   */
  ClusterId: string
  /**
   * 节点池id
   */
  NodePoolId: string
  /**
   * 节点池所关联的伸缩组的期望实例数
   */
  DesiredCapacity: number
}

/**
 * 预留实例
 */
export interface ReservedInstance {
  /**
   * 预留实例ID
   */
  ReservedInstanceId?: string
  /**
   * 预留实例名称
   */
  ReservedInstanceName?: string
  /**
   * 预留券状态
   */
  Status?: string
  /**
   * 有效期，单位：月
   */
  TimeSpan?: number
  /**
   * 抵扣资源类型
   */
  ResourceType?: string
  /**
   * 资源核数
   */
  Cpu?: number
  /**
   * 资源内存，单位：Gi
   */
  Memory?: number
  /**
   * 预留券的范围，默认值region。
   */
  Scope?: string
  /**
   * 创建时间
   */
  CreatedAt?: string
  /**
   * 生效时间
   */
  ActiveAt?: string
  /**
   * 过期时间
   */
  ExpireAt?: string
  /**
   * GPU卡数
   */
  GpuCount?: string
  /**
   * 自动续费标记
   */
  AutoRenewFlag?: number
  /**
   * 集群 ID
   */
  ClusterId?: string
  /**
   * 节点名称
   */
  NodeName?: string
  /**
   *  上个周期预留券的抵扣状态，Deduct、NotDeduct
   */
  DeductStatus?: string
}

/**
 * DeleteClusterRoute返回参数结构体
 */
export interface DeleteClusterRouteResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 告警通知渠道配置
 */
export interface PrometheusNotificationItem {
  /**
   * 是否启用
   */
  Enabled: boolean
  /**
   * 通道类型，默认为amp，支持以下
amp
webhook
alertmanager
   */
  Type: string
  /**
   * 如果Type为webhook, 则该字段为必填项
注意：此字段可能返回 null，表示取不到有效值。
   */
  WebHook?: string
  /**
   * 如果Type为alertmanager, 则该字段为必填项
注意：此字段可能返回 null，表示取不到有效值。
   */
  AlertManager?: PrometheusAlertManagerConfig
  /**
   * 收敛时间
   */
  RepeatInterval?: string
  /**
   * 生效起始时间
   */
  TimeRangeStart?: string
  /**
   * 生效结束时间
   */
  TimeRangeEnd?: string
  /**
   * 告警通知方式。目前有SMS、EMAIL、CALL、WECHAT方式。
注意：此字段可能返回 null，表示取不到有效值。
   */
  NotifyWay?: Array<string>
  /**
   * 告警接收组（用户组）
注意：此字段可能返回 null，表示取不到有效值。
   */
  ReceiverGroups?: Array<string>
  /**
   * 电话告警顺序。
注：NotifyWay选择CALL，采用该参数。
注意：此字段可能返回 null，表示取不到有效值。
   */
  PhoneNotifyOrder?: Array<number | bigint>
  /**
   * 电话告警次数。
注：NotifyWay选择CALL，采用该参数。
注意：此字段可能返回 null，表示取不到有效值。
   */
  PhoneCircleTimes?: number
  /**
   * 电话告警轮内间隔。单位：秒
注：NotifyWay选择CALL，采用该参数。
注意：此字段可能返回 null，表示取不到有效值。
   */
  PhoneInnerInterval?: number
  /**
   * 电话告警轮外间隔。单位：秒
注：NotifyWay选择CALL，采用该参数。
注意：此字段可能返回 null，表示取不到有效值。
   */
  PhoneCircleInterval?: number
  /**
   * 电话告警触达通知
注：NotifyWay选择CALL，采用该参数。
注意：此字段可能返回 null，表示取不到有效值。
   */
  PhoneArriveNotice?: boolean
}

/**
 * DeleteECMInstances返回参数结构体
 */
export interface DeleteECMInstancesResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeEdgeClusterUpgradeInfo返回参数结构体
 */
export interface DescribeEdgeClusterUpgradeInfoResponse {
  /**
   * 可升级的集群组件及其版本
注意：此字段可能返回 null，表示取不到有效值。
   */
  ComponentVersion?: string
  /**
   * 边缘集群当前版本
注意：此字段可能返回 null，表示取不到有效值。
   */
  EdgeVersionCurrent?: string
  /**
   * 边缘组件镜像仓库地址前缀，包含域名和命名空间
注意：此字段可能返回 null，表示取不到有效值。
   */
  RegistryPrefix?: string
  /**
   * 集群升级状态，可能值：running、updating、failed
注意：此字段可能返回 null，表示取不到有效值。
   */
  ClusterUpgradeStatus?: string
  /**
   * 集群升级中状态或者失败原因
注意：此字段可能返回 null，表示取不到有效值。
   */
  ClusterUpgradeStatusReason?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyClusterNodePool返回参数结构体
 */
export interface ModifyClusterNodePoolResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 托管prometheus告警策略实例
 */
export interface PrometheusAlertPolicyItem {
  /**
   * 策略名称
   */
  Name: string
  /**
   * 规则列表
   */
  Rules: Array<PrometheusAlertRule>
  /**
   * 告警策略 id
注意：此字段可能返回 null，表示取不到有效值。
   */
  Id?: string
  /**
   * 如果该告警来自模板下发，则TemplateId为模板id
注意：此字段可能返回 null，表示取不到有效值。
   */
  TemplateId?: string
  /**
   * 告警渠道，模板中使用可能返回null
注意：此字段可能返回 null，表示取不到有效值。
   */
  Notification?: PrometheusNotificationItem
  /**
   * 最后修改时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  UpdatedAt?: string
  /**
   * 如果告警策略来源于用户集群CRD资源定义，则ClusterId为所属集群ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  ClusterId?: string
}

/**
 * ModifyPrometheusAgentExternalLabels请求参数结构体
 */
export interface ModifyPrometheusAgentExternalLabelsRequest {
  /**
   * 实例ID
   */
  InstanceId: string
  /**
   * 集群ID
   */
  ClusterId: string
  /**
   * 新的external_labels
   */
  ExternalLabels: Array<Label>
}

/**
 * DeleteClusterVirtualNodePool返回参数结构体
 */
export interface DeleteClusterVirtualNodePoolResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * prometheus一个抓取目标的信息
 */
export interface PrometheusTarget {
  /**
   * 抓取目标的URL
   */
  Url?: string
  /**
   * target当前状态,当前支持
up = 健康
down = 不健康
unknown = 未知
   */
  State?: string
  /**
   * target的元label
   */
  Labels?: Array<Label>
  /**
   * 上一次抓取的时间
   */
  LastScrape?: string
  /**
   * 上一次抓取的耗时，单位是s
   */
  ScrapeDuration?: number
  /**
   * 上一次抓取如果错误，该字段存储错误信息
   */
  Error?: string
}

/**
 * 描述了实例登录相关配置与信息。
 */
export interface LoginSettings {
  /**
   * 实例登录密码。不同操作系统类型密码复杂度限制不一样，具体如下：<li>Linux实例密码必须8到30位，至少包括两项[a-z]，[A-Z]、[0-9] 和 [( ) \` ~ ! @ # $ % ^ & *  - + = | { } [ ] : ; ' , . ? / ]中的特殊符号。</li><li>Windows实例密码必须12到30位，至少包括三项[a-z]，[A-Z]，[0-9] 和 [( ) \` ~ ! @ # $ % ^ & * - + = | { } [ ] : ; ' , . ? /]中的特殊符号。</li>若不指定该参数，则由系统随机生成密码，并通过站内信方式通知到用户。
   */
  Password?: string
  /**
   * 密钥ID列表。关联密钥后，就可以通过对应的私钥来访问实例；KeyId可通过接口[DescribeKeyPairs](https://cloud.tencent.com/document/api/213/15699)获取，密钥与密码不能同时指定，同时Windows操作系统不支持指定密钥。
注意：此字段可能返回 null，表示取不到有效值。
   */
  KeyIds?: Array<string>
  /**
   * 保持镜像的原始设置。该参数与Password或KeyIds.N不能同时指定。只有使用自定义镜像、共享镜像或外部导入镜像创建实例时才能指定该参数为true。取值范围：<li>true：表示保持镜像的登录设置</li><li>false：表示不保持镜像的登录设置</li>默认取值：false。
注意：此字段可能返回 null，表示取不到有效值。
   */
  KeepImageLogin?: string
}

/**
 * SyncPrometheusTemplate请求参数结构体
 */
export interface SyncPrometheusTemplateRequest {
  /**
   * 实例id
   */
  TemplateId: string
  /**
   * 同步目标
   */
  Targets: Array<PrometheusTemplateSyncTarget>
}

/**
 * DescribeClusterEndpointStatus请求参数结构体
 */
export interface DescribeClusterEndpointStatusRequest {
  /**
   * 集群ID
   */
  ClusterId: string
  /**
   * 是否为外网访问（TRUE 外网访问 FALSE 内网访问，默认值： FALSE）
   */
  IsExtranet?: boolean
}

/**
 * DescribeClusterStatus返回参数结构体
 */
export interface DescribeClusterStatusResponse {
  /**
   * 集群状态列表
   */
  ClusterStatusSet?: Array<ClusterStatus>
  /**
   * 集群个数
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 从镜像仓库拉取镜像的凭据
 */
export interface ImageRegistryCredential {
  /**
   * 镜像仓库地址
   */
  Server?: string
  /**
   * 用户名
   */
  Username?: string
  /**
   * 密码
   */
  Password?: string
  /**
   * ImageRegistryCredential的名字
   */
  Name?: string
}

/**
 * DescribePrometheusClusterAgents返回参数结构体
 */
export interface DescribePrometheusClusterAgentsResponse {
  /**
   * 被关联集群信息
   */
  Agents?: Array<PrometheusAgentOverview>
  /**
   * 被关联集群总量
   */
  Total?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeVersions请求参数结构体
 */
export type DescribeVersionsRequest = null

/**
 * DescribePrometheusTemp请求参数结构体
 */
export interface DescribePrometheusTempRequest {
  /**
   * 模糊过滤条件，支持
Level 按模板级别过滤
Name 按名称过滤
Describe 按描述过滤
ID 按templateId过滤
   */
  Filters?: Array<Filter>
  /**
   * 分页偏移
   */
  Offset?: number
  /**
   * 总数限制
   */
  Limit?: number
}

/**
 * DeleteAddon返回参数结构体
 */
export interface DeleteAddonResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteClusterRouteTable请求参数结构体
 */
export interface DeleteClusterRouteTableRequest {
  /**
   * 路由表名称
   */
  RouteTableName: string
}

/**
 * DescribeClusterEndpoints请求参数结构体
 */
export interface DescribeClusterEndpointsRequest {
  /**
   * 集群ID
   */
  ClusterId: string
}

/**
 * 节点自定义参数
 */
export interface InstanceExtraArgs {
  /**
   * kubelet自定义参数，参数格式为["k1=v1", "k1=v2"]， 例如["root-dir=/var/lib/kubelet","feature-gates=PodShareProcessNamespace=true,DynamicKubeletConfig=true"]
注意：此字段可能返回 null，表示取不到有效值。
   */
  Kubelet?: Array<string>
}

/**
 * Prometheus告警规则
 */
export interface PrometheusAlertRule {
  /**
   * 规则名称
   */
  Name: string
  /**
   * prometheus语句
   */
  Rule: string
  /**
   * 额外标签
   */
  Labels: Array<Label>
  /**
   * 告警发送模板
   */
  Template: string
  /**
   * 持续时间
   */
  For: string
  /**
   * 该条规则的描述信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  Describe?: string
  /**
   * 参考prometheus rule中的annotations
注意：此字段可能返回 null，表示取不到有效值。
   */
  Annotations?: Array<Label>
  /**
   * 告警规则状态
注意：此字段可能返回 null，表示取不到有效值。
   */
  RuleState?: number
}

/**
 * AcquireClusterAdminRole请求参数结构体
 */
export interface AcquireClusterAdminRoleRequest {
  /**
   * 集群ID
   */
  ClusterId: string
}

/**
 * ListClusterInspectionResults请求参数结构体
 */
export interface ListClusterInspectionResultsRequest {
  /**
   * 目标集群列表，为空查询用户所有集群

   */
  ClusterIds?: Array<string>
  /**
   * 隐藏的字段信息，为了减少无效的字段返回，隐藏字段不会在返回值中返回。可选值：results

   */
  Hide?: Array<string>
  /**
   * 指定查询结果的报告名称，默认查询最新的每个集群只查询最新的一条
   */
  Name?: string
}

/**
 * DeletePrometheusTemplate返回参数结构体
 */
export interface DeletePrometheusTemplateResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribePodDeductionRate请求参数结构体
 */
export interface DescribePodDeductionRateRequest {
  /**
   * 可用区
   */
  Zone?: string
  /**
   * 集群 ID
   */
  ClusterId?: string
  /**
   *  节点名称
   */
  NodeName?: string
}

/**
 * DescribeECMInstances返回参数结构体
 */
export interface DescribeECMInstancesResponse {
  /**
   * 返回的实例相关信息列表的长度
   */
  TotalCount?: number
  /**
   * 返回的实例相关信息列表
   */
  InstanceInfoSet?: Array<string>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribePrometheusInstance请求参数结构体
 */
export interface DescribePrometheusInstanceRequest {
  /**
   * 实例id
   */
  InstanceId: string
}

/**
 * DescribePrometheusTemp返回参数结构体
 */
export interface DescribePrometheusTempResponse {
  /**
   * 模板列表
   */
  Templates?: Array<PrometheusTemp>
  /**
   * 总数
   */
  Total?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateClusterRelease返回参数结构体
 */
export interface CreateClusterReleaseResponse {
  /**
   * 应用详情
注意：此字段可能返回 null，表示取不到有效值。
   */
  Release?: PendingRelease
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 集群属性
 */
export interface ClusterProperty {
  /**
   * 节点hostname命名模式
注意：此字段可能返回 null，表示取不到有效值。
   */
  NodeNameType?: string
}

/**
 * 边缘容器集群master自定义参数
 */
export interface EdgeClusterExtraArgs {
  /**
   * kube-apiserver自定义参数，参数格式为["k1=v1", "k1=v2"]， 例如["max-requests-inflight=500","feature-gates=PodShareProcessNamespace=true,DynamicKubeletConfig=true"]
注意：此字段可能返回 null，表示取不到有效值。
   */
  KubeAPIServer?: Array<string>
  /**
   * kube-controller-manager自定义参数
注意：此字段可能返回 null，表示取不到有效值。
   */
  KubeControllerManager?: Array<string>
  /**
   * kube-scheduler自定义参数
注意：此字段可能返回 null，表示取不到有效值。
   */
  KubeScheduler?: Array<string>
}

/**
 * DescribePrometheusTargets返回参数结构体
 */
export interface DescribePrometheusTargetsResponse {
  /**
   * 所有Job的targets信息
   */
  Jobs?: Array<PrometheusJobTargets>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 应用市场中部署的应用版本历史
 */
export interface ReleaseHistory {
  /**
   * 应用名称
   */
  Name?: string
  /**
   * 应用命名空间
   */
  Namespace?: string
  /**
   * 应用版本
注意：此字段可能返回 null，表示取不到有效值。
   */
  Revision?: number
  /**
   * 应用状态
注意：此字段可能返回 null，表示取不到有效值。
   */
  Status?: string
  /**
   * 应用制品名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  Chart?: string
  /**
   * 应用制品版本
注意：此字段可能返回 null，表示取不到有效值。
   */
  AppVersion?: string
  /**
   * 应用更新时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  UpdatedTime?: string
  /**
   * 应用描述
注意：此字段可能返回 null，表示取不到有效值。
   */
  Description?: string
}

/**
 * DescribeEnableVpcCniProgress返回参数结构体
 */
export interface DescribeEnableVpcCniProgressResponse {
  /**
   * 任务进度的描述：Running/Succeed/Failed
   */
  Status?: string
  /**
   * 当任务进度为Failed时，对任务状态的进一步描述，例如IPAMD组件安装失败
注意：此字段可能返回 null，表示取不到有效值。
   */
  ErrorMessage?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 预留券规格
 */
export interface ReservedInstanceSpec {
  /**
   * 资源类型：common、amd、v100、t4、a10\*gnv4、a10\*gnv4v、a10\*pnv4、windows-common、windows-amd，common表示通用类型。
   */
  Type: string
  /**
   * 核数
   */
  Cpu: number
  /**
   * 内存
   */
  Memory: number
  /**
   * GPU卡数，当Type为GPU类型时设置。
   */
  Gpu?: number
}

/**
 * 托管prometheus agent概览
 */
export interface PrometheusAgentOverview {
  /**
   * 集群类型
   */
  ClusterType?: string
  /**
   * 集群id
   */
  ClusterId?: string
  /**
   * agent状态
normal = 正常
abnormal = 异常
   */
  Status?: string
  /**
   * 集群名称
   */
  ClusterName?: string
  /**
   * 额外labels
本集群的所有指标都会带上这几个label
注意：此字段可能返回 null，表示取不到有效值。
   */
  ExternalLabels?: Array<Label>
  /**
   * 集群所在地域
注意：此字段可能返回 null，表示取不到有效值。
   */
  Region?: string
  /**
   * 集群所在VPC ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  VpcId?: string
  /**
   * 记录关联等操作的失败信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  FailedReason?: string
}

/**
 * app所支持的chart
 */
export interface AppChart {
  /**
   * chart名称
   */
  Name?: string
  /**
   * chart的标签
注意：此字段可能返回 null，表示取不到有效值。
   */
  Label?: string
  /**
   * chart的版本
   */
  LatestVersion?: string
}

/**
 * DeleteEdgeCVMInstances请求参数结构体
 */
export interface DeleteEdgeCVMInstancesRequest {
  /**
   * 集群ID
   */
  ClusterID: string
  /**
   * cvm id集合
   */
  CvmIdSet: Array<string>
}

/**
 * ModifyClusterNodePool请求参数结构体
 */
export interface ModifyClusterNodePoolRequest {
  /**
   * 集群ID
   */
  ClusterId: string
  /**
   * 节点池ID
   */
  NodePoolId: string
  /**
   * 名称
   */
  Name?: string
  /**
   * 最大节点数
   */
  MaxNodesNum?: number
  /**
   * 最小节点数
   */
  MinNodesNum?: number
  /**
   * 标签
   */
  Labels?: Array<Label>
  /**
   * 污点
   */
  Taints?: Array<Taint>
  /**
   * 节点 Annotation 列表
   */
  Annotations?: Array<AnnotationValue>
  /**
   * 是否开启伸缩
   */
  EnableAutoscale?: boolean
  /**
   * 操作系统名称
   */
  OsName?: string
  /**
   * 镜像版本，"DOCKER_CUSTOMIZE"(容器定制版),"GENERAL"(普通版本，默认值)
   */
  OsCustomizeType?: string
  /**
   * GPU驱动版本，CUDA版本，cuDNN版本以及是否启用MIG特性
   */
  GPUArgs?: GPUArgs
  /**
   * base64编码后的自定义脚本
   */
  UserScript?: string
  /**
   * 更新label和taint时忽略存量节点
   */
  IgnoreExistedNode?: boolean
  /**
   * 节点自定义参数
   */
  ExtraArgs?: InstanceExtraArgs
  /**
   * 资源标签
   */
  Tags?: Array<Tag>
  /**
   * 设置加入的节点是否参与调度，默认值为0，表示参与调度；非0表示不参与调度, 待节点初始化完成之后, 可执行kubectl uncordon nodename使node加入调度.
   */
  Unschedulable?: number
  /**
   * 删除保护开关
   */
  DeletionProtection?: boolean
  /**
   * dockerd --graph 指定值, 默认为 /var/lib/docker
   */
  DockerGraphPath?: string
  /**
   * base64编码后的自定义脚本
   */
  PreStartUserScript?: string
}

/**
 * InstallLogAgent返回参数结构体
 */
export interface InstallLogAgentResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * GetClusterLevelPrice请求参数结构体
 */
export interface GetClusterLevelPriceRequest {
  /**
   * 集群规格，托管集群询价
   */
  ClusterLevel: string
}

/**
 * CreateClusterEndpoint返回参数结构体
 */
export interface CreateClusterEndpointResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeReservedInstances请求参数结构体
 */
export interface DescribeReservedInstancesRequest {
  /**
   * 偏移量，默认0。
   */
  Offset?: number
  /**
   * 返回数量，默认为20，最大值为100。
   */
  Limit?: number
  /**
   * status
按照**【状态**】进行过滤。状态：Creating、Active、Expired、Refunded。
类型：String
必选：否

resource-type
按照**【资源类型**】进行过滤。资源类型：common、amd、v100、t4、a10\*gnv4、a10\*gnv4v等，common表示通用类型。
类型：String
必选：否

cpu
按照**【核数**】进行过滤。
类型：String
必选：否

memory
按照**【内存**】进行过滤。
类型：String
必选：否

gpu
按照**【GPU卡数**】进行过滤，取值有0.25、0.5、1、2、4等。
类型：String
必选：否

cluster-id
按照**【集群ID**】进行过滤。
类型：String
必选：否

node-name
按照**【节点名称**】进行过滤。
类型：String
必选：否

scope
按照**【可用区**】进行过滤。比如：ap-guangzhou-2，为空字符串表示地域抵扣范围。如果只过滤可用区抵扣范围，需要同时将cluster-id、node-name设置为空字符串。
类型：String
必选：否

reserved-instance-id
按照**【预留实例ID**】进行过滤。预留实例ID形如：eksri-xxxxxxxx。
类型：String
必选：否

reserved-instance-name
按照**【预留实例名称**】进行过滤。
类型：String
必选：否

reserved-instance-deduct
按照**【上个周期抵扣的预留券**】进行过滤。Values可不设置。
必选：否

reserved-instance-not-deduct
按照**【上个周期未抵扣的预留券**】进行过滤。Values可不设置。
必选：否
   */
  Filters?: Array<Filter>
  /**
   * 排序字段。支持CreatedAt、ActiveAt、ExpireAt。默认值CreatedAt。
   */
  OrderField?: string
  /**
   * 排序方法。顺序：ASC，倒序：DESC。默认值DESC。
   */
  OrderDirection?: string
}

/**
 * DescribePodsBySpec请求参数结构体
 */
export interface DescribePodsBySpecRequest {
  /**
   * 核数
   */
  Cpu: number
  /**
   * 内存
   */
  Memory: number
  /**
   * 卡数，有0.25、0.5、1、2、4等
   */
  GpuNum?: string
  /**
   * 可用区
   */
  Zone?: string
  /**
   * 集群 ID
   */
  ClusterId?: string
  /**
   * 节点名称
   */
  NodeName?: string
  /**
   * 偏移量，默认0。
   */
  Offset?: number
  /**
   * 返回数量，默认为20，最大值为100。
   */
  Limit?: number
  /**
   * pod-type
按照**【Pod 类型**】进行过滤。资源类型：intel、amd、v100、t4、a10\*gnv4、a10\*gnv4v等。
类型：String
必选：否

pod-deduct
按照**【上个周期抵扣的Pod**】进行过滤。Values可不设置。
必选：否

pod-not-deduct
按照**【上个周期未抵扣的Pod**】进行过滤。Values可不设置。
必选：否
   */
  Filters?: Array<Filter>
}

/**
 * UpdateClusterKubeconfig返回参数结构体
 */
export interface UpdateClusterKubeconfigResponse {
  /**
   * 已更新的子账户Uin列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  UpdatedSubAccounts?: Array<string>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ForwardApplicationRequestV3返回参数结构体
 */
export interface ForwardApplicationRequestV3Response {
  /**
   * 请求集群addon后返回的数据
   */
  ResponseBody?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 运行时配置
 */
export interface RuntimeConfig {
  /**
   * 运行时类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  RuntimeType?: string
  /**
   * 运行时版本
注意：此字段可能返回 null，表示取不到有效值。
   */
  RuntimeVersion?: string
}

/**
 * ModifyClusterAuthenticationOptions请求参数结构体
 */
export interface ModifyClusterAuthenticationOptionsRequest {
  /**
   * 集群ID
   */
  ClusterId: string
  /**
   * ServiceAccount认证配置
   */
  ServiceAccounts?: ServiceAccountAuthenticationOptions
  /**
   * OIDC认证配置
   */
  OIDCConfig?: OIDCConfigAuthenticationOptions
}

/**
 * DeleteClusterEndpointVip请求参数结构体
 */
export interface DeleteClusterEndpointVipRequest {
  /**
   * 集群ID
   */
  ClusterId: string
}

/**
 * 健康探针
 */
export interface LivenessOrReadinessProbe {
  /**
   * 探针参数
注意：此字段可能返回 null，表示取不到有效值。
   */
  Probe: Probe
  /**
   * HttpGet检测参数
注意：此字段可能返回 null，表示取不到有效值。
   */
  HttpGet?: HttpGet
  /**
   * 容器内检测命令参数
注意：此字段可能返回 null，表示取不到有效值。
   */
  Exec?: Exec
  /**
   * TcpSocket检测的端口参数
注意：此字段可能返回 null，表示取不到有效值。
   */
  TcpSocket?: TcpSocket
}

/**
 * DescribeClusterLevelChangeRecords返回参数结构体
 */
export interface DescribeClusterLevelChangeRecordsResponse {
  /**
   * 总数
   */
  TotalCount?: number
  /**
   * 集群规模
   */
  Items?: Array<ClusterLevelChangeRecord>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 集群状态信息
 */
export interface ClusterStatus {
  /**
   * 集群Id
   */
  ClusterId?: string
  /**
   * 集群状态
   */
  ClusterState?: string
  /**
   * 集群下机器实例的状态
   */
  ClusterInstanceState?: string
  /**
   * 集群是否开启监控
   */
  ClusterBMonitor?: boolean
  /**
   * 集群创建中的节点数，-1表示获取节点状态超时，-2表示获取节点状态失败
   */
  ClusterInitNodeNum?: number
  /**
   * 集群运行中的节点数，-1表示获取节点状态超时，-2表示获取节点状态失败
   */
  ClusterRunningNodeNum?: number
  /**
   * 集群异常的节点数，-1表示获取节点状态超时，-2表示获取节点状态失败
   */
  ClusterFailedNodeNum?: number
  /**
   * 集群已关机的节点数，-1表示获取节点状态超时，-2表示获取节点状态失败
注意：此字段可能返回 null，表示取不到有效值。
   */
  ClusterClosedNodeNum?: number
  /**
   * 集群关机中的节点数，-1表示获取节点状态超时，-2表示获取节点状态失败
注意：此字段可能返回 null，表示取不到有效值。
   */
  ClusterClosingNodeNum?: number
  /**
   * 集群是否开启删除保护
注意：此字段可能返回 null，表示取不到有效值。
   */
  ClusterDeletionProtection?: boolean
  /**
   * 集群是否可审计
注意：此字段可能返回 null，表示取不到有效值。
   */
  ClusterAuditEnabled?: boolean
}

/**
 * DescribePrometheusAgents返回参数结构体
 */
export interface DescribePrometheusAgentsResponse {
  /**
   * 被关联集群信息
   */
  Agents?: Array<PrometheusAgentOverview>
  /**
   * 被关联集群总量
   */
  Total?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeVpcCniPodLimits请求参数结构体
 */
export interface DescribeVpcCniPodLimitsRequest {
  /**
   * 查询的机型所在可用区，如：ap-guangzhou-3，默认为空，即不按可用区过滤信息
   */
  Zone?: string
  /**
   * 查询的实例机型系列信息，如：S5，默认为空，即不按机型系列过滤信息
   */
  InstanceFamily?: string
  /**
   * 查询的实例机型信息，如：S5.LARGE8，默认为空，即不按机型过滤信息
   */
  InstanceType?: string
}

/**
 * DeleteImageCaches返回参数结构体
 */
export interface DeleteImageCachesResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeEKSContainerInstanceRegions返回参数结构体
 */
export interface DescribeEKSContainerInstanceRegionsResponse {
  /**
   * EKS Container Instance支持的地域信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  Regions: Array<EksCiRegionInfo>
  /**
   * 总数
   */
  TotalCount: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyClusterRuntimeConfig返回参数结构体
 */
export interface ModifyClusterRuntimeConfigResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyPrometheusRecordRuleYaml返回参数结构体
 */
export interface ModifyPrometheusRecordRuleYamlResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeTKEEdgeScript请求参数结构体
 */
export interface DescribeTKEEdgeScriptRequest {
  /**
   * 集群id
   */
  ClusterId: string
  /**
   * 网卡名,指定边缘节点上kubelet向apiserver注册使用的网卡
   */
  Interface: string
  /**
   * 节点名字
   */
  NodeName?: string
  /**
   * json格式的节点配置
   */
  Config?: string
  /**
   * 可以下载某个历史版本的edgectl脚本，默认下载最新版本，edgectl版本信息可以在脚本里查看
   */
  ScriptVersion?: string
}

/**
 * AddVpcCniSubnets返回参数结构体
 */
export interface AddVpcCniSubnetsResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 集群巡检统计结果
 */
export interface KubeJarvisStateStatistic {
  /**
   * 诊断结果的健康水平
注意：此字段可能返回 null，表示取不到有效值。
   */
  HealthyLevel?: string
  /**
   * 诊断结果的统计
注意：此字段可能返回 null，表示取不到有效值。
   */
  Count?: number
}

/**
 * 不同角色的已存在节点配置参数
 */
export interface ExistedInstancesForNode {
  /**
   * 节点角色，取值:MASTER_ETCD, WORKER。MASTER_ETCD只有在创建 INDEPENDENT_CLUSTER 独立集群时需要指定。MASTER_ETCD节点数量为3～7，建议为奇数。MASTER_ETCD最小配置为4C8G。
   */
  NodeRole: string
  /**
   * 已存在实例的重装参数
   */
  ExistedInstancesPara: ExistedInstancesPara
  /**
   * 节点高级设置，会覆盖集群级别设置的InstanceAdvancedSettings（当前只对节点自定义参数ExtraArgs生效）
   */
  InstanceAdvancedSettingsOverride?: InstanceAdvancedSettings
  /**
   * 自定义模式集群，可指定每个节点的pod数量
   */
  DesiredPodNumbers?: Array<number | bigint>
}

/**
 * 集群巡检检查结果概览
 */
export interface KubeJarvisStateInspectionOverview {
  /**
   * 集群ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  ClusterId?: string
  /**
   * 诊断结果统计
注意：此字段可能返回 null，表示取不到有效值。
   */
  Statistics?: Array<KubeJarvisStateStatistic>
  /**
   * 诊断结果详情
注意：此字段可能返回 null，表示取不到有效值。
   */
  Diagnostics?: Array<KubeJarvisStateDiagnosticOverview>
}

/**
 * DescribePrometheusOverviews返回参数结构体
 */
export interface DescribePrometheusOverviewsResponse {
  /**
   * 实例列表
   */
  Instances?: Array<PrometheusInstanceOverview>
  /**
   * 实例总数
注意：此字段可能返回 null，表示取不到有效值。
   */
  Total?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeClusterInspectionResultsOverview返回参数结构体
 */
export interface DescribeClusterInspectionResultsOverviewResponse {
  /**
   * 诊断结果统计
注意：此字段可能返回 null，表示取不到有效值。
   */
  Statistics?: Array<KubeJarvisStateStatistic>
  /**
   * 诊断结果概览
注意：此字段可能返回 null，表示取不到有效值。
   */
  Diagnostics?: Array<KubeJarvisStateDiagnosticOverview>
  /**
   * 集群诊断结果概览
注意：此字段可能返回 null，表示取不到有效值。
   */
  InspectionOverview?: Array<KubeJarvisStateInspectionOverview>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribePodChargeInfo返回参数结构体
 */
export interface DescribePodChargeInfoResponse {
  /**
   * Pod计费信息
   */
  ChargeInfoSet?: Array<PodChargeInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeletePrometheusRecordRuleYaml请求参数结构体
 */
export interface DeletePrometheusRecordRuleYamlRequest {
  /**
   * 实例id
   */
  InstanceId: string
  /**
   * 聚合规则列表
   */
  Names: Array<string>
}

/**
 * InstallAddon请求参数结构体
 */
export interface InstallAddonRequest {
  /**
   * 集群ID（仅支持标准tke集群）
   */
  ClusterId: string
  /**
   * addon名称
   */
  AddonName: string
  /**
   * addon版本（不传默认安装最新版本）
   */
  AddonVersion?: string
  /**
   * addon的参数，是一个json格式的base64转码后的字符串（addon参数由DescribeAddonValues获取）
   */
  RawValues?: string
  /**
   * 是否仅做安装检查，设置为true时仅做检查，不会安装组件
   */
  DryRun?: boolean
}

/**
 * 某个节点升级前检查结果
 */
export interface InstanceUpgradePreCheckResult {
  /**
   * 检查是否通过
   */
  CheckPass?: boolean
  /**
   * 检查项数组
   */
  Items?: Array<InstanceUpgradePreCheckResultItem>
  /**
   * 本节点独立pod列表
   */
  SinglePods?: Array<string>
}

/**
 * ScaleInClusterMaster返回参数结构体
 */
export interface ScaleInClusterMasterResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeAvailableClusterVersion返回参数结构体
 */
export interface DescribeAvailableClusterVersionResponse {
  /**
   * 可升级的集群版本号
注意：此字段可能返回 null，表示取不到有效值。
   */
  Versions?: Array<string>
  /**
   * 集群信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  Clusters?: Array<ClusterVersion>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * GetMostSuitableImageCache请求参数结构体
 */
export interface GetMostSuitableImageCacheRequest {
  /**
   * 容器镜像列表
   */
  Images: Array<string>
}

/**
 * DeleteEKSContainerInstances请求参数结构体
 */
export interface DeleteEKSContainerInstancesRequest {
  /**
   * 需要删除的EksCi的Id。 最大数量不超过20
   */
  EksCiIds: Array<string>
  /**
   * 是否释放为EksCi自动创建的Eip
   */
  ReleaseAutoCreatedEip?: boolean
}

/**
 * DescribeClusterCommonNames返回参数结构体
 */
export interface DescribeClusterCommonNamesResponse {
  /**
   * 子账户Uin与其客户端证书的CN字段映射
   */
  CommonNames?: Array<CommonName>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeAddon请求参数结构体
 */
export interface DescribeAddonRequest {
  /**
   * 集群ID
   */
  ClusterId: string
  /**
   * addon名称（不传时会返回集群下全部的addon）
   */
  AddonName?: string
}

/**
 * 模板实例
 */
export interface PrometheusTemplate {
  /**
   * 模板名称
   */
  Name: string
  /**
   * 模板维度，支持以下类型
instance 实例级别
cluster 集群级别
   */
  Level: string
  /**
   * 模板描述
注意：此字段可能返回 null，表示取不到有效值。
   */
  Describe?: string
  /**
   * 当Level为instance时有效，
模板中的告警配置列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  AlertRules?: Array<PrometheusAlertRule>
  /**
   * 当Level为instance时有效，
模板中的聚合规则列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  RecordRules?: Array<PrometheusConfigItem>
  /**
   * 当Level为cluster时有效，
模板中的ServiceMonitor规则列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  ServiceMonitors?: Array<PrometheusConfigItem>
  /**
   * 当Level为cluster时有效，
模板中的PodMonitors规则列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  PodMonitors?: Array<PrometheusConfigItem>
  /**
   * 当Level为cluster时有效，
模板中的RawJobs规则列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  RawJobs?: Array<PrometheusConfigItem>
  /**
   * 模板的ID, 用于出参
注意：此字段可能返回 null，表示取不到有效值。
   */
  TemplateId?: string
  /**
   * 最近更新时间，用于出参
注意：此字段可能返回 null，表示取不到有效值。
   */
  UpdateTime?: string
  /**
   * 当前版本，用于出参
注意：此字段可能返回 null，表示取不到有效值。
   */
  Version?: string
  /**
   * 是否系统提供的默认模板，用于出参
注意：此字段可能返回 null，表示取不到有效值。
   */
  IsDefault?: boolean
  /**
   * 当Level为instance时有效，
模板中的告警配置列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  AlertDetailRules?: Array<PrometheusAlertRuleDetail>
}

/**
 * GPU相关的参数，包括驱动版本，CUDA版本，cuDNN版本以及是否开启MIG
 */
export interface GPUArgs {
  /**
   * 是否启用MIG特性
注意：此字段可能返回 null，表示取不到有效值。
   */
  MIGEnable?: boolean
  /**
   * GPU驱动版本信息
   */
  Driver?: DriverVersion
  /**
   * CUDA版本信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  CUDA?: DriverVersion
  /**
   * cuDNN版本信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  CUDNN?: CUDNN
  /**
   * 自定义GPU驱动信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  CustomDriver?: CustomDriver
}

/**
 * 路由表冲突对象
 */
export interface RouteTableConflict {
  /**
   * 路由表类型。
   */
  RouteTableType?: string
  /**
   * 路由表CIDR。
注意：此字段可能返回 null，表示取不到有效值。
   */
  RouteTableCidrBlock?: string
  /**
   * 路由表名称。
注意：此字段可能返回 null，表示取不到有效值。
   */
  RouteTableName?: string
  /**
   * 路由表ID。
注意：此字段可能返回 null，表示取不到有效值。
   */
  RouteTableId?: string
}

/**
 * InstallAddon返回参数结构体
 */
export interface InstallAddonResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteLogConfigs返回参数结构体
 */
export interface DeleteLogConfigsResponse {
  /**
   * 删除采集规则遇到错误时返回错误原因
注意：此字段可能返回 null，表示取不到有效值。
   */
  Message?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyReservedInstanceScope请求参数结构体
 */
export interface ModifyReservedInstanceScopeRequest {
  /**
   * 预留券唯一 ID
   */
  ReservedInstanceIds: Array<string>
  /**
   * 预留券抵扣范围信息
   */
  ReservedInstanceScope: ReservedInstanceScope
}

/**
 * DisableEncryptionProtection请求参数结构体
 */
export interface DisableEncryptionProtectionRequest {
  /**
   * 集群ID
   */
  ClusterId: string
}

/**
 * 托管prometheus实例概览
 */
export interface PrometheusInstanceOverview {
  /**
   * 实例id
   */
  InstanceId?: string
  /**
   * 实例名称
   */
  Name?: string
  /**
   * 实例vpcId
   */
  VpcId?: string
  /**
   * 实例子网Id
   */
  SubnetId?: string
  /**
   * 实例当前的状态
prepare_env = 初始化环境
install_suit = 安装组件
running = 运行中
   */
  Status?: string
  /**
   * COS桶存储
   */
  COSBucket?: string
  /**
   * grafana默认地址，如果开启外网访问得为域名，否则为内网地址
注意：此字段可能返回 null，表示取不到有效值。
   */
  GrafanaURL?: string
  /**
   * 关联集群总数
注意：此字段可能返回 null，表示取不到有效值。
   */
  BoundTotal?: number
  /**
   * 运行正常的集群数
注意：此字段可能返回 null，表示取不到有效值。
   */
  BoundNormal?: number
}

/**
 * DescribeClusterVirtualNode返回参数结构体
 */
export interface DescribeClusterVirtualNodeResponse {
  /**
   * 节点列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  Nodes?: Array<VirtualNode>
  /**
   * 节点总数
注意：此字段可能返回 null，表示取不到有效值。
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * master节点缩容参数
 */
export interface ScaleInMaster {
  /**
   * 实例ID
   */
  InstanceId: string
  /**
   * 缩容的实例角色：MASTER,ETCD,MASTER_ETCD
   */
  NodeRole: string
  /**
   * 实例删除时的策略：terminate（销毁实例，仅支持按量计费云主机实例） retain （仅移除，保留实例）
   */
  InstanceDeleteMode: string
}

/**
 * RunPrometheusInstance请求参数结构体
 */
export interface RunPrometheusInstanceRequest {
  /**
   * 实例ID
   */
  InstanceId: string
  /**
   * 子网ID，默认使用实例所用子网初始化，也可通过该参数传递新的子网ID初始化
   */
  SubnetId?: string
}

/**
 * 应用市场安装的Pending应用
 */
export interface PendingRelease {
  /**
   * 应用状态详情
注意：此字段可能返回 null，表示取不到有效值。
   */
  Condition?: string
  /**
   * 创建时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  CreatedTime?: string
  /**
   * 应用ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  ID?: string
  /**
   * 应用名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  Name?: string
  /**
   * 应用命名空间
注意：此字段可能返回 null，表示取不到有效值。
   */
  Namespace?: string
  /**
   * 应用状态(参考helm的发布状态： unknown, deployed, uninstalled, superseded, failed, uninstalling, pending-install, pending-upgrade 或 pending-rollback)
注意：此字段可能返回 null，表示取不到有效值。
   */
  Status?: string
  /**
   * 更新时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  UpdatedTime?: string
}

/**
 * DescribeBackupStorageLocations请求参数结构体
 */
export interface DescribeBackupStorageLocationsRequest {
  /**
   * 多个备份仓库名称，如果不填写，默认返回当前地域所有存储仓库名称
   */
  Names?: Array<string>
}

/**
 * 包年包月配置
 */
export interface InstanceChargePrepaid {
  /**
   * 购买实例的时长，单位：月。取值范围：1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 24, 36, 48, 60。
   */
  Period: number
  /**
   * 自动续费标识。取值范围：
NOTIFY_AND_AUTO_RENEW：通知过期且自动续费
NOTIFY_AND_MANUAL_RENEW：通知过期不自动续费
DISABLE_NOTIFY_AND_MANUAL_RENEW：不通知过期不自动续费

默认取值：NOTIFY_AND_MANUAL_RENEW。若该参数指定为NOTIFY_AND_AUTO_RENEW，在账户余额充足的情况下，实例到期后将按月自动续费。
   */
  RenewFlag?: string
}
