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
  DescribeTagsResponse,
  DescribeLinkResponse,
  DeleteRuleResponse,
  CreateTacticRequest,
  DeleteTagRequest,
  DescribeOrdersResponse,
  DeviceReport,
  ModifyTacticRequest,
  Tactic,
  DeleteRuleRequest,
  DescribeRulesRequest,
  ModifyLinkAdvancedLogRequest,
  DescribeRuleResponse,
  ModifyRuleRequest,
  LinkInfos,
  TagInfos,
  ModifyTagResponse,
  CreateRuleRequest,
  LinkDetailInfo,
  DescribeRuleRequest,
  RuleInfos,
  ModifyRuleStatusResponse,
  ModifyLinkTacticResponse,
  DescribeTagsRequest,
  DescribeLinksResponse,
  ModifyTacticResponse,
  ModifyRuleStatusRequest,
  DescribeTacticsRequest,
  TacticInfos,
  RenewLinkInfoRequest,
  CreateTagRequest,
  DeleteTacticResponse,
  DeleteTacticRequest,
  DescribeTacticResponse,
  ModifyLinkTacticRequest,
  DescribeTacticRequest,
  Rule,
  CreateTagResponse,
  DescribeLinksRequest,
  CreateRuleResponse,
  RuleDetail,
  DescribeTacticsResponse,
  RenewLinkInfoResponse,
  DescribeRulesResponse,
  DeleteTagResponse,
  TeleOperatorCard,
  ModifyLinkTeleResponse,
  Orders,
  ModifyTagRequest,
  Tag,
  OrderInfo,
  CreateTacticResponse,
  DescribeOrdersRequest,
  ModifyLinkTeleRequest,
  LinkInfo,
  DescribeLinkRequest,
  ModifyLinkAdvancedLogResponse,
  ModifyRuleResponse,
} from "./hasim_models"

/**
 * hasim client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("hasim.tencentcloudapi.com", "2021-07-16", clientConfig)
  }

  /**
   * 删除策略
   */
  async DeleteTactic(
    req: DeleteTacticRequest,
    cb?: (error: string, rep: DeleteTacticResponse) => void
  ): Promise<DeleteTacticResponse> {
    return this.request("DeleteTactic", req, cb)
  }

  /**
   * 查询订单列表
   */
  async DescribeOrders(
    req: DescribeOrdersRequest,
    cb?: (error: string, rep: DescribeOrdersResponse) => void
  ): Promise<DescribeOrdersResponse> {
    return this.request("DescribeOrders", req, cb)
  }

  /**
   * 查询云兔切换策略列表
   */
  async DescribeTactics(
    req: DescribeTacticsRequest,
    cb?: (error: string, rep: DescribeTacticsResponse) => void
  ): Promise<DescribeTacticsResponse> {
    return this.request("DescribeTactics", req, cb)
  }

  /**
   * 创建自动化规则
   */
  async CreateRule(
    req: CreateRuleRequest,
    cb?: (error: string, rep: CreateRuleResponse) => void
  ): Promise<CreateRuleResponse> {
    return this.request("CreateRule", req, cb)
  }

  /**
   * 删除标签
   */
  async DeleteTag(
    req: DeleteTagRequest,
    cb?: (error: string, rep: DeleteTagResponse) => void
  ): Promise<DeleteTagResponse> {
    return this.request("DeleteTag", req, cb)
  }

  /**
   * 查询云兔连接列表
   */
  async DescribeLinks(
    req: DescribeLinksRequest,
    cb?: (error: string, rep: DescribeLinksResponse) => void
  ): Promise<DescribeLinksResponse> {
    return this.request("DescribeLinks", req, cb)
  }

  /**
   * 删除自动化规则
   */
  async DeleteRule(
    req: DeleteRuleRequest,
    cb?: (error: string, rep: DeleteRuleResponse) => void
  ): Promise<DeleteRuleResponse> {
    return this.request("DeleteRule", req, cb)
  }

  /**
   * 编辑自动化规则状态
   */
  async ModifyRuleStatus(
    req: ModifyRuleStatusRequest,
    cb?: (error: string, rep: ModifyRuleStatusResponse) => void
  ): Promise<ModifyRuleStatusResponse> {
    return this.request("ModifyRuleStatus", req, cb)
  }

  /**
   * 编辑云兔高级日志状态
   */
  async ModifyLinkAdvancedLog(
    req: ModifyLinkAdvancedLogRequest,
    cb?: (error: string, rep: ModifyLinkAdvancedLogResponse) => void
  ): Promise<ModifyLinkAdvancedLogResponse> {
    return this.request("ModifyLinkAdvancedLog", req, cb)
  }

  /**
   * 创建标签
   */
  async CreateTag(
    req: CreateTagRequest,
    cb?: (error: string, rep: CreateTagResponse) => void
  ): Promise<CreateTagResponse> {
    return this.request("CreateTag", req, cb)
  }

  /**
   * 修改云兔运营商
   */
  async ModifyLinkTele(
    req: ModifyLinkTeleRequest,
    cb?: (error: string, rep: ModifyLinkTeleResponse) => void
  ): Promise<ModifyLinkTeleResponse> {
    return this.request("ModifyLinkTele", req, cb)
  }

  /**
   * 查询自动化规则
   */
  async DescribeRule(
    req: DescribeRuleRequest,
    cb?: (error: string, rep: DescribeRuleResponse) => void
  ): Promise<DescribeRuleResponse> {
    return this.request("DescribeRule", req, cb)
  }

  /**
   * 查询标签列表
   */
  async DescribeTags(
    req: DescribeTagsRequest,
    cb?: (error: string, rep: DescribeTagsResponse) => void
  ): Promise<DescribeTagsResponse> {
    return this.request("DescribeTags", req, cb)
  }

  /**
   * 编辑自动化规则
   */
  async ModifyRule(
    req: ModifyRuleRequest,
    cb?: (error: string, rep: ModifyRuleResponse) => void
  ): Promise<ModifyRuleResponse> {
    return this.request("ModifyRule", req, cb)
  }

  /**
   * 查询云兔连接详细信息
   */
  async DescribeLink(
    req: DescribeLinkRequest,
    cb?: (error: string, rep: DescribeLinkResponse) => void
  ): Promise<DescribeLinkResponse> {
    return this.request("DescribeLink", req, cb)
  }

  /**
   * 创建云兔切换策略
   */
  async CreateTactic(
    req: CreateTacticRequest,
    cb?: (error: string, rep: CreateTacticResponse) => void
  ): Promise<CreateTacticResponse> {
    return this.request("CreateTactic", req, cb)
  }

  /**
   * 刷新云兔连接信息同步
   */
  async RenewLinkInfo(
    req: RenewLinkInfoRequest,
    cb?: (error: string, rep: RenewLinkInfoResponse) => void
  ): Promise<RenewLinkInfoResponse> {
    return this.request("RenewLinkInfo", req, cb)
  }

  /**
   * 修改云兔切换策略
   */
  async ModifyTactic(
    req: ModifyTacticRequest,
    cb?: (error: string, rep: ModifyTacticResponse) => void
  ): Promise<ModifyTacticResponse> {
    return this.request("ModifyTactic", req, cb)
  }

  /**
   * 查询云兔切换策略信息
   */
  async DescribeTactic(
    req: DescribeTacticRequest,
    cb?: (error: string, rep: DescribeTacticResponse) => void
  ): Promise<DescribeTacticResponse> {
    return this.request("DescribeTactic", req, cb)
  }

  /**
   * 查询自动化规则列表
   */
  async DescribeRules(
    req: DescribeRulesRequest,
    cb?: (error: string, rep: DescribeRulesResponse) => void
  ): Promise<DescribeRulesResponse> {
    return this.request("DescribeRules", req, cb)
  }

  /**
   * 编辑云兔策略
   */
  async ModifyLinkTactic(
    req: ModifyLinkTacticRequest,
    cb?: (error: string, rep: ModifyLinkTacticResponse) => void
  ): Promise<ModifyLinkTacticResponse> {
    return this.request("ModifyLinkTactic", req, cb)
  }

  /**
   * 编辑标签
   */
  async ModifyTag(
    req: ModifyTagRequest,
    cb?: (error: string, rep: ModifyTagResponse) => void
  ): Promise<ModifyTagResponse> {
    return this.request("ModifyTag", req, cb)
  }
}
