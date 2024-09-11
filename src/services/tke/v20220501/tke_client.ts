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
  NativeNodeInfo,
  HealthCheckTemplateRule,
  HealthCheckPolicyRule,
  DeleteHealthCheckPolicyRequest,
  CreateNodePoolResponse,
  CreateNativeNodePoolParam,
  DescribeNodePoolsResponse,
  ExternalNodeInfo,
  DescribeClusterInstancesResponse,
  AutoUpgradeOptions,
  AutoscalingAdded,
  Instance,
  DescribeHealthCheckPolicyBindingsRequest,
  NodeCountSummary,
  SuperNodePoolInfo,
  RuntimeConfig,
  Label,
  HealthCheckPolicyBinding,
  CreateHealthCheckPolicyRequest,
  InstanceExtraArgs,
  MachineUpgradeSettings,
  UpdateNativeNodePoolParam,
  InstanceChargePrepaid,
  DeleteNodePoolResponse,
  Tag,
  MachineSetScaling,
  ModifyNodePoolRequest,
  Annotation,
  DescribeClusterInstancesRequest,
  DeleteHealthCheckPolicyResponse,
  TagSpecification,
  LifecycleConfig,
  ModifyNodePoolResponse,
  RegularNodePoolInfo,
  Taint,
  Filter,
  DescribeHealthCheckPoliciesRequest,
  DescribeHealthCheckTemplateResponse,
  CreateNodePoolRequest,
  RegularNodeInfo,
  DescribeHealthCheckPolicyBindingsResponse,
  NativeNodePoolInfo,
  DescribeNodePoolsRequest,
  NodePool,
  DeleteNodePoolRequest,
  InstanceAdvancedSettings,
  IntOrString,
  ExternalNodePoolInfo,
  DescribeHealthCheckTemplateRequest,
  DescribeHealthCheckPoliciesResponse,
  HealthCheckTemplate,
  InternetAccessible,
  ModifyHealthCheckPolicyRequest,
  SuperNodeInfo,
  ManuallyAdded,
  ManagementConfig,
  ModifyHealthCheckPolicyResponse,
  SortBy,
  HealthCheckPolicy,
  Disk,
  CreateHealthCheckPolicyResponse,
  DataDisk,
} from "./tke_models"

/**
 * tke client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("tke.tencentcloudapi.com", "2022-05-01", clientConfig)
  }

  /**
   * 查询 TKE 节点池列表
   */
  async DescribeNodePools(
    req: DescribeNodePoolsRequest,
    cb?: (error: string, rep: DescribeNodePoolsResponse) => void
  ): Promise<DescribeNodePoolsResponse> {
    return this.request("DescribeNodePools", req, cb)
  }

  /**
   * 更新 TKE 节点池
   */
  async ModifyNodePool(
    req: ModifyNodePoolRequest,
    cb?: (error: string, rep: ModifyNodePoolResponse) => void
  ): Promise<ModifyNodePoolResponse> {
    return this.request("ModifyNodePool", req, cb)
  }

  /**
   * 删除健康检测策略
   */
  async DeleteHealthCheckPolicy(
    req: DeleteHealthCheckPolicyRequest,
    cb?: (error: string, rep: DeleteHealthCheckPolicyResponse) => void
  ): Promise<DeleteHealthCheckPolicyResponse> {
    return this.request("DeleteHealthCheckPolicy", req, cb)
  }

  /**
   * 删除 TKE 节点池
   */
  async DeleteNodePool(
    req: DeleteNodePoolRequest,
    cb?: (error: string, rep: DeleteNodePoolResponse) => void
  ): Promise<DeleteNodePoolResponse> {
    return this.request("DeleteNodePool", req, cb)
  }

  /**
   * 查询健康检测策略
   */
  async DescribeHealthCheckPolicies(
    req: DescribeHealthCheckPoliciesRequest,
    cb?: (error: string, rep: DescribeHealthCheckPoliciesResponse) => void
  ): Promise<DescribeHealthCheckPoliciesResponse> {
    return this.request("DescribeHealthCheckPolicies", req, cb)
  }

  /**
   * 修改健康检测策略
   */
  async ModifyHealthCheckPolicy(
    req: ModifyHealthCheckPolicyRequest,
    cb?: (error: string, rep: ModifyHealthCheckPolicyResponse) => void
  ): Promise<ModifyHealthCheckPolicyResponse> {
    return this.request("ModifyHealthCheckPolicy", req, cb)
  }

  /**
   * 创建 TKE 节点池
   */
  async CreateNodePool(
    req: CreateNodePoolRequest,
    cb?: (error: string, rep: CreateNodePoolResponse) => void
  ): Promise<CreateNodePoolResponse> {
    return this.request("CreateNodePool", req, cb)
  }

  /**
   * 查询健康检测策略模板
   */
  async DescribeHealthCheckTemplate(
    req?: DescribeHealthCheckTemplateRequest,
    cb?: (error: string, rep: DescribeHealthCheckTemplateResponse) => void
  ): Promise<DescribeHealthCheckTemplateResponse> {
    return this.request("DescribeHealthCheckTemplate", req, cb)
  }

  /**
   * 查询健康检测策略绑定关系
   */
  async DescribeHealthCheckPolicyBindings(
    req: DescribeHealthCheckPolicyBindingsRequest,
    cb?: (error: string, rep: DescribeHealthCheckPolicyBindingsResponse) => void
  ): Promise<DescribeHealthCheckPolicyBindingsResponse> {
    return this.request("DescribeHealthCheckPolicyBindings", req, cb)
  }

  /**
   * 创建健康检测策略
   */
  async CreateHealthCheckPolicy(
    req: CreateHealthCheckPolicyRequest,
    cb?: (error: string, rep: CreateHealthCheckPolicyResponse) => void
  ): Promise<CreateHealthCheckPolicyResponse> {
    return this.request("CreateHealthCheckPolicy", req, cb)
  }

  /**
   * 查询集群下节点实例信息
   */
  async DescribeClusterInstances(
    req: DescribeClusterInstancesRequest,
    cb?: (error: string, rep: DescribeClusterInstancesResponse) => void
  ): Promise<DescribeClusterInstancesResponse> {
    return this.request("DescribeClusterInstances", req, cb)
  }
}
