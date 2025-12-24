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
 * StartBackupCheckJob请求参数结构体
 */
export interface StartBackupCheckJobRequest {
  /**
   * 备份计划 ID。
   */
  BackupPlanId: string
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
 * DescribeConnectTestResult请求参数结构体
 */
export interface DescribeConnectTestResultRequest {
  /**
   * <p>连通性检测任务 ID。</p>
   */
  TaskIds?: Array<number | bigint>
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
   * 资源ID。
   */
  BackupPlanIds?: Array<string>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
 * StartBackupPlan请求参数结构体
 */
export interface StartBackupPlanRequest {
  /**
   * 备份计划 ID。
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
 * StartBackupCheckJob返回参数结构体
 */
export interface StartBackupCheckJobResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
