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
  CreateAccelerateAreasResponse,
  DescribeListenersResponse,
  ModifyListenerResponse,
  DescribeForwardingRuleRequest,
  DescribeEndpointGroupsResponse,
  ModifyGlobalAcceleratorRequest,
  CreateForwardingRuleRequest,
  AcceleratorRegionSet,
  ModifyEndpointGroupResponse,
  CreateListenerResponse,
  CreateGlobalAcceleratorRequest,
  DescribeCrossBorderSettlementRequest,
  DescribeGlobalAcceleratorsRequest,
  DescribeAccelerateAreasRequest,
  ModifyAccelerateAreasRequest,
  DescribeCrossBorderSettlementResponse,
  DescribeForwardingRuleResponse,
  DeleteAccelerateAreasRequest,
  EndpointGroupConfigurationSet,
  DeleteAccelerateAreasResponse,
  ModifyAccelerateAreasResponse,
  DeleteGlobalAcceleratorRequest,
  EndpointConfigurations,
  PortRanges,
  OriginHeader,
  DeleteEndpointGroupsResponse,
  ForwardingRuleSet,
  ModifyForwardingRuleRequest,
  ModifyListenerRequest,
  Tag,
  DescribeEndpointGroupsRequest,
  CreateAccelerateAreasRequest,
  CreateListenerRequest,
  IpAddressInfoSet,
  ModifyForwardingRuleResponse,
  DeleteForwardingRuleRequest,
  ListenerSet,
  DescribeAccelerateAreasResponse,
  DeleteListenerRequest,
  ModifyGlobalAcceleratorResponse,
  DescribeListenersRequest,
  RuleAction,
  RuleCondition,
  DescribeAccelerateRegionsRequest,
  DeleteForwardingRuleResponse,
  Filter,
  DeleteEndpointGroupsRequest,
  EndpointGroupConfiguration,
  GlobalAcceleratorSet,
  DeleteListenerResponse,
  ModifyEndpointGroupRequest,
  AcceleratorAreas,
  CreateEndpointGroupRequest,
  CreateEndpointGroupResponse,
  DeleteGlobalAcceleratorResponse,
  DescribeAccelerateRegionsResponse,
  CreateGlobalAcceleratorResponse,
  DescribeGlobalAcceleratorsResponse,
  CreateForwardingRuleResponse,
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
   * 删除终端节点组。
   */
  async DeleteEndpointGroups(
    req: DeleteEndpointGroupsRequest,
    cb?: (error: string, rep: DeleteEndpointGroupsResponse) => void
  ): Promise<DeleteEndpointGroupsResponse> {
    return this.request("DeleteEndpointGroups", req, cb)
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
   * 删除监听器
   */
  async DeleteListener(
    req: DeleteListenerRequest,
    cb?: (error: string, rep: DeleteListenerResponse) => void
  ): Promise<DeleteListenerResponse> {
    return this.request("DeleteListener", req, cb)
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
   * 修改终端节点组。
   */
  async ModifyEndpointGroup(
    req: ModifyEndpointGroupRequest,
    cb?: (error: string, rep: ModifyEndpointGroupResponse) => void
  ): Promise<ModifyEndpointGroupResponse> {
    return this.request("ModifyEndpointGroup", req, cb)
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
   * 创建全球加速实例
   */
  async CreateGlobalAccelerator(
    req: CreateGlobalAcceleratorRequest,
    cb?: (error: string, rep: CreateGlobalAcceleratorResponse) => void
  ): Promise<CreateGlobalAcceleratorResponse> {
    return this.request("CreateGlobalAccelerator", req, cb)
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
}
