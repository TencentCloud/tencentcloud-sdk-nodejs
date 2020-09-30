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
  DisableRsgAsGroupRequest,
  ExposeServiceResponse,
  RsgAsActivityRelatedInstance,
  DeleteJobResponse,
  DeleteRuntimeResponse,
  CreateJobRequest,
  ExposeServiceRequest,
  DescribeServiceConfigsResponse,
  Scaler,
  CreateJobResponse,
  DeleteServiceResponse,
  DescribeRsgAsGroupsResponse,
  UpdateServiceResponse,
  Instance,
  UpdateRsgAsGroupResponse,
  DescribeServicesResponse,
  DescribeResourceGroupsResponse,
  DescribeRsgAsGroupsRequest,
  DeleteResourceGroupRequest,
  Conditions,
  DescribeServiceConfigsRequest,
  DeleteRsgAsGroupRequest,
  ReplicaInfo,
  DeleteServiceConfigResponse,
  UpdateRsgAsGroupRequest,
  DeleteRsgAsGroupResponse,
  Config,
  Option,
  PredictInput,
  CreateRuntimeResponse,
  Job,
  UpdateJobRequest,
  DescribeResourceGroupsRequest,
  DescribeRuntimesResponse,
  DeleteInstanceResponse,
  DescribeInstancesResponse,
  DeleteResourceGroupResponse,
  DisableRsgAsGroupResponse,
  DescribeInstancesRequest,
  CreateServiceResponse,
  CreateServiceRequest,
  EnableRsgAsGroupResponse,
  JobStatus,
  UpdateServiceRequest,
  Filter,
  CreateServiceConfigResponse,
  ExposeInfo,
  RsgAsGroup,
  DeleteServiceRequest,
  Runtime,
  CreateRsgAsGroupResponse,
  ServiceStatus,
  RsgAsGroupActivity,
  DescribeRsgAsGroupActivitiesRequest,
  ResourceGroup,
  DeleteJobRequest,
  DeleteInstanceRequest,
  CreateRsgAsGroupRequest,
  DescribeRuntimesRequest,
  EnableRsgAsGroupRequest,
  CreateServiceConfigRequest,
  QuantizationInput,
  UpdateJobResponse,
  CreateRuntimeRequest,
  ModelService,
  DeleteServiceConfigRequest,
  DeleteRuntimeRequest,
  DescribeRsgAsGroupActivitiesResponse,
  DescribeServicesRequest,
} from "./tiems_models"

/**
 * tiems client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("tiems.tencentcloudapi.com", "2019-04-16", clientConfig)
  }

  /**
   * 创建服务
   */
  async CreateService(
    req: CreateServiceRequest,
    cb?: (error: string, rep: CreateServiceResponse) => void
  ): Promise<CreateServiceResponse> {
    return this.request("CreateService", req, cb)
  }

  /**
   * 创建服务配置
   */
  async CreateServiceConfig(
    req: CreateServiceConfigRequest,
    cb?: (error: string, rep: CreateServiceConfigResponse) => void
  ): Promise<CreateServiceConfigResponse> {
    return this.request("CreateServiceConfig", req, cb)
  }

  /**
   * 创建资源组的伸缩组。当前一个资源组仅允许创建一个伸缩组。
   */
  async CreateRsgAsGroup(
    req: CreateRsgAsGroupRequest,
    cb?: (error: string, rep: CreateRsgAsGroupResponse) => void
  ): Promise<CreateRsgAsGroupResponse> {
    return this.request("CreateRsgAsGroup", req, cb)
  }

  /**
   * 删除资源组中的节点。目前仅支持删除已经到期的预付费节点，和按量付费节点。
   */
  async DeleteInstance(
    req: DeleteInstanceRequest,
    cb?: (error: string, rep: DeleteInstanceResponse) => void
  ): Promise<DeleteInstanceResponse> {
    return this.request("DeleteInstance", req, cb)
  }

  /**
   * 删除服务
   */
  async DeleteService(
    req: DeleteServiceRequest,
    cb?: (error: string, rep: DeleteServiceResponse) => void
  ): Promise<DeleteServiceResponse> {
    return this.request("DeleteService", req, cb)
  }

  /**
   * 创建任务
   */
  async CreateJob(
    req: CreateJobRequest,
    cb?: (error: string, rep: CreateJobResponse) => void
  ): Promise<CreateJobResponse> {
    return this.request("CreateJob", req, cb)
  }

  /**
   * 更新资源组的伸缩组
   */
  async UpdateRsgAsGroup(
    req: UpdateRsgAsGroupRequest,
    cb?: (error: string, rep: UpdateRsgAsGroupResponse) => void
  ): Promise<UpdateRsgAsGroupResponse> {
    return this.request("UpdateRsgAsGroup", req, cb)
  }

  /**
   * 描述服务
   */
  async DescribeServices(
    req: DescribeServicesRequest,
    cb?: (error: string, rep: DescribeServicesResponse) => void
  ): Promise<DescribeServicesResponse> {
    return this.request("DescribeServices", req, cb)
  }

  /**
   * 停用资源组的伸缩组
   */
  async DisableRsgAsGroup(
    req: DisableRsgAsGroupRequest,
    cb?: (error: string, rep: DisableRsgAsGroupResponse) => void
  ): Promise<DisableRsgAsGroupResponse> {
    return this.request("DisableRsgAsGroup", req, cb)
  }

  /**
   * 更新服务
   */
  async UpdateService(
    req: UpdateServiceRequest,
    cb?: (error: string, rep: UpdateServiceResponse) => void
  ): Promise<UpdateServiceResponse> {
    return this.request("UpdateService", req, cb)
  }

  /**
   * 创建运行环境
   */
  async CreateRuntime(
    req: CreateRuntimeRequest,
    cb?: (error: string, rep: CreateRuntimeResponse) => void
  ): Promise<CreateRuntimeResponse> {
    return this.request("CreateRuntime", req, cb)
  }

  /**
   * 删除服务配置
   */
  async DeleteServiceConfig(
    req: DeleteServiceConfigRequest,
    cb?: (error: string, rep: DeleteServiceConfigResponse) => void
  ): Promise<DeleteServiceConfigResponse> {
    return this.request("DeleteServiceConfig", req, cb)
  }

  /**
   * 获取节点列表
   */
  async DescribeInstances(
    req: DescribeInstancesRequest,
    cb?: (error: string, rep: DescribeInstancesResponse) => void
  ): Promise<DescribeInstancesResponse> {
    return this.request("DescribeInstances", req, cb)
  }

  /**
   * 查询伸缩组活动
   */
  async DescribeRsgAsGroupActivities(
    req: DescribeRsgAsGroupActivitiesRequest,
    cb?: (error: string, rep: DescribeRsgAsGroupActivitiesResponse) => void
  ): Promise<DescribeRsgAsGroupActivitiesResponse> {
    return this.request("DescribeRsgAsGroupActivities", req, cb)
  }

  /**
   * 描述服务运行环境
   */
  async DescribeRuntimes(
    req?: DescribeRuntimesRequest,
    cb?: (error: string, rep: DescribeRuntimesResponse) => void
  ): Promise<DescribeRuntimesResponse> {
    return this.request("DescribeRuntimes", req, cb)
  }

  /**
   * 获取资源组列表
   */
  async DescribeResourceGroups(
    req: DescribeResourceGroupsRequest,
    cb?: (error: string, rep: DescribeResourceGroupsResponse) => void
  ): Promise<DescribeResourceGroupsResponse> {
    return this.request("DescribeResourceGroups", req, cb)
  }

  /**
   * 更新任务
   */
  async UpdateJob(
    req: UpdateJobRequest,
    cb?: (error: string, rep: UpdateJobResponse) => void
  ): Promise<UpdateJobResponse> {
    return this.request("UpdateJob", req, cb)
  }

  /**
   * 伸缩
   */
  async DeleteRsgAsGroup(
    req: DeleteRsgAsGroupRequest,
    cb?: (error: string, rep: DeleteRsgAsGroupResponse) => void
  ): Promise<DeleteRsgAsGroupResponse> {
    return this.request("DeleteRsgAsGroup", req, cb)
  }

  /**
   * 删除资源组
   */
  async DeleteResourceGroup(
    req: DeleteResourceGroupRequest,
    cb?: (error: string, rep: DeleteResourceGroupResponse) => void
  ): Promise<DeleteResourceGroupResponse> {
    return this.request("DeleteResourceGroup", req, cb)
  }

  /**
   * 删除运行环境
   */
  async DeleteRuntime(
    req: DeleteRuntimeRequest,
    cb?: (error: string, rep: DeleteRuntimeResponse) => void
  ): Promise<DeleteRuntimeResponse> {
    return this.request("DeleteRuntime", req, cb)
  }

  /**
   * 暴露服务
   */
  async ExposeService(
    req: ExposeServiceRequest,
    cb?: (error: string, rep: ExposeServiceResponse) => void
  ): Promise<ExposeServiceResponse> {
    return this.request("ExposeService", req, cb)
  }

  /**
   * 删除任务
   */
  async DeleteJob(
    req: DeleteJobRequest,
    cb?: (error: string, rep: DeleteJobResponse) => void
  ): Promise<DeleteJobResponse> {
    return this.request("DeleteJob", req, cb)
  }

  /**
   * 启用资源组的伸缩组
   */
  async EnableRsgAsGroup(
    req: EnableRsgAsGroupRequest,
    cb?: (error: string, rep: EnableRsgAsGroupResponse) => void
  ): Promise<EnableRsgAsGroupResponse> {
    return this.request("EnableRsgAsGroup", req, cb)
  }

  /**
   * 描述服务配置
   */
  async DescribeServiceConfigs(
    req: DescribeServiceConfigsRequest,
    cb?: (error: string, rep: DescribeServiceConfigsResponse) => void
  ): Promise<DescribeServiceConfigsResponse> {
    return this.request("DescribeServiceConfigs", req, cb)
  }

  /**
   * 查询资源组的伸缩组信息
   */
  async DescribeRsgAsGroups(
    req: DescribeRsgAsGroupsRequest,
    cb?: (error: string, rep: DescribeRsgAsGroupsResponse) => void
  ): Promise<DescribeRsgAsGroupsResponse> {
    return this.request("DescribeRsgAsGroups", req, cb)
  }
}
