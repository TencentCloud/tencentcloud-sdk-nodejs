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
  ListWorkflowRunsRequest,
  GetFolderRsp,
  ListWorkspaceGroupUsersRequest,
  Workflow,
  ListSchemaNamesRsp,
  FetchOption,
  DeleteWorkflowResponse,
  DeleteLocationRsp,
  GetLocationResponse,
  DeleteWorkflowRequest,
  CreateSchemaRsp,
  GetTablesRsp,
  DeleteModelResponse,
  CreateWorkspaceRsp,
  RerunWorkflowRunResponse,
  Tag,
  ListSchemasResponse,
  CreateWorkflowRequest,
  ListViewsResponse,
  ListVolumesRequest,
  DeleteModelRequest,
  CreateFileResponse,
  TaskSchedulingParameterBrief,
  ListWorkspaceGroupsRsp,
  TaskRunConditionRule,
  UnbindWorkflowBundleResponse,
  UpdateConsoleGroupRsp,
  CreateModelVersionRequest,
  GetLocationRsp,
  DeleteConsoleGroupsRsp,
  DeleteWorkspaceResponse,
  GetModelResponse,
  TaskType,
  GetFolderResponse,
  WorkflowTaskNodeBrief,
  CreateWorkflowRsp,
  AsyncOperation,
  UpdateTableResponse,
  ListFilesRsp,
  GetWorkflowRunRsp,
  ListLocationsRequest,
  GetCatalogRsp,
  ListWorkflowsResponse,
  CreateCatalogRsp,
  InnerWorkflowTaskRunIterationBrief,
  UpdateFolderResponse,
  RerunWorkflowRunRequest,
  LabelBrief,
  DeleteTableResponse,
  CreateConsoleGroupRsp,
  Owner,
  ModelVersionInfo,
  DeleteFileResult,
  RunActionBrief,
  ListViewNamesRsp,
  ListWorkspaceGroupUsersRsp,
  GetWorkflowTaskRunRequest,
  AddWorkspaceUsersRequest,
  DeleteSchemaRsp,
  DictItem,
  DeleteConsoleGroupsRequest,
  ListCatalogsRsp,
  GetWorkflowRequest,
  UpdateWorkspaceResponse,
  UpdateWorkspaceGroupsRolesResponse,
  UpdateSchemaResponse,
  CreateFileRequest,
  UpdateTableRsp,
  ListCatalogsResponse,
  RolePermission,
  GetModelVersionResponse,
  ListConsoleUsersRequest,
  UpdateModelResponse,
  GetViewRequest,
  StandardUserInfo,
  UpdateWorkflowRsp,
  ListLocationsResponse,
  GetTablesResponse,
  GetSchemaRequest,
  Schema,
  UpdateFolderRequest,
  UpdateViewRequest,
  CreateCatalogResponse,
  DeleteConsoleGroupsResponse,
  InnerWorkflowTaskRun,
  UpdateWorkspaceGroupsRolesRequest,
  DeleteVolumeResponse,
  UpdateWorkspaceRoleResult,
  Partitioning,
  DeleteFileRequest,
  GetCatalogResponse,
  UpdateFunctionRequest,
  ListConsoleGroupsResponse,
  ViewInfo,
  DeleteLocationRequest,
  ListWorkspacesRsp,
  RangePartition,
  DeleteSchemaRequest,
  UpdateConsoleUsersRequest,
  GetWorkflowTaskRunRsp,
  DependOnBrief,
  FolderLocator,
  ListWorkspaceGroupsResponse,
  UpdateTableColumnRequest,
  ListTablesRsp,
  FileStorage,
  UpdateVolumeRsp,
  MonitorMetricBrief,
  ParamInfo,
  AddWorkspaceUsersResponse,
  UpdateFunctionResponse,
  WorkspaceInfo,
  ListWorkflowTaskRunsRequest,
  ListPartitioning,
  UpdateConsoleUsersRsp,
  CreateModelVersionResponse,
  WorkflowRunBrief,
  FeatureTableDetail,
  FunctionInfo,
  ConsoleRoleInfo,
  NameIdentifier,
  ListSchemaNamesResponse,
  SearchResult,
  WorkflowBaseInfo,
  DeleteCatalogRsp,
  GetFileResponse,
  RangePartitioning,
  LocationInfo,
  ListConsoleGroupUsersResponse,
  AddWorkspaceGroupsResponse,
  GetWorkspaceRsp,
  CreateConsoleGroupRequest,
  GetSchemaRsp,
  ConsoleUserInfo,
  UpdateTableRequest,
  UserInfo,
  WorkflowTaskRun,
  ListFeatureTableResp,
  DeleteWorkspaceRsp,
  WorkflowBrief,
  Index,
  WorkspaceUserInfo,
  UpdateLocationRsp,
  FileMeta,
  UpdateModelVersionRsp,
  DeleteViewRsp,
  ConsoleGroupUserInfo,
  UpdateConsoleGroupRequest,
  UpdateFunctionRsp,
  GetWorkflowResponse,
  UserTagInfo,
  DeleteVolumeRequest,
  AdvancedDependencyConfig,
  FileInfo,
  UpdateModelRequest,
  TableInfo,
  ListSchemaNamesRequest,
  CreateModelRequest,
  UpdateFolderRsp,
  GetVolumeResponse,
  CreateWorkspaceRoleResult,
  RunWorkflowResponse,
  StopComputeRequest,
  RemoveWorkspaceGroupsRequest,
  AdvancedParameter,
  CreateVolumeResponse,
  DeleteCatalogRequest,
  CreateModelRsp,
  TruncatePartitioning,
  CreateModelVersionRsp,
  SearchAssetResponse,
  TagInfo,
  GetTableResponse,
  ListConsoleRolesRequest,
  ListCatalogNamesRsp,
  UserActivityInfo,
  CommonFailItem,
  FieldTagInfo,
  UpdateViewRsp,
  CommonTagInfo,
  UpdateWorkspaceUsersRolesResponse,
  GetTableRsp,
  ListConsoleRolesResponse,
  GetModelVersionRsp,
  DeleteTableRsp,
  CreateConsoleGroupResponse,
  DeleteLocationResponse,
  ColumnInfo,
  CreateWorkspaceRoleResponse,
  AddWorkspaceGroupsRequest,
  ListConsoleGroupUsersRequest,
  GetViewResponse,
  RemoveWorkspaceGroupsResponse,
  UpdateConsoleUsersResponse,
  ListViewNamesResponse,
  DeleteModelRsp,
  CreateVolumeRequest,
  GetWorkspaceResponse,
  RemoveConsoleUsersResponse,
  GetTablesRequest,
  ListModelsRequest,
  InnerWorkflowTaskRunIteration,
  SparseCheckoutConfig,
  UpdateWorkspaceRoleRequest,
  UpdateModelRsp,
  ListPartition,
  GetWorkspaceRequest,
  ListConsoleGroupsRsp,
  GetModelRsp,
  SearchAssetRsp,
  ListFilesRequest,
  ListTableNamesResponse,
  AsyncActionRsp,
  CreateLocationResponse,
  UpdateWorkflowRequest,
  UpdateTableColumnResponse,
  DictDimensionInfo,
  UpdateModelVersionRequest,
  UpdateLocationRequest,
  KillWorkflowRunResponse,
  DeleteFolderRequest,
  ListModelsRsp,
  AddConsoleUsersRsp,
  RemoveConsoleUsersRequest,
  LocationUpdate,
  GetFileRequest,
  UpdateWorkspaceRequest,
  UpdateSchemaRequest,
  DeleteSchemaResponse,
  DeleteWorkspaceRoleResponse,
  ListCatalogNamesResponse,
  ScheduleBizEnumBrief,
  CreateSchemaResponse,
  CreateFolderResponse,
  ListWorkflowsRsp,
  DataMaskLabelInfo,
  DeleteTableRequest,
  ListWorkspaceGroupUsersResponse,
  DeleteWorkspaceRoleRequest,
  AddConsoleUsersRequest,
  ListViewsRequest,
  KillWorkflowRunRequest,
  Highlighting,
  ListWorkflowTaskRunsResponse,
  PlatformStatusRsp,
  GetLocationRequest,
  UnbindWorkflowBundleRsp,
  RunWorkflowRequest,
  GetModelVersionRequest,
  UpdateSchemaRsp,
  ColumnBrief,
  UpdateWorkspaceUsersRolesRequest,
  DeleteFileResponse,
  DeleteViewResponse,
  ListWorkflowRunsRsp,
  DeleteWorkspaceRoleResult,
  StopComputeResponse,
  RoleBasicInfo,
  StopComputeRsp,
  FunctionResource,
  ModelInfo,
  UpdateWorkflowResponse,
  InnerWorkflowTaskRunListOption,
  InnerWorkflowTaskBrief,
  TaskTypeProperty,
  ListTableNamesRequest,
  WorkflowBaseInfoDetail,
  ListWorkflowsRequest,
  ListWorkflowRunsResponse,
  ListWorkspaceGroupsRequest,
  CreateVolumeRsp,
  ListVolumesRsp,
  UpdateTableColumnRsp,
  OrderBy,
  DeleteFolderRsp,
  CreateLocationRequest,
  WorkflowAdvanceConfig,
  MonitorMetricItem,
  CreateWorkflowResponse,
  GetModelRequest,
  AlarmGroup,
  DeleteWorkflowRsp,
  ListConsoleUsersRsp,
  GroupUserInfo,
  SingleFieldPartitioning,
  ListWorkspaceUsersRequest,
  UpdateFileResponse,
  CreateFolderRsp,
  StartComputeRequest,
  GetVolumeRequest,
  DeleteFolderResponse,
  ListConsoleGroupsRequest,
  TaskRetryStrategy,
  WorkflowTriggerAdvancedConfiguration,
  BucketPartitioning,
  ListConsoleRolesRsp,
  ListConsoleUsersResponse,
  ListWorkspaceUsersResponse,
  ColumnErrorMessages,
  CreateCatalogRequest,
  StartComputeRsp,
  ListViewsRsp,
  AlarmBrief,
  DataMaskGroup,
  SearchAssetRequest,
  CreateWorkspaceRoleRequest,
  FieldInfo,
  DeleteVolumeRsp,
  FileOutputConf,
  KVPair,
  CreateFolderRequest,
  UpdateCatalogResponse,
  ListWorkspacesRequest,
  CreateWorkspaceRequest,
  HighlightingInfo,
  WorkflowTriggerConfiguration,
  AssetTagVote,
  Catalog,
  TaskTypeNotebookExt,
  CreateModelResponse,
  DeleteViewRequest,
  DataMaskStrategyInfo,
  RoleMetaData,
  ListWorkflowTaskRunsRsp,
  ListLocationsRsp,
  ListVolumesResponse,
  GetSchemaResponse,
  TagValueInfo,
  ListCatalogNamesRequest,
  RemoveConsoleUsersRsp,
  DeleteWorkspaceRequest,
  StartComputeResponse,
  CreateSchemaRequest,
  ListTablesResponse,
  UpdateCatalogRequest,
  GetCatalogRequest,
  ScheduledTimeConfig,
  AddConsoleUsersResponse,
  ListViewNamesRequest,
  Literal,
  MetaOwner,
  UnbindWorkflowBundleRequest,
  UpdateWorkspaceRsp,
  ConsoleGroupInfo,
  UpdateCatalogRsp,
  UpdateWorkspaceRoleResponse,
  ListFilesResponse,
  WorkflowTask,
  UpdateModelVersionResponse,
  UpdateLocationResponse,
  GetVolumeRsp,
  WorkflowRun,
  FileNode,
  ResourceGroupInfo,
  GetFolderRequest,
  UpdateFileRequest,
  GetWorkflowRunRequest,
  ListFeatureTablesResponse,
  ListCatalogsRequest,
  FileConfig,
  ListTablesRequest,
  ListTableNamesRsp,
  UpdateConsoleGroupResponse,
  UpdateVolumeRequest,
  ListFeatureTablesRequest,
  Fragment,
  ListSchemasRequest,
  Volume,
  ListWorkspaceUsersRsp,
  UpdateViewResponse,
  ListConsoleGroupUsersRsp,
  Audit,
  DeleteCatalogResponse,
  ListSchemasRsp,
  GetWorkflowTaskRunResponse,
  ListWorkspacesResponse,
  PermissionDetail,
  GetWorkflowRunResponse,
  GetWorkflowRsp,
  WorkspaceGroupInfo,
  GitRepoConfig,
  ListModelsResponse,
  GetViewRsp,
  CreateWorkspaceResponse,
  UpdateVolumeResponse,
  GetTableRequest,
  FeatureTable,
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
   * 添加控制台用户，该接口为控制台级接口，仅支持在中心地域调用：国内站请传入 ap-guangzhou，国际站请传入 ap-singapore；其他地域调用将返回 UnsupportedRegion。
   */
  async AddConsoleUsers(
    req: AddConsoleUsersRequest,
    cb?: (error: string, rep: AddConsoleUsersResponse) => void
  ): Promise<AddConsoleUsersResponse> {
    return this.request("AddConsoleUsers", req, cb)
  }

  /**
     * 修改模型信息
使用场景：修改模型的名称或注释，按需传入NewName/NewComment字段
前置条件：模型必须存在
     */
  async UpdateModel(
    req: UpdateModelRequest,
    cb?: (error: string, rep: UpdateModelResponse) => void
  ): Promise<UpdateModelResponse> {
    return this.request("UpdateModel", req, cb)
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
   * 获取view列表
   */
  async ListViews(
    req: ListViewsRequest,
    cb?: (error: string, rep: ListViewsResponse) => void
  ): Promise<ListViewsResponse> {
    return this.request("ListViews", req, cb)
  }

  /**
   * 分页查询数据目录名称列表
   */
  async ListCatalogNames(
    req: ListCatalogNamesRequest,
    cb?: (error: string, rep: ListCatalogNamesResponse) => void
  ): Promise<ListCatalogNamesResponse> {
    return this.request("ListCatalogNames", req, cb)
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
   * 创建控制台用户组，该接口为控制台级接口，仅支持在中心地域调用：国内站请传入 ap-guangzhou，国际站请传入 ap-singapore；其他地域调用将返回 UnsupportedRegion。
   */
  async CreateConsoleGroup(
    req: CreateConsoleGroupRequest,
    cb?: (error: string, rep: CreateConsoleGroupResponse) => void
  ): Promise<CreateConsoleGroupResponse> {
    return this.request("CreateConsoleGroup", req, cb)
  }

  /**
     * 分页查询存储位置列表
使用场景：分页查询数据湖仓库中的存储位置详情列表，支持模式匹配和快照分页
     */
  async ListLocations(
    req: ListLocationsRequest,
    cb?: (error: string, rep: ListLocationsResponse) => void
  ): Promise<ListLocationsResponse> {
    return this.request("ListLocations", req, cb)
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
   * 查询工作流运行详情
   */
  async GetWorkflowRun(
    req: GetWorkflowRunRequest,
    cb?: (error: string, rep: GetWorkflowRunResponse) => void
  ): Promise<GetWorkflowRunResponse> {
    return this.request("GetWorkflowRun", req, cb)
  }

  /**
   * 分页获取数据卷信息
   */
  async ListVolumes(
    req: ListVolumesRequest,
    cb?: (error: string, rep: ListVolumesResponse) => void
  ): Promise<ListVolumesResponse> {
    return this.request("ListVolumes", req, cb)
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
   * 查询工作流任务历史运行列表
   */
  async ListWorkflowTaskRuns(
    req: ListWorkflowTaskRunsRequest,
    cb?: (error: string, rep: ListWorkflowTaskRunsResponse) => void
  ): Promise<ListWorkflowTaskRunsResponse> {
    return this.request("ListWorkflowTaskRuns", req, cb)
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
   * 创建模型接口
   */
  async CreateModel(
    req: CreateModelRequest,
    cb?: (error: string, rep: CreateModelResponse) => void
  ): Promise<CreateModelResponse> {
    return this.request("CreateModel", req, cb)
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
   * 删除模型
   */
  async DeleteModel(
    req: DeleteModelRequest,
    cb?: (error: string, rep: DeleteModelResponse) => void
  ): Promise<DeleteModelResponse> {
    return this.request("DeleteModel", req, cb)
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
   * 查询任务运行详情
   */
  async GetWorkflowTaskRun(
    req: GetWorkflowTaskRunRequest,
    cb?: (error: string, rep: GetWorkflowTaskRunResponse) => void
  ): Promise<GetWorkflowTaskRunResponse> {
    return this.request("GetWorkflowTaskRun", req, cb)
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
     * 修改表字段描述
使用场景：修改表中一个或多个字段的注释
前置条件：用户需对目标表有写权限；字段名必须存在于目标表中
     */
  async UpdateTableColumn(
    req: UpdateTableColumnRequest,
    cb?: (error: string, rep: UpdateTableColumnResponse) => void
  ): Promise<UpdateTableColumnResponse> {
    return this.request("UpdateTableColumn", req, cb)
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
   * 删除catalog
   */
  async DeleteCatalog(
    req: DeleteCatalogRequest,
    cb?: (error: string, rep: DeleteCatalogResponse) => void
  ): Promise<DeleteCatalogResponse> {
    return this.request("DeleteCatalog", req, cb)
  }

  /**
     * 修改表信息
使用场景：修改表的名称或注释，按需传入NewName/NewComment字段
前置条件：表必须存在
     */
  async UpdateTable(
    req: UpdateTableRequest,
    cb?: (error: string, rep: UpdateTableResponse) => void
  ): Promise<UpdateTableResponse> {
    return this.request("UpdateTable", req, cb)
  }

  /**
   * 资产统一搜索
   */
  async SearchAsset(
    req: SearchAssetRequest,
    cb?: (error: string, rep: SearchAssetResponse) => void
  ): Promise<SearchAssetResponse> {
    return this.request("SearchAsset", req, cb)
  }

  /**
   * 创建模型版本
   */
  async CreateModelVersion(
    req: CreateModelVersionRequest,
    cb?: (error: string, rep: CreateModelVersionResponse) => void
  ): Promise<CreateModelVersionResponse> {
    return this.request("CreateModelVersion", req, cb)
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
   * 更新文件夹（支持重命名+移动）
   */
  async UpdateFolder(
    req: UpdateFolderRequest,
    cb?: (error: string, rep: UpdateFolderResponse) => void
  ): Promise<UpdateFolderResponse> {
    return this.request("UpdateFolder", req, cb)
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
   * 获取schema列表
   */
  async ListSchemas(
    req: ListSchemasRequest,
    cb?: (error: string, rep: ListSchemasResponse) => void
  ): Promise<ListSchemasResponse> {
    return this.request("ListSchemas", req, cb)
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
   * 获取table列表
   */
  async ListTables(
    req: ListTablesRequest,
    cb?: (error: string, rep: ListTablesResponse) => void
  ): Promise<ListTablesResponse> {
    return this.request("ListTables", req, cb)
  }

  /**
     * 修改存储位置
使用场景：修改存储位置的名称、描述或属性信息
前置条件：存储位置名称必须存在
错误码：MetaLakeNotFound - 存储位置不存在
     */
  async UpdateLocation(
    req: UpdateLocationRequest,
    cb?: (error: string, rep: UpdateLocationResponse) => void
  ): Promise<UpdateLocationResponse> {
    return this.request("UpdateLocation", req, cb)
  }

  /**
     * 查询存储位置详情
使用场景：根据存储位置名获取单个存储位置的详细信息
前置条件：存储位置名称必须存在
错误码：MetaLakeNotFound - 存储位置不存在
     */
  async GetLocation(
    req: GetLocationRequest,
    cb?: (error: string, rep: GetLocationResponse) => void
  ): Promise<GetLocationResponse> {
    return this.request("GetLocation", req, cb)
  }

  /**
   * 修改控制台用户角色，该接口为控制台级接口，仅支持在中心地域调用：国内站请传入 ap-guangzhou，国际站请传入 ap-singapore；其他地域调用将返回 UnsupportedRegion。
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
   * 查询控制台用户组成员列表，该接口为控制台级接口，仅支持在中心地域调用：国内站请传入 ap-guangzhou，国际站请传入 ap-singapore；其他地域调用将返回 UnsupportedRegion。
   */
  async ListConsoleGroupUsers(
    req: ListConsoleGroupUsersRequest,
    cb?: (error: string, rep: ListConsoleGroupUsersResponse) => void
  ): Promise<ListConsoleGroupUsersResponse> {
    return this.request("ListConsoleGroupUsers", req, cb)
  }

  /**
     * 创建存储位置
使用场景：在数据湖仓库中创建新的存储位置
     */
  async CreateLocation(
    req?: CreateLocationRequest,
    cb?: (error: string, rep: CreateLocationResponse) => void
  ): Promise<CreateLocationResponse> {
    return this.request("CreateLocation", req, cb)
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
     * 修改数据目录信息
使用场景：修改数据目录的注释，按需传入NewComment字段
前置条件：数据目录必须存在
     */
  async UpdateCatalog(
    req: UpdateCatalogRequest,
    cb?: (error: string, rep: UpdateCatalogResponse) => void
  ): Promise<UpdateCatalogResponse> {
    return this.request("UpdateCatalog", req, cb)
  }

  /**
     * 修改模型版本信息
使用场景：修改模型版本的别名或注释，按需传入对应字段
前置条件：模型版本必须存在
     */
  async UpdateModelVersion(
    req: UpdateModelVersionRequest,
    cb?: (error: string, rep: UpdateModelVersionResponse) => void
  ): Promise<UpdateModelVersionResponse> {
    return this.request("UpdateModelVersion", req, cb)
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
     * 修改数据卷信息
使用场景：修改数据卷的名称或注释，按需传入NewName/NewComment字段
前置条件：数据卷必须存在
     */
  async UpdateVolume(
    req: UpdateVolumeRequest,
    cb?: (error: string, rep: UpdateVolumeResponse) => void
  ): Promise<UpdateVolumeResponse> {
    return this.request("UpdateVolume", req, cb)
  }

  /**
   * 修改工作空间，该接口为控制台级接口，仅支持在中心地域调用：国内站请传入 ap-guangzhou，国际站请传入 ap-singapore；其他地域调用将返回 UnsupportedRegion。
   */
  async UpdateWorkspace(
    req: UpdateWorkspaceRequest,
    cb?: (error: string, rep: UpdateWorkspaceResponse) => void
  ): Promise<UpdateWorkspaceResponse> {
    return this.request("UpdateWorkspace", req, cb)
  }

  /**
     * 修改schema信息
使用场景：修改schema的注释，按需传入NewComment字段
前置条件：schema必须存在
     */
  async UpdateSchema(
    req: UpdateSchemaRequest,
    cb?: (error: string, rep: UpdateSchemaResponse) => void
  ): Promise<UpdateSchemaResponse> {
    return this.request("UpdateSchema", req, cb)
  }

  /**
   * 获取模型详情
   */
  async GetModel(
    req: GetModelRequest,
    cb?: (error: string, rep: GetModelResponse) => void
  ): Promise<GetModelResponse> {
    return this.request("GetModel", req, cb)
  }

  /**
   * 创建数据卷接口
   */
  async CreateVolume(
    req: CreateVolumeRequest,
    cb?: (error: string, rep: CreateVolumeResponse) => void
  ): Promise<CreateVolumeResponse> {
    return this.request("CreateVolume", req, cb)
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
     * 删除存储位置
使用场景：删除指定的存储位置
前置条件：存储位置名称必须存在
错误码：MetaLakeNotFound - 存储位置不存在
     */
  async DeleteLocation(
    req: DeleteLocationRequest,
    cb?: (error: string, rep: DeleteLocationResponse) => void
  ): Promise<DeleteLocationResponse> {
    return this.request("DeleteLocation", req, cb)
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
   * 获取模型详情
   */
  async GetVolume(
    req: GetVolumeRequest,
    cb?: (error: string, rep: GetVolumeResponse) => void
  ): Promise<GetVolumeResponse> {
    return this.request("GetVolume", req, cb)
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
   * 删除view
   */
  async DeleteView(
    req: DeleteViewRequest,
    cb?: (error: string, rep: DeleteViewResponse) => void
  ): Promise<DeleteViewResponse> {
    return this.request("DeleteView", req, cb)
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
   * 查询控制台用户列表，该接口为控制台级接口，仅支持在中心地域调用：国内站请传入 ap-guangzhou，国际站请传入 ap-singapore；其他地域调用将返回 UnsupportedRegion。
   */
  async ListConsoleUsers(
    req: ListConsoleUsersRequest,
    cb?: (error: string, rep: ListConsoleUsersResponse) => void
  ): Promise<ListConsoleUsersResponse> {
    return this.request("ListConsoleUsers", req, cb)
  }

  /**
   * <p>批量移除控制台用户（单次最多10个；前置校验任一不满足整体拒绝；执行阶段单个失败不中断后续删除，成败以 SuccessUins/FailItems 为准），该接口为控制台级接口，仅支持在中心地域调用：国内站请传入 ap-guangzhou，国际站请传入 ap-singapore；其他地域调用将返回 UnsupportedRegion。</p>
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
   * 创建用户组
   */
  async AddWorkspaceUsers(
    req: AddWorkspaceUsersRequest,
    cb?: (error: string, rep: AddWorkspaceUsersResponse) => void
  ): Promise<AddWorkspaceUsersResponse> {
    return this.request("AddWorkspaceUsers", req, cb)
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
   * 修改控制台用户组，该接口为控制台级接口，仅支持在中心地域调用：国内站请传入 ap-guangzhou，国际站请传入 ap-singapore；其他地域调用将返回 UnsupportedRegion。
   */
  async UpdateConsoleGroup(
    req: UpdateConsoleGroupRequest,
    cb?: (error: string, rep: UpdateConsoleGroupResponse) => void
  ): Promise<UpdateConsoleGroupResponse> {
    return this.request("UpdateConsoleGroup", req, cb)
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
   * 重跑工作流
   */
  async RerunWorkflowRun(
    req: RerunWorkflowRunRequest,
    cb?: (error: string, rep: RerunWorkflowRunResponse) => void
  ): Promise<RerunWorkflowRunResponse> {
    return this.request("RerunWorkflowRun", req, cb)
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
   * 分页查询数据库名称列表
   */
  async ListSchemaNames(
    req: ListSchemaNamesRequest,
    cb?: (error: string, rep: ListSchemaNamesResponse) => void
  ): Promise<ListSchemaNamesResponse> {
    return this.request("ListSchemaNames", req, cb)
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
   * 分页获取模型信息
   */
  async ListModels(
    req: ListModelsRequest,
    cb?: (error: string, rep: ListModelsResponse) => void
  ): Promise<ListModelsResponse> {
    return this.request("ListModels", req, cb)
  }

  /**
   * 删除控制台用户组，该接口为控制台级接口，仅支持在中心地域调用：国内站请传入 ap-guangzhou，国际站请传入 ap-singapore；其他地域调用将返回 UnsupportedRegion。
   */
  async DeleteConsoleGroups(
    req: DeleteConsoleGroupsRequest,
    cb?: (error: string, rep: DeleteConsoleGroupsResponse) => void
  ): Promise<DeleteConsoleGroupsResponse> {
    return this.request("DeleteConsoleGroups", req, cb)
  }

  /**
   * 查询工作空间列表，该接口为控制台级接口，仅支持在中心地域调用：国内站请传入 ap-guangzhou，国际站请传入 ap-singapore；其他地域调用将返回 UnsupportedRegion。
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
   * 分页查询数据表名称列表
   */
  async ListTableNames(
    req: ListTableNamesRequest,
    cb?: (error: string, rep: ListTableNamesResponse) => void
  ): Promise<ListTableNamesResponse> {
    return this.request("ListTableNames", req, cb)
  }

  /**
   * 查询view详情
   */
  async GetView(
    req: GetViewRequest,
    cb?: (error: string, rep: GetViewResponse) => void
  ): Promise<GetViewResponse> {
    return this.request("GetView", req, cb)
  }

  /**
   * 查询特征表列表
   */
  async ListFeatureTables(
    req: ListFeatureTablesRequest,
    cb?: (error: string, rep: ListFeatureTablesResponse) => void
  ): Promise<ListFeatureTablesResponse> {
    return this.request("ListFeatureTables", req, cb)
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
   * 创建工作空间，该接口为控制台级接口，仅支持在中心地域调用：国内站请传入 ap-guangzhou，国际站请传入 ap-singapore；其他地域调用将返回 UnsupportedRegion。
   */
  async CreateWorkspace(
    req: CreateWorkspaceRequest,
    cb?: (error: string, rep: CreateWorkspaceResponse) => void
  ): Promise<CreateWorkspaceResponse> {
    return this.request("CreateWorkspace", req, cb)
  }

  /**
   * 删除数据卷
   */
  async DeleteVolume(
    req: DeleteVolumeRequest,
    cb?: (error: string, rep: DeleteVolumeResponse) => void
  ): Promise<DeleteVolumeResponse> {
    return this.request("DeleteVolume", req, cb)
  }

  /**
   * 获取模型版本详情
   */
  async GetModelVersion(
    req: GetModelVersionRequest,
    cb?: (error: string, rep: GetModelVersionResponse) => void
  ): Promise<GetModelVersionResponse> {
    return this.request("GetModelVersion", req, cb)
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
   * 分页查询视图名称列表
   */
  async ListViewNames(
    req: ListViewNamesRequest,
    cb?: (error: string, rep: ListViewNamesResponse) => void
  ): Promise<ListViewNamesResponse> {
    return this.request("ListViewNames", req, cb)
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
   * 查询catalog详情
   */
  async GetCatalog(
    req: GetCatalogRequest,
    cb?: (error: string, rep: GetCatalogResponse) => void
  ): Promise<GetCatalogResponse> {
    return this.request("GetCatalog", req, cb)
  }

  /**
     * 修改视图信息
使用场景：修改视图的名称或注释，按需传入NewName/NewComment字段
前置条件：视图必须存在
     */
  async UpdateView(
    req: UpdateViewRequest,
    cb?: (error: string, rep: UpdateViewResponse) => void
  ): Promise<UpdateViewResponse> {
    return this.request("UpdateView", req, cb)
  }

  /**
     * 修改函数信息
使用场景：修改函数的注释，按需传入NewComment字段
前置条件：函数必须存在
     */
  async UpdateFunction(
    req: UpdateFunctionRequest,
    cb?: (error: string, rep: UpdateFunctionResponse) => void
  ): Promise<UpdateFunctionResponse> {
    return this.request("UpdateFunction", req, cb)
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
   * 查询table详情
   */
  async GetTable(
    req: GetTableRequest,
    cb?: (error: string, rep: GetTableResponse) => void
  ): Promise<GetTableResponse> {
    return this.request("GetTable", req, cb)
  }
}
