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
  ResourceListInfo,
  ListAggregateDiscoveredResourcesRequest,
  AddAggregateCompliancePackResponse,
  CloseAggregateConfigRuleResponse,
  AddCompliancePackRequest,
  CompliancePackRules,
  ListRemediationsRequest,
  DescribeAggregatorRequest,
  PutEvaluationsResponse,
  OpenAggregateConfigRuleResponse,
  AddAggregateCompliancePackRequest,
  DescribeAggregateCompliancePackResponse,
  StartAggregateConfigRuleEvaluationResponse,
  CloseConfigRecorderRequest,
  DescribeSystemRuleRequest,
  ListConfigRulesResponse,
  SystemCompliancePack,
  DeleteConfigRuleResponse,
  Annotation,
  UpdateRemediationResponse,
  ListSystemRulesResponse,
  CreateAggregatorResponse,
  DeleteAlarmPolicyRequest,
  ListAggregateCompliancePacksResponse,
  ListSystemCompliancePacksResponse,
  Remediation,
  ListAggregateConfigRuleEvaluationResultsResponse,
  CloseAggregateConfigRuleRequest,
  DescribeAggregateDiscoveredResourceResponse,
  AggregatorAccount,
  ListConfigRulesRequest,
  DescribeAggregateConfigRuleRequest,
  Control,
  ListAggregateConfigRulesRequest,
  ListConfigRuleEvaluationResultsResponse,
  UpdateAlarmPolicyResponse,
  DescribeCompliancePackRequest,
  ListDiscoveredResourcesResponse,
  UpdateAggregateCompliancePackStatusResponse,
  Aggregator,
  DescribeAggregateConfigDeliverResponse,
  OpenConfigRecorderResponse,
  UpdateConfigDeliverResponse,
  DescribeConfigRuleResponse,
  UpdateCompliancePackRequest,
  ListCompliancePacksRequest,
  UpdateCompliancePackStatusResponse,
  UpdateAggregateCompliancePackStatusRequest,
  UpdateConfigRecorderResponse,
  ListAlarmPolicyRequest,
  DescribeSystemCompliancePackResponse,
  InputParameterForManage,
  ComplianceConfigRule,
  OpenAggregateConfigRuleRequest,
  ListSystemCompliancePacksRequest,
  ListAlarmPolicyResponse,
  ListAggregatorsResponse,
  ListConfigRuleEvaluationResultsRequest,
  DeleteAggregateConfigRuleResponse,
  CreateAggregatorRequest,
  DescribeConfigRecorderResponse,
  UpdateAggregateCompliancePackRequest,
  CreateRemediationRequest,
  AddCompliancePackResponse,
  TriggerType,
  ConfigResource,
  DescribeAggregateConfigDeliverRequest,
  ListAggregatorsRequest,
  UpdateAggregateConfigDeliverRequest,
  PutEvaluationsRequest,
  UpdateConfigRuleRequest,
  UserConfigResource,
  DetachConfigRuleToCompliancePackRequest,
  UpdateRemediationRequest,
  AggregateEvaluationResult,
  SystemConfigRule,
  DetachAggregateConfigRuleToCompliancePackResponse,
  DescribeAggregateDiscoveredResourceRequest,
  AddConfigRuleResponse,
  SourceConditionForManage,
  AddConfigRuleRequest,
  ListCompliancePacksResponse,
  DescribeConfigDeliverResponse,
  DetachConfigRuleToCompliancePackResponse,
  UpdateAlarmPolicyRequest,
  CloseConfigRuleRequest,
  DescribeSystemCompliancePackRequest,
  Evaluation,
  AddAggregateConfigRuleResponse,
  OpenConfigRuleResponse,
  DescribeDiscoveredResourceResponse,
  RemediationExecutions,
  DescribeConfigDeliverRequest,
  UpdateConfigRuleResponse,
  DetachAggregateConfigRuleToCompliancePackRequest,
  ListAggregateCompliancePacksRequest,
  ListResourceTypesResponse,
  DeleteRemediationsResponse,
  DeleteConfigRuleRequest,
  Filter,
  ListAggregateConfigRuleEvaluationResultsRequest,
  UpdateCompliancePackStatusRequest,
  DeleteAggregateConfigRuleRequest,
  DeleteCompliancePackResponse,
  CreateRemediationResponse,
  UpdateAggregateConfigDeliverResponse,
  UpdateAggregateCompliancePackResponse,
  CompliancePackRuleForManage,
  DeleteAggregateCompliancePackRequest,
  ListSystemRulesRequest,
  AggregateResourceInfo,
  DescribeAggregatorResponse,
  AddAlarmPolicyResponse,
  EvaluationResult,
  ConfigCompliancePack,
  DescribeAggregateConfigRuleResponse,
  StartAggregateConfigRuleEvaluationRequest,
  ListRemediationExecutionsRequest,
  CompliancePackRule,
  DescribeDiscoveredResourceRequest,
  ListRemediationExecutionsResponse,
  CloseConfigRecorderResponse,
  DescribeConfigRecorderRequest,
  StartConfigRuleEvaluationRequest,
  DescribeConfigRuleRequest,
  UpdateConfigDeliverRequest,
  ListDiscoveredResourcesRequest,
  AddAlarmPolicyRequest,
  ConfigRule,
  Tag,
  ListResourceTypesRequest,
  UpdateConfigRecorderRequest,
  UpdateCompliancePackResponse,
  ListAggregateConfigRulesResponse,
  StartRemediationResponse,
  DeleteAggregateCompliancePackResponse,
  DescribeCompliancePackResponse,
  DescribeAggregateCompliancePackRequest,
  OpenConfigRuleRequest,
  StartRemediationRequest,
  CloseConfigRuleResponse,
  DescribeSystemRuleResponse,
  AlarmPolicyRsp,
  UpdateAggregateConfigRuleRequest,
  OpenConfigRecorderRequest,
  DeleteAlarmPolicyResponse,
  AddAggregateConfigRuleRequest,
  DeleteCompliancePackRequest,
  StartConfigRuleEvaluationResponse,
  ListAggregateDiscoveredResourcesResponse,
  UpdateAggregateConfigRuleResponse,
  InputParameter,
  ListRemediationsResponse,
  DeleteRemediationsRequest,
} from "./config_models"

/**
 * config client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("config.tencentcloudapi.com", "2022-08-02", clientConfig)
  }

  /**
   * 新建 规则
   */
  async AddConfigRule(
    req: AddConfigRuleRequest,
    cb?: (error: string, rep: AddConfigRuleResponse) => void
  ): Promise<AddConfigRuleResponse> {
    return this.request("AddConfigRule", req, cb)
  }

  /**
   * 合规包详情
   */
  async DescribeCompliancePack(
    req: DescribeCompliancePackRequest,
    cb?: (error: string, rep: DescribeCompliancePackResponse) => void
  ): Promise<DescribeCompliancePackResponse> {
    return this.request("DescribeCompliancePack", req, cb)
  }

  /**
   * 账号组触发评估
   */
  async StartAggregateConfigRuleEvaluation(
    req: StartAggregateConfigRuleEvaluationRequest,
    cb?: (error: string, rep: StartAggregateConfigRuleEvaluationResponse) => void
  ): Promise<StartAggregateConfigRuleEvaluationResponse> {
    return this.request("StartAggregateConfigRuleEvaluation", req, cb)
  }

  /**
   * 账号组编辑投递设置
   */
  async UpdateAggregateConfigDeliver(
    req: UpdateAggregateConfigDeliverRequest,
    cb?: (error: string, rep: UpdateAggregateConfigDeliverResponse) => void
  ): Promise<UpdateAggregateConfigDeliverResponse> {
    return this.request("UpdateAggregateConfigDeliver", req, cb)
  }

  /**
   * 获取资源列表
   */
  async ListDiscoveredResources(
    req: ListDiscoveredResourcesRequest,
    cb?: (error: string, rep: ListDiscoveredResourcesResponse) => void
  ): Promise<ListDiscoveredResourcesResponse> {
    return this.request("ListDiscoveredResources", req, cb)
  }

  /**
   * 账号组列表
   */
  async ListAggregators(
    req: ListAggregatorsRequest,
    cb?: (error: string, rep: ListAggregatorsResponse) => void
  ): Promise<ListAggregatorsResponse> {
    return this.request("ListAggregators", req, cb)
  }

  /**
   * 获取规则列表
   */
  async ListConfigRules(
    req: ListConfigRulesRequest,
    cb?: (error: string, rep: ListConfigRulesResponse) => void
  ): Promise<ListConfigRulesResponse> {
    return this.request("ListConfigRules", req, cb)
  }

  /**
   * 开启规则
   */
  async OpenConfigRule(
    req: OpenConfigRuleRequest,
    cb?: (error: string, rep: OpenConfigRuleResponse) => void
  ): Promise<OpenConfigRuleResponse> {
    return this.request("OpenConfigRule", req, cb)
  }

  /**
   * 新建账号组
   */
  async CreateAggregator(
    req: CreateAggregatorRequest,
    cb?: (error: string, rep: CreateAggregatorResponse) => void
  ): Promise<CreateAggregatorResponse> {
    return this.request("CreateAggregator", req, cb)
  }

  /**
   * 资源监控管理-开启监控
   */
  async OpenConfigRecorder(
    req?: OpenConfigRecorderRequest,
    cb?: (error: string, rep: OpenConfigRecorderResponse) => void
  ): Promise<OpenConfigRecorderResponse> {
    return this.request("OpenConfigRecorder", req, cb)
  }

  /**
   * 触发评估
   */
  async StartConfigRuleEvaluation(
    req: StartConfigRuleEvaluationRequest,
    cb?: (error: string, rep: StartConfigRuleEvaluationResponse) => void
  ): Promise<StartConfigRuleEvaluationResponse> {
    return this.request("StartConfigRuleEvaluation", req, cb)
  }

  /**
   * 删除告警规则
   */
  async DeleteAlarmPolicy(
    req: DeleteAlarmPolicyRequest,
    cb?: (error: string, rep: DeleteAlarmPolicyResponse) => void
  ): Promise<DeleteAlarmPolicyResponse> {
    return this.request("DeleteAlarmPolicy", req, cb)
  }

  /**
   * 账号组新建规则
   */
  async AddAggregateConfigRule(
    req: AddAggregateConfigRuleRequest,
    cb?: (error: string, rep: AddAggregateConfigRuleResponse) => void
  ): Promise<AddAggregateConfigRuleResponse> {
    return this.request("AddAggregateConfigRule", req, cb)
  }

  /**
   * 账号组获取资源列表
   */
  async ListAggregateDiscoveredResources(
    req: ListAggregateDiscoveredResourcesRequest,
    cb?: (error: string, rep: ListAggregateDiscoveredResourcesResponse) => void
  ): Promise<ListAggregateDiscoveredResourcesResponse> {
    return this.request("ListAggregateDiscoveredResources", req, cb)
  }

  /**
   * 新增规则修正设置
   */
  async CreateRemediation(
    req: CreateRemediationRequest,
    cb?: (error: string, rep: CreateRemediationResponse) => void
  ): Promise<CreateRemediationResponse> {
    return this.request("CreateRemediation", req, cb)
  }

  /**
   * 获取预设规则列表
   */
  async ListSystemRules(
    req: ListSystemRulesRequest,
    cb?: (error: string, rep: ListSystemRulesResponse) => void
  ): Promise<ListSystemRulesResponse> {
    return this.request("ListSystemRules", req, cb)
  }

  /**
   * 删除规则
   */
  async DeleteConfigRule(
    req: DeleteConfigRuleRequest,
    cb?: (error: string, rep: DeleteConfigRuleResponse) => void
  ): Promise<DeleteConfigRuleResponse> {
    return this.request("DeleteConfigRule", req, cb)
  }

  /**
   * 获取资源类型列表
   */
  async ListResourceTypes(
    req?: ListResourceTypesRequest,
    cb?: (error: string, rep: ListResourceTypesResponse) => void
  ): Promise<ListResourceTypesResponse> {
    return this.request("ListResourceTypes", req, cb)
  }

  /**
   * 新增告警监控规则
   */
  async UpdateRemediation(
    req: UpdateRemediationRequest,
    cb?: (error: string, rep: UpdateRemediationResponse) => void
  ): Promise<UpdateRemediationResponse> {
    return this.request("UpdateRemediation", req, cb)
  }

  /**
   * 编辑合规包
   */
  async UpdateCompliancePack(
    req: UpdateCompliancePackRequest,
    cb?: (error: string, rep: UpdateCompliancePackResponse) => void
  ): Promise<UpdateCompliancePackResponse> {
    return this.request("UpdateCompliancePack", req, cb)
  }

  /**
   * 手动执行规则修复
   */
  async StartRemediation(
    req: StartRemediationRequest,
    cb?: (error: string, rep: StartRemediationResponse) => void
  ): Promise<StartRemediationResponse> {
    return this.request("StartRemediation", req, cb)
  }

  /**
   * 获取投递设置详情
   */
  async DescribeConfigDeliver(
    req?: DescribeConfigDeliverRequest,
    cb?: (error: string, rep: DescribeConfigDeliverResponse) => void
  ): Promise<DescribeConfigDeliverResponse> {
    return this.request("DescribeConfigDeliver", req, cb)
  }

  /**
   * 修正设置列表
   */
  async ListRemediations(
    req: ListRemediationsRequest,
    cb?: (error: string, rep: ListRemediationsResponse) => void
  ): Promise<ListRemediationsResponse> {
    return this.request("ListRemediations", req, cb)
  }

  /**
   * 编辑投递设置
   */
  async UpdateConfigDeliver(
    req: UpdateConfigDeliverRequest,
    cb?: (error: string, rep: UpdateConfigDeliverResponse) => void
  ): Promise<UpdateConfigDeliverResponse> {
    return this.request("UpdateConfigDeliver", req, cb)
  }

  /**
   * 账号组删除合规包
   */
  async DeleteAggregateCompliancePack(
    req: DeleteAggregateCompliancePackRequest,
    cb?: (error: string, rep: DeleteAggregateCompliancePackResponse) => void
  ): Promise<DeleteAggregateCompliancePackResponse> {
    return this.request("DeleteAggregateCompliancePack", req, cb)
  }

  /**
   * 账号组获取合规包列表
   */
  async ListAggregateCompliancePacks(
    req: ListAggregateCompliancePacksRequest,
    cb?: (error: string, rep: ListAggregateCompliancePacksResponse) => void
  ): Promise<ListAggregateCompliancePacksResponse> {
    return this.request("ListAggregateCompliancePacks", req, cb)
  }

  /**
   * 账号组获取规则详情
   */
  async DescribeAggregateConfigRule(
    req: DescribeAggregateConfigRuleRequest,
    cb?: (error: string, rep: DescribeAggregateConfigRuleResponse) => void
  ): Promise<DescribeAggregateConfigRuleResponse> {
    return this.request("DescribeAggregateConfigRule", req, cb)
  }

  /**
   * 获取监控详情
   */
  async DescribeConfigRecorder(
    req?: DescribeConfigRecorderRequest,
    cb?: (error: string, rep: DescribeConfigRecorderResponse) => void
  ): Promise<DescribeConfigRecorderResponse> {
    return this.request("DescribeConfigRecorder", req, cb)
  }

  /**
   * 告警规则列表
   */
  async ListAlarmPolicy(
    req: ListAlarmPolicyRequest,
    cb?: (error: string, rep: ListAlarmPolicyResponse) => void
  ): Promise<ListAlarmPolicyResponse> {
    return this.request("ListAlarmPolicy", req, cb)
  }

  /**
   * 账号组编辑规则
   */
  async UpdateAggregateConfigRule(
    req: UpdateAggregateConfigRuleRequest,
    cb?: (error: string, rep: UpdateAggregateConfigRuleResponse) => void
  ): Promise<UpdateAggregateConfigRuleResponse> {
    return this.request("UpdateAggregateConfigRule", req, cb)
  }

  /**
   * 开启、关闭合规包
   */
  async UpdateCompliancePackStatus(
    req: UpdateCompliancePackStatusRequest,
    cb?: (error: string, rep: UpdateCompliancePackStatusResponse) => void
  ): Promise<UpdateCompliancePackStatusResponse> {
    return this.request("UpdateCompliancePackStatus", req, cb)
  }

  /**
   * 新增告警监控规则
   */
  async AddAlarmPolicy(
    req: AddAlarmPolicyRequest,
    cb?: (error: string, rep: AddAlarmPolicyResponse) => void
  ): Promise<AddAlarmPolicyResponse> {
    return this.request("AddAlarmPolicy", req, cb)
  }

  /**
   * 账号组合规包详情
   */
  async DescribeAggregateCompliancePack(
    req: DescribeAggregateCompliancePackRequest,
    cb?: (error: string, rep: DescribeAggregateCompliancePackResponse) => void
  ): Promise<DescribeAggregateCompliancePackResponse> {
    return this.request("DescribeAggregateCompliancePack", req, cb)
  }

  /**
   * 账号组开启规则
   */
  async OpenAggregateConfigRule(
    req: OpenAggregateConfigRuleRequest,
    cb?: (error: string, rep: OpenAggregateConfigRuleResponse) => void
  ): Promise<OpenAggregateConfigRuleResponse> {
    return this.request("OpenAggregateConfigRule", req, cb)
  }

  /**
   * 账号组获取投递设置详情
   */
  async DescribeAggregateConfigDeliver(
    req: DescribeAggregateConfigDeliverRequest,
    cb?: (error: string, rep: DescribeAggregateConfigDeliverResponse) => void
  ): Promise<DescribeAggregateConfigDeliverResponse> {
    return this.request("DescribeAggregateConfigDeliver", req, cb)
  }

  /**
   * 合规包移除规则
   */
  async DetachConfigRuleToCompliancePack(
    req: DetachConfigRuleToCompliancePackRequest,
    cb?: (error: string, rep: DetachConfigRuleToCompliancePackResponse) => void
  ): Promise<DetachConfigRuleToCompliancePackResponse> {
    return this.request("DetachConfigRuleToCompliancePack", req, cb)
  }

  /**
   * 获取规则详情
   */
  async DescribeConfigRule(
    req: DescribeConfigRuleRequest,
    cb?: (error: string, rep: DescribeConfigRuleResponse) => void
  ): Promise<DescribeConfigRuleResponse> {
    return this.request("DescribeConfigRule", req, cb)
  }

  /**
   * 账号组获取评估结果--规则维度（某个规则下资源的评估结果列表）
   */
  async ListAggregateConfigRuleEvaluationResults(
    req: ListAggregateConfigRuleEvaluationResultsRequest,
    cb?: (error: string, rep: ListAggregateConfigRuleEvaluationResultsResponse) => void
  ): Promise<ListAggregateConfigRuleEvaluationResultsResponse> {
    return this.request("ListAggregateConfigRuleEvaluationResults", req, cb)
  }

  /**
   * 新建合规包
   */
  async AddCompliancePack(
    req: AddCompliancePackRequest,
    cb?: (error: string, rep: AddCompliancePackResponse) => void
  ): Promise<AddCompliancePackResponse> {
    return this.request("AddCompliancePack", req, cb)
  }

  /**
   * 资源监控管理-关闭监控
   */
  async CloseConfigRecorder(
    req?: CloseConfigRecorderRequest,
    cb?: (error: string, rep: CloseConfigRecorderResponse) => void
  ): Promise<CloseConfigRecorderResponse> {
    return this.request("CloseConfigRecorder", req, cb)
  }

  /**
   * 资源详情
   */
  async DescribeDiscoveredResource(
    req: DescribeDiscoveredResourceRequest,
    cb?: (error: string, rep: DescribeDiscoveredResourceResponse) => void
  ): Promise<DescribeDiscoveredResourceResponse> {
    return this.request("DescribeDiscoveredResource", req, cb)
  }

  /**
   * 更新告警规则
   */
  async UpdateAlarmPolicy(
    req: UpdateAlarmPolicyRequest,
    cb?: (error: string, rep: UpdateAlarmPolicyResponse) => void
  ): Promise<UpdateAlarmPolicyResponse> {
    return this.request("UpdateAlarmPolicy", req, cb)
  }

  /**
   * 账号组详情
   */
  async DescribeAggregator(
    req: DescribeAggregatorRequest,
    cb?: (error: string, rep: DescribeAggregatorResponse) => void
  ): Promise<DescribeAggregatorResponse> {
    return this.request("DescribeAggregator", req, cb)
  }

  /**
   * 编辑监控范围
   */
  async UpdateConfigRecorder(
    req: UpdateConfigRecorderRequest,
    cb?: (error: string, rep: UpdateConfigRecorderResponse) => void
  ): Promise<UpdateConfigRecorderResponse> {
    return this.request("UpdateConfigRecorder", req, cb)
  }

  /**
   * 删除规则修正设置
   */
  async DeleteRemediations(
    req: DeleteRemediationsRequest,
    cb?: (error: string, rep: DeleteRemediationsResponse) => void
  ): Promise<DeleteRemediationsResponse> {
    return this.request("DeleteRemediations", req, cb)
  }

  /**
   * 上报自定义规则评估结果
   */
  async PutEvaluations(
    req: PutEvaluationsRequest,
    cb?: (error: string, rep: PutEvaluationsResponse) => void
  ): Promise<PutEvaluationsResponse> {
    return this.request("PutEvaluations", req, cb)
  }

  /**
   * 账号组编辑合规包
   */
  async UpdateAggregateCompliancePack(
    req: UpdateAggregateCompliancePackRequest,
    cb?: (error: string, rep: UpdateAggregateCompliancePackResponse) => void
  ): Promise<UpdateAggregateCompliancePackResponse> {
    return this.request("UpdateAggregateCompliancePack", req, cb)
  }

  /**
   * 获取系统合规包详情
   */
  async DescribeSystemCompliancePack(
    req: DescribeSystemCompliancePackRequest,
    cb?: (error: string, rep: DescribeSystemCompliancePackResponse) => void
  ): Promise<DescribeSystemCompliancePackResponse> {
    return this.request("DescribeSystemCompliancePack", req, cb)
  }

  /**
   * 编辑规则
   */
  async UpdateConfigRule(
    req: UpdateConfigRuleRequest,
    cb?: (error: string, rep: UpdateConfigRuleResponse) => void
  ): Promise<UpdateConfigRuleResponse> {
    return this.request("UpdateConfigRule", req, cb)
  }

  /**
   * 预设规则详情
   */
  async DescribeSystemRule(
    req: DescribeSystemRuleRequest,
    cb?: (error: string, rep: DescribeSystemRuleResponse) => void
  ): Promise<DescribeSystemRuleResponse> {
    return this.request("DescribeSystemRule", req, cb)
  }

  /**
   * 账号组关闭规则
   */
  async CloseAggregateConfigRule(
    req: CloseAggregateConfigRuleRequest,
    cb?: (error: string, rep: CloseAggregateConfigRuleResponse) => void
  ): Promise<CloseAggregateConfigRuleResponse> {
    return this.request("CloseAggregateConfigRule", req, cb)
  }

  /**
   * 账号组合规包移除规则
   */
  async DetachAggregateConfigRuleToCompliancePack(
    req: DetachAggregateConfigRuleToCompliancePackRequest,
    cb?: (error: string, rep: DetachAggregateConfigRuleToCompliancePackResponse) => void
  ): Promise<DetachAggregateConfigRuleToCompliancePackResponse> {
    return this.request("DetachAggregateConfigRuleToCompliancePack", req, cb)
  }

  /**
   * 修正记录
   */
  async ListRemediationExecutions(
    req: ListRemediationExecutionsRequest,
    cb?: (error: string, rep: ListRemediationExecutionsResponse) => void
  ): Promise<ListRemediationExecutionsResponse> {
    return this.request("ListRemediationExecutions", req, cb)
  }

  /**
   * 账号组获取规则列表
   */
  async ListAggregateConfigRules(
    req: ListAggregateConfigRulesRequest,
    cb?: (error: string, rep: ListAggregateConfigRulesResponse) => void
  ): Promise<ListAggregateConfigRulesResponse> {
    return this.request("ListAggregateConfigRules", req, cb)
  }

  /**
   * 获取系统合规包列表
   */
  async ListSystemCompliancePacks(
    req: ListSystemCompliancePacksRequest,
    cb?: (error: string, rep: ListSystemCompliancePacksResponse) => void
  ): Promise<ListSystemCompliancePacksResponse> {
    return this.request("ListSystemCompliancePacks", req, cb)
  }

  /**
   *  获取评估结果--规则维度（某个规则下资源的评估结果列表）
   */
  async ListConfigRuleEvaluationResults(
    req: ListConfigRuleEvaluationResultsRequest,
    cb?: (error: string, rep: ListConfigRuleEvaluationResultsResponse) => void
  ): Promise<ListConfigRuleEvaluationResultsResponse> {
    return this.request("ListConfigRuleEvaluationResults", req, cb)
  }

  /**
   * 账号组新建合规包
   */
  async AddAggregateCompliancePack(
    req: AddAggregateCompliancePackRequest,
    cb?: (error: string, rep: AddAggregateCompliancePackResponse) => void
  ): Promise<AddAggregateCompliancePackResponse> {
    return this.request("AddAggregateCompliancePack", req, cb)
  }

  /**
   * 账号组资源详情
   */
  async DescribeAggregateDiscoveredResource(
    req: DescribeAggregateDiscoveredResourceRequest,
    cb?: (error: string, rep: DescribeAggregateDiscoveredResourceResponse) => void
  ): Promise<DescribeAggregateDiscoveredResourceResponse> {
    return this.request("DescribeAggregateDiscoveredResource", req, cb)
  }

  /**
   * 账号组开启、关闭合规包
   */
  async UpdateAggregateCompliancePackStatus(
    req: UpdateAggregateCompliancePackStatusRequest,
    cb?: (error: string, rep: UpdateAggregateCompliancePackStatusResponse) => void
  ): Promise<UpdateAggregateCompliancePackStatusResponse> {
    return this.request("UpdateAggregateCompliancePackStatus", req, cb)
  }

  /**
   * 关闭规则
   */
  async CloseConfigRule(
    req: CloseConfigRuleRequest,
    cb?: (error: string, rep: CloseConfigRuleResponse) => void
  ): Promise<CloseConfigRuleResponse> {
    return this.request("CloseConfigRule", req, cb)
  }

  /**
   * 获取合规包列表
   */
  async ListCompliancePacks(
    req: ListCompliancePacksRequest,
    cb?: (error: string, rep: ListCompliancePacksResponse) => void
  ): Promise<ListCompliancePacksResponse> {
    return this.request("ListCompliancePacks", req, cb)
  }

  /**
   * 删除合规包
   */
  async DeleteCompliancePack(
    req: DeleteCompliancePackRequest,
    cb?: (error: string, rep: DeleteCompliancePackResponse) => void
  ): Promise<DeleteCompliancePackResponse> {
    return this.request("DeleteCompliancePack", req, cb)
  }

  /**
   * 账号组删除规则
   */
  async DeleteAggregateConfigRule(
    req: DeleteAggregateConfigRuleRequest,
    cb?: (error: string, rep: DeleteAggregateConfigRuleResponse) => void
  ): Promise<DeleteAggregateConfigRuleResponse> {
    return this.request("DeleteAggregateConfigRule", req, cb)
  }
}
