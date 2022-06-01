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
 * 组信息，用于用户组、主机组
 */
export interface Group {
  /**
   * 组ID
   */
  Id: number

  /**
   * 组名称
   */
  Name: string
}

/**
 * CreateDeviceGroup返回参数结构体
 */
export interface CreateDeviceGroupResponse {
  /**
   * 新建成功的资产组ID
   */
  Id: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteAcls请求参数结构体
 */
export interface DeleteAclsRequest {
  /**
   * 待删除的权限ID集合
   */
  IdSet: Array<number>
}

/**
 * AddDeviceGroupMembers返回参数结构体
 */
export interface AddDeviceGroupMembersResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyUser请求参数结构体
 */
export interface ModifyUserRequest {
  /**
   * 用户ID
   */
  Id: number

  /**
   * 用户姓名，最大长度20个字符，不能包含空格
   */
  RealName: string

  /**
   * 大陆手机号直接填写，如果是其他国家、地区号码,按照"国家地区代码|手机号"的格式输入。如: "+852|xxxxxxxx"
   */
  Phone: string

  /**
   * 电子邮件
   */
  Email: string

  /**
      * 用户生效时间，如:"2021-09-22T00:00:00+00:00"
生效、失效时间不填则用户长期有效
      */
  ValidateFrom?: string

  /**
      * 用户失效时间，如:"2021-09-23T00:00:00+00:00"
生效、失效时间不填则用户长期有效
      */
  ValidateTo?: string

  /**
   * 所属用户组ID集合
   */
  GroupIdSet?: Array<number>

  /**
   * 认证方式，0 - 本地，1 - LDAP，2 - OAuth 不传则默认为0
   */
  AuthType?: number

  /**
   * 访问时间段限制， 由0、1组成的字符串，长度168(7 × 24)，代表该用户在一周中允许访问的时间段。字符串中第N个字符代表在一周中的第N个小时， 0 - 代表不允许访问，1 - 代表允许访问
   */
  ValidateTime?: string
}

/**
 * DeleteUsers请求参数结构体
 */
export interface DeleteUsersRequest {
  /**
   * 待删除的用户ID集合
   */
  IdSet: Array<number>
}

/**
 * DeleteDeviceGroupMembers返回参数结构体
 */
export interface DeleteDeviceGroupMembersResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * AddUserGroupMembers返回参数结构体
 */
export interface AddUserGroupMembersResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDasbImageIds返回参数结构体
 */
export interface DescribeDasbImageIdsResponse {
  /**
   * 基础镜像ID
   */
  BaseImageId?: string

  /**
   * AI镜像ID
   */
  AiImageId?: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateUser返回参数结构体
 */
export interface CreateUserResponse {
  /**
   * 新建用户的ID
   */
  Id: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyUser返回参数结构体
 */
export interface ModifyUserResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * AddUserGroupMembers请求参数结构体
 */
export interface AddUserGroupMembersRequest {
  /**
   * 用户组ID
   */
  Id: number

  /**
   * 成员用户ID集合
   */
  MemberIdSet: Array<number>
}

/**
 * DescribeUserGroups请求参数结构体
 */
export interface DescribeUserGroupsRequest {
  /**
   * 用户组ID集合
   */
  IdSet?: Array<number>

  /**
   * 用户组名，模糊查询,长度：0-64字符
   */
  Name?: string

  /**
   * 分页偏移位置
   */
  Offset?: number

  /**
   * 每页条目数量，缺省20，最大500
   */
  Limit?: number
}

/**
 * DescribeUserGroupMembers返回参数结构体
 */
export interface DescribeUserGroupMembersResponse {
  /**
   * 用户组成员总数
   */
  TotalCount: number

  /**
   * 用户组成员列表
   */
  UserSet: Array<User>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateUserGroup返回参数结构体
 */
export interface CreateUserGroupResponse {
  /**
   * 新建成功的用户组ID
   */
  Id: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDevices返回参数结构体
 */
export interface DescribeDevicesResponse {
  /**
   * 资产总数
   */
  TotalCount: number

  /**
   * 资产信息列表
   */
  DeviceSet: Array<Device>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeUserGroupMembers请求参数结构体
 */
export interface DescribeUserGroupMembersRequest {
  /**
   * 用户组ID
   */
  Id: number

  /**
   * true - 查询已添加到该用户组的用户，false - 查询未添加到该用户组的用户
   */
  Bound: boolean

  /**
   * 用户名或用户姓名，最长64个字符，模糊查询
   */
  Name?: string

  /**
   * 分页偏移位置
   */
  Offset?: number

  /**
   * 每页条目数量，默认20, 最大500
   */
  Limit?: number
}

/**
 * CreateAcl请求参数结构体
 */
export interface CreateAclRequest {
  /**
   * 权限名称，最大32字符，不能包含空白字符
   */
  Name: string

  /**
   * 是否开启磁盘映射
   */
  AllowDiskRedirect: boolean

  /**
   * 是否允许任意账号登录
   */
  AllowAnyAccount: boolean

  /**
   * 是否开启剪贴板文件上行
   */
  AllowClipFileUp?: boolean

  /**
   * 是否开启剪贴板文件下行
   */
  AllowClipFileDown?: boolean

  /**
   * 是否开启剪贴板文本（含图片）上行
   */
  AllowClipTextUp?: boolean

  /**
   * 是否开启剪贴板文本（含图片）下行
   */
  AllowClipTextDown?: boolean

  /**
   * 是否开启 SFTP 文件上传
   */
  AllowFileUp?: boolean

  /**
   * 文件传输上传大小限制（预留参数，目前暂未使用）
   */
  MaxFileUpSize?: number

  /**
   * 是否开启 SFTP 文件下载
   */
  AllowFileDown?: boolean

  /**
   * 文件传输下载大小限制（预留参数，目前暂未使用）
   */
  MaxFileDownSize?: number

  /**
   * 关联的用户ID集合
   */
  UserIdSet?: Array<number>

  /**
   * 关联的用户组ID
   */
  UserGroupIdSet?: Array<number>

  /**
   * 关联的资产ID集合
   */
  DeviceIdSet?: Array<number>

  /**
   * 关联的资产组ID
   */
  DeviceGroupIdSet?: Array<number>

  /**
   * 关联的账号
   */
  AccountSet?: Array<string>

  /**
   * 关联的高危命令模板ID
   */
  CmdTemplateIdSet?: Array<number>

  /**
   * 是否开启rdp磁盘映射文件上传
   */
  AllowDiskFileUp?: boolean

  /**
   * 是否开启rdp磁盘映射文件下载
   */
  AllowDiskFileDown?: boolean

  /**
   * 是否开启rz sz文件上传
   */
  AllowShellFileUp?: boolean

  /**
   * 是否开启rz sz文件下载
   */
  AllowShellFileDown?: boolean

  /**
   * 是否开启 SFTP 文件删除
   */
  AllowFileDel?: boolean

  /**
      * 访问权限生效时间，如:"2021-09-22T00:00:00+00:00"
生效、失效时间不填则访问权限长期有效
      */
  ValidateFrom?: string

  /**
      * 访问权限失效时间，如:"2021-09-23T00:00:00+00:00"
生效、失效时间不填则访问权限长期有效
      */
  ValidateTo?: string
}

/**
 * DeleteUserGroups请求参数结构体
 */
export interface DeleteUserGroupsRequest {
  /**
   * 待删除的用户组ID集合
   */
  IdSet: Array<number>
}

/**
 * 用户信息
 */
export interface User {
  /**
   * 用户名, 3-20个字符 必须以英文字母开头，且不能包含字母、数字、.、_、-以外的字符
   */
  UserName: string

  /**
   * 用户姓名， 最大20个字符，不能包含空白字符
   */
  RealName: string

  /**
   * 手机号码， 大陆手机号直接填写，如果是其他国家、地区号码,按照"国家地区代码|手机号"的格式输入。如: "+852|xxxxxxxx"
   */
  Phone: string

  /**
   * 用户ID
   */
  Id?: number

  /**
   * 电子邮件
   */
  Email?: string

  /**
      * 用户生效时间，如:"2021-09-22T00:00:00+00:00"
生效、失效时间不填则用户长期有效
      */
  ValidateFrom?: string

  /**
      * 用户失效时间，如:"2021-09-22T00:00:00+00:00"
生效、失效时间不填则用户长期有效
      */
  ValidateTo?: string

  /**
   * 所属用户组列表
   */
  GroupSet?: Array<Group>

  /**
   * 认证方式，0 - 本地，1 - LDAP，2 - OAuth
   */
  AuthType?: number

  /**
   * 访问时间段限制， 由0、1组成的字符串，长度168(7 × 24)，代表该用户在一周中允许访问的时间段。字符串中第N个字符代表在一周中的第N个小时， 0 - 代表不允许访问，1 - 代表允许访问
   */
  ValidateTime?: string
}

/**
 * ModifyAcl返回参数结构体
 */
export interface ModifyAclResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 资产信息
 */
export interface Device {
  /**
   * 资产ID
   */
  Id: number

  /**
   * 实例ID，对应CVM、CDB等实例ID
   */
  InstanceId: string

  /**
   * 资产名
   */
  Name: string

  /**
   * 公网IP
   */
  PublicIp: string

  /**
   * 内网IP
   */
  PrivateIp: string

  /**
   * 地域编码
   */
  ApCode: string

  /**
   * 操作系统名称
   */
  OsName: string

  /**
   * 资产类型 1 - Linux, 2 - Windows, 3 - MySQL, 4 - SQLServer
   */
  Kind: number

  /**
   * 管理端口
   */
  Port: number

  /**
   * 所属资产组列表
   */
  GroupSet: Array<Group>

  /**
   * 资产绑定的账号数
   */
  AccountCount: number

  /**
   * VPC ID
   */
  VpcId: string

  /**
   * 子网ID
   */
  SubnetId: string

  /**
      * 堡垒机服务信息，注意没有绑定服务时为null
注意：此字段可能返回 null，表示取不到有效值。
      */
  Resource: Resource
}

/**
 * DescribeAcls请求参数结构体
 */
export interface DescribeAclsRequest {
  /**
   * 访问权限ID集合
   */
  IdSet?: Array<number>

  /**
   * 访问权限名称，模糊查询，最长64字符
   */
  Name?: string

  /**
   * 分页偏移位置
   */
  Offset?: number

  /**
   * 每页条目数量，默认20，最大500
   */
  Limit?: number

  /**
   * 是否根据Name进行精确查询，默认值false
   */
  Exact?: boolean

  /**
   * 有访问权限的用户ID集合
   */
  AuthorizedUserIdSet?: Array<number>

  /**
   * 有访问权限的资产ID集合
   */
  AuthorizedDeviceIdSet?: Array<number>

  /**
   * 访问权限状态，1 - 已生效，2 - 未生效，3 - 已过期
   */
  Status?: number
}

/**
 * DeleteDeviceGroups请求参数结构体
 */
export interface DeleteDeviceGroupsRequest {
  /**
   * 待删除的资产组ID集合
   */
  IdSet: Array<number>
}

/**
 * DeleteUserGroupMembers请求参数结构体
 */
export interface DeleteUserGroupMembersRequest {
  /**
   * 用户组ID
   */
  Id: number

  /**
   * 需删除的成员用户ID集合
   */
  MemberIdSet: Array<number>
}

/**
 * DescribeDasbImageIds请求参数结构体
 */
export type DescribeDasbImageIdsRequest = null

/**
 * DeleteDeviceGroupMembers请求参数结构体
 */
export interface DeleteDeviceGroupMembersRequest {
  /**
   * 资产组ID
   */
  Id: number

  /**
   * 需要删除的资产ID集合
   */
  MemberIdSet: Array<number>
}

/**
 * 堡垒机服务信息
 */
export interface Resource {
  /**
   * 服务实例ID，如bh-saas-s3ed4r5e
   */
  ResourceId: string

  /**
   * 地域编码
   */
  ApCode: string

  /**
   * 服务实例规格信息
   */
  SvArgs: string

  /**
   * VPC ID
   */
  VpcId: string

  /**
   * 服务规格对应的资产数
   */
  Nodes: number

  /**
   * 自动续费标记，0 - 表示默认状态，1 - 表示自动续费，2 - 表示明确不自动续费
   */
  RenewFlag: number

  /**
   * 过期时间
   */
  ExpireTime: string

  /**
   * 资源状态，0 - 未初始化，1 - 正常，2 - 隔离，3 - 销毁，4 - 初始化失败，5 - 初始化中
   */
  Status: number

  /**
   * 服务实例名，如T-Sec-堡垒机（SaaS型）
   */
  ResourceName: string

  /**
   * 定价模型ID
   */
  Pid: number

  /**
   * 资源创建时间
   */
  CreateTime: string

  /**
   * 商品码, p_cds_dasb
   */
  ProductCode: string

  /**
   * 子商品码, sp_cds_dasb_bh_saas
   */
  SubProductCode: string

  /**
   * 可用区
   */
  Zone: string

  /**
   * 是否过期，true-过期，false-未过期
   */
  Expired: boolean

  /**
   * 是否开通，true-开通，false-未开通
   */
  Deployed: boolean

  /**
   * 开通服务的 VPC 名称
   */
  VpcName: string

  /**
   * 开通服务的 VPC 对应的网段
   */
  VpcCidrBlock: string

  /**
   * 开通服务的子网ID
   */
  SubnetId: string

  /**
   * 开通服务的子网名称
   */
  SubnetName: string

  /**
   * 开通服务的子网网段
   */
  CidrBlock: string

  /**
   * 外部IP
   */
  PublicIpSet: Array<string>

  /**
   * 内部IP
   */
  PrivateIpSet: Array<string>

  /**
   * 服务开通的高级功能列表，如:[DB]
   */
  ModuleSet: Array<string>

  /**
   * 已使用的授权点数
   */
  UsedNodes: number

  /**
   * 扩展点数
   */
  ExtendPoints: number

  /**
   * 带宽扩展包个数(4M)
   */
  PackageBandwidth: number

  /**
   * 授权点数扩展包个数(50点)
   */
  PackageNode: number
}

/**
 * DeleteUserGroups返回参数结构体
 */
export interface DeleteUserGroupsResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * BindDeviceResource请求参数结构体
 */
export interface BindDeviceResourceRequest {
  /**
   * 资产ID集合
   */
  DeviceIdSet: Array<number>

  /**
   * 堡垒机服务ID
   */
  ResourceId: string
}

/**
 * CreateDeviceGroup请求参数结构体
 */
export interface CreateDeviceGroupRequest {
  /**
   * 资产组名，最大长度32字符
   */
  Name: string
}

/**
 * CreateAcl返回参数结构体
 */
export interface CreateAclResponse {
  /**
   * 新建成功的访问权限ID
   */
  Id: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeAcls返回参数结构体
 */
export interface DescribeAclsResponse {
  /**
   * 访问权限总数
   */
  TotalCount: number

  /**
   * 访问权限列表
   */
  AclSet: Array<Acl>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeUsers返回参数结构体
 */
export interface DescribeUsersResponse {
  /**
   * 用户总数
   */
  TotalCount: number

  /**
   * 用户列表
   */
  UserSet: Array<User>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 访问权限
 */
export interface Acl {
  /**
   * 访问权限ID
   */
  Id: number

  /**
   * 访问权限名称
   */
  Name: string

  /**
   * 是否开启磁盘映射
   */
  AllowDiskRedirect: boolean

  /**
   * 是否开启剪贴板文件上行
   */
  AllowClipFileUp: boolean

  /**
   * 是否开启剪贴板文件下行
   */
  AllowClipFileDown: boolean

  /**
   * 是否开启剪贴板文本（目前含图片）上行
   */
  AllowClipTextUp: boolean

  /**
   * 是否开启剪贴板文本（目前含图片）下行
   */
  AllowClipTextDown: boolean

  /**
   * 是否开启文件传输上传
   */
  AllowFileUp: boolean

  /**
   * 文件传输上传大小限制（预留参数，暂未启用）
   */
  MaxFileUpSize: number

  /**
   * 是否开启文件传输下载
   */
  AllowFileDown: boolean

  /**
   * 文件传输下载大小限制（预留参数，暂未启用）
   */
  MaxFileDownSize: number

  /**
   * 是否允许任意账号登录
   */
  AllowAnyAccount: boolean

  /**
   * 关联的用户列表
   */
  UserSet: Array<User>

  /**
   * 关联的用户组列表
   */
  UserGroupSet: Array<Group>

  /**
   * 关联的资产列表
   */
  DeviceSet: Array<Device>

  /**
   * 关联的资产组列表
   */
  DeviceGroupSet: Array<Group>

  /**
   * 关联的账号列表
   */
  AccountSet: Array<string>

  /**
   * 关联的高危命令模板列表
   */
  CmdTemplateSet: Array<CmdTemplate>

  /**
   * 是否开启 RDP 磁盘映射文件上传
   */
  AllowDiskFileUp: boolean

  /**
   * 是否开启 RDP 磁盘映射文件下载
   */
  AllowDiskFileDown: boolean

  /**
   * 是否开启 rz sz 文件上传
   */
  AllowShellFileUp: boolean

  /**
   * 是否开启 rz sz 文件下载
   */
  AllowShellFileDown: boolean

  /**
   * 是否开启 SFTP 文件删除
   */
  AllowFileDel: boolean

  /**
      * 访问权限生效时间，如:"2021-09-22T00:00:00+00:00"
生效、失效时间不填则访问权限长期有效
      */
  ValidateFrom: string

  /**
      * 访问权限失效时间，如:"2021-09-23T00:00:00+00:00"
生效、失效时间不填则访问权限长期有效
      */
  ValidateTo: string

  /**
   * 访问权限状态，1 - 已生效，2 - 未生效，3 - 已过期
   */
  Status: number
}

/**
 * DescribeDevices请求参数结构体
 */
export interface DescribeDevicesRequest {
  /**
   * 资产ID集合
   */
  IdSet?: Array<number>

  /**
   * 资产名或资产IP，模糊查询
   */
  Name?: string

  /**
   * 暂未使用
   */
  Ip?: string

  /**
   * 地域码集合
   */
  ApCodeSet?: Array<string>

  /**
   * 操作系统类型, 1 - Linux, 2 - Windows, 3 - MySQL, 4 - SQLServer
   */
  Kind?: number

  /**
   * 分页，偏移位置
   */
  Offset?: number

  /**
   * 每页条目数量，默认20
   */
  Limit?: number

  /**
   * 有该资产访问权限的用户ID集合
   */
  AuthorizedUserIdSet?: Array<number>

  /**
   * 过滤条件，资产绑定的堡垒机服务ID集合
   */
  ResourceIdSet?: Array<string>

  /**
   * 可提供按照多种类型过滤, 1 - Linux, 2 - Windows, 3 - MySQL, 4 - SQLServer
   */
  KindSet?: Array<number>
}

/**
 * DescribeDeviceGroups请求参数结构体
 */
export interface DescribeDeviceGroupsRequest {
  /**
   * 资产组ID集合
   */
  IdSet?: Array<number>

  /**
   * 资产组名，最长64个字符，模糊查询
   */
  Name?: string

  /**
   * 分页偏移位置
   */
  Offset?: number

  /**
   * 每页条目数量，缺省20，最大500
   */
  Limit?: number
}

/**
 * ModifyAcl请求参数结构体
 */
export interface ModifyAclRequest {
  /**
   * 访问权限名称，最大32字符，不能包含空白字符
   */
  Name: string

  /**
   * 是否开启磁盘映射
   */
  AllowDiskRedirect: boolean

  /**
   * 是否允许任意账号登录
   */
  AllowAnyAccount: boolean

  /**
   * 访问权限ID
   */
  Id: number

  /**
   * 是否开启剪贴板文件上行
   */
  AllowClipFileUp?: boolean

  /**
   * 是否开启剪贴板文件下行
   */
  AllowClipFileDown?: boolean

  /**
   * 是否开启剪贴板文本（含图片）上行
   */
  AllowClipTextUp?: boolean

  /**
   * 是否开启剪贴板文本（含图片）下行
   */
  AllowClipTextDown?: boolean

  /**
   * 是否开启文件传输上传
   */
  AllowFileUp?: boolean

  /**
   * 文件传输上传大小限制（预留参数，目前暂未使用）
   */
  MaxFileUpSize?: number

  /**
   * 是否开启文件传输下载
   */
  AllowFileDown?: boolean

  /**
   * 文件传输下载大小限制（预留参数，目前暂未使用）
   */
  MaxFileDownSize?: number

  /**
   * 关联的用户ID
   */
  UserIdSet?: Array<number>

  /**
   * 关联的用户组ID
   */
  UserGroupIdSet?: Array<number>

  /**
   * 关联的资产ID
   */
  DeviceIdSet?: Array<number>

  /**
   * 关联的资产组ID
   */
  DeviceGroupIdSet?: Array<number>

  /**
   * 关联的账号
   */
  AccountSet?: Array<string>

  /**
   * 关联的高危命令模板ID
   */
  CmdTemplateIdSet?: Array<number>

  /**
   * 是否开启 RDP 磁盘映射文件上传
   */
  AllowDiskFileUp?: boolean

  /**
   * 是否开启 RDP 磁盘映射文件下载
   */
  AllowDiskFileDown?: boolean

  /**
   * 是否开启rz sz文件上传
   */
  AllowShellFileUp?: boolean

  /**
   * 是否开启rz sz文件下载
   */
  AllowShellFileDown?: boolean

  /**
   * 是否开启 SFTP 文件删除
   */
  AllowFileDel?: boolean

  /**
      * 访问权限生效时间，如:"2021-09-22T00:00:00+00:00"
生效、失效时间不填则访问权限长期有效
      */
  ValidateFrom?: string

  /**
      * 访问权限失效时间，如:"2021-09-23T00:00:00+00:00"
生效、失效时间不填则访问权限长期有效
      */
  ValidateTo?: string
}

/**
 * DescribeResources请求参数结构体
 */
export interface DescribeResourcesRequest {
  /**
   * 地域码, 如: ap-guangzhou
   */
  ApCode?: string

  /**
   * 按照堡垒机开通的 VPC 实例ID查询
   */
  VpcId?: string

  /**
   * 资源ID集合，当传入ID集合时忽略 ApCode 和 VpcId
   */
  ResourceIds?: Array<string>
}

/**
 * BindDeviceResource返回参数结构体
 */
export interface BindDeviceResourceResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateUser请求参数结构体
 */
export interface CreateUserRequest {
  /**
   * 用户名, 3-20个字符, 必须以英文字母开头，且不能包含字母、数字、.、_、-以外的字符
   */
  UserName: string

  /**
   * 用户姓名，最大长度20个字符，不能包含空白字符
   */
  RealName: string

  /**
   * 大陆手机号直接填写，如果是其他国家、地区号码， 按照"国家地区代码|手机号"的格式输入。如: "+852|xxxxxxxx"
   */
  Phone: string

  /**
   * 电子邮件
   */
  Email?: string

  /**
      * 用户生效时间，如:"2021-09-22T00:00:00+00:00"
生效、失效时间不填则用户长期有效
      */
  ValidateFrom?: string

  /**
      * 用户失效时间，如:"2021-09-23T00:00:00+00:00"
生效、失效时间不填则用户长期有效
      */
  ValidateTo?: string

  /**
   * 所属用户组ID集合
   */
  GroupIdSet?: Array<number>

  /**
   * 认证方式，0 - 本地， 1 - LDAP， 2 - OAuth 不传则默认为0
   */
  AuthType?: number

  /**
   * 访问时间段限制， 由0、1组成的字符串，长度168(7 × 24)，代表该用户在一周中允许访问的时间段。字符串中第N个字符代表在一周中的第N个小时， 0 - 代表不允许访问，1 - 代表允许访问
   */
  ValidateTime?: string
}

/**
 * DeleteUsers返回参数结构体
 */
export interface DeleteUsersResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDeviceGroups返回参数结构体
 */
export interface DescribeDeviceGroupsResponse {
  /**
   * 资产组总数
   */
  TotalCount: number

  /**
   * 资产组列表
   */
  GroupSet: Array<Group>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeResources返回参数结构体
 */
export interface DescribeResourcesResponse {
  /**
   * 堡垒机资源列表
   */
  ResourceSet: Array<Resource>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeUsers请求参数结构体
 */
export interface DescribeUsersRequest {
  /**
   * 如果IdSet不为空，则忽略其他参数
   */
  IdSet?: Array<number>

  /**
   * 模糊查询，IdSet、UserName、Phone为空时才生效，对用户名和姓名进行模糊查询
   */
  Name?: string

  /**
   * 分页，偏移位置
   */
  Offset?: number

  /**
   * 每页条目数量，默认20, 最大500
   */
  Limit?: number

  /**
   * 精确查询，IdSet为空时才生效
   */
  UserName?: string

  /**
      * 精确查询，IdSet、UserName为空时才生效。
大陆手机号直接填写，如果是其他国家、地区号码,按照"国家地区代码|手机号"的格式输入。如: "+852|xxxxxxxx"
      */
  Phone?: string

  /**
   * 查询具有指定资产ID访问权限的用户
   */
  AuthorizedDeviceIdSet?: Array<number>

  /**
   * 认证方式，0 - 本地, 1 - LDAP, 2 - OAuth, 不传为全部
   */
  AuthTypeSet?: Array<number>
}

/**
 * DeleteUserGroupMembers返回参数结构体
 */
export interface DeleteUserGroupMembersResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeUserGroups返回参数结构体
 */
export interface DescribeUserGroupsResponse {
  /**
   * 用户组总数
   */
  TotalCount: number

  /**
   * 用户组列表
   */
  GroupSet: Array<Group>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDeviceGroupMembers返回参数结构体
 */
export interface DescribeDeviceGroupMembersResponse {
  /**
   * 资产组成员总数
   */
  TotalCount: number

  /**
   * 资产组成员列表
   */
  DeviceSet: Array<Device>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 高危命令模板
 */
export interface CmdTemplate {
  /**
   * 高危命令模板ID
   */
  Id: number

  /**
   * 高危命令模板名称
   */
  Name: string

  /**
   * 命令列表，命令之间用换行符（"\n"）分隔
   */
  CmdList: string
}

/**
 * DeleteAcls返回参数结构体
 */
export interface DeleteAclsResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDeviceGroupMembers请求参数结构体
 */
export interface DescribeDeviceGroupMembersRequest {
  /**
   * 资产组ID
   */
  Id: number

  /**
   * true - 查询已在该资产组的资产，false - 查询未在该资产组的资产
   */
  Bound: boolean

  /**
   * 资产名或资产IP，模糊查询
   */
  Name?: string

  /**
   * 分页偏移位置
   */
  Offset?: number

  /**
   * 每页条目数，默认20, 最大500
   */
  Limit?: number

  /**
   * 资产类型，1 - Linux，2 - Windows，3 - MySQL，4 - SQLServer
   */
  Kind?: number
}

/**
 * DeleteDeviceGroups返回参数结构体
 */
export interface DeleteDeviceGroupsResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateUserGroup请求参数结构体
 */
export interface CreateUserGroupRequest {
  /**
   * 用户组名，最大长度32字符
   */
  Name: string
}

/**
 * AddDeviceGroupMembers请求参数结构体
 */
export interface AddDeviceGroupMembersRequest {
  /**
   * 资产组ID
   */
  Id: number

  /**
   * 需要添加到资产组的资产ID集合
   */
  MemberIdSet: Array<number>
}
