/* eslint-disable @typescript-eslint/no-unused-vars */
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
import { AbstractClient } from "../../../common/abstract_client"
import { ClientConfig } from "../../../common/interface"
import {
  DescribeBackupCheckJobRequest,
  BackupStrategy,
  IncrementBackup,
  TestItem,
  DescribeBackupPlanDetailRequest,
  DeleteBackupPlanResponse,
  FullBackupErrorMessage,
  DescribeConnectTestResultResponse,
  BackupFile,
  DescribeIncrementBackupSetFilesResponse,
  ConfigureBackupPlanResponse,
  BackupPlanInfo,
  TagInfo,
  BackupPeriodItem,
  DescribeBackupPlansResponse,
  StartBackupCheckJobRequest,
  BackupSetOption,
  DescribeConnectTestResultRequest,
  ResourceDetail,
  BackupObjectItem,
  ResourceItemDetail,
  FullBackupProgress,
  StorageTieredStrategy,
  DestroyBackupPlanByUserRequest,
  StartBackupPlanResponse,
  BackupObject,
  CreateBackupPlanResponse,
  ModifyBackupPlanSourceInfoResponse,
  DescribeFullBackupSetDetailRequest,
  FullBackupSetDetail,
  BackupTableItem,
  DescribeFullBackupSetDetailResponse,
  BackupPeriod,
  Endpoint,
  StopBackupPlanResponse,
  ResumeBackupPlanRequest,
  RestoreRange,
  DescribeBackupPlanDetailResponse,
  DestroyBackupPlanByUserResponse,
  TagFilter,
  StorageStrategySingle,
  BackupProgress,
  ConfigureBackupPlanRequest,
  StartBackupPlanRequest,
  DeleteBackupPlanRequest,
  DescribeBackupCheckJobResponse,
  BackupStrategyItem,
  StopBackupPlanRequest,
  DescribeIncrementBackupSetsRequest,
  CreateConnectTestJobRequest,
  BackupColumnItem,
  BackupPlanPayInfo,
  DescribeBackupPlansRequest,
  BackupEndpoint,
  ModifyBackupPlanSourceInfoRequest,
  StartBackupCheckJobResponse,
  DescribeIncrementBackupSetFilesRequest,
  Tag,
  CreateBackupPlanRequest,
  StorageStrategyItem,
  ResumeBackupPlanResponse,
  DescribeIncrementBackupSetsResponse,
  ErrorInfo,
  ConnectTestResult,
  CreateConnectTestJobResponse,
  StorageStrategy,
} from "./dbs_models"

/**
 * dbs client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("dbs.tencentcloudapi.com", "2021-11-08", clientConfig)
  }

  /**
     * 删除备份计划。

仅已下线的备份计划支持删除，删除后不可恢复。已隔离（isolated）的备份计划请先调用 DestroyBackupPlanByUser 完成下线，再进行删除。调用接口后，若通过 DescribeBackupPlans 接口查询不到对应的备份计划，则表示删除成功。
     */
  async DeleteBackupPlan(
    req: DeleteBackupPlanRequest,
    cb?: (error: string, rep: DeleteBackupPlanResponse) => void
  ): Promise<DeleteBackupPlanResponse> {
    return this.request("DeleteBackupPlan", req, cb)
  }

  /**
   * 该接口用于创建连通性检测任务，请在创建备份计划前，通过该接口来检测你的源端实例是否连通性正常。
   */
  async CreateConnectTestJob(
    req: CreateConnectTestJobRequest,
    cb?: (error: string, rep: CreateConnectTestJobResponse) => void
  ): Promise<CreateConnectTestJobResponse> {
    return this.request("CreateConnectTestJob", req, cb)
  }

  /**
   * 本接口（StartBackupCheckJob）用于创建备份计划预校验任务。
   */
  async StartBackupCheckJob(
    req: StartBackupCheckJobRequest,
    cb?: (error: string, rep: StartBackupCheckJobResponse) => void
  ): Promise<StartBackupCheckJobResponse> {
    return this.request("StartBackupCheckJob", req, cb)
  }

  /**
     * 立即下线已隔离的备份计划。

下线后备份计划不可恢复。调用接口后，若通过 DescribeBackupPlanDetail 接口查询到备份计划状态为 offlined，则表示下线成功。
     */
  async DestroyBackupPlanByUser(
    req: DestroyBackupPlanByUserRequest,
    cb?: (error: string, rep: DestroyBackupPlanByUserResponse) => void
  ): Promise<DestroyBackupPlanByUserResponse> {
    return this.request("DestroyBackupPlanByUser", req, cb)
  }

  /**
     * 恢复已暂停的备份计划。

仅已暂停的备份计划支持恢复。调用接口后，若通过 DescribeBackupPlanDetail 接口查询到备份计划状态为 running，则表示恢复成功。
     */
  async ResumeBackupPlan(
    req: ResumeBackupPlanRequest,
    cb?: (error: string, rep: ResumeBackupPlanResponse) => void
  ): Promise<ResumeBackupPlanResponse> {
    return this.request("ResumeBackupPlan", req, cb)
  }

  /**
   * 本接口（StartBackupPlan）用于启动备份计划。调用此接口前，请务必先使用 StartBackupCheckJob 创建备份计划预校验任务，并通过 DescribeBackupCheckJob 接口查询到任务状态为校验通过时，才能启动备份计划。
   */
  async StartBackupPlan(
    req: StartBackupPlanRequest,
    cb?: (error: string, rep: StartBackupPlanResponse) => void
  ): Promise<StartBackupPlanResponse> {
    return this.request("StartBackupPlan", req, cb)
  }

  /**
     * 查询增量备份集文件列表。

文件按最后修改时间倒序返回，支持分页。
     */
  async DescribeIncrementBackupSetFiles(
    req: DescribeIncrementBackupSetFilesRequest,
    cb?: (error: string, rep: DescribeIncrementBackupSetFilesResponse) => void
  ): Promise<DescribeIncrementBackupSetFilesResponse> {
    return this.request("DescribeIncrementBackupSetFiles", req, cb)
  }

  /**
     * 查询备份计划详情。
返回备份计划的基本信息、源库信息、备份对象、备份策略、备份进度和付费信息。
     */
  async DescribeBackupPlanDetail(
    req: DescribeBackupPlanDetailRequest,
    cb?: (error: string, rep: DescribeBackupPlanDetailResponse) => void
  ): Promise<DescribeBackupPlanDetailResponse> {
    return this.request("DescribeBackupPlanDetail", req, cb)
  }

  /**
   * 本接口（ModifyBackupPlanSourceInfo）用于修改备份计划的源实例信息、备份对象信息等。注意，调用该接口后，原有备份计划任务将立即停止，您可以在修改完源信息后重新启动备份任务。
   */
  async ModifyBackupPlanSourceInfo(
    req: ModifyBackupPlanSourceInfoRequest,
    cb?: (error: string, rep: ModifyBackupPlanSourceInfoResponse) => void
  ): Promise<ModifyBackupPlanSourceInfoResponse> {
    return this.request("ModifyBackupPlanSourceInfo", req, cb)
  }

  /**
     * 暂停备份计划。

仅运行中的备份计划支持暂停。调用接口后，若通过 DescribeBackupPlanDetail 接口查询到备份计划状态为 paused，则表示暂停成功。
     */
  async StopBackupPlan(
    req: StopBackupPlanRequest,
    cb?: (error: string, rep: StopBackupPlanResponse) => void
  ): Promise<StopBackupPlanResponse> {
    return this.request("StopBackupPlan", req, cb)
  }

  /**
   * 本接口（DescribeBackupPlans）用于查询备份计划列表。
   */
  async DescribeBackupPlans(
    req: DescribeBackupPlansRequest,
    cb?: (error: string, rep: DescribeBackupPlansResponse) => void
  ): Promise<DescribeBackupPlansResponse> {
    return this.request("DescribeBackupPlans", req, cb)
  }

  /**
     * 查询全量备份集详情。

返回全量备份集的基本信息、源库信息、备份对象、备份进度和加密信息。
     */
  async DescribeFullBackupSetDetail(
    req: DescribeFullBackupSetDetailRequest,
    cb?: (error: string, rep: DescribeFullBackupSetDetailResponse) => void
  ): Promise<DescribeFullBackupSetDetailResponse> {
    return this.request("DescribeFullBackupSetDetail", req, cb)
  }

  /**
   * 本接口（ConfigureBackupPlan）用于配置备份计划。包括配置备份源实例信息、备份对象以及备份策略等。
   */
  async ConfigureBackupPlan(
    req: ConfigureBackupPlanRequest,
    cb?: (error: string, rep: ConfigureBackupPlanResponse) => void
  ): Promise<ConfigureBackupPlanResponse> {
    return this.request("ConfigureBackupPlan", req, cb)
  }

  /**
   * 本接口（DescribeBackupCheckJob）用于查询备份计划预校验任务的结果。仅对于预校验通过的任务，才能启动备份计划。
   */
  async DescribeBackupCheckJob(
    req: DescribeBackupCheckJobRequest,
    cb?: (error: string, rep: DescribeBackupCheckJobResponse) => void
  ): Promise<DescribeBackupCheckJobResponse> {
    return this.request("DescribeBackupCheckJob", req, cb)
  }

  /**
   * 该接口用于创建备份计划。
   */
  async CreateBackupPlan(
    req: CreateBackupPlanRequest,
    cb?: (error: string, rep: CreateBackupPlanResponse) => void
  ): Promise<CreateBackupPlanResponse> {
    return this.request("CreateBackupPlan", req, cb)
  }

  /**
   * 本接口（DescribeIncrementBackupSets）用于查询增量备份集列表。
   */
  async DescribeIncrementBackupSets(
    req: DescribeIncrementBackupSetsRequest,
    cb?: (error: string, rep: DescribeIncrementBackupSetsResponse) => void
  ): Promise<DescribeIncrementBackupSetsResponse> {
    return this.request("DescribeIncrementBackupSets", req, cb)
  }

  /**
   * 该接口用于查询连通性检测任务的结果
   */
  async DescribeConnectTestResult(
    req: DescribeConnectTestResultRequest,
    cb?: (error: string, rep: DescribeConnectTestResultResponse) => void
  ): Promise<DescribeConnectTestResultResponse> {
    return this.request("DescribeConnectTestResult", req, cb)
  }
}
