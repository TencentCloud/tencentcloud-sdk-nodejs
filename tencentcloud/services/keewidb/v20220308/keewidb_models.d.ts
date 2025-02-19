/**
 * ModifyInstanceParams返回参数结构体
 */
export interface ModifyInstanceParamsResponse {
    /**
     * 修改是否成功。<ul><li>true：修改成功。</li><li>false：修改失败。</li></ul>
     */
    Changed: boolean;
    /**
     * 任务 ID。
     */
    TaskId: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ModifyAutoBackupConfig返回参数结构体
 */
export interface ModifyAutoBackupConfigResponse {
    /**
     * 增量备份文件保存天数。
     */
    BackupStorageDays: number;
    /**
     * 全量备份文件保存天数。
     */
    BinlogStorageDays: number;
    /**
     * 备份时间段。
     */
    TimePeriod: string;
    /**
     * 备份周期。Monday，Tuesday，Wednesday，Thursday，Friday，Saturday，Sunday。
     */
    WeekDays: Array<string>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
    TaskId?: number;
    /**
     * 开始时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    StartTime?: string;
    /**
     * 任务类型
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TaskType?: string;
    /**
     * 实例名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    InstanceName?: string;
    /**
     * 实例Id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    InstanceId?: string;
    /**
     * 项目Id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ProjectId?: number;
    /**
     * 任务进度
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Progress?: number;
    /**
     * 结束时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    EndTime?: string;
    /**
     * 任务状态
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Result?: number;
    /**
     * 操作者用户uin
  注意：此字段可能返回 null，表示取不到有效值。
     */
    OperatorUin?: string;
}
/**
 * CreateInstances请求参数结构体
 */
export interface CreateInstancesRequest {
    /**
     * 产品版本。
  14：当前仅支持混合存储版。
     */
    TypeId: number;
    /**
     * 私有网络唯一ID。
  请登录控制台在私有网络列表查询，如：vpc-azlk3***。
     */
    UniqVpcId: string;
    /**
     * 私有网络所属子网唯一ID。
  请登录控制台在私有网络列表查询，如：subnet-8abje***。
     */
    UniqSubnetId: string;
    /**
     * 计费模式。<ul><li>0：按量计费。</li><li>1：包年包月。</li></ul>
     */
    BillingMode: number;
    /**
     * 实例数量，单次最大购买数量以查询产品售卖规格返回的数量为准。
     */
    GoodsNum: number;
    /**
     * 选择包年包月计费模式（BillingMode 设置为1）时，您需要选择购买实例的时长。单位：月，取值范围 [1,2,3,4,5,6,7,8,9,10,11,12,24,36]。按量计费（BillingMode 设置为0）实例该参数设置为1即可。
     */
    Period: number;
    /**
     * 分片数量，支持选择3、5、6、8、9、10、12、15、16、18、20、21、24、25、27、30、32、33、35、36、39、40、42、45、48、50、51、54、55、56、57、60、63、64分片。
     */
    ShardNum: number;
    /**
     * 副本数。当前仅支持设置1个副本节点，即每一个分片仅包含1个主节点与1个副本节点，数据主从实时热备。
     */
    ReplicasNum: number;
    /**
     * 实例内存容量，单位：GB。
  KeeWiDB 内存容量<b>MachineMemory</b>与持久内存容量<b>MemSize</b>为固定搭配，即2GB内存，固定分配8GB的持久内存，不可选择。具体信息，请参见[产品规格](https://cloud.tencent.com/document/product/1520/80808)。
     */
    MachineMemory: number;
    /**
     * 实例所属的可用区ID。<ul><li>具体取值，请参见[地域和可用区](https://cloud.tencent.com/document/product/239/4106)获取。</li><li>参数<b>ZoneId</b>和<b>ZoneName</b>至少配置其中一个。</li></u>
     */
    ZoneId?: number;
    /**
     * 实例所属的可用区名称。<ul><li>具体取值，请参见[地域和可用区](https://cloud.tencent.com/document/product/239/4106)获取。</li><li>参数<b>ZoneId</b>和<b>ZoneName</b>至少配置其中一个。</li></u>
     */
    ZoneName?: string;
    /**
     * 创建实例的名称。
  仅支持长度小于60的中文、英文或者数字，短划线"-"、下划线"_"。
     */
    InstanceName?: string;
    /**
     * 指明创建的实例是否需要支持免密访问。<ul><li>true：免密实例。</li><li>false：非免密实例，默认为非免密实例。此时，需要设置访问密码。</li></ul>
     */
    NoAuth?: boolean;
    /**
     * 实例访问密码。<ul><li>当参数<b>NoAuth</b>为<b>true</b>时，Password为无需设置，否则Password为必填参数。</li>
  <li>密码复杂度要求：<ul><li>8-30个字符。</li><li>至少包含小写字母、大写字母、数字和字符 ()`~!@#$%^&*-+=_|{}[]:;<>,.?/ 中的2种。</li><li>不能以"/"开头。</li></ul></li></ul>
     */
    Password?: string;
    /**
     * 自定义端口。默认为6379，范围[1024,65535]。
     */
    VPort?: number;
    /**
     * 包年包月计费的续费模式。<ul><li>0：默认状态，指手动续费。</li><li>1：自动续费。</li><li>2：到期不再续费。</ul>
     */
    AutoRenew?: number;
    /**
     * 给实例设置安全组 ID 数组。
     */
    SecurityGroupIdList?: Array<string>;
    /**
     * 给实例绑定标签。
     */
    ResourceTags?: Array<ResourceTag>;
    /**
     * 混合存储版，单分片持久化内存容量，单位：GB。
  KeeWiDB 内存容量<b>MachineMemory</b>与持久内存容量<b>MemSize</b>为固定搭配，即2GB内存，固定分配8GB的持久内存，不可选择。具体信息，请参见[产品规格](https://cloud.tencent.com/document/product/1520/80808)。
     */
    MemSize?: number;
    /**
     * 每个分片硬盘的容量。单位：GB。
  每一缓存分片容量，对应的磁盘容量范围不同。具体信息，请参见[产品规格](https://cloud.tencent.com/document/product/1520/80808)。
     */
    DiskSize?: number;
    /**
     * 计算 CPU 核数，可忽略不传。CPU 核数与内存为固定搭配，具体信息，请参见[产品规格](https://cloud.tencent.com/document/product/1520/80808)。
     */
    MachineCpu?: number;
    /**
     * 项目id，取值以用户账户>用户账户相关接口查询>项目列表返回的projectId为准。
     */
    ProjectId?: number;
    /**
     * 数据压缩开关。<ul><li>ON：开启，默认开启压缩。</li><li>OFF：关闭。</li>
     */
    Compression?: string;
}
/**
 * ModifyNetworkConfig返回参数结构体
 */
export interface ModifyNetworkConfigResponse {
    /**
     * 执行状态。<ul><li>true：执行成功。</li><li>false：执行失败。</li></ul>
     */
    Status?: boolean;
    /**
     * 修改后的子网 ID。
     */
    SubnetId?: string;
    /**
     * 修改后的私有网络 ID。
     */
    VpcId?: string;
    /**
     * 修改后的 VIP 地址。
     */
    Vip?: string;
    /**
     * 任务ID。
     */
    TaskId?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeInstanceBinlogs请求参数结构体
 */
export interface DescribeInstanceBinlogsRequest {
    /**
     * 实例 ID。
     */
    InstanceId: string;
    /**
     * 每页输出备份列表大小，默认大小20。
     */
    Limit?: number;
    /**
     * 分页偏移量，取Limit整数倍。
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
}
/**
 * 安全组入站规则
 */
export interface Inbound {
    /**
     * 策略，ACCEPT或者DROP。
     */
    Action?: string;
    /**
     * 地址组id代表的地址集合。
     */
    AddressModule?: string;
    /**
     * 来源Ip或Ip段，例如192.168.0.0/16。
     */
    CidrIp?: string;
    /**
     * 描述。
     */
    Desc?: string;
    /**
     * 网络协议，支持udp、tcp等。
     */
    IpProtocol?: string;
    /**
     * 端口。
     */
    PortRange?: string;
    /**
     * 服务组id代表的协议和端口集合。
     */
    ServiceModule?: string;
    /**
     * 安全组id代表的地址集合。
     */
    Id?: string;
}
/**
 * AssociateSecurityGroups请求参数结构体
 */
export interface AssociateSecurityGroupsRequest {
    /**
     * 数据库引擎名称：keewidb。
     */
    Product: string;
    /**
     * 要绑定的安全组 ID，类似sg-efil7***。
     */
    SecurityGroupId: string;
    /**
     * 实例 ID，格式如：kee-c1nl9***，支持指定多个实例。
     */
    InstanceIds: Array<string>;
}
/**
 * DescribeTaskList返回参数结构体
 */
export interface DescribeTaskListResponse {
    /**
     * 任务总数。
     */
    TotalCount?: number;
    /**
     * 任务详细信息列表。
     */
    Tasks?: Array<TaskInfoDetail>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ModifyInstance请求参数结构体
 */
export interface ModifyInstanceRequest {
    /**
     * 修改实例操作。<ul><li>rename：表示实例重命名。</li><li>modifyProject：修改实例所属项目。</li><li>modifyAutoRenew：修改实例续费模式。</li></ul>
     */
    Operation: string;
    /**
     * 实例 ID 数组。
     */
    InstanceIds?: Array<string>;
    /**
     * 实例的新名称。
     */
    InstanceNames?: Array<string>;
    /**
     * 实例新的项目 ID。
     */
    ProjectId?: number;
    /**
     * 包年包月计费的续费模式。<b>InstanceIds</b>数组和<b>AutoRenews</b>数组中的修改值对应。<ul><li>0：默认状态，指手动续费。</li><li>1：自动续费。</li><li>2：到期不再续费。</ul>
     */
    AutoRenews?: Array<number | bigint>;
}
/**
 * RenewInstance返回参数结构体
 */
export interface RenewInstanceResponse {
    /**
     * 交易 ID。
     */
    DealId?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CreateBackupManually返回参数结构体
 */
export interface CreateBackupManuallyResponse {
    /**
     * 任务 ID。
     */
    TaskId?: number;
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
     * 安全组规则。
     */
    Groups: Array<SecurityGroup>;
    /**
     * 安全组生效内网地址。
     */
    VIP: string;
    /**
     * 安全组生效内网端口。
     */
    VPort: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * Redis节点信息
 */
export interface RedisNodeInfo {
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
 * ModifyAutoBackupConfig请求参数结构体
 */
export interface ModifyAutoBackupConfigRequest {
    /**
     * 实例 ID。
     */
    InstanceId: string;
    /**
     * 备份周期。可设置为 Monday，Tuesday，Wednesday，Thursday，Friday，Saturday，Sunday，该参数暂不支持修改、
     */
    WeekDays: Array<string>;
    /**
     * 备份任务执行时间段。
  可设置的格式为一个整点到下一个整点。例如：00:00-01:00、01:00-02:00、21:00-22:00、23:00-00:00等。
     */
    TimePeriod: string;
}
/**
 * Proxy节点信息
 */
export interface ProxyNodeInfo {
    /**
     * 节点ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    NodeId?: string;
}
/**
 * DestroyPostpaidInstance请求参数结构体
 */
export interface DestroyPostpaidInstanceRequest {
    /**
     * 实例 ID。
     */
    InstanceId: string;
}
/**
 * 代理慢查询详情
 */
export interface InstanceProxySlowlogDetail {
    /**
     * 慢查询耗时
     */
    Duration?: number;
    /**
     * 客户端地址
     */
    Client?: string;
    /**
     * 命令
     */
    Command?: string;
    /**
     * 详细命令行信息
     */
    CommandLine?: string;
    /**
     * 执行时间
     */
    ExecuteTime?: string;
}
/**
 * ResetPassword返回参数结构体
 */
export interface ResetPasswordResponse {
    /**
     * 任务 ID。
  <b>说明：</b>修改密码时的任务ID，如果切换免密访问或者非免密码实例，则无需关注此返回值。
     */
    TaskId: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ClearInstance请求参数结构体
 */
export interface ClearInstanceRequest {
    /**
     * 实例 ID，如：kee-6ubhg****。
     */
    InstanceId: string;
    /**
     * 实例访问密码。
  实例为免密访问，则无需设置该参数。
     */
    Password?: string;
}
/**
 * 地域售卖信息
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
 * RenewInstance请求参数结构体
 */
export interface RenewInstanceRequest {
    /**
     * 实例 ID。
     */
    InstanceId: string;
    /**
     * 购买时长。单位：月。取值为 [1,2,3,4,5,6,7,8,9,10,11,12,24,36,48,60]。
     */
    Period: number;
}
/**
 * CreateBackupManually请求参数结构体
 */
export interface CreateBackupManuallyRequest {
    /**
     * 待操作的实例 ID，可通过 DescribeInstance接口返回值中的 InstanceId 获取。
     */
    InstanceId: string;
    /**
     * 本次备份的备注信息。
     */
    Remark?: string;
    /**
     * 备份文件保存天数。0代表指定默认保留时间
     */
    StorageDays?: number;
}
/**
 * DescribeInstanceParamRecords返回参数结构体
 */
export interface DescribeInstanceParamRecordsResponse {
    /**
     * 修改历史记录总数。
     */
    TotalCount: number;
    /**
     * 修改历史记录信息。
     */
    InstanceParamHistory: Array<InstanceParamHistory>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 实例多选项类型参数描述
 */
export interface InstanceMultiParam {
    /**
     * 参数名
     */
    ParamName?: string;
    /**
     * 参数类型：multi
     */
    ValueType?: string;
    /**
     * 修改后是否需要重启：true，false
     */
    NeedRestart?: string;
    /**
     * 参数默认值
     */
    DefaultValue?: string;
    /**
     * 当前运行参数值
     */
    CurrentValue?: string;
    /**
     * 参数说明
     */
    Tips?: string;
    /**
     * 参数说明
     */
    EnumValue?: Array<string>;
    /**
     * 参数状态, 1: 修改中， 2：修改完成
     */
    Status?: number;
}
/**
 * DescribeInstanceDealDetail请求参数结构体
 */
export interface DescribeInstanceDealDetailRequest {
    /**
     * 订单交易ID数组，即 [CreateInstances](https://cloud.tencent.com/document/api/1520/86207) 的输出参数DealId。
     */
    DealIds: Array<string>;
}
/**
 * DestroyPrepaidInstance请求参数结构体
 */
export interface DestroyPrepaidInstanceRequest {
    /**
     * 实例 ID。
     */
    InstanceId: string;
}
/**
 * 实例整型参数描述
 */
export interface InstanceIntegerParam {
    /**
     * 参数名
     */
    ParamName?: string;
    /**
     * 参数类型：integer
     */
    ValueType?: string;
    /**
     * 修改后是否需要重启：true，false
     */
    NeedRestart?: string;
    /**
     * 参数默认值
     */
    DefaultValue?: string;
    /**
     * 当前运行参数值
     */
    CurrentValue?: string;
    /**
     * 参数说明
     */
    Tips?: string;
    /**
     * 参数最小值
     */
    Min?: string;
    /**
     * 参数最大值
     */
    Max?: string;
    /**
     * 参数状态, 1: 修改中， 2：修改完成
     */
    Status?: number;
    /**
     * 参数单位
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Unit?: string;
}
/**
 * 实例标签信息
 */
export interface InstanceTagInfo {
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
 * DestroyPostpaidInstance返回参数结构体
 */
export interface DestroyPostpaidInstanceResponse {
    /**
     * 任务 ID。
     */
    TaskId: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ModifyInstance返回参数结构体
 */
export interface ModifyInstanceResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 描述实例的主节点或者副本节点信息
 */
export interface NodeInfo {
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
 * ModifyDBInstanceSecurityGroups返回参数结构体
 */
export interface ModifyDBInstanceSecurityGroupsResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeTendisSlowLog返回参数结构体
 */
export interface DescribeTendisSlowLogResponse {
    /**
     * 慢查询详情。
     */
    TendisSlowLogDetail: Array<TendisSlowLogDetail>;
    /**
     * 慢查询总数。
     */
    TotalCount: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
    RegionSet: Array<RegionConf>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 实例的备份信息
 */
export interface BackupInfo {
    /**
     * 备份开始时间。
     */
    StartTime?: string;
    /**
     * 备份 ID。
     */
    BackupId?: string;
    /**
     * 备份类型。<ul><li>1：手动备份，指根据业务运维排障需求，立即执行备份任务的操作。</li> <li>0：自动备份，指根据自动备份策略定时自动发起的备份任务。</li><li>2：生成RDB，指根据业务需求，发起的生成文件为rdb类型的备份任务。</li></ul>
     */
    BackupType?: string;
    /**
     * 备份的备注信息.
     */
    Remark?: string;
    /**
     * 备份状态。  <ul><li>1：备份任务被其它流程锁定。</li><li>2：备份正常，没有被任何流程锁定。</li> <li>-1：备份已过期。</li><li>3：备份正在被导出。</li> <li>4：备份导出成功。</li></ul>
     */
    Status?: number;
    /**
     * 备份是否被锁定。<ul><li>0：未被锁定。</li><li>1：已被锁定。</li></ul>
     */
    Locked?: number;
}
/**
 * DescribeDBSecurityGroups请求参数结构体
 */
export interface DescribeDBSecurityGroupsRequest {
    /**
     * 数据库引擎名称：keewidb。
     */
    Product: string;
    /**
     * 实例ID，格式如：kee-c1nl9***。
     */
    InstanceId: string;
}
/**
 * ChangeInstanceMaster请求参数结构体
 */
export interface ChangeInstanceMasterRequest {
    /**
     * 实例 ID，如：kee-6ubh****。
     */
    InstanceId: string;
    /**
     * 副本节点 ID。
     */
    NodeId: string;
}
/**
 * DescribeProjectSecurityGroups返回参数结构体
 */
export interface DescribeProjectSecurityGroupsResponse {
    /**
     * 安全组规则。
     */
    Groups?: Array<SecurityGroup>;
    /**
     * 符合条件的安全组总数量。
     */
    Total?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeInstanceBackups返回参数结构体
 */
export interface DescribeInstanceBackupsResponse {
    /**
     * 备份文件总数。
     */
    TotalCount: number;
    /**
     * 废弃字段。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    BackupSet: Array<BinlogInfo>;
    /**
     * 实例备份信息列表。
     */
    BackupRecord: Array<BackupInfo>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeInstanceReplicas返回参数结构体
 */
export interface DescribeInstanceReplicasResponse {
    /**
     * 实例所有节点数量，包括主节点、副本节点。
     */
    TotalCount: number;
    /**
     * 实例节点信息。
     */
    ReplicaGroups: Array<ReplicaGroup>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * StartUpInstance返回参数结构体
 */
export interface StartUpInstanceResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 实例字符型参数描述
 */
export interface InstanceTextParam {
    /**
     * 参数名
     */
    ParamName?: string;
    /**
     * 参数类型：text
     */
    ValueType?: string;
    /**
     * 修改后是否需要重启：true，false
     */
    NeedRestart?: string;
    /**
     * 参数默认值
     */
    DefaultValue?: string;
    /**
     * 当前运行参数值
     */
    CurrentValue?: string;
    /**
     * 参数说明
     */
    Tips?: string;
    /**
     * 参数可取值
     */
    TextValue?: Array<string>;
    /**
     * 参数状态, 1: 修改中， 2：修改完成
     */
    Status?: number;
}
/**
 * 实例参数修改历史
 */
export interface InstanceParamHistory {
    /**
     * 参数名称
     */
    ParamName?: string;
    /**
     * 修改前值
     */
    PreValue?: string;
    /**
     * 修改后值
     */
    NewValue?: string;
    /**
     * 状态：1-参数配置修改中；2-参数配置修改成功；3-参数配置修改失败
     */
    Status?: number;
    /**
     * 修改时间
     */
    ModifyTime?: string;
}
/**
 * DescribeInstanceParamRecords请求参数结构体
 */
export interface DescribeInstanceParamRecordsRequest {
    /**
     * 实例 ID，如：kee-6ubh****。
     */
    InstanceId: string;
    /**
     * 每页输出的参数列表大小。默认为 20，最多输出100条。
     */
    Limit?: number;
    /**
     * 分页偏移量，取Limit整数倍。计算公式：offset=limit*(页码-1)。
     */
    Offset?: number;
}
/**
 * DescribeTaskList请求参数结构体
 */
export interface DescribeTaskListRequest {
    /**
     * 实例 ID，如：kee-6ubh****。
     */
    InstanceId?: string;
    /**
     * 实例名称。
     */
    InstanceName?: string;
    /**
     * 每页输出的任务列表大小。默认为 20，最多输出100条。
     */
    Limit?: number;
    /**
     * Offset：分页偏移量，取Limit整数倍。计算公式：offset=limit*(页码-1)。
     */
    Offset?: number;
    /**
     * 项目ID。
     */
    ProjectIds?: Array<number | bigint>;
    /**
     * 任务类型。可设置为：FLOW_CREATE、FLOW_SETPWD、FLOW_CLOSE等。
     */
    TaskTypes?: Array<string>;
    /**
     * 起始时间。
     */
    BeginTime?: string;
    /**
     * 终止时间。
     */
    EndTime?: string;
    /**
     * 任务状态。
     */
    TaskStatus?: Array<number | bigint>;
}
/**
 * CreateInstances返回参数结构体
 */
export interface CreateInstancesResponse {
    /**
     * 交易 ID。
     */
    DealId?: string;
    /**
     * 实例 ID 。
     */
    InstanceIds?: Array<string>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * KeeWiDB节点的运行信息
 */
export interface KeeWiDBNode {
    /**
     * 节点的序列ID。
     */
    NodeId: string;
    /**
     * 节点的状态。
     */
    Status: string;
    /**
     * 节点角色。
     */
    Role: string;
}
/**
 * DescribeConnectionConfig返回参数结构体
 */
export interface DescribeConnectionConfigResponse {
    /**
     * 单分片入流量带宽限制，单位：MB。
     */
    InNetLimit?: number;
    /**
     * 单分片出流量带宽限制，单位：MB。
     */
    OutNetLimit?: number;
    /**
     * 实例当前单分片连接数限制。
     */
    ClientLimit?: number;
    /**
     * 单分片连接数限制最小值。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ClientLimitMin?: number;
    /**
     * 单分片连接数限制最大值。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ClientLimitMax?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 实例增量备份信息
 */
export interface BinlogInfo {
    /**
     * 备份开始时间。
     */
    StartTime: string;
    /**
     * 备份结束时间。
     */
    EndTime: string;
    /**
     * 备份 ID。
     */
    BackupId: string;
    /**
     * 备份文件名。
     */
    Filename: string;
    /**
     * 备份文件大小，单位：Byte。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    FileSize: number;
}
/**
 * ModifyNetworkConfig请求参数结构体
 */
export interface ModifyNetworkConfigRequest {
    /**
     * 实例 ID，如：kee-6ubh****。
     */
    InstanceId: string;
    /**
     * 操作类型。<ul><li>changeVip：修改实例私有网络。</li><li>changeVpc：修改实例私有网络所属子网。</li><li>changeBaseToVpc：基础网络转为私有网络。</li></ul>
     */
    Operation: string;
    /**
     * 修改后的 VIP 地址。
  当参数<b>Operation</b>为<b>changeVip</b>时，需设置实例修改后的 VIP 地址。该参数不配置，则自动分配。
     */
    Vip?: string;
    /**
     * 修改后的私有网络 ID。
  当参数<b>Operation</b>为<b>changeVip</b>或者为<b>changeBaseToVpc</b>时，务必设置实例修改后的私有网络 ID。
     */
    VpcId?: string;
    /**
     * 修改后的所属子网 ID。
  当参数<b>Operation</b>为<b>changeVpc</b>或者为<b>changeBaseToVpc</b>时，务必设置实例修改后的子网 ID。
     */
    SubnetId?: string;
    /**
     * 原 VIP 保留时长。
  单位：天。取值范围：0、1、2、3、7、15。
     */
    Recycle?: number;
}
/**
 * DescribeInstanceParams请求参数结构体
 */
export interface DescribeInstanceParamsRequest {
    /**
     * 实例 ID，如：kee-6ubh****。
     */
    InstanceId: string;
}
/**
 * CleanUpInstance返回参数结构体
 */
export interface CleanUpInstanceResponse {
    /**
     * 任务 ID。
     */
    TaskId: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ModifyDBInstanceSecurityGroups请求参数结构体
 */
export interface ModifyDBInstanceSecurityGroupsRequest {
    /**
     * 数据库引擎名称：keewidb。
     */
    Product: string;
    /**
     * 要修改的安全组ID列表，一个或者多个安全组 ID 组成的数组。
     */
    SecurityGroupIds: Array<string>;
    /**
     * 实例ID，格式如：kee-c1nl****。
     */
    InstanceId: string;
}
/**
 * 可用区内产品售卖信息
 */
export interface ZoneCapacityConf {
    /**
     * 可用区ID
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
     * 产品规格等信息
     */
    ProductSet: Array<ProductConf>;
    /**
     * Int类型可用区ID
     */
    OldZoneId: number;
}
/**
 * 安全组出站规则
 */
export interface Outbound {
    /**
     * 策略，ACCEPT或者DROP。
     */
    Action?: string;
    /**
     * 地址组id代表的地址集合。
     */
    AddressModule?: string;
    /**
     * 来源Ip或Ip段，例如192.168.0.0/16。
     */
    CidrIp?: string;
    /**
     * 描述。
     */
    Desc?: string;
    /**
     * 网络协议，支持udp、tcp等。
     */
    IpProtocol?: string;
    /**
     * 端口。
     */
    PortRange?: string;
    /**
     * 服务组id代表的协议和端口集合。
     */
    ServiceModule?: string;
    /**
     * 安全组id代表的地址集合。
     */
    Id?: string;
}
/**
 * DescribeAutoBackupConfig返回参数结构体
 */
export interface DescribeAutoBackupConfigResponse {
    /**
     * 自动备份的周期。包括：Monday，Tuesday，Wednesday，Thursday，Friday，Saturday，Sunday。
     */
    WeekDays: Array<string>;
    /**
     * 自动备份时间段。
     */
    TimePeriod: string;
    /**
     * 全量备份文件保存天数。
     */
    BackupStorageDays: number;
    /**
     * 增量备份文件保存天数。
     */
    BinlogStorageDays: number;
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
     * 数据库引擎名称。该产品固定为 keewidb。
     */
    Product: string;
    /**
     * 项目 ID。
  登录 [账号中心](https://console.cloud.tencent.com/developer)，在<b>项目管理</b>中可获取项目 ID。
     */
    ProjectId?: number;
    /**
     * 分页偏移量，取Limit整数倍。计算公式：offset=limit*(页码-1)。
     */
    Offset?: number;
    /**
     * 每页安全组的数量限制。默认为 20，最多输出100条。
     */
    Limit?: number;
    /**
     * 搜索关键词，支持根据安全组 ID 或者安全组名称搜索。
     */
    SearchKey?: string;
}
/**
 * 安全组规则
 */
export interface SecurityGroup {
    /**
     * 创建时间，时间格式：yyyy-mm-dd hh:mm:ss。
     */
    CreateTime?: string;
    /**
     * 项目ID。
     */
    ProjectId?: number;
    /**
     * 安全组ID。
     */
    SecurityGroupId?: string;
    /**
     * 安全组名称。
     */
    SecurityGroupName?: string;
    /**
     * 安全组备注。
     */
    SecurityGroupRemark?: string;
    /**
     * 出站规则。
     */
    Outbound?: Array<Outbound>;
    /**
     * 入站规则。
     */
    Inbound?: Array<Inbound>;
}
/**
 * StartUpInstance请求参数结构体
 */
export interface StartUpInstanceRequest {
    /**
     * 实例 ID。
     */
    InstanceId: string;
}
/**
 * DescribeMaintenanceWindow返回参数结构体
 */
export interface DescribeMaintenanceWindowResponse {
    /**
     * 维护时间窗起始时间，如：03:00。
     */
    StartTime: string;
    /**
     * 维护时间窗结束时间，如：06:00。
     */
    EndTime: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ResetPassword请求参数结构体
 */
export interface ResetPasswordRequest {
    /**
     * 实例 ID。
     */
    InstanceId: string;
    /**
     * 设置新密码。<ul><li>当参数<b>NoAuth</b>设置为<b>true</b>，切换为免密实例时，可不设置该参数。</li><li>密码复杂度要求：<ul><li>长度8 - 30位, 推荐使用12位以上的密码。</li><li>不能以"/"开头。</li>
  <li>至少包含以下两项：<ul><li>小写字母a - z</li><li>大写字母A - Z</li><li>数字0 - 9</li><li>()~!@#$%^&*-+=_|{}[]:;<>,.?/</li></ul></li></ul></li></ul>
     */
    Password?: string;
    /**
     * 标识实例是否切换免密认证。<ul><li>false：由免密码认证方式切换为密码认证实例。默认为false。</li><li>true：由密码认证方式切换为免密码认证的方式。</li></ul>
     */
    NoAuth?: boolean;
}
/**
 * 产品规格信息
 */
export interface ProductConf {
    /**
     * 产品类型，13-KeewiDB标准架构，14-KeewiDB集群架构
     */
    Type: number;
    /**
     * KeewiDB标准架构，KeewiDB集群架构
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
     * 产品引擎，keewidb
     */
    Engine: string;
    /**
     * 兼容版本，Redis-2.8，Redis-3.2，Redis-4.0
     */
    Version: string;
    /**
     * 副本数量
     */
    ReplicaNum: Array<string>;
    /**
     * 支持的计费模式，1-包年包月，0-按量计费
     */
    PayMode: string;
}
/**
 * ModifyConnectionConfig请求参数结构体
 */
export interface ModifyConnectionConfigRequest {
    /**
     * 实例 ID，如：kee-6ubh****。
     */
    InstanceId: string;
    /**
     * 单分片附加带宽，取值范围[0,512]，单位：MB。
  <ul><li>开启副本只读时，实例总带宽  = 单分片附加带宽 * 分片数 + 标准带宽 * 分片数 * Max ([只读副本数量, 1])，标准架构的分片数 = 1。</li><li>没有开启副本只读时，实例总带宽 = 单分片附加带宽 * 分片数 + 标准带宽 * 分片数，标准架构的分片数 = 1。</li></ul>
     */
    Bandwidth?: number;
    /**
     * 单分片的总连接数。
  <ul>默认为10000，整个实例的最大连接数为单个分片的最大连接数 x 分片数量。标准架构分片数量为1。
  <li>关闭副本只读：每个分片的最大连接数的取值范围为[10000,40000]。</li><li>开启副本只读：每个分片的最大连接数的取值范围为 [10000,10000 x (副本数 + 3)]。</li></ul>
     */
    ClientLimit?: number;
}
/**
 * 订单交易信息
 */
export interface TradeDealDetail {
    /**
     * 订单号ID，调用云API时使用此ID
     */
    DealId?: string;
    /**
     * 长订单ID，反馈订单问题给官方客服使用此ID
     */
    DealName?: string;
    /**
     * 可用区id
     */
    ZoneId?: number;
    /**
     * 订单关联的实例数
     */
    GoodsNum?: number;
    /**
     * 创建用户uin
     */
    Creater?: string;
    /**
     * 订单创建时间
     */
    CreatTime?: string;
    /**
     * 订单超时时间
     */
    OverdueTime?: string;
    /**
     * 订单完成时间
     */
    EndTime?: string;
    /**
     * 订单状态 1：未支付 2:已支付，未发货 3:发货中 4:发货成功 5:发货失败 6:已退款 7:已关闭订单 8:订单过期 9:订单已失效 10:产品已失效 11:代付拒绝 12:支付中
     */
    Status?: number;
    /**
     * 订单状态描述
     */
    Description?: string;
    /**
     * 订单实际总价，单位：分
     */
    Price?: number;
    /**
     * 实例ID
     */
    InstanceIds?: Array<string>;
}
/**
 * 实例绑定标签
 */
export interface ResourceTag {
    /**
     * 标签 Key。
     */
    TagKey: string;
    /**
     * 标签 Value。
     */
    TagValue: string;
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
 * 实例副本组信息
 */
export interface ReplicaGroup {
    /**
     * 节点 ID。
     */
    GroupId?: number;
    /**
     * 节点组的名称，主节点为空。
     */
    GroupName?: string;
    /**
     * 节点的可用区ID，比如ap-guangzhou-1。
     */
    ZoneId?: string;
    /**
     * 节点组角色。<ul><li>master：为主节点。</li><li>replica：为副本节点。</li></ul>
     */
    Role?: string;
    /**
     * 节点组节点列表。
     */
    KeeWiDBNodes?: Array<KeeWiDBNode>;
}
/**
 * 实例详细信息
 */
export interface InstanceInfo {
    /**
     * 实例名称。
     */
    InstanceName?: string;
    /**
     * 实例 ID。
     */
    InstanceId?: string;
    /**
     * 用户的Appid。
     */
    Appid?: number;
    /**
     * 项目 ID。
     */
    ProjectId?: number;
    /**
     * 地域ID。<ul><li>1：广州。</li><li>4：上海。</li><li>8：北京。</li></ul>
     */
    RegionId?: number;
    /**
     * 可用区 ID。
     */
    ZoneId?: number;
    /**
     * VPC 网络 ID， 如：75101。该参数当前暂保留，可忽略。
     */
    VpcId?: number;
    /**
     * 实例当前状态。<ul><li>0：待初始化。</li><li>1：实例在流程中。</li><li>2：实例运行中。</li><li>-2：实例已隔离。</li><li>-3：实例待删除。</li></ul>
     */
    Status?: number;
    /**
     * VPC 网络下子网 ID， 如：46315。该参数当前暂保留，可忽略。
     */
    SubnetId?: number;
    /**
     * 实例 VIP。
     */
    WanIp?: string;
    /**
     * 实例端口号。
     */
    Port?: number;
    /**
     * 实例创建时间。
     */
    Createtime?: string;
    /**
     * 实例持久内存总容量大小，单位：MB。
     */
    Size?: number;
    /**
     * 实例类型。<ul><li>13：标准版。</li><li>14：集群版。</li></ul>
     */
    Type?: number;
    /**
     * 实例是否设置自动续费标识。<ul><li>1：设置自动续费。</li><li>0：未设置自动续费。</li></ul>
     */
    AutoRenewFlag?: number;
    /**
     * 实例到期时间。
     */
    DeadlineTime?: string;
    /**
     * 存储引擎。
     */
    Engine?: string;
    /**
     * 产品类型。<ul><li>standalone ：标准版。</li><li>cluster ：集群版。</li></ul>
     */
    ProductType?: string;
    /**
     * VPC 网络 ID， 如：vpc-fk33jsf4****。
     */
    UniqVpcId?: string;
    /**
     * VPC 网络下子网 ID，如：subnet-fd3j6l3****。
     */
    UniqSubnetId?: string;
    /**
     * 计费模式。<ul><li>0：按量计费。</li><li>1：包年包月。</li></ul>
     */
    BillingMode?: number;
    /**
     * 实例运行状态描述：如”实例运行中“。
     */
    InstanceTitle?: string;
    /**
     * 计划下线时间。
     */
    OfflineTime?: string;
    /**
     * 流程中的实例，返回子状态。
     */
    SubStatus?: number;
    /**
     * 反亲和性标签
     */
    Tags?: Array<string>;
    /**
     * 分片大小。
     */
    RedisShardSize?: number;
    /**
     * 分片数量。
     */
    RedisShardNum?: number;
    /**
     * 副本数量。
     */
    RedisReplicasNum?: number;
    /**
     * 计费 ID。
     */
    PriceId?: number;
    /**
     * 隔离时间。
     */
    CloseTime?: string;
    /**
     * 从节点读取权重。
     */
    SlaveReadWeight?: number;
    /**
     * 实例关联的标签信息。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    InstanceTags?: Array<InstanceTagInfo>;
    /**
     * 项目名称。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ProjectName?: string;
    /**
     * 是否为免密实例；<ul><li>true：免密实例。</li><li>false：非免密实例。</li></ul>
  注意：此字段可能返回 null，表示取不到有效值。
     */
    NoAuth?: boolean;
    /**
     * 客户端连接数。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ClientLimit?: number;
    /**
     * DTS状态（内部参数，用户可忽略）。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DtsStatus?: number;
    /**
     * 分片带宽上限，单位 MB。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    NetLimit?: number;
    /**
     * 免密实例标识（内部参数，用户可忽略）。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PasswordFree?: number;
    /**
     * 实例只读标识（内部参数，用户可忽略）。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ReadOnly?: number;
    /**
     * 内部参数，用户可忽略。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Vip6?: string;
    /**
     * 内部参数，用户可忽略。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RemainBandwidthDuration?: string;
    /**
     * 实例的磁盘容量大小。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DiskSize?: number;
    /**
     * 监控版本。<ul><li>1m：分钟粒度监控。</li><li>5s：5秒粒度监控。</li></ul>
  注意：此字段可能返回 null，表示取不到有效值。
     */
    MonitorVersion?: string;
    /**
     * 客户端最大连接数可设置的最小值。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ClientLimitMin?: number;
    /**
     * 客户端最大连接数可设置的最大值。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ClientLimitMax?: number;
    /**
     * 实例的节点详细信息。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    NodeSet?: Array<NodeInfo>;
    /**
     * 实例所在的地域信息，比如ap-guangzhou。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Region?: string;
    /**
     * 实例内存容量，单位：GB。KeeWiDB 内存容量
  注意：此字段可能返回 null，表示取不到有效值。
     */
    MachineMemory?: number;
    /**
     * 单分片磁盘大小，单位：MB
     */
    DiskShardSize?: number;
    /**
     * 3
     */
    DiskShardNum?: number;
    /**
     * 1
     */
    DiskReplicasNum?: number;
    /**
     * 数据压缩开关。<ul><li>ON：开启。</li><li>OFF：关闭。</li></ul>
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Compression?: string;
}
/**
 * CleanUpInstance请求参数结构体
 */
export interface CleanUpInstanceRequest {
    /**
     * 实例 ID，如：kee-6ubh****。
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
    DealDetails?: Array<TradeDealDetail>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeInstances请求参数结构体
 */
export interface DescribeInstancesRequest {
    /**
     * 每页输出的实例列表的大小，即每页输出的实例数量，默认值20，取值范围为[1,1000]。
     */
    Limit?: number;
    /**
     * 分页偏移量，取Limit整数倍。
  计算公式为offset=limit*(页码-1)。例如 limit=10，第1页offset就为0，第2页offset就为10，依次类推。
     */
    Offset?: number;
    /**
     * 实例 ID，如：kee-6ubh****。
     */
    InstanceId?: string;
    /**
     * 排序依据。枚举范围如下所示。 <ul><li>projectId：实例按照项目ID排序。</li><li>createtime：实例按照创建时间排序。</li><li>instancename：实例按照实例名称排序。</li><li>type：实例按照类型排序。</li><li>curDeadline：实例按照到期时间排序。</li></ul>
     */
    OrderBy?: string;
    /**
     * 排序方式。<ul><li>1：倒序。默认为倒序。</li><li>0：顺序。</li></ul>
     */
    OrderType?: number;
    /**
     * 私有网络ID数组。数组下标从0开始，如果不传则默认选择基础网络，如：47525
     */
    VpcIds?: Array<string>;
    /**
     * 子网ID数组，数组下标从0开始，如：56854
     */
    SubnetIds?: Array<string>;
    /**
     * 项目ID 组成的数组，数组下标从0开始
     */
    ProjectIds?: Array<number | bigint>;
    /**
     * 查找关键字，可输入实例的ID或者实例名称。
     */
    SearchKey?: string;
    /**
     * 实例名称。
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
     * 实例状态。<ul><li>0：待初始化。</li><li>1：流程中。</li><li>2：运行中。</li><li>-2：已隔离。</li><li>-3：待删除。</li></ul>
     */
    Status?: Array<number | bigint>;
    /**
     * 续费模式。- 0：手动续费。- 1：自动续费。- 2：到期不再续费。
     */
    AutoRenew?: Array<number | bigint>;
    /**
     * 计费模式。<ul><li>postpaid：按量计费。</li><li>prepaid：包年包月。</li></ul>
     */
    BillingMode?: string;
    /**
     * 实例类型。<ul><li>13：标准版。</li><li>14：集群版。</li></ul>
     */
    Type?: number;
    /**
     * 搜索关键词：支持实例 ID、实例名称、私有网络IP地址。
     */
    SearchKeys?: Array<string>;
    /**
     * 内部参数，用户可忽略。
     */
    TypeList?: Array<number | bigint>;
    /**
     * 内部参数，用户可忽略。
     */
    MonitorVersion?: string;
    /**
     * 根据标签的 Key 和 Value 筛选资源。该参数不配置或者数组设置为空值，则不根据标签进行过滤。
     */
    InstanceTags?: InstanceTagInfo;
    /**
     * 根据标签的 Key 筛选资源，该参数不配置或者数组设置为空值，则不根据标签Key进行过滤。
     */
    TagKeys?: Array<string>;
}
/**
 * DescribeTaskInfo返回参数结构体
 */
export interface DescribeTaskInfoResponse {
    /**
     * 任务状态。<ul><li>preparing：待执行。</li><li>running：执行中。</li><li>succeed：成功。</li><li>failed：失败。</li><li>error：执行出错。</li></ul>
     */
    Status: string;
    /**
     * 任务开始时间。
     */
    StartTime: string;
    /**
     * 任务类型。
     */
    TaskType: string;
    /**
     * 实例的ID。
     */
    InstanceId: string;
    /**
     * 任务信息，错误时显示错误信息。执行中与成功则为空值。
     */
    TaskMessage: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeAutoBackupConfig请求参数结构体
 */
export interface DescribeAutoBackupConfigRequest {
    /**
     * 实例 ID。
     */
    InstanceId: string;
}
/**
 * 实例枚举类型参数描述，keewidb暂无枚举值
 */
export interface InstanceEnumParam {
    /**
     * 参数名
     */
    ParamName?: string;
    /**
     * 参数类型：enum
     */
    ValueType?: string;
    /**
     * 修改后是否需要重启：true，false
     */
    NeedRestart?: string;
    /**
     * 参数默认值
     */
    DefaultValue?: string;
    /**
     * 当前运行参数值
     */
    CurrentValue?: string;
    /**
     * 参数说明
     */
    Tips?: string;
    /**
     * 参数可取值
     */
    EnumValue?: Array<string>;
    /**
     * 参数状态, 1: 修改中， 2：修改完成
     */
    Status?: number;
}
/**
 * UpgradeInstance返回参数结构体
 */
export interface UpgradeInstanceResponse {
    /**
     * 交易ID。
     */
    DealId?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
    TotalCount?: number;
    /**
     * 实例详细信息列表
     */
    InstanceSet?: Array<InstanceInfo>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeTaskInfo请求参数结构体
 */
export interface DescribeTaskInfoRequest {
    /**
     * 任务 ID。
     */
    TaskId: number;
}
/**
 * ModifyConnectionConfig返回参数结构体
 */
export interface ModifyConnectionConfigResponse {
    /**
     * 任务 ID。
     */
    TaskId: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ModifyMaintenanceWindow返回参数结构体
 */
export interface ModifyMaintenanceWindowResponse {
    /**
     * 执行结果。<ul><li>success：修改成功。 </li> <li>failed：修改失败。</li></ul>
     */
    Status: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeInstanceReplicas请求参数结构体
 */
export interface DescribeInstanceReplicasRequest {
    /**
     * 实例 ID，如：kee-6ubh****。
     */
    InstanceId: string;
}
/**
 * DestroyPrepaidInstance返回参数结构体
 */
export interface DestroyPrepaidInstanceResponse {
    /**
     * 交易ID。
     */
    DealId: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 实例节点信息
 */
export interface InstanceNodeInfo {
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
 * 实例慢查询详情
 */
export interface TendisSlowLogDetail {
    /**
     * 执行时间
     */
    ExecuteTime?: string;
    /**
     * 慢查询耗时（毫秒）
     */
    Duration?: number;
    /**
     * 命令
     */
    Command?: string;
    /**
     * 详细命令行信息
     */
    CommandLine?: string;
    /**
     * 节点ID
     */
    Node?: string;
}
/**
 * DescribeConnectionConfig请求参数结构体
 */
export interface DescribeConnectionConfigRequest {
    /**
     * 实例 ID，如：kee-6ubh****。
     */
    InstanceId: string;
}
/**
 * ModifyInstanceParams请求参数结构体
 */
export interface ModifyInstanceParamsRequest {
    /**
     * 实例 ID，如：kee-6ubh****。
     */
    InstanceId: string;
    /**
     * 实例修改的参数列表。
     */
    InstanceParams: Array<InstanceParam>;
}
/**
 * DescribeInstanceNodeInfo请求参数结构体
 */
export interface DescribeInstanceNodeInfoRequest {
    /**
     * 实例 ID，如：kee-6ubh****。
     */
    InstanceId: string;
    /**
     * 每页输出的节点信息大小。默认为 20。
     */
    Limit?: number;
    /**
     * 分页偏移量，取Limit整数倍。计算公式：offset=limit*(页码-1)。
     */
    Offset?: number;
}
/**
 * DescribeMaintenanceWindow请求参数结构体
 */
export interface DescribeMaintenanceWindowRequest {
    /**
     * 实例 ID，如：kee-6ubhg***。
     */
    InstanceId: string;
}
/**
 * DescribeTendisSlowLog请求参数结构体
 */
export interface DescribeTendisSlowLogRequest {
    /**
     * 实例 ID，如：kee-6ubh****。
     */
    InstanceId: string;
    /**
     * 开始时间。
     */
    BeginTime: string;
    /**
     * 结束时间。
     */
    EndTime: string;
    /**
     * 慢查询平均执行时间阈值。<ul><li>单位：毫秒。</li><li>取值范围：10、20、30、40、50。</li></ul>
     */
    MinQueryTime?: number;
    /**
     * 每个页面大小，即每个页面输出慢日志的数量。取值范围为：10、20、30、40、50。默认为 20。
     */
    Limit?: number;
    /**
     * 页面偏移量，取Limit整数倍，计算公式：offset=limit*(页码-1)。
     */
    Offset?: number;
}
/**
 * DescribeProxySlowLog请求参数结构体
 */
export interface DescribeProxySlowLogRequest {
    /**
     * 实例 ID，如：kee-6ubhgouj
     */
    InstanceId: string;
    /**
     * 开始时间。
     */
    BeginTime: string;
    /**
     * 结束时间。
     */
    EndTime: string;
    /**
     * 慢查询平均执行时间阈值。<ul><li>单位：毫秒。</li><li>取值范围：10、20、30、40、50。</li></ul>
     */
    MinQueryTime?: number;
    /**
     * 每个页面大小，即每个页面输出慢日志的数量。取值范围为：10、20、30、40、50，默认为 20。
     */
    Limit?: number;
    /**
     * 页面偏移量，取Limit整数倍，计算公式：offset=limit*(页码-1)。
     */
    Offset?: number;
}
/**
 * DescribeProxySlowLog返回参数结构体
 */
export interface DescribeProxySlowLogResponse {
    /**
     * 慢查询总数。
     */
    TotalCount: number;
    /**
     * 慢查询详情。
     */
    InstanceProxySlowLogDetail: Array<InstanceProxySlowlogDetail>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeProductInfo请求参数结构体
 */
export declare type DescribeProductInfoRequest = null;
/**
 * DescribeInstanceParams返回参数结构体
 */
export interface DescribeInstanceParamsResponse {
    /**
     * 实例参数总数量。
     */
    TotalCount?: number;
    /**
     * 实例枚举类型参数数组。
     */
    InstanceEnumParam?: Array<InstanceEnumParam>;
    /**
     * 实例整型参数数组。
     */
    InstanceIntegerParam?: Array<InstanceIntegerParam>;
    /**
     * 实例字符型参数数组。
     */
    InstanceTextParam?: Array<InstanceTextParam>;
    /**
     * 实例多选项型参数数组。
     */
    InstanceMultiParam?: Array<InstanceMultiParam>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DisassociateSecurityGroups请求参数结构体
 */
export interface DisassociateSecurityGroupsRequest {
    /**
     * 数据库引擎名称：keewidb。
     */
    Product: string;
    /**
     * 要绑定的安全组 ID，类似sg-efil****。
     */
    SecurityGroupId: string;
    /**
     * 实例 ID，格式如：kee-c1nl****，支持指定多个实例。
     */
    InstanceIds: Array<string>;
}
/**
 * ModifyMaintenanceWindow请求参数结构体
 */
export interface ModifyMaintenanceWindowRequest {
    /**
     * 实例 ID，如：kee-6ubh****。
     */
    InstanceId: string;
    /**
     * 维护时间窗起始时间，如：03:00。
     */
    StartTime: string;
    /**
     * 维护时间窗结束时间，如：06:00。
     */
    EndTime: string;
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
     * 每页输出的备份列表大小，即每页输出的备份文件的数量，默认值20，取值范围为[1,100]。
     */
    Limit?: number;
    /**
     * 备份列表分页偏移量，取Limit整数倍。
  计算公式为offset=limit*(页码-1)。例如 limit=10，第1页offset就为0，第2页offset就为10，依次类推。
     */
    Offset?: number;
    /**
     * 查询备份文件的开始时间，格式如：2017-02-08 16:46:34。查询实例在 [BeginTime, EndTime] 时间段内的备份列表。
     */
    BeginTime?: string;
    /**
     * 查询备份文件的结束时间，格式如：2017-02-08 19:09:26。查询实例在 [beginTime, endTime] 时间段内的备份列表。
     */
    EndTime?: string;
    /**
     * 备份任务状态。<ul><li>1：备份在流程中。</li><li>2：备份正常。</li><li>3：备份转RDB文件处理中。</li><li>4：已完成RDB转换。</li><li>-1：备份已过期。</li><li>-2：备份已删除。</li></ul>
     */
    Status?: Array<number | bigint>;
}
/**
 * ClearInstance返回参数结构体
 */
export interface ClearInstanceResponse {
    /**
     * 任务 ID。
     */
    TaskId?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ChangeInstanceMaster返回参数结构体
 */
export interface ChangeInstanceMasterResponse {
    /**
     * 异步任务 ID。
     */
    TaskId: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * UpgradeInstance请求参数结构体
 */
export interface UpgradeInstanceRequest {
    /**
     * 实例 ID。
     */
    InstanceId: string;
    /**
     * 配置变更后，每个分片持久化内存容量，单位：GB。
  <ul><li>KeeWiDB 内存容量<b>MachineMemory</b>与持久内存容量<b>MemSize</b>为固定搭配，即2GB内存，固定分配8GB的持久内存，不可选择。具体信息，请参见[产品规格](https://cloud.tencent.com/document/product/1520/80808)。</li><li>变更实例内存、持久化内存与磁盘、变更实例的分片数量，每次只能变更一项。</li></ul>
     */
    MemSize?: number;
    /**
     * CPU 核数，可忽略不传
     */
    MachineCpu?: number;
    /**
     * 实例内存容量，单位：GB。
  <ul><li>KeeWiDB 内存容量<b>MachineMemory</b>与持久内存容量<b>MemSize</b>为固定搭配，即2GB内存，固定分配8GB的持久内存，不可选择。具体信息，请参见[产品规格](https://cloud.tencent.com/document/product/1520/80808)。</li><li>变更实例内存、持久化内存与磁盘、变更实例的分片数量，每次只能变更一项。</li></ul>
     */
    MachineMemory?: number;
    /**
     * 配置变更后，分片数量。
  <ul><li>增加后分片的数量务必为增加之前数量的整数倍。分片数量支持选择3、5、6、8、9、10、12、15、16、18、20、21、24、25、27、30、32、33、35、36、39、40、42、45、48、50、51、54、55、56、57、60、63、64分片。</li><li>变更实例内存、持久化内存与磁盘、变更实例的分片数量，每次只能变更一项。</li></ul>
     */
    ShardNum?: number;
    /**
     * 配置变更后，每个分片硬盘的容量。单位：GB。
  <ul><li>每一缓存分片容量，对应的磁盘容量范围不同。具体信息，请参见[产品规格](https://cloud.tencent.com/document/product/1520/80808)。</li><li>变更实例内存、持久化内存与磁盘、变更实例的分片数量，每次只能变更一项。</li></ul>
     */
    DiskSize?: number;
}
/**
 * DescribeInstanceNodeInfo返回参数结构体
 */
export interface DescribeInstanceNodeInfoResponse {
    /**
     * Proxy 节点数量。
     */
    ProxyCount: number;
    /**
     * Proxy 节点信息。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Proxy: Array<ProxyNodeInfo>;
    /**
     * Redis 节点数量。该参数仅为产品兼容性而保留，并不具有实际意义，可忽略。
     */
    RedisCount: number;
    /**
     * Redis 节点信息。该参数仅为产品兼容性而保留，并不具有实际意义，可忽略。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Redis: Array<RedisNodeInfo>;
    /**
     * Tendis 节点数量。该参数仅为产品兼容性而保留，并不具有实际意义，可忽略。
     */
    TendisCount: number;
    /**
     * Tendis 节点信息。该参数仅为产品兼容性而保留，并不具有实际意义，可忽略。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Tendis: Array<InstanceNodeInfo>;
    /**
     * KeewiDB 节点数量。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    KeeWiDBCount: number;
    /**
     * KeewiDB 节点信息。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    KeeWiDB: Array<InstanceNodeInfo>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeInstanceBinlogs返回参数结构体
 */
export interface DescribeInstanceBinlogsResponse {
    /**
     * 备份总数
     */
    TotalCount: number;
    /**
     * 实例的备份信息数组
     */
    BackupSet: Array<BinlogInfo>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
