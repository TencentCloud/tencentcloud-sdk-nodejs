/**
 * 集群概览信息。
 */
export interface ClusterOverview {
    /**
     * 集群ID。
     */
    ClusterId?: string;
    /**
     * 集群状态。取值范围：<li>PENDING：创建中</li><li>INITING：初始化中</li><li>INIT_FAILED：初始化失败</li><li>RUNNING：运行中</li><li>TERMINATING：销毁中</li>
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
     * 集群调度器版本。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SchedulerVersion?: string;
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
     * 弹性伸缩类型。
     */
    AutoScalingType?: string;
    /**
     * 集群所属私有网络ID。
     */
    VpcId?: string;
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
     * 节点状态。<li>SUBMITTED：已完成提交。</li><li>CREATING：创建中。</li><li>CREATED：完成创建。</li><li>INITING：初始化中。</li><li>INIT_FAILED：初始化失败。</li><li>RUNNING：运行中。</li><li>DELETING：销毁中。</li>
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
     * 节点角色。<li>Manager：管控节点。</li><li>Compute：计算节点。</li><li>Login：登录节点。</li><li>ManagerBackup：备用管控节点。</li>
  注意：此字段可能返回 null，表示取不到有效值。
     */
    NodeRole?: string;
    /**
     * 节点类型。<li>STATIC：静态节点。</li><li>DYNAMIC：弹性节点。</li>
  注意：此字段可能返回 null，表示取不到有效值。
     */
    NodeType?: string;
    /**
     * thpc集群节点id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    NodeId?: string;
}
/**
 * DescribeInitNodeScripts请求参数结构体
 */
export interface DescribeInitNodeScriptsRequest {
    /**
     * 集群ID。
     */
    ClusterId: string;
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
     * 节点机型。不同实例机型指定了不同的资源规格。
  <br><li>具体取值可通过调用接口[DescribeInstanceTypeConfigs](https://cloud.tencent.com/document/api/213/15749)来获得最新的规格表或参见[实例规格](https://cloud.tencent.com/document/product/213/11518)描述。</li>
     */
    InstanceType?: string;
    /**
     * 私有网络相关信息配置。
     */
    VirtualPrivateCloud?: VirtualPrivateCloud;
    /**
     * 实例所属项目ID。该参数可以通过调用 [DescribeProject](https://cloud.tencent.com/document/api/651/78725) 的返回值中的 projectId 字段来获取。不填为默认项目。
     */
    ProjectId?: number;
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
 * CreateWorkspaces返回参数结构体
 */
export interface CreateWorkspacesResponse {
    /**
     * 工作空间ID
     */
    SpaceIdSet?: Array<string>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 描述了工作空间VPC相关信息，包括子网，IP信息等
 */
export interface SpaceVirtualPrivateCloud {
    /**
     * 私有网络ID
     */
    VpcId: string;
    /**
     * 私有网络子网ID
     */
    SubnetId: string;
    /**
     * 是否用作公网网关
     */
    AsVpcGateway?: boolean;
    /**
     * 私有网络子网 IP 数组
     */
    PrivateIpAddresses?: Array<string>;
    /**
     * 为弹性网卡指定随机生成
     */
    Ipv6AddressCount?: number;
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
 * DeleteCluster请求参数结构体
 */
export interface DeleteClusterRequest {
    /**
     * 集群ID。
     */
    ClusterId: string;
}
/**
 * 描述了操作系统所在块设备即系统盘的信息
 */
export interface SystemDisk {
    /**
     * 系统盘类型。系统盘类型限制详见存储概述。取值范围：
  CLOUD_BASIC：普通云硬盘
  CLOUD_SSD：SSD云硬盘
  CLOUD_PREMIUM：高性能云硬盘
  
  默认取值：当前有库存的硬盘类型。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DiskType?: string;
    /**
     * 系统盘大小，单位：GB。默认值为 50
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DiskSize?: number;
}
/**
 * TerminateWorkspaces返回参数结构体
 */
export interface TerminateWorkspacesResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ModifyInitNodeScripts请求参数结构体
 */
export interface ModifyInitNodeScriptsRequest {
    /**
     * 集群ID。
     */
    ClusterId: string;
    /**
     * 节点初始化脚本信息列表。
     */
    InitNodeScripts?: Array<NodeScript>;
}
/**
 * AttachNodes请求参数结构体
 */
export interface AttachNodesRequest {
    /**
     * 集群id
     */
    ClusterId: string;
    /**
     * 节点的实例id列表
     */
    ResourceSet: Array<string>;
    /**
     * 队列名称。不指定则为默认队列：
  SLURM默认队列为：compute。
  SGE默认队列为：all.q。
     */
    QueueName?: string;
    /**
     * 指定有效的镜像ID，格式形如img-xxx。目前仅支持公有镜像和特定自定义镜像。如不指定，则该字段是默认镜像。
     */
    ImageId?: string;
    /**
     * 要新增节点的资源类型。<li>CVM：CVM实例类型资源</li><li>WORKSPACE：工作空间类型实例资源</li>默认值：CVM。
     */
    ResourceType?: string;
}
/**
 * 描述了工作空间的计费模式
 */
export interface SpaceChargePrepaid {
    /**
     * 购买实例的时长，单位：月。取值范围：1, 2, 3, 12, 24, 36。默认取值为1。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Period?: number;
    /**
     * 自动续费标识。取值范围：
  
  NOTIFY_AND_AUTO_RENEW：通知过期且自动续费
  
  NOTIFY_AND_MANUAL_RENEW：通知过期不自动续费
  
  DISABLE_NOTIFY_AND_MANUAL_RENEW：不通知过期不自动续费
  
  
  默认取值：NOTIFY_AND_MANUAL_RENEW。若该参数指定为NOTIFY_AND_AUTO_RENEW，在账户余额充足的情况下，实例到期后将按月自动续费。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RenewFlag?: string;
}
/**
 * DescribeWorkspaces返回参数结构体
 */
export interface DescribeWorkspacesResponse {
    /**
     * 集群概览信息列表
     */
    SpaceSet?: Array<SpaceInfo>;
    /**
     * 集群数量
     */
    TotalCount?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
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
    /**
     * GooseFSx存储选项概览信息列表。
     */
    GooseFSxOptions?: Array<GooseFSxOptionOverview>;
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
 * 创建资源工作空间时同时绑定的标签对说明
 */
export interface TagSpecification {
    /**
     * 标签绑定的资源类型
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ResourceType: string;
    /**
     * 标签对列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Tags: Array<Tag>;
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
 * DescribeWorkspaces请求参数结构体
 */
export interface DescribeWorkspacesRequest {
    /**
     * 集群ID列表。通过该参数可以指定需要查询信息的集群列表。<br>如果您不指定该参数，则返回Limit数量以内的集群信息。
     */
    SpaceIds?: Array<string>;
    /**
     * 偏移量，默认为0。关于`Offset`的更进一步介绍请参考 API [简介](https://cloud.tencent.com/document/api/213/15688)中的相关小节。
     */
    Offset?: number;
    /**
     * 返回数量，默认为20，最大值为100。关于`Limit`的更进一步介绍请参考 API [简介](https://cloud.tencent.com/document/api/213/15688)中的相关小节。
     */
    Limit?: number;
    /**
     * 过滤列表
     */
    Filters?: Array<Filter>;
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
    /**
     * 队列中期望的空闲节点数量（包含弹性节点和静态节点）。默认值：0。队列中，处于空闲状态的节点小于此值，集群会扩容弹性节点；处于空闲状态的节点大于此值，集群会缩容弹性节点。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DesiredIdleNodeCapacity?: number;
    /**
     * 队列中期望的总节点数。
     */
    DesiredNodeCount?: number;
    /**
     * 扩容比例。默认值：100。取值范围：1～100。
  如果扩容比例为50，那么每轮只会扩容当前作业负载所需的50%数量的节点。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ScaleOutRatio?: number;
    /**
     * 比例扩容阈值。默认值：0。取值范围：0～200。
  当作业负载需要扩容节点数量大于此值，当前扩容轮次按照ScaleOutRatio配置的的比例进行扩容。当作业负载需要扩容节点数量小于此值，当前扩容轮次扩容当前作业负载所需数量的节点。
  此参数配合ScaleOutRatio参数进行使用，用于比例扩容场景下，在作业负载所需节点数量较小时，加快收敛速度。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ScaleOutNodeThreshold?: number;
    /**
     * 每轮扩容最大节点个数。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    MaxNodesPerCycle?: number;
    /**
     * 扩容过程中，作业的内存在匹配实例机型时增大比例（不会影响作业提交的内存大小，只影响匹配计算过程）。<br/>
  针对场景：由于实例机型的总内存会大于实例内部的可用内存，16GB内存规格的实例，实例操作系统内的可用内存只有约14.9GB内存。假设此时提交一个需要15GB内存的作业，
  
  - 当ScaleUpMemRatio=0时，会匹配到16GB内存规格的实例,但是由于操作系统内的可用内存为14.9GB小于作业所需的15GB，扩容出来的实例作业无法运行起来。
  - 当ScaleUpMemRatio=10时，匹配实例规格会按照15*(1+10%)=16.5GB来进行实例规格匹配，则不会匹配到16GB的实例，而是更大内存规格的实例来保证作业能够被运行起来。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ScaleUpMemRatio?: number;
}
/**
 * 描述了实例的抽象位置
 */
export interface Placement {
    /**
     * 实例所属的可用区名称。该参数可以通过调用  [DescribeZones](https://cloud.tencent.com/document/product/213/15707) 的返回值中的Zone字段来获取。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Zone: string;
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
 * 描述了 “腾讯云可观测平台” 服务相关的信息。
 */
export interface RunMonitorServiceEnabled {
    /**
     * 是否开启[腾讯云可观测平台](/document/product/248)服务。取值范围：<br><li>TRUE：表示开启腾讯云可观测平台服务</li><br><li>FALSE：表示不开启腾讯云可观测平台服务</li><br><br>默认取值：TRUE。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Enabled?: boolean;
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
 * GooseFSx存储选项概览信息。
 */
export interface GooseFSxOptionOverview {
    /**
     * 文件系统master的ip和端口列表。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Masters?: Array<string>;
    /**
     * 文件系统的本地挂载路径。GooseFSx目前只支持挂载在/goosefsx/{文件系统ID}_proxy/目录下。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    LocalPath?: string;
}
/**
 * DetachNodes返回参数结构体
 */
export interface DetachNodesResponse {
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
    /**
     * 集群挂载GooseFSx文件系统选项。
     */
    GooseFSxOptions?: Array<GooseFSxOption>;
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
 * ModifyWorkspacesAttribute返回参数结构体
 */
export interface ModifyWorkspacesAttributeResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
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
 * DescribeInitNodeScripts返回参数结构体
 */
export interface DescribeInitNodeScriptsResponse {
    /**
     * 节点初始化脚本列表。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    InitNodeScriptSet?: Array<NodeScript>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
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
 * 描述了数据盘的信息
 */
export interface DataDisk {
    /**
     * 数据盘大小，单位：GB。最小调整步长为10G，不同数据盘类型取值范围不同，具体限制详见：[存储概述](https://cloud.tencent.com/document/product/213/4952)。默认值为0，表示不购买数据盘。更多限制详见产品文档。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DiskSize: number;
    /**
     * 数据盘类型。数据盘类型限制详见[存储概述](https://cloud.tencent.com/document/product/213/4952)。取值范围：<br><li>LOCAL_NVME：本地NVME硬盘，与InstanceType强相关，不支持指定<br><li>LOCAL_PRO：本地HDD硬盘，与InstanceType强相关，不支持指定<br><li>CLOUD_BASIC：普通云硬盘<br><li>CLOUD_PREMIUM：高性能云硬盘<br><li>CLOUD_SSD：SSD云硬盘<br><li>CLOUD_HSSD：增强型SSD云硬盘<br><li>CLOUD_TSSD：极速型SSD云硬盘<br><li>CLOUD_BSSD：通用型SSD云硬盘
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DiskType?: string;
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
 * 描述了实例登录相关配置与信息。
 */
export interface LoginSettings {
    /**
     * 实例登录密码。不同操作系统类型密码复杂度限制不一样，具体如下：<br><li>Linux实例密码必须8到30位，至少包括两项[a-z]，[A-Z]、[0-9] 和 [( ) \` ~ ! @ # $ % ^ & *  - + = | { } [ ] : ; ' , . ? / ]中的特殊符号。</li><br><li>Windows实例密码必须12到30位，至少包括三项[a-z]，[A-Z]，[0-9] 和 [( ) \` ~ ! @ # $ % ^ & * - + = | { } [ ] : ; ' , . ? /]中的特殊符号。</li><br><br>若不指定该参数，则由系统随机生成密码，并通过站内信方式通知到用户。
     */
    Password?: string;
    /**
     * 实例登录密钥
     */
    KeyIds?: Array<string>;
}
/**
 * 描述了实例的增强服务启用情况与其设置，如云安全，腾讯云可观测平台等实例 Agent
 */
export interface EnhancedService {
    /**
     * 开启云安全服务。若不指定该参数，则默认开启云安全服务。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SecurityService?: RunSecurityServiceEnabled;
    /**
     * 开启腾讯云可观测平台服务。若不指定该参数，则默认开启腾讯云可观测平台服务。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    MonitorService?: RunMonitorServiceEnabled;
    /**
     * 开启云自动化助手服务（TencentCloud Automation Tools，TAT）。若不指定该参数，默认开启云自动化助手服务。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AutomationService?: RunAutomationServiceEnabled;
}
/**
 * 描述了 “云自动化助手” 服务相关的信息。
 */
export interface RunAutomationServiceEnabled {
    /**
     * 是否开启云自动化助手。取值范围：<br><li>TRUE：表示开启云自动化助手服务</li><br><li>FALSE：表示不开启云自动化助手服务</li><br><br>默认取值：TRUE。
     */
    Enabled?: boolean;
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
 * DescribeQueues返回参数结构体
 */
export interface DescribeQueuesResponse {
    /**
     * 队列概览信息列表。
     */
    QueueSet?: Array<QueueOverview>;
    /**
     * 符合条件的队列数量。
     */
    TotalCount?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
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
 * 描述了 “云安全” 服务相关的信息。
 */
export interface RunSecurityServiceEnabled {
    /**
     * 是否开启[云安全](/document/product/296)服务。取值范围：<br><li>TRUE：表示开启云安全服务</li><br><li>FALSE：表示不开启云安全服务</li><br><br>默认取值：TRUE。
     */
    Enabled?: boolean;
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
     * 调度器类型。默认取值：SLURM。<li>SGE：SGE调度器。</li><li>SLURM：SLURM调度器。</li>
     */
    SchedulerType?: string;
    /**
     * 创建调度器的版本号，可填写版本号为“latest” 和 各调度器支持的版本号；如果是"latest", 则代表创建的是平台当前支持的该类型调度器最新版本。如果不填写，默认创建的是“latest”版本调度器
  各调度器支持的集群版本：
  <li>SLURM：21.08.8、23.11.7</li>
  <li>SGE：     8.1.9</li>
     */
    SchedulerVersion?: string;
    /**
     * 指定有效的[镜像](https://cloud.tencent.com/document/product/213/4940)ID，格式形如`img-xxx`。目前支持部分公有镜像和自定义镜像。公共镜像请参考[镜像限制](https://cloud.tencent.com/document/product/1527/64818#.E9.95.9C.E5.83.8F)
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
     * 域名字服务类型。默认取值：NIS。
  <li>NIS：NIS域名字服务。</li>
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
     * 弹性伸缩类型。默认值：THPC_AS
     */
    AutoScalingType?: string;
    /**
     * 节点初始化脚本信息列表。
     */
    InitNodeScripts?: Array<NodeScript>;
    /**
     * 高性能计算集群ID。若创建的实例为高性能计算实例，需指定实例放置的集群，否则不可指定。
     */
    HpcClusterId?: string;
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
 * 描述节点执行脚本信息。
 */
export interface NodeScript {
    /**
     * 节点执行脚本获取地址。
  目前仅支持cos地址。地址最大长度：255。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ScriptPath: string;
    /**
     * 脚本执行超时时间（包含拉取脚本的时间）。单位秒，默认值：30。取值范围：10～1200。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Timeout?: number;
}
/**
 * ModifyInitNodeScripts返回参数结构体
 */
export interface ModifyInitNodeScriptsResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
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
    /**
     * 实例所属项目ID。该参数可以通过调用 [DescribeProject](https://cloud.tencent.com/document/api/651/78725) 的返回值中的 projectId 字段来获取。不填为默认项目。
     */
    ProjectId?: number;
    /**
     * 增强服务。通过该参数可以指定是否开启云安全、腾讯云可观测平台等服务。若不指定该参数，则默认开启腾讯云可观测平台、云安全服务、自动化助手服务。
     */
    EnhancedService?: EnhancedService;
}
/**
 * ModifyWorkspacesAttribute请求参数结构体
 */
export interface ModifyWorkspacesAttributeRequest {
    /**
     * 工作空间列表
     */
    SpaceIds: Array<string>;
    /**
     * 修改后的工作空间名称。可任意命名，但不得超过60个字符。
     */
    SpaceName?: string;
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
 * 描述工作空间的信息
 */
export interface SpaceInfo {
    /**
     * 工作空间ID
     */
    SpaceId?: string;
    /**
     * 工作空间类型
     */
    SpaceFamily?: string;
    /**
     * 工作空间规格
     */
    SpaceType?: string;
    /**
     * 工作空间名称
     */
    SpaceName?: string;
    /**
     * 工作空间状态。取值范围：<br><li>PENDING：表示创建中<br></li><li>LAUNCH_FAILED：表示创建失败<br></li><li>ONLINE：表示运行中<br></li><li>ARREARS：表示隔离中<br></li><li>TERMINATING：表示销毁中。<br></li>
     */
    SpaceState?: string;
    /**
     * 工作空间计费模式
     */
    SpaceChargeType?: string;
    /**
     * 工作空间对应资源ID
     */
    ResourceId?: string;
    /**
     * 自动续费标识
     */
    RenewFlag?: string;
    /**
     * 工作空间关联的工作列表
     */
    Tags?: Array<Tag>;
    /**
     * 创建时间
     */
    CreatedTime?: string;
    /**
     * 到期时间
     */
    ExpiredTime?: string;
    /**
     * 工作空间所在位置
     */
    Placement?: Placement;
    /**
     * 工作空间的最新操作
  注意：此字段可能返回 null，表示取不到有效值。
     */
    LatestOperation?: string;
    /**
     * 工作空间的最新操作状态
  注意：此字段可能返回 null，表示取不到有效值。
     */
    LatestOperationState?: string;
}
/**
 * TerminateWorkspaces请求参数结构体
 */
export interface TerminateWorkspacesRequest {
    /**
     * 工作空间ID
     */
    SpaceIds: Array<string>;
    /**
     * 释放空间挂载的包年包月数据盘。true表示销毁空间同时释放包年包月数据盘，false表示只销毁空间。
     */
    ReleasePrepaidDataDisks?: boolean;
}
/**
 * 计算节点信息。
 */
export interface ComputeNode {
    /**
     * 节点[计费类型](https://cloud.tencent.com/document/product/213/2180)。<li>PREPAID：预付费，即包年包月</li><li>POSTPAID_BY_HOUR：按小时后付费</li><li>SPOTPAID：竞价付费</li>默认值：POSTPAID_BY_HOUR。
     */
    InstanceChargeType?: string;
    /**
     * 预付费模式，即包年包月相关参数设置。通过该参数可以指定包年包月节点的购买时长、是否设置自动续费等属性。若指定节点的付费模式为预付费则该参数必传。
     */
    InstanceChargePrepaid?: InstanceChargePrepaid;
    /**
     * 节点机型。不同实例机型指定了不同的资源规格。<li>具体取值可通过调用接口[DescribeInstanceTypeConfigs](https://cloud.tencent.com/document/api/213/15749)来获得最新的规格表或参见[实例规格](https://cloud.tencent.com/document/product/213/11518)描述。</li>
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
     * 节点显示名称。<li>不指定节点显示名称则默认显示‘未命名’。
  最多支持60个字符。</li>
     */
    InstanceName?: string;
    /**
     * 实例所属项目ID。该参数可以通过调用 [DescribeProject](https://cloud.tencent.com/document/api/651/78725) 的返回值中的 projectId 字段来获取。不填为默认项目。
     */
    ProjectId?: number;
    /**
     * 实例资源类型，默认是CVM资源
     */
    ResourceType?: string;
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
 * DeleteClusterStorageOption返回参数结构体
 */
export interface DeleteClusterStorageOptionResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 描述了工作空间的公网可访问性，声明了工作空间的公网使用计费模式，最大带宽等
 */
export interface SpaceInternetAccessible {
    /**
     * 网络计费类型
  注意：此字段可能返回 null，表示取不到有效值。
     */
    InternetChargeType?: string;
    /**
     * 公网出带宽上限，默认为0
  注意：此字段可能返回 null，表示取不到有效值。
     */
    InternetMaxBandwidthOut?: number;
    /**
     * 是否分配公网IP
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PublicIpAssigned?: boolean;
    /**
     * 带宽包ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    BandwidthPackageId?: string;
}
/**
 * 工作空间数据盘配置
 */
export interface SpaceDataDisk {
    /**
     * 数据盘类型。数据盘类型限制详见[存储概述](https://cloud.tencent.com/document/product/213/4952)。取值范围：<br />
  <li>
    LOCAL_BASIC：本地硬盘<br />
    <li>
      LOCAL_SSD：本地SSD硬盘<br />
      <li>
        LOCAL_NVME：本地NVME硬盘，与InstanceType强相关，不支持指定<br />
        <li>
          LOCAL_PRO：本地HDD硬盘，与InstanceType强相关，不支持指定<br />
          <li>
            CLOUD_BASIC：普通云硬盘<br />
            <li>
              CLOUD_PREMIUM：高性能云硬盘<br />
              <li>
                CLOUD_SSD：SSD云硬盘<br />
                <li>
                  CLOUD_HSSD：增强型SSD云硬盘<br />
                  <li>
                    CLOUD_TSSD：极速型SSD云硬盘<br />
                    <li>
                      CLOUD_BSSD：通用型SSD云硬盘<br /><br />默认取值：LOCAL_BASIC。<br /><br />该参数对`ResizeInstanceDisk`接口无效。
                    </li>
                  </li>
                </li>
              </li>
            </li>
          </li>
        </li>
      </li>
    </li>
  </li>
     */
    DiskType?: string;
    /**
     * 数据盘
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DiskId?: string;
    /**
     * 数据盘大小，单位：GB。最小调整步长为10G，不同数据盘类型取值范围不同，具体限制详见：[存储概述](https://cloud.tencent.com/document/product/213/4952)。默认值为0，表示不购买数据盘。更多限制详见产品文档。
     */
    DiskSize?: number;
    /**
     * 数据盘是否随子机销毁。取值范围：
  <li>TRUE：子机销毁时，销毁数据盘，只支持按小时后付费云盘</li>
  <li>
    FALSE：子机销毁时，保留数据盘<br />
    默认取值：TRUE<br />
    该参数目前仅用于 `RunInstances` 接口。
  </li>
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DeleteWithInstance?: boolean;
    /**
     * 数据盘快照ID。选择的数据盘快照大小需小于数据盘大小。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SnapshotId?: string;
    /**
     * 数据盘是加密。取值范围：
  <li>true：加密</li>
  <li>
    false：不加密<br />
    默认取值：false<br />
    该参数目前仅用于 `RunInstances` 接口。
  </li>
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Encrypt?: boolean;
    /**
     * 自定义CMK对应的ID，取值为UUID或者类似kms-abcd1234。用于加密云盘。
  
  该参数目前仅用于 `CreateWorkspaces` 接口。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    KmsKeyId?: string;
    /**
     * 云硬盘性能，单位：MB/s
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ThroughputPerformance?: number;
    /**
     * 突发性能
  
  注：内测中。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    BurstPerformance?: boolean;
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
 * DescribeNodes请求参数结构体
 */
export interface DescribeNodesRequest {
    /**
     * 集群ID。
     */
    ClusterId: string;
    /**
     * <ul>
      <li><strong>queue-name</strong>
          <p style="padding-left: 30px;">按照【<strong>队列名称</strong>】进行过滤。队列名称形如：compute。</p>
          <p style="padding-left: 30px;">类型：String</p>
          <p style="padding-left: 30px;">必选：否</p>
      </li>
      <li><strong>node-role</strong>
          <p style="padding-left: 30px;">按照【<strong>节点角色</strong>】进行过滤。节点角色形如：Manager。（Manager：管控节点。Compute：计算节点。Login：登录节点。ManagerBackup：备用管控节点。）</p>
          <p style="padding-left: 30px;">类型：String</p>
          <p style="padding-left: 30px;">必选：否</p>
      </li>
      <li><strong>node-type</strong>
          <p style="padding-left: 30px;">按照【<strong>节点类型</strong>】进行过滤。节点类型形如：STATIC。(STATIC：静态节点。DYNAMIC：弹性节点。)</p>
          <p style="padding-left: 30px;">类型：String</p>
          <p style="padding-left: 30px;">必选：否</p>
      </li>
  </ul>
  <p style="padding-left: 30px;">每次请求的`Filters`的上限为10，`Filter.Values`的上限为5。</p>
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
 * DetachNodes请求参数结构体
 */
export interface DetachNodesRequest {
    /**
     * 集群id
     */
    ClusterId: string;
    /**
     * 集群中的节点id
     */
    NodeIds: Array<string>;
}
/**
 * AttachNodes返回参数结构体
 */
export interface AttachNodesResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
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
    /**
     * 实例所属项目ID。该参数可以通过调用 [DescribeProject](https://cloud.tencent.com/document/api/651/78725) 的返回值中的 projectId 字段来获取。不填为默认项目。
     */
    ProjectId?: number;
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
    /**
     * 文件系统挂载挂载命令参数选项。
  
  - NFS 3.0默认值：vers=3,nolock,proto=tcp,noresvport
  - NFS 4.0默认值：vers=4.0,noresvport
  - TURBO默认值：user_xattr
     */
    MountOption?: string;
}
/**
 * CreateWorkspaces请求参数结构体
 */
export interface CreateWorkspacesRequest {
    /**
     * 用于保证请求幂等性的字符串。该字符串由客户生成，需保证不同请求之间唯一，最大值不超过64个ASCII字符。若不指定该参数，则无法保证请求的幂等性。
     */
    ClientToken?: string;
    /**
     * 实例所在的位置。通过该参数可以指定实例所属可用区，所属项目，所属宿主机（在专用宿主机上创建子机时指定）等属性。 <b>注：如果您不指定LaunchTemplate参数，则Placement为必选参数。若同时传递Placement和LaunchTemplate，则默认覆盖LaunchTemplate中对应的Placement的值。</b>
     */
    Placement?: SpacePlacement;
    /**
     * 预付费模式，即包年包月相关参数设置。通过该参数可以指定包年包月实例的购买时长、是否设置自动续费等属性。若指定实例的付费模式为预付费则该参数必传。
     */
    SpaceChargePrepaid?: SpaceChargePrepaid;
    /**
     * 工作空间计费类型，包括：PREPAID，UNDERWRITE。工作空间计费类型，包括：PREPAID，UNDERWRITE。
     */
    SpaceChargeType?: string;
    /**
     * 工作空间规格
     */
    SpaceType?: string;
    /**
     * 镜像ID
     */
    ImageId?: string;
    /**
     * 工作空间系统盘信息
     */
    SystemDisk?: SpaceSystemDisk;
    /**
     * 工作空间数据盘信息
     */
    DataDisks?: Array<SpaceDataDisk>;
    /**
     * 私有网络相关信息
     */
    VirtualPrivateCloud?: SpaceVirtualPrivateCloud;
    /**
     * 公网带宽相关信息设置
     */
    InternetAccessible?: SpaceInternetAccessible;
    /**
     * 购买工作空间数量
     */
    SpaceCount?: number;
    /**
     * 工作空间显示名称
     */
    SpaceName?: string;
    /**
     * 工作空间登陆设置
     */
    LoginSettings?: LoginSettings;
    /**
     * 工作空间所属安全组
     */
    SecurityGroupIds?: Array<string>;
    /**
     * 增强服务
     */
    EnhancedService?: EnhancedService;
    /**
     * 是否只预检此次请求
     */
    DryRun?: boolean;
    /**
     * 提供给工作空间使用的用户数据
     */
    UserData?: string;
    /**
     * 置放群组id
     */
    DisasterRecoverGroupIds?: Array<string>;
    /**
     * 标签描述列表
     */
    TagSpecification?: Array<TagSpecification>;
    /**
     * 高性能计算集群ID
     */
    HpcClusterId?: string;
    /**
     * CAM角色名称
     */
    CamRoleName?: string;
    /**
     * 实例主机名。<br><li>点号（.）和短横线（-）不能作为 HostName 的首尾字符，不能连续使用。</li><br><li>Windows 实例：主机名名字符长度为[2, 15]，允许字母（不限制大小写）、数字和短横线（-）组成，不支持点号（.），不能全是数字。</li><br><li>其他类型（Linux 等）实例：主机名字符长度为[2, 60]，允许支持多个点号，点之间为一段，每段允许字母（不限制大小写）、数字和短横线（-）组成。</li><br><li>购买多台实例，如果指定模式串`{R:x}`，表示生成数字`[x, x+n-1]`，其中`n`表示购买实例的数量，例如`server{R:3}`，购买1台时，实例主机名为`server3`；购买2台时，实例主机名分别为`server3`，`server4`。支持指定多个模式串`{R:x}`。</li><br><li>购买多台实例，如果不指定模式串，则在实例主机名添加后缀`1、2...n`，其中`n`表示购买实例的数量，例如`server`，购买2台时，实例主机名分别为`server1`，`server2`。</li>
     */
    HostName?: string;
}
/**
 * 工作空间系统盘配置
 */
export interface SpaceSystemDisk {
    /**
     * 系统盘类型。系统盘类型限制详见[存储概述](https://cloud.tencent.com/document/product/213/4952)。取值范围：<ul><li>LOCAL_BASIC：本地硬盘</li><li>LOCAL_SSD：本地SSD硬盘</li><li>CLOUD_BASIC：普通云硬盘</li><li>CLOUD_SSD：SSD云硬盘</li><li>CLOUD_PREMIUM：高性能云硬盘</li><li>CLOUD_BSSD：通用性SSD云硬盘</li><li>CLOUD_HSSD：增强型SSD云硬盘</li><li>CLOUD_TSSD：极速型SSD云硬盘</li></ul>默认取值：当前有库存的硬盘类型。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DiskType?: string;
    /**
     * 系统盘大小，单位：GB。默认值为 50
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DiskSize?: number;
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
 * 扩容队列配置。
 */
export interface QueueConfig {
    /**
     * 队列名称。
     */
    QueueName: string;
    /**
     * 队列中弹性节点数量最小值。默认值：0。取值范围：0～200。
     */
    MinSize?: number;
    /**
     * 队列中弹性节点数量最大值。默认值：10。取值范围：0～200。
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
    /**
     * 队列中期望的空闲节点数量（包含弹性节点和静态节点）。默认值：0。队列中，处于空闲状态的节点小于此值，集群会扩容弹性节点；处于空闲状态的节点大于此值，集群会缩容弹性节点。
     */
    DesiredIdleNodeCapacity?: number;
    /**
     * 队列中期望的总节点数。
     */
    DesiredNodeCount?: number;
    /**
     * 扩容比例。默认值：100。取值范围：1～100。
  如果扩容比例为50，那么每轮只会扩容当前作业负载所需的50%数量的节点。
     */
    ScaleOutRatio?: number;
    /**
     * 比例扩容阈值。默认值：0。取值范围：0～200。
  当作业负载需要扩容节点数量大于此值，当前扩容轮次按照ScaleOutRatio配置的比例进行扩容。当作业负载需要扩容节点数量小于此值，当前扩容轮次扩容当前作业负载所需数量的节点。
  此参数配合ScaleOutRatio参数进行使用，用于比例扩容场景下，在作业负载所需节点数量较小时，加快收敛速度。
     */
    ScaleOutNodeThreshold?: number;
    /**
     * 每轮扩容最大节点个数。默认值：100。取值范围：1～100。
     */
    MaxNodesPerCycle?: number;
    /**
     * 扩容过程中，作业的内存在匹配实例机型时增大比例（不会影响作业提交的内存大小，只影响匹配计算过程）。<br/>
  针对场景：由于实例机型的总内存会大于实例内部的可用内存，16GB内存规格的实例，实例操作系统内的可用内存只有约14.9GB内存。假设此时提交一个需要15GB内存的作业，
  
  - 当ScaleUpMemRatio=0时，会匹配到16GB内存规格的实例,但是由于操作系统内的可用内存为14.9GB小于作业所需的15GB，扩容出来的实例作业无法运行起来。
  - 当ScaleUpMemRatio=10时，匹配实例规格会按照15*(1+10%)=16.5GB来进行实例规格匹配，则不会匹配到16GB的实例，而是更大内存规格的实例来保证作业能够被运行起来。
     */
    ScaleUpMemRatio?: number;
    /**
     * 增强服务。通过该参数可以指定是否开启云安全、腾讯云可观测平台等服务。若不指定该参数，则默认开启腾讯云可观测平台、云安全服务、自动化助手服务。
     */
    EnhancedService?: EnhancedService;
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
     * 指定有效的[镜像](https://cloud.tencent.com/document/product/213/4940)ID，格式形如`img-xxx`。目前支持部分公有镜像和自定义镜像。公共镜像请参考[镜像限制](https://cloud.tencent.com/document/product/1527/64818#.E9.95.9C.E5.83.8F)
     */
    ImageId?: string;
    /**
     * 节点[计费类型](https://cloud.tencent.com/document/product/213/2180)。<br><li>PREPAID：预付费，即包年包月</li><li>POSTPAID_BY_HOUR：按小时后付费</li><li>SPOTPAID：竞价付费</li>默认值：POSTPAID_BY_HOUR。
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
     * 添加节点角色。默认值：Compute<br><li>Compute：计算节点。</li><li>Login：登录节点。</li>
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
    /**
     * 实例所属项目ID。该参数可以通过调用 [DescribeProject](https://cloud.tencent.com/document/api/651/78725) 的返回值中的 projectId 字段来获取。不填为默认项目。
     */
    ProjectId?: number;
    /**
     * 要新增节点的资源类型。<li>CVM：CVM实例类型资源</li><li>WORKSPACE：工作空间类型实例资源</li>默认值：CVM。
     */
    ResourceType?: string;
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
    /**
     * 文件系统挂载命令参数选项。
     */
    MountOption?: string;
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
 * AddClusterStorageOption请求参数结构体
 */
export interface AddClusterStorageOptionRequest {
    /**
     * 集群ID。
     */
    ClusterId: string;
    /**
     * 集群存储选项；集群已存在的节点和新增节点都会挂载此存储。
     */
    StorageOption: StorageOption;
}
/**
 * 描述GooseFSx挂载信息
 */
export interface GooseFSxOption {
    /**
     * 文件系统master的ip和端口列表。
     */
    Masters: Array<string>;
    /**
     * 文件系统的本地挂载路径。GooseFSx目前只支持挂载在/goosefsx/{文件系统ID}_proxy/目录下。
     */
    LocalPath: string;
}
/**
 * 描述了实例的抽象位置，包括其所在的可用区，所属的项目
 */
export interface SpacePlacement {
    /**
     * 可用区
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Zone: string;
    /**
     * 项目，默认是0
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ProjectId?: number;
}
/**
 * 描述了VPC相关信息
 */
export interface VirtualPrivateCloud {
    /**
     * 私有网络ID，形如`vpc-xxx`。有效的VpcId可通过登录[控制台](https://console.cloud.tencent.com/vpc/vpc?rid=1)查询；也可以调用接口 [DescribeVpcEx](/document/api/215/1372) ，从接口返回中的`unVpcId`字段获取。若在创建子机时VpcId与SubnetId同时传入`DEFAULT`，则强制使用默认vpc网络。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    VpcId: string;
    /**
     * 私有网络子网ID，形如`subnet-xxx`。有效的私有网络子网ID可通过登录[控制台](https://console.cloud.tencent.com/vpc/subnet?rid=1)查询；也可以调用接口  [DescribeSubnets](/document/api/215/15784) ，从接口返回中的`unSubnetId`字段获取。若在创建子机时SubnetId与VpcId同时传入`DEFAULT`，则强制使用默认vpc网络。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SubnetId: string;
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
  注意：此字段可能返回 null，表示取不到有效值。
     */
    InternetChargeType?: string;
    /**
     * 公网出带宽上限，单位：Mbps。默认值：0Mbps。不同机型带宽上限范围不一致，具体限制详见购买网络带宽。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    InternetMaxBandwidthOut?: number;
}
/**
 * 描述了实例的计费模式
 */
export interface InstanceChargePrepaid {
    /**
     * 购买实例的时长，单位：月。取值范围：1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 24, 36, 48, 60。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Period: number;
    /**
     * 自动续费标识。取值范围：
  NOTIFY_AND_AUTO_RENEW：通知过期且自动续费
  NOTIFY_AND_MANUAL_RENEW：通知过期不自动续费
  DISABLE_NOTIFY_AND_MANUAL_RENEW：不通知过期不自动续费
  
  默认取值：NOTIFY_AND_MANUAL_RENEW。若该参数指定为NOTIFY_AND_AUTO_RENEW，在账户余额充足的情况下，实例到期后将按月自动续费。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RenewFlag?: string;
}
