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
 * CreateMigrationTask请求参数结构体
 */
export interface CreateMigrationTaskRequest {
  /**
   * 迁移任务名称
   */
  TaskName: string
  /**
   * 迁移方式标志位，默认为0。0：桶迁移；1：清单迁移
   */
  MigrationType: number
  /**
   * 迁移模式，默认为0。0: 全量迁移
   */
  MigrationMode: number
  /**
   * 数据源账号的 SecretId
   */
  SrcSecretId: string
  /**
   * 数据源账号的 SecretKey
   */
  SrcSecretKey: string
  /**
   * 文件系统实例 ID，通过查询文件系统 [DescribeCfsFileSystems](https://cloud.tencent.com/document/product/582/38170) 获取
   */
  FileSystemId: string
  /**
   * 文件系统路径
   */
  FsPath: string
  /**
   * 同名文件迁移时覆盖策略，默认为0。0: 最后修改时间优先；1: 全覆盖；2: 不覆盖
   */
  CoverType: number
  /**
   * 数据源服务商。COS：腾讯云COS，OSS：阿里云OSS，OBS：华为云OBS
   */
  SrcService: string
  /**
   * 数据源桶名称；桶迁移时，BucketName 和 BucketAddress 必填其一，清单迁移时无需填写此参数
   */
  BucketName?: string
  /**
   * 数据源桶地域
   */
  BucketRegion?: string
  /**
   * 数据源桶地址；桶迁移时，BucketName 和 BucketAddress 必填其一，清单迁移时无需填写此参数
   */
  BucketAddress?: string
  /**
   * 清单地址，迁移方式为清单迁移时必填
   */
  ListAddress?: string
  /**
   * 目标文件系统名称
   */
  FsName?: string
  /**
   * 源桶路径，默认为 /
   */
  BucketPath?: string
  /**
   * 迁移方向；0：对象存储迁移至文件系统，1：文件系统迁移至对象存储。默认为0
   */
  Direction?: number
}

/**
 * ScaleUpFileSystem返回参数结构体
 */
export interface ScaleUpFileSystemResponse {
  /**
   * 文件系统Id
   */
  FileSystemId?: string
  /**
   * 扩容的目标容量（单位GiB）
   */
  TargetCapacity?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 文件系统快照统计
 */
export interface SnapshotStatistics {
  /**
   * 地域
   */
  Region?: string
  /**
   * 快照总个数
   */
  SnapshotNumber?: number
  /**
   * 快照总容量，单位是MiB
   */
  SnapshotSize?: number
}

/**
 * CreateLifecycleDataTask请求参数结构体
 */
export interface CreateLifecycleDataTaskRequest {
  /**
   * 文件系统唯一 ID
   */
  FileSystemId: string
  /**
   * 生命周期任务类型；archive：沉降；restore：预热；release：数据释放；metaload：元数据加载
   */
  Type: string
  /**
   * 需要沉降的路径或文件，仅支持传入1个路径，不允许为空。
   */
  TaskPath: string
  /**
   * 任务名称
   */
  TaskName: string
  /**
   * 数据流动 ID ，该接口可以通过 DescribeDataFlow 查询
   */
  DataFlowId?: string
}

/**
 * DescribeCfsPGroups返回参数结构体
 */
export interface DescribeCfsPGroupsResponse {
  /**
   * 权限组信息列表
   */
  PGroupList?: Array<PGroupInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyDataFlow返回参数结构体
 */
export interface ModifyDataFlowResponse {
  /**
   * 数据流动管理 ID
   */
  DataFlowId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeMountTargets返回参数结构体
 */
export interface DescribeMountTargetsResponse {
  /**
   * 挂载点详情
   */
  MountTargets?: Array<MountInfo>
  /**
   * 挂载点数量
   */
  NumberOfMountTargets?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeSnapshotOperationLogs请求参数结构体
 */
export interface DescribeSnapshotOperationLogsRequest {
  /**
   * 快照ID，可以通过[DescribeCfsSnapshots](https://cloud.tencent.com/document/api/582/80206) 查询获取
   */
  SnapshotId: string
  /**
   * 起始时间，格式“YYYY-MM-DD hh:mm:ss”
   */
  StartTime: string
  /**
   * 结束时间，格式“YYYY-MM-DD hh:mm:ss”
   */
  EndTime: string
}

/**
 * CreateLifecyclePolicyDownloadTask请求参数结构体
 */
export interface CreateLifecyclePolicyDownloadTaskRequest {
  /**
   * 任务Id
   */
  TaskId?: string
  /**
   * 下载文件的类型，包含 FileSuccessList，FileTotalList，FileFailedList
   */
  Type?: string
}

/**
 * CFS数据迁移任务信息
 */
export interface MigrationTaskInfo {
  /**
   * 迁移任务名称
   */
  TaskName?: string
  /**
   * 迁移任务id
   */
  TaskId?: string
  /**
   * 迁移方式标志位，默认为0。0: 桶迁移；1: 清单迁移
   */
  MigrationType?: number
  /**
   * 迁移模式，默认为0。0: 全量迁移
   */
  MigrationMode?: number
  /**
   * 数据源桶名称
   */
  BucketName?: string
  /**
   * 数据源桶地域
   */
  BucketRegion?: string
  /**
   * 数据源桶地址
   */
  BucketAddress?: string
  /**
   * 清单地址
   */
  ListAddress?: string
  /**
   * 文件系统实例名称
   */
  FsName?: string
  /**
   * 文件系统实例Id
   */
  FileSystemId?: string
  /**
   * 文件系统路径
   */
  FsPath?: string
  /**
   * 同名文件迁移时覆盖策略，默认为0。0: 最后修改时间优先；1: 全覆盖；2: 不覆盖
   */
  CoverType?: number
  /**
   * 创建时间
   */
  CreateTime?: number
  /**
   * 完成/终止时间
   */
  EndTime?: number
  /**
   * 迁移状态。0: 已完成；1: 创建中；2: 运行中；3: 终止中；4: 已终止；5: 创建失败；6: 运行失败；7: 结束中；8: 删除中；9: 等待中
   */
  Status?: number
  /**
   * 文件数量
   */
  FileTotalCount?: number
  /**
   * 已迁移文件数量
   */
  FileMigratedCount?: number
  /**
   * 迁移失败文件数量
   */
  FileFailedCount?: number
  /**
   * 文件容量，单位Byte
   */
  FileTotalSize?: number
  /**
   * 已迁移文件容量，单位Byte
   */
  FileMigratedSize?: number
  /**
   * 迁移失败文件容量，单位Byte
   */
  FileFailedSize?: number
  /**
   * 全部清单
   */
  FileTotalList?: string
  /**
   * 已完成文件清单
   */
  FileCompletedList?: string
  /**
   * 失败文件清单
   */
  FileFailedList?: string
  /**
   * 源桶路径
   */
  BucketPath?: string
  /**
   * 迁移方向。0: 对象存储迁移至文件系统，1: 文件系统迁移至对象存储。默认 0
   */
  Direction?: number
}

/**
 * StopLifecycleDataTask请求参数结构体
 */
export interface StopLifecycleDataTaskRequest {
  /**
   * 任务ID
   */
  TaskId: string
}

/**
 * 文件系统客户端信息
 */
export interface FileSystemClient {
  /**
   * 文件系统IP地址
   */
  CfsVip?: string
  /**
   * 客户端IP地址
   */
  ClientIp?: string
  /**
   * 文件系统所属VPCID
   */
  VpcId?: string
  /**
   * 可用区名称，例如ap-beijing-1，参考[简介](https://cloud.tencent.com/document/api/582/38144)文档中的地域与可用区列表
   */
  Zone?: string
  /**
   * 可用区中文名称
   */
  ZoneName?: string
  /**
   * 该文件系统被挂载到客户端上的路径信息
   */
  MountDirectory?: string
}

/**
 * DescribeCfsFileSystems返回参数结构体
 */
export interface DescribeCfsFileSystemsResponse {
  /**
   * 文件系统信息
   */
  FileSystems?: Array<FileSystemInfo>
  /**
   * 文件系统总数
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateLifecycleDataTask返回参数结构体
 */
export interface CreateLifecycleDataTaskResponse {
  /**
   * 任务 ID
   */
  TaskId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ApplyPathLifecyclePolicy请求参数结构体
 */
export interface ApplyPathLifecyclePolicyRequest {
  /**
   * 生命周期管理策略ID
   */
  LifecyclePolicyID: string
  /**
   * 生命周期管理策略关联目录的绝对路径列表
   */
  Paths?: Array<PathInfo>
}

/**
 * BindAutoSnapshotPolicy请求参数结构体
 */
export interface BindAutoSnapshotPolicyRequest {
  /**
   * 需要解绑的文件系统ID列表，用"," 分割，文件系统ID，通过查询文件系统列表获取；[DescribeCfsFileSystems](https://cloud.tencent.com/document/product/582/38170)
   */
  AutoSnapshotPolicyId: string
  /**
   * 解绑的快照策略ID，可以通过[DescribeAutoSnapshotPolicies](https://cloud.tencent.com/document/api/582/80208) 查询获取
   */
  FileSystemIds: string
}

/**
 * ModifyFileSystemAutoScaleUpRule请求参数结构体
 */
export interface ModifyFileSystemAutoScaleUpRuleRequest {
  /**
   * 文件系统 ID，通过查询文件系统列表获取；[DescribeCfsFileSystems](https://cloud.tencent.com/document/product/582/38170)
   */
  FileSystemId: string
  /**
   * 扩容阈值，范围[10-90]
   */
  ScaleUpThreshold: number
  /**
   * 扩容后目标阈值，范围[10-90]，该值要小于 ScaleUpThreshold
   */
  TargetThreshold: number
  /**
   * 规则状态 0：关闭，1：开启；不传保留原状态
   */
  Status?: number
}

/**
 * ScaleUpFileSystem请求参数结构体
 */
export interface ScaleUpFileSystemRequest {
  /**
   * 文件系统Id,该参数通过查询文件系统列表接口获取
   */
  FileSystemId: string
  /**
   * 扩容的目标容量（单位GiB）
   */
  TargetCapacity: number
}

/**
 * CreateCfsPGroup请求参数结构体
 */
export interface CreateCfsPGroupRequest {
  /**
   * 权限组名称，1-64个字符且只能为中文，字母，数字，下划线或横线
   */
  Name: string
  /**
   * 权限组描述信息，1-255个字符
   */
  DescInfo?: string
}

/**
 * DescribeMigrationTasks返回参数结构体
 */
export interface DescribeMigrationTasksResponse {
  /**
   * 迁移任务的总数量
   */
  TotalCount?: number
  /**
   * 迁移任务详情
   */
  MigrationTasks?: Array<MigrationTaskInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeAutoSnapshotPolicies请求参数结构体
 */
export interface DescribeAutoSnapshotPoliciesRequest {
  /**
   * 快照策略ID
   */
  AutoSnapshotPolicyId?: string
  /**
   * 分页码
   */
  Offset?: number
  /**
   * 页面长
   */
  Limit?: number
  /**
   * 过滤条件
   */
  Filters?: Array<Filter>
  /**
   * 升序，降序
   */
  Order?: string
  /**
   * 排序字段
   */
  OrderField?: string
}

/**
 * DescribeAvailableZoneInfo请求参数结构体
 */
export type DescribeAvailableZoneInfoRequest = null

/**
 * DescribeMountTargets请求参数结构体
 */
export interface DescribeMountTargetsRequest {
  /**
   * 文件系统 ID，[查询文件系统列表](https://cloud.tencent.com/document/api/582/38170)可以获得id
   */
  FileSystemId: string
}

/**
 * CreateDataFlow返回参数结构体
 */
export interface CreateDataFlowResponse {
  /**
   * 数据流动管理 ID
   */
  DataFlowId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * SignUpCfsService请求参数结构体
 */
export type SignUpCfsServiceRequest = null

/**
 * SignUpCfsService返回参数结构体
 */
export interface SignUpCfsServiceResponse {
  /**
   * 该用户当前 CFS 服务的状态，creating 是开通中，created 是已开通
   */
  CfsServiceStatus: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 快照策略信息
 */
export interface AutoSnapshotPolicyInfo {
  /**
   * 快照策略ID
   */
  AutoSnapshotPolicyId?: string
  /**
   * 快照策略名称
   */
  PolicyName?: string
  /**
   * 快照策略创建时间
   */
  CreationTime?: string
  /**
   * 关联的文件系统个数
   */
  FileSystemNums?: number
  /**
   * 快照定期备份在一星期哪一天，该参数与DayOfMonth,IntervalDays互斥
   */
  DayOfWeek?: string
  /**
   * 快照定期备份在一天的哪一小时
   */
  Hour?: string
  /**
   * 是否激活定期快照功能,1代表已激活，0代表未激活
   */
  IsActivated?: number
  /**
   * 下一次触发快照时间
   */
  NextActiveTime?: string
  /**
   * 快照策略状态，available代表快照策略状态正常。这里只有一种状态
   */
  Status?: string
  /**
   * 账号ID
   */
  AppId?: number
  /**
   * 保留时间
   */
  AliveDays?: number
  /**
   * 地域
   */
  RegionName?: string
  /**
   * 文件系统信息
   */
  FileSystems?: Array<FileSystemByPolicy>
  /**
   * 快照定期备份在一个月的某个时间；该参数与DayOfWeek,IntervalDays互斥
注意：此字段可能返回 null，表示取不到有效值。
   */
  DayOfMonth?: string
  /**
   * 快照定期间隔天数，1-365 天；该参数与DayOfMonth,DayOfWeek互斥
注意：此字段可能返回 null，表示取不到有效值。
   */
  IntervalDays?: number
  /**
   * 跨地域复制的快照保留时间，单位天
   */
  CrossRegionsAliveDays?: number
}

/**
 * CreateLifecyclePolicyDownloadTask返回参数结构体
 */
export interface CreateLifecyclePolicyDownloadTaskResponse {
  /**
   * 下载路径
   */
  DownloadAddress?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeCfsRules请求参数结构体
 */
export interface DescribeCfsRulesRequest {
  /**
   * 权限组 ID，可通过[DescribeCfsPGroups接口](https://cloud.tencent.com/document/api/582/38157)获取
   */
  PGroupId: string
}

/**
 * UpdateCfsFileSystemName请求参数结构体
 */
export interface UpdateCfsFileSystemNameRequest {
  /**
   * 文件系统 ID,通过[查询文件系统接口](https://cloud.tencent.com/document/api/582/38170)获取
   */
  FileSystemId: string
  /**
   * 用户自定义文件系统名称，64字节内的中文字母数字或者 _,-,与CreationToken 至少填一个
   */
  FsName?: string
}

/**
 * DeleteCfsPGroup请求参数结构体
 */
export interface DeleteCfsPGroupRequest {
  /**
   * 权限组 ID，可通过[DescribeCfsPGroups接口](https://cloud.tencent.com/document/api/582/38157)获取
   */
  PGroupId: string
}

/**
 * DescribeLifecycleDataTask返回参数结构体
 */
export interface DescribeLifecycleDataTaskResponse {
  /**
   * 任务数组
   */
  LifecycleDataTask?: Array<LifecycleDataTaskInfo>
  /**
   * 查询结果总数
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * UpdateCfsPGroup返回参数结构体
 */
export interface UpdateCfsPGroupResponse {
  /**
   * 权限组ID
   */
  PGroupId?: string
  /**
   * 权限组名称
   */
  Name?: string
  /**
   * 描述信息
   */
  DescInfo?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * UpdateFileSystemBandwidthLimit返回参数结构体
 */
export interface UpdateFileSystemBandwidthLimitResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 快照操作日志
 */
export interface SnapshotOperateLog {
  /**
   * 操作类型
CreateCfsSnapshot：创建快照
DeleteCfsSnapshot：删除快照
CreateCfsFileSystem：创建文件系统
UpdateCfsSnapshotAttribute：更新快照
   */
  Action?: string
  /**
   * 操作时间
   */
  ActionTime?: string
  /**
   * 操作名称
CreateCfsSnapshot
DeleteCfsSnapshot
CreateCfsFileSystem
UpdateCfsSnapshotAttribute
   */
  ActionName?: string
  /**
   * 操作者uin
   */
  Operator?: string
  /**
   * 1-任务进行中；2-任务成功；3-任务失败
   */
  Result?: number
}

/**
 * DescribeLifecyclePolicies请求参数结构体
 */
export interface DescribeLifecyclePoliciesRequest {
  /**
   * 生命周期管理策略名称
   */
  LifecyclePolicyName?: string
  /**
   * 每个分页包含的生命周期管理策略个数
   */
  PageSize?: number
  /**
   * 列表的分页页码
   */
  PageNumber?: number
  /**
   * 文件系统ID
   */
  FileSystemId?: string
  /**
   * 生命周期管理策略ID
   */
  LifecyclePolicyID?: string
}

/**
 * DeleteAutoSnapshotPolicy请求参数结构体
 */
export interface DeleteAutoSnapshotPolicyRequest {
  /**
   * 快照策略ID，查询快照策略接口获取,[DescribeAutoSnapshotPolicies](https://cloud.tencent.com/document/api/582/80208)
   */
  AutoSnapshotPolicyId: string
}

/**
 * CreateLifecyclePolicy返回参数结构体
 */
export interface CreateLifecyclePolicyResponse {
  /**
   * 生命周期管理策略ID
   */
  LifecyclePolicyID?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * UpdateCfsRule请求参数结构体
 */
export interface UpdateCfsRuleRequest {
  /**
   * 权限组 ID，可通过[DescribeCfsPGroups接口](https://cloud.tencent.com/document/api/582/38157)获取
   */
  PGroupId: string
  /**
   * 规则 ID，可通过[DescribeCfsRules](https://cloud.tencent.com/document/api/582/38156)接口获取
   */
  RuleId: string
  /**
   * 可以填写单个 IP 或者单个网段，例如 10.1.10.11 或者 10.10.1.0/24。默认来访地址为*表示允许所有。同时需要注意，此处需填写 CVM 的内网 IP。
   */
  AuthClientIp?: string
  /**
   * 读写权限, 值为RO、RW；其中 RO 为只读，RW 为读写，不填默认为只读
   */
  RWPermission?: string
  /**
   * 用户权限，值为all_squash、no_all_squash、root_squash、no_root_squash，默认值为root_squash
all_squash：所有访问用户（含 root 用户）都会被映射为匿名用户或用户组。
no_all_squash：所有访问用户（含 root 用户）均保持原有的 UID/GID 信息。
root_squash：将来访的 root 用户映射为匿名用户或用户组，非 root 用户保持原有的 UID/GID 信息。
no_root_squash：与 no_all_squash 效果一致，所有访问用户（含 root 用户）均保持原有的 UID/GID 信息

   */
  UserPermission?: string
  /**
   * 规则优先级，参数范围1-100。 其中 1 为最高，100为最低，默认值为100
   */
  Priority?: number
}

/**
 * StopLifecycleDataTask返回参数结构体
 */
export interface StopLifecycleDataTaskResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteUserQuota请求参数结构体
 */
export interface DeleteUserQuotaRequest {
  /**
   * 文件系统ID，通过查询文件系统列表获取；[DescribeCfsFileSystems](https://cloud.tencent.com/document/product/582/38170)
   */
  FileSystemId: string
  /**
   * 指定配额类型，包括Uid（按用户ID限制）、Gid（按用户组ID限制）、Dir（按目录限制）
   */
  UserType: string
  /**
   * UID/GID信息，和DirectoryPath参数，两者必须填写一个
   */
  UserId?: string
  /**
   * 设置目录配额的目录的绝对路径，和UserId参数，两者必须填写一个
   */
  DirectoryPath?: string
}

/**
 * DescribeAvailableZoneInfo返回参数结构体
 */
export interface DescribeAvailableZoneInfoResponse {
  /**
   * 各可用区的资源售卖情况以及支持的存储类型、存储协议等信息
   */
  RegionZones?: Array<AvailableRegion>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteCfsSnapshot返回参数结构体
 */
export interface DeleteCfsSnapshotResponse {
  /**
   * 文件系统ID
   */
  SnapshotId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeCfsFileSystemClients返回参数结构体
 */
export interface DescribeCfsFileSystemClientsResponse {
  /**
   * 客户端列表
   */
  ClientList?: Array<FileSystemClient>
  /**
   * 文件系统总数
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DoDirectoryOperation返回参数结构体
 */
export interface DoDirectoryOperationResponse {
  /**
   * 1:成功  0:失败  创建目录的操作，1表示创建成功，0表示创建失败。  确认目录是否存在的操作，1表示目录存在，0表示目录不存在。  说明：创建目录操作若目录已存在，也会返回创建成功。
   */
  Result?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteMountTarget返回参数结构体
 */
export interface DeleteMountTargetResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyLifecyclePolicy返回参数结构体
 */
export interface ModifyLifecyclePolicyResponse {
  /**
   * 生命周期管理策略ID
   */
  LifecyclePolicyID?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateCfsSnapshot请求参数结构体
 */
export interface CreateCfsSnapshotRequest {
  /**
   * 文件系统ID，通过查询文件系统列表获取；[DescribeCfsFileSystems](https://cloud.tencent.com/document/product/582/38170)
   */
  FileSystemId: string
  /**
   * 快照名称，支持不超过64字符长度，支持中文、数字、_、-
   */
  SnapshotName?: string
  /**
   * 快照标签
   */
  ResourceTags?: Array<TagInfo>
}

/**
 * DescribeBucketList请求参数结构体
 */
export interface DescribeBucketListRequest {
  /**
   * 数据源服务商。COS: 腾讯云COS，OSS: 阿里云OSS，OBS:华为云OBS
   */
  SrcService: string
  /**
   * 数据源账号的SecretId
   */
  SrcSecretId: string
  /**
   * 数据源账号的SecretKey
   */
  SrcSecretKey: string
}

/**
 * DeleteCfsRule请求参数结构体
 */
export interface DeleteCfsRuleRequest {
  /**
   * 权限组 ID，可通过[DescribeCfsPGroups接口](https://cloud.tencent.com/document/api/582/38157)获取
   */
  PGroupId: string
  /**
   * 规则 ID，可通过[DescribeCfsRules](https://cloud.tencent.com/document/api/582/38156)接口获取
   */
  RuleId: string
}

/**
 * ApplyPathLifecyclePolicy返回参数结构体
 */
export interface ApplyPathLifecyclePolicyResponse {
  /**
   * 有规则冲突时返回的已有冲突规则信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  CheckResults?: Array<CheckResult>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * UpdateCfsRule返回参数结构体
 */
export interface UpdateCfsRuleResponse {
  /**
   * 权限组 ID
   */
  PGroupId?: string
  /**
   * 规则 ID
   */
  RuleId?: string
  /**
   * 允许访问的客户端 IP 或者 IP 段
   */
  AuthClientIp?: string
  /**
   * 读写权限
   */
  RWPermission?: string
  /**
   * 用户权限
   */
  UserPermission?: string
  /**
   * 优先级
   */
  Priority?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteMigrationTask返回参数结构体
 */
export interface DeleteMigrationTaskResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeLifecycleDataTask请求参数结构体
 */
export interface DescribeLifecycleDataTaskRequest {
  /**
   * 开始时间
   */
  StartTime: string
  /**
   * 结束时间
   */
  EndTime: string
  /**
   * 	任务ID
   */
  TaskId?: string
  /**
   * Offset 分页码
   */
  Offset?: number
  /**
   * Limit 页面大小
   */
  Limit?: number
  /**
   * 过滤条件，TaskName，FileSystemId，Type
   */
  Filters?: Array<Filter>
}

/**
 * DescribeSnapshotOperationLogs返回参数结构体
 */
export interface DescribeSnapshotOperationLogsResponse {
  /**
   * 快照ID
   */
  SnapshotId?: string
  /**
   * 操作日志
   */
  SnapshotOperates?: Array<SnapshotOperateLog>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteCfsFileSystem请求参数结构体
 */
export interface DeleteCfsFileSystemRequest {
  /**
   * 文件系统 ID，通过[查询文件系统接口](https://cloud.tencent.com/document/api/582/38170)获取。说明，进行删除文件系统操作前需要先调用 DeleteMountTarget 接口删除该文件系统的挂载点，否则会删除失败。
   */
  FileSystemId: string
}

/**
 * UpdateFileSystemBandwidthLimit请求参数结构体
 */
export interface UpdateFileSystemBandwidthLimitRequest {
  /**
   * 文件系统 ID,可通过[DescribeCfsFileSystems](https://cloud.tencent.com/document/api/582/38170)接口获取
   */
  FileSystemId: string
  /**
   * 文件系统带宽，仅吞吐型可填。单位MiB/s，最小为1GiB/s，最大200GiB/s。
   */
  BandwidthLimit: number
}

/**
 * DeleteLifecyclePolicy返回参数结构体
 */
export interface DeleteLifecyclePolicyResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateCfsPGroup返回参数结构体
 */
export interface CreateCfsPGroupResponse {
  /**
   * 权限组 ID
   */
  PGroupId: string
  /**
   * 权限组名字
   */
  Name: string
  /**
   * 权限组描述信息
   */
  DescInfo: string
  /**
   * 已经与该权限组绑定的文件系统个数
   */
  BindCfsNum: number
  /**
   * 权限组创建时间
   */
  CDate: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeCfsServiceStatus请求参数结构体
 */
export type DescribeCfsServiceStatusRequest = null

/**
 * 有规则冲突时返回的已有冲突规则信息列表
 */
export interface CheckResult {
  /**
   * 生命周期管理策略ID
   */
  LifecyclePolicyID: string
  /**
   * 文件系统ID
   */
  FileSystemId: string
  /**
   * 目录绝对路径
   */
  Path: string
  /**
   * 生命周期管理策略关联的管理规则列表
   */
  LifecycleRules: Array<LifecycleRule>
  /**
   * 目标路径
   */
  TargetPath: string
}

/**
 * DeleteUserQuota返回参数结构体
 */
export interface DeleteUserQuotaResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteMigrationTask请求参数结构体
 */
export interface DeleteMigrationTaskRequest {
  /**
   * 迁移任务ID
   */
  TaskId: string
}

/**
 * 文件系统绑定权限组信息
 */
export interface PGroup {
  /**
   * 权限组ID
   */
  PGroupId?: string
  /**
   * 权限组名称
   */
  Name?: string
}

/**
 * SetUserQuota请求参数结构体
 */
export interface SetUserQuotaRequest {
  /**
   * 文件系统 ID,通过[查询文件系统列表](https://cloud.tencent.com/document/api/582/38170)获取
   */
  FileSystemId: string
  /**
   * 指定配额类型，包括Uid、Gid，Dir，分别代表用户配额，用户组配额，目录配额
   */
  UserType: string
  /**
   * UID/GID信息
   */
  UserId?: string
  /**
   * 容量硬限制，单位GiB。设置范围10-10000000。
   */
  CapacityHardLimit?: number
  /**
   * 文件硬限制，单位个。设置范围1000-100000000
   */
  FileHardLimit?: number
  /**
   * 需设置目录配额的目录绝对路径，不同目录不可存在包含关系
   */
  DirectoryPath?: string
}

/**
 * CreateAutoSnapshotPolicy返回参数结构体
 */
export interface CreateAutoSnapshotPolicyResponse {
  /**
   * 快照策略ID
   */
  AutoSnapshotPolicyId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyFileSystemAutoScaleUpRule返回参数结构体
 */
export interface ModifyFileSystemAutoScaleUpRuleResponse {
  /**
   * 文件系统 ID
   */
  FileSystemId?: string
  /**
   * 规则状态 0：关闭，1：开启
   */
  Status?: number
  /**
   * 扩容阈值，范围[10-90]
   */
  ScaleUpThreshold?: number
  /**
   * 扩容后达到阈值，范围[10-90]
   */
  TargetThreshold?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 数据流动信息
 */
export interface DataFlowInfo {
  /**
   * 数据流动管理 ID
   */
  DataFlowId?: string
  /**
   * 数据流动名称
   */
  DataFlowName?: string
  /**
   * 源端数据类型
   */
  SourceStorageType?: string
  /**
   * 源端存储地址
   */
  SourceStorageAddress?: string
  /**
   * 源端路径
   */
  SourcePath?: string
  /**
   * 目录路径
   */
  TargetPath?: string
  /**
   * available：已生效
pending：配置中
unavailable：失效
deleting：删除中
   */
  Status?: string
  /**
   * 创建时间
   */
  CreationTime?: string
  /**
   * 文件系统 ID
   */
  FileSystemId?: string
}

/**
 * 版本控制-类型数组
 */
export interface AvailableType {
  /**
   * 协议与售卖详情
   */
  Protocols?: Array<AvailableProtoStatus>
  /**
   * 存储类型。返回值中 SD 为通用标准型存储， HP为通用性能型存储， TB为Turbo标准型， TP 为Turbo性能型。
   */
  Type?: string
  /**
   * 是否支持预付费。返回值中 true 为支持、false 为不支持
   */
  Prepayment?: boolean
}

/**
 * 生命周期管理策略信息
 */
export interface LifecyclePolicy {
  /**
   * 生命周期管理策略创建的时间
   */
  CreateTime: string
  /**
   * 生命周期管理策略ID
   */
  LifecyclePolicyID: string
  /**
   * 生命周期管理策略名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  LifecyclePolicyName: string
  /**
   * 生命周期管理策略关联的管理规则列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  LifecycleRules: Array<LifecycleRule>
  /**
   * 生命周期管理策略关联目录的绝对路径列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  Paths: Array<PathInfo>
}

/**
 * CreateCfsSnapshot返回参数结构体
 */
export interface CreateCfsSnapshotResponse {
  /**
   * 文件系统快照id
   */
  SnapshotId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 生命周期管理策略关联的管理规则
 */
export interface LifecycleRule {
  /**
   * 数据转储后的存储类型
   */
  StorageType: string
  /**
   * 数据转储文件类型
   */
  FileType: string
  /**
   * 数据转储行为
   */
  Action: string
  /**
   * 数据转储触发时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  Interval?: string
  /**
   * 数据转储文件最大规格
注意：此字段可能返回 null，表示取不到有效值。
   */
  FileMaxSize?: string
  /**
   * 数据转储文件最小规格
注意：此字段可能返回 null，表示取不到有效值。
   */
  FileMinSize?: string
}

/**
 * 文件系统配额信息
 */
export interface UserQuota {
  /**
   * 指定配额类型，包括Uid、Gid、Dir
   */
  UserType: string
  /**
   * UID/GID信息
   */
  UserId: string
  /**
   * 容量硬限制，单位GiB
   */
  CapacityHardLimit: number
  /**
   * 文件硬限制，单位个
   */
  FileHardLimit: number
  /**
   * 文件系统ID
   */
  FileSystemId: string
  /**
   * 容量使用，单位GiB
   */
  CapacityUsed?: number
  /**
   * 文件使用个数，单位个
   */
  FileUsed?: number
  /**
   * 目录配额的目录绝对路径
注意：此字段可能返回 null，表示取不到有效值。
   */
  DirectoryPath?: string
  /**
   * 配置规则状态，inavailable---配置中，available --已生效，deleting--删除中，deleted 已删除，failed--配置失败
   */
  Status?: string
}

/**
 * DeleteMountTarget请求参数结构体
 */
export interface DeleteMountTargetRequest {
  /**
   * 文件系统 ID
   */
  FileSystemId: string
  /**
   * 挂载点 ID
   */
  MountTargetId: string
}

/**
 * CreateCfsRule请求参数结构体
 */
export interface CreateCfsRuleRequest {
  /**
   * 权限组 ID，可通过[DescribeCfsPGroups接口](https://cloud.tencent.com/document/api/582/38157)获取
   */
  PGroupId: string
  /**
   * 可以填写单个 IP 或者单个网段，例如 10.1.10.11 或者 10.10.1.0/24。默认来访地址为*表示允许所有。同时需要注意，此处需填写 CVM 的内网 IP。
   */
  AuthClientIp: string
  /**
   * 规则优先级，参数范围1-100。 其中 1 为最高，100为最低
   */
  Priority: number
  /**
   * 读写权限, 值为 RO、RW；其中 RO 为只读，RW 为读写，不填默认为只读
   */
  RWPermission?: string
  /**
   * 用户权限，值为 all_squash、no_all_squash、root_squash、no_root_squash。默认值为root_squash
all_squash：所有访问用户（含 root 用户）都会被映射为匿名用户或用户组。
no_all_squash：所有访问用户（含 root 用户）均保持原有的 UID/GID 信息。
root_squash：将来访的 root 用户映射为匿名用户或用户组，非 root 用户保持原有的 UID/GID 信息。
no_root_squash：与 no_all_squash 效果一致，所有访问用户（含 root 用户）均保持原有的 UID/GID 信息

   */
  UserPermission?: string
}

/**
 * DeleteCfsFileSystem返回参数结构体
 */
export interface DeleteCfsFileSystemResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateCfsFileSystem返回参数结构体
 */
export interface CreateCfsFileSystemResponse {
  /**
   * 文件系统创建时间
   */
  CreationTime?: string
  /**
   * 用户自定义文件系统名称
   */
  CreationToken?: string
  /**
   * 文件系统 ID
   */
  FileSystemId?: string
  /**
   * 文件系统状态，可能出现状态包括：“creating”  创建中, “create_failed” 创建失败, “available” 可用, “unserviced” 不可用, “upgrading” 升级中， “deleting” 删除中。
   */
  LifeCycleState?: string
  /**
   * 文件系统已使用容量大小，单位为 Byte
   */
  SizeByte?: number
  /**
   * 可用区 ID
   */
  ZoneId?: number
  /**
   * 用户自定义文件系统名称
   */
  FsName?: string
  /**
   * 文件系统是否加密
   */
  Encrypted?: boolean
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 对象存储桶
 */
export interface BucketInfo {
  /**
   * 桶名称
   */
  Name?: string
  /**
   * 桶所在地域
注意：此字段可能返回 null，表示取不到有效值。
   */
  Region?: string
}

/**
 * DeleteDataFlow返回参数结构体
 */
export interface DeleteDataFlowResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateAccessCert请求参数结构体
 */
export interface CreateAccessCertRequest {
  /**
   * 证书描述，不超过64字符
   */
  CertDesc: string
}

/**
 * 生命周期任务
 */
export interface LifecycleDataTaskInfo {
  /**
   * 任务id
   */
  TaskId?: string
  /**
   * 任务状态.
init：未执行
running：执行中，finished：已完成
,failed：失败
,stopping：停止中,stopped：已停止
   */
  TaskStatus?: string
  /**
   * 任务创建时间
   */
  CreationTime?: string
  /**
   * 任务结束时间
   */
  FinishTime?: string
  /**
   * 文件总数
   */
  FileTotalCount?: number
  /**
   * 处理成功文件数量
   */
  FileSuccessedCount?: number
  /**
   * 当前已经失败的文件数
   */
  FileFailedCount?: number
  /**
   * 文件容量，单位Byte


   */
  FileTotalSize?: number
  /**
   * 已处理完成的文件容量，单位Byte


   */
  FileSuccessedSize?: number
  /**
   * 已处理失败文件容量，单位Byte

   */
  FileFailedSize?: number
  /**
   * 总文件列表
   */
  FileTotalList?: string
  /**
   * 成功的文件列表
   */
  FileSuccessedList?: string
  /**
   * 失败文件的列表
   */
  FileFailedList?: string
  /**
   * FileSystemId
   */
  FileSystemId?: string
  /**
   * 任务名称
   */
  TaskName?: string
  /**
   * 任务路径
   */
  TaskPath?: string
  /**
   * 任务类型,archive:表示沉降任务，restore：表示拉取任务
   */
  Type?: string
  /**
   * 数据流动Id
   */
  DataFlowId?: string
}

/**
 * DescribeLifecyclePolicies返回参数结构体
 */
export interface DescribeLifecyclePoliciesResponse {
  /**
   * 列表的分页页码
   */
  PageNumber?: number
  /**
   * 每个分页包含的生命周期管理策略个数
   */
  PageSize?: number
  /**
   * 生命周期管理策略总数
   */
  TotalCount?: number
  /**
   * 生命周期管理策略列表
   */
  LifecyclePolicies?: Array<LifecyclePolicy>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeUserQuota请求参数结构体
 */
export interface DescribeUserQuotaRequest {
  /**
   * 文件系统 ID,通过[查询文件系统列表](https://cloud.tencent.com/document/api/582/38170)获取
   */
  FileSystemId: string
  /**
   * 过滤条件。
UserType - Array of String - 是否必填：否 -（过滤条件）按配额类型过滤。(Uid|Gid|Dir，分别对应用户，用户组，目录 )
UserId- Array of String - 是否必填：否 -（过滤条件）按用户id过滤。
   */
  Filters?: Array<Filter>
  /**
   * Offset 分页码，默认值0
   */
  Offset?: number
  /**
   * Limit 页面大小，可填范围为大于0的整数，默认值是10
   */
  Limit?: number
}

/**
 * 文件系统基本信息
 */
export interface FileSystemInfo {
  /**
   * 创建时间
   */
  CreationTime?: string
  /**
   * 用户自定义名称
   */
  CreationToken?: string
  /**
   * 文件系统 ID
   */
  FileSystemId?: string
  /**
   * 文件系统状态。取值范围：
- creating:创建中
- mounting:挂载中
- create_failed:创建失败
- available:可使用
- unserviced:停服中
- upgrading:升级中
   */
  LifeCycleState?: string
  /**
   * 文件系统已使用容量。单位：Byte
   */
  SizeByte?: number
  /**
   * 文件系统空间限制。单位:GiB
   */
  SizeLimit?: number
  /**
   * 区域 ID
   */
  ZoneId?: number
  /**
   * 区域名称
   */
  Zone?: string
  /**
   * 文件系统协议类型, 支持 NFS,CIFS,TURBO
   */
  Protocol?: string
  /**
   * 存储类型，HP：通用性能型；SD：通用标准型；TP:turbo性能型；TB：turbo标准型；THP：吞吐型
   */
  StorageType?: string
  /**
   * 文件系统绑定的预付费存储包
   */
  StorageResourcePkg?: string
  /**
   * 文件系统绑定的预付费带宽包（暂未支持）
   */
  BandwidthResourcePkg?: string
  /**
   * 文件系统绑定权限组信息
   */
  PGroup?: PGroup
  /**
   * 用户自定义名称
   */
  FsName?: string
  /**
   * 文件系统是否加密,true：代表加密，false：非加密
   */
  Encrypted?: boolean
  /**
   * 加密所使用的密钥，可以为密钥的 ID 或者 ARN
   */
  KmsKeyId?: string
  /**
   * 应用ID
   */
  AppId?: number
  /**
   * 文件系统吞吐上限，吞吐上限是根据文件系统当前已使用存储量、绑定的存储资源包以及吞吐资源包一同确定. 单位MiB/s
   */
  BandwidthLimit?: number
  /**
   * 文件系统关联的快照策略
   */
  AutoSnapshotPolicyId?: string
  /**
   * 文件系统处理快照状态,snapping：快照中，normal：正常状态
   */
  SnapStatus?: string
  /**
   * 文件系统容量规格上限
单位:GiB
   */
  Capacity?: number
  /**
   * 文件系统标签列表
   */
  Tags?: Array<TagInfo>
  /**
   * 文件系统生命周期管理状态
NotAvailable：不可用
Available:可用
   */
  TieringState?: string
  /**
   * 分层存储详情
   */
  TieringDetail?: TieringDetailInfo
  /**
   * 文件系统自动扩容策略
   */
  AutoScaleUpRule?: AutoScaleUpRule
  /**
   * 文件系统版本
   */
  Version?: string
  /**
   * 额外性能信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  ExstraPerformanceInfo?: Array<ExstraPerformanceInfo>
  /**
   * basic：标准版元数据类型
enhanced：增项版元数据类型
   */
  MetaType?: string
}

/**
 * DescribeDataFlow请求参数结构体
 */
export interface DescribeDataFlowRequest {
  /**
   * 文件系统 ID ，通过查询文件系统 [DescribeCfsFileSystems](https://cloud.tencent.com/document/product/582/38170) 获取
   */
  FileSystemId?: string
  /**
   * 数据流动 ID ，由创建数据流动返回
   */
  DataFlowId?: string
  /**
   * 每次查询返回值个数，默认20；最大100
   */
  Limit?: number
  /**
   * 偏移量，默认为0
   */
  Offset?: number
  /**
   * 文件系统版本；版本号：v1.5，v3.0，v3.1，v4.0
   */
  CfsVersion?: string
}

/**
 * DescribeBucketList返回参数结构体
 */
export interface DescribeBucketListResponse {
  /**
   * 桶的数量
   */
  TotalCount?: number
  /**
   * 桶列表
   */
  BucketList?: Array<BucketInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 挂载点信息
 */
export interface MountInfo {
  /**
   * 文件系统 ID
   */
  FileSystemId?: string
  /**
   * 挂载点 ID
   */
  MountTargetId?: string
  /**
   * 挂载点 IP
   */
  IpAddress?: string
  /**
   * 挂载根目录
   */
  FSID?: string
  /**
   * 挂载点状态，包括creating：创建中；available：运行中；
deleting：删除中；
create_failed： 创建失败
   */
  LifeCycleState?: string
  /**
   * 网络类型，包括VPC,CCN
   */
  NetworkInterface?: string
  /**
   * 私有网络 ID
   */
  VpcId?: string
  /**
   * 私有网络名称
   */
  VpcName?: string
  /**
   * 子网 Id
   */
  SubnetId?: string
  /**
   * 子网名称
   */
  SubnetName?: string
  /**
   * CFS Turbo使用的云联网ID
   */
  CcnID?: string
  /**
   * 云联网中CFS Turbo使用的网段
   */
  CidrBlock?: string
}

/**
 * UpdateCfsFileSystemName返回参数结构体
 */
export interface UpdateCfsFileSystemNameResponse {
  /**
   * 用户自定义文件系统名称
   */
  CreationToken?: string
  /**
   * 文件系统ID
   */
  FileSystemId?: string
  /**
   * 用户自定义文件系统名称
   */
  FsName?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeCfsSnapshotOverview返回参数结构体
 */
export interface DescribeCfsSnapshotOverviewResponse {
  /**
   * 统计信息
   */
  StatisticsList?: Array<SnapshotStatistics>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 自动扩容规则
 */
export interface AutoScaleUpRule {
  /**
   * 自动扩容策略开启，关闭
   */
  Status?: string
  /**
   * 集群用量占比，到达这个值后开始扩容,范围[10-90]
   */
  ScaleThreshold?: number
  /**
   * 扩容后使用量跟集群总量比例,范围[10-90]
   */
  TargetThreshold?: number
}

/**
 * DeleteCfsSnapshot请求参数结构体
 */
export interface DeleteCfsSnapshotRequest {
  /**
   * 快照ID，可以通过[DescribeCfsSnapshots](https://cloud.tencent.com/document/api/582/80206) 查询获取
   */
  SnapshotId?: string
  /**
   * 需要删除的文件系统快照ID 列表，快照ID，跟ID列表至少填一项
快照ID，可以通过[DescribeCfsSnapshots](https://cloud.tencent.com/document/api/582/80206) 查询获取
   */
  SnapshotIds?: Array<string>
}

/**
 * DescribeCfsFileSystemClients请求参数结构体
 */
export interface DescribeCfsFileSystemClientsRequest {
  /**
   * 文件系统 ID，通过[查询文件系统接口](https://cloud.tencent.com/document/api/582/38170)获取
   */
  FileSystemId: string
  /**
   * Offset 分页码，默认为0
   */
  Offset?: number
  /**
   * Limit 页面大小，默认为10，最大值为100
   */
  Limit?: number
}

/**
 * DescribeCfsSnapshots返回参数结构体
 */
export interface DescribeCfsSnapshotsResponse {
  /**
   * 总个数
   */
  TotalCount?: number
  /**
   * 快照信息描述
   */
  Snapshots?: Array<SnapshotInfo>
  /**
   * 快照列表快照汇总
   */
  TotalSize?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeCfsFileSystems请求参数结构体
 */
export interface DescribeCfsFileSystemsRequest {
  /**
   * 文件系统 ID
   */
  FileSystemId?: string
  /**
   * 私有网络（VPC） ID
   */
  VpcId?: string
  /**
   * 子网 ID
   */
  SubnetId?: string
  /**
   * Offset 分页码,默认0
   */
  Offset?: number
  /**
   * Limit 页面大小，默认10
   */
  Limit?: number
  /**
   * 用户自定义名称
   */
  CreationToken?: string
}

/**
 * 版本控制-区域数组
 */
export interface AvailableRegion {
  /**
   * 区域名称，如“ap-beijing”
   */
  Region: string
  /**
   * 区域名称，如“bj”
   */
  RegionName: string
  /**
   * 区域可用情况，当区域内至少有一个可用区处于可售状态时，取值为AVAILABLE，否则为UNAVAILABLE
   */
  RegionStatus: string
  /**
   * 可用区数组
   */
  Zones: Array<AvailableZone>
  /**
   * 区域中文名称，如“广州”
   */
  RegionCnName: string
}

/**
 * CreateCfsFileSystem请求参数结构体
 */
export interface CreateCfsFileSystemRequest {
  /**
   * 可用区名称，例如ap-beijing-1，请参考 [概览](https://cloud.tencent.com/document/product/582/13225) 文档中的地域与可用区列表
   */
  Zone: string
  /**
   * 网络类型，可选值为 VPC，CCN；其中 VPC 为私有网络， CCN 为云联网。通用标准型/性能型请选择VPC，Turbo标准型/性能型请选择CCN。
   */
  NetInterface: string
  /**
   * 权限组 ID,pgroupbasic 是默认权限组，通过控制查询权限组列表接口获取[DescribeCfsPGroups](https://cloud.tencent.com/document/product/582/38157)
   */
  PGroupId: string
  /**
   * 文件系统协议类型， 值为 NFS、CIFS、TURBO ; 若留空则默认为 NFS协议，turbo系列必须选择TURBO，不支持NFS、CIFS
   */
  Protocol?: string
  /**
   * 文件系统存储类型，默认值为 SD ；其中 SD 为通用标准型存储， HP为通用性能型存储， TB为Turbo标准型， TP 为Turbo性能型。
   */
  StorageType?: string
  /**
   * 私有网络（VPC） ID，若网络类型选择的是VPC，该字段为必填.通过查询私有网络接口获取，
[DescribeVpcs](https://cloud.tencent.com/document/product/215/15778)
   */
  VpcId?: string
  /**
   * 子网 ID，若网络类型选择的是VPC，该字段为必填。通过查询子网接口获取，
[DescribeSubnets](https://cloud.tencent.com/document/product/215/15784)
   */
  SubnetId?: string
  /**
   * 指定IP地址，仅VPC网络支持；若不填写、将在该子网下随机分配 IP，Turbo系列当前不支持指定
   */
  MountIP?: string
  /**
   * 用户自定义文件系统名称
   */
  FsName?: string
  /**
   * 文件系统标签
   */
  ResourceTags?: Array<TagInfo>
  /**
   * 用于保证请求幂等性的字符串。该字符串由客户生成，需保证不同请求之间唯一，最大值不超过64个ASCII字符。若不指定该参数，则无法保证请求的幂等性。用于保证请求幂等性的字符串失效时间为2小时。
   */
  ClientToken?: string
  /**
   * 云联网ID， 若网络类型选择的是CCN，该字段为必填;通过查询云联网列表接口获取，通过接口
[DescribeCcns](https://cloud.tencent.com/document/product/215/19199)

   */
  CcnId?: string
  /**
   * 云联网中CFS使用的网段， 若网络类型选择的是Ccn，该字段为必填，且不能和Ccn中已经绑定的网段冲突
   */
  CidrBlock?: string
  /**
   * 文件系统容量，turbo系列必填，单位为GiB。 turbo标准型单位GB，起售20TiB，即20480 GiB；扩容步长10TiB，即10240 GiB。turbo性能型起售10TiB，即10240 GiB；扩容步长10TiB，10240 GiB。
   */
  Capacity?: number
  /**
   * 文件系统快照ID，通过查询快照列表获取该参数，
[DescribeCfsSnapshots](https://cloud.tencent.com/document/product/582/80206)
   */
  SnapshotId?: string
  /**
   * 定期快照策略ID，通过查询快照策略信息获取,
[DescribeAutoSnapshotPolicies](https://cloud.tencent.com/document/product/582/38157)
   */
  AutoSnapshotPolicyId?: string
  /**
   * 是否开启默认扩容，仅turbo类型文件存储支持
   */
  EnableAutoScaleUp?: boolean
  /**
   * v1.5：创建普通版的通用文件系统；
v3.1：创建增强版的通用文件系统
说明：增强版的通用系统需要开通白名单才能使用，如有需要请提交工单与我们联系。
   */
  CfsVersion?: string
  /**
   * turbo文件系统元数据属性
basic：创建标准型的元数据
enhanced：创建增强型的元数据
   */
  MetaType?: string
}

/**
 * 版本控制-可用区数组
 */
export interface AvailableZone {
  /**
   * 可用区名称
   */
  Zone?: string
  /**
   * 可用区ID
   */
  ZoneId?: number
  /**
   * 可用区中文名称
   */
  ZoneCnName?: string
  /**
   * Type数组
   */
  Types?: Array<AvailableType>
  /**
   * 可用区中英文名称
   */
  ZoneName?: string
}

/**
 * DescribeMigrationTasks请求参数结构体
 */
export interface DescribeMigrationTasksRequest {
  /**
   * 分页的偏移量，默认值为0。
   */
  Offset?: number
  /**
   * 分页单页限制数目，默认值为20，最大值100。
   */
  Limit?: number
  /**
   * <br><li> taskId按照【迁移任务id】进行过滤。类型：String必选：否<br></li><br><li>  taskName按照【迁移任务名字】进行模糊搜索过滤。类型：String必选：否每次请求的Filters的上限为10，Filter.Values的上限为100。</li>
   */
  Filters?: Array<Filter>
}

/**
 * 权限组规则列表
 */
export interface PGroupRuleInfo {
  /**
   * 规则ID
   */
  RuleId?: string
  /**
   * 允许访问的客户端IP
   */
  AuthClientIp?: string
  /**
   * 读写权限, ro为只读，rw为读写
   */
  RWPermission?: string
  /**
   * all_squash：所有访问用户（含 root 用户）都会被映射为匿名用户或用户组。
no_all_squash：所有访问用户（含 root 用户）均保持原有的 UID/GID 信息。
root_squash：将来访的 root 用户映射为匿名用户或用户组，非 root 用户保持原有的 UID/GID 信息。
no_root_squash：与 no_all_squash 效果一致，所有访问用户（含 root 用户）均保持原有的 UID/GID 信息

   */
  UserPermission?: string
  /**
   * 规则优先级，1-100。 其中 1 为最高，100为最低
   */
  Priority?: number
}

/**
 * 条件过滤
 */
export interface Filter {
  /**
   * 值
   */
  Values: Array<string>
  /**
   * 名称
   */
  Name: string
}

/**
 * UnbindAutoSnapshotPolicy请求参数结构体
 */
export interface UnbindAutoSnapshotPolicyRequest {
  /**
   * 需要解绑的文件系统ID列表，用"," 分割，文件系统ID，通过查询文件系统列表获取；[DescribeCfsFileSystems](https://cloud.tencent.com/document/product/582/38170)
   */
  FileSystemIds: string
  /**
   * 解绑的快照策略ID，可以通过[DescribeAutoSnapshotPolicies](https://cloud.tencent.com/document/api/582/80208) 查询获取
   */
  AutoSnapshotPolicyId: string
}

/**
 * UnbindAutoSnapshotPolicy返回参数结构体
 */
export interface UnbindAutoSnapshotPolicyResponse {
  /**
   * 快照策略ID
   */
  AutoSnapshotPolicyId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeCfsServiceStatus返回参数结构体
 */
export interface DescribeCfsServiceStatusResponse {
  /**
   * 该用户当前 CFS 服务的状态，none 为未开通，creating 为开通中，created 为已开通
   */
  CfsServiceStatus?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 购买完额外性能之后的值
 */
export interface ExstraPerformanceInfo {
  /**
   * fixed: 最终值固定
   */
  Type?: string
  /**
   * 额外购买的CFS性能值，单位MB/s。
   */
  Performance?: number
}

/**
 * BindAutoSnapshotPolicy返回参数结构体
 */
export interface BindAutoSnapshotPolicyResponse {
  /**
   * 快照策略ID
   */
  AutoSnapshotPolicyId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeCfsSnapshots请求参数结构体
 */
export interface DescribeCfsSnapshotsRequest {
  /**
   * 文件系统 ID，通过查询文件系统 [DescribeCfsFileSystems](https://cloud.tencent.com/document/product/582/38170) 获取
   */
  FileSystemId?: string
  /**
   * 快照 ID
   */
  SnapshotId?: string
  /**
   * 分页起始位置，默认为0
   */
  Offset?: number
  /**
   * 页面长度，默认为20
   */
  Limit?: number
  /**
   * 过滤条件。
<br>SnapshotId - Array of String - 是否必填：否 -（过滤条件）按快照ID过滤。
<br>SnapshotName - Array of String - 是否必填：否 -（过滤条件）按照快照名称过滤。
<br>FileSystemId - Array of String - 是否必填：否 -（过滤条件）按文件系统ID过滤。
<br>FsName - Array of String - 是否必填：否 -（过滤条件）按文件系统名过滤。
<br>Status - Array of String - 是否必填：否 -（过滤条件）按照快照状态过滤。状态分类：creating：创建中 | available：运行中 | deleting：删除中 | rollbacking_new：由快照创建新文件系统中 | create-failed：创建失败。
<br>tag-key - Array of String - 是否必填：否 -（过滤条件）按照标签键进行过滤。
<br>tag:tag-key - Array of String - 是否必填：否 -（过滤条件）按照标签键值对进行过滤。 tag-key 使用具体的标签键进行替换。
   */
  Filters?: Array<Filter>
  /**
   * 按创建时间排序取值
   */
  OrderField?: string
  /**
   * 排序；升序或者降序
   */
  Order?: string
}

/**
 * UpdateCfsFileSystemSizeLimit返回参数结构体
 */
export interface UpdateCfsFileSystemSizeLimitResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * UpdateAutoSnapshotPolicy请求参数结构体
 */
export interface UpdateAutoSnapshotPolicyRequest {
  /**
   * 解绑的快照策略ID，可以通过[DescribeAutoSnapshotPolicies](https://cloud.tencent.com/document/api/582/80208) 查询获取
   */
  AutoSnapshotPolicyId: string
  /**
   * 快照策略名称，不超过64个字符
   */
  PolicyName?: string
  /**
   * 快照定期备份，按照星期一到星期日。 1代表星期一，7代表星期日，与DayOfMonth，IntervalDays 三者选一个
   */
  DayOfWeek?: string
  /**
   * 快照定期备份在一天的哪一小时
   */
  Hour?: string
  /**
   * 快照保留天数
   */
  AliveDays?: number
  /**
   * 是否激活定期快照功能；1代表激活，0代表未激活
   */
  IsActivated?: number
  /**
   * 定期快照在每月的第几天创建快照，该参数与DayOfWeek,IntervalDays 三者选一
   */
  DayOfMonth?: string
  /**
   * 间隔天数定期执行快照，该参数与DayOfWeek,DayOfMonth 三者选一
   */
  IntervalDays?: number
}

/**
 * UpdateCfsFileSystemSizeLimit请求参数结构体
 */
export interface UpdateCfsFileSystemSizeLimitRequest {
  /**
   * 文件系统容量限制大小，输入范围0-1073741824, 单位为GB；其中输入值为0时，表示不限制文件系统容量。
   */
  FsLimit: number
  /**
   * 文件系统ID，目前仅支持标准型文件系统。该参数通过查询文件系统列表获取
   */
  FileSystemId: string
}

/**
 * DescribeCfsRules返回参数结构体
 */
export interface DescribeCfsRulesResponse {
  /**
   * 权限组规则列表
   */
  RuleList?: Array<PGroupRuleInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * UpdateCfsFileSystemPGroup返回参数结构体
 */
export interface UpdateCfsFileSystemPGroupResponse {
  /**
   * 权限组 ID
   */
  PGroupId?: string
  /**
   * 文件系统 ID
   */
  FileSystemId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * UpdateAutoSnapshotPolicy返回参数结构体
 */
export interface UpdateAutoSnapshotPolicyResponse {
  /**
   * 快照策略ID
   */
  AutoSnapshotPolicyId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 绑定快照策略的文件系统信息
 */
export interface FileSystemByPolicy {
  /**
   * 文件系统名称
   */
  CreationToken?: string
  /**
   * 文件系统ID
   */
  FileSystemId?: string
  /**
   * 文件系统大小，单位Byte
   */
  SizeByte?: number
  /**
   * 存储类型，HP：通用性能型；SD：通用标准型；TP:turbo性能型；TB：turbo标准型；THP：吞吐型
   */
  StorageType?: string
  /**
   * 快照总大小，单位GiB
   */
  TotalSnapshotSize?: number
  /**
   * 文件系统创建时间
   */
  CreationTime?: string
  /**
   * 文件系统所在区ID
   */
  ZoneId?: number
}

/**
 * 快照信息
 */
export interface SnapshotInfo {
  /**
   * 创建快照时间
   */
  CreationTime?: string
  /**
   * 快照名称
   */
  SnapshotName?: string
  /**
   * 快照ID
   */
  SnapshotId?: string
  /**
   * 快照状态，creating-创建中；available-运行中；deleting-删除中；rollbacking-new 创建新文件系统中；create-failed 创建失败
   */
  Status?: string
  /**
   * 地域名称
   */
  RegionName?: string
  /**
   * 文件系统ID
   */
  FileSystemId?: string
  /**
   * 快照大小
   */
  Size?: number
  /**
   * 保留时长天
   */
  AliveDay?: number
  /**
   * 快照进度百分比，1表示1% 范围1-100
   */
  Percent?: number
  /**
   * 账号ID
   */
  AppId?: number
  /**
   * 快照删除时间
   */
  DeleteTime?: string
  /**
   * 文件系统名称
   */
  FsName?: string
  /**
   * 快照标签
   */
  Tags?: Array<TagInfo>
  /**
   * 快照类型，general为通用系列快照，turbo为Turbo系列快照
注意：此字段可能返回 null，表示取不到有效值。
   */
  SnapshotType?: string
  /**
   * 实际快照时间，反映快照对应文件系统某个时刻的数据。
注意：此字段可能返回 null，表示取不到有效值。
   */
  SnapshotTime?: string
}

/**
 * 版本控制-协议详情
 */
export interface AvailableProtoStatus {
  /**
   * 售卖状态。可选值有 sale_out 售罄、saling可售、no_saling不可销售
   */
  SaleStatus?: string
  /**
   * 协议类型。可选值有 NFS、CIFS、TURBO
   */
  Protocol?: string
}

/**
 * UpdateCfsFileSystemPGroup请求参数结构体
 */
export interface UpdateCfsFileSystemPGroupRequest {
  /**
   * 权限组 ID，可通过[DescribeCfsPGroups接口](https://cloud.tencent.com/document/api/582/38157)获取
   */
  PGroupId: string
  /**
   * 文件系统 ID，通过[查询文件系统接口](https://cloud.tencent.com/document/api/582/38170)获取
   */
  FileSystemId: string
}

/**
 * CreateMigrationTask返回参数结构体
 */
export interface CreateMigrationTaskResponse {
  /**
   * 迁移任务 ID
   */
  TaskId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteAutoSnapshotPolicy返回参数结构体
 */
export interface DeleteAutoSnapshotPolicyResponse {
  /**
   * 快照策略ID
   */
  AutoSnapshotPolicyId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteCfsRule返回参数结构体
 */
export interface DeleteCfsRuleResponse {
  /**
   * 规则 ID
   */
  RuleId?: string
  /**
   * 权限组 ID
   */
  PGroupId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * UpdateCfsSnapshotAttribute返回参数结构体
 */
export interface UpdateCfsSnapshotAttributeResponse {
  /**
   * 文件系统快照ID
   */
  SnapshotId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * UpdateCfsPGroup请求参数结构体
 */
export interface UpdateCfsPGroupRequest {
  /**
   * 权限组 ID，可通过[DescribeCfsPGroups接口](https://cloud.tencent.com/document/api/582/38157)获取
   */
  PGroupId: string
  /**
   * 权限组名称，1-64个字符且只能为中文，字母，数字，下划线或横线
   */
  Name?: string
  /**
   * 权限组描述信息，1-255个字符。 Name和Descinfo不能同时为空
   */
  DescInfo?: string
}

/**
 * DeleteDataFlow请求参数结构体
 */
export interface DeleteDataFlowRequest {
  /**
   * 数据流动管理 ID
   */
  DataFlowId: string
  /**
   * 文件系统 ID ，通过查询文件系统 [DescribeCfsFileSystems](https://cloud.tencent.com/document/product/582/38170) 获取
   */
  FileSystemId?: string
}

/**
 * 生命周期管理策略关联目录的绝对路径
 */
export interface PathInfo {
  /**
   * 文件系统ID
   */
  FileSystemId: string
  /**
   * 目录绝对路径
   */
  Path: string
}

/**
 * SetUserQuota返回参数结构体
 */
export interface SetUserQuotaResponse {
  /**
   * UID/GID信息
   */
  UserId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * Tag信息单元
 */
export interface TagInfo {
  /**
   * 标签键
   */
  TagKey: string
  /**
   * 标签值
   */
  TagValue: string
}

/**
 * DescribeCfsPGroups请求参数结构体
 */
export type DescribeCfsPGroupsRequest = null

/**
 * DeleteCfsPGroup返回参数结构体
 */
export interface DeleteCfsPGroupResponse {
  /**
   * 权限组 ID
   */
  PGroupId?: string
  /**
   * 用户 ID
   */
  AppId?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * UpdateCfsSnapshotAttribute请求参数结构体
 */
export interface UpdateCfsSnapshotAttributeRequest {
  /**
   * 快照ID，可以通过[DescribeCfsSnapshots](https://cloud.tencent.com/document/api/582/80206) 查询获取
   */
  SnapshotId: string
  /**
   * 文件系统快照名称，与AliveDays 必须填一个，快照名称，支持不超过64字符长度，支持中文、数字、_、-
   */
  SnapshotName?: string
  /**
   * 文件系统快照保留天数，与SnapshotName必须填一个，如果原来是永久保留时间，不允许修改成短期有效期
   */
  AliveDays?: number
}

/**
 * DescribeUserQuota返回参数结构体
 */
export interface DescribeUserQuotaResponse {
  /**
   * UserQuota条目总数
   */
  TotalCount?: number
  /**
   * UserQuota条目
   */
  UserQuotaInfo?: Array<UserQuota>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyLifecyclePolicy请求参数结构体
 */
export interface ModifyLifecyclePolicyRequest {
  /**
   * 生命周期管理策略名称，中文/英文/数字/下划线/中划线的组合，不超过64个字符
   */
  LifecyclePolicyName: string
  /**
   * 生命周期管理策略关联的管理规则列表
   */
  LifecycleRules: Array<LifecycleRule>
  /**
   * 生命周期管理策略ID
   */
  LifecyclePolicyID: string
}

/**
 * DeleteLifecyclePolicy请求参数结构体
 */
export interface DeleteLifecyclePolicyRequest {
  /**
   * 生命周期管理策略ID
   */
  LifecyclePolicyID: string
}

/**
 * 分层存储详细信息
 */
export interface TieringDetailInfo {
  /**
   * 低频存储容量
   */
  TieringSizeInBytes?: number
  /**
   * 冷存储容量
   */
  SecondaryTieringSizeInBytes?: number
}

/**
 * CreateLifecyclePolicy请求参数结构体
 */
export interface CreateLifecyclePolicyRequest {
  /**
   * 生命周期管理策略名称，中文/英文/数字/下划线/中划线的组合，不超过64个字符
   */
  LifecyclePolicyName: string
  /**
   * 生命周期管理策略关联的管理规则列表
   */
  LifecycleRules: Array<LifecycleRule>
}

/**
 * 权限组数组
 */
export interface PGroupInfo {
  /**
   * 权限组ID
   */
  PGroupId?: string
  /**
   * 权限组名称
   */
  Name?: string
  /**
   * 描述信息
   */
  DescInfo?: string
  /**
   * 创建时间
   */
  CDate?: string
  /**
   * 关联文件系统个数
   */
  BindCfsNum?: number
}

/**
 * CreateCfsRule返回参数结构体
 */
export interface CreateCfsRuleResponse {
  /**
   * 规则 ID
   */
  RuleId?: string
  /**
   * 权限组 ID
   */
  PGroupId?: string
  /**
   * 客户端 IP
   */
  AuthClientIp?: string
  /**
   * 读写权限
   */
  RWPermission?: string
  /**
   * 用户权限
   */
  UserPermission?: string
  /**
   * 优先级
   */
  Priority?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * StopMigrationTask返回参数结构体
 */
export interface StopMigrationTaskResponse {
  /**
   * 迁移任务Id
   */
  TaskId?: string
  /**
   * 迁移状态。0: 已完成；1: 创建中；2: 运行中；3: 终止中；4: 已终止；5: 创建失败；6: 运行失败；7: 结束中；8: 删除中；9: 等待中
   */
  Status?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateAccessCert返回参数结构体
 */
export interface CreateAccessCertResponse {
  /**
   * 凭证唯一标识
   */
  CertId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * StopMigrationTask请求参数结构体
 */
export interface StopMigrationTaskRequest {
  /**
   * 迁移任务Id
   */
  TaskId: string
}

/**
 * DescribeAutoSnapshotPolicies返回参数结构体
 */
export interface DescribeAutoSnapshotPoliciesResponse {
  /**
   * 快照策略总个数
   */
  TotalCount?: number
  /**
   * 快照策略信息
   */
  AutoSnapshotPolicies?: Array<AutoSnapshotPolicyInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyDataFlow请求参数结构体
 */
export interface ModifyDataFlowRequest {
  /**
   * 数据流动管理 ID ，通过查询数据流动接口获取
   */
  DataFlowId: string
  /**
   * 文件系统 ID ，通过查询文件系统 [DescribeCfsFileSystems](https://cloud.tencent.com/document/product/582/38170) 获取
   */
  FileSystemId: string
  /**
   * 数据流动名称；支持不超过64字符长度，支持中文、数字、_、-
   */
  DataFlowName?: string
  /**
   * 密钥 ID
   */
  SecretId?: string
  /**
   * 密钥 key
   */
  SecretKey?: string
}

/**
 * DescribeCfsSnapshotOverview请求参数结构体
 */
export type DescribeCfsSnapshotOverviewRequest = null

/**
 * CreateAutoSnapshotPolicy请求参数结构体
 */
export interface CreateAutoSnapshotPolicyRequest {
  /**
   * 快照重复时间点,0-23，小时
   */
  Hour: string
  /**
   * 策略名称,限制64个字符数量仅支持输入中文、字母、数字、_或-
   */
  PolicyName?: string
  /**
   * 快照重复日期，星期一到星期日。 1代表星期一、7代表星期天，与DayOfMonth，IntervalDays 三者选一
   */
  DayOfWeek?: string
  /**
   * 快照保留时长，单位天，默认永久0
   */
  AliveDays?: number
  /**
   * 快照按月重复，每月1-31号，选择一天，每月将在这一天自动创建快照；例如1 代表1号；与DayOfWeek，IntervalDays 三者选一
   */
  DayOfMonth?: string
  /**
   * 间隔天数，与DayOfWeek，DayOfMonth 三者选一
   */
  IntervalDays?: number
}

/**
 * CreateDataFlow请求参数结构体
 */
export interface CreateDataFlowRequest {
  /**
   * 文件系统 ID ，通过查询文件系统 [DescribeCfsFileSystems](https://cloud.tencent.com/document/product/582/38170) 获取
   */
  FileSystemId: string
  /**
   * 源端数据类型；包含S3_COS，S3_L5
   */
  SourceStorageType: string
  /**
   * 源端存储地址
   */
  SourceStorageAddress: string
  /**
   * 源端路径
   */
  SourcePath: string
  /**
   * 文件系统内目标路径
   */
  TargetPath: string
  /**
   * 密钥 ID
   */
  SecretId: string
  /**
   * 密钥 key
   */
  SecretKey: string
  /**
   * 数据流动名称；支持不超过64字符长度，支持中文、数字、_、-
   */
  DataFlowName?: string
}

/**
 * DescribeDataFlow返回参数结构体
 */
export interface DescribeDataFlowResponse {
  /**
   * 查询总数量
   */
  TotalCount?: number
  /**
   * 无
   */
  DataFlows?: Array<DataFlowInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DoDirectoryOperation请求参数结构体
 */
export interface DoDirectoryOperationRequest {
  /**
   * 文件系统Id
   */
  FileSystemId: string
  /**
   * create：创建目录  check：确认目录是否存在
   */
  OpetationType: string
  /**
   * 目录的绝对路径  默认递归创建（即如果目录中有子目录不存在，则先创建出对应子目录）
   */
  DirectoryPath: string
  /**
   * 创建目录的权限，若不传，默认为0755  若Operation Type为check，此值无实际意义
   */
  Mode?: string
}
