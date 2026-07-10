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
  NotifyUnbindTargetRequest,
  DescribeQuotaRequest,
  InquirePriceCreateLoadBalancerRequest,
  DeleteRulesRequest,
  SetLoadBalancerSecurityGroupsResponse,
  ZoneMappingsItem,
  LoadBalancerDetail,
  CreateLoadBalancerRequest,
  ModifyLoadBalancerAttributesRequest,
  DisassociateBandwidthPackageFromLoadBalancerRequest,
  CreateHealthCheckTemplateRequest,
  DescribeListenerHealthStatusRequest,
  HTTPHeaderInfo,
  DeleteHealthCheckTemplatesRequest,
  ModifyLoadBalancerAttributesResponse,
  LoadBalancerAddress,
  NotifyUnbindTargetResponse,
  TargetOutput,
  CreateHealthCheckTemplateResponse,
  ModifyHealthCheckTemplateRequest,
  AssociateListenerAdditionalCertificatesRequest,
  IPAddressInfo,
  DescribeListenerDetailResponse,
  RuleAction,
  DescribeRulesResponse,
  DescribeTargetGroupsResponse,
  RemoveTargetsFromTargetGroupRequest,
  DescribeListenerDetailRequest,
  AddTargetsToTargetGroupRequest,
  ModifyListenerAttributesResponse,
  AccessLogConfig,
  ModifyRulesAttributesResponse,
  HTTPRewriteInfo,
  AssociateBandwidthPackageWithLoadBalancerResponse,
  DescribeListenersResponse,
  AssociateBandwidthPackageWithLoadBalancerRequest,
  XForwardedForConfig,
  DescribeTargetGroupsRequest,
  QuotaInfo,
  DeleteLoadBalancersResponse,
  DescribeRulesRequest,
  HTTPCookieInfo,
  ModifySecurityPolicyAttributesRequest,
  DescribeSecurityPolicyRelationsResponse,
  DescribeSecurityPoliciesResponse,
  HTTPRedirectInfo,
  DescribeZonesRequest,
  Job,
  RelatedListener,
  DescribeListenerCertificatesRequest,
  ModifyLoadBalancerAddressTypeRequest,
  CreateRulesResponse,
  CreateSecurityPolicyResponse,
  DeleteListenerRequest,
  ModifyTargetGroupAttributesResponse,
  RuleModify,
  StickySessionConfig,
  AssociateListenerAdditionalCertificatesResponse,
  ListenerOutput,
  PostPayPriceInfo,
  CreateRulesRequest,
  DeleteSecurityPolicyResponse,
  TargetToAdd,
  DisassociateListenerAdditionalCertificatesResponse,
  DescribeSecurityPolicyCapabilitiesResponse,
  RemoveHTTPHeaderInfo,
  DescribeTargetGroupTargetsRequest,
  DescribeListenerCertificatesResponse,
  SetLoadBalancerSecurityGroupsRequest,
  RemoveTargetsFromTargetGroupResponse,
  AddTargetsToTargetGroupResponse,
  DescribeAsyncJobsRequest,
  CreateListenerResponse,
  CreateTargetGroupResponse,
  TargetGroupConfig,
  DescribeTargetGroupsByTargetRequest,
  TargetGroupStickySession,
  DeleteLoadBalancersRequest,
  RuleCondition,
  Zone,
  RuleOutput,
  SecurityPolicyCapability,
  ModificationProtectionInfo,
  ModifyTargetsInTargetGroupResponse,
  ModifySecurityPolicyAttributesResponse,
  DeleteSecurityPolicyRequest,
  RuleHealthStatusInfo,
  ModifyLoadBalancerAddressTypeResponse,
  CertificateInfo,
  DescribeHealthCheckTemplatesResponse,
  DescribeTargetGroupsByTargetResponse,
  CreateTargetGroupRequest,
  TargetHealthStatusInfo,
  CreateListenerRequest,
  ModifyLoadBalancerModificationProtectionResponse,
  RuleInput,
  DefaultAction,
  TargetGroupHealthInfo,
  SecurityPolicyRelations,
  DescribeSecurityPolicyRelationsRequest,
  LoadBalancerOperationLocksItem,
  DescribeLoadBalancersRequest,
  ModifyTargetsInTargetGroupRequest,
  DescribeSecurityPolicyCapabilitiesRequest,
  HealthCheckConfig,
  ModifyTargetGroupAttributesRequest,
  HealthCheckTemplate,
  DescribeZonesResponse,
  CreateSecurityPolicyRequest,
  TargetGroupOutput,
  InquirePriceCreateLoadBalancerResponse,
  DescribeListenerHealthStatusResponse,
  SecurityPolicyInfo,
  ModifyRulesAttributesRequest,
  DeletionProtectionConfig,
  DisassociateListenerAdditionalCertificatesRequest,
  DescribeLoadBalancerDetailRequest,
  InsertHTTPHeaderInfo,
  DescribeHealthCheckTemplatesRequest,
  DescribeSystemSecurityPoliciesResponse,
  HTTPQueryStringInfo,
  ModifyHealthCheckTemplateResponse,
  DeleteRulesResponse,
  DescribeQuotaResponse,
  DeleteTargetGroupsResponse,
  Price,
  ModifyListenerAttributesRequest,
  TargetToRemove,
  LoadBalancerBillingConfig,
  TagInfo,
  TargetGroupTuple,
  CreateLoadBalancerResponse,
  TargetToModify,
  DescribeListenersRequest,
  ModifyLoadBalancerModificationProtectionRequest,
  DisassociateBandwidthPackageFromLoadBalancerResponse,
  DescribeLoadBalancerDetailResponse,
  FixedResponseInfo,
  DescribeLoadBalancersResponse,
  Filter,
  ZoneMappingInfo,
  DeleteListenerResponse,
  DescribeSystemSecurityPoliciesRequest,
  DeleteTargetGroupsRequest,
  DescribeAsyncJobsResponse,
  DescribeTargetGroupTargetsResponse,
  DescribeSecurityPoliciesRequest,
  DeleteHealthCheckTemplatesResponse,
  LoadBalancer,
} from "./alb_models"

/**
 * alb client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("alb.tencentcloudapi.com", "2025-10-30", clientConfig)
  }

  /**
   * 向目标组内添加后端服务
   */
  async AddTargetsToTargetGroup(
    req: AddTargetsToTargetGroupRequest,
    cb?: (error: string, rep: AddTargetsToTargetGroupResponse) => void
  ): Promise<AddTargetsToTargetGroupResponse> {
    return this.request("AddTargetsToTargetGroup", req, cb)
  }

  /**
     * SetLoadBalancerSecurityGroups 接口支持对一个公网负载均衡实例执行设置（绑定、解绑）安全组操作。查询一个负载均衡实例目前已绑定的安全组，可使用 [DescribeLoadBalancerDetail](https://cloud.tencent.com/document/api/1822/133711) 接口。本接口是set语义，
绑定操作时，入参需要传入负载均衡实例要绑定的所有安全组（已绑定的+新增绑定的）。
解绑操作时，入参需要传入负载均衡实例执行解绑后所绑定的所有安全组；如果要解绑所有安全组，可不传此参数，或传入空数组。
     */
  async SetLoadBalancerSecurityGroups(
    req: SetLoadBalancerSecurityGroupsRequest,
    cb?: (error: string, rep: SetLoadBalancerSecurityGroupsResponse) => void
  ): Promise<SetLoadBalancerSecurityGroupsResponse> {
    return this.request("SetLoadBalancerSecurityGroups", req, cb)
  }

  /**
   * 创建自定义安全策略，用于配置 HTTPS 监听器的 TLS 协议版本和加密套件。通过安全策略，您可以灵活控制客户端与负载均衡之间 HTTPS 通信的安全级别。
   */
  async CreateSecurityPolicy(
    req: CreateSecurityPolicyRequest,
    cb?: (error: string, rep: CreateSecurityPolicyResponse) => void
  ): Promise<CreateSecurityPolicyResponse> {
    return this.request("CreateSecurityPolicy", req, cb)
  }

  /**
   * 删除一个或多个自定义安全策略。删除安全策略前，请确保该策略未被任何 HTTPS 监听器引用，否则删除操作将失败。
   */
  async DeleteSecurityPolicy(
    req: DeleteSecurityPolicyRequest,
    cb?: (error: string, rep: DeleteSecurityPolicyResponse) => void
  ): Promise<DeleteSecurityPolicyResponse> {
    return this.request("DeleteSecurityPolicy", req, cb)
  }

  /**
   * 通知负载均衡解绑后端服务
   */
  async NotifyUnbindTarget(
    req: NotifyUnbindTargetRequest,
    cb?: (error: string, rep: NotifyUnbindTargetResponse) => void
  ): Promise<NotifyUnbindTargetResponse> {
    return this.request("NotifyUnbindTarget", req, cb)
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
     * **DeleteLoadBalancers**接口属于异步接口，即系统返回一个请求ID，但该应用型负载均衡实例尚未删除成功，系统后台的删除任务仍在进行。您可以调用[DescribeLoadBalancerDetail](https://cloud.tencent.com/document/api/1822/133711)查询应用型负载均衡实例的删除状态：
- 当应用型负载均衡实例处于**Deleting**状态时，表示应用型负载均衡实例正在删除中。
- 当查询不到指定的应用型负载均衡实例时，表示应用型负载均衡实例删除成功。
     */
  async DeleteLoadBalancers(
    req: DeleteLoadBalancersRequest,
    cb?: (error: string, rep: DeleteLoadBalancersResponse) => void
  ): Promise<DeleteLoadBalancersResponse> {
    return this.request("DeleteLoadBalancers", req, cb)
  }

  /**
   * 修改监听器属性
   */
  async ModifyListenerAttributes(
    req: ModifyListenerAttributesRequest,
    cb?: (error: string, rep: ModifyListenerAttributesResponse) => void
  ): Promise<ModifyListenerAttributesResponse> {
    return this.request("ModifyListenerAttributes", req, cb)
  }

  /**
   * 查询系统安全策略。
   */
  async DescribeSystemSecurityPolicies(
    req?: DescribeSystemSecurityPoliciesRequest,
    cb?: (error: string, rep: DescribeSystemSecurityPoliciesResponse) => void
  ): Promise<DescribeSystemSecurityPoliciesResponse> {
    return this.request("DescribeSystemSecurityPolicies", req, cb)
  }

  /**
   * 修改目标组。
   */
  async ModifyTargetGroupAttributes(
    req: ModifyTargetGroupAttributesRequest,
    cb?: (error: string, rep: ModifyTargetGroupAttributesResponse) => void
  ): Promise<ModifyTargetGroupAttributesResponse> {
    return this.request("ModifyTargetGroupAttributes", req, cb)
  }

  /**
     * **ModifyLoadBalancerAttributes**接口属于异步接口，即系统返回一个请求ID，但该应用型负载均衡实例属性尚未修改成功，系统后台的修改任务仍在进行。您可以调用[DescribeLoadBalancerDetail](https://cloud.tencent.com/document/api/1822/133711)查询应用型负载均衡实例属性的修改状态：
- 当应用型负载均衡实例属性处于**Configuring**状态时，表示应用型负载均衡实例属性正在修改中。
- 当应用型负载均衡实例属性处于**Active**状态时，表示应用型负载均衡实例属性修改成功。
     */
  async ModifyLoadBalancerAttributes(
    req: ModifyLoadBalancerAttributesRequest,
    cb?: (error: string, rep: ModifyLoadBalancerAttributesResponse) => void
  ): Promise<ModifyLoadBalancerAttributesResponse> {
    return this.request("ModifyLoadBalancerAttributes", req, cb)
  }

  /**
     * ModifyRulesAttributes修改转发规则属性，本接口为异步接口，返回成功后需以返回的RequestID为入参，调用DescribeAsyncJobs接口查询本次任务是否成功。
一条规则最多支持10个转发条件（Conditions），5个转发动作（Actions）。
     */
  async ModifyRulesAttributes(
    req: ModifyRulesAttributesRequest,
    cb?: (error: string, rep: ModifyRulesAttributesResponse) => void
  ): Promise<ModifyRulesAttributesResponse> {
    return this.request("ModifyRulesAttributes", req, cb)
  }

  /**
   * 删除目标组。
   */
  async DeleteTargetGroups(
    req: DeleteTargetGroupsRequest,
    cb?: (error: string, rep: DeleteTargetGroupsResponse) => void
  ): Promise<DeleteTargetGroupsResponse> {
    return this.request("DeleteTargetGroups", req, cb)
  }

  /**
     * CreateRules创建转发规则，本接口为异步接口，返回成功后需以返回的RequestID为入参，调用DescribeAsyncJobs接口查询本次任务是否成功。
一条规则最多支持10个转发条件（Conditions），5个转发动作（Actions）。
     */
  async CreateRules(
    req: CreateRulesRequest,
    cb?: (error: string, rep: CreateRulesResponse) => void
  ): Promise<CreateRulesResponse> {
    return this.request("CreateRules", req, cb)
  }

  /**
   * 异步任务查询接口
   */
  async DescribeAsyncJobs(
    req: DescribeAsyncJobsRequest,
    cb?: (error: string, rep: DescribeAsyncJobsResponse) => void
  ): Promise<DescribeAsyncJobsResponse> {
    return this.request("DescribeAsyncJobs", req, cb)
  }

  /**
   * 查询健康检查模板列表
   */
  async DescribeHealthCheckTemplates(
    req: DescribeHealthCheckTemplatesRequest,
    cb?: (error: string, rep: DescribeHealthCheckTemplatesResponse) => void
  ): Promise<DescribeHealthCheckTemplatesResponse> {
    return this.request("DescribeHealthCheckTemplates", req, cb)
  }

  /**
   * 将共享带宽包从应用型负载均衡实例解绑。
   */
  async DisassociateBandwidthPackageFromLoadBalancer(
    req: DisassociateBandwidthPackageFromLoadBalancerRequest,
    cb?: (error: string, rep: DisassociateBandwidthPackageFromLoadBalancerResponse) => void
  ): Promise<DisassociateBandwidthPackageFromLoadBalancerResponse> {
    return this.request("DisassociateBandwidthPackageFromLoadBalancer", req, cb)
  }

  /**
   * 从目标组内移除后端服务
   */
  async RemoveTargetsFromTargetGroup(
    req: RemoveTargetsFromTargetGroupRequest,
    cb?: (error: string, rep: RemoveTargetsFromTargetGroupResponse) => void
  ): Promise<RemoveTargetsFromTargetGroupResponse> {
    return this.request("RemoveTargetsFromTargetGroup", req, cb)
  }

  /**
   * 查询目标组内后端服务
   */
  async DescribeTargetGroupTargets(
    req: DescribeTargetGroupTargetsRequest,
    cb?: (error: string, rep: DescribeTargetGroupTargetsResponse) => void
  ): Promise<DescribeTargetGroupTargetsResponse> {
    return this.request("DescribeTargetGroupTargets", req, cb)
  }

  /**
   * 查询实例配置。
   */
  async DescribeLoadBalancers(
    req: DescribeLoadBalancersRequest,
    cb?: (error: string, rep: DescribeLoadBalancersResponse) => void
  ): Promise<DescribeLoadBalancersResponse> {
    return this.request("DescribeLoadBalancers", req, cb)
  }

  /**
   * 查询监听器列表
   */
  async DescribeListeners(
    req: DescribeListenersRequest,
    cb?: (error: string, rep: DescribeListenersResponse) => void
  ): Promise<DescribeListenersResponse> {
    return this.request("DescribeListeners", req, cb)
  }

  /**
   * 查询安全策略的关联关系，即安全策略被哪些 HTTPS 监听器引用。在删除或修改安全策略前，建议先调用此接口确认影响范围。
   */
  async DescribeSecurityPolicyRelations(
    req: DescribeSecurityPolicyRelationsRequest,
    cb?: (error: string, rep: DescribeSecurityPolicyRelationsResponse) => void
  ): Promise<DescribeSecurityPolicyRelationsResponse> {
    return this.request("DescribeSecurityPolicyRelations", req, cb)
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
   * 设置负载均衡实例修改保护。
   */
  async ModifyLoadBalancerModificationProtection(
    req: ModifyLoadBalancerModificationProtectionRequest,
    cb?: (error: string, rep: ModifyLoadBalancerModificationProtectionResponse) => void
  ): Promise<ModifyLoadBalancerModificationProtectionResponse> {
    return this.request("ModifyLoadBalancerModificationProtection", req, cb)
  }

  /**
   * DeleteRules删除转发规则，本接口为异步接口，返回成功后需以返回的RequestID为入参，调用DescribeAsyncJobs接口查询本次任务是否成功。
   */
  async DeleteRules(
    req: DeleteRulesRequest,
    cb?: (error: string, rep: DeleteRulesResponse) => void
  ): Promise<DeleteRulesResponse> {
    return this.request("DeleteRules", req, cb)
  }

  /**
   * 查询自定义安全策略列表，支持按安全策略 ID、名称或标签进行筛选，并支持分页查询。
   */
  async DescribeSecurityPolicies(
    req: DescribeSecurityPoliciesRequest,
    cb?: (error: string, rep: DescribeSecurityPoliciesResponse) => void
  ): Promise<DescribeSecurityPoliciesResponse> {
    return this.request("DescribeSecurityPolicies", req, cb)
  }

  /**
   * 查询单个监听器详情
   */
  async DescribeListenerDetail(
    req: DescribeListenerDetailRequest,
    cb?: (error: string, rep: DescribeListenerDetailResponse) => void
  ): Promise<DescribeListenerDetailResponse> {
    return this.request("DescribeListenerDetail", req, cb)
  }

  /**
   * 查询指定负载均衡实例的详细信息。
   */
  async DescribeLoadBalancerDetail(
    req: DescribeLoadBalancerDetailRequest,
    cb?: (error: string, rep: DescribeLoadBalancerDetailResponse) => void
  ): Promise<DescribeLoadBalancerDetailResponse> {
    return this.request("DescribeLoadBalancerDetail", req, cb)
  }

  /**
   * InquirePriceCreateLoadBalancer接口查询创建负载均衡的价格。
   */
  async InquirePriceCreateLoadBalancer(
    req: InquirePriceCreateLoadBalancerRequest,
    cb?: (error: string, rep: InquirePriceCreateLoadBalancerResponse) => void
  ): Promise<InquirePriceCreateLoadBalancerResponse> {
    return this.request("InquirePriceCreateLoadBalancer", req, cb)
  }

  /**
   * 查询监听器健康状态。
   */
  async DescribeListenerHealthStatus(
    req: DescribeListenerHealthStatusRequest,
    cb?: (error: string, rep: DescribeListenerHealthStatusResponse) => void
  ): Promise<DescribeListenerHealthStatusResponse> {
    return this.request("DescribeListenerHealthStatus", req, cb)
  }

  /**
   * 查询当前地域支持的安全策略配置能力，包括可选的 TLS 协议版本及各版本对应的加密套件列表。在创建或修改自定义安全策略前，建议先调用此接口获取可用的配置选项。
   */
  async DescribeSecurityPolicyCapabilities(
    req?: DescribeSecurityPolicyCapabilitiesRequest,
    cb?: (error: string, rep: DescribeSecurityPolicyCapabilitiesResponse) => void
  ): Promise<DescribeSecurityPolicyCapabilitiesResponse> {
    return this.request("DescribeSecurityPolicyCapabilities", req, cb)
  }

  /**
   * 目标组相关接口
   */
  async CreateTargetGroup(
    req: CreateTargetGroupRequest,
    cb?: (error: string, rep: CreateTargetGroupResponse) => void
  ): Promise<CreateTargetGroupResponse> {
    return this.request("CreateTargetGroup", req, cb)
  }

  /**
   * 修改健康检查模板
   */
  async ModifyHealthCheckTemplate(
    req: ModifyHealthCheckTemplateRequest,
    cb?: (error: string, rep: ModifyHealthCheckTemplateResponse) => void
  ): Promise<ModifyHealthCheckTemplateResponse> {
    return this.request("ModifyHealthCheckTemplate", req, cb)
  }

  /**
   * 修改目标组内后端服务信息
   */
  async ModifyTargetsInTargetGroup(
    req: ModifyTargetsInTargetGroupRequest,
    cb?: (error: string, rep: ModifyTargetsInTargetGroupResponse) => void
  ): Promise<ModifyTargetsInTargetGroupResponse> {
    return this.request("ModifyTargetsInTargetGroup", req, cb)
  }

  /**
   * 查询目标组列表
   */
  async DescribeTargetGroups(
    req: DescribeTargetGroupsRequest,
    cb?: (error: string, rep: DescribeTargetGroupsResponse) => void
  ): Promise<DescribeTargetGroupsResponse> {
    return this.request("DescribeTargetGroups", req, cb)
  }

  /**
   * 修改自定义安全策略的属性，包括策略名称、TLS 协议版本和加密套件。修改后的配置将立即应用到所有关联该策略的 HTTPS 监听器。
   */
  async ModifySecurityPolicyAttributes(
    req: ModifySecurityPolicyAttributesRequest,
    cb?: (error: string, rep: ModifySecurityPolicyAttributesResponse) => void
  ): Promise<ModifySecurityPolicyAttributesResponse> {
    return this.request("ModifySecurityPolicyAttributes", req, cb)
  }

  /**
   * 将共享带宽包绑定到应用型负载均衡实例。
   */
  async AssociateBandwidthPackageWithLoadBalancer(
    req: AssociateBandwidthPackageWithLoadBalancerRequest,
    cb?: (error: string, rep: AssociateBandwidthPackageWithLoadBalancerResponse) => void
  ): Promise<AssociateBandwidthPackageWithLoadBalancerResponse> {
    return this.request("AssociateBandwidthPackageWithLoadBalancer", req, cb)
  }

  /**
   * 查询可用区
   */
  async DescribeZones(
    req?: DescribeZonesRequest,
    cb?: (error: string, rep: DescribeZonesResponse) => void
  ): Promise<DescribeZonesResponse> {
    return this.request("DescribeZones", req, cb)
  }

  /**
   * 根据子机查询绑定的目标组
   */
  async DescribeTargetGroupsByTarget(
    req: DescribeTargetGroupsByTargetRequest,
    cb?: (error: string, rep: DescribeTargetGroupsByTargetResponse) => void
  ): Promise<DescribeTargetGroupsByTargetResponse> {
    return this.request("DescribeTargetGroupsByTarget", req, cb)
  }

  /**
   * 查询转发规则
   */
  async DescribeRules(
    req: DescribeRulesRequest,
    cb?: (error: string, rep: DescribeRulesResponse) => void
  ): Promise<DescribeRulesResponse> {
    return this.request("DescribeRules", req, cb)
  }

  /**
   * 删除健康检查模板
   */
  async DeleteHealthCheckTemplates(
    req: DeleteHealthCheckTemplatesRequest,
    cb?: (error: string, rep: DeleteHealthCheckTemplatesResponse) => void
  ): Promise<DeleteHealthCheckTemplatesResponse> {
    return this.request("DeleteHealthCheckTemplates", req, cb)
  }

  /**
   * 创建健康检查模板
   */
  async CreateHealthCheckTemplate(
    req: CreateHealthCheckTemplateRequest,
    cb?: (error: string, rep: CreateHealthCheckTemplateResponse) => void
  ): Promise<CreateHealthCheckTemplateResponse> {
    return this.request("CreateHealthCheckTemplate", req, cb)
  }

  /**
     * 根据实例id和监听器id，查询指定监听器绑定的证书列表
若输入CertificateType为SVR，返回扩展服务器证书与默认服务器证书的信息
若输入CertificateType为CA，返回默认CA证书的信息
     */
  async DescribeListenerCertificates(
    req: DescribeListenerCertificatesRequest,
    cb?: (error: string, rep: DescribeListenerCertificatesResponse) => void
  ): Promise<DescribeListenerCertificatesResponse> {
    return this.request("DescribeListenerCertificates", req, cb)
  }

  /**
   * 查询当前账号的 ALB 配额配置。支持按配额类型查询，也支持传入资源ID查询资源级配额；可通过 DisplayFields 按需返回已使用量和剩余可用量。
   */
  async DescribeQuota(
    req: DescribeQuotaRequest,
    cb?: (error: string, rep: DescribeQuotaResponse) => void
  ): Promise<DescribeQuotaResponse> {
    return this.request("DescribeQuota", req, cb)
  }

  /**
   * DisassociateListenerAdditionalCertificates属于异步接口，即系统返回一个请求 ID，但该扩展证书尚未解绑成功，系统后台的解绑任务仍在进行。您可以调用DescribeListenerCertificates接口查询证书的解绑状态：若证书处于Disassociating状态，则证书正在解绑中。
   */
  async DisassociateListenerAdditionalCertificates(
    req: DisassociateListenerAdditionalCertificatesRequest,
    cb?: (error: string, rep: DisassociateListenerAdditionalCertificatesResponse) => void
  ): Promise<DisassociateListenerAdditionalCertificatesResponse> {
    return this.request("DisassociateListenerAdditionalCertificates", req, cb)
  }

  /**
     * **CreateLoadBalancer**接口属于异步接口，即系统返回一个实例ID，但该应用型负载均衡实例尚未创建成功，系统后台的创建任务仍在进行。您可以调用[DescribeLoadBalancerDetail](https://cloud.tencent.com/document/api/1822/133711)查询应用型负载均衡实例的创建状态：
- 当应用型负载均衡实例处于**Provisioning**状态时，表示应用型负载均衡实例正在创建中。
- 当应用型负载均衡实例处于**Active**状态时，表示应用型负载均衡实例创建成功。
     */
  async CreateLoadBalancer(
    req: CreateLoadBalancerRequest,
    cb?: (error: string, rep: CreateLoadBalancerResponse) => void
  ): Promise<CreateLoadBalancerResponse> {
    return this.request("CreateLoadBalancer", req, cb)
  }

  /**
     * AssociateListenerAdditionalCertificates属于异步接口，即系统返回一个请求 ID，但该扩展证书尚未添加成功，系统后台的添加任务仍在进行。您可以调用DescribeListenerCertificates接口查询扩展证书的添加状态：
当HTTPS和QUIC监听器处于Associating状态时，表示扩展证书正在添加中。
当HTTPS和QUIC监听器处于Associated状态时，表示扩展证书添加成功。
     */
  async AssociateListenerAdditionalCertificates(
    req: AssociateListenerAdditionalCertificatesRequest,
    cb?: (error: string, rep: AssociateListenerAdditionalCertificatesResponse) => void
  ): Promise<AssociateListenerAdditionalCertificatesResponse> {
    return this.request("AssociateListenerAdditionalCertificates", req, cb)
  }

  /**
     * **前提条件：**
您已经创建应用型负载均衡实例，具体操作，请参见 CreateLoadBalancer 。
当您需要通过此接口将应用型负载均衡实例的网络类型由私网变为公网时，您需要先创建一个弹性公网 IP。
**使用说明：**
ModifyLoadBalancerAddressType 接口属于异步接口，即系统返回一个请求 ID，但该应用型负载均衡实例的网络类型尚未变更成功，系统后台的变更任务仍在进行。您可以调用 DescribeLoadBalancerDetail 查询应用型负载均衡实例的网络类型的变更状态：
当应用型负载均衡实例处于 Configuring 状态时，表示应用型负载均衡实例的网络类型正在变更中。
当应用型负载均衡实例处于 Active 状态时，表示应用型负载均衡实例的网络类型变更成功。
     */
  async ModifyLoadBalancerAddressType(
    req: ModifyLoadBalancerAddressTypeRequest,
    cb?: (error: string, rep: ModifyLoadBalancerAddressTypeResponse) => void
  ): Promise<ModifyLoadBalancerAddressTypeResponse> {
    return this.request("ModifyLoadBalancerAddressType", req, cb)
  }
}
