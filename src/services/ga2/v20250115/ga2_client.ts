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
  DescribeTaskResultResponse,
  DeleteGlobalAcceleratorAccessLogRequest,
  DescribeEndpointGroupsResponse,
  ReplaceListenerAdditionalCertResponse,
  CreateForwardingRuleRequest,
  DescribeGlobalAcceleratorAccessLogResponse,
  DescribeForwardingPolicyResponse,
  CreateGlobalAcceleratorRequest,
  DescribeCrossBorderSettlementRequest,
  CreateListenerAdditionalCertResponse,
  DeleteGlobalAcceleratorAclPolicyResponse,
  CreateAccelerateAreasResponse,
  DescribeEndpointGroupsRequest,
  ResponseHeaders,
  DescribeGlobalAcceleratorAclRulesRequest,
  DeleteGlobalAcceleratorAclRuleResponse,
  DescribeAccessLogParamResponse,
  ModifyGlobalAcceleratorResponse,
  RuleAction,
  DeleteEndpointGroupsRequest,
  ModifyEndpointGroupRequest,
  ReplaceListenerAdditionalCertRequest,
  ModifyGlobalAcceleratorAclPolicyRequest,
  EndpointGroupConfigurationSet,
  DescribeGlobalAcceleratorsResponse,
  ModifyGlobalAcceleratorAccessLogRequest,
  DescribeListenersResponse,
  CreateForwardingPolicyRequest,
  DeleteListenerAdditionalCertResponse,
  AclEntries,
  ModifyForwardingPolicyRequest,
  DescribeGlobalAcceleratorAccessLogRequest,
  CreateListenerAdditionalCertRequest,
  DeleteListenerAdditionalCertRequest,
  DescribeGlobalAcceleratorsRequest,
  DeleteGlobalAcceleratorAclRuleRequest,
  Tag,
  ModifyAccelerateAreasResponse,
  EndpointConfigurations,
  PortRanges,
  ModifyGlobalAcceleratorAclPolicyResponse,
  ModifyAccessLogStatusRequest,
  DeleteListenerRequest,
  CreateGlobalAcceleratorAclPolicyRequest,
  DescribeForwardingRuleRequest,
  CreateGlobalAcceleratorAccessLogResponse,
  DeleteEndpointGroupsResponse,
  DescribeAccelerateAreasResponse,
  EndpointGroupConfiguration,
  GlobalAcceleratorSet,
  AcceleratorAreas,
  CreateEndpointGroupRequest,
  CreateEndpointGroupResponse,
  DeleteGlobalAcceleratorResponse,
  CreateGlobalAcceleratorAclRuleResponse,
  DescribeAccelerateRegionsResponse,
  ForwardingRuleSet,
  CreateForwardingRuleResponse,
  CreateGlobalAcceleratorAclPolicyResponse,
  CreateGlobalAcceleratorAccessLogRequest,
  ModifyGlobalAcceleratorAclRuleRequest,
  AcceleratorRegionSet,
  CreateListenerResponse,
  ModifyForwardingPolicyResponse,
  CreateGlobalAcceleratorAclRuleRequest,
  ModifyListenerRequest,
  RuleCondition,
  HideResponseHeaders,
  DescribeForwardingRuleResponse,
  GlobalAcceleratorAclPolicies,
  GlobalAcceleratorAclRuleSet,
  DeleteGlobalAcceleratorRequest,
  ModifyForwardingRuleRequest,
  ModifyListenerResponse,
  DeleteGlobalAcceleratorAccessLogResponse,
  DeleteForwardingPolicyRequest,
  CreateListenerRequest,
  DescribeTaskResultRequest,
  ModifyGlobalAcceleratorRequest,
  Filter,
  DescribeAccelerateRegionsRequest,
  DeleteForwardingRuleResponse,
  CreateForwardingPolicyResponse,
  ForwardingPolicySet,
  ModifyGlobalAcceleratorAclRuleResponse,
  IpAddressInfoSet,
  DeleteForwardingPolicyResponse,
  ModifyEndpointGroupResponse,
  ListenerSet,
  DescribeGlobalAcceleratorAclRulesResponse,
  GlobalAcceleratorAccessLog,
  ModifyAccessLogStatusResponse,
  DescribeAccelerateAreasRequest,
  CreateAccelerateAreasRequest,
  DescribeCrossBorderSettlementResponse,
  DeleteAccelerateAreasRequest,
  ModifyGlobalAcceleratorAccessLogResponse,
  DeleteAccelerateAreasResponse,
  DescribeGlobalAcceleratorAclPoliciesRequest,
  DescribeGlobalAcceleratorAclPoliciesResponse,
  ModifyForwardingRuleResponse,
  ModifyAccelerateAreasRequest,
  CreateGlobalAcceleratorResponse,
  DescribeListenersRequest,
  DescribeForwardingPolicyRequest,
  DeleteForwardingRuleRequest,
  OriginHeader,
  DeleteListenerResponse,
  DeleteGlobalAcceleratorAclPolicyRequest,
  DescribeAccessLogParamRequest,
  PortOverride,
} from "./ga2_models"

/**
 * ga2 client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("ga2.tencentcloudapi.com", "2025-01-15", clientConfig)
  }

  /**
   * 修改七层转发策略
   */
  async ModifyForwardingPolicy(
    req: ModifyForwardingPolicyRequest,
    cb?: (error: string, rep: ModifyForwardingPolicyResponse) => void
  ): Promise<ModifyForwardingPolicyResponse> {
    return this.request("ModifyForwardingPolicy", req, cb)
  }

  /**
   * 创建七层转发策略
   */
  async CreateForwardingPolicy(
    req: CreateForwardingPolicyRequest,
    cb?: (error: string, rep: CreateForwardingPolicyResponse) => void
  ): Promise<CreateForwardingPolicyResponse> {
    return this.request("CreateForwardingPolicy", req, cb)
  }

  /**
   * 创建终端节点组。
   */
  async CreateEndpointGroup(
    req: CreateEndpointGroupRequest,
    cb?: (error: string, rep: CreateEndpointGroupResponse) => void
  ): Promise<CreateEndpointGroupResponse> {
    return this.request("CreateEndpointGroup", req, cb)
  }

  /**
   * 查询加速地域
   */
  async DescribeAccelerateAreas(
    req: DescribeAccelerateAreasRequest,
    cb?: (error: string, rep: DescribeAccelerateAreasResponse) => void
  ): Promise<DescribeAccelerateAreasResponse> {
    return this.request("DescribeAccelerateAreas", req, cb)
  }

  /**
   * 删除全球加速实例
   */
  async DeleteGlobalAccelerator(
    req: DeleteGlobalAcceleratorRequest,
    cb?: (error: string, rep: DeleteGlobalAcceleratorResponse) => void
  ): Promise<DeleteGlobalAcceleratorResponse> {
    return this.request("DeleteGlobalAccelerator", req, cb)
  }

  /**
   * 删除GA日志任务
   */
  async DeleteGlobalAcceleratorAccessLog(
    req: DeleteGlobalAcceleratorAccessLogRequest,
    cb?: (error: string, rep: DeleteGlobalAcceleratorAccessLogResponse) => void
  ): Promise<DeleteGlobalAcceleratorAccessLogResponse> {
    return this.request("DeleteGlobalAcceleratorAccessLog", req, cb)
  }

  /**
   * 删除监听器
   */
  async DeleteListener(
    req: DeleteListenerRequest,
    cb?: (error: string, rep: DeleteListenerResponse) => void
  ): Promise<DeleteListenerResponse> {
    return this.request("DeleteListener", req, cb)
  }

  /**
   * 删除七层转发策略
   */
  async DeleteForwardingPolicy(
    req: DeleteForwardingPolicyRequest,
    cb?: (error: string, rep: DeleteForwardingPolicyResponse) => void
  ): Promise<DeleteForwardingPolicyResponse> {
    return this.request("DeleteForwardingPolicy", req, cb)
  }

  /**
   * 查询跨境账单
   */
  async DescribeCrossBorderSettlement(
    req: DescribeCrossBorderSettlementRequest,
    cb?: (error: string, rep: DescribeCrossBorderSettlementResponse) => void
  ): Promise<DescribeCrossBorderSettlementResponse> {
    return this.request("DescribeCrossBorderSettlement", req, cb)
  }

  /**
   * 查看ACL规则
   */
  async DescribeGlobalAcceleratorAclRules(
    req: DescribeGlobalAcceleratorAclRulesRequest,
    cb?: (error: string, rep: DescribeGlobalAcceleratorAclRulesResponse) => void
  ): Promise<DescribeGlobalAcceleratorAclRulesResponse> {
    return this.request("DescribeGlobalAcceleratorAclRules", req, cb)
  }

  /**
   * 删除ACL规则
   */
  async DeleteGlobalAcceleratorAclRule(
    req: DeleteGlobalAcceleratorAclRuleRequest,
    cb?: (error: string, rep: DeleteGlobalAcceleratorAclRuleResponse) => void
  ): Promise<DeleteGlobalAcceleratorAclRuleResponse> {
    return this.request("DeleteGlobalAcceleratorAclRule", req, cb)
  }

  /**
   * 修改监听器
   */
  async ModifyListener(
    req: ModifyListenerRequest,
    cb?: (error: string, rep: ModifyListenerResponse) => void
  ): Promise<ModifyListenerResponse> {
    return this.request("ModifyListener", req, cb)
  }

  /**
   * 查询可选加速区域
   */
  async DescribeAccelerateRegions(
    req?: DescribeAccelerateRegionsRequest,
    cb?: (error: string, rep: DescribeAccelerateRegionsResponse) => void
  ): Promise<DescribeAccelerateRegionsResponse> {
    return this.request("DescribeAccelerateRegions", req, cb)
  }

  /**
   * 修改访问控制策略状态
   */
  async ModifyGlobalAcceleratorAclPolicy(
    req: ModifyGlobalAcceleratorAclPolicyRequest,
    cb?: (error: string, rep: ModifyGlobalAcceleratorAclPolicyResponse) => void
  ): Promise<ModifyGlobalAcceleratorAclPolicyResponse> {
    return this.request("ModifyGlobalAcceleratorAclPolicy", req, cb)
  }

  /**
   * 创建ACL规则
   */
  async CreateGlobalAcceleratorAclRule(
    req: CreateGlobalAcceleratorAclRuleRequest,
    cb?: (error: string, rep: CreateGlobalAcceleratorAclRuleResponse) => void
  ): Promise<CreateGlobalAcceleratorAclRuleResponse> {
    return this.request("CreateGlobalAcceleratorAclRule", req, cb)
  }

  /**
   * 修改GA访问日志
   */
  async ModifyGlobalAcceleratorAccessLog(
    req: ModifyGlobalAcceleratorAccessLogRequest,
    cb?: (error: string, rep: ModifyGlobalAcceleratorAccessLogResponse) => void
  ): Promise<ModifyGlobalAcceleratorAccessLogResponse> {
    return this.request("ModifyGlobalAcceleratorAccessLog", req, cb)
  }

  /**
   * 修改七层转发规则
   */
  async ModifyForwardingRule(
    req: ModifyForwardingRuleRequest,
    cb?: (error: string, rep: ModifyForwardingRuleResponse) => void
  ): Promise<ModifyForwardingRuleResponse> {
    return this.request("ModifyForwardingRule", req, cb)
  }

  /**
   * 查询终端节点组。
   */
  async DescribeEndpointGroups(
    req: DescribeEndpointGroupsRequest,
    cb?: (error: string, rep: DescribeEndpointGroupsResponse) => void
  ): Promise<DescribeEndpointGroupsResponse> {
    return this.request("DescribeEndpointGroups", req, cb)
  }

  /**
   * 查询异步任务结果
   */
  async DescribeTaskResult(
    req: DescribeTaskResultRequest,
    cb?: (error: string, rep: DescribeTaskResultResponse) => void
  ): Promise<DescribeTaskResultResponse> {
    return this.request("DescribeTaskResult", req, cb)
  }

  /**
   * 创建访问控制策略
   */
  async CreateGlobalAcceleratorAclPolicy(
    req: CreateGlobalAcceleratorAclPolicyRequest,
    cb?: (error: string, rep: CreateGlobalAcceleratorAclPolicyResponse) => void
  ): Promise<CreateGlobalAcceleratorAclPolicyResponse> {
    return this.request("CreateGlobalAcceleratorAclPolicy", req, cb)
  }

  /**
   * 查看访问日志上报参数
   */
  async DescribeAccessLogParam(
    req?: DescribeAccessLogParamRequest,
    cb?: (error: string, rep: DescribeAccessLogParamResponse) => void
  ): Promise<DescribeAccessLogParamResponse> {
    return this.request("DescribeAccessLogParam", req, cb)
  }

  /**
   * 查询监听器
   */
  async DescribeListeners(
    req: DescribeListenersRequest,
    cb?: (error: string, rep: DescribeListenersResponse) => void
  ): Promise<DescribeListenersResponse> {
    return this.request("DescribeListeners", req, cb)
  }

  /**
   * 修改全球加速实例
   */
  async DescribeGlobalAccelerators(
    req: DescribeGlobalAcceleratorsRequest,
    cb?: (error: string, rep: DescribeGlobalAcceleratorsResponse) => void
  ): Promise<DescribeGlobalAcceleratorsResponse> {
    return this.request("DescribeGlobalAccelerators", req, cb)
  }

  /**
   * 删除加速地域
   */
  async DeleteAccelerateAreas(
    req: DeleteAccelerateAreasRequest,
    cb?: (error: string, rep: DeleteAccelerateAreasResponse) => void
  ): Promise<DeleteAccelerateAreasResponse> {
    return this.request("DeleteAccelerateAreas", req, cb)
  }

  /**
   * 创建监听器
   */
  async CreateListener(
    req: CreateListenerRequest,
    cb?: (error: string, rep: CreateListenerResponse) => void
  ): Promise<CreateListenerResponse> {
    return this.request("CreateListener", req, cb)
  }

  /**
   * 创建加速地域
   */
  async CreateAccelerateAreas(
    req: CreateAccelerateAreasRequest,
    cb?: (error: string, rep: CreateAccelerateAreasResponse) => void
  ): Promise<CreateAccelerateAreasResponse> {
    return this.request("CreateAccelerateAreas", req, cb)
  }

  /**
   * 删除扩展证书
   */
  async DeleteListenerAdditionalCert(
    req: DeleteListenerAdditionalCertRequest,
    cb?: (error: string, rep: DeleteListenerAdditionalCertResponse) => void
  ): Promise<DeleteListenerAdditionalCertResponse> {
    return this.request("DeleteListenerAdditionalCert", req, cb)
  }

  /**
   * 添加扩展证书
   */
  async CreateListenerAdditionalCert(
    req: CreateListenerAdditionalCertRequest,
    cb?: (error: string, rep: CreateListenerAdditionalCertResponse) => void
  ): Promise<CreateListenerAdditionalCertResponse> {
    return this.request("CreateListenerAdditionalCert", req, cb)
  }

  /**
   * 修改终端节点组。
   */
  async ModifyEndpointGroup(
    req: ModifyEndpointGroupRequest,
    cb?: (error: string, rep: ModifyEndpointGroupResponse) => void
  ): Promise<ModifyEndpointGroupResponse> {
    return this.request("ModifyEndpointGroup", req, cb)
  }

  /**
   * 修改ACL规则
   */
  async ModifyGlobalAcceleratorAclRule(
    req: ModifyGlobalAcceleratorAclRuleRequest,
    cb?: (error: string, rep: ModifyGlobalAcceleratorAclRuleResponse) => void
  ): Promise<ModifyGlobalAcceleratorAclRuleResponse> {
    return this.request("ModifyGlobalAcceleratorAclRule", req, cb)
  }

  /**
   * 创建GA访问日志
   */
  async CreateGlobalAcceleratorAccessLog(
    req: CreateGlobalAcceleratorAccessLogRequest,
    cb?: (error: string, rep: CreateGlobalAcceleratorAccessLogResponse) => void
  ): Promise<CreateGlobalAcceleratorAccessLogResponse> {
    return this.request("CreateGlobalAcceleratorAccessLog", req, cb)
  }

  /**
   * 查看访问控制策略
   */
  async DescribeGlobalAcceleratorAclPolicies(
    req: DescribeGlobalAcceleratorAclPoliciesRequest,
    cb?: (error: string, rep: DescribeGlobalAcceleratorAclPoliciesResponse) => void
  ): Promise<DescribeGlobalAcceleratorAclPoliciesResponse> {
    return this.request("DescribeGlobalAcceleratorAclPolicies", req, cb)
  }

  /**
   * 删除七层转发规则
   */
  async DeleteForwardingRule(
    req: DeleteForwardingRuleRequest,
    cb?: (error: string, rep: DeleteForwardingRuleResponse) => void
  ): Promise<DeleteForwardingRuleResponse> {
    return this.request("DeleteForwardingRule", req, cb)
  }

  /**
   * 创建七层转发规则
   */
  async CreateForwardingRule(
    req: CreateForwardingRuleRequest,
    cb?: (error: string, rep: CreateForwardingRuleResponse) => void
  ): Promise<CreateForwardingRuleResponse> {
    return this.request("CreateForwardingRule", req, cb)
  }

  /**
   * 修改日志任务状态
   */
  async ModifyAccessLogStatus(
    req: ModifyAccessLogStatusRequest,
    cb?: (error: string, rep: ModifyAccessLogStatusResponse) => void
  ): Promise<ModifyAccessLogStatusResponse> {
    return this.request("ModifyAccessLogStatus", req, cb)
  }

  /**
   * 查询日志任务
   */
  async DescribeGlobalAcceleratorAccessLog(
    req: DescribeGlobalAcceleratorAccessLogRequest,
    cb?: (error: string, rep: DescribeGlobalAcceleratorAccessLogResponse) => void
  ): Promise<DescribeGlobalAcceleratorAccessLogResponse> {
    return this.request("DescribeGlobalAcceleratorAccessLog", req, cb)
  }

  /**
   * 删除访问控制策略
   */
  async DeleteGlobalAcceleratorAclPolicy(
    req: DeleteGlobalAcceleratorAclPolicyRequest,
    cb?: (error: string, rep: DeleteGlobalAcceleratorAclPolicyResponse) => void
  ): Promise<DeleteGlobalAcceleratorAclPolicyResponse> {
    return this.request("DeleteGlobalAcceleratorAclPolicy", req, cb)
  }

  /**
   * 创建全球加速实例
   */
  async CreateGlobalAccelerator(
    req: CreateGlobalAcceleratorRequest,
    cb?: (error: string, rep: CreateGlobalAcceleratorResponse) => void
  ): Promise<CreateGlobalAcceleratorResponse> {
    return this.request("CreateGlobalAccelerator", req, cb)
  }

  /**
   * 替换扩展证书
   */
  async ReplaceListenerAdditionalCert(
    req: ReplaceListenerAdditionalCertRequest,
    cb?: (error: string, rep: ReplaceListenerAdditionalCertResponse) => void
  ): Promise<ReplaceListenerAdditionalCertResponse> {
    return this.request("ReplaceListenerAdditionalCert", req, cb)
  }

  /**
   * 修改加速地域
   */
  async ModifyAccelerateAreas(
    req: ModifyAccelerateAreasRequest,
    cb?: (error: string, rep: ModifyAccelerateAreasResponse) => void
  ): Promise<ModifyAccelerateAreasResponse> {
    return this.request("ModifyAccelerateAreas", req, cb)
  }

  /**
   * 修改全球加速实例
   */
  async ModifyGlobalAccelerator(
    req: ModifyGlobalAcceleratorRequest,
    cb?: (error: string, rep: ModifyGlobalAcceleratorResponse) => void
  ): Promise<ModifyGlobalAcceleratorResponse> {
    return this.request("ModifyGlobalAccelerator", req, cb)
  }

  /**
   * 查看七层转发规则
   */
  async DescribeForwardingRule(
    req: DescribeForwardingRuleRequest,
    cb?: (error: string, rep: DescribeForwardingRuleResponse) => void
  ): Promise<DescribeForwardingRuleResponse> {
    return this.request("DescribeForwardingRule", req, cb)
  }

  /**
   * 删除终端节点组。
   */
  async DeleteEndpointGroups(
    req: DeleteEndpointGroupsRequest,
    cb?: (error: string, rep: DeleteEndpointGroupsResponse) => void
  ): Promise<DeleteEndpointGroupsResponse> {
    return this.request("DeleteEndpointGroups", req, cb)
  }

  /**
   * 查看七层转发策略
   */
  async DescribeForwardingPolicy(
    req: DescribeForwardingPolicyRequest,
    cb?: (error: string, rep: DescribeForwardingPolicyResponse) => void
  ): Promise<DescribeForwardingPolicyResponse> {
    return this.request("DescribeForwardingPolicy", req, cb)
  }
}
