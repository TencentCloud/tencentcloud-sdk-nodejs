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
 * DescribeBackupCheckJob请求参数结构体
 */
export interface DescribeBackupCheckJobRequest {
  /**
   * 备份计划 ID。
   */
  BackupPlanId: string
}

/**
 * 备份策略
 */
export interface BackupStrategy {
  /**
   * 全量备份开始时间。周期性的全量备份将在当天该时间开始。
   */
  BackupStartTime: string
  /**
   * 存储策略。
   */
  StorageStrategy: StorageStrategy
  /**
   * 备份周期。
   */
  BackupPeriod: BackupPeriod
  /**
   * 备份方法。目前仅支持 "logical" - 逻辑备份。
   */
  BackupMethod?: string
  /**
   * 备份周期。支持的值包括：
"period" - 周期性备份；
"single" - 单次备份。
默认值为"period"。
   */
  StrategyType?: string
  /**
   * 是否开启增量备份。可能的取值为["true", "false"]。默认值为"true"。
   */
  EnableIncrement?: boolean
}

/**
 * 增量备份集信息
 */
export interface IncrementBackup {
  /**
   * 备份集 ID。
   */
  BackupSetId?: string
  /**
   * 源实例信息。
   */
  SourceInfo?: string
  /**
   * 备份集状态。可能的取值为：
"running" - 运行中;
"finished" - 已完成;
"failed" - 已失败;
"stopped" - 已终止。
   */
  Status?: string
  /**
   * 开始时间。格式为 YYYY-MM-DD hh:mm:ss。
   */
  StartTime?: string
  /**
   * 结束时间。格式为 YYYY-MM-DD hh:mm:ss，备份集尚未结束时返回 0000-00-00 00:00:00。
   */
  EndTime?: string
  /**
   * 过期时间。格式为 YYYY-MM-DD hh:mm:ss，备份集尚未生成过期时间时返回空字符串。
   */
  ExpireTime?: string
  /**
   * 备份集文件个数。
   */
  FileCount?: number
  /**
   * 备份方式。可能的取值为：
"logical" - 逻辑备份；
"physical" - 物理备份。
   */
  BackupMethod?: string
  /**
   * 存储类型。目前仅支持 "DBSStorage"，即 DBS 内置存储。
   */
  StorageType?: string
  /**
   * 备份池类型。目前仅支持 "DefaultPool"，即默认存储池。
   */
  BackupPool?: string
  /**
   * 备份集存储类型。支持的取值范围为："standard" - 标准存储；"tiered" - 分级存储。
   */
  RetentionType?: string
  /**
   * 备份集存储状态详情。
   */
  ResourceDetail?: ResourceItemDetail
}

/**
 * 检测步骤详情
 */
export interface TestItem {
  /**
   * <p>检测步骤名称</p>
   */
  TestName?: string
  /**
   * <p>错误码</p>
   */
  Code?: number
  /**
   * <p>错误信息</p>
   */
  Message?: string
}

/**
 * DescribeBackupPlanDetail请求参数结构体
 */
export interface DescribeBackupPlanDetailRequest {
  /**
   * <p>备份计划 ID。可通过 DescribeBackupPlans 接口获取。</p>
   */
  BackupPlanId: string
}

/**
 * DeleteBackupPlan返回参数结构体
 */
export interface DeleteBackupPlanResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 全量备份错误信息
 */
export interface FullBackupErrorMessage {
  /**
   * 错误标题。
   */
  Title?: string
  /**
   * 错误详情。
   */
  Message?: string
}

/**
 * DescribeConnectTestResult返回参数结构体
 */
export interface DescribeConnectTestResultResponse {
  /**
   * <p>任务总数。</p>
   */
  TotalCount?: number
  /**
   * <p>检测结果详情。</p>
   */
  Items?: Array<ConnectTestResult>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 增量备份文件信息
 */
export interface BackupFile {
  /**
   * 文件名。
   */
  FileName?: string
  /**
   * 备份集 ID。
   */
  BackupSetId?: string
  /**
   * 文件状态。取值：
- notReady：未就绪
- backuping：备份中
- finished：备份完成
- failed：备份失败
   */
  Status?: string
  /**
   * 源库连接信息。云数据库实例为实例 ID，其余为 ip:port。
   */
  SourceInfo?: string
  /**
   * 开始时间。格式为 YYYY-MM-DD hh:mm:ss。
   */
  StartTime?: string
  /**
   * 结束时间。格式为 YYYY-MM-DD hh:mm:ss，备份集尚未结束时返回 0000-00-00 00:00:00。
   */
  EndTime?: string
  /**
   * 过期时间。格式为 YYYY-MM-DD hh:mm:ss。
   */
  ExpireTime?: string
  /**
   * 文件大小，单位：字节。
   */
  BackupSize?: number
  /**
   * 备份方式。取值：logical（逻辑备份）。
   */
  BackupMethod?: string
  /**
   * 存储类型。取值：DBSStorage（内置存储）。
   */
  StorageType?: string
  /**
   * 存储策略类型。取值：
- standard：标准存储
- tiered：分级存储
   */
  RetentionType?: string
  /**
   * 备份集存储详情。
   */
  ResourceDetail?: ResourceDetail
  /**
   * 备份池。
   */
  BackupPool?: string
  /**
   * 当前状态下允许的操作。取值：download。
   */
  AllowedActions?: Array<string>
  /**
   * 支持的全部操作。
   */
  AllActions?: Array<string>
  /**
   * 文件最后修改时间。格式为 YYYY-MM-DD hh:mm:ss。
   */
  LastModified?: string
}

/**
 * DescribeIncrementBackupSetFiles返回参数结构体
 */
export interface DescribeIncrementBackupSetFilesResponse {
  /**
   * 文件总数。
   */
  TotalCount?: number
  /**
   * 增量备份文件列表。
   */
  BackupFiles?: Array<BackupFile>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ConfigureBackupPlan返回参数结构体
 */
export interface ConfigureBackupPlanResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 备份计划信息
 */
export interface BackupPlanInfo {
  /**
   * 地域信息。
   */
  Region: string
  /**
   * 备份计划 ID。
   */
  BackupPlanId: string
  /**
   * 备份计划名称。
   */
  BackupPlanName: string
  /**
   * 备份计划状态。可能的取值为：
"notStarted" - 未启动;
"checking" - 校验中;
"checkPass" - 校验通过;
"checkNotPass" - 校验未通过;
"running" - 运行中;
"fullBacking" - 全量备份中;
"isolating" - 隔离中;
"isolated" - 已隔离;
"offlining" - 下线中;
"offlined" - 已下线;
"paused" - 已暂停。
   */
  Status: string
  /**
   * 数据库类型。
   */
  DatabaseType: string
  /**
   * 访问类型。可能的取值为：
"extranet" - 外网;
"cvm" - cvm 自建实例;
"dcg" - 专线接入;
"vpncloud" - 云vpn接入;
"cdb" - 腾讯云数据库实例;
"ccn" - 云联网。
   */
  AccessType: string
  /**
   * 源实例信息。
   */
  SourceInfo: Array<string>
  /**
   * 创建时间。
   */
  CreateTime: string
  /**
   * 到期时间。
   */
  ExpireTime: string
  /**
   * 下线时间。
   */
  OfflineTime: string
  /**
   * 实例规格类型。可能的取值为：["micro", "small", "medium", "large", "xlarge"]。
   */
  InstanceClass: string
  /**
   * 备份方式。可能的取值为：
"logical" - 逻辑备份;
"physical" - 物理备份。
   */
  BackupMethod: string
  /**
   * 标签信息。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Tags: Array<Tag>
  /**
   * 自动续费标记。可能的取值为：
0 - 未开启自动续费;
1 - 已开启自动续费;
2 - 已关闭自动续费。
   */
  AutoRenewFlag: number
  /**
   * 是否开启增量备份标记。
   */
  EnableIncrement: boolean
  /**
   * 付费类型。可能的取值为：
"prePay" - 预付费类型;
"postPay" - 后付费类型。
   */
  PayType: string
  /**
   * 源端信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  SetSourceInfo?: Array<string>
}

/**
 * 标签信息
 */
export interface TagInfo {
  /**
   * 标签键。
   */
  TagKey: string
  /**
   * 标签值。
   */
  TagValue: string
}

/**
 * 备份周期描述
 */
export interface BackupPeriodItem {
  /**
   * 全量备份频率。目前仅支持"Weekly" - 每星期
注意：此字段可能返回 null，表示取不到有效值。
   */
  PeriodType: string
  /**
   * 全量备份周期。取值范围为：["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Day: Array<string>
}

/**
 * DescribeBackupPlans返回参数结构体
 */
export interface DescribeBackupPlansResponse {
  /**
   * 备份计划数量。
   */
  TotalCount?: number
  /**
   * 备份计划详情。
   */
  Items?: Array<BackupPlanInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * StartBackupCheckJob请求参数结构体
 */
export interface StartBackupCheckJobRequest {
  /**
   * 备份计划 ID。
   */
  BackupPlanId: string
}

/**
 * 备份集加密信息
 */
export interface BackupSetOption {
  /**
   * <p>存储加密方式。取值：<br>&quot;UnEncrypted&quot; - 非加密存储;<br>&quot;SSE-COS&quot; - 内置加密存储;<br>&quot;SSE-KMS&quot; - KMS 加密存储。</p>
   */
  Encryption?: string
}

/**
 * DescribeConnectTestResult请求参数结构体
 */
export interface DescribeConnectTestResultRequest {
  /**
   * <p>连通性检测任务 ID。</p>
   */
  TaskIds?: Array<number | bigint>
}

/**
 * 备份集状态详情
 */
export interface ResourceDetail {
  /**
   * <p>当前存储状态。可能的取值为："standard" - 标准存储；"lowFrequency" - 低频存储；"archive" - 归档存储；"deepArchive" - 深度归档存储；</p>
   */
  TieredType?: string
  /**
   * <p>存储时长。备份集已保留的时长，单位为小时。</p>
   */
  StayTime?: number
}

/**
 * 备份对象详情
 */
export interface BackupObjectItem {
  /**
   * 库名。
   */
  DBName?: string
  /**
   * 重命名后的库名。
   */
  NewDBName?: string
  /**
   * schema 名。
   */
  SchemaName?: string
  /**
   * 重命名后的 schema 名。
   */
  NewSchemaName?: string
  /**
   * 库选择模式，可能的取值为：
"all" - 当前对象下的所有对象;
"partial" - 当前对象下的部分对象。
   */
  DbMode?: string
  /**
   * 表选择模式，可能的取值为:
"all" - 当前对象下的所有对象;
"partial" - 当前对象下的部分对象。
   */
  TableMode?: string
  /**
   * 表对象详情。当 TableMode 为 partial，即选择部分表备份时，此参数需要填写。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Tables?: Array<BackupTableItem>
}

/**
 * 备份集状态详情
 */
export interface ResourceItemDetail {
  /**
   * <p>当前存储状态。可能的取值为："standard" - 标准存储；"lowFrequency" - 低频存储；"archive" - 归档存储；"deepArchive" - 深度归档存储；</p>
   */
  TieredType?: string
  /**
   * <p>存储时长。备份集已保留的时长，单位为小时。</p>
   */
  StayTime?: number
}

/**
 * 全量备份进度
 */
export interface FullBackupProgress {
  /**
   * 结构备份进度，取值范围为 0 - 100，单位：百分比。
   */
  SchemaProgress?: number
  /**
   * 数据备份进度，取值范围为 0 - 100，单位：百分比。
   */
  DataProgress?: number
}

/**
 * 分级存储策略
 */
export interface StorageTieredStrategy {
  /**
   * 低频存储
注意：此字段可能返回 null，表示取不到有效值。
   */
  DayToLowFrequency?: number
  /**
   * 归档存储
注意：此字段可能返回 null，表示取不到有效值。
   */
  DayToArchive?: number
  /**
   * 深度归档存储
注意：此字段可能返回 null，表示取不到有效值。
   */
  DayToDeepArchive?: number
}

/**
 * DestroyBackupPlanByUser请求参数结构体
 */
export interface DestroyBackupPlanByUserRequest {
  /**
   * 备份计划 ID。可通过 DescribeBackupPlans 接口获取。
   */
  BackupPlanId: string
}

/**
 * StartBackupPlan返回参数结构体
 */
export interface StartBackupPlanResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 备份对象
 */
export interface BackupObject {
  /**
   * 备份对象类型，可能的取值为:
"all" - 整实例;
"partial" - 部分对象。
   */
  ObjectMode: string
  /**
   * 备份对象详情，当 ObjectMode 为 partial, 即选择部分对象备份时，该字段不能为空。
注意：此字段可能返回 null，表示取不到有效值。
   */
  ObjectItems?: Array<BackupObjectItem>
}

/**
 * CreateBackupPlan返回参数结构体
 */
export interface CreateBackupPlanResponse {
  /**
   * 订单参数。
   */
  OrderId?: string
  /**
   * 备份计划 ID 列表。单次最多返回 10 个。
   */
  BackupPlanIds?: Array<string>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyBackupPlanSourceInfo返回参数结构体
 */
export interface ModifyBackupPlanSourceInfoResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeFullBackupSetDetail请求参数结构体
 */
export interface DescribeFullBackupSetDetailRequest {
  /**
   * <p>全量备份集 ID。可通过 DescribeFullBackupSets 接口获取。</p>
   */
  BackupSetId: string
}

/**
 * 全量备份集详情
 */
export interface FullBackupSetDetail {
  /**
   * <p>备份集 ID。</p>
   */
  BackupSetId?: string
  /**
   * <p>源实例信息。</p>
   */
  SourceInfo?: string
  /**
   * <p>备份集状态。可能的取值为："running" - 运行中;"finished" - 已完成;"failed" - 已失败;"stopped" - 已终止。</p>
   */
  Status?: string
  /**
   * <p>创建时间。格式为 YYYY-MM-DD hh:mm:ss。</p>
   */
  StartTime?: string
  /**
   * <p>结束时间。格式为 YYYY-MM-DD hh:mm:ss，备份集尚未结束时返回 0000-00-00 00:00:00。</p>
   */
  EndTime?: string
  /**
   * <p>过期时间。格式为 YYYY-MM-DD hh:mm:ss。</p>
   */
  ExpireTime?: string
  /**
   * <p>备份集大小，单位为 Bytes。</p>
   */
  BackupSize?: number
  /**
   * <p>备份方式。可能的取值为："logical" - 逻辑备份；"physical" - 物理备份。</p>
   */
  BackupMethod?: string
  /**
   * <p>存储类型。目前仅支持 "DBSStorage"，即 DBS 内置存储。</p>
   */
  StorageType?: string
  /**
   * <p>备份池类型。目前仅支持 "DefaultPool"，即默认存储池。</p>
   */
  BackupPool?: string
  /**
   * <p>备份集存储类型。支持的取值范围为："standard" - 标准存储；"tiered" - 分级存储。</p>
   */
  RetentionType?: string
  /**
   * <p>备份集存储状态详情。</p>
   */
  ResourceDetail?: ResourceDetail
  /**
   * 备份源实例信息。
   */
  SourceEndpoint?: Endpoint
  /**
   * 备份对象。
   */
  BackupObject?: BackupObject
  /**
   * 备份进度。
   */
  Progress?: FullBackupProgress
  /**
   * 备份错误信息。备份失败时有值。
   */
  ErrorMessage?: FullBackupErrorMessage
  /**
   * 备份集加密信息。
   */
  BackupSetOption?: BackupSetOption
}

/**
 * 备份表对象
 */
export interface BackupTableItem {
  /**
   * 表名。
   */
  TableName?: string
  /**
   * 重命名后的表名。
   */
  NewTableName?: string
  /**
   * 列对象。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Columns?: Array<BackupColumnItem>
}

/**
 * DescribeFullBackupSetDetail返回参数结构体
 */
export interface DescribeFullBackupSetDetailResponse {
  /**
   * <p>全量备份集详情。</p>
   */
  BackupSet?: FullBackupSetDetail
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 备份周期描述
 */
export interface BackupPeriod {
  /**
   * 全量备份频率。目前仅支持"Weekly" - 每星期
   */
  PeriodType: string
  /**
   * 全量备份周期。取值范围为：["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]。
   */
  Day: Array<string>
}

/**
 * 备份源实例详情
 */
export interface Endpoint {
  /**
   * 节点角色。取值：
"master" - 主节点;
"slave" - 从节点。
   */
  Role?: string
  /**
   * 数据库类型。目前支持的值["mysql", "mariadb", "percona"]。注意，该值必须和备份计划的类型一致。
   */
  DatabaseType?: string
  /**
   * 实例接入类型，支持的值包括：
"extranet" - 外网;
"cvm" - cvm自建实例;
"dcg" - 专线接入;
"vpncloud" - 云vpn接入;
"cdb" - 腾讯云数据库实例;
"ccn" - 云联网接入。
   */
  AccessType?: string
  /**
   * 实例 Ip。
   */
  Ip?: string
  /**
   * 实例端口号。
   */
  Port?: number
  /**
   * 用户名。
   */
  UserName?: string
  /**
   * 登录密码。
   */
  Password?: string
  /**
   * 云数据库实例ID，格式如：cdb-qcloudtest。
   */
  InstanceId?: string
  /**
   * CVM 实例ID，格式如：ins-olgl39y8，与云服务器控制台页面显示的实例ID相同。如果是CVM自建实例，需要填写该字段。
   */
  CvmInstanceId?: string
  /**
   * 专线网关ID，格式如：dcg-0rxtqqxb。
   */
  UniqDcgId?: string
  /**
   * VPN网关ID，格式如：vpngw-9ghexg7q。
   */
  UniqVpnGwId?: string
  /**
   * 私有网络ID，格式如：vpc-92jblxto。
   */
  VpcId?: string
  /**
   * 子网ID，格式如：subnet-3paxmkdz。
   */
  SubnetId?: string
  /**
   * 云联网ID，如：ccn-afp6kltc。
   */
  CcnId?: string
  /**
   * 接入地域。
   */
  Region?: string
  /**
   * 服务提供商，支持的值包括["aliyun", "aws", "others"]。
   */
  Supplier?: string
  /**
   * 数据库版本，当实例为 RDS 或 AWS 实例时才有效，格式如：5.6或者5.7，默认为5.6。
   */
  EngineVersion?: string
  /**
   * mariadb三引擎版本。
   */
  DBKernel?: string
}

/**
 * StopBackupPlan返回参数结构体
 */
export interface StopBackupPlanResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ResumeBackupPlan请求参数结构体
 */
export interface ResumeBackupPlanRequest {
  /**
   * 备份计划 ID。可通过 DescribeBackupPlans 接口获取。
   */
  BackupPlanId: string
  /**
   * 恢复后是否立即发起一次备份。取值：
- 0：不立即备份，默认值
- 1：立即备份
   */
  BackupNow?: number
}

/**
 * 可恢复时间范围
 */
export interface RestoreRange {
  /**
   * 可恢复起始时间。格式为 YYYY-MM-DD HH:mm:ss，如 2024-01-01 00:00:00，无可恢复时间范围时为空字符串。
   */
  StartTime?: string
  /**
   * 可恢复结束时间。格式为 YYYY-MM-DD HH:mm:ss，如 2024-01-01 00:00:00，无可恢复时间范围时为空字符串。
   */
  EndTime?: string
}

/**
 * DescribeBackupPlanDetail返回参数结构体
 */
export interface DescribeBackupPlanDetailResponse {
  /**
   * <p>地域。</p>
   */
  Region?: string
  /**
   * <p>备份计划 ID。</p>
   */
  BackupPlanId?: string
  /**
   * <p>备份计划名称。</p>
   */
  BackupPlanName?: string
  /**
   * <p>备份计划状态。取值：</p><ul><li>creating：创建中</li><li>notStarted：未启动</li><li>notConfigured：未配置</li><li>checkNotPass：校验未通过</li><li>checkPass：校验通过</li><li>checking：校验中</li><li>readyRun：待运行</li><li>running：运行中</li><li>fullBacking：全量备份中</li><li>paused：已暂停</li><li>isolating：隔离中</li><li>isolated：已隔离</li><li>offlining：下线中</li><li>offlined：已下线</li><li>completed：已完成</li></ul>
   */
  Status?: string
  /**
   * <p>源库连接信息列表。</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  SourceEndPoint?: Array<Endpoint>
  /**
   * <p>备份对象信息。</p>
   */
  BackupObject?: BackupObject
  /**
   * <p>备份策略。</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  BackupStrategy?: BackupStrategyItem
  /**
   * <p>备份进度信息。</p>
   */
  Progress?: BackupProgress
  /**
   * <p>错误异常信息。</p>
   */
  ErrorInfo?: ErrorInfo
  /**
   * <p>创建时间。格式为 YYYY-MM-DD HH:mm:ss，如 2024-01-01 00:00:00。</p>
   */
  CreateTime?: string
  /**
   * <p>到期时间。格式为 YYYY-MM-DD HH:mm:ss，如 2024-01-01 00:00:00，后付费计划无到期时间时为空字符串。</p>
   */
  ExpireTime?: string
  /**
   * <p>下线时间。格式为 YYYY-MM-DD HH:mm:ss，如 2024-01-01 00:00:00，尚未下线时为空字符串。</p>
   */
  OfflineTime?: string
  /**
   * <p>自动续费标识。取值：</p><ul><li>0：不自动续费</li><li>1：自动续费</li></ul>
   */
  AutoRenewFlag?: number
  /**
   * <p>主节点连接信息。云数据库实例为实例 ID，云服务器自建为实例 ID:端口，其余为 ip:port。</p>
   */
  SourceInfo?: Array<string>
  /**
   * <p>从节点连接信息，格式同 SourceInfo。</p>
   */
  SetSourceInfo?: Array<string>
  /**
   * <p>标签信息列表。未绑定标签时返回 null。</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Tags?: Array<TagInfo>
  /**
   * <p>上次备份作业时间。格式为 YYYY-MM-DD HH:mm:ss，如 2024-01-01 00:00:00，尚未执行过备份作业时为空字符串。</p>
   */
  LastBackupJobTime?: string
  /**
   * <p>上次全量备份作业状态。</p>
   */
  LastFullBackupJobStatus?: string
  /**
   * <p>上次增量备份作业状态。</p>
   */
  LastIncBackupJobStatus?: string
  /**
   * <p>下次备份作业时间。格式为 YYYY-MM-DD HH:mm:ss，如 2024-01-01 00:00:00，尚未确定时为空字符串。</p>
   */
  NextBackupJobTime?: string
  /**
   * <p>上次恢复作业时间。格式为 YYYY-MM-DD HH:mm:ss，如 2024-01-01 00:00:00，尚未执行过恢复作业时为空字符串。</p>
   */
  LastRestoreJobTime?: string
  /**
   * <p>上次恢复作业状态。</p>
   */
  LastRestoreJobStatus?: string
  /**
   * <p>付费信息。</p>
   */
  PayInfo?: BackupPlanPayInfo
  /**
   * <p>全量备份并行数上限。</p>
   */
  UpperParallel?: number
  /**
   * <p>带宽上限，单位：MB/s。</p>
   */
  UpperBandwidth?: number
  /**
   * <p>当前状态下允许的操作。</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  AllowedActions?: Array<string>
  /**
   * <p>可恢复时间范围。</p>
   */
  RestoreRange?: RestoreRange
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DestroyBackupPlanByUser返回参数结构体
 */
export interface DestroyBackupPlanByUserResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 标签过滤条件
 */
export interface TagFilter {
  /**
   * 标签键。
   */
  TagKey: string
  /**
   * 标签值。
   */
  TagValue: Array<string>
}

/**
 * 存储策略
 */
export interface StorageStrategySingle {
  /**
   * 存储策略类型。取值：
- standard：标准存储
- tiered：分级存储
注意：此字段可能返回 null，表示取不到有效值。
   */
  RetentionType?: string
  /**
   * 备份保留天数，取值范围为 7 - 3650。
注意：此字段可能返回 null，表示取不到有效值。
   */
  RetentionPeriod?: number
  /**
   * 分级存储策略。RetentionType 为 tiered 时有效。
注意：此字段可能返回 null，表示取不到有效值。
   */
  TieredStrategy?: StorageTieredStrategy
}

/**
 * 备份进度信息
 */
export interface BackupProgress {
  /**
   * 全量备份状态。
   */
  FullBackupStatus?: string
  /**
   * 增量备份状态。
   */
  IncrementBackupStatus?: string
  /**
   * 上次备份执行时间。格式为 YYYY-MM-DD HH:mm:ss，如 2024-01-01 00:00:00，尚未执行过备份时为空字符串。
   */
  LastBackupTime?: string
  /**
   * 下次备份执行时间。格式为 YYYY-MM-DD HH:mm:ss，如 2024-01-01 00:00:00，尚未确定时为空字符串。
   */
  NextBackupTime?: string
  /**
   * 上次恢复时间。格式为 YYYY-MM-DD HH:mm:ss，如 2024-01-01 00:00:00，尚未执行过恢复时为空字符串。
   */
  LastRestoreTime?: string
  /**
   * 上次恢复任务状态。
   */
  LastRestoreStatus?: string
  /**
   * 当前备份作业状态。
   */
  CurrentBackupJobStatus?: string
}

/**
 * ConfigureBackupPlan请求参数结构体
 */
export interface ConfigureBackupPlanRequest {
  /**
   * 备份计划 ID。
   */
  BackupPlanId: string
  /**
   * 备份计划名称。支持数字、英文大小写字母、中文以及特殊字符_-./()（）[]+=：:@,且长度不能超过60。
   */
  BackupPlanName?: string
  /**
   * 全量备份并发数上限。
   */
  UpperParallel?: number
  /**
   * 备份源实例信息。
   */
  SourceEndPoint?: BackupEndpoint
  /**
   * 备份对象信息。
   */
  BackupObject?: BackupObject
  /**
   * 备份策略。
   */
  BackupStrategy?: BackupStrategy
  /**
   * 加密信息。当需要使用SSE-KMS需要传入该值，你可以通过 KMS 的 GenerateDataKey 接口生成。
   */
  PlainText?: string
}

/**
 * StartBackupPlan请求参数结构体
 */
export interface StartBackupPlanRequest {
  /**
   * 备份计划 ID。
   */
  BackupPlanId: string
}

/**
 * DeleteBackupPlan请求参数结构体
 */
export interface DeleteBackupPlanRequest {
  /**
   * 备份计划 ID。可通过 DescribeBackupPlans 接口获取。
   */
  BackupPlanId: string
}

/**
 * DescribeBackupCheckJob返回参数结构体
 */
export interface DescribeBackupCheckJobResponse {
  /**
   * 校验任务状态。可能的取值为："finished" - 已完成; "running" - 进行中。
   */
  Status?: string
  /**
   * 任务进度。取值范围为[0, 100]，表示任务完成的百分比。例如：30表示任务完成30%。
   */
  Progress?: number
  /**
   * 校验是否通过标记。可能的取值为："1" - 校验通过;"0" - 校验未通过。
   */
  CheckFlag?: number
  /**
   * 错误信息。
   */
  ErrMessage?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 备份策略
 */
export interface BackupStrategyItem {
  /**
   * 全量备份开始时间。周期性的全量备份将在当天该时间开始，格式：HH:mm（24 小时制），如 02:00。
注意：此字段可能返回 null，表示取不到有效值。
   */
  BackupStartTime: string
  /**
   * 存储策略。
注意：此字段可能返回 null，表示取不到有效值。
   */
  StorageStrategy: StorageStrategyItem
  /**
   * 备份周期。
注意：此字段可能返回 null，表示取不到有效值。
   */
  BackupPeriod: BackupPeriodItem
  /**
   * 备份方法。目前仅支持 "logical" - 逻辑备份。
注意：此字段可能返回 null，表示取不到有效值。
   */
  BackupMethod?: string
  /**
   * 备份周期。支持的值包括：
"period" - 周期性备份；
"single" - 单次备份。
默认值为"period"。
   */
  StrategyType?: string
  /**
   * 是否开启增量备份。可能的取值为["true", "false"]。默认值为"true"。
注意：此字段可能返回 null，表示取不到有效值。
   */
  EnableIncrement?: boolean
}

/**
 * StopBackupPlan请求参数结构体
 */
export interface StopBackupPlanRequest {
  /**
   * 备份计划 ID。可通过 DescribeBackupPlans 接口获取。
   */
  BackupPlanId: string
}

/**
 * DescribeIncrementBackupSets请求参数结构体
 */
export interface DescribeIncrementBackupSetsRequest {
  /**
   * 备份计划 ID。
   */
  BackupPlanId: string
  /**
   * 过滤条件，备份集 ID。
   */
  BackupSetId?: string
  /**
   * 分页参数。取值范围为(0, 100]，默认值为20。
   */
  Limit?: number
  /**
   * 分页参数。默认值为0。
   */
  Offset?: number
}

/**
 * CreateConnectTestJob请求参数结构体
 */
export interface CreateConnectTestJobRequest {
  /**
   * 备份源实例信息。
   */
  Endpoint?: BackupEndpoint
}

/**
 * 备份列对象
 */
export interface BackupColumnItem {
  /**
   * 列名。
   */
  ColumnName?: string
  /**
   * 重命名后的列名。
   */
  NewColumnName?: string
}

/**
 * 备份计划付费信息
 */
export interface BackupPlanPayInfo {
  /**
   * 实例规格。
   */
  InstanceClass?: string
  /**
   * 付费方式。取值：
- postPay：后付费
- prePay：预付费
   */
  PayType?: string
  /**
   * 免费额度，单位：字节。取值为 -1 表示不限量。
   */
  FreeSpace?: number
  /**
   * 本月计费空间，单位：字节。
   */
  TotalChargeSpace?: number
  /**
   * 全量计费空间，单位：字节。
   */
  FullChargeSpace?: number
  /**
   * 增量计费空间，单位：字节。
   */
  IncrementChargeSpace?: number
  /**
   * 本月全量备份集大小，单位：字节。
   */
  FullBackupSetSize?: number
  /**
   * 本月增量备份集大小，单位：字节。
   */
  IncrementBackupSetSize?: number
  /**
   * 创建时间。格式为 YYYY-MM-DD HH:mm:ss，如 2024-01-01 00:00:00。
   */
  CreateTime?: string
  /**
   * 统计周期，格式为“开始时间 - 结束时间”。
   */
  TimeRange?: string
}

/**
 * DescribeBackupPlans请求参数结构体
 */
export interface DescribeBackupPlansRequest {
  /**
   * 过滤条件，备份计划 ID。
   */
  BackupPlanId?: string
  /**
   * 过滤条件，备份计划状态。
   */
  Status?: Array<string>
  /**
   * 过滤条件，数据库类型。
   */
  DatabaseType?: Array<string>
  /**
   * 过滤条件，接入访问类型。
   */
  AccessType?: Array<string>
  /**
   * 过滤条件，备份计划名称。
   */
  BackupPlanName?: string
  /**
   * 过滤条件，标签键值。
   */
  TagFilters?: Array<TagFilter>
  /**
   * 分页参数。取值范围为(0, 100]，默认值为20。
   */
  Limit?: number
  /**
   * 分页参数。默认值为0。
   */
  Offset?: number
}

/**
 * 备份源实例详情
 */
export interface BackupEndpoint {
  /**
   * 数据库类型。目前支持的值["mysql", "mariadb", "percona"]。注意，该值必须和备份计划的类型一致。
   */
  DatabaseType: string
  /**
   * 实例接入类型，支持的值包括：
"extranet" - 外网;
"cvm" - cvm自建实例;
"dcg" - 专线接入;
"vpncloud" - 云vpn接入;
"cdb" - 腾讯云数据库实例;
"ccn" - 云联网接入。
   */
  AccessType: string
  /**
   * 用户名。
   */
  UserName: string
  /**
   * 登录密码。
   */
  Password: string
  /**
   * 接入地域。
   */
  Region: string
  /**
   * 服务提供商，支持的值包括["aliyun", "aws", "others"]。
   */
  Supplier: string
  /**
   * 实例 Ip。
   */
  Ip?: string
  /**
   * 实例端口号。
   */
  Port?: number
  /**
   * 云数据库实例ID，格式如：cdb-qcloudtest。
   */
  InstanceId?: string
  /**
   * CVM 实例ID，格式如：ins-olgl39y8，与云服务器控制台页面显示的实例ID相同。如果是CVM自建实例，需要填写该字段。
   */
  CvmInstanceId?: string
  /**
   * 专线网关ID，格式如：dcg-0rxtqqxb。
   */
  UniqDcgId?: string
  /**
   * VPN网关ID，格式如：vpngw-9ghexg7q。
   */
  UniqVpnGwId?: string
  /**
   * 私有网络ID，格式如：vpc-92jblxto。
   */
  VpcId?: string
  /**
   * 子网ID，格式如：subnet-3paxmkdz。
   */
  SubnetId?: string
  /**
   * 云联网ID，如：ccn-afp6kltc。
   */
  CcnId?: string
  /**
   * 数据库版本，当实例为 RDS 或 AWS 实例时才有效，格式如：5.6或者5.7，默认为5.6。
   */
  EngineVersion?: string
  /**
   * mariadb三引擎版本。
   */
  DBKernel?: string
}

/**
 * ModifyBackupPlanSourceInfo请求参数结构体
 */
export interface ModifyBackupPlanSourceInfoRequest {
  /**
   * 备份计划 ID。
   */
  BackupPlanId: string
  /**
   * 新的备份源实例信息。
   */
  SourceEndPoint: BackupEndpoint
  /**
   * 新的备份名称。
   */
  BackupPlanName?: string
  /**
   * 新的备份对象信息。
   */
  BackupObject?: BackupObject
  /**
   * 是否立即启动新的备份任务。支持的取值为：1 - 立即启动；0 - 按备份策略配置的时间启动。
   */
  BackupNow?: number
}

/**
 * StartBackupCheckJob返回参数结构体
 */
export interface StartBackupCheckJobResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeIncrementBackupSetFiles请求参数结构体
 */
export interface DescribeIncrementBackupSetFilesRequest {
  /**
   * 增量备份集 ID。可通过 DescribeIncrementBackupSets 接口获取。
   */
  BackupSetId: string
  /**
   * 偏移量，默认为 0。
   */
  Offset?: number
  /**
   * 返回数量，默认为 10。
   */
  Limit?: number
}

/**
 * 标签信息
 */
export interface Tag {
  /**
   * 标签键。
   */
  TagKey: string
  /**
   * 标签值。
   */
  TagValue: string
}

/**
 * CreateBackupPlan请求参数结构体
 */
export interface CreateBackupPlanRequest {
  /**
   * 源端数据库类型。当前支持值为: ["mysql","cynosdbmysql","percona","mariadb","tdsqlmysql"]。
   */
  DatabaseType: string
  /**
   * 备份方式。当前仅支持"logical"，即逻辑备份。
   */
  BackupMethod?: string
  /**
   * 规格。当前支持值为: ["micro","small","medium","large","xlarge"]。默认为"small"。
   */
  InstanceClass?: string
  /**
   * 购买时长，单位为月，默认值为1。
   */
  Period?: number
  /**
   * 计费模式。当前仅支持"prepay"，即包年包月。
   */
  PayType?: string
  /**
   * 购买数量。取值范围为[1, 10]，默认值为1。
   */
  Count?: number
  /**
   * 自动续费标识。1 - 开启自动续费；0 - 不开启自动续费。
   */
  AutoRenew?: number
  /**
   * 标签值。
   */
  Tags?: Array<Tag>
}

/**
 * 备份存储策略。
 */
export interface StorageStrategyItem {
  /**
   * 存储类型。目前仅支持 "system" - DBS 内置存储。默认值为 "system"。
注意：此字段可能返回 null，表示取不到有效值。
   */
  StorageType?: string
  /**
   * 加密方式。可能的取值为：
"UnEncrypted" - 非加密存储;
"SSE-COS" - 内置加密存储;
当该参数用作入参时，默认值为 "UnEncrypted"。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Encryption?: string
  /**
   * 日志保留时间，单位为天。取值范围为[7, 3650]，默认值为 30。
注意：此字段可能返回 null，表示取不到有效值。
   */
  BackupRetentionPeriod?: number
  /**
   * 全量备份存储策略。
注意：此字段可能返回 null，表示取不到有效值。
   */
  FullStorageStrategy?: StorageStrategySingle
  /**
   * 增量备份存储策略。
注意：此字段可能返回 null，表示取不到有效值。
   */
  IncStorageStrategy?: StorageStrategySingle
}

/**
 * ResumeBackupPlan返回参数结构体
 */
export interface ResumeBackupPlanResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeIncrementBackupSets返回参数结构体
 */
export interface DescribeIncrementBackupSetsResponse {
  /**
   * 增量备份集数量。
   */
  TotalCount?: number
  /**
   * 增量备份集信息。
   */
  Items?: Array<IncrementBackup>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 错误异常信息
 */
export interface ErrorInfo {
  /**
   * 错误类型。
   */
  ErrorType?: string
  /**
   * 错误信息。
   */
  ErrorMsg?: string
}

/**
 * 连通性检测结果
 */
export interface ConnectTestResult {
  /**
   * <p>任务 ID</p>
   */
  TaskId?: number
  /**
   * <p>任务状态</p>
   */
  Status?: string
  /**
   * <p>是否通过。0 表示未通过，1 表示通过。</p>
   */
  IsPass?: number
  /**
   * <p>源端地址</p>
   */
  Addr?: string
  /**
   * <p>源地址转换IP</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  SNatIp?: string
  /**
   * <p>检测结果集</p>
   */
  TestItems?: Array<TestItem>
}

/**
 * CreateConnectTestJob返回参数结构体
 */
export interface CreateConnectTestJobResponse {
  /**
   * 连通性任务 ID。
   */
  ConnTaskId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 备份存储策略。
 */
export interface StorageStrategy {
  /**
   * 存储类型。目前仅支持 "system" - DBS 内置存储。默认值为 "system"。
   */
  StorageType?: string
  /**
   * 加密方式。可能的取值为：
"UnEncrypted" - 非加密存储;
"SSE-COS" - 内置加密存储;
当该参数用作入参时，默认值为 "UnEncrypted"。
   */
  Encryption?: string
  /**
   * 日志保留时间，单位为天。取值范围为[7, 3650]，默认值为 30。
   */
  BackupRetentionPeriod?: number
}
