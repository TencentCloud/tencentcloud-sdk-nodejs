/**
 * CreateMigrationTask请求参数结构体
 */
export interface CreateMigrationTaskRequest {
    /**
      * 迁移任务名称
      */
    TaskName: string;
    /**
      * 迁移方式标志位，默认为0。0: 桶迁移；1: 清单迁移
      */
    MigrationType: number;
    /**
      * 迁移模式，默认为0。0: 全量迁移
      */
    MigrationMode: number;
    /**
      * 数据源账号的SecretId
      */
    SrcSecretId: string;
    /**
      * 数据源账号的SecretKey
      */
    SrcSecretKey: string;
    /**
      * 文件系统实例Id
      */
    FileSystemId: string;
    /**
      * 文件系统路径
      */
    FsPath: string;
    /**
      * 同名文件迁移时覆盖策略，默认为0。0: 最后修改时间优先；1: 全覆盖；2: 不覆盖
      */
    CoverType: number;
    /**
      * 数据源服务商。COS: 腾讯云COS，OSS: 阿里云OSS，OBS:华为云OBS
      */
    SrcService: string;
    /**
      * 数据源桶名称，名称和地址至少有一个
      */
    BucketName?: string;
    /**
      * 数据源桶地域
      */
    BucketRegion?: string;
    /**
      * 数据源桶地址，名称和地址至少有一个
      */
    BucketAddress?: string;
    /**
      * 清单地址，迁移方式为清单迁移时必填
      */
    ListAddress?: string;
    /**
      * 目标文件系统名称
      */
    FsName?: string;
    /**
      * 源桶路径，默认为/
      */
    BucketPath?: string;
}
/**
 * ScaleUpFileSystem返回参数结构体
 */
export interface ScaleUpFileSystemResponse {
    /**
      * 文件系统Id
      */
    FileSystemId?: string;
    /**
      * 扩容的目标容量
      */
    TargetCapacity?: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 文件系统快照统计
 */
export interface SnapshotStatistics {
    /**
      * 地域
      */
    Region: string;
    /**
      * 快照总个数
      */
    SnapshotNumber: number;
    /**
      * 快照总容量
      */
    SnapshotSize: number;
}
/**
 * DescribeCfsPGroups返回参数结构体
 */
export interface DescribeCfsPGroupsResponse {
    /**
      * 权限组信息列表
      */
    PGroupList: Array<PGroupInfo>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeMountTargets返回参数结构体
 */
export interface DescribeMountTargetsResponse {
    /**
      * 挂载点详情
      */
    MountTargets: Array<MountInfo>;
    /**
      * 挂载点数量
      */
    NumberOfMountTargets: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeSnapshotOperationLogs请求参数结构体
 */
export interface DescribeSnapshotOperationLogsRequest {
    /**
      * 文件系统快照ID
      */
    SnapshotId: string;
    /**
      * 起始时间
      */
    StartTime: string;
    /**
      * 结束时间
      */
    EndTime: string;
}
/**
 * CFS数据迁移任务信息
 */
export interface MigrationTaskInfo {
    /**
      * 迁移任务名称
      */
    TaskName: string;
    /**
      * 迁移任务id
      */
    TaskId: string;
    /**
      * 迁移方式标志位，默认为0。0: 桶迁移；1: 清单迁移
      */
    MigrationType: number;
    /**
      * 迁移模式，默认为0。0: 全量迁移
      */
    MigrationMode: number;
    /**
      * 数据源桶名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    BucketName: string;
    /**
      * 数据源桶地域
注意：此字段可能返回 null，表示取不到有效值。
      */
    BucketRegion: string;
    /**
      * 数据源桶地址
注意：此字段可能返回 null，表示取不到有效值。
      */
    BucketAddress: string;
    /**
      * 清单地址
注意：此字段可能返回 null，表示取不到有效值。
      */
    ListAddress: string;
    /**
      * 文件系统实例名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    FsName: string;
    /**
      * 文件系统实例Id
      */
    FileSystemId: string;
    /**
      * 文件系统路径
      */
    FsPath: string;
    /**
      * 同名文件迁移时覆盖策略，默认为0。0: 最后修改时间优先；1: 全覆盖；2: 不覆盖
      */
    CoverType: number;
    /**
      * 创建时间
      */
    CreateTime: number;
    /**
      * 完成/终止时间
注意：此字段可能返回 null，表示取不到有效值。
      */
    EndTime: number;
    /**
      * 迁移状态。0: 已完成；1: 进行中；2: 已终止
      */
    Status: number;
    /**
      * 文件数量
注意：此字段可能返回 null，表示取不到有效值。
      */
    FileTotalCount: number;
    /**
      * 已迁移文件数量
注意：此字段可能返回 null，表示取不到有效值。
      */
    FileMigratedCount: number;
    /**
      * 迁移失败文件数量
注意：此字段可能返回 null，表示取不到有效值。
      */
    FileFailedCount: number;
    /**
      * 文件容量，单位Byte
注意：此字段可能返回 null，表示取不到有效值。
      */
    FileTotalSize: number;
    /**
      * 已迁移文件容量，单位Byte
注意：此字段可能返回 null，表示取不到有效值。
      */
    FileMigratedSize: number;
    /**
      * 迁移失败文件容量，单位Byte
注意：此字段可能返回 null，表示取不到有效值。
      */
    FileFailedSize: number;
    /**
      * 全部清单
注意：此字段可能返回 null，表示取不到有效值。
      */
    FileTotalList: string;
    /**
      * 已完成文件清单
注意：此字段可能返回 null，表示取不到有效值。
      */
    FileCompletedList: string;
    /**
      * 失败文件清单
注意：此字段可能返回 null，表示取不到有效值。
      */
    FileFailedList: string;
    /**
      * 源桶路径
注意：此字段可能返回 null，表示取不到有效值。
      */
    BucketPath: string;
}
/**
 * 文件系统客户端信息
 */
export interface FileSystemClient {
    /**
      * 文件系统IP地址
      */
    CfsVip: string;
    /**
      * 客户端IP地址
      */
    ClientIp: string;
    /**
      * 文件系统所属VPCID
      */
    VpcId: string;
    /**
      * 可用区名称，例如ap-beijing-1，请参考 概览文档中的地域与可用区列表
      */
    Zone: string;
    /**
      * 可用区中文名称
      */
    ZoneName: string;
    /**
      * 该文件系统被挂载到客户端上的路径信息
      */
    MountDirectory: string;
}
/**
 * DescribeCfsFileSystems返回参数结构体
 */
export interface DescribeCfsFileSystemsResponse {
    /**
      * 文件系统信息
      */
    FileSystems: Array<FileSystemInfo>;
    /**
      * 文件系统总数
      */
    TotalCount: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CreateCfsFileSystem返回参数结构体
 */
export interface CreateCfsFileSystemResponse {
    /**
      * 文件系统创建时间
      */
    CreationTime?: string;
    /**
      * 用户自定义文件系统名称
      */
    CreationToken?: string;
    /**
      * 文件系统 ID
      */
    FileSystemId?: string;
    /**
      * 文件系统状态，可能出现状态包括：“creating”  创建中, “create_failed” 创建失败, “available” 可用, “unserviced” 不可用, “upgrading” 升级中， “deleting” 删除中。
      */
    LifeCycleState?: string;
    /**
      * 文件系统已使用容量大小，单位为 Byte
      */
    SizeByte?: number;
    /**
      * 可用区 ID
      */
    ZoneId?: number;
    /**
      * 用户自定义文件系统名称
      */
    FsName?: string;
    /**
      * 文件系统是否加密
      */
    Encrypted?: boolean;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 文件系统基本信息
 */
export interface FileSystemInfo {
    /**
      * 创建时间
      */
    CreationTime: string;
    /**
      * 用户自定义名称
      */
    CreationToken: string;
    /**
      * 文件系统 ID
      */
    FileSystemId: string;
    /**
      * 文件系统状态。取值范围：
- creating:创建中
- mounting:挂载中
- create_failed:创建失败
- available:可使用
- unserviced:停服中
- upgrading:升级中
      */
    LifeCycleState: string;
    /**
      * 文件系统已使用容量
      */
    SizeByte: number;
    /**
      * 文件系统最大空间限制
      */
    SizeLimit: number;
    /**
      * 区域 ID
      */
    ZoneId: number;
    /**
      * 区域名称
      */
    Zone: string;
    /**
      * 文件系统协议类型
      */
    Protocol: string;
    /**
      * 文件系统存储类型
      */
    StorageType: string;
    /**
      * 文件系统绑定的预付费存储包
      */
    StorageResourcePkg: string;
    /**
      * 文件系统绑定的预付费带宽包（暂未支持）
      */
    BandwidthResourcePkg: string;
    /**
      * 文件系统绑定权限组信息
      */
    PGroup: PGroup;
    /**
      * 用户自定义名称
      */
    FsName: string;
    /**
      * 文件系统是否加密
      */
    Encrypted: boolean;
    /**
      * 加密所使用的密钥，可以为密钥的 ID 或者 ARN
      */
    KmsKeyId: string;
    /**
      * 应用ID
      */
    AppId: number;
    /**
      * 文件系统吞吐上限，吞吐上限是根据文件系统当前已使用存储量、绑定的存储资源包以及吞吐资源包一同确定
      */
    BandwidthLimit: number;
    /**
      * 文件系统总容量
      */
    Capacity: number;
    /**
      * 文件系统标签列表
      */
    Tags: Array<TagInfo>;
    /**
      * 文件系统生命周期管理状态
      */
    TieringState: string;
    /**
      * 分层存储详情
注意：此字段可能返回 null，表示取不到有效值。
      */
    TieringDetail: TieringDetailInfo;
}
/**
 * BindAutoSnapshotPolicy请求参数结构体
 */
export interface BindAutoSnapshotPolicyRequest {
    /**
      * 快照策略ID
      */
    AutoSnapshotPolicyId: string;
    /**
      * 文件系统列表
      */
    FileSystemIds: string;
}
/**
 * ModifyFileSystemAutoScaleUpRule请求参数结构体
 */
export interface ModifyFileSystemAutoScaleUpRuleRequest {
    /**
      * 文件系统id
      */
    FileSystemId: string;
    /**
      * 扩容阈值，范围[10-90]
      */
    ScaleUpThreshold: number;
    /**
      * 扩容后目标阈值,范围[10-90],该值要小于ScaleUpThreshold
      */
    TargetThreshold: number;
    /**
      * 规则状态0:关闭，1 开启

      */
    Status?: number;
}
/**
 * ScaleUpFileSystem请求参数结构体
 */
export interface ScaleUpFileSystemRequest {
    /**
      * 文件系统Id
      */
    FileSystemId: string;
    /**
      * 扩容的目标容量
      */
    TargetCapacity: number;
}
/**
 * CreateCfsPGroup请求参数结构体
 */
export interface CreateCfsPGroupRequest {
    /**
      * 权限组名称，1-64个字符且只能为中文，字母，数字，下划线或横线
      */
    Name: string;
    /**
      * 权限组描述信息，1-255个字符
      */
    DescInfo?: string;
}
/**
 * DescribeMigrationTasks返回参数结构体
 */
export interface DescribeMigrationTasksResponse {
    /**
      * 迁移任务的数量
      */
    TotalCount?: number;
    /**
      * 迁移任务详情
      */
    MigrationTasks?: Array<MigrationTaskInfo>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeAutoSnapshotPolicies请求参数结构体
 */
export interface DescribeAutoSnapshotPoliciesRequest {
    /**
      * 快照策略ID
      */
    AutoSnapshotPolicyId?: string;
    /**
      * 分页码
      */
    Offset?: number;
    /**
      * 页面长
      */
    Limit?: number;
    /**
      * 过滤条件
      */
    Filters?: Array<Filter>;
    /**
      * 升序，降序
      */
    Order?: string;
    /**
      * 排序字段
      */
    OrderField?: string;
}
/**
 * DescribeAvailableZoneInfo请求参数结构体
 */
export declare type DescribeAvailableZoneInfoRequest = null;
/**
 * DescribeMountTargets请求参数结构体
 */
export interface DescribeMountTargetsRequest {
    /**
      * 文件系统 ID
      */
    FileSystemId: string;
}
/**
 * BindAutoSnapshotPolicy返回参数结构体
 */
export interface BindAutoSnapshotPolicyResponse {
    /**
      * 快照策略ID
      */
    AutoSnapshotPolicyId?: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * StopMigrationTask返回参数结构体
 */
export interface StopMigrationTaskResponse {
    /**
      * 迁移任务Id
      */
    TaskId?: string;
    /**
      * 迁移状态。0: 已完成；1: 进行中；2: 已终止
      */
    Status?: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * SignUpCfsService返回参数结构体
 */
export interface SignUpCfsServiceResponse {
    /**
      * 该用户当前 CFS 服务的状态，creating 是开通中，created 是已开通
      */
    CfsServiceStatus: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 快照策略信息
 */
export interface AutoSnapshotPolicyInfo {
    /**
      * 快照策略ID
      */
    AutoSnapshotPolicyId: string;
    /**
      * 快照策略ID
      */
    PolicyName: string;
    /**
      * 快照策略创建时间
      */
    CreationTime: string;
    /**
      * 关联的文件系统个数
      */
    FileSystemNums: number;
    /**
      * 快照定期备份在一星期哪一天，该参数与DayOfMonth,IntervalDays互斥
      */
    DayOfWeek: string;
    /**
      * 快照定期备份在一天的哪一小时
      */
    Hour: string;
    /**
      * 是否激活定期快照功能
      */
    IsActivated: number;
    /**
      * 下一次触发快照时间
      */
    NextActiveTime: string;
    /**
      * 快照策略状态
      */
    Status: string;
    /**
      * 帐号ID
      */
    AppId: number;
    /**
      * 保留时间
      */
    AliveDays: number;
    /**
      * 地域
      */
    RegionName: string;
    /**
      * 文件系统信息
      */
    FileSystems: Array<FileSystemByPolicy>;
    /**
      * 快照定期备份在一个月的某个时间；该参数与DayOfWeek,IntervalDays互斥
注意：此字段可能返回 null，表示取不到有效值。
      */
    DayOfMonth?: string;
    /**
      * 快照定期间隔天数，1-365 天；该参数与DayOfMonth,DayOfWeek互斥
注意：此字段可能返回 null，表示取不到有效值。
      */
    IntervalDays?: number;
}
/**
 * DescribeCfsRules请求参数结构体
 */
export interface DescribeCfsRulesRequest {
    /**
      * 权限组 ID
      */
    PGroupId: string;
}
/**
 * UpdateCfsFileSystemName请求参数结构体
 */
export interface UpdateCfsFileSystemNameRequest {
    /**
      * 文件系统 ID
      */
    FileSystemId: string;
    /**
      * 用户自定义文件系统名称
      */
    FsName?: string;
}
/**
 * DeleteCfsPGroup请求参数结构体
 */
export interface DeleteCfsPGroupRequest {
    /**
      * 权限组 ID
      */
    PGroupId: string;
}
/**
 * UpdateCfsPGroup返回参数结构体
 */
export interface UpdateCfsPGroupResponse {
    /**
      * 权限组ID
      */
    PGroupId: string;
    /**
      * 权限组名称
      */
    Name: string;
    /**
      * 描述信息
      */
    DescInfo: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DeleteAutoSnapshotPolicy请求参数结构体
 */
export interface DeleteAutoSnapshotPolicyRequest {
    /**
      * 快照策略ID
      */
    AutoSnapshotPolicyId: string;
}
/**
 * DeleteCfsFileSystem返回参数结构体
 */
export interface DeleteCfsFileSystemResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * UpdateCfsRule请求参数结构体
 */
export interface UpdateCfsRuleRequest {
    /**
      * 权限组 ID
      */
    PGroupId: string;
    /**
      * 规则 ID
      */
    RuleId: string;
    /**
      * 可以填写单个 IP 或者单个网段，例如 10.1.10.11 或者 10.10.1.0/24。默认来访地址为*表示允许所有。同时需要注意，此处需填写 CVM 的内网 IP。
      */
    AuthClientIp?: string;
    /**
      * 读写权限, 值为RO、RW；其中 RO 为只读，RW 为读写，不填默认为只读
      */
    RWPermission?: string;
    /**
      * 用户权限，值为all_squash、no_all_squash、root_squash、no_root_squash。其中all_squash为所有访问用户都会被映射为匿名用户或用户组；no_all_squash为访问用户会先与本机用户匹配，匹配失败后再映射为匿名用户或用户组；root_squash为将来访的root用户映射为匿名用户或用户组；no_root_squash为来访的root用户保持root帐号权限。不填默认为root_squash。
      */
    UserPermission?: string;
    /**
      * 规则优先级，参数范围1-100。 其中 1 为最高，100为最低
      */
    Priority?: number;
}
/**
 * DeleteUserQuota请求参数结构体
 */
export interface DeleteUserQuotaRequest {
    /**
      * 文件系统 ID
      */
    FileSystemId: string;
    /**
      * 指定配额类型，包括Uid、Gid
      */
    UserType: string;
    /**
      * UID/GID信息
      */
    UserId: string;
}
/**
 * DescribeAvailableZoneInfo返回参数结构体
 */
export interface DescribeAvailableZoneInfoResponse {
    /**
      * 各可用区的资源售卖情况以及支持的存储类型、存储协议等信息
      */
    RegionZones: Array<AvailableRegion>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DeleteCfsSnapshot返回参数结构体
 */
export interface DeleteCfsSnapshotResponse {
    /**
      * 文件系统ID
      */
    SnapshotId: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeCfsFileSystemClients返回参数结构体
 */
export interface DescribeCfsFileSystemClientsResponse {
    /**
      * 客户端列表
      */
    ClientList: Array<FileSystemClient>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DeleteMountTarget返回参数结构体
 */
export interface DeleteMountTargetResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CreateCfsSnapshot请求参数结构体
 */
export interface CreateCfsSnapshotRequest {
    /**
      * 文件系统id
      */
    FileSystemId: string;
    /**
      * 快照名称
      */
    SnapshotName?: string;
    /**
      * 快照标签
      */
    ResourceTags?: Array<TagInfo>;
}
/**
 * DescribeBucketList请求参数结构体
 */
export interface DescribeBucketListRequest {
    /**
      * 数据源服务商。COS: 腾讯云COS，OSS: 阿里云OSS，OBS:华为云OBS
      */
    SrcService: string;
    /**
      * 数据源账号的SecretId

      */
    SrcSecretId: string;
    /**
      * 数据源账号的SecretKey
      */
    SrcSecretKey: string;
}
/**
 * DeleteCfsRule请求参数结构体
 */
export interface DeleteCfsRuleRequest {
    /**
      * 权限组 ID
      */
    PGroupId: string;
    /**
      * 规则 ID
      */
    RuleId: string;
}
/**
 * UpdateCfsRule返回参数结构体
 */
export interface UpdateCfsRuleResponse {
    /**
      * 权限组 ID
      */
    PGroupId: string;
    /**
      * 规则 ID
      */
    RuleId: string;
    /**
      * 允许访问的客户端 IP 或者 IP 段
      */
    AuthClientIp: string;
    /**
      * 读写权限
      */
    RWPermission: string;
    /**
      * 用户权限
      */
    UserPermission: string;
    /**
      * 优先级
      */
    Priority: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DeleteMigrationTask返回参数结构体
 */
export interface DeleteMigrationTaskResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeSnapshotOperationLogs返回参数结构体
 */
export interface DescribeSnapshotOperationLogsResponse {
    /**
      * 快照ID
      */
    SnapshotId: string;
    /**
      * 操作日志
      */
    SnapshotOperates: Array<SnapshotOperateLog>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * UpdateCfsFileSystemPGroup返回参数结构体
 */
export interface UpdateCfsFileSystemPGroupResponse {
    /**
      * 权限组 ID
      */
    PGroupId: string;
    /**
      * 文件系统 ID
      */
    FileSystemId: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DeleteCfsFileSystem请求参数结构体
 */
export interface DeleteCfsFileSystemRequest {
    /**
      * 文件系统 ID。说明，进行删除文件系统操作前需要先调用 DeleteMountTarget 接口删除该文件系统的挂载点，否则会删除失败。
      */
    FileSystemId: string;
}
/**
 * CreateCfsPGroup返回参数结构体
 */
export interface CreateCfsPGroupResponse {
    /**
      * 权限组 ID
      */
    PGroupId: string;
    /**
      * 权限组名字
      */
    Name: string;
    /**
      * 权限组描述信息
      */
    DescInfo: string;
    /**
      * 已经与该权限组绑定的文件系统个数
      */
    BindCfsNum: number;
    /**
      * 权限组创建时间
      */
    CDate: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeCfsServiceStatus请求参数结构体
 */
export declare type DescribeCfsServiceStatusRequest = null;
/**
 * DeleteUserQuota返回参数结构体
 */
export interface DeleteUserQuotaResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DeleteMigrationTask请求参数结构体
 */
export interface DeleteMigrationTaskRequest {
    /**
      * 迁移任务ID
      */
    TaskId: string;
}
/**
 * 文件系统绑定权限组信息
 */
export interface PGroup {
    /**
      * 权限组ID
      */
    PGroupId: string;
    /**
      * 权限组名称
      */
    Name: string;
}
/**
 * SetUserQuota请求参数结构体
 */
export interface SetUserQuotaRequest {
    /**
      * 文件系统 ID
      */
    FileSystemId: string;
    /**
      * 指定配额类型，包括Uid、Gid
      */
    UserType: string;
    /**
      * UID/GID信息
      */
    UserId: string;
    /**
      * 容量硬限制，单位GiB
      */
    CapacityHardLimit?: number;
    /**
      * 文件硬限制，单位个
      */
    FileHardLimit?: number;
}
/**
 * CreateAutoSnapshotPolicy返回参数结构体
 */
export interface CreateAutoSnapshotPolicyResponse {
    /**
      * 快照策略ID
      */
    AutoSnapshotPolicyId?: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ModifyFileSystemAutoScaleUpRule返回参数结构体
 */
export interface ModifyFileSystemAutoScaleUpRuleResponse {
    /**
      * 文件系统id
      */
    FileSystemId?: string;
    /**
      * 规则状态0:关闭，1 开启
      */
    Status?: number;
    /**
      * 扩容阈值,范围[10-90]
      */
    ScaleUpThreshold?: number;
    /**
      * 扩容后达到阈值,范围[10-90]
      */
    TargetThreshold?: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 版本控制-类型数组
 */
export interface AvailableType {
    /**
      * 协议与售卖详情
      */
    Protocols: Array<AvailableProtoStatus>;
    /**
      * 存储类型。返回值中 SD 为标准型存储、HP 为性能型存储
      */
    Type: string;
    /**
      * 是否支持预付费。返回值中 true 为支持、false 为不支持
      */
    Prepayment: boolean;
}
/**
 * CreateCfsSnapshot返回参数结构体
 */
export interface CreateCfsSnapshotResponse {
    /**
      * 文件系统快照id
      */
    SnapshotId: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 文件系统配额信息
 */
export interface UserQuota {
    /**
      * 指定配额类型，包括Uid、Gid
      */
    UserType: string;
    /**
      * UID/GID信息
      */
    UserId: string;
    /**
      * 容量硬限制，单位GiB
      */
    CapacityHardLimit: number;
    /**
      * 文件硬限制，单位个
      */
    FileHardLimit: number;
    /**
      * 文件系统ID
      */
    FileSystemId: string;
    /**
      * 容量使用，单位GiB
注意：此字段可能返回 null，表示取不到有效值。
      */
    CapacityUsed?: number;
    /**
      * 文件使用个数，单位个
注意：此字段可能返回 null，表示取不到有效值。
      */
    FileUsed?: number;
}
/**
 * DeleteMountTarget请求参数结构体
 */
export interface DeleteMountTargetRequest {
    /**
      * 文件系统 ID
      */
    FileSystemId: string;
    /**
      * 挂载点 ID
      */
    MountTargetId: string;
}
/**
 * CreateCfsRule请求参数结构体
 */
export interface CreateCfsRuleRequest {
    /**
      * 权限组 ID
      */
    PGroupId: string;
    /**
      * 可以填写单个 IP 或者单个网段，例如 10.1.10.11 或者 10.10.1.0/24。默认来访地址为*表示允许所有。同时需要注意，此处需填写 CVM 的内网 IP。
      */
    AuthClientIp: string;
    /**
      * 规则优先级，参数范围1-100。 其中 1 为最高，100为最低
      */
    Priority: number;
    /**
      * 读写权限, 值为 RO、RW；其中 RO 为只读，RW 为读写，不填默认为只读
      */
    RWPermission?: string;
    /**
      * 用户权限，值为 all_squash、no_all_squash、root_squash、no_root_squash。其中all_squash为所有访问用户都会被映射为匿名用户或用户组；no_all_squash为访问用户会先与本机用户匹配，匹配失败后再映射为匿名用户或用户组；root_squash为将来访的root用户映射为匿名用户或用户组；no_root_squash为来访的root用户保持root帐号权限。不填默认为root_squash。
      */
    UserPermission?: string;
}
/**
 * 对象存储桶
 */
export interface BucketInfo {
    /**
      * 桶名称
      */
    Name: string;
    /**
      * 桶所在地域
注意：此字段可能返回 null，表示取不到有效值。
      */
    Region: string;
}
/**
 * 快照操作日志
 */
export interface SnapshotOperateLog {
    /**
      * 操作类型
      */
    Action: string;
    /**
      * 操作时间
      */
    ActionTime: string;
    /**
      * 操作名称
      */
    ActionName: string;
    /**
      * 操作者
      */
    Operator: string;
    /**
      * 结果
      */
    Result: number;
}
/**
 * DescribeUserQuota请求参数结构体
 */
export interface DescribeUserQuotaRequest {
    /**
      * 文件系统 ID
      */
    FileSystemId: string;
    /**
      * 过滤条件。
<br><li>UserType - Array of String - 是否必填：否 -（过滤条件）按配额类型过滤。(Uid| Gid )
<br><li>UserId - Array of String - 是否必填：否 -（过滤条件）按UID/GID过滤。
      */
    Filters?: Array<Filter>;
    /**
      * Offset 分页码
      */
    Offset?: number;
    /**
      * Limit 页面大小
      */
    Limit?: number;
}
/**
 * DescribeBucketList返回参数结构体
 */
export interface DescribeBucketListResponse {
    /**
      * 桶的数量
      */
    TotalCount?: number;
    /**
      * 桶列表
      */
    BucketList?: Array<BucketInfo>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * UpdateCfsFileSystemName返回参数结构体
 */
export interface UpdateCfsFileSystemNameResponse {
    /**
      * 用户自定义文件系统名称
      */
    CreationToken: string;
    /**
      * 文件系统ID
      */
    FileSystemId: string;
    /**
      * 用户自定义文件系统名称
      */
    FsName: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeCfsSnapshotOverview返回参数结构体
 */
export interface DescribeCfsSnapshotOverviewResponse {
    /**
      * 统计信息
      */
    StatisticsList: Array<SnapshotStatistics>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DeleteCfsSnapshot请求参数结构体
 */
export interface DeleteCfsSnapshotRequest {
    /**
      * 文件系统快照id
      */
    SnapshotId?: string;
    /**
      * 需要删除的文件文件系统快照ID 列表，快照ID，跟ID列表至少填一项
      */
    SnapshotIds?: Array<string>;
}
/**
 * DescribeCfsFileSystemClients请求参数结构体
 */
export interface DescribeCfsFileSystemClientsRequest {
    /**
      * 文件系统 ID。
      */
    FileSystemId: string;
}
/**
 * 版本控制-协议详情

 */
export interface AvailableProtoStatus {
    /**
      * 售卖状态。可选值有 sale_out 售罄、saling可售、no_saling不可销售
      */
    SaleStatus: string;
    /**
      * 协议类型。可选值有 NFS、CIFS
      */
    Protocol: string;
}
/**
 * DescribeCfsFileSystems请求参数结构体
 */
export interface DescribeCfsFileSystemsRequest {
    /**
      * 文件系统 ID
      */
    FileSystemId?: string;
    /**
      * 私有网络（VPC） ID
      */
    VpcId?: string;
    /**
      * 子网 ID
      */
    SubnetId?: string;
}
/**
 * 版本控制-区域数组
 */
export interface AvailableRegion {
    /**
      * 区域名称，如“ap-beijing”
      */
    Region: string;
    /**
      * 区域名称，如“bj”
      */
    RegionName: string;
    /**
      * 区域可用情况，当区域内至少有一个可用区处于可售状态时，取值为AVAILABLE，否则为UNAVAILABLE
      */
    RegionStatus: string;
    /**
      * 可用区数组
      */
    Zones: Array<AvailableZone>;
    /**
      * 区域中文名称，如“广州”
      */
    RegionCnName: string;
}
/**
 * CreateCfsFileSystem请求参数结构体
 */
export interface CreateCfsFileSystemRequest {
    /**
      * 可用区名称，例如ap-beijing-1，请参考 [概览](https://cloud.tencent.com/document/product/582/13225) 文档中的地域与可用区列表
      */
    Zone: string;
    /**
      * 网络类型，可选值为 VPC，BASIC，CCN；其中 VPC 为私有网络，BASIC 为基础网络, CCN 为云联网，Turbo系列当前必须选择云联网。目前基础网络已逐渐淘汰，不推荐使用。
      */
    NetInterface: string;
    /**
      * 权限组 ID，通用标准型和性能型必填，turbo系列请填写pgroupbasic
      */
    PGroupId: string;
    /**
      * 文件系统协议类型， 值为 NFS、CIFS、TURBO ; 若留空则默认为 NFS协议，turbo系列必须选择turbo，不支持NFS、CIFS
      */
    Protocol?: string;
    /**
      * 文件系统存储类型，默认值为 SD ；其中 SD 为通用标准型标准型存储， HP为通用性能型存储， TB为turbo标准型， TP 为turbo性能型。
      */
    StorageType?: string;
    /**
      * 私有网络（VPC） ID，若网络类型选择的是VPC，该字段为必填。
      */
    VpcId?: string;
    /**
      * 子网 ID，若网络类型选择的是VPC，该字段为必填。
      */
    SubnetId?: string;
    /**
      * 指定IP地址，仅VPC网络支持；若不填写、将在该子网下随机分配 IP，Turbo系列当前不支持指定
      */
    MountIP?: string;
    /**
      * 用户自定义文件系统名称
      */
    FsName?: string;
    /**
      * 文件系统标签
      */
    ResourceTags?: Array<TagInfo>;
    /**
      * 用于保证请求幂等性的字符串。该字符串由客户生成，需保证不同请求之间唯一，最大值不超过64个ASCII字符。若不指定该参数，则无法保证请求的幂等性。用于保证请求幂等性的字符串失效时间为2小时。
      */
    ClientToken?: string;
    /**
      * 云联网ID， 若网络类型选择的是CCN，该字段为必填
      */
    CcnId?: string;
    /**
      * 云联网中CFS使用的网段， 若网络类型选择的是Ccn，该字段为必填，且不能和Ccn中已经绑定的网段冲突
      */
    CidrBlock?: string;
    /**
      * 文件系统容量，turbo系列必填，单位为GiB。 turbo标准型单位GB，起售40TiB，即40960 GiB；扩容步长20TiB，即20480 GiB。turbo性能型起售20TiB，即20480 GiB；扩容步长10TiB，10240 GiB。
      */
    Capacity?: number;
}
/**
 * 版本控制-可用区数组
 */
export interface AvailableZone {
    /**
      * 可用区名称
      */
    Zone: string;
    /**
      * 可用区ID
      */
    ZoneId: number;
    /**
      * 可用区中文名称
      */
    ZoneCnName: string;
    /**
      * Type数组
      */
    Types: Array<AvailableType>;
    /**
      * 可用区中英文名称
      */
    ZoneName: string;
}
/**
 * DescribeMigrationTasks请求参数结构体
 */
export interface DescribeMigrationTasksRequest {
    /**
      * 分页的偏移量，默认值为0。
      */
    Offset?: number;
    /**
      * 分页单页限制数目，默认值为20，最大值100。
      */
    Limit?: number;
    /**
      * <br><li> taskId

按照【迁移任务id】进行过滤。
类型：String

必选：否

<br><li> taskName

按照【迁移任务名字】进行模糊搜索过滤。
类型：String

必选：否

每次请求的Filters的上限为10，Filter.Values的上限为100。
      */
    Filters?: Array<Filter>;
}
/**
 * 条件过滤
 */
export interface Filter {
    /**
      * 值
      */
    Values: Array<string>;
    /**
      * 名称
      */
    Name: string;
}
/**
 * UnbindAutoSnapshotPolicy请求参数结构体
 */
export interface UnbindAutoSnapshotPolicyRequest {
    /**
      * 需要解绑的文件系统ID列表，用"," 分割
      */
    FileSystemIds: string;
    /**
      * 解绑的快照ID
      */
    AutoSnapshotPolicyId: string;
}
/**
 * UnbindAutoSnapshotPolicy返回参数结构体
 */
export interface UnbindAutoSnapshotPolicyResponse {
    /**
      * 快照策略ID
      */
    AutoSnapshotPolicyId: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeCfsServiceStatus返回参数结构体
 */
export interface DescribeCfsServiceStatusResponse {
    /**
      * 该用户当前 CFS 服务的状态，none 为未开通，creating 为开通中，created 为已开通
      */
    CfsServiceStatus: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 权限组规则列表
 */
export interface PGroupRuleInfo {
    /**
      * 规则ID
      */
    RuleId: string;
    /**
      * 允许访问的客户端IP
      */
    AuthClientIp: string;
    /**
      * 读写权限, ro为只读，rw为读写
      */
    RWPermission: string;
    /**
      * 用户权限。其中all_squash为所有访问用户都会被映射为匿名用户或用户组；no_all_squash为访问用户会先与本机用户匹配，匹配失败后再映射为匿名用户或用户组；root_squash为将来访的root用户映射为匿名用户或用户组；no_root_squash为来访的root用户保持root帐号权限。
      */
    UserPermission: string;
    /**
      * 规则优先级，1-100。 其中 1 为最高，100为最低
      */
    Priority: number;
}
/**
 * DescribeCfsSnapshots请求参数结构体
 */
export interface DescribeCfsSnapshotsRequest {
    /**
      * 文件系统ID
      */
    FileSystemId?: string;
    /**
      * 快照ID
      */
    SnapshotId?: string;
    /**
      * 分页起始位置
      */
    Offset?: number;
    /**
      * 页面长度
      */
    Limit?: number;
    /**
      * 过滤条件
      */
    Filters?: Array<Filter>;
    /**
      * 排序取值
      */
    OrderField?: string;
    /**
      * 排序 升序或者降序
      */
    Order?: string;
}
/**
 * UpdateCfsFileSystemSizeLimit返回参数结构体
 */
export interface UpdateCfsFileSystemSizeLimitResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * UpdateAutoSnapshotPolicy请求参数结构体
 */
export interface UpdateAutoSnapshotPolicyRequest {
    /**
      * 快照策略ID
      */
    AutoSnapshotPolicyId: string;
    /**
      * 快照策略名称
      */
    PolicyName?: string;
    /**
      * 快照定期备份在一星期哪一天
      */
    DayOfWeek?: string;
    /**
      * 快照定期备份在一天的哪一小时
      */
    Hour?: string;
    /**
      * 快照保留日期
      */
    AliveDays?: number;
    /**
      * 是否激活定期快照功能
      */
    IsActivated?: number;
    /**
      * 定期快照在每月的第几天创建快照，该参数与DayOfWeek互斥
      */
    DayOfMonth?: string;
    /**
      * 间隔天数定期执行快照，该参数与DayOfWeek,DayOfMonth 互斥
      */
    IntervalDays?: number;
}
/**
 * UpdateCfsFileSystemSizeLimit请求参数结构体
 */
export interface UpdateCfsFileSystemSizeLimitRequest {
    /**
      * 文件系统容量限制大小，输入范围0-1073741824, 单位为GB；其中输入值为0时，表示不限制文件系统容量。
      */
    FsLimit: number;
    /**
      * 文件系统ID，目前仅支持标准型文件系统。
      */
    FileSystemId: string;
}
/**
 * DescribeCfsRules返回参数结构体
 */
export interface DescribeCfsRulesResponse {
    /**
      * 权限组规则列表
      */
    RuleList: Array<PGroupRuleInfo>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * SignUpCfsService请求参数结构体
 */
export declare type SignUpCfsServiceRequest = null;
/**
 * UpdateAutoSnapshotPolicy返回参数结构体
 */
export interface UpdateAutoSnapshotPolicyResponse {
    /**
      * 快照策略ID
      */
    AutoSnapshotPolicyId?: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 绑定快照策略的文件系统信息
 */
export interface FileSystemByPolicy {
    /**
      * 文件系统名称
      */
    CreationToken: string;
    /**
      * 文件系统ID
      */
    FileSystemId: string;
    /**
      * 文件系统大小
      */
    SizeByte: number;
    /**
      * 存储类型
      */
    StorageType: string;
    /**
      * 快照总大小
      */
    TotalSnapshotSize: number;
    /**
      * 文件系统创建时间
      */
    CreationTime: string;
    /**
      * 文件系统所在区ID
      */
    ZoneId: number;
}
/**
 * 快照信息
 */
export interface SnapshotInfo {
    /**
      * 创建快照时间
      */
    CreationTime: string;
    /**
      * 快照名称
      */
    SnapshotName: string;
    /**
      * 快照ID
      */
    SnapshotId: string;
    /**
      * 快照状态
      */
    Status: string;
    /**
      * 地域名称
      */
    RegionName: string;
    /**
      * 文件系统ID
      */
    FileSystemId: string;
    /**
      * 快照大小
      */
    Size: number;
    /**
      * 保留时长天
      */
    AliveDay: number;
    /**
      * 快照进度
      */
    Percent: number;
    /**
      * 帐号ID
      */
    AppId: number;
    /**
      * 快照删除时间
      */
    DeleteTime: string;
    /**
      * 文件系统名称
      */
    FsName: string;
    /**
      * 快照标签
      */
    Tags: Array<TagInfo>;
}
/**
 * 挂载点信息
 */
export interface MountInfo {
    /**
      * 文件系统 ID
      */
    FileSystemId: string;
    /**
      * 挂载点 ID
      */
    MountTargetId: string;
    /**
      * 挂载点 IP
      */
    IpAddress: string;
    /**
      * 挂载根目录
      */
    FSID: string;
    /**
      * 挂载点状态
      */
    LifeCycleState: string;
    /**
      * 网络类型
      */
    NetworkInterface: string;
    /**
      * 私有网络 ID
      */
    VpcId: string;
    /**
      * 私有网络名称
      */
    VpcName: string;
    /**
      * 子网 Id
      */
    SubnetId: string;
    /**
      * 子网名称
      */
    SubnetName: string;
    /**
      * CFS Turbo使用的云联网ID
      */
    CcnID: string;
    /**
      * 云联网中CFS Turbo使用的网段
      */
    CidrBlock: string;
}
/**
 * UpdateCfsFileSystemPGroup请求参数结构体
 */
export interface UpdateCfsFileSystemPGroupRequest {
    /**
      * 权限组 ID
      */
    PGroupId: string;
    /**
      * 文件系统 ID
      */
    FileSystemId: string;
}
/**
 * CreateMigrationTask返回参数结构体
 */
export interface CreateMigrationTaskResponse {
    /**
      * 迁移任务Id
      */
    TaskId?: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DeleteAutoSnapshotPolicy返回参数结构体
 */
export interface DeleteAutoSnapshotPolicyResponse {
    /**
      * 快照策略ID
      */
    AutoSnapshotPolicyId: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DeleteCfsRule返回参数结构体
 */
export interface DeleteCfsRuleResponse {
    /**
      * 规则 ID
      */
    RuleId: string;
    /**
      * 权限组 ID
      */
    PGroupId: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * UpdateCfsSnapshotAttribute返回参数结构体
 */
export interface UpdateCfsSnapshotAttributeResponse {
    /**
      * 文件系统快照ID
      */
    SnapshotId: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * UpdateCfsPGroup请求参数结构体
 */
export interface UpdateCfsPGroupRequest {
    /**
      * 权限组 ID
      */
    PGroupId: string;
    /**
      * 权限组名称，1-64个字符且只能为中文，字母，数字，下划线或横线
      */
    Name?: string;
    /**
      * 权限组描述信息，1-255个字符
      */
    DescInfo?: string;
}
/**
 * SetUserQuota返回参数结构体
 */
export interface SetUserQuotaResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * Tag信息单元
 */
export interface TagInfo {
    /**
      * 标签键
      */
    TagKey: string;
    /**
      * 标签值
      */
    TagValue: string;
}
/**
 * DescribeCfsPGroups请求参数结构体
 */
export declare type DescribeCfsPGroupsRequest = null;
/**
 * DeleteCfsPGroup返回参数结构体
 */
export interface DeleteCfsPGroupResponse {
    /**
      * 权限组 ID
      */
    PGroupId: string;
    /**
      * 用户 ID
      */
    AppId: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * UpdateCfsSnapshotAttribute请求参数结构体
 */
export interface UpdateCfsSnapshotAttributeRequest {
    /**
      * 文件系统快照ID
      */
    SnapshotId: string;
    /**
      * 文件系统快照名称
      */
    SnapshotName?: string;
    /**
      * 文件系统快照保留天数
      */
    AliveDays?: number;
}
/**
 * DescribeUserQuota返回参数结构体
 */
export interface DescribeUserQuotaResponse {
    /**
      * UserQuota条目总数
      */
    TotalCount: number;
    /**
      * UserQuota条目
      */
    UserQuotaInfo: Array<UserQuota>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 分层存储详细信息
 */
export declare type TieringDetailInfo = null;
/**
 * 权限组数组
 */
export interface PGroupInfo {
    /**
      * 权限组ID
      */
    PGroupId: string;
    /**
      * 权限组名称
      */
    Name: string;
    /**
      * 描述信息
      */
    DescInfo: string;
    /**
      * 创建时间
      */
    CDate: string;
    /**
      * 关联文件系统个数
      */
    BindCfsNum: number;
}
/**
 * CreateCfsRule返回参数结构体
 */
export interface CreateCfsRuleResponse {
    /**
      * 规则 ID
      */
    RuleId: string;
    /**
      * 权限组 ID
      */
    PGroupId: string;
    /**
      * 客户端 IP
      */
    AuthClientIp: string;
    /**
      * 读写权限
      */
    RWPermission: string;
    /**
      * 用户权限
      */
    UserPermission: string;
    /**
      * 优先级
      */
    Priority: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeCfsSnapshots返回参数结构体
 */
export interface DescribeCfsSnapshotsResponse {
    /**
      * 总个数
      */
    TotalCount: number;
    /**
      * 快照信息描述
      */
    Snapshots: Array<SnapshotInfo>;
    /**
      * 快照列表快照汇总
      */
    TotalSize: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * StopMigrationTask请求参数结构体
 */
export interface StopMigrationTaskRequest {
    /**
      * 迁移任务名称
      */
    TaskId: string;
}
/**
 * DescribeAutoSnapshotPolicies返回参数结构体
 */
export interface DescribeAutoSnapshotPoliciesResponse {
    /**
      * 快照策略总个数
      */
    TotalCount: number;
    /**
      * 快照策略信息
      */
    AutoSnapshotPolicies: Array<AutoSnapshotPolicyInfo>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeCfsSnapshotOverview请求参数结构体
 */
export declare type DescribeCfsSnapshotOverviewRequest = null;
/**
 * CreateAutoSnapshotPolicy请求参数结构体
 */
export interface CreateAutoSnapshotPolicyRequest {
    /**
      * 快照重复时间点
      */
    Hour: string;
    /**
      * 策略名称
      */
    PolicyName?: string;
    /**
      * 快照重复日期，星期一到星期日
      */
    DayOfWeek?: string;
    /**
      * 快照保留时长
      */
    AliveDays?: number;
    /**
      * 快照按月重复，每月1-31号，选择一天，每月将在这一天自动创建快照。
      */
    DayOfMonth?: string;
    /**
      * 间隔天数
      */
    IntervalDays?: number;
}
