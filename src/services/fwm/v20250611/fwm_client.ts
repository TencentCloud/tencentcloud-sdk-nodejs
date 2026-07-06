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
  DescribeSecurityGroupRulesRequest,
  CreateNatAclRuleGroupResponse,
  ModifyStrategySequenceRequest,
  DispatchStrategyRequest,
  DescribeStrategiesRequest,
  IgnorePolicyRiskResponse,
  DescribeRiskListResponse,
  DescribeNatAclRulesRequest,
  ModifyStrategyRequest,
  DeleteStrategyRequest,
  ModifyRuleGroupRequest,
  ModifyEdgeAclRuleSequenceResponse,
  ModifySecurityGroupRuleRequest,
  DescribeVpcAclRulesRequest,
  DescribePolicyRiskAccountProductStatsResponse,
  DescribeVpcAclRulesResponse,
  OrganMemberItem,
  DescribeStrategyResponse,
  DescribeEdgeAclRulesRequest,
  DescribeStrategiesResponse,
  DescribeStrategyAccountsRequest,
  DescribeStrategyDispatchStatusRequest,
  ModifyEdgeAclRuleSequenceRequest,
  SecurityGroupRule,
  DeleteSecurityGroupRuleResponse,
  OrganSummary,
  DescribeNatAclRulesResponse,
  DescribeSecurityGroupRuleRequest,
  DescribeStrategyRequest,
  DeleteNatAclRuleResponse,
  SgDnsParseCount,
  DescribeOrganSummaryResponse,
  DeleteVpcAclRuleRequest,
  DeleteStrategyResponse,
  StrategyResp,
  DescribeOrganMembersResponse,
  ModifyEdgeAclRuleRequest,
  ModifyNatAclRuleSequenceResponse,
  DeleteEdgeAclRuleRequest,
  DeleteEdgeAclRuleResponse,
  ModifyVpcAclRuleResponse,
  NatAclRuleResp,
  CreateStrategyRequest,
  VpcAclRule,
  CommonFilter,
  ModifyVpcAclRuleSequenceResponse,
  DeleteRuleGroupResponse,
  CancelIgnorePolicyRiskRequest,
  DeleteVpcAclRuleResponse,
  CreateSecurityGroupRuleGroupResponse,
  ServiceTemplateSpecification,
  ModifyVpcAclRuleSequenceRequest,
  ModifyNatAclRuleRequest,
  AddressTemplateSpecification,
  CreateVpcAclRuleGroupResponse,
  CreateSecurityGroupRuleResponse,
  DispatchStrategyResponse,
  ModifyNatAclRuleResponse,
  DescribeSecurityGroupRuleResponse,
  DescribeRiskCategoryStatsResponse,
  MemberInfo,
  DescribePolicyRiskAccountProductStatsRequest,
  CreateEdgeAclRuleResponse,
  CreateStrategyResponse,
  AccountGroupInfo,
  DescribeStrategyDispatchStatusResponse,
  ModifyStrategyResponse,
  CreateVpcAclRuleResponse,
  DescribeRiskCategoryStatsRequest,
  AnalysisSgRuleInfoResp,
  NatAclRule,
  ModifySecurityGroupRuleResponse,
  DescribeOrganMembersRequest,
  CreateVpcAclRuleGroupRequest,
  ModifyVpcAclRuleRequest,
  DescribeEdgeAclRulesResponse,
  ModifyNatAclRuleSequenceRequest,
  DescribeStrategyAccountsResponse,
  DescribeSecurityGroupRulesResponse,
  DescribeRiskAnalysisDetailsRequest,
  AccountGroupQuotaDetail,
  CreateNatAclRuleGroupRequest,
  StrategyReq,
  DescribeOrganSummaryRequest,
  SgRuleResp,
  DeleteNatAclRuleRequest,
  ModifyStrategySequenceResponse,
  ModifyEdgeAclRuleResponse,
  IgnorePolicyRiskRequest,
  VpcAclRuleResp,
  SecurityGroupRiskPolicy,
  SecGroupRuleResp,
  DescribeRiskAnalysisDetailsResponse,
  EdgeAclRuleResp,
  ModifyRuleGroupResponse,
  CreateEdgeAclRuleRequest,
  CreateVpcAclRuleRequest,
  SequenceIndex,
  CreateSecurityGroupRuleGroupRequest,
  CreateNatAclRuleResponse,
  CreateAnalyzePolicyTaskResponse,
  PolicyRisk,
  DeleteSecurityGroupRuleRequest,
  CreateEdgeAclRuleGroupResponse,
  CreateAnalyzePolicyTaskRequest,
  AccountProductDetailStats,
  AccountStatsGroup,
  CreateSecurityGroupRuleRequest,
  DescribeRiskListRequest,
  RiskCategoryItem,
  Account,
  CancelIgnorePolicyRiskResponse,
  ReceiveAccount,
  EdgeAclRuleInfo,
  DeleteRuleGroupRequest,
  CreateEdgeAclRuleGroupRequest,
  CreateNatAclRuleRequest,
} from "./fwm_models"

/**
 * fwm client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("fwm.tencentcloudapi.com", "2025-06-11", clientConfig)
  }

  /**
   * 修改规则组信息（规则组管理）
   */
  async ModifyRuleGroup(
    req: ModifyRuleGroupRequest,
    cb?: (error: string, rep: ModifyRuleGroupResponse) => void
  ): Promise<ModifyRuleGroupResponse> {
    return this.request("ModifyRuleGroup", req, cb)
  }

  /**
   * 调整NAT ACL规则优先级顺序
   */
  async ModifyNatAclRuleSequence(
    req: ModifyNatAclRuleSequenceRequest,
    cb?: (error: string, rep: ModifyNatAclRuleSequenceResponse) => void
  ): Promise<ModifyNatAclRuleSequenceResponse> {
    return this.request("ModifyNatAclRuleSequence", req, cb)
  }

  /**
   * 查看防火墙管理规则下发账号列表
   */
  async DescribeStrategyAccounts(
    req: DescribeStrategyAccountsRequest,
    cb?: (error: string, rep: DescribeStrategyAccountsResponse) => void
  ): Promise<DescribeStrategyAccountsResponse> {
    return this.request("DescribeStrategyAccounts", req, cb)
  }

  /**
   * 查询账号+产品维度风险统计，按账号分组返回各产品的体检策略数、待整改风险数、整改率、最近体检时间等信息，支持按账号名称/ID搜索以及仅看待整改、仅超时未体检筛选
   */
  async DescribePolicyRiskAccountProductStats(
    req: DescribePolicyRiskAccountProductStatsRequest,
    cb?: (error: string, rep: DescribePolicyRiskAccountProductStatsResponse) => void
  ): Promise<DescribePolicyRiskAccountProductStatsResponse> {
    return this.request("DescribePolicyRiskAccountProductStats", req, cb)
  }

  /**
   * 创建NAT ACL规则组（NAT边界防火墙规则组管理）
   */
  async CreateNatAclRuleGroup(
    req: CreateNatAclRuleGroupRequest,
    cb?: (error: string, rep: CreateNatAclRuleGroupResponse) => void
  ): Promise<CreateNatAclRuleGroupResponse> {
    return this.request("CreateNatAclRuleGroup", req, cb)
  }

  /**
   * 修改规则（规则组管理）
   */
  async ModifySecurityGroupRule(
    req: ModifySecurityGroupRuleRequest,
    cb?: (error: string, rep: ModifySecurityGroupRuleResponse) => void
  ): Promise<ModifySecurityGroupRuleResponse> {
    return this.request("ModifySecurityGroupRule", req, cb)
  }

  /**
   * 查询策略下发状态
   */
  async DescribeStrategyDispatchStatus(
    req: DescribeStrategyDispatchStatusRequest,
    cb?: (error: string, rep: DescribeStrategyDispatchStatusResponse) => void
  ): Promise<DescribeStrategyDispatchStatusResponse> {
    return this.request("DescribeStrategyDispatchStatus", req, cb)
  }

  /**
   * 获取实时分析风险详情
   */
  async DescribeRiskAnalysisDetails(
    req: DescribeRiskAnalysisDetailsRequest,
    cb?: (error: string, rep: DescribeRiskAnalysisDetailsResponse) => void
  ): Promise<DescribeRiskAnalysisDetailsResponse> {
    return this.request("DescribeRiskAnalysisDetails", req, cb)
  }

  /**
   * 规则组编辑时添加规则（规则组管理）
   */
  async CreateSecurityGroupRule(
    req: CreateSecurityGroupRuleRequest,
    cb?: (error: string, rep: CreateSecurityGroupRuleResponse) => void
  ): Promise<CreateSecurityGroupRuleResponse> {
    return this.request("CreateSecurityGroupRule", req, cb)
  }

  /**
   * 删除NAT ACL规则
   */
  async DeleteNatAclRule(
    req: DeleteNatAclRuleRequest,
    cb?: (error: string, rep: DeleteNatAclRuleResponse) => void
  ): Promise<DeleteNatAclRuleResponse> {
    return this.request("DeleteNatAclRule", req, cb)
  }

  /**
   * 查询用户所有规则的策略问题
   */
  async DescribeRiskList(
    req: DescribeRiskListRequest,
    cb?: (error: string, rep: DescribeRiskListResponse) => void
  ): Promise<DescribeRiskListResponse> {
    return this.request("DescribeRiskList", req, cb)
  }

  /**
   * 在已有规则组中添加VPC ACL规则
   */
  async CreateVpcAclRule(
    req: CreateVpcAclRuleRequest,
    cb?: (error: string, rep: CreateVpcAclRuleResponse) => void
  ): Promise<CreateVpcAclRuleResponse> {
    return this.request("CreateVpcAclRule", req, cb)
  }

  /**
   * 创建策略风险分析任务
   */
  async CreateAnalyzePolicyTask(
    req: CreateAnalyzePolicyTaskRequest,
    cb?: (error: string, rep: CreateAnalyzePolicyTaskResponse) => void
  ): Promise<CreateAnalyzePolicyTaskResponse> {
    return this.request("CreateAnalyzePolicyTask", req, cb)
  }

  /**
   * 创建策略
   */
  async CreateStrategy(
    req: CreateStrategyRequest,
    cb?: (error: string, rep: CreateStrategyResponse) => void
  ): Promise<CreateStrategyResponse> {
    return this.request("CreateStrategy", req, cb)
  }

  /**
   * 下发策略
   */
  async DispatchStrategy(
    req: DispatchStrategyRequest,
    cb?: (error: string, rep: DispatchStrategyResponse) => void
  ): Promise<DispatchStrategyResponse> {
    return this.request("DispatchStrategy", req, cb)
  }

  /**
   * 创建规则组（规则组管理）
   */
  async CreateSecurityGroupRuleGroup(
    req: CreateSecurityGroupRuleGroupRequest,
    cb?: (error: string, rep: CreateSecurityGroupRuleGroupResponse) => void
  ): Promise<CreateSecurityGroupRuleGroupResponse> {
    return this.request("CreateSecurityGroupRuleGroup", req, cb)
  }

  /**
   * 批量调整互联网边界ACL规则的执行顺序。Sequences 参数必须包含所有受影响的规则序号映射关系。
   */
  async ModifyEdgeAclRuleSequence(
    req: ModifyEdgeAclRuleSequenceRequest,
    cb?: (error: string, rep: ModifyEdgeAclRuleSequenceResponse) => void
  ): Promise<ModifyEdgeAclRuleSequenceResponse> {
    return this.request("ModifyEdgeAclRuleSequence", req, cb)
  }

  /**
   * 查询规则组中规则列表接口
   */
  async DescribeSecurityGroupRules(
    req: DescribeSecurityGroupRulesRequest,
    cb?: (error: string, rep: DescribeSecurityGroupRulesResponse) => void
  ): Promise<DescribeSecurityGroupRulesResponse> {
    return this.request("DescribeSecurityGroupRules", req, cb)
  }

  /**
   * 删除策略
   */
  async DeleteStrategy(
    req: DeleteStrategyRequest,
    cb?: (error: string, rep: DeleteStrategyResponse) => void
  ): Promise<DeleteStrategyResponse> {
    return this.request("DeleteStrategy", req, cb)
  }

  /**
   * 查询VPC ACL规则列表
   */
  async DescribeVpcAclRules(
    req: DescribeVpcAclRulesRequest,
    cb?: (error: string, rep: DescribeVpcAclRulesResponse) => void
  ): Promise<DescribeVpcAclRulesResponse> {
    return this.request("DescribeVpcAclRules", req, cb)
  }

  /**
   * 查询策略体检风险分类统计数据,包含各类风险的规则数量、处置状态、整改率等信息
   */
  async DescribeRiskCategoryStats(
    req: DescribeRiskCategoryStatsRequest,
    cb?: (error: string, rep: DescribeRiskCategoryStatsResponse) => void
  ): Promise<DescribeRiskCategoryStatsResponse> {
    return this.request("DescribeRiskCategoryStats", req, cb)
  }

  /**
   * 查询集团下所有纳管成员账号列表，支持分页、排序和多条件筛选，仅管理员可调用
   */
  async DescribeOrganMembers(
    req: DescribeOrganMembersRequest,
    cb?: (error: string, rep: DescribeOrganMembersResponse) => void
  ): Promise<DescribeOrganMembersResponse> {
    return this.request("DescribeOrganMembers", req, cb)
  }

  /**
   * 快速排序修改策略优先级
   */
  async ModifyStrategySequence(
    req: ModifyStrategySequenceRequest,
    cb?: (error: string, rep: ModifyStrategySequenceResponse) => void
  ): Promise<ModifyStrategySequenceResponse> {
    return this.request("ModifyStrategySequence", req, cb)
  }

  /**
   * 忽略策略问题
   */
  async IgnorePolicyRisk(
    req: IgnorePolicyRiskRequest,
    cb?: (error: string, rep: IgnorePolicyRiskResponse) => void
  ): Promise<IgnorePolicyRiskResponse> {
    return this.request("IgnorePolicyRisk", req, cb)
  }

  /**
   * 删除VPC ACL规则
   */
  async DeleteVpcAclRule(
    req: DeleteVpcAclRuleRequest,
    cb?: (error: string, rep: DeleteVpcAclRuleResponse) => void
  ): Promise<DeleteVpcAclRuleResponse> {
    return this.request("DeleteVpcAclRule", req, cb)
  }

  /**
   * 批量删除互联网边界ACL规则。支持一次删除多条规则。
   */
  async DeleteEdgeAclRule(
    req: DeleteEdgeAclRuleRequest,
    cb?: (error: string, rep: DeleteEdgeAclRuleResponse) => void
  ): Promise<DeleteEdgeAclRuleResponse> {
    return this.request("DeleteEdgeAclRule", req, cb)
  }

  /**
   * 调整VPC ACL规则优先级顺序
   */
  async ModifyVpcAclRuleSequence(
    req: ModifyVpcAclRuleSequenceRequest,
    cb?: (error: string, rep: ModifyVpcAclRuleSequenceResponse) => void
  ): Promise<ModifyVpcAclRuleSequenceResponse> {
    return this.request("ModifyVpcAclRuleSequence", req, cb)
  }

  /**
   * 删除规则组
   */
  async DeleteRuleGroup(
    req: DeleteRuleGroupRequest,
    cb?: (error: string, rep: DeleteRuleGroupResponse) => void
  ): Promise<DeleteRuleGroupResponse> {
    return this.request("DeleteRuleGroup", req, cb)
  }

  /**
   * 在已有规则组中添加NAT ACL规则
   */
  async CreateNatAclRule(
    req: CreateNatAclRuleRequest,
    cb?: (error: string, rep: CreateNatAclRuleResponse) => void
  ): Promise<CreateNatAclRuleResponse> {
    return this.request("CreateNatAclRule", req, cb)
  }

  /**
   * 查询规则详情（规则组管理）
   */
  async DescribeSecurityGroupRule(
    req: DescribeSecurityGroupRuleRequest,
    cb?: (error: string, rep: DescribeSecurityGroupRuleResponse) => void
  ): Promise<DescribeSecurityGroupRuleResponse> {
    return this.request("DescribeSecurityGroupRule", req, cb)
  }

  /**
   * 查询策略列表
   */
  async DescribeStrategies(
    req: DescribeStrategiesRequest,
    cb?: (error: string, rep: DescribeStrategiesResponse) => void
  ): Promise<DescribeStrategiesResponse> {
    return this.request("DescribeStrategies", req, cb)
  }

  /**
   * 查询NAT ACL规则列表
   */
  async DescribeNatAclRules(
    req: DescribeNatAclRulesRequest,
    cb?: (error: string, rep: DescribeNatAclRulesResponse) => void
  ): Promise<DescribeNatAclRulesResponse> {
    return this.request("DescribeNatAclRules", req, cb)
  }

  /**
   * 向已有的互联网边界ACL规则组中添加规则。需要先创建规则组，然后通过此接口添加规则。
   */
  async CreateEdgeAclRule(
    req: CreateEdgeAclRuleRequest,
    cb?: (error: string, rep: CreateEdgeAclRuleResponse) => void
  ): Promise<CreateEdgeAclRuleResponse> {
    return this.request("CreateEdgeAclRule", req, cb)
  }

  /**
   * 创建VPC ACL规则组（VPC间防火墙规则组管理）
   */
  async CreateVpcAclRuleGroup(
    req: CreateVpcAclRuleGroupRequest,
    cb?: (error: string, rep: CreateVpcAclRuleGroupResponse) => void
  ): Promise<CreateVpcAclRuleGroupResponse> {
    return this.request("CreateVpcAclRuleGroup", req, cb)
  }

  /**
   * 查询策略详情
   */
  async DescribeStrategy(
    req: DescribeStrategyRequest,
    cb?: (error: string, rep: DescribeStrategyResponse) => void
  ): Promise<DescribeStrategyResponse> {
    return this.request("DescribeStrategy", req, cb)
  }

  /**
   * 取消忽略策略风险
   */
  async CancelIgnorePolicyRisk(
    req: CancelIgnorePolicyRiskRequest,
    cb?: (error: string, rep: CancelIgnorePolicyRiskResponse) => void
  ): Promise<CancelIgnorePolicyRiskResponse> {
    return this.request("CancelIgnorePolicyRisk", req, cb)
  }

  /**
   * 查询指定规则组下的互联网边界ACL规则列表。支持分页和多种过滤条件。
   */
  async DescribeEdgeAclRules(
    req: DescribeEdgeAclRulesRequest,
    cb?: (error: string, rep: DescribeEdgeAclRulesResponse) => void
  ): Promise<DescribeEdgeAclRulesResponse> {
    return this.request("DescribeEdgeAclRules", req, cb)
  }

  /**
   * 获取集团概览信息，包括集团名称、管理员信息、成员数量等
   */
  async DescribeOrganSummary(
    req?: DescribeOrganSummaryRequest,
    cb?: (error: string, rep: DescribeOrganSummaryResponse) => void
  ): Promise<DescribeOrganSummaryResponse> {
    return this.request("DescribeOrganSummary", req, cb)
  }

  /**
   * 修改策略信息
   */
  async ModifyStrategy(
    req: ModifyStrategyRequest,
    cb?: (error: string, rep: ModifyStrategyResponse) => void
  ): Promise<ModifyStrategyResponse> {
    return this.request("ModifyStrategy", req, cb)
  }

  /**
   * 创建互联网边界ACL规则组，支持同时创建多条规则。Product 必须为 cfw_edge_acl。规则支持 IP、域名、参数模板、实例、标签等多种源/目标类型。
   */
  async CreateEdgeAclRuleGroup(
    req: CreateEdgeAclRuleGroupRequest,
    cb?: (error: string, rep: CreateEdgeAclRuleGroupResponse) => void
  ): Promise<CreateEdgeAclRuleGroupResponse> {
    return this.request("CreateEdgeAclRuleGroup", req, cb)
  }

  /**
   * 删除规则（规则组管理）
   */
  async DeleteSecurityGroupRule(
    req: DeleteSecurityGroupRuleRequest,
    cb?: (error: string, rep: DeleteSecurityGroupRuleResponse) => void
  ): Promise<DeleteSecurityGroupRuleResponse> {
    return this.request("DeleteSecurityGroupRule", req, cb)
  }

  /**
   * 修改互联网边界ACL规则。Rule 参数中必须包含 RuleId 用于指定要修改的规则。
   */
  async ModifyEdgeAclRule(
    req: ModifyEdgeAclRuleRequest,
    cb?: (error: string, rep: ModifyEdgeAclRuleResponse) => void
  ): Promise<ModifyEdgeAclRuleResponse> {
    return this.request("ModifyEdgeAclRule", req, cb)
  }

  /**
   * 修改VPC ACL规则
   */
  async ModifyVpcAclRule(
    req: ModifyVpcAclRuleRequest,
    cb?: (error: string, rep: ModifyVpcAclRuleResponse) => void
  ): Promise<ModifyVpcAclRuleResponse> {
    return this.request("ModifyVpcAclRule", req, cb)
  }

  /**
   * 修改NAT ACL规则
   */
  async ModifyNatAclRule(
    req: ModifyNatAclRuleRequest,
    cb?: (error: string, rep: ModifyNatAclRuleResponse) => void
  ): Promise<ModifyNatAclRuleResponse> {
    return this.request("ModifyNatAclRule", req, cb)
  }
}
