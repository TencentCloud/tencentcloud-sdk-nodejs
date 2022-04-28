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
  MountedSettingConf,
  RestartApplicationPodResponse,
  DeleteApplicationRequest,
  CreateResourceRequest,
  ResumeDeployApplicationResponse,
  RestartApplicationResponse,
  StopApplicationRequest,
  HealthCheckConfig,
  TemDeployApplicationDetailInfo,
  DescribeDeployApplicationDetailRequest,
  EsInfo,
  DeployServiceBatchDetail,
  DescribeApplicationPodsResponse,
  DeleteIngressRequest,
  RestartApplicationPodRequest,
  DescribeRelatedIngressesRequest,
  ModifyEnvironmentResponse,
  CosToken,
  GenerateApplicationPackageDownloadUrlRequest,
  DeployApplicationRequest,
  IngressInfo,
  ModifyIngressResponse,
  DescribeEnvironmentsResponse,
  ModifyIngressRequest,
  DescribeApplicationPodsRequest,
  CreateApplicationRequest,
  EnablePrometheusConf,
  DescribeRelatedIngressesResponse,
  DescribeIngressesRequest,
  DescribeRunPodPage,
  IngressTls,
  DeployServicePodDetail,
  ModifyApplicationReplicasResponse,
  ModifyApplicationReplicasRequest,
  LogOutputConf,
  DescribeIngressesResponse,
  DeleteIngressResponse,
  TemNamespaceInfo,
  GenerateApplicationPackageDownloadUrlResponse,
  IngressRuleBackend,
  DescribeIngressResponse,
  CreateCosTokenResponse,
  IngressRule,
  CronHorizontalAutoscaler,
  RollingUpdateApplicationByVersionResponse,
  RollingUpdateApplicationByVersionRequest,
  RunVersionPod,
  DescribeDeployApplicationDetailResponse,
  IngressRuleValue,
  CreateResourceResponse,
  ModifyApplicationInfoRequest,
  ModifyApplicationInfoResponse,
  DeleteApplicationResponse,
  IngressRulePath,
  CreateEnvironmentResponse,
  NamespacePage,
  RestartApplicationRequest,
  CreateApplicationResponse,
  HorizontalAutoscaler,
  RevertDeployApplicationRequest,
  StorageMountConf,
  ModifyEnvironmentRequest,
  PortMapping,
  UseDefaultRepoParameters,
  RevertDeployApplicationResponse,
  DeployStrategyConf,
  DescribeIngressRequest,
  CreateCosTokenRequest,
  DescribeEnvironmentsRequest,
  StopApplicationResponse,
  EksService,
  CronHorizontalAutoscalerSchedule,
  ResumeDeployApplicationRequest,
  DeployApplicationResponse,
  StorageConf,
  CreateEnvironmentRequest,
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
   * 修改应用实例数量
   */
  async ModifyApplicationReplicas(
    req: ModifyApplicationReplicasRequest,
    cb?: (error: string, rep: ModifyApplicationReplicasResponse) => void
  ): Promise<ModifyApplicationReplicasResponse> {
    return this.request("ModifyApplicationReplicas", req, cb)
  }

  /**
   * 创建或者更新 Ingress 规则
   */
  async ModifyIngress(
    req: ModifyIngressRequest,
    cb?: (error: string, rep: ModifyIngressResponse) => void
  ): Promise<ModifyIngressResponse> {
    return this.request("ModifyIngress", req, cb)
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
   * 获取分批发布详情
   */
  async DescribeDeployApplicationDetail(
    req: DescribeDeployApplicationDetailRequest,
    cb?: (error: string, rep: DescribeDeployApplicationDetailResponse) => void
  ): Promise<DescribeDeployApplicationDetailResponse> {
    return this.request("DescribeDeployApplicationDetail", req, cb)
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
   * 编辑环境
   */
  async ModifyEnvironment(
    req: ModifyEnvironmentRequest,
    cb?: (error: string, rep: ModifyEnvironmentResponse) => void
  ): Promise<ModifyEnvironmentResponse> {
    return this.request("ModifyEnvironment", req, cb)
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
   * 获取应用实例列表
   */
  async DescribeApplicationPods(
    req: DescribeApplicationPodsRequest,
    cb?: (error: string, rep: DescribeApplicationPodsResponse) => void
  ): Promise<DescribeApplicationPodsResponse> {
    return this.request("DescribeApplicationPods", req, cb)
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
   * 修改应用基本信息
   */
  async ModifyApplicationInfo(
    req: ModifyApplicationInfoRequest,
    cb?: (error: string, rep: ModifyApplicationInfoResponse) => void
  ): Promise<ModifyApplicationInfoResponse> {
    return this.request("ModifyApplicationInfo", req, cb)
  }

  /**
   * 获取租户环境列表
   */
  async DescribeEnvironments(
    req: DescribeEnvironmentsRequest,
    cb?: (error: string, rep: DescribeEnvironmentsResponse) => void
  ): Promise<DescribeEnvironmentsResponse> {
    return this.request("DescribeEnvironments", req, cb)
  }

  /**
   * 生成Cos临时秘钥
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
   * 重启应用实例
   */
  async RestartApplicationPod(
    req: RestartApplicationPodRequest,
    cb?: (error: string, rep: RestartApplicationPodResponse) => void
  ): Promise<RestartApplicationPodResponse> {
    return this.request("RestartApplicationPod", req, cb)
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
   * 回滚分批发布
   */
  async RevertDeployApplication(
    req: RevertDeployApplicationRequest,
    cb?: (error: string, rep: RevertDeployApplicationResponse) => void
  ): Promise<RevertDeployApplicationResponse> {
    return this.request("RevertDeployApplication", req, cb)
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
   * 绑定云资源
   */
  async CreateResource(
    req: CreateResourceRequest,
    cb?: (error: string, rep: CreateResourceResponse) => void
  ): Promise<CreateResourceResponse> {
    return this.request("CreateResource", req, cb)
  }
}
