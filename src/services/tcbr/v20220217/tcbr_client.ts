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
  DescribeEnvBaseInfoResponse,
  InitializeCloudRunResourceResponse,
  DescribeCloudRunProcessLogResponse,
  StopVersionInstanceRequest,
  DeployParam,
  StartVersionInstanceResponse,
  DescribeReleaseOrderRequest,
  LogResObject,
  LogServiceInfo,
  ClsInfo,
  StartVersionInstanceRequest,
  DescribeCloudRunDeployRecordRequest,
  DescribeCloudRunPodListResponse,
  FailDeleteVersions,
  Tag,
  DescribeEnvBaseInfoRequest,
  CreateCloudRunServerResponse,
  UpdateCloudRunServerResponse,
  ServerManageTaskInfo,
  DeleteCloudRunServerResponse,
  DescribeCloudRunProcessLogRequest,
  TaskStepInfo,
  ReleaseGrayRequest,
  DeployRecord,
  CreateVpcInfo,
  StopVersionInstanceResponse,
  InitializeCloudRunResourceRequest,
  VersionPodInstance,
  VolumeConf,
  DescribeStableIPTaskResponse,
  DeleteCloudRunServerRequest,
  ServerBaseConfig,
  DescribeStableIPRequest,
  ModifyStableIPStatusRequest,
  HpaPolicy,
  LogObject,
  CreateCloudRunEnvResponse,
  ReleaseOrderInfo,
  ServerBaseInfo,
  EnvInfo,
  BuildPacksInfo,
  SubmitServerConfigChangeDiffRequest,
  CreateCloudRunServerRequest,
  SearchClsLogResponse,
  DescribeVersionDetailRequest,
  DescribeCloudRunEnvsResponse,
  ReleaseGrayResponse,
  ServerBaseConfigDiff,
  DescribeReleaseOrderResponse,
  StaticStorageInfo,
  DatabasesInfo,
  RepositoryInfo,
  PublicNetConf,
  OnlineVersionInfo,
  SubmitServerConfigChangeDiffResponse,
  FunctionInfo,
  DescribeCloudRunServerDetailResponse,
  EnvBaseInfo,
  SuccessDeleteVersions,
  ModifyStableIPStatusResponse,
  VersionInfo,
  DescribeCloudRunServersResponse,
  StorageInfo,
  DescribeServerManageTaskResponse,
  DescribeCloudRunDeployRecordResponse,
  UpdateCloudRunServerRequest,
  DescribeCloudRunEnvsRequest,
  DiffConfigItem,
  SubmitServerRollbackResponse,
  SearchClsLogRequest,
  DescribeCloudRunPodListRequest,
  OperateServerManageRequest,
  OperateServerManageResponse,
  DescribeCloudRunServerDetailRequest,
  DeleteCloudRunVersionsResponse,
  DescribeCloudRunServersRequest,
  SimpleVersion,
  DescribeServerManageTaskRequest,
  DescribeVersionDetailResponse,
  DescribeStableIPTaskRequest,
  DescribeStableIPResponse,
  VpcConf,
  DeleteCloudRunVersionsRequest,
  TimerScale,
  SubmitServerRollbackRequest,
  CreateCloudRunEnvRequest,
  VersionFlowInfo,
  ObjectKV,
  ObjectKVPriority,
} from "./tcbr_models"

/**
 * tcbr client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("tcbr.tencentcloudapi.com", "2022-02-17", clientConfig)
  }

  /**
   * 批量删除版本
   */
  async DeleteCloudRunVersions(
    req: DeleteCloudRunVersionsRequest,
    cb?: (error: string, rep: DeleteCloudRunVersionsResponse) => void
  ): Promise<DeleteCloudRunVersionsResponse> {
    return this.request("DeleteCloudRunVersions", req, cb)
  }

  /**
   * 查询云托管服务列表接口
   */
  async DescribeCloudRunServers(
    req: DescribeCloudRunServersRequest,
    cb?: (error: string, rep: DescribeCloudRunServersResponse) => void
  ): Promise<DescribeCloudRunServersResponse> {
    return this.request("DescribeCloudRunServers", req, cb)
  }

  /**
   * 启动版本实例
   */
  async StartVersionInstance(
    req: StartVersionInstanceRequest,
    cb?: (error: string, rep: StartVersionInstanceResponse) => void
  ): Promise<StartVersionInstanceResponse> {
    return this.request("StartVersionInstance", req, cb)
  }

  /**
   * 获取固定IP地址
   */
  async DescribeStableIP(
    req: DescribeStableIPRequest,
    cb?: (error: string, rep: DescribeStableIPResponse) => void
  ): Promise<DescribeStableIPResponse> {
    return this.request("DescribeStableIP", req, cb)
  }

  /**
   * 本接口 ModifyStableIPStatus 用于修改固定 IP 状态
   */
  async ModifyStableIPStatus(
    req: ModifyStableIPStatusRequest,
    cb?: (error: string, rep: ModifyStableIPStatusResponse) => void
  ): Promise<ModifyStableIPStatusResponse> {
    return this.request("ModifyStableIPStatus", req, cb)
  }

  /**
   * 本接口 DescribeStableIPTask 用于修改固定 IP 任务状态
   */
  async DescribeStableIPTask(
    req: DescribeStableIPTaskRequest,
    cb?: (error: string, rep: DescribeStableIPTaskResponse) => void
  ): Promise<DescribeStableIPTaskResponse> {
    return this.request("DescribeStableIPTask", req, cb)
  }

  /**
   * 查询服务管理任务信息
   */
  async DescribeServerManageTask(
    req: DescribeServerManageTaskRequest,
    cb?: (error: string, rep: DescribeServerManageTaskResponse) => void
  ): Promise<DescribeServerManageTaskResponse> {
    return this.request("DescribeServerManageTask", req, cb)
  }

  /**
   * 更新配置并使用最新镜像发布
   */
  async SubmitServerConfigChangeDiff(
    req: SubmitServerConfigChangeDiffRequest,
    cb?: (error: string, rep: SubmitServerConfigChangeDiffResponse) => void
  ): Promise<SubmitServerConfigChangeDiffResponse> {
    return this.request("SubmitServerConfigChangeDiff", req, cb)
  }

  /**
   * 回滚版本
   */
  async SubmitServerRollback(
    req: SubmitServerRollbackRequest,
    cb?: (error: string, rep: SubmitServerRollbackResponse) => void
  ): Promise<SubmitServerRollbackResponse> {
    return this.request("SubmitServerRollback", req, cb)
  }

  /**
   * 获取环境列表，含环境下的各个资源信息。尤其是各资源的唯一标识，是请求各资源的关键参数
   */
  async DescribeCloudRunEnvs(
    req: DescribeCloudRunEnvsRequest,
    cb?: (error: string, rep: DescribeCloudRunEnvsResponse) => void
  ): Promise<DescribeCloudRunEnvsResponse> {
    return this.request("DescribeCloudRunEnvs", req, cb)
  }

  /**
   * 停止版本实例
   */
  async StopVersionInstance(
    req: StopVersionInstanceRequest,
    cb?: (error: string, rep: StopVersionInstanceResponse) => void
  ): Promise<StopVersionInstanceResponse> {
    return this.request("StopVersionInstance", req, cb)
  }

  /**
   * 查询环境基础信息
   */
  async DescribeEnvBaseInfo(
    req: DescribeEnvBaseInfoRequest,
    cb?: (error: string, rep: DescribeEnvBaseInfoResponse) => void
  ): Promise<DescribeEnvBaseInfoResponse> {
    return this.request("DescribeEnvBaseInfo", req, cb)
  }

  /**
   * 查询运行日志
   */
  async DescribeCloudRunProcessLog(
    req: DescribeCloudRunProcessLogRequest,
    cb?: (error: string, rep: DescribeCloudRunProcessLogResponse) => void
  ): Promise<DescribeCloudRunProcessLogResponse> {
    return this.request("DescribeCloudRunProcessLog", req, cb)
  }

  /**
   * 查询发布单
   */
  async DescribeReleaseOrder(
    req: DescribeReleaseOrderRequest,
    cb?: (error: string, rep: DescribeReleaseOrderResponse) => void
  ): Promise<DescribeReleaseOrderResponse> {
    return this.request("DescribeReleaseOrder", req, cb)
  }

  /**
   * 灰度发布
   */
  async ReleaseGray(
    req: ReleaseGrayRequest,
    cb?: (error: string, rep: ReleaseGrayResponse) => void
  ): Promise<ReleaseGrayResponse> {
    return this.request("ReleaseGray", req, cb)
  }

  /**
   * 查询版本详情
   */
  async DescribeVersionDetail(
    req: DescribeVersionDetailRequest,
    cb?: (error: string, rep: DescribeVersionDetailResponse) => void
  ): Promise<DescribeVersionDetailResponse> {
    return this.request("DescribeVersionDetail", req, cb)
  }

  /**
   * 创建云托管环境，并开通资源。
   */
  async CreateCloudRunEnv(
    req: CreateCloudRunEnvRequest,
    cb?: (error: string, rep: CreateCloudRunEnvResponse) => void
  ): Promise<CreateCloudRunEnvResponse> {
    return this.request("CreateCloudRunEnv", req, cb)
  }

  /**
   * 更新云托管服务
   */
  async UpdateCloudRunServer(
    req: UpdateCloudRunServerRequest,
    cb?: (error: string, rep: UpdateCloudRunServerResponse) => void
  ): Promise<UpdateCloudRunServerResponse> {
    return this.request("UpdateCloudRunServer", req, cb)
  }

  /**
   * 查询日志信息
   */
  async SearchClsLog(
    req: SearchClsLogRequest,
    cb?: (error: string, rep: SearchClsLogResponse) => void
  ): Promise<SearchClsLogResponse> {
    return this.request("SearchClsLog", req, cb)
  }

  /**
   * 操作发布单
   */
  async OperateServerManage(
    req: OperateServerManageRequest,
    cb?: (error: string, rep: OperateServerManageResponse) => void
  ): Promise<OperateServerManageResponse> {
    return this.request("OperateServerManage", req, cb)
  }

  /**
   * 创建云托管服务接口
   */
  async CreateCloudRunServer(
    req: CreateCloudRunServerRequest,
    cb?: (error: string, rep: CreateCloudRunServerResponse) => void
  ): Promise<CreateCloudRunServerResponse> {
    return this.request("CreateCloudRunServer", req, cb)
  }

  /**
   * 查询云托管Pod实例列表
   */
  async DescribeCloudRunPodList(
    req: DescribeCloudRunPodListRequest,
    cb?: (error: string, rep: DescribeCloudRunPodListResponse) => void
  ): Promise<DescribeCloudRunPodListResponse> {
    return this.request("DescribeCloudRunPodList", req, cb)
  }

  /**
   * 删除云托管服务：包括服务下的版本，镜像，流水线
   */
  async DeleteCloudRunServer(
    req: DeleteCloudRunServerRequest,
    cb?: (error: string, rep: DeleteCloudRunServerResponse) => void
  ): Promise<DeleteCloudRunServerResponse> {
    return this.request("DeleteCloudRunServer", req, cb)
  }

  /**
   * 创建云托管环境，并开通资源。
   */
  async InitializeCloudRunResource(
    req: InitializeCloudRunResourceRequest,
    cb?: (error: string, rep: InitializeCloudRunResourceResponse) => void
  ): Promise<InitializeCloudRunResourceResponse> {
    return this.request("InitializeCloudRunResource", req, cb)
  }

  /**
   * 查询云托管部署记录
   */
  async DescribeCloudRunDeployRecord(
    req: DescribeCloudRunDeployRecordRequest,
    cb?: (error: string, rep: DescribeCloudRunDeployRecordResponse) => void
  ): Promise<DescribeCloudRunDeployRecordResponse> {
    return this.request("DescribeCloudRunDeployRecord", req, cb)
  }

  /**
   * 查询云托管服务详情
   */
  async DescribeCloudRunServerDetail(
    req: DescribeCloudRunServerDetailRequest,
    cb?: (error: string, rep: DescribeCloudRunServerDetailResponse) => void
  ): Promise<DescribeCloudRunServerDetailResponse> {
    return this.request("DescribeCloudRunServerDetail", req, cb)
  }
}
