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
  DescribeDataResponse,
  DescribeMatchCodesRequest,
  DeleteRuleResponse,
  ModifyMatchRequest,
  StartMatchingResponse,
  CreateMatchRequest,
  DescribeMatchingProgressRequest,
  ModifyMatchResponse,
  ReportTrendData,
  CreateMatchResponse,
  RuleBriefInfo,
  DescribeMatchesRequest,
  DeleteRuleRequest,
  MatchInfo,
  DescribeRulesRequest,
  DescribeTokenResponse,
  DescribeRuleResponse,
  DescribeMatchRequest,
  ModifyRuleRequest,
  DescribeTokenRequest,
  DescribeDataRequest,
  RegionLatency,
  CreateRuleRequest,
  ReportOverviewData,
  DescribeRuleRequest,
  DescribeMatchResponse,
  ModifyTokenResponse,
  MatchCodeAttr,
  MatchAttribute,
  DeleteMatchResponse,
  CancelMatchingRequest,
  AttributeMap,
  StringKV,
  StartMatchingBackfillRequest,
  CancelMatchingResponse,
  DescribeMatchCodesResponse,
  CreateRuleResponse,
  DescribeRulesResponse,
  MTicket,
  RuleInfo,
  ModifyTokenRequest,
  StartMatchingBackfillResponse,
  DescribeMatchesResponse,
  Player,
  StartMatchingRequest,
  Tag,
  DeleteMatchRequest,
  MatchTicket,
  DescribeMatchingProgressResponse,
  ModifyRuleResponse,
} from "./gpm_models"

/**
 * gpm client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("gpm.tencentcloudapi.com", "2020-08-20", clientConfig)
  }

  /**
     * 此接口无法使用，游戏玩家匹配GPM已于6.1正式下架，感谢您的支持

取消匹配。
     */
  async CancelMatching(
    req: CancelMatchingRequest,
    cb?: (error: string, rep: CancelMatchingResponse) => void
  ): Promise<CancelMatchingResponse> {
    return this.request("CancelMatching", req, cb)
  }

  /**
     * 此接口无法使用，游戏玩家匹配GPM已于6.1正式下架，感谢您的支持

修改匹配Token。
     */
  async ModifyToken(
    req: ModifyTokenRequest,
    cb?: (error: string, rep: ModifyTokenResponse) => void
  ): Promise<ModifyTokenResponse> {
    return this.request("ModifyToken", req, cb)
  }

  /**
     * 此接口无法使用，游戏玩家匹配GPM已于6.1正式下架，感谢您的支持

查询匹配进度。
     */
  async DescribeMatchingProgress(
    req: DescribeMatchingProgressRequest,
    cb?: (error: string, rep: DescribeMatchingProgressResponse) => void
  ): Promise<DescribeMatchingProgressResponse> {
    return this.request("DescribeMatchingProgress", req, cb)
  }

  /**
     * 此接口无法使用，游戏玩家匹配GPM已于6.1正式下架，感谢您的支持

创建匹配
     */
  async CreateMatch(
    req: CreateMatchRequest,
    cb?: (error: string, rep: CreateMatchResponse) => void
  ): Promise<CreateMatchResponse> {
    return this.request("CreateMatch", req, cb)
  }

  /**
     * 此接口无法使用，游戏玩家匹配GPM已于6.1正式下架，感谢您的支持

修改匹配
     */
  async ModifyMatch(
    req: ModifyMatchRequest,
    cb?: (error: string, rep: ModifyMatchResponse) => void
  ): Promise<ModifyMatchResponse> {
    return this.request("ModifyMatch", req, cb)
  }

  /**
     * 此接口无法使用，游戏玩家匹配GPM已于6.1正式下架，感谢您的支持

查询匹配Token，Token用于push消息验证。
     */
  async DescribeToken(
    req: DescribeTokenRequest,
    cb?: (error: string, rep: DescribeTokenResponse) => void
  ): Promise<DescribeTokenResponse> {
    return this.request("DescribeToken", req, cb)
  }

  /**
     * 此接口无法使用，游戏玩家匹配GPM已于6.1正式下架，感谢您的支持

查询规则详情
     */
  async DescribeRule(
    req: DescribeRuleRequest,
    cb?: (error: string, rep: DescribeRuleResponse) => void
  ): Promise<DescribeRuleResponse> {
    return this.request("DescribeRule", req, cb)
  }

  /**
     * 此接口无法使用，游戏玩家匹配GPM已于6.1正式下架，感谢您的支持

通过调用StartMatchingBackfill，用户可以传入一个回填的匹配请求，GPM为回填请求搜索符合条件的ticket并形成一个新的match。
     */
  async StartMatchingBackfill(
    req: StartMatchingBackfillRequest,
    cb?: (error: string, rep: StartMatchingBackfillResponse) => void
  ): Promise<StartMatchingBackfillResponse> {
    return this.request("StartMatchingBackfill", req, cb)
  }

  /**
     * 此接口无法使用，游戏玩家匹配GPM已于6.1正式下架，感谢您的支持

查询匹配详情
     */
  async DescribeMatch(
    req: DescribeMatchRequest,
    cb?: (error: string, rep: DescribeMatchResponse) => void
  ): Promise<DescribeMatchResponse> {
    return this.request("DescribeMatch", req, cb)
  }

  /**
     * 此接口无法使用，游戏玩家匹配GPM已于6.1正式下架，感谢您的支持

删除规则
     */
  async DeleteRule(
    req: DeleteRuleRequest,
    cb?: (error: string, rep: DeleteRuleResponse) => void
  ): Promise<DeleteRuleResponse> {
    return this.request("DeleteRule", req, cb)
  }

  /**
     * 此接口无法使用，游戏玩家匹配GPM已于6.1正式下架，感谢您的支持

删除匹配
     */
  async DeleteMatch(
    req: DeleteMatchRequest,
    cb?: (error: string, rep: DeleteMatchResponse) => void
  ): Promise<DeleteMatchResponse> {
    return this.request("DeleteMatch", req, cb)
  }

  /**
     * 此接口无法使用，游戏玩家匹配GPM已于6.1正式下架，感谢您的支持

分页查询规则集列表
     */
  async DescribeRules(
    req: DescribeRulesRequest,
    cb?: (error: string, rep: DescribeRulesResponse) => void
  ): Promise<DescribeRulesResponse> {
    return this.request("DescribeRules", req, cb)
  }

  /**
     * 此接口无法使用，游戏玩家匹配GPM已于6.1正式下架，感谢您的支持

修改规则（描述、标签）
     */
  async ModifyRule(
    req: ModifyRuleRequest,
    cb?: (error: string, rep: ModifyRuleResponse) => void
  ): Promise<ModifyRuleResponse> {
    return this.request("ModifyRule", req, cb)
  }

  /**
     * 此接口无法使用，游戏玩家匹配GPM已于6.1正式下架，感谢您的支持

创建规则
     */
  async CreateRule(
    req: CreateRuleRequest,
    cb?: (error: string, rep: CreateRuleResponse) => void
  ): Promise<CreateRuleResponse> {
    return this.request("CreateRule", req, cb)
  }

  /**
     * 此接口无法使用，游戏玩家匹配GPM已于6.1正式下架，感谢您的支持

支持传入一个玩家或多个玩家发起匹配，在同一个请求内的玩家将被分到同一个对局。
     */
  async StartMatching(
    req: StartMatchingRequest,
    cb?: (error: string, rep: StartMatchingResponse) => void
  ): Promise<StartMatchingResponse> {
    return this.request("StartMatching", req, cb)
  }

  /**
     * 此接口无法使用，游戏玩家匹配GPM已于6.1正式下架，感谢您的支持

分页查询匹配列表
     */
  async DescribeMatches(
    req: DescribeMatchesRequest,
    cb?: (error: string, rep: DescribeMatchesResponse) => void
  ): Promise<DescribeMatchesResponse> {
    return this.request("DescribeMatches", req, cb)
  }

  /**
     * 此接口无法使用，游戏玩家匹配GPM已于6.1正式下架，感谢您的支持

分页查询匹配Code
     */
  async DescribeMatchCodes(
    req: DescribeMatchCodesRequest,
    cb?: (error: string, rep: DescribeMatchCodesResponse) => void
  ): Promise<DescribeMatchCodesResponse> {
    return this.request("DescribeMatchCodes", req, cb)
  }

  /**
     * 此接口无法使用，游戏玩家匹配GPM已于6.1正式下架，感谢您的支持

统计数据
     */
  async DescribeData(
    req: DescribeDataRequest,
    cb?: (error: string, rep: DescribeDataResponse) => void
  ): Promise<DescribeDataResponse> {
    return this.request("DescribeData", req, cb)
  }
}
