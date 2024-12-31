/**
 * DescribeAutoScalingConfiguration返回参数结构体
 */
export interface DescribeAutoScalingConfigurationResponse {
    /**
     * 集群ID。
     */
    ClusterId?: string;
    /**
     * 任务连续等待时间，队列的任务处于连续等待的时间。单位秒。
     */
    ExpansionBusyTime?: number;
    /**
     * 节点连续空闲（未运行作业）时间，一个节点连续处于空闲状态时间。
     */
    ShrinkIdleTime?: number;
    /**
     * 扩容队列配置概览列表。
     */
    QueueConfigs?: Array<QueueConfigOverview>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeClusterStorageOption请求参数结构体
 */
export interface DescribeClusterStorageOptionRequest {
    /**
     * 集群ID。
     */
    ClusterId: string;
}
/**
 * 集群概览信息。
 */
export interface ClusterOverview {
    /**
     * 集群ID。
     */
    ClusterId?: string;
    /**
     * 集群状态。取值范围：<br><li>PENDING：创建中</li><br><li>INITING：初始化中</li><br><li>INIT_FAILED：初始化失败</li><br><li>RUNNING：运行中</li><br><li>TERMINATING：销毁中</li>
     */
    ClusterStatus?: string;
    /**
     * 集群名称。
     */
    ClusterName?: string;
    /**
     * 集群位置信息。
     */
    Placement?: Placement;
    /**
     * 集群创建时间。
     */
    CreateTime?: string;
    /**
     * 集群调度器。
     */
    SchedulerType?: string;
    /**
     * 计算节点数量。
     */
    ComputeNodeCount?: number;
    /**
     * 计算节点概览。
     */
    ComputeNodeSet?: Array<ComputeNodeOverview>;
    /**
     * 管控节点数量。
     */
    ManagerNodeCount?: number;
    /**
     * 管控节点概览。
     */
    ManagerNodeSet?: Array<ManagerNodeOverview>;
    /**
     * 登录节点概览。
     */
    LoginNodeSet?: Array<LoginNodeOverview>;
    /**
     * 登录节点数量。
     */
    LoginNodeCount?: number;
    /**
     * 集群所属私有网络ID。
     */
    VpcId?: string;
}
/**
 * 队列信息概览。
 */
export interface QueueOverview {
    /**
     * 队列名称。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    QueueName?: string;
}
/**
 * DescribeClusters请求参数结构体
 */
export interface DescribeClustersRequest {
    /**
     * 集群ID列表。通过该参数可以指定需要查询信息的集群列表。<br>如果您不指定该参数，则返回Limit数量以内的集群信息。
     */
    ClusterIds?: Array<string>;
    /**
     * 偏移量，默认为0。关于`Offset`的更进一步介绍请参考 API [简介](https://cloud.tencent.com/document/api/213/15688)中的相关小节。
     */
    Offset?: number;
    /**
     * 返回数量，默认为20，最大值为100。关于`Limit`的更进一步介绍请参考 API [简介](https://cloud.tencent.com/document/api/213/15688)中的相关小节。
     */
    Limit?: number;
}
/**
 * SetAutoScalingConfiguration请求参数结构体
 */
export interface SetAutoScalingConfigurationRequest {
    /**
     * 集群ID。
     */
    ClusterId: string;
    /**
     * 任务连续等待时间，队列的任务处于连续等待的时间。单位秒。默认值120。
     */
    ExpansionBusyTime?: number;
    /**
     * 节点连续空闲（未运行作业）时间，一个节点连续处于空闲状态时间。单位秒。默认值300。
     */
    ShrinkIdleTime?: number;
    /**
     * 扩容队列配置列表。
     */
    QueueConfigs?: Array<QueueConfig>;
    /**
     * 是否只预检此次请求。
  true：发送检查请求，不会绑定弹性伸缩组。检查项包括是否填写了必需参数，请求格式，业务限制。
  如果检查不通过，则返回对应错误码；
  如果检查通过，则返回RequestId。
  false（默认）：发送正常请求，通过检查后直接绑定弹性伸缩组。
     */
    DryRun?: boolean;
}
/**
 * 节点概览信息。
 */
export interface NodeOverview {
    /**
     * 节点实例ID。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    InstanceId?: string;
    /**
     * 节点所在可用区信息。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Zone?: string;
    /**
     * 节点状态。<br><li>SUBMITTED：已完成提交。<br><li>CREATING：创建中。<br><li>CREATED：完成创建。<br><li>INITING：初始化中。<br><li>INIT_FAILED：初始化失败。<br><li>RUNNING：运行中。<br><li>DELETING：销毁中。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    NodeState?: string;
    /**
     * 镜像ID。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ImageId?: string;
    /**
     * 节点所属队列名称。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    QueueName?: string;
    /**
     * 节点角色。<br><li>Manager：管控节点。<br><li>Compute：计算节点。<br><li>Login：登录节点。<br><li>ManagerBackup：备用管控节点。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    NodeRole?: string;
    /**
     * 节点类型。<br><li>STATIC：静态节点。<br><li>DYNAMIC：弹性节点。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    NodeType?: string;
}
/**
 * DescribeNodes请求参数结构体
 */
export interface DescribeNodesRequest {
    /**
     * 集群ID。
     */
    ClusterId: string;
    /**
     * <li><strong>queue-name</strong></li> <p style="padding-left: 30px;">按照【<strong>队列名称</strong>】进行过滤。队列名称形如：compute。</p><p style="padding-left: 30px;">类型：String</p><p style="padding-left: 30px;">必选：否</p><p style="padding-left: 30px;"><li><strong>node-role</strong></li> <p style="padding-left: 30px;">按照【<strong>节点角色</strong>】进行过滤。节点角色形如：Manager。（Manager：管控节点。Compute：计算节点。Login：登录节点。ManagerBackup：备用管控节点。）</p><p style="padding-left: 30px;">类型：String</p><p style="padding-left: 30px;">必选：否</p><p style="padding-left: 30px;"><li><strong>node-type</strong></li> <p style="padding-left: 30px;">按照【<strong>节点类型</strong>】进行过滤。节点类型形如：STATIC。(STATIC：静态节点。DYNAMIC：弹性节点。)</p><p style="padding-left: 30px;">类型：String</p><p style="padding-left: 30px;">必选：否</p><p style="padding-left: 30px;">每次请求的`Filters`的上限为10，`Filter.Values`的上限为5。
     */
    Filters?: Array<Filter>;
    /**
     * 偏移量，默认为0。关于`Offset`的更进一步介绍请参考 API [简介](https://cloud.tencent.com/document/api/213/15688)中的相关小节。
     */
    Offset?: number;
    /**
     * 返回数量，默认为20，最大值为100。关于`Limit`的更进一步介绍请参考 API [简介](https://cloud.tencent.com/document/api/213/15688)中的相关小节。
     */
    Limit?: number;
}
/**
 * DeleteNodes返回参数结构体
 */
export interface DeleteNodesResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * AddClusterStorageOption返回参数结构体
 */
export interface AddClusterStorageOptionResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 集群存储选项概览信息。
 */
export interface StorageOptionOverview {
    /**
     * CFS存储选项概览信息列表。
     */
    CFSOptions: Array<CFSOptionOverview>;
    /**
     * GooseFS存储选项概览信息列表。
     */
    GooseFSOptions: Array<GooseFSOptionOverview>;
}
/**
 * DeleteCluster返回参数结构体
 */
export interface DeleteClusterResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 弹性扩容节点配置信息。
 */
export interface ExpansionNodeConfig {
    /**
     * 扩容实例所在的位置。
     */
    Placement: Placement;
    /**
     * 节点[计费类型](https://cloud.tencent.com/document/product/213/2180)。<br><li>PREPAID：预付费，即包年包月</li><br><li>POSTPAID_BY_HOUR：按小时后付费</li><br><li>SPOTPAID：竞价付费<br>默认值：POSTPAID_BY_HOUR。</li>
     */
    InstanceChargeType?: string;
    /**
     * 预付费模式，即包年包月相关参数设置。通过该参数可以指定包年包月节点的购买时长、是否设置自动续费等属性。若指定节点的付费模式为预付费则该参数必传。
     */
    InstanceChargePrepaid?: InstanceChargePrepaid;
    /**
     * 节点机型。不同实例机型指定了不同的资源规格。 <br><li>具体取值可通过调用接口[DescribeInstanceTypeConfigs](https://cloud.tencent.com/document/api/213/15749)来获得最新的规格表或参见[实例规格](https://cloud.tencent.com/document/product/213/11518)描述。</li>
     */
    InstanceType?: string;
    /**
     * 私有网络相关信息配置。
     */
    VirtualPrivateCloud?: VirtualPrivateCloud;
}
/**
 * 节点活动信息。
 */
export interface NodeActivity {
    /**
     * 节点活动所在的实例ID。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    NodeInstanceId?: string;
    /**
     * 节点活动状态。取值范围：<br><li>RUNNING：运行中</li><br><li>SUCCESSFUL：活动成功</li><br><li>FAILED：活动失败</li>
     */
    NodeActivityStatus?: string;
    /**
     * 节点活动状态码。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    NodeActivityStatusCode?: string;
    /**
     * 节点活动状态原因。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    NodeActivityStatusReason?: string;
}
/**
 * 描述了实例的抽象位置
 */
export interface Placement {
    /**
     * 实例所属的可用区名称。该参数可以通过调用  [DescribeZones](https://cloud.tencent.com/document/product/213/15707) 的返回值中的Zone字段来获取。
     */
    Zone: string;
}
/**
 * AddQueue请求参数结构体
 */
export interface AddQueueRequest {
    /**
     * 集群ID。
     */
    ClusterId: string;
    /**
     * 队列名称。<br><li>最多支持32个字符。
     */
    QueueName: string;
}
/**
 * 登录节点概览。
 */
export interface LoginNodeOverview {
    /**
     * 登录节点ID。
     */
    NodeId: string;
}
/**
 * 描述CFS文件系统版本和挂载信息
 */
export interface CFSOption {
    /**
     * 文件系统本地挂载路径。
     */
    LocalPath: string;
    /**
     * 文件系统远程挂载ip及路径。
     */
    RemotePath: string;
    /**
     * 文件系统协议类型，默认值NFS 3.0。
  <li>NFS 3.0。
  <li>NFS 4.0。
  <li>TURBO。
     */
    Protocol?: string;
    /**
     * 文件系统存储类型，默认值SD；其中 SD 为通用标准型标准型存储， HP为通用性能型存储， TB为turbo标准型， TP 为turbo性能型。
     */
    StorageType?: string;
}
/**
 * 符合条件的集群活动信息。
 */
export interface ClusterActivity {
    /**
     * 集群ID。
     */
    ClusterId?: string;
    /**
     * 集群活动ID。
     */
    ActivityId?: string;
    /**
     * 集群活动类型。取值范围：<br><li>CreateAndAddNodes：创建实例并添加进集群</li><br><li>RemoveNodesFromCluster：从集群移除实例</li><br><li>TerminateNodes：销毁实例</li><br><li>MountStorageOption：增加挂载选项并进行挂载</li><br><li>UmountStorageOption：删除集群挂载存储选项并解挂载</li>
     */
    ActivityType?: string;
    /**
     * 集群活动状态。取值范围：<br><li>PENDING：等待运行</li><br><li>RUNNING：运行中</li><br><li>SUCCESSFUL：活动成功</li><br><li>PARTIALLY_SUCCESSFUL：活动部分成功</li><br><li>FAILED：活动失败</li>
     */
    ActivityStatus?: string;
    /**
     * 集群活动状态码。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ActivityStatusCode?: string;
    /**
     * 集群活动结果详情。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ResultDetail?: string;
    /**
     * 集群活动起因。
     */
    Cause?: string;
    /**
     * 集群活动描述。
     */
    Description?: string;
    /**
     * 集群活动相关节点活动集合。
     */
    RelatedNodeActivitySet?: Array<NodeActivity>;
    /**
     * 集群活动开始时间。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    StartTime?: string;
    /**
     * 集群活动结束时间。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    EndTime?: string;
}
/**
 * CreateCluster返回参数结构体
 */
export interface CreateClusterResponse {
    /**
     * 集群ID。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ClusterId?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeQueues请求参数结构体
 */
export interface DescribeQueuesRequest {
    /**
     * 集群ID。
     */
    ClusterId: string;
    /**
     * 偏移量，默认为0。关于`Offset`的更进一步介绍请参考 API [简介](https://cloud.tencent.com/document/api/213/15688)中的相关小节。
     */
    Offset?: number;
    /**
     * 返回数量，默认为20，最大值为100。关于`Limit`的更进一步介绍请参考 API [简介](https://cloud.tencent.com/document/api/213/15688)中的相关小节。
     */
    Limit?: number;
}
/**
 * SetAutoScalingConfiguration返回参数结构体
 */
export interface SetAutoScalingConfigurationResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CreateCluster请求参数结构体
 */
export interface CreateClusterRequest {
    /**
     * 集群中实例所在的位置。
     */
    Placement: Placement;
    /**
     * 指定管理节点。
     */
    ManagerNode?: ManagerNode;
    /**
     * 指定管理节点的数量。默认取值：1。取值范围：1～2。
     */
    ManagerNodeCount?: number;
    /**
     * 指定计算节点。
     */
    ComputeNode?: ComputeNode;
    /**
     * 指定计算节点的数量。默认取值：0。
     */
    ComputeNodeCount?: number;
    /**
     * 调度器类型。默认取值：SLURM。<br><li>SGE：SGE调度器。</li><br><li>SLURM：SLURM调度器。</li>
     */
    SchedulerType?: string;
    /**
     * 指定有效的[镜像](https://cloud.tencent.com/document/product/213/4940)ID，格式形如`img-xxx`。目前支持部分公有镜像和自定义镜像。
     */
    ImageId?: string;
    /**
     * 私有网络相关信息配置。
     */
    VirtualPrivateCloud?: VirtualPrivateCloud;
    /**
     * 集群登录设置。
     */
    LoginSettings?: LoginSettings;
    /**
     * 集群中实例所属安全组。该参数可以通过调用 [DescribeSecurityGroups](https://cloud.tencent.com/document/api/215/15808) 的返回值中的sgId字段来获取。若不指定该参数，则绑定默认安全组。
     */
    SecurityGroupIds?: Array<string>;
    /**
     * 用于保证请求幂等性的字符串。该字符串由客户生成，需保证不同请求之间唯一，最大值不超过64个ASCII字符。若不指定该参数，则无法保证请求的幂等性。
     */
    ClientToken?: string;
    /**
     * 是否只预检此次请求。
  true：发送检查请求，不会创建实例。检查项包括是否填写了必需参数，请求格式，业务限制和云服务器库存。
  如果检查不通过，则返回对应错误码；
  如果检查通过，则返回RequestId.
  false（默认）：发送正常请求，通过检查后直接创建实例
     */
    DryRun?: boolean;
    /**
     * 域名字服务类型。默认取值：NIS。<li>NIS：NIS域名字服务。</li>
     */
    AccountType?: string;
    /**
     * 集群显示名称。
     */
    ClusterName?: string;
    /**
     * 集群存储选项
     */
    StorageOption?: StorageOption;
    /**
     * 指定登录节点。
     */
    LoginNode?: LoginNode;
    /**
     * 指定登录节点的数量。默认取值：0。取值范围：0～10。
     */
    LoginNodeCount?: number;
    /**
     * 创建集群时同时绑定的标签对说明。
     */
    Tags?: Array<Tag>;
    /**
     * 弹性伸缩类型。<br><li>AS：集群自动扩缩容由[弹性伸缩](https://cloud.tencent.com/document/product/377/3154)产品实现。</li><br><li>THPC_AS：集群自动扩缩容由THPC产品内部实现。</li>
     */
    AutoScalingType?: string;
}
/**
 * AddQueue返回参数结构体
 */
export interface AddQueueResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeClusterStorageOption返回参数结构体
 */
export interface DescribeClusterStorageOptionResponse {
    /**
     * 集群存储选项信息概览。
     */
    StorageOption?: StorageOptionOverview;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeQueues返回参数结构体
 */
export interface DescribeQueuesResponse {
    /**
     * 队列概览信息列表。
     */
    QueueSet?: Array<QueueOverview>;
    /**
     * 符合条件的节点数量。
     */
    TotalCount?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * GooseFS存储选项概览信息。
 */
export interface GooseFSOptionOverview {
    /**
     * 文件系统本地挂载路径。
     */
    LocalPath?: string;
    /**
     * 文件系统远程挂载路径。
     */
    RemotePath?: string;
    /**
     * 文件系统master的ip和端口。
     */
    Masters?: Array<string>;
}
/**
 * 扩容队列配置。
 */
export interface QueueConfig {
    /**
     * 队列名称。
     */
    QueueName: string;
    /**
     * 队列中弹性节点数量最小值。取值范围0～200。
     */
    MinSize?: number;
    /**
     * 队列中弹性节点数量最大值。取值范围0～200。
     */
    MaxSize?: number;
    /**
     * 是否开启自动扩容。
     */
    EnableAutoExpansion?: boolean;
    /**
     * 是否开启自动缩容。
     */
    EnableAutoShrink?: boolean;
    /**
     * 指定有效的[镜像](https://cloud.tencent.com/document/product/213/4940)ID，格式形如`img-xxx`。目前仅支持公有镜和特定自定义镜像。
     */
    ImageId?: string;
    /**
     * 节点系统盘配置信息。若不指定该参数，则按照系统默认值进行分配。
     */
    SystemDisk?: SystemDisk;
    /**
     * 节点数据盘配置信息。若不指定该参数，则默认不购买数据盘。支持购买的时候指定21块数据盘，其中最多包含1块LOCAL_BASIC数据盘或者LOCAL_SSD数据盘，最多包含20块CLOUD_BASIC数据盘、CLOUD_PREMIUM数据盘或者CLOUD_SSD数据盘。
     */
    DataDisks?: Array<DataDisk>;
    /**
     * 公网带宽相关信息设置。若不指定该参数，则默认公网带宽为0Mbps。
     */
    InternetAccessible?: InternetAccessible;
    /**
     * 扩容节点配置信息。
     */
    ExpansionNodeConfigs?: Array<ExpansionNodeConfig>;
}
/**
 * 描述了实例的计费模式
 */
export interface InstanceChargePrepaid {
    /**
     * 购买实例的时长，单位：月。取值范围：1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 24, 36, 48, 60。
     */
    Period: number;
    /**
     * 自动续费标识。取值范围：
  NOTIFY_AND_AUTO_RENEW：通知过期且自动续费
  NOTIFY_AND_MANUAL_RENEW：通知过期不自动续费
  DISABLE_NOTIFY_AND_MANUAL_RENEW：不通知过期不自动续费
  
  默认取值：NOTIFY_AND_MANUAL_RENEW。若该参数指定为NOTIFY_AND_AUTO_RENEW，在账户余额充足的情况下，实例到期后将按月自动续费。
     */
    RenewFlag?: string;
}
/**
 * 标签键值对。
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
 * 登录节点信息。
 */
export interface LoginNode {
    /**
     * 节点[计费类型](https://cloud.tencent.com/document/product/213/2180)。<br><li>PREPAID：预付费，即包年包月</li><br><li>POSTPAID_BY_HOUR：按小时后付费</li><br><li>SPOTPAID：竞价付费<br>默认值：POSTPAID_BY_HOUR。</li>
     */
    InstanceChargeType?: string;
    /**
     * 预付费模式，即包年包月相关参数设置。通过该参数可以指定包年包月节点的购买时长、是否设置自动续费等属性。若指定节点的付费模式为预付费则该参数必传。
     */
    InstanceChargePrepaid?: InstanceChargePrepaid;
    /**
     * 节点机型。不同实例机型指定了不同的资源规格。 <br><li>具体取值可通过调用接口[DescribeInstanceTypeConfigs](https://cloud.tencent.com/document/api/213/15749)来获得最新的规格表或参见[实例规格](https://cloud.tencent.com/document/product/213/11518)描述。</li>
     */
    InstanceType?: string;
    /**
     * 节点系统盘配置信息。若不指定该参数，则按照系统默认值进行分配。
     */
    SystemDisk?: Array<SystemDisk>;
    /**
     * 节点数据盘配置信息。若不指定该参数，则默认不购买数据盘。支持购买的时候指定21块数据盘，其中最多包含1块LOCAL_BASIC数据盘或者LOCAL_SSD数据盘，最多包含20块CLOUD_BASIC数据盘、CLOUD_PREMIUM数据盘或者CLOUD_SSD数据盘。
     */
    DataDisks?: Array<DataDisk>;
    /**
     * 公网带宽相关信息设置。若不指定该参数，则默认公网带宽为0Mbps。
     */
    InternetAccessible?: Array<InternetAccessible>;
    /**
     * 节点显示名称。<br><li> 不指定节点显示名称则默认显示‘未命名’。 最多支持60个字符。</li>
     */
    InstanceName?: string;
}
/**
 * BindAutoScalingGroup返回参数结构体
 */
export interface BindAutoScalingGroupResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 管控节点概览。
 */
export interface ManagerNodeOverview {
    /**
     * 管控节点ID。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    NodeId: string;
}
/**
 * 管控节点信息
 */
export interface ManagerNode {
    /**
     * 节点[计费类型](https://cloud.tencent.com/document/product/213/2180)。<br><li>PREPAID：预付费，即包年包月</li><br><li>POSTPAID_BY_HOUR：按小时后付费</li><br><li>SPOTPAID：竞价付费<br>默认值：POSTPAID_BY_HOUR。</li>
     */
    InstanceChargeType?: string;
    /**
     * 预付费模式，即包年包月相关参数设置。通过该参数可以指定包年包月节点的购买时长、是否设置自动续费等属性。若指定节点的付费模式为预付费则该参数必传。
     */
    InstanceChargePrepaid?: InstanceChargePrepaid;
    /**
     * 节点机型。不同实例机型指定了不同的资源规格。 <br><li>具体取值可通过调用接口[DescribeInstanceTypeConfigs](https://cloud.tencent.com/document/api/213/15749)来获得最新的规格表或参见[实例规格](https://cloud.tencent.com/document/product/213/11518)描述。</li>
     */
    InstanceType?: string;
    /**
     * 节点系统盘配置信息。若不指定该参数，则按照系统默认值进行分配。
     */
    SystemDisk?: SystemDisk;
    /**
     * 节点数据盘配置信息。若不指定该参数，则默认不购买数据盘。支持购买的时候指定21块数据盘，其中最多包含1块LOCAL_BASIC数据盘或者LOCAL_SSD数据盘，最多包含20块CLOUD_BASIC数据盘、CLOUD_PREMIUM数据盘或者CLOUD_SSD数据盘。
     */
    DataDisks?: Array<DataDisk>;
    /**
     * 公网带宽相关信息设置。若不指定该参数，则默认公网带宽为0Mbps。
     */
    InternetAccessible?: InternetAccessible;
    /**
     * 节点显示名称。<br><li> 不指定节点显示名称则默认显示‘未命名’。 </li><li>购买多个节点，如果指定模式串`{R:x}`，表示生成数字[`[x, x+n-1]`，其中`n`表示购买节点的数量，例如`server_{R:3}`，购买1个时，节点显示名称为`server_3`；购买2个时，节点显示名称分别为`server_3`，`server_4`。支持指定多个模式串`{R:x}`。 购买多个节点，如果不指定模式串，则在节点显示名称添加后缀`1、2...n`，其中`n`表示购买节点的数量，例如`server_`，购买2个时，节点显示名称分别为`server_1`，`server_2`。</li><li> 最多支持60个字符（包含模式串）。</li>
     */
    InstanceName?: string;
}
/**
 * DeleteCluster请求参数结构体
 */
export interface DeleteClusterRequest {
    /**
     * 集群ID。
     */
    ClusterId: string;
}
/**
 * 计算节点概览。
 */
export interface ComputeNodeOverview {
    /**
     * 计算节点ID。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    NodeId: string;
}
/**
 * 描述了操作系统所在块设备即系统盘的信息
 */
export interface SystemDisk {
    /**
     * 系统盘类型。系统盘类型限制详见存储概述。取值范围：
  LOCAL_BASIC：本地硬盘
  LOCAL_SSD：本地SSD硬盘
  CLOUD_BASIC：普通云硬盘
  CLOUD_SSD：SSD云硬盘
  CLOUD_PREMIUM：高性能云硬盘
  
  默认取值：当前有库存的硬盘类型。
     */
    DiskType?: string;
    /**
     * 系统盘大小，单位：GB。默认值为 50
     */
    DiskSize?: number;
}
/**
 * 描述了实例登录相关配置与信息。
 */
export interface LoginSettings {
    /**
     * 实例登录密码。不同操作系统类型密码复杂度限制不一样，具体如下：<br><li>Linux实例密码必须8到30位，至少包括两项[a-z]，[A-Z]、[0-9] 和 [( ) \` ~ ! @ # $ % ^ & *  - + = | { } [ ] : ; ' , . ? / ]中的特殊符号。</li><br><li>Windows实例密码必须12到30位，至少包括三项[a-z]，[A-Z]，[0-9] 和 [( ) \` ~ ! @ # $ % ^ & * - + = | { } [ ] : ; ' , . ? /]中的特殊符号。</li><br><br>若不指定该参数，则由系统随机生成密码，并通过站内信方式通知到用户。
     */
    Password?: string;
}
/**
 * 描述GooseFS挂载信息
 */
export interface GooseFSOption {
    /**
     * 文件系统本地挂载路径。
     */
    LocalPath: string;
    /**
     * 文件系统远程挂载路径。
     */
    RemotePath: string;
    /**
     * 文件系统master的ip和端口。
     */
    Masters: Array<string>;
}
/**
 * DescribeClusterActivities请求参数结构体
 */
export interface DescribeClusterActivitiesRequest {
    /**
     * 集群ID。通过该参数指定需要查询活动历史记录的集群。
     */
    ClusterId: string;
    /**
     * 偏移量，默认为0。关于`Offset`的更进一步介绍请参考 API [简介](https://cloud.tencent.com/document/api/213/15688)中的相关小节。
     */
    Offset?: number;
    /**
     * 返回数量，默认为20，最大值为100。关于`Limit`的更进一步介绍请参考 API [简介](https://cloud.tencent.com/document/api/213/15688)中的相关小节。
     */
    Limit?: number;
}
/**
 * DeleteQueue请求参数结构体
 */
export interface DeleteQueueRequest {
    /**
     * 集群ID。
     */
    ClusterId: string;
    /**
     * 队列名称。<br><li>最多支持32个字符。
     */
    QueueName: string;
}
/**
 * >描述键值对过滤器，用于条件过滤查询。例如过滤ID、名称、状态等
> * 若存在多个`Filter`时，`Filter`间的关系为逻辑与（`AND`）关系。
> * 若同一个`Filter`存在多个`Values`，同一`Filter`下`Values`间的关系为逻辑或（`OR`）关系。
 */
export interface Filter {
    /**
     * 需要过滤的字段。
     */
    Name: string;
    /**
     * 字段的过滤值。
     */
    Values: Array<string>;
}
/**
 * AddNodes请求参数结构体
 */
export interface AddNodesRequest {
    /**
     * 集群中实例所在的位置。
     */
    Placement: Placement;
    /**
     * 集群ID。
     */
    ClusterId: string;
    /**
     * 私有网络相关信息配置。
     */
    VirtualPrivateCloud: VirtualPrivateCloud;
    /**
     * 添加节点数量。
     */
    Count: number;
    /**
     * 指定有效的[镜像](https://cloud.tencent.com/document/product/213/4940)ID，格式形如`img-xxx`。目前仅支持公有镜像和特定自定义镜像。
     */
    ImageId?: string;
    /**
     * 节点[计费类型](https://cloud.tencent.com/document/product/213/2180)。<br><li>PREPAID：预付费，即包年包月</li><br><li>POSTPAID_BY_HOUR：按小时后付费</li><br><li>SPOTPAID：竞价付费<br>默认值：POSTPAID_BY_HOUR。</li>
     */
    InstanceChargeType?: string;
    /**
     * 预付费模式，即包年包月相关参数设置。通过该参数可以指定包年包月节点的购买时长、是否设置自动续费等属性。若指定节点的付费模式为预付费则该参数必传。
     */
    InstanceChargePrepaid?: InstanceChargePrepaid;
    /**
     * 节点机型。不同实例机型指定了不同的资源规格。<br><li>具体取值可通过调用接口[DescribeInstanceTypeConfigs](https://cloud.tencent.com/document/api/213/15749)来获得最新的规格表或参见[实例规格](https://cloud.tencent.com/document/product/213/11518)描述。</li>
     */
    InstanceType?: string;
    /**
     * 节点系统盘配置信息。若不指定该参数，则按照系统默认值进行分配。
     */
    SystemDisk?: Array<SystemDisk>;
    /**
     * 节点数据盘配置信息。若不指定该参数，则默认不购买数据盘。支持购买的时候指定21块数据盘，其中最多包含1块LOCAL_BASIC数据盘或者LOCAL_SSD数据盘，最多包含20块CLOUD_BASIC数据盘、CLOUD_PREMIUM数据盘或者CLOUD_SSD数据盘。
     */
    DataDisks?: Array<DataDisk>;
    /**
     * 公网带宽相关信息设置。若不指定该参数，则默认公网带宽为0Mbps。
     */
    InternetAccessible?: InternetAccessible;
    /**
     * 节点显示名称。
  不指定节点显示名称则默认显示‘未命名’。
  最多支持60个字符。
     */
    InstanceName?: string;
    /**
     * 集群登录设置。
     */
    LoginSettings?: LoginSettings;
    /**
     * 集群中实例所属安全组。该参数可以通过调用 [DescribeSecurityGroups](https://cloud.tencent.com/document/api/215/15808) 的返回值中的sgId字段来获取。若不指定该参数，则绑定默认安全组。
     */
    SecurityGroupIds?: Array<string>;
    /**
     * 用于保证请求幂等性的字符串。该字符串由客户生成，需保证不同请求之间唯一，最大值不超过64个ASCII字符。若不指定该参数，则无法保证请求的幂等性。
     */
    ClientToken?: string;
    /**
     * 队列名称。不指定则为默认队列。<li>SLURM默认队列为：compute。</li><li>SGE默认队列为：all.q。</li>
     */
    QueueName?: string;
    /**
     * 添加节点角色。默认值：Compute<br><li>Compute：计算节点。</li><br><li>Login：登录节点。</li>
     */
    NodeRole?: string;
    /**
     * 是否只预检此次请求。
  true：发送检查请求，不会创建实例。检查项包括是否填写了必需参数，请求格式，业务限制和云服务器库存。
  如果检查不通过，则返回对应错误码；
  如果检查通过，则返回RequestId.
  false（默认）：发送正常请求，通过检查后直接创建实例
     */
    DryRun?: boolean;
    /**
     * 添加节点类型。默认取值：STATIC。<li>STATIC：静态节点，不会参与弹性伸缩流程。</li><li>DYNAMIC：弹性节点，会被弹性缩容的节点。管控节点和登录节点不支持此参数。</li>
     */
    NodeType?: string;
}
/**
 * CFS存储选项概览信息。
 */
export interface CFSOptionOverview {
    /**
     * 文件系统本地挂载路径。
     */
    LocalPath: string;
    /**
     * 文件系统远程挂载ip及路径。
     */
    RemotePath: string;
    /**
     * 文件系统协议类型。
  <li>NFS 3.0。
  <li>NFS 4.0。
  <li>TURBO。
     */
    Protocol: string;
    /**
     * 文件系统存储类型，默认值SD；其中 SD 为通用标准型标准型存储， HP为通用性能型存储， TB为turbo标准型， TP 为turbo性能型。
     */
    StorageType: string;
}
/**
 * DeleteClusterStorageOption请求参数结构体
 */
export interface DeleteClusterStorageOptionRequest {
    /**
     * 集群ID。
     */
    ClusterId: string;
    /**
     * 本地挂载路径。
     */
    LocalPath: string;
}
/**
 * AddClusterStorageOption请求参数结构体
 */
export interface AddClusterStorageOptionRequest {
    /**
     * 集群ID。
     */
    ClusterId: string;
    /**
     * 集群存储选项。
     */
    StorageOption: StorageOption;
}
/**
 * 扩容队列配置概览。
 */
export interface QueueConfigOverview {
    /**
     * 队列名称。
     */
    QueueName?: string;
    /**
     * 队列中弹性节点数量最小值。取值范围0～200。
     */
    MinSize?: number;
    /**
     * 队列中弹性节点数量最大值。取值范围0～200。
     */
    MaxSize?: number;
    /**
     * 是否开启自动扩容。
     */
    EnableAutoExpansion?: boolean;
    /**
     * 是否开启自动缩容。
     */
    EnableAutoShrink?: boolean;
    /**
     * 扩容节点配置信息。
     */
    ExpansionNodeConfigs?: Array<ExpansionNodeConfigOverview>;
}
/**
 * BindAutoScalingGroup请求参数结构体
 */
export interface BindAutoScalingGroupRequest {
    /**
     * 集群ID。
     */
    ClusterId: string;
    /**
     * 弹性伸缩启动配置ID。
     */
    LaunchConfigurationId: string;
    /**
     * 弹性伸缩组ID。
     */
    AutoScalingGroupId: string;
    /**
     * 队列名称。
     */
    QueueName?: string;
    /**
     * 任务连续等待时间，队列的任务处于连续等待的时间。单位秒。默认值120。
     */
    ExpansionBusyTime?: number;
    /**
     * 节点连续空闲（未运行作业）时间，一个节点连续处于空闲状态时间。单位秒。默认值300。
     */
    ShrinkIdleTime?: number;
    /**
     * 是否开启自动扩容，默认值true。
     */
    EnableAutoExpansion?: boolean;
    /**
     * 是否开启自动缩容，默认值true。
     */
    EnableAutoShrink?: boolean;
    /**
     * 是否只预检此次请求。
  true：发送检查请求，不会绑定弹性伸缩组。检查项包括是否填写了必需参数，请求格式，业务限制。
  如果检查不通过，则返回对应错误码；
  如果检查通过，则返回RequestId。
  false（默认）：发送正常请求，通过检查后直接绑定弹性伸缩组。
     */
    DryRun?: boolean;
}
/**
 * 描述了VPC相关信息
 */
export interface VirtualPrivateCloud {
    /**
     * 私有网络ID，形如`vpc-xxx`。有效的VpcId可通过登录[控制台](https://console.cloud.tencent.com/vpc/vpc?rid=1)查询；也可以调用接口 [DescribeVpcEx](/document/api/215/1372) ，从接口返回中的`unVpcId`字段获取。若在创建子机时VpcId与SubnetId同时传入`DEFAULT`，则强制使用默认vpc网络。
     */
    VpcId: string;
    /**
     * 私有网络子网ID，形如`subnet-xxx`。有效的私有网络子网ID可通过登录[控制台](https://console.cloud.tencent.com/vpc/subnet?rid=1)查询；也可以调用接口  [DescribeSubnets](/document/api/215/15784) ，从接口返回中的`unSubnetId`字段获取。若在创建子机时SubnetId与VpcId同时传入`DEFAULT`，则强制使用默认vpc网络。
     */
    SubnetId: string;
}
/**
 * 扩容节点配置信息概览。
 */
export interface ExpansionNodeConfigOverview {
    /**
     * 节点机型。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    InstanceType?: string;
    /**
     * 扩容实例所在的位置。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Placement?: Placement;
    /**
     * 节点[计费类型](https://cloud.tencent.com/document/product/213/2180)。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    InstanceChargeType?: string;
    /**
     * 预付费模式，即包年包月相关参数设置。通过该参数可以指定包年包月节点的购买时长、是否设置自动续费等属性。若指定节点的付费模式为预付费则该参数必传。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    InstanceChargePrepaid?: InstanceChargePrepaid;
    /**
     * 私有网络相关信息配置。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    VirtualPrivateCloud?: VirtualPrivateCloud;
    /**
     * 指定有效的[镜像](https://cloud.tencent.com/document/product/213/4940)ID，格式形如`img-xxx`。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ImageId?: string;
    /**
     * 公网带宽相关信息设置。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    InternetAccessible?: InternetAccessible;
    /**
     * 节点系统盘配置信息。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SystemDisk?: SystemDisk;
    /**
     * 节点数据盘配置信息。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DataDisks?: Array<DataDisk>;
}
/**
 * DescribeAutoScalingConfiguration请求参数结构体
 */
export interface DescribeAutoScalingConfigurationRequest {
    /**
     * 集群ID。
     */
    ClusterId: string;
}
/**
 * 描述集群文件系统选项
 */
export interface StorageOption {
    /**
     * 集群挂载CFS文件系统选项。
     */
    CFSOptions?: Array<CFSOption>;
    /**
     * 集群挂载GooseFS文件系统选项。
     */
    GooseFSOptions?: Array<GooseFSOption>;
}
/**
 * 描述了实例的公网可访问性，声明了实例的公网使用计费模式，最大带宽等
 */
export interface InternetAccessible {
    /**
     * 网络计费类型。取值范围：
  BANDWIDTH_PREPAID：预付费按带宽结算
  TRAFFIC_POSTPAID_BY_HOUR：流量按小时后付费
  BANDWIDTH_POSTPAID_BY_HOUR：带宽按小时后付费
  BANDWIDTH_PACKAGE：带宽包用户
  默认取值：非带宽包用户默认与子机付费类型保持一致。
     */
    InternetChargeType?: string;
    /**
     * 公网出带宽上限，单位：Mbps。默认值：0Mbps。不同机型带宽上限范围不一致，具体限制详见购买网络带宽。
     */
    InternetMaxBandwidthOut?: number;
}
/**
 * 计算节点信息。
 */
export interface ComputeNode {
    /**
     * 节点[计费类型](https://cloud.tencent.com/document/product/213/2180)。<br><li>PREPAID：预付费，即包年包月</li><br><li>POSTPAID_BY_HOUR：按小时后付费</li><br><li>SPOTPAID：竞价付费<br>默认值：POSTPAID_BY_HOUR。</li>
     */
    InstanceChargeType?: string;
    /**
     * 预付费模式，即包年包月相关参数设置。通过该参数可以指定包年包月节点的购买时长、是否设置自动续费等属性。若指定节点的付费模式为预付费则该参数必传。
     */
    InstanceChargePrepaid?: InstanceChargePrepaid;
    /**
     * 节点机型。不同实例机型指定了不同的资源规格。
  <br><li>具体取值可通过调用接口[DescribeInstanceTypeConfigs](https://cloud.tencent.com/document/api/213/15749)来获得最新的规格表或参见[实例规格](https://cloud.tencent.com/document/product/213/11518)描述。</li>
     */
    InstanceType?: string;
    /**
     * 节点系统盘配置信息。若不指定该参数，则按照系统默认值进行分配。
     */
    SystemDisk?: SystemDisk;
    /**
     * 节点数据盘配置信息。若不指定该参数，则默认不购买数据盘。支持购买的时候指定21块数据盘，其中最多包含1块LOCAL_BASIC数据盘或者LOCAL_SSD数据盘，最多包含20块CLOUD_BASIC数据盘、CLOUD_PREMIUM数据盘或者CLOUD_SSD数据盘。
     */
    DataDisks?: Array<DataDisk>;
    /**
     * 公网带宽相关信息设置。若不指定该参数，则默认公网带宽为0Mbps。
     */
    InternetAccessible?: InternetAccessible;
    /**
     * 节点显示名称。<br><li>
  不指定节点显示名称则默认显示‘未命名’。
  最多支持60个字符。</li>
     */
    InstanceName?: string;
}
/**
 * DeleteNodes请求参数结构体
 */
export interface DeleteNodesRequest {
    /**
     * 集群ID。
     */
    ClusterId: string;
    /**
     * 节点ID。
     */
    NodeIds: Array<string>;
}
/**
 * DescribeClusters返回参数结构体
 */
export interface DescribeClustersResponse {
    /**
     * 集群概览信息列表。
     */
    ClusterSet?: Array<ClusterOverview>;
    /**
     * 集群数量。
     */
    TotalCount?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DeleteClusterStorageOption返回参数结构体
 */
export interface DeleteClusterStorageOptionResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeNodes返回参数结构体
 */
export interface DescribeNodesResponse {
    /**
     * 节点概览信息列表。
     */
    NodeSet?: Array<NodeOverview>;
    /**
     * 符合条件的节点数量。
     */
    TotalCount?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeClusterActivities返回参数结构体
 */
export interface DescribeClusterActivitiesResponse {
    /**
     * 集群活动历史记录列表。
     */
    ClusterActivitySet?: Array<ClusterActivity>;
    /**
     * 集群活动历史记录数量。
     */
    TotalCount?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 描述了数据盘的信息
 */
export interface DataDisk {
    /**
     * 数据盘大小，单位：GB。最小调整步长为10G，不同数据盘类型取值范围不同，具体限制详见：[存储概述](https://cloud.tencent.com/document/product/213/4952)。默认值为0，表示不购买数据盘。更多限制详见产品文档。
     */
    DiskSize: number;
    /**
     * 数据盘类型。数据盘类型限制详见[存储概述](https://cloud.tencent.com/document/product/213/4952)。取值范围：<br><li>LOCAL_BASIC：本地硬盘</li><br><li>LOCAL_SSD：本地SSD硬盘</li><br><li>LOCAL_NVME：本地NVME硬盘，与InstanceType强相关，不支持指定<br><li>LOCAL_PRO：本地HDD硬盘，与InstanceType强相关，不支持指定</li><br><li>CLOUD_BASIC：普通云硬盘</li><br><li>CLOUD_PREMIUM：高性能云硬盘</li><br><li>CLOUD_SSD：SSD云硬盘</li><br><li>CLOUD_HSSD：增强型SSD云硬盘</li><br><li>CLOUD_TSSD：极速型SSD云硬盘</li><br><br>默认取值：LOCAL_BASIC。</li>
     */
    DiskType?: string;
}
/**
 * DeleteQueue返回参数结构体
 */
export interface DeleteQueueResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * AddNodes返回参数结构体
 */
export interface AddNodesResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
