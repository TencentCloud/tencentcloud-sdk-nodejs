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
  FeiShuRobotNoticeTmplMatcher,
  PageByNoParams,
  PagerDutyRobotNoticeTmpl,
  WeWorkRobotNoticeTmplMatcher,
  NoticeContentTmplItem,
  QCloudYeheNoticeTmplItem,
  CreateNoticeContentTmplResponse,
  QCloudYeheWeChatNoticeTmplItem,
  PagerDutyRobotNoticeTmplHeader,
  DescribeAlarmNotifyHistoriesResponse,
  DingDingRobotNoticeTmpl,
  PagerDutyRobotNoticeTmplMatcher,
  WebhookNoticeTmplHeader,
  FeiShuRobotNoticeTmpl,
  DingDingRobotNoticeTmplMatcher,
  TeamsRobotNoticeTmpl,
  WeWorkRobotNoticeTmpl,
  QCloudYeheNoticeTmpl,
  CreateNoticeContentTmplRequest,
  QCloudYeheNoticeTmplMatcher,
  WebhookNoticeTmplMatcher,
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
   * 创建自定义通知内容模板
   */
  async CreateNoticeContentTmpl(
    req: CreateNoticeContentTmplRequest,
    cb?: (error: string, rep: CreateNoticeContentTmplResponse) => void
  ): Promise<CreateNoticeContentTmplResponse> {
    return this.request("CreateNoticeContentTmpl", req, cb)
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
}
