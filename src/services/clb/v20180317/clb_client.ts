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
  DeleteRewriteRequest,
  DescribeTargetGroupListResponse,
  DescribeQuotaRequest,
  DescribeTargetGroupListRequest,
  BatchDeregisterTargetsResponse,
  SetLoadBalancerSecurityGroupsResponse,
  RulesItems,
  ExtraInfo,
  ClassicalListener,
  BatchModifyTargetWeightResponse,
  SetSecurityGroupForLoadbalancersRequest,
  CreateLoadBalancerRequest,
  DescribeLoadBalancerOverviewResponse,
  DeleteRuleRequest,
  CloneLoadBalancerRequest,
  DisassociateTargetGroupsResponse,
  ListenerBackend,
  SetLoadBalancerClsLogResponse,
  DescribeLoadBalancerTrafficResponse,
  MultiCertInfo,
  RsTagRule,
  ModifyRuleRequest,
  DescribeCustomizedConfigListResponse,
  DescribeBlockIPListResponse,
  DescribeRewriteRequest,
  ModifyLoadBalancerAttributesResponse,
  DescribeTargetGroupInstancesRequest,
  DescribeIdleLoadBalancersResponse,
  BindItem,
  DescribeLoadBalancersRequest,
  AddCustomizedConfigRequest,
  ClassicalTarget,
  ListenerItem,
  RsWeightRule,
  RegisterFunctionTargetsRequest,
  DeregisterTargetsFromClassicalLBRequest,
  InquiryPriceModifyLoadBalancerRequest,
  ModifyCustomizedConfigRequest,
  BasicTargetGroupInfo,
  ModifyTargetWeightResponse,
  ZoneResource,
  AssociateTargetGroupsRequest,
  DescribeTaskStatusRequest,
  TargetGroupInstance,
  DescribeClassicalLBByInstanceIdResponse,
  CreateRuleResponse,
  CrossTargets,
  RuleHealth,
  DescribeExclusiveClustersResponse,
  ModifyDomainRequest,
  DisassociateCustomizedConfigResponse,
  BatchModifyTargetTagRequest,
  RegisterTargetGroupInstancesResponse,
  ClassicalTargetInfo,
  DescribeTargetsRequest,
  ZoneInfo,
  RegisterTargetsWithClassicalLBResponse,
  DescribeTargetGroupsResponse,
  LoadBalancerHealth,
  InquiryPriceCreateLoadBalancerRequest,
  ModifyFunctionTargetsResponse,
  DeleteLoadBalancerListenersRequest,
  BlockedIP,
  ModifyRuleResponse,
  DescribeClassicalLBTargetsRequest,
  InquiryPriceRenewLoadBalancerResponse,
  DeregisterFunctionTargetsResponse,
  DescribeCustomizedConfigListRequest,
  AutoRewriteRequest,
  IdleLoadBalancer,
  DescribeCrossTargetsResponse,
  FunctionInfo,
  ModifyCustomizedConfigResponse,
  DescribeLoadBalancerListByCertIdResponse,
  ModifyTargetGroupInstancesWeightResponse,
  DescribeTargetGroupsRequest,
  DescribeTaskStatusResponse,
  BatchRegisterTargetsResponse,
  ModifyLoadBalancerAttributesRequest,
  InquiryPriceModifyLoadBalancerResponse,
  DescribeLBListenersRequest,
  SlaUpdateParam,
  Target,
  DescribeLoadBalancerTrafficRequest,
  DescribeBlockIPListRequest,
  MigrateClassicalLoadBalancersResponse,
  CertIdRelatedWithLoadBalancers,
  ItemPrice,
  DescribeClassicalLBHealthStatusResponse,
  ModifyLoadBalancerSlaResponse,
  DescribeClsLogSetRequest,
  Listener,
  LoadBalancerTraffic,
  SpecAvailability,
  ConfigListItem,
  RegisterTargetsWithClassicalLBRequest,
  HealthCheck,
  ModifyDomainAttributesResponse,
  ReplaceCertForLoadBalancersResponse,
  DescribeTargetsResponse,
  ModifyListenerRequest,
  DeregisterTargetGroupInstancesResponse,
  RegisterTargetsRequest,
  DisassociateCustomizedConfigRequest,
  AssociateTargetGroupsResponse,
  CreateTopicRequest,
  DeleteListenerRequest,
  ClassicalHealth,
  DescribeCustomizedConfigAssociateListRequest,
  ModifyTargetPortResponse,
  MigrateClassicalLoadBalancersRequest,
  DescribeLoadBalancersDetailRequest,
  TargetGroupBackend,
  DeregisterFunctionTargetsRequest,
  DescribeClassicalLBByInstanceIdRequest,
  FunctionTarget,
  InquiryPriceRefundLoadBalancerResponse,
  DescribeResourcesResponse,
  ModifyTargetGroupInstancesWeightRequest,
  ManualRewriteResponse,
  ModifyBlockIPListRequest,
  DescribeClusterResourcesResponse,
  ModifyBlockIPListResponse,
  DescribeClusterResourcesRequest,
  ModifyDomainAttributesRequest,
  DescribeClassicalLBHealthStatusRequest,
  DescribeListenersRequest,
  CreateClsLogSetResponse,
  Backend,
  LBChargePrepaid,
  AddCustomizedConfigResponse,
  DeleteLoadBalancerRequest,
  ModifyLoadBalancersProjectRequest,
  AssociateCustomizedConfigRequest,
  CertificateInput,
  ResourceAvailability,
  SetLoadBalancerSecurityGroupsRequest,
  DescribeCustomizedConfigAssociateListResponse,
  SetCustomizedConfigForLoadBalancerRequest,
  CreateListenerResponse,
  CreateTargetGroupResponse,
  AssociateCustomizedConfigResponse,
  CreateLoadBalancerSnatIpsResponse,
  ClassicalLoadBalancerInfo,
  DescribeListenersResponse,
  RuleOutput,
  RegisterFunctionTargetsResponse,
  CreateTopicResponse,
  CreateRuleRequest,
  ModifyTargetGroupInstancesPortResponse,
  LbRsItem,
  RuleTargets,
  BatchDeregisterTargetsRequest,
  DeregisterTargetGroupInstancesRequest,
  ManualRewriteRequest,
  InquiryPriceRefundLoadBalancerRequest,
  ModifyListenerResponse,
  DescribeTargetHealthResponse,
  CertInfo,
  CreateTargetGroupRequest,
  ClusterItem,
  BindDetailItem,
  CreateListenerRequest,
  CreateClsLogSetRequest,
  TypeInfo,
  DisassociateTargetGroupsRequest,
  Filter,
  ClusterResource,
  ModifyDomainResponse,
  RegisterTargetsResponse,
  DeregisterTargetsFromClassicalLBResponse,
  ClustersZone,
  SetCustomizedConfigForLoadBalancerResponse,
  DeleteLoadBalancerResponse,
  AutoRewriteResponse,
  DeregisterTargetsResponse,
  DescribeLoadBalancerOverviewRequest,
  RewriteTarget,
  Cluster,
  ModifyTargetWeightRequest,
  DescribeLoadBalancersDetailResponse,
  TargetHealth,
  LoadBalancerDetail,
  LbRsTargets,
  BatchModifyTargetWeightRequest,
  BatchModifyTargetTagResponse,
  DeleteRewriteResponse,
  BatchTarget,
  DescribeLoadBalancerListByCertIdRequest,
  TargetRegionInfo,
  DescribeTargetHealthRequest,
  ReplaceCertForLoadBalancersRequest,
  DeleteRuleResponse,
  CloneLoadBalancerResponse,
  DescribeClsLogSetResponse,
  ModifyTargetGroupAttributeRequest,
  ExclusiveCluster,
  DeregisterTargetsRequest,
  ModifyLoadBalancerMixIpTargetResponse,
  InquiryPriceCreateLoadBalancerResponse,
  CreateLoadBalancerSnatIpsRequest,
  DescribeTargetGroupInstancesResponse,
  DescribeQuotaResponse,
  DeleteTargetGroupsResponse,
  Price,
  ModifyTargetGroupInstancesPortRequest,
  BatchRegisterTargetsRequest,
  DeleteCustomizedConfigResponse,
  SetSecurityGroupForLoadbalancersResponse,
  RuleInput,
  TagInfo,
  SnatIp,
  ModifyLoadBalancerMixIpTargetRequest,
  DescribeBlockIPTaskResponse,
  DescribeResourcesRequest,
  DescribeClassicalLBListenersResponse,
  DescribeExclusiveClustersRequest,
  ModifyLoadBalancerSlaRequest,
  SetLoadBalancerStartStatusResponse,
  DescribeBlockIPTaskRequest,
  Resource,
  CreateLoadBalancerResponse,
  ModifyFunctionTargetsRequest,
  DescribeRewriteResponse,
  Quota,
  SetLoadBalancerClsLogRequest,
  LBItem,
  DeleteCustomizedConfigRequest,
  ModifyTargetGroupAttributeResponse,
  DeleteLoadBalancerListenersResponse,
  DescribeIdleLoadBalancersRequest,
  DeleteLoadBalancerSnatIpsRequest,
  InternetAccessible,
  OAuth,
  DescribeClassicalLBTargetsResponse,
  RewriteLocationMap,
  ModifyTargetPortRequest,
  ModifyLoadBalancersProjectResponse,
  DescribeLoadBalancersResponse,
  DescribeLBListenersResponse,
  TargetGroupInfo,
  DeleteListenerResponse,
  DeleteLoadBalancerSnatIpsResponse,
  InquiryPriceRenewLoadBalancerRequest,
  CertificateOutput,
  DeleteTargetGroupsRequest,
  DescribeClassicalLBListenersRequest,
  SetLoadBalancerStartStatusRequest,
  TargetGroupAssociation,
  ListenerHealth,
  AssociationItem,
  DescribeCrossTargetsRequest,
  RegisterTargetGroupInstancesRequest,
  LoadBalancer,
} from "./clb_models"

/**
 * clb client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("clb.tencentcloudapi.com", "2018-03-17", clientConfig)
  }

  /**
   * 拉取配置绑定的 server 或 location，如果 domain 存在，结果将根据 domain 过滤。或拉取配置绑定的 loadbalancer。
   */
  async DescribeCustomizedConfigAssociateList(
    req: DescribeCustomizedConfigAssociateListRequest,
    cb?: (error: string, rep: DescribeCustomizedConfigAssociateListResponse) => void
  ): Promise<DescribeCustomizedConfigAssociateListResponse> {
    return this.request("DescribeCustomizedConfigAssociateList", req, cb)
  }

  /**
   * InquiryPriceModifyLoadBalancer接口修改负载均衡配置询价。
   */
  async InquiryPriceModifyLoadBalancer(
    req: InquiryPriceModifyLoadBalancerRequest,
    cb?: (error: string, rep: InquiryPriceModifyLoadBalancerResponse) => void
  ): Promise<InquiryPriceModifyLoadBalancerResponse> {
    return this.request("InquiryPriceModifyLoadBalancer", req, cb)
  }

  /**
   * 批量解绑四七层后端服务。批量解绑的资源数量上限为500。只支持VPC网络负载均衡。
   */
  async BatchDeregisterTargets(
    req: BatchDeregisterTargetsRequest,
    cb?: (error: string, rep: BatchDeregisterTargetsResponse) => void
  ): Promise<BatchDeregisterTargetsResponse> {
    return this.request("BatchDeregisterTargets", req, cb)
  }

  /**
   * 查询集群信息列表，支持以集群类型、集群唯一ID、集群名字、集群标签、集群内vip、集群内负载均衡唯一id、集群网络类型、可用区等条件进行检索
   */
  async DescribeExclusiveClusters(
    req: DescribeExclusiveClustersRequest,
    cb?: (error: string, rep: DescribeExclusiveClustersResponse) => void
  ): Promise<DescribeExclusiveClustersResponse> {
    return this.request("DescribeExclusiveClusters", req, cb)
  }

  /**
     * 用户需要先创建出一个HTTPS:443监听器，并在其下创建转发规则。通过调用本接口，系统会自动创建出一个HTTP:80监听器（如果之前不存在），并在其下创建转发规则，与HTTPS:443监听器下的Domains（在入参中指定）对应。创建成功后可以通过HTTP:80地址自动跳转为HTTPS:443地址进行访问。
本接口为异步接口，本接口返回成功后需以返回的RequestID为入参，调用DescribeTaskStatus接口查询本次任务是否成功。
     */
  async AutoRewrite(
    req: AutoRewriteRequest,
    cb?: (error: string, rep: AutoRewriteResponse) => void
  ): Promise<AutoRewriteResponse> {
    return this.request("AutoRewrite", req, cb)
  }

  /**
     * 批量修改目标组的服务器权重。
本接口为异步接口，本接口返回成功后需以返回的 RequestID 为入参，调用 DescribeTaskStatus 接口查询本次任务是否成功。
     */
  async ModifyTargetGroupInstancesWeight(
    req: ModifyTargetGroupInstancesWeightRequest,
    cb?: (error: string, rep: ModifyTargetGroupInstancesWeightResponse) => void
  ): Promise<ModifyTargetGroupInstancesWeightResponse> {
    return this.request("ModifyTargetGroupInstancesWeight", req, cb)
  }

  /**
   * 关联配置到server或location，根据配置类型关联到server或location。准备下线，请使用SetCustomizedConfigForLoadBalancer。
   */
  async AssociateCustomizedConfig(
    req: AssociateCustomizedConfigRequest,
    cb?: (error: string, rep: AssociateCustomizedConfigResponse) => void
  ): Promise<AssociateCustomizedConfigResponse> {
    return this.request("AssociateCustomizedConfig", req, cb)
  }

  /**
   * DeregisterTargetsFromClassicalLB 接口用于解绑负载均衡后端服务。本接口为异步接口，接口返回成功后，需以返回的 RequestId 为入参，调用 DescribeTaskStatus 接口查询本次任务是否成功。
   */
  async DeregisterTargetsFromClassicalLB(
    req: DeregisterTargetsFromClassicalLBRequest,
    cb?: (error: string, rep: DeregisterTargetsFromClassicalLBResponse) => void
  ): Promise<DeregisterTargetsFromClassicalLBResponse> {
    return this.request("DeregisterTargetsFromClassicalLB", req, cb)
  }

  /**
   * 查询负载均衡的详细信息，包括监听器，规则及后端目标。
   */
  async DescribeLoadBalancersDetail(
    req: DescribeLoadBalancersDetailRequest,
    cb?: (error: string, rep: DescribeLoadBalancersDetailResponse) => void
  ): Promise<DescribeLoadBalancersDetailResponse> {
    return this.request("DescribeLoadBalancersDetail", req, cb)
  }

  /**
     * 本接口(AssociateTargetGroups)用来将目标组绑定到负载均衡的监听器（四层协议）或转发规则（七层协议）上。
本接口为异步接口，本接口返回成功后需以返回的 RequestID 为入参，调用 DescribeTaskStatus 接口查询本次任务是否成功。
     */
  async AssociateTargetGroups(
    req: AssociateTargetGroupsRequest,
    cb?: (error: string, rep: AssociateTargetGroupsResponse) => void
  ): Promise<AssociateTargetGroupsResponse> {
    return this.request("AssociateTargetGroups", req, cb)
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
   * DescribeListeners 接口可根据负载均衡器 ID、监听器的协议或端口作为过滤条件获取监听器列表。如果不指定任何过滤条件，则返回该负载均衡实例下的所有监听器。
   */
  async DescribeListeners(
    req: DescribeListenersRequest,
    cb?: (error: string, rep: DescribeListenersResponse) => void
  ): Promise<DescribeListenersResponse> {
    return this.request("DescribeListeners", req, cb)
  }

  /**
   * 创建主题，默认开启全文索引和键值索引。如果不存在CLB专有日志集，则创建失败。
   */
  async CreateTopic(
    req: CreateTopicRequest,
    cb?: (error: string, rep: CreateTopicResponse) => void
  ): Promise<CreateTopicResponse> {
    return this.request("CreateTopic", req, cb)
  }

  /**
   * 修改一个或多个负载均衡实例所属项目。
   */
  async ModifyLoadBalancersProject(
    req: ModifyLoadBalancersProjectRequest,
    cb?: (error: string, rep: ModifyLoadBalancersProjectResponse) => void
  ): Promise<ModifyLoadBalancersProjectResponse> {
    return this.request("ModifyLoadBalancersProject", req, cb)
  }

  /**
   * 负载均衡维度的个性化配置相关操作：创建、删除、修改、绑定、解绑
   */
  async SetCustomizedConfigForLoadBalancer(
    req: SetCustomizedConfigForLoadBalancerRequest,
    cb?: (error: string, rep: SetCustomizedConfigForLoadBalancerResponse) => void
  ): Promise<SetCustomizedConfigForLoadBalancerResponse> {
    return this.request("SetCustomizedConfigForLoadBalancer", req, cb)
  }

  /**
   * RegisterTargetsWithClassicalLB 接口用于绑定后端服务到传统型负载均衡。本接口为异步接口，接口返回成功后，需以返回的 RequestId 为入参，调用 DescribeTaskStatus 接口查询本次任务是否成功。
   */
  async RegisterTargetsWithClassicalLB(
    req: RegisterTargetsWithClassicalLBRequest,
    cb?: (error: string, rep: RegisterTargetsWithClassicalLBResponse) => void
  ): Promise<RegisterTargetsWithClassicalLBResponse> {
    return this.request("RegisterTargetsWithClassicalLB", req, cb)
  }

  /**
     * DeregisterTargets 接口用来将一台或多台后端服务从负载均衡的监听器或转发规则上解绑，对于四层监听器，只需指定监听器ID即可，对于七层监听器，还需通过LocationId或Domain+Url指定转发规则。
本接口为异步接口，本接口返回成功后需以返回的RequestID为入参，调用DescribeTaskStatus接口查询本次任务是否成功。
     */
  async DeregisterTargets(
    req: DeregisterTargetsRequest,
    cb?: (error: string, rep: DeregisterTargetsResponse) => void
  ): Promise<DeregisterTargetsResponse> {
    return this.request("DeregisterTargets", req, cb)
  }

  /**
     * 修改负载均衡实例的属性。支持修改负载均衡实例的名称、设置负载均衡的跨域属性。
注意：非带宽上移用户的 CLB 实例必须加入带宽包才可以设置跨域属性。
本接口为异步接口，接口返回成功后，需以得到的 RequestID 为入参，调用 DescribeTaskStatus 接口查询本次任务是否成功。
     */
  async ModifyLoadBalancerAttributes(
    req: ModifyLoadBalancerAttributesRequest,
    cb?: (error: string, rep: ModifyLoadBalancerAttributesResponse) => void
  ): Promise<ModifyLoadBalancerAttributesResponse> {
    return this.request("ModifyLoadBalancerAttributes", req, cb)
  }

  /**
     * 批量修改目标组服务器端口。
本接口为异步接口，本接口返回成功后需以返回的 RequestID 为入参，调用 DescribeTaskStatus 接口查询本次任务是否成功。
     */
  async ModifyTargetGroupInstancesPort(
    req: ModifyTargetGroupInstancesPortRequest,
    cb?: (error: string, rep: ModifyTargetGroupInstancesPortResponse) => void
  ): Promise<ModifyTargetGroupInstancesPortResponse> {
    return this.request("ModifyTargetGroupInstancesPort", req, cb)
  }

  /**
   * BatchModifyTargetWeight 接口用于批量修改负载均衡监听器绑定的后端机器的转发权重。批量修改的资源数量上限为500。本接口为异步接口，本接口返回成功后需以返回的 RequestID 为入参，调用 DescribeTaskStatus 接口查询本次任务是否成功。<br/>负载均衡的4层和7层监听器支持此接口，传统型负载均衡不支持。
   */
  async BatchModifyTargetWeight(
    req: BatchModifyTargetWeightRequest,
    cb?: (error: string, rep: BatchModifyTargetWeightResponse) => void
  ): Promise<BatchModifyTargetWeightResponse> {
    return this.request("BatchModifyTargetWeight", req, cb)
  }

  /**
     * DeleteRewrite 接口支持删除指定转发规则之间的重定向关系。
本接口为异步接口，本接口返回成功后需以返回的RequestID为入参，调用DescribeTaskStatus接口查询本次任务是否成功。
     */
  async DeleteRewrite(
    req: DeleteRewriteRequest,
    cb?: (error: string, rep: DeleteRewriteResponse) => void
  ): Promise<DeleteRewriteResponse> {
    return this.request("DeleteRewrite", req, cb)
  }

  /**
   * 去关联个性化配置，准备下线，请使用SetCustomizedConfigForLoadBalancer。
   */
  async DisassociateCustomizedConfig(
    req: DisassociateCustomizedConfigRequest,
    cb?: (error: string, rep: DisassociateCustomizedConfigResponse) => void
  ): Promise<DisassociateCustomizedConfigResponse> {
    return this.request("DisassociateCustomizedConfig", req, cb)
  }

  /**
     * SetLoadBalancerSecurityGroups 接口支持对一个公网负载均衡实例执行设置（绑定、解绑）安全组操作。查询一个负载均衡实例目前已绑定的安全组，可使用 DescribeLoadBalancers 接口。本接口是set语义，
绑定操作时，入参需要传入负载均衡实例要绑定的所有安全组（已绑定的+新增绑定的）。
解绑操作时，入参需要传入负载均衡实例执行解绑后所绑定的所有安全组；如果要解绑所有安全组，可不传此参数，或传入空数组。注意：内网 CLB 绑定 EIP 后，CLB 上的安全组对来自 EIP 的流量不生效，对来自内网 CLB 的流量生效。
     */
  async SetLoadBalancerSecurityGroups(
    req: SetLoadBalancerSecurityGroupsRequest,
    cb?: (error: string, rep: SetLoadBalancerSecurityGroupsResponse) => void
  ): Promise<SetLoadBalancerSecurityGroupsResponse> {
    return this.request("SetLoadBalancerSecurityGroups", req, cb)
  }

  /**
   * InquiryPriceRefundLoadBalancer接口查询负载均衡退费价格。
   */
  async InquiryPriceRefundLoadBalancer(
    req: InquiryPriceRefundLoadBalancerRequest,
    cb?: (error: string, rep: InquiryPriceRefundLoadBalancerResponse) => void
  ): Promise<InquiryPriceRefundLoadBalancerResponse> {
    return this.request("InquiryPriceRefundLoadBalancer", req, cb)
  }

  /**
     * 本接口用来删除负载均衡实例下的监听器（四层和七层）。
本接口为异步接口，接口返回成功后，需以得到的 RequestID 为入参，调用 DescribeTaskStatus 接口查询本次任务是否成功。
     */
  async DeleteListener(
    req: DeleteListenerRequest,
    cb?: (error: string, rep: DeleteListenerResponse) => void
  ): Promise<DeleteListenerResponse> {
    return this.request("DeleteListener", req, cb)
  }

  /**
   * 绑定或解绑一个安全组到多个公网负载均衡实例。注意：内网负载均衡不支持绑定安全组。
   */
  async SetSecurityGroupForLoadbalancers(
    req: SetSecurityGroupForLoadbalancersRequest,
    cb?: (error: string, rep: SetSecurityGroupForLoadbalancersResponse) => void
  ): Promise<SetSecurityGroupForLoadbalancersResponse> {
    return this.request("SetSecurityGroupForLoadbalancers", req, cb)
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
     * 启停负载均衡实例或者监听器。
本接口为异步接口，接口返回成功后，需以得到的 RequestID 为入参，调用 DescribeTaskStatus 接口查询本次任务是否成功。
该功能正在内测中，如需使用，请通过[工单申请](https://console.cloud.tencent.com/workorder/category?level1_id=6&level2_id=163&source=0&data_title=%E8%B4%9F%E8%BD%BD%E5%9D%87%E8%A1%A1%20LB&step=1)。
     */
  async SetLoadBalancerStartStatus(
    req: SetLoadBalancerStartStatusRequest,
    cb?: (error: string, rep: SetLoadBalancerStartStatusResponse) => void
  ): Promise<SetLoadBalancerStartStatusResponse> {
    return this.request("SetLoadBalancerStartStatus", req, cb)
  }

  /**
     * ModifyListener接口用来修改负载均衡监听器的属性，包括监听器名称、健康检查参数、证书信息、转发策略等。本接口不支持传统型负载均衡。
本接口为异步接口，本接口返回成功后需以返回的RequestID为入参，调用DescribeTaskStatus接口查询本次任务是否成功。
     */
  async ModifyListener(
    req: ModifyListenerRequest,
    cb?: (error: string, rep: ModifyListenerResponse) => void
  ): Promise<ModifyListenerResponse> {
    return this.request("ModifyListener", req, cb)
  }

  /**
   * 删除个性化配置，准备下线，请使用SetCustomizedConfigForLoadBalancer。
   */
  async DeleteCustomizedConfig(
    req: DeleteCustomizedConfigRequest,
    cb?: (error: string, rep: DeleteCustomizedConfigResponse) => void
  ): Promise<DeleteCustomizedConfigResponse> {
    return this.request("DeleteCustomizedConfig", req, cb)
  }

  /**
   * 查询用户在当前地域支持可用区列表和资源列表。
   */
  async DescribeResources(
    req: DescribeResourcesRequest,
    cb?: (error: string, rep: DescribeResourcesResponse) => void
  ): Promise<DescribeResourcesResponse> {
    return this.request("DescribeResources", req, cb)
  }

  /**
   * 查询后端云主机或弹性网卡绑定的负载均衡，支持弹性网卡和cvm查询。
   */
  async DescribeLBListeners(
    req: DescribeLBListenersRequest,
    cb?: (error: string, rep: DescribeLBListenersResponse) => void
  ): Promise<DescribeLBListenersResponse> {
    return this.request("DescribeLBListeners", req, cb)
  }

  /**
   * 批量绑定虚拟主机或弹性网卡，支持跨域绑定，支持四层、七层（TCP、UDP、HTTP、HTTPS）协议绑定。批量绑定的资源数量上限为500。只支持VPC网络负载均衡。
   */
  async BatchRegisterTargets(
    req: BatchRegisterTargetsRequest,
    cb?: (error: string, rep: BatchRegisterTargetsResponse) => void
  ): Promise<BatchRegisterTargetsResponse> {
    return this.request("BatchRegisterTargets", req, cb)
  }

  /**
     * RegisterFunctionTargets 接口用来将一个云函数绑定到负载均衡的7层转发规则，在此之前您需要先行创建相关的7层监听器（HTTP、HTTPS）和转发规则。
本接口为异步接口，本接口返回成功后需以返回的RequestID为入参，调用DescribeTaskStatus接口查询本次任务是否成功。<br/>
限制说明：
- 仅广州、深圳金融、上海、上海金融、北京、成都、中国香港、新加坡、孟买、东京、硅谷地域支持绑定 SCF。
- 仅标准账户类型支持绑定 SCF，传统账户类型不支持。建议升级为标准账户类型，详情可参见 [账户类型升级说明](https://cloud.tencent.com/document/product/1199/49090)。 
- 传统型负载均衡不支持绑定 SCF。
- 基础网络类型不支持绑定 SCF。
- CLB 默认支持绑定同地域下的所有 SCF，可支持跨 VPC 绑定 SCF，不支持跨地域绑定。
- 目前仅 IPv4、IPv6 NAT64 版本的负载均衡支持绑定 SCF，IPv6 版本的暂不支持。
- 仅七层（HTTP、HTTPS）监听器支持绑定 SCF，四层（TCP、UDP、TCP SSL）监听器和七层 QUIC 监听器不支持。
- CLB 绑定 SCF 仅支持绑定“Event 函数”类型的云函数。
     */
  async RegisterFunctionTargets(
    req: RegisterFunctionTargetsRequest,
    cb?: (error: string, rep: RegisterFunctionTargetsResponse) => void
  ): Promise<RegisterFunctionTargetsResponse> {
    return this.request("RegisterFunctionTargets", req, cb)
  }

  /**
   * 拉取个性化配置列表，返回用户 AppId 下指定类型的配置。
   */
  async DescribeCustomizedConfigList(
    req: DescribeCustomizedConfigListRequest,
    cb?: (error: string, rep: DescribeCustomizedConfigListResponse) => void
  ): Promise<DescribeCustomizedConfigListResponse> {
    return this.request("DescribeCustomizedConfigList", req, cb)
  }

  /**
     * ModifyRule 接口用来修改负载均衡七层监听器下的转发规则的各项属性，包括转发路径、健康检查属性、转发策略等。
本接口为异步接口，本接口返回成功后需以返回的RequestID为入参，调用DescribeTaskStatus接口查询本次任务是否成功。
     */
  async ModifyRule(
    req: ModifyRuleRequest,
    cb?: (error: string, rep: ModifyRuleResponse) => void
  ): Promise<ModifyRuleResponse> {
    return this.request("ModifyRule", req, cb)
  }

  /**
   * 增加、删除、更新负载均衡的日志服务(CLS)主题。
   */
  async SetLoadBalancerClsLog(
    req: SetLoadBalancerClsLogRequest,
    cb?: (error: string, rep: SetLoadBalancerClsLogResponse) => void
  ): Promise<SetLoadBalancerClsLogResponse> {
    return this.request("SetLoadBalancerClsLog", req, cb)
  }

  /**
     * 修改负载均衡的IP（client IP）封禁黑名单列表，一个转发规则最多支持封禁 2000000 个IP，及黑名单容量为 2000000。
（接口灰度中，如需使用请提工单）
     */
  async ModifyBlockIPList(
    req: ModifyBlockIPListRequest,
    cb?: (error: string, rep: ModifyBlockIPListResponse) => void
  ): Promise<ModifyBlockIPListResponse> {
    return this.request("ModifyBlockIPList", req, cb)
  }

  /**
   * DescribeRewrite 接口可根据负载均衡实例ID，查询一个负载均衡实例下转发规则的重定向关系。如果不指定监听器ID或转发规则ID，则返回该负载均衡实例下的所有重定向关系。
   */
  async DescribeRewrite(
    req: DescribeRewriteRequest,
    cb?: (error: string, rep: DescribeRewriteResponse) => void
  ): Promise<DescribeRewriteResponse> {
    return this.request("DescribeRewrite", req, cb)
  }

  /**
     * ModifyTargetPort接口用于修改监听器绑定的后端服务的端口。
本接口为异步接口，本接口返回成功后需以返回的RequestID为入参，调用DescribeTaskStatus接口查询本次任务是否成功。
     */
  async ModifyTargetPort(
    req: ModifyTargetPortRequest,
    cb?: (error: string, rep: ModifyTargetPortResponse) => void
  ): Promise<ModifyTargetPortResponse> {
    return this.request("ModifyTargetPort", req, cb)
  }

  /**
     * DeregisterFunctionTargets 接口用来将一个云函数从负载均衡的转发规则上解绑，对于七层监听器，还需通过 LocationId 或 Domain+Url 指定转发规则。
本接口为异步接口，本接口返回成功后需以返回的 RequestID 为入参，调用 [DescribeTaskStatus](https://cloud.tencent.com/document/product/214/30683) 接口查询本次任务是否成功。
<br/>限制说明：

- 仅广州、深圳金融、上海、上海金融、北京、成都、中国香港、新加坡、孟买、东京、硅谷地域支持绑定 SCF。
- 仅标准账户类型支持绑定 SCF，传统账户类型不支持。建议升级为标准账户类型，详情可参见 [账户类型升级说明](https://cloud.tencent.com/document/product/1199/49090)。
- 传统型负载均衡不支持绑定 SCF。
- 基础网络类型不支持绑定 SCF。
- CLB 默认支持绑定同地域下的所有 SCF，可支持跨 VPC 绑定 SCF，不支持跨地域绑定。
- 目前仅 IPv4、IPv6 NAT64 版本的负载均衡支持绑定 SCF，IPv6 版本的暂不支持。
- 仅七层（HTTP、HTTPS）监听器支持绑定 SCF，四层（TCP、UDP、TCP SSL）监听器和七层 QUIC 监听器不支持。
- CLB 绑定 SCF 仅支持绑定“Event 函数”类型的云函数。
     */
  async DeregisterFunctionTargets(
    req: DeregisterFunctionTargetsRequest,
    cb?: (error: string, rep: DeregisterFunctionTargetsResponse) => void
  ): Promise<DeregisterFunctionTargetsResponse> {
    return this.request("DeregisterFunctionTargets", req, cb)
  }

  /**
     * 本接口（ModifyLoadBalancerSla）用于将按量计费模式的共享型实例升级为性能容量型实例。<br/>
限制条件：
- 本接口只支持升级按量计费的CLB实例，包年包月的CLB实例升级请通过控制台进行升级。
- 升级为性能容量型实例后，不支持再回退到共享型实例。
- 传统型负载均衡实例不支持升级为性能容量型实例。
     */
  async ModifyLoadBalancerSla(
    req: ModifyLoadBalancerSlaRequest,
    cb?: (error: string, rep: ModifyLoadBalancerSlaResponse) => void
  ): Promise<ModifyLoadBalancerSlaResponse> {
    return this.request("ModifyLoadBalancerSla", req, cb)
  }

  /**
   * 查询独占集群中的资源列表，支持按集群ID、VIP、负载均衡ID、是否闲置为过滤条件检索。
   */
  async DescribeClusterResources(
    req: DescribeClusterResourcesRequest,
    cb?: (error: string, rep: DescribeClusterResourcesResponse) => void
  ): Promise<DescribeClusterResourcesResponse> {
    return this.request("DescribeClusterResources", req, cb)
  }

  /**
   * 根据 ModifyBlockIPList 接口返回的异步任务的ID，查询封禁IP（黑名单）异步任务的执行状态。（接口灰度中，如需使用请提工单）
   */
  async DescribeBlockIPTask(
    req: DescribeBlockIPTaskRequest,
    cb?: (error: string, rep: DescribeBlockIPTaskResponse) => void
  ): Promise<DescribeBlockIPTaskResponse> {
    return this.request("DescribeBlockIPTask", req, cb)
  }

  /**
   * DescribeClassicalLBByInstanceId用于通过后端实例ID获取传统型负载均衡ID列表。
   */
  async DescribeClassicalLBByInstanceId(
    req: DescribeClassicalLBByInstanceIdRequest,
    cb?: (error: string, rep: DescribeClassicalLBByInstanceIdResponse) => void
  ): Promise<DescribeClassicalLBByInstanceIdResponse> {
    return this.request("DescribeClassicalLBByInstanceId", req, cb)
  }

  /**
   * 查询账号下的高流量负载均衡，返回前10个负载均衡。如果是子账号登录，只返回子账号有权限的负载均衡。
   */
  async DescribeLoadBalancerTraffic(
    req: DescribeLoadBalancerTrafficRequest,
    cb?: (error: string, rep: DescribeLoadBalancerTrafficResponse) => void
  ): Promise<DescribeLoadBalancerTrafficResponse> {
    return this.request("DescribeLoadBalancerTraffic", req, cb)
  }

  /**
   * 查询跨域2.0版本云联网后端子机和网卡信息。
   */
  async DescribeCrossTargets(
    req: DescribeCrossTargetsRequest,
    cb?: (error: string, rep: DescribeCrossTargetsResponse) => void
  ): Promise<DescribeCrossTargetsResponse> {
    return this.request("DescribeCrossTargets", req, cb)
  }

  /**
   * DescribeTargetHealth 接口用来获取负载均衡后端服务的健康检查结果，不支持传统型负载均衡。
   */
  async DescribeTargetHealth(
    req: DescribeTargetHealthRequest,
    cb?: (error: string, rep: DescribeTargetHealthResponse) => void
  ): Promise<DescribeTargetHealthResponse> {
    return this.request("DescribeTargetHealth", req, cb)
  }

  /**
     * 用户手动配置原访问地址和重定向地址，系统自动将原访问地址的请求重定向至对应路径的目的地址。同一域名下可以配置多条路径作为重定向策略，实现http/https之间请求的自动跳转。设置重定向时，需满足如下约束条件：若A已经重定向至B，则A不能再重定向至C（除非先删除老的重定向关系，再建立新的重定向关系），B不能重定向至任何其它地址。
本接口为异步接口，本接口返回成功后需以返回的RequestID为入参，调用DescribeTaskStatus接口查询本次任务是否成功。
     */
  async ManualRewrite(
    req: ManualRewriteRequest,
    cb?: (error: string, rep: ManualRewriteResponse) => void
  ): Promise<ManualRewriteResponse> {
    return this.request("ManualRewrite", req, cb)
  }

  /**
   * 修改负载均衡转发规则上所绑定的云函数。
   */
  async ModifyFunctionTargets(
    req: ModifyFunctionTargetsRequest,
    cb?: (error: string, rep: ModifyFunctionTargetsResponse) => void
  ): Promise<ModifyFunctionTargetsResponse> {
    return this.request("ModifyFunctionTargets", req, cb)
  }

  /**
     * 这个接口用于删除SnatPro的负载均衡的SnatIp。
本接口为异步接口，接口返回成功后，需以得到的 RequestID 为入参，调用 DescribeTaskStatus 接口查询本次任务是否成功。
     */
  async DeleteLoadBalancerSnatIps(
    req: DeleteLoadBalancerSnatIpsRequest,
    cb?: (error: string, rep: DeleteLoadBalancerSnatIpsResponse) => void
  ): Promise<DeleteLoadBalancerSnatIpsResponse> {
    return this.request("DeleteLoadBalancerSnatIps", req, cb)
  }

  /**
   * 修改IPv6FullChain负载均衡7层监听器支持混绑IPv4/IPv6目标特性。
   */
  async ModifyLoadBalancerMixIpTarget(
    req: ModifyLoadBalancerMixIpTargetRequest,
    cb?: (error: string, rep: ModifyLoadBalancerMixIpTargetResponse) => void
  ): Promise<ModifyLoadBalancerMixIpTargetResponse> {
    return this.request("ModifyLoadBalancerMixIpTarget", req, cb)
  }

  /**
     * CreateRule 接口用于在一个已存在的负载均衡七层监听器下创建转发规则，七层监听器中，后端服务必须绑定到规则上而非监听器上。
本接口为异步接口，本接口返回成功后需以返回的RequestID为入参，调用DescribeTaskStatus接口查询本次任务是否成功。
     */
  async CreateRule(
    req: CreateRuleRequest,
    cb?: (error: string, rep: CreateRuleResponse) => void
  ): Promise<CreateRuleResponse> {
    return this.request("CreateRule", req, cb)
  }

  /**
   * 新增个性化配置，准备下线，请使用SetCustomizedConfigForLoadBalancer。
   */
  async AddCustomizedConfig(
    req: AddCustomizedConfigRequest,
    cb?: (error: string, rep: AddCustomizedConfigResponse) => void
  ): Promise<AddCustomizedConfigResponse> {
    return this.request("AddCustomizedConfig", req, cb)
  }

  /**
     * ModifyDomain接口用来修改负载均衡七层监听器下的域名。
本接口为异步接口，本接口返回成功后需以返回的RequestID为入参，调用DescribeTaskStatus接口查询本次任务是否成功。
     */
  async ModifyDomain(
    req: ModifyDomainRequest,
    cb?: (error: string, rep: ModifyDomainResponse) => void
  ): Promise<ModifyDomainResponse> {
    return this.request("ModifyDomain", req, cb)
  }

  /**
   * InquiryPriceRenewLoadBalancer接口查询对负载均衡续费的价格，只支持预付费负载均衡续费。
   */
  async InquiryPriceRenewLoadBalancer(
    req: InquiryPriceRenewLoadBalancerRequest,
    cb?: (error: string, rep: InquiryPriceRenewLoadBalancerResponse) => void
  ): Promise<InquiryPriceRenewLoadBalancerResponse> {
    return this.request("InquiryPriceRenewLoadBalancer", req, cb)
  }

  /**
   * 查询运行中、隔离中、即将到期和负载均衡总数。
   */
  async DescribeLoadBalancerOverview(
    req?: DescribeLoadBalancerOverviewRequest,
    cb?: (error: string, rep: DescribeLoadBalancerOverviewResponse) => void
  ): Promise<DescribeLoadBalancerOverviewResponse> {
    return this.request("DescribeLoadBalancerOverview", req, cb)
  }

  /**
     * DeleteLoadBalancer 接口用以删除指定的一个或多个负载均衡实例。成功删除后，会把负载均衡实例下的监听器、转发规则一起删除，并把后端服务解绑。
本接口为异步接口，接口返回成功后，需以返回的 RequestId 为入参，调用 DescribeTaskStatus 接口查询本次任务是否成功。
     */
  async DeleteLoadBalancer(
    req: DeleteLoadBalancerRequest,
    cb?: (error: string, rep: DeleteLoadBalancerResponse) => void
  ): Promise<DeleteLoadBalancerResponse> {
    return this.request("DeleteLoadBalancer", req, cb)
  }

  /**
   * InquiryPriceCreateLoadBalancer接口查询创建负载均衡的价格。
   */
  async InquiryPriceCreateLoadBalancer(
    req: InquiryPriceCreateLoadBalancerRequest,
    cb?: (error: string, rep: InquiryPriceCreateLoadBalancerResponse) => void
  ): Promise<InquiryPriceCreateLoadBalancerResponse> {
    return this.request("InquiryPriceCreateLoadBalancer", req, cb)
  }

  /**
     * DeleteRule 接口用来删除负载均衡实例七层监听器下的转发规则。
本接口为异步接口，本接口返回成功后需以返回的RequestID为入参，调用DescribeTaskStatus接口查询本次任务是否成功。
     */
  async DeleteRule(
    req: DeleteRuleRequest,
    cb?: (error: string, rep: DeleteRuleResponse) => void
  ): Promise<DeleteRuleResponse> {
    return this.request("DeleteRule", req, cb)
  }

  /**
   * 修改个性化配置。如果配置已经绑定clb、server或location，同时更新。准备下线，请使用SetCustomizedConfigForLoadBalancer。
   */
  async ModifyCustomizedConfig(
    req: ModifyCustomizedConfigRequest,
    cb?: (error: string, rep: ModifyCustomizedConfigResponse) => void
  ): Promise<ModifyCustomizedConfigResponse> {
    return this.request("ModifyCustomizedConfig", req, cb)
  }

  /**
   * 本接口用于查询异步任务的执行状态，对于非查询类的接口（创建/删除负载均衡实例、监听器、规则以及绑定或解绑后端服务等），在接口调用成功后，都需要使用本接口查询任务最终是否执行成功。
   */
  async DescribeTaskStatus(
    req: DescribeTaskStatusRequest,
    cb?: (error: string, rep: DescribeTaskStatusResponse) => void
  ): Promise<DescribeTaskStatusResponse> {
    return this.request("DescribeTaskStatus", req, cb)
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
   * 查询目标组信息
   */
  async DescribeTargetGroups(
    req: DescribeTargetGroupsRequest,
    cb?: (error: string, rep: DescribeTargetGroupsResponse) => void
  ): Promise<DescribeTargetGroupsResponse> {
    return this.request("DescribeTargetGroups", req, cb)
  }

  /**
   * 修改目标组的名称或者默认端口属性
   */
  async ModifyTargetGroupAttribute(
    req: ModifyTargetGroupAttributeRequest,
    cb?: (error: string, rep: ModifyTargetGroupAttributeResponse) => void
  ): Promise<ModifyTargetGroupAttributeResponse> {
    return this.request("ModifyTargetGroupAttribute", req, cb)
  }

  /**
   * 创建CLB专有日志集，此日志集用于存储CLB的日志。
   */
  async CreateClsLogSet(
    req: CreateClsLogSetRequest,
    cb?: (error: string, rep: CreateClsLogSetResponse) => void
  ): Promise<CreateClsLogSetResponse> {
    return this.request("CreateClsLogSet", req, cb)
  }

  /**
   * 查询用户当前地域下的各项配额
   */
  async DescribeQuota(
    req?: DescribeQuotaRequest,
    cb?: (error: string, rep: DescribeQuotaResponse) => void
  ): Promise<DescribeQuotaResponse> {
    return this.request("DescribeQuota", req, cb)
  }

  /**
     * 本接口(CreateLoadBalancer)用来创建负载均衡实例（本接口只支持购买按量计费的负载均衡，包年包月的负载均衡请通过控制台购买）。为了使用负载均衡服务，您必须购买一个或多个负载均衡实例。成功调用该接口后，会返回负载均衡实例的唯一 ID。负载均衡实例的类型分为：公网、内网。详情可参考产品说明中的产品类型。
注意：(1)可通过 [DescribeResources](https://cloud.tencent.com/document/api/214/70213) 接口查询一个地域是否支持创建IPv6实例；(2)一个账号在每个地域的默认购买配额为：公网100个，内网100个。
本接口为异步接口，接口成功返回后，可使用 DescribeLoadBalancers 接口查询负载均衡实例的状态（如创建中、正常），以确定是否创建成功。
     */
  async CreateLoadBalancer(
    req: CreateLoadBalancerRequest,
    cb?: (error: string, rep: CreateLoadBalancerResponse) => void
  ): Promise<CreateLoadBalancerResponse> {
    return this.request("CreateLoadBalancer", req, cb)
  }

  /**
   * 闲置实例是指创建超过7天后付费实例，且没有创建规则或创建规则没有绑定子机的负载均衡实例。
   */
  async DescribeIdleLoadBalancers(
    req: DescribeIdleLoadBalancersRequest,
    cb?: (error: string, rep: DescribeIdleLoadBalancersResponse) => void
  ): Promise<DescribeIdleLoadBalancersResponse> {
    return this.request("DescribeIdleLoadBalancers", req, cb)
  }

  /**
     * RegisterTargets 接口用来将一台或多台后端服务绑定到负载均衡的监听器（或7层转发规则），在此之前您需要先行创建相关的4层监听器或7层转发规则。对于四层监听器（TCP、UDP），只需指定监听器ID即可，对于七层监听器（HTTP、HTTPS），还需通过LocationId或者Domain+Url指定转发规则。
本接口为异步接口，本接口返回成功后需以返回的RequestID为入参，调用DescribeTaskStatus接口查询本次任务是否成功。
     */
  async RegisterTargets(
    req: RegisterTargetsRequest,
    cb?: (error: string, rep: RegisterTargetsResponse) => void
  ): Promise<RegisterTargetsResponse> {
    return this.request("RegisterTargets", req, cb)
  }

  /**
   * DescribeClassicalLBListeners 接口用于获取传统型负载均衡的监听器信息。
   */
  async DescribeClassicalLBListeners(
    req: DescribeClassicalLBListenersRequest,
    cb?: (error: string, rep: DescribeClassicalLBListenersResponse) => void
  ): Promise<DescribeClassicalLBListenersResponse> {
    return this.request("DescribeClassicalLBListeners", req, cb)
  }

  /**
     * ReplaceCertForLoadBalancers 接口用以替换负载均衡实例所关联的证书，对于各个地域的负载均衡，如果指定的老的证书ID与其有关联关系，则会先解除关联，再建立新证书与该负载均衡的关联关系。
此接口支持替换服务端证书或客户端证书。
需要使用的新证书，可以通过传入证书ID来指定，如果不指定证书ID，则必须传入证书内容等相关信息，用以新建证书并绑定至负载均衡。
注：本接口仅可从广州地域调用。
     */
  async ReplaceCertForLoadBalancers(
    req: ReplaceCertForLoadBalancersRequest,
    cb?: (error: string, rep: ReplaceCertForLoadBalancersResponse) => void
  ): Promise<ReplaceCertForLoadBalancersResponse> {
    return this.request("ReplaceCertForLoadBalancers", req, cb)
  }

  /**
     * 该接口支持删除负载均衡的多个监听器。
本接口为异步接口，本接口返回成功后需以返回的 RequestID 为入参，调用 DescribeTaskStatus 接口查询本次任务是否成功。
     */
  async DeleteLoadBalancerListeners(
    req: DeleteLoadBalancerListenersRequest,
    cb?: (error: string, rep: DeleteLoadBalancerListenersResponse) => void
  ): Promise<DeleteLoadBalancerListenersResponse> {
    return this.request("DeleteLoadBalancerListeners", req, cb)
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
   * 根据证书ID查询其在一个地域中所关联到负载均衡实例列表
   */
  async DescribeLoadBalancerListByCertId(
    req: DescribeLoadBalancerListByCertIdRequest,
    cb?: (error: string, rep: DescribeLoadBalancerListByCertIdResponse) => void
  ): Promise<DescribeLoadBalancerListByCertIdResponse> {
    return this.request("DescribeLoadBalancerListByCertId", req, cb)
  }

  /**
     * ModifyDomainAttributes接口用于修改负载均衡7层监听器转发规则的域名级别属性，如修改域名、修改DefaultServer、开启/关闭Http2、修改证书。
本接口为异步接口，本接口返回成功后，需以返回的RequestId为入参，调用DescribeTaskStatus接口查询本次任务是否成功。
     */
  async ModifyDomainAttributes(
    req: ModifyDomainAttributesRequest,
    cb?: (error: string, rep: ModifyDomainAttributesResponse) => void
  ): Promise<ModifyDomainAttributesResponse> {
    return this.request("ModifyDomainAttributes", req, cb)
  }

  /**
     * 解除规则的目标组关联关系。
本接口为异步接口，本接口返回成功后需以返回的 RequestID 为入参，调用 DescribeTaskStatus 接口查询本次任务是否成功。
     */
  async DisassociateTargetGroups(
    req: DisassociateTargetGroupsRequest,
    cb?: (error: string, rep: DisassociateTargetGroupsResponse) => void
  ): Promise<DisassociateTargetGroupsResponse> {
    return this.request("DisassociateTargetGroups", req, cb)
  }

  /**
   * 查询一个地域的负载均衡实例列表。
   */
  async DescribeLoadBalancers(
    req: DescribeLoadBalancersRequest,
    cb?: (error: string, rep: DescribeLoadBalancersResponse) => void
  ): Promise<DescribeLoadBalancersResponse> {
    return this.request("DescribeLoadBalancers", req, cb)
  }

  /**
   * 查询一个负载均衡所封禁的IP列表（黑名单）。（接口灰度中，如需使用请提工单）
   */
  async DescribeBlockIPList(
    req: DescribeBlockIPListRequest,
    cb?: (error: string, rep: DescribeBlockIPListResponse) => void
  ): Promise<DescribeBlockIPListResponse> {
    return this.request("DescribeBlockIPList", req, cb)
  }

  /**
   * DescribeClassicalLBTargets用于获取传统型负载均衡绑定的后端服务。
   */
  async DescribeClassicalLBTargets(
    req: DescribeClassicalLBTargetsRequest,
    cb?: (error: string, rep: DescribeClassicalLBTargetsResponse) => void
  ): Promise<DescribeClassicalLBTargetsResponse> {
    return this.request("DescribeClassicalLBTargets", req, cb)
  }

  /**
     * 在一个负载均衡实例下创建监听器。
本接口为异步接口，接口返回成功后，需以返回的 RequestId 为入参，调用 DescribeTaskStatus 接口查询本次任务是否成功。
     */
  async CreateListener(
    req: CreateListenerRequest,
    cb?: (error: string, rep: CreateListenerResponse) => void
  ): Promise<CreateListenerResponse> {
    return this.request("CreateListener", req, cb)
  }

  /**
   * 获取用户的CLB专有日志集。
   */
  async DescribeClsLogSet(
    req?: DescribeClsLogSetRequest,
    cb?: (error: string, rep: DescribeClsLogSetResponse) => void
  ): Promise<DescribeClsLogSetResponse> {
    return this.request("DescribeClsLogSet", req, cb)
  }

  /**
     * ModifyTargetWeight 接口用于修改负载均衡绑定的后端服务的转发权重。
本接口为异步接口，本接口返回成功后需以返回的RequestID为入参，调用DescribeTaskStatus接口查询本次任务是否成功。
     */
  async ModifyTargetWeight(
    req: ModifyTargetWeightRequest,
    cb?: (error: string, rep: ModifyTargetWeightResponse) => void
  ): Promise<ModifyTargetWeightResponse> {
    return this.request("ModifyTargetWeight", req, cb)
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
   * DescribeTargets 接口用来查询负载均衡实例的某些监听器绑定的后端服务列表。
   */
  async DescribeTargets(
    req: DescribeTargetsRequest,
    cb?: (error: string, rep: DescribeTargetsResponse) => void
  ): Promise<DescribeTargetsResponse> {
    return this.request("DescribeTargets", req, cb)
  }

  /**
     * 本接口将传统型负载均衡迁移成(原应用型)负载均衡
本接口为异步接口，接口成功返回后，可使用 DescribeLoadBalancers 接口查询负载均衡实例的状态（如创建中、正常），以确定是否创建成功。
     */
  async MigrateClassicalLoadBalancers(
    req: MigrateClassicalLoadBalancersRequest,
    cb?: (error: string, rep: MigrateClassicalLoadBalancersResponse) => void
  ): Promise<MigrateClassicalLoadBalancersResponse> {
    return this.request("MigrateClassicalLoadBalancers", req, cb)
  }

  /**
   * DescribeClassicalLBHealthStatus用于获取传统型负载均衡后端的健康状态
   */
  async DescribeClassicalLBHealthStatus(
    req: DescribeClassicalLBHealthStatusRequest,
    cb?: (error: string, rep: DescribeClassicalLBHealthStatusResponse) => void
  ): Promise<DescribeClassicalLBHealthStatusResponse> {
    return this.request("DescribeClassicalLBHealthStatus", req, cb)
  }

  /**
     * 针对SnatPro负载均衡，这个接口用于添加SnatIp，如果负载均衡没有开启SnatPro，添加SnatIp后会自动开启。
本接口为异步接口，接口返回成功后，需以得到的 RequestID 为入参，调用 DescribeTaskStatus 接口查询本次任务是否成功。
     */
  async CreateLoadBalancerSnatIps(
    req: CreateLoadBalancerSnatIpsRequest,
    cb?: (error: string, rep: CreateLoadBalancerSnatIpsResponse) => void
  ): Promise<CreateLoadBalancerSnatIpsResponse> {
    return this.request("CreateLoadBalancerSnatIps", req, cb)
  }

  /**
   * 获取目标组绑定的服务器信息
   */
  async DescribeTargetGroupInstances(
    req: DescribeTargetGroupInstancesRequest,
    cb?: (error: string, rep: DescribeTargetGroupInstancesResponse) => void
  ): Promise<DescribeTargetGroupInstancesResponse> {
    return this.request("DescribeTargetGroupInstances", req, cb)
  }

  /**
     * 克隆负载均衡实例，根据指定的负载均衡实例，复制出相同规则和绑定关系的负载均衡实例。克隆接口为异步操作，克隆的数据以调用CloneLoadBalancer时为准，如果调用CloneLoadBalancer后克隆CLB发生变化，变化规则不会克隆。

注：查询实例创建状态可以根据返回值中的requestId访问[DescribeTaskStatus](https://cloud.tencent.com/document/product/214/30683)接口

限制说明
实例属性维度限制：
- 支持克隆网络计费模式为按量计费与包年包月的实例，包年包月实例克隆后的新实例网络计费模式会转换为按小时带宽计费，其带宽、规格与原实例设置保持一致。
- 不支持克隆未关联实例计费项的 CLB。
- 不支持克隆传统型负载均衡实例和高防 CLB。
- 不支持克隆基础网络类型的实例。
- 不支持克隆 Anycast 类型的实例。
- 不支持克隆 IPv6 NAT64 版本的实例。
- 不支持克隆被封禁或冻结的实例。
- 执行克隆操作前，请确保实例上没有使用已过期证书，否则会导致克隆失败。
配额维度限制：
- 当实例的监听器个数超过 50 个时，不支持克隆。
- 当共享型实例的公网带宽上限超过 2G 时，不支持克隆。

通过接口调用：
BGP带宽包必须传带宽包id
独占集群克隆必须传对应的参数，否则按共享型创建
     */
  async CloneLoadBalancer(
    req: CloneLoadBalancerRequest,
    cb?: (error: string, rep: CloneLoadBalancerResponse) => void
  ): Promise<CloneLoadBalancerResponse> {
    return this.request("CloneLoadBalancer", req, cb)
  }

  /**
   * BatchModifyTargetTag 接口用于批量修改负载均衡监听器绑定的后端机器的标签。批量修改的资源数量上限为500。本接口为同步接口。<br/>负载均衡的4层和7层监听器支持此接口，传统型负载均衡不支持。
   */
  async BatchModifyTargetTag(
    req: BatchModifyTargetTagRequest,
    cb?: (error: string, rep: BatchModifyTargetTagResponse) => void
  ): Promise<BatchModifyTargetTagResponse> {
    return this.request("BatchModifyTargetTag", req, cb)
  }
}
