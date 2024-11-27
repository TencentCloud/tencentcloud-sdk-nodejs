/**
 * CreateFileSystem返回参数结构体
 */
export interface CreateFileSystemResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * GooseFSx文件系统的属性
 */
export interface GooseFSxAttribute {
    /**
     * GooseFSx的型号
     */
    Model?: string;
    /**
     * 容量单位是GB, 例如4608(4.5TB)
     */
    Capacity?: number;
    /**
     * 要关联映射的bucket列表
     */
    MappedBucketList?: Array<MappedBucket>;
    /**
     * 客户侧管理节点信息
     */
    ClientManagerNodeList?: Array<ClientClusterManagerNodeInfo>;
}
/**
 * 客户端节点属性
 */
export interface ClientNodeAttribute {
    /**
     * 客户端节点IP
     */
    ClientNodeIp?: string;
    /**
     * 客户端节点服务状态, Active(运行中), Adding(添加中), Destroying(销毁中), Down(已停止)
     */
    Status?: string;
    /**
     * 客户端节点类型，extend(扩展节点)，manager(管理节点)
     */
    ClientType?: string;
    /**
     * 节点所属vpcid
     */
    VpcId?: string;
    /**
     * 节点所属子网id
     */
    SubnetId?: string;
    /**
     * cvmId
     */
    InstanceId?: string;
    /**
     * 自定义挂载点
  注意：此字段可能返回 null，表示取不到有效值。
     */
    MountPoint?: string;
}
/**
 * ModifyDataRepositoryBandwidth返回参数结构体
 */
export interface ModifyDataRepositoryBandwidthResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeClusterRoleToken请求参数结构体
 */
export interface DescribeClusterRoleTokenRequest {
    /**
     * 集群ID
     */
    ClusterId: string;
    /**
     * 角色名
     */
    RoleName: string;
}
/**
 * DescribeFileSystems返回参数结构体
 */
export interface DescribeFileSystemsResponse {
    /**
     * 文件系统列表
     */
    FSAttributeList: Array<FSAttribute>;
    /**
     * 总共的文件系统数量
     */
    TotalCount: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ExpandCapacity返回参数结构体
 */
export interface ExpandCapacityResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 文件系统属性
 */
export interface FSAttribute {
    /**
     * 文件系统类型, 可填goosefs和goosefsx
     */
    Type?: string;
    /**
     * 文件系统ID
     */
    FileSystemId?: string;
    /**
     * 创建时间
     */
    CreateTime?: string;
    /**
     * GooseFSx文件系统属性
  注意：此字段可能返回 null，表示取不到有效值。
     */
    GooseFSxAttribute?: GooseFSxAttribute;
    /**
     * 文件系统状态 ACTIVE(运行中), CREATING(创建中), DESTROYING(销毁中), FAIL(创建失败),EXPANDING(扩容中),PROBING(容灾中)
     */
    Status?: string;
    /**
     * 文件系统名
     */
    Name?: string;
    /**
     * 文件系统备注描述
     */
    Description?: string;
    /**
     * vpc ID
     */
    VpcId?: string;
    /**
     * 子网ID
     */
    SubnetId?: string;
    /**
     * 子网所在的可用区
     */
    Zone?: string;
    /**
     * Tag数组
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Tag?: Array<Tag>;
    /**
     * 更新属性时间
     */
    ModifyTime?: string;
    /**
     * 文件系统付费信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ChargeAttribute?: ChargeAttribute;
}
/**
 * DescribeClusterRoleToken返回参数结构体
 */
export interface DescribeClusterRoleTokenResponse {
    /**
     * 角色凭证
     */
    RoleTokens?: Array<RoleToken>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * BatchDeleteClientNodes返回参数结构体
 */
export interface BatchDeleteClientNodesResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * QueryCrossVpcSubnetSupportForClientNode请求参数结构体
 */
export interface QueryCrossVpcSubnetSupportForClientNodeRequest {
    /**
     * 文件系统ID
     */
    FileSystemId: string;
}
/**
 * 付费信息详情
 */
export interface ChargeAttribute {
    /**
     * 到期时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CurDeadline?: string;
    /**
     * 付费方式
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PayMode?: string;
    /**
     * 自动付费标识：0:默认未设置 1:自动续费 2 不自动续费
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AutoRenewFlag?: number;
    /**
     * 资源ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ResourceId?: string;
}
/**
 * DeleteCrossVpcSubnetSupportForClientNode请求参数结构体
 */
export interface DeleteCrossVpcSubnetSupportForClientNodeRequest {
    /**
     * 文件系统ID
     */
    FileSystemId: string;
    /**
     * 子网信息
     */
    SubnetInfo: SubnetInfo;
}
/**
 * AttachFileSystemBucket请求参数结构体
 */
export interface AttachFileSystemBucketRequest {
    /**
     * 无
     */
    FileSystemId: string;
    /**
     * 关联新Bucket
     */
    Bucket: MappedBucket;
}
/**
 * DeleteFileSystem请求参数结构体
 */
export interface DeleteFileSystemRequest {
    /**
     * 文件系统ID
     */
    FileSystemId: string;
}
/**
 * DescribeFileSystemBuckets请求参数结构体
 */
export interface DescribeFileSystemBucketsRequest {
    /**
     * 文件系统ID
     */
    FileSystemId: string;
}
/**
 * BatchAddClientNodes返回参数结构体
 */
export interface BatchAddClientNodesResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * AttachFileSystemBucket返回参数结构体
 */
export interface AttachFileSystemBucketResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * GooseFSx创建时候的属性
 */
export interface GooseFSxBuildElement {
    /**
     * GooseFSx的型号
     */
    Model: string;
    /**
     * 容量单位是GB, 例如4608(4.5TB)
     */
    Capacity: number;
    /**
     * 要关联映射的bucket列表
     */
    MappedBucketList: Array<MappedBucket>;
}
/**
 * CreateFileSystem请求参数结构体
 */
export interface CreateFileSystemRequest {
    /**
     * 文件系统类型, 可填goosefs和goosefsx
     */
    Type: string;
    /**
     * 文件系统名
     */
    Name: string;
    /**
     * 文件系统备注描述
     */
    Description: string;
    /**
     * vpc网络ID
     */
    VpcId: string;
    /**
     * 子网ID
     */
    SubnetId: string;
    /**
     * 子网所在的可用区
     */
    Zone: string;
    /**
     * 文件系统关联的tag
     */
    Tag?: Array<Tag>;
    /**
     * GooseFSx构建时要传递的参数
     */
    GooseFSxBuildElements?: GooseFSxBuildElement;
    /**
     * 客户端集群所属的安全组
     */
    SecurityGroupId?: string;
    /**
     * 集群ssh通信端口，默认是22
     */
    ClusterPort?: number;
}
/**
 * ClusterRole
 */
export interface ClusterRole {
    /**
     * 集群ID
     */
    ClusterId?: string;
    /**
     * 角色名
     */
    RoleName?: string;
    /**
     * 描述
     */
    Description?: string;
    /**
     * 目录列表
     */
    DirectoryList?: Array<string>;
}
/**
 * DeleteFileSystem返回参数结构体
 */
export interface DeleteFileSystemResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ExpandCapacity请求参数结构体
 */
export interface ExpandCapacityRequest {
    /**
     * 文件系统ID
     */
    FileSystemId: string;
    /**
     * 新增扩容的系统容量
     */
    ExpandedCapacity: number;
    /**
     * 容量修改类型：add/sub
     */
    ModifyType?: string;
}
/**
 * DetachFileSystemBucket请求参数结构体
 */
export interface DetachFileSystemBucketRequest {
    /**
     * 文件系统ID
     */
    FileSystemId: string;
    /**
     * 要解绑的Bucket名
     */
    BucketName: string;
}
/**
 * 查询Client Token
 */
export interface ClientToken {
    /**
     * 节点 IP
  注意：此字段可能返回 null，表示取不到有效值。
     */
    NodeIp?: string;
    /**
     * 挂载点
  注意：此字段可能返回 null，表示取不到有效值。
     */
    LocalDirectory?: string;
    /**
     * 可以访问的 GooseFS 目录
  注意：此字段可能返回 null，表示取不到有效值。
     */
    GooseFSDirectory?: string;
    /**
     * token
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Token?: string;
}
/**
 * QueryDataRepositoryBandwidth返回参数结构体
 */
export interface QueryDataRepositoryBandwidthResponse {
    /**
     * 数据流动带宽, 单位MB/s
     */
    Bandwidth?: number;
    /**
     * 带宽状态。1:待扩容;2:运行中;3:扩容中
     */
    BandwidthStatus?: number;
    /**
     * 能设置的最小带宽, 单位MB/s
     */
    MinBandwidth?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * QueryDataRepositoryBandwidth请求参数结构体
 */
export interface QueryDataRepositoryBandwidthRequest {
    /**
     * 文件系统ID
     */
    FileSystemId: string;
}
/**
 * 客户侧集群管理节点信息
 */
export interface ClientClusterManagerNodeInfo {
    /**
     * 客户端节点IP
     */
    NodeIp: string;
    /**
     * 节点Instance Id
     */
    NodeInstanceId: string;
    /**
     * 初始密码
     */
    InitialPassword: string;
}
/**
 * 添加删除客户端节点列表
 */
export interface LinuxNodeAttribute {
    /**
     * cvmId
     */
    InstanceId?: string;
    /**
     * 节点所属vpcid
     */
    VpcId?: string;
    /**
     * 节点所属子网id
     */
    SubnetId?: string;
    /**
     * linux客户端节点地址
     */
    LinuxClientNodeIp?: string;
    /**
     * 自定义挂载点
     */
    MountPoint?: string;
}
/**
 * BatchDeleteClientNodes请求参数结构体
 */
export interface BatchDeleteClientNodesRequest {
    /**
     * 文件系统id
     */
    FileSystemId: string;
    /**
     * 删除的客户端节点列表
     */
    ClientNodes: Array<LinuxNodeAttribute>;
    /**
     * 是否单集群，默认是false
     */
    SingleClusterFlag?: boolean;
}
/**
 * vpc子网信息
 */
export interface SubnetInfo {
    /**
     * vpc id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    VpcId: string;
    /**
     * 子网ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SubnetId?: string;
}
/**
 * QueryCrossVpcSubnetSupportForClientNode返回参数结构体
 */
export interface QueryCrossVpcSubnetSupportForClientNodeResponse {
    /**
     * 支持的子网信息集合
     */
    SubnetInfoCollection?: Array<SubnetInfo>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeFileSystems请求参数结构体
 */
export interface DescribeFileSystemsRequest {
    /**
     * 偏移量
     */
    Offset: number;
    /**
     * 每页的数量
     */
    Limit: number;
}
/**
 * DescribeClusterClientToken请求参数结构体
 */
export interface DescribeClusterClientTokenRequest {
    /**
     * 集群ID
     */
    ClusterId: string;
}
/**
 * AddCrossVpcSubnetSupportForClientNode返回参数结构体
 */
export interface AddCrossVpcSubnetSupportForClientNodeResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CreateDataRepositoryTask返回参数结构体
 */
export interface CreateDataRepositoryTaskResponse {
    /**
     * 任务ID
     */
    TaskId?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeClusterRoles返回参数结构体
 */
export interface DescribeClusterRolesResponse {
    /**
     * 集群角色
     */
    ClusterRoles?: Array<ClusterRole>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DeleteCrossVpcSubnetSupportForClientNode返回参数结构体
 */
export interface DeleteCrossVpcSubnetSupportForClientNodeResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeDataRepositoryTaskStatus返回参数结构体
 */
export interface DescribeDataRepositoryTaskStatusResponse {
    /**
     * 任务id
     */
    TaskId?: string;
    /**
     * 任务状态 0(初始化中), 1(运行中), 2(已完成), 3(任务失败)
     */
    Status?: number;
    /**
     * 已完成的文件数量
     */
    FinishedFileNumber?: number;
    /**
     * 已完成的数据量
     */
    FinishedCapacity?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * BatchAddClientNodes请求参数结构体
 */
export interface BatchAddClientNodesRequest {
    /**
     * 文件系统ID
     */
    FileSystemId: string;
    /**
     * 添加客户端节点列表
     */
    ClientNodes: Array<LinuxNodeAttribute>;
    /**
     * 是否单集群默认是false
     */
    SingleClusterFlag?: boolean;
}
/**
 * AddCrossVpcSubnetSupportForClientNode请求参数结构体
 */
export interface AddCrossVpcSubnetSupportForClientNodeRequest {
    /**
     * 文件系统ID
     */
    FileSystemId: string;
    /**
     * 子网信息
     */
    SubnetInfo: SubnetInfo;
}
/**
 * DetachFileSystemBucket返回参数结构体
 */
export interface DetachFileSystemBucketResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 角色凭证
 */
export interface RoleToken {
    /**
     * 角色名
     */
    RoleName?: string;
    /**
     * 用于goosefs client/sdk等
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Token?: string;
}
/**
 * DescribeFileSystemBuckets返回参数结构体
 */
export interface DescribeFileSystemBucketsResponse {
    /**
     * bucket列表
     */
    BucketList?: Array<MappedBucket>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeClientNodes请求参数结构体
 */
export interface DescribeClientNodesRequest {
    /**
     * 文件系统Id
     */
    FileSystemId: string;
}
/**
 * 文件系统关联的标签
 */
export interface Tag {
    /**
     * 标签键
     */
    Key: string;
    /**
     * 标签值
     */
    Value: string;
}
/**
 * ModifyDataRepositoryBandwidth请求参数结构体
 */
export interface ModifyDataRepositoryBandwidthRequest {
    /**
     * 文件系统ID
     */
    FileSystemId: string;
    /**
     * 带宽, 单位MB/S
     */
    Bandwidth: number;
}
/**
 * DescribeClusterRoles请求参数结构体
 */
export interface DescribeClusterRolesRequest {
    /**
     * 集群ID
     */
    ClusterId: string;
    /**
     * 角色名
     */
    RoleName?: string;
}
/**
 * CreateDataRepositoryTask请求参数结构体
 */
export interface CreateDataRepositoryTaskRequest {
    /**
     * 数据流通任务类型, FS_TO_COS(文件系统到COS Bucket),或者COS_TO_FS(COS Bucket到文件系统)
     */
    TaskType: string;
    /**
     * COS存储桶名
     */
    Bucket: string;
    /**
     * 文件系统ID
     */
    FileSystemId: string;
    /**
     * 对于FS_TO_COS, TaskPath是Bucket映射目录的相对路径, 对于COS_TO_FS是COS上的路径。如果置为空, 则表示全部数据
     */
    TaskPath: string;
    /**
     * 任务名称
     */
    TaskName: string;
    /**
     * 数据流通方式 MSP_AFM 手动加载  RAW_AFM 按需加载
     */
    RepositoryType?: string;
    /**
     * 文件列表下载地址，以http开头
     */
    TextLocation?: string;
}
/**
 * DescribeClientNodes返回参数结构体
 */
export interface DescribeClientNodesResponse {
    /**
     * 客户端节点数组
     */
    ClientNodes: Array<ClientNodeAttribute>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeDataRepositoryTaskStatus请求参数结构体
 */
export interface DescribeDataRepositoryTaskStatusRequest {
    /**
     * task id
     */
    TaskId: string;
    /**
     * file system id
     */
    FileSystemId: string;
}
/**
 * DescribeClusterClientToken返回参数结构体
 */
export interface DescribeClusterClientTokenResponse {
    /**
     * 客户端凭证
     */
    ClientTokens?: Array<ClientToken>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 关联的对象Bucket, 并将其映射到文件系统某个路径上
 */
export interface MappedBucket {
    /**
     * 对象存储Bucket名
     */
    BucketName: string;
    /**
     * 映射到的文件系统路径, 默认为/
     */
    FileSystemPath: string;
    /**
     * 数据流动的自动策略, 包含加载与沉降。策略可以是多种的组合
  按需加载(OnDemandImport)
  自动加载元数据(AutoImportMeta)
  自动加载数据(AutoImportData)
  周期加载(PeriodImport)
  
  周期沉降(PeriodExport)
  立即沉降(ImmediateExport)
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DataRepositoryTaskAutoStrategy?: Array<string>;
    /**
     * 绑定bucket的数据流动策略ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RuleId?: string;
    /**
     * 规则备注与描述
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RuleDescription?: string;
    /**
     * 桶关联状态 0：关联中 1：关联完成
     */
    Status?: number;
    /**
     * 是否使用全球加速域名
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AccelerateFlag?: boolean;
    /**
     * 桶所在的园区
  注意：此字段可能返回 null，表示取不到有效值。
     */
    BucketRegion?: string;
    /**
     * 自定义Endpoint
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Endpoint?: string;
}
