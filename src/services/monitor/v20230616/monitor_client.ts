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
  DescribeAlarmNotifyHistoriesRequest,
  WebhookNoticeTmpl,
  TeamsRobotNoticeTmplMatcher,
  PageByNoResult,
  FeiShuRobotNoticeTmplMatcher,
  DeleteNoticeContentTmplsRequest,
  PageByNoParams,
  QCloudYeheWeChatNoticeTmplItem,
  AIWorkbenchSREDigitalTwinTask,
  ChannelsReceivers,
  DescribeAIWorkbenchSREDigitalTwinTaskListRequest,
  AIWorkbenchSREDigitalTwinWorkLogList,
  NotifyRelatedNotice,
  NoticeContentTmplItem,
  QCloudYeheNoticeTmplItem,
  CreateNoticeContentTmplResponse,
  NoticeContentTmplBindPolicyCount,
  AlarmLable,
  AIWorkbenchSREDigitalTwinWorkLog,
  TriggerAIWorkbenchSREDigitalTwinTaskRequest,
  TriggerAIWorkbenchSREDigitalTwinTaskResponse,
  DescribeAIWorkbenchSREDigitalTwinWorkLogListResponse,
  TriggerDigitalTwinTaskResp,
  ModifyNoticeContentTmplResponse,
  DescribeNoticeContentTmplResponse,
  DescribeAIWorkbenchSREDigitalTwinWorkLogDetailRequest,
  PagerDutyRobotNoticeTmplHeader,
  DescribeAlarmNotifyHistoriesResponse,
  TeamsRobotNoticeTmpl,
  GoogleChatRobotNoticeTmpl,
  DingDingRobotNoticeTmpl,
  PagerDutyRobotNoticeTmplMatcher,
  WebhookNoticeTmplHeader,
  DescribeAIWorkbenchSREDigitalTwinTaskListResponse,
  FeiShuRobotNoticeTmpl,
  DingDingRobotNoticeTmplMatcher,
  SlackRobotNoticeTmplMatcher,
  AIWorkbenchSREDigitalTwinWorkLogDetail,
  WeWorkRobotNoticeTmplMatcher,
  AlarmNotifyHistory,
  WeWorkRobotNoticeTmpl,
  QCloudYeheNoticeTmplMatcher,
  GoogleChatRobotNoticeTmplMatcher,
  QCloudYeheNoticeTmpl,
  DeleteNoticeContentTmplsResponse,
  PagerDutyRobotNoticeTmpl,
  SlackRobotNoticeTmpl,
  AIWorkbenchSREDigitalTwinTaskList,
  DescribeNoticeContentTmplRequest,
  ModifyNoticeContentTmplRequest,
  CreateNoticeContentTmplRequest,
  DescribeAIWorkbenchSREDigitalTwinWorkLogListRequest,
  WebhookNoticeTmplMatcher,
  DescribeAIWorkbenchSREDigitalTwinWorkLogDetailResponse,
  NoticeContentTmpl,
} from "./monitor_models"

/**
 * monitor client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("monitor.tencentcloudapi.com", "2023-06-16", clientConfig)
  }

  /**
   * 删除通知内容模板
   */
  async DeleteNoticeContentTmpls(
    req: DeleteNoticeContentTmplsRequest,
    cb?: (error: string, rep: DeleteNoticeContentTmplsResponse) => void
  ): Promise<DeleteNoticeContentTmplsResponse> {
    return this.request("DeleteNoticeContentTmpls", req, cb)
  }

  /**
   * 根据查询条件获取自定义通知内容模板，若所有查询条件空，则获取账号下所有模板
   */
  async DescribeNoticeContentTmpl(
    req: DescribeNoticeContentTmplRequest,
    cb?: (error: string, rep: DescribeNoticeContentTmplResponse) => void
  ): Promise<DescribeNoticeContentTmplResponse> {
    return this.request("DescribeNoticeContentTmpl", req, cb)
  }

  /**
   * 查询AI工作台SRE数字分身工作日志详细信息
   */
  async DescribeAIWorkbenchSREDigitalTwinWorkLogDetail(
    req: DescribeAIWorkbenchSREDigitalTwinWorkLogDetailRequest,
    cb?: (error: string, rep: DescribeAIWorkbenchSREDigitalTwinWorkLogDetailResponse) => void
  ): Promise<DescribeAIWorkbenchSREDigitalTwinWorkLogDetailResponse> {
    return this.request("DescribeAIWorkbenchSREDigitalTwinWorkLogDetail", req, cb)
  }

  /**
   * 创建自定义通知内容模板
   */
  async CreateNoticeContentTmpl(
    req: CreateNoticeContentTmplRequest,
    cb?: (error: string, rep: CreateNoticeContentTmplResponse) => void
  ): Promise<CreateNoticeContentTmplResponse> {
    return this.request("CreateNoticeContentTmpl", req, cb)
  }

  /**
   * 触发数字分身任务请求
   */
  async TriggerAIWorkbenchSREDigitalTwinTask(
    req: TriggerAIWorkbenchSREDigitalTwinTaskRequest,
    cb?: (error: string, rep: TriggerAIWorkbenchSREDigitalTwinTaskResponse) => void
  ): Promise<TriggerAIWorkbenchSREDigitalTwinTaskResponse> {
    return this.request("TriggerAIWorkbenchSREDigitalTwinTask", req, cb)
  }

  /**
   * 修改通知内容模板
   */
  async ModifyNoticeContentTmpl(
    req: ModifyNoticeContentTmplRequest,
    cb?: (error: string, rep: ModifyNoticeContentTmplResponse) => void
  ): Promise<ModifyNoticeContentTmplResponse> {
    return this.request("ModifyNoticeContentTmpl", req, cb)
  }

  /**
   * 查询AI工作台SRE数字分身任务工作日志列表
   */
  async DescribeAIWorkbenchSREDigitalTwinWorkLogList(
    req: DescribeAIWorkbenchSREDigitalTwinWorkLogListRequest,
    cb?: (error: string, rep: DescribeAIWorkbenchSREDigitalTwinWorkLogListResponse) => void
  ): Promise<DescribeAIWorkbenchSREDigitalTwinWorkLogListResponse> {
    return this.request("DescribeAIWorkbenchSREDigitalTwinWorkLogList", req, cb)
  }

  /**
   * 按需查询告警的通知历史
   */
  async DescribeAlarmNotifyHistories(
    req: DescribeAlarmNotifyHistoriesRequest,
    cb?: (error: string, rep: DescribeAlarmNotifyHistoriesResponse) => void
  ): Promise<DescribeAlarmNotifyHistoriesResponse> {
    return this.request("DescribeAlarmNotifyHistories", req, cb)
  }

  /**
   * 查询AI工作台SRE数字分身任务列表
   */
  async DescribeAIWorkbenchSREDigitalTwinTaskList(
    req: DescribeAIWorkbenchSREDigitalTwinTaskListRequest,
    cb?: (error: string, rep: DescribeAIWorkbenchSREDigitalTwinTaskListResponse) => void
  ): Promise<DescribeAIWorkbenchSREDigitalTwinTaskListResponse> {
    return this.request("DescribeAIWorkbenchSREDigitalTwinTaskList", req, cb)
  }
}
