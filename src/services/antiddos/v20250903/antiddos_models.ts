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
 * DeleteProtection请求参数结构体
 */
export interface DeleteProtectionRequest {
  /**
   * <p>防护实例 ID。</p>
   */
  ProtectionId: string
}

/**
 * ModifyProtectionResource请求参数结构体
 */
export interface ModifyProtectionResourceRequest {
  /**
   * <p>防护实例 ID。</p>
   */
  ProtectionId: string
  /**
   * <p>操作类型。</p><p>枚举值：</p><ul><li>APPEND： 向防护实例中添加新的防护资源；</li><li>UPDATE： 替换防护实例中的全部防护资源；</li><li>REMOVE： 从防护实例中移除指定的防护资源。</li></ul><p>默认值：APPEND</p>
   */
  Mode: string
  /**
   * <p>防护资源，须采用资源六段式格式。具体格式如下：<ul><li>云服务器：<code>qcs::cvm:${region}:uin/${uin}:instance/${InstanceId}</code></li><li>轻量应用服务器：<code>qcs::lighthouse:${region}:uin/${uin}:instance/${InstanceId}</code></li><li>负载均衡：<code>qcs::clb:${region}:uin/${uin}:clb/${LoadBalancerId}</code></li><li>弹性公网 IP：<code>qcs::cvm:${region}:uin/${uin}:eip/${AddressId}</code></li><li>Web 应用防火墙：<code>qcs::waf:${region}:uin/${uin}:waf/${InstanceId}</code></li><li>EdgeOne 域名：<code>qcs::teo::uin/${uin}:zone/${ZoneId}/Domain/${Domain}</code></li><li>EdgeOne 四层代理：<code>qcs::teo::uin/${uin}:zone/${ZoneId}/L4Proxy/${InstanceId}</code></li></ul></p><p>取值参考：<a href="https://cloud.tencent.com/document/product/598/67350">支持 CAM 的业务接口</a></p>
   */
  Resources?: Array<string>
  /**
   * <p>冲突策略。</p><p>枚举值：</p><ul><li>REJECT： 若任一防护资源已存在于其他防护实例，则拒绝本次操作。</li><li>FORCE： 若任一防护资源已存在于其他防护实例，则强制将其添加至当前实例。</li></ul><p>默认值：REJECT</p>
   */
  ConflictStrategy?: string
}

/**
 * 异常连接防护配置。
 */
export interface AbnormalConnectionLimit {
  /**
   * <p>异常连接数限制，限制同一时间单个源 IP 异常连接数量， 0为不启用, 范围: 0-4294967295。</p><p>取值范围：[0, 4294967295]</p>
   */
  AbnormalConnectThreshold: number
  /**
   * <p>异常连接判定条件。满足任意条件则计为一次异常统计。</p>
   */
  AbnormalConnectCondition: AbnormalConnectCondition
}

/**
 * 连接异常条件。
 */
export interface AbnormalConnectCondition {
  /**
   * <p>SYN占比阈值（百分比）， 0为不检查。 同一连接中，SYN 包占比超过配置占比时，将被视为异常连接处置。</p><p>取值范围：[0, 100]</p>
   */
  SynRatioThreshold: number
  /**
   * <p>SYN占比阈值（百分比）， 0为不检查。 同一连接中，SYN 包占比超过配置占比时，将被视为异常连接处置。</p><p>取值范围：[0, 65535]</p>
   */
  SynCountThreshold: number
  /**
   * <p>连接超时（秒），0为不检查。 连接超过配置时间内未收到数据时，将被视为异常连接处置。</p><p>取值范围：[0, 65535]</p>
   */
  ConnectTimeout: number
  /**
   * <p>是否开启空连接防护。 同一客户端对应了较大数量的空连接时，将被视为异常连接处置。</p><p>枚举值：</p><ul><li>on： 开启</li><li>off： 关闭</li></ul>
   */
  EmptyConnection: string
}

/**
 * 用于按指定字段过滤查询结果，例如按防护实例 ID、名称、状态等过滤。多个 Filter 之间为逻辑与（AND）关系；同一 Filter 的多个 Values 之间为逻辑或（OR）关系。
 */
export interface ProtectionFilter {
  /**
   * <p>需要过滤的字段名。</p>
   */
  Name: string
  /**
   * <p>对应字段的过滤值。</p>
   */
  Values: Array<string>
  /**
   * <p>是否启用模糊查询。</p>
   */
  Fuzzy?: boolean
}

/**
 * 端口限速规则列表。
 */
export interface SpeedLimitRules {
  /**
   * <p>端口限速规则列表。</p>
   */
  Rules: Array<SpeedLimitRule>
}

/**
 * ModifyProtection返回参数结构体
 */
export interface ModifyProtectionResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 防护资源及其绑定的防护实例。
 */
export interface ResourceProtection {
  /**
   * <p>防护资源的资源六段式标识。</p>
   */
  Resource?: string
  /**
   * <p>该资源绑定的防护实例 ID。</p>
   */
  ProtectionId?: string
}

/**
 * ModifyDDoSProtectionPolicy请求参数结构体
 */
export interface ModifyDDoSProtectionPolicyRequest {
  /**
   * <p>防护实例 ID。</p>
   */
  ProtectionId: string
  /**
   * <p>防护策略。</p><p>支持部分修改：对于 <code>ProtectionPolicy</code> 下的各子策略，入参未传入的子策略保持原值不变。</p>
   */
  ProtectionPolicy: ProtectionPolicy
}

/**
 * DeleteProtection返回参数结构体
 */
export interface DeleteProtectionResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDDoSProtectionPolicy请求参数结构体
 */
export interface DescribeDDoSProtectionPolicyRequest {
  /**
   * <p>防护实例 ID。</p>
   */
  ProtectionId: string
}

/**
 * 特征过滤规则。
 */
export interface PacketFilterRule {
  /**
   * <p>匹配后执行的动作。</p><p>枚举值：</p><ul><li>drop： 丢弃。</li><li>allow： 放行。</li><li>drop_and_block： 丢弃并拉黑。</li><li>forward： 继续防护，即继续执行下一个防护子策略，而非特征过滤内的其他规则。</li></ul>
   */
  Action: string
  /**
   * <p>协议类型。</p><p>枚举值：</p><ul><li>tcp： TCP 协议。</li><li>udp： UDP 协议。</li><li>all： 所有协议。</li></ul>
   */
  Protocol: string
  /**
   * <p>报文长度范围。</p>
   */
  PacketSizeRange: SizeRange
  /**
   * <p>源端口范围。</p>
   */
  SourcePortRange: PortRange
  /**
   * <p>目的端口范围。</p>
   */
  DestinationPortRange: PortRange
  /**
   * <p>报文匹配条件列表。</p>
   */
  PacketFilterConditions?: Array<PacketFilterCondition>
}

/**
 * 协议封禁配置。
 */
export interface ProtocolBlockingConfig {
  /**
   * <p>TCP 协议封禁。</p><p>枚举值：</p><ul><li>on： 开启</li><li>off： 关闭</li></ul>
   */
  TCPProtocol: string
  /**
   * <p>UDP 协议封禁。</p><p>枚举值：</p><ul><li>on： 开启</li><li>off： 关闭</li></ul>
   */
  UDPProtocol: string
  /**
   * <p>ICMP 协议封禁。</p><p>枚举值：</p><ul><li>on： 开启</li><li>off： 关闭</li></ul>
   */
  ICMPProtocol: string
  /**
   * <p>其它协议封禁（除 TCP/UDP/ICMP 外的协议）。</p><p>枚举值：</p><ul><li>on： 开启</li><li>off： 关闭</li></ul>
   */
  OtherProtocol: string
}

/**
 * 报文匹配条件。
 */
export interface PacketFilterCondition {
  /**
   * <p>报文匹配的起始位置。</p><p>枚举值：</p><ul><li>ip_header： 从 IP 头部开始匹配。</li><li>transport_header： 从 TCP/UDP 头部开始匹配。</li><li>payload： 从应用层载荷开始匹配。</li></ul>
   */
  MatchBegin: string
  /**
   * <p>报文匹配内容。</p>
   */
  Content: PacketMatchContent
}

/**
 * DDoS 防护实例信息。
 */
export interface ProtectionInfo {
  /**
   * <p>防护实例 ID。</p>
   */
  ProtectionId?: string
  /**
   * <p>防护实例名称。</p>
   */
  Name?: string
  /**
   * <p>防护实例的防护级别。</p><p>枚举值：</p><ul><li>advanced： 增强防护；</li><li>ultimate： 卓越防护。</li></ul>
   */
  ProtectionLevel?: string
  /**
   * <p>防护实例状态。</p><p>枚举值：</p><ul><li>protecting： 防护中；</li><li>processing： 变更中；</li><li>disabling： 停用中；</li><li>disabled： 已停用。</li></ul>
   */
  Status?: string
  /**
   * <p>资源标签列表。</p>
   */
  Tags?: Array<TagInfo>
  /**
   * <p>防护实例中的防护资源数量。</p>
   */
  ResourceCount?: number
}

/**
 * 标签配置。
 */
export interface TagInfo {
  /**
   * <p>标签键。</p>
   */
  TagKey: string
  /**
   * <p>标签值。</p>
   */
  TagValue: string
}

/**
 * DescribeProtectionResources请求参数结构体
 */
export interface DescribeProtectionResourcesRequest {
  /**
   * <p>防护实例 ID。</p>
   */
  ProtectionId: string
  /**
   * <p>分页查询偏移量。默认值：0。</p>
   */
  Offset?: number
  /**
   * <p>分页查询限制数目。默认值：20，最大值：100。</p>
   */
  Limit?: number
  /**
   * <p>过滤条件。<p><code>Filters</code> 数组的元素个数上限为 20。不填写该参数时，返回防护实例下的全部防护资源。</p><p>支持的过滤字段：</p><ul><li><code>ResourceType</code>：按防护资源类型过滤。可选项：<ul><li><code>cvm</code>：云服务器。</li><li><code>lighthouse</code>：轻量应用服务器。</li><li><code>clb</code>：负载均衡。</li><li><code>eip</code>：弹性公网 IP。</li><li><code>waf</code>：Web 应用防火墙。</li><li><code>teo_l7_domain</code>：EdgeOne 域名。</li><li><code>teo_l4_proxy</code>：EdgeOne 四层代理。</li></ul></li></ul></p>
   */
  Filters?: Array<ProtectionFilter>
}

/**
 * 数值范围。
 */
export interface SizeRange {
  /**
   * <p>最小值。</p><p>与 <code>Max</code> 相等时表示单个值。</p>
   */
  Min: number
  /**
   * <p>最大值。</p>
   */
  Max: number
}

/**
 * DescribeProtections返回参数结构体
 */
export interface DescribeProtectionsResponse {
  /**
   * <p>符合条件的防护实例个数。</p>
   */
  TotalCount?: number
  /**
   * <p>防护实例详细信息列表。</p>
   */
  Protections?: Array<ProtectionInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 当前账号剩余解封配额。付费订阅 DDoS 高防产品的账号，将根据产品规格获得解封次数配额，配额按日或按月周期提供。

- 按日提供的解封配额在每天 00:00（UTC+8）重置，当天未使用的配额不会累计到次日。
- 按月提供的解封配额每月首日00:00（UTC+8）重置重置，当月未使用的配额不会累计到次日。
 */
export interface DDoSUnblockQuota {
  /**
   * <p>解封次数配额总数。</p>
   */
  TotalQuota?: number
  /**
   * <p>已使用的配额总数。</p>
   */
  UsedQuota?: number
  /**
   * <p>配额生效的起始时间。</p>
   */
  QuotaStartTime?: string
  /**
   * <p>配额生效的结束时间。</p>
   */
  QuotaEndTime?: string
}

/**
 * CreateProtection返回参数结构体
 */
export interface CreateProtectionResponse {
  /**
   * <p>防护实例 ID。</p>
   */
  ProtectionId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDDoSProtectionPolicy返回参数结构体
 */
export interface DescribeDDoSProtectionPolicyResponse {
  /**
   * <p>DDoS 防护策略。</p>
   */
  ProtectionPolicy?: ProtectionPolicy
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DDoS 默认防护配置，用于设置清洗策略的灵敏度等级。
 */
export interface DefaultProtectionConfig {
  /**
   * <p>DDoS 防护等级配置，决定清洗策略的灵敏度。</p><p>枚举值：</p><ul><li>high： 高灵敏度。清洗策略相对严格，建议在正常模式出现攻击透传时使用。</li><li>medium： 适中灵敏度（默认）。清洗策略适配绝大多数业务，可有效防护常见攻击。</li><li>low： 宽松灵敏度。清洗策略相对宽松，仅对具有明确攻击特征的攻击包进行防护。</li></ul><p>详见 <a href="https://cloud.tencent.com/document/product/297/139103">各个防护等级防护策略</a> 说明。</p>
   */
  SensitivityLevel: string
}

/**
 * 防护资源的详细信息。
 */
export interface ResourceInfo {
  /**
   * <p>防护资源的资源六段式标识。</p>
   */
  Resource?: string
  /**
   * <p>防护资源类型。</p><p>枚举值：</p><ul><li>cvm： 云服务器</li><li>lighthouse： 轻量应用服务器</li><li>clb： 负载均衡</li><li>eip： 弹性公网 IP</li><li>waf： Web 应用防火墙</li><li>teo_l7_domain： EdgeOne 域名</li><li>teo_l4_proxy： EdgeOne 四层代理</li></ul>
   */
  ResourceType?: string
  /**
   * <p>防护资源的防护状态。</p><p>枚举值：</p><ul><li>protecting： 防护中</li><li>processing： 防护变更中</li><li>disabling： 防护停用中</li><li>disabled： 防护已停用</li><li>process_failed： 防护变更失败</li><li>disabled_failed： 防护停用失败</li></ul>
   */
  Status?: string
  /**
   * <p>防护资源所属地域，例如 <code>ap-beijing</code>。</p><p>资源类型为 EdgeOne 时，Region 取以下枚举值：</p><ul><li>global：全球可用区。</li><li>mainland：中国大陆可用区。</li><li>overseas：全球可用区（中国大陆除外）。</li></ul>
   */
  Region?: string
  /**
   * <p>公网访问地址。</p><ul><li>资源类型是以公网 IP 提供接入的云资产时，返回对应的公网 IP。</li><li>资源类型是以域名提供接入的云资产时，返回对应域名，例如 <a href="https://cloud.tencent.com/document/product/214/86948">域名化负载均衡实例</a>。</li><li>资源类型为 EdgeOne 四层代理或七层域名时，不返回该字段。</li></ul>
   */
  PublicAddresses?: Array<string>
}

/**
 * 防护实例的 L3/4 DDoS 防护策略。
 */
export interface ProtectionPolicy {
  /**
   * <p>默认防护配置。</p>
   */
  DefaultProtection?: DefaultProtectionConfig
  /**
   * <p>IP 黑白名单规则列表。</p>
   */
  IPACLRules?: IPACLRules
  /**
   * <p>端口过滤规则列表。</p>
   */
  PortACLRules?: PortACLRules
  /**
   * <p>限速规则列表。</p>
   */
  SpeedLimitRules?: SpeedLimitRules
  /**
   * <p>包特征过滤规则列表。</p>
   */
  PacketFilterRules?: PacketFilterRules
  /**
   * <p>区域封禁配置。</p>
   */
  GeoBlocking?: GeoBlockingConfig
  /**
   * <p>协议封禁配置。</p>
   */
  ProtocolBlocking?: ProtocolBlockingConfig
  /**
   * <p>连接类攻击防护配置。</p>
   */
  ConnectionProtection?: ConnectionProtectionConfig
  /**
   * <p>流量签名配置。</p>
   */
  TrafficSignature?: TrafficSignatureConfig
}

/**
 * DescribeProtectionResources返回参数结构体
 */
export interface DescribeProtectionResourcesResponse {
  /**
   * <p>符合条件的防护资源总数。</p>
   */
  TotalCount?: number
  /**
   * <p>防护资源详细信息列表。</p>
   */
  ResourceInfos?: Array<ResourceInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDDoSBlockRecords返回参数结构体
 */
export interface DescribeDDoSBlockRecordsResponse {
  /**
   * <p>封堵解封记录总数。</p>
   */
  TotalCount?: number
  /**
   * <p>封堵解封记录。</p>
   */
  BlockRecords?: Array<DDoSBlockRecord>
  /**
   * <p>解封次数配额信息。</p>
   */
  UnblockQuotaInfo?: DDoSUnblockQuota
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 区域封禁配置。
 */
export interface GeoBlockingConfig {
  /**
   * <p>封禁地域列表。采用<a href="https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2"> ISO 3166-1 alpha-2 </a>标准的两字代码。</p>
   */
  GeoCode: Array<string>
}

/**
 * 端口过滤规则。
 */
export interface PortACLRule {
  /**
   * <p>源端口范围。</p>
   */
  SourcePortRange: PortRange
  /**
   * <p>目的端口范围。</p>
   */
  DestinationPortRange: PortRange
  /**
   * <p>协议类型。</p><p>枚举值：</p><ul><li>all ： 所有协议。</li><li>tcp： TCP 协议。</li><li>udp： UDP 协议。</li></ul>
   */
  Protocol: string
  /**
   * <p>处置动作。</p><p>枚举值：</p><ul><li>drop： 丢弃。</li><li>allow： 放行。</li><li>forward： 继续防护，即继续执行下一个防护子策略模块，而非端口过滤内的其他规则。</li></ul>
   */
  Action: string
}

/**
 * 报文匹配内容。
 */
export interface PacketMatchContent {
  /**
   * <p>匹配值 Value 的格式类型。</p><p>枚举值：</p><ul><li>string： 明文字符串。</li><li>hex： 十六进制字符串。</li></ul>
   */
  Type: string
  /**
   * <p>匹配值。Type=string 时为明文字符串，例如 <code>GET /index</code>；Type=hex 时为十六进制字符串，例如 <code>0x7e2f68656c6c6f</code>。</p>
   */
  Value: string
  /**
   * <p>匹配起始偏移量，从匹配起始位置（MatchBegin）开始计算。</p><p>取值范围：[0, 1500]</p><p>单位：字节</p>
   */
  Offset: number
  /**
   * <p>检查深度，即从 Offset 开始的最大检查字节数。</p><p>取值范围：[0, 1500]</p><p>单位：字节</p>
   */
  Depth: number
}

/**
 * 端口范围。
 */
export interface PortRange {
  /**
   * <p>起始端口。</p><p>取值范围：[1, 65535]</p><p>与 <code>ToPort</code> 相同时表示单个端口。</p>
   */
  FromPort: number
  /**
   * <p>结束端口</p><p>取值范围：[1, 65535]</p>
   */
  ToPort: number
}

/**
 * CreateProtection请求参数结构体
 */
export interface CreateProtectionRequest {
  /**
   * <p>防护实例名称。</p><p>入参限制：防护实例名称最多 60 个字符，同一主账号下不可重名。</p>
   */
  Name: string
  /**
   * <p>防护实例的防护级别。</p><p>枚举值：</p><ul><li>advanced： 增强防护；</li><li>ultimate： 卓越防护，仅在当前主账号已订阅任意扩展包时可用。</li></ul><p>不同订阅套餐版本下可用的防护级别不同，可接入的防护资源类型与防护容量也相应不同，具体请参见 <a href="https://cloud.tencent.com/document/product/297/137986">DDoS 防护容量说明</a>。</p>
   */
  ProtectionLevel?: string
  /**
   * <p>标签。用于对防护实例进行分权限管控与分账。<p>需要先前往 <a href="https://console.cloud.tencent.com/tag/taglist">标签控制台</a> 创建对应标签，方可在此处传入标签键与标签值。</p></p>
   */
  Tags?: Array<TagInfo>
}

/**
 * DescribeProtections请求参数结构体
 */
export interface DescribeProtectionsRequest {
  /**
   * <p>过滤条件。<p><code>Filters</code> 数组的元素个数上限为 20。不填写该参数时，返回当前账号下有权限的全部防护实例。</p><p>支持的过滤字段：</p><ul><li><code>Name</code>：按防护实例名称过滤。</li><li><code>ProtectionId</code>：按防护实例 ID 过滤。</li><li><code>ProtectionLevel</code>：按防护实例级别过滤。可选项：<ul><li><code>advanced</code>：增强防护。</li><li><code>ultimate</code>：卓越防护。</li></ul></li><li><code>Status</code>：按防护实例状态过滤。可选项：<ul><li><code>protecting</code>：防护中。</li><li><code>processing</code>：变更中。</li><li><code>disabling</code>：隔离中或删除中。</li><li><code>disabled</code>：已隔离。</li></ul></li><li><code>TagKey</code>：按标签键过滤。</li><li><code>TagValue</code>：按标签值过滤。</li></ul><p>模糊查询时支持过滤字段名包括 <code>Name</code>、<code>ProtectionId</code>、<code>ProtectionLevel</code>、<code>Status</code>、<code>TagKey</code>、<code>TagValue</code>。</p></p>
   */
  Filters?: Array<ProtectionFilter>
  /**
   * <p>分页查询偏移量。默认值：0。</p>
   */
  Offset?: number
  /**
   * <p>分页查询限制数目。默认值：20，最大值：100。</p>
   */
  Limit?: number
}

/**
 * 描述键值对过滤器，用于条件过滤查询。例如过滤 ID、名称、状态等。 若存在多个 Filter 时，Filter 间的关系为逻辑与（AND）关系。 若同一个 Filter 存在多个 Values，同一 Filter 下 Values 间的关系为逻辑或（OR）关系。
 */
export interface Filter {
  /**
   * <p>需要过滤的字段；具体可选择值请查看对应的引用接口。</p>
   */
  Name: string
  /**
   * <p>字段的过滤值。</p>
   */
  Values: Array<string>
}

/**
 * UnblockResources返回参数结构体
 */
export interface UnblockResourcesResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyProtectionResource返回参数结构体
 */
export interface ModifyProtectionResourceResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 端口过滤规则列表。
 */
export interface PortACLRules {
  /**
   * <p>端口过滤规则列表。</p>
   */
  Rules: Array<PortACLRule>
}

/**
 * DescribeDDoSBlockRecords请求参数结构体
 */
export interface DescribeDDoSBlockRecordsRequest {
  /**
   * <p>查询的起始时间。最高支持近一年的数据查询。</p><p>参数格式：2026-02-04T11:30:00+08:00。</p>
   */
  StartTime: string
  /**
   * <p>查询的结束时间。查询时间范围（EndTime - StartTime）需小于等于 31 天。</p><p>参数格式：2026-03-04T11:30:00+08:00。</p>
   */
  EndTime: string
  /**
   * <p>过滤条件，Filters.Values 的上限为 20。该参数不填写时，返回当前 appid 下所有被封堵过的资源列表。详细的过滤条件如下：</p><ul><li> Resource：可按照被封堵的 IP 或者被封堵的资源六段式进行过滤；</li><li> Status：可按照被封堵的资源状态进行过滤。</li></ul><p>当 Filters.Name 取值为 Status 时，Filters.Values 取值有：</p><ul><li>Blocked：已封堵；</li><li>Unblocking：解封中；</li><li>Unblocked：已解封。</li></ul>
   */
  Filters?: Array<Filter>
  /**
   * <p>分页查询限制数，最大值为 100。</p><p>默认值：20</p>
   */
  Limit?: number
  /**
   * <p>分页查询偏移量。</p><p>默认值：0</p>
   */
  Offset?: number
}

/**
 * 连接类攻击防护配置。
 */
export interface ConnectionProtectionConfig {
  /**
   * <p>源 IP 每秒新建连接数限制，为 0 为不限制（关闭），大于 0 开启限制。命中后限制新建连接。</p><p>取值范围：[0, 4294967295]</p>
   */
  SourceIPNewConnectionLimit: number
  /**
   * <p>源 IP 并发连接数限制，为 0 不限制（关闭），大于 0 开启限制。命中后限制新建连接。</p><p>取值范围：[0, 4294967295]</p>
   */
  SourceIPConcurrentConnectionLimit: number
  /**
   * <p>目的 IP 每秒新建连接数限制，为 0 不限制（关闭），大于 0 开启限制。命中后限制新建连接。</p><p>取值范围：[0, 4294967295]</p>
   */
  DestinationIPNewConnectionLimit: number
  /**
   * <p>目的 IP 并发连接数限制，为 0 不限制（关闭）， 大于 0 开启限制。命中后限制新建连接。</p><p>取值范围：[0, 4294967295]</p>
   */
  DestinationIPConcurrentConnectionLimit: number
  /**
   * <p>源 IP 异常连接限制。</p>
   */
  AbnormalConnectionLimit: AbnormalConnectionLimit
}

/**
 * 流量签名校验配置。
 */
export interface TrafficSignatureConfig {
  /**
   * <p>流量签名配置开关。</p>
   */
  Switch: string
  /**
   * <p>流量签名密钥。</p>
   */
  TrafficSignatureKeys: Array<string>
  /**
   * <p>UDP 协议校验的端口范围，支持输入多个端口或端口范围。</p>
   */
  UdpCheckPortRanges: Array<PortRange>
  /**
   * <p>TCP 协议校验的端口范围，支持输入多个端口或端口范围。</p>
   */
  TcpCheckPortRanges: Array<PortRange>
  /**
   * <p>UDP 协议下签名在数据包负载中的起始偏移位置，支持 0 至 100 字节偏移量。默认为0。</p>
   */
  UdpTrafficSignatureOffset?: number
  /**
   * <p>TCP 协议下签名在数据包负载中的起始偏移位置，支持 0 至 100 字节偏移量。默认为0</p>
   */
  TcpTrafficSignatureOffset?: number
}

/**
 * IP 黑白名单规则列表。
 */
export interface IPACLRules {
  /**
   * <p>IP 黑白名单规则列表。</p>
   */
  Rules: Array<IPACLRule>
}

/**
 * IP 黑白名单规则。
 */
export interface IPACLRule {
  /**
   * <p>处置方式。</p><p>枚举值：</p><ul><li>drop： 黑名单（拦截）。</li><li>allow： 白名单（放行）。</li></ul>
   */
  Action: string
  /**
   * <p>IP 列表。</p><p>参数格式：支持 IPv4、IPv6 和 CIDR 格式。</p>
   */
  IPs: Array<string>
}

/**
 * 特征过滤规则列表。
 */
export interface PacketFilterRules {
  /**
   * <p>特征过滤规则列表。</p>
   */
  Rules: Array<PacketFilterRule>
}

/**
 * ModifyDDoSProtectionPolicy返回参数结构体
 */
export interface ModifyDDoSProtectionPolicyResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 封堵记录
 */
export interface DDoSBlockRecord {
  /**
   * <p>被封堵的资源，公网 IP，示例如下：</p><ul><li> 公网 IP：117.175.94.231。</li></ul>
   */
  Resource?: string
  /**
   * <p>被封堵的时间。</p>
   */
  BlockTime?: string
  /**
   * <p>封堵解封状态。</p><p>枚举值：</p><ul><li>Blocked：已封堵；</li><li>Unblocking：解封中；</li><li>Unblocked：已解封。</li></ul>
   */
  Status?: string
}

/**
 * ModifyProtection请求参数结构体
 */
export interface ModifyProtectionRequest {
  /**
   * <p>防护实例 ID。</p>
   */
  ProtectionId: string
  /**
   * <p>防护实例名称。</p><p>入参限制：防护实例名称最多 60 个字符，同一主账号下不可重名。</p>
   */
  Name?: string
}

/**
 * DescribeResourceProtections请求参数结构体
 */
export interface DescribeResourceProtectionsRequest {
  /**
   * <p>防护资源，须采用资源六段式格式。具体格式如下：<ul><li>云服务器：<code>qcs::cvm:${region}:uin/${uin}:instance/${InstanceId}</code></li><li>轻量应用服务器：<code>qcs::lighthouse:${region}:uin/${uin}:instance/${InstanceId}</code></li><li>负载均衡：<code>qcs::clb:${region}:uin/${uin}:clb/${LoadBalancerId}</code></li><li>弹性公网 IP：<code>qcs::cvm:${region}:uin/${uin}:eip/${AddressId}</code></li><li>Web 应用防火墙：<code>qcs::waf:${region}:uin/${uin}:waf/${InstanceId}</code></li><li>EdgeOne 域名：<code>qcs::teo::uin/${uin}:zone/${ZoneId}/Domain/${Domain}</code></li><li>EdgeOne 四层代理：<code>qcs::teo::uin/${uin}:zone/${ZoneId}/L4Proxy/${InstanceId}</code></li></ul></p><p>取值参考：<a href="https://cloud.tencent.com/document/product/598/67350">支持 CAM 的业务接口</a></p>
   */
  Resources: Array<string>
}

/**
 * UnblockResources请求参数结构体
 */
export interface UnblockResourcesRequest {
  /**
   * <p>申请解封的资源列表。支持按照公网 IP 解封；可通过 DescribeDDoSBlockRecords 接口获取被封堵的资源详情。参数示例如下：</p><ul><li>公网 IP：117.175.94.230。</li></ul><p>入参限制：列表长度最大限制 10。</p>
   */
  Resources: Array<string>
}

/**
 * 端口限速规则。
 */
export interface SpeedLimitRule {
  /**
   * <p>IP 协议号。取值参考 <a href="https://en.wikipedia.org/wiki/List_of_IP_protocol_numbers">IP 协议号列表</a> 。</p><p>参数格式：0-255 范围的数字。支持单个 IP 协议号和 IP 协议号范围。</p><p><code>0-255</code> 表示全部协议。</p>
   */
  IPProtocolNumbers: Array<string>
  /**
   * <p>目的端口范围列表。</p>
   */
  DestinationPortRanges: Array<PortRange>
  /**
   * <p>限速统计维度。</p><p>枚举值：</p><ul><li>destination_ip： 按目的 IP 维度统计。</li><li>source_destination_ip： 按源 IP + 目的 IP 维度统计。</li></ul>
   */
  Mode: string
  /**
   * <p>流量带宽限制。</p><p>取值范围：[0, 4294967295]</p><p>单位：bps</p><p>为 0 时表示不限制。BandwidthLimit 和 PacketRateLimit 至少需要设置一个大于 0 的值。</p>
   */
  BandwidthLimit?: number
  /**
   * <p>包速率限制。</p><p>取值范围：[0, 4294967295]</p><p>单位：pps</p><p>为 0 时表示不限制。BandwidthLimit 和 PacketRateLimit 至少需要设置一个大于 0 的值。</p>
   */
  PacketRateLimit?: number
}

/**
 * DescribeResourceProtections返回参数结构体
 */
export interface DescribeResourceProtectionsResponse {
  /**
   * <p>防护资源对应的防护实例列表。资源未绑定任何防护实例时，返回空数组。</p>
   */
  ResourceProtections?: Array<ResourceProtection>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}
