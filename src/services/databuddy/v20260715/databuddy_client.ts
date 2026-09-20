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
  DependOnBrief,
  FileInfo,
  UpdateConsoleUsersResponse,
  Workflow,
  TaskRetryStrategy,
  FileStorage,
  ScheduledTimeConfig,
  DeleteWorkflowResponse,
  ListConsoleUsersResponse,
  RemoveConsoleUsersResponse,
  InnerWorkflowTaskBrief,
  MonitorMetricBrief,
  ParamInfo,
  InnerWorkflowTaskRunIteration,
  DeleteWorkflowRequest,
  ListWorkflowTaskRunsRequest,
  AlarmBrief,
  WorkflowTaskNodeBrief,
  UpdateConsoleUsersRsp,
  CreateWorkflowRequest,
  WorkflowRunBrief,
  WorkflowTriggerAdvancedConfiguration,
  AsyncActionRsp,
  CreateFileResponse,
  TaskSchedulingParameterBrief,
  UpdateWorkflowRequest,
  TaskRunConditionRule,
  ResourceGroupInfo,
  UnbindWorkflowBundleResponse,
  KillWorkflowRunResponse,
  AddConsoleUsersRsp,
  ListWorkflowsRequest,
  ListWorkflowRunsRequest,
  WorkflowTriggerConfiguration,
  GetWorkflowTaskRunResponse,
  GetFileRequest,
  WorkflowBaseInfo,
  TaskType,
  TaskTypeNotebookExt,
  RerunWorkflowRunResponse,
  CreateWorkflowRsp,
  GetFileResponse,
  AsyncOperation,
  GetWorkflowRunRsp,
  ListWorkflowTaskRunsRsp,
  ScheduleBizEnumBrief,
  InnerWorkflowTaskRunIterationBrief,
  ListWorkflowsRsp,
  RerunWorkflowRunRequest,
  ListWorkflowsResponse,
  LabelBrief,
  AddConsoleUsersRequest,
  WorkflowBaseInfoDetail,
  WorkflowBrief,
  KillWorkflowRunRequest,
  ListWorkflowTaskRunsResponse,
  AddConsoleUsersResponse,
  UnbindWorkflowBundleRsp,
  DeleteFileResult,
  RunActionBrief,
  FileOutputConf,
  RunWorkflowRequest,
  WorkflowTaskRun,
  GetWorkflowResponse,
  GetWorkflowTaskRunRequest,
  DeleteFileResponse,
  ListWorkflowRunsRsp,
  WorkflowTask,
  AdvancedDependencyConfig,
  UpdateWorkflowResponse,
  GetWorkflowRequest,
  InnerWorkflowTaskRunListOption,
  WorkflowRun,
  TaskTypeProperty,
  CreateFileRequest,
  UpdateFileRequest,
  GetWorkflowRunRequest,
  RemoveConsoleUsersRequest,
  FileConfig,
  RunWorkflowResponse,
  ListConsoleUsersRequest,
  ListWorkflowRunsResponse,
  AdvancedParameter,
  ConsoleUserInfo,
  UpdateWorkflowRsp,
  OrderBy,
  WorkflowAdvanceConfig,
  InnerWorkflowTaskRun,
  MonitorMetricItem,
  CreateWorkflowResponse,
  AlarmGroup,
  DeleteFileRequest,
  DeleteWorkflowRsp,
  CommonFailItem,
  RemoveConsoleUsersRsp,
  GetWorkflowRunResponse,
  ListConsoleUsersRsp,
  GetWorkflowRsp,
  UnbindWorkflowBundleRequest,
  RoleBasicInfo,
  UpdateFileResponse,
  UpdateConsoleUsersRequest,
  GetWorkflowTaskRunRsp,
} from "./databuddy_models"

/**
 * databuddy client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("databuddy.tencentcloudapi.com", "2026-07-15", clientConfig)
  }

  /**
   * 重跑工作流
   */
  async RerunWorkflowRun(
    req: RerunWorkflowRunRequest,
    cb?: (error: string, rep: RerunWorkflowRunResponse) => void
  ): Promise<RerunWorkflowRunResponse> {
    return this.request("RerunWorkflowRun", req, cb)
  }

  /**
   * <p>批量移除控制台用户（单次最多10个；前置校验任一不满足整体拒绝；执行阶段单个失败不中断后续删除，成败以 SuccessUins/FailItems 为准）</p>
   */
  async RemoveConsoleUsers(
    req: RemoveConsoleUsersRequest,
    cb?: (error: string, rep: RemoveConsoleUsersResponse) => void
  ): Promise<RemoveConsoleUsersResponse> {
    return this.request("RemoveConsoleUsers", req, cb)
  }

  /**
   * 创建工作流
   */
  async CreateWorkflow(
    req: CreateWorkflowRequest,
    cb?: (error: string, rep: CreateWorkflowResponse) => void
  ): Promise<CreateWorkflowResponse> {
    return this.request("CreateWorkflow", req, cb)
  }

  /**
   * 添加控制台用户
   */
  async AddConsoleUsers(
    req: AddConsoleUsersRequest,
    cb?: (error: string, rep: AddConsoleUsersResponse) => void
  ): Promise<AddConsoleUsersResponse> {
    return this.request("AddConsoleUsers", req, cb)
  }

  /**
   * 获取工作流详细信息
   */
  async GetWorkflow(
    req: GetWorkflowRequest,
    cb?: (error: string, rep: GetWorkflowResponse) => void
  ): Promise<GetWorkflowResponse> {
    return this.request("GetWorkflow", req, cb)
  }

  /**
   * 查询工作流运行详情
   */
  async GetWorkflowRun(
    req: GetWorkflowRunRequest,
    cb?: (error: string, rep: GetWorkflowRunResponse) => void
  ): Promise<GetWorkflowRunResponse> {
    return this.request("GetWorkflowRun", req, cb)
  }

  /**
     * 更新文件内容与运行配置（计算资源、默认 catalog/schema、参数等），返回更新后的文件元信息。

**前置条件**
1. FileId 对应文件必须存在且为活跃状态；
2. 调用方对该文件有写权限；
3. 仅更新配置时不传 Storage；仅更新内容时不传 FileConfig；
4. FileConfig.ResourceId 非空时会校验资源类型与文件类型的匹配性。

**错误码（Module 均为 `Studio`）**

| 错误码（Code） | InnerCode | 描述 | 处理建议 |
| --- | --- | --- | --- |
| `MissingParameter.WorkspaceId` | 1030001 | 缺少 WorkspaceId | 请传入 WorkspaceId |
| `MissingParameter.FileId` | 1030003 | 缺少 FileId | 请传入 FileId |
| `InvalidParameterValue.FileType` | 1030102 | FileType 取值不支持 | FileType 取 FILE/NOTEBOOK_FILE/SQL_FILE |
| `InvalidParameterValue.ResourceId` | 1030104 | 计算资源类型与文件类型不匹配 | Python/Notebook 选数据计算资源，SQL 选数据分析资源 |
| `ResourceNotFound.FileNotFound` | 1030203 | 文件不存在或已删除 | 请确认 FileId，或调用 GetFile 校验文件状态 |
| `UnauthorizedOperation.FileWriteDenied` | 1030302 | 对该文件无写权限 | 请联系文件负责人或空间管理员授权 |
| `FailedOperation.FileStorageUpdateFailed` | 1030401 | 文件内容写入存储失败 | 请稍后重试，持续失败请携带 RequestId 联系支持 |
| `InternalError` | 1030900 | 服务内部异常 | 请携带 RequestId 联系支持 |
     */
  async UpdateFile(
    req: UpdateFileRequest,
    cb?: (error: string, rep: UpdateFileResponse) => void
  ): Promise<UpdateFileResponse> {
    return this.request("UpdateFile", req, cb)
  }

  /**
     * 在Studio（统一开发 IDE）的工作空间文件树中新建一个文件（Notebook/SQL/Python等），创建成功后返回文件的完整元信息。

**前置条件**
1. WorkspaceId 对应工作空间存在，且调用方为该工作空间成员；
2. ParentFolderPath 对应的父文件夹必须存在，且调用方对其有写权限（根目录传 `/`）；
3. FileName 在同一父文件夹下不能重名（含后缀比较）；
4. FileName 后缀必须与 FileType 匹配（`.ipynb`↔`NOTEBOOK_FILE`、`.sql`↔`SQL_FILE`）；
5. 需带文件内容创建时通过 Storage 传入（大文件走 COS 中转，小文件放 Storage.Content）。
     */
  async CreateFile(
    req: CreateFileRequest,
    cb?: (error: string, rep: CreateFileResponse) => void
  ): Promise<CreateFileResponse> {
    return this.request("CreateFile", req, cb)
  }

  /**
   * 查询任务运行详情
   */
  async GetWorkflowTaskRun(
    req: GetWorkflowTaskRunRequest,
    cb?: (error: string, rep: GetWorkflowTaskRunResponse) => void
  ): Promise<GetWorkflowTaskRunResponse> {
    return this.request("GetWorkflowTaskRun", req, cb)
  }

  /**
   * 查询工作流任务历史运行列表
   */
  async ListWorkflowTaskRuns(
    req: ListWorkflowTaskRunsRequest,
    cb?: (error: string, rep: ListWorkflowTaskRunsResponse) => void
  ): Promise<ListWorkflowTaskRunsResponse> {
    return this.request("ListWorkflowTaskRuns", req, cb)
  }

  /**
   * 查询控制台用户列表
   */
  async ListConsoleUsers(
    req: ListConsoleUsersRequest,
    cb?: (error: string, rep: ListConsoleUsersResponse) => void
  ): Promise<ListConsoleUsersResponse> {
    return this.request("ListConsoleUsers", req, cb)
  }

  /**
   * 修改控制台用户角色
   */
  async UpdateConsoleUsers(
    req: UpdateConsoleUsersRequest,
    cb?: (error: string, rep: UpdateConsoleUsersResponse) => void
  ): Promise<UpdateConsoleUsersResponse> {
    return this.request("UpdateConsoleUsers", req, cb)
  }

  /**
   * 运行工作流
   */
  async RunWorkflow(
    req: RunWorkflowRequest,
    cb?: (error: string, rep: RunWorkflowResponse) => void
  ): Promise<RunWorkflowResponse> {
    return this.request("RunWorkflow", req, cb)
  }

  /**
   * 工作流运行列表
   */
  async ListWorkflowRuns(
    req: ListWorkflowRunsRequest,
    cb?: (error: string, rep: ListWorkflowRunsResponse) => void
  ): Promise<ListWorkflowRunsResponse> {
    return this.request("ListWorkflowRuns", req, cb)
  }

  /**
   * 终止工作流的运行
   */
  async KillWorkflowRun(
    req: KillWorkflowRunRequest,
    cb?: (error: string, rep: KillWorkflowRunResponse) => void
  ): Promise<KillWorkflowRunResponse> {
    return this.request("KillWorkflowRun", req, cb)
  }

  /**
   * 删除工作流
   */
  async DeleteWorkflow(
    req: DeleteWorkflowRequest,
    cb?: (error: string, rep: DeleteWorkflowResponse) => void
  ): Promise<DeleteWorkflowResponse> {
    return this.request("DeleteWorkflow", req, cb)
  }

  /**
     * 获取文件的元信息，可选包含文件内容，支持按版本读取历史快照。

**前置条件**
1. FileId 与 FilePath 二选一，至少传一个；同时传时以 FileId 为准；
2. 对应文件必须存在，且调用方对该文件有读权限；
3. 传 VersionId 时该版本必须存在。

**错误码（Module 均为 `Studio`）**

| 错误码（Code） | InnerCode | 描述 | 处理建议 |
| --- | --- | --- | --- |
| `MissingParameter.WorkspaceId` | 1030001 | 缺少 WorkspaceId | 请传入 WorkspaceId |
| `MissingParameter.FileId` | 1030003 | FileId 与 FilePath 同时为空 | FileId 与 FilePath 二选一，至少传一个 |
| `InvalidParameterValue.FileType` | 1030102 | FileType 取值不支持 | FileType 取 FILE/NOTEBOOK_FILE/SQL_FILE |
| `ResourceNotFound.FileNotFound` | 1030203 | 文件不存在或已删除 | 请确认 FileId 或 FilePath |
| `ResourceNotFound.FileVersionNotFound` | 1030205 | 指定的文件版本不存在 | 请确认 VersionId，或调用 ListFileVersions 获取 |
| `UnauthorizedOperation.FileReadDenied` | 1030304 | 对该文件无读权限 | 请联系文件负责人或空间管理员授权 |
| `InternalError` | 1030900 | 服务内部异常 | 请携带 RequestId 联系支持 |
     */
  async GetFile(
    req: GetFileRequest,
    cb?: (error: string, rep: GetFileResponse) => void
  ): Promise<GetFileResponse> {
    return this.request("GetFile", req, cb)
  }

  /**
   * 更新工作流
   */
  async UpdateWorkflow(
    req: UpdateWorkflowRequest,
    cb?: (error: string, rep: UpdateWorkflowResponse) => void
  ): Promise<UpdateWorkflowResponse> {
    return this.request("UpdateWorkflow", req, cb)
  }

  /**
   * 查询工作流列表
   */
  async ListWorkflows(
    req: ListWorkflowsRequest,
    cb?: (error: string, rep: ListWorkflowsResponse) => void
  ): Promise<ListWorkflowsResponse> {
    return this.request("ListWorkflows", req, cb)
  }

  /**
     * 将文件移入回收站（软删除），同时清理该文件的版本记录与执行结果快照。

**前置条件**
1. FileId 对应文件必须存在且为活跃状态；
2. 调用方对该文件有删除权限；
3. 文件未被工作流任务引用。

**错误码（Module 均为 `Studio`）**

| 错误码（Code） | InnerCode | 描述 | 处理建议 |
| --- | --- | --- | --- |
| `MissingParameter.WorkspaceId` | 1030001 | 缺少 WorkspaceId | 请传入 WorkspaceId |
| `MissingParameter.FileId` | 1030003 | 缺少 FileId | 请传入 FileId  |
| `InvalidParameterValue.FileType` | 1030102 | FileType 取值不支持 | FileType 取 FILE/NOTEBOOK_FILE/SQL_FILE |
| `ResourceNotFound.FileNotFound` | 1030203 | 文件不存在或已删除 | 请确认 FileId |
| `ResourceInUse.FileReferencedByTask` | 1030204 | 文件被工作流任务引用，不允许删除 | 请先解除任务引用后再删除 |
| `UnauthorizedOperation.FileDeleteDenied` | 1030303 | 对该文件无删除权限 | 请联系文件负责人或空间管理员授权 |
| `InternalError` | 1030900 | 服务内部异常 | 请携带 RequestId 联系支持 |
     */
  async DeleteFile(
    req: DeleteFileRequest,
    cb?: (error: string, rep: DeleteFileResponse) => void
  ): Promise<DeleteFileResponse> {
    return this.request("DeleteFile", req, cb)
  }

  /**
     * 解绑工作流Bundle信息
说明：本接口语义等同于规范动词清单中的 Detach，因兼容既有产品形态保留 Unbind 命名
     */
  async UnbindWorkflowBundle(
    req: UnbindWorkflowBundleRequest,
    cb?: (error: string, rep: UnbindWorkflowBundleResponse) => void
  ): Promise<UnbindWorkflowBundleResponse> {
    return this.request("UnbindWorkflowBundle", req, cb)
  }
}
