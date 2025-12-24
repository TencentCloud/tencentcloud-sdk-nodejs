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
  TestItem,
  StartBackupCheckJobRequest,
  ConfigureBackupPlanRequest,
  ConfigureBackupPlanResponse,
  BackupPlanInfo,
  DescribeBackupPlansResponse,
  DescribeConnectTestResultRequest,
  BackupObjectItem,
  StartBackupPlanResponse,
  BackupObject,
  CreateBackupPlanResponse,
  DescribeBackupPlansRequest,
  BackupPeriod,
  TagFilter,
  DescribeConnectTestResultResponse,
  BackupTableItem,
  StartBackupPlanRequest,
  DescribeBackupCheckJobResponse,
  CreateConnectTestJobRequest,
  BackupColumnItem,
  BackupEndpoint,
  StartBackupCheckJobResponse,
  Tag,
  CreateBackupPlanRequest,
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
   * 本接口（StartBackupPlan）用于启动备份计划。调用此接口前，请务必先使用 StartBackupCheckJob 创建备份计划预校验任务，并通过 DescribeBackupCheckJob 接口查询到任务状态为校验通过时，才能启动备份计划。
   */
  async StartBackupPlan(
    req: StartBackupPlanRequest,
    cb?: (error: string, rep: StartBackupPlanResponse) => void
  ): Promise<StartBackupPlanResponse> {
    return this.request("StartBackupPlan", req, cb)
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
   * 该接口用于查询连通性检测任务的结果
   */
  async DescribeConnectTestResult(
    req: DescribeConnectTestResultRequest,
    cb?: (error: string, rep: DescribeConnectTestResultResponse) => void
  ): Promise<DescribeConnectTestResultResponse> {
    return this.request("DescribeConnectTestResult", req, cb)
  }
}
