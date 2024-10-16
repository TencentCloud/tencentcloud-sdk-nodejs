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
  DescribeTargetGroupInstanceStatusRequest,
  DescribeTargetGroupListResponse,
  DisassociateTargetGroupsResponse,
  DescribeTargetGroupListRequest,
  ModifyGatewayLoadBalancerAttributeRequest,
  ModifyTargetGroupInstancesWeightResponse,
  DescribeTargetGroupsRequest,
  DescribeTaskStatusResponse,
  InquirePriceCreateGatewayLoadBalancerResponse,
  CreateTargetGroupResponse,
  TargetGroupBackend,
  TargetGroupHealthCheck,
  ModifyTargetGroupInstancesWeightRequest,
  DeleteTargetGroupsResponse,
  Price,
  ModifyGatewayLoadBalancerAttributeResponse,
  DeleteGatewayLoadBalancerRequest,
  TagInfo,
  AssociateTargetGroupsRequest,
  DeregisterTargetGroupInstancesRequest,
  GatewayLoadBalancer,
  DescribeGatewayLoadBalancersRequest,
  DeregisterTargetGroupInstancesResponse,
  DescribeTargetGroupInstancesResponse,
  CreateTargetGroupRequest,
  CreateGatewayLoadBalancerRequest,
  AssociateTargetGroupsResponse,
  InquirePriceCreateGatewayLoadBalancerRequest,
  DisassociateTargetGroupsRequest,
  Filter,
  TargetGroupInstanceStatus,
  DescribeTargetGroupInstanceStatusResponse,
  DescribeTargetGroupInstancesRequest,
  DescribeTaskStatusRequest,
  RegisterTargetGroupInstancesResponse,
  CreateGatewayLoadBalancerResponse,
  DescribeTargetGroupsResponse,
  RegisterTargetGroupInstancesRequest,
  DeleteTargetGroupsRequest,
  ItemPrice,
  TargetGroupAssociation,
  TargetGroupInstance,
  ModifyTargetGroupAttributeResponse,
  AssociationItem,
  ModifyTargetGroupAttributeRequest,
  TargetGroupInfo,
  DescribeGatewayLoadBalancersResponse,
  DeleteGatewayLoadBalancerResponse,
} from "./gwlb_models"

/**
 * gwlb client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("gwlb.tencentcloudapi.com", "2024-09-06", clientConfig)
  }

  /**
   * 删除目标组
   */
  async DeleteTargetGroups(
    req: DeleteTargetGroupsRequest,
    cb?: (error: string, rep: DeleteTargetGroupsResponse) => void
  ): Promise<DeleteTargetGroupsResponse> {
    return this.request("DeleteTargetGroups", req, cb)
  }

  /**
     * DeleteGatewayLoadBalancer 接口用以删除指定的一个或多个网关负载均衡实例。成功删除后，会把网关负载均衡实例与后端服务解绑。
本接口为异步接口，接口返回成功后，需以返回的 RequestId 为入参，调用 DescribeTaskStatus 接口查询本次任务是否成功。
     */
  async DeleteGatewayLoadBalancer(
    req: DeleteGatewayLoadBalancerRequest,
    cb?: (error: string, rep: DeleteGatewayLoadBalancerResponse) => void
  ): Promise<DeleteGatewayLoadBalancerResponse> {
    return this.request("DeleteGatewayLoadBalancer", req, cb)
  }

  /**
     * 注册服务器到目标组。
本接口为异步接口，本接口返回成功后需以返回的 RequestID 为入参，调用 DescribeTaskStatus 接口查询本次任务是否成功。
     */
  async RegisterTargetGroupInstances(
    req: RegisterTargetGroupInstancesRequest,
    cb?: (error: string, rep: RegisterTargetGroupInstancesResponse) => void
  ): Promise<RegisterTargetGroupInstancesResponse> {
    return this.request("RegisterTargetGroupInstances", req, cb)
  }

  /**
   * 查询目标组信息
   */
  async DescribeTargetGroups(
    req: DescribeTargetGroupsRequest,
    cb?: (error: string, rep: DescribeTargetGroupsResponse) => void
  ): Promise<DescribeTargetGroupsResponse> {
    return this.request("DescribeTargetGroups", req, cb)
  }

  /**
   * 修改目标组的名称、健康探测等属性。
   */
  async ModifyTargetGroupAttribute(
    req: ModifyTargetGroupAttributeRequest,
    cb?: (error: string, rep: ModifyTargetGroupAttributeResponse) => void
  ): Promise<ModifyTargetGroupAttributeResponse> {
    return this.request("ModifyTargetGroupAttribute", req, cb)
  }

  /**
   * 本接口用于查询异步任务的执行状态，对于非查询类的接口（创建/删除负载均衡实例等），在接口调用成功后，都需要使用本接口查询任务最终是否执行成功。
   */
  async DescribeTaskStatus(
    req: DescribeTaskStatusRequest,
    cb?: (error: string, rep: DescribeTaskStatusResponse) => void
  ): Promise<DescribeTaskStatusResponse> {
    return this.request("DescribeTaskStatus", req, cb)
  }

  /**
     * 本接口(CreateGatewayLoadBalancer)用来创建网关负载均衡实例。为了使用网关负载均衡服务，您必须购买一个或多个网关负载均衡实例。成功调用该接口后，会返回网关负载均衡实例的唯一 ID。
注意：单个账号在每个地域的默认购买配额为：10个。
本接口为异步接口，接口成功返回后，可使用 DescribeGatewayLoadBalancers 接口查询负载均衡实例的状态（如创建中、正常），以确定是否创建成功。
     */
  async CreateGatewayLoadBalancer(
    req: CreateGatewayLoadBalancerRequest,
    cb?: (error: string, rep: CreateGatewayLoadBalancerResponse) => void
  ): Promise<CreateGatewayLoadBalancerResponse> {
    return this.request("CreateGatewayLoadBalancer", req, cb)
  }

  /**
     * 解除负载均衡和目标组的关联关系。
本接口为异步接口，本接口返回成功后需以返回的 RequestID 为入参，调用 DescribeTaskStatus 接口查询本次任务是否成功。
     */
  async DisassociateTargetGroups(
    req: DisassociateTargetGroupsRequest,
    cb?: (error: string, rep: DisassociateTargetGroupsResponse) => void
  ): Promise<DisassociateTargetGroupsResponse> {
    return this.request("DisassociateTargetGroups", req, cb)
  }

  /**
     * 修改目标组的服务器权重。
本接口为异步接口，本接口返回成功后需以返回的 RequestID 为入参，调用 DescribeTaskStatus 接口查询本次任务是否成功。
     */
  async ModifyTargetGroupInstancesWeight(
    req: ModifyTargetGroupInstancesWeightRequest,
    cb?: (error: string, rep: ModifyTargetGroupInstancesWeightResponse) => void
  ): Promise<ModifyTargetGroupInstancesWeightResponse> {
    return this.request("ModifyTargetGroupInstancesWeight", req, cb)
  }

  /**
   * 查询目标组后端服务状态。目前仅支持网关负载均衡类型的目标组支持查询后端服务状态。
   */
  async DescribeTargetGroupInstanceStatus(
    req: DescribeTargetGroupInstanceStatusRequest,
    cb?: (error: string, rep: DescribeTargetGroupInstanceStatusResponse) => void
  ): Promise<DescribeTargetGroupInstanceStatusResponse> {
    return this.request("DescribeTargetGroupInstanceStatus", req, cb)
  }

  /**
     * 本接口(AssociateTargetGroups)用来将目标组绑定到负载均衡。
本接口为异步接口，本接口返回成功后需以返回的 RequestID 为入参，调用 DescribeTaskStatus 接口查询本次任务是否成功。
     */
  async AssociateTargetGroups(
    req: AssociateTargetGroupsRequest,
    cb?: (error: string, rep: AssociateTargetGroupsResponse) => void
  ): Promise<AssociateTargetGroupsResponse> {
    return this.request("AssociateTargetGroups", req, cb)
  }

  /**
   * 查询一个地域的网关负载均衡实例列表。
   */
  async DescribeGatewayLoadBalancers(
    req: DescribeGatewayLoadBalancersRequest,
    cb?: (error: string, rep: DescribeGatewayLoadBalancersResponse) => void
  ): Promise<DescribeGatewayLoadBalancersResponse> {
    return this.request("DescribeGatewayLoadBalancers", req, cb)
  }

  /**
   * ModifyGatewayLoadBalancerAttribute 接口用于修改负载均衡实例的属性。支持修改负载均衡实例的名称、带宽上限。
   */
  async ModifyGatewayLoadBalancerAttribute(
    req: ModifyGatewayLoadBalancerAttributeRequest,
    cb?: (error: string, rep: ModifyGatewayLoadBalancerAttributeResponse) => void
  ): Promise<ModifyGatewayLoadBalancerAttributeResponse> {
    return this.request("ModifyGatewayLoadBalancerAttribute", req, cb)
  }

  /**
   * 获取目标组列表
   */
  async DescribeTargetGroupList(
    req: DescribeTargetGroupListRequest,
    cb?: (error: string, rep: DescribeTargetGroupListResponse) => void
  ): Promise<DescribeTargetGroupListResponse> {
    return this.request("DescribeTargetGroupList", req, cb)
  }

  /**
   * InquirePriceCreateGatewayLoadBalancer接口查询创建网关负载均衡的价格。
   */
  async InquirePriceCreateGatewayLoadBalancer(
    req: InquirePriceCreateGatewayLoadBalancerRequest,
    cb?: (error: string, rep: InquirePriceCreateGatewayLoadBalancerResponse) => void
  ): Promise<InquirePriceCreateGatewayLoadBalancerResponse> {
    return this.request("InquirePriceCreateGatewayLoadBalancer", req, cb)
  }

  /**
     * 从目标组中解绑服务器。
本接口为异步接口，本接口返回成功后需以返回的 RequestID 为入参，调用 DescribeTaskStatus 接口查询本次任务是否成功。
     */
  async DeregisterTargetGroupInstances(
    req: DeregisterTargetGroupInstancesRequest,
    cb?: (error: string, rep: DeregisterTargetGroupInstancesResponse) => void
  ): Promise<DeregisterTargetGroupInstancesResponse> {
    return this.request("DeregisterTargetGroupInstances", req, cb)
  }

  /**
   * 创建目标组。该功能正在内测中，如需使用，请通过[工单申请](https://console.cloud.tencent.com/workorder/category?level1_id=6&level2_id=163&source=0&data_title=%E8%B4%9F%E8%BD%BD%E5%9D%87%E8%A1%A1%20LB&step=1)。
   */
  async CreateTargetGroup(
    req: CreateTargetGroupRequest,
    cb?: (error: string, rep: CreateTargetGroupResponse) => void
  ): Promise<CreateTargetGroupResponse> {
    return this.request("CreateTargetGroup", req, cb)
  }

  /**
   * 获取目标组绑定的服务器信息。
   */
  async DescribeTargetGroupInstances(
    req: DescribeTargetGroupInstancesRequest,
    cb?: (error: string, rep: DescribeTargetGroupInstancesResponse) => void
  ): Promise<DescribeTargetGroupInstancesResponse> {
    return this.request("DescribeTargetGroupInstances", req, cb)
  }
}
