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
 * ModifyCompareTask返回参数结构体
 */
export interface ModifyCompareTaskResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeSyncJobs返回参数结构体
 */
export interface DescribeSyncJobsResponse {
  /**
   * 任务数目
注意：此字段可能返回 null，表示取不到有效值。
   */
  TotalCount?: number
  /**
   * 任务详情数组
注意：此字段可能返回 null，表示取不到有效值。
   */
  JobList?: Array<SyncJobInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyMigrationJob返回参数结构体
 */
export interface ModifyMigrationJobResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ResetConsumerGroupOffset返回参数结构体
 */
export interface ResetConsumerGroupOffsetResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyMigrateRateLimit返回参数结构体
 */
export interface ModifyMigrateRateLimitResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * IsolateMigrateJob返回参数结构体
 */
export interface IsolateMigrateJobResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyMigrateJobSpec请求参数结构体
 */
export interface ModifyMigrateJobSpecRequest {
  /**
   * 任务id
   */
  JobId: string
  /**
   * 新实例规格大小，包括：micro、small、medium、large、xlarge、2xlarge
   */
  NewInstanceClass: string
}

/**
 * IsolateSubscribe返回参数结构体
 */
export interface IsolateSubscribeResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyConsumerGroupPassword请求参数结构体
 */
export interface ModifyConsumerGroupPasswordRequest {
  /**
   * 数据订阅实例的 ID
   */
  SubscribeId: string
  /**
   * 账号名称。实际的账户全称形如：account-#{SubscribeId}-#{AccountName}
   */
  AccountName: string
  /**
   * 消费组名称。实际的消费组全称形如：consumer-grp-#{SubscribeId}-#{ConsumerGroupName}
   */
  ConsumerGroupName: string
  /**
   * 新密码。字符长度不小于3，不大于32
   */
  NewPassword: string
  /**
   * 旧密码，非必选
   */
  OldPassword?: string
}

/**
 * 当前步骤错误信息或者警告信息
 */
export interface StepTip {
  /**
   * 错误码
注意：此字段可能返回 null，表示取不到有效值。
   */
  Code?: string
  /**
   * 错误信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  Message?: string
  /**
   * 解决方式
注意：此字段可能返回 null，表示取不到有效值。
   */
  Solution?: string
  /**
   * 帮助文档
注意：此字段可能返回 null，表示取不到有效值。
   */
  HelpDoc?: string
  /**
   * 当前步骤跳过信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  SkipInfo?: string
}

/**
 * ModifySyncRateLimit返回参数结构体
 */
export interface ModifySyncRateLimitResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DestroyMigrateJob请求参数结构体
 */
export interface DestroyMigrateJobRequest {
  /**
   * 任务id
   */
  JobId?: string
}

/**
 * ModifySubscribeName请求参数结构体
 */
export interface ModifySubscribeNameRequest {
  /**
   * 数据订阅实例的ID
   */
  SubscribeId: string
  /**
   * 修改后的数据订阅实例的名称，长度限制为[1,60]
   */
  SubscribeName: string
}

/**
 * 数据订阅kafka分区中checkpoint信息
 */
export interface OffsetTimeMap {
  /**
   * kafka分区编号
注意：此字段可能返回 null，表示取不到有效值。
   */
  PartitionNo?: number
  /**
   * kafka offset
注意：此字段可能返回 null，表示取不到有效值。
   */
  Offset?: number
}

/**
 * SkipCheckItem返回参数结构体
 */
export interface SkipCheckItemResponse {
  /**
   * 跳过的提示信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  Message?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ResumeSyncJob请求参数结构体
 */
export interface ResumeSyncJobRequest {
  /**
   * 同步任务id
   */
  JobId: string
}

/**
 * 数据订阅中kafka消费者组的分区分配情况。该数据是实时查询的，如果需要最新数据，需重新掉接口查询。
 */
export interface PartitionAssignment {
  /**
   * 消费者的clientId
   */
  ClientId: string
  /**
   * 该消费者正在消费的分区
注意：此字段可能返回 null，表示取不到有效值。
   */
  PartitionNo: Array<number | bigint>
}

/**
 * mongodb行校验不一致详细信息
 */
export interface RowsCountDifference {
  /**
   * 数据库名
注意：此字段可能返回 null，表示取不到有效值。
   */
  Db?: string
  /**
   * 集合
注意：此字段可能返回 null，表示取不到有效值。
   */
  Table?: string
  /**
   * 源端行数
注意：此字段可能返回 null，表示取不到有效值。
   */
  SrcCount?: number
  /**
   * 目标端行数
注意：此字段可能返回 null，表示取不到有效值。
   */
  DstCount?: number
}

/**
 * ResizeSyncJob返回参数结构体
 */
export interface ResizeSyncJobResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateSubscribeCheckJob请求参数结构体
 */
export interface CreateSubscribeCheckJobRequest {
  /**
   * 数据订阅实例的 ID
   */
  SubscribeId: string
}

/**
 * ResumeMigrateJob返回参数结构体
 */
export interface ResumeMigrateJobResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 校验不一致的表详情
 */
export interface DifferenceItem {
  /**
   * 数据库名
注意：此字段可能返回 null，表示取不到有效值。
   */
  Db?: string
  /**
   * 表名
注意：此字段可能返回 null，表示取不到有效值。
   */
  Table?: string
  /**
   * 分块号
注意：此字段可能返回 null，表示取不到有效值。
   */
  Chunk?: number
  /**
   * 源库数值
注意：此字段可能返回 null，表示取不到有效值。
   */
  SrcItem?: string
  /**
   * 目标库数值
注意：此字段可能返回 null，表示取不到有效值。
   */
  DstItem?: string
  /**
   * 索引名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  IndexName?: string
  /**
   * 索引下边界
注意：此字段可能返回 null，表示取不到有效值。
   */
  LowerBoundary?: string
  /**
   * 索引上边界
注意：此字段可能返回 null，表示取不到有效值。
   */
  UpperBoundary?: string
  /**
   * 对比消耗时间,单位为 ms
注意：此字段可能返回 null，表示取不到有效值。
   */
  CostTime?: number
  /**
   * 完成时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  FinishedAt?: string
}

/**
 * CreateModifyCheckSyncJob请求参数结构体
 */
export interface CreateModifyCheckSyncJobRequest {
  /**
   * 同步任务id
   */
  JobId: string
}

/**
 * IsolateSyncJob请求参数结构体
 */
export interface IsolateSyncJobRequest {
  /**
   * 同步任务id
   */
  JobId: string
}

/**
 * PauseMigrateJob请求参数结构体
 */
export interface PauseMigrateJobRequest {
  /**
   * 数据迁移任务ID
   */
  JobId: string
}

/**
 * ContinueMigrateJob请求参数结构体
 */
export interface ContinueMigrateJobRequest {
  /**
   * 数据迁移任务ID
   */
  JobId: string
}

/**
 * ResetConsumerGroupOffset请求参数结构体
 */
export interface ResetConsumerGroupOffsetRequest {
  /**
   * 订阅实例id
   */
  SubscribeId: string
  /**
   * 订阅的kafka topic
   */
  TopicName: string
  /**
   * 消费组名称。实际的消费组全称形如：consumer-grp-#{SubscribeId}-#{ConsumerGroupName}
   */
  ConsumerGroupName: string
  /**
   * 需要修改offset的分区编号
   */
  PartitionNos: Array<number | bigint>
  /**
   * 重置方式。枚举值为 earliest-从最开始位置开始消费；latest-从最新位置开始消费；datetime-从指定时间前最近的checkpoint开始消费
   */
  ResetMode: string
  /**
   * 当 ResetMode 为 datetime 时，该项需要填，格式为：Y-m-d h:m:s。如果不填，默认用0时间，效果与earliest相同。
   */
  ResetDatetime?: string
}

/**
 * ModifySyncRateLimit请求参数结构体
 */
export interface ModifySyncRateLimitRequest {
  /**
   * 迁移任务ID
   */
  JobId: string
  /**
   * 同步任务全量导出线程数、有效值为 1-16
   */
  DumpThread?: number
  /**
   * 同步任务全量导出的 Rps 限制、需要大于 0
   */
  DumpRps?: number
  /**
   * 同步任务全量导入线程数、有效值为 1-16
   */
  LoadThread?: number
  /**
   * 同步任务增量导入线程数、有效值为 1-128
   */
  SinkerThread?: number
  /**
   * 同步任务全量导入的Rps
   */
  LoadRps?: number
}

/**
 * DescribeCheckSyncJobResult请求参数结构体
 */
export interface DescribeCheckSyncJobResultRequest {
  /**
   * 同步实例id（即标识一个同步作业），形如sync-werwfs23，此值必填
   */
  JobId?: string
}

/**
 * ModifySubscribeAutoRenewFlag返回参数结构体
 */
export interface ModifySubscribeAutoRenewFlagResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DestroySyncJob返回参数结构体
 */
export interface DestroySyncJobResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 任务错误信息
 */
export interface ErrorInfoItem {
  /**
   * 错误码
注意：此字段可能返回 null，表示取不到有效值。
   */
  Code?: string
  /**
   * 解决方案
注意：此字段可能返回 null，表示取不到有效值。
   */
  Solution?: string
  /**
   * 错误日志信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  ErrorLog?: string
  /**
   * 文档提示
注意：此字段可能返回 null，表示取不到有效值。
   */
  HelpDoc?: string
}

/**
 * IsolateMigrateJob请求参数结构体
 */
export interface IsolateMigrateJobRequest {
  /**
   * 任务id
   */
  JobId: string
}

/**
 * StopMigrateJob返回参数结构体
 */
export interface StopMigrateJobResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 表对象集合，当 TableMode 为 partial 时，此项需要填写
 */
export interface TableItem {
  /**
   * 迁移的表名，大小写敏感
注意：此字段可能返回 null，表示取不到有效值。
   */
  TableName?: string
  /**
   * 迁移后的表名，当TableEditMode为rename时此项必填，注意此配置与TmpTables互斥，只能使用其中一种
注意：此字段可能返回 null，表示取不到有效值。
   */
  NewTableName?: string
  /**
   * 迁移临时表，注意此配置与NewTableName互斥，只能使用其中一种。当配置的同步对象为表级别且TableEditMode为pt时此项有意义，针对pt-osc等工具在迁移过程中产生的临时表进行同步，需要提前将可能的临时表配置在这里，否则不会同步任何临时表。示例，如要对t1进行pt-osc操作，此项配置应该为["\_t1\_new","\_t1\_old"]；如要对t1进行gh-ost操作，此项配置应该为["\_t1\_ghc","\_t1\_gho","\_t1\_del"]，pt-osc与gh-ost产生的临时表可同时配置。
注意：此字段可能返回 null，表示取不到有效值。
   */
  TmpTables?: Array<string>
  /**
   * 编辑表类型，rename(表映射)，pt(同步附加表)
注意：此字段可能返回 null，表示取不到有效值。
   */
  TableEditMode?: string
}

/**
 * 订阅实例信息
 */
export interface SubscribeInfo {
  /**
   * 数据订阅的实例ID
   */
  SubscribeId?: string
  /**
   * 数据订阅实例的名称
   */
  SubscribeName?: string
  /**
   * 订阅实例发送数据的kafka topic
注意：此字段可能返回 null，表示取不到有效值。
   */
  Topic?: string
  /**
   * 订阅实例的类型，目前支持 cynosdbmysql,mariadb,mongodb,mysql,percona,tdpg,tdsqlpercona(tdsqlmysql)
   */
  Product?: string
  /**
   * 订阅的数据库实例ID（如果订阅的是云数据库）如果实例不是腾讯云上的，此值为空。
注意：此字段可能返回 null，表示取不到有效值。
   */
  InstanceId?: string
  /**
   * 云数据库状态：running 运行中，isolated 已隔离，offline 已下线。如果不是云上，此值为空
注意：此字段可能返回 null，表示取不到有效值。
   */
  InstanceStatus?: string
  /**
   * 数据订阅生命周期状态，可能的值为：正常 normal, 隔离中 isolating, 已隔离 isolated, 下线中 offlining, 按量转包年包月中 post2PrePayIng
   */
  Status?: string
  /**
   * 数据订阅状态，可能的值为：未启动 notStarted, 校验中 checking, 校验不通过 checkNotPass, 校验通过 checkPass, 启动中 starting, 运行中 running, 异常出错 error
   */
  SubsStatus?: string
  /**
   * 上次修改时间，时间格式如：Y-m-d h:m:s
注意：此字段可能返回 null，表示取不到有效值。
   */
  ModifyTime?: string
  /**
   * 创建时间，时间格式如：Y-m-d h:m:s
注意：此字段可能返回 null，表示取不到有效值。
   */
  CreateTime?: string
  /**
   * 隔离时间，时间格式如：Y-m-d h:m:s。默认：0000-00-00 00:00:00
注意：此字段可能返回 null，表示取不到有效值。
   */
  IsolateTime?: string
  /**
   * 包年包月任务的到期时间，时间格式如：Y-m-d h:m:s。默认：0000-00-00 00:00:00
注意：此字段可能返回 null，表示取不到有效值。
   */
  ExpireTime?: string
  /**
   * 下线时间，时间格式如：Y-m-d h:m:s。默认：0000-00-00 00:00:00
注意：此字段可能返回 null，表示取不到有效值。
   */
  OfflineTime?: string
  /**
   * 计费方式，0 - 包年包月，1 - 按量计费
   */
  PayType?: number
  /**
   * 自动续费标识。只有当 PayType=0，该值才有意义。枚举值：0-不自动续费，1-自动续费
   */
  AutoRenewFlag?: number
  /**
   * 数据订阅实例所属地域
   */
  Region?: string
  /**
   * 接入方式。枚举值：extranet(公网) vpncloud(vpn接入) dcg(专线接入) ccn(云联网) cdb(云数据库) cvm(云主机自建) intranet(自研上云) vpc(私有网络vpc)
注意：此字段可能返回 null，表示取不到有效值。
   */
  AccessType?: string
  /**
   * 数据库节点信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  Endpoints?: Array<EndpointItem>
  /**
   * 数据订阅版本, 当前只支持 kafka 版本。
注意：此字段可能返回 null，表示取不到有效值。
   */
  SubscribeVersion?: string
  /**
   * 标签
注意：此字段可能返回 null，表示取不到有效值。
   */
  Tags?: Array<TagItem>
  /**
   * 任务报错信息，如果有的话。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Errors?: Array<SubsErr>
}

/**
 * ModifyCompareTaskName请求参数结构体
 */
export interface ModifyCompareTaskNameRequest {
  /**
   * 迁移任务 Id
   */
  JobId: string
  /**
   * 对比任务 ID，形如：dts-8yv4w2i1-cmp-37skmii9
   */
  CompareTaskId: string
  /**
   * 一致性校验任务名称
   */
  TaskName: string
}

/**
 * CompleteMigrateJob返回参数结构体
 */
export interface CompleteMigrateJobResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeMigrateDBInstances返回参数结构体
 */
export interface DescribeMigrateDBInstancesResponse {
  /**
   * 符合筛选条件的数量
注意：此字段可能返回 null，表示取不到有效值。
   */
  TotalCount?: number
  /**
   * 实例列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  Instances?: Array<MigrateDBItem>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 存放配置时的额外信息
 */
export interface KeyValuePairOption {
  /**
   * 选项key
注意：此字段可能返回 null，表示取不到有效值。
   */
  Key?: string
  /**
   * 选项value
注意：此字段可能返回 null，表示取不到有效值。
   */
  Value?: string
}

/**
 * 数据不一致详情
 */
export interface DifferenceData {
  /**
   * 数据库名
注意：此字段可能返回 null，表示取不到有效值。
   */
  Db?: string
  /**
   * 集合
注意：此字段可能返回 null，表示取不到有效值。
   */
  Table?: string
  /**
   * 源端ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  SrcChunk?: string
  /**
   * 目标端ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  DstChunk?: string
  /**
   * 源端值
注意：此字段可能返回 null，表示取不到有效值。
   */
  SrcItem?: string
  /**
   * 目标端值
注意：此字段可能返回 null，表示取不到有效值。
   */
  DstItem?: string
  /**
   * 更新时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  UpdatedAt?: string
}

/**
 * CreateCheckSyncJob请求参数结构体
 */
export interface CreateCheckSyncJobRequest {
  /**
   * 同步任务id
   */
  JobId: string
}

/**
 * DescribeModifyCheckSyncJobResult返回参数结构体
 */
export interface DescribeModifyCheckSyncJobResultResponse {
  /**
   * 校验任务执行状态，如：notStarted(未开始)、running(校验中)、failed(校验任务失败)、success(任务成功)
   */
  Status?: string
  /**
   * 校验的步骤总数
注意：此字段可能返回 null，表示取不到有效值。
   */
  StepCount?: number
  /**
   * 当前所在步骤
注意：此字段可能返回 null，表示取不到有效值。
   */
  StepCur?: number
  /**
   * 总体进度，范围为[0,100]	
注意：此字段可能返回 null，表示取不到有效值。
   */
  Progress?: number
  /**
   * 步骤详细信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  StepInfos?: Array<StepInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * StartSubscribe返回参数结构体
 */
export interface StartSubscribeResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeSubscribeReturnable请求参数结构体
 */
export interface DescribeSubscribeReturnableRequest {
  /**
   * 数据订阅实例的ID
   */
  SubscribeId: string
}

/**
 * DescribeMigrationDetail请求参数结构体
 */
export interface DescribeMigrationDetailRequest {
  /**
   * 数据迁移任务ID
   */
  JobId: string
}

/**
 * CreateConsumerGroup请求参数结构体
 */
export interface CreateConsumerGroupRequest {
  /**
   * 订阅实例id
   */
  SubscribeId: string
  /**
   * 消费组名称，以数字、字母(大小写)或者_ - .开头，以数字、字母(大小写)结尾。实际生成的消费组全称形如：consumer-grp-#{SubscribeId}-#{ConsumerGroupName}
   */
  ConsumerGroupName: string
  /**
   * 账号名称。以数字、字母(大小写)或者_ - .开头，以数字、字母(大小写)结尾。实际生成的账户全称形如：account-#{SubscribeId}-#{AccountName}
   */
  AccountName: string
  /**
   * 消费组密码，长度必须大于3
   */
  Password: string
  /**
   * 消费组备注
   */
  Description?: string
}

/**
 * ResizeSyncJob请求参数结构体
 */
export interface ResizeSyncJobRequest {
  /**
   * 同步任务id
   */
  JobId: string
  /**
   * 任务规格
   */
  NewInstanceClass: string
}

/**
 * mongodb行数校验不一致性详情结果
 */
export interface DifferenceRowDetail {
  /**
   * 不一致总数
注意：此字段可能返回 null，表示取不到有效值。
   */
  TotalCount?: number
  /**
   * 不一致列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  Items?: Array<RowsCountDifference>
}

/**
 * ModifySubscribeName返回参数结构体
 */
export interface ModifySubscribeNameResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 数据同步中的ddl同步处理
 */
export interface DdlOption {
  /**
   * ddl类型，如Database,Table,View,Index等
注意：此字段可能返回 null，表示取不到有效值。
   */
  DdlObject?: string
  /**
   * ddl具体值，对于Database可取值[Create,Drop,Alter]<br>对于Table可取值[Create,Drop,Alter,Truncate,Rename]<br/>对于View可取值[Create,Drop]<br/>对于Index可取值[Create,Drop]
注意：此字段可能返回 null，表示取不到有效值。
   */
  DdlValue?: Array<string>
}

/**
 * 冲突处理里的详细描述
 */
export interface ConflictHandleOption {
  /**
   * 条件覆盖的列
注意：此字段可能返回 null，表示取不到有效值。
   */
  ConditionColumn?: string
  /**
   * 条件覆盖操作
注意：此字段可能返回 null，表示取不到有效值。
   */
  ConditionOperator?: string
  /**
   * 条件覆盖优先级处理
注意：此字段可能返回 null，表示取不到有效值。
   */
  ConditionOrderInSrcAndDst?: string
}

/**
 * mongo输出聚合设置。输出默认 Change Event
 */
export interface PipelineInfo {
  /**
   * 聚合运算符：$addFields、$match、$project、$replaceRoot、$redact、$replaceWith、$set、$unset。其中 $replaceWith、$set、$unset 只有当订阅实例是4.2及以上版本可选。
注意：此字段可能返回 null，表示取不到有效值。
   */
  AggOp?: string
  /**
   * 聚合表达式。必须是json格式
注意：此字段可能返回 null，表示取不到有效值。
   */
  AggCmd?: string
}

/**
 * ResumeSyncJob返回参数结构体
 */
export interface ResumeSyncJobResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * RecoverMigrateJob返回参数结构体
 */
export interface RecoverMigrateJobResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyCompareTaskName返回参数结构体
 */
export interface ModifyCompareTaskNameResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * StartSyncJob请求参数结构体
 */
export interface StartSyncJobRequest {
  /**
   * 同步任务id
   */
  JobId?: string
}

/**
 * StartSubscribe请求参数结构体
 */
export interface StartSubscribeRequest {
  /**
   * 数据订阅实例的 ID
   */
  SubscribeId: string
}

/**
 * ModifyMigrateRuntimeAttribute返回参数结构体
 */
export interface ModifyMigrateRuntimeAttributeResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeOffsetByTime返回参数结构体
 */
export interface DescribeOffsetByTimeResponse {
  /**
   * 时间与Offset的对应
   */
  Items?: Array<OffsetTimeMap>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * PauseSyncJob请求参数结构体
 */
export interface PauseSyncJobRequest {
  /**
   * 同步任务id
   */
  JobId: string
}

/**
 * CreateMigrateCheckJob返回参数结构体
 */
export interface CreateMigrateCheckJobResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifySyncJobConfig请求参数结构体
 */
export interface ModifySyncJobConfigRequest {
  /**
   * 同步任务id
   */
  JobId: string
  /**
   * 修改后的同步对象
   */
  DynamicObjects?: Objects
  /**
   * 修改后的同步任务选项
   */
  DynamicOptions?: DynamicOptions
}

/**
 * ContinueMigrateJob返回参数结构体
 */
export interface ContinueMigrateJobResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateMigrationService请求参数结构体
 */
export interface CreateMigrationServiceRequest {
  /**
   * 源实例数据库类型，如mysql,redis,percona,mongodb,postgresql,sqlserver,mariadb,cynosdbmysql
   */
  SrcDatabaseType: string
  /**
   * 目标实例数据库类型，如mysql,redis,percona,mongodb,postgresql,sqlserver,mariadb,cynosdbmysql
   */
  DstDatabaseType: string
  /**
   * 源实例地域，如：ap-guangzhou
   */
  SrcRegion: string
  /**
   * 目标实例地域，如：ap-guangzhou。注意，目标地域必须和API请求地域保持一致。
   */
  DstRegion: string
  /**
   * 实例规格，包括：small、medium、large、xlarge、2xlarge
   */
  InstanceClass: string
  /**
   * 购买数量，范围为[1,15]，默认为1
   */
  Count?: number
  /**
   * 迁移服务名称，最大长度128
   */
  JobName?: string
  /**
   * 标签信息
   */
  Tags?: Array<TagItem>
}

/**
 * 每个检查步骤里的具体检查项
 */
export interface DetailCheckItem {
  /**
   * 检查项的名称，如：源实例权限检查
注意：此字段可能返回 null，表示取不到有效值。
   */
  CheckItemName?: string
  /**
   * 检查项详细内容
注意：此字段可能返回 null，表示取不到有效值。
   */
  Description?: string
  /**
   * pass(通过)，failed(失败), warning(校验有警告，但仍通过)
注意：此字段可能返回 null，表示取不到有效值。
   */
  CheckResult?: string
  /**
   * 检查项失败原因
注意：此字段可能返回 null，表示取不到有效值。
   */
  FailureReason?: string
  /**
   * 解决方案
注意：此字段可能返回 null，表示取不到有效值。
   */
  Solution?: string
  /**
   * 运行报错日志
注意：此字段可能返回 null，表示取不到有效值。
   */
  ErrorLog?: Array<string>
  /**
   * 详细帮助的文档链接
注意：此字段可能返回 null，表示取不到有效值。
   */
  HelpDoc?: Array<string>
  /**
   * 跳过风险文案
注意：此字段可能返回 null，表示取不到有效值。
   */
  SkipInfo?: string
}

/**
 * DescribeCompareTasks请求参数结构体
 */
export interface DescribeCompareTasksRequest {
  /**
   * 迁移任务 Id
   */
  JobId: string
  /**
   * 分页设置，表示每页显示多少条任务，默认为 20
   */
  Limit?: number
  /**
   * 分页偏移量
   */
  Offset?: number
  /**
   * 校验任务 ID
   */
  CompareTaskId?: string
  /**
   * 任务状态过滤，可能的值：created - 创建完成；readyRun - 等待运行；running - 运行中；success - 成功；stopping - 结束中；failed - 失败；canceled - 已终止
   */
  Status?: Array<string>
}

/**
 * DestroyIsolatedSubscribe请求参数结构体
 */
export interface DestroyIsolatedSubscribeRequest {
  /**
   * 数据订阅实例的ID
   */
  SubscribeId: string
}

/**
 * ResetSubscribe返回参数结构体
 */
export interface ResetSubscribeResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 一致性对比对象配置
 */
export interface CompareObject {
  /**
   * 对象模式 整实例-all,部分对象-partial
注意：此字段可能返回 null，表示取不到有效值。
   */
  ObjectMode: string
  /**
   * 对象列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  ObjectItems?: Array<CompareObjectItem>
  /**
   * 高级对象类型，目前只支持mongodb链路。如account(账号),index(索引),shardkey(片键，后面可能会调整),schema(库表结构)
注意：此字段可能返回 null，表示取不到有效值。
   */
  AdvancedObjects?: Array<string>
}

/**
 * DescribeCompareReport返回参数结构体
 */
export interface DescribeCompareReportResponse {
  /**
   * 一致性校验摘要信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  Abstract?: CompareAbstractInfo
  /**
   * 一致性校验详细信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  Detail?: CompareDetailInfo
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * RecoverSyncJob返回参数结构体
 */
export interface RecoverSyncJobResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 任务操作信息，包含迁移任务的所有操作列表，及迁移任务在当前状态下允许的操作列表
 */
export interface MigrateAction {
  /**
   * 任务的所有操作列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  AllAction: Array<string>
  /**
   * 任务在当前状态下允许的操作列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  AllowedAction: Array<string>
}

/**
 * ConfigureSubscribeJob返回参数结构体
 */
export interface ConfigureSubscribeJobResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeConsumerGroups请求参数结构体
 */
export interface DescribeConsumerGroupsRequest {
  /**
   * 订阅实例id
   */
  SubscribeId: string
  /**
   * 返回记录的起始偏移量。默认0
   */
  Offset?: number
  /**
   * 单次返回的记录数量。默认10
   */
  Limit?: number
}

/**
 * kafka消费者组详情
 */
export interface GroupInfo {
  /**
   * 消费者组账号
   */
  Account?: string
  /**
   * 消费者组名称
   */
  ConsumerGroupName?: string
  /**
   * 消费者组备注
注意：此字段可能返回 null，表示取不到有效值。
   */
  Description?: string
  /**
   * 消费组偏移量。该字段是为了兼容以前单Partition的情况，取值为最后一个分区的偏移量。各分区的偏移量详见StateOfPartition字段
   */
  ConsumerGroupOffset?: number
  /**
   * 消费组未消费的数据量。该字段是为了兼容以前单Partition的情况，取值为最后一个分区未消费的数据量。各分区未消费数据量详见StateOfPartition字段
   */
  ConsumerGroupLag?: number
  /**
   * 消费延迟(单位为秒)
   */
  Latency?: number
  /**
   * 各分区的消费状态
   */
  StateOfPartition?: Array<MonitorInfo>
  /**
   * 消费者组创建时间，格式为YYYY-MM-DD hh:mm:ss
   */
  CreatedAt?: string
  /**
   * 消费者组修改时间，格式为YYYY-MM-DD hh:mm:ss
   */
  UpdatedAt?: string
  /**
   * 消费者组状态，包括Dead、Empty、Stable等，只有Dead和Empty两种状态可以执行reset操作
   */
  ConsumerGroupState?: string
  /**
   * 每个消费者正在消费的分区
注意：此字段可能返回 null，表示取不到有效值。
   */
  PartitionAssignment?: Array<PartitionAssignment>
}

/**
 * DeleteCompareTask返回参数结构体
 */
export interface DeleteCompareTaskResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 实例信息
 */
export interface DBEndpointInfo {
  /**
   * 实例所在地域
注意：此字段可能返回 null，表示取不到有效值。
   */
  Region: string
  /**
   * 实例网络接入类型，如：extranet(外网)、ipv6(公网ipv6)、cvm(云主机自建)、dcg(专线接入)、vpncloud(vpn接入的实例)、cdb(云数据库)、ccn(云联网)、intranet(自研上云)、vpc(私有网络)等，注意具体可选值依赖当前链路
注意：此字段可能返回 null，表示取不到有效值。
   */
  AccessType: string
  /**
   * 实例数据库类型，如：mysql,redis,mongodb,postgresql,mariadb,percona 等
注意：此字段可能返回 null，表示取不到有效值。
   */
  DatabaseType: string
  /**
   * 节点类型，为空或者simple表示普通节点、cluster表示集群节点；对于mongo业务，取值为replicaset(mongodb副本集)、standalone(mongodb单节点)、cluster(mongodb集群)；对于redis实例，为空或simple(单节点)、cluster(集群)、cluster-cache(cache集群)、cluster-proxy(代理集群)
注意：此字段可能返回 null，表示取不到有效值。
   */
  NodeType: string
  /**
   * 数据库信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  Info: Array<DBInfo>
  /**
   * 实例服务提供商，如:"aliyun","others"
注意：此字段可能返回 null，表示取不到有效值。
   */
  Supplier?: string
  /**
   * MongoDB可定义如下的参数: 	['AuthDatabase':'admin', 
'AuthFlag': "1",	'AuthMechanism':"SCRAM-SHA-1"]
注意：此字段可能返回 null，表示取不到有效值。
   */
  ExtraAttr?: Array<KeyValuePairOption>
  /**
   * 数据库所属网络环境，AccessType为云联网(ccn)时必填， UserIDC表示用户IDC、TencentVPC表示腾讯云VPC；
注意：此字段可能返回 null，表示取不到有效值。
   */
  DatabaseNetEnv?: string
  /**
   * tdsql连接方式：proxy-通过tdsql proxy主机访问各个set节点，注意只有在自研上云的网络环境下才能通过这种方式连接，Info中只需要提供proxy主机信息。set-直连set节点，如选择直连set方式，Info中需要正确填写proxy主机信息及所有set节点信息。源端是tdsqlmysql类型必填。
注意：此字段可能返回 null，表示取不到有效值。
   */
  ConnectType?: string
}

/**
 * ResumeSubscribe请求参数结构体
 */
export interface ResumeSubscribeRequest {
  /**
   * 数据订阅实例的 ID
   */
  SubscribeId: string
}

/**
 * ModifySyncJobConfig返回参数结构体
 */
export interface ModifySyncJobConfigResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 列选项
 */
export interface CompareColumnItem {
  /**
   * 列名
注意：此字段可能返回 null，表示取不到有效值。
   */
  ColumnName?: string
}

/**
 * DescribeSubscribeDetail返回参数结构体
 */
export interface DescribeSubscribeDetailResponse {
  /**
   * 数据订阅的ID，形如subs-b6x64o31tm
   */
  SubscribeId?: string
  /**
   * 数据订阅实例的名称
   */
  SubscribeName?: string
  /**
   * 订阅的数据库类型，目前支持 cynosdbmysql(tdsql-c mysql版),mariadb,mongodb,mysql,percona,tdpg(tdsql postgresql版),tdsqlpercona(tdsql mysql版)
   */
  Product?: string
  /**
   * 订阅的云数据库实例ID，只有订阅云数据库该值才有意义
注意：此字段可能返回 null，表示取不到有效值。
   */
  InstanceId?: string
  /**
   * 订阅的云数据库实例状态，只有订阅云数据库该值才有意义。可能值为：running, isolated, offline
注意：此字段可能返回 null，表示取不到有效值。
   */
  InstanceStatus?: string
  /**
   * 订阅任务计费状态，可能值为：正常normal, 隔离中isolating, 已隔离isolated, 下线中offlining, 按量转包年包月中 post2PrePayIng
   */
  Status?: string
  /**
   * 订阅任务状态，可能值为：未启动notStarted, 校验中checking, 校验不通过checkNotPass, 校验通过checkPass, 启动中starting, 运行中running, 异常出错error
   */
  SubsStatus?: string
  /**
   * 修改时间，时间格式如：Y-m-d h:m:s
注意：此字段可能返回 null，表示取不到有效值。
   */
  ModifyTime?: string
  /**
   * 创建时间，时间格式如：Y-m-d h:m:s
注意：此字段可能返回 null，表示取不到有效值。
   */
  CreateTime?: string
  /**
   * 隔离时间，时间格式如：Y-m-d h:m:s。默认：0000-00-00 00:00:00
注意：此字段可能返回 null，表示取不到有效值。
   */
  IsolateTime?: string
  /**
   * 包年包月任务的到期时间，时间格式如：Y-m-d h:m:s。默认：0000-00-00 00:00:00
注意：此字段可能返回 null，表示取不到有效值。
   */
  ExpireTime?: string
  /**
   * 下线时间，时间格式如：Y-m-d h:m:s。默认：0000-00-00 00:00:00
注意：此字段可能返回 null，表示取不到有效值。
   */
  OfflineTime?: string
  /**
   * 付费方式，可能值为：0-包年包月，1-按量计费
   */
  PayType?: number
  /**
   * 自动续费标识。只有当 PayType=0，该值才有意义。枚举值：0-不自动续费，1-自动续费
   */
  AutoRenewFlag?: number
  /**
   * 任务所在地域
   */
  Region?: string
  /**
   * Kafka topic
注意：此字段可能返回 null，表示取不到有效值。
   */
  Topic?: string
  /**
   * Kafka服务Broker地址
注意：此字段可能返回 null，表示取不到有效值。
   */
  Broker?: string
  /**
   * 数据订阅的类型，当 Product 不为 mongodb 时，可能值为：all-全实例更新；dml-数据更新；ddl-结构更新；dmlAndDdl-数据更新+结构更新。当 Product 为 mongodb 时，可能值为 all-全实例更新；database-订阅单库；collection-订阅单集合
注意：此字段可能返回 null，表示取不到有效值。
   */
  SubscribeMode?: string
  /**
   * 订阅数据格式。如果为空则用的默认格式: mysql\cynosdbmysql\mariadb\percona\tdsqlpercona\tdpg是protobuf，mongo是json。当 DatabaseType 为 mysql和cynosdbmysql 时有三种可选协议：protobuf\avro\json。数据格式详情参考官网的消费demo文档
注意：此字段可能返回 null，表示取不到有效值。
   */
  Protocol?: string
  /**
   * 订阅的数据库表信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  SubscribeObjects?: Array<SubscribeObject>
  /**
   * kafka配置信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  KafkaConfig?: SubscribeKafkaConfig
  /**
   * 订阅内置kafka的版本信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  KafkaVersion?: string
  /**
   * 源数据库接入类型，如：extranet(公网)、vpncloud(vpn接入)、dcg(专线接入)、ccn(云联网)、cdb(云数据库)、cvm(云服务器自建)、intranet(自研上云)、vpc(私有网络vpc)。注意具体可选值依赖当前链路支持能力
注意：此字段可能返回 null，表示取不到有效值。
   */
  AccessType?: string
  /**
   * 接入类型信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  Endpoints?: Array<EndpointItem>
  /**
   * mongo输出聚合设置
注意：此字段可能返回 null，表示取不到有效值。
   */
  PipelineInfo?: Array<PipelineInfo>
  /**
   * 标签
注意：此字段可能返回 null，表示取不到有效值。
   */
  Tags?: Array<TagItem>
  /**
   * 订阅任务报错信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  Errors?: Array<SubsErr>
  /**
   * 为业务添加的额外信息。参数名作key，参数值作value。
mysql选填参数：ProcessXA-是否处理XA事务，为true处理，其他不处理。
mongo选填参数：SubscribeType-订阅类型，目前只支持changeStream。
注意：此字段可能返回 null，表示取不到有效值。
   */
  ExtraAttr?: Array<KeyValuePairOption>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ContinueSyncJob返回参数结构体
 */
export interface ContinueSyncJobResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 计费状态信息
 */
export interface TradeInfo {
  /**
   * 交易订单号
注意：此字段可能返回 null，表示取不到有效值。
   */
  DealName?: string
  /**
   * 上一次交易订单号
注意：此字段可能返回 null，表示取不到有效值。
   */
  LastDealName?: string
  /**
   * 实例规格，包括：micro、small、medium、large、xlarge、2xlarge等
注意：此字段可能返回 null，表示取不到有效值。
   */
  InstanceClass?: string
  /**
   * 计费任务状态， normal(计费或待计费)、resizing(变配中)、reversing(冲正中，比较短暂的状态)、isolating(隔离中，比较短暂的状态)、isolated(已隔离)、offlining(下线中)、offlined(已下线)、notBilled(未计费)
注意：此字段可能返回 null，表示取不到有效值。
   */
  TradeStatus?: string
  /**
   * 到期时间，格式为"yyyy-mm-dd hh:mm:ss"
注意：此字段可能返回 null，表示取不到有效值。
   */
  ExpireTime?: string
  /**
   * 下线时间，格式为"yyyy-mm-dd hh:mm:ss"
注意：此字段可能返回 null，表示取不到有效值。
   */
  OfflineTime?: string
  /**
   * 隔离时间，格式为"yyyy-mm-dd hh:mm:ss"
注意：此字段可能返回 null，表示取不到有效值。
   */
  IsolateTime?: string
  /**
   * 下线原因
注意：此字段可能返回 null，表示取不到有效值。
   */
  OfflineReason?: string
  /**
   * 隔离原因
注意：此字段可能返回 null，表示取不到有效值。
   */
  IsolateReason?: string
  /**
   * 付费类型，包括：postpay(后付费)、prepay(预付费)
注意：此字段可能返回 null，表示取不到有效值。
   */
  PayType?: string
  /**
   * 任务计费类型，包括：billing(计费)、notBilling(不计费)、 promotions(促销活动中)
注意：此字段可能返回 null，表示取不到有效值。
   */
  BillingType?: string
}

/**
 * mongodb数据不一致性详情
 */
export interface DifferenceDataDetail {
  /**
   * 总数
注意：此字段可能返回 null，表示取不到有效值。
   */
  TotalCount?: number
  /**
   * mongo数据不一致详细列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  Items?: Array<DifferenceData>
}

/**
 * DeleteConsumerGroup请求参数结构体
 */
export interface DeleteConsumerGroupRequest {
  /**
   * 数据订阅实例的 ID
   */
  SubscribeId: string
  /**
   * 消费组名称。实际的消费组全称形如：consumer-grp-#{SubscribeId}-#{ConsumerGroupName}。
请务必保证消费组名称正确。
   */
  ConsumerGroupName: string
  /**
   * 账号名称。实际的账户全称形如：account-#{SubscribeId}-#{AccountName}。
请务必保证账户名称正确。
   */
  AccountName: string
}

/**
 * ModifySubscribeAutoRenewFlag请求参数结构体
 */
export interface ModifySubscribeAutoRenewFlagRequest {
  /**
   * 订阅实例ID
   */
  SubscribeId: string
  /**
   * 自动续费标识。1-自动续费，0-不自动续费
   */
  AutoRenewFlag: number
}

/**
 * CompleteMigrateJob请求参数结构体
 */
export interface CompleteMigrateJobRequest {
  /**
   * 数据迁移任务ID
   */
  JobId: string
  /**
   * 完成任务的方式,仅支持旧版MySQL迁移任务。waitForSync-等待主从差距为0才停止,immediately-立即完成，不会等待主从差距一致。默认为waitForSync
   */
  CompleteMode?: string
}

/**
 * CreateConsumerGroup返回参数结构体
 */
export interface CreateConsumerGroupResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * StopCompare请求参数结构体
 */
export interface StopCompareRequest {
  /**
   * 迁移任务 Id
   */
  JobId: string
  /**
   * 对比任务 ID，形如：dts-8yv4w2i1-cmp-37skmii9
   */
  CompareTaskId: string
  /**
   * 是否强制停止。如果填true，同步任务增量阶段会跳过一致性校验产生的binlog，达到快速恢复任务的效果
   */
  ForceStop?: boolean
}

/**
 * 数据同步配置多节点数据库的节点信息。多节点数据库，如tdsqlmysql使用该结构；单节点数据库，如mysql使用Endpoint。
 */
export interface SyncDBEndpointInfos {
  /**
   * 数据库所在地域
注意：此字段可能返回 null，表示取不到有效值。
   */
  Region: string
  /**
   * 实例网络接入类型，如：extranet(外网)、ipv6(公网ipv6)、cvm(云主机自建)、dcg(专线接入)、vpncloud(vpn接入的实例)、cdb(云数据库)、ccn(云联网)、intranet(自研上云)、vpc(私有网络)等，注意具体可选值依赖当前链路
注意：此字段可能返回 null，表示取不到有效值。
   */
  AccessType: string
  /**
   * 实例数据库类型，如：mysql,redis,mongodb,postgresql,mariadb,percona 等
注意：此字段可能返回 null，表示取不到有效值。
   */
  DatabaseType: string
  /**
   * 数据库信息。注意：如果数据库类型为tdsqlmysql，此处Endpoint数组的顺序应满足规则：proxy节点放在set节点之前。如果SrcConnectType选择proxy接入则只需要填写proxy节点即可。如果选择set接入，数组中第一个set节点必须是shardkey范围起始为0的分片
注意：此字段可能返回 null，表示取不到有效值。
   */
  Info: Array<Endpoint>
}

/**
 * StartModifySyncJob请求参数结构体
 */
export interface StartModifySyncJobRequest {
  /**
   * 同步任务id
   */
  JobId: string
}

/**
 * DescribeCheckSyncJobResult返回参数结构体
 */
export interface DescribeCheckSyncJobResultResponse {
  /**
   * 校验任务执行状态，如：notStarted(未开始)、running(校验中)、failed(校验任务失败)、success(任务成功)
注意：此字段可能返回 null，表示取不到有效值。
   */
  Status?: string
  /**
   * 步骤总数
注意：此字段可能返回 null，表示取不到有效值。
   */
  StepCount?: number
  /**
   * 当前所在步骤
注意：此字段可能返回 null，表示取不到有效值。
   */
  StepCur?: number
  /**
   * 总体进度，范围为[0,100]
注意：此字段可能返回 null，表示取不到有效值。
   */
  Progress?: number
  /**
   * 步骤信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  StepInfos?: Array<StepInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * StopSyncJob返回参数结构体
 */
export interface StopSyncJobResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 迁移选项，描述任务如何执行迁移等一系列配置信息
 */
export interface MigrateOption {
  /**
   * 迁移对象选项，需要告知迁移服务迁移哪些库表对象
注意：此字段可能返回 null，表示取不到有效值。
   */
  DatabaseTable: DatabaseTableObject
  /**
   * 迁移类型，full(全量迁移)，structure(结构迁移)，fullAndIncrement(全量加增量迁移)， 默认为fullAndIncrement;注意redis,keewidb产品只支持fullAndIncrement类型。
注意：此字段可能返回 null，表示取不到有效值。
   */
  MigrateType?: string
  /**
   * 数据一致性校验选项， 默认为不开启一致性校验
注意：此字段可能返回 null，表示取不到有效值。
   */
  Consistency?: ConsistencyOption
  /**
   * 是否迁移账号，true(迁移账号)，false(不迁移账号)
注意：此字段可能返回 null，表示取不到有效值。
   */
  IsMigrateAccount?: boolean
  /**
   * 是否用源库Root账户覆盖目标库，值包括：false-不覆盖，true-覆盖，选择库表或者结构迁移时应该为false，注意只对旧版迁移有效
注意：此字段可能返回 null，表示取不到有效值。
   */
  IsOverrideRoot?: boolean
  /**
   * 是否在迁移时设置目标库只读(仅对mysql有效)，true(设置只读)、false(不设置只读，默认此值)
注意：此字段可能返回 null，表示取不到有效值。
   */
  IsDstReadOnly?: boolean
  /**
   * 其他附加信息，对于特定库可设置额外参数，Redis可定义如下的参数: 
["DstWriteMode":normal, 	目标库写入模式,可取值clearData(清空目标实例数据)、overwrite(以覆盖写的方式执行任务)、normal(跟正常流程一样，不做额外动作) 	"IsDstReadOnly":true, 	是否在迁移时设置目标库只读,true(设置只读)、false(不设置只读) 	"ClientOutputBufferHardLimit":512, 	从机缓冲区的硬性容量限制(MB) 	"ClientOutputBufferSoftLimit":512, 	从机缓冲区的软性容量限制(MB) 	"ClientOutputBufferPersistTime":60, 从机缓冲区的软性限制持续时间(秒) 	"ReplBacklogSize":512, 	环形缓冲区容量限制(MB) 	"ReplTimeout":120，		复制超时时间(秒) 	"IsExpireKey":"true",过期key自动淘汰]
注意：此字段可能返回 null，表示取不到有效值。
   */
  ExtraAttr?: Array<KeyValuePairOption>
  /**
   * pgsql迁移分类：logical(逻辑迁移)、physical(物理迁移)
注意：此字段可能返回 null，表示取不到有效值。
   */
  MigrateWay?: string
}

/**
 * DescribeSubscribeDetail请求参数结构体
 */
export interface DescribeSubscribeDetailRequest {
  /**
   * 订阅实例ID
   */
  SubscribeId: string
}

/**
 * 跳过校验的表详情
 */
export interface SkippedDetail {
  /**
   * 跳过的表数量
注意：此字段可能返回 null，表示取不到有效值。
   */
  TotalCount: number
  /**
   * 跳过校验的表详情
注意：此字段可能返回 null，表示取不到有效值。
   */
  Items: Array<SkippedItem>
}

/**
 * 订阅报错信息
 */
export interface SubsErr {
  /**
   * 报错信息
   */
  Message?: string
  /**
   * 报错原因
   */
  Reason?: string
  /**
   * 建议的修复方案
   */
  Solution?: string
}

/**
 * CreateSubscribe返回参数结构体
 */
export interface CreateSubscribeResponse {
  /**
   * 数据订阅实例的ID数组
注意：此字段可能返回 null，表示取不到有效值。
   */
  SubscribeIds?: Array<string>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 一致性校验选项
 */
export interface CompareOptions {
  /**
   * 对比方式：dataCheck(完整数据对比)、sampleDataCheck(抽样数据对比)、rowsCount(行数对比), 默认为dataCheck
注意：此字段可能返回 null，表示取不到有效值。
   */
  Method?: string
  /**
   * 抽样比例;范围0,100。默认为100
注意：此字段可能返回 null，表示取不到有效值。
   */
  SampleRate?: number
  /**
   * 线程数，取值1-5，默认为1
注意：此字段可能返回 null，表示取不到有效值。
   */
  ThreadCount?: number
}

/**
 * ModifyMigrateName返回参数结构体
 */
export interface ModifyMigrateNameResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeMigrationJobs返回参数结构体
 */
export interface DescribeMigrationJobsResponse {
  /**
   * 迁移任务数量
注意：此字段可能返回 null，表示取不到有效值。
   */
  TotalCount: number
  /**
   * 迁移任务列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  JobList: Array<JobItem>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyMigrationJob请求参数结构体
 */
export interface ModifyMigrationJobRequest {
  /**
   * 任务id
   */
  JobId: string
  /**
   * 运行模式，取值如：immediate(表示立即运行)、timed(表示定时运行)
   */
  RunMode: string
  /**
   * 迁移任务配置选项，描述任务如何执行迁移等一系列配置信息；字段下的RateLimitOption不可配置、如果需要修改任务的限速信息、请在任务运行后通过ModifyMigrateRateLimit接口修改
   */
  MigrateOption: MigrateOption
  /**
   * 源实例信息
   */
  SrcInfo: DBEndpointInfo
  /**
   * 目标实例信息
   */
  DstInfo: DBEndpointInfo
  /**
   * 迁移任务名称，最大长度128
   */
  JobName?: string
  /**
   * 期待启动时间，当RunMode取值为timed时，此值必填，形如："2006-01-02 15:04:05"
   */
  ExpectRunTime?: string
  /**
   * 标签信息
   */
  Tags?: Array<TagItem>
  /**
   * 自动重试的时间段、可设置5至720分钟、0表示不重试
   */
  AutoRetryTimeRangeMinutes?: number
}

/**
 * StopCompare返回参数结构体
 */
export interface StopCompareResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DestroyMigrateJob返回参数结构体
 */
export interface DestroyMigrateJobResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 任务步骤信息
 */
export interface ProcessProgress {
  /**
   * 步骤的状态， 包括：notStarted(未开始)、running(运行中)、success(成功)、failed(失败)等
注意：此字段可能返回 null，表示取不到有效值。
   */
  Status?: string
  /**
   * 进度信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  Percent?: number
  /**
   * 总的步骤数
注意：此字段可能返回 null，表示取不到有效值。
   */
  StepAll?: number
  /**
   * 当前进行的步骤
注意：此字段可能返回 null，表示取不到有效值。
   */
  StepNow?: number
  /**
   * 当前步骤输出提示信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  Message?: string
  /**
   * 步骤信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  Steps?: Array<StepDetailInfo>
}

/**
 * SkipSyncCheckItem请求参数结构体
 */
export interface SkipSyncCheckItemRequest {
  /**
   * 任务id，如：sync-4ddgid2
   */
  JobId: string
  /**
   * 需要跳过校验项的步骤id，需要通过`DescribeCheckSyncJobResult`接口返回StepInfos[i].StepId字段获取，例如：["OptimizeCheck"]
   */
  StepIds: Array<string>
}

/**
 * DescribeModifyCheckSyncJobResult请求参数结构体
 */
export interface DescribeModifyCheckSyncJobResultRequest {
  /**
   * 同步任务id
   */
  JobId: string
}

/**
 * SkipSyncCheckItem返回参数结构体
 */
export interface SkipSyncCheckItemResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * IsolateSyncJob返回参数结构体
 */
export interface IsolateSyncJobResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateMigrateCheckJob请求参数结构体
 */
export interface CreateMigrateCheckJobRequest {
  /**
   * 数据迁移任务ID
   */
  JobId: string
}

/**
 * ModifyConsumerGroupPassword返回参数结构体
 */
export interface ModifyConsumerGroupPasswordResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeMigrationJobs请求参数结构体
 */
export interface DescribeMigrationJobsRequest {
  /**
   * 数据迁移任务ID，如：dts-amm1jw5q
   */
  JobId?: string
  /**
   * 数据迁移任务名称
   */
  JobName?: string
  /**
   * 数据迁移任务状态，可取值包括：created(创建完成)、checking(校验中)、checkPass(校验通过)、checkNotPass(校验不通过)、readyRun(准备运行)、running(任务运行中)、readyComplete(准备完成)、success(任务成功)、failed(任务失败)、stopping(中止中)、completing(完成中)
   */
  Status?: Array<string>
  /**
   * 源实例ID，格式如：cdb-c1nl9rpv
   */
  SrcInstanceId?: string
  /**
   * 源实例地域，如：ap-guangzhou
   */
  SrcRegion?: string
  /**
   * 源实例数据库类型，如：sqlserver,mysql,mongodb,redis,tendis,keewidb,clickhouse,cynosdbmysql,percona,tdsqlpercona,mariadb,tdsqlmysql,postgresql
   */
  SrcDatabaseType?: Array<string>
  /**
   * 源实例接入类型，值包括：extranet(外网)、vpncloud(云vpn接入的实例)、dcg(专线接入的实例)、ccn(云联网接入的实例)、cdb(云上cdb实例)、cvm(cvm自建实例)
   */
  SrcAccessType?: Array<string>
  /**
   * 目标实例ID，格式如：cdb-c1nl9rpv
   */
  DstInstanceId?: string
  /**
   * 目标实例地域，如：ap-guangzhou
   */
  DstRegion?: string
  /**
   * 目标源实例数据库类型，如：sqlserver,mysql,mongodb,redis,tendis,keewidb,clickhouse,cynosdbmysql,percona,tdsqlpercona,mariadb,tdsqlmysql,postgresql
   */
  DstDatabaseType?: Array<string>
  /**
   * 目标实例接入类型，值包括：extranet(外网)、vpncloud(云vpn接入的实例)、dcg(专线接入的实例)、ccn(云联网接入的实例)、cdb(云上cdb实例)、cvm(cvm自建实例)
   */
  DstAccessType?: Array<string>
  /**
   * 任务运行模式，值包括：immediate(立即运行)，timed(定时运行)
   */
  RunMode?: string
  /**
   * 排序方式，可能取值为asc、desc，默认按照创建时间倒序
   */
  OrderSeq?: string
  /**
   * 返回实例数量，默认20，有效区间[1,100]
   */
  Limit?: number
  /**
   * 偏移量，默认为0
   */
  Offset?: number
  /**
   * 标签过滤
   */
  TagFilters?: Array<TagFilter>
}

/**
 * 数据一致性校验结果
 */
export interface CompareTaskInfo {
  /**
   * 一致性校验任务Id
注意：此字段可能返回 null，表示取不到有效值。
   */
  CompareTaskId: string
  /**
   * 一致性校验结果，包括：unstart(未启动)、running(校验中)、canceled(已终止)、failed(校验任务失败)、inconsistent(不一致)、consistent(一致)、notexist(不存在校验任务)
注意：此字段可能返回 null，表示取不到有效值。
   */
  Status: string
}

/**
 * ModifyConsumerGroupDescription请求参数结构体
 */
export interface ModifyConsumerGroupDescriptionRequest {
  /**
   * 数据订阅实例的 ID
   */
  SubscribeId: string
  /**
   * 消费组名称。实际的消费组全称形如：consumer-grp-#{SubscribeId}-#{ConsumerGroupName}。
请务必保证消费组名称正确。
   */
  ConsumerGroupName: string
  /**
   * 账户名称。实际的账户全称形如：account-#{SubscribeId}-#{AccountName}。
请务必保证账户名称正确。
   */
  AccountName: string
  /**
   * 修改之后的消费组描述
   */
  Description: string
}

/**
 * ContinueSyncJob请求参数结构体
 */
export interface ContinueSyncJobRequest {
  /**
   * 同步任务id
   */
  JobId: string
}

/**
 * ModifySubscribeObjects返回参数结构体
 */
export interface ModifySubscribeObjectsResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateMigrationService返回参数结构体
 */
export interface CreateMigrationServiceResponse {
  /**
   * 下单成功随机生成的迁移任务id列表，形如：dts-c1f6rs21
注意：此字段可能返回 null，表示取不到有效值。
   */
  JobIds?: Array<string>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 目标端为kakfa时添加的同步选项字段
 */
export interface KafkaOption {
  /**
   * 投递到kafka的数据类型，如Avro,Json,canal-pb,canal-json
   */
  DataType?: string
  /**
   * 同步topic策略，如Single（集中投递到单topic）,Multi (自定义topic名称)
   */
  TopicType?: string
  /**
   * 用于存储ddl的topic
   */
  DDLTopicName?: string
  /**
   * 单topic和自定义topic的描述
   */
  TopicRules?: Array<TopicRule>
}

/**
 * DescribeMigrationCheckJob返回参数结构体
 */
export interface DescribeMigrationCheckJobResponse {
  /**
   * 校验任务执行状态，如：notStarted(未开始)、running(校验中)、failed(校验任务失败)、success(任务成功)
注意：此字段可能返回 null，表示取不到有效值。
   */
  Status: string
  /**
   * 校验任务结果输出简要信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  BriefMsg: string
  /**
   * 检查步骤
注意：此字段可能返回 null，表示取不到有效值。
   */
  StepInfo: Array<CheckStep>
  /**
   * 校验结果，如：checkPass(校验通过)、checkNotPass(校验未通过)
   */
  CheckFlag: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * StopSyncJob请求参数结构体
 */
export interface StopSyncJobRequest {
  /**
   * 同步任务id
   */
  JobId: string
}

/**
 * 数据不一致的表详情
 */
export interface DifferenceDetail {
  /**
   * 数据不一致的表数量
注意：此字段可能返回 null，表示取不到有效值。
   */
  TotalCount: number
  /**
   * 校验不一致的表详情
注意：此字段可能返回 null，表示取不到有效值。
   */
  Items: Array<DifferenceItem>
}

/**
 * 数据库信息
 */
export interface DBInfo {
  /**
   * 表示节点角色，针对分布式数据库，如mongodb中的mongos节点。tdsqlmysql的可选项：proxy表示节点类型为主机，set表示节点类型为节点。proxy类型必须填在数组第一项。tdsqlmysql类型的源/目标配置必填。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Role?: string
  /**
   * 内核版本，针对mariadb的不同内核版本等
注意：此字段可能返回 null，表示取不到有效值。
   */
  DbKernel?: string
  /**
   * 实例的IP地址，对于公网、专线、VPN、云联网、自研上云、VPC等接入方式此项必填
注意：此字段可能返回 null，表示取不到有效值。
   */
  Host?: string
  /**
   * 实例的端口，对于公网、云主机自建、专线、VPN、云联网、自研上云、VPC等接入方式此项必填
注意：此字段可能返回 null，表示取不到有效值。
   */
  Port?: number
  /**
   * 实例的用户名
注意：此字段可能返回 null，表示取不到有效值。
   */
  User?: string
  /**
   * 实例的密码
注意：此字段可能返回 null，表示取不到有效值。
   */
  Password?: string
  /**
   * CVM实例短ID，格式如：ins-olgl39y8；与云服务器控制台页面显示的实例ID相同；如果接入类型为云主机自建的方式，此项必填
注意：此字段可能返回 null，表示取不到有效值。
   */
  CvmInstanceId?: string
  /**
   * VPN网关ID，格式如：vpngw-9ghexg7q；如果接入类型为vpncloud的方式，此项必填
注意：此字段可能返回 null，表示取不到有效值。
   */
  UniqVpnGwId?: string
  /**
   * 专线网关ID，格式如：dcg-0rxtqqxb；如果接入类型为专线接入的方式，此项必填
注意：此字段可能返回 null，表示取不到有效值。
   */
  UniqDcgId?: string
  /**
   * 数据库实例ID，格式如：cdb-powiqx8q；如果接入类型为云数据库的方式，此项必填
注意：此字段可能返回 null，表示取不到有效值。
   */
  InstanceId?: string
  /**
   * 云联网ID，如：ccn-afp6kltc 注意：此字段可能返回 null，表示取不到有效值。
注意：此字段可能返回 null，表示取不到有效值。
   */
  CcnGwId?: string
  /**
   * 私有网络ID，格式如：vpc-92jblxto；如果接入类型为vpc、vpncloud、ccn、dcg的方式，此项必填
注意：此字段可能返回 null，表示取不到有效值。
   */
  VpcId?: string
  /**
   * 私有网络下的子网ID，格式如：subnet-3paxmkdz；如果接入类型为vpc、vpncloud、ccn、dcg的方式，此项必填
注意：此字段可能返回 null，表示取不到有效值。
   */
  SubnetId?: string
  /**
   * 数据库版本，当实例为RDS实例时才有效，格式如：5.6或者5.7，默认为5.6
注意：此字段可能返回 null，表示取不到有效值。
   */
  EngineVersion?: string
  /**
   * 实例所属账号
注意：此字段可能返回 null，表示取不到有效值。
   */
  Account?: string
  /**
   * 跨账号迁移时的角色,只允许[a-zA-Z0-9\-\_]+
注意：此字段可能返回 null，表示取不到有效值。
   */
  AccountRole?: string
  /**
   * 资源所属账号 为空或self(表示本账号内资源)、other(表示其他账户资源)
注意：此字段可能返回 null，表示取不到有效值。
   */
  AccountMode?: string
  /**
   * 临时密钥Id，可通过申请扮演角色临时访问凭证获取临时密钥https://cloud.tencent.com/document/product/1312/48197，其中角色资源RoleArn的定义可参考DTS跨账号迁移文档(https://cloud.tencent.com/document/product/571/54117)第4节中关于角色的定义。
注意：此字段可能返回 null，表示取不到有效值。
   */
  TmpSecretId?: string
  /**
   * 临时密钥Id，可通过申请扮演角色临时访问凭证获取临时密钥https://cloud.tencent.com/document/product/1312/48197，其中角色资源RoleArn的定义可参考DTS跨账号迁移文档(https://cloud.tencent.com/document/product/571/54117)第4节中关于角色的定义。
注意：此字段可能返回 null，表示取不到有效值。
   */
  TmpSecretKey?: string
  /**
   * 临时密钥Id，可通过申请扮演角色临时访问凭证获取临时密钥https://cloud.tencent.com/document/product/1312/48197，其中角色资源RoleArn的定义可参考DTS跨账号迁移文档(https://cloud.tencent.com/document/product/571/54117)第4节中关于角色的定义。
注意：此字段可能返回 null，表示取不到有效值。
   */
  TmpToken?: string
  /**
   * tdsql的分片id。如节点类型为set必填。
注意：此字段可能返回 null，表示取不到有效值。
   */
  SetId?: string
}

/**
 * 单topic和自定义topic的描述。投递到单topic时，该数组的最后一项会被视为默认分区策略，所有未匹配到的数据都会按该策略投递，默认策略只支持 投递至partition0、按表名、表名+主键三种。
 */
export interface TopicRule {
  /**
   * topic名。单topic时，所有的TopicName必须相同
   */
  TopicName?: string
  /**
   * topic分区策略，自定义topic时支持：Random（随机投递），集中投递到单Topic时支持：AllInPartitionZero（全部投递至partition0）、PartitionByTable(按表名分区)、PartitionByTableAndKey(按表名加主键分区)、PartitionByCols(按列分区)
   */
  PartitionType?: string
  /**
   * 库名匹配规则，如Regular（正则匹配）, Default(不符合匹配规则的剩余库)，数组中最后一项必须为‘Default’
   */
  DbMatchMode?: string
  /**
   * 库名，DbMatchMode=Regular时生效
   */
  DbName?: string
  /**
   * 表名匹配规则，如Regular（正则匹配）, Default(不符合匹配规则的剩余表)，数组中最后一项必须为‘Default’
   */
  TableMatchMode?: string
  /**
   * 表名，仅TableMatchMode=Regular时生效
   */
  TableName?: string
  /**
   * 按列分区时需要选择配置列名，可以选择多列
注意：此字段可能返回 null，表示取不到有效值。
   */
  Columns?: Array<string>
}

/**
 * DestroySyncJob请求参数结构体
 */
export interface DestroySyncJobRequest {
  /**
   * 同步任务id
   */
  JobId: string
}

/**
 * 视图对象
 */
export interface ViewItem {
  /**
   * 视图名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  ViewName?: string
  /**
   * 迁移后的视图名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  NewViewName?: string
}

/**
 * CreateCheckSyncJob返回参数结构体
 */
export interface CreateCheckSyncJobResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateSubscribeCheckJob返回参数结构体
 */
export interface CreateSubscribeCheckJobResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 数据库不一致的详情，mongodb业务用到
 */
export interface AdvancedObjectsItem {
  /**
   * 对象类型,可能得值有：account,index,shardkey,schema
注意：此字段可能返回 null，表示取不到有效值。
   */
  ObjectType?: string
  /**
   * 源端分块
注意：此字段可能返回 null，表示取不到有效值。
   */
  SrcChunk?: string
  /**
   * 目标端分块
注意：此字段可能返回 null，表示取不到有效值。
   */
  DstChunk?: string
  /**
   * 源端值
注意：此字段可能返回 null，表示取不到有效值。
   */
  SrcItem?: string
  /**
   * 目标端值
注意：此字段可能返回 null，表示取不到有效值。
   */
  DstItem?: string
}

/**
 * 数据同步中的选项
 */
export interface Options {
  /**
   * 同步初始化选项，Data(全量数据初始化)、Structure(结构初始化)、Full(全量数据且结构初始化，默认)、None(仅增量)
注意：此字段可能返回 null，表示取不到有效值。
   */
  InitType?: string
  /**
   * 同名表的处理，ReportErrorAfterCheck(前置校验并报错，默认)、ExecuteAfterIgnore(忽略并继续执行)
注意：此字段可能返回 null，表示取不到有效值。
   */
  DealOfExistSameTable?: string
  /**
   * 冲突处理选项，ReportError(报错，默认为该值)、Ignore(忽略)、Cover(覆盖)、ConditionCover(条件覆盖)
注意：此字段可能返回 null，表示取不到有效值。
   */
  ConflictHandleType?: string
  /**
   * 是否添加附加列
注意：此字段可能返回 null，表示取不到有效值。
   */
  AddAdditionalColumn?: boolean
  /**
   * 所要同步的DML和DDL的选项，Insert(插入操作)、Update(更新操作)、Delete(删除操作)、DDL(结构同步)， PartialDDL(自定义,和DdlOptions一起配合使用)。注意，这里至少需要包含DML中的一种。
注意：此字段可能返回 null，表示取不到有效值。
   */
  OpTypes?: Array<string>
  /**
   * 冲突处理的详细选项，如条件覆盖中的条件行和条件操作
注意：此字段可能返回 null，表示取不到有效值。
   */
  ConflictHandleOption?: ConflictHandleOption
  /**
   * DDL同步选项，具体描述要同步那些DDL
注意：此字段可能返回 null，表示取不到有效值。
   */
  DdlOptions?: Array<DdlOption>
  /**
   * kafka同步选项
注意：此字段可能返回 null，表示取不到有效值。
   */
  KafkaOption?: KafkaOption
  /**
   * 任务限速信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  RateLimitOption?: RateLimitOption
  /**
   * 自动重试的时间窗口设置
注意：此字段可能返回 null，表示取不到有效值。
   */
  AutoRetryTimeRangeMinutes?: number
  /**
   * 同步到kafka链路指定位点。目前只支持时间格式：2023-12-20T19:24:23+08:00。如果没有指定位点，为空。
注意：此字段可能返回 null，表示取不到有效值。
   */
  StartPosition?: string
  /**
   * 同步到kafka链路是否过滤掉begin和commit消息。目前仅mysql2kafka链路支持
注意：此字段可能返回 null，表示取不到有效值。
   */
  FilterBeginCommit?: boolean
  /**
   * 同步到kafka链路是否过滤掉checkpoint消息。目前仅mysql2kafka链路支持
注意：此字段可能返回 null，表示取不到有效值。
   */
  FilterCheckpoint?: boolean
}

/**
 * 一致性校验库表对象
 */
export interface CompareObjectItem {
  /**
   * 数据库名
注意：此字段可能返回 null，表示取不到有效值。
   */
  DbName: string
  /**
   * 数据库选择模式: all 为当前对象下的所有对象,partial 为部分对象
注意：此字段可能返回 null，表示取不到有效值。
   */
  DbMode: string
  /**
   * schema名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  SchemaName?: string
  /**
   * 表选择模式: all 为当前对象下的所有表对象,partial 为部分表对象
注意：此字段可能返回 null，表示取不到有效值。
   */
  TableMode?: string
  /**
   * 用于一致性校验的表配置，当 TableMode 为 partial 时，需要填写
注意：此字段可能返回 null，表示取不到有效值。
   */
  Tables?: Array<CompareTableItem>
  /**
   * 视图选择模式: all 为当前对象下的所有视图对象,partial 为部分视图对象(一致性校验不校验视图，当前参数未启作用)
注意：此字段可能返回 null，表示取不到有效值。
   */
  ViewMode?: string
  /**
   * 用于一致性校验的视图配置，当 ViewMode 为 partial 时， 需要填写(一致性校验不校验视图，当前参数未启作用)
注意：此字段可能返回 null，表示取不到有效值。
   */
  Views?: Array<CompareViewItem>
}

/**
 * ConfigureSyncJob请求参数结构体
 */
export interface ConfigureSyncJobRequest {
  /**
   * 同步实例id（即标识一个同步作业），形如sync-werwfs23
   */
  JobId: string
  /**
   * 源端接入类型，cdb(云数据库)、cvm(云主机自建)、vpc(私有网络)、extranet(外网)、vpncloud(vpn接入)、dcg(专线接入)、ccn(云联网)、intranet(自研上云),注意具体可选值依赖当前链路
   */
  SrcAccessType: string
  /**
   * 目标端接入类型，cdb(云数据库)、cvm(云主机自建)、vpc(私有网络)、extranet(外网)、vpncloud(vpn接入)、dcg(专线接入)、ccn(云联网)、intranet(自研上云)、ckafka(CKafka实例),注意具体可选值依赖当前链路
   */
  DstAccessType: string
  /**
   * 同步库表对象信息
   */
  Objects: Objects
  /**
   * 同步任务名称
   */
  JobName?: string
  /**
   * 枚举值是 liteMode 和 fullMode ，分别对应精简模式或正常模式
   */
  JobMode?: string
  /**
   * 运行模式，取值如：Immediate(表示立即运行，默认为此项值)、Timed(表示定时运行)
   */
  RunMode?: string
  /**
   * 期待启动时间，当RunMode取值为Timed时，此值必填，形如："2006-01-02 15:04:05"
   */
  ExpectRunTime?: string
  /**
   * 源端tdsql连接方式：proxy-通过tdsql proxy主机访问各个set节点，注意只有在自研上云的网络环境下才能通过这种方式连接，SrcInfos中只需要提供proxy主机信息。set-直连set节点，如选择直连set方式，需要正确填写proxy主机信息及所有set节点信息。源端是tdsqlmysql类型必填。
   */
  SrcConnectType?: string
  /**
   * 源端信息，单机版类型数据库配置使用，且SrcNodeType传single。例如mysql、percona、mariadb等。
   */
  SrcInfo?: Endpoint
  /**
   * 源端信息，分布式类型数据库配置使用，且SrcNodeType传cluster。例如分布式数据库tdsqlmysql等。
   */
  SrcInfos?: SyncDBEndpointInfos
  /**
   * 枚举值：cluster、single。源库为单节点数据库使用single，多节点使用cluster
   */
  SrcNodeType?: string
  /**
   * 目标端信息，单机版类型数据库配置使用，且SrcNodeType传single。例如mysql、percona、mariadb等。
   */
  DstInfo?: Endpoint
  /**
   * 目标端信息，分布式类型数据库配置使用，且SrcNodeType传cluster。例如分布式数据库tdsqlmysql等。
   */
  DstInfos?: SyncDBEndpointInfos
  /**
   * 枚举值：cluster、single。目标库为单节点数据库使用single，多节点使用cluster
   */
  DstNodeType?: string
  /**
   * 同步任务选项；该字段下的RateLimitOption暂时无法生效、如果需要修改限速、可通过ModifySyncRateLimit接口完成限速
   */
  Options?: Options
  /**
   * 自动重试的时间段、可设置5至720分钟、0表示不重试
   */
  AutoRetryTimeRangeMinutes?: number
}

/**
 * StartModifySyncJob返回参数结构体
 */
export interface StartModifySyncJobResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 订阅校验任务的各步骤信息。
 */
export interface SubscribeCheckStepInfo {
  /**
   * 步骤名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  StepName?: string
  /**
   * 步骤Id
注意：此字段可能返回 null，表示取不到有效值。
   */
  StepId?: string
  /**
   * 步骤编号，从 1 开始
注意：此字段可能返回 null，表示取不到有效值。
   */
  StepNo?: number
  /**
   * 当前步骤状态，可能值为 notStarted,running,finished,failed
注意：此字段可能返回 null，表示取不到有效值。
   */
  Status?: string
  /**
   * 当前步骤进度
注意：此字段可能返回 null，表示取不到有效值。
   */
  Percent?: number
  /**
   * 错误提示
注意：此字段可能返回 null，表示取不到有效值。
   */
  Errors?: Array<SubscribeCheckStepTip>
  /**
   * 告警提示
注意：此字段可能返回 null，表示取不到有效值。
   */
  Warnings?: Array<SubscribeCheckStepTip>
}

/**
 * 查询迁移实例列表的实例对象
 */
export interface MigrateDBItem {
  /**
   * 实例ID
   */
  InstanceId: string
  /**
   * 实例名称
   */
  InstanceName: string
  /**
   * 实例Vip
   */
  Vip: string
  /**
   * 实例Vport
   */
  Vport: number
  /**
   * 是否可以作为迁移对象，1-可以，0-不可以
   */
  Usable: number
  /**
   * 不可以作为迁移对象的原因
   */
  Hint: string
}

/**
 * DescribeMigrateDBInstances请求参数结构体
 */
export interface DescribeMigrateDBInstancesRequest {
  /**
   * 数据库类型，如mysql,redis等
   */
  DatabaseType: string
  /**
   * 实例作为迁移的源还是目标,src(表示源)，dst(表示目标)
   */
  MigrateRole?: string
  /**
   * 云数据库实例ID
   */
  InstanceId?: string
  /**
   * 云数据库名称
   */
  InstanceName?: string
  /**
   * 返回数量限制
   */
  Limit?: number
  /**
   * 偏移量
   */
  Offset?: number
  /**
   * 资源所属账号 为空值或self(表示本账号内资源)、other(表示其他账户资源)
   */
  AccountMode?: string
  /**
   * 临时密钥Id，可通过申请扮演角色临时访问凭证获取临时密钥https://cloud.tencent.com/document/product/1312/48197，其中角色资源RoleArn的定义可参考DTS跨账号迁移文档(https://cloud.tencent.com/document/product/571/54117)第4节中关于角色的定义。
   */
  TmpSecretId?: string
  /**
   * 临时密钥Id，可通过申请扮演角色临时访问凭证获取临时密钥https://cloud.tencent.com/document/product/1312/48197，其中角色资源RoleArn的定义可参考DTS跨账号迁移文档(https://cloud.tencent.com/document/product/571/54117)第4节中关于角色的定义。
   */
  TmpSecretKey?: string
  /**
   * 临时密钥Id，可通过申请扮演角色临时访问凭证获取临时密钥https://cloud.tencent.com/document/product/1312/48197，其中角色资源RoleArn的定义可参考DTS跨账号迁移文档(https://cloud.tencent.com/document/product/571/54117)第4节中关于角色的定义。
   */
  TmpToken?: string
}

/**
 * 校验任务运行详情
 */
export interface CheckStepInfo {
  /**
   * 任务开始时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  StartAt: string
  /**
   * 任务结束时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  EndAt: string
  /**
   * 任务步骤信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  Progress: ProcessProgress
}

/**
 * 错误信息及告警信息对象
 */
export interface ProcessStepTip {
  /**
   * 提示信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  Message?: string
  /**
   * 解决方案
注意：此字段可能返回 null，表示取不到有效值。
   */
  Solution?: string
  /**
   * 文档提示
注意：此字段可能返回 null，表示取不到有效值。
   */
  HelpDoc?: string
}

/**
 * ModifyCompareTask请求参数结构体
 */
export interface ModifyCompareTaskRequest {
  /**
   * 任务 Id
   */
  JobId: string
  /**
   * 对比任务 ID，形如：dts-8yv4w2i1-cmp-37skmii9
   */
  CompareTaskId: string
  /**
   * 任务名称
   */
  TaskName?: string
  /**
   * 数据对比对象模式，sameAsMigrate(全部迁移对象， 默认为此项配置)、custom(自定义)，注意自定义对比对象必须是迁移对象的子集
   */
  ObjectMode?: string
  /**
   * 对比对象，若CompareObjectMode取值为custom，则此项必填
   */
  Objects?: CompareObject
  /**
   * 一致性校验选项
   */
  Options?: CompareOptions
}

/**
 * RecoverSyncJob请求参数结构体
 */
export interface RecoverSyncJobRequest {
  /**
   * 同步实例id（即标识一个同步作业），形如sync-werwfs23
   */
  JobId: string
}

/**
 * 需要同步的库表对象
 */
export interface Database {
  /**
   * 需要迁移或同步的库名，当ObjectMode为Partial时，此项必填
注意：此字段可能返回 null，表示取不到有效值。
   */
  DbName?: string
  /**
   * 迁移或同步后的库名，默认与源库相同
注意：此字段可能返回 null，表示取不到有效值。
   */
  NewDbName?: string
  /**
   * DB选择模式: All(为当前对象下的所有对象)，Partial(部分对象)，当Mode为Partial时，此项必填。注意，高级对象的同步不依赖此值，如果整库同步此处应该为All。
注意：此字段可能返回 null，表示取不到有效值。
   */
  DbMode?: string
  /**
   * 迁移或同步的 schema
注意：此字段可能返回 null，表示取不到有效值。
   */
  SchemaName?: string
  /**
   * 迁移或同步后的 schema name
注意：此字段可能返回 null，表示取不到有效值。
   */
  NewSchemaName?: string
  /**
   * 表选择模式: All(为当前对象下的所有对象)，Partial(部分对象)，当DBMode为Partial时此项必填，如果整库同步此处应该为All。
注意：此字段可能返回 null，表示取不到有效值。
   */
  TableMode?: string
  /**
   * 表图对象集合，当 TableMode 为 Partial 时，此项需要填写
注意：此字段可能返回 null，表示取不到有效值。
   */
  Tables?: Array<Table>
  /**
   * 视图选择模式: All 为当前对象下的所有视图对象,Partial 为部分视图对象，如果整库同步此处应该为All。
注意：此字段可能返回 null，表示取不到有效值。
   */
  ViewMode?: string
  /**
   * 视图对象集合，当 ViewMode 为 Partial 时， 此项需要填写
注意：此字段可能返回 null，表示取不到有效值。
   */
  Views?: Array<View>
  /**
   * 选择要同步的模式，Partial为部分，All为整选，如果整库同步此处应该为All。
注意：此字段可能返回 null，表示取不到有效值。
   */
  FunctionMode?: string
  /**
   * FunctionMode取值为Partial时需要填写
注意：此字段可能返回 null，表示取不到有效值。
   */
  Functions?: Array<string>
  /**
   * 选择要同步的模式，Partial为部分，All为整选，如果整库同步此处应该为All。
注意：此字段可能返回 null，表示取不到有效值。
   */
  ProcedureMode?: string
  /**
   * ProcedureMode取值为Partial时需要填写
注意：此字段可能返回 null，表示取不到有效值。
   */
  Procedures?: Array<string>
  /**
   * 触发器迁移模式，All(为当前对象下的所有对象)，Partial(部分对象)，如果整库同步此处应该为All。数据同步暂不支持此高级对象。
注意：此字段可能返回 null，表示取不到有效值。
   */
  TriggerMode?: string
  /**
   * 当TriggerMode为partial，指定要迁移的触发器名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  Triggers?: Array<string>
  /**
   * 事件迁移模式，All(为当前对象下的所有对象)，Partial(部分对象)，如果整库同步此处应该为All。数据同步暂不支持此高级对象。
注意：此字段可能返回 null，表示取不到有效值。
   */
  EventMode?: string
  /**
   * 当EventMode为partial，指定要迁移的事件名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  Events?: Array<string>
}

/**
 * 数据同步中的列信息
 */
export interface Column {
  /**
   * 列名
注意：此字段可能返回 null，表示取不到有效值。
   */
  ColumnName?: string
  /**
   * 新列名
注意：此字段可能返回 null，表示取不到有效值。
   */
  NewColumnName?: string
}

/**
 * 迁移任务列表
 */
export interface JobItem {
  /**
   * 数据迁移任务ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  JobId?: string
  /**
   * 数据迁移任务名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  JobName?: string
  /**
   * 任务创建(提交)时间，格式为 yyyy-mm-dd hh:mm:ss
注意：此字段可能返回 null，表示取不到有效值。
   */
  CreateTime?: string
  /**
   * 任务更新时间，格式为 yyyy-mm-dd hh:mm:ss
注意：此字段可能返回 null，表示取不到有效值。
   */
  UpdateTime?: string
  /**
   * 任务开始执行时间，格式为 yyyy-mm-dd hh:mm:ss
注意：此字段可能返回 null，表示取不到有效值。
   */
  StartTime?: string
  /**
   * 任务执行结束时间，格式为 yyyy-mm-dd hh:mm:ss
注意：此字段可能返回 null，表示取不到有效值。
   */
  EndTime?: string
  /**
   * 迁移任务错误信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  BriefMsg?: string
  /**
   * 任务状态，取值为：creating(创建中)、created(创建完成)、checking(校验中)、checkPass(校验通过)、checkNotPass(校验不通过)、readyRun(准备运行)、running(任务运行)、readyComplete(准备完成)、success(任务成功)、failed(任务失败)、stopping(中止中)、completing(完成中)、
pausing(暂停中)、
manualPaused(已暂停)
注意：此字段可能返回 null，表示取不到有效值。
   */
  Status?: string
  /**
   * 任务运行模式，值包括：immediate(立即运行)，timed(定时运行)
注意：此字段可能返回 null，表示取不到有效值。
   */
  RunMode?: string
  /**
   * 期待启动时间，当RunMode取值为timed时，此值必填，形如：2022-07-11 16:20:49
注意：此字段可能返回 null，表示取不到有效值。
   */
  ExpectRunTime?: string
  /**
   * 任务操作信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  Action?: MigrateAction
  /**
   * 迁移执行过程信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  StepInfo?: MigrateDetailInfo
  /**
   * 源实例信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  SrcInfo?: DBEndpointInfo
  /**
   * 目标端信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  DstInfo?: DBEndpointInfo
  /**
   * 数据一致性校验结果
注意：此字段可能返回 null，表示取不到有效值。
   */
  CompareTask?: CompareTaskInfo
  /**
   * 计费状态信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  TradeInfo?: TradeInfo
  /**
   * 标签信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  Tags?: Array<TagItem>
  /**
   * 自动重试时间段信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  AutoRetryTimeRangeMinutes?: number
  /**
   * 全量导出可重入标识：enum::"yes"/"no"。yes表示当前任务可重入、no表示当前任务处于全量导出且不可重入阶段；如果在该值为no时重启任务导出流程不支持断点续传
注意：此字段可能返回 null，表示取不到有效值。
   */
  DumperResumeCtrl?: string
}

/**
 * DestroyIsolatedSubscribe返回参数结构体
 */
export interface DestroyIsolatedSubscribeResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 数据数据订阅的对象，用于修改订阅对象接口。与SubscribeObject结构类似，只是类型和参数名不同。
 */
export interface ModifiedSubscribeObject {
  /**
   * 订阅对象的类型，枚举值为：0-库，1-表(该值对于mongo任务来说，是集合) 。
注意：mongo只支持全实例、单库或者单集合订阅，因此该字段不要与SubscribeObjectType冲突。如：SubscribeObjectType=4，表示mongo单库订阅，那么该字段应该传0。
注意：此字段可能返回 null，表示取不到有效值。
   */
  ObjectsType: number
  /**
   * 订阅数据库的名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  DatabaseName: string
  /**
   * 订阅数据库中表(或集合)的名称。如果 ObjectsType 为 1，那么此字段为必填，且不为空；
注意：此字段可能返回 null，表示取不到有效值。
   */
  TableNames?: Array<string>
}

/**
 * DescribeCompareTasks返回参数结构体
 */
export interface DescribeCompareTasksResponse {
  /**
   * 数量
注意：此字段可能返回 null，表示取不到有效值。
   */
  TotalCount?: number
  /**
   * 一致性校验列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  Items?: Array<CompareTaskItem>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ResumeSubscribe返回参数结构体
 */
export interface ResumeSubscribeResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeSyncJobs请求参数结构体
 */
export interface DescribeSyncJobsRequest {
  /**
   * 同步任务id，如sync-werwfs23
   */
  JobId?: string
  /**
   * 同步任务id列表，如sync-werwfs23
   */
  JobIds?: Array<string>
  /**
   * 同步任务名
   */
  JobName?: string
  /**
   * 排序字段，可以取值为CreateTime
   */
  Order?: string
  /**
   * 排序方式，升序为ASC，降序为DESC，默认为CreateTime降序
   */
  OrderSeq?: string
  /**
   * 偏移量，默认为0
   */
  Offset?: number
  /**
   * 返回同步任务实例数量，默认20，有效区间[1,100]
   */
  Limit?: number
  /**
   * 状态集合，如Initialized,CheckPass,Running,ResumableErr,Stopped
   */
  Status?: Array<string>
  /**
   * 运行模式，如Immediate:立即运行，Timed:定时运行
   */
  RunMode?: string
  /**
   * 任务类型，如mysql2mysql：msyql同步到mysql
   */
  JobType?: string
  /**
   * 付费类型，PrePay：预付费，PostPay：后付费
   */
  PayMode?: string
  /**
   * tag
   */
  TagFilters?: Array<TagFilter>
  /**
   * 源端数据库连接信息，可以输入实例ID或者IP等
   */
  SrcInfoPattern?: string
  /**
   * 目标端数据库连接信息，可以输入实例ID或者IP等
   */
  DstInfoPattern?: string
}

/**
 * 同步任务的步骤信息
 */
export interface SyncDetailInfo {
  /**
   * 总步骤数
注意：此字段可能返回 null，表示取不到有效值。
   */
  StepAll?: number
  /**
   * 当前步骤
注意：此字段可能返回 null，表示取不到有效值。
   */
  StepNow?: number
  /**
   * 总体进度
注意：此字段可能返回 null，表示取不到有效值。
   */
  Progress?: number
  /**
   * 当前步骤进度，范围为[0-100]，若为-1表示当前步骤不支持查看进度
注意：此字段可能返回 null，表示取不到有效值。
   */
  CurrentStepProgress?: number
  /**
   * 同步两端数据量差距
注意：此字段可能返回 null，表示取不到有效值。
   */
  MasterSlaveDistance?: number
  /**
   * 同步两端时间差距
注意：此字段可能返回 null，表示取不到有效值。
   */
  SecondsBehindMaster?: number
  /**
   * 总体描述信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  Message?: string
  /**
   * 详细步骤信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  StepInfos?: Array<StepInfo>
  /**
   * 不能发起一致性校验的原因
注意：此字段可能返回 null，表示取不到有效值。
   */
  CauseOfCompareDisable?: string
  /**
   * 任务的错误和解决方案信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  ErrInfo?: ErrInfo
}

/**
 * DescribeConsumerGroups返回参数结构体
 */
export interface DescribeConsumerGroupsResponse {
  /**
   * 指定实例下的消费者组总数
   */
  TotalCount?: number
  /**
   * 消费者组列表
   */
  Items?: Array<GroupInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyMigrateRateLimit请求参数结构体
 */
export interface ModifyMigrateRateLimitRequest {
  /**
   * 迁移任务ID
   */
  JobId: string
  /**
   * 迁移任务全量导出线程数、有效值为 1-16
   */
  DumpThread?: number
  /**
   * 迁移全量导出的 Rps 限制、需要大于 0
   */
  DumpRps?: number
  /**
   * 迁移任务全量导入线程数、有效值为 1-16
   */
  LoadThread?: number
  /**
   * 迁移任务增量导入线程数、有效值为 1-128
   */
  SinkerThread?: number
  /**
   * 全量导入Rps限制
   */
  LoadRps?: number
}

/**
 * 用于一致性校验的表配置
 */
export interface CompareTableItem {
  /**
   * 表名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  TableName?: string
  /**
   * column 模式，all 为全部，partial 表示部分(该参数仅对数据同步任务有效)
注意：此字段可能返回 null，表示取不到有效值。
   */
  ColumnMode?: string
  /**
   * 当 ColumnMode 为 partial 时必填(该参数仅对数据同步任务有效)
注意：此字段可能返回 null，表示取不到有效值。
   */
  Columns?: Array<CompareColumnItem>
}

/**
 * ConfigureSyncJob返回参数结构体
 */
export interface ConfigureSyncJobResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 用于一致性校验的视图配置
 */
export interface CompareViewItem {
  /**
   * 视图名
注意：此字段可能返回 null，表示取不到有效值。
   */
  ViewName?: string
}

/**
 * 单个步骤的详细信息
 */
export interface StepInfo {
  /**
   * 步骤编号
注意：此字段可能返回 null，表示取不到有效值。
   */
  StepNo?: number
  /**
   * 步骤名
注意：此字段可能返回 null，表示取不到有效值。
   */
  StepName?: string
  /**
   * 步骤标号
注意：此字段可能返回 null，表示取不到有效值。
   */
  StepId?: string
  /**
   * 当前步骤状态,可能返回有 notStarted(未开始)、running(校验中)、failed(校验任务失败)、finished(完成)、skipped(跳过)、paused(暂停)
注意：此字段可能返回 null，表示取不到有效值。
   */
  Status?: string
  /**
   * 步骤开始时间，可能为空
注意：此字段可能返回 null，表示取不到有效值。
   */
  StartTime?: string
  /**
   * 错误信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  Errors?: Array<StepTip>
  /**
   * 警告信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  Warnings?: Array<StepTip>
  /**
   * 当前步骤进度，范围为[0-100]，若为-1表示当前步骤不支持查看进度
注意：此字段可能返回 null，表示取不到有效值。
   */
  Progress?: number
}

/**
 * ModifyConsumerGroupDescription返回参数结构体
 */
export interface ModifyConsumerGroupDescriptionResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 数据库不一致的详情，mongodb业务用到
 */
export interface DifferenceAdvancedObjectsDetail {
  /**
   * 总数
注意：此字段可能返回 null，表示取不到有效值。
   */
  TotalCount?: number
  /**
   * 不一致详情
注意：此字段可能返回 null，表示取不到有效值。
   */
  Items?: Array<AdvancedObjectsItem>
}

/**
 * 订阅的数据库表信息，用于配置和查询订阅任务接口。
 */
export interface SubscribeObject {
  /**
   * 订阅数据的类型，枚举值：database-数据库，table-数据库的表(如果 DatabaseType 为 mongodb，则表示集合)
注意：此字段可能返回 null，表示取不到有效值。
   */
  ObjectType: string
  /**
   * 订阅的数据库名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  Database: string
  /**
   * 订阅数据库中表的名称。如果 DatabaseType 为 mongodb，填集合名。mongodb只支持订阅单库或者单集合。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Tables?: Array<string>
}

/**
 * ResumeMigrateJob请求参数结构体
 */
export interface ResumeMigrateJobRequest {
  /**
   * 数据迁移任务ID
   */
  JobId: string
  /**
   * 恢复任务的模式，目前的取值有：clearData 清空目标实例数据，overwrite 以覆盖写的方式执行任务，normal 跟正常流程一样，不做额外动作；注意，clearData、overwrite仅对redis生效，normal仅针对非redis链路生效
   */
  ResumeOption?: string
}

/**
 * PauseSyncJob返回参数结构体
 */
export interface PauseSyncJobResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeSubscribeCheckJob请求参数结构体
 */
export interface DescribeSubscribeCheckJobRequest {
  /**
   * 数据订阅实例的 ID
   */
  SubscribeId: string
}

/**
 * ModifySubscribeObjects请求参数结构体
 */
export interface ModifySubscribeObjectsRequest {
  /**
   * 数据订阅实例的ID
   */
  SubscribeId: string
  /**
   * 数据订阅的类型，非mongo任务的枚举值：0-全实例更新；1-数据更新；2-结构更新；3-数据更新+结构更新。mongo任务的枚举值：0-全实例更新；4-订阅单库；5-订阅单集合
   */
  SubscribeObjectType: number
  /**
   * 修改后的订阅数据库表信息。会覆盖原来的订阅对象，所以除非 SubscribeObjectType = 0或2，否则改字段必填。
   */
  Objects?: Array<ModifiedSubscribeObject>
  /**
   * kafka分区策略。如果不填，默认不修改。如果填了，会覆盖原来的策略。
   */
  DistributeRules?: Array<DistributeRule>
  /**
   * 默认分区策略。不满足DistributeRules中正则表达式的数据，将按照默认分区策略计算分区。
非mongo产品支持的默认策略: table-按表名分区，pk-按表名+主键分区。mongo的默认策略仅支持：collection-按集合名分区。
该字段与DistributeRules搭配使用。如果配置了DistributeRules，该字段也必填。如果配置了该字段，视为配置了一条DistributeRules，原来的分区策略也会被覆盖。
   */
  DefaultRuleType?: string
  /**
   * mongo输出聚合设置，mongo任务可选。如果不填，默认不修改。
   */
  PipelineInfo?: Array<PipelineInfo>
}

/**
 * 数据同步view的描述
 */
export interface View {
  /**
   * view名
注意：此字段可能返回 null，表示取不到有效值。
   */
  ViewName?: string
  /**
   * 预留字段、目前暂时不支持view的重命名
注意：此字段可能返回 null，表示取不到有效值。
   */
  NewViewName?: string
}

/**
 * kafka消费者组的分区详情
 */
export interface MonitorInfo {
  /**
   * 当前分区的编号，从0开始
   */
  PartitionNo?: number
  /**
   * 当前分区的偏移量
   */
  ConsumerGroupOffset?: number
  /**
   * 当前分区未消费的数据量
   */
  ConsumerGroupLag?: number
  /**
   * 当前分区的消费延迟(单位为秒)
   */
  Latency?: number
}

/**
 * DescribeOffsetByTime请求参数结构体
 */
export interface DescribeOffsetByTimeRequest {
  /**
   * 数据订阅实例的 ID
   */
  SubscribeId: string
  /**
   * 时间点，格式为：Y-m-d h:m:s。如果输入时间比当前时间晚的多，相当于查询最新offset；如果输入时间比当前时间早的多，相当于查询最老offset；如果输入空，默认0时间，等价于查询最老offset。
   */
  Time: string
}

/**
 * StartCompare返回参数结构体
 */
export interface StartCompareResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 数据同步中的选项
 */
export interface DynamicOptions {
  /**
   * 所要同步的DML和DDL的选项，Insert(插入操作)、Update(更新操作)、Delete(删除操作)、DDL(结构同步)，PartialDDL(自定义,和DdlOptions一起起作用 )；必填、dts会用该值覆盖原有的值
注意：此字段可能返回 null，表示取不到有效值。
   */
  OpTypes: Array<string>
  /**
   * DDL同步选项，具体描述要同步那些DDL; 当OpTypes取值PartialDDL时、字段不能为空；必填、dts会用该值覆盖原有的值
注意：此字段可能返回 null，表示取不到有效值。
   */
  DdlOptions: Array<DdlOption>
  /**
   * 冲突处理选项，ReportError(报错)、Ignore(忽略)、Cover(覆盖)、ConditionCover(条件覆盖); 目前目标端为kafka的链路不支持修改该配置
注意：此字段可能返回 null，表示取不到有效值。
   */
  ConflictHandleType?: string
  /**
   * 冲突处理的详细选项，如条件覆盖中的条件行和条件操作；不能部分更新该选项的内部字段；有更新时、需要全量更新该字段
注意：此字段可能返回 null，表示取不到有效值。
   */
  ConflictHandleOption?: ConflictHandleOption
}

/**
 * CreateCompareTask返回参数结构体
 */
export interface CreateCompareTaskResponse {
  /**
   * 数据对比任务 ID，形如：dts-8yv4w2i1-cmp-37skmii9
注意：此字段可能返回 null，表示取不到有效值。
   */
  CompareTaskId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 迁移和同步任务限速的详细信息
 */
export interface RateLimitOption {
  /**
   * 当前生效的全量导出线程数，配置任务时可调整该字段值，注意：如果不设置或设置为0则表示保持当前值，最大值为16
注意：此字段可能返回 null，表示取不到有效值。
   */
  CurrentDumpThread: number
  /**
   * 默认的全量导出线程数，该字段仅在出参有意义
注意：此字段可能返回 null，表示取不到有效值。
   */
  DefaultDumpThread: number
  /**
   * 当前生效的全量导出Rps，配置任务时可调整该字段值，注意：如果不设置或设置为0则表示保持当前值，最大值为50000000
注意：此字段可能返回 null，表示取不到有效值。
   */
  CurrentDumpRps: number
  /**
   * 默认的全量导出Rps，该字段仅在出参有意义
注意：此字段可能返回 null，表示取不到有效值。
   */
  DefaultDumpRps: number
  /**
   * 当前生效的全量导入线程数，配置任务时可调整该字段值，注意：如果不设置或设置为0则表示保持当前值，最大值为16
注意：此字段可能返回 null，表示取不到有效值。
   */
  CurrentLoadThread: number
  /**
   * 默认的全量导入线程数，该字段仅在出参有意义
注意：此字段可能返回 null，表示取不到有效值。
   */
  DefaultLoadThread: number
  /**
   * 当前生效的全量导入Rps，配置任务时可调整该字段值，注意：如果不设置或设置为0则表示保持当前值，最大值为50000000	
注意：此字段可能返回 null，表示取不到有效值。
   */
  CurrentLoadRps: number
  /**
   * 默认的全量导入Rps，该字段仅在出参有意义	
注意：此字段可能返回 null，表示取不到有效值。
   */
  DefaultLoadRps: number
  /**
   * 当前生效的增量导入线程数，配置任务时可调整该字段值，注意：如果不设置或设置为0则表示保持当前值，最大值为128
注意：此字段可能返回 null，表示取不到有效值。
   */
  CurrentSinkerThread: number
  /**
   * 默认的增量导入线程数，该字段仅在出参有意义
注意：此字段可能返回 null，表示取不到有效值。
   */
  DefaultSinkerThread: number
  /**
   * enum:"no"/"yes"、no表示用户未设置过限速、yes表示设置过限速，该字段仅在出参有意义
注意：此字段可能返回 null，表示取不到有效值。
   */
  HasUserSetRateLimit: string
}

/**
 * SkipCheckItem请求参数结构体
 */
export interface SkipCheckItemRequest {
  /**
   * 数据迁移任务ID
   */
  JobId: string
  /**
   * 需要跳过校验项的步骤id，需要通过DescribeMigrationCheckJob接口返回StepInfo[i].StepId字段获取，例如：["OptimizeCheck"]
   */
  StepIds: Array<string>
  /**
   * 当出现外键依赖检查导致校验不通过时、可以通过该字段选择是否迁移外键依赖，当StepIds包含ConstraintCheck且该字段值为shield时表示不迁移外键依赖、当StepIds包含ConstraintCheck且值为migrate时表示迁移外键依赖
   */
  ForeignKeyFlag?: string
}

/**
 * 一致性校验摘要信息
 */
export interface CompareAbstractInfo {
  /**
   * 校验配置参数
注意：此字段可能返回 null，表示取不到有效值。
   */
  Options?: CompareOptions
  /**
   * 一致性校验对比对象
注意：此字段可能返回 null，表示取不到有效值。
   */
  Objects?: CompareObject
  /**
   * 对比结论: same,different
注意：此字段可能返回 null，表示取不到有效值。
   */
  Conclusion?: string
  /**
   * 任务状态: success,failed
注意：此字段可能返回 null，表示取不到有效值。
   */
  Status?: string
  /**
   * 总的表数量
注意：此字段可能返回 null，表示取不到有效值。
   */
  TotalTables?: number
  /**
   * 已校验的表数量
注意：此字段可能返回 null，表示取不到有效值。
   */
  CheckedTables?: number
  /**
   * 不一致的表数量
注意：此字段可能返回 null，表示取不到有效值。
   */
  DifferentTables?: number
  /**
   * 跳过校验的表数量
注意：此字段可能返回 null，表示取不到有效值。
   */
  SkippedTables?: number
  /**
   * 预估表总数
注意：此字段可能返回 null，表示取不到有效值。
   */
  NearlyTableCount?: number
  /**
   * 不一致的数据行数量
注意：此字段可能返回 null，表示取不到有效值。
   */
  DifferentRows?: number
  /**
   * 源库行数，当对比类型为**行数对比**时此项有意义
注意：此字段可能返回 null，表示取不到有效值。
   */
  SrcSampleRows?: number
  /**
   * 目标库行数，当对比类型为**行数对比**时此项有意义
注意：此字段可能返回 null，表示取不到有效值。
   */
  DstSampleRows?: number
  /**
   * 开始时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  StartedAt?: string
  /**
   * 结束时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  FinishedAt?: string
}

/**
 * 检查步骤
 */
export interface CheckStep {
  /**
   * 步骤编号
注意：此字段可能返回 null，表示取不到有效值。
   */
  StepNo?: number
  /**
   * 步骤Id， 如：ConnectDBCheck、VersionCheck、SrcPrivilegeCheck等，具体校验项和源目标实例相关
注意：此字段可能返回 null，表示取不到有效值。
   */
  StepId?: string
  /**
   * 步骤名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  StepName?: string
  /**
   * 此检查步骤的结果，pass(校验通过)、failed(校验失败)、notStarted(校验还未开始进行)、blocked(检验阻塞)、warning(校验有告警，但仍通过)
注意：此字段可能返回 null，表示取不到有效值。
   */
  StepStatus?: string
  /**
   * 此检查步骤的错误消息
注意：此字段可能返回 null，表示取不到有效值。
   */
  StepMessage?: string
  /**
   * 每个检查步骤里的具体检查项
注意：此字段可能返回 null，表示取不到有效值。
   */
  DetailCheckItems?: Array<DetailCheckItem>
  /**
   * 是否已跳过
注意：此字段可能返回 null，表示取不到有效值。
   */
  HasSkipped?: boolean
}

/**
 * 一致性校验对象信息
 */
export interface CompareTaskItem {
  /**
   * 任务id
注意：此字段可能返回 null，表示取不到有效值。
   */
  JobId?: string
  /**
   * 对比任务 Id
注意：此字段可能返回 null，表示取不到有效值。
   */
  CompareTaskId?: string
  /**
   * 对比任务名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  TaskName?: string
  /**
   * 对比任务状态, 可能的值：created - 创建完成；readyRun - 等待运行；running - 运行中；success - 成功；stopping - 结束中；failed - 失败；canceled - 已终止
注意：此字段可能返回 null，表示取不到有效值。
   */
  Status?: string
  /**
   * 对比任务配置
注意：此字段可能返回 null，表示取不到有效值。
   */
  Config?: CompareObject
  /**
   * 对比任务校验详情
注意：此字段可能返回 null，表示取不到有效值。
   */
  CheckProcess?: ProcessProgress
  /**
   * 对比任务运行详情
注意：此字段可能返回 null，表示取不到有效值。
   */
  CompareProcess?: ProcessProgress
  /**
   * 对比结果, 可能的值：same - 一致；different - 不一致；skipAll - 跳过
注意：此字段可能返回 null，表示取不到有效值。
   */
  Conclusion?: string
  /**
   * 任务创建时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  CreatedAt?: string
  /**
   * 任务启动时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  StartedAt?: string
  /**
   * 对比结束时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  FinishedAt?: string
  /**
   * 对比类型，dataCheck(完整数据对比)、sampleDataCheck(抽样数据对比)、rowsCount(行数对比)
注意：此字段可能返回 null，表示取不到有效值。
   */
  Method?: string
  /**
   * 对比配置信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  Options?: CompareOptions
  /**
   * 一致性校验提示信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  Message?: string
}

/**
 * ModifyMigrateJobSpec返回参数结构体
 */
export interface ModifyMigrateJobSpecResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateSyncJob返回参数结构体
 */
export interface CreateSyncJobResponse {
  /**
   * 同步任务ids
   */
  JobIds?: Array<string>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateCompareTask请求参数结构体
 */
export interface CreateCompareTaskRequest {
  /**
   * 任务 Id
   */
  JobId: string
  /**
   * 数据对比任务名称，若为空则默认给CompareTaskId相同值
   */
  TaskName?: string
  /**
   * 数据对比对象模式，sameAsMigrate(全部迁移对象， 默认为此项配置)，custom(自定义模式)
   */
  ObjectMode?: string
  /**
   * 数据对比对象，当ObjectMode为custom时，此项需要填写。
   */
  Objects?: CompareObject
  /**
   * 一致性校验选项
   */
  Options?: CompareOptions
}

/**
 * 错误信息及其解决方案
 */
export interface ErrInfo {
  /**
   * 错误原因
   */
  Reason?: string
  /**
   * 错误信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  Message?: string
  /**
   * 解决方案
注意：此字段可能返回 null，表示取不到有效值。
   */
  Solution?: string
}

/**
 * StartCompare请求参数结构体
 */
export interface StartCompareRequest {
  /**
   * 迁移任务 Id
   */
  JobId: string
  /**
   * 对比任务 ID，形如：dts-8yv4w2i1-cmp-37skmii9
   */
  CompareTaskId: string
}

/**
 * 数据订阅的实例节点信息
 */
export interface EndpointItem {
  /**
   * 源库所在地域。如果 AccessType 为 ccn，请填vpc所在地域，因为此时不知道源库在哪个地域。其他接入方式，请填订阅任务所在地域，因为确保订阅任务与源库在同一地域是最优的网络方案。
注意：此字段可能返回 null，表示取不到有效值。
   */
  DatabaseRegion: string
  /**
   * 用户名
注意：此字段可能返回 null，表示取不到有效值。
   */
  User: string
  /**
   * 密码。作为入参时必填，作为出参时为空。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Password: string
  /**
   * 目标实例ID。如果 AccessType 为 cdb，此项必填。配置InstanceId时会查询并校验实例信息。mysql的查询接口经过了鉴权，请确保子用户有 cdb:DescribeDBInstances 的接口权限。
注意：此字段可能返回 null，表示取不到有效值。
   */
  InstanceId?: string
  /**
   * 云主机ID。如果 AccessType 为 cvm，此项必填。
注意：此字段可能返回 null，表示取不到有效值。
   */
  CvmInstanceId?: string
  /**
   * 专线网关ID。如果 AccessType 为 dcg，此项必填。
注意：此字段可能返回 null，表示取不到有效值。
   */
  UniqDcgId?: string
  /**
   * 云联网ID。如果 AccessType 为 ccn，此项必填。 
注意：此字段可能返回 null，表示取不到有效值。
   */
  CcnId?: string
  /**
   * vpn网关ID。如果 AccessType 为 vpncloud，此项必填。
注意：此字段可能返回 null，表示取不到有效值。
   */
  UniqVpnGwId?: string
  /**
   * VpcID。如果 AccessType 为 dcg\ccn\vpncloud\vpc，此项必填。
注意：此字段可能返回 null，表示取不到有效值。
   */
  VpcId?: string
  /**
   * 子网ID。如果 AccessType 为 dcg\ccn\vpncloud\vpc，此项必填。
注意：此字段可能返回 null，表示取不到有效值。
   */
  SubnetId?: string
  /**
   * 数据库地址，支持域名与IP。如果 AccessType 为 dcg\ccn\vpncloud\vpc\extranet\intranet，此项必填。
注意：此字段可能返回 null，表示取不到有效值。
   */
  HostName?: string
  /**
   * 数据库端口。如果 AccessType 为 dcg\ccn\vpncloud\vpc\extranet\intranet\cvm，此项必填。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Port?: number
  /**
   * 是否走加密传输，枚举值：UnEncrypted-不加密，Encrypted-加密。只有mysql支持，不填默认不加密，其他产品不填。
注意：此字段可能返回 null，表示取不到有效值。
   */
  EncryptConn?: string
  /**
   * 数据库网络环境。如果 AccessType 为 ccn 此项必填。枚举值：UserIDC-自建idc，TencentVPC-腾讯云，Aws-aws，AliYun-阿里云，Others-其他。
注意：此字段可能返回 null，表示取不到有效值。
   */
  DatabaseNetEnv?: string
  /**
   * 云联网网关所属的主账号uin、跨账号云联网需要。
注意：此字段可能返回 null，表示取不到有效值。
   */
  CcnOwnerUin?: string
  /**
   * 为业务添加的额外信息。参数名作key，参数值作value。 
tdpg必填参数：PgDatabase-订阅的库名；
mongo选填参数：InstanceType-实例类型：replicaset-副本集，cluster-分片集，主要用于控制台跳转到mongo实例页面，如不填不影响任务运行；
全业务选填参数：EngineVersion-内核版本。
注意：此字段可能返回 null，表示取不到有效值。
   */
  ExtraAttr?: Array<KeyValuePairOption>
  /**
   * 数据库为cynos、且是cynos集群内的一个子数据库实例时、该参数为该子实例的ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  ChildInstanceId?: string
  /**
   * 数据库为cynos、且是cynos集群内的一个子数据库实例时、该参数为该子实例的类型、例如：只读实例传ro、读写实例传rw
注意：此字段可能返回 null，表示取不到有效值。
   */
  ChildInstanceType?: string
}

/**
 * DescribeMigrationCheckJob请求参数结构体
 */
export interface DescribeMigrationCheckJobRequest {
  /**
   * 任务id
   */
  JobId: string
}

/**
 * DescribeMigrationDetail返回参数结构体
 */
export interface DescribeMigrationDetailResponse {
  /**
   * 数据迁移任务ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  JobId?: string
  /**
   * 数据迁移任务名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  JobName?: string
  /**
   * 任务创建(提交)时间，格式为 yyyy-mm-dd hh:mm:ss
注意：此字段可能返回 null，表示取不到有效值。
   */
  CreateTime?: string
  /**
   * 任务更新时间，格式为 yyyy-mm-dd hh:mm:ss
注意：此字段可能返回 null，表示取不到有效值。
   */
  UpdateTime?: string
  /**
   * 任务开始执行时间，格式为 yyyy-mm-dd hh:mm:ss
注意：此字段可能返回 null，表示取不到有效值。
   */
  StartTime?: string
  /**
   * 任务执行结束时间，格式为 yyyy-mm-dd hh:mm:ss
注意：此字段可能返回 null，表示取不到有效值。
   */
  EndTime?: string
  /**
   * 迁移任务简要错误信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  BriefMsg?: string
  /**
   * 任务状态，取值为：created(创建完成)、checking(校验中)、checkPass(校验通过)、checkNotPass(校验不通过)、readyRun(准备运行)、running(任务运行中)、readyComplete(准备完成)、success(任务成功)、failed(任务失败)、stopping(中止中)、completing(完成中)、
pausing(暂停中)、
manualPaused(已暂停)
注意：此字段可能返回 null，表示取不到有效值。
   */
  Status?: string
  /**
   * 任务操作信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  Action?: MigrateAction
  /**
   * 迁移执行过程信息，在校验阶段显示校验过程步骤信息，在迁移阶段会显示迁移步骤信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  StepInfo?: MigrateDetailInfo
  /**
   * 源实例信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  SrcInfo?: DBEndpointInfo
  /**
   * 目标端信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  DstInfo?: DBEndpointInfo
  /**
   * 数据一致性校验结果
注意：此字段可能返回 null，表示取不到有效值。
   */
  CompareTask?: CompareTaskInfo
  /**
   * 标签信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  Tags?: Array<TagItem>
  /**
   * 运行模式，取值如：immediate(表示立即运行)、timed(表示定时运行)
注意：此字段可能返回 null，表示取不到有效值。
   */
  RunMode?: string
  /**
   * 期待启动时间，当RunMode取值为timed时，此值必填，形如："2006-01-02 15:04:05"
注意：此字段可能返回 null，表示取不到有效值。
   */
  ExpectRunTime?: string
  /**
   * 迁移选项，描述任务如何执行迁移等一系列配置信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  MigrateOption?: MigrateOption
  /**
   * 校验任务运行详情
注意：此字段可能返回 null，表示取不到有效值。
   */
  CheckStepInfo?: CheckStepInfo
  /**
   * 描述计费相关的信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  TradeInfo?: TradeInfo
  /**
   * 任务错误信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  ErrorInfo?: Array<ErrorInfoItem>
  /**
   * 全量导出可重入标识：enum::"yes"/"no"。yes表示当前任务可重入、no表示当前任务处于全量导出且不可重入阶段；如果在该值为no时重启任务导出流程不支持断点续传
   */
  DumperResumeCtrl?: string
  /**
   * 任务的限速信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  RateLimitOption?: RateLimitOption
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateModifyCheckSyncJob返回参数结构体
 */
export interface CreateModifyCheckSyncJobResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyMigrateName请求参数结构体
 */
export interface ModifyMigrateNameRequest {
  /**
   * 迁移任务id
   */
  JobId: string
  /**
   * 修改后的迁移任务名
   */
  JobName: string
}

/**
 * CreateSubscribe请求参数结构体
 */
export interface CreateSubscribeRequest {
  /**
   * 订阅的数据库类型，目前支持 cynosdbmysql(tdsql-c mysql版),mariadb,mongodb,mysql,percona,tdpg(tdsql postgresql版),tdsqlpercona(tdsql mysql版)
   */
  Product: string
  /**
   * 付费方式，枚举值：0-包年包月，1-按量计费
   */
  PayType: number
  /**
   * 购买时长。当 payType 为包年包月时，该项需要填，单位为月，最小值为 1，最大值为 120。不填默认1
   */
  Duration?: number
  /**
   * 是否自动续费。当 payType 为包年包月时，该项需要填。枚举值：0-不自动续费，1-自动续费。默认不自动续费。按量计费设置该标识无效。
   */
  AutoRenew?: number
  /**
   * 购买数量,默认为1，最大为10
   */
  Count?: number
  /**
   * 实例资源标签
   */
  Tags?: Array<TagItem>
  /**
   * 任务名，自定义
   */
  Name?: string
}

/**
 * StartSyncJob返回参数结构体
 */
export interface StartSyncJobResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * StartMigrateJob请求参数结构体
 */
export interface StartMigrateJobRequest {
  /**
   * 数据迁移任务ID
   */
  JobId: string
}

/**
 * 订阅任务的kafka分区规则。符合库名和表名正则表达式的数据将按照RuleType计算该条数据将被投递的kafka分区。如果配置了多个规则，将按照配置的顺序，第一条命中的规则生效。
 */
export interface DistributeRule {
  /**
   * 规则类型。非mongo产品的枚举值为: table-按表名分区，pk-按表名+主键分区，cols-按列名分区。mongo的枚举值为：collection-按集合名分区、collectionAndObjectId-按集合+主键分区。
注意：此字段可能返回 null，表示取不到有效值。
   */
  RuleType: string
  /**
   * 库名匹配规则，请填写正则表达式
注意：此字段可能返回 null，表示取不到有效值。
   */
  DbPattern: string
  /**
   * 表名匹配规则，如果 DatabaseType 为 mongodb，则匹配集合名
注意：此字段可能返回 null，表示取不到有效值。
   */
  TablePattern: string
  /**
   * 列名。如果 RuleType 为 cols，此项必填。订阅任务会用该列的值计算分区。mongo没有按列分区，因此也不用传这个字段。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Columns?: Array<string>
}

/**
 * 同步的数据库对对象描述
 */
export interface Objects {
  /**
   * 同步对象类型 Partial(部分对象)
注意：此字段可能返回 null，表示取不到有效值。
   */
  Mode?: string
  /**
   * 同步对象，当 Mode 为 Partial 时，不为空
注意：此字段可能返回 null，表示取不到有效值。
   */
  Databases?: Array<Database>
  /**
   * 高级对象类型，如function、procedure。注意：如果要迁移同步高级对象，此配置中应该包含对应的高级对象类型。当需要同步高级对象时，初始化类型必须包含结构初始化类型，即任务的Options.InitType字段值为Structure或Full
注意：此字段可能返回 null，表示取不到有效值。
   */
  AdvancedObjects?: Array<string>
  /**
   * OnlineDDL类型，冗余字段不做配置用途
注意：此字段可能返回 null，表示取不到有效值。
   */
  OnlineDDL?: OnlineDDL
}

/**
 * DeleteConsumerGroup返回参数结构体
 */
export interface DeleteConsumerGroupResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 迁移对象信息，在配置库表视图等对象信息时大小写敏感
 */
export interface DBItem {
  /**
   * 需要迁移或同步的库名，当ObjectMode为partial时，此项必填
注意：此字段可能返回 null，表示取不到有效值。
   */
  DbName?: string
  /**
   * 迁移或同步后的库名，默认与源库相同
注意：此字段可能返回 null，表示取不到有效值。
   */
  NewDbName?: string
  /**
   * 迁移或同步的 schema
注意：此字段可能返回 null，表示取不到有效值。
   */
  SchemaName?: string
  /**
   * 迁移或同步后的 schema name
注意：此字段可能返回 null，表示取不到有效值。
   */
  NewSchemaName?: string
  /**
   * DB选择模式: all(为当前对象下的所有对象)，partial(部分对象)，当ObjectMode为partial时，此项必填
注意：此字段可能返回 null，表示取不到有效值。
   */
  DBMode?: string
  /**
   * schema选择模式: all(为当前对象下的所有对象)，partial(部分对象)
注意：此字段可能返回 null，表示取不到有效值。
   */
  SchemaMode?: string
  /**
   * 表选择模式: all(为当前对象下的所有对象)，partial(部分对象)，当DBMode为partial时此项必填
注意：此字段可能返回 null，表示取不到有效值。
   */
  TableMode?: string
  /**
   * 表图对象集合，当 TableMode 为 partial 时，此项需要填写
注意：此字段可能返回 null，表示取不到有效值。
   */
  Tables?: Array<TableItem>
  /**
   * 视图选择模式: all 为当前对象下的所有视图对象,partial 为部分视图对象
注意：此字段可能返回 null，表示取不到有效值。
   */
  ViewMode?: string
  /**
   * 视图对象集合，当 ViewMode 为 partial 时， 此项需要填写
注意：此字段可能返回 null，表示取不到有效值。
   */
  Views?: Array<ViewItem>
  /**
   * postgresql独有参数，角色选择模式: all 为当前对象下的所有角色对象,partial 为部分角色对象
注意：此字段可能返回 null，表示取不到有效值。
   */
  RoleMode?: string
  /**
   * postgresql独有参数，当 RoleMode 为 partial 时， 此项需要填写
注意：此字段可能返回 null，表示取不到有效值。
   */
  Roles?: Array<RoleItem>
  /**
   * 选择要同步的模式，partial为部分，all为整选
注意：此字段可能返回 null，表示取不到有效值。
   */
  FunctionMode?: string
  /**
   * 选择要同步的模式，partial为部分，all为整选
注意：此字段可能返回 null，表示取不到有效值。
   */
  TriggerMode?: string
  /**
   * 选择要同步的模式，partial为部分，all为整选
注意：此字段可能返回 null，表示取不到有效值。
   */
  EventMode?: string
  /**
   * 选择要同步的模式，partial为部分，all为整选
注意：此字段可能返回 null，表示取不到有效值。
   */
  ProcedureMode?: string
  /**
   * FunctionMode取值为partial时需要填写
注意：此字段可能返回 null，表示取不到有效值。
   */
  Functions?: Array<string>
  /**
   * ProcedureMode取值为partial时需要填写
注意：此字段可能返回 null，表示取不到有效值。
   */
  Procedures?: Array<string>
  /**
   * EventMode取值为partial时需要填写
注意：此字段可能返回 null，表示取不到有效值。
   */
  Events?: Array<string>
  /**
   * TriggerMode取值为partial时需要填写
注意：此字段可能返回 null，表示取不到有效值。
   */
  Triggers?: Array<string>
}

/**
 * DeleteCompareTask请求参数结构体
 */
export interface DeleteCompareTaskRequest {
  /**
   * 迁移任务 Id
   */
  JobId: string
  /**
   * 对比任务 ID，形如：dts-8yv4w2i1-cmp-37skmii9
   */
  CompareTaskId: string
}

/**
 * 迁移执行过程信息
 */
export interface MigrateDetailInfo {
  /**
   * 总步骤数
注意：此字段可能返回 null，表示取不到有效值。
   */
  StepAll?: number
  /**
   * 当前步骤
注意：此字段可能返回 null，表示取不到有效值。
   */
  StepNow?: number
  /**
   * 主从差距，MB；只在任务正常，迁移或者同步的最后一步（追Binlog的阶段才有校），如果是非法值，返回-1
注意：此字段可能返回 null，表示取不到有效值。
   */
  MasterSlaveDistance?: number
  /**
   * 主从差距，秒；只在任务正常，迁移或者同步的最后一步（追Binlog的阶段才有校），如果是非法值，返回-1
注意：此字段可能返回 null，表示取不到有效值。
   */
  SecondsBehindMaster?: number
  /**
   * 步骤信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  StepInfo?: Array<StepDetailInfo>
}

/**
 * StopMigrateJob请求参数结构体
 */
export interface StopMigrateJobRequest {
  /**
   * 数据迁移任务ID
   */
  JobId: string
}

/**
 * 数据同步中的描述源端和目的端的信息
 */
export interface Endpoint {
  /**
   * 地域英文名，如：ap-guangzhou
注意：此字段可能返回 null，表示取不到有效值。
   */
  Region?: string
  /**
   * 节点类型，proxy表示节点类型为主机，set表示节点类型为节点。proxy类型必须填在数组第一项。tdsqlmysql类型的源/目标配置必填
注意：此字段可能返回 null，表示取不到有效值。
   */
  Role?: string
  /**
   * 数据库内核类型，tdsql中用于区分不同内核：percona,mariadb,mysql。注意TDSQL-C MySQL、TDSQL PostgreSQL无需填写此项值。
注意：此字段可能返回 null，表示取不到有效值。
   */
  DbKernel?: string
  /**
   * 数据库实例ID，格式如：cdb-powiqx8q
注意：此字段可能返回 null，表示取不到有效值。
   */
  InstanceId?: string
  /**
   * 实例的IP地址，接入类型为非cdb时此项必填
注意：此字段可能返回 null，表示取不到有效值。
   */
  Ip?: string
  /**
   * 实例端口，接入类型为非cdb时此项必填
注意：此字段可能返回 null，表示取不到有效值。
   */
  Port?: number
  /**
   * 用户名，对于访问需要用户名密码认证的实例必填
注意：此字段可能返回 null，表示取不到有效值。
   */
  User?: string
  /**
   * 密码，对于访问需要用户名密码认证的实例必填
注意：此字段可能返回 null，表示取不到有效值。
   */
  Password?: string
  /**
   * 数据库名，数据库为cdwpg时，需要提供
注意：此字段可能返回 null，表示取不到有效值。
   */
  DbName?: string
  /**
   * 私有网络ID，对于私有网络、专线、VPN的接入方式此项必填，格式如：vpc-92jblxto
注意：此字段可能返回 null，表示取不到有效值。
   */
  VpcId?: string
  /**
   * 私有网络下的子网ID，对于私有网络、专线、VPN的接入方式此项必填，格式如：subnet-3paxmkdz
注意：此字段可能返回 null，表示取不到有效值。
   */
  SubnetId?: string
  /**
   * CVM实例短ID，格式如：ins-olgl39y8，与云服务器控制台页面显示的实例ID相同。如果是CVM自建实例，需要传递此字段
注意：此字段可能返回 null，表示取不到有效值。
   */
  CvmInstanceId?: string
  /**
   * 专线网关ID，对于专线接入类型此项必填，格式如：dcg-0rxtqqxb
注意：此字段可能返回 null，表示取不到有效值。
   */
  UniqDcgId?: string
  /**
   * VPN网关ID，对于vpn接入类型此项必填，格式如：vpngw-9ghexg7q
注意：此字段可能返回 null，表示取不到有效值。
   */
  UniqVpnGwId?: string
  /**
   * 云联网ID，对于云联网接入类型此项必填，如：ccn-afp6kltc
注意：此字段可能返回 null，表示取不到有效值。
   */
  CcnId?: string
  /**
   * 云厂商类型，当实例为RDS实例时，填写为aliyun, 其他情况均填写others，默认为others
注意：此字段可能返回 null，表示取不到有效值。
   */
  Supplier?: string
  /**
   * 数据库版本，当实例为RDS实例时才有效，其他实例忽略，格式如：5.6或者5.7，默认为5.6
注意：此字段可能返回 null，表示取不到有效值。
   */
  EngineVersion?: string
  /**
   * 实例所属账号，如果为跨账号实例此项必填
注意：此字段可能返回 null，表示取不到有效值。
   */
  Account?: string
  /**
   * 资源所属账号 为空或self(表示本账号内资源)、other(表示跨账号资源)
注意：此字段可能返回 null，表示取不到有效值。
   */
  AccountMode?: string
  /**
   * 跨账号同步时的角色，只允许[a-zA-Z0-9\-\_]+，如果为跨账号实例此项必填
注意：此字段可能返回 null，表示取不到有效值。
   */
  AccountRole?: string
  /**
   * 外部角色id
注意：此字段可能返回 null，表示取不到有效值。
   */
  RoleExternalId?: string
  /**
   * 临时密钥Id，可通过申请扮演角色临时访问凭证获取临时密钥https://cloud.tencent.com/document/product/1312/48197，其中角色资源RoleArn的定义可参考DTS跨账号同步文档(https://cloud.tencent.com/document/product/571/68729)第4节中关于角色的定义。
注意：此字段可能返回 null，表示取不到有效值。
   */
  TmpSecretId?: string
  /**
   * 临时密钥Id，可通过申请扮演角色临时访问凭证获取临时密钥https://cloud.tencent.com/document/product/1312/48197，其中角色资源RoleArn的定义可参考DTS跨账号同步文档(https://cloud.tencent.com/document/product/571/68729)第4节中关于角色的定义。
注意：此字段可能返回 null，表示取不到有效值。
   */
  TmpSecretKey?: string
  /**
   * 临时密钥Id，可通过申请扮演角色临时访问凭证获取临时密钥https://cloud.tencent.com/document/product/1312/48197，其中角色资源RoleArn的定义可参考DTS跨账号同步文档(https://cloud.tencent.com/document/product/571/68729)第4节中关于角色的定义。
注意：此字段可能返回 null，表示取不到有效值。
   */
  TmpToken?: string
  /**
   * 是否走加密传输、UnEncrypted表示不走加密传输，Encrypted表示走加密传输，默认UnEncrypted
注意：此字段可能返回 null，表示取不到有效值。
   */
  EncryptConn?: string
  /**
   * 数据库所属网络环境，AccessType为云联网(ccn)时必填， UserIDC表示用户IDC、TencentVPC表示腾讯云VPC；
注意：此字段可能返回 null，表示取不到有效值。
   */
  DatabaseNetEnv?: string
  /**
   * 数据库为跨账号云联网下的实例时、表示云联网所属主账号
注意：此字段可能返回 null，表示取不到有效值。
   */
  CcnOwnerUin?: string
  /**
   * 数据库为cynos、且是cynos集群内的一个子数据库实例时、该参数为该子实例的ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  ChildInstanceId?: string
  /**
   * 数据库为cynos、且是cynos集群内的一个子数据库实例时、该参数为该子实例的类型、例如：只读实例传ro、读写实例传rw
注意：此字段可能返回 null，表示取不到有效值。
   */
  ChildInstanceType?: string
  /**
   * tdsql的分片id。如节点类型为set必填。
注意：此字段可能返回 null，表示取不到有效值。
   */
  SetId?: string
}

/**
 * ConfigureSubscribeJob请求参数结构体
 */
export interface ConfigureSubscribeJobRequest {
  /**
   * 数据订阅实例的 ID
   */
  SubscribeId: string
  /**
   * 数据订阅的类型，当 DatabaseType 不为 mongodb 时，枚举值为：all-全实例更新；dml-数据更新；ddl-结构更新；dmlAndDdl-数据更新+结构更新。当 DatabaseType 为 mongodb 时，枚举值为 all-全实例更新；database-订阅单库；collection-订阅单集合
   */
  SubscribeMode: string
  /**
   * 源数据库接入类型，如：extranet(公网)、vpncloud(vpn接入)、dcg(专线接入)、ccn(云联网)、cdb(云数据库)、cvm(云服务器自建)、intranet(自研上云)、vpc(私有网络vpc)。注意具体可选值依赖当前链路支持能力
   */
  AccessType: string
  /**
   * 数据库节点信息
   */
  Endpoints: Array<EndpointItem>
  /**
   * Kafka配置
   */
  KafkaConfig: SubscribeKafkaConfig
  /**
   * 订阅的数据库表信息，当 SubscribeMode 不为 all和ddl 时，SubscribeObjects 为必选参数
   */
  SubscribeObjects?: Array<SubscribeObject>
  /**
   * 订阅数据格式，如：protobuf、json、avro。注意具体可选值依赖当前链路支持能力，数据格式详情参考官网的消费demo文档
   */
  Protocol?: string
  /**
   * mongo选填参数：输出聚合设置。
   */
  PipelineInfo?: Array<PipelineInfo>
  /**
   * 为业务添加的额外信息。参数名作key，参数值作value。
mysql选填参数：ProcessXA-是否处理XA事务，填true处理，不填或填其他值不处理。
mongo选填参数：SubscribeType-订阅类型，目前只支持changeStream，不填也是默认changeStream。
其他业务暂没有可选参数。
   */
  ExtraAttr?: Array<KeyValuePairOption>
}

/**
 * 同步任务信息
 */
export interface SyncJobInfo {
  /**
   * 同步任务id，如：sync-btso140
注意：此字段可能返回 null，表示取不到有效值。
   */
  JobId?: string
  /**
   * 同步任务名
注意：此字段可能返回 null，表示取不到有效值。
   */
  JobName?: string
  /**
   * 付款方式，PostPay(按量付费)、PrePay(包年包月)
注意：此字段可能返回 null，表示取不到有效值。
   */
  PayMode?: string
  /**
   * 运行模式，Immediate(表示立即运行，默认为此项值)、Timed(表示定时运行)
注意：此字段可能返回 null，表示取不到有效值。
   */
  RunMode?: string
  /**
   * 期待运行时间，格式为 yyyy-mm-dd hh:mm:ss
注意：此字段可能返回 null，表示取不到有效值。
   */
  ExpectRunTime?: string
  /**
   * 支持的所有操作
注意：此字段可能返回 null，表示取不到有效值。
   */
  AllActions?: Array<string>
  /**
   * 当前状态能进行的操作
注意：此字段可能返回 null，表示取不到有效值。
   */
  Actions?: Array<string>
  /**
   * 同步选项
注意：此字段可能返回 null，表示取不到有效值。
   */
  Options?: Options
  /**
   * 同步库表对象
注意：此字段可能返回 null，表示取不到有效值。
   */
  Objects?: Objects
  /**
   * 任务规格
注意：此字段可能返回 null，表示取不到有效值。
   */
  Specification?: string
  /**
   * 过期时间，格式为 yyyy-mm-dd hh:mm:ss
注意：此字段可能返回 null，表示取不到有效值。
   */
  ExpireTime?: string
  /**
   * 源端地域，如：ap-guangzhou等
注意：此字段可能返回 null，表示取不到有效值。
   */
  SrcRegion?: string
  /**
   * 源端数据库类型，mysql,cynosdbmysql,tdapg,tdpg,tdsqlmysql等
注意：此字段可能返回 null，表示取不到有效值。
   */
  SrcDatabaseType?: string
  /**
   * 源端接入类型，cdb(云数据库)、cvm(云主机自建)、vpc(私有网络)、extranet(外网)、vpncloud(vpn接入)、dcg(专线接入)、ccn(云联网)、intranet(自研上云)
注意：此字段可能返回 null，表示取不到有效值。
   */
  SrcAccessType?: string
  /**
   * 源端信息，单节点数据库使用
注意：此字段可能返回 null，表示取不到有效值。
   */
  SrcInfo?: Endpoint
  /**
   * 枚举值：cluster、single。源库为单节点数据库使用single，多节点使用cluster
注意：此字段可能返回 null，表示取不到有效值。
   */
  SrcNodeType?: string
  /**
   * 源端信息，多节点数据库使用
注意：此字段可能返回 null，表示取不到有效值。
   */
  SrcInfos?: SyncDBEndpointInfos
  /**
   * 目标端地域，如：ap-guangzhou等
注意：此字段可能返回 null，表示取不到有效值。
   */
  DstRegion?: string
  /**
   * 目标端数据库类型，mysql,cynosdbmysql,tdapg,tdpg,tdsqlmysql等
注意：此字段可能返回 null，表示取不到有效值。
   */
  DstDatabaseType?: string
  /**
   * 目标端接入类型，cdb(云数据库)、cvm(云主机自建)、vpc(私有网络)、extranet(外网)、vpncloud(vpn接入)、dcg(专线接入)、ccn(云联网)、intranet(自研上云)
注意：此字段可能返回 null，表示取不到有效值。
   */
  DstAccessType?: string
  /**
   * 目标端信息，单节点数据库使用
注意：此字段可能返回 null，表示取不到有效值。
   */
  DstInfo?: Endpoint
  /**
   * 枚举值：cluster、single。目标库为单节点数据库使用single，多节点使用cluster
注意：此字段可能返回 null，表示取不到有效值。
   */
  DstNodeType?: string
  /**
   * 目标端信息，多节点数据库使用
注意：此字段可能返回 null，表示取不到有效值。
   */
  DstInfos?: SyncDBEndpointInfos
  /**
   * 创建时间，格式为 yyyy-mm-dd hh:mm:ss
注意：此字段可能返回 null，表示取不到有效值。
   */
  CreateTime?: string
  /**
   * 开始时间，格式为 yyyy-mm-dd hh:mm:ss
注意：此字段可能返回 null，表示取不到有效值。
   */
  StartTime?: string
  /**
   * 任务状态，UnInitialized(未初始化)、Initialized(已初始化)、Checking(校验中)、CheckPass(校验通过)、CheckNotPass(校验不通过)、ReadyRunning(准备运行)、Running(运行中)、Pausing(暂停中)、Paused(已暂停)、Stopping(停止中)、Stopped(已结束)、ResumableErr(任务错误)、Resuming(恢复中)、Failed(失败)、Released(已释放)、Resetting(重置中)、Unknown(未知)
注意：此字段可能返回 null，表示取不到有效值。
   */
  Status?: string
  /**
   * 结束时间，格式为 yyyy-mm-dd hh:mm:ss
注意：此字段可能返回 null，表示取不到有效值。
   */
  EndTime?: string
  /**
   * 标签相关信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  Tags?: Array<TagItem>
  /**
   * 同步任务运行步骤信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  Detail?: SyncDetailInfo
  /**
   * 用于计费的状态，可能取值有：Normal(正常状态)、Resizing(变配中)、Renewing(续费中)、Isolating(隔离中)、Isolated(已隔离)、Offlining(下线中)、Offlined(已下线)、NotBilled(未计费)、Recovering(解隔离)、PostPay2Prepaying(按量计费转包年包月中)、PrePay2Postpaying(包年包月转按量计费中)
注意：此字段可能返回 null，表示取不到有效值。
   */
  TradeStatus?: string
  /**
   * 同步链路规格，如micro,small,medium,large
注意：此字段可能返回 null，表示取不到有效值。
   */
  InstanceClass?: string
  /**
   * 自动续费标识，当PayMode值为PrePay则此项配置有意义，取值为：1（表示自动续费）、0（不自动续费）
注意：此字段可能返回 null，表示取不到有效值。
   */
  AutoRenew?: number
  /**
   * 下线时间，格式为 yyyy-mm-dd hh:mm:ss
注意：此字段可能返回 null，表示取不到有效值。
   */
  OfflineTime?: string
  /**
   * 动态修改对象，修改任务的状态等
注意：此字段可能返回 null，表示取不到有效值。
   */
  OptObjStatus?: string
  /**
   * 自动重试时间段设置
注意：此字段可能返回 null，表示取不到有效值。
   */
  AutoRetryTimeRangeMinutes?: number
  /**
   * 全量导出可重入标识：enum::"yes"/"no"。yes表示当前任务可重入、no表示当前任务处于全量导出且不可重入阶段；如果在该值为no时重启任务导出流程不支持断点续传
注意：此字段可能返回 null，表示取不到有效值。
   */
  DumperResumeCtrl?: string
}

/**
 * DescribeSubscribeCheckJob返回参数结构体
 */
export interface DescribeSubscribeCheckJobResponse {
  /**
   * 订阅实例ID
   */
  SubscribeId?: string
  /**
   * 失败或者报错提示，成功则提示success。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Message?: string
  /**
   * 任务运行状态，可能值为 running,failed,success
   */
  Status?: string
  /**
   * 当前总体进度，范围 0~100
   */
  Progress?: number
  /**
   * 校验总步骤数
   */
  StepAll?: number
  /**
   * 当前执行步骤
   */
  StepNow?: number
  /**
   * 各个步骤运行状态
注意：此字段可能返回 null，表示取不到有效值。
   */
  Steps?: Array<SubscribeCheckStepInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 角色对象，postgresql独有参数
 */
export interface RoleItem {
  /**
   * 角色名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  RoleName?: string
  /**
   * 迁移后的角色名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  NewRoleName?: string
}

/**
 * 标签过滤
 */
export interface TagFilter {
  /**
   * 标签键值
   */
  TagKey: string
  /**
   * 标签值
   */
  TagValue?: Array<string>
}

/**
 * 步骤信息
 */
export interface StepDetailInfo {
  /**
   * 步骤序列
注意：此字段可能返回 null，表示取不到有效值。
   */
  StepNo?: number
  /**
   * 步骤展现名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  StepName?: string
  /**
   * 步骤英文标识
注意：此字段可能返回 null，表示取不到有效值。
   */
  StepId?: string
  /**
   * 步骤状态:success(成功)、failed(失败)、running(执行中)、notStarted(未执行)、默认为notStarted
注意：此字段可能返回 null，表示取不到有效值。
   */
  Status?: string
  /**
   * 当前步骤开始的时间，格式为"yyyy-mm-dd hh:mm:ss"，该字段不存在或者为空是无意义 注意：此字段可能返回 null，表示取不到有效值。
注意：此字段可能返回 null，表示取不到有效值。
   */
  StartTime?: string
  /**
   * 步骤错误信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  StepMessage?: string
  /**
   * 执行进度
注意：此字段可能返回 null，表示取不到有效值。
   */
  Percent?: number
  /**
   * 错误信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  Errors?: Array<ProcessStepTip>
  /**
   * 告警提示
注意：此字段可能返回 null，表示取不到有效值。
   */
  Warnings?: Array<ProcessStepTip>
}

/**
 * CreateSyncJob请求参数结构体
 */
export interface CreateSyncJobRequest {
  /**
   * 付款类型, 如：PrePay(表示包年包月)、PostPay(表示按时按量)
   */
  PayMode: string
  /**
   * 源端数据库类型,如mysql,mariadb,percona,postgresql,cynosdbmysql(表示TDSQL-C MySQL),tdpg(TDSQL PostgreSQL版),tdsqlmysql,tdstore(表示TDSQL TDStore版)等。
   */
  SrcDatabaseType: string
  /**
   * 源端数据库所在地域,如ap-guangzhou
   */
  SrcRegion: string
  /**
   * 目标端数据库类型,如mysql,mariadb,percona,cynosdbmysql(表示TDSQL-C MySQL),tdpg(TDSQL PostgreSQL版),tdsqlmysql,kafka,tdstore(表示TDSQL TDStore版)等。
   */
  DstDatabaseType: string
  /**
   * 目标端数据库所在地域,如ap-guangzhou
   */
  DstRegion: string
  /**
   * 同步任务规格，Standard:标准版
   */
  Specification?: string
  /**
   * 购买时长（单位：月），当PayMode值为PrePay则此项配置有意义，默认为1月，取值范围为[1,100]
   */
  TimeSpan?: number
  /**
   * 标签信息
   */
  Tags?: Array<TagItem>
  /**
   * 一次购买的同步任务数量，取值范围为[1, 10]，默认为1
   */
  Count?: number
  /**
   * 自动续费标识，当PayMode值为PrePay则此项配置有意义，取值为：1（表示自动续费）、0（不自动续费，默认为此值）
   */
  AutoRenew?: number
  /**
   * 同步链路规格，如micro,small,medium,large，默认为medium
   */
  InstanceClass?: string
  /**
   * 同步任务名称
   */
  JobName?: string
  /**
   * 创建类似任务的现有任务Id
   */
  ExistedJobId?: string
}

/**
 * 订阅的kafka分区数和分区规则。mariadb，percona，tdsqlmysql，tdpg不支持自定义分区，所以DistributeRules和DefaultRuleType可以不填，但是NumberOfPartitions是必填。
 */
export interface SubscribeKafkaConfig {
  /**
   * kafka分区数量，枚举值为1，4，8
注意：此字段可能返回 null，表示取不到有效值。
   */
  NumberOfPartitions: number
  /**
   * 分区规则。当NumberOfPartitions > 1时，该项必填。
注意：此字段可能返回 null，表示取不到有效值。
   */
  DistributeRules?: Array<DistributeRule>
  /**
   * 默认分区策略。当NumberOfPartitions > 1时，该项必填。不满足DistributeRules中正则表达式的数据，将按照默认分区策略计算分区。
非mongo产品的枚举值为: table-按表名分区，pk-按表名+主键分区。mongo的枚举值为：collection-按集合名分区。
该字段与DistributeRules搭配使用，如果配置了该字段，视为配置了一条DistributeRules。
注意：此字段可能返回 null，表示取不到有效值。
   */
  DefaultRuleType?: string
}

/**
 * DescribeCompareReport请求参数结构体
 */
export interface DescribeCompareReportRequest {
  /**
   * 迁移任务 Id
   */
  JobId: string
  /**
   * 校验任务 Id
   */
  CompareTaskId: string
  /**
   * 校验不一致结果的 limit
   */
  DifferenceLimit?: number
  /**
   * 不一致的 Offset
   */
  DifferenceOffset?: number
  /**
   * 搜索条件，不一致的库名
   */
  DifferenceDB?: string
  /**
   * 搜索条件，不一致的表名
   */
  DifferenceTable?: string
  /**
   * 未校验的 Limit
   */
  SkippedLimit?: number
  /**
   * 未校验的 Offset
   */
  SkippedOffset?: number
  /**
   * 搜索条件，未校验的库名
   */
  SkippedDB?: string
  /**
   * 搜索条件，未校验的表名
   */
  SkippedTable?: string
}

/**
 * 跳过校验的表详情
 */
export interface SkippedItem {
  /**
   * 数据库名
注意：此字段可能返回 null，表示取不到有效值。
   */
  Db?: string
  /**
   * 表名
注意：此字段可能返回 null，表示取不到有效值。
   */
  Table?: string
  /**
   * 未发起检查的原因
注意：此字段可能返回 null，表示取不到有效值。
   */
  Reason?: string
}

/**
 * IsolateSubscribe请求参数结构体
 */
export interface IsolateSubscribeRequest {
  /**
   * 订阅实例ID
   */
  SubscribeId: string
}

/**
 * DescribeSubscribeReturnable返回参数结构体
 */
export interface DescribeSubscribeReturnableResponse {
  /**
   * 实例是否支持退还/退货
   */
  IsReturnable?: boolean
  /**
   * 不支持退还的原因
注意：此字段可能返回 null，表示取不到有效值。
   */
  ReturnFailMessage?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 标签
 */
export interface TagItem {
  /**
   * 标签键
注意：此字段可能返回 null，表示取不到有效值。
   */
  TagKey?: string
  /**
   * 标签值
注意：此字段可能返回 null，表示取不到有效值。
   */
  TagValue?: string
}

/**
 * RecoverMigrateJob请求参数结构体
 */
export interface RecoverMigrateJobRequest {
  /**
   * 任务id
   */
  JobId: string
}

/**
 * OnlineDDL类型
 */
export interface OnlineDDL {
  /**
   * 状态
注意：此字段可能返回 null，表示取不到有效值。
   */
  Status: string
}

/**
 * DescribeSubscribeJobs返回参数结构体
 */
export interface DescribeSubscribeJobsResponse {
  /**
   * 符合查询条件的实例总数
   */
  TotalCount?: number
  /**
   * 数据订阅实例的信息列表
   */
  Items?: Array<SubscribeInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ResetSubscribe请求参数结构体
 */
export interface ResetSubscribeRequest {
  /**
   * 数据订阅实例的ID
   */
  SubscribeId: string
}

/**
 * 迁移对象选项，需要告知迁移服务迁移哪些库表对象
 */
export interface DatabaseTableObject {
  /**
   * 迁移对象类型 all(全实例)，partial(部分对象)
注意：此字段可能返回 null，表示取不到有效值。
   */
  ObjectMode: string
  /**
   * 迁移对象，当 ObjectMode 为 partial 时，不为空
注意：此字段可能返回 null，表示取不到有效值。
   */
  Databases?: Array<DBItem>
  /**
   * 高级对象类型，如trigger、function、procedure、event。注意：如果要迁移同步高级对象，此配置中应该包含对应的高级对象类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  AdvancedObjects?: Array<string>
}

/**
 * ModifyMigrateRuntimeAttribute请求参数结构体
 */
export interface ModifyMigrateRuntimeAttributeRequest {
  /**
   * 迁移任务id，如：dts-2rgv0f09
   */
  JobId: string
  /**
   * 需要修改的属性，此结构设计为通用结构，用于屏蔽多个业务的定制属性。<br>例如对于Redis:<br>{<br>	 "Key": "DstWriteMode",	//目标库写入模式<br> 	"Value": "normal"	          //clearData(清空目标实例数据)、overwrite(以覆盖写的方式执行任务)、normal(跟正常流程一样，不做额外动作，默认为此值) <br>},<br>{<br/>	 "Key": "IsDstReadOnly",	//是否在迁移时设置目标库只读<br/> 	"Value": "true"	          //true(设置只读)、false(不设置只读) <br/>}
   */
  OtherOptions: Array<KeyValuePairOption>
}

/**
 * PauseMigrateJob返回参数结构体
 */
export interface PauseMigrateJobResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 数据同步库表信息描述
 */
export interface Table {
  /**
   * 表名
注意：此字段可能返回 null，表示取不到有效值。
   */
  TableName?: string
  /**
   * 新表名
注意：此字段可能返回 null，表示取不到有效值。
   */
  NewTableName?: string
  /**
   * 过滤条件
注意：此字段可能返回 null，表示取不到有效值。
   */
  FilterCondition?: string
  /**
   * 是否同步表中所有列，All：当前表下的所有列,Partial(ModifySyncJobConfig接口里的对应字段ColumnMode暂不支持Partial)：当前表下的部分列，通过填充Columns字段详细表信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  ColumnMode?: string
  /**
   * 同步的列信息，当ColumnMode为Partial时，必填
注意：此字段可能返回 null，表示取不到有效值。
   */
  Columns?: Array<Column>
  /**
   * 同步临时表，注意此配置与NewTableName互斥，只能使用其中一种。当配置的同步对象为表级别且TableEditMode为pt时此项有意义，针对pt-osc等工具在同步过程中产生的临时表进行同步，需要提前将可能的临时表配置在这里，否则不会同步任何临时表。示例，如要对t1进行pt-osc操作，此项配置应该为["\_t1\_new","\_t1\_old"]；如要对t1进行gh-ost操作，此项配置应该为["\_t1\_ghc","\_t1\_gho","\_t1\_del"]，pt-osc与gh-ost产生的临时表可同时配置。
注意：此字段可能返回 null，表示取不到有效值。
   */
  TmpTables?: Array<string>
  /**
   * 编辑表类型，rename(表映射)，pt(同步附加表)
注意：此字段可能返回 null，表示取不到有效值。
   */
  TableEditMode?: string
}

/**
 * 订阅校验任务的提示信息
 */
export interface SubscribeCheckStepTip {
  /**
   * 错误或告警的详细信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  Message?: string
  /**
   * 帮助文档
注意：此字段可能返回 null，表示取不到有效值。
   */
  HelpDoc?: string
}

/**
 * 一致性校验详细信息
 */
export interface CompareDetailInfo {
  /**
   * 数据不一致的表详情
注意：此字段可能返回 null，表示取不到有效值。
   */
  Difference?: DifferenceDetail
  /**
   * 跳过校验的表详情
注意：此字段可能返回 null，表示取不到有效值。
   */
  Skipped?: SkippedDetail
  /**
   * 数据库不一致的详情，mongodb业务用到
注意：此字段可能返回 null，表示取不到有效值。
   */
  DifferenceAdvancedObjects?: DifferenceAdvancedObjectsDetail
  /**
   * 数据不一致的详情，mongodb业务用到
注意：此字段可能返回 null，表示取不到有效值。
   */
  DifferenceData?: DifferenceDataDetail
  /**
   * 数据行不一致的详情，mongodb业务用到
注意：此字段可能返回 null，表示取不到有效值。
   */
  DifferenceRow?: DifferenceRowDetail
}

/**
 * DescribeSubscribeJobs请求参数结构体
 */
export interface DescribeSubscribeJobsRequest {
  /**
   * 订阅 ID 筛选，精确匹配
   */
  SubscribeId?: string
  /**
   * 订阅 ID 筛选，精确匹配
   */
  SubscribeIds?: Array<string>
  /**
   * 订阅名称，前缀模糊匹配
   */
  SubscribeName?: string
  /**
   * 订阅的云上数据库实例的 ID，精确匹配
   */
  InstanceId?: string
  /**
   * 订阅的topicName
   */
  Topic?: string
  /**
   * 计费模式筛选，可能的值：0-包年包月，1-按量计费
   */
  PayType?: number
  /**
   * 订阅的数据库产品，目前支持 cynosdbmysql,mariadb,mongodb,mysql,percona,tdpg,tdsqlpercona(tdsqlmysql)
   */
  Product?: string
  /**
   * 数据订阅生命周期状态，可能的值为：正常 normal, 隔离中 isolating, 已隔离 isolated, 下线中 offlining，按量转包年包月中 post2PrePayIng
   */
  Status?: Array<string>
  /**
   * 数据订阅状态，可能的值为：未启动 notStarted, 校验中 checking, 校验不通过 checkNotPass, 校验通过 checkPass, 启动中 starting, 运行中 running, 异常出错 error
   */
  SubsStatus?: Array<string>
  /**
   * 返回记录的起始偏移量。默认0
   */
  Offset?: number
  /**
   * 单次返回的记录数量。默认20，最大100
   */
  Limit?: number
  /**
   * 排序方向，可选的值为"DESC"和"ASC"，默认为"DESC"，按创建时间逆序排序
   */
  OrderDirection?: string
  /**
   * tag 过滤条件，多个 TagFilter 之间关系为且
   */
  TagFilters?: Array<TagFilter>
}

/**
 * StartMigrateJob返回参数结构体
 */
export interface StartMigrateJobResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 数据一致性校验选项， 默认为不开启一致性校验
 */
export interface ConsistencyOption {
  /**
   * 一致性检测类型: full(全量检测迁移对象)、noCheck(不检测)、notConfigured(未配置)
注意：此字段可能返回 null，表示取不到有效值。
   */
  Mode?: string
}
