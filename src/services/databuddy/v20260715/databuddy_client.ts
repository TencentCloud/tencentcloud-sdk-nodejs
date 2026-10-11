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
  WorkflowBrief,
  UpdateWorkspaceRequest,
  CreateWorkspaceRoleResponse,
  AddWorkspaceGroupsRequest,
  GetFolderRsp,
  DependOnBrief,
  ListConsoleGroupUsersRequest,
  DeleteFolderResponse,
  ListWorkspaceGroupUsersRequest,
  FolderLocator,
  ListWorkspaceGroupsResponse,
  ListConsoleGroupsRequest,
  InnerWorkflowTaskRunListOption,
  RemoveWorkspaceGroupsResponse,
  PermissionDetail,
  UpdateConsoleUsersResponse,
  ListWorkflowTaskRunsRequest,
  WorkspaceUserInfo,
  ListTablesRsp,
  TaskRetryStrategy,
  FileStorage,
  ScheduledTimeConfig,
  Catalog,
  BucketPartitioning,
  WorkflowRun,
  FetchOption,
  DeleteWorkflowResponse,
  GetWorkspaceResponse,
  ListConsoleUsersResponse,
  RemoveConsoleUsersResponse,
  GetTablesRequest,
  MonitorMetricBrief,
  ListCatalogsResponse,
  ListWorkspaceUsersRsp,
  UpdateWorkspaceResponse,
  PlatformStatusRsp,
  AddWorkspaceUsersResponse,
  InnerWorkflowTaskRunIteration,
  CreateCatalogRequest,
  SparseCheckoutConfig,
  StartComputeRsp,
  DeleteWorkflowRequest,
  WorkspaceInfo,
  CreateSchemaRsp,
  ListPartition,
  GetWorkspaceRequest,
  ListConsoleGroupsRsp,
  TaskTypeNotebookExt,
  ListPartitioning,
  AlarmBrief,
  DataMaskGroup,
  RerunWorkflowRunResponse,
  ListWorkspacesRequest,
  WorkflowTaskNodeBrief,
  UpdateWorkspaceRsp,
  CreateWorkspaceRoleRequest,
  ListSchemasResponse,
  CreateWorkflowRequest,
  ListFilesRequest,
  WorkflowRunBrief,
  WorkflowTriggerAdvancedConfiguration,
  Index,
  AsyncActionRsp,
  CreateFileResponse,
  TaskSchedulingParameterBrief,
  CreateWorkspaceRsp,
  UpdateWorkflowRequest,
  ListWorkspaceGroupsRsp,
  KVPair,
  TaskRunConditionRule,
  ResourceGroupInfo,
  DictDimensionInfo,
  UnbindWorkflowBundleResponse,
  UpdateConsoleGroupRsp,
  UnbindWorkflowBundleRsp,
  CreateFolderRequest,
  KillWorkflowRunResponse,
  ListSchemasRsp,
  DeleteFolderRequest,
  CommonTagInfo,
  AddConsoleUsersRsp,
  RemoveConsoleUsersRequest,
  DeleteConsoleGroupsRsp,
  ListWorkflowRunsRequest,
  WorkflowTriggerConfiguration,
  GetWorkflowTaskRunResponse,
  DeleteWorkspaceResponse,
  GetFileRequest,
  WorkflowBaseInfo,
  TaskType,
  WorkflowTaskRun,
  GetTablesRsp,
  ListWorkspaceUsersRequest,
  GetFolderResponse,
  DeleteCatalogRsp,
  CreateWorkflowRsp,
  GetFileResponse,
  AsyncOperation,
  DataMaskStrategyInfo,
  ListFilesRsp,
  RangePartitioning,
  RoleMetaData,
  GetWorkflowRunRsp,
  DeleteSchemaResponse,
  DeleteWorkspaceRoleResponse,
  GetCatalogRsp,
  ListConsoleGroupUsersResponse,
  ListWorkflowTaskRunsRsp,
  ScheduleBizEnumBrief,
  AddWorkspaceGroupsResponse,
  CreateCatalogRsp,
  GetWorkspaceRsp,
  GetSchemaResponse,
  TagValueInfo,
  CreateSchemaResponse,
  CreateFolderResponse,
  InnerWorkflowTaskRunIterationBrief,
  CreateConsoleGroupRequest,
  RemoveConsoleUsersRsp,
  GetSchemaRsp,
  ListWorkflowsRsp,
  UpdateFolderResponse,
  DataMaskLabelInfo,
  DeleteTableRequest,
  DeleteWorkspaceRequest,
  ListWorkspaceGroupUsersResponse,
  LabelBrief,
  DeleteWorkspaceRoleRequest,
  CreateSchemaRequest,
  UpdateWorkspaceRoleRequest,
  AddConsoleUsersRequest,
  CreateConsoleGroupRsp,
  ListWorkspaceGroupUsersRsp,
  DeleteCatalogResponse,
  ListTablesRequest,
  DeleteWorkspaceRsp,
  WorkflowBaseInfoDetail,
  ListTablesResponse,
  StopComputeRequest,
  KillWorkflowRunRequest,
  GetCatalogRequest,
  ListWorkflowTaskRunsResponse,
  AddConsoleUsersResponse,
  ListConsoleUsersRsp,
  FileMeta,
  Literal,
  FeatureTableDetail,
  MetaOwner,
  GroupUserInfo,
  ConsoleRoleInfo,
  ConsoleGroupUserInfo,
  DeleteFileResult,
  RunActionBrief,
  FileOutputConf,
  RunWorkflowRequest,
  ListWorkflowRunsRsp,
  UpdateConsoleGroupRequest,
  ConsoleGroupInfo,
  GetTableRequest,
  UpdateWorkspaceRoleResponse,
  ListConsoleRolesRsp,
  UserTagInfo,
  UpdateWorkspaceUsersRolesRequest,
  GetWorkflowResponse,
  GetWorkflowTaskRunRequest,
  DeleteFileResponse,
  UpdateConsoleUsersRsp,
  AddWorkspaceUsersRequest,
  ListFilesResponse,
  WorkflowTask,
  ListWorkspaceUsersResponse,
  DeleteSchemaRsp,
  UpdateWorkspaceGroupsRolesRequest,
  DictItem,
  AdvancedDependencyConfig,
  StopComputeRsp,
  DeleteConsoleGroupsRequest,
  ListCatalogsRsp,
  UpdateWorkflowResponse,
  GetWorkflowRequest,
  FileInfo,
  GetFolderRequest,
  InnerWorkflowTaskBrief,
  FileNode,
  UpdateFolderRsp,
  TaskTypeProperty,
  TableInfo,
  UpdateWorkspaceGroupsRolesResponse,
  CreateConsoleGroupResponse,
  CreateFileRequest,
  UpdateFileRequest,
  GetWorkflowRunRequest,
  UserInfo,
  ListWorkflowsRequest,
  RolePermission,
  ListCatalogsRequest,
  FileConfig,
  CreateWorkspaceRoleResult,
  RunWorkflowResponse,
  ListConsoleUsersRequest,
  ListWorkflowRunsResponse,
  RemoveWorkspaceGroupsRequest,
  ListWorkspaceGroupsRequest,
  UnbindWorkflowBundleRequest,
  AdvancedParameter,
  RerunWorkflowRunRequest,
  DeleteWorkspaceRoleResult,
  UpdateConsoleGroupResponse,
  StandardUserInfo,
  ConsoleUserInfo,
  UpdateWorkflowRsp,
  StartComputeResponse,
  GetTablesResponse,
  GetSchemaRequest,
  Workflow,
  DeleteCatalogRequest,
  Schema,
  OrderBy,
  UpdateFolderRequest,
  DeleteFolderRsp,
  TruncatePartitioning,
  DeleteTableResponse,
  WorkflowAdvanceConfig,
  ListSchemasRequest,
  ParamInfo,
  CreateCatalogResponse,
  DeleteConsoleGroupsResponse,
  InnerWorkflowTaskRun,
  MonitorMetricItem,
  GetTableResponse,
  CreateWorkflowResponse,
  DeleteSchemaRequest,
  ListConsoleRolesRequest,
  ListConsoleGroupUsersRsp,
  Audit,
  Partitioning,
  SingleFieldPartitioning,
  AlarmGroup,
  DeleteFileRequest,
  DeleteWorkflowRsp,
  StopComputeResponse,
  CommonFailItem,
  ListWorkspacesResponse,
  GetCatalogResponse,
  UpdateWorkspaceRoleResult,
  GetWorkflowRunResponse,
  ListConsoleGroupsResponse,
  GetWorkflowRsp,
  CreateWorkspaceRequest,
  WorkspaceGroupInfo,
  RoleBasicInfo,
  UpdateWorkspaceUsersRolesResponse,
  GitRepoConfig,
  GetTableRsp,
  ListConsoleRolesResponse,
  ListWorkspacesRsp,
  CreateWorkspaceResponse,
  ListWorkflowsResponse,
  UpdateFileResponse,
  RangePartition,
  CreateFolderRsp,
  DeleteTableRsp,
  StartComputeRequest,
  UpdateConsoleUsersRequest,
  ColumnInfo,
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
     * 解绑工作流Bundle信息
说明：本接口语义等同于规范动词清单中的 Detach，因兼容既有产品形态保留 Unbind 命名
     */
  async UnbindWorkflowBundle(
    req: UnbindWorkflowBundleRequest,
    cb?: (error: string, rep: UnbindWorkflowBundleResponse) => void
  ): Promise<UnbindWorkflowBundleResponse> {
    return this.request("UnbindWorkflowBundle", req, cb)
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
   * 创建schema
   */
  async CreateSchema(
    req: CreateSchemaRequest,
    cb?: (error: string, rep: CreateSchemaResponse) => void
  ): Promise<CreateSchemaResponse> {
    return this.request("CreateSchema", req, cb)
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
   * 查询工作空间详情
   */
  async GetWorkspace(
    req: GetWorkspaceRequest,
    cb?: (error: string, rep: GetWorkspaceResponse) => void
  ): Promise<GetWorkspaceResponse> {
    return this.request("GetWorkspace", req, cb)
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
   * 获取文件夹详情
   */
  async GetFolder(
    req: GetFolderRequest,
    cb?: (error: string, rep: GetFolderResponse) => void
  ): Promise<GetFolderResponse> {
    return this.request("GetFolder", req, cb)
  }

  /**
   * 删除控制台用户组
   */
  async DeleteConsoleGroups(
    req: DeleteConsoleGroupsRequest,
    cb?: (error: string, rep: DeleteConsoleGroupsResponse) => void
  ): Promise<DeleteConsoleGroupsResponse> {
    return this.request("DeleteConsoleGroups", req, cb)
  }

  /**
   * 创建用户组
   */
  async AddWorkspaceUsers(
    req: AddWorkspaceUsersRequest,
    cb?: (error: string, rep: AddWorkspaceUsersResponse) => void
  ): Promise<AddWorkspaceUsersResponse> {
    return this.request("AddWorkspaceUsers", req, cb)
  }

  /**
   * 查询工作空间列表
   */
  async ListWorkspaces(
    req: ListWorkspacesRequest,
    cb?: (error: string, rep: ListWorkspacesResponse) => void
  ): Promise<ListWorkspacesResponse> {
    return this.request("ListWorkspaces", req, cb)
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
   * 查询工作流列表
   */
  async ListWorkflows(
    req: ListWorkflowsRequest,
    cb?: (error: string, rep: ListWorkflowsResponse) => void
  ): Promise<ListWorkflowsResponse> {
    return this.request("ListWorkflows", req, cb)
  }

  /**
   * 移除工作空间用户组
   */
  async RemoveWorkspaceGroups(
    req: RemoveWorkspaceGroupsRequest,
    cb?: (error: string, rep: RemoveWorkspaceGroupsResponse) => void
  ): Promise<RemoveWorkspaceGroupsResponse> {
    return this.request("RemoveWorkspaceGroups", req, cb)
  }

  /**
   * 删除catalog
   */
  async DeleteCatalog(
    req: DeleteCatalogRequest,
    cb?: (error: string, rep: DeleteCatalogResponse) => void
  ): Promise<DeleteCatalogResponse> {
    return this.request("DeleteCatalog", req, cb)
  }

  /**
   * 批量获取表的元数据。使用场景：根据表的全名列表（catalogName.schemaName.tableName）批量获取表的详细元数据信息。前置条件：需要有对应workspace的读权限，仅返回当前workspace有权限的catalog下的表。权限校验：通过getAuthedCatalogNames获取有权限的catalogName进行过滤，不在权限范围内的表会被静默跳过。限制：FullNames最大支持20个表全名
   */
  async GetTables(
    req: GetTablesRequest,
    cb?: (error: string, rep: GetTablesResponse) => void
  ): Promise<GetTablesResponse> {
    return this.request("GetTables", req, cb)
  }

  /**
   * 修改工作空间用户角色
   */
  async UpdateWorkspaceUsersRoles(
    req: UpdateWorkspaceUsersRolesRequest,
    cb?: (error: string, rep: UpdateWorkspaceUsersRolesResponse) => void
  ): Promise<UpdateWorkspaceUsersRolesResponse> {
    return this.request("UpdateWorkspaceUsersRoles", req, cb)
  }

  /**
   * 创建工作空间
   */
  async CreateWorkspace(
    req: CreateWorkspaceRequest,
    cb?: (error: string, rep: CreateWorkspaceResponse) => void
  ): Promise<CreateWorkspaceResponse> {
    return this.request("CreateWorkspace", req, cb)
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
   * 查询schema详情
   */
  async GetSchema(
    req: GetSchemaRequest,
    cb?: (error: string, rep: GetSchemaResponse) => void
  ): Promise<GetSchemaResponse> {
    return this.request("GetSchema", req, cb)
  }

  /**
   * 获取schema列表
   */
  async ListSchemas(
    req: ListSchemasRequest,
    cb?: (error: string, rep: ListSchemasResponse) => void
  ): Promise<ListSchemasResponse> {
    return this.request("ListSchemas", req, cb)
  }

  /**
   * 修改工作空间
   */
  async UpdateWorkspace(
    req: UpdateWorkspaceRequest,
    cb?: (error: string, rep: UpdateWorkspaceResponse) => void
  ): Promise<UpdateWorkspaceResponse> {
    return this.request("UpdateWorkspace", req, cb)
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
   * 创建控制台用户组
   */
  async CreateConsoleGroup(
    req: CreateConsoleGroupRequest,
    cb?: (error: string, rep: CreateConsoleGroupResponse) => void
  ): Promise<CreateConsoleGroupResponse> {
    return this.request("CreateConsoleGroup", req, cb)
  }

  /**
   * 更新工作空间用户组角色
   */
  async UpdateWorkspaceGroupsRoles(
    req: UpdateWorkspaceGroupsRolesRequest,
    cb?: (error: string, rep: UpdateWorkspaceGroupsRolesResponse) => void
  ): Promise<UpdateWorkspaceGroupsRolesResponse> {
    return this.request("UpdateWorkspaceGroupsRoles", req, cb)
  }

  /**
   * 创建数据目录接口
   */
  async CreateCatalog(
    req: CreateCatalogRequest,
    cb?: (error: string, rep: CreateCatalogResponse) => void
  ): Promise<CreateCatalogResponse> {
    return this.request("CreateCatalog", req, cb)
  }

  /**
   * 删除schema
   */
  async DeleteSchema(
    req: DeleteSchemaRequest,
    cb?: (error: string, rep: DeleteSchemaResponse) => void
  ): Promise<DeleteSchemaResponse> {
    return this.request("DeleteSchema", req, cb)
  }

  /**
   * 创建工作空间角色
   */
  async CreateWorkspaceRole(
    req: CreateWorkspaceRoleRequest,
    cb?: (error: string, rep: CreateWorkspaceRoleResponse) => void
  ): Promise<CreateWorkspaceRoleResponse> {
    return this.request("CreateWorkspaceRole", req, cb)
  }

  /**
   * 启动计算资源
   */
  async StartCompute(
    req: StartComputeRequest,
    cb?: (error: string, rep: StartComputeResponse) => void
  ): Promise<StartComputeResponse> {
    return this.request("StartCompute", req, cb)
  }

  /**
   * 创建文件夹
   */
  async CreateFolder(
    req: CreateFolderRequest,
    cb?: (error: string, rep: CreateFolderResponse) => void
  ): Promise<CreateFolderResponse> {
    return this.request("CreateFolder", req, cb)
  }

  /**
   * 查询控制台用户列表，该接口为控制台级接口，仅支持在中心地域调用：国内站请传入 ap-guangzhou，国际站请传入 ap-singapore；其他地域调用将返回 UnsupportedRegion。
   */
  async ListConsoleUsers(
    req: ListConsoleUsersRequest,
    cb?: (error: string, rep: ListConsoleUsersResponse) => void
  ): Promise<ListConsoleUsersResponse> {
    return this.request("ListConsoleUsers", req, cb)
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
   * 停止计算资源
   */
  async StopCompute(
    req: StopComputeRequest,
    cb?: (error: string, rep: StopComputeResponse) => void
  ): Promise<StopComputeResponse> {
    return this.request("StopCompute", req, cb)
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
   * 获取文件夹和文件列表
   */
  async ListFiles(
    req: ListFilesRequest,
    cb?: (error: string, rep: ListFilesResponse) => void
  ): Promise<ListFilesResponse> {
    return this.request("ListFiles", req, cb)
  }

  /**
   * 获取table列表
   */
  async ListTables(
    req: ListTablesRequest,
    cb?: (error: string, rep: ListTablesResponse) => void
  ): Promise<ListTablesResponse> {
    return this.request("ListTables", req, cb)
  }

  /**
   * 分页获取数据目录列表
   */
  async ListCatalogs(
    req: ListCatalogsRequest,
    cb?: (error: string, rep: ListCatalogsResponse) => void
  ): Promise<ListCatalogsResponse> {
    return this.request("ListCatalogs", req, cb)
  }

  /**
   * 删除文件夹
   */
  async DeleteFolder(
    req: DeleteFolderRequest,
    cb?: (error: string, rep: DeleteFolderResponse) => void
  ): Promise<DeleteFolderResponse> {
    return this.request("DeleteFolder", req, cb)
  }

  /**
   * 查询控制台用户组列表，该接口为控制台级接口，仅支持在中心地域调用：国内站请传入 ap-guangzhou，国际站请传入 ap-singapore；其他地域调用将返回 UnsupportedRegion。
   */
  async ListConsoleGroups(
    req: ListConsoleGroupsRequest,
    cb?: (error: string, rep: ListConsoleGroupsResponse) => void
  ): Promise<ListConsoleGroupsResponse> {
    return this.request("ListConsoleGroups", req, cb)
  }

  /**
   * 查询catalog详情
   */
  async GetCatalog(
    req: GetCatalogRequest,
    cb?: (error: string, rep: GetCatalogResponse) => void
  ): Promise<GetCatalogResponse> {
    return this.request("GetCatalog", req, cb)
  }

  /**
   * 查询工作空间用户组列表
   */
  async ListWorkspaceGroups(
    req: ListWorkspaceGroupsRequest,
    cb?: (error: string, rep: ListWorkspaceGroupsResponse) => void
  ): Promise<ListWorkspaceGroupsResponse> {
    return this.request("ListWorkspaceGroups", req, cb)
  }

  /**
   * 查询控制台角色列表，该接口为控制台级接口，仅支持在中心地域调用：国内站请传入 ap-guangzhou，国际站请传入 ap-singapore；其他地域调用将返回 UnsupportedRegion。
   */
  async ListConsoleRoles(
    req: ListConsoleRolesRequest,
    cb?: (error: string, rep: ListConsoleRolesResponse) => void
  ): Promise<ListConsoleRolesResponse> {
    return this.request("ListConsoleRoles", req, cb)
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
   * 修改控制台用户组
   */
  async UpdateConsoleGroup(
    req: UpdateConsoleGroupRequest,
    cb?: (error: string, rep: UpdateConsoleGroupResponse) => void
  ): Promise<UpdateConsoleGroupResponse> {
    return this.request("UpdateConsoleGroup", req, cb)
  }

  /**
   * 查询工作空间用户列表
   */
  async ListWorkspaceUsers(
    req: ListWorkspaceUsersRequest,
    cb?: (error: string, rep: ListWorkspaceUsersResponse) => void
  ): Promise<ListWorkspaceUsersResponse> {
    return this.request("ListWorkspaceUsers", req, cb)
  }

  /**
   * 删除table
   */
  async DeleteTable(
    req: DeleteTableRequest,
    cb?: (error: string, rep: DeleteTableResponse) => void
  ): Promise<DeleteTableResponse> {
    return this.request("DeleteTable", req, cb)
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
   * 修改控制台用户角色
   */
  async UpdateConsoleUsers(
    req: UpdateConsoleUsersRequest,
    cb?: (error: string, rep: UpdateConsoleUsersResponse) => void
  ): Promise<UpdateConsoleUsersResponse> {
    return this.request("UpdateConsoleUsers", req, cb)
  }

  /**
   * 添加工作空间用户组
   */
  async AddWorkspaceGroups(
    req: AddWorkspaceGroupsRequest,
    cb?: (error: string, rep: AddWorkspaceGroupsResponse) => void
  ): Promise<AddWorkspaceGroupsResponse> {
    return this.request("AddWorkspaceGroups", req, cb)
  }

  /**
   * 查询工作空间用户组用户列表
   */
  async ListWorkspaceGroupUsers(
    req: ListWorkspaceGroupUsersRequest,
    cb?: (error: string, rep: ListWorkspaceGroupUsersResponse) => void
  ): Promise<ListWorkspaceGroupUsersResponse> {
    return this.request("ListWorkspaceGroupUsers", req, cb)
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
   * 查询控制台用户组成员列表，该接口为控制台级接口，仅支持在中心地域调用：国内站请传入 ap-guangzhou，国际站请传入 ap-singapore；其他地域调用将返回 UnsupportedRegion。
   */
  async ListConsoleGroupUsers(
    req: ListConsoleGroupUsersRequest,
    cb?: (error: string, rep: ListConsoleGroupUsersResponse) => void
  ): Promise<ListConsoleGroupUsersResponse> {
    return this.request("ListConsoleGroupUsers", req, cb)
  }

  /**
   * 更新工作空间角色
   */
  async UpdateWorkspaceRole(
    req: UpdateWorkspaceRoleRequest,
    cb?: (error: string, rep: UpdateWorkspaceRoleResponse) => void
  ): Promise<UpdateWorkspaceRoleResponse> {
    return this.request("UpdateWorkspaceRole", req, cb)
  }

  /**
   * 删除工作空间角色
   */
  async DeleteWorkspaceRole(
    req: DeleteWorkspaceRoleRequest,
    cb?: (error: string, rep: DeleteWorkspaceRoleResponse) => void
  ): Promise<DeleteWorkspaceRoleResponse> {
    return this.request("DeleteWorkspaceRole", req, cb)
  }

  /**
   * 查询table详情
   */
  async GetTable(
    req: GetTableRequest,
    cb?: (error: string, rep: GetTableResponse) => void
  ): Promise<GetTableResponse> {
    return this.request("GetTable", req, cb)
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
   * 更新文件夹（支持重命名+移动）
   */
  async UpdateFolder(
    req: UpdateFolderRequest,
    cb?: (error: string, rep: UpdateFolderResponse) => void
  ): Promise<UpdateFolderResponse> {
    return this.request("UpdateFolder", req, cb)
  }

  /**
   * 删除工作空间
   */
  async DeleteWorkspace(
    req: DeleteWorkspaceRequest,
    cb?: (error: string, rep: DeleteWorkspaceResponse) => void
  ): Promise<DeleteWorkspaceResponse> {
    return this.request("DeleteWorkspace", req, cb)
  }
}
