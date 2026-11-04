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
  CreateModelServiceRequest,
  CreateNotebookImageResponse,
  DescribePresetImageListRequest,
  AccessRule,
  DescribeModelAccelerateVersionsRequest,
  StopModelAccelerateTaskRequest,
  DeleteTrainingModelVersionResponse,
  ServiceEIP,
  DescribeExportResponse,
  NotebookSetItem,
  DescribeBillingResourceGroupAttachedWorkspacesResponse,
  DescribeDataSourcesResponse,
  ModifyServiceGroupWeightsResponse,
  ScheduledAction,
  Usage,
  GatewayConfig,
  DescribeBillingResourceGroupsRequest,
  DeleteNotebookRequest,
  PushTrainingMetricsRequest,
  Filter,
  ModifyWorkspaceMembersResponse,
  DescribeTrainingModelVersionsRequest,
  CodeRepoConfig,
  CreateDatasetResponse,
  DescribeLogsRequest,
  DeviceImageInfo,
  ModifyRoleResponse,
  CrossTenantENIInfo,
  EncodedStartCmdInfo,
  Service,
  ResourceGroupInWorkspace,
  DescribeDataSourcesRequest,
  CreateDataSourceRequest,
  ModifyServiceGroupWeightsRequest,
  DescribeTrainingTasksRequest,
  RollingUpdate,
  VolumeMount,
  DescribeMountInstanceResponse,
  DescribeMountInstancesRequest,
  ModifyNotebookTagsResponse,
  DescribeWorkspaceQuotasResponse,
  DescribeBillingResourceGroupResponse,
  ModifyNotebookTagsRequest,
  ServiceCallInfo,
  CosPathInfo,
  DescribeBillingResourceGroupsResponse,
  DescribeSubAccountLinuxUserInfosRequest,
  UpdateDataSourceRequest,
  StartNotebookResponse,
  ModelInputInfo,
  DescribeAnnotatedTaskListRequest,
  CFSTurbo,
  DescribeTrainingModelVersionRequest,
  ResourceInstanceRunningJobInfo,
  ImageFIlter,
  OperatorInfo,
  DeleteModelServiceResponse,
  WorkloadStatus,
  CFSConfig,
  DescribeMountInstanceRequest,
  CreateNotebookImageRequest,
  StartNotebookRequest,
  NumOrPercent,
  InferTemplate,
  DescribeModelAccelerateVersionsResponse,
  DescribeBuildInImagesRequest,
  MountConfigureInfo,
  StartTrainingTaskRequest,
  DescribePlatformImagesResponse,
  ContainerStatus,
  DescribeMountInstancesResponse,
  UpdateMountLimitRequest,
  ModifyModelServiceRequest,
  ChatCompletionRequest,
  DescribeAccessRulesRequest,
  CreateMountLimitResponse,
  DescribeBillingSpecsPriceResponse,
  ModifyNotebookRequest,
  DescribeModelServiceCallInfoRequest,
  DescribeWorkspacesResponse,
  DataPoint,
  GpuDetail,
  DescribeNotebookResponse,
  TJCallInfo,
  CBSConfig,
  CreateTrainingModelRequest,
  DescribeTrainingModelVersionsResponse,
  StartCmdInfo,
  Event,
  SmartRouterComponent,
  DescribeBillingResourceGroupAttachedWorkspacesRequest,
  DescribeModelServiceGroupsResponse,
  Spec,
  SmartRouter,
  DescribeRolesRequest,
  DescribeDataSourceRequest,
  DescribePublicAlgoVersionListResponse,
  DescribeBillingResourceInstanceRunningJobsResponse,
  RuntimeLib,
  InferGatewayCallInfo,
  CreateDataSourceResponse,
  LabelValue,
  ResourceGroupInfo,
  CreateNotebookRequest,
  CreatePresignedNotebookUrlResponse,
  DescribeWorkspacesRequest,
  HorizontalPodAutoscaler,
  DescribeWorkspaceMembersResponse,
  CreateTrainingModelResponse,
  ResourceConfigInfo,
  PublicDataSourceFS,
  ExposePortConfig,
  DescribeRolesResponse,
  ModifyModelServiceAuthorizationRequest,
  DescribeMountLimitsRequest,
  ImageSecret,
  DescribeWorkspaceQuotaUsageRequest,
  DeleteExportResponse,
  DefaultInnerCallInfo,
  AuthTokenBase,
  ModifyModelServiceAuthTokenRequest,
  ModifyRoleRequest,
  AnnotationTaskInfo,
  LogIdentity,
  SchedulingPolicy,
  MountInstanceInfo,
  DescribeDatasetsRequest,
  WorkspaceTaskInfo,
  ModelAccelerateVersion,
  DeleteTrainingModelResponse,
  DescribeInferTemplatesResponse,
  DescribeBillingSpecsRequest,
  RDMAConfig,
  InferCodeInfo,
  TrainParam,
  DescribeInferTemplatesRequest,
  DescribeWorkspaceResponse,
  TrainToolConfig,
  DeleteModelServiceGroupResponse,
  DescribeRoleUsersResponse,
  DeviceMaterialInfo,
  PresetImageInfo,
  DescribeTrainingTaskRequest,
  CronScaleJob,
  PrivateLinkInfo,
  DeleteRoleRequest,
  DescribeNotebooksResponse,
  DescribeMountLimitsResponse,
  InferTemplateGroup,
  DescribeModelServiceHotUpdatedResponse,
  DatasetInfo,
  DescribeModelAccelerateTaskResponse,
  TagFilter,
  PodSSHInfo,
  DescribeModelServiceGroupsRequest,
  SubAccountInfo,
  ResourcePermission,
  ImageInfo,
  Tag,
  ServiceInfo,
  TrainingTaskSetItem,
  StopNotebookResponse,
  ModifyUserGrantRequest,
  DescribeModelServiceRequest,
  CreateTrainingTaskResponse,
  ModifyModelServiceAuthTokenResponse,
  ModifyWorkspaceMembersRequest,
  SpecPrice,
  ModifyModelServiceAuthorizationResponse,
  EnableTrainingTaskClsConfigResponse,
  DeleteModelServiceRequest,
  DeleteModelServiceAuthTokenRequest,
  ModifyRoleUserGrantRequest,
  CreateTrainingTaskRequest,
  Message,
  CreatePresignedNotebookUrlRequest,
  StorageExtraConf,
  DescribeWorkspaceQuotaUsageResponse,
  ModifyNotebookResponse,
  MemberInfo,
  DescribeModelServiceResponse,
  DescribeBuildInImagesResponse,
  Workspace,
  DescribeDatasetsResponse,
  ImageUrl,
  ModelSource,
  CreateNotebookResponse,
  IntranetCallInfo,
  DescribeBillingSpecsPriceRequest,
  WeightEntry,
  Instance,
  DescribeAnnotatedTaskListResponse,
  ModifyRoleAccessRulesRequest,
  DescribeWorkspaceRequest,
  CreateExportRequest,
  DescribeBillingSpecsResponse,
  SmartRouterResourceSpec,
  DeleteTrainingTaskResponse,
  CreateMountLimitRequest,
  HostPath,
  AuthToken,
  DescribeEventsResponse,
  DatasetGroup,
  StatefulSetCondition,
  HTTPGetAction,
  SidecarSpec,
  Pod,
  TCPSocketAction,
  ResourceInfo,
  ModifyRoleUserGrantResponse,
  PodInfo,
  GroupResource,
  DescribeModelServiceCallInfoResponse,
  DataSetConfig,
  HyperParameter,
  DescribeNotebooksRequest,
  CamTag,
  DeleteDatasetResponse,
  DeleteNotebookResponse,
  DeleteRoleResponse,
  DescribeModelServiceHotUpdatedRequest,
  MetricData,
  CreateModelServiceAuthTokenResponse,
  GooseFS,
  NotebookDetail,
  SchemaInfo,
  DescribeAccessRulesResponse,
  ModifyModelServiceResponse,
  DataSourceBrief,
  ProbeAction,
  DeleteModelServiceAuthTokenResponse,
  ModelInfo,
  UpdateDataSourceResponse,
  CreateDatasetRequest,
  RepairTaskInfo,
  CreateModelServiceResponse,
  DeleteExportRequest,
  ServiceGroup,
  ServiceLimit,
  RoleBriefInfo,
  DescribeModelServiceGroupResponse,
  Attribute,
  ResourceGroup,
  AuthTokenLimit,
  DeleteDataSourceRequest,
  DeleteMountLimitRequest,
  ExecAction,
  StopModelAccelerateTaskResponse,
  IngressPrivateLinkInfo,
  DescribeTrainingTaskPodUrlResponse,
  PublicAlgoVersion,
  UserBriefInfo,
  ServiceEIPInfo,
  DescribeTrainingTasksResponse,
  DescribeRoleUsersRequest,
  DescribeModelAccelerateTaskRequest,
  Container,
  ModifyUserGrantResponse,
  UpdateSubAccountLinuxUserInfoResponse,
  CreateRoleResponse,
  UserRoleInfo,
  MountLimitInfo,
  ResourceSupplyAttribute,
  DescribePresetImageListResponse,
  TrainingTaskDetail,
  DescribeExportRequest,
  UpdateSubAccountLinuxUserInfoRequest,
  EnableTrainingTaskClsConfigRequest,
  DescribeNotebookRequest,
  DescribePublicAlgoVersionListRequest,
  SmartRouterResourceConfig,
  HealthProbe,
  LocalDisk,
  DescribeTrainingTaskPodUrlRequest,
  ResourceSpec,
  DescribeLogsResponse,
  DeleteTrainingTaskRequest,
  Option,
  RoleInfo,
  DeleteModelServiceGroupRequest,
  TrainingModelVersionDTO,
  CreateModelServiceAuthTokenRequest,
  ExposeNetworkConfig,
  ServiceCallInfoV2,
  DataSourceInfo,
  DescribeBillingResourceGroupRequest,
  SSHConfig,
  CreateRoleRequest,
  ChatCompletionResponse,
  GooseFSx,
  DescribeWorkspaceMembersRequest,
  AggregatePublicAlgoVersion,
  DescribeTrainingTaskPodsRequest,
  UpdateMountLimitResponse,
  DescribeRoleRequest,
  DescribeSubAccountLinuxUserInfosResponse,
  DeleteDatasetRequest,
  MaterialInfo,
  DataConfig,
  ResourceConf,
  DescribeModelServiceGroupRequest,
  PushTrainingMetricsResponse,
  StopTrainingTaskResponse,
  Choice,
  HDFSConfig,
  DescribeTrainingTaskPodsResponse,
  SpecUnit,
  DeleteDataSourceResponse,
  ModelAccelerateTask,
  EnvVar,
  DescribeEventsRequest,
  DeleteTrainingModelRequest,
  DescribeBillingResourceInstanceRunningJobsRequest,
  DescribeTrainingTaskResponse,
  DeleteMountLimitResponse,
  PlatformImageInfo,
  DescribePlatformImagesRequest,
  ModifyRoleAccessRulesResponse,
  DescribeWorkspaceQuotasRequest,
  Probe,
  DefaultNginxGatewayCallInfo,
  DescribeRoleResponse,
  DeleteTrainingModelVersionRequest,
  CreateExportResponse,
  MultiModalContent,
  DescribeTrainingModelVersionResponse,
  StopNotebookRequest,
  DescribeDataSourceResponse,
  StopTrainingTaskRequest,
  LogConfig,
  StartTrainingTaskResponse,
} from "./tione_models"

/**
 * tione client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("tione.tencentcloudapi.com", "2021-11-11", clientConfig)
  }

  /**
   * 查询模型版本
   */
  async DescribeTrainingModelVersion(
    req: DescribeTrainingModelVersionRequest,
    cb?: (error: string, rep: DescribeTrainingModelVersionResponse) => void
  ): Promise<DescribeTrainingModelVersionResponse> {
    return this.request("DescribeTrainingModelVersion", req, cb)
  }

  /**
   * 查询单个服务
   */
  async DescribeModelService(
    req: DescribeModelServiceRequest,
    cb?: (error: string, rep: DescribeModelServiceResponse) => void
  ): Promise<DescribeModelServiceResponse> {
    return this.request("DescribeModelService", req, cb)
  }

  /**
   * 本接口(DescribeBillingSpecs) 提供查询计费项列表
   */
  async DescribeBillingSpecs(
    req: DescribeBillingSpecsRequest,
    cb?: (error: string, rep: DescribeBillingSpecsResponse) => void
  ): Promise<DescribeBillingSpecsResponse> {
    return this.request("DescribeBillingSpecs", req, cb)
  }

  /**
   * 查询单个服务组
   */
  async DescribeModelServiceGroup(
    req: DescribeModelServiceGroupRequest,
    cb?: (error: string, rep: DescribeModelServiceGroupResponse) => void
  ): Promise<DescribeModelServiceGroupResponse> {
    return this.request("DescribeModelServiceGroup", req, cb)
  }

  /**
   * 导入模型
   */
  async CreateTrainingModel(
    req: CreateTrainingModelRequest,
    cb?: (error: string, rep: CreateTrainingModelResponse) => void
  ): Promise<CreateTrainingModelResponse> {
    return this.request("CreateTrainingModel", req, cb)
  }

  /**
   * 删除Notebook
   */
  async DeleteNotebook(
    req: DeleteNotebookRequest,
    cb?: (error: string, rep: DeleteNotebookResponse) => void
  ): Promise<DeleteNotebookResponse> {
    return this.request("DeleteNotebook", req, cb)
  }

  /**
   * 模型加速之后的模型版本列表
   */
  async DescribeModelAccelerateVersions(
    req: DescribeModelAccelerateVersionsRequest,
    cb?: (error: string, rep: DescribeModelAccelerateVersionsResponse) => void
  ): Promise<DescribeModelAccelerateVersionsResponse> {
    return this.request("DescribeModelAccelerateVersions", req, cb)
  }

  /**
   * 修改自定义角色的权限规则
   */
  async ModifyRoleAccessRules(
    req?: ModifyRoleAccessRulesRequest,
    cb?: (error: string, rep: ModifyRoleAccessRulesResponse) => void
  ): Promise<ModifyRoleAccessRulesResponse> {
    return this.request("ModifyRoleAccessRules", req, cb)
  }

  /**
   * 非数据源挂载时获取实例列表
   */
  async DescribeMountInstances(
    req: DescribeMountInstancesRequest,
    cb?: (error: string, rep: DescribeMountInstancesResponse) => void
  ): Promise<DescribeMountInstancesResponse> {
    return this.request("DescribeMountInstances", req, cb)
  }

  /**
   * 获取角色下已授权的用户列表
   */
  async DescribeRoleUsers(
    req: DescribeRoleUsersRequest,
    cb?: (error: string, rep: DescribeRoleUsersResponse) => void
  ): Promise<DescribeRoleUsersResponse> {
    return this.request("DescribeRoleUsers", req, cb)
  }

  /**
   * 根据服务组id删除服务组下所有模型服务
   */
  async DeleteModelServiceGroup(
    req: DeleteModelServiceGroupRequest,
    cb?: (error: string, rep: DeleteModelServiceGroupResponse) => void
  ): Promise<DeleteModelServiceGroupResponse> {
    return this.request("DeleteModelServiceGroup", req, cb)
  }

  /**
   * 公共算法版本列表
   */
  async DescribePublicAlgoVersionList(
    req: DescribePublicAlgoVersionListRequest,
    cb?: (error: string, rep: DescribePublicAlgoVersionListResponse) => void
  ): Promise<DescribePublicAlgoVersionListResponse> {
    return this.request("DescribePublicAlgoVersionList", req, cb)
  }

  /**
   * 更新用户授权
   */
  async ModifyUserGrant(
    req: ModifyUserGrantRequest,
    cb?: (error: string, rep: ModifyUserGrantResponse) => void
  ): Promise<ModifyUserGrantResponse> {
    return this.request("ModifyUserGrant", req, cb)
  }

  /**
   * 开启CLS日志投递
   */
  async EnableTrainingTaskClsConfig(
    req: EnableTrainingTaskClsConfigRequest,
    cb?: (error: string, rep: EnableTrainingTaskClsConfigResponse) => void
  ): Promise<EnableTrainingTaskClsConfigResponse> {
    return this.request("EnableTrainingTaskClsConfig", req, cb)
  }

  /**
   * 修改一个 AuthToken
   */
  async ModifyModelServiceAuthToken(
    req: ModifyModelServiceAuthTokenRequest,
    cb?: (error: string, rep: ModifyModelServiceAuthTokenResponse) => void
  ): Promise<ModifyModelServiceAuthTokenResponse> {
    return this.request("ModifyModelServiceAuthToken", req, cb)
  }

  /**
   * 获取数据源列表
   */
  async DescribeDataSources(
    req: DescribeDataSourcesRequest,
    cb?: (error: string, rep: DescribeDataSourcesResponse) => void
  ): Promise<DescribeDataSourcesResponse> {
    return this.request("DescribeDataSources", req, cb)
  }

  /**
   * 生成Notebook访问链接
   */
  async CreatePresignedNotebookUrl(
    req: CreatePresignedNotebookUrlRequest,
    cb?: (error: string, rep: CreatePresignedNotebookUrlResponse) => void
  ): Promise<CreatePresignedNotebookUrlResponse> {
    return this.request("CreatePresignedNotebookUrl", req, cb)
  }

  /**
   * 创建挂载限制
   */
  async CreateMountLimit(
    req: CreateMountLimitRequest,
    cb?: (error: string, rep: CreateMountLimitResponse) => void
  ): Promise<CreateMountLimitResponse> {
    return this.request("CreateMountLimit", req, cb)
  }

  /**
   * 删除数据源
   */
  async DeleteDataSource(
    req: DeleteDataSourceRequest,
    cb?: (error: string, rep: DeleteDataSourceResponse) => void
  ): Promise<DeleteDataSourceResponse> {
    return this.request("DeleteDataSource", req, cb)
  }

  /**
   * 停止模型加速任务
   */
  async StopModelAccelerateTask(
    req: StopModelAccelerateTaskRequest,
    cb?: (error: string, rep: StopModelAccelerateTaskResponse) => void
  ): Promise<StopModelAccelerateTaskResponse> {
    return this.request("StopModelAccelerateTask", req, cb)
  }

  /**
   * 创建数据源
   */
  async CreateDataSource(
    req: CreateDataSourceRequest,
    cb?: (error: string, rep: CreateDataSourceResponse) => void
  ): Promise<CreateDataSourceResponse> {
    return this.request("CreateDataSource", req, cb)
  }

  /**
     * # DescribeWorkspaceQuotas 接口文档

## 接口描述

查询指定工作空间下的配额配置和配额列表。该接口用于获取主账号在某个工作空间下的配额管理配置，包括是否启用配额管理、默认配额值以及针对子账号或用户组的具体配额分配情况。

支持三种配额类型：
- **CBS**：CBS存储配额管理
- **Notebook**：开发机数量配额管理
- **PostPaySpec**：托管按量资源规格限制



## 请求参数

### 公共参数（HTTP Header）
| 参数名 | 类型 | 必填 | 描述 |
|--------|------|------|------|
| X-TC-Uin | string | 是 | 主账号Uin |
| X-TC-ProjectId | uint32 | 是 | 工作空间ID |

### 请求体参数
| 参数名 | 类型 | 必填 | 描述 |
|--------|------|------|------|
| QuotaType | string | 是 | 配额类型，可选值：<br>- `CBS`：CBS存储配额<br>- `Notebook`：开发机数量配额<br>- `PostPaySpec`：托管按量资源规格限制 |

## 响应参数

| 参数名 | 类型 | 描述 |
|--------|------|------|
| QuotaType | string | 配额类型 |
| QuotaEnabled | bool | 是否启用配额管理功能 |
| DefaultQuota | WorkspaceQuota | 默认配额配置（当QuotaEnabled为false时为空对象） |
| Quotas | ][WorkspaceQuota | 配额列表，包含所有子账号或用户组的配额配置（仅当QuotaEnabled为true时返回） |

### WorkspaceQuota

| 参数名 | 类型 | 描述 |
|--------|------|------|
| Id | string | 配额ID，格式：<br>- 用户配额：`{quota_type}-{uin}-{subuin}-{TiProjectId}`<br>- 用户组配额：`{quota_type}-{uin}-{groupid}-{TiProjectId}`<br>- 默认配额：`{quota_type}-{uin}-default-{TiProjectId}` |
| QuotaType | string | 配额类型 |
| Uin | string | 主账号Uin |
| SubUin | string | 子账号Uin（当TargetType为USER时有值） |
| SubUinName | string | 子账号名称（当TargetType为USER时有值） |
| QuotaValue | uint32 | 配额值：<br>- CBS：容量（GiB），默认100，范围10-10000<br>- Notebook：数量（个），默认1，范围1-999<br>- PostPaySpec：无意义，关注QuotaData字段 |
| QuotaData | []string | 配额数据（JSON数组格式）：<br>- 当QuotaType为PostPaySpec时，存储允许使用的规格ID列表 |
| TargetType | string | 配额目标类型：<br>- `USER`：用户配额<br>- `USER_GROUP`：用户组配额 |
| GroupId | string | 用户组ID（当TargetType为USER_GROUP时有值） |
| GroupName | string | 用户组名称（当TargetType为USER_GROUP时有值） |
| TiProjectId | string | 工作空间ID |

## 业务逻辑

1. **参数校验**：验证QuotaType参数是否合法
2. **查询配额配置**：根据主账号Uin、工作空间ID和配额类型查询配额配置
3. **配置不存在**：
   - 返回系统默认的配额启用状态和默认配额值
   - CBS默认启用，默认值100GiB
   - Notebook默认启用，默认值1个
   - PostPaySpec默认不启用
4. **配置存在但未启用**：
   - QuotaEnabled返回false
   - DefaultQuota返回空对象
   - Quotas不返回
5. **配置存在且已启用**：
   - QuotaEnabled返回true
   - DefaultQuota返回配置的默认配额值
   - Quotas返回所有子账号或用户组的配额列表
   - 自动反序列化QuotaData字段（JSON数组）

## 使用场景

1. **配额管理页面初始化**：获取当前工作空间的配额配置状态
2. **配额列表展示**：展示所有子账号或用户组的配额分配情况
3. **配额编辑前查询**：在修改配额前获取当前配置
4. **权限控制判断**：判断是否启用了配额管理功能

## 错误码

| 错误码 | 描述 | 解决方案 |
|--------|------|----------|
| InvalidParameterValue | 参数值错误 | 检查QuotaType参数是否为合法值（CBS/Notebook/PostPaySpec） |
| FailedOperation.QueryDatabaseFail | 数据库查询失败 | 稍后重试或联系管理员 |

## 请求示例

```json
{
  "QuotaType": "CBS"
}
```

**HTTP Header:**
```
X-TC-Uin: 100012345678
X-TC-ProjectId: 123456
```

## 响应示例

### 示例1：配额已启用且有配额列表

```json
{
  "QuotaType": "CBS",
  "QuotaEnabled": true,
  "DefaultQuota": {
    "Id": "CBS-100012345678-default-123456",
    "QuotaType": "CBS",
    "Uin": "100012345678",
    "SubUin": "",
    "SubUinName": "",
    "QuotaValue": 100,
    "QuotaData": [],
    "TargetType": "",
    "GroupId": "",
    "GroupName": "",
    "TiProjectId": "123456"
  },
  "Quotas": [
    {
      "Id": "CBS-100012345678-100012345679-123456",
      "QuotaType": "CBS",
      "Uin": "100012345678",
      "SubUin": "100012345679",
      "SubUinName": "张三",
      "QuotaValue": 200,
      "QuotaData": [],
      "TargetType": "USER",
      "GroupId": "",
      "GroupName": "",
      "TiProjectId": "123456"
    },
    {
      "Id": "CBS-100012345678-group001-123456",
      "QuotaType": "CBS",
      "Uin": "100012345678",
      "SubUin": "",
      "SubUinName": "",
      "QuotaValue": 500,
      "QuotaData": [],
      "TargetType": "USER_GROUP",
      "GroupId": "group001",
      "GroupName": "开发组",
      "TiProjectId": "123456"
    }
  ]
}
```

### 示例2：配额未启用

```json
{
  "QuotaType": "PostPaySpec",
  "QuotaEnabled": false,
  "DefaultQuota": {},
  "Quotas": []
}
```

### 示例3：PostPaySpec类型配额（带QuotaData）

```json
{
  "QuotaType": "PostPaySpec",
  "QuotaEnabled": true,
  "DefaultQuota": {
    "Id": "PostPaySpec-100012345678-default-123456",
    "QuotaType": "PostPaySpec",
    "Uin": "100012345678",
    "SubUin": "",
    "SubUinName": "",
    "QuotaValue": 0,
    "QuotaData": ["spec-001", "spec-002", "spec-003"],
    "TargetType": "",
    "GroupId": "",
    "GroupName": "",
    "TiProjectId": "123456"
  },
  "Quotas": [
    {
      "Id": "PostPaySpec-100012345678-100012345679-123456",
      "QuotaType": "PostPaySpec",
      "Uin": "100012345678",
      "SubUin": "100012345679",
      "SubUinName": "李四",
      "QuotaValue": 0,
      "QuotaData": ["spec-001", "spec-002"],
      "TargetType": "USER",
      "GroupId": "",
      "GroupName": "",
      "TiProjectId": "123456"
    }
  ]
}
```

## 注意事项

1. **配额继承规则**：
   - 如果子账号或用户组没有单独配置配额，则使用DefaultQuota的值
   - 用户组配额优先级高于默认配额，用户配额优先级最高

2. **QuotaData字段**：
   - 仅在QuotaType为PostPaySpec时有实际意义
   - 存储的是允许使用的规格ID列表
   - 其他类型的配额该字段为空数组

3. **TargetType字段**：
   - DefaultQuota的TargetType为空字符串
   - Quotas列表中的每个配额都有明确的TargetType

4. **配额值单位**：
   - CBS配额：GiB（1 GiB = 1024 MiB）
   - Notebook配额：个数

5. **性能优化**：
   - 接口会一次性返回所有配额列表，避免多次查询
   - 建议前端做好缓存，减少重复请求
     */
  async DescribeWorkspaceQuotas(
    req: DescribeWorkspaceQuotasRequest,
    cb?: (error: string, rep: DescribeWorkspaceQuotasResponse) => void
  ): Promise<DescribeWorkspaceQuotasResponse> {
    return this.request("DescribeWorkspaceQuotas", req, cb)
  }

  /**
   * 查看任务式建模训练任务，Notebook，在线服务和批量预测任务日志下载任务状态API
   */
  async DescribeExport(
    req: DescribeExportRequest,
    cb?: (error: string, rep: DescribeExportResponse) => void
  ): Promise<DescribeExportResponse> {
    return this.request("DescribeExport", req, cb)
  }

  /**
   * Notebook详情
   */
  async DescribeNotebook(
    req: DescribeNotebookRequest,
    cb?: (error: string, rep: DescribeNotebookResponse) => void
  ): Promise<DescribeNotebookResponse> {
    return this.request("DescribeNotebook", req, cb)
  }

  /**
   * 创建任务式建模训练任务，Notebook，在线服务和批量预测任务日志下载任务API
   */
  async CreateExport(
    req: CreateExportRequest,
    cb?: (error: string, rep: CreateExportResponse) => void
  ): Promise<CreateExportResponse> {
    return this.request("CreateExport", req, cb)
  }

  /**
   * 删除挂载限制。注意：删除挂载限制后，该存储对应的所有数据源也会被删除
   */
  async DeleteMountLimit(
    req: DeleteMountLimitRequest,
    cb?: (error: string, rep: DeleteMountLimitResponse) => void
  ): Promise<DeleteMountLimitResponse> {
    return this.request("DeleteMountLimit", req, cb)
  }

  /**
   * 查询工作空间详情
   */
  async DescribeWorkspace(
    req: DescribeWorkspaceRequest,
    cb?: (error: string, rep: DescribeWorkspaceResponse) => void
  ): Promise<DescribeWorkspaceResponse> {
    return this.request("DescribeWorkspace", req, cb)
  }

  /**
   * 获取角色列表
   */
  async DescribeRoles(
    req: DescribeRolesRequest,
    cb?: (error: string, rep: DescribeRolesResponse) => void
  ): Promise<DescribeRolesResponse> {
    return this.request("DescribeRoles", req, cb)
  }

  /**
   * Notebook列表
   */
  async DescribeNotebooks(
    req: DescribeNotebooksRequest,
    cb?: (error: string, rep: DescribeNotebooksResponse) => void
  ): Promise<DescribeNotebooksResponse> {
    return this.request("DescribeNotebooks", req, cb)
  }

  /**
   * 本接口(DescribeBillingSpecsPrice)用于查询按量计费计费项价格。
   */
  async DescribeBillingSpecsPrice(
    req: DescribeBillingSpecsPriceRequest,
    cb?: (error: string, rep: DescribeBillingSpecsPriceResponse) => void
  ): Promise<DescribeBillingSpecsPriceResponse> {
    return this.request("DescribeBillingSpecsPrice", req, cb)
  }

  /**
   * DescribeMountInstance
   */
  async DescribeMountInstance(
    req: DescribeMountInstanceRequest,
    cb?: (error: string, rep: DescribeMountInstanceResponse) => void
  ): Promise<DescribeMountInstanceResponse> {
    return this.request("DescribeMountInstance", req, cb)
  }

  /**
   * 查询模型优化任务详情
   */
  async DescribeModelAccelerateTask(
    req: DescribeModelAccelerateTaskRequest,
    cb?: (error: string, rep: DescribeModelAccelerateTaskResponse) => void
  ): Promise<DescribeModelAccelerateTaskResponse> {
    return this.request("DescribeModelAccelerateTask", req, cb)
  }

  /**
     * 该接口支持与自行部署的大模型的聊天。

使用该接口调用时需要携带腾讯云的密钥信息用于身份信息鉴权，建议通过腾讯云的云 API SDK调用，具体可以参考
https://cloud.tencent.com/document/product/1278/85305
     */
  async ChatCompletion(
    req: ChatCompletionRequest,
    cb?: (error: string, rep: ChatCompletionResponse) => void
  ): Promise<ChatCompletionResponse> {
    return this.request("ChatCompletion", req, cb)
  }

  /**
   * 修改Notebook标签
   */
  async ModifyNotebookTags(
    req: ModifyNotebookTagsRequest,
    cb?: (error: string, rep: ModifyNotebookTagsResponse) => void
  ): Promise<ModifyNotebookTagsResponse> {
    return this.request("ModifyNotebookTags", req, cb)
  }

  /**
   * 创建Notebook
   */
  async CreateNotebook(
    req: CreateNotebookRequest,
    cb?: (error: string, rep: CreateNotebookResponse) => void
  ): Promise<CreateNotebookResponse> {
    return this.request("CreateNotebook", req, cb)
  }

  /**
   * 查询工作空间列表
   */
  async DescribeWorkspaces(
    req: DescribeWorkspacesRequest,
    cb?: (error: string, rep: DescribeWorkspacesResponse) => void
  ): Promise<DescribeWorkspacesResponse> {
    return this.request("DescribeWorkspaces", req, cb)
  }

  /**
   * 查询资源组关联的工作空间列表
   */
  async DescribeBillingResourceGroupAttachedWorkspaces(
    req: DescribeBillingResourceGroupAttachedWorkspacesRequest,
    cb?: (error: string, rep: DescribeBillingResourceGroupAttachedWorkspacesResponse) => void
  ): Promise<DescribeBillingResourceGroupAttachedWorkspacesResponse> {
    return this.request("DescribeBillingResourceGroupAttachedWorkspaces", req, cb)
  }

  /**
   * 删除权限角色
   */
  async DeleteRole(
    req: DeleteRoleRequest,
    cb?: (error: string, rep: DeleteRoleResponse) => void
  ): Promise<DeleteRoleResponse> {
    return this.request("DeleteRole", req, cb)
  }

  /**
     * ## DescribeWorkspaceQuotaUsage 接口文档

### 接口描述
查询工作空间配额用量信息。该接口用于查询指定工作空间下某个子账号的配额使用情况，支持多种配额类型（CBS存储配额、Notebook开发机数量配额、托管按量资源规格限制）。

### 错误码

| 错误码 | 说明 |
|--------|------|
| InvalidParameterValue | 参数值无效（如必填参数为空、QuotaType不在枚举范围内） |
| FailedOperation.QueryDatabaseFail | 数据库查询失败 |

### 示例

**请求示例**：
```json
{
  "QuotaType": "Notebook",
  "SupervisorUin": "100012345678",
  "SupervisorSubUin": "100012345679",
  "TiProjectId": "ti-proj-123456"
}
```

**响应示例**：
```json
{
  "QuotaType": "Notebook",
  "QuotaEnabled": true,
  "TotalQuota": 10,
  "UsedQuota": 3,
}
```
     */
  async DescribeWorkspaceQuotaUsage(
    req: DescribeWorkspaceQuotaUsageRequest,
    cb?: (error: string, rep: DescribeWorkspaceQuotaUsageResponse) => void
  ): Promise<DescribeWorkspaceQuotaUsageResponse> {
    return this.request("DescribeWorkspaceQuotaUsage", req, cb)
  }

  /**
   * 根据服务id删除模型服务
   */
  async DeleteModelService(
    req: DeleteModelServiceRequest,
    cb?: (error: string, rep: DeleteModelServiceResponse) => void
  ): Promise<DeleteModelServiceResponse> {
    return this.request("DeleteModelService", req, cb)
  }

  /**
   * 停止模型训练任务
   */
  async StopTrainingTask(
    req: StopTrainingTaskRequest,
    cb?: (error: string, rep: StopTrainingTaskResponse) => void
  ): Promise<StopTrainingTaskResponse> {
    return this.request("StopTrainingTask", req, cb)
  }

  /**
   * 修改角色下用户的授权状态
   */
  async ModifyRoleUserGrant(
    req: ModifyRoleUserGrantRequest,
    cb?: (error: string, rep: ModifyRoleUserGrantResponse) => void
  ): Promise<ModifyRoleUserGrantResponse> {
    return this.request("ModifyRoleUserGrant", req, cb)
  }

  /**
   * 停止Notebook
   */
  async StopNotebook(
    req: StopNotebookRequest,
    cb?: (error: string, rep: StopNotebookResponse) => void
  ): Promise<StopNotebookResponse> {
    return this.request("StopNotebook", req, cb)
  }

  /**
   * 展示服务的调用信息
   */
  async DescribeModelServiceCallInfo(
    req: DescribeModelServiceCallInfoRequest,
    cb?: (error: string, rep: DescribeModelServiceCallInfoResponse) => void
  ): Promise<DescribeModelServiceCallInfoResponse> {
    return this.request("DescribeModelServiceCallInfo", req, cb)
  }

  /**
   * 训练任务列表
   */
  async DescribeTrainingTasks(
    req: DescribeTrainingTasksRequest,
    cb?: (error: string, rep: DescribeTrainingTasksResponse) => void
  ): Promise<DescribeTrainingTasksResponse> {
    return this.request("DescribeTrainingTasks", req, cb)
  }

  /**
   * 获取任务式建模训练任务，Notebook，在线服务和批量预测任务的事件API
   */
  async DescribeEvents(
    req: DescribeEventsRequest,
    cb?: (error: string, rep: DescribeEventsResponse) => void
  ): Promise<DescribeEventsResponse> {
    return this.request("DescribeEvents", req, cb)
  }

  /**
   * 获取内置镜像列表
   */
  async DescribeBuildInImages(
    req: DescribeBuildInImagesRequest,
    cb?: (error: string, rep: DescribeBuildInImagesResponse) => void
  ): Promise<DescribeBuildInImagesResponse> {
    return this.request("DescribeBuildInImages", req, cb)
  }

  /**
   * 启动Notebook
   */
  async StartNotebook(
    req: StartNotebookRequest,
    cb?: (error: string, rep: StartNotebookResponse) => void
  ): Promise<StartNotebookResponse> {
    return this.request("StartNotebook", req, cb)
  }

  /**
   * 删除一个 AuthToken
   */
  async DeleteModelServiceAuthToken(
    req: DeleteModelServiceAuthTokenRequest,
    cb?: (error: string, rep: DeleteModelServiceAuthTokenResponse) => void
  ): Promise<DeleteModelServiceAuthTokenResponse> {
    return this.request("DeleteModelServiceAuthToken", req, cb)
  }

  /**
   * 获取数据源详情
   */
  async DescribeDataSource(
    req: DescribeDataSourceRequest,
    cb?: (error: string, rep: DescribeDataSourceResponse) => void
  ): Promise<DescribeDataSourceResponse> {
    return this.request("DescribeDataSource", req, cb)
  }

  /**
   * 删除模型
   */
  async DeleteTrainingModel(
    req: DeleteTrainingModelRequest,
    cb?: (error: string, rep: DeleteTrainingModelResponse) => void
  ): Promise<DeleteTrainingModelResponse> {
    return this.request("DeleteTrainingModel", req, cb)
  }

  /**
   * 本接口（DescribeAnnotatedTaskList）用于查询用户标注任务详细信息列表；支持各种过滤条件；
   */
  async DescribeAnnotatedTaskList(
    req: DescribeAnnotatedTaskListRequest,
    cb?: (error: string, rep: DescribeAnnotatedTaskListResponse) => void
  ): Promise<DescribeAnnotatedTaskListResponse> {
    return this.request("DescribeAnnotatedTaskList", req, cb)
  }

  /**
   * 启动模型训练任务
   */
  async StartTrainingTask(
    req: StartTrainingTaskRequest,
    cb?: (error: string, rep: StartTrainingTaskResponse) => void
  ): Promise<StartTrainingTaskResponse> {
    return this.request("StartTrainingTask", req, cb)
  }

  /**
   * 创建数据集
   */
  async CreateDataset(
    req: CreateDatasetRequest,
    cb?: (error: string, rep: CreateDatasetResponse) => void
  ): Promise<CreateDatasetResponse> {
    return this.request("CreateDataset", req, cb)
  }

  /**
   * 更新数据源
   */
  async UpdateDataSource(
    req: UpdateDataSourceRequest,
    cb?: (error: string, rep: UpdateDataSourceResponse) => void
  ): Promise<UpdateDataSourceResponse> {
    return this.request("UpdateDataSource", req, cb)
  }

  /**
   * 上报训练自定义指标
   */
  async PushTrainingMetrics(
    req: PushTrainingMetricsRequest,
    cb?: (error: string, rep: PushTrainingMetricsResponse) => void
  ): Promise<PushTrainingMetricsResponse> {
    return this.request("PushTrainingMetrics", req, cb)
  }

  /**
   * 创建挂载限制
   */
  async UpdateMountLimit(
    req: UpdateMountLimitRequest,
    cb?: (error: string, rep: UpdateMountLimitResponse) => void
  ): Promise<UpdateMountLimitResponse> {
    return this.request("UpdateMountLimit", req, cb)
  }

  /**
   * 模型版本列表
   */
  async DescribeTrainingModelVersions(
    req: DescribeTrainingModelVersionsRequest,
    cb?: (error: string, rep: DescribeTrainingModelVersionsResponse) => void
  ): Promise<DescribeTrainingModelVersionsResponse> {
    return this.request("DescribeTrainingModelVersions", req, cb)
  }

  /**
   * 用于创建、发布一个新的模型服务
   */
  async CreateModelService(
    req: CreateModelServiceRequest,
    cb?: (error: string, rep: CreateModelServiceResponse) => void
  ): Promise<CreateModelServiceResponse> {
    return this.request("CreateModelService", req, cb)
  }

  /**
   * 更新子账号Linux用户信息
   */
  async UpdateSubAccountLinuxUserInfo(
    req: UpdateSubAccountLinuxUserInfoRequest,
    cb?: (error: string, rep: UpdateSubAccountLinuxUserInfoResponse) => void
  ): Promise<UpdateSubAccountLinuxUserInfoResponse> {
    return this.request("UpdateSubAccountLinuxUserInfo", req, cb)
  }

  /**
   * 获取任务式建模训练任务，Notebook，在线服务和批量预测任务的日志API
   */
  async DescribeLogs(
    req: DescribeLogsRequest,
    cb?: (error: string, rep: DescribeLogsResponse) => void
  ): Promise<DescribeLogsResponse> {
    return this.request("DescribeLogs", req, cb)
  }

  /**
   * 查询数据集列表
   */
  async DescribeDatasets(
    req: DescribeDatasetsRequest,
    cb?: (error: string, rep: DescribeDatasetsResponse) => void
  ): Promise<DescribeDatasetsResponse> {
    return this.request("DescribeDatasets", req, cb)
  }

  /**
   * 查询资源组节点运行中的任务
   */
  async DescribeBillingResourceInstanceRunningJobs(
    req: DescribeBillingResourceInstanceRunningJobsRequest,
    cb?: (error: string, rep: DescribeBillingResourceInstanceRunningJobsResponse) => void
  ): Promise<DescribeBillingResourceInstanceRunningJobsResponse> {
    return this.request("DescribeBillingResourceInstanceRunningJobs", req, cb)
  }

  /**
   * 用于更新模型服务
   */
  async ModifyModelService(
    req: ModifyModelServiceRequest,
    cb?: (error: string, rep: ModifyModelServiceResponse) => void
  ): Promise<ModifyModelServiceResponse> {
    return this.request("ModifyModelService", req, cb)
  }

  /**
   * 列取访问权限规则列表
   */
  async DescribeAccessRules(
    req: DescribeAccessRulesRequest,
    cb?: (error: string, rep: DescribeAccessRulesResponse) => void
  ): Promise<DescribeAccessRulesResponse> {
    return this.request("DescribeAccessRules", req, cb)
  }

  /**
   * 训练任务详情
   */
  async DescribeTrainingTask(
    req: DescribeTrainingTaskRequest,
    cb?: (error: string, rep: DescribeTrainingTaskResponse) => void
  ): Promise<DescribeTrainingTaskResponse> {
    return this.request("DescribeTrainingTask", req, cb)
  }

  /**
   * 该接口用于查询内置镜像列表
   */
  async DescribePresetImageList(
    req: DescribePresetImageListRequest,
    cb?: (error: string, rep: DescribePresetImageListResponse) => void
  ): Promise<DescribePresetImageListResponse> {
    return this.request("DescribePresetImageList", req, cb)
  }

  /**
   * 修改Notebook
   */
  async ModifyNotebook(
    req: ModifyNotebookRequest,
    cb?: (error: string, rep: ModifyNotebookResponse) => void
  ): Promise<ModifyNotebookResponse> {
    return this.request("ModifyNotebook", req, cb)
  }

  /**
   * 查询资源组列表
   */
  async DescribeBillingResourceGroups(
    req: DescribeBillingResourceGroupsRequest,
    cb?: (error: string, rep: DescribeBillingResourceGroupsResponse) => void
  ): Promise<DescribeBillingResourceGroupsResponse> {
    return this.request("DescribeBillingResourceGroups", req, cb)
  }

  /**
   * 列举在线推理服务组
   */
  async DescribeModelServiceGroups(
    req: DescribeModelServiceGroupsRequest,
    cb?: (error: string, rep: DescribeModelServiceGroupsResponse) => void
  ): Promise<DescribeModelServiceGroupsResponse> {
    return this.request("DescribeModelServiceGroups", req, cb)
  }

  /**
   * 删除任务式建模训练任务，Notebook，在线服务和批量预测任务日志导出任务API
   */
  async DeleteExport(
    req: DeleteExportRequest,
    cb?: (error: string, rep: DeleteExportResponse) => void
  ): Promise<DeleteExportResponse> {
    return this.request("DeleteExport", req, cb)
  }

  /**
   * 获取单个训练任务实例的登录链接
   */
  async DescribeTrainingTaskPodUrl(
    req: DescribeTrainingTaskPodUrlRequest,
    cb?: (error: string, rep: DescribeTrainingTaskPodUrlResponse) => void
  ): Promise<DescribeTrainingTaskPodUrlResponse> {
    return this.request("DescribeTrainingTaskPodUrl", req, cb)
  }

  /**
   * 批量查询子账号Linux用户信息
   */
  async DescribeSubAccountLinuxUserInfos(
    req: DescribeSubAccountLinuxUserInfosRequest,
    cb?: (error: string, rep: DescribeSubAccountLinuxUserInfosResponse) => void
  ): Promise<DescribeSubAccountLinuxUserInfosResponse> {
    return this.request("DescribeSubAccountLinuxUserInfos", req, cb)
  }

  /**
   * 获取挂载限制列表
   */
  async DescribeMountLimits(
    req: DescribeMountLimitsRequest,
    cb?: (error: string, rep: DescribeMountLimitsResponse) => void
  ): Promise<DescribeMountLimitsResponse> {
    return this.request("DescribeMountLimits", req, cb)
  }

  /**
   * 创建自定义角色
   */
  async CreateRole(
    req: CreateRoleRequest,
    cb?: (error: string, rep: CreateRoleResponse) => void
  ): Promise<CreateRoleResponse> {
    return this.request("CreateRole", req, cb)
  }

  /**
   * 删除数据集
   */
  async DeleteDataset(
    req: DeleteDatasetRequest,
    cb?: (error: string, rep: DeleteDatasetResponse) => void
  ): Promise<DeleteDatasetResponse> {
    return this.request("DeleteDataset", req, cb)
  }

  /**
   * 创建模型训练任务
   */
  async CreateTrainingTask(
    req: CreateTrainingTaskRequest,
    cb?: (error: string, rep: CreateTrainingTaskResponse) => void
  ): Promise<CreateTrainingTaskResponse> {
    return this.request("CreateTrainingTask", req, cb)
  }

  /**
   * 更新空间用户列表
   */
  async ModifyWorkspaceMembers(
    req: ModifyWorkspaceMembersRequest,
    cb?: (error: string, rep: ModifyWorkspaceMembersResponse) => void
  ): Promise<ModifyWorkspaceMembersResponse> {
    return this.request("ModifyWorkspaceMembers", req, cb)
  }

  /**
   * 修改服务鉴权配置
   */
  async ModifyModelServiceAuthorization(
    req: ModifyModelServiceAuthorizationRequest,
    cb?: (error: string, rep: ModifyModelServiceAuthorizationResponse) => void
  ): Promise<ModifyModelServiceAuthorizationResponse> {
    return this.request("ModifyModelServiceAuthorization", req, cb)
  }

  /**
   * 训练任务pod列表
   */
  async DescribeTrainingTaskPods(
    req: DescribeTrainingTaskPodsRequest,
    cb?: (error: string, rep: DescribeTrainingTaskPodsResponse) => void
  ): Promise<DescribeTrainingTaskPodsResponse> {
    return this.request("DescribeTrainingTaskPods", req, cb)
  }

  /**
   * 查询空间成员列表
   */
  async DescribeWorkspaceMembers(
    req: DescribeWorkspaceMembersRequest,
    cb?: (error: string, rep: DescribeWorkspaceMembersResponse) => void
  ): Promise<DescribeWorkspaceMembersResponse> {
    return this.request("DescribeWorkspaceMembers", req, cb)
  }

  /**
   * 创建一个 AuthToken
   */
  async CreateModelServiceAuthToken(
    req: CreateModelServiceAuthTokenRequest,
    cb?: (error: string, rep: CreateModelServiceAuthTokenResponse) => void
  ): Promise<CreateModelServiceAuthTokenResponse> {
    return this.request("CreateModelServiceAuthToken", req, cb)
  }

  /**
   * 更新推理服务组流量分配
   */
  async ModifyServiceGroupWeights(
    req: ModifyServiceGroupWeightsRequest,
    cb?: (error: string, rep: ModifyServiceGroupWeightsResponse) => void
  ): Promise<ModifyServiceGroupWeightsResponse> {
    return this.request("ModifyServiceGroupWeights", req, cb)
  }

  /**
   * 用于查询模型服务能否开启热更新
   */
  async DescribeModelServiceHotUpdated(
    req: DescribeModelServiceHotUpdatedRequest,
    cb?: (error: string, rep: DescribeModelServiceHotUpdatedResponse) => void
  ): Promise<DescribeModelServiceHotUpdatedResponse> {
    return this.request("DescribeModelServiceHotUpdated", req, cb)
  }

  /**
   * 保存镜像
   */
  async CreateNotebookImage(
    req: CreateNotebookImageRequest,
    cb?: (error: string, rep: CreateNotebookImageResponse) => void
  ): Promise<CreateNotebookImageResponse> {
    return this.request("CreateNotebookImage", req, cb)
  }

  /**
   * 获取角色详情
   */
  async DescribeRole(
    req: DescribeRoleRequest,
    cb?: (error: string, rep: DescribeRoleResponse) => void
  ): Promise<DescribeRoleResponse> {
    return this.request("DescribeRole", req, cb)
  }

  /**
   * 删除训练任务
   */
  async DeleteTrainingTask(
    req: DeleteTrainingTaskRequest,
    cb?: (error: string, rep: DeleteTrainingTaskResponse) => void
  ): Promise<DeleteTrainingTaskResponse> {
    return this.request("DeleteTrainingTask", req, cb)
  }

  /**
   * 查询平台镜像信息
   */
  async DescribePlatformImages(
    req: DescribePlatformImagesRequest,
    cb?: (error: string, rep: DescribePlatformImagesResponse) => void
  ): Promise<DescribePlatformImagesResponse> {
    return this.request("DescribePlatformImages", req, cb)
  }

  /**
   * 修改自定义角色
   */
  async ModifyRole(
    req: ModifyRoleRequest,
    cb?: (error: string, rep: ModifyRoleResponse) => void
  ): Promise<ModifyRoleResponse> {
    return this.request("ModifyRole", req, cb)
  }

  /**
   * 查询资源组节点列表
   */
  async DescribeBillingResourceGroup(
    req: DescribeBillingResourceGroupRequest,
    cb?: (error: string, rep: DescribeBillingResourceGroupResponse) => void
  ): Promise<DescribeBillingResourceGroupResponse> {
    return this.request("DescribeBillingResourceGroup", req, cb)
  }

  /**
   * 删除模型版本
   */
  async DeleteTrainingModelVersion(
    req: DeleteTrainingModelVersionRequest,
    cb?: (error: string, rep: DeleteTrainingModelVersionResponse) => void
  ): Promise<DeleteTrainingModelVersionResponse> {
    return this.request("DeleteTrainingModelVersion", req, cb)
  }

  /**
     * 已废弃，收敛到统一接口

查询推理镜像模板
     */
  async DescribeInferTemplates(
    req?: DescribeInferTemplatesRequest,
    cb?: (error: string, rep: DescribeInferTemplatesResponse) => void
  ): Promise<DescribeInferTemplatesResponse> {
    return this.request("DescribeInferTemplates", req, cb)
  }
}
