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
  DescribeFlySecMiniAppReportUrlRequest,
  DescribeScanTaskListRequest,
  DescribeFlySecMiniAppScanTaskParamRequest,
  ResourceUsageInfoData,
  CreateAppScanTaskRequest,
  FlySecMiniAppRiskItems,
  DescribeScanTaskStatusRequest,
  DescribeBasicDiagnosisResourceUsageInfoResponse,
  CreateAppScanTaskRepeatResponse,
  DescribeBasicDiagnosisResourceUsageInfoRequest,
  DescribeResourceUsageInfoResponse,
  DescribeScanTaskReportUrlResponse,
  DescribeFlySecMiniAppScanTaskStatusRequest,
  CreateFlySecMiniAppScanTaskResponse,
  CreateFlySecMiniAppProfessionalScanTaskRequest,
  CreateFlySecMiniAppProfessionalScanTaskResponse,
  DescribeFlySecMiniAppScanTaskListRequest,
  DescribeFlySecMiniAppScanReportListRequest,
  DescribeFlySecMiniAppScanTaskParamResponse,
  CreateFlySecMiniAppScanTaskRepeatRequest,
  CreateFlySecMiniAppScanTaskRequest,
  CreateAppScanTaskRepeatRequest,
  DescribeScanTaskReportUrlRequest,
  TaskFlowStepsInfo,
  DescribeFlySecMiniAppScanTaskListResponse,
  FlySecMiniAppTaskData,
  CreateAppScanTaskResponse,
  DescribeFlySecMiniAppReportUrlResponse,
  DescribeScanTaskListResponse,
  AppInfoItem,
  DescribeFlySecMiniAppScanTaskStatusResponse,
  DescribeFlySecMiniAppScanReportListResponse,
  CreateFlySecMiniAppScanTaskRepeatResponse,
  DescribeScanTaskStatusResponse,
  AppTaskData,
  FlySecMiniAppReportData,
  DescribeResourceUsageInfoRequest,
} from "./mmps_models"

/**
 * mmps client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("mmps.tencentcloudapi.com", "2020-07-10", clientConfig)
  }

  /**
   * 创建小程序隐私合规诊断任务
   */
  async CreateAppScanTask(
    req: CreateAppScanTaskRequest,
    cb?: (error: string, rep: CreateAppScanTaskResponse) => void
  ): Promise<CreateAppScanTaskResponse> {
    return this.request("CreateAppScanTask", req, cb)
  }

  /**
   * 创建小程序安全深度诊断任务
   */
  async CreateFlySecMiniAppProfessionalScanTask(
    req: CreateFlySecMiniAppProfessionalScanTaskRequest,
    cb?: (error: string, rep: CreateFlySecMiniAppProfessionalScanTaskResponse) => void
  ): Promise<CreateFlySecMiniAppProfessionalScanTaskResponse> {
    return this.request("CreateFlySecMiniAppProfessionalScanTask", req, cb)
  }

  /**
   * 查询指定小程序版本的翼扬诊断安全得分
   */
  async DescribeFlySecMiniAppScanReportList(
    req: DescribeFlySecMiniAppScanReportListRequest,
    cb?: (error: string, rep: DescribeFlySecMiniAppScanReportListResponse) => void
  ): Promise<DescribeFlySecMiniAppScanReportListResponse> {
    return this.request("DescribeFlySecMiniAppScanReportList", req, cb)
  }

  /**
   * 获取翼扬诊断任务报告链接地址
   */
  async DescribeFlySecMiniAppReportUrl(
    req: DescribeFlySecMiniAppReportUrlRequest,
    cb?: (error: string, rep: DescribeFlySecMiniAppReportUrlResponse) => void
  ): Promise<DescribeFlySecMiniAppReportUrlResponse> {
    return this.request("DescribeFlySecMiniAppReportUrl", req, cb)
  }

  /**
   * 查询翼扬安全诊断任务状态
   */
  async DescribeFlySecMiniAppScanTaskStatus(
    req: DescribeFlySecMiniAppScanTaskStatusRequest,
    cb?: (error: string, rep: DescribeFlySecMiniAppScanTaskStatusResponse) => void
  ): Promise<DescribeFlySecMiniAppScanTaskStatusResponse> {
    return this.request("DescribeFlySecMiniAppScanTaskStatus", req, cb)
  }

  /**
   * 查询翼扬安全资源使用情况
   */
  async DescribeResourceUsageInfo(
    req?: DescribeResourceUsageInfoRequest,
    cb?: (error: string, rep: DescribeResourceUsageInfoResponse) => void
  ): Promise<DescribeResourceUsageInfoResponse> {
    return this.request("DescribeResourceUsageInfo", req, cb)
  }

  /**
   * 创建小程序翼扬安全的基础或深度诊断任务
   */
  async CreateFlySecMiniAppScanTask(
    req: CreateFlySecMiniAppScanTaskRequest,
    cb?: (error: string, rep: CreateFlySecMiniAppScanTaskResponse) => void
  ): Promise<CreateFlySecMiniAppScanTaskResponse> {
    return this.request("CreateFlySecMiniAppScanTask", req, cb)
  }

  /**
   * 重新提交基础诊断任务
   */
  async CreateFlySecMiniAppScanTaskRepeat(
    req: CreateFlySecMiniAppScanTaskRepeatRequest,
    cb?: (error: string, rep: CreateFlySecMiniAppScanTaskRepeatResponse) => void
  ): Promise<CreateFlySecMiniAppScanTaskRepeatResponse> {
    return this.request("CreateFlySecMiniAppScanTaskRepeat", req, cb)
  }

  /**
   * 获取小程序合规诊断任务报告url
   */
  async DescribeScanTaskReportUrl(
    req: DescribeScanTaskReportUrlRequest,
    cb?: (error: string, rep: DescribeScanTaskReportUrlResponse) => void
  ): Promise<DescribeScanTaskReportUrlResponse> {
    return this.request("DescribeScanTaskReportUrl", req, cb)
  }

  /**
   * 获取小程序隐私合规诊断任务列表
   */
  async DescribeScanTaskList(
    req: DescribeScanTaskListRequest,
    cb?: (error: string, rep: DescribeScanTaskListResponse) => void
  ): Promise<DescribeScanTaskListResponse> {
    return this.request("DescribeScanTaskList", req, cb)
  }

  /**
   * 获取翼扬安全诊断任务列表
   */
  async DescribeFlySecMiniAppScanTaskList(
    req: DescribeFlySecMiniAppScanTaskListRequest,
    cb?: (error: string, rep: DescribeFlySecMiniAppScanTaskListResponse) => void
  ): Promise<DescribeFlySecMiniAppScanTaskListResponse> {
    return this.request("DescribeFlySecMiniAppScanTaskList", req, cb)
  }

  /**
   * 查询小程序隐私合规诊断任务状态
   */
  async DescribeScanTaskStatus(
    req: DescribeScanTaskStatusRequest,
    cb?: (error: string, rep: DescribeScanTaskStatusResponse) => void
  ): Promise<DescribeScanTaskStatusResponse> {
    return this.request("DescribeScanTaskStatus", req, cb)
  }

  /**
   * 查询翼扬安全基础诊断资源使用情况
   */
  async DescribeBasicDiagnosisResourceUsageInfo(
    req: DescribeBasicDiagnosisResourceUsageInfoRequest,
    cb?: (error: string, rep: DescribeBasicDiagnosisResourceUsageInfoResponse) => void
  ): Promise<DescribeBasicDiagnosisResourceUsageInfoResponse> {
    return this.request("DescribeBasicDiagnosisResourceUsageInfo", req, cb)
  }

  /**
   * 小程序隐私合规诊断重试任务
   */
  async CreateAppScanTaskRepeat(
    req: CreateAppScanTaskRepeatRequest,
    cb?: (error: string, rep: CreateAppScanTaskRepeatResponse) => void
  ): Promise<CreateAppScanTaskRepeatResponse> {
    return this.request("CreateAppScanTaskRepeat", req, cb)
  }

  /**
   * 获取用户提交的基础诊断任务参数信息
   */
  async DescribeFlySecMiniAppScanTaskParam(
    req: DescribeFlySecMiniAppScanTaskParamRequest,
    cb?: (error: string, rep: DescribeFlySecMiniAppScanTaskParamResponse) => void
  ): Promise<DescribeFlySecMiniAppScanTaskParamResponse> {
    return this.request("DescribeFlySecMiniAppScanTaskParam", req, cb)
  }
}
