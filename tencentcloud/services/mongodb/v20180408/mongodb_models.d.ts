/**
 * DescribeSpecInfo请求参数结构体
 */
export interface DescribeSpecInfoRequest {
    /**
     * 可用区
     */
    Zone?: string;
}
/**
 * TerminateDBInstance请求参数结构体
 */
export interface TerminateDBInstanceRequest {
    /**
     * 实例ID，格式如：cmgo-p8vnipr5。
     */
    InstanceId: string;
}
/**
 * CreateDBInstance请求参数结构体
 */
export interface CreateDBInstanceRequest {
    /**
     * 每个副本集内从节点个数
     */
    SecondaryNum: number;
    /**
     * 实例内存大小，单位：GB
     */
    Memory: number;
    /**
     * 实例硬盘大小，单位：GB
     */
    Volume: number;
    /**
     * 指版本信息。具体支持的版本信息 ，请通过接口 [DescribeSpecInfo](https://cloud.tencent.com/document/product/240/38567) 获取。 - MONGO_36_WT：MongoDB 3.6 WiredTiger存储引擎版本。 - MONGO_40_WT：MongoDB 4.0 WiredTiger存储引擎版本。 - MONGO_42_WT：MongoDB 4.2 WiredTiger存储引擎版本。 - MONGO_44_WT：MongoDB 4.4 WiredTiger存储引擎版本。 - MONGO_50_WT：MongoDB 5.0 WiredTiger存储引擎版本。 - MONGO_60_WT：MongoDB 6.0 WiredTiger存储引擎版本。
     */
    MongoVersion: string;
    /**
     * 机器类型，HIO10G：高IO万兆。
     */
    MachineCode: string;
    /**
     * 实例数量，默认值为1, 最小值1，最大值为10
     */
    GoodsNum: number;
    /**
     * 实例所属区域名称，格式如：ap-guangzhou-2
     */
    Zone: string;
    /**
     * 时长，购买月数
     */
    TimeSpan: number;
    /**
     * 实例密码
     */
    Password: string;
    /**
     * 项目ID，不填为默认项目
     */
    ProjectId?: number;
    /**
     * 安全组参数
     */
    SecurityGroup?: Array<string>;
    /**
     * 私有网络ID，如果不传则默认选择基础网络
     */
    UniqVpcId?: string;
    /**
     * 私有网络下的子网ID，如果设置了 VpcId，则 SubnetId必填
     */
    UniqSubnetId?: string;
    /**
     * 实例类型，REPLSET-副本集，SHARD-分片集群，默认为REPLSET
     */
    InstanceType?: string;
}
/**
 * UpgradeDBInstanceHour请求参数结构体
 */
export interface UpgradeDBInstanceHourRequest {
    /**
     * 实例ID，格式如：cmgo-iga0****
     */
    InstanceId: string;
    /**
     * 升级后的内存大小，单位：GB
     */
    Memory: number;
    /**
     * 升级后的硬盘大小，单位：GB
     */
    Volume: number;
    /**
     * 升级后oplog的大小，单位：GB，默认为磁盘空间的10%，允许设置的最小值为磁盘的10%，最大值为磁盘的90%
     */
    OplogSize?: number;
}
/**
 * CreateDBInstanceHour请求参数结构体
 */
export interface CreateDBInstanceHourRequest {
    /**
     * 实例内存大小，单位：GB
     */
    Memory: number;
    /**
     * 实例硬盘大小，单位：GB
     */
    Volume: number;
    /**
     * 副本集个数，1为单副本集实例，大于1为分片集群实例，最大不超过10
     */
    ReplicateSetNum: number;
    /**
     * 每个副本集内从节点个数，目前只支持从节点数为2
     */
    SecondaryNum: number;
    /**
     * MongoDB引擎版本，值包括MONGO_3_WT 、MONGO_3_ROCKS和MONGO_36_WT
     */
    EngineVersion: string;
    /**
     * 实例类型，HIO10G：高IO万兆。
     */
    Machine: string;
    /**
     * 实例数量，默认值为1, 最小值1，最大值为10
     */
    GoodsNum: number;
    /**
     * 可用区信息，格式如：ap-guangzhou-2
     */
    Zone: string;
    /**
     * 实例角色，默认传MASTER即可
     */
    InstanceRole: string;
    /**
     * 实例类型，REPLSET-副本集，SHARD-分片集群
     */
    InstanceType: string;
    /**
     * 数据是否加密，当且仅当引擎版本为MONGO_3_ROCKS，可以选择加密
     */
    Encrypt?: number;
    /**
     * 私有网络ID，如果不传则默认选择基础网络
     */
    VpcId?: string;
    /**
     * 私有网络下的子网ID，如果设置了 VpcId，则 SubnetId必填
     */
    SubnetId?: string;
    /**
     * 项目ID，不填为默认项目
     */
    ProjectId?: number;
    /**
     * 安全组参数
     */
    SecurityGroup?: Array<string>;
    /**
     * 私有网络ID，如果不传则默认选择基础网络
     */
    UniqVpcId?: string;
    /**
     * 私有网络下的子网ID，如果设置了 VpcId，则 SubnetId必填
     */
    UniqSubnetId?: string;
}
/**
 * AssignProject请求参数结构体
 */
export interface AssignProjectRequest {
    /**
     * 实例 ID 列表。格式如：cmgo-p8vn****，与云数据库控制台页面中显示的实例 ID 相同。
     */
    InstanceIds: Array<string>;
    /**
     * 项目ID。项目 ID 具有唯一性，请[登录 MongoDB 控制台](https://console.cloud.tencent.com/mongodb)，在右上角的账户信息的下拉菜单中，选择**项目管理**，即可获取项目ID。
     */
    ProjectId: number;
}
/**
 * 客户端连接信息，包括客户端IP和连接数
 */
export interface ClientConnection {
    /**
     * 连接的客户端IP
     */
    IP?: string;
    /**
     * 对应客户端IP的连接数
     */
    Count?: number;
}
/**
 * DescribeDBInstances请求参数结构体
 */
export interface DescribeDBInstancesRequest {
    /**
     * 实例ID列表，格式如：cmgo-p8vn****。与云数据库控制台页面中显示的实例ID相同。
     */
    InstanceIds?: Array<string>;
    /**
     * 实例类型，取值范围：
  <ul><li>0： 所有实例</li><li>1： 正式实例</li><li>2： 临时实例</li><li>3： 只读实例</li><li>-1： 正式实例+只读+灾备实例</li></ul>
     */
    InstanceType?: number;
    /**
     * 集群类型，取值范围：
  <ul><li>0： 副本集实例</li><li>1： 正式实例</li> <li>-1： 所有实例</li></ul>
     */
    ClusterType?: number;
    /**
     * 实例状态，取值范围：
  <ul><li>0： 待初始化</li><li>1： 流程执行中</li> <li>2： 有效实例</li><li>-2： 已过期实例</li></ul>
     */
    Status?: Array<number | bigint>;
    /**
     * 私有网络的ID，基础网络则不传该参数。
     */
    VpcId?: string;
    /**
     * 私有网络的子网ID，基础网络则不传该参数。入参设置该参数的同时，必须设置相应的VpcId。
     */
    SubnetId?: string;
    /**
     * 付费类型，取值范围：
  <ul><li>0： 按量计费</li><li>1：包年包月</li><li>-1： 按量计费+包年包月</li></ul>
     */
    PayMode?: number;
    /**
     * 单次请求返回的数量，最小值为1，最大值为100，默认值为20。
     */
    Limit?: number;
    /**
     * 偏移量，默认值为0。
     */
    Offset?: number;
    /**
     * 返回结果集排序的字段，目前支持：
  <ul><li>ProjectId： 按照项目ID排序</li><li>InstanceName：按照实例名称排序</li><li>CreateTime： 根据创建时间排序</li></ul>
     */
    OrderBy?: string;
    /**
     * 返回结果集排序方式，目前支持："ASC"或者"DESC"。
  <ul><li>ASC： 顺序取值</li><li>DESC：倒序取值</li></ul>
     */
    OrderByType?: string;
}
/**
 * SetPassword返回参数结构体
 */
export interface SetPasswordResponse {
    /**
     * 返回的异步任务ID
     */
    FlowId?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 实例规格信息
 */
export interface SpecificationInfo {
    /**
     * 地域信息
     */
    Region?: string;
    /**
     * 可用区信息
     */
    Zone?: string;
    /**
     * 售卖规格信息
     */
    SpecItems?: Array<SpecItem>;
}
/**
 * 实例详情
 */
export interface MongoDBInstanceDetail {
    /**
     * 实例ID
     */
    InstanceId?: string;
    /**
     * 实例名称
     */
    InstanceName?: string;
    /**
     * 付费类型，可能的返回值：1-包年包月；0-按量计费
     */
    PayMode?: number;
    /**
     * 项目ID
     */
    ProjectId?: number;
    /**
     * 集群类型，可能的返回值：0-副本集实例，1-分片实例，
     */
    ClusterType?: number;
    /**
     * 地域信息
     */
    Region?: string;
    /**
     * 可用区信息
     */
    Zone?: string;
    /**
     * 网络类型，可能的返回值：0-基础网络，1-私有网络
     */
    NetType?: number;
    /**
     * 私有网络的ID
     */
    VpcId?: string;
    /**
     * 私有网络的子网ID
     */
    SubnetId?: string;
    /**
     * 实例状态，可能的返回值：0-待初始化，1-流程处理中，2-运行中，-2-实例已过期
     */
    Status?: number;
    /**
     * 实例IP
     */
    Vip?: string;
    /**
     * 端口号
     */
    Vport?: number;
    /**
     * 实例创建时间
     */
    CreateTime?: string;
    /**
     * 实例到期时间
     */
    DeadLine?: string;
    /**
     * 实例版本信息
     */
    MongoVersion?: string;
    /**
     * 实例内存规格，单位为MB
     */
    Memory?: number;
    /**
     * 实例磁盘规格，单位为MB
     */
    Volume?: number;
    /**
     * 实例CPU核心数
     */
    CpuNum?: number;
    /**
     * 实例机器类型
     */
    MachineType?: string;
    /**
     * 实例从节点数
     */
    SecondaryNum?: number;
    /**
     * 实例分片数
     */
    ReplicationSetNum?: number;
    /**
     * 实例自动续费标志，可能的返回值：0-手动续费，1-自动续费，2-确认不续费
     */
    AutoRenewFlag?: number;
    /**
     * 已用容量，单位MB
     */
    UsedVolume?: number;
    /**
     * 维护窗口起始时间
     */
    MaintenanceStart?: string;
    /**
     * 维护窗口结束时间
     */
    MaintenanceEnd?: string;
    /**
     * 分片信息
     */
    ReplicaSets?: Array<MongodbShardInfo>;
    /**
     * 只读实例信息
     */
    ReadonlyInstances?: Array<MongoDBInstance>;
    /**
     * 灾备实例信息
     */
    StandbyInstances?: Array<MongoDBInstance>;
    /**
     * 临时实例信息
     */
    CloneInstances?: Array<MongoDBInstance>;
    /**
     * 关联实例信息，对于正式实例，该字段表示它的临时实例信息；对于临时实例，则表示它的正式实例信息;如果为只读/灾备实例,则表示他的主实例信息
     */
    RelatedInstance?: MongoDBInstance;
    /**
     * 实例标签信息集合
     */
    Tags?: Array<TagInfo>;
    /**
     * 实例标记
     */
    InstanceVer?: number;
    /**
     * 实例标记
     */
    ClusterVer?: number;
    /**
     * 协议信息，可能的返回值：1-mongodb，2-dynamodb
     */
    Protocol?: number;
    /**
     * 实例类型，可能的返回值，1-正式实例，2-临时实例，3-只读实例，4-灾备实例
     */
    InstanceType?: number;
    /**
     * 实例状态描述
     */
    InstanceStatusDesc?: string;
    /**
     * 实例对应的物理实例ID，回档并替换过的实例有不同的InstanceId和RealInstanceId，从barad获取监控数据等场景下需要用物理id获取
     */
    RealInstanceId?: string;
}
/**
 * DescribeSpecInfo返回参数结构体
 */
export interface DescribeSpecInfoResponse {
    /**
     * 实例售卖规格信息列表
     */
    SpecInfoList?: Array<SpecificationInfo>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 实例标签信息
 */
export interface TagInfo {
    /**
     * 标签Key值
     */
    TagKey?: string;
    /**
     * 标签值
     */
    TagValue?: string;
}
/**
 * DescribeSlowLog返回参数结构体
 */
export interface DescribeSlowLogResponse {
    /**
     * 符合查询条件的慢查询日志总数。
     */
    TotalCount?: number;
    /**
     * 符合查询条件的慢查询日志详情。
     */
    SlowLogList?: Array<string>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeDBInstances返回参数结构体
 */
export interface DescribeDBInstancesResponse {
    /**
     * 符合查询条件的实例总数
     */
    TotalCount?: number;
    /**
     * 实例详细信息
     */
    InstanceDetails?: Array<MongoDBInstanceDetail>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CreateDBInstance返回参数结构体
 */
export interface CreateDBInstanceResponse {
    /**
     * 订单ID
     */
    DealId?: string;
    /**
     * 创建的实例ID列表
     */
    InstanceIds?: Array<string>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * SetPassword请求参数结构体
 */
export interface SetPasswordRequest {
    /**
     * 实例ID，格式如：cmgo-p8vn****。与云数据库控制台页面中显示的实例ID相同
     */
    InstanceId: string;
    /**
     * 实例账户名。初始化实例密码，本参数传mongouser。
     */
    UserName: string;
    /**
     * 指定账户的新密码， 密码格式为8-32个字符长度，至少包含字母、数字和字符（!@#%^*()_）中的两种
     */
    Password: string;
}
/**
 * AssignProject返回参数结构体
 */
export interface AssignProjectResponse {
    /**
     * 返回的异步任务ID列表。
     */
    FlowIds?: Array<number | bigint>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeSlowLog请求参数结构体
 */
export interface DescribeSlowLogRequest {
    /**
     * 实例ID，格式如：cmgo-p8vnipr5。与云数据库控制台页面中显示的实例ID相同
     */
    InstanceId: string;
    /**
     * 慢日志起始时间，格式：yyyy-mm-dd hh:mm:ss，如：2019-06-01 10:00:00。查询起止时间间隔不能超过24小时，只允许查询最近7天内慢日志。
     */
    StartTime: string;
    /**
     * 慢日志终止时间，格式：yyyy-mm-dd hh:mm:ss，如：2019-06-02 12:00:00。查询起止时间间隔不能超过24小时，只允许查询最近7天内慢日志。
     */
    EndTime: string;
    /**
     * 慢日志执行时间阈值，返回执行时间超过该阈值的慢日志，单位为毫秒(ms)，最小为100毫秒。
     */
    SlowMS: number;
    /**
     * 偏移量，最小值为0，最大值为10000，默认值为0。
     */
    Offset?: number;
    /**
     * 分页大小，最小值为1，最大值为100，默认值为20。
     */
    Limit?: number;
}
/**
 * DescribeClientConnections请求参数结构体
 */
export interface DescribeClientConnectionsRequest {
    /**
     * 实例ID，格式如：cmgo-p8vnipr5。与云数据库控制台页面中显示的实例ID相同
     */
    InstanceId: string;
}
/**
 * SetAutoRenew返回参数结构体
 */
export interface SetAutoRenewResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 实例信息
 */
export interface MongoDBInstance {
    /**
     * 实例ID
     */
    InstanceId?: string;
    /**
     * 地域信息
     */
    Region?: string;
}
/**
 * RenameInstance请求参数结构体
 */
export interface RenameInstanceRequest {
    /**
     * 实例ID，格式如：cmgo-p8vnipr5。与云数据库控制台页面中显示的实例ID相同
     */
    InstanceId: string;
    /**
     * 实例自定义名称
     */
    NewName: string;
}
/**
 * UpgradeDBInstance返回参数结构体
 */
export interface UpgradeDBInstanceResponse {
    /**
     * 订单ID
     */
    DealId?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * SetAutoRenew请求参数结构体
 */
export interface SetAutoRenewRequest {
    /**
     * 实例ID列表，格式如：cmgo-p8vnipr5。与云数据库控制台页面中显示的实例ID相同
     */
    InstanceIds: Array<string>;
    /**
     * 配置自动续费标识。
  - 0：手动续费。
  - 1：自动续费。
  - 2：确认不续费。
     */
    AutoRenewFlag: number;
}
/**
 * RenameInstance返回参数结构体
 */
export interface RenameInstanceResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeClientConnections返回参数结构体
 */
export interface DescribeClientConnectionsResponse {
    /**
     * 客户端连接信息，包括客户端IP和对应IP的连接数量
     */
    Clients?: Array<ClientConnection>;
    /**
     * 连接数总结
     */
    TotalCount?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * UpgradeDBInstanceHour返回参数结构体
 */
export interface UpgradeDBInstanceHourResponse {
    /**
     * 订单ID
     */
    DealId?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * UpgradeDBInstance请求参数结构体
 */
export interface UpgradeDBInstanceRequest {
    /**
     * 实例ID，格式如：cmgo-iga0****。与云数据库控制台页面中显示的实例ID相同
     */
    InstanceId: string;
    /**
     * 升级后的内存大小，单位：GB
     */
    Memory: number;
    /**
     * 升级后的硬盘大小，单位：GB
     */
    Volume: number;
    /**
     * 升级后oplog的大小，单位：GB，默认为磁盘空间的10%，允许设置的最小值为磁盘的10%，最大值为磁盘的90%
     */
    OplogSize?: number;
}
/**
 * CreateDBInstanceHour返回参数结构体
 */
export interface CreateDBInstanceHourResponse {
    /**
     * 订单ID
     */
    DealId?: string;
    /**
     * 创建的实例ID列表
     */
    InstanceIds?: Array<string>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * TerminateDBInstance返回参数结构体
 */
export interface TerminateDBInstanceResponse {
    /**
     * 订单ID，表示注销实例成功。
     */
    AsyncRequestId: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 实例分片详情
 */
export interface MongodbShardInfo {
    /**
     * 分片已使用容量
     */
    UsedVolume?: number;
    /**
     * 分片ID
     */
    ReplicaSetId?: string;
    /**
     * 分片名
     */
    ReplicaSetName?: string;
    /**
     * 分片内存规格，单位为MB
     */
    Memory?: number;
    /**
     * 分片磁盘规格，单位为MB
     */
    Volume?: number;
    /**
     * 分片Oplog大小，单位为MB
     */
    OplogSize?: number;
    /**
     * 分片从节点数
     */
    SecondaryNum?: number;
    /**
     * 分片物理ID
     */
    RealReplicaSetId?: string;
}
/**
 * mongodb售卖规格
 */
export interface SpecItem {
    /**
     * 规格信息标识
     */
    SpecCode: string;
    /**
     * 规格有效标志，取值：0-停止售卖，1-开放售卖
     */
    Status: number;
    /**
     * 机器类型，取值：0-HIO，4-HIO10G
     */
    MachineType: string;
    /**
     * cpu核心数
     */
    Cpu: number;
    /**
     * 内存规格，单位为MB
     */
    Memory: number;
    /**
     * 默认磁盘规格，单位MB
     */
    DefaultStorage: number;
    /**
     * 最大磁盘规格，单位MB
     */
    MaxStorage: number;
    /**
     * 最小磁盘规格，单位MB
     */
    MinStorage: number;
    /**
     * 可承载qps信息
     */
    Qps: number;
    /**
     * 连接数限制
     */
    Conns: number;
    /**
     * 实例mongodb版本信息
     */
    MongoVersionCode: string;
    /**
     * 实例mongodb版本号
     */
    MongoVersionValue: number;
    /**
     * 实例mongodb版本号（短）
     */
    Version: string;
    /**
     * 存储引擎
     */
    EngineName: string;
    /**
     * 集群类型，取值：1-分片集群，0-副本集集群
     */
    ClusterType: number;
    /**
     * 最小副本集从节点数
     */
    MinNodeNum: number;
    /**
     * 最大副本集从节点数
     */
    MaxNodeNum: number;
    /**
     * 最小分片数
     */
    MinReplicateSetNum: number;
    /**
     * 最大分片数
     */
    MaxReplicateSetNum: number;
    /**
     * 最小分片从节点数
     */
    MinReplicateSetNodeNum: number;
    /**
     * 最大分片从节点数
     */
    MaxReplicateSetNodeNum: number;
}
