/**
 * 用户安全组配额限制
 */
export interface SecurityGroupLimitSet {
    /**
      * 可创建安全组总数
      */
    SecurityGroupLimit: number;
    /**
      * 安全组下的最大规则数
      */
    SecurityGroupPolicyLimit: number;
    /**
      * 安全组下嵌套安全组规则数
      */
    ReferedSecurityGroupLimit: number;
    /**
      * 单安全组关联实例数
      */
    SecurityGroupInstanceLimit: number;
    /**
      * 实例关联安全组数
      */
    InstanceSecurityGroupLimit: number;
    /**
      * 单安全组关联的模块数
      */
    SecurityGroupModuleLimit: number;
    /**
      * 模块关联的安全组数
      */
    ModuleSecurityGroupLimit: number;
}
/**
 * CreateRoutes请求参数结构体
 */
export interface CreateRoutesRequest {
    /**
      * 路由表实例ID。
      */
    RouteTableId: string;
    /**
      * 要创建的路由策略对象。
      */
    Routes: Array<Route>;
}
/**
 * DescribeHaVips返回参数结构体
 */
export interface DescribeHaVipsResponse {
    /**
      * 符合条件的对象数。
      */
    TotalCount: number;
    /**
      * HAVIP对象数组。
注意：此字段可能返回 null，表示取不到有效值。
      */
    HaVipSet: Array<HaVip>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ModifyModuleSecurityGroups请求参数结构体
 */
export interface ModifyModuleSecurityGroupsRequest {
    /**
      * 安全组列表。不超过5个。
      */
    SecurityGroupIdSet: Array<string>;
    /**
      * 模块id。
      */
    ModuleId: string;
}
/**
 * TerminateInstances返回参数结构体
 */
export interface TerminateInstancesResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeMonthPeakNetwork返回参数结构体
 */
export interface DescribeMonthPeakNetworkResponse {
    /**
      * 无
注意：此字段可能返回 null，表示取不到有效值。
      */
    MonthNetWorkData: Array<MonthNetwork>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeNetworkInterfaces请求参数结构体
 */
export interface DescribeNetworkInterfacesRequest {
    /**
      * 弹性网卡实例ID查询。形如：eni-pxir56ns。每次请求的实例的上限为100。参数不支持同时指定NetworkInterfaceIds和Filters。
      */
    NetworkInterfaceIds?: Array<string>;
    /**
      * 过滤条件，参数不支持同时指定NetworkInterfaceIds和Filters。
vpc-id - String - （过滤条件）VPC实例ID，形如：vpc-f49l6u0z。
subnet-id - String - （过滤条件）所属子网实例ID，形如：subnet-f49l6u0z。
network-interface-id - String - （过滤条件）弹性网卡实例ID，形如：eni-5k56k7k7。
attachment.instance-id - String - （过滤条件）绑定的云服务器实例ID，形如：ein-3nqpdn3i。
groups.security-group-id - String - （过滤条件）绑定的安全组实例ID，例如：sg-f9ekbxeq。
network-interface-name - String - （过滤条件）网卡实例名称。
network-interface-description - String - （过滤条件）网卡实例描述。
address-ip - String - （过滤条件）内网IPv4地址。
tag-key - String -是否必填：否- （过滤条件）按照标签键进行过滤。使用请参考示例2
tag:tag-key - String - 是否必填：否 - （过滤条件）按照标签键值对进行过滤。 tag-key使用具体的标签键进行替换。使用请参考示例3。
is-primary - Boolean - 是否必填：否 - （过滤条件）按照是否主网卡进行过滤。值为true时，仅过滤主网卡；值为false时，仅过滤辅助网卡；次过滤参数为提供时，同时过滤主网卡和辅助网卡。
      */
    Filters?: Array<Filter>;
    /**
      * 偏移量，默认为0。
      */
    Offset?: number;
    /**
      * 返回数量，默认为20，最大值为100。
      */
    Limit?: number;
    /**
      * ECM 地域，形如ap-xian-ecm。
      */
    EcmRegion?: string;
}
/**
 * CreateSecurityGroupPolicies返回参数结构体
 */
export interface CreateSecurityGroupPoliciesResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 描述实例的价格相关
 */
export interface InstancePricesPartDetail {
    /**
      * cpu的价格信息
      */
    CpuPrice: PriceDetail;
    /**
      * 内存价格信息
      */
    MemPrice: PriceDetail;
    /**
      * 磁盘价格信息
      */
    DisksPrice: PriceDetail;
}
/**
 * DescribeMonthPeakNetwork请求参数结构体
 */
export interface DescribeMonthPeakNetworkRequest {
    /**
      * 月份时间(xxxx-xx) 如2021-03,默认取当前时间的上一个月份
      */
    Month: string;
    /**
      * 过滤条件
      */
    Filters?: Array<Filter>;
}
/**
 * 用于描述系统盘。
 */
export interface SystemDisk {
    /**
      * 硬盘类型。取值范围：
- LOCAL_BASIC：本地硬盘；
- CLOUD_PREMIUM：高性能云硬盘；
默认取值：CLOUD_BASIC。
      */
    DiskType?: string;
    /**
      * 硬盘ID。此参数暂不可用。
      */
    DiskId?: string;
    /**
      * 硬盘容量大小。单位GB。
      */
    DiskSize?: number;
}
/**
 * DescribeNode返回参数结构体
 */
export interface DescribeNodeResponse {
    /**
      * 节点详细信息的列表
注意：此字段可能返回 null，表示取不到有效值。
      */
    NodeSet: Array<Node>;
    /**
      * 所有的节点数量。
      */
    TotalCount: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeModule请求参数结构体
 */
export interface DescribeModuleRequest {
    /**
      * 过滤条件。
module-name - string - 是否必填：否 - （过滤条件）按照模块名称过滤。
module-id - string - 是否必填：否 - （过滤条件）按照模块ID过滤。
image-id      String      是否必填：否      （过滤条件）按照镜像ID过滤。
instance-family      String      是否必填：否      （过滤条件）按照机型family过滤。
security-group-id - string 是否必填：否 - （过滤条件）按照模块绑定的安全组id过滤。
每次请求的Filters的上限为10，Filter.Values的上限为5。
      */
    Filters?: Array<Filter>;
    /**
      * 偏移量，默认为0。关于Offset的更进一步介绍请参考 API 简介中的相关小节。
      */
    Offset?: number;
    /**
      * 返回数量，默认为20，最大值为100。关于Limit的更进一步介绍请参考 API 简介中的相关小节。
      */
    Limit?: number;
    /**
      * 指定排序字段。目前支持的可选值如下
instance-num 按实例数量排序。
node-num 按节点数量排序。
timestamp 按实例创建时间排序。
如果不传，默认按实例创建时间排序
      */
    OrderByField?: string;
    /**
      * 指定排序是降序还是升序。0表示降序； 1表示升序。如果不传默认为降序
      */
    OrderDirection?: number;
}
/**
 * RebootInstances请求参数结构体
 */
export interface RebootInstancesRequest {
    /**
      * 待重启的实例ID列表。在单次请求的过程中，单个region下的请求实例数上限为100。
      */
    InstanceIdSet: Array<string>;
    /**
      * 是否在正常重启失败后选择强制重启实例。取值范围：
TRUE：表示在正常重启失败后进行强制重启；
FALSE：表示在正常重启失败后不进行强制重启；
默认取值：FALSE。
      */
    ForceReboot?: boolean;
    /**
      * 关机类型。取值范围：
SOFT：表示软关机
HARD：表示硬关机
SOFT_FIRST：表示优先软关机，失败再执行硬关机

默认取值：SOFT。
      */
    StopType?: string;
}
/**
 * CreateDisks请求参数结构体
 */
export interface CreateDisksRequest {
    /**
      * 实例所在的位置。通过该参数可以指定实例所属可用区，所属项目。若不指定项目，将在默认项目下进行创建。
      */
    Placement: Placement;
    /**
      * 云硬盘计费类型。<br><li>PREPAID：预付费，即包年包月<br><li>POSTPAID_BY_HOUR：按小时后付费<br><li>CDCPAID：独享集群付费<br>各类型价格请参考云硬盘[价格总览](/document/product/362/2413)。
      */
    DiskChargeType: string;
    /**
      * 硬盘介质类型。取值范围：<br><li>CLOUD_BASIC：表示普通云硬盘<br><li>CLOUD_PREMIUM：表示高性能云硬盘<br><li>CLOUD_SSD：表示SSD云硬盘<br><li>CLOUD_HSSD：表示增强型SSD云硬盘<br><li>CLOUD_TSSD：表示极速型SSD云硬盘。
      */
    DiskType: string;
    /**
      * 云盘显示名称。不传则默认为“未命名”。最大长度不能超60个字节。
      */
    DiskName?: string;
    /**
      * 云盘绑定的标签。
      */
    Tags?: Array<Tag>;
    /**
      * 预付费模式，即包年包月相关参数设置。通过该参数指定包年包月云盘的购买时长、是否设置自动续费等属性。<br>创建预付费云盘该参数必传，创建按小时后付费云盘无需传该参数。
      */
    DiskChargePrepaid?: DiskChargePrepaid;
    /**
      * 创建云硬盘数量，不传则默认为1。单次请求最多可创建的云盘数有限制，具体参见[云硬盘使用限制](https://cloud.tencent.com/doc/product/362/5145)。
      */
    DiskCount?: number;
    /**
      * 可选参数。使用此参数可给云硬盘购买额外的性能。<br>当前仅支持极速型云盘（CLOUD_TSSD）和增强型SSD云硬盘（CLOUD_HSSD）
      */
    ThroughputPerformance?: number;
    /**
      * 云硬盘大小，单位为GB。<br><li>如果传入`SnapshotId`则可不传`DiskSize`，此时新建云盘的大小为快照大小<br><li>如果传入`SnapshotId`同时传入`DiskSize`，则云盘大小必须大于或等于快照大小<br><li>云盘大小取值范围参见云硬盘[产品分类](/document/product/362/2353)的说明。
      */
    DiskSize?: number;
    /**
      * 可选参数，默认为False。传入True时，云盘将创建为共享型云盘。
      */
    Shareable?: boolean;
    /**
      * 用于保证请求幂等性的字符串。该字符串由客户生成，需保证不同请求之间唯一，最大值不超过64个ASCII字符。若不指定该参数，则无法保证请求的幂等性。
      */
    ClientToken?: string;
    /**
      * 传入该参数用于创建加密云盘，取值固定为ENCRYPT。
      */
    Encrypt?: string;
    /**
      * 快照ID，如果传入则根据此快照创建云硬盘，快照类型必须为数据盘快照，可通过[DescribeSnapshots](/document/product/362/15647)接口查询快照，见输出参数DiskUsage解释。
      */
    SnapshotId?: string;
}
/**
 * AttachDisks请求参数结构体
 */
export interface AttachDisksRequest {
    /**
      * 云服务器实例ID。云盘将被挂载到此云服务器上，通过[DescribeInstances](/document/product/213/15728)接口查询。
      */
    InstanceId: string;
    /**
      * 将要被挂载的弹性云盘ID。通过[DescribeDisks](/document/product/362/16315)接口查询。单次最多可挂载10块弹性云盘。
      */
    DiskIds: Array<string>;
    /**
      * 可选参数，不传该参数则仅执行挂载操作。传入`True`时，会在挂载成功后将云硬盘设置为随云主机销毁模式，仅对按量计费云硬盘有效。
      */
    DeleteWithInstance?: boolean;
    /**
      * 可选参数，用于控制云盘挂载时使用的挂载模式，目前仅对黑石裸金属机型有效。取值范围：<br><li>PF<br><li>VF
      */
    AttachMode?: string;
}
/**
 * DescribeSnapshots请求参数结构体
 */
export interface DescribeSnapshotsRequest {
    /**
      * 要查询快照的ID列表。参数不支持同时指定`SnapshotIds`和`Filters`。
      */
    SnapshotIds?: Array<string>;
    /**
      * 过滤条件。参数不支持同时指定`SnapshotIds`和`Filters`。<br><li>snapshot-id - Array of String - 是否必填：否 -（过滤条件）按照快照的ID过滤。快照ID形如：`snap-11112222`。<br><li>snapshot-name - Array of String - 是否必填：否 -（过滤条件）按照快照名称过滤。<br><li>snapshot-state - Array of String - 是否必填：否 -（过滤条件）按照快照状态过滤。 (NORMAL：正常 | CREATING：创建中 | ROLLBACKING：回滚中。)<br><li>disk-usage - Array of String - 是否必填：否 -（过滤条件）按创建快照的云盘类型过滤。 (SYSTEM_DISK：代表系统盘 | DATA_DISK：代表数据盘。)<br><li>project-id  - Array of String - 是否必填：否 -（过滤条件）按云硬盘所属项目ID过滤。<br><li>disk-id  - Array of String - 是否必填：否 -（过滤条件）按照创建快照的云硬盘ID过滤。<br><li>zone - Array of String - 是否必填：否 -（过滤条件）按照[可用区](/document/product/213/15753#ZoneInfo)过滤。<br><li>encrypt - Array of String - 是否必填：否 -（过滤条件）按是否加密盘快照过滤。 (TRUE：表示加密盘快照 | FALSE：表示非加密盘快照。)
<li>snapshot-type- Array of String - 是否必填：否 -（过滤条件）根据snapshot-type指定的快照类型查询对应的快照。
(SHARED_SNAPSHOT：表示共享过来的快照 | PRIVATE_SNAPSHOT：表示自己私有快照。)
      */
    Filters?: Array<Filter>;
    /**
      * 返回数量，默认为20，最大值为100。关于`Limit`的更进一步介绍请参考 API [简介](/document/product/362/15633)中的相关小节。
      */
    Limit?: number;
    /**
      * 快照列表排序的依据字段。取值范围：<br><li>CREATE_TIME：依据快照的创建时间排序<br>默认按创建时间排序。
      */
    OrderField?: string;
    /**
      * 偏移量，默认为0。关于`Offset`的更进一步介绍请参考API[简介](/document/product/362/15633)中的相关小节。
      */
    Offset?: number;
    /**
      * 输出云盘列表的排列顺序。取值范围：<br><li>ASC：升序排列<br><li>DESC：降序排列。
      */
    Order?: string;
}
/**
 * RemovePrivateIpAddresses请求参数结构体
 */
export interface RemovePrivateIpAddressesRequest {
    /**
      * ECM 地域，形如ap-xian-ecm。
      */
    EcmRegion: string;
    /**
      * 弹性网卡实例ID，例如：eni-11112222。
      */
    NetworkInterfaceId: string;
    /**
      * 指定的内网IP信息，单次最多指定10个。
      */
    PrivateIpAddresses: Array<PrivateIpAddressSpecification>;
}
/**
 * 实例系列类型配置
 */
export interface InstanceFamilyTypeConfig {
    /**
      * 实例机型系列类型Id
      */
    InstanceFamilyType: string;
    /**
      * 实例机型系列类型名称
      */
    InstanceFamilyTypeName: string;
}
/**
 * DescribeImage请求参数结构体
 */
export interface DescribeImageRequest {
    /**
      * 过滤条件，每次请求的Filters的上限为10，详细的过滤条件如下：
image-id - String - 是否必填： 否 - （过滤条件）按照镜像ID进行过滤
image-type - String - 是否必填： 否 - （过滤条件）按照镜像类型进行过滤。取值范围：
PRIVATE_IMAGE: 私有镜像 (本帐户创建的镜像)
PUBLIC_IMAGE: 公共镜像 (腾讯云官方镜像)
instance-type -String - 是否必填: 否 - (过滤条件) 按机型过滤支持的镜像
image-name - String - 是否必填：否 - (过滤条件) 按镜像的名称模糊匹配，只能提供一个值
image-os - String - 是否必填：否 - (过滤条件) 按镜像系统的名称模糊匹配，只能提供一个值
      */
    Filters?: Array<Filter>;
    /**
      * 偏移量，默认为0。关于Offset的更进一步介绍请参考 API 简介中的相关小节。
      */
    Offset?: number;
    /**
      * 返回数量，默认为20，最大值为100。关于Limit的更进一步介绍请参考 API 简介中的相关小节。
      */
    Limit?: number;
}
/**
 * 操作系统支持的类型。
 */
export interface OsVersion {
    /**
      * 操作系统类型
      */
    OsName: string;
    /**
      * 支持的操作系统版本
注意：此字段可能返回 null，表示取不到有效值。
      */
    OsVersions: Array<string>;
    /**
      * 支持的操作系统架构
注意：此字段可能返回 null，表示取不到有效值。
      */
    Architecture: Array<string>;
}
/**
 * DescribeListeners返回参数结构体
 */
export interface DescribeListenersResponse {
    /**
      * 监听器列表
注意：此字段可能返回 null，表示取不到有效值。
      */
    Listeners?: Array<Listener>;
    /**
      * 总的监听器个数
注意：此字段可能返回 null，表示取不到有效值。
      */
    TotalCount?: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 目标和权重的描述信息
 */
export interface TargetsWeightRule {
    /**
      * 负载均衡监听器 ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    ListenerId?: string;
    /**
      * 要修改权重的后端机器列表
注意：此字段可能返回 null，表示取不到有效值。
      */
    Targets?: Array<Target>;
    /**
      * 后端服务新的转发权重，取值范围：0~100。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Weight?: number;
}
/**
 * StartInstances返回参数结构体
 */
export interface StartInstancesResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CreateVpc返回参数结构体
 */
export interface CreateVpcResponse {
    /**
      * Vpc对象。
      */
    Vpc?: VpcInfo;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * VPC辅助CIDR信息。
 */
export interface AssistantCidr {
    /**
      * VPC实例ID。形如：vpc-6v2ht8q5
      */
    VpcId: string;
    /**
      * 辅助CIDR。形如：172.16.0.0/16
      */
    CidrBlock: string;
    /**
      * 辅助CIDR类型（0：普通辅助CIDR，1：容器辅助CIDR），默认都是0。
      */
    AssistantType: number;
    /**
      * 辅助CIDR拆分的子网。
注意：此字段可能返回 null，表示取不到有效值。
注意：此字段可能返回 null，表示取不到有效值。
      */
    SubnetSet: Array<Subnet>;
}
/**
 * ModifyModuleIpDirect请求参数结构体
 */
export interface ModifyModuleIpDirectRequest {
    /**
      * 模块ID。
      */
    ModuleId: string;
    /**
      * 是否关闭IP直通。取值范围：
true：表示关闭IP直通
false：表示开通IP直通
      */
    CloseIpDirect: boolean;
}
/**
 * 实例网卡ip网络信息数组
 */
export interface InstanceNetworkInfo {
    /**
      * 实例内外网ip相关信息。
注意：此字段可能返回 null，表示取不到有效值。
      */
    AddressInfoSet: Array<AddressInfo>;
    /**
      * 网卡ID。
      */
    NetworkInterfaceId: string;
    /**
      * 网卡名称。
注意：此字段可能返回 null，表示取不到有效值。
      */
    NetworkInterfaceName: string;
    /**
      * 主网卡属性。true为主网卡，false为辅助网卡。
      */
    Primary: boolean;
}
/**
 * ResetInstancesMaxBandwidth返回参数结构体
 */
export interface ResetInstancesMaxBandwidthResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 节点实例数量信息
 */
export interface NodeInstanceNum {
    /**
      * 节点数量
      */
    NodeNum: number;
    /**
      * 实例数量
      */
    InstanceNum: number;
}
/**
 * DeleteListener请求参数结构体
 */
export interface DeleteListenerRequest {
    /**
      * 负载均衡实例 ID
      */
    LoadBalancerId: string;
    /**
      * 要删除的监听器 ID
      */
    ListenerId: string;
}
/**
 * ResetInstancesMaxBandwidth请求参数结构体
 */
export interface ResetInstancesMaxBandwidthRequest {
    /**
      * 待重置带宽上限的实例ID列表。在单次请求的过程中，单个region下的请求实例数上限为100。
      */
    InstanceIdSet: Array<string>;
    /**
      * 修改后的最大出带宽上限。
      */
    MaxBandwidthOut: number;
    /**
      * 修改后的最大入带宽上限。
      */
    MaxBandwidthIn?: number;
}
/**
 * 负载均衡的带宽限制等信息。
 */
export interface LoadBalancerInternetAccessible {
    /**
      * 最大出带宽，单位Mbps。默认值10
      */
    InternetMaxBandwidthOut?: number;
}
/**
 * ResetRoutes请求参数结构体
 */
export interface ResetRoutesRequest {
    /**
      * 路由表实例ID，例如：rtb-azd4dt1c。
      */
    RouteTableId: string;
    /**
      * 路由表名称，最大长度不能超过60个字节。
      */
    RouteTableName: string;
    /**
      * 路由策略。
      */
    Routes: Array<Route>;
}
/**
 * TerminateDisks请求参数结构体
 */
export interface TerminateDisksRequest {
    /**
      * 需退还的云盘ID列表。
      */
    DiskIds: Array<string>;
}
/**
 * 安全组关联的资源统计
 */
export interface SecurityGroupAssociationStatistics {
    /**
      * 安全组实例ID。
      */
    SecurityGroupId: string;
    /**
      * ECM实例数。
      */
    ECM: number;
    /**
      * ECM模块数。
      */
    Module: number;
    /**
      * 弹性网卡实例数。
      */
    ENI: number;
    /**
      * 被安全组引用数。
      */
    SG: number;
    /**
      * 负载均衡实例数。
      */
    CLB: number;
    /**
      * 全量实例的绑定统计。
      */
    InstanceStatistics: Array<InstanceStatistic>;
    /**
      * 所有资源的总计数（不包含被安全组引用数）。
      */
    TotalCount: number;
}
/**
 * ModifyDefaultSubnet返回参数结构体
 */
export interface ModifyDefaultSubnetResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeRouteTables返回参数结构体
 */
export interface DescribeRouteTablesResponse {
    /**
      * 符合条件的实例数量
      */
    TotalCount: number;
    /**
      * 路由表列表
注意：此字段可能返回 null，表示取不到有效值。
      */
    RouteTableSet: Array<RouteTable>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * StopInstances请求参数结构体
 */
export interface StopInstancesRequest {
    /**
      * 需要关机的实例ID列表。在单次请求的过程中，单个region下的请求实例数上限为100。
      */
    InstanceIdSet: Array<string>;
    /**
      * 是否在正常关闭失败后选择强制关闭实例，默认为false，即否。
      */
    ForceStop?: boolean;
    /**
      * 实例的关闭模式。取值范围：
SOFT_FIRST：表示在正常关闭失败后进行强制关闭;
HARD：直接强制关闭;
SOFT：仅软关机；
默认为SOFT。
      */
    StopType?: string;
}
/**
 * DetachNetworkInterface返回参数结构体
 */
export interface DetachNetworkInterfaceResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 镜像任务
 */
export interface ImageTask {
    /**
      * 镜像导入状态， PENDING, PROCESSING, SUCCESS, FAILED
      */
    State: string;
    /**
      * 导入失败(FAILED)时， 说明失败原因
注意：此字段可能返回 null，表示取不到有效值。
      */
    Message: string;
    /**
      * 镜像名称
      */
    ImageName: string;
    /**
      * 创建时间
      */
    CreateTime: string;
}
/**
 * ModifyListener请求参数结构体
 */
export interface ModifyListenerRequest {
    /**
      * 负载均衡实例 ID
      */
    LoadBalancerId: string;
    /**
      * 负载均衡监听器 ID
      */
    ListenerId: string;
    /**
      * 新的监听器名称
      */
    ListenerName?: string;
    /**
      * 会话保持时间，单位：秒。可选值：30~3600，默认 0，表示不开启。此参数仅适用于TCP/UDP监听器。
      */
    SessionExpireTime?: number;
    /**
      * 健康检查相关参数
      */
    HealthCheck?: HealthCheck;
    /**
      * 监听器转发的方式。可选值：WRR、LEAST_CONN
分别表示按权重轮询、最小连接数， 默认为 WRR。
      */
    Scheduler?: string;
}
/**
 * CreateImage请求参数结构体
 */
export interface CreateImageRequest {
    /**
      * 镜像名称。
      */
    ImageName: string;
    /**
      * 需要制作镜像的实例ID。
      */
    InstanceId: string;
    /**
      * 镜像描述。
      */
    ImageDescription?: string;
    /**
      * 是否执行强制关机以制作镜像。取值范围：
TRUE：表示自动关机后制作镜像
FALSE：表示开机状态制作，目前不支持，需要先手动关机
默认取值：FALSE。
      */
    ForcePoweroff?: string;
}
/**
 * 用于描述实例相关的信息。
 */
export interface Instance {
    /**
      * 实例ID。
      */
    InstanceId: string;
    /**
      * 实例名称，如ens-34241f3s。
注意：此字段可能返回 null，表示取不到有效值。
      */
    InstanceName: string;
    /**
      * 实例状态。取值范围：
PENDING：表示创建中
LAUNCH_FAILED：表示创建失败
RUNNING：表示运行中
STOPPED：表示关机
STARTING：表示开机中
STOPPING：表示关机中
REBOOTING：表示重启中
SHUTDOWN：表示停止待销毁
TERMINATING：表示销毁中。
      */
    InstanceState: string;
    /**
      * 实例当前使用的镜像的信息。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Image: Image;
    /**
      * 实例当前所属的模块简要信息。
注意：此字段可能返回 null，表示取不到有效值。
      */
    SimpleModule: SimpleModule;
    /**
      * 实例所在的位置相关信息。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Position: Position;
    /**
      * 实例的网络相关信息。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Internet: Internet;
    /**
      * 实例的配置相关信息。
注意：此字段可能返回 null，表示取不到有效值。
      */
    InstanceTypeConfig: InstanceTypeConfig;
    /**
      * 实例的创建时间。
注意：此字段可能返回 null，表示取不到有效值。
      */
    CreateTime: string;
    /**
      * 实例的标签信息。
注意：此字段可能返回 null，表示取不到有效值。
      */
    TagSet: Array<Tag>;
    /**
      * 实例最后一次操作。
注意：此字段可能返回 null，表示取不到有效值。
      */
    LatestOperation: string;
    /**
      * 实例最后一次操作结果。
注意：此字段可能返回 null，表示取不到有效值。
      */
    LatestOperationState: string;
    /**
      * 实例业务状态。取值范围：
NORMAL：表示正常状态的实例
EXPIRED：表示过期的实例
PROTECTIVELY_ISOLATED：表示被安全隔离的实例。
注意：此字段可能返回 null，表示取不到有效值。
      */
    RestrictState: string;
    /**
      * 系统盘大小，单位GB。
注意：此字段可能返回 null，表示取不到有效值。
      */
    SystemDiskSize: number;
    /**
      * 数据盘大小，单位GB。
注意：此字段可能返回 null，表示取不到有效值。
      */
    DataDiskSize: number;
    /**
      * 实例UUID
注意：此字段可能返回 null，表示取不到有效值。
      */
    UUID: string;
    /**
      * 付费方式。
    0为后付费。
    1为预付费。
注意：此字段可能返回 null，表示取不到有效值。
      */
    PayMode: number;
    /**
      * 过期时间。格式为yyyy-mm-dd HH:mm:ss。
注意：此字段可能返回 null，表示取不到有效值。
      */
    ExpireTime: string;
    /**
      * 隔离时间。格式为yyyy-mm-dd HH:mm:ss。
注意：此字段可能返回 null，表示取不到有效值。
      */
    IsolatedTime: string;
    /**
      * 是否自动续费。
      0为不自动续费。
      1为自动续费。
注意：此字段可能返回 null，表示取不到有效值。
      */
    RenewFlag: number;
    /**
      * 过期状态。
    NORMAL 表示机器运行正常。
    WILL_EXPIRE 表示即将过期。
    EXPIRED 表示已过期。
注意：此字段可能返回 null，表示取不到有效值。
      */
    ExpireState: string;
    /**
      * 系统盘信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    SystemDisk: DiskInfo;
    /**
      * 数据盘信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    DataDisks: Array<DiskInfo>;
    /**
      * 新实例标志
注意：此字段可能返回 null，表示取不到有效值。
      */
    NewFlag: number;
    /**
      * 实例所属安全组。该参数可以通过调用 DescribeSecurityGroups 的返回值中的sgId字段来获取。
注意：此字段可能返回 null，表示取不到有效值。
      */
    SecurityGroupIds: Array<string>;
    /**
      * VPC属性
注意：此字段可能返回 null，表示取不到有效值。
      */
    VirtualPrivateCloud: VirtualPrivateCloud;
    /**
      * 实例运营商字段。
注意：此字段可能返回 null，表示取不到有效值。
      */
    ISP: string;
    /**
      * 物理位置信息。注意该字段目前为保留字段，均为空值。
注意：此字段可能返回 null，表示取不到有效值。
      */
    PhysicalPosition: PhysicalPosition;
}
/**
 * 云镜服务；
 */
export interface RunSecurityServiceEnabled {
    /**
      * 是否开启。
      */
    Enabled?: boolean;
    /**
      * 云镜版本：0 基础版，1 专业版。目前仅支持基础版
      */
    Version?: number;
}
/**
 * DeleteLoadBalancer请求参数结构体
 */
export interface DeleteLoadBalancerRequest {
    /**
      * 要删除的负载均衡实例 ID数组，数组大小最大支持20
      */
    LoadBalancerIds?: Array<string>;
}
/**
 * DescribeVpcs请求参数结构体
 */
export interface DescribeVpcsRequest {
    /**
      * VPC实例ID。形如：vpc-f49l6u0z。每次请求的实例的上限为100。参数不支持同时指定VpcIds和Filters。
      */
    VpcIds?: Array<string>;
    /**
      * 过滤条件，参数不支持同时指定VpcIds和Filters。
vpc-name - String - VPC实例名称，只支持单值的模糊查询。
vpc-id - String - VPC实例ID形如：vpc-f49l6u0z。
cidr-block - String - vpc的cidr，只支持单值的模糊查询。
region - String - vpc的region。
tag-key - String -是否必填：否- 按照标签键进行过滤。
tag:tag-key - String - 是否必填：否 - 按照标签键值对进行过滤。
      */
    Filters?: Array<Filter>;
    /**
      * 偏移量
      */
    Offset?: number;
    /**
      * 返回数量
      */
    Limit?: number;
    /**
      * 地域
      */
    EcmRegion?: string;
    /**
      * 排序方式：time时间倒序, default按照网络规划排序
      */
    Sort?: string;
}
/**
 * DescribeRouteConflicts返回参数结构体
 */
export interface DescribeRouteConflictsResponse {
    /**
      * 路由策略冲突列表
注意：此字段可能返回 null，表示取不到有效值。
      */
    RouteConflictSet: Array<RouteConflict>;
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
 * BatchDeregisterTargets请求参数结构体
 */
export interface BatchDeregisterTargetsRequest {
    /**
      * 负载均衡ID
      */
    LoadBalancerId: string;
    /**
      * 解绑目标
      */
    Targets: Array<BatchTarget>;
}
/**
 * ModifyListener返回参数结构体
 */
export interface ModifyListenerResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeTargetHealth返回参数结构体
 */
export interface DescribeTargetHealthResponse {
    /**
      * 负载均衡实例列表
注意：此字段可能返回 null，表示取不到有效值。
      */
    LoadBalancers?: Array<LoadBalancerHealth>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ModifyDefaultSubnet请求参数结构体
 */
export interface ModifyDefaultSubnetRequest {
    /**
      * ECM地域
      */
    EcmRegion: string;
    /**
      * ECM可用区
      */
    Zone: string;
    /**
      * 私有网络ID
      */
    VpcId: string;
    /**
      * 子网ID
      */
    SubnetId: string;
}
/**
 * DescribeTaskResult请求参数结构体
 */
export interface DescribeTaskResultRequest {
    /**
      * ECM 地域
      */
    EcmRegion: string;
    /**
      * 异步任务ID。
      */
    TaskId: string;
}
/**
 * 描述了快照的详细信息
 */
export interface Snapshot {
    /**
      * 快照所在的位置。
      */
    Placement?: Placement;
    /**
      * 是否为跨地域复制的快照。取值范围：<br><li>true：表示为跨地域复制的快照。<br><li>false:本地域的快照。
      */
    CopyFromRemote: boolean;
    /**
      * 是否为永久快照。取值范围：<br><li>true：永久快照<br><li>false：非永久快照。
      */
    IsPermanent?: boolean;
    /**
      * 快照名称，用户自定义的快照别名。调用[ModifySnapshotAttribute](/document/product/362/15650)可修改此字段。
      */
    SnapshotName?: string;
    /**
      * 快照创建进度百分比，快照创建成功后此字段恒为100。
      */
    Percent?: number;
    /**
      * 快照关联的镜像列表。
      */
    Images: Array<Image>;
    /**
      * 快照当前被共享数。
      */
    ShareReference: number;
    /**
      * 快照类型，目前该项取值可以为PRIVATE_SNAPSHOT或者SHARED_SNAPSHOT
      */
    SnapshotType: string;
    /**
      * 创建此快照的云硬盘大小，单位GB。
      */
    DiskSize?: number;
    /**
      * 创建此快照的云硬盘ID。
      */
    DiskId?: string;
    /**
      * 快照正在跨地域复制的目的地域，默认取值为[]。
      */
    CopyingToRegions: Array<string>;
    /**
      * 快照ID。
      */
    SnapshotId?: string;
    /**
      * 创建此快照的云硬盘类型。取值范围：<br><li>SYSTEM_DISK：系统盘<br><li>DATA_DISK：数据盘。
      */
    DiskUsage?: string;
    /**
      * 是否为加密盘创建的快照。取值范围：<br><li>true：该快照为加密盘创建的<br><li>false:非加密盘创建的快照。
      */
    Encrypt?: boolean;
    /**
      * 快照的创建时间。
      */
    CreateTime?: string;
    /**
      * 快照关联的镜像个数。
      */
    ImageCount: number;
    /**
      * 快照的状态。取值范围：<br><li>NORMAL：正常<br><li>CREATING：创建中<br><li>ROLLBACKING：回滚中<br><li>COPYING_FROM_REMOTE：跨地域复制中<br><li>CHECKING_COPIED：复制校验中<br><li>TORECYCLE：待回收。
      */
    SnapshotState?: string;
    /**
      * 快照的到期时间。
      */
    DeadlineTime: string;
    /**
      * 快照开始共享的时间。
注意：此字段可能返回 null，表示取不到有效值。
      */
    TimeStartShare: string;
}
/**
 * AttachDisks返回参数结构体
 */
export interface AttachDisksResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeLoadBalancers请求参数结构体
 */
export interface DescribeLoadBalancersRequest {
    /**
      * 区域。如果不传则默认查询所有区域。
      */
    EcmRegion?: string;
    /**
      * 负载均衡实例 ID。
      */
    LoadBalancerIds?: Array<string>;
    /**
      * 负载均衡实例的名称。
      */
    LoadBalancerName?: string;
    /**
      * 负载均衡实例的 VIP 地址，支持多个。
      */
    LoadBalancerVips?: Array<string>;
    /**
      * 负载均衡绑定的后端服务的内网 IP。
      */
    BackendPrivateIps?: Array<string>;
    /**
      * 数据偏移量，默认为 0。
      */
    Offset?: number;
    /**
      * 返回负载均衡实例的数量，默认为20，最大值为100。
      */
    Limit?: number;
    /**
      * 负载均衡是否绑定后端服务，0：没有绑定后端服务，1：绑定后端服务，-1：查询全部。
如果不传则默认查询全部。
      */
    WithBackend?: number;
    /**
      * 负载均衡实例所属私有网络唯一ID，如 vpc-bhqkbhdx。
      */
    VpcId?: string;
    /**
      * 每次请求的`Filters`的上限为10，`Filter.Values`的上限为100。详细的过滤条件如下：
tag-key - String - 是否必填：否 - （过滤条件）按照标签的键过滤。
      */
    Filters?: Array<Filter>;
    /**
      * 安全组。
      */
    SecurityGroup?: string;
}
/**
 * DeleteRoutes返回参数结构体
 */
export interface DeleteRoutesResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeCustomImageTask请求参数结构体
 */
export interface DescribeCustomImageTaskRequest {
    /**
      * 支持key,value查询
task-id: 异步任务ID
image-id: 镜像ID
image-name: 镜像名称
      */
    Filters: Array<Filter>;
}
/**
 * DescribeSecurityGroupAssociationStatistics返回参数结构体
 */
export interface DescribeSecurityGroupAssociationStatisticsResponse {
    /**
      * 安全组关联实例统计。
      */
    SecurityGroupAssociationStatisticsSet?: Array<SecurityGroupAssociationStatistics>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * AssignPrivateIpAddresses返回参数结构体
 */
export interface AssignPrivateIpAddressesResponse {
    /**
      * 内网IP详细信息。
注意：此字段可能返回 null，表示取不到有效值。
      */
    PrivateIpAddressSet?: Array<PrivateIpAddressSpecification>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 描述cpu,内存等维度的价格
 */
export interface PriceDetail {
    /**
      * 表示折扣，20 表示20%，打2折
      */
    Discount: number;
    /**
      * 打折后价格，单位分
      */
    DiscountPrice: number;
    /**
      * 折扣前价格，单位分
      */
    OriginalPrice: number;
}
/**
 * ImportImage返回参数结构体
 */
export interface ImportImageResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeSecurityGroups请求参数结构体
 */
export interface DescribeSecurityGroupsRequest {
    /**
      * 安全组实例ID，例如：esg-33ocnj9n，可通过[DescribeSecurityGroups](https://cloud.tencent.com/document/product/1108/47697)获取。每次请求的实例的上限为100。参数不支持同时指定SecurityGroupIds和Filters。
      */
    SecurityGroupIds?: Array<string>;
    /**
      * 过滤条件，参数不支持同时指定SecurityGroupIds和Filters。
security-group-id - String - （过滤条件）安全组ID。
security-group-name - String - （过滤条件）安全组名称。
tag-key - String -是否必填：否- （过滤条件）按照标签键进行过滤。
tag:tag-key - String - 是否必填：否 - （过滤条件）按照标签键值对进行过滤。 tag-key使用具体的标签键进行替换。
      */
    Filters?: Array<Filter>;
    /**
      * 偏移量，默认为0。
      */
    Offset?: number;
    /**
      * 返回数量，默认为20，最大值为100。
      */
    Limit?: number;
}
/**
 * DescribePriceRunInstance返回参数结构体
 */
export interface DescribePriceRunInstanceResponse {
    /**
      * 实例价格信息
      */
    InstancePrice: InstancesPrice;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DeleteImage返回参数结构体
 */
export interface DeleteImageResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ModifySubnetAttribute返回参数结构体
 */
export interface ModifySubnetAttributeResponse {
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
      * 要解绑的安全组ID，类似esg-efil73jd，只支持解绑单个安全组。
      */
    SecurityGroupIds: Array<string>;
    /**
      * 被解绑的实例ID，类似ein-lesecurk，支持指定多个实例 。
      */
    InstanceIds: Array<string>;
}
/**
 * 弹性网卡
 */
export interface NetworkInterface {
    /**
      * 弹性网卡实例ID，例如：eni-f1xjkw1b。
      */
    NetworkInterfaceId: string;
    /**
      * 弹性网卡名称。
      */
    NetworkInterfaceName: string;
    /**
      * 弹性网卡描述。
      */
    NetworkInterfaceDescription: string;
    /**
      * 子网实例ID。
      */
    SubnetId: string;
    /**
      * VPC实例ID。
      */
    VpcId: string;
    /**
      * 绑定的安全组。
注意：此字段可能返回 null，表示取不到有效值。
      */
    GroupSet: Array<string>;
    /**
      * 是否是主网卡。
      */
    Primary: boolean;
    /**
      * MAC地址。
      */
    MacAddress: string;
    /**
      * 弹性网卡状态：
PENDING：创建中
AVAILABLE：可用的
ATTACHING：绑定中
DETACHING：解绑中
DELETING：删除中
      */
    State: string;
    /**
      * 内网IP信息。
注意：此字段可能返回 null，表示取不到有效值。
      */
    PrivateIpAddressSet: Array<PrivateIpAddressSpecification>;
    /**
      * 绑定的云服务器对象。
注意：此字段可能返回 null，表示取不到有效值。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Attachment: NetworkInterfaceAttachment;
    /**
      * 可用区。
      */
    Zone: string;
    /**
      * 创建时间。
      */
    CreatedTime: string;
    /**
      * IPv6地址列表。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Ipv6AddressSet: Array<Ipv6Address>;
    /**
      * 标签键值对。
注意：此字段可能返回 null，表示取不到有效值。
      */
    TagSet: Array<Tag>;
    /**
      * 网卡类型。0 - 弹性网卡；1 - evm弹性网卡。
      */
    EniType: number;
    /**
      * EcmRegion ecm区域
      */
    EcmRegion: string;
}
/**
 * 描述密钥对信息
 */
export interface KeyPair {
    /**
      * 密钥对的ID，是密钥对的唯一标识。
注意：此字段可能返回 null，表示取不到有效值。
      */
    KeyId: string;
    /**
      * 密钥对名称。
注意：此字段可能返回 null，表示取不到有效值。
      */
    KeyName: string;
    /**
      * 密钥对所属的项目ID。
注意：此字段可能返回 null，表示取不到有效值。
      */
    ProjectId: number;
    /**
      * 密钥对描述信息。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Description: string;
    /**
      * 密钥对的纯文本公钥。
注意：此字段可能返回 null，表示取不到有效值。
      */
    PublicKey: string;
    /**
      * 钥对的纯文本私钥。腾讯云不会保管私钥，请用户自行妥善保存。
注意：此字段可能返回 null，表示取不到有效值。
      */
    PrivateKey: string;
    /**
      * 钥关联的实例ID列表。
注意：此字段可能返回 null，表示取不到有效值。
      */
    AssociatedInstanceIds: Array<string>;
    /**
      * 创建时间。按照ISO8601标准表示，并且使用UTC时间。格式为：YYYY-MM-DDThh:mm:ssZ。
注意：此字段可能返回 null，表示取不到有效值。
      */
    CreatedTime: string;
}
/**
 * DescribeVpcs返回参数结构体
 */
export interface DescribeVpcsResponse {
    /**
      * 符合条件的对象数。
      */
    TotalCount?: number;
    /**
      * 私有网络对象。
注意：此字段可能返回 null，表示取不到有效值。
      */
    VpcSet?: Array<VpcInfo>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ModifySecurityGroupAttribute请求参数结构体
 */
export interface ModifySecurityGroupAttributeRequest {
    /**
      * 安全组实例ID，例如esg-33ocnj9n，可通过DescribeSecurityGroups获取。
      */
    SecurityGroupId: string;
    /**
      * 安全组名称，可任意命名，但不得超过60个字符。
      */
    GroupName?: string;
    /**
      * 安全组备注，最多100个字符。
      */
    GroupDescription?: string;
}
/**
 * DescribePackingQuotaGroup返回参数结构体
 */
export interface DescribePackingQuotaGroupResponse {
    /**
      * 装箱配额组
      */
    PackingQuotaSet?: Array<PackingQuotaGroup>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 负载均衡实例信息
 */
export interface LoadBalancer {
    /**
      * 区域。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Region: string;
    /**
      * 位置信息。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Position: Position;
    /**
      * 负载均衡实例 ID。
注意：此字段可能返回 null，表示取不到有效值。
      */
    LoadBalancerId: string;
    /**
      * 负载均衡实例的名称。
注意：此字段可能返回 null，表示取不到有效值。
      */
    LoadBalancerName: string;
    /**
      * 负载均衡实例的网络类型：OPEN：公网属性
注意：此字段可能返回 null，表示取不到有效值。
      */
    LoadBalancerType: string;
    /**
      * 负载均衡实例的 VIP 列表。
注意：此字段可能返回 null，表示取不到有效值。
      */
    LoadBalancerVips: Array<string>;
    /**
      * 负载均衡实例的状态，包括
 0：创建中，1：正常运行。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Status: number;
    /**
      * 负载均衡实例的创建时间。
注意：此字段可能返回 null，表示取不到有效值。
      */
    CreateTime: string;
    /**
      * 负载均衡实例的上次状态转换时间。
注意：此字段可能返回 null，表示取不到有效值。
      */
    StatusTime: string;
    /**
      * 私有网络的 ID。
注意：此字段可能返回 null，表示取不到有效值。
      */
    VpcId: string;
    /**
      * 负载均衡实例的标签信息。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Tags: Array<TagInfo>;
    /**
      * 负载均衡IP地址所属的ISP。
注意：此字段可能返回 null，表示取不到有效值。
      */
    VipIsp: string;
    /**
      * 负载均衡实例的网络属性。
注意：此字段可能返回 null，表示取不到有效值。
      */
    NetworkAttributes: LoadBalancerInternetAccessible;
    /**
      * 安全组。
注意：此字段可能返回 null，表示取不到有效值。
      */
    SecureGroups: Array<string>;
    /**
      * 后端机器是否放通来自ELB的流量。
注意：此字段可能返回 null，表示取不到有效值。
      */
    LoadBalancerPassToTarget: boolean;
}
/**
 * ModifyModuleName返回参数结构体
 */
export interface ModifyModuleNameResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribePeakBaseOverview请求参数结构体
 */
export interface DescribePeakBaseOverviewRequest {
    /**
      * 开始时间（xxxx-xx-xx）如2019-08-14，默认为一周之前的日期，不应与当前日期间隔超过90天。
      */
    StartTime?: string;
    /**
      * 结束时间（xxxx-xx-xx）如2019-08-14，默认为昨天，不应与当前日期间隔超过90天。当开始与结束间隔不超过30天时返回1小时粒度的数据，否则返回3小时粒度的数据。
      */
    EndTime?: string;
}
/**
 * BatchModifyTargetWeight返回参数结构体
 */
export interface BatchModifyTargetWeightResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 用于描述实例的统计信息
 */
export interface InstanceStatistic {
    /**
      * 实例的类型
      */
    InstanceType: string;
    /**
      * 实例的个数
      */
    InstanceCount: number;
}
/**
 * DeleteSecurityGroupPolicies请求参数结构体
 */
export interface DeleteSecurityGroupPoliciesRequest {
    /**
      * 安全组实例ID，例如esg-33ocnj9n，可通过DescribeSecurityGroups获取。
      */
    SecurityGroupId: string;
    /**
      * 安全组规则集合。一个请求中只能删除单个方向的一条或多条规则。支持指定索引（PolicyIndex） 匹配删除和安全组规则匹配删除两种方式，一个请求中只能使用一种匹配方式。
      */
    SecurityGroupPolicySet: SecurityGroupPolicySet;
}
/**
 * ImportCustomImage返回参数结构体
 */
export interface ImportCustomImageResponse {
    /**
      * 镜像ID
      */
    ImageId?: string;
    /**
      * 异步任务ID，可根据DescribeCustomImageTask查询任务信息
      */
    TaskId?: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * AssociateSecurityGroups请求参数结构体
 */
export interface AssociateSecurityGroupsRequest {
    /**
      * 要绑定的安全组ID，类似esg-efil73jd，只支持绑定单个安全组。
      */
    SecurityGroupIds: Array<string>;
    /**
      * 被绑定的实例ID，类似ein-lesecurk，支持指定多个实例，每次请求批量实例的上限为100。
      */
    InstanceIds: Array<string>;
}
/**
 * 路由冲突对象
 */
export interface RouteConflict {
    /**
      * 路由表实例ID
      */
    RouteTableId?: string;
    /**
      * 要检查的与之冲突的目的端
      */
    DestinationCidrBlock: string;
    /**
      * 冲突的路由策略列表
注意：此字段可能返回 null，表示取不到有效值。
      */
    ConflictSet: Array<Route>;
}
/**
 * DeleteSubnet返回参数结构体
 */
export interface DeleteSubnetResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 运营商信息
 */
export interface ISP {
    /**
      * 运营商ID
      */
    ISPId: string;
    /**
      * 运营商名称
      */
    ISPName: string;
}
/**
 * 描述 EIP 信息
 */
export interface Address {
    /**
      * EIP的ID，是EIP的唯一标识。
      */
    AddressId: string;
    /**
      * EIP名称。
      */
    AddressName: string;
    /**
      * EIP状态，包含'CREATING'(创建中),'BINDING'(绑定中),'BIND'(已绑定),'UNBINDING'(解绑中),'UNBIND'(已解绑),'OFFLINING'(释放中),'BIND_ENI'(绑定悬空弹性网卡)
      */
    AddressStatus: string;
    /**
      * 外网IP地址
      */
    AddressIp: string;
    /**
      * 绑定的资源实例ID。
注意：此字段可能返回 null，表示取不到有效值。
      */
    InstanceId: string;
    /**
      * 创建时间。ISO 8601 格式：YYYY-MM-DDTHH:mm:ss.sssZ
      */
    CreatedTime: string;
    /**
      * 绑定的弹性网卡ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    NetworkInterfaceId: string;
    /**
      * 绑定的资源内网ip
注意：此字段可能返回 null，表示取不到有效值。
      */
    PrivateAddressIp: string;
    /**
      * 资源隔离状态。true表示eip处于隔离状态，false表示资源处于未隔离状态
      */
    IsArrears: boolean;
    /**
      * 资源封堵状态。true表示eip处于封堵状态，false表示eip处于未封堵状态
      */
    IsBlocked: boolean;
    /**
      * eip是否支持直通模式。true表示eip支持直通模式，false表示资源不支持直通模式
      */
    IsEipDirectConnection: boolean;
    /**
      * eip资源类型，包括"CalcIP","WanIP","EIP","AnycastEIP"。其中"CalcIP"表示设备ip，“WanIP”表示普通公网ip，“EIP”表示弹性公网ip，“AnycastEip”表示加速EIP
      */
    AddressType: string;
    /**
      * eip是否在解绑后自动释放。true表示eip将会在解绑后自动释放，false表示eip在解绑后不会自动释放
      */
    CascadeRelease: boolean;
    /**
      * 运营商，CTCC电信，CUCC联通，CMCC移动
注意：此字段可能返回 null，表示取不到有效值。
      */
    InternetServiceProvider: string;
    /**
      * 带宽上限
注意：此字段可能返回 null，表示取不到有效值。
      */
    Bandwidth: number;
    /**
      * 计费模式
注意：此字段可能返回 null，表示取不到有效值。
      */
    PayMode: string;
}
/**
 * 峰值信息
 */
export interface PeakBase {
    /**
      * CPU峰值
      */
    PeakCpuNum: number;
    /**
      * 内存峰值
      */
    PeakMemoryNum: number;
    /**
      * 硬盘峰值
      */
    PeakStorageNum: number;
    /**
      * 记录时间
      */
    RecordTime: string;
}
/**
 * ReplaceRouteTableAssociation请求参数结构体
 */
export interface ReplaceRouteTableAssociationRequest {
    /**
      * 子网实例ID，例如：subnet-3x5lf5q0。可通过DescribeSubnets接口查询。
      */
    SubnetId: string;
    /**
      * 路由表实例ID，例如：rtb-azd4dt1c。
      */
    RouteTableId: string;
    /**
      * ECM 地域
      */
    EcmRegion: string;
}
/**
 * ModifyTargetWeight返回参数结构体
 */
export interface ModifyTargetWeightResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeCustomImageTask返回参数结构体
 */
export interface DescribeCustomImageTaskResponse {
    /**
      * 导入任务详情
注意：此字段可能返回 null，表示取不到有效值。
      */
    ImageTaskSet?: Array<ImageTask>;
    /**
      * 总数
      */
    TotalCount?: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 运行商统计信息
 */
export interface ISPCounter {
    /**
      * 运营商名称
      */
    ProviderName: string;
    /**
      * 节点数量
      */
    ProviderNodeNum: number;
    /**
      * 实例数量
      */
    ProvederInstanceNum: number;
    /**
      * Zone实例信息结构体数组
      */
    ZoneInstanceInfoSet: Array<ZoneInstanceInfo>;
}
/**
 * CreateModule返回参数结构体
 */
export interface CreateModuleResponse {
    /**
      * 模块ID，创建模块成功后分配给该模块的ID。
      */
    ModuleId: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribePackingQuotaGroup请求参数结构体
 */
export interface DescribePackingQuotaGroupRequest {
    /**
      * 过滤条件，name取值为：Zone-可用区， InstanceType-实例类型，DataDiskSize - 数据盘大小
      */
    Filters?: Array<Filter>;
}
/**
 * 安全组规则对象
 */
export interface SecurityGroupPolicy {
    /**
      * 安全组规则索引号
      */
    PolicyIndex?: number;
    /**
      * 协议, 取值: TCP,UDP, ICMP。
      */
    Protocol?: string;
    /**
      * 端口(all, 离散port, range)。
      */
    Port?: string;
    /**
      * 协议端口ID或者协议端口组ID。ServiceTemplate和Protocol+Port互斥。
      */
    ServiceTemplate?: ServiceTemplateSpecification;
    /**
      * 网段或IP(互斥)。
      */
    CidrBlock?: string;
    /**
      * 安全组实例ID，例如：esg-ohuuioma。
      */
    SecurityGroupId?: string;
    /**
      * IP地址ID或者ID地址组ID。
      */
    AddressTemplate?: AddressTemplateSpecification;
    /**
      * ACCEPT 或 DROP。
      */
    Action?: string;
    /**
      * 安全组规则描述。
      */
    PolicyDescription?: string;
    /**
      * 修改时间，例如 2020-07-22 19：27：23
注意：此字段可能返回 null，表示取不到有效值。
      */
    ModifyTime?: string;
    /**
      * 网段或IPv6(互斥)。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Ipv6CidrBlock?: string;
}
/**
 * TerminateDisks返回参数结构体
 */
export interface TerminateDisksResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 负载均衡器健康状态
 */
export interface LoadBalancerHealth {
    /**
      * 负载均衡实例ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    LoadBalancerId: string;
    /**
      * 负载均衡实例名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    LoadBalancerName: string;
    /**
      * 监听器列表
注意：此字段可能返回 null，表示取不到有效值。
      */
    Listeners: Array<ListenerHealth>;
}
/**
 * CreateListener返回参数结构体
 */
export interface CreateListenerResponse {
    /**
      * 创建的监听器的唯一标识数组
注意：此字段可能返回 null，表示取不到有效值。
      */
    ListenerIds: Array<string>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DeleteVpc请求参数结构体
 */
export interface DeleteVpcRequest {
    /**
      * VPC实例ID。可通过DescribeVpcs接口返回值中的VpcId获取。
      */
    VpcId: string;
    /**
      * ECM 地域
      */
    EcmRegion: string;
}
/**
 * 描述了云硬盘的详细信息
 */
export interface Disk {
    /**
      * 云盘是否与挂载的实例一起销毁。<br><li>true:销毁实例时会同时销毁云盘，只支持按小时后付费云盘。<br><li>false：销毁实例时不销毁云盘。
注意：此字段可能返回 null，表示取不到有效值。
      */
    DeleteWithInstance: boolean;
    /**
      * 自动续费标识。取值范围：<br><li>NOTIFY_AND_AUTO_RENEW：通知过期且自动续费<br><li>NOTIFY_AND_MANUAL_RENEW：通知过期不自动续费<br><li>DISABLE_NOTIFY_AND_MANUAL_RENEW：不通知过期不自动续费。
注意：此字段可能返回 null，表示取不到有效值。
      */
    RenewFlag?: string;
    /**
      * 硬盘介质类型。取值范围：<br><li>CLOUD_BASIC：表示普通云硬盘<br><li>CLOUD_PREMIUM：表示高性能云硬盘<br><li>CLOUD_SSD：表示SSD云硬盘<br><li>CLOUD_HSSD：表示增强型SSD云硬盘<br><li>CLOUD_TSSD：表示极速型SSD云硬盘。
      */
    DiskType?: string;
    /**
      * 云盘状态。取值范围：<br><li>UNATTACHED：未挂载<br><li>ATTACHING：挂载中<br><li>ATTACHED：已挂载<br><li>DETACHING：解挂中<br><li>EXPANDING：扩容中<br><li>ROLLBACKING：回滚中<br><li>TORECYCLE：待回收<br><li>DUMPING：拷贝硬盘中。
      */
    DiskState?: string;
    /**
      * 云盘拥有的快照总数。
      */
    SnapshotCount: number;
    /**
      * 云盘已挂载到子机，且子机与云盘都是包年包月。<br><li>true：子机设置了自动续费标识，但云盘未设置<br><li>false：云盘自动续费标识正常。
注意：此字段可能返回 null，表示取不到有效值。
      */
    AutoRenewFlagError?: boolean;
    /**
      * 云盘是否处于快照回滚状态。取值范围：<br><li>false:表示不处于快照回滚状态<br><li>true:表示处于快照回滚状态。
      */
    Rollbacking?: boolean;
    /**
      * 对于非共享型云盘，该参数为空数组。对于共享型云盘，则表示该云盘当前被挂载到的CVM实例InstanceId
      */
    InstanceIdList: Array<string>;
    /**
      * 云盘是否为加密盘。取值范围：<br><li>false:表示非加密盘<br><li>true:表示加密盘。
      */
    Encrypt?: boolean;
    /**
      * 云硬盘名称。
      */
    DiskName?: string;
    /**
      * 云硬盘因欠费销毁或者到期销毁时， 是否使用快照备份数据的标识。true表示销毁时创建快照进行数据备份。false表示直接销毁，不进行数据备份。
      */
    BackupDisk: boolean;
    /**
      * 与云盘绑定的标签，云盘未绑定标签则取值为空。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Tags: Array<Tag>;
    /**
      * 云硬盘挂载的云主机ID。
      */
    InstanceId?: string;
    /**
      * 云盘关联的定期快照ID。只有在调用DescribeDisks接口时，入参ReturnBindAutoSnapshotPolicy取值为TRUE才会返回该参数。
注意：此字段可能返回 null，表示取不到有效值。
      */
    AutoSnapshotPolicyIds?: Array<string>;
    /**
      * 云硬盘额外性能值，单位MB/s。
注意：此字段可能返回 null，表示取不到有效值。
      */
    ThroughputPerformance: number;
    /**
      * 云盘是否处于类型变更中。取值范围：<br><li>false:表示云盘不处于类型变更中<br><li>true:表示云盘已发起类型变更，正处于迁移中。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Migrating: boolean;
    /**
      * 云硬盘ID。
      */
    DiskId?: string;
    /**
      * 云盘拥有的快照总容量，单位为MB。
      */
    SnapshotSize: number;
    /**
      * 云硬盘所在的位置。
      */
    Placement?: Placement;
    /**
      * 判断预付费的云盘是否支持主动退还。<br><li>true:支持主动退还<br><li>false:不支持主动退还。
注意：此字段可能返回 null，表示取不到有效值。
      */
    IsReturnable?: boolean;
    /**
      * 云盘是否挂载到云主机上。取值范围：<br><li>false:表示未挂载<br><li>true:表示已挂载。
      */
    Attached?: boolean;
    /**
      * 云硬盘大小，单位GB。
      */
    DiskSize?: number;
    /**
      * 云盘类型变更的迁移进度，取值0到100。
注意：此字段可能返回 null，表示取不到有效值。
      */
    MigratePercent: number;
    /**
      * 云硬盘类型。取值范围：<br><li>SYSTEM_DISK：系统盘<br><li>DATA_DISK：数据盘。
      */
    DiskUsage?: string;
    /**
      * 付费模式。取值范围：<br><li>PREPAID：预付费，即包年包月<br><li>POSTPAID_BY_HOUR：后付费，即按量计费。
      */
    DiskChargeType?: string;
    /**
      * 是否为弹性云盘，false表示非弹性云盘，true表示弹性云盘。
      */
    Portable?: boolean;
    /**
      * 云盘是否具备创建快照的能力。取值范围：<br><li>false表示不具备<br><li>true表示具备。
      */
    SnapshotAbility?: boolean;
    /**
      * 在云盘已挂载到实例，且实例与云盘都是包年包月的条件下，此字段才有意义。<br><li>true:云盘到期时间早于实例。<br><li>false：云盘到期时间晚于实例。
注意：此字段可能返回 null，表示取不到有效值。
      */
    DeadlineError?: boolean;
    /**
      * 云盘快照回滚的进度。
      */
    RollbackPercent?: number;
    /**
      * 当前时间距离盘到期的天数（仅对预付费盘有意义）。
注意：此字段可能返回 null，表示取不到有效值。
      */
    DifferDaysOfDeadline: number;
    /**
      * 预付费云盘在不支持主动退还的情况下，该参数表明不支持主动退还的具体原因。取值范围：<br><li>1：云硬盘已经退还<br><li>2：云硬盘已过期<br><li>3：云盘不支持退还<br><li>8：超过可退还数量的限制。
注意：此字段可能返回 null，表示取不到有效值。
      */
    ReturnFailCode?: number;
    /**
      * 云盘是否为共享型云盘。
      */
    Shareable: boolean;
    /**
      * 云硬盘的创建时间。
      */
    CreateTime?: string;
    /**
      * 云硬盘的到期时间。
      */
    DeadlineTime: string;
    /**
      * 云盘的挂载类型。取值范围：<br><li>PF: PF挂载<br><li>VF: VF挂载
注意：此字段可能返回 null，表示取不到有效值。
      */
    AttachMode: string;
}
/**
 * CreateSubnet返回参数结构体
 */
export interface CreateSubnetResponse {
    /**
      * 子网对象。
      */
    Subnet?: Subnet;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeSecurityGroupPolicies返回参数结构体
 */
export interface DescribeSecurityGroupPoliciesResponse {
    /**
      * 安全组规则集合。
      */
    SecurityGroupPolicySet?: SecurityGroupPolicySet;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ModifySecurityGroupPolicies请求参数结构体
 */
export interface ModifySecurityGroupPoliciesRequest {
    /**
      * 安全组实例ID，例如esg-33ocnj9n，可通过DescribeSecurityGroups获取。
      */
    SecurityGroupId: string;
    /**
      * 安全组规则集合。 SecurityGroupPolicySet对象必须同时指定新的出（Egress）入（Ingress）站规则。 SecurityGroupPolicy对象不支持自定义索引（PolicyIndex）。
      */
    SecurityGroupPolicySet: SecurityGroupPolicySet;
    /**
      * 排序安全组标识。值为True时，支持安全组排序；SortPolicys不存在或SortPolicys为False时，为修改安全组规则。
      */
    SortPolicys?: boolean;
}
/**
 * 网络硬盘上下限数据
 */
export interface NetworkStorageRange {
    /**
      * 网络带宽上限
      */
    MaxBandwidth: number;
    /**
      * 数据盘上限
      */
    MaxSystemDiskSize: number;
    /**
      * 网络带宽下限
      */
    MinBandwidth: number;
    /**
      * 数据盘下限
      */
    MinSystemDiskSize: number;
    /**
      * 最大数据盘大小
      */
    MaxDataDiskSize: number;
    /**
      * 最小数据盘大小
      */
    MinDataDiskSize: number;
    /**
      * 建议带宽
      */
    SuggestBandwidth: number;
    /**
      * 建议硬盘大小
      */
    SuggestDataDiskSize: number;
    /**
      * 建议系统盘大小
      */
    SuggestSystemDiskSize: number;
    /**
      * Cpu核数峰值
      */
    MaxVcpu: number;
    /**
      * Cpu核最小值
      */
    MinVcpu: number;
    /**
      * 单次请求最大cpu核数
      */
    MaxVcpuPerReq: number;
    /**
      * 带宽步长
      */
    PerBandwidth: number;
    /**
      * 数据盘步长
      */
    PerDataDisk: number;
    /**
      * 总模块数量
      */
    MaxModuleNum: number;
}
/**
 * ReplaceRoutes请求参数结构体
 */
export interface ReplaceRoutesRequest {
    /**
      * 路由表实例ID。
      */
    RouteTableId: string;
    /**
      * 路由策略对象。
      */
    Routes: Array<Route>;
}
/**
 * DescribeTargetHealth请求参数结构体
 */
export interface DescribeTargetHealthRequest {
    /**
      * 要查询的负载均衡实例 ID列表
      */
    LoadBalancerIds: Array<string>;
}
/**
 * ModifyInstancesAttribute返回参数结构体
 */
export interface ModifyInstancesAttributeResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ModifySubnetAttribute请求参数结构体
 */
export interface ModifySubnetAttributeRequest {
    /**
      * 子网实例ID。形如：subnet-pxir56ns。
      */
    SubnetId: string;
    /**
      * ECM 地域
      */
    EcmRegion: string;
    /**
      * 子网名称，最大长度不能超过60个字节。
      */
    SubnetName?: string;
    /**
      * 子网是否开启广播。
      */
    EnableBroadcast?: string;
    /**
      * 子网的标签键值
      */
    Tags?: Array<Tag>;
}
/**
 * DisassociateAddress请求参数结构体
 */
export interface DisassociateAddressRequest {
    /**
      * ECM 地域
      */
    EcmRegion: string;
    /**
      * 标识 EIP 的唯一 ID。EIP 唯一 ID 形如：eip-11112222。
      */
    AddressId: string;
    /**
      * 表示解绑 EIP 之后是否分配普通公网 IP。取值范围：
TRUE：表示解绑 EIP 之后分配普通公网 IP。
FALSE：表示解绑 EIP 之后不分配普通公网 IP。
默认取值：FALSE。

只有满足以下条件时才能指定该参数：
只有在解绑主网卡的主内网 IP 上的 EIP 时才能指定该参数。
解绑 EIP 后重新分配普通公网 IP 操作一个账号每天最多操作 10 次；详情可通过 DescribeAddressQuota 接口获取。
      */
    ReallocateNormalPublicIp?: boolean;
}
/**
 * 节点统计数据
 */
export interface ModuleCounter {
    /**
      * 运营商统计信息列表
      */
    ISPCounterSet: Array<ISPCounter>;
    /**
      * 省份数量
      */
    ProvinceNum: number;
    /**
      * 城市数量
      */
    CityNum: number;
    /**
      * 节点数量
      */
    NodeNum: number;
    /**
      * 实例数量
      */
    InstanceNum: number;
}
/**
 * 任务查询
 */
export interface TaskInput {
    /**
      * 操作名，即API名称，比如：CreateImage
      */
    Operation: string;
    /**
      * 任务id
      */
    TaskId: string;
}
/**
 * ModifyLoadBalancerAttributes返回参数结构体
 */
export interface ModifyLoadBalancerAttributesResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 标签信息。
 */
export interface Tag {
    /**
      * 标签健。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Key: string;
    /**
      * 标签值。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Value: string;
}
/**
 * DescribeDefaultSubnet请求参数结构体
 */
export interface DescribeDefaultSubnetRequest {
    /**
      * ECM地域
      */
    EcmRegion: string;
    /**
      * ECM可用区
      */
    Zone: string;
}
/**
 * RunInstances返回参数结构体
 */
export interface RunInstancesResponse {
    /**
      * 创建中的实例ID列表
注意：此字段可能返回 null，表示取不到有效值。
      */
    InstanceIdSet: Array<string>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 后端的健康检查状态
 */
export interface TargetHealth {
    /**
      * Target的内网IP
注意：此字段可能返回 null，表示取不到有效值。
      */
    IP: string;
    /**
      * Target绑定的端口
注意：此字段可能返回 null，表示取不到有效值。
      */
    Port: number;
    /**
      * 当前健康状态，true：健康，false：不健康（包括尚未开始探测、探测中、状态异常等几种状态）。只有处于健康状态（且权重大于0），负载均衡才会向其转发流量。
注意：此字段可能返回 null，表示取不到有效值。
      */
    HealthStatus: boolean;
    /**
      * Target的实例ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    TargetId: string;
    /**
      * 当前健康状态的详细信息。如：Alive、Dead、Unknown、Close。Alive状态为健康，Dead状态为异常，Unknown状态包括尚未开始探测、探测中、状态未知，Close为未配置健康检查。
注意：此字段可能返回 null，表示取不到有效值。
      */
    HealthStatusDetail: string;
}
/**
 * DescribeSecurityGroupLimits返回参数结构体
 */
export interface DescribeSecurityGroupLimitsResponse {
    /**
      * 用户安全组配额限制。
      */
    SecurityGroupLimitSet?: SecurityGroupLimitSet;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DisassociateInstancesKeyPairs请求参数结构体
 */
export interface DisassociateInstancesKeyPairsRequest {
    /**
      * 可以通过以下方式获取可用的实例ID：
通过登录控制台查询实例ID。
通过调用接口 DescribeInstances ，取返回信息中的 InstanceId 获取实例ID。
      */
    InstanceIds: Array<string>;
    /**
      * 密钥对ID列表，每次请求批量密钥对的上限为100。密钥对ID形如：skey-11112222。

可以通过以下方式获取可用的密钥ID：
通过登录控制台查询密钥ID。
通过调用接口 DescribeKeyPairs ，取返回信息中的 KeyId 获取密钥对ID。
      */
    KeyIds: Array<string>;
    /**
      * 是否对运行中的实例选择强制关机。建议对运行中的实例先手动关机，然后再解绑密钥。取值范围：
TRUE：表示在正常关机失败后进行强制关机。
FALSE：表示在正常关机失败后不进行强制关机。

默认取值：FALSE。
      */
    ForceStop?: boolean;
}
/**
 * 路由表关联关系
 */
export interface RouteTableAssociation {
    /**
      * 子网实例ID
      */
    SubnetId?: string;
    /**
      * 路由表实例ID
      */
    RouteTableId?: string;
}
/**
 * ModifyTargetPort返回参数结构体
 */
export interface ModifyTargetPortResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 客户对应月份的带宽信息
 */
export interface MonthNetwork {
    /**
      * 节点zone信息
      */
    ZoneInfo: ZoneInfo;
    /**
      * 带宽月份 示例"202103"
      */
    Month: string;
    /**
      * 带宽包id 格式如"bwp-xxxxxxxx"
      */
    BandwidthPkgId: string;
    /**
      * 运营商简称 取值范围"CUCC;CTCC;CMCC"
      */
    Isp: string;
    /**
      * 入网带宽包峰值,取值范围0.0-xxx.xxx
      */
    TrafficMaxIn: number;
    /**
      * 出网带宽包峰值,取值范围0.0-xxx.xxx
      */
    TrafficMaxOut: number;
    /**
      * 计费带宽,取值范围0.0-xxx.xxx
      */
    FeeTraffic: number;
    /**
      * 月计费带宽起始时间 格式"yyyy-mm-dd HH:mm:ss"
      */
    StartTime: string;
    /**
      * 月计费带宽结束时间 格式"yyyy-mm-dd HH:mm:ss"
      */
    EndTime: string;
    /**
      * 月计费带宽实际有效天数 整形必须大于等于0
      */
    EffectiveDays: number;
    /**
      * 指定月份的实际天数 实例 30
      */
    MonthDays: number;
    /**
      * 有效天占比 保留小数点后四位0.2134
      */
    EffectiveDaysRate: number;
    /**
      * 计费带宽包类型 实例"Address","LoadBalance","AddressIpv6"
      */
    BandwidthPkgType: string;
}
/**
 * ResetRoutes返回参数结构体
 */
export interface ResetRoutesResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * AllocateAddresses返回参数结构体
 */
export interface AllocateAddressesResponse {
    /**
      * 申请到的 EIP 的唯一 ID 列表。
注意：此字段可能返回 null，表示取不到有效值。
      */
    AddressSet: Array<string>;
    /**
      * 异步任务TaskId。可以使用DescribeTaskResult接口查询任务状态。
      */
    TaskId: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CreateImage返回参数结构体
 */
export interface CreateImageResponse {
    /**
      * 任务id
      */
    TaskId?: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ModifyModuleNetwork请求参数结构体
 */
export interface ModifyModuleNetworkRequest {
    /**
      * 模块Id
      */
    ModuleId: string;
    /**
      * 默认出带宽上限
      */
    DefaultBandwidth: number;
    /**
      * 默认入带宽上限
      */
    DefaultBandwidthIn?: number;
}
/**
 * IP地址模版
 */
export interface AddressTemplateSpecification {
    /**
      * IP地址ID，例如：eipm-2uw6ujo6。
      */
    AddressId: string;
    /**
      * IP地址组ID，例如：eipmg-2uw6ujo6。
      */
    AddressGroupId: string;
}
/**
 * AssignIpv6Addresses请求参数结构体
 */
export interface AssignIpv6AddressesRequest {
    /**
      * ECM 地域
      */
    EcmRegion: string;
    /**
      * 弹性网卡实例ID，形如：eni-1snva0vd。目前只支持主网卡上分配。
      */
    NetworkInterfaceId: string;
    /**
      * 指定的IPv6地址列表，单次最多指定10个。与入参Ipv6AddressCount合并计算配额。与Ipv6AddressCount必填一个。
      */
    Ipv6Addresses?: Array<Ipv6Address>;
    /**
      * 自动分配IPv6地址个数，内网IP地址个数总和不能超过配数。与入参Ipv6Addresses合并计算配额。与Ipv6Addresses必填一个。
      */
    Ipv6AddressCount?: number;
}
/**
 * DescribeModuleDetail返回参数结构体
 */
export interface DescribeModuleDetailResponse {
    /**
      * 模块的详细信息，详细见数据结构中的ModuleInfo。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Module?: Module;
    /**
      * 模块的统计信息，详细见数据结构中的ModuleCounterInfo。
注意：此字段可能返回 null，表示取不到有效值。
      */
    ModuleCounter?: ModuleCounter;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 负责均衡后端信息
 */
export interface Backend {
    /**
      * 后端服务的唯一 ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    InstanceId?: string;
    /**
      * 后端服务的监听端口
注意：此字段可能返回 null，表示取不到有效值。
      */
    Port?: number;
    /**
      * 后端服务的转发权重，取值范围：[0, 100]，默认为 10。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Weight?: number;
    /**
      * 后端服务的内网 IP
注意：此字段可能返回 null，表示取不到有效值。
      */
    PrivateIpAddresses?: Array<string>;
    /**
      * 后端服务被绑定的时间
注意：此字段可能返回 null，表示取不到有效值。
      */
    RegisteredTime?: string;
    /**
      * 弹性网卡唯一ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    EniId?: string;
    /**
      * 后端服务的外网 IP
注意：此字段可能返回 null，表示取不到有效值。
      */
    PublicIpAddresses: Array<string>;
    /**
      * 后端服务的实例名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    InstanceName: string;
}
/**
 * ModifyIpv6AddressesAttribute返回参数结构体
 */
export interface ModifyIpv6AddressesAttributeResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 镜像文件信息
 */
export interface ImageUrl {
    /**
      * 镜像文件COS链接，如设置私有读写，需授权腾讯云ECM运营账号访问权限。
      */
    ImageFile: string;
}
/**
 * ModifyModuleSecurityGroups返回参数结构体
 */
export interface ModifyModuleSecurityGroupsResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ReplaceSecurityGroupPolicy请求参数结构体
 */
export interface ReplaceSecurityGroupPolicyRequest {
    /**
      * 安全组实例ID，例如esg-33ocnj9n，可通过DescribeSecurityGroups获取
      */
    SecurityGroupId: string;
    /**
      * 安全组规则集合对象。
      */
    SecurityGroupPolicySet: SecurityGroupPolicySet;
}
/**
 * CreateKeyPair返回参数结构体
 */
export interface CreateKeyPairResponse {
    /**
      * 密钥对信息。
      */
    KeyPair: KeyPair;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DeleteModule返回参数结构体
 */
export interface DeleteModuleResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeModuleDetail请求参数结构体
 */
export interface DescribeModuleDetailRequest {
    /**
      * 模块ID，如em-qn46snq8。
      */
    ModuleId: string;
}
/**
 * ModifyRouteTableAttribute请求参数结构体
 */
export interface ModifyRouteTableAttributeRequest {
    /**
      * 路由表实例ID，例如：rtb-azd4dt1c
      */
    RouteTableId: string;
    /**
      * 路由表名称
      */
    RouteTableName: string;
}
/**
 * ModifyModuleNetwork返回参数结构体
 */
export interface ModifyModuleNetworkResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeImportImageOs请求参数结构体
 */
export declare type DescribeImportImageOsRequest = null;
/**
 * CreateKeyPair请求参数结构体
 */
export interface CreateKeyPairRequest {
    /**
      * 密钥对名称，可由数字，字母和下划线组成，长度不超过25个字符。
      */
    KeyName: string;
}
/**
 * ModifyModuleIpDirect返回参数结构体
 */
export interface ModifyModuleIpDirectResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ResetInstancesPassword请求参数结构体
 */
export interface ResetInstancesPasswordRequest {
    /**
      * 待重置密码的实例ID列表。在单次请求的过程中，单个region下的请求实例数上限为100。
      */
    InstanceIdSet: Array<string>;
    /**
      * 新密码，Linux实例密码必须8到16位，至少包括两项[a-z，A-Z]、[0-9]和[( ) ~ ~ ! @ # $ % ^ & * - + = _ | { } [ ] : ; ' < > , . ? /]中的符号。密码不允许以/符号开头。
Windows实例密码必须12到16位，至少包括三项[a-z]，[A-Z]，[0-9]和[( ) ~ ~ ! @ # $ % ^ & * - + = _ | { } [ ] : ; ' < > , . ? /]中的符号。密码不允许以/符号开头。
如果实例即包含Linux实例又包含Windows实例，则密码复杂度限制按照Windows实例的限制。
      */
    Password: string;
    /**
      * 是否强制关机，默认为false。
      */
    ForceStop?: boolean;
    /**
      * 待重置密码的实例的用户名，不得超过64个字符。若未指定用户名，则对于Linux而言，默认重置root用户的密码，对于Windows而言，默认重置administrator的密码。
      */
    UserName?: string;
}
/**
 * AssociateAddress返回参数结构体
 */
export interface AssociateAddressResponse {
    /**
      * 异步任务TaskId。可以使用DescribeTaskResult接口查询任务状态。
      */
    TaskId?: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeAddresses请求参数结构体
 */
export interface DescribeAddressesRequest {
    /**
      * ECM 地域
      */
    EcmRegion: string;
    /**
      * 标识 EIP 的唯一 ID 列表。EIP 唯一 ID 形如：eip-11112222。参数不支持同时指定AddressIds和Filters。
      */
    AddressIds?: Array<string>;
    /**
      * 每次请求的Filters的上限为10，Filter.Values的上限为5。参数不支持同时指定AddressIds和Filters。详细的过滤条件如下：
address-id - String - 是否必填：否 - （过滤条件）按照 EIP 的唯一 ID 过滤。EIP 唯一 ID 形如：eip-11112222。
address-name - String - 是否必填：否 - （过滤条件）按照 EIP 名称过滤。不支持模糊过滤。
address-ip - String - 是否必填：否 - （过滤条件）按照 EIP 的 IP 地址过滤。
address-status - String - 是否必填：否 - （过滤条件）按照 EIP 的状态过滤。取值范围：详见EIP状态列表。
instance-id - String - 是否必填：否 - （过滤条件）按照 EIP 绑定的实例 ID 过滤。实例 ID 形如：ins-11112222。
private-ip-address - String - 是否必填：否 - （过滤条件）按照 EIP 绑定的内网 IP 过滤。
network-interface-id - String - 是否必填：否 - （过滤条件）按照 EIP 绑定的弹性网卡 ID 过滤。弹性网卡 ID 形如：eni-11112222。
is-arrears - String - 是否必填：否 - （过滤条件）按照 EIP 是否欠费进行过滤。（TRUE：EIP 处于欠费状态|FALSE：EIP 费用状态正常）
      */
    Filters?: Array<Filter>;
    /**
      * 偏移量，默认为0。
      */
    Offset?: number;
    /**
      * 返回数量，默认为20，最大值为100。
      */
    Limit?: number;
}
/**
 * DescribeSecurityGroupPolicies请求参数结构体
 */
export interface DescribeSecurityGroupPoliciesRequest {
    /**
      * 安全组实例ID，例如：esg-33ocnj9n，可通过[DescribeSecurityGroups](https://cloud.tencent.com/document/product/1108/47697)获取。
      */
    SecurityGroupId: string;
}
/**
 * CreateSecurityGroup返回参数结构体
 */
export interface CreateSecurityGroupResponse {
    /**
      * 安全组对象。
      */
    SecurityGroup?: SecurityGroup;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DeleteListener返回参数结构体
 */
export interface DeleteListenerResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ResetInstances请求参数结构体
 */
export interface ResetInstancesRequest {
    /**
      * 待重装的实例ID列表。
      */
    InstanceIdSet: Array<string>;
    /**
      * 重装使用的镜像ID，若未指定，则使用各个实例当前的镜像进行重装。
      */
    ImageId?: string;
    /**
      * 密码设置，若未指定，则后续将以站内信的形式通知密码。
      */
    Password?: string;
    /**
      * 是否开启云监控和云镜服务，未指定时默认开启。
      */
    EnhancedService?: EnhancedService;
    /**
      * 是否保留数据盘数据，取值"true"/"false"。默认为"true"
      */
    KeepData?: string;
    /**
      * 保持镜像的原始设置。该参数与Password或KeyIds.N不能同时指定。只有使用自定义镜像、共享镜像或外部导入镜像创建实例时才能指定该参数为TRUE。取值范围：
TRUE：表示保持镜像的登录设置
FALSE：表示不保持镜像的登录设置

默认取值：FALSE。
注意：此字段可能返回 null，表示取不到有效值。
      */
    KeepImageLogin?: string;
}
/**
 * DeleteImage请求参数结构体
 */
export interface DeleteImageRequest {
    /**
      * 镜像ID列表。
      */
    ImageIDSet: Array<string>;
}
/**
 * region维度的网络峰值信息
 */
export interface PeakNetworkRegionInfo {
    /**
      * region信息
      */
    Region: string;
    /**
      * 网络峰值集合
注意：此字段可能返回 null，表示取不到有效值。
      */
    PeakNetworkSet: Array<PeakNetwork>;
}
/**
 * ModifyHaVipAttribute请求参数结构体
 */
export interface ModifyHaVipAttributeRequest {
    /**
      * HAVIP唯一ID，形如：havip-9o233uri。
      */
    HaVipId: string;
    /**
      * HAVIP名称，可任意命名，但不得超过60个字符。
      */
    HaVipName: string;
}
/**
 * ModifyAddressesBandwidth请求参数结构体
 */
export interface ModifyAddressesBandwidthRequest {
    /**
      * ECM 地域
      */
    EcmRegion: string;
    /**
      * EIP唯一标识ID，形如'eip-xxxxxxx'
      */
    AddressIds: Array<string>;
    /**
      * 调整带宽目标值
      */
    InternetMaxBandwidthOut: number;
}
/**
 * 实例价格信息
 */
export interface InstancesPrice {
    /**
      * 分部描述实例子维度的价格
      */
    InstancePricesPartDetail: InstancePricesPartDetail;
    /**
      * 实例总价折扣
      */
    Discount: number;
    /**
      * 折扣后价格
      */
    DiscountPrice: number;
    /**
      * 折扣前价格，原始总价
      */
    OriginalPrice: number;
}
/**
 * ModifyImageAttribute返回参数结构体
 */
export interface ModifyImageAttributeResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * Module的简要信息
 */
export interface SimpleModule {
    /**
      * 模块ID
      */
    ModuleId: string;
    /**
      * 模块名称
      */
    ModuleName: string;
}
/**
 * 标签信息。
 */
export interface TagInfo {
    /**
      * 标签的键。
      */
    TagKey?: string;
    /**
      * 标签的值。
      */
    TagValue?: string;
}
/**
 * ModifyImageAttribute请求参数结构体
 */
export interface ModifyImageAttributeRequest {
    /**
      * 镜像ID，形如img-gvbnzy6f
      */
    ImageId: string;
    /**
      * 设置新的镜像名称；必须满足下列限制：
不得超过20个字符。
- 镜像名称不能与已有镜像重复。
      */
    ImageName?: string;
    /**
      * 设置新的镜像描述；必须满足下列限制：
- 不得超过60个字符。
      */
    ImageDescription?: string;
}
/**
 * 机器网络资源限制
 */
export interface InstanceNetworkLimitConfig {
    /**
      * cpu核数
      */
    CpuNum: number;
    /**
      * 网卡数量限制
      */
    NetworkInterfaceLimit: number;
    /**
      * 每张网卡内网ip数量限制
      */
    InnerIpPerNetworkInterface: number;
    /**
      * 每个实例的外网ip限制
      */
    PublicIpPerInstance: number;
}
/**
 * CreateModule请求参数结构体
 */
export interface CreateModuleRequest {
    /**
      * 模块名称，如视频直播模块。限制：模块名称不得以空格开头，长度不得超过60个字符。
      */
    ModuleName: string;
    /**
      * 默认带宽，单位：M。范围不得超过带宽上下限，详看DescribeConfig。
      */
    DefaultBandWidth: number;
    /**
      * 默认镜像，如img-qsdf3ff2。
      */
    DefaultImageId: string;
    /**
      * 机型ID。
      */
    InstanceType: string;
    /**
      * 默认系统盘大小，单位：G，默认大小为50G。范围不得超过系统盘上下限制，详看DescribeConfig。
      */
    DefaultSystemDiskSize: number;
    /**
      * 默认数据盘大小，单位：G。范围不得超过数据盘范围大小，详看DescribeConfig。
      */
    DefaultDataDiskSize: number;
    /**
      * 是否关闭IP直通。取值范围：
true：表示关闭IP直通
false：表示开通IP直通
      */
    CloseIpDirect?: boolean;
    /**
      * 标签列表。
      */
    TagSpecification?: Array<TagSpecification>;
    /**
      * 模块默认安全组列表
      */
    SecurityGroups?: Array<string>;
    /**
      * 默认入带宽，单位：M。范围不得超过带宽上下限，详看DescribeConfig。
      */
    DefaultBandWidthIn?: number;
    /**
      * 是否禁止分配外网IP
      */
    DisableWanIp?: boolean;
    /**
      * 系统盘信息。
      */
    SystemDisk?: SystemDisk;
    /**
      * 数据盘信息。
      */
    DataDisks?: Array<DataDisk>;
}
/**
 * CreateLoadBalancer返回参数结构体
 */
export interface CreateLoadBalancerResponse {
    /**
      * 由负载均衡实例ID组成的数组
注意：此字段可能返回 null，表示取不到有效值。
      */
    LoadBalancerIds?: Array<string>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * SetLoadBalancerSecurityGroups请求参数结构体
 */
export interface SetLoadBalancerSecurityGroupsRequest {
    /**
      * 负载均衡实例 ID
      */
    LoadBalancerId: string;
    /**
      * 安全组ID构成的数组，一个负载均衡实例最多可绑定5个安全组，如果要解绑所有安全组，可不传此参数，或传入空数组
      */
    SecurityGroups?: Array<string>;
}
/**
 * DescribeImportImageOs返回参数结构体
 */
export interface DescribeImportImageOsResponse {
    /**
      * 支持的导入镜像的操作系统类型
      */
    ImportImageOsListSupported?: ImageOsList;
    /**
      * 支持的导入镜像的操作系统版本
      */
    ImportImageOsVersionSet?: Array<OsVersion>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * MigrateNetworkInterface返回参数结构体
 */
export interface MigrateNetworkInterfaceResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 模块信息
 */
export interface Module {
    /**
      * 模块Id。
      */
    ModuleId: string;
    /**
      * 模块名称。
      */
    ModuleName: string;
    /**
      * 模块状态：
NORMAL：正常。
DELETING：删除中
DELETEFAILED：删除失败。
      */
    ModuleState: string;
    /**
      * 默认系统盘大小。
      */
    DefaultSystemDiskSize: number;
    /**
      * 默认数据盘大小。
      */
    DefaultDataDiskSize: number;
    /**
      * 默认机型。
      */
    InstanceTypeConfig: InstanceTypeConfig;
    /**
      * 默认镜像。
      */
    DefaultImage: Image;
    /**
      * 创建时间。
      */
    CreateTime: string;
    /**
      * 默认出带宽。
      */
    DefaultBandwidth: number;
    /**
      * 标签集合。
注意：此字段可能返回 null，表示取不到有效值。
      */
    TagSet: Array<Tag>;
    /**
      * 是否关闭IP直通。
      */
    CloseIpDirect: number;
    /**
      * 默认安全组id列表。
      */
    SecurityGroupIds: Array<string>;
    /**
      * 默认入带宽。
      */
    DefaultBandwidthIn: number;
    /**
      * 自定义脚本数据
      */
    UserData: string;
    /**
      * 系统盘信息。
      */
    SystemDisk: SystemDisk;
    /**
      * 数据盘信息。
      */
    DataDisks: Array<DataDisk>;
}
/**
 * 监听器健康状态
 */
export interface ListenerHealth {
    /**
      * 监听器ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    ListenerId: string;
    /**
      * 监听器名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    ListenerName: string;
    /**
      * 监听器的协议
注意：此字段可能返回 null，表示取不到有效值。
      */
    Protocol: string;
    /**
      * 监听器的端口
注意：此字段可能返回 null，表示取不到有效值。
      */
    Port: number;
    /**
      * 监听器的转发规则列表
注意：此字段可能返回 null，表示取不到有效值。
      */
    Rules: Array<RuleHealth>;
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
 * IP直通相关的信息
 */
export interface RunEIPDirectServiceEnabled {
    /**
      * 是否开通IP直通。取值范围：
TRUE：表示开通IP直通
FALSE：表示不开通IP直通
默认取值：TRUE。
windows镜像目前不支持IP直通。
      */
    Enabled?: boolean;
}
/**
 * ModifyTargetPort请求参数结构体
 */
export interface ModifyTargetPortRequest {
    /**
      * 负载均衡实例 ID
      */
    LoadBalancerId: string;
    /**
      * 负载均衡监听器 ID
      */
    ListenerId: string;
    /**
      * 要修改端口的后端服务列表
      */
    Targets: Array<Target>;
    /**
      * 后端服务绑定到监听器或转发规则的新端口
      */
    NewPort: number;
}
/**
 * IPv6地址信息。
 */
export interface Ipv6Address {
    /**
      * IPv6地址，形如：3402:4e00:20:100:0:8cd9:2a67:71f3
      */
    Address: string;
    /**
      * 是否是主IP。
      */
    Primary?: boolean;
    /**
      * EIP实例ID，形如：eip-hxlqja90。
      */
    AddressId?: string;
    /**
      * 描述信息。
      */
    Description?: string;
    /**
      * 公网IP是否被封堵。
      */
    IsWanIpBlocked?: boolean;
    /**
      * IPv6地址状态：
PENDING：生产中
MIGRATING：迁移中
DELETING：删除中
AVAILABLE：可用的
      */
    State?: string;
}
/**
 * CreateNetworkInterface请求参数结构体
 */
export interface CreateNetworkInterfaceRequest {
    /**
      * VPC实例ID。可通过DescribeVpcs接口返回值中的VpcId获取。
      */
    VpcId: string;
    /**
      * 弹性网卡名称，最大长度不能超过60个字节。
      */
    NetworkInterfaceName: string;
    /**
      * 弹性网卡所在的子网实例ID，例如：subnet-0ap8nwca。
      */
    SubnetId: string;
    /**
      * ECM 地域，形如ap-xian-ecm。
      */
    EcmRegion: string;
    /**
      * 弹性网卡描述，可任意命名，但不得超过60个字符。
      */
    NetworkInterfaceDescription?: string;
    /**
      * 新申请的内网IP地址个数，内网IP地址个数总和不能超过配额数。
      */
    SecondaryPrivateIpAddressCount?: number;
    /**
      * 指定绑定的安全组，例如：['sg-1dd51d']。
      */
    SecurityGroupIds?: Array<string>;
    /**
      * 指定的内网IP信息，单次最多指定10个。
      */
    PrivateIpAddresses?: Array<PrivateIpAddressSpecification>;
    /**
      * 指定绑定的标签列表，例如：[{"Key": "city", "Value": "shanghai"}]
      */
    Tags?: Array<Tag>;
}
/**
 * SetSecurityGroupForLoadbalancers请求参数结构体
 */
export interface SetSecurityGroupForLoadbalancersRequest {
    /**
      * 负载均衡实例ID数组
      */
    LoadBalancerIds: Array<string>;
    /**
      * 安全组ID，如 esg-12345678
      */
    SecurityGroup: string;
    /**
      * ADD 绑定安全组；
DEL 解绑安全组
      */
    OperationType: string;
}
/**
 * DescribeInstancesDeniedActions请求参数结构体
 */
export interface DescribeInstancesDeniedActionsRequest {
    /**
      * 无
      */
    InstanceIdSet: Array<string>;
}
/**
 * ModifyLoadBalancerAttributes请求参数结构体
 */
export interface ModifyLoadBalancerAttributesRequest {
    /**
      * 负载均衡的唯一ID
      */
    LoadBalancerId: string;
    /**
      * 负载均衡实例名称
      */
    LoadBalancerName?: string;
    /**
      * 网络计费及带宽相关参数
      */
    InternetChargeInfo?: LoadBalancerInternetAccessible;
    /**
      * Target是否放通来自ELB的流量。开启放通（true）：只验证ELB上的安全组；不开启放通（false）：需同时验证ELB和后端实例上的安全组。
      */
    LoadBalancerPassToTarget?: boolean;
}
/**
 * DeleteHaVip返回参数结构体
 */
export interface DeleteHaVipResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 省份信息
 */
export interface Province {
    /**
      * 省份Id
      */
    ProvinceId: string;
    /**
      * 省份名称
      */
    ProvinceName: string;
}
/**
 * DescribeSubnets请求参数结构体
 */
export interface DescribeSubnetsRequest {
    /**
      * 子网实例ID查询。形如：subnet-pxir56ns。每次请求的实例的上限为100。参数不支持同时指定SubnetIds和Filters。
      */
    SubnetIds?: Array<string>;
    /**
      * 过滤条件，参数不支持同时指定SubnetIds和Filters。
subnet-id - String - Subnet实例名称。
subnet-name - String - 子网名称。只支持单值的模糊查询。
cidr-block - String - 子网网段，形如: 192.168.1.0 。只支持单值的模糊查询。
vpc-id - String - VPC实例ID，形如：vpc-f49l6u0z。
vpc-cidr-block  - String - vpc网段，形如: 192.168.1.0 。只支持单值的模糊查询。
region - String - ECM地域
zone - String - 可用区。
tag-key - String -是否必填：否- 按照标签键进行过滤。
tag:tag-key - String - 是否必填：否 - 按照标签键值对进行过滤。
      */
    Filters?: Array<Filter>;
    /**
      * 偏移量
      */
    Offset?: string;
    /**
      * 返回数量
      */
    Limit?: string;
    /**
      * ECM 地域
      */
    EcmRegion?: string;
    /**
      * 排序方式：time时间倒序, default按照网络规划排序
      */
    Sort?: string;
}
/**
 * CreateSubnet请求参数结构体
 */
export interface CreateSubnetRequest {
    /**
      * 待操作的VPC实例ID。可通过DescribeVpcs接口返回值中的VpcId获取。
      */
    VpcId: string;
    /**
      * 子网名称，最大长度不能超过60个字节。
      */
    SubnetName: string;
    /**
      * 子网网段，子网网段必须在VPC网段内，相同VPC内子网网段不能重叠。
      */
    CidrBlock: string;
    /**
      * 子网所在的可用区ID，不同子网选择不同可用区可以做跨可用区灾备。
      */
    Zone: string;
    /**
      * ECM 地域
      */
    EcmRegion: string;
    /**
      * 指定绑定的标签列表，例如：[{"Key": "city", "Value": "shanghai"}]
      */
    Tags?: Array<Tag>;
}
/**
 * HAVIP对象。
 */
export interface HaVip {
    /**
      * HAVIP的ID，是HAVIP的唯一标识。
      */
    HaVipId: string;
    /**
      * HAVIP名称。
      */
    HaVipName: string;
    /**
      * 虚拟IP地址。
      */
    Vip: string;
    /**
      * HAVIP所在私有网络ID。
      */
    VpcId: string;
    /**
      * HAVIP所在子网ID。
      */
    SubnetId: string;
    /**
      * HAVIP关联弹性网卡ID。
      */
    NetworkInterfaceId: string;
    /**
      * 被绑定的实例ID。
      */
    InstanceId: string;
    /**
      * 绑定EIP。
      */
    AddressIp: string;
    /**
      * 状态：
AVAILABLE：运行中。
UNBIND：未绑定。
      */
    State: string;
    /**
      * 创建时间。
      */
    CreatedTime: string;
    /**
      * 使用havip的业务标识。
      */
    Business: string;
}
/**
 * ModifyAddressesBandwidth返回参数结构体
 */
export interface ModifyAddressesBandwidthResponse {
    /**
      * 异步任务TaskId。
      */
    TaskId?: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * RunInstances请求参数结构体
 */
export interface RunInstancesRequest {
    /**
      * 需要创建实例的可用区及创建数目及运营商的列表。在单次请求的过程中，单个region下的请求创建实例数上限为100
      */
    ZoneInstanceCountISPSet: Array<ZoneInstanceCountISP>;
    /**
      * 实例登录密码。不同操作系统类型密码复杂度限制不一样，具体如下：
Linux实例密码必须8到30位，至少包括两项[a-z]，[A-Z]、[0-9] 和 [( ) ` ~ ! @ # $ % ^ & - + = | { } [ ] : ; ' , . ? / ]中的特殊符。Windows实例密码必须12到30位，至少包括三项[a-z]，[A-Z]，[0-9] 和 [( ) ` ~ ! @ # $ % ^ & - + = | { } [ ] : ; ' , . ? /]中的特殊符号。
      */
    Password?: string;
    /**
      * 公网出带宽上限，单位：Mbps。
1.如果未传该参数或者传的值为0，则使用模块下的默认值。
2.如果未传该参数或者传的值为0且未指定模块，则使用InternetMaxBandwidthIn的值
      */
    InternetMaxBandwidthOut?: number;
    /**
      * 模块ID。如果未传该参数，则必须传ImageId，InstanceType，DataDiskSize，InternetMaxBandwidthOut参数
      */
    ModuleId?: string;
    /**
      * 镜像ID。如果未传该参数或者传的值为空，则使用模块下的默认值
      */
    ImageId?: string;
    /**
      * 实例显示名称。
不指定实例显示名称则默认显示‘未命名’。
购买多台实例，如果指定模式串{R:x}，表示生成数字[x, x+n-1]，其中n表示购买实例的数量，例如server\_{R:3}，购买1台时，实例显示名称为server\_3；购买2台时，实例显示名称分别为server\_3，server\_4。
支持指定多个模式串{R:x}。
购买多台实例，如果不指定模式串，则在实例显示名称添加后缀1、2...n，其中n表示购买实例的数量，例如server_，购买2台时，实例显示名称分别为server\_1，server\_2。
如果购买的实例属于不同的地域或运营商，则上述规则在每个地域和运营商内独立计数。
最多支持60个字符（包含模式串）。
      */
    InstanceName?: string;
    /**
      * 主机名称
点号（.）和短横线（-）不能作为 HostName 的首尾字符，不能连续使用。
Windows 实例：名字符长度为[2, 15]，允许字母（不限制大小写）、数字和短横线（-）组成，不支持点号（.），不能全是数字。
其他类型（Linux 等）实例：字符长度为[2, 60]，允许支持多个点号，点之间为一段，每段允许字母（不限制大小写）、数字和短横线（-）组成。
      */
    HostName?: string;
    /**
      * 用于保证请求幂等性的字符串。目前为保留参数，请勿使用。
      */
    ClientToken?: string;
    /**
      * 增强服务。通过该参数可以指定是否开启云安全、云监控等服务。若不指定该参数，则默认公共镜像开启云监控、云安全服务
      */
    EnhancedService?: EnhancedService;
    /**
      * 标签列表
      */
    TagSpecification?: Array<TagSpecification>;
    /**
      * 提供给实例使用的用户数据，需要以 base64 方式编码，支持的最大数据大小为 16KB
      */
    UserData?: string;
    /**
      * 机型。如果未传该参数或者传的值为空，则使用模块下的默认值
      */
    InstanceType?: string;
    /**
      * 数据盘大小，单位是G。如果未传该参数或者传的值为0，则使用模块下的默认值
      */
    DataDiskSize?: number;
    /**
      * 实例所属安全组。该参数可以通过调用 DescribeSecurityGroups 的返回值中的sgId字段来获取。若不指定该参数，则绑定默认安全组。
      */
    SecurityGroupIds?: Array<string>;
    /**
      * 系统盘大小，单位是G。如果未传该参数或者传的值为0，则使用模块下的默认值
      */
    SystemDiskSize?: number;
    /**
      * 公网入带宽上限，单位：Mbps。
1.如果未传该参数或者传的值为0，则使用对应模块的默认值。
2.如果未传该参数或者传的值为0且未指定模块，则使用InternetMaxBandwidthOut
      */
    InternetMaxBandwidthIn?: number;
    /**
      * 实例计费类型。其中：
0，按资源维度后付费，计算当日用量峰值，例如CPU，内存，硬盘等，仅适用于非GNR系列机型；
1，按小时后付费，单价：xx元/实例/小时，仅适用于GNR机型，如需开通该计费方式请提工单申请；
2，按月后付费，单价：xx元/实例/月，仅适用于GNR机型；
该字段不填时，非GNR机型会默认选择0；GNR机型默认选择2。
      */
    InstanceChargeType?: number;
    /**
      * 密钥对。
      */
    KeyIds?: Array<string>;
    /**
      * 保持镜像的原始设置。该参数与Password或KeyIds.N不能同时指定。只有使用自定义镜像、共享镜像或外部导入镜像创建实例时才能指定该参数为TRUE。取值范围：
TRUE：表示保持镜像的登录设置
FALSE：表示不保持镜像的登录设置

默认取值：FALSE。
注意：此字段可能返回 null，表示取不到有效值。
      */
    KeepImageLogin?: string;
    /**
      * 系统盘信息。
      */
    SystemDisk?: SystemDisk;
    /**
      * 数据盘信息。
      */
    DataDisks?: Array<DataDisk>;
}
/**
 * DescribeInstances返回参数结构体
 */
export interface DescribeInstancesResponse {
    /**
      * 返回的实例相关信息列表的长度。
      */
    TotalCount?: number;
    /**
      * 返回的实例相关信息列表。
注意：此字段可能返回 null，表示取不到有效值。
      */
    InstanceSet?: Array<Instance>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 机型配置
 */
export interface InstanceTypeConfig {
    /**
      * 机型族配置信息
      */
    InstanceFamilyConfig: InstanceFamilyConfig;
    /**
      * 机型
      */
    InstanceType: string;
    /**
      * CPU核数
      */
    Vcpu: number;
    /**
      * 内存大小
      */
    Memory: number;
    /**
      * 主频
      */
    Frequency: string;
    /**
      * 处理器型号
      */
    CpuModelName: string;
    /**
      * 机型族类别配置信息
      */
    InstanceFamilyTypeConfig: InstanceFamilyTypeConfig;
    /**
      * 机型额外信息 是一个json字符串，如果存在则表示特殊机型，格式如下：{"dataDiskSize":3200,"systemDiskSize":60, "systemDiskSizeShow":"系统盘默认60G","dataDiskSizeShow":"本地NVMe SSD 硬盘3200 GB"}
注意：此字段可能返回 null，表示取不到有效值。
      */
    ExtInfo: string;
    /**
      * GPU卡数
注意：此字段可能返回 null，表示取不到有效值。
      */
    Vgpu: number;
    /**
      * GPU型号
注意：此字段可能返回 null，表示取不到有效值。
      */
    GpuModelName: string;
}
/**
 * AllocateAddresses请求参数结构体
 */
export interface AllocateAddressesRequest {
    /**
      * ECM 地域
      */
    EcmRegion: string;
    /**
      * EIP数量。默认值：1。
      */
    AddressCount?: number;
    /**
      * CMCC：中国移动
CTCC：中国电信
CUCC：中国联通
      */
    InternetServiceProvider?: string;
    /**
      * 1 Mbps 至 5000 Mbps，默认值：1 Mbps。
      */
    InternetMaxBandwidthOut?: number;
    /**
      * 需要关联的标签列表。
      */
    Tags?: Array<Tag>;
    /**
      * 要绑定的实例 ID。
      */
    InstanceId?: string;
    /**
      * 要绑定的弹性网卡 ID。 弹性网卡 ID 形如：eni-11112222。NetworkInterfaceId 与 InstanceId 不可同时指定。弹性网卡 ID 可通过DescribeNetworkInterfaces接口返回值中的networkInterfaceId获取。
      */
    NetworkInterfaceId?: string;
    /**
      * 要绑定的内网 IP。如果指定了 NetworkInterfaceId 则也必须指定 PrivateIpAddress ，表示将 EIP 绑定到指定弹性网卡的指定内网 IP 上。同时要确保指定的 PrivateIpAddress 是指定的 NetworkInterfaceId 上的一个内网 IP。指定弹性网卡的内网 IP 可通过DescribeNetworkInterfaces接口返回值中的privateIpAddress获取。
      */
    PrivateIpAddress?: string;
}
/**
 * Zone信息
 */
export interface ZoneInfo {
    /**
      * ZoneId
      */
    ZoneId: number;
    /**
      * ZoneName
      */
    ZoneName: string;
    /**
      * Zone
      */
    Zone: string;
}
/**
 * ModifyInstancesAttribute请求参数结构体
 */
export interface ModifyInstancesAttributeRequest {
    /**
      * 待修改的实例ID列表。在单次请求的过程中，请求实例数上限为100。
      */
    InstanceIdSet: Array<string>;
    /**
      * 修改成功后显示的实例名称，不得超过60个字符，不传则名称显示为空。
      */
    InstanceName?: string;
    /**
      * 指定实例的安全组Id列表，子机将重新关联指定列表的安全组，原本关联的安全组会被解绑。限制不超过5个。
      */
    SecurityGroups?: Array<string>;
}
/**
 * ResetInstances返回参数结构体
 */
export interface ResetInstancesResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeNode请求参数结构体
 */
export interface DescribeNodeRequest {
    /**
      * 过滤条件，name取值为： InstanceFamily-实例系列
      */
    Filters?: Array<Filter>;
}
/**
 * ModifySecurityGroupAttribute返回参数结构体
 */
export interface ModifySecurityGroupAttributeResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ModifyModuleConfig请求参数结构体
 */
export interface ModifyModuleConfigRequest {
    /**
      * 模块ID。
      */
    ModuleId: string;
    /**
      * 机型ID。
      */
    InstanceType: string;
    /**
      * 默认数据盘大小，单位：G。范围不得超过数据盘范围大小，详看DescribeConfig。
      */
    DefaultDataDiskSize: number;
    /**
      * 默认系统盘大小，单位：G。范围不得超过数据盘范围大小，详看DescribeConfig。
      */
    DefaultSystemDiskSize?: number;
    /**
      * 系统盘
      */
    SystemDisk?: SystemDisk;
    /**
      * 数据盘
      */
    DataDisks?: Array<DataDisk>;
}
/**
 * 区域信息
 */
export interface Area {
    /**
      * 区域ID
      */
    AreaId: string;
    /**
      * 区域名称
      */
    AreaName: string;
}
/**
 * ModifyAddressAttribute返回参数结构体
 */
export interface ModifyAddressAttributeResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeInstanceVncUrl请求参数结构体
 */
export interface DescribeInstanceVncUrlRequest {
    /**
      * 一个操作的实例ID。可通过DescribeInstances API返回值中的InstanceId获取。
      */
    InstanceId: string;
}
/**
 * DescribeTaskStatus返回参数结构体
 */
export interface DescribeTaskStatusResponse {
    /**
      * 任务描述
      */
    TaskSet: Array<TaskOutput>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ReplaceRouteTableAssociation返回参数结构体
 */
export interface ReplaceRouteTableAssociationResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeInstancesDeniedActions返回参数结构体
 */
export interface DescribeInstancesDeniedActionsResponse {
    /**
      * 实例对应的禁止操作
      */
    InstanceOperatorSet?: Array<InstanceOperator>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ReleaseIpv6Addresses请求参数结构体
 */
export interface ReleaseIpv6AddressesRequest {
    /**
      * ECM 地域
      */
    EcmRegion: string;
    /**
      * 弹性网卡实例ID，形如：eni-m6dyj72l。
      */
    NetworkInterfaceId: string;
    /**
      * 指定的IPv6地址列表，单次最多指定10个。
      */
    Ipv6Addresses: Array<Ipv6Address>;
}
/**
 * 任务查询出参
 */
export interface TaskOutput {
    /**
      * 任务id
      */
    TaskId: string;
    /**
      * 状态描述
      */
    Message: string;
    /**
      * 状态值，SUCCESS/FAILED/OPERATING
      */
    Status: string;
    /**
      * 任务提交时间
      */
    AddTime: string;
    /**
      * 任务结束时间
      */
    EndTime: string;
    /**
      * 操作名
      */
    Operation: string;
}
/**
 * 物理位置信息
 */
export interface PhysicalPosition {
    /**
      * 机位
注意：此字段可能返回 null，表示取不到有效值。
      */
    PosId: string;
    /**
      * 机架
注意：此字段可能返回 null，表示取不到有效值。
      */
    RackId: string;
    /**
      * 交换机
注意：此字段可能返回 null，表示取不到有效值。
      */
    SwitchId: string;
}
/**
 * 负载均衡监听器
 */
export interface Listener {
    /**
      * 负载均衡监听器 ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    ListenerId: string;
    /**
      * 监听器协议
注意：此字段可能返回 null，表示取不到有效值。
      */
    Protocol: string;
    /**
      * 监听器端口
注意：此字段可能返回 null，表示取不到有效值。
      */
    Port: number;
    /**
      * 监听器的健康检查信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    HealthCheck: HealthCheck;
    /**
      * 请求的调度方式
注意：此字段可能返回 null，表示取不到有效值。
      */
    Scheduler: string;
    /**
      * 会话保持时间
注意：此字段可能返回 null，表示取不到有效值。
      */
    SessionExpireTime: number;
    /**
      * 监听器的名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    ListenerName: string;
    /**
      * 监听器的创建时间
注意：此字段可能返回 null，表示取不到有效值。
      */
    CreateTime: string;
    /**
      * 监听器的会话类型
注意：此字段可能返回 null，表示取不到有效值。
      */
    SessionType: string;
    /**
      * 端口段结束端口
注意：此字段可能返回 null，表示取不到有效值。
      */
    EndPort: number;
}
/**
 * StartInstances请求参数结构体
 */
export interface StartInstancesRequest {
    /**
      * 待开启的实例ID列表。在单次请求的过程中，单个region下的请求实例数上限为100。
      */
    InstanceIdSet: Array<string>;
}
/**
 * DeleteSnapshots请求参数结构体
 */
export interface DeleteSnapshotsRequest {
    /**
      * 要删除的快照ID列表，可通过[DescribeSnapshots](/document/product/362/15647)查询。
      */
    SnapshotIds: Array<string>;
    /**
      * 是否强制删除快照关联的镜像
      */
    DeleteBindImages?: boolean;
}
/**
 * 描述了实例的抽象位置，包括其所在的可用区，所属的项目，以及所属的独享集群的ID和名字。
 */
export interface Placement {
    /**
      * 云硬盘所属的[可用区](/document/product/213/15753#ZoneInfo)。该参数也可以通过调用  [DescribeZones](/document/product/213/15707) 的返回值中的Zone字段来获取。
      */
    Zone: string;
    /**
      * 围笼Id。作为入参时，表示对指定的CageId的资源进行操作，可为空。 作为出参时，表示资源所属围笼ID，可为空。
注意：此字段可能返回 null，表示取不到有效值。
      */
    CageId?: string;
    /**
      * 实例所属项目ID。该参数可以通过调用 [DescribeProject](/document/api/378/4400) 的返回值中的 projectId 字段来获取。不填为默认项目。
      */
    ProjectId?: number;
    /**
      * 独享集群名字。作为入参时，忽略。作为出参时，表示云硬盘所属的独享集群名，可为空。
注意：此字段可能返回 null，表示取不到有效值。
      */
    CdcName?: string;
    /**
      * 实例所属的独享集群ID。作为入参时，表示对指定的CdcId独享集群的资源进行操作，可为空。 作为出参时，表示资源所属的独享集群的ID，可为空。
注意：此字段可能返回 null，表示取不到有效值。
      */
    CdcId?: string;
}
/**
 * 负责均衡后端目标
 */
export interface Target {
    /**
      * 后端服务的监听端口
注意：此字段可能返回 null，表示取不到有效值。
      */
    Port?: number;
    /**
      * 子机ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    InstanceId?: string;
    /**
      * 后端服务的转发权重，取值范围：[0, 100]，默认为 10。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Weight?: number;
    /**
      * 绑定弹性网卡时需要传入此参数，代表弹性网卡的IP，弹性网卡必须先绑定至子机，然后才能绑定到负载均衡实例。注意：参数 InstanceId 和 EniIp 只能传入一个且必须传入一个。
注意：此字段可能返回 null，表示取不到有效值。
      */
    EniIp?: string;
}
/**
 * DeleteSnapshots返回参数结构体
 */
export interface DeleteSnapshotsResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeAddresses返回参数结构体
 */
export interface DescribeAddressesResponse {
    /**
      * 符合条件的 EIP 数量。
      */
    TotalCount?: number;
    /**
      * EIP 详细信息列表。
      */
    AddressSet?: Array<Address>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ModifyIpv6AddressesAttribute请求参数结构体
 */
export interface ModifyIpv6AddressesAttributeRequest {
    /**
      * ECM 地域
      */
    EcmRegion: string;
    /**
      * 弹性网卡实例ID，形如：eni-m6dyj72l。
      */
    NetworkInterfaceId: string;
    /**
      * 指定的IPv6地址信息。
      */
    Ipv6Addresses: Array<Ipv6Address>;
}
/**
 * DeleteModule请求参数结构体
 */
export interface DeleteModuleRequest {
    /**
      * 模块ID。如：em-qn46snq8
      */
    ModuleId: string;
}
/**
 * DisableRoutes返回参数结构体
 */
export interface DisableRoutesResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeConfig返回参数结构体
 */
export interface DescribeConfigResponse {
    /**
      * 网络带宽硬盘大小的范围信息。
      */
    NetworkStorageRange: NetworkStorageRange;
    /**
      * 镜像操作系统白名单。
注意：此字段可能返回 null，表示取不到有效值。
      */
    ImageWhiteSet: Array<string>;
    /**
      * 网络限额信息。
注意：此字段可能返回 null，表示取不到有效值。
      */
    InstanceNetworkLimitConfigs: Array<InstanceNetworkLimitConfig>;
    /**
      * 镜像限额信息。
注意：此字段可能返回 null，表示取不到有效值。
      */
    ImageLimits: ImageLimitConfig;
    /**
      * 默认是否IP直通，用于模块创建，虚机购买等具有直通参数场景时的默认参数。
      */
    DefaultIPDirect: boolean;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 描述了数据盘的信息
 */
export interface DataDisk {
    /**
      * 数据盘大小。单位GB。
      */
    DiskSize: number;
    /**
      * 数据盘类型，取值范围：
- LOCAL_BASIC：本地硬盘
- CLOUD_PREMIUM：高性能云硬盘

默认取值： LOCAL_BASIC。
      */
    DiskType?: string;
}
/**
 * ModifyVpcAttribute返回参数结构体
 */
export interface ModifyVpcAttributeResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 内网IP信息
 */
export interface PrivateIpAddressSpecification {
    /**
      * 内网IP地址。
      */
    PrivateIpAddress: string;
    /**
      * 是否是主IP。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Primary?: boolean;
    /**
      * 公网IP地址。
      */
    PublicIpAddress?: string;
    /**
      * EIP实例ID，例如：eip-11112222。
      */
    AddressId?: string;
    /**
      * 内网IP描述信息。
      */
    Description?: string;
    /**
      * 公网IP是否被封堵。
注意：此字段可能返回 null，表示取不到有效值。
      */
    IsWanIpBlocked?: boolean;
    /**
      * IP状态：
PENDING：生产中
MIGRATING：迁移中
DELETING：删除中
AVAILABLE：可用的
      */
    State?: string;
}
/**
 * MigratePrivateIpAddress返回参数结构体
 */
export interface MigratePrivateIpAddressResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DeleteRouteTable返回参数结构体
 */
export interface DeleteRouteTableResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ModifyModuleDisableWanIp返回参数结构体
 */
export interface ModifyModuleDisableWanIpResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 增强服务
 */
export interface EnhancedService {
    /**
      * 是否开启云镜服务。
      */
    SecurityService?: RunSecurityServiceEnabled;
    /**
      * 是否开启云监控服务。
      */
    MonitorService?: RunMonitorServiceEnabled;
    /**
      * 是否开通IP直通。若不指定该参数，则Linux镜像默认开通，windows镜像暂不支持IP直通。
      */
    EIPDirectService?: RunEIPDirectServiceEnabled;
}
/**
 * DescribeLoadBalanceTaskStatus请求参数结构体
 */
export interface DescribeLoadBalanceTaskStatusRequest {
    /**
      * 请求ID，即接口返回的 RequestId 参数
      */
    TaskId: string;
}
/**
 * ModifyHaVipAttribute返回参数结构体
 */
export interface ModifyHaVipAttributeResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ModifyVpcAttribute请求参数结构体
 */
export interface ModifyVpcAttributeRequest {
    /**
      * VPC实例ID。形如：vpc-f49l6u0z。
      */
    VpcId: string;
    /**
      * ECM 地域
      */
    EcmRegion: string;
    /**
      * 私有网络名称，可任意命名，但不得超过60个字符。
      */
    VpcName?: string;
    /**
      * 标签
      */
    Tags?: Array<Tag>;
    /**
      * 私有网络描述
      */
    Description?: string;
}
/**
 * 资源类型的Tag
 */
export interface TagSpecification {
    /**
      * 资源类型，目前仅支持"instance"、"module"
      */
    ResourceType: string;
    /**
      * 标签列表
      */
    Tags: Array<Tag>;
}
/**
 * AttachNetworkInterface返回参数结构体
 */
export interface AttachNetworkInterfaceResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeRouteTables请求参数结构体
 */
export interface DescribeRouteTablesRequest {
    /**
      * 路由表实例ID，例如：rtb-azd4dt1c。
      */
    RouteTableIds?: Array<string>;
    /**
      * 过滤条件，参数不支持同时指定RouteTableIds和Filters。
route-table-id - String - （过滤条件）路由表实例ID。
route-table-name - String - （过滤条件）路由表名称。
vpc-id - String - （过滤条件）VPC实例ID，形如：vpc-f49l6u0z。
association.main - String - （过滤条件）是否主路由表。
      */
    Filters?: Array<Filter>;
    /**
      * 偏移量
      */
    Offset?: number;
    /**
      * 限数
      */
    Limit?: number;
    /**
      * ECM 地域，传空或不传表示所有区域
      */
    EcmRegion?: string;
}
/**
 * DescribeBaseOverview请求参数结构体
 */
export declare type DescribeBaseOverviewRequest = null;
/**
 * CreateHaVip返回参数结构体
 */
export interface CreateHaVipResponse {
    /**
      * HAVIP对象。
      */
    HaVip: HaVip;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ImportImage请求参数结构体
 */
export interface ImportImageRequest {
    /**
      * 镜像的Id。
      */
    ImageId: string;
    /**
      * 镜像的描述。
      */
    ImageDescription: string;
    /**
      * 源地域
      */
    SourceRegion: string;
}
/**
 * 描述了实例的计费模式
 */
export interface DiskChargePrepaid {
    /**
      * 购买云盘的时长，默认单位为月，取值范围：1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 24, 36。
      */
    Period: number;
    /**
      * 自动续费标识。取值范围：<br><li>NOTIFY_AND_AUTO_RENEW：通知过期且自动续费<br><li>NOTIFY_AND_MANUAL_RENEW：通知过期不自动续费<br><li>DISABLE_NOTIFY_AND_MANUAL_RENEW：不通知过期不自动续费<br><br>默认取值：NOTIFY_AND_MANUAL_RENEW：通知过期不自动续费。
      */
    RenewFlag?: string;
    /**
      * 需要将云盘的到期时间与挂载的子机对齐时，可传入该参数。该参数表示子机当前的到期时间，此时Period如果传入，则表示子机需要续费的时长，云盘会自动按对齐到子机续费后的到期时间续费，示例取值：2018-03-30 20:15:03。
      */
    CurInstanceDeadline?: string;
}
/**
 * DisableRoutes请求参数结构体
 */
export interface DisableRoutesRequest {
    /**
      * 路由表唯一ID。
      */
    RouteTableId: string;
    /**
      * 路由策略ID。
      */
    RouteIds: Array<number>;
}
/**
 * StopInstances返回参数结构体
 */
export interface StopInstancesResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ModifyModuleName请求参数结构体
 */
export interface ModifyModuleNameRequest {
    /**
      * 模块ID。
      */
    ModuleId: string;
    /**
      * 模块名称。
      */
    ModuleName: string;
}
/**
 * DescribeInstances请求参数结构体
 */
export interface DescribeInstancesRequest {
    /**
      * 过滤条件。
zone      String      是否必填：否     （过滤条件）按照可用区英文标识符过滤。
zone-name      String      是否必填：否     （过滤条件）按照可用区中文名过滤,支持模糊匹配。
module-id      String      是否必填：否     （过滤条件）按照模块ID过滤。
instance-id      String      是否必填：否      （过滤条件）按照实例ID过滤。
instance-name      String      是否必填：否      （过滤条件）按照实例名称过滤,支持模糊匹配。
ip-address      String      是否必填：否      （过滤条件）按照实例的内网/公网IP过滤。
instance-uuid   string 是否必填：否 （过滤条件）按照uuid过滤实例列表。
instance-state  string  是否必填：否 （过滤条件）按照实例状态更新实例列表。
internet-service-provider      String      是否必填：否      （过滤条件）按照实例公网IP所属的运营商进行过滤。
tag-key      String      是否必填：否      （过滤条件）按照标签键进行过滤。
tag:tag-key      String      是否必填：否      （过滤条件）按照标签键值对进行过滤。 tag-key使用具体的标签键进行替换。
instance-family      String      是否必填：否      （过滤条件）按照机型family过滤。
module-name      String      是否必填：否      （过滤条件）按照模块名称过滤,支持模糊匹配。
image-id      String      是否必填：否      （过滤条件）按照实例的镜像ID过滤。
vpc-id String      是否必填：否      （过滤条件）按照实例的vpc id过滤。
subnet-id String      是否必填：否      （过滤条件）按照实例的subnet id过滤。

若不传Filters参数则表示查询所有相关的实例信息。
单次请求的Filter.Values的上限为5。
      */
    Filters?: Array<Filter>;
    /**
      * 偏移量，默认为0。
      */
    Offset?: number;
    /**
      * 返回数量，默认为20(如果查询结果数目大于等于20)，最大值为100。
      */
    Limit?: number;
    /**
      * 指定排序字段。目前支持的可选值如下
timestamp 按实例创建时间排序。
注意：目前仅支持按创建时间排序，后续可能会有扩展。
如果不传，默认按实例创建时间排序
      */
    OrderByField?: string;
    /**
      * 指定排序是降序还是升序。0表示降序； 1表示升序。如果不传默认为降序
      */
    OrderDirection?: number;
}
/**
 * CreateListener请求参数结构体
 */
export interface CreateListenerRequest {
    /**
      * 负载均衡实例 ID
      */
    LoadBalancerId: string;
    /**
      * 要将监听器创建到哪些端口，每个端口对应一个新的监听器
      */
    Ports: Array<number>;
    /**
      * 监听器协议： TCP | UDP
      */
    Protocol: string;
    /**
      * 要创建的监听器名称列表，名称与Ports数组按序一一对应，如不需立即命名，则无需提供此参数
      */
    ListenerNames?: Array<string>;
    /**
      * 健康检查相关参数
      */
    HealthCheck?: HealthCheck;
    /**
      * 会话保持时间，单位：秒。可选值：30~3600，默认 0，表示不开启。此参数仅适用于TCP/UDP监听器。
      */
    SessionExpireTime?: number;
    /**
      * 监听器转发的方式。可选值：WRR、LEAST_CONN
分别表示按权重轮询、最小连接数， 默认为 WRR。
      */
    Scheduler?: string;
    /**
      * 会话保持类型。不传或传NORMAL表示默认会话保持类型。QUIC_CID 表示根据Quic Connection ID做会话保持。QUIC_CID只支持UDP协议。
      */
    SessionType?: string;
    /**
      * 批量端口段的结束端口，必须和Ports长度一样。
      */
    EndPorts?: Array<number>;
}
/**
 * ReleaseAddresses请求参数结构体
 */
export interface ReleaseAddressesRequest {
    /**
      * ECM 地域
      */
    EcmRegion: string;
    /**
      * 标识 EIP 的唯一 ID 列表。
      */
    AddressIds: Array<string>;
}
/**
 * CreateRouteTable请求参数结构体
 */
export interface CreateRouteTableRequest {
    /**
      * 待操作的VPC实例ID。可通过DescribeVpcs接口返回值中的VpcId获取。
      */
    VpcId: string;
    /**
      * 路由表名称，最大长度不能超过60个字节。
      */
    RouteTableName: string;
    /**
      * ecm地域
      */
    EcmRegion: string;
}
/**
 * ModifyModuleConfig返回参数结构体
 */
export interface ModifyModuleConfigResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * MigrateNetworkInterface请求参数结构体
 */
export interface MigrateNetworkInterfaceRequest {
    /**
      * ECM 地域，形如ap-xian-ecm。
      */
    EcmRegion: string;
    /**
      * 弹性网卡实例ID，例如：eni-m6dyj72l。
      */
    NetworkInterfaceId: string;
    /**
      * 弹性网卡当前绑定的ECM实例ID。形如：ein-r8hr2upy。
      */
    SourceInstanceId: string;
    /**
      * 待迁移的目的ECM实例ID。
      */
    DestinationInstanceId: string;
}
/**
 * 镜像来源信息
 */
export interface SrcImage {
    /**
      * 镜像id
      */
    ImageId: string;
    /**
      * 镜像名称
      */
    ImageName: string;
    /**
      * 系统名称
      */
    ImageOsName: string;
    /**
      * 镜像描述
      */
    ImageDescription: string;
    /**
      * 区域
      */
    Region: string;
    /**
      * 区域ID
      */
    RegionID: number;
    /**
      * 区域名称
      */
    RegionName: string;
    /**
      * 来源实例名称
      */
    InstanceName: string;
    /**
      * 来源实例ID
      */
    InstanceId: string;
    /**
      * 来源镜像类型
      */
    ImageType: string;
}
/**
 * DescribeTaskStatus请求参数结构体
 */
export interface DescribeTaskStatusRequest {
    /**
      * 任务描述
      */
    TaskSet: Array<TaskInput>;
}
/**
 * ModifyAddressAttribute请求参数结构体
 */
export interface ModifyAddressAttributeRequest {
    /**
      * ECM 地域
      */
    EcmRegion: string;
    /**
      * 标识 EIP 的唯一 ID。EIP 唯一 ID 形如：eip-11112222。
      */
    AddressId: string;
    /**
      * 修改后的 EIP 名称。长度上限为20个字符。
      */
    AddressName?: string;
    /**
      * 设定EIP是否直通，"TRUE"表示直通，"FALSE"表示非直通。注意该参数仅对EIP直通功能可见的用户可以设定。
      */
    EipDirectConnection?: string;
}
/**
 * DescribePriceRunInstance请求参数结构体
 */
export interface DescribePriceRunInstanceRequest {
    /**
      * 实例的机型信息
      */
    InstanceType: string;
    /**
      * 系统盘信息
      */
    SystemDisk: SystemDisk;
    /**
      * 实例个数
      */
    InstanceCount: number;
    /**
      * 数据盘信息
      */
    DataDisk?: Array<DataDisk>;
}
/**
 * DescribeTargets返回参数结构体
 */
export interface DescribeTargetsResponse {
    /**
      * 监听器后端绑定的机器信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    Listeners?: Array<ListenerBackend>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 支持的操作系统类型，根据windows和Linux分类。
 */
export interface ImageOsList {
    /**
      * 支持的windows操作系统
注意：此字段可能返回 null，表示取不到有效值。
      */
    Windows: Array<string>;
    /**
      * 支持的linux操作系统
注意：此字段可能返回 null，表示取不到有效值。
      */
    Linux: Array<string>;
}
/**
 * BatchModifyTargetWeight请求参数结构体
 */
export interface BatchModifyTargetWeightRequest {
    /**
      * 负载均衡实例 ID
      */
    LoadBalancerId: string;
    /**
      * 要批量修改权重的列表
      */
    ModifyList: Array<TargetsWeightRule>;
}
/**
 * 负责均衡批量目标项
 */
export interface BatchTarget {
    /**
      * 监听器ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    ListenerId?: string;
    /**
      * 绑定端口
注意：此字段可能返回 null，表示取不到有效值。
      */
    Port?: number;
    /**
      * 子机ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    InstanceId?: string;
    /**
      * 弹性网卡ip
注意：此字段可能返回 null，表示取不到有效值。
      */
    EniIp?: string;
    /**
      * 子机权重，范围[0, 100]。绑定时如果不存在，则默认为10。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Weight?: number;
}
/**
 * 城市信息
 */
export interface City {
    /**
      * 城市ID
      */
    CityId: string;
    /**
      * 城市名称
      */
    CityName: string;
}
/**
 * 峰值网络数据
 */
export interface PeakNetwork {
    /**
      * 记录时间。
      */
    RecordTime: string;
    /**
      * 入带宽数据。
      */
    PeakInNetwork: string;
    /**
      * 出带宽数据。
      */
    PeakOutNetwork: string;
    /**
      * 计费带宽。单位bps
      */
    ChargeNetwork: string;
}
/**
 * RebootInstances返回参数结构体
 */
export interface RebootInstancesResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DeleteSecurityGroupPolicies返回参数结构体
 */
export interface DeleteSecurityGroupPoliciesResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeHaVips请求参数结构体
 */
export interface DescribeHaVipsRequest {
    /**
      * HAVIP数组，HAVIP唯一ID，形如：havip-9o233uri。
      */
    HaVipIds?: Array<string>;
    /**
      * 过滤条件，参数不支持同时指定HaVipIds和Filters。
havip-id - String - HAVIP唯一ID，形如：havip-9o233uri。
havip-name - String - HAVIP名称。
vpc-id - String - HAVIP所在私有网络ID。
subnet-id - String - HAVIP所在子网ID。
      */
    Filters?: Array<Filter>;
    /**
      * 偏移量，默认值是0。
      */
    Offset?: number;
    /**
      * 返回数量，默认值是20，最大是100。
      */
    Limit?: number;
    /**
      * Ecm 区域，不填代表全部区域。
      */
    EcmRegion?: string;
}
/**
 * BatchRegisterTargets请求参数结构体
 */
export interface BatchRegisterTargetsRequest {
    /**
      * 负载均衡ID
      */
    LoadBalancerId: string;
    /**
      * 绑定目标
      */
    Targets: Array<BatchTarget>;
}
/**
 * RemovePrivateIpAddresses返回参数结构体
 */
export interface RemovePrivateIpAddressesResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 实例的公网ip相关信息。
 */
export interface PublicIPAddressInfo {
    /**
      * 计费模式。
      */
    ChargeMode: string;
    /**
      * 实例的公网ip。
      */
    PublicIPAddress: string;
    /**
      * 实例的公网ip所属的运营商。
      */
    ISP: ISP;
    /**
      * 实例的最大出带宽上限，单位为Mbps。
      */
    MaxBandwidthOut: number;
    /**
      * 实例的最大入带宽上限，单位为Mbps。
      */
    MaxBandwidthIn: number;
}
/**
 * ModifyModuleImage返回参数结构体
 */
export interface ModifyModuleImageResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DeleteLoadBalancerListeners返回参数结构体
 */
export interface DeleteLoadBalancerListenersResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 私有网络(VPC)对象。
 */
export interface VpcInfo {
    /**
      * VPC名称。
      */
    VpcName: string;
    /**
      * VPC实例ID，例如：vpc-azd4dt1c。
      */
    VpcId: string;
    /**
      * VPC的IPv4 CIDR。
      */
    CidrBlock: string;
    /**
      * 是否默认VPC。
      */
    IsDefault: boolean;
    /**
      * 是否开启组播。
      */
    EnableMulticast: boolean;
    /**
      * 创建时间。
      */
    CreatedTime: string;
    /**
      * DNS列表。
注意：此字段可能返回 null，表示取不到有效值。
      */
    DnsServerSet: Array<string>;
    /**
      * DHCP域名选项值。
      */
    DomainName: string;
    /**
      * DHCP选项集ID。
      */
    DhcpOptionsId: string;
    /**
      * 是否开启DHCP。
      */
    EnableDhcp: boolean;
    /**
      * VPC的IPv6 CIDR。
      */
    Ipv6CidrBlock: string;
    /**
      * 标签键值对
注意：此字段可能返回 null，表示取不到有效值。
      */
    TagSet: Array<Tag>;
    /**
      * 辅助CIDR
注意：此字段可能返回 null，表示取不到有效值。
      */
    AssistantCidrSet: Array<AssistantCidr>;
    /**
      * 地域
      */
    Region: string;
    /**
      * 描述
      */
    Description: string;
    /**
      * 地域中文名
      */
    RegionName: string;
    /**
      * 包含子网数量
      */
    SubnetCount: number;
    /**
      * 包含实例数量
      */
    InstanceCount: number;
}
/**
 * 模块列表Item信息
 */
export interface ModuleItem {
    /**
      * 节点实例统计信息
      */
    NodeInstanceNum: NodeInstanceNum;
    /**
      * 模块信息
      */
    Module: Module;
}
/**
 * CreateSecurityGroupPolicies请求参数结构体
 */
export interface CreateSecurityGroupPoliciesRequest {
    /**
      * 安全组实例ID，例如esg-33ocnj9n，可通过DescribeSecurityGroups获取。
      */
    SecurityGroupId: string;
    /**
      * 安全组规则集合。
      */
    SecurityGroupPolicySet: SecurityGroupPolicySet;
}
/**
 * 云监控服务
 */
export interface RunMonitorServiceEnabled {
    /**
      * 是否开启。
      */
    Enabled?: boolean;
}
/**
 * ModifyRouteTableAttribute返回参数结构体
 */
export interface ModifyRouteTableAttributeResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 私有网络相关信息配置。
 */
export interface VirtualPrivateCloud {
    /**
      * 私有网络ID，形如vpc-xxx。
      */
    VpcId: string;
    /**
      * 私有网络子网ID，形如subnet-xxx。
      */
    SubnetId: string;
    /**
      * 是否用作公网网关。公网网关只有在实例拥有公网IP以及处于私有网络下时才能正常使用。取值范围：
TRUE：表示用作公网网关
FALSE：表示不用作公网网关

默认取值：FALSE。
      */
    AsVpcGateway?: boolean;
    /**
      * 私有网络子网 IP 数组，在创建实例、修改实例vpc属性操作中可使用此参数。
      */
    PrivateIpAddresses?: Array<string>;
    /**
      * 为弹性网卡指定随机生成的 IPv6 地址数量。
      */
    Ipv6AddressCount?: number;
}
/**
 * ReleaseIpv6Addresses返回参数结构体
 */
export interface ReleaseIpv6AddressesResponse {
    /**
      * 任务ID，可以通过DescribeTaskResult查询任务状态
      */
    TaskId?: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeTaskResult返回参数结构体
 */
export interface DescribeTaskResultResponse {
    /**
      * 异步任务ID。
      */
    TaskId: string;
    /**
      * 执行结果，包括"SUCCESS", "FAILED", "RUNNING"
      */
    Result: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * BatchDeregisterTargets返回参数结构体
 */
export interface BatchDeregisterTargetsResponse {
    /**
      * 解绑失败的监听器ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    FailListenerIdSet?: Array<string>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * SetLoadBalancerSecurityGroups返回参数结构体
 */
export interface SetLoadBalancerSecurityGroupsResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CreateLoadBalancer请求参数结构体
 */
export interface CreateLoadBalancerRequest {
    /**
      * ECM区域，形如ap-xian-ecm。
      */
    EcmRegion: string;
    /**
      * 负载均衡实例的网络类型。目前只支持传入OPEN，表示公网属性。
      */
    LoadBalancerType: string;
    /**
      * CMCC | CTCC | CUCC，分别对应 移动 | 电信 | 联通。
      */
    VipIsp: string;
    /**
      * 负载均衡实例的名称，只在创建一个实例的时候才会生效。规则：1-50 个英文、汉字、数字、连接线“-”或下划线“_”。
注意：如果名称与系统中已有负载均衡实例的名称相同，则系统将会自动生成此次创建的负载均衡实例的名称。
      */
    LoadBalancerName?: string;
    /**
      * 负载均衡后端目标设备所属的网络 ID，如vpc-12345678。
      */
    VpcId?: string;
    /**
      * 创建负载均衡的个数，默认值 1。
      */
    Number?: number;
    /**
      * 负载均衡的带宽限制等信息。
      */
    InternetAccessible?: LoadBalancerInternetAccessible;
    /**
      * 标签。
      */
    Tags?: Array<TagInfo>;
    /**
      * 安全组。
      */
    SecurityGroups?: Array<string>;
}
/**
 * 实例的网络相关信息。
 */
export interface Internet {
    /**
      * 实例的内网相关信息列表。顺序为主网卡在前，辅助网卡按绑定先后顺序排列。
注意：此字段可能返回 null，表示取不到有效值。
      */
    PrivateIPAddressSet: Array<PrivateIPAddressInfo>;
    /**
      * 实例的公网相关信息列表。顺序为主网卡在前，辅助网卡按绑定先后顺序排列。
注意：此字段可能返回 null，表示取不到有效值。
      */
    PublicIPAddressSet: Array<PublicIPAddressInfo>;
    /**
      * 实例网络相关信息。
注意：此字段可能返回 null，表示取不到有效值。
      */
    InstanceNetworkInfoSet: Array<InstanceNetworkInfo>;
}
/**
 * DescribeModule返回参数结构体
 */
export interface DescribeModuleResponse {
    /**
      * 符合条件的模块数量。
注意：此字段可能返回 null，表示取不到有效值。
      */
    TotalCount: number;
    /**
      * 模块详情信息的列表。
注意：此字段可能返回 null，表示取不到有效值。
      */
    ModuleItemSet: Array<ModuleItem>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 镜像限制配置
 */
export interface ImageLimitConfig {
    /**
      * 支持的最大镜像大小，包括可导入的自定义镜像大小，中心云镜像大小，单位为GB。
      */
    MaxImageSize: number;
}
/**
 * 描述EIP配额信息
 */
export interface EipQuota {
    /**
      * 配额名称，取值范围：
TOTAL_EIP_QUOTA：用户当前地域下EIP的配额数；
DAILY_EIP_APPLY：用户当前地域下今日申购次数；
DAILY_PUBLIC_IP_ASSIGN：用户当前地域下，重新分配公网 IP次数。
      */
    QuotaId: string;
    /**
      * 当前数量
      */
    QuotaCurrent: number;
    /**
      * 配额数量
      */
    QuotaLimit: number;
}
/**
 * DescribeSubnets返回参数结构体
 */
export interface DescribeSubnetsResponse {
    /**
      * 符合条件的实例数量。
      */
    TotalCount?: number;
    /**
      * 子网对象。
注意：此字段可能返回 null，表示取不到有效值。
      */
    SubnetSet?: Array<Subnet>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * SetSecurityGroupForLoadbalancers返回参数结构体
 */
export interface SetSecurityGroupForLoadbalancersResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeDefaultSubnet返回参数结构体
 */
export interface DescribeDefaultSubnetResponse {
    /**
      * 默认子网信息，若无子网，则为空数据。
      */
    Subnet?: Subnet;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DeleteSubnet请求参数结构体
 */
export interface DeleteSubnetRequest {
    /**
      * 子网实例ID。可通过DescribeSubnets接口返回值中的SubnetId获取。
      */
    SubnetId: string;
    /**
      * ECM 地域
      */
    EcmRegion: string;
}
/**
 * 描述实例的位置相关信息。
 */
export interface Position {
    /**
      * 实例所在的Zone的信息。
      */
    ZoneInfo: ZoneInfo;
    /**
      * 实例所在的国家的信息。
      */
    Country: Country;
    /**
      * 实例所在的Area的信息。
      */
    Area: Area;
    /**
      * 实例所在的省份的信息。
      */
    Province: Province;
    /**
      * 实例所在的城市的信息。
      */
    City: City;
    /**
      * 实例所在的Region的信息。
      */
    RegionInfo: RegionInfo;
}
/**
 * 路由表
 */
export interface RouteTable {
    /**
      * VPC实例ID
      */
    VpcId?: string;
    /**
      * 路由表实例ID
      */
    RouteTableId?: string;
    /**
      * 路由表名称
      */
    RouteTableName?: string;
    /**
      * 路由表关联关系
注意：此字段可能返回 null，表示取不到有效值。
      */
    AssociationSet?: Array<RouteTableAssociation>;
    /**
      * IPv4路由策略集合
注意：此字段可能返回 null，表示取不到有效值。
      */
    RouteSet?: Array<Route>;
    /**
      * 是否默认路由表
      */
    Main?: boolean;
    /**
      * 创建时间
      */
    CreatedTime?: string;
}
/**
 * DeleteNetworkInterface请求参数结构体
 */
export interface DeleteNetworkInterfaceRequest {
    /**
      * 弹性网卡实例ID，例如：eni-m6dyj72l。
      */
    NetworkInterfaceId: string;
    /**
      * ECM 地域，形如ap-xian-ecm。
      */
    EcmRegion: string;
}
/**
 * DescribeTargets请求参数结构体
 */
export interface DescribeTargetsRequest {
    /**
      * 负载均衡实例 ID
      */
    LoadBalancerId: string;
    /**
      * 监听器 ID列表
      */
    ListenerIds?: Array<string>;
    /**
      * 监听器协议类型
      */
    Protocol?: number;
    /**
      * 监听器端口
      */
    Port?: number;
}
/**
 * ReplaceRoutes返回参数结构体
 */
export interface ReplaceRoutesResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DeleteHaVip请求参数结构体
 */
export interface DeleteHaVipRequest {
    /**
      * HAVIP唯一ID，形如：havip-9o233uri。
      */
    HaVipId: string;
}
/**
 * DeleteLoadBalancerListeners请求参数结构体
 */
export interface DeleteLoadBalancerListenersRequest {
    /**
      * 负载均衡实例 ID
      */
    LoadBalancerId: string;
    /**
      * 指定删除的监听器ID数组，若不填则删除负载均衡的所有监听器
      */
    ListenerIds?: Array<string>;
}
/**
 * MigratePrivateIpAddress请求参数结构体
 */
export interface MigratePrivateIpAddressRequest {
    /**
      * ECM 地域，形如ap-xian-ecm。
      */
    EcmRegion: string;
    /**
      * 当前内网IP绑定的弹性网卡实例ID，例如：eni-11112222。
      */
    SourceNetworkInterfaceId: string;
    /**
      * 待迁移的目的弹性网卡实例ID。
      */
    DestinationNetworkInterfaceId: string;
    /**
      * 迁移的内网IP地址，例如：10.0.0.6。
      */
    PrivateIpAddress: string;
}
/**
 * DeleteRouteTable请求参数结构体
 */
export interface DeleteRouteTableRequest {
    /**
      * 路由表实例ID，例如：rtb-azd4dt1c
      */
    RouteTableId: string;
}
/**
 * DetachDisks请求参数结构体
 */
export interface DetachDisksRequest {
    /**
      * 将要卸载的云硬盘ID， 通过[DescribeDisks](/document/product/362/16315)接口查询，单次请求最多可卸载10块弹性云盘。
      */
    DiskIds: Array<string>;
    /**
      * 对于非共享型云盘，会忽略该参数；对于共享型云盘，该参数表示要从哪个CVM实例上卸载云盘。
      */
    InstanceId?: string;
}
/**
 * DescribeConfig请求参数结构体
 */
export declare type DescribeConfigRequest = null;
/**
 * 弹性网卡绑定关系
 */
export interface NetworkInterfaceAttachment {
    /**
      * 云主机实例ID。
      */
    InstanceId: string;
    /**
      * 网卡在云主机实例内的序号。
      */
    DeviceIndex: number;
    /**
      * 云主机所有者账户信息。
      */
    InstanceAccountId: string;
    /**
      * 绑定时间。
      */
    AttachTime: string;
}
/**
 * BatchRegisterTargets返回参数结构体
 */
export interface BatchRegisterTargetsResponse {
    /**
      * 绑定失败的监听器ID，如为空表示全部绑定成功。
注意：此字段可能返回 null，表示取不到有效值。
      */
    FailListenerIdSet?: Array<string>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ImportCustomImage请求参数结构体
 */
export interface ImportCustomImageRequest {
    /**
      * 镜像名称
      */
    ImageName: string;
    /**
      * 导入镜像的操作系统架构，x86_64 或 i386
      */
    Architecture: string;
    /**
      * 导入镜像的操作系统类型，通过DescribeImportImageOs获取
      */
    OsType: string;
    /**
      * 导入镜像的操作系统版本，通过DescribeImportImageOs获取
      */
    OsVersion: string;
    /**
      * 镜像描述
      */
    ImageDescription?: string;
    /**
      * 镜像启动方式，cloudinit或nbd， 默认cloudinit
      */
    InitFlag?: string;
    /**
      * 镜像文件描述，多层镜像按顺序传入
      */
    ImageUrls?: Array<ImageUrl>;
}
/**
 * ReleaseAddresses返回参数结构体
 */
export interface ReleaseAddressesResponse {
    /**
      * 异步任务TaskId。可以使用DescribeTaskResult接口查询任务状态。
      */
    TaskId?: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ReplaceSecurityGroupPolicy返回参数结构体
 */
export interface ReplaceSecurityGroupPolicyResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ModifyPrivateIpAddressesAttribute返回参数结构体
 */
export interface ModifyPrivateIpAddressesAttributeResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 转发规则及健康状态列表
 */
export interface RuleHealth {
    /**
      * 本规则上绑定的后端的健康检查状态
注意：此字段可能返回 null，表示取不到有效值。
      */
    Targets: Array<TargetHealth>;
}
/**
 * DeleteSecurityGroup返回参数结构体
 */
export interface DeleteSecurityGroupResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CreateNetworkInterface返回参数结构体
 */
export interface CreateNetworkInterfaceResponse {
    /**
      * 弹性网卡实例。
      */
    NetworkInterface: NetworkInterface;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 节点信息
 */
export interface Node {
    /**
      * zone信息。
      */
    ZoneInfo: ZoneInfo;
    /**
      * 国家信息。
      */
    Country: Country;
    /**
      * 区域信息。
      */
    Area: Area;
    /**
      * 省份信息。
      */
    Province: Province;
    /**
      * 城市信息。
      */
    City: City;
    /**
      * Region信息。
      */
    RegionInfo: RegionInfo;
    /**
      * 运营商列表。
      */
    ISPSet: Array<ISP>;
    /**
      * 运营商数量。
      */
    ISPNum: number;
}
/**
 * DescribeDisks返回参数结构体
 */
export interface DescribeDisksResponse {
    /**
      * 符合条件的云硬盘数量。
      */
    TotalCount: number;
    /**
      * 云硬盘的详细信息列表。
      */
    DiskSet: Array<Disk>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 实例可用区及对应的实例创建数目及运营商的组合；
 */
export interface ZoneInstanceCountISP {
    /**
      * 创建实例的可用区。
      */
    Zone: string;
    /**
      * 在当前可用区欲创建的实例数目。
      */
    InstanceCount: number;
    /**
      * 运营商如下：
CTCC：中国电信
CUCC：中国联通
CMCC：中国移动
多个运营商用英文分号连接";"，例如："CMCC;CUCC;CTCC"。多运营商需要开通白名单，请直接联系腾讯云客服。
      */
    ISP: string;
    /**
      * 指定私有网络编号，SubnetId与VpcId必须同时指定或不指定
      */
    VpcId?: string;
    /**
      * 指定子网编号，SubnetId与VpcId必须同时指定或不指定
      */
    SubnetId?: string;
    /**
      * 指定主网卡内网IP。条件：SubnetId与VpcId必须同时指定，并且IP数量与InstanceCount相同，多IP主机副网卡内网IP在相同子网内通过DHCP获取。
      */
    PrivateIpAddresses?: Array<string>;
    /**
      * 为弹性网卡指定随机生成的IPv6地址数量，目前数量不能大于1。
      */
    Ipv6AddressCount?: number;
}
/**
 * DescribeAddressQuota请求参数结构体
 */
export interface DescribeAddressQuotaRequest {
    /**
      * ECM 地域
      */
    EcmRegion: string;
}
/**
 * DescribeInstanceTypeConfig返回参数结构体
 */
export interface DescribeInstanceTypeConfigResponse {
    /**
      * 总数
      */
    TotalCount?: number;
    /**
      * 机型配置信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    InstanceTypeConfigSet?: Array<InstanceTypeConfig>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 负载均衡健康检查
 */
export interface HealthCheck {
    /**
      * 是否开启健康检查：1（开启）、0（关闭）
注意：此字段可能返回 null，表示取不到有效值。
      */
    HealthSwitch?: number;
    /**
      * 健康检查的响应超时时间，可选值：2~60，默认值：2，单位：秒。响应超时时间要小于检查间隔时间。
注意：此字段可能返回 null，表示取不到有效值。
      */
    TimeOut?: number;
    /**
      * 健康检查探测间隔时间，默认值：5，可选值：5~300，单位：秒。
注意：此字段可能返回 null，表示取不到有效值。
      */
    IntervalTime?: number;
    /**
      * 健康阈值，默认值：3，表示当连续探测三次健康则表示该转发正常，可选值：2~10，单位：次。
注意：此字段可能返回 null，表示取不到有效值。
      */
    HealthNum?: number;
    /**
      * 不健康阈值，默认值：3，表示当连续探测三次不健康则表示该转发异常，可选值：2~10，单位：次。
注意：此字段可能返回 null，表示取不到有效值。
      */
    UnHealthyNum?: number;
    /**
      * 自定义探测相关参数。健康检查端口，默认为后端服务的端口，除非您希望指定特定端口，否则建议留空。
注意：此字段可能返回 null，表示取不到有效值。
      */
    CheckPort?: number;
    /**
      * 自定义探测相关参数。健康检查协议CheckType的值取CUSTOM时，必填此字段，代表健康检查的输入格式，可取值：HEX或TEXT；取值为HEX时，SendContext和RecvContext的字符只能在0123456789ABCDEF中选取且长度必须是偶数位。
注意：此字段可能返回 null，表示取不到有效值。
      */
    ContextType?: string;
    /**
      * 自定义探测相关参数。健康检查协议CheckType的值取CUSTOM时，必填此字段，代表健康检查发送的请求内容，只允许ASCII可见字符，最大长度限制500。
注意：此字段可能返回 null，表示取不到有效值。
      */
    SendContext?: string;
    /**
      * 自定义探测相关参数。健康检查协议CheckType的值取CUSTOM时，必填此字段，代表健康检查返回的结果，只允许ASCII可见字符，最大长度限制500。
注意：此字段可能返回 null，表示取不到有效值。
      */
    RecvContext?: string;
    /**
      * 自定义探测相关参数。健康检查使用的协议：TCP | CUSTOM（UDP监听器只支持CUSTOM；如果使用自定义健康检查功能，则必传）。
注意：此字段可能返回 null，表示取不到有效值。
      */
    CheckType?: string;
}
/**
 * 安全组规则集合
 */
export interface SecurityGroupPolicySet {
    /**
      * 安全组规则当前版本。用户每次更新安全规则版本会自动加1，防止更新的路由规则已过期，不填不考虑冲突。
      */
    Version?: string;
    /**
      * 出站规则。其中出站规则和入站规则必须选一个。
      */
    Egress?: Array<SecurityGroupPolicy>;
    /**
      * 入站规则。其中出站规则和入站规则必须选一个。
      */
    Ingress?: Array<SecurityGroupPolicy>;
}
/**
 * AssignIpv6Addresses返回参数结构体
 */
export interface AssignIpv6AddressesResponse {
    /**
      * 分配给弹性网卡的IPv6地址列表。
      */
    Ipv6AddressSet?: Array<Ipv6Address>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CreateRoutes返回参数结构体
 */
export interface CreateRoutesResponse {
    /**
      * 新增的实例个数。
      */
    TotalCount: number;
    /**
      * 路由表对象。
注意：此字段可能返回 null，表示取不到有效值。
      */
    RouteTableSet: Array<RouteTable>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeSecurityGroups返回参数结构体
 */
export interface DescribeSecurityGroupsResponse {
    /**
      * 符合条件的实例数量。
      */
    TotalCount?: number;
    /**
      * 安全组对象。
      */
    SecurityGroupSet?: Array<SecurityGroup>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 机型族配置
 */
export interface InstanceFamilyConfig {
    /**
      * 机型名称
      */
    InstanceFamilyName: string;
    /**
      * 机型ID
      */
    InstanceFamily: string;
}
/**
 * ModifySecurityGroupPolicies返回参数结构体
 */
export interface ModifySecurityGroupPoliciesResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 协议端口模版
 */
export interface ServiceTemplateSpecification {
    /**
      * 协议端口ID，例如：eppm-f5n1f8da。
      */
    ServiceId: string;
    /**
      * 协议端口组ID，例如：eppmg-f5n1f8da。
      */
    ServiceGroupId: string;
}
/**
 * 一组相关联的装箱配额信息
 */
export interface PackingQuotaInfo {
    /**
      * 实例类型
      */
    InstanceType: string;
    /**
      * 装箱配额
      */
    PackingQuota: number;
}
/**
 * 镜像信息
 */
export interface Image {
    /**
      * 镜像ID
      */
    ImageId: string;
    /**
      * 镜像名称
      */
    ImageName: string;
    /**
      * 镜像状态
      */
    ImageState: string;
    /**
      * 镜像类型
      */
    ImageType: string;
    /**
      * 操作系统名称
      */
    ImageOsName: string;
    /**
      * 镜像描述
      */
    ImageDescription: string;
    /**
      * 镜像导入时间
      */
    ImageCreateTime: string;
    /**
      * 操作系统位数
      */
    Architecture: string;
    /**
      * 操作系统类型
      */
    OsType: string;
    /**
      * 操作系统版本
      */
    OsVersion: string;
    /**
      * 操作系统平台
      */
    Platform: string;
    /**
      * 镜像所有者
      */
    ImageOwner: number;
    /**
      * 镜像大小。单位：GB
      */
    ImageSize: number;
    /**
      * 镜像来源信息
      */
    SrcImage: SrcImage;
    /**
      * 镜像来源类型
      */
    ImageSource: string;
    /**
      * 中间态和失败时候的任务ID
      */
    TaskId: string;
    /**
      * 是否支持CloudInit
      */
    IsSupportCloudInit: boolean;
}
/**
 * DetachNetworkInterface请求参数结构体
 */
export interface DetachNetworkInterfaceRequest {
    /**
      * 弹性网卡实例ID，例如：eni-m6dyj72l。
      */
    NetworkInterfaceId: string;
    /**
      * 实例ID。形如：ein-hcs7jkg4
      */
    InstanceId: string;
    /**
      * ECM 地域，形如ap-xian-ecm。
      */
    EcmRegion: string;
}
/**
 * ModifyTargetWeight请求参数结构体
 */
export interface ModifyTargetWeightRequest {
    /**
      * 负载均衡实例 ID
      */
    LoadBalancerId: string;
    /**
      * 负载均衡监听器 ID
      */
    ListenerId: string;
    /**
      * 要修改权重的后端服务列表
      */
    Targets: Array<Target>;
    /**
      * 后端服务新的转发权重，取值范围：0~100，默认值10。如果设置了 Targets.Weight 参数，则此参数不生效。
      */
    Weight?: number;
}
/**
 * DescribeRouteConflicts请求参数结构体
 */
export interface DescribeRouteConflictsRequest {
    /**
      * 路由表实例ID，例如：rtb-azd4dt1c。
      */
    RouteTableId: string;
    /**
      * 要检查的与之冲突的目的端列表
      */
    DestinationCidrBlocks: Array<string>;
}
/**
 * 子网对象
 */
export interface Subnet {
    /**
      * VPC实例ID。
      */
    VpcId: string;
    /**
      * 子网实例ID，例如：subnet-bthucmmy。
      */
    SubnetId: string;
    /**
      * 子网名称。
      */
    SubnetName: string;
    /**
      * 子网的 IPv4 CIDR。
      */
    CidrBlock: string;
    /**
      * 是否默认子网。
      */
    IsDefault: boolean;
    /**
      * 是否开启广播。
      */
    EnableBroadcast: boolean;
    /**
      * 路由表实例ID，例如：rtb-l2h8d7c2。
      */
    RouteTableId: string;
    /**
      * 创建时间。
      */
    CreatedTime: string;
    /**
      * 可用IP数。
      */
    AvailableIpAddressCount: number;
    /**
      * 子网的 IPv6 CIDR。
      */
    Ipv6CidrBlock: string;
    /**
      * 关联ACLID
      */
    NetworkAclId: string;
    /**
      * 是否为 SNAT 地址池子网。
      */
    IsRemoteVpcSnat: boolean;
    /**
      * 标签键值对。
注意：此字段可能返回 null，表示取不到有效值。
      */
    TagSet: Array<Tag>;
    /**
      * 所在区域
      */
    Zone: string;
    /**
      * 可用区名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    ZoneName: string;
    /**
      * 实例数量
注意：此字段可能返回 null，表示取不到有效值。
      */
    InstanceCount: number;
    /**
      * VPC的 IPv4 CIDR。
注意：此字段可能返回 null，表示取不到有效值。
      */
    VpcCidrBlock: string;
    /**
      * VPC的 IPv6 CIDR。
注意：此字段可能返回 null，表示取不到有效值。
      */
    VpcIpv6CidrBlock: string;
    /**
      * 地域
注意：此字段可能返回 null，表示取不到有效值。
      */
    Region: string;
}
/**
 * AttachNetworkInterface请求参数结构体
 */
export interface AttachNetworkInterfaceRequest {
    /**
      * 弹性网卡实例ID，例如：eni-m6dyj72l。
      */
    NetworkInterfaceId: string;
    /**
      * 实例ID。形如：ein-r8hr2upy。
      */
    InstanceId: string;
    /**
      * ECM 地域，形如ap-xian-ecm。
      */
    EcmRegion: string;
}
/**
 * ResetInstancesPassword返回参数结构体
 */
export interface ResetInstancesPasswordResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 安全组对象
 */
export interface SecurityGroup {
    /**
      * 安全组实例ID，例如：esg-ohuuioma。
      */
    SecurityGroupId: string;
    /**
      * 安全组名称，可任意命名，但不得超过60个字符。
      */
    SecurityGroupName: string;
    /**
      * 安全组备注，最多100个字符。
      */
    SecurityGroupDesc: string;
    /**
      * 是否是默认安全组，默认安全组不支持删除。
      */
    IsDefault?: boolean;
    /**
      * 安全组创建时间。
      */
    CreatedTime?: string;
    /**
      * 标签键值对。
      */
    TagSet?: Array<Tag>;
}
/**
 * ModifyModuleDisableWanIp请求参数结构体
 */
export interface ModifyModuleDisableWanIpRequest {
    /**
      * 模块ID
      */
    ModuleId: string;
    /**
      * 是否禁止分配外网ip,true：统一分配外网ip，false：禁止分配外网ip.
      */
    DisableWanIp: boolean;
}
/**
 * DescribeInstanceVncUrl返回参数结构体
 */
export interface DescribeInstanceVncUrlResponse {
    /**
      * 实例的管理终端地址。
      */
    InstanceVncUrl?: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DisassociateAddress返回参数结构体
 */
export interface DisassociateAddressResponse {
    /**
      * 异步任务TaskId。可以使用DescribeTaskResult接口查询任务状态。
      */
    TaskId?: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeInstanceTypeConfig请求参数结构体
 */
export declare type DescribeInstanceTypeConfigRequest = null;
/**
 * DeleteRoutes请求参数结构体
 */
export interface DeleteRoutesRequest {
    /**
      * 路由表唯一ID。
      */
    RouteTableId: string;
    /**
      * 路由策略对象。
      */
    Routes: Array<Route>;
}
/**
 * AssociateAddress请求参数结构体
 */
export interface AssociateAddressRequest {
    /**
      * ECM 地域
      */
    EcmRegion: string;
    /**
      * 标识 EIP 的唯一 ID。EIP 唯一 ID 形如：eip-11112222。
      */
    AddressId: string;
    /**
      * 要绑定的实例 ID。
      */
    InstanceId?: string;
    /**
      * 要绑定的弹性网卡 ID。 弹性网卡 ID 形如：eni-11112222。NetworkInterfaceId 与 InstanceId 不可同时指定。弹性网卡 ID 可通过DescribeNetworkInterfaces接口返回值中的networkInterfaceId获取。
      */
    NetworkInterfaceId?: string;
    /**
      * 要绑定的内网 IP。如果指定了 NetworkInterfaceId 则也必须指定 PrivateIpAddress ，表示将 EIP 绑定到指定弹性网卡的指定内网 IP 上。同时要确保指定的 PrivateIpAddress 是指定的 NetworkInterfaceId 上的一个内网 IP。指定弹性网卡的内网 IP 可通过DescribeNetworkInterfaces接口返回值中的privateIpAddress获取。
      */
    PrivateIpAddress?: string;
}
/**
 * DescribePeakNetworkOverview返回参数结构体
 */
export interface DescribePeakNetworkOverviewResponse {
    /**
      * 网络峰值数组。
注意：此字段可能返回 null，表示取不到有效值。
      */
    PeakNetworkRegionSet: Array<PeakNetworkRegionInfo>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeLoadBalanceTaskStatus返回参数结构体
 */
export interface DescribeLoadBalanceTaskStatusResponse {
    /**
      * 任务的当前状态。 0：成功，1：失败，2：进行中。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Status?: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 磁盘信息
 */
export interface DiskInfo {
    /**
      * 磁盘类型：LOCAL_BASIC
      */
    DiskType: string;
    /**
      * 磁盘ID
      */
    DiskId: string;
    /**
      * 磁盘大小（GB）
      */
    DiskSize: number;
}
/**
 * 描述键值对过滤器，用于条件过滤查询。
 */
export interface Filter {
    /**
      * 一个或者多个过滤值。
      */
    Values: Array<string>;
    /**
      * 过滤键的名称。
      */
    Name: string;
}
/**
 * DescribeSnapshots返回参数结构体
 */
export interface DescribeSnapshotsResponse {
    /**
      * 快照的数量。
      */
    TotalCount: number;
    /**
      * 快照的详情列表。
      */
    SnapshotSet: Array<Snapshot>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CreateHaVip请求参数结构体
 */
export interface CreateHaVipRequest {
    /**
      * HAVIP所在私有网络ID。
      */
    VpcId: string;
    /**
      * HAVIP所在子网ID。
      */
    SubnetId: string;
    /**
      * HAVIP名称。
      */
    HaVipName: string;
    /**
      * 指定虚拟IP地址，必须在VPC网段内且未被占用。不指定则自动分配。
      */
    Vip?: string;
}
/**
 * CreateDisks返回参数结构体
 */
export interface CreateDisksResponse {
    /**
      * 创建的云硬盘ID列表。
      */
    DiskIdSet: Array<string>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeAddressQuota返回参数结构体
 */
export interface DescribeAddressQuotaResponse {
    /**
      * 账户 EIP 配额信息。
      */
    QuotaSet?: Array<EipQuota>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * Zone的实例信息
 */
export interface ZoneInstanceInfo {
    /**
      * Zone名称
      */
    ZoneName: string;
    /**
      * 实例数量
      */
    InstanceNum: number;
}
/**
 * DeleteLoadBalancer返回参数结构体
 */
export interface DeleteLoadBalancerResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DeleteSecurityGroup请求参数结构体
 */
export interface DeleteSecurityGroupRequest {
    /**
      * 安全组实例ID，例如esg-33ocnj9n，可通过DescribeSecurityGroups获取。
      */
    SecurityGroupId: string;
}
/**
 * CreateRouteTable返回参数结构体
 */
export interface CreateRouteTableResponse {
    /**
      * 路由表对象
      */
    RouteTable: RouteTable;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeDisks请求参数结构体
 */
export interface DescribeDisksRequest {
    /**
      * 过滤条件。参数不支持同时指定`DiskIds`和`Filters`。<br><li>disk-usage - Array of String - 是否必填：否 -（过滤条件）按云盘类型过滤。 (SYSTEM_DISK：表示系统盘 | DATA_DISK：表示数据盘)<br><li>disk-charge-type - Array of String - 是否必填：否 -（过滤条件）按照云硬盘计费模式过滤。 (PREPAID：表示预付费，即包年包月 | POSTPAID_BY_HOUR：表示后付费，即按量计费。)<br><li>portable - Array of String - 是否必填：否 -（过滤条件）按是否为弹性云盘过滤。 (TRUE：表示弹性云盘 | FALSE：表示非弹性云盘。)<br><li>project-id - Array of Integer - 是否必填：否 -（过滤条件）按云硬盘所属项目ID过滤。<br><li>disk-id - Array of String - 是否必填：否 -（过滤条件）按照云硬盘ID过滤。云盘ID形如：`disk-11112222`。<br><li>disk-name - Array of String - 是否必填：否 -（过滤条件）按照云盘名称过滤。<br><li>disk-type - Array of String - 是否必填：否 -（过滤条件）按照云盘介质类型过滤。(CLOUD_BASIC：表示普通云硬盘 | CLOUD_PREMIUM：表示高性能云硬盘。| CLOUD_SSD：表示SSD云硬盘 | CLOUD_HSSD：表示增强型SSD云硬盘。| CLOUD_TSSD：表示极速型云硬盘。)<br><li>disk-state - Array of String - 是否必填：否 -（过滤条件）按照云盘状态过滤。(UNATTACHED：未挂载 | ATTACHING：挂载中 | ATTACHED：已挂载 | DETACHING：解挂中 | EXPANDING：扩容中 | ROLLBACKING：回滚中 | TORECYCLE：待回收。)<br><li>instance-id - Array of String - 是否必填：否 -（过滤条件）按照云盘挂载的云主机实例ID过滤。可根据此参数查询挂载在指定云主机下的云硬盘。<br><li>zone - Array of String - 是否必填：否 -（过滤条件）按照[可用区](/document/product/213/15753#ZoneInfo)过滤。<br><li>instance-ip-address - Array of String - 是否必填：否 -（过滤条件）按云盘所挂载云主机的内网或外网IP过滤。<br><li>instance-name - Array of String - 是否必填：否 -（过滤条件）按云盘所挂载的实例名称过滤。<br><li>tag-key - Array of String - 是否必填：否 -（过滤条件）按照标签键进行过滤。<br><li>tag-value - Array of String - 是否必填：否 -（过滤条件）照标签值进行过滤。<br><li>tag:tag-key - Array of String - 是否必填：否 -（过滤条件）按照标签键值对进行过滤。 tag-key使用具体的标签键进行替换。
      */
    Filters?: Array<Filter>;
    /**
      * 返回数量，默认为20，最大值为100。关于`Limit`的更进一步介绍请参考 API [简介](/document/product/362/15633)中的相关小节。
      */
    Limit?: number;
    /**
      * 云盘列表排序的依据字段。取值范围：<br><li>CREATE_TIME：依据云盘的创建时间排序<br><li>DEADLINE：依据云盘的到期时间排序<br>默认按云盘创建时间排序。
      */
    OrderField?: string;
    /**
      * 偏移量，默认为0。关于`Offset`的更进一步介绍请参考API[简介](/document/product/362/15633)中的相关小节。
      */
    Offset?: number;
    /**
      * 云盘详情中是否需要返回云盘绑定的定期快照策略ID，TRUE表示需要返回，FALSE表示不返回。
      */
    ReturnBindAutoSnapshotPolicy?: boolean;
    /**
      * 按照一个或者多个云硬盘ID查询。云硬盘ID形如：`disk-11112222`，此参数的具体格式可参考API[简介](/document/product/362/15633)的ids.N一节）。参数不支持同时指定`DiskIds`和`Filters`。
      */
    DiskIds?: Array<string>;
    /**
      * 输出云盘列表的排列顺序。取值范围：<br><li>ASC：升序排列<br><li>DESC：降序排列。
      */
    Order?: string;
}
/**
 * ModifyPrivateIpAddressesAttribute请求参数结构体
 */
export interface ModifyPrivateIpAddressesAttributeRequest {
    /**
      * 弹性网卡实例ID，例如：eni-m6dyj72l。
      */
    NetworkInterfaceId: string;
    /**
      * 指定的内网IP信息。
      */
    PrivateIpAddresses: Array<PrivateIpAddressSpecification>;
    /**
      * ECM 节点Region信息，形如ap-xian-ecm。
      */
    EcmRegion: string;
}
/**
 * DetachDisks返回参数结构体
 */
export interface DetachDisksResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CreateSecurityGroup请求参数结构体
 */
export interface CreateSecurityGroupRequest {
    /**
      * 安全组名称，可任意命名，但不得超过60个字符。
      */
    GroupName: string;
    /**
      * 安全组备注，最多100个字符。
      */
    GroupDescription: string;
    /**
      * 指定绑定的标签列表，例如：[{"Key": "city", "Value": "shanghai"}]
      */
    Tags?: Array<Tag>;
}
/**
 * DescribeSecurityGroupLimits请求参数结构体
 */
export declare type DescribeSecurityGroupLimitsRequest = null;
/**
 * 实例的内网ip相关信息。
 */
export interface PrivateIPAddressInfo {
    /**
      * 实例的内网ip。
注意：此字段可能返回 null，表示取不到有效值。
      */
    PrivateIPAddress: string;
}
/**
 * DisassociateInstancesKeyPairs返回参数结构体
 */
export interface DisassociateInstancesKeyPairsResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * TerminateInstances请求参数结构体
 */
export interface TerminateInstancesRequest {
    /**
      * 待销毁的实例ID列表。
      */
    InstanceIdSet: Array<string>;
    /**
      * 是否定时销毁，默认为否。
      */
    TerminateDelay?: boolean;
    /**
      * 定时销毁的时间，格式形如："2019-08-05 12:01:30"，若非定时销毁，则此参数被忽略。
      */
    TerminateTime?: string;
    /**
      * 是否关联删除已绑定的弹性网卡和弹性IP，默认为true。
当为true时，一并删除弹性网卡和弹性IP；
当为false时，只销毁主机，保留弹性网卡和弹性IP。
      */
    AssociatedResourceDestroy?: boolean;
}
/**
 * DeleteNetworkInterface返回参数结构体
 */
export interface DeleteNetworkInterfaceResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribePeakNetworkOverview请求参数结构体
 */
export interface DescribePeakNetworkOverviewRequest {
    /**
      * 开始时间（xxxx-xx-xx）如2019-08-14，默认为一周之前的日期，不应与当前日期间隔超过30天。
      */
    StartTime?: string;
    /**
      * 结束时间（xxxx-xx-xx）如2019-08-14，默认为昨天，不应与当前日期间隔超过30天。当开始与结束间隔不超过1天时会返回1分钟粒度的数据，不超过7天时返回5分钟粒度的数据，否则返回1小时粒度的数据。
      */
    EndTime?: string;
    /**
      * 过滤条件。

region    String      是否必填：否     （过滤条件）按照region过滤，不支持模糊匹配。注意 region 填上需要查询ecm region才能返回数据。
area       String      是否必填：否     （过滤条件）按照大区过滤，不支持模糊匹配。大区包括：china-central、china-east等等，可以通过DescribeNode获得所有大区；也可使用ALL_REGION表示所有地区。
isp         String      是否必填：否     （过滤条件）按照运营商过滤大区流量，运营商包括CTCC、CUCC和CMCC。只和area同时使用，且一次只能指定一种运营商。

region和area只应填写一个。
      */
    Filters?: Array<Filter>;
    /**
      * 统计周期，单位秒。取值60/300。
      */
    Period?: number;
}
/**
 * EnableRoutes请求参数结构体
 */
export interface EnableRoutesRequest {
    /**
      * 路由表唯一ID。
      */
    RouteTableId: string;
    /**
      * 路由策略ID。
      */
    RouteIds: Array<number>;
}
/**
 * 操作Action
 */
export interface OperatorAction {
    /**
      * 可执行操作
      */
    Action: string;
    /**
      * 编码Code
注意：此字段可能返回 null，表示取不到有效值。
      */
    Code: string;
    /**
      * 具体信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    Message: string;
}
/**
 * PeakFamilyInfo 按机型类别分类的cpu等数据的峰值信息
 */
export interface PeakFamilyInfo {
    /**
      * 机型类别信息。
      */
    InstanceFamily: InstanceFamilyTypeConfig;
    /**
      * 基础数据峰值信息。
      */
    PeakBaseSet: Array<PeakBase>;
}
/**
 * DescribePeakBaseOverview返回参数结构体
 */
export interface DescribePeakBaseOverviewResponse {
    /**
      * 基础峰值列表。
注意：此字段可能返回 null，表示取不到有效值。
      */
    PeakFamilyInfoSet?: Array<PeakFamilyInfo>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeImage返回参数结构体
 */
export interface DescribeImageResponse {
    /**
      * 镜像总数
      */
    TotalCount: number;
    /**
      * 镜像数组
注意：此字段可能返回 null，表示取不到有效值。
      */
    ImageSet: Array<Image>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 监听器后端
 */
export interface ListenerBackend {
    /**
      * 监听器 ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    ListenerId?: string;
    /**
      * 监听器的协议
注意：此字段可能返回 null，表示取不到有效值。
      */
    Protocol?: string;
    /**
      * 监听器的端口
注意：此字段可能返回 null，表示取不到有效值。
      */
    Port?: number;
    /**
      * 监听器上绑定的后端服务列表
注意：此字段可能返回 null，表示取不到有效值。
      */
    Targets?: Array<Backend>;
}
/**
 * Region和RegionName
 */
export interface RegionInfo {
    /**
      * Region
      */
    Region: string;
    /**
      * Region名称
      */
    RegionName: string;
    /**
      * RegionID
      */
    RegionId: number;
}
/**
 * 一组相互关联的装箱配额，以实例类型的优先级排序，优先级高的在前
 */
export interface PackingQuotaGroup {
    /**
      * 可用区
      */
    Zone: string;
    /**
      * 可用区id
      */
    ZoneId: number;
    /**
      * ISP id
      */
    ISPId: string;
    /**
      * 一组相互关联的装箱配额
      */
    PackingQuotaInfos: Array<PackingQuotaInfo>;
}
/**
 * DescribeNetworkInterfaces返回参数结构体
 */
export interface DescribeNetworkInterfacesResponse {
    /**
      * 符合条件的实例数量。
      */
    TotalCount: number;
    /**
      * 实例详细信息列表。
注意：此字段可能返回 null，表示取不到有效值。
      */
    NetworkInterfaceSet: Array<NetworkInterface>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * EnableRoutes返回参数结构体
 */
export interface EnableRoutesResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * AssignPrivateIpAddresses请求参数结构体
 */
export interface AssignPrivateIpAddressesRequest {
    /**
      * 弹性网卡实例ID，例如：eni-m6dyj72l。
      */
    NetworkInterfaceId: string;
    /**
      * ECM 地域，形如ap-xian-ecm。
      */
    EcmRegion: string;
    /**
      * 指定的内网IP信息，单次最多指定10个。与SecondaryPrivateIpAddressCount至少提供一个。
      */
    PrivateIpAddresses?: Array<PrivateIpAddressSpecification>;
    /**
      * 新申请的内网IP地址个数，与PrivateIpAddresses至少提供一个。内网IP地址个数总和不能超过配额数
      */
    SecondaryPrivateIpAddressCount?: number;
}
/**
 * CreateVpc请求参数结构体
 */
export interface CreateVpcRequest {
    /**
      * vpc名称，最大长度不能超过60个字节。
      */
    VpcName: string;
    /**
      * vpc的cidr，只能为10.*.0.0/16，172.[16-31].0.0/16，192.168.0.0/16这三个内网网段内。
      */
    CidrBlock: string;
    /**
      * ECM 地域
      */
    EcmRegion: string;
    /**
      * 是否开启组播。true: 开启, false: 不开启。暂不支持
      */
    EnableMulticast?: string;
    /**
      * DNS地址，最多支持4个，暂不支持
      */
    DnsServers?: Array<string>;
    /**
      * 域名，暂不支持
      */
    DomainName?: string;
    /**
      * 指定绑定的标签列表，例如：[{"Key": "city", "Value": "shanghai"}]
      */
    Tags?: Array<Tag>;
    /**
      * 描述信息
      */
    Description?: string;
}
/**
 * DescribeSecurityGroupAssociationStatistics请求参数结构体
 */
export interface DescribeSecurityGroupAssociationStatisticsRequest {
    /**
      * 安全实例ID，例如esg-33ocnj9n，可通过[DescribeSecurityGroups](https://cloud.tencent.com/document/product/1108/47697)获取。
      */
    SecurityGroupIds: Array<string>;
}
/**
 * 国家信息
 */
export interface Country {
    /**
      * 国家ID
      */
    CountryId: string;
    /**
      * 国家名称
      */
    CountryName: string;
}
/**
 * 路由策略
 */
export interface Route {
    /**
      * 目的IPv4网段
      */
    DestinationCidrBlock?: string;
    /**
      * 下一跳类型
NORMAL_CVM：普通云服务器；
      */
    GatewayType?: string;
    /**
      * 下一跳地址
这里只需要指定不同下一跳类型的网关ID，系统会自动匹配到下一跳地址
当 GatewayType 为 EIP 时，GatewayId 固定值 '0'
      */
    GatewayId?: string;
    /**
      * 路由策略唯一ID
      */
    RouteItemId?: string;
    /**
      * 路由策略描述
      */
    RouteDescription?: string;
    /**
      * 是否启用
      */
    Enabled?: boolean;
    /**
      * 路由类型，目前我们支持的类型有：
USER：用户路由；
NETD：网络探测路由，创建网络探测实例时，系统默认下发，不可编辑与删除；
CCN：云联网路由，系统默认下发，不可编辑与删除。
用户只能添加和操作 USER 类型的路由。
      */
    RouteType?: string;
    /**
      * 路由策略ID。IPv4路由策略ID是有意义的值，IPv6路由策略是无意义的值0。后续建议完全使用字符串唯一ID `RouteItemId`操作路由策略
      */
    RouteId?: number;
}
/**
 * DescribeListeners请求参数结构体
 */
export interface DescribeListenersRequest {
    /**
      * 负载均衡实例 ID
      */
    LoadBalancerId: string;
    /**
      * 要查询的负载均衡监听器 ID数组
      */
    ListenerIds?: Array<string>;
    /**
      * 要查询的监听器协议类型，取值 TCP | UDP
      */
    Protocol?: string;
    /**
      * 要查询的监听器的端口
      */
    Port?: number;
}
/**
 * DeleteVpc返回参数结构体
 */
export interface DeleteVpcResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ModifyModuleImage请求参数结构体
 */
export interface ModifyModuleImageRequest {
    /**
      * 默认镜像ID
      */
    DefaultImageId: string;
    /**
      * 模块ID
      */
    ModuleId: string;
}
/**
 * DescribeLoadBalancers返回参数结构体
 */
export interface DescribeLoadBalancersResponse {
    /**
      * 满足过滤条件的负载均衡实例总数。此数值与入参中的Limit无关。
注意：此字段可能返回 null，表示取不到有效值。
      */
    TotalCount?: number;
    /**
      * 返回的负载均衡实例数组。
注意：此字段可能返回 null，表示取不到有效值。
      */
    LoadBalancerSet?: Array<LoadBalancer>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 实例可执行操作
 */
export interface InstanceOperator {
    /**
      * 实例id
      */
    InstanceId: string;
    /**
      * 实例禁止的操作
注意：此字段可能返回 null，表示取不到有效值。
      */
    DeniedActions: Array<OperatorAction>;
}
/**
 * DescribeBaseOverview返回参数结构体
 */
export interface DescribeBaseOverviewResponse {
    /**
      * 模块数量，单位：个
      */
    ModuleNum?: number;
    /**
      * 节点数量，单位：个
      */
    NodeNum?: number;
    /**
      * cpu核数，单位：个
      */
    VcpuNum?: number;
    /**
      * 内存大小，单位：G
      */
    MemoryNum?: number;
    /**
      * 硬盘大小，单位：G
      */
    StorageNum?: number;
    /**
      * 昨日网络峰值,单位：M
      */
    NetworkNum?: number;
    /**
      * 实例数量，单位：台
      */
    InstanceNum?: number;
    /**
      * 运行中数量，单位：台
      */
    RunningNum?: number;
    /**
      * 安全隔离数量，单位：台
      */
    IsolationNum?: number;
    /**
      * 过期实例数量，单位：台
      */
    ExpiredNum?: number;
    /**
      * 即将过期实例数量，单位：台
      */
    WillExpireNum?: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ip地址相关信息结构体。
 */
export interface AddressInfo {
    /**
      * 实例的外网ip相关信息。
注意：此字段可能返回 null，表示取不到有效值。
      */
    PublicIPAddressInfo: PublicIPAddressInfo;
    /**
      * 实例的内网ip相关信息。
注意：此字段可能返回 null，表示取不到有效值。
      */
    PrivateIPAddressInfo: PrivateIPAddressInfo;
    /**
      * 实例的外网ipv6相关信息。
注意：此字段可能返回 null，表示取不到有效值。
      */
    PublicIPv6AddressInfo: PublicIPAddressInfo;
}
