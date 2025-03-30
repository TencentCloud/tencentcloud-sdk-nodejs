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
  DescribeAndroidInstanceTasksStatusResponse,
  ExecuteCommandOnAndroidInstancesResponse,
  StartPublishStreamToCSSResponse,
  StartAndroidInstancesRequest,
  CreateSessionRequest,
  SyncExecuteCommandOnAndroidInstancesRequest,
  UninstallAndroidInstancesAppResponse,
  StopAndroidInstancesAppResponse,
  DescribeAndroidInstanceLabelsResponse,
  AndroidApp,
  DescribeAndroidAppsResponse,
  StopAndroidInstancesAppRequest,
  ModifyAndroidInstancesLabelsRequest,
  SyncAndroidInstanceImage,
  AndroidInstanceLabel,
  DeleteAndroidInstanceImagesResponse,
  StartPublishStreamRequest,
  CreateAndroidInstanceImageResponse,
  ModifyAndroidInstanceResolutionResponse,
  DeleteAndroidInstanceImagesRequest,
  DescribeAndroidInstanceAppsResponse,
  CreateAndroidInstanceSSHResponse,
  ResetAndroidInstancesRequest,
  UploadFileToAndroidInstancesRequest,
  SaveGameArchiveResponse,
  ConnectAndroidInstanceRequest,
  CopyAndroidInstanceRequest,
  SyncExecuteCommandOnAndroidInstancesResponse,
  StartAndroidInstancesAppRequest,
  ModifyAndroidInstancesUserIdRequest,
  StopPublishStreamResponse,
  StartAndroidInstancesResponse,
  DeleteAndroidInstanceLabelRequest,
  ModifyAndroidInstancesUserIdResponse,
  InstallAndroidInstancesAppRequest,
  UninstallAndroidInstancesAppRequest,
  DestroyAndroidInstancesRequest,
  CreateAndroidInstanceWebShellResponse,
  DescribeAndroidInstanceImagesResponse,
  ModifyAndroidInstanceInformationRequest,
  StopPublishStreamRequest,
  SyncExecuteCommandResult,
  RestartAndroidInstancesAppResponse,
  DescribeAndroidInstanceTasksStatusRequest,
  CreateAndroidInstancesScreenshotResponse,
  DescribeInstancesCountResponse,
  ExecuteCommandOnAndroidInstancesRequest,
  ModifyAndroidInstanceInformationResponse,
  DestroyAndroidInstancesResponse,
  SaveGameArchiveRequest,
  SwitchGameArchiveResponse,
  CreateAndroidInstancesScreenshotRequest,
  InstallAndroidInstancesAppResponse,
  AndroidInstanceTask,
  ConnectAndroidInstanceResponse,
  DescribeAndroidInstancesRequest,
  DescribeAndroidInstancesResponse,
  SyncAndroidInstanceImageRequest,
  ModifyAndroidInstanceResolutionRequest,
  AndroidAppVersionInfo,
  StartAndroidInstancesAppResponse,
  SwitchGameArchiveRequest,
  StartPublishStreamToCSSRequest,
  Filter,
  ResetAndroidInstancesResponse,
  RestartAndroidInstancesAppRequest,
  DescribeAndroidAppsRequest,
  StopGameRequest,
  RebootAndroidInstancesResponse,
  TrylockWorkerResponse,
  CreateAndroidInstanceWebShellRequest,
  ModifyAndroidInstancesLabelsResponse,
  DescribeAndroidInstanceLabelsRequest,
  CopyAndroidInstanceResponse,
  DeleteAndroidInstanceLabelResponse,
  DescribeAndroidInstanceImagesRequest,
  AndroidInstanceTaskStatus,
  UploadFileToAndroidInstancesResponse,
  SyncAndroidInstanceImageResponse,
  CreateAndroidInstancesResponse,
  StopGameResponse,
  CreateAndroidInstanceLabelRequest,
  AndroidInstance,
  CreateAndroidInstancesRequest,
  CreateAndroidInstanceLabelResponse,
  StartPublishStreamResponse,
  AndroidInstanceImage,
  DescribeAndroidInstanceAppsRequest,
  DescribeInstancesCountRequest,
  TrylockWorkerRequest,
  RebootAndroidInstancesRequest,
  CreateSessionResponse,
  AndroidInstanceAppInfo,
  StopAndroidInstancesRequest,
  LabelRequirement,
  CreateAndroidInstanceSSHRequest,
  StopAndroidInstancesResponse,
  CreateAndroidInstanceImageRequest,
} from "./gs_models"

/**
 * gs client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("gs.tencentcloudapi.com", "2019-11-18", clientConfig)
  }

  /**
   * 强制退出游戏
   */
  async StopGame(
    req: StopGameRequest,
    cb?: (error: string, rep: StopGameResponse) => void
  ): Promise<StopGameResponse> {
    return this.request("StopGame", req, cb)
  }

  /**
   * 在安卓实例上同步执行命令，仅支持1秒内可以返回结果的命令，例如：ls、cd。同时执行的实例数量不能过多，否则可能云api返回超时。不支持超过1秒无法返回或无法自主结束的命令，例如：top、vim，执行结果最大1KB
   */
  async SyncExecuteCommandOnAndroidInstances(
    req: SyncExecuteCommandOnAndroidInstancesRequest,
    cb?: (error: string, rep: SyncExecuteCommandOnAndroidInstancesResponse) => void
  ): Promise<SyncExecuteCommandOnAndroidInstancesResponse> {
    return this.request("SyncExecuteCommandOnAndroidInstances", req, cb)
  }

  /**
   * 开始云端推流
   */
  async StartPublishStreamToCSS(
    req: StartPublishStreamToCSSRequest,
    cb?: (error: string, rep: StartPublishStreamToCSSResponse) => void
  ): Promise<StartPublishStreamToCSSResponse> {
    return this.request("StartPublishStreamToCSS", req, cb)
  }

  /**
   * 创建安卓实例 SSH 连接
   */
  async CreateAndroidInstanceSSH(
    req: CreateAndroidInstanceSSHRequest,
    cb?: (error: string, rep: CreateAndroidInstanceSSHResponse) => void
  ): Promise<CreateAndroidInstanceSSHResponse> {
    return this.request("CreateAndroidInstanceSSH", req, cb)
  }

  /**
   * 安卓实例截图
   */
  async CreateAndroidInstancesScreenshot(
    req: CreateAndroidInstancesScreenshotRequest,
    cb?: (error: string, rep: CreateAndroidInstancesScreenshotResponse) => void
  ): Promise<CreateAndroidInstancesScreenshotResponse> {
    return this.request("CreateAndroidInstancesScreenshot", req, cb)
  }

  /**
   * 卸载安卓实例应用
   */
  async UninstallAndroidInstancesApp(
    req: UninstallAndroidInstancesAppRequest,
    cb?: (error: string, rep: UninstallAndroidInstancesAppResponse) => void
  ): Promise<UninstallAndroidInstancesAppResponse> {
    return this.request("UninstallAndroidInstancesApp", req, cb)
  }

  /**
   * 创建安卓实例镜像
   */
  async CreateAndroidInstanceImage(
    req: CreateAndroidInstanceImageRequest,
    cb?: (error: string, rep: CreateAndroidInstanceImageResponse) => void
  ): Promise<CreateAndroidInstanceImageResponse> {
    return this.request("CreateAndroidInstanceImage", req, cb)
  }

  /**
   * 尝试锁定机器
   */
  async TrylockWorker(
    req: TrylockWorkerRequest,
    cb?: (error: string, rep: TrylockWorkerResponse) => void
  ): Promise<TrylockWorkerResponse> {
    return this.request("TrylockWorker", req, cb)
  }

  /**
   * 修改安卓实例的信息
   */
  async ModifyAndroidInstanceInformation(
    req: ModifyAndroidInstanceInformationRequest,
    cb?: (error: string, rep: ModifyAndroidInstanceInformationResponse) => void
  ): Promise<ModifyAndroidInstanceInformationResponse> {
    return this.request("ModifyAndroidInstanceInformation", req, cb)
  }

  /**
   * 删除安卓实例镜像
   */
  async DeleteAndroidInstanceImages(
    req: DeleteAndroidInstanceImagesRequest,
    cb?: (error: string, rep: DeleteAndroidInstanceImagesResponse) => void
  ): Promise<DeleteAndroidInstanceImagesResponse> {
    return this.request("DeleteAndroidInstanceImages", req, cb)
  }

  /**
   * 创建安卓实例
   */
  async DescribeAndroidInstanceLabels(
    req: DescribeAndroidInstanceLabelsRequest,
    cb?: (error: string, rep: DescribeAndroidInstanceLabelsResponse) => void
  ): Promise<DescribeAndroidInstanceLabelsResponse> {
    return this.request("DescribeAndroidInstanceLabels", req, cb)
  }

  /**
   * 查询安卓实例镜像
   */
  async DescribeAndroidInstanceImages(
    req: DescribeAndroidInstanceImagesRequest,
    cb?: (error: string, rep: DescribeAndroidInstanceImagesResponse) => void
  ): Promise<DescribeAndroidInstanceImagesResponse> {
    return this.request("DescribeAndroidInstanceImages", req, cb)
  }

  /**
   * 启动安卓实例应用
   */
  async StartAndroidInstancesApp(
    req: StartAndroidInstancesAppRequest,
    cb?: (error: string, rep: StartAndroidInstancesAppResponse) => void
  ): Promise<StartAndroidInstancesAppResponse> {
    return this.request("StartAndroidInstancesApp", req, cb)
  }

  /**
   * 启动安卓实例应用
   */
  async RestartAndroidInstancesApp(
    req: RestartAndroidInstancesAppRequest,
    cb?: (error: string, rep: RestartAndroidInstancesAppResponse) => void
  ): Promise<RestartAndroidInstancesAppResponse> {
    return this.request("RestartAndroidInstancesApp", req, cb)
  }

  /**
   * 创建安卓实例
   */
  async DeleteAndroidInstanceLabel(
    req: DeleteAndroidInstanceLabelRequest,
    cb?: (error: string, rep: DeleteAndroidInstanceLabelResponse) => void
  ): Promise<DeleteAndroidInstanceLabelResponse> {
    return this.request("DeleteAndroidInstanceLabel", req, cb)
  }

  /**
   * 切换游戏存档
   */
  async SwitchGameArchive(
    req: SwitchGameArchiveRequest,
    cb?: (error: string, rep: SwitchGameArchiveResponse) => void
  ): Promise<SwitchGameArchiveResponse> {
    return this.request("SwitchGameArchive", req, cb)
  }

  /**
   * 创建安卓实例
   */
  async CreateAndroidInstanceLabel(
    req: CreateAndroidInstanceLabelRequest,
    cb?: (error: string, rep: CreateAndroidInstanceLabelResponse) => void
  ): Promise<CreateAndroidInstanceLabelResponse> {
    return this.request("CreateAndroidInstanceLabel", req, cb)
  }

  /**
   * 创建安卓实例 WebShell 连接
   */
  async CreateAndroidInstanceWebShell(
    req: CreateAndroidInstanceWebShellRequest,
    cb?: (error: string, rep: CreateAndroidInstanceWebShellResponse) => void
  ): Promise<CreateAndroidInstanceWebShellResponse> {
    return this.request("CreateAndroidInstanceWebShell", req, cb)
  }

  /**
   * 开始云端推流
   */
  async StartPublishStream(
    req: StartPublishStreamRequest,
    cb?: (error: string, rep: StartPublishStreamResponse) => void
  ): Promise<StartPublishStreamResponse> {
    return this.request("StartPublishStream", req, cb)
  }

  /**
   * 查询安卓实例
   */
  async DescribeAndroidInstances(
    req: DescribeAndroidInstancesRequest,
    cb?: (error: string, rep: DescribeAndroidInstancesResponse) => void
  ): Promise<DescribeAndroidInstancesResponse> {
    return this.request("DescribeAndroidInstances", req, cb)
  }

  /**
   * 同步安卓实例镜像
   */
  async SyncAndroidInstanceImage(
    req: SyncAndroidInstanceImageRequest,
    cb?: (error: string, rep: SyncAndroidInstanceImageResponse) => void
  ): Promise<SyncAndroidInstanceImageResponse> {
    return this.request("SyncAndroidInstanceImage", req, cb)
  }

  /**
   * 重启安卓实例
   */
  async RebootAndroidInstances(
    req: RebootAndroidInstancesRequest,
    cb?: (error: string, rep: RebootAndroidInstancesResponse) => void
  ): Promise<RebootAndroidInstancesResponse> {
    return this.request("RebootAndroidInstances", req, cb)
  }

  /**
   * 获取并发总数和运行数
   */
  async DescribeInstancesCount(
    req: DescribeInstancesCountRequest,
    cb?: (error: string, rep: DescribeInstancesCountResponse) => void
  ): Promise<DescribeInstancesCountResponse> {
    return this.request("DescribeInstancesCount", req, cb)
  }

  /**
   * 创建安卓实例
   */
  async CreateAndroidInstances(
    req: CreateAndroidInstancesRequest,
    cb?: (error: string, rep: CreateAndroidInstancesResponse) => void
  ): Promise<CreateAndroidInstancesResponse> {
    return this.request("CreateAndroidInstances", req, cb)
  }

  /**
   * 上传文件到安卓实例
   */
  async UploadFileToAndroidInstances(
    req: UploadFileToAndroidInstancesRequest,
    cb?: (error: string, rep: UploadFileToAndroidInstancesResponse) => void
  ): Promise<UploadFileToAndroidInstancesResponse> {
    return this.request("UploadFileToAndroidInstances", req, cb)
  }

  /**
   * 重启安卓实例
   */
  async StartAndroidInstances(
    req: StartAndroidInstancesRequest,
    cb?: (error: string, rep: StartAndroidInstancesResponse) => void
  ): Promise<StartAndroidInstancesResponse> {
    return this.request("StartAndroidInstances", req, cb)
  }

  /**
   * 修改安卓实例分辨率。需要注意的是该接口可能导致正在运行的应用出现闪退，所以建议在实例维护时期才进行调用。
   */
  async ModifyAndroidInstanceResolution(
    req: ModifyAndroidInstanceResolutionRequest,
    cb?: (error: string, rep: ModifyAndroidInstanceResolutionResponse) => void
  ): Promise<ModifyAndroidInstanceResolutionResponse> {
    return this.request("ModifyAndroidInstanceResolution", req, cb)
  }

  /**
   * 连接安卓实例
   */
  async ConnectAndroidInstance(
    req: ConnectAndroidInstanceRequest,
    cb?: (error: string, rep: ConnectAndroidInstanceResponse) => void
  ): Promise<ConnectAndroidInstanceResponse> {
    return this.request("ConnectAndroidInstance", req, cb)
  }

  /**
   * 停止云端推流
   */
  async StopPublishStream(
    req: StopPublishStreamRequest,
    cb?: (error: string, rep: StopPublishStreamResponse) => void
  ): Promise<StopPublishStreamResponse> {
    return this.request("StopPublishStream", req, cb)
  }

  /**
   * 查询安卓实例应用
   */
  async DescribeAndroidInstanceApps(
    req: DescribeAndroidInstanceAppsRequest,
    cb?: (error: string, rep: DescribeAndroidInstanceAppsResponse) => void
  ): Promise<DescribeAndroidInstanceAppsResponse> {
    return this.request("DescribeAndroidInstanceApps", req, cb)
  }

  /**
   * 停止安卓实例应用
   */
  async StopAndroidInstancesApp(
    req: StopAndroidInstancesAppRequest,
    cb?: (error: string, rep: StopAndroidInstancesAppResponse) => void
  ): Promise<StopAndroidInstancesAppResponse> {
    return this.request("StopAndroidInstancesApp", req, cb)
  }

  /**
   * 创建会话
   */
  async CreateSession(
    req: CreateSessionRequest,
    cb?: (error: string, rep: CreateSessionResponse) => void
  ): Promise<CreateSessionResponse> {
    return this.request("CreateSession", req, cb)
  }

  /**
   * 重置安卓实例
   */
  async ResetAndroidInstances(
    req: ResetAndroidInstancesRequest,
    cb?: (error: string, rep: ResetAndroidInstancesResponse) => void
  ): Promise<ResetAndroidInstancesResponse> {
    return this.request("ResetAndroidInstances", req, cb)
  }

  /**
   * 安装安卓实例应用
   */
  async InstallAndroidInstancesApp(
    req: InstallAndroidInstancesAppRequest,
    cb?: (error: string, rep: InstallAndroidInstancesAppResponse) => void
  ): Promise<InstallAndroidInstancesAppResponse> {
    return this.request("InstallAndroidInstancesApp", req, cb)
  }

  /**
   * 查询安卓应用信息
   */
  async DescribeAndroidApps(
    req: DescribeAndroidAppsRequest,
    cb?: (error: string, rep: DescribeAndroidAppsResponse) => void
  ): Promise<DescribeAndroidAppsResponse> {
    return this.request("DescribeAndroidApps", req, cb)
  }

  /**
     * 复制安卓实例：
1. 排除和包含文件只能指定/data下的文件，不指定时复制整个/data目录
2. 源实例和目的实例必须在同一区域
3. 复制时，源实例和目的实例都会停机，复制完后实例会自动启动
4. 复制时会产生大量内网流量，请限制并发
     */
  async CopyAndroidInstance(
    req: CopyAndroidInstanceRequest,
    cb?: (error: string, rep: CopyAndroidInstanceResponse) => void
  ): Promise<CopyAndroidInstanceResponse> {
    return this.request("CopyAndroidInstance", req, cb)
  }

  /**
   * 销毁安卓实例
   */
  async DestroyAndroidInstances(
    req: DestroyAndroidInstancesRequest,
    cb?: (error: string, rep: DestroyAndroidInstancesResponse) => void
  ): Promise<DestroyAndroidInstancesResponse> {
    return this.request("DestroyAndroidInstances", req, cb)
  }

  /**
   * 批量修改安卓实例的用户ID
   */
  async ModifyAndroidInstancesUserId(
    req: ModifyAndroidInstancesUserIdRequest,
    cb?: (error: string, rep: ModifyAndroidInstancesUserIdResponse) => void
  ): Promise<ModifyAndroidInstancesUserIdResponse> {
    return this.request("ModifyAndroidInstancesUserId", req, cb)
  }

  /**
   * 在安卓实例上异步执行命令，命令输出结果如果内容过长会被截断
   */
  async ExecuteCommandOnAndroidInstances(
    req: ExecuteCommandOnAndroidInstancesRequest,
    cb?: (error: string, rep: ExecuteCommandOnAndroidInstancesResponse) => void
  ): Promise<ExecuteCommandOnAndroidInstancesResponse> {
    return this.request("ExecuteCommandOnAndroidInstances", req, cb)
  }

  /**
   * 重启安卓实例
   */
  async StopAndroidInstances(
    req: StopAndroidInstancesRequest,
    cb?: (error: string, rep: StopAndroidInstancesResponse) => void
  ): Promise<StopAndroidInstancesResponse> {
    return this.request("StopAndroidInstances", req, cb)
  }

  /**
   * 修改安卓实例分辨率。需要注意的是该接口可能导致正在运行的应用出现闪退，所以建议在实例维护时期才进行调用。
   */
  async ModifyAndroidInstancesLabels(
    req: ModifyAndroidInstancesLabelsRequest,
    cb?: (error: string, rep: ModifyAndroidInstancesLabelsResponse) => void
  ): Promise<ModifyAndroidInstancesLabelsResponse> {
    return this.request("ModifyAndroidInstancesLabels", req, cb)
  }

  /**
   * 保存游戏存档
   */
  async SaveGameArchive(
    req: SaveGameArchiveRequest,
    cb?: (error: string, rep: SaveGameArchiveResponse) => void
  ): Promise<SaveGameArchiveResponse> {
    return this.request("SaveGameArchive", req, cb)
  }

  /**
   * 查询安卓实例任务状态
   */
  async DescribeAndroidInstanceTasksStatus(
    req: DescribeAndroidInstanceTasksStatusRequest,
    cb?: (error: string, rep: DescribeAndroidInstanceTasksStatusResponse) => void
  ): Promise<DescribeAndroidInstanceTasksStatusResponse> {
    return this.request("DescribeAndroidInstanceTasksStatus", req, cb)
  }
}
