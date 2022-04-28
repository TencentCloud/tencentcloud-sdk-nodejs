/**
 * ModifyInstanceParams返回参数结构体
 */
export interface ModifyInstanceParamsResponse {
    /**
      * 修改是否成功。
      */
    Changed: boolean;
    /**
      * 任务ID
      */
    TaskId: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * EnableReplicaReadonly请求参数结构体
 */
export interface EnableReplicaReadonlyRequest {
    /**
      * 实例序号ID
      */
    InstanceId: string;
    /**
      * 账号路由策略：填写master或者replication，表示路由主节点，从节点；不填路由策略默认为写主节点，读从节点
      */
    ReadonlyPolicy?: Array<string>;
}
/**
 * 实例的备份数组
 */
export interface RedisBackupSet {
    /**
      * 开始备份的时间
      */
    StartTime: string;
    /**
      * 备份ID
      */
    BackupId: string;
    /**
      * 备份类型。1：用户发起的手动备份； 0：凌晨系统发起的备份
      */
    BackupType: string;
    /**
      * 备份状态。  1:"备份被其它流程锁定";  2:"备份正常，没有被任何流程锁定";  -1:"备份已过期"； 3:"备份正在被导出";  4:"备份导出成功"
      */
    Status: number;
    /**
      * 备份的备注信息
      */
    Remark: string;
    /**
      * 备份是否被锁定，0：未被锁定；1：已被锁定
      */
    Locked: number;
    /**
      * 内部字段，用户可忽略
注意：此字段可能返回 null，表示取不到有效值。
      */
    BackupSize: number;
    /**
      * 内部字段，用户可忽略
注意：此字段可能返回 null，表示取不到有效值。
      */
    FullBackup: number;
    /**
      * 内部字段，用户可忽略
注意：此字段可能返回 null，表示取不到有效值。
      */
    InstanceType: number;
}
/**
 * DescribeInstanceMonitorTopNCmd返回参数结构体
 */
export interface DescribeInstanceMonitorTopNCmdResponse {
    /**
      * 访问命令信息
      */
    Data?: Array<SourceCommand>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ModifyAutoBackupConfig返回参数结构体
 */
export interface ModifyAutoBackupConfigResponse {
    /**
      * 自动备份类型： 1 “定时回档”
      */
    AutoBackupType: number;
    /**
      * 日期Monday，Tuesday，Wednesday，Thursday，Friday，Saturday，Sunday。
      */
    WeekDays: Array<string>;
    /**
      * 时间段 00:00-01:00, 01:00-02:00...... 23:00-00:00
      */
    TimePeriod: string;
    /**
      * 全量备份文件保存天数,单位：天
      */
    BackupStorageDays: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * RestoreInstance请求参数结构体
 */
export interface RestoreInstanceRequest {
    /**
      * 待操作的实例ID，可通过 DescribeInstances 接口返回值中的 InstanceId 获取。
      */
    InstanceId: string;
    /**
      * 备份ID，可通过 GetRedisBackupList 接口返回值中的 backupId 获取
      */
    BackupId: string;
    /**
      * 实例密码，恢复实例时，需要校验实例密码（免密实例不需要传密码）
      */
    Password?: string;
}
/**
 * AllocateWanAddress请求参数结构体
 */
export interface AllocateWanAddressRequest {
    /**
      * 实例ID
      */
    InstanceId: string;
}
/**
 * ApplyParamsTemplate请求参数结构体
 */
export interface ApplyParamsTemplateRequest {
    /**
      * 实例ID列表
      */
    InstanceIds: Array<string>;
    /**
      * 应用的参数模板ID
      */
    TemplateId: string;
}
/**
 * UpgradeInstanceVersion返回参数结构体
 */
export interface UpgradeInstanceVersionResponse {
    /**
      * 订单ID
      */
    DealId: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CreateInstances请求参数结构体
 */
export interface CreateInstancesRequest {
    /**
      * 实例类型：2 – Redis2.8内存版(标准架构)，3 – CKV 3.2内存版(标准架构)，4 – CKV 3.2内存版(集群架构)，6 – Redis4.0内存版(标准架构)，7 – Redis4.0内存版(集群架构)，8 – Redis5.0内存版(标准架构)，9 – Redis5.0内存版(集群架构)。
      */
    TypeId: number;
    /**
      * 内存容量，单位为MB， 数值需为1024的整数倍，具体规格以 [查询产品售卖规格](https://cloud.tencent.com/document/api/239/30600) 返回的规格为准。
TypeId为标准架构时，MemSize是实例总内存容量；TypeId为集群架构时，MemSize是单分片内存容量。
      */
    MemSize: number;
    /**
      * 实例数量，单次购买实例数量以 [查询产品售卖规格](https://cloud.tencent.com/document/api/239/30600) 返回的规格为准。
      */
    GoodsNum: number;
    /**
      * 购买时长，在创建包年包月实例的时候需要填写，按量计费实例填1即可，单位：月，取值范围 [1,2,3,4,5,6,7,8,9,10,11,12,24,36]。
      */
    Period: number;
    /**
      * 付费方式:0-按量计费，1-包年包月。
      */
    BillingMode: number;
    /**
      * 实例所属的可用区ID，可参考[地域和可用区](https://cloud.tencent.com/document/product/239/4106)  。
      */
    ZoneId?: number;
    /**
      * 实例密码，当输入参数NoAuth为true且使用私有网络VPC时，Password为非必填，否则Password为必填参数。
当实例类型TypeId为Redis2.8、4.0和5.0时，其密码格式为：8-30个字符，至少包含小写字母、大写字母、数字和字符 ()`~!@#$%^&*-+=_|{}[]:;<>,.?/ 中的2种，不能以"/"开头；
当实例类型TypeId为CKV 3.2时，其密码格式为：8-30个字符，必须包含字母和数字 且 不包含其他字符。
      */
    Password?: string;
    /**
      * 私有网络ID，如果不传则默认选择基础网络，请使用私有网络列表查询，如：vpc-sad23jfdfk。
      */
    VpcId?: string;
    /**
      * 基础网络下， subnetId无效； vpc子网下，取值以查询子网列表，如：subnet-fdj24n34j2。
      */
    SubnetId?: string;
    /**
      * 项目id，取值以用户账户>用户账户相关接口查询>项目列表返回的projectId为准。
      */
    ProjectId?: number;
    /**
      * 自动续费标识。0 - 默认状态（手动续费）；1 - 自动续费；2 - 明确不自动续费。
      */
    AutoRenew?: number;
    /**
      * 安全组id数组。
      */
    SecurityGroupIdList?: Array<string>;
    /**
      * 用户自定义的端口 不填则默认为6379，范围[1024,65535]。
      */
    VPort?: number;
    /**
      * 实例分片数量，购买标准版实例不需要填写，集群版分片数量范围[3,5,8,12,16,24,32,64,96,128]。
      */
    RedisShardNum?: number;
    /**
      * 实例副本数量，Redis 2.8标准版、CKV标准版只支持1副本，4.0、5.0标准版和集群版支持1-5个副本。
      */
    RedisReplicasNum?: number;
    /**
      * 是否支持副本只读，Redis 2.8标准版、CKV标准版不支持副本只读，开启副本只读，实例将自动读写分离，写请求路由到主节点，读请求路由到副本节点，如需开启副本只读建议副本数>=2。
      */
    ReplicasReadonly?: boolean;
    /**
      * 实例名称，长度小于60的中文/英文/数字/"-"/"_"。
      */
    InstanceName?: string;
    /**
      * 是否支持免密，true-免密实例，false-非免密实例，默认为非免密实例，仅VPC网络的实例支持免密码访问。
      */
    NoAuth?: boolean;
    /**
      * 实例的节点信息，目前支持传入节点的类型（主节点或者副本节点），节点的可用区。单可用区部署不需要传递此参数。
      */
    NodeSet?: Array<RedisNodeInfo>;
    /**
      * 购买实例绑定标签
      */
    ResourceTags?: Array<ResourceTag>;
    /**
      * 实例所属的可用区名称，可参考[地域和可用区](https://cloud.tencent.com/document/product/239/4106)  。
      */
    ZoneName?: string;
    /**
      * 创建实例需要应用的参数模板ID，不传则应用默认的参数模板
      */
    TemplateId?: string;
}
/**
 * CreateReplicationGroup请求参数结构体
 */
export interface CreateReplicationGroupRequest {
    /**
      * 实例ID
      */
    InstanceId: string;
    /**
      * 复制组名称
      */
    GroupName?: string;
    /**
      * 备注信息
      */
    Remark?: string;
}
/**
 * DescribeInstanceZoneInfo请求参数结构体
 */
export interface DescribeInstanceZoneInfoRequest {
    /**
      * 实例Id，如：crs-6ubhgouj
      */
    InstanceId?: string;
}
/**
 * ModifyNetworkConfig返回参数结构体
 */
export interface ModifyNetworkConfigResponse {
    /**
      * 执行状态：true|false
      */
    Status: boolean;
    /**
      * 子网ID
      */
    SubnetId: string;
    /**
      * 私有网络ID
      */
    VpcId: string;
    /**
      * VIP地址
      */
    Vip: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 命令耗时
 */
export interface CommandTake {
    /**
      * 命令
      */
    Cmd: string;
    /**
      * 耗时
      */
    Took: number;
}
/**
 * DescribeInstanceMonitorBigKey返回参数结构体
 */
export interface DescribeInstanceMonitorBigKeyResponse {
    /**
      * 大Key详细信息
      */
    Data?: Array<BigKeyInfo>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 安全组入站规则
 */
export interface Inbound {
    /**
      * 策略，ACCEPT或者DROP。
      */
    Action: string;
    /**
      * 地址组id代表的地址集合。
      */
    AddressModule: string;
    /**
      * 来源Ip或Ip段，例如192.168.0.0/16。
      */
    CidrIp: string;
    /**
      * 描述。
      */
    Desc: string;
    /**
      * 网络协议，支持udp、tcp等。
      */
    IpProtocol: string;
    /**
      * 端口。
      */
    PortRange: string;
    /**
      * 服务组id代表的协议和端口集合。
      */
    ServiceModule: string;
    /**
      * 安全组id代表的地址集合。
      */
    Id: string;
}
/**
 * AssociateSecurityGroups请求参数结构体
 */
export interface AssociateSecurityGroupsRequest {
    /**
      * 数据库引擎名称：mariadb,cdb,cynosdb,dcdb,redis,mongodb 等。
      */
    Product: string;
    /**
      * 要绑定的安全组ID，类似sg-efil73jd。
      */
    SecurityGroupId: string;
    /**
      * 被绑定的实例ID，类似ins-lesecurk，支持指定多个实例。
      */
    InstanceIds: Array<string>;
}
/**
 * DescribeTaskList返回参数结构体
 */
export interface DescribeTaskListResponse {
    /**
      * 任务总数
      */
    TotalCount: number;
    /**
      * 任务详细信息
      */
    Tasks: Array<TaskInfoDetail>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ModifyInstance请求参数结构体
 */
export interface ModifyInstanceRequest {
    /**
      * 修改实例操作，如填写：rename-表示实例重命名；modifyProject-修改实例所属项目；modifyAutoRenew-修改实例续费标记
      */
    Operation: string;
    /**
      * 实例Id
      */
    InstanceIds?: Array<string>;
    /**
      * 实例的新名称
      */
    InstanceNames?: Array<string>;
    /**
      * 项目Id
      */
    ProjectId?: number;
    /**
      * 自动续费标识。0 - 默认状态（手动续费）；1 - 自动续费；2 - 明确不自动续费
      */
    AutoRenews?: Array<number>;
    /**
      * 已经废弃
      */
    InstanceId?: string;
    /**
      * 已经废弃
      */
    InstanceName?: string;
    /**
      * 已经废弃
      */
    AutoRenew?: number;
}
/**
 * KillMasterGroup返回参数结构体
 */
export interface KillMasterGroupResponse {
    /**
      * 异步任务ID
      */
    TaskId: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * RenewInstance返回参数结构体
 */
export interface RenewInstanceResponse {
    /**
      * 交易ID
      */
    DealId: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeSlowLog返回参数结构体
 */
export interface DescribeSlowLogResponse {
    /**
      * 慢查询总数
      */
    TotalCount: number;
    /**
      * 慢查询详情
      */
    InstanceSlowlogDetail: Array<InstanceSlowlogDetail>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeCommonDBInstances请求参数结构体
 */
export interface DescribeCommonDBInstancesRequest {
    /**
      * vpc网络ID信息列表
      */
    VpcIds?: Array<number>;
    /**
      * 子网ID信息列表
      */
    SubnetIds?: Array<number>;
    /**
      * 计费类型过滤列表；0表示包年包月，1表示按量计费
      */
    PayMode?: number;
    /**
      * 实例ID过滤信息列表
      */
    InstanceIds?: Array<string>;
    /**
      * 实例名称过滤信息列表
      */
    InstanceNames?: Array<string>;
    /**
      * 实例状态信息过滤列表
      */
    Status?: Array<string>;
    /**
      * 排序字段
      */
    OrderBy?: string;
    /**
      * 排序方式
      */
    OrderByType?: string;
    /**
      * 实例vip信息列表
      */
    Vips?: Array<string>;
    /**
      * vpc网络ID信息列表
      */
    UniqVpcIds?: Array<string>;
    /**
      * 子网统一ID列表
      */
    UniqSubnetIds?: Array<string>;
    /**
      * 数量限制，默认推荐100
      */
    Limit?: number;
    /**
      * 偏移量，默认0
      */
    Offset?: number;
}
/**
 * DescribeDBSecurityGroups返回参数结构体
 */
export interface DescribeDBSecurityGroupsResponse {
    /**
      * 安全组规则
      */
    Groups: Array<SecurityGroup>;
    /**
      * 安全组生效内网地址
      */
    VIP: string;
    /**
      * 安全组生效内网端口
      */
    VPort: string;
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
      * 任务ID，可通过 DescribeTaskInfo 接口查询任务执行状态
      */
    TaskId: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 描述Redis实例的主节点或者副本节点信息
 */
export interface RedisNodeInfo {
    /**
      * 节点类型，0 为主节点，1 为副本节点
      */
    NodeType: number;
    /**
      * 主节点或者副本节点的ID，创建时不需要传递此参数。
      */
    NodeId?: number;
    /**
      * 主节点或者副本节点的可用区ID
      */
    ZoneId?: number;
    /**
      * 主节点或者副本节点的可用区名称
      */
    ZoneName?: string;
}
/**
 * DescribeBackupUrl请求参数结构体
 */
export interface DescribeBackupUrlRequest {
    /**
      * 实例ID
      */
    InstanceId: string;
    /**
      * 备份ID，通过DescribeInstanceBackups接口可查
      */
    BackupId: string;
}
/**
 * DeleteParamTemplate返回参数结构体
 */
export interface DeleteParamTemplateResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeInstances返回参数结构体
 */
export interface DescribeInstancesResponse {
    /**
      * 实例数
      */
    TotalCount: number;
    /**
      * 实例详细信息列表
      */
    InstanceSet: Array<InstanceSet>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeInstanceZoneInfo返回参数结构体
 */
export interface DescribeInstanceZoneInfoResponse {
    /**
      * 实例节点组的个数
      */
    TotalCount: number;
    /**
      * 实例节点组列表
      */
    ReplicaGroups: Array<ReplicaGroup>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 子账号信息
 */
export interface Account {
    /**
      * 实例ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    InstanceId: string;
    /**
      * 账号名称（如果是主账号，名称为root）
注意：此字段可能返回 null，表示取不到有效值。
      */
    AccountName: string;
    /**
      * 账号描述信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    Remark: string;
    /**
      * 读写策略：r-只读，w-只写，rw-读写
注意：此字段可能返回 null，表示取不到有效值。
      */
    Privilege: string;
    /**
      * 路由策略：master-主节点，replication-从节点
注意：此字段可能返回 null，表示取不到有效值。
      */
    ReadonlyPolicy: Array<string>;
    /**
      * 子账号状态：1-账号变更中，2-账号有效，-4-账号已删除
注意：此字段可能返回 null，表示取不到有效值。
      */
    Status: number;
}
/**
 * 代理慢查询详情
 */
export interface InstanceProxySlowlogDetail {
    /**
      * 慢查询耗时
      */
    Duration: number;
    /**
      * 客户端地址
      */
    Client: string;
    /**
      * 命令
      */
    Command: string;
    /**
      * 详细命令行信息
      */
    CommandLine: string;
    /**
      * 执行时间
      */
    ExecuteTime: string;
}
/**
 * 安全组出入规则
 */
export interface SecurityGroupsInboundAndOutbound {
    /**
      * 执行动作
      */
    Action: string;
    /**
      * IP地址
      */
    Ip: string;
    /**
      * 端口号
      */
    Port: string;
    /**
      * 协议类型
      */
    Proto: string;
}
/**
 * ResetPassword返回参数结构体
 */
export interface ResetPasswordResponse {
    /**
      * 任务ID（修改密码时的任务ID，如果时切换免密码或者非免密码实例，则无需关注此返回值）
      */
    TaskId: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ClearInstance请求参数结构体
 */
export interface ClearInstanceRequest {
    /**
      * 实例ID
      */
    InstanceId: string;
    /**
      * redis的实例密码（免密实例不需要传密码，非免密实例必传）
      */
    Password?: string;
}
/**
 * 地域信息
 */
export interface RegionConf {
    /**
      * 地域ID
      */
    RegionId: string;
    /**
      * 地域名称
      */
    RegionName: string;
    /**
      * 地域简称
      */
    RegionShortName: string;
    /**
      * 地域所在大区名称
      */
    Area: string;
    /**
      * 可用区信息
      */
    ZoneSet: Array<ZoneCapacityConf>;
}
/**
 * 大Key详情
 */
export interface BigKeyInfo {
    /**
      * 所属的database
      */
    DB: number;
    /**
      * 大Key
      */
    Key: string;
    /**
      * 类型
      */
    Type: string;
    /**
      * 大小
      */
    Size: number;
    /**
      * 数据时间戳
      */
    Updatetime: number;
}
/**
 * DescribeParamTemplates请求参数结构体
 */
export interface DescribeParamTemplatesRequest {
    /**
      * 产品类型数组。产品类型：1 – Redis2.8内存版（集群架构），2 – Redis2.8内存版（标准架构），3 – CKV 3.2内存版(标准架构)，4 – CKV 3.2内存版(集群架构)，5 – Redis2.8内存版（单机），6 – Redis4.0内存版（标准架构），7 – Redis4.0内存版（集群架构），8 – Redis5.0内存版（标准架构），9 – Redis5.0内存版（集群架构）
      */
    ProductTypes?: Array<number>;
    /**
      * 模板名称数组。
      */
    TemplateNames?: Array<string>;
    /**
      * 模板ID数组。
      */
    TemplateIds?: Array<string>;
}
/**
 * RenewInstance请求参数结构体
 */
export interface RenewInstanceRequest {
    /**
      * 购买时长，单位：月
      */
    Period: number;
    /**
      * 实例ID
      */
    InstanceId: string;
}
/**
 * UpgradeVersionToMultiAvailabilityZones返回参数结构体
 */
export interface UpgradeVersionToMultiAvailabilityZonesResponse {
    /**
      * 任务ID
      */
    FlowId: number;
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
      * 总的修改历史记录数。
      */
    TotalCount: number;
    /**
      * 修改历史记录信息。
      */
    InstanceParamHistory: Array<InstanceParamHistory>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ModifyAutoBackupConfig请求参数结构体
 */
export interface ModifyAutoBackupConfigRequest {
    /**
      * 实例ID
      */
    InstanceId: string;
    /**
      * 日期 Monday，Tuesday，Wednesday，Thursday，Friday，Saturday，Sunday，该参数暂不支持修改。
      */
    WeekDays: Array<string>;
    /**
      * 时间段 00:00-01:00, 01:00-02:00...... 23:00-00:00
      */
    TimePeriod: string;
    /**
      * 自动备份类型： 1 “定时回档”
      */
    AutoBackupType?: number;
}
/**
 * 实例多选项类型参数描述
 */
export interface InstanceMultiParam {
    /**
      * 参数名
      */
    ParamName: string;
    /**
      * 参数类型：multi
      */
    ValueType: string;
    /**
      * 修改后是否需要重启：true，false
      */
    NeedRestart: string;
    /**
      * 参数默认值
      */
    DefaultValue: string;
    /**
      * 当前运行参数值
      */
    CurrentValue: string;
    /**
      * 参数说明
      */
    Tips: string;
    /**
      * 参数说明
      */
    EnumValue: Array<string>;
    /**
      * 参数状态, 1: 修改中， 2：修改完成
      */
    Status: number;
}
/**
 * DescribeInstanceDealDetail请求参数结构体
 */
export interface DescribeInstanceDealDetailRequest {
    /**
      * 订单交易ID数组，即 [CreateInstances](https://cloud.tencent.com/document/api/239/20026) 的输出参数DealId。
      */
    DealIds: Array<string>;
}
/**
 * Redis节点的运行信息
 */
export interface RedisNode {
    /**
      * 节点key的个数
      */
    Keys: number;
    /**
      * 节点slot分布
      */
    Slot: string;
    /**
      * 节点的序列ID
      */
    NodeId: string;
    /**
      * 节点的状态
      */
    Status: string;
    /**
      * 节点角色
      */
    Role: string;
}
/**
 * DescribeProjectSecurityGroup请求参数结构体
 */
export interface DescribeProjectSecurityGroupRequest {
    /**
      * 0:默认项目；-1 所有项目; >0: 特定项目
      */
    ProjectId?: number;
    /**
      * 安全组Id
      */
    SecurityGroupId?: string;
}
/**
 * Redis参数模板参数详情
 */
export interface ParameterDetail {
    /**
      * 参数名称
      */
    Name: string;
    /**
      * 参数类型
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
      * 修改参数后，是否需要重启数据库以使参数生效。可能的值包括：0-不需要重启；1-需要重启
      */
    NeedReboot: number;
    /**
      * 参数允许的最大值
注意：此字段可能返回 null，表示取不到有效值。
      */
    Max: string;
    /**
      * 参数允许的最小值
注意：此字段可能返回 null，表示取不到有效值。
      */
    Min: string;
    /**
      * 参数的可选枚举值。如果为非枚举参数，则为空
注意：此字段可能返回 null，表示取不到有效值。
      */
    EnumValue: Array<string>;
}
/**
 * DescribeInstanceShards返回参数结构体
 */
export interface DescribeInstanceShardsResponse {
    /**
      * 实例分片列表信息
      */
    InstanceShards: Array<InstanceClusterShard>;
    /**
      * 实例分片节点总数
      */
    TotalCount: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DestroyPrepaidInstance请求参数结构体
 */
export interface DestroyPrepaidInstanceRequest {
    /**
      * 实例ID
      */
    InstanceId: string;
}
/**
 * ManualBackupInstance返回参数结构体
 */
export interface ManualBackupInstanceResponse {
    /**
      * 任务ID
      */
    TaskId: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 任务信息详情
 */
export interface TaskInfoDetail {
    /**
      * 任务Id
注意：此字段可能返回 null，表示取不到有效值。
      */
    TaskId: number;
    /**
      * 开始时间
注意：此字段可能返回 null，表示取不到有效值。
      */
    StartTime: string;
    /**
      * 任务类型
注意：此字段可能返回 null，表示取不到有效值。
      */
    TaskType: string;
    /**
      * 实例名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    InstanceName: string;
    /**
      * 实例Id
注意：此字段可能返回 null，表示取不到有效值。
      */
    InstanceId: string;
    /**
      * 项目Id
注意：此字段可能返回 null，表示取不到有效值。
      */
    ProjectId: number;
    /**
      * 任务进度
注意：此字段可能返回 null，表示取不到有效值。
      */
    Progress: number;
    /**
      * 结束时间
注意：此字段可能返回 null，表示取不到有效值。
      */
    EndTime: string;
    /**
      * 任务状态
注意：此字段可能返回 null，表示取不到有效值。
      */
    Result: number;
}
/**
 * DisableReplicaReadonly返回参数结构体
 */
export interface DisableReplicaReadonlyResponse {
    /**
      * 任务ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    TaskId: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CreateParamTemplate返回参数结构体
 */
export interface CreateParamTemplateResponse {
    /**
      * 参数模板 ID。
      */
    TemplateId: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 实例标签信息
 */
export interface InstanceTagInfo {
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
 * DescribeInstanceDTSInfo返回参数结构体
 */
export interface DescribeInstanceDTSInfoResponse {
    /**
      * DTS任务ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    JobId: string;
    /**
      * DTS任务名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    JobName: string;
    /**
      * 任务状态,取值为：1-创建中(Creating),3-校验中(Checking)4-校验通过(CheckPass),5-校验不通过（CheckNotPass）,7-任务运行(Running),8-准备完成（ReadyComplete）,9-任务成功（Success）,10-任务失败（Failed）,11-撤销中（Stopping）,12-完成中（Completing）
注意：此字段可能返回 null，表示取不到有效值。
      */
    Status: number;
    /**
      * 状态描述
注意：此字段可能返回 null，表示取不到有效值。
      */
    StatusDesc: string;
    /**
      * 同步时延，单位：字节
注意：此字段可能返回 null，表示取不到有效值。
      */
    Offset: number;
    /**
      * 断开时间
注意：此字段可能返回 null，表示取不到有效值。
      */
    CutDownTime: string;
    /**
      * 源实例信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    SrcInfo: DescribeInstanceDTSInstanceInfo;
    /**
      * 目标实例信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    DstInfo: DescribeInstanceDTSInstanceInfo;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * AddReplicationInstance返回参数结构体
 */
export interface AddReplicationInstanceResponse {
    /**
      * 异步流程ID
      */
    TaskId: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DestroyPostpaidInstance返回参数结构体
 */
export interface DestroyPostpaidInstanceResponse {
    /**
      * 任务Id
      */
    TaskId: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * SwitchInstanceVip请求参数结构体
 */
export interface SwitchInstanceVipRequest {
    /**
      * 源实例ID
      */
    SrcInstanceId: string;
    /**
      * 目标实例ID
      */
    DstInstanceId: string;
    /**
      * 单位为秒。源实例与目标实例间DTS已断开时间，如果DTS断开时间大于TimeDelay，则不切换VIP，建议尽量根据业务设置一个可接受的值。
      */
    TimeDelay?: number;
    /**
      * 在DTS断开的情况下是否强制切换。1：强制切换，0：不强制切换
      */
    ForceSwitch?: number;
    /**
      * now: 立即切换，syncComplete：等待同步完成后切换
      */
    SwitchTime?: string;
}
/**
 * ChangeReplicaToMaster请求参数结构体
 */
export interface ChangeReplicaToMasterRequest {
    /**
      * 实例Id
      */
    InstanceId: string;
    /**
      * 副本组Id，多AZ实例必填
      */
    GroupId?: number;
}
/**
 * Proxy节点信息
 */
export interface ProxyNodes {
    /**
      * 节点ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    NodeId: string;
}
/**
 * ModifyInstance返回参数结构体
 */
export interface ModifyInstanceResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 单个实例信息
 */
export interface RedisCommonInstanceList {
    /**
      * 实例名称
      */
    InstanceName: string;
    /**
      * 实例id
      */
    InstanceId: string;
    /**
      * 用户id
      */
    AppId: number;
    /**
      * 实例所属项目id
      */
    ProjectId: number;
    /**
      * 实例接入区域
      */
    Region: string;
    /**
      * 实例接入zone
      */
    Zone: string;
    /**
      * 实例网络id
      */
    VpcId: string;
    /**
      * 子网id
      */
    SubnetId: string;
    /**
      * 实例状态信息，1-流程中 ,2-运行中, -2-实例已隔离 ,-3-实例待回收, -4-实例已删除
      */
    Status: string;
    /**
      * 实例网络ip
      */
    Vips: Array<string>;
    /**
      * 实例网络端口
      */
    Vport: number;
    /**
      * 实例创建时间
      */
    Createtime: string;
    /**
      * 计费类型，0-按量计费，1-包年包月
      */
    PayMode: number;
    /**
      * 网络类型，0-基础网络，1-VPC网络
      */
    NetType: number;
}
/**
 * 访问来源信息
 */
export interface SourceInfo {
    /**
      * 来源IP
      */
    Ip: string;
    /**
      * 连接数
      */
    Conn: number;
    /**
      * 命令
      */
    Cmd: number;
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
 * DescribeInstanceMonitorHotKey请求参数结构体
 */
export interface DescribeInstanceMonitorHotKeyRequest {
    /**
      * 实例Id
      */
    InstanceId: string;
    /**
      * 时间范围：1——实时，2——近30分钟，3——近6小时，4——近24小时
      */
    SpanType: number;
}
/**
 * DescribeInstanceDTSInfo请求参数结构体
 */
export interface DescribeInstanceDTSInfoRequest {
    /**
      * 实例ID
      */
    InstanceId: string;
}
/**
 * CreateParamTemplate请求参数结构体
 */
export interface CreateParamTemplateRequest {
    /**
      * 参数模板名称。
      */
    Name: string;
    /**
      * 参数模板描述。
      */
    Description?: string;
    /**
      * 产品类型：1 – Redis2.8内存版（集群架构），2 – Redis2.8内存版（标准架构），3 – CKV 3.2内存版(标准架构)，4 – CKV 3.2内存版(集群架构)，5 – Redis2.8内存版（单机），6 – Redis4.0内存版（标准架构），7 – Redis4.0内存版（集群架构），8 – Redis5.0内存版（标准架构），9 – Redis5.0内存版（集群架构）。创建模板时必填，从源模板复制则不需要传入该参数。
      */
    ProductType?: number;
    /**
      * 源参数模板 ID。
      */
    TemplateId?: string;
    /**
      * 参数列表。
      */
    ParamList?: Array<InstanceParam>;
}
/**
 * DescribeTendisSlowLog返回参数结构体
 */
export interface DescribeTendisSlowLogResponse {
    /**
      * 慢查询总数
      */
    TotalCount: number;
    /**
      * 慢查询详情
      */
    TendisSlowLogDetail: Array<TendisSlowLogDetail>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeProductInfo返回参数结构体
 */
export interface DescribeProductInfoResponse {
    /**
      * 地域售卖信息
      */
    RegionSet?: Array<RegionConf>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ModifyInstanceAccount请求参数结构体
 */
export interface ModifyInstanceAccountRequest {
    /**
      * 实例ID
      */
    InstanceId: string;
    /**
      * 子账号名称，如果要修改主账号，填root
      */
    AccountName: string;
    /**
      * 子账号密码
      */
    AccountPassword?: string;
    /**
      * 子账号描述信息
      */
    Remark?: string;
    /**
      * 路由策略：填写master或者replication，表示主节点或者从节点
      */
    ReadonlyPolicy?: Array<string>;
    /**
      * 子账号读写策略：填写r、w、rw，表示只读，只写，读写策略
      */
    Privilege?: string;
    /**
      * true表示将主账号切换为免密账号，这里只适用于主账号，子账号不可免密
      */
    NoAuth?: boolean;
}
/**
 * ModifyMaintenanceWindow请求参数结构体
 */
export interface ModifyMaintenanceWindowRequest {
    /**
      * 实例ID
      */
    InstanceId: string;
    /**
      * 维护时间窗起始时间，如：17:00
      */
    StartTime: string;
    /**
      * 维护时间窗结束时间，如：19:00
      */
    EndTime: string;
}
/**
 * DescribeParamTemplateInfo请求参数结构体
 */
export interface DescribeParamTemplateInfoRequest {
    /**
      * 参数模板 ID。
      */
    TemplateId: string;
}
/**
 * DescribeBackupUrl返回参数结构体
 */
export interface DescribeBackupUrlResponse {
    /**
      * 外网下载地址（6小时内链接有效），该字段正在逐步废弃中。
      */
    DownloadUrl: Array<string>;
    /**
      * 内网下载地址（6小时内链接有效），该字段正在逐步废弃中。
      */
    InnerDownloadUrl: Array<string>;
    /**
      * 文件名称，该字段正在逐步废弃中。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Filenames: Array<string>;
    /**
      * 备份文件信息列表
注意：此字段可能返回 null，表示取不到有效值。
      */
    BackupInfos: Array<BackupDownloadInfo>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * InquiryPriceRenewInstance返回参数结构体
 */
export interface InquiryPriceRenewInstanceResponse {
    /**
      * 价格，单位：分
注意：此字段可能返回 null，表示取不到有效值。
      */
    Price?: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeDBSecurityGroups请求参数结构体
 */
export interface DescribeDBSecurityGroupsRequest {
    /**
      * 数据库引擎名称，本接口取值：redis。
      */
    Product: string;
    /**
      * 实例ID，格式如：cdb-c1nl9rpv或者cdbro-c1nl9rpv，与云数据库控制台页面中显示的实例ID相同。
      */
    InstanceId: string;
}
/**
 * InquiryPriceCreateInstance返回参数结构体
 */
export interface InquiryPriceCreateInstanceResponse {
    /**
      * 价格，单位：分
注意：此字段可能返回 null，表示取不到有效值。
      */
    Price: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 实例安全组信息
 */
export interface InstanceSecurityGroupDetail {
    /**
      * 实例Id
      */
    InstanceId: string;
    /**
      * 安全组信息
      */
    SecurityGroupDetails: Array<SecurityGroupDetail>;
}
/**
 * ResetPassword请求参数结构体
 */
export interface ResetPasswordRequest {
    /**
      * Redis实例ID
      */
    InstanceId: string;
    /**
      * 重置的密码（切换为免密实例时，可不传；其他情况必传）
      */
    Password?: string;
    /**
      * 是否切换免密实例，false-切换为非免密码实例，true-切换为免密码实例；默认false
      */
    NoAuth?: boolean;
}
/**
 * ModifyInstanceAccount返回参数结构体
 */
export interface ModifyInstanceAccountResponse {
    /**
      * 任务ID
      */
    TaskId: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 延时分布详情
 */
export interface DelayDistribution {
    /**
      * 分布阶梯，延时和Ladder值的对应关系：
[0ms,1ms]: 1；
[1ms,5ms]: 5；
[5ms,10ms]: 10；
[10ms,50ms]: 50；
[50ms,200ms]: 200；
[200ms,∞]: -1。
      */
    Ladder: number;
    /**
      * 延时处于当前分布阶梯的命令数量，个。
      */
    Size: number;
    /**
      * 修改时间。
      */
    Updatetime: number;
}
/**
 * DescribeProjectSecurityGroups返回参数结构体
 */
export interface DescribeProjectSecurityGroupsResponse {
    /**
      * 安全组规则。
      */
    Groups: Array<SecurityGroup>;
    /**
      * 符合条件的安全组总数量。
      */
    Total: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeInstanceMonitorTookDist返回参数结构体
 */
export interface DescribeInstanceMonitorTookDistResponse {
    /**
      * 时延分布信息
      */
    Data?: Array<DelayDistribution>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeInstanceBackups返回参数结构体
 */
export interface DescribeInstanceBackupsResponse {
    /**
      * 备份总数
      */
    TotalCount: number;
    /**
      * 实例的备份数组
      */
    BackupSet: Array<RedisBackupSet>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 实例整型参数描述
 */
export interface InstanceIntegerParam {
    /**
      * 参数名
      */
    ParamName: string;
    /**
      * 参数类型：integer
      */
    ValueType: string;
    /**
      * 修改后是否需要重启：true，false
      */
    NeedRestart: string;
    /**
      * 参数默认值
      */
    DefaultValue: string;
    /**
      * 当前运行参数值
      */
    CurrentValue: string;
    /**
      * 参数说明
      */
    Tips: string;
    /**
      * 参数最小值
      */
    Min: string;
    /**
      * 参数最大值
      */
    Max: string;
    /**
      * 参数状态, 1: 修改中， 2：修改完成
      */
    Status: number;
    /**
      * 参数单位
注意：此字段可能返回 null，表示取不到有效值。
      */
    Unit: string;
}
/**
 * UpgradeVersionToMultiAvailabilityZones请求参数结构体
 */
export interface UpgradeVersionToMultiAvailabilityZonesRequest {
    /**
      * 实例ID
      */
    InstanceId: string;
    /**
      * 是否升级proxy和redis内核版本，升级后可支持就近接入
      */
    UpgradeProxyAndRedisServer?: boolean;
}
/**
 * AllocateWanAddress返回参数结构体
 */
export interface AllocateWanAddressResponse {
    /**
      * 异步流程ID
      */
    FlowId: number;
    /**
      * 开通外网的状态
      */
    WanStatus: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeInstanceMonitorTookDist请求参数结构体
 */
export interface DescribeInstanceMonitorTookDistRequest {
    /**
      * 实例Id
      */
    InstanceId: string;
    /**
      * 时间；例如："20190219"
      */
    Date: string;
    /**
      * 时间范围：1——实时，2——近30分钟，3——近6小时，4——近24小时
      */
    SpanType: number;
}
/**
 * DeleteReplicationInstance请求参数结构体
 */
export interface DeleteReplicationInstanceRequest {
    /**
      * 复制组ID
      */
    GroupId: string;
    /**
      * 实例ID
      */
    InstanceId: string;
    /**
      * 数据同步类型，true:需要数据强同步,false:不需要强同步，仅限删除主实例
      */
    SyncType: boolean;
}
/**
 * KillMasterGroup请求参数结构体
 */
export interface KillMasterGroupRequest {
    /**
      * 实例ID
      */
    InstanceId: string;
    /**
      * 1.长度8-30位,推荐使用12位以上的密码
2.不能以"/"开头
3.至少包含两项
    a.小写字母a-z
    b.大写字母A-Z
    c.数字0-9
    d.()`~!@#$%^&*-+=_|{}[]:;<>,.?/
      */
    Password: string;
    /**
      * 单AZ实例节点信息
      */
    ShardIds?: Array<number>;
}
/**
 * 实例字符型参数描述
 */
export interface InstanceTextParam {
    /**
      * 参数名
      */
    ParamName: string;
    /**
      * 参数类型：text
      */
    ValueType: string;
    /**
      * 修改后是否需要重启：true，false
      */
    NeedRestart: string;
    /**
      * 参数默认值
      */
    DefaultValue: string;
    /**
      * 当前运行参数值
      */
    CurrentValue: string;
    /**
      * 参数说明
      */
    Tips: string;
    /**
      * 参数可取值
      */
    TextValue: Array<string>;
    /**
      * 参数状态, 1: 修改中， 2：修改完成
      */
    Status: number;
}
/**
 * 参数模板信息
 */
export interface ParamTemplateInfo {
    /**
      * 参数模板ID
      */
    TemplateId: string;
    /**
      * 参数模板名称
      */
    Name: string;
    /**
      * 参数模板描述
      */
    Description: string;
    /**
      * 产品类型：1 – Redis2.8内存版（集群架构），2 – Redis2.8内存版（标准架构），3 – CKV 3.2内存版(标准架构)，4 – CKV 3.2内存版(集群架构)，5 – Redis2.8内存版（单机），6 – Redis4.0内存版（标准架构），7 – Redis4.0内存版（集群架构），8 – Redis5.0内存版（标准架构），9 – Redis5.0内存版（集群架构）
      */
    ProductType: number;
}
/**
 * DescribeInstanceMonitorTopNCmdTook返回参数结构体
 */
export interface DescribeInstanceMonitorTopNCmdTookResponse {
    /**
      * 耗时详细信息
      */
    Data: Array<CommandTake>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeInstanceMonitorBigKeySizeDist请求参数结构体
 */
export interface DescribeInstanceMonitorBigKeySizeDistRequest {
    /**
      * 实例Id
      */
    InstanceId: string;
    /**
      * 时间；例如："20190219"
      */
    Date: string;
}
/**
 * DescribeInstanceAccount请求参数结构体
 */
export interface DescribeInstanceAccountRequest {
    /**
      * 实例ID
      */
    InstanceId: string;
    /**
      * 分页大小
      */
    Limit: number;
    /**
      * 分页偏移量
      */
    Offset: number;
}
/**
 * DescribeInstanceParamRecords请求参数结构体
 */
export interface DescribeInstanceParamRecordsRequest {
    /**
      * 实例Id
      */
    InstanceId: string;
    /**
      * 分页大小
      */
    Limit?: number;
    /**
      * 偏移量，取Limit整数倍
      */
    Offset?: number;
}
/**
 * DescribeTaskList请求参数结构体
 */
export interface DescribeTaskListRequest {
    /**
      * 实例Id
      */
    InstanceId?: string;
    /**
      * 实例名称
      */
    InstanceName?: string;
    /**
      * 分页大小,默认20，上限不大于100
      */
    Limit?: number;
    /**
      * 偏移量，取Limit整数倍（自动向下取整）
      */
    Offset?: number;
    /**
      * 项目Id
      */
    ProjectIds?: Array<number>;
    /**
      * 任务类型
      */
    TaskTypes?: Array<string>;
    /**
      * 起始时间
      */
    BeginTime?: string;
    /**
      * 终止时间
      */
    EndTime?: string;
    /**
      * 任务状态
      */
    TaskStatus?: Array<number>;
}
/**
 * ChangeReplicaToMaster返回参数结构体
 */
export interface ChangeReplicaToMasterResponse {
    /**
      * 异步任务ID
      */
    TaskId: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CreateInstances返回参数结构体
 */
export interface CreateInstancesResponse {
    /**
      * 交易的ID
      */
    DealId: string;
    /**
      * 实例ID
      */
    InstanceIds: Array<string>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeTaskInfo请求参数结构体
 */
export interface DescribeTaskInfoRequest {
    /**
      * 任务ID
      */
    TaskId: number;
}
/**
 * ApplyParamsTemplate返回参数结构体
 */
export interface ApplyParamsTemplateResponse {
    /**
      * 任务ID
      */
    TaskIds: Array<number>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeReplicationGroup请求参数结构体
 */
export interface DescribeReplicationGroupRequest {
    /**
      * 实例列表的大小，参数默认值20
      */
    Limit: number;
    /**
      * 偏移量，取Limit整数倍
      */
    Offset: number;
    /**
      * 复制组ID
      */
    GroupId?: string;
    /**
      * 实例ID和实例名称，支持模糊查询
      */
    SearchKey?: string;
}
/**
 * Redis节点信息
 */
export interface RedisNodes {
    /**
      * 节点ID
      */
    NodeId: string;
    /**
      * 节点角色
      */
    NodeRole: string;
    /**
      * 分片ID
      */
    ClusterId: number;
    /**
      * 可用区ID
      */
    ZoneId: number;
}
/**
 * DescribeInstanceMonitorTopNCmd请求参数结构体
 */
export interface DescribeInstanceMonitorTopNCmdRequest {
    /**
      * 实例Id
      */
    InstanceId: string;
    /**
      * 时间范围：1——实时，2——近30分钟，3——近6小时，4——近24小时
      */
    SpanType: number;
}
/**
 * ModifyNetworkConfig请求参数结构体
 */
export interface ModifyNetworkConfigRequest {
    /**
      * 实例ID
      */
    InstanceId: string;
    /**
      * 操作类型：changeVip——修改实例VIP；changeVpc——修改实例子网；changeBaseToVpc——基础网络转VPC网络
      */
    Operation: string;
    /**
      * VIP地址，changeVip的时候填写，不填则默认分配
      */
    Vip?: string;
    /**
      * 私有网络ID，changeVpc、changeBaseToVpc的时候需要提供
      */
    VpcId?: string;
    /**
      * 子网ID，changeVpc、changeBaseToVpc的时候需要提供
      */
    SubnetId?: string;
    /**
      * vip保留时间，单位：天，注：需要最新版SDK支持
      */
    Recycle?: number;
}
/**
 * DescribeInstanceSecurityGroup请求参数结构体
 */
export interface DescribeInstanceSecurityGroupRequest {
    /**
      * 实例列表
      */
    InstanceIds: Array<string>;
}
/**
 * 实例参数修改历史
 */
export interface InstanceParamHistory {
    /**
      * 参数名称
      */
    ParamName: string;
    /**
      * 修改前值
      */
    PreValue: string;
    /**
      * 修改后值
      */
    NewValue: string;
    /**
      * 状态：1-参数配置修改中；2-参数配置修改成功；3-参数配置修改失败
      */
    Status: number;
    /**
      * 修改时间
      */
    ModifyTime: string;
}
/**
 * DescribeInstanceParams请求参数结构体
 */
export interface DescribeInstanceParamsRequest {
    /**
      * 实例Id
      */
    InstanceId: string;
}
/**
 * CleanUpInstance返回参数结构体
 */
export interface CleanUpInstanceResponse {
    /**
      * 任务ID
      */
    TaskId: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ModifyDBInstanceSecurityGroups请求参数结构体
 */
export interface ModifyDBInstanceSecurityGroupsRequest {
    /**
      * 数据库引擎名称：mariadb,cdb,cynosdb,dcdb,redis,mongodb 等。
      */
    Product: string;
    /**
      * 要修改的安全组ID列表，一个或者多个安全组Id组成的数组。
      */
    SecurityGroupIds: Array<string>;
    /**
      * 实例ID，格式如：cdb-c1nl9rpv或者cdbro-c1nl9rpv，与云数据库控制台页面中显示的实例ID相同
      */
    InstanceId: string;
}
/**
 * DescribeParamTemplates返回参数结构体
 */
export interface DescribeParamTemplatesResponse {
    /**
      * 该用户的参数模板数量。
      */
    TotalCount: number;
    /**
      * 参数模板详情。
      */
    Items: Array<ParamTemplateInfo>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeInstanceShards请求参数结构体
 */
export interface DescribeInstanceShardsRequest {
    /**
      * 实例ID
      */
    InstanceId: string;
    /**
      * 是否过滤掉从节信息
      */
    FilterSlave?: boolean;
}
/**
 * 安全组出站规则
 */
export interface Outbound {
    /**
      * 策略，ACCEPT或者DROP。
      */
    Action: string;
    /**
      * 地址组id代表的地址集合。
      */
    AddressModule: string;
    /**
      * 来源Ip或Ip段，例如192.168.0.0/16。
      */
    CidrIp: string;
    /**
      * 描述。
      */
    Desc: string;
    /**
      * 网络协议，支持udp、tcp等。
      */
    IpProtocol: string;
    /**
      * 端口。
      */
    PortRange: string;
    /**
      * 服务组id代表的协议和端口集合。
      */
    ServiceModule: string;
    /**
      * 安全组id代表的地址集合。
      */
    Id: string;
}
/**
 * DescribeAutoBackupConfig返回参数结构体
 */
export interface DescribeAutoBackupConfigResponse {
    /**
      * 备份类型。自动备份类型： 1 “定时回档”
      */
    AutoBackupType: number;
    /**
      * Monday，Tuesday，Wednesday，Thursday，Friday，Saturday，Sunday。
      */
    WeekDays: Array<string>;
    /**
      * 时间段。
      */
    TimePeriod: string;
    /**
      * 全量备份文件保存天数
      */
    BackupStorageDays: number;
    /**
      * tendis binlog备份文件保存天数
      */
    BinlogStorageDays: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * InquiryPriceUpgradeInstance请求参数结构体
 */
export interface InquiryPriceUpgradeInstanceRequest {
    /**
      * 实例Id
      */
    InstanceId: string;
    /**
      * 分片大小 单位 MB
      */
    MemSize: number;
    /**
      * 分片数量，Redis2.8主从版、CKV主从版和Redis2.8单机版不需要填写
      */
    RedisShardNum?: number;
    /**
      * 副本数量，Redis2.8主从版、CKV主从版和Redis2.8单机版不需要填写
      */
    RedisReplicasNum?: number;
}
/**
 * ModifyParamTemplate返回参数结构体
 */
export interface ModifyParamTemplateResponse {
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
      * 数据库引擎名称：mariadb,cdb,cynosdb,dcdb,redis,mongodb
      */
    Product: string;
    /**
      * 项目Id。
      */
    ProjectId: number;
    /**
      * 偏移量。
      */
    Offset?: number;
    /**
      * 拉取数量限制，默认20
      */
    Limit?: number;
    /**
      * 搜索条件，支持安全组id或者安全组名称。
      */
    SearchKey?: string;
}
/**
 * DescribeInstanceMonitorBigKeySizeDist返回参数结构体
 */
export interface DescribeInstanceMonitorBigKeySizeDistResponse {
    /**
      * 大Key大小分布详情
      */
    Data?: Array<DelayDistribution>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 安全组规则
 */
export interface SecurityGroup {
    /**
      * 创建时间，时间格式：yyyy-mm-dd hh:mm:ss。
      */
    CreateTime: string;
    /**
      * 项目ID。
      */
    ProjectId: number;
    /**
      * 安全组ID。
      */
    SecurityGroupId: string;
    /**
      * 安全组名称。
      */
    SecurityGroupName: string;
    /**
      * 安全组备注。
      */
    SecurityGroupRemark: string;
    /**
      * 出站规则。
      */
    Outbound: Array<Outbound>;
    /**
      * 入站规则。
      */
    Inbound: Array<Inbound>;
}
/**
 * CreateInstanceAccount请求参数结构体
 */
export interface CreateInstanceAccountRequest {
    /**
      * 实例ID
      */
    InstanceId: string;
    /**
      * 子账号名称
      */
    AccountName: string;
    /**
      * 1.长度8-30位,推荐使用12位以上的密码
2.不能以"/"开头
3.至少包含两项
    a.小写字母a-z
    b.大写字母A-Z
    c.数字0-9
    d.()`~!@#$%^&*-+=_|{}[]:;<>,.?/
      */
    AccountPassword: string;
    /**
      * 路由策略：填写master或者replication，表示主节点或者从节点
      */
    ReadonlyPolicy: Array<string>;
    /**
      * 读写策略：填写r、rw，表示只读、读写
      */
    Privilege: string;
    /**
      * 子账号描述信息
      */
    Remark?: string;
}
/**
 * EnableReplicaReadonly返回参数结构体
 */
export interface EnableReplicaReadonlyResponse {
    /**
      * 错误：ERROR，正确OK（已废弃）
注意：此字段可能返回 null，表示取不到有效值。
      */
    Status: string;
    /**
      * 任务ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    TaskId: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeMaintenanceWindow返回参数结构体
 */
export interface DescribeMaintenanceWindowResponse {
    /**
      * 维护时间窗起始时间，如：17:00
      */
    StartTime?: string;
    /**
      * 维护时间窗结束时间，如：19:00
      */
    EndTime?: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeInstanceSecurityGroup返回参数结构体
 */
export interface DescribeInstanceSecurityGroupResponse {
    /**
      * 实例安全组信息
      */
    InstanceSecurityGroupsDetail: Array<InstanceSecurityGroupDetail>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ReleaseWanAddress返回参数结构体
 */
export interface ReleaseWanAddressResponse {
    /**
      * 异步流程ID
      */
    FlowId: number;
    /**
      * 关闭外网的状态
      */
    WanStatus: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 产品信息
 */
export interface ProductConf {
    /**
      * 产品类型，2 – Redis2.8内存版(标准架构)，3 – CKV 3.2内存版(标准架构)，4 – CKV 3.2内存版(集群架构)，5 – Redis2.8内存版(单机版)，6 – Redis4.0内存版(标准架构)，7 – Redis4.0内存版(集群架构)，8 – Redis5.0内存版(标准架构)，9 – Redis5.0内存版(集群架构)，10 – Redis4.0混合存储版Tendis
      */
    Type: number;
    /**
      * 产品名称，Redis主从版，CKV主从版，CKV集群版，Redis单机版，Redis集群版，混合存储版Tendis
      */
    TypeName: string;
    /**
      * 购买时的最小数量
      */
    MinBuyNum: number;
    /**
      * 购买时的最大数量
      */
    MaxBuyNum: number;
    /**
      * 产品是否售罄
      */
    Saleout: boolean;
    /**
      * 产品引擎，腾讯云CKV或者社区版Redis
      */
    Engine: string;
    /**
      * 兼容版本，Redis-2.8，Redis-3.2，Redis-4.0
      */
    Version: string;
    /**
      * 规格总大小，单位G
      */
    TotalSize: Array<string>;
    /**
      * 每个分片大小，单位G
      */
    ShardSize: Array<string>;
    /**
      * 副本数量
      */
    ReplicaNum: Array<string>;
    /**
      * 分片数量
      */
    ShardNum: Array<string>;
    /**
      * 支持的计费模式，1-包年包月，0-按量计费
      */
    PayMode: string;
    /**
      * 是否支持副本只读
      */
    EnableRepicaReadOnly: boolean;
}
/**
 * ModifyConnectionConfig请求参数结构体
 */
export interface ModifyConnectionConfigRequest {
    /**
      * 实例的ID，长度在12-36之间。
      */
    InstanceId: string;
    /**
      * 附加带宽，大于0，单位MB。
      */
    Bandwidth?: number;
    /**
      * 单分片的总连接数。
未开启副本只读时，下限为10000，上限为40000；
开启副本只读时，下限为10000，上限为10000×(只读副本数+3)。
      */
    ClientLimit?: number;
}
/**
 * 实例节点
 */
export interface InstanceNode {
    /**
      * Id
      */
    Id: number;
    /**
      * 节点详细信息
      */
    InstanceClusterNode: Array<InstanceClusterNode>;
}
/**
 * tendis节点信息
 */
export interface TendisNodes {
    /**
      * 节点ID
      */
    NodeId: string;
    /**
      * 节点角色
      */
    NodeRole: string;
}
/**
 * StartupInstance返回参数结构体
 */
export interface StartupInstanceResponse {
    /**
      * 任务id
      */
    TaskId: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 详细DTS实例信息
 */
export interface DescribeInstanceDTSInstanceInfo {
    /**
      * 地域ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    RegionId: number;
    /**
      * 实例ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    InstanceId: string;
    /**
      * 仓库ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    SetId: number;
    /**
      * 可用区ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    ZoneId: number;
    /**
      * 实例类型
注意：此字段可能返回 null，表示取不到有效值。
      */
    Type: number;
    /**
      * 实例名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    InstanceName: string;
    /**
      * 实例访问地址
注意：此字段可能返回 null，表示取不到有效值。
      */
    Vip: string;
    /**
      * 状态
注意：此字段可能返回 null，表示取不到有效值。
      */
    Status: number;
}
/**
 * 订单交易信息
 */
export interface TradeDealDetail {
    /**
      * 订单号ID，调用云API时使用此ID
      */
    DealId: string;
    /**
      * 长订单ID，反馈订单问题给官方客服使用此ID
      */
    DealName: string;
    /**
      * 可用区id
      */
    ZoneId: number;
    /**
      * 订单关联的实例数
      */
    GoodsNum: number;
    /**
      * 创建用户uin
      */
    Creater: string;
    /**
      * 订单创建时间
      */
    CreatTime: string;
    /**
      * 订单超时时间
      */
    OverdueTime: string;
    /**
      * 订单完成时间
      */
    EndTime: string;
    /**
      * 订单状态 1：未支付 2:已支付，未发货 3:发货中 4:发货成功 5:发货失败 6:已退款 7:已关闭订单 8:订单过期 9:订单已失效 10:产品已失效 11:代付拒绝 12:支付中
      */
    Status: number;
    /**
      * 订单状态描述
      */
    Description: string;
    /**
      * 订单实际总价，单位：分
      */
    Price: number;
    /**
      * 实例ID
      */
    InstanceIds: Array<string>;
}
/**
 * API购买实例绑定标签
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
 * AssociateSecurityGroups返回参数结构体
 */
export interface AssociateSecurityGroupsResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 实例节点信息
 */
export interface ReplicaGroup {
    /**
      * 节点组ID
      */
    GroupId: number;
    /**
      * 节点组的名称，主节点为空
      */
    GroupName: string;
    /**
      * 节点的可用区ID，比如ap-guangzhou-1
      */
    ZoneId: string;
    /**
      * 节点组类型，master为主节点，replica为副本节点
      */
    Role: string;
    /**
      * 节点组节点列表
      */
    RedisNodes: Array<RedisNode>;
}
/**
 * DescribeTaskInfo返回参数结构体
 */
export interface DescribeTaskInfoResponse {
    /**
      * 任务状态preparing:待执行，running：执行中，succeed：成功，failed：失败，error 执行出错
      */
    Status: string;
    /**
      * 任务开始时间
      */
    StartTime: string;
    /**
      * 任务类型
      */
    TaskType: string;
    /**
      * 实例的ID
      */
    InstanceId: string;
    /**
      * 任务信息，错误时显示错误信息。执行中与成功则为空
      */
    TaskMessage: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeInstanceMonitorBigKeyTypeDist返回参数结构体
 */
export interface DescribeInstanceMonitorBigKeyTypeDistResponse {
    /**
      * 大Key类型分布详细信息
      */
    Data?: Array<BigKeyTypeInfo>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DeleteReplicationInstance返回参数结构体
 */
export interface DeleteReplicationInstanceResponse {
    /**
      * 异步任务ID
      */
    TaskId: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CleanUpInstance请求参数结构体
 */
export interface CleanUpInstanceRequest {
    /**
      * 实例ID
      */
    InstanceId: string;
}
/**
 * DescribeInstanceDealDetail返回参数结构体
 */
export interface DescribeInstanceDealDetailResponse {
    /**
      * 订单详细信息
      */
    DealDetails: Array<TradeDealDetail>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 复制组信息
 */
export interface Groups {
    /**
      * 用户AppID
      */
    AppId: number;
    /**
      * 地域ID 1--广州 4--上海 5-- 中国香港 6--多伦多 7--上海金融 8--北京 9-- 新加坡 11--深圳金融 15--美西（硅谷）16--成都 17--德国 18--韩国 19--重庆 21--印度 22--美东（弗吉尼亚）23--泰国 24--俄罗斯 25--日本
      */
    RegionId: number;
    /**
      * 复制组信息
      */
    GroupId: string;
    /**
      * 复制组名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    GroupName: string;
    /**
      * 复制组状态，37："绑定复制组中"，38："复制组重连中"，51："解绑复制组中"，52："复制组实例切主中"，53："角色变更中"
      */
    Status: number;
    /**
      * 复制组数量
      */
    InstanceCount: number;
    /**
      * 复制组实例
注意：此字段可能返回 null，表示取不到有效值。
      */
    Instances: Array<Instances>;
    /**
      * 备注信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    Remark: string;
}
/**
 * DescribeInstances请求参数结构体
 */
export interface DescribeInstancesRequest {
    /**
      * 实例列表的大小，参数默认值20，传值则以传参为准，如果传参大于具体配置etc/conf/component.properties中的DescribeInstancesPageLimit配置项 （读不到配置默认配置项为1000），则以配置项为准
      */
    Limit?: number;
    /**
      * 偏移量，取Limit整数倍
      */
    Offset?: number;
    /**
      * 实例Id，如：crs-6ubhgouj
      */
    InstanceId?: string;
    /**
      * 枚举范围： projectId,createtime,instancename,type,curDeadline
      */
    OrderBy?: string;
    /**
      * 1倒序，0顺序，默认倒序
      */
    OrderType?: number;
    /**
      * 私有网络ID数组，数组下标从0开始，如果不传则默认选择基础网络，如：47525
      */
    VpcIds?: Array<string>;
    /**
      * 子网ID数组，数组下标从0开始，如：56854
      */
    SubnetIds?: Array<string>;
    /**
      * 项目ID 组成的数组，数组下标从0开始
      */
    ProjectIds?: Array<number>;
    /**
      * 查找实例的ID。
      */
    SearchKey?: string;
    /**
      * 实例名称
      */
    InstanceName?: string;
    /**
      * 私有网络ID数组，数组下标从0开始，如果不传则默认选择基础网络，如：vpc-sad23jfdfk
      */
    UniqVpcIds?: Array<string>;
    /**
      * 子网ID数组，数组下标从0开始，如：subnet-fdj24n34j2
      */
    UniqSubnetIds?: Array<string>;
    /**
      * 地域ID，已经弃用，可通过公共参数Region查询对应地域
      */
    RegionIds?: Array<number>;
    /**
      * 实例状态：0-待初始化，1-流程中，2-运行中，-2-已隔离，-3-待删除
      */
    Status?: Array<number>;
    /**
      * 类型版本：1-单机版,2-主从版,3-集群版
      */
    TypeVersion?: number;
    /**
      * 引擎信息：Redis-2.8，Redis-4.0，CKV
      */
    EngineName?: string;
    /**
      * 续费模式：0 - 默认状态（手动续费）；1 - 自动续费；2 - 明确不自动续费
      */
    AutoRenew?: Array<number>;
    /**
      * 计费模式：postpaid-按量计费；prepaid-包年包月
      */
    BillingMode?: string;
    /**
      * 实例类型：1-Redis老集群版；2-Redis 2.8主从版；3-CKV主从版；4-CKV集群版；5-Redis 2.8单机版；6-Redis 4.0主从版；7-Redis 4.0集群版；8 – Redis5.0主从版，9 – Redis5.0集群版，
      */
    Type?: number;
    /**
      * 搜索关键词：支持实例Id、实例名称、完整IP
      */
    SearchKeys?: Array<string>;
    /**
      * 内部参数，用户可忽略
      */
    TypeList?: Array<number>;
    /**
      * 内部参数，用户可忽略
      */
    MonitorVersion?: string;
    /**
      * 根据标签的Key和Value筛选资源，不传或者传空数组则不进行过滤
      */
    InstanceTags?: Array<InstanceTagInfo>;
    /**
      * 根据标签的Key筛选资源，不传或者传空数组则不进行过滤
      */
    TagKeys?: Array<string>;
}
/**
 * 访问命令
 */
export interface SourceCommand {
    /**
      * 命令
      */
    Cmd: string;
    /**
      * 执行次数
      */
    Count: number;
}
/**
 * ModfiyInstancePassword请求参数结构体
 */
export interface ModfiyInstancePasswordRequest {
    /**
      * 实例ID
      */
    InstanceId: string;
    /**
      * 实例旧密码
      */
    OldPassword: string;
    /**
      * 实例新密码
      */
    Password: string;
}
/**
 * DescribeSlowLog请求参数结构体
 */
export interface DescribeSlowLogRequest {
    /**
      * 实例Id
      */
    InstanceId: string;
    /**
      * 开始时间
      */
    BeginTime: string;
    /**
      * 结束时间
      */
    EndTime: string;
    /**
      * 慢查询阈值（单位：微秒）
      */
    MinQueryTime?: number;
    /**
      * 页面大小
      */
    Limit?: number;
    /**
      * 偏移量，取Limit整数倍
      */
    Offset?: number;
}
/**
 * DeleteParamTemplate请求参数结构体
 */
export interface DeleteParamTemplateRequest {
    /**
      * 参数模板 ID。
      */
    TemplateId: string;
}
/**
 * DescribeAutoBackupConfig请求参数结构体
 */
export interface DescribeAutoBackupConfigRequest {
    /**
      * 实例ID
      */
    InstanceId: string;
}
/**
 * DescribeInstanceMonitorSIP返回参数结构体
 */
export interface DescribeInstanceMonitorSIPResponse {
    /**
      * 访问来源信息
      */
    Data?: Array<SourceInfo>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DestroyPostpaidInstance请求参数结构体
 */
export interface DestroyPostpaidInstanceRequest {
    /**
      * 实例ID
      */
    InstanceId: string;
}
/**
 * DeleteInstanceAccount请求参数结构体
 */
export interface DeleteInstanceAccountRequest {
    /**
      * 实例ID
      */
    InstanceId: string;
    /**
      * 子账号名称
      */
    AccountName: string;
}
/**
 * UpgradeInstance返回参数结构体
 */
export interface UpgradeInstanceResponse {
    /**
      * 订单ID
      */
    DealId: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ManualBackupInstance请求参数结构体
 */
export interface ManualBackupInstanceRequest {
    /**
      * 待操作的实例ID，可通过 DescribeInstance接口返回值中的 InstanceId 获取。
      */
    InstanceId: string;
    /**
      * 备份的备注信息
      */
    Remark?: string;
    /**
      * 保存天数。0代表指定默认保留时间
      */
    StorageDays?: number;
}
/**
 * DescribeReplicationGroup返回参数结构体
 */
export interface DescribeReplicationGroupResponse {
    /**
      * 复制组数
      */
    TotalCount: number;
    /**
      * 复制组信息
      */
    Groups: Array<Groups>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ModifyParamTemplate请求参数结构体
 */
export interface ModifyParamTemplateRequest {
    /**
      * 源参数模板 ID。
      */
    TemplateId: string;
    /**
      * 参数模板修改后的新名称。
      */
    Name?: string;
    /**
      * 参数模板修改后的新描述。
      */
    Description?: string;
    /**
      * 修改后的新参数列表。
      */
    ParamList?: Array<InstanceParam>;
}
/**
 * ModfiyInstancePassword返回参数结构体
 */
export interface ModfiyInstancePasswordResponse {
    /**
      * 任务ID
      */
    TaskId?: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 实例详细信息列表
 */
export interface InstanceSet {
    /**
      * 实例名称
      */
    InstanceName: string;
    /**
      * 实例Id
      */
    InstanceId: string;
    /**
      * 用户的Appid
      */
    Appid: number;
    /**
      * 项目Id
      */
    ProjectId: number;
    /**
      * 地域id 1--广州 4--上海 5-- 中国香港 6--多伦多 7--上海金融 8--北京 9-- 新加坡 11--深圳金融 15--美西（硅谷）16--成都 17--德国 18--韩国 19--重庆 21--印度 22--美东（弗吉尼亚）23--泰国 24--俄罗斯 25--日本
      */
    RegionId: number;
    /**
      * 区域id
      */
    ZoneId: number;
    /**
      * vpc网络id 如：75101
      */
    VpcId: number;
    /**
      * vpc网络下子网id 如：46315
      */
    SubnetId: number;
    /**
      * 实例当前状态，0：待初始化；1：实例在流程中；2：实例运行中；-2：实例已隔离；-3：实例待删除
      */
    Status: number;
    /**
      * 实例vip
      */
    WanIp: string;
    /**
      * 实例端口号
      */
    Port: number;
    /**
      * 实例创建时间
      */
    Createtime: string;
    /**
      * 实例容量大小，单位：MB
      */
    Size: number;
    /**
      * 该字段已废弃
      */
    SizeUsed: number;
    /**
      * 实例类型：1 – Redis2.8内存版（集群架构），2 – Redis2.8内存版（标准架构），3 – CKV 3.2内存版(标准架构)，4 – CKV 3.2内存版(集群架构)，5 – Redis2.8内存版（单机），6 – Redis4.0内存版（标准架构），7 – Redis4.0内存版（集群架构），8 – Redis5.0内存版（标准架构），9 – Redis5.0内存版（集群架构）
      */
    Type: number;
    /**
      * 实例是否设置自动续费标识，1：设置自动续费；0：未设置自动续费
      */
    AutoRenewFlag: number;
    /**
      * 实例到期时间
      */
    DeadlineTime: string;
    /**
      * 引擎：社区版Redis、腾讯云CKV
      */
    Engine: string;
    /**
      * 产品类型：standalone – 标准版，cluster – 集群版
      */
    ProductType: string;
    /**
      * vpc网络id 如：vpc-fk33jsf43kgv
      */
    UniqVpcId: string;
    /**
      * vpc网络下子网id 如：subnet-fd3j6l35mm0
      */
    UniqSubnetId: string;
    /**
      * 计费模式：0-按量计费，1-包年包月
      */
    BillingMode: number;
    /**
      * 实例运行状态描述：如”实例运行中“
      */
    InstanceTitle: string;
    /**
      * 计划下线时间
      */
    OfflineTime: string;
    /**
      * 流程中的实例，返回子状态
      */
    SubStatus: number;
    /**
      * 反亲和性标签
      */
    Tags: Array<string>;
    /**
      * 实例节点信息
      */
    InstanceNode: Array<InstanceNode>;
    /**
      * 分片大小
      */
    RedisShardSize: number;
    /**
      * 分片数量
      */
    RedisShardNum: number;
    /**
      * 副本数量
      */
    RedisReplicasNum: number;
    /**
      * 计费Id
      */
    PriceId: number;
    /**
      * 隔离时间
      */
    CloseTime: string;
    /**
      * 从节点读取权重
      */
    SlaveReadWeight: number;
    /**
      * 实例关联的标签信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    InstanceTags: Array<InstanceTagInfo>;
    /**
      * 项目名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    ProjectName: string;
    /**
      * 是否为免密实例，true-免密实例；false-非免密实例
注意：此字段可能返回 null，表示取不到有效值。
      */
    NoAuth: boolean;
    /**
      * 客户端连接数
注意：此字段可能返回 null，表示取不到有效值。
      */
    ClientLimit: number;
    /**
      * DTS状态（内部参数，用户可忽略）
注意：此字段可能返回 null，表示取不到有效值。
      */
    DtsStatus: number;
    /**
      * 分片带宽上限，单位MB
注意：此字段可能返回 null，表示取不到有效值。
      */
    NetLimit: number;
    /**
      * 免密实例标识（内部参数，用户可忽略）
注意：此字段可能返回 null，表示取不到有效值。
      */
    PasswordFree: number;
    /**
      * 实例只读标识（内部参数，用户可忽略）
注意：此字段可能返回 null，表示取不到有效值。
      */
    ReadOnly: number;
    /**
      * 内部参数，用户可忽略
注意：此字段可能返回 null，表示取不到有效值。
      */
    Vip6: string;
    /**
      * 内部参数，用户可忽略
注意：此字段可能返回 null，表示取不到有效值。
      */
    RemainBandwidthDuration: string;
    /**
      * Tendis实例的磁盘大小
注意：此字段可能返回 null，表示取不到有效值。
      */
    DiskSize: number;
    /**
      * 监控版本: 1m-分钟粒度监控，5s-5秒粒度监控
注意：此字段可能返回 null，表示取不到有效值。
      */
    MonitorVersion: string;
    /**
      * 客户端最大连接数可设置的最小值
注意：此字段可能返回 null，表示取不到有效值。
      */
    ClientLimitMin: number;
    /**
      * 客户端最大连接数可设置的最大值
注意：此字段可能返回 null，表示取不到有效值。
      */
    ClientLimitMax: number;
    /**
      * 实例的节点详细信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    NodeSet: Array<RedisNodeInfo>;
    /**
      * 实例所在的地域信息，比如ap-guangzhou
注意：此字段可能返回 null，表示取不到有效值。
      */
    Region: string;
}
/**
 * ReleaseWanAddress请求参数结构体
 */
export interface ReleaseWanAddressRequest {
    /**
      * 实例ID
      */
    InstanceId: string;
}
/**
 * InquiryPriceRenewInstance请求参数结构体
 */
export interface InquiryPriceRenewInstanceRequest {
    /**
      * 购买时长，单位：月
      */
    Period: number;
    /**
      * 实例ID
      */
    InstanceId: string;
}
/**
 * ModifyConnectionConfig返回参数结构体
 */
export interface ModifyConnectionConfigResponse {
    /**
      * 任务ID
      */
    TaskId: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ModifyMaintenanceWindow返回参数结构体
 */
export interface ModifyMaintenanceWindowResponse {
    /**
      * 修改状态：success 或者 failed
      */
    Status: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CreateReplicationGroup返回参数结构体
 */
export interface CreateReplicationGroupResponse {
    /**
      * 异步流程ID
      */
    TaskId: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeInstanceMonitorBigKeyTypeDist请求参数结构体
 */
export interface DescribeInstanceMonitorBigKeyTypeDistRequest {
    /**
      * 实例Id
      */
    InstanceId: string;
    /**
      * 时间；例如："20190219"
      */
    Date: string;
}
/**
 * DescribeInstanceMonitorTopNCmdTook请求参数结构体
 */
export interface DescribeInstanceMonitorTopNCmdTookRequest {
    /**
      * 实例ID
      */
    InstanceId: string;
    /**
      * 时间范围：1——实时，2——近30分钟，3——近6小时，4——近24小时
      */
    SpanType: number;
}
/**
 * DestroyPrepaidInstance返回参数结构体
 */
export interface DestroyPrepaidInstanceResponse {
    /**
      * 订单Id
      */
    DealId: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeCommonDBInstances返回参数结构体
 */
export interface DescribeCommonDBInstancesResponse {
    /**
      * 实例数
      */
    TotalCount: number;
    /**
      * 实例信息
      */
    InstanceDetails: Array<RedisCommonInstanceList>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * InquiryPriceCreateInstance请求参数结构体
 */
export interface InquiryPriceCreateInstanceRequest {
    /**
      * 实例类型：2 – Redis2.8内存版(标准架构)，3 – CKV 3.2内存版(标准架构)，4 – CKV 3.2内存版(集群架构)，6 – Redis4.0内存版(标准架构)，7 – Redis4.0内存版(集群架构)，8 – Redis5.0内存版(标准架构)，9 – Redis5.0内存版(集群架构)。
      */
    TypeId: number;
    /**
      * 内存容量，单位为MB， 数值需为1024的整数倍，具体规格以 [查询产品售卖规格](https://cloud.tencent.com/document/api/239/30600) 返回的规格为准。
TypeId为标准架构时，MemSize是实例总内存容量；TypeId为集群架构时，MemSize是单分片内存容量。
      */
    MemSize: number;
    /**
      * 实例数量，单次购买实例数量以 [查询产品售卖规格](https://cloud.tencent.com/document/api/239/30600) 返回的规格为准。
      */
    GoodsNum: number;
    /**
      * 购买时长，在创建包年包月实例的时候需要填写，按量计费实例填1即可，单位：月，取值范围 [1,2,3,4,5,6,7,8,9,10,11,12,24,36]。
      */
    Period: number;
    /**
      * 付费方式:0-按量计费，1-包年包月。
      */
    BillingMode: number;
    /**
      * 实例所属的可用区ID，可参考[地域和可用区](https://cloud.tencent.com/document/product/239/4106)  。
      */
    ZoneId?: number;
    /**
      * 实例分片数量，Redis2.8标准架构、CKV标准架构和Redis2.8单机版、Redis4.0标准架构不需要填写。
      */
    RedisShardNum?: number;
    /**
      * 实例副本数量，Redis2.8标准架构、CKV标准架构和Redis2.8单机版不需要填写。
      */
    RedisReplicasNum?: number;
    /**
      * 是否支持副本只读，Redis2.8标准架构、CKV标准架构和Redis2.8单机版不需要填写。
      */
    ReplicasReadonly?: boolean;
    /**
      * 实例所属的可用区名称，可参考[地域和可用区](https://cloud.tencent.com/document/product/239/4106)  。
      */
    ZoneName?: string;
}
/**
 * ModifyInstanceParams请求参数结构体
 */
export interface ModifyInstanceParamsRequest {
    /**
      * 实例ID
      */
    InstanceId: string;
    /**
      * 实例修改的参数列表
      */
    InstanceParams: Array<InstanceParam>;
}
/**
 * 备份文件下载信息
 */
export interface BackupDownloadInfo {
    /**
      * 备份文件名称
      */
    FileName: string;
    /**
      * 备份文件大小，单位B，如果为0，表示无效
      */
    FileSize: number;
    /**
      * 备份文件外网下载地址（6小时）
      */
    DownloadUrl: string;
    /**
      * 备份文件内网下载地址（6小时）
      */
    InnerDownloadUrl: string;
}
/**
 * 大Key类型分布详情
 */
export interface BigKeyTypeInfo {
    /**
      * 类型
      */
    Type: string;
    /**
      * 数量
      */
    Count: number;
    /**
      * 大小
      */
    Size: number;
    /**
      * 时间戳
      */
    Updatetime: number;
}
/**
 * DescribeInstanceNodeInfo请求参数结构体
 */
export interface DescribeInstanceNodeInfoRequest {
    /**
      * 实例ID
      */
    InstanceId: string;
    /**
      * 列表大小
      */
    Limit?: number;
    /**
      * 偏移量
      */
    Offset?: number;
}
/**
 * DescribeMaintenanceWindow请求参数结构体
 */
export interface DescribeMaintenanceWindowRequest {
    /**
      * 实例ID
      */
    InstanceId: string;
}
/**
 * AddReplicationInstance请求参数结构体
 */
export interface AddReplicationInstanceRequest {
    /**
      * 复制组ID
      */
    GroupId: string;
    /**
      * 实例ID
      */
    InstanceId: string;
    /**
      * 实例角色，rw可读写，r只读
      */
    InstanceRole: string;
}
/**
 * 实例节点类型
 */
export interface InstanceClusterNode {
    /**
      * 节点名称
      */
    Name: string;
    /**
      * 实例运行时节点Id
      */
    RunId: string;
    /**
      * 集群角色：0-master；1-slave
      */
    Role: number;
    /**
      * 节点状态：0-readwrite, 1-read, 2-backup
      */
    Status: number;
    /**
      * 服务状态：0-down；1-on
      */
    Connected: number;
    /**
      * 节点创建时间
      */
    CreateTime: string;
    /**
      * 节点下线时间
      */
    DownTime: string;
    /**
      * 节点slot分布
      */
    Slots: string;
    /**
      * 节点key分布
      */
    Keys: number;
    /**
      * 节点qps
      */
    Qps: number;
    /**
      * 节点qps倾斜度
      */
    QpsSlope: number;
    /**
      * 节点存储
      */
    Storage: number;
    /**
      * 节点存储倾斜度
      */
    StorageSlope: number;
}
/**
 * DescribeTendisSlowLog请求参数结构体
 */
export interface DescribeTendisSlowLogRequest {
    /**
      * 实例Id：crs-ngvou0i1
      */
    InstanceId: string;
    /**
      * 开始时间：2019-09-08 12:12:41
      */
    BeginTime: string;
    /**
      * 结束时间：2019-09-09 12:12:41
      */
    EndTime: string;
    /**
      * 慢查询阈值（毫秒）
      */
    MinQueryTime?: number;
    /**
      * 页面大小：默认20
      */
    Limit?: number;
    /**
      * 偏移量，取Limit整数倍
      */
    Offset?: number;
}
/**
 * DescribeProxySlowLog请求参数结构体
 */
export interface DescribeProxySlowLogRequest {
    /**
      * 实例Id
      */
    InstanceId: string;
    /**
      * 开始时间
      */
    BeginTime: string;
    /**
      * 结束时间
      */
    EndTime: string;
    /**
      * 慢查询阈值（单位：毫秒）
      */
    MinQueryTime?: number;
    /**
      * 页面大小
      */
    Limit?: number;
    /**
      * 偏移量，取Limit整数倍
      */
    Offset?: number;
}
/**
 * DescribeProxySlowLog返回参数结构体
 */
export interface DescribeProxySlowLogResponse {
    /**
      * 慢查询总数
      */
    TotalCount: number;
    /**
      * 慢查询详情
      */
    InstanceProxySlowLogDetail: Array<InstanceProxySlowlogDetail>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * UpgradeInstanceVersion请求参数结构体
 */
export interface UpgradeInstanceVersionRequest {
    /**
      * 目标实例类型，同 [CreateInstances](https://cloud.tencent.com/document/api/239/20026) 的Type，即实例要变更的目标类型
      */
    TargetInstanceType: string;
    /**
      * 切换模式：1-维护时间窗切换，2-立即切换
      */
    SwitchOption: number;
    /**
      * 实例ID
      */
    InstanceId: string;
}
/**
 * DescribeInstanceAccount返回参数结构体
 */
export interface DescribeInstanceAccountResponse {
    /**
      * 账号详细信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    Accounts: Array<Account>;
    /**
      * 账号个数
注意：此字段可能返回 null，表示取不到有效值。
      */
    TotalCount: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeInstanceMonitorBigKey请求参数结构体
 */
export interface DescribeInstanceMonitorBigKeyRequest {
    /**
      * 实例Id
      */
    InstanceId: string;
    /**
      * 请求类型：1——string类型，2——所有类型
      */
    ReqType: number;
    /**
      * 时间；例如："20190219"
      */
    Date: string;
}
/**
 * DisableReplicaReadonly请求参数结构体
 */
export interface DisableReplicaReadonlyRequest {
    /**
      * 实例序号ID
      */
    InstanceId: string;
}
/**
 * DescribeParamTemplateInfo返回参数结构体
 */
export interface DescribeParamTemplateInfoResponse {
    /**
      * 实例参数个数
      */
    TotalCount: number;
    /**
      * 参数模板 ID。
      */
    TemplateId: string;
    /**
      * 参数模板名称。
      */
    Name: string;
    /**
      * 产品类型：1 – Redis2.8内存版（集群架构），2 – Redis2.8内存版（标准架构），3 – CKV 3.2内存版(标准架构)，4 – CKV 3.2内存版(集群架构)，5 – Redis2.8内存版（单机），6 – Redis4.0内存版（标准架构），7 – Redis4.0内存版（集群架构），8 – Redis5.0内存版（标准架构），9 – Redis5.0内存版（集群架构）
      */
    ProductType: number;
    /**
      * 参数模板描述
      */
    Description: string;
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
 * DescribeProductInfo请求参数结构体
 */
export declare type DescribeProductInfoRequest = null;
/**
 * SwitchInstanceVip返回参数结构体
 */
export interface SwitchInstanceVipResponse {
    /**
      * 任务ID
      */
    TaskId: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeInstanceParams返回参数结构体
 */
export interface DescribeInstanceParamsResponse {
    /**
      * 实例参数个数
      */
    TotalCount: number;
    /**
      * 实例枚举类型参数
      */
    InstanceEnumParam: Array<InstanceEnumParam>;
    /**
      * 实例整型参数
      */
    InstanceIntegerParam: Array<InstanceIntegerParam>;
    /**
      * 实例字符型参数
      */
    InstanceTextParam: Array<InstanceTextParam>;
    /**
      * 实例多选项型参数
      */
    InstanceMultiParam: Array<InstanceMultiParam>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DisassociateSecurityGroups请求参数结构体
 */
export interface DisassociateSecurityGroupsRequest {
    /**
      * 数据库引擎名称：mariadb,cdb,cynosdb,dcdb,redis,mongodb 等。
      */
    Product: string;
    /**
      * 安全组Id。
      */
    SecurityGroupId: string;
    /**
      * 实例ID列表，一个或者多个实例Id组成的数组。
      */
    InstanceIds: Array<string>;
}
/**
 * StartupInstance请求参数结构体
 */
export interface StartupInstanceRequest {
    /**
      * 实例id
      */
    InstanceId: string;
}
/**
 * 热Key详细信息
 */
export interface HotKeyInfo {
    /**
      * 热Key
      */
    Key: string;
    /**
      * 类型
      */
    Type: string;
    /**
      * 数量
      */
    Count: number;
}
/**
 * 实例枚举类型参数描述
 */
export interface InstanceEnumParam {
    /**
      * 参数名
      */
    ParamName: string;
    /**
      * 参数类型：enum
      */
    ValueType: string;
    /**
      * 修改后是否需要重启：true，false
      */
    NeedRestart: string;
    /**
      * 参数默认值
      */
    DefaultValue: string;
    /**
      * 当前运行参数值
      */
    CurrentValue: string;
    /**
      * 参数说明
      */
    Tips: string;
    /**
      * 参数可取值
      */
    EnumValue: Array<string>;
    /**
      * 参数状态, 1: 修改中， 2：修改完成
      */
    Status: number;
}
/**
 * CreateInstanceAccount返回参数结构体
 */
export interface CreateInstanceAccountResponse {
    /**
      * 任务ID
      */
    TaskId: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeInstanceBackups请求参数结构体
 */
export interface DescribeInstanceBackupsRequest {
    /**
      * 待操作的实例ID，可通过 DescribeInstance 接口返回值中的 InstanceId 获取。
      */
    InstanceId: string;
    /**
      * 实例列表大小，默认大小20
      */
    Limit?: number;
    /**
      * 偏移量，取Limit整数倍
      */
    Offset?: number;
    /**
      * 开始时间，格式如：2017-02-08 16:46:34。查询实例在 [beginTime, endTime] 时间段内开始备份的备份列表。
      */
    BeginTime?: string;
    /**
      * 结束时间，格式如：2017-02-08 19:09:26。查询实例在 [beginTime, endTime] 时间段内开始备份的备份列表。
      */
    EndTime?: string;
    /**
      * 1：备份在流程中，2：备份正常，3：备份转RDB文件处理中，4：已完成RDB转换，-1：备份已过期，-2：备份已删除。
      */
    Status?: Array<number>;
}
/**
 * 安全组详情
 */
export interface SecurityGroupDetail {
    /**
      * 项目Id
      */
    ProjectId: number;
    /**
      * 创建时间
      */
    CreateTime: string;
    /**
      * 安全组Id
      */
    SecurityGroupId: string;
    /**
      * 安全组名称
      */
    SecurityGroupName: string;
    /**
      * 安全组标记
      */
    SecurityGroupRemark: string;
    /**
      * 安全组入站规则
      */
    InboundRule: Array<SecurityGroupsInboundAndOutbound>;
    /**
      * 安全组出站规则
      */
    OutboundRule: Array<SecurityGroupsInboundAndOutbound>;
}
/**
 * InquiryPriceUpgradeInstance返回参数结构体
 */
export interface InquiryPriceUpgradeInstanceResponse {
    /**
      * 价格，单位：分
注意：此字段可能返回 null，表示取不到有效值。
      */
    Price?: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DeleteInstanceAccount返回参数结构体
 */
export interface DeleteInstanceAccountResponse {
    /**
      * 任务ID
      */
    TaskId: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeInstanceMonitorSIP请求参数结构体
 */
export interface DescribeInstanceMonitorSIPRequest {
    /**
      * 实例Id
      */
    InstanceId: string;
}
/**
 * 实例分片列表信息
 */
export interface InstanceClusterShard {
    /**
      * 分片节点名称
      */
    ShardName: string;
    /**
      * 分片节点Id
      */
    ShardId: string;
    /**
      * 角色
      */
    Role: number;
    /**
      * Key数量
      */
    Keys: number;
    /**
      * slot信息
      */
    Slots: string;
    /**
      * 使用容量
      */
    Storage: number;
    /**
      * 容量倾斜率
      */
    StorageSlope: number;
    /**
      * 实例运行时节点Id
      */
    Runid: string;
    /**
      * 服务状态：0-down；1-on
      */
    Connected: number;
}
/**
 * Tendis慢查询详情
 */
export interface TendisSlowLogDetail {
    /**
      * 执行时间
      */
    ExecuteTime: string;
    /**
      * 慢查询耗时（毫秒）
      */
    Duration: number;
    /**
      * 命令
      */
    Command: string;
    /**
      * 详细命令行信息
      */
    CommandLine: string;
    /**
      * 节点ID
      */
    Node: string;
}
/**
 * 可用区内产品信息
 */
export interface ZoneCapacityConf {
    /**
      * 可用区ID：如ap-guangzhou-3
      */
    ZoneId: string;
    /**
      * 可用区名称
      */
    ZoneName: string;
    /**
      * 可用区是否售罄
      */
    IsSaleout: boolean;
    /**
      * 是否为默认可用区
      */
    IsDefault: boolean;
    /**
      * 网络类型：basenet -- 基础网络；vpcnet -- VPC网络
      */
    NetWorkType: Array<string>;
    /**
      * 可用区内产品规格等信息
      */
    ProductSet: Array<ProductConf>;
    /**
      * 可用区ID：如100003
      */
    OldZoneId: number;
}
/**
 * UpgradeInstance请求参数结构体
 */
export interface UpgradeInstanceRequest {
    /**
      * 实例ID
      */
    InstanceId: string;
    /**
      * 分片大小 单位 MB。该参数不支持与RedisShardNum或RedisReplicasNum同时输入。
      */
    MemSize: number;
    /**
      * 分片数量，标准架构不需要填写。该参数不支持与RedisReplicasNum或MemSize同时输入。
      */
    RedisShardNum?: number;
    /**
      * 副本数量，多AZ实例修改副本时必须要传入NodeSet。该参数不支持与RedisShardNum或MemSize同时输入。
      */
    RedisReplicasNum?: number;
    /**
      * 多AZ实例增加副本时的附带信息，非多AZ实例不需要传此参数。多AZ增加副本时此参数为必传参数，传入要增加的副本的信息，包括副本的可用区和副本的类型（NodeType为1）
      */
    NodeSet?: Array<RedisNodeInfo>;
}
/**
 * DescribeInstanceNodeInfo返回参数结构体
 */
export interface DescribeInstanceNodeInfoResponse {
    /**
      * proxy节点数量
      */
    ProxyCount: number;
    /**
      * proxy节点信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    Proxy: Array<ProxyNodes>;
    /**
      * redis节点数量
      */
    RedisCount: number;
    /**
      * redis节点信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    Redis: Array<RedisNodes>;
    /**
      * tendis节点数量
      */
    TendisCount: number;
    /**
      * tendis节点信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    Tendis: Array<TendisNodes>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeProjectSecurityGroup返回参数结构体
 */
export interface DescribeProjectSecurityGroupResponse {
    /**
      * 项目安全组
      */
    SecurityGroupDetails: Array<SecurityGroupDetail>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 复制组实例
 */
export interface Instances {
    /**
      * 用户AppID
      */
    AppId: number;
    /**
      * 实例ID
      */
    InstanceId: string;
    /**
      * 实例名称
      */
    InstanceName: string;
    /**
      * 地域ID 1--广州 4--上海 5-- 香港 6--多伦多 7--上海金融 8--北京 9-- 新加坡 11--深圳金融 15--美西（硅谷）
      */
    RegionId: number;
    /**
      * 区域ID
      */
    ZoneId: number;
    /**
      * 副本数量
      */
    RedisReplicasNum: number;
    /**
      * 分片数量
      */
    RedisShardNum: number;
    /**
      * 分片大小
      */
    RedisShardSize: number;
    /**
      * 实例的磁盘大小
注意：此字段可能返回 null，表示取不到有效值。
      */
    DiskSize: number;
    /**
      * 引擎：社区版Redis、腾讯云CKV
      */
    Engine: string;
    /**
      * 实例角色，rw可读写，r只读
      */
    Role: string;
    /**
      * 实例VIP
      */
    Vip: string;
    /**
      * 内部参数，用户可忽略
注意：此字段可能返回 null，表示取不到有效值。
      */
    Vip6: string;
    /**
      * vpc网络ID 如：75101
      */
    VpcID: number;
    /**
      * 实例端口
      */
    VPort: number;
    /**
      * 实例状态：0-待初始化，1-流程中，2-运行中，-2-已隔离，-3-待删除
      */
    Status: number;
    /**
      * 仓库ID
      */
    GrocerySysId: number;
    /**
      * 实例类型：1 – Redis2.8内存版（集群架构），2 – Redis2.8内存版（标准架构），3 – CKV 3.2内存版(标准架构)，4 – CKV 3.2内存版(集群架构)，5 – Redis2.8内存版（单机），6 – Redis4.0内存版（标准架构），7 – Redis4.0内存版（集群架构），8 – Redis5.0内存版（标准架构），9 – Redis5.0内存版（集群架构）
      */
    ProductType: number;
    /**
      * 创建时间
      */
    CreateTime: string;
    /**
      * 更新实例
      */
    UpdateTime: string;
}
/**
 * DescribeInstanceMonitorHotKey返回参数结构体
 */
export interface DescribeInstanceMonitorHotKeyResponse {
    /**
      * 热Key详细信息
      */
    Data?: Array<HotKeyInfo>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 实例参数
 */
export interface InstanceParam {
    /**
      * 设置参数的名字
      */
    Key: string;
    /**
      * 设置参数的值
      */
    Value: string;
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
 * ClearInstance返回参数结构体
 */
export interface ClearInstanceResponse {
    /**
      * 任务ID
      */
    TaskId: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 慢查询详情
 */
export interface InstanceSlowlogDetail {
    /**
      * 慢查询耗时
      */
    Duration: number;
    /**
      * 客户端地址
      */
    Client: string;
    /**
      * 命令
      */
    Command: string;
    /**
      * 详细命令行信息
      */
    CommandLine: string;
    /**
      * 执行时间
      */
    ExecuteTime: string;
    /**
      * 节点ID
      */
    Node: string;
}
