/* eslint-disable @typescript-eslint/no-unused-vars */
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
import { AbstractClient } from "../../../common/abstract_client"
import { ClientConfig } from "../../../common/interface"
import {
  ModifyCompareTaskResponse,
  DescribeSyncJobsResponse,
  ModifyMigrationJobResponse,
  ResetConsumerGroupOffsetResponse,
  ModifyMigrateRateLimitResponse,
  IsolateMigrateJobResponse,
  ModifyMigrateJobSpecRequest,
  IsolateSubscribeResponse,
  ModifyConsumerGroupPasswordRequest,
  StepTip,
  ModifySyncRateLimitResponse,
  DestroyMigrateJobRequest,
  ModifySubscribeNameRequest,
  OffsetTimeMap,
  SkipCheckItemResponse,
  ResumeSyncJobRequest,
  PartitionAssignment,
  RowsCountDifference,
  ResizeSyncJobResponse,
  CreateSubscribeCheckJobRequest,
  ResumeMigrateJobResponse,
  DifferenceItem,
  CreateModifyCheckSyncJobRequest,
  IsolateSyncJobRequest,
  PauseMigrateJobRequest,
  ContinueMigrateJobRequest,
  ResetConsumerGroupOffsetRequest,
  ModifySyncRateLimitRequest,
  DescribeCheckSyncJobResultRequest,
  ModifySubscribeAutoRenewFlagResponse,
  DestroySyncJobResponse,
  ErrorInfoItem,
  IsolateMigrateJobRequest,
  StopMigrateJobResponse,
  TableItem,
  SubscribeInfo,
  ModifyCompareTaskNameRequest,
  CompleteMigrateJobResponse,
  DescribeMigrateDBInstancesResponse,
  KeyValuePairOption,
  DifferenceData,
  CreateCheckSyncJobRequest,
  DescribeModifyCheckSyncJobResultResponse,
  StartSubscribeResponse,
  DescribeSubscribeReturnableRequest,
  DescribeMigrationDetailRequest,
  CreateConsumerGroupRequest,
  ResizeSyncJobRequest,
  DifferenceRowDetail,
  ModifySubscribeNameResponse,
  DdlOption,
  ConflictHandleOption,
  PipelineInfo,
  ResumeSyncJobResponse,
  RecoverMigrateJobResponse,
  ModifyCompareTaskNameResponse,
  StartSyncJobRequest,
  StartSubscribeRequest,
  ModifyMigrateRuntimeAttributeResponse,
  DescribeOffsetByTimeResponse,
  PauseSyncJobRequest,
  CreateMigrateCheckJobResponse,
  ModifySyncJobConfigRequest,
  ContinueMigrateJobResponse,
  CreateMigrationServiceRequest,
  DetailCheckItem,
  DescribeCompareTasksRequest,
  DestroyIsolatedSubscribeRequest,
  ResetSubscribeResponse,
  CompareObject,
  DescribeCompareReportResponse,
  RecoverSyncJobResponse,
  MigrateAction,
  ConfigureSubscribeJobResponse,
  DescribeConsumerGroupsRequest,
  GroupInfo,
  DeleteCompareTaskResponse,
  DBEndpointInfo,
  ResumeSubscribeRequest,
  ModifySyncJobConfigResponse,
  CompareColumnItem,
  DescribeSubscribeDetailResponse,
  ContinueSyncJobResponse,
  TradeInfo,
  DifferenceDataDetail,
  DeleteConsumerGroupRequest,
  ModifySubscribeAutoRenewFlagRequest,
  CompleteMigrateJobRequest,
  CreateConsumerGroupResponse,
  StopCompareRequest,
  SyncDBEndpointInfos,
  StartModifySyncJobRequest,
  DescribeCheckSyncJobResultResponse,
  StopSyncJobResponse,
  MigrateOption,
  DescribeSubscribeDetailRequest,
  SkippedDetail,
  SubsErr,
  CreateSubscribeResponse,
  CompareOptions,
  ModifyMigrateNameResponse,
  DescribeMigrationJobsResponse,
  ModifyMigrationJobRequest,
  StopCompareResponse,
  DestroyMigrateJobResponse,
  ProcessProgress,
  SkipSyncCheckItemRequest,
  DescribeModifyCheckSyncJobResultRequest,
  SkipSyncCheckItemResponse,
  IsolateSyncJobResponse,
  CreateMigrateCheckJobRequest,
  ModifyConsumerGroupPasswordResponse,
  DescribeMigrationJobsRequest,
  CompareTaskInfo,
  ModifyConsumerGroupDescriptionRequest,
  ContinueSyncJobRequest,
  ModifySubscribeObjectsResponse,
  CreateMigrationServiceResponse,
  KafkaOption,
  DescribeMigrationCheckJobResponse,
  StopSyncJobRequest,
  DifferenceDetail,
  DBInfo,
  TopicRule,
  DestroySyncJobRequest,
  ViewItem,
  CreateCheckSyncJobResponse,
  CreateSubscribeCheckJobResponse,
  AdvancedObjectsItem,
  Options,
  CompareObjectItem,
  ConfigureSyncJobRequest,
  StartModifySyncJobResponse,
  SubscribeCheckStepInfo,
  MigrateDBItem,
  DescribeMigrateDBInstancesRequest,
  CheckStepInfo,
  ProcessStepTip,
  ModifyCompareTaskRequest,
  RecoverSyncJobRequest,
  Database,
  Column,
  JobItem,
  DestroyIsolatedSubscribeResponse,
  ModifiedSubscribeObject,
  DescribeCompareTasksResponse,
  ResumeSubscribeResponse,
  DescribeSyncJobsRequest,
  SyncDetailInfo,
  DescribeConsumerGroupsResponse,
  ModifyMigrateRateLimitRequest,
  CompareTableItem,
  ConfigureSyncJobResponse,
  CompareViewItem,
  StepInfo,
  ModifyConsumerGroupDescriptionResponse,
  DifferenceAdvancedObjectsDetail,
  SubscribeObject,
  ResumeMigrateJobRequest,
  PauseSyncJobResponse,
  DescribeSubscribeCheckJobRequest,
  ModifySubscribeObjectsRequest,
  View,
  MonitorInfo,
  DescribeOffsetByTimeRequest,
  StartCompareResponse,
  DynamicOptions,
  CreateCompareTaskResponse,
  RateLimitOption,
  SkipCheckItemRequest,
  CompareAbstractInfo,
  CheckStep,
  CompareTaskItem,
  ModifyMigrateJobSpecResponse,
  CreateSyncJobResponse,
  CreateCompareTaskRequest,
  ErrInfo,
  StartCompareRequest,
  EndpointItem,
  DescribeMigrationCheckJobRequest,
  DescribeMigrationDetailResponse,
  CreateModifyCheckSyncJobResponse,
  ModifyMigrateNameRequest,
  CreateSubscribeRequest,
  StartSyncJobResponse,
  StartMigrateJobRequest,
  DistributeRule,
  Objects,
  DeleteConsumerGroupResponse,
  DBItem,
  DeleteCompareTaskRequest,
  MigrateDetailInfo,
  StopMigrateJobRequest,
  Endpoint,
  ConfigureSubscribeJobRequest,
  SyncJobInfo,
  DescribeSubscribeCheckJobResponse,
  RoleItem,
  TagFilter,
  StepDetailInfo,
  CreateSyncJobRequest,
  SubscribeKafkaConfig,
  DescribeCompareReportRequest,
  SkippedItem,
  IsolateSubscribeRequest,
  DescribeSubscribeReturnableResponse,
  TagItem,
  RecoverMigrateJobRequest,
  OnlineDDL,
  DescribeSubscribeJobsResponse,
  ResetSubscribeRequest,
  DatabaseTableObject,
  ModifyMigrateRuntimeAttributeRequest,
  PauseMigrateJobResponse,
  Table,
  SubscribeCheckStepTip,
  CompareDetailInfo,
  DescribeSubscribeJobsRequest,
  StartMigrateJobResponse,
  ConsistencyOption,
} from "./dts_models"

/**
 * dts client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("dts.tencentcloudapi.com", "2021-12-06", clientConfig)
  }

  /**
   * 本接口(ResumeSubscribe) 用于恢复报错的订阅任务。当订阅任务的状态为error时，可通过本接口尝试对任务进行恢复。
   */
  async ResumeSubscribe(
    req: ResumeSubscribeRequest,
    cb?: (error: string, rep: ResumeSubscribeResponse) => void
  ): Promise<ResumeSubscribeResponse> {
    return this.request("ResumeSubscribe", req, cb)
  }

  /**
   * 本接口用于校验检查项不通过后，可进行跳过此校验项操作，后端将不再校验该项。任何校验步骤都是不应该跳过的，通过校验是能正确执行的前置条件。支持跳过的产品及链路的校验项可 [参考文档](https://cloud.tencent.com/document/product/571/61639)。
   */
  async SkipSyncCheckItem(
    req: SkipSyncCheckItemRequest,
    cb?: (error: string, rep: SkipSyncCheckItemResponse) => void
  ): Promise<SkipSyncCheckItemResponse> {
    return this.request("SkipSyncCheckItem", req, cb)
  }

  /**
   * 本接口（DestroyIsolatedSubscribe）用于下线已隔离的数据订阅实例
   */
  async DestroyIsolatedSubscribe(
    req: DestroyIsolatedSubscribeRequest,
    cb?: (error: string, rep: DestroyIsolatedSubscribeResponse) => void
  ): Promise<DestroyIsolatedSubscribeResponse> {
    return this.request("DestroyIsolatedSubscribe", req, cb)
  }

  /**
   * 在修改同步任务的配置后、通过该接口校验当前任务是否支持修改对象操作
   */
  async CreateModifyCheckSyncJob(
    req: CreateModifyCheckSyncJobRequest,
    cb?: (error: string, rep: CreateModifyCheckSyncJobResponse) => void
  ): Promise<CreateModifyCheckSyncJobResponse> {
    return this.request("CreateModifyCheckSyncJob", req, cb)
  }

  /**
   * 配置迁移服务，配置成功后可通过`CreateMigrationCheckJob` 创建迁移校验任务接口发起校验任务，只有校验通过才能启动迁移任务。
   */
  async ModifyMigrationJob(
    req: ModifyMigrationJobRequest,
    cb?: (error: string, rep: ModifyMigrationJobResponse) => void
  ): Promise<ModifyMigrationJobResponse> {
    return this.request("ModifyMigrationJob", req, cb)
  }

  /**
   * 查询同步任务信息
   */
  async DescribeSyncJobs(
    req: DescribeSyncJobsRequest,
    cb?: (error: string, rep: DescribeSyncJobsResponse) => void
  ): Promise<DescribeSyncJobsResponse> {
    return this.request("DescribeSyncJobs", req, cb)
  }

  /**
   * 修改任务运行时属性，此接口不同于配置类接口，不会进行状态机判断。
   */
  async ModifyMigrateRuntimeAttribute(
    req: ModifyMigrateRuntimeAttributeRequest,
    cb?: (error: string, rep: ModifyMigrateRuntimeAttributeResponse) => void
  ): Promise<ModifyMigrateRuntimeAttributeResponse> {
    return this.request("ModifyMigrateRuntimeAttribute", req, cb)
  }

  /**
   * 购买迁移任务。购买成功后会返回随机生成的迁移任务id列表，也可以通过查询迁移任务任务列表接口`DescribeMigrationJobs`看到购买成功的实例Id。注意，一旦购买成功后源及目标数据库类型，源及目标实例地域不可修改。
   */
  async CreateMigrationService(
    req: CreateMigrationServiceRequest,
    cb?: (error: string, rep: CreateMigrationServiceResponse) => void
  ): Promise<CreateMigrationServiceResponse> {
    return this.request("CreateMigrationService", req, cb)
  }

  /**
   * 本接口(DescribeSubscribes)获取数据订阅实例信息列表，默认分页，每次返回20条
   */
  async DescribeSubscribeJobs(
    req: DescribeSubscribeJobsRequest,
    cb?: (error: string, rep: DescribeSubscribeJobsResponse) => void
  ): Promise<DescribeSubscribeJobsResponse> {
    return this.request("DescribeSubscribeJobs", req, cb)
  }

  /**
   * 用户在发现迁移任务对用户的数据库的负载影响较大时、可通过该接口限制任务的传输速率
   */
  async ModifyMigrateRateLimit(
    req: ModifyMigrateRateLimitRequest,
    cb?: (error: string, rep: ModifyMigrateRateLimitResponse) => void
  ): Promise<ModifyMigrateRateLimitResponse> {
    return this.request("ModifyMigrateRateLimit", req, cb)
  }

  /**
   * 本接口(DescribeSubscribeReturnable)用于查询订阅任务是否可以销毁和退货。
   */
  async DescribeSubscribeReturnable(
    req: DescribeSubscribeReturnableRequest,
    cb?: (error: string, rep: DescribeSubscribeReturnableResponse) => void
  ): Promise<DescribeSubscribeReturnableResponse> {
    return this.request("DescribeSubscribeReturnable", req, cb)
  }

  /**
   * 隔离同步任务，隔离后可通过查询同步任务信息接口DescribeSyncJobs获取隔离后状态。在任务隔离后可进行解除隔离(RecoverSyncJob)操作或直接进行下线操作。对于不计费任务，调用此接口后会直接删除任务，无法进行恢复操作。
   */
  async IsolateSyncJob(
    req: IsolateSyncJobRequest,
    cb?: (error: string, rep: IsolateSyncJobResponse) => void
  ): Promise<IsolateSyncJobResponse> {
    return this.request("IsolateSyncJob", req, cb)
  }

  /**
   * 终止一致性校验任务
   */
  async StopCompare(
    req: StopCompareRequest,
    cb?: (error: string, rep: StopCompareResponse) => void
  ): Promise<StopCompareResponse> {
    return this.request("StopCompare", req, cb)
  }

  /**
   * 创建一个同步任务
   */
  async CreateSyncJob(
    req: CreateSyncJobRequest,
    cb?: (error: string, rep: CreateSyncJobResponse) => void
  ): Promise<CreateSyncJobResponse> {
    return this.request("CreateSyncJob", req, cb)
  }

  /**
   * 本接口(ConfigureSubscribeJob)用于配置数据订阅实例。
   */
  async ConfigureSubscribeJob(
    req: ConfigureSubscribeJobRequest,
    cb?: (error: string, rep: ConfigureSubscribeJobResponse) => void
  ): Promise<ConfigureSubscribeJobResponse> {
    return this.request("ConfigureSubscribeJob", req, cb)
  }

  /**
   * 本接口(DescribeConsumerGroups)用于获取订阅实例配置的消费者组详情。
   */
  async DescribeConsumerGroups(
    req: DescribeConsumerGroupsRequest,
    cb?: (error: string, rep: DescribeConsumerGroupsResponse) => void
  ): Promise<DescribeConsumerGroupsResponse> {
    return this.request("DescribeConsumerGroups", req, cb)
  }

  /**
   * 为订阅实例创建消费者组
   */
  async CreateConsumerGroup(
    req: CreateConsumerGroupRequest,
    cb?: (error: string, rep: CreateConsumerGroupResponse) => void
  ): Promise<CreateConsumerGroupResponse> {
    return this.request("CreateConsumerGroup", req, cb)
  }

  /**
   * 本接口(ResetConsumerGroupOffset)用于重置订阅消费组的offset。调用DescribeConsumerGroups接口查询消费组状态，只有消费组状态为 Dead 或 Empty 才可以执行重置该操作。否则重置不会生效，接口也不会报错。
   */
  async ResetConsumerGroupOffset(
    req: ResetConsumerGroupOffsetRequest,
    cb?: (error: string, rep: ResetConsumerGroupOffsetResponse) => void
  ): Promise<ResetConsumerGroupOffsetResponse> {
    return this.request("ResetConsumerGroupOffset", req, cb)
  }

  /**
   * 删除一致性校验任务。当一致性校验任务状态为success、failed、canceled 时可以执行此操作。
   */
  async DeleteCompareTask(
    req: DeleteCompareTaskRequest,
    cb?: (error: string, rep: DeleteCompareTaskResponse) => void
  ): Promise<DeleteCompareTaskResponse> {
    return this.request("DeleteCompareTask", req, cb)
  }

  /**
   * 本接口(StartSubscribe)用于启动一个kafka版本的数据订阅实例。只有当订阅任务的状态为checkPass时，才能调用本接口。
   */
  async StartSubscribe(
    req: StartSubscribeRequest,
    cb?: (error: string, rep: StartSubscribeResponse) => void
  ): Promise<StartSubscribeResponse> {
    return this.request("StartSubscribe", req, cb)
  }

  /**
   * 启动同步任务
   */
  async StartSyncJob(
    req: StartSyncJobRequest,
    cb?: (error: string, rep: StartSyncJobResponse) => void
  ): Promise<StartSyncJobResponse> {
    return this.request("StartSyncJob", req, cb)
  }

  /**
   * 结束同步任务，操作后可通过查询同步任务信息接口DescribeSyncJobs，获取操作后的状态。
   */
  async StopSyncJob(
    req: StopSyncJobRequest,
    cb?: (error: string, rep: StopSyncJobResponse) => void
  ): Promise<StopSyncJobResponse> {
    return this.request("StopSyncJob", req, cb)
  }

  /**
   * 校验同步任务，检查必要参数和周边配置。
   */
  async CreateCheckSyncJob(
    req: CreateCheckSyncJobRequest,
    cb?: (error: string, rep: CreateCheckSyncJobResponse) => void
  ): Promise<CreateCheckSyncJobResponse> {
    return this.request("CreateCheckSyncJob", req, cb)
  }

  /**
   * 查询一致性校验任务详情
   */
  async DescribeCompareReport(
    req: DescribeCompareReportRequest,
    cb?: (error: string, rep: DescribeCompareReportResponse) => void
  ): Promise<DescribeCompareReportResponse> {
    return this.request("DescribeCompareReport", req, cb)
  }

  /**
   * 恢复一个暂停中的迁移任务。
   */
  async ContinueMigrateJob(
    req: ContinueMigrateJobRequest,
    cb?: (error: string, rep: ContinueMigrateJobResponse) => void
  ): Promise<ContinueMigrateJobResponse> {
    return this.request("ContinueMigrateJob", req, cb)
  }

  /**
   * 暂停一个迁移任务。
   */
  async PauseMigrateJob(
    req: PauseMigrateJobRequest,
    cb?: (error: string, rep: PauseMigrateJobResponse) => void
  ): Promise<PauseMigrateJobResponse> {
    return this.request("PauseMigrateJob", req, cb)
  }

  /**
   * 本接口(ModifySubscribeObjects)用于修改数据订阅对象和kafka分区规则，如果是mongo订阅，还可以修改输出聚合规则。
   */
  async ModifySubscribeObjects(
    req: ModifySubscribeObjectsRequest,
    cb?: (error: string, rep: ModifySubscribeObjectsResponse) => void
  ): Promise<ModifySubscribeObjectsResponse> {
    return this.request("ModifySubscribeObjects", req, cb)
  }

  /**
   * 配置一个同步任务
   */
  async ConfigureSyncJob(
    req: ConfigureSyncJobRequest,
    cb?: (error: string, rep: ConfigureSyncJobResponse) => void
  ): Promise<ConfigureSyncJobResponse> {
    return this.request("ConfigureSyncJob", req, cb)
  }

  /**
   * 本接口（IsolateSubscribe）用于隔离订阅任务。调用后，订阅任务将不能使用。按量计费的任务会停止计费，包年包月的任务会自动退费
   */
  async IsolateSubscribe(
    req: IsolateSubscribeRequest,
    cb?: (error: string, rep: IsolateSubscribeResponse) => void
  ): Promise<IsolateSubscribeResponse> {
    return this.request("IsolateSubscribe", req, cb)
  }

  /**
   * 在查询修改对象的校验任务的结果中的status为success后、通过该接口开始修改配置流程
   */
  async StartModifySyncJob(
    req: StartModifySyncJobRequest,
    cb?: (error: string, rep: StartModifySyncJobResponse) => void
  ): Promise<StartModifySyncJobResponse> {
    return this.request("StartModifySyncJob", req, cb)
  }

  /**
   * 调整同步任务规格，此接口只支持按量计费任务的调整，调用此接口后不会立即生效，后台调整时间大概为3~5分钟。调用此接口后可通过查询同步任务信息接口DescribeSyncJobs，获取变配后的状态。
   */
  async ResizeSyncJob(
    req: ResizeSyncJobRequest,
    cb?: (error: string, rep: ResizeSyncJobResponse) => void
  ): Promise<ResizeSyncJobResponse> {
    return this.request("ResizeSyncJob", req, cb)
  }

  /**
   * 修改订阅实例自动续费标识。只有包年包月的任务修改才有意义，按量计费任务修改后无影响。
   */
  async ModifySubscribeAutoRenewFlag(
    req: ModifySubscribeAutoRenewFlagRequest,
    cb?: (error: string, rep: ModifySubscribeAutoRenewFlagResponse) => void
  ): Promise<ModifySubscribeAutoRenewFlagResponse> {
    return this.request("ModifySubscribeAutoRenewFlag", req, cb)
  }

  /**
     * 该接口支持在同步任务启动后修改任务的配置
修改同步配置的完整流程：修改同步任务配置->创建修改同步任务配置的校验任务->查询修改配置的校验任务的结果->启动修改配置任务
     */
  async ModifySyncJobConfig(
    req: ModifySyncJobConfigRequest,
    cb?: (error: string, rep: ModifySyncJobConfigResponse) => void
  ): Promise<ModifySyncJobConfigResponse> {
    return this.request("ModifySyncJobConfig", req, cb)
  }

  /**
   * 重试数据迁移任务，针对异常情况可进行重试，对于redis在失败时也可重试。注意：此操作跳过校验阶段，直接重新发起任务，相当于从StartMigrationJob开始执行。调用此接口后可通过查询迁移服务列表接口`DescribeMigrationJobs`来查询当前任务状态。
   */
  async ResumeMigrateJob(
    req: ResumeMigrateJobRequest,
    cb?: (error: string, rep: ResumeMigrateJobResponse) => void
  ): Promise<ResumeMigrateJobResponse> {
    return this.request("ResumeMigrateJob", req, cb)
  }

  /**
     * 本接口（StopMigrateJob）用于终止数据迁移任务。
调用此接口后可通过查询迁移服务列表接口`DescribeMigrationJobs`来查询当前任务状态。
     */
  async StopMigrateJob(
    req: StopMigrateJobRequest,
    cb?: (error: string, rep: StopMigrateJobResponse) => void
  ): Promise<StopMigrateJobResponse> {
    return this.request("StopMigrateJob", req, cb)
  }

  /**
   * 暂停处于同步中的数据同步任务。
   */
  async PauseSyncJob(
    req: PauseSyncJobRequest,
    cb?: (error: string, rep: PauseSyncJobResponse) => void
  ): Promise<PauseSyncJobResponse> {
    return this.request("PauseSyncJob", req, cb)
  }

  /**
   * 用户在发现同步任务对用户的数据库的负载影响较大时、可通过该接口限制任务的传输速率
   */
  async ModifySyncRateLimit(
    req: ModifySyncRateLimitRequest,
    cb?: (error: string, rep: ModifySyncRateLimitResponse) => void
  ): Promise<ModifySyncRateLimitResponse> {
    return this.request("ModifySyncRateLimit", req, cb)
  }

  /**
   * 启动一致性校验任务，启动之前需要先通过接口`CreateCompareTask` 创建一致性校验任务，启动后可通过接口`DescribeCompareTasks` 查询一致性校验任务列表来获得启动后的状态
   */
  async StartCompare(
    req: StartCompareRequest,
    cb?: (error: string, rep: StartCompareResponse) => void
  ): Promise<StartCompareResponse> {
    return this.request("StartCompare", req, cb)
  }

  /**
   * 本接口(DescribeSubscribeCheckJob)用于查询订阅校验任务结果。
   */
  async DescribeSubscribeCheckJob(
    req: DescribeSubscribeCheckJobRequest,
    cb?: (error: string, rep: DescribeSubscribeCheckJobResponse) => void
  ): Promise<DescribeSubscribeCheckJobResponse> {
    return this.request("DescribeSubscribeCheckJob", req, cb)
  }

  /**
   * 恢复处于已暂停状态的数据同步任务。
   */
  async ContinueSyncJob(
    req: ContinueSyncJobRequest,
    cb?: (error: string, rep: ContinueSyncJobResponse) => void
  ): Promise<ContinueSyncJobResponse> {
    return this.request("ContinueSyncJob", req, cb)
  }

  /**
   *  隔离退还数据迁移服务。调用此接口后可通过查询迁移服务列表接口`DescribeMigrationJobs`来查询当前任务状态。对于计费任务，在任务隔离后可进行解除隔离(RecoverMigrationJob)操作或直接进行下线销毁(DestroyMigrateJob)操作。对于不计费任务，调用此接口会直接销毁任务，无法进行恢复操作。
   */
  async IsolateMigrateJob(
    req: IsolateMigrateJobRequest,
    cb?: (error: string, rep: IsolateMigrateJobResponse) => void
  ): Promise<IsolateMigrateJobResponse> {
    return this.request("IsolateMigrateJob", req, cb)
  }

  /**
   * 本接口(ModifyConsumerGroupDescription)用于修改指定订阅消费组备注。
   */
  async ModifyConsumerGroupDescription(
    req: ModifyConsumerGroupDescriptionRequest,
    cb?: (error: string, rep: ModifyConsumerGroupDescriptionResponse) => void
  ): Promise<ModifyConsumerGroupDescriptionResponse> {
    return this.request("ModifyConsumerGroupDescription", req, cb)
  }

  /**
   * 本接口用于查询支持迁移的云数据库实例
   */
  async DescribeMigrateDBInstances(
    req: DescribeMigrateDBInstancesRequest,
    cb?: (error: string, rep: DescribeMigrateDBInstancesResponse) => void
  ): Promise<DescribeMigrateDBInstancesResponse> {
    return this.request("DescribeMigrateDBInstances", req, cb)
  }

  /**
   * 本接口用于校验检查项不通过后，可进行跳过此校验项操作，后端将不再校验该项。任何校验步骤都是不应该跳过的，通过校验是能正确执行的前置条件。支持跳过的产品及链路的校验项可 [参考文档](https://cloud.tencent.com/document/product/571/61639)。
   */
  async SkipCheckItem(
    req: SkipCheckItemRequest,
    cb?: (error: string, rep: SkipCheckItemResponse) => void
  ): Promise<SkipCheckItemResponse> {
    return this.request("SkipCheckItem", req, cb)
  }

  /**
   * 本接口(ModifyConsumerGroupPassword)用于修改指定订阅消费组密码。
   */
  async ModifyConsumerGroupPassword(
    req: ModifyConsumerGroupPasswordRequest,
    cb?: (error: string, rep: ModifyConsumerGroupPasswordResponse) => void
  ): Promise<ModifyConsumerGroupPasswordResponse> {
    return this.request("ModifyConsumerGroupPassword", req, cb)
  }

  /**
   * 本接口(CreateSubscribeCheckJob)用于创建一个订阅校验任务。任务必须已经成功调用ConfigureSubscribeJob接口配置了所有的必要信息才能启动校验。
   */
  async CreateSubscribeCheckJob(
    req: CreateSubscribeCheckJobRequest,
    cb?: (error: string, rep: CreateSubscribeCheckJobResponse) => void
  ): Promise<CreateSubscribeCheckJobResponse> {
    return this.request("CreateSubscribeCheckJob", req, cb)
  }

  /**
     * 校验迁移任务，
在开始迁移前, 必须调用本接口创建校验迁移任务, 且校验成功后才能开始迁移. 校验的结果可以通过DescribeMigrationCheckJob查看，
校验成功后,迁移任务若有修改, 则必须重新校验并通过后, 才能开始迁移

     */
  async CreateMigrateCheckJob(
    req: CreateMigrateCheckJobRequest,
    cb?: (error: string, rep: CreateMigrateCheckJobResponse) => void
  ): Promise<CreateMigrateCheckJobResponse> {
    return this.request("CreateMigrateCheckJob", req, cb)
  }

  /**
   * 查询同步校验任务结果，检查必要参数和周边配置
   */
  async DescribeCheckSyncJobResult(
    req: DescribeCheckSyncJobResultRequest,
    cb?: (error: string, rep: DescribeCheckSyncJobResultResponse) => void
  ): Promise<DescribeCheckSyncJobResultResponse> {
    return this.request("DescribeCheckSyncJobResult", req, cb)
  }

  /**
   * 查询一致性校验任务列表，调用该接口后可通过接口`DescribeCompareTasks` 查询一致性校验任务列表来获得启动后的状态。
   */
  async DescribeCompareTasks(
    req: DescribeCompareTasksRequest,
    cb?: (error: string, rep: DescribeCompareTasksResponse) => void
  ): Promise<DescribeCompareTasksResponse> {
    return this.request("DescribeCompareTasks", req, cb)
  }

  /**
   * 修改一致性校验任务，在任务创建后启动之前，可修改一致性校验参数
   */
  async ModifyCompareTask(
    req: ModifyCompareTaskRequest,
    cb?: (error: string, rep: ModifyCompareTaskResponse) => void
  ): Promise<ModifyCompareTaskResponse> {
    return this.request("ModifyCompareTask", req, cb)
  }

  /**
   * 本接口(DescribeSubscribeDetail)获取数据订阅实例的配置信息。
   */
  async DescribeSubscribeDetail(
    req: DescribeSubscribeDetailRequest,
    cb?: (error: string, rep: DescribeSubscribeDetailResponse) => void
  ): Promise<DescribeSubscribeDetailResponse> {
    return this.request("DescribeSubscribeDetail", req, cb)
  }

  /**
   * 本接口(DeleteConsumerGroup)用于删除一个订阅任务的消费组。
   */
  async DeleteConsumerGroup(
    req: DeleteConsumerGroupRequest,
    cb?: (error: string, rep: DeleteConsumerGroupResponse) => void
  ): Promise<DeleteConsumerGroupResponse> {
    return this.request("DeleteConsumerGroup", req, cb)
  }

  /**
   * 查询数据迁移任务列表
   */
  async DescribeMigrationJobs(
    req: DescribeMigrationJobsRequest,
    cb?: (error: string, rep: DescribeMigrationJobsResponse) => void
  ): Promise<DescribeMigrationJobsResponse> {
    return this.request("DescribeMigrationJobs", req, cb)
  }

  /**
   * 解除隔离数据迁移任务，用户手动发起隔离后的手动解隔离，只有任务状态为已隔离(手动操作)状态下才能触发此操作。调用此接口后可通过查询迁移服务列表接口`DescribeMigrationJobs`来查询当前任务状态。
   */
  async RecoverMigrateJob(
    req: RecoverMigrateJobRequest,
    cb?: (error: string, rep: RecoverMigrateJobResponse) => void
  ): Promise<RecoverMigrateJobResponse> {
    return this.request("RecoverMigrateJob", req, cb)
  }

  /**
   * 本接口(CreateSubscribe)用于创建一个数据订阅任务。
   */
  async CreateSubscribe(
    req: CreateSubscribeRequest,
    cb?: (error: string, rep: CreateSubscribeResponse) => void
  ): Promise<CreateSubscribeResponse> {
    return this.request("CreateSubscribe", req, cb)
  }

  /**
   * 解除隔离同步任务，任务在已隔离状态下可调用该接口解除隔离状态任务，同时可通过查询同步任务信息接口DescribeSyncJobs，获取操作后状态。
   */
  async RecoverSyncJob(
    req: RecoverSyncJobRequest,
    cb?: (error: string, rep: RecoverSyncJobResponse) => void
  ): Promise<RecoverSyncJobResponse> {
    return this.request("RecoverSyncJob", req, cb)
  }

  /**
     * 本接口(ResetSubscribe)用于重置订阅实例，重置后，可以重新配置订阅任务。
可以调用 DescribeSubscribeDetail 查询订阅信息判断是否置成功。当SubsStatus变为notStarted时，表示重置成功。
     */
  async ResetSubscribe(
    req: ResetSubscribeRequest,
    cb?: (error: string, rep: ResetSubscribeResponse) => void
  ): Promise<ResetSubscribeResponse> {
    return this.request("ResetSubscribe", req, cb)
  }

  /**
   * 本接口用于创建数据对比任务，创建成功后会返回数据对比任务 ID，形如：dts-8yv4w2i1-cmp-37skmii9，创建成功后可通过StartCompare启动一致性校验任务
   */
  async CreateCompareTask(
    req: CreateCompareTaskRequest,
    cb?: (error: string, rep: CreateCompareTaskResponse) => void
  ): Promise<CreateCompareTaskResponse> {
    return this.request("CreateCompareTask", req, cb)
  }

  /**
   * 在创建修改对象的校验任务后、通过该接口查看校验任务的结果
   */
  async DescribeModifyCheckSyncJobResult(
    req: DescribeModifyCheckSyncJobResultRequest,
    cb?: (error: string, rep: DescribeModifyCheckSyncJobResultResponse) => void
  ): Promise<DescribeModifyCheckSyncJobResultResponse> {
    return this.request("DescribeModifyCheckSyncJobResult", req, cb)
  }

  /**
   * 本接口(ModifySubscribeName)用于修改数据订阅实例的名称
   */
  async ModifySubscribeName(
    req: ModifySubscribeNameRequest,
    cb?: (error: string, rep: ModifySubscribeNameResponse) => void
  ): Promise<ModifySubscribeNameResponse> {
    return this.request("ModifySubscribeName", req, cb)
  }

  /**
   * 下线数据迁移任务。计费任务必须先调用隔离(IsolateMigrateJob)接口，且只有是**已隔离**状态下，才能调用此接口销毁任务。对于不计费任务，调用隔离(IsolateMigrateJob)接口删除任务操作。
   */
  async DestroyMigrateJob(
    req: DestroyMigrateJobRequest,
    cb?: (error: string, rep: DestroyMigrateJobResponse) => void
  ): Promise<DestroyMigrateJobResponse> {
    return this.request("DestroyMigrateJob", req, cb)
  }

  /**
   * 查询某个迁移任务详情
   */
  async DescribeMigrationDetail(
    req: DescribeMigrationDetailRequest,
    cb?: (error: string, rep: DescribeMigrationDetailResponse) => void
  ): Promise<DescribeMigrationDetailResponse> {
    return this.request("DescribeMigrationDetail", req, cb)
  }

  /**
     * 本接口(DescribeOffsetByTime)查询KafkaTopic中指定时间前最近的offset。
接口输出的offset是离这个时间最近的offset。
如果输入时间比当前时间晚的多，相当于输出的就是最新的offset；
如果输入时间比当前时间早的多，相当于输出的就是最老的offset；
如果输入空，默认0时间，也就是查询最老的offset。
     */
  async DescribeOffsetByTime(
    req: DescribeOffsetByTimeRequest,
    cb?: (error: string, rep: DescribeOffsetByTimeResponse) => void
  ): Promise<DescribeOffsetByTimeResponse> {
    return this.request("DescribeOffsetByTime", req, cb)
  }

  /**
   * 重试同步任务，部分可恢复报错情况下，可通过该接口重试同步任务，可通过查询同步任务信息接口DescribeSyncJobs，获取操作后状态。
   */
  async ResumeSyncJob(
    req: ResumeSyncJobRequest,
    cb?: (error: string, rep: ResumeSyncJobResponse) => void
  ): Promise<ResumeSyncJobResponse> {
    return this.request("ResumeSyncJob", req, cb)
  }

  /**
     * 本接口用于创建校验后,获取校验的结果. 能查询到当前校验的状态和进度. 
若通过校验, 则可调用'StartMigrateJob' 开始迁移.
若未通过校验, 则能查询到校验失败的原因. 请按照报错, 通过'ModifyMigrationJob'修改迁移配置或是调整源/目标实例的相关参数.
     */
  async DescribeMigrationCheckJob(
    req: DescribeMigrationCheckJobRequest,
    cb?: (error: string, rep: DescribeMigrationCheckJobResponse) => void
  ): Promise<DescribeMigrationCheckJobResponse> {
    return this.request("DescribeMigrationCheckJob", req, cb)
  }

  /**
   * 本接口（StartMigrationJob）用于启动迁移任务。调用此接口后可通过查询迁移服务列表接口`DescribeMigrationJobs`来查询当前任务状态。
   */
  async StartMigrateJob(
    req: StartMigrateJobRequest,
    cb?: (error: string, rep: StartMigrateJobResponse) => void
  ): Promise<StartMigrateJobResponse> {
    return this.request("StartMigrateJob", req, cb)
  }

  /**
   * 调整实例规格，此接口只支持按量计费任务的调整。调用此接口后可通过查询迁移服务列表接口`DescribeMigrationJobs`来查询当前任务状态。
   */
  async ModifyMigrateJobSpec(
    req: ModifyMigrateJobSpecRequest,
    cb?: (error: string, rep: ModifyMigrateJobSpecResponse) => void
  ): Promise<ModifyMigrateJobSpecResponse> {
    return this.request("ModifyMigrateJobSpec", req, cb)
  }

  /**
   * 下线同步任务，任务在已隔离状态下可以通过此操作进行任务下线，即彻底删除任务。下线操作后可通过查询同步任务信息接口DescribeSyncJobs获取任务列表查看状态，此操作成功后无法看到此任务表示下线成功。
   */
  async DestroySyncJob(
    req: DestroySyncJobRequest,
    cb?: (error: string, rep: DestroySyncJobResponse) => void
  ): Promise<DestroySyncJobResponse> {
    return this.request("DestroySyncJob", req, cb)
  }

  /**
   * 修改一致性校验任务名称
   */
  async ModifyCompareTaskName(
    req: ModifyCompareTaskNameRequest,
    cb?: (error: string, rep: ModifyCompareTaskNameResponse) => void
  ): Promise<ModifyCompareTaskNameResponse> {
    return this.request("ModifyCompareTaskName", req, cb)
  }

  /**
   * 修改迁移任务名
   */
  async ModifyMigrateName(
    req: ModifyMigrateNameRequest,
    cb?: (error: string, rep: ModifyMigrateNameResponse) => void
  ): Promise<ModifyMigrateNameResponse> {
    return this.request("ModifyMigrateName", req, cb)
  }

  /**
     * 本接口（CompleteMigrateJob）用于完成数据迁移任务。
选择采用增量迁移方式的任务, 需要在迁移进度进入准备完成阶段后, 调用本接口, 停止迁移增量数据。
通过DescribeMigrationJobs接口查询到任务的状态为准备完成（Status="readyComplete"）时，此时可以调用本接口完成迁移任务。

     */
  async CompleteMigrateJob(
    req: CompleteMigrateJobRequest,
    cb?: (error: string, rep: CompleteMigrateJobResponse) => void
  ): Promise<CompleteMigrateJobResponse> {
    return this.request("CompleteMigrateJob", req, cb)
  }
}
