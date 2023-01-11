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
  CreateAppScanTaskRepeatRequest,
  DescribeScanTaskListResponse,
  AppInfoItem,
  DescribeResourceUsageInfoResponse,
  DescribeScanTaskListRequest,
  ResourceUsageInfoData,
  TaskFlowStepsInfo,
  CreateAppScanTaskRequest,
  DescribeChannelTaskReportUrlResponse,
  DescribeFileTicketResponse,
  DescribeScanTaskStatusResponse,
  DescribeScanTaskReportUrlRequest,
  DescribeChannelTaskReportUrlRequest,
  AppTaskData,
  DescribeScanTaskStatusRequest,
  DescribeFileTicketRequest,
  CreateAppScanTaskResponse,
  DescribeResourceUsageInfoRequest,
  DescribeScanTaskReportUrlResponse,
  CreateAppScanTaskRepeatResponse,
} from "./acp_models"

/**
 * acp client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("acp.tencentcloudapi.com", "2022-01-05", clientConfig)
  }

  /**
   * 创建应用合规隐私诊断任务
   */
  async CreateAppScanTask(
    req: CreateAppScanTaskRequest,
    cb?: (error: string, rep: CreateAppScanTaskResponse) => void
  ): Promise<CreateAppScanTaskResponse> {
    return this.request("CreateAppScanTask", req, cb)
  }

  /**
   * App应用合规隐私诊断重试任务
   */
  async CreateAppScanTaskRepeat(
    req: CreateAppScanTaskRepeatRequest,
    cb?: (error: string, rep: CreateAppScanTaskRepeatResponse) => void
  ): Promise<CreateAppScanTaskRepeatResponse> {
    return this.request("CreateAppScanTaskRepeat", req, cb)
  }

  /**
   * 获取子渠道的App合规诊断任务报告url
   */
  async DescribeChannelTaskReportUrl(
    req: DescribeChannelTaskReportUrlRequest,
    cb?: (error: string, rep: DescribeChannelTaskReportUrlResponse) => void
  ): Promise<DescribeChannelTaskReportUrlResponse> {
    return this.request("DescribeChannelTaskReportUrl", req, cb)
  }

  /**
   * 查询应用合规平台用户资源的使用情况
   */
  async DescribeResourceUsageInfo(
    req: DescribeResourceUsageInfoRequest,
    cb?: (error: string, rep: DescribeResourceUsageInfoResponse) => void
  ): Promise<DescribeResourceUsageInfoResponse> {
    return this.request("DescribeResourceUsageInfo", req, cb)
  }

  /**
   * 查询App隐私合规诊断任务状态
   */
  async DescribeScanTaskStatus(
    req: DescribeScanTaskStatusRequest,
    cb?: (error: string, rep: DescribeScanTaskStatusResponse) => void
  ): Promise<DescribeScanTaskStatusResponse> {
    return this.request("DescribeScanTaskStatus", req, cb)
  }

  /**
   * 获取App合规诊断任务报告url
   */
  async DescribeScanTaskReportUrl(
    req: DescribeScanTaskReportUrlRequest,
    cb?: (error: string, rep: DescribeScanTaskReportUrlResponse) => void
  ): Promise<DescribeScanTaskReportUrlResponse> {
    return this.request("DescribeScanTaskReportUrl", req, cb)
  }

  /**
   * 获取应用合规文件上传凭证，用于上传诊断文件
   */
  async DescribeFileTicket(
    req: DescribeFileTicketRequest,
    cb?: (error: string, rep: DescribeFileTicketResponse) => void
  ): Promise<DescribeFileTicketResponse> {
    return this.request("DescribeFileTicket", req, cb)
  }

  /**
   * 获取App隐私合规诊断任务列表
   */
  async DescribeScanTaskList(
    req: DescribeScanTaskListRequest,
    cb?: (error: string, rep: DescribeScanTaskListResponse) => void
  ): Promise<DescribeScanTaskListResponse> {
    return this.request("DescribeScanTaskList", req, cb)
  }
}
