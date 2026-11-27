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
  DeleteProtectionRequest,
  ModifyProtectionResourceRequest,
  AbnormalConnectionLimit,
  AbnormalConnectCondition,
  ProtectionFilter,
  SpeedLimitRules,
  ModifyProtectionResponse,
  ResourceProtection,
  ModifyDDoSProtectionPolicyRequest,
  DeleteProtectionResponse,
  DescribeDDoSProtectionPolicyRequest,
  PacketFilterRule,
  ProtocolBlockingConfig,
  PacketFilterCondition,
  ProtectionInfo,
  TagInfo,
  DescribeProtectionResourcesRequest,
  SizeRange,
  DescribeProtectionsResponse,
  DDoSUnblockQuota,
  CreateProtectionResponse,
  DescribeDDoSProtectionPolicyResponse,
  DefaultProtectionConfig,
  ResourceInfo,
  ProtectionPolicy,
  DescribeProtectionResourcesResponse,
  DescribeDDoSBlockRecordsResponse,
  GeoBlockingConfig,
  PortACLRule,
  PacketMatchContent,
  PortRange,
  CreateProtectionRequest,
  DescribeProtectionsRequest,
  Filter,
  UnblockResourcesResponse,
  ModifyProtectionResourceResponse,
  PortACLRules,
  DescribeDDoSBlockRecordsRequest,
  ConnectionProtectionConfig,
  TrafficSignatureConfig,
  IPACLRules,
  IPACLRule,
  PacketFilterRules,
  ModifyDDoSProtectionPolicyResponse,
  DDoSBlockRecord,
  ModifyProtectionRequest,
  DescribeResourceProtectionsRequest,
  UnblockResourcesRequest,
  SpeedLimitRule,
  DescribeResourceProtectionsResponse,
} from "./antiddos_models"

/**
 * antiddos client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("antiddos.tencentcloudapi.com", "2025-09-03", clientConfig)
  }

  /**
   * 查询封堵解封记录和解封配额信息。
   */
  async DescribeDDoSBlockRecords(
    req: DescribeDDoSBlockRecordsRequest,
    cb?: (error: string, rep: DescribeDDoSBlockRecordsResponse) => void
  ): Promise<DescribeDDoSBlockRecordsResponse> {
    return this.request("DescribeDDoSBlockRecords", req, cb)
  }

  /**
     * <p>删除防护实例。</p>
<p>删除后，该实例及其绑定的防护策略将不再生效。请确保实例中没有正在使用的防护资源，或已提前将防护资源换绑至其他实例。</p>
     */
  async DeleteProtection(
    req: DeleteProtectionRequest,
    cb?: (error: string, rep: DeleteProtectionResponse) => void
  ): Promise<DeleteProtectionResponse> {
    return this.request("DeleteProtection", req, cb)
  }

  /**
   * <p>按资源六段式查询云资源当前绑定的 DDoS 高防服务防护实例。</p>
   */
  async DescribeResourceProtections(
    req: DescribeResourceProtectionsRequest,
    cb?: (error: string, rep: DescribeResourceProtectionsResponse) => void
  ): Promise<DescribeResourceProtectionsResponse> {
    return this.request("DescribeResourceProtections", req, cb)
  }

  /**
   * <p>按过滤条件查询当前账号下有权限访问的 DDoS 高防服务防护实例，支持分页返回。</p>
   */
  async DescribeProtections(
    req: DescribeProtectionsRequest,
    cb?: (error: string, rep: DescribeProtectionsResponse) => void
  ): Promise<DescribeProtectionsResponse> {
    return this.request("DescribeProtections", req, cb)
  }

  /**
   * 申请解封资源，可通过 DescribeDDoSBlockRecords 接口获取资源的封堵解封状态。
   */
  async UnblockResources(
    req: UnblockResourcesRequest,
    cb?: (error: string, rep: UnblockResourcesResponse) => void
  ): Promise<UnblockResourcesResponse> {
    return this.request("UnblockResources", req, cb)
  }

  /**
     * <p>创建 DDoS 高防服务防护实例。</p>
<p>防护实例是高防服务下承载防护策略与防护资源的基本单元。创建后，您可以在实例中配置防护策略，并绑定需要防护的云资源。</p>
<p><strong>前提条件：</strong>当前腾讯云主账号已订阅 DDoS 高防套餐，具体操作请参见 <a href="https://cloud.tencent.com/document/product/297/137989">购买指引</a>。</p>
     */
  async CreateProtection(
    req: CreateProtectionRequest,
    cb?: (error: string, rep: CreateProtectionResponse) => void
  ): Promise<CreateProtectionResponse> {
    return this.request("CreateProtection", req, cb)
  }

  /**
   * <p>按防护实例 ID 查询该实例下的 L3/4 DDoS 防护策略详情。</p>
   */
  async DescribeDDoSProtectionPolicy(
    req: DescribeDDoSProtectionPolicyRequest,
    cb?: (error: string, rep: DescribeDDoSProtectionPolicyResponse) => void
  ): Promise<DescribeDDoSProtectionPolicyResponse> {
    return this.request("DescribeDDoSProtectionPolicy", req, cb)
  }

  /**
     * <p>修改防护实例的防护资源。</p>
<p>向防护实例中添加、替换或移除防护对象（即绑定到该实例进行防护的云资源）。</p>
     */
  async ModifyProtectionResource(
    req: ModifyProtectionResourceRequest,
    cb?: (error: string, rep: ModifyProtectionResourceResponse) => void
  ): Promise<ModifyProtectionResourceResponse> {
    return this.request("ModifyProtectionResource", req, cb)
  }

  /**
   * 修改防护实例。支持修改防护实例的名称。
   */
  async ModifyProtection(
    req: ModifyProtectionRequest,
    cb?: (error: string, rep: ModifyProtectionResponse) => void
  ): Promise<ModifyProtectionResponse> {
    return this.request("ModifyProtection", req, cb)
  }

  /**
   * <p>按防护实例 ID 查询该实例下绑定的防护资源，支持分页与按资源类型过滤。</p>
   */
  async DescribeProtectionResources(
    req: DescribeProtectionResourcesRequest,
    cb?: (error: string, rep: DescribeProtectionResourcesResponse) => void
  ): Promise<DescribeProtectionResourcesResponse> {
    return this.request("DescribeProtectionResources", req, cb)
  }

  /**
   * <p>按防护实例 ID 修改该实例下的 L3/4 DDoS 防护策略。</p>
   */
  async ModifyDDoSProtectionPolicy(
    req: ModifyDDoSProtectionPolicyRequest,
    cb?: (error: string, rep: ModifyDDoSProtectionPolicyResponse) => void
  ): Promise<ModifyDDoSProtectionPolicyResponse> {
    return this.request("ModifyDDoSProtectionPolicy", req, cb)
  }
}
