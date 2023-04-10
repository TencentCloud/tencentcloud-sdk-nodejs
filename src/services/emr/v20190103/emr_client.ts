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
  PodSpecInfo,
  PodSaleSpec,
  ScaleOutInstanceResponse,
  PodVolume,
  SyncPodStateResponse,
  CreateInstanceResponse,
  TerminateTasksRequest,
  HostVolumeContext,
  ScaleOutClusterRequest,
  DiskSpecInfo,
  Step,
  DescribeEmrApplicationStaticsRequest,
  UserManagerFilter,
  MetaDbInfo,
  DiskSpec,
  COSSettings,
  ClusterInstancesInfo,
  ScaleOutInstanceRequest,
  ZoneDetailPriceResult,
  PodNewSpec,
  NodeResourceSpec,
  ModifyResourceScheduleConfigResponse,
  TopologyInfo,
  NodeDetailPriceResult,
  Tag,
  EmrListInstance,
  AddUsersForUserManagerResponse,
  EmrProductConfigOutter,
  VPCSettings,
  DescribeInstancesListResponse,
  DescribeInstanceRenewNodesRequest,
  JobResult,
  PartDetailPriceItem,
  DependService,
  PodSpec,
  InquiryPriceRenewInstanceResponse,
  DescribeJobFlowRequest,
  InquiryPriceCreateInstanceResponse,
  StartStopServiceOrMonitorRequest,
  TerminateInstanceRequest,
  JobFlowResourceSpec,
  Configuration,
  DescribeResourceScheduleRequest,
  Placement,
  QuotaEntity,
  PodParameter,
  AllNodeResourceSpec,
  DescribeUsersForUserManagerRequest,
  RenewInstancesInfo,
  RunJobFlowResponse,
  StartStopServiceOrMonitorResponse,
  MultiDisk,
  PodNewParameter,
  SearchItem,
  MultiZoneSetting,
  TerminateInstanceResponse,
  InquiryPriceUpdateInstanceResponse,
  NewResourceSpec,
  PersistentVolumeContext,
  ScaleOutNodeConfig,
  DeleteUserManagerUserListRequest,
  DescribeResourceScheduleResponse,
  TerminateClusterNodesResponse,
  ModifyResourceSchedulerRequest,
  LoginSettings,
  RunJobFlowRequest,
  PriceResource,
  CustomServiceDefine,
  CreateClusterResponse,
  SubnetInfo,
  DescribeCvmQuotaResponse,
  CreateClusterRequest,
  BootstrapAction,
  DescribeCvmQuotaRequest,
  DescribeClusterNodesRequest,
  ComponentBasicRestartInfo,
  CreateInstanceRequest,
  Execution,
  UpdateInstanceSettings,
  ScriptBootstrapActionConfig,
  DescribeInstancesRequest,
  InquiryPriceUpdateInstanceRequest,
  TerminateClusterNodesRequest,
  DescribeInstancesListRequest,
  OutterResource,
  OpScope,
  DeleteUserManagerUserListResponse,
  ModifyResourcePoolsResponse,
  TerminateTasksResponse,
  DescribeInstancesResponse,
  DescribeUsersForUserManagerResponse,
  InquiryPriceRenewInstanceRequest,
  CdbInfo,
  PriceDetail,
  InquirePriceRenewEmrResponse,
  MultiDiskMC,
  AddUsersForUserManagerRequest,
  ZoneResourceConfiguration,
  SyncPodStateRequest,
  CustomMetaInfo,
  ApplicationStatics,
  InquiryPriceCreateInstanceRequest,
  DescribeClusterNodesResponse,
  ModifyResourceScheduleConfigRequest,
  UserInfoForUserManager,
  DynamicPodSpec,
  PodState,
  ExternalService,
  PreExecuteFileSettings,
  ClusterExternalServiceInfo,
  SoftDependInfo,
  InquiryPriceScaleOutInstanceRequest,
  Resource,
  Filters,
  DescribeEmrApplicationStaticsResponse,
  InquirePriceRenewEmrRequest,
  DescribeInstanceRenewNodesResponse,
  CustomMetaDBInfo,
  UserManagerUserBriefInfo,
  DiskGroup,
  InquiryPriceScaleOutInstanceResponse,
  ModifyResourceSchedulerResponse,
  VirtualPrivateCloud,
  SceneSoftwareConfig,
  ShortNodeInfo,
  EmrPrice,
  NodeHardwareInfo,
  ServiceBasicRestartInfo,
  ScaleOutClusterResponse,
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
   * 创建EMR集群实例
   */
  async CreateCluster(
    req: CreateClusterRequest,
    cb?: (error: string, rep: CreateClusterResponse) => void
  ): Promise<CreateClusterResponse> {
    return this.request("CreateCluster", req, cb)
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
   * 扩容节点
   */
  async ScaleOutInstance(
    req: ScaleOutInstanceRequest,
    cb?: (error: string, rep: ScaleOutInstanceResponse) => void
  ): Promise<ScaleOutInstanceResponse> {
    return this.request("ScaleOutInstance", req, cb)
  }

  /**
   * 查询集群实例信息
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
   * 销毁集群节点
   */
  async TerminateClusterNodes(
    req: TerminateClusterNodesRequest,
    cb?: (error: string, rep: TerminateClusterNodesResponse) => void
  ): Promise<TerminateClusterNodesResponse> {
    return this.request("TerminateClusterNodes", req, cb)
  }

  /**
     * 该接口支持安装了OpenLdap组件的集群。
批量导出用户。对于kerberos集群，如果需要kertab文件下载地址，可以将NeedKeytabInfo设置为true；注意SupportDownLoadKeyTab为true，但是DownLoadKeyTabUrl为空字符串，表示keytab文件在后台没有准备好（正在生成）。
     */
  async DescribeUsersForUserManager(
    req: DescribeUsersForUserManagerRequest,
    cb?: (error: string, rep: DescribeUsersForUserManagerResponse) => void
  ): Promise<DescribeUsersForUserManagerResponse> {
    return this.request("DescribeUsersForUserManager", req, cb)
  }

  /**
     * 删除用户列表（用户管理）

     */
  async DeleteUserManagerUserList(
    req: DeleteUserManagerUserListRequest,
    cb?: (error: string, rep: DeleteUserManagerUserListResponse) => void
  ): Promise<DeleteUserManagerUserListResponse> {
    return this.request("DeleteUserManagerUserList", req, cb)
  }

  /**
     * 该接口支持安装了OpenLdap组件的集群。
新增用户列表（用户管理）。
     */
  async AddUsersForUserManager(
    req: AddUsersForUserManagerRequest,
    cb?: (error: string, rep: AddUsersForUserManagerResponse) => void
  ): Promise<AddUsersForUserManagerResponse> {
    return this.request("AddUsersForUserManager", req, cb)
  }

  /**
   *  yarn application 统计接口查询
   */
  async DescribeEmrApplicationStatics(
    req: DescribeEmrApplicationStaticsRequest,
    cb?: (error: string, rep: DescribeEmrApplicationStaticsResponse) => void
  ): Promise<DescribeEmrApplicationStaticsResponse> {
    return this.request("DescribeEmrApplicationStatics", req, cb)
  }

  /**
   * 查询待续费节点信息
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
   * 查询YARN资源调度数据信息
   */
  async DescribeResourceSchedule(
    req: DescribeResourceScheduleRequest,
    cb?: (error: string, rep: DescribeResourceScheduleResponse) => void
  ): Promise<DescribeResourceScheduleResponse> {
    return this.request("DescribeResourceSchedule", req, cb)
  }

  /**
   * 修改YARN资源调度的资源配置
   */
  async ModifyResourceScheduleConfig(
    req: ModifyResourceScheduleConfigRequest,
    cb?: (error: string, rep: ModifyResourceScheduleConfigResponse) => void
  ): Promise<ModifyResourceScheduleConfigResponse> {
    return this.request("ModifyResourceScheduleConfig", req, cb)
  }

  /**
   * 用于启动或停止监控或服务
   */
  async StartStopServiceOrMonitor(
    req: StartStopServiceOrMonitorRequest,
    cb?: (error: string, rep: StartStopServiceOrMonitorResponse) => void
  ): Promise<StartStopServiceOrMonitorResponse> {
    return this.request("StartStopServiceOrMonitor", req, cb)
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
   * 查询集群节点信息
   */
  async DescribeClusterNodes(
    req: DescribeClusterNodesRequest,
    cb?: (error: string, rep: DescribeClusterNodesResponse) => void
  ): Promise<DescribeClusterNodesResponse> {
    return this.request("DescribeClusterNodes", req, cb)
  }

  /**
   * 查询集群列表
   */
  async DescribeInstancesList(
    req: DescribeInstancesListRequest,
    cb?: (error: string, rep: DescribeInstancesListResponse) => void
  ): Promise<DescribeInstancesListResponse> {
    return this.request("DescribeInstancesList", req, cb)
  }

  /**
   * 刷新YARN的动态资源池
   */
  async ModifyResourcePools(
    req: ModifyResourcePoolsRequest,
    cb?: (error: string, rep: ModifyResourcePoolsResponse) => void
  ): Promise<ModifyResourcePoolsResponse> {
    return this.request("ModifyResourcePools", req, cb)
  }

  /**
   * 扩容集群节点
   */
  async ScaleOutCluster(
    req: ScaleOutClusterRequest,
    cb?: (error: string, rep: ScaleOutClusterResponse) => void
  ): Promise<ScaleOutClusterResponse> {
    return this.request("ScaleOutCluster", req, cb)
  }
}
