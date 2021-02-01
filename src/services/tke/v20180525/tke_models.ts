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
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyNodePoolDesiredCapacityAboutAsg返回参数结构体
 */
export interface ModifyNodePoolDesiredCapacityAboutAsgResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyClusterNodePool返回参数结构体
 */
export interface ModifyClusterNodePoolResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeClusterKubeconfig返回参数结构体
 */
export interface DescribeClusterKubeconfigResponse {
  /**
   * 子账户kubeconfig文件，可用于直接访问集群kube-apiserver
   */
  Kubeconfig?: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * RemoveNodeFromNodePool返回参数结构体
 */
export interface RemoveNodeFromNodePoolResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
   * 目的端CIDR。
   */
  DestinationCidrBlock: string

  /**
   * 下一跳地址。
   */
  GatewayIp: string
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
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
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
  SecurityPolicies: Array<string>
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
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteCluster返回参数结构体
 */
export interface DeleteClusterResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 自动扩所容的节点
 */
export interface AutoscalingAdded {
  /**
   * 正在加入中的节点数量
   */
  Joining: number

  /**
   * 初始化中的节点数量
   */
  Initializing: number

  /**
   * 正常的节点数量
   */
  Normal: number

  /**
   * 节点总数
   */
  Total: number
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
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
}

/**
 * CreateClusterRouteTable返回参数结构体
 */
export interface CreateClusterRouteTableResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteClusterEndpoint返回参数结构体
 */
export interface DeleteClusterEndpointResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
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
  ReceiverGroups?: Array<number>

  /**
      * 电话告警顺序。
注：NotifyWay选择CALL，采用该参数。
注意：此字段可能返回 null，表示取不到有效值。
      */
  PhoneNotifyOrder?: Array<number>

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
 * 集群版本信息
 */
export interface ClusterVersion {
  /**
   * 集群ID
   */
  ClusterId: string

  /**
   * 集群主版本号列表，例如1.18.4
   */
  Versions: Array<string>
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
 * DeletePrometheusTemplate请求参数结构体
 */
export interface DeletePrometheusTemplateRequest {
  /**
   * 模板id
   */
  TemplateId: string
}

/**
 * 某个节点的升级进度
 */
export interface InstanceUpgradeProgressItem {
  /**
   * 节点instanceID
   */
  InstanceID: string

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
  LifeState: string

  /**
      * 升级开始时间
注意：此字段可能返回 null，表示取不到有效值。
      */
  StartAt: string

  /**
      * 升级结束时间
注意：此字段可能返回 null，表示取不到有效值。
      */
  EndAt: string

  /**
   * 升级前检查结果
   */
  CheckResult: InstanceUpgradePreCheckResult

  /**
   * 升级步骤详情
   */
  Detail: Array<TaskStepInfo>
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
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
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
  RouteTableName: string

  /**
   * 路由表CIDR。
   */
  RouteTableCidrBlock: string

  /**
   * VPC实例ID。
   */
  VpcId: string
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
 * prometheus一个抓取目标的信息
 */
export interface PrometheusTarget {
  /**
   * 抓取目标的URL
   */
  Url: string

  /**
      * target当前状态,当前支持
up = 健康
down = 不健康
unknown = 未知
      */
  State: string

  /**
   * target的元label
   */
  Labels: Array<Label>

  /**
   * 上一次抓取的时间
   */
  LastScrape: string

  /**
   * 上一次抓取的耗时，单位是s
   */
  ScrapeDuration: number

  /**
   * 上一次抓取如果错误，该字段存储错误信息
   */
  Error: string
}

/**
 * CreateEKSCluster请求参数结构体
 */
export interface CreateEKSClusterRequest {
  /**
   * k8s版本号。可为1.14.4, 1.12.8。
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
   * Serivce 所在子网Id
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
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateClusterRoute返回参数结构体
 */
export interface CreateClusterRouteResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
 * 节点池描述
 */
export interface NodePool {
  /**
   * NodePoolId 资源池id
   */
  NodePoolId: string

  /**
   * Name 资源池名称
   */
  Name: string

  /**
   * ClusterInstanceId 集群实例id
   */
  ClusterInstanceId: string

  /**
   * LifeState 状态
   */
  LifeState: string

  /**
   * LaunchConfigurationId 配置
   */
  LaunchConfigurationId: string

  /**
   * AutoscalingGroupId 分组id
   */
  AutoscalingGroupId: string

  /**
   * Labels 标签
   */
  Labels: Array<Label>

  /**
   * Taints 污点标记
   */
  Taints: Array<Taint>

  /**
   * NodeCountSummary 节点列表
   */
  NodeCountSummary: NodeCountSummary

  /**
      * 状态信息
注意：此字段可能返回 null，表示取不到有效值。
      */
  AutoscalingGroupStatus: string

  /**
      * 最大节点数量
注意：此字段可能返回 null，表示取不到有效值。
      */
  MaxNodesNum: number

  /**
      * 最小节点数量
注意：此字段可能返回 null，表示取不到有效值。
      */
  MinNodesNum: number

  /**
      * 期望的节点数量
注意：此字段可能返回 null，表示取不到有效值。
      */
  DesiredNodesNum: number

  /**
      * 节点池osName
注意：此字段可能返回 null，表示取不到有效值。
      */
  NodePoolOs: string

  /**
      * 容器的镜像版本，"DOCKER_CUSTOMIZE"(容器定制版),"GENERAL"(普通版本，默认值)
注意：此字段可能返回 null，表示取不到有效值。
      */
  OsCustomizeType: string

  /**
      * 镜像id
注意：此字段可能返回 null，表示取不到有效值。
      */
  ImageId: string
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
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
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
  AutoScalingGroupId: string

  /**
   * 伸缩组状态(开启 enabled 开启中 enabling 关闭 disabled 关闭中 disabling 更新中 updating 删除中 deleting 开启缩容中 scaleDownEnabling 关闭缩容中 scaleDownDisabling)
   */
  Status: string

  /**
      * 节点是否设置成不可调度
注意：此字段可能返回 null，表示取不到有效值。
      */
  IsUnschedulable: boolean

  /**
      * 伸缩组的label列表
注意：此字段可能返回 null，表示取不到有效值。
      */
  Labels: Array<Label>

  /**
   * 创建时间
   */
  CreatedTime: string
}

/**
 * 集群的实例信息
 */
export interface Instance {
  /**
   * 实例ID
   */
  InstanceId: string

  /**
   * 节点角色, MASTER, WORKER, ETCD, MASTER_ETCD,ALL, 默认为WORKER
   */
  InstanceRole: string

  /**
   * 实例异常(或者处于初始化中)的原因
   */
  FailedReason: string

  /**
   * 实例的状态（running 运行中，initializing 初始化中，failed 异常）
   */
  InstanceState: string

  /**
      * 实例是否封锁状态
注意：此字段可能返回 null，表示取不到有效值。
      */
  DrainStatus: string

  /**
      * 节点配置
注意：此字段可能返回 null，表示取不到有效值。
      */
  InstanceAdvancedSettings: InstanceAdvancedSettings

  /**
   * 添加时间
   */
  CreatedTime: string

  /**
      * 节点内网IP
注意：此字段可能返回 null，表示取不到有效值。
      */
  LanIP: string

  /**
      * 资源池ID
注意：此字段可能返回 null，表示取不到有效值。
      */
  NodePoolId: string

  /**
      * 自动伸缩组ID
注意：此字段可能返回 null，表示取不到有效值。
      */
  AutoscalingGroupId: string
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
 * 可升级节点信息
 */
export interface UpgradeAbleInstancesItem {
  /**
   * 节点Id
   */
  InstanceId: string

  /**
   * 节点的当前版本
   */
  Version: string

  /**
      * 当前版本的最新小版本
注意：此字段可能返回 null，表示取不到有效值。
      */
  LatestVersion: string
}

/**
 * CreateClusterNodePoolFromExistingAsg请求参数结构体
 */
export interface CreateClusterNodePoolFromExistingAsgRequest {
  /**
   * 集群ID
   */
  ClusterId: string

  /**
   * 伸缩组ID
   */
  AutoscalingGroupId: string
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
 * 集群网络相关的参数
 */
export interface ClusterNetworkSettings {
  /**
   * 用于分配集群容器和服务 IP 的 CIDR，不得与 VPC CIDR 冲突，也不得与同 VPC 内其他集群 CIDR 冲突
   */
  ClusterCIDR: string

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
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
}

/**
 * DeleteClusterRoute返回参数结构体
 */
export interface DeleteClusterRouteResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyClusterEndpointSP返回参数结构体
 */
export interface ModifyClusterEndpointSPResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
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
   * 过滤条件,当前只支持按照单个条件ClusterName进行过滤
   */
  Filters?: Array<Filter>
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
}

/**
 * 弹性容器集群公网访问负载均衡信息
 */
export interface ClusterPublicLB {
  /**
   * 是否开启公网访问LB
   */
  Enabled: boolean

  /**
   * 允许访问的来源CIDR列表
   */
  AllowFromCidrs?: Array<string>

  /**
   * 安全策略放通单个IP或CIDR(例如: "192.168.1.0/24",默认为拒绝所有)
   */
  SecurityPolicies?: Array<string>
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
 * 地域属性信息
 */
export interface RegionInstance {
  /**
      * 地域名称
注意：此字段可能返回 null，表示取不到有效值。
      */
  RegionName: string

  /**
      * 地域ID
注意：此字段可能返回 null，表示取不到有效值。
      */
  RegionId: number

  /**
      * 地域状态
注意：此字段可能返回 null，表示取不到有效值。
      */
  Status: string

  /**
      * 地域特性开关(按照JSON的形式返回所有属性)
注意：此字段可能返回 null，表示取不到有效值。
      */
  FeatureGates: string

  /**
      * 地域简称
注意：此字段可能返回 null，表示取不到有效值。
      */
  Alias: string

  /**
      * 地域白名单
注意：此字段可能返回 null，表示取不到有效值。
      */
  Remark: string
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
 * ModifyPrometheusTemplate返回参数结构体
 */
export interface ModifyPrometheusTemplateResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteClusterEndpointVip返回参数结构体
 */
export interface DeleteClusterEndpointVipResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
 * 描述集群的基本配置信息
 */
export interface ClusterBasicSettings {
  /**
   * 集群系统。centos7.2x86_64 或者 ubuntu16.04.1 LTSx86_64，默认取值为ubuntu16.04.1 LTSx86_64
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
   * 私有网络ID，形如vpc-xxx。创建托管空集群时必传。
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
   * 是否开启节点的默认安全组(默认: 否，Aphla特性)
   */
  NeedWorkSecurityGroup?: boolean
}

/**
 * CreatePrometheusDashboard返回参数结构体
 */
export interface CreatePrometheusDashboardResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
   * 集群的认证信息
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
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
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
 * ModifyClusterAsGroupAttribute返回参数结构体
 */
export interface ModifyClusterAsGroupAttributeResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
 * 手动加入的节点
 */
export interface ManuallyAdded {
  /**
   * 加入中节的点数量
   */
  Joining: number

  /**
   * 初始化中的节点数量
   */
  Initializing: number

  /**
   * 正常的节点数量
   */
  Normal: number

  /**
   * 节点总数
   */
  Total: number
}

/**
 * DeleteEKSCluster返回参数结构体
 */
export interface DeleteEKSClusterResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
 * DescribeClusterKubeconfig请求参数结构体
 */
export interface DescribeClusterKubeconfigRequest {
  /**
   * 集群ID
   */
  ClusterId: string
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
   * 集群中每个Node上最大的Pod数量。取值范围4～256。不为2的幂值时会向上取最接近的2的幂值。
   */
  MaxNodePodNum?: number

  /**
   * 集群最大的service数量。取值范围32～32768，不为2的幂值时会向上取最接近的2的幂值。
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
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
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
 * 集群路由对象
 */
export interface RouteInfo {
  /**
   * 路由表名称。
   */
  RouteTableName: string

  /**
   * 目的端CIDR。
   */
  DestinationCidrBlock: string

  /**
   * 下一跳地址。
   */
  GatewayIp: string
}

/**
 * 弹性容器集群内网访问LB信息
 */
export interface ClusterInternalLB {
  /**
   * 是否开启内网访问LB
   */
  Enabled: boolean

  /**
   * 内网访问LB关联的子网Id
   */
  SubnetId?: string
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
   * 升级类型
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
 * 已经存在的实例信息
 */
export interface ExistedInstance {
  /**
      * 实例是否支持加入集群(TRUE 可以加入 FALSE 不能加入)。
注意：此字段可能返回 null，表示取不到有效值。
      */
  Usable: boolean

  /**
      * 实例不支持加入的原因。
注意：此字段可能返回 null，表示取不到有效值。
      */
  UnusableReason: string

  /**
      * 实例已经所在的集群ID。
注意：此字段可能返回 null，表示取不到有效值。
      */
  AlreadyInCluster: string

  /**
   * 实例ID形如：ins-xxxxxxxx。
   */
  InstanceId: string

  /**
      * 实例名称。
注意：此字段可能返回 null，表示取不到有效值。
      */
  InstanceName: string

  /**
      * 实例主网卡的内网IP列表。
注意：此字段可能返回 null，表示取不到有效值。
      */
  PrivateIpAddresses: Array<string>

  /**
      * 实例主网卡的公网IP列表。
注意：此字段可能返回 null，表示取不到有效值。
注意：此字段可能返回 null，表示取不到有效值。
      */
  PublicIpAddresses: Array<string>

  /**
      * 创建时间。按照ISO8601标准表示，并且使用UTC时间。格式为：YYYY-MM-DDThh:mm:ssZ。
注意：此字段可能返回 null，表示取不到有效值。
      */
  CreatedTime: string

  /**
      * 实例的CPU核数，单位：核。
注意：此字段可能返回 null，表示取不到有效值。
      */
  CPU: number

  /**
      * 实例内存容量，单位：GB。
注意：此字段可能返回 null，表示取不到有效值。
      */
  Memory: number

  /**
      * 操作系统名称。
注意：此字段可能返回 null，表示取不到有效值。
      */
  OsName: string

  /**
      * 实例机型。
注意：此字段可能返回 null，表示取不到有效值。
      */
  InstanceType: string

  /**
      * 伸缩组ID
注意：此字段可能返回 null，表示取不到有效值。
      */
  AutoscalingGroupId: string

  /**
      * 实例计费模式。取值范围： PREPAID：表示预付费，即包年包月 POSTPAID_BY_HOUR：表示后付费，即按量计费 CDHPAID：CDH付费，即只对CDH计费，不对CDH上的实例计费。
注意：此字段可能返回 null，表示取不到有效值。
      */
  InstanceChargeType: string
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
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
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
 * DescribeEKSClusterCredential请求参数结构体
 */
export interface DescribeEKSClusterCredentialRequest {
  /**
   * 集群Id
   */
  ClusterId: string
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
 * AddNodeToNodePool返回参数结构体
 */
export interface AddNodeToNodePoolResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * UpdateEKSCluster返回参数结构体
 */
export interface UpdateEKSClusterResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
 * DescribeRegions请求参数结构体
 */
export type DescribeRegionsRequest = null

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
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
 * 描述了实例登录相关配置与信息。
 */
export interface LoginSettings {
  /**
      * 实例登录密码。不同操作系统类型密码复杂度限制不一样，具体如下：<br><li>Linux实例密码必须8到30位，至少包括两项[a-z]，[A-Z]、[0-9] 和 [( ) \` ~ ! @ # $ % ^ & *  - + = | { } [ ] : ; ' , . ? / ]中的特殊符号。<br><li>Windows实例密码必须12到30位，至少包括三项[a-z]，[A-Z]，[0-9] 和 [( ) \` ~ ! @ # $ % ^ & * - + = | { } [ ] : ; ' , . ? /]中的特殊符号。<br><br>若不指定该参数，则由系统随机生成密码，并通过站内信方式通知到用户。
注意：此字段可能返回 null，表示取不到有效值。
      */
  Password?: string

  /**
      * 密钥ID列表。关联密钥后，就可以通过对应的私钥来访问实例；KeyId可通过接口[DescribeKeyPairs](https://cloud.tencent.com/document/api/213/15699)获取，密钥与密码不能同时指定，同时Windows操作系统不支持指定密钥。当前仅支持购买的时候指定一个密钥。
注意：此字段可能返回 null，表示取不到有效值。
      */
  KeyIds?: Array<string>

  /**
      * 保持镜像的原始设置。该参数与Password或KeyIds.N不能同时指定。只有使用自定义镜像、共享镜像或外部导入镜像创建实例时才能指定该参数为TRUE。取值范围：<br><li>TRUE：表示保持镜像的登录设置<br><li>FALSE：表示不保持镜像的登录设置<br><br>默认取值：FALSE。
注意：此字段可能返回 null，表示取不到有效值。
      */
  KeepImageLogin?: string
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
}

/**
 * SyncPrometheusTemplate返回参数结构体
 */
export interface SyncPrometheusTemplateResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
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
  MountTarget?: string
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
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
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
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
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
  ClusterId: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
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
 * 资源删除选项
 */
export interface ResourceDeleteOption {
  /**
   * 资源类型，例如CBS
   */
  ResourceType: string

  /**
   * 集群删除时资源的删除模式：terminate（销毁），retain （保留）
   */
  DeleteMode: string
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
   * 集群状态(running运行中，initializing 初始化中，failed异常)
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
 * CreateClusterNodePoolFromExistingAsg返回参数结构体
 */
export interface CreateClusterNodePoolFromExistingAsgResponse {
  /**
   * 节点池ID
   */
  NodePoolId?: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
}

/**
 * CreateClusterAsGroup请求参数结构体
 */
export interface CreateClusterAsGroupRequest {
  /**
   * 集群ID
   */
  ClusterId: string

  /**
   * 伸缩组创建透传参数，json化字符串格式，详见[伸缩组创建实例](https://cloud.tencent.com/document/api/377/20440)接口。LaunchConfigurationId由LaunchConfigurePara参数创建，不支持填写
   */
  AutoScalingGroupPara: string

  /**
   * 启动配置创建透传参数，json化字符串格式，详见[创建启动配置](https://cloud.tencent.com/document/api/377/20447)接口。另外ImageId参数由于集群维度已经有的ImageId信息，这个字段不需要填写。UserData字段设置通过UserScript设置，这个字段不需要填写。
   */
  LaunchConfigurePara: string

  /**
   * 节点高级配置信息
   */
  InstanceAdvancedSettings?: InstanceAdvancedSettings

  /**
   * 节点Label数组
   */
  Labels?: Array<Label>
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
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
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
  Step: string

  /**
      * 生命周期
pending : 步骤未开始
running: 步骤执行中
success: 步骤成功完成
failed: 步骤失败
      */
  LifeState: string

  /**
      * 步骤开始时间
注意：此字段可能返回 null，表示取不到有效值。
      */
  StartAt: string

  /**
      * 步骤结束时间
注意：此字段可能返回 null，表示取不到有效值。
      */
  EndAt: string

  /**
      * 若步骤生命周期为failed,则此字段显示错误信息
注意：此字段可能返回 null，表示取不到有效值。
      */
  FailedMsg: string
}

/**
 * 描述了 “云安全” 服务相关的信息
 */
export interface RunSecurityServiceEnabled {
  /**
   * 是否开启[云安全](/document/product/296)服务。取值范围：<br><li>TRUE：表示开启云安全服务<br><li>FALSE：表示不开启云安全服务<br><br>默认取值：TRUE。
   */
  Enabled?: boolean
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
 * DescribeAvailableClusterVersion请求参数结构体
 */
export interface DescribeAvailableClusterVersionRequest {
  /**
   * 集群 Id
   */
  ClusterId?: string

  /**
   * 集群 Id 列表
   */
  ClusterIds?: Array<string>
}

/**
 * CreateCluster请求参数结构体
 */
export interface CreateClusterRequest {
  /**
   * 集群容器网络配置信息
   */
  ClusterCIDRSettings: ClusterCIDRSettings

  /**
   * 集群类型，托管集群：MANAGED_CLUSTER，独立集群：INDEPENDENT_CLUSTER。
   */
  ClusterType: string

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
   * 已存在实例的配置信息。所有实例必须在同一个VPC中，最大数量不超过100。
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
 * AcquireClusterAdminRole请求参数结构体
 */
export interface AcquireClusterAdminRoleRequest {
  /**
   * 集群ID
   */
  ClusterId: string
}

/**
 * CreateClusterAsGroup返回参数结构体
 */
export interface CreateClusterAsGroupResponse {
  /**
   * 启动配置ID
   */
  LaunchConfigurationId?: string

  /**
   * 伸缩组ID
   */
  AutoScalingGroupId?: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteClusterAsGroups返回参数结构体
 */
export interface DeleteClusterAsGroupsResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
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
}

/**
 * 描述了k8s集群相关配置与信息。
 */
export interface InstanceAdvancedSettings {
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
      * 多盘数据盘挂载信息，同时请确保购买CVM的参数传递了购买多个数据盘的信息，如添加节点CreateClusterInstances API的RunInstancesPara下的DataDisks也设置了购买多个数据盘, 具体可以参考CreateClusterInstances接口的，添加集群节点(多块数据盘)样例；注意：此参数在调用接口AddExistedInstances时不起作用
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
 * 托管prometheus agent概览
 */
export interface PrometheusAgentOverview {
  /**
   * 集群类型
   */
  ClusterType: string

  /**
   * 集群id
   */
  ClusterId: string

  /**
      * agent状态
normal = 正常
abnormal = 异常
      */
  Status: string

  /**
   * 集群名称
   */
  ClusterName: string
}

/**
 * >描述键值对过滤器，用于条件过滤查询。例如过滤ID、名称、状态等
> * 若存在多个`Filter`时，`Filter`间的关系为逻辑与（`AND`）关系。
> * 若同一个`Filter`存在多个`Values`，同一`Filter`下`Values`间的关系为逻辑或（`OR`）关系。
>
> 以[DescribeInstances](https://cloud.tencent.com/document/api/213/15728)接口的`Filter`为例。若我们需要查询可用区（`zone`）为广州一区 ***并且*** 实例计费模式（`instance-charge-type`）为包年包月 ***或者*** 按量计费的实例时，可如下实现：
```
Filters.0.Name=zone
&Filters.0.Values.0=ap-guangzhou-1
&Filters.1.Name=instance-charge-type
&Filters.1.Values.0=PREPAID
&Filters.1.Values.1=POSTPAID_BY_HOUR
```
 */
export interface Filter {
  /**
   * 需要过滤的字段。
   */
  Name: string

  /**
   * 字段的过滤值。
   */
  Values: Array<string>
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
}

/**
 * 镜像信息
 */
export interface ImageInstance {
  /**
      * 镜像别名
注意：此字段可能返回 null，表示取不到有效值。
      */
  Alias: string

  /**
      * 操作系统名称
注意：此字段可能返回 null，表示取不到有效值。
      */
  OsName: string

  /**
      * 镜像ID
注意：此字段可能返回 null，表示取不到有效值。
      */
  ImageId: string

  /**
      * 容器的镜像版本，"DOCKER_CUSTOMIZE"(容器定制版),"GENERAL"(普通版本，默认值)
注意：此字段可能返回 null，表示取不到有效值。
      */
  OsCustomizeType: string
}

/**
 * CreateClusterEndpoint返回参数结构体
 */
export interface CreateClusterEndpointResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
   * AutoScalingGroupPara AS组参数
   */
  AutoScalingGroupPara: string

  /**
   * LaunchConfigurePara 运行参数
   */
  LaunchConfigurePara: string

  /**
   * InstanceAdvancedSettings 示例参数
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
   * 节点池os
   */
  NodePoolOs?: string

  /**
   * 容器的镜像版本，"DOCKER_CUSTOMIZE"(容器定制版),"GENERAL"(普通版本，默认值)
   */
  OsCustomizeType?: string
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
   * 区分单网卡多IP模式和独立网卡模式
   */
  VpcCniType?: string

  /**
   * 运行时版本
   */
  RuntimeVersion?: string
}

/**
 * AcquireClusterAdminRole返回参数结构体
 */
export interface AcquireClusterAdminRoleResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeletePrometheusTemplate返回参数结构体
 */
export interface DeletePrometheusTemplateResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
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
 * DeleteClusterEndpointVip请求参数结构体
 */
export interface DeleteClusterEndpointVipRequest {
  /**
   * 集群ID
   */
  ClusterId: string
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
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
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
  ClusterId: string

  /**
   * 集群名称
   */
  ClusterName: string

  /**
   * 集群描述
   */
  ClusterDescription: string

  /**
   * 集群版本（默认值为1.10.5）
   */
  ClusterVersion: string

  /**
   * 集群系统。centos7.2x86_64 或者 ubuntu16.04.1 LTSx86_64，默认取值为ubuntu16.04.1 LTSx86_64
   */
  ClusterOs: string

  /**
   * 集群类型，托管集群：MANAGED_CLUSTER，独立集群：INDEPENDENT_CLUSTER。
   */
  ClusterType: string

  /**
   * 集群网络相关参数
   */
  ClusterNetworkSettings: ClusterNetworkSettings

  /**
   * 集群当前node数量
   */
  ClusterNodeNum: number

  /**
   * 集群所属的项目ID
   */
  ProjectId: number

  /**
      * 标签描述列表。
注意：此字段可能返回 null，表示取不到有效值。
      */
  TagSpecification: Array<TagSpecification>

  /**
   * 集群状态 (Running 运行中  Creating 创建中 Abnormal 异常  )
   */
  ClusterStatus: string

  /**
      * 集群属性(包括集群不同属性的MAP，属性字段包括NodeNameType (lan-ip模式和hostname 模式，默认无lan-ip模式))
注意：此字段可能返回 null，表示取不到有效值。
      */
  Property: string

  /**
   * 集群当前master数量
   */
  ClusterMaterNodeNum: number

  /**
      * 集群使用镜像id
注意：此字段可能返回 null，表示取不到有效值。
      */
  ImageId: string

  /**
      * OsCustomizeType 系统定制类型
注意：此字段可能返回 null，表示取不到有效值。
      */
  OsCustomizeType: string

  /**
      * 集群运行环境docker或container
注意：此字段可能返回 null，表示取不到有效值。
      */
  ContainerRuntime: string

  /**
      * 创建时间
注意：此字段可能返回 null，表示取不到有效值。
      */
  CreatedTime: string

  /**
      * 删除保护开关
注意：此字段可能返回 null，表示取不到有效值。
      */
  DeletionProtection: boolean
}

/**
 * DescribeClusterEndpointStatus返回参数结构体
 */
export interface DescribeClusterEndpointStatusResponse {
  /**
      * 查询集群访问端口状态（Created 开启成功，Creating 开启中中，NotFound 未开启）
注意：此字段可能返回 null，表示取不到有效值。
      */
  Status?: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * UpgradeClusterInstances返回参数结构体
 */
export interface UpgradeClusterInstancesResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteClusterRouteTable返回参数结构体
 */
export interface DeleteClusterRouteTableResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
}

/**
 * prometheus一个job的targets
 */
export interface PrometheusJobTargets {
  /**
   * 该Job的targets列表
   */
  Targets: Array<PrometheusTarget>

  /**
   * job的名称
   */
  JobName: string

  /**
   * targets总数
   */
  Total: number

  /**
   * 健康的target总数
   */
  Up: number
}

/**
 * ModifyClusterAsGroupOptionAttribute返回参数结构体
 */
export interface ModifyClusterAsGroupOptionAttributeResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
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
      * 含有本地存储Pod的节点是否不缩容(默认： FALSE)
注意：此字段可能返回 null，表示取不到有效值。
      */
  SkipNodesWithLocalStorage?: boolean

  /**
      * 含有kube-system namespace下非DaemonSet管理的Pod的节点是否不缩容 (默认： FALSE)
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
  OkTotalUnreadyCount: number

  /**
      * 未就绪节点的最大百分比，此后CA会停止操作
注意：此字段可能返回 null，表示取不到有效值。
      */
  MaxTotalUnreadyPercentage: number

  /**
      * 表示未准备就绪的节点在有资格进行缩减之前应该停留多长时间
注意：此字段可能返回 null，表示取不到有效值。
      */
  ScaleDownUnreadyTime: number

  /**
      * CA删除未在Kubernetes中注册的节点之前等待的时间
注意：此字段可能返回 null，表示取不到有效值。
      */
  UnregisteredNodeRemovalTime: number
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
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

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
 * DescribeClusterNodePools请求参数结构体
 */
export interface DescribeClusterNodePoolsRequest {
  /**
   * ClusterId（集群id）
   */
  ClusterId: string
}

/**
 * DescribeClusterRouteTables请求参数结构体
 */
export type DescribeClusterRouteTablesRequest = null

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
}

/**
 * 节点升级过程中集群当前状态
 */
export interface InstanceUpgradeClusterStatus {
  /**
   * pod总数
   */
  PodTotal: number

  /**
   * NotReady pod总数
   */
  NotReadyPod: number
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
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
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
 * DescribePrometheusTargets返回参数结构体
 */
export interface DescribePrometheusTargetsResponse {
  /**
   * 所有Job的targets信息
   */
  Jobs?: Array<PrometheusJobTargets>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
 * DeletePrometheusTemplateSync返回参数结构体
 */
export interface DeletePrometheusTemplateSyncResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateClusterRouteTable请求参数结构体
 */
export interface CreateClusterRouteTableRequest {
  /**
   * 路由表名称
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
   * 是否忽略CIDR冲突
   */
  IgnoreClusterCidrConflict?: number
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
   * 节点id列表
   */
  InstanceIds: Array<string>
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
 * DescribeImages请求参数结构体
 */
export type DescribeImagesRequest = null

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
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
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
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
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
 * 节点升级检查项结果
 */
export interface InstanceUpgradePreCheckResultItem {
  /**
   * 工作负载的命名空间
   */
  Namespace: string

  /**
   * 工作负载类型
   */
  WorkLoadKind: string

  /**
   * 工作负载名称
   */
  WorkLoadName: string

  /**
   * 驱逐节点前工作负载running的pod数目
   */
  Before: number

  /**
   * 驱逐节点后工作负载running的pod数目
   */
  After: number

  /**
   * 工作负载在本节点上的pod列表
   */
  Pods: Array<string>
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
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
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
 * DeleteClusterNodePool返回参数结构体
 */
export interface DeleteClusterNodePoolResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
 * 描述了 “云监控” 服务相关的信息
 */
export interface RunMonitorServiceEnabled {
  /**
   * 是否开启[云监控](/document/product/248)服务。取值范围：<br><li>TRUE：表示开启云监控服务<br><li>FALSE：表示不开启云监控服务<br><br>默认取值：TRUE。
   */
  Enabled?: boolean
}

/**
 * UpdateClusterVersion返回参数结构体
 */
export interface UpdateClusterVersionResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 路由表冲突对象
 */
export interface RouteTableConflict {
  /**
   * 路由表类型。
   */
  RouteTableType: string

  /**
      * 路由表CIDR。
注意：此字段可能返回 null，表示取不到有效值。
      */
  RouteTableCidrBlock: string

  /**
      * 路由表名称。
注意：此字段可能返回 null，表示取不到有效值。
      */
  RouteTableName: string

  /**
      * 路由表ID。
注意：此字段可能返回 null，表示取不到有效值。
      */
  RouteTableId: string
}

/**
 * CreateClusterNodePool返回参数结构体
 */
export interface CreateClusterNodePoolResponse {
  /**
   * 节点池id
   */
  NodePoolId: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
   * 可容忍的最大不可用pod数目
   */
  MaxNotReadyPercent?: number

  /**
   * 是否跳过预检查阶段
   */
  SkipPreCheck?: boolean
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
 * 托管prometheus实例概览
 */
export interface PrometheusInstanceOverview {
  /**
   * 实例id
   */
  InstanceId: string

  /**
   * 实例名称
   */
  Name: string

  /**
   * 实例vpcId
   */
  VpcId: string

  /**
   * 实例子网Id
   */
  SubnetId: string

  /**
      * 实例当前的状态
prepare_env = 初始化环境
install_suit = 安装组件
running = 运行中
      */
  Status: string

  /**
   * COS桶存储
   */
  COSBucket: string
}

/**
 * 节点统计列表
 */
export interface NodeCountSummary {
  /**
      * 手动管理的节点
注意：此字段可能返回 null，表示取不到有效值。
      */
  ManuallyAdded: ManuallyAdded

  /**
      * 自动管理的节点
注意：此字段可能返回 null，表示取不到有效值。
      */
  AutoscalingAdded: AutoscalingAdded
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
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 某个节点升级前检查结果
 */
export interface InstanceUpgradePreCheckResult {
  /**
   * 检查是否通过
   */
  CheckPass: boolean

  /**
   * 检查项数组
   */
  Items: Array<InstanceUpgradePreCheckResultItem>

  /**
   * 本节点独立pod列表
   */
  SinglePods: Array<string>
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
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}
