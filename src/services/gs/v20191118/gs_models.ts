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

/**
 * DescribeAndroidInstanceTasksStatus返回参数结构体
 */
export interface DescribeAndroidInstanceTasksStatusResponse {
  /**
   * 任务状态集合
   */
  TaskStatusSet?: Array<AndroidInstanceTaskStatus>
  /**
   * 任务总数量
   */
  Total?: number
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
 * StartPublishStreamToCSS返回参数结构体
 */
export interface StartPublishStreamToCSSResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateAndroidInstanceADB请求参数结构体
 */
export interface CreateAndroidInstanceADBRequest {
  /**
   * 安卓实例 ID
   */
  AndroidInstanceId: string
}

/**
 * FetchAndroidInstancesLogs返回参数结构体
 */
export interface FetchAndroidInstancesLogsResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateAndroidApp请求参数结构体
 */
export interface CreateAndroidAppRequest {
  /**
   * 安卓应用名字
   */
  Name: string
  /**
   * 用户 Id
   */
  UserId?: string
  /**
   * 应用模式（NORMAL : 普通模式、只支持 apk 文件上传，为默认值；ADVANCED : 高级模式、只支持上传 tgz 文件 和 自定义 shell 命令执行）
   */
  AppMode?: string
}

/**
 * 安卓实例设备信息
 */
export interface AndroidInstanceDevice {
  /**
   * 品牌
   */
  Brand: string
  /**
   * 型号
   */
  Model: string
}

/**
 * RestoreAndroidInstanceFromStorage请求参数结构体
 */
export interface RestoreAndroidInstanceFromStorageRequest {
  /**
   * 安卓实例ID
   */
  AndroidInstanceId: string
  /**
   * 自定义备份对象Key
   */
  ObjectKey: string
  /**
   * 存储服务器类型，如 COS、S3。注意：使用 COS 和 S3 都将占用外网带宽。
   */
  StorageType: string
  /**
   * COS协议选项
   */
  COSOptions?: COSOptions
  /**
   * S3存储协议选项
   */
  S3Options?: S3Options
}

/**
 * InstallAndroidInstancesAppWithURL返回参数结构体
 */
export interface InstallAndroidInstancesAppWithURLResponse {
  /**
   * 任务集合
注意：此字段可能返回 null，表示取不到有效值。
   */
  TaskSet?: Array<AndroidInstanceTask>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
 * RebootAndroidInstanceHosts返回参数结构体
 */
export interface RebootAndroidInstanceHostsResponse {
  /**
   * 任务 ID 集合，以供任务状态查询，其中 InstanceId 为宿主机序列号
   */
  TaskSet?: Array<AndroidInstanceTask>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * SetAndroidInstancesBGAppKeepAlive返回参数结构体
 */
export interface SetAndroidInstancesBGAppKeepAliveResponse {
  /**
   * 错误列表。如果实例操作都成功，则响应没有这个字段；如果有实例操作失败，该字段包含了实例操作的错误信息
   */
  AndroidInstanceErrors?: Array<AndroidInstanceError>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
 * 应用文件 Cos 信息
 */
export interface FileCosInfo {
  /**
   * 文件 Id
   */
  FileId: string
}

/**
 * ModifyAndroidAppVersion返回参数结构体
 */
export interface ModifyAndroidAppVersionResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CleanAndroidInstancesAppData返回参数结构体
 */
export interface CleanAndroidInstancesAppDataResponse {
  /**
   * 错误列表。如果实例操作都成功，则响应没有这个字段；如果有实例操作失败，该字段包含了实例操作的错误信息
   */
  AndroidInstanceErrors?: Array<AndroidInstanceError>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteAndroidApp返回参数结构体
 */
export interface DeleteAndroidAppResponse {
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
   * @deprecated
   */
  Labels?: Array<AndroidInstanceLabel>
  /**
   * 安卓实例标签详情列表
   */
  AndroidInstanceLabels?: Array<AndroidInstanceLabelDetail>
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
  /**
   * 用户 Id
   */
  UserId?: string
  /**
   * 应用模式（NORMAL : 普通模式；ADVANCED : 高级模式）
   */
  AppMode?: string
  /**
   * 应用更新状态，取值：UPLOADING 上传中、CREATING 创建中、CREATE_FAIL 创建失败、CREATE_SUCCESS 创建成功、PACKAGE_NAME_MISMATCH 包名不匹配、VERSION_ALREADY_EXISTS 版本已存在、APP_PARSE_FAIL app 解析失败、APP_EXISTS_SECURITY_RISK app 存在安全风险、NORMAL 默认状态
   */
  UpdateState?: string
  /**
   * 安卓应用包名
   */
  PackageName?: string
}

/**
 * DescribeAndroidInstancesAppBlacklist返回参数结构体
 */
export interface DescribeAndroidInstancesAppBlacklistResponse {
  /**
   * 黑名单集合
注意：此字段可能返回 null，表示取不到有效值。
   */
  AppBlacklistSet?: Array<AndroidInstanceAppBlacklist>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyAndroidApp请求参数结构体
 */
export interface ModifyAndroidAppRequest {
  /**
   * 安卓应用 Id
   */
  AndroidAppId: string
  /**
   * 安卓应用名称
   */
  Name: string
  /**
   * 用户 Id
   */
  UserId?: string
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
 * CreateAndroidAppVersion请求参数结构体
 */
export interface CreateAndroidAppVersionRequest {
  /**
   * 应用ID
   */
  AndroidAppId: string
  /**
   * 应用包下载地址
   */
  DownloadUrl?: string
  /**
   * 应用 shell 安装命令（支持多条命令执行，通过 && 组合；只在应用 AppMode 为 ADVANCED 高级模式下 才会生效）
   */
  Command?: string
  /**
   * 应用 shell 卸载命令（支持多条命令执行，通过 && 组合；只在应用 AppMode 为 ADVANCED 高级模式下 才会生效）
   */
  UninstallCommand?: string
  /**
   * 应用资源清理模式（实例安装应用所用资源），取值：CLEANUP_ON_UNINSTALL（默认值），卸载 App 时清理；CLEANUP_AFTER_INSTALL，安装 App 后立即清理。普通应用只有 CLEANUP_AFTER_INSTALL 模式。
   */
  CleanupMode?: string
}

/**
 * ModifyAndroidInstancesResources请求参数结构体
 */
export interface ModifyAndroidInstancesResourcesRequest {
  /**
   * 安卓实例 ID 列表（最大100条数据）
   */
  AndroidInstanceIds: Array<string>
  /**
   * 内存配额（单位 MB）
   */
  MemoryQuota: number
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
   * 操作类型。ADD：标签键不存在的添加新标签，标签键存在的将覆盖原有标签REMOVE：根据标签键删除标签REPLACE：使用请求标签列表替换原来所有标签CLEAR：清除所有标签
   */
  Operation: string
  /**
   * 安卓实例标签列表
   */
  AndroidInstanceLabels?: Array<AndroidInstanceLabel>
}

/**
 * BackUpAndroidInstanceToStorage请求参数结构体
 */
export interface BackUpAndroidInstanceToStorageRequest {
  /**
   * 安卓实例ID
   */
  AndroidInstanceId: string
  /**
   * 存储服务器类型，如 COS、S3。注意：使用 COS 和 S3 都将占用外网带宽。
   */
  StorageType: string
  /**
   * 自定义对象Key
   */
  ObjectKey: string
  /**
   * 包含的路径，支持仅含一个通配符*，通配符不能出现在路径开始
   */
  Includes?: Array<string>
  /**
   * 需要排除路径，支持仅含一个通配符*，通配符不能出现在路径开始
   */
  Excludes?: Array<string>
  /**
   * COS协议选项
   */
  COSOptions?: COSOptions
  /**
   * S3存储协议选项
   */
  S3Options?: S3Options
}

/**
 * ModifyAndroidInstancesProperties请求参数结构体
 */
export interface ModifyAndroidInstancesPropertiesRequest {
  /**
   * 安卓实例 ID 列表
   */
  AndroidInstanceIds: Array<string>
  /**
   * 安卓实例设备
   */
  AndroidInstanceDevice?: AndroidInstanceDevice
  /**
   * 安卓实例其它属性列表
   */
  AndroidInstanceProperties?: Array<AndroidInstanceProperty>
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
  Value?: string
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
 * StartAndroidInstances请求参数结构体
 */
export interface StartAndroidInstancesRequest {
  /**
   * 实例ID
   */
  AndroidInstanceIds: Array<string>
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
  /**
   * 上传目标目录，只能上传到 /sdcard/ 目录或其子目录下
   */
  DestinationDirectory?: string
  /**
   * 目标文件名
   */
  DestinationFileName?: string
}

/**
 * CleanAndroidInstancesAppData请求参数结构体
 */
export interface CleanAndroidInstancesAppDataRequest {
  /**
   * 安卓实例 ID 列表（最大100条数据）
   */
  AndroidInstanceIds: Array<string>
  /**
   * 应用包名
   */
  PackageName: string
}

/**
 * DisableAndroidInstancesApp请求参数结构体
 */
export interface DisableAndroidInstancesAppRequest {
  /**
   * 安卓实例 ID 列表（最大100条数据）
   */
  AndroidInstanceIds: Array<string>
  /**
   * 应用包名
   */
  PackageName: string
}

/**
 * EnableAndroidInstancesApp返回参数结构体
 */
export interface EnableAndroidInstancesAppResponse {
  /**
   * 错误列表。如果实例操作都成功，则响应没有这个字段；如果有实例操作失败，该字段包含了实例操作的错误信息
   */
  AndroidInstanceErrors?: Array<AndroidInstanceError>
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
 * RestoreAndroidInstanceFromStorage返回参数结构体
 */
export interface RestoreAndroidInstanceFromStorageResponse {
  /**
   * 实例任务 ID
   */
  TaskId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DistributeFileToAndroidInstances返回参数结构体
 */
export interface DistributeFileToAndroidInstancesResponse {
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
 * SaveGameArchive返回参数结构体
 */
export interface SaveGameArchiveResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyAndroidAppVersion请求参数结构体
 */
export interface ModifyAndroidAppVersionRequest {
  /**
   * 安卓应用 Id
   */
  AndroidAppId: string
  /**
   * 安卓应用版本 Id
   */
  AndroidAppVersion: string
  /**
   * 安卓应用版本名称
   */
  AndroidAppVersionName: string
  /**
   * 应用 shell 安装命令（支持多条命令执行，通过 && 组合；只在应用 AppMode 为 ADVANCED 高级模式下 才会生效）
   */
  Command?: string
  /**
   * 应用 shell 卸载命令（支持多条命令执行，通过 && 组合；只在应用 AppMode 为 ADVANCED 高级模式下 才会生效）
   */
  UninstallCommand?: string
}

/**
 * ModifyAndroidInstancesResources返回参数结构体
 */
export interface ModifyAndroidInstancesResourcesResponse {
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
 * ModifyAndroidInstancesAppBlacklist返回参数结构体
 */
export interface ModifyAndroidInstancesAppBlacklistResponse {
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
 * UploadFilesToAndroidInstances请求参数结构体
 */
export interface UploadFilesToAndroidInstancesRequest {
  /**
   * 上传文件信息列表
   */
  Files?: Array<AndroidInstanceUploadFile>
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
  /**
   * 启动页。建议指定启动页来启动应用，避免启动失败。如果启动页为空，系统尝试根据 PackageName 启动，但不保证成功。
   */
  Activity?: string
}

/**
 * ModifyAndroidInstancesResolution返回参数结构体
 */
export interface ModifyAndroidInstancesResolutionResponse {
  /**
   * 安卓实例错误列表
   */
  AndroidInstanceErrors?: Array<AndroidInstanceError>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteAndroidAppVersion返回参数结构体
 */
export interface DeleteAndroidAppVersionResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
  /**
   * 安卓实例标签列表
   */
  Labels?: Array<AndroidInstanceLabel>
}

/**
 * 安卓实例错误信息，用于批量安卓实例操作中返回部分操作错误的情况
 */
export interface AndroidInstanceError {
  /**
   * 安卓实例 ID
   */
  AndroidInstanceId?: string
  /**
   * 错误信息
   */
  Error?: Error
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
 * InstallAndroidInstancesAppWithURL请求参数结构体
 */
export interface InstallAndroidInstancesAppWithURLRequest {
  /**
   * 实例ID
   */
  AndroidInstanceIds: Array<string>
  /**
   * 安卓应用下载 URL
   */
  AndroidAppURL: string
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
 * StopPublishStream返回参数结构体
 */
export interface StopPublishStreamResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ImportAndroidInstanceImage返回参数结构体
 */
export interface ImportAndroidInstanceImageResponse {
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
   * 访问链接，可以直接使用此链接访问 WebShell
   */
  ConnectUrl?: string
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
 * 安卓应用Cos数据
 */
export interface AndroidAppCosInfo {
  /**
   * 安卓应用ID
   */
  AndroidAppId: string
  /**
   * 应用名称（支持 apk 和 tgz 两种格式文件，当应用 AppMode 为 NORMAL 时，只支持上传 apk 类型文件，当应用 AppMode 为 ADVANCED 高级模式时，只支持上传  tgz 类型文件）
   */
  FileName?: string
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
 * ModifyAndroidInstancesAppBlacklist请求参数结构体
 */
export interface ModifyAndroidInstancesAppBlacklistRequest {
  /**
   * 实例ID列表，数量上限100
   */
  AndroidInstanceIds: Array<string>
  /**
   * 应用列表
   */
  AppList: Array<string>
  /**
   * ADD、REMOVE、CLEAR
   */
  Operation: string
}

/**
 * ModifyAndroidInstancesInformation请求参数结构体
 */
export interface ModifyAndroidInstancesInformationRequest {
  /**
   * 安卓实例信息数据
   */
  AndroidInstanceInformations: Array<AndroidInstanceInformation>
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
 * DescribeAndroidInstancesByApps返回参数结构体
 */
export interface DescribeAndroidInstancesByAppsResponse {
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
 * DescribeAndroidInstanceTasksStatus请求参数结构体
 */
export interface DescribeAndroidInstanceTasksStatusRequest {
  /**
   * 任务 ID 列表
   */
  TaskIds?: Array<string>
  /**
   * 条件过滤器
   */
  Filter?: Array<Filter>
  /**
   * 偏移量，默认为 0
   */
  Offset?: number
  /**
   * 限制量，默认为20，最大值为100
   */
  Limit?: number
  /**
   * 时间范围限制，以天数为单位
   */
  RecentDays?: number
}

/**
 * CreateAndroidInstancesScreenshot返回参数结构体
 */
export interface CreateAndroidInstancesScreenshotResponse {
  /**
   * 任务列表
   */
  TaskSet?: Array<AndroidInstanceTask>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
 * CreateAndroidInstancesScreenshot请求参数结构体
 */
export interface CreateAndroidInstancesScreenshotRequest {
  /**
   * 实例 ID 列表
   */
  AndroidInstanceIds: Array<string>
}

/**
 * CreateCosCredential请求参数结构体
 */
export interface CreateCosCredentialRequest {
  /**
   * Cos 密钥类型，取值： Mobile 云手游、PC 云端游、AndroidApp 云手机应用管理、AndroidAppFile 云手机文件管理、AndroidAppBackup 云手机备份还原
   */
  CosType: string
  /**
   * 云手机应用管理 Cos 数据
   */
  AndroidAppCosInfo?: AndroidAppCosInfo
  /**
   * 云手机文件管理 Cos 数据
   */
  AndroidAppFileCosInfo?: FileCosInfo
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
 * DeleteAndroidInstanceBackupFiles请求参数结构体
 */
export interface DeleteAndroidInstanceBackupFilesRequest {
  /**
   * 文件对象键列表
   */
  ObjectKeys: Array<string>
  /**
   * 存储服务器类型，如 COS、S3。注意：使用 COS 和 S3 都将占用外网带宽。
   */
  StorageType: string
  /**
   * COS协议选项
   */
  COSOptions?: COSOptions
  /**
   * S3存储协议选项
   */
  S3Options?: S3Options
  /**
   * 安卓实例可用区。StorageType 为 S3 时，需要填写该字段；StorageType 为 COS 时，不需要填写该字段
   */
  AndroidInstanceZone?: string
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
HostSerialNumber：宿主机序列号
HostServerSerialNumber：机箱序列号
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
 * 安卓实例信息
 */
export interface AndroidInstanceInformation {
  /**
   * 安卓实例 ID
   */
  AndroidInstanceId: string
  /**
   * 实例名称
   */
  Name: string
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
   * 分辨率宽度。建议按照以下数值设置，避免出现性能不足问题：
实例类型为单开（A1）：建议设置为 1080
实例类型为双开（A2） 及以上：建议设置为 720
   */
  Width: number
  /**
   * 分辨率高度。建议按照以下数值设置，避免出现性能不足问题：
实例类型为单开（A1）：建议设置为 1920
实例类型为双开（A2） 及以上：建议设置为 1280
   */
  Height: number
  /**
   * 每英寸像素点。如果不填，系统将会计算一个合理的数值。修改 DPI 可能会导致 App 异常退出，请谨慎使用！
分辨率为 720x1280：建议配置为 320
分辨率为  1080x1920：建议配置为 480
   */
  DPI?: number
  /**
   * 帧率。ResolutionType 为 PHYSICAL 时才会修改帧率。另外建议按照以下数值设置，避免出现性能不足问题： 实例类型为单开（A1）：建议设置为 60 实例类型为双开（A2） 及以上：建议设置为 30
   */
  FPS?: number
  /**
   * 修改分辨率类型。修改物理分辨率，需要重启才能生效。
OVERRIDE：默认值，修改覆盖（显示）分辨率
PHYSICAL：修改物理分辨率
   */
  ResolutionType?: string
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
   * 安卓应用版本创建状态，取值：NORMAL：无（默认）、UPLOADING：上传中、CREATING： 创建中、CREATE_FAIL：创建失败、PACKAGE_NAME_MISMATCH：包名不匹配、VERSION_ALREADY_EXISTS：版本已存在、APP_PARSE_FAIL： app 解析失败、APP_EXISTS_SECURITY_RISK：app 存在安全风险、CREATE_SUCCESS：创建成功
   */
  State?: string
  /**
   * 安卓应用版本创建时间
   */
  CreateTime?: string
  /**
   * shell 安装命令（支持多条命令执行，通过 && 组合；只在应用 AppMode 为 ADVANCED 高级模式下 才会生效）
   */
  Command?: string
  /**
   * shell 卸载命令（支持多条命令执行，通过 && 组合；只在应用 AppMode 为 ADVANCED 高级模式下 才会生效）
   */
  UninstallCommand?: string
  /**
   * 应用资源清理模式（实例安装应用所用资源），取值：CLEANUP_ON_UNINSTALL（默认值），卸载 App 时清理；CLEANUP_AFTER_INSTALL，安装 App 后立即清理。普通应用只有 CLEANUP_AFTER_INSTALL 模式。
   */
  CleanupMode?: string
  /**
   * 安卓应用版本名称（版本描述、备注）
   */
  AndroidAppVersionName?: string
  /**
   * 安卓应用启动页
   */
  Activity?: string
  /**
   * 应用版本号（Version Name）
   */
  VersionName?: string
  /**
   * 应用包 MD5
   */
  MD5?: string
  /**
   * 应用包文件大小（字节）
   */
  FileSize?: number
  /**
   * 安卓应用包名
   */
  PackageName?: string
}

/**
 * DeleteAndroidAppVersion请求参数结构体
 */
export interface DeleteAndroidAppVersionRequest {
  /**
   * 安卓应用 Id
   */
  AndroidAppId: string
  /**
   * 安卓应用版本
   */
  AndroidAppVersion: string
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
 * CreateAndroidInstanceADB返回参数结构体
 */
export interface CreateAndroidInstanceADBResponse {
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
 * StopAndroidInstances请求参数结构体
 */
export interface StopAndroidInstancesRequest {
  /**
   * 实例ID
   */
  AndroidInstanceIds: Array<string>
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
 * CreateAndroidInstancesAccessToken请求参数结构体
 */
export interface CreateAndroidInstancesAccessTokenRequest {
  /**
   * 实例 ID 列表。每次请求的实例的上限为 500。
   */
  AndroidInstanceIds: Array<string>
  /**
   * 有效期，默认为 12 小时，最大为 24 小时。支持 s（秒）、m（分）、h（小时）等单位，比如 12h 表示 12 小时，1h2m3s 表示一小时两分三秒
   */
  ExpirationDuration?: string
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
 * DistributeFileToAndroidInstances请求参数结构体
 */
export interface DistributeFileToAndroidInstancesRequest {
  /**
   * 安卓实例 ID 列表
   */
  AndroidInstanceIds: Array<string>
  /**
   * 文件下载 URL
   */
  FileURL: string
  /**
   * 上传目标目录，只能上传到 /sdcard/ 目录或其子目录下
   */
  DestinationDirectory: string
  /**
   * 目标文件名
   */
  DestinationFileName?: string
}

/**
 * EnableAndroidInstancesApp请求参数结构体
 */
export interface EnableAndroidInstancesAppRequest {
  /**
   * 安卓实例 ID 列表（最大100条数据）
   */
  AndroidInstanceIds: Array<string>
  /**
   * 应用包名
   */
  PackageName: string
}

/**
 * 错误信息，用于批量接口中返回部分操作错误
 */
export interface Error {
  /**
   * 错误码
   */
  Code?: string
  /**
   * 错误详细信息
   */
  Message?: string
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
  /**
   * 启动页。建议指定启动页来启动应用，避免启动失败。如果启动页为空，系统尝试根据 PackageName 启动，但不保证成功。
   */
  Activity?: string
}

/**
 * ModifyAndroidInstancesResolution请求参数结构体
 */
export interface ModifyAndroidInstancesResolutionRequest {
  /**
   * 安卓实例 ID 列表
   */
  AndroidInstanceIds: Array<string>
  /**
   * 分辨率宽度。建议按照以下数值设置，避免出现性能不足问题：
实例类型为单开（A1）：建议设置为 1080
实例类型为双开（A2） 及以上：建议设置为 720
   */
  Width: number
  /**
   * 分辨率高度。建议按照以下数值设置，避免出现性能不足问题：
实例类型为单开（A1）：建议设置为 1920
实例类型为双开（A2） 及以上：建议设置为 1280
   */
  Height: number
  /**
   * 每英寸像素点。
分辨率为 720x1280：建议配置为 320
分辨率为  1080x1920：建议配置为 480
   */
  DPI: number
  /**
   * 帧率。ResolutionType 为 PHYSICAL 时才会修改帧率。另外建议按照以下数值设置，避免出现性能不足问题：
实例类型为单开（A1）：建议设置为 60
实例类型为双开（A2） 及以上：建议设置为 30
   */
  FPS?: number
  /**
   * 修改分辨率类型。修改物理分辨率，需要重启才能生效。
OVERRIDE：默认值，修改覆盖（显示）分辨率
PHYSICAL：修改物理分辨率
   */
  ResolutionType?: string
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
  /**
   * 过滤条件，支持过滤的字段有：UserId、State、UpdateState、Name、AppMode 。其中 Name 为模糊匹配，其他参数为精确匹配。
   */
  Filters?: Array<Filter>
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
 * DescribeAndroidInstancesByApps请求参数结构体
 */
export interface DescribeAndroidInstancesByAppsRequest {
  /**
   * 偏移量，默认为 0
   */
  Offset: number
  /**
   * 限制量，默认为 20，最大值为 500
   */
  Limit: number
  /**
   * 应用 ID 列表。当 AndroidIds 为多条数据时（例如 app1, app2），返回的实例列表为：安装了 app1 应用的实例和安装了 app2 应用的实例集合（并集）。
   */
  AndroidAppIds: Array<string>
  /**
   * 字段过滤器，Filter 的 Name 有以下值： AndroidInstanceId：实例 Id
   */
  Filters?: Array<Filter>
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
 * S3协议参数
 */
export interface S3Options {
  /**
   * 存储节点
   */
  EndPoint: string
  /**
   * 存储桶
   */
  Bucket: string
  /**
   * 密钥 ID
   */
  AccessKeyId: string
  /**
   * 密钥 Key
   */
  SecretAccessKey: string
}

/**
 * DescribeAndroidInstancesAppBlacklist请求参数结构体
 */
export interface DescribeAndroidInstancesAppBlacklistRequest {
  /**
   * 实例 ID 列表，数量上限 100
   */
  AndroidInstanceIds: Array<string>
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
 * CreateAndroidInstancesAccessToken返回参数结构体
 */
export interface CreateAndroidInstancesAccessTokenResponse {
  /**
   * token
   */
  Token?: string
  /**
   * 访问信息
   */
  AccessInfo?: string
  /**
   * 安卓实例错误列表。列表包含有问题的安卓实例 ID，生成的 Token 对这些有问题的实例无效。
   */
  AndroidInstanceErrors?: Array<AndroidInstanceError>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
 * RenewAndroidInstancesAccessToken请求参数结构体
 */
export interface RenewAndroidInstancesAccessTokenRequest {
  /**
   * token
   */
  AccessToken: string
  /**
   * 有效期，默认为 12 小时，最大为 24 小时。支持 s（秒）、m（分）、h（小时）等单位，比如 12h 表示 12 小时，1h2m3s 表示一小时两分三秒
   */
  ExpirationDuration?: string
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
 * SetAndroidInstancesFGAppKeepAlive请求参数结构体
 */
export interface SetAndroidInstancesFGAppKeepAliveRequest {
  /**
   * 安卓实例 ID 列表（最大100条数据）
   */
  AndroidInstanceIds: Array<string>
  /**
   * 操作类型，取值：ENABLE 开启保活、DISABLE 关闭保活。当关闭保活时，PackageName 参数传空即可
   */
  Operation: string
  /**
   * 应用包名，开启保活时，必须传入 PackageName
   */
  PackageName?: string
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
 * ModifyAndroidApp返回参数结构体
 */
export interface ModifyAndroidAppResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DistributePhotoToAndroidInstances请求参数结构体
 */
export interface DistributePhotoToAndroidInstancesRequest {
  /**
   * 安卓实例 ID 列表
   */
  AndroidInstanceIds: Array<string>
  /**
   * 照片下载 URL
   */
  PhotoURL: string
}

/**
 * SetAndroidInstancesFGAppKeepAlive返回参数结构体
 */
export interface SetAndroidInstancesFGAppKeepAliveResponse {
  /**
   * 错误列表。如果实例操作都成功，则响应没有这个字段；如果有实例操作失败，该字段包含了实例操作的错误信息
   */
  AndroidInstanceErrors?: Array<AndroidInstanceError>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 安卓实例属性
 */
export interface AndroidInstanceProperty {
  /**
   * 属性键
   */
  Key: string
  /**
   * 属性值
   */
  Value?: string
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
   * 镜像可用区列表
   */
  AndroidInstanceImageZones?: Array<string>
  /**
   * 偏移量，默认为0
   */
  Offset?: number
  /**
   * 限制量，默认为20，最大值为100
   */
  Limit?: number
  /**
   * 字段过滤器。Filter 的 Name 有以下值：
ImageName：镜像名称
ImageState：镜像状态
AndroidVersion：安卓版本
   */
  Filters?: Array<Filter>
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
  /**
   * 任务类型
   */
  TaskType?: string
  /**
   * 任务创建时间
   */
  CreateTime?: string
  /**
   * 任务完成时间
   */
  CompleteTime?: string
}

/**
 * ImportAndroidInstanceImage请求参数结构体
 */
export interface ImportAndroidInstanceImageRequest {
  /**
   * 镜像名称
   */
  Name: string
  /**
   * 镜像文件下载地址，要求是 tgz 压缩文件
   */
  URL: string
  /**
   * 镜像文件 MD5 值
   */
  MD5: string
  /**
   * 安卓版本。
ANDROID10：默认值，安卓10
ANDROID12：安卓12
ANDROID14：安卓14
   */
  AndroidVersion?: string
  /**
   * 镜像可用区
   */
  Zone?: string
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
 * DisableAndroidInstancesApp返回参数结构体
 */
export interface DisableAndroidInstancesAppResponse {
  /**
   * 错误列表。如果实例操作都成功，则响应没有这个字段；如果有实例操作失败，该字段包含了实例操作的错误信息
   */
  AndroidInstanceErrors?: Array<AndroidInstanceError>
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
 * SetAndroidInstancesBGAppKeepAlive请求参数结构体
 */
export interface SetAndroidInstancesBGAppKeepAliveRequest {
  /**
   * 安卓实例 ID 列表（最大100条数据）
   */
  AndroidInstanceIds: Array<string>
  /**
   * 操作类型，取值：ADD 添加应用到后台保活列表、REMOVE 从后台保活列表中移除应用、SET 全量设置后台保活列表，替换当前列表。
   */
  Operation: string
  /**
   * 应用包名列表
   */
  PackageNames: Array<string>
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
   * 标签值。普通场景下，该值不需要填写；高级场景下，需要两个层级进行分组时才填写。
   */
  Value?: string
  /**
   * 标签描述
   */
  Description?: string
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
  /**
   * 内网 IP
   */
  PrivateIP?: string
  /**
   * 创建时间
   */
  CreateTime?: string
  /**
   * 机箱 ID
   */
  HostServerSerialNumber?: string
}

/**
 * RebootAndroidInstanceHosts请求参数结构体
 */
export interface RebootAndroidInstanceHostsRequest {
  /**
   * 宿主机序列号集合
   */
  HostSerialNumbers: Array<string>
}

/**
 * COS协议参数
 */
export interface COSOptions {
  /**
   * 存储桶
   */
  Bucket: string
  /**
   * 存储区域
   */
  Region: string
}

/**
 * ModifyAndroidInstancesProperties返回参数结构体
 */
export interface ModifyAndroidInstancesPropertiesResponse {
  /**
   * 安卓实例错误列表
   */
  AndroidInstanceErrors?: Array<AndroidInstanceError>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyAndroidInstancesInformation返回参数结构体
 */
export interface ModifyAndroidInstancesInformationResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * RenewAndroidInstancesAccessToken返回参数结构体
 */
export interface RenewAndroidInstancesAccessTokenResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateCosCredential返回参数结构体
 */
export interface CreateCosCredentialResponse {
  /**
   * Cos SecretID
   */
  SecretID?: string
  /**
   * Cos SecretKey
   */
  SecretKey?: string
  /**
   * Cos Session
   */
  SessionToken?: string
  /**
   * Cos Bucket
   */
  CosBucket?: string
  /**
   * Cos Region
   */
  CosRegion?: string
  /**
   * Cos 操作路径
   */
  Path?: string
  /**
   * Cos 密钥的起始时间
   */
  StartTime?: number
  /**
   * Cos 密钥的失效时间
   */
  ExpiredTime?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
 * 安卓实例应用黑名单
 */
export interface AndroidInstanceAppBlacklist {
  /**
   * 安卓实例 ID
   */
  AndroidInstanceId?: string
  /**
   * 应用黑名单
注意：此字段可能返回 null，表示取不到有效值。
   */
  AppBlacklist?: Array<string>
}

/**
 * DistributePhotoToAndroidInstances返回参数结构体
 */
export interface DistributePhotoToAndroidInstancesResponse {
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
  /**
   * 镜像描述
   */
  AndroidInstanceImageDescription?: string
  /**
   * 安卓10
   */
  AndroidVersion?: string
  /**
   * 创建时间
   */
  CreateTime?: string
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
 * 安卓实例上传文件信息
 */
export interface AndroidInstanceUploadFile {
  /**
   * 安卓实例 ID
   */
  AndroidInstanceId?: string
  /**
   * 文件上传 URL
   */
  FileURL?: string
  /**
   * 上传目标目录，只能上传到 /sdcard/ 目录或其子目录下
   */
  DestinationDirectory?: string
  /**
   * 目标文件名
   */
  DestinationFileName?: string
}

/**
 * 安卓实例标签详情
 */
export interface AndroidInstanceLabelDetail {
  /**
   * 标签
   */
  Label?: AndroidInstanceLabel
  /**
   * 标签描述
   */
  Description?: string
  /**
   * 标签创建时间
   */
  CreateTime?: string
}

/**
 * UploadFilesToAndroidInstances返回参数结构体
 */
export interface UploadFilesToAndroidInstancesResponse {
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
 * RebootAndroidInstances请求参数结构体
 */
export interface RebootAndroidInstancesRequest {
  /**
   * 实例ID
   */
  AndroidInstanceIds: Array<string>
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
   * @deprecated
   */
  PackageVersion?: string
  /**
   * 应用包标签
   */
  PackageLabel?: string
  /**
   * 应用包版本号
   */
  VersionName?: string
}

/**
 * DeleteAndroidApp请求参数结构体
 */
export interface DeleteAndroidAppRequest {
  /**
   * 应用ID
   */
  AndroidAppId: string
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
 * CreateAndroidAppVersion返回参数结构体
 */
export interface CreateAndroidAppVersionResponse {
  /**
   * 应用版本
   */
  AndroidAppVersion?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * FetchAndroidInstancesLogs请求参数结构体
 */
export interface FetchAndroidInstancesLogsRequest {
  /**
   * 安卓实例 ID 列表
   */
  AndroidInstanceIds: Array<string>
  /**
   * cos 桶名称
   */
  BucketName: string
  /**
   * cos 桶区域
   */
  BucketRegion: string
  /**
   * cos 桶目录，默认为 /log/
   */
  BucketDirectory?: string
  /**
   * 下载最近几天的日志，默认值为 1
   */
  RecentDays?: number
}

/**
 * DeleteAndroidInstanceBackupFiles返回参数结构体
 */
export interface DeleteAndroidInstanceBackupFilesResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * BackUpAndroidInstanceToStorage返回参数结构体
 */
export interface BackUpAndroidInstanceToStorageResponse {
  /**
   * 实例任务 ID
   */
  TaskId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
 * CreateAndroidApp返回参数结构体
 */
export interface CreateAndroidAppResponse {
  /**
   * 应用ID
   */
  AndroidAppId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
  /**
   * 安卓实例镜像描述
   */
  AndroidInstanceImageDescription?: string
}
