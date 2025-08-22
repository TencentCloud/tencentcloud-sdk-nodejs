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
 * CreatePrivilegeCode请求参数结构体
 */
export interface CreatePrivilegeCodeRequest {
  /**
   * 必填；设备唯一标识符;
   */
  Mid: string
  /**
   * 管理域实例ID，用于CAM管理域权限分配。若企业未进行管理域的划分，可直接传入根域"1"，此时表示针对当前企业的全部设备和账号进行接口CRUD，具体CRUD的影响范围限制于相应接口的入参。
   */
  DomainInstanceId?: string
  /**
   * 系统类型（0: win，1：linux，2: mac，4：android，5：ios ）；默认值0
   */
  OsType?: number
}

/**
 * 终端硬件信息列表响应详情
 */
export interface DescribeDeviceHardwareInfoListRspData {
  /**
   * 分页数据
   */
  Page?: Paging
  /**
   * 终端硬件信息数据数组
   */
  Items?: Array<DescribeDeviceHardwareInfoItem>
}

/**
 * DescribeDLPFileDetectResult请求参数结构体
 */
export interface DescribeDLPFileDetectResultRequest {
  /**
   * 管理域实例ID，用于CAM管理域权限分配
   */
  DomainInstanceId?: string
  /**
   * 查询ID，即提交送检任务接口（CreateDLPFileDetectionTask）返回的任务ID（DLPFileDetectionTaskID）
   */
  QueryID?: string
}

/**
 * 规则元数据
 */
export interface RuleItem {
  /**
   * 字段名称
   */
  Key?: string
  /**
   * 操作关系（等于、不等于、包含、不包含）
   */
  Operate?: string
  /**
   * 内容
   */
  Value?: string
  /**
   * 内容，v2多值版本使用
   */
  Values?: Array<string>
}

/**
 * 软件统计响应对象集合
 */
export interface DescribeSoftCensusListByDeviceData {
  /**
   * 终端用户名
注意：此字段可能返回 null，表示取不到有效值。
   */
  UserName?: string
  /**
   * mac地址
注意：此字段可能返回 null，表示取不到有效值。
   */
  MacAddr?: string
  /**
   * 终端计算机名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  Name?: string
  /**
   * 终端组路径名
注意：此字段可能返回 null，表示取不到有效值。
   */
  GroupNamePath?: string
  /**
   * IP地址
注意：此字段可能返回 null，表示取不到有效值。
   */
  Ip?: string
  /**
   * 唯一标识Mid
注意：此字段可能返回 null，表示取不到有效值。
   */
  Mid?: string
  /**
   * 企业账户名
注意：此字段可能返回 null，表示取不到有效值。
   */
  IoaUserName?: string
  /**
   * 终端分组Id(只支持32位)
注意：此字段可能返回 null，表示取不到有效值。
   */
  GroupId?: number
  /**
   * 终端组名
注意：此字段可能返回 null，表示取不到有效值。
   */
  GroupName?: string
  /**
   * 终端列表Id(只支持32位)
注意：此字段可能返回 null，表示取不到有效值。
   */
  Id?: number
  /**
   * 软件数量(只支持32位)
注意：此字段可能返回 null，表示取不到有效值。
   */
  SoftNum?: number
  /**
   * 盗版风险（1=风险;2=未知）
注意：此字段可能返回 null，表示取不到有效值。
   */
  PiracyRisk?: number
  /**
   * 终端备注名
   */
  RemarkName?: string
}

/**
 * 所属组
 */
export interface DescribeLocalAccountAccountGroupsData {
  /**
   * 组Id(只支持32位)
   */
  AccountGroupId?: number
}

/**
 * CreateDeviceVirtualGroup返回参数结构体
 */
export interface CreateDeviceVirtualGroupResponse {
  /**
   * 响应返回的data
   */
  Data?: CreateDeviceVirtualGroupRspData
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 提交送检任务相应数据
 */
export interface CreateDLPFileDetectionTaskData {
  /**
   * 提交任务生成的id，也即requestID。用于后续查询
   */
  DLPFileDetectionTaskID?: string
}

/**
 * 查询返回终端自定义分组的Data数据
 */
export interface DescribeDeviceVirtualGroupsPageRsp {
  /**
   * 分页公共对象
   */
  Page?: Paging
  /**
   * 终端自定义分组列表数据
   */
  Items?: Array<DeviceVirtualDeviceGroupsDetail>
}

/**
 * 操作的设备列表
 */
export interface ModifyVirtualDeviceGroupsReqItem {
  /**
   * 设备mid
   */
  DeviceMid?: string
  /**
   * 操作标识  0:删除设备 1:添加设备
   */
  Operation?: number
}

/**
 * DescribeSoftCensusListByDevice返回参数结构体
 */
export interface DescribeSoftCensusListByDeviceResponse {
  /**
   * 业务响应数据
   */
  Data?: DescribeSoftCensusListByDevicePageData
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 简单规则表达式
 */
export interface SimpleRule {
  /**
   * 规则表达式
   */
  Expressions?: Array<RuleExpression>
  /**
   * 表达式间逻辑关系
   */
  Relation?: string
}

/**
 * DescribeSoftwareInformation返回参数结构体
 */
export interface DescribeSoftwareInformationResponse {
  /**
   * 业务响应数据
   */
  Data?: DescribeSoftwareInformationPageData
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
   */
  SimpleRules?: Array<SimpleRule>
  /**
   * 表达式间逻辑关系
   */
  Relation?: string
}

/**
 * DescribeDeviceHardwareInfoList返回参数结构体
 */
export interface DescribeDeviceHardwareInfoListResponse {
  /**
   * 分页的data数据
   */
  Data?: DescribeDeviceHardwareInfoListRspData
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * Filters 条件过滤
 */
export interface Filter {
  /**
   * 过滤字段
   */
  Field?: string
  /**
   * 过滤方式： eq:等于,net:不等于,like,nlike,gt:大于,lt:小于,egt:大于等于,elt:小于等于。具体支持哪些过滤方式，结合具体接口字段描述来定
   */
  Operator?: string
  /**
   * 过滤条件
   */
  Values?: Array<string>
}

/**
 * DescribeRootAccountGroup返回参数结构体
 */
export interface DescribeRootAccountGroupResponse {
  /**
   * 账号根分组响应详情
   */
  Data?: GetAccountGroupData
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 终端硬件信息列表Item数据
 */
export interface DescribeDeviceHardwareInfoItem {
  /**
   * 设备ID
   */
  Id?: number
  /**
   * 设备唯一标识符
   */
  Mid?: string
  /**
   * OS平台 0 Windows 1 Linux 2 macOS 4 Android 5 iOS
   */
  OsType?: number
  /**
   * 终端名
   */
  Name?: string
  /**
   * 终端用户名
   */
  UserName?: string
  /**
   * 授权状态（ 4未授权 5已授权）
   */
  Status?: number
  /**
   * 设备所属分组ID
   */
  GroupId?: number
  /**
   * 设备所属分组名
   */
  GroupName?: string
  /**
   * 设备所属分组路径
   */
  GroupNamePath?: string
  /**
   * 最近登录账户的姓名
   */
  AccountName?: string
  /**
   * 出口IP
   */
  Ip?: string
  /**
   * MAC地址
   */
  MacAddr?: string
  /**
   * CPU品牌型号
   */
  Cpu?: string
  /**
   * 内存信息
   */
  Memory?: string
  /**
   * 硬盘信息
   */
  HardDiskSize?: string
  /**
   * 显示器品牌型号
   */
  Monitor?: string
  /**
   * 终端备注名
   */
  RemarkName?: string
}

/**
 * 查询文件检测结果响应数据
 */
export interface DescribeDLPFileDetectResultData {
  /**
   * 提交任务时的文件md5
   */
  FileMd5?: string
  /**
   * 提交任务时的文件名
   */
  FileName?: string
  /**
   * 状态：等待检测->正在检测->检测失败/检测成功。或任务不存在
   */
  Status?: string
  /**
   * 文件检测结果，json字符串。
   */
  DetectResult?: string
}

/**
 * DescribeDeviceVirtualGroups请求参数结构体
 */
export interface DescribeDeviceVirtualGroupsRequest {
  /**
   * 管理域实例ID，用于CAM管理域权限分配。若企业未进行管理域的划分，可直接传入根域"1"，此时表示针对当前企业的全部设备和账号进行接口CRUD，具体CRUD的影响范围限制于相应接口的入参。
   */
  DomainInstanceId?: string
  /**
   * 滤条件、分页参数 <li>Name - String - 是否必填：否 - 操作符: like  - 排序支持：否- 按终端自定义分组过滤。</li> <li>DeviceVirtualGroupName - String - 是否必填：否 - 操作符: like  - 排序支持：否- 按终端自定义分组过滤。</li>
   */
  Condition?: Condition
  /**
   * 必填，系统类型（0: win，1：linux，2: mac，4：android，5：ios   默认值0）
   */
  OsType?: number
  /**
   * 非必填，自定义分组ids
   */
  VirtualGroupIds?: Array<number | bigint>
}

/**
 * DescribeDeviceChildGroups请求参数结构体
 */
export interface DescribeDeviceChildGroupsRequest {
  /**
   * 管理域实例ID，用于CAM管理域权限分配。若企业未进行管理域的划分，可直接传入根域"1"，此时表示针对当前企业的全部设备和账号进行接口CRUD，具体CRUD的影响范围限制于相应接口的入参。
   */
  DomainInstanceId?: string
  /**
   * 过滤条件参数（字段含义请参考接口返回值）
- Name, 类型String，支持操作：【like，ilike】，支持排序




分页参数
- PageNum 从1开始，小于等于0时使用默认参数
- PageSize 最大值5000，最好不超过100
   */
  Condition?: Condition
  /**
   * 父分组id，默认0：表示获取全网终端分组
   */
  ParentId?: number
  /**
   * 操作系统类型（0：win，1：linux，2：mac，4：android，5：ios；默认0：系统win）
   */
  OsType?: number
}

/**
 * 按版本聚合后的软件列表
 */
export interface AggrCategorySoftDetailRow {
  /**
   * ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  ID?: number
  /**
   * 软件名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  Name?: string
  /**
   * 盗版风险
注意：此字段可能返回 null，表示取不到有效值。
   */
  PiracyRisk?: number
  /**
   * 系统平台
注意：此字段可能返回 null，表示取不到有效值。
   */
  OsType?: number
  /**
   * 企业名
注意：此字段可能返回 null，表示取不到有效值。
   */
  CorpName?: string
  /**
   * 安装设备数量(只支持32位)
注意：此字段可能返回 null，表示取不到有效值。
   */
  InstalledDeviceNum?: number
  /**
   * 盗版安装设备数
注意：此字段可能返回 null，表示取不到有效值。
   */
  PiracyInstalledDeviceNum?: number
  /**
   * 已安装用户数
注意：此字段可能返回 null，表示取不到有效值。
   */
  InstalledUserNum?: number
  /**
   * 盗版软件用户数
注意：此字段可能返回 null，表示取不到有效值。
   */
  PiracyInstalledUserNum?: number
  /**
   * 授权总数
注意：此字段可能返回 null，表示取不到有效值。
   */
  AuthNum?: number
  /**
   * 正版率
注意：此字段可能返回 null，表示取不到有效值。
   */
  GenuineRate?: number
  /**
   * 有新版本可升级的设备数量
   */
  UpgradableDeviceNum?: number
}

/**
 * DescribeDeviceInfo返回参数结构体
 */
export interface DescribeDeviceInfoResponse {
  /**
   * 业务响应数据
注意：此字段可能返回 null，表示取不到有效值。
   */
  Data?: DescribeDeviceInfoRspData
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
   */
  Data?: DescribeDevicesPageRsp
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 业务响应数据
 */
export interface CreatePrivilegeCodeRspData {
  /**
   * 特权码数据
注意：此字段可能返回 null，表示取不到有效值。
   */
  Code?: string
}

/**
 * DescribeDeviceInfo请求参数结构体
 */
export interface DescribeDeviceInfoRequest {
  /**
   * 管理域实例ID，用于CAM管理域权限分配。若企业未进行管理域的划分，可直接传入根域"1"，此时表示针对当前企业的全部设备和账号进行接口CRUD，具体CRUD的影响范围限制于相应接口的入参。
   */
  DomainInstanceId?: string
  /**
   * 终端id
   */
  Mid?: string
  /**
   * 查询类型  process_list network_list service_list
   */
  Type?: string
}

/**
 * ModifyVirtualDeviceGroups返回参数结构体
 */
export interface ModifyVirtualDeviceGroupsResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 终端自定义分组列表数据
 */
export interface DeviceVirtualDeviceGroupsDetail {
  /**
   * 终端自定义分组id
   */
  Id?: number
  /**
   * 自定义分组名称
   */
  DeviceVirtualGroupName?: string
  /**
   * 设备数
   */
  DeviceCount?: number
  /**
   * 系统类型（0: win，1：linux，2: mac，4：android，5：ios  ）
   */
  OsType?: number
  /**
   * 创建时间
   */
  Itime?: string
  /**
   * 更新时间
   */
  Utime?: string
}

/**
 * DescribeLocalAccounts返回参数结构体
 */
export interface DescribeLocalAccountsResponse {
  /**
   * 获取账号列表响应的分页对象
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
   */
  NamePath?: string
  /**
   * 账号分组ID全路径，数组格式
   */
  IdPathArr?: Array<number | bigint>
  /**
   * 扩展信息
   */
  ExtraInfo?: string
  /**
   * 最后更新时间
   */
  Utime?: string
  /**
   * 父分组ID
   */
  ParentId?: number
  /**
   * 源账号组织ID。使用第三方导入用户源时，记录该分组在源组织架构下的分组ID
   */
  OrgId?: string
  /**
   * 分组名称
   */
  Name?: string
  /**
   * 分组ID
   */
  Id?: number
  /**
   * 分组描述
   */
  Description?: string
  /**
   * 同步数据源
   */
  Source?: number
  /**
   * 账号分组ID全路径，点分格式
   */
  IdPath?: string
  /**
   * 创建时间
   */
  Itime?: string
  /**
   * 父源账号组织ID。使用第三方导入用户源时，记录该分组在源组织架构下的分组ID
   */
  ParentOrgId?: string
  /**
   * 导入类型
   */
  ImportType?: string
  /**
   * miniIAM id
   */
  MiniIamId?: string
  /**
   * 该分组下含子组的所有用户总数
   */
  UserTotal?: number
  /**
   * 是否叶子节点
   */
  IsLeaf?: boolean
  /**
   * 是否该账户的直接权限
   */
  ReadOnly?: boolean
  /**
   * 最新一次同步任务的结果
   */
  LatestSyncResult?: string
  /**
   * 最新一次同步任务的结束时间
   */
  LatestSyncTime?: string
}

/**
 * 返回的具体Data数据
 */
export interface DescribeVirtualDevicesPageRsp {
  /**
   * 数据分页信息
   */
  Paging?: Paging
  /**
   * 设备列表
   */
  Items?: Array<DeviceDetail>
}

/**
 * DescribeRootAccountGroup请求参数结构体
 */
export type DescribeRootAccountGroupRequest = null

/**
 * 查询设备组子分组详情响应结构
 */
export interface DescribeDeviceChildGroupsRspData {
  /**
   * 返回的数组列表
   */
  Items?: Array<DeviceGroupDetail>
}

/**
 * 软件详情响应对象集合
 */
export interface SoftwareInformationData {
  /**
   * 软件名称
   */
  Name?: string
  /**
   * 安装时间
   */
  InstallDate?: string
  /**
   * 软件列表id(只支持32位)
   */
  SoftwareId?: number
  /**
   * 唯一标识Mid
   */
  Mid?: string
  /**
   * 软件版本
   */
  Version?: string
  /**
   * 公司名
   */
  CorpName?: string
  /**
   * 列表Id(只支持32位)
   */
  Id?: number
  /**
   * 盗版风险（0:未支持，1:风险，2:未发现，3:未开启）
   */
  PiracyRisk?: number
}

/**
 * 账户分组详情响应数据
 */
export interface DescribeAccountGroupsPageResp {
  /**
   * 账户分响应对象集合
   */
  Items?: Array<DescribeAccountGroupsData>
  /**
   * 分页公共对象
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
   */
  Data?: DescribeAccountGroupsPageResp
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * Sort 排序字段
 */
export interface Sort {
  /**
   * 排序字段
   */
  Field?: string
  /**
   * 排序方式
   */
  Order?: string
}

/**
 * 分页的data数据
 */
export interface DescribeDevicesPageRsp {
  /**
   * 数据分页信息
   */
  Paging?: Paging
  /**
   * 业务响应数据
   */
  Items?: Array<DeviceDetail>
}

/**
 * DescribeDeviceVirtualGroups返回参数结构体
 */
export interface DescribeDeviceVirtualGroupsResponse {
  /**
   * 查询终端自定义分组的Data数据
   */
  Data?: DescribeDeviceVirtualGroupsPageRsp
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 返回的数组列表
 */
export interface DeviceGroupDetail {
  /**
   * 设备组id
   */
  Id?: number
  /**
   * 设备组名称
   */
  Name?: string
  /**
   * 设备组描述
   */
  Description?: string
  /**
   * 父节点id
   */
  ParentId?: number
  /**
   * 基于id的节点路径
   */
  IdPath?: string
  /**
   * 基于名称的节点路径
   */
  NamePath?: string
  /**
   * 分组锁定状态
   */
  Locked?: number
  /**
   * 系统类型（0: win，1：linux，2: mac，4：android，5：ios   ）
   */
  OsType?: number
  /**
   * 排序
   */
  Sort?: number
  /**
   * 是否自动调整
   */
  FromAuto?: number
  /**
   * 子节点数量
   */
  Count?: number
  /**
   * 图标
   */
  Icon?: string
  /**
   * 是否有ip
   */
  WithIp?: number
  /**
   * 是否有组ip
   */
  HasIp?: boolean
  /**
   * 是否是叶子节点
   */
  IsLeaf?: boolean
  /**
   * 是否只读
   */
  ReadOnly?: boolean
  /**
   * 对应绑定的账号id
   */
  BindAccount?: number
  /**
   * 绑定账号的用户名
   */
  BindAccountName?: string
}

/**
 * DescribeAggrSoftCategorySoftList请求参数结构体
 */
export interface DescribeAggrSoftCategorySoftListRequest {
  /**
   * os类别(只支持32位)
   */
  OsType?: number
}

/**
 * FilterGroups 条件过滤组
 */
export interface FilterGroup {
  /**
   * Filters 条件过滤
   */
  Filters?: Array<Filter>
}

/**
 * 业务响应数据
 */
export interface DescribeSoftCensusListByDevicePageData {
  /**
   * 软件统计响应对象集合
注意：此字段可能返回 null，表示取不到有效值。
   */
  Items?: Array<DescribeSoftCensusListByDeviceData>
  /**
   * 分页公共对象
注意：此字段可能返回 null，表示取不到有效值。
   */
  Page?: Paging
}

/**
 * 分页的具体数据对象
 */
export interface DeviceNetworkInfo {
  /**
   * 本地地址
注意：此字段可能返回 null，表示取不到有效值。
   */
  LocalAddr?: string
  /**
   * 本地端口
注意：此字段可能返回 null，表示取不到有效值。
   */
  LocalPort?: number
  /**
   * 进程id
注意：此字段可能返回 null，表示取不到有效值。
   */
  ProcessId?: number
  /**
   * 进程名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  ProcessName?: string
  /**
   * 协议
注意：此字段可能返回 null，表示取不到有效值。
   */
  Protocol?: string
  /**
   * 远程地址
注意：此字段可能返回 null，表示取不到有效值。
   */
  RemoteAddr?: string
  /**
   * 远程端口
注意：此字段可能返回 null，表示取不到有效值。
   */
  RemotePort?: number
  /**
   * 状态
注意：此字段可能返回 null，表示取不到有效值。
   */
  State?: number
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
   * 是否仅展示当前目录下用户 1： 递归显示 2：仅显示当前目录下用户
   */
  ShowFlag?: number
}

/**
 * DescribeSoftwareInformation请求参数结构体
 */
export interface DescribeSoftwareInformationRequest {
  /**
   * 终端唯一标识Mid
   */
  Mid?: string
  /**
   * 过滤条件、分页参数
<li>Name - String - 过滤支持：是 - 操作符:eq,like - 排序支持：是 。</li>
   */
  Condition?: Condition
}

/**
 * 业务响应数据
 */
export interface DescribeAggrSoftCategorySoftListData {
  /**
   * 分页公共对象
注意：此字段可能返回 null，表示取不到有效值。
   */
  Page?: Paging
  /**
   * 总数(只支持32位)
注意：此字段可能返回 null，表示取不到有效值。
   */
  Total?: number
  /**
   * 行数据
注意：此字段可能返回 null，表示取不到有效值。
   */
  AggrSoftCategorySoftList?: Array<AggrCategorySoftDetailRow>
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
   * 每页条数
   */
  PageSize?: number
  /**
   * 页码
   */
  PageNum?: number
  /**
   * 总页数
   */
  PageCount?: number
  /**
   * 记录总数
   */
  Total?: number
}

/**
 * CreateDeviceTask请求参数结构体
 */
export interface CreateDeviceTaskRequest {
  /**
   * 管理域实例ID，用于CAM管理域权限分配。若企业未进行管理域的划分，可直接传入根域"1"，此时表示针对当前企业的全部设备和账号进行接口CRUD，具体CRUD的影响范围限制于相应接口的入参。
   */
  DomainInstanceId?: string
  /**
   * 终端id
   */
  Mid?: string
}

/**
 * 业务响应数据
 */
export interface DeviceDetail {
  /**
   * 设备ID
   */
  Id?: number
  /**
   * 设备唯一标识码，在ioa中每个设备有唯一标识码
   */
  Mid?: string
  /**
   * 终端名（设备名）
   */
  Name?: string
  /**
   * 设备所在分组ID
   */
  GroupId?: number
  /**
   * OS平台，0：Windows 、1： Linux、 2：macOS 、4： Android、 5: iOS。默认是0
   */
  OsType?: number
  /**
   * 设备IP地址（出口IP）
   */
  Ip?: string
  /**
   * 在线状态，2：在线、0或者1:离线
   */
  OnlineStatus?: number
  /**
   * 客户端版本号-大整数
   */
  Version?: string
  /**
   * 客户端版本号-点分字符串
   */
  StrVersion?: string
  /**
   * 首次在线时间
   */
  Itime?: string
  /**
   * 最后一次在线时间
   */
  ConnActiveTime?: string
  /**
   * 设备是否加锁 ，1：锁定 0或者2：未锁定。
   */
  Locked?: number
  /**
   * 设备本地IP列表, 包括IP
   */
  LocalIpList?: string
  /**
   * 宿主机id（需要宿主机也安装iOA才能显示）
   */
  HostId?: number
  /**
   * 设备所属分组名
   */
  GroupName?: string
  /**
   * 设备所属分组路径
   */
  GroupNamePath?: string
  /**
   * 未修复高危漏洞数(只支持32位)
   */
  CriticalVulListCount?: number
  /**
   * 操作系统名称
   */
  Os?: string
  /**
   * 操作系统位数
   */
  OsBits?: number
  /**
   * 操作系统版本
   */
  OsVersion?: string
  /**
   * 操作系统语言
   */
  OsLanguage?: string
  /**
   * 操作系统安装时间
   */
  OsInstallDate?: string
  /**
   * 设备名，和Name相同
   */
  ComputerName?: string
  /**
   * 登录域名
   */
  DomainName?: string
  /**
   * MAC地址
   */
  MacAddr?: string
  /**
   * 漏洞数
   */
  VulCount?: number
  /**
   * 病毒风险数
   */
  RiskCount?: number
  /**
   * 病毒库版本
   */
  VirusVer?: string
  /**
   * 漏洞库版本
   */
  VulVersion?: string
  /**
   * 系统修复引擎版本
   */
  SysRepVersion?: string
  /**
   * 高危补丁列表
   */
  VulCriticalList?: Array<string>
  /**
   * 标签
   */
  Tags?: string
  /**
   * 终端用户名
   */
  UserName?: string
  /**
   * 防火墙状态，不等于0表示开启
   */
  FirewallStatus?: number
  /**
   * SN序列号
   */
  SerialNum?: string
  /**
   * 设备管控策略版本
   */
  DeviceStrategyVer?: string
  /**
   * NGN策略版本
   */
  NGNStrategyVer?: string
  /**
   * 最近登录账户的账号(账号系统用户账号)
   */
  IOAUserName?: string
  /**
   * 设备管控新策略
   */
  DeviceNewStrategyVer?: string
  /**
   * NGN策略新版本
   */
  NGNNewStrategyVer?: string
  /**
   * 宿主机名称（需要宿主机也安装iOA才能显示）
   */
  HostName?: string
  /**
   * 主板序列号
   */
  BaseBoardSn?: string
  /**
   * 绑定账户名称
   */
  AccountUsers?: string
  /**
   * 身份策略版本
   */
  IdentityStrategyVer?: string
  /**
   * 身份策略新版本
   */
  IdentityNewStrategyVer?: string
  /**
   * 最近登录账号部门
   */
  AccountGroupName?: string
  /**
   * 最近登录账户的姓名(账号系统用户姓名)
   */
  AccountName?: string
  /**
   * 账号组id
   */
  AccountGroupId?: number
  /**
   * 终端备注名
   */
  RemarkName?: string
}

/**
 * 获取账号列表响应的单个对象
 */
export interface DescribeLocalAccountsData {
  /**
   * uid，数据库中唯一
   */
  Id?: number
  /**
   * 账号，登录账号
   */
  UserId?: string
  /**
   * 用户名
   */
  UserName?: string
  /**
   * 账号id，同Id字段
   */
  AccountId?: number
  /**
   * 账号所在的分组id
   */
  GroupId?: number
  /**
   * 账号所在的分组名称
   */
  GroupName?: string
  /**
   * 账号所在的分组名称路径，用英文.分割
   */
  NamePath?: string
  /**
   * 账号来源,0表示本地账号(只支持32位)
   */
  Source?: number
  /**
   * 账号状态,0禁用，1启用(只支持32位)
   */
  Status?: number
  /**
   * 账号的创建时间
   */
  Itime?: string
  /**
   * 账号的最后更新时间
   */
  Utime?: string
  /**
   * 账号的扩展信息，包含邮箱、手机号、身份证、职位等信息
   */
  ExtraInfo?: string
  /**
   * 用户风险等级，枚举：none, low, middle, high
   */
  RiskLevel?: string
  /**
   * 所属组
   */
  AccountGroups?: Array<DescribeLocalAccountAccountGroupsData>
  /**
   * 绑定手机端设备数
   */
  MobileBindNum?: number
  /**
   * 绑定Pc端设备数
   */
  PcBindNum?: number
  /**
   * 账号在线状态 1：在线 2：离线
   */
  OnlineStatus?: number
  /**
   * 账号活跃状态 1：活跃 2：非活跃
   */
  ActiveStatus?: number
  /**
   * 账号登录时间
   */
  LoginTime?: string
  /**
   * 账号登出时间
   */
  LogoutTime?: string
}

/**
 * DescribeDeviceHardwareInfoList请求参数结构体
 */
export interface DescribeDeviceHardwareInfoListRequest {
  /**
   * 【必填】设备分组id（需要和OsType匹配），下面是私有化场景下默认id：id-名称-操作系统1	全网终端	Win2	未分组终端	Win30000000	服务器	Win40000101	全网终端	Linux40000102	未分组终端	Linux40000103	服务器	Linux40000201	全网终端	macOS40000202	未分组终端	macOS40000203	服务器	macOS40000401	全网终端	Android40000402	未分组终端	Android40000501	全网终端	iOS40000502	未分组终端	iOSSaaS需要调用分组接口DescribeDeviceChildGroups获取对应分组id
   */
  GroupId: number
  /**
   * 【必填】操作系统类型（0: win，1：linux，2: mac，4：android，5：ios   默认值0），需要和GroupId或者GroupIds匹配
   */
  OsType: number
  /**
   * 管理域实例ID，用于CAM管理域权限分配。若企业未进行管理域的划分，可直接传入根域"1"，此时表示针对当前企业的全部设备和账号进行接口CRUD，具体CRUD的影响范围限制于相应接口的入参。
   */
  DomainInstanceId?: string
  /**
   * 过滤条件参数（字段含义请参考接口返回值）  - Name, 类型String，支持操作：【eq，like，ilike】，支持排序  - UserName, 类型String，支持操作：【eq，like，ilike】，支持排序  - IoaUserName，类型String，支持操作：【eq，like，ilike】，支持排序  - MacAddr, 类型String，支持操作：【eq，like，ilike】，支持排序  - Ip, 类型String，支持操作：【eq，like，ilike】，支持排序  - Mid, 类型String，支持操作：【eq，like，ilike】，支持排序  ，支持排序分页参数  - PageNum 从1开始，小于等于0时使用默认参数 - PageSize 最大值5000，最好不超过100
   */
  Condition?: Condition
}

/**
 * 账号分组详情响应数据
 */
export interface GetAccountGroupData {
  /**
   * 分组名称全路径，点分格式
   */
  NamePath?: string
  /**
   * 分组ID全路径，数组格式
   */
  IdPathArr?: Array<number | bigint>
  /**
   * 分组扩展信息
   */
  ExtraInfo?: string
  /**
   * 最后更新时间
   */
  Utime?: string
  /**
   * 当前分组的父分组ID
   */
  ParentId?: number
  /**
   * 源账号组ID，该字段仅适用于第三方同步的组织架构，通过OrgId-Id构成源组织架构分组ID-现组织架构分组ID映射关系
   */
  OrgId?: string
  /**
   * 分组名称
   */
  Name?: string
  /**
   * 分组ID
   */
  Id?: number
  /**
   * 分组描述
   */
  Description?: string
  /**
   * 分组导入源(只支持32位)
   */
  Source?: number
  /**
   * 分组ID全路径，点分格式
   */
  IdPath?: string
  /**
   * 创建时间
   */
  Itime?: string
  /**
   * 父源账号组ID，该字段仅适用于第三方同步的组织架构
   */
  ParentOrgId?: string
  /**
   * 导入信息,json格式
   */
  Import?: string
  /**
   * 是否开启导入架构
   */
  ImportEnable?: boolean
  /**
   * 导入类型
   */
  ImportType?: string
  /**
   * miniIAMId，MiniIAM源才有
   */
  MiniIamId?: string
}

/**
 * DescribeSoftCensusListByDevice请求参数结构体
 */
export interface DescribeSoftCensusListByDeviceRequest {
  /**
   * 必填，终端分组ID
   */
  GroupId: number
  /**
   * 管理域实例ID，用于CAM管理域权限分配。若企业未进行管理域的划分，可直接传入根域"1"，此时表示针对当前企业的全部设备和账号进行接口CRUD，具体CRUD的影响范围限制于相应接口的入参。
   */
  DomainInstanceId?: string
  /**
   * 系统类型（0: win，1：linux，2: mac，4：android，5：ios  ）；默认值0
   */
  OsType?: number
  /**
   * 过滤条件、分页参数   <li>Name - String - 是否必填：否 - 操作符: eq,like,ilike  - 排序支持：否 - 备注：字段含义，终端名。</li> 	<li>UserName - String - 是否必填：否 - 操作符: eq,like,ilike  - 排序支持：否 - 备注：字段含义，终端用户名。</li> 	<li>IoaUserName - String - 是否必填：否 - 操作符: eq,like,ilike  - 排序支持：否 - 备注：字段含义，最近登录账号。</li> 	<li>Ip - String - 是否必填：否 - 操作符: eq,like,ilike  - 排序支持：否 - 备注：字段含义，IP地址。</li> 	<li>MacAddr - String - 是否必填：否 - 操作符: eq,like,ilike  - 排序支持：否 - 备注：字段含义，MAC地址。</li>
   */
  Condition?: Condition
}

/**
 * 规则表达式
 */
export interface RuleExpression {
  /**
   * 规则元数据
   */
  Items?: Array<RuleItem>
  /**
   * 关系
   */
  Relation?: string
}

/**
 * ModifyVirtualDeviceGroups请求参数结构体
 */
export interface ModifyVirtualDeviceGroupsRequest {
  /**
   * 必填，操作的设备列表数据
   */
  DeviceList: Array<ModifyVirtualDeviceGroupsReqItem>
  /**
   * 管理域实例ID，用于CAM管理域权限分配。若企业未进行管理域的划分，可直接传入根域"1"，此时表示针对当前企业的全部设备和账号进行接口CRUD，具体CRUD的影响范围限制于相应接口的入参。
   */
  DomainInstanceId?: string
  /**
   * 添加到的终端自定义分组id。和DeviceVirtualGroupIds互斥，必填其一，优先使用本参数
   */
  DeviceVirtualGroupId?: number
  /**
   * 要添加的终端自定义分组id列表
   */
  DeviceVirtualGroupIds?: Array<number | bigint>
  /**
   * 系统类型（0: win，1：linux，2: mac，4：android，5：ios   默认值0）
   */
  OsType?: number
}

/**
 * CreateDeviceVirtualGroup请求参数结构体
 */
export interface CreateDeviceVirtualGroupRequest {
  /**
   * 必填，终端自定义分组名
   */
  DeviceVirtualGroupName: string
  /**
   * 管理域实例ID，用于CAM管理域权限分配。若企业未进行管理域的划分，可直接传入根域"1"，此时表示针对当前企业的全部设备和账号进行接口CRUD，具体CRUD的影响范围限制于相应接口的入参。
   */
  DomainInstanceId?: string
  /**
   * 详情
   */
  Description?: string
  /**
   * 系统类型（0: win，1：linux，2: mac，4：android，5：ios ； 默认值0）(只支持32位)
   */
  OsType?: number
  /**
   * 分组类型（0:手动分组；非0为自动划分分组；具体枚举值为：1:自动每小时划分分组、2:自动每天划分分组、3:自定义时间划分分组； 默认值0）(只支持32位)
   */
  TimeType?: number
  /**
   * 选填，TimeType=3时的自动划分时间，其他情况为0（单位min）(只支持32位)
   */
  AutoMinute?: number
  /**
   * 选填，手动分组不填，自动划分分组的划分规则数据
   */
  AutoRules?: ComplexRule
}

/**
 * 分页的具体数据对象
 */
export interface DeviceProcessInfo {
  /**
   * 命令行
注意：此字段可能返回 null，表示取不到有效值。
   */
  CmdLine?: string
  /**
   * 内存
注意：此字段可能返回 null，表示取不到有效值。
   */
  Memory?: string
  /**
   * 名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  Name?: string
  /**
   * 路径
注意：此字段可能返回 null，表示取不到有效值。
   */
  Path?: string
  /**
   * 进程id
注意：此字段可能返回 null，表示取不到有效值。
   */
  ProcessId?: number
  /**
   * 启动用户
注意：此字段可能返回 null，表示取不到有效值。
   */
  User?: string
}

/**
 * 分页的具体数据对象
 */
export interface DeviceServiceInfo {
  /**
   * 命令行
注意：此字段可能返回 null，表示取不到有效值。
   */
  CmdLine?: string
  /**
   * 内存
注意：此字段可能返回 null，表示取不到有效值。
   */
  Description?: string
  /**
   * 名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  Name?: string
  /**
   * 进程id
注意：此字段可能返回 null，表示取不到有效值。
   */
  ProcessId?: number
  /**
   * 启动类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  StartType?: number
  /**
   * 状态
注意：此字段可能返回 null，表示取不到有效值。
   */
  State?: number
  /**
   * 启动用户
注意：此字段可能返回 null，表示取不到有效值。
   */
  User?: string
}

/**
 * 业务响应数据
 */
export interface DescribeDeviceInfoRspData {
  /**
   * 分页的具体数据对象
注意：此字段可能返回 null，表示取不到有效值。
   */
  ProcessList?: Array<DeviceProcessInfo>
  /**
   * 分页的具体数据对象
注意：此字段可能返回 null，表示取不到有效值。
   */
  NetworkList?: Array<DeviceNetworkInfo>
  /**
   * 分页的具体数据对象
注意：此字段可能返回 null，表示取不到有效值。
   */
  ServiceList?: Array<DeviceServiceInfo>
}

/**
 * CreateDeviceTask返回参数结构体
 */
export interface CreateDeviceTaskResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateDLPFileDetectionTask返回参数结构体
 */
export interface CreateDLPFileDetectionTaskResponse {
  /**
   * 创建送检任务响应数据
   */
  Data?: CreateDLPFileDetectionTaskData
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDeviceChildGroups返回参数结构体
 */
export interface DescribeDeviceChildGroupsResponse {
  /**
   * 查询设备组子分组详情响应结构
   */
  Data?: DescribeDeviceChildGroupsRspData
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 获取账号列表响应的分页对象
 */
export interface DescribeLocalAccountsPage {
  /**
   * 公共分页对象
   */
  Page?: Paging
  /**
   * 获取账号列表响应的单个对象
   */
  Items?: Array<DescribeLocalAccountsData>
}

/**
 * 业务响应数据
 */
export interface DescribeSoftwareInformationPageData {
  /**
   * 软件详情响应对象集合
   */
  Items?: Array<SoftwareInformationData>
  /**
   * 分页公共对象
   */
  Page?: Paging
}

/**
 * DescribeDLPFileDetectResult返回参数结构体
 */
export interface DescribeDLPFileDetectResultResponse {
  /**
   * 查询任务结果
   */
  Data?: DescribeDLPFileDetectResultData
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 这是一个多接口的公共数据结构，用于接口根据条件进行过滤和分页。具体支持哪些过滤条件，参考具体使用该结构的接口字段描述
 */
export interface Condition {
  /**
   * Filters 条件过滤
   */
  Filters?: Array<Filter>
  /**
   * FilterGroups 条件过滤组
   */
  FilterGroups?: Array<FilterGroup>
  /**
   * Sort 排序字段
   */
  Sort?: Sort
  /**
   * PageSize 每页获取数(只支持32位)
   */
  PageSize?: number
  /**
   * PageNum 获取第几页(只支持32位)
   */
  PageNum?: number
}

/**
 * CreateDLPFileDetectionTask请求参数结构体
 */
export interface CreateDLPFileDetectionTaskRequest {
  /**
   * 文件下载链接，要求公网可访问，GET方式访问后为文件
   */
  Url: string
  /**
   * 文件名，带后缀
   */
  FileName: string
  /**
   *  文件md5，传入相同md5会直接使用之前缓存的结果。

> 请注意：不同文件使用相同md5送检，会命中缓存得到旧的检测结果
   */
  FileMd5: string
  /**
   * 管理域实例ID，用于CAM管理域权限分配
   */
  DomainInstanceId?: string
  /**
   * 回调地址，暂时未使用
   */
  CallBackUrl?: string
}

/**
 * DescribeVirtualDevices请求参数结构体
 */
export interface DescribeVirtualDevicesRequest {
  /**
   * 管理域实例ID，用于CAM管理域权限分配。若企业未进行管理域的划分，可直接传入根域"1"，此时表示针对当前企业的全部设备和账号进行接口CRUD，具体CRUD的影响范围限制于相应接口的入参。
   */
  DomainInstanceId?: string
  /**
   * 过滤条件参数（字段含义请参考接口返回值）- Mid, 类型String，支持操作：【eq，like，ilike】，支持排序- Name, 类型String，支持操作：【eq，like，ilike】，支持排序- Itime, 类型String，支持操作：【eq，like，ilike】，支持排序- UserName, 类型String，支持操作：【eq，like，ilike】，支持排序- MacAddr, 类型String，支持操作：【eq，like，ilike】，支持排序- UserId, 类型String，支持操作：【eq，like，ilike】，支持排序- Ip, 类型String，支持操作：【eq，like，ilike】，支持排序- Tags，类型String，支持操作：【eq，like，ilike】，支持排序- LocalIpList，类型String，支持操作：【eq，like，ilike】，支持排序- SerialNum，类型String，支持操作：【eq，like，ilike】，支持排序- Version，类型String，支持操作：【eq，like，ilike】，支持排序- StrVersion，类型String，支持操作：【eq，like，ilike】，支持排序- RtpStatus，类型String，支持操作：【eq，like，ilike】，**不支持排序**- HostName，类型String，支持操作：【eq，like，ilike】，支持排序- IoaUserName，类型String，支持操作：【eq，like，ilike】，支持排序- GroupName，类型String，支持操作：【eq，like，ilike】，支持排序- CriticalVulListCount，**类型Int**，支持操作：【eq】，**不支持排序**- RiskCount，**类型Int**，支持操作：【eq】，**不支持排序**- VulVersion，类型String，支持操作：【eq，like，ilike】，**不支持排序**- Virusver，类型String，支持操作：【eq，like，ilike】，**不支持排序**- SysRepver，类型String，支持操作：【eq，like，ilike】，**不支持排序**- BaseBoardSn，类型String，支持操作：【eq，like，ilike】，支持排序- Os，类型String，支持操作：【eq，like，ilike】，支持排序- ConnActiveTime，类型String，支持操作：【eq，like，ilike】，**不支持排序**- FirewallStatus，**类型Int**，支持操作：【eq】，**不支持排序**- ProfileName，类型String，支持操作：【eq，like，ilike】，支持排序- DomainName，类型String，支持操作：【eq，like，ilike】，支持排序- SysRepVersion，类型String，支持操作：【eq，like，ilike】，支持排序- VirusVer，类型String，支持操作：【eq，like，ilike】，支持排序- Cpu，类型String，支持操作：【eq，like，ilike】，支持排序- Memory，类型String，支持操作：【eq，like，ilike】，支持排序- HardDiskSize，类型String，支持操作：【eq，like，ilike】，支持排序- HardwareChangeCount，**类型Int**，支持操作：【eq】，支持排序- AccountName，类型String，支持操作：【like.ilike】，支持排序- AccountGroupName，类型String，支持操作：【like.ilike】，支持排序- ScreenRecordingPermission，**类型Int**，支持操作：【eq】，支持排序- DiskAccessPermission，**类型Int**，支持操作：【eq】，支持排序分页参数- PageNum 从1开始，小于等于0时使用默认参数- PageSize 最大值5000，最好不超过100
   */
  Condition?: Condition
  /**
   * 必填，终端自定义分组id
   */
  DeviceVirtualGroupId?: number
  /**
   * 必填，系统类型（0: win，1：linux，2: mac，3: win_srv，4：android，5：ios   默认值0）
   */
  OsType?: number
  /**
   * 选填，在线状态 （2表示在线，0或者1表示离线）
   */
  OnlineStatus?: number
}

/**
 * CreatePrivilegeCode返回参数结构体
 */
export interface CreatePrivilegeCodeResponse {
  /**
   * 业务响应数据
   */
  Data?: CreatePrivilegeCodeRspData
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeAggrSoftCategorySoftList返回参数结构体
 */
export interface DescribeAggrSoftCategorySoftListResponse {
  /**
   * 数据
   */
  Data?: DescribeAggrSoftCategorySoftListData
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 响应返回的data
 */
export interface CreateDeviceVirtualGroupRspData {
  /**
   * 返回的自定义分组id
   */
  Id?: number
}

/**
 * DescribeVirtualDevices返回参数结构体
 */
export interface DescribeVirtualDevicesResponse {
  /**
   * 返回的具体Data数据
   */
  Data?: DescribeVirtualDevicesPageRsp
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}
