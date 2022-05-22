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
  ClusterSetting,
  PodSaleSpec,
  ScaleOutInstanceResponse,
  PodVolume,
  SyncPodStateResponse,
  CreateInstanceResponse,
  TerminateTasksRequest,
  HostVolumeContext,
  Step,
  SubnetInfo,
  MetaDbInfo,
  DiskSpec,
  COSSettings,
  ClusterInstancesInfo,
  ScaleOutInstanceRequest,
  QuotaEntity,
  TopologyInfo,
  Tag,
  EmrListInstance,
  ModifyResourceScheduleConfigResponse,
  EmrProductConfigOutter,
  VPCSettings,
  DescribeInstancesListResponse,
  DescribeInstanceRenewNodesRequest,
  JobResult,
  PodSpec,
  InquiryPriceRenewInstanceResponse,
  DescribeJobFlowRequest,
  InquiryPriceCreateInstanceResponse,
  TerminateInstanceRequest,
  JobFlowResourceSpec,
  Configuration,
  DescribeResourceScheduleRequest,
  Placement,
  PodParameter,
  DescribeUsersForUserManagerRequest,
  RenewInstancesInfo,
  RunJobFlowResponse,
  MultiDisk,
  SearchItem,
  MultiZoneSetting,
  TerminateInstanceResponse,
  InquiryPriceUpdateInstanceResponse,
  NewResourceSpec,
  PersistentVolumeContext,
  DescribeResourceScheduleResponse,
  ModifyResourceSchedulerRequest,
  LoginSettings,
  RunJobFlowRequest,
  PriceResource,
  CustomServiceDefine,
  DescribeCvmQuotaResponse,
  BootstrapAction,
  DescribeCvmQuotaRequest,
  DescribeClusterNodesRequest,
  SyncPodStateRequest,
  CreateInstanceRequest,
  Execution,
  UpdateInstanceSettings,
  DescribeInstancesRequest,
  InquiryPriceUpdateInstanceRequest,
  DescribeInstancesListRequest,
  OutterResource,
  ModifyResourcePoolsResponse,
  TerminateTasksResponse,
  DescribeInstancesResponse,
  DescribeUsersForUserManagerResponse,
  InquiryPriceRenewInstanceRequest,
  CdbInfo,
  InquirePriceRenewEmrResponse,
  MultiDiskMC,
  AddUsersForUserManagerRequest,
  CustomMetaInfo,
  InquiryPriceCreateInstanceRequest,
  DescribeClusterNodesResponse,
  ModifyResourceScheduleConfigRequest,
  UserInfoForUserManager,
  DynamicPodSpec,
  PodState,
  ExternalService,
  PreExecuteFileSettings,
  ClusterExternalServiceInfo,
  InquiryPriceScaleOutInstanceRequest,
  Resource,
  Filters,
  InquirePriceRenewEmrRequest,
  DescribeInstanceRenewNodesResponse,
  DiskGroup,
  InquiryPriceScaleOutInstanceResponse,
  ModifyResourceSchedulerResponse,
  ShortNodeInfo,
  AddUsersForUserManagerResponse,
  NodeHardwareInfo,
  JobFlowResource,
  ModifyResourcePoolsRequest,
  DescribeJobFlowResponse,
  InstanceChargePrepaid,
} from "./emr_models"

/**
 * emr client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("emr.tencentcloudapi.com", "2019-01-03", clientConfig)
  }

  /**
   * 销毁EMR实例。此接口仅支持弹性MapReduce正式计费版本。
   */
  async TerminateInstance(
    req: TerminateInstanceRequest,
    cb?: (error: string, rep: TerminateInstanceResponse) => void
  ): Promise<TerminateInstanceResponse> {
    return this.request("TerminateInstance", req, cb)
  }

  /**
   * 变配询价
   */
  async InquiryPriceUpdateInstance(
    req: InquiryPriceUpdateInstanceRequest,
    cb?: (error: string, rep: InquiryPriceUpdateInstanceResponse) => void
  ): Promise<InquiryPriceUpdateInstanceResponse> {
    return this.request("InquiryPriceUpdateInstance", req, cb)
  }

  /**
   * 批量导出用户
   */
  async DescribeUsersForUserManager(
    req: DescribeUsersForUserManagerRequest,
    cb?: (error: string, rep: DescribeUsersForUserManagerResponse) => void
  ): Promise<DescribeUsersForUserManagerResponse> {
    return this.request("DescribeUsersForUserManager", req, cb)
  }

  /**
   * 续费询价。
   */
  async InquiryPriceRenewInstance(
    req: InquiryPriceRenewInstanceRequest,
    cb?: (error: string, rep: InquiryPriceRenewInstanceResponse) => void
  ): Promise<InquiryPriceRenewInstanceResponse> {
    return this.request("InquiryPriceRenewInstance", req, cb)
  }

  /**
   * 查询流程任务
   */
  async DescribeJobFlow(
    req: DescribeJobFlowRequest,
    cb?: (error: string, rep: DescribeJobFlowResponse) => void
  ): Promise<DescribeJobFlowResponse> {
    return this.request("DescribeJobFlow", req, cb)
  }

  /**
   * 集群续费询价。
   */
  async InquirePriceRenewEmr(
    req: InquirePriceRenewEmrRequest,
    cb?: (error: string, rep: InquirePriceRenewEmrResponse) => void
  ): Promise<InquirePriceRenewEmrResponse> {
    return this.request("InquirePriceRenewEmr", req, cb)
  }

  /**
   * 扩容询价. 当扩容时候，请通过该接口查询价格。
   */
  async InquiryPriceScaleOutInstance(
    req: InquiryPriceScaleOutInstanceRequest,
    cb?: (error: string, rep: InquiryPriceScaleOutInstanceResponse) => void
  ): Promise<InquiryPriceScaleOutInstanceResponse> {
    return this.request("InquiryPriceScaleOutInstance", req, cb)
  }

  /**
   * 获取账户的CVM配额
   */
  async DescribeCvmQuota(
    req: DescribeCvmQuotaRequest,
    cb?: (error: string, rep: DescribeCvmQuotaResponse) => void
  ): Promise<DescribeCvmQuotaResponse> {
    return this.request("DescribeCvmQuota", req, cb)
  }

  /**
   * 实例扩容
   */
  async ScaleOutInstance(
    req: ScaleOutInstanceRequest,
    cb?: (error: string, rep: ScaleOutInstanceResponse) => void
  ): Promise<ScaleOutInstanceResponse> {
    return this.request("ScaleOutInstance", req, cb)
  }

  /**
   * 查询EMR实例
   */
  async DescribeInstances(
    req: DescribeInstancesRequest,
    cb?: (error: string, rep: DescribeInstancesResponse) => void
  ): Promise<DescribeInstancesResponse> {
    return this.request("DescribeInstances", req, cb)
  }

  /**
   * 创建流程作业
   */
  async RunJobFlow(
    req: RunJobFlowRequest,
    cb?: (error: string, rep: RunJobFlowResponse) => void
  ): Promise<RunJobFlowResponse> {
    return this.request("RunJobFlow", req, cb)
  }

  /**
   * 新增用户列表（用户管理）
   */
  async AddUsersForUserManager(
    req: AddUsersForUserManagerRequest,
    cb?: (error: string, rep: AddUsersForUserManagerResponse) => void
  ): Promise<AddUsersForUserManagerResponse> {
    return this.request("AddUsersForUserManager", req, cb)
  }

  /**
   * 预付费集群隔离后续费资源查询
   */
  async DescribeInstanceRenewNodes(
    req: DescribeInstanceRenewNodesRequest,
    cb?: (error: string, rep: DescribeInstanceRenewNodesResponse) => void
  ): Promise<DescribeInstanceRenewNodesResponse> {
    return this.request("DescribeInstanceRenewNodes", req, cb)
  }

  /**
   * 修改了yarn的资源调度器，点击部署生效
   */
  async ModifyResourceScheduler(
    req: ModifyResourceSchedulerRequest,
    cb?: (error: string, rep: ModifyResourceSchedulerResponse) => void
  ): Promise<ModifyResourceSchedulerResponse> {
    return this.request("ModifyResourceScheduler", req, cb)
  }

  /**
   * EMR同步TKE中POD状态
   */
  async SyncPodState(
    req: SyncPodStateRequest,
    cb?: (error: string, rep: SyncPodStateResponse) => void
  ): Promise<SyncPodStateResponse> {
    return this.request("SyncPodState", req, cb)
  }

  /**
   * 创建EMR集群实例
   */
  async CreateInstance(
    req: CreateInstanceRequest,
    cb?: (error: string, rep: CreateInstanceResponse) => void
  ): Promise<CreateInstanceResponse> {
    return this.request("CreateInstance", req, cb)
  }

  /**
   * 创建实例询价
   */
  async InquiryPriceCreateInstance(
    req: InquiryPriceCreateInstanceRequest,
    cb?: (error: string, rep: InquiryPriceCreateInstanceResponse) => void
  ): Promise<InquiryPriceCreateInstanceResponse> {
    return this.request("InquiryPriceCreateInstance", req, cb)
  }

  /**
   * 获取yarn资源调度页面的数据
   */
  async DescribeResourceSchedule(
    req: DescribeResourceScheduleRequest,
    cb?: (error: string, rep: DescribeResourceScheduleResponse) => void
  ): Promise<DescribeResourceScheduleResponse> {
    return this.request("DescribeResourceSchedule", req, cb)
  }

  /**
   * 修改yarn资源调度的资源配置
   */
  async ModifyResourceScheduleConfig(
    req: ModifyResourceScheduleConfigRequest,
    cb?: (error: string, rep: ModifyResourceScheduleConfigResponse) => void
  ): Promise<ModifyResourceScheduleConfigResponse> {
    return this.request("ModifyResourceScheduleConfig", req, cb)
  }

  /**
   * 缩容Task节点
   */
  async TerminateTasks(
    req: TerminateTasksRequest,
    cb?: (error: string, rep: TerminateTasksResponse) => void
  ): Promise<TerminateTasksResponse> {
    return this.request("TerminateTasks", req, cb)
  }

  /**
   * 查询硬件节点信息
   */
  async DescribeClusterNodes(
    req: DescribeClusterNodesRequest,
    cb?: (error: string, rep: DescribeClusterNodesResponse) => void
  ): Promise<DescribeClusterNodesResponse> {
    return this.request("DescribeClusterNodes", req, cb)
  }

  /**
   * EMR集群实例列表查询
   */
  async DescribeInstancesList(
    req: DescribeInstancesListRequest,
    cb?: (error: string, rep: DescribeInstancesListResponse) => void
  ): Promise<DescribeInstancesListResponse> {
    return this.request("DescribeInstancesList", req, cb)
  }

  /**
   * 刷新动态资源池
   */
  async ModifyResourcePools(
    req: ModifyResourcePoolsRequest,
    cb?: (error: string, rep: ModifyResourcePoolsResponse) => void
  ): Promise<ModifyResourcePoolsResponse> {
    return this.request("ModifyResourcePools", req, cb)
  }
}
