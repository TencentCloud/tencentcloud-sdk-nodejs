/*
 * Copyright (c) 2018 Tencent. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

/**
 * UpdateAuthorizationPolicyPriority返回参数结构体
 */
export interface UpdateAuthorizationPolicyPriorityResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * MQTT 订阅关系
 */
export interface MQTTClientSubscription {
  /**
   * topic 订阅
   */
  TopicFilter?: string
  /**
   * 服务质量等级
0: 至多一次
1: 至少一次
2: 恰好一次
   */
  Qos?: number
  /**
   * 堆积数量
   */
  Lag?: number
  /**
   * 投递未确认数量
   */
  Inflight?: number
  /**
   * 用户属性
   */
  UserProperties?: Array<SubscriptionUserProperty>
}

/**
 * ModifyDeviceIdentity返回参数结构体
 */
export interface ModifyDeviceIdentityResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteUser请求参数结构体
 */
export interface DeleteUserRequest {
  /**
   * 实例ID
   */
  InstanceId: string
  /**
   * 用户名
   */
  Username: string
}

/**
 * ModifyJWTAuthenticator返回参数结构体
 */
export interface ModifyJWTAuthenticatorResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CA证书信息
 */
export interface CaCertificateItem {
  /**
   * 证书的公用名(Common Name)
   */
  CaCn?: string
  /**
   * 证书内容
   */
  CaCertificate?: string
  /**
   * 证书序列号
   */
  CaSn?: string
  /**
   * 证书格式，当前仅支持 PEM 格式
   */
  Format?: string
  /**
   * 验证证书内容
   */
  VerificationCertificate?: string
  /**
   * CA证书的状态
    ACTIVE：激活
    INACTIVE：未激活
    REVOKED：吊销
    PENDING_ACTIVATION：注册待激活
   */
  Status?: string
  /**
   * 上次激活时间，毫秒级时间戳 。
   */
  LastActivationTime?: number
  /**
   * 创建时间，毫秒级时间戳 。
   */
  CreatedTime?: number
  /**
   * 更新时间，毫秒级时间戳 。
   */
  UpdateTime?: number
  /**
   * 上次去激活时间，毫秒级时间戳 。
   */
  LastInactivationTime?: number
  /**
   * Ca证书颁发者CN
   */
  CaIssuerCn?: string
  /**
   * 生效时间，毫秒级时间戳 。
   */
  NotBeforeTime?: number
  /**
   * 失效时间，毫秒级时间戳 。
   */
  NotAfterTime?: number
}

/**
 * ModifyAuthorizationPolicy返回参数结构体
 */
export interface ModifyAuthorizationPolicyResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ActivateDeviceCertificate请求参数结构体
 */
export interface ActivateDeviceCertificateRequest {
  /**
   * 腾讯云MQTT实例ID，从 [DescribeInstanceList](https://cloud.tencent.com/document/api/1778/111029)接口或控制台获得。
   */
  InstanceId: string
  /**
   * 设备证书的SN序列号，可以从 [DescribeDeviceCertificates](https://cloud.tencent.com/document/api/1778/116206)接口、控制台、证书文件中获得。
   */
  DeviceCertificateSn: string
}

/**
 * CreateInstance返回参数结构体
 */
export interface CreateInstanceResponse {
  /**
   * 实例ID
   */
  InstanceId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ApplyRegistrationCode请求参数结构体
 */
export interface ApplyRegistrationCodeRequest {
  /**
   * 腾讯云MQTT实例ID，从 [DescribeInstanceList](https://cloud.tencent.com/document/api/1778/111029)接口或控制台获得。
   */
  InstanceId: string
}

/**
 * DescribeMessageList请求参数结构体
 */
export interface DescribeMessageListRequest {
  /**
   * 腾讯云MQTT实例ID，从 [DescribeInstanceList](https://cloud.tencent.com/document/api/1778/111029)接口或控制台获得。
   */
  InstanceId: string
  /**
   * 要查询的一级Topic，可从 [查询MQTT主题列表](https://cloud.tencent.com/document/product/1778/111082) 获取。
   */
  Topic: string
  /**
   * 开始时间，毫秒级时间戳 。
   */
  StartTime: number
  /**
   * 结束时间，毫秒级时间戳 。
   */
  EndTime: number
  /**
   * 请求任务id，用于相同查询参数下查询加速，第一次查询时无需传递，第一次查询会根据本次查询参数生成查询任务ID，保留查询条件，查询下一页消息时可传递第一次查询返回的任务ID。
   */
  TaskRequestId: string
  /**
   * 查询起始位置，默认0
   */
  Offset?: number
  /**
   * 查询结果限制数量，默认20，最大50
   */
  Limit?: number
}

/**
 * DeleteDeviceIdentity请求参数结构体
 */
export interface DeleteDeviceIdentityRequest {
  /**
   * 集群id
   */
  InstanceId: string
  /**
   * 设备id
   */
  DeviceId: string
}

/**
 * ModifyJWTAuthenticator请求参数结构体
 */
export interface ModifyJWTAuthenticatorRequest {
  /**
   * 腾讯云MQTT实例ID，从 [DescribeInstanceList](https://cloud.tencent.com/document/api/1778/111029)接口或控制台获得。
   */
  InstanceId: string
  /**
   * 签名方式：hmac-based，public-key
   */
  Algorithm?: string
  /**
   * 认证字段
password：对应 MQTT CONNECT Packet 中 password 字段，
username：对应 MQTT CONNECT Packet 中 username 字段
   */
  From?: string
  /**
   * 密钥，Algorithm为hmac-based需要传递该字段。
   */
  Secret?: string
  /**
   * 公钥，Algorithm为public-key时需要传递该字段。
   */
  PublicKey?: string
  /**
   * 认证器是否开启：open-启用；close-关闭
   */
  Status?: string
  /**
   * 说明，不能超过 128 个字符
   */
  Remark?: string
  /**
   * JSKS文本
   * @deprecated
   */
  Text?: string
}

/**
 * 策略规则优先级
 */
export interface AuthorizationPolicyPriority {
  /**
   * 授权策略规则id，可以从 [DescribeAuthorizationPolicies](https://cloud.tencent.com/document/api/1778/111074)接口获得。
   */
  Id: number
  /**
   * 优先级
   */
  Priority: number
}

/**
 * DescribeInsPublicEndpoints返回参数结构体
 */
export interface DescribeInsPublicEndpointsResponse {
  /**
   * 接入点
   */
  Endpoints?: Array<MQTTEndpointItem>
  /**
   * 实例id
   */
  InstanceId?: string
  /**
   * 带宽，单位Mbps
   */
  Bandwidth?: number
  /**
   * 公网访问规则
   */
  Rules?: Array<PublicAccessRule>
  /**
   * 公网状态：
    NORMAL-正常
    CLOSING-关闭中
    MODIFYING-修改中
    CREATING-开启中
    CLOSE-关闭
   */
  Status?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeSharedSubscriptionLag返回参数结构体
 */
export interface DescribeSharedSubscriptionLagResponse {
  /**
   * 堆积值
   */
  Lag?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteTopic请求参数结构体
 */
export interface DeleteTopicRequest {
  /**
   * 实例ID
   */
  InstanceId: string
  /**
   * 主题
   */
  Topic: string
}

/**
 * ModifyUser返回参数结构体
 */
export interface ModifyUserResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeCaCertificate返回参数结构体
 */
export interface DescribeCaCertificateResponse {
  /**
   * 创建时间，毫秒级时间戳 。
   */
  CreatedTime?: number
  /**
   * 上次更新时间，毫秒级时间戳 。
   */
  UpdateTime?: number
  /**
   * 失效日期，毫秒级时间戳 。
   */
  NotAfterTime?: number
  /**
   * 上次激活时间，毫秒级时间戳 。
   */
  LastActivationTime?: number
  /**
   * 上次吊销时间，毫秒级时间戳 。
   */
  LastInactivationTime?: number
  /**
   * CA证书状态
 ACTIVE：激活
INACTIVE：未激活

   */
  Status?: string
  /**
   * 证书序列号
   */
  CaSn?: string
  /**
   * 证书的CN（Common Name），证书中用于标识主体的名称，通常是域名或组织名称
   */
  CaCn?: string
  /**
   * 证书内容
   */
  CaCertificate?: string
  /**
   * 证书格式，当仅支持PEM格式
   */
  Format?: string
  /**
   * Ca证书颁发者CN
   */
  CaIssuerCn?: string
  /**
   * 生效开始时间，毫秒级时间戳 。
   */
  NotBeforeTime?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDeviceCertificates请求参数结构体
 */
export interface DescribeDeviceCertificatesRequest {
  /**
   * 腾讯云MQTT实例ID，从 [DescribeInstanceList](https://cloud.tencent.com/document/api/1778/111029)接口或控制台获得。
   */
  InstanceId: string
  /**
   * 支持搜索参数
ClientId：客户端id，根据实际业务使用获取
CaSn：所属的CA证书SN序列号 可以从 [查询集群CA证书列表](https://cloud.tencent.com/document/api/1778/116206) 或者实际业务使用获取
DeviceCertificateSn：设备证书SN序列号 可从[查询设备证书详情](https://cloud.tencent.com/document/api/1778/113748) 获取
DeviceCertificateCn：设备证书CN 可从[查询设备证书详情](https://cloud.tencent.com/document/api/1778/113748) 获取
OrganizationalUnit：证书OU
NotAfterEnd：过期时间小于等于指定时间的证书
NotAfterStart：过期时间大于等于指定时间的证书
Status：设备证书状态     ACTIVE（激活）； INACTIVE（未激活）REVOKED（吊销）；PENDING_ACTIVATION（注册待激活）

   */
  Filters?: Array<Filter>
  /**
   * 分页limit，默认20，最大100
   */
  Limit?: number
  /**
   * 分页偏移量，默认0
   */
  Offset?: number
  /**
   * 排序规则
    CREATE_TIME_DESC, 创建时间降序
    CREATE_TIME_ASC,创建时间升序
    UPDATE_TIME_DESC,更新时间降序
    UPDATE_TIME_ASC,更新时间升序
   */
  OrderBy?: string
}

/**
 * DeleteAuthenticator请求参数结构体
 */
export interface DeleteAuthenticatorRequest {
  /**
   * 腾讯云MQTT实例ID，从 [DescribeInstanceList](https://cloud.tencent.com/document/api/1778/111029)接口或控制台获得。
   */
  InstanceId: string
  /**
   * 认证器类型:
JWT：JWT认证器
JWKS：JWKS认证器
HTTP：HTTP认证器
   */
  Type: string
}

/**
 * 公网访问安全规则
 */
export interface PublicAccessRule {
  /**
   * ip网段信息
   */
  IpRule?: string
  /**
   * 当前仅支持允许，默认允许（allow）
   */
  Allow?: boolean
  /**
   * 备注信息，最多64个字符。
   */
  Remark?: string
}

/**
 * VPC信息
 */
export interface VpcInfo {
  /**
   * VPC ID
   */
  VpcId?: string
  /**
   * 子网ID
   */
  SubnetId?: string
}

/**
 * DeleteAuthorizationPolicy返回参数结构体
 */
export interface DeleteAuthorizationPolicyResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * MQTT ProductSkuItem
 */
export interface ProductSkuItem {
  /**
   * 规格类型
BASIC：基础版
PRO ：专业版
PLATINUM： 铂金版
   */
  InstanceType?: string
  /**
   * 规格代码
   */
  SkuCode?: string
  /**
   * 是否售卖
1: 可售卖
0: 不可售卖
   */
  OnSale?: boolean
  /**
   * topic num限制
   */
  TopicNumLimit?: number
  /**
   * MQTT 集群下每秒钟生产消息量和消费消息量之和。详细计算方式参考 [计费概述](https://cloud.tencent.com/document/product/1778/109698)
   */
  TpsLimit?: number
  /**
   * 客户端连接数
   */
  ClientNumLimit?: number
  /**
   * 单客户端最大订阅数
   */
  MaxSubscriptionPerClient?: number
  /**
   * 授权规则条数
   */
  AuthorizationPolicyLimit?: number
  /**
   * 计费项信息
   */
  PriceTags?: Array<PriceTag>
}

/**
 * ModifyJWKSAuthenticator请求参数结构体
 */
export interface ModifyJWKSAuthenticatorRequest {
  /**
   * 腾讯云MQTT实例ID，从 [DescribeInstanceList](https://cloud.tencent.com/document/api/1778/111029)接口或控制台获得。
   */
  InstanceId: string
  /**
   * JWKS服务器地址，（Text字段和Endpoint字段必须选择一个填写）
   */
  Endpoint?: string
  /**
   * 认证器状态：open-启用（默认）；close-关闭
   */
  Status?: string
  /**
   * 认证文本刷新间隔时间，单位：秒，最小值60，默认值60，最大值1000。填写认证服务器地址时生效。
   */
  RefreshInterval?: number
  /**
   * JWKS文本，认证服务器地址为空时生效。（Text字段和Endpoint字段必须选择一个填写）
   */
  Text?: string
  /**
   * 认证字段；
username-对应 MQTT CONNECT Packet 中 username 字段， 
password-对应 MQTT CONNECT Packet 中 password 字段。默认username
   */
  From?: string
  /**
   * 说明，不能超过 128 个字符
   */
  Remark?: string
}

/**
 * DescribeDeviceIdentities请求参数结构体
 */
export interface DescribeDeviceIdentitiesRequest {
  /**
   * 集群id
   */
  InstanceId: string
  /**
   * 查询起始位置
   */
  Offset?: number
  /**
   * 查询结果限制数量
   */
  Limit?: number
}

/**
 * RegisterCaCertificate返回参数结构体
 */
export interface RegisterCaCertificateResponse {
  /**
   * mqtt实例ID
   */
  InstanceId?: string
  /**
   * ca 证书的序列号
   */
  CaSn?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * map结构返回
 */
export interface UserProperty {
  /**
   * key
   */
  Key?: string
  /**
   * value
   */
  Value?: string
}

/**
 * DescribeMessageDetails请求参数结构体
 */
export interface DescribeMessageDetailsRequest {
  /**
   * 腾讯云MQTT实例ID，从 [DescribeInstanceList](https://cloud.tencent.com/document/api/1778/111029)接口或控制台获得。
   */
  InstanceId: string
  /**
   * 消息ID
   */
  MessageId: string
  /**
   * 订阅表达式
   */
  Subscription?: string
}

/**
 * DeleteInstance请求参数结构体
 */
export interface DeleteInstanceRequest {
  /**
   * 腾讯云MQTT实例ID，从 [DescribeInstanceList](https://cloud.tencent.com/document/api/1778/111029)接口或控制台获得。
   */
  InstanceId: string
}

/**
 * ModifyInstance请求参数结构体
 */
export interface ModifyInstanceRequest {
  /**
   * 腾讯云MQTT实例ID，从 [DescribeInstanceList](https://cloud.tencent.com/document/api/1778/111029)接口或控制台获得。
   */
  InstanceId: string
  /**
   * 要修改实例名称，不能为空, 3-64个字符，只能包含数字、字母、“-”和“_”。
   */
  Name?: string
  /**
   * 要修改的备注信息，最多128个字符。
   */
  Remark?: string
  /**
   * 需要变更的配置规格
基础版和专业版集群不能升配到铂金版规格，铂金版集群不能降配至基础版和增强版规格。
   */
  SkuCode?: string
  /**
   * 客户端证书注册方式：
JITP：自动注册
API：手动通过API注册
   * @deprecated
   */
  DeviceCertificateProvisionType?: string
  /**
   * 自动注册证书是否自动激活
   * @deprecated
   */
  AutomaticActivation?: boolean
  /**
   * 授权策略开关
   */
  AuthorizationPolicy?: boolean
  /**
   * 是否使用默认的服务端证书
   */
  UseDefaultServerCert?: boolean
  /**
   * TLS：单向认证
mTLS；双向认证
BYOC：一机一证
   */
  X509Mode?: string
}

/**
 * CreateDeviceIdentity请求参数结构体
 */
export interface CreateDeviceIdentityRequest {
  /**
   * 腾讯云MQTT实例ID，从 [DescribeInstanceList](https://cloud.tencent.com/document/api/1778/111029)接口或控制台获得。
   */
  InstanceId: string
  /**
   * 设备id
   */
  DeviceId: string
  /**
   * 1:ENABLED-可用（默认）
2:DISABLE-不可用
   */
  Status?: string
  /**
   * 主要签名key，不传则由系统自动生成，需要base64编码。
   */
  PrimaryKey?: string
  /**
   * 次要签名key，不传则油系统自动生成，需要base64编码。
   */
  SecondaryKey?: string
  /**
   * 该设备id的传播属性设置
   */
  PropagatingProperties?: Array<PropagatingProperty>
}

/**
 * RegisterDeviceCertificate返回参数结构体
 */
export interface RegisterDeviceCertificateResponse {
  /**
   * 腾讯云MQTT实例ID，从 [DescribeInstanceList](https://cloud.tencent.com/document/api/1778/111029)接口或控制台获得。
   */
  InstanceId?: string
  /**
   * 关联的CA证书SN
   */
  CaSn?: string
  /**
   * 设备证书的SN
   */
  DeviceCertificateSn?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * MQTT认证器信息
 */
export interface MQTTAuthenticatorItem {
  /**
   * 认证器类型
JWT：JWT认证器
JWKS：JWKS认证器
HTTP：HTTP认证器
   */
  Type?: string
  /**
   * JWT认证器字段说明
from（认证字段）
    password：从password字段获取认证字段
    username：从username字段获取认证字段
secret（签名方式）
    hmac-based：hmac-based签名方式
    public-key：public-key签名方式
secret（密钥），hmac-based需要配置密钥
public-key（公钥），public-key签名方式需要配置
样例：{"from":"password","secret":"secret282698","algorithm":"hmac-based"}

JWKS认证器字段说明
endpoint（接入点）：公钥获取服务器接入地址
refreshInterval（认证内容）：公钥集合刷新周期
from（认证字段）
    password：从password字段获取认证字段
    username：从username字段获取认证字段
text：公钥集合
样例：{"endpoint":"127.0.0.1","refreshInterval":60,"from":"password"}

HTTP认证器
headers（请求头）：标准请求头和自定义请求头
endpoint（接入点）：认证服务器接入点
method（http请求方法）：POST/GET
readTimeout（读超时时间）：读取认证服务器数据超时时间，单位秒
connectTimeout（连接超时时间）：连接认证服务器超时时间，单位秒
body（请求体）：http请求体
concurrency（并发数）：最大并发请求数量
样例：{"headers":[{"key":"Content-type","value":"application/json"},{"key":"username","value":"${Username}"}],"endpoint":"https://127.0.0.1:443","method":"POST","readTimeout":10,"connectTimeout":10,"body":[{"key":"client-id","value":"${ClientId}"}],"concurrency":8}
参考 [认证管理概述](https://cloud.tencent.com/document/product/1778/114813)
   */
  Config?: string
  /**
   * 认证器状态
open：认证器打开
close：认证器关闭
   */
  Status?: string
  /**
   * 创建时间，毫秒级时间戳 。
   */
  CreateTime?: number
  /**
   * 说明，最长 128 字符。
   */
  Remark?: string
}

/**
 * DescribeClientList返回参数结构体
 */
export interface DescribeClientListResponse {
  /**
   * 客户端列表
   */
  Clients?: Array<MQTTClientInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 标签数据
 */
export interface Tag {
  /**
   * 标签名称
   */
  TagKey: string
  /**
   * 标签值
   */
  TagValue: string
}

/**
 * DescribeMessageList返回参数结构体
 */
export interface DescribeMessageListResponse {
  /**
   * 查询总数
   */
  TotalCount?: number
  /**
   * 消息记录列表
   */
  Data?: Array<MQTTMessageItem>
  /**
   * 请求任务id
   */
  TaskRequestId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * HTTP 认证器header
 */
export interface HeaderItem {
  /**
   * header key
   */
  Key: string
  /**
   * header value
   */
  Value: string
}

/**
 * MQTT 实例信息
 */
export interface MQTTInstanceItem {
  /**
   * 实例ID
   */
  InstanceId?: string
  /**
   * 实例名称
   */
  InstanceName?: string
  /**
   * 实例版本
   */
  Version?: string
  /**
   * 实例类型
BASIC，基础版
PRO，专业版
PLATINUM，铂金版
   */
  InstanceType?: string
  /**
   * 实例状态，
RUNNING, 运行中
MAINTAINING，维护中
ABNORMAL，异常
OVERDUE，欠费
CREATING，创建中
MODIFYING，变配中
CREATE_FAILURE，创建失败
MODIFY_FAILURE，变配失败
DELETING，删除中
   */
  InstanceStatus?: string
  /**
   * 实例主题数上限
   */
  TopicNumLimit?: number
  /**
   * 备注信息
   */
  Remark?: string
  /**
   * 主题数量
   */
  TopicNum?: number
  /**
   * 商品规格
   */
  SkuCode?: string
  /**
   * 弹性TPS限流值
   */
  TpsLimit?: number
  /**
   * 创建时间，毫秒级时间戳
   */
  CreateTime?: number
  /**
   * 单客户端最大订阅数量
   */
  MaxSubscriptionPerClient?: number
  /**
   * 客户端连接数上线
   */
  ClientNumLimit?: number
  /**
   * 是否自动续费。仅包年包月集群生效。
1:自动续费
0:非自动续费
   */
  RenewFlag?: number
  /**
   * 计费模式， POSTPAID，按量计费 PREPAID，包年包月
   */
  PayMode?: string
  /**
   * 到期时间，毫秒级时间戳
   */
  ExpiryTime?: number
  /**
   * 预销毁时间，毫秒级时间戳
   */
  DestroyTime?: number
  /**
   * 授权规则条数限制
   */
  AuthorizationPolicyLimit?: number
  /**
   * 最大ca配额
   */
  MaxCaNum?: number
  /**
   * 最大订阅数
   */
  MaxSubscription?: number
  /**
   * 共享订阅组数最大限制
   */
  SharedSubscriptionGroupLimit?: number
  /**
   * 单个共享订阅组TopicFilter数限制
   */
  MaxTopicFilterPerSharedSubscriptionGroup?: number
  /**
   * 自动订阅规则条数限制
   */
  AutoSubscriptionPolicyLimit?: number
  /**
   * 单条自动订阅规则TopicFilter数限制
   */
  MaxTopicFilterPerAutoSubscriptionPolicy?: number
}

/**
 * DescribeInstanceList返回参数结构体
 */
export interface DescribeInstanceListResponse {
  /**
   * 查询总数
   */
  TotalCount?: number
  /**
   * 实例列表
   */
  Data?: Array<MQTTInstanceItem>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ApplyRegistrationCode返回参数结构体
 */
export interface ApplyRegistrationCodeResponse {
  /**
   * 集群ID
   */
  InstanceId?: string
  /**
   * 注册码
   */
  RegistrationCode?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyInstance返回参数结构体
 */
export interface ModifyInstanceResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateHttpAuthenticator返回参数结构体
 */
export interface CreateHttpAuthenticatorResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * MQTT消息
 */
export interface MQTTMessage {
  /**
   * 消息id
   */
  MessageId?: string
  /**
   * 消息发送的客户端Id
   */
  ClientId?: string
  /**
   * 消息服务质量等级
   */
  Qos?: string
  /**
   * 消息在服务端的存储时间，毫秒级时间戳
   */
  StoreTimestamp?: number
  /**
   * 源topic
   */
  OriginTopic?: string
}

/**
 * 消息记录
 */
export interface MQTTMessageItem {
  /**
   * 消息ID
   */
  MsgId?: string
  /**
   * 消息tag
   */
  Tags?: string
  /**
   * 消息key
   */
  Keys?: string
  /**
   * 客户端地址
   */
  ProducerAddr?: string
  /**
   * 消息发送时间，格式 日期时间：YYYY-MM-DD hh:mm:ss
   */
  ProduceTime?: string
  /**
   * 死信重发次数
   * @deprecated
   */
  DeadLetterResendTimes?: number
  /**
   * 死信重发成功次数
   * @deprecated
   */
  DeadLetterResendSuccessTimes?: number
  /**
   * 子topic
   * @deprecated
   */
  SubTopic?: string
  /**
   * 消息质量等级
0：至多一次
1：至少一次
2：精确一次
   */
  Qos?: string
}

/**
 * ModifyJWKSAuthenticator返回参数结构体
 */
export interface ModifyJWKSAuthenticatorResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteDeviceIdentity返回参数结构体
 */
export interface DeleteDeviceIdentityResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateInsPublicEndpoint返回参数结构体
 */
export interface CreateInsPublicEndpointResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateUser返回参数结构体
 */
export interface CreateUserResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateAuthorizationPolicy请求参数结构体
 */
export interface CreateAuthorizationPolicyRequest {
  /**
   * 腾讯云MQTT实例ID，从 [DescribeInstanceList](https://cloud.tencent.com/document/api/1778/111029)接口或控制台获得。
   */
  InstanceId: string
  /**
   * 策略名称，不能为空，3-64个字符，支持中文、字母、数字、“-”及“_”。
   */
  PolicyName: string
  /**
   * 策略版本,默认为1，当前仅支持1
   */
  PolicyVersion: number
  /**
   * 策略优先级，越小越优先，不能重复，优先级ID越小表示策略越优先检查生效。可参考 [数据面授权策略说明](https://cloud.tencent.com/document/product/1778/109715)。
   */
  Priority: number
  /**
   * 决策：
allow：允许符合该策略的设备的访问请求。
deny：拒绝覆盖该策略的设备的访问请求。
可参考 [数据面授权策略说明](https://cloud.tencent.com/document/product/1778/109715)。
   */
  Effect: string
  /**
   * 操作,支持多选，多个操作用英文逗号隔开。可参考 [数据面授权策略说明](https://cloud.tencent.com/document/product/1778/109715)。
connect：连接
pub：发布
sub：订阅
   */
  Actions: string
  /**
   * 条件-保留消息，可参考 [数据面授权策略说明](https://cloud.tencent.com/document/product/1778/109715)。
1,匹配保留消息；
2,匹配非保留消息，
3.匹配保留和非保留消息
   */
  Retain: number
  /**
   * 条件：服务质量
0：最多一次
1：最少一次
2：精确一次
可参考 [数据面授权策略说明](https://cloud.tencent.com/document/product/1778/109715)。
   */
  Qos: string
  /**
   * 资源，需要匹配的订阅，支持配置多条匹配规则，多个用英文逗号隔开。可参考 [数据面授权策略说明](https://cloud.tencent.com/document/product/1778/109715)。

   */
  Resources?: string
  /**
   * 条件-用户名
   */
  Username?: string
  /**
   * 条件：客户端ID，支持正则
   */
  ClientId?: string
  /**
   * 条件：客户端IP地址，支持IP或者CIDR，可参考 [数据面授权策略说明](https://cloud.tencent.com/document/product/1778/109715)。
   */
  Ip?: string
  /**
   * 备注信息，最长 128 字符
   */
  Remark?: string
}

/**
 * PublishMessage返回参数结构体
 */
export interface PublishMessageResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeAuthenticator返回参数结构体
 */
export interface DescribeAuthenticatorResponse {
  /**
   * 集群认证器列表
   */
  Authenticators?: Array<MQTTAuthenticatorItem>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeactivateCaCertificate返回参数结构体
 */
export interface DeactivateCaCertificateResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteCaCertificate请求参数结构体
 */
export interface DeleteCaCertificateRequest {
  /**
   * 实例ID，从 [DescribeInstanceList](https://cloud.tencent.com/document/api/1778/111029)接口或控制台获得。
   */
  InstanceId: string
  /**
   * CA证书序列号，可以从 [DescribeCaCertificates](https://cloud.tencent.com/document/api/1778/116206)接口、控制台、证书文件中获得。
   */
  CaSn: string
}

/**
 * DeleteDeviceCertificate请求参数结构体
 */
export interface DeleteDeviceCertificateRequest {
  /**
   * 集群id
   */
  InstanceId: string
  /**
   * 设备证书序列号
   */
  DeviceCertificateSn: string
}

/**
 * DescribeMessageByTopic请求参数结构体
 */
export interface DescribeMessageByTopicRequest {
  /**
   * 腾讯云MQTT实例ID，从 [DescribeInstanceList](https://cloud.tencent.com/document/api/1778/111029)接口或控制台获得。
   */
  InstanceId: string
  /**
   * home/room
   */
  Topic: string
  /**
   * 开始时间，毫秒级时间戳 。
   */
  StartTime: number
  /**
   * 查询消息条数，最大1024，默认100.
   */
  MaxNumber?: number
}

/**
 * DescribeUserList请求参数结构体
 */
export interface DescribeUserListRequest {
  /**
   * 实例ID，从 [DescribeInstanceList](https://cloud.tencent.com/document/api/1778/111029)接口或控制台获得。
   */
  InstanceId: string
  /**
   * 查询条件列表支持字段
Username：按照【用户名】进行过滤，支持模糊过滤，类型：String
   */
  Filters?: Array<Filter>
  /**
   * 查询起始位置，默认值0
   */
  Offset?: number
  /**
   * 查询结果限制数量，默认值20，最大值100
   */
  Limit?: number
}

/**
 * DeleteUser返回参数结构体
 */
export interface DeleteUserResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ActivateCaCertificate返回参数结构体
 */
export interface ActivateCaCertificateResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteDeviceCertificate返回参数结构体
 */
export interface DeleteDeviceCertificateResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeMessageByTopic返回参数结构体
 */
export interface DescribeMessageByTopicResponse {
  /**
   * 消息列表
   */
  Data?: Array<MQTTMessage>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteInstance返回参数结构体
 */
export interface DeleteInstanceResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeProductSKUList返回参数结构体
 */
export interface DescribeProductSKUListResponse {
  /**
   * 查询总数
   */
  TotalCount?: number
  /**
   * mqtt商品配置信息
   */
  MQTTProductSkuList?: Array<ProductSkuItem>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateJWKSAuthenticator请求参数结构体
 */
export interface CreateJWKSAuthenticatorRequest {
  /**
   * 腾讯云MQTT实例ID，从 [DescribeInstanceList](https://cloud.tencent.com/document/api/1778/111029)接口或控制台获得。
   */
  InstanceId: string
  /**
   * JWKS服务地址，（Text字段和Endpoint字段必须选择一个填写）
   */
  Endpoint?: string
  /**
   * 认证文本刷新间隔时间，单位：秒，最小值60，默认值60，最大值1000。填写认证服务器地址（Endpoint）时生效。
   */
  RefreshInterval?: number
  /**
   * jwks文本，（Text字段和Endpoint字段必须选择一个填写）
   */
  Text?: string
  /**
   * 认证器是否开启：open-启用；close-关闭，默认open-启用
   */
  Status?: string
  /**
   * 说明，不能超过 128 个字符
   */
  Remark?: string
  /**
   * 认证字段；
username-对应 MQTT CONNECT Packet 中 username 字段，
password-对应 MQTT CONNECT Packet 中 password 字段。

默认username
   */
  From?: string
}

/**
 * DescribeTopic返回参数结构体
 */
export interface DescribeTopicResponse {
  /**
   * 实例ID
   */
  InstanceId?: string
  /**
   * 主题名称
   */
  Topic?: string
  /**
   * 备注
   */
  Remark?: string
  /**
   * 创建时间，秒为单位
   */
  CreatedTime?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateJWKSAuthenticator返回参数结构体
 */
export interface CreateJWKSAuthenticatorResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyHttpAuthenticator返回参数结构体
 */
export interface ModifyHttpAuthenticatorResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeAuthorizationPolicies返回参数结构体
 */
export interface DescribeAuthorizationPoliciesResponse {
  /**
   * 规则
   */
  Data?: Array<AuthorizationPolicyItem>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateTopic请求参数结构体
 */
export interface CreateTopicRequest {
  /**
   * 腾讯云MQTT实例ID，从 [DescribeInstanceList](https://cloud.tencent.com/document/api/1778/111029)接口或控制台获得。
   */
  InstanceId: string
  /**
   * 主题，不能为空，只能包含字母、数字、“-”及“_”，3-100 字符。
   */
  Topic: string
  /**
   * 备注，最长 128 字符
   */
  Remark?: string
}

/**
 * DeleteCaCertificate返回参数结构体
 */
export interface DeleteCaCertificateResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 标签过滤器
 */
export interface TagFilter {
  /**
   * 标签键名称
   */
  TagKey?: string
  /**
   * 标签键名称
   */
  TagValues?: Array<string>
}

/**
 * DescribeMessageDetails返回参数结构体
 */
export interface DescribeMessageDetailsResponse {
  /**
   * 消息体
   */
  Body?: string
  /**
   * 用户自定义属性
   */
  UserProperties?: Array<UserProperty>
  /**
   * 消息存储时间，毫秒级时间戳。
   */
  StoreTimestamp?: number
  /**
   * 消息ID
   */
  MessageId?: string
  /**
   * 生产者地址
   */
  ClientId?: string
  /**
   * Topic
   */
  Qos?: string
  /**
   * 源topic
   */
  OriginTopic?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeUserList返回参数结构体
 */
export interface DescribeUserListResponse {
  /**
   * 查询总数
   */
  TotalCount?: number
  /**
   * 角色信息列表
   */
  Data?: Array<MQTTUserItem>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyTopic返回参数结构体
 */
export interface ModifyTopicResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeactivateDeviceCertificate返回参数结构体
 */
export interface DeactivateDeviceCertificateResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * MQTT集群用户信息
 */
export interface MQTTUserItem {
  /**
   * 用户名
   */
  Username?: string
  /**
   * 密码
   */
  Password?: string
  /**
   * 备注信息
   */
  Remark?: string
  /**
   * 创建时间，毫秒级时间戳 。
   */
  CreatedTime?: number
  /**
   * 修改时间，毫秒级时间戳 。
   */
  ModifiedTime?: number
}

/**
 * ActivateCaCertificate请求参数结构体
 */
export interface ActivateCaCertificateRequest {
  /**
   * 腾讯云MQTT实例ID，从 [DescribeInstanceList](https://cloud.tencent.com/document/api/1778/111029)接口或控制台获得。
   */
  InstanceId: string
  /**
   * CA证书的SN序列号，可以从 [DescribeCaCertificates](https://cloud.tencent.com/document/api/1778/116206)接口、控制台、证书文件中获得。
   */
  CaSn: string
}

/**
 * HTTP 认证器body
 */
export interface BodyItem {
  /**
   * body key
   */
  Key: string
  /**
   * body key
   */
  Value: string
}

/**
 * ActivateDeviceCertificate返回参数结构体
 */
export interface ActivateDeviceCertificateResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeTopic请求参数结构体
 */
export interface DescribeTopicRequest {
  /**
   * 实例ID
   */
  InstanceId: string
  /**
   * 主题
   */
  Topic: string
}

/**
 * PublishMessage请求参数结构体
 */
export interface PublishMessageRequest {
  /**
   * 腾讯云MQTT实例ID，从 [DescribeInstanceList](https://cloud.tencent.com/document/api/1778/111029)接口或控制台获得。
   */
  InstanceId: string
  /**
   * 消息负载 Payload，是消息的实际内容，需要按 encoding 指定的编码方式进行编码
   */
  Payload: string
  /**
   * 消息目的主题，该参数与 TargetClientId 二选一
   */
  TargetTopic?: string
  /**
   * 消息目的客户端 ID，该参数与 TargetTopic 二选一
   */
  TargetClientId?: string
  /**
   * 消息 payload 编码，可选 plain 或 base64，默认为 plain（即不编码）
   */
  Encoding?: string
  /**
   * 消息的服务质量等级，默认为 1
QoS 0（至多一次）消息发送后，不保证接收方一定收到，也不要求接收方确认。
QoS 1（至少一次）消息至少被接收方成功接收一次，但可能重复。
QoS 2（恰好一次）消息确保被接收方接收且仅接收一次，无重复。
   */
  Qos?: number
  /**
   * 是否为保留消息，默认为 false，且仅支持发布到主题的消息设置为 true
   */
  Retain?: boolean
}

/**
 * AuthorizationPolicyItem
 */
export interface AuthorizationPolicyItem {
  /**
   * 策略规则ID
   */
  Id?: number
  /**
   * MQTT集群ID
   */
  InstanceId?: string
  /**
   * 策略规则名
   */
  PolicyName?: string
  /**
   * 规则语法版本，当前仅支持1，默认为1
   */
  Version?: number
  /**
   * 策略优先级，优先级ID越小表示策略越优先检查生效。可参考 [数据面授权策略说明](https://cloud.tencent.com/document/product/1778/109715)。
   */
  Priority?: number
  /**
   * 决策
allow：允许符合该策略的设备的访问请求。
deny：拒绝覆盖该策略的设备的访问请求。
可参考 [数据面授权策略说明](https://cloud.tencent.com/document/product/1778/109715)。
   */
  Effect?: string
  /**
   * 操作
connect：连接
pub：发布mqtt消息
sub：订阅mqtt消息
可参考 [数据面授权策略说明](https://cloud.tencent.com/document/product/1778/109715)。
   */
  Actions?: string
  /**
   * 资源，可参考 [数据面授权策略说明](https://cloud.tencent.com/document/product/1778/109715)。
   */
  Resources?: string
  /**
   * 条件-连接设备ID，可参考 [数据面授权策略说明](https://cloud.tencent.com/document/product/1778/109715)。
   */
  ClientId?: string
  /**
   * 条件-用户名，可参考 [数据面授权策略说明](https://cloud.tencent.com/document/product/1778/109715)。
   */
  Username?: string
  /**
   * 条件-客户端IP地址，可参考 [数据面授权策略说明](https://cloud.tencent.com/document/product/1778/109715)。
   */
  Ip?: string
  /**
   * 条件-服务质量，可参考 [数据面授权策略说明](https://cloud.tencent.com/document/product/1778/109715)。
   */
  Qos?: string
  /**
   * 条件-保留消息，可参考 [数据面授权策略说明](https://cloud.tencent.com/document/product/1778/109715)。
1：表示匹配retain消息
2：表示匹配非retain消息
3：表示匹配retain和非retain消息
   */
  Retain?: number
  /**
   * 备注，长度不超过128个字符。
   */
  Remark?: string
  /**
   * 创建时间。毫秒级时间戳 。
   */
  CreatedTime?: number
  /**
   * 更新时间。毫秒级时间戳 。
   */
  UpdateTime?: number
}

/**
 * DescribeClientList请求参数结构体
 */
export interface DescribeClientListRequest {
  /**
   * 腾讯云MQTT实例ID，从 [DescribeInstanceList](https://cloud.tencent.com/document/api/1778/111029)接口或控制台获得。
   */
  InstanceId: string
  /**
   * 客户端ID
   */
  ClientId?: string
  /**
   * 客户端数量限制,最大1024，默认1024
   */
  Number?: string
}

/**
 * DeleteInsPublicEndpoint返回参数结构体
 */
export interface DeleteInsPublicEndpointResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * MQTTEndpoint
 */
export interface MQTTEndpointItem {
  /**
   * 类型
   */
  Type?: string
  /**
   * 接入点
   */
  Url?: string
  /**
   * vpc信息
   */
  VpcId?: string
  /**
   * 子网信息
   */
  SubnetId?: string
  /**
   * 主机
   */
  Host?: string
  /**
   * 端口
   */
  Port?: number
  /**
   * 接入点ip
   */
  Ip?: string
}

/**
 * 设备标识列表
 */
export interface DeviceIdentityItem {
  /**
   * 集群id
   */
  InstanceId?: string
  /**
   * 设备id
   */
  DeviceId?: string
  /**
   * 1:ENABLED-可用2:DISABLE-不可用
   */
  Status?: number
  /**
   * 主要签名key，不传则由系统自动生成
   */
  PrimaryKey?: string
  /**
   * 次要签名key，不传则由系统自动生成
   */
  SecondaryKey?: string
  /**
   * 创建时间
   */
  CreatedTime?: number
  /**
   * 传播属性列表
   */
  PropagatingProperties?: Array<PropagatingProperty>
}

/**
 * DescribeInsVPCEndpoints请求参数结构体
 */
export interface DescribeInsVPCEndpointsRequest {
  /**
   * 腾讯云MQTT实例ID，从 [DescribeInstanceList](https://cloud.tencent.com/document/api/1778/111029)接口或控制台获得。
   */
  InstanceId: string
}

/**
 * DescribeTopicList请求参数结构体
 */
export interface DescribeTopicListRequest {
  /**
   * 腾讯云MQTT实例ID，从 [DescribeInstanceList](https://cloud.tencent.com/document/api/1778/111029)接口或控制台获得。
   */
  InstanceId: string
  /**
   * 查询条件列表:
支持TopicName模糊查询
   */
  Filters?: Array<Filter>
  /**
   * 查询起始位置，默认0。
   */
  Offset?: number
  /**
   * 查询结果限制数量，默认20，最大20
   */
  Limit?: number
}

/**
 * CreateTopic返回参数结构体
 */
export interface CreateTopicResponse {
  /**
   * 实例ID
   */
  InstanceId?: string
  /**
   * 主题
   */
  Topic?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * RevokedDeviceCertificate请求参数结构体
 */
export interface RevokedDeviceCertificateRequest {
  /**
   * 集群id
   */
  InstanceId: string
  /**
   * 设备证书序列号
   */
  DeviceCertificateSn: string
}

/**
 * ModifyInsPublicEndpoint返回参数结构体
 */
export interface ModifyInsPublicEndpointResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateInstance请求参数结构体
 */
export interface CreateInstanceRequest {
  /**
   * 实例类型，需要和SkuCode保持对应关系，可参考 [获取MQTT产品售卖规格](https://cloud.tencent.com/document/api/1778/116232) 接口获取。
BASIC 基础版
PRO  专业版
PLATINUM 铂金版

   */
  InstanceType: string
  /**
   * 集群名称不能为空, 3-64个字符，只能包含数字、字母、“-”和“_”。
   */
  Name: string
  /**
   * 商品规格，需要和InstanceType保持对应关系，可参考 [获取MQTT产品售卖规格](https://cloud.tencent.com/document/api/1778/116232) 接口获取。
   */
  SkuCode: string
  /**
   * 备注信息，最长 128 字符
   */
  Remark?: string
  /**
   * 标签列表
   */
  TagList?: Array<Tag>
  /**
   * 实例绑定的VPC信息，需要传当前用户下可用的VPC和SUBNET
   */
  VpcList?: Array<VpcInfo>
  /**
   * 是否开启公网，默认false（关闭）
   */
  EnablePublic?: boolean
  /**
   * 公网带宽（单位：Mbps），EnablePublic 为True时，该字段必须填写且大于0.
   */
  Bandwidth?: number
  /**
   * 公网访问白名单，不传表示拒绝所有IP网络访问。
   */
  IpRules?: Array<IpRule>
  /**
   * 是否自动续费（0: 不自动续费；1: 自动续费），仅购买预付费集群时生效。默认1:自动续费
   */
  RenewFlag?: number
  /**
   * 购买时长（单位：月），购买预付费集群时生效，默认1m（月）。可选范围：1~12、24、36、48、60；
   */
  TimeSpan?: number
  /**
   * 付费模式（0: 后付费；1: 预付费），默认0（后付费）。
   */
  PayMode?: number
}

/**
 * DescribeAuthenticator请求参数结构体
 */
export interface DescribeAuthenticatorRequest {
  /**
   * 腾讯云MQTT实例ID，从 [DescribeInstanceList](https://cloud.tencent.com/document/api/1778/111029)接口或控制台获得。
   */
  InstanceId: string
  /**
   * 认证器类型:
JWT：JWT认证器
JWKS：JWKS认证器
HTTP：HTTP认证器
   */
  Type?: string
}

/**
 * RegisterCaCertificate请求参数结构体
 */
export interface RegisterCaCertificateRequest {
  /**
   * 腾讯云MQTT实例ID，从 [DescribeInstanceList](https://cloud.tencent.com/document/api/1778/111029)接口或控制台获得。
   */
  InstanceId: string
  /**
   * CA证书内容，自签CA可参考 [自定义 X.509 证书实现 “一机一证”](https://cloud.tencent.com/document/product/1778/114817) 签发自签CA
   */
  CaCertificate: string
  /**
   * 验证证书内容，可参考 [自定义 X.509 证书实现 “一机一证”](https://cloud.tencent.com/document/product/1778/114817) 手动注册CA证书章节
   */
  VerificationCertificate: string
  /**
   * 证书格式，不传默认PEM格式，当前仅支持PEM格式
   */
  Format?: string
  /**
   * 证书状态，不传默认ACTIVE状态
    ACTIVE：激活
    INACTIVE：未激活
   */
  Status?: string
}

/**
 * CreateAuthorizationPolicy返回参数结构体
 */
export interface CreateAuthorizationPolicyResponse {
  /**
   * 集群Id
   */
  InstanceId?: string
  /**
   * 策略id
   */
  Id?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateInsPublicEndpoint请求参数结构体
 */
export interface CreateInsPublicEndpointRequest {
  /**
   * 腾讯云MQTT实例ID，从 [DescribeInstanceList](https://cloud.tencent.com/document/api/1778/111029)接口或控制台获得。
   */
  InstanceId: string
  /**
   * 带宽,单位Mbps
   */
  Bandwidth: number
  /**
   * 公网访问规则
   */
  Rules?: Array<PublicAccessRule>
}

/**
 * RegisterDeviceCertificate请求参数结构体
 */
export interface RegisterDeviceCertificateRequest {
  /**
   * 腾讯云MQTT实例ID，从 [DescribeInstanceList](https://cloud.tencent.com/document/api/1778/111029)接口或控制台获得。
   */
  InstanceId: string
  /**
   * 设备证书内容，可参考 [使用 CA 证书生成服务端/客户端证书](https://cloud.tencent.com/document/product/1778/114817#aab79cc8-a148-412e-beb8-9c9e158eb944) 生成
   */
  DeviceCertificate: string
  /**
   * 关联的CA证书SN
   */
  CaSn: string
  /**
   * 客户端ID，需要关联该证书的客户端ID。根据实际业务使用填写
   */
  ClientId?: string
  /**
   * 证书格式，默认为PEM，当前仅支持PEM格式
   */
  Format?: string
  /**
   *  客户端证书状态，默认激活状态（ACTIVE）
ACTIVE：激活     
INACTIVE：未激活     
   */
  Status?: string
}

/**
 * 查询过滤器
 */
export interface Filter {
  /**
   * 过滤条件名
   */
  Name: string
  /**
   * 过滤条件的值
   */
  Values: Array<string>
}

/**
 * DeactivateDeviceCertificate请求参数结构体
 */
export interface DeactivateDeviceCertificateRequest {
  /**
   * 腾讯云MQTT实例ID，从 [DescribeInstanceList](https://cloud.tencent.com/document/api/1778/111029)接口或控制台获得。
   */
  InstanceId: string
  /**
   * 设备证书的SN序列号，可以从 [DescribeDeviceCertificates](https://cloud.tencent.com/document/api/1778/116206)接口、控制台、设备证书文件中获得。
   */
  DeviceCertificateSn: string
}

/**
 * DescribeDeviceCertificates返回参数结构体
 */
export interface DescribeDeviceCertificatesResponse {
  /**
   * 总数
   */
  TotalCount?: number
  /**
   * 设备证书列表
   */
  Data?: Array<DeviceCertificateItem>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyTopic请求参数结构体
 */
export interface ModifyTopicRequest {
  /**
   * 腾讯云MQTT实例ID，从 [DescribeInstanceList](https://cloud.tencent.com/document/api/1778/111029)接口或控制台获得。
   */
  InstanceId: string
  /**
   * 主题，不能为空，只能包含字母、数字、“-”及“_”，3-100 字符。
   */
  Topic: string
  /**
   * 备注信息，最长 128 字符
   */
  Remark?: string
}

/**
 * CreateUser请求参数结构体
 */
export interface CreateUserRequest {
  /**
   * 实例ID，从 [DescribeInstanceList](https://cloud.tencent.com/document/api/1778/111029)接口或控制台获得。
   */
  InstanceId: string
  /**
   * 用户名，不能为空，只支持数字 大小写字母 分隔符("_","-")，不能超过 32 个字符
   */
  Username: string
  /**
   * 密码，该字段为空时候则后端会默认生成。用户自定义密码时，不能为空，只支持数字 大小写字母 分隔符("_","-")，不能超过 64 个字符。
   */
  Password?: string
  /**
   * 备注，长度不超过128个字符。
   */
  Remark?: string
}

/**
 * DescribeInstance返回参数结构体
 */
export interface DescribeInstanceResponse {
  /**
   * 实例类型
BASIC 基础版
PRO  专业版
PLATINUM 铂金版
   */
  InstanceType?: string
  /**
   * 实例ID
   */
  InstanceId?: string
  /**
   * 实例名称
   */
  InstanceName?: string
  /**
   * 主题数量
   */
  TopicNum?: number
  /**
   * 实例最大主题数量
   */
  TopicNumLimit?: number
  /**
   * TPS限流值
   */
  TpsLimit?: number
  /**
   * 创建时间，秒为单位
   */
  CreatedTime?: number
  /**
   * 备注信息
   */
  Remark?: string
  /**
   * 实例状态， RUNNING, 运行中 MAINTAINING，维护中 ABNORMAL，异常 OVERDUE，欠费 DESTROYED，已删除 CREATING，创建中 MODIFYING，变配中 CREATE_FAILURE，创建失败 MODIFY_FAILURE，变配失败 DELETING，删除中
   */
  InstanceStatus?: string
  /**
   * 实例规格
   */
  SkuCode?: string
  /**
   * 单客户端最大订阅数
   */
  MaxSubscriptionPerClient?: number
  /**
   * 授权规则条数
   */
  AuthorizationPolicyLimit?: number
  /**
   * 客户端数量上限
   */
  ClientNumLimit?: number
  /**
   * 客户端证书注册方式：
JITP：自动注册
API：通过API手动注册
   */
  DeviceCertificateProvisionType?: string
  /**
   * 自动注册设备证书时是否自动激活
   */
  AutomaticActivation?: boolean
  /**
   * 是否自动续费。仅包年包月集群生效。 1:自动续费 0:非自动续费
   */
  RenewFlag?: number
  /**
   * 计费模式， POSTPAID，按量计费 PREPAID，包年包月
   */
  PayMode?: string
  /**
   * 到期时间，毫秒级时间戳
   */
  ExpiryTime?: number
  /**
   * 预销毁时间，毫秒级时间戳
   */
  DestroyTime?: number
  /**
   * TLS,单向认证    mTLS,双向认证    BYOC;一机一证
   */
  X509Mode?: string
  /**
   * 最大Ca配额
   */
  MaxCaNum?: number
  /**
   * 证书注册码
   */
  RegistrationCode?: string
  /**
   * 集群最大订阅数
   */
  MaxSubscription?: number
  /**
   * 授权策略开关
   */
  AuthorizationPolicy?: boolean
  /**
   * 共享订阅组数最大限制
   */
  SharedSubscriptionGroupLimit?: number
  /**
   * 单个共享订阅组TopicFilter数限制
   */
  MaxTopicFilterPerSharedSubscriptionGroup?: number
  /**
   * 自动订阅规则条数限制
   */
  AutoSubscriptionPolicyLimit?: number
  /**
   * 单条自动订阅规则TopicFilter数限制
   */
  MaxTopicFilterPerAutoSubscriptionPolicy?: number
  /**
   * 是否使用默认的服务端证书
   */
  UseDefaultServerCert?: boolean
  /**
   * 服务端CA最大数量
   */
  TrustedCaLimit?: number
  /**
   * 服务端证书最大数量
   */
  ServerCertLimit?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyInstanceCertBinding返回参数结构体
 */
export interface ModifyInstanceCertBindingResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeInsVPCEndpoints返回参数结构体
 */
export interface DescribeInsVPCEndpointsResponse {
  /**
   * 接入点
   */
  Endpoints?: Array<MQTTEndpointItem>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDeviceCertificate请求参数结构体
 */
export interface DescribeDeviceCertificateRequest {
  /**
   * 设备证书的SN序列号，用于唯一标识一个设备证书。
   */
  DeviceCertificateSn: string
  /**
   * 腾讯云MQTT实例ID，从 [DescribeInstanceList](https://cloud.tencent.com/document/api/1778/111029)接口或控制台获得。
   */
  InstanceId: string
}

/**
 * ModifyInsPublicEndpoint请求参数结构体
 */
export interface ModifyInsPublicEndpointRequest {
  /**
   * 腾讯云MQTT实例ID，从 [DescribeInstanceList](https://cloud.tencent.com/document/api/1778/111029)接口或控制台获得。
   */
  InstanceId: string
  /**
   * 带宽，单位：Mbps
   */
  Bandwidth: number
  /**
   * 公网访问规则
   */
  Rules: Array<PublicAccessRule>
}

/**
 * DeleteInsPublicEndpoint请求参数结构体
 */
export interface DeleteInsPublicEndpointRequest {
  /**
   * 腾讯云MQTT实例ID，从 [DescribeInstanceList](https://cloud.tencent.com/document/api/1778/111029)接口或控制台获得。
   */
  InstanceId: string
}

/**
 * DescribeInsPublicEndpoints请求参数结构体
 */
export interface DescribeInsPublicEndpointsRequest {
  /**
   * 腾讯云MQTT实例ID，从 [DescribeInstanceList](https://cloud.tencent.com/document/api/1778/111029)接口或控制台获得。
   */
  InstanceId: string
}

/**
 * CreateDeviceIdentity返回参数结构体
 */
export interface CreateDeviceIdentityResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDeviceIdentity返回参数结构体
 */
export interface DescribeDeviceIdentityResponse {
  /**
   * 集群id
   */
  InstanceId?: string
  /**
   * 设备id
   */
  DeviceId?: string
  /**
   * 1:ENABLED-可用
 2:DISABLE-不可用
   */
  Status?: number
  /**
   * 主要签名key
   */
  PrimaryKey?: string
  /**
   * 次要签名key
   */
  SecondaryKey?: string
  /**
   * 创建时间
   */
  CreatedTime?: number
  /**
   * 该设备id的传播属性
   */
  PropagatingProperties?: Array<PropagatingProperty>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeCaCertificate请求参数结构体
 */
export interface DescribeCaCertificateRequest {
  /**
   * CA证书的SN序列号，可以从 [DescribeCaCertificates](https://cloud.tencent.com/document/api/1778/116206)接口、控制台、证书文件中获得。
   */
  CaSn: string
  /**
   * 腾讯云MQTT实例ID，从 [DescribeInstanceList](https://cloud.tencent.com/document/api/1778/111029)接口或控制台获得。
   */
  InstanceId: string
}

/**
 * UpdateAuthorizationPolicyPriority请求参数结构体
 */
export interface UpdateAuthorizationPolicyPriorityRequest {
  /**
   * 腾讯云MQTT实例ID，从 [DescribeInstanceList](https://cloud.tencent.com/document/api/1778/111029)接口或控制台获得。
   */
  InstanceId: string
  /**
   * 策略ID和优先级
   */
  Priorities?: Array<AuthorizationPolicyPriority>
}

/**
 * CreateJWTAuthenticator返回参数结构体
 */
export interface CreateJWTAuthenticatorResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteAuthorizationPolicy请求参数结构体
 */
export interface DeleteAuthorizationPolicyRequest {
  /**
   * 腾讯云MQTT实例ID，从 [DescribeInstanceList](https://cloud.tencent.com/document/api/1778/111029)接口或控制台获得。
   */
  InstanceId: string
  /**
   * 授权策略规则id，可以从 [DescribeAuthorizationPolicies](https://cloud.tencent.com/document/api/1778/111074)接口获得。
   */
  Id: number
}

/**
 * DescribeDeviceIdentity请求参数结构体
 */
export interface DescribeDeviceIdentityRequest {
  /**
   * 集群id
   */
  InstanceId: string
  /**
   * 设备id
   */
  DeviceId: string
}

/**
 * ModifyDeviceIdentity请求参数结构体
 */
export interface ModifyDeviceIdentityRequest {
  /**
   * 腾讯云MQTT实例ID，从 [DescribeInstanceList](https://cloud.tencent.com/document/api/1778/111029)接口或控制台获得。
   */
  InstanceId: string
  /**
   * 设备id
   */
  DeviceId: string
  /**
   * 1:ENABLED-可用
2:DISABLE-不可用
   */
  Status?: string
  /**
   * 主要签名key，需要Base64编码。
   */
  PrimaryKey?: string
  /**
   * 次要签名key，需要Base64编码。
   */
  SecondaryKey?: string
  /**
   * 该设备id的传播属性设置
   */
  PropagatingProperties?: Array<PropagatingProperty>
}

/**
 * DescribeAuthorizationPolicies请求参数结构体
 */
export interface DescribeAuthorizationPoliciesRequest {
  /**
   * 腾讯云MQTT实例ID，从 [DescribeInstanceList](https://cloud.tencent.com/document/api/1778/111029)接口或控制台获得。
   */
  InstanceId?: string
}

/**
 * RevokedDeviceCertificate返回参数结构体
 */
export interface RevokedDeviceCertificateResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 传播属性结构
 */
export interface PropagatingProperty {
  /**
   * 传播属性key
   */
  Key: string
  /**
   * 传播属性value
   */
  Value: string
}

/**
 * CreateHttpAuthenticator请求参数结构体
 */
export interface CreateHttpAuthenticatorRequest {
  /**
   * 腾讯云MQTT实例ID，从 [DescribeInstanceList](https://cloud.tencent.com/document/api/1778/111029)接口或控制台获得。
   */
  InstanceId: string
  /**
   * jwks服务地址
   */
  Endpoint: string
  /**
   * 最大并发连接数，默认8，范围：1-10
   */
  Concurrency?: number
  /**
   * 网络请求方法 GET 或 POST，默认POST
   */
  Method?: string
  /**
   * 认证器是否开启：open-启用；close-关闭，默认open-启用
   */
  Status?: string
  /**
   * 说明，最多支持128个字符。
   */
  Remark?: string
  /**
   * 连接超时时间，单位：秒，范围：1-30
   */
  ConnectTimeout?: number
  /**
   * 请求超时时间，单位：秒，范围：1-30
   */
  ReadTimeout?: number
  /**
   * 转发请求header
   */
  Header?: Array<HeaderItem>
  /**
   * 转发请求body
   */
  Body?: Array<BodyItem>
}

/**
 * DescribeProductSKUList请求参数结构体
 */
export type DescribeProductSKUListRequest = null

/**
 * DescribeSharedSubscriptionLag请求参数结构体
 */
export interface DescribeSharedSubscriptionLagRequest {
  /**
   * 集群id
   */
  InstanceId: string
  /**
   * 共享订阅表达式
   */
  SharedSubscription: string
}

/**
 * DescribeDeviceCertificate返回参数结构体
 */
export interface DescribeDeviceCertificateResponse {
  /**
   * 创建时间，毫秒级时间戳 。
   */
  CreatedTime?: number
  /**
   * 上次更新时间，毫秒级时间戳 。
   */
  UpdateTime?: number
  /**
   * 证书失效日期，毫秒级时间戳 。
   */
  NotAfterTime?: number
  /**
   * 上次激活时间，毫秒级时间戳 。
   */
  LastActivationTime?: number
  /**
   * 上次取消激活时间，毫秒级时间戳 。
   */
  LastInactivationTime?: number
  /**
   * 设备证书的状态
    ACTIVE：激活 
    INACTIVE：未激活
    REVOKED：吊销
    PENDING_ACTIVATION：注册待激活
   */
  Status?: string
  /**
   * Ca证书序列号
   */
  CaSn?: string
  /**
   * 设备证书序列号
   */
  DeviceCertificateSn?: string
  /**
   * 设备证书内容
   */
  DeviceCertificate?: string
  /**
   * 设备证书common name
   */
  DeviceCertificateCn?: string
  /**
   * 证书格式，当前仅支持PEM格式
   */
  Format?: string
  /**
   * 客户端id
   */
  ClientId?: string
  /**
   * 证书来源    
API：手动注册   
JITP：自动注册
   */
  CertificateSource?: string
  /**
   * 证书生效开始时间，毫秒级时间戳 。
   */
  NotBeforeTime?: number
  /**
   * 组织单位
   */
  OrganizationalUnit?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeInstanceList请求参数结构体
 */
export interface DescribeInstanceListRequest {
  /**
   * 查询条件列表,支持以下字段
InstanceName：集群名模糊搜索
InstanceId：集群id精确搜索
InstanceStatus：集群状态搜索（RUNNING-运行中，CREATING-创建中，MODIFYING-变配中，DELETING-删除中）
注意：配置TagFilters时该查询条件不生效。
   */
  Filters?: Array<Filter>
  /**
   * 查询起始位置，默认0
   */
  Offset?: number
  /**
   * 查询结果限制数量，默认20，最大100
   */
  Limit?: number
  /**
   * 标签过滤器
   */
  TagFilters?: Array<TagFilter>
}

/**
 * DeactivateCaCertificate请求参数结构体
 */
export interface DeactivateCaCertificateRequest {
  /**
   * 实例ID，从 [DescribeInstanceList](https://cloud.tencent.com/document/api/1778/111029)接口或控制台获得。
   */
  InstanceId: string
  /**
   * 证书序列号，可以从 [DescribeCaCertificates](https://cloud.tencent.com/document/api/1778/116206)接口、控制台、证书文件中获得。
   */
  CaSn: string
}

/**
 * CreateJWTAuthenticator请求参数结构体
 */
export interface CreateJWTAuthenticatorRequest {
  /**
   * 腾讯云MQTT实例ID，从 [DescribeInstanceList](https://cloud.tencent.com/document/api/1778/111029)接口或控制台获得。
   */
  InstanceId: string
  /**
   * 签名方式：hmac-based，public-key
   */
  Algorithm: string
  /**
   * 认证字段
password：对应 MQTT CONNECT Packet 中 password 字段，
username：对应 MQTT CONNECT Packet 中 username 字段
默认username

   */
  From: string
  /**
   * 密钥，Algorithm为hmac-based需要传递该字段。
   */
  Secret?: string
  /**
   * 公钥，Algorithm为public-key时需要传递该字段。
   */
  PublicKey?: string
  /**
   * 认证器是否开启：open-启用；close-关闭，默认：open-启用
   */
  Status?: string
  /**
   * 说明，不能超过 128 个字符。
   */
  Remark?: string
}

/**
 * DescribeCaCertificates请求参数结构体
 */
export interface DescribeCaCertificatesRequest {
  /**
   * 实例ID，从 [DescribeInstanceList](https://cloud.tencent.com/document/api/1778/111029)接口或控制台获得。
   */
  InstanceId: string
}

/**
 * 设备证书信息
 */
export interface DeviceCertificateItem {
  /**
   * 客户端id
   */
  ClientId?: string
  /**
   * 设备证书
   */
  DeviceCertificate?: string
  /**
   * 设备证书SN序列号，用于唯一标识一个设备证书
   */
  DeviceCertificateSn?: string
  /**
   * 设备证书Cn
   */
  DeviceCertificateCn?: string
  /**
   * 签发该证书的CA证书的序列号
   */
  CaSn?: string
  /**
   * 证书格式，当前仅支持PEM
   */
  Format?: string
  /**
   * 设备证书状态
    ACTIVE：激活
    INACTIVE：未激活
    REVOKED：吊销
    PENDING_ACTIVATION：注册待激活
   */
  Status?: string
  /**
   * 组织单位
   */
  OrganizationalUnit?: string
  /**
   * 上次激活时间，毫秒级时间戳 。
   */
  LastActivationTime?: number
  /**
   * 上次取消激活时间，毫秒级时间戳 。
   */
  LastInactivationTime?: number
  /**
   * 创建时间，毫秒级时间戳 。
   */
  CreatedTime?: number
  /**
   * 更新时间，毫秒级时间戳 。
   */
  UpdateTime?: number
  /**
   * 证书来源：
API, 手动注册   
JITP 自动注册
   */
  CertificateSource?: string
  /**
   * 证书失效日期，毫秒级时间戳 。
   */
  NotAfterTime?: number
  /**
   * 证书生效开始日期，毫秒级时间戳 。
   */
  NotBeforeTime?: number
}

/**
 * 订阅的UserProperty结构
 */
export interface SubscriptionUserProperty {
  /**
   * 订阅的UserProperty键
   */
  Key?: string
  /**
   * 订阅的UserProperty值
   */
  Value?: string
}

/**
 * MQTT客户端信息
 */
export interface MQTTClientInfo {
  /**
   * 客户端ID
   */
  ClientId?: string
  /**
   * 客户端网络地址
   */
  ClientAddress?: string
  /**
   * MQTT 协议版本
3：表示MQTT 3.1版本
4：表示 MQTT 3.1.1
5：表示MQTT 5.0协议
   */
  ProtocolVersion?: number
  /**
   * 保持连接时间，单位：秒
   */
  Keepalive?: number
  /**
   * 连接状态，CONNECTED 已连接，DISCONNECTED 未连接
   */
  ConnectionStatus?: string
  /**
   * 客户端创建时间，毫秒级时间戳 。
   */
  CreateTime?: number
  /**
   * 上次建立连接时间，毫秒级时间戳 。
   */
  ConnectTime?: number
  /**
   * 上次断开连接时间，仅对持久会话（cleanSession=false）并且客户端当前未连接时有意义，毫秒级时间戳 。
   */
  DisconnectTime?: number
  /**
   * 客户端的订阅列表
   */
  MQTTClientSubscriptions?: Array<MQTTClientSubscription>
}

/**
 * MQTT 主题详情
 */
export interface MQTTTopicItem {
  /**
   * 实例 ID
   */
  InstanceId?: string
  /**
   * 主题名称
   */
  Topic?: string
  /**
   * 主题描述
   */
  Remark?: string
}

/**
 * 价格标签信息
 */
export interface PriceTag {
  /**
   * 计价名称，表示规格的计费项项目分类，具体规格的计价名称可参考  [获取MQTT产品售卖规格](https://cloud.tencent.com/document/product/1778/116232) 接口的返回结果。
   */
  Name?: string
  /**
   * 计价类别，计价名称子类，具体规格的计价类别可参考  [获取MQTT产品售卖规格](https://cloud.tencent.com/document/product/1778/116232) 的返回结果。
   */
  Category?: string
  /**
   * 计费项标签，为计价名称（Name）下计价类别（Category）的子项目，表示一个具体的收费项。规格的计费项标签可参考 
 [获取MQTT产品售卖规格](https://cloud.tencent.com/document/product/1778/116232) 接口的返回结果。
   */
  Code?: string
  /**
   * 计费步长，表示该规格在 计价名称（Name）下的计价类别（Category）的计费项标签（Code）计费数量。具体规格该字段取值参考 [获取MQTT产品售卖规格](https://cloud.tencent.com/document/product/1778/116232)
   */
  Step?: number
}

/**
 * ModifyAuthorizationPolicy请求参数结构体
 */
export interface ModifyAuthorizationPolicyRequest {
  /**
   * 授权策略ID，从 [查询授权策略](https://cloud.tencent.com/document/product/1778/111074) 接口获取
   */
  Id: number
  /**
   * 腾讯云MQTT实例ID，从 [DescribeInstanceList](https://cloud.tencent.com/document/api/1778/111029)接口或控制台获得。

   */
  InstanceId: string
  /**
   * 策略名称，不能为空，3-64个字符，支持中文、字母、数字、“-”及“_”。
   */
  PolicyName?: string
  /**
   * 策略版本,默认为1，当前仅支持1
   */
  PolicyVersion?: number
  /**
   * 策略优先级，越小越优先，不能重复
   */
  Priority?: number
  /**
   * 决策：
allow 允许
deny 拒绝
   */
  Effect?: string
  /**
   * 操作,支持多选，多个操作用英文逗号隔开。可参考 [数据面授权策略说明](https://cloud.tencent.com/document/product/1778/109715)。
connect：连接
pub：发布
sub：订阅
   */
  Actions?: string
  /**
   * 资源，需要匹配的订阅，支持配置多条匹配规则，多个用英文逗号隔开。可参考 [数据面授权策略说明](https://cloud.tencent.com/document/product/1778/109715)。

   */
  Resources?: string
  /**
   * 条件-用户名
   */
  Username?: string
  /**
   * 条件-保留消息
1,匹配保留消息；
2,匹配非保留消息，
3.匹配保留和非保留消息
   */
  Retain?: number
  /**
   * 条件：客户端ID，支持正则
   */
  ClientId?: string
  /**
   * 条件：客户端IP地址，支持IP或者CIDR
   */
  Ip?: string
  /**
   * 条件：服务质量
0：最多一次
1：最少一次
2：精确一次
   */
  Qos?: string
  /**
   * 备注信息，最长 128 字符
   */
  Remark?: string
}

/**
 * DescribeTopicList返回参数结构体
 */
export interface DescribeTopicListResponse {
  /**
   * 查询总数
   */
  TotalCount?: number
  /**
   * 主题列表
   */
  Data?: Array<MQTTTopicItem>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteTopic返回参数结构体
 */
export interface DeleteTopicResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyInstanceCertBinding请求参数结构体
 */
export interface ModifyInstanceCertBindingRequest {
  /**
   * 腾讯云MQTT实例ID，从 [DescribeInstanceList](https://cloud.tencent.com/document/api/1778/111029)接口或控制台获得。
   */
  InstanceId: string
  /**
   * 加密通信方式
TLS：单向证书认证
mTLS：双向证书认证
BYOC：一设备一证书认证
   */
  X509Mode: string
  /**
   * 服务端证书id，从 [获取证书列表](https://cloud.tencent.com/document/api/400/41671) 或者腾讯云证书服务控制台获取。X509Mode为mTLS或BYOC时为必填。
   */
  SSLServerCertId?: string
  /**
   * CA证书id，从 [获取证书列表](https://cloud.tencent.com/document/api/400/41671) 或者腾讯云证书服务控制台获取。X509Mode为mTLS时为必填
   */
  SSLCaCertId?: string
  /**
   * 设备证书注册类型：
JITP：自动注册；
API：手动注册
默认值：API
   */
  DeviceCertificateProvisionType?: string
  /**
   * 是否自动激活，默认为false
   */
  AutomaticActivation?: boolean
}

/**
 * ModifyHttpAuthenticator请求参数结构体
 */
export interface ModifyHttpAuthenticatorRequest {
  /**
   * 腾讯云MQTT实例ID，从 [DescribeInstanceList](https://cloud.tencent.com/document/api/1778/111029)接口或控制台获得。
   */
  InstanceId: string
  /**
   * 服务地址
   */
  Endpoint?: string
  /**
   * 认证器状态：open-启用；close-关闭
   */
  Status?: string
  /**
   * 最大并发连接数，默认8，范围：1-10
   */
  Concurrency?: number
  /**
   * 连接超时时间，单位：秒，范围：1-30
   */
  ConnectTimeout?: number
  /**
   * 请求超时时间，单位：秒，范围：1-30
   */
  ReadTimeout?: number
  /**
   * 说明，最多支持128个字符。
   */
  Remark?: string
  /**
   * 请求方法，GET 或者 POST
   */
  Method?: string
  /**
   * 请求header
   */
  Header?: Array<HeaderItem>
  /**
   * 请求body
   */
  Body?: Array<BodyItem>
}

/**
 * DescribeInstance请求参数结构体
 */
export interface DescribeInstanceRequest {
  /**
   * 腾讯云MQTT实例ID，从 [DescribeInstanceList](https://cloud.tencent.com/document/api/1778/111029)接口或控制台获得。
   */
  InstanceId: string
}

/**
 * DescribeCaCertificates返回参数结构体
 */
export interface DescribeCaCertificatesResponse {
  /**
   * ca证书列表
   */
  Data?: Array<CaCertificateItem>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyUser请求参数结构体
 */
export interface ModifyUserRequest {
  /**
   * 实例ID，从 [DescribeInstanceList](https://cloud.tencent.com/document/api/1778/111029)接口或控制台获得。
   */
  InstanceId: string
  /**
   * 用户名
   */
  Username: string
  /**
   * 备注，长度不超过128个字符。
   */
  Remark?: string
}

/**
 * DeleteAuthenticator返回参数结构体
 */
export interface DeleteAuthenticatorResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDeviceIdentities返回参数结构体
 */
export interface DescribeDeviceIdentitiesResponse {
  /**
   * 返回的设备标识列表
   */
  Data?: Array<DeviceIdentityItem>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * IP规则
 */
export interface IpRule {
  /**
   * IP地址
   */
  Ip: string
  /**
   * 当前仅支持允许，默认允许。
   */
  Allow: boolean
  /**
   * 备注信息
   */
  Remark: string
}
