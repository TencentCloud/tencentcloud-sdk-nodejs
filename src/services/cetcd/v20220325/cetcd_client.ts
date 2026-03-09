/* eslint-disable @typescript-eslint/no-unused-vars */
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
import { AbstractClient } from "../../../common/abstract_client"
import { ClientConfig } from "../../../common/interface"
import {
  DescribeRPCMethodListRequest,
  ResizeEtcdInstanceRequest,
  DescribeEtcdRegionsRequest,
  DescribeEtcdInstancesResponse,
  DisableEtcdInstanceDeletionProtectionResponse,
  ResizeEtcdInstanceResponse,
  RegionInstance,
  ModifyEtcdSnapshotPolicyRequest,
  TaskStepInfo,
  ModifyEtcdConfigurationResponse,
  DescribeEtcdSnapshotsRequest,
  CreateEtcdSnapshotPolicyResponse,
  DescribeEtcdSnapshotPoliciesResponse,
  DescribeEtcdAvailableVersionsRequest,
  DescribeEtcdInstancesRequest,
  PrometheusCreationParam,
  DescribeRPCMethodListResponse,
  CreateEtcdSnapshotResponse,
  EtcdSnapshot,
  ChargePrepaidConfig,
  Etcd,
  EnableEtcdInstanceDeletionProtectionRequest,
  EtcdAutoCompactionSettings,
  DescribeEtcdSnapshotPoliciesRequest,
  ModifyEtcdAttributeResponse,
  VersionInstance,
  EtcdSecuritySettings,
  EtcdMonitorSettings,
  EtcdAdvancedSettings,
  EtcdMember,
  ModifyEtcdConfigurationRequest,
  DescribeEtcdAvailableVersionsResponse,
  DescribeEtcdCreatingProgressRequest,
  DescribeEtcdTasksRequest,
  EnableEtcdInstanceDeletionProtectionResponse,
  DescribeEtcdTasksResponse,
  ModifyEtcdSnapshotPolicyResponse,
  RPCMethod,
  Filter,
  CreateEtcdInstanceResponse,
  UpgradeEtcdInstanceResponse,
  CreateEtcdSnapshotPolicyRequest,
  DescribeEtcdCredentialsRequest,
  DisableEtcdInstanceDeletionProtectionRequest,
  DescribeEtcdRegionsResponse,
  DescribeEtcdCreatingProgressResponse,
  InstanceConfig,
  EtcdCredential,
  UpgradeEtcdInstanceRequest,
  EtcdSnapshotPolicy,
  DescribeEtcdQuotaRequest,
  CreateEtcdInstanceRequest,
  DescribeEtcdSnapshotsResponse,
  DescribeEtcdCredentialsResponse,
  ModifyEtcdAttributeRequest,
  CreateEtcdSnapshotRequest,
  EtcdTaskInfo,
  DescribeEtcdQuotaResponse,
  EtcdBackupSettings,
} from "./cetcd_models"

/**
 * cetcd client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("cetcd.tencentcloudapi.com", "2022-03-25", clientConfig)
  }

  /**
   * 修改etcd实例配置
   */
  async ModifyEtcdConfiguration(
    req: ModifyEtcdConfigurationRequest,
    cb?: (error: string, rep: ModifyEtcdConfigurationResponse) => void
  ): Promise<ModifyEtcdConfigurationResponse> {
    return this.request("ModifyEtcdConfiguration", req, cb)
  }

  /**
   * 查看etcd快照策略
   */
  async DescribeEtcdSnapshotPolicies(
    req: DescribeEtcdSnapshotPoliciesRequest,
    cb?: (error: string, rep: DescribeEtcdSnapshotPoliciesResponse) => void
  ): Promise<DescribeEtcdSnapshotPoliciesResponse> {
    return this.request("DescribeEtcdSnapshotPolicies", req, cb)
  }

  /**
   * 升级etcd实例
   */
  async UpgradeEtcdInstance(
    req: UpgradeEtcdInstanceRequest,
    cb?: (error: string, rep: UpgradeEtcdInstanceResponse) => void
  ): Promise<UpgradeEtcdInstanceResponse> {
    return this.request("UpgradeEtcdInstance", req, cb)
  }

  /**
   * 扩容etcd实例
   */
  async ResizeEtcdInstance(
    req: ResizeEtcdInstanceRequest,
    cb?: (error: string, rep: ResizeEtcdInstanceResponse) => void
  ): Promise<ResizeEtcdInstanceResponse> {
    return this.request("ResizeEtcdInstance", req, cb)
  }

  /**
   * 创建etcd快照
   */
  async CreateEtcdSnapshot(
    req: CreateEtcdSnapshotRequest,
    cb?: (error: string, rep: CreateEtcdSnapshotResponse) => void
  ): Promise<CreateEtcdSnapshotResponse> {
    return this.request("CreateEtcdSnapshot", req, cb)
  }

  /**
   * 查看etcd快照列表
   */
  async DescribeEtcdSnapshots(
    req: DescribeEtcdSnapshotsRequest,
    cb?: (error: string, rep: DescribeEtcdSnapshotsResponse) => void
  ): Promise<DescribeEtcdSnapshotsResponse> {
    return this.request("DescribeEtcdSnapshots", req, cb)
  }

  /**
   * 查询etcd访问凭证
   */
  async DescribeEtcdCredentials(
    req: DescribeEtcdCredentialsRequest,
    cb?: (error: string, rep: DescribeEtcdCredentialsResponse) => void
  ): Promise<DescribeEtcdCredentialsResponse> {
    return this.request("DescribeEtcdCredentials", req, cb)
  }

  /**
   * 修改etcd快照策略
   */
  async ModifyEtcdSnapshotPolicy(
    req: ModifyEtcdSnapshotPolicyRequest,
    cb?: (error: string, rep: ModifyEtcdSnapshotPolicyResponse) => void
  ): Promise<ModifyEtcdSnapshotPolicyResponse> {
    return this.request("ModifyEtcdSnapshotPolicy", req, cb)
  }

  /**
   * 启用etcd实例删除保护
   */
  async EnableEtcdInstanceDeletionProtection(
    req: EnableEtcdInstanceDeletionProtectionRequest,
    cb?: (error: string, rep: EnableEtcdInstanceDeletionProtectionResponse) => void
  ): Promise<EnableEtcdInstanceDeletionProtectionResponse> {
    return this.request("EnableEtcdInstanceDeletionProtection", req, cb)
  }

  /**
   * 查询etcd实例列表
   */
  async DescribeEtcdInstances(
    req: DescribeEtcdInstancesRequest,
    cb?: (error: string, rep: DescribeEtcdInstancesResponse) => void
  ): Promise<DescribeEtcdInstancesResponse> {
    return this.request("DescribeEtcdInstances", req, cb)
  }

  /**
   * 修改etcd实例属性
   */
  async ModifyEtcdAttribute(
    req: ModifyEtcdAttributeRequest,
    cb?: (error: string, rep: ModifyEtcdAttributeResponse) => void
  ): Promise<ModifyEtcdAttributeResponse> {
    return this.request("ModifyEtcdAttribute", req, cb)
  }

  /**
   * 查看etcd可用版本
   */
  async DescribeEtcdAvailableVersions(
    req?: DescribeEtcdAvailableVersionsRequest,
    cb?: (error: string, rep: DescribeEtcdAvailableVersionsResponse) => void
  ): Promise<DescribeEtcdAvailableVersionsResponse> {
    return this.request("DescribeEtcdAvailableVersions", req, cb)
  }

  /**
   * 查看etcd集群创建进度
   */
  async DescribeEtcdCreatingProgress(
    req: DescribeEtcdCreatingProgressRequest,
    cb?: (error: string, rep: DescribeEtcdCreatingProgressResponse) => void
  ): Promise<DescribeEtcdCreatingProgressResponse> {
    return this.request("DescribeEtcdCreatingProgress", req, cb)
  }

  /**
   * 创建etcd快照策略
   */
  async CreateEtcdSnapshotPolicy(
    req: CreateEtcdSnapshotPolicyRequest,
    cb?: (error: string, rep: CreateEtcdSnapshotPolicyResponse) => void
  ): Promise<CreateEtcdSnapshotPolicyResponse> {
    return this.request("CreateEtcdSnapshotPolicy", req, cb)
  }

  /**
   * 关闭etcd实例删除保护
   */
  async DisableEtcdInstanceDeletionProtection(
    req: DisableEtcdInstanceDeletionProtectionRequest,
    cb?: (error: string, rep: DisableEtcdInstanceDeletionProtectionResponse) => void
  ): Promise<DisableEtcdInstanceDeletionProtectionResponse> {
    return this.request("DisableEtcdInstanceDeletionProtection", req, cb)
  }

  /**
   * 获取etcd集群的gRPC方法列表
   */
  async DescribeRPCMethodList(
    req: DescribeRPCMethodListRequest,
    cb?: (error: string, rep: DescribeRPCMethodListResponse) => void
  ): Promise<DescribeRPCMethodListResponse> {
    return this.request("DescribeRPCMethodList", req, cb)
  }

  /**
   * 查看etcd相关tasks
   */
  async DescribeEtcdTasks(
    req: DescribeEtcdTasksRequest,
    cb?: (error: string, rep: DescribeEtcdTasksResponse) => void
  ): Promise<DescribeEtcdTasksResponse> {
    return this.request("DescribeEtcdTasks", req, cb)
  }

  /**
   * 创建etcd实例
   */
  async CreateEtcdInstance(
    req: CreateEtcdInstanceRequest,
    cb?: (error: string, rep: CreateEtcdInstanceResponse) => void
  ): Promise<CreateEtcdInstanceResponse> {
    return this.request("CreateEtcdInstance", req, cb)
  }

  /**
   * 查看etcd集群配额
   */
  async DescribeEtcdQuota(
    req?: DescribeEtcdQuotaRequest,
    cb?: (error: string, rep: DescribeEtcdQuotaResponse) => void
  ): Promise<DescribeEtcdQuotaResponse> {
    return this.request("DescribeEtcdQuota", req, cb)
  }

  /**
   * 查看etcd支持地域
   */
  async DescribeEtcdRegions(
    req?: DescribeEtcdRegionsRequest,
    cb?: (error: string, rep: DescribeEtcdRegionsResponse) => void
  ): Promise<DescribeEtcdRegionsResponse> {
    return this.request("DescribeEtcdRegions", req, cb)
  }
}
