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
  TaskDetail,
  ServerlessSpaceUser,
  RestartLogstashInstanceRequest,
  DescribeInstanceOperationsRequest,
  LogstashInstanceInfo,
  OperationDetail,
  DiagnoseInstanceResponse,
  CreateServerlessSpaceV2Request,
  EsPublicAcl,
  DictInfo,
  DescribeDiagnoseResponse,
  DescribeLogstashInstanceLogsResponse,
  CreateInstanceResponse,
  DescribeInstanceLogsRequest,
  RestoreClusterSnapshotResponse,
  DeleteLogstashPipelinesResponse,
  DescribeSpaceKibanaToolsRequest,
  TagInfo,
  DescribeClusterSnapshotRequest,
  MetricMapByIndexId,
  UpdateLogstashPipelineDescResponse,
  DescribeInstancesResponse,
  DescribeInstanceLogsResponse,
  IndexMetaField,
  UpdateServerlessSpaceRequest,
  MasterNodeInfo,
  DiagnoseInstanceRequest,
  LogstashBindedES,
  UpdateDiagnoseSettingsRequest,
  DeleteServerlessInstanceResponse,
  InstallInstanceModelResponse,
  DescribeInstanceOperationsResponse,
  LogstashPipeline,
  UpdateRequestTargetNodeTypesResponse,
  JobParam,
  Failures,
  DeleteLogstashInstanceResponse,
  DescribeLogstashInstancesRequest,
  IndexOptionsField,
  CreateServerlessSpaceV2Response,
  ServerlessSpace,
  DeleteClusterSnapshotRequest,
  SubTaskDetail,
  CheckMigrateIndexMetaDataResponse,
  DeleteClusterSnapshotResponse,
  MetricAllData,
  EsConfigSetInfo,
  GetRequestTargetNodeTypesResponse,
  Operation,
  DiDataSourceCvm,
  InstanceLog,
  CreateIndexResponse,
  DescribeServerlessSpaceUserResponse,
  LogDetail,
  DescribeLogstashInstanceLogsRequest,
  DescribeIndexMetaResponse,
  DiagnoseJobMeta,
  StartLogstashPipelinesRequest,
  DescribeServerlessMetricsRequest,
  GetDiagnoseSettingsResponse,
  CreateServerlessInstanceRequest,
  DiSourceTkePodLabel,
  DeleteServerlessSpaceUserResponse,
  DiData,
  UpgradeLicenseResponse,
  KeyValue,
  LogstashExtendedFile,
  UpdateLogstashInstanceRequest,
  UpdateRequestTargetNodeTypesRequest,
  DescribeLogstashInstancesResponse,
  InstallInstanceModelRequest,
  DiDataSinkServerless,
  DeleteInstanceResponse,
  UpdateDiagnoseSettingsResponse,
  SettingDetail,
  DescribeLogstashInstanceOperationsResponse,
  CreateIndexRequest,
  LogstashPipelineInfo,
  UpdatePluginsRequest,
  RestoreClusterSnapshotRequest,
  DescribeServerlessSpaceUserRequest,
  Dimension,
  DescribeServerlessSpacesResponse,
  InquirePriceRenewInstanceRequest,
  KibanaView,
  Metric,
  UpdateInstanceResponse,
  DeleteIndexRequest,
  DescribeViewsRequest,
  DescribeIndexListResponse,
  DescribeUserCosSnapshotListRequest,
  DescribeLogstashInstanceOperationsRequest,
  DescribeInstancePluginInfo,
  CreateLogstashInstanceResponse,
  DeleteServerlessInstanceRequest,
  SaveAndDeployLogstashPipelineRequest,
  DiDataSourceTke,
  ClusterView,
  CommonIndexInfo,
  InquirePriceRenewInstanceResponse,
  CreateClusterSnapshotRequest,
  DeleteLogstashPipelinesRequest,
  DiagnoseResult,
  RestartKibanaRequest,
  SaveAndDeployLogstashPipelineResponse,
  ServerlessIndexOptionsField,
  UpdateDictionariesRequest,
  OperationDuration,
  UpgradeLicenseRequest,
  DescribeIndexListRequest,
  NodeInfo,
  CosBackup,
  DescribeLogstashPipelinesResponse,
  OperationDurationUpdated,
  CreateInstanceRequest,
  CreateLogstashInstanceRequest,
  UpdateServerlessInstanceResponse,
  UpdateDictionariesResponse,
  InstanceInfo,
  DiDataSourceCvmInstance,
  DeleteIndexResponse,
  DeleteServerlessSpaceUserRequest,
  RestartNodesResponse,
  DescribeInstancesRequest,
  CheckMigrateIndexMetaDataRequest,
  EsDictionaryInfo,
  DescribeLogstashPipelinesRequest,
  OutboundPublicAcl,
  DataStreamInfo,
  ServerlessIndexMetaField,
  GetRequestTargetNodeTypesRequest,
  ModifyEsVipSecurityGroupRequest,
  ProcessDetail,
  DiSourceTke,
  CreateCosMigrateToServerlessInstanceRequest,
  DeleteInstanceRequest,
  MetricDetail,
  UpgradeInstanceResponse,
  DescribeIndexMetaRequest,
  Snapshots,
  UpdateJdkResponse,
  RestartKibanaResponse,
  DescribeUserCosSnapshotListResponse,
  UpdateIndexRequest,
  ServerlessIndexNetworkField,
  WebNodeTypeInfo,
  LocalDiskInfo,
  IndexPolicyField,
  UpdatePluginsResponse,
  UpdateIndexResponse,
  DiagnoseJobResult,
  EnableScheduleOperationDuration,
  UpdateLogstashInstanceResponse,
  StopLogstashPipelinesRequest,
  ZoneDetail,
  DescribeClusterSnapshotResponse,
  LogstashNodeInfo,
  CreateCosMigrateToServerlessInstanceResponse,
  RestartInstanceResponse,
  BackingIndexMetaField,
  IndexSettingsField,
  UpdateServerlessSpaceResponse,
  UpdateLogstashPipelineDescRequest,
  UpdateServerlessInstanceRequest,
  NodeView,
  DescribeSpaceKibanaToolsResponse,
  ModifyEsVipSecurityGroupResponse,
  UpdateInstanceRequest,
  CreateServerlessInstanceResponse,
  ServerlessIndexSettingsField,
  DescribeDiagnoseRequest,
  DescribeInstancePluginListResponse,
  DiSourceCvm,
  CosSnapShotInfo,
  DescribeServerlessSpacesRequest,
  RestartInstanceRequest,
  UpdateJdkRequest,
  ServerlessDi,
  DescribeServerlessMetricsResponse,
  StopLogstashPipelinesResponse,
  DescribeServerlessInstancesRequest,
  VpcInfo,
  KibanaNodeInfo,
  StartLogstashPipelinesResponse,
  GetDiagnoseSettingsRequest,
  EsAcl,
  DescribeInstancePluginListRequest,
  RestartNodesRequest,
  DescribeServerlessInstancesResponse,
  DeleteLogstashInstanceRequest,
  UpgradeInstanceRequest,
  DescribeViewsResponse,
  KibanaPublicAcl,
  CreateClusterSnapshotResponse,
  RestartLogstashInstanceResponse,
  OptionalWebServiceInfo,
} from "./es_models"

/**
 * es client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("es.tencentcloudapi.com", "2018-04-16", clientConfig)
  }

  /**
   * 智能运维诊断集群
   */
  async DiagnoseInstance(
    req: DiagnoseInstanceRequest,
    cb?: (error: string, rep: DiagnoseInstanceResponse) => void
  ): Promise<DiagnoseInstanceResponse> {
    return this.request("DiagnoseInstance", req, cb)
  }

  /**
   * 用于删除Logstash实例
   */
  async DeleteLogstashInstance(
    req: DeleteLogstashInstanceRequest,
    cb?: (error: string, rep: DeleteLogstashInstanceResponse) => void
  ): Promise<DeleteLogstashInstanceResponse> {
    return this.request("DeleteLogstashInstance", req, cb)
  }

  /**
   * 快照备份恢复，从仓库中恢复快照到集群中
   */
  async RestoreClusterSnapshot(
    req: RestoreClusterSnapshotRequest,
    cb?: (error: string, rep: RestoreClusterSnapshotResponse) => void
  ): Promise<RestoreClusterSnapshotResponse> {
    return this.request("RestoreClusterSnapshot", req, cb)
  }

  /**
   * 获取接收客户端请求的节点类型
   */
  async GetRequestTargetNodeTypes(
    req: GetRequestTargetNodeTypesRequest,
    cb?: (error: string, rep: GetRequestTargetNodeTypesResponse) => void
  ): Promise<GetRequestTargetNodeTypesResponse> {
    return this.request("GetRequestTargetNodeTypes", req, cb)
  }

  /**
   * 用于批量停止Logstash管道
   */
  async StopLogstashPipelines(
    req: StopLogstashPipelinesRequest,
    cb?: (error: string, rep: StopLogstashPipelinesResponse) => void
  ): Promise<StopLogstashPipelinesResponse> {
    return this.request("StopLogstashPipelines", req, cb)
  }

  /**
   * 获取Serverless索引空间列表
   */
  async DescribeServerlessSpaces(
    req: DescribeServerlessSpacesRequest,
    cb?: (error: string, rep: DescribeServerlessSpacesResponse) => void
  ): Promise<DescribeServerlessSpacesResponse> {
    return this.request("DescribeServerlessSpaces", req, cb)
  }

  /**
   * ES集群安装模型接口
   */
  async InstallInstanceModel(
    req: InstallInstanceModelRequest,
    cb?: (error: string, rep: InstallInstanceModelResponse) => void
  ): Promise<InstallInstanceModelResponse> {
    return this.request("InstallInstanceModel", req, cb)
  }

  /**
   * 获取索引列表
   */
  async DescribeIndexList(
    req: DescribeIndexListRequest,
    cb?: (error: string, rep: DescribeIndexListResponse) => void
  ): Promise<DescribeIndexListResponse> {
    return this.request("DescribeIndexList", req, cb)
  }

  /**
   * 用于更新管道描述信息
   */
  async UpdateLogstashPipelineDesc(
    req: UpdateLogstashPipelineDescRequest,
    cb?: (error: string, rep: UpdateLogstashPipelineDescResponse) => void
  ): Promise<UpdateLogstashPipelineDescResponse> {
    return this.request("UpdateLogstashPipelineDesc", req, cb)
  }

  /**
   * 查询快照信息接口
   */
  async DescribeUserCosSnapshotList(
    req: DescribeUserCosSnapshotListRequest,
    cb?: (error: string, rep: DescribeUserCosSnapshotListResponse) => void
  ): Promise<DescribeUserCosSnapshotListResponse> {
    return this.request("DescribeUserCosSnapshotList", req, cb)
  }

  /**
   * 更新索引
   */
  async UpdateIndex(
    req: UpdateIndexRequest,
    cb?: (error: string, rep: UpdateIndexResponse) => void
  ): Promise<UpdateIndexResponse> {
    return this.request("UpdateIndex", req, cb)
  }

  /**
   * 销毁集群实例
   */
  async DeleteInstance(
    req: DeleteInstanceRequest,
    cb?: (error: string, rep: DeleteInstanceResponse) => void
  ): Promise<DeleteInstanceResponse> {
    return this.request("DeleteInstance", req, cb)
  }

  /**
   * 查看智能运维配置
   */
  async GetDiagnoseSettings(
    req: GetDiagnoseSettingsRequest,
    cb?: (error: string, rep: GetDiagnoseSettingsResponse) => void
  ): Promise<GetDiagnoseSettingsResponse> {
    return this.request("GetDiagnoseSettings", req, cb)
  }

  /**
   * 创建索引
   */
  async CreateIndex(
    req: CreateIndexRequest,
    cb?: (error: string, rep: CreateIndexResponse) => void
  ): Promise<CreateIndexResponse> {
    return this.request("CreateIndex", req, cb)
  }

  /**
   * 用于启动Logstash管道
   */
  async StartLogstashPipelines(
    req: StartLogstashPipelinesRequest,
    cb?: (error: string, rep: StartLogstashPipelinesResponse) => void
  ): Promise<StartLogstashPipelinesResponse> {
    return this.request("StartLogstashPipelines", req, cb)
  }

  /**
   * 更新接收客户端请求的节点类型
   */
  async UpdateRequestTargetNodeTypes(
    req: UpdateRequestTargetNodeTypesRequest,
    cb?: (error: string, rep: UpdateRequestTargetNodeTypesResponse) => void
  ): Promise<UpdateRequestTargetNodeTypesResponse> {
    return this.request("UpdateRequestTargetNodeTypes", req, cb)
  }

  /**
   * 更新智能运维配置
   */
  async UpdateDiagnoseSettings(
    req: UpdateDiagnoseSettingsRequest,
    cb?: (error: string, rep: UpdateDiagnoseSettingsResponse) => void
  ): Promise<UpdateDiagnoseSettingsResponse> {
    return this.request("UpdateDiagnoseSettings", req, cb)
  }

  /**
   * cos迁移流程
   */
  async CreateCosMigrateToServerlessInstance(
    req: CreateCosMigrateToServerlessInstanceRequest,
    cb?: (error: string, rep: CreateCosMigrateToServerlessInstanceResponse) => void
  ): Promise<CreateCosMigrateToServerlessInstanceResponse> {
    return this.request("CreateCosMigrateToServerlessInstance", req, cb)
  }

  /**
   * 变更插件列表
   */
  async UpdatePlugins(
    req: UpdatePluginsRequest,
    cb?: (error: string, rep: UpdatePluginsResponse) => void
  ): Promise<UpdatePluginsResponse> {
    return this.request("UpdatePlugins", req, cb)
  }

  /**
     * 对集群进行节点规格变更，修改实例名称，修改配置，等操作。参数中InstanceId为必传参数，参数传递组合及含义如下：
- InstanceName：修改实例名称(仅用于标识实例)
- NodeNum: 修改实例节点数量（节点横向扩缩容，纵向扩缩容等）
- YMLConfig: 修改实例YML配置
- BindedES：修改绑定的ES集群配置
以上参数组合只能传递一种，多传或少传均会导致请求失败
     */
  async UpdateLogstashInstance(
    req: UpdateLogstashInstanceRequest,
    cb?: (error: string, rep: UpdateLogstashInstanceResponse) => void
  ): Promise<UpdateLogstashInstanceResponse> {
    return this.request("UpdateLogstashInstance", req, cb)
  }

  /**
   * 检查cos迁移索引元数据
   */
  async CheckMigrateIndexMetaData(
    req: CheckMigrateIndexMetaDataRequest,
    cb?: (error: string, rep: CheckMigrateIndexMetaDataResponse) => void
  ): Promise<CheckMigrateIndexMetaDataResponse> {
    return this.request("CheckMigrateIndexMetaData", req, cb)
  }

  /**
   * 更新实例Jdk配置
   */
  async UpdateJdk(
    req: UpdateJdkRequest,
    cb?: (error: string, rep: UpdateJdkResponse) => void
  ): Promise<UpdateJdkResponse> {
    return this.request("UpdateJdk", req, cb)
  }

  /**
   * 删除Serverless索引
   */
  async DeleteServerlessInstance(
    req: DeleteServerlessInstanceRequest,
    cb?: (error: string, rep: DeleteServerlessInstanceResponse) => void
  ): Promise<DeleteServerlessInstanceResponse> {
    return this.request("DeleteServerlessInstance", req, cb)
  }

  /**
   * 创建Serverless索引空间
   */
  async CreateServerlessSpaceV2(
    req: CreateServerlessSpaceV2Request,
    cb?: (error: string, rep: CreateServerlessSpaceV2Response) => void
  ): Promise<CreateServerlessSpaceV2Response> {
    return this.request("CreateServerlessSpaceV2", req, cb)
  }

  /**
   * 获取快照备份列表
   */
  async DescribeClusterSnapshot(
    req: DescribeClusterSnapshotRequest,
    cb?: (error: string, rep: DescribeClusterSnapshotResponse) => void
  ): Promise<DescribeClusterSnapshotResponse> {
    return this.request("DescribeClusterSnapshot", req, cb)
  }

  /**
   * 用于创建Logstash实例
   */
  async CreateLogstashInstance(
    req: CreateLogstashInstanceRequest,
    cb?: (error: string, rep: CreateLogstashInstanceResponse) => void
  ): Promise<CreateLogstashInstanceResponse> {
    return this.request("CreateLogstashInstance", req, cb)
  }

  /**
   * 重启ES集群实例(用于系统版本更新等操作)
   */
  async RestartInstance(
    req: RestartInstanceRequest,
    cb?: (error: string, rep: RestartInstanceResponse) => void
  ): Promise<RestartInstanceResponse> {
    return this.request("RestartInstance", req, cb)
  }

  /**
     * 对集群进行节点规格变更，修改实例名称，修改配置，重置密码， 添加Kibana黑白名单等操作。参数中InstanceId为必传参数，ForceRestart为选填参数，剩余参数传递组合及含义如下：
- InstanceName：修改实例名称(仅用于标识实例)
- NodeInfoList: 修改节点配置（节点横向扩缩容，纵向扩缩容，增加主节点，增加冷节点等）
- EsConfig：修改集群配置
- Password：修改默认用户elastic的密码
- EsAcl：修改访问控制列表
- CosBackUp: 设置集群COS自动备份信息
以上参数组合只能传递一种，多传或少传均会导致请求失败
     */
  async UpdateInstance(
    req: UpdateInstanceRequest,
    cb?: (error: string, rep: UpdateInstanceResponse) => void
  ): Promise<UpdateInstanceResponse> {
    return this.request("UpdateInstance", req, cb)
  }

  /**
   * 查询用户该地域下符合条件的ES集群的日志
   */
  async DescribeInstanceLogs(
    req: DescribeInstanceLogsRequest,
    cb?: (error: string, rep: DescribeInstanceLogsResponse) => void
  ): Promise<DescribeInstanceLogsResponse> {
    return this.request("DescribeInstanceLogs", req, cb)
  }

  /**
   * 重启Kibana
   */
  async RestartKibana(
    req: RestartKibanaRequest,
    cb?: (error: string, rep: RestartKibanaResponse) => void
  ): Promise<RestartKibanaResponse> {
    return this.request("RestartKibana", req, cb)
  }

  /**
   * 修改绑定VIP的安全组，传安全组id列表
   */
  async ModifyEsVipSecurityGroup(
    req: ModifyEsVipSecurityGroupRequest,
    cb?: (error: string, rep: ModifyEsVipSecurityGroupResponse) => void
  ): Promise<ModifyEsVipSecurityGroupResponse> {
    return this.request("ModifyEsVipSecurityGroup", req, cb)
  }

  /**
   * 创建Serverless索引
   */
  async CreateServerlessInstance(
    req: CreateServerlessInstanceRequest,
    cb?: (error: string, rep: CreateServerlessInstanceResponse) => void
  ): Promise<CreateServerlessInstanceResponse> {
    return this.request("CreateServerlessInstance", req, cb)
  }

  /**
     * 获取serverless实例对应指标，获取space维度时不需要传入indexid，获取index时不需要传入spaceid
获取一段时间时间范围内的指标数据
     */
  async DescribeServerlessMetrics(
    req: DescribeServerlessMetricsRequest,
    cb?: (error: string, rep: DescribeServerlessMetricsResponse) => void
  ): Promise<DescribeServerlessMetricsResponse> {
    return this.request("DescribeServerlessMetrics", req, cb)
  }

  /**
   * 查询实例指定条件下的操作记录
   */
  async DescribeInstanceOperations(
    req: DescribeInstanceOperationsRequest,
    cb?: (error: string, rep: DescribeInstanceOperationsResponse) => void
  ): Promise<DescribeInstanceOperationsResponse> {
    return this.request("DescribeInstanceOperations", req, cb)
  }

  /**
   * space维度的kibana获取登录token
   */
  async DescribeSpaceKibanaTools(
    req: DescribeSpaceKibanaToolsRequest,
    cb?: (error: string, rep: DescribeSpaceKibanaToolsResponse) => void
  ): Promise<DescribeSpaceKibanaToolsResponse> {
    return this.request("DescribeSpaceKibanaTools", req, cb)
  }

  /**
   * 用于获取Logstash实例管道列表
   */
  async DescribeLogstashPipelines(
    req: DescribeLogstashPipelinesRequest,
    cb?: (error: string, rep: DescribeLogstashPipelinesResponse) => void
  ): Promise<DescribeLogstashPipelinesResponse> {
    return this.request("DescribeLogstashPipelines", req, cb)
  }

  /**
   * 查询用户该地域下符合条件的所有Logstash实例
   */
  async DescribeLogstashInstances(
    req: DescribeLogstashInstancesRequest,
    cb?: (error: string, rep: DescribeLogstashInstancesResponse) => void
  ): Promise<DescribeLogstashInstancesResponse> {
    return this.request("DescribeLogstashInstances", req, cb)
  }

  /**
   * Serverless获取索引列表
   */
  async DescribeServerlessInstances(
    req: DescribeServerlessInstancesRequest,
    cb?: (error: string, rep: DescribeServerlessInstancesResponse) => void
  ): Promise<DescribeServerlessInstancesResponse> {
    return this.request("DescribeServerlessInstances", req, cb)
  }

  /**
   * 查询集群各视图数据，包括集群维度、节点维度、Kibana维度
   */
  async DescribeViews(
    req: DescribeViewsRequest,
    cb?: (error: string, rep: DescribeViewsResponse) => void
  ): Promise<DescribeViewsResponse> {
    return this.request("DescribeViews", req, cb)
  }

  /**
   * 创建指定规格的ES集群实例
   */
  async CreateInstance(
    req: CreateInstanceRequest,
    cb?: (error: string, rep: CreateInstanceResponse) => void
  ): Promise<CreateInstanceResponse> {
    return this.request("CreateInstance", req, cb)
  }

  /**
   * 更新Serverless索引
   */
  async UpdateServerlessInstance(
    req: UpdateServerlessInstanceRequest,
    cb?: (error: string, rep: UpdateServerlessInstanceResponse) => void
  ): Promise<UpdateServerlessInstanceResponse> {
    return this.request("UpdateServerlessInstance", req, cb)
  }

  /**
   * 升级ES集群版本
   */
  async UpgradeInstance(
    req: UpgradeInstanceRequest,
    cb?: (error: string, rep: UpgradeInstanceResponse) => void
  ): Promise<UpgradeInstanceResponse> {
    return this.request("UpgradeInstance", req, cb)
  }

  /**
   * 查询智能运维诊断结果报告
   */
  async DescribeDiagnose(
    req: DescribeDiagnoseRequest,
    cb?: (error: string, rep: DescribeDiagnoseResponse) => void
  ): Promise<DescribeDiagnoseResponse> {
    return this.request("DescribeDiagnose", req, cb)
  }

  /**
   * 删除Serverless空间子用户
   */
  async DeleteServerlessSpaceUser(
    req: DeleteServerlessSpaceUserRequest,
    cb?: (error: string, rep: DeleteServerlessSpaceUserResponse) => void
  ): Promise<DeleteServerlessSpaceUserResponse> {
    return this.request("DeleteServerlessSpaceUser", req, cb)
  }

  /**
   * 用于批量删除Logstash管道
   */
  async DeleteLogstashPipelines(
    req: DeleteLogstashPipelinesRequest,
    cb?: (error: string, rep: DeleteLogstashPipelinesResponse) => void
  ): Promise<DeleteLogstashPipelinesResponse> {
    return this.request("DeleteLogstashPipelines", req, cb)
  }

  /**
   * 查询用户该地域下符合条件的所有实例
   */
  async DescribeInstances(
    req: DescribeInstancesRequest,
    cb?: (error: string, rep: DescribeInstancesResponse) => void
  ): Promise<DescribeInstancesResponse> {
    return this.request("DescribeInstances", req, cb)
  }

  /**
   * 更新Serverless索引空间
   */
  async UpdateServerlessSpace(
    req: UpdateServerlessSpaceRequest,
    cb?: (error: string, rep: UpdateServerlessSpaceResponse) => void
  ): Promise<UpdateServerlessSpaceResponse> {
    return this.request("UpdateServerlessSpace", req, cb)
  }

  /**
   * 删除索引
   */
  async DeleteIndex(
    req: DeleteIndexRequest,
    cb?: (error: string, rep: DeleteIndexResponse) => void
  ): Promise<DeleteIndexResponse> {
    return this.request("DeleteIndex", req, cb)
  }

  /**
   * 用于重启Logstash实例
   */
  async RestartLogstashInstance(
    req: RestartLogstashInstanceRequest,
    cb?: (error: string, rep: RestartLogstashInstanceResponse) => void
  ): Promise<RestartLogstashInstanceResponse> {
    return this.request("RestartLogstashInstance", req, cb)
  }

  /**
   * 集群快照手动创建
   */
  async CreateClusterSnapshot(
    req: CreateClusterSnapshotRequest,
    cb?: (error: string, rep: CreateClusterSnapshotResponse) => void
  ): Promise<CreateClusterSnapshotResponse> {
    return this.request("CreateClusterSnapshot", req, cb)
  }

  /**
   * 删除快照仓库里备份的快照
   */
  async DeleteClusterSnapshot(
    req: DeleteClusterSnapshotRequest,
    cb?: (error: string, rep: DeleteClusterSnapshotResponse) => void
  ): Promise<DeleteClusterSnapshotResponse> {
    return this.request("DeleteClusterSnapshot", req, cb)
  }

  /**
   * 查询用户该地域下符合条件的Logstash实例的日志
   */
  async DescribeLogstashInstanceLogs(
    req: DescribeLogstashInstanceLogsRequest,
    cb?: (error: string, rep: DescribeLogstashInstanceLogsResponse) => void
  ): Promise<DescribeLogstashInstanceLogsResponse> {
    return this.request("DescribeLogstashInstanceLogs", req, cb)
  }

  /**
   * 用于重启集群节点
   */
  async RestartNodes(
    req: RestartNodesRequest,
    cb?: (error: string, rep: RestartNodesResponse) => void
  ): Promise<RestartNodesResponse> {
    return this.request("RestartNodes", req, cb)
  }

  /**
   * 查看Serverless空间子用户
   */
  async DescribeServerlessSpaceUser(
    req: DescribeServerlessSpaceUserRequest,
    cb?: (error: string, rep: DescribeServerlessSpaceUserResponse) => void
  ): Promise<DescribeServerlessSpaceUserResponse> {
    return this.request("DescribeServerlessSpaceUser", req, cb)
  }

  /**
   * 用于下发并且部署管道
   */
  async SaveAndDeployLogstashPipeline(
    req: SaveAndDeployLogstashPipelineRequest,
    cb?: (error: string, rep: SaveAndDeployLogstashPipelineResponse) => void
  ): Promise<SaveAndDeployLogstashPipelineResponse> {
    return this.request("SaveAndDeployLogstashPipeline", req, cb)
  }

  /**
   * 更新ES集群词典
   */
  async UpdateDictionaries(
    req: UpdateDictionariesRequest,
    cb?: (error: string, rep: UpdateDictionariesResponse) => void
  ): Promise<UpdateDictionariesResponse> {
    return this.request("UpdateDictionaries", req, cb)
  }

  /**
   * 升级ES商业特性
   */
  async UpgradeLicense(
    req: UpgradeLicenseRequest,
    cb?: (error: string, rep: UpgradeLicenseResponse) => void
  ): Promise<UpgradeLicenseResponse> {
    return this.request("UpgradeLicense", req, cb)
  }

  /**
   * 查询实例插件列表
   */
  async DescribeInstancePluginList(
    req: DescribeInstancePluginListRequest,
    cb?: (error: string, rep: DescribeInstancePluginListResponse) => void
  ): Promise<DescribeInstancePluginListResponse> {
    return this.request("DescribeInstancePluginList", req, cb)
  }

  /**
   * 获取索引元数据
   */
  async DescribeIndexMeta(
    req: DescribeIndexMetaRequest,
    cb?: (error: string, rep: DescribeIndexMetaResponse) => void
  ): Promise<DescribeIndexMetaResponse> {
    return this.request("DescribeIndexMeta", req, cb)
  }

  /**
   * 查询实例指定条件下的操作记录
   */
  async DescribeLogstashInstanceOperations(
    req: DescribeLogstashInstanceOperationsRequest,
    cb?: (error: string, rep: DescribeLogstashInstanceOperationsResponse) => void
  ): Promise<DescribeLogstashInstanceOperationsResponse> {
    return this.request("DescribeLogstashInstanceOperations", req, cb)
  }

  /**
   * 集群续费询价接口，续费前通过调用该接口，可获取集群续费的价格。
   */
  async InquirePriceRenewInstance(
    req: InquirePriceRenewInstanceRequest,
    cb?: (error: string, rep: InquirePriceRenewInstanceResponse) => void
  ): Promise<InquirePriceRenewInstanceResponse> {
    return this.request("InquirePriceRenewInstance", req, cb)
  }
}
