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
 * CreateFileSystem返回参数结构体
 */
export interface CreateFileSystemResponse {
  /**
   * 创建成功返回的文件系统ID：
   */
  FileSystemId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateFileset请求参数结构体
 */
export interface CreateFilesetRequest {
  /**
   * 文件系统id
   */
  FileSystemId: string
  /**
   * Fileset名称
   */
  FsetName: string
  /**
   * Fileset目录
   */
  FsetDir: string
  /**
   * Fileset容量配额（需带单位G）
   */
  QuotaSizeLimit?: string
  /**
   * Fileset文件数配额
   */
  QuotaFilesLimit?: string
  /**
   * Fileset文件删除操作审计
   */
  AuditState?: string
}

/**
 * DescribeFilesets请求参数结构体
 */
export interface DescribeFilesetsRequest {
  /**
   * 文件系统id
   */
  FileSystemId: string
  /**
   * FsetId列表
   */
  FilesetIds?: Array<string>
  /**
   * FsetDir列表
   */
  FilesetDirs?: Array<string>
}

/**
 * 客户端节点属性
 */
export interface ClientNodeAttribute {
  /**
   * 客户端节点IP
   */
  ClientNodeIp?: string
  /**
   * 客户端节点服务状态, Active(运行中), Adding(添加中), Destroying(销毁中), Down(已停止)
   */
  Status?: string
  /**
   * 客户端节点类型，extend(扩展节点)，manager(管理节点)
   */
  ClientType?: string
  /**
   * 节点所属vpcid
   */
  VpcId?: string
  /**
   * 节点所属子网id
   */
  SubnetId?: string
  /**
   * cvmId
   */
  InstanceId?: string
  /**
   * 自定义挂载点
   */
  MountPoint?: string
}

/**
 * 数据预热任务参数
 */
export interface DistributedLoadAttrs {
  /**
   * 预热类型，枚举值 LoadByPath｜LoadByList
   */
  LoadType: string
  /**
   * 是否跳过相同文件，默认为 true
   */
  SkipIfExists?: boolean
  /**
   * 预热路径，入参单条挂载路径。入参数LoadType为LoadByPath，该参数不应为空
   */
  LoadByPath?: string
  /**
   * 通过文件列表批量预热，入参为 cos://bucket-appid/ 开头的 COS 路径，且仅支持 txt 格式文件，长度不能超过255个字符。入参数LoadType为LoadByList，该参数不应为空
   */
  LoadByList?: string
  /**
   * 副本数配置，枚举值，可选值 SingleReplica（单副本，默认）｜MaxReplica（最大副本）
   */
  Replica?: string
  /**
   * 同步执行元数据预热，并基于预热后的元数据执行 DistributedLoad。默认为 false
   */
  MetadataSync?: boolean
}

/**
 * 预热任务参数
 */
export interface LoadTaskAttrs {
  /**
   * 预热任务 ID
   */
  TaskId?: string
  /**
   * 预热任务类型，枚举值，MetadataLoad｜DistributedLoad
   */
  TaskType?: string
  /**
   * 任务描述，支持中文
   */
  Description?: string
  /**
   * 任务优先级，数值越高代表优先级越高，边界值 1-9999，默认值为 1
   */
  Priority?: number
  /**
   * 元数据预热任务参数，用于仅预热元数据时入参。入参数TaskType为MetadataLoad时，该参数不应为空。
   */
  MetadataLoadAttrs?: MetadataLoadAttrs
  /**
   * 数据预热任务参数。入参数TaskType为DistributedLoad时，该参数不应为空。
   */
  DistributedLoadAttrs?: DistributedLoadAttrs
  /**
   * 将任务执行报告写入 COS 的路径，如果不需要报告则入参空
   */
  ReportPath?: string
  /**
   * 枚举，Completed，Running，Waiting，Cancelled
   */
  State?: string
  /**
   * 任务执行信息，打印预热文件成功个数，失败个数，预热耗时信息
   */
  TaskMessage?: string
  /**
   * 预热任务创建时间
   */
  CreateTime?: string
  /**
   * 预热任务变更时间
   */
  ModifyTime?: string
  /**
   * 任务提交账号，子账号或服务角色 ID
   */
  Requester?: string
}

/**
 * UpdateLoadTaskPriority返回参数结构体
 */
export interface UpdateLoadTaskPriorityResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeClusterRoleToken请求参数结构体
 */
export interface DescribeClusterRoleTokenRequest {
  /**
   * 集群ID
   */
  ClusterId: string
  /**
   * 角色名
   */
  RoleName: string
}

/**
 * DescribeFileSystems返回参数结构体
 */
export interface DescribeFileSystemsResponse {
  /**
   * 文件系统列表
   */
  FSAttributeList?: Array<FSAttribute>
  /**
   * 总共的文件系统数量
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeLoadTask返回参数结构体
 */
export interface DescribeLoadTaskResponse {
  /**
   * 预热任务参数
   */
  LoadTaskAttrs?: LoadTaskAttrs
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeFilesetGeneralConfig返回参数结构体
 */
export interface DescribeFilesetGeneralConfigResponse {
  /**
   * 配额对root用户生效
   */
  EnforceQuotaOnRoot?: string
  /**
   * 配置状态
   */
  Status?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DetachFileSystemBucket返回参数结构体
 */
export interface DetachFileSystemBucketResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteFileset请求参数结构体
 */
export interface DeleteFilesetRequest {
  /**
   * 文件系统id
   */
  FileSystemId: string
  /**
   * Fileset id
   */
  FsetId: string
}

/**
 * 文件系统属性
 */
export interface FSAttribute {
  /**
   * 文件系统类型, 可填goosefs和goosefsx
   */
  Type?: string
  /**
   * 文件系统ID
   */
  FileSystemId?: string
  /**
   * 创建时间
   */
  CreateTime?: string
  /**
   * GooseFSx文件系统属性
   */
  GooseFSxAttribute?: GooseFSxAttribute
  /**
   * 文件系统状态 ACTIVE(运行中), CREATING(创建中), DESTROYING(销毁中), FAIL(创建失败),EXPANDING(扩容中),PROBING(容灾中)
   */
  Status?: string
  /**
   * 文件系统名
   */
  Name?: string
  /**
   * 文件系统备注描述
   */
  Description?: string
  /**
   * vpc ID
   */
  VpcId?: string
  /**
   * 子网ID
   */
  SubnetId?: string
  /**
   * 子网所在的可用区
   */
  Zone?: string
  /**
   * Tag数组
   */
  Tag?: Array<Tag>
  /**
   * 更新属性时间
   */
  ModifyTime?: string
  /**
   * 文件系统付费信息
   */
  ChargeAttribute?: ChargeAttribute
}

/**
 * 元数据预热参数
 */
export interface MetadataLoadAttrs {
  /**
   * 预热类型，枚举值 LoadByPath｜LoadByList
   */
  LoadType: string
  /**
   * 是否跳过相同文件，默认为 true
   */
  SkipIfExists?: boolean
  /**
   * 预热路径，入参单条挂载路径，长度不能超过255个字符。入参数LoadType为LoadByPath，该参数不应为空
   */
  LoadByPath?: string
  /**
   * 通过文件列表批量预热，入参为 cos://bucket-appid/ 开头的 COS 路径，且仅支持 txt 格式文件，长度不能超过255个字符。入参数LoadType为LoadByList，该参数不应为空
   */
  LoadByList?: string
}

/**
 * DescribeClusterRoleToken返回参数结构体
 */
export interface DescribeClusterRoleTokenResponse {
  /**
   * 角色凭证
   */
  RoleTokens?: Array<RoleToken>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * BatchDeleteClientNodes返回参数结构体
 */
export interface BatchDeleteClientNodesResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateLoadTask返回参数结构体
 */
export interface CreateLoadTaskResponse {
  /**
   * 预热任务 ID
   */
  TaskId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * QueryCrossVpcSubnetSupportForClientNode请求参数结构体
 */
export interface QueryCrossVpcSubnetSupportForClientNodeRequest {
  /**
   * 文件系统ID
   */
  FileSystemId: string
}

/**
 * 付费信息详情
 */
export interface ChargeAttribute {
  /**
   * 到期时间
   */
  CurDeadline?: string
  /**
   * 付费方式
   */
  PayMode?: string
  /**
   * 自动付费标识：0:默认未设置 1:自动续费 2 不自动续费
   */
  AutoRenewFlag?: number
  /**
   * 资源ID
   */
  ResourceId?: string
}

/**
 * DeleteCrossVpcSubnetSupportForClientNode请求参数结构体
 */
export interface DeleteCrossVpcSubnetSupportForClientNodeRequest {
  /**
   * 文件系统ID
   */
  FileSystemId: string
  /**
   * 子网信息
   */
  SubnetInfo: SubnetInfo
}

/**
 * AttachFileSystemBucket请求参数结构体
 */
export interface AttachFileSystemBucketRequest {
  /**
   * 无
   */
  FileSystemId: string
  /**
   * 关联新Bucket
   */
  Bucket: MappedBucket
}

/**
 * vpc子网信息
 */
export interface SubnetInfo {
  /**
   * vpc id
   */
  VpcId: string
  /**
   * 子网ID
   */
  SubnetId?: string
  /**
   * 应用的集群；可以是集群id,也可以是All
   */
  UsedCluster?: string
  /**
   * cidr，只有当IsDirectConnect为true时才生效
   */
  CIDR?: string
  /**
   * 是否为专线接入场景
   */
  IsDirectConnect?: boolean
}

/**
 * DeleteFileSystem请求参数结构体
 */
export interface DeleteFileSystemRequest {
  /**
   * 文件系统ID
   */
  FileSystemId: string
}

/**
 * CancelLoadTask返回参数结构体
 */
export interface CancelLoadTaskResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 创建预热任务
 */
export interface LoadTaskCreationAttrs {
  /**
   * 预热任务类型，枚举值，MetadataLoad｜DistributedLoad。
   */
  TaskType: string
  /**
   * 任务优先级，数值越高代表优先级越高，边界值 1-9999，默认值为 1
   */
  Priority?: number
  /**
   * 任务描述，支持中文
   */
  Description?: string
  /**
   * 元数据预热任务参数，用于仅预热元数据时入参。入参数TaskType为MetadataLoad时，该参数不应为空。
   */
  MetadataLoadAttrs?: MetadataLoadAttrs
  /**
   * 数据预热任务参数。入参数TaskType为DistributedLoad时，该参数不应为空。
   */
  DistributedLoadAttrs?: DistributedLoadAttrs
  /**
   * 将任务执行报告写入 COS 的路径，如果不需要报告则入参空
   */
  ReportPath?: string
}

/**
 * BatchAddClientNodes返回参数结构体
 */
export interface BatchAddClientNodesResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * GooseFSx创建时候的属性
 */
export interface GooseFSxBuildElement {
  /**
   * GooseFSx的型号
   */
  Model: string
  /**
   * 容量单位是GB, 例如4608(4.5TB)
   */
  Capacity: number
  /**
   * 要关联映射的bucket列表
   * @deprecated
   */
  MappedBucketList?: Array<MappedBucket>
}

/**
 * AttachFileSystemBucket返回参数结构体
 */
export interface AttachFileSystemBucketResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeFilesetGeneralConfig请求参数结构体
 */
export interface DescribeFilesetGeneralConfigRequest {
  /**
   * 文件系统id
   */
  FileSystemId: string
}

/**
 * UpdateLoadTaskPriority请求参数结构体
 */
export interface UpdateLoadTaskPriorityRequest {
  /**
   * 集群 ID
   */
  ClusterId: string
  /**
   * 预热任务 ID
   */
  TaskId: string
  /**
   * 任务优先级，数值越高代表优先级越高，边界值 1-9999，默认值为 1
   */
  Priority: number
}

/**
 * CreateFileSystem请求参数结构体
 */
export interface CreateFileSystemRequest {
  /**
   * 文件系统名
   */
  Name: string
  /**
   * 文件系统备注描述
   */
  Description: string
  /**
   * vpc网络ID
   */
  VpcId: string
  /**
   * 子网ID
   */
  SubnetId: string
  /**
   * 子网所在的可用区
   */
  Zone: string
  /**
   * 文件系统类型, 可填goosefs和goosefsx
   * @deprecated
   */
  Type?: string
  /**
   * 文件系统关联的tag
   */
  Tag?: Array<Tag>
  /**
   * GooseFSx构建时要传递的参数
   */
  GooseFSxBuildElements?: GooseFSxBuildElement
  /**
   * 客户端集群所属的安全组
   */
  SecurityGroupId?: string
  /**
   * 集群ssh通信端口，默认是22
   */
  ClusterPort?: number
}

/**
 * DescribeFilesets返回参数结构体
 */
export interface DescribeFilesetsResponse {
  /**
   * Fileset列表
   */
  FilesetList?: Array<FilesetInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * BuildClientNodeMountCommand请求参数结构体
 */
export interface BuildClientNodeMountCommandRequest {
  /**
   * 文件系统ID
   */
  FileSystemId: string
  /**
   * 自定义挂载目录的绝对路径, 如果未指定, 则会使用默认值, 格式/goosefsx/${fs_id}-proxy. 比如/goosefsx/x-c60-a2b3d4-proxy
   */
  CustomMountDir?: string
  /**
   * 客户端集群ID
   */
  ClusterId?: string
}

/**
 * DeleteFileSystem返回参数结构体
 */
export interface DeleteFileSystemResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ExpandCapacity请求参数结构体
 */
export interface ExpandCapacityRequest {
  /**
   * 文件系统ID
   */
  FileSystemId: string
  /**
   * 新增扩容的系统容量
   */
  ExpandedCapacity: number
  /**
   * 容量修改类型：add/sub
   */
  ModifyType?: string
}

/**
 * DetachFileSystemBucket请求参数结构体
 */
export interface DetachFileSystemBucketRequest {
  /**
   * 文件系统ID
   */
  FileSystemId: string
  /**
   * 要解绑的Bucket名
   */
  BucketName: string
}

/**
 * CancelLoadTask请求参数结构体
 */
export interface CancelLoadTaskRequest {
  /**
   * 集群 ID
   */
  ClusterId: string
  /**
   * 预热任务 ID
   */
  TaskId: string
}

/**
 * 查询Client Token
 */
export interface ClientToken {
  /**
   * 节点 IP
注意：此字段可能返回 null，表示取不到有效值。
   */
  NodeIp?: string
  /**
   * 挂载点
注意：此字段可能返回 null，表示取不到有效值。
   */
  LocalDirectory?: string
  /**
   * 可以访问的 GooseFS 目录
注意：此字段可能返回 null，表示取不到有效值。
   */
  GooseFSDirectory?: string
  /**
   * token
注意：此字段可能返回 null，表示取不到有效值。
   */
  Token?: string
}

/**
 * DescribeFileSystemBuckets请求参数结构体
 */
export interface DescribeFileSystemBucketsRequest {
  /**
   * 文件系统ID
   */
  FileSystemId: string
}

/**
 * UpdateFileset请求参数结构体
 */
export interface UpdateFilesetRequest {
  /**
   * 文件系统id
   */
  FileSystemId: string
  /**
   * Fileset id
   */
  FsetId: string
  /**
   * 容量配额限定值
   */
  QuotaSizeLimit?: string
  /**
   * 文件数配额限定值
   */
  QuotaFilesLimit?: string
  /**
   * Fileset文件删除操作审计
   */
  AuditState?: string
}

/**
 * ModifyDataRepositoryBandwidth返回参数结构体
 */
export interface ModifyDataRepositoryBandwidthResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * QueryDataRepositoryBandwidth返回参数结构体
 */
export interface QueryDataRepositoryBandwidthResponse {
  /**
   * 数据流动带宽, 单位MB/s
   */
  Bandwidth?: number
  /**
   * 带宽状态。1:待扩容;2:运行中;3:扩容中
   */
  BandwidthStatus?: number
  /**
   * 能设置的最小带宽, 单位MB/s
   */
  MinBandwidth?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * QueryDataRepositoryBandwidth请求参数结构体
 */
export interface QueryDataRepositoryBandwidthRequest {
  /**
   * 文件系统ID
   */
  FileSystemId: string
}

/**
 * DescribeLoadTask请求参数结构体
 */
export interface DescribeLoadTaskRequest {
  /**
   * 集群 ID
   */
  ClusterId: string
  /**
   * 预热任务 ID
   */
  TaskId: string
}

/**
 * 客户侧集群管理节点信息
 */
export interface ClientClusterManagerNodeInfo {
  /**
   * 客户端节点IP
   */
  NodeIp?: string
  /**
   * 节点Instance Id
   */
  NodeInstanceId?: string
  /**
   * 初始密码
   */
  InitialPassword?: string
  /**
   * 所属集群id
   */
  ClusterId?: string
}

/**
 * Fileset信息
 */
export interface FilesetInfo {
  /**
   * Fileset id
   */
  FsetId?: string
  /**
   * Fileset名称
   */
  FsetName?: string
  /**
   * Fileset目录
   */
  FsetDir?: string
  /**
   * Fileset容量配额限定值
   */
  QuotaSizeLimit?: string
  /**
   * 已使用容量配额
   */
  QuotaSizeUsed?: string
  /**
   * 容量配额使用占比
   */
  QuotaSizeUsedPercent?: string
  /**
   * Fileset文件数配额限定值
   */
  QuotaFilesLimit?: string
  /**
   * 已使用文件数配额
   */
  QuotaFilesUsed?: string
  /**
   * 文件数配额使用占比
   */
  QuotaFilesUsedPercent?: string
  /**
   * Fileset审计
   */
  AuditState?: string
  /**
   * 创建时间
   */
  CreateTime?: string
  /**
   * 修改时间
   */
  ModifyTime?: string
  /**
   * Fileset状态：creating 配置中 active 已生效 modify 修改中
   */
  Status?: string
}

/**
 * UpdateFileset返回参数结构体
 */
export interface UpdateFilesetResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 添加删除客户端节点列表
 */
export interface LinuxNodeAttribute {
  /**
   * cvmId
   */
  InstanceId?: string
  /**
   * 节点所属vpcid
   */
  VpcId?: string
  /**
   * 节点所属子网id
   */
  SubnetId?: string
  /**
   * linux客户端节点地址
   */
  LinuxClientNodeIp?: string
  /**
   * 自定义挂载点
   */
  MountPoint?: string
}

/**
 * BatchDeleteClientNodes请求参数结构体
 */
export interface BatchDeleteClientNodesRequest {
  /**
   * 文件系统id
   */
  FileSystemId: string
  /**
   * 删除的客户端节点列表
   */
  ClientNodes: Array<LinuxNodeAttribute>
  /**
   * 是否单集群，默认是false
   */
  SingleClusterFlag?: boolean
  /**
   * 客户端集群id
   */
  ClusterId?: string
}

/**
 * CreateFileset返回参数结构体
 */
export interface CreateFilesetResponse {
  /**
   * Fileset id
   */
  FsetId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * UpdateFilesetGeneralConfig返回参数结构体
 */
export interface UpdateFilesetGeneralConfigResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * QueryCrossVpcSubnetSupportForClientNode返回参数结构体
 */
export interface QueryCrossVpcSubnetSupportForClientNodeResponse {
  /**
   * 支持的子网信息集合
   */
  SubnetInfoCollection?: Array<SubnetInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeFileSystems请求参数结构体
 */
export interface DescribeFileSystemsRequest {
  /**
   * 偏移量
   */
  Offset: number
  /**
   * 每页的数量
   */
  Limit: number
}

/**
 * UpdateFilesetGeneralConfig请求参数结构体
 */
export interface UpdateFilesetGeneralConfigRequest {
  /**
   * 文件系统id
   */
  FileSystemId: string
  /**
   * 配额对root用户生效
   */
  EnforceQuotaOnRoot?: string
}

/**
 * DescribeClusterClientToken请求参数结构体
 */
export interface DescribeClusterClientTokenRequest {
  /**
   * 集群ID
   */
  ClusterId: string
}

/**
 * AddCrossVpcSubnetSupportForClientNode返回参数结构体
 */
export interface AddCrossVpcSubnetSupportForClientNodeResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateDataRepositoryTask返回参数结构体
 */
export interface CreateDataRepositoryTaskResponse {
  /**
   * 任务ID
   */
  TaskId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ExpandCapacity返回参数结构体
 */
export interface ExpandCapacityResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteCrossVpcSubnetSupportForClientNode返回参数结构体
 */
export interface DeleteCrossVpcSubnetSupportForClientNodeResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteFileset返回参数结构体
 */
export interface DeleteFilesetResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDataRepositoryTaskStatus返回参数结构体
 */
export interface DescribeDataRepositoryTaskStatusResponse {
  /**
   * 任务id
   */
  TaskId?: string
  /**
   * 任务状态 0(初始化中), 1(运行中), 2(已完成), 3(任务失败)
   */
  Status?: number
  /**
   * 已完成的文件数量
   */
  FinishedFileNumber?: number
  /**
   * 已完成的数据量
   */
  FinishedCapacity?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ListLoadTasks返回参数结构体
 */
export interface ListLoadTasksResponse {
  /**
   * 预热任务参数
   */
  LoadTaskList?: Array<LoadTaskAttrs>
  /**
   * 任务数总量
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ListLoadTasks请求参数结构体
 */
export interface ListLoadTasksRequest {
  /**
   * 集群 ID
   */
  ClusterId: string
  /**
   * 偏移量
   */
  Offset: number
  /**
   * 偏移量
   */
  Limit: number
  /**
   * 任务创建起始时间戳，默认为3天前：当前时间戳-86400*3
   */
  StartTimestamp?: number
  /**
   * 任务变更时间戳
   */
  EndTimestamp?: number
  /**
   * 筛选任务状态，枚举Waiting,Running,Canceled,Completed。默认返回所有任务
   */
  State?: string
  /**
   * 筛选优先级任务，默认返回所有任务
   */
  Priority?: number
}

/**
 * BatchAddClientNodes请求参数结构体
 */
export interface BatchAddClientNodesRequest {
  /**
   * 文件系统ID
   */
  FileSystemId: string
  /**
   * 添加客户端节点列表
   */
  ClientNodes: Array<LinuxNodeAttribute>
  /**
   * 是否单集群默认是false
   */
  SingleClusterFlag?: boolean
  /**
   * 客户端集群id
   */
  ClusterId?: string
}

/**
 * AddCrossVpcSubnetSupportForClientNode请求参数结构体
 */
export interface AddCrossVpcSubnetSupportForClientNodeRequest {
  /**
   * 文件系统ID
   */
  FileSystemId: string
  /**
   * 子网信息
   */
  SubnetInfo: SubnetInfo
}

/**
 * DescribeDataRepositoryTaskStatus请求参数结构体
 */
export interface DescribeDataRepositoryTaskStatusRequest {
  /**
   * task id
   */
  TaskId: string
  /**
   * file system id
   */
  FileSystemId: string
}

/**
 * 角色凭证
 */
export interface RoleToken {
  /**
   * 角色名
   */
  RoleName?: string
  /**
   * 用于goosefs client/sdk等
   */
  Token?: string
}

/**
 * DescribeFileSystemBuckets返回参数结构体
 */
export interface DescribeFileSystemBucketsResponse {
  /**
   * bucket列表
   */
  BucketList?: Array<MappedBucket>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * GooseFSx文件系统的属性
 */
export interface GooseFSxAttribute {
  /**
   * GooseFSx的型号
   */
  Model?: string
  /**
   * 容量单位是GB, 例如4608(4.5TB)
   */
  Capacity?: number
  /**
   * 要关联映射的bucket列表
   */
  MappedBucketList?: Array<MappedBucket>
  /**
   * 客户侧管理节点信息
   */
  ClientManagerNodeList?: Array<ClientClusterManagerNodeInfo>
}

/**
 * DescribeClientNodes请求参数结构体
 */
export interface DescribeClientNodesRequest {
  /**
   * 文件系统Id
   */
  FileSystemId: string
}

/**
 * 文件系统关联的标签
 */
export interface Tag {
  /**
   * 标签键
   */
  Key: string
  /**
   * 标签值
   */
  Value: string
}

/**
 * ModifyDataRepositoryBandwidth请求参数结构体
 */
export interface ModifyDataRepositoryBandwidthRequest {
  /**
   * 文件系统ID
   */
  FileSystemId: string
  /**
   * 带宽, 单位MB/S
   */
  Bandwidth: number
}

/**
 * CreateDataRepositoryTask请求参数结构体
 */
export interface CreateDataRepositoryTaskRequest {
  /**
   * 数据流通任务类型, FS_TO_COS(文件系统到COS Bucket),或者COS_TO_FS(COS Bucket到文件系统)
   */
  TaskType: string
  /**
   * COS存储桶名
   */
  Bucket: string
  /**
   * 文件系统ID
   */
  FileSystemId: string
  /**
   * 对于FS_TO_COS, TaskPath是Bucket映射目录的相对路径, 对于COS_TO_FS是COS上的路径。如果置为空, 则表示全部数据
   */
  TaskPath: string
  /**
   * 任务名称
   */
  TaskName: string
  /**
   * 数据流通方式 MSP_AFM 手动加载  RAW_AFM 按需加载
   */
  RepositoryType?: string
  /**
   * 文件列表下载地址，以http开头
   */
  TextLocation?: string
  /**
   * 是否开启自定义路径(暂时仅供预热使用)
   */
  EnableDataFlowSubPath?: boolean
  /**
   * 自定义路径(暂时仅供预热使用)
   */
  DataFlowSubPath?: string
}

/**
 * DescribeClientNodes返回参数结构体
 */
export interface DescribeClientNodesResponse {
  /**
   * 客户端节点数组
   */
  ClientNodes: Array<ClientNodeAttribute>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateLoadTask请求参数结构体
 */
export interface CreateLoadTaskRequest {
  /**
   * 集群 ID
   */
  ClusterId: string
  /**
   * 创建预热任务参数
   */
  LoadTaskCreationAttrs: LoadTaskCreationAttrs
}

/**
 * BuildClientNodeMountCommand返回参数结构体
 */
export interface BuildClientNodeMountCommandResponse {
  /**
   * 挂载命令
   */
  Command?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeClusterClientToken返回参数结构体
 */
export interface DescribeClusterClientTokenResponse {
  /**
   * 客户端凭证
   */
  ClientTokens?: Array<ClientToken>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 关联的对象Bucket, 并将其映射到文件系统某个路径上
 */
export interface MappedBucket {
  /**
   * 对象存储Bucket名
   */
  BucketName: string
  /**
   * 映射到的文件系统路径, 默认为/
   */
  FileSystemPath: string
  /**
   * 数据流动的自动策略, 包含加载与沉降。策略可以是多种的组合
按需加载(OnDemandImport)
自动加载元数据(AutoImportMeta)
自动加载数据(AutoImportData)
周期加载(PeriodImport)

周期沉降(PeriodExport)
立即沉降(ImmediateExport)
   */
  DataRepositoryTaskAutoStrategy?: Array<string>
  /**
   * 绑定bucket的数据流动策略ID
   */
  RuleId?: string
  /**
   * 规则备注与描述
   */
  RuleDescription?: string
  /**
   * 桶关联状态 0：关联中 1：关联完成
   */
  Status?: number
  /**
   * 是否使用全球加速域名
   */
  AccelerateFlag?: boolean
  /**
   * 桶所在的园区
   */
  BucketRegion?: string
  /**
   * 自定义Endpoint
   */
  Endpoint?: string
}
