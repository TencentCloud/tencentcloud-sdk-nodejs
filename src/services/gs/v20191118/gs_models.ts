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

/**
 * DescribeAndroidInstanceTasksStatus返回参数结构体
 */
export interface DescribeAndroidInstanceTasksStatusResponse {
  /**
   * 任务状态集合
   */
  TaskStatusSet?: Array<AndroidInstanceTaskStatus>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ExecuteCommandOnAndroidInstances返回参数结构体
 */
export interface ExecuteCommandOnAndroidInstancesResponse {
  /**
   * 任务集合，可异步查询任务状态
   */
  TaskSet?: Array<AndroidInstanceTask>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * StartPublishStreamToCSS返回参数结构体
 */
export interface StartPublishStreamToCSSResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * StartAndroidInstances请求参数结构体
 */
export interface StartAndroidInstancesRequest {
  /**
   * 实例ID
   */
  AndroidInstanceIds: Array<string>
}

/**
 * CreateSession请求参数结构体
 */
export interface CreateSessionRequest {
  /**
   * 唯一用户身份标识，由业务方自定义，平台不予理解。（可根据业务需要决定使用用户的唯一身份标识或是使用时间戳随机生成；在用户重连时应保持UserId不变）
   */
  UserId: string
  /**
   * 【已废弃】只在TrylockWorker时生效
   */
  GameId: string
  /**
   * 【已废弃】只在TrylockWorker时生效
   */
  GameRegion?: string
  /**
   * 游戏参数
   */
  GameParas?: string
  /**
   * 客户端session信息，从JSSDK请求中获得。特殊的，当 RunMode 参数为 RunWithoutClient 时，该字段可以为空
   */
  ClientSession?: string
  /**
   * 分辨率,，可设置为1080p或720p或1920x1080格式
   */
  Resolution?: string
  /**
   * 背景图url，格式为png或jpeg，宽高1920*1080
   */
  ImageUrl?: string
  /**
   * 【已废弃】
   */
  SetNo?: number
  /**
   * 【已废弃】
   */
  Bitrate?: number
  /**
   * 单位Mbps，动态调整最大码率建议值，会按实际情况调整
   */
  MaxBitrate?: number
  /**
   * 单位Mbps，动态调整最小码率建议值，会按实际情况调整
   */
  MinBitrate?: number
  /**
   * 帧率，可设置为30、45、60、90、120、144
   */
  Fps?: number
  /**
   * 【必选】用户IP，用户客户端的公网IP，用于就近调度，不填将严重影响用户体验
   */
  UserIp?: string
  /**
   * 【已废弃】优化项，便于客户灰度开启新的优化项，默认为0
   */
  Optimization?: number
  /**
   * 【互动云游】游戏主机用户ID
   */
  HostUserId?: string
  /**
   * 【互动云游】角色；Player表示玩家；Viewer表示观察者
   */
  Role?: string
  /**
   * 游戏相关参数
   */
  GameContext?: string
  /**
   * 云端运行模式。
RunWithoutClient：允许无客户端连接的情况下仍保持云端 App 运行
默认值（空）：要求必须有客户端连接才会保持云端 App 运行。
   */
  RunMode?: string
}

/**
 * SyncExecuteCommandOnAndroidInstances请求参数结构体
 */
export interface SyncExecuteCommandOnAndroidInstancesRequest {
  /**
   * 安卓实例 ID 列表
   */
  AndroidInstanceIds: Array<string>
  /**
   * shell 命令，必须是1秒内能自动结束的命令
   */
  Command: string
}

/**
 * UninstallAndroidInstancesApp返回参数结构体
 */
export interface UninstallAndroidInstancesAppResponse {
  /**
   * 任务集合
   */
  TaskSet?: Array<AndroidInstanceTask>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * StopAndroidInstancesApp返回参数结构体
 */
export interface StopAndroidInstancesAppResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeAndroidInstanceLabels返回参数结构体
 */
export interface DescribeAndroidInstanceLabelsResponse {
  /**
   * 安卓实例标签总数
   */
  Total?: number
  /**
   * 安卓实例标签列表
   */
  Labels?: Array<AndroidInstanceLabel>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 安卓应用
 */
export interface AndroidApp {
  /**
   * 安卓应用 Id
   */
  AndroidAppId?: string
  /**
   * 安卓应用名称
   */
  Name?: string
  /**
   * 安卓应用状态（上架、下架）
   */
  State?: string
  /**
   * 安卓应用版本列表
   */
  AndroidAppVersionInfo?: Array<AndroidAppVersionInfo>
  /**
   * 安卓应用创建时间
   */
  CreateTime?: string
}

/**
 * DescribeAndroidApps返回参数结构体
 */
export interface DescribeAndroidAppsResponse {
  /**
   * 安卓应用列表
   */
  Apps?: Array<AndroidApp>
  /**
   * 安卓应用列表长度
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * StopAndroidInstancesApp请求参数结构体
 */
export interface StopAndroidInstancesAppRequest {
  /**
   * 实例 ID 列表
   */
  AndroidInstanceIds: Array<string>
  /**
   * 应用包名
   */
  PackageName: string
}

/**
 * ModifyAndroidInstancesLabels请求参数结构体
 */
export interface ModifyAndroidInstancesLabelsRequest {
  /**
   * 安卓实例 ID 列表
   */
  AndroidInstanceIds: Array<string>
  /**
   * 安卓实例标签列表
   */
  AndroidInstanceLabels: Array<AndroidInstanceLabel>
  /**
   * 操作类型。ADD：标签键不存在的添加新标签，标签键存在的将覆盖原有标签REMOVE：根据标签键删除标签REPLACE：使用请求标签列表替换原来所有标签CLEAR：清除所有标签
   */
  Operation: string
}

/**
 * 同步安卓实例镜像信息
 */
export interface SyncAndroidInstanceImage {
  /**
   * 镜像 ID
   */
  AndroidInstanceImageId?: string
  /**
   * 镜像可用区
   */
  AndroidInstanceImageZone?: string
}

/**
 * 安卓实例标签
 */
export interface AndroidInstanceLabel {
  /**
   * 标签键
   */
  Key: string
  /**
   * 标签值
   */
  Value: string
}

/**
 * DeleteAndroidInstanceImages返回参数结构体
 */
export interface DeleteAndroidInstanceImagesResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * StartPublishStream请求参数结构体
 */
export interface StartPublishStreamRequest {
  /**
   * 唯一用户身份标识，由业务方自定义，平台不予理解。（可根据业务需要决定使用用户的唯一身份标识或是使用时间戳随机生成；在用户重连时应保持UserId不变）
   */
  UserId: string
  /**
   * 推流地址，仅支持rtmp协议
   */
  PublishUrl: string
}

/**
 * CreateAndroidInstanceImage返回参数结构体
 */
export interface CreateAndroidInstanceImageResponse {
  /**
   * 安卓实例镜像 ID
   */
  AndroidInstanceImageId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyAndroidInstanceResolution返回参数结构体
 */
export interface ModifyAndroidInstanceResolutionResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteAndroidInstanceImages请求参数结构体
 */
export interface DeleteAndroidInstanceImagesRequest {
  /**
   * 镜像 ID 列表
   */
  AndroidInstanceImageIds: Array<string>
}

/**
 * DescribeAndroidInstanceApps返回参数结构体
 */
export interface DescribeAndroidInstanceAppsResponse {
  /**
   * 安卓应用列表
   */
  Apps?: Array<AndroidInstanceAppInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateAndroidInstanceSSH返回参数结构体
 */
export interface CreateAndroidInstanceSSHResponse {
  /**
   * 连接私钥，需要保存为文件形式，例如 private_key.pem
   */
  PrivateKey?: string
  /**
   * 用户名称
   */
  UserName?: string
  /**
   * 连接地址
   */
  HostName?: string
  /**
   * 连接端口
   */
  Port?: number
  /**
   * 连接参考命令
   */
  ConnectCommand?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ResetAndroidInstances请求参数结构体
 */
export interface ResetAndroidInstancesRequest {
  /**
   * 实例ID列表
   */
  AndroidInstanceIds: Array<string>
  /**
   * 指定有效的镜像 ID。
默认取值：默认使用当前镜像。
   */
  AndroidInstanceImageId?: string
  /**
   * 重置模式。在 AndroidInstanceImageId 不为空时才生效。

CleanData：默认选项，清理系统属性和用户数据
KeepSystemProperties：只保留系统属性
KeepData: 保留系统属性和用户数据
   */
  Mode?: string
}

/**
 * UploadFileToAndroidInstances请求参数结构体
 */
export interface UploadFileToAndroidInstancesRequest {
  /**
   * 安卓实例 ID 列表
   */
  AndroidInstanceIds: Array<string>
  /**
   * 文件下载 URL
   */
  FileURL: string
}

/**
 * SaveGameArchive返回参数结构体
 */
export interface SaveGameArchiveResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ConnectAndroidInstance请求参数结构体
 */
export interface ConnectAndroidInstanceRequest {
  /**
   * 用户Session信息
   */
  ClientSession: string
  /**
   * 实例ID
   */
  AndroidInstanceId: string
  /**
   * 用户IP，用户客户端的公网IP，用于选择最佳网络链路
   */
  UserIp: string
}

/**
 * CopyAndroidInstance请求参数结构体
 */
export interface CopyAndroidInstanceRequest {
  /**
   * 源安卓实例 ID
   */
  SourceAndroidInstanceId: string
  /**
   * 目的安卓实例 ID
   */
  TargetAndroidInstanceId: string
  /**
   * 包含的路径，支持仅含一个通配符*，通配符不能出现在路径开始
   */
  Includes?: Array<string>
  /**
   * 需要排除路径，支持仅含一个通配符*，通配符不能出现在路径开始
   */
  Excludes?: Array<string>
}

/**
 * SyncExecuteCommandOnAndroidInstances返回参数结构体
 */
export interface SyncExecuteCommandOnAndroidInstancesResponse {
  /**
   * 命令执行结果列表
   */
  CommandResults?: Array<SyncExecuteCommandResult>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * StartAndroidInstancesApp请求参数结构体
 */
export interface StartAndroidInstancesAppRequest {
  /**
   * 实例 ID 列表
   */
  AndroidInstanceIds: Array<string>
  /**
   * 应用包名
   */
  PackageName: string
}

/**
 * ModifyAndroidInstancesUserId请求参数结构体
 */
export interface ModifyAndroidInstancesUserIdRequest {
  /**
   * 安卓实例 ID 列表
   */
  AndroidInstanceIds: Array<string>
  /**
   * 用户 ID
   */
  UserId?: string
}

/**
 * StopPublishStream返回参数结构体
 */
export interface StopPublishStreamResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * StartAndroidInstances返回参数结构体
 */
export interface StartAndroidInstancesResponse {
  /**
   * 任务集合
   */
  TaskSet?: Array<AndroidInstanceTask>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteAndroidInstanceLabel请求参数结构体
 */
export interface DeleteAndroidInstanceLabelRequest {
  /**
   * 标签键
   */
  Key: string
  /**
   * 标签值
   */
  Value?: string
}

/**
 * ModifyAndroidInstancesUserId返回参数结构体
 */
export interface ModifyAndroidInstancesUserIdResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * InstallAndroidInstancesApp请求参数结构体
 */
export interface InstallAndroidInstancesAppRequest {
  /**
   * 实例ID
   */
  AndroidInstanceIds: Array<string>
  /**
   * 应用ID
   */
  AndroidAppId: string
  /**
   * 应用版本
   */
  AndroidAppVersion?: string
}

/**
 * UninstallAndroidInstancesApp请求参数结构体
 */
export interface UninstallAndroidInstancesAppRequest {
  /**
   * 实例ID
   */
  AndroidInstanceIds: Array<string>
  /**
   * 应用ID
   */
  AndroidAppId?: string
  /**
   * 包名
   */
  PackageName?: string
}

/**
 * DestroyAndroidInstances请求参数结构体
 */
export interface DestroyAndroidInstancesRequest {
  /**
   * 安卓实例 ID 列表
   */
  AndroidInstanceIds: Array<string>
}

/**
 * CreateAndroidInstanceWebShell返回参数结构体
 */
export interface CreateAndroidInstanceWebShellResponse {
  /**
   * 鉴权密钥
   */
  Key?: string
  /**
   * 连接地址
   */
  Address?: string
  /**
   * 连接区域
   */
  Zone?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeAndroidInstanceImages返回参数结构体
 */
export interface DescribeAndroidInstanceImagesResponse {
  /**
   * 镜像总数
   */
  Total?: number
  /**
   * 镜像列表
   */
  AndroidInstanceImages?: Array<AndroidInstanceImage>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyAndroidInstanceInformation请求参数结构体
 */
export interface ModifyAndroidInstanceInformationRequest {
  /**
   * 安卓实例 ID
   */
  AndroidInstanceId: string
  /**
   * 实例名称
   */
  Name?: string
}

/**
 * StopPublishStream请求参数结构体
 */
export interface StopPublishStreamRequest {
  /**
   * 唯一用户身份标识，由业务方自定义，平台不予理解。（可根据业务需要决定使用用户的唯一身份标识或是使用时间戳随机生成；在用户重连时应保持UserId不变）
   */
  UserId: string
}

/**
 * 同步执行命令结果
 */
export interface SyncExecuteCommandResult {
  /**
   * 实例ID
   */
  InstanceId?: string
  /**
   * 命令执行输出内容
   */
  Output?: string
  /**
   * 命令执行结果
   */
  Status?: string
}

/**
 * RestartAndroidInstancesApp返回参数结构体
 */
export interface RestartAndroidInstancesAppResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeAndroidInstanceTasksStatus请求参数结构体
 */
export interface DescribeAndroidInstanceTasksStatusRequest {
  /**
   * 任务ID列表
   */
  TaskIds: Array<string>
}

/**
 * DescribeInstancesCount返回参数结构体
 */
export interface DescribeInstancesCountResponse {
  /**
   * 客户的实例总数
   */
  Total?: number
  /**
   * 客户的实例运行数
   */
  Running?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ExecuteCommandOnAndroidInstances请求参数结构体
 */
export interface ExecuteCommandOnAndroidInstancesRequest {
  /**
   * 安卓实例 ID 列表
   */
  AndroidInstanceIds: Array<string>
  /**
   * shell 命令
   */
  Command: string
}

/**
 * ModifyAndroidInstanceInformation返回参数结构体
 */
export interface ModifyAndroidInstanceInformationResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DestroyAndroidInstances返回参数结构体
 */
export interface DestroyAndroidInstancesResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * SaveGameArchive请求参数结构体
 */
export interface SaveGameArchiveRequest {
  /**
   * 游戏用户ID
   */
  UserId: string
  /**
   * 游戏ID
   */
  GameId: string
}

/**
 * SwitchGameArchive返回参数结构体
 */
export interface SwitchGameArchiveResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * InstallAndroidInstancesApp返回参数结构体
 */
export interface InstallAndroidInstancesAppResponse {
  /**
   * 任务集合
   */
  TaskSet?: Array<AndroidInstanceTask>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 安卓实例任务信息
 */
export interface AndroidInstanceTask {
  /**
   * 任务ID
   */
  TaskId?: string
  /**
   * 实例ID
   */
  AndroidInstanceId?: string
}

/**
 * ConnectAndroidInstance返回参数结构体
 */
export interface ConnectAndroidInstanceResponse {
  /**
   * 服务端session信息
   */
  ServerSession?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeAndroidInstances请求参数结构体
 */
export interface DescribeAndroidInstancesRequest {
  /**
   * 偏移量，默认为 0
   */
  Offset?: number
  /**
   * 限制量，默认为20，最大值为100
   */
  Limit?: number
  /**
   * 实例ID。每次请求的实例的上限为100。
   */
  AndroidInstanceIds?: Array<string>
  /**
   * 实例地域。目前还不支持按地域进行聚合查询
   */
  AndroidInstanceRegion?: string
  /**
   * 实例可用区
   */
  AndroidInstanceZone?: string
  /**
   * 实例分组 ID 列表
   */
  AndroidInstanceGroupIds?: Array<string>
  /**
   * 实例标签选择器
   */
  LabelSelector?: Array<LabelRequirement>
  /**
   * 字段过滤器。Filter 的 Name 有以下值：
Name：实例名称
UserId：实例用户ID
   */
  Filters?: Array<Filter>
}

/**
 * DescribeAndroidInstances返回参数结构体
 */
export interface DescribeAndroidInstancesResponse {
  /**
   * 实例总数量
   */
  TotalCount?: number
  /**
   * 实例列表
   */
  AndroidInstances?: Array<AndroidInstance>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * SyncAndroidInstanceImage请求参数结构体
 */
export interface SyncAndroidInstanceImageRequest {
  /**
   * 安卓实例镜像 ID
   */
  AndroidInstanceImageId: string
  /**
   * 目的同步可用区列表
   */
  DestinationZones: Array<string>
}

/**
 * ModifyAndroidInstanceResolution请求参数结构体
 */
export interface ModifyAndroidInstanceResolutionRequest {
  /**
   * 安卓实例 ID
   */
  AndroidInstanceId: string
  /**
   * 分辨率宽度
   */
  Width: number
  /**
   * 分辨率高度
   */
  Height: number
  /**
   * 每英寸像素点。如果不填，系统将会计算一个合理的数值。修改 DPI 可能会导致 App 异常退出，请谨慎使用！
   */
  DPI?: number
}

/**
 * 安卓应用版本信息
 */
export interface AndroidAppVersionInfo {
  /**
   * 安卓应用版本
   */
  AndroidAppVersion?: string
  /**
   * 安卓应用版本创建状态（NORMAL：无、UPLOADING：上传中、
CREATING： 创建中、
CREATE_FAIL：创建失败、CREATE_SUCCESS：创建成功）
   */
  State?: string
  /**
   * 安卓应用版本创建时间
   */
  CreateTime?: string
}

/**
 * StartAndroidInstancesApp返回参数结构体
 */
export interface StartAndroidInstancesAppResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * SwitchGameArchive请求参数结构体
 */
export interface SwitchGameArchiveRequest {
  /**
   * 游戏用户ID
   */
  UserId: string
  /**
   * 游戏ID
   */
  GameId: string
  /**
   * 游戏存档Url
   */
  GameArchiveUrl?: string
  /**
   * 游戏相关参数
   */
  GameContext?: string
}

/**
 * StartPublishStreamToCSS请求参数结构体
 */
export interface StartPublishStreamToCSSRequest {
  /**
   * 唯一用户身份标识，由业务方自定义，平台不予理解。（可根据业务需要决定使用用户的唯一身份标识或是使用时间戳随机生成；在用户重连时应保持UserId不变）
   */
  UserId: string
  /**
   * 推流参数，推流时携带自定义参数。
   */
  PublishStreamArgs?: string
}

/**
 * 过滤
 */
export interface Filter {
  /**
   * 字段名
   */
  Name: string
  /**
   * 字段值列表
   */
  Values: Array<string>
}

/**
 * ResetAndroidInstances返回参数结构体
 */
export interface ResetAndroidInstancesResponse {
  /**
   * 任务集合
   */
  TaskSet?: Array<AndroidInstanceTask>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * RestartAndroidInstancesApp请求参数结构体
 */
export interface RestartAndroidInstancesAppRequest {
  /**
   * 实例 ID 列表
   */
  AndroidInstanceIds: Array<string>
  /**
   * 应用包名
   */
  PackageName: string
}

/**
 * DescribeAndroidApps请求参数结构体
 */
export interface DescribeAndroidAppsRequest {
  /**
   * 分页偏移
   */
  Offset?: number
  /**
   * 每页数量
   */
  Limit?: number
  /**
   * 应用ID数组
   */
  AndroidAppIds?: Array<string>
}

/**
 * StopGame请求参数结构体
 */
export interface StopGameRequest {
  /**
   * 唯一用户身份标识，由业务方自定义，平台不予理解。（可根据业务需要决定使用用户的唯一身份标识或是使用时间戳随机生成；在用户重连时应保持UserId不变）
   */
  UserId: string
  /**
   * 【多人游戏】游戏主机用户ID
   */
  HostUserId?: string
}

/**
 * RebootAndroidInstances返回参数结构体
 */
export interface RebootAndroidInstancesResponse {
  /**
   * 任务集合
   */
  TaskSet?: Array<AndroidInstanceTask>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * TrylockWorker返回参数结构体
 */
export interface TrylockWorkerResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateAndroidInstanceWebShell请求参数结构体
 */
export interface CreateAndroidInstanceWebShellRequest {
  /**
   * 实例 ID
   */
  AndroidInstanceId: string
}

/**
 * ModifyAndroidInstancesLabels返回参数结构体
 */
export interface ModifyAndroidInstancesLabelsResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeAndroidInstanceLabels请求参数结构体
 */
export interface DescribeAndroidInstanceLabelsRequest {
  /**
   * 标签键列表
   */
  Keys?: Array<string>
  /**
   * 标签值列表
   */
  Values?: Array<string>
  /**
   * 偏移量，默认为 0
   */
  Offset?: number
  /**
   * 限制量，默认为20，最大值为100
   */
  Limit?: number
}

/**
 * CopyAndroidInstance返回参数结构体
 */
export interface CopyAndroidInstanceResponse {
  /**
   * 任务ID
   */
  TaskId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteAndroidInstanceLabel返回参数结构体
 */
export interface DeleteAndroidInstanceLabelResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeAndroidInstanceImages请求参数结构体
 */
export interface DescribeAndroidInstanceImagesRequest {
  /**
   * 镜像 ID 列表
   */
  AndroidInstanceImageIds?: Array<string>
  /**
   * 偏移量，默认为0
   */
  Offset?: number
  /**
   * 限制量，默认为20，最大值为100
   */
  Limit?: number
}

/**
 * 安卓实例任务状态信息
 */
export interface AndroidInstanceTaskStatus {
  /**
   * 任务ID
   */
  TaskId?: string
  /**
   * 任务状态：SUCCESS，FAILED，PROCESSING，PENDING,CANCELED
   */
  Status?: string
  /**
   * 实例ID
   */
  AndroidInstanceId?: string
  /**
   * 任务执行结果描述，针对某些任务，可以是可解析的 json
   */
  TaskResult?: string
}

/**
 * UploadFileToAndroidInstances返回参数结构体
 */
export interface UploadFileToAndroidInstancesResponse {
  /**
   * 实例任务集合
   */
  TaskSet?: Array<AndroidInstanceTask>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * SyncAndroidInstanceImage返回参数结构体
 */
export interface SyncAndroidInstanceImageResponse {
  /**
   * 同步安卓实例镜像列表
   */
  SyncAndroidInstanceImages?: Array<SyncAndroidInstanceImage>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateAndroidInstances返回参数结构体
 */
export interface CreateAndroidInstancesResponse {
  /**
   * 安卓实例 ID 列表
   */
  AndroidInstanceIds?: Array<string>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * StopGame返回参数结构体
 */
export interface StopGameResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateAndroidInstanceLabel请求参数结构体
 */
export interface CreateAndroidInstanceLabelRequest {
  /**
   * 标签键
   */
  Key: string
  /**
   * 标签值
   */
  Value?: string
}

/**
 * 安卓实例信息
 */
export interface AndroidInstance {
  /**
   * 实例 ID
   */
  AndroidInstanceId?: string
  /**
   * 实例所在区域
   */
  AndroidInstanceRegion?: string
  /**
   * 实例可用区
   */
  AndroidInstanceZone?: string
  /**
   * 实例状态：INITIALIZING，NORMAL，PROCESSING
   */
  State?: string
  /**
   * 实例规格
   */
  AndroidInstanceType?: string
  /**
   * 实例镜像 ID
   */
  AndroidInstanceImageId?: string
  /**
   * 分辨率宽度
   */
  Width?: number
  /**
   * 分辨率高度
   */
  Height?: number
  /**
   * 宿主机 ID
   */
  HostSerialNumber?: string
  /**
   * 分组 ID
   */
  AndroidInstanceGroupId?: string
  /**
   * 标签列表
   */
  AndroidInstanceLabels?: Array<AndroidInstanceLabel>
  /**
   * 名称
   */
  Name?: string
  /**
   * 用户ID
   */
  UserId?: string
}

/**
 * CreateAndroidInstances请求参数结构体
 */
export interface CreateAndroidInstancesRequest {
  /**
   * 安卓实例可用区。
ap-guangzhou-3：广州三区
ap-shenzhen-1：深圳一区
ap-xian-ec-1：西安一区
ap-hangzhou-ec-1：杭州一区
   */
  Zone: string
  /**
   * 安卓实例类型。
A1：单开
A2：双开
A3：三开
A4：四开
A5：五开
A6：六开
   */
  Type: string
  /**
   * 当 HostSerialNumbers 不为空时，该参数表示每个宿主机要创建的安卓实例数量；
当 HostSerialNumbers 为空时，该参数表示要创建安卓实例的总数量，最大值为 100。
   */
  Number: number
  /**
   * 宿主机 ID 列表。可以指定宿主机 ID 进行创建；也可以不指定由系统自动分配宿主机。
   */
  HostSerialNumbers?: Array<string>
  /**
   * 镜像 ID。如果不填，将使用默认的系统镜像
   */
  ImageId?: string
}

/**
 * CreateAndroidInstanceLabel返回参数结构体
 */
export interface CreateAndroidInstanceLabelResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * StartPublishStream返回参数结构体
 */
export interface StartPublishStreamResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 安卓实例镜像信息
 */
export interface AndroidInstanceImage {
  /**
   * 镜像 ID
   */
  AndroidInstanceImageId?: string
  /**
   * 镜像名称，由业务方自定义，仅用于展示
   */
  AndroidInstanceImageName?: string
  /**
   * 镜像状态
   */
  AndroidInstanceImageState?: string
  /**
   * 镜像可用区
   */
  AndroidInstanceImageZone?: string
}

/**
 * DescribeAndroidInstanceApps请求参数结构体
 */
export interface DescribeAndroidInstanceAppsRequest {
  /**
   * 实例ID
   */
  AndroidInstanceId: string
}

/**
 * DescribeInstancesCount请求参数结构体
 */
export interface DescribeInstancesCountRequest {
  /**
   * 游戏ID
   */
  GameId?: string
  /**
   * 实例分组ID
   */
  GroupId?: string
  /**
   * 游戏区域
   */
  GameRegion?: string
  /**
   * 游戏类型。
MOBILE：手游
PC：默认值，端游
   */
  GameType?: string
}

/**
 * TrylockWorker请求参数结构体
 */
export interface TrylockWorkerRequest {
  /**
   * 唯一用户身份标识，由业务方自定义，平台不予理解。（可根据业务需要决定使用用户的唯一身份标识或是使用时间戳随机生成；在用户重连时应保持UserId不变）
   */
  UserId: string
  /**
   * 游戏ID
   */
  GameId: string
  /**
   * 游戏区域，ap-guangzhou、ap-shanghai、ap-beijing等，如果不为空，优先按照该区域进行调度分配机器
   */
  GameRegion?: string
  /**
   * 【废弃】资源池编号
   */
  SetNo?: number
  /**
   * 【必选】用户IP，用户客户端的公网IP，用于就近调度，不填将严重影响用户体验
   */
  UserIp?: string
  /**
   * 分组ID
   */
  GroupId?: string
}

/**
 * RebootAndroidInstances请求参数结构体
 */
export interface RebootAndroidInstancesRequest {
  /**
   * 实例ID
   */
  AndroidInstanceIds: Array<string>
}

/**
 * CreateSession返回参数结构体
 */
export interface CreateSessionResponse {
  /**
   * 服务端session信息，返回给JSSDK
   */
  ServerSession?: string
  /**
   * 【已废弃】
   */
  RoleNumber?: string
  /**
   * 【互动云游】角色；Player表示玩家；Viewer表示观察者
   */
  Role?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 安卓实例应用信息
 */
export interface AndroidInstanceAppInfo {
  /**
   * 应用id
   */
  AndroidAppId?: string
  /**
   * 应用名称
   */
  Name?: string
  /**
   * 应用版本
   */
  AndroidAppVersion?: string
  /**
   * 应用包名
   */
  PackageName?: string
  /**
   * 应用包版本
   */
  PackageVersion?: string
  /**
   * 应用包标签
   */
  PackageLabel?: string
}

/**
 * StopAndroidInstances请求参数结构体
 */
export interface StopAndroidInstancesRequest {
  /**
   * 实例ID
   */
  AndroidInstanceIds: Array<string>
}

/**
 * 标签要求
 */
export interface LabelRequirement {
  /**
   * 标签键
   */
  Key: string
  /**
   * 运算符类型。
IN：要求对象的标签键 Key 对应的标签值需满足 Values 中的一个
NOT_IN：要求对象的标签键 Key 对应的标签值不满足 Values 中的任何一个
EXISTS：要求对象标签存在标签键 Key
NOT_EXISTS: 要求对象标签不存在标签键 Key
   */
  Operator: string
  /**
   * 标签值列表
   */
  Values?: Array<string>
}

/**
 * CreateAndroidInstanceSSH请求参数结构体
 */
export interface CreateAndroidInstanceSSHRequest {
  /**
   * 实例ID
   */
  AndroidInstanceId: string
  /**
   * 连接过期时间，最长可设置7天
   */
  ExpiredTime: string
}

/**
 * StopAndroidInstances返回参数结构体
 */
export interface StopAndroidInstancesResponse {
  /**
   * 任务集合
   */
  TaskSet?: Array<AndroidInstanceTask>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateAndroidInstanceImage请求参数结构体
 */
export interface CreateAndroidInstanceImageRequest {
  /**
   * 安卓实例镜像名称
   */
  AndroidInstanceImageName: string
  /**
   * 安卓实例 ID
   */
  AndroidInstanceId: string
}
