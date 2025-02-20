/*
 * Copyright (c) 2018 THL A29 Limited, a Tencent company. All Rights Reserved.
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
   * common name
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
   * 证书格式
   */
  Format?: string
  /**
   * 验证证书内容
   */
  VerificationCertificate?: string
  /**
   * ca状态
注意：此字段可能返回 null，表示取不到有效值。
   */
  Status?: string
  /**
   * 上次激活时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  LastActivationTime?: number
  /**
   * 创建时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  CreatedTime?: number
  /**
   * 预销毁时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  UpdateTime?: number
  /**
   * 上次去激活时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  LastInactivationTime?: number
  /**
   * Ca证书颁发者CN
注意：此字段可能返回 null，表示取不到有效值。
   */
  CaIssuerCn?: string
  /**
   * 生效时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  NotBeforeTime?: number
  /**
   * 失效时间
注意：此字段可能返回 null，表示取不到有效值。
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
   * 集群id
   */
  InstanceId: string
  /**
   * 设备证书序列号
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
   * 集群id
   */
  InstanceId: string
}

/**
 * ModifyJWTAuthenticator请求参数结构体
 */
export interface ModifyJWTAuthenticatorRequest {
  /**
   * 实例ID
   */
  InstanceId: string
  /**
   * 算法：hmac-based，public-key
   */
  Algorithm?: string
  /**
   * 设备连接时传递jwt的key；
username-使用用户名字段传递；
password-使用密码字段传递
   */
  From?: string
  /**
   * 密码
   */
  Secret?: string
  /**
   * 公钥
   */
  PublicKey?: string
  /**
   * JSKS文本
   */
  Text?: string
  /**
   * 说明
   */
  Remark?: string
}

/**
 * 策略规则优先级
 */
export interface AuthorizationPolicyPriority {
  /**
   * 策略id
注意：此字段可能返回 null，表示取不到有效值。
   */
  Id: number
  /**
   * 优先级
注意：此字段可能返回 null，表示取不到有效值。
   */
  Priority: number
}

/**
 * ModifyInstance请求参数结构体
 */
export interface ModifyInstanceRequest {
  /**
   * 实例ID
   */
  InstanceId: string
  /**
   * 要修改实例名称
   */
  Name?: string
  /**
   * 要修改的备注信息
   */
  Remark?: string
  /**
   * 要变更的配置规格
   */
  SkuCode?: string
  /**
   * 客户端证书注册方式：
JITP：自动注册
API：手动通过API注册
   */
  DeviceCertificateProvisionType?: string
  /**
   * 自动注册证书是否自动激活
   */
  AutomaticActivation?: boolean
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
   * 创建时间
   */
  CreatedTime?: number
  /**
   * 上次更新时间
   */
  UpdateTime?: number
  /**
   * 失效日期
   */
  NotAfterTime?: number
  /**
   * 上次激活时间
   */
  LastActivationTime?: number
  /**
   * 上次吊销时间
   */
  LastInactivationTime?: number
  /**
   * 证书状态
   */
  Status?: string
  /**
   * 证书序列号
   */
  CaSn?: string
  /**
   * common name
   */
  CaCn?: string
  /**
   * 证书内容
   */
  CaCertificate?: string
  /**
   * 证书格式
   */
  Format?: string
  /**
   * Ca证书颁发者CN
注意：此字段可能返回 null，表示取不到有效值。
   */
  CaIssuerCn?: string
  /**
   * 生效开始时间
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
   * 集群ID
   */
  InstanceId: string
  /**
   * 过滤器支持ClientId、CaSn、DeviceCertificateSn、Status搜索
   */
  Filters?: Array<Filter>
  /**
   * 分页limit
   */
  Limit?: number
  /**
   * 分页偏移量
   */
  Offset?: number
  /**
   * CREATE_TIME_DESC, 创建时间降序
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
   * 实例ID
   */
  InstanceId: string
  /**
   * 认证器类型:
JWT：JWT认证器
JWKS：JWKS认证器
BYOC：一端一证认证器
   */
  Type: string
}

/**
 * 公网访问安全规则
 */
export interface PublicAccessRule {
  /**
   * ip网段信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  IpRule: string
  /**
   * 允许或者拒绝
注意：此字段可能返回 null，表示取不到有效值。
   */
  Allow: boolean
  /**
   * 备注信息
注意：此字段可能返回 null，表示取不到有效值。
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
  VpcId: string
  /**
   * 子网ID
   */
  SubnetId: string
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
注意：此字段可能返回 null，表示取不到有效值。
   */
  InstanceType?: string
  /**
   * 规格代码
注意：此字段可能返回 null，表示取不到有效值。
   */
  SkuCode?: string
  /**
   * 是否售卖
注意：此字段可能返回 null，表示取不到有效值。
   */
  OnSale?: boolean
  /**
   * topic num限制
注意：此字段可能返回 null，表示取不到有效值。
   */
  TopicNumLimit?: number
  /**
   * tps
注意：此字段可能返回 null，表示取不到有效值。
   */
  TpsLimit?: number
  /**
   * 客户端连接数
注意：此字段可能返回 null，表示取不到有效值。
   */
  ClientNumLimit?: number
  /**
   * 单客户端最大订阅数
注意：此字段可能返回 null，表示取不到有效值。
   */
  MaxSubscriptionPerClient?: number
  /**
   * 授权规则条数
注意：此字段可能返回 null，表示取不到有效值。
   */
  AuthorizationPolicyLimit?: number
  /**
   * 计费项信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  PriceTags?: Array<PriceTag>
}

/**
 * ModifyJWKSAuthenticator请求参数结构体
 */
export interface ModifyJWKSAuthenticatorRequest {
  /**
   * 实例ID
   */
  InstanceId: string
  /**
   * 端点
   */
  Endpoint?: string
  /**
   * 认证器状态：open-启用；close-关闭
   */
  Status?: string
  /**
   * 刷新时间
   */
  RefreshInterval?: number
  /**
   * JSKS文本
   */
  Text?: string
  /**
   * 设备连接时传递jwt的key；username-使用用户名字段传递；password-使用密码字段传递
   */
  From?: string
  /**
   * 说明
   */
  Remark?: string
}

/**
 * RegisterCaCertificate返回参数结构体
 */
export interface RegisterCaCertificateResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * RegisterDeviceCertificate返回参数结构体
 */
export interface RegisterDeviceCertificateResponse {
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
   * 认证器类型: JWT：JWT认证器 JWKS：JWKS认证器 BYOC：一端一证认证器
注意：此字段可能返回 null，表示取不到有效值。
   */
  Type?: string
  /**
   * 认证器配置
注意：此字段可能返回 null，表示取不到有效值。
   */
  Config?: string
  /**
   * 认证器状态
注意：此字段可能返回 null，表示取不到有效值。
   */
  Status?: string
  /**
   * 创建时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  CreateTime?: number
  /**
   * 说明
注意：此字段可能返回 null，表示取不到有效值。
   */
  Remark?: string
}

/**
 * 标签数据
 */
export interface Tag {
  /**
   * 标签名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  TagKey: string
  /**
   * 标签值
注意：此字段可能返回 null，表示取不到有效值。
   */
  TagValue: string
}

/**
 * DescribeDeviceCertificate请求参数结构体
 */
export interface DescribeDeviceCertificateRequest {
  /**
   * 设备证书sn
   */
  DeviceCertificateSn: string
  /**
   * 集群id
   */
  InstanceId: string
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
   * 实例类型，
EXPERIMENT，体验版
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
DESTROYED，已删除
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
注意：此字段可能返回 null，表示取不到有效值。
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
注意：此字段可能返回 null，表示取不到有效值。
   */
  TpsLimit?: number
  /**
   * 创建时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  CreateTime?: number
  /**
   * 单客户端最大订阅数量
注意：此字段可能返回 null，表示取不到有效值。
   */
  MaxSubscriptionPerClient?: number
  /**
   * 客户端连接数上线
注意：此字段可能返回 null，表示取不到有效值。
   */
  ClientNumLimit?: number
  /**
   * 是否自动续费
注意：此字段可能返回 null，表示取不到有效值。
   */
  RenewFlag?: number
  /**
   * 计费模式， POSTPAID，按量计费 PREPAID，包年包月
注意：此字段可能返回 null，表示取不到有效值。
   */
  PayMode?: string
  /**
   * 到期时间，秒为单位
注意：此字段可能返回 null，表示取不到有效值。
   */
  ExpiryTime?: number
  /**
   * 预销毁时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  DestroyTime?: number
  /**
   * 授权规则条数限制
注意：此字段可能返回 null，表示取不到有效值。
   */
  AuthorizationPolicyLimit?: number
  /**
   * 最大ca配额
注意：此字段可能返回 null，表示取不到有效值。
   */
  MaxCaNum?: number
  /**
   * 最大订阅数
注意：此字段可能返回 null，表示取不到有效值。
   */
  MaxSubscription?: number
}

/**
 * DescribeInstanceList返回参数结构体
 */
export interface DescribeInstanceListResponse {
  /**
   * 查询总数
注意：此字段可能返回 null，表示取不到有效值。
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
 * ModifyInsPublicEndpoint返回参数结构体
 */
export interface ModifyInsPublicEndpointResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
   * 实例ID
   */
  InstanceId: string
  /**
   * 策略名称
   */
  PolicyName: string
  /**
   * 策略版本
   */
  PolicyVersion: number
  /**
   * 策略优先级，越小越优先
   */
  Priority: number
  /**
   * allow、deny
   */
  Effect: string
  /**
   * connect、pub、sub
   */
  Actions: string
  /**
   * 1,匹配保留消息；2,匹配非保留消息，3.匹配所有消息
   */
  Retain: number
  /**
   * 0、1、2
   */
  Qos: string
  /**
   * 资源
   */
  Resources?: string
  /**
   * 用户名
   */
  Username?: string
  /**
   * 客户端
   */
  ClientId?: string
  /**
   * IP地址
   */
  Ip?: string
  /**
   * 备注信息
   */
  Remark?: string
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
   * 集群id
   */
  InstanceId: string
  /**
   * 证书序列号
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
 * DescribeInsPublicEndpoints请求参数结构体
 */
export interface DescribeInsPublicEndpointsRequest {
  /**
   * 实例ID
   */
  InstanceId: string
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
注意：此字段可能返回 null，表示取不到有效值。
   */
  TotalCount?: number
  /**
   * mqtt商品配置信息
注意：此字段可能返回 null，表示取不到有效值。
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
   * 实例ID
   */
  InstanceId: string
  /**
   * jwks端点
   */
  Endpoint?: string
  /**
   * jwks刷新间隔,单位：秒
   */
  RefreshInterval?: number
  /**
   * jwks文本
   */
  Text?: string
  /**
   * 认证器是否开启：open-启用；close-关闭
   */
  Status?: string
  /**
   * 说明
   */
  Remark?: string
  /**
   * 设备连接时传递jwt的key；
username-使用用户名字段传递；
password-使用密码字段传递
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
   * 实例ID
   */
  InstanceId: string
  /**
   * 主题
   */
  Topic: string
  /**
   * 备注
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
 * DescribeUserList返回参数结构体
 */
export interface DescribeUserListResponse {
  /**
   * 查询总数
注意：此字段可能返回 null，表示取不到有效值。
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
   * 创建时间，秒为单位
   */
  CreatedTime?: number
  /**
   * 修改时间，秒为单位
   */
  ModifiedTime?: number
}

/**
 * ActivateCaCertificate请求参数结构体
 */
export interface ActivateCaCertificateRequest {
  /**
   * 集群id
   */
  InstanceId: string
  /**
   * 证书序列号
   */
  CaSn: string
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
 * UpdateAuthorizationPolicyPriority返回参数结构体
 */
export interface UpdateAuthorizationPolicyPriorityResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
注意：此字段可能返回 null，表示取不到有效值。
   */
  Type?: string
  /**
   * 接入点
注意：此字段可能返回 null，表示取不到有效值。
   */
  Url?: string
  /**
   * vpc信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  VpcId?: string
  /**
   * 子网信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  SubnetId?: string
  /**
   * 主机
注意：此字段可能返回 null，表示取不到有效值。
   */
  Host?: string
  /**
   * 端口
注意：此字段可能返回 null，表示取不到有效值。
   */
  Port?: number
  /**
   * 接入点ip
注意：此字段可能返回 null，表示取不到有效值。
   */
  Ip?: string
}

/**
 * DescribeTopicList请求参数结构体
 */
export interface DescribeTopicListRequest {
  /**
   * 实例ID
   */
  InstanceId: string
  /**
   * 查询条件列表:
支持TopicName模糊查询
   */
  Filters?: Array<Filter>
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
 * AuthorizationPolicyItem
 */
export interface AuthorizationPolicyItem {
  /**
   * 规则ID
   */
  Id?: number
  /**
   * 集群ID
   */
  InstanceId?: string
  /**
   * 规则名
注意：此字段可能返回 null，表示取不到有效值。
   */
  PolicyName?: string
  /**
   * 规则语法版本
注意：此字段可能返回 null，表示取不到有效值。
   */
  Version?: number
  /**
   * 越小越优先
注意：此字段可能返回 null，表示取不到有效值。
   */
  Priority?: number
  /**
   * allow/deny
注意：此字段可能返回 null，表示取不到有效值。
   */
  Effect?: string
  /**
   * connect、pub、sub
注意：此字段可能返回 null，表示取不到有效值。
   */
  Actions?: string
  /**
   * 资源
注意：此字段可能返回 null，表示取不到有效值。
   */
  Resources?: string
  /**
   * client
注意：此字段可能返回 null，表示取不到有效值。
   */
  ClientId?: string
  /**
   * 用户
注意：此字段可能返回 null，表示取不到有效值。
   */
  Username?: string
  /**
   * IP地址
注意：此字段可能返回 null，表示取不到有效值。
   */
  Ip?: string
  /**
   * 0，1，2
注意：此字段可能返回 null，表示取不到有效值。
   */
  Qos?: string
  /**
   * 1：表示匹配retain消息
2：表示匹配非retain消息
3：表示匹配retain和非retain消息
注意：此字段可能返回 null，表示取不到有效值。
   */
  Retain?: number
  /**
   * 描述
注意：此字段可能返回 null，表示取不到有效值。
   */
  Remark?: string
  /**
   * 1713164969433
   */
  CreatedTime?: number
  /**
   * 1713164969433
   */
  UpdateTime?: number
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
 * CreateAuthorizationPolicy返回参数结构体
 */
export interface CreateAuthorizationPolicyResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeAuthenticator请求参数结构体
 */
export interface DescribeAuthenticatorRequest {
  /**
   * 实例ID
   */
  InstanceId: string
  /**
   * 认证器类型: JWT：JWT认证器 JWKS：JWKS认证器 HTTP:HTTP认证器
   */
  Type?: string
}

/**
 * RegisterCaCertificate请求参数结构体
 */
export interface RegisterCaCertificateRequest {
  /**
   * 集群id
   */
  InstanceId: string
  /**
   * CA证书
   */
  CaCertificate: string
  /**
   * 验证证书
   */
  VerificationCertificate: string
  /**
   * 证书格式，不传默认PEM格式
   */
  Format?: string
  /**
   * 证书状态，不传默认ACTIVE状态
    ACTIVE,//激活
    INACTIVE,//未激活
    REVOKED,//吊销
    PENDING_ACTIVATION,//注册待激活
   */
  Status?: string
}

/**
 * CreateInstance请求参数结构体
 */
export interface CreateInstanceRequest {
  /**
   * 实例类型，
BASIC 基础版
PRO  专业版
   */
  InstanceType: string
  /**
   * 实例名称
   */
  Name: string
  /**
   * 商品规格，可用规格可通过接口DescribeProductSKUList查询
   */
  SkuCode: string
  /**
   * 备注信息
   */
  Remark?: string
  /**
   * 标签列表
   */
  TagList?: Array<Tag>
  /**
   * 实例绑定的VPC信息
   */
  VpcList?: Array<VpcInfo>
  /**
   * 是否开启公网
   */
  EnablePublic?: boolean
  /**
   * 公网带宽（单位：兆）
   */
  Bandwidth?: number
  /**
   * 公网访问白名单
   */
  IpRules?: Array<IpRule>
  /**
   * 是否自动续费（0: 不自动续费；1: 自动续费）
   */
  RenewFlag?: number
  /**
   * 购买时长（单位：月）
   */
  TimeSpan?: number
  /**
   * 付费模式（0: 后付费；1: 预付费）
   */
  PayMode?: number
}

/**
 * CreateInsPublicEndpoint请求参数结构体
 */
export interface CreateInsPublicEndpointRequest {
  /**
   * 实例ID
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
   * 集群id
   */
  InstanceId: string
  /**
   * 设备证书
   */
  DeviceCertificate: string
  /**
   * 关联的CA证书SN
   */
  CaSn: string
  /**
   * 客户端ID
   */
  ClientId?: string
  /**
   * 证书格式
   */
  Format?: string
  /**
   *     ACTIVE,//激活     INACTIVE,//未激活     REVOKED,//吊销     PENDING_ACTIVATION,//注册待激活
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
   * 集群id
   */
  InstanceId: string
  /**
   * 设备证书序列号
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
   * 设备证书
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
   * 实例ID
   */
  InstanceId: string
  /**
   * 主题
   */
  Topic: string
  /**
   * 备注信息
   */
  Remark?: string
}

/**
 * CreateUser请求参数结构体
 */
export interface CreateUserRequest {
  /**
   * 实例ID
   */
  InstanceId: string
  /**
   * 用户名
   */
  Username: string
  /**
   * 密码，该字段为空时候则后端会默认生成
   */
  Password?: string
  /**
   * 备注
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
   * 实例状态
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
   * 是否自动续费
   */
  RenewFlag?: number
  /**
   * 计费模式， POSTPAID，按量计费 PREPAID，包年包月
   */
  PayMode?: string
  /**
   * 到期时间，秒为单位
   */
  ExpiryTime?: number
  /**
   * 预销毁时间
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
 * DeleteInstance请求参数结构体
 */
export interface DeleteInstanceRequest {
  /**
   * 实例ID
   */
  InstanceId: string
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
   * 带宽
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
 * ModifyInsPublicEndpoint请求参数结构体
 */
export interface ModifyInsPublicEndpointRequest {
  /**
   * 实例ID
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
   * 实例ID
   */
  InstanceId: string
}

/**
 * DescribeUserList请求参数结构体
 */
export interface DescribeUserListRequest {
  /**
   * 实例ID
   */
  InstanceId: string
  /**
   * 查询条件列表支持字段
Username：Username模糊查询
   */
  Filters?: Array<Filter>
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
 * DescribeCaCertificate请求参数结构体
 */
export interface DescribeCaCertificateRequest {
  /**
   * ca证书sn
   */
  CaSn: string
  /**
   * 集群id
   */
  InstanceId: string
}

/**
 * UpdateAuthorizationPolicyPriority请求参数结构体
 */
export interface UpdateAuthorizationPolicyPriorityRequest {
  /**
   * 实例ID
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
   * 实例ID
   */
  InstanceId: string
  /**
   * 策略规则id
   */
  Id: number
}

/**
 * DescribeAuthorizationPolicies请求参数结构体
 */
export interface DescribeAuthorizationPoliciesRequest {
  /**
   * 集群ID
   */
  InstanceId?: string
}

/**
 * DescribeProductSKUList请求参数结构体
 */
export type DescribeProductSKUListRequest = null

/**
 * DescribeTopicList返回参数结构体
 */
export interface DescribeTopicListResponse {
  /**
   * 查询总数
注意：此字段可能返回 null，表示取不到有效值。
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
 * DescribeDeviceCertificate返回参数结构体
 */
export interface DescribeDeviceCertificateResponse {
  /**
   * 创建时间
   */
  CreatedTime?: number
  /**
   * 上次更新时间
   */
  UpdateTime?: number
  /**
   * 证书失效日期
   */
  NotAfterTime?: number
  /**
   * 上次激活时间
   */
  LastActivationTime?: number
  /**
   * 上次取消激活时间
   */
  LastInactivationTime?: number
  /**
   * 证书状态
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
   * 证书格式
   */
  Format?: string
  /**
   * 客户端id
注意：此字段可能返回 null，表示取不到有效值。
   */
  ClientId?: string
  /**
   *     API, 手动注册   
    JITP 自动注册
   */
  CertificateSource?: string
  /**
   * 证书生效开始时间
   */
  NotBeforeTime?: number
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
   * 查询条件列表,支持以下子弹
InstanceName：集群名模糊搜索
InstanceId：集群id精确搜索
InstanceStatus：集群状态搜索
   */
  Filters?: Array<Filter>
  /**
   * 查询起始位置
   */
  Offset?: number
  /**
   * 查询结果限制数量
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
   * 集群id
   */
  InstanceId: string
  /**
   * 证书序列号
   */
  CaSn: string
}

/**
 * CreateJWTAuthenticator请求参数结构体
 */
export interface CreateJWTAuthenticatorRequest {
  /**
   * 实例ID
   */
  InstanceId: string
  /**
   * 算法：hmac-based，public-key
   */
  Algorithm: string
  /**
   * 设备连接时传递jwt的key；username-使用用户名字段传递；password-使用密码字段传递
   */
  From: string
  /**
   * 密码
   */
  Secret?: string
  /**
   * 公钥
   */
  PublicKey?: string
  /**
   * 认证器是否开启：open-启用；close-关闭
   */
  Status?: string
  /**
   * 说明
   */
  Remark?: string
}

/**
 * DescribeCaCertificates请求参数结构体
 */
export interface DescribeCaCertificatesRequest {
  /**
   * 集群ID
   */
  InstanceId: string
}

/**
 * 设备证书信息
 */
export interface DeviceCertificateItem {
  /**
   * 客户端id
注意：此字段可能返回 null，表示取不到有效值。
   */
  ClientId?: string
  /**
   * 设备证书
   */
  DeviceCertificate?: string
  /**
   * 设备证书Sn
   */
  DeviceCertificateSn?: string
  /**
   * 设备证书Cn
   */
  DeviceCertificateCn?: string
  /**
   * 签发ca的序列号
   */
  CaSn?: string
  /**
   * 证书格式
   */
  Format?: string
  /**
   * 证书状态
    ACTIVE,//激活
    INACTIVE,//未激活
    REVOKED,//吊销
    PENDING_ACTIVATION,//注册待激活
   */
  Status?: string
  /**
   * 上次激活时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  LastActivationTime?: number
  /**
   * 上次取消激活时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  LastInactivationTime?: number
  /**
   * 创建时间
   */
  CreatedTime?: number
  /**
   * 预销毁时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  UpdateTime?: number
  /**
   * 证书来源：
API, 手动注册   
JITP 自动注册
注意：此字段可能返回 null，表示取不到有效值。
   */
  CertificateSource?: string
  /**
   * 证书失效日期
注意：此字段可能返回 null，表示取不到有效值。
   */
  NotAfterTime?: number
  /**
   * 证书生效开始日期
注意：此字段可能返回 null，表示取不到有效值。
   */
  NotBeforeTime?: number
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
注意：此字段可能返回 null，表示取不到有效值。
   */
  Remark?: string
}

/**
 * 价格标签信息
 */
export interface PriceTag {
  /**
   * 计价名称
   */
  Name?: string
  /**
   * 计价类别
   */
  Category?: string
  /**
   * 计费项标签
   */
  Code?: string
  /**
   * 步长
注意：此字段可能返回 null，表示取不到有效值。
   */
  Step?: number
}

/**
 * ModifyAuthorizationPolicy请求参数结构体
 */
export interface ModifyAuthorizationPolicyRequest {
  /**
   * 策略
   */
  Id: number
  /**
   * 实例ID
   */
  InstanceId: string
  /**
   * 策略名称
   */
  PolicyName?: string
  /**
   * 策略版本
   */
  PolicyVersion?: number
  /**
   * 策略优先级，越小越优先
   */
  Priority?: number
  /**
   * allow、deny
   */
  Effect?: string
  /**
   * connect、pub、sub
   */
  Actions?: string
  /**
   * 资源
   */
  Resources?: string
  /**
   * 用户名
   */
  Username?: string
  /**
   * 1.匹配保留消息；2.匹配非保留消息；3.匹配所有消息
   */
  Retain?: number
  /**
   * 客户端
   */
  ClientId?: string
  /**
   * IP
   */
  Ip?: string
  /**
   * 0、1、2
   */
  Qos?: string
  /**
   * 备注信息
   */
  Remark?: string
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
   * 实例ID
   */
  InstanceId: string
  /**
   * 服务端证书id
   */
  SSLServerCertId: string
  /**
   * CA证书id
   */
  SSLCaCertId: string
  /**
   * 加密通信方式
TLS：单向证书认证
mTLS：双向证书认证
BYOC：一设备一证书认证
   */
  X509Mode: string
  /**
   * 设备证书注册类型：
JITP，自动注册；
MANUAL 手动注册
   */
  DeviceCertificateProvisionType?: string
  /**
   * 是否自动激活，默认为false
   */
  AutomaticActivation?: boolean
}

/**
 * DescribeInstance请求参数结构体
 */
export interface DescribeInstanceRequest {
  /**
   * 实例ID
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
   * 实例ID
   */
  InstanceId: string
  /**
   * 用户名
   */
  Username: string
  /**
   * 备注
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
 * IP规则
 */
export interface IpRule {
  /**
   * IP地址
   */
  Ip: string
  /**
   * 是否允许放行
   */
  Allow: boolean
  /**
   * 备注信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  Remark: string
}
