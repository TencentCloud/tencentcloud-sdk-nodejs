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
  DescribeUserClbWafRegionsResponse,
  DescribeCustomRulesRspRuleListItem,
  ModifyCustomRuleStatusResponse,
  ResponseCode,
  DeleteAttackDownloadRecordResponse,
  DescribeFlowTrendRequest,
  ModifyCustomRuleStatusRequest,
  DeleteDownloadRecordResponse,
  DescribeUserClbWafRegionsRequest,
  DeleteAttackDownloadRecordRequest,
  DeleteSessionResponse,
  BotStatPointItem,
  DescribeCustomRulesResponse,
  DeleteSessionRequest,
  CreateAttackDownloadTaskResponse,
  Strategy,
  AddCustomRuleResponse,
  DescribeFlowTrendResponse,
  AddCustomRuleRequest,
  DescribeCustomRulesRequest,
  DescribeCustomRulesPagingInfo,
  DeleteDownloadRecordRequest,
  CreateAttackDownloadTaskRequest,
} from "./waf_models"

/**
 * waf client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("waf.tencentcloudapi.com", "2018-01-25", clientConfig)
  }

  /**
   * 删除攻击日志下载任务记录
   */
  async DeleteAttackDownloadRecord(
    req: DeleteAttackDownloadRecordRequest,
    cb?: (error: string, rep: DeleteAttackDownloadRecordResponse) => void
  ): Promise<DeleteAttackDownloadRecordResponse> {
    return this.request("DeleteAttackDownloadRecord", req, cb)
  }

  /**
   * 开启或禁用自定义策略
   */
  async ModifyCustomRuleStatus(
    req: ModifyCustomRuleStatusRequest,
    cb?: (error: string, rep: ModifyCustomRuleStatusResponse) => void
  ): Promise<ModifyCustomRuleStatusResponse> {
    return this.request("ModifyCustomRuleStatus", req, cb)
  }

  /**
   * 获取防护配置中的自定义策略列表
   */
  async DescribeCustomRules(
    req: DescribeCustomRulesRequest,
    cb?: (error: string, rep: DescribeCustomRulesResponse) => void
  ): Promise<DescribeCustomRulesResponse> {
    return this.request("DescribeCustomRules", req, cb)
  }

  /**
   * 删除访问日志下载记录
   */
  async DeleteDownloadRecord(
    req: DeleteDownloadRecordRequest,
    cb?: (error: string, rep: DeleteDownloadRecordResponse) => void
  ): Promise<DeleteDownloadRecordResponse> {
    return this.request("DeleteDownloadRecord", req, cb)
  }

  /**
   * 增加自定义策略
   */
  async AddCustomRule(
    req: AddCustomRuleRequest,
    cb?: (error: string, rep: AddCustomRuleResponse) => void
  ): Promise<AddCustomRuleResponse> {
    return this.request("AddCustomRule", req, cb)
  }

  /**
   * 删除CC攻击的session设置
   */
  async DeleteSession(
    req: DeleteSessionRequest,
    cb?: (error: string, rep: DeleteSessionResponse) => void
  ): Promise<DeleteSessionResponse> {
    return this.request("DeleteSession", req, cb)
  }

  /**
   * 获取waf流量访问趋势
   */
  async DescribeFlowTrend(
    req: DescribeFlowTrendRequest,
    cb?: (error: string, rep: DescribeFlowTrendResponse) => void
  ): Promise<DescribeFlowTrendResponse> {
    return this.request("DescribeFlowTrend", req, cb)
  }

  /**
   * 在负载均衡型WAF的添加、编辑域名配置的时候，需要展示负载均衡型WAF（clb-waf)支持的地域列表，通过DescribeUserClbWafRegions既可以获得当前对客户已经开放的地域列表
   */
  async DescribeUserClbWafRegions(
    req?: DescribeUserClbWafRegionsRequest,
    cb?: (error: string, rep: DescribeUserClbWafRegionsResponse) => void
  ): Promise<DescribeUserClbWafRegionsResponse> {
    return this.request("DescribeUserClbWafRegions", req, cb)
  }

  /**
   * 创建攻击日志下载任务
   */
  async CreateAttackDownloadTask(
    req: CreateAttackDownloadTaskRequest,
    cb?: (error: string, rep: CreateAttackDownloadTaskResponse) => void
  ): Promise<CreateAttackDownloadTaskResponse> {
    return this.request("CreateAttackDownloadTask", req, cb)
  }
}
