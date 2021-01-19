/**
 * DisableAutoScalingGroup返回参数结构体
 */
export interface DisableAutoScalingGroupResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ModifyLaunchConfigurationAttributes请求参数结构体
 */
export interface ModifyLaunchConfigurationAttributesRequest {
    /**
      * 启动配置ID
      */
    LaunchConfigurationId: string;
    /**
      * 指定有效的[镜像](https://cloud.tencent.com/document/product/213/4940)ID，格式形如`img-8toqc6s3`。镜像类型分为四种：<br/><li>公共镜像</li><li>自定义镜像</li><li>共享镜像</li><li>服务市场镜像</li><br/>可通过以下方式获取可用的镜像ID：<br/><li>`公共镜像`、`自定义镜像`、`共享镜像`的镜像ID可通过登录[控制台](https://console.cloud.tencent.com/cvm/image?rid=1&imageType=PUBLIC_IMAGE)查询；`服务镜像市场`的镜像ID可通过[云市场](https://market.cloud.tencent.com/list)查询。</li><li>通过调用接口 [DescribeImages](https://cloud.tencent.com/document/api/213/15715) ，取返回信息中的`ImageId`字段。</li>
      */
    ImageId?: string;
    /**
      * 实例类型列表，不同实例机型指定了不同的资源规格，最多支持10种实例机型。
启动配置，通过 InstanceType 表示单一实例类型，通过 InstanceTypes 表示多实例类型。指定 InstanceTypes 成功启动配置后，原有的 InstanceType 自动失效。
      */
    InstanceTypes?: Array<string>;
    /**
      * 实例类型校验策略，在实际修改 InstanceTypes 时发挥作用，取值包括 ALL 和 ANY，默认取值为ANY。
<br><li> ALL，所有实例类型（InstanceType）都可用则通过校验，否则校验报错。
<br><li> ANY，存在任何一个实例类型（InstanceType）可用则通过校验，否则校验报错。

实例类型不可用的常见原因包括该实例类型售罄、对应云盘售罄等。
如果 InstanceTypes 中一款机型不存在或者已下线，则无论 InstanceTypesCheckPolicy 采用何种取值，都会校验报错。
      */
    InstanceTypesCheckPolicy?: string;
    /**
      * 启动配置显示名称。名称仅支持中文、英文、数字、下划线、分隔符"-"、小数点，最大长度不能超60个字节。
      */
    LaunchConfigurationName?: string;
    /**
      * 经过 Base64 编码后的自定义数据，最大长度不超过16KB。如果要清空UserData，则指定其为空字符串
      */
    UserData?: string;
    /**
      * 实例所属安全组。该参数可以通过调用 [DescribeSecurityGroups](https://cloud.tencent.com/document/api/215/15808) 的返回值中的`SecurityGroupId`字段来获取。
若指定该参数，请至少提供一个安全组，列表顺序有先后。
      */
    SecurityGroupIds?: Array<string>;
    /**
      * 公网带宽相关信息设置。
本字段属复杂类型，修改时采取整字段全覆盖模式。即只修改复杂类型内部一个子字段时，也请提供全部所需子字段。
      */
    InternetAccessible?: InternetAccessible;
    /**
      * 实例计费类型。具体取值范围如下：
<br><li>POSTPAID_BY_HOUR：按小时后付费
<br><li>SPOTPAID：竞价付费
<br><li>PREPAID：预付费，即包年包月
      */
    InstanceChargeType?: string;
    /**
      * 预付费模式，即包年包月相关参数设置。通过该参数可以指定包年包月实例的购买时长、是否设置自动续费等属性。
若修改实例的付费模式为预付费，则该参数必传；从预付费修改为其他付费模式时，本字段原信息会自动丢弃。
本字段属复杂类型，修改时采取整字段全覆盖模式。即只修改复杂类型内部一个子字段时，也请提供全部所需子字段。
      */
    InstanceChargePrepaid?: InstanceChargePrepaid;
    /**
      * 实例的市场相关选项，如竞价实例相关参数。
若修改实例的付费模式为竞价付费，则该参数必传；从竞价付费修改为其他付费模式时，本字段原信息会自动丢弃。
本字段属复杂类型，修改时采取整字段全覆盖模式。即只修改复杂类型内部一个子字段时，也请提供全部所需子字段。
      */
    InstanceMarketOptions?: InstanceMarketOptionsRequest;
}
/**
 * DisableAutoScalingGroup请求参数结构体
 */
export interface DisableAutoScalingGroupRequest {
    /**
      * 伸缩组ID
      */
    AutoScalingGroupId: string;
}
/**
 * ModifyAutoScalingGroup请求参数结构体
 */
export interface ModifyAutoScalingGroupRequest {
    /**
      * 伸缩组ID
      */
    AutoScalingGroupId: string;
    /**
      * 伸缩组名称，在您账号中必须唯一。名称仅支持中文、英文、数字、下划线、分隔符"-"、小数点，最大长度不能超55个字节。
      */
    AutoScalingGroupName?: string;
    /**
      * 默认冷却时间，单位秒，默认值为300
      */
    DefaultCooldown?: number;
    /**
      * 期望实例数，大小介于最小实例数和最大实例数之间
      */
    DesiredCapacity?: number;
    /**
      * 启动配置ID
      */
    LaunchConfigurationId?: string;
    /**
      * 最大实例数，取值范围为0-2000。
      */
    MaxSize?: number;
    /**
      * 最小实例数，取值范围为0-2000。
      */
    MinSize?: number;
    /**
      * 项目ID
      */
    ProjectId?: number;
    /**
      * 子网ID列表
      */
    SubnetIds?: Array<string>;
    /**
      * 销毁策略，目前长度上限为1。取值包括 OLDEST_INSTANCE 和 NEWEST_INSTANCE。
<br><li> OLDEST_INSTANCE 优先销毁伸缩组中最旧的实例。
<br><li> NEWEST_INSTANCE，优先销毁伸缩组中最新的实例。
      */
    TerminationPolicies?: Array<string>;
    /**
      * VPC ID，基础网络则填空字符串。修改为具体VPC ID时，需指定相应的SubnetIds；修改为基础网络时，需指定相应的Zones。
      */
    VpcId?: string;
    /**
      * 可用区列表
      */
    Zones?: Array<string>;
    /**
      * 重试策略，取值包括 IMMEDIATE_RETRY、 INCREMENTAL_INTERVALS、NO_RETRY，默认取值为 IMMEDIATE_RETRY。
<br><li> IMMEDIATE_RETRY，立即重试，在较短时间内快速重试，连续失败超过一定次数（5次）后不再重试。
<br><li> INCREMENTAL_INTERVALS，间隔递增重试，随着连续失败次数的增加，重试间隔逐渐增大，重试间隔从秒级到1天不等。
<br><li> NO_RETRY，不进行重试，直到再次收到用户调用或者告警信息后才会重试。
      */
    RetryPolicy?: string;
    /**
      * 可用区校验策略，取值包括 ALL 和 ANY，默认取值为ANY。在伸缩组实际变更资源相关字段时（启动配置、可用区、子网）发挥作用。
<br><li> ALL，所有可用区（Zone）或子网（SubnetId）都可用则通过校验，否则校验报错。
<br><li> ANY，存在任何一个可用区（Zone）或子网（SubnetId）可用则通过校验，否则校验报错。

可用区或子网不可用的常见原因包括该可用区CVM实例类型售罄、该可用区CBS云盘售罄、该可用区配额不足、该子网IP不足等。
如果 Zones/SubnetIds 中可用区或者子网不存在，则无论 ZonesCheckPolicy 采用何种取值，都会校验报错。
      */
    ZonesCheckPolicy?: string;
    /**
      * 服务设置，包括云监控不健康替换等服务设置。
      */
    ServiceSettings?: ServiceSettings;
    /**
      * 实例具有IPv6地址数量的配置，取值包括0、1。
      */
    Ipv6AddressCount?: number;
    /**
      * 多可用区/子网策略，取值包括 PRIORITY 和 EQUALITY。
<br><li> PRIORITY，按照可用区/子网列表的顺序，作为优先级来尝试创建实例，如果优先级最高的可用区/子网可以创建成功，则总在该可用区/子网创建。
<br><li> EQUALITY：每次选择当前实例数最少的可用区/子网进行扩容，使得每个可用区/子网都有机会发生扩容，多次扩容出的实例会打散到多个可用区/子网。

与本策略相关的注意点：
<br><li> 当伸缩组为基础网络时，本策略适用于多可用区；当伸缩组为VPC网络时，本策略适用于多子网，此时不再考虑可用区因素，例如四个子网ABCD，其中ABC处于可用区1，D处于可用区2，此时考虑子网ABCD进行排序，而不考虑可用区1、2。
<br><li> 本策略适用于多可用区/子网，不适用于启动配置的多机型。多机型按照优先级策略进行选择。
<br><li> 创建实例时，先保证多机型的策略，后保证多可用区/子网的策略。例如多机型A、B，多子网1、2、3（按照PRIORITY策略），会按照A1、A2、A3、B1、B2、B3 进行尝试，如果A1售罄，会尝试A2（而非B1）。
<br><li> 无论使用哪种策略，单次伸缩活动总是优先保持使用一种具体配置（机型 * 可用区/子网）。
      */
    MultiZoneSubnetPolicy?: string;
}
/**
 * 弹性伸缩事件通知
 */
export interface AutoScalingNotification {
    /**
      * 伸缩组ID。
      */
    AutoScalingGroupId: string;
    /**
      * 用户组ID列表。
      */
    NotificationUserGroupIds: Array<string>;
    /**
      * 通知事件列表。
      */
    NotificationTypes: Array<string>;
    /**
      * 事件通知ID。
      */
    AutoScalingNotificationId: string;
}
/**
 * ModifyScheduledAction请求参数结构体
 */
export interface ModifyScheduledActionRequest {
    /**
      * 待修改的定时任务ID
      */
    ScheduledActionId: string;
    /**
      * 定时任务名称。名称仅支持中文、英文、数字、下划线、分隔符"-"、小数点，最大长度不能超60个字节。同一伸缩组下必须唯一。
      */
    ScheduledActionName?: string;
    /**
      * 当定时任务触发时，设置的伸缩组最大实例数。
      */
    MaxSize?: number;
    /**
      * 当定时任务触发时，设置的伸缩组最小实例数。
      */
    MinSize?: number;
    /**
      * 当定时任务触发时，设置的伸缩组期望实例数。
      */
    DesiredCapacity?: number;
    /**
      * 定时任务的首次触发时间，取值为`北京时间`（UTC+8），按照`ISO8601`标准，格式：`YYYY-MM-DDThh:mm:ss+08:00`。
      */
    StartTime?: string;
    /**
      * 定时任务的结束时间，取值为`北京时间`（UTC+8），按照`ISO8601`标准，格式：`YYYY-MM-DDThh:mm:ss+08:00`。<br>此参数与`Recurrence`需要同时指定，到达结束时间之后，定时任务将不再生效。
      */
    EndTime?: string;
    /**
      * 定时任务的重复方式。为标准 Cron 格式<br>此参数与`EndTime`需要同时指定。
      */
    Recurrence?: string;
}
/**
 * DescribeAutoScalingGroups请求参数结构体
 */
export interface DescribeAutoScalingGroupsRequest {
    /**
      * 按照一个或者多个伸缩组ID查询。伸缩组ID形如：`asg-nkdwoui0`。每次请求的上限为100。参数不支持同时指定`AutoScalingGroupIds`和`Filters`。
      */
    AutoScalingGroupIds?: Array<string>;
    /**
      * 过滤条件。
<li> auto-scaling-group-id - String - 是否必填：否 -（过滤条件）按照伸缩组ID过滤。</li>
<li> auto-scaling-group-name - String - 是否必填：否 -（过滤条件）按照伸缩组名称过滤。</li>
<li> vague-auto-scaling-group-name - String - 是否必填：否 -（过滤条件）按照伸缩组名称模糊搜索。</li>
<li> launch-configuration-id - String - 是否必填：否 -（过滤条件）按照启动配置ID过滤。</li>
<li> tag-key - String - 是否必填：否 -（过滤条件）按照标签键进行过滤。</li>
<li> tag-value - String - 是否必填：否 -（过滤条件）按照标签值进行过滤。</li>
<li> tag:tag-key - String - 是否必填：否 -（过滤条件）按照标签键值对进行过滤。 tag-key使用具体的标签键进行替换。使用请参考示例2</li>
每次请求的`Filters`的上限为10，`Filter.Values`的上限为5。参数不支持同时指定`AutoScalingGroupIds`和`Filters`。
      */
    Filters?: Array<Filter>;
    /**
      * 返回数量，默认为20，最大值为100。关于`Limit`的更进一步介绍请参考 API [简介](https://cloud.tencent.com/document/api/213/15688)中的相关小节。
      */
    Limit?: number;
    /**
      * 偏移量，默认为0。关于`Offset`的更进一步介绍请参考 API [简介](https://cloud.tencent.com/document/api/213/15688)中的相关小节。
      */
    Offset?: number;
}
/**
 * CreateAutoScalingGroup返回参数结构体
 */
export interface CreateAutoScalingGroupResponse {
    /**
      * 伸缩组ID
      */
    AutoScalingGroupId?: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeAccountLimits返回参数结构体
 */
export interface DescribeAccountLimitsResponse {
    /**
      * 用户账户被允许创建的启动配置最大数量
      */
    MaxNumberOfLaunchConfigurations?: number;
    /**
      * 用户账户启动配置的当前数量
      */
    NumberOfLaunchConfigurations?: number;
    /**
      * 用户账户被允许创建的伸缩组最大数量
      */
    MaxNumberOfAutoScalingGroups?: number;
    /**
      * 用户账户伸缩组的当前数量
      */
    NumberOfAutoScalingGroups?: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CreatePaiInstance返回参数结构体
 */
export interface CreatePaiInstanceResponse {
    /**
      * 当通过本接口来创建实例时会返回该参数，表示一个或多个实例`ID`。返回实例`ID`列表并不代表实例创建成功，可根据 [DescribeInstances](https://cloud.tencent.com/document/api/213/15728) 接口查询返回的InstancesSet中对应实例的`ID`的状态来判断创建是否完成；如果实例状态由“准备中”变为“正在运行”，则为创建成功。
      */
    InstanceIdSet?: Array<string>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CreateLaunchConfiguration返回参数结构体
 */
export interface CreateLaunchConfigurationResponse {
    /**
      * 当通过本接口来创建启动配置时会返回该参数，表示启动配置ID。
      */
    LaunchConfigurationId?: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CreateLifecycleHook返回参数结构体
 */
export interface CreateLifecycleHookResponse {
    /**
      * 生命周期挂钩ID
      */
    LifecycleHookId?: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeAutoScalingGroups返回参数结构体
 */
export interface DescribeAutoScalingGroupsResponse {
    /**
      * 伸缩组详细信息列表。
      */
    AutoScalingGroupSet?: Array<AutoScalingGroup>;
    /**
      * 符合条件的伸缩组数量。
      */
    TotalCount?: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CreatePaiInstance请求参数结构体
 */
export interface CreatePaiInstanceRequest {
    /**
      * PAI实例的域名。
      */
    DomainName: string;
    /**
      * 公网带宽相关信息设置。
      */
    InternetAccessible: InternetAccessible;
    /**
      * 启动脚本的base64编码字符串。
      */
    InitScript?: string;
    /**
      * 可用区列表。
      */
    Zones?: Array<string>;
    /**
      * VPC ID。
      */
    VpcId?: string;
    /**
      * 子网列表。
      */
    SubnetIds?: Array<string>;
    /**
      * 实例显示名称。
      */
    InstanceName?: string;
    /**
      * 实例机型列表。
      */
    InstanceTypes?: Array<string>;
    /**
      * 实例登录设置。
      */
    LoginSettings?: LoginSettings;
    /**
      * 实例计费类型。
      */
    InstanceChargeType?: string;
    /**
      * 预付费模式，即包年包月相关参数设置。通过该参数可以指定包年包月实例的购买时长、是否设置自动续费等属性。若指定实例的付费模式为预付费则该参数必传。
      */
    InstanceChargePrepaid?: InstanceChargePrepaid;
}
/**
 * 启动配置的系统盘配置信息。若不指定该参数，则按照系统默认值进行分配。
 */
export interface SystemDisk {
    /**
      * 系统盘类型。系统盘类型限制详见[CVM实例配置](https://cloud.tencent.com/document/product/213/2177)。取值范围：<br><li>LOCAL_BASIC：本地硬盘<br><li>LOCAL_SSD：本地SSD硬盘<br><li>CLOUD_BASIC：普通云硬盘<br><li>CLOUD_PREMIUM：高性能云硬盘<br><li>CLOUD_SSD：SSD云硬盘<br><br>默认取值：LOCAL_BASIC。
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
 * 竞价相关选项
 */
export interface SpotMarketOptions {
    /**
      * 竞价出价，例如“1.05”
      */
    MaxPrice: string;
    /**
      * 竞价请求类型，当前仅支持类型：one-time，默认值为one-time
注意：此字段可能返回 null，表示取不到有效值。
      */
    SpotInstanceType?: string;
}
/**
 * StopAutoScalingInstances返回参数结构体
 */
export interface StopAutoScalingInstancesResponse {
    /**
      * 伸缩活动ID
      */
    ActivityId?: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeScalingPolicies请求参数结构体
 */
export interface DescribeScalingPoliciesRequest {
    /**
      * 按照一个或者多个告警策略ID查询。告警策略ID形如：asp-i9vkg894。每次请求的实例的上限为100。参数不支持同时指定`AutoScalingPolicyIds`和`Filters`。
      */
    AutoScalingPolicyIds?: Array<string>;
    /**
      * 过滤条件。
<li> auto-scaling-policy-id - String - 是否必填：否 -（过滤条件）按照告警策略ID过滤。</li>
<li> auto-scaling-group-id - String - 是否必填：否 -（过滤条件）按照伸缩组ID过滤。</li>
<li> scaling-policy-name - String - 是否必填：否 -（过滤条件）按照告警策略名称过滤。</li>
每次请求的`Filters`的上限为10，`Filter.Values`的上限为5。参数不支持同时指定`AutoScalingPolicyIds`和`Filters`。
      */
    Filters?: Array<Filter>;
    /**
      * 返回数量，默认为20，最大值为100。关于`Limit`的更进一步介绍请参考 API [简介](https://cloud.tencent.com/document/api/213/15688)中的相关小节。
      */
    Limit?: number;
    /**
      * 偏移量，默认为0。关于`Offset`的更进一步介绍请参考 API [简介](https://cloud.tencent.com/document/api/213/15688)中的相关小节。
      */
    Offset?: number;
}
/**
 * 云服务器实例名称（InstanceName）的相关设置
 */
export interface InstanceNameSettings {
    /**
      * 云服务器的实例名。

点号（.）和短横线（-）不能作为 InstanceName 的首尾字符，不能连续使用。

其他类型（Linux 等）实例：字符长度为[2, 40]，允许支持多个点号，点之间为一段，每段允许字母（不限制大小写）、数字和短横线（-）组成。
注意：此字段可能返回 null，表示取不到有效值。
      */
    InstanceName: string;
    /**
      * 云服务器实例名的风格，取值范围包括 ORIGINAL 和 UNIQUE，默认为 ORIGINAL。

ORIGINAL，AS 直接将入参中所填的 InstanceName 传递给 CVM，CVM 可能会对 InstanceName 追加序列号，伸缩组中实例的 InstanceName 会出现冲突的情况。

UNIQUE，入参所填的 InstanceName 相当于实例名前缀，AS 和 CVM 会对其进行拓展，伸缩组中实例的 InstanceName 可以保证唯一。
注意：此字段可能返回 null，表示取不到有效值。
      */
    InstanceNameStyle?: string;
}
/**
 * ModifyScheduledAction返回参数结构体
 */
export interface ModifyScheduledActionResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CreateAutoScalingGroupFromInstance请求参数结构体
 */
export interface CreateAutoScalingGroupFromInstanceRequest {
    /**
      * 伸缩组名称，在您账号中必须唯一。名称仅支持中文、英文、数字、下划线、分隔符"-"、小数点，最大长度不能超55个字节。
      */
    AutoScalingGroupName: string;
    /**
      * 实例ID
      */
    InstanceId: string;
    /**
      * 最小实例数，取值范围为0-2000。
      */
    MinSize: number;
    /**
      * 最大实例数，取值范围为0-2000。
      */
    MaxSize: number;
    /**
      * 期望实例数，大小介于最小实例数和最大实例数之间。
      */
    DesiredCapacity?: number;
    /**
      * 是否继承实例标签，默认值为False
      */
    InheritInstanceTag?: boolean;
}
/**
 * ExecuteScalingPolicy返回参数结构体
 */
export interface ExecuteScalingPolicyResponse {
    /**
      * 伸缩活动ID
      */
    ActivityId?: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ModifyLaunchConfigurationAttributes返回参数结构体
 */
export interface ModifyLaunchConfigurationAttributesResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * SetInstancesProtection返回参数结构体
 */
export interface SetInstancesProtectionResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * StartAutoScalingInstances返回参数结构体
 */
export interface StartAutoScalingInstancesResponse {
    /**
      * 伸缩活动ID
      */
    ActivityId?: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CompleteLifecycleAction请求参数结构体
 */
export interface CompleteLifecycleActionRequest {
    /**
      * 生命周期挂钩ID
      */
    LifecycleHookId: string;
    /**
      * 生命周期动作的结果，取值范围为“CONTINUE”或“ABANDON”
      */
    LifecycleActionResult: string;
    /**
      * 实例ID，“InstanceId”和“LifecycleActionToken”必须填充其中一个
      */
    InstanceId?: string;
    /**
      * “InstanceId”和“LifecycleActionToken”必须填充其中一个
      */
    LifecycleActionToken?: string;
}
/**
 * CreateScalingPolicy返回参数结构体
 */
export interface CreateScalingPolicyResponse {
    /**
      * 告警触发策略ID。
      */
    AutoScalingPolicyId?: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CreateNotificationConfiguration返回参数结构体
 */
export interface CreateNotificationConfigurationResponse {
    /**
      * 通知ID。
      */
    AutoScalingNotificationId?: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeLaunchConfigurations返回参数结构体
 */
export interface DescribeLaunchConfigurationsResponse {
    /**
      * 符合条件的启动配置数量。
      */
    TotalCount?: number;
    /**
      * 启动配置详细信息列表。
      */
    LaunchConfigurationSet?: Array<LaunchConfiguration>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DeleteScalingPolicy返回参数结构体
 */
export interface DeleteScalingPolicyResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 资源类型及标签键值对
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
    /**
      * 标签绑定的资源类型，当前支持类型："auto-scaling-group
注意：此字段可能返回 null，表示取不到有效值。
      */
    ResourceType?: string;
}
/**
 * DescribeAutoScalingInstances请求参数结构体
 */
export interface DescribeAutoScalingInstancesRequest {
    /**
      * 待查询云服务器（CVM）的实例ID。参数不支持同时指定InstanceIds和Filters。
      */
    InstanceIds?: Array<string>;
    /**
      * 过滤条件。
<li> instance-id - String - 是否必填：否 -（过滤条件）按照实例ID过滤。</li>
<li> auto-scaling-group-id - String - 是否必填：否 -（过滤条件）按照伸缩组ID过滤。</li>
每次请求的`Filters`的上限为10，`Filter.Values`的上限为5。参数不支持同时指定`InstanceIds`和`Filters`。
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
 * 描述了实例登录相关配置与信息，出于安全性考虑，不会描述敏感信息。
 */
export interface LimitedLoginSettings {
    /**
      * 密钥ID列表。
      */
    KeyIds: Array<string>;
}
/**
 * ModifyLoadBalancers请求参数结构体
 */
export interface ModifyLoadBalancersRequest {
    /**
      * 伸缩组ID
      */
    AutoScalingGroupId: string;
    /**
      * 传统负载均衡器ID列表，目前长度上限为20，LoadBalancerIds 和 ForwardLoadBalancers 二者同时最多只能指定一个
      */
    LoadBalancerIds?: Array<string>;
    /**
      * 应用型负载均衡器列表，目前长度上限为20，LoadBalancerIds 和 ForwardLoadBalancers 二者同时最多只能指定一个
      */
    ForwardLoadBalancers?: Array<ForwardLoadBalancer>;
    /**
      * 负载均衡器校验策略，取值包括 ALL 和 DIFF，默认取值为 ALL。
<br><li> ALL，所有负载均衡器都合法则通过校验，否则校验报错。
<br><li> DIFF，仅校验负载均衡器参数中实际变化的部分，如果合法则通过校验，否则校验报错。
      */
    LoadBalancersCheckPolicy?: string;
}
/**
 * RemoveInstances返回参数结构体
 */
export interface RemoveInstancesResponse {
    /**
      * 伸缩活动ID
      */
    ActivityId?: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ModifyScalingPolicy返回参数结构体
 */
export interface ModifyScalingPolicyResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * SetInstancesProtection请求参数结构体
 */
export interface SetInstancesProtectionRequest {
    /**
      * 伸缩组ID。
      */
    AutoScalingGroupId: string;
    /**
      * 实例ID。
      */
    InstanceIds: Array<string>;
    /**
      * 实例是否需要移出保护。
      */
    ProtectedFromScaleIn: boolean;
}
/**
 * DeleteNotificationConfiguration返回参数结构体
 */
export interface DeleteNotificationConfigurationResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DetachInstances返回参数结构体
 */
export interface DetachInstancesResponse {
    /**
      * 伸缩活动ID
      */
    ActivityId?: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CreateLaunchConfiguration请求参数结构体
 */
export interface CreateLaunchConfigurationRequest {
    /**
      * 启动配置显示名称。名称仅支持中文、英文、数字、下划线、分隔符"-"、小数点，最大长度不能超60个字节。
      */
    LaunchConfigurationName: string;
    /**
      * 指定有效的[镜像](https://cloud.tencent.com/document/product/213/4940)ID，格式形如`img-8toqc6s3`。镜像类型分为四种：<br/><li>公共镜像</li><li>自定义镜像</li><li>共享镜像</li><li>服务市场镜像</li><br/>可通过以下方式获取可用的镜像ID：<br/><li>`公共镜像`、`自定义镜像`、`共享镜像`的镜像ID可通过登录[控制台](https://console.cloud.tencent.com/cvm/image?rid=1&imageType=PUBLIC_IMAGE)查询；`服务镜像市场`的镜像ID可通过[云市场](https://market.cloud.tencent.com/list)查询。</li><li>通过调用接口 [DescribeImages](https://cloud.tencent.com/document/api/213/15715) ，取返回信息中的`ImageId`字段。</li>
      */
    ImageId: string;
    /**
      * 启动配置所属项目ID。该参数可以通过调用 [DescribeProject](https://cloud.tencent.com/document/api/378/4400) 的返回值中的`projectId`字段来获取。不填为默认项目。
注意：伸缩组内实例所属项目ID取伸缩组项目ID，与这里取值无关。
      */
    ProjectId?: number;
    /**
      * 实例机型。不同实例机型指定了不同的资源规格，具体取值可通过调用接口 [DescribeInstanceTypeConfigs](https://cloud.tencent.com/document/api/213/15749) 来获得最新的规格表或参见[实例类型](https://cloud.tencent.com/document/product/213/11518)描述。
`InstanceType`和`InstanceTypes`参数互斥，二者必填一个且只能填写一个。
      */
    InstanceType?: string;
    /**
      * 实例系统盘配置信息。若不指定该参数，则按照系统默认值进行分配。
      */
    SystemDisk?: SystemDisk;
    /**
      * 实例数据盘配置信息。若不指定该参数，则默认不购买数据盘，最多支持指定11块数据盘。
      */
    DataDisks?: Array<DataDisk>;
    /**
      * 公网带宽相关信息设置。若不指定该参数，则默认公网带宽为0Mbps。
      */
    InternetAccessible?: InternetAccessible;
    /**
      * 实例登录设置。通过该参数可以设置实例的登录方式密码、密钥或保持镜像的原始登录设置。默认情况下会随机生成密码，并以站内信方式知会到用户。
      */
    LoginSettings?: LoginSettings;
    /**
      * 实例所属安全组。该参数可以通过调用 [DescribeSecurityGroups](https://cloud.tencent.com/document/api/215/15808) 的返回值中的`SecurityGroupId`字段来获取。若不指定该参数，则默认不绑定安全组。
      */
    SecurityGroupIds?: Array<string>;
    /**
      * 增强服务。通过该参数可以指定是否开启云安全、云监控等服务。若不指定该参数，则默认开启云监控、云安全服务。
      */
    EnhancedService?: EnhancedService;
    /**
      * 经过 Base64 编码后的自定义数据，最大长度不超过16KB。
      */
    UserData?: string;
    /**
      * 实例计费类型，CVM默认值按照POSTPAID_BY_HOUR处理。
<br><li>POSTPAID_BY_HOUR：按小时后付费
<br><li>SPOTPAID：竞价付费
<br><li>PREPAID：预付费，即包年包月
      */
    InstanceChargeType?: string;
    /**
      * 实例的市场相关选项，如竞价实例相关参数，若指定实例的付费模式为竞价付费则该参数必传。
      */
    InstanceMarketOptions?: InstanceMarketOptionsRequest;
    /**
      * 实例机型列表，不同实例机型指定了不同的资源规格，最多支持10种实例机型。
`InstanceType`和`InstanceTypes`参数互斥，二者必填一个且只能填写一个。
      */
    InstanceTypes?: Array<string>;
    /**
      * 实例类型校验策略，取值包括 ALL 和 ANY，默认取值为ANY。
<br><li> ALL，所有实例类型（InstanceType）都可用则通过校验，否则校验报错。
<br><li> ANY，存在任何一个实例类型（InstanceType）可用则通过校验，否则校验报错。

实例类型不可用的常见原因包括该实例类型售罄、对应云盘售罄等。
如果 InstanceTypes 中一款机型不存在或者已下线，则无论 InstanceTypesCheckPolicy 采用何种取值，都会校验报错。
      */
    InstanceTypesCheckPolicy?: string;
    /**
      * 标签列表。通过指定该参数，可以为扩容的实例绑定标签。最多支持指定10个标签。
      */
    InstanceTags?: Array<InstanceTag>;
    /**
      * CAM角色名称。可通过DescribeRoleList接口返回值中的roleName获取。
      */
    CamRoleName?: string;
    /**
      * 云服务器主机名（HostName）的相关设置。
      */
    HostNameSettings?: HostNameSettings;
    /**
      * 云服务器实例名（InstanceName）的相关设置。
      */
    InstanceNameSettings?: InstanceNameSettings;
    /**
      * 预付费模式，即包年包月相关参数设置。通过该参数可以指定包年包月实例的购买时长、是否设置自动续费等属性。若指定实例的付费模式为预付费则该参数必传。
      */
    InstanceChargePrepaid?: InstanceChargePrepaid;
}
/**
 * 伸缩组
 */
export interface AutoScalingGroup {
    /**
      * 伸缩组ID
      */
    AutoScalingGroupId: string;
    /**
      * 伸缩组名称
      */
    AutoScalingGroupName: string;
    /**
      * 伸缩组当前状态。取值范围：<br><li>NORMAL：正常<br><li>CVM_ABNORMAL：启动配置异常<br><li>LB_ABNORMAL：负载均衡器异常<br><li>VPC_ABNORMAL：VPC网络异常<br><li>INSUFFICIENT_BALANCE：余额不足<br><li>LB_BACKEND_REGION_NOT_MATCH：CLB实例后端地域与AS服务所在地域不匹配<br>
      */
    AutoScalingGroupStatus: string;
    /**
      * 创建时间，采用UTC标准计时
      */
    CreatedTime: string;
    /**
      * 默认冷却时间，单位秒
      */
    DefaultCooldown: number;
    /**
      * 期望实例数
      */
    DesiredCapacity: number;
    /**
      * 启用状态，取值包括`ENABLED`和`DISABLED`
      */
    EnabledStatus: string;
    /**
      * 应用型负载均衡器列表
      */
    ForwardLoadBalancerSet: Array<ForwardLoadBalancer>;
    /**
      * 实例数量
      */
    InstanceCount: number;
    /**
      * 状态为`IN_SERVICE`实例的数量
      */
    InServiceInstanceCount: number;
    /**
      * 启动配置ID
      */
    LaunchConfigurationId: string;
    /**
      * 启动配置名称
      */
    LaunchConfigurationName: string;
    /**
      * 传统型负载均衡器ID列表
      */
    LoadBalancerIdSet: Array<string>;
    /**
      * 最大实例数
      */
    MaxSize: number;
    /**
      * 最小实例数
      */
    MinSize: number;
    /**
      * 项目ID
      */
    ProjectId: number;
    /**
      * 子网ID列表
      */
    SubnetIdSet: Array<string>;
    /**
      * 销毁策略
      */
    TerminationPolicySet: Array<string>;
    /**
      * VPC标识
      */
    VpcId: string;
    /**
      * 可用区列表
      */
    ZoneSet: Array<string>;
    /**
      * 重试策略
      */
    RetryPolicy: string;
    /**
      * 伸缩组是否处于伸缩活动中，`IN_ACTIVITY`表示处于伸缩活动中，`NOT_IN_ACTIVITY`表示不处于伸缩活动中。
      */
    InActivityStatus: string;
    /**
      * 伸缩组标签列表
      */
    Tags: Array<Tag>;
    /**
      * 服务设置
      */
    ServiceSettings: ServiceSettings;
    /**
      * 实例具有IPv6地址数量的配置
      */
    Ipv6AddressCount: number;
    /**
      * 多可用区/子网策略。
<br><li> PRIORITY，按照可用区/子网列表的顺序，作为优先级来尝试创建实例，如果优先级最高的可用区/子网可以创建成功，则总在该可用区/子网创建。
<br><li> EQUALITY：每次选择当前实例数最少的可用区/子网进行扩容，使得每个可用区/子网都有机会发生扩容，多次扩容出的实例会打散到多个可用区/子网。
      */
    MultiZoneSubnetPolicy: string;
}
/**
 * AttachInstances返回参数结构体
 */
export interface AttachInstancesResponse {
    /**
      * 伸缩活动ID
      */
    ActivityId?: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeAutoScalingGroupLastActivities返回参数结构体
 */
export interface DescribeAutoScalingGroupLastActivitiesResponse {
    /**
      * 符合条件的伸缩活动信息集合。说明：伸缩组伸缩活动不存在的则不返回，如传50个伸缩组ID，返回45条数据，说明其中有5个伸缩组伸缩活动不存在。
      */
    ActivitySet?: Array<Activity>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeAccountLimits请求参数结构体
 */
export declare type DescribeAccountLimitsRequest = null;
/**
 * UpgradeLifecycleHook请求参数结构体
 */
export interface UpgradeLifecycleHookRequest {
    /**
      * 生命周期挂钩ID
      */
    LifecycleHookId: string;
    /**
      * 生命周期挂钩名称
      */
    LifecycleHookName: string;
    /**
      * 进行生命周期挂钩的场景，取值范围包括“INSTANCE_LAUNCHING”和“INSTANCE_TERMINATING”
      */
    LifecycleTransition: string;
    /**
      * 定义伸缩组在生命周期挂钩超时的情况下应采取的操作，取值范围是“CONTINUE”或“ABANDON”，默认值为“CONTINUE”
      */
    DefaultResult?: string;
    /**
      * 生命周期挂钩超时之前可以经过的最长时间（以秒为单位），范围从30到3600秒，默认值为300秒
      */
    HeartbeatTimeout?: number;
    /**
      * 弹性伸缩向通知目标发送的附加信息，默认值为空字符串""
      */
    NotificationMetadata?: string;
    /**
      * 通知目标
      */
    NotificationTarget?: NotificationTarget;
    /**
      * 进行生命周期挂钩的场景类型，取值范围包括NORMAL 和 EXTENSION。说明：设置为EXTENSION值，在AttachInstances、DetachInstances、RemoveInstaces接口时会触发生命周期挂钩操作，值为NORMAL则不会在这些接口中触发生命周期挂钩。
      */
    LifecycleTransitionType?: string;
}
/**
 * 告警触发策略。
 */
export interface ScalingPolicy {
    /**
      * 伸缩组ID。
      */
    AutoScalingGroupId: string;
    /**
      * 告警触发策略ID。
      */
    AutoScalingPolicyId: string;
    /**
      * 告警触发策略名称。
      */
    ScalingPolicyName: string;
    /**
      * 告警触发后，期望实例数修改方式。取值 ：<br><li>CHANGE_IN_CAPACITY：增加或减少若干期望实例数</li><li>EXACT_CAPACITY：调整至指定期望实例数</li> <li>PERCENT_CHANGE_IN_CAPACITY：按百分比调整期望实例数</li>
      */
    AdjustmentType: string;
    /**
      * 告警触发后，期望实例数的调整值。
      */
    AdjustmentValue: number;
    /**
      * 冷却时间。
      */
    Cooldown: number;
    /**
      * 告警监控指标。
      */
    MetricAlarm: MetricAlarm;
    /**
      * 通知组ID，即为用户组ID集合。
      */
    NotificationUserGroupIds: Array<string>;
}
/**
 * DescribeAutoScalingGroupLastActivities请求参数结构体
 */
export interface DescribeAutoScalingGroupLastActivitiesRequest {
    /**
      * 伸缩组ID列表
      */
    AutoScalingGroupIds: Array<string>;
}
/**
 * 云服务器主机名（HostName）的相关设置
 */
export interface HostNameSettings {
    /**
      * 云服务器的主机名。
<br><li> 点号（.）和短横线（-）不能作为 HostName 的首尾字符，不能连续使用。
<br><li> 不支持 Windows 实例。
<br><li> 其他类型（Linux 等）实例：字符长度为[2, 40]，允许支持多个点号，点之间为一段，每段允许字母（不限制大小写）、数字和短横线（-）组成。
注意：此字段可能返回 null，表示取不到有效值。
      */
    HostName: string;
    /**
      * 云服务器主机名的风格，取值范围包括 ORIGINAL 和  UNIQUE，默认为 ORIGINAL。
<br><li> ORIGINAL，AS 直接将入参中所填的 HostName 传递给 CVM，CVM 可能会对 HostName 追加序列号，伸缩组中实例的 HostName 会出现冲突的情况。
<br><li> UNIQUE，入参所填的 HostName 相当于主机名前缀，AS 和 CVM 会对其进行拓展，伸缩组中实例的 HostName 可以保证唯一。
注意：此字段可能返回 null，表示取不到有效值。
      */
    HostNameStyle?: string;
}
/**
 * ModifyLoadBalancers返回参数结构体
 */
export interface ModifyLoadBalancersResponse {
    /**
      * 伸缩活动ID
      */
    ActivityId?: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribePaiInstances请求参数结构体
 */
export interface DescribePaiInstancesRequest {
    /**
      * 依据PAI实例的实例ID进行查询。
      */
    InstanceIds?: Array<string>;
    /**
      * 过滤条件。
      */
    Filters?: Array<Filter>;
    /**
      * 返回数量，默认为20，最大值为100。
      */
    Limit?: number;
    /**
      * 偏移量，默认为0。
      */
    Offset?: number;
}
/**
 * CreateNotificationConfiguration请求参数结构体
 */
export interface CreateNotificationConfigurationRequest {
    /**
      * 伸缩组ID。
      */
    AutoScalingGroupId: string;
    /**
      * 通知类型，即为需要订阅的通知类型集合，取值范围如下：
<li>SCALE_OUT_SUCCESSFUL：扩容成功</li>
<li>SCALE_OUT_FAILED：扩容失败</li>
<li>SCALE_IN_SUCCESSFUL：缩容成功</li>
<li>SCALE_IN_FAILED：缩容失败</li>
<li>REPLACE_UNHEALTHY_INSTANCE_SUCCESSFUL：替换不健康子机成功</li>
<li>REPLACE_UNHEALTHY_INSTANCE_FAILED：替换不健康子机失败</li>
      */
    NotificationTypes: Array<string>;
    /**
      * 通知组ID，即为用户组ID集合，用户组ID可以通过[ListGroups](https://cloud.tencent.com/document/product/598/34589)查询。
      */
    NotificationUserGroupIds: Array<string>;
}
/**
 * DescribeScheduledActions返回参数结构体
 */
export interface DescribeScheduledActionsResponse {
    /**
      * 符合条件的定时任务数量。
      */
    TotalCount?: number;
    /**
      * 定时任务详细信息列表。
      */
    ScheduledActionSet?: Array<ScheduledAction>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ModifyNotificationConfiguration请求参数结构体
 */
export interface ModifyNotificationConfigurationRequest {
    /**
      * 待修改的通知ID。
      */
    AutoScalingNotificationId: string;
    /**
      * 通知类型，即为需要订阅的通知类型集合，取值范围如下：
<li>SCALE_OUT_SUCCESSFUL：扩容成功</li>
<li>SCALE_OUT_FAILED：扩容失败</li>
<li>SCALE_IN_SUCCESSFUL：缩容成功</li>
<li>SCALE_IN_FAILED：缩容失败</li>
<li>REPLACE_UNHEALTHY_INSTANCE_SUCCESSFUL：替换不健康子机成功</li>
<li>REPLACE_UNHEALTHY_INSTANCE_FAILED：替换不健康子机失败</li>
      */
    NotificationTypes?: Array<string>;
    /**
      * 通知组ID，即为用户组ID集合，用户组ID可以通过[ListGroups](https://cloud.tencent.com/document/product/598/34589)查询。
      */
    NotificationUserGroupIds?: Array<string>;
}
/**
 * DeleteLifecycleHook请求参数结构体
 */
export interface DeleteLifecycleHookRequest {
    /**
      * 生命周期挂钩ID
      */
    LifecycleHookId: string;
}
/**
 * ModifyAutoScalingGroup返回参数结构体
 */
export interface ModifyAutoScalingGroupResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DeleteLaunchConfiguration请求参数结构体
 */
export interface DeleteLaunchConfigurationRequest {
    /**
      * 需要删除的启动配置ID。
      */
    LaunchConfigurationId: string;
}
/**
 * ModifyScalingPolicy请求参数结构体
 */
export interface ModifyScalingPolicyRequest {
    /**
      * 告警策略ID。
      */
    AutoScalingPolicyId: string;
    /**
      * 告警策略名称。
      */
    ScalingPolicyName?: string;
    /**
      * 告警触发后，期望实例数修改方式。取值 ：<br><li>CHANGE_IN_CAPACITY：增加或减少若干期望实例数</li><li>EXACT_CAPACITY：调整至指定期望实例数</li> <li>PERCENT_CHANGE_IN_CAPACITY：按百分比调整期望实例数</li>
      */
    AdjustmentType?: string;
    /**
      * 告警触发后，期望实例数的调整值。取值：<br><li>当 AdjustmentType 为 CHANGE_IN_CAPACITY 时，AdjustmentValue 为正数表示告警触发后增加实例，为负数表示告警触发后减少实例 </li> <li> 当 AdjustmentType 为 EXACT_CAPACITY 时，AdjustmentValue 的值即为告警触发后新的期望实例数，需要大于或等于0 </li> <li> 当 AdjustmentType 为 PERCENT_CHANGE_IN_CAPACITY 时，AdjusmentValue 为正数表示告警触发后按百分比增加实例，为负数表示告警触发后按百分比减少实例，单位是：%。
      */
    AdjustmentValue?: number;
    /**
      * 冷却时间，单位为秒。
      */
    Cooldown?: number;
    /**
      * 告警监控指标。
      */
    MetricAlarm?: MetricAlarm;
    /**
      * 通知组ID，即为用户组ID集合，用户组ID可以通过[ListGroups](https://cloud.tencent.com/document/product/598/34589)查询。
如果需要清空通知用户组，需要在列表中传入特定字符串 "NULL"。
      */
    NotificationUserGroupIds?: Array<string>;
}
/**
 * CVM竞价请求相关选项
 */
export interface InstanceMarketOptionsRequest {
    /**
      * 竞价相关选项
      */
    SpotOptions: SpotMarketOptions;
    /**
      * 市场选项类型，当前只支持取值：spot
注意：此字段可能返回 null，表示取不到有效值。
      */
    MarketType?: string;
}
/**
 * UpgradeLifecycleHook返回参数结构体
 */
export interface UpgradeLifecycleHookResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 实例标签。通过指定该参数，可以为扩容的实例绑定标签。
 */
export interface InstanceTag {
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
 * PAI实例
 */
export interface PaiInstance {
    /**
      * 实例ID
      */
    InstanceId: string;
    /**
      * 实例域名
      */
    DomainName: string;
    /**
      * PAI管理页面URL
      */
    PaiMateUrl: string;
}
/**
 * CreateAutoScalingGroup请求参数结构体
 */
export interface CreateAutoScalingGroupRequest {
    /**
      * 伸缩组名称，在您账号中必须唯一。名称仅支持中文、英文、数字、下划线、分隔符"-"、小数点，最大长度不能超55个字节。
      */
    AutoScalingGroupName: string;
    /**
      * 启动配置ID
      */
    LaunchConfigurationId: string;
    /**
      * 最大实例数，取值范围为0-2000。
      */
    MaxSize: number;
    /**
      * 最小实例数，取值范围为0-2000。
      */
    MinSize: number;
    /**
      * VPC ID，基础网络则填空字符串
      */
    VpcId: string;
    /**
      * 默认冷却时间，单位秒，默认值为300
      */
    DefaultCooldown?: number;
    /**
      * 期望实例数，大小介于最小实例数和最大实例数之间
      */
    DesiredCapacity?: number;
    /**
      * 传统负载均衡器ID列表，目前长度上限为20，LoadBalancerIds 和 ForwardLoadBalancers 二者同时最多只能指定一个
      */
    LoadBalancerIds?: Array<string>;
    /**
      * 伸缩组内实例所属项目ID。该参数可以通过调用 [DescribeProject](https://cloud.tencent.com/document/api/378/4400) 的返回值中的`projectId`字段来获取。不填为默认项目。
      */
    ProjectId?: number;
    /**
      * 应用型负载均衡器列表，目前长度上限为20，LoadBalancerIds 和 ForwardLoadBalancers 二者同时最多只能指定一个
      */
    ForwardLoadBalancers?: Array<ForwardLoadBalancer>;
    /**
      * 子网ID列表，VPC场景下必须指定子网。多个子网以填写顺序为优先级，依次进行尝试，直至可以成功创建实例。
      */
    SubnetIds?: Array<string>;
    /**
      * 销毁策略，目前长度上限为1。取值包括 OLDEST_INSTANCE 和 NEWEST_INSTANCE，默认取值为 OLDEST_INSTANCE。
<br><li> OLDEST_INSTANCE 优先销毁伸缩组中最旧的实例。
<br><li> NEWEST_INSTANCE，优先销毁伸缩组中最新的实例。
      */
    TerminationPolicies?: Array<string>;
    /**
      * 可用区列表，基础网络场景下必须指定可用区。多个可用区以填写顺序为优先级，依次进行尝试，直至可以成功创建实例。
      */
    Zones?: Array<string>;
    /**
      * 重试策略，取值包括 IMMEDIATE_RETRY、 INCREMENTAL_INTERVALS、NO_RETRY，默认取值为 IMMEDIATE_RETRY。
<br><li> IMMEDIATE_RETRY，立即重试，在较短时间内快速重试，连续失败超过一定次数（5次）后不再重试。
<br><li> INCREMENTAL_INTERVALS，间隔递增重试，随着连续失败次数的增加，重试间隔逐渐增大，重试间隔从秒级到1天不等。
<br><li> NO_RETRY，不进行重试，直到再次收到用户调用或者告警信息后才会重试。
      */
    RetryPolicy?: string;
    /**
      * 可用区校验策略，取值包括 ALL 和 ANY，默认取值为ANY。
<br><li> ALL，所有可用区（Zone）或子网（SubnetId）都可用则通过校验，否则校验报错。
<br><li> ANY，存在任何一个可用区（Zone）或子网（SubnetId）可用则通过校验，否则校验报错。

可用区或子网不可用的常见原因包括该可用区CVM实例类型售罄、该可用区CBS云盘售罄、该可用区配额不足、该子网IP不足等。
如果 Zones/SubnetIds 中可用区或者子网不存在，则无论 ZonesCheckPolicy 采用何种取值，都会校验报错。
      */
    ZonesCheckPolicy?: string;
    /**
      * 标签描述列表。通过指定该参数可以支持绑定标签到伸缩组。同时绑定标签到相应的资源实例。每个伸缩组最多支持30个标签。
      */
    Tags?: Array<Tag>;
    /**
      * 服务设置，包括云监控不健康替换等服务设置。
      */
    ServiceSettings?: ServiceSettings;
    /**
      * 实例具有IPv6地址数量的配置，取值包括 0、1，默认值为0。
      */
    Ipv6AddressCount?: number;
    /**
      * 多可用区/子网策略，取值包括 PRIORITY 和 EQUALITY，默认为 PRIORITY。
<br><li> PRIORITY，按照可用区/子网列表的顺序，作为优先级来尝试创建实例，如果优先级最高的可用区/子网可以创建成功，则总在该可用区/子网创建。
<br><li> EQUALITY：每次选择当前实例数最少的可用区/子网进行扩容，使得每个可用区/子网都有机会发生扩容，多次扩容出的实例会打散到多个可用区/子网。

与本策略相关的注意点：
<br><li> 当伸缩组为基础网络时，本策略适用于多可用区；当伸缩组为VPC网络时，本策略适用于多子网，此时不再考虑可用区因素，例如四个子网ABCD，其中ABC处于可用区1，D处于可用区2，此时考虑子网ABCD进行排序，而不考虑可用区1、2。
<br><li> 本策略适用于多可用区/子网，不适用于启动配置的多机型。多机型按照优先级策略进行选择。
<br><li> 创建实例时，先保证多机型的策略，后保证多可用区/子网的策略。例如多机型A、B，多子网1、2、3（按照PRIORITY策略），会按照A1、A2、A3、B1、B2、B3 进行尝试，如果A1售罄，会尝试A2（而非B1）。
<br><li> 无论使用哪种策略，单次伸缩活动总是优先保持使用一种具体配置（机型 * 可用区/子网）。
      */
    MultiZoneSubnetPolicy?: string;
}
/**
 * DeleteScheduledAction返回参数结构体
 */
export interface DeleteScheduledActionResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * UpgradeLaunchConfiguration请求参数结构体
 */
export interface UpgradeLaunchConfigurationRequest {
    /**
      * 启动配置ID。
      */
    LaunchConfigurationId: string;
    /**
      * 指定有效的[镜像](https://cloud.tencent.com/document/product/213/4940)ID，格式形如`img-8toqc6s3`。镜像类型分为四种：<br/><li>公共镜像</li><li>自定义镜像</li><li>共享镜像</li><li>服务市场镜像</li><br/>可通过以下方式获取可用的镜像ID：<br/><li>`公共镜像`、`自定义镜像`、`共享镜像`的镜像ID可通过登录[控制台](https://console.cloud.tencent.com/cvm/image?rid=1&imageType=PUBLIC_IMAGE)查询；`服务镜像市场`的镜像ID可通过[云市场](https://market.cloud.tencent.com/list)查询。</li><li>通过调用接口 [DescribeImages](https://cloud.tencent.com/document/api/213/15715) ，取返回信息中的`ImageId`字段。</li>
      */
    ImageId: string;
    /**
      * 实例机型列表，不同实例机型指定了不同的资源规格，最多支持5种实例机型。
      */
    InstanceTypes: Array<string>;
    /**
      * 启动配置显示名称。名称仅支持中文、英文、数字、下划线、分隔符"-"、小数点，最大长度不能超60个字节。
      */
    LaunchConfigurationName: string;
    /**
      * 实例数据盘配置信息。若不指定该参数，则默认不购买数据盘，最多支持指定11块数据盘。
      */
    DataDisks?: Array<DataDisk>;
    /**
      * 增强服务。通过该参数可以指定是否开启云安全、云监控等服务。若不指定该参数，则默认开启云监控、云安全服务。
      */
    EnhancedService?: EnhancedService;
    /**
      * 实例计费类型，CVM默认值按照POSTPAID_BY_HOUR处理。
<br><li>POSTPAID_BY_HOUR：按小时后付费
<br><li>SPOTPAID：竞价付费
<br><li>PREPAID：预付费，即包年包月
      */
    InstanceChargeType?: string;
    /**
      * 实例的市场相关选项，如竞价实例相关参数，若指定实例的付费模式为竞价付费则该参数必传。
      */
    InstanceMarketOptions?: InstanceMarketOptionsRequest;
    /**
      * 实例类型校验策略，取值包括 ALL 和 ANY，默认取值为ANY。
<br><li> ALL，所有实例类型（InstanceType）都可用则通过校验，否则校验报错。
<br><li> ANY，存在任何一个实例类型（InstanceType）可用则通过校验，否则校验报错。

实例类型不可用的常见原因包括该实例类型售罄、对应云盘售罄等。
如果 InstanceTypes 中一款机型不存在或者已下线，则无论 InstanceTypesCheckPolicy 采用何种取值，都会校验报错。
      */
    InstanceTypesCheckPolicy?: string;
    /**
      * 公网带宽相关信息设置。若不指定该参数，则默认公网带宽为0Mbps。
      */
    InternetAccessible?: InternetAccessible;
    /**
      * 实例登录设置。通过该参数可以设置实例的登录方式密码、密钥或保持镜像的原始登录设置。默认情况下会随机生成密码，并以站内信方式知会到用户。
      */
    LoginSettings?: LoginSettings;
    /**
      * 实例所属项目ID。该参数可以通过调用 [DescribeProject](https://cloud.tencent.com/document/api/378/4400) 的返回值中的`projectId`字段来获取。不填为默认项目。
      */
    ProjectId?: number;
    /**
      * 实例所属安全组。该参数可以通过调用 [DescribeSecurityGroups](https://cloud.tencent.com/document/api/215/15808) 的返回值中的`SecurityGroupId`字段来获取。若不指定该参数，则默认不绑定安全组。
      */
    SecurityGroupIds?: Array<string>;
    /**
      * 实例系统盘配置信息。若不指定该参数，则按照系统默认值进行分配。
      */
    SystemDisk?: SystemDisk;
    /**
      * 经过 Base64 编码后的自定义数据，最大长度不超过16KB。
      */
    UserData?: string;
    /**
      * 标签列表。通过指定该参数，可以为扩容的实例绑定标签。最多支持指定10个标签。
      */
    InstanceTags?: Array<InstanceTag>;
    /**
      * CAM角色名称。可通过DescribeRoleList接口返回值中的roleName获取。
      */
    CamRoleName?: string;
    /**
      * 云服务器主机名（HostName）的相关设置。
      */
    HostNameSettings?: HostNameSettings;
    /**
      * 云服务器实例名（InstanceName）的相关设置。
      */
    InstanceNameSettings?: InstanceNameSettings;
    /**
      * 预付费模式，即包年包月相关参数设置。通过该参数可以指定包年包月实例的购买时长、是否设置自动续费等属性。若指定实例的付费模式为预付费则该参数必传。
      */
    InstanceChargePrepaid?: InstanceChargePrepaid;
}
/**
 * DescribeAutoScalingActivities返回参数结构体
 */
export interface DescribeAutoScalingActivitiesResponse {
    /**
      * 符合条件的伸缩活动数量。
      */
    TotalCount?: number;
    /**
      * 符合条件的伸缩活动信息集合。
      */
    ActivitySet?: Array<Activity>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeNotificationConfigurations返回参数结构体
 */
export interface DescribeNotificationConfigurationsResponse {
    /**
      * 符合条件的通知数量。
      */
    TotalCount?: number;
    /**
      * 弹性伸缩事件通知详细信息列表。
      */
    AutoScalingNotificationSet?: Array<AutoScalingNotification>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 启动配置的数据盘配置信息。若不指定该参数，则默认不购买数据盘，当前仅支持购买的时候指定一个数据盘。
 */
export interface DataDisk {
    /**
      * 数据盘类型。数据盘类型限制详见[CVM实例配置](https://cloud.tencent.com/document/product/213/2177)。取值范围：<br><li>LOCAL_BASIC：本地硬盘<br><li>LOCAL_SSD：本地SSD硬盘<br><li>CLOUD_BASIC：普通云硬盘<br><li>CLOUD_PREMIUM：高性能云硬盘<br><li>CLOUD_SSD：SSD云硬盘<br><br>默认取值：LOCAL_BASIC。
注意：此字段可能返回 null，表示取不到有效值。
      */
    DiskType?: string;
    /**
      * 数据盘大小，单位：GB。最小调整步长为10G，不同数据盘类型取值范围不同，具体限制详见：[CVM实例配置](https://cloud.tencent.com/document/product/213/2177)。默认值为0，表示不购买数据盘。更多限制详见产品文档。
注意：此字段可能返回 null，表示取不到有效值。
      */
    DiskSize?: number;
    /**
      * 数据盘快照 ID，类似 `snap-l8psqwnt`。
注意：此字段可能返回 null，表示取不到有效值。
      */
    SnapshotId?: string;
}
/**
 * PreviewPaiDomainName请求参数结构体
 */
export interface PreviewPaiDomainNameRequest {
    /**
      * 域名类型
      */
    DomainNameType?: string;
}
/**
 * DeleteScalingPolicy请求参数结构体
 */
export interface DeleteScalingPolicyRequest {
    /**
      * 待删除的告警策略ID。
      */
    AutoScalingPolicyId: string;
}
/**
 * 描述了实例登录相关配置与信息。
 */
export interface LoginSettings {
    /**
      * 实例登录密码。不同操作系统类型密码复杂度限制不一样，具体如下：<br><li>Linux实例密码必须8到16位，至少包括两项[a-z，A-Z]、[0-9] 和 [( ) ` ~ ! @ # $ % ^ & * - + = | { } [ ] : ; ' , . ? / ]中的特殊符号。<br><li>Windows实例密码必须12到16位，至少包括三项[a-z]，[A-Z]，[0-9] 和 [( ) ` ~ ! @ # $ % ^ & * - + = { } [ ] : ; ' , . ? /]中的特殊符号。<br><br>若不指定该参数，则由系统随机生成密码，并通过站内信方式通知到用户。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Password?: string;
    /**
      * 密钥ID列表。关联密钥后，就可以通过对应的私钥来访问实例；KeyId可通过接口DescribeKeyPairs获取，密钥与密码不能同时指定，同时Windows操作系统不支持指定密钥。当前仅支持购买的时候指定一个密钥。
      */
    KeyIds?: Array<string>;
    /**
      * 保持镜像的原始设置。该参数与Password或KeyIds.N不能同时指定。只有使用自定义镜像、共享镜像或外部导入镜像创建实例时才能指定该参数为TRUE。取值范围：<br><li>TRUE：表示保持镜像的登录设置<br><li>FALSE：表示不保持镜像的登录设置<br><br>默认取值：FALSE。
注意：此字段可能返回 null，表示取不到有效值。
      */
    KeepImageLogin?: boolean;
}
/**
 * CreateAutoScalingGroupFromInstance返回参数结构体
 */
export interface CreateAutoScalingGroupFromInstanceResponse {
    /**
      * 伸缩组ID
      */
    AutoScalingGroupId?: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DetachInstances请求参数结构体
 */
export interface DetachInstancesRequest {
    /**
      * 伸缩组ID
      */
    AutoScalingGroupId: string;
    /**
      * CVM实例ID列表
      */
    InstanceIds: Array<string>;
}
/**
 * 实例信息
 */
export interface Instance {
    /**
      * 实例ID
      */
    InstanceId: string;
    /**
      * 伸缩组ID
      */
    AutoScalingGroupId: string;
    /**
      * 启动配置ID
      */
    LaunchConfigurationId: string;
    /**
      * 启动配置名称
      */
    LaunchConfigurationName: string;
    /**
      * 生命周期状态，取值如下：<br>
<li>IN_SERVICE：运行中
<li>CREATING：创建中
<li>CREATION_FAILED：创建失败
<li>TERMINATING：中止中
<li>TERMINATION_FAILED：中止失败
<li>ATTACHING：绑定中
<li>DETACHING：解绑中
<li>ATTACHING_LB：绑定LB中<li>DETACHING_LB：解绑LB中
<li>STARTING：开机中
<li>START_FAILED：开机失败
<li>STOPPING：关机中
<li>STOP_FAILED：关机失败
<li>STOPPED：已关机
      */
    LifeCycleState: string;
    /**
      * 健康状态，取值包括HEALTHY和UNHEALTHY
      */
    HealthStatus: string;
    /**
      * 是否加入缩容保护
      */
    ProtectedFromScaleIn: boolean;
    /**
      * 可用区
      */
    Zone: string;
    /**
      * 创建类型，取值包括AUTO_CREATION, MANUAL_ATTACHING。
      */
    CreationType: string;
    /**
      * 实例加入时间
      */
    AddTime: string;
    /**
      * 实例类型
      */
    InstanceType: string;
    /**
      * 版本号
      */
    VersionNumber: number;
    /**
      * 伸缩组名称
      */
    AutoScalingGroupName: string;
}
/**
 * CreateScheduledAction请求参数结构体
 */
export interface CreateScheduledActionRequest {
    /**
      * 伸缩组ID
      */
    AutoScalingGroupId: string;
    /**
      * 定时任务名称。名称仅支持中文、英文、数字、下划线、分隔符"-"、小数点，最大长度不能超60个字节。同一伸缩组下必须唯一。
      */
    ScheduledActionName: string;
    /**
      * 当定时任务触发时，设置的伸缩组最大实例数。
      */
    MaxSize: number;
    /**
      * 当定时任务触发时，设置的伸缩组最小实例数。
      */
    MinSize: number;
    /**
      * 当定时任务触发时，设置的伸缩组期望实例数。
      */
    DesiredCapacity: number;
    /**
      * 定时任务的首次触发时间，取值为`北京时间`（UTC+8），按照`ISO8601`标准，格式：`YYYY-MM-DDThh:mm:ss+08:00`。
      */
    StartTime: string;
    /**
      * 定时任务的结束时间，取值为`北京时间`（UTC+8），按照`ISO8601`标准，格式：`YYYY-MM-DDThh:mm:ss+08:00`。<br><br>此参数与`Recurrence`需要同时指定，到达结束时间之后，定时任务将不再生效。
      */
    EndTime?: string;
    /**
      * 定时任务的重复方式。为标准 Cron 格式<br><br>此参数与`EndTime`需要同时指定。
      */
    Recurrence?: string;
}
/**
 * 描述了实例的增强服务启用情况与其设置，如云安全，云监控等实例 Agent。
 */
export interface EnhancedService {
    /**
      * 开启云安全服务。若不指定该参数，则默认开启云安全服务。
      */
    SecurityService?: RunSecurityServiceEnabled;
    /**
      * 开启云监控服务。若不指定该参数，则默认开启云监控服务。
      */
    MonitorService?: RunMonitorServiceEnabled;
}
/**
 * DeleteLaunchConfiguration返回参数结构体
 */
export interface DeleteLaunchConfigurationResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeScheduledActions请求参数结构体
 */
export interface DescribeScheduledActionsRequest {
    /**
      * 按照一个或者多个定时任务ID查询。实例ID形如：asst-am691zxo。每次请求的实例的上限为100。参数不支持同时指定ScheduledActionIds和Filters。
      */
    ScheduledActionIds?: Array<string>;
    /**
      * 过滤条件。
<li> scheduled-action-id - String - 是否必填：否 -（过滤条件）按照定时任务ID过滤。</li>
<li> scheduled-action-name - String - 是否必填：否 - （过滤条件） 按照定时任务名称过滤。</li>
<li> auto-scaling-group-id - String - 是否必填：否 - （过滤条件） 按照伸缩组ID过滤。</li>
      */
    Filters?: Array<Filter>;
    /**
      * 偏移量，默认为0。关于Offset的更进一步介绍请参考 API [简介](https://cloud.tencent.com/document/api/213/15688)中的相关小节。
      */
    Offset?: number;
    /**
      * 返回数量，默认为20，最大值为100。关于Limit的更进一步介绍请参考 API [简介](https://cloud.tencent.com/document/api/213/15688)中的相关小节。
      */
    Limit?: number;
}
/**
 * 描述了 “云安全” 服务相关的信息
 */
export interface RunSecurityServiceEnabled {
    /**
      * 是否开启[云安全](https://cloud.tencent.com/document/product/296)服务。取值范围：<br><li>TRUE：表示开启云安全服务<br><li>FALSE：表示不开启云安全服务<br><br>默认取值：TRUE。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Enabled?: boolean;
}
/**
 * DeleteScheduledAction请求参数结构体
 */
export interface DeleteScheduledActionRequest {
    /**
      * 待删除的定时任务ID。
      */
    ScheduledActionId: string;
}
/**
 * DescribeAutoScalingActivities请求参数结构体
 */
export interface DescribeAutoScalingActivitiesRequest {
    /**
      * 按照一个或者多个伸缩活动ID查询。伸缩活动ID形如：`asa-5l2ejpfo`。每次请求的上限为100。参数不支持同时指定`ActivityIds`和`Filters`。
      */
    ActivityIds?: Array<string>;
    /**
      * 过滤条件。
<li> auto-scaling-group-id - String - 是否必填：否 -（过滤条件）按照伸缩组ID过滤。</li>
<li> activity-status-code - String - 是否必填：否 -（过滤条件）按照伸缩活动状态过滤。（INIT：初始化中|RUNNING：运行中|SUCCESSFUL：活动成功|PARTIALLY_SUCCESSFUL：活动部分成功|FAILED：活动失败|CANCELLED：活动取消）</li>
<li> activity-type - String - 是否必填：否 -（过滤条件）按照伸缩活动类型过滤。（SCALE_OUT：扩容活动|SCALE_IN：缩容活动|ATTACH_INSTANCES：添加实例|REMOVE_INSTANCES：销毁实例|DETACH_INSTANCES：移出实例|TERMINATE_INSTANCES_UNEXPECTEDLY：实例在CVM控制台被销毁|REPLACE_UNHEALTHY_INSTANCE：替换不健康实例|UPDATE_LOAD_BALANCERS：更新负载均衡器）</li>
<li> activity-id - String - 是否必填：否 -（过滤条件）按照伸缩活动ID过滤。</li>
每次请求的`Filters`的上限为10，`Filter.Values`的上限为5。参数不支持同时指定`ActivityIds`和`Filters`。
      */
    Filters?: Array<Filter>;
    /**
      * 返回数量，默认为20，最大值为100。关于`Limit`的更进一步介绍请参考 API [简介](https://cloud.tencent.com/document/api/213/15688)中的相关小节。
      */
    Limit?: number;
    /**
      * 偏移量，默认为0。关于`Offset`的更进一步介绍请参考 API [简介](https://cloud.tencent.com/document/api/213/15688)中的相关小节。
      */
    Offset?: number;
    /**
      * 伸缩活动最早的开始时间，如果指定了ActivityIds，此参数将被忽略。取值为`UTC`时间，按照`ISO8601`标准，格式：`YYYY-MM-DDThh:mm:ssZ`。
      */
    StartTime?: string;
    /**
      * 伸缩活动最晚的结束时间，如果指定了ActivityIds，此参数将被忽略。取值为`UTC`时间，按照`ISO8601`标准，格式：`YYYY-MM-DDThh:mm:ssZ`。
      */
    EndTime?: string;
}
/**
 * ModifyDesiredCapacity请求参数结构体
 */
export interface ModifyDesiredCapacityRequest {
    /**
      * 伸缩组ID
      */
    AutoScalingGroupId: string;
    /**
      * 期望实例数
      */
    DesiredCapacity: number;
}
/**
 * CreateScheduledAction返回参数结构体
 */
export interface CreateScheduledActionResponse {
    /**
      * 定时任务ID
      */
    ScheduledActionId?: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CreateLifecycleHook请求参数结构体
 */
export interface CreateLifecycleHookRequest {
    /**
      * 伸缩组ID
      */
    AutoScalingGroupId: string;
    /**
      * 生命周期挂钩名称。名称仅支持中文、英文、数字、下划线（_）、短横线（-）、小数点（.），最大长度不能超128个字节。
      */
    LifecycleHookName: string;
    /**
      * 进行生命周期挂钩的场景，取值范围包括 INSTANCE_LAUNCHING 和 INSTANCE_TERMINATING
      */
    LifecycleTransition: string;
    /**
      * 定义伸缩组在生命周期挂钩超时的情况下应采取的操作，取值范围是 CONTINUE 或 ABANDON，默认值为 CONTINUE
      */
    DefaultResult?: string;
    /**
      * 生命周期挂钩超时之前可以经过的最长时间（以秒为单位），范围从30到3600秒，默认值为300秒
      */
    HeartbeatTimeout?: number;
    /**
      * 弹性伸缩向通知目标发送的附加信息，默认值为空字符串""。最大长度不能超过1024个字节。
      */
    NotificationMetadata?: string;
    /**
      * 通知目标
      */
    NotificationTarget?: NotificationTarget;
    /**
      * 进行生命周期挂钩的场景类型，取值范围包括NORMAL 和 EXTENSION。说明：设置为EXTENSION值，在AttachInstances、DetachInstances、RemoveInstaces接口时会触发生命周期挂钩操作，值为NORMAL则不会在这些接口中触发生命周期挂钩。
      */
    LifecycleTransitionType?: string;
}
/**
 * 描述定时任务的信息
 */
export interface ScheduledAction {
    /**
      * 定时任务ID。
      */
    ScheduledActionId: string;
    /**
      * 定时任务名称。
      */
    ScheduledActionName: string;
    /**
      * 定时任务所在伸缩组ID。
      */
    AutoScalingGroupId: string;
    /**
      * 定时任务的开始时间。取值为`北京时间`（UTC+8），按照`ISO8601`标准，格式：`YYYY-MM-DDThh:mm:ss+08:00`。
      */
    StartTime: string;
    /**
      * 定时任务的重复方式。
      */
    Recurrence: string;
    /**
      * 定时任务的结束时间。取值为`北京时间`（UTC+8），按照`ISO8601`标准，格式：`YYYY-MM-DDThh:mm:ss+08:00`。
      */
    EndTime: string;
    /**
      * 定时任务设置的最大实例数。
      */
    MaxSize: number;
    /**
      * 定时任务设置的期望实例数。
      */
    DesiredCapacity: number;
    /**
      * 定时任务设置的最小实例数。
      */
    MinSize: number;
    /**
      * 定时任务的创建时间。取值为`UTC`时间，按照`ISO8601`标准，格式：`YYYY-MM-DDThh:mm:ssZ`。
      */
    CreatedTime: string;
}
/**
 * CompleteLifecycleAction返回参数结构体
 */
export interface CompleteLifecycleActionResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * >描述键值对过滤器，用于条件过滤查询。例如过滤ID、名称、状态等
> * 若存在多个`Filter`时，`Filter`间的关系为逻辑与（`AND`）关系。
> * 若同一个`Filter`存在多个`Values`，同一`Filter`下`Values`间的关系为逻辑或（`OR`）关系。
>
> 以[DescribeInstances](https://cloud.tencent.com/document/api/213/15728)接口的`Filter`为例。若我们需要查询可用区（`zone`）为广州一区 ***并且*** 实例计费模式（`instance-charge-type`）为包年包月 ***或者*** 按量计费的实例时，可如下实现：
```
Filters.0.Name=zone
&Filters.0.Values.0=ap-guangzhou-1
&Filters.1.Name=instance-charge-type
&Filters.1.Values.0=PREPAID
&Filters.1.Values.1=POSTPAID_BY_HOUR
```
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
 * DescribeLifecycleHooks请求参数结构体
 */
export interface DescribeLifecycleHooksRequest {
    /**
      * 按照一个或者多个生命周期挂钩ID查询。生命周期挂钩ID形如：`ash-8azjzxcl`。每次请求的上限为100。参数不支持同时指定`LifecycleHookIds`和`Filters`。
      */
    LifecycleHookIds?: Array<string>;
    /**
      * 过滤条件。
<li> lifecycle-hook-id - String - 是否必填：否 -（过滤条件）按照生命周期挂钩ID过滤。</li>
<li> lifecycle-hook-name - String - 是否必填：否 -（过滤条件）按照生命周期挂钩名称过滤。</li>
<li> auto-scaling-group-id - String - 是否必填：否 -（过滤条件）按照伸缩组ID过滤。</li>
过滤条件。
<li> lifecycle-hook-id - String - 是否必填：否 -（过滤条件）按照生命周期挂钩ID过滤。</li>
<li> lifecycle-hook-name - String - 是否必填：否 -（过滤条件）按照生命周期挂钩名称过滤。</li>
<li> auto-scaling-group-id - String - 是否必填：否 -（过滤条件）按照伸缩组ID过滤。</li>
每次请求的`Filters`的上限为10，`Filter.Values`的上限为5。参数不支持同时指定`LifecycleHookIds `和`Filters`。
      */
    Filters?: Array<Filter>;
    /**
      * 返回数量，默认为20，最大值为100。关于`Limit`的更进一步介绍请参考 API [简介](https://cloud.tencent.com/document/api/213/15688)中的相关小节。
      */
    Limit?: number;
    /**
      * 偏移量，默认为0。关于`Offset`的更进一步介绍请参考 API [简介](https://cloud.tencent.com/document/api/213/15688)中的相关小节。
      */
    Offset?: number;
}
/**
 * 服务设置
 */
export interface ServiceSettings {
    /**
      * 开启监控不健康替换服务。若开启则对于云监控标记为不健康的实例，弹性伸缩服务会进行替换。若不指定该参数，则默认为 False。
      */
    ReplaceMonitorUnhealthy?: boolean;
    /**
      * 取值范围：
CLASSIC_SCALING：经典方式，使用创建、销毁实例来实现扩缩容；
WAKE_UP_STOPPED_SCALING：扩容优先开机。扩容时优先对已关机的实例执行开机操作，若开机后实例数仍低于期望实例数，则创建实例，缩容仍采用销毁实例的方式。用户可以使用StopAutoScalingInstances接口来关闭伸缩组内的实例。监控告警触发的扩容仍将创建实例
默认取值：CLASSIC_SCALING
      */
    ScalingMode?: string;
}
/**
 * 符合条件的启动配置信息的集合。
 */
export interface LaunchConfiguration {
    /**
      * 实例所属项目ID。
      */
    ProjectId: number;
    /**
      * 启动配置ID。
      */
    LaunchConfigurationId: string;
    /**
      * 启动配置名称。
      */
    LaunchConfigurationName: string;
    /**
      * 实例机型。
      */
    InstanceType: string;
    /**
      * 实例系统盘配置信息。
      */
    SystemDisk: SystemDisk;
    /**
      * 实例数据盘配置信息。
      */
    DataDisks: Array<DataDisk>;
    /**
      * 实例登录设置。
      */
    LoginSettings: LimitedLoginSettings;
    /**
      * 公网带宽相关信息设置。
      */
    InternetAccessible: InternetAccessible;
    /**
      * 实例所属安全组。
      */
    SecurityGroupIds: Array<string>;
    /**
      * 启动配置关联的伸缩组。
      */
    AutoScalingGroupAbstractSet: Array<AutoScalingGroupAbstract>;
    /**
      * 自定义数据。
注意：此字段可能返回 null，表示取不到有效值。
      */
    UserData: string;
    /**
      * 启动配置创建时间。
      */
    CreatedTime: string;
    /**
      * 实例的增强服务启用情况与其设置。
      */
    EnhancedService: EnhancedService;
    /**
      * 镜像ID。
      */
    ImageId: string;
    /**
      * 启动配置当前状态。取值范围：<br><li>NORMAL：正常<br><li>IMAGE_ABNORMAL：启动配置镜像异常<br><li>CBS_SNAP_ABNORMAL：启动配置数据盘快照异常<br><li>SECURITY_GROUP_ABNORMAL：启动配置安全组异常<br>
      */
    LaunchConfigurationStatus: string;
    /**
      * 实例计费类型，CVM默认值按照POSTPAID_BY_HOUR处理。
<br><li>POSTPAID_BY_HOUR：按小时后付费
<br><li>SPOTPAID：竞价付费
      */
    InstanceChargeType: string;
    /**
      * 实例的市场相关选项，如竞价实例相关参数，若指定实例的付费模式为竞价付费则该参数必传。
注意：此字段可能返回 null，表示取不到有效值。
      */
    InstanceMarketOptions: InstanceMarketOptionsRequest;
    /**
      * 实例机型列表。
      */
    InstanceTypes: Array<string>;
    /**
      * 标签列表。
      */
    InstanceTags: Array<InstanceTag>;
    /**
      * 版本号。
      */
    VersionNumber: number;
    /**
      * 更新时间。
      */
    UpdatedTime: string;
    /**
      * CAM角色名称。可通过DescribeRoleList接口返回值中的roleName获取。
      */
    CamRoleName: string;
    /**
      * 上次操作时，InstanceTypesCheckPolicy 取值。
      */
    LastOperationInstanceTypesCheckPolicy: string;
    /**
      * 云服务器主机名（HostName）的相关设置。
      */
    HostNameSettings: HostNameSettings;
    /**
      * 云服务器实例名（InstanceName）的相关设置。
      */
    InstanceNameSettings: InstanceNameSettings;
    /**
      * 预付费模式，即包年包月相关参数设置。通过该参数可以指定包年包月实例的购买时长、是否设置自动续费等属性。若指定实例的付费模式为预付费则该参数必传。
      */
    InstanceChargePrepaid: InstanceChargePrepaid;
}
/**
 * 负载均衡器目标属性
 */
export interface TargetAttribute {
    /**
      * 端口
      */
    Port: number;
    /**
      * 权重
      */
    Weight: number;
}
/**
 * ModifyNotificationConfiguration返回参数结构体
 */
export interface ModifyNotificationConfigurationResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeAutoScalingInstances返回参数结构体
 */
export interface DescribeAutoScalingInstancesResponse {
    /**
      * 实例详细信息列表。
      */
    AutoScalingInstanceSet?: Array<Instance>;
    /**
      * 符合条件的实例数量。
      */
    TotalCount?: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeLifecycleHooks返回参数结构体
 */
export interface DescribeLifecycleHooksResponse {
    /**
      * 生命周期挂钩数组
      */
    LifecycleHookSet?: Array<LifecycleHook>;
    /**
      * 总体数量
      */
    TotalCount?: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CreateScalingPolicy请求参数结构体
 */
export interface CreateScalingPolicyRequest {
    /**
      * 伸缩组ID。
      */
    AutoScalingGroupId: string;
    /**
      * 告警触发策略名称。
      */
    ScalingPolicyName: string;
    /**
      * 告警触发后，期望实例数修改方式。取值 ：<br><li>CHANGE_IN_CAPACITY：增加或减少若干期望实例数</li><li>EXACT_CAPACITY：调整至指定期望实例数</li> <li>PERCENT_CHANGE_IN_CAPACITY：按百分比调整期望实例数</li>
      */
    AdjustmentType: string;
    /**
      * 告警触发后，期望实例数的调整值。取值：<br><li>当 AdjustmentType 为 CHANGE_IN_CAPACITY 时，AdjustmentValue 为正数表示告警触发后增加实例，为负数表示告警触发后减少实例 </li> <li> 当 AdjustmentType 为 EXACT_CAPACITY 时，AdjustmentValue 的值即为告警触发后新的期望实例数，需要大于或等于0 </li> <li> 当 AdjustmentType 为 PERCENT_CHANGE_IN_CAPACITY 时，AdjusmentValue 为正数表示告警触发后按百分比增加实例，为负数表示告警触发后按百分比减少实例，单位是：%。
      */
    AdjustmentValue: number;
    /**
      * 告警监控指标。
      */
    MetricAlarm: MetricAlarm;
    /**
      * 冷却时间，单位为秒。默认冷却时间300秒。
      */
    Cooldown?: number;
    /**
      * 通知组ID，即为用户组ID集合，用户组ID可以通过[ListGroups](https://cloud.tencent.com/document/product/598/34589)查询。
      */
    NotificationUserGroupIds?: Array<string>;
}
/**
 * DeleteNotificationConfiguration请求参数结构体
 */
export interface DeleteNotificationConfigurationRequest {
    /**
      * 待删除的通知ID。
      */
    AutoScalingNotificationId?: string;
}
/**
 * DescribeLaunchConfigurations请求参数结构体
 */
export interface DescribeLaunchConfigurationsRequest {
    /**
      * 按照一个或者多个启动配置ID查询。启动配置ID形如：`asc-ouy1ax38`。每次请求的上限为100。参数不支持同时指定`LaunchConfigurationIds`和`Filters`
      */
    LaunchConfigurationIds?: Array<string>;
    /**
      * 过滤条件。
<li> launch-configuration-id - String - 是否必填：否 -（过滤条件）按照启动配置ID过滤。</li>
<li> launch-configuration-name - String - 是否必填：否 -（过滤条件）按照启动配置名称过滤。</li>
<li> vague-launch-configuration-name - String - 是否必填：否 -（过滤条件）按照启动配置名称模糊搜索。</li>
每次请求的`Filters`的上限为10，`Filter.Values`的上限为5。参数不支持同时指定`LaunchConfigurationIds`和`Filters`。
      */
    Filters?: Array<Filter>;
    /**
      * 返回数量，默认为20，最大值为100。关于`Limit`的更进一步介绍请参考 API [简介](https://cloud.tencent.com/document/api/213/15688)中的相关小节。
      */
    Limit?: number;
    /**
      * 偏移量，默认为0。关于`Offset`的更进一步介绍请参考 API [简介](https://cloud.tencent.com/document/api/213/15688)中的相关小节。
      */
    Offset?: number;
}
/**
 * 通知目标
 */
export interface NotificationTarget {
    /**
      * 目标类型，取值范围包括`CMQ_QUEUE`、`CMQ_TOPIC`。
<li> CMQ_QUEUE，指腾讯云消息队列-队列模型。</li>
<li> CMQ_TOPIC，指腾讯云消息队列-主题模型。</li>
      */
    TargetType: string;
    /**
      * 队列名称，如果`TargetType`取值为`CMQ_QUEUE`，则本字段必填。
      */
    QueueName?: string;
    /**
      * 主题名称，如果`TargetType`取值为`CMQ_TOPIC`，则本字段必填。
      */
    TopicName?: string;
}
/**
 * DeleteAutoScalingGroup返回参数结构体
 */
export interface DeleteAutoScalingGroupResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 生命周期挂钩动作的执行结果信息。
 */
export interface LifecycleActionResultInfo {
    /**
      * 生命周期挂钩标识。
      */
    LifecycleHookId: string;
    /**
      * 实例标识。
      */
    InstanceId: string;
    /**
      * 通知的结果，表示通知CMQ是否成功。
      */
    NotificationResult: string;
    /**
      * 生命周期挂钩动作的执行结果，取值包括 CONTINUE、ABANDON。
      */
    LifecycleActionResult: string;
    /**
      * 结果的原因。
      */
    ResultReason: string;
}
/**
 * 伸缩组简明信息。
 */
export interface AutoScalingGroupAbstract {
    /**
      * 伸缩组ID。
      */
    AutoScalingGroupId: string;
    /**
      * 伸缩组名称。
      */
    AutoScalingGroupName: string;
}
/**
 * EnableAutoScalingGroup请求参数结构体
 */
export interface EnableAutoScalingGroupRequest {
    /**
      * 伸缩组ID
      */
    AutoScalingGroupId: string;
}
/**
 * 弹性伸缩告警指标
 */
export interface MetricAlarm {
    /**
      * 比较运算符，可选值：<br><li>GREATER_THAN：大于</li><li>GREATER_THAN_OR_EQUAL_TO：大于或等于</li><li>LESS_THAN：小于</li><li> LESS_THAN_OR_EQUAL_TO：小于或等于</li><li> EQUAL_TO：等于</li> <li>NOT_EQUAL_TO：不等于</li>
      */
    ComparisonOperator: string;
    /**
      * 指标名称，可选字段如下：<br><li>CPU_UTILIZATION：CPU利用率</li><li>MEM_UTILIZATION：内存利用率</li><li>LAN_TRAFFIC_OUT：内网出带宽</li><li>LAN_TRAFFIC_IN：内网入带宽</li><li>WAN_TRAFFIC_OUT：外网出带宽</li><li>WAN_TRAFFIC_IN：外网入带宽</li>
      */
    MetricName: string;
    /**
      * 告警阈值：<br><li>CPU_UTILIZATION：[1, 100]，单位：%</li><li>MEM_UTILIZATION：[1, 100]，单位：%</li><li>LAN_TRAFFIC_OUT：>0，单位：Mbps </li><li>LAN_TRAFFIC_IN：>0，单位：Mbps</li><li>WAN_TRAFFIC_OUT：>0，单位：Mbps</li><li>WAN_TRAFFIC_IN：>0，单位：Mbps</li>
      */
    Threshold: number;
    /**
      * 时间周期，单位：秒，取值枚举值为60、300。
      */
    Period: number;
    /**
      * 重复次数。取值范围 [1, 10]
      */
    ContinuousTime: number;
    /**
      * 统计类型，可选字段如下：<br><li>AVERAGE：平均值</li><li>MAXIMUM：最大值<li>MINIMUM：最小值</li><br> 默认取值：AVERAGE
      */
    Statistic?: string;
}
/**
 * DescribeNotificationConfigurations请求参数结构体
 */
export interface DescribeNotificationConfigurationsRequest {
    /**
      * 按照一个或者多个通知ID查询。实例ID形如：asn-2sestqbr。每次请求的实例的上限为100。参数不支持同时指定`AutoScalingNotificationIds`和`Filters`。
      */
    AutoScalingNotificationIds?: Array<string>;
    /**
      * 过滤条件。
<li> auto-scaling-notification-id - String - 是否必填：否 -（过滤条件）按照通知ID过滤。</li>
<li> auto-scaling-group-id - String - 是否必填：否 -（过滤条件）按照伸缩组ID过滤。</li>
每次请求的`Filters`的上限为10，`Filter.Values`的上限为5。参数不支持同时指定`AutoScalingNotificationIds`和`Filters`。
      */
    Filters?: Array<Filter>;
    /**
      * 返回数量，默认为20，最大值为100。关于`Limit`的更进一步介绍请参考 API [简介](https://cloud.tencent.com/document/api/213/15688)中的相关小节。
      */
    Limit?: number;
    /**
      * 偏移量，默认为0。关于`Offset`的更进一步介绍请参考 API [简介](https://cloud.tencent.com/document/api/213/15688)中的相关小节。
      */
    Offset?: number;
}
/**
 * 生命周期挂钩
 */
export interface LifecycleHook {
    /**
      * 生命周期挂钩ID
      */
    LifecycleHookId: string;
    /**
      * 生命周期挂钩名称
      */
    LifecycleHookName: string;
    /**
      * 伸缩组ID
      */
    AutoScalingGroupId: string;
    /**
      * 生命周期挂钩默认结果
      */
    DefaultResult: string;
    /**
      * 生命周期挂钩等待超时时间
      */
    HeartbeatTimeout: number;
    /**
      * 生命周期挂钩适用场景
      */
    LifecycleTransition: string;
    /**
      * 通知目标的附加信息
      */
    NotificationMetadata: string;
    /**
      * 创建时间
      */
    CreatedTime: string;
    /**
      * 通知目标
      */
    NotificationTarget: NotificationTarget;
    /**
      * 生命周期挂钩适用场景
      */
    LifecycleTransitionType: string;
}
/**
 * 应用型负载均衡器
 */
export interface ForwardLoadBalancer {
    /**
      * 负载均衡器ID
      */
    LoadBalancerId: string;
    /**
      * 应用型负载均衡监听器 ID
      */
    ListenerId: string;
    /**
      * 目标规则属性列表
      */
    TargetAttributes: Array<TargetAttribute>;
    /**
      * 转发规则ID，注意：针对七层监听器此参数必填
      */
    LocationId?: string;
    /**
      * 负载均衡实例所属地域，默认取AS服务所在地域。格式与公共参数Region相同，如："ap-guangzhou"。
      */
    Region?: string;
}
/**
 * PreviewPaiDomainName返回参数结构体
 */
export interface PreviewPaiDomainNameResponse {
    /**
      * 可用的PAI域名
      */
    DomainName?: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DeleteAutoScalingGroup请求参数结构体
 */
export interface DeleteAutoScalingGroupRequest {
    /**
      * 伸缩组ID
      */
    AutoScalingGroupId: string;
}
/**
 * RemoveInstances请求参数结构体
 */
export interface RemoveInstancesRequest {
    /**
      * 伸缩组ID
      */
    AutoScalingGroupId: string;
    /**
      * CVM实例ID列表
      */
    InstanceIds: Array<string>;
}
/**
 * StartAutoScalingInstances请求参数结构体
 */
export interface StartAutoScalingInstancesRequest {
    /**
      * 伸缩组ID
      */
    AutoScalingGroupId: string;
    /**
      * 待开启的CVM实例ID列表
      */
    InstanceIds: Array<string>;
}
/**
 * AttachInstances请求参数结构体
 */
export interface AttachInstancesRequest {
    /**
      * 伸缩组ID
      */
    AutoScalingGroupId: string;
    /**
      * CVM实例ID列表
      */
    InstanceIds: Array<string>;
}
/**
 * DescribeScalingPolicies返回参数结构体
 */
export interface DescribeScalingPoliciesResponse {
    /**
      * 弹性伸缩告警触发策略详细信息列表。
      */
    ScalingPolicySet?: Array<ScalingPolicy>;
    /**
      * 符合条件的通知数量。
      */
    TotalCount?: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 符合条件的伸缩活动相关信息。
 */
export interface Activity {
    /**
      * 伸缩组ID。
      */
    AutoScalingGroupId: string;
    /**
      * 伸缩活动ID。
      */
    ActivityId: string;
    /**
      * 伸缩活动类型。取值如下：<br>
<li>SCALE_OUT：扩容活动<li>SCALE_IN：缩容活动<li>ATTACH_INSTANCES：添加实例<li>REMOVE_INSTANCES：销毁实例<li>DETACH_INSTANCES：移出实例<li>TERMINATE_INSTANCES_UNEXPECTEDLY：实例在CVM控制台被销毁<li>REPLACE_UNHEALTHY_INSTANCE：替换不健康实例
<li>START_INSTANCES：开启实例
<li>STOP_INSTANCES：关闭实例
      */
    ActivityType: string;
    /**
      * 伸缩活动状态。取值如下：<br>
<li>INIT：初始化中
<li>RUNNING：运行中
<li>SUCCESSFUL：活动成功
<li>PARTIALLY_SUCCESSFUL：活动部分成功
<li>FAILED：活动失败
<li>CANCELLED：活动取消
      */
    StatusCode: string;
    /**
      * 伸缩活动状态描述。
      */
    StatusMessage: string;
    /**
      * 伸缩活动起因。
      */
    Cause: string;
    /**
      * 伸缩活动描述。
      */
    Description: string;
    /**
      * 伸缩活动开始时间。
      */
    StartTime: string;
    /**
      * 伸缩活动结束时间。
      */
    EndTime: string;
    /**
      * 伸缩活动创建时间。
      */
    CreatedTime: string;
    /**
      * 伸缩活动相关实例信息集合。
      */
    ActivityRelatedInstanceSet: Array<ActivtyRelatedInstance>;
    /**
      * 伸缩活动状态简要描述。
      */
    StatusMessageSimplified: string;
    /**
      * 伸缩活动中生命周期挂钩的执行结果。
      */
    LifecycleActionResultSet: Array<LifecycleActionResultInfo>;
}
/**
 * ModifyDesiredCapacity返回参数结构体
 */
export interface ModifyDesiredCapacityResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * StopAutoScalingInstances请求参数结构体
 */
export interface StopAutoScalingInstancesRequest {
    /**
      * 伸缩组ID
      */
    AutoScalingGroupId: string;
    /**
      * 待关闭的CVM实例ID列表
      */
    InstanceIds: Array<string>;
    /**
      * 关闭的实例是否收费，取值为：
KEEP_CHARGING：关机继续收费
STOP_CHARGING：关机停止收费
默认为 KEEP_CHARGING
      */
    StoppedMode?: string;
}
/**
 * 描述了 “云监控” 服务相关的信息。
 */
export interface RunMonitorServiceEnabled {
    /**
      * 是否开启[云监控](https://cloud.tencent.com/document/product/248)服务。取值范围：<br><li>TRUE：表示开启云监控服务<br><li>FALSE：表示不开启云监控服务<br><br>默认取值：TRUE。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Enabled?: boolean;
}
/**
 * DeleteLifecycleHook返回参数结构体
 */
export interface DeleteLifecycleHookResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 与本次伸缩活动相关的实例信息。
 */
export interface ActivtyRelatedInstance {
    /**
      * 实例ID。
      */
    InstanceId: string;
    /**
      * 实例在伸缩活动中的状态。取值如下：
<li>INIT：初始化中
<li>RUNNING：实例操作中
<li>SUCCESSFUL：活动成功
<li>FAILED：活动失败
      */
    InstanceStatus: string;
}
/**
 * 描述了启动配置创建实例的公网可访问性，声明了实例的公网使用计费模式，最大带宽等
 */
export interface InternetAccessible {
    /**
      * 网络计费类型。取值范围：<br><li>BANDWIDTH_PREPAID：预付费按带宽结算<br><li>TRAFFIC_POSTPAID_BY_HOUR：流量按小时后付费<br><li>BANDWIDTH_POSTPAID_BY_HOUR：带宽按小时后付费<br><li>BANDWIDTH_PACKAGE：带宽包用户<br>默认取值：TRAFFIC_POSTPAID_BY_HOUR。
注意：此字段可能返回 null，表示取不到有效值。
      */
    InternetChargeType?: string;
    /**
      * 公网出带宽上限，单位：Mbps。默认值：0Mbps。不同机型带宽上限范围不一致，具体限制详见[购买网络带宽](https://cloud.tencent.com/document/product/213/509)。
注意：此字段可能返回 null，表示取不到有效值。
      */
    InternetMaxBandwidthOut?: number;
    /**
      * 是否分配公网IP。取值范围：<br><li>TRUE：表示分配公网IP<br><li>FALSE：表示不分配公网IP<br><br>当公网带宽大于0Mbps时，可自由选择开通与否，默认开通公网IP；当公网带宽为0，则不允许分配公网IP。
注意：此字段可能返回 null，表示取不到有效值。
      */
    PublicIpAssigned?: boolean;
    /**
      * 带宽包ID。可通过[DescribeBandwidthPackages](https://cloud.tencent.com/document/api/215/19209)接口返回值中的`BandwidthPackageId`获取。
注意：此字段可能返回 null，表示取不到有效值。
      */
    BandwidthPackageId?: string;
}
/**
 * EnableAutoScalingGroup返回参数结构体
 */
export interface EnableAutoScalingGroupResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * UpgradeLaunchConfiguration返回参数结构体
 */
export interface UpgradeLaunchConfigurationResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 描述了实例的计费模式
 */
export interface InstanceChargePrepaid {
    /**
      * 购买实例的时长，单位：月。取值范围：1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 24, 36。
      */
    Period: number;
    /**
      * 自动续费标识。取值范围：<br><li>NOTIFY_AND_AUTO_RENEW：通知过期且自动续费<br><li>NOTIFY_AND_MANUAL_RENEW：通知过期不自动续费<br><li>DISABLE_NOTIFY_AND_MANUAL_RENEW：不通知过期不自动续费<br><br>默认取值：NOTIFY_AND_MANUAL_RENEW。若该参数指定为NOTIFY_AND_AUTO_RENEW，在账户余额充足的情况下，实例到期后将按月自动续费。
      */
    RenewFlag?: string;
}
/**
 * DescribePaiInstances返回参数结构体
 */
export interface DescribePaiInstancesResponse {
    /**
      * 符合条件的PAI实例数量
      */
    TotalCount?: number;
    /**
      * PAI实例详细信息
      */
    PaiInstanceSet?: Array<PaiInstance>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ExecuteScalingPolicy请求参数结构体
 */
export interface ExecuteScalingPolicyRequest {
    /**
      * 告警伸缩策略ID
      */
    AutoScalingPolicyId: string;
    /**
      * 是否检查伸缩组活动处于冷却时间内，默认值为false
      */
    HonorCooldown?: boolean;
    /**
      * 执行伸缩策略的触发来源，取值包括 API 和 CLOUD_MONITOR，默认值为 API。CLOUD_MONITOR 专门供云监控触发调用。
      */
    TriggerSource?: string;
}
