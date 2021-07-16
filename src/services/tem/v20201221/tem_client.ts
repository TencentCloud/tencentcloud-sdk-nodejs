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
  ModifyServiceInfoResponse,
  StorageMountConf,
  CreateResourceRequest,
  CreateServiceV2Response,
  CreateCosTokenV2Request,
  DeployServiceV2Response,
  EsInfo,
  DescribeNamespacesResponse,
  PortMapping,
  RestartServiceRunPodRequest,
  ModifyIngressResponse,
  DeleteIngressRequest,
  ModifyServiceInfoRequest,
  CreateNamespaceResponse,
  DescribeRelatedIngressesRequest,
  CosToken,
  DescribeNamespacesRequest,
  CreateCosTokenRequest,
  DeployServiceV2Request,
  ModifyIngressRequest,
  GenerateDownloadUrlResponse,
  DescribeRelatedIngressesResponse,
  CreateNamespaceRequest,
  DescribeIngressesRequest,
  DescribeRunPodPage,
  DescribeServiceRunPodListV2Request,
  LogOutputConf,
  DescribeIngressesResponse,
  IngressInfo,
  DeleteIngressResponse,
  RestartServiceRunPodResponse,
  ModifyNamespaceRequest,
  IngressRuleBackend,
  DescribeIngressResponse,
  CreateCosTokenResponse,
  IngressRule,
  IngressRulePath,
  StorageConf,
  ModifyNamespaceResponse,
  RunVersionPod,
  IngressRuleValue,
  CreateResourceResponse,
  DescribeServiceRunPodListV2Response,
  TemNamespaceInfo,
  NamespacePage,
  HealthCheckConfig,
  CreateCosTokenV2Response,
  IngressTls,
  GenerateDownloadUrlRequest,
  DeployStrategyConf,
  DescribeIngressRequest,
  CreateServiceV2Request,
  EksService,
  Pair,
} from "./tem_models"

/**
 * tem client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("tem.tencentcloudapi.com", "2020-12-21", clientConfig)
  }

  /**
   * 编辑环境
   */
  async ModifyNamespace(
    req: ModifyNamespaceRequest,
    cb?: (error: string, rep: ModifyNamespaceResponse) => void
  ): Promise<ModifyNamespaceResponse> {
    return this.request("ModifyNamespace", req, cb)
  }

  /**
   * 创建环境
   */
  async CreateNamespace(
    req: CreateNamespaceRequest,
    cb?: (error: string, rep: CreateNamespaceResponse) => void
  ): Promise<CreateNamespaceResponse> {
    return this.request("CreateNamespace", req, cb)
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
   * 生成包预签名下载链接
   */
  async GenerateDownloadUrl(
    req: GenerateDownloadUrlRequest,
    cb?: (error: string, rep: GenerateDownloadUrlResponse) => void
  ): Promise<GenerateDownloadUrlResponse> {
    return this.request("GenerateDownloadUrl", req, cb)
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
   * 生成Cos临时秘钥
   */
  async CreateCosTokenV2(
    req: CreateCosTokenV2Request,
    cb?: (error: string, rep: CreateCosTokenV2Response) => void
  ): Promise<CreateCosTokenV2Response> {
    return this.request("CreateCosTokenV2", req, cb)
  }

  /**
   * 服务部署
   */
  async DeployServiceV2(
    req: DeployServiceV2Request,
    cb?: (error: string, rep: DeployServiceV2Response) => void
  ): Promise<DeployServiceV2Response> {
    return this.request("DeployServiceV2", req, cb)
  }

  /**
   * 创建服务
   */
  async CreateServiceV2(
    req: CreateServiceV2Request,
    cb?: (error: string, rep: CreateServiceV2Response) => void
  ): Promise<CreateServiceV2Response> {
    return this.request("CreateServiceV2", req, cb)
  }

  /**
   * 查询服务关联的 Ingress 规则列表
   */
  async DescribeRelatedIngresses(
    req: DescribeRelatedIngressesRequest,
    cb?: (error: string, rep: DescribeRelatedIngressesResponse) => void
  ): Promise<DescribeRelatedIngressesResponse> {
    return this.request("DescribeRelatedIngresses", req, cb)
  }

  /**
   * 修改服务基本信息
   */
  async ModifyServiceInfo(
    req: ModifyServiceInfoRequest,
    cb?: (error: string, rep: ModifyServiceInfoResponse) => void
  ): Promise<ModifyServiceInfoResponse> {
    return this.request("ModifyServiceInfo", req, cb)
  }

  /**
   * 重启实例
   */
  async RestartServiceRunPod(
    req: RestartServiceRunPodRequest,
    cb?: (error: string, rep: RestartServiceRunPodResponse) => void
  ): Promise<RestartServiceRunPodResponse> {
    return this.request("RestartServiceRunPod", req, cb)
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
   * 获取服务下面运行pod列表
   */
  async DescribeServiceRunPodListV2(
    req: DescribeServiceRunPodListV2Request,
    cb?: (error: string, rep: DescribeServiceRunPodListV2Response) => void
  ): Promise<DescribeServiceRunPodListV2Response> {
    return this.request("DescribeServiceRunPodListV2", req, cb)
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
   * 获取租户环境列表
   */
  async DescribeNamespaces(
    req: DescribeNamespacesRequest,
    cb?: (error: string, rep: DescribeNamespacesResponse) => void
  ): Promise<DescribeNamespacesResponse> {
    return this.request("DescribeNamespaces", req, cb)
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
}
