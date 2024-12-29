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
  CreateResourceRequest,
  DescribeConfigDataResponse,
  NamespacePage,
  DescribeApplicationInfoResponse,
  ModifyIngressResponse,
  DeleteApplicationServiceRequest,
  RestartApplicationPodRequest,
  DestroyLogConfigResponse,
  QueryFilter,
  ResumeDeployApplicationResponse,
  StorageConf,
  DescribeApplicationPodsRequest,
  IngressTls,
  DeployServicePodDetail,
  LogOutputConf,
  DeleteIngressResponse,
  DeleteApplicationResponse,
  ModifyApplicationAutoscalerResponse,
  RollingUpdateApplicationByVersionRequest,
  CreateCosTokenResponse,
  ModifyLogConfigResponse,
  RollingUpdateApplicationByVersionResponse,
  StopApplicationRequest,
  ModifyApplicationInfoRequest,
  DestroyEnvironmentRequest,
  CreateEnvironmentResponse,
  DescribeEnvironmentStatusRequest,
  RevertDeployApplicationResponse,
  DeployStrategyConf,
  DescribeApplicationsResponse,
  CreateCosTokenRequest,
  DescribeEnvironmentsRequest,
  LogConfigListPage,
  ServiceVersionBrief,
  LogConfigExtractRule,
  CreateEnvironmentRequest,
  NodeInfo,
  DescribeApplicationServiceListResponse,
  DescribeLogConfigRequest,
  TemDeployApplicationDetailInfo,
  DescribeEnvironmentStatusResponse,
  EsInfo,
  DescribeApplicationPodsResponse,
  DescribeConfigDataListRequest,
  EnableApplicationAutoscalerResponse,
  ServicePage,
  TemServiceVersionInfo,
  ServicePortMapping,
  IngressInfo,
  ModifyApplicationAutoscalerRequest,
  ModifyConfigDataResponse,
  ModifyIngressRequest,
  Tag,
  EnablePrometheusConf,
  DescribeIngressesRequest,
  StorageMountConf,
  CreateLogConfigRequest,
  RestartApplicationResponse,
  DescribeIngressesResponse,
  ModifyConfigDataRequest,
  CreateConfigDataResponse,
  DescribeApplicationsStatusRequest,
  DescribeIngressResponse,
  RunVersionPod,
  CreateResourceResponse,
  ModifyApplicationInfoResponse,
  RestartApplicationRequest,
  DestroyEnvironmentResponse,
  DisableApplicationAutoscalerResponse,
  DescribeIngressRequest,
  StopApplicationResponse,
  DeployApplicationResponse,
  RestartApplicationPodResponse,
  TemEnvironmentStoppingStatus,
  DeleteApplicationRequest,
  CreateApplicationAutoscalerResponse,
  DeleteApplicationAutoscalerRequest,
  DescribeApplicationAutoscalerListRequest,
  DescribeApplicationsStatusResponse,
  DescribeDeployApplicationDetailRequest,
  DeleteIngressRequest,
  DisableApplicationAutoscalerRequest,
  DescribeRelatedIngressesRequest,
  CosToken,
  GenerateApplicationPackageDownloadUrlRequest,
  DescribeEnvironmentsResponse,
  DeleteApplicationAutoscalerResponse,
  DescribeRelatedIngressesResponse,
  DescribeEnvironmentRequest,
  DescribePagedLogConfigListRequest,
  TemEnvironmentStartingStatus,
  TemService,
  IngressRule,
  CronHorizontalAutoscaler,
  DescribeApplicationServiceListRequest,
  DescribeDeployApplicationDetailResponse,
  IngressRuleValue,
  DescribeEnvironmentResponse,
  TemNamespaceInfo,
  CreateApplicationAutoscalerRequest,
  DeleteApplicationServiceResponse,
  ConfigData,
  ResumeDeployApplicationRequest,
  DescribeConfigDataRequest,
  MountedSettingConf,
  CreateLogConfigResponse,
  DescribeConfigDataListResponse,
  ModifyApplicationServiceRequest,
  DescribePagedLogConfigListResponse,
  HealthCheckConfig,
  DeployServiceBatchDetail,
  Autoscaler,
  CreateConfigDataRequest,
  DescribeConfigDataListPage,
  DeployApplicationRequest,
  DescribeApplicationAutoscalerListResponse,
  DestroyConfigDataRequest,
  DestroyConfigDataResponse,
  DescribeApplicationsRequest,
  DescribeApplicationInfoRequest,
  CreateApplicationRequest,
  NamespaceStatusInfo,
  DescribeRunPodPage,
  CreateApplicationServiceRequest,
  ModifyApplicationReplicasResponse,
  UseDefaultRepoParameters,
  CronHorizontalAutoscalerSchedule,
  ModifyEnvironmentRequest,
  GenerateApplicationPackageDownloadUrlResponse,
  IngressRuleBackend,
  CreateApplicationServiceResponse,
  WorkloadInfo,
  IngressRulePath,
  NamespaceInfo,
  DescribeLogConfigResponse,
  ServicePortMappingItem,
  RevertDeployApplicationRequest,
  SortType,
  CreateApplicationResponse,
  HorizontalAutoscaler,
  ModifyApplicationServiceResponse,
  PortMapping,
  LogConfig,
  ModifyEnvironmentResponse,
  ModifyApplicationReplicasRequest,
  ModifyLogConfigRequest,
  DestroyLogConfigRequest,
  EnableApplicationAutoscalerRequest,
  EksService,
  Pair,
} from "./tem_models"

/**
 * tem client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("tem.tencentcloudapi.com", "2021-07-01", clientConfig)
  }

  /**
   * 编辑配置
   */
  async ModifyConfigData(
    req: ModifyConfigDataRequest,
    cb?: (error: string, rep: ModifyConfigDataResponse) => void
  ): Promise<ModifyConfigDataResponse> {
    return this.request("ModifyConfigData", req, cb)
  }

  /**
   * 单环境下所有应用状态查看
   */
  async DescribeApplicationsStatus(
    req: DescribeApplicationsStatusRequest,
    cb?: (error: string, rep: DescribeApplicationsStatusResponse) => void
  ): Promise<DescribeApplicationsStatusResponse> {
    return this.request("DescribeApplicationsStatus", req, cb)
  }

  /**
   * 查询应用访问方式列表
   */
  async DescribeApplicationServiceList(
    req: DescribeApplicationServiceListRequest,
    cb?: (error: string, rep: DescribeApplicationServiceListResponse) => void
  ): Promise<DescribeApplicationServiceListResponse> {
    return this.request("DescribeApplicationServiceList", req, cb)
  }

  /**
   * 查询分页的日志收集配置列表
   */
  async DescribePagedLogConfigList(
    req: DescribePagedLogConfigListRequest,
    cb?: (error: string, rep: DescribePagedLogConfigListResponse) => void
  ): Promise<DescribePagedLogConfigListResponse> {
    return this.request("DescribePagedLogConfigList", req, cb)
  }

  /**
     * 此接口没有被使用了

创建或者更新 Ingress 规则
     */
  async ModifyIngress(
    req: ModifyIngressRequest,
    cb?: (error: string, rep: ModifyIngressResponse) => void
  ): Promise<ModifyIngressResponse> {
    return this.request("ModifyIngress", req, cb)
  }

  /**
   * 启用应用弹性策略组合
   */
  async EnableApplicationAutoscaler(
    req: EnableApplicationAutoscalerRequest,
    cb?: (error: string, rep: EnableApplicationAutoscalerResponse) => void
  ): Promise<EnableApplicationAutoscalerResponse> {
    return this.request("EnableApplicationAutoscaler", req, cb)
  }

  /**
   * 修改应用实例数量
   */
  async ModifyApplicationReplicas(
    req: ModifyApplicationReplicasRequest,
    cb?: (error: string, rep: ModifyApplicationReplicasResponse) => void
  ): Promise<ModifyApplicationReplicasResponse> {
    return this.request("ModifyApplicationReplicas", req, cb)
  }

  /**
   * 创建弹性伸缩策略组合
   */
  async CreateApplicationAutoscaler(
    req: CreateApplicationAutoscalerRequest,
    cb?: (error: string, rep: CreateApplicationAutoscalerResponse) => void
  ): Promise<CreateApplicationAutoscalerResponse> {
    return this.request("CreateApplicationAutoscaler", req, cb)
  }

  /**
   * 重启应用实例
   */
  async RestartApplicationPod(
    req: RestartApplicationPodRequest,
    cb?: (error: string, rep: RestartApplicationPodResponse) => void
  ): Promise<RestartApplicationPodResponse> {
    return this.request("RestartApplicationPod", req, cb)
  }

  /**
   * 编辑日志收集配置
   */
  async ModifyLogConfig(
    req: ModifyLogConfigRequest,
    cb?: (error: string, rep: ModifyLogConfigResponse) => void
  ): Promise<ModifyLogConfigResponse> {
    return this.request("ModifyLogConfig", req, cb)
  }

  /**
     * 服务删除
  - 停止当前运行服务
  - 删除服务相关资源
  - 删除服务
     */
  async DeleteApplication(
    req: DeleteApplicationRequest,
    cb?: (error: string, rep: DeleteApplicationResponse) => void
  ): Promise<DeleteApplicationResponse> {
    return this.request("DeleteApplication", req, cb)
  }

  /**
   * 获取环境状态
   */
  async DescribeEnvironmentStatus(
    req: DescribeEnvironmentStatusRequest,
    cb?: (error: string, rep: DescribeEnvironmentStatusResponse) => void
  ): Promise<DescribeEnvironmentStatusResponse> {
    return this.request("DescribeEnvironmentStatus", req, cb)
  }

  /**
   * 开始下一批次发布
   */
  async ResumeDeployApplication(
    req: ResumeDeployApplicationRequest,
    cb?: (error: string, rep: ResumeDeployApplicationResponse) => void
  ): Promise<ResumeDeployApplicationResponse> {
    return this.request("ResumeDeployApplication", req, cb)
  }

  /**
   * 删除 Ingress 规则
   */
  async DeleteIngress(
    req: DeleteIngressRequest,
    cb?: (error: string, rep: DeleteIngressResponse) => void
  ): Promise<DeleteIngressResponse> {
    return this.request("DeleteIngress", req, cb)
  }

  /**
   * 应用部署
   */
  async DeployApplication(
    req: DeployApplicationRequest,
    cb?: (error: string, rep: DeployApplicationResponse) => void
  ): Promise<DeployApplicationResponse> {
    return this.request("DeployApplication", req, cb)
  }

  /**
   * 修改弹性伸缩策略组合
   */
  async ModifyApplicationAutoscaler(
    req: ModifyApplicationAutoscalerRequest,
    cb?: (error: string, rep: ModifyApplicationAutoscalerResponse) => void
  ): Promise<ModifyApplicationAutoscalerResponse> {
    return this.request("ModifyApplicationAutoscaler", req, cb)
  }

  /**
   * 获取分批发布详情
   */
  async DescribeDeployApplicationDetail(
    req: DescribeDeployApplicationDetailRequest,
    cb?: (error: string, rep: DescribeDeployApplicationDetailResponse) => void
  ): Promise<DescribeDeployApplicationDetailResponse> {
    return this.request("DescribeDeployApplicationDetail", req, cb)
  }

  /**
   * 修改服务访问方式列表
   */
  async ModifyApplicationService(
    req: ModifyApplicationServiceRequest,
    cb?: (error: string, rep: ModifyApplicationServiceResponse) => void
  ): Promise<ModifyApplicationServiceResponse> {
    return this.request("ModifyApplicationService", req, cb)
  }

  /**
   * 编辑环境
   */
  async ModifyEnvironment(
    req: ModifyEnvironmentRequest,
    cb?: (error: string, rep: ModifyEnvironmentResponse) => void
  ): Promise<ModifyEnvironmentResponse> {
    return this.request("ModifyEnvironment", req, cb)
  }

  /**
   * 获取环境基础信息
   */
  async DescribeEnvironment(
    req: DescribeEnvironmentRequest,
    cb?: (error: string, rep: DescribeEnvironmentResponse) => void
  ): Promise<DescribeEnvironmentResponse> {
    return this.request("DescribeEnvironment", req, cb)
  }

  /**
   * 查询日志收集配置详情
   */
  async DescribeLogConfig(
    req: DescribeLogConfigRequest,
    cb?: (error: string, rep: DescribeLogConfigResponse) => void
  ): Promise<DescribeLogConfigResponse> {
    return this.request("DescribeLogConfig", req, cb)
  }

  /**
   * 服务停止
   */
  async StopApplication(
    req: StopApplicationRequest,
    cb?: (error: string, rep: StopApplicationResponse) => void
  ): Promise<StopApplicationResponse> {
    return this.request("StopApplication", req, cb)
  }

  /**
   * 创建日志收集配置
   */
  async CreateLogConfig(
    req: CreateLogConfigRequest,
    cb?: (error: string, rep: CreateLogConfigResponse) => void
  ): Promise<CreateLogConfigResponse> {
    return this.request("CreateLogConfig", req, cb)
  }

  /**
   * 新增访问方式
   */
  async CreateApplicationService(
    req: CreateApplicationServiceRequest,
    cb?: (error: string, rep: CreateApplicationServiceResponse) => void
  ): Promise<CreateApplicationServiceResponse> {
    return this.request("CreateApplicationService", req, cb)
  }

  /**
   * 服务基本信息查看
   */
  async DescribeApplicationInfo(
    req: DescribeApplicationInfoRequest,
    cb?: (error: string, rep: DescribeApplicationInfoResponse) => void
  ): Promise<DescribeApplicationInfoResponse> {
    return this.request("DescribeApplicationInfo", req, cb)
  }

  /**
   * 创建配置
   */
  async CreateConfigData(
    req: CreateConfigDataRequest,
    cb?: (error: string, rep: CreateConfigDataResponse) => void
  ): Promise<CreateConfigDataResponse> {
    return this.request("CreateConfigData", req, cb)
  }

  /**
   * 获取应用实例列表
   */
  async DescribeApplicationPods(
    req: DescribeApplicationPodsRequest,
    cb?: (error: string, rep: DescribeApplicationPodsResponse) => void
  ): Promise<DescribeApplicationPodsResponse> {
    return this.request("DescribeApplicationPods", req, cb)
  }

  /**
   * 删除应用弹性策略组合
   */
  async DeleteApplicationAutoscaler(
    req: DeleteApplicationAutoscalerRequest,
    cb?: (error: string, rep: DeleteApplicationAutoscalerResponse) => void
  ): Promise<DeleteApplicationAutoscalerResponse> {
    return this.request("DeleteApplicationAutoscaler", req, cb)
  }

  /**
   * 修改应用基本信息
   */
  async ModifyApplicationInfo(
    req: ModifyApplicationInfoRequest,
    cb?: (error: string, rep: ModifyApplicationInfoResponse) => void
  ): Promise<ModifyApplicationInfoResponse> {
    return this.request("ModifyApplicationInfo", req, cb)
  }

  /**
   * 销毁配置
   */
  async DestroyConfigData(
    req: DestroyConfigDataRequest,
    cb?: (error: string, rep: DestroyConfigDataResponse) => void
  ): Promise<DestroyConfigDataResponse> {
    return this.request("DestroyConfigData", req, cb)
  }

  /**
   * 获取环境列表
   */
  async DescribeEnvironments(
    req: DescribeEnvironmentsRequest,
    cb?: (error: string, rep: DescribeEnvironmentsResponse) => void
  ): Promise<DescribeEnvironmentsResponse> {
    return this.request("DescribeEnvironments", req, cb)
  }

  /**
   * 生成Cos临时密钥
   */
  async CreateCosToken(
    req: CreateCosTokenRequest,
    cb?: (error: string, rep: CreateCosTokenResponse) => void
  ): Promise<CreateCosTokenResponse> {
    return this.request("CreateCosToken", req, cb)
  }

  /**
   * 查询 Ingress 规则
   */
  async DescribeIngress(
    req: DescribeIngressRequest,
    cb?: (error: string, rep: DescribeIngressResponse) => void
  ): Promise<DescribeIngressResponse> {
    return this.request("DescribeIngress", req, cb)
  }

  /**
   * 删除一条访问方式
   */
  async DeleteApplicationService(
    req: DeleteApplicationServiceRequest,
    cb?: (error: string, rep: DeleteApplicationServiceResponse) => void
  ): Promise<DeleteApplicationServiceResponse> {
    return this.request("DeleteApplicationService", req, cb)
  }

  /**
   * 生成应用程序包预签名下载链接
   */
  async GenerateApplicationPackageDownloadUrl(
    req: GenerateApplicationPackageDownloadUrlRequest,
    cb?: (error: string, rep: GenerateApplicationPackageDownloadUrlResponse) => void
  ): Promise<GenerateApplicationPackageDownloadUrlResponse> {
    return this.request("GenerateApplicationPackageDownloadUrl", req, cb)
  }

  /**
   * 创建环境
   */
  async CreateEnvironment(
    req: CreateEnvironmentRequest,
    cb?: (error: string, rep: CreateEnvironmentResponse) => void
  ): Promise<CreateEnvironmentResponse> {
    return this.request("CreateEnvironment", req, cb)
  }

  /**
   * 关闭应用弹性策略组合
   */
  async DisableApplicationAutoscaler(
    req: DisableApplicationAutoscalerRequest,
    cb?: (error: string, rep: DisableApplicationAutoscalerResponse) => void
  ): Promise<DisableApplicationAutoscalerResponse> {
    return this.request("DisableApplicationAutoscaler", req, cb)
  }

  /**
   * 查询 Ingress 规则列表
   */
  async DescribeIngresses(
    req: DescribeIngressesRequest,
    cb?: (error: string, rep: DescribeIngressesResponse) => void
  ): Promise<DescribeIngressesResponse> {
    return this.request("DescribeIngresses", req, cb)
  }

  /**
   * 创建应用
   */
  async CreateApplication(
    req: CreateApplicationRequest,
    cb?: (error: string, rep: CreateApplicationResponse) => void
  ): Promise<CreateApplicationResponse> {
    return this.request("CreateApplication", req, cb)
  }

  /**
   * 服务重启
   */
  async RestartApplication(
    req: RestartApplicationRequest,
    cb?: (error: string, rep: RestartApplicationResponse) => void
  ): Promise<RestartApplicationResponse> {
    return this.request("RestartApplication", req, cb)
  }

  /**
   * 更新应用部署版本
   */
  async RollingUpdateApplicationByVersion(
    req: RollingUpdateApplicationByVersionRequest,
    cb?: (error: string, rep: RollingUpdateApplicationByVersionResponse) => void
  ): Promise<RollingUpdateApplicationByVersionResponse> {
    return this.request("RollingUpdateApplicationByVersion", req, cb)
  }

  /**
   * 获取运行服务列表
   */
  async DescribeApplications(
    req: DescribeApplicationsRequest,
    cb?: (error: string, rep: DescribeApplicationsResponse) => void
  ): Promise<DescribeApplicationsResponse> {
    return this.request("DescribeApplications", req, cb)
  }

  /**
   * 回滚分批发布
   */
  async RevertDeployApplication(
    req: RevertDeployApplicationRequest,
    cb?: (error: string, rep: RevertDeployApplicationResponse) => void
  ): Promise<RevertDeployApplicationResponse> {
    return this.request("RevertDeployApplication", req, cb)
  }

  /**
   * 销毁日志收集配置
   */
  async DestroyLogConfig(
    req: DestroyLogConfigRequest,
    cb?: (error: string, rep: DestroyLogConfigResponse) => void
  ): Promise<DestroyLogConfigResponse> {
    return this.request("DestroyLogConfig", req, cb)
  }

  /**
   * 查询应用关联的 Ingress 规则列表
   */
  async DescribeRelatedIngresses(
    req: DescribeRelatedIngressesRequest,
    cb?: (error: string, rep: DescribeRelatedIngressesResponse) => void
  ): Promise<DescribeRelatedIngressesResponse> {
    return this.request("DescribeRelatedIngresses", req, cb)
  }

  /**
   * 查询配置详情
   */
  async DescribeConfigData(
    req: DescribeConfigDataRequest,
    cb?: (error: string, rep: DescribeConfigDataResponse) => void
  ): Promise<DescribeConfigDataResponse> {
    return this.request("DescribeConfigData", req, cb)
  }

  /**
   * 绑定云资源
   */
  async CreateResource(
    req: CreateResourceRequest,
    cb?: (error: string, rep: CreateResourceResponse) => void
  ): Promise<CreateResourceResponse> {
    return this.request("CreateResource", req, cb)
  }

  /**
   * 获取应用弹性策略组合
   */
  async DescribeApplicationAutoscalerList(
    req: DescribeApplicationAutoscalerListRequest,
    cb?: (error: string, rep: DescribeApplicationAutoscalerListResponse) => void
  ): Promise<DescribeApplicationAutoscalerListResponse> {
    return this.request("DescribeApplicationAutoscalerList", req, cb)
  }

  /**
   * 销毁环境
   */
  async DestroyEnvironment(
    req: DestroyEnvironmentRequest,
    cb?: (error: string, rep: DestroyEnvironmentResponse) => void
  ): Promise<DestroyEnvironmentResponse> {
    return this.request("DestroyEnvironment", req, cb)
  }

  /**
   * 查询配置列表
   */
  async DescribeConfigDataList(
    req: DescribeConfigDataListRequest,
    cb?: (error: string, rep: DescribeConfigDataListResponse) => void
  ): Promise<DescribeConfigDataListResponse> {
    return this.request("DescribeConfigDataList", req, cb)
  }
}
