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
      * 文件系统已使用容量（byte）
注意：此字段可能返回 null，表示取不到有效值。
      */
  FileSystemCapacityUsed?: number

  /**
      * 已使用容量（byte）
注意：此字段可能返回 null，表示取不到有效值。
      */
  CapacityUsed?: number

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
 * DeleteFileSystem请求参数结构体
 */
export interface DeleteFileSystemRequest {
  /**
   * 文件系统ID
   */
  FileSystemId: string
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
  AccessRuleIds: Array<number>
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
 * DeleteAccessRules返回参数结构体
 */
export interface DeleteAccessRulesResponse {
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
 * ModifyAccessGroup返回参数结构体
 */
export interface ModifyAccessGroupResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
