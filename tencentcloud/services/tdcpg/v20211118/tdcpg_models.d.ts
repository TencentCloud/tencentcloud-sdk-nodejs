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
 * ModifyClusterName请求参数结构体
 */
export interface ModifyClusterNameRequest {
    /**
      * 集群ID
      */
    ClusterId: string;
    /**
      * 集群名，1-60个字符，可以包含中文、英文、数字和符号"-"、"_"、"."
      */
    ClusterName: string;
}
/**
 * ModifyClustersAutoRenewFlag返回参数结构体
 */
export interface ModifyClustersAutoRenewFlagResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeClusters请求参数结构体
 */
export interface DescribeClustersRequest {
    /**
      * 页码，取值范围为[1,INF)，默认值为1
      */
    PageNumber?: number;
    /**
      * 每页条数，取值范围为默认为[1,100]，默认值为20
      */
    PageSize?: number;
    /**
      * 目前支持查询条件包括：
 - ClusterId : 集群ID
 - ClusterName : 集群名
 - ProjectId : 项目ID
 - Status : 集群状态
 - PayMode : 付费模式
      */
    Filters?: Array<Filter>;
    /**
      * 排序字段，可选字段：
 - CreateTime : 集群创建时间(默认值)
 - PayPeriodEndTime : 集群过期时间
      */
    OrderBy?: string;
    /**
      * 排序方式，可选字段：
 - DESC : 降序(默认值)
 - ASC : 升序
      */
    OrderByType?: string;
}
/**
 * DeleteClusterInstances返回参数结构体
 */
export interface DeleteClusterInstancesResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ModifyClusterInstancesSpec请求参数结构体
 */
export interface ModifyClusterInstancesSpecRequest {
    /**
      * 集群ID
      */
    ClusterId: string;
    /**
      * 实例ID列表，目前只支持单个实例修改
      */
    InstanceIdSet: Array<string>;
    /**
      * 修改后的CPU核数。取值参考文档【购买指南】
      */
    CPU: number;
    /**
      * 修改后的内存大小，单位GiB。取值参考文档【购买指南】
      */
    Memory: number;
    /**
      * 操作时机
 - IMMEDIATE：立即执行
 - MAINTAIN_PERIOD：维护窗口期执行
      */
    OperationTiming: string;
}
/**
 * DescribeClusterBackups请求参数结构体
 */
export interface DescribeClusterBackupsRequest {
    /**
      * 集群ID
      */
    ClusterId: string;
    /**
      * 页码，取值范围为[1,INF)，默认值为1
      */
    PageNumber?: number;
    /**
      * 每页个数，取值范围为默认为[1,100]，默认值为20
      */
    PageSize?: number;
}
/**
 * 可以回档时间范围
 */
export interface AvailableRecoveryTimeRange {
    /**
      * 可回档起始时间。按照RFC3339标准表示，并且使用东八区时区时间，格式为：YYYY-MM-DDThh:mm:ss+08:00。
      */
    AvailableBeginTime: string;
    /**
      * 可回档结束时间。按照RFC3339标准表示，并且使用东八区时区时间，格式为：YYYY-MM-DDThh:mm:ss+08:00。
      */
    AvailableEndTime: string;
}
/**
 * ResetAccountPassword请求参数结构体
 */
export interface ResetAccountPasswordRequest {
    /**
      * 集群ID
      */
    ClusterId: string;
    /**
      * 账号名字
      */
    AccountName: string;
    /**
      * 数据库用户密码，必须满足 8-64个字符，至少包含 大写字母、小写字母、数字和符号~!@#$%^&*_-+=`|(){}[]:;'<>,.?/中的任意三种
      */
    AccountPassword: string;
}
/**
 * DescribeClusterInstances返回参数结构体
 */
export interface DescribeClusterInstancesResponse {
    /**
      * 总条数
      */
    TotalCount: number;
    /**
      * 实例列表信息
      */
    InstanceSet: Array<Instance>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DeleteCluster返回参数结构体
 */
export interface DeleteClusterResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CreateClusterInstances返回参数结构体
 */
export interface CreateClusterInstancesResponse {
    /**
      * 订单号
      */
    DealNameSet: Array<string>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * RestartClusterInstances请求参数结构体
 */
export interface RestartClusterInstancesRequest {
    /**
      * 集群ID
      */
    ClusterId: string;
    /**
      * 实例ID列表，目前只支持单个实例重启
      */
    InstanceIdSet: Array<string>;
}
/**
 * CreateCluster返回参数结构体
 */
export interface CreateClusterResponse {
    /**
      * 订单号
      */
    DealNameSet: Array<string>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * RecoverClusterInstances请求参数结构体
 */
export interface RecoverClusterInstancesRequest {
    /**
      * 集群ID
      */
    ClusterId: string;
    /**
      * 实例ID列表
      */
    InstanceIdSet: Array<string>;
    /**
      * 购买时长，单位：月。取值范围为[1,60]，默认值为1。
只有当PayMode为PREPAID时生效。
      */
    Period?: number;
}
/**
 * CloneClusterToPointInTime返回参数结构体
 */
export interface CloneClusterToPointInTimeResponse {
    /**
      * 订单号
      */
    DealNameSet: Array<string>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CreateCluster请求参数结构体
 */
export interface CreateClusterRequest {
    /**
      * 可用区
      */
    Zone: string;
    /**
      * 数据库版本，目前仅支持 10.17
      */
    DBVersion: string;
    /**
      * 数据库用户密码，必须满足 8-64个字符，至少包含 大写字母、小写字母、数字和符号~!@#$%^&*_-+=`|\(){}[]:;'<>,.?/中的任意三种
      */
    MasterUserPassword: string;
    /**
      * CPU核数。取值参考文档【购买指南】
      */
    CPU: number;
    /**
      * 内存大小，单位GiB。取值参考文档【购买指南】
      */
    Memory: number;
    /**
      * 私有网络ID
      */
    VpcId: string;
    /**
      * 已配置的私有网络中的子网ID
      */
    SubnetId: string;
    /**
      * 集群付费模式
 - PREPAID：预付费，即包年包月
 - POSTPAID_BY_HOUR：按小时后付费
      */
    PayMode: string;
    /**
      * 集群名，1-60个字符，可以包含中文、英文、数字和符号"-"、"_"、"."。不输入此参数时默认与ClusterId保持一致
      */
    ClusterName?: string;
    /**
      * 项目Id，默认为0表示默认项目
      */
    ProjectId?: number;
    /**
      * 连接数据库时，Endpoint使用的端口。取值范围为[1,65534]，默认值为5432
      */
    Port?: number;
    /**
      * 集群下实例数量。取值范围为[1,4]，默认值为1
      */
    InstanceCount?: number;
    /**
      * 购买时长，单位：月。取值范围为[1,60]，默认值为1。
只有当PayMode为PREPAID时生效。
      */
    Period?: number;
    /**
      * 是否自动续费，0-不 1-是。默认值为0，只有当PayMode为PREPAID时生效。
      */
    AutoRenewFlag?: number;
}
/**
 * DeleteClusterInstances请求参数结构体
 */
export interface DeleteClusterInstancesRequest {
    /**
      * 集群ID
      */
    ClusterId: string;
    /**
      * 实例ID列表
      */
    InstanceIdSet: Array<string>;
}
/**
 * RestartClusterInstances返回参数结构体
 */
export interface RestartClusterInstancesResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ModifyClusterInstancesSpec返回参数结构体
 */
export interface ModifyClusterInstancesSpecResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CreateClusterInstances请求参数结构体
 */
export interface CreateClusterInstancesRequest {
    /**
      * 集群ID
      */
    ClusterId: string;
    /**
      * CPU核数。取值参考文档【购买指南】
      */
    CPU: number;
    /**
      * 内存大小，单位GiB。取值参考文档【购买指南】
      */
    Memory: number;
    /**
      * 实例名，1-60个字符，可以包含中文、英文、数字和符号"-"、"_"、"."。不输入此参数时默认与InstanceId一致。
      */
    InstanceName?: string;
    /**
      * 新建实例的数量，默认为1。单集群下实例数量目前不能超过4个。
      */
    InstanceCount?: number;
}
/**
 * DescribeClusterRecoveryTimeRange返回参数结构体
 */
export interface DescribeClusterRecoveryTimeRangeResponse {
    /**
      * 可回档时间范围列表
      */
    AvailableRecoveryTimeRangeSet: Array<AvailableRecoveryTimeRange>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeClusterEndpoints返回参数结构体
 */
export interface DescribeClusterEndpointsResponse {
    /**
      * 总条数
      */
    TotalCount: number;
    /**
      * 接入点列表
      */
    EndpointSet: Array<Endpoint>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeResourcesByDealName请求参数结构体
 */
export interface DescribeResourcesByDealNameRequest {
    /**
      * 计费订单id（如果计费还没回调业务发货，可能出现错误码InvalidParameterValue.DealNameNotFound，这种情况需要业务重试DescribeResourcesByDealName接口直到成功）
      */
    DealName: string;
}
/**
 * ModifyClusterEndpointWanStatus返回参数结构体
 */
export interface ModifyClusterEndpointWanStatusResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ModifyClusterEndpointWanStatus请求参数结构体
 */
export interface ModifyClusterEndpointWanStatusRequest {
    /**
      * 集群ID
      */
    ClusterId: string;
    /**
      * 接入点ID
      */
    EndpointId: string;
    /**
      * 取值为：
 - OPEN：开启外网
 - CLOSE：关闭外网
      */
    WanStatus: string;
}
/**
 * RecoverCluster请求参数结构体
 */
export interface RecoverClusterRequest {
    /**
      * 集群ID
      */
    ClusterId: string;
    /**
      * 购买时长，单位：月。取值范围为[1,60]，默认值为1。
只有当PayMode为PREPAID时生效。
      */
    Period?: number;
}
/**
 * DescribeClusterInstances请求参数结构体
 */
export interface DescribeClusterInstancesRequest {
    /**
      * 集群ID
      */
    ClusterId: string;
    /**
      * 页码，取值范围为[1,INF)，默认值为1
      */
    PageNumber?: number;
    /**
      * 每页个数，取值范围为默认为[1,100]，默认值为20
      */
    PageSize?: number;
    /**
      * 目前支持查询条件包括：
 - InstanceId : 实例ID
 - InstanceName : 实例名
 - EndpointId : 接入点ID
 - Status : 实例状态
 - InstanceType : 实例类型
      */
    Filters?: Array<Filter>;
    /**
      * 排序字段，可选字段：
- CreateTime : 实例创建时间(默认值)
- PayPeriodEndTime : 实例过期时间
      */
    OrderBy?: string;
    /**
      * 排序方式，可选字段：
- DESC : 降序(默认值)
- ASC : 升序
      */
    OrderByType?: string;
}
/**
 * DeleteCluster请求参数结构体
 */
export interface DeleteClusterRequest {
    /**
      * 集群ID
      */
    ClusterId: string;
}
/**
 * 数据库账户信息
 */
export interface Account {
    /**
      * 数据库账号名
      */
    AccountName: string;
    /**
      * 集群ID
      */
    ClusterId: string;
    /**
      * 数据库账号描述
      */
    AccountDescription: string;
    /**
      * 数据库账号创建时间。按照RFC3339标准表示，并且使用东八区时区时间，格式为：YYYY-MM-DDThh:mm:ss+08:00。
      */
    CreateTime: string;
    /**
      * 数据库账号信息更新时间。按照RFC3339标准表示，并且使用东八区时区时间，格式为：YYYY-MM-DDThh:mm:ss+08:00。
      */
    UpdateTime: string;
}
/**
 * 集群的连接点信息，包含访问数据库的相关网络信息
 */
export interface Endpoint {
    /**
      * 连接点ID，集群内唯一
      */
    EndpointId: string;
    /**
      * 连接点所属的集群ID
      */
    ClusterId: string;
    /**
      * 连接点名字，默认和连接点ID一致
      */
    EndpointName: string;
    /**
      * 连接点类型
 - RW : 读写
 - RO : 只读
      */
    EndpointType: string;
    /**
      * 私有网络VPC实例ID
      */
    VpcId: string;
    /**
      * 私有网络VPC下子网实例ID
      */
    SubnetId: string;
    /**
      * 私有网络VPC下用于访问数据库的IP
      */
    PrivateIp: string;
    /**
      * 私有网络VPC下用于访问数据库的端口
      */
    PrivatePort: number;
    /**
      * 公共网络用户访问数据库的IP
      */
    WanIp: string;
    /**
      * 公共网络用户访问数据库的端口
      */
    WanPort: number;
    /**
      * 公共网络用户访问数据库的域名
      */
    WanDomain: string;
}
/**
 * RecoverClusterInstances返回参数结构体
 */
export interface RecoverClusterInstancesResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 资源ID信息，包括ClusterID和InstanceID
 */
export interface ResourceIdInfo {
    /**
      * 集群ID
      */
    ClusterId: string;
    /**
      * 实例ID列表
      */
    InstanceIdSet: Array<string>;
}
/**
 * RecoverCluster返回参数结构体
 */
export interface RecoverClusterResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 过滤条件
 */
export interface Filter {
    /**
      * 过滤条件名
      */
    Name: string;
    /**
      * 过滤条件值数组
      */
    Values: Array<string>;
    /**
      * true:精确匹配(默认值) false:(模糊匹配)
      */
    ExactMatch: boolean;
}
/**
 * DescribeClusterBackups返回参数结构体
 */
export interface DescribeClusterBackupsResponse {
    /**
      * 总条数
      */
    TotalCount: number;
    /**
      * 备份列表信息
      */
    BackupSet: Array<Backup>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeAccounts返回参数结构体
 */
export interface DescribeAccountsResponse {
    /**
      * 总条数
      */
    TotalCount: number;
    /**
      * 账号信息列表
      */
    AccountSet: Array<Account>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * TransformClusterPayMode请求参数结构体
 */
export interface TransformClusterPayModeRequest {
    /**
      * 集群ID
      */
    ClusterId: string;
    /**
      * 当前付费模式，目前只支持：POSTPAID_BY_HOUR(按小时后付费)
      */
    CurrentPayMode: string;
    /**
      * 目标付费模式，目前只支持：PREPAID(预付费)
      */
    TargetPayMode: string;
    /**
      * 购买时长，单位：月。取值范围为[1,60]，默认值为1。
      */
    Period?: number;
}
/**
 * 集群备份集信息
 */
export interface Backup {
    /**
      * 备份集ID，集群内唯一
      */
    BackupId: number;
    /**
      * 备份集类型，目前只支持 SNAPSHOT：快照
      */
    BackupType: string;
    /**
      * 备份集产生的方案，目前只支持 AUTO：自动
      */
    BackupMethod: string;
    /**
      * 备份集对应的数据时间。按照RFC3339标准表示，并且使用东八区时区时间，格式为：YYYY-MM-DDThh:mm:ss+08:00。
      */
    BackupDataTime: string;
    /**
      * 备份集数据大小，单位GiB
      */
    BackupDataSize: number;
    /**
      * 备份集对应的任务开始时间。按照RFC3339标准表示，并且使用东八区时区时间，格式为：YYYY-MM-DDThh:mm:ss+08:00。
      */
    BackupTaskStartTime: string;
    /**
      * 备份集对应的任务结束时间。按照RFC3339标准表示，并且使用东八区时区时间，格式为：YYYY-MM-DDThh:mm:ss+08:00。
      */
    BackupTaskEndTime: string;
    /**
      * 备份集对应的任务状态  SUCCESS：成功
      */
    BackupTaskStatus: string;
}
/**
 * RenewCluster请求参数结构体
 */
export interface RenewClusterRequest {
    /**
      * 集群ID
      */
    ClusterId: string;
    /**
      * 续费时间，单位：月。取值范围为[1,60]，默认值为1。
      */
    Period?: number;
}
/**
 * DescribeClusterEndpoints请求参数结构体
 */
export interface DescribeClusterEndpointsRequest {
    /**
      * 集群ID
      */
    ClusterId: string;
}
/**
 * ModifyClusterName返回参数结构体
 */
export interface ModifyClusterNameResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * IsolateClusterInstances返回参数结构体
 */
export interface IsolateClusterInstancesResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * RenewCluster返回参数结构体
 */
export interface RenewClusterResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * IsolateClusterInstances请求参数结构体
 */
export interface IsolateClusterInstancesRequest {
    /**
      * 集群ID
      */
    ClusterId: string;
    /**
      * 实例ID列表
      */
    InstanceIdSet: Array<string>;
}
/**
 * 集群下的实例信息
 */
export interface Instance {
    /**
      * 实例ID，集群下唯一
      */
    InstanceId: string;
    /**
      * 实例名字，默认和实例ID一致
      */
    InstanceName: string;
    /**
      * 集群ID
      */
    ClusterId: string;
    /**
      * 实例所在的访问点ID
      */
    EndpointId: string;
    /**
      * 地域
      */
    Region: string;
    /**
      * 可用区
      */
    Zone: string;
    /**
      * 数据库版本
      */
    DBVersion: string;
    /**
      * 实例状态
      */
    Status: string;
    /**
      * 实例状态中文含义
      */
    StatusDesc: string;
    /**
      * 实例创建时间。按照RFC3339标准表示，并且使用东八区时区时间，格式为：YYYY-MM-DDThh:mm:ss+08:00。
      */
    CreateTime: string;
    /**
      * 付费模式：
- PREPAID : 预付费
- POSTPAID_BY_HOUR : 按小时结算后付费

同一集群下付费模式需要保持一致。
      */
    PayMode: string;
    /**
      * 实例到期时间。同一集群下到期时间需要保持一致。按照RFC3339标准表示，并且使用东八区时区时间，格式为：YYYY-MM-DDThh:mm:ss+08:00。
      */
    PayPeriodEndTime: string;
    /**
      * CPU核数
      */
    CPU: number;
    /**
      * 内存大小，单位GiB
      */
    Memory: number;
    /**
      * 实例类型
 - RW：读写实例
 - RO：只读实例
      */
    InstanceType: string;
}
/**
 * IsolateCluster返回参数结构体
 */
export interface IsolateClusterResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ModifyAccountDescription请求参数结构体
 */
export interface ModifyAccountDescriptionRequest {
    /**
      * 集群ID
      */
    ClusterId: string;
    /**
      * 账号名字
      */
    AccountName: string;
    /**
      * 账号描述，0-256个字符
      */
    AccountDescription: string;
}
/**
 * ModifyAccountDescription返回参数结构体
 */
export interface ModifyAccountDescriptionResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * IsolateCluster请求参数结构体
 */
export interface IsolateClusterRequest {
    /**
      * 集群ID
      */
    ClusterId: string;
}
/**
 * ModifyClustersAutoRenewFlag请求参数结构体
 */
export interface ModifyClustersAutoRenewFlagRequest {
    /**
      * 集群ID列表
      */
    ClusterIdSet: Array<string>;
    /**
      * 是否自动续费，0-不 1-是。默认为0，只有当集群的PayMode为PREPAID时生效。
      */
    AutoRenewFlag: number;
}
/**
 * TransformClusterPayMode返回参数结构体
 */
export interface TransformClusterPayModeResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 集群信息
 */
export interface Cluster {
    /**
      * 集群ID，集群的唯一标识
      */
    ClusterId: string;
    /**
      * 集群名字，不修改时默认和集群ID相同
      */
    ClusterName: string;
    /**
      * 地域
      */
    Region: string;
    /**
      * 可用区
      */
    Zone: string;
    /**
      * 数据库版本
      */
    DBVersion: string;
    /**
      * 项目ID
      */
    ProjectId: number;
    /**
      * 集群状态。目前包括
 - creating ：创建中
 - running : 运行中
 - isolating : 隔离中
 - isolated : 已隔离
 - recovering : 恢复中
 - deleting : 删除中
 - deleted : 已删除
      */
    Status: string;
    /**
      * 集群状态中文含义
      */
    StatusDesc: string;
    /**
      * 集群创建时间。按照RFC3339标准表示，并且使用东八区时区时间，格式为：YYYY-MM-DDThh:mm:ss+08:00。
      */
    CreateTime: string;
    /**
      * 存储当前使用量，单位GiB
      */
    StorageUsed: number;
    /**
      * 存储最大使用量，单位GiB
      */
    StorageLimit: number;
    /**
      * 付费模式：
 - PREPAID : 预付费，即包年包月
 - POSTPAID_BY_HOUR : 按小时结算后付费
      */
    PayMode: string;
    /**
      * 预付费集群到期时间。按照RFC3339标准表示，并且使用东八区时区时间，格式为：YYYY-MM-DDThh:mm:ss+08:00。
      */
    PayPeriodEndTime: string;
    /**
      * 预付费集群自动续费标签
 - 0 : 到期不自动续费
 - 1 : 到期自动续费
      */
    AutoRenewFlag: number;
    /**
      * 数据库字符集
      */
    DBCharset: string;
    /**
      * 集群内实例的数量
      */
    InstanceCount: number;
    /**
      * 集群内访问点信息
      */
    EndpointSet: Array<Endpoint>;
}
/**
 * DescribeClusters返回参数结构体
 */
export interface DescribeClustersResponse {
    /**
      * 总条数
      */
    TotalCount: number;
    /**
      * 集群列表信息
      */
    ClusterSet: Array<Cluster>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeResourcesByDealName返回参数结构体
 */
export interface DescribeResourcesByDealNameResponse {
    /**
      * 资源ID信息列表
      */
    ResourceIdInfoSet: Array<ResourceIdInfo>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CloneClusterToPointInTime请求参数结构体
 */
export interface CloneClusterToPointInTimeRequest {
    /**
      * 可用区
      */
    Zone: string;
    /**
      * 数据库版本，目前仅支持 10.17
      */
    DBVersion: string;
    /**
      * CPU核数。取值参考文档【购买指南】
      */
    CPU: number;
    /**
      * 内存大小，单位GiB。取值参考文档【购买指南】
      */
    Memory: number;
    /**
      * 私有网络ID
      */
    VpcId: string;
    /**
      * 已配置的私有网络中的子网ID
      */
    SubnetId: string;
    /**
      * 集群付费模式
- PREPAID：预付费，即包年包月
- POSTPAID_BY_HOUR：按小时后付费
      */
    PayMode: string;
    /**
      * 对应的备份数据来源集群ID
      */
    SourceClusterId: string;
    /**
      * 对应的备份数据时间点。按照RFC3339标准表示，并且使用东八区时区时间。格式为：YYYY-MM-DDThh:mm:ss+08:00。
      */
    SourceDataPoint: string;
    /**
      * 集群名，1-60个字符，可以包含中文、英文、数字和符号"-"、"_"、"."。不输入此参数时默认与ClusterId保持一致。
      */
    ClusterName?: string;
    /**
      * 项目Id，默认为0表示默认项目
      */
    ProjectId?: number;
    /**
      * 连接数据库时，Endpoint使用的端口。取值范围为[1,65534]，默认值为5432
      */
    Port?: number;
    /**
      * 集群下实例数量。取值范围为[1,4]，默认值为1
      */
    InstanceCount?: number;
    /**
      * 购买时长，单位：月。取值范围为[1,60]，默认值为1。
只有当PayMode为PREPAID时生效。
      */
    Period?: number;
    /**
      * 是否自动续费，0-不 1-是。默认为0，只有当PayMode为PREPAID时生效。
      */
    AutoRenewFlag?: number;
}
/**
 * DescribeClusterRecoveryTimeRange请求参数结构体
 */
export interface DescribeClusterRecoveryTimeRangeRequest {
    /**
      * 集群ID
      */
    ClusterId: string;
    /**
      * 期望的回档时间点，传入从集群创建时间到当前时间之间的时间点。按照RFC3339标准表示，并且使用东八区时区时间，格式为：YYYY-MM-DDThh:mm:ss+08:00。
      */
    DataPoint: string;
}
/**
 * DescribeAccounts请求参数结构体
 */
export interface DescribeAccountsRequest {
    /**
      * 集群ID
      */
    ClusterId: string;
}
