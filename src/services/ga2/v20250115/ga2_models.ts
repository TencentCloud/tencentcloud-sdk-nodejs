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
 * DescribeTaskResult返回参数结构体
 */
export interface DescribeTaskResultResponse {
  /**
   * 任务状态。
   */
  Status?: string
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
 * CreateForwardingPolicy请求参数结构体
 */
export interface CreateForwardingPolicyRequest {
  /**
   * <p>全球加速实例ID。</p>
   */
  GlobalAcceleratorId: string
  /**
   * <p>监听器ID。</p>
   */
  ListenerId: string
  /**
   * <p>域名。</p><p>参数格式：格式，必须满足正则表达式：^(<a href="?:[a-z0-9-]{0,61}[a-z0-9]">a-z0-9</a>?.)+[a-z]{2,}$</p><p>入参限制：长度范围是1-80。</p>
   */
  Host: string
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
   * <p>符合条件的终端节点组。</p>
   */
  EndpointGroupConfigurationSet?: Array<EndpointGroupConfigurationSet>
  /**
   * <p>符合条件的实例个数。</p>
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
   * <p>全球加速实例ID。</p>
   */
  GlobalAcceleratorId: string
  /**
   * <p>名称，最大长度不能超过60个字节。</p>
   */
  Name?: string
  /**
   * <p>描述信息，最大长度不能超过100个字节。</p>
   */
  Description?: string
  /**
   * <p>跨境类型。</p><p>枚举值：</p><ul><li>HighQuality： 精品跨境。</li><li>Unicom： 联通跨境。</li></ul>
   */
  CrossBorderType?: string
  /**
   * <p>代表是否填写跨境服务承诺书。</p><p>当CrossBorderType传入时，此字段必须填ture，代表填写跨境承诺书。</p>
   */
  CrossBorderPromiseFlag?: boolean
}

/**
 * ModifyForwardingPolicy请求参数结构体
 */
export interface ModifyForwardingPolicyRequest {
  /**
   * <p>全球加速实例ID。</p>
   */
  GlobalAcceleratorId: string
  /**
   * <p>监听器ID。</p>
   */
  ListenerId: string
  /**
   * <p>策略ID。</p>
   */
  ForwardingPolicyId: string
  /**
   * <p>域名。</p><p>入参限制：长度范围在1-80。</p><p>格式必须满足正则表达式：^(<a href="?:[a-z0-9-]{0,61}[a-z0-9]">a-z0-9</a>?.)+[a-z]{2,}$</p>
   */
  Host: string
}

/**
 * CreateForwardingRule请求参数结构体
 */
export interface CreateForwardingRuleRequest {
  /**
   * <p>全球加速实例ID。</p>
   */
  GlobalAcceleratorId: string
  /**
   * <p>监听器ID。</p>
   */
  ListenerId: string
  /**
   * <p>策略ID。</p>
   */
  ForwardingPolicyId: string
  /**
   * <p>七层转发规则条件信息。</p><p>数组长度最大不能超过1。</p>
   */
  RuleConditions: Array<RuleCondition>
  /**
   * <p>七层转发规则行为信息。</p><p>数组长度最大不能超过1。</p>
   */
  RuleActions: Array<RuleAction>
  /**
   * <p>回源Header信息。</p><p>数组长度最大不能超过5。当RuleActions.RuleActionType是ForwardGroup时，此字段必传。</p>
   */
  OriginHeaders?: Array<OriginHeader>
  /**
   * <p>是否开启回源sni。</p><p>默认值：False</p><p>当RuleActions.RuleActionType是ForwardGroup时，此字段必传。</p>
   */
  EnableOriginSni?: boolean
  /**
   * <p>回源sni。</p><p>入参限制：长度不能超过80。</p><p>当EnableOriginSni为True时，此字段必传。当RuleActions.RuleActionType是ForwardGroup时，此字段必传。</p>
   */
  OriginSni?: string
  /**
   * <p>回源host。</p><p>入参限制：长度不超过80。</p><p>当RuleActions.RuleActionType是ForwardGroup时，此字段必传。</p>
   */
  OriginHost?: string
  /**
   * <p>源站响应头</p><p>数组长度不超过5。可以传空数组，代表清空配置。</p>
   */
  ResponseHeaders?: Array<ResponseHeaders>
  /**
   * <p>删除源站响应头</p><p>数组长度不超过5。可以传空数组，代表清空配置。</p>
   */
  HideResponseHeaders?: Array<HideResponseHeaders>
}

/**
 * 七层转发策略信息
 */
export interface ForwardingPolicySet {
  /**
   * 全球加速实例ID。
   */
  GlobalAcceleratorId?: string
  /**
   * 监听器ID。
   */
  ListenerId?: string
  /**
   * 策略ID。
   */
  ForwardingPolicyId?: string
  /**
   * 域名。
   */
  Host?: string
  /**
   * 是否为默认域名。
   */
  DefaultHostFlag?: boolean
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
 * DescribeForwardingPolicy返回参数结构体
 */
export interface DescribeForwardingPolicyResponse {
  /**
   * 符合条件的策略信息。
   */
  ForwardingPolicySet?: Array<ForwardingPolicySet>
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
 * ModifyForwardingPolicy返回参数结构体
 */
export interface ModifyForwardingPolicyResponse {
  /**
   * <p>异步任务ID。</p>
   */
  TaskId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeGlobalAccelerators请求参数结构体
 */
export interface DescribeGlobalAcceleratorsRequest {
  /**
   * <p>偏移量，默认为0。</p>
   */
  Offset?: number
  /**
   * <p>返回数量。</p><p>取值范围：[1, 200]</p><p>默认值：20</p>
   */
  Limit?: number
  /**
   * <p>过滤条件。<li>global-accelerator-id - String -（过滤条件）全球加速实例ID。</li> <li>global-accelerator-state - String -（过滤条件）全球加速实例状态。</li></p>
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
 * ModifyListener返回参数结构体
 */
export interface ModifyListenerResponse {
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
  /**
   * <p>仅HTTPS回源协议支持选择[&#39;HTTP/1.1&#39;, &#39;HTTP/2&#39;]</p><p>枚举值：</p><ul><li>HTTP/1.1： 版本HTTP/1.1</li><li>HTTP/2： 版本HTTP/2</li></ul>
   */
  HttpVersion?: string
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
   * <p>域名类型。可选值&#39;Domain&#39;, &#39;PublicIp&#39;。</p>
   */
  EndpointType: string
  /**
   * <p>域名。</p>
   */
  EndpointService: string
  /**
   * <p>权重。</p>
   */
  Weight: number
  /**
   * <p>健康检查状态；HEALTH：健康；UNHEALTH：不健康。</p>
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
   * <p>键。</p><p>参数格式：1、字符串只包含可打印的ASCII字符 2、不能包含这些字符()&lt;&gt;@,;:\&quot;/[ ]?={ }</p><p>入参限制：长度在1-40。</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Key: string
  /**
   * <p>值。</p><p>入参限制：长度不能超过128</p><p>如果字符串包含$，那仅能配置&#39;$remote_addr&#39;, &#39;$remote_port&#39;，否则不支持。</p>
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
   * <p>全球加速实例ID。</p>
   */
  GlobalAcceleratorId: string
  /**
   * <p>监听器ID。</p>
   */
  ListenerId: string
  /**
   * <p>策略ID。</p>
   */
  ForwardingPolicyId: string
  /**
   * <p>七层转发规则ID。</p>
   */
  ForwardingRuleId: string
  /**
   * <p>七层转发规则条件信息。</p><p>入参限制：数组长度不能超过1。</p>
   */
  RuleConditions?: Array<RuleCondition>
  /**
   * <p>七层转发规则行为信息。</p><p>入参限制：数组长度不能超过1。</p>
   */
  RuleActions?: Array<RuleAction>
  /**
   * <p>回源Header信息。</p><p>入参限制：数组长度在1-5。</p>
   */
  OriginHeaders?: Array<OriginHeader>
  /**
   * <p>是否开启回源sni。</p>
   */
  EnableOriginSni?: boolean
  /**
   * <p>回源sni。</p><p>入参限制：长度不能超过80。</p><p>当开启回源sni时，此字段必传。</p>
   */
  OriginSni?: string
  /**
   * <p>回源host。</p><p>入参限制：长度不能超过80。</p><p>当开启回源sni时，此字段必传。</p>
   */
  OriginHost?: string
  /**
   * <p>源站响应头</p><p>入参限制：数组长度不能超过5。</p>
   */
  ResponseHeaders?: Array<ResponseHeaders>
  /**
   * <p>删除源站响应头</p><p>入参限制：数组长度不能超过5。</p>
   */
  HideResponseHeaders?: Array<HideResponseHeaders>
}

/**
 * ModifyListener请求参数结构体
 */
export interface ModifyListenerRequest {
  /**
   * <p>全球加速实例ID。</p>
   */
  GlobalAcceleratorId: string
  /**
   * <p>监听器ID。</p>
   */
  ListenerId: string
  /**
   * <p>名称，最大长度不能超过60个字节。</p>
   */
  Name?: string
  /**
   * <p>描述信息，最大长度不能超过100个字节。</p>
   */
  Description?: string
  /**
   * <p>连接空闲等待时间。</p><p>1、HTTP/HTTPS监听器，支持范围为1-60；2、TCP监听器，支持范围为10-900；3、UDP监听器，支持范围为10-20；</p>
   */
  IdleTimeout?: number
  /**
   * <p>是否开启会话保持。</p><p>枚举值：</p><ul><li>Open： 打开。</li><li>Close： 关闭。</li></ul><p>TCP/UDP监听器支持修改此参数。</p>
   */
  ClientAffinity?: string
  /**
   * <p>会话保持时间。</p><p>取值范围：[60, 3600]</p>
   */
  ClientAffinityTime?: number
  /**
   * <p>请求超时时间。</p><p>取值范围：[1, 180]</p><p>HTTPS监听器才支持此参数修改。</p>
   */
  RequestTimeout?: number
  /**
   * <p>是否打开七层获取源IP方式。</p><p>HTTPS/HTTP监听器才支持此参数修改。</p>
   */
  XForwardedForRealIp?: boolean
  /**
   * <p>解析方式。</p><p>枚举值：</p><ul><li>UNIDIRECTIONAL： 双向。</li><li>MUTUAL： 单向。</li></ul><p>HTTPS/HTTP监听器才支持修改此参数。</p>
   */
  CertificationType?: string
  /**
   * <p>加密算法套件。</p><p>入参限制：支持选择tls_policy_1.0-2&#39;, &#39;tls_policy_1.1-2&#39;, &#39;tls_policy_1.2&#39;, &#39;tls_policy_1.2_strict&#39;, &#39;tls_policy_1.2_strict-1.3&#39;。</p><p>HTTPS监听器才支持此参数修改。</p>
   */
  CipherPolicyId?: string
  /**
   * <p>服务器证书。</p><p>HTTPS监听器才支持此参数修改。</p>
   */
  ServerCertificates?: Array<string>
  /**
   * <p>客户端证书。</p><p>HTTPS监听器才支持此参数修改，并且开启双向认证。</p>
   */
  ClientCaCertificates?: Array<string>
  /**
   * <p>获取源IP方式。</p><p>入参限制：支持选择&#39;ProxyProtocol&#39;, &#39;Close&#39;, &#39;ProxyProtocolV2&#39;, &#39;TOA&#39;。</p><p>TCP监听器才支持此参数修改。</p>
   */
  GetRealIpType?: string
}

/**
 * DescribeTaskResult请求参数结构体
 */
export interface DescribeTaskResultRequest {
  /**
   * 异步任务ID。
   */
  TaskId: string
}

/**
 * DescribeEndpointGroups请求参数结构体
 */
export interface DescribeEndpointGroupsRequest {
  /**
   * <p>全球加速实例ID。</p>
   */
  GlobalAcceleratorId: string
  /**
   * <p>偏移量，默认为0。</p>
   */
  Offset?: number
  /**
   * <p>返回数量，默认为10，最大值为10。</p>
   */
  Limit?: number
  /**
   * <p>过滤条件。  endpoint-group-id- String -（过滤条件）终端节点组实例ID。endpoint-group-type- String -（过滤条件）终端节点组实例类型。</p>
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
 * DeleteForwardingPolicy请求参数结构体
 */
export interface DeleteForwardingPolicyRequest {
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
   * <p>监听类型，默认为智能路由。</p><p>枚举值：</p><ul><li>Standard： 智能路由。</li></ul>
   */
  ListenerType?: string
  /**
   * <p>协议，默认为TCP。支持配置&#39;TCP&#39;, &#39;UDP&#39;, &#39;HTTP&#39;, &#39;HTTPS&#39;。</p>
   */
  Protocol?: string
  /**
   * <p>连接空闲等待时间。</p><p>1、HTTP/HTTPS监听器，默认值为15，支持范围为1-60；<br>2、TCP监听器，默认值为900，支持范围为10-900；<br>3、UDP监听器，默认值为20，支持范围为10-20；</p>
   */
  IdleTimeout?: number
  /**
   * <p>四层获取源IP方式，支持&#39;TOA&#39;, &#39;ProxyProtocol&#39;, &#39;ProxyProtocolV2&#39;。</p><p>需要开启四层获取源IP方式，才填写此参数。</p>
   */
  GetRealIpType?: string
  /**
   * <p>是否开启会话保持。支持配置&#39;Open&#39;, &#39;Close&#39;。</p><p>枚举值：</p><ul><li>Open： 开启。</li><li>Close： 关闭。</li></ul>
   */
  ClientAffinity?: string
  /**
   * <p>请求超时时间。</p><p>取值范围：[1, 180]</p><p>默认值：60</p><p>当HTTPS监听器时才可配置此参数。</p>
   */
  RequestTimeout?: number
  /**
   * <p>是否打开七层获取源IP方式。</p>
   */
  XForwardedForRealIp?: boolean
  /**
   * <p>解析方式。</p><p>枚举值：</p><ul><li>UNIDIRECTIONAL： 双向。</li><li>U： 单向。</li></ul><p>HTTPS监听器，此字段必传。</p>
   */
  CertificationType?: string
  /**
   * <p>加密算法套件。支持配置&#39;tls_policy_1.0-2&#39;, &#39;tls_policy_1.1-2&#39;, &#39;tls_policy_1.2&#39;, &#39;tls_policy_1.2_strict&#39;, &#39;tls_policy_1.2_strict-1.3&#39;。</p>
   */
  CipherPolicyId?: string
  /**
   * <p>服务器证书。</p><p>当是HTTPS监听器时，此字段必传。</p>
   */
  ServerCertificates?: Array<string>
  /**
   * <p>客户端证书。</p><p>当时HTTPS监听器且开启双向认证时，此字段必传。</p>
   */
  ClientCaCertificates?: Array<string>
  /**
   * <p>HTTPS监听器支持选择版本</p><p>枚举值：</p><ul><li>HTTP/1.1： HTTP/1.1</li><li>HTTP/2： HTTP/2</li></ul>
   */
  HttpVersion?: string
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
 * ModifyForwardingRule返回参数结构体
 */
export interface ModifyForwardingRuleResponse {
  /**
   * <p>异步任务ID。</p>
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
   * <p>异步任务ID。</p>
   */
  TaskId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 隐藏Header
 */
export interface HideResponseHeaders {
  /**
   * <p>key</p><p>入参限制：长度不能超过128</p><p>如果字符串包含$，那仅能配置&#39;$remote_addr&#39;, &#39;$remote_port&#39;，否则不支持。</p>
   */
  Key: string
  /**
   * <p>value</p><p>当前传&#39;&#39;值即可。</p>
   */
  Value: string
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
   * <p>七层转发规则行为类型</p><p>枚举值：</p><ul><li>ForwardGroup： 转发策略为转发至终端节点组。</li><li>Drop： 转发策略为丢弃。</li></ul>
注意：此字段可能返回 null，表示取不到有效值。
   */
  RuleActionType: string
  /**
   * <p>七层转发规则行为值</p><p>当RuleActionType是Drop时，此字段不用传；当RuleActionType是ForwardGroup时，此字段必传，需要填写的是自定义终端节点组ID， 不支持配置默认终端节点组。</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  RuleActionValue?: string
}

/**
 * DescribeForwardingPolicy请求参数结构体
 */
export interface DescribeForwardingPolicyRequest {
  /**
   * 全球加速实例ID。
   */
  GlobalAcceleratorId: string
  /**
   * 监听器ID。
   */
  ListenerId: string
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
 * 七层转发规则条件信息
 */
export interface RuleCondition {
  /**
   * <p>七层转发规则条件类型</p><p>枚举值：</p><ul><li>Path： Path</li></ul>
注意：此字段可能返回 null，表示取不到有效值。
   */
  RuleConditionType: string
  /**
   * <p>七层转发规则条件值</p><p>参数格式：格式必须满足正则表达：^[a-zA-Z0-9_.-/]{1,80}$</p><p>数组长度不能超过1。</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  RuleConditionValue: Array<string>
}

/**
 * DescribeAccelerateRegions请求参数结构体
 */
export type DescribeAccelerateRegionsRequest = null

/**
 * 响应Header
 */
export interface ResponseHeaders {
  /**
   * <p>key</p><p>参数格式：1、字符串只包含可打印的ASCII字符 2、不能包含这些字符()&lt;&gt;@,;:\&quot;/[ ]?={ }</p><p>入参限制：长度在1-40。</p>
   */
  Key: string
  /**
   * <p>value</p><p>入参限制：长度不能超过128</p><p>如果字符串包含$，那仅能配置&#39;$remote_addr&#39;, &#39;$remote_port&#39;，否则不支持。</p>
   */
  Value: string
}

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
   * <p>终端节点组名称。</p><p>最大长度不能超过128个字节。必须以字母（a-z, A-Z）或中文字符开头。</p>
   */
  Name: string
  /**
   * <p>终端节点组所在地域。</p>
   */
  EndpointGroupRegion: string
  /**
   * <p>终端节点配置。</p>
   */
  EndpointConfigurations: Array<EndpointConfigurations>
  /**
   * <p>检查协议。支持配置&#39;TCP&#39;, &#39;HTTP&#39;, &#39;PING&#39;, &#39;CUSTOM&#39;。</p><p>枚举值：</p><ul><li>TCP： 当终端节点组所在监听器协议是TCP时，可以选择检查协议为TCP。</li><li>HTTP： 当终端节点组所在监听器协议是HTTP或HTTPS时，可以选择检查协议为HTTP。</li><li>PING： 当终端节点组所在监听器协议是UDP时，可以选择检查协议为PING。</li><li>CUSTOM： 当终端节点组所在监听器协议是UDP或TCP时，可以选择检查协议为CUSTOM。</li></ul><p>当开启健康检查时此字段必传。</p>
   */
  CheckType?: string
  /**
   * <p>描述信息。</p><p>默认值：默认值为空，代表不配置描述信息。</p><p>最大长度不能超过100个字节。</p>
   */
  Description?: string
  /**
   * <p>检查端口。</p><p>入参限制：范围是1-65535。</p><p>当CheckType为CUSTOM时候，此字段必传。</p>
   */
  CheckPort?: string
  /**
   * <p>检查内容。支持配置&#39;TEXT&#39;。</p><p>枚举值：</p><ul><li>TEXT： 文本内容。</li></ul><p>当CheckType为CUSTOM时候，此字段必传。</p>
   */
  ContextType?: string
  /**
   * <p>检查请求。</p><p>入参限制：字节长度要在1-500范围内。</p><p>当CheckType为CUSTOM时候，此字段必传。</p>
   */
  CheckSendContext?: string
  /**
   * <p>检查返回结果。</p><p>入参限制：字节长度要在1-500范围内。</p><p>当CheckType为CUSTOM时候，此字段必传。</p>
   */
  CheckRecvContext?: string
  /**
   * <p>是否开启健康检查。</p><p>默认值：False</p>
   */
  EnableHealthCheck?: boolean
  /**
   * <p>响应超时时间。</p><p>取值范围：[1, 100]</p><p>默认值：2</p><p>开启健康检查时，此字段必传。</p>
   */
  ConnectTimeout?: number
  /**
   * <p>健康检查间隔。</p><p>取值范围：[5, 300]</p><p>默认值：30</p><p>开启健康检查，此字段必传。</p>
   */
  HealthCheckInterval?: number
  /**
   * <p>不健康阀值。</p><p>取值范围：[1, 10]</p><p>默认值：3</p><p>开启健康检查，此字段必传。</p>
   */
  UnhealthyThreshold?: number
  /**
   * <p>健康阈值。</p><p>取值范围：[1, 10]</p><p>默认值：3</p><p>开启健康检查，此字段必传。</p>
   */
  HealthyThreshold?: number
  /**
   * <p>回源协议。支持配置&#39;HTTP&#39;, &#39;HTTPS&#39;。</p><p>枚举值：</p><ul><li>HTTP： HTTP回源；当终端节点组所在监听器协议是HTTP或HTTPS时可以配置HTTP。</li><li>HTTPS： HTTPS回源；当终端节点组所在监听器协议是HTTPS时可以配置HTTPS。</li></ul><p>当终端节点组所在监听器协议为HTTP或HTTPS时候，此字段必传。</p>
   */
  ForwardProtocol?: string
  /**
   * <p>检查域名。</p><p>入参限制：字节长度范围是3-80。</p><p>当CheckType是HTTP时，此字段必传。</p>
   */
  CheckDomain?: string
  /**
   * <p>检查URL。</p><p>参数格式：必须满足正则：^[a-zA-Z0-9_.\-\/]{1,80}$</p><p>当CheckType是HTTP时，此字段必传。</p>
   */
  CheckPath?: string
  /**
   * <p>请求方式。支持配置&#39;GET&#39;, &#39;HEAD&#39;。</p><p>枚举值：</p><ul><li>GET： 请求方式为GET。</li><li>HEAD： 请求方式为HEAD。</li></ul><p>当CheckType是HTTP时，此字段必传。</p>
   */
  CheckMethod?: string
  /**
   * <p>状态检测码。支持配置&#39;http_2xx&#39;, &#39;http_3xx&#39;, &#39;http_4xx&#39;, &#39;http_5xx&#39;。</p><p>枚举值：</p><ul><li>http_2xx： 2开头的http code。</li><li>http_3xx： 3开头的http code。</li><li>http_4xx： 4开头的http code。</li><li>http_5xx： 5开头的http code。</li></ul><p>当CheckType是HTTP时，此字段必传。</p>
   */
  StatusMask?: Array<string>
  /**
   * <p>端口映射。</p><p>入参限制：七层支持1个端口映射，四层支持最多30个端口映射。</p>
   */
  PortOverrides?: Array<PortOverride>
  /**
   * <p>运营商类型。支持配置&#39;CMCC&#39;, &#39;CTCC&#39;, &#39;CUCC&#39;。</p><p>枚举值：</p><ul><li>CMCC： 中国移动</li><li>CUCC： 中国联通</li><li>CTCC： 中国电信</li></ul><p>当终端节点组地域为三网地域时，此字段必传。</p>
   */
  IspType?: string
  /**
   * <p>HPPTS加密算法套件；支持配置&#39;tls_policy_1.0-2&#39;, &#39;tls_policy_1.1-2&#39;, &#39;tls_policy_1.2&#39;, &#39;tls_policy_1.2_strict&#39;, &#39;tls_policy_1.2_strict-1.3&#39;；</p><p>枚举值：</p><ul><li>tls_policy_1.0-2： 加密算法套件。</li><li>tls_policy_1.1-2： 加密算法套件。</li><li>tls_policy_1.2： 加密算法套件。</li><li>tls_policy_1.2_strict： 加密算法套件。</li><li>tls_policy_1.2_strict-1.3： 加密算法套件。</li></ul><p>当回源协议为HTTPS，此字段必传。</p>
   */
  CipherPolicyId?: string
  /**
   * <p>回源协议。支持配置&#39;HTTP/1.1&#39;, &#39;HTTP/2&#39;。</p><p>枚举值：</p><ul><li>HTTP/1.1： 版本HTTP/1.1</li><li>HTTP/2： 版本HTTP/2</li></ul><p>当回源协议为HTTPS时，此字段必传。</p>
   */
  HttpVersion?: string
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
   * <p>名称。</p><p>入参限制：最大长度不能超过128个字节。</p><p>以大小写字母或中文开头。</p>
   */
  Name?: string
  /**
   * <p>描述信息。</p><p>入参限制：最大长度不能超过100个字节。</p>
   */
  Description?: string
  /**
   * <p>是否开启健康检查。</p>
   */
  EnableHealthCheck?: boolean
  /**
   * <p>响应超时时间。</p><p>取值范围：[1, 100]</p><p>当开启健康检查时候，此参数必传。</p>
   */
  ConnectTimeout?: number
  /**
   * <p>健康检查间隔。</p><p>取值范围：[5, 300]</p><p>当开启健康检查时，此参数必传。</p>
   */
  HealthCheckInterval?: number
  /**
   * <p>不健康阀值。</p><p>取值范围：[1, 10]</p><p>当开启健康检查时，此字段必传。</p>
   */
  UnhealthyThreshold?: number
  /**
   * <p>健康阀值。</p><p>取值范围：[1, 10]</p><p>当开启健康检查时，此字段必传。</p>
   */
  HealthyThreshold?: number
  /**
   * <p>检查协议。</p><p>入参限制：支持填写：&#39;TCP&#39;, &#39;HTTP&#39;, &#39;PING&#39;, &#39;CUSTOM&#39;。</p><p>1、当监听器是TCP时，可以选CUSTOM+TCP。<br>2、当监听器是UDP时，可以选PING+CUSTOM。<br>3、当监听器是HTTP或HTTPS时，可以选HTTP。</p>
   */
  CheckType?: string
  /**
   * <p>检查端口。</p><p>取值范围：[1, 65535]</p><p>当CheckType是CUSTOM时，此字段必传。</p>
   */
  CheckPort?: number
  /**
   * <p>检查内容。</p><p>入参限制：仅支持TEXT。</p><p>当CheckType是CUSTOM时，此字段必传。</p>
   */
  ContextType?: string
  /**
   * <p>检查请求。</p><p>入参限制：长度范围在1-500。</p><p>当CheckType是CUSTOM时，此字段必传。</p>
   */
  CheckSendContext?: string
  /**
   * <p>检查返回结果。</p><p>入参限制：长度范围在1-500。</p><p>当CheckType是CUSTOM时，此字段必传。</p>
   */
  CheckRecvContext?: string
  /**
   * <p>检查域名。</p><p>入参限制：长度范围在3-80。</p><p>当CheckType是HTTP时，此字段必传。</p>
   */
  CheckDomain?: string
  /**
   * <p>检查URL。</p><p>入参限制：长度范围在3-80。</p><p>当CheckType是HTTP时，此字段必传。</p>
   */
  CheckPath?: string
  /**
   * <p>请求方式。</p><p>入参限制：支持填写 &#39;GET&#39;, &#39;HEAD&#39;。</p><p>当CheckType是HTTP时，此字段必传。</p>
   */
  CheckMethod?: string
  /**
   * <p>状态检测码。</p><p>入参限制：支持选择&#39;http_2xx&#39;, &#39;http_3xx&#39;, &#39;http_4xx&#39;, &#39;http_5xx&#39;。</p><p>当CheckType是HTTP时，此字段必传。</p>
   */
  StatusMask?: Array<string>
  /**
   * <p>回源协议。</p><p>入参限制：支持选择：&#39;HTTP&#39;, &#39;HTTPS&#39;。</p><p>当监听器协议是HTTP时只能配置HTTP，是HTTPS时能配HTTP或HTTPS。</p>
   */
  ForwardProtocol?: string
  /**
   * <p>端口映射。</p><p>当监听器协议是HTTP或HTTPS支持配置一对。当监听器协议是UDP或TCP支持配置最多30对。</p>
   */
  PortOverrides?: Array<PortOverride>
  /**
   * <p>HPPTS加密算法套件</p><p>入参限制：支持选择&#39;tls_policy_1.0-2&#39;, &#39;tls_policy_1.1-2&#39;, &#39;tls_policy_1.2&#39;, &#39;tls_policy_1.2_strict&#39;, &#39;tls_policy_1.2_strict-1.3&#39;。</p><p>当监听器协议是HTTPS时，才支持修改此参数。</p>
   */
  CipherPolicyId?: string
  /**
   * <p>仅HTTPS回源协议支持选择[&#39;HTTP/1.1&#39;, &#39;HTTP/2&#39;]</p><p>枚举值：</p><ul><li>HTTP/1.1： 版本HTTP/1.1</li><li>HTTP/2： 版本HTTP/2</li></ul>
   */
  HttpVersion?: string
}

/**
 * CreateForwardingPolicy返回参数结构体
 */
export interface CreateForwardingPolicyResponse {
  /**
   * <p>异步任务ID。</p>
   */
  TaskId?: string
  /**
   * <p>七层转发策略ID。</p>
   */
  ForwardingPolicyId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
   * <p>全球加速实例ID。</p>
   */
  GlobalAcceleratorId: string
  /**
   * <p>监听器ID。</p>
   */
  ListenerId: string
  /**
   * <p>终端节点组类型。</p><p>枚举值：</p><ul><li>VIRTUAL： 自定义终端节点组</li><li>DEFAULT： 默认终端节点组</li></ul>
   */
  EndpointGroupType: string
  /**
   * <p>终端节点组配置。</p>
   */
  EndpointGroupConfiguration: EndpointGroupConfiguration
}

/**
 * CreateEndpointGroup返回参数结构体
 */
export interface CreateEndpointGroupResponse {
  /**
   * <p>任务ID。</p>
   */
  TaskId?: string
  /**
   * <p>终端节点组实例ID。</p>
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
 * DeleteForwardingPolicy返回参数结构体
 */
export interface DeleteForwardingPolicyResponse {
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
   * <p>符合条件的全球加速实例。</p>
   */
  GlobalAcceleratorSet?: Array<GlobalAcceleratorSet>
  /**
   * <p>符合条件的实例个数。</p>
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
   * <p>异步任务ID。</p>
   */
  TaskId?: string
  /**
   * <p>七层转发规则ID。</p>
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
