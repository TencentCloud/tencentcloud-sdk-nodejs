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
 * DeleteAcls请求参数结构体
 */
export interface DeleteAclsRequest {
  /**
   * 待删除的权限ID集合
   */
  IdSet: Array<number>
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
   * 新建成功后返回的记录ID
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
   * 记录总数
   */
  TotalCount: number

  /**
   * 主机信息列表
   */
  DeviceSet: Array<Device>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateAcl请求参数结构体
 */
export interface CreateAclRequest {
  /**
   * 权限名称，最大32字符，不能为空，不能包含空白字符
   */
  Name: string

  /**
   * 是否开启磁盘映射
   */
  AllowDiskRedirect: boolean

  /**
   * 是否允许任意账号登陆
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
   * 是否开启剪贴板text（含图片）上行
   */
  AllowClipTextUp?: boolean

  /**
   * 是否开启剪贴板text（含图片）下行
   */
  AllowClipTextDown?: boolean

  /**
   * 是否开启SFTP文件上传
   */
  AllowFileUp?: boolean

  /**
   * 文件传输上传大小限制
   */
  MaxFileUpSize?: number

  /**
   * 是否开启SFTP文件下载
   */
  AllowFileDown?: boolean

  /**
   * 文件传输下载大小限制
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
   * 关联的主机ID
   */
  DeviceIdSet?: Array<number>

  /**
   * 关联的主机组ID
   */
  DeviceGroupIdSet?: Array<number>

  /**
   * 关联的账号，账号name
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
   * 是否开启SFTP文件删除
   */
  AllowFileDel?: boolean

  /**
   * 生效日期，如果为空，默认1970-01-01T08:00:01+08:00
   */
  ValidateFrom?: string

  /**
   * 失效日期，如果为空，默认1970-01-01T08:00:01+08:00
   */
  ValidateTo?: string
}

/**
 * 用户信息
 */
export interface User {
  /**
   * 用户名
   */
  UserName: string

  /**
   * 用户姓名
   */
  RealName: string

  /**
   * 手机号码
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
   * 生效起始时间
   */
  ValidateFrom?: string

  /**
   * 生效结束时间
   */
  ValidateTo?: string

  /**
   * 所属用户组列表
   */
  GroupSet?: Array<Group>

  /**
   * 认证方式，0-本地 1-ldap
   */
  AuthType?: number

  /**
   * 生效时间段, 0、1组成的字符串，长度168(7*24), 代表该用户的生效时间. 0 - 未生效，1 - 生效
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
 * 主机信息
 */
export interface Device {
  /**
   * 主机记录ID
   */
  Id: number

  /**
   * 主机ID，对应cvm实例id
   */
  InstanceId: string

  /**
   * 主机名
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
   * 主机类型，1-Linux, 2-Windows
   */
  Kind: number

  /**
   * 管理端口
   */
  Port: number

  /**
   * 所属主机组信息列表
   */
  GroupSet: Array<Group>

  /**
   * 主机绑定的账号数
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
 * ModifyUser返回参数结构体
 */
export interface ModifyUserResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDasbImageIds请求参数结构体
 */
export type DescribeDasbImageIdsRequest = null

/**
 * 用户购买的堡垒机资源信息
 */
export interface Resource {
  /**
   * 资源实例id，如bh-saas-s3ed4r5e
   */
  ResourceId: string

  /**
   * 地域编码
   */
  ApCode: string

  /**
   * 实例规格信息（询价参数）
   */
  SvArgs: string

  /**
   * vpc id
   */
  VpcId: string

  /**
   * 堡垒机规格对应的资产数
   */
  Nodes: number

  /**
   * 自动续费标记，0表示默认状态，1表示自动续费，2表示明确不自动续费
   */
  RenewFlag: number

  /**
   * 过期时间
   */
  ExpireTime: string

  /**
   * 资源状态，0未初始化，1正常，2隔离，3销毁，4初始化失败，5初始化中
   */
  Status: number

  /**
   * 实例名，如T-Sec-堡垒机（SaaS型）
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
   * 开通服务的VPC名称
   */
  VpcName: string

  /**
   * 开通服务的VPC对应的网段
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
   * 资源开通的高级功能列表，如:[DB]
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
 * CreateAcl返回参数结构体
 */
export interface CreateAclResponse {
  /**
   * 访问权限ID
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
   * 记录总数
   */
  TotalCount: number

  /**
   * 访问权限记录集合，当前分页
   */
  AclSet: Array<Acl>

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
   * 规则名
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
   * 是否开启剪贴板text（目前含图片）上行
   */
  AllowClipTextUp: boolean

  /**
   * 是否开启剪贴板text（目前含图片）下行
   */
  AllowClipTextDown: boolean

  /**
   * 是否开启文件传输上传
   */
  AllowFileUp: boolean

  /**
   * 文件传输上传大小限制
   */
  MaxFileUpSize: number

  /**
   * 是否开启文件传输下载
   */
  AllowFileDown: boolean

  /**
   * 文件传输下载大小限制
   */
  MaxFileDownSize: number

  /**
   * 是否允许任意账号登陆
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
   * 关联的主机列表
   */
  DeviceSet: Array<Device>

  /**
   * 关联的主机组列表
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
   * 是否开启rdp磁盘映射文件上传
   */
  AllowDiskFileUp: boolean

  /**
   * 是否开启rdp磁盘映射文件下载
   */
  AllowDiskFileDown: boolean

  /**
   * 是否开启rz sz文件上传
   */
  AllowShellFileUp: boolean

  /**
   * 是否开启rz sz文件下载
   */
  AllowShellFileDown: boolean

  /**
   * 是否开启SFTP文件删除
   */
  AllowFileDel: boolean

  /**
   * 生效日期
   */
  ValidateFrom: string

  /**
   * 失效日期
   */
  ValidateTo: string

  /**
   * 策略状态，1-已生效，2-未生效，3-已过期
   */
  Status: number
}

/**
 * DescribeDevices请求参数结构体
 */
export interface DescribeDevicesRequest {
  /**
   * 主机ID集合，非必需
   */
  IdSet?: Array<number>

  /**
   * 主机名或主机IP，模糊查询
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
   * 操作系统类型
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
   * 有该主机访问权限的用户ID集合
   */
  AuthorizedUserIdSet?: Array<number>

  /**
   * 过滤条件，主机绑定的堡垒机服务ID集合
   */
  ResourceIdSet?: Array<string>

  /**
   * 可提供按照多种类型过滤, 1-Linux, 2-Windows, 3-MySQL
   */
  KindSet?: Array<number>
}

/**
 * ModifyAcl请求参数结构体
 */
export interface ModifyAclRequest {
  /**
   * 权限名称，最大32字符，不能包含空白字符
   */
  Name: string

  /**
   * 是否开启磁盘映射
   */
  AllowDiskRedirect: boolean

  /**
   * 是否允许任意账号登陆
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
   * 是否开启剪贴板text（含图片）上行
   */
  AllowClipTextUp?: boolean

  /**
   * 是否开启剪贴板text（含图片）下行
   */
  AllowClipTextDown?: boolean

  /**
   * 是否开启文件传输上传
   */
  AllowFileUp?: boolean

  /**
   * 文件传输上传大小限制
   */
  MaxFileUpSize?: number

  /**
   * 是否开启文件传输下载
   */
  AllowFileDown?: boolean

  /**
   * 文件传输下载大小限制
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
   * 关联的主机ID
   */
  DeviceIdSet?: Array<number>

  /**
   * 关联的主机组ID
   */
  DeviceGroupIdSet?: Array<number>

  /**
   * 关联的账号，账号name
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
   * 是否开启SFTP文件删除
   */
  AllowFileDel?: boolean

  /**
   * 生效日期，如果为空，默认1970-01-01T08:00:01+08:00
   */
  ValidateFrom?: string

  /**
   * 失效日期，如果为空，默认1970-01-01T08:00:01+08:00
   */
  ValidateTo?: string
}

/**
 * CreateUser请求参数结构体
 */
export interface CreateUserRequest {
  /**
   * 用户名，最大长度32字符，不能为空
   */
  UserName: string

  /**
   * 用户姓名，最大长度32字符，不能为空
   */
  RealName: string

  /**
   * 手机号
   */
  Phone: string

  /**
   * 电子邮件
   */
  Email?: string

  /**
   * 生效起始时间,不设置则为1970-01-01T08:00:01+08:00
   */
  ValidateFrom?: string

  /**
   * 生效结束时间,不设置则为1970-01-01T08:00:01+08:00
   */
  ValidateTo?: string

  /**
   * 所属用户组ID集合
   */
  GroupIdSet?: Array<number>

  /**
   * 认证方式，0-本地 1-ldap 2-oauth,不传则默认为0
   */
  AuthType?: number

  /**
   * 生效时间段, 0、1组成的字符串，长度168(7*24), 代表该用户的生效时间. 0 - 未生效，1 - 生效
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
   * 每页条目数量，默认20
   */
  Limit?: number

  /**
   * 精确查询，IdSet为空时才生效
   */
  UserName?: string

  /**
   * 精确查询，IdSet、UserName为空时才生效
   */
  Phone?: string

  /**
   * 有访问权限的主机ID集合
   */
  AuthorizedDeviceIdSet?: Array<number>

  /**
   * 认证方式，0-本地，1-ldap, 2-oauth 不传为全部
   */
  AuthTypeSet?: Array<number>
}

/**
 * DescribeUsers返回参数结构体
 */
export interface DescribeUsersResponse {
  /**
   * 记录总数
   */
  TotalCount: number

  /**
   * 用户信息列表
   */
  UserSet: Array<User>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 命令模板
 */
export interface CmdTemplate {
  /**
   * 模板ID
   */
  Id: number

  /**
   * 模板名称
   */
  Name: string

  /**
   * 命令列表，\n分隔
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
 * ModifyUser请求参数结构体
 */
export interface ModifyUserRequest {
  /**
   * 用户ID
   */
  Id: number

  /**
   * 用户姓名，最大长度32字符，不能为空
   */
  RealName: string

  /**
   * 手机号
   */
  Phone: string

  /**
   * 电子邮件
   */
  Email: string

  /**
   * 生效起始时间,不设置则为1970-01-01 08:00:01
   */
  ValidateFrom?: string

  /**
   * 生效结束时间,不设置则为1970-01-01 08:00:01
   */
  ValidateTo?: string

  /**
   * 所属用户组ID集合
   */
  GroupIdSet?: Array<number>

  /**
   * 认证方式，0-本地 1-ldap, 2-oauth不传则默认为0
   */
  AuthType?: number

  /**
   * 生效时间段, 0、1组成的字符串，长度168(7*24), 代表该用户的生效时间. 0 - 未生效，1 - 生效
   */
  ValidateTime?: string
}

/**
 * DescribeAcls请求参数结构体
 */
export interface DescribeAclsRequest {
  /**
   * 访问权限ID集合，非必需
   */
  IdSet?: Array<number>

  /**
   * 访问权限名称，模糊查询，最长64字符
   */
  Name?: string

  /**
   * 分页，偏移位置
   */
  Offset?: number

  /**
   * 每页条目数量，默认20
   */
  Limit?: number

  /**
   * 是否根据Name进行精确查询,默认值false
   */
  Exact?: boolean

  /**
   * 有权限的用户ID集合
   */
  AuthorizedUserIdSet?: Array<number>

  /**
   * 有权限的主机ID集合
   */
  AuthorizedDeviceIdSet?: Array<number>

  /**
   * 策略状态，0-不限，1-已生效，2-未生效，3-已过期
   */
  Status?: number
}
