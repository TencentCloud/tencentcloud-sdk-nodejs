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
 * 规则元数据
 */
export interface RuleItem {
  /**
   * 字段名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  Key?: string
  /**
   * 操作关系（等于、不等于、包含、不包含）
注意：此字段可能返回 null，表示取不到有效值。
   */
  Operate?: string
  /**
   * 内容
注意：此字段可能返回 null，表示取不到有效值。
   */
  Value?: string
  /**
   * 内容，v2多值版本使用
注意：此字段可能返回 null，表示取不到有效值。
   */
  Values?: Array<string>
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
 * CreateDeviceVirtualGroup返回参数结构体
 */
export interface CreateDeviceVirtualGroupResponse {
  /**
   * 响应返回的data
注意：此字段可能返回 null，表示取不到有效值。
   */
  Data?: CreateDeviceVirtualGroupRspData
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 自动划分规则数据
 */
export interface ComplexRule {
  /**
   * 简单规则表达式
注意：此字段可能返回 null，表示取不到有效值。
   */
  SimpleRules?: Array<SimpleRule>
  /**
   * 表达式间逻辑关系
注意：此字段可能返回 null，表示取不到有效值。
   */
  Relation?: string
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
 * DescribeRootAccountGroup返回参数结构体
 */
export interface DescribeRootAccountGroupResponse {
  /**
   * 账号根分组响应详情
注意：此字段可能返回 null，表示取不到有效值。
   */
  Data?: GetAccountGroupData
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
 * 账号分组详情响应数据
 */
export interface GetAccountGroupData {
  /**
   * 分组名称全路径，点分格式
注意：此字段可能返回 null，表示取不到有效值。
   */
  NamePath?: string
  /**
   * 分组ID全路径，数组格式
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
   * 当前分组的父分组ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  ParentId?: number
  /**
   * 源账号组ID，该字段仅适用于第三方同步的组织架构，通过OrgId-Id构成源组织架构分组ID-现组织架构分组ID映射关系
注意：此字段可能返回 null，表示取不到有效值。
   */
  OrgId?: string
  /**
   * 分组名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  Name?: string
  /**
   * 分组ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  Id?: number
  /**
   * 分组描述
注意：此字段可能返回 null，表示取不到有效值。
   */
  Description?: string
  /**
   * 分组导入源(只支持32位)
注意：此字段可能返回 null，表示取不到有效值。
   */
  Source?: number
  /**
   * 分组ID全路径，点分格式
注意：此字段可能返回 null，表示取不到有效值。
   */
  IdPath?: string
  /**
   * 创建时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  Itime?: string
  /**
   * 父源账号组ID，该字段仅适用于第三方同步的组织架构
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
 * 账号分组信息
 */
export interface DescribeAccountGroupsData {
  /**
   * 账号分组名全路径，点分格式
注意：此字段可能返回 null，表示取不到有效值。
   */
  NamePath?: string
  /**
   * 账号分组ID全路径，数组格式
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
   * 父分组ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  ParentId?: number
  /**
   * 源账号组织ID。使用第三方导入用户源时，记录该分组在源组织架构下的分组ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  OrgId?: string
  /**
   * 分组名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  Name?: string
  /**
   * 分组ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  Id?: number
  /**
   * 分组描述
注意：此字段可能返回 null，表示取不到有效值。
   */
  Description?: string
  /**
   * 同步数据源
注意：此字段可能返回 null，表示取不到有效值。
   */
  Source?: number
  /**
   * 账号分组ID全路径，点分格式
注意：此字段可能返回 null，表示取不到有效值。
   */
  IdPath?: string
  /**
   * 创建时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  Itime?: string
  /**
   * 父源账号组织ID。使用第三方导入用户源时，记录该分组在源组织架构下的分组ID
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
   * 该分组下含子组的所有用户总数
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
 * 规则表达式
 */
export interface RuleExpression {
  /**
   * 规则元数据
注意：此字段可能返回 null，表示取不到有效值。
   */
  Items?: Array<RuleItem>
  /**
   * 关系
注意：此字段可能返回 null，表示取不到有效值。
   */
  Relation?: string
}

/**
 * DescribeRootAccountGroup请求参数结构体
 */
export type DescribeRootAccountGroupRequest = null

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
   * 搜索范围：0-仅当前分组的直接子组，1-当前分组的所有子组。默认为0。
   */
  Deepin?: number
  /**
   * 查询条件

过滤参数
1、Name，string类型，按分组名过滤
是否必填：否
操作符: like

排序条件
1、Itime，string类型，按分组创建时间排序
是否必填：否
2、Utime，string类型，按分组更新时间排序
是否必填：否
   */
  Condition?: Condition
  /**
   * 父分组ID，获取该分组下的子组信息。默认查询全网根分组下子组信息。
   */
  ParentId?: number
}

/**
 * DescribeAccountGroups返回参数结构体
 */
export interface DescribeAccountGroupsResponse {
  /**
   * 账号分组详情响应数据
注意：此字段可能返回 null，表示取不到有效值。
   */
  Data?: DescribeAccountGroupsPageResp
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
 * CreateDeviceVirtualGroup请求参数结构体
 */
export interface CreateDeviceVirtualGroupRequest {
  /**
   * 终端自定义分组名
   */
  DeviceVirtualGroupName?: string
  /**
   * 详情
   */
  Description?: string
  /**
   * 系统类型（0: win，1：linux，2: mac，3: win_srv，4：android，5：ios   默认值0）(只支持32位)
   */
  OsType?: number
  /**
   * 时间设置类型（1:自动小时、2:自动每天、3:自定义、0:手动分组）(只支持32位)
   */
  TimeType?: number
  /**
   * 自动划分时间（单位min）(只支持32位)
   */
  AutoMinute?: number
  /**
   * 自动划分规则数据
   */
  AutoRules?: ComplexRule
}

/**
 * DescribeDevices请求参数结构体
 */
export interface DescribeDevicesRequest {
  /**
   * 过滤条件参数（字段含义请参考接口返回值）

- Mid, 类型String，支持操作：【eq，like，ilike】，支持排序
- Name, 类型String，支持操作：【eq，like，ilike】，支持排序
- Itime, 类型String，支持操作：【eq，like，ilike】，支持排序
- UserName, 类型String，支持操作：【eq，like，ilike】，支持排序
- MacAddr, 类型String，支持操作：【eq，like，ilike】，支持排序
- UserId, 类型String，支持操作：【eq，like，ilike】，支持排序
- Ip, 类型String，支持操作：【eq，like，ilike】，支持排序
- Tags，类型String，支持操作：【eq，like，ilike】，支持排序
- LocalIpList，类型String，支持操作：【eq，like，ilike】，支持排序
- SerialNum，类型String，支持操作：【eq，like，ilike】，支持排序
- Version，类型String，支持操作：【eq，like，ilike】，支持排序
- StrVersion，类型String，支持操作：【eq，like，ilike】，支持排序
- RtpStatus，类型String，支持操作：【eq，like，ilike】，**不支持排序**
- HostName，类型String，支持操作：【eq，like，ilike】，支持排序
- IoaUserName，类型String，支持操作：【eq，like，ilike】，支持排序
- GroupName，类型String，支持操作：【eq，like，ilike】，支持排序
- CriticalVulListCount，**类型Int**，支持操作：【eq】，**不支持排序**
- RiskCount，**类型Int**，支持操作：【eq】，**不支持排序**
- VulVersion，类型String，支持操作：【eq，like，ilike】，**不支持排序**
- Virusver，类型String，支持操作：【eq，like，ilike】，**不支持排序**
- SysRepver，类型String，支持操作：【eq，like，ilike】，**不支持排序**
- BaseBoardSn，类型String，支持操作：【eq，like，ilike】，支持排序
- Os，类型String，支持操作：【eq，like，ilike】，支持排序
- ConnActiveTime，类型String，支持操作：【eq，like，ilike】，**不支持排序**
- FirewallStatus，**类型Int**，支持操作：【eq】，**不支持排序**
- ProfileName，类型String，支持操作：【eq，like，ilike】，支持排序
- DomainName，类型String，支持操作：【eq，like，ilike】，支持排序
- SysRepVersion，类型String，支持操作：【eq，like，ilike】，支持排序
- VirusVer，类型String，支持操作：【eq，like，ilike】，支持排序
- Cpu，类型String，支持操作：【eq，like，ilike】，支持排序
- Memory，类型String，支持操作：【eq，like，ilike】，支持排序
- HardDiskSize，类型String，支持操作：【eq，like，ilike】，支持排序
- HardwareChangeCount，**类型Int**，支持操作：【eq】，支持排序
- AccountName，类型String，支持操作：【like.ilike】，支持排序
- AccountGroupName，类型String，支持操作：【like.ilike】，支持排序
- ScreenRecordingPermission，**类型Int**，支持操作：【eq】，支持排序
- DiskAccessPermission，**类型Int**，支持操作：【eq】，支持排序





分页参数
- PageNum 从1开始，小于等于0时使用默认参数
- PageSize 最大值5000，最好不超过100
   */
  Condition?: Condition
  /**
   * 【和GroupIds必须有一个填写】设备分组id（需要和OsType匹配），下面是私有化场景下默认id：
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


SaaS需要调用分组接口DescribeDeviceChildGroups获取对应分组id
   */
  GroupId?: number
  /**
   * 【必填】操作系统类型（0: win，1：linux，2: mac，4：android，5：ios   默认值0），需要和GroupId或者GroupIds匹配
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
   * 授权状态： 4基础授权 5高级授权
   */
  Status?: number
  /**
   * 【和GroupId必须有一个填写】设备分组id列表（需要和OsType匹配）

   */
  GroupIds?: Array<number | bigint>
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
   * 宿主机id（需要宿主机也安装iOA才能显示）
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
   * 宿主机名称（需要宿主机也安装iOA才能显示）
注意：此字段可能返回 null，表示取不到有效值。
   */
  HostName?: string
  /**
   * 主板序列号
注意：此字段可能返回 null，表示取不到有效值。
   */
  BaseBoardSn?: string
  /**
   * 绑定账户名称
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
 * DescribeLocalAccounts请求参数结构体
 */
export interface DescribeLocalAccountsRequest {
  /**
   * 查询条件：过滤或排序
1、UserName，string类型，姓名
是否必填：否
过滤支持：是，支持eq、like、ilike
排序支持：否
2、UserId，string类型，账户
是否必填：否
过滤支持：是，支持eq、like、ilike
排序支持：否
3、Phone，string类型，手机号
是否必填：否
过滤支持：是，支持eq、like、ilike
排序支持：否
   */
  Condition?: Condition
  /**
   * 获取账号的分组ID，不传默认获取全网根账号组
   */
  AccountGroupId?: number
  /**
   * 是否仅展示当前目录下用户 1： 递归显示 2：仅显示当前目录下用户(只支持32位)
   */
  ShowFlag?: number
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
 * 响应返回的data
 */
export interface CreateDeviceVirtualGroupRspData {
  /**
   * 返回的自定义分组id
注意：此字段可能返回 null，表示取不到有效值。
   */
  Id?: number
}

/**
 * 简单规则表达式
 */
export interface SimpleRule {
  /**
   * 规则表达式
注意：此字段可能返回 null，表示取不到有效值。
   */
  Expressions?: Array<RuleExpression>
  /**
   * 表达式间逻辑关系
注意：此字段可能返回 null，表示取不到有效值。
   */
  Relation?: string
}
