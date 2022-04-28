/**
 * DescribeReadOnlyGroupDetails请求参数结构体
 */
export interface DescribeReadOnlyGroupDetailsRequest {
    /**
      * 主实例ID，格式如：mssql-3l3fgqn7
      */
    InstanceId: string;
    /**
      * 只读组ID，格式如：mssqlrg-3l3fgqn7
      */
    ReadOnlyGroupId: string;
}
/**
 * CreateDBInstances请求参数结构体
 */
export interface CreateDBInstancesRequest {
    /**
      * 实例可用区，类似ap-guangzhou-1（广州一区）；实例可售卖区域可以通过接口DescribeZones获取
      */
    Zone: string;
    /**
      * 实例内存大小，单位GB
      */
    Memory: number;
    /**
      * 实例磁盘大小，单位GB
      */
    Storage: number;
    /**
      * 付费模式，取值支持 PREPAID（预付费），POSTPAID（后付费）。
      */
    InstanceChargeType?: string;
    /**
      * 项目ID
      */
    ProjectId?: number;
    /**
      * 本次购买几个实例，默认值为1。取值不超过10
      */
    GoodsNum?: number;
    /**
      * VPC子网ID，形如subnet-bdoe83fa；SubnetId和VpcId需同时设置或者同时不设置
      */
    SubnetId?: string;
    /**
      * VPC网络ID，形如vpc-dsp338hz；SubnetId和VpcId需同时设置或者同时不设置
      */
    VpcId?: string;
    /**
      * 购买实例周期，默认取值为1，表示一个月。取值不超过48
      */
    Period?: number;
    /**
      * 是否自动使用代金券；1 - 是，0 - 否，默认不使用
      */
    AutoVoucher?: number;
    /**
      * 代金券ID数组，目前单个订单只能使用一张
      */
    VoucherIds?: Array<string>;
    /**
      * sqlserver版本，目前只支持：2008R2（SQL Server 2008 Enterprise），2012SP3（SQL Server 2012 Enterprise），2016SP1（SQL Server 2016 Enterprise），201602（SQL Server 2016 Standard）2017（SQL Server 2017 Enterprise）版本。每个地域支持售卖的版本不同，可通过DescribeProductConfig接口来拉取每个地域可售卖的版本信息。不填，默认为版本2008R2。
      */
    DBVersion?: string;
    /**
      * 自动续费标志：0-正常续费  1-自动续费，默认为1自动续费。只在购买预付费实例时有效。
      */
    AutoRenewFlag?: number;
    /**
      * 安全组列表，填写形如sg-xxx的安全组ID
      */
    SecurityGroupList?: Array<string>;
    /**
      * 可维护时间窗配置，以周为单位，表示周几允许维护，1-7分别代表周一到周末
      */
    Weekly?: Array<number>;
    /**
      * 可维护时间窗配置，每天可维护的开始时间
      */
    StartTime?: string;
    /**
      * 可维护时间窗配置，持续时间，单位：小时
      */
    Span?: number;
    /**
      * 购买高可用实例的类型：DUAL-双机高可用  CLUSTER-集群，默认值为DUAL
      */
    HAType?: string;
    /**
      * 是否跨可用区部署，默认值为false
      */
    MultiZones?: boolean;
    /**
      * 新建实例绑定的标签集合
      */
    ResourceTags?: Array<ResourceTag>;
}
/**
 * CloneDB返回参数结构体
 */
export interface CloneDBResponse {
    /**
      * 异步流程任务ID，使用FlowId调用DescribeFlowStatus接口获取任务执行状态
      */
    FlowId: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 实例续费状态信息
 */
export interface InstanceRenewInfo {
    /**
      * 实例ID，形如mssql-j8kv137v
      */
    InstanceId: string;
    /**
      * 实例续费标记。0：正常续费，1：自动续费，2：到期不续
      */
    RenewFlag: number;
}
/**
 * 订单信息
 */
export interface DealInfo {
    /**
      * 订单名
      */
    DealName: string;
    /**
      * 商品数量
      */
    Count: number;
    /**
      * 关联的流程 ID，可用于查询流程执行状态
      */
    FlowId: number;
    /**
      * 只有创建实例的订单会填充该字段，表示该订单创建的实例的 ID。
      */
    InstanceIdSet: Array<string>;
    /**
      * 所属账号
      */
    OwnerUin: string;
    /**
      * 实例付费类型
      */
    InstanceChargeType: string;
}
/**
 * ModifyBackupStrategy请求参数结构体
 */
export interface ModifyBackupStrategyRequest {
    /**
      * 实例ID
      */
    InstanceId: string;
    /**
      * 备份类型，当前只支持按天备份，取值为daily
      */
    BackupType?: string;
    /**
      * 备份时间点，取值为0-23的整数
      */
    BackupTime?: number;
    /**
      * BackupType取值为daily时，表示备份间隔天数。当前取值只能为1
      */
    BackupDay?: number;
    /**
      * 备份模式，master_pkg-主节点上打包备份文件；master_no_pkg-主节点单库备份文件；slave_pkg-从节点上打包备份文件；slave_no_pkg-从节点上单库备份文件，从节点上备份只有在always on容灾模式下支持。
      */
    BackupModel?: string;
}
/**
 * RestoreInstance请求参数结构体
 */
export interface RestoreInstanceRequest {
    /**
      * 实例ID，形如mssql-j8kv137v
      */
    InstanceId: string;
    /**
      * 备份文件ID，该ID可以通过DescribeBackups接口返回数据中的Id字段获得
      */
    BackupId: number;
    /**
      * 备份恢复到的同一个APPID下的实例ID，不填则恢复到原实例ID
      */
    TargetInstanceId?: string;
    /**
      * 按照ReNameRestoreDatabase中的库进行恢复，并重命名，不填则按照默认方式命名恢复的库，且恢复所有的库。
      */
    RenameRestore?: Array<RenameRestoreDatabase>;
    /**
      * 备份任务组ID，在单库备份文件模式下，可通过[DescribeBackups](https://cloud.tencent.com/document/product/238/19943) 接口获得。
      */
    GroupId?: string;
}
/**
 * CreateBasicDBInstances返回参数结构体
 */
export interface CreateBasicDBInstancesResponse {
    /**
      * 订单名称
      */
    DealName?: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeAccounts请求参数结构体
 */
export interface DescribeAccountsRequest {
    /**
      * 实例ID
      */
    InstanceId: string;
    /**
      * 分页返回，每页返回的数目，取值为1-100，默认值为20
      */
    Limit?: number;
    /**
      * 分页返回，页编号，默认值为第0页
      */
    Offset?: number;
}
/**
 * DescribeMaintenanceSpan返回参数结构体
 */
export interface DescribeMaintenanceSpanResponse {
    /**
      * 以周为单位，表示周几允许维护，例如：[1,2,3,4,5,6,7]表示周一到周日均为可维护日。
      */
    Weekly: Array<number>;
    /**
      * 每天可维护的开始时间，例如：10:24标识可维护时间窗10点24分开始。
      */
    StartTime: string;
    /**
      * 每天可维护的持续时间，单位是h，例如：1 表示从可维护的开始时间起持续1小时。
      */
    Span: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CreatePublishSubscribe请求参数结构体
 */
export interface CreatePublishSubscribeRequest {
    /**
      * 发布实例ID，形如mssql-j8kv137v
      */
    PublishInstanceId: string;
    /**
      * 订阅实例ID，形如mssql-j8kv137v
      */
    SubscribeInstanceId: string;
    /**
      * 数据库的订阅发布关系集合
      */
    DatabaseTupleSet: Array<DatabaseTuple>;
    /**
      * 发布订阅的名称，默认值为：default_name
      */
    PublishSubscribeName?: string;
}
/**
 * CreateMigration返回参数结构体
 */
export interface CreateMigrationResponse {
    /**
      * 迁移任务ID
      */
    MigrateId: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * QueryMigrationCheckProcess请求参数结构体
 */
export interface QueryMigrationCheckProcessRequest {
    /**
      * 迁移任务ID
      */
    MigrateId: number;
}
/**
 * DeleteBackupMigration请求参数结构体
 */
export interface DeleteBackupMigrationRequest {
    /**
      * 目标实例ID，由DescribeBackupMigration接口返回
      */
    InstanceId: string;
    /**
      * 备份导入任务ID，由DescribeBackupMigration接口返回
      */
    BackupMigrationId: string;
}
/**
 * 该数据结构表示具有发布订阅关系的两个数据库。
 */
export interface DatabaseTuple {
    /**
      * 发布数据库名称
      */
    PublishDatabase: string;
    /**
      * 订阅数据库名称
      */
    SubscribeDatabase: string;
}
/**
 * 地域信息
 */
export interface RegionInfo {
    /**
      * 地域英文ID，类似ap-guanghou
      */
    Region: string;
    /**
      * 地域中文名称
      */
    RegionName: string;
    /**
      * 地域数字ID
      */
    RegionId: number;
    /**
      * 该地域目前是否可以售卖，UNAVAILABLE-不可售卖；AVAILABLE-可售卖
      */
    RegionState: string;
}
/**
 * ModifyBackupName返回参数结构体
 */
export interface ModifyBackupNameResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DeletePublishSubscribe请求参数结构体
 */
export interface DeletePublishSubscribeRequest {
    /**
      * 发布订阅ID，可通过DescribePublishSubscribe接口获得
      */
    PublishSubscribeId: number;
    /**
      * 待删除的数据库的订阅发布关系集合
      */
    DatabaseTupleSet: Array<DatabaseTuple>;
}
/**
 * ModifyMaintenanceSpan请求参数结构体
 */
export interface ModifyMaintenanceSpanRequest {
    /**
      * 实例ID，形如mssql-k8voqdlz
      */
    InstanceId: string;
    /**
      * 以周为单位，表示允许周几维护，例如：[1,2,3,4,5,6,7]表示周一到周日均为可维护日，本参数不填，则不修改此值。
      */
    Weekly?: Array<number>;
    /**
      * 每天可维护的开始时间，例如：10:24标识可维护时间窗10点24分开始，本参数不填，则不修改此值。
      */
    StartTime?: string;
    /**
      * 每天可维护的持续时间，单位是h，例如：1 表示从可维护的开始时间起持续1小时，本参数不填，则不修改此值。
      */
    Span?: number;
}
/**
 * AssociateSecurityGroups请求参数结构体
 */
export interface AssociateSecurityGroupsRequest {
    /**
      * 安全组ID。
      */
    SecurityGroupId: string;
    /**
      * 实例ID 列表，一个或者多个实例ID组成的数组。多个实例必须是同一个地域，同一个可用区，同一个项目下的。
      */
    InstanceIdSet: Array<string>;
}
/**
 * 该数据结构表示具有发布订阅关系的两个数据库，以及其之间发布订阅的状态信息。
 */
export interface DatabaseTupleStatus {
    /**
      * 发布数据库名称
      */
    PublishDatabase: string;
    /**
      * 订阅数据库名称
      */
    SubscribeDatabase: string;
    /**
      * 最近一次同步时间
      */
    LastSyncTime: string;
    /**
      * 数据库之间的发布订阅状态 running，success，fail，unknow
      */
    Status: string;
}
/**
 * StartBackupMigration返回参数结构体
 */
export interface StartBackupMigrationResponse {
    /**
      * 流程ID
      */
    FlowId: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ModifyReadOnlyGroupDetails返回参数结构体
 */
export interface ModifyReadOnlyGroupDetailsResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ModifyBackupStrategy返回参数结构体
 */
export interface ModifyBackupStrategyResponse {
    /**
      * 返回错误码
      */
    Errno: number;
    /**
      * 返回错误信息
      */
    Msg: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ModifyIncrementalMigration请求参数结构体
 */
export interface ModifyIncrementalMigrationRequest {
    /**
      * 导入目标实例ID
      */
    InstanceId: string;
    /**
      * 备份导入任务ID，由CreateBackupMigration接口返回
      */
    BackupMigrationId: string;
    /**
      * 增量导入任务ID，由CreateIncrementalMigration接口返回
      */
    IncrementalMigrationId: string;
    /**
      * 是否需要恢复，NO-不需要，YES-需要，默认不修改增量备份导入任务是否需要恢复的属性。
      */
    IsRecovery?: string;
    /**
      * UploadType是COS_URL时这里时URL，COS_UPLOAD这里填备份文件的名字；只支持1个备份文件，但1个备份文件内可包含多个库
      */
    BackupFiles?: Array<string>;
}
/**
 * DescribeDBSecurityGroups返回参数结构体
 */
export interface DescribeDBSecurityGroupsResponse {
    /**
      * 安全组详情。
      */
    SecurityGroupSet: Array<SecurityGroup>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 迁移的进度详情类型
 */
export interface MigrateDetail {
    /**
      * 当前环节的名称
      */
    StepName: string;
    /**
      * 当前环节的进度（单位是%）
      */
    Progress: number;
}
/**
 * CreateIncrementalMigration请求参数结构体
 */
export interface CreateIncrementalMigrationRequest {
    /**
      * 导入目标实例ID
      */
    InstanceId: string;
    /**
      * 备份导入任务ID，由CreateBackupMigration接口返回
      */
    BackupMigrationId: string;
    /**
      * 增量备份文件，全量备份任务UploadType是COS_URL时这里填URL，是COS_UPLOAD这里填备份文件的名字；只支持1个备份文件，但1个备份文件内可包含多个库
      */
    BackupFiles?: Array<string>;
    /**
      * 是否需要恢复，NO-不需要，YES-需要，默认不需要
      */
    IsRecovery?: string;
}
/**
 * RunMigration请求参数结构体
 */
export interface RunMigrationRequest {
    /**
      * 迁移任务ID
      */
    MigrateId: number;
}
/**
 * RunMigration返回参数结构体
 */
export interface RunMigrationResponse {
    /**
      * 迁移流程启动后，返回流程ID
      */
    FlowId?: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeProductConfig请求参数结构体
 */
export interface DescribeProductConfigRequest {
    /**
      * 可用区英文ID，形如ap-guangzhou-1
      */
    Zone: string;
    /**
      * 购买实例的类型 HA-高可用型(包括双机高可用，alwaysOn集群)，RO-只读副本型，SI-基础版本型
      */
    InstanceType?: string;
}
/**
 * ModifyPublishSubscribeName返回参数结构体
 */
export interface ModifyPublishSubscribeNameResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeCrossRegionZone请求参数结构体
 */
export interface DescribeCrossRegionZoneRequest {
    /**
      * 实例ID，格式如：mssql-3l3fgqn7
      */
    InstanceId: string;
}
/**
 * 实例参数修改记录
 */
export interface ParamRecord {
    /**
      * 实例ID
      */
    InstanceId: string;
    /**
      * 参数名称
      */
    ParamName: string;
    /**
      * 参数修改前的值
      */
    OldValue: string;
    /**
      * 参数修改后的值
      */
    NewValue: string;
    /**
      * 参数修改状态，1-初始化等待被执行，2-执行成功，3-执行失败，4-参数修改中
      */
    Status: number;
    /**
      * 修改时间
      */
    ModifyTime: string;
}
/**
 * RollbackInstance返回参数结构体
 */
export interface RollbackInstanceResponse {
    /**
      * 异步任务ID
      */
    FlowId: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DeleteIncrementalMigration请求参数结构体
 */
export interface DeleteIncrementalMigrationRequest {
    /**
      * 目标实例ID
      */
    InstanceId: string;
    /**
      * 备份导入任务ID，由CreateBackupMigration接口返回
      */
    BackupMigrationId: string;
    /**
      * 增量备份导入任务ID，由CreateIncrementalMigration接口返回
      */
    IncrementalMigrationId: string;
}
/**
 * 数据库备注信息
 */
export interface DBRemark {
    /**
      * 数据库名称
      */
    Name: string;
    /**
      * 备注信息
      */
    Remark: string;
}
/**
 * 需要迁移的DB列表
 */
export interface MigrateDB {
    /**
      * 迁移数据库的名称
      */
    DBName?: string;
}
/**
 * RestartDBInstance请求参数结构体
 */
export interface RestartDBInstanceRequest {
    /**
      * 数据库实例ID，形如mssql-njj2mtpl
      */
    InstanceId: string;
}
/**
 * DescribeReadOnlyGroupList返回参数结构体
 */
export interface DescribeReadOnlyGroupListResponse {
    /**
      * 只读组列表
      */
    ReadOnlyGroupSet?: Array<ReadOnlyGroup>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeRegions返回参数结构体
 */
export interface DescribeRegionsResponse {
    /**
      * 返回地域信息总的条目
      */
    TotalCount?: number;
    /**
      * 地域信息数组
      */
    RegionSet?: Array<RegionInfo>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeBackups请求参数结构体
 */
export interface DescribeBackupsRequest {
    /**
      * 开始时间(yyyy-MM-dd HH:mm:ss)
      */
    StartTime: string;
    /**
      * 结束时间(yyyy-MM-dd HH:mm:ss)
      */
    EndTime: string;
    /**
      * 实例ID，形如mssql-njj2mtpl
      */
    InstanceId: string;
    /**
      * 分页返回，每页返回的数目，取值为1-100，默认值为20
      */
    Limit?: number;
    /**
      * 分页返回，页编号，默认值为第0页
      */
    Offset?: number;
    /**
      * 按照备份名称筛选，不填则不筛选此项
      */
    BackupName?: string;
    /**
      * 按照备份策略筛选，0-实例备份，1-多库备份，不填则不筛选此项
      */
    Strategy?: number;
    /**
      * 按照备份方式筛选，0-后台自动定时备份，1-用户手动临时备份，不填则不筛选此项
      */
    BackupWay?: number;
    /**
      * 按照备份ID筛选，不填则不筛选此项
      */
    BackupId?: number;
    /**
      * 按照备份的库名称筛选，不填则不筛选此项
      */
    DatabaseName?: string;
    /**
      * 是否分组查询，默认是0，单库备份情况下 0-兼容老方式不分组，1-单库备份分组后展示
      */
    Group?: number;
}
/**
 * ModifyDBInstanceProject返回参数结构体
 */
export interface ModifyDBInstanceProjectResponse {
    /**
      * 修改成功的实例个数
      */
    Count?: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeRollbackTime返回参数结构体
 */
export interface DescribeRollbackTimeResponse {
    /**
      * 数据库可回档实例信息
      */
    Details: Array<DbRollbackTimeInfo>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeInstanceParamRecords返回参数结构体
 */
export interface DescribeInstanceParamRecordsResponse {
    /**
      * 符合条件的记录数
      */
    TotalCount: number;
    /**
      * 参数修改记录
      */
    Items: Array<ParamRecord>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeIncrementalMigration请求参数结构体
 */
export interface DescribeIncrementalMigrationRequest {
    /**
      * 备份导入任务ID，由CreateBackupMigration接口返回
      */
    BackupMigrationId: string;
    /**
      * 导入目标实例ID
      */
    InstanceId: string;
    /**
      * 备份文件名称
      */
    BackupFileName?: string;
    /**
      * 导入任务状态集合
      */
    StatusSet?: Array<number>;
    /**
      * 分页，页大小，默认值：100
      */
    Limit?: number;
    /**
      * 分页，页数，默认值：0
      */
    Offset?: number;
    /**
      * 排序字段，name；createTime；startTime；endTime，默认按照createTime递增排序。
      */
    OrderBy?: string;
    /**
      * 排序方式，desc-递减排序，asc-递增排序。默认按照asc排序，且在OrderBy为有效值时，本参数有效
      */
    OrderByType?: string;
    /**
      * 增量备份导入任务ID，由CreateIncrementalMigration接口返回
      */
    IncrementalMigrationId?: string;
}
/**
 * DescribeReadOnlyGroupByReadOnlyInstance返回参数结构体
 */
export interface DescribeReadOnlyGroupByReadOnlyInstanceResponse {
    /**
      * 只读组ID
      */
    ReadOnlyGroupId?: string;
    /**
      * 只读组名称
      */
    ReadOnlyGroupName?: string;
    /**
      * 只读组的地域ID
      */
    RegionId?: string;
    /**
      * 只读组的可用区ID
      */
    ZoneId?: string;
    /**
      * 是否启动超时剔除功能 ,0-不开启剔除功能，1-开启剔除功能
      */
    IsOfflineDelay?: number;
    /**
      * 启动超时剔除功能后，使用的超时阈值，单位是秒
      */
    ReadOnlyMaxDelayTime?: number;
    /**
      * 启动超时剔除功能后，只读组至少保留的只读副本数
      */
    MinReadOnlyInGroup?: number;
    /**
      * 只读组vip
      */
    Vip?: string;
    /**
      * 只读组vport
      */
    Vport?: number;
    /**
      * 只读组在私有网络ID
      */
    VpcId?: string;
    /**
      * 只读组在私有网络子网ID
      */
    SubnetId?: string;
    /**
      * 主实例ID，形如mssql-sgeshe3th
      */
    MasterInstanceId?: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * RestoreInstance返回参数结构体
 */
export interface RestoreInstanceResponse {
    /**
      * 异步流程任务ID，使用FlowId调用DescribeFlowStatus接口获取任务执行状态
      */
    FlowId: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 安全组策略
 */
export interface SecurityGroupPolicy {
    /**
      * 策略，ACCEPT 或者 DROP
      */
    Action: string;
    /**
      * 目的 IP 或 IP 段，例如172.16.0.0/12
      */
    CidrIp: string;
    /**
      * 端口或者端口范围
      */
    PortRange: string;
    /**
      * 网络协议，支持 UDP、TCP等
      */
    IpProtocol: string;
    /**
      * 规则限定的方向，OUTPUT-出战规则  INPUT-进站规则
      */
    Dir: string;
}
/**
 * 进度步骤详情
 */
export interface StepDetail {
    /**
      * 具体步骤返回信息
      */
    Msg: string;
    /**
      * 当前步骤状态，0成功，-2未开始
      */
    Status: number;
    /**
      * 步骤名称
      */
    Name: string;
}
/**
 * 实例参数的详细描述
 */
export interface ParameterDetail {
    /**
      * 参数名称
      */
    Name: string;
    /**
      * 参数类型，integer-整型，enum-枚举型
      */
    ParamType: string;
    /**
      * 参数默认值
      */
    Default: string;
    /**
      * 参数描述
      */
    Description: string;
    /**
      * 参数当前值
      */
    CurrentValue: string;
    /**
      * 修改参数后，是否需要重启数据库以使参数生效，0-不需要重启，1-需要重启
      */
    NeedReboot: number;
    /**
      * 参数允许的最大值
      */
    Max: number;
    /**
      * 参数允许的最小值
      */
    Min: number;
    /**
      * 参数允许的枚举类型
      */
    EnumValue: Array<string>;
    /**
      * 参数状态 0-状态正常 1-在修改中
      */
    Status: number;
}
/**
 * ModifyMaintenanceSpan返回参数结构体
 */
export interface ModifyMaintenanceSpanResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 可用区信息
 */
export interface ZoneInfo {
    /**
      * 可用区英文ID，形如ap-guangzhou-1，表示广州一区
      */
    Zone: string;
    /**
      * 可用区中文名称
      */
    ZoneName: string;
    /**
      * 可用区数字ID
      */
    ZoneId: number;
    /**
      * 该可用区目前可售卖的规格ID，利用SpecId，结合接口DescribeProductConfig返回的数据，可获悉该可用区目前可售卖的规格大小
      */
    SpecId: number;
    /**
      * 当前可用区与规格下，可售卖的数据库版本，形如2008R2（表示SQL Server 2008 R2）。其可选值有2008R2（表示SQL Server 2008 R2），2012SP3（表示SQL Server 2012），2016SP1（表示SQL Server 2016 SP1）
      */
    Version: string;
}
/**
 * InquiryPriceCreateDBInstances请求参数结构体
 */
export interface InquiryPriceCreateDBInstancesRequest {
    /**
      * 可用区ID。该参数可以通过调用 DescribeZones 接口的返回值中的Zone字段来获取。
      */
    Zone: string;
    /**
      * 内存大小，单位：GB
      */
    Memory: number;
    /**
      * 实例容量大小，单位：GB。
      */
    Storage: number;
    /**
      * 计费类型，取值支持 PREPAID，POSTPAID。
      */
    InstanceChargeType?: string;
    /**
      * 购买时长，单位：月。取值为1到48，默认为1
      */
    Period?: number;
    /**
      * 一次性购买的实例数量。取值1-100，默认取值为1
      */
    GoodsNum?: number;
    /**
      * sqlserver版本，目前只支持：2008R2（SQL Server 2008 Enterprise），2012SP3（SQL Server 2012 Enterprise），2016SP1（SQL Server 2016 Enterprise），201602（SQL Server 2016 Standard）2017（SQL Server 2017 Enterprise）版本。默认为2008R2版本
      */
    DBVersion?: string;
    /**
      * 预购买实例的CPU核心数
      */
    Cpu?: number;
    /**
      * 购买实例的类型 HA-高可用型(包括双机高可用，alwaysOn集群)，RO-只读副本，SI-基础版，默认取值HA
      */
    InstanceType?: string;
    /**
      * 购买实例的宿主机类型，PM-物理机, CLOUD_PREMIUM-虚拟机高性能云盘，CLOUD_SSD-虚拟机SSD云盘，默认取值PM
      */
    MachineType?: string;
}
/**
 * RenewPostpaidDBInstance请求参数结构体
 */
export interface RenewPostpaidDBInstanceRequest {
    /**
      * 实例ID，格式如：mssql-3l3fgqn7 或 mssqlro-3l3fgqn7
      */
    InstanceId: string;
}
/**
 * ModifyInstanceParam请求参数结构体
 */
export interface ModifyInstanceParamRequest {
    /**
      * 实例短 ID 列表
      */
    InstanceIds: Array<string>;
    /**
      * 要修改的参数列表。每一个元素是 Name 和 CurrentValue 的组合。Name 是参数名，CurrentValue 是要修改的值。<b>注意</b>：如果修改的参数需要<b>重启</b>实例，那么您的实例将会在执行修改时<b>重启</b>。您可以通过DescribeInstanceParams接口查询修改参数时是否会重启实例，以免导致您的实例不符合预期重启。
      */
    ParamList: Array<Parameter>;
    /**
      * 执行参数调整任务的方式，默认为 0。支持值包括：0 - 立刻执行，1 - 时间窗执行。
      */
    WaitSwitch?: number;
}
/**
 * 冷备迁移导入
 */
export interface Migration {
    /**
      * 备份导入任务ID 或 增量导入任务ID
      */
    MigrationId: string;
    /**
      * 备份导入名称，增量导入任务该字段为空
注意：此字段可能返回 null，表示取不到有效值。
      */
    MigrationName: string;
    /**
      * 应用ID
      */
    AppId: number;
    /**
      * 地域
      */
    Region: string;
    /**
      * 迁移目标实例ID
      */
    InstanceId: string;
    /**
      * 迁移任务恢复类型
      */
    RecoveryType: string;
    /**
      * 备份用户上传类型，COS_URL-备份放在用户的对象存储上，提供URL。COS_UPLOAD-备份放在业务的对象存储上，用户上传
      */
    UploadType: string;
    /**
      * 备份文件列表，UploadType确定，COS_URL则保存URL，COS_UPLOAD则保存备份名称
      */
    BackupFiles: Array<string>;
    /**
      * 迁移任务状态，2-创建完成，7-全量导入中，8-等待增量，9-导入成功，10-导入失败，12-增量导入中
      */
    Status: number;
    /**
      * 迁移任务创建时间
      */
    CreateTime: string;
    /**
      * 迁移任务开始时间
      */
    StartTime: string;
    /**
      * 迁移任务结束时间
      */
    EndTime: string;
    /**
      * 说明信息
      */
    Message: string;
    /**
      * 迁移细节
      */
    Detail: MigrationDetail;
    /**
      * 当前状态允许的操作
      */
    Action: MigrationAction;
    /**
      * 是否是最终恢复，全量导入任务该字段为空
注意：此字段可能返回 null，表示取不到有效值。
      */
    IsRecovery: string;
}
/**
 * ModifyDBInstanceNetwork请求参数结构体
 */
export interface ModifyDBInstanceNetworkRequest {
    /**
      * 实例id
      */
    InstanceId: string;
    /**
      * 新VPC网络Id
      */
    NewVpcId: string;
    /**
      * 新子网Id
      */
    NewSubnetId: string;
    /**
      * 原vip保留时长，单位小时，默认为0，代表立即回收，最大为168小时
      */
    OldIpRetainTime?: number;
    /**
      * 指定VIP地址
      */
    Vip?: string;
}
/**
 * 冷备导入任务迁移细节
 */
export interface MigrationDetail {
    /**
      * 总步骤数
      */
    StepAll: number;
    /**
      * 当前步骤
      */
    StepNow: number;
    /**
      * 总进度,如："30"表示30%
      */
    Progress: number;
    /**
      * 步骤信息，null表示还未开始迁移
注意：此字段可能返回 null，表示取不到有效值。
      */
    StepInfo: Array<MigrationStep>;
}
/**
 * DescribeBackupByFlowId返回参数结构体
 */
export interface DescribeBackupByFlowIdResponse {
    /**
      * 备份文件唯一标识，RestoreInstance接口会用到该字段，对于单库备份文件只返回第一条记录的备份文件唯一标识；单库备份文件需要通过DescribeBackupFiles接口获取全部记录的可回档的ID
      */
    Id: number;
    /**
      * 文件名，对于单库备份文件只返回第一条记录的文件名；单库备份文件需要通过DescribeBackupFiles接口获取全部记录的文件名
      */
    FileName: string;
    /**
      * 备份任务名称，可自定义
      */
    BackupName: string;
    /**
      * 备份开始时间
      */
    StartTime: string;
    /**
      * 备份结束时间
      */
    EndTime: string;
    /**
      * 文件大小，单位 KB，对于单库备份文件只返回第一条记录的文件大小；单库备份文件需要通过DescribeBackupFiles接口获取全部记录的文件大小
      */
    Size: number;
    /**
      * 备份策略，0-实例备份；1-多库备份；实例状态是0-创建中时，该字段为默认值0，无实际意义
      */
    Strategy: number;
    /**
      * 备份文件状态，0-创建中；1-成功；2-失败
      */
    Status: number;
    /**
      * 备份方式，0-定时备份；1-手动临时备份；实例状态是0-创建中时，该字段为默认值0，无实际意义
      */
    BackupWay: number;
    /**
      * DB列表，对于单库备份文件只返回第一条记录包含的库名；单库备份文件需要通过DescribeBackupFiles接口获取全部记录的库名。
      */
    DBs: Array<string>;
    /**
      * 内网下载地址，对于单库备份文件只返回第一条记录的内网下载地址；单库备份文件需要通过DescribeBackupFiles接口获取全部记录的下载地址
      */
    InternalAddr: string;
    /**
      * 外网下载地址，对于单库备份文件只返回第一条记录的外网下载地址；单库备份文件需要通过DescribeBackupFiles接口获取全部记录的下载地址
      */
    ExternalAddr: string;
    /**
      * 聚合Id，对于打包备份文件不返回此值。通过此值调用DescribeBackupFiles接口，获取单库备份文件的详细信息
      */
    GroupId: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * RecycleDBInstance请求参数结构体
 */
export interface RecycleDBInstanceRequest {
    /**
      * 实例ID
      */
    InstanceId: string;
}
/**
 * CompleteMigration返回参数结构体
 */
export interface CompleteMigrationResponse {
    /**
      * 完成迁移流程发起后，返回的流程id
      */
    FlowId?: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ResetAccountPassword返回参数结构体
 */
export interface ResetAccountPasswordResponse {
    /**
      * 修改帐号密码的异步任务流程ID
      */
    FlowId: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * StartMigrationCheck返回参数结构体
 */
export interface StartMigrationCheckResponse {
    /**
      * 迁移检查流程发起后，返回的流程id
      */
    FlowId?: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 查询迁移任务列表类型
 */
export interface MigrateTask {
    /**
      * 迁移任务ID
      */
    MigrateId: number;
    /**
      * 迁移任务名称
      */
    MigrateName: string;
    /**
      * 迁移任务所属的用户ID
      */
    AppId: number;
    /**
      * 迁移任务所属的地域
      */
    Region: string;
    /**
      * 迁移源的类型 1:TencentDB for SQLServer 2:云服务器自建SQLServer数据库 4:SQLServer备份还原 5:SQLServer备份还原（COS方式）
      */
    SourceType: number;
    /**
      * 迁移任务的创建时间
      */
    CreateTime: string;
    /**
      * 迁移任务的开始时间
      */
    StartTime: string;
    /**
      * 迁移任务的结束时间
      */
    EndTime: string;
    /**
      * 迁移任务的状态（1:初始化,4:迁移中,5.迁移失败,6.迁移成功,7已中止,8已删除,9中止中,10完成中,11中止失败,12完成失败）
      */
    Status: number;
    /**
      * 信息
      */
    Message: string;
    /**
      * 是否迁移任务经过检查（0:未校验,1:校验成功,2:校验失败,3:校验中）
      */
    CheckFlag: number;
    /**
      * 迁移任务当前进度（单位%）
      */
    Progress: number;
    /**
      * 迁移任务进度细节
      */
    MigrateDetail: MigrateDetail;
}
/**
 * 实例可售卖的规格信息
 */
export interface SpecInfo {
    /**
      * 实例规格ID，利用DescribeZones返回的SpecId，结合DescribeProductConfig返回的可售卖规格信息，可获悉某个可用区下可购买什么规格的实例
      */
    SpecId: number;
    /**
      * 机型ID
      */
    MachineType: string;
    /**
      * 机型中文名称
      */
    MachineTypeName: string;
    /**
      * 数据库版本信息。取值为2008R2（表示SQL Server 2008 R2），2012SP3（表示SQL Server 2012），2016SP1（表示SQL Server 2016 SP1）
      */
    Version: string;
    /**
      * Version字段对应的版本名称
      */
    VersionName: string;
    /**
      * 内存大小，单位GB
      */
    Memory: number;
    /**
      * CPU核数
      */
    CPU: number;
    /**
      * 此规格下最小的磁盘大小，单位GB
      */
    MinStorage: number;
    /**
      * 此规格下最大的磁盘大小，单位GB
      */
    MaxStorage: number;
    /**
      * 此规格对应的QPS大小
      */
    QPS: number;
    /**
      * 此规格的中文描述信息
      */
    SuitInfo: string;
    /**
      * 此规格对应的包年包月Pid
      */
    Pid: number;
    /**
      * 此规格对应的按量计费Pid列表
注意：此字段可能返回 null，表示取不到有效值。
      */
    PostPid: Array<number>;
    /**
      * 此规格下支持的付费模式，POST-仅支持按量计费 PRE-仅支持包年包月 ALL-支持所有
      */
    PayModeStatus: string;
    /**
      * 产品类型，HA-高可用型(包括双机高可用，alwaysOn集群)，RO-只读副本型，SI-基础版本型
      */
    InstanceType: string;
    /**
      * 跨可用区类型，MultiZones-只支持跨可用区，SameZones-只支持同可用区，ALL-支持所有
      */
    MultiZonesStatus: string;
}
/**
 * DescribeOrders返回参数结构体
 */
export interface DescribeOrdersResponse {
    /**
      * 订单信息数组
      */
    Deals?: Array<DealInfo>;
    /**
      * 返回多少个订单的信息
      */
    TotalCount?: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * InquiryPriceCreateDBInstances返回参数结构体
 */
export interface InquiryPriceCreateDBInstancesResponse {
    /**
      * 未打折前价格，其值除以100表示多少钱。例如10010表示100.10元
      */
    OriginalPrice?: number;
    /**
      * 实际需要支付的价格，其值除以100表示多少钱。例如10010表示100.10元
      */
    Price?: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CompleteMigration请求参数结构体
 */
export interface CompleteMigrationRequest {
    /**
      * 迁移任务ID
      */
    MigrateId: number;
}
/**
 * ModifyAccountPrivilege返回参数结构体
 */
export interface ModifyAccountPrivilegeResponse {
    /**
      * 异步任务流程ID
      */
    FlowId: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * RemoveBackups请求参数结构体
 */
export interface RemoveBackupsRequest {
    /**
      * 实例ID，形如mssql-j8kv137v
      */
    InstanceId: string;
    /**
      * 待删除的备份名称，备份名称可通过DescribeBackups接口的FileName字段获得。单次请求批量删除备份数不能超过10个。
      */
    BackupNames: Array<string>;
}
/**
 * 数据库创建信息
 */
export interface DBCreateInfo {
    /**
      * 数据库名
      */
    DBName: string;
    /**
      * 字符集。可通过接口DescribeDBCharsets查到支持的字符集，不填默认为Chinese_PRC_CI_AS。
      */
    Charset?: string;
    /**
      * 数据库账号权限信息
      */
    Accounts?: Array<AccountPrivilege>;
    /**
      * 备注
      */
    Remark?: string;
}
/**
 * ModifyMigration返回参数结构体
 */
export interface ModifyMigrationResponse {
    /**
      * 迁移任务ID
      */
    MigrateId?: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * RecycleReadOnlyGroup返回参数结构体
 */
export interface RecycleReadOnlyGroupResponse {
    /**
      * 任务流ID
      */
    FlowId?: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeZones返回参数结构体
 */
export interface DescribeZonesResponse {
    /**
      * 返回多少个可用区信息
      */
    TotalCount?: number;
    /**
      * 可用区数组
      */
    ZoneSet?: Array<ZoneInfo>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeDBs返回参数结构体
 */
export interface DescribeDBsResponse {
    /**
      * 数据库数量
      */
    TotalCount: number;
    /**
      * 实例数据库列表
      */
    DBInstances: Array<InstanceDBDetail>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeDBInstances请求参数结构体
 */
export interface DescribeDBInstancesRequest {
    /**
      * 项目ID
      */
    ProjectId?: number;
    /**
      * 实例状态。取值范围：
<li>1：申请中</li>
<li>2：运行中</li>
<li>3：受限运行中 (主备切换中)</li>
<li>4：已隔离</li>
<li>5：回收中</li>
<li>6：已回收</li>
<li>7：任务执行中 (实例做备份、回档等操作)</li>
<li>8：已下线</li>
<li>9：实例扩容中</li>
<li>10：实例迁移中</li>
<li>11：只读</li>
<li>12：重启中</li>
      */
    Status?: number;
    /**
      * 分页返回，页编号，默认值为第0页
      */
    Offset?: number;
    /**
      * 分页返回，每页返回的数目，取值为1-100，默认值为100
      */
    Limit?: number;
    /**
      * 一个或者多个实例ID。实例ID，格式如：mssql-si2823jyl
      */
    InstanceIdSet?: Array<string>;
    /**
      * 付费类型检索 1-包年包月，0-按量计费
      */
    PayMode?: number;
    /**
      * 实例所属VPC的唯一字符串ID，格式如：vpc-xxx，传空字符串(“”)则按照基础网络筛选。
      */
    VpcId?: string;
    /**
      * 实例所属子网的唯一字符串ID，格式如： subnet-xxx，传空字符串(“”)则按照基础网络筛选。
      */
    SubnetId?: string;
    /**
      * 实例内网地址列表，格式如：172.1.0.12
      */
    VipSet?: Array<string>;
    /**
      * 实例名称列表，模糊查询
      */
    InstanceNameSet?: Array<string>;
    /**
      * 实例版本代号列表，格式如：2008R2，2012SP3等
      */
    VersionSet?: Array<string>;
    /**
      * 实例可用区，格式如：ap-guangzhou-2
      */
    Zone?: string;
    /**
      * 实例标签列表
      */
    TagKeys?: Array<string>;
    /**
      * 模糊查询关键字，支持实例id、实例名、内网ip
      */
    SearchKey?: string;
    /**
      * 实例唯一Uid列表
      */
    UidSet?: Array<string>;
}
/**
 * DescribeDBSecurityGroups请求参数结构体
 */
export interface DescribeDBSecurityGroupsRequest {
    /**
      * 实例ID，格式如：mssql-c1nl9rpv或者mssqlro-c1nl9rpv，与云数据库控制台页面中显示的实例ID相同。
      */
    InstanceId: string;
}
/**
 * 慢查询日志文件信息
 */
export interface SlowlogInfo {
    /**
      * 慢查询日志文件唯一标识
      */
    Id: number;
    /**
      * 文件生成的开始时间
      */
    StartTime: string;
    /**
      * 文件生成的结束时间
      */
    EndTime: string;
    /**
      * 文件大小（KB）
      */
    Size: number;
    /**
      * 文件中log条数
      */
    Count: number;
    /**
      * 内网下载地址
      */
    InternalAddr: string;
    /**
      * 外网下载地址
      */
    ExternalAddr: string;
    /**
      * 状态（1成功 2失败）
注意：此字段可能返回 null，表示取不到有效值。
      */
    Status: number;
}
/**
 * ModifyAccountRemark返回参数结构体
 */
export interface ModifyAccountRemarkResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeMigrations返回参数结构体
 */
export interface DescribeMigrationsResponse {
    /**
      * 查询结果的总数
      */
    TotalCount?: number;
    /**
      * 查询结果的列表
      */
    MigrateTaskSet?: Array<MigrateTask>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeBackupFiles返回参数结构体
 */
export interface DescribeBackupFilesResponse {
    /**
      * 备份总数量
      */
    TotalCount: number;
    /**
      * 备份文件列表详情
      */
    BackupFiles: Array<BackupFile>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * RenewDBInstance请求参数结构体
 */
export interface RenewDBInstanceRequest {
    /**
      * 实例ID，形如mssql-j8kv137v
      */
    InstanceId: string;
    /**
      * 续费多少个月，取值范围为1-48，默认为1
      */
    Period?: number;
    /**
      * 是否自动使用代金券，0-不使用；1-使用；默认不实用
      */
    AutoVoucher?: number;
    /**
      * 代金券ID数组，目前只支持使用1张代金券
      */
    VoucherIds?: Array<string>;
    /**
      * 续费标记 0:正常续费 1:自动续费：只用于按量计费转包年包月时有效。
      */
    AutoRenewFlag?: number;
}
/**
 * DescribeZones请求参数结构体
 */
export declare type DescribeZonesRequest = null;
/**
 * DeleteDB请求参数结构体
 */
export interface DeleteDBRequest {
    /**
      * 实例ID，形如mssql-rljoi3bf
      */
    InstanceId: string;
    /**
      * 数据库名数组
      */
    Names: Array<string>;
}
/**
 * StartIncrementalMigration请求参数结构体
 */
export interface StartIncrementalMigrationRequest {
    /**
      * 导入目标实例ID
      */
    InstanceId: string;
    /**
      * 备份导入任务ID，由CreateBackupMigration接口返回
      */
    BackupMigrationId: string;
    /**
      * 增量备份导入任务ID
      */
    IncrementalMigrationId: string;
}
/**
 * DescribeProjectSecurityGroups返回参数结构体
 */
export interface DescribeProjectSecurityGroupsResponse {
    /**
      * 安全组详情。
      */
    SecurityGroupSet?: Array<SecurityGroup>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeCrossRegionZone返回参数结构体
 */
export interface DescribeCrossRegionZoneResponse {
    /**
      * 备机所在地域的字符串ID，形如：ap-guangzhou
      */
    Region?: string;
    /**
      * 备机所在可用区的字符串ID，形如：ap-guangzhou-1
      */
    Zone?: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ModifyDBInstanceRenewFlag返回参数结构体
 */
export interface ModifyDBInstanceRenewFlagResponse {
    /**
      * 修改成功的个数
      */
    Count?: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeMigrationDatabases返回参数结构体
 */
export interface DescribeMigrationDatabasesResponse {
    /**
      * 数据库数量
      */
    Amount?: number;
    /**
      * 数据库名称数组
      */
    MigrateDBSet?: Array<string>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CompleteExpansion返回参数结构体
 */
export interface CompleteExpansionResponse {
    /**
      * 流程ID，可通过接口DescribeFlowStatus查询立即切换升级任务的状态。
      */
    FlowId?: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 迁移任务的源类型
 */
export interface MigrateSource {
    /**
      * 迁移源实例的ID，MigrateType=1(TencentDB for SQLServers)时使用，格式如：mssql-si2823jyl
      */
    InstanceId?: string;
    /**
      * 迁移源Cvm的ID，MigrateType=2(云服务器自建SQLServer数据库)时使用
      */
    CvmId?: string;
    /**
      * 迁移源Cvm的Vpc网络标识，MigrateType=2(云服务器自建SQLServer数据库)时使用，格式如：vpc-6ys9ont9
      */
    VpcId?: string;
    /**
      * 迁移源Cvm的Vpc下的子网标识，MigrateType=2(云服务器自建SQLServer数据库)时使用，格式如：subnet-h9extioi
      */
    SubnetId?: string;
    /**
      * 用户名，MigrateType=1或MigrateType=2使用
      */
    UserName?: string;
    /**
      * 密码，MigrateType=1或MigrateType=2使用
      */
    Password?: string;
    /**
      * 迁移源Cvm自建库的内网IP，MigrateType=2(云服务器自建SQLServer数据库)时使用
      */
    Ip?: string;
    /**
      * 迁移源Cvm自建库的端口号，MigrateType=2(云服务器自建SQLServer数据库)时使用
      */
    Port?: number;
    /**
      * 离线迁移的源备份地址，MigrateType=4或MigrateType=5使用
      */
    Url?: Array<string>;
    /**
      * 离线迁移的源备份密码，MigrateType=4或MigrateType=5使用
      */
    UrlPassword?: string;
}
/**
 * ModifyDatabaseCT请求参数结构体
 */
export interface ModifyDatabaseCTRequest {
    /**
      * 数据库名数组
      */
    DBNames: Array<string>;
    /**
      * 启用、禁用数据库CT功能 enable；启用，disable：禁用
      */
    ModifyType: string;
    /**
      * 实例ID
      */
    InstanceId: string;
    /**
      * 启用CT时额外保留天数，默认保留3天，最小3天，最大30天
      */
    ChangeRetentionDay?: number;
}
/**
 * ModifyBackupMigration返回参数结构体
 */
export interface ModifyBackupMigrationResponse {
    /**
      * 备份导入任务ID
      */
    BackupMigrationId: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 只读组对象
 */
export interface ReadOnlyGroup {
    /**
      * 只读组ID
      */
    ReadOnlyGroupId: string;
    /**
      * 只读组名称
      */
    ReadOnlyGroupName: string;
    /**
      * 只读组的地域ID，与主实例相同
      */
    RegionId: string;
    /**
      * 只读组的可用区ID，与主实例相同
      */
    ZoneId: string;
    /**
      * 是否启动超时剔除功能，0-不开启剔除功能，1-开启剔除功能
      */
    IsOfflineDelay: number;
    /**
      * 启动超时剔除功能后，使用的超时阈值
      */
    ReadOnlyMaxDelayTime: number;
    /**
      * 启动超时剔除功能后，只读组至少保留的只读副本数
      */
    MinReadOnlyInGroup: number;
    /**
      * 只读组vip
      */
    Vip: string;
    /**
      * 只读组vport
      */
    Vport: number;
    /**
      * 只读组私有网络ID
      */
    VpcId: string;
    /**
      * 只读组私有网络子网ID
      */
    SubnetId: string;
    /**
      * 只读组状态: 1-申请成功运行中，5-申请中
      */
    Status: number;
    /**
      * 主实例ID，形如mssql-sgeshe3th
      */
    MasterInstanceId: string;
    /**
      * 只读实例副本集合
      */
    ReadOnlyInstanceSet: Array<ReadOnlyInstance>;
}
/**
 * DescribeFlowStatus返回参数结构体
 */
export interface DescribeFlowStatusResponse {
    /**
      * 流程状态，0：成功，1：失败，2：运行中
      */
    Status?: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * QueryMigrationCheckProcess返回参数结构体
 */
export interface QueryMigrationCheckProcessResponse {
    /**
      * 总步骤数量
      */
    TotalStep?: number;
    /**
      * 当前步骤编号，从1开始
      */
    CurrentStep?: number;
    /**
      * 所有步骤详情
      */
    StepDetails?: Array<StepDetail>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CreateReadOnlyDBInstances请求参数结构体
 */
export interface CreateReadOnlyDBInstancesRequest {
    /**
      * 主实例ID，格式如：mssql-3l3fgqn7
      */
    InstanceId: string;
    /**
      * 实例可用区，类似ap-guangzhou-1（广州一区）；实例可售卖区域可以通过接口DescribeZones获取
      */
    Zone: string;
    /**
      * 只读组类型选项，1-按照一个实例一个只读组的方式发货，2-新建只读组后发货，所有实例都在这个只读组下面， 3-发货的所有实例都在已有的只读组下面
      */
    ReadOnlyGroupType: number;
    /**
      * 实例内存大小，单位GB
      */
    Memory: number;
    /**
      * 实例磁盘大小，单位GB
      */
    Storage: number;
    /**
      * 0-默认不升级主实例，1-强制升级主实例完成ro部署；主实例为非集群版时需要填1，强制升级为集群版。填1 说明您已同意将主实例升级到集群版实例。
      */
    ReadOnlyGroupForcedUpgrade?: number;
    /**
      * ReadOnlyGroupType=3时必填,已存在的只读组ID
      */
    ReadOnlyGroupId?: string;
    /**
      * ReadOnlyGroupType=2时必填，新建的只读组名称
      */
    ReadOnlyGroupName?: string;
    /**
      * ReadOnlyGroupType=2时必填，新建的只读组是否开启延迟剔除功能，1-开启，0-关闭。当只读副本与主实例延迟大于阈值后，自动剔除。
      */
    ReadOnlyGroupIsOfflineDelay?: number;
    /**
      * ReadOnlyGroupType=2 且 ReadOnlyGroupIsOfflineDelay=1时必填，新建的只读组延迟剔除的阈值。
      */
    ReadOnlyGroupMaxDelayTime?: number;
    /**
      * ReadOnlyGroupType=2 且 ReadOnlyGroupIsOfflineDelay=1时必填，新建的只读组延迟剔除后至少保留只读副本的个数。
      */
    ReadOnlyGroupMinInGroup?: number;
    /**
      * 付费模式，取值支持 PREPAID（预付费），POSTPAID（后付费）。
      */
    InstanceChargeType?: string;
    /**
      * 本次购买几个只读实例，默认值为1。
      */
    GoodsNum?: number;
    /**
      * VPC子网ID，形如subnet-bdoe83fa；SubnetId和VpcId需同时设置或者同时不设置
      */
    SubnetId?: string;
    /**
      * VPC网络ID，形如vpc-dsp338hz；SubnetId和VpcId需同时设置或者同时不设置
      */
    VpcId?: string;
    /**
      * 购买实例周期，默认取值为1，表示一个月。取值不超过48
      */
    Period?: number;
    /**
      * 安全组列表，填写形如sg-xxx的安全组ID
      */
    SecurityGroupList?: Array<string>;
    /**
      * 是否自动使用代金券；1 - 是，0 - 否，默认不使用
      */
    AutoVoucher?: number;
    /**
      * 代金券ID数组，目前单个订单只能使用一张
      */
    VoucherIds?: Array<string>;
    /**
      * 新建实例绑定的标签集合
      */
    ResourceTags?: Array<ResourceTag>;
}
/**
 * ModifyAccountPrivilege请求参数结构体
 */
export interface ModifyAccountPrivilegeRequest {
    /**
      * 数据库实例ID，形如mssql-njj2mtpl
      */
    InstanceId: string;
    /**
      * 账号权限变更信息
      */
    Accounts: Array<AccountPrivilegeModifyInfo>;
}
/**
 * CreateBackupMigration请求参数结构体
 */
export interface CreateBackupMigrationRequest {
    /**
      * 导入目标实例ID
      */
    InstanceId: string;
    /**
      * 迁移任务恢复类型，FULL-全量备份恢复，FULL_LOG-全量备份+事务日志恢复，FULL_DIFF-全量备份+差异备份恢复
      */
    RecoveryType: string;
    /**
      * 备份上传类型，COS_URL-备份放在用户的对象存储上，提供URL。COS_UPLOAD-备份放在业务的对象存储上，需要用户上传。
      */
    UploadType: string;
    /**
      * 任务名称
      */
    MigrationName: string;
    /**
      * UploadType是COS_URL时这里填URL，COS_UPLOAD这里填备份文件的名字。只支持1个备份文件，但1个备份文件内可包含多个库
      */
    BackupFiles?: Array<string>;
}
/**
 * DescribeDBsNormal返回参数结构体
 */
export interface DescribeDBsNormalResponse {
    /**
      * 表示当前实例下的数据库总个数
      */
    TotalCount: number;
    /**
      * 返回数据库的详细配置信息，例如：数据库是否开启CDC、CT等
      */
    DBList: Array<DbNormalDetail>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeMigrations请求参数结构体
 */
export interface DescribeMigrationsRequest {
    /**
      * 状态集合。只要符合集合中某一状态的迁移任务，就会查出来
      */
    StatusSet?: Array<number>;
    /**
      * 迁移任务的名称，模糊匹配
      */
    MigrateName?: string;
    /**
      * 分页返回，每页返回的数目，取值为1-100，默认值为100
      */
    Limit?: number;
    /**
      * 分页返回，页编号，默认值为第0页
      */
    Offset?: number;
    /**
      * 查询结果按照关键字排序，可选值为name、createTime、startTime，endTime，status
      */
    OrderBy?: string;
    /**
      * 排序方式，可选值为desc、asc
      */
    OrderByType?: string;
}
/**
 * DescribeDBCharsets请求参数结构体
 */
export interface DescribeDBCharsetsRequest {
    /**
      * 实例ID，形如mssql-j8kv137v
      */
    InstanceId: string;
}
/**
 * DescribeInstanceParamRecords请求参数结构体
 */
export interface DescribeInstanceParamRecordsRequest {
    /**
      * 实例 ID，格式如：mssql-dj5i29c5n，与云数据库控制台页面中显示的实例 ID 相同，可使用 DescribeDBInstances 接口获取，其值为输出参数中字段 InstanceId 的值。
      */
    InstanceId: string;
    /**
      * 分页，页数，默认0
      */
    Offset?: number;
    /**
      * 分页，页大小，默认20，最大不超过100
      */
    Limit?: number;
}
/**
 * DescribeFlowStatus请求参数结构体
 */
export interface DescribeFlowStatusRequest {
    /**
      * 流程ID
      */
    FlowId: number;
}
/**
 * DescribeDBs请求参数结构体
 */
export interface DescribeDBsRequest {
    /**
      * 实例ID
      */
    InstanceIdSet: Array<string>;
    /**
      * 分页返回，每页返回的数目，取值为1-100，默认值为20
      */
    Limit?: number;
    /**
      * 分页返回，页编号，默认值为第0页
      */
    Offset?: number;
}
/**
 * CompleteExpansion请求参数结构体
 */
export interface CompleteExpansionRequest {
    /**
      * 实例ID，形如mssql-j8kv137v
      */
    InstanceId: string;
}
/**
 * ModifyDatabaseMdf请求参数结构体
 */
export interface ModifyDatabaseMdfRequest {
    /**
      * 数据库名数组
      */
    DBNames: Array<string>;
    /**
      * 实例ID
      */
    InstanceId: string;
}
/**
 * DeleteIncrementalMigration返回参数结构体
 */
export interface DeleteIncrementalMigrationResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeRegions请求参数结构体
 */
export declare type DescribeRegionsRequest = null;
/**
 * DescribeMaintenanceSpan请求参数结构体
 */
export interface DescribeMaintenanceSpanRequest {
    /**
      * 实例ID，形如mssql-k8voqdlz
      */
    InstanceId: string;
}
/**
 * 数据库账号权限信息。创建数据库时设置
 */
export interface AccountPrivilege {
    /**
      * 数据库用户名
      */
    UserName: string;
    /**
      * 数据库权限。ReadWrite表示可读写，ReadOnly表示只读
      */
    Privilege: string;
}
/**
 * StopMigration请求参数结构体
 */
export interface StopMigrationRequest {
    /**
      * 迁移任务ID
      */
    MigrateId: number;
}
/**
 * CreateReadOnlyDBInstances返回参数结构体
 */
export interface CreateReadOnlyDBInstancesResponse {
    /**
      * 订单名称数组
      */
    DealNames?: Array<string>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DeleteMigration请求参数结构体
 */
export interface DeleteMigrationRequest {
    /**
      * 迁移任务ID
      */
    MigrateId: number;
}
/**
 * DescribeInstanceParams请求参数结构体
 */
export interface DescribeInstanceParamsRequest {
    /**
      * 实例 ID，格式如：mssql-dj5i29c5n，与云数据库控制台页面中显示的实例 ID 相同，可使用 DescribeDBInstances 接口获取，其值为输出参数中字段 InstanceId 的值。
      */
    InstanceId: string;
}
/**
 * DescribeMigrationDetail请求参数结构体
 */
export interface DescribeMigrationDetailRequest {
    /**
      * 迁移任务ID
      */
    MigrateId: number;
}
/**
 * ModifyDBInstanceSecurityGroups请求参数结构体
 */
export interface ModifyDBInstanceSecurityGroupsRequest {
    /**
      * 实例 ID，格式如：mssql-c1nl9rpv 或者 mssqlro-c1nl9rpv，与云数据库控制台页面中显示的实例 ID 相同。
      */
    InstanceId: string;
    /**
      * 要修改的安全组 ID 列表，一个或者多个安全组 ID 组成的数组。
      */
    SecurityGroupIdSet: Array<string>;
}
/**
 * 数据库权限变更信息
 */
export interface DBPrivilegeModifyInfo {
    /**
      * 数据库名
      */
    DBName: string;
    /**
      * 权限变更信息。ReadWrite表示可读写，ReadOnly表示只读，Delete表示删除账号对该DB的权限
      */
    Privilege: string;
}
/**
 * RemoveBackups返回参数结构体
 */
export interface RemoveBackupsResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * TerminateDBInstance请求参数结构体
 */
export interface TerminateDBInstanceRequest {
    /**
      * 主动销毁的实例ID列表，格式如：[mssql-3l3fgqn7]。与云数据库控制台页面中显示的实例ID相同
      */
    InstanceIdSet: Array<string>;
}
/**
 * DescribeUploadIncrementalInfo返回参数结构体
 */
export interface DescribeUploadIncrementalInfoResponse {
    /**
      * 存储桶名称
      */
    BucketName: string;
    /**
      * 存储桶地域信息
      */
    Region: string;
    /**
      * 存储路径
      */
    Path: string;
    /**
      * 临时密钥ID
      */
    TmpSecretId: string;
    /**
      * 临时密钥Key
      */
    TmpSecretKey: string;
    /**
      * 临时密钥Token
      */
    XCosSecurityToken: string;
    /**
      * 临时密钥开始时间
      */
    StartTime: string;
    /**
      * 临时密钥到期时间
      */
    ExpiredTime: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CreateDB请求参数结构体
 */
export interface CreateDBRequest {
    /**
      * 实例ID
      */
    InstanceId: string;
    /**
      * 数据库创建信息
      */
    DBs: Array<DBCreateInfo>;
}
/**
 * ModifyDBInstanceSecurityGroups返回参数结构体
 */
export interface ModifyDBInstanceSecurityGroupsResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeProjectSecurityGroups请求参数结构体
 */
export interface DescribeProjectSecurityGroupsRequest {
    /**
      * 项目ID，可通过控制台项目管理中查看
      */
    ProjectId: number;
}
/**
 * 实例的数据库信息
 */
export interface InstanceDBDetail {
    /**
      * 实例ID
      */
    InstanceId: string;
    /**
      * 数据库信息列表
      */
    DBDetails: Array<DBDetail>;
}
/**
 * 安全组
 */
export interface SecurityGroup {
    /**
      * 项目ID
      */
    ProjectId: number;
    /**
      * 创建时间，时间格式：yyyy-mm-dd hh:mm:ss
      */
    CreateTime: string;
    /**
      * 入站规则
      */
    InboundSet: Array<SecurityGroupPolicy>;
    /**
      * 出站规则
      */
    OutboundSet: Array<SecurityGroupPolicy>;
    /**
      * 安全组ID
      */
    SecurityGroupId: string;
    /**
      * 安全组名称
      */
    SecurityGroupName: string;
    /**
      * 安全组备注
      */
    SecurityGroupRemark: string;
}
/**
 * DescribeBackupFiles请求参数结构体
 */
export interface DescribeBackupFilesRequest {
    /**
      * 实例ID，形如mssql-njj2mtpl
      */
    InstanceId: string;
    /**
      * 聚合ID, 可通过接口DescribeBackups获取
      */
    GroupId: string;
    /**
      * 分页返回，每页返回的数目，取值为1-100，默认值为20
      */
    Limit?: number;
    /**
      * 分页返回，页编号，默认值为第0页
      */
    Offset?: number;
    /**
      * 按照备份的库名称筛选，不填则不筛选此项
      */
    DatabaseName?: string;
}
/**
 * 用于RestoreInstance，RollbackInstance，CreateMigration、CloneDB 等接口；对恢复的库进行重命名，且支持选择要恢复的库。
 */
export interface RenameRestoreDatabase {
    /**
      * 库的名字，如果oldName不存在则返回失败。
在用于离线迁移任务时可不填。
      */
    OldName?: string;
    /**
      * 库的新名字，在用于离线迁移时，不填则按照OldName命名，OldName和NewName不能同时不填。在用于克隆数据库时，OldName和NewName都必须填写，且不能重复
      */
    NewName?: string;
}
/**
 * 只读副本实例
 */
export interface ReadOnlyInstance {
    /**
      * 只读副本ID，格式如：mssqlro-3l3fgqn7
      */
    InstanceId: string;
    /**
      * 只读副本名称
      */
    Name: string;
    /**
      * 只读副本唯一UID
      */
    Uid: string;
    /**
      * 只读副本所在项目ID
      */
    ProjectId: number;
    /**
      * 只读副本状态。1：申请中 2：运行中 3：被延迟剔除 4：已隔离 5：回收中 6：已回收 7：任务执行中 8：已下线 9：实例扩容中 10：实例迁移中  12：重启中
      */
    Status: number;
    /**
      * 只读副本创建时间
      */
    CreateTime: string;
    /**
      * 只读副本更新时间
      */
    UpdateTime: string;
    /**
      * 只读副本内存大小，单位G
      */
    Memory: number;
    /**
      * 只读副本存储空间大小，单位G
      */
    Storage: number;
    /**
      * 只读副本cpu核心数
      */
    Cpu: number;
    /**
      * 只读副本版本代号
      */
    Version: string;
    /**
      * 宿主机代号
      */
    Type: string;
    /**
      * 只读副本模式，2-单机
      */
    Model: number;
    /**
      * 只读副本计费模式，1-包年包月，0-按量计费
      */
    PayMode: number;
    /**
      * 只读副本权重
      */
    Weight: number;
    /**
      * 只读副本延迟时间，单位秒
      */
    DelayTime: string;
    /**
      * 只读副本与主实例的同步状态。
Init:初始化
DeployReadOnlyInPorgress:部署副本进行中
DeployReadOnlySuccess:部署副本成功
DeployReadOnlyFail:部署副本失败
DeployMasterDBInPorgress:主节点上加入副本数据库进行中
DeployMasterDBSuccess:主节点上加入副本数据库成功
DeployMasterDBFail:主节点上加入副本数据库进失败
DeployReadOnlyDBInPorgress:副本还原加入数据库开始
DeployReadOnlyDBSuccess:副本还原加入数据库成功
DeployReadOnlyDBFail:副本还原加入数据库失败
SyncDelay:同步延迟
SyncFail:同步故障
SyncExcluded:已剔除只读组
SyncNormal:正常
      */
    SynStatus: string;
    /**
      * 只读副本与主实例没有同步的库
      */
    DatabaseDifference: string;
    /**
      * 只读副本与主实例没有同步的账户
      */
    AccountDifference: string;
    /**
      * 只读副本计费开始时间
      */
    StartTime: string;
    /**
      * 只读副本计费结束时间
      */
    EndTime: string;
    /**
      * 只读副本隔离时间
      */
    IsolateTime: string;
}
/**
 * InquiryPriceUpgradeDBInstance请求参数结构体
 */
export interface InquiryPriceUpgradeDBInstanceRequest {
    /**
      * 实例ID，形如mssql-njj2mtpl
      */
    InstanceId: string;
    /**
      * 实例升级后的内存大小，单位GB，其值不能比当前实例内存小
      */
    Memory: number;
    /**
      * 实例升级后的磁盘大小，单位GB，其值不能比当前实例磁盘小
      */
    Storage: number;
    /**
      * 实例升级后的CPU核心数，其值不能比当前实例CPU小
      */
    Cpu?: number;
}
/**
 * ModifyDBRemark请求参数结构体
 */
export interface ModifyDBRemarkRequest {
    /**
      * 实例ID，形如mssql-rljoi3bf
      */
    InstanceId: string;
    /**
      * 数据库名称及备注数组，每个元素包含数据库名和对应的备注
      */
    DBRemarks: Array<DBRemark>;
}
/**
 * 只读实例与权重对应关系
 */
export interface ReadOnlyInstanceWeightPair {
    /**
      * 只读实例ID，格式如：mssqlro-3l3fgqn7
      */
    ReadOnlyInstanceId: string;
    /**
      * 只读实例权重 ，范围是0-100
      */
    ReadOnlyWeight: number;
}
/**
 * ModifyDBInstanceName请求参数结构体
 */
export interface ModifyDBInstanceNameRequest {
    /**
      * 数据库实例ID，形如mssql-njj2mtpl
      */
    InstanceId: string;
    /**
      * 新的数据库实例名字
      */
    InstanceName: string;
}
/**
 * 实例账号密码信息
 */
export interface AccountPassword {
    /**
      * 用户名
      */
    UserName: string;
    /**
      * 密码
      */
    Password: string;
}
/**
 * DescribeSlowlogs请求参数结构体
 */
export interface DescribeSlowlogsRequest {
    /**
      * 实例ID，形如mssql-k8voqdlz
      */
    InstanceId: string;
    /**
      * 查询开始时间
      */
    StartTime: string;
    /**
      * 查询结束时间
      */
    EndTime: string;
    /**
      * 分页返回，每页返回的数目，取值为1-100，默认值为20
      */
    Limit?: number;
    /**
      * 分页返回，页编号，默认值为第0页
      */
    Offset?: number;
}
/**
 * DeleteMigration返回参数结构体
 */
export interface DeleteMigrationResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeBackupMigration请求参数结构体
 */
export interface DescribeBackupMigrationRequest {
    /**
      * 导入目标实例ID
      */
    InstanceId: string;
    /**
      * 备份导入任务ID，由CreateBackupMigration接口返回
      */
    BackupMigrationId?: string;
    /**
      * 导入任务名称
      */
    MigrationName?: string;
    /**
      * 备份文件名称
      */
    BackupFileName?: string;
    /**
      * 导入任务状态集合
      */
    StatusSet?: Array<number>;
    /**
      * 导入任务恢复类型，FULL,FULL_LOG,FULL_DIFF
      */
    RecoveryType?: string;
    /**
      * COS_URL-备份放在用户的对象存储上，提供URL。COS_UPLOAD-备份放在业务的对象存储上，用户上传
      */
    UploadType?: string;
    /**
      * 分页，页大小，默认值：100
      */
    Limit?: number;
    /**
      * 分页，页数，默认值：0
      */
    Offset?: number;
    /**
      * 排序字段，name；createTime；startTime；endTime，默认按照createTime递增排序。
      */
    OrderBy?: string;
    /**
      * 排序方式，desc-递减排序，asc-递增排序。默认按照asc排序，且在OrderBy为有效值时，本参数有效
      */
    OrderByType?: string;
}
/**
 * RecycleReadOnlyGroup请求参数结构体
 */
export interface RecycleReadOnlyGroupRequest {
    /**
      * 主实例的ID
      */
    InstanceId: string;
    /**
      * 只读组的ID
      */
    ReadOnlyGroupId: string;
}
/**
 * DescribeUploadIncrementalInfo请求参数结构体
 */
export interface DescribeUploadIncrementalInfoRequest {
    /**
      * 导入目标实例ID
      */
    InstanceId: string;
    /**
      * 备份导入任务ID，由CreateBackupMigration接口返回
      */
    BackupMigrationId: string;
    /**
      * 增量导入任务ID
      */
    IncrementalMigrationId: string;
}
/**
 * DescribeBackupUploadSize返回参数结构体
 */
export interface DescribeBackupUploadSizeResponse {
    /**
      * 已上传的备份的信息
      */
    CosUploadBackupFileSet: Array<CosUploadBackupFile>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ModifyDatabaseCDC请求参数结构体
 */
export interface ModifyDatabaseCDCRequest {
    /**
      * 数据库名数组
      */
    DBNames: Array<string>;
    /**
      * 开启、关闭数据库CDC功能 enable；开启，disable：关闭
      */
    ModifyType: string;
    /**
      * 实例ID
      */
    InstanceId: string;
}
/**
 * ModifyInstanceParam返回参数结构体
 */
export interface ModifyInstanceParamResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * InquiryPriceRenewDBInstance请求参数结构体
 */
export interface InquiryPriceRenewDBInstanceRequest {
    /**
      * 实例ID
      */
    InstanceId: string;
    /**
      * 续费周期。按月续费最多48个月。默认查询续费一个月的价格
      */
    Period?: number;
    /**
      * 续费周期单位。month表示按月续费，当前只支持按月付费查询价格
      */
    TimeUnit?: string;
}
/**
 * StartIncrementalMigration返回参数结构体
 */
export interface StartIncrementalMigrationResponse {
    /**
      * 流程ID
      */
    FlowId: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * TerminateDBInstance返回参数结构体
 */
export interface TerminateDBInstanceResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ModifyDatabaseCT返回参数结构体
 */
export interface ModifyDatabaseCTResponse {
    /**
      * 流程ID
      */
    FlowId: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 数据库可回档时间范围信息
 */
export interface DbRollbackTimeInfo {
    /**
      * 数据库名称
      */
    DBName: string;
    /**
      * 可回档开始时间
      */
    StartTime: string;
    /**
      * 可回档结束时间
      */
    EndTime: string;
}
/**
 * ModifyDBInstanceNetwork返回参数结构体
 */
export interface ModifyDBInstanceNetworkResponse {
    /**
      * 实例转网流程id，可通过[DescribeFlowStatus](https://cloud.tencent.com/document/product/238/19967)接口查询流程状态
      */
    FlowId: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * AssociateSecurityGroups返回参数结构体
 */
export interface AssociateSecurityGroupsResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 账户信息详情
 */
export interface AccountDetail {
    /**
      * 账户名
      */
    Name: string;
    /**
      * 账户备注
      */
    Remark: string;
    /**
      * 账户创建时间
      */
    CreateTime: string;
    /**
      * 账户状态，1-创建中，2-正常，3-修改中，4-密码重置中，-1-删除中
      */
    Status: number;
    /**
      * 账户更新时间
      */
    UpdateTime: string;
    /**
      * 密码更新时间
      */
    PassTime: string;
    /**
      * 账户内部状态，正常为enable
      */
    InternalStatus: string;
    /**
      * 该账户对相关db的读写权限信息
      */
    Dbs: Array<DBPrivilege>;
    /**
      * 是否为管理员账户
      */
    IsAdmin: boolean;
}
/**
 * ModifyDatabaseMdf返回参数结构体
 */
export interface ModifyDatabaseMdfResponse {
    /**
      * 流程ID
      */
    FlowId: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CreateBackup返回参数结构体
 */
export interface CreateBackupResponse {
    /**
      * 异步任务ID
      */
    FlowId: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 实例详细信息
 */
export interface DBInstance {
    /**
      * 实例ID
      */
    InstanceId: string;
    /**
      * 实例名称
      */
    Name: string;
    /**
      * 实例所在项目ID
      */
    ProjectId: number;
    /**
      * 实例所在地域ID
      */
    RegionId: number;
    /**
      * 实例所在可用区ID
      */
    ZoneId: number;
    /**
      * 实例所在私有网络ID，基础网络时为 0
      */
    VpcId: number;
    /**
      * 实例所在私有网络子网ID，基础网络时为 0
      */
    SubnetId: number;
    /**
      * 实例状态。取值范围： <li>1：申请中</li> <li>2：运行中</li> <li>3：受限运行中 (主备切换中)</li> <li>4：已隔离</li> <li>5：回收中</li> <li>6：已回收</li> <li>7：任务执行中 (实例做备份、回档等操作)</li> <li>8：已下线</li> <li>9：实例扩容中</li> <li>10：实例迁移中</li> <li>11：只读</li> <li>12：重启中</li>  <li>13：实例修改中且待切换</li> <li>14：订阅发布创建中</li> <li>15：订阅发布修改中</li> <li>16：实例修改中且切换中</li> <li>17：创建RO副本中</li>
      */
    Status: number;
    /**
      * 实例访问IP
      */
    Vip: string;
    /**
      * 实例访问端口
      */
    Vport: number;
    /**
      * 实例创建时间
      */
    CreateTime: string;
    /**
      * 实例更新时间
      */
    UpdateTime: string;
    /**
      * 实例计费开始时间
      */
    StartTime: string;
    /**
      * 实例计费结束时间
      */
    EndTime: string;
    /**
      * 实例隔离时间
      */
    IsolateTime: string;
    /**
      * 实例内存大小，单位G
      */
    Memory: number;
    /**
      * 实例已经使用存储空间大小，单位G
      */
    UsedStorage: number;
    /**
      * 实例存储空间大小，单位G
      */
    Storage: number;
    /**
      * 实例版本
      */
    VersionName: string;
    /**
      * 实例续费标记，0-正常续费，1-自动续费，2-到期不续费
      */
    RenewFlag: number;
    /**
      * 实例高可用， 1-双机高可用，2-单机，3-跨可用区，4-集群跨可用区，5-集群，9-自研机房
      */
    Model: number;
    /**
      * 实例所在地域名称，如 ap-guangzhou
      */
    Region: string;
    /**
      * 实例所在可用区名称，如 ap-guangzhou-1
      */
    Zone: string;
    /**
      * 备份时间点
      */
    BackupTime: string;
    /**
      * 实例付费模式， 0-按量计费，1-包年包月
      */
    PayMode: number;
    /**
      * 实例唯一UID
      */
    Uid: string;
    /**
      * 实例cpu核心数
      */
    Cpu: number;
    /**
      * 实例版本代号
      */
    Version: string;
    /**
      * 物理机代号
      */
    Type: string;
    /**
      * 计费ID
      */
    Pid: number;
    /**
      * 实例所属VPC的唯一字符串ID，格式如：vpc-xxx，基础网络时为空字符串
      */
    UniqVpcId: string;
    /**
      * 实例所属子网的唯一字符串ID，格式如： subnet-xxx，基础网络时为空字符串
      */
    UniqSubnetId: string;
    /**
      * 实例隔离操作
注意：此字段可能返回 null，表示取不到有效值。
      */
    IsolateOperator: string;
    /**
      * 发布订阅标识，SUB-订阅实例，PUB-发布实例，空值-没有发布订阅的普通实例
注意：此字段可能返回 null，表示取不到有效值。
      */
    SubFlag: string;
    /**
      * 只读标识，RO-只读实例，MASTER-有RO实例的主实例，空值-没有只读组的非RO实例
注意：此字段可能返回 null，表示取不到有效值。
      */
    ROFlag: string;
    /**
      * 容灾类型，MIRROR-镜像，ALWAYSON-AlwaysOn, SINGLE-单例
注意：此字段可能返回 null，表示取不到有效值。
      */
    HAFlag: string;
    /**
      * 实例绑定的标签列表
注意：此字段可能返回 null，表示取不到有效值。
      */
    ResourceTags: Array<ResourceTag>;
    /**
      * 备份模式，master_pkg-主节点打包备份(默认) ；master_no_pkg-主节点不打包备份；slave_pkg-从节点打包备份(always on集群有效)；slave_no_pkg-从节点不打包备份(always on集群有效)；只读副本对该值无效。
注意：此字段可能返回 null，表示取不到有效值。
      */
    BackupModel: string;
}
/**
 * DescribeProductConfig返回参数结构体
 */
export interface DescribeProductConfigResponse {
    /**
      * 规格信息数组
      */
    SpecInfoList: Array<SpecInfo>;
    /**
      * 返回总共多少条数据
      */
    TotalCount: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeRollbackTime请求参数结构体
 */
export interface DescribeRollbackTimeRequest {
    /**
      * 实例ID
      */
    InstanceId: string;
    /**
      * 需要查询的数据库列表
      */
    DBs: Array<string>;
}
/**
 * DescribeUploadBackupInfo返回参数结构体
 */
export interface DescribeUploadBackupInfoResponse {
    /**
      * 存储桶名称
      */
    BucketName: string;
    /**
      * 存储桶地域信息
      */
    Region: string;
    /**
      * 存储路径
      */
    Path: string;
    /**
      * 临时密钥ID
      */
    TmpSecretId: string;
    /**
      * 临时密钥Key
      */
    TmpSecretKey: string;
    /**
      * 临时密钥Token
      */
    XCosSecurityToken: string;
    /**
      * 临时密钥开始时间
      */
    StartTime: string;
    /**
      * 临时密钥到期时间
      */
    ExpiredTime: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CreateMigration请求参数结构体
 */
export interface CreateMigrationRequest {
    /**
      * 迁移任务的名称
      */
    MigrateName: string;
    /**
      * 迁移类型（1:结构迁移 2:数据迁移 3:增量同步）
      */
    MigrateType: number;
    /**
      * 迁移源的类型 1:TencentDB for SQLServer 2:云服务器自建SQLServer数据库 4:SQLServer备份还原 5:SQLServer备份还原（COS方式）
      */
    SourceType: number;
    /**
      * 迁移源
      */
    Source: MigrateSource;
    /**
      * 迁移目标
      */
    Target: MigrateTarget;
    /**
      * 迁移DB对象 ，离线迁移不使用（SourceType=4或SourceType=5）。
      */
    MigrateDBSet?: Array<MigrateDB>;
    /**
      * 按照ReNameRestoreDatabase中的库进行恢复，并重命名，不填则按照默认方式命名恢复的库，且恢复所有的库。SourceType=5的情况下有效。
      */
    RenameRestore?: Array<RenameRestoreDatabase>;
}
/**
 * StartMigrationCheck请求参数结构体
 */
export interface StartMigrationCheckRequest {
    /**
      * 迁移任务id
      */
    MigrateId: number;
}
/**
 * CreateBasicDBInstances请求参数结构体
 */
export interface CreateBasicDBInstancesRequest {
    /**
      * 实例可用区，类似ap-guangzhou-1（广州一区）；实例可售卖区域可以通过接口DescribeZones获取
      */
    Zone: string;
    /**
      * 实例的CPU核心数
      */
    Cpu: number;
    /**
      * 实例内存大小，单位GB
      */
    Memory: number;
    /**
      * 实例磁盘大小，单位GB
      */
    Storage: number;
    /**
      * VPC子网ID，形如subnet-bdoe83fa
      */
    SubnetId: string;
    /**
      * VPC网络ID，形如vpc-dsp338hz
      */
    VpcId: string;
    /**
      * 购买实例的宿主机类型, CLOUD_PREMIUM-虚拟机高性能云盘，CLOUD_SSD-虚拟机SSD云盘
      */
    MachineType: string;
    /**
      * 付费模式，取值支持 PREPAID（预付费），POSTPAID（后付费）。
      */
    InstanceChargeType?: string;
    /**
      * 项目ID
      */
    ProjectId?: number;
    /**
      * 本次购买几个实例，默认值为1。取值不超过10
      */
    GoodsNum?: number;
    /**
      * sqlserver版本，目前只支持：2008R2（SQL Server 2008 Enterprise），2012SP3（SQL Server 2012 Enterprise），2016SP1（SQL Server 2016 Enterprise），201602（SQL Server 2016 Standard），2017（SQL Server 2017 Enterprise），201202（SQL Server 2012 Standard），201402（SQL Server 2014 Standard），2014SP2（SQL Server 2014 Enterprise），201702（SQL Server 2017 Standard）版本。每个地域支持售卖的版本不同，可通过DescribeProductConfig接口来拉取每个地域可售卖的版本信息。不填，默认为版本2008R2。
      */
    DBVersion?: string;
    /**
      * 购买实例周期，默认取值为1，表示一个月。取值不超过48
      */
    Period?: number;
    /**
      * 安全组列表，填写形如sg-xxx的安全组ID
      */
    SecurityGroupList?: Array<string>;
    /**
      * 自动续费标志：0-正常续费  1-自动续费，默认为1自动续费。只在购买预付费实例时有效。
      */
    AutoRenewFlag?: number;
    /**
      * 是否自动使用代金券；1 - 是，0 - 否，默认不使用
      */
    AutoVoucher?: number;
    /**
      * 代金券ID数组，目前单个订单只能使用一张
      */
    VoucherIds?: Array<string>;
    /**
      * 可维护时间窗配置，以周为单位，表示周几允许维护，1-7分别代表周一到周末
      */
    Weekly?: Array<number>;
    /**
      * 可维护时间窗配置，每天可维护的开始时间
      */
    StartTime?: string;
    /**
      * 可维护时间窗配置，持续时间，单位：小时
      */
    Span?: number;
    /**
      * 新建实例绑定的标签集合
      */
    ResourceTags?: Array<ResourceTag>;
}
/**
 * ModifyDBName返回参数结构体
 */
export interface ModifyDBNameResponse {
    /**
      * 任务流ID
      */
    FlowId: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 查询已经上传的备份文件大小。
 */
export interface CosUploadBackupFile {
    /**
      * 备份名称
      */
    FileName: string;
    /**
      * 备份大小
      */
    Size: number;
}
/**
 * 数据库配置信息
 */
export interface DbNormalDetail {
    /**
      * 是否已订阅 0：否 1：是
      */
    IsSubscribed: string;
    /**
      * 数据库排序规则
      */
    CollationName: string;
    /**
      * 开启CT之后是否自动清理 0：否 1：是
      */
    IsAutoCleanupOn: string;
    /**
      * 是否已启用代理  0：否 1：是
      */
    IsBrokerEnabled: string;
    /**
      * 是否已开启/关闭CDC 0：关闭 1：开启
      */
    IsCdcEnabled: string;
    /**
      * 是否已启用/ 禁用CT 0：禁用 1：启用
      */
    IsDbChainingOn: string;
    /**
      * 是否加密 0：否 1：是
      */
    IsEncrypted: string;
    /**
      * 是否全文启用 0：否 1：是
      */
    IsFulltextEnabled: string;
    /**
      * 是否是镜像 0：否 1：是
      */
    IsMirroring: string;
    /**
      * 是否已发布 0：否 1：是
      */
    IsPublished: string;
    /**
      * 是否开启快照 0：否 1：是
      */
    IsReadCommittedSnapshotOn: string;
    /**
      * 是否可信任 0：否 1：是
      */
    IsTrustworthyOn: string;
    /**
      * 镜像状态
      */
    MirroringState: string;
    /**
      * 数据库名称
      */
    Name: string;
    /**
      * 恢复模式
      */
    RecoveryModelDesc: string;
    /**
      * 保留天数
      */
    RetentionPeriod: string;
    /**
      * 数据库状态
      */
    StateDesc: string;
    /**
      * 用户类型
      */
    UserAccessDesc: string;
}
/**
 * ModifyDBInstanceRenewFlag请求参数结构体
 */
export interface ModifyDBInstanceRenewFlagRequest {
    /**
      * 实例续费状态标记信息
      */
    RenewFlags: Array<InstanceRenewInfo>;
}
/**
 * 备份文件详细信息
 */
export interface Backup {
    /**
      * 文件名，对于单库备份文件不返回此值；单库备份文件通过DescribeBackupFiles接口获取文件名
      */
    FileName: string;
    /**
      * 文件大小，单位 KB，对于单库备份文件不返回此值；单库备份文件通过DescribeBackupFiles接口获取文件大小
      */
    Size: number;
    /**
      * 备份开始时间
      */
    StartTime: string;
    /**
      * 备份结束时间
      */
    EndTime: string;
    /**
      * 内网下载地址，对于单库备份文件不返回此值；单库备份文件通过DescribeBackupFiles接口获取下载地址
      */
    InternalAddr: string;
    /**
      * 外网下载地址，对于单库备份文件不返回此值；单库备份文件通过DescribeBackupFiles接口获取下载地址
      */
    ExternalAddr: string;
    /**
      * 备份文件唯一标识，RestoreInstance接口会用到该字段，对于单库备份文件不返回此值；单库备份文件通过DescribeBackupFiles接口获取可回档的ID
      */
    Id: number;
    /**
      * 备份文件状态（0-创建中；1-成功；2-失败）
      */
    Status: number;
    /**
      * 多库备份时的DB列表
      */
    DBs: Array<string>;
    /**
      * 备份策略（0-实例备份；1-多库备份）
      */
    Strategy: number;
    /**
      * 备份方式，0-定时备份；1-手动临时备份
      */
    BackupWay: number;
    /**
      * 备份任务名称，可自定义
      */
    BackupName: string;
    /**
      * 聚合Id，对于打包备份文件不返回此值。通过此值调用DescribeBackupFiles接口，获取单库备份文件的详细信息
      */
    GroupId: string;
}
/**
 * DescribeBackupCommand请求参数结构体
 */
export interface DescribeBackupCommandRequest {
    /**
      * 备份文件类型，FULL-全量备份，FULL_LOG-全量备份需要日志增量，FULL_DIFF-全量备份需要差异增量，LOG-日志备份，DIFF-差异备份
      */
    BackupFileType: string;
    /**
      * 数据库名称
      */
    DataBaseName: string;
    /**
      * 是否需要恢复，NO-不需要，YES-需要
      */
    IsRecovery: string;
    /**
      * 备份文件保存的路径；如果不填则默认在D:\\
      */
    LocalPath?: string;
}
/**
 * 账户备注信息
 */
export interface AccountRemark {
    /**
      * 账户名
      */
    UserName: string;
    /**
      * 对应账户新的备注信息
      */
    Remark: string;
}
/**
 * DescribePublishSubscribe请求参数结构体
 */
export interface DescribePublishSubscribeRequest {
    /**
      * 实例ID，形如mssql-j8kv137v
      */
    InstanceId: string;
    /**
      * 订阅/发布实例ID，与InstanceId是发布实例还是订阅实例有关；当InstanceId为发布实例时，本字段按照订阅实例ID做筛选；当InstanceId为订阅实例时，本字段按照发布实例ID做筛选；
      */
    PubOrSubInstanceId?: string;
    /**
      * 订阅/发布实例内网IP，与InstanceId是发布实例还是订阅实例有关；当InstanceId为发布实例时，本字段按照订阅实例内网IP做筛选；当InstanceId为订阅实例时，本字段按照发布实例内网IP做筛选；
      */
    PubOrSubInstanceIp?: string;
    /**
      * 订阅发布ID，用于筛选
      */
    PublishSubscribeId?: number;
    /**
      * 订阅发布名字，用于筛选
      */
    PublishSubscribeName?: string;
    /**
      * 发布库名字，用于筛选
      */
    PublishDBName?: string;
    /**
      * 订阅库名字，用于筛选
      */
    SubscribeDBName?: string;
    /**
      * 分页，页数
      */
    Offset?: number;
    /**
      * 分页，页大小
      */
    Limit?: number;
}
/**
 * ModifyDatabaseCDC返回参数结构体
 */
export interface ModifyDatabaseCDCResponse {
    /**
      * 流程ID
      */
    FlowId: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ModifyDBInstanceName返回参数结构体
 */
export interface ModifyDBInstanceNameResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CreateIncrementalMigration返回参数结构体
 */
export interface CreateIncrementalMigrationResponse {
    /**
      * 增量备份导入任务ID
      */
    IncrementalMigrationId: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 冷备导入任务允许的操作
 */
export interface MigrationAction {
    /**
      * 支持的所有操作，值包括：view(查看任务) ，modify(修改任务)， start(启动任务)，incremental(创建增量任务)，delete(删除任务)，upload(获取上传权限)。
      */
    AllAction: Array<string>;
    /**
      * 当前状态允许的操作，AllAction的子集,为空表示禁止所有操作
      */
    AllowedAction: Array<string>;
}
/**
 * 数据库账号权限变更信息
 */
export interface AccountPrivilegeModifyInfo {
    /**
      * 数据库用户名
      */
    UserName: string;
    /**
      * 账号权限变更信息
      */
    DBPrivileges: Array<DBPrivilegeModifyInfo>;
}
/**
 * DescribeBackupMigration返回参数结构体
 */
export interface DescribeBackupMigrationResponse {
    /**
      * 迁移任务总数
      */
    TotalCount: number;
    /**
      * 迁移任务集合
      */
    BackupMigrationSet: Array<Migration>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 账号创建信息
 */
export interface AccountCreateInfo {
    /**
      * 实例用户名
      */
    UserName: string;
    /**
      * 实例密码
      */
    Password: string;
    /**
      * DB权限列表
      */
    DBPrivileges?: Array<DBPrivilege>;
    /**
      * 账号备注信息
      */
    Remark?: string;
    /**
      * 是否为管理员账户，默认为否
      */
    IsAdmin?: boolean;
}
/**
 * RenewDBInstance返回参数结构体
 */
export interface RenewDBInstanceResponse {
    /**
      * 订单名称
      */
    DealName: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 账号的数据库权限信息
 */
export interface DBPrivilege {
    /**
      * 数据库名
      */
    DBName: string;
    /**
      * 数据库权限，ReadWrite表示可读写，ReadOnly表示只读
      */
    Privilege: string;
}
/**
 * DescribeOrders请求参数结构体
 */
export interface DescribeOrdersRequest {
    /**
      * 订单数组。发货时会返回订单名字，利用该订单名字调用DescribeOrders接口查询发货情况
      */
    DealNames: Array<string>;
}
/**
 * DescribeReadOnlyGroupDetails返回参数结构体
 */
export interface DescribeReadOnlyGroupDetailsResponse {
    /**
      * 只读组ID
      */
    ReadOnlyGroupId?: string;
    /**
      * 只读组名称
      */
    ReadOnlyGroupName?: string;
    /**
      * 只读组的地域ID，与主实例相同
      */
    RegionId?: string;
    /**
      * 只读组的可用区ID，与主实例相同
      */
    ZoneId?: string;
    /**
      * 是否启动超时剔除功能，0-不开启剔除功能，1-开启剔除功能
      */
    IsOfflineDelay?: number;
    /**
      * 启动超时剔除功能后，使用的超时阈值
      */
    ReadOnlyMaxDelayTime?: number;
    /**
      * 启动超时剔除功能后，至少只读组保留的只读副本数
      */
    MinReadOnlyInGroup?: number;
    /**
      * 只读组vip
      */
    Vip?: string;
    /**
      * 只读组vport
      */
    Vport?: number;
    /**
      * 只读组私有网络ID
      */
    VpcId?: string;
    /**
      * 只读组私有网络子网ID
      */
    SubnetId?: string;
    /**
      * 只读实例副本集合
      */
    ReadOnlyInstanceSet?: Array<ReadOnlyInstance>;
    /**
      * 只读组状态: 1-申请成功运行中，5-申请中
      */
    Status?: number;
    /**
      * 主实例ID，形如mssql-sgeshe3th
      */
    MasterInstanceId?: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeBackups返回参数结构体
 */
export interface DescribeBackupsResponse {
    /**
      * 备份总数量
      */
    TotalCount: number;
    /**
      * 备份列表详情
      */
    Backups: Array<Backup>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 实例绑定的标签信息
 */
export interface ResourceTag {
    /**
      * 标签key
      */
    TagKey: string;
    /**
      * 标签value
      */
    TagValue: string;
}
/**
 * CreateBackupMigration返回参数结构体
 */
export interface CreateBackupMigrationResponse {
    /**
      * 备份导入任务ID
      */
    BackupMigrationId: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * RecycleDBInstance返回参数结构体
 */
export interface RecycleDBInstanceResponse {
    /**
      * 流程id
      */
    FlowId?: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DeleteAccount请求参数结构体
 */
export interface DeleteAccountRequest {
    /**
      * 数据库实例ID，形如mssql-njj2mtpl
      */
    InstanceId: string;
    /**
      * 实例用户名数组
      */
    UserNames: Array<string>;
}
/**
 * DescribeReadOnlyGroupByReadOnlyInstance请求参数结构体
 */
export interface DescribeReadOnlyGroupByReadOnlyInstanceRequest {
    /**
      * 实例ID，格式如：mssqlro-3l3fgqn7
      */
    InstanceId: string;
}
/**
 * DeleteBackupMigration返回参数结构体
 */
export interface DeleteBackupMigrationResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 发布订阅对象
 */
export interface PublishSubscribe {
    /**
      * 发布订阅ID
      */
    Id: number;
    /**
      * 发布订阅名称
      */
    Name: string;
    /**
      * 发布实例ID
      */
    PublishInstanceId: string;
    /**
      * 发布实例名称
      */
    PublishInstanceName: string;
    /**
      * 发布实例IP
      */
    PublishInstanceIp: string;
    /**
      * 订阅实例ID
      */
    SubscribeInstanceId: string;
    /**
      * 订阅实例名称
      */
    SubscribeInstanceName: string;
    /**
      * 订阅实例IP
      */
    SubscribeInstanceIp: string;
    /**
      * 数据库的订阅发布关系集合
      */
    DatabaseTupleSet: Array<DatabaseTupleStatus>;
}
/**
 * DescribeBackupByFlowId请求参数结构体
 */
export interface DescribeBackupByFlowIdRequest {
    /**
      * 实例ID，格式如：mssql-3l3fgqn7
      */
    InstanceId: string;
    /**
      * 创建备份流程ID，可通过 [CreateBackup](https://cloud.tencent.com/document/product/238/19946) 接口获取
      */
    FlowId: string;
}
/**
 * CreateBackup请求参数结构体
 */
export interface CreateBackupRequest {
    /**
      * 备份策略(0-实例备份 1-多库备份)
      */
    Strategy?: number;
    /**
      * 需要备份库名的列表(多库备份才填写)
      */
    DBNames?: Array<string>;
    /**
      * 实例ID，形如mssql-i1z41iwd
      */
    InstanceId?: string;
    /**
      * 备份名称，若不填则自动生成“实例ID_备份开始时间戳”
      */
    BackupName?: string;
}
/**
 * DescribeDBsNormal请求参数结构体
 */
export interface DescribeDBsNormalRequest {
    /**
      * 实例ID，形如mssql-7vfv3rk3
      */
    InstanceId: string;
}
/**
 * 在非打包上传备份模式下，每个库对应一个备份文件
 */
export interface BackupFile {
    /**
      * 备份文件唯一标识
      */
    Id: number;
    /**
      * 备份文件名称
      */
    FileName: string;
    /**
      * 文件大小(K)
      */
    Size: number;
    /**
      * 备份文件的库的名称
      */
    DBs: Array<string>;
    /**
      * 下载地址
      */
    DownloadLink: string;
}
/**
 * ModifyAccountRemark请求参数结构体
 */
export interface ModifyAccountRemarkRequest {
    /**
      * 实例ID，形如mssql-j8kv137v
      */
    InstanceId: string;
    /**
      * 修改备注的账户信息
      */
    Accounts: Array<AccountRemark>;
}
/**
 * ModifyIncrementalMigration返回参数结构体
 */
export interface ModifyIncrementalMigrationResponse {
    /**
      * 增量备份导入任务ID
      */
    IncrementalMigrationId: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ModifyPublishSubscribeName请求参数结构体
 */
export interface ModifyPublishSubscribeNameRequest {
    /**
      * 发布订阅ID
      */
    PublishSubscribeId: number;
    /**
      * 待修改的发布订阅名称
      */
    PublishSubscribeName: string;
}
/**
 * DeletePublishSubscribe返回参数结构体
 */
export interface DeletePublishSubscribeResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * InquiryPriceUpgradeDBInstance返回参数结构体
 */
export interface InquiryPriceUpgradeDBInstanceResponse {
    /**
      * 未打折的原价，其值除以100表示最终的价格。例如10094表示100.94元
      */
    OriginalPrice?: number;
    /**
      * 实际需要支付价格，其值除以100表示最终的价格。例如10094表示100.94元
      */
    Price?: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CloneDB请求参数结构体
 */
export interface CloneDBRequest {
    /**
      * 实例ID，形如mssql-j8kv137v
      */
    InstanceId: string;
    /**
      * 按照ReNameRestoreDatabase中的库进行克隆，并重命名，新库名称必须指定
      */
    RenameRestore: Array<RenameRestoreDatabase>;
}
/**
 * DescribeMigrationDetail返回参数结构体
 */
export interface DescribeMigrationDetailResponse {
    /**
      * 迁移任务ID
      */
    MigrateId?: number;
    /**
      * 迁移任务名称
      */
    MigrateName?: string;
    /**
      * 迁移任务所属的用户ID
      */
    AppId?: number;
    /**
      * 迁移任务所属的地域
      */
    Region?: string;
    /**
      * 迁移源的类型 1:TencentDB for SQLServer 2:云服务器自建SQLServer数据库 4:SQLServer备份还原 5:SQLServer备份还原（COS方式）
      */
    SourceType?: number;
    /**
      * 迁移任务的创建时间
      */
    CreateTime?: string;
    /**
      * 迁移任务的开始时间
      */
    StartTime?: string;
    /**
      * 迁移任务的结束时间
      */
    EndTime?: string;
    /**
      * 迁移任务的状态（1:初始化,4:迁移中,5.迁移失败,6.迁移成功）
      */
    Status?: number;
    /**
      * 迁移任务当前进度
      */
    Progress?: number;
    /**
      * 迁移类型（1:结构迁移 2:数据迁移 3:增量同步）
      */
    MigrateType?: number;
    /**
      * 迁移源
      */
    Source?: MigrateSource;
    /**
      * 迁移目标
      */
    Target?: MigrateTarget;
    /**
      * 迁移DB对象 ，离线迁移（SourceType=4或SourceType=5）不使用。
      */
    MigrateDBSet?: Array<MigrateDB>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ModifyMigration请求参数结构体
 */
export interface ModifyMigrationRequest {
    /**
      * 迁移任务ID
      */
    MigrateId: number;
    /**
      * 新的迁移任务的名称，若不填则不修改
      */
    MigrateName?: string;
    /**
      * 新的迁移类型（1:结构迁移 2:数据迁移 3:增量同步），若不填则不修改
      */
    MigrateType?: number;
    /**
      * 迁移源的类型 1:TencentDB for SQLServer 2:云服务器自建SQLServer数据库 4:SQLServer备份还原 5:SQLServer备份还原（COS方式），若不填则不修改
      */
    SourceType?: number;
    /**
      * 迁移源，若不填则不修改
      */
    Source?: MigrateSource;
    /**
      * 迁移目标，若不填则不修改
      */
    Target?: MigrateTarget;
    /**
      * 迁移DB对象 ，离线迁移（SourceType=4或SourceType=5）不使用，若不填则不修改
      */
    MigrateDBSet?: Array<MigrateDB>;
}
/**
 * DescribeMigrationDatabases请求参数结构体
 */
export interface DescribeMigrationDatabasesRequest {
    /**
      * 迁移源实例的ID，格式如：mssql-si2823jyl
      */
    InstanceId: string;
    /**
      * 迁移源实例用户名
      */
    UserName: string;
    /**
      * 迁移源实例密码
      */
    Password: string;
}
/**
 * 数据库实例参数
 */
export interface Parameter {
    /**
      * 参数名称
      */
    Name?: string;
    /**
      * 参数值
      */
    CurrentValue?: string;
}
/**
 * DeleteDBInstance请求参数结构体
 */
export interface DeleteDBInstanceRequest {
    /**
      * 实例ID，格式如：mssql-3l3fgqn7 或 mssqlro-3l3fgqn7
      */
    InstanceId: string;
}
/**
 * CreateAccount返回参数结构体
 */
export interface CreateAccountResponse {
    /**
      * 任务流ID
      */
    FlowId: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * RenewPostpaidDBInstance返回参数结构体
 */
export interface RenewPostpaidDBInstanceResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeBackupUploadSize请求参数结构体
 */
export interface DescribeBackupUploadSizeRequest {
    /**
      * 导入目标实例ID
      */
    InstanceId: string;
    /**
      * 备份导入任务ID，由CreateBackupMigration接口返回
      */
    BackupMigrationId: string;
    /**
      * 增量导入任务ID
      */
    IncrementalMigrationId?: string;
}
/**
 * UpgradeDBInstance请求参数结构体
 */
export interface UpgradeDBInstanceRequest {
    /**
      * 实例ID，形如mssql-j8kv137v
      */
    InstanceId: string;
    /**
      * 实例升级后内存大小，单位GB，其值不能小于当前实例内存大小
      */
    Memory?: number;
    /**
      * 实例升级后磁盘大小，单位GB，其值不能小于当前实例磁盘大小
      */
    Storage?: number;
    /**
      * 是否自动使用代金券，0 - 不使用；1 - 默认使用。取值默认为0
      */
    AutoVoucher?: number;
    /**
      * 代金券ID，目前单个订单只能使用一张代金券
      */
    VoucherIds?: Array<string>;
    /**
      * 实例升级后的CPU核心数
      */
    Cpu?: number;
    /**
      * 升级sqlserver的版本，目前支持：2008R2（SQL Server 2008 Enterprise），2012SP3（SQL Server 2012 Enterprise）版本等。每个地域支持售卖的版本不同，可通过DescribeProductConfig接口来拉取每个地域可售卖的版本信息，版本不支持降级，不填则不修改版本
      */
    DBVersion?: string;
    /**
      * 升级sqlserver的高可用架构,从镜像容灾升级到always on集群容灾，仅支持2017及以上版本且支持always on高可用的实例，不支持降级到镜像方式容灾，CLUSTER-升级为always on容灾，不填则不修改高可用架构
      */
    HAType?: string;
    /**
      * 修改实例是否为跨可用区容灾，SameZones-修改为同可用区 MultiZones-修改为夸可用区
      */
    MultiZones?: string;
}
/**
 * CreateAccount请求参数结构体
 */
export interface CreateAccountRequest {
    /**
      * 数据库实例ID，形如mssql-njj2mtpl
      */
    InstanceId: string;
    /**
      * 数据库实例账户信息
      */
    Accounts: Array<AccountCreateInfo>;
}
/**
 * DeleteDB返回参数结构体
 */
export interface DeleteDBResponse {
    /**
      * 任务流ID
      */
    FlowId: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CreateDB返回参数结构体
 */
export interface CreateDBResponse {
    /**
      * 任务流ID
      */
    FlowId: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * RestartDBInstance返回参数结构体
 */
export interface RestartDBInstanceResponse {
    /**
      * 异步任务流程ID
      */
    FlowId: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * InquiryPriceRenewDBInstance返回参数结构体
 */
export interface InquiryPriceRenewDBInstanceResponse {
    /**
      * 未打折的原价，其值除以100表示最终的价格。例如10094表示100.94元
      */
    OriginalPrice?: number;
    /**
      * 实际需要支付价格，其值除以100表示最终的价格。例如10094表示100.94元
      */
    Price?: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeDBInstances返回参数结构体
 */
export interface DescribeDBInstancesResponse {
    /**
      * 符合条件的实例总数。分页返回的话，这个值指的是所有符合条件的实例的个数，而非当前根据Limit和Offset值返回的实例个数
      */
    TotalCount: number;
    /**
      * 实例列表
      */
    DBInstances: Array<DBInstance>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeSlowlogs返回参数结构体
 */
export interface DescribeSlowlogsResponse {
    /**
      * 查询总数
      */
    TotalCount: number;
    /**
      * 慢查询日志信息列表
      */
    Slowlogs: Array<SlowlogInfo>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 数据库信息
 */
export interface DBDetail {
    /**
      * 数据库名称
      */
    Name: string;
    /**
      * 字符集
      */
    Charset: string;
    /**
      * 备注
      */
    Remark: string;
    /**
      * 数据库创建时间
      */
    CreateTime: string;
    /**
      * 数据库状态。1--创建中， 2--运行中， 3--修改中，-1--删除中
      */
    Status: number;
    /**
      * 数据库账号权限信息
      */
    Accounts: Array<AccountPrivilege>;
    /**
      * 内部状态。ONLINE表示运行中
      */
    InternalStatus: string;
}
/**
 * ResetAccountPassword请求参数结构体
 */
export interface ResetAccountPasswordRequest {
    /**
      * 数据库实例ID，形如mssql-njj2mtpl
      */
    InstanceId: string;
    /**
      * 更新后的账户密码信息数组
      */
    Accounts: Array<AccountPassword>;
}
/**
 * ModifyReadOnlyGroupDetails请求参数结构体
 */
export interface ModifyReadOnlyGroupDetailsRequest {
    /**
      * 主实例ID，格式如：mssql-3l3fgqn7
      */
    InstanceId: string;
    /**
      * 只读组ID
      */
    ReadOnlyGroupId: string;
    /**
      * 只读组名称，不填此参数，则不修改
      */
    ReadOnlyGroupName?: string;
    /**
      * 是否启动超时剔除功能,0-不开启剔除功能，1-开启剔除功能，不填此参数，则不修改
      */
    IsOfflineDelay?: number;
    /**
      * 启动超时剔除功能后，使用的超时阈值，不填此参数，则不修改
      */
    ReadOnlyMaxDelayTime?: number;
    /**
      * 启动超时剔除功能后，只读组至少保留的只读副本数，不填此参数，则不修改
      */
    MinReadOnlyInGroup?: number;
    /**
      * 只读组实例权重修改集合，不填此参数，则不修改
      */
    WeightPairs?: Array<ReadOnlyInstanceWeightPair>;
    /**
      * 0-用户自定义权重（根据WeightPairs调整）,1-系统自动分配权重(WeightPairs无效)， 默认为0
      */
    AutoWeight?: number;
    /**
      * 0-不重新均衡负载，1-重新均衡负载，默认为0
      */
    BalanceWeight?: number;
}
/**
 * RollbackInstance请求参数结构体
 */
export interface RollbackInstanceRequest {
    /**
      * 实例ID
      */
    InstanceId: string;
    /**
      * 回档类型，0-回档的数据库覆盖原库；1-回档的数据库以重命名的形式生成，不覆盖原库
      */
    Type: number;
    /**
      * 需要回档的数据库
      */
    DBs: Array<string>;
    /**
      * 回档目标时间点
      */
    Time: string;
    /**
      * 备份恢复到的同一个APPID下的实例ID，不填则恢复到原实例ID
      */
    TargetInstanceId?: string;
    /**
      * 按照ReNameRestoreDatabase中的库进行重命名，仅在Type = 1重命名回档方式有效；不填则按照默认方式命名库，DBs参数确定要恢复的库
      */
    RenameRestore?: Array<RenameRestoreDatabase>;
}
/**
 * DescribeInstanceParams返回参数结构体
 */
export interface DescribeInstanceParamsResponse {
    /**
      * 实例的参数总数
      */
    TotalCount: number;
    /**
      * 参数详情
      */
    Items: Array<ParameterDetail>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ModifyDBName请求参数结构体
 */
export interface ModifyDBNameRequest {
    /**
      * 实例ID
      */
    InstanceId: string;
    /**
      * 旧数据库名
      */
    OldDBName: string;
    /**
      * 新数据库名
      */
    NewDBName: string;
}
/**
 * ModifyDBInstanceProject请求参数结构体
 */
export interface ModifyDBInstanceProjectRequest {
    /**
      * 实例ID数组，形如mssql-j8kv137v
      */
    InstanceIdSet: Array<string>;
    /**
      * 项目ID，为0的话表示默认项目
      */
    ProjectId: number;
}
/**
 * DisassociateSecurityGroups请求参数结构体
 */
export interface DisassociateSecurityGroupsRequest {
    /**
      * 安全组ID。
      */
    SecurityGroupId: string;
    /**
      * 实例ID 列表，一个或者多个实例ID组成的数组。多个实例必须是同一个地域，同一个可用区，同一个项目下的。
      */
    InstanceIdSet: Array<string>;
}
/**
 * ModifyBackupName请求参数结构体
 */
export interface ModifyBackupNameRequest {
    /**
      * 实例ID，格式如：mssql-3l3fgqn7
      */
    InstanceId: string;
    /**
      * 修改的备份名称
      */
    BackupName: string;
    /**
      * 要修改名称的备份ID，可通过 [DescribeBackups](https://cloud.tencent.com/document/product/238/19943)  接口获取。
      */
    BackupId?: number;
    /**
      * 备份任务组ID，在单库备份文件模式下，可通过[DescribeBackups](https://cloud.tencent.com/document/product/238/19943) 接口获得。
 BackupId 和 GroupId 同时存在，按照BackupId进行修改。
      */
    GroupId?: string;
}
/**
 * StopMigration返回参数结构体
 */
export interface StopMigrationResponse {
    /**
      * 中止迁移流程发起后，返回的流程id
      */
    FlowId?: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 冷备导入任务迁移步骤细节
 */
export interface MigrationStep {
    /**
      * 步骤序列
      */
    StepNo: number;
    /**
      * 步骤展现名称
      */
    StepName: string;
    /**
      * 英文ID标识
      */
    StepId: string;
    /**
      * 步骤状态:0-默认值,1-成功,2-失败,3-执行中,4-未执行
      */
    Status: number;
}
/**
 * CreatePublishSubscribe返回参数结构体
 */
export interface CreatePublishSubscribeResponse {
    /**
      * 流程ID，可通过接口DescribeFlowStatus查询立即切换升级任务的状态。
      */
    FlowId?: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeUploadBackupInfo请求参数结构体
 */
export interface DescribeUploadBackupInfoRequest {
    /**
      * 导入目标实例ID
      */
    InstanceId: string;
    /**
      * 备份导入任务ID，由CreateBackupMigration接口返回
      */
    BackupMigrationId: string;
}
/**
 * DescribeAccounts返回参数结构体
 */
export interface DescribeAccountsResponse {
    /**
      * 实例ID
      */
    InstanceId: string;
    /**
      * 账户信息列表
      */
    Accounts: Array<AccountDetail>;
    /**
      * 总数
      */
    TotalCount: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DeleteDBInstance返回参数结构体
 */
export interface DeleteDBInstanceResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * UpgradeDBInstance返回参数结构体
 */
export interface UpgradeDBInstanceResponse {
    /**
      * 订单名称
      */
    DealName?: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeBackupCommand返回参数结构体
 */
export interface DescribeBackupCommandResponse {
    /**
      * 创建备份命令
      */
    Command: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * StartBackupMigration请求参数结构体
 */
export interface StartBackupMigrationRequest {
    /**
      * 导入目标实例ID
      */
    InstanceId: string;
    /**
      * 备份导入任务ID，由CreateBackupMigration接口返回
      */
    BackupMigrationId: string;
}
/**
 * DescribePublishSubscribe返回参数结构体
 */
export interface DescribePublishSubscribeResponse {
    /**
      * 总数
      */
    TotalCount: number;
    /**
      * 发布订阅列表
      */
    PublishSubscribeSet: Array<PublishSubscribe>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeReadOnlyGroupList请求参数结构体
 */
export interface DescribeReadOnlyGroupListRequest {
    /**
      * 主实例ID，格式如：mssql-3l3fgqn7
      */
    InstanceId: string;
}
/**
 * DescribeIncrementalMigration返回参数结构体
 */
export interface DescribeIncrementalMigrationResponse {
    /**
      * 增量导入任务总数
      */
    TotalCount: number;
    /**
      * 增量导入任务集合
      */
    IncrementalMigrationSet: Array<Migration>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ModifyDBRemark返回参数结构体
 */
export interface ModifyDBRemarkResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 迁移任务的目标类型
 */
export interface MigrateTarget {
    /**
      * 迁移目标实例的ID，格式如：mssql-si2823jyl
      */
    InstanceId?: string;
    /**
      * 迁移目标实例的用户名
      */
    UserName?: string;
    /**
      * 迁移目标实例的密码
      */
    Password?: string;
}
/**
 * DisassociateSecurityGroups返回参数结构体
 */
export interface DisassociateSecurityGroupsResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CreateDBInstances返回参数结构体
 */
export interface CreateDBInstancesResponse {
    /**
      * 订单名称
      */
    DealName?: string;
    /**
      * 订单名称数组
      */
    DealNames?: Array<string>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ModifyBackupMigration请求参数结构体
 */
export interface ModifyBackupMigrationRequest {
    /**
      * 导入目标实例ID
      */
    InstanceId: string;
    /**
      * 备份导入任务ID，由CreateBackupMigration接口返回
      */
    BackupMigrationId: string;
    /**
      * 任务名称
      */
    MigrationName?: string;
    /**
      * 迁移任务恢复类型，FULL,FULL_LOG,FULL_DIFF
      */
    RecoveryType?: string;
    /**
      * COS_URL-备份放在用户的对象存储上，提供URL。COS_UPLOAD-备份放在业务的对象存储上，用户上传
      */
    UploadType?: string;
    /**
      * UploadType是COS_URL时这里时URL，COS_UPLOAD这里填备份文件的名字；只支持1个备份文件，但1个备份文件内可包含多个库
      */
    BackupFiles?: Array<string>;
}
/**
 * DeleteAccount返回参数结构体
 */
export interface DeleteAccountResponse {
    /**
      * 任务流ID
      */
    FlowId: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeDBCharsets返回参数结构体
 */
export interface DescribeDBCharsetsResponse {
    /**
      * 数据库字符集列表
      */
    DatabaseCharsets: Array<string>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
