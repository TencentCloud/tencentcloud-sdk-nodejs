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

/**
 * CreateAccelerateAreas返回参数结构体
 */
export interface CreateAccelerateAreasResponse {
  /**
   * 异步任务ID。
   */
  TaskId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeListeners返回参数结构体
 */
export interface DescribeListenersResponse {
  /**
   * 符合条件的监听器实例。
   */
  ListenerSet?: Array<ListenerSet>
  /**
   * 符合条件的实例个数。
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyListener返回参数结构体
 */
export interface ModifyListenerResponse {
  /**
   * 任务ID。
   */
  TaskId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeForwardingRule请求参数结构体
 */
export interface DescribeForwardingRuleRequest {
  /**
   * 全球加速实例ID。
   */
  GlobalAcceleratorId: string
  /**
   * 监听器ID。
   */
  ListenerId: string
  /**
   * 七层转发规则ID。
   */
  ForwardingPolicyId: string
  /**
   * 偏移量，默认为0。
   */
  Offset?: number
  /**
   * 返回数量，默认为20，最大值为100。
   */
  Limit?: number
}

/**
 * DescribeEndpointGroups返回参数结构体
 */
export interface DescribeEndpointGroupsResponse {
  /**
   * 符合条件的终端节点组。
   */
  EndpointGroupConfigurationSet?: Array<EndpointGroupConfigurationSet>
  /**
   * 符合条件的实例个数。
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyGlobalAccelerator请求参数结构体
 */
export interface ModifyGlobalAcceleratorRequest {
  /**
   * 全球加速实例ID。
   */
  GlobalAcceleratorId: string
  /**
   * 名称，最大长度不能超过60个字节。
   */
  Name?: string
  /**
   * 描述信息，最大长度不能超过100个字节。
   */
  Description?: string
  /**
   * 跨境类型。
   */
  CrossBorderType?: string
  /**
   * 代表是否跨境服务承诺。
   */
  CrossBorderPromiseFlag?: boolean
}

/**
 * CreateForwardingRule请求参数结构体
 */
export interface CreateForwardingRuleRequest {
  /**
   * 全球加速实例ID。
   */
  GlobalAcceleratorId: string
  /**
   * 监听器ID。
   */
  ListenerId: string
  /**
   * 策略ID。
   */
  ForwardingPolicyId: string
  /**
   * 七层转发规则条件信息。
   */
  RuleConditions: Array<RuleCondition>
  /**
   * 七层转发规则行为信息。
   */
  RuleActions: Array<RuleAction>
  /**
   * 回源Header信息。
   */
  OriginHeaders?: Array<OriginHeader>
  /**
   * 是否开启回源sni。
   */
  EnableOriginSni?: boolean
  /**
   * 回源sni。
   */
  OriginSni?: string
  /**
   * 回源host。
   */
  OriginHost?: string
}

/**
 * 可加速地域信息
 */
export interface AcceleratorRegionSet {
  /**
   * <p>地域中文名称。</p>
   */
  Name?: string
  /**
   * <p>是否可用；0：不可用，1:可用。</p>
   */
  IsAvailable?: number
  /**
   * <p>地域信息。</p>
   */
  Region?: string
  /**
   * <p>地区名称。</p>
   */
  AreaName?: string
  /**
   * <p>是否中国地域。</p>
   */
  IsChinaMainland?: number
  /**
   * <p>支持IspType类型。</p>
   */
  SupportIspType?: Array<string>
  /**
   * <p>是否腾讯地域。</p>
   */
  IsTencentRegion?: number
}

/**
 * ModifyEndpointGroup返回参数结构体
 */
export interface ModifyEndpointGroupResponse {
  /**
   * <p>任务ID。</p>
   */
  TaskId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateListener返回参数结构体
 */
export interface CreateListenerResponse {
  /**
   * <p>任务ID。</p>
   */
  TaskId?: string
  /**
   * <p>监听器ID。</p>
   */
  ListenerId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateGlobalAccelerator请求参数结构体
 */
export interface CreateGlobalAcceleratorRequest {
  /**
   * <p>名称，最大长度不能超过60个字节。</p>
   */
  Name: string
  /**
   * <p>计费模式，PREPAID：表示预付费，即包年包月，POSTPAID：表示后付费，即按量计费。默认：POSTPAID。当前仅支持后付费。</p>
   */
  InstanceChargeType?: string
  /**
   * <p>描述信息，最大长度不能超过100个字节。</p>
   */
  Description?: string
  /**
   * <p>跨境类型；HighQuality：精品BGP-IP跨境；Unicom：联通专线跨境。</p>
   */
  CrossBorderType?: string
  /**
   * <p>此Flag代表签署跨境服务承诺书。当使用跨境服务时候，此字段必传。True：代表签署。</p>
   */
  CrossBorderPromiseFlag?: boolean
  /**
   * <p>标签信息</p>
   */
  Tags?: Array<Tag>
}

/**
 * DescribeCrossBorderSettlement请求参数结构体
 */
export interface DescribeCrossBorderSettlementRequest {
  /**
   * 全球加速实例ID。
   */
  GlobalAcceleratorId: string
  /**
   * 加速地域。
   */
  AccelerateRegion: string
  /**
   * 终端节点组地域。
   */
  EndpointGroupRegion: string
  /**
   * 账单年月时间。
   */
  SettlementMonth: number
}

/**
 * DescribeGlobalAccelerators请求参数结构体
 */
export interface DescribeGlobalAcceleratorsRequest {
  /**
   * 偏移量，默认为0。
   */
  Offset?: number
  /**
   * 返回数量，默认为20，最大值为100。
   */
  Limit?: number
  /**
   * 过滤条件。<li>global-accelerator-id - String -（过滤条件）全球加速实例ID。</li> <li>global-accelerator-state - String -（过滤条件）全球加速实例状态。</li>
   */
  Filters?: Array<Filter>
}

/**
 * DescribeAccelerateAreas请求参数结构体
 */
export interface DescribeAccelerateAreasRequest {
  /**
   * 全球加速实例ID。
   */
  GlobalAcceleratorId: string
  /**
   * 偏移量。
   */
  Offset?: number
  /**
   * 符合条件实例数量。
   */
  Limit?: number
}

/**
 * ModifyAccelerateAreas请求参数结构体
 */
export interface ModifyAccelerateAreasRequest {
  /**
   * 全球加速实例ID。
   */
  GlobalAcceleratorId: string
  /**
   * 加速地域信息。
   */
  AcceleratorAreas: Array<AcceleratorAreas>
}

/**
 * DescribeCrossBorderSettlement返回参数结构体
 */
export interface DescribeCrossBorderSettlementResponse {
  /**
   * 流量用量，单位是GB；精度为保留小数点6位。
   */
  Traffic?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeForwardingRule返回参数结构体
 */
export interface DescribeForwardingRuleResponse {
  /**
   * 符合条件的规则信息。
   */
  ForwardingRuleSet?: Array<ForwardingRuleSet>
  /**
   * 符合条件的实例个数。
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteAccelerateAreas请求参数结构体
 */
export interface DeleteAccelerateAreasRequest {
  /**
   * 全球加速实例ID。
   */
  GlobalAcceleratorId: string
  /**
   * 加速地域ID。
   */
  AcceleratorAreaIds: Array<string>
}

/**
 * 终端节点组信息
 */
export interface EndpointGroupConfigurationSet {
  /**
   * <p>全球加速实例ID。</p>
   */
  GlobalAcceleratorId?: string
  /**
   * <p>监听器实例ID。</p>
   */
  ListenerId?: string
  /**
   * <p>终端节点组ID。</p>
   */
  EndpointGroupId?: string
  /**
   * <p>名称。</p>
   */
  Name?: string
  /**
   * <p>地域。</p>
   */
  EndpointGroupRegion?: string
  /**
   * <p>描述。</p>
   */
  Description?: string
  /**
   * <p>终端节点信息。</p>
   */
  EndpointConfigurations?: Array<EndpointConfigurations>
  /**
   * <p>是否开启健康检查。</p>
   */
  EnableHealthCheck?: boolean
  /**
   * <p>响应超时时间。</p>
   */
  ConnectTimeout?: number
  /**
   * <p>健康检查间隔。</p>
   */
  HealthCheckInterval?: number
  /**
   * <p>不健康阈值。</p>
   */
  UnhealthyThreshold?: number
  /**
   * <p>健康阈值。</p>
   */
  HealthyThreshold?: number
  /**
   * <p>检查协议。</p>
   */
  CheckType?: string
  /**
   * <p>检查端口。</p>
   */
  CheckPort?: number
  /**
   * <p>检查内容。</p>
   */
  ContextType?: string
  /**
   * <p>检查请求。</p>
   */
  CheckSendContext?: string
  /**
   * <p>检查返回结果。</p>
   */
  CheckRecvContext?: string
  /**
   * <p>检查域名。</p>
   */
  CheckDomain?: string
  /**
   * <p>检查URL。</p>
   */
  CheckPath?: string
  /**
   * <p>请求方式。</p>
   */
  CheckMethod?: string
  /**
   * <p>状态检测码。</p>
   */
  StatusMask?: Array<string>
  /**
   * <p>终端节点组类型。</p>
   */
  EndpointGroupType?: string
  /**
   * <p>回源协议。</p>
   */
  ForwardProtocol?: string
  /**
   * <p>端口映射信息。</p>
   */
  PortOverrides?: Array<PortOverride>
  /**
   * <p>自定义终端节点组是否绑定七层转发规则。</p>
   */
  VirtualExistForwardingRuleFlag?: boolean
  /**
   * <p>出终端节点组公网IP。</p>
   */
  OriginPublicIps?: Array<string>
  /**
   * <p>运营商类型；中国移动(CMCC)，中国联通(CUCC)，中国电信(CTCC)。</p>
   */
  IspType?: string
  /**
   * <p>HPPTS加密算法套件</p>
   */
  CipherPolicyId?: string
}

/**
 * DeleteAccelerateAreas返回参数结构体
 */
export interface DeleteAccelerateAreasResponse {
  /**
   * 异步任务ID。
   */
  TaskId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyAccelerateAreas返回参数结构体
 */
export interface ModifyAccelerateAreasResponse {
  /**
   * 异步任务ID。
   */
  TaskId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteGlobalAccelerator请求参数结构体
 */
export interface DeleteGlobalAcceleratorRequest {
  /**
   * 全球加速实例ID。
   */
  GlobalAcceleratorId: string
}

/**
 * 终端节点配置
 */
export interface EndpointConfigurations {
  /**
   * 域名类型。可选值'Domain', 'PublicIp'。
   */
  EndpointType: string
  /**
   * 域名。
   */
  EndpointService: string
  /**
   * 权重。
   */
  Weight: number
  /**
   * 健康检查状态；HEALTH：健康；UNHEALTH：不健康。
   */
  HealthCheckStatus?: string
}

/**
 * 端口范围
 */
export interface PortRanges {
  /**
   * 起始端口。
注意：此字段可能返回 null，表示取不到有效值。
   */
  FromPort: number
  /**
   * 终点端口。
注意：此字段可能返回 null，表示取不到有效值。
   */
  ToPort: number
}

/**
 * 回源Header信息
 */
export interface OriginHeader {
  /**
   * 键。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Key: string
  /**
   * 值。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Value: string
}

/**
 * DeleteEndpointGroups返回参数结构体
 */
export interface DeleteEndpointGroupsResponse {
  /**
   * 任务ID。
   */
  TaskId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 七层转发规则信息
 */
export interface ForwardingRuleSet {
  /**
   * 七层转发规则条件信息。
   */
  RuleCondition?: Array<RuleCondition>
  /**
   * 七层转发规则行为信息。
   */
  RuleAction?: Array<RuleAction>
  /**
   * 是否开启回源Sni。
   */
  EnableOriginSni?: boolean
  /**
   * 回源Sni。
   */
  OriginSni?: string
  /**
   * 回源Herder信息。
   */
  OriginHeaders?: Array<OriginHeader>
  /**
   * 回源Host。
   */
  OriginHost?: string
  /**
   * 全球加速实例ID。
   */
  GlobalAcceleratorId?: string
  /**
   * 监听器ID。
   */
  ListenerId?: string
  /**
   * 七层转发策略ID。
   */
  ForwardingPolicyId?: string
  /**
   * 七层转发规则ID。
   */
  ForwardingRuleId?: string
}

/**
 * ModifyForwardingRule请求参数结构体
 */
export interface ModifyForwardingRuleRequest {
  /**
   * 全球加速实例ID。
   */
  GlobalAcceleratorId: string
  /**
   * 监听器ID。
   */
  ListenerId: string
  /**
   * 策略ID。
   */
  ForwardingPolicyId: string
  /**
   * 七层转发规则ID。
   */
  ForwardingRuleId: string
  /**
   * 七层转发规则条件信息。
   */
  RuleConditions?: Array<RuleCondition>
  /**
   * 七层转发规则行为信息。
   */
  RuleActions?: Array<RuleAction>
  /**
   * 回源Header信息。
   */
  OriginHeaders?: Array<OriginHeader>
  /**
   * 是否开启回源sni。
   */
  EnableOriginSni?: boolean
  /**
   * 回源sni。
   */
  OriginSni?: string
  /**
   * 回源host。
   */
  OriginHost?: string
}

/**
 * ModifyListener请求参数结构体
 */
export interface ModifyListenerRequest {
  /**
   * 全球加速实例ID。
   */
  GlobalAcceleratorId: string
  /**
   * 监听器ID。
   */
  ListenerId: string
  /**
   * 名称，最大长度不能超过60个字节。
   */
  Name?: string
  /**
   * 描述信息，最大长度不能超过100个字节。
   */
  Description?: string
  /**
   * 连接空闲等待时间。
   */
  IdleTimeout?: number
  /**
   * 是否开启会话保持。
   */
  ClientAffinity?: string
  /**
   * 会话保持时间。
   */
  ClientAffinityTime?: number
  /**
   * 请求超时时间。
   */
  RequestTimeout?: number
  /**
   * 是否打开七层获取源IP方式。
   */
  XForwardedForRealIp?: boolean
  /**
   * 解析方式。UNIDIRECTIONAL：双向。MUTUAL：单向。
   */
  CertificationType?: string
  /**
   * 加密算法套件。
   */
  CipherPolicyId?: string
  /**
   * 服务器证书。
   */
  ServerCertificates?: Array<string>
  /**
   * 客户端证书。
   */
  ClientCaCertificates?: Array<string>
  /**
   * 四层获取源IP方式。
   */
  GetRealIpType?: string
}

/**
 * 标签键值对
 */
export interface Tag {
  /**
   * 标签键
   */
  Key: string
  /**
   * 标签值
   */
  Value: string
}

/**
 * DescribeEndpointGroups请求参数结构体
 */
export interface DescribeEndpointGroupsRequest {
  /**
   * 全球加速实例ID。
   */
  GlobalAcceleratorId: string
  /**
   * 偏移量，默认为0。
   */
  Offset?: number
  /**
   * 返回数量，默认为20，最大值为100。
   */
  Limit?: number
  /**
   * 过滤条件。  endpoint-group-id- String -（过滤条件）终端节点组实例ID。endpoint-group-type- String -（过滤条件）终端节点组实例类型。
   */
  Filters?: Array<Filter>
}

/**
 * CreateAccelerateAreas请求参数结构体
 */
export interface CreateAccelerateAreasRequest {
  /**
   * 全球加速实例ID。
   */
  GlobalAcceleratorId: string
  /**
   * 加速地域信息。
   */
  AcceleratorAreas: Array<AcceleratorAreas>
}

/**
 * CreateListener请求参数结构体
 */
export interface CreateListenerRequest {
  /**
   * <p>全球加速实例ID。</p>
   */
  GlobalAcceleratorId: string
  /**
   * <p>名称，最大长度不能超过60个字节。</p>
   */
  Name: string
  /**
   * <p>端口范围。</p>
   */
  PortRanges: PortRanges
  /**
   * <p>描述信息，最大长度不能超过100个字节。</p>
   */
  Description?: string
  /**
   * <p>监听类型，默认为智能路由。</p>
   */
  ListenerType?: string
  /**
   * <p>协议，默认为TCP。</p>
   */
  Protocol?: string
  /**
   * <p>连接空闲等待时间。</p>
   */
  IdleTimeout?: number
  /**
   * <p>四层获取源IP方式，支持&#39;TOA&#39;, &#39;ProxyProtocol&#39;。</p>
   */
  GetRealIpType?: string
  /**
   * <p>是否开启会话保持。</p>
   */
  ClientAffinity?: string
  /**
   * <p>请求超时时间。</p>
   */
  RequestTimeout?: number
  /**
   * <p>是否打开七层获取源IP方式。</p>
   */
  XForwardedForRealIp?: boolean
  /**
   * <p>解析方式。UNIDIRECTIONAL：双向。MUTUAL：单向。</p>
   */
  CertificationType?: string
  /**
   * <p>加密算法套件。</p>
   */
  CipherPolicyId?: string
  /**
   * <p>服务器证书。</p>
   */
  ServerCertificates?: Array<string>
  /**
   * <p>客户端证书。</p>
   */
  ClientCaCertificates?: Array<string>
}

/**
 * 加速地域公网IP信息
 */
export interface IpAddressInfoSet {
  /**
   * IP地址。
   */
  IpAddress?: string
  /**
   * IP类型。
   */
  IspType?: string
}

/**
 * ModifyForwardingRule返回参数结构体
 */
export interface ModifyForwardingRuleResponse {
  /**
   * 异步任务ID。
   */
  TaskId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteForwardingRule请求参数结构体
 */
export interface DeleteForwardingRuleRequest {
  /**
   * 全球加速实例ID。
   */
  GlobalAcceleratorId: string
  /**
   * 监听器ID。
   */
  ListenerId: string
  /**
   * 策略ID。
   */
  ForwardingPolicyId: string
  /**
   * 七层转发规则ID。
   */
  ForwardingRuleId: string
}

/**
 * 监听器信息
 */
export interface ListenerSet {
  /**
   * 全球加速实例ID。
   */
  GlobalAcceleratorId?: string
  /**
   * 监听器ID。
   */
  ListenerId?: string
  /**
   * 监听器名称。
   */
  Name?: string
  /**
   * 监听器描述。
   */
  Description?: string
  /**
   * 协议。
   */
  Protocol?: string
  /**
   * 端口范围。
   */
  PortRanges?: PortRanges
  /**
   * 是否打开七层获取源IP方式。
   */
  XForwardedForRealIp?: boolean
  /**
   * 开启会话保持。
   */
  ClientAffinity?: string
  /**
   * 会话保持时间。
   */
  ClientAffinityTime?: number
  /**
   * SSL解析方式。
   */
  CertificationType?: string
  /**
   * 服务器证书。
   */
  ServerCertificates?: Array<string>
  /**
   * 客户端证书。
   */
  ClientCaCertificates?: Array<string>
  /**
   * TLS密码套件包。
   */
  CipherPolicyId?: string
  /**
   * HTTP版本。
   */
  HttpVersion?: string
  /**
   * 请求超时时间。
   */
  RequestTimeout?: number
  /**
   * 创建时间。
   */
  CreateTime?: string
  /**
   * 监听路由类型。
   */
  ListenerType?: string
  /**
   * 监听器状态。
   */
  Status?: string
  /**
   * 所属监听器终端节点组个数。
   */
  EndpointGroupCounts?: number
  /**
   * 四层获取源IP方式。
   */
  GetRealIpType?: string
  /**
   * 连接超时时间。
   */
  IdleTimeout?: number
}

/**
 * DescribeAccelerateAreas返回参数结构体
 */
export interface DescribeAccelerateAreasResponse {
  /**
   * 加速地域信息。
   */
  AccelerateAreaSet?: Array<AcceleratorAreas>
  /**
   * 实例个数。
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteListener请求参数结构体
 */
export interface DeleteListenerRequest {
  /**
   * 全球加速实例ID。
   */
  GlobalAcceleratorId: string
  /**
   * 监听器ID。
   */
  ListenerId: string
}

/**
 * ModifyGlobalAccelerator返回参数结构体
 */
export interface ModifyGlobalAcceleratorResponse {
  /**
   * 异步任务ID。
   */
  TaskId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeListeners请求参数结构体
 */
export interface DescribeListenersRequest {
  /**
   * 全球加速实例ID。
   */
  GlobalAcceleratorId: string
  /**
   * 偏移量，默认为0。
   */
  Offset?: number
  /**
   * 返回数量，默认为20，最大值为100。
   */
  Limit?: number
  /**
   * 过滤条件。  listener-id- String -（过滤条件）监听器实例ID。
   */
  Filters?: Array<Filter>
}

/**
 * 七层转发规则行为信息
 */
export interface RuleAction {
  /**
   * 七层转发规则行为类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  RuleActionType: string
  /**
   * 七层转发规则行为值
注意：此字段可能返回 null，表示取不到有效值。
   */
  RuleActionValue?: string
}

/**
 * 七层转发规则条件信息
 */
export interface RuleCondition {
  /**
   * 七层转发规则条件类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  RuleConditionType: string
  /**
   * 七层转发规则条件值
注意：此字段可能返回 null，表示取不到有效值。
   */
  RuleConditionValue: Array<string>
}

/**
 * DescribeAccelerateRegions请求参数结构体
 */
export type DescribeAccelerateRegionsRequest = null

/**
 * DeleteForwardingRule返回参数结构体
 */
export interface DeleteForwardingRuleResponse {
  /**
   * 异步任务ID。
   */
  TaskId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 过滤器
 */
export interface Filter {
  /**
   * 属性名称, 若存在多个Filter时，Filter间的关系为逻辑与（AND）关系。
   */
  Name: string
  /**
   * 属性值, 若同一个Filter存在多个Values，同一Filter下Values间的关系为逻辑或（OR）关系。当值类型为布尔类型时，可直接取值为字符串"TRUE"或 "FALSE"。
   */
  Values: Array<string>
}

/**
 * DeleteEndpointGroups请求参数结构体
 */
export interface DeleteEndpointGroupsRequest {
  /**
   * 全球加速实例ID。
   */
  GlobalAcceleratorId: string
  /**
   * 监听器ID。
   */
  ListenerId: string
  /**
   * 终端节点组ID。
   */
  EndpointGroupIds: Array<string>
}

/**
 * 终端节点组配置
 */
export interface EndpointGroupConfiguration {
  /**
   * <p>名称，最大长度不能超过60个字节。</p>
   */
  Name: string
  /**
   * <p>地域。</p>
   */
  EndpointGroupRegion: string
  /**
   * <p>终端节点配置。</p>
   */
  EndpointConfigurations: Array<EndpointConfigurations>
  /**
   * <p>检查协议。支持&#39;TCP&#39;, &#39;HTTP&#39;, &#39;HTTPS&#39;, &#39;PING&#39;, &#39;CUSTOM&#39;。</p>
   */
  CheckType?: string
  /**
   * <p>描述信息，最大长度不能超过100个字节。</p>
   */
  Description?: string
  /**
   * <p>检查端口。</p>
   */
  CheckPort?: string
  /**
   * <p>检查内容。</p>
   */
  ContextType?: string
  /**
   * <p>检查请求。</p>
   */
  CheckSendContext?: string
  /**
   * <p>检查返回结果。</p>
   */
  CheckRecvContext?: string
  /**
   * <p>是否开启健康检查。</p>
   */
  EnableHealthCheck?: boolean
  /**
   * <p>响应超时时间。</p>
   */
  ConnectTimeout?: number
  /**
   * <p>健康检查间隔。</p>
   */
  HealthCheckInterval?: number
  /**
   * <p>不健康阀值。</p>
   */
  UnhealthyThreshold?: number
  /**
   * <p>健康阈值。</p>
   */
  HealthyThreshold?: number
  /**
   * <p>回源协议。</p>
   */
  ForwardProtocol?: string
  /**
   * <p>检查域名。</p>
   */
  CheckDomain?: string
  /**
   * <p>检查URL。</p>
   */
  CheckPath?: string
  /**
   * <p>请求方式。</p>
   */
  CheckMethod?: string
  /**
   * <p>状态检测码。</p>
   */
  StatusMask?: Array<string>
  /**
   * <p>端口映射。</p>
   */
  PortOverrides?: Array<PortOverride>
  /**
   * <p>运用商类型。</p>
   */
  IspType?: string
  /**
   * <p>HPPTS加密算法套件</p>
   */
  CipherPolicyId?: string
}

/**
 * 全球加速实例信息
 */
export interface GlobalAcceleratorSet {
  /**
   * <p>全球加速实例ID。</p>
   */
  GlobalAcceleratorId?: string
  /**
   * <p>全球加速实例名称。</p>
   */
  Name?: string
  /**
   * <p>全球加速实例描述。</p>
   */
  Description?: string
  /**
   * <p>全球加速实例创建时间。</p>
   */
  CreateTime?: string
  /**
   * <p>全球加速实例状态。</p>
   */
  State?: string
  /**
   * <p>全球加速实例付费类型。</p>
   */
  InstanceChargeType?: string
  /**
   * <p>全球加速实例DdosId。</p>
   */
  DdosId?: string
  /**
   * <p>所属加速实例监听器个数。</p>
   */
  ListenerCounts?: number
  /**
   * <p>所属加速实例加速地域个数。</p>
   */
  AcceleratorAreaCounts?: number
  /**
   * <p>全球加速实例状态。</p>
   */
  Status?: string
  /**
   * <p>域名。</p>
   */
  Cname?: string
  /**
   * <p>跨境类型；HighQuality（精品跨境）、Unicom（联通跨境）、NotAvailable（未开通）。</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  CrossBorderType?: string
  /**
   * <p>标签信息。</p>
   */
  TagSet?: Array<Tag>
}

/**
 * DeleteListener返回参数结构体
 */
export interface DeleteListenerResponse {
  /**
   * 任务ID。
   */
  TaskId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyEndpointGroup请求参数结构体
 */
export interface ModifyEndpointGroupRequest {
  /**
   * <p>全球加速实例ID。</p>
   */
  GlobalAcceleratorId: string
  /**
   * <p>监听器ID。</p>
   */
  ListenerId: string
  /**
   * <p>终端节点组ID。</p>
   */
  EndpointGroupId: string
  /**
   * <p>终端节点配置。</p>
   */
  EndpointConfigurations?: Array<EndpointConfigurations>
  /**
   * <p>名称，最大长度不能超过60个字节。</p>
   */
  Name?: string
  /**
   * <p>描述信息，最大长度不能超过100个字节。</p>
   */
  Description?: string
  /**
   * <p>是否开启健康检查。</p>
   */
  EnableHealthCheck?: boolean
  /**
   * <p>响应超时时间。</p>
   */
  ConnectTimeout?: number
  /**
   * <p>健康检查间隔。</p>
   */
  HealthCheckInterval?: number
  /**
   * <p>不健康阀值。</p>
   */
  UnhealthyThreshold?: number
  /**
   * <p>健康阀值。</p>
   */
  HealthyThreshold?: number
  /**
   * <p>检查协议。</p>
   */
  CheckType?: string
  /**
   * <p>检查端口。</p>
   */
  CheckPort?: number
  /**
   * <p>检查内容。</p>
   */
  ContextType?: string
  /**
   * <p>检查请求。</p>
   */
  CheckSendContext?: string
  /**
   * <p>检查返回结果。</p>
   */
  CheckRecvContext?: string
  /**
   * <p>检查域名。</p>
   */
  CheckDomain?: string
  /**
   * <p>检查URL。</p>
   */
  CheckPath?: string
  /**
   * <p>请求方式。</p>
   */
  CheckMethod?: string
  /**
   * <p>状态检测码。</p>
   */
  StatusMask?: Array<string>
  /**
   * <p>回源协议。</p>
   */
  ForwardProtocol?: string
  /**
   * <p>端口映射。</p>
   */
  PortOverrides?: Array<PortOverride>
  /**
   * <p>HPPTS加密算法套件</p>
   */
  CipherPolicyId?: string
}

/**
 * 加速地域信息
 */
export interface AcceleratorAreas {
  /**
   * 加速地域。
   */
  AccelerateRegion: string
  /**
   * 带宽。
   */
  Bandwidth: number
  /**
   * 支持'BGP', '三网', '精品'，默认BGP。
   */
  IspType?: string
  /**
   * 仅支持IPv4，默认是IPv4。
   */
  IpVersion?: string
  /**
   * 加速地域ID。
   */
  AcceleratorAreaId?: string
  /**
   * IP。
   */
  IpAddress?: Array<string>
  /**
   * IP信息。
注意：此字段可能返回 null，表示取不到有效值。
   */
  IpAddressInfoSet?: Array<IpAddressInfoSet>
}

/**
 * CreateEndpointGroup请求参数结构体
 */
export interface CreateEndpointGroupRequest {
  /**
   * 全球加速实例ID。
   */
  GlobalAcceleratorId: string
  /**
   * 监听器ID。
   */
  ListenerId: string
  /**
   * 终端节点组类型。支持VIRTUAL，DEFAULT。
   */
  EndpointGroupType: string
  /**
   * 终端节点组配置。
   */
  EndpointGroupConfiguration: EndpointGroupConfiguration
}

/**
 * CreateEndpointGroup返回参数结构体
 */
export interface CreateEndpointGroupResponse {
  /**
   * 任务ID。
   */
  TaskId?: string
  /**
   * 终端节点组实例ID。
   */
  EndpointGroupId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteGlobalAccelerator返回参数结构体
 */
export interface DeleteGlobalAcceleratorResponse {
  /**
   * 任务ID。
   */
  TaskId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeAccelerateRegions返回参数结构体
 */
export interface DescribeAccelerateRegionsResponse {
  /**
   * 加速地域信息。
   */
  AcceleratorRegionSet?: Array<AcceleratorRegionSet>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateGlobalAccelerator返回参数结构体
 */
export interface CreateGlobalAcceleratorResponse {
  /**
   * <p>任务ID。</p>
   */
  TaskId?: string
  /**
   * <p>全球加速实例ID。</p>
   */
  GlobalAcceleratorId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeGlobalAccelerators返回参数结构体
 */
export interface DescribeGlobalAcceleratorsResponse {
  /**
   * 符合条件的全球加速实例。
   */
  GlobalAcceleratorSet?: Array<GlobalAcceleratorSet>
  /**
   * 符合条件的实例个数。
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateForwardingRule返回参数结构体
 */
export interface CreateForwardingRuleResponse {
  /**
   * 异步任务ID。
   */
  TaskId?: string
  /**
   * 七层转发规则ID。
   */
  ForwardingRuleId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 端口映射
 */
export interface PortOverride {
  /**
   * 监听端口。
注意：此字段可能返回 null，表示取不到有效值。
   */
  ListenerPort: number
  /**
   * 映射端口。
注意：此字段可能返回 null，表示取不到有效值。
   */
  EndpointPort: number
}
