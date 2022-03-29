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
 * ModifyClusterName请求参数结构体
 */
export interface ModifyClusterNameRequest {
  /**
   * 集群ID
   */
  ClusterId: string

  /**
   * 集群名
   */
  ClusterName: string
}

/**
 * DescribeRollbackTimeRange请求参数结构体
 */
export interface DescribeRollbackTimeRangeRequest {
  /**
   * 集群ID
   */
  ClusterId: string
}

/**
 * 任务信息
 */
export interface ObjectTask {
  /**
      * 任务自增ID
注意：此字段可能返回 null，表示取不到有效值。
      */
  TaskId?: number

  /**
      * 任务类型
注意：此字段可能返回 null，表示取不到有效值。
      */
  TaskType?: string

  /**
      * 任务状态
注意：此字段可能返回 null，表示取不到有效值。
      */
  TaskStatus?: string

  /**
      * 任务ID（集群ID|实例组ID|实例ID）
注意：此字段可能返回 null，表示取不到有效值。
      */
  ObjectId?: string

  /**
      * 任务类型
注意：此字段可能返回 null，表示取不到有效值。
      */
  ObjectType?: string
}

/**
 * DescribeBackupConfig请求参数结构体
 */
export interface DescribeBackupConfigRequest {
  /**
   * 集群ID
   */
  ClusterId: string
}

/**
 * DescribeAccounts请求参数结构体
 */
export interface DescribeAccountsRequest {
  /**
   * 集群ID
   */
  ClusterId: string

  /**
   * 需要过滤的账户列表
   */
  AccountNames?: Array<string>

  /**
      * 数据库类型，取值范围: 
<li> MYSQL </li>
      */
  DbType?: string
}

/**
 * ModifyMaintainPeriodConfig请求参数结构体
 */
export interface ModifyMaintainPeriodConfigRequest {
  /**
   * 实例ID
   */
  InstanceId: string

  /**
   * 维护开始时间，单位为秒，如3:00为10800
   */
  MaintainStartTime: number

  /**
   * 维护持续时间，单位为秒，如1小时为3600
   */
  MaintainDuration: number

  /**
   * 每周维护日期
   */
  MaintainWeekDays: Array<string>
}

/**
 * DescribeRollbackTimeRange返回参数结构体
 */
export interface DescribeRollbackTimeRangeResponse {
  /**
   * 有效回归时间范围开始时间点
   */
  TimeRangeStart: string

  /**
   * 有效回归时间范围结束时间点
   */
  TimeRangeEnd: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * AssociateSecurityGroups请求参数结构体
 */
export interface AssociateSecurityGroupsRequest {
  /**
   * 实例组ID数组
   */
  InstanceIds: Array<string>

  /**
   * 要修改的安全组ID列表，一个或者多个安全组Id组成的数组。
   */
  SecurityGroupIds: Array<string>

  /**
   * 可用区
   */
  Zone: string
}

/**
 * CreateAccounts返回参数结构体
 */
export interface CreateAccountsResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyInstanceName请求参数结构体
 */
export interface ModifyInstanceNameRequest {
  /**
   * 实例ID
   */
  InstanceId: string

  /**
   * 实例名称
   */
  InstanceName: string
}

/**
 * DescribeDBSecurityGroups返回参数结构体
 */
export interface DescribeDBSecurityGroupsResponse {
  /**
   * 安全组信息
   */
  Groups: Array<SecurityGroup>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeMaintainPeriod请求参数结构体
 */
export interface DescribeMaintainPeriodRequest {
  /**
   * 实例ID
   */
  InstanceId: string
}

/**
 * 账号参数
 */
export interface AccountParam {
  /**
   * 参数名称，当前仅支持参数：max_user_connections
   */
  ParamName: string

  /**
   * 参数值
   */
  ParamValue: string
}

/**
 * DescribeInstances返回参数结构体
 */
export interface DescribeInstancesResponse {
  /**
   * 实例个数
   */
  TotalCount: number

  /**
   * 实例列表
   */
  InstanceSet: Array<CynosdbInstance>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 集群实例信息
 */
export interface ClusterInstanceDetail {
  /**
   * 实例ID
   */
  InstanceId: string

  /**
   * 实例名称
   */
  InstanceName: string

  /**
   * 引擎类型
   */
  InstanceType: string

  /**
   * 实例状态
   */
  InstanceStatus: string

  /**
   * 实例状态描述
   */
  InstanceStatusDesc: string

  /**
   * cpu核数
   */
  InstanceCpu: number

  /**
   * 内存
   */
  InstanceMemory: number

  /**
   * 硬盘
   */
  InstanceStorage: number
}

/**
 * 数据库账号信息
 */
export interface Account {
  /**
   * 数据库账号名
   */
  AccountName: string

  /**
   * 数据库账号描述
   */
  Description: string

  /**
   * 创建时间
   */
  CreateTime: string

  /**
   * 更新时间
   */
  UpdateTime: string

  /**
   * 主机
   */
  Host: string
}

/**
 * ModifyBackupConfig返回参数结构体
 */
export interface ModifyBackupConfigResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * IsolateInstance返回参数结构体
 */
export interface IsolateInstanceResponse {
  /**
   * 任务流id
   */
  FlowId: number

  /**
      * 隔离实例的订单id（预付费实例）
注意：此字段可能返回 null，表示取不到有效值。
      */
  DealNames: Array<string>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyInstanceName返回参数结构体
 */
export interface ModifyInstanceNameResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * PauseServerless请求参数结构体
 */
export interface PauseServerlessRequest {
  /**
   * 集群id
   */
  ClusterId: string

  /**
   * 是否强制暂停，忽略当前的用户链接  0:不强制  1:强制， 默认为1
   */
  ForcePause?: number
}

/**
 * RevokeAccountPrivileges返回参数结构体
 */
export interface RevokeAccountPrivilegesResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateClusters返回参数结构体
 */
export interface CreateClustersResponse {
  /**
      * 冻结流水ID
注意：此字段可能返回 null，表示取不到有效值。
      */
  TranId: string

  /**
      * 订单号
注意：此字段可能返回 null，表示取不到有效值。
      */
  DealNames: Array<string>

  /**
      * 资源ID列表（该字段已不再维护，请使用dealNames字段查询接口DescribeResourcesByDealName获取资源ID）
注意：此字段可能返回 null，表示取不到有效值。
      */
  ResourceIds: Array<string>

  /**
      * 集群ID列表（该字段已不再维护，请使用dealNames字段查询接口DescribeResourcesByDealName获取集群ID）
注意：此字段可能返回 null，表示取不到有效值。
      */
  ClusterIds: Array<string>

  /**
      * 大订单号
注意：此字段可能返回 null，表示取不到有效值。
      */
  BigDealIds: Array<string>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * SetRenewFlag请求参数结构体
 */
export interface SetRenewFlagRequest {
  /**
   * 需操作的实例ID
   */
  ResourceIds: Array<string>

  /**
   * 自动续费标志位
   */
  AutoRenewFlag: number
}

/**
 * 实例组信息
 */
export interface CynosdbInstanceGrp {
  /**
   * appId
   */
  AppId: number

  /**
   * 集群ID
   */
  ClusterId: string

  /**
   * 创建时间
   */
  CreatedTime: string

  /**
   * 删除时间
   */
  DeletedTime: string

  /**
   * 实例组ID
   */
  InstanceGrpId: string

  /**
   * 状态
   */
  Status: string

  /**
   * 实例组类型。ha-ha组；ro-只读组
   */
  Type: string

  /**
   * 更新时间
   */
  UpdatedTime: string

  /**
   * 内网IP
   */
  Vip: string

  /**
   * 内网端口
   */
  Vport: number

  /**
   * 外网域名
   */
  WanDomain: string

  /**
   * 外网ip
   */
  WanIP: string

  /**
   * 外网端口
   */
  WanPort: number

  /**
   * 外网状态
   */
  WanStatus: string

  /**
   * 实例组包含实例信息
   */
  InstanceSet: Array<CynosdbInstance>
}

/**
 * 集群绑定的标签信息，包含标签键TagKey和标签值TagValue
 */
export interface Tag {
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
 * ActivateInstance请求参数结构体
 */
export interface ActivateInstanceRequest {
  /**
   * 集群ID
   */
  ClusterId: string

  /**
   * 实例ID数组
   */
  InstanceIdList: Array<string>
}

/**
 * 回档表信息
 */
export interface RollbackTableInfo {
  /**
   * 旧表名称
   */
  OldTable: string

  /**
   * 新表名称
   */
  NewTable: string
}

/**
 * DescribeAccountAllGrantPrivileges返回参数结构体
 */
export interface DescribeAccountAllGrantPrivilegesResponse {
  /**
      * 权限语句
注意：此字段可能返回 null，表示取不到有效值。
      */
  PrivilegeStatements: Array<string>

  /**
      * 全局权限
注意：此字段可能返回 null，表示取不到有效值。
      */
  GlobalPrivileges: Array<string>

  /**
      * 数据库权限
注意：此字段可能返回 null，表示取不到有效值。
      */
  DatabasePrivileges: Array<DatabasePrivileges>

  /**
      * 数据库表权限
注意：此字段可能返回 null，表示取不到有效值。
      */
  TablePrivileges: Array<TablePrivileges>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 回滚数据库信息
 */
export interface RollbackDatabase {
  /**
   * 旧数据库
   */
  OldDatabase: string

  /**
   * 新数据库
   */
  NewDatabase: string
}

/**
 * 数据库权限列表
 */
export interface DatabasePrivileges {
  /**
   * 数据库
   */
  Db: string

  /**
   * 权限列表
   */
  Privileges: Array<string>
}

/**
 * DescribeClusters请求参数结构体
 */
export interface DescribeClustersRequest {
  /**
   * 引擎类型：目前支持“MYSQL”， “POSTGRESQL”
   */
  DbType?: string

  /**
   * 返回数量，默认为 20，最大值为 100
   */
  Limit?: number

  /**
   * 记录偏移量，默认值为0
   */
  Offset?: number

  /**
      * 排序字段，取值范围：
<li> CREATETIME：创建时间</li>
<li> PERIODENDTIME：过期时间</li>
      */
  OrderBy?: string

  /**
      * 排序类型，取值范围：
<li> ASC：升序排序 </li>
<li> DESC：降序排序 </li>
      */
  OrderByType?: string

  /**
   * 搜索条件，若存在多个Filter时，Filter间的关系为逻辑与（AND）关系。
   */
  Filters?: Array<QueryFilter>
}

/**
 * DescribeInstanceDetail返回参数结构体
 */
export interface DescribeInstanceDetailResponse {
  /**
   * 实例详情
   */
  Detail: CynosdbInstanceDetail

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyDBInstanceSecurityGroups返回参数结构体
 */
export interface ModifyDBInstanceSecurityGroupsResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyAccountParams请求参数结构体
 */
export interface ModifyAccountParamsRequest {
  /**
   * 集群id
   */
  ClusterId: string

  /**
   * 账号信息
   */
  Account: InputAccount

  /**
   * 数据库表权限数组,当前仅支持参数：max_user_connections
   */
  AccountParams: Array<AccountParam>
}

/**
 * DescribeClusterInstanceGrps请求参数结构体
 */
export interface DescribeClusterInstanceGrpsRequest {
  /**
   * 集群ID
   */
  ClusterId: string
}

/**
 * DescribeResourcesByDealName返回参数结构体
 */
export interface DescribeResourcesByDealNameResponse {
  /**
   * 计费资源id信息数组
   */
  BillingResourceInfos: Array<BillingResourceInfo>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ResumeServerless返回参数结构体
 */
export interface ResumeServerlessResponse {
  /**
   * 异步流程Id
   */
  FlowId: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateAccounts请求参数结构体
 */
export interface CreateAccountsRequest {
  /**
   * 集群id
   */
  ClusterId: string

  /**
   * 新账户列表
   */
  Accounts: Array<NewAccount>
}

/**
 * IsolateInstance请求参数结构体
 */
export interface IsolateInstanceRequest {
  /**
   * 集群ID
   */
  ClusterId: string

  /**
   * 实例ID数组
   */
  InstanceIdList: Array<string>

  /**
      * 数据库类型，取值范围: 
<li> MYSQL </li>
      */
  DbType?: string
}

/**
 * DescribeDBSecurityGroups请求参数结构体
 */
export interface DescribeDBSecurityGroupsRequest {
  /**
   * 实例组ID
   */
  InstanceId: string
}

/**
 * RollBackCluster请求参数结构体
 */
export interface RollBackClusterRequest {
  /**
   * 集群ID
   */
  ClusterId: string

  /**
   * 回档策略 timeRollback-按时间点回档 snapRollback-按备份文件回档
   */
  RollbackStrategy: string

  /**
   * 回档ID
   */
  RollbackId: number

  /**
   * 期望回档时间
   */
  ExpectTime?: string

  /**
   * 期望阈值
   */
  ExpectTimeThresh?: number

  /**
   * 回档数据库列表
   */
  RollbackDatabases?: Array<RollbackDatabase>

  /**
   * 回档数据库表
   */
  RollbackTables?: Array<RollbackTable>
}

/**
 * 回档数据库及表
 */
export interface RollbackTable {
  /**
   * 数据库名称
   */
  Database: string

  /**
   * 数据库表
   */
  Tables: Array<RollbackTableInfo>
}

/**
 * DescribeClusterDetail请求参数结构体
 */
export interface DescribeClusterDetailRequest {
  /**
   * 集群Id
   */
  ClusterId: string
}

/**
 * DescribeProjectSecurityGroups返回参数结构体
 */
export interface DescribeProjectSecurityGroupsResponse {
  /**
   * 安全组详情
   */
  Groups: Array<SecurityGroup>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * PauseServerless返回参数结构体
 */
export interface PauseServerlessResponse {
  /**
   * 异步流程Id
   */
  FlowId: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * OfflineCluster请求参数结构体
 */
export interface OfflineClusterRequest {
  /**
   * 集群ID
   */
  ClusterId: string
}

/**
 * 新创建的账号
 */
export interface NewAccount {
  /**
   * 账户名
   */
  AccountName: string

  /**
   * 密码
   */
  AccountPassword: string

  /**
   * 主机
   */
  Host: string

  /**
   * 描述
   */
  Description?: string
}

/**
 * 备份文件信息
 */
export interface BackupFileInfo {
  /**
   * 快照文件ID，用于回滚
   */
  SnapshotId: number

  /**
   * 快照文件名
   */
  FileName: string

  /**
   * 快照文件大小
   */
  FileSize: number

  /**
   * 快照备份开始时间
   */
  StartTime: string

  /**
   * 快照备份完成时间
   */
  FinishTime: string

  /**
   * 备份类型：snapshot，快照备份；timepoint，时间点备份
   */
  BackupType: string

  /**
   * 备份方式：auto，自动备份；manual，手动备份
   */
  BackupMethod: string

  /**
   * 备份文件状态：success：备份成功；fail：备份失败；creating：备份文件创建中；deleting：备份文件删除中
   */
  BackupStatus: string

  /**
   * 备份文件时间
   */
  SnapshotTime: string
}

/**
 * DescribeBackupList请求参数结构体
 */
export interface DescribeBackupListRequest {
  /**
   * 集群ID
   */
  ClusterId: string

  /**
   * 备份文件列表偏移
   */
  Limit: number

  /**
   * 备份文件列表起始
   */
  Offset: number

  /**
      * 数据库类型，取值范围: 
<li> MYSQL </li>
      */
  DbType?: string
}

/**
 * 实例信息
 */
export interface CynosdbInstance {
  /**
   * 用户Uin
   */
  Uin: string

  /**
   * 用户AppId
   */
  AppId: number

  /**
   * 集群ID
   */
  ClusterId: string

  /**
   * 集群名称
   */
  ClusterName: string

  /**
   * 实例ID
   */
  InstanceId: string

  /**
   * 实例名称
   */
  InstanceName: string

  /**
   * 项目ID
   */
  ProjectId: number

  /**
   * 地域
   */
  Region: string

  /**
   * 可用区
   */
  Zone: string

  /**
   * 实例状态
   */
  Status: string

  /**
   * 实例状态中文描述
   */
  StatusDesc: string

  /**
   * 数据库类型
   */
  DbType: string

  /**
   * 数据库版本
   */
  DbVersion: string

  /**
   * Cpu，单位：核
   */
  Cpu: number

  /**
   * 内存，单位：GB
   */
  Memory: number

  /**
   * 存储量，单位：GB
   */
  Storage: number

  /**
   * 实例类型
   */
  InstanceType: string

  /**
   * 实例当前角色
   */
  InstanceRole: string

  /**
   * 更新时间
   */
  UpdateTime: string

  /**
   * 创建时间
   */
  CreateTime: string

  /**
   * VPC网络ID
   */
  VpcId: string

  /**
   * 子网ID
   */
  SubnetId: string

  /**
   * 实例内网IP
   */
  Vip: string

  /**
   * 实例内网端口
   */
  Vport: number

  /**
   * 付费模式
   */
  PayMode: number

  /**
   * 实例过期时间
   */
  PeriodEndTime: string

  /**
   * 销毁期限
   */
  DestroyDeadlineText: string

  /**
   * 隔离时间
   */
  IsolateTime: string

  /**
   * 网络类型
   */
  NetType: number

  /**
   * 外网域名
   */
  WanDomain: string

  /**
   * 外网IP
   */
  WanIP: string

  /**
   * 外网端口
   */
  WanPort: number

  /**
   * 外网状态
   */
  WanStatus: string

  /**
   * 实例销毁时间
   */
  DestroyTime: string

  /**
   * Cynos内核版本
   */
  CynosVersion: string

  /**
   * 正在处理的任务
   */
  ProcessingTask: string

  /**
   * 续费标志
   */
  RenewFlag: number

  /**
   * serverless实例cpu下限
   */
  MinCpu: number

  /**
   * serverless实例cpu上限
   */
  MaxCpu: number

  /**
      * serverless实例状态, 可选值：
resume
pause
      */
  ServerlessStatus: string

  /**
      * 预付费存储Id
注意：此字段可能返回 null，表示取不到有效值。
      */
  StorageId: string

  /**
   * 存储付费类型
   */
  StoragePayMode: number
}

/**
 * 数据库表
 */
export interface DbTable {
  /**
   * 数据库名称
   */
  Db: string

  /**
   * 数据库表名称
   */
  TableName?: string
}

/**
 * GrantAccountPrivileges请求参数结构体
 */
export interface GrantAccountPrivilegesRequest {
  /**
   * 集群id
   */
  ClusterId: string

  /**
   * 账号信息
   */
  Account: InputAccount

  /**
   * 数据库表权限码数组
   */
  DbTablePrivileges: Array<string>

  /**
   * 数据库表信息
   */
  DbTables: Array<DbTable>
}

/**
 * IsolateCluster返回参数结构体
 */
export interface IsolateClusterResponse {
  /**
      * 任务流ID
注意：此字段可能返回 null，表示取不到有效值。
      */
  FlowId: number

  /**
      * 退款订单号
注意：此字段可能返回 null，表示取不到有效值。
      */
  DealNames: Array<string>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateClusters请求参数结构体
 */
export interface CreateClustersRequest {
  /**
   * 可用区
   */
  Zone: string

  /**
   * 所属VPC网络ID
   */
  VpcId: string

  /**
   * 所属子网ID
   */
  SubnetId: string

  /**
      * 数据库类型，取值范围: 
<li> MYSQL </li>
      */
  DbType: string

  /**
      * 数据库版本，取值范围: 
<li> MYSQL可选值：5.7 </li>
      */
  DbVersion: string

  /**
   * 所属项目ID
   */
  ProjectId?: number

  /**
      * 当DbMode为NORMAL或不填时必选
普通实例Cpu核数
      */
  Cpu?: number

  /**
      * 当DbMode为NORMAL或不填时必选
普通实例内存,单位G
      */
  Memory?: number

  /**
      * 该参数无实际意义，已废弃。
存储大小，单位G。
      */
  Storage?: number

  /**
   * 集群名称
   */
  ClusterName?: string

  /**
   * 账号密码(8-64个字符，包含大小写英文字母、数字和符号~!@#$%^&*_-+=`|\(){}[]:;'<>,.?/中的任意三种)
   */
  AdminPassword?: string

  /**
   * 端口，默认5432
   */
  Port?: number

  /**
   * 计费模式，按量计费：0，包年包月：1。默认按量计费。
   */
  PayMode?: number

  /**
   * 购买集群数，可选值范围[1,50]，默认为1
   */
  Count?: number

  /**
      * 回档类型：
noneRollback：不回档；
snapRollback，快照回档；
timeRollback，时间点回档
      */
  RollbackStrategy?: string

  /**
   * 快照回档，表示snapshotId；时间点回档，表示queryId，为0，表示需要判断时间点是否有效
   */
  RollbackId?: number

  /**
   * 回档时，传入源集群ID，用于查找源poolId
   */
  OriginalClusterId?: string

  /**
   * 时间点回档，指定时间；快照回档，快照时间
   */
  ExpectTime?: string

  /**
      * 该参数无实际意义，已废弃。
时间点回档，指定时间允许范围
      */
  ExpectTimeThresh?: number

  /**
      * 普通实例存储上限，单位GB
当DbType为MYSQL，且存储计费模式为预付费时，该参数需不大于cpu与memory对应存储规格上限
      */
  StorageLimit?: number

  /**
   * 实例数量
   */
  InstanceCount?: number

  /**
   * 包年包月购买时长
   */
  TimeSpan?: number

  /**
   * 包年包月购买时长单位
   */
  TimeUnit?: string

  /**
   * 包年包月购买是否自动续费
   */
  AutoRenewFlag?: number

  /**
   * 是否自动选择代金券 1是 0否 默认为0
   */
  AutoVoucher?: number

  /**
   * 实例数量（该参数已不再使用，只做存量兼容处理）
   */
  HaCount?: number

  /**
   * 订单来源
   */
  OrderSource?: string

  /**
   * 集群创建需要绑定的tag数组信息
   */
  ResourceTags?: Array<Tag>

  /**
      * Db类型
当DbType为MYSQL时可选(默认NORMAL)：
<li>NORMAL</li>
<li>SERVERLESS</li>
      */
  DbMode?: string

  /**
      * 当DbMode为SEVERLESS时必填
cpu最小值，可选范围参考DescribeServerlessInstanceSpecs接口返回
      */
  MinCpu?: number

  /**
      * 当DbMode为SEVERLESS时必填：
cpu最大值，可选范围参考DescribeServerlessInstanceSpecs接口返回
      */
  MaxCpu?: number

  /**
      * 当DbMode为SEVERLESS时，指定集群是否自动暂停，可选范围
<li>yes</li>
<li>no</li>
默认值:yes
      */
  AutoPause?: string

  /**
      * 当DbMode为SEVERLESS时，指定集群自动暂停的延迟，单位秒，可选范围[600,691200]
默认值:600
      */
  AutoPauseDelay?: number

  /**
      * 集群存储计费模式，按量计费：0，包年包月：1。默认按量计费
当DbType为MYSQL时，在集群计算计费模式为后付费（包括DbMode为SERVERLESS）时，存储计费模式仅可为按量计费
回档与克隆均不支持包年包月存储
      */
  StoragePayMode?: number

  /**
   * 安全组id数组
   */
  SecurityGroupIds?: Array<string>

  /**
   * 告警策略Id数组
   */
  AlarmPolicyIds?: Array<string>

  /**
   * 参数数组
   */
  ClusterParams?: Array<ParamItem>

  /**
   * 交易模式，0-下单且支付，1-下单
   */
  DealMode?: number

  /**
   * 参数模版ID
   */
  ParamTemplateId?: number
}

/**
 * DescribeClusters返回参数结构体
 */
export interface DescribeClustersResponse {
  /**
   * 集群数
   */
  TotalCount: number

  /**
   * 集群列表
   */
  ClusterSet: Array<CynosdbCluster>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 查询过滤器
 */
export interface QueryFilter {
  /**
   * 搜索字段，目前支持："InstanceId", "ProjectId", "InstanceName", "Vip"
   */
  Names: Array<string>

  /**
   * 搜索字符串
   */
  Values: Array<string>

  /**
   * 是否精确匹配
   */
  ExactMatch?: boolean

  /**
   * 搜索字段
   */
  Name?: string
}

/**
 * DescribeBackupConfig返回参数结构体
 */
export interface DescribeBackupConfigResponse {
  /**
   * 表示全备开始时间，[0-24*3600]， 如0:00, 1:00, 2:00 分别为 0，3600， 7200
   */
  BackupTimeBeg: number

  /**
   * 表示全备开始时间，[0-24*3600]， 如0:00, 1:00, 2:00 分别为 0，3600， 7200
   */
  BackupTimeEnd: number

  /**
   * 表示保留备份时长, 单位秒，超过该时间将被清理, 七天表示为3600*24*7=604800
   */
  ReserveDuration: number

  /**
      * 备份频率，长度为7的数组，分别对应周一到周日的备份方式，full-全量备份，increment-增量备份
注意：此字段可能返回 null，表示取不到有效值。
      */
  BackupFreq: Array<string>

  /**
      * 备份方式，logic-逻辑备份，snapshot-快照备份
注意：此字段可能返回 null，表示取不到有效值。
      */
  BackupType: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyDBInstanceSecurityGroups请求参数结构体
 */
export interface ModifyDBInstanceSecurityGroupsRequest {
  /**
   * 实例组ID
   */
  InstanceId: string

  /**
   * 要修改的安全组ID列表，一个或者多个安全组Id组成的数组。
   */
  SecurityGroupIds: Array<string>

  /**
   * 可用区
   */
  Zone: string
}

/**
 * AddInstances返回参数结构体
 */
export interface AddInstancesResponse {
  /**
      * 冻结流水，一次开通一个冻结流水。
注意：此字段可能返回 null，表示取不到有效值。
      */
  TranId: string

  /**
      * 后付费订单号。
注意：此字段可能返回 null，表示取不到有效值。
      */
  DealNames: Array<string>

  /**
      * 发货资源id列表。
注意：此字段可能返回 null，表示取不到有效值。
      */
  ResourceIds: Array<string>

  /**
      * 大订单号
注意：此字段可能返回 null，表示取不到有效值。
      */
  BigDealIds: Array<string>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 数据库地址
 */
export interface Addr {
  /**
   * IP
   */
  IP: string

  /**
   * 端口
   */
  Port: number
}

/**
 * DescribeProjectSecurityGroups请求参数结构体
 */
export interface DescribeProjectSecurityGroupsRequest {
  /**
   * 项目ID
   */
  ProjectId: number
}

/**
 * ModifyClusterParam返回参数结构体
 */
export interface ModifyClusterParamResponse {
  /**
   * 异步请求Id，用于查询结果
   */
  AsyncRequestId: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 安全组详情
 */
export interface SecurityGroup {
  /**
   * 项目ID
   */
  ProjectId: number

  /**
   * 创建时间，时间格式：yyyy-mm-dd hh:mm:ss
   */
  CreateTime: string

  /**
   * 入站规则
   */
  Inbound: Array<PolicyRule>

  /**
   * 出站规则
   */
  Outbound: Array<PolicyRule>

  /**
   * 安全组ID
   */
  SecurityGroupId: string

  /**
   * 安全组名称
   */
  SecurityGroupName: string

  /**
   * 安全组备注
   */
  SecurityGroupRemark: string
}

/**
 * 网络信息
 */
export interface NetAddr {
  /**
      * 内网ip
注意：此字段可能返回 null，表示取不到有效值。
      */
  Vip: string

  /**
      * 内网端口号
注意：此字段可能返回 null，表示取不到有效值。
      */
  Vport: number

  /**
      * 外网域名
注意：此字段可能返回 null，表示取不到有效值。
      */
  WanDomain: string

  /**
      * 外网端口号
注意：此字段可能返回 null，表示取不到有效值。
      */
  WanPort: number

  /**
      * 网络类型（ro-只读,rw/ha-读写）
注意：此字段可能返回 null，表示取不到有效值。
      */
  NetType: string
}

/**
 * AssociateSecurityGroups返回参数结构体
 */
export interface AssociateSecurityGroupsResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeResourcesByDealName请求参数结构体
 */
export interface DescribeResourcesByDealNameRequest {
  /**
   * 计费订单id（如果计费还没回调业务发货，可能出现错误码InvalidParameterValue.DealNameNotFound，这种情况需要业务重试DescribeResourcesByDealName接口直到成功）
   */
  DealName: string
}

/**
 * DescribeRollbackTimeValidity返回参数结构体
 */
export interface DescribeRollbackTimeValidityResponse {
  /**
   * 存储poolID
   */
  PoolId?: number

  /**
   * 回滚任务ID，后续按该时间点回滚时，需要传入
   */
  QueryId?: number

  /**
   * 时间点是否有效：pass，检测通过；fail，检测失败
   */
  Status?: string

  /**
   * 建议时间点，在Status为fail时，该值才有效
   */
  SuggestTime?: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * GrantAccountPrivileges返回参数结构体
 */
export interface GrantAccountPrivilegesResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ResumeServerless请求参数结构体
 */
export interface ResumeServerlessRequest {
  /**
   * 集群id
   */
  ClusterId: string
}

/**
 * 计费资源信息
 */
export interface BillingResourceInfo {
  /**
   * 集群ID
   */
  ClusterId: string

  /**
   * 实例ID列表
   */
  InstanceIds: Array<string>
}

/**
 * ModifyClusterName返回参数结构体
 */
export interface ModifyClusterNameResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeInstanceSpecs请求参数结构体
 */
export interface DescribeInstanceSpecsRequest {
  /**
      * 数据库类型，取值范围: 
<li> MYSQL </li>
      */
  DbType: string
}

/**
 * UpgradeInstance返回参数结构体
 */
export interface UpgradeInstanceResponse {
  /**
      * 冻结流水ID
注意：此字段可能返回 null，表示取不到有效值。
      */
  TranId: string

  /**
      * 大订单号
注意：此字段可能返回 null，表示取不到有效值。
      */
  BigDealIds: Array<string>

  /**
   * 订单号
   */
  DealNames: Array<string>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeClusterParamLogs返回参数结构体
 */
export interface DescribeClusterParamLogsResponse {
  /**
   * 记录总数
   */
  TotalCount: number

  /**
      * 参数修改记录
注意：此字段可能返回 null，表示取不到有效值。
      */
  ClusterParamLogs: Array<ClusterParamModifyLog>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 集群信息
 */
export interface CynosdbCluster {
  /**
      * 集群状态， 可选值如下:
creating: 创建中
running:运行中
isolating:隔离中
isolated:已隔离
activating:解隔离中
offlining:下线中
offlined:已下线
deleting:删除中
deleted:已删除
      */
  Status: string

  /**
   * 更新时间
   */
  UpdateTime: string

  /**
   * 可用区
   */
  Zone: string

  /**
   * 集群名称
   */
  ClusterName: string

  /**
   * 地域
   */
  Region: string

  /**
   * 数据库版本
   */
  DbVersion: string

  /**
   * 集群ID
   */
  ClusterId: string

  /**
   * 实例数
   */
  InstanceNum: number

  /**
   * 用户uin
   */
  Uin: string

  /**
   * 引擎类型
   */
  DbType: string

  /**
   * 用户appid
   */
  AppId: number

  /**
   * 集群状态描述
   */
  StatusDesc: string

  /**
   * 集群创建时间
   */
  CreateTime: string

  /**
   * 付费模式。0-按量计费，1-包年包月
   */
  PayMode: number

  /**
   * 截止时间
   */
  PeriodEndTime: string

  /**
   * 集群读写vip
   */
  Vip: string

  /**
   * 集群读写vport
   */
  Vport: number

  /**
   * 项目id
   */
  ProjectID: number

  /**
   * 私有网络ID
   */
  VpcId?: string

  /**
   * 子网ID
   */
  SubnetId?: string

  /**
   * cynos内核版本
   */
  CynosVersion?: string

  /**
   * 存储容量
   */
  StorageLimit?: number

  /**
   * 续费标志
   */
  RenewFlag?: number

  /**
   * 正在处理的任务
   */
  ProcessingTask?: string

  /**
   * 集群的任务数组
   */
  Tasks?: Array<ObjectTask>

  /**
   * 集群绑定的tag数组
   */
  ResourceTags?: Array<Tag>

  /**
   * Db类型(NORMAL, SERVERLESS)
   */
  DbMode?: string

  /**
      * 当Db类型为SERVERLESS时，serverless集群状态，可选值:
resume
pause
      */
  ServerlessStatus?: string

  /**
   * 集群预付费存储值大小
   */
  Storage?: number

  /**
   * 集群存储为预付费时的存储ID，用于预付费存储变配
   */
  StorageId?: string

  /**
   * 集群存储付费模式。0-按量计费，1-包年包月
   */
  StoragePayMode?: number

  /**
   * 集群计算规格对应的最小存储值
   */
  MinStorageSize?: number

  /**
   * 集群计算规格对应的最大存储值
   */
  MaxStorageSize?: number

  /**
   * 集群网络信息
   */
  NetAddrs?: Array<NetAddr>
}

/**
 * SetRenewFlag返回参数结构体
 */
export interface SetRenewFlagResponse {
  /**
   * 操作成功实例数
   */
  Count: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * OfflineCluster返回参数结构体
 */
export interface OfflineClusterResponse {
  /**
   * 任务流ID
   */
  FlowId: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * RevokeAccountPrivileges请求参数结构体
 */
export interface RevokeAccountPrivilegesRequest {
  /**
   * 集群id
   */
  ClusterId: string

  /**
   * 账号信息
   */
  Account: InputAccount

  /**
   * 数据库表权限数组
   */
  DbTablePrivileges: Array<string>

  /**
   * 数据库表信息
   */
  DbTables: Array<DbTable>
}

/**
 * 实例可售卖规格详细信息，创建实例时Cpu/Memory确定实例规格，存储可选大小为[MinStorageSize,MaxStorageSize]
 */
export interface InstanceSpec {
  /**
   * 实例CPU，单位：核
   */
  Cpu: number

  /**
   * 实例内存，单位：GB
   */
  Memory: number

  /**
   * 实例最大可用存储，单位：GB
   */
  MaxStorageSize: number

  /**
   * 实例最小可用存储，单位：GB
   */
  MinStorageSize: number
}

/**
 * DescribeClusterParamLogs请求参数结构体
 */
export interface DescribeClusterParamLogsRequest {
  /**
   * 集群ID
   */
  ClusterId: string

  /**
   * 返回数量，默认为 20，最大值为 100
   */
  Limit?: number

  /**
   * 记录偏移量，默认值为0
   */
  Offset?: number
}

/**
 * UpgradeInstance请求参数结构体
 */
export interface UpgradeInstanceRequest {
  /**
   * 实例ID
   */
  InstanceId: string

  /**
   * 数据库CPU
   */
  Cpu: number

  /**
   * 数据库内存
   */
  Memory: number

  /**
   * 升级类型：upgradeImmediate，upgradeInMaintain
   */
  UpgradeType: string

  /**
   * 存储上限，为0表示使用标准配置
   */
  StorageLimit?: number

  /**
   * 是否自动选择代金券 1是 0否 默认为0
   */
  AutoVoucher?: number

  /**
      * 数据库类型，取值范围: 
<li> MYSQL </li>
      */
  DbType?: string

  /**
   * 交易模式 0-下单并支付 1-下单
   */
  DealMode?: number
}

/**
 * DescribeMaintainPeriod返回参数结构体
 */
export interface DescribeMaintainPeriodResponse {
  /**
   * 维护week days
   */
  MaintainWeekDays: Array<string>

  /**
   * 维护开始时间，单位秒
   */
  MaintainStartTime: number

  /**
   * 维护时长，单位秒
   */
  MaintainDuration: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeBackupList返回参数结构体
 */
export interface DescribeBackupListResponse {
  /**
   * 总共备份文件个数
   */
  TotalCount: number

  /**
   * 备份文件列表
   */
  BackupList: Array<BackupFileInfo>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * RollBackCluster返回参数结构体
 */
export interface RollBackClusterResponse {
  /**
   * 任务流ID
   */
  FlowId: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeClusterDetail返回参数结构体
 */
export interface DescribeClusterDetailResponse {
  /**
   * 集群详细信息
   */
  Detail: CynosdbClusterDetail

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ActivateInstance返回参数结构体
 */
export interface ActivateInstanceResponse {
  /**
   * 任务流id
   */
  FlowId: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeRollbackTimeValidity请求参数结构体
 */
export interface DescribeRollbackTimeValidityRequest {
  /**
   * 集群ID
   */
  ClusterId: string

  /**
   * 期望回滚的时间点
   */
  ExpectTime: string

  /**
   * 回滚时间点的允许误差范围
   */
  ExpectTimeThresh: number
}

/**
 * IsolateCluster请求参数结构体
 */
export interface IsolateClusterRequest {
  /**
   * 集群ID
   */
  ClusterId: string

  /**
      * 数据库类型，取值范围: 
<li> MYSQL </li>
      */
  DbType?: string
}

/**
 * DescribeClusterInstanceGrps返回参数结构体
 */
export interface DescribeClusterInstanceGrpsResponse {
  /**
   * 实例组个数
   */
  TotalCount: number

  /**
   * 实例组列表
   */
  InstanceGrpInfoList: Array<CynosdbInstanceGrp>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * AddInstances请求参数结构体
 */
export interface AddInstancesRequest {
  /**
   * 集群ID
   */
  ClusterId: string

  /**
   * Cpu核数
   */
  Cpu: number

  /**
   * 内存
   */
  Memory: number

  /**
   * 新增只读实例数
   */
  ReadOnlyCount: number

  /**
   * 实例组ID，在已有RO组中新增实例时使用，不传则新增RO组
   */
  InstanceGrpId?: string

  /**
   * 所属VPC网络ID
   */
  VpcId?: string

  /**
   * 所属子网ID
   */
  SubnetId?: string

  /**
   * 新增RO组时使用的Port
   */
  Port?: number

  /**
   * 实例名称
   */
  InstanceName?: string

  /**
   * 是否自动选择代金券 1是 0否 默认为0
   */
  AutoVoucher?: number

  /**
      * 数据库类型，取值范围: 
<li> MYSQL </li>
      */
  DbType?: string

  /**
   * 订单来源
   */
  OrderSource?: string

  /**
   * 交易模式 0-下单并支付 1-下单
   */
  DealMode?: number
}

/**
 * DescribeInstances请求参数结构体
 */
export interface DescribeInstancesRequest {
  /**
   * 返回数量，默认为 20，最大值为 100
   */
  Limit?: number

  /**
   * 记录偏移量，默认值为0
   */
  Offset?: number

  /**
      * 排序字段，取值范围：
<li> CREATETIME：创建时间</li>
<li> PERIODENDTIME：过期时间</li>
      */
  OrderBy?: string

  /**
      * 排序类型，取值范围：
<li> ASC：升序排序 </li>
<li> DESC：降序排序 </li>
      */
  OrderByType?: string

  /**
   * 搜索条件，若存在多个Filter时，Filter间的关系为逻辑与（AND）关系。
   */
  Filters?: Array<QueryFilter>

  /**
   * 引擎类型：目前支持“MYSQL”， “POSTGRESQL”
   */
  DbType?: string

  /**
      * 实例状态, 可选值:
creating 创建中
running 运行中
isolating 隔离中
isolated 已隔离
activating 恢复中
offlining 下线中
offlined 已下线
      */
  Status?: string

  /**
   * 实例id列表
   */
  InstanceIds?: Array<string>
}

/**
 * 参数修改记录
 */
export interface ClusterParamModifyLog {
  /**
   * 参数名称
   */
  ParamName: string

  /**
   * 当前值
   */
  CurrentValue: string

  /**
   * 修改后的值
   */
  UpdateValue: string

  /**
   * 修改状态
   */
  Status: string

  /**
   * 创建时间
   */
  CreateTime: string

  /**
   * 更新时间
   */
  UpdateTime: string
}

/**
 * 实例详情
 */
export interface CynosdbInstanceDetail {
  /**
   * 用户Uin
   */
  Uin: string

  /**
   * 用户AppId
   */
  AppId: number

  /**
   * 集群ID
   */
  ClusterId: string

  /**
   * 集群名称
   */
  ClusterName: string

  /**
   * 实例ID
   */
  InstanceId: string

  /**
   * 实例名称
   */
  InstanceName: string

  /**
   * 项目ID
   */
  ProjectId: number

  /**
   * 地域
   */
  Region: string

  /**
   * 可用区
   */
  Zone: string

  /**
   * 实例状态
   */
  Status: string

  /**
   * 实例状态中文描述
   */
  StatusDesc: string

  /**
   * 数据库类型
   */
  DbType: string

  /**
   * 数据库版本
   */
  DbVersion: string

  /**
   * Cpu，单位：核
   */
  Cpu: number

  /**
   * 内存，单位：GB
   */
  Memory: number

  /**
   * 存储量，单位：GB
   */
  Storage: number

  /**
   * 实例类型
   */
  InstanceType: string

  /**
   * 实例当前角色
   */
  InstanceRole: string

  /**
   * 更新时间
   */
  UpdateTime: string

  /**
   * 创建时间
   */
  CreateTime: string

  /**
   * 付费模式
   */
  PayMode: number

  /**
   * 实例过期时间
   */
  PeriodEndTime: string

  /**
   * 网络类型
   */
  NetType: number

  /**
   * VPC网络ID
   */
  VpcId: string

  /**
   * 子网ID
   */
  SubnetId: string

  /**
   * 实例内网IP
   */
  Vip: string

  /**
   * 实例内网端口
   */
  Vport: number

  /**
   * 实例外网域名
   */
  WanDomain: string

  /**
   * 字符集
   */
  Charset: string

  /**
   * Cynos内核版本
   */
  CynosVersion: string

  /**
   * 续费标志
   */
  RenewFlag: number

  /**
   * serverless实例cpu下限
   */
  MinCpu: number

  /**
   * serverless实例cpu上限
   */
  MaxCpu: number

  /**
      * serverless实例状态, 可能值：
resume
pause
      */
  ServerlessStatus: string
}

/**
 * 集群详情详细信息
 */
export interface CynosdbClusterDetail {
  /**
   * 集群ID
   */
  ClusterId: string

  /**
   * 集群名称
   */
  ClusterName: string

  /**
   * 地域
   */
  Region: string

  /**
   * 状态
   */
  Status: string

  /**
   * 状态描述
   */
  StatusDesc: string

  /**
   * VPC名称
   */
  VpcName: string

  /**
   * vpc唯一id
   */
  VpcId: string

  /**
   * 子网名称
   */
  SubnetName: string

  /**
   * 子网ID
   */
  SubnetId: string

  /**
   * 字符集
   */
  Charset: string

  /**
   * 创建时间
   */
  CreateTime: string

  /**
   * 数据库类型
   */
  DbType: string

  /**
   * 数据库版本
   */
  DbVersion: string

  /**
   * 使用容量
   */
  UsedStorage: number

  /**
   * 读写分离Vport
   */
  RoAddr: Array<Addr>

  /**
   * 实例信息
   */
  InstanceSet: Array<ClusterInstanceDetail>

  /**
   * 付费模式
   */
  PayMode: number

  /**
   * 到期时间
   */
  PeriodEndTime: string

  /**
   * vip地址
   */
  Vip: string

  /**
   * vport端口
   */
  Vport: number

  /**
   * 项目id
   */
  ProjectID: number

  /**
   * 可用区
   */
  Zone: string

  /**
   * 实例绑定的tag数组信息
   */
  ResourceTags: Array<Tag>

  /**
      * 当Db类型为SERVERLESS时，serverless集群状态，可选值:
resume
resuming
pause
pausing
      */
  ServerlessStatus: string
}

/**
 * DescribeInstanceDetail请求参数结构体
 */
export interface DescribeInstanceDetailRequest {
  /**
   * 实例ID
   */
  InstanceId: string
}

/**
 * ModifyMaintainPeriodConfig返回参数结构体
 */
export interface ModifyMaintainPeriodConfigResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DisassociateSecurityGroups请求参数结构体
 */
export interface DisassociateSecurityGroupsRequest {
  /**
   * 实例组ID数组
   */
  InstanceIds: Array<string>

  /**
   * 要修改的安全组ID列表，一个或者多个安全组Id组成的数组。
   */
  SecurityGroupIds: Array<string>

  /**
   * 可用区
   */
  Zone: string
}

/**
 * mysql表权限
 */
export interface TablePrivileges {
  /**
   * 数据库名
   */
  Db: string

  /**
   * 表名
   */
  TableName: string

  /**
   * 权限列表
   */
  Privileges: Array<string>
}

/**
 * ModifyClusterParam请求参数结构体
 */
export interface ModifyClusterParamRequest {
  /**
   * 集群ID
   */
  ClusterId: string

  /**
   * 修改参数列表
   */
  ParamList: Array<ParamItem>

  /**
   * 维护期间执行-yes,立即执行-no
   */
  IsInMaintainPeriod?: string
}

/**
 * DescribeAccounts返回参数结构体
 */
export interface DescribeAccountsResponse {
  /**
   * 数据库账号列表
   */
  AccountSet: Array<Account>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyAccountParams返回参数结构体
 */
export interface ModifyAccountParamsResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * OfflineInstance请求参数结构体
 */
export interface OfflineInstanceRequest {
  /**
   * 集群ID
   */
  ClusterId: string

  /**
   * 实例ID数组
   */
  InstanceIdList: Array<string>
}

/**
 * DescribeInstanceSpecs返回参数结构体
 */
export interface DescribeInstanceSpecsResponse {
  /**
   * 规格信息
   */
  InstanceSpecSet: Array<InstanceSpec>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeAccountAllGrantPrivileges请求参数结构体
 */
export interface DescribeAccountAllGrantPrivilegesRequest {
  /**
   * 集群id
   */
  ClusterId: string

  /**
   * 账号信息
   */
  Account: InputAccount
}

/**
 * OfflineInstance返回参数结构体
 */
export interface OfflineInstanceResponse {
  /**
   * 任务流ID
   */
  FlowId: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 修改参数时，传入参数描述
 */
export interface ParamItem {
  /**
   * 参数名称
   */
  ParamName: string

  /**
   * 当前值
   */
  CurrentValue: string

  /**
   * 原有值
   */
  OldValue: string
}

/**
 * 安全组规则
 */
export interface PolicyRule {
  /**
   * 策略，ACCEPT或者DROP
   */
  Action: string

  /**
   * 来源Ip或Ip段，例如192.168.0.0/16
   */
  CidrIp: string

  /**
   * 端口
   */
  PortRange: string

  /**
   * 网络协议，支持udp、tcp等
   */
  IpProtocol: string

  /**
   * 协议端口ID或者协议端口组ID。
   */
  ServiceModule: string

  /**
   * IP地址ID或者ID地址组ID。
   */
  AddressModule: string

  /**
   * id
   */
  Id: string

  /**
   * 描述
   */
  Desc: string
}

/**
 * ModifyBackupConfig请求参数结构体
 */
export interface ModifyBackupConfigRequest {
  /**
   * 集群ID
   */
  ClusterId: string

  /**
   * 表示全备开始时间，[0-24*3600]， 如0:00, 1:00, 2:00 分别为 0，3600， 7200
   */
  BackupTimeBeg: number

  /**
   * 表示全备结束时间，[0-24*3600]， 如0:00, 1:00, 2:00 分别为 0，3600， 7200
   */
  BackupTimeEnd: number

  /**
   * 表示保留备份时长, 单位秒，超过该时间将被清理, 七天表示为3600*24*7=604800
   */
  ReserveDuration: number

  /**
   * 备份频率，长度为7的数组，分别对应周一到周日的备份方式，full-全量备份，increment-增量备份
   */
  BackupFreq?: Array<string>

  /**
   * 备份方式，logic-逻辑备份，snapshot-快照备份
   */
  BackupType?: string
}

/**
 * 账号，包含accountName和host
 */
export interface InputAccount {
  /**
   * 账号
   */
  AccountName: string

  /**
   * 主机，默认‘%’
   */
  Host?: string
}

/**
 * DisassociateSecurityGroups返回参数结构体
 */
export interface DisassociateSecurityGroupsResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}
