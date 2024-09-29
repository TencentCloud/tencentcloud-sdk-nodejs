/**
 * UpdateAuthorizationPolicyPriority返回参数结构体
 */
export interface UpdateAuthorizationPolicyPriorityResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * UpdateAuthorizationPolicyPriority请求参数结构体
 */
export interface UpdateAuthorizationPolicyPriorityRequest {
    /**
     * 实例ID
     */
    InstanceId: string;
    /**
     * 策略ID和优先级
     */
    Priorities?: Array<AuthorizationPolicyPriority>;
}
/**
 * AuthorizationPolicyItem
 */
export interface AuthorizationPolicyItem {
    /**
     * 规则id
     */
    Id?: number;
    /**
     * 集群id
     */
    InstanceId?: string;
    /**
     * 规则名
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PolicyName?: string;
    /**
     * 规则语法版本
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Version?: number;
    /**
     * 越小越优先
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Priority?: number;
    /**
     * allow/deny
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Effect?: string;
    /**
     * connect、pub、sub
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Actions?: string;
    /**
     * 资源
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Resources?: string;
    /**
     * client
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ClientId?: string;
    /**
     * 用户
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Username?: string;
    /**
     * IP地址
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Ip?: string;
    /**
     * 0，1，2
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Qos?: string;
    /**
     * 1、2、3
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Retain?: number;
    /**
     * 描述
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Remark?: string;
    /**
     * 1713164969433
     */
    CreatedTime?: number;
    /**
     * 1713164969433
     */
    UpdateTime?: number;
}
/**
 * CreateJWTAuthenticator返回参数结构体
 */
export interface CreateJWTAuthenticatorResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DeleteAuthorizationPolicy请求参数结构体
 */
export interface DeleteAuthorizationPolicyRequest {
    /**
     * 实例ID
     */
    InstanceId: string;
    /**
     * 策略规则id
     */
    Id: number;
}
/**
 * ModifyJWKSAuthenticator返回参数结构体
 */
export interface ModifyJWKSAuthenticatorResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * RegisterDeviceCertificate返回参数结构体
 */
export interface RegisterDeviceCertificateResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ModifyJWTAuthenticator返回参数结构体
 */
export interface ModifyJWTAuthenticatorResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeAuthorizationPolicies请求参数结构体
 */
export interface DescribeAuthorizationPoliciesRequest {
    /**
     * 集群ID
     */
    InstanceId?: string;
}
/**
 * DescribeTopicList请求参数结构体
 */
export interface DescribeTopicListRequest {
    /**
     * 实例ID
     */
    InstanceId: string;
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
/**
 * ModifyAuthorizationPolicy返回参数结构体
 */
export interface ModifyAuthorizationPolicyResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CreateAuthorizationPolicy请求参数结构体
 */
export interface CreateAuthorizationPolicyRequest {
    /**
     * 实例ID
     */
    InstanceId: string;
    /**
     * 策略名称
     */
    PolicyName: string;
    /**
     * 策略版本
     */
    PolicyVersion: number;
    /**
     * 策略优先级，越小越优先
     */
    Priority: number;
    /**
     * allow、deny
     */
    Effect: string;
    /**
     * connect、pub、sub
     */
    Actions: string;
    /**
     * 1,匹配保留消息；2,匹配非保留消息，3.匹配所有消息
     */
    Retain: number;
    /**
     * 0、1、2
     */
    Qos: string;
    /**
     * 资源
     */
    Resources?: string;
    /**
     * 用户名
     */
    Username?: string;
    /**
     * 客户端
     */
    ClientId?: string;
    /**
     * ip
     */
    Ip?: string;
    /**
     * 备注信息
     */
    Remark?: string;
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
 * DescribeAuthenticator返回参数结构体
 */
export interface DescribeAuthenticatorResponse {
    /**
     * 集群认证器列表
     */
    Authenticators?: Array<MQTTAuthenticatorItem>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CreateTopic返回参数结构体
 */
export interface CreateTopicResponse {
    /**
     * 实例ID
     */
    InstanceId?: string;
    /**
     * 主题
     */
    Topic?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ModifyJWTAuthenticator请求参数结构体
 */
export interface ModifyJWTAuthenticatorRequest {
    /**
     * 实例ID
     */
    InstanceId: string;
    /**
     * 算法：hmac-based，public-key
     */
    Algorithm?: string;
    /**
     * 设备连接时传递jwt的key；username-使用用户名字段传递；password-使用密码字段传递
     */
    From?: string;
    /**
     * 密码
     */
    Secret?: string;
    /**
     * 公钥
     */
    PublicKey?: string;
    /**
     * JSKS文本
     */
    Text?: string;
    /**
     * 说明
     */
    Remark?: string;
}
/**
 * 策略规则优先级
 */
export interface AuthorizationPolicyPriority {
    /**
     * 策略id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Id: number;
    /**
     * 优先级
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Priority: number;
}
/**
 * CreateAuthorizationPolicy返回参数结构体
 */
export interface CreateAuthorizationPolicyResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CreateJWTAuthenticator请求参数结构体
 */
export interface CreateJWTAuthenticatorRequest {
    /**
     * 实例ID
     */
    InstanceId: string;
    /**
     * 算法：hmac-based，public-key
     */
    Algorithm: string;
    /**
     * 设备连接时传递jwt的key；username-使用用户名字段传递；password-使用密码字段传递
     */
    From: string;
    /**
     * 密码
     */
    Secret?: string;
    /**
     * 公钥
     */
    PublicKey?: string;
    /**
     * 认证器是否开启：open-启用；close-关闭
     */
    Status?: string;
    /**
     * 说明
     */
    Remark?: string;
}
/**
 * DeleteTopic请求参数结构体
 */
export interface DeleteTopicRequest {
    /**
     * 实例ID
     */
    InstanceId: string;
    /**
     * 主题
     */
    Topic: string;
}
/**
 * CreateJWKSAuthenticator请求参数结构体
 */
export interface CreateJWKSAuthenticatorRequest {
    /**
     * 实例ID
     */
    InstanceId: string;
    /**
     * jwks端点
     */
    Endpoint?: string;
    /**
     * jwks刷新间隔,单位：秒
     */
    RefreshInterval?: number;
    /**
     * jwks文本
     */
    Text?: string;
    /**
     * 认证器是否开启：open-启用；close-关闭
     */
    Status?: string;
    /**
     * 说明
     */
    Remark?: string;
    /**
     * 设备连接时传递jwt的key；username-使用用户名字段传递；password-使用密码字段传递
     */
    From?: string;
}
/**
 * ModifyTopic返回参数结构体
 */
export interface ModifyTopicResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeTopic返回参数结构体
 */
export interface DescribeTopicResponse {
    /**
     * 实例ID
     */
    InstanceId?: string;
    /**
     * 主题名称
     */
    Topic?: string;
    /**
     * 备注
     */
    Remark?: string;
    /**
     * 创建时间，秒为单位
     */
    CreatedTime?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CreateJWKSAuthenticator返回参数结构体
 */
export interface CreateJWKSAuthenticatorResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DeleteAuthenticator请求参数结构体
 */
export interface DeleteAuthenticatorRequest {
    /**
     * 实例ID
     */
    InstanceId: string;
    /**
     * 认证器类型
     */
    Type: string;
}
/**
 * DescribeAuthorizationPolicies返回参数结构体
 */
export interface DescribeAuthorizationPoliciesResponse {
    /**
     * 规则
     */
    Data?: Array<AuthorizationPolicyItem>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * RegisterDeviceCertificate请求参数结构体
 */
export interface RegisterDeviceCertificateRequest {
    /**
     * 集群id
     */
    InstanceId: string;
    /**
     * 设备证书
     */
    DeviceCertificate: string;
    /**
     * 关联的CA证书SN
     */
    CaSn: string;
    /**
     * 客户端ID
     */
    ClientId?: string;
    /**
     * 证书格式
     */
    Format?: string;
    /**
     *     ACTIVE,//激活     INACTIVE,//未激活     REVOKED,//吊销     PENDING_ACTIVATION,//注册待激活
     */
    Status?: string;
}
/**
 * CreateTopic请求参数结构体
 */
export interface CreateTopicRequest {
    /**
     * 实例ID
     */
    InstanceId: string;
    /**
     * 主题
     */
    Topic: string;
    /**
     * 备注
     */
    Remark?: string;
}
/**
 * MQTT 主题详情
 */
export interface MQTTTopicItem {
    /**
     * 实例 ID
     */
    InstanceId?: string;
    /**
     * 主题名称
     */
    Topic?: string;
    /**
     * 主题描述
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Remark?: string;
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
 * DeleteAuthorizationPolicy返回参数结构体
 */
export interface DeleteAuthorizationPolicyResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ModifyJWKSAuthenticator请求参数结构体
 */
export interface ModifyJWKSAuthenticatorRequest {
    /**
     * 实例ID
     */
    InstanceId: string;
    /**
     * 端点
     */
    Endpoint?: string;
    /**
     * 认证器状态：open-启用；close-关闭
     */
    Status?: string;
    /**
     * 刷新时间
     */
    RefreshInterval?: number;
    /**
     * JSKS文本
     */
    Text?: string;
    /**
     * 设备连接时传递jwt的key；username-使用用户名字段传递；password-使用密码字段传递
     */
    From?: string;
    /**
     * 说明
     */
    Remark?: string;
}
/**
 * ModifyTopic请求参数结构体
 */
export interface ModifyTopicRequest {
    /**
     * 实例ID
     */
    InstanceId: string;
    /**
     * 主题
     */
    Topic: string;
    /**
     * 备注信息
     */
    Remark?: string;
}
/**
 * DescribeTopicList返回参数结构体
 */
export interface DescribeTopicListResponse {
    /**
     * 查询总数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TotalCount?: number;
    /**
     * 主题列表
     */
    Data?: Array<MQTTTopicItem>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeAuthenticator请求参数结构体
 */
export interface DescribeAuthenticatorRequest {
    /**
     * 实例ID
     */
    InstanceId: string;
    /**
     * 认证器类型
     */
    Type?: string;
}
/**
 * DeleteTopic返回参数结构体
 */
export interface DeleteTopicResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ModifyAuthorizationPolicy请求参数结构体
 */
export interface ModifyAuthorizationPolicyRequest {
    /**
     * 策略
     */
    Id: number;
    /**
     * 实例ID
     */
    InstanceId: string;
    /**
     * 策略名称
     */
    PolicyName?: string;
    /**
     * 策略版本
     */
    PolicyVersion?: number;
    /**
     * 策略优先级，越小越优先
     */
    Priority?: number;
    /**
     * allow、deny
     */
    Effect?: string;
    /**
     * connect、pub、sub
     */
    Actions?: string;
    /**
     * 资源
     */
    Resources?: string;
    /**
     * 用户名
     */
    Username?: string;
    /**
     * 1.匹配保留消息；2.匹配非保留消息；3.匹配所有消息
     */
    Retain?: number;
    /**
     * 客户端
     */
    ClientId?: string;
    /**
     * ip
     */
    Ip?: string;
    /**
     * 0、1、2
     */
    Qos?: string;
    /**
     * 备注信息
     */
    Remark?: string;
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
 * MQTT认证器信息
 */
export interface MQTTAuthenticatorItem {
    /**
     * 认证器类型
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Type?: string;
    /**
     * 认证器配置
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Config?: string;
    /**
     * 认证器状态
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Status?: string;
    /**
     * 创建时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CreateTime?: number;
    /**
     * 说明
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Remark?: string;
}
/**
 * DeleteAuthenticator返回参数结构体
 */
export interface DeleteAuthenticatorResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
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
 * DescribeTopic请求参数结构体
 */
export interface DescribeTopicRequest {
    /**
     * 实例ID
     */
    InstanceId: string;
    /**
     * 主题
     */
    Topic: string;
}
