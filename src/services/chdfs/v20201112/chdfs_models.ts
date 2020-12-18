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
 * DescribeAccessRules请求参数结构体
 */
export interface DescribeAccessRulesRequest {
  /**
   * 权限组ID
   */
  AccessGroupId: string
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

  /**
   * VPC网络类型（1：CVM；2：黑石1.0）
   */
  VpcType: number

  /**
   * VPC网络ID
   */
  VpcId: string
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
 * AssociateAccessGroups请求参数结构体
 */
export interface AssociateAccessGroupsRequest {
  /**
   * 挂载点ID
   */
  MountPointId: string

  /**
   * 权限组ID列表
   */
  AccessGroupIds: Array<string>
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
   * 挂载点状态（1：打开；2：关闭）
   */
  MountPointStatus: number
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
      * VPC网络ID
备注：入参只能指定VpcId和OwnerUin的其中一个
      */
  VpcId?: string

  /**
   * 资源所属者Uin
   */
  OwnerUin?: number
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
   * 是否校验POSIX ACL
   */
  PosixAcl: boolean

  /**
   * 文件系统描述，默认为空字符串
   */
  Description?: string

  /**
   * 超级用户名列表，默认为空数组
   */
  SuperUsers?: Array<string>

  /**
   * 根目录Inode用户名，默认为hadoop
   */
  RootInodeUser?: string

  /**
   * 根目录Inode组名，默认为supergroup
   */
  RootInodeGroup?: string
}

/**
 * DisassociateAccessGroups请求参数结构体
 */
export interface DisassociateAccessGroupsRequest {
  /**
   * 挂载点ID
   */
  MountPointId: string

  /**
   * 权限组ID列表
   */
  AccessGroupIds: Array<string>
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

  /**
   * 超级用户名列表，可以为空数组
   */
  SuperUsers?: Array<string>

  /**
   * 是否校验POSIX ACL
   */
  PosixAcl?: boolean
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
 * 文件系统
 */
export interface FileSystem {
  /**
   * 资源所属用户AppId
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

  /**
   * 超级用户名列表
   */
  SuperUsers: Array<string>

  /**
   * POSIX权限控制
   */
  PosixAcl: boolean
}

/**
 * DisassociateAccessGroups返回参数结构体
 */
export interface DisassociateAccessGroupsResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
export type DescribeFileSystemsRequest = null

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
 * DescribeAccessGroup返回参数结构体
 */
export interface DescribeAccessGroupResponse {
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
   * 挂载点状态（1：打开；2：关闭）
   */
  Status: number

  /**
   * 创建时间
   */
  CreateTime: string

  /**
   * 绑定的权限组ID列表
   */
  AccessGroupIds: Array<string>
}

/**
 * DescribeAccessGroup请求参数结构体
 */
export interface DescribeAccessGroupRequest {
  /**
   * 权限组ID
   */
  AccessGroupId: string
}

/**
 * AssociateAccessGroups返回参数结构体
 */
export interface AssociateAccessGroupsResponse {
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
备注：入参只能指定AccessGroupId、FileSystemId和OwnerUin的其中一个
      */
  FileSystemId?: string

  /**
   * 权限组ID
   */
  AccessGroupId?: string

  /**
   * 资源所属者Uin
   */
  OwnerUin?: number
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
 * CreateAccessGroup请求参数结构体
 */
export interface CreateAccessGroupRequest {
  /**
   * 权限组名称
   */
  AccessGroupName: string

  /**
   * VPC网络类型（1：CVM；2：黑石1.0）
   */
  VpcType: number

  /**
   * VPC网络ID
   */
  VpcId: string

  /**
   * 权限组描述，默认为空字符串
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
