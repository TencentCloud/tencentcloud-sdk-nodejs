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
 * CreateFileSystem返回参数结构体
 */
export interface CreateFileSystemResponse {
  /**
   * 文件系统
   */
  FileSystem?: FileSystem
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 权限规则
 */
export interface AccessRule {
  /**
   * 权限规则ID
   */
  AccessRuleId?: number
  /**
   * 权限规则地址（网段或IP）
   */
  Address?: string
  /**
   * 权限规则访问模式（1：只读；2：读写）
   */
  AccessMode?: number
  /**
   * 优先级（取值范围1~100，值越小优先级越高）
   */
  Priority?: number
  /**
   * 创建时间
   */
  CreateTime?: string
}

/**
 * DescribeFileSystem返回参数结构体
 */
export interface DescribeFileSystemResponse {
  /**
   * 文件系统
   */
  FileSystem?: FileSystem
  /**
   * 文件系统已使用容量（已弃用）
注意：此字段可能返回 null，表示取不到有效值。
   */
  FileSystemCapacityUsed?: number
  /**
   * 已使用容量（byte），包括标准和归档存储
注意：此字段可能返回 null，表示取不到有效值。
   */
  CapacityUsed?: number
  /**
   * 已使用归档存储容量（byte）
注意：此字段可能返回 null，表示取不到有效值。
   */
  ArchiveCapacityUsed?: number
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 权限组
 */
export interface AccessGroup {
  /**
   * 权限组ID
   */
  AccessGroupId: string
  /**
   * 权限组名称
   */
  AccessGroupName: string
  /**
   * 权限组描述
   */
  Description: string
  /**
   * 创建时间
   */
  CreateTime: string
}

/**
 * ModifyFileSystem返回参数结构体
 */
export interface ModifyFileSystemResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyFileSystem请求参数结构体
 */
export interface ModifyFileSystemRequest {
  /**
   * 文件系统ID
   */
  FileSystemId: string
  /**
   * 文件系统名称
   */
  FileSystemName?: string
  /**
   * 文件系统描述
   */
  Description?: string
  /**
   * 文件系统容量（byte），下限为1G，上限为1P，且必须是1G的整数倍
注意：修改的文件系统容量不能小于当前使用量
   */
  CapacityQuota?: number
}

/**
 * DescribeLifeCycleRules请求参数结构体
 */
export interface DescribeLifeCycleRulesRequest {
  /**
   * 文件系统ID
   */
  FileSystemId: string
}

/**
 * ModifyAccessGroup请求参数结构体
 */
export interface ModifyAccessGroupRequest {
  /**
   * 权限组ID
   */
  AccessGroupId: string
  /**
   * 权限组名称
   */
  AccessGroupName?: string
  /**
   * 权限组描述
   */
  Description?: string
}

/**
 * DescribeFileSystems返回参数结构体
 */
export interface DescribeFileSystemsResponse {
  /**
   * 文件系统列表
   */
  FileSystems?: Array<FileSystem>
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeFileSystem请求参数结构体
 */
export interface DescribeFileSystemRequest {
  /**
   * 文件系统ID
   */
  FileSystemId: string
}

/**
 * CreateMountPoint请求参数结构体
 */
export interface CreateMountPointRequest {
  /**
   * 挂载点名称
   */
  MountPointName: string
  /**
   * 文件系统ID
   */
  FileSystemId: string
  /**
   * 权限组ID
   */
  AccessGroupId: string
  /**
   * VPC网络ID
   */
  VpcId: string
  /**
   * 挂载点状态（1：打开；2：关闭）
   */
  MountPointStatus: number
  /**
   * VPC网络类型（1：CVM；2：黑石1.0；3：黑石2.0）
   */
  VpcType: number
}

/**
 * DeleteAccessGroup请求参数结构体
 */
export interface DeleteAccessGroupRequest {
  /**
   * 权限组ID
   */
  AccessGroupId: string
}

/**
 * ModifyLifeCycleRules请求参数结构体
 */
export interface ModifyLifeCycleRulesRequest {
  /**
   * 多个生命周期规则，上限为10
   */
  LifeCycleRules: Array<LifeCycleRule>
}

/**
 * CreateRestoreTasks返回参数结构体
 */
export interface CreateRestoreTasksResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteFileSystem请求参数结构体
 */
export interface DeleteFileSystemRequest {
  /**
   * 文件系统ID
   */
  FileSystemId: string
}

/**
 * DescribeMountPoints请求参数结构体
 */
export interface DescribeMountPointsRequest {
  /**
   * 文件系统ID
注意：若根据AccessGroupId查看挂载点列表，则无需设置FileSystemId
   */
  FileSystemId?: string
  /**
   * 权限组ID
注意：若根据FileSystemId查看挂载点列表，则无需设置AccessGroupId
   */
  AccessGroupId?: string
  /**
   * 偏移量，默认为0
   */
  Offset?: number
  /**
   * 返回数量，默认为所有
   */
  Limit?: number
}

/**
 * DescribeMountPoint请求参数结构体
 */
export interface DescribeMountPointRequest {
  /**
   * 挂载点ID
   */
  MountPointId: string
}

/**
 * DescribeAccessGroups请求参数结构体
 */
export interface DescribeAccessGroupsRequest {
  /**
   * 过滤条件，Name可选“AccessGroupId“和“AccessGroupName”，Values上限为10
   */
  Filters?: Array<Filter>
  /**
   * 偏移量，默认为0
   */
  Offset?: number
  /**
   * 返回数量，默认为所有
   */
  Limit?: number
}

/**
 * DeleteAccessGroup返回参数结构体
 */
export interface DeleteAccessGroupResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyLifeCycleRules返回参数结构体
 */
export interface ModifyLifeCycleRulesResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteMountPoint返回参数结构体
 */
export interface DeleteMountPointResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateMountPoint返回参数结构体
 */
export interface CreateMountPointResponse {
  /**
   * 挂载点
   */
  MountPoint?: MountPoint
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateFileSystem请求参数结构体
 */
export interface CreateFileSystemRequest {
  /**
   * 文件系统名称
   */
  FileSystemName: string
  /**
   * 文件系统容量（byte），下限为1G，上限为1P，且必须是1G的整数倍
   */
  CapacityQuota: number
  /**
   * 文件系统描述
   */
  Description?: string
}

/**
 * ModifyResourceTags请求参数结构体
 */
export interface ModifyResourceTagsRequest {
  /**
   * 文件系统ID
   */
  FileSystemId: string
  /**
   * 多个资源标签，可以为空数组
   */
  Tags?: Array<Tag>
}

/**
 * DescribeResourceTags返回参数结构体
 */
export interface DescribeResourceTagsResponse {
  /**
   * 资源标签列表
   */
  Tags?: Array<Tag>
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeAccessGroups返回参数结构体
 */
export interface DescribeAccessGroupsResponse {
  /**
   * 权限组列表
   */
  AccessGroups?: Array<AccessGroup>
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteMountPoint请求参数结构体
 */
export interface DeleteMountPointRequest {
  /**
   * 挂载点ID
   */
  MountPointId: string
}

/**
 * DeleteFileSystem返回参数结构体
 */
export interface DeleteFileSystemResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateLifeCycleRules请求参数结构体
 */
export interface CreateLifeCycleRulesRequest {
  /**
   * 文件系统ID
   */
  FileSystemId: string
  /**
   * 多个生命周期规则，上限为10
   */
  LifeCycleRules: Array<LifeCycleRule>
}

/**
 * 过滤条件
 */
export interface Filter {
  /**
   * 过滤字段
   */
  Name: string
  /**
   * 过滤值
   */
  Values: Array<string>
}

/**
 * CreateAccessGroup返回参数结构体
 */
export interface CreateAccessGroupResponse {
  /**
   * 权限组
   */
  AccessGroup?: AccessGroup
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteLifeCycleRules请求参数结构体
 */
export interface DeleteLifeCycleRulesRequest {
  /**
   * 多个生命周期规则ID，上限为10
   */
  LifeCycleRuleIds: Array<number | bigint>
}

/**
 * 文件系统
 */
export interface FileSystem {
  /**
   * appid
   */
  AppId: number
  /**
   * 文件系统名称
   */
  FileSystemName: string
  /**
   * 文件系统描述
   */
  Description: string
  /**
   * 地域
   */
  Region: string
  /**
   * 文件系统ID
   */
  FileSystemId: string
  /**
   * 创建时间
   */
  CreateTime: string
  /**
   * 文件系统块大小（byte）
   */
  BlockSize: number
  /**
   * 文件系统容量（byte）
   */
  CapacityQuota: number
  /**
   * 文件系统状态（1：创建中；2：创建成功；3：创建失败）
   */
  Status: number
}

/**
 * 回热任务
 */
export interface RestoreTask {
  /**
   * 回热任务ID
   */
  RestoreTaskId?: number
  /**
   * 回热任务文件路径
   */
  FilePath?: string
  /**
   * 回热任务类型（1：标准；2：极速；3：批量）
   */
  Type?: number
  /**
   * 指定恢复出的临时副本的有效时长（单位天）
   */
  Days?: number
  /**
   * 回热任务状态（1：绑定文件中；2：绑定文件完成；3：文件回热中；4：文件回热完成）
   */
  Status?: number
  /**
   * 创建时间
   */
  CreateTime?: string
}

/**
 * ModifyMountPoint请求参数结构体
 */
export interface ModifyMountPointRequest {
  /**
   * 挂载点ID
   */
  MountPointId: string
  /**
   * 挂载点名称
   */
  MountPointName?: string
  /**
   * 挂载点状态
   */
  MountPointStatus?: number
  /**
   * 权限组ID
   */
  AccessGroupId?: string
}

/**
 * DeleteLifeCycleRules返回参数结构体
 */
export interface DeleteLifeCycleRulesResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateRestoreTasks请求参数结构体
 */
export interface CreateRestoreTasksRequest {
  /**
   * 文件系统ID
   */
  FileSystemId: string
  /**
   * 多个回热任务，上限为10
   */
  RestoreTasks: Array<RestoreTask>
}

/**
 * 生命周期规则转换属性
 */
export interface Transition {
  /**
   * 触发时间（单位天）
   */
  Days: number
  /**
   * 转换类型（1：归档；2：删除）
   */
  Type: number
}

/**
 * DescribeRestoreTasks返回参数结构体
 */
export interface DescribeRestoreTasksResponse {
  /**
   * 回热任务列表
   */
  RestoreTasks?: Array<RestoreTask>
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeLifeCycleRules返回参数结构体
 */
export interface DescribeLifeCycleRulesResponse {
  /**
   * 生命周期规则列表
   */
  LifeCycleRules?: Array<LifeCycleRule>
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateAccessRules返回参数结构体
 */
export interface CreateAccessRulesResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteAccessRules请求参数结构体
 */
export interface DeleteAccessRulesRequest {
  /**
   * 多个权限规则ID，上限为10
   */
  AccessRuleIds: Array<number | bigint>
}

/**
 * DeleteAccessRules返回参数结构体
 */
export interface DeleteAccessRulesResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeFileSystems请求参数结构体
 */
export interface DescribeFileSystemsRequest {
  /**
   * 偏移量，默认为0
   */
  Offset?: number
  /**
   * 返回数量，默认为所有
   */
  Limit?: number
}

/**
 * DescribeResourceTags请求参数结构体
 */
export interface DescribeResourceTagsRequest {
  /**
   * 文件系统ID
   */
  FileSystemId: string
}

/**
 * ModifyResourceTags返回参数结构体
 */
export interface ModifyResourceTagsResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 生命周期规则
 */
export interface LifeCycleRule {
  /**
   * 生命周期规则ID
   */
  LifeCycleRuleId?: number
  /**
   * 生命周期规则名称
   */
  LifeCycleRuleName?: string
  /**
   * 生命周期规则路径（目录或文件）
   */
  Path?: string
  /**
   * 生命周期规则转换列表
   */
  Transitions?: Array<Transition>
  /**
   * 生命周期规则状态（1：打开；2：关闭）
   */
  Status?: number
  /**
   * 创建时间
   */
  CreateTime?: string
}

/**
 * CreateAccessRules请求参数结构体
 */
export interface CreateAccessRulesRequest {
  /**
   * 多个权限规则，上限为10
   */
  AccessRules: Array<AccessRule>
  /**
   * 权限组ID
   */
  AccessGroupId: string
}

/**
 * DescribeAccessRules返回参数结构体
 */
export interface DescribeAccessRulesResponse {
  /**
   * 权限规则列表
   */
  AccessRules?: Array<AccessRule>
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 挂载点
 */
export interface MountPoint {
  /**
   * 挂载点ID
   */
  MountPointId: string
  /**
   * 挂载点名称
   */
  MountPointName?: string
  /**
   * 文件系统ID
   */
  FileSystemId: string
  /**
   * 权限组ID
   */
  AccessGroupId: string
  /**
   * VPC网络ID
   */
  VpcId: string
  /**
   * 挂载点状态（1：打开；2：关闭）
   */
  Status: number
  /**
   * 创建时间
   */
  CreateTime: string
  /**
   * VPC网络类型
   */
  VpcType: number
}

/**
 * DescribeMountPoints返回参数结构体
 */
export interface DescribeMountPointsResponse {
  /**
   * 挂载点列表
   */
  MountPoints?: Array<MountPoint>
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeRestoreTasks请求参数结构体
 */
export interface DescribeRestoreTasksRequest {
  /**
   * 文件系统ID
   */
  FileSystemId: string
}

/**
 * DescribeAccessRules请求参数结构体
 */
export interface DescribeAccessRulesRequest {
  /**
   * 权限组ID
   */
  AccessGroupId: string
  /**
   * 偏移量，默认为0
   */
  Offset?: number
  /**
   * 返回数量，默认为所有
   */
  Limit?: number
}

/**
 * ModifyAccessRules返回参数结构体
 */
export interface ModifyAccessRulesResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateLifeCycleRules返回参数结构体
 */
export interface CreateLifeCycleRulesResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyAccessGroup返回参数结构体
 */
export interface ModifyAccessGroupResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 资源标签。
 */
export interface Tag {
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
 * ModifyMountPoint返回参数结构体
 */
export interface ModifyMountPointResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyAccessRules请求参数结构体
 */
export interface ModifyAccessRulesRequest {
  /**
   * 多个权限规则，上限为10
   */
  AccessRules: Array<AccessRule>
}

/**
 * CreateAccessGroup请求参数结构体
 */
export interface CreateAccessGroupRequest {
  /**
   * 权限组名称
   */
  AccessGroupName: string
  /**
   * 权限组描述
   */
  Description?: string
}

/**
 * DescribeMountPoint返回参数结构体
 */
export interface DescribeMountPointResponse {
  /**
   * 挂载点
   */
  MountPoint?: MountPoint
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}
