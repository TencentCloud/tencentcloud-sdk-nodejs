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
 * DescribeAccountGroups返回参数结构体
 */
export interface DescribeAccountGroupsResponse {
  /**
   * 账户分组详情响应数据
注意：此字段可能返回 null，表示取不到有效值。
   */
  Data?: DescribeAccountGroupsPageResp
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeRootAccountGroup返回参数结构体
 */
export interface DescribeRootAccountGroupResponse {
  /**
   * 账户分组详情响应数据
注意：此字段可能返回 null，表示取不到有效值。
   */
  Data?: GetAccountGroupData
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 分页的data数据
 */
export interface DescribeDevicesPageRsp {
  /**
   * 数据分页信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  Paging?: Paging
  /**
   * 业务响应数据
注意：此字段可能返回 null，表示取不到有效值。
   */
  Items?: Array<DeviceDetail>
}

/**
 * 业务响应数据
 */
export interface DeviceDetail {
  /**
   * 设备ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  Id?: number
  /**
   * 设备唯一标识码，在ioa中每个设备有唯一标识码
注意：此字段可能返回 null，表示取不到有效值。
   */
  Mid?: string
  /**
   * 终端名（设备名）
注意：此字段可能返回 null，表示取不到有效值。
   */
  Name?: string
  /**
   * 设备所在分组ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  GroupId?: number
  /**
   * OS平台，0：Windows 、1： Linux、 2：macOS 、4： Android、 5: iOS。默认是0
注意：此字段可能返回 null，表示取不到有效值。
   */
  OsType?: number
  /**
   * 设备IP地址（出口IP）
注意：此字段可能返回 null，表示取不到有效值。
   */
  Ip?: string
  /**
   * 在线状态，2：在线、0或者1:离线
注意：此字段可能返回 null，表示取不到有效值。
   */
  OnlineStatus?: number
  /**
   * 客户端版本号-大整数
注意：此字段可能返回 null，表示取不到有效值。
   */
  Version?: string
  /**
   * 客户端版本号-点分字符串
注意：此字段可能返回 null，表示取不到有效值。
   */
  StrVersion?: string
  /**
   * 首次在线时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  Itime?: string
  /**
   * 最后一次在线时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  ConnActiveTime?: string
  /**
   * 设备是否加锁 ，1：锁定 0或者2：未锁定。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Locked?: number
  /**
   * 设备本地IP列表, 包括IP
注意：此字段可能返回 null，表示取不到有效值。
   */
  LocalIpList?: string
  /**
   * 主机ID(只支持32位)
注意：此字段可能返回 null，表示取不到有效值。
   */
  HostId?: number
  /**
   * 设备所属分组名
注意：此字段可能返回 null，表示取不到有效值。
   */
  GroupName?: string
  /**
   * 设备所属分组路径
注意：此字段可能返回 null，表示取不到有效值。
   */
  GroupNamePath?: string
  /**
   * 未修复高危漏洞数(只支持32位)
注意：此字段可能返回 null，表示取不到有效值。
   */
  CriticalVulListCount?: number
  /**
   * 设备名，和Name相同
注意：此字段可能返回 null，表示取不到有效值。
   */
  ComputerName?: string
  /**
   * 登录域名
注意：此字段可能返回 null，表示取不到有效值。
   */
  DomainName?: string
  /**
   * MAC地址
注意：此字段可能返回 null，表示取不到有效值。
   */
  MacAddr?: string
  /**
   * 漏洞数
注意：此字段可能返回 null，表示取不到有效值。
   */
  VulCount?: number
  /**
   * 病毒风险数
注意：此字段可能返回 null，表示取不到有效值。
   */
  RiskCount?: number
  /**
   * 病毒库版本
注意：此字段可能返回 null，表示取不到有效值。
   */
  VirusVer?: string
  /**
   * 漏洞库版本
注意：此字段可能返回 null，表示取不到有效值。
   */
  VulVersion?: string
  /**
   * 系统修复引擎版本
注意：此字段可能返回 null，表示取不到有效值。
   */
  SysRepVersion?: string
  /**
   * 高危补丁列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  VulCriticalList?: Array<string>
  /**
   * 标签
注意：此字段可能返回 null，表示取不到有效值。
   */
  Tags?: string
  /**
   * 终端用户名
注意：此字段可能返回 null，表示取不到有效值。
   */
  UserName?: string
  /**
   * 防火墙状态，不等于0表示开启
注意：此字段可能返回 null，表示取不到有效值。
   */
  FirewallStatus?: number
  /**
   * SN序列号
注意：此字段可能返回 null，表示取不到有效值。
   */
  SerialNum?: string
  /**
   * 设备管控策略版本
注意：此字段可能返回 null，表示取不到有效值。
   */
  DeviceStrategyVer?: string
  /**
   * NGN策略版本
注意：此字段可能返回 null，表示取不到有效值。
   */
  NGNStrategyVer?: string
  /**
   * 最近登录账户的账号
注意：此字段可能返回 null，表示取不到有效值。
   */
  IOAUserName?: string
  /**
   * 设备管控新策略
注意：此字段可能返回 null，表示取不到有效值。
   */
  DeviceNewStrategyVer?: string
  /**
   * NGN策略新版本
注意：此字段可能返回 null，表示取不到有效值。
   */
  NGNNewStrategyVer?: string
  /**
   * 主机名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  HostName?: string
  /**
   * 主板序列号
注意：此字段可能返回 null，表示取不到有效值。
   */
  BaseBoardSn?: string
  /**
   * 绑定账户只有名字
注意：此字段可能返回 null，表示取不到有效值。
   */
  AccountUsers?: string
  /**
   * 身份策略版本
注意：此字段可能返回 null，表示取不到有效值。
   */
  IdentityStrategyVer?: string
  /**
   * 身份策略新版本
注意：此字段可能返回 null，表示取不到有效值。
   */
  IdentityNewStrategyVer?: string
  /**
   * 最近登录账号部门
注意：此字段可能返回 null，表示取不到有效值。
   */
  AccountGroupName?: string
  /**
   * 最近登录账户的姓名
注意：此字段可能返回 null，表示取不到有效值。
   */
  AccountName?: string
  /**
   * 账号组id
注意：此字段可能返回 null，表示取不到有效值。
   */
  AccountGroupId?: number
}

/**
 * 获取账号列表响应的单个对象
 */
export interface DescribeLocalAccountsData {
  /**
   * uid，数据库中唯一
注意：此字段可能返回 null，表示取不到有效值。
   */
  Id?: number
  /**
   * 账号，登录账号
注意：此字段可能返回 null，表示取不到有效值。
   */
  UserId?: string
  /**
   * 用户名
注意：此字段可能返回 null，表示取不到有效值。
   */
  UserName?: string
  /**
   * 账号id，同Id字段
注意：此字段可能返回 null，表示取不到有效值。
   */
  AccountId?: number
  /**
   * 账号所在的分组id
注意：此字段可能返回 null，表示取不到有效值。
   */
  GroupId?: number
  /**
   * 账号所在的分组名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  GroupName?: string
  /**
   * 账号所在的分组名称路径，用英文.分割
注意：此字段可能返回 null，表示取不到有效值。
   */
  NamePath?: string
  /**
   * 账号来源,0表示本地账号(只支持32位)
注意：此字段可能返回 null，表示取不到有效值。
   */
  Source?: number
  /**
   * 账号状态,0禁用，1启用(只支持32位)
注意：此字段可能返回 null，表示取不到有效值。
   */
  Status?: number
  /**
   * 账号的创建时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  Itime?: string
  /**
   * 账号的最后更新时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  Utime?: string
  /**
   * 账号的扩展信息，包含邮箱、手机号、身份证、职位等信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  ExtraInfo?: string
  /**
   * 用户风险等级，枚举：none, low, middle, high
注意：此字段可能返回 null，表示取不到有效值。
   */
  RiskLevel?: string
  /**
   * 所属组
注意：此字段可能返回 null，表示取不到有效值。
   */
  AccountGroups?: Array<DescribeLocalAccountAccountGroupsData>
  /**
   * 绑定手机端设备数
注意：此字段可能返回 null，表示取不到有效值。
   */
  MobileBindNum?: number
  /**
   * 绑定Pc端设备数
注意：此字段可能返回 null，表示取不到有效值。
   */
  PcBindNum?: number
  /**
   * 账号在线状态 1：在线 2：离线
注意：此字段可能返回 null，表示取不到有效值。
   */
  OnlineStatus?: number
  /**
   * 账号活跃状态 1：活跃 2：非活跃
注意：此字段可能返回 null，表示取不到有效值。
   */
  ActiveStatus?: number
  /**
   * 账号登录时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  LoginTime?: string
  /**
   * 账号登出时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  LogoutTime?: string
}

/**
 * DescribeLocalAccounts请求参数结构体
 */
export interface DescribeLocalAccountsRequest {
  /**
   * 滤条件、分页参数
<li>UserName - String - 是否必填：否 - 操作符: eq,like  - 排序支持：否- 按账号UserName过滤。</li>
<li>UserId - string - 是否必填：否 - 操作符: eq,like  - 排序支持：否 - 按账号UserNd过滤。</li>
<li>Phone - string - 是否必填：否 - 操作符: eq,like - 排序支持：否 - 按手机号过滤。</li>
   */
  Condition?: Condition
  /**
   * 获取账号的分组Id，不传默认获取全部(只支持32位)
   */
  AccountGroupId?: number
  /**
   * 是否仅展示当前目录下用户 1： 递归显示 2：仅显示当前目录下用户(只支持32位)
   */
  ShowFlag?: number
}

/**
 * FilterGroups 条件过滤组
 */
export interface FilterGroup {
  /**
   * Filters 条件过滤
注意：此字段可能返回 null，表示取不到有效值。
   */
  Filters?: Array<Filter>
}

/**
 * DescribeDevices返回参数结构体
 */
export interface DescribeDevicesResponse {
  /**
   * 分页的data数据
注意：此字段可能返回 null，表示取不到有效值。
   */
  Data?: DescribeDevicesPageRsp
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 所属组
 */
export interface DescribeLocalAccountAccountGroupsData {
  /**
   * 组Id(只支持32位)
注意：此字段可能返回 null，表示取不到有效值。
   */
  AccountGroupId?: number
}

/**
 * 获取账号列表响应的分页对象
 */
export interface DescribeLocalAccountsPage {
  /**
   * 公共分页对象
注意：此字段可能返回 null，表示取不到有效值。
   */
  Page?: Paging
  /**
   * 获取账号列表响应的单个对象
注意：此字段可能返回 null，表示取不到有效值。
   */
  Items?: Array<DescribeLocalAccountsData>
}

/**
 * DescribeDevices请求参数结构体
 */
export interface DescribeDevicesRequest {
  /**
   * 过滤条件<br>
<li>Ip - String - 是否必填：否 - 操作符: eq  - 排序支持：否- 按照Ip进行过滤。</li>
<li>MacAddr - String - 是否必填：否 - 操作符: eq  - 排序支持：否- 按照mac地址进行过滤。</li>
<li>IoaUserName - String - 是否必填：否 - 操作符: eq  - 排序支持：否- 按照ioa用户名进行过滤。</li>
分页参数<br>
<li>PageNum 从1开始，小于等于0时使用默认参数。</li>
<li>PageSize 最大值5000，最好不超过100。</li>
   */
  Condition?: Condition
  /**
   * 【和GroupIds必须有一个填写】设备分组id（需要和OsType匹配）
id-名称-操作系统
1	全网终端	Win
2	未分组终端	Win
30000000	服务器	Win
40000101	全网终端	Linux
40000102	未分组终端	Linux
40000103	服务器	Linux
40000201	全网终端	macOS
40000202	未分组终端	macOS
40000203	服务器	macOS
40000401	全网终端	Android
40000402	未分组终端	Android
40000501	全网终端	iOS
40000502	未分组终端	iOS
   */
  GroupId?: number
  /**
   * 【必填】操作系统类型（0: win，1：linux，2: mac，3: win_srv，4：android，5：ios   默认值0），需要和GroupId或者GroupIds匹配
   */
  OsType?: number
  /**
   * 在线状态 （2表示在线，0或者1表示离线）
   */
  OnlineStatus?: number
  /**
   * 过滤条件--兼容旧接口,参数同Condition
   */
  Filters?: Array<Filter>
  /**
   * 排序字段--兼容旧接口,参数同Condition
   */
  Sort?: Sort
  /**
   * 获取第几页--兼容旧接口,参数同Condition
   */
  PageNum?: number
  /**
   * 每页获取数--兼容旧接口,参数同Condition
   */
  PageSize?: number
  /**
   * 授权状态 4未授权 5已授权
   */
  Status?: number
}

/**
 * 页码
 */
export interface Paging {
  /**
   * 每页条数(只支持32位)
注意：此字段可能返回 null，表示取不到有效值。
   */
  PageSize?: number
  /**
   * 页码(只支持32位)
注意：此字段可能返回 null，表示取不到有效值。
   */
  PageNum?: number
  /**
   * 总页数(只支持32位)
注意：此字段可能返回 null，表示取不到有效值。
   */
  PageCount?: number
  /**
   * 记录总数
注意：此字段可能返回 null，表示取不到有效值。
   */
  Total?: number
}

/**
 * Sort 排序字段
 */
export interface Sort {
  /**
   * 排序字段
注意：此字段可能返回 null，表示取不到有效值。
   */
  Field?: string
  /**
   * 排序方式
注意：此字段可能返回 null，表示取不到有效值。
   */
  Order?: string
}

/**
 * - [ ] 过滤条件<br>

<li>Name - String - 是否必填：否 - 操作符: ilike  - 排序支持：否- 根据分组名称进行查询。</li>
分页参数<br>
<li>PageNum 从1开始，小于等于0时使用默认参数。</li>
<li>PageSize 最大值5000，最好不超过100。</li>
 */
export interface Condition {
  /**
   * Filters 条件过滤
注意：此字段可能返回 null，表示取不到有效值。
   */
  Filters?: Array<Filter>
  /**
   * FilterGroups 条件过滤组
注意：此字段可能返回 null，表示取不到有效值。
   */
  FilterGroups?: Array<FilterGroup>
  /**
   * Sort 排序字段
注意：此字段可能返回 null，表示取不到有效值。
   */
  Sort?: Sort
  /**
   * PageSize 每页获取数(只支持32位)
注意：此字段可能返回 null，表示取不到有效值。
   */
  PageSize?: number
  /**
   * PageNum 获取第几页(只支持32位)
注意：此字段可能返回 null，表示取不到有效值。
   */
  PageNum?: number
}

/**
 * Filters 条件过滤
 */
export interface Filter {
  /**
   * 过滤字段
注意：此字段可能返回 null，表示取不到有效值。
   */
  Field?: string
  /**
   * 过滤方式 eq:等于,net:不等于,like,nlike,gt:大于,lt:小于,egt:大于等于,elt:小于等于
注意：此字段可能返回 null，表示取不到有效值。
   */
  Operator?: string
  /**
   * 过滤条件
注意：此字段可能返回 null，表示取不到有效值。
   */
  Values?: Array<string>
}

/**
 * DescribeLocalAccounts返回参数结构体
 */
export interface DescribeLocalAccountsResponse {
  /**
   * 获取账号列表响应的分页对象
注意：此字段可能返回 null，表示取不到有效值。
   */
  Data?: DescribeLocalAccountsPage
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 分组名称
 */
export interface DescribeAccountGroupsData {
  /**
   * 名称path
注意：此字段可能返回 null，表示取不到有效值。
   */
  NamePath?: string
  /**
   * id patch数组(只支持32位)
注意：此字段可能返回 null，表示取不到有效值。
   */
  IdPathArr?: Array<number | bigint>
  /**
   * 扩展信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  ExtraInfo?: string
  /**
   * 最后更新时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  Utime?: string
  /**
   * 父id
注意：此字段可能返回 null，表示取不到有效值。
   */
  ParentId?: number
  /**
   * 组织id
注意：此字段可能返回 null，表示取不到有效值。
   */
  OrgId?: string
  /**
   * 账户组名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  Name?: string
  /**
   * id
注意：此字段可能返回 null，表示取不到有效值。
   */
  Id?: number
  /**
   * 描述
注意：此字段可能返回 null，表示取不到有效值。
   */
  Description?: string
  /**
   * 同步数据源
注意：此字段可能返回 null，表示取不到有效值。
   */
  Source?: number
  /**
   * id path
注意：此字段可能返回 null，表示取不到有效值。
   */
  IdPath?: string
  /**
   * 创建时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  Itime?: string
  /**
   * 父组织id
注意：此字段可能返回 null，表示取不到有效值。
   */
  ParentOrgId?: string
  /**
   * 导入类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  ImportType?: string
  /**
   * miniIAM id
注意：此字段可能返回 null，表示取不到有效值。
   */
  MiniIamId?: string
  /**
   * 该分组下用户总数
注意：此字段可能返回 null，表示取不到有效值。
   */
  UserTotal?: number
  /**
   * 是否叶子节点
注意：此字段可能返回 null，表示取不到有效值。
   */
  IsLeaf?: boolean
  /**
   * 是否该账户的直接权限
注意：此字段可能返回 null，表示取不到有效值。
   */
  ReadOnly?: boolean
  /**
   * 最新一次同步任务的结果
注意：此字段可能返回 null，表示取不到有效值。
   */
  LatestSyncResult?: string
  /**
   * 最新一次同步任务的结束时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  LatestSyncTime?: string
}

/**
 * DescribeRootAccountGroup请求参数结构体
 */
export type DescribeRootAccountGroupRequest = null

/**
 * 账户分组详情响应数据
 */
export interface GetAccountGroupData {
  /**
   * 分组Namepath
注意：此字段可能返回 null，表示取不到有效值。
   */
  NamePath?: string
  /**
   * 分组Id path arr(只支持32位)
注意：此字段可能返回 null，表示取不到有效值。
   */
  IdPathArr?: Array<number | bigint>
  /**
   * 分组扩展信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  ExtraInfo?: string
  /**
   * 最后更新时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  Utime?: string
  /**
   * 父分组id(只支持32位)
注意：此字段可能返回 null，表示取不到有效值。
   */
  ParentId?: number
  /**
   * 组织id
注意：此字段可能返回 null，表示取不到有效值。
   */
  OrgId?: string
  /**
   * 分组名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  Name?: string
  /**
   * 分组id(只支持32位)
注意：此字段可能返回 null，表示取不到有效值。
   */
  Id?: number
  /**
   * 描述
注意：此字段可能返回 null，表示取不到有效值。
   */
  Description?: string
  /**
   * 分组导入源(只支持32位)
注意：此字段可能返回 null，表示取不到有效值。
   */
  Source?: number
  /**
   * Id Path
注意：此字段可能返回 null，表示取不到有效值。
   */
  IdPath?: string
  /**
   * 创建时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  Itime?: string
  /**
   * 父组织id
注意：此字段可能返回 null，表示取不到有效值。
   */
  ParentOrgId?: string
  /**
   * 导入信息,json格式
注意：此字段可能返回 null，表示取不到有效值。
   */
  Import?: string
  /**
   * 是否开启导入架构
注意：此字段可能返回 null，表示取不到有效值。
   */
  ImportEnable?: boolean
  /**
   * 导入类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  ImportType?: string
  /**
   * miniIAMId，MiniIAM源才有
注意：此字段可能返回 null，表示取不到有效值。
   */
  MiniIamId?: string
}

/**
 * 账户分组详情响应数据
 */
export interface DescribeAccountGroupsPageResp {
  /**
   * 账户分响应对象集合
注意：此字段可能返回 null，表示取不到有效值。
   */
  Items?: Array<DescribeAccountGroupsData>
  /**
   * 分页公共对象
注意：此字段可能返回 null，表示取不到有效值。
   */
  Page?: Paging
}

/**
 * DescribeAccountGroups请求参数结构体
 */
export interface DescribeAccountGroupsRequest {
  /**
   * 搜索范围,0-仅搜直接子组,1-深层搜索(只支持32位)
   */
  Deepin?: number
  /**
   * 滤条件、分页参数
<li>Name - String - 是否必填：否 - 操作符: like  - 排序支持：否- 按账号分组过滤。</li>
排序条件
<li>Itime - string - 是否必填：否 - 排序支持：是 - 按账号分组创建时间排序。</li>
<li>Utime - string - 是否必填：否 - 排序支持：是 - 按账号分组更新时间排序。</li>
   */
  Condition?: Condition
  /**
   * 父分组id
   */
  ParentId?: number
}
