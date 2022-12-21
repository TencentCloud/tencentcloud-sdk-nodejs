/**
 * DescribeInstanceShards请求参数结构体
 */
export interface DescribeInstanceShardsRequest {
    /**
      * 集群实例ID
      */
    InstanceId: string;
}
/**
 * OpenBackUp返回参数结构体
 */
export interface OpenBackUpResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 集群计费相关信息

 */
export interface Charge {
    /**
      * 计费类型，“PREPAID” 预付费，“POSTPAID_BY_HOUR” 后付费
      */
    ChargeType: string;
    /**
      * PREPAID需要传递，是否自动续费，1表示自动续费开启
      */
    RenewFlag?: number;
    /**
      * 预付费需要传递，计费时间长度，多少个月
      */
    TimeSpan?: number;
}
/**
 * ActionAlterCkUser请求参数结构体
 */
export interface ActionAlterCkUserRequest {
    /**
      * 用户信息
      */
    UserInfo: CkUserAlterInfo;
    /**
      * api接口类型，
AddSystemUser新增用户，UpdateSystemUser，修改用户
      */
    ApiType: string;
}
/**
 * DescribeSpec请求参数结构体
 */
export interface DescribeSpecRequest {
    /**
      * 地域信息，例如"ap-guangzhou-1"
      */
    Zone: string;
    /**
      * 计费类型，PREPAID 包年包月，POSTPAID_BY_HOUR 按量计费
      */
    PayMode?: string;
    /**
      * 是否弹性ck
      */
    IsElastic?: boolean;
}
/**
 * 新增或是修改ck用户
 */
export interface CkUserAlterInfo {
    /**
      * 集群实例id
      */
    InstanceId: string;
    /**
      * 用户名
      */
    UserName: string;
    /**
      * 密码
      */
    PassWord: string;
    /**
      * 描述
      */
    Describe?: string;
}
/**
 * DescribeSpec返回参数结构体
 */
export interface DescribeSpecResponse {
    /**
      * zookeeper节点规格描述
      */
    CommonSpec: Array<ResourceSpec>;
    /**
      * 数据节点规格描述
      */
    DataSpec: Array<ResourceSpec>;
    /**
      * 云盘列表
注意：此字段可能返回 null，表示取不到有效值。
      */
    AttachCBSSpec: Array<DiskSpec>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 资源规格描述信息
 */
export interface ResourceSpec {
    /**
      * 规格名称，例如“SCH1"
      */
    Name: string;
    /**
      * cpu核数
      */
    Cpu: number;
    /**
      * 内存大小，单位G
      */
    Mem: number;
    /**
      * 分类标记，STANDARD/BIGDATA/HIGHIO分别表示标准型/大数据型/高IO
      */
    Type: string;
    /**
      * 系统盘描述信息
      */
    SystemDisk: DiskSpec;
    /**
      * 数据盘描述信息
      */
    DataDisk: DiskSpec;
    /**
      * 最大节点数目限制
      */
    MaxNodeSize: number;
    /**
      * 是否可用，false代表售罄
注意：此字段可能返回 null，表示取不到有效值。
      */
    Available: boolean;
    /**
      * 规格描述信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    ComputeSpecDesc: string;
    /**
      * 规格名
注意：此字段可能返回 null，表示取不到有效值。
      */
    DisplayName: string;
    /**
      * 库存数
注意：此字段可能返回 null，表示取不到有效值。
      */
    InstanceQuota: number;
}
/**
 * ModifyUserNewPrivilege请求参数结构体
 */
export declare type ModifyUserNewPrivilegeRequest = null;
/**
 * DescribeInstance返回参数结构体
 */
export interface DescribeInstanceResponse {
    /**
      * 实例描述信息
      */
    InstanceInfo: InstanceInfo;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * OpenBackUp请求参数结构体
 */
export interface OpenBackUpRequest {
    /**
      * 集群id
      */
    InstanceId: string;
    /**
      * OPEN 或者CLOSE
      */
    OperationType: string;
    /**
      * 桶名字
      */
    CosBucketName: string;
}
/**
 * 备份表信息
 */
export interface BackupTableContent {
    /**
      * 数据库
      */
    Database: string;
    /**
      * 表
      */
    Table: string;
    /**
      * 表总字节数
      */
    TotalBytes: number;
    /**
      * 虚拟cluster
      */
    VCluster?: string;
    /**
      * 表ip
      */
    Ips?: string;
}
/**
 * CreateInstanceNew返回参数结构体
 */
export interface CreateInstanceNewResponse {
    /**
      * 流程ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    FlowId: string;
    /**
      * 实例ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    InstanceId: string;
    /**
      * 错误信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    ErrorMsg: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 配置文件修改信息
 */
export interface ConfigSubmitContext {
    /**
      * 配置文件名称
      */
    FileName: string;
    /**
      * 配置文件旧内容，base64编码
      */
    OldConfValue: string;
    /**
      * 配置文件新内容，base64编码
      */
    NewConfValue: string;
    /**
      * 保存配置文件的路径
      */
    FilePath?: string;
}
/**
 * CreateInstanceNew请求参数结构体
 */
export interface CreateInstanceNewRequest {
    /**
      * 可用区
      */
    Zone: string;
    /**
      * 是否高可用
      */
    HaFlag: boolean;
    /**
      * 私有网络
      */
    UserVPCId: string;
    /**
      * 子网
      */
    UserSubnetId: string;
    /**
      * 版本
      */
    ProductVersion: string;
    /**
      * 计费方式
      */
    ChargeProperties: Charge;
    /**
      * 实例名称
      */
    InstanceName: string;
    /**
      * 数据节点
      */
    DataSpec: NodeSpec;
    /**
      * 标签列表
      */
    Tags?: Tag;
    /**
      * 日志主题ID
      */
    ClsLogSetId?: string;
    /**
      * COS桶名称
      */
    CosBucketName?: string;
    /**
      * 是否是裸盘挂载
      */
    MountDiskType?: number;
    /**
      * 是否是ZK高可用
      */
    HAZk?: boolean;
    /**
      * ZK节点
      */
    CommonSpec?: NodeSpec;
}
/**
 * 实例描述信息
 */
export interface InstanceInfo {
    /**
      * 集群实例ID, "cdw-xxxx" 字符串类型
注意：此字段可能返回 null，表示取不到有效值。
      */
    InstanceId: string;
    /**
      * 集群实例名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    InstanceName: string;
    /**
      * 状态,
Init 创建中; Serving 运行中；
Deleted已销毁；Deleting 销毁中；
Modify 集群变更中；
注意：此字段可能返回 null，表示取不到有效值。
      */
    Status: string;
    /**
      * 版本
注意：此字段可能返回 null，表示取不到有效值。
      */
    Version: string;
    /**
      * 地域, ap-guangzhou
注意：此字段可能返回 null，表示取不到有效值。
      */
    Region: string;
    /**
      * 可用区， ap-guangzhou-3
注意：此字段可能返回 null，表示取不到有效值。
      */
    Zone: string;
    /**
      * 私有网络名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    VpcId: string;
    /**
      * 子网名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    SubnetId: string;
    /**
      * 付费类型，"hour", "prepay"
注意：此字段可能返回 null，表示取不到有效值。
      */
    PayMode: string;
    /**
      * 创建时间
注意：此字段可能返回 null，表示取不到有效值。
      */
    CreateTime: string;
    /**
      * 过期时间
注意：此字段可能返回 null，表示取不到有效值。
      */
    ExpireTime: string;
    /**
      * 数据节点描述信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    MasterSummary: NodesSummary;
    /**
      * zookeeper节点描述信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    CommonSummary: NodesSummary;
    /**
      * 高可用，“true" "false"
注意：此字段可能返回 null，表示取不到有效值。
      */
    HA: string;
    /**
      * 访问地址，例如 "10.0.0.1:9000"
注意：此字段可能返回 null，表示取不到有效值。
      */
    AccessInfo: string;
    /**
      * 记录ID，数值型
注意：此字段可能返回 null，表示取不到有效值。
      */
    Id: number;
    /**
      * regionId, 表示地域
注意：此字段可能返回 null，表示取不到有效值。
      */
    RegionId: number;
    /**
      * 可用区说明，例如 "广州二区"
注意：此字段可能返回 null，表示取不到有效值。
      */
    ZoneDesc: string;
    /**
      * 错误流程说明信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    FlowMsg: string;
    /**
      * 状态描述，例如“运行中”等
注意：此字段可能返回 null，表示取不到有效值。
      */
    StatusDesc: string;
    /**
      * 自动续费标记
注意：此字段可能返回 null，表示取不到有效值。
      */
    RenewFlag: boolean;
    /**
      * 标签列表
注意：此字段可能返回 null，表示取不到有效值。
      */
    Tags: Array<Tag>;
    /**
      * 监控信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    Monitor: string;
    /**
      * 是否开通日志
注意：此字段可能返回 null，表示取不到有效值。
      */
    HasClsTopic: boolean;
    /**
      * 日志主题ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    ClsTopicId: string;
    /**
      * 日志集ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    ClsLogSetId: string;
    /**
      * 是否支持xml配置管理
注意：此字段可能返回 null，表示取不到有效值。
      */
    EnableXMLConfig: number;
    /**
      * 区域
注意：此字段可能返回 null，表示取不到有效值。
      */
    RegionDesc: string;
    /**
      * 弹性网卡地址
注意：此字段可能返回 null，表示取不到有效值。
      */
    Eip: string;
    /**
      * 冷热分层系数
注意：此字段可能返回 null，表示取不到有效值。
      */
    CosMoveFactor: number;
}
/**
 * ModifyClusterConfigs返回参数结构体
 */
export interface ModifyClusterConfigsResponse {
    /**
      * 流程相关信息
      */
    FlowId: number;
    /**
      * 错误信息
      */
    ErrorMsg: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 磁盘规格描述
 */
export interface DiskSpec {
    /**
      * 磁盘类型，例如“CLOUD_SSD", "LOCAL_SSD"等
      */
    DiskType: string;
    /**
      * 磁盘类型说明，例如"云SSD", "本地SSD"等
      */
    DiskDesc: string;
    /**
      * 磁盘最小规格大小，单位G
      */
    MinDiskSize: number;
    /**
      * 磁盘最大规格大小，单位G
      */
    MaxDiskSize: number;
    /**
      * 磁盘数目
      */
    DiskCount: number;
}
/**
 * DescribeCkSqlApis请求参数结构体
 */
export interface DescribeCkSqlApisRequest {
    /**
      * 实例id
      */
    InstanceId: string;
    /**
      * api接口名称,GetClusters:获取集群cluster列表
GetSystemUsers:获取系统用户列表
CheckNodeCluster: 检查节点是否隶属一个cluster
GetClusterDatabases: 获取一个cluster下的数据库列表
GetClusterTables: 获取一个cluster下的数据库表列表
GetPrivilegeUsers: 获取授权的用户列表
GET_USER_CLUSTER_PRIVILEGES:获取用户cluster下的权限
GetUserClusterNewPrivileges:获取用户cluster下的权限 (新版）
RevokeClusterUser:解绑cluster用户
DeleteSystemUser:删除系统用户 —— 必须所有cluster先解绑
GetUserOptionMessages:获取用户配置备注信息
GET_USER_CONFIGS:获取用户配置列表  QUOTA、PROFILE、POLICY
      */
    ApiType: string;
    /**
      * 集群名称，GET_SYSTEM_USERS，GET_PRIVILEGE_USERS，GET_CLUSTER_DATABASES，GET_CLUSTER_TABLES 必填
      */
    Cluster?: string;
    /**
      * 用户名称，api与user相关的必填
      */
    UserName?: string;
}
/**
 * CreateBackUpSchedule返回参数结构体
 */
export interface CreateBackUpScheduleResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ModifyClusterConfigs请求参数结构体
 */
export interface ModifyClusterConfigsRequest {
    /**
      * 集群ID，例如cdwch-xxxx
      */
    InstanceId: string;
    /**
      * 配置文件修改信息
      */
    ModifyConfContext: Array<ConfigSubmitContext>;
    /**
      * 修改原因
      */
    Remark?: string;
}
/**
 * 节点角色描述信息
 */
export interface NodesSummary {
    /**
      * 机型，如 S1
      */
    Spec: string;
    /**
      * 节点数目
      */
    NodeSize: number;
    /**
      * cpu核数，单位个
      */
    Core: number;
    /**
      * 内存大小，单位G
      */
    Memory: number;
    /**
      * 磁盘大小，单位G
      */
    Disk: number;
    /**
      * 磁盘类型
      */
    DiskType: string;
    /**
      * 磁盘描述
      */
    DiskDesc: string;
}
/**
 * DescribeInstanceShards返回参数结构体
 */
export interface DescribeInstanceShardsResponse {
    /**
      * 实例shard信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    InstanceShardsList: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CreateBackUpSchedule请求参数结构体
 */
export interface CreateBackUpScheduleRequest {
    /**
      * 编辑时需要传
      */
    ScheduleId?: number;
    /**
      * 选择的星期 逗号分隔，例如 2 代表周二
      */
    WeekDays?: string;
    /**
      * 执行小时
      */
    ExecuteHour?: number;
    /**
      * 备份表列表
      */
    BackUpTables?: Array<BackupTableContent>;
}
/**
 * 创建集群时的规格
 */
export interface NodeSpec {
    /**
      * 规格名称
      */
    SpecName: string;
    /**
      * 数量
      */
    Count: number;
    /**
      * 云盘大小
      */
    DiskSize: number;
}
/**
 * DescribeInstance请求参数结构体
 */
export interface DescribeInstanceRequest {
    /**
      * 集群实例ID
      */
    InstanceId: string;
}
/**
 * ActionAlterCkUser返回参数结构体
 */
export interface ActionAlterCkUserResponse {
    /**
      * 错误信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    ErrMsg: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 标签描述
 */
export interface Tag {
    /**
      * 标签的键
      */
    TagKey: string;
    /**
      * 标签的值
      */
    TagValue: string;
}
/**
 * DescribeCkSqlApis返回参数结构体
 */
export interface DescribeCkSqlApisResponse {
    /**
      * 返回的查询数据，大部分情况是list，也可能是bool
注意：此字段可能返回 null，表示取不到有效值。
      */
    ReturnData: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ModifyUserNewPrivilege返回参数结构体
 */
export interface ModifyUserNewPrivilegeResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
