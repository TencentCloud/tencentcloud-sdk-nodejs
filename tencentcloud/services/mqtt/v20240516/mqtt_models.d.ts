/**
 * DescribeInstanceList返回参数结构体
 */
export interface DescribeInstanceListResponse {
    /**
     * 查询总数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TotalCount?: number;
    /**
     * 实例列表
     */
    Data?: Array<MQTTInstanceItem>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeInstance请求参数结构体
 */
export interface DescribeInstanceRequest {
    /**
     * 实例ID
     */
    InstanceId: string;
}
/**
 * 标签过滤器
 */
export interface TagFilter {
    /**
     * 标签键名称
     */
    TagKey?: string;
    /**
     * 标签键名称
     */
    TagValues?: Array<string>;
}
/**
 * 查询过滤器
 */
export interface Filter {
    /**
     * 过滤条件名
     */
    Name: string;
    /**
     * 过滤条件的值
     */
    Values: Array<string>;
}
/**
 * MQTT 实例信息
 */
export interface MQTTInstanceItem {
    /**
     * 实例ID
     */
    InstanceId?: string;
    /**
     * 实例名称
     */
    InstanceName?: string;
    /**
     * 实例版本
     */
    Version?: string;
    /**
     * 实例类型，
  EXPERIMENT，体验版
  BASIC，基础版
  PRO，专业版
  PLATINUM，铂金版
     */
    InstanceType?: string;
    /**
     * 实例状态，
  RUNNING, 运行中
  MAINTAINING，维护中
  ABNORMAL，异常
  OVERDUE，欠费
  DESTROYED，已删除
  CREATING，创建中
  MODIFYING，变配中
  CREATE_FAILURE，创建失败
  MODIFY_FAILURE，变配失败
  DELETING，删除中
     */
    InstanceStatus?: string;
    /**
     * 实例主题数上限
     */
    TopicNumLimit?: number;
    /**
     * 备注信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Remark?: string;
    /**
     * 主题数量
     */
    TopicNum?: number;
    /**
     * 商品规格
     */
    SkuCode?: string;
    /**
     * 弹性TPS限流值
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TpsLimit?: number;
    /**
     * 创建时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CreateTime?: number;
    /**
     * 单客户端最大订阅数量
  注意：此字段可能返回 null，表示取不到有效值。
     */
    MaxSubscriptionPerClient?: number;
    /**
     * 客户端连接数上线
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ClientNumLimit?: number;
    /**
     * 是否自动续费
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RenewFlag?: number;
    /**
     * 计费模式， POSTPAID，按量计费 PREPAID，包年包月
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PayMode?: string;
    /**
     * 到期时间，秒为单位
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ExpiryTime?: number;
    /**
     * 预销毁时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DestroyTime?: number;
    /**
     * 授权规则条数限制
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AuthorizationPolicyLimit?: number;
    /**
     * 最大ca配额
  注意：此字段可能返回 null，表示取不到有效值。
     */
    MaxCaNum?: number;
    /**
     * 最大订阅数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    MaxSubscription?: number;
}
/**
 * DescribeInstance返回参数结构体
 */
export interface DescribeInstanceResponse {
    /**
     * 实例类型，
  EXPERIMENT 体验版
  BASIC 基础版
  PRO  专业版
  PLATINUM 铂金版
     */
    InstanceType?: string;
    /**
     * 实例ID
     */
    InstanceId?: string;
    /**
     * 实例名称
     */
    InstanceName?: string;
    /**
     * 主题数量
     */
    TopicNum?: number;
    /**
     * 实例最大主题数量
     */
    TopicNumLimit?: number;
    /**
     * TPS限流值
     */
    TpsLimit?: number;
    /**
     * 创建时间，秒为单位
     */
    CreatedTime?: number;
    /**
     * 备注信息
     */
    Remark?: string;
    /**
     * 实例状态
     */
    InstanceStatus?: string;
    /**
     * 实例规格
     */
    SkuCode?: string;
    /**
     * 单客户端最大订阅数
     */
    MaxSubscriptionPerClient?: number;
    /**
     * 授权规则条数
     */
    AuthorizationPolicyLimit?: number;
    /**
     * 客户端数量上限
     */
    ClientNumLimit?: number;
    /**
     * 客户端证书注册方式：JITP，API
     */
    DeviceCertificateProvisionType?: string;
    /**
     * 自动注册设备证书时是否自动激活
     */
    AutomaticActivation?: boolean;
    /**
     * 是否自动续费
     */
    RenewFlag?: number;
    /**
     * 计费模式， POSTPAID，按量计费 PREPAID，包年包月
     */
    PayMode?: string;
    /**
     * 到期时间，秒为单位
     */
    ExpiryTime?: number;
    /**
     * 预销毁时间
     */
    DestroyTime?: number;
    /**
     *     TLS,单向认证
      mTLS,双向认证
      BYOC;一机一证
     */
    X509Mode?: string;
    /**
     * 最大Ca配额
     */
    MaxCaNum?: number;
    /**
     * 证书注册码
     */
    RegistrationCode?: string;
    /**
     * 集群最大订阅数
     */
    MaxSubscription?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeInstanceList请求参数结构体
 */
export interface DescribeInstanceListRequest {
    /**
     * 查询条件列表
     */
    Filters?: Array<Filter>;
    /**
     * 查询起始位置
     */
    Offset?: number;
    /**
     * 查询结果限制数量
     */
    Limit?: number;
    /**
     * 标签过滤器
     */
    TagFilters?: Array<TagFilter>;
}
