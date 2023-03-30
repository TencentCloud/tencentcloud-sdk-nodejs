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
 * Nacos副本信息
 */
export interface NacosReplica {
  /**
   * 名称
   */
  Name: string

  /**
   * 角色
   */
  Role: string

  /**
   * 状态
   */
  Status: string

  /**
      * 子网ID
注意：此字段可能返回 null，表示取不到有效值。
      */
  SubnetId: string

  /**
      * 可用区ID
注意：此字段可能返回 null，表示取不到有效值。
      */
  Zone: string

  /**
      * 可用区ID
注意：此字段可能返回 null，表示取不到有效值。
      */
  ZoneId: string

  /**
      * VPC ID	
注意：此字段可能返回 null，表示取不到有效值。
      */
  VpcId?: string
}

/**
 * DescribeNacosReplicas请求参数结构体
 */
export interface DescribeNacosReplicasRequest {
  /**
   * 引擎实例ID
   */
  InstanceId: string

  /**
   * 副本列表Limit
   */
  Limit?: number

  /**
   * 副本列表Offset
   */
  Offset?: number
}

/**
 * UpdateEngineInternetAccess请求参数结构体
 */
export interface UpdateEngineInternetAccessRequest {
  /**
   * 引擎ID
   */
  InstanceId: string

  /**
   * 引擎类型
   */
  EngineType: string

  /**
   * 是否开启客户端公网访问，true开 false关
   */
  EnableClientInternetAccess?: boolean
}

/**
 * Apollo 环境配置参数
 */
export interface ApolloEnvParam {
  /**
   * 环境名称
   */
  Name: string

  /**
      * 环境内引擎的节点规格 ID
-1C2G
-2C4G
兼容原spec-xxxxxx形式的规格ID
      */
  EngineResourceSpec: string

  /**
   * 环境内引擎的节点数量
   */
  EngineNodeNum: number

  /**
   * 配置存储空间大小，以GB为单位
   */
  StorageCapacity: number

  /**
   * VPC ID。在 VPC 的子网内分配一个 IP 作为 ConfigServer 的访问地址
   */
  VpcId: string

  /**
   * 子网 ID。在 VPC 的子网内分配一个 IP 作为 ConfigServer 的访问地址
   */
  SubnetId: string

  /**
   * 环境描述
   */
  EnvDesc?: string
}

/**
 * UpdateEngineInternetAccess返回参数结构体
 */
export interface UpdateEngineInternetAccessResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 键值对
 */
export interface KVPair {
  /**
   * 键
   */
  Key: string

  /**
   * 值
   */
  Value: string
}

/**
 * DeleteEngine返回参数结构体
 */
export interface DeleteEngineResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateEngine返回参数结构体
 */
export interface CreateEngineResponse {
  /**
   * 引擎实例 ID
   */
  InstanceId?: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeZookeeperReplicas请求参数结构体
 */
export interface DescribeZookeeperReplicasRequest {
  /**
   * 注册引擎实例ID
   */
  InstanceId: string

  /**
   * 副本列表Limit
   */
  Limit?: number

  /**
   * 副本列表Offset
   */
  Offset?: number
}

/**
 * DeleteEngine请求参数结构体
 */
export interface DeleteEngineRequest {
  /**
   * 引擎实例 ID
   */
  InstanceId: string
}

/**
 * DescribeCloudNativeAPIGatewayNodes请求参数结构体
 */
export interface DescribeCloudNativeAPIGatewayNodesRequest {
  /**
   * 云原生API网关实例ID。
   */
  GatewayId: string

  /**
   * 实例分组id
   */
  GroupId?: string

  /**
   * 翻页获取多少个
   */
  Limit?: number

  /**
   * 翻页从第几个开始获取
   */
  Offset?: number
}

/**
 * 获取网关节点信息
 */
export interface DescribeCloudNativeAPIGatewayNodesResult {
  /**
   * 获取云原生API网关节点列表响应结果。
   */
  TotalCount: number

  /**
   * 云原生API网关节点列表。
   */
  NodeList: Array<CloudNativeAPIGatewayNode>
}

/**
 * Zookeeper副本信息
 */
export interface ZookeeperReplica {
  /**
   * 名称
   */
  Name: string

  /**
   * 角色
   */
  Role: string

  /**
   * 状态
   */
  Status: string

  /**
      * 子网ID
注意：此字段可能返回 null，表示取不到有效值。
      */
  SubnetId: string

  /**
      * 可用区ID
注意：此字段可能返回 null，表示取不到有效值。
      */
  Zone: string

  /**
      * 可用区ID
注意：此字段可能返回 null，表示取不到有效值。
      */
  ZoneId: string

  /**
      * 别名
注意：此字段可能返回 null，表示取不到有效值。
      */
  AliasName: string

  /**
      * VPC ID
注意：此字段可能返回 null，表示取不到有效值。
      */
  VpcId?: string
}

/**
 * 引擎地域配置详情
 */
export interface EngineRegionInfo {
  /**
   * 引擎节点所在地域
   */
  EngineRegion: string

  /**
   * 此地域节点分配数量
   */
  Replica: number

  /**
   * 集群网络信息
   */
  VpcInfos: Array<VpcInfo>
}

/**
 * DescribeNacosServerInterfaces请求参数结构体
 */
export interface DescribeNacosServerInterfacesRequest {
  /**
   * 实例id
   */
  InstanceId?: string

  /**
   * 返回的列表个数
   */
  Limit?: number

  /**
   * 返回的列表起始偏移量
   */
  Offset?: number
}

/**
 * 微服务注册引擎实例
 */
export interface SREInstance {
  /**
   * 实例ID
   */
  InstanceId: string

  /**
   * 名称
   */
  Name: string

  /**
   * 版本号
   */
  Edition: string

  /**
   * 状态, 枚举值:creating/create_fail/running/updating/update_fail/restarting/restart_fail/destroying/destroy_fail
   */
  Status: string

  /**
   * 规格ID
   */
  SpecId: string

  /**
   * 副本数
   */
  Replica: number

  /**
   * 类型
   */
  Type: string

  /**
   * Vpc iD
   */
  VpcId: string

  /**
      * 子网ID
注意：此字段可能返回 null，表示取不到有效值。
      */
  SubnetIds: Array<string>

  /**
      * 是否开启持久化存储
注意：此字段可能返回 null，表示取不到有效值。
      */
  EnableStorage: boolean

  /**
      * 数据存储方式
注意：此字段可能返回 null，表示取不到有效值。
      */
  StorageType: string

  /**
      * 云硬盘容量
注意：此字段可能返回 null，表示取不到有效值。
      */
  StorageCapacity: number

  /**
      * 计费方式
注意：此字段可能返回 null，表示取不到有效值。
      */
  Paymode: string

  /**
      * EKS集群的ID
注意：此字段可能返回 null，表示取不到有效值。
      */
  EKSClusterID: string

  /**
      * 集群创建时间
注意：此字段可能返回 null，表示取不到有效值。
      */
  CreateTime: string

  /**
      * 环境配置信息列表
注意：此字段可能返回 null，表示取不到有效值。
      */
  EnvInfos: Array<EnvInfo>

  /**
      * 引擎所在的区域
注意：此字段可能返回 null，表示取不到有效值。
      */
  EngineRegion: string

  /**
      * 注册引擎是否开启公网
注意：此字段可能返回 null，表示取不到有效值。
      */
  EnableInternet: boolean

  /**
      * 私有网络列表信息
注意：此字段可能返回 null，表示取不到有效值。
      */
  VpcInfos: Array<VpcInfo>

  /**
      * 服务治理相关信息列表
注意：此字段可能返回 null，表示取不到有效值。
      */
  ServiceGovernanceInfos: Array<ServiceGovernanceInfo>

  /**
      * 实例的标签信息
注意：此字段可能返回 null，表示取不到有效值。
      */
  Tags: Array<KVPair>

  /**
      * 引擎实例是否开启控制台公网访问地址
注意：此字段可能返回 null，表示取不到有效值。
      */
  EnableConsoleInternet: boolean

  /**
      * 引擎实例是否开启控制台内网访问地址
注意：此字段可能返回 null，表示取不到有效值。
      */
  EnableConsoleIntranet: boolean

  /**
      * 引擎实例是否展示参数配置页面
注意：此字段可能返回 null，表示取不到有效值。
      */
  ConfigInfoVisible: boolean

  /**
      * 引擎实例控制台默认密码
注意：此字段可能返回 null，表示取不到有效值。
      */
  ConsoleDefaultPwd: string

  /**
      * 交易付费类型，0后付费/1预付费
注意：此字段可能返回 null，表示取不到有效值。
      */
  TradeType: number

  /**
      * 自动续费标记：0表示默认状态(用户未设置，即初始状态)， 1表示自动续费，2表示明确不自动续费
注意：此字段可能返回 null，表示取不到有效值。
      */
  AutoRenewFlag: number

  /**
      * 预付费到期时间
注意：此字段可能返回 null，表示取不到有效值。
      */
  CurDeadline: string

  /**
      * 隔离开始时间
注意：此字段可能返回 null，表示取不到有效值。
      */
  IsolateTime: string

  /**
      * 实例地域相关的描述信息
注意：此字段可能返回 null，表示取不到有效值。
      */
  RegionInfos: Array<DescribeInstanceRegionInfo>

  /**
      * 所在EKS环境，分为common和yunti
注意：此字段可能返回 null，表示取不到有效值。
      */
  EKSType: string

  /**
      * 引擎的产品版本
注意：此字段可能返回 null，表示取不到有效值。
      */
  FeatureVersion?: string

  /**
      * 引擎实例是否开启客户端内网访问地址
注意：此字段可能返回 null，表示取不到有效值。
      */
  EnableClientIntranet?: boolean
}

/**
 * DescribeSREInstanceAccessAddress返回参数结构体
 */
export interface DescribeSREInstanceAccessAddressResponse {
  /**
   * 内网访问地址
   */
  IntranetAddress: string

  /**
   * 公网访问地址
   */
  InternetAddress: string

  /**
   * apollo多环境公网ip
   */
  EnvAddressInfos: Array<EnvAddressInfo>

  /**
      * 控制台公网访问地址
注意：此字段可能返回 null，表示取不到有效值。
      */
  ConsoleInternetAddress: string

  /**
      * 控制台内网访问地址
注意：此字段可能返回 null，表示取不到有效值。
      */
  ConsoleIntranetAddress: string

  /**
      * 客户端公网带宽
注意：此字段可能返回 null，表示取不到有效值。
      */
  InternetBandWidth: number

  /**
      * 控制台公网带宽
注意：此字段可能返回 null，表示取不到有效值。
      */
  ConsoleInternetBandWidth: number

  /**
      * 北极星限流server节点接入IP
注意：此字段可能返回 null，表示取不到有效值。
      */
  LimiterAddressInfos: Array<PolarisLimiterAddress>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeSREInstances返回参数结构体
 */
export interface DescribeSREInstancesResponse {
  /**
   * 总数量
   */
  TotalCount: number

  /**
   * 实例记录
   */
  Content: Array<SREInstance>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * Zookeeper服务端接口列表，用于云监控
 */
export interface ZookeeperServerInterface {
  /**
      * 接口名
注意：此字段可能返回 null，表示取不到有效值。
      */
  Interface: string
}

/**
 * 服务治理相关的信息
 */
export interface ServiceGovernanceInfo {
  /**
   * 引擎所在的地域
   */
  EngineRegion: string

  /**
   * 服务治理引擎绑定的kubernetes集群信息
   */
  BoundK8SInfos?: Array<BoundK8SInfo>

  /**
   * 服务治理引擎绑定的网络信息
   */
  VpcInfos?: Array<VpcInfo>

  /**
   * 当前实例鉴权是否开启
   */
  AuthOpen?: boolean

  /**
   * 该实例支持的功能，鉴权就是 Auth
   */
  Features?: Array<string>

  /**
   * 主账户名默认为 polaris，该值为主账户的默认密码
   */
  MainPassword?: string

  /**
   * 服务治理pushgateway引擎绑定的网络信息
   */
  PgwVpcInfos?: Array<VpcInfo>

  /**
   * 服务治理限流server引擎绑定的网络信息
   */
  LimiterVpcInfos?: Array<VpcInfo>
}

/**
 * 云原生API网关节点信息。
 */
export interface CloudNativeAPIGatewayNode {
  /**
   * 云原生网关节点 id
   */
  NodeId: string

  /**
   * 节点 ip
   */
  NodeIp: string

  /**
      * Zone id
注意：此字段可能返回 null，表示取不到有效值。
      */
  ZoneId?: string

  /**
      * Zone
注意：此字段可能返回 null，表示取不到有效值。
      */
  Zone?: string

  /**
      * 分组ID
注意：此字段可能返回 null，表示取不到有效值。
      */
  GroupId?: string

  /**
      * 分组名
注意：此字段可能返回 null，表示取不到有效值。
      */
  GroupName?: string

  /**
      * 状态
注意：此字段可能返回 null，表示取不到有效值。
      */
  Status?: string
}

/**
 * DescribeNacosReplicas返回参数结构体
 */
export interface DescribeNacosReplicasResponse {
  /**
   * 引擎实例副本信息
   */
  Replicas: Array<NacosReplica>

  /**
      * 副本个数
注意：此字段可能返回 null，表示取不到有效值。
      */
  TotalCount: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeZookeeperServerInterfaces返回参数结构体
 */
export interface DescribeZookeeperServerInterfacesResponse {
  /**
   * 接口总个数
   */
  TotalCount: number

  /**
   * 接口列表
   */
  Content: Array<ZookeeperServerInterface>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 服务治理引擎绑定的kubernetes信息
 */
export interface BoundK8SInfo {
  /**
   * 绑定的kubernetes集群ID
   */
  BoundClusterId: string

  /**
      * 绑定的kubernetes的集群类型，分tke和eks两种
注意：此字段可能返回 null，表示取不到有效值。
      */
  BoundClusterType: string

  /**
      * 服务同步模式，all为全量同步，demand为按需同步
注意：此字段可能返回 null，表示取不到有效值。
      */
  SyncMode?: string
}

/**
 * DescribeSREInstances请求参数结构体
 */
export interface DescribeSREInstancesRequest {
  /**
   * 请求过滤参数
   */
  Filters?: Array<Filter>

  /**
   * 翻页单页查询限制数量[0,1000], 默认值0
   */
  Limit?: number

  /**
   * 翻页单页偏移量，默认值0
   */
  Offset?: number

  /**
   * 查询类型
   */
  QueryType?: string

  /**
   * 调用方来源
   */
  QuerySource?: string
}

/**
 * DescribeCloudNativeAPIGatewayNodes返回参数结构体
 */
export interface DescribeCloudNativeAPIGatewayNodesResponse {
  /**
   * 获取云原生网关节点列表结果。
   */
  Result: DescribeCloudNativeAPIGatewayNodesResult

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeZookeeperReplicas返回参数结构体
 */
export interface DescribeZookeeperReplicasResponse {
  /**
   * 注册引擎实例副本信息
   */
  Replicas: Array<ZookeeperReplica>

  /**
      * 副本个数
注意：此字段可能返回 null，表示取不到有效值。
      */
  TotalCount: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 私有网络信息
 */
export interface VpcInfo {
  /**
   * Vpc Id
   */
  VpcId: string

  /**
   * 子网ID
   */
  SubnetId: string

  /**
      * 内网访问地址
注意：此字段可能返回 null，表示取不到有效值。
      */
  IntranetAddress?: string
}

/**
 * 引擎的初始管理帐号
 */
export interface EngineAdmin {
  /**
   * 控制台初始用户名
   */
  Name?: string

  /**
   * 控制台初始密码
   */
  Password?: string

  /**
   * 引擎接口的管理员 Token
   */
  Token?: string
}

/**
 * 查询Limiter的接入地址
 */
export interface PolarisLimiterAddress {
  /**
      * VPC接入IP列表
注意：此字段可能返回 null，表示取不到有效值。
      */
  IntranetAddress: string
}

/**
 * CreateEngine请求参数结构体
 */
export interface CreateEngineRequest {
  /**
      * 引擎类型。参考值：
- zookeeper
- nacos
- consul
- apollo
- eureka
- polaris
      */
  EngineType: string

  /**
   * 引擎的开源版本。每种引擎支持的开源版本不同，请参考产品文档或者控制台购买页
   */
  EngineVersion: string

  /**
      * 引擎的产品版本。参考值：
- STANDARD： 标准版

引擎各版本及可选择的规格、节点数说明：
apollo - STANDARD版本
规格列表：1C2G、2C4G、4C8G、8C16G、16C32G
节点数：1，2，3，4，5

eureka - STANDARD版本
规格列表：1C2G、2C4G、4C8G、8C16G、16C32G
节点数：3，4，5

polarismesh - STANDARD版本
规格列表：NUM50、NUM100、NUM200、NUM500、NUM1000、NUM5000、NUM10000、NUM50000

兼容原spec-xxxxxx形式的规格ID
      */
  EngineProductVersion: string

  /**
      * 引擎所在地域。参考值说明：
中国区 参考值：
- ap-guangzhou：广州
- ap-beijing：北京
- ap-chengdu：成都
- ap-chongqing：重庆
- ap-nanjing：南京
- ap-shanghai：上海
- ap-hongkong：香港
- ap-taipei：台北
亚太区 参考值：
- ap-jakarta：雅加达
- ap-singapore：新加坡
北美区 参考值
- na-toronto：多伦多
金融专区 参考值
- ap-beijing-fsi：北京金融
- ap-shanghai-fsi：上海金融
- ap-shenzhen-fsi：深圳金融
      */
  EngineRegion: string

  /**
      * 引擎名称。参考值：
- eurek-test
      */
  EngineName: string

  /**
      * 付费类型。参考值：
- 0：后付费
- 1：预付费（接口暂不支持创建预付费实例）
      */
  TradeType: number

  /**
   * 引擎的节点规格 ID。参见EngineProductVersion字段说明
   */
  EngineResourceSpec?: string

  /**
   * 引擎的节点数量。参见EngineProductVersion字段说明
   */
  EngineNodeNum?: number

  /**
      * VPC ID。在 VPC 的子网内分配一个 IP 作为引擎的访问地址。参考值：
- vpc-conz6aix
      */
  VpcId?: string

  /**
      * 子网 ID。在 VPC 的子网内分配一个 IP 作为引擎的访问地址。参考值：
- subnet-ahde9me9
      */
  SubnetId?: string

  /**
      * Apollo 环境配置参数列表。参数说明：
如果创建Apollo类型，此参数为必填的环境信息列表，最多可选4个环境。环境信息参数说明：
- Name：环境名。参考值：prod, dev, fat, uat
- EngineResourceSpec：环境内引擎的节点规格ID。参见EngineProductVersion参数说明
- EngineNodeNum：环境内引擎的节点数量。参见EngineProductVersion参数说明，其中prod环境支持的节点数为2，3，4，5
- StorageCapacity：配置存储空间大小，以GB为单位，步长为5.参考值：35
- VpcId：VPC ID。参考值：vpc-conz6aix
- SubnetId：子网 ID。参考值：subnet-ahde9me9
      */
  ApolloEnvParams?: Array<ApolloEnvParam>

  /**
   * 引擎的标签列表。用户自定义的key/value形式，无参考值
   */
  EngineTags?: Array<InstanceTagInfo>

  /**
      * 引擎的初始帐号信息。可设置参数：
- Name：控制台初始用户名
- Password：控制台初始密码
- Token：引擎接口的管理员 Token
      */
  EngineAdmin?: EngineAdmin

  /**
   * 预付费时长，以月为单位
   */
  PrepaidPeriod?: number

  /**
      * 自动续费标记，仅预付费使用。参考值：
- 0：不自动续费
- 1：自动续费
      */
  PrepaidRenewFlag?: number

  /**
   * 跨地域部署的引擎地域配置详情
   */
  EngineRegionInfos?: Array<EngineRegionInfo>
}

/**
 * 实例地域信息描述
 */
export interface DescribeInstanceRegionInfo {
  /**
      * 引擎部署地域信息
注意：此字段可能返回 null，表示取不到有效值。
      */
  EngineRegion: string

  /**
      * 引擎在该地域的副本数
注意：此字段可能返回 null，表示取不到有效值。
      */
  Replica: number

  /**
      * 引擎在该地域的规格id
注意：此字段可能返回 null，表示取不到有效值。
      */
  SpecId: string

  /**
      * 内网的网络信息
注意：此字段可能返回 null，表示取不到有效值。
      */
  IntranetVpcInfos: Array<VpcInfo>

  /**
      * 是否开公网
注意：此字段可能返回 null，表示取不到有效值。
      */
  EnableClientInternet: boolean
}

/**
 * DescribeSREInstanceAccessAddress请求参数结构体
 */
export interface DescribeSREInstanceAccessAddressRequest {
  /**
   * 注册引擎实例Id
   */
  InstanceId?: string

  /**
   * VPC ID
   */
  VpcId?: string

  /**
   * 子网ID
   */
  SubnetId?: string

  /**
   * 引擎其他组件名称（pushgateway、polaris-limiter）
   */
  Workload?: string

  /**
   * 部署地域
   */
  EngineRegion?: string
}

/**
 * DescribeNacosServerInterfaces返回参数结构体
 */
export interface DescribeNacosServerInterfacesResponse {
  /**
   * 接口总个数
   */
  TotalCount: number

  /**
   * 接口列表
   */
  Content: Array<NacosServerInterface>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 查询过滤通用对象
 */
export interface Filter {
  /**
   * 过滤参数名
   */
  Name: string

  /**
   * 过滤参数值
   */
  Values: Array<string>
}

/**
 * nacos服务端接口列表，用于云监控
 */
export interface NacosServerInterface {
  /**
      * 接口名
注意：此字段可能返回 null，表示取不到有效值。
      */
  Interface: string
}

/**
 * DescribeZookeeperServerInterfaces请求参数结构体
 */
export interface DescribeZookeeperServerInterfacesRequest {
  /**
   * 实例id
   */
  InstanceId?: string

  /**
   * 返回的列表个数
   */
  Limit?: number

  /**
   * 返回的列表起始偏移量
   */
  Offset?: number
}

/**
 * 环境具体信息
 */
export interface EnvInfo {
  /**
   * 环境名称
   */
  EnvName: string

  /**
   * 环境对应的网络信息
   */
  VpcInfos: Array<VpcInfo>

  /**
   * 云硬盘容量
   */
  StorageCapacity: number

  /**
   * 运行状态
   */
  Status?: string

  /**
   * Admin service 访问地址
   */
  AdminServiceIp?: string

  /**
   * Config service访问地址
   */
  ConfigServiceIp?: string

  /**
   * 是否开启config-server公网
   */
  EnableConfigInternet?: boolean

  /**
   * config-server公网访问地址
   */
  ConfigInternetServiceIp?: string

  /**
   * 规格ID
   */
  SpecId?: string

  /**
   * 环境的节点数
   */
  EnvReplica?: number

  /**
   * 环境运行的节点数
   */
  RunningCount?: number

  /**
   * 环境别名
   */
  AliasEnvName?: string

  /**
   * 环境描述
   */
  EnvDesc?: string

  /**
   * 客户端带宽
   */
  ClientBandWidth?: number
}

/**
 * 多环境网络信息
 */
export interface EnvAddressInfo {
  /**
   * 环境名
   */
  EnvName: string

  /**
   * 是否开启config公网
   */
  EnableConfigInternet: boolean

  /**
   * config公网ip
   */
  ConfigInternetServiceIp: string

  /**
      * config内网访问地址
注意：此字段可能返回 null，表示取不到有效值。
      */
  ConfigIntranetAddress: string

  /**
      * 是否开启config内网clb
注意：此字段可能返回 null，表示取不到有效值。
      */
  EnableConfigIntranet?: boolean

  /**
      * 客户端公网带宽
注意：此字段可能返回 null，表示取不到有效值。
      */
  InternetBandWidth?: number
}

/**
 * 引擎实例的标签信息
 */
export interface InstanceTagInfo {
  /**
   * 标签键
   */
  TagKey?: string

  /**
   * 标签值
   */
  TagValue?: string
}
