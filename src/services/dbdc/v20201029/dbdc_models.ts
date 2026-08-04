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
 * IsolateDBCustomNode请求参数结构体
 */
export interface IsolateDBCustomNodeRequest {
  /**
   * <p>DB Custom 节点ID</p>
   */
  NodeId: string
}

/**
 * DescribeDBCustomClusterDetail返回参数结构体
 */
export interface DescribeDBCustomClusterDetailResponse {
  /**
   * <p>集群ID</p>
   */
  ClusterId?: string
  /**
   * <p>集群名称</p>
   */
  ClusterName?: string
  /**
   * <p>集群描述</p>
   */
  ClusterDescription?: string
  /**
   * <p>集群所属地域</p><p>枚举值：</p><ul><li>ap-shanghai： 上海地域</li><li>ap-nanjing： 南京地域</li></ul>
   */
  Region?: string
  /**
   * <p>DB Custom 集群状态</p><p>枚举值：</p><ul><li>Creating： 创建中</li><li>Running： 运行中</li><li>Destroying： 销毁中</li><li>Initializing： 初始化中</li></ul>
   */
  ClusterStatus?: string
  /**
   * <p>集群版本</p><p>枚举值：</p><ul><li>1.34.1： 集群版本1.34.1</li></ul><p>默认值：1.34.1</p>
   */
  ClusterVersion?: string
  /**
   * <p>集群下的节点数量</p>
   */
  ClusterNodeNum?: number
  /**
   * <p>集群规模</p>
   */
  ClusterLevel?: string
  /**
   * <p>创建时间</p>
   */
  CreatedTime?: string
  /**
   * <p>集群标签信息</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Tags?: Array<Tag>
  /**
   * <p>集群的API Server的网络信息</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  ApiServerNetwork?: ApiServerNetwork
  /**
   * <p>容器网络，在此集群中的所有Pod将与此网络连通</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  ContainerNetwork?: ContainerNetwork
  /**
   * <p>是否启用集群删除保护</p><p>枚举值：</p><ul><li>true： 启用</li><li>false： 不启用</li></ul>
   */
  DeletionProtection?: boolean
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DestroyDBCustomCluster请求参数结构体
 */
export interface DestroyDBCustomClusterRequest {
  /**
   * <p>待销毁的集群ID</p><p>入参限制：待销毁的集群必须无任何节点在此集群中。</p>
   */
  ClusterId: string
}

/**
 * DescribeDBCustomClusterResources请求参数结构体
 */
export interface DescribeDBCustomClusterResourcesRequest {
  /**
   * <p>集群ID</p>
   */
  ClusterId: string
}

/**
 * ModifyInstanceName请求参数结构体
 */
export interface ModifyInstanceNameRequest {
  /**
   * 独享集群实例Id
   */
  InstanceId: string
  /**
   * 独享集群实例名称
   */
  InstanceName?: string
}

/**
 * DescribeDBCustomClusterNodeConfig返回参数结构体
 */
export interface DescribeDBCustomClusterNodeConfigResponse {
  /**
   * <p>当前账号下拥有的DB Custom 节点列表信息</p>
   */
  NodeSet?: Array<DBCustomClusterNodeConfig>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeInstances返回参数结构体
 */
export interface DescribeInstancesResponse {
  /**
   * 集群数量
   */
  TotalCount?: number
  /**
   * 集群扩展信息
   */
  Instances?: Array<InstanceExpand>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DB Custom 节点系统盘信息。
 */
export interface SystemDisk {
  /**
   * <p>磁盘类型</p><p>枚举值：</p><ul><li>CLOUD_HSSD： 增强型云硬盘</li></ul>
   */
  DiskType: string
  /**
   * <p>磁盘大小</p><p>单位：GiB</p>
   */
  DiskSize: number
}

/**
 * DB Custom 节点机型信息。
 */
export interface DBCustomNodeTypeInfo {
  /**
   * <p>可用区标识，如 ap-guangzhou-6</p>
   */
  Zone?: string
  /**
   * <p>机型标识</p><p>枚举值：</p><ul><li>DB.SA5.2XLARGE32： DB.SA5机型</li><li>DB.AT5.8XLARGE128： DB.AT5机型</li></ul>
   */
  NodeType?: string
  /**
   * <p>机型系列，如 DB.AT5、DB.SA5</p>
   */
  NodeFamily?: string
  /**
   * <p>CPU 核数</p><p>单位：核</p>
   */
  CPU?: number
  /**
   * <p>内存大小</p><p>单位：GiB</p>
   */
  Memory?: number
  /**
   * <p>机型售卖状态</p><p>枚举值：</p><ul><li>SELL： 正常售卖</li><li>SOLD_OUT： 售罄</li></ul>
   */
  Status?: string
  /**
   * <p>该机型允许的系统盘类型列表（如 CLOUD_BSSD、CLOUD_HSSD）；</p>
   */
  SystemDiskTypes?: Array<string>
  /**
   * <p>该机型允许的数据盘类型列表（如 CLOUD_BSSD、CLOUD_HSSD）；</p>
   */
  DataDiskTypes?: Array<string>
}

/**
 * ModifyInstanceName返回参数结构体
 */
export interface ModifyInstanceNameResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDBCustomClusterNodeConfig请求参数结构体
 */
export interface DescribeDBCustomClusterNodeConfigRequest {
  /**
   * <p>集群ID</p>
   */
  ClusterId: string
  /**
   * <p>按照一个或者多个 NodeId 查询。</p><p>入参限制：每次请求的数量上限为100</p>
   */
  NodeIds: Array<string>
}

/**
 * ModifyDBCustomNodeAttributes返回参数结构体
 */
export interface ModifyDBCustomNodeAttributesResponse {
  /**
   * <p>上架节点的任务ID</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  TaskId?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateDBCustomCluster返回参数结构体
 */
export interface CreateDBCustomClusterResponse {
  /**
   * <p>本次创建的集群ID</p>
   */
  ClusterId?: string
  /**
   * <p>本次创建集群的任务ID</p>
   */
  TaskId?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDBCustomImages请求参数结构体
 */
export interface DescribeDBCustomImagesRequest {
  /**
   * <p>支持镜像过滤的选项</p><p>取值参考：</p><ul><li>image-id,按镜像 ID 过滤    </li><li>os-type,按操作系统类型过滤(linux / windows)</li><li>image-type，按镜像类型过滤（PUBLIC_IMAGE（公共镜像）/ PRIVATE_IMAGE（私有镜像））</li><li>architecture，按架构过滤（x86_64 / arm64）</li></ul>
   */
  Filters?: Array<Filter>
  /**
   * <p>偏移量</p><p>默认值：0</p>
   */
  Offset?: number
  /**
   * <p>返回数量</p><p>取值范围：[1, 100]</p><p>默认值：20</p>
   */
  Limit?: number
}

/**
 * 可用区信息。
 */
export interface ZoneInfo {
  /**
   * <p>支持的可用区</p>
   */
  Zone?: string
  /**
   * <p>可用区状态</p><p>枚举值：</p><ul><li>SELL： 正常售卖</li><li>SOLD_OUT： 售罄</li></ul>
   */
  ZoneState?: string
}

/**
 * 标签键值对。
 */
export interface Tag {
  /**
   * <p>标签键</p>
   */
  Key: string
  /**
   * <p>标签值</p>
   */
  Value: string
}

/**
 * DB Custom 集群内节点资源信息。
 */
export interface DBCustomClusterNodeResource {
  /**
   * <p>节点ID</p>
   */
  NodeId?: string
  /**
   * <p>节点物理资源总容量</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Capacity?: MetaResource
  /**
   * <p>节点可分配容量= Capacity - 系统预留</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Allocatable?: MetaResource
  /**
   * <p>节点上所有非终态 Pod 的 requests 申请量之和（含系统 Pod）</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Requests?: MetaResource
  /**
   * <p>节点上所有非终态 Pod 的 limits 上限之和（含系统 Pod）</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Limits?: MetaResource
  /**
   * <p>节点可再调度余量 = max(0, Allocatable - Requests)</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Available?: MetaResource
}

/**
 * CreateDBCustomCluster请求参数结构体
 */
export interface CreateDBCustomClusterRequest {
  /**
   * <p>容器网络，在此集群的所有 POD 与此网络连通</p>
   */
  ContainerNetwork: ContainerNetwork
  /**
   * <p>集群名称</p><p>入参限制：最长128个字符。</p>
   */
  ClusterName?: string
  /**
   * <p>集群的API Server的网络信息</p><p>入参限制：必须为此账号下拥有的网络地址，可以与容器网络保持一致。</p>
   */
  ApiServerNetwork?: ApiServerNetwork
  /**
   * <p>集群描述</p>
   */
  ClusterDescription?: string
  /**
   * <p>集群标签</p>
   */
  Tags?: Array<Tag>
  /**
   * <p>客户端Token</p>
   */
  ClientToken?: string
  /**
   * <p>试运行开关，true 时只执行参数校验，不发起创建流程，默认 false</p>
   */
  DryRun?: boolean
  /**
   * <p>是否启用集群删除保护</p><p>枚举值：</p><ul><li>true： 启用</li><li>false： 不启用</li></ul><p>默认值：true</p>
   */
  DeletionProtection?: boolean
}

/**
 * DescribeInstanceList返回参数结构体
 */
export interface DescribeInstanceListResponse {
  /**
   * 独享集群列表
   */
  Instances?: Array<DescribeInstanceDetail>
  /**
   * 独享集群实例总数
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyDBCustomNodeSecurityGroups返回参数结构体
 */
export interface ModifyDBCustomNodeSecurityGroupsResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 标签信息。
 */
export interface Label {
  /**
   * <p>在集群内的节点Label键</p>
   */
  Key?: string
  /**
   * <p>在集群内的节点Label键值</p>
   */
  Value?: string
}

/**
 * RemoveNodesFromDBCustomCluster返回参数结构体
 */
export interface RemoveNodesFromDBCustomClusterResponse {
  /**
   * <p>任务ID</p>
   */
  TaskId?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDBCustomNodes返回参数结构体
 */
export interface DescribeDBCustomNodesResponse {
  /**
   * <p>当前账号下拥有的DB Custom 节点总数</p>
   */
  TotalCount?: number
  /**
   * <p>当前账号下拥有的DB Custom 节点列表信息</p>
   */
  NodeSet?: Array<DBCustomNode>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDBCustomClusterResources返回参数结构体
 */
export interface DescribeDBCustomClusterResourcesResponse {
  /**
   * <p>参与汇总的工作节点总数（不含控制面节点）</p><p>单位：台</p>
   */
  NodeCount?: number
  /**
   * <p>集群所有节点的资源物理总容量之和</p>
   */
  Capacity?: MetaResource
  /**
   * <p>集群所有节点的可分配容量之和（= Capacity - 系统预留）</p>
   */
  Allocatable?: MetaResource
  /**
   * <p>集群所有非终态 Pod 的 requests 申请量之和（含系统 Pod）</p>
   */
  Requests?: MetaResource
  /**
   * <p>集群所有非终态 Pod 的 limits 上限之和（含系统 Pod，Pods 字段无语义，固定为 0）</p>
   */
  Limits?: MetaResource
  /**
   * <p>集群可再调度余量（所有节点 max(0, Allocatable - Requests) 累加求和）</p>
   */
  Available?: MetaResource
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDBCustomClusterNodes请求参数结构体
 */
export interface DescribeDBCustomClusterNodesRequest {
  /**
   * <p>DB Custom 集群ID</p>
   */
  ClusterId: string
  /**
   * <p>查询筛选条件。支持的条件有：</p><ul><li>node-name：DB Custom 节点名称。</li></ul>
   */
  Filters?: Array<Filter>
  /**
   * <p>分页偏移量</p>
   */
  Offset?: number
  /**
   * <p>返回数量</p><p>取值范围：[1, 100]</p><p>默认值：20</p>
   */
  Limit?: number
}

/**
 * DescribeInstanceList请求参数结构体
 */
export interface DescribeInstanceListRequest {
  /**
   * 分页返回数量
   */
  Limit?: number
  /**
   * 分页偏移量
   */
  Offset?: number
  /**
   * 排序字段，createTime,instancename两者之一
   */
  OrderBy?: string
  /**
   * 排序规则，desc,asc两者之一
   */
  SortBy?: string
  /**
   * 按产品过滤，0:CDB, 1:TDSQL
   */
  ProductId?: Array<number | bigint>
  /**
   * 按实例ID过滤
   */
  InstanceId?: Array<string>
  /**
   * 按实例名称过滤
   */
  InstanceName?: Array<string>
  /**
   * 按金融围笼ID过滤
   */
  FenceId?: Array<string>
  /**
   * 按实例状态过滤, -1:已隔离, 0:创建中, 1:运行中, 2:扩容中, 3:删除中
   */
  Status?: Array<number | bigint>
  /**
   * 按所属集群ID过滤
   */
  ClusterId?: Array<string>
}

/**
 * DescribeDBCustomClusters请求参数结构体
 */
export interface DescribeDBCustomClustersRequest {
  /**
   * <p>按照一个或者多个 ClusterId 查询。</p><p>入参限制：每次请求的数量上限为100</p>
   */
  ClusterIds?: Array<string>
  /**
   * <p>查询筛选条件。支持的筛选条件包括：</p><ul><li>cluster-name：DB Custom 集群名称，精确匹配。</li><li>cluster-status：DB Custom 集群状态（Creating，Running，Destroying）。</li></ul>
   */
  Filters?: Array<Filter>
  /**
   * <p>根据标签的 Key 和 Value 筛选 DB Custom 集群</p>
   */
  Tags?: Array<Tag>
  /**
   * <p>集群列表分页偏移量</p>
   */
  Offset?: number
  /**
   * <p>返回数量</p><p>取值范围：[1, 100]</p><p>默认值：20</p>
   */
  Limit?: number
}

/**
 * DescribeDBInstances请求参数结构体
 */
export interface DescribeDBInstancesRequest {
  /**
   * 独享集群实例Id
   */
  InstanceId: string
  /**
   * 独享集群主机Id
   */
  HostId?: string
  /**
   * 分页返回数量
   */
  Limit?: number
  /**
   * 分页偏移量
   */
  Offset?: number
  /**
   * 实例类型,0:mariadb, 1:tdsql
   */
  ShardType?: Array<number | bigint>
}

/**
 * DescribeDBCustomNodeTypes返回参数结构体
 */
export interface DescribeDBCustomNodeTypesResponse {
  /**
   * <p>节点机型详细信息</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  NodeTypeSet?: Array<DBCustomNodeTypeInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * AddNodesToDBCustomCluster请求参数结构体
 */
export interface AddNodesToDBCustomClusterRequest {
  /**
   * <p>集群ID</p>
   */
  ClusterId: string
  /**
   * <p>需上架的节点 ID 列表</p>
   */
  NodeIds: Array<string>
  /**
   * <p>节点上架后重设的操作系统镜像ID</p><p>取值参考：可通过&quot;DescribeDBCustomImages&quot;接口获取支持的镜像。</p>
   */
  ImageId: string
  /**
   * <p>实例登录设置。通过该参数可以设置实例的登录方式密码、密钥或保持镜像的原始登录设置。</p><p>入参限制：若选择密钥方式，KeyIds 仅支持单个 ID。三种方式必须且仅可以设置其中一种。</p>
   */
  LoginSettings: LoginSettings
  /**
   * <p>节点上架成功后初始化新增的自定义 Label</p><p>入参限制：单次 ≤ 20 对</p>
   */
  Labels?: Array<Label>
  /**
   * <p>节点上架成功后初始化下发的Taint</p><p>入参限制：单次 ≤ 5 对</p>
   */
  Taints?: Array<Taint>
  /**
   * <p>主机hostname ，仅 HostNameType=1 时必填，其余情况忽略；不支持大写字母</p><p>入参限制：- 点号（.）和短横线（-）不能作为 HostName 的首尾字符，不能连续使用。不允许使用下划线(_)。</p><ul><li>Windows 节点：主机名名字符长度为[2, 15]，允许字母（不限制大小写）、数字和短横线（-）组成，不支持点号（.），不能全是数字。</li><li>其他类型（Linux 等）节点：主机名字符长度为[2, 60]，允许支持多个点号，点之间为一段，每段允许字母（不限制大小写）、数字和短横线（-）组成。</li><li>上架多台节点时：</li><li>指定模式串 {R:x}：表示生成数字序列 [x, x+n-1]，其中 n为购买节点的数量。例如：输入 server_{R:3}，购买1台时，节点主机名为 server_3；购买2台时，主机名分别为 server_3、server_4。</li><li>指定模式串 {R:x,F:y}：y表示固定位数（可选），取值范围为 [0,8]，默认值 0表示不固定位数（等效于 {R:x}）。不足位时自动补零，例如：输入server_{R:3,F:3}，购买2台时，节点主机名为 server_003、server_004。若数字位数超过 y（如 {R:99,F:2}），以实际位数为准，例如：app_{R:99,F:2}，购买2台时，节点主机名为 app_99、app_100。</li><li>指定模式串 {IP}：自动替换为节点的内网IP地址。例如：输入 node-{IP}，节点主机名为 node-10.0.12.8；支持与序号模式串混合使用，例如：输入 web-{IP}-{R:1}，购买2台时，节点主机名分别为 web-10.0.12.8-1、web-10.0.12.9-2。</li><li>模式串需严格遵循 {R:x,F:y}、{R:x} 或 {IP} 格式，无效格式（如 {}）视为普通文本。支持多个模式串。</li><li>未指定模式串：节点主机名添加后缀 1、2...n，其中n表示购买节点的数量，例如 server_购买2台时生成 server_1、server_2。</li></ul>
   */
  HostName?: string
  /**
   * <p>HostName 来源类型</p><p>枚举值：</p><ul><li>0： 复用节点创建时设置的 hostname，为空则报错</li><li>1： 重新指定 HostName，需同时传 HostName 字段（支持模式串 {R:x}、{R:x,F:y}、{IP}）</li><li>2： 系统自动分配，用 NodeId 作为 HostName</li></ul>
   */
  HostNameType?: number
  /**
   * <p>试运行开关，true 时只执行参数校验，不发起上架流程</p><p>默认值：false</p>
   */
  DryRun?: boolean
}

/**
 * DescribeHostList返回参数结构体
 */
export interface DescribeHostListResponse {
  /**
   * 主机总数
   */
  TotalCount: number
  /**
   * 主机详情
   */
  Hosts: Array<HostDetail>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDBCustomRegions请求参数结构体
 */
export type DescribeDBCustomRegionsRequest = null

/**
 * ModifyDBCustomClusterTags请求参数结构体
 */
export interface ModifyDBCustomClusterTagsRequest {
  /**
   * <p>DB Custom 集群ID</p><p>参数格式：dbcc-xxxxxxxx</p>
   */
  ClusterId: string
  /**
   * <p>为 DB Custom 集群绑定的标签信息</p><p>入参限制：参考标签平台的限制策略</p>
   */
  AddTags?: Array<Tag>
  /**
   * <p>为 DB Custom 集群删除的标签Key</p>
   */
  DeleteTagKeys?: Array<string>
}

/**
 * DescribeDBCustomTaskStatus返回参数结构体
 */
export interface DescribeDBCustomTaskStatusResponse {
  /**
   * <p>任务 ID</p><p>枚举值：</p><ul><li>Running： 运行中</li><li>Succeeded： 成功</li><li>Failed： 失败</li></ul>
   */
  Status?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeInstanceDetail返回参数结构体
 */
export interface DescribeInstanceDetailResponse {
  /**
   * 独享集群实例Id
   */
  InstanceId?: string
  /**
   * 独享集群实例名称
   */
  InstanceName?: string
  /**
   * 地域
   */
  Region?: string
  /**
   * 产品ID, 0:CDB, 1:TDSQL
   */
  ProductId?: number
  /**
   * 集群类型, 0:公有云, 1:金融围笼
   */
  Type?: number
  /**
   * 主机类型, 0:物理机, 1:cvm本地盘, 2:cvm云盘
   */
  HostType?: number
  /**
   * 自动续费标志, 0:未设置, 1:自动续费, 2:到期不续费
   */
  AutoRenewFlag?: number
  /**
   * 集群状态
   */
  Status?: number
  /**
   * 集群状态描述
   */
  StatusDesc?: string
  /**
   * 创建时间
   */
  CreateTime?: string
  /**
   * 到期时间
   */
  PeriodEndTime?: string
  /**
   * 主机数
   */
  HostNum?: number
  /**
   * Db实例数
   */
  DbNum?: number
  /**
   * 分配策略, 0:紧凑, 1:均匀
   */
  AssignStrategy?: number
  /**
   * 总主机CPU(单位:核)
   */
  CpuSpec?: number
  /**
   * 总已分配CPU(单位:核)
   */
  CpuAssigned?: number
  /**
   * 总可分配CPU(单位:核)
   */
  CpuAssignable?: number
  /**
   * 总主机内存(单位:GB)
   */
  MemorySpec?: number
  /**
   * 总已分配内存(单位:GB)
   */
  MemoryAssigned?: number
  /**
   * 总可分配内存(单位:GB)
   */
  MemoryAssignable?: number
  /**
   * 总机器磁盘(单位:GB)
   */
  DiskSpec?: number
  /**
   * 总已分配磁盘(单位:GB)
   */
  DiskAssigned?: number
  /**
   * 总可分配磁盘(单位:GB)
   */
  DiskAssignable?: number
  /**
   * 可用区
   */
  Zone?: string
  /**
   * 金融围笼ID
   */
  FenceId?: string
  /**
   * 所属集群ID(默认集群为空)
   */
  ClusterId?: string
  /**
   * 独享集群的标签信息
   */
  ResourceTags?: Array<ResourceTag>
  /**
   * CPU类型，Intel/AMD,Hygon
   */
  CpuType?: string
  /**
   * 可用区列表
   */
  Zones?: Array<string>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyDBCustomClusterNodeConfig返回参数结构体
 */
export interface ModifyDBCustomClusterNodeConfigResponse {
  /**
   * <p>任务ID</p>
   */
  TaskId?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DB实例详情
 */
export interface DBInstanceDetail {
  /**
   * DB实例Id
   */
  InstanceId?: string
  /**
   * DB实例名称
   */
  InstanceName?: string
  /**
   * DB实例状态,-1:已隔离, 0:创建中, 1:流程中, 2:运行中, 3:未初始化
   */
  Status?: number
  /**
   * DB实例状态描述,-1:已隔离, 0:创建中, 1:流程中, 2:运行中, 3:未初始化
   */
  StatusDesc?: string
  /**
   * DB实例版本
   */
  DbVersion?: string
  /**
   * Vip信息
   */
  Vip?: string
  /**
   * Vip使用的端口号
   */
  Vport?: number
  /**
   * 字符串型的私有网络ID
   */
  UniqueVpcId?: string
  /**
   * 字符串型的私有网络子网ID
   */
  UniqueSubnetId?: string
  /**
   * 是否为分布式版本,0:否,1:是
   */
  Shard?: number
  /**
   * DB实例节点数
   */
  NodeNum?: number
  /**
   * CPU规格(单位:核数)
   */
  Cpu?: number
  /**
   * 内存规格(单位:GB)
   */
  Memory?: number
  /**
   * 磁盘规格(单位:GB)
   */
  Disk?: number
  /**
   * 分布式类型的实例的分片数
   */
  ShardNum?: number
  /**
   * 地域
   */
  Region?: string
  /**
   * 可用区
   */
  Zone?: string
  /**
   * Db所在主机列表, 格式: m1,s1|m2,s2
   */
  DbHosts?: string
  /**
   * 主机角色, 1:主, 2:从, 3:主+从
   */
  HostRole?: number
  /**
   * DB引擎，MySQL,Percona,MariaDB
   */
  DbEngine?: string
  /**
   * 创建时间
   */
  CreateTime?: string
  /**
   * 可用区列表
   */
  Zones?: Array<string>
}

/**
 * 集群节点 taint 信息。
 */
export interface Taint {
  /**
   * <p>Taint 的键，格式对齐 K8s 原生约束（prefix DNS 子域 ≤ 253 字符，name ≤ 63 字符），不可使用系统保留前缀</p>
   */
  Key: string
  /**
   * <p>污点效果</p><p>枚举值：</p><ul><li>NoSchedule： 不允许新 Pod 调度到该节点（已运行 Pod 不受影响）</li><li>PreferNoSchedule： 尽量不调度，无法满足时仍可调度</li><li>NoExecute： 不允许调度，且会驱逐已在节点上运行的不容忍该 Taint 的 Pod</li></ul>
   */
  Effect?: string
  /**
   * <p>Taint 的值，≤ 63 字符，可为空</p>
   */
  Value?: string
}

/**
 * DestroyDBCustomNode请求参数结构体
 */
export interface DestroyDBCustomNodeRequest {
  /**
   * <p>DB Custom 节点ID</p>
   */
  NodeId: string
}

/**
 * DescribeDBCustomZones请求参数结构体
 */
export type DescribeDBCustomZonesRequest = null

/**
 * ModifyDBCustomClusterNodeConfig请求参数结构体
 */
export interface ModifyDBCustomClusterNodeConfigRequest {
  /**
   * <p>目标集群 ID</p>
   */
  ClusterId: string
  /**
   * <p>要修改的节点 ID 列表</p><p>入参限制：数量范围 1~50 个</p>
   */
  NodeIds: Array<string>
  /**
   * <p>新增或覆盖的集群 Label</p><p>入参限制：- 单次 ≤ 20 对；合并后节点总量不超过 20</p><ul><li>Key 格式对齐 K8s 原生（两段式，prefix DNS 子域 ≤ 253 字符，name ≤ 63 字符）</li><li>Value ≤ 63 字符，可为空</li><li>不可操作系统保留前缀</li></ul>
   */
  UpsertLabels?: Array<Label>
  /**
   * <p>要删除的 Label key 列表，按 key 精确匹配，key 不存在时幂等放行。</p><p>入参限制：- Key 格式对齐 K8s 原生（两段式，prefix DNS 子域 ≤ 253 字符，name ≤ 63 字符）</p><ul><li>Value ≤ 63 字符，可为空</li><li>不可操作系统保留前缀</li></ul>
   */
  DeleteLabelKeys?: Array<string>
  /**
   * <p>新增或覆盖的 Taint。</p><p>入参限制：- 单次 ≤ 5 对；合并后节点总量不超过 5。</p><ul><li>唯一性键为 (Key, Effect)，匹配到已有 (Key, Effect) 时覆盖 Value，否则新增</li><li>Effect 合法值：NoSchedule / PreferNoSchedule / NoExecute</li><li>同一 Key 允许多个不同 Effect 的 Taint 并存</li></ul>
   */
  UpsertTaints?: Array<Taint>
  /**
   * <p>要删除的 Taint 过滤器列表</p><p>入参限制：- 唯一性键为 (Key, Effect)，匹配到已有 (Key, Effect) 时覆盖 Value，否则新增</p><ul><li>Effect 合法值：NoSchedule / PreferNoSchedule / NoExecute</li><li>同一 Key 允许多个不同 Effect 的 Taint 并存</li></ul>
   */
  DeleteTaints?: Array<Taint>
}

/**
 * 主机详情
 */
export interface HostDetail {
  /**
   * 主机Id
   */
  HostId?: string
  /**
   * 主机名称
   */
  HostName?: string
  /**
   * 可用区
   */
  Zone?: string
  /**
   * 主机状态
   */
  Status?: number
  /**
   * 分配DB实例状态,0:可分配,1:不可分配
   */
  AssignStatus?: number
  /**
   * 主机类型, 0:物理机, 1:cvm本地盘, 2:cvm云盘
   */
  HostType?: number
  /**
   * DB实例数
   */
  DbNum?: number
  /**
   * 主机CPU(单位:核数)
   */
  CpuSpec?: number
  /**
   * 已分配CPU(单位:核数)
   */
  CpuAssigned?: number
  /**
   * 可分配CPU(单位:核数)
   */
  CpuAssignable?: number
  /**
   * 主机内存(单位:GB)
   */
  MemorySpec?: number
  /**
   * 已分配内存(单位:GB)
   */
  MemoryAssigned?: number
  /**
   * 可分配内存(单位:GB)
   */
  MemoryAssignable?: number
  /**
   * 主机磁盘(单位:GB)
   */
  DiskSpec?: number
  /**
   * 已分配磁盘(单位:GB)
   */
  DiskAssigned?: number
  /**
   * 可分配磁盘(GB)
   */
  DiskAssignable?: number
  /**
   * CPU分配比
   */
  CpuRatio?: number
  /**
   * 内存分配比
   */
  MemoryRatio?: number
  /**
   * 磁盘分配比
   */
  DiskRatio?: number
  /**
   * 机型名称
   */
  MachineName?: string
  /**
   * 机型类别
   */
  MachineType?: string
  /**
   * 计费标签
   */
  PidTag?: string
  /**
   * 计费ID
   */
  Pid?: number
  /**
   * 独享集群实例Id
   */
  InstanceId?: string
  /**
   * 可用区列表
   */
  Zones?: Array<string>
}

/**
 * CheckRoleAuthorized请求参数结构体
 */
export interface CheckRoleAuthorizedRequest {
  /**
   * <p>待检测的角色名字</p>
   */
  RoleName: string
}

/**
 * CreateDBCustomNodes请求参数结构体
 */
export interface CreateDBCustomNodesRequest {
  /**
   * <p>产品支持的可用区</p><p>枚举值：</p><ul><li>ap-shanghai-5： 上海五区</li><li>ap-shanghai-8： 上海八区</li><li>ap-nanjing-3： 南京三区</li></ul>
   */
  Zone: string
  /**
   * <p>镜像ID</p><p>参数格式：img-xxxxxxx</p><p>入参限制：必须为当前账号下DB Custom 产品拥有的镜像</p><p>取值参考：可通过&quot;DescribeDBCustomImages&quot;接口获取支持的镜像。</p>
   */
  ImageId: string
  /**
   * <p>为节点打通SSH连接的VPC 网络ID。</p><p>参数格式：vpc-b4zgtest</p><p>入参限制：必须是当前账号下拥有的VPC 网络ID，且不能跨地域。</p><p>取值参考：可通过【查询VPC列表】接口获取：https://cloud.tencent.com/document/product/215/15778</p>
   */
  VpcId: string
  /**
   * <p>为节点打通SSH连接的VPC 子网 ID。 </p><p>参数格式：subnet-t13dtest</p><p>入参限制：必须是VPC之下的子网，子网必须与可用区对应。</p><p>取值参考：可通过【查询子网列表】接口获取：https://cloud.tencent.com/document/product/215/15784</p>
   */
  SubnetId: string
  /**
   * <p>节点机型</p><p>枚举值：</p><ul><li>DB.AT5.32XLARGE512： 高IO型服务器：128核心512GB内存，8*7180GB本地NvME SSDB。</li><li>DB.AT5.64XLARGE1152： 高IO型服务器：256核心1152GB内存，12*7180GB本地NvME SSDB。</li><li>DB.AT5.128XLARGE2304： 高IO型服务器：512核心2304GB内存，24*7180GB本地NvME SSDB。</li><li>DB.AT5.16XLARGE256： 高IO型服务器：64核心256GB内存，4*7180GB本地NvME SSDB。</li><li>DB.AT5.8XLARGE128： 高IO型服务器：32核心128GB内存，2*7180GB本地NvME SSDB。</li></ul>
   */
  NodeType: string
  /**
   * <p>购买的节点数量</p><p>取值范围：[1, 20]</p>
   */
  NodeCount: number
  /**
   * <p>节点登录设置。通过该参数可以设置节点的登录方式密码、密钥或保持镜像的原始登录设置。</p><p>入参限制：若选择密钥方式，KeyIds 仅支持单个 ID。三种方式必须且仅可以设置其中一种。</p>
   */
  LoginSettings: LoginSettings
  /**
   * <p>购买时长(月): 1/2/3/4/5/6/7/8/9/10/11/12/24/36</p><p>取值范围：[1, 36]</p><p>单位：月</p><p>默认值：1</p>
   */
  Period?: number
  /**
   * <p>自动续费配置</p><p>枚举值：</p><ul><li>1： 自动续费</li><li>2： 不自动续费</li></ul><p>默认值：不自动续费</p>
   */
  AutoRenew?: number
  /**
   * <p>节点名称</p><p>入参限制：最多128个字符</p>
   */
  NodeName?: string
  /**
   * <p>是否使用代金券自动抵扣</p><p>枚举值：</p><ul><li>1： 使用</li><li>0： 不使用</li></ul><p>默认值：0</p>
   */
  AutoVoucher?: number
  /**
   * <p>代金券ID</p><p>入参限制：必须为当前账号下拥有的未抵扣的代金券ID。</p>
   */
  VoucherIds?: Array<string>
  /**
   * <p>标签</p>
   */
  Tags?: Array<Tag>
  /**
   * <p>用于保证请求幂等性的字符串。该字符串由客户生成，需保证不同请求之间唯一，最大值不超过64个ASCII字符。若不指定该参数，则无法保证请求的幂等性。</p>
   */
  ClientToken?: string
  /**
   * <p>计费模式</p><p>枚举值：</p><ul><li>PREPAID： 包年包月</li><li>POSTPAID： 按量付费</li></ul><p>默认值：默认为包年包月(PREPAID)</p>
   */
  ChargeType?: string
  /**
   * <p>访问主机的网络模式</p><p>枚举值：</p><ul><li>privatelink： 四层网络联通，放通SSH 通路</li><li>cross_tenant_eni： 三层网络联通，双网卡模式</li></ul><p>默认值：默认值为：privatelink</p>
   */
  NetworkMode?: string
  /**
   * <p>系统盘配置</p><p>入参限制：仅云盘版机型支持，如DB.SA5机型。本地盘机型DB.AT5机型不支持设置</p>
   */
  SystemDisk?: SystemDisk
  /**
   * <p>数据库盘配置</p><p>入参限制：仅云盘版机型支持，如DB.SA5机型。本地盘机型DB.AT5机型不支持设置</p>
   */
  DataDisks?: Array<DataDisk>
  /**
   * <p>主机的hostname。</p><p>参数格式：字符串或者指定模式串</p><p>入参限制：- 点号（.）和短横线（-）不能作为 HostName 的首尾字符，不能连续使用。不允许使用下划线(_)。</p><ul><li>Windows 节点：主机名名字符长度为[2, 15]，允许字母（不限制大小写）、数字和短横线（-）组成，不支持点号（.），不能全是数字。</li><li>其他类型（Linux 等）节点：主机名字符长度为[2, 60]，允许支持多个点号，点之间为一段，每段允许字母（不限制大小写）、数字和短横线（-）组成。</li><li>购买多台节点时：</li><li>指定模式串 {R:x}：表示生成数字序列 [x, x+n-1]，其中 n为购买节点的数量。例如：输入 server_{R:3}，购买1台时，节点主机名为 server_3；购买2台时，主机名分别为 server_3、server_4。</li><li>指定模式串 {R:x,F:y}：y表示固定位数（可选），取值范围为 [0,8]，默认值 0表示不固定位数（等效于 {R:x}）。不足位时自动补零，例如：输入server_{R:3,F:3}，购买2台时，节点主机名为 server_003、server_004。若数字位数超过 y（如 {R:99,F:2}），以实际位数为准，例如：app_{R:99,F:2}，购买2台时，节点主机名为 app_99、app_100。</li><li>指定模式串 {IP}：自动替换为节点的内网IP地址。例如：输入 node-{IP}，节点主机名为 node-10.0.12.8；支持与序号模式串混合使用，例如：输入 web-{IP}-{R:1}，购买2台时，节点主机名分别为 web-10.0.12.8-1、web-10.0.12.9-2。</li><li>模式串需严格遵循 {R:x,F:y}、{R:x} 或 {IP} 格式，无效格式（如 {}）视为普通文本。支持多个模式串。</li><li>未指定模式串：节点主机名添加后缀 1、2...n，其中n表示购买节点的数量，例如 server_购买2台时生成 server_1、server_2。</li></ul>
   */
  HostName?: string
  /**
   * <p>试运行开关。</p><p>枚举值：</p><ul><li>true： 为 true 时接口只执行参数校验与资源申请检查（库存、配额、网络等），完成后立即返回空响应，不会真正下单，也不会创建节点记录。用于调用方在真正下单前做一次可行性预检。</li><li>false： 不预检查</li></ul><p>默认值：false</p>
   */
  DryRun?: boolean
  /**
   * <p>设置节点安全组</p><p>参数格式：设置需要与节点绑定的多个安全组ID，以数组形式配置。</p>
   */
  SecurityGroupIds?: Array<string>
}

/**
 * RenewDBCustomNode返回参数结构体
 */
export interface RenewDBCustomNodeResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDBCustomImages返回参数结构体
 */
export interface DescribeDBCustomImagesResponse {
  /**
   * <p>总镜像数量</p>
   */
  TotalCount?: number
  /**
   * <p>支持的镜像列表信息</p>
   */
  ImageSet?: Array<DBCustomImage>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyDBCustomNodeTags返回参数结构体
 */
export interface ModifyDBCustomNodeTagsResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * AddNodesToDBCustomCluster返回参数结构体
 */
export interface AddNodesToDBCustomClusterResponse {
  /**
   * <p>上架节点的任务ID</p>
   */
  TaskId?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DestroyDBCustomCluster返回参数结构体
 */
export interface DestroyDBCustomClusterResponse {
  /**
   * <p>销毁集群的任务ID</p>
   */
  TaskId?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDBCustomClusterNodeResources请求参数结构体
 */
export interface DescribeDBCustomClusterNodeResourcesRequest {
  /**
   * <p>集群ID</p>
   */
  ClusterId: string
  /**
   * <p>按照一个或者多个 NodeId 查询。</p><p>入参限制：每次请求的数量上限为50</p>
   */
  NodeIds: Array<string>
}

/**
 * 标签对象，包含tagKey & tagValue
 */
export interface ResourceTag {
  /**
   * 标签键
   */
  TagKey: string
  /**
   * 标签值
   */
  TagValue: string
}

/**
 * DB Custom 节点数据盘信息。
 */
export interface DataDisk {
  /**
   * <p>磁盘类型</p><p>枚举值：</p><ul><li>CLOUD_HSSD： 增强型云硬盘</li><li>LOCAL_NVME： 本地硬盘</li></ul>
   */
  DiskType: string
  /**
   * <p>磁盘大小</p><p>单位：GiB</p>
   */
  DiskSize: number
  /**
   * <p>磁盘名称</p><p>DataDisk 作为输入参数时，DiskName 无效。</p>
   */
  DiskName?: string
}

/**
 * DescribeDBCustomNodeTypes请求参数结构体
 */
export interface DescribeDBCustomNodeTypesRequest {
  /**
   * <p>支持通过地域，可用区，机型系列，机型标识进行过滤</p><p>入参限制：region、zone、node-family、node-type</p>
   */
  Filters?: Array<Filter>
}

/**
 * DB Custom 节点登录相关配置。
 */
export interface LoginSettings {
  /**
   * <p>实例登录密码。不同操作系统类型密码复杂度限制不一样，具体如下： Linux实例密码必须8到30位，至少包括两项[a-z]，[A-Z]、[0-9] 和 [( ) <code>~ ! @ # $ % ^ &amp; * - + = | { } [ ] : ; &#39; , . ? / ]中的特殊符号。 Windows实例密码必须12到30位，至少包括三项[a-z]，[A-Z]，[0-9] 和 [( )</code> ~ ! @ # $ % ^ &amp; * - + = | { } [ ] : ; &#39; , . ? /]中的特殊符号。</p>
   */
  Password?: string
  /**
   * <p>密钥ID列表。关联密钥后，就可以通过对应的私钥来访问实例；KeyId可通过接口 DescribeKeyPairs获取，密钥与密码不能同时指定，同时Windows操作系统不支持指定密钥。</p><p>入参限制：当前仅支持设置单个 ID。</p>
   */
  KeyIds?: Array<string>
  /**
   * <p>保持镜像的原始设置。该参数与Password或KeyIds.N不能同时指定。只有使用自定义镜像、共享镜像或外部导入镜像创建实例时才能指定该参数为true。</p><p>枚举值：</p><ul><li>true： 表示保持镜像的登录设置</li><li>false： 表示不保持镜像的登录设置</li></ul>
   */
  KeepImageLogin?: string
}

/**
 * 安全组详情
 */
export interface SecurityGroup {
  /**
   * <p>安全组ID</p>
   */
  SecurityGroupId?: string
  /**
   * <p>所属项目 ID</p>
   */
  ProjectId?: number
  /**
   * <p>安全组创建时间</p>
   */
  CreateTime?: string
  /**
   * <p>安全组入方向规则列表</p>
   */
  Inbound?: Array<PolicyRule>
  /**
   * <p>安全组出方向规则列表</p>
   */
  Outbound?: Array<PolicyRule>
  /**
   * <p>安全组名称</p>
   */
  SecurityGroupName?: string
  /**
   * <p>安全组备注说明</p>
   */
  SecurityGroupRemark?: string
}

/**
 * DB Custom 可选的镜像信息。
 */
export interface DBCustomImage {
  /**
   * <p>镜像ID</p>
   */
  ImageId?: string
  /**
   * <p>操作系统名称</p>
   */
  OsName?: string
  /**
   * <p>镜像类型</p><p>枚举值：</p><ul><li>PUBLIC_IMAGE： 公共镜像 (腾讯云官方镜像)</li><li>PRIVATE_IMAGE： 私有镜像 (客户专属镜像)</li></ul>
   */
  ImageType?: string
  /**
   * <p>操作系统架构</p><p>枚举值：</p><ul><li>x86_64： X86 64位架构</li><li>arm64： ARM 64位机构</li></ul>
   */
  Architecture?: string
  /**
   * <p>操作系统类型</p><p>枚举值：</p><ul><li>windows： windows</li><li>linux： linux</li></ul>
   */
  OsType?: string
}

/**
 * DescribeDBCustomClusterNodeResources返回参数结构体
 */
export interface DescribeDBCustomClusterNodeResourcesResponse {
  /**
   * <p>当前账号下拥有的DB Custom 节点列表信息</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  NodeSet?: Array<DBCustomClusterNodeResource>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyDBCustomClusterTags返回参数结构体
 */
export interface ModifyDBCustomClusterTagsResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDBCustomRegions返回参数结构体
 */
export interface DescribeDBCustomRegionsResponse {
  /**
   * <p>支持售卖的地域列表信息</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  RegionSet?: Array<RegionInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 独享集群详情
 */
export interface DescribeInstanceDetail {
  /**
   * 独享集群实例Id
   */
  InstanceId?: string
  /**
   * 独享集群实例名称
   */
  InstanceName?: string
  /**
   * 地域
   */
  Region?: string
  /**
   * 产品ID, 0:CDB, 1:TDSQL
   */
  ProductId?: number
  /**
   * 集群类型, 0:公有云, 1:金融围笼, 2:CDC集群
   */
  Type?: number
  /**
   * 主机类型, 0:物理机, 1:CVM机型, 2:CDC机型
   */
  HostType?: number
  /**
   * 自动续费标志, 0:未设置, 1:自动续费, 2:到期不续费
   */
  AutoRenewFlag?: number
  /**
   * 集群状态
   */
  Status?: number
  /**
   * 集群状态描述
   */
  StatusDesc?: string
  /**
   * 创建时间
   */
  CreateTime?: string
  /**
   * 到期时间
   */
  PeriodEndTime?: string
  /**
   * 主机数
   */
  HostNum?: number
  /**
   * DB实例数
   */
  DbNum?: number
  /**
   * 分配策略, 0:紧凑, 1:均匀
   */
  AssignStrategy?: number
  /**
   * 总主机CPU(单位:核数)
   */
  CpuSpec?: number
  /**
   * 总已分配CPU(单位:核数)
   */
  CpuAssigned?: number
  /**
   * 总可分配CPU(单位:核数)
   */
  CpuAssignable?: number
  /**
   * 总主机内存(单位:GB)
   */
  MemorySpec?: number
  /**
   * 总已分配内存(单位:GB)
   */
  MemoryAssigned?: number
  /**
   * 总可分配内存(单位:GB)
   */
  MemoryAssignable?: number
  /**
   * 总机器磁盘(单位:GB)
   */
  DiskSpec?: number
  /**
   * 总已分配磁盘(单位:GB)
   */
  DiskAssigned?: number
  /**
   * 总可分配磁盘(单位:GB)
   */
  DiskAssignable?: number
  /**
   * 可用区
   */
  Zone?: string
  /**
   * 金融围笼ID
   */
  FenceId?: string
  /**
   * 所属集群ID(默认集群为空)
   */
  ClusterId?: string
  /**
   * 实例标签
   */
  ResourceTags?: Array<ResourceTag>
  /**
   * CPU类型：Intel/AMD,Hygon
   */
  CpuType?: string
  /**
   * 可用区列表
   */
  Zones?: Array<string>
}

/**
 * 集群设备组信息。
 */
export interface InstanceDeviceInfo {
  /**
   * 集群ID
   */
  InstanceId?: string
  /**
   * 读写设备组
   */
  ReadWriteDevice?: Array<DeviceInfo>
  /**
   * 只读设备组
   */
  ReadOnlyDevice?: Array<DeviceInfo>
  /**
   * 空闲设备组
   */
  FreeDevice?: Array<DeviceInfo>
}

/**
 * DescribeDBCustomClusterKubeconfig请求参数结构体
 */
export interface DescribeDBCustomClusterKubeconfigRequest {
  /**
   * <p>集群ID</p><p>入参限制：必须为当前节点拥有的DB Custom 集群</p>
   */
  ClusterId: string
}

/**
 * RemoveNodesFromDBCustomCluster请求参数结构体
 */
export interface RemoveNodesFromDBCustomClusterRequest {
  /**
   * <p>DB Custom 集群ID</p>
   */
  ClusterId: string
  /**
   * <p>要下架的 DB Custom 节点ID列表</p>
   */
  NodeIds: Array<string>
  /**
   * <p>节点的登录参数</p>
   */
  LoginSettings?: LoginSettings
}

/**
 * DescribeDBCustomClusters返回参数结构体
 */
export interface DescribeDBCustomClustersResponse {
  /**
   * <p>总集群数量</p>
   */
  TotalCount?: number
  /**
   * <p>集群列表信息</p>
   */
  ClusterSet?: Array<DBCustomCluster>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CheckRoleAuthorized返回参数结构体
 */
export interface CheckRoleAuthorizedResponse {
  /**
   * <p>角色权限状态</p><p>枚举值：</p><ul><li>AUTHORIZED： 已经创建授权</li><li>NEED_GRANT： 未授权</li><li>ERROR： 报错</li></ul>
   */
  Status?: string
  /**
   * <p>出错的错误信息</p>
   */
  Message?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyDBCustomNodeTags请求参数结构体
 */
export interface ModifyDBCustomNodeTagsRequest {
  /**
   * <p>DB Custom 节点ID</p><p>参数格式：dbcn-0zan5xxk</p>
   */
  NodeId: string
  /**
   * <p>为节点绑定的标签信息</p><p>入参限制：参考标签侧的限制</p>
   */
  AddTags?: Array<Tag>
  /**
   * <p>需要删除的标签Key</p>
   */
  DeleteTagKeys?: Array<string>
}

/**
 * DescribeDBCustomClusterDetail请求参数结构体
 */
export interface DescribeDBCustomClusterDetailRequest {
  /**
   * <p>DB Custom 集群ID</p><p>入参限制：必须为此账号拥有的DB Custom集群</p>
   */
  ClusterId: string
}

/**
 * RenewDBCustomNode请求参数结构体
 */
export interface RenewDBCustomNodeRequest {
  /**
   * <p>节点ID</p>
   */
  NodeId: string
  /**
   * <p>续费周期</p><p>取值范围：[1, 36]</p><p>单位：月</p><p>默认值：1</p>
   */
  Period?: number
  /**
   * <p>是否开启自动续费</p><p>枚举值：</p><ul><li>0： 不自动续费</li><li>1： 自动续费</li></ul><p>默认值：1</p>
   */
  AutoRenew?: number
  /**
   * <p>是否自动使用代金券</p>
   */
  AutoVoucher?: number
  /**
   * <p>代金券ID</p>
   */
  VoucherIds?: Array<string>
}

/**
 * 描述键值对过滤器，用于条件过滤查询。
 */
export interface Filter {
  /**
   * <p>筛选条件</p>
   */
  Name: string
  /**
   * <p>过滤字段对应的参数值</p>
   */
  Values: Array<string>
}

/**
 * IsolateDBCustomNode返回参数结构体
 */
export interface IsolateDBCustomNodeResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DB Custom 集群内节点配置信息。
 */
export interface DBCustomClusterNodeConfig {
  /**
   * <p>节点ID</p>
   */
  NodeId?: string
  /**
   * <p>节点的标签信息</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Labels?: Array<Label>
  /**
   * <p>节点的污点信息</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Taints?: Array<Taint>
}

/**
 * 资源信息。
 */
export interface MetaResource {
  /**
   * <p>CPU核心</p><p>单位：核</p>
   */
  Cpu?: number
  /**
   * <p>内存</p><p>单位：GiB</p>
   */
  Memory?: number
  /**
   * <p>POD数量</p><p>单位：个</p>
   */
  Pods?: number
}

/**
 * DB Custom 节点信息。
 */
export interface DBCustomNode {
  /**
   * <p>节点ID</p>
   */
  NodeId?: string
  /**
   * <p>节点名称</p>
   */
  NodeName?: string
  /**
   * <p>访问此节点的SSH Endpoint，格式为IP:Port</p>
   */
  SSHEndpoint?: string
  /**
   * <p>节点的内网通信IP地址</p>
   */
  LanIP?: string
  /**
   * <p>节点所属的集群ID</p>
   */
  ClusterId?: string
  /**
   * <p>节点所属的可用区</p>
   */
  Zone?: string
  /**
   * <p>节点类型</p><p>枚举值：</p><ul><li>DB.AT5.32XLARGE512： 高IO型服务器：128核心512GB内存，8*7180GB本地NvME SSDB。</li><li>DB.AT5.64XLARGE1152： 高IO型服务器：256核心1152GB内存，12*7180GB本地NvME SSDB。</li><li>DB.AT5.128XLARGE2304： 高IO型服务器：512核心2304GB内存，24*7180GB本地NvME SSDB。</li><li>DB.AT5.16XLARGE256： 高IO型服务器：64核心256GB内存，4*7180GB本地NvME SSDB。</li><li>DB.AT5.8XLARGE128： 高IO型服务器：32核心128GB内存，2*7180GB本地NvME SSDB。</li></ul>
   */
  NodeType?: string
  /**
   * <p>节点CPU大小</p><p>单位：核</p>
   */
  CPU?: number
  /**
   * <p>节点内存</p><p>单位：GiB</p>
   */
  Memory?: number
  /**
   * <p>系统盘信息</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  SystemDisk?: SystemDisk
  /**
   * <p>数据盘信息</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  DataDisks?: Array<DataDisk>
  /**
   * <p>节点的操作系统名称</p>
   */
  OsName?: string
  /**
   * <p>节点的操作系统镜像ID</p>
   */
  ImageId?: string
  /**
   * <p>节点SSH Endpoint 所属的VPC ID</p>
   */
  VpcId?: string
  /**
   * <p>节点SSH Endpoint 所属的VPC 子网ID</p>
   */
  SubnetId?: string
  /**
   * <p>节点状态</p><p>枚举值：</p><ul><li>Creating： 创建中</li><li>Running： 运行中</li><li>Isolating： 隔离中</li><li>Isolated： 已隔离</li><li>Activating： 解除隔离中</li><li>Destroying： 销毁中</li></ul>
   */
  Status?: string
  /**
   * <p>付费类型</p><p>枚举值：</p><ul><li>PREPAID： 包年包月</li></ul>
   */
  ChargeType?: string
  /**
   * <p>节点到期时间</p>
   */
  ExpireTime?: string
  /**
   * <p>节点创建时间</p>
   */
  CreatedTime?: string
  /**
   * <p>节点隔离时间</p>
   */
  IsolatedTime?: string
  /**
   * <p>节点标签信息</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Tags?: Array<Tag>
  /**
   * <p>节点是否自动续费标记</p><p>枚举值：</p><ul><li>1： 自动续费</li><li>2： 不自动续费</li></ul>
   */
  AutoRenew?: number
  /**
   * <p>交换机ID（已加密）</p>
   */
  SwitchId?: string
  /**
   * <p>机架ID（已加密）</p>
   */
  RackId?: string
  /**
   * <p>底层物理机IP（已加密）</p>
   */
  HostIp?: string
  /**
   * <p>网络模式</p><p>枚举值：</p><ul><li>privatelink： 四层 SSH 服务联通模式</li><li>cross_tenant_eni：  三层双网卡访问方式</li></ul>
   */
  NetworkMode?: string
  /**
   * <p>当选择NetworkModeCrossTenantENI模式时，节点的访问IP地址</p>
   */
  EniIP?: string
}

/**
 * DB Custom 集群节点信息。
 */
export interface DBCustomClusterNode {
  /**
   * <p>节点ID</p>
   */
  NodeId?: string
  /**
   * <p>节点名称</p>
   */
  NodeName?: string
  /**
   * <p>节点内网IP地址</p>
   */
  LanIP?: string
  /**
   * <p>节点SSH 访问的Endpoint。格式为IP:Port.</p>
   */
  SSHEndpoint?: string
  /**
   * <p>节点在集群中的实例状态</p>
   */
  Status?: string
  /**
   * <p>节点所属的地域</p>
   */
  Zone?: string
  /**
   * <p>节点类型</p><p>枚举值：</p><ul><li>DB.AT5.32XLARGE512： 高IO型服务器：128核心512GB内存，8*7180GB本地NvME SSDB。</li><li>DB.AT5.64XLARGE1152： 高IO型服务器：256核心1152GB内存，12*7180GB本地NvME SSDB。</li><li>DB.AT5.128XLARGE2304： 高IO型服务器：512核心2304GB内存，24*7180GB本地NvME SSDB。</li><li>DB.AT5.16XLARGE256： 高IO型服务器：64核心256GB内存，4*7180GB本地NvME SSDB。</li><li>DB.AT5.8XLARGE128： 高IO型服务器：32核心128GB内存，2*7180GB本地NvME SSDB。</li></ul>
   */
  NodeType?: string
  /**
   * <p>网络模式</p><p>枚举值：</p><ul><li>privatelink： 四层网络联通，放通SSH 通路</li><li>cross_tenant_eni： 三层网络联通，双网卡模式</li></ul>
注意：此字段可能返回 null，表示取不到有效值。
   */
  NetworkMode?: string
  /**
   * <p>当选择网络模式为三层网络联通模式时，此处的IP地址则为用户可访问的地址。</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  EniIP?: string
}

/**
 * DescribeDBCustomNodeSecurityGroups返回参数结构体
 */
export interface DescribeDBCustomNodeSecurityGroupsResponse {
  /**
   * <p>与节点绑定的安全组id，数组格式，根据内部安全组ID的顺序来确认优先级。</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Groups?: Array<SecurityGroup>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DestroyDBCustomNode返回参数结构体
 */
export interface DestroyDBCustomNodeResponse {
  /**
   * <p>任务ID</p>
   */
  TaskId?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDBCustomTaskStatus请求参数结构体
 */
export interface DescribeDBCustomTaskStatusRequest {
  /**
   * <p>DB Custom 任务ID</p>
   */
  TaskId: number
}

/**
 * DescribeInstances请求参数结构体
 */
export interface DescribeInstancesRequest {
  /**
   * 集群类型: 0 一主一备, 1 一主两备...N-1 一主N备
   */
  InstanceTypes?: Array<number | bigint>
  /**
   * 产品ID:  0 MYSQL，1 TDSQL
   */
  ProductIds?: Array<number | bigint>
  /**
   * 集群uuid: 如 dbdc-q810131s
   */
  InstanceIds?: Array<string>
  /**
   * 是否按金融围笼标志搜索
   */
  FenceFlag?: boolean
  /**
   * 按实例名字模糊匹配
   */
  InstanceName?: string
  /**
   * 每页数目, 整型
   */
  PageSize?: number
  /**
   * 页码, 整型
   */
  PageNumber?: number
  /**
   * 排序字段，枚举：createtime,groupname
   */
  OrderBy?: string
  /**
   * 排序方式: asc升序, desc降序
   */
  OrderByType?: string
  /**
   * 集群状态: -2 已删除, -1 已隔离, 0 创建中, 1 运行中, 2 扩容中, 3 删除中
   */
  InstanceStatus?: number
}

/**
 * 连通 DB Custom 集群 API Server 的网络配置。
 */
export interface ApiServerNetwork {
  /**
   * <p>API Server的访问私有网络ID</p>
   */
  VpcId: string
  /**
   * <p>API Server的访问私有网络子网ID</p>
   */
  SubnetId: string
}

/**
 * 地域信息。
 */
export interface RegionInfo {
  /**
   * <p>地域</p>
   */
  Region?: string
  /**
   * <p>售卖状态</p><p>枚举值：</p><ul><li>SELL： 正常售卖</li><li>SOLD_OUT： 售罄</li></ul>
   */
  RegionState?: string
}

/**
 * DescribeDBCustomZones返回参数结构体
 */
export interface DescribeDBCustomZonesResponse {
  /**
   * <p>查询支持售卖的地域对应的可用区，State字段值如为SELL则代表正常售卖。</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  ZoneSet?: Array<ZoneInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDBInstances返回参数结构体
 */
export interface DescribeDBInstancesResponse {
  /**
   * 独享集群内的DB实例列表
   */
  Instances?: Array<DBInstanceDetail>
  /**
   * 独享集群内的DB实例总数
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateDBCustomNodes返回参数结构体
 */
export interface CreateDBCustomNodesResponse {
  /**
   * <p>节点ID列表</p>
   */
  NodeIds?: Array<string>
  /**
   * <p>创建节点的任务ID</p>
   */
  TaskId?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDBCustomNodeSecurityGroups请求参数结构体
 */
export interface DescribeDBCustomNodeSecurityGroupsRequest {
  /**
   * <p>节点id</p>
   */
  NodeId: string
}

/**
 * DescribeDBCustomClusterNodes返回参数结构体
 */
export interface DescribeDBCustomClusterNodesResponse {
  /**
   * <p>集群下总的节点数量</p>
   */
  TotalCount?: number
  /**
   * <p>分页后节点列表信息</p>
   */
  NodeSet?: Array<DBCustomClusterNode>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeInstanceDetail请求参数结构体
 */
export interface DescribeInstanceDetailRequest {
  /**
   * 独享集群实例Id
   */
  InstanceId: string
}

/**
 * ModifyDBCustomNodeAttributes请求参数结构体
 */
export interface ModifyDBCustomNodeAttributesRequest {
  /**
   * <p>节点ID</p><p>参数格式：dbcn-hq98qjym</p>
   */
  NodeId: string
  /**
   * <p>主机 HostName</p><p>入参限制：参数设置规则参见：<a href="https://cloud.tencent.com/document/api/1322/132929">创建 DB Custom 节点接口</a>的 HostName 参数说明。</p><p>注意：节点在没有加入到集群之前才支持修改主机 HostName。</p>
   */
  HostName?: string
  /**
   * <p>节点名称</p><p>入参限制：参数设置规则参见：<a href="https://cloud.tencent.com/document/api/1322/132929">创建 DB Custom 节点接口</a>的 NodeName 参数说明。</p>
   */
  NodeName?: string
  /**
   * <p>修改实例 HostName 是否自动重启实例，不传默认自动重启。</p><p>枚举值：</p><ul><li>true： 修改主机 HostName，并自动重启主机</li><li>false： 修改主机 HostName，不自动重启主机，需要手动重启使新主机 HostName 生效</li></ul><p>默认值：true</p>
   */
  AutoReboot?: boolean
}

/**
 * DescribeDBCustomClusterKubeconfig返回参数结构体
 */
export interface DescribeDBCustomClusterKubeconfigResponse {
  /**
   * <p>集群APIServer信息</p>
   */
  Kubeconfig?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 联通 DB Custom 集群中容器的网络配置。
 */
export interface ContainerNetwork {
  /**
   * <p>容器网络的虚拟网络ID</p>
   */
  VpcId: string
  /**
   * <p>容器网络的虚拟网络子网列表</p>
   */
  SubnetIds: Array<string>
}

/**
 * DescribeHostList请求参数结构体
 */
export interface DescribeHostListRequest {
  /**
   * 独享集群实例Id
   */
  InstanceId: string
  /**
   * 分页返回数量
   */
  Limit?: number
  /**
   * 分页偏移量
   */
  Offset?: number
  /**
   * 分配状态过滤，0-可分配，1-禁止分配
   */
  AssignStatus?: Array<number | bigint>
}

/**
 * DescribeDBCustomNodes请求参数结构体
 */
export interface DescribeDBCustomNodesRequest {
  /**
   * <p>按照一个或者多个 NodeId 查询。</p><p>入参限制：每次请求的数量上限为100</p>
   */
  NodeIds?: Array<string>
  /**
   * <p>查询筛选条件。支持的筛选条件包括：</p><ul><li>cluster-id：按 DB Custom 集群进行过滤。</li><li>node-name：按 DB Custom 节点名称进行过滤，精确匹配。</li><li>status：按 DB Custom 节点状态进行过滤。（可选值：Creating，Running，Isolating，Isolated，Activating（解除隔离中），Destroying）</li><li>zone：按 DB Custom 节点所在可用区进行过滤。</li></ul>
   */
  Filters?: Array<Filter>
  /**
   * <p>根据标签的 Key 和 Value 筛选 DB Custom 节点</p>
   */
  Tags?: Array<Tag>
  /**
   * <p>分页偏移量</p>
   */
  Offset?: number
  /**
   * <p>返回数量</p><p>取值范围：[1, 100]</p><p>默认值：20</p>
   */
  Limit?: number
}

/**
 * 集群扩展信息。
 */
export interface InstanceExpand {
  /**
   * 集群ID
   */
  InstanceId?: string
  /**
   * 集群名称
   */
  InstanceName?: string
  /**
   * 用户ID
   */
  AppId?: number
  /**
   * 地域
   */
  Region?: string
  /**
   * 可用区
   */
  Zone?: string
  /**
   * 集群类型： 0：一主一备，1：一主两备
   */
  InstanceType?: number
  /**
   * 集群状态: 0 集群创建中, 1 集群有效, 2 集群扩容中, 3 集群删除中, 4 集群缩容中 -1 集群已隔离 -2 集群已删除
   */
  InstanceStatus?: number
  /**
   * 创建时间
   */
  CreateTime?: string
  /**
   * 实例自动续费标识： 0正常续费 1自动续费 2到期不续费
   */
  AutoRenewFlag?: number
  /**
   * 机型
   */
  Machine?: string
  /**
   * 过期时间
   */
  PeriodEndTime?: string
  /**
   * 集群信息
   */
  InstanceDetail?: InstanceDetail
  /**
   * 计费侧的产品ID
   */
  Pid?: number
}

/**
 * DB Custom 集群信息。
 */
export interface DBCustomCluster {
  /**
   * <p>集群ID</p>
   */
  ClusterId?: string
  /**
   * <p>集群名称</p>
   */
  ClusterName?: string
  /**
   * <p>集群支持的地域</p>
   */
  Region?: string
  /**
   * <p>集群规模</p><p>默认值：L500</p>
   */
  ClusterLevel?: string
  /**
   * <p>DB Custom 集群状态</p><p>枚举值：</p><ul><li>Creating： 创建中</li><li>Running： 运行中</li><li>Destroying： 销毁中</li></ul>
   */
  ClusterStatus?: string
  /**
   * <p>集群版本号</p>
   */
  ClusterVersion?: string
  /**
   * <p>集群中的节点数量</p><p>单位：台</p>
   */
  ClusterNodeNum?: number
  /**
   * <p>集群描述</p>
   */
  ClusterDescription?: string
  /**
   * <p>创建时间</p>
   */
  CreatedTime?: string
  /**
   * <p>集群的标签信息</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Tags?: Array<Tag>
  /**
   * <p>是否启用集群删除保护</p><p>枚举值：</p><ul><li>true： 启用</li><li>false： 不启用</li></ul>
   */
  DeletionProtection?: boolean
}

/**
 * 设备信息
 */
export interface DeviceInfo {
  /**
   * 设备ID
   */
  DeviceId?: number
  /**
   * 设备No
   */
  DeviceNo?: string
  /**
   * 设备类型
   */
  DevClass?: string
  /**
   * 设备总内存，单位GB
   */
  MaxMemory?: number
  /**
   * 设备总磁盘，单位GB
   */
  MaxDisk?: number
  /**
   * 设备剩余内存，单位GB
   */
  RestMemory?: number
  /**
   * 设备剩余磁盘，单位GB
   */
  RestDisk?: number
  /**
   * 设备机器个数
   */
  RawDeviceNum?: number
  /**
   * 数据库实例个数
   */
  InstanceNum?: number
}

/**
 * ModifyDBCustomNodeSecurityGroups请求参数结构体
 */
export interface ModifyDBCustomNodeSecurityGroupsRequest {
  /**
   * <p>节点id</p>
   */
  NodeId: string
  /**
   * <p>安全组id，数组格式，根据内部安全组ID的顺序来确认优先级。</p>
   */
  SecurityGroupIds: Array<string>
}

/**
 * 安全组规则
 */
export interface PolicyRule {
  /**
   * <p>规则动作，</p><p>枚举值：</p><ul><li>ACCEPT： 允许</li><li>DROP： 拒绝</li></ul>
   */
  Action?: string
  /**
   * <p>来源/目标 IP 或 CIDR，如 0.0.0.0/0</p>
   */
  CidrIp?: string
  /**
   * <p>端口范围，如 80、8080-8090、ALL</p>
   */
  PortRange?: string
  /**
   * <p>协议类型，如 tcp、udp、icmp、ALL</p>
   */
  IpProtocol?: string
  /**
   * <p>协议端口模板 ID</p>
   */
  ServiceModule?: string
  /**
   * <p>IP 地址模板 ID</p>
   */
  AddressModule?: string
  /**
   * <p>安全组 ID</p>
   */
  Id?: string
  /**
   * <p>规则备注描述</p>
   */
  Desc?: string
}

/**
 * 集群容量信息。
 */
export interface InstanceDetail {
  /**
   * 集群状态，0：运行中，1：不在运行
   */
  Status?: number
  /**
   * 读写集群剩余内存容量，单位GB
   */
  ReadWriteTotalLeaveMemory?: number
  /**
   * 读写集群剩余磁盘容量，单位GB
   */
  ReadWriteTotalLeaveDisk?: number
  /**
   * 读写集群总内存容量，单位GB
   */
  ReadWriteTotalMemory?: number
  /**
   * 读写集群总磁盘容量，单位GB
   */
  ReadWriteTotalDisk?: number
  /**
   * 只读集群剩余内存容量，单位GB
   */
  ReadOnlyTotalLeaveMemory?: number
  /**
   * 只读集群剩余磁盘容量，单位GB
   */
  ReadOnlyTotalLeaveDisk?: number
  /**
   * 只读集群总内存容量，单位GB
   */
  ReadOnlyTotalMemory?: number
  /**
   * 只读集群总磁盘容量，单位GB
   */
  ReadOnlyTotalDisk?: number
  /**
   * 集群设备详情
   */
  InstanceDeviceInfos?: Array<InstanceDeviceInfo>
}
