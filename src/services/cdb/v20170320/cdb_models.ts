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
 * 售卖实例类型
 */
export interface SellType {
  /**
   * 售卖实例名称
   */
  TypeName: string

  /**
   * 内核版本号
   */
  EngineVersion: Array<string>

  /**
   * 售卖规格详细配置
   */
  Configs: Array<SellConfig>
}

/**
 * 实例任务详情
 */
export interface TaskDetail {
  /**
   * 错误码。
   */
  Code: number

  /**
   * 错误信息。
   */
  Message: string

  /**
   * 实例任务 ID。
   */
  JobId: number

  /**
   * 实例任务进度。
   */
  Progress: number

  /**
      * 实例任务状态，可能的值包括：
"UNDEFINED" - 未定义；
"INITIAL" - 初始化；
"RUNNING" - 运行中；
"SUCCEED" - 执行成功；
"FAILED" - 执行失败；
"KILLED" - 已终止；
"REMOVED" - 已删除；
"PAUSED" - 已暂停。
"WAITING" - 等待中（可撤销）
      */
  TaskStatus: string

  /**
      * 实例任务类型，可能的值包括：
"ROLLBACK" - 数据库回档；
"SQL OPERATION" - SQL操作；
"IMPORT DATA" - 数据导入；
"MODIFY PARAM" - 参数设置；
"INITIAL" - 初始化云数据库实例；
"REBOOT" - 重启云数据库实例；
"OPEN GTID" - 开启云数据库实例GTID；
"UPGRADE RO" - 只读实例升级；
"BATCH ROLLBACK" - 数据库批量回档；
"UPGRADE MASTER" - 主实例升级；
"DROP TABLES" - 删除云数据库库表；
"SWITCH DR TO MASTER" - 灾备实例提升为主。
      */
  TaskType: string

  /**
   * 实例任务开始时间。
   */
  StartTime: string

  /**
   * 实例任务结束时间。
   */
  EndTime: string

  /**
      * 任务关联的实例 ID。
注意：此字段可能返回 null，表示取不到有效值。
      */
  InstanceIds: Array<string>

  /**
   * 异步任务的请求 ID。
   */
  AsyncRequestId: string
}

/**
 * CreateDBImportJob请求参数结构体
 */
export interface CreateDBImportJobRequest {
  /**
   * 实例的 ID，格式如：cdb-c1nl9rpv，与云数据库控制台页面中显示的实例 ID 相同。
   */
  InstanceId: string

  /**
   * 云数据库的用户名。
   */
  User: string

  /**
   * 文件名称。该文件是指用户已上传到腾讯云的文件，仅支持.sql文件。
   */
  FileName?: string

  /**
   * 云数据库实例 User 账号的密码。
   */
  Password?: string

  /**
   * 导入的目标数据库名，不传表示不指定数据库。
   */
  DbName?: string

  /**
   * 腾讯云COS文件链接。 用户需要指定 FileName 或者 CosUrl 其中一个。 COS文件需要是 .sql 文件。
   */
  CosUrl?: string
}

/**
 * DescribeDatabases请求参数结构体
 */
export interface DescribeDatabasesRequest {
  /**
   * 实例 ID，格式如：cdb-c1nl9rpv，与云数据库控制台页面中显示的实例 ID 相同。
   */
  InstanceId: string

  /**
   * 偏移量，最小值为0。
   */
  Offset?: number

  /**
   * 单次请求数量，默认值为20，最小值为1，最大值为100。
   */
  Limit?: number

  /**
   * 匹配数据库库名的正则表达式。
   */
  DatabaseRegexp?: string
}

/**
 * proxy读写分离信息
 */
export interface RWInfo {
  /**
      * 代理实例数量
注意：此字段可能返回 null，表示取不到有效值。
      */
  InstCount: number

  /**
      * 权重分配模式；
系统自动分配："system"， 自定义："custom"
注意：此字段可能返回 null，表示取不到有效值。
      */
  WeightMode: string

  /**
      * 是否开启延迟剔除
注意：此字段可能返回 null，表示取不到有效值。
      */
  IsKickOut: boolean

  /**
      * 最小保留数
注意：此字段可能返回 null，表示取不到有效值。
      */
  MinCount: number

  /**
      * 延迟剔除阈值
注意：此字段可能返回 null，表示取不到有效值。
      */
  MaxDelay: number

  /**
      * 是否开启故障转移
注意：此字段可能返回 null，表示取不到有效值。
      */
  FailOver: boolean

  /**
      * 是否自动添加RO
注意：此字段可能返回 null，表示取不到有效值。
      */
  AutoAddRo: boolean

  /**
      * 代理实例信息
注意：此字段可能返回 null，表示取不到有效值。
      */
  RWInstInfo: RWInstanceInfo
}

/**
 * 实例可回档时间范围
 */
export interface InstanceRollbackRangeTime {
  /**
   * 查询数据库错误码
   */
  Code: number

  /**
   * 查询数据库错误信息
   */
  Message: string

  /**
   * 实例ID列表，单个实例Id的格式如：cdb-c1nl9rpv。与云数据库控制台页面中显示的实例ID相同
   */
  InstanceId: string

  /**
   * 可回档时间范围
   */
  Times: Array<RollbackTimeRange>
}

/**
 * DescribeTables返回参数结构体
 */
export interface DescribeTablesResponse {
  /**
   * 符合查询条件的数据库表总数。
   */
  TotalCount: number

  /**
   * 返回的数据库表信息。
   */
  Items: Array<string>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ApplyCDBProxy返回参数结构体
 */
export interface ApplyCDBProxyResponse {
  /**
      * 异步处理ID
注意：此字段可能返回 null，表示取不到有效值。
      */
  AsyncRequestId: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyBackupDownloadRestriction返回参数结构体
 */
export interface ModifyBackupDownloadRestrictionResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyTimeWindow返回参数结构体
 */
export interface ModifyTimeWindowResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 参数修改记录
 */
export interface ParamRecord {
  /**
   * 实例ID
   */
  InstanceId: string

  /**
   * 参数名称
   */
  ParamName: string

  /**
   * 参数修改前的值
   */
  OldValue: string

  /**
   * 参数修改后的值
   */
  NewValue: string

  /**
   * 参数是否修改成功
   */
  IsSucess: boolean

  /**
   * 修改时间
   */
  ModifyTime: string
}

/**
 * ModifyTimeWindow请求参数结构体
 */
export interface ModifyTimeWindowRequest {
  /**
   * 实例 ID，格式如：cdb-c1nl9rpv 或者 cdbro-c1nl9rpv，与云数据库控制台页面中显示的实例 ID 相同。
   */
  InstanceId: string

  /**
   * 修改后的可维护时间段，其中每一个时间段的格式形如：10:00-12:00；起止时间按半个小时对齐；最短半个小时，最长三个小时；最多设置两个时间段；起止时间范围为：[00:00, 24:00]。
   */
  TimeRanges: Array<string>

  /**
   * 指定修改哪一天的客户时间段，可能的取值为：monday，tuesday，wednesday，thursday，friday，saturday，sunday。如果不指定该值或者为空，则默认一周七天都修改。
   */
  Weekdays?: Array<string>

  /**
   * 数据延迟阈值，仅对主实例和灾备实例有效，不传默认修改为10
   */
  MaxDelayTime?: number
}

/**
 * DescribeRollbackRangeTime请求参数结构体
 */
export interface DescribeRollbackRangeTimeRequest {
  /**
   * 实例 ID 列表，单个实例 ID 的格式如：cdb-c1nl9rpv。与云数据库控制台页面中显示的实例 ID 相同。
   */
  InstanceIds: Array<string>
}

/**
 * DescribeBackupOverview请求参数结构体
 */
export interface DescribeBackupOverviewRequest {
  /**
   * 需要查询的云数据库产品类型，目前仅支持 "mysql"。
   */
  Product: string
}

/**
 * ModifyDBInstanceProject返回参数结构体
 */
export interface ModifyDBInstanceProjectResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDataBackupOverview返回参数结构体
 */
export interface DescribeDataBackupOverviewResponse {
  /**
   * 当前地域的数据备份总容量（包含自动备份和手动备份，单位为字节）。
   */
  DataBackupVolume?: number

  /**
   * 当前地域的数据备份总个数。
   */
  DataBackupCount?: number

  /**
   * 当前地域的自动备份总容量。
   */
  AutoBackupVolume?: number

  /**
   * 当前地域的自动备份总个数。
   */
  AutoBackupCount?: number

  /**
   * 当前地域的手动备份总容量。
   */
  ManualBackupVolume?: number

  /**
   * 当前地域的手动备份总个数。
   */
  ManualBackupCount?: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteAuditPolicy请求参数结构体
 */
export interface DeleteAuditPolicyRequest {
  /**
   * 审计策略 ID。
   */
  PolicyId: string

  /**
   * 实例 ID。
   */
  InstanceId?: string
}

/**
 * 实例备份统计项
 */
export interface BackupSummaryItem {
  /**
   * 实例ID。
   */
  InstanceId: string

  /**
   * 该实例自动数据备份的个数。
   */
  AutoBackupCount: number

  /**
   * 该实例自动数据备份的容量。
   */
  AutoBackupVolume: number

  /**
   * 该实例手动数据备份的个数。
   */
  ManualBackupCount: number

  /**
   * 该实例手动数据备份的容量。
   */
  ManualBackupVolume: number

  /**
   * 该实例总的数据备份（包含自动备份和手动备份）个数。
   */
  DataBackupCount: number

  /**
   * 该实例总的数据备份容量。
   */
  DataBackupVolume: number

  /**
   * 该实例日志备份的个数。
   */
  BinlogBackupCount: number

  /**
   * 该实例日志备份的容量。
   */
  BinlogBackupVolume: number

  /**
   * 该实例的总备份（包含数据备份和日志备份）占用容量。
   */
  BackupVolume: number
}

/**
 * ModifyInstanceParam请求参数结构体
 */
export interface ModifyInstanceParamRequest {
  /**
   * 实例短 ID 列表。
   */
  InstanceIds: Array<string>

  /**
   * 要修改的参数列表。每一个元素是 Name 和 CurrentValue 的组合。Name 是参数名，CurrentValue 是要修改成的值。
   */
  ParamList?: Array<Parameter>

  /**
   * 模板id，ParamList和TemplateId必须至少传其中之一
   */
  TemplateId?: number

  /**
   * 执行参数调整任务的方式，默认为 0。支持值包括：0 - 立刻执行，1 - 时间窗执行；当该值为 1 时，每次只能传一个实例（InstanceIds数量为1）
   */
  WaitSwitch?: number
}

/**
 * CreateParamTemplate请求参数结构体
 */
export interface CreateParamTemplateRequest {
  /**
   * 参数模板名称。
   */
  Name: string

  /**
   * 参数模板描述。
   */
  Description?: string

  /**
   * MySQL 版本号。
   */
  EngineVersion?: string

  /**
   * 源参数模板 ID。
   */
  TemplateId?: number

  /**
   * 参数列表。
   */
  ParamList?: Array<Parameter>

  /**
   * 默认参数模板类型。支持值包括："HIGH_STABILITY" - 高稳定模板，"HIGH_PERFORMANCE" - 高性能模板。
   */
  TemplateType?: string
}

/**
 * 代理实例信息
 */
export type RWInstanceInfo = null

/**
 * DescribeParamTemplateInfo请求参数结构体
 */
export interface DescribeParamTemplateInfoRequest {
  /**
   * 参数模板 ID。
   */
  TemplateId: number
}

/**
 * DescribeDBInstances请求参数结构体
 */
export interface DescribeDBInstancesRequest {
  /**
   * 项目 ID，可使用 [查询项目列表](https://cloud.tencent.com/document/product/378/4400) 接口查询项目 ID。
   */
  ProjectId?: number

  /**
   * 实例类型，可取值：1 - 主实例，2 - 灾备实例，3 - 只读实例。
   */
  InstanceTypes?: Array<number>

  /**
   * 实例的内网 IP 地址。
   */
  Vips?: Array<string>

  /**
   * 实例状态，可取值：<br>0 - 创建中<br>1 - 运行中<br>4 - 正在进行隔离操作<br>5 - 隔离中（可在回收站恢复开机）
   */
  Status?: Array<number>

  /**
   * 偏移量，默认值为 0。
   */
  Offset?: number

  /**
   * 单次请求返回的数量，默认值为 20，最大值为 2000。
   */
  Limit?: number

  /**
   * 安全组 ID。当使用安全组 ID 为过滤条件时，需指定 WithSecurityGroup 参数为 1。
   */
  SecurityGroupId?: string

  /**
   * 付费类型，可取值：0 - 包年包月，1 - 小时计费。
   */
  PayTypes?: Array<number>

  /**
   * 实例名称。
   */
  InstanceNames?: Array<string>

  /**
   * 实例任务状态，可能取值：<br>0 - 没有任务<br>1 - 升级中<br>2 - 数据导入中<br>3 - 开放Slave中<br>4 - 外网访问开通中<br>5 - 批量操作执行中<br>6 - 回档中<br>7 - 外网访问关闭中<br>8 - 密码修改中<br>9 - 实例名修改中<br>10 - 重启中<br>12 - 自建迁移中<br>13 - 删除库表中<br>14 - 灾备实例创建同步中<br>15 - 升级待切换<br>16 - 升级切换中<br>17 - 升级切换完成<br>19 - 参数设置待执行
   */
  TaskStatus?: Array<number>

  /**
   * 实例数据库引擎版本，可能取值：5.1、5.5、5.6 和 5.7。
   */
  EngineVersions?: Array<string>

  /**
   * 私有网络的 ID。
   */
  VpcIds?: Array<number>

  /**
   * 可用区的 ID。
   */
  ZoneIds?: Array<number>

  /**
   * 子网 ID。
   */
  SubnetIds?: Array<number>

  /**
   * 是否锁定标记，可选值：0 - 不锁定，1 - 锁定，默认为0。
   */
  CdbErrors?: Array<number>

  /**
   * 返回结果集排序的字段，目前支持："InstanceId"，"InstanceName"，"CreateTime"，"DeadlineTime"。
   */
  OrderBy?: string

  /**
   * 返回结果集排序方式，目前支持："ASC" 或者 "DESC"。
   */
  OrderDirection?: string

  /**
   * 是否以安全组 ID 为过滤条件。
   */
  WithSecurityGroup?: number

  /**
   * 是否包含独享集群详细信息，可取值：0 - 不包含，1 - 包含。
   */
  WithExCluster?: number

  /**
   * 独享集群 ID。
   */
  ExClusterId?: string

  /**
   * 实例 ID。
   */
  InstanceIds?: Array<string>

  /**
   * 初始化标记，可取值：0 - 未初始化，1 - 初始化。
   */
  InitFlag?: number

  /**
   * 是否包含灾备关系对应的实例，可取值：0 - 不包含，1 - 包含。默认取值为1。如果拉取主实例，则灾备关系的数据在DrInfo字段中， 如果拉取灾备实例， 则灾备关系的数据在MasterInfo字段中。灾备关系中只包含部分基本的数据，详细的数据需要自行调接口拉取。
   */
  WithDr?: number

  /**
   * 是否包含只读实例，可取值：0 - 不包含，1 - 包含。默认取值为1。
   */
  WithRo?: number

  /**
   * 是否包含主实例，可取值：0 - 不包含，1 - 包含。默认取值为1。
   */
  WithMaster?: number

  /**
   * 置放群组ID列表。
   */
  DeployGroupIds?: Array<string>

  /**
   * 是否以标签键为过滤条件。
   */
  TagKeysForSearch?: Array<string>

  /**
   * 金融围拢 ID 。
   */
  CageIds?: Array<string>

  /**
   * 标签值
   */
  TagValues?: Array<string>

  /**
   * 私有网络字符型vpcId
   */
  UniqueVpcIds?: Array<string>

  /**
   * 私有网络字符型subnetId
   */
  UniqSubnetIds?: Array<string>
}

/**
 * 表名
 */
export interface TableName {
  /**
   * 表名
   */
  TableName: string
}

/**
 * DeleteAccounts返回参数结构体
 */
export interface DeleteAccountsResponse {
  /**
   * 异步任务的请求 ID，可使用此 ID 查询异步任务的执行结果。
   */
  AsyncRequestId?: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 慢查询日志详情
 */
export interface SlowLogInfo {
  /**
   * 备份文件名
   */
  Name: string

  /**
   * 备份文件大小，单位：Byte
   */
  Size: number

  /**
   * 备份快照时间，时间格式：2016-03-17 02:10:37
   */
  Date: string

  /**
   * 内网下载地址
   */
  IntranetUrl: string

  /**
   * 外网下载地址
   */
  InternetUrl: string

  /**
   * 日志具体类型，可能的值：slowlog - 慢日志
   */
  Type: string
}

/**
 * CloseWanService请求参数结构体
 */
export interface CloseWanServiceRequest {
  /**
   * 实例 ID，格式如：cdb-c1nl9rpv，与云数据库控制台页面中显示的实例 ID 相同，可使用 [查询实例列表](https://cloud.tencent.com/document/api/236/15872) 接口获取，其值为输出参数中字段 InstanceId 的值。
   */
  InstanceId: string
}

/**
 * DescribeAuditConfig请求参数结构体
 */
export interface DescribeAuditConfigRequest {
  /**
   * 实例 ID，格式如：cdb-c1nl9rpv 或者 cdbro-c1nl9rpv，与云数据库控制台页面中显示的实例 ID 相同。
   */
  InstanceId: string
}

/**
 * CreateRoInstanceIp返回参数结构体
 */
export interface CreateRoInstanceIpResponse {
  /**
   * 只读实例的私有网络的ID。
   */
  RoVpcId: number

  /**
   * 只读实例的子网ID。
   */
  RoSubnetId: number

  /**
   * 只读实例的内网IP地址。
   */
  RoVip: string

  /**
   * 只读实例的内网端口号。
   */
  RoVport: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateAuditPolicy返回参数结构体
 */
export interface CreateAuditPolicyResponse {
  /**
   * 审计策略 ID。
   */
  PolicyId: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeInstanceParamRecords请求参数结构体
 */
export interface DescribeInstanceParamRecordsRequest {
  /**
   * 实例 ID，格式如：cdb-c1nl9rpv，与云数据库控制台页面中显示的实例 ID 相同，可使用 [查询实例列表](https://cloud.tencent.com/document/api/236/15872) 接口获取，其值为输出参数中字段 InstanceId 的值。
   */
  InstanceId: string

  /**
   * 分页偏移量，默认值：0。
   */
  Offset?: number

  /**
   * 分页大小，默认值：20。
   */
  Limit?: number
}

/**
 * StopRollback返回参数结构体
 */
export interface StopRollbackResponse {
  /**
   * 执行请求的异步任务ID
   */
  AsyncRequestId?: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * StopReplication返回参数结构体
 */
export interface StopReplicationResponse {
  /**
      * 异步任务 ID。
注意：此字段可能返回 null，表示取不到有效值。
      */
  AsyncRequestId: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 数据库表名
 */
export interface DatabaseName {
  /**
   * 数据库表名
   */
  DatabaseName: string
}

/**
 * DescribeInstanceParams请求参数结构体
 */
export interface DescribeInstanceParamsRequest {
  /**
   * 实例 ID，格式如：cdb-c1nl9rpv，与云数据库控制台页面中显示的实例 ID 相同，可使用 [查询实例列表](https://cloud.tencent.com/document/api/236/15872) 接口获取，其值为输出参数中字段 InstanceId 的值。
   */
  InstanceId: string
}

/**
 * DescribeRoMinScale返回参数结构体
 */
export interface DescribeRoMinScaleResponse {
  /**
   * 内存规格大小, 单位为：MB。
   */
  Memory?: number

  /**
   * 磁盘规格大小, 单位为：GB。
   */
  Volume?: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * StopDBImportJob返回参数结构体
 */
export interface StopDBImportJobResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyDBInstanceName请求参数结构体
 */
export interface ModifyDBInstanceNameRequest {
  /**
   * 实例 ID，格式如：cdb-c1nl9rpv，与云数据库控制台页面中显示的实例 ID 相同，可使用 [查询实例列表](https://cloud.tencent.com/document/api/236/15872) 接口获取，其值为输出参数中字段 InstanceId 的值。
   */
  InstanceId: string

  /**
   * 修改后的实例名称。
   */
  InstanceName: string
}

/**
 * tag信息单元
 */
export interface TagInfoUnit {
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
 * ModifyAuditRule返回参数结构体
 */
export interface ModifyAuditRuleResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeAuditRules请求参数结构体
 */
export interface DescribeAuditRulesRequest {
  /**
   * 审计规则 ID。
   */
  RuleId?: string

  /**
   * 审计规则名称。支持按审计规则名称进行模糊匹配查询。
   */
  RuleName?: string

  /**
   * 分页大小参数。默认值为 20，最小值为 1，最大值为 100。
   */
  Limit?: number

  /**
   * 分页偏移量。默认值为0。
   */
  Offset?: number
}

/**
 * UpgradeDBInstanceEngineVersion返回参数结构体
 */
export interface UpgradeDBInstanceEngineVersionResponse {
  /**
   * 异步任务 ID，可使用 [查询异步任务的执行结果](https://cloud.tencent.com/document/api/236/20410) 获取其执行情况。
   */
  AsyncRequestId: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 结构化的错误日志详情
 */
export interface ErrlogItem {
  /**
      * 错误发生时间。
注意：此字段可能返回 null，表示取不到有效值。
      */
  Timestamp: number

  /**
      * 错误详情
注意：此字段可能返回 null，表示取不到有效值。
      */
  Content: string
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
 * ModifyCDBProxyDesc请求参数结构体
 */
export interface ModifyCDBProxyDescRequest {
  /**
   * 实例ID
   */
  InstanceId: string

  /**
   * 数据库代理ID
   */
  ProxyGroupId: string

  /**
   * 数据库代理描述
   */
  Desc: string
}

/**
 * ECDB第二个从库的配置信息，只有ECDB实例才有这个字段
 */
export interface BackupConfig {
  /**
   * 第二个从库复制方式，可能的返回值：async-异步，semisync-半同步
   */
  ReplicationMode: string

  /**
   * 第二个从库可用区的正式名称，如ap-shanghai-1
   */
  Zone: string

  /**
   * 第二个从库内网IP地址
   */
  Vip: string

  /**
   * 第二个从库访问端口
   */
  Vport: number
}

/**
 * DescribeCDBProxy返回参数结构体
 */
export interface DescribeCDBProxyResponse {
  /**
      * 代理组基本信息
注意：此字段可能返回 null，表示取不到有效值。
      */
  BaseGroup: BaseGroupInfo

  /**
      * 代理组地址信息
注意：此字段可能返回 null，表示取不到有效值。
      */
  Address: Address

  /**
      * 代理组节点信息
注意：此字段可能返回 null，表示取不到有效值。
      */
  ProxyNode: ProxyNodeInfo

  /**
      * 读写分析信息
注意：此字段可能返回 null，表示取不到有效值。
      */
  RWInstInfo: RWInfo

  /**
      * 连接池信息
注意：此字段可能返回 null，表示取不到有效值。
      */
  ConnectionPoolInfo: ConnectionPoolInfo

  /**
      * 代理数量
注意：此字段可能返回 null，表示取不到有效值。
      */
  Count: number

  /**
      * 代理信息
注意：此字段可能返回 null，表示取不到有效值。
      */
  ProxyGroup: Array<ProxyGroup>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * UpgradeCDBProxy返回参数结构体
 */
export interface UpgradeCDBProxyResponse {
  /**
      * 异步处理ID
注意：此字段可能返回 null，表示取不到有效值。
      */
  AsyncRequestId: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 权重分配规则
 */
export interface Rule {
  /**
      * 划分上限
注意：此字段可能返回 null，表示取不到有效值。
      */
  LessThan: number

  /**
      * 权重
注意：此字段可能返回 null，表示取不到有效值。
      */
  Weight: number
}

/**
 * 审计策略
 */
export interface AuditPolicy {
  /**
   * 审计策略 ID。
   */
  PolicyId: string

  /**
      * 审计策略的状态。可能返回的值为：
"creating" - 创建中;
"running" - 运行中;
"paused" - 暂停中;
"failed" - 创建失败。
      */
  Status: string

  /**
   * 数据库实例 ID。
   */
  InstanceId: string

  /**
   * 审计策略创建时间。格式为 : "2019-03-20 17:09:13"。
   */
  CreateTime: string

  /**
   * 审计策略最后修改时间。格式为 : "2019-03-20 17:09:13"。
   */
  ModifyTime: string

  /**
   * 审计策略名称。
   */
  PolicyName: string

  /**
   * 审计规则 ID。
   */
  RuleId: string

  /**
      * 审计规则名称。
注意：此字段可能返回 null，表示取不到有效值。
      */
  RuleName: string

  /**
      * 数据库实例名称
注意：此字段可能返回 null，表示取不到有效值。
      */
  InstanceName: string
}

/**
 * DescribeBackupTables请求参数结构体
 */
export interface DescribeBackupTablesRequest {
  /**
   * 实例ID，格式如：cdb-c1nl9rpv。与云数据库控制台页面中显示的实例ID相同。
   */
  InstanceId: string

  /**
   * 开始时间，格式为：2017-07-12 10:29:20。
   */
  StartTime: string

  /**
   * 指定的数据库名。
   */
  DatabaseName: string

  /**
   * 要查询的数据表名前缀。
   */
  SearchTable?: string

  /**
   * 分页偏移。
   */
  Offset?: number

  /**
   * 分页大小，最小值为1，最大值为2000。
   */
  Limit?: number
}

/**
 * DescribeTables请求参数结构体
 */
export interface DescribeTablesRequest {
  /**
   * 实例 ID，格式如：cdb-c1nl9rpv，与云数据库控制台页面中显示的实例 ID 相同。
   */
  InstanceId: string

  /**
   * 数据库的名称。
   */
  Database: string

  /**
   * 记录偏移量，默认值为0。
   */
  Offset?: number

  /**
   * 单次请求返回的数量，默认值为20，最大值为2000。
   */
  Limit?: number

  /**
   * 匹配数据库表名的正则表达式，规则同 MySQL 官网
   */
  TableRegexp?: string
}

/**
 * UpgradeDBInstance请求参数结构体
 */
export interface UpgradeDBInstanceRequest {
  /**
   * 实例 ID，格式如：cdb-c1nl9rpv 或者 cdbro-c1nl9rpv。与云数据库控制台页面中显示的实例 ID 相同，可使用 [查询实例列表](https://cloud.tencent.com/document/api/236/15872) 接口获取，其值为输出参数中字段 InstanceId 的值。
   */
  InstanceId: string

  /**
   * 升级后的内存大小，单位：MB，为保证传入 Memory 值有效，请使用 [获取云数据库可售卖规格](https://cloud.tencent.com/document/product/236/17229) 接口获取可升级的内存规格。
   */
  Memory: number

  /**
   * 升级后的硬盘大小，单位：GB，为保证传入 Volume 值有效，请使用 [获取云数据库可售卖规格](https://cloud.tencent.com/document/product/236/17229) 接口获取可升级的硬盘范围。
   */
  Volume: number

  /**
   * 数据复制方式，支持值包括：0 - 异步复制，1 - 半同步复制，2 - 强同步复制，升级主实例时可指定该参数，升级只读实例或者灾备实例时指定该参数无意义。
   */
  ProtectMode?: number

  /**
   * 部署模式，默认为 0，支持值包括：0 - 单可用区部署，1 - 多可用区部署，升级主实例时可指定该参数，升级只读实例或者灾备实例时指定该参数无意义。
   */
  DeployMode?: number

  /**
   * 备库1的可用区信息，默认和实例的 Zone 参数一致，升级主实例为多可用区部署时可指定该参数，升级只读实例或者灾备实例时指定该参数无意义。可通过 [获取云数据库可售卖规格](https://cloud.tencent.com/document/product/236/17229) 接口查询支持的可用区。
   */
  SlaveZone?: string

  /**
   * 主实例数据库引擎版本，支持值包括：5.5、5.6 和 5.7。
   */
  EngineVersion?: string

  /**
   * 切换访问新实例的方式，默认为 0。支持值包括：0 - 立刻切换，1 - 时间窗切换；当该值为 1 时，升级中过程中，切换访问新实例的流程将会在时间窗内进行，或者用户主动调用接口 [切换访问新实例](https://cloud.tencent.com/document/product/236/15864) 触发该流程。
   */
  WaitSwitch?: number

  /**
   * 备库 2 的可用区信息，默认为空，升级主实例时可指定该参数，升级只读实例或者灾备实例时指定该参数无意义。
   */
  BackupZone?: string

  /**
   * 实例类型，默认为 master，支持值包括：master - 表示主实例，dr - 表示灾备实例，ro - 表示只读实例。
   */
  InstanceRole?: string

  /**
   * 实例隔离类型。支持值包括： "UNIVERSAL" - 通用型实例， "EXCLUSIVE" - 独享型实例， "BASIC" - 基础版实例。
   */
  DeviceType?: string

  /**
   * 升级后的实例cpu核数， 如果不传将根据 Memory 指定的内存值自动填充对应的cpu值。
   */
  Cpu?: number

  /**
   * 是否极速变配。0-普通升级，1-极速变配。选择极速变配会根据资源状况校验是否可以进行极速变配，满足条件则进行极速变配，不满足条件会返回报错信息。
   */
  FastUpgrade?: number

  /**
   * 延迟阈值。取值范围1~10，默认值为10。
   */
  MaxDelayTime?: number

  /**
   * 是否跨区迁移。0-普通迁移，1-跨区迁移，默认值为0。该值为1时支持变更实例主节点可用区。
   */
  CrossCluster?: number

  /**
   * 主节点可用区，该值仅在跨区迁移时生效。仅支持同地域下的可用区进行迁移。
   */
  ZoneId?: string
}

/**
 * ModifyParamTemplate请求参数结构体
 */
export interface ModifyParamTemplateRequest {
  /**
   * 模板 ID。
   */
  TemplateId: number

  /**
   * 模板名称，长度不超过64。
   */
  Name?: string

  /**
   * 模板描述，长度不超过255。
   */
  Description?: string

  /**
   * 参数列表。
   */
  ParamList?: Array<Parameter>
}

/**
 * StartReplication返回参数结构体
 */
export interface StartReplicationResponse {
  /**
      * 异步任务 ID。
注意：此字段可能返回 null，表示取不到有效值。
      */
  AsyncRequestId: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 可用区售卖配置
 */
export interface ZoneSellConf {
  /**
   * 可用区状态。可能的返回值为：1-上线；3-停售；4-不展示
   */
  Status: number

  /**
   * 可用区中文名称
   */
  ZoneName: string

  /**
   * 实例类型是否为自定义类型
   */
  IsCustom: boolean

  /**
   * 是否支持灾备
   */
  IsSupportDr: boolean

  /**
   * 是否支持私有网络
   */
  IsSupportVpc: boolean

  /**
   * 小时计费实例最大售卖数量
   */
  HourInstanceSaleMaxNum: number

  /**
   * 是否为默认可用区
   */
  IsDefaultZone: boolean

  /**
   * 是否为黑石区
   */
  IsBm: boolean

  /**
   * 支持的付费类型。可能的返回值为：0-包年包月；1-小时计费；2-后付费
   */
  PayType: Array<string>

  /**
   * 数据复制类型。0-异步复制；1-半同步复制；2-强同步复制
   */
  ProtectMode: Array<string>

  /**
   * 可用区名称
   */
  Zone: string

  /**
   * 售卖实例类型数组
   */
  SellType: Array<SellType>

  /**
   * 多可用区信息
   */
  ZoneConf: ZoneConf

  /**
   * 可支持的灾备可用区信息
   */
  DrZone: Array<string>

  /**
   * 是否支持跨可用区只读
   */
  IsSupportRemoteRo: boolean

  /**
      * 可支持的跨可用区只读区信息
注意：此字段可能返回 null，表示取不到有效值。
      */
  RemoteRoZone: Array<string>

  /**
   * 独享型可用区状态。可能的返回值为：1-上线；3-停售；4-不展示
   */
  ExClusterStatus: number

  /**
      * 独享型可支持的跨可用区只读区信息
注意：此字段可能返回 null，表示取不到有效值。
      */
  ExClusterRemoteRoZone: Array<string>

  /**
      * 独享型多可用区信息
注意：此字段可能返回 null，表示取不到有效值。
      */
  ExClusterZoneConf: ZoneConf
}

/**
 * ModifyCDBProxyVipVPort请求参数结构体
 */
export interface ModifyCDBProxyVipVPortRequest {
  /**
   * 代理组ID
   */
  ProxyGroupId: string

  /**
   * 私有网络ID
   */
  UniqVpcId: string

  /**
   * 私有网络子网ID
   */
  UniqSubnetId: string

  /**
   * 目标IP
   */
  DstIp?: string

  /**
   * 目标端口
   */
  DstPort?: number

  /**
   * 旧IP回收时间 单位小时
   */
  ReleaseDuration?: number
}

/**
 * DescribeBinlogBackupOverview返回参数结构体
 */
export interface DescribeBinlogBackupOverviewResponse {
  /**
   * 总的日志备份容量（单位为字节）。
   */
  BinlogBackupVolume?: number

  /**
   * 总的日志备份个数。
   */
  BinlogBackupCount?: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * InitDBInstances请求参数结构体
 */
export interface InitDBInstancesRequest {
  /**
   * 实例ID，格式如：cdb-c1nl9rpv，与云数据库控制台页面中显示的实例ID相同，可使用[查询实例列表](https://cloud.tencent.com/document/api/236/15872) 接口获取，其值为输出参数中字段 InstanceId 的值。
   */
  InstanceIds: Array<string>

  /**
   * 实例新的密码，密码规则：8-64个字符，至少包含字母、数字、字符（支持的字符：!@#$%^*()）中的两种。
   */
  NewPassword: string

  /**
   * 实例的参数列表，目前支持设置“character_set_server”、“lower_case_table_names”参数。其中，“character_set_server”参数可选值为["utf8","latin1","gbk","utf8mb4"]；“lower_case_table_names”可选值为[“0”,“1”]。
   */
  Parameters: Array<ParamInfo>

  /**
   * 实例的端口，取值范围为[1024, 65535]
   */
  Vport?: number
}

/**
 * SwitchDBInstanceMasterSlave请求参数结构体
 */
export interface SwitchDBInstanceMasterSlaveRequest {
  /**
   * 实例 ID。
   */
  InstanceId: string

  /**
   * 目标从实例。可选值："first" - 第一备机；"second" - 第二备机。默认值为 "first"，仅多可用区实例支持设置为 "second"。
   */
  DstSlave?: string

  /**
   * 是否强制切换。默认为 False。注意，若设置强制切换为 True，实例存在丢失数据的风险，请谨慎使用。
   */
  ForceSwitch?: boolean

  /**
   * 是否时间窗内切换。默认为 False，即不在时间窗内切换。注意，如果设置了 ForceSwitch 参数为 True，则该参数不生效。
   */
  WaitSwitch?: boolean
}

/**
 * ModifyCDBProxyConnectionPool请求参数结构体
 */
export interface ModifyCDBProxyConnectionPoolRequest {
  /**
   * 数据库代理ID
   */
  ProxyGroupId: string

  /**
      * 是否开启连接池，true：开启连接池；
                             false：关闭连接池。
      */
  OpenConnectionPool: boolean

  /**
      * 连接池类型，
通过DescribeProxyConnectionPoolConf获取连接池类型值
      */
  ConnectionPoolType?: string

  /**
   * 连接保留阈值：单位（秒）
   */
  PoolConnectionTimeOut?: number
}

/**
 * ModifyAutoRenewFlag请求参数结构体
 */
export interface ModifyAutoRenewFlagRequest {
  /**
   * 实例的 ID，格式如：cdb-c1nl9rpv，与云数据库控制台页面中显示的实例 ID 相同。
   */
  InstanceIds: Array<string>

  /**
   * 自动续费标记，可取值的有：0 - 不自动续费，1 - 自动续费。
   */
  AutoRenew: number
}

/**
 * DeleteDeployGroups请求参数结构体
 */
export interface DeleteDeployGroupsRequest {
  /**
   * 要删除的置放群组 ID 列表。
   */
  DeployGroupIds: Array<string>
}

/**
 * DescribeAuditConfig返回参数结构体
 */
export interface DescribeAuditConfigResponse {
  /**
      * 审计日志保存时长。目前支持的值包括：[0，7，30，180，365，1095，1825]。
注意：此字段可能返回 null，表示取不到有效值。
      */
  LogExpireDay: number

  /**
   * 审计日志存储类型。目前支持的值包括："storage" - 存储型。
   */
  LogType: string

  /**
   * 是否正在关闭审计。目前支持的值包括："false"-否，"true"-是
   */
  IsClosing: string

  /**
      * 审计服务开通时间。
注意：此字段可能返回 null，表示取不到有效值。
      */
  CreateTime: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
 * OpenWanService请求参数结构体
 */
export interface OpenWanServiceRequest {
  /**
   * 实例 ID，格式如：cdb-c1nl9rpv，与云数据库控制台页面中显示的实例 ID 相同，可使用 [查询实例列表](https://cloud.tencent.com/document/api/236/15872) 接口获取，其值为输出参数中字段 InstanceId 的值。
   */
  InstanceId: string
}

/**
 * DeleteAuditPolicy返回参数结构体
 */
export interface DeleteAuditPolicyResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * InitDBInstances返回参数结构体
 */
export interface InitDBInstancesResponse {
  /**
   * 异步任务的请求ID数组，可使用此ID查询异步任务的执行结果
   */
  AsyncRequestIds: Array<string>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeParamTemplateInfo返回参数结构体
 */
export interface DescribeParamTemplateInfoResponse {
  /**
   * 参数模板 ID。
   */
  TemplateId: number

  /**
   * 参数模板名称。
   */
  Name: string

  /**
   * 参数模板对应实例版本
   */
  EngineVersion: string

  /**
   * 参数模板中的参数数量
   */
  TotalCount: number

  /**
   * 参数详情
   */
  Items: Array<ParameterDetail>

  /**
   * 参数模板描述
   */
  Description: string

  /**
   * 参数模板类型。支持值包括："HIGH_STABILITY" - 高稳定模板，"HIGH_PERFORMANCE" - 高性能模板。
   */
  TemplateType: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeInstanceParams返回参数结构体
 */
export interface DescribeInstanceParamsResponse {
  /**
   * 实例的参数总数。
   */
  TotalCount: number

  /**
   * 参数详情。
   */
  Items: Array<ParameterDetail>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 文件上传描述
 */
export interface UploadInfo {
  /**
   * 文件所有分片数
   */
  AllSliceNum: number

  /**
   * 已完成分片数
   */
  CompleteNum: number
}

/**
 * DisassociateSecurityGroups请求参数结构体
 */
export interface DisassociateSecurityGroupsRequest {
  /**
   * 安全组 ID。
   */
  SecurityGroupId: string

  /**
   * 实例 ID 列表，一个或者多个实例 ID 组成的数组。
   */
  InstanceIds: Array<string>

  /**
   * 当传入只读实例ID时，默认操作的是对应只读组的安全组。如果需要操作只读实例ID的安全组， 需要将该入参置为True
   */
  ForReadonlyInstance?: boolean
}

/**
 * ModifyLocalBinlogConfig请求参数结构体
 */
export interface ModifyLocalBinlogConfigRequest {
  /**
   * 实例 ID，格式如：cdb-c1nl9rpv。与云数据库控制台页面中显示的实例ID相同。
   */
  InstanceId: string

  /**
   * 本地binlog保留时长，可取值范围：[72,168]。
   */
  SaveHours: number

  /**
   * 本地binlog空间使用率，可取值范围：[30,50]。
   */
  MaxUsage: number
}

/**
 * StartBatchRollback返回参数结构体
 */
export interface StartBatchRollbackResponse {
  /**
   * 异步任务的请求 ID，可使用此 ID 查询异步任务的执行结果。
   */
  AsyncRequestId?: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyAccountHost返回参数结构体
 */
export interface ModifyAccountHostResponse {
  /**
   * 异步任务的请求 ID，可使用此 ID 查询异步任务的执行结果。
   */
  AsyncRequestId: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeRollbackRangeTime返回参数结构体
 */
export interface DescribeRollbackRangeTimeResponse {
  /**
   * 符合查询条件的实例总数。
   */
  TotalCount?: number

  /**
   * 返回的参数信息。
   */
  Items?: Array<InstanceRollbackRangeTime>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyRoGroupInfo请求参数结构体
 */
export interface ModifyRoGroupInfoRequest {
  /**
   * RO 组的 ID。
   */
  RoGroupId: string

  /**
   * RO 组的详细信息。
   */
  RoGroupInfo?: RoGroupAttr

  /**
   * RO 组内实例的权重。若修改 RO 组的权重模式为用户自定义模式（custom），则必须设置该参数，且需要设置每个 RO 实例的权重值。
   */
  RoWeightValues?: Array<RoWeightValue>

  /**
   * 是否重新均衡 RO 组内的 RO 实例的负载。支持值包括：1 - 重新均衡负载；0 - 不重新均衡负载。默认值为 0。注意，设置为重新均衡负载时，RO 组内 RO 实例会有一次数据库连接瞬断，请确保应用程序能重连数据库。
   */
  IsBalanceRoLoad?: number

  /**
   * 废弃参数，无意义。
   */
  ReplicationDelayTime?: number
}

/**
 * 解隔离任务结果
 */
export interface ReleaseResult {
  /**
   * 实例 ID。
   */
  InstanceId: string

  /**
   * 实例解隔离操作的结果值。返回值为0表示成功。
   */
  Code: number

  /**
   * 实例解隔离操作的错误信息。
   */
  Message: string
}

/**
 * 数据代理组信息
 */
export interface ProxyGroups {
  /**
      * 代理基本信息
注意：此字段可能返回 null，表示取不到有效值。
      */
  BaseGroup: BaseGroupInfo

  /**
      * 代理地址信息
注意：此字段可能返回 null，表示取不到有效值。
      */
  Address: Array<Address>

  /**
      * 代理连接池信息
注意：此字段可能返回 null，表示取不到有效值。
      */
  ConnectionPoolInfo: ConnectionPoolInfo

  /**
      * 代理节点信息
注意：此字段可能返回 null，表示取不到有效值。
      */
  ProxyNode: Array<ProxyNodeInfo>

  /**
      * 代理路由信息
注意：此字段可能返回 null，表示取不到有效值。
      */
  RWInstInfo: RWInfos
}

/**
 * 审计规则
 */
export interface AuditRule {
  /**
   * 审计规则 Id。
   */
  RuleId: string

  /**
   * 审计规则创建时间。格式为 : "2019-03-20 17:09:13"。
   */
  CreateTime: string

  /**
   * 审计规则最后修改时间。格式为 : "2019-03-20 17:09:13"。
   */
  ModifyTime: string

  /**
      * 审计规则名称。
注意：此字段可能返回 null，表示取不到有效值。
      */
  RuleName: string

  /**
      * 审计规则描述。
注意：此字段可能返回 null，表示取不到有效值。
      */
  Description: string

  /**
      * 审计规则过滤条件。
注意：此字段可能返回 null，表示取不到有效值。
      */
  RuleFilters: Array<AuditFilter>

  /**
   * 是否开启全审计。
   */
  AuditAll: boolean
}

/**
 * 地域售卖配置
 */
export interface RegionSellConf {
  /**
   * 地域中文名称
   */
  RegionName: string

  /**
   * 所属大区
   */
  Area: string

  /**
   * 是否为默认地域
   */
  IsDefaultRegion: number

  /**
   * 地域名称
   */
  Region: string

  /**
   * 可用区售卖配置
   */
  ZonesConf: Array<ZoneSellConf>
}

/**
 * 用于回档的数据库名
 */
export interface RollbackDBName {
  /**
      * 回档前的原数据库名
注意：此字段可能返回 null，表示取不到有效值。
      */
  DatabaseName: string

  /**
      * 回档后的新数据库名
注意：此字段可能返回 null，表示取不到有效值。
      */
  NewDatabaseName: string
}

/**
 * CreateAuditRule返回参数结构体
 */
export interface CreateAuditRuleResponse {
  /**
   * 审计规则 ID。
   */
  RuleId: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDBInstanceInfo返回参数结构体
 */
export interface DescribeDBInstanceInfoResponse {
  /**
   * 实例 ID 。
   */
  InstanceId: string

  /**
   * 实例名称。
   */
  InstanceName: string

  /**
   * 是否开通加密，YES 已开通，NO 未开通。
   */
  Encryption: string

  /**
      * 加密使用的密钥 ID 。
注意：此字段可能返回 null，表示取不到有效值。
      */
  KeyId: string

  /**
      * 密钥所在地域。
注意：此字段可能返回 null，表示取不到有效值。
      */
  KeyRegion: string

  /**
      * 当前 CDB 后端服务使用的 KMS 服务的默认地域。
注意：此字段可能返回 null，表示取不到有效值。
      */
  DefaultKmsRegion: string

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
   * 安全组 ID。
   */
  SecurityGroupId: string

  /**
   * 实例 ID 列表，一个或者多个实例 ID 组成的数组。
   */
  InstanceIds: Array<string>

  /**
   * 当传入只读实例ID时，默认操作的是对应只读组的安全组。如果需要操作只读实例ID的安全组， 需要将该入参置为True
   */
  ForReadonlyInstance?: boolean
}

/**
 * ApplyCDBProxy请求参数结构体
 */
export interface ApplyCDBProxyRequest {
  /**
   * 主实例唯一标识ID
   */
  InstanceId: string

  /**
   * 私有网络ID
   */
  UniqVpcId: string

  /**
   * 私有网络子网ID
   */
  UniqSubnetId: string

  /**
   * 代理组节点个数
   */
  ProxyCount: number

  /**
   * cpu核数
   */
  Cpu: number

  /**
   * 内存
   */
  Mem: number

  /**
   * 安全组
   */
  SecurityGroup?: Array<string>

  /**
   * 描述说明，最大支持256位。
   */
  Desc?: string
}

/**
 * ModifyAuditRule请求参数结构体
 */
export interface ModifyAuditRuleRequest {
  /**
   * 审计规则 ID。
   */
  RuleId: string

  /**
   * 审计规则名称。
   */
  RuleName?: string

  /**
   * 审计规则描述。
   */
  Description?: string

  /**
   * 审计规则过滤条件。若设置了过滤条件，则不会开启全审计。
   */
  RuleFilters?: Array<AuditFilter>

  /**
   * 是否开启全审计。支持值包括：false – 不开启全审计，true – 开启全审计。用户未设置审计规则过滤条件时，默认开启全审计。
   */
  AuditAll?: boolean
}

/**
 * DescribeBinlogs返回参数结构体
 */
export interface DescribeBinlogsResponse {
  /**
   * 符合查询条件的日志文件总数。
   */
  TotalCount?: number

  /**
   * 符合查询条件的二进制日志文件详情。
   */
  Items?: Array<BinlogInfo>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeRoMinScale请求参数结构体
 */
export interface DescribeRoMinScaleRequest {
  /**
   * 只读实例ID，格式如：cdbro-c1nl9rpv，与云数据库控制台页面中显示的实例ID相同，该参数与MasterInstanceId参数不能同时为空。
   */
  RoInstanceId?: string

  /**
   * 主实例ID，格式如：cdb-c1nl9rpv，与云数据库控制台页面中显示的实例ID相同，该参数与RoInstanceId参数不能同时为空。注意，当传入参数包含RoInstanceId时，返回值为只读实例升级时的最小规格；当传入参数只包含MasterInstanceId时，返回值为只读实例购买时的最小规格。
   */
  MasterInstanceId?: string
}

/**
 * DescribeDefaultParams请求参数结构体
 */
export interface DescribeDefaultParamsRequest {
  /**
   * mysql版本，目前支持 ["5.1", "5.5", "5.6", "5.7"]。
   */
  EngineVersion: string

  /**
   * 默认参数模板类型。支持值包括："HIGH_STABILITY" - 高稳定模板，"HIGH_PERFORMANCE" - 高性能模板。
   */
  TemplateType?: string
}

/**
 * 地址
 */
export interface Address {
  /**
      * 地址
注意：此字段可能返回 null，表示取不到有效值。
      */
  Vip: string

  /**
      * 端口
注意：此字段可能返回 null，表示取不到有效值。
      */
  VPort: number

  /**
      * 私有网络ID
注意：此字段可能返回 null，表示取不到有效值。
      */
  UniqVpcId: string

  /**
      * 私有网络子网ID
注意：此字段可能返回 null，表示取不到有效值。
      */
  UniqSubnet: string

  /**
      * 描述
注意：此字段可能返回 null，表示取不到有效值。
      */
  Desc: string
}

/**
 * proxy配置
 */
export interface CustomConfig {
  /**
      * 设备
注意：此字段可能返回 null，表示取不到有效值。
      */
  Device: string

  /**
      * 类型
注意：此字段可能返回 null，表示取不到有效值。
      */
  Type: string

  /**
      * 设备类型
注意：此字段可能返回 null，表示取不到有效值。
      */
  DeviceType: string

  /**
      * 内存
注意：此字段可能返回 null，表示取不到有效值。
      */
  Memory: number

  /**
      * 核数
注意：此字段可能返回 null，表示取不到有效值。
      */
  Cpu: number
}

/**
 * SwitchDBInstanceMasterSlave返回参数结构体
 */
export interface SwitchDBInstanceMasterSlaveResponse {
  /**
   * 异步任务 ID。
   */
  AsyncRequestId: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeBackups请求参数结构体
 */
export interface DescribeBackupsRequest {
  /**
   * 实例ID，格式如：cdb-c1nl9rpv。与云数据库控制台页面中显示的实例 ID 相同。
   */
  InstanceId: string

  /**
   * 偏移量，最小值为0。
   */
  Offset?: number

  /**
   * 分页大小，默认值为20，最小值为1，最大值为100。
   */
  Limit?: number
}

/**
 * DescribeInstanceParamRecords返回参数结构体
 */
export interface DescribeInstanceParamRecordsResponse {
  /**
   * 符合条件的记录数。
   */
  TotalCount: number

  /**
   * 参数修改记录。
   */
  Items: Array<ParamRecord>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDBInstanceGTID返回参数结构体
 */
export interface DescribeDBInstanceGTIDResponse {
  /**
   * GTID 是否开通的标记，可能的取值为：0 - 未开通，1 - 已开通。
   */
  IsGTIDOpen?: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteParamTemplate请求参数结构体
 */
export interface DeleteParamTemplateRequest {
  /**
   * 参数模板ID。
   */
  TemplateId: number
}

/**
 * 灾备实例信息
 */
export interface DrInfo {
  /**
   * 灾备实例状态
   */
  Status: number

  /**
   * 可用区信息
   */
  Zone: string

  /**
   * 实例ID
   */
  InstanceId: string

  /**
   * 地域信息
   */
  Region: string

  /**
      * 实例同步状态。可能的返回值为：
0 - 灾备未同步；
1 - 灾备同步中；
2 - 灾备同步成功；
3 - 灾备同步失败；
4 - 灾备同步修复中。
      */
  SyncStatus: number

  /**
   * 实例名称
   */
  InstanceName: string

  /**
   * 实例类型
   */
  InstanceType: number
}

/**
 * DescribeBinlogs请求参数结构体
 */
export interface DescribeBinlogsRequest {
  /**
   * 实例 ID，格式如：cdb-c1nl9rpv。与云数据库控制台页面中显示的实例 ID 相同。
   */
  InstanceId: string

  /**
   * 偏移量，最小值为0。
   */
  Offset?: number

  /**
   * 分页大小，默认值为20，最小值为1，最大值为100。
   */
  Limit?: number
}

/**
 * ModifyBackupDownloadRestriction请求参数结构体
 */
export interface ModifyBackupDownloadRestrictionRequest {
  /**
   * NoLimit 不限制,内外网都可以下载； LimitOnlyIntranet 仅内网可下载； Customize 用户自定义vpc:ip可下载。 只有该值为 Customize 时，才可以设置 LimitVpc 和 LimitIp 。
   */
  LimitType: string

  /**
   * 该参数仅支持 In， 表示 LimitVpc 指定的vpc可以下载。默认为In。
   */
  VpcComparisonSymbol?: string

  /**
   * In: 指定的ip可以下载； NotIn: 指定的ip不可以下载。 默认为In。
   */
  IpComparisonSymbol?: string

  /**
   * 限制下载的vpc设置。
   */
  LimitVpc?: Array<BackupLimitVpcItem>

  /**
   * 限制下载的ip设置
   */
  LimitIp?: Array<string>
}

/**
 * CreateParamTemplate返回参数结构体
 */
export interface CreateParamTemplateResponse {
  /**
   * 参数模板 ID。
   */
  TemplateId: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyAccountPassword返回参数结构体
 */
export interface ModifyAccountPasswordResponse {
  /**
   * 异步任务的请求 ID，可使用此 ID 查询异步任务的执行结果。
   */
  AsyncRequestId?: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ReleaseIsolatedDBInstances请求参数结构体
 */
export interface ReleaseIsolatedDBInstancesRequest {
  /**
   * 实例 ID 数组，单个实例 ID 格式如：cdb-c1nl9rpv，与云数据库控制台页面中显示的实例 ID 相同，可使用 [查询实例列表](https://cloud.tencent.com/document/api/236/15872) 接口获取，其值为输出参数中字段 InstanceId 的值。
   */
  InstanceIds: Array<string>
}

/**
 * 二进制日志信息
 */
export interface BinlogInfo {
  /**
   * binlog 日志备份文件名
   */
  Name: string

  /**
   * 备份文件大小，单位：Byte
   */
  Size: number

  /**
   * 文件存储时间，时间格式：2016-03-17 02:10:37
   */
  Date: string

  /**
   * 下载地址
   */
  IntranetUrl: string

  /**
   * 下载地址
   */
  InternetUrl: string

  /**
   * 日志具体类型，可能的值有：binlog - 二进制日志
   */
  Type: string

  /**
   * binlog 文件起始时间
   */
  BinlogStartTime: string

  /**
   * binlog 文件截止时间
   */
  BinlogFinishTime: string
}

/**
 * DescribeErrorLogData返回参数结构体
 */
export interface DescribeErrorLogDataResponse {
  /**
   * 符合条件的记录总数。
   */
  TotalCount: number

  /**
      * 返回的记录。
注意：此字段可能返回 null，表示取不到有效值。
      */
  Items: Array<ErrlogItem>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * AddTimeWindow请求参数结构体
 */
export interface AddTimeWindowRequest {
  /**
   * 实例ID，格式如：cdb-c1nl9rpv 或者 cdbro-c1nl9rpv，与云数据库控制台页面中显示的实例 ID 相同。
   */
  InstanceId: string

  /**
   * 星期一的可维护时间段，其中每一个时间段的格式形如：10:00-12:00；起始时间按半个小时对齐；最短半个小时，最长三个小时；可设置多个时间段。 一周中应至少设置一天的时间窗。下同。
   */
  Monday?: Array<string>

  /**
   * 星期二的可维护时间窗口。 一周中应至少设置一天的时间窗。
   */
  Tuesday?: Array<string>

  /**
   * 星期三的可维护时间窗口。 一周中应至少设置一天的时间窗。
   */
  Wednesday?: Array<string>

  /**
   * 星期四的可维护时间窗口。 一周中应至少设置一天的时间窗。
   */
  Thursday?: Array<string>

  /**
   * 星期五的可维护时间窗口。 一周中应至少设置一天的时间窗。
   */
  Friday?: Array<string>

  /**
   * 星期六的可维护时间窗口。 一周中应至少设置一天的时间窗。
   */
  Saturday?: Array<string>

  /**
   * 星期日的可维护时间窗口。 一周中应至少设置一天的时间窗。
   */
  Sunday?: Array<string>

  /**
   * 最大延迟阈值，仅对主实例和灾备实例有效
   */
  MaxDelayTime?: number
}

/**
 * 导入任务记录
 */
export interface ImportRecord {
  /**
   * 状态值
   */
  Status: number

  /**
   * 状态值
   */
  Code: number

  /**
   * 执行时间
   */
  CostTime: number

  /**
   * 实例ID
   */
  InstanceId: string

  /**
   * 后端任务ID
   */
  WorkId: string

  /**
   * 导入文件名
   */
  FileName: string

  /**
   * 执行进度
   */
  Process: number

  /**
   * 任务创建时间
   */
  CreateTime: string

  /**
   * 文件大小
   */
  FileSize: string

  /**
   * 任务执行信息
   */
  Message: string

  /**
   * 任务ID
   */
  JobId: number

  /**
   * 导入库表名
   */
  DbName: string

  /**
   * 异步任务的请求ID
   */
  AsyncRequestId: string
}

/**
 * DeleteAuditLogFile返回参数结构体
 */
export interface DeleteAuditLogFileResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 数据库实例参数
 */
export interface Parameter {
  /**
   * 参数名称
   */
  Name?: string

  /**
   * 参数值
   */
  CurrentValue?: string
}

/**
 * 备机信息
 */
export interface SlaveInfo {
  /**
   * 第一备机信息
   */
  First: SlaveInstanceInfo

  /**
      * 第二备机信息
注意：此字段可能返回 null，表示取不到有效值。
      */
  Second?: SlaveInstanceInfo
}

/**
 * DescribeDBSecurityGroups请求参数结构体
 */
export interface DescribeDBSecurityGroupsRequest {
  /**
   * 实例ID，格式如：cdb-c1nl9rpv或者cdbro-c1nl9rpv，与云数据库控制台页面中显示的实例ID相同。
   */
  InstanceId: string

  /**
   * 该值默认为False，表示当传入只读实例ID时，查询操作的是对应只读组的安全组。如果需要操作只读实例ID的安全组， 需要将该入参置为True。
   */
  ForReadonlyInstance?: boolean
}

/**
 * DescribeDBSwitchRecords返回参数结构体
 */
export interface DescribeDBSwitchRecordsResponse {
  /**
   * 实例切换记录的总数。
   */
  TotalCount?: number

  /**
   * 实例切换记录详情。
   */
  Items?: Array<DBSwitchInfo>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyCDBProxyConnectionPool返回参数结构体
 */
export interface ModifyCDBProxyConnectionPoolResponse {
  /**
      * 异步处理ID
注意：此字段可能返回 null，表示取不到有效值。
      */
  AsyncRequestId: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateAuditLogFile返回参数结构体
 */
export interface CreateAuditLogFileResponse {
  /**
   * 审计日志文件名称。
   */
  FileName?: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyInstanceTag返回参数结构体
 */
export interface ModifyInstanceTagResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDBSwitchRecords请求参数结构体
 */
export interface DescribeDBSwitchRecordsRequest {
  /**
   * 实例 ID，格式如：cdb-c1nl9rpv 或者 cdbro-c1nl9rpv，与云数据库控制台页面中显示的实例 ID 相同。
   */
  InstanceId: string

  /**
   * 分页偏移量。
   */
  Offset?: number

  /**
   * 分页大小，默认值为 50，最小值为 1，最大值为 2000。
   */
  Limit?: number
}

/**
 * DescribeSupportedPrivileges请求参数结构体
 */
export interface DescribeSupportedPrivilegesRequest {
  /**
   * 实例 ID，格式如：cdb-c1nl9rpv，与云数据库控制台页面中显示的实例 ID 相同。
   */
  InstanceId: string
}

/**
 * DescribeAsyncRequestInfo返回参数结构体
 */
export interface DescribeAsyncRequestInfoResponse {
  /**
      * 任务执行结果。可能的取值：INITIAL - 初始化，RUNNING - 运行中，SUCCESS - 执行成功，FAILED - 执行失败，KILLED - 已终止，REMOVED - 已删除，PAUSED - 终止中。
注意：此字段可能返回 null，表示取不到有效值。
      */
  Status?: string

  /**
      * 任务执行信息描述。
注意：此字段可能返回 null，表示取不到有效值。
      */
  Info?: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeRoGroups请求参数结构体
 */
export interface DescribeRoGroupsRequest {
  /**
   * 实例ID，格式如：cdb-c1nl9rpv或者cdb-c1nl9rpv，与云数据库控制台页面中显示的实例ID相同。
   */
  InstanceId: string
}

/**
 * 参数模板信息
 */
export interface ParamTemplateInfo {
  /**
   * 参数模板ID
   */
  TemplateId: number

  /**
   * 参数模板名称
   */
  Name: string

  /**
   * 参数模板描述
   */
  Description: string

  /**
   * 实例引擎版本
   */
  EngineVersion: string

  /**
   * 参数模板类型
   */
  TemplateType: string
}

/**
 * DeleteTimeWindow返回参数结构体
 */
export interface DeleteTimeWindowResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeBackups返回参数结构体
 */
export interface DescribeBackupsResponse {
  /**
   * 符合查询条件的实例总数。
   */
  TotalCount?: number

  /**
   * 符合查询条件的备份信息详情。
   */
  Items?: Array<BackupInfo>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateAuditPolicy请求参数结构体
 */
export interface CreateAuditPolicyRequest {
  /**
   * 审计策略名称。
   */
  Name: string

  /**
   * 审计规则 ID。
   */
  RuleId: string

  /**
   * 实例 ID，格式如：cdb-c1nl9rpv 或者 cdbro-c1nl9rpv，与云数据库控制台页面中显示的实例 ID 相同。
   */
  InstanceId: string

  /**
      * 审计日志保存时长。支持值包括：
7 - 一周
30 - 一个月；
180 - 六个月；
365 - 一年；
1095 - 三年；
1825 - 五年；
实例首次开通审计策略时，可传该值，用于设置存储日志保存天数，默认为 30 天。若实例已存在审计策略，则此参数无效，可使用 更改审计服务配置 接口修改日志存储时长。
      */
  LogExpireDay?: number
}

/**
 * CreateRoInstanceIp请求参数结构体
 */
export interface CreateRoInstanceIpRequest {
  /**
   * 只读实例ID，格式如：cdbro-3i70uj0k，与云数据库控制台页面中显示的只读实例ID相同。
   */
  InstanceId: string

  /**
   * 子网描述符，例如：subnet-1typ0s7d。
   */
  UniqSubnetId?: string

  /**
   * vpc描述符，例如：vpc-a23yt67j,如果传了该字段则UniqSubnetId必传
   */
  UniqVpcId?: string
}

/**
 * DescribeTimeWindow返回参数结构体
 */
export interface DescribeTimeWindowResponse {
  /**
   * 星期一的可维护时间列表。
   */
  Monday: Array<string>

  /**
   * 星期二的可维护时间列表。
   */
  Tuesday: Array<string>

  /**
   * 星期三的可维护时间列表。
   */
  Wednesday: Array<string>

  /**
   * 星期四的可维护时间列表。
   */
  Thursday: Array<string>

  /**
   * 星期五的可维护时间列表。
   */
  Friday: Array<string>

  /**
   * 星期六的可维护时间列表。
   */
  Saturday: Array<string>

  /**
   * 星期日的可维护时间列表。
   */
  Sunday: Array<string>

  /**
   * 最大数据延迟阈值
   */
  MaxDelayTime: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeBackupConfig返回参数结构体
 */
export interface DescribeBackupConfigResponse {
  /**
   * 自动备份开始的最早时间点，单位为时刻。例如，2 - 凌晨 2:00。（该字段已废弃，建议使用 BackupTimeWindow 字段）
   */
  StartTimeMin: number

  /**
   * 自动备份开始的最晚时间点，单位为时刻。例如，6 - 凌晨 6:00。（该字段已废弃，建议使用 BackupTimeWindow 字段）
   */
  StartTimeMax: number

  /**
   * 备份文件保留时间，单位为天。
   */
  BackupExpireDays: number

  /**
   * 备份方式，可能的值为：physical - 物理备份，logical - 逻辑备份。
   */
  BackupMethod: string

  /**
   * Binlog 文件保留时间，单位为天。
   */
  BinlogExpireDays: number

  /**
   * 实例自动备份的时间窗。
   */
  BackupTimeWindow: CommonTimeWindow

  /**
   * 定期保留开关，off - 不开启定期保留策略，on - 开启定期保留策略，默认为off
   */
  EnableBackupPeriodSave: string

  /**
   * 定期保留最长天数，最小值：90，最大值：3650，默认值：1080
   */
  BackupPeriodSaveDays: number

  /**
   * 定期保留策略周期，可取值：weekly - 周，monthly - 月， quarterly - 季度，yearly - 年，默认为monthly
   */
  BackupPeriodSaveInterval: string

  /**
   * 定期保留的备份数量，最小值为1，最大值不超过定期保留策略周期内常规备份个数，默认值为1
   */
  BackupPeriodSaveCount: number

  /**
   * 定期保留策略周期起始日期，格式：YYYY-MM-dd HH:mm:ss
   */
  StartBackupPeriodSaveDate: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeParamTemplates返回参数结构体
 */
export interface DescribeParamTemplatesResponse {
  /**
   * 该用户的参数模板数量。
   */
  TotalCount: number

  /**
   * 参数模板详情。
   */
  Items: Array<ParamTemplateInfo>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 多可用区信息
 */
export interface ZoneConf {
  /**
   * 可用区部署方式，可能的值为：0-单可用区；1-多可用区
   */
  DeployMode: Array<number>

  /**
   * 主实例所在的可用区
   */
  MasterZone: Array<string>

  /**
   * 实例为多可用区部署时，备库1所在的可用区
   */
  SlaveZone: Array<string>

  /**
   * 实例为多可用区部署时，备库2所在的可用区
   */
  BackupZone: Array<string>
}

/**
 * 备机信息
 */
export interface SlaveInstanceInfo {
  /**
   * 端口号
   */
  Vport: number

  /**
   * 地域信息
   */
  Region: string

  /**
   * 虚拟 IP 信息
   */
  Vip: string

  /**
   * 可用区信息
   */
  Zone: string
}

/**
 * DescribeProjectSecurityGroups请求参数结构体
 */
export interface DescribeProjectSecurityGroupsRequest {
  /**
   * 项目ID。
   */
  ProjectId?: number
}

/**
 * StopReplication请求参数结构体
 */
export interface StopReplicationRequest {
  /**
   * 实例 ID。仅支持只读实例。
   */
  InstanceId: string
}

/**
 * CreateCloneInstance返回参数结构体
 */
export interface CreateCloneInstanceResponse {
  /**
   * 异步任务的请求ID，可使用此 ID 查询异步任务的执行结果。
   */
  AsyncRequestId: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 *  CPU负载
 */
export interface DeviceCpuInfo {
  /**
   * 实例CPU平均使用率
   */
  Rate: Array<DeviceCpuRateInfo>

  /**
   * 实例CPU监控数据
   */
  Load: Array<number>
}

/**
 * DescribeAsyncRequestInfo请求参数结构体
 */
export interface DescribeAsyncRequestInfoRequest {
  /**
   * 异步任务的请求 ID。
   */
  AsyncRequestId: string
}

/**
 * BalanceRoGroupLoad请求参数结构体
 */
export interface BalanceRoGroupLoadRequest {
  /**
   * RO 组的 ID，格式如：cdbrg-c1nl9rpv。
   */
  RoGroupId: string
}

/**
 * QueryCDBProxy请求参数结构体
 */
export interface QueryCDBProxyRequest {
  /**
   * 实例ID
   */
  InstanceId: string

  /**
   * 代理ID
   */
  ProxyGroupId?: string
}

/**
 * DescribeBackupOverview返回参数结构体
 */
export interface DescribeBackupOverviewResponse {
  /**
   * 用户在当前地域备份的总个数（包含数据备份和日志备份）。
   */
  BackupCount: number

  /**
   * 用户在当前地域备份的总容量
   */
  BackupVolume: number

  /**
   * 用户在当前地域备份的计费容量，即超出赠送容量的部分。
   */
  BillingVolume: number

  /**
   * 用户在当前地域获得的赠送备份容量。
   */
  FreeVolume: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeLocalBinlogConfig请求参数结构体
 */
export interface DescribeLocalBinlogConfigRequest {
  /**
   * 实例 ID，格式如：cdb-c1nl9rpv。与云数据库控制台页面中显示的实例ID相同。
   */
  InstanceId: string
}

/**
 * QueryCDBProxy返回参数结构体
 */
export interface QueryCDBProxyResponse {
  /**
      * 代理数量
注意：此字段可能返回 null，表示取不到有效值。
      */
  Count: number

  /**
      * 代理信息
注意：此字段可能返回 null，表示取不到有效值。
      */
  ProxyGroup: Array<ProxyGroups>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDeviceMonitorInfo请求参数结构体
 */
export interface DescribeDeviceMonitorInfoRequest {
  /**
   * 实例ID，格式如：cdb-c1nl9rpv。与云数据库控制台页面中显示的实例ID相同。
   */
  InstanceId: string

  /**
   * 返回当天最近Count个5分钟粒度的监控数据。最小值1，最大值288，不传该参数默认返回当天所有5分钟粒度监控数据。
   */
  Count?: number
}

/**
 * SwitchDrInstanceToMaster返回参数结构体
 */
export interface SwitchDrInstanceToMasterResponse {
  /**
   * 异步任务的请求ID，可使用此ID查询异步任务的执行结果。
   */
  AsyncRequestId: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDBInstanceConfig返回参数结构体
 */
export interface DescribeDBInstanceConfigResponse {
  /**
   * 主实例数据保护方式，可能的返回值：0 - 异步复制方式，1 - 半同步复制方式，2 - 强同步复制方式。
   */
  ProtectMode: number

  /**
   * 主实例部署方式，可能的返回值：0 - 单可用部署，1 - 多可用区部署。
   */
  DeployMode: number

  /**
   * 实例可用区信息，格式如 "ap-shanghai-1"。
   */
  Zone: string

  /**
      * 备库的配置信息。
注意：此字段可能返回 null，表示取不到有效值。
      */
  SlaveConfig: SlaveConfig

  /**
      * 强同步实例第二备库的配置信息。
注意：此字段可能返回 null，表示取不到有效值。
      */
  BackupConfig: BackupConfig

  /**
   * 是否切换备库。
   */
  Switched: boolean

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 从库的配置信息
 */
export interface SlaveConfig {
  /**
   * 从库复制方式，可能的返回值：aysnc-异步，semisync-半同步
   */
  ReplicationMode: string

  /**
   * 从库可用区的正式名称，如ap-shanghai-1
   */
  Zone: string
}

/**
 * ModifyAccountPrivileges返回参数结构体
 */
export interface ModifyAccountPrivilegesResponse {
  /**
   * 异步任务的请求 ID，可使用此 ID 查询异步任务的执行结果。
   */
  AsyncRequestId: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * StopRollback请求参数结构体
 */
export interface StopRollbackRequest {
  /**
   * 撤销回档任务对应的实例Id。
   */
  InstanceId: string
}

/**
 * DescribeDeviceMonitorInfo返回参数结构体
 */
export interface DescribeDeviceMonitorInfoResponse {
  /**
   * 实例CPU监控数据
   */
  Cpu?: DeviceCpuInfo

  /**
   * 实例内存监控数据
   */
  Mem?: DeviceMemInfo

  /**
   * 实例网络监控数据
   */
  Net?: DeviceNetInfo

  /**
   * 实例磁盘监控数据
   */
  Disk?: DeviceDiskInfo

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 实例的标签信息
 */
export interface TagsInfoOfInstance {
  /**
   * 实例Id
   */
  InstanceId: string

  /**
   * 标签信息
   */
  Tags: Array<TagInfoUnit>
}

/**
 * ResetRootAccount请求参数结构体
 */
export interface ResetRootAccountRequest {
  /**
   * 实例id
   */
  InstanceId: string
}

/**
 * DescribeDBInstanceConfig请求参数结构体
 */
export interface DescribeDBInstanceConfigRequest {
  /**
   * 实例 ID，格式如：cdb-c1nl9rpv，与云数据库控制台页面中显示的实例 ID 相同。
   */
  InstanceId: string
}

/**
 * DescribeProxyCustomConf返回参数结构体
 */
export interface DescribeProxyCustomConfResponse {
  /**
      * 代理配置数
注意：此字段可能返回 null，表示取不到有效值。
      */
  Count: number

  /**
      * 代理配置
注意：此字段可能返回 null，表示取不到有效值。
      */
  CustomConf: CustomConfig

  /**
      * 权重限制
注意：此字段可能返回 null，表示取不到有效值。
      */
  WeightRule: Rule

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyAuditConfig返回参数结构体
 */
export interface ModifyAuditConfigResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyDBInstanceName返回参数结构体
 */
export interface ModifyDBInstanceNameResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * VerifyRootAccount请求参数结构体
 */
export interface VerifyRootAccountRequest {
  /**
   * 实例 ID，格式如：cdb-c1nl9rpv，与云数据库控制台页面中显示的实例 ID 相同。
   */
  InstanceId: string

  /**
   * 实例 ROOT 账号的密码。
   */
  Password: string
}

/**
 * 数据库代理连接池规格配置
 */
export interface PoolConf {
  /**
      * 连接池类型：SessionConnectionPool（会话级别连接池
注意：此字段可能返回 null，表示取不到有效值。
      */
  ConnectionPoolType: string

  /**
      * 最大可保持连接阈值：单位（秒）
注意：此字段可能返回 null，表示取不到有效值。
      */
  MaxPoolConnectionTimeOut: number

  /**
      * 最小可保持连接阈值：单位（秒）
注意：此字段可能返回 null，表示取不到有效值。
      */
  MinPoolConnectionTimeOut: number
}

/**
 * DescribeCloneList返回参数结构体
 */
export interface DescribeCloneListResponse {
  /**
   * 满足条件的条目数。
   */
  TotalCount: number

  /**
   * 克隆任务列表。
   */
  Items: Array<CloneItem>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * StartBatchRollback请求参数结构体
 */
export interface StartBatchRollbackRequest {
  /**
   * 用于回档的实例详情信息。
   */
  Instances: Array<RollbackInstancesInfo>
}

/**
 * DescribeDBInstanceCharset请求参数结构体
 */
export interface DescribeDBInstanceCharsetRequest {
  /**
   * 实例 ID，格式如：cdb-c1nl9rpv，与云数据库控制台页面中显示的实例 ID 相同，可使用 [查询实例列表](https://cloud.tencent.com/document/api/236/15872) 接口获取，其值为输出参数中字段 InstanceId 的值。
   */
  InstanceId: string
}

/**
 * 实例所在物理机内存监控信息
 */
export interface DeviceMemInfo {
  /**
   * 总内存大小。free命令中Mem:一行total的值,单位：KB
   */
  Total: Array<number>

  /**
   * 已使用内存。free命令中Mem:一行used的值,单位：KB
   */
  Used: Array<number>
}

/**
 * UpgradeDBInstanceEngineVersion请求参数结构体
 */
export interface UpgradeDBInstanceEngineVersionRequest {
  /**
   * 实例 ID，格式如：cdb-c1nl9rpv 或者 cdbro-c1nl9rpv。与云数据库控制台页面中显示的实例 ID 相同，可使用 [查询实例列表](https://cloud.tencent.com/document/api/236/15872) 接口获取，其值为输出参数中字段 InstanceId 的值。
   */
  InstanceId: string

  /**
   * 主实例数据库引擎版本，支持值包括：5.6 和 5.7。
   */
  EngineVersion: string

  /**
   * 切换访问新实例的方式，默认为 0。支持值包括：0 - 立刻切换，1 - 时间窗切换；当该值为 1 时，升级中过程中，切换访问新实例的流程将会在时间窗内进行，或者用户主动调用接口 [切换访问新实例](https://cloud.tencent.com/document/product/236/15864) 触发该流程。
   */
  WaitSwitch?: number

  /**
   * 是否是内核子版本升级，支持的值：1 - 升级内核子版本；0 - 升级数据库引擎版本。
   */
  UpgradeSubversion?: number

  /**
   * 延迟阈值。取值范围1~10
   */
  MaxDelayTime?: number
}

/**
 * 结构化的慢日志详情
 */
export interface SlowLogItem {
  /**
      * Sql的执行时间。
注意：此字段可能返回 null，表示取不到有效值。
      */
  Timestamp: number

  /**
      * Sql的执行时长（秒）。
注意：此字段可能返回 null，表示取不到有效值。
      */
  QueryTime: number

  /**
      * Sql语句。
注意：此字段可能返回 null，表示取不到有效值。
      */
  SqlText: string

  /**
      * 客户端地址。
注意：此字段可能返回 null，表示取不到有效值。
      */
  UserHost: string

  /**
      * 用户名。
注意：此字段可能返回 null，表示取不到有效值。
      */
  UserName: string

  /**
      * 数据库名。
注意：此字段可能返回 null，表示取不到有效值。
      */
  Database: string

  /**
      * 锁时长（秒）。
注意：此字段可能返回 null，表示取不到有效值。
      */
  LockTime: number

  /**
      * 扫描行数。
注意：此字段可能返回 null，表示取不到有效值。
      */
  RowsExamined: number

  /**
      * 结果集行数。
注意：此字段可能返回 null，表示取不到有效值。
      */
  RowsSent: number

  /**
      * Sql模板。
注意：此字段可能返回 null，表示取不到有效值。
      */
  SqlTemplate: string

  /**
      * Sql语句的md5。
注意：此字段可能返回 null，表示取不到有效值。
      */
  Md5: string
}

/**
 * 标签信息
 */
export interface TagInfo {
  /**
   * 标签键
   */
  TagKey: string

  /**
   * 标签值
   */
  TagValue: Array<string>
}

/**
 * DescribeDBInstances返回参数结构体
 */
export interface DescribeDBInstancesResponse {
  /**
   * 符合查询条件的实例总数。
   */
  TotalCount: number

  /**
   * 实例详细信息。
   */
  Items: Array<InstanceInfo>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyCDBProxy返回参数结构体
 */
export interface ModifyCDBProxyResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeBackupDownloadRestriction请求参数结构体
 */
export type DescribeBackupDownloadRestrictionRequest = null

/**
 * CreateDeployGroup请求参数结构体
 */
export interface CreateDeployGroupRequest {
  /**
   * 置放群组名称，最长不能超过60个字符。
   */
  DeployGroupName: string

  /**
   * 置放群组描述，最长不能超过200个字符。
   */
  Description?: string

  /**
   * 置放群组的亲和性策略，目前仅支持取值为1，策略1表示同台物理机上限制实例的个数。
   */
  Affinity?: Array<number>

  /**
   * 置放群组亲和性策略1中同台物理机上实例的限制个数。
   */
  LimitNum?: number

  /**
   * 置放群组机型属性，可选参数：SH12+SH02、TS85。
   */
  DevClass?: Array<string>
}

/**
 * DeleteAccounts请求参数结构体
 */
export interface DeleteAccountsRequest {
  /**
   * 实例 ID，格式如：cdb-c1nl9rpv，与云数据库控制台页面中显示的实例 ID 相同。
   */
  InstanceId: string

  /**
   * 云数据库账号。
   */
  Accounts: Array<Account>
}

/**
 * ReloadBalanceProxyNode请求参数结构体
 */
export interface ReloadBalanceProxyNodeRequest {
  /**
   * 代理组ID
   */
  ProxyGroupId: string
}

/**
 * DescribeAccounts返回参数结构体
 */
export interface DescribeAccountsResponse {
  /**
   * 符合查询条件的账号数量。
   */
  TotalCount: number

  /**
   * 符合查询条件的账号详细信息。
   */
  Items: Array<AccountInfo>

  /**
   * 用户可设置实例最大连接数。
   */
  MaxUserConnections: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 可回档时间范围
 */
export interface RollbackTimeRange {
  /**
   * 实例可回档开始时间，时间格式：2016-10-29 01:06:04
   */
  Begin: string

  /**
   * 实例可回档结束时间，时间格式：2016-11-02 11:44:47
   */
  End: string
}

/**
 * DescribeAuditLogFiles请求参数结构体
 */
export interface DescribeAuditLogFilesRequest {
  /**
   * 实例 ID，格式如：cdb-c1nl9rpv 或者 cdbro-c1nl9rpv，与云数据库控制台页面中显示的实例 ID 相同。
   */
  InstanceId: string

  /**
   * 分页大小参数。默认值为 20，最小值为 1，最大值为 100。
   */
  Limit?: number

  /**
   * 分页偏移量。
   */
  Offset?: number

  /**
   * 审计日志文件名。
   */
  FileName?: string
}

/**
 * ModifyBackupConfig请求参数结构体
 */
export interface ModifyBackupConfigRequest {
  /**
   * 实例 ID，格式如：cdb-c1nl9rpv。与云数据库控制台页面中显示的实例ID相同。
   */
  InstanceId: string

  /**
   * 备份文件的保留时间，单位为天。最小值为7天，最大值为1830天。
   */
  ExpireDays?: number

  /**
   * (将废弃，建议使用 BackupTimeWindow 参数) 备份时间范围，格式为：02:00-06:00，起点和终点时间目前限制为整点，目前可以选择的范围为： 00:00-12:00，02:00-06:00，06：00-10：00，10:00-14:00，14:00-18:00，18:00-22:00，22:00-02:00。
   */
  StartTime?: string

  /**
   * 自动备份方式，仅支持：physical - 物理冷备
   */
  BackupMethod?: string

  /**
   * binlog的保留时间，单位为天。最小值为7天，最大值为1830天。该值的设置不能大于备份文件的保留时间。
   */
  BinlogExpireDays?: number

  /**
   * 备份时间窗，比如要设置每周二和周日 10:00-14:00之间备份，该参数如下：{"Monday": "", "Tuesday": "10:00-14:00", "Wednesday": "", "Thursday": "", "Friday": "", "Saturday": "", "Sunday": "10:00-14:00"}    （注：可以设置一周的某几天备份，但是每天的备份时间需要设置为相同的时间段。 如果设置了该字段，将忽略StartTime字段的设置）
   */
  BackupTimeWindow?: CommonTimeWindow

  /**
   * 定期保留开关，off - 不开启定期保留策略，on - 开启定期保留策略，默认为off
   */
  EnableBackupPeriodSave?: string

  /**
   * 长期保留开关,该字段功能暂未上线，可忽略。off - 不开启长期保留策略，on - 开启长期保留策略，默认为off，如果开启，则BackupPeriodSaveDays，BackupPeriodSaveInterval，BackupPeriodSaveCount参数无效
   */
  EnableBackupPeriodLongTermSave?: string

  /**
   * 定期保留最长天数，最小值：90，最大值：3650，默认值：1080
   */
  BackupPeriodSaveDays?: number

  /**
   * 定期保留策略周期，可取值：weekly - 周，monthly - 月， quarterly - 季度，yearly - 年，默认为monthly
   */
  BackupPeriodSaveInterval?: string

  /**
   * 定期保留的备份数量，最小值为1，最大值不超过定期保留策略周期内常规备份个数，默认值为1
   */
  BackupPeriodSaveCount?: number

  /**
   * 定期保留策略周期起始日期，格式：YYYY-MM-dd HH:mm:ss
   */
  StartBackupPeriodSaveDate?: string
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

/**
 * 置放群组信息
 */
export interface DeployGroupInfo {
  /**
   * 置放群组 ID。
   */
  DeployGroupId: string

  /**
   * 置放群组名称。
   */
  DeployGroupName: string

  /**
   * 创建时间。
   */
  CreateTime: string

  /**
   * 置放群组实例配额，表示一个置放群组中可容纳的最大实例数目。
   */
  Quota: number

  /**
      * 置放群组亲和性策略，目前仅支持策略1，即在物理机纬度打散实例的分布。
注意：此字段可能返回 null，表示取不到有效值。
      */
  Affinity: string

  /**
      * 置放群组亲和性策略1中，同台物理机上同个置放群组实例的限制个数。
注意：此字段可能返回 null，表示取不到有效值。
      */
  LimitNum: number

  /**
   * 置放群组详细信息。
   */
  Description: string

  /**
      * 置放群组物理机型属性。
注意：此字段可能返回 null，表示取不到有效值。
      */
  DevClass: string
}

/**
 * 本地binlog保留配置
 */
export interface LocalBinlogConfig {
  /**
   * 本地binlog保留时长，可取值范围：[72,168]。
   */
  SaveHours: number

  /**
   * 本地binlog空间使用率，可取值范围：[30,50]。
   */
  MaxUsage: number
}

/**
 * InquiryPriceUpgradeInstances返回参数结构体
 */
export interface InquiryPriceUpgradeInstancesResponse {
  /**
   * 实例价格，单位：分（人民币）。
   */
  Price?: number

  /**
   * 实例原价，单位：分（人民币）。
   */
  OriginalPrice?: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateDBInstance请求参数结构体
 */
export interface CreateDBInstanceRequest {
  /**
   * 实例内存大小，单位：MB，请使用 [获取云数据库可售卖规格](https://cloud.tencent.com/document/api/236/17229) 接口获取可创建的内存规格。
   */
  Memory: number

  /**
   * 实例硬盘大小，单位：GB，请使用 [获取云数据库可售卖规格](https://cloud.tencent.com/document/api/236/17229) 接口获取可创建的硬盘范围。
   */
  Volume: number

  /**
   * 实例时长，单位：月，可选值包括 [1,2,3,4,5,6,7,8,9,10,11,12,24,36]。
   */
  Period: number

  /**
   * 实例数量，默认值为1, 最小值1，最大值为100。
   */
  GoodsNum: number

  /**
   * 可用区信息，该参数缺省时，系统会自动选择一个可用区，请使用 [获取云数据库可售卖规格](https://cloud.tencent.com/document/api/236/17229) 接口获取可创建的可用区。
   */
  Zone?: string

  /**
   * 私有网络 ID，如果不传则默认选择基础网络，请使用 [查询私有网络列表](/document/api/215/15778) 。
   */
  UniqVpcId?: string

  /**
   * 私有网络下的子网 ID，如果设置了 UniqVpcId，则 UniqSubnetId 必填，请使用 [查询子网列表](/document/api/215/15784)。
   */
  UniqSubnetId?: string

  /**
   * 项目 ID，不填为默认项目。请使用 [查询项目列表](https://cloud.tencent.com/document/product/378/4400) 接口获取项目 ID。购买只读实例和灾备实例时，项目 ID 默认和主实例保持一致。
   */
  ProjectId?: number

  /**
   * 自定义端口，端口支持范围：[ 1024-65535 ]。
   */
  Port?: number

  /**
   * 实例类型，默认为 master，支持值包括：master - 表示主实例，dr - 表示灾备实例，ro - 表示只读实例。
   */
  InstanceRole?: string

  /**
   * 实例 ID，购买只读实例时必填，该字段表示只读实例的主实例ID，请使用 [查询实例列表](https://cloud.tencent.com/document/api/236/15872) 接口查询云数据库实例 ID。
   */
  MasterInstanceId?: string

  /**
   * MySQL 版本，值包括：5.5、5.6 和 5.7，请使用 [获取云数据库可售卖规格](https://cloud.tencent.com/document/api/236/17229) 接口获取可创建的实例版本。
   */
  EngineVersion?: string

  /**
   * 设置 root 帐号密码，密码规则：8 - 64 个字符，至少包含字母、数字、字符（支持的字符：_+-&=!@#$%^*()）中的两种，购买主实例时可指定该参数，购买只读实例或者灾备实例时指定该参数无意义。
   */
  Password?: string

  /**
   * 数据复制方式，默认为 0，支持值包括：0 - 表示异步复制，1 - 表示半同步复制，2 - 表示强同步复制。
   */
  ProtectMode?: number

  /**
   * 多可用区域，默认为 0，支持值包括：0 - 表示单可用区，1 - 表示多可用区。
   */
  DeployMode?: number

  /**
   * 备库 1 的可用区信息，默认为 Zone 的值。
   */
  SlaveZone?: string

  /**
   * 参数列表，参数格式如 ParamList.0.Name=auto_increment&ParamList.0.Value=1。可通过 [查询默认的可设置参数列表](https://cloud.tencent.com/document/api/236/32662) 查询支持设置的参数。
   */
  ParamList?: Array<ParamInfo>

  /**
   * 备库 2 的可用区信息，默认为空，购买三节点主实例时可指定该参数。
   */
  BackupZone?: string

  /**
   * 自动续费标记，可选值为：0 - 不自动续费；1 - 自动续费。
   */
  AutoRenewFlag?: number

  /**
   * 主实例地域信息，购买灾备实例时，该字段必填。
   */
  MasterRegion?: string

  /**
   * 安全组参数，可使用 [查询项目安全组信息](https://cloud.tencent.com/document/api/236/15850) 接口查询某个项目的安全组详情。
   */
  SecurityGroup?: Array<string>

  /**
   * 只读实例参数。购买只读实例时，该参数必传。
   */
  RoGroup?: RoGroup

  /**
   * 实例名称。
   */
  InstanceName?: string

  /**
   * 实例标签信息。
   */
  ResourceTags?: Array<TagInfo>

  /**
   * 置放群组 ID。
   */
  DeployGroupId?: string

  /**
   * 用于保证请求幂等性的字符串。该字符串由客户生成，需保证不同请求之间在48小时内唯一，最大值不超过64个ASCII字符。若不指定该参数，则无法保证请求的幂等性。
   */
  ClientToken?: string

  /**
   * 实例隔离类型。支持值包括： "UNIVERSAL" - 通用型实例， "EXCLUSIVE" - 独享型实例， "BASIC" - 基础版实例。 不指定则默认为通用型实例。
   */
  DeviceType?: string

  /**
   * 参数模板id。
   */
  ParamTemplateId?: number

  /**
   * 告警策略id数组。
   */
  AlarmPolicyList?: Array<number>

  /**
   * 实例节点数。对于 RO 和 基础版实例， 该值默认为1。 如果需要购买三节点实例， 请将该值设置为3 或指定 BackupZone 参数。当购买主实例，且未指定该参数和 BackupZone 参数时，该值默认是 2， 即购买两节点实例。
   */
  InstanceNodes?: number

  /**
   * 实例cpu核数， 如果不传将根据memory指定的内存值自动填充对应的cpu值。
   */
  Cpu?: number

  /**
   * 是否自动发起灾备同步功能。该参数仅对购买灾备实例生效。 可选值为：0 - 不自动发起灾备同步；1 - 自动发起灾备同步。该值默认为0。
   */
  AutoSyncFlag?: number

  /**
   * 金融围拢 ID。
   */
  CageId?: string

  /**
   * 默认参数模板类型。支持值包括："HIGH_STABILITY" - 高稳定模板，"HIGH_PERFORMANCE" - 高性能模板。
   */
  ParamTemplateType?: string

  /**
   * 告警策略名数组，例如:["policy-uyoee9wg"]，AlarmPolicyList不为空时该参数无效。
   */
  AlarmPolicyIdList?: Array<string>

  /**
   * 是否只预检此次请求。true：发送检查请求，不会创建实例。检查项包括是否填写了必需参数，请求格式，业务限制等。如果检查不通过，则返回对应错误码；如果检查通过，则返回RequestId.默认为false：发送正常请求，通过检查后直接创建实例。
   */
  DryRun?: boolean

  /**
   * 指定实例的IP列表。仅支持主实例指定，按实例顺序，不足则按未指定处理。
   */
  Vips?: Array<string>
}

/**
 * DescribeProxyConnectionPoolConf请求参数结构体
 */
export interface DescribeProxyConnectionPoolConfRequest {
  /**
   * 实例ID
   */
  InstanceId: string

  /**
   * 分页查询偏移量
   */
  Offset?: number

  /**
   * 分页查询限制
   */
  Limit?: number
}

/**
 * DescribeParamTemplates请求参数结构体
 */
export interface DescribeParamTemplatesRequest {
  /**
   * 引擎版本，缺省则查询所有
   */
  EngineVersions?: Array<string>
}

/**
 * DescribeAccountPrivileges返回参数结构体
 */
export interface DescribeAccountPrivilegesResponse {
  /**
   * 全局权限数组。
   */
  GlobalPrivileges?: Array<string>

  /**
   * 数据库权限数组。
   */
  DatabasePrivileges?: Array<DatabasePrivilege>

  /**
   * 数据库中的表权限数组。
   */
  TablePrivileges?: Array<TablePrivilege>

  /**
   * 数据库表中的列权限数组。
   */
  ColumnPrivileges?: Array<ColumnPrivilege>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeBackupConfig请求参数结构体
 */
export interface DescribeBackupConfigRequest {
  /**
   * 实例 ID，格式如：cdb-c1nl9rpv。与云数据库控制台页面中显示的实例 ID 相同。
   */
  InstanceId: string
}

/**
 * 只读vip信息
 */
export interface RoVipInfo {
  /**
   * 只读vip状态
   */
  RoVipStatus: number

  /**
   * 只读vip的子网
   */
  RoSubnetId: number

  /**
   * 只读vip的私有网络
   */
  RoVpcId: number

  /**
   * 只读vip的端口号
   */
  RoVport: number

  /**
   * 只读vip
   */
  RoVip: string
}

/**
 * DescribeAccounts请求参数结构体
 */
export interface DescribeAccountsRequest {
  /**
   * 实例 ID，格式如：cdb-c1nl9rpv，与云数据库控制台页面中显示的实例 ID 相同。
   */
  InstanceId: string

  /**
   * 记录偏移量，默认值为0。
   */
  Offset?: number

  /**
   * 单次请求返回的数量，默认值为20，最小值为1，最大值为100。
   */
  Limit?: number

  /**
   * 匹配账号名的正则表达式，规则同 MySQL 官网。
   */
  AccountRegexp?: string
}

/**
 * DescribeErrorLogData请求参数结构体
 */
export interface DescribeErrorLogDataRequest {
  /**
   * 实例 ID 。
   */
  InstanceId: string

  /**
   * 开始时间戳。
   */
  StartTime: number

  /**
   * 结束时间戳。
   */
  EndTime: number

  /**
   * 要匹配的关键字列表，最多支持15个关键字。
   */
  KeyWords?: Array<string>

  /**
   * 分页的返回数量，默认为100，最大为400。
   */
  Limit?: number

  /**
   * 偏移量，默认为0。
   */
  Offset?: number

  /**
   * 仅在实例为主实例或者灾备实例时生效，可选值：slave，代表拉取从机的日志。
   */
  InstType?: string
}

/**
 * DescribeAuditLogFiles返回参数结构体
 */
export interface DescribeAuditLogFilesResponse {
  /**
   * 符合条件的审计日志文件个数。
   */
  TotalCount?: number

  /**
   * 审计日志文件详情。
   */
  Items?: Array<AuditLogFile>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDBInstanceRebootTime请求参数结构体
 */
export interface DescribeDBInstanceRebootTimeRequest {
  /**
   * 实例的 ID，格式如：cdb-c1nl9rpv，与云数据库控制台页面中显示的实例 ID 相同。
   */
  InstanceIds: Array<string>
}

/**
 * 安全组入站规则
 */
export interface Inbound {
  /**
   * 策略，ACCEPT 或者 DROP
   */
  Action?: string

  /**
   * 来源 IP 或 IP 段，例如192.168.0.0/16
   */
  CidrIp?: string

  /**
   * 端口
   */
  PortRange?: string

  /**
   * 网络协议，支持 UDP、TCP 等
   */
  IpProtocol?: string

  /**
   * 规则限定的方向，进站规则为 INPUT
   */
  Dir?: string

  /**
   * 规则描述
   */
  Desc: string
}

/**
 * CreateAccounts返回参数结构体
 */
export interface CreateAccountsResponse {
  /**
   * 异步任务的请求 ID，可使用此 ID 查询异步任务的执行结果。
   */
  AsyncRequestId: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateDeployGroup返回参数结构体
 */
export interface CreateDeployGroupResponse {
  /**
   * 置放群组ID。
   */
  DeployGroupId: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 售卖配置详情
 */
export interface SellConfig {
  /**
   * 设备类型（废弃）
   */
  Device?: string

  /**
   * 售卖规格描述（废弃）
   */
  Type: string

  /**
   * 实例类型（废弃）
   */
  CdbType: string

  /**
   * 内存大小，单位为MB
   */
  Memory: number

  /**
   * CPU核心数
   */
  Cpu: number

  /**
   * 磁盘最小规格，单位为GB
   */
  VolumeMin: number

  /**
   * 磁盘最大规格，单位为GB
   */
  VolumeMax: number

  /**
   * 磁盘步长，单位为GB
   */
  VolumeStep: number

  /**
   * 链接数
   */
  Connection: number

  /**
   * 每秒查询数量
   */
  Qps: number

  /**
   * 每秒IO数量
   */
  Iops: number

  /**
   * 应用场景描述
   */
  Info: string

  /**
   * 状态值，0 表示该规格对外售卖
   */
  Status: number

  /**
   * 标签值（废弃）
   */
  Tag: number

  /**
      * 实例类型，可能的取值范围有：UNIVERSAL (通用型), EXCLUSIVE (独享型), BASIC (基础型)
注意：此字段可能返回 null，表示取不到有效值。
      */
  DeviceType: string

  /**
      * 实例类型描述，可能的取值范围有：通用型， 独享型， 基础型
注意：此字段可能返回 null，表示取不到有效值。
      */
  DeviceTypeName: string
}

/**
 * 主实例信息
 */
export interface MasterInfo {
  /**
   * 地域信息
   */
  Region: string

  /**
   * 地域ID
   */
  RegionId: number

  /**
   * 可用区ID
   */
  ZoneId: number

  /**
   * 可用区信息
   */
  Zone: string

  /**
   * 实例ID
   */
  InstanceId: string

  /**
   * 实例长ID
   */
  ResourceId: string

  /**
   * 实例状态
   */
  Status: number

  /**
   * 实例名称
   */
  InstanceName: string

  /**
   * 实例类型
   */
  InstanceType: number

  /**
   * 任务状态
   */
  TaskStatus: number

  /**
   * 内存容量
   */
  Memory: number

  /**
   * 硬盘容量
   */
  Volume: number

  /**
   * 实例机型
   */
  DeviceType: string

  /**
   * 每秒查询数
   */
  Qps: number

  /**
   * 私有网络ID
   */
  VpcId: number

  /**
   * 子网ID
   */
  SubnetId: number

  /**
   * 独享集群ID
   */
  ExClusterId: string

  /**
   * 独享集群名称
   */
  ExClusterName: string
}

/**
 * ResetRootAccount返回参数结构体
 */
export interface ResetRootAccountResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 代理节点信息
 */
export interface ProxyNodeInfo {
  /**
      * 代理节点ID
注意：此字段可能返回 null，表示取不到有效值。
      */
  ProxyNodeId: string

  /**
      * 节点当前连接数
注意：此字段可能返回 null，表示取不到有效值。
      */
  ProxyNodeConnections: number

  /**
      * cup
注意：此字段可能返回 null，表示取不到有效值。
      */
  ProxyNodeCpu: number

  /**
      * 内存
注意：此字段可能返回 null，表示取不到有效值。
      */
  ProxyNodeMem: number

  /**
      * 节点状态：
init（申请中）
online（运行中）
offline（离线中）
destroy（已销毁）
recovering（故障恢复中）
error（节点故障）
注意：此字段可能返回 null，表示取不到有效值。
      */
  ProxyStatus: string
}

/**
 * 数据库账号信息
 */
export interface Account {
  /**
   * 新账户的名称
   */
  User: string

  /**
   * 新账户的域名
   */
  Host: string
}

/**
 * ModifyNameOrDescByDpId返回参数结构体
 */
export interface ModifyNameOrDescByDpIdResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDBPrice返回参数结构体
 */
export interface DescribeDBPriceResponse {
  /**
   * 实例价格，单位：分（人民币）。
   */
  Price: number

  /**
   * 实例原价，单位：分（人民币）。
   */
  OriginalPrice: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 审计日志过滤条件。查询审计日志时，用户过滤返回的审计日志。
 */
export interface AuditLogFilter {
  /**
   * 客户端地址。
   */
  Host?: Array<string>

  /**
   * 用户名。
   */
  User?: Array<string>

  /**
   * 数据库名称。
   */
  DBName?: Array<string>

  /**
   * 表名称。
   */
  TableName?: Array<string>

  /**
   * 审计策略名称。
   */
  PolicyName?: Array<string>

  /**
   * SQL 语句。支持模糊匹配。
   */
  Sql?: string

  /**
   * SQL 类型。目前支持："SELECT", "INSERT", "UPDATE", "DELETE", "CREATE", "DROP", "ALTER", "SET", "REPLACE", "EXECUTE"。
   */
  SqlType?: string

  /**
   * 执行时间。单位为：ms。表示筛选执行时间大于该值的审计日志。
   */
  ExecTime?: number

  /**
   * 影响行数。表示筛选影响行数大于该值的审计日志。
   */
  AffectRows?: number

  /**
   * SQL 类型。支持多个类型同时查询。目前支持："SELECT", "INSERT", "UPDATE", "DELETE", "CREATE", "DROP", "ALTER", "SET", "REPLACE", "EXECUTE"。
   */
  SqlTypes?: Array<string>

  /**
   * SQL 语句。支持传递多个sql语句。
   */
  Sqls?: Array<string>
}

/**
 * 连接池信息
 */
export interface ConnectionPoolInfo {
  /**
      * 是否开启了连接池
注意：此字段可能返回 null，表示取不到有效值。
      */
  ConnectionPool: boolean

  /**
      * 连接池类型：SessionConnectionPool（会话级别连接池）
注意：此字段可能返回 null，表示取不到有效值。
      */
  ConnectionPoolType: string

  /**
      * 连接池保持阈值：单位（秒）
注意：此字段可能返回 null，表示取不到有效值。
      */
  PoolConnectionTimeOut: number
}

/**
 * OpenDBInstanceGTID返回参数结构体
 */
export interface OpenDBInstanceGTIDResponse {
  /**
   * 异步任务的请求 ID，可使用此 ID 查询异步任务的执行结果。
   */
  AsyncRequestId?: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * VerifyRootAccount返回参数结构体
 */
export interface VerifyRootAccountResponse {
  /**
   * 异步任务的请求 ID，可使用此 ID 查询异步任务的执行结果
   */
  AsyncRequestId?: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDBInstanceRebootTime返回参数结构体
 */
export interface DescribeDBInstanceRebootTimeResponse {
  /**
   * 符合查询条件的实例总数。
   */
  TotalCount?: number

  /**
   * 返回的参数信息。
   */
  Items?: Array<InstanceRebootTime>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * SwitchDrInstanceToMaster请求参数结构体
 */
export interface SwitchDrInstanceToMasterRequest {
  /**
   * 灾备实例ID，格式如：cdb-c1nl9rpv，与云数据库控制台页面中显示的实例ID相同。
   */
  InstanceId: string
}

/**
 * 只读组参数
 */
export interface RoGroup {
  /**
   * 只读组模式，可选值为：alone-系统自动分配只读组；allinone-新建只读组；join-使用现有只读组。
   */
  RoGroupMode: string

  /**
   * 只读组 ID。
   */
  RoGroupId?: string

  /**
   * 只读组名称。
   */
  RoGroupName?: string

  /**
   * 是否启用延迟超限剔除功能，启用该功能后，只读实例与主实例的延迟超过延迟阈值，只读实例将被隔离。可选值：1-启用；0-不启用。
   */
  RoOfflineDelay?: number

  /**
   * 延迟阈值。
   */
  RoMaxDelayTime?: number

  /**
   * 最少实例保留个数，若购买只读实例数量小于设置数量将不做剔除。
   */
  MinRoInGroup?: number

  /**
   * 读写权重分配模式，可选值：system-系统自动分配；custom-自定义。
   */
  WeightMode?: string

  /**
   * 权重值。
   */
  Weight?: number

  /**
   * 只读组中的只读实例详情。
   */
  RoInstances?: Array<RoInstanceInfo>

  /**
   * 只读组的内网 IP。
   */
  Vip?: string

  /**
   * 只读组的内网端口号。
   */
  Vport?: number

  /**
      * 私有网络 ID。
注意：此字段可能返回 null，表示取不到有效值。
      */
  UniqVpcId?: string

  /**
      * 子网 ID。
注意：此字段可能返回 null，表示取不到有效值。
      */
  UniqSubnetId?: string

  /**
      * 只读组所在的地域。
注意：此字段可能返回 null，表示取不到有效值。
      */
  RoGroupRegion?: string

  /**
      * 只读组所在的可用区。
注意：此字段可能返回 null，表示取不到有效值。
      */
  RoGroupZone?: string

  /**
      * 延迟复制时间。
注意：此字段可能返回 null，表示取不到有效值。
      */
  DelayReplicationTime?: number
}

/**
 * 实例参数的详细描述
 */
export interface ParameterDetail {
  /**
   * 参数名称
   */
  Name: string

  /**
   * 参数类型：integer，enum，float，string，func
   */
  ParamType: string

  /**
   * 参数默认值
   */
  Default: string

  /**
   * 参数描述
   */
  Description: string

  /**
   * 参数当前值
   */
  CurrentValue: string

  /**
   * 修改参数后，是否需要重启数据库以使参数生效。可能的值包括：0-不需要重启；1-需要重启
   */
  NeedReboot: number

  /**
   * 参数允许的最大值
   */
  Max: number

  /**
   * 参数允许的最小值
   */
  Min: number

  /**
   * 参数的可选枚举值。如果为非枚举参数，则为空
   */
  EnumValue: Array<string>

  /**
   * 参数是公式类型时，该字段有效，表示公式类型最大值
   */
  MaxFunc: string

  /**
   * 参数是公式类型时，该字段有效，表示公式类型最小值
   */
  MinFunc: string
}

/**
 * ModifyCDBProxyVipVPort返回参数结构体
 */
export interface ModifyCDBProxyVipVPortResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * SwitchForUpgrade请求参数结构体
 */
export interface SwitchForUpgradeRequest {
  /**
   * 实例 ID，格式如：cdb-c1nl9rpv，与云数据库控制台页面中显示的实例 ID 相同。
   */
  InstanceId: string
}

/**
 * CreateDBInstanceHour返回参数结构体
 */
export interface CreateDBInstanceHourResponse {
  /**
   * 短订单 ID。
   */
  DealIds: Array<string>

  /**
   * 实例 ID 列表。
   */
  InstanceIds: Array<string>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeBackupDownloadRestriction返回参数结构体
 */
export interface DescribeBackupDownloadRestrictionResponse {
  /**
   * NoLimit 不限制,内外网都可以下载； LimitOnlyIntranet 仅内网可下载； Customize 用户自定义vpc:ip可下载。 只有该值为 Customize 时， LimitVpc 和 LimitIp 才有意义。
   */
  LimitType: string

  /**
   * 该参数仅支持 In， 表示 LimitVpc 指定的vpc可以下载。
   */
  VpcComparisonSymbol: string

  /**
   * In: 指定的ip可以下载； NotIn: 指定的ip不可以下载。
   */
  IpComparisonSymbol: string

  /**
   * 限制下载的vpc设置。
   */
  LimitVpc: Array<BackupLimitVpcItem>

  /**
   * 限制下载的ip设置。
   */
  LimitIp: Array<string>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 数据库名以及字符集
 */
export interface DatabasesWithCharacterLists {
  /**
   * 数据库名
   */
  DatabaseName: string

  /**
   * 字符集类型
   */
  CharacterSet: string
}

/**
 * 克隆任务记录。
 */
export interface CloneItem {
  /**
   * 克隆任务的源实例Id。
   */
  SrcInstanceId: string

  /**
   * 克隆任务的新产生实例Id。
   */
  DstInstanceId: string

  /**
   * 克隆任务对应的任务列表Id。
   */
  CloneJobId: number

  /**
   * 克隆实例使用的策略， 包括以下类型：  timepoint:指定时间点回档，  backupset: 指定备份文件回档。
   */
  RollbackStrategy: string

  /**
   * 克隆实例回档的时间点。
   */
  RollbackTargetTime: string

  /**
   * 任务开始时间。
   */
  StartTime: string

  /**
   * 任务结束时间。
   */
  EndTime: string

  /**
   * 任务状态，包括以下状态：initial,running,wait_complete,success,failed
   */
  TaskStatus: string
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
 * CreateAccounts请求参数结构体
 */
export interface CreateAccountsRequest {
  /**
   * 实例 ID，格式如：cdb-c1nl9rpv，与云数据库控制台页面中显示的实例 ID 相同。
   */
  InstanceId: string

  /**
   * 云数据库账号。
   */
  Accounts: Array<Account>

  /**
   * 新账户的密码。
   */
  Password: string

  /**
   * 备注信息。
   */
  Description?: string

  /**
   * 新账户最大可用连接数，默认值为10240，最大可设置值为10240。
   */
  MaxUserConnections?: number
}

/**
 * DescribeDeployGroupList请求参数结构体
 */
export interface DescribeDeployGroupListRequest {
  /**
   * 置放群组 ID。
   */
  DeployGroupId?: string

  /**
   * 置放群组名称。
   */
  DeployGroupName?: string

  /**
   * 返回数量，默认为20，最大值为100。
   */
  Limit?: number

  /**
   * 偏移量，默认为0。
   */
  Offset?: number
}

/**
 * 备份详细信息
 */
export interface BackupInfo {
  /**
   * 备份文件名
   */
  Name: string

  /**
   * 备份文件大小，单位：Byte
   */
  Size: number

  /**
   * 备份快照时间，时间格式：2016-03-17 02:10:37
   */
  Date: string

  /**
   * 下载地址
   */
  IntranetUrl: string

  /**
   * 下载地址
   */
  InternetUrl: string

  /**
   * 日志具体类型。可能的值有 "logical": 逻辑冷备， "physical": 物理冷备。
   */
  Type: string

  /**
   * 备份子任务的ID，删除备份文件时使用
   */
  BackupId: number

  /**
   * 备份任务状态。可能的值有 "SUCCESS": 备份成功， "FAILED": 备份失败， "RUNNING": 备份进行中。
   */
  Status: string

  /**
   * 备份任务的完成时间
   */
  FinishTime: string

  /**
   * （该值将废弃，不建议使用）备份的创建者，可能的值：SYSTEM - 系统创建，Uin - 发起者Uin值。
   */
  Creator: string

  /**
   * 备份任务的开始时间
   */
  StartTime: string

  /**
   * 备份方法。可能的值有 "full": 全量备份， "partial": 部分备份。
   */
  Method: string

  /**
   * 备份方式。可能的值有 "manual": 手动备份， "automatic": 自动备份。
   */
  Way: string

  /**
   * 手动备份别名
   */
  ManualBackupName: string

  /**
   * 备份保留类型，save_mode_regular - 常规保存备份，save_mode_period - 定期保存备份
   */
  SaveMode: string
}

/**
 * CloseWanService返回参数结构体
 */
export interface CloseWanServiceResponse {
  /**
   * 异步任务的请求 ID，可使用此 ID 查询异步任务的执行结果。
   */
  AsyncRequestId?: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 实例权重
 */
export type RoWeight = null

/**
 * RenewDBInstance请求参数结构体
 */
export interface RenewDBInstanceRequest {
  /**
   * 待续费的实例 ID，格式如：cdb-c1nl9rpv，与云数据库控制台页面中显示的实例 ID 相同，可使用 [查询实例列表](https://cloud.tencent.com/document/api/236/15872)。
   */
  InstanceId: string

  /**
   * 续费时长，单位：月，可选值包括 [1,2,3,4,5,6,7,8,9,10,11,12,24,36]。
   */
  TimeSpan: number

  /**
   * 如果需要将按量计费实例续费为包年包月的实例，该入参的值需要指定为 "PREPAID" 。
   */
  ModifyPayType?: string
}

/**
 * 用于回档的数据库表名
 */
export interface RollbackTableName {
  /**
      * 回档前的原数据库表名
注意：此字段可能返回 null，表示取不到有效值。
      */
  TableName: string

  /**
      * 回档后的新数据库表名
注意：此字段可能返回 null，表示取不到有效值。
      */
  NewTableName: string
}

/**
 * ModifyLocalBinlogConfig返回参数结构体
 */
export interface ModifyLocalBinlogConfigResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeCloneList请求参数结构体
 */
export interface DescribeCloneListRequest {
  /**
   * 查询指定源实例的克隆任务列表。
   */
  InstanceId: string

  /**
   * 分页查询时的偏移量，默认值为0。
   */
  Offset?: number

  /**
   * 分页查询时的每页条目数，默认值为20。
   */
  Limit?: number
}

/**
 * ModifyInstanceTag请求参数结构体
 */
export interface ModifyInstanceTagRequest {
  /**
   * 实例 ID。
   */
  InstanceId: string

  /**
   * 要增加或修改的标签。
   */
  ReplaceTags?: Array<TagInfo>

  /**
   * 要删除的标签。
   */
  DeleteTags?: Array<TagInfo>
}

/**
 * ModifyAutoRenewFlag返回参数结构体
 */
export interface ModifyAutoRenewFlagResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 回档任务详情
 */
export interface RollbackTask {
  /**
   * 任务执行信息描述。
   */
  Info: string

  /**
   * 任务执行结果。可能的取值：INITIAL - 初始化，RUNNING - 运行中，SUCCESS - 执行成功，FAILED - 执行失败，KILLED - 已终止，REMOVED - 已删除，PAUSED - 终止中。
   */
  Status: string

  /**
   * 任务执行进度。取值范围为[0, 100]。
   */
  Progress: number

  /**
   * 任务开始时间。
   */
  StartTime: string

  /**
   * 任务结束时间。
   */
  EndTime: string

  /**
      * 回档任务详情。
注意：此字段可能返回 null，表示取不到有效值。
      */
  Detail: Array<RollbackInstancesInfo>
}

/**
 * ReloadBalanceProxyNode返回参数结构体
 */
export interface ReloadBalanceProxyNodeResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeTimeWindow请求参数结构体
 */
export interface DescribeTimeWindowRequest {
  /**
   * 实例ID，格式如：cdb-c1nl9rpv或者cdbro-c1nl9rpv，与云数据库控制台页面中显示的实例ID相同。
   */
  InstanceId: string
}

/**
 * DescribeDBImportRecords返回参数结构体
 */
export interface DescribeDBImportRecordsResponse {
  /**
   * 符合查询条件的导入任务操作日志总数。
   */
  TotalCount?: number

  /**
   * 返回的导入操作记录列表。
   */
  Items?: Array<ImportRecord>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeBackupDatabases返回参数结构体
 */
export interface DescribeBackupDatabasesResponse {
  /**
   * 返回的数据个数。
   */
  TotalCount?: number

  /**
   * 符合查询条件的数据库数组。
   */
  Items?: Array<DatabaseName>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 创建备份时，指定需要备份的库表信息
 */
export interface BackupItem {
  /**
   * 需要备份的库名
   */
  Db: string

  /**
   * 需要备份的表名。 如果传该参数，表示备份该库中的指定表。如果不传该参数则备份该db库
   */
  Table?: string
}

/**
 * 审计规则过滤条件
 */
export interface AuditFilter {
  /**
      * 过滤条件参数名称。目前支持：
SrcIp – 客户端 IP；
User – 数据库账户；
DB – 数据库名称；
      */
  Type: string

  /**
      * 过滤条件匹配类型。目前支持：
INC – 包含；
EXC – 不包含；
EQ – 等于；
NEQ – 不等于；
      */
  Compare: string

  /**
   * 过滤条件匹配值。
   */
  Value: string
}

/**
 * DescribeRollbackTaskDetail请求参数结构体
 */
export interface DescribeRollbackTaskDetailRequest {
  /**
   * 实例 ID。与云数据库控制台页面中显示的实例 ID 相同，可使用 [查询实例列表](https://cloud.tencent.com/document/api/236/15872)。
   */
  InstanceId: string

  /**
   * 异步任务 ID。
   */
  AsyncRequestId?: string

  /**
   * 分页参数，每次请求返回的记录数。默认值为 20，最大值为 100。
   */
  Limit?: number

  /**
   * 分页偏移量。默认为 0。
   */
  Offset?: number
}

/**
 * DescribeBackupTables返回参数结构体
 */
export interface DescribeBackupTablesResponse {
  /**
   * 返回的数据个数。
   */
  TotalCount?: number

  /**
   * 符合条件的数据表数组。
   */
  Items?: Array<TableName>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyParamTemplate返回参数结构体
 */
export interface ModifyParamTemplateResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * BalanceRoGroupLoad返回参数结构体
 */
export interface BalanceRoGroupLoadResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 实例所在物理机网络监控信息
 */
export interface DeviceNetInfo {
  /**
   * tcp连接数
   */
  Conn: Array<number>

  /**
   * 网卡入包量，单位：个/秒
   */
  PackageIn: Array<number>

  /**
   * 网卡出包量，单位：个/秒
   */
  PackageOut: Array<number>

  /**
   * 入流量，单位：kbps
   */
  FlowIn: Array<number>

  /**
   * 出流量，单位：kbps
   */
  FlowOut: Array<number>
}

/**
 * ModifyDBInstanceVipVport返回参数结构体
 */
export interface ModifyDBInstanceVipVportResponse {
  /**
      * 异步任务ID。(该返回字段目前已废弃)
注意：此字段可能返回 null，表示取不到有效值。
      */
  AsyncRequestId: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeUploadedFiles请求参数结构体
 */
export interface DescribeUploadedFilesRequest {
  /**
   * 文件路径。该字段应填用户主账号的OwnerUin信息。
   */
  Path: string

  /**
   * 记录偏移量，默认值为0。
   */
  Offset?: number

  /**
   * 单次请求返回的数量，默认值为20。
   */
  Limit?: number
}

/**
 * 实例详细信息
 */
export interface InstanceInfo {
  /**
   * 外网状态，可能的返回值为：0-未开通外网；1-已开通外网；2-已关闭外网
   */
  WanStatus: number

  /**
   * 可用区信息
   */
  Zone: string

  /**
   * 初始化标志，可能的返回值为：0-未初始化；1-已初始化
   */
  InitFlag: number

  /**
      * 只读vip信息。单独开通只读实例访问的只读实例才有该字段
注意：此字段可能返回 null，表示取不到有效值。
      */
  RoVipInfo: RoVipInfo

  /**
   * 内存容量，单位为 MB
   */
  Memory: number

  /**
   * 实例状态，可能的返回值：0-创建中；1-运行中；4-隔离中；5-已隔离
   */
  Status: number

  /**
   * 私有网络 ID，例如：51102
   */
  VpcId: number

  /**
      * 备机信息
注意：此字段可能返回 null，表示取不到有效值。
      */
  SlaveInfo: SlaveInfo

  /**
   * 实例 ID
   */
  InstanceId: string

  /**
   * 硬盘容量，单位为 GB
   */
  Volume: number

  /**
   * 自动续费标志，可能的返回值：0-未开通自动续费；1-已开通自动续费；2-已关闭自动续费
   */
  AutoRenew: number

  /**
   * 数据复制方式。0 - 异步复制；1 - 半同步复制；2 - 强同步复制
   */
  ProtectMode: number

  /**
      * 只读组详细信息
注意：此字段可能返回 null，表示取不到有效值。
      */
  RoGroups: Array<RoGroup>

  /**
   * 子网 ID，例如：2333
   */
  SubnetId: number

  /**
   * 实例类型，可能的返回值：1-主实例；2-灾备实例；3-只读实例
   */
  InstanceType: number

  /**
   * 项目 ID
   */
  ProjectId: number

  /**
   * 地域信息
   */
  Region: string

  /**
   * 实例到期时间
   */
  DeadlineTime: string

  /**
   * 可用区部署方式。可能的值为：0 - 单可用区；1 - 多可用区
   */
  DeployMode: number

  /**
   * 实例任务状态。0 - 没有任务 ,1 - 升级中,2 - 数据导入中,3 - 开放Slave中,4 - 外网访问开通中,5 - 批量操作执行中,6 - 回档中,7 - 外网访问关闭中,8 - 密码修改中,9 - 实例名修改中,10 - 重启中,12 - 自建迁移中,13 - 删除库表中,14 - 灾备实例创建同步中,15 - 升级待切换,16 - 升级切换中,17 - 升级切换完成
   */
  TaskStatus: number

  /**
      * 主实例详细信息
注意：此字段可能返回 null，表示取不到有效值。
      */
  MasterInfo?: MasterInfo

  /**
   * 实例类型
   */
  DeviceType: string

  /**
   * 内核版本
   */
  EngineVersion: string

  /**
   * 实例名称
   */
  InstanceName: string

  /**
      * 灾备实例详细信息
注意：此字段可能返回 null，表示取不到有效值。
      */
  DrInfo: Array<DrInfo>

  /**
   * 外网域名
   */
  WanDomain: string

  /**
   * 外网端口号
   */
  WanPort: number

  /**
   * 付费类型，可能的返回值：0-包年包月；1-按量计费
   */
  PayType: number

  /**
   * 实例创建时间
   */
  CreateTime: string

  /**
   * 实例 IP
   */
  Vip: string

  /**
   * 端口号
   */
  Vport: number

  /**
   * 磁盘写入是否被锁定（实例数据写入量已经超过磁盘配额）。0 -未被锁定 1 -已被锁定
   */
  CdbError: number

  /**
   * 私有网络描述符，例如：“vpc-5v8wn9mg”
   */
  UniqVpcId: string

  /**
   * 子网描述符，例如：“subnet-1typ0s7d”
   */
  UniqSubnetId: string

  /**
   * 物理 ID
   */
  PhysicalId: string

  /**
   * 核心数
   */
  Cpu: number

  /**
   * 每秒查询数量
   */
  Qps: number

  /**
   * 可用区中文名称
   */
  ZoneName: string

  /**
      * 物理机型
注意：此字段可能返回 null，表示取不到有效值。
      */
  DeviceClass: string

  /**
      * 置放群组 ID
注意：此字段可能返回 null，表示取不到有效值。
      */
  DeployGroupId: string

  /**
      * 可用区 ID
注意：此字段可能返回 null，表示取不到有效值。
      */
  ZoneId: number

  /**
   * 节点数
   */
  InstanceNodes: number

  /**
      * 标签列表
注意：此字段可能返回 null，表示取不到有效值。
      */
  TagList: Array<TagInfoItem>
}

/**
 * DescribeDefaultParams返回参数结构体
 */
export interface DescribeDefaultParamsResponse {
  /**
   * 参数个数。
   */
  TotalCount: number

  /**
   * 参数详情。
   */
  Items: Array<ParameterDetail>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * SwitchCDBProxy请求参数结构体
 */
export interface SwitchCDBProxyRequest {
  /**
   * 实例ID
   */
  InstanceId: string

  /**
   * 数据库代理ID
   */
  ProxyGroupId: string
}

/**
 * DescribeTagsOfInstanceIds返回参数结构体
 */
export interface DescribeTagsOfInstanceIdsResponse {
  /**
   * 分页偏移量。
   */
  Offset?: number

  /**
   * 分页大小。
   */
  Limit?: number

  /**
   * 实例标签信息。
   */
  Rows?: Array<TagsInfoOfInstance>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDeployGroupList返回参数结构体
 */
export interface DescribeDeployGroupListResponse {
  /**
   * 符合条件的记录总数。
   */
  Total: number

  /**
      * 返回列表。
注意：此字段可能返回 null，表示取不到有效值。
      */
  Items: Array<DeployGroupInfo>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * OfflineIsolatedInstances返回参数结构体
 */
export interface OfflineIsolatedInstancesResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 数据库权限
 */
export interface DatabasePrivilege {
  /**
   * 权限信息
   */
  Privileges: Array<string>

  /**
   * 数据库名
   */
  Database: string
}

/**
 * DescribeAuditPolicies请求参数结构体
 */
export interface DescribeAuditPoliciesRequest {
  /**
   * 实例 ID，格式如：cdb-c1nl9rpv 或者 cdbro-c1nl9rpv，与云数据库控制台页面中显示的实例 ID 相同。
   */
  InstanceId?: string

  /**
   * 审计策略 ID。
   */
  PolicyId?: string

  /**
   * 审计策略名称。支持按审计策略名称进行模糊匹配查询。
   */
  PolicyName?: string

  /**
   * 分页大小参数。默认值为 20，最小值为 1，最大值为 100。
   */
  Limit?: number

  /**
   * 分页偏移量。
   */
  Offset?: number

  /**
      * 审计规则 ID。可使用该审计规则 ID 查询到其关联的审计策略。
注意，参数 RuleId，InstanceId，PolicyId，PolicyName 必须至少传一个。
      */
  RuleId?: string

  /**
   * 实例名称
   */
  InstanceName?: string
}

/**
 * DescribeDatabases返回参数结构体
 */
export interface DescribeDatabasesResponse {
  /**
   * 符合查询条件的实例总数。
   */
  TotalCount: number

  /**
   * 返回的实例信息。
   */
  Items: Array<string>

  /**
   * 数据库名以及字符集
   */
  DatabaseList: Array<DatabasesWithCharacterLists>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeRoGroups返回参数结构体
 */
export interface DescribeRoGroupsResponse {
  /**
   * RO组信息数组，一个实例可关联多个RO组。
   */
  RoGroups?: Array<RoGroup>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeAuditRules返回参数结构体
 */
export interface DescribeAuditRulesResponse {
  /**
   * 符合条件的审计规则个数。
   */
  TotalCount: number

  /**
      * 审计规则详情。
注意：此字段可能返回 null，表示取不到有效值。
      */
  Items: Array<AuditRule>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * RO实例的详细信息
 */
export interface RoInstanceInfo {
  /**
   * RO组对应的主实例的ID
   */
  MasterInstanceId: string

  /**
   * RO实例在RO组内的状态，可能的值：online-在线，offline-下线
   */
  RoStatus: string

  /**
   * RO实例在RO组内上一次下线的时间
   */
  OfflineTime: string

  /**
   * RO实例在RO组内的权重
   */
  Weight: number

  /**
   * RO实例所在区域名称，如ap-shanghai
   */
  Region: string

  /**
   * RO可用区的正式名称，如ap-shanghai-1
   */
  Zone: string

  /**
   * RO实例ID，格式如：cdbro-c1nl9rpv
   */
  InstanceId: string

  /**
   * RO实例状态，可能返回值：0-创建中，1-运行中，3-异地RO（仅在使用DescribeDBInstances查询主实例信息时，返回值中异地RO的状态恒等于3，其他场景下无此值），4-删除中
   */
  Status: number

  /**
   * 实例类型，可能返回值：1-主实例，2-灾备实例，3-只读实例
   */
  InstanceType: number

  /**
   * RO实例名称
   */
  InstanceName: string

  /**
   * 按量计费状态，可能的取值：1-正常，2-欠费
   */
  HourFeeStatus: number

  /**
   * RO实例任务状态，可能返回值：<br>0-没有任务<br>1-升级中<br>2-数据导入中<br>3-开放Slave中<br>4-外网访问开通中<br>5-批量操作执行中<br>6-回档中<br>7-外网访问关闭中<br>8-密码修改中<br>9-实例名修改中<br>10-重启中<br>12-自建迁移中<br>13-删除库表中<br>14-灾备实例创建同步中
   */
  TaskStatus: number

  /**
   * RO实例内存大小，单位：MB
   */
  Memory: number

  /**
   * RO实例硬盘大小，单位：GB
   */
  Volume: number

  /**
   * 每次查询数量
   */
  Qps: number

  /**
   * RO实例的内网IP地址
   */
  Vip: string

  /**
   * RO实例访问端口
   */
  Vport: number

  /**
   * RO实例所在私有网络ID
   */
  VpcId: number

  /**
   * RO实例所在私有网络子网ID
   */
  SubnetId: number

  /**
   * RO实例规格描述，目前可取值 CUSTOM
   */
  DeviceType: string

  /**
   * RO实例数据库引擎版本，可能返回值：5.1、5.5、5.6、5.7、8.0
   */
  EngineVersion: string

  /**
   * RO实例到期时间，时间格式：yyyy-mm-dd hh:mm:ss，如实例为按量计费模式，则此字段值为0000-00-00 00:00:00
   */
  DeadlineTime: string

  /**
   * RO实例计费类型，可能返回值：0-包年包月，1-按量计费，2-后付费月结
   */
  PayType: number
}

/**
 * ModifyAccountHost请求参数结构体
 */
export interface ModifyAccountHostRequest {
  /**
   * 实例 ID，格式如：cdb-c1nl9rpv，与云数据库控制台页面中显示的实例 ID 相同。
   */
  InstanceId: string

  /**
   * 账户的名称
   */
  User: string

  /**
   * 账户的旧主机
   */
  Host: string

  /**
   * 账户的新主机
   */
  NewHost: string
}

/**
 * CreateAuditLogFile请求参数结构体
 */
export interface CreateAuditLogFileRequest {
  /**
   * 实例 ID，格式如：cdb-c1nl9rpv 或者 cdbro-c1nl9rpv，与云数据库控制台页面中显示的实例 ID 相同。
   */
  InstanceId: string

  /**
   * 开始时间，格式为："2017-07-12 10:29:20"。
   */
  StartTime: string

  /**
   * 结束时间，格式为："2017-07-12 10:29:20"。
   */
  EndTime: string

  /**
   * 排序方式。支持值包括："ASC" - 升序，"DESC" - 降序。
   */
  Order?: string

  /**
      * 排序字段。支持值包括：
"timestamp" - 时间戳；
"affectRows" - 影响行数；
"execTime" - 执行时间。
      */
  OrderBy?: string

  /**
   * 过滤条件。可按设置的过滤条件过滤日志。
   */
  Filter?: AuditLogFilter
}

/**
 * CreateAuditRule请求参数结构体
 */
export interface CreateAuditRuleRequest {
  /**
   * 审计规则名称。
   */
  RuleName: string

  /**
   * 审计规则描述。
   */
  Description?: string

  /**
   * 审计规则过滤条件。若设置了过滤条件，则不会开启全审计。
   */
  RuleFilters?: Array<AuditFilter>

  /**
   * 是否开启全审计。支持值包括：false – 不开启全审计，true – 开启全审计。用户未设置审计规则过滤条件时，默认开启全审计。
   */
  AuditAll?: boolean
}

/**
 * 实例CPU平均使用率
 */
export interface DeviceCpuRateInfo {
  /**
   * Cpu核编号
   */
  CpuCore: number

  /**
   * Cpu使用率
   */
  Rate: Array<number>
}

/**
 * ModifyAccountPrivileges请求参数结构体
 */
export interface ModifyAccountPrivilegesRequest {
  /**
   * 实例 ID，格式如：cdb-c1nl9rpv，与云数据库控制台页面中显示的实例 ID 相同。
   */
  InstanceId: string

  /**
   * 数据库的账号，包括用户名和域名。
   */
  Accounts: Array<Account>

  /**
      * 全局权限。其中，GlobalPrivileges 中权限的可选值为："SELECT","INSERT","UPDATE","DELETE","CREATE", "PROCESS", "DROP","REFERENCES","INDEX","ALTER","SHOW DATABASES","CREATE TEMPORARY TABLES","LOCK TABLES","EXECUTE","CREATE VIEW","SHOW VIEW","CREATE ROUTINE","ALTER ROUTINE","EVENT","TRIGGER","CREATE USER","RELOAD","REPLICATION CLIENT","REPLICATION SLAVE","UPDATE"。
注意，ModifyAction为空时，不传该参数表示清除该权限。
      */
  GlobalPrivileges?: Array<string>

  /**
      * 数据库的权限。Privileges 权限的可选值为："SELECT","INSERT","UPDATE","DELETE","CREATE",	"DROP","REFERENCES","INDEX","ALTER","CREATE TEMPORARY TABLES","LOCK TABLES","EXECUTE","CREATE VIEW","SHOW VIEW","CREATE ROUTINE","ALTER ROUTINE","EVENT","TRIGGER"。
注意，ModifyAction为空时，不传该参数表示清除该权限。
      */
  DatabasePrivileges?: Array<DatabasePrivilege>

  /**
      * 数据库中表的权限。Privileges 权限的可选值为：权限的可选值为："SELECT","INSERT","UPDATE","DELETE","CREATE",	"DROP","REFERENCES","INDEX","ALTER","CREATE VIEW","SHOW VIEW", "TRIGGER"。
注意，ModifyAction为空时，不传该参数表示清除该权限。
      */
  TablePrivileges?: Array<TablePrivilege>

  /**
      * 数据库表中列的权限。Privileges 权限的可选值为："SELECT","INSERT","UPDATE","REFERENCES"。
注意，ModifyAction为空时，不传该参数表示清除该权限。
      */
  ColumnPrivileges?: Array<ColumnPrivilege>

  /**
   * 该参数不为空时，为批量修改权限。可选值为：grant - 授予权限，revoke - 回收权限。
   */
  ModifyAction?: string
}

/**
 * CreateBackup请求参数结构体
 */
export interface CreateBackupRequest {
  /**
   * 实例 ID，格式如：cdb-c1nl9rpv。与云数据库控制台页面中显示的实例 ID 相同。
   */
  InstanceId: string

  /**
   * 目标备份方法，可选的值：logical - 逻辑冷备，physical - 物理冷备。
   */
  BackupMethod: string

  /**
      * 需要备份的库表信息，如果不设置该参数，则默认整实例备份。在 BackupMethod=logical 逻辑备份中才可设置该参数。指定的库表必须存在，否则可能导致备份失败。
例：如果需要备份 db1 库的 tb1、tb2 表 和 db2 库。则该参数设置为 [{"Db": "db1", "Table": "tb1"}, {"Db": "db1", "Table": "tb2"}, {"Db": "db2"} ]。
      */
  BackupDBTableList?: Array<BackupItem>

  /**
   * 手动备份别名
   */
  ManualBackupName?: string
}

/**
 * 账号详细信息
 */
export interface AccountInfo {
  /**
   * 账号备注信息
   */
  Notes: string

  /**
   * 账号的域名
   */
  Host: string

  /**
   * 账号的名称
   */
  User: string

  /**
   * 账号信息修改时间
   */
  ModifyTime: string

  /**
   * 修改密码的时间
   */
  ModifyPasswordTime: string

  /**
   * 该值已废弃
   */
  CreateTime: string

  /**
   * 用户最大可用实例连接数
   */
  MaxUserConnections: number
}

/**
 * ModifyCDBProxyDesc返回参数结构体
 */
export interface ModifyCDBProxyDescResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyDBInstanceVipVport请求参数结构体
 */
export interface ModifyDBInstanceVipVportRequest {
  /**
   * 实例 ID，格式如：cdb-c1nl9rpv 或者 cdbro-c2nl9rpv 或者 cdbrg-c3nl9rpv，与云数据库控制台页面中显示的实例 ID 相同，可使用 [查询实例列表](https://cloud.tencent.com/document/api/236/15872) 接口获取，其值为输出参数中字段 InstanceId 的值。
   */
  InstanceId: string

  /**
   * 目标 IP。该参数和 DstPort 参数，两者必传一个。
   */
  DstIp?: string

  /**
   * 目标端口，支持范围为：[1024-65535]。该参数和 DstIp 参数，两者必传一个。
   */
  DstPort?: number

  /**
   * 私有网络统一 ID。
   */
  UniqVpcId?: string

  /**
   * 子网统一 ID。
   */
  UniqSubnetId?: string

  /**
   * 进行基础网络转 VPC 网络和 VPC 网络下的子网变更时，原网络中旧IP的回收时间，单位为小时，取值范围为0-168，默认值为24小时。
   */
  ReleaseDuration?: number
}

/**
 * DescribeDBImportRecords请求参数结构体
 */
export interface DescribeDBImportRecordsRequest {
  /**
   * 实例 ID，格式如：cdb-c1nl9rpv，与云数据库控制台页面中显示的实例 ID 相同。
   */
  InstanceId: string

  /**
   * 开始时间，时间格式如：2016-01-01 00:00:01。
   */
  StartTime?: string

  /**
   * 结束时间，时间格式如：2016-01-01 23:59:59。
   */
  EndTime?: string

  /**
   * 分页参数，偏移量，默认值为0。
   */
  Offset?: number

  /**
   * 分页参数，单次请求返回的数量，默认值为20，最小值为1，最大值为100。
   */
  Limit?: number
}

/**
 * CreateDBImportJob返回参数结构体
 */
export interface CreateDBImportJobResponse {
  /**
   * 异步任务的请求 ID，可使用此 ID 查询异步任务的执行结果。
   */
  AsyncRequestId: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeTagsOfInstanceIds请求参数结构体
 */
export interface DescribeTagsOfInstanceIdsRequest {
  /**
   * 实例列表。
   */
  InstanceIds: Array<string>

  /**
   * 分页偏移量。
   */
  Offset?: number

  /**
   * 分页大小。
   */
  Limit?: number
}

/**
 * proxy读写分离信息
 */
export interface RWInfos {
  /**
      * 代理实例数量
注意：此字段可能返回 null，表示取不到有效值。
      */
  InstCount: number

  /**
      * 权重分配模式；
系统自动分配："system"， 自定义："custom"
注意：此字段可能返回 null，表示取不到有效值。
      */
  WeightMode: string

  /**
      * 是否开启延迟剔除
注意：此字段可能返回 null，表示取不到有效值。
      */
  IsKickOut: boolean

  /**
      * 最小保留数
注意：此字段可能返回 null，表示取不到有效值。
      */
  MinCount: number

  /**
      * 延迟剔除阈值
注意：此字段可能返回 null，表示取不到有效值。
      */
  MaxDelay: number

  /**
      * 是否开启故障转移
注意：此字段可能返回 null，表示取不到有效值。
      */
  FailOver: boolean

  /**
      * 是否自动添加RO
注意：此字段可能返回 null，表示取不到有效值。
      */
  AutoAddRo: boolean

  /**
      * 代理实例信息
注意：此字段可能返回 null，表示取不到有效值。
      */
  RWInstInfo: Array<RWInstanceInfo>
}

/**
 * CloseCDBProxy返回参数结构体
 */
export interface CloseCDBProxyResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDataBackupOverview请求参数结构体
 */
export interface DescribeDataBackupOverviewRequest {
  /**
   * 需要查询的云数据库产品类型，目前仅支持 "mysql"。
   */
  Product: string
}

/**
 * DescribeDBInstanceInfo请求参数结构体
 */
export interface DescribeDBInstanceInfoRequest {
  /**
   * 实例 ID 。
   */
  InstanceId: string
}

/**
 * 备份文件限制下载来源VPC设置项
 */
export interface BackupLimitVpcItem {
  /**
   * 限制下载来源的地域。目前仅支持当前地域。
   */
  Region: string

  /**
   * 限制下载的vpc列表。
   */
  VpcList: Array<string>
}

/**
 * DescribeDBZoneConfig返回参数结构体
 */
export interface DescribeDBZoneConfigResponse {
  /**
   * 可售卖地域配置数量
   */
  TotalCount?: number

  /**
   * 可售卖地域配置详情
   */
  Items?: Array<RegionSellConf>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyDBInstanceProject请求参数结构体
 */
export interface ModifyDBInstanceProjectRequest {
  /**
   * 实例 ID 数组，格式如：cdb-c1nl9rpv，与云数据库控制台页面中显示的实例 ID 相同，可使用 [查询实例列表](https://cloud.tencent.com/document/api/236/15872) 接口获取，其值为输出参数中字段 InstanceId 的值。
   */
  InstanceIds: Array<string>

  /**
   * 项目的 ID。
   */
  NewProjectId?: number
}

/**
 * SwitchForUpgrade返回参数结构体
 */
export interface SwitchForUpgradeResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeCDBProxy请求参数结构体
 */
export interface DescribeCDBProxyRequest {
  /**
   * 实例ID
   */
  InstanceId: string

  /**
   * 代理组ID
   */
  ProxyGroupId?: string
}

/**
 * DescribeAccountPrivileges请求参数结构体
 */
export interface DescribeAccountPrivilegesRequest {
  /**
   * 实例 ID，格式如：cdb-c1nl9rpv，与云数据库控制台页面中显示的实例 ID 相同。
   */
  InstanceId: string

  /**
   * 数据库的账号名称。
   */
  User: string

  /**
   * 数据库的账号域名。
   */
  Host: string
}

/**
 * DescribeSupportedPrivileges返回参数结构体
 */
export interface DescribeSupportedPrivilegesResponse {
  /**
   * 实例支持的全局权限。
   */
  GlobalSupportedPrivileges?: Array<string>

  /**
   * 实例支持的数据库权限。
   */
  DatabaseSupportedPrivileges?: Array<string>

  /**
   * 实例支持的数据库表权限。
   */
  TableSupportedPrivileges?: Array<string>

  /**
   * 实例支持的数据库列权限。
   */
  ColumnSupportedPrivileges?: Array<string>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * StopDBImportJob请求参数结构体
 */
export interface StopDBImportJobRequest {
  /**
   * 异步任务的请求 ID。
   */
  AsyncRequestId: string
}

/**
 * DescribeLocalBinlogConfig返回参数结构体
 */
export interface DescribeLocalBinlogConfigResponse {
  /**
   * 实例binlog保留策略。
   */
  LocalBinlogConfig: LocalBinlogConfig

  /**
   * 该地域默认binlog保留策略。
   */
  LocalBinlogConfigDefault: LocalBinlogConfigDefault

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * OpenWanService返回参数结构体
 */
export interface OpenWanServiceResponse {
  /**
   * 异步任务的请求 ID，可使用此 ID 查询异步任务的执行结果。
   */
  AsyncRequestId?: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDBInstanceGTID请求参数结构体
 */
export interface DescribeDBInstanceGTIDRequest {
  /**
   * 实例 ID，格式如：cdb-c1nl9rpv，与云数据库控制台页面中显示的实例 ID 相同，可使用 [查询实例列表](https://cloud.tencent.com/document/api/236/15872) 接口获取，其值为输出参数中字段 InstanceId 的值。
   */
  InstanceId: string
}

/**
 * ModifyCDBProxy请求参数结构体
 */
export interface ModifyCDBProxyRequest {
  /**
   * 数据库代理组唯一ID
   */
  ProxyGroupId: string

  /**
   * 是否开始延迟剔除，默认false，取值："true" | "false"
   */
  IsKickout?: boolean

  /**
   * 最少保留数，最小为0，最大为实例数量
   */
  MinCount?: number

  /**
   * 延迟剔除的阈值；如果IsKickOut="true", 该字段必填
   */
  MaxDelay?: number

  /**
   * 读写权重分配模式；系统自动分配："system"， 自定义："custom"
   */
  WeightMode?: string

  /**
   * 实例只读权重
   */
  RoWeightValues?: RoWeight

  /**
   * 是否开启故障转移，代理出现故障后，连接地址将路由到主实例，默认false，取值："true" | "false"
   */
  FailOver?: boolean

  /**
   * 是否自动添加只读实例，默认false，取值："true" | "false"
   */
  AutoAddRo?: boolean
}

/**
 * ModifyAuditConfig请求参数结构体
 */
export interface ModifyAuditConfigRequest {
  /**
   * 实例 ID。
   */
  InstanceId: string

  /**
      * 审计日志保存时长。支持值包括：
7 - 一周
30 - 一个月；
180 - 六个月；
365 - 一年；
1095 - 三年；
1825 - 五年；
      */
  LogExpireDay?: number

  /**
      * 是否关闭审计服务。可选值：true - 关闭审计服务；false - 不关闭审计服务。默认值为 false。
当关闭审计服务时，会删除用户的审计日志和文件，并删除该实例的所有审计策略。
CloseAudit、LogExpireDay必须至少提供一个，如果两个都提供则按照CloseAudit优先的逻辑处理。
      */
  CloseAudit?: boolean
}

/**
 * 实例磁盘监控数据
 */
export interface DeviceDiskInfo {
  /**
   * 平均每秒有百分之几的时间用于IO操作
   */
  IoRatioPerSec: Array<number>

  /**
   * 平均每次设备I/O操作的等待时间*100，单位为毫秒。例如：该值为201，表示平均每次I/O操作等待时间为：201/100=2.1毫秒
   */
  IoWaitTime: Array<number>

  /**
   * 磁盘平均每秒完成的读操作次数总和*100。例如：该值为2002，表示磁盘平均每秒完成读操作为：2002/100=20.2次
   */
  Read: Array<number>

  /**
   * 磁盘平均每秒完成的写操作次数总和*100。例如：该值为30001，表示磁盘平均每秒完成写操作为：30001/100=300.01次
   */
  Write: Array<number>

  /**
   * 磁盘空间容量，每两个一组，第一个为已使用容量，第二个为磁盘总容量
   */
  CapacityRatio: Array<number>
}

/**
 * RO 实例的权重值
 */
export interface RoWeightValue {
  /**
   * RO 实例 ID。
   */
  InstanceId: string

  /**
   * 权重值。取值范围为 [0, 100]。
   */
  Weight: number
}

/**
 * DescribeSlowLogData返回参数结构体
 */
export interface DescribeSlowLogDataResponse {
  /**
   * 符合条件的记录总数。
   */
  TotalCount: number

  /**
      * 查询到的记录。
注意：此字段可能返回 null，表示取不到有效值。
      */
  Items: Array<SlowLogItem>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * RestartDBInstances返回参数结构体
 */
export interface RestartDBInstancesResponse {
  /**
   * 异步任务的请求 ID，可使用此 ID 查询异步任务的执行结果。
   */
  AsyncRequestId?: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeSlowLogs请求参数结构体
 */
export interface DescribeSlowLogsRequest {
  /**
   * 实例 ID，格式如：cdb-c1nl9rpv。与云数据库控制台页面中显示的实例 ID 相同。
   */
  InstanceId: string

  /**
   * 偏移量，默认值为0，最小值为0。
   */
  Offset?: number

  /**
   * 分页大小，默认值为20，最小值为1，最大值为100。
   */
  Limit?: number
}

/**
 * 标签信息
 */
export interface TagInfoItem {
  /**
      * 标签键
注意：此字段可能返回 null，表示取不到有效值。
      */
  TagKey: string

  /**
      * 标签值
注意：此字段可能返回 null，表示取不到有效值。
      */
  TagValue: string
}

/**
 * DescribeProxyCustomConf请求参数结构体
 */
export interface DescribeProxyCustomConfRequest {
  /**
   * 实例ID
   */
  InstanceId: string

  /**
   * 分页
   */
  Offset?: number

  /**
   * 限制
   */
  Limit?: number
}

/**
 * DescribeDBSecurityGroups返回参数结构体
 */
export interface DescribeDBSecurityGroupsResponse {
  /**
   * 安全组详情。
   */
  Groups: Array<SecurityGroup>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyRoGroupInfo返回参数结构体
 */
export interface ModifyRoGroupInfoResponse {
  /**
      * 异步任务 ID。
注意：此字段可能返回 null，表示取不到有效值。
      */
  AsyncRequestId: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteAuditRule请求参数结构体
 */
export interface DeleteAuditRuleRequest {
  /**
   * 审计规则 ID。
   */
  RuleId: string
}

/**
 * DeleteParamTemplate返回参数结构体
 */
export interface DeleteParamTemplateResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 云数据库切换记录
 */
export interface DBSwitchInfo {
  /**
   * 切换时间，格式为：2017-09-03 01:34:31
   */
  SwitchTime: string

  /**
   * 切换类型，可能的返回值为：TRANSFER - 数据迁移；MASTER2SLAVE - 主备切换；RECOVERY - 主从恢复
   */
  SwitchType: string
}

/**
 * DescribeTasks返回参数结构体
 */
export interface DescribeTasksResponse {
  /**
   * 符合查询条件的实例总数。
   */
  TotalCount?: number

  /**
   * 返回的实例任务信息。
   */
  Items?: Array<TaskDetail>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeAuditPolicies返回参数结构体
 */
export interface DescribeAuditPoliciesResponse {
  /**
   * 符合条件的审计策略个数。
   */
  TotalCount: number

  /**
      * 审计策略详情。
注意：此字段可能返回 null，表示取不到有效值。
      */
  Items: Array<AuditPolicy>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * IsolateDBInstance返回参数结构体
 */
export interface IsolateDBInstanceResponse {
  /**
      * 异步任务的请求 ID，可使用此 ID 查询异步任务的执行结果。(该返回字段目前已废弃，可以通过 DescribeDBInstances 接口查询实例的隔离状态)
注意：此字段可能返回 null，表示取不到有效值。
      */
  AsyncRequestId?: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDBZoneConfig请求参数结构体
 */
export type DescribeDBZoneConfigRequest = null

/**
 * ModifyAccountDescription返回参数结构体
 */
export interface ModifyAccountDescriptionResponse {
  /**
   * 异步任务的请求 ID，可使用此 ID 查询异步任务的执行结果。
   */
  AsyncRequestId?: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 通用时间窗
 */
export interface CommonTimeWindow {
  /**
   * 周一的时间窗，格式如： 02:00-06:00
   */
  Monday?: string

  /**
   * 周二的时间窗，格式如： 02:00-06:00
   */
  Tuesday?: string

  /**
   * 周三的时间窗，格式如： 02:00-06:00
   */
  Wednesday?: string

  /**
   * 周四的时间窗，格式如： 02:00-06:00
   */
  Thursday?: string

  /**
   * 周五的时间窗，格式如： 02:00-06:00
   */
  Friday?: string

  /**
   * 周六的时间窗，格式如： 02:00-06:00
   */
  Saturday?: string

  /**
   * 周日的时间窗，格式如： 02:00-06:00
   */
  Sunday?: string
}

/**
 * ModifyAccountMaxUserConnections请求参数结构体
 */
export interface ModifyAccountMaxUserConnectionsRequest {
  /**
   * 云数据库账号。
   */
  Accounts: Array<Account>

  /**
   * 实例 ID，格式如：cdb-c1nl9rpv，与云数据库控制台页面中显示的实例 ID 相同。
   */
  InstanceId: string

  /**
   * 设置账户最大可用连接数，最大可设置值为10240。
   */
  MaxUserConnections: number
}

/**
 * 数据代理组信息
 */
export interface ProxyGroup {
  /**
      * 代理基本信息
注意：此字段可能返回 null，表示取不到有效值。
      */
  BaseGroup: BaseGroupInfo

  /**
      * 代理地址信息
注意：此字段可能返回 null，表示取不到有效值。
      */
  Address: Array<Address>

  /**
      * 代理连接池信息
注意：此字段可能返回 null，表示取不到有效值。
      */
  ConnectionPoolInfo: ConnectionPoolInfo

  /**
      * 代理节点信息
注意：此字段可能返回 null，表示取不到有效值。
      */
  ProxyNode: Array<ProxyNodeInfo>

  /**
      * 代理路由信息
注意：此字段可能返回 null，表示取不到有效值。
      */
  RWInstInfo: RWInfo
}

/**
 * DeleteDeployGroups返回参数结构体
 */
export interface DeleteDeployGroupsResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeTasks请求参数结构体
 */
export interface DescribeTasksRequest {
  /**
   * 实例 ID，格式如：cdb-c1nl9rpv，与云数据库控制台页面中显示的实例 ID 相同，可使用 [查询实例列表](https://cloud.tencent.com/document/api/236/15872) 接口获取，其值为输出参数中字段 InstanceId 的值。
   */
  InstanceId?: string

  /**
   * 异步任务请求 ID，执行云数据库相关操作返回的 AsyncRequestId。
   */
  AsyncRequestId?: string

  /**
      * 任务类型，不传值则查询所有任务类型，支持的值包括：
1 - 数据库回档；
2 - SQL操作；
3 - 数据导入；
5 - 参数设置；
6 - 初始化云数据库实例；
7 - 重启云数据库实例；
8 - 开启云数据库实例GTID；
9 - 只读实例升级；
10 - 数据库批量回档；
11 - 主实例升级；
12 - 删除云数据库库表；
13 - 灾备实例提升为主。
      */
  TaskTypes?: Array<number>

  /**
      * 任务状态，不传值则查询所有任务状态，支持的值包括：
-1 - 未定义；
0 - 初始化；
1 - 运行中；
2 - 执行成功；
3 - 执行失败；
4 - 已终止；
5 - 已删除；
6 - 已暂停。
      */
  TaskStatus?: Array<number>

  /**
   * 第一个任务的开始时间，用于范围查询，时间格式如：2017-12-31 10:40:01。
   */
  StartTimeBegin?: string

  /**
   * 最后一个任务的开始时间，用于范围查询，时间格式如：2017-12-31 10:40:01。
   */
  StartTimeEnd?: string

  /**
   * 记录偏移量，默认值为0。
   */
  Offset?: number

  /**
   * 单次请求返回的数量，默认值为20，最大值为100。
   */
  Limit?: number
}

/**
 * DescribeRollbackTaskDetail返回参数结构体
 */
export interface DescribeRollbackTaskDetailResponse {
  /**
   * 符合条件的记录总数。
   */
  TotalCount?: number

  /**
      * 回档任务详情。
注意：此字段可能返回 null，表示取不到有效值。
      */
  Items?: Array<RollbackTask>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateDBInstanceHour请求参数结构体
 */
export interface CreateDBInstanceHourRequest {
  /**
   * 实例数量，默认值为 1，最小值 1，最大值为 100。
   */
  GoodsNum: number

  /**
   * 实例内存大小，单位：MB，请使用 [获取云数据库可售卖规格](https://cloud.tencent.com/document/api/236/17229) 接口获取可创建的内存规格。
   */
  Memory: number

  /**
   * 实例硬盘大小，单位：GB，请使用 [获取云数据库可售卖规格](https://cloud.tencent.com/document/api/236/17229) 接口获取可创建的硬盘范围。
   */
  Volume: number

  /**
   * MySQL 版本，值包括：5.5、5.6 、5.7 、8.0，请使用 [获取云数据库可售卖规格](https://cloud.tencent.com/document/api/236/17229) 接口获取可创建的实例版本。
   */
  EngineVersion?: string

  /**
   * 私有网络 ID，如果不传则默认选择基础网络，请使用 [查询私有网络列表](/document/api/215/15778) 。
   */
  UniqVpcId?: string

  /**
   * 私有网络下的子网 ID，如果设置了 UniqVpcId，则 UniqSubnetId 必填，请使用[查询子网列表](/document/api/215/15784)。
   */
  UniqSubnetId?: string

  /**
   * 项目 ID，不填为默认项目。请使用 [查询项目列表](https://cloud.tencent.com/document/product/378/4400) 接口获取项目 ID。
   */
  ProjectId?: number

  /**
   * 可用区信息，该参数缺省时，系统会自动选择一个可用区，请使用 [获取云数据库可售卖规格](https://cloud.tencent.com/document/api/236/17229) 接口获取可创建的可用区。
   */
  Zone?: string

  /**
   * 实例 ID，购买只读实例或者灾备实例时必填，该字段表示只读实例或者灾备实例的主实例 ID，请使用 [查询实例列表](https://cloud.tencent.com/document/api/236/15872) 接口查询云数据库实例 ID。
   */
  MasterInstanceId?: string

  /**
   * 实例类型，默认为 master，支持值包括：master - 表示主实例，dr - 表示灾备实例，ro - 表示只读实例。
   */
  InstanceRole?: string

  /**
   * 主实例的可用区信息，购买灾备实例时必填。
   */
  MasterRegion?: string

  /**
   * 自定义端口，端口支持范围：[ 1024-65535 ] 。
   */
  Port?: number

  /**
   * 设置 root 帐号密码，密码规则：8 - 64 个字符，至少包含字母、数字、字符（支持的字符：_+-&=!@#$%^*()）中的两种，购买主实例时可指定该参数，购买只读实例或者灾备实例时指定该参数无意义。
   */
  Password?: string

  /**
   * 参数列表，参数格式如 ParamList.0.Name=auto_increment&ParamList.0.Value=1。可通过 [查询默认的可设置参数列表](https://cloud.tencent.com/document/api/236/32662) 查询支持设置的参数。
   */
  ParamList?: Array<ParamInfo>

  /**
   * 数据复制方式，默认为 0，支持值包括：0 - 表示异步复制，1 - 表示半同步复制，2 - 表示强同步复制，购买主实例时可指定该参数，购买只读实例或者灾备实例时指定该参数无意义。
   */
  ProtectMode?: number

  /**
   * 多可用区域，默认为 0，支持值包括：0 - 表示单可用区，1 - 表示多可用区，购买主实例时可指定该参数，购买只读实例或者灾备实例时指定该参数无意义。
   */
  DeployMode?: number

  /**
   * 备库 1 的可用区信息，默认为 Zone 的值，购买主实例时可指定该参数，购买只读实例或者灾备实例时指定该参数无意义。
   */
  SlaveZone?: string

  /**
   * 备库 2 的可用区信息，默认为空，购买三节点主实例时可指定该参数。
   */
  BackupZone?: string

  /**
   * 安全组参数，可使用 [查询项目安全组信息](https://cloud.tencent.com/document/api/236/15850) 接口查询某个项目的安全组详情。
   */
  SecurityGroup?: Array<string>

  /**
   * 只读实例信息。购买只读实例时，该参数必传。
   */
  RoGroup?: RoGroup

  /**
   * 购买按量计费实例该字段无意义。
   */
  AutoRenewFlag?: number

  /**
   * 实例名称。
   */
  InstanceName?: string

  /**
   * 实例标签信息。
   */
  ResourceTags?: Array<TagInfo>

  /**
   * 置放群组 ID。
   */
  DeployGroupId?: string

  /**
   * 用于保证请求幂等性的字符串。该字符串由客户生成，需保证不同请求之间在48小时内唯一，最大值不超过64个ASCII字符。若不指定该参数，则无法保证请求的幂等性。
   */
  ClientToken?: string

  /**
   * 实例隔离类型。支持值包括： "UNIVERSAL" - 通用型实例， "EXCLUSIVE" - 独享型实例， "BASIC" - 基础版实例。 不指定则默认为通用型实例。
   */
  DeviceType?: string

  /**
   * 参数模板id。
   */
  ParamTemplateId?: number

  /**
   * 告警策略id数组。
   */
  AlarmPolicyList?: Array<number>

  /**
   * 实例节点数。对于 RO 和 基础版实例， 该值默认为1。 如果需要购买三节点实例， 请将该值设置为3 或指定 BackupZone 参数。当购买主实例，且未指定该参数和 BackupZone 参数时，该值默认是 2， 即购买两节点实例。
   */
  InstanceNodes?: number

  /**
   * 实例cpu核数， 如果不传将根据memory指定的内存值自动填充对应的cpu值。
   */
  Cpu?: number

  /**
   * 是否自动发起灾备同步功能。该参数仅对购买灾备实例生效。 可选值为：0 - 不自动发起灾备同步；1 - 自动发起灾备同步。该值默认为0。
   */
  AutoSyncFlag?: number

  /**
   * 金融围拢 ID 。
   */
  CageId?: string

  /**
   * 默认参数模板类型。支持值包括："HIGH_STABILITY" - 高稳定模板，"HIGH_PERFORMANCE" - 高性能模板，默认值是："HIGH_STABILITY"。
   */
  ParamTemplateType?: string

  /**
   * 告警策略名数组，例如:["policy-uyoee9wg"]，AlarmPolicyList不为空时该参数无效。
   */
  AlarmPolicyIdList?: Array<string>

  /**
   * 是否只预检此次请求。true：发送检查请求，不会创建实例。检查项包括是否填写了必需参数，请求格式，业务限制等。如果检查不通过，则返回对应错误码；如果检查通过，则返回RequestId.默认为false：发送正常请求，通过检查后直接创建实例。
   */
  DryRun?: boolean

  /**
   * 指定实例的IP列表。仅支持主实例指定，按实例顺序，不足则按未指定处理。
   */
  Vips?: Array<string>
}

/**
 * 用于回档的实例详情
 */
export interface RollbackInstancesInfo {
  /**
      * 云数据库实例ID
注意：此字段可能返回 null，表示取不到有效值。
      */
  InstanceId: string

  /**
   * 回档策略。可选值为：table、db、full；默认值为full。table - 极速回档模式，仅导入所选中表级别的备份和binlog，如有跨表操作，且关联表未被同时选中，将会导致回档失败，该模式下参数Databases必须为空；db - 快速模式，仅导入所选中库级别的备份和binlog，如有跨库操作，且关联库未被同时选中，将会导致回档失败；full - 普通回档模式，将导入整个实例的备份和binlog，速度较慢。
   */
  Strategy: string

  /**
   * 数据库回档时间，时间格式为：yyyy-mm-dd hh:mm:ss
   */
  RollbackTime: string

  /**
      * 待回档的数据库信息，表示整库回档
注意：此字段可能返回 null，表示取不到有效值。
      */
  Databases?: Array<RollbackDBName>

  /**
      * 待回档的数据库表信息，表示按表回档
注意：此字段可能返回 null，表示取不到有效值。
      */
  Tables?: Array<RollbackTables>
}

/**
 * CreateCloneInstance请求参数结构体
 */
export interface CreateCloneInstanceRequest {
  /**
   * 克隆源实例Id。
   */
  InstanceId: string

  /**
   * 如果需要克隆实例回档到指定时间，则指定该值。时间格式为： yyyy-mm-dd hh:mm:ss 。
   */
  SpecifiedRollbackTime?: string

  /**
   * 如果需要克隆实例回档到指定备份的时间点，则指定该值为物理备份的Id。请使用 [查询数据备份文件列表](/document/api/236/15842) 。
   */
  SpecifiedBackupId?: number

  /**
   * 私有网络 ID，如果不传则默认选择基础网络，请使用 [查询私有网络列表](/document/api/215/15778) 。
   */
  UniqVpcId?: string

  /**
   * 私有网络下的子网 ID，如果设置了 UniqVpcId，则 UniqSubnetId 必填，请使用 [查询子网列表](/document/api/215/15784)。
   */
  UniqSubnetId?: string

  /**
   * 实例内存大小，单位：MB，需要不低于克隆源实例，默认和源实例相同。
   */
  Memory?: number

  /**
   * 实例硬盘大小，单位：GB，需要不低于克隆源实例，默认和源实例相同。
   */
  Volume?: number

  /**
   * 新产生的克隆实例名称。
   */
  InstanceName?: string

  /**
   * 安全组参数，可使用 [查询项目安全组信息](https://cloud.tencent.com/document/api/236/15850) 接口查询某个项目的安全组详情。
   */
  SecurityGroup?: Array<string>

  /**
   * 实例标签信息。
   */
  ResourceTags?: Array<TagInfo>

  /**
   * 实例Cpu核数，需要不低于克隆源实例，默认和源实例相同。
   */
  Cpu?: number

  /**
   * 数据复制方式，默认为 0，支持值包括：0 - 表示异步复制，1 - 表示半同步复制，2 - 表示强同步复制。
   */
  ProtectMode?: number

  /**
   * 多可用区域，默认为 0，支持值包括：0 - 表示单可用区，1 - 表示多可用区。
   */
  DeployMode?: number

  /**
   * 新产生的克隆实例备库 1 的可用区信息，默认同源实例 Zone 的值。
   */
  SlaveZone?: string

  /**
   * 备库 2 的可用区信息，默认为空，克隆强同步主实例时可指定该参数。
   */
  BackupZone?: string

  /**
   * 克隆实例类型。支持值包括： "UNIVERSAL" - 通用型实例， "EXCLUSIVE" - 独享型实例。 不指定则默认为通用型。
   */
  DeviceType?: string

  /**
   * 新克隆实例节点数。如果需要克隆出三节点实例， 请将该值设置为3 或指定 BackupZone 参数。如果需要克隆出两节点实例，请将该值设置为2。默认克隆出两节点实例。
   */
  InstanceNodes?: number

  /**
   * 置放群组 ID。
   */
  DeployGroupId?: string

  /**
   * 是否只预检此次请求。true：发送检查请求，不会创建实例。检查项包括是否填写了必需参数，请求格式，业务限制等。如果检查不通过，则返回对应错误码；如果检查通过，则返回RequestId.默认为false：发送正常请求，通过检查后直接创建实例。
   */
  DryRun?: boolean

  /**
   * 金融围拢 ID 。
   */
  CageId?: string

  /**
   * 项目ID，默认项目ID0
   */
  ProjectId?: number
}

/**
 * CloseCDBProxy请求参数结构体
 */
export interface CloseCDBProxyRequest {
  /**
   * 实例ID
   */
  InstanceId: string

  /**
   * 代理组ID
   */
  ProxyGroupId: string

  /**
   * 是否只关闭读写分离，取值："true" | "false"，默认为"false"
   */
  OnlyCloseRW?: boolean
}

/**
 * DeleteBackup返回参数结构体
 */
export interface DeleteBackupResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeProjectSecurityGroups返回参数结构体
 */
export interface DescribeProjectSecurityGroupsResponse {
  /**
   * 安全组详情。
   */
  Groups: Array<SecurityGroup>

  /**
   * 安全组规则数量。
   */
  TotalCount: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeBackupSummaries请求参数结构体
 */
export interface DescribeBackupSummariesRequest {
  /**
   * 需要查询的云数据库产品类型，目前仅支持 "mysql"。
   */
  Product: string

  /**
   * 分页查询数据的偏移量，默认为0。
   */
  Offset?: number

  /**
   * 分页查询数据的条目限制，默认值为20。最小值为1，最大值为100。
   */
  Limit?: number

  /**
   * 指定按某一项排序，可选值包括： BackupVolume: 备份容量， DataBackupVolume: 数据备份容量， BinlogBackupVolume: 日志备份容量， AutoBackupVolume: 自动备份容量， ManualBackupVolume: 手动备份容量。默认按照BackupVolume排序。
   */
  OrderBy?: string

  /**
   * 指定排序方向，可选值包括： ASC: 正序， DESC: 逆序。默认值为 ASC。
   */
  OrderDirection?: string
}

/**
 * CreateDBInstance返回参数结构体
 */
export interface CreateDBInstanceResponse {
  /**
   * 短订单 ID。
   */
  DealIds: Array<string>

  /**
   * 实例 ID 列表。
   */
  InstanceIds: Array<string>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * StartReplication请求参数结构体
 */
export interface StartReplicationRequest {
  /**
   * 实例 ID。仅支持只读实例。
   */
  InstanceId: string
}

/**
 * DescribeDBInstanceCharset返回参数结构体
 */
export interface DescribeDBInstanceCharsetResponse {
  /**
   * 实例的默认字符集，如 "latin1"，"utf8" 等。
   */
  Charset?: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * UpgradeCDBProxy请求参数结构体
 */
export interface UpgradeCDBProxyRequest {
  /**
   * 实例ID
   */
  InstanceId: string

  /**
   * 数据库代理ID
   */
  ProxyGroupId: string

  /**
   * 代理节点个数
   */
  ProxyCount: number

  /**
   * 代理节点核数
   */
  Cpu: number

  /**
   * 代理节点内存大小
   */
  Mem: number

  /**
   * 重新负载均衡：auto（自动），manual（手动）
   */
  ReloadBalance: string

  /**
   * 升级时间 nowTime（升级完成时）timeWindow（实例维护时间）
   */
  UpgradeTime: string
}

/**
 * DescribeBackupSummaries返回参数结构体
 */
export interface DescribeBackupSummariesResponse {
  /**
   * 实例备份统计条目。
   */
  Items: Array<BackupSummaryItem>

  /**
   * 实例备份统计总条目数。
   */
  TotalCount: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeBinlogBackupOverview请求参数结构体
 */
export interface DescribeBinlogBackupOverviewRequest {
  /**
   * 需要查询的云数据库产品类型，目前仅支持 "mysql"。
   */
  Product: string
}

/**
 * ModifyDBInstanceSecurityGroups请求参数结构体
 */
export interface ModifyDBInstanceSecurityGroupsRequest {
  /**
   * 实例 ID，格式如：cdb-c1nl9rpv 或者 cdbro-c1nl9rpv，与云数据库控制台页面中显示的实例 ID 相同。
   */
  InstanceId: string

  /**
   * 要修改的安全组 ID 列表，一个或者多个安全组 ID 组成的数组。
   */
  SecurityGroupIds: Array<string>

  /**
   * 当传入只读实例ID时，默认操作的是对应只读组的安全组。如果需要操作只读实例ID的安全组， 需要将该入参置为True
   */
  ForReadonlyInstance?: boolean
}

/**
 * ModifyAccountMaxUserConnections返回参数结构体
 */
export interface ModifyAccountMaxUserConnectionsResponse {
  /**
   * 异步任务的请求 ID，可使用此 ID 查询异步任务的执行结果。
   */
  AsyncRequestId: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 安全组出站规则
 */
export interface Outbound {
  /**
   * 策略，ACCEPT 或者 DROP
   */
  Action?: string

  /**
   * 目的 IP 或 IP 段，例如172.16.0.0/12
   */
  CidrIp?: string

  /**
   * 端口或者端口范围
   */
  PortRange?: string

  /**
   * 网络协议，支持 UDP、TCP等
   */
  IpProtocol?: string

  /**
   * 规则限定的方向，进站规则为 OUTPUT
   */
  Dir?: string

  /**
   * 规则描述
   */
  Desc: string
}

/**
 * 实例参数信息
 */
export interface ParamInfo {
  /**
   * 参数名
   */
  Name: string

  /**
   * 参数值
   */
  Value: string
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
  Inbound: Array<Inbound>

  /**
   * 出站规则
   */
  Outbound: Array<Outbound>

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
 * DescribeProxyConnectionPoolConf返回参数结构体
 */
export interface DescribeProxyConnectionPoolConfResponse {
  /**
      * 配置规格数量
注意：此字段可能返回 null，表示取不到有效值。
      */
  Count: number

  /**
      * 连接池配置规格
注意：此字段可能返回 null，表示取不到有效值。
      */
  PoolConf: PoolConf

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * OfflineIsolatedInstances请求参数结构体
 */
export interface OfflineIsolatedInstancesRequest {
  /**
   * 实例 ID，格式如：cdb-c1nl9rpv，与云数据库控制台页面中显示的实例 ID 相同。
   */
  InstanceIds: Array<string>
}

/**
 * InquiryPriceUpgradeInstances请求参数结构体
 */
export interface InquiryPriceUpgradeInstancesRequest {
  /**
   * 实例 ID，格式如：cdb-c1nl9rpv 或者 cdbro-c1nl9rpv。与云数据库控制台页面中显示的实例 ID 相同，可使用 [查询实例列表](https://cloud.tencent.com/document/api/236/15872) 接口获取，其值为输出参数中字段 InstanceId 的值。
   */
  InstanceId: string

  /**
   * 升级后的内存大小，单位：MB，为保证传入 Memory 值有效，请使用 [获取云数据库可售卖规格](https://cloud.tencent.com/document/product/236/17229) 接口获取可升级的内存规格。
   */
  Memory: number

  /**
   * 升级后的硬盘大小，单位：GB，为保证传入 Volume 值有效，请使用 [获取云数据库可售卖规格](https://cloud.tencent.com/document/product/236/17229) 接口获取可升级的硬盘范围。
   */
  Volume: number

  /**
   * 升级后的核心数目，单位：核，为保证传入 CPU 值有效，请使用 [获取云数据库可售卖规格](https://cloud.tencent.com/document/product/236/17229) 接口获取可升级的核心数目，当未指定该值时，将按照 Memory 大小补全一个默认值。
   */
  Cpu?: number

  /**
   * 数据复制方式，支持值包括：0 - 异步复制，1 - 半同步复制，2 - 强同步复制，升级主实例时可指定该参数，升级只读实例或者灾备实例时指定该参数无意义。
   */
  ProtectMode?: number

  /**
   * 实例隔离类型。支持值包括： "UNIVERSAL" - 通用型实例， "EXCLUSIVE" - 独享型实例， "BASIC" - 基础版实例。 不指定则默认为通用型实例。
   */
  DeviceType?: string

  /**
   * 实例节点数。对于 RO 和 基础版实例， 该值默认为1。 如果需要询价三节点实例， 请将该值设置为3。其余主实例该值默认为2。
   */
  InstanceNodes?: number
}

/**
 * ModifyInstanceParam返回参数结构体
 */
export interface ModifyInstanceParamResponse {
  /**
   * 异步任务 ID，可用于查询任务进度。
   */
  AsyncRequestId?: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 列权限信息
 */
export interface ColumnPrivilege {
  /**
   * 数据库名
   */
  Database: string

  /**
   * 数据库表名
   */
  Table: string

  /**
   * 数据库列名
   */
  Column: string

  /**
   * 权限信息
   */
  Privileges: Array<string>
}

/**
 * DescribeUploadedFiles返回参数结构体
 */
export interface DescribeUploadedFilesResponse {
  /**
   * 符合查询条件的SQL文件总数。
   */
  TotalCount: number

  /**
   * 返回的SQL文件列表。
   */
  Items: Array<SqlFileInfo>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDBPrice请求参数结构体
 */
export interface DescribeDBPriceRequest {
  /**
   * 实例时长，单位：月，最小值 1，最大值为 36；查询按量计费价格时，该字段无效。
   */
  Period: number

  /**
   * 可用区信息，格式如 "ap-guangzhou-2"。具体能设置的值请通过 <a href="https://cloud.tencent.com/document/api/236/17229">DescribeDBZoneConfig</a> 接口查询。InstanceId为空时该参数为必填项。
   */
  Zone?: string

  /**
   * 实例数量，默认值为 1，最小值 1，最大值为 100。InstanceId为空时该参数为必填项。
   */
  GoodsNum?: number

  /**
   * 实例内存大小，单位：MB。InstanceId为空时该参数为必填项。
   */
  Memory?: number

  /**
   * 实例硬盘大小，单位：GB。InstanceId为空时该参数为必填项。
   */
  Volume?: number

  /**
   * 实例类型，默认为 master，支持值包括：master - 表示主实例，ro - 表示只读实例，dr - 表示灾备实例。InstanceId为空时该参数为必填项。
   */
  InstanceRole?: string

  /**
   * 付费类型，支持值包括：PRE_PAID - 包年包月，HOUR_PAID - 按量计费。InstanceId为空时该参数为必填项。
   */
  PayType?: string

  /**
   * 数据复制方式，默认为 0，支持值包括：0 - 表示异步复制，1 - 表示半同步复制，2 - 表示强同步复制。
   */
  ProtectMode?: number

  /**
   * 实例隔离类型。支持值包括： "UNIVERSAL" - 通用型实例， "EXCLUSIVE" - 独享型实例， "BASIC" - 基础版实例。 不指定则默认为通用型实例。
   */
  DeviceType?: string

  /**
   * 实例节点数。对于 RO 和 基础版实例， 该值默认为1。 如果需要询价三节点实例， 请将该值设置为3。其余主实例该值默认为2。
   */
  InstanceNodes?: number

  /**
   * 询价实例的CPU核心数目，单位：核，为保证传入 CPU 值有效，请使用 [获取云数据库可售卖规格](https://cloud.tencent.com/document/product/236/17229) 接口获取可售卖的核心数目，当未指定该值时，将按照 Memory 大小补全一个默认值。
   */
  Cpu?: number

  /**
   * 续费询价实例ID。如需查询实例续费价格，填写InstanceId和Period即可。
   */
  InstanceId?: string
}

/**
 * CreateBackup返回参数结构体
 */
export interface CreateBackupResponse {
  /**
   * 备份任务 ID。
   */
  BackupId: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * OpenDBInstanceGTID请求参数结构体
 */
export interface OpenDBInstanceGTIDRequest {
  /**
   * 实例 ID，格式如：cdb-c1nl9rpv，与云数据库控制台页面中显示的实例 ID 相同。
   */
  InstanceId: string
}

/**
 * sql文件信息
 */
export interface SqlFileInfo {
  /**
   * 上传时间
   */
  UploadTime: string

  /**
   * 上传进度
   */
  UploadInfo: UploadInfo

  /**
   * 文件名
   */
  FileName: string

  /**
   * 文件大小，单位为Bytes
   */
  FileSize: number

  /**
   * 上传是否完成标志，可选值：0 - 未完成，1 - 已完成
   */
  IsUploadFinished: number

  /**
   * 文件ID
   */
  FileId: string
}

/**
 * RO 组的配置信息
 */
export interface RoGroupAttr {
  /**
   * RO 组名称。
   */
  RoGroupName?: string

  /**
   * RO 实例最大延迟阈值。单位为秒，最小值为 1。注意，RO 组必须设置了开启实例延迟剔除策略，该值才有效。
   */
  RoMaxDelayTime?: number

  /**
   * 是否开启实例延迟剔除。支持的值包括：1 - 开启；0 - 不开启。注意，若设置开启实例延迟剔除，则必须设置延迟阈值（RoMaxDelayTime）参数。
   */
  RoOfflineDelay?: number

  /**
   * 最少保留实例数。可设置为小于或等于该 RO 组下 RO 实例个数的任意值。注意，若设置值大于 RO 实例数量将不做剔除；若设置为 0，所有实例延迟超限都会被剔除。
   */
  MinRoInGroup?: number

  /**
   * 权重模式。支持值包括："system" - 系统自动分配； "custom" - 用户自定义设置。注意，若设置 "custom" 模式，则必须设置 RO 实例权重配置（RoWeightValues）参数。
   */
  WeightMode?: string

  /**
   * 延迟复制时间。
   */
  ReplicationDelayTime?: number
}

/**
 * UpgradeCDBProxyVersion返回参数结构体
 */
export interface UpgradeCDBProxyVersionResponse {
  /**
      * 异步处理ID
注意：此字段可能返回 null，表示取不到有效值。
      */
  AsyncRequestId: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyAccountDescription请求参数结构体
 */
export interface ModifyAccountDescriptionRequest {
  /**
   * 实例 ID，格式如：cdb-c1nl9rpv，与云数据库控制台页面中显示的实例 ID 相同。
   */
  InstanceId: string

  /**
   * 云数据库账号。
   */
  Accounts: Array<Account>

  /**
   * 数据库账号的备注信息。
   */
  Description?: string
}

/**
 * ModifyAccountPassword请求参数结构体
 */
export interface ModifyAccountPasswordRequest {
  /**
   * 实例 ID，格式如：cdb-c1nl9rpv，与云数据库控制台页面中显示的实例 ID 相同。
   */
  InstanceId: string

  /**
   * 数据库账号的新密码。密码应至少包含字母、数字和字符（_+-&=!@#$%^*()）中的两种，长度为8-64个字符。
   */
  NewPassword: string

  /**
   * 云数据库账号。
   */
  Accounts: Array<Account>
}

/**
 * 实例预期重启时间
 */
export interface InstanceRebootTime {
  /**
   * 实例ID，格式如：cdb-c1nl9rpv，与云数据库控制台页面中显示的实例ID相同
   */
  InstanceId: string

  /**
   * 预期重启时间
   */
  TimeInSeconds: number
}

/**
 * RenewDBInstance返回参数结构体
 */
export interface RenewDBInstanceResponse {
  /**
   * 订单 ID。
   */
  DealId?: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 数据库表权限
 */
export interface TablePrivilege {
  /**
   * 数据库名
   */
  Database: string

  /**
   * 数据库表名
   */
  Table: string

  /**
   * 权限信息
   */
  Privileges: Array<string>
}

/**
 * AddTimeWindow返回参数结构体
 */
export interface AddTimeWindowResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * proxy代理组信息
 */
export interface BaseGroupInfo {
  /**
      * 代理组ID
注意：此字段可能返回 null，表示取不到有效值。
      */
  ProxyGroupId: string

  /**
      * 代理节点数
注意：此字段可能返回 null，表示取不到有效值。
      */
  NodeCount: number

  /**
      * 状态：发货中（init）运行中（online）下线中（offline）销毁中（destroy）
注意：此字段可能返回 null，表示取不到有效值。
      */
  Status: string

  /**
      * 地域
注意：此字段可能返回 null，表示取不到有效值。
      */
  Region: string

  /**
      * 可用区
注意：此字段可能返回 null，表示取不到有效值。
      */
  Zone: string

  /**
      * 是否开启读写分离
注意：此字段可能返回 null，表示取不到有效值。
      */
  OpenRW: boolean

  /**
      * 当前代理版本
注意：此字段可能返回 null，表示取不到有效值。
      */
  CurrentProxyVersion: string

  /**
      * 支持升级版本
注意：此字段可能返回 null，表示取不到有效值。
      */
  SupportUpgradeProxyVersion: string
}

/**
 * DeleteAuditRule返回参数结构体
 */
export interface DeleteAuditRuleResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * IsolateDBInstance请求参数结构体
 */
export interface IsolateDBInstanceRequest {
  /**
   * 实例 ID，格式如：cdb-c1nl9rpv，与云数据库控制台页面中显示的实例 ID 相同，可使用 [查询实例列表](https://cloud.tencent.com/document/api/236/15872) 接口获取，其值为输出参数中字段 InstanceId 的值。
   */
  InstanceId: string
}

/**
 * 审计日志文件
 */
export interface AuditLogFile {
  /**
   * 审计日志文件名称
   */
  FileName: string

  /**
   * 审计日志文件创建时间。格式为 : "2019-03-20 17:09:13"。
   */
  CreateTime: string

  /**
      * 文件状态值。可能返回的值为：
"creating" - 生成中;
"failed" - 创建失败;
"success" - 已生成;
      */
  Status: string

  /**
      * 文件大小，单位为 KB。
注意：此字段可能返回 null，表示取不到有效值。
      */
  FileSize: number

  /**
      * 审计日志下载地址。
注意：此字段可能返回 null，表示取不到有效值。
      */
  DownloadUrl: string

  /**
      * 错误信息。
注意：此字段可能返回 null，表示取不到有效值。
      */
  ErrMsg: string
}

/**
 * 用于回档的数据库表详情
 */
export interface RollbackTables {
  /**
      * 数据库名
注意：此字段可能返回 null，表示取不到有效值。
      */
  Database: string

  /**
      * 数据库表详情
注意：此字段可能返回 null，表示取不到有效值。
      */
  Table: Array<RollbackTableName>
}

/**
 * DescribeBackupDatabases请求参数结构体
 */
export interface DescribeBackupDatabasesRequest {
  /**
   * 实例 ID，格式如：cdb-c1nl9rpv。与云数据库控制台页面中显示的实例 ID 相同。
   */
  InstanceId: string

  /**
   * 开始时间，格式为：2017-07-12 10:29:20。
   */
  StartTime: string

  /**
   * 要查询的数据库名前缀。
   */
  SearchDatabase?: string

  /**
   * 分页偏移量。
   */
  Offset?: number

  /**
   * 分页大小，最小值为1，最大值为2000。
   */
  Limit?: number
}

/**
 * 本地binlog保留策略默认配置。
 */
export interface LocalBinlogConfigDefault {
  /**
   * 本地binlog保留时长，可取值范围：[72,168]。
   */
  SaveHours: number

  /**
   * 本地binlog空间使用率，可取值范围：[30,50]。
   */
  MaxUsage: number
}

/**
 * DescribeSlowLogData请求参数结构体
 */
export interface DescribeSlowLogDataRequest {
  /**
   * 实例 ID。
   */
  InstanceId: string

  /**
   * 开始时间戳。
   */
  StartTime: number

  /**
   * 结束时间戳。
   */
  EndTime: number

  /**
   * 客户端 Host 列表。
   */
  UserHosts?: Array<string>

  /**
   * 客户端 用户名 列表。
   */
  UserNames?: Array<string>

  /**
   * 访问的 数据库 列表。
   */
  DataBases?: Array<string>

  /**
   * 排序字段。当前支持：Timestamp,QueryTime,LockTime,RowsExamined,RowsSent 。
   */
  SortBy?: string

  /**
   * 升序还是降序排列。当前支持：ASC,DESC 。
   */
  OrderBy?: string

  /**
   * 偏移量，默认为0。
   */
  Offset?: number

  /**
   * 一次性返回的记录数量，默认为100，最大为400。
   */
  Limit?: number

  /**
   * 仅在实例为主实例或者灾备实例时生效，可选值：slave，代表拉取从机的日志。
   */
  InstType?: string
}

/**
 * ReleaseIsolatedDBInstances返回参数结构体
 */
export interface ReleaseIsolatedDBInstancesResponse {
  /**
   * 解隔离操作的结果集。
   */
  Items?: Array<ReleaseResult>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteAuditLogFile请求参数结构体
 */
export interface DeleteAuditLogFileRequest {
  /**
   * 审计日志文件名称。
   */
  FileName: string

  /**
   * 实例 ID。
   */
  InstanceId: string
}

/**
 * DescribeSlowLogs返回参数结构体
 */
export interface DescribeSlowLogsResponse {
  /**
   * 符合查询条件的慢查询日志总数。
   */
  TotalCount: number

  /**
   * 符合查询条件的慢查询日志详情。
   */
  Items: Array<SlowLogInfo>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteTimeWindow请求参数结构体
 */
export interface DeleteTimeWindowRequest {
  /**
   * 实例 ID，格式如：cdb-c1nl9rpv 或者 cdbro-c1nl9rpv，与云数据库控制台页面中显示的实例 ID 相同。
   */
  InstanceId: string
}

/**
 * SwitchCDBProxy返回参数结构体
 */
export interface SwitchCDBProxyResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * RestartDBInstances请求参数结构体
 */
export interface RestartDBInstancesRequest {
  /**
   * 实例 ID 数组，格式如：cdb-c1nl9rpv，与云数据库控制台页面中显示的实例 ID 相同。
   */
  InstanceIds: Array<string>
}

/**
 * DeleteBackup请求参数结构体
 */
export interface DeleteBackupRequest {
  /**
   * 实例 ID，格式如：cdb-c1nl9rpv。与云数据库控制台页面中显示的实例 ID 相同。
   */
  InstanceId: string

  /**
   * 备份任务 ID。该任务 ID 为 [创建云数据库备份](https://cloud.tencent.com/document/api/236/15844) 接口返回的任务 ID。
   */
  BackupId: number
}

/**
 * ModifyNameOrDescByDpId请求参数结构体
 */
export interface ModifyNameOrDescByDpIdRequest {
  /**
   * 置放群组 ID。
   */
  DeployGroupId: string

  /**
   * 置放群组名称，最长不能超过60个字符。置放群组名和置放群组描述不能都为空。
   */
  DeployGroupName?: string

  /**
   * 置放群组描述，最长不能超过200个字符。置放群组名和置放群组描述不能都为空。
   */
  Description?: string
}

/**
 * UpgradeDBInstance返回参数结构体
 */
export interface UpgradeDBInstanceResponse {
  /**
   * 订单 ID。
   */
  DealIds: Array<string>

  /**
   * 异步任务的请求 ID，可使用此 ID 查询异步任务的执行结果。
   */
  AsyncRequestId: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * UpgradeCDBProxyVersion请求参数结构体
 */
export interface UpgradeCDBProxyVersionRequest {
  /**
   * 实例ID
   */
  InstanceId: string

  /**
   * 数据库代理ID
   */
  ProxyGroupId: string

  /**
   * 数据库代理当前版本
   */
  SrcProxyVersion: string

  /**
   * 数据库代理升级版本
   */
  DstProxyVersion: string

  /**
   * 升级时间 ：nowTime（升级完成时）timeWindow（实例维护时间）
   */
  UpgradeTime: string
}
