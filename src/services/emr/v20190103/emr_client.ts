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
  AddNodeResourceConfigRequest,
  MonthRepeatStrategy,
  ClusterSetting,
  ModifyResourceResponse,
  ZoneSetting,
  PodSpecInfo,
  PodSaleSpec,
  DescribeHBaseTableOverviewRequest,
  NodeSelector,
  DescribeClusterFlowStatusDetailResponse,
  RunJobFlowResponse,
  DynamicPodSpec,
  DescribeHDFSStorageInfoResponse,
  ModifyUserManagerPwdResponse,
  ImpalaQuery,
  DescribeHiveQueriesRequest,
  ModifyPodNumResponse,
  CreateInstanceResponse,
  PersistentVolumeContext,
  TerminateTasksRequest,
  HostVolumeContext,
  DescribeServiceNodeInfosRequest,
  DiskSpecInfo,
  HiveQuery,
  FairGlobalConfig,
  Step,
  PreExecuteFileSettings,
  KeyValue,
  DescribeServiceNodeInfosResponse,
  EmrProductConfigDetail,
  ResetYarnConfigRequest,
  DayRepeatStrategy,
  DescribeTrinoQueryInfoResponse,
  PriceResult,
  TrinoQueryInfo,
  PreferredSchedulingTerm,
  SparkQuery,
  Dps,
  DescribeSparkQueriesRequest,
  DeleteAutoScaleStrategyResponse,
  OverviewRow,
  DiskSpec,
  LoadAutoScaleStrategy,
  ModifyPodNumRequest,
  SLInstanceInfo,
  DefaultSetting,
  COSSettings,
  ClusterInstancesInfo,
  ModifyResourcesTagsResponse,
  CreateCloudInstanceResponse,
  ScaleOutInstanceRequest,
  DescribeInstanceRenewNodesResponse,
  KyuubiQueryInfo,
  DescribeHBaseTableOverviewResponse,
  DescribeAutoScaleGroupGlobalConfRequest,
  ModifyAutoScaleStrategyRequest,
  FlowParamsDesc,
  AttachDisksRequest,
  DescribeInstancesResponse,
  ModifyYarnDeployResponse,
  ModifyResourceScheduleConfigResponse,
  InsightResult,
  NodeDetailPriceResult,
  UserAndGroup,
  VolumeSetting,
  Tag,
  DescribeKyuubiQueryInfoResponse,
  TerminateSLInstanceRequest,
  Arg,
  ClusterIDToFlowID,
  EmrListInstance,
  Disk,
  ZoneDetailPriceResult,
  AddUsersForUserManagerResponse,
  SearchItem,
  DescribeResourceScheduleDiffDetailResponse,
  DescribeYarnQueueResponse,
  TopologyInfo,
  SchedulerTaskDetail,
  ScaleOutInstanceResponse,
  NodeResourceSpec,
  AddMetricScaleStrategyRequest,
  DeleteNodeResourceConfigRequest,
  EmrProductConfigOutter,
  HostPathVolumeSource,
  VPCSettings,
  DiffHeader,
  DescribeInstancesListResponse,
  DescribeInstanceRenewNodesRequest,
  DescribeSparkQueriesResponse,
  JobResult,
  PrePaySetting,
  FlowParam,
  NodeAffinity,
  DescribeAutoScaleStrategiesResponse,
  DescribeNodeDataDisksRequest,
  ModifyGlobalConfigRequest,
  StopParams,
  DependService,
  PodSpec,
  InquiryPriceRenewInstanceResponse,
  DescribeJobFlowRequest,
  CloudResource,
  InquiryPriceCreateInstanceResponse,
  StartStopServiceOrMonitorRequest,
  StarRocksQueryInfo,
  DescribeHDFSStorageInfoRequest,
  OverviewMetricData,
  WeekRepeatStrategy,
  SchedulerTaskInfo,
  AutoScaleRecord,
  JobFlowResourceSpec,
  HealthStatus,
  Configuration,
  DescribeResourceScheduleRequest,
  PodParameter,
  SyncPodStateResponse,
  UserManagerUserBriefInfo,
  AllNodeResourceSpec,
  Placement,
  DescribeGlobalConfigResponse,
  ModifyYarnDeployRequest,
  DeleteNodeResourceConfigResponse,
  DescribeClusterFlowStatusDetailRequest,
  DescribeUsersForUserManagerRequest,
  TerminateClusterNodesResponse,
  DescribeDAGInfoResponse,
  DiffDetail,
  DescribeInsightListRequest,
  DescribeSLInstanceListRequest,
  StartStopServiceOrMonitorResponse,
  DescribeHiveQueriesResponse,
  ResizeDataDisksResponse,
  DescribeYarnQueueRequest,
  ConfigSetInfo,
  ModifyResourceRequest,
  GroupGlobalConfs,
  ServiceNodeDetailInfo,
  ScaleOutServiceConfGroupsInfo,
  CreateSLInstanceResponse,
  SetNodeResourceConfigDefaultRequest,
  DescribeYarnScheduleHistoryResponse,
  DescribeDAGInfoRequest,
  DescribeAutoScaleGroupGlobalConfResponse,
  Resource,
  ResetYarnConfigResponse,
  DescribeClusterNodesResponse,
  DescribeYarnApplicationsRequest,
  DescribeYarnScheduleHistoryRequest,
  NewResourceSpec,
  DiskGroup,
  ScaleOutNodeConfig,
  DeleteUserManagerUserListRequest,
  PodVolume,
  PriceDetail,
  DescribeResourceScheduleResponse,
  UserManagerFilter,
  MultiDisk,
  TerminateInstanceRequest,
  DescribeNodeResourceConfigFastRequest,
  MetricTags,
  ExternalAccess,
  ModifyResourceSchedulerRequest,
  TableSchemaItem,
  LoginSettings,
  RunJobFlowRequest,
  DescribeKyuubiQueryInfoRequest,
  PriceResource,
  ModifyGlobalConfigResponse,
  DescribeNodeResourceConfigFastResponse,
  TimeAutoScaleStrategy,
  ModifySLInstanceRequest,
  DescribeInsightListResponse,
  CustomServiceDefine,
  StageInfoDetail,
  CreateClusterResponse,
  DescribeAutoScaleRecordsResponse,
  DescribeCvmQuotaResponse,
  DAGInfo,
  CreateClusterRequest,
  CreateCloudInstanceRequest,
  AddMetricScaleStrategyResponse,
  SubnetInfo,
  BootstrapAction,
  NodeResource,
  DescribeClusterNodesRequest,
  ModifyInstanceBasicResponse,
  ModifyYarnQueueV2Request,
  DescribeCvmQuotaRequest,
  DescribeImpalaQueriesRequest,
  ComponentBasicRestartInfo,
  CreateInstanceRequest,
  DiffDetailItem,
  MetaDbInfo,
  Execution,
  DescribeSLInstanceListResponse,
  UpdateInstanceSettings,
  DescribeEmrOverviewMetricsResponse,
  ClusterRelationMeta,
  CapacityGlobalConfig,
  DescribeInstancesRequest,
  NotRepeatStrategy,
  TerminateSLInstanceResponse,
  PodNewSpec,
  ModifyAutoRenewFlagResponse,
  InquiryPriceUpdateInstanceRequest,
  UserInfoForUserManager,
  DescribeAutoScaleStrategiesRequest,
  DeployYarnConfRequest,
  DescribeNodeDataDisksResponse,
  DescribeInstancesListRequest,
  ItemSeq,
  RepeatStrategy,
  AttachDisksResponse,
  QuotaEntity,
  RenewInstancesInfo,
  OutterResource,
  OpScope,
  ResizeDataDisksRequest,
  DeleteAutoScaleStrategyRequest,
  NodeSpecDiskV2,
  CLBSetting,
  DeployYarnConfResponse,
  DeleteUserManagerUserListResponse,
  ModifyResourcePoolsResponse,
  ShortNodeInfo,
  Period,
  DescribeEmrApplicationStaticsRequest,
  ModifyInstanceBasicRequest,
  DescribeYarnApplicationsResponse,
  DescribeUsersForUserManagerResponse,
  YarnApplication,
  DescribeResourceScheduleDiffDetailRequest,
  FlowExtraDetail,
  InquiryPriceRenewInstanceRequest,
  CdbInfo,
  ModifyResourcesTagsRequest,
  InquirePriceRenewEmrResponse,
  MultiDiskMC,
  AddUsersForUserManagerRequest,
  ZoneResourceConfiguration,
  StorageSummaryDistribution,
  DescribeSLInstanceRequest,
  CustomMetaInfo,
  ApplicationStatics,
  ScaleOutClusterRequest,
  InquiryPriceCreateInstanceRequest,
  TriggerCondition,
  DescribeSLInstanceResponse,
  SyncPodStateRequest,
  MultiZoneSetting,
  ModifyAutoRenewFlagRequest,
  AddNodeResourceConfigResponse,
  CBSInstance,
  ModifyResourceScheduleConfigRequest,
  StrategyConfig,
  ScriptBootstrapActionConfig,
  PodNewParameter,
  DescribeEmrOverviewMetricsRequest,
  PodState,
  ScaleOutClusterResponse,
  ServiceProcessFunctionInfo,
  PartDetailPriceItem,
  ExternalService,
  RestartPolicy,
  InquiryPriceUpdateInstanceResponse,
  ClusterExternalServiceInfo,
  SoftDependInfo,
  ModifyAutoScaleStrategyResponse,
  InquiryPriceScaleOutInstanceRequest,
  DescribeStarRocksQueryInfoRequest,
  ModifySLInstanceResponse,
  LoadMetricsConditions,
  JobFlowResource,
  DescribeEmrApplicationStaticsResponse,
  InquirePriceRenewEmrRequest,
  ModifyResourceTags,
  LoadMetricsCondition,
  DescribeImpalaQueriesResponse,
  CustomMetaDBInfo,
  Item,
  SetNodeResourceConfigDefaultResponse,
  DescribeStarRocksQueryInfoResponse,
  ModifyYarnQueueV2Response,
  ConfigModifyInfoV2,
  ModifyUserManagerPwdRequest,
  InquiryPriceScaleOutInstanceResponse,
  DescribeJobFlowResponse,
  ModifyResourceSchedulerResponse,
  VirtualPrivateCloud,
  NodeSelectorRequirement,
  ResourceDetail,
  SceneSoftwareConfig,
  NodeSelectorTerm,
  DescribeTrinoQueryInfoRequest,
  EmrPrice,
  TerminateTasksResponse,
  NodeHardwareInfo,
  ServiceBasicRestartInfo,
  DescribeAutoScaleRecordsRequest,
  TerminateClusterNodesRequest,
  Filters,
  ModifyResourcePoolsRequest,
  CreateSLInstanceRequest,
  AutoScaleResourceConf,
  InstanceChargePrepaid,
  DescribeGlobalConfigRequest,
  TerminateInstanceResponse,
  DescribeResourceConfig,
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
   * 查询待续费节点信息
   */
  async DescribeInstanceRenewNodes(
    req: DescribeInstanceRenewNodesRequest,
    cb?: (error: string, rep: DescribeInstanceRenewNodesResponse) => void
  ): Promise<DescribeInstanceRenewNodesResponse> {
    return this.request("DescribeInstanceRenewNodes", req, cb)
  }

  /**
   * 强制修改标签
   */
  async ModifyResourcesTags(
    req: ModifyResourcesTagsRequest,
    cb?: (error: string, rep: ModifyResourcesTagsResponse) => void
  ): Promise<ModifyResourcesTagsResponse> {
    return this.request("ModifyResourcesTags", req, cb)
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
   * DescribeImpalaQueries
   */
  async DescribeImpalaQueries(
    req: DescribeImpalaQueriesRequest,
    cb?: (error: string, rep: DescribeImpalaQueriesResponse) => void
  ): Promise<DescribeImpalaQueriesResponse> {
    return this.request("DescribeImpalaQueries", req, cb)
  }

  /**
   * 获取资源调度中的队列信息
   */
  async DescribeYarnQueue(
    req: DescribeYarnQueueRequest,
    cb?: (error: string, rep: DescribeYarnQueueResponse) => void
  ): Promise<DescribeYarnQueueResponse> {
    return this.request("DescribeYarnQueue", req, cb)
  }

  /**
   * 修改资源调度中队列信息
   */
  async ModifyYarnQueueV2(
    req: ModifyYarnQueueV2Request,
    cb?: (error: string, rep: ModifyYarnQueueV2Response) => void
  ): Promise<ModifyYarnQueueV2Response> {
    return this.request("ModifyYarnQueueV2", req, cb)
  }

  /**
   * 创建EMR容器集群实例
   */
  async CreateCloudInstance(
    req: CreateCloudInstanceRequest,
    cb?: (error: string, rep: CreateCloudInstanceResponse) => void
  ): Promise<CreateCloudInstanceResponse> {
    return this.request("CreateCloudInstance", req, cb)
  }

  /**
   * yarn资源调度-部署生效
   */
  async DeployYarnConf(
    req: DeployYarnConfRequest,
    cb?: (error: string, rep: DeployYarnConfResponse) => void
  ): Promise<DeployYarnConfResponse> {
    return this.request("DeployYarnConf", req, cb)
  }

  /**
   * 查询EMR任务运行详情状态
   */
  async DescribeClusterFlowStatusDetail(
    req: DescribeClusterFlowStatusDetailRequest,
    cb?: (error: string, rep: DescribeClusterFlowStatusDetailResponse) => void
  ): Promise<DescribeClusterFlowStatusDetailResponse> {
    return this.request("DescribeClusterFlowStatusDetail", req, cb)
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
   * 扩容询价. 当扩容时候，请通过该接口查询价格。
   */
  async InquiryPriceScaleOutInstance(
    req: InquiryPriceScaleOutInstanceRequest,
    cb?: (error: string, rep: InquiryPriceScaleOutInstanceResponse) => void
  ): Promise<InquiryPriceScaleOutInstanceResponse> {
    return this.request("InquiryPriceScaleOutInstance", req, cb)
  }

  /**
   * 获取集群的自动扩缩容的详细记录
   */
  async DescribeAutoScaleRecords(
    req: DescribeAutoScaleRecordsRequest,
    cb?: (error: string, rep: DescribeAutoScaleRecordsResponse) => void
  ): Promise<DescribeAutoScaleRecordsResponse> {
    return this.request("DescribeAutoScaleRecords", req, cb)
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
   * DescribeYarnApplications
   */
  async DescribeYarnApplications(
    req: DescribeYarnApplicationsRequest,
    cb?: (error: string, rep: DescribeYarnApplicationsResponse) => void
  ): Promise<DescribeYarnApplicationsResponse> {
    return this.request("DescribeYarnApplications", req, cb)
  }

  /**
   * 修改YARN资源调度的全局配置
   */
  async ModifyGlobalConfig(
    req: ModifyGlobalConfigRequest,
    cb?: (error: string, rep: ModifyGlobalConfigResponse) => void
  ): Promise<ModifyGlobalConfigResponse> {
    return this.request("ModifyGlobalConfig", req, cb)
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
   * 云盘挂载
   */
  async AttachDisks(
    req: AttachDisksRequest,
    cb?: (error: string, rep: AttachDisksResponse) => void
  ): Promise<AttachDisksResponse> {
    return this.request("AttachDisks", req, cb)
  }

  /**
   * 设置当前集群的某个节点规格配置为默认或取消默认
   */
  async SetNodeResourceConfigDefault(
    req: SetNodeResourceConfigDefaultRequest,
    cb?: (error: string, rep: SetNodeResourceConfigDefaultResponse) => void
  ): Promise<SetNodeResourceConfigDefaultResponse> {
    return this.request("SetNodeResourceConfigDefault", req, cb)
  }

  /**
   * 查询YARN资源调度数据信息。已废弃，请使用`DescribeYarnQueue`去查询队列信息。
   */
  async DescribeResourceSchedule(
    req: DescribeResourceScheduleRequest,
    cb?: (error: string, rep: DescribeResourceScheduleResponse) => void
  ): Promise<DescribeResourceScheduleResponse> {
    return this.request("DescribeResourceSchedule", req, cb)
  }

  /**
   * 查询StarRocks查询信息
   */
  async DescribeStarRocksQueryInfo(
    req: DescribeStarRocksQueryInfoRequest,
    cb?: (error: string, rep: DescribeStarRocksQueryInfoResponse) => void
  ): Promise<DescribeStarRocksQueryInfoResponse> {
    return this.request("DescribeStarRocksQueryInfo", req, cb)
  }

  /**
   * 获取Hbase表级监控数据概览接口
   */
  async DescribeHBaseTableOverview(
    req: DescribeHBaseTableOverviewRequest,
    cb?: (error: string, rep: DescribeHBaseTableOverviewResponse) => void
  ): Promise<DescribeHBaseTableOverviewResponse> {
    return this.request("DescribeHBaseTableOverview", req, cb)
  }

  /**
   * 查询服务进程信息
   */
  async DescribeServiceNodeInfos(
    req: DescribeServiceNodeInfosRequest,
    cb?: (error: string, rep: DescribeServiceNodeInfosResponse) => void
  ): Promise<DescribeServiceNodeInfosResponse> {
    return this.request("DescribeServiceNodeInfos", req, cb)
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
   * 部署生效。已废弃，请使用`DeployYarnConf`接口进行部署生效
   */
  async ModifyYarnDeploy(
    req: ModifyYarnDeployRequest,
    cb?: (error: string, rep: ModifyYarnDeployResponse) => void
  ): Promise<ModifyYarnDeployResponse> {
    return this.request("ModifyYarnDeploy", req, cb)
  }

  /**
   * 查询DAG信息
   */
  async DescribeDAGInfo(
    req: DescribeDAGInfoRequest,
    cb?: (error: string, rep: DescribeDAGInfoResponse) => void
  ): Promise<DescribeDAGInfoResponse> {
    return this.request("DescribeDAGInfo", req, cb)
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
   * 销毁集群节点
   */
  async TerminateClusterNodes(
    req: TerminateClusterNodesRequest,
    cb?: (error: string, rep: TerminateClusterNodesResponse) => void
  ): Promise<TerminateClusterNodesResponse> {
    return this.request("TerminateClusterNodes", req, cb)
  }

  /**
   * 修改YARN资源调度的资源配置
   */
  async ResetYarnConfig(
    req: ResetYarnConfigRequest,
    cb?: (error: string, rep: ResetYarnConfigResponse) => void
  ): Promise<ResetYarnConfigResponse> {
    return this.request("ResetYarnConfig", req, cb)
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
   * 修改用户密码（用户管理）
   */
  async ModifyUserManagerPwd(
    req: ModifyUserManagerPwdRequest,
    cb?: (error: string, rep: ModifyUserManagerPwdResponse) => void
  ): Promise<ModifyUserManagerPwdResponse> {
    return this.request("ModifyUserManagerPwd", req, cb)
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
   * 本接口（TerminateSLInstance）用于销毁Serverless HBase实例
   */
  async TerminateSLInstance(
    req: TerminateSLInstanceRequest,
    cb?: (error: string, rep: TerminateSLInstanceResponse) => void
  ): Promise<TerminateSLInstanceResponse> {
    return this.request("TerminateSLInstance", req, cb)
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
   * 缩容Task节点
   */
  async TerminateTasks(
    req: TerminateTasksRequest,
    cb?: (error: string, rep: TerminateTasksResponse) => void
  ): Promise<TerminateTasksResponse> {
    return this.request("TerminateTasks", req, cb)
  }

  /**
     * 前提：预付费集群
资源级别开启或关闭自动续费
     */
  async ModifyAutoRenewFlag(
    req: ModifyAutoRenewFlagRequest,
    cb?: (error: string, rep: ModifyAutoRenewFlagResponse) => void
  ): Promise<ModifyAutoRenewFlagResponse> {
    return this.request("ModifyAutoRenewFlag", req, cb)
  }

  /**
     * 本接口（CreateSLInstance）用于创建Serverless HBase实例
- 接口调用成功，会创建Serverless HBase实例，创建实例请求成功会返回创建实例的InstaceId和请求的 RequestID。
- 接口为异步接口，接口返回时操作并未立即完成，实例操作结果可以通过调用DescribeInstancesList查看当前实例的StatusDesc状态。
     */
  async CreateSLInstance(
    req: CreateSLInstanceRequest,
    cb?: (error: string, rep: CreateSLInstanceResponse) => void
  ): Promise<CreateSLInstanceResponse> {
    return this.request("CreateSLInstance", req, cb)
  }

  /**
   * 本接口（DescribeSLInstanceList）用于查询Serverless HBase实例列表详细信息
   */
  async DescribeSLInstanceList(
    req: DescribeSLInstanceListRequest,
    cb?: (error: string, rep: DescribeSLInstanceListResponse) => void
  ): Promise<DescribeSLInstanceListResponse> {
    return this.request("DescribeSLInstanceList", req, cb)
  }

  /**
   * 云盘扩容
   */
  async ResizeDataDisks(
    req: ResizeDataDisksRequest,
    cb?: (error: string, rep: ResizeDataDisksResponse) => void
  ): Promise<ResizeDataDisksResponse> {
    return this.request("ResizeDataDisks", req, cb)
  }

  /**
   * 修改自动扩缩容规则
   */
  async ModifyAutoScaleStrategy(
    req: ModifyAutoScaleStrategyRequest,
    cb?: (error: string, rep: ModifyAutoScaleStrategyResponse) => void
  ): Promise<ModifyAutoScaleStrategyResponse> {
    return this.request("ModifyAutoScaleStrategy", req, cb)
  }

  /**
   * 查询Kyuubi查询信息
   */
  async DescribeKyuubiQueryInfo(
    req: DescribeKyuubiQueryInfoRequest,
    cb?: (error: string, rep: DescribeKyuubiQueryInfoResponse) => void
  ): Promise<DescribeKyuubiQueryInfoResponse> {
    return this.request("DescribeKyuubiQueryInfo", req, cb)
  }

  /**
   * 删除自动扩缩容规则，后台销毁根据该规则扩缩容出来的节点
   */
  async DeleteAutoScaleStrategy(
    req: DeleteAutoScaleStrategyRequest,
    cb?: (error: string, rep: DeleteAutoScaleStrategyResponse) => void
  ): Promise<DeleteAutoScaleStrategyResponse> {
    return this.request("DeleteAutoScaleStrategy", req, cb)
  }

  /**
   * yarn application 统计接口查询
   */
  async DescribeEmrApplicationStatics(
    req: DescribeEmrApplicationStaticsRequest,
    cb?: (error: string, rep: DescribeEmrApplicationStaticsResponse) => void
  ): Promise<DescribeEmrApplicationStaticsResponse> {
    return this.request("DescribeEmrApplicationStatics", req, cb)
  }

  /**
   * 查询HDFS存储文件信息
   */
  async DescribeHDFSStorageInfo(
    req: DescribeHDFSStorageInfoRequest,
    cb?: (error: string, rep: DescribeHDFSStorageInfoResponse) => void
  ): Promise<DescribeHDFSStorageInfoResponse> {
    return this.request("DescribeHDFSStorageInfo", req, cb)
  }

  /**
   * 用于启停服务 重启服务等功能
   */
  async StartStopServiceOrMonitor(
    req: StartStopServiceOrMonitorRequest,
    cb?: (error: string, rep: StartStopServiceOrMonitorResponse) => void
  ): Promise<StartStopServiceOrMonitorResponse> {
    return this.request("StartStopServiceOrMonitor", req, cb)
  }

  /**
   * 修改了yarn的资源调度器，点击部署生效。
   */
  async ModifyResourceScheduler(
    req: ModifyResourceSchedulerRequest,
    cb?: (error: string, rep: ModifyResourceSchedulerResponse) => void
  ): Promise<ModifyResourceSchedulerResponse> {
    return this.request("ModifyResourceScheduler", req, cb)
  }

  /**
   * 快速获取当前集群的节点规格配置
   */
  async DescribeNodeResourceConfigFast(
    req: DescribeNodeResourceConfigFastRequest,
    cb?: (error: string, rep: DescribeNodeResourceConfigFastResponse) => void
  ): Promise<DescribeNodeResourceConfigFastResponse> {
    return this.request("DescribeNodeResourceConfigFast", req, cb)
  }

  /**
   * YARN资源调度-变更详情
   */
  async DescribeResourceScheduleDiffDetail(
    req: DescribeResourceScheduleDiffDetailRequest,
    cb?: (error: string, rep: DescribeResourceScheduleDiffDetailResponse) => void
  ): Promise<DescribeResourceScheduleDiffDetailResponse> {
    return this.request("DescribeResourceScheduleDiffDetail", req, cb)
  }

  /**
   * 本接口（DescribeSLInstance）用于查询 Serverless HBase实例基本信息
   */
  async DescribeSLInstance(
    req: DescribeSLInstanceRequest,
    cb?: (error: string, rep: DescribeSLInstanceResponse) => void
  ): Promise<DescribeSLInstanceResponse> {
    return this.request("DescribeSLInstance", req, cb)
  }

  /**
   * 查询Spark查询信息列表
   */
  async DescribeSparkQueries(
    req: DescribeSparkQueriesRequest,
    cb?: (error: string, rep: DescribeSparkQueriesResponse) => void
  ): Promise<DescribeSparkQueriesResponse> {
    return this.request("DescribeSparkQueries", req, cb)
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
   * 查询YARN资源调度的全局配置
   */
  async DescribeGlobalConfig(
    req: DescribeGlobalConfigRequest,
    cb?: (error: string, rep: DescribeGlobalConfigResponse) => void
  ): Promise<DescribeGlobalConfigResponse> {
    return this.request("DescribeGlobalConfig", req, cb)
  }

  /**
   * 查看yarn资源调度的调度历史。废弃，请使用流程中心查看历史记录。
   */
  async DescribeYarnScheduleHistory(
    req: DescribeYarnScheduleHistoryRequest,
    cb?: (error: string, rep: DescribeYarnScheduleHistoryResponse) => void
  ): Promise<DescribeYarnScheduleHistoryResponse> {
    return this.request("DescribeYarnScheduleHistory", req, cb)
  }

  /**
   * 修改YARN资源调度的资源配置。已废弃，请使用`ModifyYarnQueueV2`来修改队列配置
   */
  async ModifyResourceScheduleConfig(
    req: ModifyResourceScheduleConfigRequest,
    cb?: (error: string, rep: ModifyResourceScheduleConfigResponse) => void
  ): Promise<ModifyResourceScheduleConfigResponse> {
    return this.request("ModifyResourceScheduleConfig", req, cb)
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
   * 获取hive查询信息
   */
  async DescribeHiveQueries(
    req: DescribeHiveQueriesRequest,
    cb?: (error: string, rep: DescribeHiveQueriesResponse) => void
  ): Promise<DescribeHiveQueriesResponse> {
    return this.request("DescribeHiveQueries", req, cb)
  }

  /**
   * 查询监控概览页指标数据
   */
  async DescribeEmrOverviewMetrics(
    req: DescribeEmrOverviewMetricsRequest,
    cb?: (error: string, rep: DescribeEmrOverviewMetricsResponse) => void
  ): Promise<DescribeEmrOverviewMetricsResponse> {
    return this.request("DescribeEmrOverviewMetrics", req, cb)
  }

  /**
   * 增加当前集群的节点规格配置
   */
  async AddNodeResourceConfig(
    req: AddNodeResourceConfigRequest,
    cb?: (error: string, rep: AddNodeResourceConfigResponse) => void
  ): Promise<AddNodeResourceConfigResponse> {
    return this.request("AddNodeResourceConfig", req, cb)
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
   * 变配实例
   */
  async ModifyResource(
    req: ModifyResourceRequest,
    cb?: (error: string, rep: ModifyResourceResponse) => void
  ): Promise<ModifyResourceResponse> {
    return this.request("ModifyResource", req, cb)
  }

  /**
     * 本接口（ModifySLInstance）用于Serverless HBase变配实例。
- 接口调用成功，会创建Serverless HBase实例，创建实例请求成功会返回请求的 RequestID。
- 接口为异步接口，接口返回时操作并未立即完成，实例操作结果可以通过调用DescribeInstancesList查看当前实例的StatusDesc状态。
     */
  async ModifySLInstance(
    req: ModifySLInstanceRequest,
    cb?: (error: string, rep: ModifySLInstanceResponse) => void
  ): Promise<ModifySLInstanceResponse> {
    return this.request("ModifySLInstance", req, cb)
  }

  /**
   * 查询节点数据盘信息
   */
  async DescribeNodeDataDisks(
    req: DescribeNodeDataDisksRequest,
    cb?: (error: string, rep: DescribeNodeDataDisksResponse) => void
  ): Promise<DescribeNodeDataDisksResponse> {
    return this.request("DescribeNodeDataDisks", req, cb)
  }

  /**
   * 获取自动扩缩容规则
   */
  async DescribeAutoScaleStrategies(
    req: DescribeAutoScaleStrategiesRequest,
    cb?: (error: string, rep: DescribeAutoScaleStrategiesResponse) => void
  ): Promise<DescribeAutoScaleStrategiesResponse> {
    return this.request("DescribeAutoScaleStrategies", req, cb)
  }

  /**
   * 添加扩缩容规则，按负载和时间
   */
  async AddMetricScaleStrategy(
    req: AddMetricScaleStrategyRequest,
    cb?: (error: string, rep: AddMetricScaleStrategyResponse) => void
  ): Promise<AddMetricScaleStrategyResponse> {
    return this.request("AddMetricScaleStrategy", req, cb)
  }

  /**
   * 获取自动扩缩容全局配置
   */
  async DescribeAutoScaleGroupGlobalConf(
    req: DescribeAutoScaleGroupGlobalConfRequest,
    cb?: (error: string, rep: DescribeAutoScaleGroupGlobalConfResponse) => void
  ): Promise<DescribeAutoScaleGroupGlobalConfResponse> {
    return this.request("DescribeAutoScaleGroupGlobalConf", req, cb)
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
   * 查询Trino(PrestoSQL)查询信息
   */
  async DescribeTrinoQueryInfo(
    req: DescribeTrinoQueryInfoRequest,
    cb?: (error: string, rep: DescribeTrinoQueryInfoResponse) => void
  ): Promise<DescribeTrinoQueryInfoResponse> {
    return this.request("DescribeTrinoQueryInfo", req, cb)
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
   * 刷新YARN的动态资源池。已废弃，请使用`DeployYarnConf`
   */
  async ModifyResourcePools(
    req: ModifyResourcePoolsRequest,
    cb?: (error: string, rep: ModifyResourcePoolsResponse) => void
  ): Promise<ModifyResourcePoolsResponse> {
    return this.request("ModifyResourcePools", req, cb)
  }

  /**
   * 获取洞察结果信息
   */
  async DescribeInsightList(
    req: DescribeInsightListRequest,
    cb?: (error: string, rep: DescribeInsightListResponse) => void
  ): Promise<DescribeInsightListResponse> {
    return this.request("DescribeInsightList", req, cb)
  }

  /**
   * 删除当前集群的节点规格配置
   */
  async DeleteNodeResourceConfig(
    req: DeleteNodeResourceConfigRequest,
    cb?: (error: string, rep: DeleteNodeResourceConfigResponse) => void
  ): Promise<DeleteNodeResourceConfigResponse> {
    return this.request("DeleteNodeResourceConfig", req, cb)
  }

  /**
   * 修改集群名称
   */
  async ModifyInstanceBasic(
    req: ModifyInstanceBasicRequest,
    cb?: (error: string, rep: ModifyInstanceBasicResponse) => void
  ): Promise<ModifyInstanceBasicResponse> {
    return this.request("ModifyInstanceBasic", req, cb)
  }

  /**
   * 调整Pod数量
   */
  async ModifyPodNum(
    req: ModifyPodNumRequest,
    cb?: (error: string, rep: ModifyPodNumResponse) => void
  ): Promise<ModifyPodNumResponse> {
    return this.request("ModifyPodNum", req, cb)
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

  /**
   * 创建流程作业
   */
  async RunJobFlow(
    req: RunJobFlowRequest,
    cb?: (error: string, rep: RunJobFlowResponse) => void
  ): Promise<RunJobFlowResponse> {
    return this.request("RunJobFlow", req, cb)
  }
}
