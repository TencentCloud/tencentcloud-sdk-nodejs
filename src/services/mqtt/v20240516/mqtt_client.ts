/* eslint-disable @typescript-eslint/no-unused-vars */
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
import { AbstractClient } from "../../../common/abstract_client"
import { ClientConfig } from "../../../common/interface"
import {
  DeleteUserRequest,
  ModifyJWTAuthenticatorResponse,
  CaCertificateItem,
  ModifyAuthorizationPolicyResponse,
  ActivateDeviceCertificateRequest,
  CreateInstanceResponse,
  ApplyRegistrationCodeRequest,
  ModifyJWTAuthenticatorRequest,
  AuthorizationPolicyPriority,
  ModifyInstanceRequest,
  DeleteTopicRequest,
  ModifyUserResponse,
  DescribeCaCertificateResponse,
  DescribeDeviceCertificatesRequest,
  DeleteAuthenticatorRequest,
  PublicAccessRule,
  VpcInfo,
  DeleteAuthorizationPolicyResponse,
  ProductSkuItem,
  ModifyJWKSAuthenticatorRequest,
  RegisterCaCertificateResponse,
  RegisterDeviceCertificateResponse,
  MQTTAuthenticatorItem,
  Tag,
  DescribeDeviceCertificateRequest,
  MQTTInstanceItem,
  DescribeInstanceListResponse,
  ApplyRegistrationCodeResponse,
  ModifyInstanceResponse,
  ModifyInsPublicEndpointResponse,
  ModifyJWKSAuthenticatorResponse,
  CreateInsPublicEndpointResponse,
  CreateUserResponse,
  CreateAuthorizationPolicyRequest,
  DescribeAuthenticatorResponse,
  DeactivateCaCertificateResponse,
  DeleteCaCertificateRequest,
  DeleteDeviceCertificateRequest,
  DescribeInsPublicEndpointsRequest,
  DeleteUserResponse,
  ActivateCaCertificateResponse,
  DeleteDeviceCertificateResponse,
  DeleteInstanceResponse,
  DescribeProductSKUListResponse,
  CreateJWKSAuthenticatorRequest,
  DescribeTopicResponse,
  CreateJWKSAuthenticatorResponse,
  DescribeAuthorizationPoliciesResponse,
  CreateTopicRequest,
  DeleteCaCertificateResponse,
  TagFilter,
  DescribeUserListResponse,
  ModifyTopicResponse,
  DeactivateDeviceCertificateResponse,
  MQTTUserItem,
  ActivateCaCertificateRequest,
  ActivateDeviceCertificateResponse,
  DescribeTopicRequest,
  UpdateAuthorizationPolicyPriorityResponse,
  CreateTopicResponse,
  DeleteInsPublicEndpointResponse,
  MQTTEndpointItem,
  DescribeTopicListRequest,
  AuthorizationPolicyItem,
  RevokedDeviceCertificateRequest,
  CreateAuthorizationPolicyResponse,
  DescribeAuthenticatorRequest,
  RegisterCaCertificateRequest,
  CreateInstanceRequest,
  CreateInsPublicEndpointRequest,
  RegisterDeviceCertificateRequest,
  Filter,
  DeactivateDeviceCertificateRequest,
  DescribeDeviceCertificatesResponse,
  ModifyTopicRequest,
  CreateUserRequest,
  DescribeInstanceResponse,
  ModifyInstanceCertBindingResponse,
  DeleteInstanceRequest,
  DescribeInsPublicEndpointsResponse,
  ModifyInsPublicEndpointRequest,
  DeleteInsPublicEndpointRequest,
  DescribeUserListRequest,
  DescribeCaCertificateRequest,
  UpdateAuthorizationPolicyPriorityRequest,
  CreateJWTAuthenticatorResponse,
  DeleteAuthorizationPolicyRequest,
  DescribeAuthorizationPoliciesRequest,
  DescribeProductSKUListRequest,
  DescribeTopicListResponse,
  DescribeDeviceCertificateResponse,
  DescribeInstanceListRequest,
  DeactivateCaCertificateRequest,
  CreateJWTAuthenticatorRequest,
  DescribeCaCertificatesRequest,
  DeviceCertificateItem,
  MQTTTopicItem,
  PriceTag,
  ModifyAuthorizationPolicyRequest,
  RevokedDeviceCertificateResponse,
  DeleteTopicResponse,
  ModifyInstanceCertBindingRequest,
  DescribeInstanceRequest,
  DescribeCaCertificatesResponse,
  ModifyUserRequest,
  DeleteAuthenticatorResponse,
  IpRule,
} from "./mqtt_models"

/**
 * mqtt client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("mqtt.tencentcloudapi.com", "2024-05-16", clientConfig)
  }

  /**
     * 查询用户列表，Filter参数使用说明如下：

1. Username，用户名称模糊搜索
     */
  async DescribeUserList(
    req: DescribeUserListRequest,
    cb?: (error: string, rep: DescribeUserListResponse) => void
  ): Promise<DescribeUserListResponse> {
    return this.request("DescribeUserList", req, cb)
  }

  /**
   * 为MQTT实例创建公网接入点
   */
  async CreateInsPublicEndpoint(
    req: CreateInsPublicEndpointRequest,
    cb?: (error: string, rep: CreateInsPublicEndpointResponse) => void
  ): Promise<CreateInsPublicEndpointResponse> {
    return this.request("CreateInsPublicEndpoint", req, cb)
  }

  /**
   * 修改主题属性
   */
  async ModifyTopic(
    req: ModifyTopicRequest,
    cb?: (error: string, rep: ModifyTopicResponse) => void
  ): Promise<ModifyTopicResponse> {
    return this.request("ModifyTopic", req, cb)
  }

  /**
   * 删除Ca证书
   */
  async DeleteCaCertificate(
    req: DeleteCaCertificateRequest,
    cb?: (error: string, rep: DeleteCaCertificateResponse) => void
  ): Promise<DeleteCaCertificateResponse> {
    return this.request("DeleteCaCertificate", req, cb)
  }

  /**
   * 失效Ca证书
   */
  async DeactivateDeviceCertificate(
    req: DeactivateDeviceCertificateRequest,
    cb?: (error: string, rep: DeactivateDeviceCertificateResponse) => void
  ): Promise<DeactivateDeviceCertificateResponse> {
    return this.request("DeactivateDeviceCertificate", req, cb)
  }

  /**
   * 查询mqtt主题详情
   */
  async DescribeTopic(
    req: DescribeTopicRequest,
    cb?: (error: string, rep: DescribeTopicResponse) => void
  ): Promise<DescribeTopicResponse> {
    return this.request("DescribeTopic", req, cb)
  }

  /**
   * 失效Ca证书
   */
  async DeactivateCaCertificate(
    req: DeactivateCaCertificateRequest,
    cb?: (error: string, rep: DeactivateCaCertificateResponse) => void
  ): Promise<DeactivateCaCertificateResponse> {
    return this.request("DeactivateCaCertificate", req, cb)
  }

  /**
   * 创建一个jwks的认证
   */
  async CreateJWTAuthenticator(
    req: CreateJWTAuthenticatorRequest,
    cb?: (error: string, rep: CreateJWTAuthenticatorResponse) => void
  ): Promise<CreateJWTAuthenticatorResponse> {
    return this.request("CreateJWTAuthenticator", req, cb)
  }

  /**
   * 删除设备证书
   */
  async DeleteDeviceCertificate(
    req: DeleteDeviceCertificateRequest,
    cb?: (error: string, rep: DeleteDeviceCertificateResponse) => void
  ): Promise<DeleteDeviceCertificateResponse> {
    return this.request("DeleteDeviceCertificate", req, cb)
  }

  /**
   * 删除MQTT实例
   */
  async DeleteInstance(
    req: DeleteInstanceRequest,
    cb?: (error: string, rep: DeleteInstanceResponse) => void
  ): Promise<DeleteInstanceResponse> {
    return this.request("DeleteInstance", req, cb)
  }

  /**
   * 修改MQTT JWKS 认证器
   */
  async ModifyJWTAuthenticator(
    req: ModifyJWTAuthenticatorRequest,
    cb?: (error: string, rep: ModifyJWTAuthenticatorResponse) => void
  ): Promise<ModifyJWTAuthenticatorResponse> {
    return this.request("ModifyJWTAuthenticator", req, cb)
  }

  /**
   * 修改MQTT JWKS 认证器
   */
  async ModifyJWKSAuthenticator(
    req: ModifyJWKSAuthenticatorRequest,
    cb?: (error: string, rep: ModifyJWKSAuthenticatorResponse) => void
  ): Promise<ModifyJWKSAuthenticatorResponse> {
    return this.request("ModifyJWKSAuthenticator", req, cb)
  }

  /**
   * 分页查询设备证书
   */
  async DescribeDeviceCertificates(
    req: DescribeDeviceCertificatesRequest,
    cb?: (error: string, rep: DescribeDeviceCertificatesResponse) => void
  ): Promise<DescribeDeviceCertificatesResponse> {
    return this.request("DescribeDeviceCertificates", req, cb)
  }

  /**
   * 查询MQTT实例公网接入点
   */
  async DescribeInsPublicEndpoints(
    req: DescribeInsPublicEndpointsRequest,
    cb?: (error: string, rep: DescribeInsPublicEndpointsResponse) => void
  ): Promise<DescribeInsPublicEndpointsResponse> {
    return this.request("DescribeInsPublicEndpoints", req, cb)
  }

  /**
   * 更新MQTT实例公网接入点
   */
  async ModifyInsPublicEndpoint(
    req: ModifyInsPublicEndpointRequest,
    cb?: (error: string, rep: ModifyInsPublicEndpointResponse) => void
  ): Promise<ModifyInsPublicEndpointResponse> {
    return this.request("ModifyInsPublicEndpoint", req, cb)
  }

  /**
   * 查询设备证书详情接口
   */
  async DescribeDeviceCertificate(
    req: DescribeDeviceCertificateRequest,
    cb?: (error: string, rep: DescribeDeviceCertificateResponse) => void
  ): Promise<DescribeDeviceCertificateResponse> {
    return this.request("DescribeDeviceCertificate", req, cb)
  }

  /**
   * 注册设备证书
   */
  async RegisterDeviceCertificate(
    req: RegisterDeviceCertificateRequest,
    cb?: (error: string, rep: RegisterDeviceCertificateResponse) => void
  ): Promise<RegisterDeviceCertificateResponse> {
    return this.request("RegisterDeviceCertificate", req, cb)
  }

  /**
     * 更新MQTT集群绑定证书
参数传空，则为删除证书
     */
  async ModifyInstanceCertBinding(
    req: ModifyInstanceCertBindingRequest,
    cb?: (error: string, rep: ModifyInstanceCertBindingResponse) => void
  ): Promise<ModifyInstanceCertBindingResponse> {
    return this.request("ModifyInstanceCertBinding", req, cb)
  }

  /**
   * 获取产品售卖规格
   */
  async DescribeProductSKUList(
    req?: DescribeProductSKUListRequest,
    cb?: (error: string, rep: DescribeProductSKUListResponse) => void
  ): Promise<DescribeProductSKUListResponse> {
    return this.request("DescribeProductSKUList", req, cb)
  }

  /**
   * 查询集群下的ca证书信息
   */
  async DescribeCaCertificates(
    req: DescribeCaCertificatesRequest,
    cb?: (error: string, rep: DescribeCaCertificatesResponse) => void
  ): Promise<DescribeCaCertificatesResponse> {
    return this.request("DescribeCaCertificates", req, cb)
  }

  /**
   * 修改策略规则优先级
   */
  async UpdateAuthorizationPolicyPriority(
    req: UpdateAuthorizationPolicyPriorityRequest,
    cb?: (error: string, rep: UpdateAuthorizationPolicyPriorityResponse) => void
  ): Promise<UpdateAuthorizationPolicyPriorityResponse> {
    return this.request("UpdateAuthorizationPolicyPriority", req, cb)
  }

  /**
   * 创建主题
   */
  async CreateTopic(
    req: CreateTopicRequest,
    cb?: (error: string, rep: CreateTopicResponse) => void
  ): Promise<CreateTopicResponse> {
    return this.request("CreateTopic", req, cb)
  }

  /**
   * 生效设备证书
   */
  async ActivateDeviceCertificate(
    req: ActivateDeviceCertificateRequest,
    cb?: (error: string, rep: ActivateDeviceCertificateResponse) => void
  ): Promise<ActivateDeviceCertificateResponse> {
    return this.request("ActivateDeviceCertificate", req, cb)
  }

  /**
   * 查询授权规则
   */
  async DescribeAuthorizationPolicies(
    req: DescribeAuthorizationPoliciesRequest,
    cb?: (error: string, rep: DescribeAuthorizationPoliciesResponse) => void
  ): Promise<DescribeAuthorizationPoliciesResponse> {
    return this.request("DescribeAuthorizationPolicies", req, cb)
  }

  /**
     * 获取主题列表，Filter参数使用说明如下：

1. TopicName，主题名称模糊搜索
2. TopicType，主题类型查询，支持多选，可选值：Normal,Order,Transaction,DelayScheduled
     */
  async DescribeTopicList(
    req: DescribeTopicListRequest,
    cb?: (error: string, rep: DescribeTopicListResponse) => void
  ): Promise<DescribeTopicListResponse> {
    return this.request("DescribeTopicList", req, cb)
  }

  /**
   * 删除MQTT实例的公网接入点
   */
  async DeleteInsPublicEndpoint(
    req: DeleteInsPublicEndpointRequest,
    cb?: (error: string, rep: DeleteInsPublicEndpointResponse) => void
  ): Promise<DeleteInsPublicEndpointResponse> {
    return this.request("DeleteInsPublicEndpoint", req, cb)
  }

  /**
   * 购买新的MQTT实例
   */
  async CreateInstance(
    req: CreateInstanceRequest,
    cb?: (error: string, rep: CreateInstanceResponse) => void
  ): Promise<CreateInstanceResponse> {
    return this.request("CreateInstance", req, cb)
  }

  /**
     * 获取实例列表，Filters参数使用说明如下：
1. InstanceName, 名称模糊查询
2. InstanceId，实例ID查询
3. InstanceStatus，实例状态查询，支持多选

当使用TagFilters查询时，Filters参数失效。
     */
  async DescribeInstanceList(
    req: DescribeInstanceListRequest,
    cb?: (error: string, rep: DescribeInstanceListResponse) => void
  ): Promise<DescribeInstanceListResponse> {
    return this.request("DescribeInstanceList", req, cb)
  }

  /**
   * 吊销设备证书
   */
  async RevokedDeviceCertificate(
    req: RevokedDeviceCertificateRequest,
    cb?: (error: string, rep: RevokedDeviceCertificateResponse) => void
  ): Promise<RevokedDeviceCertificateResponse> {
    return this.request("RevokedDeviceCertificate", req, cb)
  }

  /**
   * 查询实例信息
   */
  async DescribeInstance(
    req: DescribeInstanceRequest,
    cb?: (error: string, rep: DescribeInstanceResponse) => void
  ): Promise<DescribeInstanceResponse> {
    return this.request("DescribeInstance", req, cb)
  }

  /**
   * 删除MQTT主题
   */
  async DeleteTopic(
    req: DeleteTopicRequest,
    cb?: (error: string, rep: DeleteTopicResponse) => void
  ): Promise<DeleteTopicResponse> {
    return this.request("DeleteTopic", req, cb)
  }

  /**
   * 查询Ca证书详情接口
   */
  async DescribeCaCertificate(
    req: DescribeCaCertificateRequest,
    cb?: (error: string, rep: DescribeCaCertificateResponse) => void
  ): Promise<DescribeCaCertificateResponse> {
    return this.request("DescribeCaCertificate", req, cb)
  }

  /**
   * 创建一个jwks的认证
   */
  async CreateJWKSAuthenticator(
    req: CreateJWKSAuthenticatorRequest,
    cb?: (error: string, rep: CreateJWKSAuthenticatorResponse) => void
  ): Promise<CreateJWKSAuthenticatorResponse> {
    return this.request("CreateJWKSAuthenticator", req, cb)
  }

  /**
   * 修改MQTT角色
   */
  async ModifyUser(
    req: ModifyUserRequest,
    cb?: (error: string, rep: ModifyUserResponse) => void
  ): Promise<ModifyUserResponse> {
    return this.request("ModifyUser", req, cb)
  }

  /**
   * 删除MQTT访问用户
   */
  async DeleteUser(
    req: DeleteUserRequest,
    cb?: (error: string, rep: DeleteUserResponse) => void
  ): Promise<DeleteUserResponse> {
    return this.request("DeleteUser", req, cb)
  }

  /**
   * 修改策略规则
   */
  async ModifyAuthorizationPolicy(
    req: ModifyAuthorizationPolicyRequest,
    cb?: (error: string, rep: ModifyAuthorizationPolicyResponse) => void
  ): Promise<ModifyAuthorizationPolicyResponse> {
    return this.request("ModifyAuthorizationPolicy", req, cb)
  }

  /**
   * 删除策略规则
   */
  async DeleteAuthorizationPolicy(
    req: DeleteAuthorizationPolicyRequest,
    cb?: (error: string, rep: DeleteAuthorizationPolicyResponse) => void
  ): Promise<DeleteAuthorizationPolicyResponse> {
    return this.request("DeleteAuthorizationPolicy", req, cb)
  }

  /**
   * 根据认证器类型删除一个MQTT认证器
   */
  async DeleteAuthenticator(
    req: DeleteAuthenticatorRequest,
    cb?: (error: string, rep: DeleteAuthenticatorResponse) => void
  ): Promise<DeleteAuthenticatorResponse> {
    return this.request("DeleteAuthenticator", req, cb)
  }

  /**
   * 注册ca证书
   */
  async RegisterCaCertificate(
    req: RegisterCaCertificateRequest,
    cb?: (error: string, rep: RegisterCaCertificateResponse) => void
  ): Promise<RegisterCaCertificateResponse> {
    return this.request("RegisterCaCertificate", req, cb)
  }

  /**
   * 查询MQTT认证器
   */
  async DescribeAuthenticator(
    req: DescribeAuthenticatorRequest,
    cb?: (error: string, rep: DescribeAuthenticatorResponse) => void
  ): Promise<DescribeAuthenticatorResponse> {
    return this.request("DescribeAuthenticator", req, cb)
  }

  /**
   * 激活Ca证书
   */
  async ActivateCaCertificate(
    req: ActivateCaCertificateRequest,
    cb?: (error: string, rep: ActivateCaCertificateResponse) => void
  ): Promise<ActivateCaCertificateResponse> {
    return this.request("ActivateCaCertificate", req, cb)
  }

  /**
   * 添加mqtt角色
   */
  async CreateUser(
    req: CreateUserRequest,
    cb?: (error: string, rep: CreateUserResponse) => void
  ): Promise<CreateUserResponse> {
    return this.request("CreateUser", req, cb)
  }

  /**
   * 申请ca注册码
   */
  async ApplyRegistrationCode(
    req: ApplyRegistrationCodeRequest,
    cb?: (error: string, rep: ApplyRegistrationCodeResponse) => void
  ): Promise<ApplyRegistrationCodeResponse> {
    return this.request("ApplyRegistrationCode", req, cb)
  }

  /**
   * 创建MQTT实例的性能测试任务
   */
  async CreateAuthorizationPolicy(
    req: CreateAuthorizationPolicyRequest,
    cb?: (error: string, rep: CreateAuthorizationPolicyResponse) => void
  ): Promise<CreateAuthorizationPolicyResponse> {
    return this.request("CreateAuthorizationPolicy", req, cb)
  }

  /**
   * 修改实例属性
   */
  async ModifyInstance(
    req: ModifyInstanceRequest,
    cb?: (error: string, rep: ModifyInstanceResponse) => void
  ): Promise<ModifyInstanceResponse> {
    return this.request("ModifyInstance", req, cb)
  }
}
