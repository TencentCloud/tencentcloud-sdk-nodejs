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
 * 参数
 */
export interface ConfigParams {
  /**
   * 名字
   */
  ParameterName?: string
  /**
   * 值
   */
  ParameterValue?: string
  /**
   * 修改前的值
   */
  ParameterOldValue?: string
}

/**
 * ModifyInstance返回参数结构体
 */
export interface ModifyInstanceResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeInstanceInfo请求参数结构体
 */
export interface DescribeInstanceInfoRequest {
  /**
   * 集群实例ID
   */
  InstanceId: string
}

/**
 * DescribeUserHbaConfig返回参数结构体
 */
export interface DescribeUserHbaConfigResponse {
  /**
   * 实例总数
   */
  TotalCount?: number
  /**
   * hba数组
   */
  HbaConfigs?: Array<HbaConfig>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 访问信息
 */
export interface AccessInfo {
  /**
   * 地址
   */
  Address?: string
  /**
   * 协议
   */
  Protocol?: string
}

/**
 * DescribeUserHbaConfig请求参数结构体
 */
export interface DescribeUserHbaConfigRequest {
  /**
   * 实例ID
   */
  InstanceId: string
}

/**
 * ModifyDBParameters返回参数结构体
 */
export interface ModifyDBParametersResponse {
  /**
   * 异步流程Id
   */
  TaskId?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 集群状态抽象后的结构体
 */
export interface InstanceStateInfo {
  /**
   * 集群状态，例如：Serving
   */
  InstanceState?: string
  /**
   * 集群操作创建时间
   */
  FlowCreateTime?: string
  /**
   * 集群操作名称
   */
  FlowName?: string
  /**
   * 集群操作进度
   */
  FlowProgress?: number
  /**
   * 集群状态描述，例如：运行中
   */
  InstanceStateDesc?: string
  /**
   * 集群流程错误信息，例如：“创建失败，资源不足”
   */
  FlowMsg?: string
  /**
   * 当前步骤的名称，例如：”购买资源中“
   */
  ProcessName?: string
  /**
   * 集群是否有备份中任务，有为1,无为0
   */
  BackupStatus?: number
  /**
   * 请求id
   */
  RequestId?: string
  /**
   * 集群是否有备份中任务，有为1,无为0
   */
  BackupOpenStatus?: number
}

/**
 * 慢查询项目信息
 */
export interface NormQueryItem {
  /**
   * 调用次数
   */
  CallTimes: number
  /**
   * 读共享内存块数
   */
  SharedReadBlocks: number
  /**
   * 写共享内存块数
   */
  SharedWriteBlocks: number
  /**
   * 数据库
   */
  DatabaseName: string
  /**
   * 脱敏后语句
   */
  NormalQuery: string
  /**
   * 执行时间最长的语句
   */
  MaxElapsedQuery: string
  /**
   * 花费总时间
   */
  CostTime: number
  /**
   * 客户端ip
   */
  ClientIp: string
  /**
   * 用户名
   */
  UserName: string
  /**
   * 总次数占比
   */
  TotalCallTimesPercent: number
  /**
   * 总耗时占比
   */
  TotalCostTimePercent: number
  /**
   * 花费最小时间
   */
  MinCostTime: number
  /**
   * 花费最大时间
   */
  MaxCostTime: number
  /**
   * 最早一条时间
   */
  FirstTime: string
  /**
   * 最晚一条时间
   */
  LastTime: string
  /**
   * 读io总耗时
   */
  ReadCostTime: number
  /**
   * 写io总耗时
   */
  WriteCostTime: number
}

/**
 * DescribeInstanceState请求参数结构体
 */
export interface DescribeInstanceStateRequest {
  /**
   * 集群实例名称
   */
  InstanceId: string
}

/**
 * 用于描述账号的实例ID、账号名
 */
export interface AccountInfo {
  /**
   * 实例ID
   */
  InstanceId?: string
  /**
   * 账号名
   */
  UserName?: string
  /**
   * 账户属性
   */
  Perms?: Array<string>
}

/**
 * DescribeAccounts请求参数结构体
 */
export interface DescribeAccountsRequest {
  /**
   * 实例ID
   */
  InstanceId: string
  /**
   * 偏移量，默认为0
   */
  Offset?: number
  /**
   * 返回数量，默认为20，最大值为100
   */
  Limit?: number
}

/**
 * ScaleOutInstance返回参数结构体
 */
export interface ScaleOutInstanceResponse {
  /**
   * 流程id
   */
  FlowId?: string
  /**
   * 错误信息
   */
  ErrorMsg?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeInstanceNodes请求参数结构体
 */
export interface DescribeInstanceNodesRequest {
  /**
   * 集群ID
   */
  InstanceId: string
}

/**
 * RestartInstance返回参数结构体
 */
export interface RestartInstanceResponse {
  /**
   * 重启实例id
   */
  FlowId?: number
  /**
   * 错误信息
   */
  ErrorMsg?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 计费时间参数
 */
export interface ChargeProperties {
  /**
   * 1-需要自动续期
   */
  RenewFlag: number
  /**
   * 订单时间范围
   */
  TimeSpan: number
  /**
   * 时间单位，一般为h和m
   */
  TimeUnit: string
  /**
   * 计费类型0-按量计费，1-包年包月
   */
  PayMode?: number
  /**
   * PREPAID、POSTPAID_BY_HOUR
   */
  ChargeType?: string
}

/**
 * DestroyInstanceByApi请求参数结构体
 */
export interface DestroyInstanceByApiRequest {
  /**
   * 实例名称，例如"cdwpg-xxxx"
   */
  InstanceId: string
}

/**
 * 升级信息
 */
export interface UpgradeItem {
  /**
   * 任务名称
   */
  TaskName?: string
  /**
   * 原有内核版本
   */
  SourceVersion?: string
  /**
   * 目标内核版本
   */
  TargetVersion?: string
  /**
   * 任务创建时间
   */
  CreateTime?: string
  /**
   * 任务结束时间
   */
  EndTime?: string
  /**
   * 任务完成状态
   */
  Status?: string
  /**
   * 操作者
   */
  OperateUin?: string
}

/**
 * DescribeDBConfigHistory返回参数结构体
 */
export interface DescribeDBConfigHistoryResponse {
  /**
   * 总数
   */
  TotalCount?: number
  /**
   * 历史参数
   */
  ConfigHistory?: Array<ConfigHistory>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 资源规格
 */
export interface ResourceSpecNew {
  /**
   * 资源名称
   */
  SpecName: string
  /**
   * 资源数
   */
  Count: number
  /**
   * 磁盘信息
   */
  DiskSpec: CBSSpec
  /**
   * 资源类型，DATA
   */
  Type: string
}

/**
 * Instance node
 */
export interface InstanceNode {
  /**
   * id
   */
  NodeId: number
  /**
   * cn
   */
  NodeType: string
  /**
   * ip
   */
  NodeIp: string
}

/**
 * DescribeDBConfigHistory请求参数结构体
 */
export interface DescribeDBConfigHistoryRequest {
  /**
   * 实例Id
   */
  InstanceId: string
  /**
   * 数据库分页
   */
  Limit?: number
  /**
   * 数据库分页
   */
  Offset?: number
}

/**
 * 错误日志详细信息
 */
export interface ErrorLogDetail {
  /**
   * 用户名称
   */
  UserName?: string
  /**
   * 数据库
   */
  Database?: string
  /**
   * 报错时间
   */
  ErrorTime?: string
  /**
   * 报错信息
   */
  ErrorMessage?: string
}

/**
 * DescribeDBParams请求参数结构体
 */
export interface DescribeDBParamsRequest {
  /**
   * cn/dn
   */
  NodeTypes?: Array<string>
  /**
   * 分页参数，分页步长，默认为10 示例值：10
   */
  Limit?: number
  /**
   * 分页参数，第一页为0，第二页为10
   */
  Offset?: number
  /**
   * InstanceId名称
   */
  InstanceId?: string
}

/**
 * 磁盘规格
 */
export interface CBSSpec {
  /**
   * 盘类型
   */
  DiskType: string
  /**
   * 大小
   */
  DiskSize: number
  /**
   * 个数
   */
  DiskCount: number
}

/**
 * DescribeInstanceNodes返回参数结构体
 */
export interface DescribeInstanceNodesResponse {
  /**
   * error msg
   */
  ErrorMsg?: string
  /**
   * 节点列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  InstanceNodes?: Array<InstanceNode>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyInstance请求参数结构体
 */
export interface ModifyInstanceRequest {
  /**
   * 实例Id
   */
  InstanceId: string
  /**
   * 新修改的实例名称
   */
  InstanceName: string
}

/**
 * DescribeSimpleInstances返回参数结构体
 */
export interface DescribeSimpleInstancesResponse {
  /**
   * 集群列表总数
   */
  TotalCount?: number
  /**
   * 集群列表详情
   */
  InstancesList?: Array<InstanceSimpleInfoNew>
  /**
   * 错误信息
   */
  ErrorMsg?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * UpgradeInstance请求参数结构体
 */
export interface UpgradeInstanceRequest {
  /**
   * 集群id
   */
  InstanceId: string
  /**
   * 安装包版本
   */
  PackageVersion: string
}

/**
 * DescribeSlowLog返回参数结构体
 */
export interface DescribeSlowLogResponse {
  /**
   * 返回信息总数
   */
  TotalCount?: number
  /**
   * 慢SQL日志详细信息
   */
  SlowLogDetails?: SlowLogDetail
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyUserHba返回参数结构体
 */
export interface ModifyUserHbaResponse {
  /**
   * 任务id
   */
  TaskId?: number
  /**
   * 错误信息
   */
  ErrorMsg?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * node参数
 */
export interface NodeConfigParams {
  /**
   * node类型
   */
  NodeType: string
  /**
   * 参数
   */
  ConfigParams: Array<ConfigParams>
}

/**
 * 云原生实例详情
 */
export interface InstanceInfo {
  /**
   * ID值
   */
  ID?: number
  /**
   * 内核版本类型
   */
  InstanceType?: string
  /**
   * 集群名字
   */
  InstanceName?: string
  /**
   * 集群状态
   */
  Status?: string
  /**
   * 集群状态详情
   */
  StatusDesc?: string
  /**
   * 集群状态信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  InstanceStateInfo?: InstanceStateInfo
  /**
   * 集群id
   */
  InstanceID?: string
  /**
   * 创建时间
   */
  CreateTime?: string
  /**
   * 地域
   */
  Region?: string
  /**
   * 地区
   */
  Zone?: string
  /**
   * 地域详情
   */
  RegionDesc?: string
  /**
   * 地区详情
   */
  ZoneDesc?: string
  /**
   * 标签
   */
  Tags?: Array<Tag>
  /**
   * 内核版本
   */
  Version?: string
  /**
   * 字符集
   */
  Charset?: string
  /**
   * CN节点列表
   */
  CNNodes?: Array<InstanceNodeGroup>
  /**
   * DN节点列表
   */
  DNNodes?: Array<InstanceNodeGroup>
  /**
   * 地域id
   */
  RegionId?: number
  /**
   * 地区id
   */
  ZoneId?: number
  /**
   * 私有网络
   */
  VpcId?: string
  /**
   * 子网
   */
  SubnetId?: string
  /**
   * 过期时间
   */
  ExpireTime?: string
  /**
   * 计费方式
   */
  PayMode?: string
  /**
   * 自动续费
   */
  RenewFlag?: boolean
  /**
   * 集群id
   */
  InstanceId?: string
  /**
   * 访问信息
   */
  AccessDetails?: Array<AccessInfo>
}

/**
 * DescribeDBParams返回参数结构体
 */
export interface DescribeDBParamsResponse {
  /**
   * 总数
   */
  TotalCount?: number
  /**
   * 参数信息
   */
  Items?: Array<ParamItem>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ParamDetail 详细
 */
export interface ParamDetail {
  /**
   * 参数名
   */
  ParamName?: string
  /**
   * 默认值
   */
  DefaultValue?: string
  /**
   * 是否需要重启
   */
  NeedRestart?: boolean
  /**
   * 当前运行值
   */
  RunningValue?: string
  /**
   * 取值范围
   */
  ValueRange?: ValueRange
  /**
   * 单位
   */
  Unit?: string
  /**
   * 英文简介
   */
  ShortDesc?: string
  /**
   * 参数名
   */
  ParameterName?: string
}

/**
 * DescribeInstances返回参数结构体
 */
export interface DescribeInstancesResponse {
  /**
   * 实例总数
   */
  TotalCount?: number
  /**
   * 实例数组
注意：此字段可能返回 null，表示取不到有效值。
   */
  InstancesList?: Array<InstanceInfo>
  /**
   * 错误信息
   */
  ErrorMsg?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ConfigHistory1
 */
export interface ConfigHistory {
  /**
   * id
   */
  Id?: number
  /**
   * 实例名
   */
  InstanceId?: string
  /**
   * 创建时间
   */
  CreatedAt?: string
  /**
   * 更新时间
   */
  UpdatedAt?: string
  /**
   * dn/cn
   */
  NodeType?: string
  /**
   * 参数名
   */
  ParamName?: string
  /**
   * 新参数值
   */
  ParamNewValue?: string
  /**
   * 旧参数值
   */
  ParamOldValue?: string
  /**
   * 状态 doing/success
   */
  Status?: string
}

/**
 * ResetAccountPassword返回参数结构体
 */
export interface ResetAccountPasswordResponse {
  /**
   * 错误信息
   */
  ErrorMsg?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 磁盘规格
 */
export interface DiskSpecPlus {
  /**
   * 磁盘个数
   */
  DiskCount?: number
  /**
   * 磁盘最大值
   */
  MaxDiskSize?: number
  /**
   * 磁盘最小值
   */
  MinDiskSize?: number
  /**
   * 磁盘类型
   */
  DiskType?: string
  /**
   * 磁盘类型详情
   */
  DiskDesc?: string
  /**
   * 机型类型
   */
  CvmClass?: string
}

/**
 * ResetAccountPassword请求参数结构体
 */
export interface ResetAccountPasswordRequest {
  /**
   * 实例Id
   */
  InstanceId: string
  /**
   * 需要修改的用户名
   */
  UserName: string
  /**
   * 新密码
   */
  NewPassword: string
}

/**
 * RestartInstance请求参数结构体
 */
export interface RestartInstanceRequest {
  /**
   * 实例名称，例如“cdwpg-xxxx"
   */
  InstanceId: string
  /**
   * 需要重启的节点类型么，gtm/cn/dn/fn
   */
  NodeTypes?: Array<string>
  /**
   * 需要重启的节点编号，指定重启节点
   */
  NodeIds?: Array<string>
}

/**
 * DescribeUpgradeList请求参数结构体
 */
export interface DescribeUpgradeListRequest {
  /**
   * 集群ID
   */
  InstanceId: string
  /**
   * 分页参数，偏移量，从0开始
   */
  Offset?: number
  /**
   * 分页参数，每页数目，默认为10
   */
  Limit?: number
}

/**
 * 资源信息
 */
export interface ResourceInfo {
  /**
   * 资源名称
   */
  SpecName: string
  /**
   * 资源数
   */
  Count: number
  /**
   * 磁盘信息
   */
  DiskSpec: CBSSpecInfo
  /**
   * 节点类型，cn 或dn
   */
  Type: string
}

/**
 * DescribeInstances请求参数结构体
 */
export interface DescribeInstancesRequest {
  /**
   * 用集群id搜索
   */
  SearchInstanceId?: string
  /**
   * 用集群名字搜索
   */
  SearchInstanceName?: string
  /**
   * 分页参数，第一页为0，第二页为10
   */
  Offset?: number
  /**
   * 分页参数，分页步长，默认为10
   */
  Limit?: number
  /**
   * 搜索标签列表
   */
  SearchTags?: Array<SearchTags>
}

/**
 * UpgradeInstance返回参数结构体
 */
export interface UpgradeInstanceResponse {
  /**
   * 任务id
   */
  FlowId?: number
  /**
   * 错误信息
   */
  ErrorMsg?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeInstanceOperations返回参数结构体
 */
export interface DescribeInstanceOperationsResponse {
  /**
   * 操作记录总数
   */
  TotalCount?: number
  /**
   * 操作记录具体数据
注意：此字段可能返回 null，表示取不到有效值。
   */
  Operations?: Array<InstanceOperation>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateInstanceByApi返回参数结构体
 */
export interface CreateInstanceByApiResponse {
  /**
   * 流程ID
   */
  FlowId?: string
  /**
   * 实例ID
   */
  InstanceId?: string
  /**
   * 错误信息
   */
  ErrorMsg?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeSlowLog请求参数结构体
 */
export interface DescribeSlowLogRequest {
  /**
   * 集群实例ID
   */
  InstanceId: string
  /**
   * 起始时间
   */
  StartTime: string
  /**
   * 结束时间
   */
  EndTime: string
  /**
   * 返回数量，默认为20，最大值为2000
   */
  Limit?: number
  /**
   * 偏移量，默认为0
   */
  Offset?: number
  /**
   * 数据库
   */
  Database?: string
  /**
   * 排序根据
   */
  OrderBy?: string
  /**
   * 升降序
   */
  OrderByType?: string
  /**
   * 过滤时间
   */
  Duration?: number
}

/**
 * DescribeUpgradeList返回参数结构体
 */
export interface DescribeUpgradeListResponse {
  /**
   * 升级记录具体数据
注意：此字段可能返回 null，表示取不到有效值。
   */
  UpgradeItems?: Array<UpgradeItem>
  /**
   * 升级记录总数
   */
  TotalCount?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ScaleOutInstance请求参数结构体
 */
export interface ScaleOutInstanceRequest {
  /**
   * 集群名
   */
  InstanceId: string
  /**
   * 节点类型
   */
  NodeType: string
  /**
   * 扩容节点数量
   */
  ScaleOutCount: number
}

/**
 * DescribeAccounts返回参数结构体
 */
export interface DescribeAccountsResponse {
  /**
   * 实例总数
   */
  TotalCount?: number
  /**
   * 账号数组
   */
  Accounts?: Array<AccountInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 列表页搜索的标记列表
 */
export interface SearchTags {
  /**
   * 标签的键
   */
  TagKey?: string
  /**
   * 标签的值
   */
  TagValue?: string
  /**
   * 1表示只输入标签的键，没有输入值；0表示输入键时且输入值
   */
  AllValue?: number
}

/**
 * Range范围
 */
export interface Range {
  /**
   * 最小值
   */
  Min?: string
  /**
   * 最大值
   */
  Max?: string
}

/**
 * 集群节点信息
 */
export interface InstanceNodeGroup {
  /**
   * 机型
   */
  SpecName?: string
  /**
   * 磁盘信息
   */
  DataDisk?: DiskSpecPlus
  /**
   * 机器个数
   */
  CvmCount?: number
}

/**
 * DescribeInstance返回参数结构体
 */
export interface DescribeInstanceResponse {
  /**
   * 实例描述信息
   */
  InstanceInfo?: InstanceInfo
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyDBParameters请求参数结构体
 */
export interface ModifyDBParametersRequest {
  /**
   * Instance 名字
   */
  InstanceId?: string
  /**
   * node参数
   */
  NodeConfigParams?: Array<NodeConfigParams>
}

/**
 * DescribeErrorLog返回参数结构体
 */
export interface DescribeErrorLogResponse {
  /**
   * 返回信息总数
   */
  TotalCount?: number
  /**
   * 错误日志详细信息
   */
  ErrorLogDetails?: Array<ErrorLogDetail>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyUserHba请求参数结构体
 */
export interface ModifyUserHbaRequest {
  /**
   * 实例ID
   */
  InstanceId: string
  /**
   * hba数组
   */
  HbaConfigs?: Array<HbaConfig>
}

/**
 * ScaleUpInstance请求参数结构体
 */
export interface ScaleUpInstanceRequest {
  /**
   * 集群唯一ID
   */
  InstanceId: string
  /**
   * 变更资源类型
   */
  Case: string
  /**
   * 修改的参数
   */
  ModifySpec: CNResourceSpec
  /**
   * 集群名称
   */
  InstanceName?: string
}

/**
 * 云原生资源规格描述信息
 */
export interface CNResourceSpec {
  /**
   * 节点类型
   */
  Type: string
  /**
   * 机型
   */
  SpecName: string
  /**
   * 节点个数
   */
  Count: number
  /**
   * 磁盘信息
   */
  DiskSpec: CBSSpec
}

/**
 * DestroyInstanceByApi返回参数结构体
 */
export interface DestroyInstanceByApiResponse {
  /**
   * 销毁流程Id
   */
  FlowId?: string
  /**
   * 错误信息
   */
  ErrorMsg?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ParamItem 信息
 */
export interface ParamItem {
  /**
   * 节点类型, cn/dn
   */
  NodeType?: string
  /**
   * 节点名
   */
  NodeName?: string
  /**
   * 参数个数
   */
  TotalCount?: number
  /**
   * 参数信息
   */
  Details?: Array<ParamDetail>
}

/**
 * 磁盘信息
 */
export interface CBSSpecInfo {
  /**
   * 盘类型
   */
  DiskType: string
  /**
   * 大小
   */
  DiskSize: number
  /**
   * 个数
   */
  DiskCount: number
}

/**
 * user_config
 */
export interface HbaConfig {
  /**
   * 类型
   */
  Type: string
  /**
   * 数据库
   */
  Database: string
  /**
   * 用户
   */
  User: string
  /**
   * ip地址
   */
  Address: string
  /**
   * 方法
   */
  Method: string
  /**
   * 是否遮盖
   */
  Mask?: string
}

/**
 * 集群信息
 */
export interface SimpleInstanceInfo {
  /**
   * ID
   */
  ID?: number
  /**
   * 集群Id
   */
  InstanceId?: string
  /**
   * 集群名字
   */
  InstanceName?: string
  /**
   * 内核版本
   */
  Version?: string
  /**
   * 地域
   */
  Region?: string
  /**
   * 地区
   */
  Zone?: string
  /**
   * 私有网络
   */
  UserVPCID?: string
  /**
   * 子网
   */
  UserSubnetID?: string
  /**
   * 开始时间
   */
  CreateTime?: string
  /**
   * 到期时间
   */
  ExpireTime?: string
  /**
   * 访问地址
   */
  AccessInfo?: string
  /**
   * 自动续费开关，0为不自动续费，1为自动续费
   */
  RenewFlag?: number
  /**
   * 计费方式
   */
  ChargeProperties?: ChargeProperties
  /**
   * 资源集合
   */
  Resources?: Array<ResourceInfo>
  /**
   * 标签列表
   */
  Tags?: Array<Tag>
  /**
   * 集群状态
   */
  Status?: number
}

/**
 * CreateInstanceByApi请求参数结构体
 */
export interface CreateInstanceByApiRequest {
  /**
   * 实例名称
   */
  InstanceName: string
  /**
   * 可用区
   */
  Zone: string
  /**
   * 私有网络
   */
  UserVPCId: string
  /**
   * 子网
   */
  UserSubnetId: string
  /**
   * 计费方式
   */
  ChargeProperties: ChargeProperties
  /**
   * 集群密码
   */
  AdminPassword: string
  /**
   * 资源信息
   */
  Resources: Array<ResourceSpecNew>
  /**
   * 废弃，用TagItems
   */
  Tags?: Tag
  /**
   * 版本
   */
  ProductVersion?: string
  /**
   * 标签列表
   */
  TagItems?: Array<Tag>
}

/**
 * DescribeInstanceOperations请求参数结构体
 */
export interface DescribeInstanceOperationsRequest {
  /**
   * 集群ID
   */
  InstanceId: string
  /**
   * 分页参数，偏移量，从0开始
   */
  Offset?: number
  /**
   * 分页参数，每页数目，默认为10
   */
  Limit?: number
  /**
   * 开始时间
   */
  StartTime?: string
  /**
   * 结束时间
   */
  EndTime?: string
}

/**
 * DescribeInstance请求参数结构体
 */
export interface DescribeInstanceRequest {
  /**
   * 集群实例ID
   */
  InstanceId: string
}

/**
 * 慢SQL日志
 */
export interface SlowLogDetail {
  /**
   * 花费总时间
   */
  TotalTime?: number
  /**
   * 调用总次数
   */
  TotalCallTimes?: number
  /**
   * 慢SQL
   */
  NormalQuerys?: Array<NormQueryItem>
}

/**
 * ValueRange值
 */
export interface ValueRange {
  /**
   * 参数类型，可以为 enum，string，section; 其中enum表示枚举，类似： utf8,latin1,gbk; string表示返回的参数值是字符串; section表示返回的参数值是一个取值范围，类似：[4-8]
   */
  Type?: string
  /**
   * type 取section的时候，返回的参数值
   */
  Range?: Range
  /**
   * type 取enum的时候，返回参数值
   */
  Enum?: Array<string>
  /**
   * type 取string的时候，返回的参数值
   */
  String?: string
}

/**
 * 标签描述
 */
export interface Tag {
  /**
   * 标签的键
   */
  TagKey: string
  /**
   * 标签的值
   */
  TagValue: string
}

/**
 * DescribeInstanceState返回参数结构体
 */
export interface DescribeInstanceStateResponse {
  /**
   * 集群状态，例如：Serving
   */
  InstanceState?: string
  /**
   * 集群操作创建时间
   */
  FlowCreateTime?: string
  /**
   * 集群操作名称
   */
  FlowName?: string
  /**
   * 集群操作进度
   */
  FlowProgress?: number
  /**
   * 集群状态描述，例如：运行中
   */
  InstanceStateDesc?: string
  /**
   * 集群流程错误信息，例如：“创建失败，资源不足”
   */
  FlowMsg?: string
  /**
   * 当前步骤的名称，例如：”购买资源中“
   */
  ProcessName?: string
  /**
   * 集群备份任务开启状态
   */
  BackupStatus?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 集群操作描述
 */
export interface InstanceOperation {
  /**
   * 操作名称，例如“create_instance"、“scaleout_instance”等
   */
  Id?: number
  /**
   * 集群ID
   */
  InstanceId?: string
  /**
   * 操作名称描述，例如“创建”，“修改集群名称”等
   */
  Action?: string
  /**
   * 状态
   */
  Status?: number
  /**
   * 操作开始时间
   */
  StartTime?: string
  /**
   * 操作结束时间
   */
  EndTime?: string
  /**
   * 操作上下文
   */
  Context?: string
  /**
   * 操作更新时间
   */
  UpdateTime?: string
  /**
   * 操作UIN
   */
  Uin?: string
}

/**
 * 精简集群信息
 */
export interface InstanceSimpleInfoNew {
  /**
   * ID
   */
  ID?: number
  /**
   * 集群Id
   */
  InstanceId?: string
  /**
   * 集群名字
   */
  InstanceName?: string
  /**
   * 内核版本
   */
  Version?: string
  /**
   * 地域
   */
  Region?: string
  /**
   * 地域Id
   */
  RegionId?: number
  /**
   * 地域详情
   */
  RegionDesc?: string
  /**
   * 地区
   */
  Zone?: string
  /**
   * 地区id
   */
  ZoneId?: number
  /**
   * 地区详情
   */
  ZoneDesc?: string
  /**
   * 私有网络
   */
  VpcId?: string
  /**
   * 子网
   */
  SubnetId?: string
  /**
   * 开始时间
   */
  CreateTime?: string
  /**
   * 过期时间
   */
  ExpireTime?: string
  /**
   * 访问地址
   */
  AccessInfo?: string
  /**
   * 计费方式
   */
  PayMode?: string
  /**
   * 自动续费
   */
  RenewFlag?: boolean
}

/**
 * DescribeSimpleInstances请求参数结构体
 */
export interface DescribeSimpleInstancesRequest {
  /**
   * 用集群id搜索
   */
  SearchInstanceId?: string
  /**
   * 用集群名字搜索
   */
  SearchInstanceName?: string
  /**
   * 分页参数，第一页为0，第二页为10
   */
  Offset?: number
  /**
   * 分页参数，分页步长，默认为10
   */
  Limit?: number
  /**
   * 用标签列表搜索
   */
  SearchTags?: Array<string>
}

/**
 * DescribeErrorLog请求参数结构体
 */
export interface DescribeErrorLogRequest {
  /**
   * 集群实例ID
   */
  InstanceId: string
  /**
   * 起始时间
   */
  StartTime: string
  /**
   * 结束时间
   */
  EndTime: string
  /**
   * 返回数量，默认为20，最大值为2000
   */
  Limit?: number
  /**
   * 偏移量，默认为0
   */
  Offset?: number
}

/**
 * ScaleUpInstance返回参数结构体
 */
export interface ScaleUpInstanceResponse {
  /**
   * 返回的id
   */
  FlowId?: number
  /**
   * 具体错误
   */
  ErrorMsg?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeInstanceInfo返回参数结构体
 */
export interface DescribeInstanceInfoResponse {
  /**
   * 集群描述信息
   */
  SimpleInstanceInfo?: SimpleInstanceInfo
  /**
   * 错误信息
   */
  ErrorMsg?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}
