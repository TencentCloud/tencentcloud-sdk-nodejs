/**
 * DescribeUserTasks返回参数结构体
 */
export interface DescribeUserTasksResponse {
    /**
     * 任务总数
     */
    TotalCount?: number;
    /**
     * 任务列表
     */
    FlowSet?: Array<UserTaskInfo>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * InitDCDBInstances返回参数结构体
 */
export interface InitDCDBInstancesResponse {
    /**
     * 异步任务ID，可通过 DescribeFlow 查询任务状态。
     */
    FlowIds: Array<number | bigint>;
    /**
     * 透传入参。
     */
    InstanceIds: Array<string>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeDBTmpInstances请求参数结构体
 */
export interface DescribeDBTmpInstancesRequest {
    /**
     * 实例ID
     */
    InstanceId: string;
}
/**
 * DescribeAccountPrivileges返回参数结构体
 */
export interface DescribeAccountPrivilegesResponse {
    /**
     * 实例ID
     */
    InstanceId?: string;
    /**
     * 权限列表。
     */
    Privileges?: Array<string>;
    /**
     * 数据库账号用户名
     */
    UserName?: string;
    /**
     * 数据库账号Host
     */
    Host?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeDatabases请求参数结构体
 */
export interface DescribeDatabasesRequest {
    /**
     * 实例 ID，形如：dcdbt-ow7t8lmc。
     */
    InstanceId: string;
}
/**
 * DB参数描述
 */
export interface ParamDesc {
    /**
     * 参数名字
     */
    Param?: string;
    /**
     * 当前参数值
     */
    Value?: string;
    /**
     * 设置过的值，参数生效后，该值和value一样。未设置过就不返回该字段。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SetValue?: string;
    /**
     * 系统默认值
     */
    Default?: string;
    /**
     * 参数限制
     */
    Constraint?: ParamConstraint;
    /**
     * 是否有设置过值，false:没有设置过值，true:有设置过值。
     */
    HaveSetValue?: boolean;
    /**
     * 是否需要重启生效，false:不需要重启，
  true:需要重启
     */
    NeedRestart?: boolean;
}
/**
 * DestroyDCDBInstance返回参数结构体
 */
export interface DestroyDCDBInstanceResponse {
    /**
     * 实例 ID，与入参InstanceId一致。
     */
    InstanceId?: string;
    /**
     * 异步任务的请求 ID，可使用此 ID [查询异步任务的执行结果](https://cloud.tencent.com/document/product/557/56485)。
     */
    FlowId?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeDBParameters请求参数结构体
 */
export interface DescribeDBParametersRequest {
    /**
     * 实例 ID，形如：dcdbt-ow7t8lmc。
     */
    InstanceId: string;
}
/**
 * DescribeAccounts请求参数结构体
 */
export interface DescribeAccountsRequest {
    /**
     * 实例ID，形如：dcdbt-ow728lmc。
     */
    InstanceId: string;
}
/**
 * 按机型分类的规格配置
 */
export interface SpecConfig {
    /**
     * 规格机型
     */
    Machine?: string;
    /**
     * 规格列表
     */
    SpecConfigInfos?: Array<SpecConfigInfo>;
}
/**
 * UpgradeHourDCDBInstance返回参数结构体
 */
export interface UpgradeHourDCDBInstanceResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ModifyRealServerAccessStrategy返回参数结构体
 */
export interface ModifyRealServerAccessStrategyResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ModifyBackupConfigs请求参数结构体
 */
export interface ModifyBackupConfigsRequest {
    /**
     * 实例 ID，格式如：tdsqlshard-c1nl9rpv，与云数据库控制台页面中显示的实例 ID 相同。
     */
    InstanceId: string;
    /**
     * 常规备份存储时长，范围[1, 3650]。
     */
    Days?: number;
    /**
     * 每天备份执行的区间的开始时间，格式 mm:ss，形如 22:00。
     */
    StartBackupTime?: string;
    /**
     * 每天备份执行的区间的结束时间，格式 mm:ss，形如 23:59。
     */
    EndBackupTime?: string;
    /**
     * 执行备份周期，枚举值：Monday,Tuesday,Wednesday,Thursday,Friday,Saturday,Sunday
     */
    WeekDays?: Array<string>;
    /**
     * 沉降到归档存储时长，-1表示关闭归档设置。
     */
    ArchiveDays?: number;
    /**
     * 超期备份配置。
     */
    BackupConfigSet?: Array<NewBackupConfig>;
}
/**
 * ActiveHourDCDBInstance返回参数结构体
 */
export interface ActiveHourDCDBInstanceResponse {
    /**
     * 解隔离成功的实例id列表
     */
    SuccessInstanceIds?: Array<string>;
    /**
     * 解隔离失败的实例id列表
     */
    FailedInstanceIds?: Array<string>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeDCDBPrice返回参数结构体
 */
export interface DescribeDCDBPriceResponse {
    /**
     * 原价
  * 单位：默认为分，若请求参数带有AmountUnit，参考AmountUnit描述
  * 币种：国内站为人民币，国际站为美元
     */
    OriginalPrice: number;
    /**
     * 实际价格，受折扣等影响，可能和原价不同
  * 单位：默认为分，若请求参数带有AmountUnit，参考AmountUnit描述
  * 币种：国内站人民币，国际站美元
     */
    Price: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ModifyInstanceVport返回参数结构体
 */
export interface ModifyInstanceVportResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeDCDBInstanceDetail请求参数结构体
 */
export interface DescribeDCDBInstanceDetailRequest {
    /**
     * 实例ID，形如dcdbt-7oaxtcb7
     */
    InstanceId: string;
}
/**
 * DescribeFileDownloadUrl返回参数结构体
 */
export interface DescribeFileDownloadUrlResponse {
    /**
     * 带签名的下载连接
     */
    PreSignedUrl: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ModifyInstanceVip返回参数结构体
 */
export interface ModifyInstanceVipResponse {
    /**
     * 异步任务流程ID
     */
    FlowId?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * AssociateSecurityGroups请求参数结构体
 */
export interface AssociateSecurityGroupsRequest {
    /**
     * 数据库引擎名称，本接口取值：dcdb。
     */
    Product: string;
    /**
     * 要绑定的安全组ID，类似sg-efil73jd。
     */
    SecurityGroupId: string;
    /**
     * 被绑定的实例ID，类似tdsqlshard-lesecurk，支持指定多个实例。
     */
    InstanceIds: Array<string>;
}
/**
 * DCDB分片信息
 */
export interface ShardBriefInfo {
    /**
     * 分片SerialId
     */
    ShardSerialId?: string;
    /**
     * 分片ID，形如shard-7vg1o339
     */
    ShardInstanceId?: string;
    /**
     * 分片运行状态
     */
    Status?: number;
    /**
     * 分片运行状态描述
     */
    StatusDesc?: string;
    /**
     * 分片创建时间
     */
    CreateTime?: string;
    /**
     * 分片内存大小，单位GB
     */
    Memory?: number;
    /**
     * 分片磁盘大小，单位GB
     */
    Storage?: number;
    /**
     * 分片日志磁盘空间大小，单位GB
     */
    LogDisk?: number;
    /**
     * 分片节点个数
     */
    NodeCount?: number;
    /**
     * 分片磁盘空间使用率
     */
    StorageUsage?: number;
    /**
     * 分片Proxy版本信息
     */
    ProxyVersion?: string;
    /**
     * 分片主DB可用区
     */
    ShardMasterZone?: string;
    /**
     * 分片从DB可用区
     */
    ShardSlaveZones?: Array<string>;
    /**
     * 分片Cpu核数
     */
    Cpu?: number;
    /**
     * DB节点信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    NodesInfo?: Array<NodeInfo>;
}
/**
 * 数据库超期备份配置
 */
export interface NewBackupConfig {
    /**
     * 备份策略是否启用。
     */
    EnableBackupPolicy: boolean;
    /**
     * 超期保留开始日期，早于开始日期的超期备份不保留，格式：yyyy-mm-dd。
     */
    BeginDate: string;
    /**
     * 超期备份保留时长，超出保留时间的超期备份将被删除，可填写1-3650整数。
     */
    MaxRetentionDays: number;
    /**
     * 备份模式，可选择按年月周模式保存
  * 按年：annually
  * 按月：monthly
  * 按周：weekly
     */
    Frequency: string;
    /**
     * Frequency等于weekly时生效。
  表示保留特定工作日备份。可选择周一到周日，支持多选，取星期英文：
  * 星期一 ：Monday
  * 星期二 ：Tuesday
  * 星期三：Wednesday
  * 星期四：Thursday
  * 星期五：Friday
  * 星期六：Saturday
  * 星期日：Sunday
     */
    WeekDays?: Array<string>;
    /**
     * 保留备份个数，Frequency等于monthly或weekly时生效。
  备份模式选择按月时，可填写1-28整数；
  备份模式选择年时，可填写1-336整数。
     */
    BackupCount?: number;
}
/**
 * CancelOnlineDDLJob请求参数结构体
 */
export interface CancelOnlineDDLJobRequest {
    /**
     * 实例Id
     */
    InstanceId: string;
    /**
     * 要暂停的 Online DDL 任务对应的流程Id。创建任务时，CreateOnlineDDLJob 会返回此流程Id
     */
    FlowId: number;
}
/**
 * FlushBinlog返回参数结构体
 */
export interface FlushBinlogResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeDBSecurityGroups返回参数结构体
 */
export interface DescribeDBSecurityGroupsResponse {
    /**
     * 安全组详情。
     */
    Groups?: Array<SecurityGroup>;
    /**
     * 实例VIP
  注意：此字段可能返回 null，表示取不到有效值。
     */
    VIP?: string;
    /**
     * 实例端口
  注意：此字段可能返回 null，表示取不到有效值。
     */
    VPort?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CancelDcnJob返回参数结构体
 */
export interface CancelDcnJobResponse {
    /**
     * 流程ID
     */
    FlowId?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeFileDownloadUrl请求参数结构体
 */
export interface DescribeFileDownloadUrlRequest {
    /**
     * 实例ID
     */
    InstanceId: string;
    /**
     * 实例分片ID
     */
    ShardId: string;
    /**
     * 不带签名的文件路径
     */
    FilePath: string;
}
/**
 * UpgradeDCDBInstance返回参数结构体
 */
export interface UpgradeDCDBInstanceResponse {
    /**
     * 长订单号。可以据此调用 DescribeOrders
   查询订单详细信息，或在支付失败时调用用户账号相关接口进行支付。
     */
    DealName?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeDBSyncMode返回参数结构体
 */
export interface DescribeDBSyncModeResponse {
    /**
     * 同步模式：0 异步，1 强同步， 2 强同步可退化
     */
    SyncMode: number;
    /**
     * 是否有修改流程在执行中：1 是， 0 否。
     */
    IsModifying: number;
    /**
     * 当前复制方式，0 异步，1 同步
     */
    CurrentSyncMode: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeProjectSecurityGroups请求参数结构体
 */
export interface DescribeProjectSecurityGroupsRequest {
    /**
     * 数据库引擎名称，本接口取值：dcdb。
     */
    Product: string;
    /**
     * 项目ID。
     */
    ProjectId?: number;
}
/**
 * DescribeDCDBUpgradePrice返回参数结构体
 */
export interface DescribeDCDBUpgradePriceResponse {
    /**
     * 原价
  * 单位：默认为分，若请求参数带有AmountUnit，参考AmountUnit描述
  * 币种：国内站为人民币，国际站为美元
     */
    OriginalPrice: number;
    /**
     * 实际价格，受折扣等影响，可能和原价不同
  * 单位：默认为分，若请求参数带有AmountUnit，参考AmountUnit描述
  * 币种：国内站人民币，国际站美元
     */
    Price: number;
    /**
     * 变配明细计算公式
     */
    Formula: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeDBSlowLogs请求参数结构体
 */
export interface DescribeDBSlowLogsRequest {
    /**
     * 实例 ID，形如：dcdbt-hw0qj6m1
     */
    InstanceId: string;
    /**
     * 从结果的第几条数据开始返回
     */
    Offset: number;
    /**
     * 返回的结果条数
     */
    Limit: number;
    /**
     * 查询的起始时间，形如2016-07-23 14:55:20
     */
    StartTime: string;
    /**
     * 实例的分片ID，形如shard-53ima8ln
     */
    ShardId: string;
    /**
     * 查询的结束时间，形如2016-08-22 14:55:20。如果不填，那么查询结束时间就是当前时间
     */
    EndTime?: string;
    /**
     * 要查询的具体数据库名称
     */
    Db?: string;
    /**
     * 排序指标，取值为query_time_sum或者query_count。不填默认按照query_time_sum排序
     */
    OrderBy?: string;
    /**
     * 排序类型，desc（降序）或者asc（升序）。不填默认desc排序
     */
    OrderByType?: string;
    /**
     * 是否查询从机的慢查询，0-主机; 1-从机。不填默认查询主机慢查询
     */
    Slave?: number;
}
/**
 * CreateAccount请求参数结构体
 */
export interface CreateAccountRequest {
    /**
     * 实例 ID，形如：dcdbt-ow728lmc，可以通过 DescribeDCDBInstances 查询实例详情获得。
     */
    InstanceId: string;
    /**
     * AccountName
     */
    UserName: string;
    /**
     * 可以登录的主机，与mysql 账号的 host 格式一致，可以支持通配符，例如 %，10.%，10.20.%。
     */
    Host: string;
    /**
     * 账号密码，密码需要 8-32 个字符，不能以 '/' 开头，并且必须包含小写字母、大写字母、数字和符号()~!@#$%^&*-+=_|{}[]:<>,.?/。
     */
    Password?: string;
    /**
     * 是否创建为只读账号，0：否， 1：该账号的sql请求优先选择备机执行，备机不可用时选择主机执行，2：优先选择备机执行，备机不可用时操作失败，3：只从备机读取。
     */
    ReadOnly?: number;
    /**
     * 账号备注，可以包含中文、英文字符、常见符号和数字，长度为0~256字符
     */
    Description?: string;
    /**
     * 如果备机延迟超过本参数设置值，系统将认为备机发生故障
  建议该参数值大于10。当ReadOnly选择1、2时该参数生效。
     */
    DelayThresh?: number;
    /**
     * 针对只读账号，设置策略是否固定备机，0：不固定备机，即备机不满足条件与客户端不断开连接，Proxy选择其他可用备机，1：备机不满足条件断开连接，确保一个连接固定备机。
     */
    SlaveConst?: number;
    /**
     * 用户最大连接数限制参数。不传或者传0表示为不限制，对应max_user_connections参数，目前10.1内核版本不支持设置。
     */
    MaxUserConnections?: number;
    /**
     * 使用GetPublicKey返回的RSA2048公钥加密后的密码
     */
    EncryptedPassword?: string;
}
/**
 * UpgradeDedicatedDCDBInstance返回参数结构体
 */
export interface UpgradeDedicatedDCDBInstanceResponse {
    /**
     * 异步任务流程ID
     */
    FlowId?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CreateOnlineDDLJob返回参数结构体
 */
export interface CreateOnlineDDLJobResponse {
    /**
     * 在线DDL任务Id
     */
    FlowId?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeDBParameters返回参数结构体
 */
export interface DescribeDBParametersResponse {
    /**
     * 实例 ID，形如：dcdbt-ow7t8lmc。
     */
    InstanceId: string;
    /**
     * 请求DB的当前参数值
     */
    Params: Array<ParamDesc>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 标签
 */
export interface Tag {
    /**
     * 标签键
     */
    TagKey?: string;
    /**
     * 标签值
     */
    TagValue?: string;
}
/**
 * DescribeDatabaseTable请求参数结构体
 */
export interface DescribeDatabaseTableRequest {
    /**
     * 实例 ID，形如：dcdbt-ow7t8lmc。
     */
    InstanceId: string;
    /**
     * 数据库名称，通过 DescribeDatabases 接口获取。
     */
    DbName: string;
    /**
     * 表名称，通过 DescribeDatabaseObjects 接口获取。
     */
    Table: string;
}
/**
 * IsolateHourDCDBInstance请求参数结构体
 */
export interface IsolateHourDCDBInstanceRequest {
    /**
     * 待升级的实例ID列表。形如：["dcdbt-ow728lmc"]，可以通过 DescribeDCDBInstances 查询实例详情获得。
     */
    InstanceIds: Array<string>;
}
/**
 * ModifyDBInstanceName返回参数结构体
 */
export interface ModifyDBInstanceNameResponse {
    /**
     * 实例ID
     */
    InstanceId: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeFlow返回参数结构体
 */
export interface DescribeFlowResponse {
    /**
     * 流程状态，0：成功，1：失败，2：运行中
     */
    Status?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * UpgradeHourDCDBInstance请求参数结构体
 */
export interface UpgradeHourDCDBInstanceRequest {
    /**
     * 待升级的实例ID。形如：dcdbt-ow728lmc，可以通过 DescribeDCDBInstances 查询实例详情获得。
     */
    InstanceId: string;
    /**
     * 升级类型，取值范围:
  <li> ADD: 新增分片 </li>
   <li> EXPAND: 升级实例中的已有分片 </li>
   <li> SPLIT: 将已有分片中的数据切分到新增分片上</li>
     */
    UpgradeType: string;
    /**
     * 新增分片配置，当UpgradeType为ADD时生效。
     */
    AddShardConfig?: AddShardConfig;
    /**
     * 扩容分片配置，当UpgradeType为EXPAND时生效。
     */
    ExpandShardConfig?: ExpandShardConfig;
    /**
     * 切分分片配置，当UpgradeType为SPLIT时生效。
     */
    SplitShardConfig?: SplitShardConfig;
    /**
     * 切换开始时间，格式如: "2019-12-12 07:00:00"。开始时间必须在当前时间一个小时以后，3天以内。
     */
    SwitchStartTime?: string;
    /**
     * 切换结束时间,  格式如: "2019-12-12 07:15:00"，结束时间必须大于开始时间。
     */
    SwitchEndTime?: string;
    /**
     * 是否自动重试。 0：不自动重试  1：自动重试
     */
    SwitchAutoRetry?: number;
    /**
     * 变更部署时指定的新可用区列表，第1个为主可用区，其余为从可用区
     */
    Zones?: Array<string>;
}
/**
 * CloneAccount返回参数结构体
 */
export interface CloneAccountResponse {
    /**
     * 异步任务流程ID
     */
    FlowId: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * IsolateDCDBInstance请求参数结构体
 */
export interface IsolateDCDBInstanceRequest {
    /**
     * 实例 ID，格式如：tdsqlshard-avw0207d，与云数据库控制台页面中显示的实例 ID 相同，可使用 查询实例列表 接口获取，其值为输出参数中字段 InstanceId 的值。
     */
    InstanceIds: Array<string>;
}
/**
 * IsolateDedicatedDBInstance请求参数结构体
 */
export interface IsolateDedicatedDBInstanceRequest {
    /**
     * 实例 Id，形如：dcdbt-ow728lmc。
     */
    InstanceId: string;
}
/**
 * ModifyAccountDescription返回参数结构体
 */
export interface ModifyAccountDescriptionResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DestroyDCDBInstance请求参数结构体
 */
export interface DestroyDCDBInstanceRequest {
    /**
     * 实例 ID，格式如：tdsqlshard-c1nl9rpv，与云数据库控制台页面中显示的实例 ID 相同。
     */
    InstanceId: string;
}
/**
 * OpenDBExtranetAccess返回参数结构体
 */
export interface OpenDBExtranetAccessResponse {
    /**
     * 异步任务ID，可通过 DescribeFlow 查询任务状态。
     */
    FlowId: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CreateDCDBInstance返回参数结构体
 */
export interface CreateDCDBInstanceResponse {
    /**
     * 长订单号。可以据此调用 DescribeOrders
   查询订单详细信息，或在支付失败时调用用户账号相关接口进行支付。
     */
    DealName?: string;
    /**
     * 订单对应的实例 ID 列表，如果此处没有返回实例 ID，可以通过订单查询接口获取。还可通过实例查询接口查询实例是否创建完成。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    InstanceIds?: Array<string>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 描述分片DB节点信息
 */
export interface BriefNodeInfo {
    /**
     * DB节点ID
     */
    NodeId?: string;
    /**
     * DB节点角色，取值为master或者slave
     */
    Role?: string;
    /**
     * 节点所属分片的分片ID
     */
    ShardId?: string;
}
/**
 * ModifyDBInstancesProject返回参数结构体
 */
export interface ModifyDBInstancesProjectResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ModifyDBEncryptAttributes返回参数结构体
 */
export interface ModifyDBEncryptAttributesResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeDCDBInstanceNodeInfo请求参数结构体
 */
export interface DescribeDCDBInstanceNodeInfoRequest {
    /**
     * 实例ID
     */
    InstanceId: string;
    /**
     * 单次最多返回多少条，取值范围为(0-100]，默认为100
     */
    Limit?: number;
    /**
     * 返回数据的偏移值，默认为0
     */
    Offset?: number;
}
/**
 * SwitchDBInstanceHA返回参数结构体
 */
export interface SwitchDBInstanceHAResponse {
    /**
     * 异步流程Id
     */
    FlowId?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 数据库视图信息
 */
export interface DatabaseView {
    /**
     * 视图名称
     */
    View?: string;
}
/**
 * 配置信息。包含配置项Config，配置值Value
 */
export interface ConfigValue {
    /**
     * 配置项的名称，支持填写max_user_connections
     */
    Config: string;
    /**
     * 配置值
     */
    Value: string;
}
/**
 * DescribeDBLogFiles请求参数结构体
 */
export interface DescribeDBLogFilesRequest {
    /**
     * 实例 ID，形如：dcdbt-ow7t8lmc。
     */
    InstanceId: string;
    /**
     * 分片 ID，形如：shard-7noic7tv
     */
    ShardId: string;
    /**
     * 请求日志类型，取值只能为1、2、3或者4。1-binlog，2-冷备，3-errlog，4-slowlog。
     */
    Type: number;
}
/**
 * 描述DB节点信息
 */
export interface NodeInfo {
    /**
     * DB节点ID
     */
    NodeId?: string;
    /**
     * DB节点角色，取值为master或者slave
     */
    Role?: string;
}
/**
 * DescribeOrders返回参数结构体
 */
export interface DescribeOrdersResponse {
    /**
     * 返回的订单数量。
     */
    TotalCount: number;
    /**
     * 订单信息列表。
     */
    Deals: Array<Deal>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CreateDedicatedClusterDCDBInstance请求参数结构体
 */
export interface CreateDedicatedClusterDCDBInstanceRequest {
    /**
     * 分配实例个数
     */
    GoodsNum: number;
    /**
     * 分片数量
     */
    ShardNum: number;
    /**
     * 分片內存大小, 单位GB
     */
    ShardMemory: number;
    /**
     * 分片磁盘大小, 单位GB
     */
    ShardStorage: number;
    /**
     * 独享集群集群uuid
     */
    ClusterId: string;
    /**
     * （废弃）可用区
     */
    Zone?: string;
    /**
     * 项目ID
     */
    ProjectId?: number;
    /**
     * （废弃）cpu大小，单位：核
     */
    Cpu?: number;
    /**
     * 网络ID
     */
    VpcId?: string;
    /**
     * 子网ID
     */
    SubnetId?: string;
    /**
     * （废弃）分片机型
     */
    ShardMachine?: string;
    /**
     * 分片的节点个数
     */
    ShardNodeNum?: number;
    /**
     * （废弃）节点cpu核数，单位：1/100核
     */
    ShardNodeCpu?: number;
    /**
     * （废弃）节点內存大小，单位：GB
     */
    ShardNodeMemory?: number;
    /**
     * （废弃）节点磁盘大小，单位：GB
     */
    ShardNodeStorage?: number;
    /**
     * db版本
     */
    DbVersionId?: string;
    /**
     * 安全组ID
     */
    SecurityGroupId?: string;
    /**
     * 安全组ID列表
     */
    SecurityGroupIds?: Array<string>;
    /**
     * DCN源实例ID
     */
    DcnInstanceId?: string;
    /**
     * DCN源实例地域名
     */
    DcnRegion?: string;
    /**
     * 自定义实例名称
     */
    InstanceName?: string;
    /**
     * 标签
     */
    ResourceTags?: Array<ResourceTag>;
    /**
     * 支持IPv6标志：1 支持， 0 不支持
     */
    Ipv6Flag?: number;
    /**
     * （废弃）Pid，可通过获取独享集群售卖配置接口得到
     */
    Pid?: number;
    /**
     * 参数列表。本接口的可选值为：character_set_server（字符集，必传），lower_case_table_names（表名大小写敏感，必传，0 - 敏感；1-不敏感），innodb_page_size（innodb数据页，默认16K），sync_mode（同步模式：0 - 异步； 1 - 强同步；2 - 强同步可退化。默认为强同步可退化）。
     */
    InitParams?: Array<DBParamValue>;
    /**
     * 指定主节点uuid，不填随机分配
     */
    MasterHostId?: string;
    /**
     * 指定从节点uuid，不填随机分配
     */
    SlaveHostIds?: Array<string>;
    /**
     * 需要回档的源实例ID
     */
    RollbackInstanceId?: string;
    /**
     * 回档时间
     */
    RollbackTime?: string;
    /**
     * DCN同步模式，0：异步， 1：强同步
     */
    DcnSyncMode?: number;
}
/**
 * DCN详情条目
 */
export interface DcnDetailItem {
    /**
     * 实例ID
     */
    InstanceId?: string;
    /**
     * 实例名称
     */
    InstanceName?: string;
    /**
     * 实例地域
     */
    Region?: string;
    /**
     * 实例可用区
     */
    Zone?: string;
    /**
     * 实例IP地址
     */
    Vip?: string;
    /**
     * 实例IPv6地址
     */
    Vipv6?: string;
    /**
     * 实例端口
     */
    Vport?: number;
    /**
     * 实例状态
     */
    Status?: number;
    /**
     * 实例状态描述
     */
    StatusDesc?: string;
    /**
     * 实例DCN标志，1-主，2-备
     */
    DcnFlag?: number;
    /**
     * 实例DCN状态，0-无，1-创建中，2-同步中，3-已断开
     */
    DcnStatus?: number;
    /**
     * 实例CPU核数
     */
    Cpu?: number;
    /**
     * 实例内存大小，单位 GB
     */
    Memory?: number;
    /**
     * 实例存储大小，单位 GB
     */
    Storage?: number;
    /**
     * 付费模式
     */
    PayMode?: number;
    /**
     * 实例创建时间，格式为 2006-01-02 15:04:05
     */
    CreateTime?: string;
    /**
     * 实例到期时间，格式为 2006-01-02 15:04:05
     */
    PeriodEndTime?: string;
    /**
     * 1： 主实例（独享型）, 2: 主实例, 3： 灾备实例, 4： 灾备实例（独享型）
     */
    InstanceType?: number;
    /**
     * 是否开启了 kms
     */
    EncryptStatus?: number;
    /**
     * 实例DCN状态描述信息
     */
    DcnStatusDesc?: string;
    /**
     * DCN实例绑定的北极星服务所属的北极星实例Id，若未绑定则为空
     */
    PolarisInstanceId?: string;
    /**
     * DCN实例绑定的北极星服务所属的北极星实例名，若未绑定则为空
     */
    PolarisInstanceName?: string;
    /**
     * DCN实例绑定的北极星服务所属的北极星命名空间，若未绑定则为空
     */
    PolarisNamespace?: string;
    /**
     * DCN实例绑定的北极星服务，若未绑定则为空
     */
    PolarisService?: string;
    /**
     * DCN实例在北极星服务中的状态 0:未开启; 1:已开启; 2:已隔离; 3:切换中
     */
    PolarisServiceStatus?: number;
    /**
     * DCN实例在北极星服务中的状态的描述信息
     */
    PolarisServiceStatusDesc?: string;
    /**
     * 北极星管控地域
     */
    PolarisRegion?: string;
    /**
     * 是否支持DCN切换
     */
    IsDcnSwitchSupported?: number;
}
/**
 * ResetAccountPassword请求参数结构体
 */
export interface ResetAccountPasswordRequest {
    /**
     * 实例 ID，形如：dcdbt-ow728lmc。
     */
    InstanceId: string;
    /**
     * 登录用户名。
     */
    UserName: string;
    /**
     * 用户允许的访问 host，用户名+host唯一确定一个账号。
     */
    Host: string;
    /**
     * 新密码，由字母、数字或常见符号组成，不能包含分号、单引号和双引号，长度为6~32位。
     */
    Password?: string;
    /**
     * 使用GetPublicKey返回的RSA2048公钥加密后的密码，加密算法是PKCS1v15
     */
    EncryptedPassword?: string;
}
/**
 * CopyAccountPrivileges返回参数结构体
 */
export interface CopyAccountPrivilegesResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CloneAccount请求参数结构体
 */
export interface CloneAccountRequest {
    /**
     * 实例ID
     */
    InstanceId: string;
    /**
     * 源用户账户名
     */
    SrcUser: string;
    /**
     * 源用户HOST
     */
    SrcHost: string;
    /**
     * 目的用户账户名
     */
    DstUser: string;
    /**
     * 目的用户HOST
     */
    DstHost: string;
    /**
     * 目的用户账户描述
     */
    DstDesc?: string;
}
/**
 * DescribeDCDBInstanceDetail返回参数结构体
 */
export interface DescribeDCDBInstanceDetailResponse {
    /**
     * 实例ID，形如dcdbt-7oaxtcb7
     */
    InstanceId?: string;
    /**
     * 实例名称
     */
    InstanceName?: string;
    /**
     * 实例状态。0-实例创建中；1-异步任务处理中；2-运行中；3-实例未初始化；-1-实例已隔离
     */
    Status?: number;
    /**
     * 实例目前运行状态描述
     */
    StatusDesc?: string;
    /**
     * 实例内网IP地址
     */
    Vip?: string;
    /**
     * 实例内网端口
     */
    Vport?: number;
    /**
     * 实例节点数。值为2时表示一主一从，值为3时表示一主二从
     */
    NodeCount?: number;
    /**
     * 实例所在地域名称，形如ap-guangzhou
     */
    Region?: string;
    /**
     * 实例私有网络ID，形如vpc-r9jr0de3
     */
    VpcId?: string;
    /**
     * 实例私有网络子网ID，形如subnet-6rqs61o2
     */
    SubnetId?: string;
    /**
     * 外网状态，0-未开通；1-已开通；2-关闭；3-开通中；4-关闭中
     */
    WanStatus?: number;
    /**
     * 外网访问的域名，公网可解析
     */
    WanDomain?: string;
    /**
     * 外网IP地址，公网可访问
     */
    WanVip?: string;
    /**
     * 外网访问端口
     */
    WanPort?: number;
    /**
     * 实例所属项目ID
     */
    ProjectId?: number;
    /**
     * 实例自动续费标志。0-正常续费；1-自动续费；2-到期不续费
     */
    AutoRenewFlag?: number;
    /**
     * 独享集群ID
     */
    ExclusterId?: string;
    /**
     * 付费模式。prepaid-预付费；postpaid-按量计费
     */
    PayMode?: string;
    /**
     * 实例创建时间，格式为 2006-01-02 15:04:05
     */
    CreateTime?: string;
    /**
     * 实例到期时间，格式为 2006-01-02 15:04:05
     */
    PeriodEndTime?: string;
    /**
     * 数据库版本信息
     */
    DbVersion?: string;
    /**
     * 实例是否支持审计。0-不支持；1-支持
     */
    IsAuditSupported?: number;
    /**
     * 实例是否支持数据加密。0-不支持；1-支持
     */
    IsEncryptSupported?: number;
    /**
     * 实例母机机器型号
     */
    Machine?: string;
    /**
     * 实例内存大小，单位 GB，各个分片的内存大小的和
     */
    Memory?: number;
    /**
     * 实例磁盘存储大小，单位 GB，各个分片的磁盘大小的和
     */
    Storage?: number;
    /**
     * 实例存储空间使用率，计算方式为：各个分片已经使用的磁盘大小的和/各个分片的磁盘大小的和。
     */
    StorageUsage?: number;
    /**
     * 日志存储空间大小，单位GB
     */
    LogStorage?: number;
    /**
     * 产品类型ID
     */
    Pid?: number;
    /**
     * 主DB可用区
     */
    MasterZone?: string;
    /**
     * 从DB可用区
     */
    SlaveZones?: Array<string>;
    /**
     * 分片信息
     */
    Shards?: Array<ShardBriefInfo>;
    /**
     * 内网IPv6
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Vip6?: string;
    /**
     * 实例Cpu核数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Cpu?: number;
    /**
     * 实例QPS
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Qps?: number;
    /**
     * DB引擎
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DbEngine?: string;
    /**
     * 是否支持IPv6
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Ipv6Flag?: number;
    /**
     * 外网IPv6地址，公网可访问
  注意：此字段可能返回 null，表示取不到有效值。
     */
    WanVipv6?: string;
    /**
     * 外网状态，0-未开通；1-已开通；2-关闭；3-开通中；4-关闭中
  注意：此字段可能返回 null，表示取不到有效值。
     */
    WanStatusIpv6?: number;
    /**
     * 外网IPv6端口
  注意：此字段可能返回 null，表示取不到有效值。
     */
    WanPortIpv6?: number;
    /**
     * 标签信息
     */
    ResourceTags?: Array<ResourceTag>;
    /**
     * DCN标志，0-无，1-主实例，2-灾备实例
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DcnFlag?: number;
    /**
     * DCN状态，0-无，1-创建中，2-同步中，3-已断开
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DcnStatus?: number;
    /**
     * DCN灾备实例数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DcnDstNum?: number;
    /**
     * 1： 主实例（独享型）, 2: 主实例, 3： 灾备实例, 4： 灾备实例（独享型）
  注意：此字段可能返回 null，表示取不到有效值。
     */
    InstanceType?: number;
    /**
     * 实例是否支持设置用户连接数限制，内核为10.1暂不支持。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    IsMaxUserConnectionsSupported?: boolean;
    /**
     * 对外显示的数据库版本
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DbVersionId?: string;
    /**
     * 加密状态, 0-未开启，1-已开启
  注意：此字段可能返回 null，表示取不到有效值。
     */
    EncryptStatus?: number;
    /**
     * 独享集群类型，0:公有云, 1:金融围笼, 2:CDC集群
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ExclusterType?: number;
    /**
     * VPC就近访问
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RsAccessStrategy?: number;
    /**
     * 尚未回收的网络资源
     */
    ReservedNetResources?: Array<ReservedNetResource>;
    /**
     * 是否支持物理复制
     */
    IsPhysicalReplicationSupported?: boolean;
    /**
     * 是否支持强同步DCN
     */
    IsDcnStrongSyncSupported?: number;
    /**
     * 是否支持DCN切换
     */
    IsDcnSwitchSupported?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ModifyInstanceNetwork返回参数结构体
 */
export interface ModifyInstanceNetworkResponse {
    /**
     * 异步任务ID，根据此FlowId通过DescribeFlow接口查询任务进行状态
     */
    FlowId: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeDBSecurityGroups请求参数结构体
 */
export interface DescribeDBSecurityGroupsRequest {
    /**
     * 数据库引擎名称，本接口取值：dcdb。
     */
    Product: string;
    /**
     * 实例ID。
     */
    InstanceId: string;
}
/**
 * DescribeDCDBPrice请求参数结构体
 */
export interface DescribeDCDBPriceRequest {
    /**
     * 欲新购实例的可用区ID。
     */
    Zone: string;
    /**
     * 欲购买实例的数量，目前支持购买1-10个实例
     */
    Count: number;
    /**
     * 欲购买的时长，单位：月。
     */
    Period: number;
    /**
     * 单个分片节点个数大小，可以通过 DescribeShardSpec
   查询实例规格获得。
     */
    ShardNodeCount: number;
    /**
     * 分片内存大小，单位：GB，可以通过 DescribeShardSpec
   查询实例规格获得。
     */
    ShardMemory: number;
    /**
     * 分片存储空间大小，单位：GB，可以通过 DescribeShardSpec
   查询实例规格获得。
     */
    ShardStorage: number;
    /**
     * 实例分片个数，可选范围2-8，可以通过升级实例进行新增分片到最多64个分片。
     */
    ShardCount: number;
    /**
     * 付费类型。postpaid：按量付费   prepaid：预付费
     */
    Paymode?: string;
    /**
     * 价格金额单位，不传默认单位为分，取值：
  * pent：分
  * microPent：微分
     */
    AmountUnit?: string;
}
/**
 * DescribeOnlineDDLJob请求参数结构体
 */
export interface DescribeOnlineDDLJobRequest {
    /**
     * 实例Id
     */
    InstanceId: string;
    /**
     * Online DDL 对应的流程Id。创建任务时，CreateOnlineDDLJob 会返回此流程Id
     */
    FlowId: number;
}
/**
 * DescribeBackupFiles返回参数结构体
 */
export interface DescribeBackupFilesResponse {
    /**
     * 备份文件列表
     */
    Files?: Array<InstanceBackupFileItem>;
    /**
     * 总条目数
     */
    TotalCount?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 修改参数结果
 */
export interface ParamModifyResult {
    /**
     * 修改参数名字
     */
    Param?: string;
    /**
     * 参数修改结果。0表示修改成功；-1表示修改失败；-2表示该参数值非法
     */
    Code?: number;
}
/**
 * 数据库表权限
 */
export interface TablePrivilege {
    /**
     * 数据库名
     */
    Database: string;
    /**
     * 数据库表名
     */
    Table: string;
    /**
     * 权限信息
     */
    Privileges: Array<string>;
}
/**
 * DescribeProjectSecurityGroups返回参数结构体
 */
export interface DescribeProjectSecurityGroupsResponse {
    /**
     * 安全组详情。
     */
    Groups?: Array<SecurityGroup>;
    /**
     * 安全组个数。
     */
    Total?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 数据库函数信息
 */
export interface DatabaseFunction {
    /**
     * 函数名称
     */
    Func?: string;
}
/**
 * 参数约束
 */
export interface ParamConstraint {
    /**
     * 约束类型,如枚举enum，区间section
     */
    Type?: string;
    /**
     * 约束类型为enum时的可选值列表
     */
    Enum?: string;
    /**
     * 约束类型为section时的范围
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Range?: ConstraintRange;
    /**
     * 约束类型为string时的可选值列表
     */
    String?: string;
}
/**
 * ResetAccountPassword返回参数结构体
 */
export interface ResetAccountPasswordResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeDCDBSaleInfo请求参数结构体
 */
export declare type DescribeDCDBSaleInfoRequest = null;
/**
 * ModifyRealServerAccessStrategy请求参数结构体
 */
export interface ModifyRealServerAccessStrategyRequest {
    /**
     * 实例 ID，格式如：tdsqlshard-c1nl9rpv，与云数据库控制台页面中显示的实例 ID 相同。
     */
    InstanceId: string;
    /**
     * RS就近模式, 0-无策略, 1-可用区就近访问。
     */
    RsAccessStrategy: number;
}
/**
 * 升级实例 -- 扩容分片类型
 */
export interface ExpandShardConfig {
    /**
     * 分片ID数组
     */
    ShardInstanceIds: Array<string>;
    /**
     * 分片内存大小，单位 GB
     */
    ShardMemory: number;
    /**
     * 分片存储大小，单位 GB
     */
    ShardStorage: number;
    /**
     * 分片节点数
     */
    ShardNodeCount?: number;
}
/**
 * ModifyAccountConfig请求参数结构体
 */
export interface ModifyAccountConfigRequest {
    /**
     * 实例 ID，格式如：tdsqlshard-kpkvq5oj，与云数据库控制台页面中显示的实例 ID 相同。
     */
    InstanceId: string;
    /**
     * 账号的名称
     */
    UserName: string;
    /**
     * 账号的域名
     */
    Host: string;
    /**
     * 配置列表，每一个元素是Config和Value的组合
     */
    Configs: Array<ConfigValue>;
}
/**
 * TerminateDedicatedDBInstance返回参数结构体
 */
export interface TerminateDedicatedDBInstanceResponse {
    /**
     * 异步流程Id
     */
    FlowId: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 分片节点可用区选择
 */
export interface ShardZoneChooseInfo {
    /**
     * 主可用区
     */
    MasterZone?: ZonesInfo;
    /**
     * 可选的从可用区
     */
    SlaveZones?: Array<ZonesInfo>;
}
/**
 * RenewDCDBInstance请求参数结构体
 */
export interface RenewDCDBInstanceRequest {
    /**
     * 待续费的实例ID。形如：dcdbt-ow728lmc，可以通过 DescribeDCDBInstances 查询实例详情获得。
     */
    InstanceId: string;
    /**
     * 续费时长，单位：月。
     */
    Period: number;
    /**
     * 是否自动使用代金券进行支付，默认不使用。
     */
    AutoVoucher?: boolean;
    /**
     * 代金券ID列表，目前仅支持指定一张代金券。
     */
    VoucherIds?: Array<string>;
}
/**
 * DescribeDBEncryptAttributes返回参数结构体
 */
export interface DescribeDBEncryptAttributesResponse {
    /**
     * 是否启用加密，1-已开启；0-未开启。
     */
    EncryptStatus?: number;
    /**
     * DEK密钥
     */
    CipherText?: string;
    /**
     * DEK密钥过期日期。
     */
    ExpireDate?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 项目信息描述
 */
export interface Project {
    /**
     * 项目ID
     */
    ProjectId?: number;
    /**
     * 资源拥有者（主账号）uin
     */
    OwnerUin?: number;
    /**
     * 应用Id
     */
    AppId?: number;
    /**
     * 项目名称
     */
    Name?: string;
    /**
     * 创建者uin
     */
    CreatorUin?: number;
    /**
     * 来源平台
     */
    SrcPlat?: string;
    /**
     * 来源AppId
     */
    SrcAppId?: number;
    /**
     * 项目状态,0正常，-1关闭。默认项目为3
     */
    Status?: number;
    /**
     * 创建时间
     */
    CreateTime?: string;
    /**
     * 是否默认项目，1 是，0 不是
     */
    IsDefault?: number;
    /**
     * 描述信息
     */
    Info?: string;
}
/**
 * CreateTmpDCDBInstance请求参数结构体
 */
export interface CreateTmpDCDBInstanceRequest {
    /**
     * 回档实例的ID
     */
    InstanceId: string;
    /**
     * 回档时间点
     */
    RollbackTime: string;
}
/**
 * 数据库表信息
 */
export interface DatabaseTable {
    /**
     * 表名
     */
    Table?: string;
}
/**
 * DescribeDBEncryptAttributes请求参数结构体
 */
export interface DescribeDBEncryptAttributesRequest {
    /**
     * 实例Id，形如：tdsqlshard-ow728lmc。
     */
    InstanceId: string;
}
/**
 * 订单信息
 */
export interface Deal {
    /**
     * 订单号
     */
    DealName: string;
    /**
     * 所属账号
     */
    OwnerUin: string;
    /**
     * 商品数量
     */
    Count: number;
    /**
     * 关联的流程 Id，可用于查询流程执行状态
     */
    FlowId: number;
    /**
     * 只有创建实例且已完成发货的订单会填充该字段，表示该订单创建的实例的 ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    InstanceIds: Array<string>;
    /**
     * 付费模式，0后付费/1预付费
     */
    PayMode: number;
}
/**
 * GrantAccountPrivileges请求参数结构体
 */
export interface GrantAccountPrivilegesRequest {
    /**
     * 实例 ID，形如：dcdbt-ow728lmc。
     */
    InstanceId: string;
    /**
     * 登录用户名。
     */
    UserName: string;
    /**
     * 用户允许的访问 host，用户名+host唯一确定一个账号。
     */
    Host: string;
    /**
     * 数据库名。如果为 \*，表示查询全局权限（即 \*.\*），此时忽略 Type 和 Object 参数
     */
    DbName: string;
    /**
     * 全局权限： SELECT，INSERT，UPDATE，DELETE，CREATE，DROP，REFERENCES，INDEX，ALTER，CREATE TEMPORARY TABLES，LOCK TABLES，EXECUTE，CREATE VIEW，SHOW VIEW，CREATE ROUTINE，ALTER ROUTINE，EVENT，TRIGGER，SHOW DATABASES，REPLICATION CLIENT，REPLICATION SLAVE
  库权限： SELECT，INSERT，UPDATE，DELETE，CREATE，DROP，REFERENCES，INDEX，ALTER，CREATE TEMPORARY TABLES，LOCK TABLES，EXECUTE，CREATE VIEW，SHOW VIEW，CREATE ROUTINE，ALTER ROUTINE，EVENT，TRIGGER
  表权限： SELECT，INSERT，UPDATE，DELETE，CREATE，DROP，REFERENCES，INDEX，ALTER，CREATE VIEW，SHOW VIEW，TRIGGER
  字段权限： INSERT，REFERENCES，SELECT，UPDATE
     */
    Privileges: Array<string>;
    /**
     * 类型,可以填入 table 和 \*。当 DbName 为具体数据库名，Type为 \* 时，表示设置该数据库权限（即db.\*），此时忽略 Object 参数
     */
    Type?: string;
    /**
     * 具体的 Type 的名称，例如 Type 为 table 时就是具体的表名。DbName 和 Type 都为具体名称，则 Object 表示具体对象名，不能为 \* 或者为空
     */
    Object?: string;
    /**
     * 当 Type=table 时，ColName 为 \* 表示对表授权，如果为具体字段名，表示对字段授权
     */
    ColName?: string;
}
/**
 * DescribeShardSpec请求参数结构体
 */
export declare type DescribeShardSpecRequest = null;
/**
 * DescribeDCDBShards请求参数结构体
 */
export interface DescribeDCDBShardsRequest {
    /**
     * 实例ID，形如：dcdbt-ow728lmc。
     */
    InstanceId: string;
    /**
     * 分片ID列表。
     */
    ShardInstanceIds?: Array<string>;
    /**
     * 偏移量，默认为 0
     */
    Offset?: number;
    /**
     * 返回数量，默认为 20，最大值为 100。
     */
    Limit?: number;
    /**
     * 排序字段， 目前仅支持 createtime
     */
    OrderBy?: string;
    /**
     * 排序类型， desc 或者 asc
     */
    OrderByType?: string;
}
/**
 * SwitchDBInstanceHA请求参数结构体
 */
export interface SwitchDBInstanceHARequest {
    /**
     * 实例Id，形如 tdsql-ow728lmc。
     */
    InstanceId: string;
    /**
     * 切换的目标区域，会自动选择该可用区中延迟最低的节点。
     */
    Zone: string;
    /**
     * 指定分片实例id进行切换
     */
    ShardInstanceIds?: Array<string>;
}
/**
 * 云数据库参数信息。
 */
export interface DBParamValue {
    /**
     * 参数名称
     */
    Param: string;
    /**
     * 参数值
     */
    Value: string;
}
/**
 * 实例可售卖规格详细信息，创建实例和扩容实例时 NodeCount、Memory 确定售卖规格，硬盘大小可用区间为[MinStorage,MaxStorage]
 */
export interface SpecConfigInfo {
    /**
     * 节点个数，2 表示一主一从，3 表示一主二从
     */
    NodeCount?: number;
    /**
     * 内存大小，单位 GB
     */
    Memory?: number;
    /**
     * 数据盘规格最小值，单位 GB
     */
    MinStorage?: number;
    /**
     * 数据盘规格最大值，单位 GB
     */
    MaxStorage?: number;
    /**
     * 推荐的使用场景
     */
    SuitInfo?: string;
    /**
     * 产品类型 Id
     */
    Pid?: number;
    /**
     * 最大 Qps 值
     */
    Qps?: number;
    /**
     * CPU核数
     */
    Cpu?: number;
}
/**
 * 临时实例
 */
export interface TmpInstance {
    /**
     * 应用ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AppId?: number;
    /**
     * 创建时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CreateTime?: string;
    /**
     * 实例备注
  注意：此字段可能返回 null，表示取不到有效值。
     */
    InstanceRemark?: string;
    /**
     * 0:非临时实例 ,1:无效临时实例, 2:回档成功的有效临时实例
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TempType?: number;
    /**
     * 实例状态,0:待初始化,1:流程处理中,2:有效状态,-1:已隔离，-2：已下线
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Status?: number;
    /**
     * 实例 ID，形如：tdsql-ow728lmc。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    InstanceId?: string;
    /**
     * 实例虚IP
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Vip?: string;
    /**
     * 实例虚端口
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Vport?: number;
    /**
     * 有效期结束时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PeriodEndTime?: string;
    /**
     * 源实例 ID，形如：tdsql-ow728lmc。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SrcInstanceId?: string;
    /**
     * 实例状态描述
  注意：此字段可能返回 null，表示取不到有效值。
     */
    StatusDesc?: string;
    /**
     * 实例所在地域
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Region?: string;
    /**
     * 实例所在可用区
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Zone?: string;
    /**
     * 实例虚IPv6
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Vipv6?: string;
    /**
     * 实例IPv6标志
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Ipv6Flag?: number;
}
/**
 * ModifyDBParameters请求参数结构体
 */
export interface ModifyDBParametersRequest {
    /**
     * 实例 ID，形如：dcdbt-ow728lmc。
     */
    InstanceId: string;
    /**
     * 参数列表，每一个元素是Param和Value的组合
     */
    Params: Array<DBParamValue>;
}
/**
 * 分布式数据库实例信息
 */
export interface DCDBInstanceInfo {
    /**
     * 实例ID
     */
    InstanceId?: string;
    /**
     * 实例名称
     */
    InstanceName?: string;
    /**
     * 应用ID
     */
    AppId?: number;
    /**
     * 项目ID
     */
    ProjectId?: number;
    /**
     * 地域
     */
    Region?: string;
    /**
     * 可用区
     */
    Zone?: string;
    /**
     * VPC数字ID
     */
    VpcId?: number;
    /**
     * Subnet数字ID
     */
    SubnetId?: number;
    /**
     * 状态中文描述
     */
    StatusDesc?: string;
    /**
     * 实例状态：0 创建中，1 流程处理中， 2 运行中，3 实例未初始化，-1 实例已隔离，4 实例初始化中，5 实例删除中，6 实例重启中，7 数据迁移中
     */
    Status?: number;
    /**
     * 内网IP
     */
    Vip?: string;
    /**
     * 内网端口
     */
    Vport?: number;
    /**
     * 创建时间
     */
    CreateTime?: string;
    /**
     * 自动续费标志
     */
    AutoRenewFlag?: number;
    /**
     * 内存大小，单位 GB
     */
    Memory?: number;
    /**
     * 存储大小，单位 GB
     */
    Storage?: number;
    /**
     * 分片个数
     */
    ShardCount?: number;
    /**
     * 到期时间
     */
    PeriodEndTime?: string;
    /**
     * 隔离时间
     */
    IsolatedTimestamp?: string;
    /**
     * 账号ID
     */
    Uin?: string;
    /**
     * 分片详情
     */
    ShardDetail?: Array<ShardInfo>;
    /**
     * 节点数，2 为一主一从， 3 为一主二从
     */
    NodeCount?: number;
    /**
     * 临时实例标记，0 为非临时实例
     */
    IsTmp?: number;
    /**
     * 独享集群ID，为空表示非独享集群实例
     */
    ExclusterId?: string;
    /**
     * 字符串型的私有网络ID
     */
    UniqueVpcId?: string;
    /**
     * 字符串型的私有网络子网ID
     */
    UniqueSubnetId?: string;
    /**
     * 数字实例ID（过时字段，请勿依赖该值）
     */
    Id?: number;
    /**
     * 外网访问的域名，公网可解析
     */
    WanDomain?: string;
    /**
     * 外网 IP 地址，公网可访问
     */
    WanVip?: string;
    /**
     * 外网端口
     */
    WanPort?: number;
    /**
     * 产品类型 ID（过时字段，请勿依赖该值）
     */
    Pid?: number;
    /**
     * 实例最后更新时间，格式为 2006-01-02 15:04:05
     */
    UpdateTime?: string;
    /**
     * 数据库引擎
     */
    DbEngine?: string;
    /**
     * 数据库引擎版本
     */
    DbVersion?: string;
    /**
     * 付费模式
     */
    Paymode?: string;
    /**
     * 实例处于异步任务状态时，表示异步任务流程ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Locker?: number;
    /**
     * 外网状态，0-未开通；1-已开通；2-关闭；3-开通中
     */
    WanStatus?: number;
    /**
     * 该实例是否支持审计。1-支持；0-不支持
     */
    IsAuditSupported?: number;
    /**
     * Cpu核数
     */
    Cpu?: number;
    /**
     * 实例IPv6标志
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Ipv6Flag?: number;
    /**
     * 内网IPv6
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Vipv6?: string;
    /**
     * 外网IPv6
  注意：此字段可能返回 null，表示取不到有效值。
     */
    WanVipv6?: string;
    /**
     * 外网IPv6端口
  注意：此字段可能返回 null，表示取不到有效值。
     */
    WanPortIpv6?: number;
    /**
     * 外网IPv6状态
  注意：此字段可能返回 null，表示取不到有效值。
     */
    WanStatusIpv6?: number;
    /**
     * DCN标志，0-无，1-主实例，2-灾备实例
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DcnFlag?: number;
    /**
     * DCN状态，0-无，1-创建中，2-同步中，3-已断开
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DcnStatus?: number;
    /**
     * DCN灾备实例数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DcnDstNum?: number;
    /**
     * 1： 主实例（独享型）, 2: 主实例, 3： 灾备实例, 4： 灾备实例（独享型）
  注意：此字段可能返回 null，表示取不到有效值。
     */
    InstanceType?: number;
    /**
     * 实例标签信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ResourceTags?: Array<ResourceTag>;
    /**
     * 数据库引擎版本
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DbVersionId?: string;
}
/**
 * DescribeBackupConfigs请求参数结构体
 */
export interface DescribeBackupConfigsRequest {
    /**
     * 实例 ID，格式如：tdsqlshard-c1nl9rpv，与云数据库控制台页面中显示的实例 ID 相同。
     */
    InstanceId: string;
}
/**
 * ModifyDBInstanceSecurityGroups请求参数结构体
 */
export interface ModifyDBInstanceSecurityGroupsRequest {
    /**
     * 数据库引擎名称，本接口取值：dcdb。
     */
    Product: string;
    /**
     * 实例ID。
     */
    InstanceId: string;
    /**
     * 要修改的安全组 ID 列表，一个或者多个安全组 ID 组成的数组。
     */
    SecurityGroupIds: Array<string>;
}
/**
 * DescribeDcnDetail请求参数结构体
 */
export interface DescribeDcnDetailRequest {
    /**
     * 实例ID
     */
    InstanceId: string;
}
/**
 * DDL任务执行详情
 */
export interface DDLDetail {
    /**
     * 分片Id
     */
    ShardSerialId?: string;
    /**
     * 数据库
     */
    DbName?: string;
    /**
     * 表
     */
    Table?: string;
    /**
     * 执行的DDL任务内容
     */
    Alter?: string;
    /**
     * 开始执行时间
     */
    BeginTime?: string;
    /**
     * 当前任务状态。0 成功； 1失败；  2进行中
     */
    Status?: number;
    /**
     * 任务详细描述信息
     */
    Desc?: string;
    /**
     * 任务当前所处阶段
     */
    Stage?: string;
    /**
     * 切换状态：1: 未到切换阶段；2：正在等待进行表切换；3: 正在进行切换；4: 切换成功；5: 切换失败
     */
    SwitchStatus?: number;
}
/**
 * ModifyDBParameters返回参数结构体
 */
export interface ModifyDBParametersResponse {
    /**
     * 实例 ID，形如：dcdbt-ow728lmc。
     */
    InstanceId: string;
    /**
     * 各参数修改结果
     */
    Result: Array<ParamModifyResult>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 描述分布式数据库分片信息。
 */
export interface DCDBShardInfo {
    /**
     * 所属实例Id
     */
    InstanceId?: string;
    /**
     * 分片SQL透传Id，用于将sql透传到指定分片执行
     */
    ShardSerialId?: string;
    /**
     * 全局唯一的分片Id
     */
    ShardInstanceId?: string;
    /**
     * 状态：0 创建中，1 流程处理中， 2 运行中，3 分片未初始化
     */
    Status?: number;
    /**
     * 状态中文描述
     */
    StatusDesc?: string;
    /**
     * 创建时间
     */
    CreateTime?: string;
    /**
     * 字符串格式的私有网络Id
     */
    VpcId?: string;
    /**
     * 字符串格式的私有网络子网Id
     */
    SubnetId?: string;
    /**
     * 项目ID
     */
    ProjectId?: number;
    /**
     * 地域
     */
    Region?: string;
    /**
     * 可用区
     */
    Zone?: string;
    /**
     * 内存大小，单位 GB
     */
    Memory?: number;
    /**
     * 存储大小，单位 GB
     */
    Storage?: number;
    /**
     * 到期时间
     */
    PeriodEndTime?: string;
    /**
     * 节点数，2 为一主一从， 3 为一主二从
     */
    NodeCount?: number;
    /**
     * 存储使用率，单位为 %
     */
    StorageUsage?: number;
    /**
     * 内存使用率，单位为 %
     */
    MemoryUsage?: number;
    /**
     * 数字分片Id（过时字段，请勿依赖该值）
     */
    ShardId?: number;
    /**
     * 产品ProductID
     */
    Pid?: number;
    /**
     * Proxy版本
     */
    ProxyVersion?: string;
    /**
     * 付费模型
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Paymode?: string;
    /**
     * 分片的主可用区
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ShardMasterZone?: string;
    /**
     * 分片的从可用区列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ShardSlaveZones?: Array<string>;
    /**
     * CPU核数
     */
    Cpu?: number;
    /**
     * 分片ShardKey的范围（总共64个哈希值），例如： 0-31，32-63
     */
    Range?: string;
}
/**
 * CopyAccountPrivileges请求参数结构体
 */
export interface CopyAccountPrivilegesRequest {
    /**
     * 实例 ID，形如：dcdbt-ow728lmc。
     */
    InstanceId: string;
    /**
     * 源用户名
     */
    SrcUserName: string;
    /**
     * 源用户允许的访问 host
     */
    SrcHost: string;
    /**
     * 目的用户名
     */
    DstUserName: string;
    /**
     * 目的用户允许的访问 host
     */
    DstHost: string;
    /**
     * 源账号的 ReadOnly 属性
     */
    SrcReadOnly?: string;
    /**
     * 目的账号的 ReadOnly 属性
     */
    DstReadOnly?: string;
}
/**
 * 安全组详情
 */
export interface SecurityGroup {
    /**
     * 项目ID
     */
    ProjectId?: number;
    /**
     * 创建时间，时间格式：yyyy-mm-dd hh:mm:ss
     */
    CreateTime?: string;
    /**
     * 安全组ID
     */
    SecurityGroupId?: string;
    /**
     * 安全组名称
     */
    SecurityGroupName?: string;
    /**
     * 安全组备注
     */
    SecurityGroupRemark?: string;
    /**
     * 入站规则
     */
    Inbound?: Array<SecurityGroupBound>;
    /**
     * 出站规则
     */
    Outbound?: Array<SecurityGroupBound>;
}
/**
 * DescribeBackupFiles请求参数结构体
 */
export interface DescribeBackupFilesRequest {
    /**
     * 按实例ID查询
     */
    InstanceId?: string;
    /**
     * 按分片ID查询
     */
    ShardId?: string;
    /**
     * 备份类型，Data:数据备份，Binlog:Binlog备份，Errlog:错误日志，Slowlog:慢日志
     */
    BackupType?: string;
    /**
     * 按开始时间查询
     */
    StartTime?: string;
    /**
     * 按结束时间查询
     */
    EndTime?: string;
    /**
     * 分页参数
     */
    Limit?: number;
    /**
     * 分页参数
     */
    Offset?: number;
    /**
     * 排序参数，可选值：Time,Size
     */
    OrderBy?: string;
    /**
     * 排序参数，可选值：DESC,ASC
     */
    OrderType?: string;
}
/**
 * DescribeDCDBInstanceNodeInfo返回参数结构体
 */
export interface DescribeDCDBInstanceNodeInfoResponse {
    /**
     * 节点总个数
     */
    TotalCount: number;
    /**
     * 节点信息
     */
    NodesInfo: Array<BriefNodeInfo>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * KillSession请求参数结构体
 */
export interface KillSessionRequest {
    /**
     * 实例ID
     */
    InstanceId: string;
    /**
     * 会话ID列表
     */
    SessionId: Array<number | bigint>;
    /**
     * 分片ID，与ShardSerialId设置一个
     */
    ShardId?: string;
    /**
     * 分片序列ID，与ShardId设置一个
     */
    ShardSerialId?: string;
}
/**
 * TerminateDedicatedDBInstance请求参数结构体
 */
export interface TerminateDedicatedDBInstanceRequest {
    /**
     * 实例 Id，形如：dcdbt-ow728lmc。
     */
    InstanceId: string;
}
/**
 * DescribeDatabaseObjects返回参数结构体
 */
export interface DescribeDatabaseObjectsResponse {
    /**
     * 透传入参。
     */
    InstanceId?: string;
    /**
     * 数据库名称。
     */
    DbName?: string;
    /**
     * 表列表。
     */
    Tables?: Array<DatabaseTable>;
    /**
     * 视图列表。
     */
    Views?: Array<DatabaseView>;
    /**
     * 存储过程列表。
     */
    Procs?: Array<DatabaseProcedure>;
    /**
     * 函数列表。
     */
    Funcs?: Array<DatabaseFunction>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ModifyDBInstanceName请求参数结构体
 */
export interface ModifyDBInstanceNameRequest {
    /**
     * 实例ID，形如tdsql-hdaprz0v
     */
    InstanceId: string;
    /**
     * 实例名称
     */
    InstanceName: string;
}
/**
 * DescribeDcnDetail返回参数结构体
 */
export interface DescribeDcnDetailResponse {
    /**
     * DCN同步详情
     */
    DcnDetails?: Array<DcnDetailItem>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeBackupConfigs返回参数结构体
 */
export interface DescribeBackupConfigsResponse {
    /**
     * 实例 ID。
     */
    InstanceId?: string;
    /**
     * 常规备份存储时长，范围[1, 3650]。
     */
    Days?: number;
    /**
     * 每天备份执行的区间的开始时间，格式 mm:ss，形如 22:00。
     */
    StartBackupTime?: string;
    /**
     * 每天备份执行的区间的结束时间，格式 mm:ss，形如 23:59。
     */
    EndBackupTime?: string;
    /**
     * 执行备份周期，枚举值：Monday,Tuesday,Wednesday,Thursday,Friday,Saturday,Sunday
     */
    WeekDays?: Array<string>;
    /**
     * 沉降到归档存储时长，-1表示关闭归档设置。
     */
    ArchiveDays?: number;
    /**
     * 超期备份配置。
     */
    BackupConfigSet?: Array<BackupConfig>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ModifyDBEncryptAttributes请求参数结构体
 */
export interface ModifyDBEncryptAttributesRequest {
    /**
     * 实例Id，形如：tdsqlshard-ow728lmc。
     */
    InstanceId: string;
    /**
     * 是否启用数据加密，开启后暂不支持关闭。本接口的可选值为：1-开启数据加密。
     */
    EncryptEnabled: number;
}
/**
 * 数据库列信息
 */
export interface TableColumn {
    /**
     * 列名称
     */
    Col?: string;
    /**
     * 列类型
     */
    Type?: string;
}
/**
 * 安全出入口规则
 */
export interface SecurityGroupBound {
    /**
     * 来源 IP 或 IP 段，例如192.168.0.0/16
     */
    CidrIp?: string;
    /**
     * 策略，ACCEPT 或者 DROP
     */
    Action?: string;
    /**
     * 端口
     */
    PortRange?: string;
    /**
     * 网络协议，支持 UDP、TCP 等
     */
    IpProtocol?: string;
}
/**
 * 列权限信息
 */
export interface ColumnPrivilege {
    /**
     * 数据库名
     */
    Database: string;
    /**
     * 数据库表名
     */
    Table: string;
    /**
     * 数据库列名
     */
    Column: string;
    /**
     * 权限信息
     */
    Privileges: Array<string>;
}
/**
 * 升级实例 -- 切分分片类型
 */
export interface SplitShardConfig {
    /**
     * 分片ID数组
     */
    ShardInstanceIds: Array<string>;
    /**
     * 数据切分比例，固定50%
     */
    SplitRate: number;
    /**
     * 分片内存大小，单位 GB
     */
    ShardMemory: number;
    /**
     * 分片存储大小，单位 GB
     */
    ShardStorage: number;
}
/**
 * RenewDCDBInstance返回参数结构体
 */
export interface RenewDCDBInstanceResponse {
    /**
     * 长订单号。可以据此调用 DescribeOrders
   查询订单详细信息，或在支付失败时调用用户账号相关接口进行支付。
     */
    DealName?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeDCDBRenewalPrice返回参数结构体
 */
export interface DescribeDCDBRenewalPriceResponse {
    /**
     * 原价
  * 单位：默认为分，若请求参数带有AmountUnit，参考AmountUnit描述
  * 币种：国内站为人民币，国际站为美元
     */
    OriginalPrice: number;
    /**
     * 实际价格，受折扣等影响，可能和原价不同
  * 单位：默认为分，若请求参数带有AmountUnit，参考AmountUnit描述
  * 币种：国内站人民币，国际站美元
     */
    Price: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * UpgradeDedicatedDCDBInstance请求参数结构体
 */
export interface UpgradeDedicatedDCDBInstanceRequest {
    /**
     * 升级类型，取值为ADD，SPLIT和EXPAND。ADD-添加分片；SPLIT-切分某个分片；EXPAND-垂直扩容某个分片
     */
    UpgradeType: string;
    /**
     * 实例ID，形如 dcdbt-mlfjm74h
     */
    InstanceId: string;
    /**
     * 当UpgradeType取值为ADD时，添加分片的配置参数
     */
    AddShardConfig?: AddShardConfig;
    /**
     * 当UpgradeType取值为EXPAND时，垂直扩容分片的配置参数
     */
    ExpandShardConfig?: ExpandShardConfig;
    /**
     * 当UpgradeType取值为SPLIT时，切分分片的配置参数
     */
    SplitShardConfig?: SplitShardConfig;
    /**
     * 错过切换时间窗口时，是否自动重试一次，0-否，1-是
     */
    SwitchAutoRetry?: number;
    /**
     * 切换时间窗口开始时间
     */
    SwitchStartTime?: string;
    /**
     * 切换时间窗口结束时间
     */
    SwitchEndTime?: string;
}
/**
 * AssociateSecurityGroups返回参数结构体
 */
export interface AssociateSecurityGroupsResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeDCDBBinlogTime请求参数结构体
 */
export interface DescribeDCDBBinlogTimeRequest {
    /**
     * 需要回档的实例ID
     */
    InstanceId: string;
}
/**
 * DescribeShardSpec返回参数结构体
 */
export interface DescribeShardSpecResponse {
    /**
     * 按机型分类的可售卖规格列表
     */
    SpecConfig: Array<SpecConfig>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeDCDBShards返回参数结构体
 */
export interface DescribeDCDBShardsResponse {
    /**
     * 符合条件的分片数量
     */
    TotalCount?: number;
    /**
     * 分片信息列表
     */
    Shards?: Array<DCDBShardInfo>;
    /**
     * 灾备标志，0-无，1-主实例，2-灾备实例
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DcnFlag?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 可用区信息
 */
export interface ZonesInfo {
    /**
     * 可用区英文ID
     */
    Zone: string;
    /**
     * 可用区数字ID
     */
    ZoneId: number;
    /**
     * 可用区中文名
     */
    ZoneName: string;
    /**
     * 是否在售
     */
    OnSale: boolean;
}
/**
 * 实例备份文件信息
 */
export interface InstanceBackupFileItem {
    /**
     * 实例ID
     */
    InstanceId?: string;
    /**
     * 实例名称
     */
    InstanceName?: string;
    /**
     * 实例状态
     */
    InstanceStatus?: number;
    /**
     * 分片ID
     */
    ShardId?: string;
    /**
     * 文件路径
     */
    FilePath?: string;
    /**
     * 文件名
     */
    FileName?: string;
    /**
     * 文件大小
     */
    FileSize?: number;
    /**
     * 备份类型，Data:数据备份，Binlog:Binlog备份，Errlog:错误日志，Slowlog:慢日志
     */
    BackupType?: string;
    /**
     * 手动备份，0:否，1:是
     */
    ManualBackup?: number;
    /**
     * 备份开始时间
     */
    StartTime?: string;
    /**
     * 备份结束时间
     */
    EndTime?: string;
    /**
     * 对象的存储类型，枚举值：STANDARD（标准存储）、ARCHIVE（归档存储）。
     */
    StorageClass?: string;
}
/**
 * CreateHourDCDBInstance返回参数结构体
 */
export interface CreateHourDCDBInstanceResponse {
    /**
     * 订单对应的实例 ID 列表，如果此处没有返回实例 ID，可以通过订单查询接口获取。还可通过实例查询接口查询实例是否创建完成。
     */
    InstanceIds?: Array<string>;
    /**
     * 流程id，可以根据流程id查询创建进度
     */
    FlowId?: number;
    /**
     * 订单号。可以据此调用 DescribeOrders
   查询订单详细信息，或在支付失败时调用用户账号相关接口进行支付。
     */
    DealName?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 数据库超期备份配置
 */
export interface BackupConfig {
    /**
     * 备份策略是否启用。
     */
    EnableBackupPolicy?: boolean;
    /**
     * 超期保留开始日期，早于开始日期的超期备份不保留，格式：yyyy-mm-dd。
     */
    BeginDate?: string;
    /**
     * 超期备份保留时长，超出保留时间的超期备份将被删除，可填写1-3650整数。
     */
    MaxRetentionDays?: number;
    /**
     * 备份模式，可选择按年月周模式保存
  * 按年：annually
  * 按月：monthly
  * 按周：weekly
     */
    Frequency?: string;
    /**
     * Frequency等于weekly时生效。
  表示保留特定工作日备份。可选择周一到周日，支持多选，取星期英文：
  * 星期一 ：Monday
  * 星期二 ：Tuesday
  * 星期三：Wednesday
  * 星期四：Thursday
  * 星期五：Friday
  * 星期六：Saturday
  * 星期日：Sunday
     */
    WeekDays?: Array<string>;
    /**
     * 保留备份个数，Frequency等于monthly或weekly时生效。
  备份模式选择按月时，可填写1-28整数；
  备份模式选择年时，可填写1-336整数。
     */
    BackupCount?: number;
}
/**
 * 数据库信息
 */
export interface Database {
    /**
     * 数据库名称
     */
    DbName?: string;
}
/**
 * GrantAccountPrivileges返回参数结构体
 */
export interface GrantAccountPrivilegesResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CancelDcnJob请求参数结构体
 */
export interface CancelDcnJobRequest {
    /**
     * 灾备实例ID
     */
    InstanceId: string;
}
/**
 * IsolateHourDCDBInstance返回参数结构体
 */
export interface IsolateHourDCDBInstanceResponse {
    /**
     * 隔离成功的实例id列表
     */
    SuccessInstanceIds?: Array<string>;
    /**
     * 隔离失败的实例id列表
     */
    FailedInstanceIds?: Array<string>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 分片信息
 */
export interface ShardInfo {
    /**
     * 分片ID
     */
    ShardInstanceId?: string;
    /**
     * 分片Set ID
     */
    ShardSerialId?: string;
    /**
     * 状态：0 创建中，1 流程处理中， 2 运行中，3 分片未初始化，-2 分片已删除
     */
    Status?: number;
    /**
     * 创建时间
     */
    Createtime?: string;
    /**
     * 内存大小，单位 GB
     */
    Memory?: number;
    /**
     * 存储大小，单位 GB
     */
    Storage?: number;
    /**
     * 分片数字ID
     */
    ShardId?: number;
    /**
     * 节点数，2 为一主一从， 3 为一主二从
     */
    NodeCount?: number;
    /**
     * 产品类型 Id（过时字段，请勿依赖该值）
     */
    Pid?: number;
    /**
     * Cpu核数
     */
    Cpu?: number;
}
/**
 * ModifyInstanceVip请求参数结构体
 */
export interface ModifyInstanceVipRequest {
    /**
     * 实例ID
     */
    InstanceId: string;
    /**
     * 实例VIP
     */
    Vip: string;
    /**
     * IPv6标志
     */
    Ipv6Flag?: number;
    /**
     * VIP保留时长，单位小时，取值范围（0~168），0表示立即释放，有一分钟释放延迟。不传此参数，默认24小时释放VIP。
     */
    VipReleaseDelay?: number;
}
/**
 * OpenDBExtranetAccess请求参数结构体
 */
export interface OpenDBExtranetAccessRequest {
    /**
     * 待开放外网访问的实例ID。形如：dcdbt-ow728lmc。
     */
    InstanceId: string;
    /**
     * 是否IPv6，默认0
     */
    Ipv6Flag?: number;
}
/**
 * 保留的网络资源信息
 */
export interface ReservedNetResource {
    /**
     * 私有网络
     */
    VpcId?: string;
    /**
     * 子网
     */
    SubnetId?: string;
    /**
     * VpcId,SubnetId下保留的内网ip
     */
    Vip?: string;
    /**
     * Vip下的端口
     */
    Vports?: Array<number | bigint>;
    /**
     * Vip的回收时间
     */
    RecycleTime?: string;
}
/**
 * ModifyBackupConfigs返回参数结构体
 */
export interface ModifyBackupConfigsResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 数据库权限
 */
export interface DatabasePrivilege {
    /**
     * 权限信息
     */
    Privileges: Array<string>;
    /**
     * 数据库名
     */
    Database: string;
}
/**
 * DescribeDCDBSaleInfo返回参数结构体
 */
export interface DescribeDCDBSaleInfoResponse {
    /**
     * 可售卖地域信息列表
     */
    RegionList: Array<RegionInfo>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ModifyDBInstancesProject请求参数结构体
 */
export interface ModifyDBInstancesProjectRequest {
    /**
     * 待修改的实例ID列表。实例 ID 形如：dcdbt-ow728lmc。
     */
    InstanceIds: Array<string>;
    /**
     * 要分配的项目 ID，可以通过 DescribeProjects 查询项目列表接口获取。
     */
    ProjectId: number;
}
/**
 * CreateHourDCDBInstance请求参数结构体
 */
export interface CreateHourDCDBInstanceRequest {
    /**
     * 分片内存大小，单位：GB，可以通过 DescribeShardSpec
   查询实例规格获得。
     */
    ShardMemory: number;
    /**
     * 分片存储空间大小，单位：GB，可以通过 DescribeShardSpec
   查询实例规格获得。
     */
    ShardStorage: number;
    /**
     * 单个分片节点个数，可以通过 DescribeShardSpec
   查询实例规格获得。
     */
    ShardNodeCount: number;
    /**
     * 实例分片个数，可选范围2-8，可以通过升级实例进行新增分片到最多64个分片。
     */
    ShardCount: number;
    /**
     * 欲购买实例的数量
     */
    Count?: number;
    /**
     * 项目 ID，可以通过查看项目列表获取，不传则关联到默认项目
     */
    ProjectId?: number;
    /**
     * 虚拟私有网络 ID，不传或传空表示创建为基础网络
     */
    VpcId?: string;
    /**
     * 虚拟私有网络子网 ID，VpcId不为空时必填
     */
    SubnetId?: string;
    /**
     * 分片cpu大小，单位：核，可以通过 DescribeShardSpec
   查询实例规格获得。
     */
    ShardCpu?: number;
    /**
     * 数据库引擎版本，当前可选：8.0，5.7，10.1，10.0。
     */
    DbVersionId?: string;
    /**
     * 分片节点可用区分布，可填写多个可用区。
     */
    Zones?: Array<string>;
    /**
     * 安全组id
     */
    SecurityGroupId?: string;
    /**
     * 实例名称， 可以通过该字段自主的设置实例的名字
     */
    InstanceName?: string;
    /**
     * 是否支持IPv6，0:不支持，1:支持
     */
    Ipv6Flag?: number;
    /**
     * 标签键值对数组
     */
    ResourceTags?: Array<ResourceTag>;
    /**
     * DCN源地域
     */
    DcnRegion?: string;
    /**
     * DCN源实例ID
     */
    DcnInstanceId?: string;
    /**
     * 参数列表。本接口的可选值为：character_set_server（字符集，必传），lower_case_table_names（表名大小写敏感，必传，0 - 敏感；1-不敏感），innodb_page_size（innodb数据页，默认16K），sync_mode（同步模式：0 - 异步； 1 - 强同步；2 - 强同步可退化。默认为强同步可退化）。
     */
    InitParams?: Array<DBParamValue>;
    /**
     * 需要回档的源实例ID
     */
    RollbackInstanceId?: string;
    /**
     * 回档时间，例如“2021-11-22 00:00:00”
     */
    RollbackTime?: string;
    /**
     * 安全组ids，安全组可以传数组形式，兼容之前SecurityGroupId参数
     */
    SecurityGroupIds?: Array<string>;
    /**
     * DCN同步模式，0：异步， 1：强同步
     */
    DcnSyncMode?: number;
}
/**
 * DescribeDBSyncMode请求参数结构体
 */
export interface DescribeDBSyncModeRequest {
    /**
     * 待修改同步模式的实例ID。形如：dcdbt-ow728lmc。
     */
    InstanceId: string;
}
/**
 * CloseDBExtranetAccess返回参数结构体
 */
export interface CloseDBExtranetAccessResponse {
    /**
     * 异步任务ID，可通过 DescribeFlow 查询任务状态。
     */
    FlowId?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ModifyAccountDescription请求参数结构体
 */
export interface ModifyAccountDescriptionRequest {
    /**
     * 实例 ID，形如：dcdbt-ow728lmc。
     */
    InstanceId: string;
    /**
     * 登录用户名。
     */
    UserName: string;
    /**
     * 用户允许的访问 host，用户名+host唯一确定一个账号。
     */
    Host: string;
    /**
     * 新的账号备注，长度 0~256。
     */
    Description: string;
}
/**
 * KillSession返回参数结构体
 */
export interface KillSessionResponse {
    /**
     * 任务ID
     */
    TaskId?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeProjects请求参数结构体
 */
export declare type DescribeProjectsRequest = null;
/**
 * 慢查询条目信息
 */
export interface SlowLogData {
    /**
     * 语句校验和，用于查询详情
     */
    CheckSum?: string;
    /**
     * 数据库名称
     */
    Db?: string;
    /**
     * 抽象的SQL语句
     */
    FingerPrint?: string;
    /**
     * 平均的锁时间
     */
    LockTimeAvg?: string;
    /**
     * 最大锁时间
     */
    LockTimeMax?: string;
    /**
     * 最小锁时间
     */
    LockTimeMin?: string;
    /**
     * 锁时间总和
     */
    LockTimeSum?: string;
    /**
     * 查询次数
     */
    QueryCount?: string;
    /**
     * 平均查询时间
     */
    QueryTimeAvg?: string;
    /**
     * 最大查询时间
     */
    QueryTimeMax?: string;
    /**
     * 最小查询时间
     */
    QueryTimeMin?: string;
    /**
     * 查询时间总和
     */
    QueryTimeSum?: string;
    /**
     * 扫描行数
     */
    RowsExaminedSum?: string;
    /**
     * 发送行数
     */
    RowsSentSum?: string;
    /**
     * 最后执行时间
     */
    TsMax?: string;
    /**
     * 首次执行时间
     */
    TsMin?: string;
    /**
     * 账号
     */
    User?: string;
    /**
     * 样例Sql
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ExampleSql?: string;
    /**
     * 账户的域名
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Host?: string;
}
/**
 * CreateOnlineDDLJob请求参数结构体
 */
export interface CreateOnlineDDLJobRequest {
    /**
     * 实例Id
     */
    InstanceId: string;
    /**
     * 要执行的 DDL 语句。常用的在线DDL参考此API文档示例部分
     */
    Alter: string;
    /**
     * 要修改的数据库
     */
    DbName: string;
    /**
     * 要修改的表
     */
    Table: string;
    /**
     * 指定账号执行DDL，需确保账号有 ALTER, CREATE, INSERT, UPDATE, DROP, DELETE, INDEX, CREATE TEMPORARY TABLES, LOCK TABLES, TRIGGER, REPLICATION CLIENT, REPLICATION SLAVE 等相关权限 （若不填写将默认使用系统账号）
     */
    User?: string;
    /**
     * 指定账号的密码
     */
    Password?: string;
    /**
     * 运行线程数大于此值时，将终止DDL。不填则默认58
     */
    CriticalLoad?: number;
    /**
     * 是否检查自增字段。为1则不允许修改自增字段，0或不填写则不检查
     */
    CheckAutoInc?: number;
    /**
     * 允许的主备延迟时间(单位s)，0或不填写则不检查延迟
     */
    MaxDelay?: number;
    /**
     * 是否使用pt-osc工具做DDL
     */
    UsePt?: number;
    /**
     * 开始执行时间
     */
    StartTime?: string;
}
/**
 * DescribeDatabases返回参数结构体
 */
export interface DescribeDatabasesResponse {
    /**
     * 该实例上的数据库列表。
     */
    Databases?: Array<Database>;
    /**
     * 透传入参。
     */
    InstanceId?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 视图权限信息
 */
export interface ViewPrivileges {
    /**
     * 数据库名
     */
    Database: string;
    /**
     * 数据库视图名
     */
    View: string;
    /**
     * 权限信息
     */
    Privileges: Array<string>;
}
/**
 * DescribeOrders请求参数结构体
 */
export interface DescribeOrdersRequest {
    /**
     * 待查询的长订单号列表，创建实例、续费实例、扩容实例接口返回。
     */
    DealNames: Array<string>;
}
/**
 * DescribeDBLogFiles返回参数结构体
 */
export interface DescribeDBLogFilesResponse {
    /**
     * 实例 ID，形如：dcdbt-ow728lmc。
     */
    InstanceId: string;
    /**
     * 请求日志类型。1-binlog，2-冷备，3-errlog，4-slowlog。
     */
    Type: number;
    /**
     * 请求日志总数
     */
    Total: number;
    /**
     * 日志文件列表
     */
    Files: Array<LogFileInfo>;
    /**
     * 如果是VPC网络的实例，做用本前缀加上URI为下载地址
     */
    VpcPrefix: string;
    /**
     * 如果是普通网络的实例，做用本前缀加上URI为下载地址
     */
    NormalPrefix: string;
    /**
     * 分片 ID，形如：shard-7noic7tv
     */
    ShardId: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CloseDBExtranetAccess请求参数结构体
 */
export interface CloseDBExtranetAccessRequest {
    /**
     * 待关闭外网访问的实例ID。形如：dcdbt-ow728lmc，可以通过 DescribeDCDBInstances 查询实例详情获得。
     */
    InstanceId: string;
    /**
     * 是否IPv6，默认0
     */
    Ipv6Flag?: number;
}
/**
 * InitDCDBInstances请求参数结构体
 */
export interface InitDCDBInstancesRequest {
    /**
     * 待初始化的实例ID列表，形如：dcdbt-ow728lmc，可以通过 DescribeDCDBInstances 查询实例详情获得。
     */
    InstanceIds: Array<string>;
    /**
     * 参数列表。本接口的可选值为：character_set_server（字符集，必传），lower_case_table_names（表名大小写敏感，必传，0 - 敏感；1-不敏感），innodb_page_size（innodb数据页，默认16K），sync_mode（同步模式：0 - 异步； 1 - 强同步；2 - 强同步可退化。默认为强同步）。
     */
    Params: Array<DBParamValue>;
}
/**
 * 标签对象，包含tagKey & tagValue
 */
export interface ResourceTag {
    /**
     * 标签键key
     */
    TagKey: string;
    /**
     * 标签值value
     */
    TagValue: string;
}
/**
 * DeleteAccount请求参数结构体
 */
export interface DeleteAccountRequest {
    /**
     * 实例ID，形如：dcdbt-ow728lmc，可以通过 DescribeDCDBInstances 查询实例详情获得。
     */
    InstanceId: string;
    /**
     * 用户名
     */
    UserName: string;
    /**
     * 用户允许的访问 host
     */
    Host: string;
}
/**
 * DescribeDCDBInstances返回参数结构体
 */
export interface DescribeDCDBInstancesResponse {
    /**
     * 符合条件的实例数量
     */
    TotalCount?: number;
    /**
     * 实例详细信息列表
     */
    Instances?: Array<DCDBInstanceInfo>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ModifyAccountPrivileges返回参数结构体
 */
export interface ModifyAccountPrivilegesResponse {
    /**
     * 异步任务的请求 ID，可使用此 ID [查询异步任务的执行结果](https://cloud.tencent.com/document/product/237/16177)。
     */
    FlowId?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeFlow请求参数结构体
 */
export interface DescribeFlowRequest {
    /**
     * 异步请求接口返回的任务流程号。
     */
    FlowId: number;
}
/**
 * ModifyAccountPrivileges请求参数结构体
 */
export interface ModifyAccountPrivilegesRequest {
    /**
     * 实例 ID，格式如：tdsql-c1nl9rpv，与云数据库控制台页面中显示的实例 ID 相同。
     */
    InstanceId: string;
    /**
     * 数据库的账号，包括用户名和域名。
     */
    Accounts: Array<Account>;
    /**
     * 全局权限。其中，GlobalPrivileges 中权限的可选值为："SELECT","INSERT","UPDATE","DELETE","CREATE", "PROCESS", "DROP","REFERENCES","INDEX","ALTER","SHOW DATABASES","CREATE TEMPORARY TABLES","LOCK TABLES","EXECUTE","CREATE VIEW","SHOW VIEW","CREATE ROUTINE","ALTER ROUTINE","EVENT","TRIGGER"。
  注意，不传该参数表示保留现有权限，如需清除，该字段传空数组。
     */
    GlobalPrivileges?: Array<string>;
    /**
     * 数据库的权限。Privileges 权限的可选值为："SELECT","INSERT","UPDATE","DELETE","CREATE", "DROP","REFERENCES","INDEX","ALTER","CREATE TEMPORARY TABLES","LOCK TABLES","EXECUTE","CREATE VIEW","SHOW VIEW","CREATE ROUTINE","ALTER ROUTINE","EVENT","TRIGGER"。
  注意，不传该参数表示保留现有权限，如需清除，请在复杂类型Privileges字段传空数组。
     */
    DatabasePrivileges?: Array<DatabasePrivilege>;
    /**
     * 数据库中表的权限。Privileges 权限的可选值为："SELECT","INSERT","UPDATE","DELETE","CREATE", "DROP","REFERENCES","INDEX","ALTER","CREATE VIEW","SHOW VIEW", "TRIGGER"。
  注意，不传该参数表示保留现有权限，如需清除，请在复杂类型Privileges字段传空数组。
     */
    TablePrivileges?: Array<TablePrivilege>;
    /**
     * 数据库表中列的权限。Privileges 权限的可选值为："SELECT","INSERT","UPDATE","REFERENCES"。
  注意，不传该参数表示保留现有权限，如需清除，请在复杂类型Privileges字段传空数组。
     */
    ColumnPrivileges?: Array<ColumnPrivilege>;
    /**
     * 数据库视图的权限。Privileges 权限的可选值为："SELECT","INSERT","UPDATE","DELETE","CREATE", "DROP","REFERENCES","INDEX","ALTER","CREATE VIEW","SHOW VIEW", "TRIGGER"。
  注意，不传该参数表示保留现有权限，如需清除，请在复杂类型Privileges字段传空数组。
     */
    ViewPrivileges?: Array<ViewPrivileges>;
}
/**
 * 数据库账号信息
 */
export interface Account {
    /**
     * 账户的名称
     */
    User: string;
    /**
     * 账户的域名
     */
    Host: string;
}
/**
 * CreateDCDBInstance请求参数结构体
 */
export interface CreateDCDBInstanceRequest {
    /**
     * 分片节点可用区分布，可填写多个可用区。
  注意当前可售卖的可用区需要通过DescribeDCDBSaleInfo接口拉取。
     */
    Zones: Array<string>;
    /**
     * 欲购买的时长，单位：月。
     */
    Period: number;
    /**
     * 分片内存大小，单位：GB，可以通过 DescribeShardSpec
   查询实例规格获得。
     */
    ShardMemory: number;
    /**
     * 分片存储空间大小，单位：GB，可以通过 DescribeShardSpec
   查询实例规格获得。
     */
    ShardStorage: number;
    /**
     * 单个分片节点个数，可以通过 DescribeShardSpec
   查询实例规格获得。
     */
    ShardNodeCount: number;
    /**
     * 实例分片个数，可选范围2-8，可以通过升级实例进行新增分片到最多64个分片。
     */
    ShardCount: number;
    /**
     * 欲购买实例的数量
     */
    Count?: number;
    /**
     * 项目 ID，可以通过查看项目列表获取，不传则关联到默认项目
     */
    ProjectId?: number;
    /**
     * 虚拟私有网络 ID，不传或传空表示创建为基础网络
     */
    VpcId?: string;
    /**
     * 虚拟私有网络子网 ID，VpcId不为空时必填
     */
    SubnetId?: string;
    /**
     * 数据库引擎版本，当前可选：8.0，5.7，10.1，10.0。
     */
    DbVersionId?: string;
    /**
     * 是否自动使用代金券进行支付，默认不使用。
     */
    AutoVoucher?: boolean;
    /**
     * 代金券ID列表，目前仅支持指定一张代金券。
     */
    VoucherIds?: Array<string>;
    /**
     * 安全组id
     */
    SecurityGroupId?: string;
    /**
     * 实例名称， 可以通过该字段自主的设置实例的名字
     */
    InstanceName?: string;
    /**
     * 是否支持IPv6，0:不支持，1:支持
     */
    Ipv6Flag?: number;
    /**
     * 标签键值对数组
     */
    ResourceTags?: Array<ResourceTag>;
    /**
     * 参数列表。本接口的可选值为：character_set_server（字符集，必传），lower_case_table_names（表名大小写敏感，必传，0 - 敏感；1-不敏感），innodb_page_size（innodb数据页，默认16K），sync_mode（同步模式：0 - 异步； 1 - 强同步；2 - 强同步可退化。默认为强同步可退化）。
     */
    InitParams?: Array<DBParamValue>;
    /**
     * DCN源地域
     */
    DcnRegion?: string;
    /**
     * DCN源实例ID
     */
    DcnInstanceId?: string;
    /**
     * 自动续费标记，0:默认状态(用户未设置，即初始状态即手动续费，用户开通了预付费不停服特权也会进行自动续费)， 1:自动续费，2:明确不自动续费(用户设置)。若业务无续费概念或无需自动续费，需要设置为0
     */
    AutoRenewFlag?: number;
    /**
     * 安全组ids，安全组可以传数组形式，兼容之前SecurityGroupId参数
     */
    SecurityGroupIds?: Array<string>;
    /**
     * DCN同步模式，0：异步， 1：强同步
     */
    DcnSyncMode?: number;
}
/**
 * DescribeDCDBUpgradePrice请求参数结构体
 */
export interface DescribeDCDBUpgradePriceRequest {
    /**
     * 待升级的实例ID。形如：dcdbt-ow728lmc，可以通过 DescribeDCDBInstances 查询实例详情获得。
     */
    InstanceId: string;
    /**
     * 升级类型，取值范围:
  <li> ADD: 新增分片 </li>
   <li> EXPAND: 升级实例中的已有分片 </li>
   <li> SPLIT: 将已有分片中的数据切分到新增分片上</li>
     */
    UpgradeType: string;
    /**
     * 新增分片配置，当UpgradeType为ADD时生效。
     */
    AddShardConfig?: AddShardConfig;
    /**
     * 扩容分片配置，当UpgradeType为EXPAND时生效。
     */
    ExpandShardConfig?: ExpandShardConfig;
    /**
     * 切分分片配置，当UpgradeType为SPLIT时生效。
     */
    SplitShardConfig?: SplitShardConfig;
    /**
     * 价格金额单位，不传默认单位为分，取值：
  * pent：分
  * microPent：微分
     */
    AmountUnit?: string;
}
/**
 * CreateDedicatedClusterDCDBInstance返回参数结构体
 */
export interface CreateDedicatedClusterDCDBInstanceResponse {
    /**
     * 分配资源ID数组
     */
    InstanceIds?: Array<string>;
    /**
     * 流程ID
     */
    FlowId?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 用户任务信息
 */
export interface UserTaskInfo {
    /**
     * 任务ID
     */
    Id?: number;
    /**
     * 用户账户ID
     */
    AppId?: number;
    /**
     * 任务状态，0-任务初始化中；1-任务运行中；2-任务成功；3-任务失败
     */
    Status?: number;
    /**
     * 任务类型，0-实例回档；1-实例创建；2-实例扩容；3-实例迁移；4-实例删除；5-实例重启
     */
    UserTaskType?: number;
    /**
     * 任务创建时间
     */
    CreateTime?: string;
    /**
     * 任务结束时间
     */
    EndTime?: string;
    /**
     * 任务错误信息
     */
    ErrMsg?: string;
    /**
     * 客户端参数
     */
    InputData?: string;
    /**
     * 实例ID
     */
    InstanceId?: string;
    /**
     * 实例名称
     */
    InstanceName?: string;
    /**
     * 地域ID
     */
    RegionId?: number;
}
/**
 * 数据库存储过程信息
 */
export interface DatabaseProcedure {
    /**
     * 存储过程名称
     */
    Proc?: string;
}
/**
 * DescribeDBTmpInstances返回参数结构体
 */
export interface DescribeDBTmpInstancesResponse {
    /**
     * 临时实例列表
     */
    TmpInstances: Array<TmpInstance>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeDCDBBinlogTime返回参数结构体
 */
export interface DescribeDCDBBinlogTimeResponse {
    /**
     * 开始时间
     */
    StartTime: string;
    /**
     * 结束时间
     */
    EndTime: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 升级实例 -- 新增分片类型
 */
export interface AddShardConfig {
    /**
     * 新增分片的数量
     */
    ShardCount: number;
    /**
     * 分片内存大小，单位 GB
     */
    ShardMemory: number;
    /**
     * 分片存储大小，单位 GB
     */
    ShardStorage: number;
}
/**
 * ModifyDBSyncMode请求参数结构体
 */
export interface ModifyDBSyncModeRequest {
    /**
     * 待修改同步模式的实例ID。形如：dcdbt-ow728lmc。
     */
    InstanceId: string;
    /**
     * 同步模式：0 异步，1 强同步， 2 强同步可退化
     */
    SyncMode: number;
}
/**
 * ModifyAccountConfig返回参数结构体
 */
export interface ModifyAccountConfigResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * IsolateDCDBInstance返回参数结构体
 */
export interface IsolateDCDBInstanceResponse {
    /**
     * 隔离成功实例ID列表。
     */
    SuccessInstanceIds?: Array<string>;
    /**
     * 隔离失败实例ID列表。
     */
    FailedInstanceIds?: Array<string>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeProjects返回参数结构体
 */
export interface DescribeProjectsResponse {
    /**
     * 项目列表
     */
    Projects: Array<Project>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CreateTmpDCDBInstance返回参数结构体
 */
export interface CreateTmpDCDBInstanceResponse {
    /**
     * 任务流ID
     */
    FlowId?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CreateAccount返回参数结构体
 */
export interface CreateAccountResponse {
    /**
     * 实例ID，透传入参。
     */
    InstanceId?: string;
    /**
     * 用户名，透传入参。
     */
    UserName?: string;
    /**
     * 允许访问的 host，透传入参。
     */
    Host?: string;
    /**
     * 透传入参。
     */
    ReadOnly?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * IsolateDedicatedDBInstance返回参数结构体
 */
export interface IsolateDedicatedDBInstanceResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeLogFileRetentionPeriod返回参数结构体
 */
export interface DescribeLogFileRetentionPeriodResponse {
    /**
     * 实例 ID，形如：tdsql-ow728lmc。
     */
    InstanceId: string;
    /**
     * 日志备份天数
     */
    Days: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 售卖可用区信息
 */
export interface RegionInfo {
    /**
     * 地域英文ID
     */
    Region?: string;
    /**
     * 地域数字ID
     */
    RegionId?: number;
    /**
     * 地域中文名
     */
    RegionName?: string;
    /**
     * 可用区列表
     */
    ZoneList?: Array<ZonesInfo>;
    /**
     * 可选择的主可用区和从可用区
     */
    AvailableChoice?: Array<ShardZoneChooseInfo>;
}
/**
 * DescribeDatabaseObjects请求参数结构体
 */
export interface DescribeDatabaseObjectsRequest {
    /**
     * 实例 ID，形如：dcdbt-ow7t8lmc。
     */
    InstanceId: string;
    /**
     * 数据库名称，通过 DescribeDatabases 接口获取。
     */
    DbName: string;
}
/**
 * UpgradeDCDBInstance请求参数结构体
 */
export interface UpgradeDCDBInstanceRequest {
    /**
     * 待升级的实例ID。形如：dcdbt-ow728lmc，可以通过 DescribeDCDBInstances 查询实例详情获得。
     */
    InstanceId: string;
    /**
     * 升级类型，取值范围:
  <li> ADD: 新增分片 </li>
   <li> EXPAND: 升级实例中的已有分片 </li>
   <li> SPLIT: 将已有分片中的数据切分到新增分片上</li>
     */
    UpgradeType: string;
    /**
     * 新增分片配置，当UpgradeType为ADD时生效。
     */
    AddShardConfig?: AddShardConfig;
    /**
     * 扩容分片配置，当UpgradeType为EXPAND时生效。
     */
    ExpandShardConfig?: ExpandShardConfig;
    /**
     * 切分分片配置，当UpgradeType为SPLIT时生效。
     */
    SplitShardConfig?: SplitShardConfig;
    /**
     * 是否自动使用代金券进行支付，默认不使用。
     */
    AutoVoucher?: boolean;
    /**
     * 代金券ID列表，目前仅支持指定一张代金券。
     */
    VoucherIds?: Array<string>;
    /**
     * 变更部署时指定的新可用区列表，第1个为主可用区，其余为从可用区
     */
    Zones?: Array<string>;
    /**
     * 切换开始时间，格式如: "2019-12-12 07:00:00"。开始时间必须在当前时间一个小时以后，3天以内。
     */
    SwitchStartTime?: string;
    /**
     * 切换结束时间, 格式如: "2019-12-12 07:15:00"，结束时间必须大于开始时间。
     */
    SwitchEndTime?: string;
    /**
     * 是否自动重试。 0：不自动重试 1：自动重试
     */
    SwitchAutoRetry?: number;
}
/**
 * ModifyInstanceNetwork请求参数结构体
 */
export interface ModifyInstanceNetworkRequest {
    /**
     * 实例ID
     */
    InstanceId: string;
    /**
     * 希望转到的VPC网络的VpcId
     */
    VpcId: string;
    /**
     * 希望转到的VPC网络的子网ID
     */
    SubnetId: string;
    /**
     * 如果需要指定VIP，填上该字段
     */
    Vip?: string;
    /**
     * 如果需要指定VIPv6，填上该字段
     */
    Vipv6?: string;
    /**
     * VIP保留时长，单位小时，取值范围（0~168），0表示立即释放，有一分钟释放延迟。不传此参数，默认24小时释放VIP。
     */
    VipReleaseDelay?: number;
}
/**
 * DestroyHourDCDBInstance返回参数结构体
 */
export interface DestroyHourDCDBInstanceResponse {
    /**
     * 异步任务的请求 ID，可使用此 ID [查询异步任务的执行结果](https://cloud.tencent.com/document/product/557/56485)。
     */
    FlowId?: number;
    /**
     * 实例 ID，与入参InstanceId一致。
     */
    InstanceId?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 约束类型值的范围
 */
export interface ConstraintRange {
    /**
     * 约束类型为section时的最小值
     */
    Min?: string;
    /**
     * 约束类型为section时的最大值
     */
    Max?: string;
}
/**
 * 拉取的日志信息
 */
export interface LogFileInfo {
    /**
     * Log最后修改时间
     */
    Mtime?: number;
    /**
     * 文件长度
     */
    Length?: number;
    /**
     * 下载Log时用到的统一资源标识符
     */
    Uri?: string;
    /**
     * 文件名
     */
    FileName?: string;
}
/**
 * ActiveHourDCDBInstance请求参数结构体
 */
export interface ActiveHourDCDBInstanceRequest {
    /**
     * 待升级的实例ID列表。形如：["dcdbt-ow728lmc"]，可以通过 DescribeDCDBInstances 查询实例详情获得。
     */
    InstanceIds: Array<string>;
}
/**
 * DisassociateSecurityGroups请求参数结构体
 */
export interface DisassociateSecurityGroupsRequest {
    /**
     * 数据库引擎名称，本接口取值：dcdb。
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
 * 云数据库账号信息
 */
export interface DBAccount {
    /**
     * 用户名
     */
    UserName?: string;
    /**
     * 用户可以从哪台主机登录（对应 MySQL 用户的 host 字段，UserName + Host 唯一标识一个用户，IP形式，IP段以%结尾；支持填入%；为空默认等于%）
     */
    Host?: string;
    /**
     * 用户备注信息
     */
    Description?: string;
    /**
     * 创建时间
     */
    CreateTime?: string;
    /**
     * 最后更新时间
     */
    UpdateTime?: string;
    /**
     * 只读标记，0：否， 1：该账号的sql请求优先选择备机执行，备机不可用时选择主机执行，2：优先选择备机执行，备机不可用时操作失败。
     */
    ReadOnly?: number;
    /**
     * 如果备机延迟超过本参数设置值，系统将认为备机发生故障
  建议该参数值大于10。当ReadOnly选择1、2时该参数生效。
     */
    DelayThresh?: number;
    /**
     * 针对只读账号，设置策略是否固定备机，0：不固定备机，即备机不满足条件与客户端不断开连接，Proxy选择其他可用备机，1：备机不满足条件断开连接，确保一个连接固定备机。
     */
    SlaveConst?: number;
    /**
     * 用户最大连接数，0代表无限制
     */
    MaxUserConnections?: number;
}
/**
 * DescribeDatabaseTable返回参数结构体
 */
export interface DescribeDatabaseTableResponse {
    /**
     * 实例名称。
     */
    InstanceId?: string;
    /**
     * 数据库名称。
     */
    DbName?: string;
    /**
     * 表名称。
     */
    Table?: string;
    /**
     * 列信息。
     */
    Cols?: Array<TableColumn>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeAccountPrivileges请求参数结构体
 */
export interface DescribeAccountPrivilegesRequest {
    /**
     * 实例 ID，形如：dcdbt-ow7t8lmc。
     */
    InstanceId: string;
    /**
     * 登录用户名。
     */
    UserName: string;
    /**
     * 用户允许的访问 host，用户名+host唯一确定一个账号。
     */
    Host: string;
    /**
     * 数据库名。如果为 \*，表示查询全局权限（即 \*.\*），此时忽略 Type 和 Object 参数
     */
    DbName: string;
    /**
     * 类型,可以填入 table 、 view 、 proc 、 func 和 \*。当 DbName 为具体数据库名，Type为 \* 时，表示查询该数据库权限（即db.\*），此时忽略 Object 参数
     */
    Type?: string;
    /**
     * 具体的 Type 的名称，例如 Type 为 table 时就是具体的表名。DbName 和 Type 都为具体名称，则 Object 表示具体对象名，不能为 \* 或者为空
     */
    Object?: string;
    /**
     * 当 Type=table 时，ColName 为 \* 表示查询表的权限，如果为具体字段名，表示查询对应字段的权限
     */
    ColName?: string;
}
/**
 * DescribeAccounts返回参数结构体
 */
export interface DescribeAccountsResponse {
    /**
     * 实例ID，透传入参。
     */
    InstanceId: string;
    /**
     * 实例用户列表。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Users: Array<DBAccount>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeDBSlowLogs返回参数结构体
 */
export interface DescribeDBSlowLogsResponse {
    /**
     * 所有语句锁时间总和
     */
    LockTimeSum: number;
    /**
     * 所有语句查询总次数
     */
    QueryCount: number;
    /**
     * 总记录数
     */
    Total: number;
    /**
     * 所有语句查询时间总和
     */
    QueryTimeSum: number;
    /**
     * 慢查询日志数据
     */
    Data: Array<SlowLogData>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeDCDBRenewalPrice请求参数结构体
 */
export interface DescribeDCDBRenewalPriceRequest {
    /**
     * 待续费的实例ID。形如：dcdbt-ow728lmc，可以通过 DescribeDCDBInstances 查询实例详情获得。
     */
    InstanceId: string;
    /**
     * 续费时长，单位：月。不传则默认为1个月。
     */
    Period?: number;
    /**
     * 价格金额单位，不传默认单位为分，取值：
  * pent：分
  * microPent：微分
     */
    AmountUnit?: string;
}
/**
 * DescribeDCDBInstances请求参数结构体
 */
export interface DescribeDCDBInstancesRequest {
    /**
     * 按照一个或者多个实例 ID 查询。实例 ID 形如：dcdbt-2t4cf98d
     */
    InstanceIds?: Array<string>;
    /**
     * 搜索的字段名，当前支持的值有：instancename、vip、all。传 instancename 表示按实例名进行搜索；传 vip 表示按内网IP进行搜索；传 all 将会按实例ID、实例名和内网IP进行搜索。
     */
    SearchName?: string;
    /**
     * 搜索的关键字，支持模糊搜索。多个关键字使用换行符（'\n'）分割。
     */
    SearchKey?: string;
    /**
     * 按项目 ID 查询
     */
    ProjectIds?: Array<number | bigint>;
    /**
     * 是否根据 VPC 网络来搜索
     */
    IsFilterVpc?: boolean;
    /**
     * 私有网络 ID， IsFilterVpc 为 1 时有效
     */
    VpcId?: string;
    /**
     * 私有网络的子网 ID， IsFilterVpc 为 1 时有效
     */
    SubnetId?: string;
    /**
     * 排序字段， projectId， createtime， instancename 三者之一
     */
    OrderBy?: string;
    /**
     * 排序类型， desc 或者 asc
     */
    OrderByType?: string;
    /**
     * 偏移量，默认为 0
     */
    Offset?: number;
    /**
     * 返回数量，默认为 10，最大值为 100。
     */
    Limit?: number;
    /**
     * 1非独享集群，2独享集群， 0全部
     */
    ExclusterType?: number;
    /**
     * 标识是否使用ExclusterType字段, false不使用，true使用
     */
    IsFilterExcluster?: boolean;
    /**
     * 独享集群ID
     */
    ExclusterIds?: Array<string>;
    /**
     * 按标签key查询
     */
    TagKeys?: Array<string>;
    /**
     * 标签
     */
    Tags?: Array<Tag>;
    /**
     * 实例类型过滤，1-独享实例，2-主实例，3-灾备实例，多个按逗号分隔
     */
    FilterInstanceType?: string;
    /**
     * 按实例状态筛选。状态值 -2：已删除； -1：已隔离；0：创建中；1：流程处理中；2：运行中
     */
    Status?: Array<number | bigint>;
    /**
     * 排除实例状态。状态值 -2：已删除； -1：已隔离；0：创建中；1：流程处理中；2：运行中
     */
    ExcludeStatus?: Array<number | bigint>;
}
/**
 * DescribeLogFileRetentionPeriod请求参数结构体
 */
export interface DescribeLogFileRetentionPeriodRequest {
    /**
     * 实例 ID，形如：tdsql-ow728lmc。
     */
    InstanceId: string;
}
/**
 * DescribeOnlineDDLJob返回参数结构体
 */
export interface DescribeOnlineDDLJobResponse {
    /**
     * 任务状态。0：成功；1：失败；大于1：进行中
     */
    Status?: number;
    /**
     * 任务进度百分比
     */
    Process?: number;
    /**
     * 错误信息或提示信息
     */
    ErrorMessage?: string;
    /**
     * 各分片DDL执行详情
     */
    DDLDetails?: Array<DDLDetail>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ModifyInstanceVport请求参数结构体
 */
export interface ModifyInstanceVportRequest {
    /**
     * 实例ID
     */
    InstanceId: string;
    /**
     * 实例VPORT
     */
    Vport: number;
}
/**
 * ModifyDBInstanceSecurityGroups返回参数结构体
 */
export interface ModifyDBInstanceSecurityGroupsResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DestroyHourDCDBInstance请求参数结构体
 */
export interface DestroyHourDCDBInstanceRequest {
    /**
     * 实例 ID，格式如：tdsqlshard-c1nl9rpv，与云数据库控制台页面中显示的实例 ID 相同。
     */
    InstanceId: string;
}
/**
 * FlushBinlog请求参数结构体
 */
export interface FlushBinlogRequest {
    /**
     * 实例ID
     */
    InstanceId: string;
}
/**
 * CancelOnlineDDLJob返回参数结构体
 */
export interface CancelOnlineDDLJobResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ModifyDBSyncMode返回参数结构体
 */
export interface ModifyDBSyncModeResponse {
    /**
     * 异步任务Id，可通过 DescribeFlow 查询任务状态。
     */
    FlowId: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DisassociateSecurityGroups返回参数结构体
 */
export interface DisassociateSecurityGroupsResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeUserTasks请求参数结构体
 */
export interface DescribeUserTasksRequest {
    /**
     * 任务的状态列表。0-任务启动中；1-任务运行中；2-任务成功；3-任务失败
     */
    Statuses?: Array<number | bigint>;
    /**
     * 实例ID列表
     */
    InstanceIds?: Array<string>;
    /**
     * 任务类型列表，当前支持的任务类型有：0-回档任务；1-创建实例任务；2-扩容任务；3-迁移任务；4-删除实例任务；5-重启任务
     */
    FlowTypes?: Array<number | bigint>;
    /**
     * 任务的创建时间
     */
    StartTime?: string;
    /**
     * 任务的结束时间
     */
    EndTime?: string;
    /**
     * 任务ID的数组
     */
    UTaskIds?: Array<number | bigint>;
    /**
     * 每次最多返回多少条任务，取值范围为(0,100]，不传的话默认值为20
     */
    Limit?: number;
    /**
     * 返回任务默认是按照创建时间降序排列，从偏移值Offset处开始返回
     */
    Offset?: number;
}
/**
 * DeleteAccount返回参数结构体
 */
export interface DeleteAccountResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
