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
 * 实例任务详情
 */
export interface TaskDetail {
  /**
   * 错误码。0代表成功，其他对应不同的报错场景。
   */
  Code?: number
  /**
   * 错误信息。
   */
  Message?: string
  /**
   * 实例任务 ID。
   */
  JobId?: number
  /**
   * 实例任务进度。
   */
  Progress?: number
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
  TaskStatus?: string
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
  TaskType?: string
  /**
   * 实例任务开始时间。
   */
  StartTime?: string
  /**
   * 实例任务结束时间。
   */
  EndTime?: string
  /**
   * 任务关联的实例 ID。
   */
  InstanceIds?: Array<string>
  /**
   * 异步任务的请求 ID。
   */
  AsyncRequestId?: string
  /**
   * 任务的附加信息。
   */
  TaskAttachInfo?: Array<TaskAttachInfo>
}

/**
 * DescribeTableColumns返回参数结构体
 */
export interface DescribeTableColumnsResponse {
  /**
   * 符合查询条件的实例总数。
   */
  TotalCount?: number
  /**
   * 返回的数据库列信息。
   */
  Items?: Array<string>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 可用区售卖配置
 */
export interface CdbZoneSellConf {
  /**
   * 可用区状态。可能的返回值为：1-上线；3-停售；4-不展示
   */
  Status?: number
  /**
   * 可用区中文名称
   */
  ZoneName?: string
  /**
   * 实例类型是否为自定义类型
   */
  IsCustom?: boolean
  /**
   * 是否支持灾备
   */
  IsSupportDr?: boolean
  /**
   * 是否支持私有网络
   */
  IsSupportVpc?: boolean
  /**
   * 小时计费实例最大售卖数量
   */
  HourInstanceSaleMaxNum?: number
  /**
   * 是否为默认可用区
   */
  IsDefaultZone?: boolean
  /**
   * 是否为黑石区
   */
  IsBm?: boolean
  /**
   * 支持的付费类型。可能的返回值为：0-包年包月；1-小时计费；2-后付费
   */
  PayType?: Array<string>
  /**
   * 数据复制类型。0-异步复制；1-半同步复制；2-强同步复制
   */
  ProtectMode?: Array<string>
  /**
   * 可用区名称
   */
  Zone?: string
  /**
   * 多可用区信息
   */
  ZoneConf?: ZoneConf
  /**
   * 可支持的灾备可用区信息
   */
  DrZone?: Array<string>
  /**
   * 是否支持跨可用区只读
   */
  IsSupportRemoteRo?: boolean
  /**
   * 可支持的跨可用区只读区信息
   */
  RemoteRoZone?: Array<string>
  /**
   * 独享型可用区状态。可能的返回值为：1-上线；3-停售；4-不展示
   */
  ExClusterStatus?: number
  /**
   * 独享型可支持的跨可用区只读区信息
   */
  ExClusterRemoteRoZone?: Array<string>
  /**
   * 独享型多可用区信息
   */
  ExClusterZoneConf?: ZoneConf
  /**
   * 售卖实例类型数组，其中configIds的值与configs结构体中的id一一对应。
   */
  SellType?: Array<CdbSellType>
  /**
   * 可用区id
   */
  ZoneId?: number
  /**
   * 是否支持ipv6
   */
  IsSupportIpv6?: boolean
  /**
   * 可支持的售卖数据库引擎类型
   */
  EngineType?: Array<string>
  /**
   * 云盘版实例在当前可用区的售卖状态。可能的返回值为：1-上线；3-停售；4-不展示
   */
  CloudNativeClusterStatus?: number
  /**
   * 云盘版或者单节点基础型支持的磁盘类型。
   */
  DiskTypeConf?: Array<DiskTypeConfigItem>
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
   * 单次请求数量，默认值为20，最小值为1，最大值为5000。
   */
  Limit?: number
  /**
   * 匹配数据库库名的正则表达式。
   */
  DatabaseRegexp?: string
}

/**
 * ModifyDBInstanceReadOnlyStatus返回参数结构体
 */
export interface ModifyDBInstanceReadOnlyStatusResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateCdbProxy请求参数结构体
 */
export interface CreateCdbProxyRequest {
  /**
   * 实例 ID。可通过 [DescribeDBInstances](https://cloud.tencent.com/document/product/236/15872) 接口获取。
   */
  InstanceId: string
  /**
   * 私有网络 ID。可通过 [DescribeDBInstances](https://cloud.tencent.com/document/product/236/15872) 接口获取。
   */
  UniqVpcId: string
  /**
   * 私有子网 ID。可通过 [DescribeDBInstances](https://cloud.tencent.com/document/product/236/15872) 接口获取。
   */
  UniqSubnetId: string
  /**
   * 节点规格配置。
示例中参数说明：
NodeCount：节点个数。
Region：节点地域。
Zone：节点可用区。
Cpu：单个代理节点核数（单位：核）。
Mem：单个代理节点内存数（单位：MB）。
备注：
1. 数据库代理支持的节点规格为：2C4000MB、4C8000MB、8C16000MB。
2. 上述参数项（如节点个数、可用区等）均为必填，在调用接口时如未填写完整，可能会创建失败。
   */
  ProxyNodeCustom: Array<ProxyNodeCustom>
  /**
   * 安全组
   */
  SecurityGroup?: Array<string>
  /**
   * 描述
   */
  Desc?: string
  /**
   * 连接池阈值
注意：如需使用数据库代理连接池能力，MySQL 8.0 主实例的内核小版本要大于等于 MySQL 8.0 20230630。
   */
  ConnectionPoolLimit?: number
  /**
   * 指定要购买的 proxy 内核版本。不填则默认发货最新版本的 proxy。
   */
  ProxyVersion?: string
}

/**
 * CreateCdbProxy返回参数结构体
 */
export interface CreateCdbProxyResponse {
  /**
   * 异步任务ID
   */
  AsyncRequestId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 实例可回档时间范围
 */
export interface InstanceRollbackRangeTime {
  /**
   * 查询数据库错误码。0 - 正常，1600001 - 内部错误，1600003 - 入参异常，1600009 - 实例不存在，1624001 - DB 访问异常。
   */
  Code?: number
  /**
   * 查询数据库错误信息
   */
  Message?: string
  /**
   * 实例ID列表，单个实例Id的格式如：cdb-c1nl9rpv。与云数据库控制台页面中显示的实例ID相同
   */
  InstanceId?: string
  /**
   * 可回档时间范围
   */
  Times?: Array<RollbackTimeRange>
}

/**
 * DescribeTables返回参数结构体
 */
export interface DescribeTablesResponse {
  /**
   * 符合查询条件的数据库表总数。
   */
  TotalCount?: number
  /**
   * 返回的数据库表信息。
   */
  Items?: Array<string>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyBackupDownloadRestriction返回参数结构体
 */
export interface ModifyBackupDownloadRestrictionResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 实例审计详情信息
 */
export interface InstanceDbAuditStatus {
  /**
   * 实例ID。
   */
  InstanceId?: string
  /**
   * 审计状态。ON-表示审计已开启，OFF-表示审计关闭
   */
  AuditStatus?: string
  /**
   * 任务状态。0-无任务；1-审计开启中，2-审计关闭中。
   */
  AuditTask?: number
  /**
   * 日志保留时长。支持值包括：
7 - 一周；
30 - 一个月；
90 - 三个月；
180 - 六个月；
365 - 一年；
1095 - 三年；
1825 - 五年。
   */
  LogExpireDay?: number
  /**
   * 高频存储时长。支持值包括：
3 - 3天；
7 - 一周；
30 - 一个月；
90 - 三个月；
180 - 六个月；
365 - 一年；
1095 - 三年；
1825 - 五年。
   */
  HighLogExpireDay?: number
  /**
   * 低频存储时长。单位：天，等于日志保存时长减去高频存储时长。
   */
  LowLogExpireDay?: number
  /**
   * 日志存储量(单位：GB)。
   */
  BillingAmount?: number
  /**
   * 高频存储量(单位：GB)。
   */
  HighRealStorage?: number
  /**
   * 低频存储量(单位：GB)。
   */
  LowRealStorage?: number
  /**
   * 是否为全审计。true-表示全审计。
   */
  AuditAll?: boolean
  /**
   * 审计开通时间。
   */
  CreateAt?: string
  /**
   * 实例相关信息
   */
  InstanceInfo?: AuditInstanceInfo
  /**
   * 总存储量(单位：GB)。
   */
  RealStorage?: number
  /**
   * 是否包含审计策略
   */
  OldRule?: boolean
  /**
   * 实例所应用的规则模板。
   */
  RuleTemplateIds?: Array<string>
  /**
   * 限免状态
   */
  TrialStatus?: string
  /**
   * 限免开启时间
   */
  TrialStartTime?: number
  /**
   * 限免持续时间
   */
  TrialDuration?: number
  /**
   * 限免关闭时间
   */
  TrialCloseTime?: number
  /**
   * 限免期查询日志时长
   */
  TrialDescribeLogHours?: number
}

/**
 * ModifyTimeWindow返回参数结构体
 */
export interface ModifyTimeWindowResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
  InstanceId?: string
  /**
   * 参数名称
   */
  ParamName?: string
  /**
   * 参数修改前的值
   */
  OldValue?: string
  /**
   * 参数修改后的值
   */
  NewValue?: string
  /**
   * 参数是否修改成功
   * @deprecated
   */
  IsSucess?: boolean
  /**
   * 修改时间
   */
  ModifyTime?: string
  /**
   * 参数是否修改成功
   */
  IsSuccess?: boolean
}

/**
 * DescribeParamTemplates请求参数结构体
 */
export interface DescribeParamTemplatesRequest {
  /**
   * 引擎版本，缺省则查询所有。可取值为：5.5、5.6、5.7、8.0。
   */
  EngineVersions?: Array<string>
  /**
   * 引擎类型，缺省则查询所有。可取值为：InnoDB、RocksDB，不区分大小写。
   */
  EngineTypes?: Array<string>
  /**
   * 模板名称，缺省则查询所有。支持模糊匹配。
   */
  TemplateNames?: Array<string>
  /**
   * 模板 ID，缺省则查询所有。
   */
  TemplateIds?: Array<number | bigint>
}

/**
 * DescribeRollbackRangeTime请求参数结构体
 */
export interface DescribeRollbackRangeTimeRequest {
  /**
   * 实例 ID 列表，单个实例 ID 的格式如：cdb-c1nl9rpv。与云数据库控制台页面中显示的实例 ID 相同。
   */
  InstanceIds: Array<string>
  /**
   * 克隆实例与源实例是否在异地可用区，是:"true"，否:"false"
   */
  IsRemoteZone?: string
  /**
   * 克隆实例与源实例不在同一地域时需填写克隆实例所在地域，例："ap-guangzhou"
   */
  BackupRegion?: string
}

/**
 * DescribeBackupOverview请求参数结构体
 */
export interface DescribeBackupOverviewRequest {
  /**
   * 需要查询备份概览的云数据库产品类型。可取值为：mysql 指双节点/三节点的高可用实例，mysql-basic 指单节点（云盘）实例，mysql-cluster 指云盘版实例。
   */
  Product: string
}

/**
 * DescribeAuditInstanceList返回参数结构体
 */
export interface DescribeAuditInstanceListResponse {
  /**
   * 符合查询条件的实例总数。
   */
  TotalCount?: number
  /**
   * 审计实例详细信息列表。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Items?: Array<InstanceDbAuditStatus>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyDBInstanceProject返回参数结构体
 */
export interface ModifyDBInstanceProjectResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeCpuExpandHistory返回参数结构体
 */
export interface DescribeCpuExpandHistoryResponse {
  /**
   * 满足查询要求的扩容历史
   */
  Items?: Array<HistoryJob>
  /**
   * 总数出参
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyDBInstanceModes返回参数结构体
 */
export interface ModifyDBInstanceModesResponse {
  /**
   * 异步任务的请求ID，可使用此ID查询异步任务的执行结果。
   */
  AsyncRequestId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
  InstanceId?: string
  /**
   * 该实例自动数据备份的个数。
   */
  AutoBackupCount?: number
  /**
   * 该实例自动数据备份的容量。
   */
  AutoBackupVolume?: number
  /**
   * 该实例手动数据备份的个数。
   */
  ManualBackupCount?: number
  /**
   * 该实例手动数据备份的容量。
   */
  ManualBackupVolume?: number
  /**
   * 该实例总的数据备份（包含自动备份和手动备份）个数。
   */
  DataBackupCount?: number
  /**
   * 该实例总的数据备份容量。
   */
  DataBackupVolume?: number
  /**
   * 该实例日志备份的个数。
   */
  BinlogBackupCount?: number
  /**
   * 该实例日志备份的容量。
   */
  BinlogBackupVolume?: number
  /**
   * 该实例的总备份（包含数据备份和日志备份）占用容量。
   */
  BackupVolume?: number
}

/**
 * CreateDatabase请求参数结构体
 */
export interface CreateDatabaseRequest {
  /**
   * 实例 ID，格式如：cdb-c1nl9rpv，与云数据库控制台页面中显示的实例 ID 相同。
   */
  InstanceId: string
  /**
   * 数据库名称，长度不超过64。
   */
  DBName: string
  /**
   * 字符集，可选值：utf8，gbk，latin1，utf8mb4。
   */
  CharacterSetName: string
}

/**
 * ModifyInstanceParam请求参数结构体
 */
export interface ModifyInstanceParamRequest {
  /**
   * 实例 ID 列表。可通过 [DescribeDBInstances](https://cloud.tencent.com/document/product/236/15872) 接口获取。
   */
  InstanceIds: Array<string>
  /**
   * 要修改的参数列表。每一个元素是 Name 和 CurrentValue 的组合。Name 是参数名，CurrentValue 是要修改成的值。
   */
  ParamList?: Array<Parameter>
  /**
   * 模板 ID，ParamList 和 TemplateId 必须至少传其中之一。可通过 [DescribeParamTemplates](https://cloud.tencent.com/document/api/236/32659) 接口获取。
   */
  TemplateId?: number
  /**
   * 执行参数调整任务的方式，默认为 0。支持值包括：0 - 立刻执行，1 - 时间窗执行；当该值为 1 时，每次只能传一个实例（InstanceIds数量为1）
   */
  WaitSwitch?: number
  /**
   * 参数是否同步到主实例下的只读实例。true 为不同步，false 为同步。默认为 false。
   */
  NotSyncRo?: boolean
  /**
   * 参数是否同步到主实例下的灾备实例。true 为不同步，false 为同步。默认为 false。
   */
  NotSyncDr?: boolean
}

/**
 * ModifyProtectMode返回参数结构体
 */
export interface ModifyProtectModeResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateParamTemplate请求参数结构体
 */
export interface CreateParamTemplateRequest {
  /**
   * 参数模板名称。支持输入最大60个字符。
   */
  Name: string
  /**
   * 参数模板描述。
   */
  Description?: string
  /**
   * MySQL 版本号。可选值：5.6、5.7、8.0。
   */
  EngineVersion?: string
  /**
   * 源参数模板 ID。可通过 [DescribeParamTemplates](https://cloud.tencent.com/document/api/236/32659) 接口获取。
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
  /**
   * 实例引擎类型，默认为"InnoDB"，支持值包括："InnoDB"，"RocksDB"。
说明：数据库版本 MySQL 5.7、MySQL 8.0才支持 RocksDB。
   */
  EngineType?: string
}

/**
 * 异地备份信息
 */
export interface RemoteBackupInfo {
  /**
   * 异地备份子任务的ID
   */
  SubBackupId?: number
  /**
   * 异地备份所在地域
   */
  Region?: string
  /**
   * 备份任务状态。可能的值有 "SUCCESS": 备份成功， "FAILED": 备份失败， "RUNNING": 备份进行中。
   */
  Status?: string
  /**
   * 异地备份任务的开始时间
   */
  StartTime?: string
  /**
   * 异地备份任务的结束时间
   */
  FinishTime?: string
  /**
   * 下载地址
   */
  Url?: string
}

/**
 * 按周期扩容策略中的所选择的周期
 */
export interface PeriodStrategy {
  /**
   * 扩容周期
   */
  TimeCycle?: TImeCycle
  /**
   * 时间间隔
   */
  TimeInterval?: TimeInterval
}

/**
 * DescribeParamTemplateInfo请求参数结构体
 */
export interface DescribeParamTemplateInfoRequest {
  /**
   * 参数模板 ID。可通过 [DescribeParamTemplates](https://cloud.tencent.com/document/api/236/32659) 接口获取。
   */
  TemplateId: number
}

/**
 * ModifyCdbProxyAddressVipAndVPort返回参数结构体
 */
export interface ModifyCdbProxyAddressVipAndVPortResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDBInstances请求参数结构体
 */
export interface DescribeDBInstancesRequest {
  /**
   * 项目 ID。
   */
  ProjectId?: number
  /**
   * 实例类型，可取值：1 - 主实例，2 - 灾备实例，3 - 只读实例。
   */
  InstanceTypes?: Array<number | bigint>
  /**
   * 实例的内网 IP 地址。
   */
  Vips?: Array<string>
  /**
   * 实例状态，可取值：<br>0 - 创建中<br>1 - 运行中<br>4 - 正在进行隔离操作<br>5 - 已隔离（可在回收站恢复开机）
   */
  Status?: Array<number | bigint>
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
  PayTypes?: Array<number | bigint>
  /**
   * 实例名称。
   */
  InstanceNames?: Array<string>
  /**
   * 实例任务状态，可能取值：<br>0 - 没有任务<br>1 - 升级中<br>2 - 数据导入中<br>3 - 开放Slave中<br>4 - 外网访问开通中<br>5 - 批量操作执行中<br>6 - 回档中<br>7 - 外网访问关闭中<br>8 - 密码修改中<br>9 - 实例名修改中<br>10 - 重启中<br>12 - 自建迁移中<br>13 - 删除库表中<br>14 - 灾备实例创建同步中<br>15 - 升级待切换<br>16 - 升级切换中<br>17 - 升级切换完成<br>19 - 参数设置待执行<br>34 - 原地升级待执行
   */
  TaskStatus?: Array<number | bigint>
  /**
   * 实例数据库引擎版本，可能取值：5.1、5.5、5.6 和 5.7。
   */
  EngineVersions?: Array<string>
  /**
   * 私有网络的 ID。
   */
  VpcIds?: Array<number | bigint>
  /**
   * 可用区的 ID。
   */
  ZoneIds?: Array<number | bigint>
  /**
   * 子网 ID。
   */
  SubnetIds?: Array<number | bigint>
  /**
   * 是否锁定标记，可选值：0 - 不锁定，1 - 锁定，默认为0。
   */
  CdbErrors?: Array<number | bigint>
  /**
   * 返回结果集排序的字段，目前支持："instanceId"，"instanceName"，"createTime"，"deadlineTime"。
   */
  OrderBy?: string
  /**
   * 返回结果集排序方式。目前支持值："ASC" - 表示升序，"DESC" - 表示降序，默认为 "DESC"。
   */
  OrderDirection?: string
  /**
   * 是否以安全组 ID 为过滤条件。
说明：0表示否，1表示是。
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
  /**
   * 标签键值
请注意，创建中的实例无法查询到标签。
   */
  Tags?: Array<Tag>
  /**
   * 数据库代理 IP 。
   */
  ProxyVips?: Array<string>
  /**
   * 数据库代理 ID 。
   */
  ProxyIds?: Array<string>
  /**
   * 数据库引擎类型。可选值为：InnoDB、RocksDB。
   */
  EngineTypes?: Array<string>
  /**
   * 是否获取云盘版实例节点信息，可填：true 或 false。默认为 false。
   */
  QueryClusterInfo?: boolean
}

/**
 * CreateDeployGroup返回参数结构体
 */
export interface CreateDeployGroupResponse {
  /**
   * 置放群组ID。
   */
  DeployGroupId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateRotationPassword返回参数结构体
 */
export interface CreateRotationPasswordResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyCdbProxyAddressDesc请求参数结构体
 */
export interface ModifyCdbProxyAddressDescRequest {
  /**
   * 代理组 ID。可通过 [DescribeCdbProxyInfo](https://cloud.tencent.com/document/api/236/90585) 接口获取。
   */
  ProxyGroupId: string
  /**
   * 代理组地址 ID。可通过 [DescribeCdbProxyInfo](https://cloud.tencent.com/document/api/236/90585) 接口获取。
   */
  ProxyAddressId: string
  /**
   * 描述
   */
  Desc?: string
}

/**
 * 地域售卖配置
 */
export interface CdbRegionSellConf {
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
   * 地域的可用区售卖配置
   */
  RegionConfig: Array<CdbZoneSellConf>
}

/**
 * 云盘版 RW 节点的配置。
 */
export interface ReadWriteNode {
  /**
   * RW 节点所在可用区。
   */
  Zone: string
  /**
   * 升级云盘版实例时，如果要调整只读节点可用区，需要指定节点 ID。
   */
  NodeId?: string
}

/**
 * DescribeRoGroups请求参数结构体
 */
export interface DescribeRoGroupsRequest {
  /**
   * 实例 ID，格式如：cdb-c1nl9rpv，与云数据库控制台页面中显示的实例 ID 相同。
   */
  InstanceId: string
}

/**
 * DescribeInstanceUpgradeType返回参数结构体
 */
export interface DescribeInstanceUpgradeTypeResponse {
  /**
   * 实例 ID。
   */
  InstanceId?: string
  /**
   * 实例升级类型。Trsf - 迁移升级，InPlace - 原地升级，Topology - 架构升级。
   */
  UpgradeType?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateCdbProxyAddress返回参数结构体
 */
export interface CreateCdbProxyAddressResponse {
  /**
   * 异步任务ID
   */
  AsyncRequestId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 用于回档的数据库表名
 */
export interface RollbackTableName {
  /**
   * 回档前的原数据库表名
   */
  TableName: string
  /**
   * 回档后的新数据库表名
   */
  NewTableName: string
}

/**
 * CloseWanService请求参数结构体
 */
export interface CloseWanServiceRequest {
  /**
   * 实例 ID，格式如：cdb-c1nl9rpv，与云数据库控制台页面中显示的实例 ID 相同，可使用 [查询实例列表](https://cloud.tencent.com/document/api/236/15872) 接口获取，其值为输出参数中字段 InstanceId 的值。可传入只读组 ID 关闭只读组外网访问。
   */
  InstanceId: string
  /**
   * 变更云盘版实例只读组时，InstanceId 传实例 ID，需要额外指定该参数表示操作只读组。如果操作读写节点则不需指定该参数。
   */
  OpResourceId?: string
}

/**
 * OpenAuditService返回参数结构体
 */
export interface OpenAuditServiceResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CloseSSL请求参数结构体
 */
export interface CloseSSLRequest {
  /**
   * 实例 ID。只读组 ID 为空时必填。可通过 [DescribeDBInstances](https://cloud.tencent.com/document/product/236/15872) 接口获取。
   */
  InstanceId?: string
  /**
   * 只读组 ID。实例 ID 为空时必填。可通过 [DescribeRoGroups](https://cloud.tencent.com/document/api/236/40939) 接口获取。
   */
  RoGroupId?: string
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
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 审计日志命中规则模板的基本信息
 */
export interface LogRuleTemplateInfo {
  /**
   * 模板ID。
   */
  RuleTemplateId?: string
  /**
   * 规则模板名
   */
  RuleTemplateName?: string
  /**
   * 告警等级。1-低风险，2-中风险，3-高风险。
   */
  AlarmLevel?: string
  /**
   * 规则模板变更状态：0-未变更；1-已变更；2-已删除
   */
  RuleTemplateStatus?: number
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
   * 分页大小，默认值：20，最大值为100。
   */
  Limit?: number
}

/**
 * StopRollback返回参数结构体
 */
export interface StopRollbackResponse {
  /**
   * 执行请求的异步任务 ID。
   */
  AsyncRequestId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateCdbProxyAddress请求参数结构体
 */
export interface CreateCdbProxyAddressRequest {
  /**
   * 代理组 ID。可通过 [DescribeCdbProxyInfo](https://cloud.tencent.com/document/api/236/90585) 接口获取。
   */
  ProxyGroupId: string
  /**
   * 权重分配模式，
系统自动分配："system"， 自定义："custom"
   */
  WeightMode: string
  /**
   * 是否开启延迟剔除，取值："true" | "false"
   */
  IsKickOut: boolean
  /**
   * 最小保留数量，最小取值：0
   */
  MinCount: number
  /**
   * 延迟剔除阈值，最小取值：1，范围：1 - 10000，整数。
   */
  MaxDelay: number
  /**
   * 是否开启故障转移，取值："true" | "false"
   */
  FailOver: boolean
  /**
   * 是否自动添加RO，取值："true" | "false"
   */
  AutoAddRo: boolean
  /**
   * 是否是只读，取值："true" | "false"
   */
  ReadOnly: boolean
  /**
   * 是否开启事务分离，取值："true" | "false"
   */
  TransSplit: boolean
  /**
   * 读写权重分配
   */
  ProxyAllocation: Array<ProxyAllocation>
  /**
   * 私有网络 ID。可通过 [DescribeDBInstances](https://cloud.tencent.com/document/product/236/15872) 接口获取。
   */
  UniqVpcId: string
  /**
   * 私有子网 ID。可通过 [DescribeDBInstances](https://cloud.tencent.com/document/product/236/15872) 接口获取。
   */
  UniqSubnetId: string
  /**
   * 是否开启连接池。默认关闭。
注意：如需使用数据库代理连接池能力，MySQL 8.0 主实例的内核小版本要大于等于 MySQL 8.0 20230630。
   */
  ConnectionPool?: boolean
  /**
   * 描述
   */
  Desc?: string
  /**
   * IP 地址。不填则默认为所选 VPC 下支持的随机一个 IP。
   */
  Vip?: string
  /**
   * 端口。默认值3306。
   */
  VPort?: number
  /**
   * 安全组
   */
  SecurityGroup?: Array<string>
  /**
   * 连接池类型。可选值 transaction（事务级别连接池），connection（会话级别连接池），ConnectionPool 为 true 时生效。默认值：connection。
   */
  ConnectionPoolType?: string
  /**
   * 是否开启自适应负载均衡。默认关闭。
   */
  AutoLoadBalance?: boolean
  /**
   * 接入模式。nearBy - 就近访问，balance - 均衡分配，默认值：nearBy。
   */
  AccessMode?: string
}

/**
 * DeleteRotationPassword返回参数结构体
 */
export interface DeleteRotationPasswordResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * AnalyzeAuditLogs请求参数结构体
 */
export interface AnalyzeAuditLogsRequest {
  /**
   * 实例 ID。可通过 [DescribeDBInstances](https://cloud.tencent.com/document/product/236/15872) 接口获取。
   */
  InstanceId: string
  /**
   * 要分析的日志开始时间，格式为："2023-02-16 00:00:20"。
   */
  StartTime: string
  /**
   * 要分析的日志结束时间，格式为："2023-02-16 00:10:20"。
   */
  EndTime: string
  /**
   * 聚合维度的排序条件。
   */
  AggregationConditions: Array<AggregationCondition>
  /**
   * 已废弃。
   * @deprecated
   */
  AuditLogFilter?: AuditLogFilter
  /**
   * 该过滤条件下的审计日志结果集作为分析日志。
   */
  LogFilter?: Array<InstanceAuditLogFilters>
}

/**
 * ModifyBackupEncryptionStatus返回参数结构体
 */
export interface ModifyBackupEncryptionStatusResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
  Memory: number
  /**
   * 磁盘规格大小, 单位为：GB。
   */
  Volume: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * StopDBImportJob返回参数结构体
 */
export interface StopDBImportJobResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 代理节点权重分布
 */
export interface ProxyAllocation {
  /**
   * 代理节点所属地域
   */
  Region: string
  /**
   * 代理节点所属可用区
   */
  Zone: string
  /**
   * 代理实例分布
   */
  ProxyInstance: Array<ProxyInst>
}

/**
 * StopCpuExpand请求参数结构体
 */
export interface StopCpuExpandRequest {
  /**
   * 实例 ID。可通过 [DescribeDBInstances](https://cloud.tencent.com/document/product/236/15872) 接口获取。
   */
  InstanceId: string
}

/**
 * DescribeInstancePasswordComplexity请求参数结构体
 */
export interface DescribeInstancePasswordComplexityRequest {
  /**
   * 实例ID
   */
  InstanceId: string
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
   * 修改后的实例名称，仅支持数字,英文大小写字母、中文以及特殊字符-_./()[]（）+=:：@ 且长度不能超过60。
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
  TagKey?: string
  /**
   * 标签值
   */
  TagValue?: string
}

/**
 * ModifyAuditRule返回参数结构体
 */
export interface ModifyAuditRuleResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
  AsyncRequestId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 结构化的错误日志详情
 */
export interface ErrlogItem {
  /**
   * 错误发生时间。时间戳，秒级
   */
  Timestamp?: number
  /**
   * 错误详情
   */
  Content?: string
}

/**
 * 代理组详情
 */
export interface ProxyGroupInfo {
  /**
   * 代理组ID
   */
  ProxyGroupId?: string
  /**
   * 代理版本
   */
  ProxyVersion?: string
  /**
   * 代理支持升级版本
   */
  SupportUpgradeProxyVersion?: string
  /**
   * 代理状态。0 - 初始化中，1 - 在线中，2 - 在线中-读写分离中，3 - 下线，4 - 销毁。
   */
  Status?: string
  /**
   * 代理任务状态，Upgrading - 升级中，UpgradeTo - 升级待切换，UpgradeSwitching - 升级切换中，ProxyCreateAddress - 配置地址中，ProxyModifyAddress - 修改地址中，ProxyCloseAddress - 关闭地址中。
   */
  TaskStatus?: string
  /**
   * 代理组节点信息
   */
  ProxyNode?: Array<ProxyNode>
  /**
   * 代理组地址信息
   */
  ProxyAddress?: Array<ProxyAddress>
  /**
   * 连接池阈值
   */
  ConnectionPoolLimit?: number
  /**
   * 支持创建地址
   */
  SupportCreateProxyAddress?: boolean
  /**
   * 支持升级代理版本所需的cdb版本
   */
  SupportUpgradeProxyMysqlVersion?: string
}

/**
 * AssociateSecurityGroups返回参数结构体
 */
export interface AssociateSecurityGroupsResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeCPUExpandStrategyInfo返回参数结构体
 */
export interface DescribeCPUExpandStrategyInfoResponse {
  /**
   * 策略类型。输出值：auto、manual、timeInterval、period。
说明：1. auto 表示自动扩容。2. manual 表示自定义扩容，扩容时间为立即生效。3. timeInterval 表示自定义扩容，扩容时间为按时间段。4. period 表示自定义扩容，扩容时间为按周期。5. 如果返回为 NULL 说明尚未开通弹性扩容策略。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Type?: string
  /**
   * 自定义扩容，且扩容时间为立即生效时的 CPU。Type 为 manual 时有效。
注意：此字段可能返回 null，表示取不到有效值。
   */
  ExpandCpu?: number
  /**
   * 自动扩容策略。Type 为 auto 时有效。
注意：此字段可能返回 null，表示取不到有效值。
   */
  AutoStrategy?: AutoStrategy
  /**
   * 按周期扩容策略。当 Type 为 period 时有效。
   */
  PeriodStrategy?: PeriodStrategy
  /**
   * 按时间段扩容策略。当 Type 为 timeInterval 时有效。
   */
  TimeIntervalStrategy?: TimeIntervalStrategy
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 权重分配规则
 */
export interface Rule {
  /**
   * 划分上限
   */
  LessThan?: number
  /**
   * 权重
   */
  Weight?: number
}

/**
 * 审计策略
 */
export interface AuditPolicy {
  /**
   * 审计策略 ID。
   */
  PolicyId?: string
  /**
   * 审计策略的状态。可能返回的值为：
"creating" - 创建中;
"running" - 运行中;
"paused" - 暂停中;
"failed" - 创建失败。
   */
  Status?: string
  /**
   * 数据库实例 ID。
   */
  InstanceId?: string
  /**
   * 审计策略创建时间。格式为 : "2019-03-20 17:09:13"。
   */
  CreateTime?: string
  /**
   * 审计策略最后修改时间。格式为 : "2019-03-20 17:09:13"。
   */
  ModifyTime?: string
  /**
   * 审计策略名称。
   */
  PolicyName?: string
  /**
   * 审计规则 ID。
   */
  RuleId?: string
  /**
   * 审计规则名称。
   */
  RuleName?: string
  /**
   * 数据库实例名称
   */
  InstanceName?: string
}

/**
 * 代理节点
 */
export interface ProxyNode {
  /**
   * 代理节点ID
   */
  ProxyId?: string
  /**
   * CPU核数
   */
  Cpu?: number
  /**
   * 内存大小，单位为 MB。
   */
  Mem?: number
  /**
   * 节点状态，0 - 初始化中，1 - 在线中，2 - 下线中，3 - 销毁中，4 - 故障恢复中，5 - 节点故障，6 - 切换中。
   */
  Status?: string
  /**
   * 代理节点可用区
   */
  Zone?: string
  /**
   * 代理节点地域
   */
  Region?: string
  /**
   * 连接数
   */
  Connection?: number
}

/**
 * DescribeCdbZoneConfig返回参数结构体
 */
export interface DescribeCdbZoneConfigResponse {
  /**
   * 售卖规格和地域信息集合
   */
  DataResult?: CdbZoneDataResult
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 云盘版的 RO 节点配置。
 */
export interface ReadonlyNode {
  /**
   * 是否分布在随机可用区。传入YES表示随机可用区。否则使用Zone指定的可用区。
   */
  IsRandomZone?: string
  /**
   * 指定该节点分布在哪个可用区。
   */
  Zone?: string
  /**
   * 升级云盘版实例时，如果要调整只读节点可用区，需要指定节点 ID。
   */
  NodeId?: string
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
   * 单次请求返回的数量，默认值为20，最大值为5000。
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
说明：如果进行迁移业务，请一定填写实例规格（CPU、内存），不然系统会默认以最小允许规格传参。
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
   * 主实例数据库引擎版本，支持值包括：5.5、5.6、5.7、8.0。
说明：升级数据库版本请使用 [UpgradeDBInstanceEngineVersion](https://cloud.tencent.com/document/api/236/15870) 接口。
   */
  EngineVersion?: string
  /**
   * 切换访问新实例的方式，默认为 0。支持值包括：0 - 立刻切换，1 - 时间窗切换；当该值为 1 时，升级过程中，切换访问新实例的流程将会在时间窗内进行，或者用户主动调用接口 [切换访问新实例](https://cloud.tencent.com/document/product/236/15864) 触发该流程。
   */
  WaitSwitch?: number
  /**
   * 备库2的可用区信息，默认为空，升级主实例时可指定该参数，升级只读实例或者灾备实例时指定该参数无意义。可通过 [获取云数据库可售卖规格](https://cloud.tencent.com/document/product/236/17229) 接口查询支持的可用区。
备注：如您要将三节点降级至双节点，将该参数设置为空值即可实现。
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
   * 升级后的实例cpu核数，如果不传将根据 Memory 指定的内存值自动填充最小允许规格的cpu值。
说明：如果进行迁移业务，请一定填写实例规格（CPU、内存），不然系统会默认以最小允许规格传参。
   */
  Cpu?: number
  /**
   * 是否极速变配。0-普通升级，1-极速变配，2 极速优先。选择极速变配会根据资源状况校验是否可以进行极速变配，满足条件则进行极速变配，不满足条件会返回报错信息。
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
  /**
   * 针对跨集群搬迁场景，选择同可用区RO的处理逻辑。together-同可用区RO跟随主实例迁移至目标可用区（默认选项），severally-同可用区RO保持原部署模式、不迁移至目标可用区。
   */
  RoTransType?: string
  /**
   * 云盘版节点拓扑配置。
   */
  ClusterTopology?: ClusterTopology
  /**
   * 检查原地升级是否需要重启，1 检查， 0 不检查。如果值为1，检查为原地升级需要重启，则会停止升级并进行返回提示，如果为原地升级不重启，则正常执行升级流程。
   */
  CheckFastUpgradeReboot?: number
  /**
   * 数据校验敏感度，非极速变配时使用此参数，敏感度根据当前实例规格计算迁移过程中的数据对比使用的cpu资源
对应的选项为: "high"、"normal"、"low"，默认为空
参数详解，：
"high": 对应控制台中的高，数据库负载过高不建议使用
"normal"：对应控制台中的标准
"low"：对应控制台中的低

   */
  DataCheckSensitive?: string
}

/**
 * ModifyParamTemplate请求参数结构体
 */
export interface ModifyParamTemplateRequest {
  /**
   * 模板 ID。可通过 [DescribeParamTemplates](https://cloud.tencent.com/document/api/236/32659) 接口获取。
   */
  TemplateId: number
  /**
   * 模板名称，仅支持数字、英文大小写字母、中文以及特殊字符_-./()（）[]+=：:@,且长度不能超过60。
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
 * DescribeAuditConfig请求参数结构体
 */
export interface DescribeAuditConfigRequest {
  /**
   * 实例 ID，格式如：cdb-c1nl9rpv 或者 cdbro-c1nl9rpv，与云数据库控制台页面中显示的实例 ID 相同。
   */
  InstanceId: string
}

/**
 * DescribeBinlogBackupOverview返回参数结构体
 */
export interface DescribeBinlogBackupOverviewResponse {
  /**
   * 总的日志备份容量，包含异地日志备份（单位为字节）。
   */
  BinlogBackupVolume?: number
  /**
   * 总的日志备份个数，包含异地日志备份。
   */
  BinlogBackupCount?: number
  /**
   * 异地日志备份容量（单位为字节）。
   */
  RemoteBinlogVolume?: number
  /**
   * 异地日志备份个数。
   */
  RemoteBinlogCount?: number
  /**
   * 归档日志备份容量（单位为字节）。
   */
  BinlogArchiveVolume?: number
  /**
   * 归档日志备份个数。
   */
  BinlogArchiveCount?: number
  /**
   * 标准存储日志备份容量（单位为字节）。
   */
  BinlogStandbyVolume?: number
  /**
   * 标准存储日志备份个数。
   */
  BinlogStandbyCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDBInstanceLogToCLS返回参数结构体
 */
export interface DescribeDBInstanceLogToCLSResponse {
  /**
   * 错误日志投递CLS配置
   */
  ErrorLog?: LogToCLSConfig
  /**
   * 慢日志投递CLS配置
   */
  SlowLog?: LogToCLSConfig
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
  /**
   * 集群版实例指定节点 ID 发起主从切换。
   */
  DstNodeId?: string
}

/**
 * ModifyCdbProxyAddressVipAndVPort请求参数结构体
 */
export interface ModifyCdbProxyAddressVipAndVPortRequest {
  /**
   * 代理组 ID。可通过 [DescribeCdbProxyInfo](https://cloud.tencent.com/document/api/236/90585) 接口获取。
   */
  ProxyGroupId: string
  /**
   * 代理组地址 ID。可通过 [DescribeCdbProxyInfo](https://cloud.tencent.com/document/api/236/90585) 接口获取。
   */
  ProxyAddressId: string
  /**
   * 私有网络 ID。可通过 [DescribeDBInstances](https://cloud.tencent.com/document/product/236/15872) 接口获取。
   */
  UniqVpcId: string
  /**
   * 私有子网 ID。可通过 [DescribeDBInstances](https://cloud.tencent.com/document/product/236/15872) 接口获取。
   */
  UniqSubnetId: string
  /**
   * IP 地址。若不填写则自动分配子网下的可用 IP。
   */
  Vip?: string
  /**
   * 端口。默认值3306，取值范围：1024 - 65535。
   */
  VPort?: number
  /**
   * 旧 IP 地址回收时间。单位：小时，默认值：24，取值范围：0 - 168。
   */
  ReleaseDuration?: number
}

/**
 * ModifyAutoRenewFlag请求参数结构体
 */
export interface ModifyAutoRenewFlagRequest {
  /**
   * 实例的 ID，格式如：cdb-c1nl9rpv，与云数据库控制台页面中显示的实例 ID 相同。
说明：可输入多个实例 ID 进行修改，json 格式如下。
[
    "cdb-30z11v8s",
    "cdb-93h11efg"
  ]
   */
  InstanceIds: Array<string>
  /**
   * 自动续费标记，可取值的有：0 - 不自动续费，1 - 自动续费。
   */
  AutoRenew: number
}

/**
 * OpenSSL请求参数结构体
 */
export interface OpenSSLRequest {
  /**
   * 实例 ID。只读组 ID 为空时必填。可通过 [DescribeDBInstances](https://cloud.tencent.com/document/product/236/15872) 接口获取。
   */
  InstanceId?: string
  /**
   * 只读组 ID。实例 ID 为空时必填。可通过 [DescribeRoGroups](https://cloud.tencent.com/document/api/236/40939) 接口获取。
   */
  RoGroupId?: string
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
   */
  LogExpireDay?: number
  /**
   * 审计日志存储类型。目前支持的值包括："storage" - 存储型。
   */
  LogType?: string
  /**
   * 是否正在关闭审计。目前支持的值包括："false"-否，"true"-是
   */
  IsClosing?: string
  /**
   * 是否正在开启审计。目前支持的值包括："false"-否，"true"-是
   */
  IsOpening?: string
  /**
   * 审计服务开通时间。
   */
  CreateTime?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyBackupConfig返回参数结构体
 */
export interface ModifyBackupConfigResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * OpenWanService请求参数结构体
 */
export interface OpenWanServiceRequest {
  /**
   * 实例 ID，格式如：cdb-c1nl9rpv，与云数据库控制台页面中显示的实例 ID 相同，可使用 [查询实例列表](https://cloud.tencent.com/document/api/236/15872) 接口获取，其值为输出参数中字段 InstanceId 的值。可以传入只读组 ID。
   */
  InstanceId: string
  /**
   * 变更集群版实例只读组时，InstanceId传实例id，需要额外指定该参数表示操作只读组。 如果操作读写节点则不需指定该参数。
   */
  OpResourceId?: string
}

/**
 * DeleteAuditPolicy返回参数结构体
 */
export interface DeleteAuditPolicyResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
  TemplateId?: number
  /**
   * 参数模板名称。
   */
  Name?: string
  /**
   * 参数模板对应实例版本，可取值：5.5、5.6、5.7、8.0。
   */
  EngineVersion?: string
  /**
   * 参数模板中的参数数量
   */
  TotalCount?: number
  /**
   * 参数详情
   */
  Items?: Array<ParameterDetail>
  /**
   * 参数模板描述
   */
  Description?: string
  /**
   * 参数模板类型。支持值包括："HIGH_STABILITY" - 高稳定模板，"HIGH_PERFORMANCE" - 高性能模板。
   */
  TemplateType?: string
  /**
   * 参数模板引擎。支持值包括："InnoDB"，"RocksDB"。
   */
  EngineType?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
  TotalCount?: number
  /**
   * 参数详情。
   */
  Items?: Array<ParameterDetail>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteDatabase请求参数结构体
 */
export interface DeleteDatabaseRequest {
  /**
   * 实例 ID，格式如：cdb-c1nl9rpv，与云数据库控制台页面中显示的实例 ID 相同。
   */
  InstanceId: string
  /**
   * 数据库名称，长度不超过64。
   */
  DBName: string
}

/**
 * 文件上传描述
 */
export interface UploadInfo {
  /**
   * 文件所有分片数
   */
  AllSliceNum?: number
  /**
   * 已完成分片数
   */
  CompleteNum?: number
}

/**
 * DisassociateSecurityGroups请求参数结构体
 */
export interface DisassociateSecurityGroupsRequest {
  /**
   * 安全组 ID。可通过 [DescribeDBSecurityGroups](https://cloud.tencent.com/document/api/236/15854) 接口获取。
   */
  SecurityGroupId: string
  /**
   * 实例 ID 列表，一个或者多个实例 ID 组成的数组。可通过 [DescribeDBInstances](https://cloud.tencent.com/document/product/236/15872) 接口获取。
   */
  InstanceIds: Array<string>
  /**
   * 当传入只读实例 ID 时，默认操作的是对应只读组的安全组。如果需要操作只读实例 ID 的安全组，需要将该入参置为 True，默认为 False。
   */
  ForReadonlyInstance?: boolean
}

/**
 * 审计规则的过滤条件
 */
export interface AuditRuleFilters {
  /**
   * 单条审计规则。
   */
  RuleFilters?: Array<RuleFilters>
}

/**
 * SubmitInstanceUpgradeCheckJob请求参数结构体
 */
export interface SubmitInstanceUpgradeCheckJobRequest {
  /**
   * 实例 ID。可通过 [DescribeDBInstances](https://cloud.tencent.com/document/product/236/15872) 接口获取。
   */
  InstanceId: string
  /**
   * 目标数据库版本。
说明：可选值5.6、5.7、8.0，不支持跨版本升级，升级后不支持版本降级。
   */
  DstMysqlVersion: string
}

/**
 * ModifyLocalBinlogConfig请求参数结构体
 */
export interface ModifyLocalBinlogConfigRequest {
  /**
   * 实例 ID，格式如：cdb-c1nl9rpv。与云数据库控制台页面中显示的实例 ID 相同。
   */
  InstanceId: string
  /**
   * 本地 binlog 保留时长。不同实例的可取值如下：
1. 云盘版实例、双节点实例、三节点实例的本地 binlog 保留时长（小时）默认为120，范围：6 - 168。
2. 灾备实例的本地 binlog 保留时长（小时）默认为120，范围：120 - 168。
3. 单节点云盘实例的本地 binlog 保留时长（小时）默认为120，范围：0 - 168。
4. 若双节点实例、三节点实例下无灾备实例，则该主实例的本地 binlog 保留时长（小时）范围是：6 - 168；若双节点实例、三节点实例下有灾备实例，或者要为双节点实例、三节点实例添加灾备实例，为避免同步异常，该主实例的本地 binlog 保留时长（小时）不能设置低于120小时，范围是：120 - 168。
   */
  SaveHours: number
  /**
   * 本地 binlog 空间使用率，可取值范围：[30,50]。
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
  AsyncRequestId: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
  AsyncRequestId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyRoGroupInfo请求参数结构体
 */
export interface ModifyRoGroupInfoRequest {
  /**
   * RO 组的 ID。可通过 [DescribeRoGroups](https://cloud.tencent.com/document/api/236/40939) 接口获取。
   */
  RoGroupId: string
  /**
   * RO 组的详细信息。
   */
  RoGroupInfo?: RoGroupAttr
  /**
   * RO 组内实例的权重。若修改 RO 组的权重模式为用户自定义模式（custom），则必须设置该参数，且需要设置每个 RO 实例的权重值。RO 实例 ID 可通过 [DescribeRoGroups](https://cloud.tencent.com/document/api/236/40939) 接口获取。
   */
  RoWeightValues?: Array<RoWeightValue>
  /**
   * 是否重新均衡 RO 组内的 RO 实例的负载。支持值包括：1 - 重新均衡负载；0 - 不重新均衡负载。默认值为 0。注意，设置为重新均衡负载时，RO 组内 RO 实例会有一次数据库连接瞬断，请确保应用程序能重连数据库。
   */
  IsBalanceRoLoad?: number
  /**
   * 废弃参数，无意义。
   * @deprecated
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
  InstanceId?: string
  /**
   * 实例解隔离操作的结果值。返回值为0表示成功。
   */
  Code?: number
  /**
   * 实例解隔离操作的错误信息。
   */
  Message?: string
}

/**
 * CreateAuditLogFile请求参数结构体
 */
export interface CreateAuditLogFileRequest {
  /**
   * 实例 ID。可通过 [DescribeDBInstances](https://cloud.tencent.com/document/product/236/15872) 接口获取。
   */
  InstanceId: string
  /**
   * 开始时间(建议开始到结束时间区间最大7天)。
   */
  StartTime: string
  /**
   * 结束时间(建议开始到结束时间区间最大7天）。
   */
  EndTime: string
  /**
   * 排序方式。支持值包括："ASC" - 升序，"DESC" - 降序，默认降序排序。
   */
  Order?: string
  /**
   * 排序字段。支持值包括(默认按照时间戳排序)： "timestamp" - 时间戳； "affectRows" - 影响行数； "execTime" - 执行时间。
   */
  OrderBy?: string
  /**
   * 已废弃。
   * @deprecated
   */
  Filter?: AuditLogFilter
  /**
   * 过滤条件。可按设置的过滤条件过滤日志。
   */
  LogFilter?: Array<InstanceAuditLogFilters>
  /**
   * 下载筛选列
   */
  ColumnFilter?: Array<string>
}

/**
 * 审计规则
 */
export interface AuditRule {
  /**
   * 审计规则 Id。
   */
  RuleId?: string
  /**
   * 审计规则创建时间。格式为 : "2019-03-20 17:09:13"。
   */
  CreateTime?: string
  /**
   * 审计规则最后修改时间。格式为 : "2019-03-20 17:09:13"。
   */
  ModifyTime?: string
  /**
   * 审计规则名称。
注意：此字段可能返回 null，表示取不到有效值。
   */
  RuleName?: string
  /**
   * 审计规则描述。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Description?: string
  /**
   * 审计规则过滤条件。
注意：此字段可能返回 null，表示取不到有效值。
   */
  RuleFilters?: Array<AuditFilter>
  /**
   * 是否开启全审计。
   */
  AuditAll?: boolean
}

/**
 * DescribeInstanceAlarmEvents请求参数结构体
 */
export interface DescribeInstanceAlarmEventsRequest {
  /**
   * 实例 ID。可通过 [DescribeDBInstances](https://cloud.tencent.com/document/product/236/15872) 接口获取。
   */
  InstanceId: string
  /**
   * 事件查询范围开始时间，闭区间。
   */
  StartTime: string
  /**
   * 事件查询范围截止时间，闭区间。
   */
  EndTime: string
  /**
   * 事件名称。 Outofmemory - 内存OOM（有状态事件）; Switch - 主从切换（有状态事件）; Roremove - 只读实例剔除（有状态事件）; MemoryUsedHigh - 内存使用率过高（有状态事件）; CPUExpansion - CPU性能扩容（无状态事件）; CPUExpansionFailed - CPU性能扩容失败（无状态事件）; CPUContraction - CPU性能回缩（无状态事件）; Restart - 实例重启（有状态事件）; ServerFailureNodeMigration - ServerFailureNodeMigration（有状态事件）; PlannedSwitch - 计划内主备切换（无状态事件）; OverusedReadonlySet - 实例将被锁定（无状态事件）; OverusedReadWriteSet - 实例解除锁定（无状态事件）。
   */
  EventName?: Array<string>
  /**
   * 事件状态。"1" - 发生事件；"0" - 恢复事件；"-" - 无状态事件。
   */
  EventStatus?: string
  /**
   * 排序方式。按事件发生事件进行排序，"DESC"-倒排；”ASC“-正序，默认倒排。
   */
  Order?: string
  /**
   * 事件展示数量。默认为100，最大为200。
   */
  Limit?: string
  /**
   * 偏移量。
   */
  Offset?: string
  /**
   * 节点 ID。
   */
  NodeId?: string
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
   * 分页大小，默认值为20，最小值为1，最大值为1000。
   */
  Limit?: number
  /**
   * binlog最早开始时间，时间格式：2016-03-17 02:10:37
   */
  MinStartTime?: string
  /**
   * binlog最晚开始时间，时间格式：2016-03-17 02:10:37
   */
  MaxStartTime?: string
  /**
   * 返回binlog列表是否包含MinStartTime起始节点，默认为否
   */
  ContainsMinStartTime?: boolean
}

/**
 * 按时间段扩容策略
 */
export interface TimeIntervalStrategy {
  /**
   * 开始扩容时间。
说明：此值的格式为 Integer 的时间戳（秒级）。
   */
  StartTime?: number
  /**
   * 结束扩容时间。
说明：此值的格式为 Integer 的时间戳（秒级）。
   */
  EndTime?: number
}

/**
 * DescribeCdbProxyInfo请求参数结构体
 */
export interface DescribeCdbProxyInfoRequest {
  /**
   * 实例 ID。可通过 [DescribeDBInstances](https://cloud.tencent.com/document/product/236/15872) 接口获取。
   */
  InstanceId: string
  /**
   * 代理组 ID。
   */
  ProxyGroupId?: string
}

/**
 * 用于回档的数据库名
 */
export interface RollbackDBName {
  /**
   * 回档前的原数据库名
   */
  DatabaseName: string
  /**
   * 回档后的新数据库名
   */
  NewDatabaseName: string
}

/**
 * 审计规则的规则过滤条件
 */
export interface RuleFilters {
  /**
   * 审计规则过滤条件的参数名称。可选值：host – 客户端 IP；user – 数据库账户；dbName – 数据库名称；sqlType-SQL类型；sql-sql语句；affectRows -影响行数；sentRows-返回行数；checkRows-扫描行数；execTime-执行时间。
   */
  Type: string
  /**
   * 审计规则过滤条件的匹配类型。可选值：INC – 包含；EXC – 不包含；EQS – 等于；NEQ – 不等于；REG-正则；GT-大于；LT-小于。
   */
  Compare: string
  /**
   * 审计规则过滤条件的匹配值。sqlType条件的Value需在以下选择"alter", "changeuser", "create", "delete", "drop", "execute", "insert", "login", "logout", "other", "replace", "select", "set", "update"。
   */
  Value: Array<string>
}

/**
 * ModifyAuditRuleTemplates请求参数结构体
 */
export interface ModifyAuditRuleTemplatesRequest {
  /**
   * 审计规则模板 ID。可通过 [DescribeAuditRuleTemplates](https://cloud.tencent.com/document/api/236/101811) 接口获取。
   */
  RuleTemplateIds: Array<string>
  /**
   * 修改后的审计规则。
   */
  RuleFilters?: Array<RuleFilters>
  /**
   * 修改后的规则模板名称。
   */
  RuleTemplateName?: string
  /**
   * 修改后的规则模板描述。
   */
  Description?: string
  /**
   * 告警等级。1-低风险，2-中风险，3-高风险。
   */
  AlarmLevel?: number
  /**
   * 告警策略。0-不告警，1-告警。
   */
  AlarmPolicy?: number
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
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
 * ModifyRemoteBackupConfig返回参数结构体
 */
export interface ModifyRemoteBackupConfigResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
  InstanceId?: string
  /**
   * 实例名称。
   */
  InstanceName?: string
  /**
   * 是否开通加密，YES 已开通，NO 未开通。
   */
  Encryption?: string
  /**
   * 加密使用的密钥 ID 。
   */
  KeyId?: string
  /**
   * 密钥所在地域。
   */
  KeyRegion?: string
  /**
   * 当前 CDB 后端服务使用的 KMS 服务的默认地域。
   */
  DefaultKmsRegion?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * AssociateSecurityGroups请求参数结构体
 */
export interface AssociateSecurityGroupsRequest {
  /**
   * 安全组 ID。可通过 [DescribeDBSecurityGroups](https://cloud.tencent.com/document/api/236/15854) 接口获取。
   */
  SecurityGroupId: string
  /**
   * 实例 ID 列表，一个或者多个实例 ID 组成的数组。可通过 [DescribeDBInstances](https://cloud.tencent.com/document/product/236/15872) 接口获取。
   */
  InstanceIds: Array<string>
  /**
   * 当传入只读实例ID时，默认操作的是对应只读组的安全组。如果需要操作只读实例ID的安全组， 需要将该入参置为True
   */
  ForReadonlyInstance?: boolean
}

/**
 * DescribeInstanceUpgradeCheckJob请求参数结构体
 */
export interface DescribeInstanceUpgradeCheckJobRequest {
  /**
   * 实例 ID。可通过 [DescribeDBInstances](https://cloud.tencent.com/document/product/236/15872) 接口获取。
   */
  InstanceId: string
  /**
   * 目标数据库版本。
说明：可选值5.6、5.7、8.0，不支持跨版本升级，升级后不支持版本降级。
   */
  DstMysqlVersion: string
}

/**
 * DescribeDBFeatures返回参数结构体
 */
export interface DescribeDBFeaturesResponse {
  /**
   * 是否支持数据库审计功能。
   */
  IsSupportAudit?: boolean
  /**
   * 开启审计是否需要升级内核版本。
   */
  AuditNeedUpgrade?: boolean
  /**
   * 是否支持数据库加密功能。
   */
  IsSupportEncryption?: boolean
  /**
   * 开启加密是否需要升级内核版本。
   */
  EncryptionNeedUpgrade?: boolean
  /**
   * 是否为异地只读实例。
   */
  IsRemoteRo?: boolean
  /**
   * 主实例所在地域。
说明：此参数可能返回空值，您可忽略此出参返回值。如需获取实例所在地域详情，您可调用 [查询实例列表](https://cloud.tencent.com/document/product/236/15872) 接口查询。
   */
  MasterRegion?: string
  /**
   * 是否支持小版本升级。
   */
  IsSupportUpdateSubVersion?: boolean
  /**
   * 当前内核版本。
   */
  CurrentSubVersion?: string
  /**
   * 可供升级的内核版本。
   */
  TargetSubVersion?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * SubmitInstanceUpgradeCheckJob返回参数结构体
 */
export interface SubmitInstanceUpgradeCheckJobResponse {
  /**
   * 任务 ID
   */
  JobId?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
   * 引擎版本，目前支持 ["5.1", "5.5", "5.6", "5.7", "8.0"]。
说明：引擎版本为必填。
   */
  EngineVersion?: string
  /**
   * 默认参数模板类型。支持值包括："HIGH_STABILITY" - 高稳定模板，"HIGH_PERFORMANCE" - 高性能模板。默认值为：HIGH_STABILITY。
   */
  TemplateType?: string
  /**
   * 参数模板引擎，默认值：InnoDB，可取值：InnoDB、RocksDB。
   */
  EngineType?: string
}

/**
 * 审计实例详情
 */
export interface AuditInstanceInfo {
  /**
   * 项目ID
   */
  ProjectId?: number
  /**
   * 标签信息
   */
  TagList?: Array<TagInfoUnit>
  /**
   * 数据库内核类型
   */
  DbType?: string
  /**
   * 数据库内核版本
   */
  DbVersion?: string
}

/**
 * proxy配置
 */
export interface CustomConfig {
  /**
   * 设备
   */
  Device?: string
  /**
   * 类型
   */
  Type?: string
  /**
   * 设备类型
   */
  DeviceType?: string
  /**
   * 内存，单位为MB
   */
  Memory?: number
  /**
   * 核数
   */
  Cpu?: number
}

/**
 * SwitchDBInstanceMasterSlave返回参数结构体
 */
export interface SwitchDBInstanceMasterSlaveResponse {
  /**
   * 异步任务 ID。
   */
  AsyncRequestId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
   * 异地备份总容量。
   */
  RemoteBackupVolume?: number
  /**
   * 异地备份总个数。
   */
  RemoteBackupCount?: number
  /**
   * 当前地域归档备份总容量。
   */
  DataBackupArchiveVolume?: number
  /**
   * 当前地域归档备份总个数。
   */
  DataBackupArchiveCount?: number
  /**
   * 当前地域标准存储备份总容量。
   */
  DataBackupStandbyVolume?: number
  /**
   * 当前地域标准存储备份总个数。
   */
  DataBackupStandbyCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeBackups请求参数结构体
 */
export interface DescribeBackupsRequest {
  /**
   * 实例 ID，格式如：cdb-c1nl9rpv。与云数据库控制台页面中显示的实例 ID 相同。
   */
  InstanceId: string
  /**
   * 偏移量，最小值为0。
   */
  Offset?: number
  /**
   * 分页大小，默认值为20，最小值为1，最大值为1000。
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
  TotalCount?: number
  /**
   * 参数修改记录。
   */
  Items?: Array<ParamRecord>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteParamTemplate请求参数结构体
 */
export interface DeleteParamTemplateRequest {
  /**
   * 参数模板 ID。可通过 [DescribeParamTemplates](https://cloud.tencent.com/document/api/236/32659) 接口获取。
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
  Status?: number
  /**
   * 可用区信息
   */
  Zone?: string
  /**
   * 实例ID
   */
  InstanceId?: string
  /**
   * 地域信息
   */
  Region?: string
  /**
   * 实例同步状态。可能的返回值为：
0 - 灾备未同步；
1 - 灾备同步中；
2 - 灾备同步成功；
3 - 灾备同步失败；
4 - 灾备同步修复中。
   */
  SyncStatus?: number
  /**
   * 实例名称
   */
  InstanceName?: string
  /**
   * 实例类型
   */
  InstanceType?: number
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
  TemplateId?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ReleaseIsolatedDBInstances请求参数结构体
 */
export interface ReleaseIsolatedDBInstancesRequest {
  /**
   * 实例 ID，单个实例 ID 格式如：cdb-c1nl9rpv，与云数据库控制台页面中显示的实例 ID 相同，可使用 [查询实例列表](https://cloud.tencent.com/document/api/236/15872) 接口获取，其值为输出参数中字段 InstanceId 的值。
说明：可输入多个实例 ID 进行操作，json 格式如下。
[
    "cdb-30z11v8s",
    "cdb-93h11efg"
  ]
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
  Name?: string
  /**
   * 备份文件大小，单位：Byte
   */
  Size?: number
  /**
   * 文件存储时间，时间格式：2016-03-17 02:10:37
   */
  Date?: string
  /**
   * 下载地址
说明：此下载地址和参数 InternetUrl 的下载地址一样。
   */
  IntranetUrl?: string
  /**
   * 下载地址
说明：此下载地址和参数 IntranetUrl 的下载地址一样。
   */
  InternetUrl?: string
  /**
   * 日志具体类型，可能的值有：binlog - 二进制日志
   */
  Type?: string
  /**
   * binlog 文件起始时间
   */
  BinlogStartTime?: string
  /**
   * binlog 文件截止时间
   */
  BinlogFinishTime?: string
  /**
   * 本地binlog文件所在地域
   */
  Region?: string
  /**
   * 备份任务状态。可能的值有 "SUCCESS": 备份成功， "FAILED": 备份失败， "RUNNING": 备份进行中。
   */
  Status?: string
  /**
   * binlog异地备份详细信息
   */
  RemoteInfo?: Array<RemoteBackupInfo>
  /**
   * 存储方式，0-常规存储，1-归档存储，2-标准存储，默认为0
   */
  CosStorageType?: number
  /**
   * 实例 ID，格式如：cdb-c1nl9rpv。与云数据库控制台页面中显示的实例 ID 相同。
   * @deprecated
   */
  InstanceId?: string
}

/**
 * CreateDatabase返回参数结构体
 */
export interface CreateDatabaseResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CheckMigrateCluster返回参数结构体
 */
export interface CheckMigrateClusterResponse {
  /**
   * 校验是否通过，通过为pass，失败为fail
   */
  CheckResult?: string
  /**
   * 校验项
   */
  Items?: Array<CheckMigrateResult>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeErrorLogData返回参数结构体
 */
export interface DescribeErrorLogDataResponse {
  /**
   * 符合条件的记录总数。
   */
  TotalCount?: number
  /**
   * 返回的记录。
   */
  Items?: Array<ErrlogItem>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * AddTimeWindow请求参数结构体
 */
export interface AddTimeWindowRequest {
  /**
   * 实例 ID。可通过 [DescribeDBInstances](https://cloud.tencent.com/document/product/236/15872) 接口获取。
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
   * 最大延迟阈值（秒），仅对主实例和灾备实例有效。默认值：10，取值范围：1-10的整数。
   */
  MaxDelayTime?: number
}

/**
 * 导入任务记录
 */
export interface ImportRecord {
  /**
   * 状态值。0 - 初始化中，1 - 运行中，2 - 运行成功，3 - 运行失败。
   */
  Status?: number
  /**
   * 状态值，为负数时任务异常。
   */
  Code?: number
  /**
   * 执行时间，单位：秒。
   */
  CostTime?: number
  /**
   * 实例ID
   */
  InstanceId?: string
  /**
   * 后端任务ID
   */
  WorkId?: string
  /**
   * 导入文件名
   */
  FileName?: string
  /**
   * 执行进度，单位：百分比。
   */
  Process?: number
  /**
   * 任务创建时间
   */
  CreateTime?: string
  /**
   * 文件大小，单位：byte。
   */
  FileSize?: string
  /**
   * 任务执行信息
   */
  Message?: string
  /**
   * 任务ID
   */
  JobId?: number
  /**
   * 导入库表名
   */
  DbName?: string
  /**
   * 异步任务的请求ID
   */
  AsyncRequestId?: string
}

/**
 * DeleteAuditLogFile返回参数结构体
 */
export interface DeleteAuditLogFileResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeSlowLogs返回参数结构体
 */
export interface DescribeSlowLogsResponse {
  /**
   * 符合查询条件的慢查询日志总数。
   */
  TotalCount?: number
  /**
   * 符合查询条件的慢查询日志详情。
   */
  Items?: Array<SlowLogInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeCPUExpandStrategyInfo请求参数结构体
 */
export interface DescribeCPUExpandStrategyInfoRequest {
  /**
   * 实例 ID。可通过 [DescribeDBInstances](https://cloud.tencent.com/document/product/236/15872) 接口获取。
   */
  InstanceId: string
}

/**
 * 备机信息
 */
export interface SlaveInfo {
  /**
   * 第一备机信息
   */
  First?: SlaveInstanceInfo
  /**
   * 第二备机信息
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
  /**
   * 变更集群版实例只读组时，InstanceId传实例id，需要额外指定该参数表示操作只读组。 如果操作读写节点则不需指定该参数。
   */
  OpResourceId?: string
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
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 标签结构
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
 * 规则模板内容
 */
export interface RuleTemplateInfo {
  /**
   * 规则模板ID。
   */
  RuleTemplateId?: string
  /**
   * 规则模板名称。
   */
  RuleTemplateName?: string
  /**
   * 规则内容。
   */
  RuleFilters?: Array<RuleFilters>
  /**
   * 告警等级。1-低风险，2-中风险，3-高风险。
   */
  AlarmLevel?: number
  /**
   * 告警策略。0-不告警，1-告警。
   */
  AlarmPolicy?: number
  /**
   * 规则描述。
   */
  Description?: string
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
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyCdbProxyParam返回参数结构体
 */
export interface ModifyCdbProxyParamResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyInstanceTag返回参数结构体
 */
export interface ModifyInstanceTagResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
   * 分页大小，默认值为50，最小值为1，最大值为1000。
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
   */
  Status?: string
  /**
   * 任务执行信息描述。
   */
  Info?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 参数模板信息
 */
export interface ParamTemplateInfo {
  /**
   * 参数模板 ID
   */
  TemplateId?: number
  /**
   * 参数模板名称
   */
  Name?: string
  /**
   * 参数模板描述
   */
  Description?: string
  /**
   * 实例引擎版本，值为：5.5、5.6、5.7、8.0。
   */
  EngineVersion?: string
  /**
   * 参数模板类型，值为：HIGH_STABILITY、HIGH_PERFORMANCE。
   */
  TemplateType?: string
  /**
   * 参数模板引擎，值为：InnoDB、RocksDB。
   */
  EngineType?: string
}

/**
 * ModifyCdbProxyAddressDesc返回参数结构体
 */
export interface ModifyCdbProxyAddressDescResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyDBInstanceLogToCLS请求参数结构体
 */
export interface ModifyDBInstanceLogToCLSRequest {
  /**
   * 实例 ID，可通过 [DescribeDBInstances](https://cloud.tencent.com/document/product/236/15872) 接口获取。
   */
  InstanceId: string
  /**
   * 日志类型。error：错误日志，slowlog：慢日志。
   */
  LogType: string
  /**
   * 投递状态。ON：开启，OFF：关闭。
   */
  Status: string
  /**
   * 是否需要创建日志集。默认为 false。
   */
  CreateLogset?: boolean
  /**
   * 需要创建日志集时为日志集名称；选择已有日志集时，为日志集 ID。默认为空。
说明：当参数 Status 的值为 ON 时，Logset 和 LogTopic 参数必须填一个。
   */
  Logset?: string
  /**
   * 是否需要创建日志主题。默认为 false。
   */
  CreateLogTopic?: boolean
  /**
   * 需要创建日志主题时为日志主题名称；选择已有日志主题时，为日志主题 ID。默认为空。
说明：当参数 Status 的值为 ON 时，Logset 和 LogTopic 参数必须填一个。
   */
  LogTopic?: string
  /**
   * 日志主题有效期，不填写时，默认30天，最大值3600。
   */
  Period?: number
  /**
   * 创建日志主题时，是否创建索引，默认为 false。
   */
  CreateIndex?: boolean
  /**
   * CLS 所在地域，不填择默认为 Region 的参数值。
   */
  ClsRegion?: string
}

/**
 * DeleteTimeWindow返回参数结构体
 */
export interface DeleteTimeWindowResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * StopCpuExpand返回参数结构体
 */
export interface StopCpuExpandResponse {
  /**
   * 异步任务 ID。在调用 [DescribeAsyncRequestInfo](https://cloud.tencent.com/document/api/236/20410) 进行任务执行进度的查询时，可以传入该 ID。
   */
  AsyncRequestId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeBackupConfig返回参数结构体
 */
export interface DescribeBackupConfigResponse {
  /**
   * 自动备份开始的最早时间点，单位为时刻。例如，2 - 凌晨 2:00。（该字段已废弃，建议使用 BackupTimeWindow 字段）
   * @deprecated
   */
  StartTimeMin?: number
  /**
   * 自动备份开始的最晚时间点，单位为时刻。例如，6 - 凌晨 6:00。（该字段已废弃，建议使用 BackupTimeWindow 字段）
   * @deprecated
   */
  StartTimeMax?: number
  /**
   * 备份文件保留时间，单位为天。
   */
  BackupExpireDays?: number
  /**
   * 备份方式，可能的值为：physical - 物理备份，logical - 逻辑备份。
   */
  BackupMethod?: string
  /**
   * Binlog 文件保留时间，单位为天。
   */
  BinlogExpireDays?: number
  /**
   * 实例自动备份的时间窗。
   */
  BackupTimeWindow?: CommonTimeWindow
  /**
   * 定期保留开关，off - 不开启定期保留策略，on - 开启定期保留策略，默认为off
   */
  EnableBackupPeriodSave?: string
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
  /**
   * 是否开启数据备份归档策略，off-关闭，on-打开，默认为off
   */
  EnableBackupArchive?: string
  /**
   * 数据备份归档起始天数，数据备份达到归档起始天数时进行归档，最小为180天，不得大于数据备份保留天数
   */
  BackupArchiveDays?: number
  /**
   * 是否开启日志备份归档策略，off-关闭，on-打开，默认为off
   */
  EnableBinlogArchive?: string
  /**
   * 日志备份归档起始天数，日志备份达到归档起始天数时进行归档，最小为180天，不得大于日志备份保留天数
   */
  BinlogArchiveDays?: number
  /**
   * 是否开启数据备份标准存储策略，off-关闭，on-打开，默认为off
   */
  EnableBackupStandby?: string
  /**
   * 数据备份标准存储起始天数，数据备份达到标准存储起始天数时进行转换，最小为30天，不得大于数据备份保留天数。如果开启备份归档，不得大于等于备份归档天数
   */
  BackupStandbyDays?: number
  /**
   * 是否开启日志备份标准存储策略，off-关闭，on-打开，默认为off
   */
  EnableBinlogStandby?: string
  /**
   * 日志备份标准存储起始天数，日志备份达到标准存储起始天数时进行转换，最小为30天，不得大于日志备份保留天数。如果开启备份归档，不得大于等于备份归档天数
   */
  BinlogStandbyDays?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
  TotalCount?: number
  /**
   * 参数模板详情。
   */
  Items?: Array<ParamTemplateInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
  DeployMode: Array<number | bigint>
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
   * 项目 ID。可通过 [DescribeProjects](https://cloud.tencent.com/document/api/651/78725) 接口获取。
   */
  ProjectId?: number
}

/**
 * StopReplication请求参数结构体
 */
export interface StopReplicationRequest {
  /**
   * 实例 ID。仅支持只读实例。可通过 [DescribeDBInstances](https://cloud.tencent.com/document/product/236/15872) 接口获取。
   */
  InstanceId: string
}

/**
 * StartCpuExpand返回参数结构体
 */
export interface StartCpuExpandResponse {
  /**
   * 异步任务 ID 。可以调用 DescribeAsyncRequest 传入该 ID，进行任务执行进度的查询。
   */
  AsyncRequestId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateCloneInstance返回参数结构体
 */
export interface CreateCloneInstanceResponse {
  /**
   * 异步任务的请求ID，可使用此 ID 查询异步任务的执行结果。
   */
  AsyncRequestId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeCdbZoneConfig请求参数结构体
 */
export type DescribeCdbZoneConfigRequest = null

/**
 * ResetPassword请求参数结构体
 */
export interface ResetPasswordRequest {
  /**
   * 实例 ID，格式如：cdb-c1nl9rpv，与云数据库控制台页面中显示的实例 ID 相同。
   */
  InstanceId: string
  /**
   * 手动刷新轮转密码的实例账户名，例如root
   */
  User: string
  /**
   * 手动刷新轮转密码的实例账户域名，例如%
   */
  Host: string
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
   * RO 组的 ID，格式如：cdbrg-c1nl9rpv。可通过 [DescribeRoGroups](https://cloud.tencent.com/document/api/236/40939) 获取。
   */
  RoGroupId: string
}

/**
 * DescribeBackupOverview返回参数结构体
 */
export interface DescribeBackupOverviewResponse {
  /**
   * 用户在当前地域备份的总个数（包含数据备份和日志备份）。
   */
  BackupCount?: number
  /**
   * 用户在当前地域备份的总容量
   */
  BackupVolume?: number
  /**
   * 用户在当前地域备份的计费容量，即超出赠送容量的部分。
   */
  BillingVolume?: number
  /**
   * 用户在当前地域获得的赠送备份容量。
   */
  FreeVolume?: number
  /**
   * 用户在当前地域的异地备份总容量。
   */
  RemoteBackupVolume?: number
  /**
   * 归档备份容量，包含数据备份以及日志备份。
   */
  BackupArchiveVolume?: number
  /**
   * 标准存储备份容量，包含数据备份以及日志备份。
   */
  BackupStandbyVolume?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
 * 实例的标签信息
 */
export interface TagsInfoOfInstance {
  /**
   * 实例Id
   */
  InstanceId?: string
  /**
   * 标签信息
   */
  Tags?: Array<TagInfoUnit>
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
 * DescribeInstanceUpgradeType请求参数结构体
 */
export interface DescribeInstanceUpgradeTypeRequest {
  /**
   * 实例 ID。可通过 [DescribeDBInstances](https://cloud.tencent.com/document/product/236/15872) 接口获取。
   */
  InstanceId: string
  /**
   * 目标实例 CPU 的核数。为保证传入值有效，请使用 [DescribeCdbZoneConfig](https://cloud.tencent.com/document/product/236/80281) 获取实例可售卖的 CPU 值范围。
   */
  DstCpu: number
  /**
   * 目标实例内存大小，单位：MB。为保证传入值有效，请使用 [DescribeCdbZoneConfig](https://cloud.tencent.com/document/product/236/80281) 获取实例可售卖的内存大小范围。
   */
  DstMemory: number
  /**
   * 目标实例磁盘大小，单位：GB。为保证传入值有效，请使用 [DescribeCdbZoneConfig](https://cloud.tencent.com/document/product/236/80281) 获取实例可售卖的磁盘大小范围。
   */
  DstDisk: number
  /**
   * 目标实例数据库版本。可选值：5.6，5.7，8.0。
   */
  DstVersion?: string
  /**
   * 目标实例部署模型。默认为0，支持值包括：0 - 表示单可用区，1 - 表示多可用区。
   */
  DstDeployMode?: number
  /**
   * 目标实例复制类型，支持值包括：0 - 表示异步复制，1 - 表示半同步复制，2 - 表示强同步复制。
   */
  DstProtectMode?: number
  /**
   * 目标实例备机1可用区 ID。可使用 [DescribeCdbZoneConfig](https://cloud.tencent.com/document/product/236/80281) 获取可用区 ID。
   */
  DstSlaveZone?: number
  /**
   * 目标实例备机2可用区 ID。可使用 [DescribeCdbZoneConfig](https://cloud.tencent.com/document/product/236/80281) 获取可用区 ID。
   */
  DstBackupZone?: number
  /**
   * 目标实例类型。支持值包括："CUSTOM" - 通用型实例，"EXCLUSIVE" - 独享型实例，"ONTKE" - ONTKE 单节点实例，"CLOUD_NATIVE_CLUSTER" - 云盘版标准型，"CLOUD_NATIVE_CLUSTER_EXCLUSIVE" - 云盘版加强型。
   */
  DstCdbType?: string
  /**
   * 目标实例主可用区 ID。可使用 [DescribeCdbZoneConfig](https://cloud.tencent.com/document/product/236/80281) 获取可用区 ID。
   */
  DstZoneId?: number
  /**
   * 独享集群 CDB 实例的节点分布情况。
   */
  NodeDistribution?: NodeDistribution
  /**
   * 集群版的节点拓扑配置。Nodeld信息可通过 [DescribeClusterInfo](https://cloud.tencent.com/document/api/236/105116) 接口获取。
   */
  ClusterTopology?: ClusterTopology
}

/**
 * DescribeDBInstanceConfig返回参数结构体
 */
export interface DescribeDBInstanceConfigResponse {
  /**
   * 主实例数据保护方式，可能的返回值：0 - 异步复制方式，1 - 半同步复制方式，2 - 强同步复制方式。
   */
  ProtectMode?: number
  /**
   * 主实例部署方式，可能的返回值：0 - 单可用部署，1 - 多可用区部署。
   */
  DeployMode?: number
  /**
   * 实例可用区信息，格式如 "ap-shanghai-2"。
   */
  Zone?: string
  /**
   * 备库的配置信息。
注意：此字段可能返回 null，表示取不到有效值。
   */
  SlaveConfig?: SlaveConfig
  /**
   * 强同步实例第二备库的配置信息。
注意：此字段可能返回 null，表示取不到有效值。
   */
  BackupConfig?: BackupConfig
  /**
   * 是否切换备库。
   */
  Switched?: boolean
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
  ReplicationMode?: string
  /**
   * 从库可用区的正式名称，如 ap-shanghai-2
   */
  Zone?: string
}

/**
 * ModifyAccountPrivileges返回参数结构体
 */
export interface ModifyAccountPrivilegesResponse {
  /**
   * 异步任务的请求 ID，可使用此 ID 查询异步任务的执行结果。
   */
  AsyncRequestId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * StopRollback请求参数结构体
 */
export interface StopRollbackRequest {
  /**
   * 撤销回档任务对应的实例 ID。可通过 [DescribeDBInstances](https://cloud.tencent.com/document/api/236/15872) 接口获取。
   */
  InstanceId: string
}

/**
 * DB实例慢日志、错误日志投递CLS配置
 */
export interface LogToCLSConfig {
  /**
   * 投递状态打开或者关闭
   */
  Status?: string
  /**
   * CLS日志集ID
   */
  LogSetId?: string
  /**
   * 日志主题ID
   */
  LogTopicId?: string
  /**
   * CLS服务所在地域
   */
  ClsRegion?: string
}

/**
 * ResetRootAccount请求参数结构体
 */
export interface ResetRootAccountRequest {
  /**
   * 实例 ID。可通过 [DescribeDBInstances](https://cloud.tencent.com/document/product/236/15872) 接口获取。
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
 * 云盘版实例节点信息
 */
export interface ClusterNodeInfo {
  /**
   * 节点id。
   */
  NodeId?: string
  /**
   * 节点的角色。
   */
  Role?: string
  /**
   * 节点所在可用区。
   */
  Zone?: string
  /**
   * 节点的权重
   */
  Weight?: number
  /**
   * 节点状态。
   */
  Status?: string
}

/**
 * DescribeTableColumns请求参数结构体
 */
export interface DescribeTableColumnsRequest {
  /**
   * 实例 ID，格式如：cdb-c1nl9rpv，与云数据库控制台页面中显示的实例ID相同，可使用[查询实例列表](https://cloud.tencent.com/document/api/236/15872) 接口获取，其值为输出参数中字段 InstanceId 的值。
   */
  InstanceId: string
  /**
   * 数据库名称，可使用 [查询数据库](https://cloud.tencent.com/document/api/236/17493) 接口获得。
   */
  Database: string
  /**
   * 数据库中的表的名称。
   */
  Table: string
}

/**
 * DescribeProxyCustomConf返回参数结构体
 */
export interface DescribeProxyCustomConfResponse {
  /**
   * 代理配置数
   */
  Count?: number
  /**
   * 代理配置
   * @deprecated
   */
  CustomConf?: CustomConfig
  /**
   * 权重限制
   */
  WeightRule?: Rule
  /**
   * 代理配置
   */
  CustomConfInfo?: Array<CustomConfig>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyAuditConfig返回参数结构体
 */
export interface ModifyAuditConfigResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * SwitchDrInstanceToMaster返回参数结构体
 */
export interface SwitchDrInstanceToMasterResponse {
  /**
   * 异步任务的请求ID，可使用此ID查询异步任务的执行结果。
   */
  AsyncRequestId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyDBInstanceName返回参数结构体
 */
export interface ModifyDBInstanceNameResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
 * 规则模板变更记录信息
 */
export interface RuleTemplateRecordInfo {
  /**
   * 任务ID
   */
  TaskId?: number
  /**
   * 修改前规则模板的详情。
   */
  ModifyBeforeInfo?: RuleTemplateInfo
  /**
   * 修改后规则模板的详情。
   */
  ModifyAfterInfo?: RuleTemplateInfo
  /**
   * 影响的实例。
   */
  AffectedInstances?: Array<string>
  /**
   * 操作人，账号uin。
   */
  Operator?: string
  /**
   * 变更的时间。
   */
  UpdateTime?: string
}

/**
 * DescribeCloneList返回参数结构体
 */
export interface DescribeCloneListResponse {
  /**
   * 满足条件的条目数。
   */
  TotalCount?: number
  /**
   * 克隆任务列表。
   */
  Items?: Array<CloneItem>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDBInstanceLogToCLS请求参数结构体
 */
export interface DescribeDBInstanceLogToCLSRequest {
  /**
   * 实例 ID。可通过 [DescribeDBInstances](https://cloud.tencent.com/document/product/236/15872) 接口获取。
   */
  InstanceId: string
  /**
   * CLS服务所在地域
   */
  ClsRegion?: string
}

/**
 * 分析引擎节点信息
 */
export interface AnalysisNodeInfo {
  /**
   * 节点ID
   */
  NodeId?: string
  /**
   * 节点状态
   */
  Status?: string
  /**
   * 数据加载状态
   */
  DataStatus?: string
  /**
   * cpu核数，单位：核
   */
  Cpu?: number
  /**
   * 内存大小，单位: MB
   */
  Memory?: number
  /**
   * 磁盘大小，单位：GB
   */
  Storage?: number
  /**
   * 节点所在可用区
   */
  Zone?: string
  /**
   * 数据同步错误信息
   */
  Message?: string
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
 * OpenDBInstanceEncryption请求参数结构体
 */
export interface OpenDBInstanceEncryptionRequest {
  /**
   * 云数据库实例 ID。可通过 [DescribeDBInstances](https://cloud.tencent.com/document/product/236/15872) 接口获取。
   */
  InstanceId: string
  /**
   * 用户自定义密钥 ID，CMK 唯一标识符。该值为空时，将使用腾讯云自动生成的密钥 KMS-CDB。
   */
  KeyId?: string
  /**
   * 用户自定义密钥的存储地域。如：ap-guangzhou 。KeyId 不为空时，该参数必填。
   */
  KeyRegion?: string
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
 * ModifyInstancePasswordComplexity返回参数结构体
 */
export interface ModifyInstancePasswordComplexityResponse {
  /**
   * 异步任务 ID，可用于查询任务进度。
   */
  AsyncRequestId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 实例所在物理机内存监控信息
 */
export interface DeviceMemInfo {
  /**
   * 总内存大小。free命令中Mem:一行total的值,单位：KB
   */
  Total?: Array<number | bigint>
  /**
   * 已使用内存。free命令中Mem:一行used的值,单位：KB
   */
  Used?: Array<number | bigint>
}

/**
 * 审计日志分析结果
 */
export interface AuditLogAggregationResult {
  /**
   * 聚合维度
   */
  AggregationField?: string
  /**
   * 聚合桶的结果集
   */
  Buckets?: Array<Bucket>
}

/**
 * 数据库名以及字符集
 */
export interface DatabasesWithCharacterLists {
  /**
   * 数据库名
   */
  DatabaseName?: string
  /**
   * 字符集类型
   */
  CharacterSet?: string
}

/**
 * DescribeRemoteBackupConfig请求参数结构体
 */
export interface DescribeRemoteBackupConfigRequest {
  /**
   * 实例 ID，格式如：cdb-c1nl9rpv。与云数据库控制台页面中显示的实例 ID 相同。
   */
  InstanceId: string
}

/**
 * 云盘版的节点拓扑配置。
 */
export interface ClusterTopology {
  /**
   * RW 节点拓扑。
说明：NodeId 可通过 [DescribeDBInstances](https://cloud.tencent.com/document/product/236/15872) 获取。
   */
  ReadWriteNode?: ReadWriteNode
  /**
   * RO 节点拓扑。
说明：NodeId 可通过 [DescribeDBInstances](https://cloud.tencent.com/document/product/236/15872) 获取。
   */
  ReadOnlyNodes?: Array<ReadonlyNode>
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
  TotalCount?: number
  /**
   * 实例详细信息列表。
   */
  Items?: Array<InstanceInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
  Affinity?: Array<number | bigint>
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
 * 单条扩容历史记录
 */
export interface HistoryJob {
  /**
   * 操作类型
   */
  OperationType?: string
  /**
   * 扩容类型
   */
  ExpandType?: string
  /**
   * 扩容开始时间
说明：此项显示的格式是 int 类型的 unix 时间戳
   */
  StartTime?: number
  /**
   * 扩容结束时间
说明：此项显示的格式是 int 类型的 unix 时间戳
   */
  EndTime?: number
  /**
   * 扩容前核数
   */
  OldCpu?: number
  /**
   * 扩容后核数
   */
  NewCpu?: number
  /**
   * 增减的cpu数
   */
  ExtendCPUNum?: number
  /**
   * extend_failed操作上报
   */
  Error?: string
}

/**
 * DescribeAccounts返回参数结构体
 */
export interface DescribeAccountsResponse {
  /**
   * 符合查询条件的账号数量。
   */
  TotalCount?: number
  /**
   * 符合查询条件的账号详细信息。
   */
  Items?: Array<AccountInfo>
  /**
   * 用户可设置实例最大连接数。
   */
  MaxUserConnections?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
  Begin?: string
  /**
   * 实例可回档结束时间，时间格式：2016-11-02 11:44:47
   */
  End?: string
}

/**
 * 审计日志详细信息
 */
export interface AuditLog {
  /**
   * 影响行数。
   */
  AffectRows?: number
  /**
   * 错误码。
   */
  ErrCode?: number
  /**
   * SQL 类型。
   */
  SqlType?: string
  /**
   * 审计策略名称，逐步下线。
   */
  PolicyName?: string
  /**
   * 数据库名称。
   */
  DBName?: string
  /**
   * SQL 语句。
   */
  Sql?: string
  /**
   * 客户端地址。
   */
  Host?: string
  /**
   * 用户名。
   */
  User?: string
  /**
   * 执行时间，微秒。
   */
  ExecTime?: number
  /**
   * 时间。
   */
  Timestamp?: string
  /**
   * 返回行数。
   */
  SentRows?: number
  /**
   * 线程ID。
   */
  ThreadId?: number
  /**
   * 扫描行数。
   */
  CheckRows?: number
  /**
   * cpu执行时间，微秒。
   */
  CpuTime?: number
  /**
   * IO等待时间，微秒。
   */
  IoWaitTime?: number
  /**
   * 锁等待时间，微秒。
   */
  LockWaitTime?: number
  /**
   * 开始时间，与timestamp构成一个精确到纳秒的时间。
   */
  NsTime?: number
  /**
   * 事物持续时间，微秒。
   */
  TrxLivingTime?: number
  /**
   * 日志命中规则模板的基本信息
   */
  TemplateInfo?: Array<LogRuleTemplateInfo>
  /**
   *  事务ID
   */
  TrxId?: number
}

/**
 * DescribeAuditRuleTemplateModifyHistory返回参数结构体
 */
export interface DescribeAuditRuleTemplateModifyHistoryResponse {
  /**
   * 总的条数。
   */
  TotalCount?: number
  /**
   * 变更详情。
   */
  Items?: Array<RuleTemplateRecordInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
   * 分页大小参数。默认值为20，最小值为1，最大值为300。
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
   * 实例 ID，格式如：cdb-c1nl9rpv。与云数据库控制台页面中显示的实例 ID 相同。
   */
  InstanceId: string
  /**
   * 数据备份文件的保留时间，单位为天。
1. MySQL 双节点、三节点、云盘版数据备份文件可以保留7天 - 1830天。
2. MySQL 单节点（云盘）数据备份文件可以保留7天 - 30天。
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
   * binlog 的保留时间，单位为天。
1. MySQL 双节点、三节点、云盘版日志备份文件可以保留7天 - 3650天。
2. MySQL 单节点（云盘）日志备份文件可以保留7天 - 30天。
   */
  BinlogExpireDays?: number
  /**
   * 备份时间窗，比如要设置每周二和周日 10:00-14:00之间备份，该参数如下：{"Monday": "", "Tuesday": "10:00-14:00", "Wednesday": "", "Thursday": "", "Friday": "", "Saturday": "", "Sunday": "10:00-14:00"}    （注：可以设置一周的某几天备份，但是每天的备份时间需要设置为相同的时间段。 如果设置了该字段，将忽略StartTime字段的设置）
   */
  BackupTimeWindow?: CommonTimeWindow
  /**
   * 定期保留开关，off - 不开启定期保留策略，on - 开启定期保留策略，默认为off。
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
  /**
   * 是否开启数据备份归档策略，off-关闭，on-打开，如果不指定该入参， 则保持不变。
   */
  EnableBackupArchive?: string
  /**
   * 数据备份归档起始天数，数据备份达到归档起始天数时进行归档，最小为180天，不得大于数据备份保留天数
   */
  BackupArchiveDays?: number
  /**
   * 日志备份归档起始天数，日志备份达到归档起始天数时进行归档，最小为180天，不得大于日志备份保留天数
   */
  BinlogArchiveDays?: number
  /**
   * 是否开启日志备份归档策略，off-关闭，on-打开，如果不指定该入参， 则保持不变。
   */
  EnableBinlogArchive?: string
  /**
   * 是否开启数据备份标准存储策略，off-关闭，on-打开，如果不指定该入参， 则保持不变。
   */
  EnableBackupStandby?: string
  /**
   * 数据备份标准存储起始天数，数据备份达到标准存储起始天数时进行转换，最小为30天，不得大于数据备份保留天数。如果开启备份归档，不得大于等于备份归档天数
   */
  BackupStandbyDays?: number
  /**
   * 是否开启日志备份标准存储策略，off-关闭，on-打开，如果不指定该入参， 则保持不变。
   */
  EnableBinlogStandby?: string
  /**
   * 日志备份标准存储起始天数，日志备份达到标准存储起始天数时进行转换，最小为30天，不得大于日志备份保留天数。如果开启备份归档，不得大于等于备份归档天数
   */
  BinlogStandbyDays?: number
}

/**
 * 磁盘售卖类型
 */
export interface DiskTypeConfigItem {
  /**
   * 磁盘对应的实例类型。仅支持单节点（云盘）和云盘版。
   */
  DeviceType?: string
  /**
   * 可以选择的磁盘类型列表。
   */
  DiskType?: Array<string>
}

/**
 * DisassociateSecurityGroups返回参数结构体
 */
export interface DisassociateSecurityGroupsResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
  DeployGroupId?: string
  /**
   * 置放群组名称。
   */
  DeployGroupName?: string
  /**
   * 创建时间。
   */
  CreateTime?: string
  /**
   * 置放群组实例配额，表示一个置放群组中可容纳的最大实例数目。
   */
  Quota?: number
  /**
   * 置放群组亲和性策略，目前仅支持策略1，即在物理机纬度打散实例的分布。
   */
  Affinity?: string
  /**
   * 置放群组亲和性策略1中，同台物理机上同个置放群组实例的限制个数。
   */
  LimitNum?: number
  /**
   * 置放群组详细信息。
   */
  Description?: string
  /**
   * 置放群组物理机型属性。
   */
  DevClass?: string
}

/**
 * 本地 binlog 保留配置
 */
export interface LocalBinlogConfig {
  /**
   * 本地 binlog 保留时长，可取值范围：[6,168]。
   */
  SaveHours?: number
  /**
   * 本地 binlog 空间使用率，可取值范围：[30,50]。
   */
  MaxUsage?: number
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
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
   * 可用区信息，请使用 [获取云数据库可售卖规格](https://cloud.tencent.com/document/api/236/17229) 接口获取可创建的可用区。
说明：若您创建单节点、双节点、三节点实例，此参数为必填项，请指定可用区，若不指定可用区，则系统会自动选择一个可用区（可能不是您希望部署的可用区）；若您创建云盘版实例，此参数不填，请通过参数 ClusterTopology 进行读写节点和只读节点的可用区配置。
   */
  Zone?: string
  /**
   * 私有网络 ID，请使用 [查询私有网络列表](/document/api/215/15778)。
说明：如果创建的是云盘版实例，此参数为必填且为私有网络类型。若此项不填，则系统会选择默认的 VPC。
   */
  UniqVpcId?: string
  /**
   * 私有网络下的子网 ID，如果设置了 UniqVpcId，则 UniqSubnetId 必填，请使用 [查询子网列表](/document/api/215/15784)。
说明：若此项不填，则系统会选择默认 VPC 下的默认子网。
   */
  UniqSubnetId?: string
  /**
   * 项目 ID，不填为默认项目。购买只读实例和灾备实例时，项目 ID 默认和主实例保持一致。
   */
  ProjectId?: number
  /**
   * 自定义端口，端口支持范围：[ 1024-65535 ]。
说明：若此项不填，则默认为3306。
   */
  Port?: number
  /**
   * 实例类型，支持值包括：master - 表示主实例，dr - 表示灾备实例，ro - 表示只读实例。
说明：请选择实例类型，不填会默认选择 master。
   */
  InstanceRole?: string
  /**
   * 实例 ID，购买只读实例或灾备实例时必填，该字段表示只读实例或灾备实例的主实例 ID，请使用 [查询实例列表](https://cloud.tencent.com/document/api/236/15872) 接口查询云数据库实例 ID。
   */
  MasterInstanceId?: string
  /**
   * MySQL 版本，值包括：5.5、5.6、5.7和8.0，请使用 [获取云数据库可售卖规格](https://cloud.tencent.com/document/api/236/17229) 接口获取可创建的实例版本。
说明：创建非云盘版实例时，请根据需要指定实例版本（推荐5.7或8.0），若此参数不填，则默认值为8.0；若创建的是云盘版实例，则此参数仅能指定为5.7或8.0。
   */
  EngineVersion?: string
  /**
   * 设置 root 账号密码，密码规则：8 - 64 个字符，至少包含字母、数字、字符（支持的字符：_+-&=!@#$%^*()）中的两种，购买主实例时可指定该参数，购买只读实例或者灾备实例时指定该参数无意义。
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
   * 备库 1 的可用区信息。
说明：双节点、三节点实例请指定此参数值，若不指定，则默认为 Zone 的值；云盘版实例此参数可不填，请通过参数 ClusterTopology 进行读写节点和只读节点的可用区配置；单节点实例为单可用区，无需指定此参数。
   */
  SlaveZone?: string
  /**
   * 参数列表，参数格式如 ParamList.0.Name=auto_increment&ParamList.0.Value=1。可通过 [查询默认的可设置参数列表](https://cloud.tencent.com/document/api/236/32662) 查询支持设置的参数。
说明：表名大小写敏感的开启和关闭可通过参数 lower_case_table_names 进行设置，参数值为0表示开启，参数值为1表示关闭，若不设置则此参数默认值为0。若您创建的是 MySQL 8.0 版本的实例，则需要在创建实例时通过设置 lower_case_table_names 参数来开启或关闭表名大小写敏感，创建实例后无法修改参数，即创建后无法修改表名大小写敏感。其他数据库版本的实例支持在创建实例后修改 lower_case_table_names 参数。创建实例时设置表名大小写敏感的 API 调用方法请参见本文中的示例3。
   */
  ParamList?: Array<ParamInfo>
  /**
   * 备库 2 的可用区信息，默认为空，购买三节点主实例时可指定该参数。
   */
  BackupZone?: string
  /**
   * 自动续费标记，可选值为：0 - 不自动续费；1 - 自动续费。默认为0。
   */
  AutoRenewFlag?: number
  /**
   * 主实例地域信息，购买灾备、RO实例时，该字段必填。
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
   * 实例名称。一次购买多个实例命名会用后缀数字区分，例instnaceName=db，goodsNum=3，实例命名分别为db1，db2，db3。
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
   * 实例隔离类型。支持值包括："UNIVERSAL" - 通用型实例，"EXCLUSIVE" - 独享型实例，"BASIC_V2" - ONTKE 单节点实例，"CLOUD_NATIVE_CLUSTER" - 云盘版标准型，"CLOUD_NATIVE_CLUSTER_EXCLUSIVE" - 云盘版加强型。不指定则默认为通用型实例。
说明：如果创建的是云盘版实例，此参数为必填。
   */
  DeviceType?: string
  /**
   * 参数模板 id。
备注：如您使用自定义参数模板 id，可传入自定义参数模板 id；如您计划使用默认参数模板，该参数模板 id 传入 id 无效，需设置 ParamTemplateType。
   */
  ParamTemplateId?: number
  /**
   * 告警策略id数组。腾讯云可观测平台DescribeAlarmPolicy接口返回的OriginId。
   */
  AlarmPolicyList?: Array<number | bigint>
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
备注：如您需使用云数据库 MySQL 默认参数模板，请设置 ParamTemplateType。
   */
  ParamTemplateType?: string
  /**
   * 告警策略名数组，例如:["policy-uyoee9wg"]，AlarmPolicyList不为空时该参数无效。
   */
  AlarmPolicyIdList?: Array<string>
  /**
   * 是否只预检此次请求。true：发送检查请求，不会创建实例。检查项包括是否填写了必需参数，请求格式，业务限制等。如果检查不通过，则返回对应错误码；如果检查通过，则返回 RequestId。false：发送正常请求，通过检查后直接创建实例。
默认为 false。
   */
  DryRun?: boolean
  /**
   * 实例引擎类型，默认为"InnoDB"，支持值包括："InnoDB"，"RocksDB"。
   */
  EngineType?: string
  /**
   * 指定实例的IP列表。仅支持主实例指定，按实例顺序，不足则按未指定处理。
   */
  Vips?: Array<string>
  /**
   * 云盘版实例的数据保护空间大小，单位 GB，设置范围1 - 10。
   */
  DataProtectVolume?: number
  /**
   * 云盘版节点拓扑配置。
说明：若购买的是云盘版实例，此参数为必填，需设置云盘版实例的 RW 和 RO 节点拓扑，RO 节点范围是1 - 5个，请至少设置1个 RO 节点。
   */
  ClusterTopology?: ClusterTopology
  /**
   * 磁盘类型，单节点（云盘版）或者云盘版实例可以指定此参数。CLOUD_SSD 表示 SSD 云硬盘，CLOUD_HSSD 表示增强型 SSD 云硬盘，CLOUD_PREMIUM 表示高性能云硬盘。
说明：单节点（云盘版）、云盘版实例硬盘类型所支持的地域略有不同，具体支持情况请参考 [地域和可用区](https://cloud.tencent.com/document/product/236/8458)。
   */
  DiskType?: string
  /**
   * 开启或关闭实例销毁保护。on-开启，off-关闭
   */
  DestroyProtect?: string
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
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeAuditLogs请求参数结构体
 */
export interface DescribeAuditLogsRequest {
  /**
   * 实例 ID。可通过 [DescribeDBInstances](https://cloud.tencent.com/document/product/236/15872) 接口获取。
   */
  InstanceId: string
  /**
   * 开始时间(建议开始到结束时间区间最大7天)。
   */
  StartTime: string
  /**
   * 结束时间(建议开始到结束时间区间最大7天）。
   */
  EndTime: string
  /**
   * 分页参数，单次返回的数据条数。默认值为100，最大值为100。
   */
  Limit?: number
  /**
   * 日志偏移量，最多支持偏移查询65535条日志。可填写范围：0 - 65535。
   */
  Offset?: number
  /**
   * 排序方式。支持值包括："ASC" - 升序，"DESC" - 降序，默认降序排序。
   */
  Order?: string
  /**
   * 排序字段。支持值包括(默认按照时间戳排序)：
"timestamp" - 时间戳；
"affectRows" - 影响行数；
"execTime" - 执行时间。
   */
  OrderBy?: string
  /**
   * 过滤条件。多个值之前是且的关系。
   */
  LogFilter?: Array<InstanceAuditLogFilters>
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
  RoVipStatus?: number
  /**
   * 只读vip的子网
   */
  RoSubnetId?: number
  /**
   * 只读vip的私有网络
   */
  RoVpcId?: number
  /**
   * 只读vip的端口号
   */
  RoVport?: number
  /**
   * 只读vip
   */
  RoVip?: string
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
  /**
   * 默认无排序，支持：ASC、DESC、asc、desc
   */
  SortBy?: string
  /**
   * 待排序的时间字段，可选：CreateTime(账号创建时间)、ModifyTime(账号更新时间)、ModifyPasswordTime(密码修改时间)
   */
  OrderBy?: string
}

/**
 * ModifyAuditService请求参数结构体
 */
export interface ModifyAuditServiceRequest {
  /**
   * 实例 ID。可通过 [DescribeDBInstances](https://cloud.tencent.com/document/product/236/15872) 接口获取。
   */
  InstanceId: string
  /**
   * 日志保留时长。支持值包括：
7 - 一周；
30 - 一个月；
90 - 三个月；
180 - 六个月；
365 - 一年；
1095 - 三年；
1825 - 五年。
   */
  LogExpireDay?: number
  /**
   * 高频日志保留时长。默认值为7，此项取值需小于等于 LogExpireDay，支持值包括：
3 - 3天；
7 - 一周；
30 - 一个月；
90 - 三个月；
180 - 六个月；
365 - 一年；
1095 - 三年；
1825 - 五年。
   */
  HighLogExpireDay?: number
  /**
   * 修改实例审计规则为全审计。
   */
  AuditAll?: boolean
  /**
   * 废弃。
   * @deprecated
   */
  AuditRuleFilters?: Array<AuditRuleFilters>
  /**
   * 规则模板 ID。可通过 [DescribeAuditRuleTemplates](https://cloud.tencent.com/document/api/236/101811) 接口获取。
   */
  RuleTemplateIds?: Array<string>
}

/**
 * DescribeErrorLogData请求参数结构体
 */
export interface DescribeErrorLogDataRequest {
  /**
   * 实例 ID。可通过 [DescribeDBInstances](https://cloud.tencent.com/document/product/236/15872) 接口获取。
   */
  InstanceId: string
  /**
   * 开始时间戳。例如1585142640，秒级。
   */
  StartTime: number
  /**
   * 结束时间戳。例如1585142640，秒级。
   */
  EndTime: number
  /**
   * 要匹配的关键字列表，最多支持15个关键字，支持模糊匹配。
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
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDBInstanceRebootTime请求参数结构体
 */
export interface DescribeDBInstanceRebootTimeRequest {
  /**
   * 实例的 ID，格式如：cdb-c1nl9rpv，与云数据库控制台页面中显示的实例 ID 相同。
说明：可输入多个实例 ID 进行查询，json 格式如下。
[
    "cdb-30z11v8s",
    "cdb-93h11efg"
  ]
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
   * 地址模块
   */
  AddressModule?: string
  /**
   * 规则ID，嵌套安全组的规则ID
   */
  Id?: string
  /**
   * 规则描述
   */
  Desc?: string
}

/**
 * CreateAccounts返回参数结构体
 */
export interface CreateAccountsResponse {
  /**
   * 异步任务的请求 ID，可使用此 ID 查询异步任务的执行结果。
   */
  AsyncRequestId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyDBInstanceModes请求参数结构体
 */
export interface ModifyDBInstanceModesRequest {
  /**
   * 实例ID，格式如：cdb-c1nl9rpv，与云数据库控制台页面中显示的实例ID相同。
   */
  InstanceId: string
  /**
   * 云数据库的模式，目前仅支持传入 "protectMode" 表示修改主从同步方式。
   */
  Mode: string
  /**
   * 数据同步方式，可选值：0-异步复制，1-半同步复制，2-强同步复制。
   */
  ProtectMode?: number
}

/**
 * 售卖实例类型
 */
export interface CdbSellType {
  /**
   * 售卖实例名称。
Z3：是高可用类型，对应规格中的 DeviceType，包含 UNIVERSAL，EXCLUSIVE。
CVM：是基础版类型，对应规格中的 DeviceType 是 BASIC（已下线）。
TKE：是基础版v2类型，对应规格中的 DeviceType 是 BASIC_V2。
CLOUD_NATIVE_CLUSTER：表示云盘版标准型。
CLOUD_NATIVE_CLUSTER_EXCLUSIVE：表示云盘版加强型。
ECONOMICAL：表示经济型。
   */
  TypeName?: string
  /**
   * 引擎版本号
   */
  EngineVersion?: Array<string>
  /**
   * 售卖规格Id
   */
  ConfigIds?: Array<number | bigint>
}

/**
 * 主实例信息
 */
export interface MasterInfo {
  /**
   * 地域信息
   */
  Region?: string
  /**
   * 地域ID
   */
  RegionId?: number
  /**
   * 可用区ID
   */
  ZoneId?: number
  /**
   * 可用区信息
   */
  Zone?: string
  /**
   * 实例ID
   */
  InstanceId?: string
  /**
   * 实例长ID
   */
  ResourceId?: string
  /**
   * 实例状态
   */
  Status?: number
  /**
   * 实例名称
   */
  InstanceName?: string
  /**
   * 实例类型
   */
  InstanceType?: number
  /**
   * 任务状态
   */
  TaskStatus?: number
  /**
   * 内存容量
   */
  Memory?: number
  /**
   * 硬盘容量
   */
  Volume?: number
  /**
   * 实例机型
   */
  DeviceType?: string
  /**
   * 每秒查询数
   */
  Qps?: number
  /**
   * 私有网络ID
   */
  VpcId?: number
  /**
   * 子网ID
   */
  SubnetId?: number
  /**
   * 独享集群ID
   */
  ExClusterId?: string
  /**
   * 独享集群名称
   */
  ExClusterName?: string
}

/**
 * ResetRootAccount返回参数结构体
 */
export interface ResetRootAccountResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 数据库账号信息
 */
export interface Account {
  /**
   * 账号名，可输入1 - 32个字符。
   */
  User: string
  /**
   * 账号的主机。
说明：
1. IP 形式，支持填入%。
2. 多个主机以分隔符分隔，分隔符支持;,|换行符和空格。
   */
  Host: string
}

/**
 * ModifyNameOrDescByDpId返回参数结构体
 */
export interface ModifyNameOrDescByDpIdResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeClusterInfo请求参数结构体
 */
export interface DescribeClusterInfoRequest {
  /**
   * 实例 ID。可通过 [DescribeDBInstances](https://cloud.tencent.com/document/product/236/15872) 接口获取。
说明：仅能输入实例架构为云盘版的实例 ID，对应控制台实例配置显示为“云盘版（云盘）”的实例。
   */
  InstanceId: string
}

/**
 * DescribeDBPrice返回参数结构体
 */
export interface DescribeDBPriceResponse {
  /**
   * 实例价格，单位：分。
   */
  Price?: number
  /**
   * 实例原价，单位：分。
   */
  OriginalPrice?: number
  /**
   * 货币单位。CNY-人民币，USD-美元。
   */
  Currency?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
  /**
   * 影响行数，格式为M-N，例如：10-200
   */
  AffectRowsSection?: string
  /**
   * 返回行数，格式为M-N，例如：10-200
   */
  SentRowsSection?: string
  /**
   * 执行时间，格式为M-N，例如：10-200
   */
  ExecTimeSection?: string
  /**
   * 锁等待时间，格式为M-N，例如：10-200
   */
  LockWaitTimeSection?: string
  /**
   * IO等待时间，格式为M-N，例如：10-200
   */
  IoWaitTimeSection?: string
  /**
   * 事务持续时间，格式为M-N，例如：10-200
   */
  TransactionLivingTimeSection?: string
  /**
   * 线程ID
   */
  ThreadId?: Array<string>
  /**
   * 返回行数。表示筛选返回行数大于该值的审计日志。
   */
  SentRows?: number
  /**
   * mysql错误码
   */
  ErrCode?: Array<number | bigint>
}

/**
 * OpenDBInstanceGTID返回参数结构体
 */
export interface OpenDBInstanceGTIDResponse {
  /**
   * 异步任务的请求 ID，可使用此 ID 查询异步任务的执行结果。
   */
  AsyncRequestId: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
  AsyncRequestId: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * SwitchDrInstanceToMaster请求参数结构体
 */
export interface SwitchDrInstanceToMasterRequest {
  /**
   * 灾备实例 ID，格式如：cdb-c1nl9rpv，与云数据库控制台页面中显示的实例 ID 相同。
   */
  InstanceId: string
}

/**
 * ModifyCdbProxyParam请求参数结构体
 */
export interface ModifyCdbProxyParamRequest {
  /**
   * 实例 ID。可通过 [DescribeDBInstances](https://cloud.tencent.com/document/product/236/15872) 接口获取。
   */
  InstanceId: string
  /**
   * 代理组 ID。可通过 [DescribeCdbProxyInfo](https://cloud.tencent.com/document/api/236/90585) 接口获取。
   */
  ProxyGroupId: string
  /**
   * 连接池阈值。取值范围：大于0，小于等于300。
注意：如需使用数据库代理连接池能力，MySQL 8.0 主实例的内核小版本要大于等于 MySQL 8.0 20230630。
   */
  ConnectionPoolLimit: number
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
说明：若此数据结构在购买实例操作中被使用，则当只读组模式选择 join 时，此项为必填。
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
   * 延迟阈值。单位：秒。值范围：1-10000，整数。
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
   * 该字段已经废弃，无意义。查看只读实例的权重，请查看 RoInstances 字段里的 Weight 值。
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
   */
  UniqVpcId?: string
  /**
   * 子网 ID。
   */
  UniqSubnetId?: string
  /**
   * 只读组所在的地域。
   */
  RoGroupRegion?: string
  /**
   * 只读组所在的可用区。
   */
  RoGroupZone?: string
  /**
   * 延迟复制时间。单位：秒。值范围：1-259200，整数。
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
  Name?: string
  /**
   * 参数类型：integer，enum，float，string，func
   */
  ParamType?: string
  /**
   * 参数默认值
   */
  Default?: string
  /**
   * 参数描述
   */
  Description?: string
  /**
   * 参数当前值
   */
  CurrentValue?: string
  /**
   * 修改参数后，是否需要重启数据库以使参数生效。可能的值包括：0-不需要重启；1-需要重启
   */
  NeedReboot?: number
  /**
   * 参数允许的最大值
   */
  Max?: number
  /**
   * 参数允许的最小值
   */
  Min?: number
  /**
   * 参数的可选枚举值。如果为非枚举参数，则为空
   */
  EnumValue?: Array<string>
  /**
   * 参数是公式类型时，该字段有效，表示公式类型最大值
   */
  MaxFunc?: string
  /**
   * 参数是公式类型时，该字段有效，表示公式类型最小值
   */
  MinFunc?: string
  /**
   * 参数是否不支持修改
   */
  IsNotSupportEdit?: boolean
}

/**
 * SwitchForUpgrade请求参数结构体
 */
export interface SwitchForUpgradeRequest {
  /**
   * 实例 ID，格式如：cdb-c1nl9rpv，与云数据库控制台页面中显示的实例 ID 相同。
   */
  InstanceId: string
  /**
   * 是否开启关联切换，true为开启，false为关闭，默认false
   */
  IsRelatedSwitch?: boolean
}

/**
 * CreateRotationPassword请求参数结构体
 */
export interface CreateRotationPasswordRequest {
  /**
   * 实例 ID，格式如：cdb-c1nl9rpv，与云数据库控制台页面中显示的实例 ID 相同。
   */
  InstanceId: string
  /**
   * 当前需开启密码轮转的账号信息，包含账户名与主机名
   */
  Accounts: Array<Account>
}

/**
 * CreateDBInstanceHour返回参数结构体
 */
export interface CreateDBInstanceHourResponse {
  /**
   * 短订单 ID。
   */
  DealIds?: Array<string>
  /**
   * 实例 ID 列表。
   */
  InstanceIds?: Array<string>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeBackupDecryptionKey请求参数结构体
 */
export interface DescribeBackupDecryptionKeyRequest {
  /**
   * 实例 ID，格式如：cdb-fybaegd8。与云数据库控制台页面中显示的实例 ID 相同。
   */
  InstanceId: string
  /**
   * 实例的备份 ID，可通过 [DescribeBackups](https://cloud.tencent.com/document/api/236/15842) 接口查询备份的 ID。
   */
  BackupId: number
  /**
   * 备份类型。data-数据备份，binlog-日志备份，默认为 data。
   */
  BackupType?: string
}

/**
 * 克隆任务记录。
 */
export interface CloneItem {
  /**
   * 克隆任务的源实例Id。
   */
  SrcInstanceId?: string
  /**
   * 克隆任务的新产生实例Id。
   */
  DstInstanceId?: string
  /**
   * 克隆任务对应的任务列表Id。
   */
  CloneJobId?: number
  /**
   * 克隆实例使用的策略， 包括以下类型：  timepoint:指定时间点回档，  backupset: 指定备份文件回档。
   */
  RollbackStrategy?: string
  /**
   * 克隆实例回档的时间点。
   */
  RollbackTargetTime?: string
  /**
   * 任务开始时间。
   */
  StartTime?: string
  /**
   * 任务结束时间。
   */
  EndTime?: string
  /**
   * 任务状态，包括以下状态：initial,running,wait_complete,success,failed
   */
  TaskStatus?: string
  /**
   * 克隆实例所在地域Id
   */
  NewRegionId?: number
  /**
   * 源实例所在地域Id
   */
  SrcRegionId?: number
}

/**
 * ModifyDBInstanceSecurityGroups返回参数结构体
 */
export interface ModifyDBInstanceSecurityGroupsResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
说明：
1. 在8 ～ 64位字符数以内（推荐12位以上）。
2. 至少包含其中两项：小写字母 a ~ z 或 大写字母 A ～ Z。数字0 ～ 9。_+-,&=!@#$%^*().|。
3. 不能包含非法字符。
   */
  Password: string
  /**
   * 备注信息。最多支持输入255个字符。
   */
  Description?: string
  /**
   * 新账户最大可用连接数，默认值为10240，最大可设置值为10240。
   */
  MaxUserConnections?: number
}

/**
 * DeleteAuditRuleTemplates请求参数结构体
 */
export interface DeleteAuditRuleTemplatesRequest {
  /**
   * 审计规则模板 ID，可通过 [DescribeAuditRuleTemplates](https://cloud.tencent.com/document/api/236/101811) 接口获取，单次允许最多删除5个规则模板。
   */
  RuleTemplateIds: Array<string>
}

/**
 * CreateAuditRuleTemplate返回参数结构体
 */
export interface CreateAuditRuleTemplateResponse {
  /**
   * 生成的规则模板ID。
   */
  RuleTemplateId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
  Name?: string
  /**
   * 备份文件大小，单位：Byte
   */
  Size?: number
  /**
   * 备份快照时间，时间格式：2016-03-17 02:10:37
   */
  Date?: string
  /**
   * 下载地址
   */
  IntranetUrl?: string
  /**
   * 下载地址
   */
  InternetUrl?: string
  /**
   * 日志具体类型。可能的值有 "logical": 逻辑冷备， "physical": 物理冷备。
   */
  Type?: string
  /**
   * 备份子任务的ID，删除备份文件时使用
   */
  BackupId?: number
  /**
   * 备份任务状态。可能的值有 "SUCCESS": 备份成功， "FAILED": 备份失败， "RUNNING": 备份进行中。
   */
  Status?: string
  /**
   * 备份任务的完成时间
   */
  FinishTime?: string
  /**
   * （该值将废弃，不建议使用）备份的创建者，可能的值：SYSTEM - 系统创建，Uin - 发起者Uin值。
   */
  Creator?: string
  /**
   * 备份任务的开始时间
   */
  StartTime?: string
  /**
   * 备份方法。可能的值有 "full": 全量备份， "partial": 部分备份。
   */
  Method?: string
  /**
   * 备份方式。可能的值有 "manual": 手动备份， "automatic": 自动备份。
   */
  Way?: string
  /**
   * 手动备份别名
   */
  ManualBackupName?: string
  /**
   * 备份保留类型，save_mode_regular - 常规保存备份，save_mode_period - 定期保存备份
   */
  SaveMode?: string
  /**
   * 本地备份所在地域
   */
  Region?: string
  /**
   * 异地备份详细信息
   */
  RemoteInfo?: Array<RemoteBackupInfo>
  /**
   * 存储方式，0-常规存储，1-归档存储，2-标准存储，默认为0
   */
  CosStorageType?: number
  /**
   * 实例 ID，格式如：cdb-c1nl9rpv。与云数据库控制台页面中显示的实例 ID 相同。
   */
  InstanceId?: string
  /**
   * 备份文件是否加密， on-加密， off-未加密
   */
  EncryptionFlag?: string
  /**
   * 备份GTID点位
   */
  ExecutedGTIDSet?: string
  /**
   * 备份文件MD5值
   */
  MD5?: string
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
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

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
  /**
   * 自动续费标记，0表示不自动续费，1表示进行自动续费
   */
  AutoRenew?: number
}

/**
 * 慢查询日志详情
 */
export interface SlowLogInfo {
  /**
   * 备份文件名
   */
  Name?: string
  /**
   * 备份文件大小，单位：Byte
   */
  Size?: number
  /**
   * 备份快照时间，时间格式：2016-03-17
   */
  Date?: string
  /**
   * 内网下载地址
   */
  IntranetUrl?: string
  /**
   * 外网下载地址
   */
  InternetUrl?: string
  /**
   * 日志具体类型，可能的值：slowlog - 慢日志
   */
  Type?: string
}

/**
 * ModifyLocalBinlogConfig返回参数结构体
 */
export interface ModifyLocalBinlogConfigResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteDatabase返回参数结构体
 */
export interface DeleteDatabaseResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeInstanceUpgradeCheckJob返回参数结构体
 */
export interface DescribeInstanceUpgradeCheckJobResponse {
  /**
   * 24小时内是否存在历史升级校验任务
   */
  ExistUpgradeCheckJob?: boolean
  /**
   * 任务id
   */
  JobId?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeCloneList请求参数结构体
 */
export interface DescribeCloneListRequest {
  /**
   * 查询指定源实例的克隆任务列表。可通过 [DescribeDBInstances](https://cloud.tencent.com/document/api/236/15872) 接口获取实例 ID。
   */
  InstanceId: string
  /**
   * 分页查询时的偏移量，默认值为0。
   */
  Offset?: number
  /**
   * 分页查询时的每页条目数，默认值为20，建议最大取值100。
   */
  Limit?: number
}

/**
 * ModifyInstanceTag请求参数结构体
 */
export interface ModifyInstanceTagRequest {
  /**
   * 实例 ID。可通过 [DescribeDBInstances](https://cloud.tencent.com/document/product/236/15872) 接口获取。
   */
  InstanceId: string
  /**
   * 要增加或修改的标签。ReplaceTags 和 DeleteTags 必填一个。
   */
  ReplaceTags?: Array<TagInfo>
  /**
   * 要删除的标签。ReplaceTags 和 DeleteTags 必填一个。
   */
  DeleteTags?: Array<TagInfo>
}

/**
 * 一键迁移云盘版只读实例信息
 */
export interface MigrateClusterRoInfo {
  /**
   * 只读实例名称
   */
  RoInstanceId?: string
  /**
   * 只读实例CPU核数
   */
  Cpu?: number
  /**
   * 只读实例内存大小，单位：MB
   */
  Memory?: number
  /**
   * 只读实例硬盘大小，单位：GB
   */
  Volume?: number
  /**
   * 磁盘类型。 CLOUD_SSD: SSD云硬盘; CLOUD_HSSD: 增强型SSD云硬盘
   */
  DiskType?: string
  /**
   * 可用区
   */
  Zone?: string
  /**
   * 迁移实例类型。支持值包括： "CLOUD_NATIVE_CLUSTER" - 云盘版标准型实例， "CLOUD_NATIVE_CLUSTER_EXCLUSIVE" - 云盘版加强型实例。
   */
  DeviceType?: string
  /**
   * 只读实例所在ro组，例：cdbrg-xxx
   */
  RoGroupId?: string
  /**
   * 实例当前告警策略id数组
   */
  SrcAlarmPolicyList?: Array<number | bigint>
}

/**
 * DescribeProxySupportParam请求参数结构体
 */
export interface DescribeProxySupportParamRequest {
  /**
   * 实例 ID。可通过 [DescribeDBInstances](https://cloud.tencent.com/document/product/236/15872) 接口获取。
   */
  InstanceId: string
}

/**
 * ModifyAutoRenewFlag返回参数结构体
 */
export interface ModifyAutoRenewFlagResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
  Info?: string
  /**
   * 任务执行结果。可能的取值：INITIAL - 初始化，RUNNING - 运行中，SUCCESS - 执行成功，FAILED - 执行失败，KILLED - 已终止，REMOVED - 已删除，PAUSED - 终止中。
   */
  Status?: string
  /**
   * 任务执行进度。取值范围为[0, 100]。
   */
  Progress?: number
  /**
   * 任务开始时间。
   */
  StartTime?: string
  /**
   * 任务结束时间。
   */
  EndTime?: string
  /**
   * 回档任务详情。
   */
  Detail?: Array<RollbackInstancesInfo>
}

/**
 * StartReplication请求参数结构体
 */
export interface StartReplicationRequest {
  /**
   * 实例 ID。仅支持只读实例。可通过 [DescribeDBInstances](https://cloud.tencent.com/document/product/236/15872) 接口获取。
   */
  InstanceId: string
}

/**
 * 代理实例
 */
export interface ProxyInst {
  /**
   * 实例ID
   */
  InstanceId?: string
  /**
   * 实例名称
   */
  InstanceName?: string
  /**
   * 实例类型：1 master 主实例; 2 ro 只读实例; 3 dr 灾备实例; 4 sdr 小灾备实例
   */
  InstanceType?: number
  /**
   * 实例状态，可能的返回值：0-创建中；1-运行中；4-隔离中；5-已隔离
   */
  Status?: number
  /**
   * 只读权重,如果权重为系统自动分配，改值不生效，只代表是否启用该实例
   */
  Weight?: number
  /**
   * 实例所属地域
   */
  Region?: string
  /**
   * 实例所属可用区
   */
  Zone?: string
  /**
   * 实例节点ID
   */
  InstNodeId?: string
  /**
   * 节点角色
   */
  InstNodeRole?: string
}

/**
 * ReloadBalanceProxyNode返回参数结构体
 */
export interface ReloadBalanceProxyNodeResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeRemoteBackupConfig返回参数结构体
 */
export interface DescribeRemoteBackupConfigResponse {
  /**
   * 异地备份保留时间，单位为天
   */
  ExpireDays?: number
  /**
   * 异地数据备份开关，off - 关闭异地备份，on-开启异地备份
   */
  RemoteBackupSave?: string
  /**
   * 异地日志备份开关，off - 关闭异地备份，on-开启异地备份，只有在参数RemoteBackupSave为on时，RemoteBinlogSave参数才可设置为on
   */
  RemoteBinlogSave?: string
  /**
   * 用户已设置异地备份地域列表
   */
  RemoteRegion?: Array<string>
  /**
   * 用户可设置异地备份地域列表
   */
  RegionList?: Array<string>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
 * DescribeProxySupportParam返回参数结构体
 */
export interface DescribeProxySupportParamResponse {
  /**
   * 支持最大代理版本
   */
  ProxyVersion?: string
  /**
   * 是否支持连接池
   */
  SupportPool?: boolean
  /**
   * 连接池最小值
   */
  PoolMin?: number
  /**
   * 连接池最大值
   */
  PoolMax?: number
  /**
   * 是否支持事务拆分
   */
  SupportTransSplit?: boolean
  /**
   * 支持连接池的最小代理版本
   */
  SupportPoolMinVersion?: string
  /**
   * 支持事务拆分的最小代理版本
   */
  SupportTransSplitMinVersion?: string
  /**
   * 是否支持设置只读
   */
  SupportReadOnly?: boolean
  /**
   * 是否自动均衡负载
   */
  SupportAutoLoadBalance?: boolean
  /**
   * 是否支持接入模式
   */
  SupportAccessMode?: boolean
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CloseAuditService返回参数结构体
 */
export interface CloseAuditServiceResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
   * 分页参数，每次请求返回的记录数。默认值为20，建议最大取值为100。
   */
  Limit?: number
  /**
   * 分页偏移量。默认为 0。
   */
  Offset?: number
}

/**
 * DescribeCpuExpandHistory请求参数结构体
 */
export interface DescribeCpuExpandHistoryRequest {
  /**
   * 实例 ID。可通过 [DescribeDBInstances](https://cloud.tencent.com/document/product/236/15872) 接口获取。
   */
  InstanceId: string
  /**
   * 扩容策略，值包括：all，manual，auto
   */
  ExpandStrategy?: string
  /**
   * 扩容状态，值包括：all，extend，reduce，extend_failed
   */
  Status?: string
  /**
   * 查询的开始时间。只能查看30天内的扩容历史，格式为 Integer 的时间戳（秒级）。
   */
  StartTime?: number
  /**
   * 查询的结束时间，默认为当前时间。只能查看30天内的扩容历史，格式为 Integer 的时间戳（秒级）。
   */
  EndTime?: number
  /**
   * 分页入参
   */
  Offset?: number
  /**
   * 分页入参，默认20
   */
  Limit?: number
}

/**
 * AdjustCdbProxy返回参数结构体
 */
export interface AdjustCdbProxyResponse {
  /**
   * 异步任务ID
   */
  AsyncRequestId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyParamTemplate返回参数结构体
 */
export interface ModifyParamTemplateResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * BalanceRoGroupLoad返回参数结构体
 */
export interface BalanceRoGroupLoadResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
  Conn?: Array<number | bigint>
  /**
   * 网卡入包量，单位：个/秒
   */
  PackageIn?: Array<number | bigint>
  /**
   * 网卡出包量，单位：个/秒
   */
  PackageOut?: Array<number | bigint>
  /**
   * 入流量，单位：kbps
   */
  FlowIn?: Array<number | bigint>
  /**
   * 出流量，单位：kbps
   */
  FlowOut?: Array<number | bigint>
}

/**
 * ModifyRoGroupVipVport返回参数结构体
 */
export interface ModifyRoGroupVipVportResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyDBInstanceVipVport返回参数结构体
 */
export interface ModifyDBInstanceVipVportResponse {
  /**
   * 异步任务ID。(该返回字段目前已废弃)
   * @deprecated
   */
  AsyncRequestId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteAuditRule返回参数结构体
 */
export interface DeleteAuditRuleResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
 * 审计日志搜索过滤器
 */
export interface InstanceAuditLogFilters {
  /**
   * 过滤项。目前支持以下搜索条件：

包含、不包含、包含（分词维度）、不包含（分词维度）:
sql - SQL详情；alarmLevel - 告警等级；ruleTemplateId - 规则模板Id

等于、不等于、包含、不包含：
host - 客户端地址；
user - 用户名；
dbName - 数据库名称；

等于、不等于：
sqlType - SQL类型；
errCode - 错误码；
threadId - 线程ID；

范围搜索（时间类型统一为微秒）：
execTime - 执行时间；
lockWaitTime - 执行时间；
ioWaitTime - IO等待时间；
trxLivingTime - 事物持续时间；
cpuTime - cpu时间；
checkRows - 扫描行数；
affectRows - 影响行数；
sentRows - 返回行数。
   */
  Type?: string
  /**
   * 过滤条件。支持以下条件：
WINC-包含（分词维度），
WEXC-不包含（分词维度）,
INC - 包含,
EXC - 不包含,
EQS - 等于,
NEQ - 不等于,
RA - 范围。
   */
  Compare?: string
  /**
   * 过滤的值。反向查询时，多个值之前是且的关系，正向查询多个值是或的关系
   */
  Value?: Array<string>
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
  WanStatus?: number
  /**
   * 可用区信息
   */
  Zone?: string
  /**
   * 初始化标志，可能的返回值为：0-未初始化；1-已初始化
   */
  InitFlag?: number
  /**
   * 只读vip信息。单独开通只读实例访问的只读实例才有该字段
   */
  RoVipInfo?: RoVipInfo
  /**
   * 内存容量，单位为 MB
   */
  Memory?: number
  /**
   * 实例状态，可能的返回值：0-创建中；1-运行中；4-正在进行隔离操作；5-已隔离
   */
  Status?: number
  /**
   * 私有网络 ID，例如：51102
   */
  VpcId?: number
  /**
   * 备机信息
   */
  SlaveInfo?: SlaveInfo
  /**
   * 实例 ID
   */
  InstanceId?: string
  /**
   * 硬盘容量，单位为 GB
   */
  Volume?: number
  /**
   * 自动续费标志，可能的返回值：0-未开通自动续费；1-已开通自动续费；2-已关闭自动续费
   */
  AutoRenew?: number
  /**
   * 数据复制方式。0 - 异步复制；1 - 半同步复制；2 - 强同步复制
   */
  ProtectMode?: number
  /**
   * 只读组详细信息
   */
  RoGroups?: Array<RoGroup>
  /**
   * 子网 ID，例如：2333
   */
  SubnetId?: number
  /**
   * 实例类型，可能的返回值：1-主实例；2-灾备实例；3-只读实例
   */
  InstanceType?: number
  /**
   * 项目 ID
   */
  ProjectId?: number
  /**
   * 地域信息
   */
  Region?: string
  /**
   * 实例到期时间
   */
  DeadlineTime?: string
  /**
   * 可用区部署方式。可能的值为：0 - 单可用区；1 - 多可用区
   */
  DeployMode?: number
  /**
   * 实例任务状态。0 - 没有任务 ,1 - 升级中,2 - 数据导入中,3 - 开放Slave中,4 - 外网访问开通中,5 - 批量操作执行中,6 - 回档中,7 - 外网访问关闭中,8 - 密码修改中,9 - 实例名修改中,10 - 重启中,12 - 自建迁移中,13 - 删除库表中,14 - 灾备实例创建同步中,15 - 升级待切换,16 - 升级切换中,17 - 升级切换完成
   */
  TaskStatus?: number
  /**
   * 主实例详细信息
   */
  MasterInfo?: MasterInfo
  /**
   * 实例类型
   */
  DeviceType?: string
  /**
   * 内核版本
   */
  EngineVersion?: string
  /**
   * 实例名称
   */
  InstanceName?: string
  /**
   * 灾备实例详细信息
   */
  DrInfo?: Array<DrInfo>
  /**
   * 外网域名
   */
  WanDomain?: string
  /**
   * 外网端口号
   */
  WanPort?: number
  /**
   * 付费类型，可能的返回值：0-包年包月；1-按量计费
   */
  PayType?: number
  /**
   * 实例创建时间
   */
  CreateTime?: string
  /**
   * 实例 IP
   */
  Vip?: string
  /**
   * 端口号
   */
  Vport?: number
  /**
   * 磁盘写入是否被锁定（实例数据写入量已经超过磁盘配额）。0 -未被锁定 1 -已被锁定
   */
  CdbError?: number
  /**
   * 私有网络描述符，例如：“vpc-5v8wn9mg”
   */
  UniqVpcId?: string
  /**
   * 子网描述符，例如：“subnet-1typ0s7d”
   */
  UniqSubnetId?: string
  /**
   * 物理 ID
   */
  PhysicalId?: string
  /**
   * 核心数
   */
  Cpu?: number
  /**
   * 每秒查询数量
   */
  Qps?: number
  /**
   * 可用区中文名称
   */
  ZoneName?: string
  /**
   * 物理机型
   */
  DeviceClass?: string
  /**
   * 置放群组 ID
   */
  DeployGroupId?: string
  /**
   * 可用区 ID
   */
  ZoneId?: number
  /**
   * 节点数
   */
  InstanceNodes?: number
  /**
   * 标签列表
   */
  TagList?: Array<TagInfoItem>
  /**
   * 引擎类型
   */
  EngineType?: string
  /**
   * 最大延迟阈值
   */
  MaxDelayTime?: number
  /**
   * 实例磁盘类型，仅云盘版和单节点（云盘）实例才会返回有效值。
说明：
1. 若返回："DiskType": "CLOUD_HSSD"，则表示该实例磁盘类型为增强型 SSD 云硬盘。
2. 若返回："DiskType": "CLOUD_SSD"，则表示该实例磁盘类型为 SSD 云硬盘。
3. 若返回："DiskType": ""，且参数 DeviceType 值为 UNIVERSAL 或 EXCLUSIVE，则表示该实例采用的是本地 SSD 盘。
   */
  DiskType?: string
  /**
   * 当前扩容的CPU核心数。
   */
  ExpandCpu?: number
  /**
   * 云盘版实例节点信息
   */
  ClusterInfo?: Array<ClusterInfo>
  /**
   * 分析引擎节点列表
   */
  AnalysisNodeInfos?: Array<AnalysisNodeInfo>
  /**
   * 设备带宽，单位G。当DeviceClass不为空时此参数才有效。例：25-表示当前设备带宽为25G；10-表示当前设备带宽为10G。
   */
  DeviceBandwidth?: number
  /**
   * 实例销毁保护状态，on表示开启保护，否则为关闭保护
   */
  DestroyProtect?: string
}

/**
 * DescribeDefaultParams返回参数结构体
 */
export interface DescribeDefaultParamsResponse {
  /**
   * 参数个数。
   */
  TotalCount?: number
  /**
   * 参数详情。
   */
  Items?: Array<ParameterDetail>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * SwitchCDBProxy请求参数结构体
 */
export interface SwitchCDBProxyRequest {
  /**
   * 实例 ID。可通过 [DescribeDBInstances](https://cloud.tencent.com/document/product/236/15872) 接口获取。
   */
  InstanceId: string
  /**
   * 数据库代理 ID。可通过 [DescribeCdbProxyInfo](https://cloud.tencent.com/document/api/236/90585) 接口获取。
   */
  ProxyGroupId: string
}

/**
 * StartReplication返回参数结构体
 */
export interface StartReplicationResponse {
  /**
   * 异步任务 ID。
   */
  AsyncRequestId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
  Total?: number
  /**
   * 返回列表。
   */
  Items?: Array<DeployGroupInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * OfflineIsolatedInstances返回参数结构体
 */
export interface OfflineIsolatedInstancesResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateAuditRuleTemplate请求参数结构体
 */
export interface CreateAuditRuleTemplateRequest {
  /**
   * 审计规则。
   */
  RuleFilters: Array<RuleFilters>
  /**
   * 规则模板名称。最多支持输入30个字符。
   */
  RuleTemplateName: string
  /**
   * 规则模板描述。最多支持输入200个字符。
   */
  Description?: string
  /**
   * 告警等级。1 - 低风险，2 - 中风险，3 - 高风险。默认值为1。
   */
  AlarmLevel?: number
  /**
   * 告警策略。0 - 不告警，1 - 告警。默认值为0。
   */
  AlarmPolicy?: number
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
 * DescribeInstancePasswordComplexity返回参数结构体
 */
export interface DescribeInstancePasswordComplexityResponse {
  /**
   * 密码复杂度相关参数总数
   */
  TotalCount?: number
  /**
   * 密码复杂度参数详情，policy取值范围["","LOW","MEDIUM"],空或者LOW表示：密码复杂度关，MEDIUM表示：密码复杂度开；当policy参数值是MEDIUM时，以下参数才有意义，length:取值范围[8-64],表示：最少字符数；mixed_case_count：取值范围[1-16]，表示大写字母和小写字母的最少个数。number_count：取值范围[1-16]，表示数字字符的最少个数。special_char_count：取值范围[1-16]，表示特殊字符的最少个数。
   */
  Items?: Array<ParameterDetail>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * AdjustCdbProxyAddress请求参数结构体
 */
export interface AdjustCdbProxyAddressRequest {
  /**
   * 代理组 ID。可通过 [DescribeCdbProxyInfo](https://cloud.tencent.com/document/api/236/90585) 接口获取。
   */
  ProxyGroupId: string
  /**
   * 权重分配模式，
系统自动分配："system"， 自定义："custom"
   */
  WeightMode: string
  /**
   * 是否开启延迟剔除，取值："true" | "false"
   */
  IsKickOut: boolean
  /**
   * 最小保留数量，最小取值：0。
说明：当 IsKickOut 为 true 时才有效。
   */
  MinCount: number
  /**
   * 延迟剔除阈值，最小取值：1，取值范围：[1,10000]，整数。
   */
  MaxDelay: number
  /**
   * 是否开启故障转移，取值："true" | "false"
   */
  FailOver: boolean
  /**
   * 是否自动添加RO，取值："true" | "false"
   */
  AutoAddRo: boolean
  /**
   * 是否是只读，取值："true" | "false"
   */
  ReadOnly: boolean
  /**
   * 代理组地址 ID。可通过 [DescribeCdbProxyInfo](https://cloud.tencent.com/document/api/236/90585) 接口获取。
   */
  ProxyAddressId: string
  /**
   * 是否开启事务分离，取值："true" | "false"，默认值 false。
   */
  TransSplit?: boolean
  /**
   * 是否开启连接池。默认关闭。
注意：如需使用数据库代理连接池能力，MySQL 8.0 主实例的内核小版本要大于等于 MySQL 8.0 20230630。
   */
  ConnectionPool?: boolean
  /**
   * 读写权重分配。如果 WeightMode 传的是 system ，则传入的权重不生效，由系统分配默认权重。
   */
  ProxyAllocation?: Array<ProxyAllocation>
  /**
   * 是否开启自适应负载均衡。默认关闭。
   */
  AutoLoadBalance?: boolean
  /**
   * 访问模式：nearby - 就近访问，balance - 均衡分配，默认就近访问。
   */
  AccessMode?: string
  /**
   * 是否将libra节点当作普通RO节点
   */
  ApNodeAsRoNode?: string
  /**
   * libra节点故障，是否转发给其他节点
   */
  ApQueryToOtherNode?: string
}

/**
 * DescribeDatabases返回参数结构体
 */
export interface DescribeDatabasesResponse {
  /**
   * 符合查询条件的实例总数。
   */
  TotalCount?: number
  /**
   * 实例中的数据库名称列表。
   */
  Items?: Array<string>
  /**
   * 数据库名以及字符集
   */
  DatabaseList?: Array<DatabasesWithCharacterLists>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 任务列表中的部分任务支持特定的附加信息
 */
export interface TaskAttachInfo {
  /**
   * 升级任务：
”FastUpgradeStatus“：表示升级类型。1-原地升级；0-普通升级。
   */
  AttachKey?: string
  /**
   * 升级任务：
”FastUpgradeStatus“：表示升级类型。1-原地升级；0-普通升级。
   */
  AttachValue?: string
}

/**
 * DescribeRoGroups返回参数结构体
 */
export interface DescribeRoGroupsResponse {
  /**
   * RO 组信息数组，一个实例可关联多个 RO 组。
   */
  RoGroups?: Array<RoGroup>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CloseCdbProxyAddress返回参数结构体
 */
export interface CloseCdbProxyAddressResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
  TotalCount?: number
  /**
   * 审计规则详情。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Items?: Array<AuditRule>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
  MasterInstanceId?: string
  /**
   * RO实例在RO组内的状态，可能的值：online-在线，offline-下线
   */
  RoStatus?: string
  /**
   * RO实例在RO组内上一次下线的时间
   */
  OfflineTime?: string
  /**
   * RO实例在RO组内的权重
   */
  Weight?: number
  /**
   * RO实例所在区域名称，如ap-shanghai
   */
  Region?: string
  /**
   * RO可用区的正式名称，如 ap-shanghai-2
   */
  Zone?: string
  /**
   * RO实例ID，格式如：cdbro-c1nl9rpv
   */
  InstanceId?: string
  /**
   * RO实例状态，可能返回值：0-创建中，1-运行中，3-异地RO（仅在使用DescribeDBInstances查询主实例信息时，返回值中异地RO的状态恒等于3，其他场景下无此值），4-删除中
   */
  Status?: number
  /**
   * 实例类型，可能返回值：1-主实例，2-灾备实例，3-只读实例
   */
  InstanceType?: number
  /**
   * RO实例名称
   */
  InstanceName?: string
  /**
   * 按量计费状态，可能的取值：1-正常，2-欠费
   */
  HourFeeStatus?: number
  /**
   * RO实例任务状态，可能返回值：<br>0-没有任务<br>1-升级中<br>2-数据导入中<br>3-开放Slave中<br>4-外网访问开通中<br>5-批量操作执行中<br>6-回档中<br>7-外网访问关闭中<br>8-密码修改中<br>9-实例名修改中<br>10-重启中<br>12-自建迁移中<br>13-删除库表中<br>14-灾备实例创建同步中
   */
  TaskStatus?: number
  /**
   * RO实例内存大小，单位：MB
   */
  Memory?: number
  /**
   * RO实例硬盘大小，单位：GB
   */
  Volume?: number
  /**
   * 每次查询数量
   */
  Qps?: number
  /**
   * RO实例的内网IP地址
   */
  Vip?: string
  /**
   * RO实例访问端口
   */
  Vport?: number
  /**
   * RO实例所在私有网络ID
   */
  VpcId?: number
  /**
   * RO实例所在私有网络子网ID
   */
  SubnetId?: number
  /**
   * RO实例规格描述，目前可取值 CUSTOM
   */
  DeviceType?: string
  /**
   * RO实例数据库引擎版本，可能返回值：5.1、5.5、5.6、5.7、8.0
   */
  EngineVersion?: string
  /**
   * RO实例到期时间，时间格式：yyyy-mm-dd hh:mm:ss，如实例为按量计费模式，则此字段值为0000-00-00 00:00:00
   */
  DeadlineTime?: string
  /**
   * RO实例计费类型，可能返回值：0-包年包月，1-按量计费，2-后付费月结
   */
  PayType?: number
  /**
   * RO延迟复制状态。
   */
  ReplicationStatus?: string
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
   * 账户的名称。可通过 [DescribeAccounts](https://cloud.tencent.com/document/api/236/17499) 接口获取。
   */
  User: string
  /**
   * 账户的旧主机。格式：IP 形式，支持单个 IP 地址或者%。
   */
  Host: string
  /**
   * 账户的新主机。格式：IP 形式，支持单个 IP 地址或者%。
   */
  NewHost: string
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
  CpuCore?: number
  /**
   * Cpu使用率
   */
  Rate?: Array<number | bigint>
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
   * 数据库的账号，包括用户名和域名。可通过 [DescribeAccounts](https://cloud.tencent.com/document/api/236/17499) 接口获取。
   */
  Accounts: Array<Account>
  /**
   * 全局权限。其中，GlobalPrivileges 中权限的可选值为："SELECT","INSERT","UPDATE","DELETE","CREATE", "PROCESS", "DROP","REFERENCES","INDEX","ALTER","SHOW DATABASES","CREATE TEMPORARY TABLES","LOCK TABLES","EXECUTE","CREATE VIEW","SHOW VIEW","CREATE ROUTINE","ALTER ROUTINE","EVENT","TRIGGER","CREATE USER","RELOAD","REPLICATION CLIENT","REPLICATION SLAVE"。
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
   * 目标备份方法，可选的值：logical - 逻辑冷备，physical - 物理冷备，snapshot - 快照备份。基础版实例仅支持快照备份。
   */
  BackupMethod: string
  /**
   * 需要备份的库表信息，如果不设置该参数，则默认整实例备份。在 BackupMethod=logical 逻辑备份中才可设置该参数。指定的库表必须存在，否则可能导致备份失败。
例：如果需要备份 db1 库的 tb1、tb2 表 和 db2 库。则该参数设置为 [{"Db": "db1", "Table": "tb1"}, {"Db": "db1", "Table": "tb2"}, {"Db": "db2"}]。
   */
  BackupDBTableList?: Array<BackupItem>
  /**
   * 手动备份别名，输入长度请在60个字符内。
   */
  ManualBackupName?: string
  /**
   * 是否需要加密物理备份，可选值为：on - 是，off - 否。当 BackupMethod 为 physical 时，该值才有意义。不指定则使用实例备份默认加密策略，这里的默认加密策略指通过 [DescribeBackupEncryptionStatus](https://cloud.tencent.com/document/product/236/86508) 接口查询出的实例当前加密策略。
   */
  EncryptionFlag?: string
}

/**
 * 账号详细信息
 */
export interface AccountInfo {
  /**
   * 账号备注信息
   */
  Notes?: string
  /**
   * 账号的域名
   */
  Host?: string
  /**
   * 账号的名称
   */
  User?: string
  /**
   * 账号信息修改时间
   */
  ModifyTime?: string
  /**
   * 修改密码的时间
   */
  ModifyPasswordTime?: string
  /**
   * 该值已废弃
   * @deprecated
   */
  CreateTime?: string
  /**
   * 用户最大可用实例连接数
   */
  MaxUserConnections?: number
  /**
   * 用户账号是否开启了密码轮转
   */
  OpenCam?: boolean
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
 * AdjustCdbProxyAddress返回参数结构体
 */
export interface AdjustCdbProxyAddressResponse {
  /**
   * 异步任务ID
   */
  AsyncRequestId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
   * 目标 IP。
   */
  DstIp?: string
  /**
   * 目标端口，支持范围为：[1024-65535]。
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
  /**
   * 变更集群版实例只读组时，InstanceId传实例id，需要额外指定该参数表示操作只读组。 如果操作读写节点则不需指定该参数。
   */
  OpResourceId?: string
}

/**
 * DescribeSSLStatus返回参数结构体
 */
export interface DescribeSSLStatusResponse {
  /**
   * 是否开通 SSL 。ON 代表开通 ，OFF 代表未开通。
   */
  Status?: string
  /**
   * 证书下载链接。
   */
  Url?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
  AsyncRequestId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeTagsOfInstanceIds请求参数结构体
 */
export interface DescribeTagsOfInstanceIdsRequest {
  /**
   * 实例列表。实例 ID 可通过 [DescribeDBInstances](https://cloud.tencent.com/document/product/236/15872) 接口获取。可传入的数组长度暂无限制。
   */
  InstanceIds: Array<string>
  /**
   * 分页偏移量。
   */
  Offset?: number
  /**
   * 分页大小。默认为15。
   */
  Limit?: number
}

/**
 * StartCpuExpand请求参数结构体
 */
export interface StartCpuExpandRequest {
  /**
   * 实例 ID。可通过 [DescribeDBInstances](https://cloud.tencent.com/document/product/236/15872) 接口获取。
   */
  InstanceId: string
  /**
   * 扩容类型，支持自动扩容和自定义扩容。
说明：1. auto 表示自动扩容。2. manual 表示自定义扩容，扩容时间为立即生效。3. timeInterval 表示自定义扩容，扩容时间为按时间段。4. period 表示自定义扩容，扩容时间为按周期。
   */
  Type: string
  /**
   * 自定义扩容时，扩容的 CPU 核心数。
说明：1. Type 为 manual、timeInterval、period 时必传。2. 扩容的 CPU 核心数上限为当前实例 CPU 核心数，比如8核16G最大可手动扩容的 CPU 核心数为8，即范围为1 - 8。
   */
  ExpandCpu?: number
  /**
   * 自动扩容策略。Type 为 auto 时必传。
   */
  AutoStrategy?: AutoStrategy
  /**
   * 按时间段扩容策略。
说明：当 Type 为 timeInterval 时，TimeIntervalStrategy 必填。
   */
  TimeIntervalStrategy?: TimeIntervalStrategy
  /**
   * 按周期扩容策略。
说明：当 Type 为 period 时，PeriodStrategy 必填。
   */
  PeriodStrategy?: PeriodStrategy
}

/**
 * CloseCDBProxy返回参数结构体
 */
export interface CloseCDBProxyResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * StopReplication返回参数结构体
 */
export interface StopReplicationResponse {
  /**
   * 异步任务 ID。
   */
  AsyncRequestId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
   * 主实例数据库引擎版本，支持值包括：5.6、5.7、8.0。
说明：不支持越级升级，升级后不支持降级。
   */
  EngineVersion: string
  /**
   * 切换访问新实例的方式，默认为 0。支持值包括：0 - 立刻切换，1 - 时间窗切换；当该值为 1 时，升级过程中，切换访问新实例的流程将会在时间窗内进行，或者用户主动调用接口 [切换访问新实例](https://cloud.tencent.com/document/product/236/15864) 触发该流程。
   */
  WaitSwitch?: number
  /**
   * 是否是内核子版本升级，支持的值：1 - 升级内核子版本；0 - 升级数据库引擎版本。无默认值，请指定要升级的版本类型。
   */
  UpgradeSubversion?: number
  /**
   * 延迟阈值。取值范围：1 - 10。无默认值，不传此参数时，延迟阈值为0，表示延迟阈值不做设置。
   */
  MaxDelayTime?: number
  /**
   * 5.7升级8.0是否忽略关键字错误，取值范围[0,1]，1表示忽略，0表示不忽略。无默认值，不传此参数表示不做处理。
   */
  IgnoreErrKeyword?: number
  /**
   * 版本升级支持指定参数
   */
  ParamList?: Array<UpgradeEngineVersionParams>
}

/**
 * DescribeDataBackupOverview请求参数结构体
 */
export interface DescribeDataBackupOverviewRequest {
  /**
   * 需要查询数据备份概览的云数据库产品类型。可取值为：mysql 指双节点/三节点的高可用实例，mysql-basic 指单节点（云盘）实例，mysql-cluster 指云盘版实例。
   */
  Product: string
}

/**
 * DescribeDBInstanceInfo请求参数结构体
 */
export interface DescribeDBInstanceInfoRequest {
  /**
   * 实例 ID。可通过 [DescribeDBInstances](https://cloud.tencent.com/document/product/236/15872) 接口获取。
说明：仅主实例支持查询，此项仅支持输入主实例 ID。
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
 * ModifyDBInstanceProject请求参数结构体
 */
export interface ModifyDBInstanceProjectRequest {
  /**
   * 实例 ID，格式如：cdb-c1nl9rpv，与云数据库控制台页面中显示的实例 ID 相同，可使用 [查询实例列表](https://cloud.tencent.com/document/api/236/15872) 接口获取，其值为输出参数中字段 InstanceId 的值。
说明：可输入多个实例 ID 进行修改，json 格式如下。
[
    "cdb-30z11v8s",
    "cdb-93h11efg"
  ]
   */
  InstanceIds: Array<string>
  /**
   * 实例所属项目的 ID，可在账号中心下的项目管理页面查询。
说明：此项为必填。
   */
  NewProjectId?: number
}

/**
 * 聚合桶的信息
 */
export interface Bucket {
  /**
   * 无
   */
  Key?: string
  /**
   * key值出现的次数。
   */
  Count?: number
}

/**
 * SwitchForUpgrade返回参数结构体
 */
export interface SwitchForUpgradeResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 5.7升级8.0指定参数的结构
 */
export interface UpgradeEngineVersionParams {
  /**
   * 参数名称
   */
  Name?: string
  /**
   * 参数值
   */
  Value?: string
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
   * 数据库的账号名称。可通过 [DescribeAccounts](https://cloud.tencent.com/document/api/236/17499) 接口获取。
   */
  User: string
  /**
   * 数据库的账号域名。可通过 [DescribeAccounts](https://cloud.tencent.com/document/api/236/17499) 接口获取。
   */
  Host: string
}

/**
 * 售卖配置详情
 */
export interface CdbSellConfig {
  /**
   * 内存大小，单位为MB
   */
  Memory?: number
  /**
   * CPU核心数
   */
  Cpu?: number
  /**
   * 磁盘最小规格，单位为GB
   */
  VolumeMin?: number
  /**
   * 磁盘最大规格，单位为GB
   */
  VolumeMax?: number
  /**
   * 磁盘步长，单位为GB
   */
  VolumeStep?: number
  /**
   * 每秒IO数量
   */
  Iops?: number
  /**
   * 应用场景描述
   */
  Info?: string
  /**
   * 状态值，0 表示该规格对外售卖
   */
  Status?: number
  /**
   * 实例类型，可能的取值范围有：UNIVERSAL (通用型), EXCLUSIVE (独享型), BASIC (基础型), BASIC_V2 (基础型v2)
   */
  DeviceType?: string
  /**
   * 引擎类型描述，可能的取值范围有：Innodb，RocksDB
   */
  EngineType?: string
  /**
   * 售卖规格Id
   */
  Id?: number
}

/**
 * DescribeSupportedPrivileges返回参数结构体
 */
export interface DescribeSupportedPrivilegesResponse {
  /**
   * 实例支持的全局权限。
   */
  GlobalSupportedPrivileges: Array<string>
  /**
   * 实例支持的数据库权限。
   */
  DatabaseSupportedPrivileges: Array<string>
  /**
   * 实例支持的数据库表权限。
   */
  TableSupportedPrivileges: Array<string>
  /**
   * 实例支持的数据库列权限。
   */
  ColumnSupportedPrivileges: Array<string>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 迁移云盘版校验结果
 */
export interface CheckMigrateResult {
  /**
   * 校验名称
   */
  Name?: string
  /**
   * 校验结果，通过为pass，失败为fail
   */
  Status?: string
  /**
   * 校验结果描述
   */
  Desc?: string
}

/**
 * 结构化的慢日志详情
 */
export interface SlowLogItem {
  /**
   * Sql的执行时间。秒级时间戳。
   */
  Timestamp?: number
  /**
   * Sql的执行时长（秒）。
   */
  QueryTime?: number
  /**
   * Sql语句。
   */
  SqlText?: string
  /**
   * 客户端地址。
   */
  UserHost?: string
  /**
   * 用户名。
   */
  UserName?: string
  /**
   * 数据库名。
   */
  Database?: string
  /**
   * 锁时长（秒）。
   */
  LockTime?: number
  /**
   * 扫描行数。
   */
  RowsExamined?: number
  /**
   * 结果集行数。
   */
  RowsSent?: number
  /**
   * Sql模板。
   */
  SqlTemplate?: string
  /**
   * Sql语句的md5。
   */
  Md5?: string
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
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * OpenSSL返回参数结构体
 */
export interface OpenSSLResponse {
  /**
   * 异步请求 ID。
   */
  AsyncRequestId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyAuditService返回参数结构体
 */
export interface ModifyAuditServiceResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyInstancePasswordComplexity请求参数结构体
 */
export interface ModifyInstancePasswordComplexityRequest {
  /**
   * 要修改密码复杂度的实例 ID。可通过 [DescribeDBInstances](https://cloud.tencent.com/document/product/236/15872) 接口获取。
说明：支持输入多个实例 ID 进行修改。
   */
  InstanceIds: Array<string>
  /**
   * 要修改的密码复杂度的选项。每一个选项是以组合形式写入的，一个组合包括 Name 和 CurrentValue，其中 Name 表示对应选项的参数名，CurrentValue 表示参数值。例如：[{"Name": "validate_password.length", "CurrentValue": "10"}]，表示将密码的最小字符数修改为10。
说明：不同数据库版本的实例，支持修改的密码复杂度的选项如下。
1. MySQL 8.0：
选项 validate_password.policy，表示密码复杂度的开关，值为 LOW 时表示关闭；值为 MEDIUM 时表示开启。
选项 validate_password.length，表示密码总长度的最小字符数。
选项 validate_password.mixed_case_count，表示小写和大写字母的最小字符数。
选项 validate_password.number_count，表示数字的最小字符数。
选项 validate_password.special_char_count，表示特殊字符的最小字符数。
2. MySQL 5.6、MySQL 5.7：
选项 validate_password_policy，表示密码复杂度的开关，值为 LOW 时表示关闭；值为 MEDIUM 时表示开启。
选项 validate_password_length，表示密码总长度的最小字符数。
选项 validate_password_mixed_case_count，表示小写和大写字母的最小字符数。
选项 validate_password_number_count，表示数字的最小字符数。
选项 validate_password_special_char_count，表示特殊字符的最小字符数。
   */
  ParamList?: Array<Parameter>
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
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CheckMigrateCluster请求参数结构体
 */
export interface CheckMigrateClusterRequest {
  /**
   * 实例 ID。可通过 [DescribeDBInstances](https://cloud.tencent.com/document/product/236/15872) 接口获取。
   */
  InstanceId: string
  /**
   * 实例 CPU 核数。当 InstanceId 为主实例时必传。
   */
  Cpu?: number
  /**
   * 实例内存大小，单位：MB。当 InstanceId 为主实例时必传。
   */
  Memory?: number
  /**
   * 实例硬盘大小，单位：GB。
   */
  Volume?: number
  /**
   * 磁盘类型。 CLOUD_SSD: SSD 云硬盘; CLOUD_HSSD: 增强型 SSD 云硬盘。
   */
  DiskType?: string
  /**
   * 云盘版节点拓扑配置。当 InstanceId 为主实例时必传。
   */
  ClusterTopology?: ClusterTopology
  /**
   * 迁移实例类型。支持值包括： "CLOUD_NATIVE_CLUSTER" - 标准型云盘版实例， "CLOUD_NATIVE_CLUSTER_EXCLUSIVE" - 加强型云盘版实例。
   */
  DeviceType?: string
  /**
   * 只读实例信息。
   */
  RoInfo?: Array<MigrateClusterRoInfo>
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
 * DescribeBackupEncryptionStatus返回参数结构体
 */
export interface DescribeBackupEncryptionStatusResponse {
  /**
   * 实例是否开启了物理备份加密。可能的值有 on, off 。
   */
  EncryptionStatus?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeCdbProxyInfo返回参数结构体
 */
export interface DescribeCdbProxyInfoResponse {
  /**
   * 代理组数量
   */
  Count?: number
  /**
   * 代理组信息
   */
  ProxyInfos?: Array<ProxyGroupInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyAuditConfig请求参数结构体
 */
export interface ModifyAuditConfigRequest {
  /**
   * 实例 ID。可通过 [DescribeDBInstances](https://cloud.tencent.com/document/product/236/15872) 接口获取。
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
说明：
1. 当关闭审计服务时，会删除用户的审计日志和文件，并删除该实例的所有审计策略。
2. CloseAudit、LogExpireDay 必须至少提供一个，如果两个都提供则按照 CloseAudit 优先的逻辑处理。
3. 可通过设置此参数来关闭审计服务，已关闭后不能通过此接口来开启审计服务。
   */
  CloseAudit?: boolean
  /**
   * 高频审计日志保存时长。支持值包括：
7 - 一周
30 - 一个月；
180 - 六个月；
365 - 一年；
1095 - 三年；
1825 - 五年；
   */
  HighLogExpireDay?: number
}

/**
 * 实例磁盘监控数据
 */
export interface DeviceDiskInfo {
  /**
   * 平均每秒有百分之几的时间用于IO操作
   */
  IoRatioPerSec?: Array<number | bigint>
  /**
   * 平均每次设备I/O操作的等待时间*100，单位为毫秒。例如：该值为201，表示平均每次I/O操作等待时间为：201/100=2.1毫秒
   */
  IoWaitTime?: Array<number | bigint>
  /**
   * 磁盘平均每秒完成的读操作次数总和*100。例如：该值为2002，表示磁盘平均每秒完成读操作为：2002/100=20.2次
   */
  Read?: Array<number | bigint>
  /**
   * 磁盘平均每秒完成的写操作次数总和*100。例如：该值为30001，表示磁盘平均每秒完成写操作为：30001/100=300.01次
   */
  Write?: Array<number | bigint>
  /**
   * 磁盘空间容量，每两个一组，第一个为已使用容量，第二个为磁盘总容量
   */
  CapacityRatio?: Array<number | bigint>
}

/**
 * DescribeInstanceAlarmEvents返回参数结构体
 */
export interface DescribeInstanceAlarmEventsResponse {
  /**
   * 事件数。
   */
  TotalCount?: number
  /**
   * 事件信息。查询不到信息时，Items为null。
   */
  Items?: Array<InstEventInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
  TotalCount?: number
  /**
   * 查询到的记录。
   */
  Items?: Array<SlowLogItem>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteRotationPassword请求参数结构体
 */
export interface DeleteRotationPasswordRequest {
  /**
   * 实例 ID，格式如：cdb-c1nl9rpv，与云数据库控制台页面中显示的实例 ID 相同
   */
  InstanceId: string
  /**
   * 关闭密码轮转的实例账户名,例如root
   */
  User: string
  /**
   * 关闭密码轮转的实例账户域名，例如%
   */
  Host: string
  /**
   * 关闭密码轮转后实例账户的最新密码
   */
  Password: string
  /**
   * 传入不为空则对密码进行了加密处理
   */
  EncryptMethod?: string
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
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
   * 分页大小，默认值为20，最小值为1，最大值为1000。
   */
  Limit?: number
}

/**
 * 标签信息
 */
export interface TagInfoItem {
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
 * 节点规格配置
 */
export interface ProxyNodeCustom {
  /**
   * 节点个数
   */
  NodeCount: number
  /**
   * CPU核数
   */
  Cpu: number
  /**
   * 内存大小
   */
  Mem: number
  /**
   * 地域
   */
  Region: string
  /**
   * 可用区
   */
  Zone: string
}

/**
 * DescribeProxyCustomConf请求参数结构体
 */
export interface DescribeProxyCustomConfRequest {
  /**
   * 实例 ID。可通过 [DescribeDBInstances](https://cloud.tencent.com/document/product/236/15872) 接口获取。
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
  Groups?: Array<SecurityGroup>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CloseCdbProxyAddress请求参数结构体
 */
export interface CloseCdbProxyAddressRequest {
  /**
   * 代理组 ID。可通过 [DescribeCdbProxyInfo](https://cloud.tencent.com/document/api/236/90585) 接口获取。
   */
  ProxyGroupId: string
  /**
   * 代理组地址 ID。可通过 [DescribeCdbProxyInfo](https://cloud.tencent.com/document/api/236/90585) 接口获取。
   */
  ProxyAddressId: string
}

/**
 * ModifyRoGroupInfo返回参数结构体
 */
export interface ModifyRoGroupInfoResponse {
  /**
   * 异步任务 ID。
   */
  AsyncRequestId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 时间段
 */
export interface TimeInterval {
  /**
   * 开始时间。
   */
  StartTime?: string
  /**
   * 结束时间。
   */
  EndTime?: string
}

/**
 * 云数据库切换记录
 */
export interface DBSwitchInfo {
  /**
   * 切换时间，格式为：2017-09-03 01:34:31
   */
  SwitchTime?: string
  /**
   * 切换类型，可能的返回值为：TRANSFER - 数据迁移；MASTER2SLAVE - 主备切换；RECOVERY - 主从恢复
   */
  SwitchType?: string
}

/**
 * ResetPassword返回参数结构体
 */
export interface ResetPasswordResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeAuditRuleTemplateModifyHistory请求参数结构体
 */
export interface DescribeAuditRuleTemplateModifyHistoryRequest {
  /**
   * 审计规则模板ID,可通过[DescribeAuditRuleTemplates](https://cloud.tencent.com/document/api/236/101811)接口获取。
   */
  RuleTemplateIds?: Array<string>
  /**
   * 查询范围的开始时间。
   */
  StartTime?: string
  /**
   * 查询范围的结束时间。
   */
  EndTime?: string
  /**
   * 返回条数,默认值-20，最大值-1000。
   */
  Limit?: number
  /**
   * 偏移量。
   */
  Offset?: number
  /**
   * 排序方式，DESC-按修改时间倒排，ASC-正序，默认：DESC。
   */
  Order?: string
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
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeAuditLogs返回参数结构体
 */
export interface DescribeAuditLogsResponse {
  /**
   * 符合条件的审计日志条数。
   */
  TotalCount?: number
  /**
   * 审计日志详情。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Items?: Array<AuditLog>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
  TotalCount?: number
  /**
   * 审计策略详情。
   */
  Items?: Array<AuditPolicy>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * IsolateDBInstance返回参数结构体
 */
export interface IsolateDBInstanceResponse {
  /**
   * 异步任务的请求 ID，可使用此 ID 查询异步任务的执行结果。(该返回字段目前已废弃，可以通过 DescribeDBInstances 接口查询实例的隔离状态)
   * @deprecated
   */
  AsyncRequestId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * AdjustCdbProxy请求参数结构体
 */
export interface AdjustCdbProxyRequest {
  /**
   * 实例 ID。可通过 [DescribeDBInstances](https://cloud.tencent.com/document/product/236/15872) 接口获取。
   */
  InstanceId: string
  /**
   * 代理组 ID。可通过 [DescribeCdbProxyInfo](https://cloud.tencent.com/document/api/236/90585) 接口获取。
   */
  ProxyGroupId: string
  /**
   * 节点规格配置
备注：数据库代理支持的节点规格为：2C4000MB、4C8000MB、8C16000MB。
示例中参数说明：
NodeCount：节点个数
Region：节点地域
Zone：节点可用区
Cpu：单个代理节点核数（单位：核）
Mem：单个代理节点内存数（单位：MB）
   */
  ProxyNodeCustom: Array<ProxyNodeCustom>
  /**
   * 重新负载均衡：auto(自动),manual(手动)
   */
  ReloadBalance: string
  /**
   * 升级切换时间：nowTime(升级完成时),timeWindow(维护时间内)
   */
  UpgradeTime: string
}

/**
 * ModifyAccountDescription返回参数结构体
 */
export interface ModifyAccountDescriptionResponse {
  /**
   * 异步任务的请求 ID，可使用此 ID 查询异步任务的执行结果。
   */
  AsyncRequestId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 数据库代理地址信息
 */
export interface ProxyAddress {
  /**
   * 代理组地址ID
   */
  ProxyAddressId?: string
  /**
   * 私有网络ID
   */
  UniqVpcId?: string
  /**
   * 私有子网ID
   */
  UniqSubnetId?: string
  /**
   * IP地址
   */
  Vip?: string
  /**
   * 端口
   */
  VPort?: number
  /**
   * 权重分配模式；
系统自动分配："system"， 自定义："custom"
   */
  WeightMode?: string
  /**
   * 是否开启延迟剔除，取值："true" | "false"
   */
  IsKickOut?: boolean
  /**
   * 最小保留数量，最小取值：0
   */
  MinCount?: number
  /**
   * 延迟剔除阈值，最小取值：0
   */
  MaxDelay?: number
  /**
   * 是否自动添加RO，取值："true" | "false"
   */
  AutoAddRo?: boolean
  /**
   * 是否是只读，取值："true" | "false"
   */
  ReadOnly?: boolean
  /**
   * 是否开启事务分离
   */
  TransSplit?: boolean
  /**
   * 是否开启故障转移
   */
  FailOver?: boolean
  /**
   * 是否开启连接池
   */
  ConnectionPool?: boolean
  /**
   * 描述
   */
  Desc?: string
  /**
   * 实例读权重分配
   */
  ProxyAllocation?: Array<ProxyAllocation>
  /**
   * 接入模式
   */
  AccessMode?: string
  /**
   * 是否开启自动负载均衡
   */
  AutoLoadBalance?: boolean
  /**
   * 是否把libra当作ro节点
   */
  ApNodeAsRoNode?: boolean
  /**
   * libra节点故障，是否转发给其他节点
   */
  ApQueryToOtherNode?: boolean
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
  /**
   * 常规备份保留策略，weekly-按周备份，monthly-按月备份，默认为weekly
   */
  BackupPeriodStrategy?: string
  /**
   * 如果设置为按月备份，需填入每月具体备份日期，相邻备份天数不得超过两天。例[1,4,7,9,11,14,17,19,22,25,28,30,31]
   */
  Days?: Array<number | bigint>
  /**
   * 月度备份时间窗，BackupPeriodStrategy为monthly时必填。格式如： 02:00-06:00
   */
  BackupPeriodTime?: string
}

/**
 * ModifyAccountMaxUserConnections请求参数结构体
 */
export interface ModifyAccountMaxUserConnectionsRequest {
  /**
   * 云数据库账号。可通过 [DescribeAccounts](https://cloud.tencent.com/document/api/236/17499) 接口获取。
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
 * DeleteDeployGroups返回参数结构体
 */
export interface DeleteDeployGroupsResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 独享集群CDB实例的节点分布情况
 */
export interface NodeDistribution {
  /**
   * 主实例Master节点所在主机ID或者只读实例所在主机ID
   */
  Node: string
  /**
   * 主实例第一Slave节点所在主机ID
   */
  SlaveNodeOne: string
  /**
   * 主实例第二Slave节点所在主机ID
   */
  SlaveNodeTwo: string
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
  TaskTypes?: Array<number | bigint>
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
  TaskStatus?: Array<number | bigint>
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
 * ModifyBackupEncryptionStatus请求参数结构体
 */
export interface ModifyBackupEncryptionStatusRequest {
  /**
   * 实例ID，格式如：cdb-XXXX。与云数据库控制台页面中显示的实例 ID 相同。
   */
  InstanceId: string
  /**
   * 设置实例新增的自动物理备份文件默认加密状态。可选值为 on或者off。
   */
  EncryptionStatus: string
  /**
   * 设置实例新增的自动日志备份文件默认加密状态。可选值为 on或者off。
   */
  BinlogEncryptionStatus?: string
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
   */
  Items?: Array<RollbackTask>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
   * MySQL 版本，值包括：5.5、5.6、5.7和8.0，请使用 [获取云数据库可售卖规格](https://cloud.tencent.com/document/api/236/17229) 接口获取可创建的实例版本。
说明：创建非云盘版实例时，请根据需要指定实例版本（推荐5.7或8.0），若此参数不填，则默认值为8.0；若创建的是云盘版实例，则此参数仅能指定为5.7或8.0。
   */
  EngineVersion?: string
  /**
   * 私有网络 ID，请使用 [查询私有网络列表](/document/api/215/15778)。
说明：如果创建的是云盘版实例，此参数为必填且为私有网络类型。若此项不填，则系统会选择默认的 VPC。
   */
  UniqVpcId?: string
  /**
   * 私有网络下的子网 ID，如果设置了 UniqVpcId，则 UniqSubnetId 必填，请使用 [查询子网列表](/document/api/215/15784)。
说明：若此项不填，则系统会选择默认 VPC 下的默认子网。
   */
  UniqSubnetId?: string
  /**
   * 项目 ID，不填为默认项目。
   */
  ProjectId?: number
  /**
   * 可用区信息，请使用 [获取云数据库可售卖规格](https://cloud.tencent.com/document/api/236/17229) 接口获取可创建的可用区。
说明：若您创建单节点、双节点、三节点实例，此参数为必填项，请指定可用区，若不指定可用区，则系统会自动选择一个可用区（可能不是您希望部署的可用区）；若您创建云盘版实例，此参数不填，请通过参数 ClusterTopology 进行读写节点和只读节点的可用区配置。
   */
  Zone?: string
  /**
   * 实例 ID，购买只读实例或者灾备实例时必填，该字段表示只读实例或者灾备实例的主实例 ID，请使用 [查询实例列表](https://cloud.tencent.com/document/api/236/15872) 接口查询云数据库实例 ID。
   */
  MasterInstanceId?: string
  /**
   * 实例类型，支持值包括：master - 表示主实例，dr - 表示灾备实例，ro - 表示只读实例。
说明：请选择实例类型，不填会默认选择 master。
   */
  InstanceRole?: string
  /**
   * 主实例地域信息，购买灾备、RO实例时，该字段必填。
   */
  MasterRegion?: string
  /**
   * 自定义端口，端口支持范围：[1024 - 65535]。
说明：不填则默认为3306。
   */
  Port?: number
  /**
   * 设置 root 账号密码，密码规则：8 - 64 个字符，至少包含字母、数字、字符（支持的字符：_+-&=!@#$%^*()）中的两种，购买主实例时可指定该参数，购买只读实例或者灾备实例时指定该参数无意义。
   */
  Password?: string
  /**
   * 参数列表，参数格式如 ParamList.0.Name=auto_increment&ParamList.0.Value=1。可通过 [查询默认的可设置参数列表](https://cloud.tencent.com/document/api/236/32662) 查询支持设置的参数。
说明：表名大小写敏感的开启和关闭可通过参数 lower_case_table_names 进行设置，参数值为0表示开启，参数值为1表示关闭，若不设置则此参数默认值为0。若您创建的是 MySQL 8.0 版本的实例，则需要在创建实例时通过设置 lower_case_table_names 参数来开启或关闭表名大小写敏感，创建实例后无法修改参数，即创建后无法修改表名大小写敏感。其他数据库版本的实例支持在创建实例后修改 lower_case_table_names 参数。创建实例时设置表名大小写敏感的 API 调用方法请参见本文中的示例2。
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
   * 备库 1 的可用区信息。
说明：双节点、三节点实例请指定此参数值，若不指定，则默认为 Zone 的值；云盘版实例此参数可不填，请通过参数 ClusterTopology 进行读写节点和只读节点的可用区配置；单节点实例为单可用区，无需指定此参数。
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
   * 实例名称。一次购买多个实例命名会用后缀数字区分，例instanceName=db，goodsNum=3，实例命名分别为db1，db2，db3。
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
   * 实例隔离类型。支持值包括："UNIVERSAL" - 通用型实例，"EXCLUSIVE" - 独享型实例，"BASIC_V2" - ONTKE 单节点实例，"CLOUD_NATIVE_CLUSTER" - 云盘版标准型，"CLOUD_NATIVE_CLUSTER_EXCLUSIVE" - 云盘版加强型。不指定则默认为通用型实例。
说明：如果创建的是云盘版实例，此参数为必填。
   */
  DeviceType?: string
  /**
   * 参数模板 id。
备注：如您使用自定义参数模板 id，可传入自定义参数模板 id；如您计划使用默认参数模板，该参数模板 id 传入 id 无效，需设置 ParamTemplateType。
   */
  ParamTemplateId?: number
  /**
   * 告警策略id数组。腾讯云可观测平台DescribeAlarmPolicy接口返回的OriginId。
   */
  AlarmPolicyList?: Array<number | bigint>
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
备注：如您需使用云数据库 MySQL 默认参数模板，请设置 ParamTemplateType。
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
   * 实例引擎类型，默认为"InnoDB"，支持值包括："InnoDB"，"RocksDB"。
   */
  EngineType?: string
  /**
   * 指定实例的IP列表。仅支持主实例指定，按实例顺序，不足则按未指定处理。
   */
  Vips?: Array<string>
  /**
   * 云盘版实例的数据保护空间大小，单位 GB，设置范围1 - 10。
   */
  DataProtectVolume?: number
  /**
   * 云盘版节点拓扑配置。
说明：若购买的是云盘版实例，此参数为必填，需设置云盘版实例的 RW 和 RO 节点拓扑，RO 节点范围是1 - 5个，请至少设置1个 RO 节点。
   */
  ClusterTopology?: ClusterTopology
  /**
   * 硬盘类型，单节点（云盘）或者云盘版实例可以指定此参数。CLOUD_SSD 表示 SSD 云硬盘，CLOUD_HSSD 表示增强型 SSD 云硬盘，CLOUD_PREMIUM 表示高性能云硬盘。
说明：单节点（云盘）、云盘版实例硬盘类型所支持的地域略有不同，具体支持情况请参考 [地域和可用区](https://cloud.tencent.com/document/product/236/8458)。
   */
  DiskType?: string
  /**
   * 集群类型:cage——金融围拢，cdc——CDB ON CDC；dedicate——独享集群
   */
  ClusterType?: string
  /**
   * 开启或关闭实例销毁保护。on-开启，off-关闭
   */
  DestroyProtect?: string
}

/**
 * DescribeAuditRuleTemplates返回参数结构体
 */
export interface DescribeAuditRuleTemplatesResponse {
  /**
   * 符合查询条件的实例总数。
   */
  TotalCount?: number
  /**
   * 规则模板详细信息列表。
   */
  Items?: Array<AuditRuleTemplateInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyDBInstanceReadOnlyStatus请求参数结构体
 */
export interface ModifyDBInstanceReadOnlyStatusRequest {
  /**
   * 实例ID，格式如：cdb-c1nl9rpv，与云数据库控制台页面中显示的实例ID相同，可使用[查询实例列表](https://cloud.tencent.com/document/api/236/15872) 接口获取，其值为输出参数中字段 InstanceId 的值。
   */
  InstanceId: string
  /**
   * 是否设置为只读。其中：1表示设置实例为只读，0表示解除只读状态
   */
  ReadOnly: number
}

/**
 * CreateCloneInstance请求参数结构体
 */
export interface CreateCloneInstanceRequest {
  /**
   * 克隆源实例 ID。可通过 [DescribeDBInstances](https://cloud.tencent.com/document/api/236/15872) 接口获取。
   */
  InstanceId: string
  /**
   * 如果需要克隆实例回档到指定时间，则指定该值。时间格式为：yyyy-mm-dd hh:mm:ss。
说明：此参数和 SpecifiedBackupId 参数需要2选1进行设置。
   */
  SpecifiedRollbackTime?: string
  /**
   * 如果需要克隆实例回档到指定备份集，则指定该值为备份文件的 Id。请使用 [查询数据备份文件列表](/document/api/236/15842)。
说明：如果是克隆双节点、三节点实例，备份文件为物理备份，如果是克隆单节点、云盘版实例，备份文件为快照备份。
   */
  SpecifiedBackupId?: number
  /**
   * 私有网络 ID，请使用 [查询私有网络列表](/document/api/215/15778)。
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
   * 新产生的克隆实例名称。支持输入最大60个字符。
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
   * 克隆实例类型。支持值包括："UNIVERSAL" - 通用型实例，"EXCLUSIVE" - 独享型实例，"CLOUD_NATIVE_CLUSTER" - 云盘版标准型，"CLOUD_NATIVE_CLUSTER_EXCLUSIVE" - 云盘版加强型。不指定则默认为通用型。
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
  /**
   * 付费类型，PRE_PAID：包年包月，USED_PAID：按量计费。默认为按量计费
   */
  PayType?: string
  /**
   * 实例时长，PayType为PRE_PAID时必传，单位：月，可选值包括 [1,2,3,4,5,6,7,8,9,10,11,12,24,36]。
   */
  Period?: number
  /**
   * 云盘版节点拓扑配置。
   */
  ClusterTopology?: ClusterTopology
  /**
   * 原实例所在地域名，当传入异地备份时为必选项，例：ap-guangzhou
   */
  SrcRegion?: string
  /**
   * 异地数据备份id
   */
  SpecifiedSubBackupId?: number
  /**
   * 新产生的克隆实例主库的可用区信息，默认同源实例 Zone 的值。
   */
  MasterZone?: string
}

/**
 * 云盘版节点信息
 */
export interface ClusterInfo {
  /**
   * 节点id
   */
  NodeId?: string
  /**
   * 节点类型：主节点，从节点
   */
  Role?: string
  /**
   * 地域
   */
  Zone?: string
}

/**
 * CloseCDBProxy请求参数结构体
 */
export interface CloseCDBProxyRequest {
  /**
   * 实例 ID。可通过 [DescribeDBInstances](https://cloud.tencent.com/document/product/236/15872) 接口获取。
   */
  InstanceId: string
  /**
   * 代理组 ID。可通过 [DescribeCdbProxyInfo](https://cloud.tencent.com/document/api/236/90585) 接口获取。
   */
  ProxyGroupId?: string
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
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
  Groups?: Array<SecurityGroup>
  /**
   * 安全组规则数量。
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeBackupSummaries请求参数结构体
 */
export interface DescribeBackupSummariesRequest {
  /**
   * 需要查询备份实时统计的云数据库产品类型。可取值为：mysql 指双节点/三节点的高可用实例，mysql-basic 指单节点（云盘）实例，mysql-cluster 指云盘版实例。
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
 * AnalyzeAuditLogs返回参数结构体
 */
export interface AnalyzeAuditLogsResponse {
  /**
   * 返回的聚合桶信息集
   */
  Items?: Array<AuditLogAggregationResult>
  /**
   * 扫描的日志条数
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateDBInstance返回参数结构体
 */
export interface CreateDBInstanceResponse {
  /**
   * 计费子订单 ID。
   */
  DealIds?: Array<string>
  /**
   * 实例 ID 列表。
   */
  InstanceIds?: Array<string>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyRoGroupVipVport请求参数结构体
 */
export interface ModifyRoGroupVipVportRequest {
  /**
   * RO组的ID。
   */
  UGroupId: string
  /**
   * 目标IP。
   */
  DstIp?: string
  /**
   * 目标Port。
   */
  DstPort?: number
}

/**
 * OpenAuditService请求参数结构体
 */
export interface OpenAuditServiceRequest {
  /**
   * CDB 实例 ID。可通过 [DescribeDBInstances](https://cloud.tencent.com/document/product/236/15872) 接口获取。
   */
  InstanceId: string
  /**
   * 审计日志保存时长。支持值包括：
7 - 一周；
30 - 一个月；
90 - 三个月；
180 - 六个月；
365 - 一年；
1095 - 三年；
1825 - 五年。
   */
  LogExpireDay: number
  /**
   * 高频审计日志保存时长。默认值为7，此项取值需小于等于 LogExpireDay，支持值包括：
3 - 3天；
7 - 一周；
30 - 一个月；
90 - 三个月；
180 - 六个月；
365 - 一年；
1095 - 三年；
1825 - 五年。
   */
  HighLogExpireDay?: number
  /**
   * 审计规则（该参数已废弃，不再生效）。
   * @deprecated
   */
  AuditRuleFilters?: Array<AuditRuleFilters>
  /**
   * 规则模板 ID。
   */
  RuleTemplateIds?: Array<string>
  /**
   * 审计类型。true - 全审计；默认 false - 规则审计。
   */
  AuditAll?: boolean
}

/**
 * DescribeDBInstanceCharset返回参数结构体
 */
export interface DescribeDBInstanceCharsetResponse {
  /**
   * 实例的默认字符集，如 "latin1"，"utf8" 等。
   */
  Charset: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDBFeatures请求参数结构体
 */
export interface DescribeDBFeaturesRequest {
  /**
   * 实例 ID，格式如：cdb-c1nl9rpv 或者 cdbro-c1nl9rpv，与云数据库控制台页面中显示的实例 ID 相同。
   */
  InstanceId: string
}

/**
 * 扩容的周期
 */
export interface TImeCycle {
  /**
   * 按周期扩容时，是否选择周一扩容。
说明：取值 true，表示选择，取值 false，表示不选择。
   */
  Monday?: boolean
  /**
   * 按周期扩容时，是否选择周二扩容。
说明：取值 true，表示选择，取值 false，表示不选择。
   */
  Tuesday?: boolean
  /**
   * 按周期扩容时，是否选择周三扩容。
说明：取值 true，表示选择，取值 false，表示不选择。
   */
  Wednesday?: boolean
  /**
   * 按周期扩容时，是否选择周四扩容。
说明：取值 true，表示选择，取值 false，表示不选择。
   */
  Thursday?: boolean
  /**
   * 按周期扩容时，是否选择周五扩容。
说明：取值 true，表示选择，取值 false，表示不选择。
   */
  Friday?: boolean
  /**
   * 按周期扩容时，是否选择周六扩容。
说明：取值 true，表示选择，取值 false，表示不选择。
   */
  Saturday?: boolean
  /**
   * 按周期扩容时，是否选择周日扩容。
说明：取值 true，表示选择，取值 false，表示不选择。
   */
  Sunday?: boolean
}

/**
 * DescribeBackupSummaries返回参数结构体
 */
export interface DescribeBackupSummariesResponse {
  /**
   * 实例备份统计条目。
   */
  Items?: Array<BackupSummaryItem>
  /**
   * 实例备份统计总条目数。
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeBinlogBackupOverview请求参数结构体
 */
export interface DescribeBinlogBackupOverviewRequest {
  /**
   * 需要查询日志备份概览的云数据库产品类型。可取值为：mysql 指双节点/三节点的高可用实例，mysql-basic 指单节点（云盘）实例，mysql-cluster 指云盘版实例。
   */
  Product: string
}

/**
 * 实例事件信息
 */
export interface InstEventInfo {
  /**
   * 事件名称。
   */
  EventName?: string
  /**
   * 事件状态。
   */
  EventStatus?: string
  /**
   * 事件发生时间。
   */
  OccurTime?: string
  /**
   * 实例ID。
   */
  InstanceId?: string
  /**
   * 节点ID
   */
  NodeId?: string
}

/**
 * ReloadBalanceProxyNode请求参数结构体
 */
export interface ReloadBalanceProxyNodeRequest {
  /**
   * 代理组 ID。可通过 [DescribeCdbProxyInfo](https://cloud.tencent.com/document/api/236/90585) 接口获取。
   */
  ProxyGroupId: string
  /**
   * 代理组地址 ID。可通过 [DescribeCdbProxyInfo](https://cloud.tencent.com/document/api/236/90585) 接口获取。
说明：
1. 对于双节点实例而言，此参数为非必填，如果不传则会对所有代理组地址进行负载均衡。
2. 对于云盘版实例而言，此参数为必填。
   */
  ProxyAddressId?: string
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
   * 要修改的安全组 ID 列表，一个或者多个安全组 ID 组成的数组。可通过 [DescribeDBSecurityGroups](https://cloud.tencent.com/document/product/236/15854) 接口获取。输入的安全组 ID 数组无长度限制。
注意：该入参会全量替换存量已有集合，非增量更新。修改需传入预期的全量集合。
   */
  SecurityGroupIds: Array<string>
  /**
   * 当传入只读实例 ID 时，默认操作的是对应只读组的安全组。如果需要操作只读实例 ID 的安全组， 需要将该入参置为 True。默认为 False。
   */
  ForReadonlyInstance?: boolean
  /**
   * 变更云盘版实例只读组时，InstanceId 传实例 ID，需要额外指定该参数表示操作只读组。 如果操作读写节点则不需指定该参数。
   */
  OpResourceId?: string
}

/**
 * CloseAuditService请求参数结构体
 */
export interface CloseAuditServiceRequest {
  /**
   * 实例 ID。可通过 [DescribeDBInstances](https://cloud.tencent.com/document/product/236/15872) 接口获取。
   */
  InstanceId: string
}

/**
 * CPU 弹性扩容的自动扩容策略。
 */
export interface AutoStrategy {
  /**
   * 自动扩容阈值，可选值40、50、60、70、80、90，代表 CPU 利用率达到40%、50%、60%、70%、80%、90%时后台进行自动扩容。
   */
  ExpandThreshold: number
  /**
   * 自动缩容阈值，可选值10、20、30，代表CPU利用率达到10%、20%、30%时后台进行自动缩容
   */
  ShrinkThreshold: number
  /**
   * 自动扩容观测周期，单位是分钟，可选值1、3、5、10、15、30。后台会按照配置的周期进行扩容判断。
注意：此字段可能返回 null，表示取不到有效值。
   * @deprecated
   */
  ExpandPeriod?: number
  /**
   * 自动缩容观测周期，单位是分钟，可选值5、10、15、30。后台会按照配置的周期进行缩容判断。
注意：此字段可能返回 null，表示取不到有效值。
   * @deprecated
   */
  ShrinkPeriod?: number
  /**
   * 弹性扩容观测周期（秒级），可取值为：15，30，45，60，180，300，600，900，1800。
   */
  ExpandSecondPeriod?: number
  /**
   * 缩容观测周期（秒级），可取值为：300、600、900、1800。
   */
  ShrinkSecondPeriod?: number
}

/**
 * ModifyAccountMaxUserConnections返回参数结构体
 */
export interface ModifyAccountMaxUserConnectionsResponse {
  /**
   * 异步任务的请求 ID，可使用此 ID 查询异步任务的执行结果。
   */
  AsyncRequestId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
   * 地址模块
   */
  AddressModule: string
  /**
   * 规则描述
   */
  Desc: string
}

/**
 * DescribeClusterInfo返回参数结构体
 */
export interface DescribeClusterInfoResponse {
  /**
   * 实例名称。
   */
  ClusterName?: string
  /**
   * 云盘版实例的读写地址信息。
   */
  ReadWriteAddress?: AddressInfo
  /**
   * 云盘版实例的只读地址信息。
   */
  ReadOnlyAddress?: Array<AddressInfo>
  /**
   * 云盘版实例的节点列表信息。
   */
  NodeList?: Array<ClusterNodeInfo>
  /**
   * 只读空间保护阈值,单位GB
   */
  ReadonlyLimit?: number
  /**
   * 实例节点数。
   */
  NodeCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 查询审计实例的过滤条件
 */
export interface AuditInstanceFilters {
  /**
   * 过滤条件名。支持InstanceId-实例ID，InstanceName-实例名称，ProjectId-项目ID，TagKey-标签键，Tag-标签（以竖线分割，例：Tagkey|Tagvalue）。
   */
  Name: string
  /**
   * true表示精确查找，false表示模糊匹配。
   */
  ExactMatch: boolean
  /**
   * 筛选值
   */
  Values: Array<string>
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
 * DescribeBackupDecryptionKey返回参数结构体
 */
export interface DescribeBackupDecryptionKeyResponse {
  /**
   * 备份文件解密密钥。
   */
  DecryptionKey?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
  ProjectId?: number
  /**
   * 创建时间，时间格式：yyyy-mm-dd hh:mm:ss
   */
  CreateTime?: string
  /**
   * 入站规则
   */
  Inbound?: Array<Inbound>
  /**
   * 出站规则
   */
  Outbound?: Array<Outbound>
  /**
   * 安全组ID
   */
  SecurityGroupId?: string
  /**
   * 安全组名称
   */
  SecurityGroupName?: string
  /**
   * 安全组备注
   */
  SecurityGroupRemark?: string
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
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyProtectMode请求参数结构体
 */
export interface ModifyProtectModeRequest {
  /**
   * 数据复制方式，默认为 0，支持值包括：0 - 表示异步复制，1 - 表示半同步复制，2 - 表示强同步复制。
   */
  ProtectMode: number
  /**
   * 实例ID。
   */
  InstanceId: string
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
  TotalCount?: number
  /**
   * 返回的SQL文件列表。
   */
  Items?: Array<SqlFileInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
   * 实例内存大小，单位：MB。InstanceId 为空时该参数为必填项。为保证传入值有效，请使用 [获取云数据库可售卖规格](https://cloud.tencent.com/document/product/236/17229) 接口获取可售卖的实例内存大小范围。
   */
  Memory?: number
  /**
   * 实例硬盘大小，单位：GB。InstanceId 为空时该参数为必填项。为保证传入值有效，请使用 [获取云数据库可售卖规格](https://cloud.tencent.com/document/product/236/17229) 接口获取可售卖的硬盘大小范围。
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
   * 实例隔离类型。支持值包括： "UNIVERSAL" - 通用型实例， "EXCLUSIVE" - 独享型实例， "BASIC_V2" - 单节点云盘版实例。 "CLOUD_NATIVE_CLUSTER" - 集群版标准型， "CLOUD_NATIVE_CLUSTER_EXCLUSIVE" - 集群版加强型。   不指定则默认为通用型实例。
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
   * 询价续费实例ID。如需查询实例续费价格，填写InstanceId和Period即可。
   */
  InstanceId?: string
  /**
   * 按量计费阶梯。仅PayType=HOUR_PAID有效，支持值包括：1，2，3。阶梯时长见https://cloud.tencent.com/document/product/236/18335。
   */
  Ladder?: number
  /**
   * 磁盘类型，查询集群版、单节点云盘版实例价格可以指定该参数。支持值包括： "CLOUD_SSD" - SSD云硬盘， "CLOUD_HSSD" - 增强型SSD云硬盘。  默认为 SSD云硬盘。
   */
  DiskType?: string
}

/**
 * CreateBackup返回参数结构体
 */
export interface CreateBackupResponse {
  /**
   * 备份任务 ID。
   */
  BackupId?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CPU负载
 */
export interface DeviceCpuInfo {
  /**
   * 实例CPU平均使用率
   */
  Rate?: Array<DeviceCpuRateInfo>
  /**
   * 实例CPU监控数据
   */
  Load?: Array<number | bigint>
}

/**
 * OpenDBInstanceEncryption返回参数结构体
 */
export interface OpenDBInstanceEncryptionResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 各地域可售卖的规格配置
 */
export interface CdbZoneDataResult {
  /**
   * 售卖规格所有集合
   */
  Configs: Array<CdbSellConfig>
  /**
   * 售卖地域可用区集合
   */
  Regions: Array<CdbRegionSellConf>
}

/**
 * sql文件信息
 */
export interface SqlFileInfo {
  /**
   * 上传时间
   */
  UploadTime?: string
  /**
   * 上传进度
   */
  UploadInfo?: UploadInfo
  /**
   * 文件名
   */
  FileName?: string
  /**
   * 文件大小，单位为Bytes
   */
  FileSize?: number
  /**
   * 上传是否完成标志，可选值：0 - 未完成，1 - 已完成
   */
  IsUploadFinished?: number
  /**
   * 文件ID
   */
  FileId?: string
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
   * RO 实例最大延迟阈值。单位为秒，最小值为 1。范围：[1,10000]，整数。
注意：RO 组必须设置了开启实例延迟剔除策略，该值才有效。
   */
  RoMaxDelayTime?: number
  /**
   * 是否开启实例延迟剔除。支持的值包括：1 - 开启；0 - 不开启。注意，若设置开启实例延迟剔除，则必须设置延迟阈值（RoMaxDelayTime）参数。
   */
  RoOfflineDelay?: number
  /**
   * 最少保留实例数。可设置为小于或等于该 RO 组下 RO 实例个数的任意值。默认值为1。
注意：若设置值大于 RO 实例数量将不做剔除；若设置为 0，所有实例延迟超限都会被剔除。
   */
  MinRoInGroup?: number
  /**
   * 权重模式。支持值包括："system" - 系统自动分配； "custom" - 用户自定义设置。注意，若设置 "custom" 模式，则必须设置 RO 实例权重配置（RoWeightValues）参数。
   */
  WeightMode?: string
  /**
   * 延迟复制时间。单位：秒，范围：1 - 259200秒，不传此参数表示不开启实例延迟复制。
   */
  ReplicationDelayTime?: number
}

/**
 * UpgradeCDBProxyVersion返回参数结构体
 */
export interface UpgradeCDBProxyVersionResponse {
  /**
   * 异步处理ID
   */
  AsyncRequestId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
   * 云数据库账号。可通过 [DescribeAccounts](https://cloud.tencent.com/document/api/236/17499) 接口获取。
   */
  Accounts: Array<Account>
  /**
   * 数据库账号的备注信息。最多支持输入255个字符。
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
   * 云数据库账号。可通过 [DescribeAccounts](https://cloud.tencent.com/document/api/236/17499) 接口获取。
   */
  Accounts: Array<Account>
  /**
   * 是否跳过校验密码复杂度
   * @deprecated
   */
  SkipValidatePassword?: boolean
}

/**
 * 实例预期重启时间
 */
export interface InstanceRebootTime {
  /**
   * 实例 ID，格式如：cdb-c1nl9rpv，与云数据库控制台页面中显示的实例 ID 相同。
   */
  InstanceId?: string
  /**
   * 预期重启时间，单位：秒。
   */
  TimeInSeconds?: number
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
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CloseSSL返回参数结构体
 */
export interface CloseSSLResponse {
  /**
   * 异步请求 ID。
   */
  AsyncRequestId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeAuditInstanceList请求参数结构体
 */
export interface DescribeAuditInstanceListRequest {
  /**
   * 实例审计开启的状态。1-已开启审计；0-未开启审计。
   */
  AuditSwitch?: number
  /**
   * 查询实例列表的过滤条件。
   */
  Filters?: Array<AuditInstanceFilters>
  /**
   * 实例的审计规则模式。1-规则审计；0-全审计。
   */
  AuditMode?: number
  /**
   * 单次请求返回的数量。默认值为30，最大值为 20000。
   */
  Limit?: number
  /**
   * 偏移量，默认值为 0。
   */
  Offset?: number
}

/**
 * DescribeBackupEncryptionStatus请求参数结构体
 */
export interface DescribeBackupEncryptionStatusRequest {
  /**
   * 实例ID，格式如：cdb-XXXX。与云数据库控制台页面中显示的实例 ID 相同。
   */
  InstanceId: string
}

/**
 * ModifyDBInstanceLogToCLS返回参数结构体
 */
export interface ModifyDBInstanceLogToCLSResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 审计规则模板的详情
 */
export interface AuditRuleTemplateInfo {
  /**
   * 规则模板ID。
   */
  RuleTemplateId?: string
  /**
   * 规则模板名称。
   */
  RuleTemplateName?: string
  /**
   * 规则模板的过滤条件。
   */
  RuleFilters?: Array<RuleFilters>
  /**
   * 规则模板描述。
   */
  Description?: string
  /**
   * 规则模板创建时间。
   */
  CreateAt?: string
  /**
   * 告警等级。1-低风险，2-中风险，3-高风险。
   */
  AlarmLevel?: number
  /**
   * 告警策略。0-不告警，1-告警。
   */
  AlarmPolicy?: number
  /**
   * 规则模板应用在哪些在实例。
   */
  AffectedInstances?: Array<string>
  /**
   * 模板状态。0-无任务 ，1-修改中。
   */
  Status?: number
  /**
   * 模板更新时间。
   */
  UpdateAt?: string
}

/**
 * ModifyTimeWindow请求参数结构体
 */
export interface ModifyTimeWindowRequest {
  /**
   * 实例 ID。可通过 [DescribeDBInstances](https://cloud.tencent.com/document/product/236/15872) 接口获取。
   */
  InstanceId: string
  /**
   * 修改后的可维护时间段，其中每一个时间段的格式形如：10:00-12:00；起止时间按半个小时对齐；最短半个小时，最长三个小时；最多设置两个时间段；起止时间范围为：[00:00, 24:00]。
说明：设置两个时间段的 json 示例如下。
[
    "01:00-01:30",
    "02:00-02:30"
  ]
   */
  TimeRanges: Array<string>
  /**
   * 指定修改哪一天的可维护时间段，可能的取值为：monday，tuesday，wednesday，thursday，friday，saturday，sunday。如果不指定该值或者为空，则默认一周七天都修改。
说明：指定修改多天的 json 示例如下。
[
    "monday",
    "tuesday"
  ]
   */
  Weekdays?: Array<string>
  /**
   * 数据延迟阈值（秒），仅对主实例和灾备实例有效。不传默认不修改，保持原来的阈值，取值范围：1-10的整数。
   */
  MaxDelayTime?: number
}

/**
 * 审计日志文件
 */
export interface AuditLogFile {
  /**
   * 审计日志文件名称
   */
  FileName?: string
  /**
   * 审计日志文件创建时间。格式为 : "2019-03-20 17:09:13"。
   */
  CreateTime?: string
  /**
   * 文件状态值。可能返回的值为：
"creating" - 生成中;
"failed" - 创建失败;
"success" - 已生成;
   */
  Status?: string
  /**
   * 文件大小，单位为 KB。
   */
  FileSize?: number
  /**
   * 审计日志下载地址。
   */
  DownloadUrl?: string
  /**
   * 错误信息。
   */
  ErrMsg?: string
}

/**
 * DescribeAuditRuleTemplates请求参数结构体
 */
export interface DescribeAuditRuleTemplatesRequest {
  /**
   * 规则模板ID。
   */
  RuleTemplateIds?: Array<string>
  /**
   * 规则模板名称。
   */
  RuleTemplateNames?: Array<string>
  /**
   * 单次请求返回的数量。默认值20，最大值为1000。
   */
  Limit?: number
  /**
   * 偏移量，默认值为 0。
   */
  Offset?: number
  /**
   * 告警等级。1-低风险，2-中风险，3-高风险。
   */
  AlarmLevel?: number
  /**
   * 告警策略。0-不告警，1-告警。
   */
  AlarmPolicy?: number
}

/**
 * 用于回档的数据库表详情
 */
export interface RollbackTables {
  /**
   * 数据库名
   */
  Database: string
  /**
   * 数据库表详情
   */
  Table: Array<RollbackTableName>
}

/**
 * ECDB第二个从库的配置信息，只有ECDB实例才有这个字段
 */
export interface BackupConfig {
  /**
   * 第二个从库复制方式，可能的返回值：async-异步，semisync-半同步
   */
  ReplicationMode?: string
  /**
   * 第二个从库可用区的正式名称，如 ap-shanghai-2
   */
  Zone?: string
  /**
   * 第二个从库内网IP地址
   */
  Vip?: string
  /**
   * 第二个从库访问端口
   */
  Vport?: number
}

/**
 * 本地 binlog 保留策略默认配置
 */
export interface LocalBinlogConfigDefault {
  /**
   * 本地 binlog 保留时长，可取值范围：[6,168]。
   */
  SaveHours?: number
  /**
   * 本地 binlog 空间使用率，可取值范围：[30,50]。
   */
  MaxUsage?: number
}

/**
 * DescribeSSLStatus请求参数结构体
 */
export interface DescribeSSLStatusRequest {
  /**
   * 实例 ID。可通过 [DescribeDBInstances](https://cloud.tencent.com/document/product/236/15872) 接口获取。
说明：实例 ID 和只读组 ID 两个参数选其一填写即可。若要查询双节点、三节点实例 SSL 开通情况，请填写实例 ID 参数进行查询。单节点（云盘）、云盘版实例不支持开启 SSL，因此不支持查询。
   */
  InstanceId?: string
  /**
   * 只读组 ID。可通过 [DescribeRoGroups](https://cloud.tencent.com/document/api/236/40939) 接口获取。
说明：实例 ID 和只读组 ID 两个参数选其一填写即可。若要查询只读实例或只读组 SSL 开通情况，请填写 RoGroupId 参数，并注意填写的都是只读组 ID。单节点（云盘）、云盘版实例不支持开启 SSL，因此不支持查询。
   */
  RoGroupId?: string
}

/**
 * DescribeSlowLogData请求参数结构体
 */
export interface DescribeSlowLogDataRequest {
  /**
   * 实例 ID。可通过 [DescribeDBInstances](https://cloud.tencent.com/document/product/236/15872) 接口获取。
   */
  InstanceId: string
  /**
   * 开始时间戳。例如 1585142640。
说明：此参数单位为秒的时间戳。
   */
  StartTime: number
  /**
   * 结束时间戳。例如 1585142640。
说明：此参数单位为秒的时间戳。
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
   * 排序字段，当前支持字段及含义如下，默认值为 Timestamp。
1. Timestamp：SQL 的执行时间
2. QueryTime：SQL 的执行时长（秒）
3. LockTime：锁时长（秒）
4. RowsExamined：扫描行数
5. RowsSent：结果集行数
   */
  SortBy?: string
  /**
   * 升序还是降序排列。当前支持值为 ASC - 升序，DESC - 降序 ，默认值为 ASC。
   */
  OrderBy?: string
  /**
   * 偏移量，默认为0，最大为9999。
   */
  Offset?: number
  /**
   * 一次性返回的记录数量，默认为100，最大为800。
   */
  Limit?: number
  /**
   * 仅在实例为主实例或者灾备实例时生效，可选值：slave，代表拉取从机的日志。
   */
  InstType?: string
  /**
   * 节点ID
   */
  OpResourceId?: string
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
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteAuditLogFile请求参数结构体
 */
export interface DeleteAuditLogFileRequest {
  /**
   * 审计日志文件名称。可通过 [DescribeAuditLogFiles](https://cloud.tencent.com/document/api/236/45454) 接口获取。
   */
  FileName: string
  /**
   * 实例 ID。可通过 [DescribeDBInstances](https://cloud.tencent.com/document/product/236/15872) 接口获取。
   */
  InstanceId: string
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
 * 用于回档的实例详情
 */
export interface RollbackInstancesInfo {
  /**
   * 云数据库实例 ID。
   */
  InstanceId: string
  /**
   * 回档策略。可选值为：table、db、full。table - 极速回档模式，仅导入所选中表级别的备份和binlog，如有跨表操作，且关联表未被同时选中，将会导致回档失败，该模式下参数Databases必须为空；db - 快速模式，仅导入所选中库级别的备份和binlog，如有跨库操作，且关联库未被同时选中，将会导致回档失败；full - 普通回档模式，将导入整个实例的备份和 binlog，速度较慢。
   */
  Strategy: string
  /**
   * 数据库回档时间，时间格式为：yyyy-mm-dd hh:mm:ss。
   */
  RollbackTime: string
  /**
   * 待回档的数据库信息，表示整库回档。
   */
  Databases?: Array<RollbackDBName>
  /**
   * 待回档的数据库表信息，表示按表回档。
   */
  Tables?: Array<RollbackTables>
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
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
 * 审计日志聚合条件
 */
export interface AggregationCondition {
  /**
   * 聚合字段。目前仅支持host-源IP、user-用户名、dbName-数据库名、sqlType-sql类型。
   */
  AggregationField: string
  /**
   * 偏移量。
   */
  Offset?: number
  /**
   * 该聚合字段下要返回聚合桶的数量，最大100。
   */
  Limit?: number
}

/**
 * ModifyRemoteBackupConfig请求参数结构体
 */
export interface ModifyRemoteBackupConfigRequest {
  /**
   * 实例 ID，格式如：cdb-c1nl9rpv。与云数据库控制台页面中显示的实例 ID 相同。
   */
  InstanceId: string
  /**
   * 异地数据备份开关，off - 关闭异地备份，on-开启异地备份
   */
  RemoteBackupSave: string
  /**
   * 异地日志备份开关，off - 关闭异地备份，on-开启异地备份，只有在参数RemoteBackupSave为on时，RemoteBinlogSave参数才可设置为on
   */
  RemoteBinlogSave: string
  /**
   * 用户设置异地备份地域列表
   */
  RemoteRegion: Array<string>
  /**
   * 异地备份保留时间，单位为天
   */
  ExpireDays: number
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
   * 备份任务 ID。您可通过 [查询数据备份文件列表](https://cloud.tencent.com/document/api/236/15842)  来获取目标备份任务 ID。
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
  DealIds?: Array<string>
  /**
   * 异步任务的请求 ID，可使用此 ID [查询异步任务的执行结果](https://cloud.tencent.com/document/product/236/20410)。
   */
  AsyncRequestId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * UpgradeCDBProxyVersion请求参数结构体
 */
export interface UpgradeCDBProxyVersionRequest {
  /**
   * 实例 ID。可通过 [DescribeDBInstances](https://cloud.tencent.com/document/product/236/15872) 接口获取。
   */
  InstanceId: string
  /**
   * 数据库代理 ID。可通过 [DescribeCdbProxyInfo](https://cloud.tencent.com/document/api/236/90585) 接口获取。
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

/**
 * DeleteAuditRuleTemplates返回参数结构体
 */
export interface DeleteAuditRuleTemplatesResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 实例地址信息
 */
export interface AddressInfo {
  /**
   * 地址的资源id标识。
   */
  ResourceId?: string
  /**
   * 地址所在的vpc。
   */
  UniqVpcId?: string
  /**
   * 地址所在的子网。
   */
  UniqSubnetId?: string
  /**
   * 地址的vip。
   */
  Vip?: string
  /**
   * 地址的端口。
   */
  VPort?: number
  /**
   * 外网地址域名。
   */
  WanDomain?: string
  /**
   * 外网地址端口。
   */
  WanPort?: number
}

/**
 * ModifyAuditRuleTemplates返回参数结构体
 */
export interface ModifyAuditRuleTemplatesResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}
