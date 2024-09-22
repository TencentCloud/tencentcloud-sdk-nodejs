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
  UpdateAuthorizationPolicyPriorityResponse,
  UpdateAuthorizationPolicyPriorityRequest,
  AuthorizationPolicyItem,
  CreateJWTAuthenticatorResponse,
  DeleteAuthorizationPolicyRequest,
  ModifyJWKSAuthenticatorResponse,
  RegisterDeviceCertificateResponse,
  ModifyJWTAuthenticatorResponse,
  DescribeAuthorizationPoliciesRequest,
  DescribeTopicListRequest,
  DescribeInstanceListRequest,
  ModifyAuthorizationPolicyResponse,
  CreateAuthorizationPolicyRequest,
  DescribeInstanceResponse,
  DescribeAuthenticatorResponse,
  CreateTopicResponse,
  ModifyJWTAuthenticatorRequest,
  AuthorizationPolicyPriority,
  CreateAuthorizationPolicyResponse,
  CreateJWTAuthenticatorRequest,
  DeleteTopicRequest,
  CreateJWKSAuthenticatorRequest,
  ModifyTopicResponse,
  DescribeTopicResponse,
  CreateJWKSAuthenticatorResponse,
  DeleteAuthenticatorRequest,
  DescribeAuthorizationPoliciesResponse,
  RegisterDeviceCertificateRequest,
  CreateTopicRequest,
  MQTTTopicItem,
  Filter,
  DeleteAuthorizationPolicyResponse,
  ModifyJWKSAuthenticatorRequest,
  ModifyTopicRequest,
  DescribeTopicListResponse,
  DescribeAuthenticatorRequest,
  DeleteTopicResponse,
  ModifyAuthorizationPolicyRequest,
  DescribeInstanceRequest,
  MQTTAuthenticatorItem,
  DeleteAuthenticatorResponse,
  TagFilter,
  MQTTInstanceItem,
  DescribeInstanceListResponse,
  DescribeTopicRequest,
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
   * 查询实例信息
   */
  async DescribeInstance(
    req: DescribeInstanceRequest,
    cb?: (error: string, rep: DescribeInstanceResponse) => void
  ): Promise<DescribeInstanceResponse> {
    return this.request("DescribeInstance", req, cb)
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
   * 注册设备证书
   */
  async RegisterDeviceCertificate(
    req: RegisterDeviceCertificateRequest,
    cb?: (error: string, rep: RegisterDeviceCertificateResponse) => void
  ): Promise<RegisterDeviceCertificateResponse> {
    return this.request("RegisterDeviceCertificate", req, cb)
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
   * 修改主题属性
   */
  async ModifyTopic(
    req: ModifyTopicRequest,
    cb?: (error: string, rep: ModifyTopicResponse) => void
  ): Promise<ModifyTopicResponse> {
    return this.request("ModifyTopic", req, cb)
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
     * 获取实例列表，Filters参数使用说明如下：
1. InstanceName, 名称模糊查询
2. InstanceId，实例ID查询
3. InstanceType, 实例类型查询，支持多选
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
   * 查询mqtt主题详情
   */
  async DescribeTopic(
    req: DescribeTopicRequest,
    cb?: (error: string, rep: DescribeTopicResponse) => void
  ): Promise<DescribeTopicResponse> {
    return this.request("DescribeTopic", req, cb)
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
   * 创建一个jwks的认证
   */
  async CreateJWTAuthenticator(
    req: CreateJWTAuthenticatorRequest,
    cb?: (error: string, rep: CreateJWTAuthenticatorResponse) => void
  ): Promise<CreateJWTAuthenticatorResponse> {
    return this.request("CreateJWTAuthenticator", req, cb)
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
   * 修改MQTT JWKS 认证器
   */
  async ModifyJWTAuthenticator(
    req: ModifyJWTAuthenticatorRequest,
    cb?: (error: string, rep: ModifyJWTAuthenticatorResponse) => void
  ): Promise<ModifyJWTAuthenticatorResponse> {
    return this.request("ModifyJWTAuthenticator", req, cb)
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
   * 删除MQTT主题
   */
  async DeleteTopic(
    req: DeleteTopicRequest,
    cb?: (error: string, rep: DeleteTopicResponse) => void
  ): Promise<DeleteTopicResponse> {
    return this.request("DeleteTopic", req, cb)
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
   * 修改MQTT JWKS 认证器
   */
  async ModifyJWKSAuthenticator(
    req: ModifyJWKSAuthenticatorRequest,
    cb?: (error: string, rep: ModifyJWKSAuthenticatorResponse) => void
  ): Promise<ModifyJWKSAuthenticatorResponse> {
    return this.request("ModifyJWKSAuthenticator", req, cb)
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
}
