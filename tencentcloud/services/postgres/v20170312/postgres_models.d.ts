/**
 * CreateDBInstances请求参数结构体
 */
export interface CreateDBInstancesRequest {
    /**
      * 售卖规格ID。该参数可以通过调用DescribeProductConfig的返回值中的SpecCode字段来获取。
      */
    SpecCode: string;
    /**
      * PostgreSQL内核版本，目前支持以下版本：9.3.5、9.5.4、10.4、11.8、12.4 。
      */
    DBVersion: string;
    /**
      * 实例容量大小，单位：GB。
      */
    Storage: number;
    /**
      * 一次性购买的实例数量。取值1-100
      */
    InstanceCount: number;
    /**
      * 购买时长，单位：月。目前只支持1,2,3,4,5,6,7,8,9,10,11,12,24,36这些值，按量计费模式下该参数传1。
      */
    Period: number;
    /**
      * 可用区ID。该参数可以通过调用 DescribeZones 接口的返回值中的Zone字段来获取。
      */
    Zone: string;
    /**
      * 项目ID。
      */
    ProjectId?: number;
    /**
      * 实例计费类型。目前支持：PREPAID（预付费，即包年包月），POSTPAID_BY_HOUR（后付费，即按量计费）。
      */
    InstanceChargeType?: string;
    /**
      * 是否自动使用代金券。1（是），0（否），默认不使用。
      */
    AutoVoucher?: number;
    /**
      * 代金券ID列表，目前仅支持指定一张代金券。
      */
    VoucherIds?: Array<string>;
    /**
      * 私有网络ID。
      */
    VpcId?: string;
    /**
      * 私有网络子网ID。
      */
    SubnetId?: string;
    /**
      * 续费标记：0-正常续费（默认）；1-自动续费；
      */
    AutoRenewFlag?: number;
    /**
      * 活动ID
      */
    ActivityId?: number;
    /**
      * 实例名(后续支持)
      */
    Name?: string;
    /**
      * 是否需要支持Ipv6，1：是，0：否
      */
    NeedSupportIpv6?: number;
    /**
      * 实例需要绑定的Tag信息，默认为空
      */
    TagList?: Array<Tag>;
    /**
      * 安全组id
      */
    SecurityGroupIds?: Array<string>;
}
/**
 * SetAutoRenewFlag请求参数结构体
 */
export interface SetAutoRenewFlagRequest {
    /**
      * 实例ID数组
      */
    DBInstanceIdSet: Array<string>;
    /**
      * 续费标记。0-正常续费；1-自动续费；2-到期不续费
      */
    AutoRenewFlag: number;
}
/**
 * DescribeDatabases请求参数结构体
 */
export interface DescribeDatabasesRequest {
    /**
      * 实例ID
      */
    DBInstanceId: string;
}
/**
 * DescribeDBXlogs请求参数结构体
 */
export interface DescribeDBXlogsRequest {
    /**
      * 实例ID，形如postgres-4wdeb0zv。
      */
    DBInstanceId: string;
    /**
      * 查询开始时间，形如2018-06-10 17:06:38，起始时间不得小于7天以前
      */
    StartTime: string;
    /**
      * 查询结束时间，形如2018-06-10 17:06:38
      */
    EndTime: string;
    /**
      * 分页返回，表示返回第几页的条目。从第0页开始计数。
      */
    Offset?: number;
    /**
      * 分页返回，表示每页有多少条目。取值为1-100。
      */
    Limit?: number;
}
/**
 * DescribeAccounts请求参数结构体
 */
export interface DescribeAccountsRequest {
    /**
      * 实例ID，形如postgres-6fego161
      */
    DBInstanceId: string;
    /**
      * 分页返回，每页最大返回数目，默认20，取值范围为1-100
      */
    Limit?: number;
    /**
      * 分页返回，返回第几页的用户数据。页码从0开始计数
      */
    Offset?: number;
    /**
      * 返回数据按照创建时间或者用户名排序。取值只能为createTime或者name。createTime-按照创建时间排序；name-按照用户名排序
      */
    OrderBy?: string;
    /**
      * 返回结果是升序还是降序。取值只能为desc或者asc。desc-降序；asc-升序
      */
    OrderByType?: string;
}
/**
 * DeleteReadOnlyGroup返回参数结构体
 */
export interface DeleteReadOnlyGroupResponse {
    /**
      * 流程ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    FlowId: number;
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
      * 售卖规格ID。该参数可以通过调用DescribeProductConfig的返回值中的SpecCode字段来获取。
      */
    SpecCode: string;
    /**
      * PostgreSQL内核版本，目前支持：9.3.5、9.5.4、10.4、11.8、12.4五种版本。
      */
    DBVersion: string;
    /**
      * 实例容量大小，单位：GB。
      */
    Storage: number;
    /**
      * 一次性购买的实例数量。取值1-10。
      */
    InstanceCount: number;
    /**
      * 购买时长，单位：月。目前只支持1,2,3,4,5,6,7,8,9,10,11,12,24,36这些值，按量计费模式下该参数传1。
      */
    Period: number;
    /**
      * 可用区ID。该参数可以通过调用 DescribeZones 接口的返回值中的Zone字段来获取。
      */
    Zone: string;
    /**
      * 实例字符集，目前只支持：UTF8、LATIN1。
      */
    Charset: string;
    /**
      * 实例根账号用户名。
      */
    AdminName: string;
    /**
      * 实例根账号用户名对应的密码。
      */
    AdminPassword: string;
    /**
      * 项目ID。
      */
    ProjectId?: number;
    /**
      * 实例计费类型。目前支持：PREPAID（预付费，即包年包月），POSTPAID_BY_HOUR（后付费，即按量计费）。
      */
    InstanceChargeType?: string;
    /**
      * 是否自动使用代金券。1（是），0（否），默认不使用。
      */
    AutoVoucher?: number;
    /**
      * 代金券ID列表，目前仅支持指定一张代金券。
      */
    VoucherIds?: Array<string>;
    /**
      * 私有网络ID。
      */
    VpcId?: string;
    /**
      * 已配置的私有网络中的子网ID。
      */
    SubnetId?: string;
    /**
      * 续费标记：0-正常续费（默认）；1-自动续费。
      */
    AutoRenewFlag?: number;
    /**
      * 活动ID。
      */
    ActivityId?: number;
    /**
      * 实例名。
      */
    Name?: string;
    /**
      * 是否需要支持Ipv6，1：是，0：否（默认）。
      */
    NeedSupportIpv6?: number;
    /**
      * 实例需要绑定的Tag信息，默认为空。
      */
    TagList?: Array<Tag>;
    /**
      * 安全组ID。
      */
    SecurityGroupIds?: Array<string>;
}
/**
 * 描述一种规格的信息
 */
export interface SpecItemInfo {
    /**
      * 规格ID
      */
    SpecCode: string;
    /**
      * PostgreSQL的内核版本编号
      */
    Version: string;
    /**
      * 内核编号对应的完整版本名称
      */
    VersionName: string;
    /**
      * CPU核数
      */
    Cpu: number;
    /**
      * 内存大小，单位：MB
      */
    Memory: number;
    /**
      * 该规格所支持最大存储容量，单位：GB
      */
    MaxStorage: number;
    /**
      * 该规格所支持最小存储容量，单位：GB
      */
    MinStorage: number;
    /**
      * 该规格的预估QPS
      */
    Qps: number;
    /**
      * 该规格对应的计费ID
      */
    Pid: number;
    /**
      * 机器类型
      */
    Type: string;
}
/**
 * ModifyDBInstanceReadOnlyGroup返回参数结构体
 */
export interface ModifyDBInstanceReadOnlyGroupResponse {
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
 * OpenServerlessDBExtranetAccess请求参数结构体
 */
export interface OpenServerlessDBExtranetAccessRequest {
    /**
      * 实例的唯一标识符
      */
    DBInstanceId?: string;
    /**
      * 实例名称
      */
    DBInstanceName?: string;
}
/**
 * RenewInstance返回参数结构体
 */
export interface RenewInstanceResponse {
    /**
      * 订单名
      */
    DealName?: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DeleteServerlessDBInstance返回参数结构体
 */
export interface DeleteServerlessDBInstanceResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ModifyReadOnlyGroupConfig请求参数结构体
 */
export interface ModifyReadOnlyGroupConfigRequest {
    /**
      * 只读组ID
      */
    ReadOnlyGroupId: string;
    /**
      * 只读组名称
      */
    ReadOnlyGroupName?: string;
    /**
      * 延迟时间配置开关：0关、1开
      */
    ReplayLagEliminate?: number;
    /**
      * 延迟日志大小配置开关：0关、1开
      */
    ReplayLatencyEliminate?: number;
    /**
      * 延迟日志大小阈值，单位MB
      */
    MaxReplayLatency?: number;
    /**
      * 延迟时间大小阈值，单位ms
      */
    MaxReplayLag?: number;
    /**
      * 自动负载均衡开关：0关、1开
      */
    Rebalance?: number;
    /**
      * 延迟剔除最小保留实例数
      */
    MinDelayEliminateReserve?: number;
}
/**
 * AddDBInstanceToReadOnlyGroup请求参数结构体
 */
export interface AddDBInstanceToReadOnlyGroupRequest {
    /**
      * 实例ID
      */
    DBInstanceId: string;
    /**
      * 只读组ID
      */
    ReadOnlyGroupId: string;
}
/**
 * DescribeProductConfig请求参数结构体
 */
export interface DescribeProductConfigRequest {
    /**
      * 可用区名称
      */
    Zone?: string;
}
/**
 * InitDBInstances返回参数结构体
 */
export interface InitDBInstancesResponse {
    /**
      * 实例ID集合。
      */
    DBInstanceIdSet?: Array<string>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * RenewInstance请求参数结构体
 */
export interface RenewInstanceRequest {
    /**
      * 实例ID，形如postgres-6fego161
      */
    DBInstanceId: string;
    /**
      * 续费多少个月
      */
    Period: number;
    /**
      * 是否自动使用代金券,1是,0否，默认不使用
      */
    AutoVoucher?: number;
    /**
      * 代金券ID列表，目前仅支持指定一张代金券
      */
    VoucherIds?: Array<string>;
}
/**
 * RebalanceReadOnlyGroup请求参数结构体
 */
export interface RebalanceReadOnlyGroupRequest {
    /**
      * 只读组ID
      */
    ReadOnlyGroupId: string;
}
/**
 * DescribeRegions返回参数结构体
 */
export interface DescribeRegionsResponse {
    /**
      * 返回的结果数量。
      */
    TotalCount?: number;
    /**
      * 地域信息集合。
      */
    RegionSet?: Array<RegionInfo>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 描述实例的网络连接信息。
 */
export interface DBInstanceNetInfo {
    /**
      * DNS域名
      */
    Address: string;
    /**
      * IP地址
      */
    Ip: string;
    /**
      * 连接Port地址
      */
    Port: number;
    /**
      * 网络类型，1、inner（基础网络内网地址）；2、private（私有网络内网地址）；3、public（基础网络或私有网络的外网地址）；
      */
    NetType: string;
    /**
      * 网络连接状态
      */
    Status: string;
}
/**
 * 描述可用区的编码和状态信息
 */
export interface ZoneInfo {
    /**
      * 该可用区的英文名称
      */
    Zone: string;
    /**
      * 该可用区的中文名称
      */
    ZoneName: string;
    /**
      * 该可用区对应的数字编号
      */
    ZoneId: number;
    /**
      * 可用状态，UNAVAILABLE表示不可用，AVAILABLE表示可用
      */
    ZoneState: string;
    /**
      * 该可用区是否支持Ipv6
      */
    ZoneSupportIpv6: number;
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
      * 规格ID。该参数可以通过调用DescribeProductConfig接口的返回值中的SpecCode字段来获取。
      */
    SpecCode: string;
    /**
      * 存储容量大小，单位：GB。
      */
    Storage: number;
    /**
      * 实例数量。目前最大数量不超过100，如需一次性创建更多实例，请联系客服支持。
      */
    InstanceCount: number;
    /**
      * 购买时长，单位：月。目前只支持1,2,3,4,5,6,7,8,9,10,11,12,24,36这些值。
      */
    Period: number;
    /**
      * 计费ID。该参数可以通过调用DescribeProductConfig接口的返回值中的Pid字段来获取。
      */
    Pid: number;
    /**
      * 实例计费类型。目前只支持：PREPAID（预付费，即包年包月）。
      */
    InstanceChargeType?: string;
}
/**
 * 单条SlowQuery信息
 */
export interface NormalQueryItem {
    /**
      * 用户名
      */
    UserName: string;
    /**
      * 调用次数
      */
    Calls: number;
    /**
      * 粒度点
      */
    CallsGrids: Array<number>;
    /**
      * 花费总时间
      */
    CostTime: number;
    /**
      * 影响的行数
      */
    Rows: number;
    /**
      * 花费最小时间
      */
    MinCostTime: number;
    /**
      * 花费最大时间
      */
    MaxCostTime: number;
    /**
      * 最早一条慢SQL时间
      */
    FirstTime: string;
    /**
      * 最晚一条慢SQL时间
      */
    LastTime: string;
    /**
      * 读共享内存块数
      */
    SharedReadBlks: number;
    /**
      * 写共享内存块数
      */
    SharedWriteBlks: number;
    /**
      * 读io总耗时
      */
    ReadCostTime: number;
    /**
      * 写io总耗时
      */
    WriteCostTime: number;
    /**
      * 数据库名字
      */
    DatabaseName: string;
    /**
      * 脱敏后的慢SQL
      */
    NormalQuery: string;
}
/**
 * 实例绑定的标签信息，包含标签键TagKey和标签值TagValue
 */
export interface Tag {
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
 * DescribeDBInstanceAttribute请求参数结构体
 */
export interface DescribeDBInstanceAttributeRequest {
    /**
      * 实例ID
      */
    DBInstanceId: string;
}
/**
 * ModifyDBInstancesProject返回参数结构体
 */
export interface ModifyDBInstancesProjectResponse {
    /**
      * 转移项目成功的实例个数
      */
    Count?: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * serverless账号描述
 */
export interface ServerlessDBAccount {
    /**
      * 用户名
注意：此字段可能返回 null，表示取不到有效值。
      */
    DBUser: string;
    /**
      * 密码
注意：此字段可能返回 null，表示取不到有效值。
      */
    DBPassword: string;
    /**
      * 连接数限制
注意：此字段可能返回 null，表示取不到有效值。
      */
    DBConnLimit: number;
}
/**
 * ModifyDBInstanceReadOnlyGroup请求参数结构体
 */
export interface ModifyDBInstanceReadOnlyGroupRequest {
    /**
      * 实例ID
      */
    DBInstanceId: string;
    /**
      * 当前实例所在只读组ID
      */
    ReadOnlyGroupId: string;
    /**
      * 实例修改的目标只读组ID
      */
    NewReadOnlyGroupId: string;
}
/**
 * AddDBInstanceToReadOnlyGroup返回参数结构体
 */
export interface AddDBInstanceToReadOnlyGroupResponse {
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
 * CreateReadOnlyDBInstance返回参数结构体
 */
export interface CreateReadOnlyDBInstanceResponse {
    /**
      * 订单号列表。每个实例对应一个订单号
      */
    DealNames: Array<string>;
    /**
      * 冻结流水号
      */
    BillId: string;
    /**
      * 创建成功的实例ID集合，只在后付费情景下有返回值
      */
    DBInstanceIdSet: Array<string>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 慢SQL耗时分段分析
 */
export interface DurationAnalysis {
    /**
      * 慢SQL耗时，时段
      */
    TimeSegment: string;
    /**
      * 对应时段区间慢SQL 条数
      */
    Count: number;
}
/**
 * DescribeOrders返回参数结构体
 */
export interface DescribeOrdersResponse {
    /**
      * 订单数量
      */
    TotalCount?: number;
    /**
      * 订单数组
      */
    Deals?: Array<PgDeal>;
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
      * 原始价格，单位：分
      */
    OriginalPrice?: number;
    /**
      * 折后价格，单位：分
      */
    Price?: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ModifySwitchTimePeriod返回参数结构体
 */
export interface ModifySwitchTimePeriodResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DisIsolateDBInstances请求参数结构体
 */
export interface DisIsolateDBInstancesRequest {
    /**
      * 资源ID列表
      */
    DBInstanceIdSet: Array<string>;
    /**
      * 包年包月实例解隔离时购买时常 以月为单位
      */
    Period?: number;
    /**
      * 是否使用代金券：true-使用,false-不使用，默认不使用
      */
    AutoVoucher?: boolean;
    /**
      * 代金券id列表
      */
    VoucherIds?: Array<string>;
}
/**
 * serverless实例网络信息描述
 */
export interface ServerlessDBInstanceNetInfo {
    /**
      * 地址
注意：此字段可能返回 null，表示取不到有效值。
      */
    Address: string;
    /**
      * ip地址
注意：此字段可能返回 null，表示取不到有效值。
      */
    Ip: string;
    /**
      * 端口号
注意：此字段可能返回 null，表示取不到有效值。
      */
    Port: number;
    /**
      * 状态
注意：此字段可能返回 null，表示取不到有效值。
      */
    Status: string;
    /**
      * 网络类型
注意：此字段可能返回 null，表示取不到有效值。
      */
    NetType: string;
}
/**
 * DescribeDBInstances请求参数结构体
 */
export interface DescribeDBInstancesRequest {
    /**
      * 按照一个或者多个过滤条件进行查询，目前支持的过滤条件有：
db-instance-id：按照实例ID过滤，类型为string
db-instance-name：按照实例名过滤，类型为string
db-project-id：按照项目ID过滤，类型为integer
db-pay-mode：按照付费模式过滤，类型为string
db-tag-key：按照标签键过滤，类型为string
      */
    Filters?: Array<Filter>;
    /**
      * 每页显示数量，取值范围为1-100，默认为返回10条。
      */
    Limit?: number;
    /**
      * 排序指标，如实例名、创建时间等，支持DBInstanceId,CreateTime,Name,EndTime
      */
    OrderBy?: string;
    /**
      * 页码偏移量，从0开始。
      */
    Offset?: number;
    /**
      * 排序方式，包括升序：asc、降序：desc。
      */
    OrderByType?: string;
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
 * UpgradeDBInstance请求参数结构体
 */
export interface UpgradeDBInstanceRequest {
    /**
      * 升级后的实例内存大小，单位GB
      */
    Memory: number;
    /**
      * 升级后的实例磁盘大小，单位GB
      */
    Storage: number;
    /**
      * 实例ID，形如postgres-lnp6j617
      */
    DBInstanceId: string;
    /**
      * 是否自动使用代金券,1是,0否，默认不使用
      */
    AutoVoucher?: number;
    /**
      * 代金券ID列表，目前仅支持指定一张代金券
      */
    VoucherIds?: Array<string>;
    /**
      * 活动ID
      */
    ActivityId?: number;
    /**
      * 指定实例配置完成变更后的切换时间，默认为 立即切换，入参为 0 ：立即切换 。1：指定时间切换。
      */
    SwitchTag?: number;
    /**
      * 切换开始时间
      */
    SwitchStartTime?: string;
    /**
      * 切换截止时间
      */
    SwitchEndTime?: string;
}
/**
 * DescribeZones请求参数结构体
 */
export declare type DescribeZonesRequest = null;
/**
 * DescribeReadOnlyGroups返回参数结构体
 */
export interface DescribeReadOnlyGroupsResponse {
    /**
      * 只读组列表
      */
    ReadOnlyGroupList: Array<ReadOnlyGroup>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * SetAutoRenewFlag返回参数结构体
 */
export interface SetAutoRenewFlagResponse {
    /**
      * 设置成功的实例个数
      */
    Count?: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 描述某个地域下某个可用区的可售卖规格详细信息。
 */
export interface SpecInfo {
    /**
      * 地域英文编码，对应RegionSet的Region字段
      */
    Region: string;
    /**
      * 区域英文编码，对应ZoneSet的Zone字段
      */
    Zone: string;
    /**
      * 规格详细信息列表
      */
    SpecItemInfoList: Array<SpecItemInfo>;
}
/**
 * ResetAccountPassword返回参数结构体
 */
export interface ResetAccountPasswordResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CloseServerlessDBExtranetAccess请求参数结构体
 */
export interface CloseServerlessDBExtranetAccessRequest {
    /**
      * 实例唯一标识符
      */
    DBInstanceId?: string;
    /**
      * 实例名称
      */
    DBInstanceName?: string;
}
/**
 * 只读组信息
 */
export interface ReadOnlyGroup {
    /**
      * 只读组标识
注意：此字段可能返回 null，表示取不到有效值。
      */
    ReadOnlyGroupId: string;
    /**
      * 只读组名字
注意：此字段可能返回 null，表示取不到有效值。
      */
    ReadOnlyGroupName: string;
    /**
      * 项目id
注意：此字段可能返回 null，表示取不到有效值。
      */
    ProjectId: number;
    /**
      * 主实例id
注意：此字段可能返回 null，表示取不到有效值。
      */
    MasterDBInstanceId: string;
    /**
      * 最小保留实例数
注意：此字段可能返回 null，表示取不到有效值。
      */
    MinDelayEliminateReserve: number;
    /**
      * 延迟空间大小阈值
      */
    MaxReplayLatency: number;
    /**
      * 延迟大小开关
      */
    ReplayLatencyEliminate: number;
    /**
      * 延迟时间大小阈值
      */
    MaxReplayLag: number;
    /**
      * 延迟时间开关
      */
    ReplayLagEliminate: number;
    /**
      * 虚拟网络id
      */
    VpcId: string;
    /**
      * 子网id
注意：此字段可能返回 null，表示取不到有效值。
      */
    SubnetId: string;
    /**
      * 地域id
      */
    Region: string;
    /**
      * 地区id
      */
    Zone: string;
    /**
      * 状态
      */
    Status: string;
    /**
      * 实例详细信息
      */
    ReadOnlyDBInstanceList: Array<DBInstance>;
    /**
      * 自动负载均衡开关
      */
    Rebalance: number;
    /**
      * 网络信息
      */
    DBInstanceNetInfo: Array<DBInstanceNetInfo>;
}
/**
 * 订单详情
 */
export interface PgDeal {
    /**
      * 订单名
      */
    DealName: string;
    /**
      * 所属用户
      */
    OwnerUin: string;
    /**
      * 订单涉及多少个实例
      */
    Count: number;
    /**
      * 付费模式。1-预付费；0-后付费
      */
    PayMode: number;
    /**
      * 异步任务流程ID
      */
    FlowId: number;
    /**
      * 实例ID数组
      */
    DBInstanceIdSet: Array<string>;
}
/**
 * DescribeDBErrlogs请求参数结构体
 */
export interface DescribeDBErrlogsRequest {
    /**
      * 实例ID，形如postgres-5bq3wfjd
      */
    DBInstanceId: string;
    /**
      * 查询起始时间，形如2018-01-01 00:00:00，起始时间不得小于7天以前
      */
    StartTime: string;
    /**
      * 查询结束时间，形如2018-01-01 00:00:00
      */
    EndTime: string;
    /**
      * 数据库名字
      */
    DatabaseName?: string;
    /**
      * 搜索关键字
      */
    SearchKeys?: Array<string>;
    /**
      * 分页返回，每页返回的最大数量。取值为1-100
      */
    Limit?: number;
    /**
      * 分页返回，返回第几页的数据，从第0页开始计数
      */
    Offset?: number;
}
/**
 * DestroyDBInstance请求参数结构体
 */
export interface DestroyDBInstanceRequest {
    /**
      * 待下线实例ID
      */
    DBInstanceId: string;
}
/**
 * CreateInstances返回参数结构体
 */
export interface CreateInstancesResponse {
    /**
      * 订单号列表。每个实例对应一个订单号。
      */
    DealNames: Array<string>;
    /**
      * 冻结流水号。
      */
    BillId: string;
    /**
      * 创建成功的实例ID集合，只在后付费情景下有返回值。
      */
    DBInstanceIdSet: Array<string>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 慢查询分析接口返回的分析详情，按照参数抽象之后进行分类
 */
export interface AnalysisItems {
    /**
      * 慢SQL查询的数据库名
      */
    DatabaseName: string;
    /**
      * 慢SQL执行的用户名
      */
    UserName: string;
    /**
      * 抽象参数之后的慢SQL
      */
    NormalQuery: string;
    /**
      * 慢SQL执行的客户端地址
      */
    ClientAddr: string;
    /**
      * 在选定时间范围内慢SQL语句执行的次数
      */
    CallNum: number;
    /**
      * 在选定时间范围内，慢SQL语句执行的次数占所有慢SQL的比例（小数返回）
      */
    CallPercent: number;
    /**
      * 在选定时间范围内，慢SQL执行的总时间
      */
    CostTime: number;
    /**
      * 在选定时间范围内，慢SQL语句执行的总时间占所有慢SQL的比例（小数返回）
      */
    CostPercent: number;
    /**
      * 在选定时间范围内，慢SQL语句执行的耗时最短的时间（单位：ms）
      */
    MinCostTime: number;
    /**
      * 在选定时间范围内，慢SQL语句执行的耗时最长的时间（单位：ms）
      */
    MaxCostTime: number;
    /**
      * 在选定时间范围内，慢SQL语句执行的耗时平均时间（单位：ms）
      */
    AvgCostTime: number;
    /**
      * 在选定时间范围内，慢SQL第一条开始执行的时间戳
      */
    FirstTime: string;
    /**
      * 在选定时间范围内，慢SQL最后一条开始执行的时间戳
      */
    LastTime: string;
}
/**
 * 数据库Xlog信息
 */
export interface Xlog {
    /**
      * 备份文件唯一标识
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
      * 内网下载地址
      */
    InternalAddr: string;
    /**
      * 外网下载地址
      */
    ExternalAddr: string;
    /**
      * 备份文件大小
      */
    Size: number;
}
/**
 * DescribeServerlessDBInstances请求参数结构体
 */
export interface DescribeServerlessDBInstancesRequest {
    /**
      * 查询条件
      */
    Filter?: Array<Filter>;
    /**
      * 查询个数
      */
    Limit?: number;
    /**
      * 偏移量
      */
    Offset?: number;
    /**
      * 排序指标，目前支持实例创建时间CreateTime
      */
    OrderBy?: string;
    /**
      * 排序方式，包括升序、降序
      */
    OrderByType?: string;
}
/**
 * DescribeDBBackups返回参数结构体
 */
export interface DescribeDBBackupsResponse {
    /**
      * 返回备份列表中备份文件的个数
      */
    TotalCount?: number;
    /**
      * 备份列表
      */
    BackupList?: Array<DBBackup>;
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
 * DescribeSlowQueryList返回参数结构体
 */
export interface DescribeSlowQueryListResponse {
    /**
      * 选定时间范围内慢SQL总条数。
      */
    TotalCount: number;
    /**
      * 指定时间范围内，慢SQL耗时分段分析。
注意：此字段可能返回 null，表示取不到有效值。
      */
    DurationAnalysis: Array<DurationAnalysis>;
    /**
      * 指定时间范围内 慢SQL流水。
注意：此字段可能返回 null，表示取不到有效值。
      */
    RawSlowQueryList: Array<RawSlowQuery>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * serverless实例描述
 */
export interface ServerlessDBInstance {
    /**
      * 实例id，唯一标识符
注意：此字段可能返回 null，表示取不到有效值。
      */
    DBInstanceId?: string;
    /**
      * 实例名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    DBInstanceName?: string;
    /**
      * 实例状态
注意：此字段可能返回 null，表示取不到有效值。
      */
    DBInstanceStatus?: string;
    /**
      * 地域
注意：此字段可能返回 null，表示取不到有效值。
      */
    Region?: string;
    /**
      * 可用区
注意：此字段可能返回 null，表示取不到有效值。
      */
    Zone?: string;
    /**
      * 项目id
注意：此字段可能返回 null，表示取不到有效值。
      */
    ProjectId?: number;
    /**
      * 私有网络Id
注意：此字段可能返回 null，表示取不到有效值。
      */
    VpcId?: string;
    /**
      * 子网id
注意：此字段可能返回 null，表示取不到有效值。
      */
    SubnetId?: string;
    /**
      * 字符集
注意：此字段可能返回 null，表示取不到有效值。
      */
    DBCharset?: string;
    /**
      * 数据库版本
注意：此字段可能返回 null，表示取不到有效值。
      */
    DBVersion?: string;
    /**
      * 创建时间
注意：此字段可能返回 null，表示取不到有效值。
      */
    CreateTime?: string;
    /**
      * 实例网络信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    DBInstanceNetInfo?: Array<ServerlessDBInstanceNetInfo>;
    /**
      * 实例账户信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    DBAccountSet?: Array<ServerlessDBAccount>;
    /**
      * 实例下的db信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    DBDatabaseList?: Array<string>;
    /**
      * 实例绑定的标签数组
注意：此字段可能返回 null，表示取不到有效值。
      */
    TagList?: Array<Tag>;
}
/**
 * CreateReadOnlyGroup请求参数结构体
 */
export interface CreateReadOnlyGroupRequest {
    /**
      * 主实例ID
      */
    MasterDBInstanceId: string;
    /**
      * 只读组名称
      */
    Name: string;
    /**
      * 项目ID
      */
    ProjectId?: number;
    /**
      * 私有网络ID
      */
    VpcId?: string;
    /**
      * 子网ID
      */
    SubnetId?: string;
    /**
      * 延迟时间大小开关：0关、1开
      */
    ReplayLagEliminate?: number;
    /**
      * 延迟空间大小开关： 0关、1开
      */
    ReplayLatencyEliminate?: number;
    /**
      * 延迟时间大小阈值，单位ms
      */
    MaxReplayLag?: number;
    /**
      * 延迟空间大小阈值，单位MB
      */
    MaxReplayLatency?: number;
    /**
      * 延迟剔除最小保留实例数
      */
    MinDelayEliminateReserve?: number;
    /**
      * 安全组id
      */
    SecurityGroupIds?: Array<string>;
}
/**
 * CloseServerlessDBExtranetAccess返回参数结构体
 */
export interface CloseServerlessDBExtranetAccessResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * RestartDBInstance请求参数结构体
 */
export interface RestartDBInstanceRequest {
    /**
      * 实例ID，形如postgres-6r233v55
      */
    DBInstanceId: string;
}
/**
 * 慢SQL 统计分析接口返回详情
 */
export interface Detail {
    /**
      * 输入时间范围内所有慢sql执行的总时间，单位毫秒（ms）
      */
    TotalTime: number;
    /**
      * 输入时间范围内所有慢sql总条数
      */
    TotalCallNum: number;
    /**
      * 慢SQL统计分析列表
注意：此字段可能返回 null，表示取不到有效值。
      */
    AnalysisItems: Array<AnalysisItems>;
}
/**
 * IsolateDBInstances返回参数结构体
 */
export interface IsolateDBInstancesResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * OpenDBExtranetAccess返回参数结构体
 */
export interface OpenDBExtranetAccessResponse {
    /**
      * 异步任务流程ID
      */
    FlowId?: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * InquiryPriceUpgradeDBInstance请求参数结构体
 */
export interface InquiryPriceUpgradeDBInstanceRequest {
    /**
      * 实例的磁盘大小，单位GB
      */
    Storage: number;
    /**
      * 实例的内存大小，单位GB
      */
    Memory: number;
    /**
      * 实例ID，形如postgres-hez4fh0v
      */
    DBInstanceId: string;
    /**
      * 实例计费类型，预付费或者后付费。PREPAID-预付费。目前只支持预付费。
      */
    InstanceChargeType?: string;
}
/**
 * RebalanceReadOnlyGroup返回参数结构体
 */
export interface RebalanceReadOnlyGroupResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ModifyDBInstanceName请求参数结构体
 */
export interface ModifyDBInstanceNameRequest {
    /**
      * 数据库实例ID，形如postgres-6fego161
      */
    DBInstanceId: string;
    /**
      * 新的数据库实例名字
      */
    InstanceName: string;
}
/**
 * InquiryPriceRenewDBInstance返回参数结构体
 */
export interface InquiryPriceRenewDBInstanceResponse {
    /**
      * 总费用，打折前的。比如24650表示246.5元
      */
    OriginalPrice?: number;
    /**
      * 实际需要付款金额。比如24650表示246.5元
      */
    Price?: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeSlowQueryAnalysis请求参数结构体
 */
export interface DescribeSlowQueryAnalysisRequest {
    /**
      * 实例ID。
      */
    DBInstanceId: string;
    /**
      * 查询起始时间戳，格式 “YYYY-MM-DD HH:mm:ss” ，日志保留时间默认为7天，起始时间不能超出保留时间范围。
      */
    StartTime: string;
    /**
      * 查询j结束时间戳，格式 “YYYY-MM-DD HH:mm:ss”。
      */
    EndTime: string;
    /**
      * 根据数据库名进行筛选，可以为空。
      */
    DatabaseName?: string;
    /**
      * 排序维度。 可选参数，取值范围[CallNum,CostTime,AvgCostTime]。
      */
    OrderBy?: string;
    /**
      * 排序类型。升序asc、降序desc。
      */
    OrderByType?: string;
    /**
      * 分页大小。取值范围[1,100]。
      */
    Limit?: number;
    /**
      * 分页偏移。取值范围[0,INF)。
      */
    Offset?: number;
}
/**
 * 错误日志详情
 */
export interface ErrLogDetail {
    /**
      * 用户名
      */
    UserName: string;
    /**
      * 数据库名字
      */
    Database: string;
    /**
      * 错误发生时间
      */
    ErrTime: string;
    /**
      * 错误消息
      */
    ErrMsg: string;
}
/**
 * DescribeServerlessDBInstances返回参数结构体
 */
export interface DescribeServerlessDBInstancesResponse {
    /**
      * 查询结果数
      */
    TotalCount?: number;
    /**
      * 查询结果
注意：此字段可能返回 null，表示取不到有效值。
      */
    DBInstanceSet?: Array<ServerlessDBInstance>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * IsolateDBInstances请求参数结构体
 */
export interface IsolateDBInstancesRequest {
    /**
      * 实例ID集合
      */
    DBInstanceIdSet: Array<string>;
}
/**
 * InitDBInstances请求参数结构体
 */
export interface InitDBInstancesRequest {
    /**
      * 实例ID集合。
      */
    DBInstanceIdSet: Array<string>;
    /**
      * 实例根账号用户名。
      */
    AdminName: string;
    /**
      * 实例根账号用户名对应的密码。
      */
    AdminPassword: string;
    /**
      * 实例字符集，目前只支持：UTF8、LATIN1。
      */
    Charset: string;
}
/**
 * 描述实例的详细信息
 */
export interface DBInstance {
    /**
      * 实例所属地域，如: ap-guangzhou，对应RegionSet的Region字段
      */
    Region: string;
    /**
      * 实例所属可用区， 如：ap-guangzhou-3，对应ZoneSet的Zone字段
      */
    Zone: string;
    /**
      * 项目ID
      */
    ProjectId: number;
    /**
      * 私有网络ID
      */
    VpcId: string;
    /**
      * 子网ID
      */
    SubnetId: string;
    /**
      * 实例ID
      */
    DBInstanceId: string;
    /**
      * 实例名称
      */
    DBInstanceName: string;
    /**
      * 实例状态，分别为：applying（申请中）、init(待初始化)、initing(初始化中)、running(运行中)、limited run（受限运行）、isolated（已隔离）、recycling（回收中）、recycled（已回收）、job running（任务执行中）、offline（下线）、migrating（迁移中）、expanding（扩容中）、waitSwitch（等待切换）、switching（切换中）、readonly（只读）、restarting（重启中）、
      */
    DBInstanceStatus: string;
    /**
      * 实例分配的内存大小，单位：GB
      */
    DBInstanceMemory: number;
    /**
      * 实例分配的存储空间大小，单位：GB
      */
    DBInstanceStorage: number;
    /**
      * 实例分配的CPU数量，单位：个
      */
    DBInstanceCpu: number;
    /**
      * 售卖规格ID
      */
    DBInstanceClass: string;
    /**
      * 实例类型，类型有：1、primary（主实例）；2、readonly（只读实例）；3、guard（灾备实例）；4、temp（临时实例）
      */
    DBInstanceType: string;
    /**
      * 实例版本，目前只支持standard（双机高可用版, 一主一从）
      */
    DBInstanceVersion: string;
    /**
      * 实例DB字符集
      */
    DBCharset: string;
    /**
      * PostgreSQL内核版本
      */
    DBVersion: string;
    /**
      * 实例创建时间
      */
    CreateTime: string;
    /**
      * 实例执行最后一次更新的时间
      */
    UpdateTime: string;
    /**
      * 实例到期时间
      */
    ExpireTime: string;
    /**
      * 实例隔离时间
      */
    IsolatedTime: string;
    /**
      * 计费模式，1、prepaid（包年包月,预付费）；2、postpaid（按量计费，后付费）
      */
    PayType: string;
    /**
      * 是否自动续费，1：自动续费，0：不自动续费
      */
    AutoRenew: number;
    /**
      * 实例网络连接信息
      */
    DBInstanceNetInfo: Array<DBInstanceNetInfo>;
    /**
      * 机器类型
      */
    Type: string;
    /**
      * 用户的AppId
      */
    AppId: number;
    /**
      * 实例的Uid
      */
    Uid: number;
    /**
      * 实例是否支持Ipv6，1：支持，0：不支持
      */
    SupportIpv6: number;
    /**
      * 实例绑定的标签信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    TagList: Array<Tag>;
    /**
      * 主实例信息，仅在实例为只读实例时返回
注意：此字段可能返回 null，表示取不到有效值。
      */
    MasterDBInstanceId: string;
    /**
      * 只读实例数量
注意：此字段可能返回 null，表示取不到有效值。
      */
    ReadOnlyInstanceNum: number;
    /**
      * 只读实例在只读组中的状态
注意：此字段可能返回 null，表示取不到有效值。
      */
    StatusInReadonlyGroup: string;
    /**
      * 下线时间
注意：此字段可能返回 null，表示取不到有效值。
      */
    OfflineTime: string;
}
/**
 * DescribeProductConfig返回参数结构体
 */
export interface DescribeProductConfigResponse {
    /**
      * 售卖规格列表。
      */
    SpecInfoList?: Array<SpecInfo>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DeleteReadOnlyGroup请求参数结构体
 */
export interface DeleteReadOnlyGroupRequest {
    /**
      * 待删除只读组ID
      */
    ReadOnlyGroupId: string;
}
/**
 * DescribeDBBackups请求参数结构体
 */
export interface DescribeDBBackupsRequest {
    /**
      * 实例ID，形如postgres-4wdeb0zv。
      */
    DBInstanceId: string;
    /**
      * 备份方式（1-全量）。目前只支持全量，取值为1。
      */
    Type: number;
    /**
      * 查询开始时间，形如2018-06-10 17:06:38，起始时间不得小于7天以前
      */
    StartTime: string;
    /**
      * 查询结束时间，形如2018-06-10 17:06:38
      */
    EndTime: string;
    /**
      * 备份列表分页返回，每页返回数量，默认为 20，最小为1，最大值为 100。（当该参数不传或者传0时按默认值处理）
      */
    Limit?: number;
    /**
      * 返回结果中的第几页，从第0页开始。默认为0。
      */
    Offset?: number;
}
/**
 * 描述键值对过滤器，用于条件过滤查询。例如过滤ID、名称等
* 若存在多个Filter时，Filter间的关系为逻辑与（AND）关系。
* 若同一个Filter存在多个Values，同一Filter下Values间的关系为逻辑或（OR）关系。
 */
export interface Filter {
    /**
      * 过滤键的名称。
      */
    Name?: string;
    /**
      * 一个或者多个过滤值。
      */
    Values?: Array<string>;
}
/**
 * DisIsolateDBInstances返回参数结构体
 */
export interface DisIsolateDBInstancesResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * OpenDBExtranetAccess请求参数结构体
 */
export interface OpenDBExtranetAccessRequest {
    /**
      * 实例ID，形如postgres-hez4fh0v
      */
    DBInstanceId: string;
    /**
      * 是否开通Ipv6外网，1：是，0：否
      */
    IsIpv6?: number;
}
/**
 * 慢查询详情
 */
export interface SlowlogDetail {
    /**
      * 花费总时间
      */
    TotalTime: number;
    /**
      * 调用总次数
      */
    TotalCalls: number;
    /**
      * 脱敏后的慢SQL列表
      */
    NormalQueries: Array<NormalQueryItem>;
}
/**
 * RemoveDBInstanceFromReadOnlyGroup请求参数结构体
 */
export interface RemoveDBInstanceFromReadOnlyGroupRequest {
    /**
      * 实例ID
      */
    DBInstanceId: string;
    /**
      * 只读组ID
      */
    ReadOnlyGroupId: string;
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
 * CloseDBExtranetAccess返回参数结构体
 */
export interface CloseDBExtranetAccessResponse {
    /**
      * 异步任务流程ID
      */
    FlowId?: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CreateReadOnlyDBInstance请求参数结构体
 */
export interface CreateReadOnlyDBInstanceRequest {
    /**
      * 售卖规格ID。该参数可以通过调用DescribeProductConfig的返回值中的SpecCode字段来获取。
      */
    SpecCode: string;
    /**
      * PostgreSQL内核版本，目前强制和主实例保持一致
      */
    DBVersion: string;
    /**
      * 实例容量大小，单位：GB。
      */
    Storage: number;
    /**
      * 一次性购买的实例数量。取值1-100
      */
    InstanceCount: number;
    /**
      * 购买时长，单位：月。目前只支持1,2,3,4,5,6,7,8,9,10,11,12,24,36这些值，按量计费模式下该参数传1。
      */
    Period: number;
    /**
      * 只读实例的主实例ID
      */
    MasterDBInstanceId: string;
    /**
      * 可用区ID。该参数可以通过调用 DescribeZones 接口的返回值中的Zone字段来获取。
      */
    Zone: string;
    /**
      * 项目ID。
      */
    ProjectId?: number;
    /**
      * 实例计费类型。目前支持：PREPAID（预付费，即包年包月），POSTPAID_BY_HOUR（后付费，即按量计费）。
      */
    InstanceChargeType?: string;
    /**
      * 是否自动使用代金券。1（是），0（否），默认不使用。
      */
    AutoVoucher?: number;
    /**
      * 代金券ID列表，目前仅支持指定一张代金券。
      */
    VoucherIds?: Array<string>;
    /**
      * 续费标记：0-正常续费（默认）；1-自动续费；
      */
    AutoRenewFlag?: number;
    /**
      * 私有网络ID。
      */
    VpcId?: string;
    /**
      * 私有网络子网ID。
      */
    SubnetId?: string;
    /**
      * 优惠活动ID
      */
    ActivityId?: number;
    /**
      * 实例名(后续支持)
      */
    Name?: string;
    /**
      * 是否需要支持Ipv6，1：是，0：否
      */
    NeedSupportIpv6?: number;
    /**
      * 只读组ID。
      */
    ReadOnlyGroupId?: string;
    /**
      * 实例需要绑定的Tag信息，默认为空
      */
    TagList?: Tag;
    /**
      * 安全组id
      */
    SecurityGroupIds?: Array<string>;
}
/**
 * DescribeZones返回参数结构体
 */
export interface DescribeZonesResponse {
    /**
      * 返回的结果数量。
      */
    TotalCount?: number;
    /**
      * 可用区信息集合。
      */
    ZoneSet?: Array<ZoneInfo>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CreateServerlessDBInstance返回参数结构体
 */
export interface CreateServerlessDBInstanceResponse {
    /**
      * 实例ID，该ID全局唯一，如：postgres-xxxxx
      */
    DBInstanceId?: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeDatabases返回参数结构体
 */
export interface DescribeDatabasesResponse {
    /**
      * 数据库信息
      */
    Items?: Array<string>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeOrders请求参数结构体
 */
export interface DescribeOrdersRequest {
    /**
      * 订单名集合
      */
    DealNames: Array<string>;
}
/**
 * ModifyAccountRemark请求参数结构体
 */
export interface ModifyAccountRemarkRequest {
    /**
      * 实例ID，形如postgres-4wdeb0zv
      */
    DBInstanceId: string;
    /**
      * 实例用户名
      */
    UserName: string;
    /**
      * 用户UserName对应的新备注
      */
    Remark: string;
}
/**
 * CloseDBExtranetAccess请求参数结构体
 */
export interface CloseDBExtranetAccessRequest {
    /**
      * 实例ID，形如postgres-6r233v55
      */
    DBInstanceId: string;
    /**
      * 是否关闭Ipv6外网，1：是，0：否
      */
    IsIpv6?: number;
}
/**
 * CreateServerlessDBInstance请求参数结构体
 */
export interface CreateServerlessDBInstanceRequest {
    /**
      * 可用区ID。公测阶段仅支持ap-shanghai-2、ap-beijing-1,ap-guangzhou-2.
      */
    Zone: string;
    /**
      * DB实例名称，同一个账号下该值必须唯一。
      */
    DBInstanceName: string;
    /**
      * PostgreSQL内核版本，目前只支持：10.4。
      */
    DBVersion: string;
    /**
      * PostgreSQL数据库字符集，目前支持UTF8。
      */
    DBCharset: string;
    /**
      * 项目ID。
      */
    ProjectId?: number;
    /**
      * 私有网络ID。
      */
    VpcId?: string;
    /**
      * 私有网络子网ID。
      */
    SubnetId?: string;
    /**
      * 实例需要绑定的标签数组信息
      */
    TagList?: Array<Tag>;
}
/**
 * InquiryPriceRenewDBInstance请求参数结构体
 */
export interface InquiryPriceRenewDBInstanceRequest {
    /**
      * 实例ID
      */
    DBInstanceId: string;
    /**
      * 续费周期，按月计算，最大不超过48
      */
    Period: number;
}
/**
 * CreateReadOnlyGroup返回参数结构体
 */
export interface CreateReadOnlyGroupResponse {
    /**
      * 只读组ID
      */
    ReadOnlyGroupId: string;
    /**
      * 流程ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    FlowId: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DeleteServerlessDBInstance请求参数结构体
 */
export interface DeleteServerlessDBInstanceRequest {
    /**
      * DB实例名称，实例名和实例ID必须至少传一个，如果同时存在，将只以实例ID为准。
      */
    DBInstanceName?: string;
    /**
      * DB实例ID，实例名和实例ID必须至少传一个，如果同时存在，将只以实例ID为准。
      */
    DBInstanceId?: string;
}
/**
 * ModifyReadOnlyGroupConfig返回参数结构体
 */
export interface ModifyReadOnlyGroupConfigResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 账户信息
 */
export interface AccountInfo {
    /**
      * 实例ID，形如postgres-lnp6j617
      */
    DBInstanceId: string;
    /**
      * 帐号
      */
    UserName: string;
    /**
      * 帐号备注
      */
    Remark: string;
    /**
      * 帐号状态。 1-创建中，2-正常，3-修改中，4-密码重置中，-1-删除中
      */
    Status: number;
    /**
      * 帐号创建时间
      */
    CreateTime: string;
    /**
      * 帐号最后一次更新时间
      */
    UpdateTime: string;
}
/**
 * 数据库备份信息
 */
export interface DBBackup {
    /**
      * 备份文件唯一标识
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
      * 文件大小(K)
      */
    Size: number;
    /**
      * 策略（0-实例备份；1-多库备份）
      */
    Strategy: number;
    /**
      * 类型（0-定时）
      */
    Way: number;
    /**
      * 备份方式（1-完整）
      */
    Type: number;
    /**
      * 状态（1-创建中；2-成功；3-失败）
      */
    Status: number;
    /**
      * DB列表
      */
    DbList: Array<string>;
    /**
      * 内网下载地址
      */
    InternalAddr: string;
    /**
      * 外网下载地址
      */
    ExternalAddr: string;
}
/**
 * DescribeDBErrlogs返回参数结构体
 */
export interface DescribeDBErrlogsResponse {
    /**
      * 本次调用返回了多少条数据
      */
    TotalCount: number;
    /**
      * 错误日志列表
      */
    Details: Array<ErrLogDetail>;
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
      * 总费用，打折前的
      */
    OriginalPrice?: number;
    /**
      * 实际需要付款金额
      */
    Price?: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ModifySwitchTimePeriod请求参数结构体
 */
export interface ModifySwitchTimePeriodRequest {
    /**
      * 处于等待切换状态中的实例ID
      */
    DBInstanceId: string;
    /**
      * 入参取值为 0 ，代表立即切换。
      */
    SwitchTag: number;
}
/**
 * DescribeSlowQueryList请求参数结构体
 */
export interface DescribeSlowQueryListRequest {
    /**
      * 实例ID。
      */
    DBInstanceId: string;
    /**
      * 查询起始时间戳，格式 “YYYY-MM-DD HH:mm:ss” ，日志保留时间默认为7天，起始时间不能超出保留时间范围。
      */
    StartTime: string;
    /**
      * 查询j结束时间戳，格式 “YYYY-MM-DD HH:mm:ss”。
      */
    EndTime: string;
    /**
      * 根据数据库名进行筛选，可以为空。
      */
    DatabaseName?: string;
    /**
      * 排序类型。升序asc、降序desc。默认为desc。
      */
    OrderByType?: string;
    /**
      * 排序维度。 可选参数，取值范围[SessionStartTime,Duration]，默认为SessionStartTime。
      */
    OrderBy?: string;
    /**
      * 分页大小。取值范围[1,100],默认为20。
      */
    Limit?: number;
    /**
      * 分页偏移。取值范围[0,INF)，默认为0。
      */
    Offset?: number;
}
/**
 * 描述地域的编码和状态等信息
 */
export interface RegionInfo {
    /**
      * 该地域对应的英文名称
      */
    Region: string;
    /**
      * 该地域对应的中文名称
      */
    RegionName: string;
    /**
      * 该地域对应的数字编号
      */
    RegionId: number;
    /**
      * 可用状态，UNAVAILABLE表示不可用，AVAILABLE表示可用
      */
    RegionState: string;
    /**
      * 该地域是否支持国际站售卖，0：不支持，1：支持
注意：此字段可能返回 null，表示取不到有效值。
      */
    SupportInternational: number;
}
/**
 * RestartDBInstance返回参数结构体
 */
export interface RestartDBInstanceResponse {
    /**
      * 异步流程ID
      */
    FlowId?: number;
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
      * 查询到的实例数量。
      */
    TotalCount: number;
    /**
      * 实例详细信息集合。
      */
    DBInstanceSet: Array<DBInstance>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * RemoveDBInstanceFromReadOnlyGroup返回参数结构体
 */
export interface RemoveDBInstanceFromReadOnlyGroupResponse {
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
 * ResetAccountPassword请求参数结构体
 */
export interface ResetAccountPasswordRequest {
    /**
      * 实例ID，形如postgres-4wdeb0zv
      */
    DBInstanceId: string;
    /**
      * 实例账户名
      */
    UserName: string;
    /**
      * UserName账户对应的新密码
      */
    Password: string;
}
/**
 * DescribeSlowQueryAnalysis返回参数结构体
 */
export interface DescribeSlowQueryAnalysisResponse {
    /**
      * 查询总条数。
      */
    TotalCount: number;
    /**
      * 慢SQL统计分析接口返回详情。
      */
    Detail: Detail;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 慢SQL查询接口返回 慢SQL列表详情
 */
export interface RawSlowQuery {
    /**
      * 慢SQL 语句
      */
    RawQuery: string;
    /**
      * 慢SQL 查询的数据库
      */
    DatabaseName: string;
    /**
      * 慢SQL执行 耗时
      */
    Duration: number;
    /**
      * 执行慢SQL的客户端
      */
    ClientAddr: string;
    /**
      * 执行慢SQL的用户名
      */
    UserName: string;
    /**
      * 慢SQL执行的开始时间
      */
    SessionStartTime: string;
}
/**
 * DescribeReadOnlyGroups请求参数结构体
 */
export interface DescribeReadOnlyGroupsRequest {
    /**
      * 过滤条件，必须传入主实例ID进行过滤，否则返回值将为空，过滤参数为：db-master-instance-id
      */
    Filters?: Array<Filter>;
    /**
      * 查询每一页的条数，默认为10
      */
    PageSize?: number;
    /**
      * 查询的页码，默认为1
      */
    PageNumber?: number;
    /**
      * 查询排序依据，目前支持:ROGroupId,CreateTime,Name
      */
    OrderBy?: string;
    /**
      * 查询排序依据类型，目前支持:desc,asc
      */
    OrderByType?: string;
}
/**
 * DescribeAccounts返回参数结构体
 */
export interface DescribeAccountsResponse {
    /**
      * 本次调用接口共返回了多少条数据。
      */
    TotalCount?: number;
    /**
      * 帐号列表详细信息。
      */
    Details?: Array<AccountInfo>;
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
      * 交易名字。
      */
    DealName: string;
    /**
      * 冻结流水号
      */
    BillId: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ModifyDBInstancesProject请求参数结构体
 */
export interface ModifyDBInstancesProjectRequest {
    /**
      * postgresql实例ID数组
      */
    DBInstanceIdSet: Array<string>;
    /**
      * postgresql实例所属新项目的ID
      */
    ProjectId: string;
}
/**
 * DescribeDBSlowlogs请求参数结构体
 */
export interface DescribeDBSlowlogsRequest {
    /**
      * 实例ID，形如postgres-lnp6j617
      */
    DBInstanceId: string;
    /**
      * 查询起始时间，形如2018-06-10 17:06:38，起始时间不得小于7天以前
      */
    StartTime: string;
    /**
      * 查询结束时间，形如2018-06-10 17:06:38
      */
    EndTime: string;
    /**
      * 数据库名字
      */
    DatabaseName?: string;
    /**
      * 按照何种指标排序，取值为sum_calls或者sum_cost_time。sum_calls-总调用次数；sum_cost_time-总的花费时间
      */
    OrderBy?: string;
    /**
      * 排序规则。desc-降序；asc-升序
      */
    OrderByType?: string;
    /**
      * 分页返回结果，每页最大返回数量，取值为1-100，默认20
      */
    Limit?: number;
    /**
      * 分页返回结果，返回结果的第几页，从0开始计数
      */
    Offset?: number;
}
/**
 * DestroyDBInstance返回参数结构体
 */
export interface DestroyDBInstanceResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeDBInstanceAttribute返回参数结构体
 */
export interface DescribeDBInstanceAttributeResponse {
    /**
      * 实例详细信息。
      */
    DBInstance?: DBInstance;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * OpenServerlessDBExtranetAccess返回参数结构体
 */
export interface OpenServerlessDBExtranetAccessResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeDBXlogs返回参数结构体
 */
export interface DescribeDBXlogsResponse {
    /**
      * 表示此次返回结果有多少条数据。
      */
    TotalCount?: number;
    /**
      * Xlog列表
      */
    XlogList?: Array<Xlog>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeDBSlowlogs返回参数结构体
 */
export interface DescribeDBSlowlogsResponse {
    /**
      * 本次返回多少条数据
      */
    TotalCount: number;
    /**
      * 慢查询日志详情
      */
    Detail: SlowlogDetail;
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
      * 订单号列表。每个实例对应一个订单号。
      */
    DealNames: Array<string>;
    /**
      * 冻结流水号
      */
    BillId: string;
    /**
      * 创建成功的实例ID集合，只在后付费情景下有返回值
      */
    DBInstanceIdSet: Array<string>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
