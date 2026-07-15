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
 * NotifyUnbindTarget请求参数结构体
 */
export interface NotifyUnbindTargetRequest {
  /**
   * 后端服务的IP列表。
> **VpcId**（**NumericVpcId**）、**Ips**必须同时设置。
   */
  Ips: Array<string>
  /**
   * 后端服务所属VPC的数字ID。
> **VpcId**（**NumericVpcId**）、**Ips**必须同时设置。
   */
  NumericVpcId: number
}

/**
 * DescribeQuota请求参数结构体
 */
export interface DescribeQuotaRequest {
  /**
   * 配额类型列表。支持同时传入多个配额类型。查询资源级配额时，可配合 ResourceIds 传入对应资源ID；如需返回已使用量和可用量，可在 DisplayFields 中传入 used、available。

枚举说明：
- alb_quota_loadbalancers_num：每个地域可创建的 ALB 实例数。
- alb_quota_targetgroups_num：每个地域可创建的 ALB 目标组数。
- alb_quota_loadbalancer_listeners_num：每个 ALB 实例可创建的监听器数，ResourceIds 填写 ALB 实例 ID。
- alb_quota_loadbalancer_rules_num：每个 ALB 实例可添加的转发规则数，不计入默认规则，ResourceIds 填写 ALB 实例 ID。
- alb_quota_loadbalancer_certificates_num：每个 ALB 实例可添加的扩展证书数，不计入默认证书，ResourceIds 填写 ALB 实例 ID。
- alb_quota_loadbalancer_targetgroup_num：每个 ALB 实例可绑定的目标组数，ResourceIds 填写 ALB 实例 ID。
- alb_quota_loadbalancer_servers_num：每个 ALB 实例可添加的后端服务器数，ResourceIds 填写 ALB 实例 ID。
- alb_quota_server_added_num：单个后端服务器 IP 可被添加到 ALB 后端目标组的次数。
- alb_quota_targetgroup_attached_num：每个目标组可被 ALB 转发规则关联的次数，ResourceIds 填写目标组 ID。
- alb_quota_targetgroup_targets_num：每个目标组支持的后端服务器数，适用于 IP 和端口类型后端，ResourceIds 填写目标组 ID。
- alb_quota_targetgroup_targets_num_scf：每个目标组支持的 SCF 函数后端数，ResourceIds 填写目标组 ID。
- alb_quota_max_request_timeout：创建监听器时可配置的连接请求最大超时时间。
- alb_quota_max_idle_timeout：创建监听器时可配置的连接空闲最大超时时间。
- alb_quota_listener_certificates_num：单个监听器可添加的证书数量，ResourceIds 填写监听器 ID。
- alb_quota_rule_targetgroups_num：单条转发规则可绑定的目标组数量。
- alb_quota_rule_conditions_num：单条转发规则可添加的匹配条件条目数。
- alb_quota_rule_wildcards_num：单条转发规则可添加的包含通配符的匹配条目数。
- alb_quota_rule_actions_num：单条转发规则可添加的动作条目数。
- alb_quota_cipher_template_listeners_num：单个加密套件模板可关联的监听器数量。
- alb_quota_healthcheck_templates_num：每个地域可创建的健康检查模板数。
- alb_quota_securitygroup_templates_num：单个 ALB 实例支持绑定的安全组数量。
- alb_quota_securitygroup_rules_per_sg_num：单个 ALB 实例中单个安全组支持的规则条目数。
- alb_quota_security_policies_num：每个地域可创建的自定义安全策略数。
   */
  QuotaTypes: Array<string>
  /**
   * 显示字段列表，用于控制是否额外返回用量信息。支持 used、available：used 表示返回当前已使用量，available 表示返回当前剩余可用量。QuotaType 和 Limit 总是返回；ResourceId 会在请求传入 ResourceIds 时返回。
   */
  DisplayFields?: Array<string>
  /**
   * 资源ID列表。用于查询具体资源维度的配额和用量；不传时查询账号或地域维度的默认配额配置。资源ID的类型由 QuotaTypes 决定，例如 ALB 实例级配额填写 ALB 实例 ID，监听器级配额填写监听器 ID，目标组级配额填写目标组 ID。
   */
  ResourceIds?: Array<string>
}

/**
 * InquirePriceCreateLoadBalancer请求参数结构体
 */
export interface InquirePriceCreateLoadBalancerRequest {
  /**
   * 实例的计费类型。默认POSTPAID_BY_HOUR，仅取值 POSTPAID_BY_HOUR：表示按量计费。
   */
  ChargeType?: string
}

/**
 * DeleteRules请求参数结构体
 */
export interface DeleteRulesRequest {
  /**
   * 监听器 ID，格式为 lst- 后接 8 位字母数字。
   */
  ListenerId: string
  /**
   * 负载均衡实例 ID，格式为 alb- 后接 8 位字母数字。
   */
  LoadBalancerId: string
  /**
   * 转发规则 ID 列表，ID 格式为 rule- 后接 8 位字母数字。
   */
  RuleIds: Array<string>
  /**
   * 是否只预检查此次请求。
   */
  DryRun?: boolean
}

/**
 * SetLoadBalancerSecurityGroups返回参数结构体
 */
export interface SetLoadBalancerSecurityGroupsResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 用于购买或者修改使用的可用区及子网映射结构体
 */
export interface ZoneMappingsItem {
  /**
   * <p>子网 ID。</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  SubnetId: string
  /**
   * <p>可用区ID。最多支持添加10个可用区。若当前地域支持2个及以上的可用区，至少需要添加2个可用区。<br>您可以通过调用<a href="https://cloud.tencent.com/document/api/1822/133727">DescribeZones</a>接口获取可用区ID对应的可用区的信息。</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  ZoneId: string
  /**
   * <p>公网实例绑定的EIP实例ID。</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  LoadBalancerAddress?: LoadBalancerAddress
}

/**
 * 负载均衡详细信息
 */
export interface LoadBalancerDetail {
  /**
   * 访问日志配置。
   */
  AccessLogConfig?: AccessLogConfig
  /**
   * IP 地址版本，取值 IPv4 或 IPv6。
   */
  AddressIpVersion?: string
  /**
   * 应用型负载均衡实例的网络地址类型。取值：

- **Internet/Public**：负载均衡具有公网IP地址，DNS域名被解析到公网IP，因此可以在公网环境访问。

- **Intranet/Internal**：负载均衡只有私网IP地址，DNS域名被解析到私网IP，因此只能被负载均衡所在VPC的内网环境访问。


   */
  AddressType?: string
  /**
   * 资源创建时间，格式为`yyyy-MM-ddTHH:mm:ss±hh:mm`。
   */
  CreateTime?: string
  /**
   * 删除保护设置信息。
   */
  DeletionProtection?: DeletionProtectionConfig
  /**
   * DNS域名。
   */
  Domain?: string
  /**
   * 负载均衡实例付计费配置信息
   */
  LoadBalancerBillingConfig?: LoadBalancerBillingConfig
  /**
   * 负载均衡实例 ID，格式为 alb- 后接 8 位字母数字。
   */
  LoadBalancerId?: string
  /**
   * 实例名称。

长度为1~80个字符，可包含中文、字母、数字、短划线（-）、正斜线（/）、半角句号（.）和下划线（_）。
   */
  LoadBalancerName?: string
  /**
   * 应用型负载均衡操作锁配置。
   */
  LoadBalancerOperationLocks?: Array<LoadBalancerOperationLocksItem>
  /**
   * 应用型负载均衡实例状态。取值：

- **Provisioning**：创建中。
- **Active**: 运行中。
- **Configuring**: 变配中。
- **Deleting**：删除中。
- **ProvisionFailed**：创建失败。
- **ConfigureFailed**：变配失败。
- **DeletionFailed**：删除失败。
- **Abnormal**：异常状态，具体异常原因参见LoadBalancerOperationLocks字段。
   */
  LoadBalancerStatus?: string
  /**
   * 修改保护设置信息。
   */
  ModificationProtection?: ModificationProtectionInfo
  /**
   * 应用型负载均衡实例绑定的安全组ID集合。
   */
  SecurityGroupIds?: Array<string>
  /**
   * 标签。
   */
  Tags?: Array<TagInfo>
  /**
   * 私有网络 ID。
   */
  VpcId?: string
  /**
   * 可用区及子网映射列表，最多返回10个可用区。若当前地域支持2个及以上可用区，至少返回2个及以上可用区。
   */
  ZoneMappings?: Array<ZoneMappingInfo>
}

/**
 * CreateLoadBalancer请求参数结构体
 */
export interface CreateLoadBalancerRequest {
  /**
   * 应用型负载均衡的地址类型。取值：

- **Internet**：负载均衡具有公网IP地址，DNS域名被解析到公网IP，因此可以在公网环境访问。

- **Intranet**：负载均衡只有私网IP地址，DNS域名被解析到私网IP，因此只能被负载均衡所在VPC的内网环境访问。
   */
  AddressType: string
  /**
   * 应用型负载均衡实例计费配置。
   */
  LoadBalancerBillingConfig: LoadBalancerBillingConfig
  /**
   * 私有网络 ID。
   */
  VpcId: string
  /**
   * 可用区及私有网络子网映射列表，最多支持添加10个可用区。若当前地域支持2个及以上的可用区，至少需要添加2个可用区。
   */
  ZoneMappings: Array<ZoneMappingsItem>
  /**
   * IP 地址版本，取值 IPv4 或 IPv6。
   */
  AddressIpVersion?: string
  /**
   * 客户端Token，用于保证请求的幂等性。

从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符。
   */
  ClientToken?: string
  /**
   * 删除保护配置。
   */
  DeleteProtection?: DeletionProtectionConfig
  /**
   * 是否只预检此次请求，取值：

- **true**：发送检查请求，不会创建应用型负载均衡实例。检查项包括是否填写了必需参数、请求格式和业务限制。如果检查不通过，则返回对应错误。如果检查通过，则返回错误码`DryRunOperation`。

- **false**（默认值）：发送正常请求，通过检查后返回HTTP 2xx状态码并直接进行操作。
   */
  DryRun?: boolean
  /**
   * EIP 地址类型，可取值：
- **EIP**: 普通弹性公网 IP
- **AntiDDoSEIP**: 高防EIP
- **AnycastEIP**: 加速 EIP
- **HighQualityEIP**: 精品 IP。仅新加坡和中国香港支持精品IP。
- **ResidentialEIP**: 原生 IP

不传默认是EIP。
   */
  InternetAddressType?: string
  /**
   * 应用型负载均衡实例名称。长度为1~80个字符，可包含中文、字母、数字、短划线（-）、正斜线（/）、半角句号（.）和下划线（_）。
   */
  LoadBalancerName?: string
  /**
   * 标签。
   */
  Tags?: Array<TagInfo>
}

/**
 * ModifyLoadBalancerAttributes请求参数结构体
 */
export interface ModifyLoadBalancerAttributesRequest {
  /**
   * 负载均衡实例 ID，格式为 alb- 后接 8 位字母数字。
   */
  LoadBalancerId: string
  /**
   * 客户端Token，用于保证请求的幂等性。

从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符。

> 若您未指定，则系统自动使用API请求的**RequestId**作为**ClientToken**标识。每次API请求的**RequestId**不一样。
   */
  ClientToken?: string
  /**
   * 删除保护配置
   */
  DeletionProtection?: DeletionProtectionConfig
  /**
   * 是否只预检此次请求，取值：

- **true**：发送检查请求，不会修改应用型负载均衡实例的属性。检查项包括是否填写了必需参数、请求格式、业务限制。如果检查不通过，则返回对应错误。如果检查通过，则返回错误码`DryRunOperation`。

- **false**（默认值）：发送正常请求，通过检查后返回`HTTP_2xx`状态码并直接进行操作。
   */
  DryRun?: boolean
  /**
   * 应用型负载均衡实例名称。长度为1~80个字符，可包含中文、字母、数字、短划线（-）、正斜线（/）、半角句号（.）和下划线（_）。
   */
  LoadBalancerName?: string
}

/**
 * DisassociateBandwidthPackageFromLoadBalancer请求参数结构体
 */
export interface DisassociateBandwidthPackageFromLoadBalancerRequest {
  /**
   * 共享带宽包 ID。
   */
  BandwidthPackageId: string
  /**
   * 负载均衡实例 ID，格式为 alb- 后接 8 位字母数字。
   */
  LoadBalancerId: string
  /**
   * 客户端Token，用于保证请求的幂等性。

从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符。

> 若您未指定，则系统自动使用API请求的**RequestId**作为**ClientToken**标识。每次API请求的**RequestId**不一样。
   */
  ClientToken?: string
  /**
   * 是否只预检此次请求。取值：
- **true**：发送检查请求，不会将共享带宽包从负载均衡实例中移除。检查项包括是否填写了必需参数、请求格式、业务限制。如果检查不通过，则返回对应错误。如果检查通过，则返回错误码`DryRunOperation`。
- **false**（默认值）：发送正常请求，通过检查后返回HTTP 2xx状态码并直接进行操作。
   */
  DryRun?: boolean
}

/**
 * CreateHealthCheckTemplate请求参数结构体
 */
export interface CreateHealthCheckTemplateRequest {
  /**
   * 是否预览此次请求。
- **false**（默认）：发送普通请求，直接修改健康检查模板。
- **true**：发送预览请求，检查修改健康检查模板的参数、格式、业务限制等是否符合要求。
   */
  DryRun?: boolean
  /**
   * 健康检查状态码。取值：
- 当健康检查协议为**HTTP/HTTPS**时：
	- **http_1xx**
	- **http_2xx**（默认值）
	-  **http_3xx**
	-  **http_4xx**
	-  **http_5xx**
- 当健康检查协议为**GRPC/GRPCS**时：默认值为**12**，数值范围为**0-99**，输入值可为数值、多个数值或者范围以及相互组合，如：
	- **"20"**
	- **"0-99"**
   */
  HealthCheckCodes?: Array<string>
  /**
   * 判定后端服务健康的阈值，当健康检查连续成功多少次后，后端服务的状态由**不健康**变为**健康**。
取值范围：**2**-**10**。
默认值：**2**。
   */
  HealthCheckHealthyThreshold?: number
  /**
   * 健康检查域名。
长度限制为 **1-255** 个字符。
可包含小写字母、数字、短划线（-）和半角句号（.）。

> 仅当 **HealthCheckProtocol** 设置为 **HTTP/HTTPS/GRPC/GRPCS** 时，该参数生效。
   */
  HealthCheckHost?: string
  /**
   * 健康检查 HTTP 协议版本，取值：
- **HTTP1.1**（默认）
- **HTTP1.0** 
> 仅当**HealthCheckProtocol**设置为**HTTP** 或 **HTTPS** 时，该参数生效。
   */
  HealthCheckHttpVersion?: string
  /**
   * 健康检查的时间间隔。单位：秒。 取值范围：**2**-**300**。 默认值：**5**。
   */
  HealthCheckInterval?: number
  /**
   * 健康检查方法，取值： - **GET** - **HEAD**（默认值） 
> 仅当**HealthCheckProtocol**设置为**HTTP** 或 **HTTPS** 时，该参数生效。
   */
  HealthCheckMethod?: string
  /**
   * 健康检查的转发规则路径。 长度为 **1-80** 个字符，只能使用字母、数字、字符`-/.%?#&=`以及扩展字符`_;~!（)*[]@$^:',+`。 URL 必须以正斜线（/）开头。 
> 仅当**HealthCheckProtocol**为**HTTP/HTTPS/GRPC/GRPCS**时，转发规则路径参数生效。
   */
  HealthCheckPath?: string
  /**
   * 健康检查访问后端服务器的端口。  取值范围：**0-65535**。  默认值：**0**，表示后端服务器的端口。
   */
  HealthCheckPort?: number
  /**
   * 健康检查协议。取值：
- **HTTP**（默认）：通过发送 HEAD 或 GET 请求模拟浏览器的访问行为来检查服务器应用是否健康。
- **HTTPS**：通过发送 HEAD 或 GET 请求模拟浏览器的访问行为来检查服务器应用是否健康。（数据加密，相比 HTTP 更安全。）
- **TCP**：通过发送 SYN 握手报文来检测服务器端口是否存活。
- **GRPC**：通过发送 POST 或 GET 请求来检查服务器应用是否健康。
- **GRPCS**：通过发送 POST 或 GET 请求来检查服务器应用是否健康。
   */
  HealthCheckProtocol?: string
  /**
   * 健康检查模板名称。长度为 **1-255** 个字符，可包含数字、大小写字母、中文、半角句号（.）、下划线（_）和短划线（-）。
   */
  HealthCheckTemplateName?: string
  /**
   * 健康检查的响应超时时间。单位：秒。
取值范围：**2**-**60**。
默认值：**2**。
   */
  HealthCheckTimeout?: number
  /**
   * 判定后端服务不健康的阈值，当健康检查连续失败多少次后，后端服务的状态由**健康**变为**不健康**。
取值范围：**2**-**10**。
默认值：**2**。
   */
  HealthCheckUnhealthyThreshold?: number
  /**
   * 标签。
   */
  Tags?: Array<TagInfo>
}

/**
 * DescribeListenerHealthStatus请求参数结构体
 */
export interface DescribeListenerHealthStatusRequest {
  /**
   * 监听器 ID，格式为 lst- 后接 8 位字母数字。
   */
  ListenerId: string
  /**
   * 负载均衡实例 ID，格式为 alb- 后接 8 位字母数字。
   */
  LoadBalancerId: string
  /**
   * 是否包含转发规则的健康检查结果。为false时只返回默认转发规则的健康状态，为true时返回全部规则的健康状态(包含默认规则)。
取值：
true：是。
false（默认值）：否。
   */
  IncludeRule?: boolean
  /**
   * 本次读取的最大数据记录数量。
取值: 1~100。
默认值: 20
   */
  MaxResults?: number
  /**
   * 下一页查询的Token值。第一次查询时，无需填写。
   */
  NextToken?: string
}

/**
 * HTTP Header信息
 */
export interface HTTPHeaderInfo {
  /**
   * HTTP Header的键，长度1 ~ 40个字符，支持的字符集为：a-z A-Z 0-9 - _ 。
不支持中文，不支持Host，Cookie。
   */
  Key: string
  /**
   * HTTP Header的值，长度1 ~ 128个字符，支持可打印字符。
不支持"，开头和结尾不能是空格，结尾不能是\。
   */
  Values: Array<string>
}

/**
 * DeleteHealthCheckTemplates请求参数结构体
 */
export interface DeleteHealthCheckTemplatesRequest {
  /**
   * 健康检查模板 ID 列表，ID 格式为 hct- 后接字母数字。
   */
  HealthCheckTemplateIds: Array<string>
  /**
   * 是否预览此次请求。
- **false**（默认）：发送普通请求，直接删除模板。
- **true**：发送预览请求，检查删除模板的参数、格式、业务限制等是否符合要求。
   */
  DryRun?: boolean
}

/**
 * ModifyLoadBalancerAttributes返回参数结构体
 */
export interface ModifyLoadBalancerAttributesResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 应用型负载均衡可用区子网映射中的 IP 信息数据结构
 */
export interface LoadBalancerAddress {
  /**
   * IPv4 地址列表
   */
  IPv4Address?: Array<IPAddressInfo>
  /**
   * IPv6 地址列表
   */
  IPv6Address?: Array<IPAddressInfo>
}

/**
 * NotifyUnbindTarget返回参数结构体
 */
export interface NotifyUnbindTargetResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 后端服务输出参数。
 */
export interface TargetOutput {
  /**
   * 弹性网卡 ID。
   */
  EniId?: string
  /**
   * 后端服务器使用的端口。取值范围：**1 - 65535**。
   */
  Port?: number
  /**
   * 后端服务实例 ID，CVM 实例格式为 ins- 后接 8 位字母数字。
   */
  TargetId?: string
  /**
   * 后端服务IP。**TargetIp**和**TargetId**需要至少传一个。

- 当服务器组为 **Instance** 类型时，该参数为 **Eni** 的主内网 IP 或辅助内网 IP。

   */
  TargetIp?: string
  /**
   * 后端服务名称。当前只有CVM后端类型后端服务返回有效名称。
   */
  TargetName?: string
  /**
   * 后端服务的状态。取值：
- **Adding**：添加中。
- **Active**：正常可用状态。
- **Configuring**：配置中。
- **Removing**：移除中。
   */
  TargetStatus?: string
  /**
   * 后端服务类型。
   */
  TargetType?: string
  /**
   * 后端服务的权重，取值范围：**0 - 100**。默认值为**100**。如果设置权重为**0**，则不会将请求转发给该后端服务。
   */
  Weight?: number
}

/**
 * CreateHealthCheckTemplate返回参数结构体
 */
export interface CreateHealthCheckTemplateResponse {
  /**
   * 健康检查模板 ID，格式为 hct- 后接字母数字。所有接口（创建、查询、修改、删除）均使用 hct- 前缀。
   */
  HealthCheckTemplateId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyHealthCheckTemplate请求参数结构体
 */
export interface ModifyHealthCheckTemplateRequest {
  /**
   * <p>健康检查模板 ID，格式为 hct- 后接字母数字。</p>
   */
  HealthCheckTemplateId: string
  /**
   * <p>是否预览此次请求。</p><ul><li><strong>false</strong>（默认）：发送普通请求，直接修改健康检查模板。</li><li><strong>true</strong>：发送预览请求，检查修改健康检查模板的参数、格式、业务限制等是否符合要求。</li></ul>
   */
  DryRun?: boolean
  /**
   * <p>健康检查状态码。取值：</p><ul><li>当健康检查协议为<strong>HTTP/HTTPS</strong>时：<ul><li><strong>http_1xx</strong></li><li><strong>http_2xx</strong>（默认值）</li><li><strong>http_3xx</strong></li><li><strong>http_4xx</strong></li><li><strong>http_5xx</strong></li></ul></li><li>当健康检查协议为<strong>GRPC/GRPCS</strong>时：默认值为<strong>12</strong>，数值范围为<strong>0-99</strong>，输入值可为数值、多个数值或者范围以及相互组合，如：<ul><li><strong>&quot;20&quot;</strong></li><li><strong>&quot;0-99&quot;</strong></li></ul></li></ul>
   */
  HealthCheckCodes?: Array<string>
  /**
   * <p>判定后端服务健康的阈值，当健康检查连续成功多少次后，后端服务的状态由<strong>不健康</strong>变为<strong>健康</strong>。<br>取值范围：<strong>2</strong>-<strong>10</strong>。<br>默认值：<strong>2</strong>。</p>
   */
  HealthCheckHealthyThreshold?: number
  /**
   * <p>健康检查域名。<br>长度限制为 <strong>1-255</strong> 个字符。<br>可包含小写字母、数字、短划线（-）和半角句号（.）。</p><blockquote><p>仅当 <strong>HealthCheckProtocol</strong> 设置为 <strong>HTTP/HTTPS/GRPC/GRPCS</strong> 时，该参数生效。</p></blockquote>
   */
  HealthCheckHost?: string
  /**
   * <p>健康检查 HTTP 协议版本，取值：</p><ul><li><strong>HTTP1.1</strong>（默认）</li><li><strong>HTTP1.0</strong> <blockquote><p>仅当<strong>HealthCheckProtocol</strong>设置为<strong>HTTP</strong> 或 <strong>HTTPS</strong> 时，该参数生效。</p></blockquote></li></ul>
   */
  HealthCheckHttpVersion?: string
  /**
   * <p>健康检查的时间间隔。单位：秒。 取值范围：<strong>2</strong>-<strong>300</strong>。 默认值：<strong>5</strong>。</p>
   */
  HealthCheckInterval?: number
  /**
   * <p>健康检查方法，取值： - <strong>GET</strong> - <strong>HEAD</strong>（默认值） </p><blockquote><p>仅当<strong>HealthCheckProtocol</strong>设置为<strong>HTTP</strong> 或 <strong>HTTPS</strong> 时，该参数生效。</p></blockquote>
   */
  HealthCheckMethod?: string
  /**
   * <p>健康检查的转发规则路径。 长度为 <strong>1-80</strong> 个字符，只能使用字母、数字、字符<code>-/.%?#&amp;=</code>以及扩展字符<code>_;~!（)*[]@$^:&#39;,+</code>。 URL 必须以正斜线（/）开头。 </p><blockquote><p>仅当<strong>HealthCheckProtocol</strong>为<strong>HTTP/HTTPS/GRPC/GRPCS</strong>时，转发规则路径参数生效。</p></blockquote>
   */
  HealthCheckPath?: string
  /**
   * <p>健康检查访问后端服务器的端口。  取值范围：<strong>0-65535</strong>。  默认值：<strong>0</strong>，表示后端服务器的端口。</p>
   */
  HealthCheckPort?: number
  /**
   * <p>健康检查协议。取值：</p><ul><li><strong>HTTP</strong>（默认）：通过发送 HEAD 或 GET 请求模拟浏览器的访问行为来检查服务器应用是否健康。</li><li><strong>HTTPS</strong>：通过发送 HEAD 或 GET 请求模拟浏览器的访问行为来检查服务器应用是否健康。（数据加密，相比 HTTP 更安全。）</li><li><strong>TCP</strong>：通过发送 SYN 握手报文来检测服务器端口是否存活。</li><li><strong>GRPC</strong>：通过发送 POST 或 GET 请求来检查服务器应用是否健康。</li><li><strong>GRPCS</strong>：通过发送 POST 或 GET 请求来检查服务器应用是否健康。</li></ul>
   */
  HealthCheckProtocol?: string
  /**
   * <p>健康检查模板名称。长度为 <strong>1-255</strong> 个字符，可包含数字、大小写字母、中文、半角句号（.）、下划线（_）和短划线（-）。</p>
   */
  HealthCheckTemplateName?: string
  /**
   * <p>健康检查的响应超时时间。单位：秒。<br>取值范围：<strong>2</strong>-<strong>60</strong>。<br>默认值：<strong>2</strong>。</p>
   */
  HealthCheckTimeout?: number
  /**
   * <p>判定后端服务不健康的阈值，当健康检查连续失败多少次后，后端服务的状态由<strong>健康</strong>变为<strong>不健康</strong>。<br>取值范围：<strong>2</strong>-<strong>10</strong>。<br>默认值：<strong>2</strong>。</p>
   */
  HealthCheckUnhealthyThreshold?: number
}

/**
 * AssociateListenerAdditionalCertificates请求参数结构体
 */
export interface AssociateListenerAdditionalCertificatesRequest {
  /**
   * 扩展证书 ID 列表。
   */
  CertificateIds: Array<string>
  /**
   * 监听器 ID，格式为 lst- 后接 8 位字母数字。
   */
  ListenerId: string
  /**
   * 负载均衡实例 ID，格式为 alb- 后接 8 位字母数字。
   */
  LoadBalancerId: string
  /**
   * 客户端 Token，用于保证请求的幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken 只支持 ASCII 字符。
若您未指定，则系统自动使用 API 请求的 RequestId 作为 ClientToken 标识。每次 API 请求的 RequestId 不一样。
   */
  ClientToken?: string
  /**
   * 是否只预检此次请求，取值：
true：发送检查请求，不会为HTTPS和QUIC监听器添加扩展证书。检查项包括是否填写了必需参数、请求格式、业务限制。如果检查不通过，则返回对应错误。如果检查通过，则返回错误码DryRunOperation。
false（默认值）：发送正常请求，通过检查后返回HTTP2xx状态码并直接进行操作。
   */
  DryRun?: string
}

/**
 * 应用型负载均衡可用区子网映射中的 IP 信息数据结构
 */
export interface IPAddressInfo {
  /**
   * IP 地址
   */
  Address?: string
  /**
   * EIP AddressId
   */
  AddressId?: string
}

/**
 * DescribeListenerDetail返回参数结构体
 */
export interface DescribeListenerDetailResponse {
  /**
   * 监听器绑定的CA证书ID列表。
   */
  CaCertificateIds?: Array<string>
  /**
   * 是否开启双向认证。
   */
  CaEnabled?: boolean
  /**
   * 服务器证书 ID 列表。
   */
  CertificateIds?: Array<string>
  /**
   * 监听器实例的创建时间。格式：ISO 8601（例如 2025-01-01T08:30:00+08:00）
   */
  CreateTime?: string
  /**
   * 规则动作列表。
   */
  DefaultActions?: Array<DefaultAction>
  /**
   * 是否启用 Gzip 压缩。
   */
  GzipEnabled?: boolean
  /**
   * 是否开启HTTP/2特性。
   */
  Http2Enabled?: boolean
  /**
   * 指定连接空闲超时时间。单位：秒。
   */
  IdleTimeout?: number
  /**
   * 监听器 ID，格式为 lst- 后接 8 位字母数字。
   */
  ListenerId?: string
  /**
   * 自定义监听名称。
   */
  ListenerName?: string
  /**
   * 负载均衡实例前端使用的端口。
   */
  ListenerPort?: number
  /**
   * 监听协议。
   */
  ListenerProtocol?: string
  /**
   * 监听器状态。取值:=

- **Active**: 运行中。
- **Provisioning**：创建中。
- **Configuring**：变配中。
- **ProvisionFailed**：创建失败
   */
  ListenerStatus?: string
  /**
   * 负载均衡实例 ID，格式为 alb- 后接 8 位字母数字。
   */
  LoadBalancerId?: string
  /**
   * 监听器实例的最后变更时间。格式：ISO 8601（例如 2025-01-01T08:30:00+08:00）
   */
  ModifyTime?: string
  /**
   * 请求超时时间。单位：秒。
   */
  RequestTimeout?: number
  /**
   * 安全策略 ID，格式为 tls- 后接 8 位字母数字。
   */
  SecurityPolicyId?: string
  /**
   * 标签。
   */
  Tags?: Array<TagInfo>
  /**
   * XForwardedFor配置。
   */
  XForwardedForConfig?: XForwardedForConfig
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 转发规则动作
 */
export interface RuleAction {
  /**
   * 转发动作执行顺序，不能重复，按从小到大顺序执行。取值范围：1 ~ 50000。
   */
  Order: number
  /**
   * 转发动作类型。取值：
TargetGroup：转发至目标组。
Redirect：重定向。
FixedResponse：返回固定内容。
Rewrite：重写。
InsertHeader：写入HTTP Header。
RemoveHeader：删除HTTP Header。
转发动作必选包含TargetGroup,Redirect,FixedResponse其中一个，并且执行顺序放在最后。
   */
  Type: string
  /**
   * 固定响应内容配置。
   */
  FixedResponseConfig?: FixedResponseInfo
  /**
   * 插入HTTP Header配置。
   */
  InsertHeaderConfig?: InsertHTTPHeaderInfo
  /**
   * 重定向配置。除HttpCode外，其他配置不能都使用默认值。
   */
  RedirectConfig?: HTTPRedirectInfo
  /**
   * 删除HTTP Header配置。
   */
  RemoveHeaderConfig?: RemoveHTTPHeaderInfo
  /**
   * 重写配置。
   */
  RewriteConfig?: HTTPRewriteInfo
  /**
   * 转发目标组配置。
   */
  TargetGroupConfig?: TargetGroupConfig
}

/**
 * DescribeRules返回参数结构体
 */
export interface DescribeRulesResponse {
  /**
   * 下一次查询的Token值，如果当前是最后一页，返回为空。
   */
  NextToken?: string
  /**
   * 转发规则列表。
   */
  Rules?: Array<RuleOutput>
  /**
   * 总的转发规则个数（根据监听器ID、规则ID等条件过滤后）。
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeTargetGroups返回参数结构体
 */
export interface DescribeTargetGroupsResponse {
  /**
   * 下一次查询的Token值，如果当前是最后一页，返回为空。
注意：此字段可能返回 null，表示取不到有效值。
   */
  NextToken?: string
  /**
   * 目标组信息。
   */
  TargetGroups?: Array<TargetGroupOutput>
  /**
   * 目标组总数。
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * RemoveTargetsFromTargetGroup请求参数结构体
 */
export interface RemoveTargetsFromTargetGroupRequest {
  /**
   * 目标组 ID，格式为 lbtg- 后接 8 位字母数字。
   */
  TargetGroupId: string
  /**
   * 需要从目标组移除的后端服务列表。单次请求最多移除 **50** 个后端服务。
   */
  Targets: Array<TargetToRemove>
  /**
   * 是否预览此次请求。 
- **false**（默认）：发送普通请求，直接移除后端服务。 
- **true**：发送预览请求，检查移除后端服务的参数、格式、业务限制等是否符合要求。
   */
  DryRun?: boolean
}

/**
 * DescribeListenerDetail请求参数结构体
 */
export interface DescribeListenerDetailRequest {
  /**
   * 监听器 ID，格式为 lst- 后接 8 位字母数字。
   */
  ListenerId: string
  /**
   * 负载均衡实例 ID，格式为 alb- 后接 8 位字母数字。
   */
  LoadBalancerId: string
}

/**
 * AddTargetsToTargetGroup请求参数结构体
 */
export interface AddTargetsToTargetGroupRequest {
  /**
   * 目标组 ID，格式为 lbtg- 后接 8 位字母数字。
   */
  TargetGroupId: string
  /**
   * 需要添加至目标组的后端服务列表。单次请求最多支持添加 **50** 个后端服务。
   */
  Targets: Array<TargetToAdd>
  /**
   * 是否预览此次请求。 
- **false**（默认）：发送普通请求，直接添加后端服务至目标组。 
- **true**：发送预览请求，检查添加后端服务的参数、格式、业务限制等是否符合要求。
   */
  DryRun?: boolean
}

/**
 * ModifyListenerAttributes返回参数结构体
 */
export interface ModifyListenerAttributesResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 访问日志配置。
 */
export interface AccessLogConfig {
  /**
   * 负载均衡日志服务(CLS)的日志集ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  LogSetId?: string
  /**
   * 负载均衡日志服务(CLS)的日志主题ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  LogTopicId?: string
}

/**
 * ModifyRulesAttributes返回参数结构体
 */
export interface ModifyRulesAttributesResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * HTTP重写信息
 */
export interface HTTPRewriteInfo {
  /**
   * <p>重写的主机地址，默认值${host}。长度3 ~ 128个字符，支持的字符集为：a-z 0-9 _ . -。</p>
   */
  Host?: string
  /**
   * <p>重写的路径，默认值${path}。长度1 ~ 128个字符，支持的字符集为：a-z A-Z 0-9 ? = _ . - / : 。</p>
   */
  Path?: string
  /**
   * <p>重写的查询字符串，默认值${query}。长度1 ~ 128字符，支持可打印字符，不支持 #[]{}|&lt;&gt;&amp; 和空格。</p>
   */
  Query?: string
}

/**
 * AssociateBandwidthPackageWithLoadBalancer返回参数结构体
 */
export interface AssociateBandwidthPackageWithLoadBalancerResponse {
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
   * 监听器信息。
   */
  Listeners?: Array<ListenerOutput>
  /**
   * 负载均衡实例 ID，格式为 alb- 后接 8 位字母数字。
   */
  LoadBalancerId?: string
  /**
   * 本次读取的最大数据记录数量。
   */
  MaxResults?: number
  /**
   * 下一次查询的令牌。
   */
  NextToken?: string
  /**
   * 总条目数。
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * AssociateBandwidthPackageWithLoadBalancer请求参数结构体
 */
export interface AssociateBandwidthPackageWithLoadBalancerRequest {
  /**
   * 共享带宽包 ID。
   */
  BandwidthPackageId: string
  /**
   * 负载均衡实例 ID，格式为 alb- 后接 8 位字母数字。
   */
  LoadBalancerId: string
  /**
   * 客户端Token，用于保证请求的幂等性。

从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符。

> 若您未指定，则系统自动使用API请求的**RequestId**作为**ClientToken**标识。每次API请求的**RequestId**不一样。
   */
  ClientToken?: string
  /**
   * 是否只预检此次请求。取值：
- **true**：发送检查请求，不会将共享带宽包绑定到负载均衡实例。检查项包括是否填写了必需参数、请求格式、业务限制。如果检查不通过，则返回对应错误。如果检查通过，则返回错误码`DryRunOperation`。
- **false**（默认值）：发送正常请求，通过检查后返回HTTP 2xx状态码并直接进行操作。
   */
  DryRun?: boolean
}

/**
 * 转发配置
 */
export interface XForwardedForConfig {
  /**
   * 是否通过 ALB-ID 头字段获取负载均衡实例ID。
- **true**：是。
- **false**：否。
   */
  XForwardedForAlbIdEnabled?: boolean
  /**
   * 是否通过X-Forwarded-Client-srcport头字段获取访问负载均衡实例客户端的端口。
- **true**：是。
- **false**：否。
   */
  XForwardedForClientSrcPortEnabled?: boolean
  /**
   * 是否开启通过X-Forwarded-Host头字段获取访问负载均衡实例客户端的域名。
- **true**：是。
- **false**：否。
   */
  XForwardedForHostEnabled?: boolean
  /**
   * 指定如何处理 X-Forwarded-For（XFF）HTTP 头字段。
- **append**:  附加模式（默认），将客户端的真实 IP 地址附加到 X-Forwarded-For 头的末尾，保留原有的 XFF 链路信息
- **remove**:  删除模式，移除 X-Forwarded-For 头字段，不将该头传递给后端服务器
- **passthrough**: 透传模式，保持 X-Forwarded-For 头不变，直接透传给后端服务器，不做任何修改

   */
  XForwardedForMode?: string
  /**
   * 是否通过X-Forwarded-Port头字段获取负载均衡实例的监听端口。
- **true**：是。
- **false**：否。
   */
  XForwardedForPortEnabled?: boolean
  /**
   * 是否通过X-Forwarded-Proto头字段获取负载均衡实例的监听协议。
- **true**：是。
- **false**：否。

   */
  XForwardedForProtoEnabled?: boolean
  /**
   * 是否通过 X-Tencent-Client-IDN 头访问 客户端证书的颁发者 $ssl_client_i_dn。
- **true**：是。
- **false**：否。

   */
  XTencentClientIDNEnabled?: boolean
  /**
   * 是否通过 X-Tencent-Client-SDN 头访问客户端证书的主题$ssl_client_s_dn。
- **true**：是。
- **false**：否。

   */
  XTencentClientSDNEnabled?: boolean
  /**
   * 是否通过 X-Tencent-Client-Serial 头访问 客户端证书的序列号 $ssl_client_serial。
- **true**：是。
- **false**：否。

   */
  XTencentClientSerialEnabled?: boolean
  /**
   * 是通过 X-Tencent-Client-Verify 头访问 客户端证书的验证结果 $ssl_client_verify。
- **true**：是。
- **false**：否。

   */
  XTencentClientVerifyEnabled?: boolean
}

/**
 * DescribeTargetGroups请求参数结构体
 */
export interface DescribeTargetGroupsRequest {
  /**
   *  过滤器。通过指定的过滤条件来查询后端服务，支持：
- Name的值为**VpcId**。通过VPC实例来筛选目标组。**Values**的值为VPC唯一ID列表。
- Name的值为**TargetType**。通过后端服务类型来筛选目标组。**Values**的值可以取为**Instance**。
- Name的值为**TargetGroupName**。通过目标组名称来筛选目标组。**Values**的值为目标组名称列表。
- Name的值为**Protocol**。通过目标组后端服务协议来筛选目标组。**Values**的值为目标组后端服务协议列表。
- 通过标签方式筛选。
   */
  Filters?: Array<Filter>
  /**
   * 返回列表的数量，默认为**20**，最大值为**100**。
   */
  MaxResults?: number
  /**
   * 下一次查询的Token值。第一次查询和没有下一次查询时，无需填写。
如果有下一次查询，取值为上一次 API 调用返回的 NextToken 值。
   */
  NextToken?: string
  /**
   * 目标组 ID 列表，ID 格式为 lbtg- 后接 8 位字母数字。
   */
  TargetGroupIds?: Array<string>
}

/**
 * 单个配额项的查询结果。每个结果对应一个配额类型；当请求中传入 ResourceIds 时，每个结果还会对应一个具体资源。
 */
export interface QuotaInfo {
  /**
   * 当前剩余可用量，计算方式为 Limit - Used。仅当请求参数 DisplayFields 包含 available 时返回有效值；未请求时不返回或为空。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Available?: number
  /**
   * 配额上限值。不同配额类型的单位不同，通常表示资源个数；超时时间类配额表示秒。
   */
  Limit?: number
  /**
   * 配额类型，与请求参数 QuotaTypes 中的取值对应。每种配额类型的含义请参考 QuotaTypes 参数说明。
   */
  QuotaType?: string
  /**
   * 资源 ID。
注意：此字段可能返回 null，表示取不到有效值。
   */
  ResourceId?: string
  /**
   * 当前已使用量。仅当请求参数 DisplayFields 包含 used 时返回有效值；未请求时不返回或为空。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Used?: number
}

/**
 * DeleteLoadBalancers返回参数结构体
 */
export interface DeleteLoadBalancersResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeRules请求参数结构体
 */
export interface DescribeRulesRequest {
  /**
   * 监听器 ID，格式为 lst- 后接 8 位字母数字。
   */
  ListenerId: string
  /**
   * 负载均衡实例 ID，格式为 alb- 后接 8 位字母数字。
   */
  LoadBalancerId: string
  /**
   * 支持的过滤条件如下：
   */
  Filters?: Array<Filter>
  /**
   * 返回列表的数量，默认为20，最大值为100。
   */
  MaxResults?: number
  /**
   * 下一次查询的Token值。第一次查询和没有下一次查询时，无需填写。如果有下一次查询，取值为上一次 API 调用返回的 NextToken 值。
   */
  NextToken?: string
  /**
   * 转发规则 ID 列表，ID 格式为 rule- 后接 8 位字母数字。
   */
  RuleIds?: Array<string>
}

/**
 * HTTP Cookie信息
 */
export interface HTTPCookieInfo {
  /**
   * Cookie的键，长度1~64个字符，支持字母、数字、下划线。
   */
  Key: string
  /**
   * Cookie的值，长度1~128个字符，支持可打印字符。
   */
  Value: string
}

/**
 * ModifySecurityPolicyAttributes请求参数结构体
 */
export interface ModifySecurityPolicyAttributesRequest {
  /**
   * <p>安全策略 ID，格式为 tls- 后接 8 位字母数字。</p>
   */
  SecurityPolicyId: string
  /**
   * <p>修改后的加密套件列表。加密套件用于协商客户端与服务端之间的加密算法。</p><p><strong>配置说明：</strong></p><ul><li>加密套件的可选范围取决于所选的 TLS 协议版本（TLSVersions 参数）。</li><li>只要加密套件被任意一个已选 TLS 版本支持，即可添加到列表中。</li><li>若 TLSVersions 包含 TLSv1.3：可不指定 TLSv1.3 专属加密套件（系统将自动补全全部 TLSv1.3 套件）；若指定，则必须包含全部 TLSv1.3 专属加密套件，不支持仅指定部分。</li></ul><p><strong>获取可用加密套件：</strong><br>请调用 <a href="https://cloud.tencent.com/document/api/1822/133718">DescribeSecurityPolicyCapabilities</a> 接口查询各 TLS 版本支持的加密套件列表。</p><p><strong>注意：</strong> 若不传此参数，则保持原有配置不变。</p>
   */
  Ciphers?: Array<string>
  /**
   * <p>是否仅执行预检请求。取值：</p><ul><li><strong>true</strong>：仅执行预检请求，不实际修改资源。预检请求将验证参数格式、权限及配置有效性等，帮助您在正式操作前发现潜在问题。</li><li><strong>false</strong>（默认）：执行正常请求，通过预检后将直接修改安全策略。</li></ul>
   */
  DryRun?: boolean
  /**
   * <p>修改后的安全策略名称。用于标识和区分不同的安全策略。</p><p><strong>命名规则：</strong></p><ul><li>长度为 2~128 个字符。</li><li>必须以英文字母或中文开头。</li><li>可包含英文字母、中文、数字、半角句号（.）、下划线（_）和短划线（-）。</li></ul><p><strong>注意：</strong> 若不传此参数，则保持原有名称不变。</p>
   */
  SecurityPolicyName?: string
  /**
   * <p>修改后的 TLS 协议版本列表。TLS（Transport Layer Security）协议用于保障客户端与负载均衡之间的通信安全。</p><p><strong>可选值：</strong></p><ul><li><strong>TLSv1.0</strong>：兼容性最好，但安全性较低，不推荐在生产环境使用。</li><li><strong>TLSv1.1</strong>：安全性略优于 TLSv1.0，但仍不推荐。</li><li><strong>TLSv1.2</strong>：目前主流的安全协议版本，兼顾安全性与兼容性。</li><li><strong>TLSv1.3</strong>：最新版本，安全性最高，性能更优，推荐优先使用。</li></ul><p><strong>注意：</strong> </p><ul><li>若不传此参数，则保持原有配置不变。</li><li>修改 TLS 版本时，请同步检查 Ciphers 参数的配置是否兼容。</li></ul>
   */
  TLSVersions?: Array<string>
}

/**
 * DescribeSecurityPolicyRelations返回参数结构体
 */
export interface DescribeSecurityPolicyRelationsResponse {
  /**
   * 安全策略关联的监听器列表。返回每个安全策略所关联的 HTTPS 监听器信息。
   */
  SecurityPolicyRelations?: Array<SecurityPolicyRelations>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeSecurityPolicies返回参数结构体
 */
export interface DescribeSecurityPoliciesResponse {
  /**
   * 下一页查询的起始令牌。

- 若返回值不为空，表示还有更多数据，可将此值作为下一次请求的 NextToken 参数继续查询。
- 若返回值为空或未返回此字段，表示已是最后一页。

   */
  NextToken?: string
  /**
   * 安全策略信息列表。包含每个安全策略的详细配置，如策略 ID、名称、TLS 版本、加密套件等。

   */
  SecurityPolicies?: Array<SecurityPolicyInfo>
  /**
   * 符合过滤条件的安全策略总数。

**说明：** 此值表示满足查询条件的总记录数，而非本次返回的记录数。可用于计算分页信息。

   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * HTTP重定向信息
 */
export interface HTTPRedirectInfo {
  /**
   * <p>重定向的HTTP码，支持301、302、303、307、 308。</p>
   */
  HttpCode: number
  /**
   * <p>重定向的主机地址，默认值${host}。长度3 ~ 128个字符，支持的字符集为：a-z 0-9 _ . -。</p>
   */
  Host?: string
  /**
   * <p>重定向的路径，默认值${path}。长度1 ~ 128个字符，支持的字符集为：a-z A-Z 0-9  ? =  _  . - / : 。</p>
   */
  Path?: string
  /**
   * <p>重定向的端口，默认值 ${port}。取值1 ~ 65535。</p>
   */
  Port?: string
  /**
   * <p>重定向的协议，取值：HTTP,HTTPS，默认值${protocol}。</p>
   */
  Protocol?: string
  /**
   * <p>重定向的查询字符串，默认值${query}。长度1 ~ 128字符，支持可打印字符，不支持 #[]{}|&lt;&gt;&amp; 和空格。</p>
   */
  Query?: string
}

/**
 * DescribeZones请求参数结构体
 */
export type DescribeZonesRequest = null

/**
 * 异步任务信息
 */
export interface Job {
  /**
   * 操作接口名称。
   */
  ApiName?: string
  /**
   * 任务流Id
   */
  FlowId?: number
  /**
   * 任务请求Id。
   */
  RequestId?: string
  /**
   * 资源ID列表
   */
  ResourceIds?: Array<string>
  /**
   * 任务状态。取值：Processing、Succeeded、Failed。
   */
  Status?: string
}

/**
 * 关联监听器信息
 */
export interface RelatedListener {
  /**
   * 监听器 ID，格式为 lst- 后接 8 位字母数字。
   */
  ListenerId?: string
  /**
   * 监听器端口。
   */
  ListenerPort?: number
  /**
   * 监听器协议。
   */
  ListenerProtocol?: string
  /**
   * 负载均衡实例 ID，格式为 alb- 后接 8 位字母数字。
   */
  LoadBalancerId?: string
}

/**
 * DescribeListenerCertificates请求参数结构体
 */
export interface DescribeListenerCertificatesRequest {
  /**
   * 证书类型。取值：CA或SVR（服务器证书）。
   */
  CertificateType: string
  /**
   * 监听器 ID，格式为 lst- 后接 8 位字母数字。
   */
  ListenerId: string
  /**
   * 负载均衡实例 ID，格式为 alb- 后接 8 位字母数字。
   */
  LoadBalancerId: string
  /**
   * 本次读取的最大数据记录数量。取值: 1~100。默认值: 20。
   */
  MaxResults?: number
  /**
   * 下一次查询的令牌（Token）。取值：
第一次查询和没有下一次查询时，均无需填写。
如果有下一次查询，取值为上一次 API 调用返回的 NextToken 值。
   */
  NextToken?: string
}

/**
 * ModifyLoadBalancerAddressType请求参数结构体
 */
export interface ModifyLoadBalancerAddressTypeRequest {
  /**
   * 目标网络类型。取值：
- **Internet**（公网型）
负载均衡实例分配公网 IP 地址，域名（DNS）解析至公网 IP，可在公网环境中直接访问，适用于对外提供服务的业务场景。
- **Intranet**（内网型）
负载均衡实例仅分配私网 IP 地址，域名（DNS）解析至私网 IP，仅支持在负载均衡实例所属 VPC 内的内网环境访问，适用于内部业务或对安全性要求较高的场景。
   */
  AddressType: string
  /**
   * 负载均衡实例 ID，格式为 alb- 后接 8 位字母数字。
   */
  LoadBalancerId: string
  /**
   * 共享带宽包 ID。
   */
  BandwidthPackageId?: string
  /**
   * 是否只预检此次请求。取值：
- **true**：发送检查请求，不会更新实例的网络类型。检查项包括是否填写了必需参数、请求格式、业务限制。如果检查不通过，则返回对应错误。如果检查通过，则返回错误码DryRunOperation。
- **false**（默认值）：发送正常请求，通过检查后返回 HTTP 2xx 状态码并直接进行操作。
   */
  DryRun?: boolean
  /**
   * 可用区及子网映射结构体。
若当前地域支持 2 个及以上的可用区，至少需要添加 2 个可用区。
   */
  ZoneMappings?: Array<ZoneMappingsItem>
}

/**
 * CreateRules返回参数结构体
 */
export interface CreateRulesResponse {
  /**
   * 转发规则 ID 列表，ID 格式为 rule- 后接 8 位字母数字。
   */
  RuleIds?: Array<string>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateSecurityPolicy返回参数结构体
 */
export interface CreateSecurityPolicyResponse {
  /**
   * <p>安全策略 ID，格式为 tls- 后接 8 位字母数字。</p>
   */
  SecurityPolicyId?: string
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
   * 监听器 ID 列表，ID 格式为 lst- 后接 8 位字母数字。
   */
  ListenerIds: Array<string>
  /**
   * 负载均衡实例 ID，格式为 alb- 后接 8 位字母数字。
   */
  LoadBalancerId: string
  /**
   * 客户端Token，用于保证请求的幂等性。

从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符。
   */
  ClientToken?: string
}

/**
 * ModifyTargetGroupAttributes返回参数结构体
 */
export interface ModifyTargetGroupAttributesResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 转发规则修改信息
 */
export interface RuleModify {
  /**
   * 转发规则动作列表。
   */
  Actions?: Array<RuleAction>
  /**
   * 转发规则条件列表。
   */
  Conditions?: Array<RuleCondition>
  /**
   * 优先级，值越小优先级越高，取值范围：1~10000。
   */
  Priority?: number
  /**
   * 转发规则 ID，格式为 rule- 后接 8 位字母数字。
   */
  RuleId?: string
  /**
   * 转发规则名称。
   */
  RuleName?: string
}

/**
 * 会话保持配置。
 */
export interface StickySessionConfig {
  /**
   * 是否开启会话保持。
- **true**：开启。
- **false**：不开启。
注意：此字段可能返回 null，表示取不到有效值。
   */
  StickySessionEnabled: boolean
  /**
   * 自定义 Cookie 名称。
长度为 1~255 个字符，只能包含英文字母和数字字符，且不能为`tgw_l7_tg_route`，该字段为目标组间会话保持Cookie保留字段。
>仅当 **StickySessionEnabled** 为 **true** 时该参数生效。
   */
  Cookie?: string
  /**
   * 会话保持时间。
取值范围：**1-86400**，单位：**秒**。
默认值：**1000**。
>仅当 **StickySessionEnabled** 为 **true**时，该参数生效。
注意：此字段可能返回 null，表示取不到有效值。
   */
  CookieTimeout?: number
  /**
   * 会话保持类型（处理Cookie的方式）。
- **Insert**（默认值）：植入 Cookie。 客户端第一次访问后端服务时，应用型负载均衡会在返回请求中植入 Cookie。下次客户端请求时携带该 Cookie，负载均衡将请求转发到上次请求的相同后端服务。
- **Rewrite**：重写 Cookie。 负载均衡会对用户自定义的 Cookie 进行重写，下次客户端请求时携带该 Cookie，负载均衡将请求转发到上次请求的相同后端服务。
>仅当 **StickySessionEnabled** 为 **true** 时该参数生效。
注意：此字段可能返回 null，表示取不到有效值。
   */
  StickySessionType?: string
}

/**
 * AssociateListenerAdditionalCertificates返回参数结构体
 */
export interface AssociateListenerAdditionalCertificatesResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 监听器简要信息出参
 */
export interface ListenerOutput {
  /**
   * 是否开启双向认证。
   */
  CaEnable?: boolean
  /**
   * 监听器实例的创建时间。格式：ISO 8601（例如 2025-01-01T08:30:00+08:00）
   */
  CreateTime?: string
  /**
   * 是否启用 Gzip 压缩。
   */
  GzipEnabled?: boolean
  /**
   * 是否启用http2。
   */
  Http2Enable?: boolean
  /**
   * 空闲超时时间。
   */
  IdleTimeout?: number
  /**
   * 监听器 ID，格式为 lst- 后接 8 位字母数字。
   */
  ListenerId?: string
  /**
   * 监听器名称。
   */
  ListenerName?: string
  /**
   * 监听器端口。
   */
  ListenerPort?: number
  /**
   * 监听器协议。
   */
  ListenerProtocol?: string
  /**
   * 监听器状态。取值:=

- **Active**: 运行中。
- **Provisioning**：创建中。
- **Configuring**：变配中。
- **ProvisionFailed**：创建失败
   */
  ListenerStatus?: string
  /**
   * 监听器实例的最后变更时间。格式：ISO 8601（例如 2025-01-01T08:30:00+08:00）
   */
  ModifyTime?: string
  /**
   * 请求超时时间。
   */
  RequestTimeout?: number
  /**
   * 标签。
   */
  Tags?: Array<TagInfo>
  /**
   * 安全策略 ID。
   */
  TlsSecurityPolicyId?: string
  /**
   * XForwardedFor配置。
   */
  XForwardedForConfig?: XForwardedForConfig
}

/**
 * 描述了后付费计费项的价格信息
 */
export interface PostPayPriceInfo {
  /**
   * 折扣，如20.0代表2折。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Discount?: number
  /**
   * 单价，单位：元。
注意：此字段可能返回 null，表示取不到有效值。
   */
  UnitPrice?: number
  /**
   * 折扣单价，单位:元。
注意：此字段可能返回 null，表示取不到有效值。
   */
  UnitPriceDiscount?: number
}

/**
 * CreateRules请求参数结构体
 */
export interface CreateRulesRequest {
  /**
   * 监听器 ID，格式为 lst- 后接 8 位字母数字。
   */
  ListenerId: string
  /**
   * 负载均衡实例 ID，格式为 alb- 后接 8 位字母数字。
   */
  LoadBalancerId: string
  /**
   * 转发规则列表。
   */
  Rules: Array<RuleInput>
  /**
   * 客户端Token，用于保证请求的幂等性。  从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符。  若您未指定，则系统自动使用API请求的RequestId作为ClientToken标识。每次API请求的RequestId不一样。
   */
  ClientToken?: string
  /**
   * 是否只预检查此次请求。
   */
  DryRun?: boolean
}

/**
 * DeleteSecurityPolicy返回参数结构体
 */
export interface DeleteSecurityPolicyResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 添加至目标组的后端服务
 */
export interface TargetToAdd {
  /**
   * 后端服务器使用的端口。取值范围：**1 - 65535**。

>当目标组的 **targetType** 取值为 **Instance** 时，该参数必传。
   */
  Port: number
  /**
   * 后端服务IP。**TargetIp**和**TargetId**需要至少传一个。

- 当服务器组为 **Instance** 类型时，该参数为 **Eni** 的主内网 IP 或辅助内网 IP。

   */
  TargetIp: string
  /**
   * 后端服务的权重，取值范围：**0 - 100**。默认值为**10**。如果设置权重为**0**，则不会将请求转发给该后端服务。
   */
  Weight?: number
}

/**
 * DisassociateListenerAdditionalCertificates返回参数结构体
 */
export interface DisassociateListenerAdditionalCertificatesResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeSecurityPolicyCapabilities返回参数结构体
 */
export interface DescribeSecurityPolicyCapabilitiesResponse {
  /**
   * 安全策略配置能力列表。返回当前地域支持的所有 TLS 版本及其对应的加密套件信息。

**返回内容包含：**
- 支持的 TLS 协议版本（如 TLSv1.0、TLSv1.1、TLSv1.2、TLSv1.3）。
- 每个 TLS 版本支持的加密套件列表。

**使用场景：**
- 在创建安全策略（CreateSecurityPolicy）前，调用此接口获取可选的加密套件。
- 在修改安全策略（ModifySecurityPolicyAttributes）前，确认新配置的有效性。

   */
  SecurityPolicyCapabilities?: Array<SecurityPolicyCapability>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 删除HTTP Header信息
 */
export interface RemoveHTTPHeaderInfo {
  /**
   * 要删除的HTTP Header的键，长度1 ~ 40个字符，支持的字符集为：a-z A-Z 0-9 - _ 。
不支持Cookie,Host,Content-Length,Connection,Upgrade,transfer-encoding,keep-alive,te,authority,x-forwarded-for,x-forwarded-proto,x-forwarded-host,x-forwarded-port,server
   */
  Key: string
}

/**
 * DescribeTargetGroupTargets请求参数结构体
 */
export interface DescribeTargetGroupTargetsRequest {
  /**
   * 目标组 ID，格式为 lbtg- 后接 8 位字母数字。
   */
  TargetGroupId: string
  /**
   * 过滤器。通过指定的过滤条件来查询后端服务，支持：
- Name的值为**TargetId**。通过资源ID来筛选后端服务，当目标组后端类型为**Instance**时生效。**Values**的值为Cvm或Eni的资源ID。
- Name的值为**TargetIp**。通过资源IP来筛选后端服务，当目标组后端类型为**Ip**时生效。**Values**的值为后端服务的IP。
- 通过标签方式筛选。
   */
  Filters?: Array<Filter>
  /**
   * 返回列表的数量，默认为**20**，最大值为**100**。
   */
  MaxResults?: number
  /**
   * 下一次查询的Token值。第一次查询和没有下一次查询时，无需填写。
如果有下一次查询，取值为上一次 API 调用返回的 NextToken 值。
   */
  NextToken?: string
}

/**
 * DescribeListenerCertificates返回参数结构体
 */
export interface DescribeListenerCertificatesResponse {
  /**
   * 监听器绑定的证书信息列表。
   */
  Certificates?: Array<CertificateInfo>
  /**
   * 本次读取的最大数据记录数量。
   */
  MaxResults?: number
  /**
   * 下一次查询的令牌。
注意：此字段可能返回 null，表示取不到有效值。
   */
  NextToken?: string
  /**
   * 监听器绑定的证书总量。
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * SetLoadBalancerSecurityGroups请求参数结构体
 */
export interface SetLoadBalancerSecurityGroupsRequest {
  /**
   * 负载均衡实例 ID，格式为 alb- 后接 8 位字母数字。
   */
  LoadBalancerId: string
  /**
   * 安全组 ID 列表。
   */
  SecurityGroups: Array<string>
}

/**
 * RemoveTargetsFromTargetGroup返回参数结构体
 */
export interface RemoveTargetsFromTargetGroupResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * AddTargetsToTargetGroup返回参数结构体
 */
export interface AddTargetsToTargetGroupResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeAsyncJobs请求参数结构体
 */
export interface DescribeAsyncJobsRequest {
  /**
   * 分批次查询时每次显示的条目数。取值范围：1~100，默认值：20。
   */
  MaxResults?: number
  /**
   * 是否拥有下一次查询的令牌（Token）。取值：  第一次查询和没有下一次查询时，均无需填写。 如果有下一次查询，取值为上一次 API 调用返回的 NextToken 值。
   */
  NextToken?: string
  /**
   * 异步请求返回的RequestId列表
   */
  RequestIds?: Array<string>
}

/**
 * CreateListener返回参数结构体
 */
export interface CreateListenerResponse {
  /**
   * 监听器 ID，格式为 lst- 后接 8 位字母数字。
   */
  ListenerId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateTargetGroup返回参数结构体
 */
export interface CreateTargetGroupResponse {
  /**
   * <p>目标组 ID，格式为 lbtg- 后接 8 位字母数字。</p>
   */
  TargetGroupId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 目标组配置
 */
export interface TargetGroupConfig {
  /**
   * 目标组列表。
   */
  TargetGroups: Array<TargetGroupTuple>
  /**
   * 目标组间会话保持
   */
  TargetGroupStickySession?: TargetGroupStickySession
}

/**
 * DescribeTargetGroupsByTarget请求参数结构体
 */
export interface DescribeTargetGroupsByTargetRequest {
  /**
   * 后端服务实例 ID，CVM 实例格式为 ins- 后接 8 位字母数字。
   */
  TargetId?: Array<string>
}

/**
 * 目标组之间会话保持
 */
export interface TargetGroupStickySession {
  /**
   * 是否开启会话保持，默认关闭。
   */
  Enabled: boolean
  /**
   * 超时时间，单位秒，取值范围：1~86400，默认值：1000。
   */
  Timeout?: number
}

/**
 * DeleteLoadBalancers请求参数结构体
 */
export interface DeleteLoadBalancersRequest {
  /**
   * 负载均衡实例 ID 列表，ID 格式为 alb- 后接 8 位字母数字。
   */
  LoadBalancerIds: Array<string>
  /**
   * 客户端Token，用于保证请求的幂等性。

从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符。


   */
  ClientToken?: string
  /**
   * 是否只预检此次请求，取值：

- **true**：发送检查请求，不会删除应用型负载均衡实例。检查项包括是否填写了必需参数、请求格式和业务限制。如果检查不通过，则返回对应错误。如果检查通过，则返回错误码`DryRunOperation`。

- **false**（默认值）：发送正常请求，通过检查后返回`HTTP 2xx`状态码并直接进行操作。
   */
  DryRun?: boolean
}

/**
 * 转发规则条件
 */
export interface RuleCondition {
  /**
   * 转发条件类型。取值：
Host：主机。
Path：路径。
Header：HTTP Header字段。
QueryString：HTPP查询字符串。
Method：请求方法。
Cookie：Cookie。
SourceIp：源 IP。
   */
  Type: string
  /**
   * Cookie配置。
   */
  CookieConfig?: Array<HTTPCookieInfo>
  /**
   * HTTP Header配置。
   */
  HeaderConfig?: HTTPHeaderInfo
  /**
   * 主机名。主机配置在一个规则中只能出现一次，长度3 ~ 128个字符，支持精确匹配，正则匹配，通配匹配。
不能以半角句号（.）、下划线（_）开头或结尾。
精确匹配，支持的字符集为：a-z 0-9 . - _ 。
正则匹配，波浪线（~）开头为正则匹配，支持的字符集为：a-z 0-9 . - ? = ~ _ - + \ ^ * ! $ & | ( ) [ ] 。
通配匹配，星号（*）多字符通配，半角问号（?）单字符通配，支持的字符集为：a-z 0-9 . - _ * ?。
   */
  HostConfig?: Array<string>
  /**
   * 请求方法。取值：HEAD、GET、POST、OPTIONS、PUT、PATCH、DELETE。
   */
  MethodConfig?: Array<string>
  /**
   * 转发路径。长度1 ~ 128个字符，支持精确匹配，正则匹配，通配匹配。
精确匹配，支持的字符集为：a-z A-Z 0-9 . - _ / =  :。
正则匹配，需以 ~ 开头，~ 开头表示区分大小写， ~* 开头表示不区分大小写，支持的字符集为： a-z A-Z 0-9 . - _ / = ?  ~ ^ * $ : ( ) [ ] + |。
通配匹配，* 表示多字符通配，? 表示单字符通配，支持的字符集为：a-z A-Z 0-9 . - _ / =  :。
   */
  PathConfig?: Array<string>
  /**
   * 查询字符串配置。
   */
  QueryStringConfig?: Array<HTTPQueryStringInfo>
  /**
   * 源IP匹配配置。CIDR格式，IP地址x.x.x.x/32，IP网段x.x.x.x/24。
   */
  SourceIpConfig?: Array<string>
}

/**
 * 可用区信息
 */
export interface Zone {
  /**
   * 可用区名称
   */
  LocalName?: string
  /**
   * 可用区 ID
   */
  ZoneId?: string
  /**
   * 可用区状态
   */
  ZoneStatus?: string
}

/**
 * 转发规则信息
 */
export interface RuleOutput {
  /**
   * 转发规则动作列表。
   */
  Actions?: Array<RuleAction>
  /**
   * 转发规则条件列表。
   */
  Conditions?: Array<RuleCondition>
  /**
   * 创建时间。
   */
  CreateTime?: string
  /**
   * 转发规则的方向。Request：客户端到负载均衡的请求方向，Response：后端服务器到负载均衡的响应方向。
   */
  Direction?: string
  /**
   * 最后修改时间。
   */
  ModifyTime?: string
  /**
   * 优先级，值越小优先级越高，取值范围：1~10000。
   */
  Priority?: number
  /**
   * 转发规则 ID，格式为 rule- 后接 8 位字母数字。
   */
  RuleId?: string
  /**
   * 转发规则名称。
   */
  RuleName?: string
  /**
   * 转发规则状态，Provisioning：创建中，Active：运行中，Configuring：配置中。
   */
  Status?: string
  /**
   * 标签列表。
   */
  Tags?: Array<TagInfo>
}

/**
 * 不同TLS版本支持的加密套件信息。
 */
export interface SecurityPolicyCapability {
  /**
   * 支持的加密套件列表。
   */
  Ciphers?: Array<string>
  /**
   * 支持的 TLS 协议版本。可选值包括：TLSv1.0、TLSv1.1、TLSv1.2、TLSv1.3。
   */
  TLSVersion?: string
}

/**
 * 修改保护状态信息。
 */
export interface ModificationProtectionInfo {
  /**
   * 是否开启修改保护。开启后，可防止实例被意外修改或删除。
- true：开启修改保护
- false：关闭修改保护
   */
  ModificationProtectionEnabled?: boolean
  /**
   * 1238716123
   */
  OperatorUin?: string
  /**
   * 开启修改保护的原因说明。
长度为 1~255 个字符，必须是中文和无害字符串中的字符， 可包含中文、字母、数字、短划线（-）、正斜线（/）、半角句号（.）、下划线（_）。
   */
  Reason?: string
}

/**
 * ModifyTargetsInTargetGroup返回参数结构体
 */
export interface ModifyTargetsInTargetGroupResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifySecurityPolicyAttributes返回参数结构体
 */
export interface ModifySecurityPolicyAttributesResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteSecurityPolicy请求参数结构体
 */
export interface DeleteSecurityPolicyRequest {
  /**
   * 安全策略 ID 列表，ID 格式为 tls- 后接 8 位字母数字。
   */
  SecurityPolicyIds: Array<string>
  /**
   * 是否仅执行预检请求。取值：
- **true**：仅执行预检请求，不实际删除资源。预检请求将验证参数格式、权限及安全策略是否被引用等，帮助您在正式操作前发现潜在问题。
- **false**（默认）：执行正常请求，通过预检后将直接删除安全策略。

   */
  DryRun?: boolean
}

/**
 * 规则健康检查状态
 */
export interface RuleHealthStatusInfo {
  /**
   * 是否为默认转发规则。
   */
  IsDefaultRule?: string
  /**
   * 转发规则 ID，格式为 rule- 后接 8 位字母数字。
   */
  RuleId?: string
  /**
   * 目标组健康状态。
   */
  TargetGroupHealthInfos?: Array<TargetGroupHealthInfo>
}

/**
 * ModifyLoadBalancerAddressType返回参数结构体
 */
export interface ModifyLoadBalancerAddressTypeResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 证书信息
 */
export interface CertificateInfo {
  /**
   * 证书绑定时间。
   */
  AssociatedTime?: string
  /**
   * 证书 ID。
   */
  CertificateId?: string
  /**
   * 证书类型。取值：CA或SVR（服务器证书）。
   */
  CertificateType?: string
  /**
   * 是否为监听器默认证书。取值：
true：默认证书。
false：扩展证书。
   */
  IsDefault?: boolean
  /**
   * 证书与监听器的绑定状态。取值：Associated（已关联）、Associating（关联中）、Disassociating（解除关联中）、Error（异常）。
   */
  Status?: string
}

/**
 * DescribeHealthCheckTemplates返回参数结构体
 */
export interface DescribeHealthCheckTemplatesResponse {
  /**
   * <p>健康检查模板列表。</p>
   */
  HealthCheckTemplates?: Array<HealthCheckTemplate>
  /**
   * <p>下一次查询的Token值，如果当前是最后一页，返回为空。</p>
   */
  NextToken?: string
  /**
   * <p>经过筛选后查询到的健康检查模板总数。</p>
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeTargetGroupsByTarget返回参数结构体
 */
export interface DescribeTargetGroupsByTargetResponse {
  /**
   * 总数。
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateTargetGroup请求参数结构体
 */
export interface CreateTargetGroupRequest {
  /**
   * <p>目标组类型。取值：</p><ul><li><strong>Instance</strong>（默认）：Cvm服务器类型或者Eni网卡类型。</li></ul>
   */
  TargetType: string
  /**
   * <p>私有网络 ID。</p>
   */
  VpcId: string
  /**
   * <p>是否预览此次请求。</p><ul><li><strong>false</strong>（默认）：发送普通请求，直接创建目标组。</li><li><strong>true</strong>：发送预览请求，检查创建目标组的参数、格式、业务限制等是否符合要求。</li></ul>
   */
  DryRun?: boolean
  /**
   * <p>健康检查配置。</p>
   */
  HealthCheckConfig?: HealthCheckConfig
  /**
   * <p>是否开启长连接。</p>
   */
  KeepaliveEnabled?: boolean
  /**
   * <p>后端服务协议类型。取值：</p><ul><li><strong>HTTP</strong>（默认）：支持绑定HTTP、HTTPS的监听器</li><li><strong>HTTPS</strong>：支持绑定HTTPS类型的监听器</li><li><strong>GRPC</strong>：支持绑定HTTPS类型的监听器</li><li><strong>GRPCS</strong>：支持绑定HTTPS类型的监听器</li></ul>
   */
  Protocol?: string
  /**
   * <p>调度算法。取值：</p><ul><li><strong>wrr</strong>（默认）：加权轮询，按照权重选择后端服务器，权重越高的服务器被轮询到的概率越高。</li><li><strong>wlc</strong>：加权最小连接数，当不同后端服务器权重值相同时，当前连接数越小的后端服务器被轮询到的概率越高。</li></ul>
   */
  SchedulerAlgorithm?: string
  /**
   * <p>会话保持配置。</p>
   */
  StickySessionConfig?: StickySessionConfig
  /**
   * <p>标签。</p>
   */
  Tags?: Array<TagInfo>
  /**
   * <p>目标组名称。默认为目标组ID。长度为 <strong>1-255</strong> 个字符，可包含数字、大小写字母、中文、半角句号（.）、下划线（_）和短划线（-）。</p>
   */
  TargetGroupName?: string
}

/**
 * 服务健康状态信息
 */
export interface TargetHealthStatusInfo {
  /**
   * 后端服务健康状态。DescribeListenerHealthStatus 仅返回非健康后端时，该值为 UnHealthy。
   */
  Status?: string
  /**
   * 后端服务实例 ID，CVM 实例格式为 ins- 后接 8 位字母数字。
   */
  TargetId?: string
  /**
   * 后端目标服务IP。
   */
  TargetIp?: string
  /**
   * 后端服务器端口。
   */
  TargetPort?: number
}

/**
 * CreateListener请求参数结构体
 */
export interface CreateListenerRequest {
  /**
   * 默认转发规则动作列表。目前监听器仅支持添加 1 个默认转发规则动作。
   */
  DefaultActions: Array<DefaultAction>
  /**
   * 负载均衡实例前端使用的端口。  取值：1~65535。
   */
  ListenerPort: number
  /**
   * 监听协议。  取值：HTTP、HTTPS 或 QUIC。
   */
  ListenerProtocol: string
  /**
   * 负载均衡实例 ID，格式为 alb- 后接 8 位字母数字。
   */
  LoadBalancerId: string
  /**
   * 监听器配置的CA证书ID列表。目前监听器仅支持添加 1 个 CA 证书。
当 CaEnabled 参数取值为 true 时，此参数必填。
   */
  CaCertificateIds?: Array<string>
  /**
   * 是否开启双向认证。
取值：
true：开启。
false（默认值）：不开启。
   */
  CaEnabled?: boolean
  /**
   * 服务器证书 ID 列表。
   */
  CertificateIds?: Array<string>
  /**
   * 客户端Token，用于保证请求的幂等性。  

从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符。
   */
  ClientToken?: string
  /**
   * 是否开启Gzip压缩。取值:true(默认值):是。false:否
   */
  GzipEnabled?: boolean
  /**
   * 是否开启HTTP/2特性。HTTP 协议默认 false，HTTPS 协议默认 true。只有 HTTPS 协议支持此参数。
   */
  Http2Enabled?: boolean
  /**
   * 连接空闲超时时间。单位：秒。
取值范围：1~600。
默认值：15。
如果在超时时间内一直没有访问请求，负载均衡会断开当前连接，在下次请求到来时创建新的连接。
   */
  IdleTimeout?: number
  /**
   * 自定义监听名称。  长度为 1~255 个字符，必须是中文和无害字符串中的字符，  可包含中文、字母、数字、短划线（-）、正斜线（/）、半角句号（.）、下划线（_）。
   */
  ListenerName?: string
  /**
   * 请求超时时间。单位：秒。
取值：1~600。
默认值：60。
如果在超时时间内后端服务器没有返回响应，负载均衡将放弃等待，并给客户端返回HTTP 504错误码。
   */
  RequestTimeout?: number
  /**
   * 安全策略 ID，格式为 tls- 后接 8 位字母数字。
   */
  SecurityPolicyId?: string
  /**
   * 标签列表。最大支持20个。
   */
  Tags?: Array<TagInfo>
  /**
   * X-Forwarded-For配置
   */
  XForwardedForConfig?: XForwardedForConfig
}

/**
 * ModifyLoadBalancerModificationProtection返回参数结构体
 */
export interface ModifyLoadBalancerModificationProtectionResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 转发规则创建信息
 */
export interface RuleInput {
  /**
   * 转发规则动作列表。
   */
  Actions: Array<RuleAction>
  /**
   * 转发规则条件列表。
   */
  Conditions: Array<RuleCondition>
  /**
   * 优先级，值越小优先级越高，不能重复，取值范围：1~10000。
   */
  Priority: number
  /**
   * 转发规则的方向。Request：客户端到负载均衡的请求方向，Response：后端服务器到负载均衡的响应方向。默认Request。
   */
  Direction?: string
  /**
   * 转发规则名称。长度为 1~255 个字符，可包含数字、大小写字母、中文、半角句号（.）、下划线（_）和短划线（-）。
   */
  RuleName?: string
  /**
   * 标签。
   */
  Tags?: Array<TagInfo>
}

/**
 * 监听器默认规则动作
 */
export interface DefaultAction {
  /**
   * 转发目标组配置。创建监听器时转发动作中的目标组配置仅支持单个目标组。
   */
  TargetGroupConfig: TargetGroupConfig
  /**
   * 转发动作类型。创建监听器时，默认转发动作类型仅支持转发至目标组。
   */
  Type: string
}

/**
 * 目标组健康检查状态
 */
export interface TargetGroupHealthInfo {
  /**
   * 是否开启健康检查。
   */
  HealthCheckEnabled?: boolean
  /**
   * 目标组 ID，格式为 lbtg- 后接 8 位字母数字。
   */
  TargetGroupId?: string
  /**
   * 服务健康检查状态列表。
   */
  TargetHealthStatusInfos?: Array<TargetHealthStatusInfo>
  /**
   * 转发动作类型。取值：
TargetGroup：转发至目标组。
Redirect：重定向。
FixedResponse：返回固定内容。
Rewrite：重写。
InsertHeader：写入HTTP Header。
RemoveHeader：删除HTTP Header。
转发动作必选包含TargetGroup,Redirect,FixedResponse其中一个，并且执行顺序放在最后。
   */
  Type?: string
}

/**
 * 安全策略与监听的关联关系列表。
 */
export interface SecurityPolicyRelations {
  /**
   * 安全策略与监听的关联关系列表。
   */
  RelatedListeners?: Array<RelatedListener>
  /**
   * 安全策略 ID，格式为 tls- 后接 8 位字母数字。
   */
  SecurityPolicyId?: string
}

/**
 * DescribeSecurityPolicyRelations请求参数结构体
 */
export interface DescribeSecurityPolicyRelationsRequest {
  /**
   * 安全策略 ID 列表，ID 格式为 tls- 后接 8 位字母数字。
   */
  SecurityPolicyIds: Array<string>
}

/**
 * 应用型负载均衡操作锁配置。
 */
export interface LoadBalancerOperationLocksItem {
  /**
   * 锁定的原因。在**LoadBalancerStatus**为**Abnormal**时有效。
注意：此字段可能返回 null，表示取不到有效值。
   */
  LockReason?: string
  /**
   * 锁定的类型。取值 ：

- **SecurityLocked**：安全锁定。

- **RelatedResourceLocked**：关联锁定。

- **FinancialLocked**：欠费锁定。

- **ResidualLocked**：残留锁定。
注意：此字段可能返回 null，表示取不到有效值。
   */
  LockType?: string
}

/**
 * DescribeLoadBalancers请求参数结构体
 */
export interface DescribeLoadBalancersRequest {
  /**
   * 查询过滤条件，支持以下几个字段
- **LoadBalancerId**: 负载均衡实例 ID
- **LoadBalancerName**: 负载均衡名称
- **LoadBalancerStatus**: 负载均衡状态
- **VpcId**: 私有网络 ID
- **tag:tag-key**：按标签键值对筛选，tag-key 请替换为实际的标签键。例如 `tag:env` 表示按标签键 `env` 筛选。
- **AddressType**: 网络类型
    - **Intranet**: 内网
    - **Internet**: 公网 
- **AddressIpVersion**:
    - **IPv4**: IPv4 地址
    - **IPv6** IPv6 地址
   */
  Filters?: Array<Filter>
  /**
   * 分批次查询时每次显示的条目数。取值范围：**1**~**100**，默认值：**20**。


   */
  MaxResults?: number
  /**
   * 是否拥有下一次查询的令牌（Token）。取值：
- 第一次查询和没有下一次查询时，均无需填写。
- 如果有下一次查询，取值为上一次API调用返回的**NextToken**值。
   */
  NextToken?: string
}

/**
 * ModifyTargetsInTargetGroup请求参数结构体
 */
export interface ModifyTargetsInTargetGroupRequest {
  /**
   * 目标组 ID，格式为 lbtg- 后接 8 位字母数字。
   */
  TargetGroupId: string
  /**
   * 需要修改的后端服务列表。
   */
  Targets: Array<TargetToModify>
  /**
   * 是否预览此次请求。 
- **false**（默认）：发送普通请求，直接修改后端服务信息。 
- **true**：发送预览请求，检查修改后端服务的参数、格式、业务限制等是否符合要求。
   */
  DryRun?: boolean
}

/**
 * DescribeSecurityPolicyCapabilities请求参数结构体
 */
export type DescribeSecurityPolicyCapabilitiesRequest = null

/**
 * 健康检查配置
 */
export interface HealthCheckConfig {
  /**
   * 是否开启健康检查。
- **true**：开启。
- **false**：不开启。
   */
  HealthCheckEnabled: boolean
  /**
   * 健康检查状态码。取值：
- 当健康检查协议为**HTTP/HTTPS**时：
	- **http_1xx**
	- **http_2xx**（默认值）
	-  **http_3xx**
	-  **http_4xx**
	-  **http_5xx**
- 当健康检查协议为**gRPC**时：默认值为12，数值范围为0-99，输入值可为数值、多个数值或者范围以及相互组合，如：
	- **"20"**
	- **"0-99"**
> 仅当**HealthCheckProtocol**设置为**HTTP** 、**HTTPS**、**GRPC** 或者**GRPCS**时，该参数生效。
   */
  HealthCheckCodes?: Array<string>
  /**
   * 判定后端服务健康的阈值，当健康检查连续成功多少次后，后端服务的状态由**不健康**变为**健康**。
取值范围：**2**-**10**。
默认值：**2**。
   */
  HealthCheckHealthyThreshold?: number
  /**
   * 健康检查域名。该参数不设置时默认使用后端服务的内网IP作为健康检查地址。
域名限制：
- 长度限制为 **1-255** 个字符。
- 可包含小写字母、数字、短划线（-）和半角句号（.）。
- 至少包含一个半角句号（.），半角句号（.）不能出现在开头或结尾。
- 最右侧的域标签，只能包含字母，不能包含数字或短划线（-）。
- 短划线（-）不能出现在开头或结尾。
>仅当 **HealthCheckProtocol** 设置为 **HTTP、HTTPS** 、**GRPC**、**GRPCS** 时，该参数生效。
   */
  HealthCheckHost?: string
  /**
   * 健康检查 HTTP 协议版本，取值：
- **HTTP1.1**（默认）
- **HTTP1.0** 
> 仅当**HealthCheckProtocol**设置为**HTTP** 或 **HTTPS** 时，该参数生效。
   */
  HealthCheckHttpVersion?: string
  /**
   * 健康检查的时间间隔。单位：秒。
取值范围：**2**-**300**。
默认值：**5**。
   */
  HealthCheckInterval?: number
  /**
   * 健康检查方法，取值：
- **GET**
- **HEAD**（默认值）
> 仅当**HealthCheckProtocol**设置为**HTTP** 或 **HTTPS** 时，该参数生效。
   */
  HealthCheckMethod?: string
  /**
   * 健康检查的转发规则路径。
长度为 1~80 个字符，只能使用字母、数字、字符`-/.%?#&=`以及扩展字符`_;~!（)*[]@$^:',+`。 URL 必须以正斜线（/）开头。
> 仅当**HealthCheckProtocol**为**HTTP**、**HTTPS** 、**GRPC**、**GRPCS**时，转发规则路径参数生效。
   */
  HealthCheckPath?: string
  /**
   * 健康检查访问后端服务器的端口。

取值范围：**0-65535**。

默认值：**0**，表示后端服务器的端口。
   */
  HealthCheckPort?: number
  /**
   * 健康检查协议。取值：
- **HTTP**（默认）：通过发送 HEAD 或 GET 请求模拟浏览器的访问行为来检查服务器应用是否健康。
- **HTTPS**：通过发送 HEAD 或 GET 请求模拟浏览器的访问行为来检查服务器应用是否健康。（数据加密，相比 HTTP 更安全。）
- **TCP**：通过发送 SYN 握手报文来检测服务器端口是否存活。
- **GRPC**：通过发送 POST 请求来检查服务器应用是否健康。
- **GRPCS**：通过发送 POST 请求来检查服务器应用是否健康。
   */
  HealthCheckProtocol?: string
  /**
   * 健康检查的响应超时时间。单位：秒。
取值范围：**2**-**60**。
默认值：**2**。
   */
  HealthCheckTimeout?: number
  /**
   * 判定后端服务不健康的阈值，当健康检查连续失败多少次后，后端服务的状态由**健康**变为**不健康**。
取值范围：**2**-**10**。
默认值：**2**。
   */
  HealthCheckUnhealthyThreshold?: number
}

/**
 * ModifyTargetGroupAttributes请求参数结构体
 */
export interface ModifyTargetGroupAttributesRequest {
  /**
   * <p>是否预览此次请求。</p><ul><li><strong>false</strong>（默认）：发送普通请求，直接修改目标组。</li><li><strong>true</strong>：发送预览请求，检查修改目标组的参数、格式、业务限制等是否符合要求。</li></ul>
   */
  DryRun?: boolean
  /**
   * <p>健康检查配置。</p>
   */
  HealthCheckConfig?: HealthCheckConfig
  /**
   * <p>是否开启长连接。</p>
   */
  KeepaliveEnabled?: boolean
  /**
   * <p>调度算法。取值：</p><ul><li><strong>wrr</strong>：加权轮询，按照权重选择后端服务器，权重越高的服务器被轮询到的概率越高。</li><li><strong>wlc</strong>：加权最小连接数，当不同后端服务器权重值相同时，当前连接数越小的后端服务器被轮询到的概率越高。</li></ul>
   */
  SchedulerAlgorithm?: string
  /**
   * <p>会话保持配置。</p>
   */
  StickySessionConfig?: StickySessionConfig
  /**
   * <p>目标组 ID，格式为 lbtg- 后接 8 位字母数字。</p>
   */
  TargetGroupId?: string
  /**
   * <p>目标组名称。长度为 1~255 个字符，可包含数字、大小写字母、中文、半角句号（.）、下划线（_）和短划线（-）。不传目标组名称时默认使用ID作为目标组名称。</p>
   */
  TargetGroupName?: string
}

/**
 * 健康检查模板信息
 */
export interface HealthCheckTemplate {
  /**
   * 创建时间。
   */
  CreateTime?: string
  /**
   * 健康检查状态码。取值：
- 当健康检查协议为**HTTP/HTTPS**时：
	- **http_1xx**
	- **http_2xx**（默认值）
	-  **http_3xx**
	-  **http_4xx**
	-  **http_5xx**
- 当健康检查协议为**GRPC/GRPCS**时：默认值为**12**，数值范围为**0-99**，输入值可为数值、多个数值或者范围以及相互组合，如：
	- **"20"**
	- **"0-99"**
   */
  HealthCheckCodes?: Array<string>
  /**
   * 判定后端服务健康的阈值，当健康检查连续成功多少次后，后端服务的状态由**不健康**变为**健康**。
取值范围：**2**-**10**。
默认值：**2**。
   */
  HealthCheckHealthyThreshold?: number
  /**
   * 健康检查域名。
长度限制为 **1-255** 个字符。
可包含小写字母、数字、短划线（-）和半角句号（.）。

> 仅当 **HealthCheckProtocol** 设置为 **HTTP/HTTPS/GRPC/GRPCS** 时，该参数生效。
   */
  HealthCheckHost?: string
  /**
   * 健康检查 HTTP 协议版本，取值：
- **HTTP1.1**（默认）
- **HTTP1.0** 
> 仅当**HealthCheckProtocol**设置为**HTTP** 或 **HTTPS** 时，该参数生效。
   */
  HealthCheckHttpVersion?: string
  /**
   * 健康检查的时间间隔。单位：秒。
取值范围：**2**-**300**。
默认值：**5**。
   */
  HealthCheckInterval?: number
  /**
   * 健康检查方法，取值：
- **GET**
- **HEAD**（默认值）
> 仅当**HealthCheckProtocol**设置为**HTTP** 或 **HTTPS** 时，该参数生效。
   */
  HealthCheckMethod?: string
  /**
   * 健康检查的转发规则路径。 长度为 **1-80** 个字符，只能使用字母、数字、字符`-/.%?#&=`以及扩展字符`_;~!（)*[]@$^:',+`。 URL 必须以正斜线（/）开头。 
> 仅当**HealthCheckProtocol**为**HTTP/HTTPS/GRPC/GRPCS**时，转发规则路径参数生效。
   */
  HealthCheckPath?: string
  /**
   * 健康检查访问后端服务器的端口。

取值范围：**0-65535**。

默认值：**0**，表示后端服务器的端口。
   */
  HealthCheckPort?: number
  /**
   * 健康检查协议。取值：
- **HTTP**（默认）：通过发送 HEAD 或 GET 请求模拟浏览器的访问行为来检查服务器应用是否健康。
- **HTTPS**：通过发送 HEAD 或 GET 请求模拟浏览器的访问行为来检查服务器应用是否健康。（数据加密，相比 HTTP 更安全。）
- **TCP**：通过发送 SYN 握手报文来检测服务器端口是否存活。
- **GRPC**：通过发送 POST 或 GET 请求来检查服务器应用是否健康。
- **GRPCS**：通过发送 POST 或 GET 请求来检查服务器应用是否健康。
   */
  HealthCheckProtocol?: string
  /**
   * 健康检查模板 ID，格式为 hct- 后接字母数字。所有接口（创建、查询、修改、删除）均使用 hct- 前缀。
   */
  HealthCheckTemplateId?: string
  /**
   * 健康检查模板名称。长度为 **1-255** 个字符，可包含数字、大小写字母、中文、半角句号（.）、下划线（_）和短划线（-）。
   */
  HealthCheckTemplateName?: string
  /**
   * 健康检查的响应超时时间。单位：秒。
取值范围：**2**-**60**。
默认值：**2**。
   */
  HealthCheckTimeout?: number
  /**
   * 判定后端服务不健康的阈值，当健康检查连续失败多少次后，后端服务的状态由**健康**变为**不健康**。
取值范围：**2**-**10**。
默认值：**2**。
   */
  HealthCheckUnhealthyThreshold?: number
  /**
   * 修改时间。
   */
  ModifyTime?: string
  /**
   * 标签。
   */
  Tags?: Array<TagInfo>
}

/**
 * DescribeZones返回参数结构体
 */
export interface DescribeZonesResponse {
  /**
   * 可用区列表
   */
  Zones?: Array<Zone>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateSecurityPolicy请求参数结构体
 */
export interface CreateSecurityPolicyRequest {
  /**
   * <p>安全策略支持的加密套件列表。加密套件用于协商客户端与服务端之间的加密算法。</p><p><strong>配置说明：</strong></p><ul><li>加密套件的可选范围取决于所选的 TLS 协议版本（TLSVersions 参数）。</li><li>只要加密套件被任意一个已选 TLS 版本支持，即可添加到列表中。</li><li>若 TLSVersions 包含 TLSv1.3：可不指定 TLSv1.3 专属加密套件（系统将自动补全全部 TLSv1.3 套件）；若指定，则必须包含全部 TLSv1.3 专属加密套件，不支持仅指定部分。</li></ul><p><strong>获取可用加密套件：</strong><br>请调用 <a href="https://cloud.tencent.com/document/api/1822/133718">DescribeSecurityPolicyCapabilities</a> 接口查询各 TLS 版本支持的加密套件列表。</p>
   */
  Ciphers: Array<string>
  /**
   * <p>安全策略支持的 TLS 协议版本列表。TLS（Transport Layer Security）协议用于保障客户端与负载均衡之间的通信安全。</p><p><strong>可选值：</strong></p><ul><li><strong>TLSv1.0</strong>：兼容性最好，但安全性较低，不推荐在生产环境使用。</li><li><strong>TLSv1.1</strong>：安全性略优于 TLSv1.0，但仍不推荐。</li><li><strong>TLSv1.2</strong>：目前主流的安全协议版本，兼顾安全性与兼容性。</li><li><strong>TLSv1.3</strong>：最新版本，安全性最高，性能更优，推荐优先使用。</li></ul><p><strong>建议：</strong> 生产环境建议至少选择 TLSv1.2，若客户端支持，优先启用 TLSv1.3。</p>
   */
  TLSVersions: Array<string>
  /**
   * <p>客户端幂等性令牌。</p><p>用于保证请求的幂等性，防止因网络超时或客户端重试导致的重复创建。建议使用 UUID 作为令牌值。相同的 ClientToken 在有效期内重复请求时，服务端将返回相同的结果。</p>
   */
  ClientToken?: string
  /**
   * <p>是否仅执行预检请求。取值：</p><ul><li><strong>true</strong>：仅执行预检请求，不实际创建资源。预检请求将验证参数格式、权限及资源配额等，帮助您在正式操作前发现潜在问题。</li><li><strong>false</strong>（默认）：执行正常请求，通过预检后将直接创建安全策略。</li></ul>
   */
  DryRun?: boolean
  /**
   * <p>安全策略名称。用于标识和区分不同的安全策略。</p><p><strong>命名规则：</strong></p><ul><li>长度为 2~128 个字符。</li><li>必须以英文字母或中文开头。</li><li>可包含英文字母、中文、数字、半角句号（.）、下划线（_）和短划线（-）。</li></ul><p><strong>建议：</strong> 使用具有业务含义的名称，例如 &quot;prod-high-security&quot; 或 &quot;测试环境策略&quot;。</p>
   */
  SecurityPolicyName?: string
  /**
   * <p>安全策略的标签列表。标签用于对资源进行分类和管理，便于按业务、环境、部门等维度筛选和组织资源。</p><p>每个标签由键值对（Key-Value）组成，同一资源下标签键不可重复。</p>
   */
  Tags?: Array<TagInfo>
}

/**
 * 目标组简要信息出参
 */
export interface TargetGroupOutput {
  /**
   * 创建时间。
   */
  CreateTime?: string
  /**
   * 健康检查配置。
   */
  HealthCheckConfig?: HealthCheckConfig
  /**
   * 是否开启长连接。
   */
  KeepaliveEnabled?: boolean
  /**
   * 后端服务协议类型。取值：
- **HTTP**（默认）：支持绑定HTTP、HTTPS的监听器
- **HTTPS**：支持绑定HTTPS类型的监听器
- **GRPC**：支持绑定HTTPS类型的监听器
- **GRPCS**：支持绑定HTTPS类型的监听器
   */
  Protocol?: string
  /**
   * 目标组关联的负载均衡数量。
   */
  RelatedLoadBalancersCount?: number
  /**
   * 调度算法。
   */
  SchedulerAlgorithm?: string
  /**
   * 会话保持配置。
   */
  StickySessionConfig?: StickySessionConfig
  /**
   * 标签。
   */
  Tags?: Array<TagInfo>
  /**
   * 目标组 ID，格式为 lbtg- 后接 8 位字母数字。
   */
  TargetGroupId?: string
  /**
   * 目标组名称。默认为目标组ID。长度为 **1-255** 个字符，可包含数字、大小写字母、中文、半角句号（.）、下划线（_）和短划线（-）。
   */
  TargetGroupName?: string
  /**
   * 目标组状态。取值：
- **Provisioning**：创建中。
- **ProvisionFailed**：创建失败。
- **Active**: 运行中。
- **Configuring**：配置变更中。
   */
  TargetGroupStatus?: string
  /**
   * 目标组类型。取值：
- **Instance**：Cvm服务器类型或Eni弹性网卡类型
   */
  TargetType?: string
  /**
   * 私有网络 ID。
   */
  VpcId?: string
}

/**
 * InquirePriceCreateLoadBalancer返回参数结构体
 */
export interface InquirePriceCreateLoadBalancerResponse {
  /**
   * 询价结果。
   */
  Price?: Price
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeListenerHealthStatus返回参数结构体
 */
export interface DescribeListenerHealthStatusResponse {
  /**
   * 监听器 ID，格式为 lst- 后接 8 位字母数字。
   */
  ListenerId?: string
  /**
   * 监听器端口。
   */
  ListenerPort?: string
  /**
   * 监听器协议。
   */
  ListenerProtocol?: string
  /**
   * 下一次查询的令牌（Token）。为空时表示这是最后一页。
   */
  NextToken?: string
  /**
   * 转发规则健康状态。
   */
  RuleHealthStatusInfos?: Array<RuleHealthStatusInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 安全策略信息。
 */
export interface SecurityPolicyInfo {
  /**
   * 支持的加密套件列表。
支持的加密套件，具体依赖 TLSVersions 的取值。
Cipher 只要被任何一个传入的 TLSVersions 支持即可。

说明：若选择了 TLSv1.3，那么 Cipher 列表必须包含 TLSv1.3 支持的 Cipher。

请调用 DescribeSecurityPolicyCapabilities 接口获取支持的加密套件列表。
   */
  Ciphers?: Array<string>
  /**
   * 创建时间。
   */
  CreateTime?: string
  /**
   * 安全策略 ID，格式为 tls- 后接 8 位字母数字。
   */
  SecurityPolicyId?: string
  /**
   * 安全策略名称。长度为2~128个英文或中文字符，必须以字母或中文开头，可包含数字、半角句号（.）、下划线（_）和短划线（-）。
   */
  SecurityPolicyName?: string
  /**
   * 安全策略状态。当前接口最常返回 Active，表示安全策略处于可用状态。
   */
  Status?: string
  /**
   * 支持的 TLS 协议版本列表。可选值包括：TLSv1.0、TLSv1.1、TLSv1.2、TLSv1.3。
   */
  TLSVersions?: Array<string>
  /**
   * 标签信息。
   */
  Tags?: Array<TagInfo>
}

/**
 * ModifyRulesAttributes请求参数结构体
 */
export interface ModifyRulesAttributesRequest {
  /**
   * 监听器 ID，格式为 lst- 后接 8 位字母数字。
   */
  ListenerId: string
  /**
   * 负载均衡实例 ID，格式为 alb- 后接 8 位字母数字。
   */
  LoadBalancerId: string
  /**
   * 转发规则列表。
   */
  Rules: Array<RuleModify>
  /**
   * 是否只预检查此次请求。
   */
  DryRun?: boolean
}

/**
 * 删除保护状态信息。
 */
export interface DeletionProtectionConfig {
  /**
   * 是否开启删除保护。开启后，可防止实例被意外删除。
- true：开启删除保护
- false：关闭删除保护
   */
  DeletionProtectionEnabled?: boolean
  /**
   * 开启修改保护的原因说明。
长度为 1~255 个字符，必须是中文和无害字符串中的字符， 可包含中文、字母、数字、短划线（-）、正斜线（/）、半角句号（.）、下划线（_）。
   */
  Reason?: string
}

/**
 * DisassociateListenerAdditionalCertificates请求参数结构体
 */
export interface DisassociateListenerAdditionalCertificatesRequest {
  /**
   * 待解绑的扩展证书 ID 列表。
   */
  CertificateIds: Array<string>
  /**
   * 监听器 ID，格式为 lst- 后接 8 位字母数字。
   */
  ListenerId: string
  /**
   * 负载均衡实例 ID，格式为 alb- 后接 8 位字母数字。
   */
  LoadBalancerId: string
  /**
   * 客户端 Token，用于保证请求的幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken 只支持 ASCII 字符。
若您未指定，则系统自动使用 API 请求的 RequestId 作为 ClientToken 标识。每次 API 请求的 RequestId 不一样。  
   */
  ClientToken?: string
  /**
   * 是否只预检此次请求，取值：
true：发送检查请求，不会从 HTTPS和QUIC监听器解绑扩展证书。检查项包括是否填写了必需参数、请求格式、业务限制。如果检查不通过，则返回对应错误。如果检查通过，则返回错误码DryRunOperation。
false（默认值）：发送正常请求，通过检查后返回HTTP 2xx状态码并直接进行操作。
   */
  DryRun?: string
}

/**
 * DescribeLoadBalancerDetail请求参数结构体
 */
export interface DescribeLoadBalancerDetailRequest {
  /**
   * 负载均衡实例 ID，格式为 alb- 后接 8 位字母数字。
   */
  LoadBalancerId: string
}

/**
 * 插入HTTP Header信息
 */
export interface InsertHTTPHeaderInfo {
  /**
   * 插入的HTTP Header键，长度1 ~ 40个字符，支持的字符集为：a-z A-Z 0-9 - _ 。
不支持中文，不支持Cookie,Host,Content-Length,Connection,Upgrade,transfer-encoding,keep-alive,te,authority,x-forwarded-for,x-forwarded-proto,x-forwarded-host,x-forwarded-port。
   */
  Key: string
  /**
   * HTTP Header值的类型。
ValueType为SystemDefined时，取值范围 ClientPort：客户端端口，ClientIp：客户端 IP 地址，Protocol：客户端请求的协议，CLBPort：负载均衡实例监听端口。
ValueType为UserDefined时，长度1 ~ 128的可打印字符，不支持"，开头和结尾不能为空格，结尾不能为\。
ValueType为ReferenceHeader时，引用请求头中的某一个header，长度1~128的可打印字符，不支持"，开头和结尾不能为空格，结尾不能为\。
   */
  Value: string
  /**
   * HTTP Header值的类型，取值：
SystemDefined：系统定义的header。
UserDefined：用户自定义的header。
ReferenceHeader：引用请求头中的某一个header。
   */
  ValueType: string
}

/**
 * DescribeHealthCheckTemplates请求参数结构体
 */
export interface DescribeHealthCheckTemplatesRequest {
  /**
   * <p>过滤器。通过指定的过滤条件来查询健康检查模板，支持：</p><ul><li>Name的值为<strong>HealthCheckTemplateName</strong>。通过名称来筛选健康检查模板。<strong>Values</strong>的值为模板名称列表。</li><li>Name的值为<strong>HealthCheckProtocol</strong>。通过健康检查协议来筛选健康检查模板。<strong>Values</strong>的值为协议列表。</li><li>通过标签方式筛选。</li></ul>
   */
  Filters?: Array<Filter>
  /**
   * <p>健康检查模板 ID 列表，ID 格式为 hct- 后接字母数字。</p>
   */
  HealthCheckTemplateIds?: Array<string>
  /**
   * <p>返回列表的数量，默认为20，最大值为100。</p>
   */
  MaxResults?: string
  /**
   * <p>下一次查询的Token值。第一次查询和没有下一次查询时，无需填写。<br>如果有下一次查询，取值为上一次 API 调用返回的 NextToken 值。</p>
   */
  NextToken?: string
}

/**
 * DescribeSystemSecurityPolicies返回参数结构体
 */
export interface DescribeSystemSecurityPoliciesResponse {
  /**
   * 系统安全策略列表。
   */
  SecurityPolicies?: Array<SecurityPolicyInfo>
  /**
   * 安全策略总数。
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * HTTP查询字符串信息
 */
export interface HTTPQueryStringInfo {
  /**
   * 查询字符串的键，长度1 ~ 16个字符。支持可打印字符，不支持空格和#[]{}\|<>&。
支持 * 多字符通配，? 单字符通配。


   */
  Key: string
  /**
   * 查询字符串的值，长度1 ~ 128字符，支持可打印字符，不支持空格和#[]{}\|<>&。
支持 * 多字符通配，? 单字符通配。
   */
  Value: string
}

/**
 * ModifyHealthCheckTemplate返回参数结构体
 */
export interface ModifyHealthCheckTemplateResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteRules返回参数结构体
 */
export interface DeleteRulesResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeQuota返回参数结构体
 */
export interface DescribeQuotaResponse {
  /**
   * 配额列表。每个元素表示一个配额类型的查询结果；当请求传入 ResourceIds 时，每个元素表示一个配额类型和一个资源ID组合的查询结果。
   */
  Quotas?: Array<QuotaInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteTargetGroups返回参数结构体
 */
export interface DeleteTargetGroupsResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 表示负载均衡的价格
 */
export interface Price {
  /**
   * 描述了实例价格，单位：元/小时。
   */
  InstancePrice?: PostPayPriceInfo
  /**
   * 描述了lcu价格，单位：元/个。
   */
  LcuPrice?: PostPayPriceInfo
}

/**
 * ModifyListenerAttributes请求参数结构体
 */
export interface ModifyListenerAttributesRequest {
  /**
   * 监听器 ID，格式为 lst- 后接 8 位字母数字。
   */
  ListenerId: string
  /**
   * 负载均衡实例 ID，格式为 alb- 后接 8 位字母数字。
   */
  LoadBalancerId: string
  /**
   * 监听器配置的CA证书ID列表。目前仅支持添加1个CA证书。
   */
  CaCertificateIds?: Array<string>
  /**
   * 是否开启双向认证。
取值：
true：开启。
false（默认值）：不开启。
   */
  CaEnabled?: boolean
  /**
   * 服务器证书 ID 列表。
   */
  CertificateIds?: Array<string>
  /**
   * 客户端Token，用于保证请求的幂等性。  

从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符。
   */
  ClientToken?: string
  /**
   * 默认转发规则动作列表。目前监听器仅支持添加 1 个默认转发规则动作。
   */
  DefaultActions?: Array<DefaultAction>
  /**
   * 是否启用 Gzip 压缩。
   */
  GzipEnabled?: boolean
  /**
   * 是否开启HTTP/2特性。只有 HTTPS 协议支持此参数。
   */
  Http2Enabled?: boolean
  /**
   * 指定连接空闲超时时间。单位：秒。
取值范围：1~600。
默认值：15。
如果在设定时间内一直没有访问请求，负载均衡会暂时断开当前连接，下次请求来临时重新建立新的连接。
   */
  IdleTimeout?: number
  /**
   * 自定义监听名称。  长度为 1~255 个字符，必须是中文和无害字符串中的字符，  可包含中文、字母、数字、短划线（-）、正斜线（/）、半角句号（.）、下划线（_）。
   */
  ListenerName?: string
  /**
   * 指定请求超时时间。单位：秒。
取值：1~600。
默认值：60。
如果在超时时间内后端服务器一直没有响应，负载均衡将放弃等待，并给客户端返回HTTP 504错误码。
   */
  RequestTimeout?: number
  /**
   * 安全策略 ID，格式为 tls- 后接 8 位字母数字。
   */
  SecurityPolicyId?: string
  /**
   * XForwardedFor配置。
   */
  XForwardedForConfig?: XForwardedForConfig
}

/**
 * 从目标组移除的后端服务。
 */
export interface TargetToRemove {
  /**
   * 后端服务器使用的端口。取值范围：**1 - 65535**。

>当目标组的 **targetType** 取值为 **Instance** 时，该参数必传。
   */
  Port: number
  /**
   * 后端服务IP。**TargetIp**和**TargetId**需要至少传一个。

- 当服务器组为 **Instance** 类型时，该参数为 **Eni** 的主内网 IP 或辅助内网 IP。

   */
  TargetIp: string
}

/**
 * 应用型负载均衡实例计费配置。
 */
export interface LoadBalancerBillingConfig {
  /**
   * 实例的计费类型。

取值**POSTPAID_BY_HOUR**：表示按量计费。
注意：此字段可能返回 null，表示取不到有效值。
   */
  ChargeType: string
  /**
   * 共享带宽包 ID。
   */
  BandwidthPackageId?: string
}

/**
 * 标签信息
 */
export interface TagInfo {
  /**
   * 标签的键
   */
  TagKey: string
  /**
   * 标签的值
   */
  TagValue: string
}

/**
 * 目标组基础配置
 */
export interface TargetGroupTuple {
  /**
   * 目标组 ID，格式为 lbtg- 后接 8 位字母数字。
   */
  TargetGroupId: string
  /**
   * 权重，取值范围：[0, 100]，默认为 10。
   */
  Weight?: number
}

/**
 * CreateLoadBalancer返回参数结构体
 */
export interface CreateLoadBalancerResponse {
  /**
   * 负载均衡实例 ID，格式为 alb- 后接 8 位字母数字。
   */
  LoadBalancerId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 需要修改的后端服务。
 */
export interface TargetToModify {
  /**
   * 后端服务IP。**TargetIp**和**TargetId**需要至少传一个。

- 当服务器组为 **Instance** 类型时，该参数为 **Eni** 的主内网 IP 或辅助内网 IP。

   */
  TargetIp: string
  /**
   * 后端服务器使用的端口。取值范围：**1 - 65535**。

>当目标组的 **targetType** 取值为 **Instance** 时，该参数必传。
   */
  Port?: number
  /**
   * 后端服务的权重，取值范围：**0 - 100**。如果设置权重为**0**，则不会将请求转发给该后端服务。
   */
  Weight?: number
}

/**
 * DescribeListeners请求参数结构体
 */
export interface DescribeListenersRequest {
  /**
   * 负载均衡实例 ID，格式为 alb- 后接 8 位字母数字。
   */
  LoadBalancerId: string
  /**
   * 过滤条件列表，最大支持20个。支持以下几个字段
- **Protocol**: 协议类型
- **Tags**: 标签
   */
  Filters?: Array<Filter>
  /**
   * 监听器 ID 列表，ID 格式为 lst- 后接 8 位字母数字。
   */
  ListenerIds?: Array<string>
  /**
   * 本次读取的最大数据记录数量。
取值: 1~100。
默认值: 20
   */
  MaxResults?: number
  /**
   * 下一次查询的令牌（Token）。为空时查询第一页。
   */
  NextToken?: string
}

/**
 * ModifyLoadBalancerModificationProtection请求参数结构体
 */
export interface ModifyLoadBalancerModificationProtectionRequest {
  /**
   * 负载均衡实例 ID，格式为 alb- 后接 8 位字母数字。
   */
  LoadBalancerId: string
  /**
   * 是否开启修改保护。开启后，可防止实例被意外修改或删除。\n- true：开启修改保护\n- false：关闭修改保护
   */
  ModificationProtectionEnabled: boolean
  /**
   * 是否只预检此次请求。取值：
- true：仅执行预检，不实际操作资源。检查参数完整性、请求格式及业务限制，通过返回 DryRunOperation，不通过返回对应错误。
- false（默认）：执行正常请求，检查通过后直接操作资源。
   */
  DryRun?: boolean
  /**
   * 开启修改保护的原因说明。
长度为 1~255 个字符，必须是中文和无害字符串中的字符， 可包含中文、字母、数字、短划线（-）、正斜线（/）、半角句号（.）、下划线（_）。
   */
  Reason?: string
}

/**
 * DisassociateBandwidthPackageFromLoadBalancer返回参数结构体
 */
export interface DisassociateBandwidthPackageFromLoadBalancerResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeLoadBalancerDetail返回参数结构体
 */
export interface DescribeLoadBalancerDetailResponse {
  /**
   * 负载均衡详细信息
   */
  LoadBalancerDetail?: LoadBalancerDetail
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 固定应答信息
 */
export interface FixedResponseInfo {
  /**
   * 返回的HTTP响应码，支持 2xx、4xx、5xx。
   */
  HttpCode: number
  /**
   * 返回的固定内容。只支持 ASCII 字符，最大1KB。
   */
  Content?: string
  /**
   * 返回固定内容的格式。
取值：text/plain、text/css、text/html、application/javascript或application/json。
   */
  ContentType?: string
}

/**
 * DescribeLoadBalancers返回参数结构体
 */
export interface DescribeLoadBalancersResponse {
  /**
   * 应用型负载均衡实例列表。
   */
  LoadBalancers?: Array<LoadBalancer>
  /**
   * 分批次查询时每次显示的条目数。


   */
  MaxResults?: number
  /**
   * 是否拥有下一次查询的令牌（Token）。取值：
- 如果**NextToken**为空表示没有下一次查询。
- 如果**NextToken**有返回值，该取值表示下一次查询开始的令牌。
   */
  NextToken?: string
  /**
   * 列表条目数。
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 过滤器条件
 */
export interface Filter {
  /**
   * 过滤器的名称
   */
  Name: string
  /**
   * 过滤器的值数组
   */
  Values: Array<string>
}

/**
 * 可用区及子网映射结构体
 */
export interface ZoneMappingInfo {
  /**
   * <p>子网 ID。</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  SubnetId: string
  /**
   * <p>可用区ID。最多支持添加10个可用区。若当前地域支持2个及以上的可用区，至少需要添加2个可用区。<br>您可以通过调用<a href="https://cloud.tencent.com/document/api/1822/133727">DescribeZones</a>接口获取可用区ID对应的可用区的信息。</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  ZoneId: string
  /**
   * <p>负载均衡 VIP/EIP 信息</p>
   */
  LoadBalancerAddress?: LoadBalancerAddress
  /**
   * <p>可用区状态。取值：</p><ul><li><strong>Active</strong>：运行中。</li><li><strong>Stopped</strong>：已停止。</li><li><strong>Shifted</strong>：已移除。</li><li><strong>Starting</strong>：启动中。</li><li><strong>Stopping</strong>：停止中。</li></ul>
   */
  Status?: string
}

/**
 * DeleteListener返回参数结构体
 */
export interface DeleteListenerResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeSystemSecurityPolicies请求参数结构体
 */
export type DescribeSystemSecurityPoliciesRequest = null

/**
 * DeleteTargetGroups请求参数结构体
 */
export interface DeleteTargetGroupsRequest {
  /**
   * 是否预览此次请求。
- **false**（默认）：发送普通请求，直接删除目标组。
- **true**：发送预览请求，检查删除目标组的参数、格式、业务限制等是否符合要求。
   */
  DryRun?: boolean
  /**
   * 目标组 ID 列表，ID 格式为 lbtg- 后接 8 位字母数字。
   */
  TargetGroupIds?: Array<string>
}

/**
 * DescribeAsyncJobs返回参数结构体
 */
export interface DescribeAsyncJobsResponse {
  /**
   * 任务列表。
   */
  Jobs?: Array<Job>
  /**
   * 分批次查询时每次显示的条目数。
   */
  MaxResults?: number
  /**
   * 是否拥有下一次查询的令牌（Token）。取值：  如果 NextToken 为空表示没有下一次查询。 如果 NextToken 有返回值，该取值表示下一次查询开始的令牌。
   */
  NextToken?: string
  /**
   * 列表条目数。
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeTargetGroupTargets返回参数结构体
 */
export interface DescribeTargetGroupTargetsResponse {
  /**
   * 下一次查询的Token值，如果当前是最后一页，返回为空。
   */
  NextToken?: string
  /**
   * 后端服务信息。
   */
  Targets?: Array<TargetOutput>
  /**
   * 目标组内后端服务总数。
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeSecurityPolicies请求参数结构体
 */
export interface DescribeSecurityPoliciesRequest {
  /**
   * 过滤条件列表，用于筛选符合指定条件的安全策略。多个过滤条件之间为"与"关系。

**支持的过滤条件：**
- **SecurityPolicyNames**：按安全策略名称筛选，支持模糊匹配。
- **tag:tag-key**：按标签键值对筛选，tag-key 请替换为实际的标签键。例如 `tag:env` 表示按标签键 `env` 筛选。

**说明：** 每个过滤条件最多支持 10 个取值。

   */
  Filters?: Array<Filter>
  /**
   * 单次请求返回的最大结果数。用于分页查询，与 NextToken 配合使用。

**取值范围：** 1~100。

**默认值：** 20。

   */
  MaxResults?: number
  /**
   * 分页查询的起始令牌。用于获取下一页结果数据。

**使用说明：**
- 首次查询时无需设置此参数。
- 如果上一次查询返回了 NextToken，表示还有更多数据，请将该值传入此参数以获取下一页。
- 若上一次查询未返回 NextToken 或返回为空，表示已是最后一页。

   */
  NextToken?: string
  /**
   * 安全策略 ID 列表，ID 格式为 tls- 后接 8 位字母数字。
   */
  SecurityPolicyIds?: Array<string>
}

/**
 * DeleteHealthCheckTemplates返回参数结构体
 */
export interface DeleteHealthCheckTemplatesResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 列表展示的应用型负载均衡实例结构。
 */
export interface LoadBalancer {
  /**
   * 访问日志配置结构。
   */
  AccessLogConfig?: AccessLogConfig
  /**
   * IP 地址版本，取值 IPv4 或 IPv6。
注意：此字段可能返回 null，表示取不到有效值。
   */
  AddressIpVersion?: string
  /**
   * 负载均衡的地址类型。取值：

- **Internet**：负载均衡具有公网IP地址，DNS域名被解析到公网IP，因此可以在公网环境访问。

- **Intranet**：负载均衡只有私网IP地址，DNS域名被解析到私网IP，因此只能被负载均衡所在VPC的内网环境访问。
注意：此字段可能返回 null，表示取不到有效值。
   */
  AddressType?: string
  /**
   * 资源创建时间。
注意：此字段可能返回 null，表示取不到有效值。
   */
  CreateTime?: string
  /**
   * 删除保护设置信息。
   */
  DeletionProtection?: DeletionProtectionConfig
  /**
   * DNS域名。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Domain?: string
  /**
   * 负载均衡实例计费配置。
   */
  LoadBalancerBillingConfig?: LoadBalancerBillingConfig
  /**
   * 负载均衡实例 ID，格式为 alb- 后接 8 位字母数字。
注意：此字段可能返回 null，表示取不到有效值。
   */
  LoadBalancerId?: string
  /**
   * 负载均衡实例名称。
注意：此字段可能返回 null，表示取不到有效值。
   */
  LoadBalancerName?: string
  /**
   * 负载均衡操作锁配置。
注意：此字段可能返回 null，表示取不到有效值。
   */
  LoadBalancerOperationLocks?: Array<LoadBalancerOperationLocksItem>
  /**
   * 应用型负载均衡实例状态。取值：

- **Provisioning**：创建中。
- **Active**: 运行中。
- **Configuring**: 变配中。
- **Deleting**：删除中。
- **ProvisionFailed**：创建失败。
- **ConfigureFailed**：变配失败。
- **DeletionFailed**：删除失败。
- **Abnormal**：异常状态，具体异常原因参见LoadBalancerOperationLocks字段。
注意：此字段可能返回 null，表示取不到有效值。
   */
  LoadBalancerStatus?: string
  /**
   * 修改保护设置信息。
   */
  ModificationProtection?: ModificationProtectionInfo
  /**
   * 标签列表。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Tags?: Array<TagInfo>
  /**
   * 私有网络 ID。
注意：此字段可能返回 null，表示取不到有效值。
   */
  VpcId?: string
}
