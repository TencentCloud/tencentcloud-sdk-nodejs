/**
 * DescribeTargetGroupInstanceStatus请求参数结构体
 */
export interface DescribeTargetGroupInstanceStatusRequest {
    /**
     * 目标组唯一id
     */
    TargetGroupId: string;
    /**
     * 目标组绑定的后端服务ip列表
     */
    TargetGroupInstanceIps?: Array<string>;
}
/**
 * DescribeTargetGroupList返回参数结构体
 */
export interface DescribeTargetGroupListResponse {
    /**
     * 显示的结果数量。
     */
    TotalCount?: number;
    /**
     * 显示的目标组信息集合。
     */
    TargetGroupSet?: Array<TargetGroupInfo>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DisassociateTargetGroups返回参数结构体
 */
export interface DisassociateTargetGroupsResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeTargetGroupList请求参数结构体
 */
export interface DescribeTargetGroupListRequest {
    /**
     * 目标组ID数组。
     */
    TargetGroupIds?: Array<string>;
    /**
     * 过滤条件数组。
  
  - TargetGroupVpcId - String - 是否必填：否 - （过滤条件）按照目标组所属的私有网络过滤，如“vpc-bhqk****”。
  - TargetGroupName - String - 是否必填：否 - （过滤条件）按照目标组的名称过滤，如“tg_name”
     */
    Filters?: Array<Filter>;
    /**
     * 显示的偏移起始量。
     */
    Offset?: number;
    /**
     * 显示条数限制，默认为20。
     */
    Limit?: number;
}
/**
 * ModifyGatewayLoadBalancerAttribute请求参数结构体
 */
export interface ModifyGatewayLoadBalancerAttributeRequest {
    /**
     * 网关负载均衡的唯一ID。
     */
    LoadBalancerId: string;
    /**
     * 网关负载均衡实例名称。可支持输入1-60个字符。
     */
    LoadBalancerName?: string;
}
/**
 * ModifyTargetGroupInstancesWeight返回参数结构体
 */
export interface ModifyTargetGroupInstancesWeightResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeTargetGroups请求参数结构体
 */
export interface DescribeTargetGroupsRequest {
    /**
     * 目标组ID，与Filters互斥。
     */
    TargetGroupIds?: Array<string>;
    /**
     * 显示条数限制，默认为20。
     */
    Limit?: number;
    /**
     * 显示的偏移起始量。
     */
    Offset?: number;
    /**
     * 过滤条件数组。
  
  - TargetGroupVpcId - String - 是否必填：否 - （过滤条件）按照目标组所属的私有网络过滤，如“vpc-bhqk****”。
  - TargetGroupName - String - 是否必填：否 - （过滤条件）按照目标组的名称过滤，如“tg_name”
     */
    Filters?: Array<Filter>;
}
/**
 * DescribeTaskStatus返回参数结构体
 */
export interface DescribeTaskStatusResponse {
    /**
     * 任务的当前状态。 0：成功，1：失败，2：进行中。
     */
    Status?: number;
    /**
     * 由负载均衡实例唯一 ID 组成的数组。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    LoadBalancerIds?: Array<string>;
    /**
     * 辅助描述信息，如失败原因等。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Message?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * InquirePriceCreateGatewayLoadBalancer返回参数结构体
 */
export interface InquirePriceCreateGatewayLoadBalancerResponse {
    /**
     * 该参数表示对应的价格。
     */
    Price?: Price;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CreateTargetGroup返回参数结构体
 */
export interface CreateTargetGroupResponse {
    /**
     * 创建目标组后生成的id
     */
    TargetGroupId?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 目标组绑定的后端服务器
 */
export interface TargetGroupBackend {
    /**
     * 目标组ID
     */
    TargetGroupId?: string;
    /**
     * 后端服务的类型，可取：CVM、ENI
     */
    Type?: string;
    /**
     * 后端服务的唯一 ID
     */
    InstanceId?: string;
    /**
     * 后端服务的监听端口
     */
    Port?: number;
    /**
     * 后端服务的转发权重，取值为0或16
     */
    Weight?: number;
    /**
     * 后端服务的外网 IP
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PublicIpAddresses?: Array<string>;
    /**
     * 后端服务的内网 IP
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PrivateIpAddresses?: Array<string>;
    /**
     * 后端服务的实例名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    InstanceName?: string;
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
     * 后端服务的可用区ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ZoneId?: number;
}
/**
 * 目标组健康检查详情
 */
export interface TargetGroupHealthCheck {
    /**
     * 是否开启健康检查。
     */
    HealthSwitch: boolean;
    /**
     * 健康检查使用的协议。支持PING和TCP两种方式，默认为PING。
  
  - icmp: 使用PING的方式进行健康检查
  - tcp: 使用TCP连接的方式进行健康检查
     */
    Protocol?: string;
    /**
     * 健康检查端口，探测协议为tcp时，该参数必填。
  
     */
    Port?: number;
    /**
     * 健康检查超时时间。 默认为2秒。 可配置范围：2 - 30秒。
     */
    Timeout?: number;
    /**
     * 检测间隔时间。 默认为5秒。 可配置范围：2 - 300秒。
     */
    IntervalTime?: number;
    /**
     * 检测健康阈值。 默认为3秒。 可配置范围：2 - 10次。
     */
    HealthNum?: number;
    /**
     * 检测不健康阈值。 默认为3秒。 可配置范围：2 - 10次。
     */
    UnHealthNum?: number;
}
/**
 * ModifyTargetGroupInstancesWeight请求参数结构体
 */
export interface ModifyTargetGroupInstancesWeightRequest {
    /**
     * 目标组ID。
     */
    TargetGroupId: string;
    /**
     * 实例绑定配置数组。
     */
    TargetGroupInstances: Array<TargetGroupInstance>;
}
/**
 * DeleteTargetGroups返回参数结构体
 */
export interface DeleteTargetGroupsResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 表示网关负载均衡的价格
 */
export interface Price {
    /**
     * 描述了实例价格。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    InstancePrice?: ItemPrice;
    /**
     * 描述了GLCU的价格。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    LcuPrice?: ItemPrice;
}
/**
 * ModifyGatewayLoadBalancerAttribute返回参数结构体
 */
export interface ModifyGatewayLoadBalancerAttributeResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DeleteGatewayLoadBalancer请求参数结构体
 */
export interface DeleteGatewayLoadBalancerRequest {
    /**
     * 要删除的网关负载均衡实例 ID数组，数组大小最大支持20。
     */
    LoadBalancerIds: Array<string>;
}
/**
 * 网关负载均衡的标签信息
 */
export interface TagInfo {
    /**
     * 标签的键
     */
    TagKey: string;
    /**
     * 标签的值
     */
    TagValue: string;
}
/**
 * AssociateTargetGroups请求参数结构体
 */
export interface AssociateTargetGroupsRequest {
    /**
     * 绑定的关系数组。一次请求最多支持20个。
     */
    Associations: Array<TargetGroupAssociation>;
}
/**
 * DeregisterTargetGroupInstances请求参数结构体
 */
export interface DeregisterTargetGroupInstancesRequest {
    /**
     * 目标组ID。
     */
    TargetGroupId: string;
    /**
     * 待解绑的服务器信息。
     */
    TargetGroupInstances: Array<TargetGroupInstance>;
}
/**
 * 网关负载均衡实例的信息
 */
export interface GatewayLoadBalancer {
    /**
     * 网关负载均衡实例 ID。
     */
    LoadBalancerId?: string;
    /**
     * 网关负载均衡实例的名称。
     */
    LoadBalancerName?: string;
    /**
     * 网关负载均衡所属私有网络。
     */
    VpcId?: string;
    /**
     * 网关负载均衡所属子网。
     */
    SubnetId?: string;
    /**
     * 网关负载均衡提供服务的虚拟IP。
     */
    Vips?: Array<string>;
    /**
     * 网关负载均衡实例状态。
  0：创建中，1：正常运行，3：删除中。
     */
    Status?: number;
    /**
     * 关联的目标组唯一ID。
     */
    TargetGroupId?: string;
    /**
     * 是否开启删除保护功能。
     */
    DeleteProtect?: boolean;
    /**
     * 负载均衡实例的标签信息。
     */
    Tags?: Array<TagInfo>;
    /**
     * 创建时间。
     */
    CreateTime?: string;
    /**
     * 网关负载均衡实例的计费类型，POSTPAID_BY_HOUR：按量计费
     */
    ChargeType?: string;
    /**
     * 0：表示未被隔离，1：表示被隔离。
     */
    Isolation?: number;
    /**
     * 负载均衡实例被隔离的时间
     */
    IsolatedTime?: string;
}
/**
 * DescribeGatewayLoadBalancers请求参数结构体
 */
export interface DescribeGatewayLoadBalancersRequest {
    /**
     * 网关负载均衡实例ID。支持批量筛选的实例ID数量上限为20个。
     */
    LoadBalancerIds?: Array<string>;
    /**
     * 一次批量返回网关负载均衡实例的数量，默认为20，最大值为100。
     */
    Limit?: number;
    /**
     * 返回网关负载均衡实例列表的起始偏移量，默认0。
     */
    Offset?: number;
    /**
     * 查询负载均衡详细信息列表的过滤条件，每次请求的Filters的上限为10，Filter.Values的上限为100。
  Filter.Name和Filter.Values皆为必填项。详细的过滤条件如下：
  - VpcId - String - 是否必填：否 - （过滤条件）按照网关负载均衡实例所属的私有网络过滤，如“vpc-bhqk****”。
  - Vips - String  - 是否必填：否 - （过滤条件）按照网关负载均衡实例所属的私有网络过滤，如“10.1.1.1”
  
     */
    Filters?: Array<Filter>;
    /**
     * 搜索字段，模糊匹配名称、VIP。
     */
    SearchKey?: string;
}
/**
 * DeregisterTargetGroupInstances返回参数结构体
 */
export interface DeregisterTargetGroupInstancesResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeTargetGroupInstances返回参数结构体
 */
export interface DescribeTargetGroupInstancesResponse {
    /**
     * 本次查询的结果数量。
     */
    TotalCount?: number;
    /**
     * 绑定的服务器信息。
     */
    TargetGroupInstanceSet?: Array<TargetGroupBackend>;
    /**
     * 实际统计数量，不受Limit、Offset、CAM的影响。
     */
    RealCount?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CreateTargetGroup请求参数结构体
 */
export interface CreateTargetGroupRequest {
    /**
     * 目标组名称，限定60个字符。
     */
    TargetGroupName?: string;
    /**
     * 目标组的vpcid属性，不填则使用默认vpc
     */
    VpcId?: string;
    /**
     * 目标组的默认端口， 后续添加服务器时可使用该默认端口。Port和TargetGroupInstances.N中的port二者必填其一。仅支持6081。
     */
    Port?: number;
    /**
     * 目标组绑定的后端服务器
     */
    TargetGroupInstances?: Array<TargetGroupInstance>;
    /**
     * 网关负载均衡目标组协议。
  - TENCENT_GENEVE ：GENEVE 标准协议
  - AWS_GENEVE：GENEVE 兼容协议
     */
    Protocol?: string;
    /**
     * 健康检查设置。
     */
    HealthCheck?: TargetGroupHealthCheck;
    /**
     * 均衡算法。
  - IP_HASH_3_ELASTIC：弹性哈希
     */
    ScheduleAlgorithm?: string;
    /**
     * 是否支持全死全活。默认支持。
     */
    AllDeadToAlive?: boolean;
}
/**
 * CreateGatewayLoadBalancer请求参数结构体
 */
export interface CreateGatewayLoadBalancerRequest {
    /**
     * 网关负载均衡后端目标设备所属的私有网络 ID，如vpc-azd4dt1c，可以通过 [DescribeVpcs](https://cloud.tencent.com/document/product/215/15778)  接口获取。
     */
    VpcId: string;
    /**
     * 网关负载均衡后端目标设备所属的私有网络的子网ID。
     */
    SubnetId: string;
    /**
     * 网关负载均衡实例名称。可支持输入1-60个字符。不填写时默认自动生成。
     */
    LoadBalancerName?: string;
    /**
     * 创建网关负载均衡的个数，默认值为 1。批量创建数量最大支持10个。
     */
    Number?: number;
    /**
     * 购买网关负载均衡的同时，给负载均衡打上标签，最大支持20个标签键值对。
     */
    Tags?: Array<TagInfo>;
    /**
     * 网关负载均衡实例计费类型，当前只支持传POSTPAID_BY_HOUR，默认是POSTPAID_BY_HOUR。
     */
    LBChargeType?: string;
}
/**
 * AssociateTargetGroups返回参数结构体
 */
export interface AssociateTargetGroupsResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * InquirePriceCreateGatewayLoadBalancer请求参数结构体
 */
export interface InquirePriceCreateGatewayLoadBalancerRequest {
    /**
     * 询价的网关负载均衡实例个数，默认为1
     */
    GoodsNum?: number;
}
/**
 * DisassociateTargetGroups请求参数结构体
 */
export interface DisassociateTargetGroupsRequest {
    /**
     * 待解绑的目标组列表。
     */
    Associations: Array<TargetGroupAssociation>;
}
/**
 * 过滤器条件
 */
export interface Filter {
    /**
     * 过滤器的名称
     */
    Name: string;
    /**
     * 过滤器的值数组
     */
    Values: Array<string>;
}
/**
 * 用于目标组后端rs健康检查状态。
 */
export interface TargetGroupInstanceStatus {
    /**
     * 后端rs的IP
     */
    InstanceIp?: string;
    /**
     * 健康检查状态，参数值及含义如下：
  ● on：表示探测中。
  ● off：表示健康检查关闭。
  ● health：表示健康。
  ● unhealth：表示异常。
     */
    Status?: string;
}
/**
 * DescribeTargetGroupInstanceStatus返回参数结构体
 */
export interface DescribeTargetGroupInstanceStatusResponse {
    /**
     * 健康检查后端rs状态列表
     */
    TargetGroupInstanceSet?: Array<TargetGroupInstanceStatus>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeTargetGroupInstances请求参数结构体
 */
export interface DescribeTargetGroupInstancesRequest {
    /**
     * 过滤条件，当前仅支持TargetGroupId，BindIP，InstanceId过滤。
  
  - TargetGroupId - String - 是否必填：否 - （过滤条件）目标组ID，如“lbtg-5xunivs0”。
  - BindIP - String - 是否必填：否 - （过滤条件）目标组绑定实例的IP地址，如“10.1.1.1”
  - InstanceId - String - 是否必填：否 - （过滤条件）目标组绑定实例的名称，如“ins_name”
     */
    Filters: Array<Filter>;
    /**
     * 显示数量限制，默认20。
     */
    Limit?: number;
    /**
     * 显示的偏移量，默认为0。
     */
    Offset?: number;
}
/**
 * DescribeTaskStatus请求参数结构体
 */
export interface DescribeTaskStatusRequest {
    /**
     * 请求ID，即接口返回的 RequestId 参数。
     */
    TaskId?: string;
}
/**
 * RegisterTargetGroupInstances返回参数结构体
 */
export interface RegisterTargetGroupInstancesResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CreateGatewayLoadBalancer返回参数结构体
 */
export interface CreateGatewayLoadBalancerResponse {
    /**
     * 由网关负载均衡实例唯一 ID 组成的数组。
  存在某些场景，如创建出现延迟时，此字段可能返回为空；此时可以根据接口返回的RequestId或DealName参数，通过DescribeTaskStatus接口查询创建的资源ID。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    LoadBalancerIds?: Array<string>;
    /**
     * 订单号。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DealName?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeTargetGroups返回参数结构体
 */
export interface DescribeTargetGroupsResponse {
    /**
     * 显示的结果数量。
     */
    TotalCount?: number;
    /**
     * 显示的目标组信息集合。
     */
    TargetGroupSet?: Array<TargetGroupInfo>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * RegisterTargetGroupInstances请求参数结构体
 */
export interface RegisterTargetGroupInstancesRequest {
    /**
     * 目标组ID
     */
    TargetGroupId: string;
    /**
     * 服务器实例数组
     */
    TargetGroupInstances: Array<TargetGroupInstance>;
}
/**
 * DeleteTargetGroups请求参数结构体
 */
export interface DeleteTargetGroupsRequest {
    /**
     * 目标组ID列表。
     */
    TargetGroupIds: Array<string>;
}
/**
 * 描述了单项的价格信息
 */
export interface ItemPrice {
    /**
     * 后付费单价，单位：元。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UnitPrice?: number;
    /**
     * 后付费计价单元，可取值范围： HOUR：表示计价单元是按每小时来计算。当前涉及该计价单元的场景有：实例按小时后付费（POSTPAID_BY_HOUR）。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ChargeUnit?: string;
    /**
     * 预支费用的原价，单位：元。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    OriginalPrice?: number;
    /**
     * 预支费用的折扣价，单位：元。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DiscountPrice?: number;
    /**
     * 后付费的折扣单价，单位:元。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UnitPriceDiscount?: number;
    /**
     * 折扣，如20.0代表2折。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Discount?: number;
}
/**
 * 规则与目标组的关联关系。
 */
export interface TargetGroupAssociation {
    /**
     * 网关负载均衡实例ID。
     */
    LoadBalancerId: string;
    /**
     * 目标组ID。
     */
    TargetGroupId: string;
}
/**
 * 目标组实例
 */
export interface TargetGroupInstance {
    /**
     * 目标组实例的内网IP。
     */
    BindIP: string;
    /**
     * 目标组实例的端口，只支持6081。
     */
    Port?: number;
    /**
     * 目标组实例的权重，只支持0或16，非0统一按16处理。
     */
    Weight?: number;
}
/**
 * ModifyTargetGroupAttribute返回参数结构体
 */
export interface ModifyTargetGroupAttributeResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 目标组关联到的规则
 */
export interface AssociationItem {
    /**
     * 关联到的网关负载均衡实例ID
     */
    LoadBalancerId?: string;
    /**
     * 网关负载均衡实例名称
     */
    LoadBalancerName?: string;
}
/**
 * ModifyTargetGroupAttribute请求参数结构体
 */
export interface ModifyTargetGroupAttributeRequest {
    /**
     * 目标组的ID。
     */
    TargetGroupId: string;
    /**
     * 目标组的新名称。
     */
    TargetGroupName?: string;
    /**
     * 健康检查详情。
     */
    HealthCheck?: TargetGroupHealthCheck;
    /**
     * 是否支持全死全活。
     */
    AllDeadToAlive?: boolean;
}
/**
 * 目标组信息
 */
export interface TargetGroupInfo {
    /**
     * 目标组ID
     */
    TargetGroupId?: string;
    /**
     * 目标组的vpcid
     */
    VpcId?: string;
    /**
     * 目标组的名字
     */
    TargetGroupName?: string;
    /**
     * 目标组的默认端口
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Port?: number;
    /**
     * 目标组的创建时间
     */
    CreatedTime?: string;
    /**
     * 目标组的修改时间
     */
    UpdatedTime?: string;
    /**
     * 关联到的规则数组。在DescribeTargetGroupList接口调用时无法获取到该参数。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AssociatedRule?: Array<AssociationItem>;
    /**
     * 网关负载均衡目标组协议。
  - tencent_geneve ：GENEVE 标准协议
  - aws_geneve：GENEVE 兼容协议
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Protocol?: string;
    /**
     * 均衡算法。
  - ip_hash_3_elastic：弹性哈希
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ScheduleAlgorithm?: string;
    /**
     * 健康检查详情。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    HealthCheck?: TargetGroupHealthCheck;
    /**
     * 是否支持全死全活。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AllDeadToAlive?: boolean;
    /**
     * 目标组已关联的规则数。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AssociatedRuleCount?: number;
    /**
     * 目标组内的实例数量。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RegisteredInstancesCount?: number;
}
/**
 * DescribeGatewayLoadBalancers返回参数结构体
 */
export interface DescribeGatewayLoadBalancersResponse {
    /**
     * 满足过滤条件的负载均衡实例总数。此数值与入参中的Limit无关。
     */
    TotalCount?: number;
    /**
     * 返回的网关负载均衡实例数组。
     */
    LoadBalancerSet?: Array<GatewayLoadBalancer>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DeleteGatewayLoadBalancer返回参数结构体
 */
export interface DeleteGatewayLoadBalancerResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
