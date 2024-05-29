/**
 * DeployConfigGroupVersion请求参数结构体
 */
export interface DeployConfigGroupVersionRequest {
    /**
     * 站点 ID。
     */
    ZoneId: string;
    /**
     * 环境 ID。请填写版本需要发布到的环境 ID。
     */
    EnvId: string;
    /**
     * 需要发布的版本信息。可以同时变更多个不同配置组的版本，每个配置组一次仅支持变更一个版本。
     */
    ConfigGroupVersionInfos: Array<ConfigGroupVersionInfo>;
    /**
     * 变更说明。用于描述此次变更的内容、原因，最大支持 100 个字符。
     */
    Description: string;
}
/**
 * 预付费套餐自动续费配置项。
 */
export interface RenewFlag {
    /**
     * 预付费套餐的自动续费标志，取值有：
  <li> on：开启自动续费；</li>
  <li> off：不开启自动续费。</li>
     */
    Switch: string;
}
/**
 * 智能压缩配置。
 */
export interface Compression {
    /**
     * 智能压缩配置开关，取值有：
  <li>on：开启；</li>
  <li>off：关闭。</li>
     */
    Switch: string;
    /**
     * 支持的压缩算法列表，取值有：
  <li>brotli：brotli算法；</li>
  <li>gzip：gzip算法。</li>
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Algorithms?: Array<string>;
}
/**
 * DeleteL4ProxyRules请求参数结构体
 */
export interface DeleteL4ProxyRulesRequest {
    /**
     * 站点 ID。
     */
    ZoneId: string;
    /**
     * 四层代理实例 ID。
     */
    ProxyId: string;
    /**
     * 转发规则 ID 列表。单次最多支持 200 条转发规则。
     */
    RuleIds: Array<string>;
}
/**
 * DescribeOriginGroup返回参数结构体
 */
export interface DescribeOriginGroupResponse {
    /**
     * 记录总数。
     */
    TotalCount?: number;
    /**
     * 源站组信息。
     */
    OriginGroups?: Array<OriginGroup>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeSecurityIPGroupInfo返回参数结构体
 */
export interface DescribeSecurityIPGroupInfoResponse {
    /**
     * 返回的满足条件的 IP 组数量。
     */
    TotalCount?: number;
    /**
     * IP 组的详细配置信息。包含每个 IP 组的 ID 、名称和 IP /网段列表信息。
     */
    IPGroups?: Array<IPGroup>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 慢速攻击配置。
 */
export interface SlowPostConfig {
    /**
     * 开关，取值有：
  <li>on：开启；</li>
  <li>off：关闭。</li>
     */
    Switch: string;
    /**
     * 首包配置。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    FirstPartConfig?: FirstPartConfig;
    /**
     * 基础配置。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SlowRateConfig?: SlowRateConfig;
    /**
     * 慢速攻击的处置动作，取值有：
  <li>monitor：观察；</li>
  <li>drop：拦截。</li>
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Action?: string;
    /**
     * 本规则的Id。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RuleId?: number;
}
/**
 * DescribeConfigGroupVersionDetail返回参数结构体
 */
export interface DescribeConfigGroupVersionDetailResponse {
    /**
     * 版本信息。
     */
    ConfigGroupVersionInfo?: ConfigGroupVersionInfo;
    /**
     * 版本文件的内容。以 JSON 格式返回。
     */
    Content?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 加速域名源站信息。
 */
export interface OriginDetail {
    /**
     * 源站类型，取值有：
  <li>IP_DOMAIN：IPV4、IPV6 或域名类型源站；</li>
  <li>COS：腾讯云 COS 对象存储源站；</li>
  <li>AWS_S3：AWS S3 对象存储源站；</li>
  <li>ORIGIN_GROUP：源站组类型源站；</li>
  <li>VODEO：云点播-混合云版；</li>
  <li>SPACE：源站卸载，当前仅白名单开放；</li>
  <li>LB：负载均衡，当前仅白名单开放。</li>
     */
    OriginType?: string;
    /**
     * 源站地址，根据 OriginType 的取值分为以下情况：
  <li>当 OriginType = IP_DOMAIN 时，该参数为 IPv4、IPv6 地址或域名；</li>
  <li>当 OriginType = COS 时，该参数为 COS 桶的访问域名；</li>
  <li>当 OriginType = AWS_S3，该参数为 S3 桶的访问域名；</li>
  <li>当 OriginType = ORIGIN_GROUP 时，该参数为源站组 ID；</li>
  <li>当 OriginType = VODEO 时，如果 VodeoDistributionRange = ALL，则该参数为 "all-buckets-in-vodeo-application"；如果 VodeoDistributionRange = Bucket，则该参数为对应存储桶域名。</li>
     */
    Origin?: string;
    /**
     * 备用源站组 ID，该参数仅在 OriginType = ORIGIN_GROUP 且配置了备源站组时会生效。
     */
    BackupOrigin?: string;
    /**
     * 主源源站组名称，当 OriginType = ORIGIN_GROUP 时该参数会返回值。
     */
    OriginGroupName?: string;
    /**
     * 备用源站组名称，该参数仅当 OriginType = ORIGIN_GROUP 且配置了备用源站组时会生效。
     */
    BackOriginGroupName?: string;
    /**
     * 指定是否允许访问私有对象存储源站，该参数仅当源站类型OriginType = COS 或 AWS_S3 时会生效，取值有：
  <li>on：使用私有鉴权；</li>
  <li>off：不使用私有鉴权。</li>
  不填写，默认值为 off。
     */
    PrivateAccess?: string;
    /**
     * 私有鉴权使用参数，该参数仅当源站类型 PrivateAccess = on 时会生效。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PrivateParameters?: Array<PrivateParameter>;
    /**
     * MO 子应用 ID
     */
    VodeoSubAppId?: number;
    /**
     * MO 分发范围，取值有： <li>All：全部</li> <li>Bucket：存储桶</li>
     */
    VodeoDistributionRange?: string;
    /**
     * MO 存储桶 ID，分发范围(DistributionRange)为存储桶(Bucket)时必填
     */
    VodeoBucketId?: string;
}
/**
 * 预付费套餐计费参数
 */
export interface PrepaidPlanParam {
    /**
     * 订阅预付费套餐的周期，单位：月，取值有：1，2，3，4，5，6，7，8，9，10，11，12，24，36。
  
  不填写使用默认值 1。
     */
    Period?: number;
    /**
     * 预付费套餐的自动续费标志，取值有：
  <li> on：开启自动续费；</li>
  <li> off：不开启自动续费。</li>
  不填写使用默认值 off，自动续费时，默认续费1个月。
     */
    RenewFlag?: string;
}
/**
 * ModifyAccelerationDomain返回参数结构体
 */
export interface ModifyAccelerationDomainResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * TopN数据Entry
 */
export interface TopEntryValue {
    /**
     * 排序实体名。
     */
    Name: string;
    /**
     * 排序实体数量。
     */
    Count: number;
}
/**
 * DescribeHostsSetting返回参数结构体
 */
export interface DescribeHostsSettingResponse {
    /**
     * 域名列表。
     */
    DetailHosts?: Array<DetailHost>;
    /**
     * 域名数量。
     */
    TotalNumber?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 源站配置。
 */
export interface Origin {
    /**
     * 主源站列表。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Origins?: Array<string>;
    /**
     * 备源站列表。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    BackupOrigins?: Array<string>;
    /**
     * 回源协议配置，取值有：
  <li>http：强制 http 回源；</li>
  <li>follow：协议跟随回源；</li>
  <li>https：强制 https 回源。</li>
  注意：此字段可能返回 null，表示取不到有效值。
     */
    OriginPullProtocol?: string;
    /**
     * 源站为腾讯云 COS 时，是否为私有访问 bucket，取值有：
  <li>on：私有访问；</li>
  <li>off：公共访问。</li>
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CosPrivateAccess?: string;
}
/**
 * DescribeRules返回参数结构体
 */
export interface DescribeRulesResponse {
    /**
     * 站点 ID。
     */
    ZoneId?: string;
    /**
     * 规则列表，按规则执行顺序从先往后排序。
     */
    RuleItems?: Array<RuleItem>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 时序数据信息
 */
export interface TimingDataRecord {
    /**
     * 查询维度值。
     */
    TypeKey: string;
    /**
     * 详细时序数据。
     */
    TypeValue: Array<TimingTypeValue>;
}
/**
 * CreateCLSIndex返回参数结构体
 */
export interface CreateCLSIndexResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeRealtimeLogDeliveryTasks请求参数结构体
 */
export interface DescribeRealtimeLogDeliveryTasksRequest {
    /**
     * 站点 ID。
     */
    ZoneId: string;
    /**
     * 分页查询偏移量。默认值：0。
     */
    Offset?: number;
    /**
     * 分页查询限制数目。默认值：20，最大值：1000。
     */
    Limit?: number;
    /**
     * 过滤条件，Filters.Values 的上限为 20。该参数不填写时，返回当前 zone-id 下所有实时日志投递任务信息。详细的过滤条件如下：
  <li>task-id：按照实时日志投递任务 ID进行过滤。不支持模糊查询。</li>
  <li>task-name：按照实时日志投递任务名称进行过滤。支持模糊查询，使用模糊查询时，仅支持填写一个实时日志投递任务名称。</li>
  <li>entity-list：按照实时日志投递任务对应的实体进行过滤。不支持模糊查询。示例值：domain.example.com 或者 sid-2s69eb5wcms7。</li>
  <li>task-type：按照实时日志投递任务类型进行过滤。不支持模糊查询。可选项如下：<br>   cls: 推送到腾讯云 CLS；<br>   custom_endpoint：推送到自定义 HTTP(S) 地址；<br>   s3：推送到 AWS S3 兼容存储桶地址。</li>
     */
    Filters?: Array<AdvancedFilter>;
}
/**
 * DescribeOriginProtection返回参数结构体
 */
export interface DescribeOriginProtectionResponse {
    /**
     * 源站防护信息。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    OriginProtectionInfo?: Array<OriginProtectionInfo>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeBillingData请求参数结构体
 */
export interface DescribeBillingDataRequest {
    /**
     * 起始时间。
     */
    StartTime: string;
    /**
     * 结束时间。
     */
    EndTime: string;
    /**
     * 站点 ID 集合，此参数必填。
     */
    ZoneIds: Array<string>;
    /**
     * 指标列表，取值有：
  <li>acc_flux: 内容加速流量，单位为 Byte；</li>
  <li>smt_flux: 智能加速流量，单位为 Byte；</li>
  <li>l4_flux: 四层加速流量，单位为 Byte；</li>
  <li>sec_flux: 独立防护流量，单位为 Byte；</li>
  <li>zxctg_flux: 中国大陆网络优化流量，单位为 Byte；</li>
  <li>acc_bandwidth: 内容加速带宽，单位为 bps；</li>
  <li>smt_bandwidth: 智能加速带宽，单位为 bps；</li>
  <li>l4_bandwidth: 四层加速带宽，单位为 bps；</li>
  <li>sec_bandwidth: 独立防护带宽，单位为 bps；</li>
  <li>zxctg_bandwidth: 中国大陆网络优化带宽，单位为 bps；</li>
  <li>sec_request_clean: HTTP/HTTPS 请求，单位为次；</li>
  <li>smt_request_clean: 智能加速请求，单位为次；</li>
  <li>quic_request: QUIC 请求，单位为次；</li>
  <li>bot_request_clean: Bot 请求，单位为次；</li>
  <li>cls_count: 实时日志推送条数，单位为条；</li>
  <li>ddos_bandwidth: 弹性 DDoS 防护带宽，单位为 bps。</li>
     */
    MetricName: string;
    /**
     * 查询时间粒度，取值有：
  <li>5min：5 分钟粒度；</li>
  <li>hour：1 小时粒度；</li>
  <li>day：1 天粒度。</li>
     */
    Interval: string;
    /**
     * 过滤条件，详细的过滤条件取值如下：
  <li>host：按照域名进行过滤。示例值：test.example.com。<br></li>
  <li>proxy-id：按照四层代理实例 ID 进行过滤。示例值：sid-2rugn89bkla9。<br></li>
  <li>region-id：按照计费大区进行过滤。可选项如下：<br>  CH：中国大陆境内<br>  AF：非洲<br>  AS1：亚太一区<br>  AS2：亚太二区<br>  AS3：亚太三区<br>  EU：欧洲<br>  MidEast：中东<br>  NA：北美<br>  SA：南美</li>
     */
    Filters?: Array<BillingDataFilter>;
}
/**
 * 实时日志投递的输出格式。您可以直接通过 FormatType 参数使用指定预设日志输出格式（JSON Lines / csv），也可以在预设日志输出格式基础上，通过其他参数来自定义变体输出格式。
 */
export interface LogFormat {
    /**
     * 日志投递的预设输出格式类型，取值有：
  <li>json：使用预设日志输出格式 JSON Lines，单条日志中的字段以键值对方式呈现；</li>
  <li>csv：使用预设日志输出格式 csv，单条日志中仅呈现字段值，不呈现字段名称。</li>
     */
    FormatType: string;
    /**
     * 在每个日志投递批次之前添加的字符串。每个日志投递批次可能包含多条日志记录。
     */
    BatchPrefix?: string;
    /**
     * 在每个日志投递批次后附加的字符串。
     */
    BatchSuffix?: string;
    /**
     * 在每条日志记录之前添加的字符串。
     */
    RecordPrefix?: string;
    /**
     * 在每条日志记录后附加的字符串。
     */
    RecordSuffix?: string;
    /**
     * 插入日志记录之间作为分隔符的字符串，取值有：
  <li>\n：换行符；</li>
  <li>\t：制表符；</li>
  <li>，：半角逗号。</li>
     */
    RecordDelimiter?: string;
    /**
     * 单条日志记录内，插入字段之间作为分隔符的字符串，取值有：
  <li>\t：制表符；</li>
  <li>，：半角逗号；</li>
  <li>;：半角分号。</li>
     */
    FieldDelimiter?: string;
}
/**
 * DescribeEnvironments请求参数结构体
 */
export interface DescribeEnvironmentsRequest {
    /**
     * 站点 ID。
     */
    ZoneId: string;
}
/**
 * DescribeAliasDomains请求参数结构体
 */
export interface DescribeAliasDomainsRequest {
    /**
     * 站点 ID。
     */
    ZoneId: string;
    /**
     * 分页查询偏移量。默认值：0。
     */
    Offset?: number;
    /**
     * 分页查询限制数目。默认值：20，最大值：1000。
     */
    Limit?: number;
    /**
     * 过滤条件，Filters.Values的上限为20。详细的过滤条件如下：
  <li>target-name：目标域名名称进行过滤；</li>
  <li>alias-name：按照别称域名名称进行过滤。</li>模糊查询时仅支持过滤字段名为 alias-name。
     */
    Filters?: Array<AdvancedFilter>;
}
/**
 * 速率限制规则
 */
export interface RateLimitConfig {
    /**
     * 开关，取值有：
  <li>on：开启；</li>
  <li>off：关闭。</li>
     */
    Switch: string;
    /**
     * 速率限制-用户规则列表。如果为null，默认使用历史配置。
     */
    RateLimitUserRules?: Array<RateLimitUserRule>;
    /**
     * 速率限制模板功能。如果为null，默认使用历史配置。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RateLimitTemplate?: RateLimitTemplate;
    /**
     * 智能客户端过滤。如果为null，默认使用历史配置。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RateLimitIntelligence?: RateLimitIntelligence;
    /**
     * 速率限制-托管定制规则。如果为null，默认使用历史配置。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RateLimitCustomizes?: Array<RateLimitUserRule>;
}
/**
 * CreateRealtimeLogDeliveryTask请求参数结构体
 */
export interface CreateRealtimeLogDeliveryTaskRequest {
    /**
     * 站点 ID。
     */
    ZoneId: string;
    /**
     * 实时日志投递任务的名称，格式为数字、英文、-和_组合，最多 200 个字符。
     */
    TaskName: string;
    /**
     * 实时日志投递任务类型，取值有：
  <li>cls: 推送到腾讯云 CLS；</li>
  <li>custom_endpoint：推送到自定义 HTTP(S) 地址；</li>
  <li>s3：推送到 AWS S3 兼容存储桶地址。</li>
     */
    TaskType: string;
    /**
     * 实时日志投递任务对应的实体（七层域名或者四层代理实例）列表。取值示例如下：
  <li>七层域名：domain.example.com；</li>
  <li>四层代理实例：sid-2s69eb5wcms7。</li>
     */
    EntityList: Array<string>;
    /**
     * 数据投递类型，取值有：
  <li>domain：站点加速日志；</li>
  <li>application：四层代理日志；</li>
  <li>web-rateLiming：速率限制和 CC 攻击防护日志；</li>
  <li>web-attack：托管规则日志；</li>
  <li>web-rule：自定义规则日志；</li>
  <li>web-bot：Bot管理日志。</li>
     */
    LogType: string;
    /**
     * 数据投递区域，取值有：
  <li>mainland：中国大陆境内；</li>
  <li>overseas：全球（不含中国大陆）。</li>
     */
    Area: string;
    /**
     * 投递的预设字段列表。
     */
    Fields: Array<string>;
    /**
     * 投递的自定义字段列表，支持在 HTTP 请求头、响应头、Cookie 中提取指定字段值。自定义字段名称不能重复，且最多不能超过 200 个字段。
     */
    CustomFields?: Array<CustomField>;
    /**
     * 日志投递的过滤条件，不填表示投递全量日志。
     */
    DeliveryConditions?: Array<DeliveryCondition>;
    /**
     * 采样比例，采用千分制，取值范围为1-1000，例如：填写 605 表示采样比例为 60.5%。不填表示采样比例为 100%。
     */
    Sample?: number;
    /**
     * 日志投递的输出格式。不填表示为默认格式，默认格式逻辑如下：
  <li>当 TaskType 取值为 custom_endpoint 时，默认格式为多个 JSON 对象组成的数组，每个 JSON 对象为一条日志；</li>
  <li>当 TaskType 取值为 s3 时，默认格式为 JSON Lines；</li>特别地，当 TaskType 取值为 cls 时，LogFormat.FormatType 的值只能为 json，且 LogFormat 中其他参数将被忽略，建议不传 LogFormat。
     */
    LogFormat?: LogFormat;
    /**
     * CLS 的配置信息。当 TaskType 取值为 cls 时，该参数必填。
     */
    CLS?: CLSTopic;
    /**
     * 自定义 HTTP 服务的配置信息。当 TaskType 取值为 custom_endpoint 时，该参数必填。
     */
    CustomEndpoint?: CustomEndpoint;
    /**
     * AWS S3 兼容存储桶的配置信息。当 TaskType 取值为 s3 时，该参数必填。
     */
    S3?: S3;
}
/**
 * ModifyAccelerationDomainStatuses返回参数结构体
 */
export interface ModifyAccelerationDomainStatusesResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 配置组版本发布记录详情。
 */
export interface DeployRecord {
    /**
     * 发布版本的详细信息。
     */
    ConfigGroupVersionInfos?: Array<ConfigGroupVersionInfo>;
    /**
     * 发布时间。时间为世界标准时间（UTC）， 遵循 ISO 8601 标准的日期和时间格式。
     */
    DeployTime?: string;
    /**
     * 发布状态，取值有：
  <li> deploying ：发布中；</li>
  <li>failure ：发布失败；</li>
  <li>success： 发布成功。</li>
     */
    Status?: string;
    /**
     * 发布结果信息。
     */
    Message?: string;
    /**
     * 发布记录 ID。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RecordId?: string;
    /**
     * 变更说明。
     */
    Description?: string;
}
/**
 * 规则引擎参数详情信息，特殊参数类型。
 */
export interface RuleExtraParameter {
    /**
     * 参数名，取值有：
  <li> Action：修改 HTTP 头部所需参数，RuleAction 选择 RewirteAction；</li>
  <li> StatusCode：状态码相关功能所需参数，RuleAction 选择 CodeAction。</li>
     */
    Id: string;
    /**
     * 参数值类型。
  <li> CHOICE：参数值只能在 Values 中选择； </li>
  <li> CUSTOM_NUM：参数值用户自定义，整型类型；</li>
  <li> CUSTOM_STRING：参数值用户自定义，字符串类型。</li>
     */
    Type: string;
    /**
     * 可选参数值。
  注意：当 Id 的值为 StatusCode 时数组中的值为整型，填写参数值时请填写字符串的整型数值。
     */
    Choices: Array<string>;
}
/**
 * WebSocket配置
 */
export interface WebSocket {
    /**
     * WebSocket 超时时间配置开关，取值有：
  <li>on：使用Timeout作为WebSocket超时时间；</li>
  <li>off：平台仍支持WebSocket连接，此时使用系统默认的15秒为超时时间。</li>
     */
    Switch: string;
    /**
     * 超时时间，单位为秒，最大超时时间120秒。
     */
    Timeout?: number;
}
/**
 * ModifyAccelerationDomain请求参数结构体
 */
export interface ModifyAccelerationDomainRequest {
    /**
     * 加速域名所属站点ID。
     */
    ZoneId: string;
    /**
     * 加速域名名称。
     */
    DomainName: string;
    /**
     * 源站信息。
     */
    OriginInfo?: OriginInfo;
    /**
     * 回源协议，取值有：
  <li>FOLLOW: 协议跟随；</li>
  <li>HTTP: HTTP协议回源；</li>
  <li>HTTPS: HTTPS协议回源。</li>
  <li>不填保持原有配置。</li>
     */
    OriginProtocol?: string;
    /**
     * HTTP回源端口，取值为1-65535，当OriginProtocol=FOLLOW/HTTP时生效, 不填保持原有配置。
     */
    HttpOriginPort?: number;
    /**
     * HTTPS回源端口，取值为1-65535，当OriginProtocol=FOLLOW/HTTPS时生效，不填保持原有配置。
     */
    HttpsOriginPort?: number;
    /**
     * IPv6状态，取值有：
  <li>follow：遵循站点IPv6配置；</li>
  <li>on：开启状态；</li>
  <li>off：关闭状态。</li>
  <li>不填保持原有配置。</li>
     */
    IPv6Status?: string;
}
/**
 * Waf配置。
 */
export interface WafConfig {
    /**
     * WafConfig开关，取值有：
  <li> on：开启；</li>
  <li> off：关闭。</li>开关仅与配置是否生效有关，即使为off（关闭），也可以正常修改配置的内容。
     */
    Switch: string;
    /**
     * 上一次设置的防护级别，取值有：
  <li> loose：宽松；</li>
  <li> normal：正常；</li>
  <li> strict：严格；</li>
  <li> stricter：超严格；</li>
  <li> custom：自定义。</li>
     */
    Level: string;
    /**
     * 全局WAF模式，取值有：
  <li> block：阻断（全局阻断，但可对详细规则配置观察）；</li>
  <li> observe：观察（无论详细规则配置什么，都为观察）。</li>
     */
    Mode: string;
    /**
     * 托管规则详细配置。如果为null，默认使用历史配置。
     */
    WafRule?: WafRule;
    /**
     * AI规则引擎防护配置。如果为null，默认使用历史配置。
     */
    AiRule?: AiRule;
}
/**
 * CreateAliasDomain请求参数结构体
 */
export interface CreateAliasDomainRequest {
    /**
     * 站点 ID。
     */
    ZoneId: string;
    /**
     * 别称域名名称。
     */
    AliasName: string;
    /**
     * 目标域名名称。
     */
    TargetName: string;
    /**
     * 证书配置，取值有：
  <li> none：不配置；</li>
  <li> hosting：SSL托管证书。</li>默认取值为 none。
     */
    CertType?: string;
    /**
     * 当 CertType 取值为 hosting 时需填入相应证书 ID。
     */
    CertId?: Array<string>;
}
/**
 * 实时日志投递到腾讯云 CLS 的配置信息。
 */
export interface CLSTopic {
    /**
     * 腾讯云 CLS 日志集 ID。
     */
    LogSetId: string;
    /**
     * 腾讯云 CLS 日志主题 ID。
     */
    TopicId: string;
    /**
     * 腾讯云 CLS 日志集所在的地域。
     */
    LogSetRegion: string;
}
/**
 * CreatePrefetchTask请求参数结构体
 */
export interface CreatePrefetchTaskRequest {
    /**
     * 站点 ID。
     */
    ZoneId: string;
    /**
     * 要预热的资源列表，每个元素格式类似如下:
  http://www.example.com/example.txt。参数值当前必填。
  注意：提交任务数受计费套餐配额限制，请查看 [EO计费套餐](https://cloud.tencent.com/document/product/1552/77380)。
     */
    Targets?: Array<string>;
    /**
     * 是否对url进行encode，若内容含有非 ASCII 字符集的字符，请开启此开关进行编码转换（编码规则遵循 RFC3986）。
     */
    EncodeUrl?: boolean;
    /**
     * 附带的http头部信息。
     */
    Headers?: Array<Header>;
}
/**
 * DescribeApplicationProxies返回参数结构体
 */
export interface DescribeApplicationProxiesResponse {
    /**
     * 应用代理列表。
     */
    ApplicationProxies?: Array<ApplicationProxy>;
    /**
     * 记录总数。
     */
    TotalCount?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeTopL7AnalysisData请求参数结构体
 */
export interface DescribeTopL7AnalysisDataRequest {
    /**
     * 开始时间。
     */
    StartTime: string;
    /**
     * 结束时间。
     */
    EndTime: string;
    /**
     * 查询的指标，取值有：
  <li> l7Flow_outFlux_country：按国家/地区维度统计流量指标；</li>
  <li> l7Flow_outFlux_statusCode：按状态码维度统计流量指标；</li>
  <li> l7Flow_outFlux_domain：按域名维度统计流量指标；</li>
  <li> l7Flow_outFlux_url：按URL维度统计流量指标; </li>
  <li> l7Flow_outFlux_resourceType：按资源类型维度统计流量指标；</li>
  <li> l7Flow_outFlux_sip：按客户端的源IP维度统计流量指标；</li>
  <li> l7Flow_outFlux_referers：按refer信息维度统计流量指标；</li>
  <li> l7Flow_outFlux_ua_device：按设备类型维度统计流量指标; </li>
  <li> l7Flow_outFlux_ua_browser：按浏览器类型维度统计流量指标；</li>
  <li> l7Flow_outFlux_us_os：按操作系统类型维度统计流量指标；</li>
  <li> l7Flow_request_country：按国家/地区维度统计请求数指标；</li>
  <li> l7Flow_request_statusCode：按状态码维度统计请求数指标；</li>
  <li> l7Flow_request_domain：按域名维度统计请求数指标；</li>
  <li> l7Flow_request_url：按URL维度统计请求数指标; </li>
  <li> l7Flow_request_resourceType：按资源类型维度统计请求数指标；</li>
  <li> l7Flow_request_sip：按客户端的源IP维度统计请求数指标；</li>
  <li> l7Flow_request_referer：按refer信息维度统计请求数指标；</li>
  <li> l7Flow_request_ua_device：按设备类型维度统计请求数指标; </li>
  <li> l7Flow_request_ua_browser：按浏览器类型维度统计请求数指标；</li>
  <li> l7Flow_request_us_os：按操作系统类型维度统计请求数指标。</li>
  
     */
    MetricName: string;
    /**
     * 站点 ID 集合，此参数必填。
     */
    ZoneIds?: Array<string>;
    /**
     * 查询前多少个数据，最大值为1000，不填默认为10， 表示查询前top10的数据。
     */
    Limit?: number;
    /**
     * 过滤条件，详细的过滤条件Key值如下：
  <li>country<br>   按照【<strong>国家/地区</strong>】进行过滤，国家/地区遵循 <a href="https://baike.baidu.com/item/ISO%203166-1/5269555">ISO 3166</a> 规范。</li>
  <li>province<br>   按照【<strong>省份</strong>】进行过滤，此参数只支持服务区域为中国大陆。</li>
  <li>isp<br>   按照【<strong>运营商</strong>】进行过滤，此参数只支持服务区域为中国大陆。<br>   对应的Value可选项如下：<br>   2：中国电信；<br>   26：中国联通；<br>   1046：中国移动；<br>   3947：中国铁通；<br>   38：教育网；<br>   43：长城宽带；<br>   0：其他运营商。</li>
  <li>domain<br>   按照【<strong>子域名</strong>】进行过滤，子域名形如： test.example.com。</li>
  <li>url<br>   按照【<strong>URL Path</strong>】进行过滤，URL Path形如：/content或/content/test.jpg。<br>   若只填写url参数，则最多可查询近30天的数据；<br>   若同时填写url+Zonelds参数，则支持的查询数据范围为套餐支持的<a href="https://cloud.tencent.com/document/product/1552/77380#edgeone-.E5.A5.97.E9.A4.90">数据分析最大查询范围</a>与30天两者中的较小值。</li>
  <li>referer<br>   按照【<strong>Referer头信息</strong>】进行过滤, Referer形如：example.com。<br>   若只填写referer参数，则最多可查询近30天的数据；<br>   若同时填写referer+Zonelds参数，则支持的查询数据范围为套餐支持的<a href="https://cloud.tencent.com/document/product/1552/77380#edgeone-.E5.A5.97.E9.A4.90">数据分析最大查询范围</a>与30天两者中的较小值。</li>
  <li>resourceType<br>   按照【<strong>资源类型</strong>】进行过滤，资源类型一般是文件后缀，形如: .jpg, .css。<br>   若只填写resourceType参数，则最多可查询近30天的数据；<br>   若同时填写resourceType+Zonelds参数，则支持的查询数据范围为套餐支持的<a href="https://cloud.tencent.com/document/product/1552/77380#edgeone-.E5.A5.97.E9.A4.90">数据分析最大查询范围</a>与30天两者中的较小值。</li>
  <li>protocol<br>   按照【<strong>HTTP协议版本</strong>】进行过滤。<br>   对应的Value可选项如下：<br>   HTTP/1.0：HTTP 1.0；<br>   HTTP/1.1：HTTP 1.1；<br>   HTTP/2.0：HTTP 2.0；<br>   HTTP/3.0：HTTP 3.0；<br>   WebSocket：WebSocket。</li>
  <li>socket<br>   按照【<strong>HTTP协议类型</strong>】进行过滤。<br>   对应的Value可选项如下：<br>   HTTP：HTTP 协议；<br>   HTTPS：HTTPS协议；<br>   QUIC：QUIC协议。</li>
  <li>statusCode<br>   按照【<strong>状态码</strong>】进行过滤。<br>   若只填写statusCode参数，则最多可查询近30天的数据；<br>   若同时填写statusCode+Zonelds参数，则支持的查询数据范围为套餐支持的<a href="https://cloud.tencent.com/document/product/1552/77380#edgeone-.E5.A5.97.E9.A4.90">数据分析最大查询范围</a>与30天两者中的较小值。<br>   对应的Value可选项如下：<br>   1XX：1xx类型的状态码；<br>   100：100状态码；<br>   101：101状态码；<br>   102：102状态码；<br>   2XX：2xx类型的状态码；<br>   200：200状态码；<br>   201：201状态码；<br>   202：202状态码；<br>   203：203状态码；<br>   204：204状态码；<br>   205：205状态码；<br>   206：206状态码；<br>   207：207状态码；<br>   3XX：3xx类型的状态码；<br>   300：300状态码；<br>   301：301状态码；<br>   302：302状态码；<br>   303：303状态码；<br>   304：304状态码；<br>   305：305状态码；<br>   307：307状态码；<br>   4XX：4xx类型的状态码；<br>   400：400状态码；<br>   401：401状态码；<br>   402：402状态码；<br>   403：403状态码；<br>   404：404状态码；<br>   405：405状态码；<br>   406：406状态码；<br>   407：407状态码；<br>   408：408状态码；<br>   409：409状态码；<br>   410：410状态码；<br>   411：411状态码；<br>   412：412状态码；<br>   412：413状态码；<br>   414：414状态码；<br>   415：415状态码；<br>   416：416状态码；<br>   417：417状态码；<br>   422：422状态码；<br>   423：423状态码；<br>   424：424状态码；<br>   426：426状态码；<br>   451：451状态码；<br>   5XX：5xx类型的状态码；<br>   500：500状态码；<br>   501：501状态码；<br>   502：502状态码；<br>   503：503状态码；<br>   504：504状态码；<br>   505：505状态码；<br>   506：506状态码；<br>   507：507状态码；<br>   510：510状态码；<br>   514：514状态码；<br>   544：544状态码。</li>
  <li>browserType<br>   按照【<strong>浏览器类型</strong>】进行过滤。<br>   若只填写browserType参数，则最多可查询近30天的数据；<br>   若同时填写browserType+Zonelds参数，则支持的查询数据范围为套餐支持的<a href="https://cloud.tencent.com/document/product/1552/77380#edgeone-.E5.A5.97.E9.A4.90">数据分析最大查询范围</a>与30天两者中的较小值。<br>   对应Value的可选项如下：<br>   Firefox：Firefox浏览器；<br>   Chrome：Chrome浏览器；<br>   Safari：Safari浏览器；<br>   Other：其他浏览器类型；<br>   Empty：浏览器类型为空；<br>   Bot：搜索引擎爬虫；<br>   MicrosoftEdge：MicrosoftEdge浏览器；<br>   IE：IE浏览器；<br>   Opera：Opera浏览器；<br>   QQBrowser：QQ浏览器；<br>   LBBrowser：LB浏览器；<br>   MaxthonBrowser：Maxthon浏览器；<br>   SouGouBrowser：搜狗浏览器；<br>   BIDUBrowser：百度浏览器；<br>   TaoBrowser：淘浏览器；<br>   UBrowser：UC浏览器。</li>
  <li>deviceType<br>   按照【<strong>设备类型</strong>】进行过滤。<br>   若只填写deviceType参数，则最多可查询近30天的数据；<br>   若同时填写deviceType+Zonelds参数，则支持的查询数据范围为套餐支持的<a href="https://cloud.tencent.com/document/product/1552/77380#edgeone-.E5.A5.97.E9.A4.90">数据分析最大查询范围</a>与30天两者中的较小值。<br>   对应Value的可选项如下：<br>   TV：TV设备；<br>   Tablet：Tablet设备；<br>   Mobile：Mobile设备；<br>   Desktop：Desktop设备；<br>   Other：其他设备类型；<br>   Empty：设备类型为空。</li>
  <li>operatingSystemType<br>   按照【<strong>操作系统类型</strong>】进行过滤。<br>   若只填写operatingSystemType参数，则最多可查询近30天的数据；<br>   若同时填写operatingSystemType+Zonelds参数，则支持的查询数据范围为套餐支持的<a href="https://cloud.tencent.com/document/product/1552/77380#edgeone-.E5.A5.97.E9.A4.90">数据分析最大查询范围</a>与30天两者中的较小值。<br>   对应Value的可选项如下：<br>   Linux：Linux操作系统；<br>   MacOS：MacOs操作系统；<br>   Android：Android操作系统；<br>   IOS：IOS操作系统；<br>   Windows：Windows操作系统；<br>   NetBSD：NetBSD；<br>   ChromiumOS：ChromiumOS；<br>   Bot：搜索引擎爬虫；<br>   Other：其他类型的操作系统；<br>   Empty：操作系统为空。</li>
  <li>tlsVersion<br>   按照【<strong>TLS版本</strong>】进行过滤。<br>   若只填写tlsVersion参数，则最多可查询近30天的数据；<br>   若同时填写tlsVersion+Zonelds参数，则支持的查询数据范围为套餐支持的<a href="https://cloud.tencent.com/document/product/1552/77380#edgeone-.E5.A5.97.E9.A4.90">数据分析最大查询范围</a>与30天两者中的较小值。<br>   对应Value的可选项如下：<br>   TLS1.0：TLS 1.0；<br>   TLS1.1：TLS 1.1；<br>   TLS1.2：TLS 1.2；<br>   TLS1.3：TLS 1.3。</li>
  <li>ipVersion<br>   按照【<strong>IP版本</strong>】进行过滤。<br>   对应Value的可选项如下：<br>   4：Ipv4；<br>   6：Ipv6。</li>
  <li>tagKey<br>   按照【<strong>标签Key</strong>】进行过滤。</li>
  <li>tagValue<br>   按照【<strong>标签Value</strong>】进行过滤。</li>
     */
    Filters?: Array<QueryCondition>;
    /**
     * 查询时间粒度，取值有：
  <li>min：1分钟；</li>
  <li>5min：5分钟；</li>
  <li>hour：1小时；</li>
  <li>day：1天。</li>不填将根据开始时间跟结束时间的间距自动推算粒度，具体为：一小时范围内以min粒度查询，两天范围内以5min粒度查询，七天范围内以hour粒度查询，超过七天以day粒度查询。
     */
    Interval?: string;
    /**
     * 数据归属地区，取值有：
  <li>overseas：全球（除中国大陆地区）数据；</li>
  <li>mainland：中国大陆地区数据；</li>
  <li>global：全球数据。</li>不填默认取值为global。
     */
    Area?: string;
}
/**
 * DescribeAccelerationDomains返回参数结构体
 */
export interface DescribeAccelerationDomainsResponse {
    /**
     * 符合查询条件的加速域名个数。
     */
    TotalCount?: number;
    /**
     * 符合查询条件的所有加速域名的信息。
     */
    AccelerationDomains?: Array<AccelerationDomain>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 功能总开关
 */
export interface SwitchConfig {
    /**
     * Web类型的安全总开关，取值有：
  <li>on：开启；</li>
  <li>off：关闭。</li>不影响DDoS与Bot的开关。
     */
    WebSwitch: string;
}
/**
 * IdentifyZone返回参数结构体
 */
export interface IdentifyZoneResponse {
    /**
     * 站点归属校验：Dns校验信息。
     */
    Ascription?: AscriptionInfo;
    /**
     * 站点归属权校验：文件校验信息。
     */
    FileAscription?: FileAscriptionInfo;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ModifyL4Proxy返回参数结构体
 */
export interface ModifyL4ProxyResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeAliasDomains返回参数结构体
 */
export interface DescribeAliasDomainsResponse {
    /**
     * 符合条件的别称域名个数。
     */
    TotalCount?: number;
    /**
     * 别称域名详细信息列表。
     */
    AliasDomains?: Array<AliasDomain>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 环境信息。
 */
export interface EnvInfo {
    /**
     * 环境 ID。
     */
    EnvId?: string;
    /**
     * 环境类型，取值有：
  <li>production: 生产环境；</li><li>staging: 测试环境。</li>
     */
    EnvType?: string;
    /**
     * 环境状态，取值有：
  <li>creating：创建中；</li>
  <li>running：稳定运行中，可进行版本变更；</li>
  <li>version_deploying：版本部署中，不能进行新的变更。</li>
     */
    Status?: string;
    /**
     * 当前环境的配置生效范围：
  <li>当 EnvType 取值为 production 时，该参数值为 ["ALL"]，代表全网生效；</li>
  <li>当 EnvType 取值为 staging 时，会返回测试节点 IP，可用于绑定 host 测试。</li>
     */
    Scope?: Array<string>;
    /**
     * 当前环境中各配置组实际生效的版本，根据 Status 的取值有以下两种情况：
  <li>当 Status 取值为 version_deploying 时，本字段返回的值为执行变更动作之前生效的版本，即新版本部署期间，实际生效的版本为执行变更动作之前的版本；</li>
  <li>当 Status 取值为 running 时，本字段返回的值即为当前实际生效的版本。</li>
     */
    CurrentConfigGroupVersionInfos?: Array<ConfigGroupVersionInfo>;
    /**
     * 创建时间。时间为世界标准时间（UTC）， 遵循 ISO 8601 标准的日期和时间格式。
     */
    CreateTime?: string;
    /**
     * 更新时间。时间为世界标准时间（UTC）， 遵循 ISO 8601 标准的日期和时间格式。
     */
    UpdateTime?: string;
}
/**
 * edgeone套餐信息
 */
export interface PlanInfo {
    /**
     * 结算货币类型，取值有：
  <li> CNY ：人民币结算； </li>
  <li> USD ：美元结算。</li>
     */
    Currency: string;
    /**
     * 套餐所含流量，该流量数值为安全加速流量，内容加速流量和智能加速流量的总和（单位：字节）。
     */
    Flux: number;
    /**
     * 结算周期，取值有：
  <li> y ：按年结算； </li>
  <li> m ：按月结算；</li>
  <li> h ：按小时结算； </li>
  <li> M ：按分钟结算；</li>
  <li> s ：按秒结算。 </li>
     */
    Frequency: string;
    /**
     * 套餐类型，取值有：
  <li> sta ：全球内容分发网络（不包括中国大陆）标准版套餐； </li>
  <li> sta_with_bot ：全球内容分发网络（不包括中国大陆）标准版套餐附带bot管理；</li>
  <li> sta_cm ：中国大陆内容分发网络标准版套餐； </li>
  <li> sta_cm_with_bot ：中国大陆内容分发网络标准版套餐附带bot管理；</li>
  <li> sta_global ：全球内容分发网络（包括中国大陆）标准版套餐； </li>
  <li> sta_global_with_bot ：全球内容分发网络（包括中国大陆）标准版套餐附带bot管理；</li>
  <li> ent ：全球内容分发网络（不包括中国大陆）企业版套餐； </li>
  <li> ent_with_bot ： 全球内容分发网络（不包括中国大陆）企业版套餐附带bot管理；</li>
  <li> ent_cm ：中国大陆内容分发网络企业版套餐； </li>
  <li> ent_cm_with_bot ：中国大陆内容分发网络企业版套餐附带bot管理；</li>
  <li> ent_global ：全球内容分发网络（包括中国大陆）企业版套餐； </li>
  <li> ent_global_with_bot ：全球内容分发网络（包括中国大陆）企业版套餐附带bot管理。</li>
     */
    PlanType: string;
    /**
     * 套餐价格（单位：分）。
     */
    Price: number;
    /**
     * 套餐所含请求次数，该请求次数为安全加速请求次数。（单位：次）。
     */
    Request: number;
    /**
     * 套餐所能绑定的站点个数。
     */
    SiteNumber: number;
    /**
     * 套餐加速区域类型，取值有：
  <li> mainland ：中国大陆； </li>
  <li> overseas ：全球（不包括中国大陆）；</li>
  <li> global ：全球（包括中国大陆）。 </li>
     */
    Area: string;
}
/**
 * DescribeTimingL7CacheData请求参数结构体
 */
export interface DescribeTimingL7CacheDataRequest {
    /**
     * 开始时间。
     */
    StartTime: string;
    /**
     * 结束时间。
     */
    EndTime: string;
    /**
     * 查询的指标，取值有：
  <li>l7Cache_outFlux：响应流量；</li>
  <li>l7Cache_request：响应请求数；</li>
  <li> l7Cache_outBandwidth：响应带宽。</li>
     */
    MetricNames: Array<string>;
    /**
     * 站点 ID 集合，此参数必填。
     */
    ZoneIds?: Array<string>;
    /**
     * 过滤条件，详细的过滤条件如下：
  <li>domain<br>   按照【<strong>子域名</strong>】进行过滤，子域名形如： test.example.com。<br>   类型：String<br>   必选：否</li>
  <li>url<br>   按照【<strong>URL</strong>】进行过滤，此参数只支持30天的时间范围，URL形如：/content。<br>   类型：String<br>   必选：否</li>
  <li>resourceType<br>   按照【<strong>资源类型</strong>】进行过滤，此参数只支持30天的时间范围，资源类型形如：jpg，png。<br>   类型：String<br>   必选：否</li>
  <li>cacheType<br>   按照【<strong>缓存类型</strong>】进行过滤。<br>   类型：String<br>   必选：否<br>   可选项：<br>   hit：命中缓存；<br>   dynamic：资源不可缓存；<br>   miss：未命中缓存。</li>
  <li>statusCode<br>   按照【<strong>状态码</strong>】进行过滤，此参数只支持30天的时间范围。<br>   类型：String<br>   必选：否<br>   可选项：<br>   1XX：1xx类型的状态码；<br>   100：100状态码；<br>   101：101状态码；<br>   102：102状态码；<br>   2XX：2xx类型的状态码；<br>   200：200状态码；<br>   201：201状态码；<br>   202：202状态码；<br>   203：203状态码；<br>   204：204状态码；<br>   100：100状态码；<br>   206：206状态码；<br>   207：207状态码；<br>   3XX：3xx类型的状态码；<br>   300：300状态码；<br>   301：301状态码；<br>   302：302状态码；<br>   303：303状态码；<br>   304：304状态码；<br>   305：305状态码；<br>   307：307状态码；<br>   4XX：4xx类型的状态码；<br>   400：400状态码；<br>   401：401状态码；<br>   402：402状态码；<br>   403：403状态码；<br>   404：404状态码；<br>   405：405状态码；<br>   406：406状态码；<br>   407：407状态码；<br>   408：408状态码；<br>   409：409状态码；<br>   410：410状态码；<br>   411：411状态码；<br>   412：412状态码；<br>   412：413状态码；<br>   414：414状态码；<br>   415：415状态码；<br>   416：416状态码；<br>   417：417状态码；<br>   422：422状态码；<br>   423：423状态码；<br>   424：424状态码；<br>   426：426状态码；<br>   451：451状态码；<br>   5XX：5xx类型的状态码；<br>   500：500状态码；<br>   501：501状态码；<br>   502：502状态码；<br>   503：503状态码；<br>   504：504状态码；<br>   505：505状态码；<br>   506：506状态码；<br>   507：507状态码；<br>   510：510状态码；<br>   514：514状态码；<br>   544：544状态码。</li>
  <li>tagKey<br>   按照【<strong>标签Key</strong>】进行过滤。<br>   类型：String<br>   必选：否</li>
  <li>tagValue<br>   按照【<strong>标签Value</strong>】进行过滤。<br>   类型：String<br>   必选：否</li>
     */
    Filters?: Array<QueryCondition>;
    /**
     * 查询时间粒度，可选的值有：
  <li>min：1分钟的时间粒度；</li>
  <li>5min：5分钟的时间粒度；</li>
  <li>hour：1小时的时间粒度；</li>
  <li>day：1天的时间粒度。</li>不填将根据开始时间跟结束时间的间距自动推算粒度，具体为：一小时范围内以min粒度查询，两天范围内以5min粒度查询，七天范围内以hour粒度查询，超过七天以day粒度查询。
     */
    Interval?: string;
    /**
     * 数据归属地区，取值有：
  <li>overseas：全球（除中国大陆地区）数据；</li>
  <li>mainland：中国大陆地区数据；</li>
  <li>global：全球数据。</li>不填默认取值为global。
     */
    Area?: string;
}
/**
 * 实时日志投递到 AWS S3 兼容存储桶的配置信息。
 */
export interface S3 {
    /**
     * 不包含存储桶名称或路径的 URL，例如：`https://storage.googleapis.com`、`https://s3.ap-northeast-2.amazonaws.com`、`https://cos.ap-nanjing.myqcloud.com`。
     */
    Endpoint: string;
    /**
     * 存储桶所在的地域，例如：`ap-northeast-2`。
     */
    Region: string;
    /**
     * 存储桶名称和日志存储目录，例如：`your_bucket_name/EO-logs/`。如果存储桶中无此目录则会自动创建。
     */
    Bucket: string;
    /**
     * 访问存储桶使用的 Access Key ID。
     */
    AccessId: string;
    /**
     * 访问存储桶使用的 secret key。
     */
    AccessKey: string;
    /**
     * 数据压缩类型，取值有: <li> gzip：gzip压缩。</li>不填表示不启用压缩。
     */
    CompressType?: string;
}
/**
 * DescribeDDoSAttackEvent返回参数结构体
 */
export interface DescribeDDoSAttackEventResponse {
    /**
     * DDOS攻击事件数据列表。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Data?: Array<DDoSAttackEvent>;
    /**
     * 查询结果的总条数。
     */
    TotalCount?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribePrefetchTasks请求参数结构体
 */
export interface DescribePrefetchTasksRequest {
    /**
     * 站点ID。
  必填参数。
     */
    ZoneId?: string;
    /**
     * 查询起始时间，时间与 job-id 必填一个。
     */
    StartTime?: string;
    /**
     * 查询结束时间，时间与 job-id 必填一个。
     */
    EndTime?: string;
    /**
     * 分页查询偏移量，默认为 0。
     */
    Offset?: number;
    /**
     * 分页查询限制数目，默认值：20，上限：1000。
     */
    Limit?: number;
    /**
     * 过滤条件，Filters.Values的上限为20。详细的过滤条件如下：<li>job-id<br>   按照【<strong>任务ID</strong>】进行过滤。job-id形如：1379afjk91u32h，暂不支持多值。<br>   类型：String<br>   必选：否。<br>   模糊查询：不支持。</li><li>target<br>   按照【<strong>目标资源信息</strong>】进行过滤。target形如：http://www.qq.com/1.txt，暂不支持多值。<br>   类型：String<br>   必选：否。<br>   模糊查询：不支持。</li><li>domains<br>   按照【<strong>域名</strong>】进行过滤。domains形如：www.qq.com。<br>   类型：String<br>   必选：否。<br>   模糊查询：不支持。</li><li>statuses<br>   按照【<strong>任务状态</strong>】进行过滤。<br>   必选：否<br>   模糊查询：不支持。<br>   可选项：<br>   processing：处理中<br>   success：成功<br>   failed：失败<br>   timeout：超时</li>
     */
    Filters?: Array<AdvancedFilter>;
}
/**
 * 访问协议强制https跳转配置
 */
export interface ForceRedirect {
    /**
     * 访问强制跳转配置开关，取值有：
  <li>on：开启；</li>
  <li>off：关闭。</li>
     */
    Switch: string;
    /**
     * 重定向状态码，取值有：
  <li>301：301跳转；</li>
  <li>302：302跳转。</li>
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RedirectStatusCode?: number;
}
/**
 * 规则引擎带有状态码的动作
 */
export interface CodeAction {
    /**
     * 功能名称，功能名称填写规范可调用接口 [查询规则引擎的设置参数](https://cloud.tencent.com/document/product/1552/80618) 查看。
     */
    Action: string;
    /**
     * 操作参数。
     */
    Parameters: Array<RuleCodeActionParams>;
}
/**
 * 缓存预刷新
 */
export interface CachePrefresh {
    /**
     * 缓存预刷新配置开关，取值有：
  <li>on：开启；</li>
  <li>off：关闭。</li>
     */
    Switch: string;
    /**
     * 缓存预刷新百分比，取值范围：1-99。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Percent?: number;
}
/**
 * DescribeTimingL7AnalysisData返回参数结构体
 */
export interface DescribeTimingL7AnalysisDataResponse {
    /**
     * 查询结果的总条数。
     */
    TotalCount?: number;
    /**
     * 时序流量数据列表。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Data?: Array<TimingDataRecord>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 图片优化配置。
 */
export interface ImageOptimize {
    /**
     * 开关，取值有：
  <li>on：开启；</li>
  <li>off：关闭。</li>
     */
    Switch: string;
}
/**
 * bot 用户画像规则
 */
export interface BotPortraitRule {
    /**
     * 本功能的开关，取值有：
  <li>on：开启；</li>
  <li>off：关闭。</li>
     */
    Switch: string;
    /**
     * 本规则的ID。仅出参使用。
     */
    RuleID?: number;
    /**
     * JS挑战的规则ID。默认所有规则不配置JS挑战。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AlgManagedIds?: Array<number | bigint>;
    /**
     * 数字验证码的规则ID。默认所有规则不配置数字验证码。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CapManagedIds?: Array<number | bigint>;
    /**
     * 观察的规则ID。默认所有规则不配置观察。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    MonManagedIds?: Array<number | bigint>;
    /**
     * 拦截的规则ID。默认所有规则不配置拦截。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DropManagedIds?: Array<number | bigint>;
}
/**
 * 规则引擎可应用于匹配请求的设置详细信息。
 */
export interface RulesProperties {
    /**
     * 值为参数名称。
     */
    Name?: string;
    /**
     * 数值参数的最小值，非数值参数或 Min 和 Max 值都为 0 则此项无意义。
     */
    Min?: number;
    /**
     * 参数值的可选值。
  注意：若参数值为用户自定义则该数组为空数组。
     */
    ChoicesValue?: Array<string>;
    /**
     * 参数值类型。
  <li> CHOICE：参数值只能在 ChoicesValue 中选择； </li>
  <li> TOGGLE：参数值为开关类型，可在 ChoicesValue 中选择；</li>
  <li> OBJECT：参数值为对象类型，ChoiceProperties 为改对象类型关联的属性；</li>
  <li> CUSTOM_NUM：参数值用户自定义，整型类型；</li>
  <li> CUSTOM_STRING：参数值用户自定义，字符串类型。</li>注意：当参数类型为 OBJECT 类型时，请注意参考 [示例2 参数为 OBJECT 类型的创建](https://cloud.tencent.com/document/product/1552/80622#.E7.A4.BA.E4.BE.8B2-.E5.8F.82.E6.95.B0.E4.B8.BA-OBJECT-.E7.B1.BB.E5.9E.8B.E7.9A.84.E5.88.9B.E5.BB.BA)
     */
    Type?: string;
    /**
     * 数值参数的最大值，非数值参数或 Min 和 Max 值都为 0 则此项无意义。
     */
    Max?: number;
    /**
     * 参数值是否支持多选或者填写多个。
     */
    IsMultiple?: boolean;
    /**
     * 是否允许为空。
     */
    IsAllowEmpty?: boolean;
    /**
     * 该参数对应的关联配置参数，属于调用接口的必填参数。
  注意：如果可选参数无特殊新增参数则该数组为空数组。
     */
    ChoiceProperties?: Array<RuleChoicePropertiesItem>;
    /**
     * <li> 为 NULL：无特殊参数，RuleAction 选择 NormalAction；</li>
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ExtraParameter?: RuleExtraParameter;
}
/**
 * 规则引擎条件使用StatusCode字段动作参数
 */
export interface RuleCodeActionParams {
    /**
     * 状态 Code。
     */
    StatusCode: number;
    /**
     * 参数名称，参数填写规范可调用接口 [查询规则引擎的设置参数](https://cloud.tencent.com/document/product/1552/80618) 查看。
     */
    Name: string;
    /**
     * 参数值。
     */
    Values: Array<string>;
}
/**
 * 源站组引用服务。
 */
export interface OriginGroupReference {
    /**
     * 引用服务类型，取值有：
  <li>AccelerationDomain: 加速域名；</li>
  <li>RuleEngine: 规则引擎；</li>
  <li>Loadbalance: 负载均衡；</li>
  <li>ApplicationProxy: 四层代理。</li>
     */
    InstanceType?: string;
    /**
     * 引用类型的实例ID。
     */
    InstanceId?: string;
    /**
     * 应用类型的实例名称。
     */
    InstanceName?: string;
}
/**
 * 例外规则的配置，包含生效的条件，生效的范围。
 */
export interface ExceptUserRule {
    /**
     * 规则名称，不可使用中文。
     */
    RuleName: string;
    /**
     * 规则的处置方式，当前仅支持skip：跳过全部托管规则。
     */
    Action: string;
    /**
     * 规则生效状态，取值有：
  <li>on：生效；</li>
  <li>off：失效。</li>
     */
    RuleStatus: string;
    /**
     * 规则ID。仅出参使用。默认由底层生成。
     */
    RuleID?: number;
    /**
     * 更新时间，如果为null，默认由底层按当前时间生成。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UpdateTime?: string;
    /**
     * 匹配条件。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ExceptUserRuleConditions?: Array<ExceptUserRuleCondition>;
    /**
     * 规则生效的范围。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ExceptUserRuleScope?: ExceptUserRuleScope;
    /**
     * 优先级，取值范围0-100。如果为null，默认由底层设置为0。
     */
    RulePriority?: number;
}
/**
 * 加速类型
 */
export interface AccelerateType {
    /**
     * 加速开关。取值范围：
  <li> on：打开;</li>
  <li>off：关闭。</li>
     */
    Switch: string;
}
/**
 * 嵌套规则信息。
 */
export interface SubRule {
    /**
     * 执行功能判断条件。
  注意：满足该数组内任意一项条件，功能即可执行。
     */
    Conditions: Array<RuleAndConditions>;
    /**
     * 执行的功能。
     */
    Actions: Array<Action>;
}
/**
 * 配置组版本信息。
 */
export interface ConfigGroupVersionInfo {
    /**
     * 版本 ID。
     */
    VersionId: string;
    /**
     * 版本号。
     */
    VersionNumber?: string;
    /**
     * 配置组 ID。
     */
    GroupId?: string;
    /**
     * 配置组类型。取值有：
  <li>l7_acceleration ：七层加速配置组。</li>
  <li>edge_functions ：边缘函数配置组。</li>
     */
    GroupType?: string;
    /**
     * 版本描述。
     */
    Description?: string;
    /**
     * 版本状态，取值有：
  <li>creating：创建中；</li>
  <li>inactive：未生效；</li>
  <li>active：已生效。</li>
     */
    Status?: string;
    /**
     * 版本创建时间。时间为世界标准时间（UTC）， 遵循 ISO 8601 标准的日期和时间格式。
     */
    CreateTime?: string;
}
/**
 * VerifyOwnership返回参数结构体
 */
export interface VerifyOwnershipResponse {
    /**
     * 归属权验证结果。
  <li>success：验证成功；</li>
  <li>fail：验证失败。</li>
     */
    Status?: string;
    /**
     * 当验证结果为不通过时，该字段会返回原因，协助您排查问题。
     */
    Result?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 询价参数
 */
export interface Sv {
    /**
     * 询价参数键。
     */
    Key: string;
    /**
     * 询价参数值。
     */
    Value: string;
    /**
     * 询价参数映射的配额，取值有：
  <li>zone：站点数；</li>
  <li>custom-rule：自定义规则数；</li>
  <li>rate-limiting-rule：速率限制规则数；</li>
  <li>l4-proxy-instance：四层代理实例数。</li>
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Pack?: string;
    /**
     * 询价参数映射的四层代理实例Id。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    InstanceId?: string;
    /**
     * 询价参数对应的防护等级。
  取值有： <li> cm_30G：中国大陆加速区域保底防护30Gbps；</li><li> cm_60G：中国大陆加速区域保底防护60Gbps；</li><li> cm_100G：中国大陆加速区域保底防护100Gbps；</li><li> anycast_300G：全球加速区域（除中国大陆）Anycast联防300Gbps；</li><li> anycast_unlimited：全球加速区域（除中国大陆）Anycast无上限全力防护；</li><li> cm_30G_anycast_300G：中国大陆加速区域保底防护30Gbps，全球加速区域（除中国大陆）Anycast联防300Gbps；</li><li> cm_30G_anycast_unlimited：中国大陆加速区域保底防护30Gbps，全球加速区域（除中国大陆）Anycast无上限全力防护；</li><li> cm_60G_anycast_300G：中国大陆加速区域保底防护60Gbps，全球加速区域（除中国大陆）Anycast联防300Gbps；</li><li> cm_60G_anycast_unlimited：中国大陆加速区域保底防护60Gbps，全球加速区域（除中国大陆）Anycast无上限全力防护；</li><li> cm_100G_anycast_300G：中国大陆加速区域保底防护100Gbps，全球加速区域（除中国大陆）Anycast联防300Gbps；</li><li> cm_100G_anycast_unlimited：中国大陆加速区域保底防护100Gbps，全球加速区域（除中国大陆）Anycast无上限全力防护。</li>
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ProtectionSpecs?: string;
}
/**
 * 规则引擎规则项，Conditions 数组内多个项的关系为 或，内层 Conditions 列表内多个项的关系为 且。
 */
export interface Rule {
    /**
     * 执行功能判断条件。
  注意：满足该数组内任意一项条件，功能即可执行。
     */
    Conditions: Array<RuleAndConditions>;
    /**
     * 执行的功能。注意：Actions 和 SubRules 不可都为空
     */
    Actions?: Array<Action>;
    /**
     * 嵌套规则。注意：SubRules 和 Actions 不可都为空
     */
    SubRules?: Array<SubRuleItem>;
}
/**
 * DownloadL4Logs请求参数结构体
 */
export interface DownloadL4LogsRequest {
    /**
     * 开始时间。
     */
    StartTime: string;
    /**
     * 结束时间。
     */
    EndTime: string;
    /**
     * 站点 ID 集合，此参数必填。
     */
    ZoneIds?: Array<string>;
    /**
     * 四层实例 ID 集合。
     */
    ProxyIds?: Array<string>;
    /**
     * 分页查询的限制数目，默认值为 20，最大查询条目为 300。
     */
    Limit?: number;
    /**
     * 分页的偏移量，默认值为 0。
     */
    Offset?: number;
}
/**
 * ModifyZoneSetting请求参数结构体
 */
export interface ModifyZoneSettingRequest {
    /**
     * 待变更的站点 ID。
     */
    ZoneId: string;
    /**
     * 缓存过期时间配置。
  不填写表示保持原有配置。
     */
    CacheConfig?: CacheConfig;
    /**
     * 节点缓存键配置。
  不填写表示保持原有配置。
     */
    CacheKey?: CacheKey;
    /**
     * 浏览器缓存配置。
  不填写表示保持原有配置。
     */
    MaxAge?: MaxAge;
    /**
     * 离线缓存配置。
  不填写表示保持原有配置。
     */
    OfflineCache?: OfflineCache;
    /**
     * Quic 访问配置。
  不填写表示保持原有配置。
     */
    Quic?: Quic;
    /**
     * Post 请求传输配置。
  不填写表示保持原有配置。
     */
    PostMaxSize?: PostMaxSize;
    /**
     * 智能压缩配置。
  不填写表示保持原有配置。
     */
    Compression?: Compression;
    /**
     * Http2 回源配置。
  不填写表示保持原有配置。
     */
    UpstreamHttp2?: UpstreamHttp2;
    /**
     * 访问协议强制 Https 跳转配置。
  不填写表示保持原有配置。
     */
    ForceRedirect?: ForceRedirect;
    /**
     * Https 加速配置。
  不填写表示保持原有配置。
     */
    Https?: Https;
    /**
     * 源站配置。
  不填写表示保持原有配置。
     */
    Origin?: Origin;
    /**
     * 智能加速配置。
  不填写表示保持原有配置。
     */
    SmartRouting?: SmartRouting;
    /**
     * WebSocket 配置。
  不填写表示保持原有配置。
     */
    WebSocket?: WebSocket;
    /**
     * 客户端 IP 回源请求头配置。
  不填写表示保持原有配置。
     */
    ClientIpHeader?: ClientIpHeader;
    /**
     * 缓存预刷新配置。
  不填写表示保持原有配置。
     */
    CachePrefresh?: CachePrefresh;
    /**
     * Ipv6 访问配置。
  不填写表示保持原有配置。
     */
    Ipv6?: Ipv6;
    /**
     * 回源时是否携带客户端 IP 所属地域信息的配置。
  不填写表示保持原有配置。
     */
    ClientIpCountry?: ClientIpCountry;
    /**
     * Grpc 协议支持配置。
  不填写表示保持原有配置。
     */
    Grpc?: Grpc;
    /**
     * 图片优化配置。
  不填写表示关闭。
     */
    ImageOptimize?: ImageOptimize;
    /**
     * 标准 Debug 配置。
     */
    StandardDebug?: StandardDebug;
}
/**
 * 计费数据过滤条件。
 */
export interface BillingDataFilter {
    /**
     * 参数名称。
     */
    Type: string;
    /**
     * 参数值。
     */
    Value: string;
}
/**
 * DescribeTimingL7CacheData返回参数结构体
 */
export interface DescribeTimingL7CacheDataResponse {
    /**
     * 查询结果的总条数。
     */
    TotalCount?: number;
    /**
     * 七层缓存分析时序类流量数据列表。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Data?: Array<TimingDataRecord>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeZones返回参数结构体
 */
export interface DescribeZonesResponse {
    /**
     * 符合条件的站点个数。
     */
    TotalCount?: number;
    /**
     * 站点详细信息。
     */
    Zones?: Array<Zone>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 刷新预热附带的头部信息
 */
export interface Header {
    /**
     * HTTP头部名称。
     */
    Name: string;
    /**
     * HTTP头部值。
     */
    Value: string;
}
/**
 * 实时日志投递任务中的自定义日志字段。
 */
export interface CustomField {
    /**
     * 从 HTTP 请求和响应中的指定位置提取数据，取值有：
  <li>ReqHeader：从 HTTP 请求头中提取指定字段值；</li>
  <li>RspHeader：从 HTTP 响应头中提取指定字段值；</li>
  <li>Cookie: 从 Cookie 中提取指定字段值。</li>
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Name: string;
    /**
     * 需要提取值的参数名称，例如：Accept-Language。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Value: string;
    /**
     * 是否投递该字段，不填表示不投递此字段。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Enabled?: boolean;
}
/**
 * CreateL4ProxyRules请求参数结构体
 */
export interface CreateL4ProxyRulesRequest {
    /**
     * 站点 ID。
     */
    ZoneId: string;
    /**
     * 四层代理实例 ID。
     */
    ProxyId: string;
    /**
     * 转发规则列表。单次最多支持 200 条转发规则。
  注意：L4ProxyRule 在此处使用时，Protocol、PortRange、OriginType、OriginValue、OriginPortRange 为必填字段；ClientIPPassThroughMode、SessionPersist、SessionPersistTime、RuleTag 均为选填字段；RuleId、Status 请勿填写。
     */
    L4ProxyRules: Array<L4ProxyRule>;
}
/**
 * DeleteZone请求参数结构体
 */
export interface DeleteZoneRequest {
    /**
     * 站点 ID。
     */
    ZoneId: string;
}
/**
 * Bot 规则，下列规则ID可参考接口 DescribeBotManagedRules返回的ID信息
 */
export interface BotManagedRule {
    /**
     * 触发规则后的处置方式，取值有：
  <li>drop：拦截；</li>
  <li>trans：放行；</li>
  <li>alg：Javascript挑战；</li>
  <li>monitor：观察。</li>
     */
    Action: string;
    /**
     * 本规则的ID。仅出参使用。
     */
    RuleID?: number;
    /**
     * 放行的规则ID。默认所有规则不配置放行。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TransManagedIds?: Array<number | bigint>;
    /**
     * JS挑战的规则ID。默认所有规则不配置JS挑战。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AlgManagedIds?: Array<number | bigint>;
    /**
     * 数字验证码的规则ID。默认所有规则不配置数字验证码。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CapManagedIds?: Array<number | bigint>;
    /**
     * 观察的规则ID。默认所有规则不配置观察。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    MonManagedIds?: Array<number | bigint>;
    /**
     * 拦截的规则ID。默认所有规则不配置拦截。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DropManagedIds?: Array<number | bigint>;
}
/**
 * 安全配置
 */
export interface SecurityConfig {
    /**
     * 托管规则。如果入参为空或不填，默认使用历史配置。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    WafConfig?: WafConfig;
    /**
     * 速率限制。如果入参为空或不填，默认使用历史配置。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RateLimitConfig?: RateLimitConfig;
    /**
     * 自定义规则。如果入参为空或不填，默认使用历史配置。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AclConfig?: AclConfig;
    /**
     * Bot配置。如果入参为空或不填，默认使用历史配置。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    BotConfig?: BotConfig;
    /**
     * 七层防护总开关。如果入参为空或不填，默认使用历史配置。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SwitchConfig?: SwitchConfig;
    /**
     * 基础访问管控。如果入参为空或不填，默认使用历史配置。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    IpTableConfig?: IpTableConfig;
    /**
     * 例外规则配置。如果入参为空或不填，默认使用历史配置。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ExceptConfig?: ExceptConfig;
    /**
     * 自定义拦截页面配置。如果入参为空或不填，默认使用历史配置。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DropPageConfig?: DropPageConfig;
    /**
     * 模板配置。此处仅出参数使用。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TemplateConfig?: TemplateConfig;
    /**
     * 慢速攻击配置。如果入参为空或不填，默认使用历史配置。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SlowPostConfig?: SlowPostConfig;
}
/**
 * 离线日志详细信息
 */
export interface L4OfflineLog {
    /**
     * 四层代理实例 ID。
     */
    ProxyId?: string;
    /**
     * 日志所属区域，取值有：
  <li>mainland：中国大陆境内;</li>
  <li>overseas：全球（不含中国大陆）。</li>
     */
    Area?: string;
    /**
     * 离线日志数据包名。
     */
    LogPacketName?: string;
    /**
     * 离线日志下载地址。
     */
    Url?: string;
    /**
     * 日志打包时间，此参数已经废弃。
     */
    LogTime?: number;
    /**
     * 日志打包开始时间。
     */
    LogStartTime?: string;
    /**
     * 日志打包结束时间。
     */
    LogEndTime?: string;
    /**
     * 日志大小，单位为 Byte。
     */
    Size?: number;
}
/**
 * ModifyPlan请求参数结构体
 */
export interface ModifyPlanRequest {
    /**
     * 套餐 ID，形如 edgeone-2unuvzjmmn2q。
     */
    PlanId: string;
    /**
     * 预付费套餐自动续费配置。若开启了自动续费，则会在套餐到期前一天自动续费，仅支持个人版，基础版，标准版套餐。不填写表示保持原有配置。
     */
    RenewFlag?: RenewFlag;
}
/**
 * 例外规则的生效范围。
 */
export interface ExceptUserRuleScope {
    /**
     * 例外规则类型。其中complete模式代表全量数据进行例外，partial模式代表可选择指定模块指定字段进行例外，该字段取值有：
  <li>complete：完全跳过模式；</li>
  <li>partial：部分跳过模式。</li>
     */
    Type?: string;
    /**
     * 生效的模块，该字段取值有：
  <li>waf：托管规则；</li>
  <li>rate：速率限制；</li>
  <li>acl：自定义规则；</li>
  <li>cc：cc攻击防护；</li>
  <li>bot：Bot防护。</li>
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Modules?: Array<string>;
    /**
     * 跳过部分规则ID的例外规则详情。如果为null，默认使用历史配置。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PartialModules?: Array<PartialModule>;
    /**
     * 跳过具体字段不去扫描的例外规则详情。如果为null，默认使用历史配置。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SkipConditions?: Array<SkipCondition>;
}
/**
 * 安全数据维度值信息
 */
export interface SecEntryValue {
    /**
     * 指标名称。
     */
    Metric: string;
    /**
     * 时序数据详情。
     */
    Detail: Array<TimingDataItem>;
    /**
     * 最大值。
     */
    Max: number;
    /**
     * 平均值。
     */
    Avg: number;
    /**
     * 数据总和。
     */
    Sum: number;
}
/**
 * ModifyL4ProxyRules请求参数结构体
 */
export interface ModifyL4ProxyRulesRequest {
    /**
     * 站点 ID。
     */
    ZoneId: string;
    /**
     * 四层代理实例 ID。
     */
    ProxyId: string;
    /**
     * 转发规则列表。单次最多支持 200 条转发规则。
  注意：L4ProxyRule 在此处使用时，RuleId 为必填字段；Protocol、PortRange、OriginType、OriginValue、OriginPortRange、ClientIPPassThroughMode、SessionPersist、SessionPersistTime、RuleTag 均为选填字段，不填写表示不修改；Status 请勿填写。
     */
    L4ProxyRules: Array<L4ProxyRule>;
}
/**
 * DescribeRulesSetting请求参数结构体
 */
export declare type DescribeRulesSettingRequest = null;
/**
 * 安全实例状态。
 */
export interface EntityStatus {
    /**
     * 实例名，现在只有子域名。
     */
    Entity?: string;
    /**
     * 实例配置下发状态，取值有：
  <li>online：配置已生效；</li><li>fail：配置失败；</li><li> process：配置下发中。</li>
     */
    Status?: string;
    /**
     * 实例配置下发信息提示。
     */
    Message?: string;
}
/**
 * ModifyAliasDomain请求参数结构体
 */
export interface ModifyAliasDomainRequest {
    /**
     * 站点 ID。
     */
    ZoneId: string;
    /**
     * 别称域名名称。
     */
    AliasName: string;
    /**
     * 目标域名名称。
     */
    TargetName: string;
    /**
     * 证书配置，取值有：
  <li> none：不配置；</li>
  <li> hosting：SSL托管证书；</li>
  <li> apply：申请免费证书。</li>不填写保持原有配置。
     */
    CertType?: string;
    /**
     * 当 CertType 取值为 hosting 时填入相应证书 ID。
     */
    CertId?: Array<string>;
}
/**
 * 规则引擎条件常规动作参数
 */
export interface RuleNormalActionParams {
    /**
     * 参数名称，参数填写规范可调用接口 [查询规则引擎的设置参数](https://cloud.tencent.com/document/product/1552/80618) 查看。
     */
    Name: string;
    /**
     * 参数值。
     */
    Values: Array<string>;
}
/**
 * 对象存储源站私有鉴权参数
 */
export interface PrivateParameter {
    /**
     * 私有鉴权参数名称，取值有：
  <li>AccessKeyId：鉴权参数 Access Key ID；</li>
  <li>SecretAccessKey：鉴权参数 Secret Access Key；</li>
  <li>SignatureVersion：鉴权版本，v2 或者 v4；</li>
  <li>Region：存储桶地域。</li>
     */
    Name: string;
    /**
     * 私有鉴权参数值。
     */
    Value: string;
}
/**
 * CreateSecurityIPGroup请求参数结构体
 */
export interface CreateSecurityIPGroupRequest {
    /**
     * 站点 Id。
     */
    ZoneId: string;
    /**
     * IP 组信息。
     */
    IPGroup: IPGroup;
}
/**
 * CreateOriginGroup请求参数结构体
 */
export interface CreateOriginGroupRequest {
    /**
     * 站点 ID
     */
    ZoneId: string;
    /**
     * 源站组名称，可输入1 - 200个字符，允许的字符为 a - z, A - Z, 0 - 9, _, - 。
     */
    Name?: string;
    /**
     * 源站组类型，此参数必填，取值有：
  <li>GENERAL：通用型源站组，仅支持添加 IP/域名 源站，可以被域名服务、规则引擎、四层代理、通用型负载均衡、HTTP 专用型负载均衡引用；</li>
  <li>HTTP： HTTP 专用型源站组，支持添加 IP/域名、对象存储源站作为源站，无法被四层代理引用，仅支持被添加加速域名、规则引擎-修改源站、HTTP 专用型负载均衡引用。</li>
     */
    Type?: string;
    /**
     * 源站记录信息，此参数必填。
     */
    Records?: Array<OriginRecord>;
    /**
     * 回源 Host Header，仅 Type = HTTP 时传入生效，规则引擎修改 Host Header 配置优先级高于源站组的 Host Header。
     */
    HostHeader?: string;
}
/**
 * Top类数据记录
 */
export interface TopDataRecord {
    /**
     * 查询维度值。
     */
    TypeKey: string;
    /**
     * top数据排行。
     */
    DetailData: Array<TopDetailData>;
}
/**
 * CreateSecurityIPGroup返回参数结构体
 */
export interface CreateSecurityIPGroupResponse {
    /**
     * IP 组 Id。
     */
    GroupId?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CreateSharedCNAME返回参数结构体
 */
export interface CreateSharedCNAMEResponse {
    /**
     * 共享 CNAME。格式为：`<自定义前缀>+<ZoneId中的12位随机字符串>+share.dnse[0-5].com`。
     */
    SharedCNAME?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeAvailablePlans返回参数结构体
 */
export interface DescribeAvailablePlansResponse {
    /**
     * 当前账户可购买套餐类型及相关信息。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PlanInfo?: Array<PlanInfo>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 速率限制模板
 */
export interface RateLimitTemplate {
    /**
     * 模板等级名称，取值有：
  <li>sup_loose：超级宽松；</li>
  <li>loose：宽松；</li>
  <li>emergency：紧急；</li>
  <li>normal：适中；</li>
  <li>strict：严格；</li>
  <li>close：关闭，仅精准速率限制生效。</li>
     */
    Mode: string;
    /**
     * 模板处置方式，取值有：
  <li>alg：JavaScript挑战；</li>
  <li>monitor：观察。</li>不填写默认取alg。
     */
    Action?: string;
    /**
     * 模板值详情。仅出参返回。
     */
    RateLimitTemplateDetail?: RateLimitTemplateDetail;
}
/**
 * ModifyRealtimeLogDeliveryTask返回参数结构体
 */
export interface ModifyRealtimeLogDeliveryTaskResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 加速域名所对应的证书信息。
 */
export interface AccelerationDomainCertificate {
    /**
     * 配置证书的模式，取值有： <li>disable：不配置证书；</li> <li>eofreecert：配置 EdgeOne 免费证书；</li> <li>sslcert：配置 SSL 证书。</li>
     */
    Mode?: string;
    /**
     * 证书列表。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    List?: Array<CertificateInfo>;
}
/**
 * DescribeSecurityTemplateBindings请求参数结构体
 */
export interface DescribeSecurityTemplateBindingsRequest {
    /**
     * 要查询的站点 ID。
     */
    ZoneId: string;
    /**
     * 要查询的策略模板 ID。
     */
    TemplateId: Array<string>;
}
/**
 * Bot主动特征识别校验结果。
 */
export interface AlgDetectResult {
    /**
     * 校验结果，取值有：
  <li>invalid：不合法Cookie；</li>
  <li>cookie_empty：末携带Cookie或Cookie己过期；</li>
  <li>js_empty：客户端末启用JS（末完成检测）；</li>
  <li>low：会话速率和周期特征校验低风险；</li>
  <li>middle：会话速率和周期特征校验中风险；</li>
  <li>high：会话速率和周期特征校验高风险；</li>
  <li>timeout：检测超时时长；</li>
  <li>not_browser：不合法浏览器；</li>
  <li>is_bot：Bot客户端。</li>
     */
    Result?: string;
    /**
     * 处罚动作，取值有：
  <li>drop：拦截；</li>
  <li>monitor：观察；</li>
  <li>silence：静默；</li>
  <li>shortdelay：（短时间）等待后响应；</li>
  <li>longdelay：（长时间）等待后响应。</li>
     */
    Action?: string;
}
/**
 * https 服务端证书配置
 */
export interface DefaultServerCertInfo {
    /**
     * 服务器证书 ID。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CertId: string;
    /**
     * 证书备注名。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Alias?: string;
    /**
     * 证书类型，取值有：
  <li>default: 默认证书;</li>
  <li>upload:用户上传;</li>
  <li>managed:腾讯云托管。</li>
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Type?: string;
    /**
     * 证书过期时间。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ExpireTime?: string;
    /**
     * 证书生效时间。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    EffectiveTime?: string;
    /**
     * 证书公用名。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CommonName?: string;
    /**
     * 证书SAN域名。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SubjectAltName?: Array<string>;
    /**
     * 部署状态，取值有：
  <li>processing: 部署中；</li>
  <li>deployed: 已部署；</li>
  <li>failed: 部署失败。</li>
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Status?: string;
    /**
     * Status为失败时,此字段返回失败原因。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Message?: string;
    /**
     * 证书算法。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SignAlgo?: string;
}
/**
 * 支持标准debug结构体
 */
export interface StandardDebug {
    /**
     * Debug 功能开关，取值有：
  <li>on：开启；</li>
  <li>off：关闭。</li>
     */
    Switch: string;
    /**
     * 允许的客户端来源。支持填写 IPv4 以及 IPv6 的 IP/IP 段。0.0.0.0/0 表示允许所有 IPv4 客户端进行调试，::/0 表示允许所有 IPv6 客户端进行调试。
     */
    AllowClientIPList: Array<string>;
    /**
     * Debug 功能到期时间。超出设置的时间，则功能失效。
     */
    ExpireTime: string;
}
/**
 * DescribeDDoSAttackTopData返回参数结构体
 */
export interface DescribeDDoSAttackTopDataResponse {
    /**
     * DDoS攻击Top数据列表。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Data?: Array<TopEntry>;
    /**
     * 查询结果的总条数。
     */
    TotalCount?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DeleteRules请求参数结构体
 */
export interface DeleteRulesRequest {
    /**
     * 站点 ID。
     */
    ZoneId: string;
    /**
     * 指定删除的规则 ID 列表。
     */
    RuleIds: Array<string>;
}
/**
 * 例外规则生效的具体条件。
 */
export interface ExceptUserRuleCondition {
    /**
     * 匹配项，取值有：
  <li>host：请求域名；</li>
  <li>sip：客户端IP；</li>
  <li>ua：User-Agent；</li>
  <li>cookie：会话 Cookie；</li>
  <li>cgi：CGI 脚本；</li>
  <li>xff：XFF 扩展头部；</li>
  <li>url：请求 URL；</li>
  <li>accept：请求内容类型；</li>
  <li>method：请求方式；</li>
  <li>header：请求头部；</li>
  <li>sip_proto：网络层协议。</li>
     */
    MatchFrom?: string;
    /**
     * 匹配项的参数。仅当 MatchFrom 为 header 时，可以使用本参数，值可填入 header 的 key 作为参数。
     */
    MatchParam?: string;
    /**
     * 匹配操作符，取值有：
  <li>equal：字符串等于；</li>
  <li>not_equal：数值不等于；</li>
  <li>include：字符包含；</li>
  <li>not_include：字符不包含；</li>
  <li>match：ip匹配；</li>
  <li>not_match：ip不匹配；</li>
  <li>include_area：地域包含；</li>
  <li>is_empty：存在字段但值为空；</li>
  <li>not_exists：不存在关键字段；</li>
  <li>regexp：正则匹配；</li>
  <li>len_gt：数值大于；</li>
  <li>len_lt：数值小于；</li>
  <li>len_eq：数值等于；</li>
  <li>match_prefix：前缀匹配；</li>
  <li>match_suffix：后缀匹配；</li>
  <li>wildcard：通配符。</li>
     */
    Operator?: string;
    /**
     * 匹配值。
     */
    MatchContent?: string;
}
/**
 * 浏览器缓存规则配置，用于设置 MaxAge 默认值，默认为关闭状态
 */
export interface MaxAge {
    /**
     * 是否遵循源站，取值有：
  <li>on：遵循源站，忽略MaxAge 时间设置；</li>
  <li>off：不遵循源站，使用MaxAge 时间设置。</li>
     */
    FollowOrigin?: string;
    /**
     * MaxAge 时间设置，单位秒，最大365天。
  注意：时间为0，即不缓存。
     */
    MaxAgeTime?: number;
}
/**
 * DeleteApplicationProxy返回参数结构体
 */
export interface DeleteApplicationProxyResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * Bot主动特征识别规则。
 */
export interface AlgDetectRule {
    /**
     * 规则id。
     */
    RuleID?: number;
    /**
     * 规则名。
     */
    RuleName?: string;
    /**
     * 规则开关。
     */
    Switch?: string;
    /**
     * 自定义规则。
     */
    AlgConditions?: Array<AclCondition>;
    /**
     * Cookie校验和会话行为分析。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AlgDetectSession?: AlgDetectSession;
    /**
     * 客户端行为校验。
     */
    AlgDetectJS?: Array<AlgDetectJS>;
    /**
     * 更新时间。仅出参使用。
     */
    UpdateTime?: string;
}
/**
 * 最新IP白名单列表相比于当前IP白名单列表的区别
 */
export interface DiffIPWhitelist {
    /**
     * 最新IP白名单列表。
     */
    LatestIPWhitelist: IPWhitelist;
    /**
     * 最新IP白名单列表相比于当前IP白名单列表，新增部分。
     */
    AddedIPWhitelist: IPWhitelist;
    /**
     * 最新IP白名单列表相比于当前IP白名单列表，删减部分。
     */
    RemovedIPWhitelist: IPWhitelist;
    /**
     * 最新IP白名单列表相比于当前IP白名单列表，不变部分。
     */
    NoChangeIPWhitelist: IPWhitelist;
}
/**
 * DeleteSecurityIPGroup返回参数结构体
 */
export interface DeleteSecurityIPGroupResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ModifyRule请求参数结构体
 */
export interface ModifyRuleRequest {
    /**
     * 站点 ID。
     */
    ZoneId: string;
    /**
     * 规则名称，字符串名称长度 1~255。
     */
    RuleName: string;
    /**
     * 规则内容。
     */
    Rules: Array<Rule>;
    /**
     * 规则 ID。
     */
    RuleId: string;
    /**
     * 规则状态，取值有：
  <li> enable: 启用； </li>
  <li> disable: 未启用。</li>
     */
    Status: string;
    /**
     * 规则标签。
     */
    Tags?: Array<string>;
}
/**
 * RenewPlan请求参数结构体
 */
export interface RenewPlanRequest {
    /**
     * 套餐 ID，形如 edgeone-2unuvzjmmn2q。
     */
    PlanId: string;
    /**
     * 续费套餐的时长，单位：月，取值有：1，2，3，4，5，6，7，8，9，10，11，12，24，36。
     */
    Period: number;
    /**
     * 是否自动使用代金券，取值有：<li> true：是；</li><li> false：否。</li>不填写使用默认值 false。
     */
    AutoUseVoucher?: string;
}
/**
 * DescribePrefetchTasks返回参数结构体
 */
export interface DescribePrefetchTasksResponse {
    /**
     * 该查询条件总共条目数。
     */
    TotalCount?: number;
    /**
     * 任务结果列表。
     */
    Tasks?: Array<Task>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeZoneSetting请求参数结构体
 */
export interface DescribeZoneSettingRequest {
    /**
     * 站点ID。
     */
    ZoneId: string;
}
/**
 * ModifyL4ProxyStatus返回参数结构体
 */
export interface ModifyL4ProxyStatusResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CNAME 接入，使用文件验证时所需的信息。
 */
export interface FileVerification {
    /**
     * EdgeOne 后台服务器将通过 Scheme + Host + URL Path 的格式（例如 https://www.example.com/.well-known/teo-verification/z12h416twn.txt）获取文件验证信息。该字段为您需要创建的 URL Path 部分。
     */
    Path?: string;
    /**
     * 验证文件的内容。该字段的内容需要您填写至 Path 字段返回的 txt 文件中。
     */
    Content?: string;
}
/**
 * ModifySecurityPolicy请求参数结构体
 */
export interface ModifySecurityPolicyRequest {
    /**
     * 站点Id。
     */
    ZoneId: string;
    /**
     * 安全配置。
     */
    SecurityConfig: SecurityConfig;
    /**
     * 子域名/应用名。
  
  注意：当同时指定本参数和 TemplateId 参数时，本参数不生效。请勿同时指定本参数和 TemplateId 参数。
     */
    Entity?: string;
    /**
     * 指定模板策略 ID，或指定站点全局策略。
  - 如需配置策略模板，请指定策略模板 ID。
  - 如需配置站点全局策略，请使用 @ZoneLevel@Domain 参数值
  
  注意：当使用本参数时，Entity 参数不生效。请勿同时使用本参数和 Entity 参数。
     */
    TemplateId?: string;
}
/**
 * 智能加速配置
 */
export interface SmartRouting {
    /**
     * 智能加速配置开关，取值有：
  <li>on：开启；</li>
  <li>off：关闭。</li>
     */
    Switch: string;
}
/**
 * CreateApplicationProxy返回参数结构体
 */
export interface CreateApplicationProxyResponse {
    /**
     * 新增的四层代理应用ID。
     */
    ProxyId?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * Bot自定义规则
 */
export interface BotUserRule {
    /**
     * 规则名，只能以英文字符，数字，下划线组合，且不能以下划线开头。
     */
    RuleName: string;
    /**
     * 处置动作，取值有：
  <li>drop：拦截；</li>
  <li>monitor：观察；</li>
  <li>trans：放行；</li>
  <li>redirect：重定向；</li>
  <li>page：指定页面；</li>
  <li>alg：JavaScript 挑战；</li>
  <li>captcha：托管挑战；</li>
  <li>random：随机处置；</li>
  <li>silence：静默；</li>
  <li>shortdelay：短时响应；</li>
  <li>longdelay：长时响应。</li>
     */
    Action: string;
    /**
     * 规则状态，取值有：
  <li>on：生效；</li>
  <li>off：不生效。</li>默认 on 生效。
     */
    RuleStatus: string;
    /**
     * 规则详情。
     */
    AclConditions: Array<AclCondition>;
    /**
     * 规则权重，取值范围0-100。
     */
    RulePriority: number;
    /**
     * 规则 Id。仅出参使用。
     */
    RuleID?: number;
    /**
     * 随机处置的处置方式及占比，非随机处置可不填暂不支持。
     */
    ExtendActions?: Array<BotExtendAction>;
    /**
     * 过滤词，取值有：
  <li>sip：客户端 ip。</li>
  默认为空字符串。
     */
    FreqFields?: Array<string>;
    /**
     * 更新时间。仅出参使用。
     */
    UpdateTime?: string;
    /**
     * 统计范围。取值有：
  <li>source_to_eo：（响应）源站到 EdgeOne；</li>
  <li>client_to_eo：（请求）客户端到 EdgeOne。</li>
  默认为 source_to_eo。
     */
    FreqScope?: Array<string>;
    /**
     * 自定义返回页面的名称。Action 是 page 时必填，且不能为空。
     */
    Name?: string;
    /**
     * 自定义响应 Id。该 Id 可通过查询自定义错误页列表接口获取。默认值为default，使用系统默认页面。Action 是 page 时必填，且不能为空。
     */
    CustomResponseId?: string;
    /**
     * 自定义返回页面的响应码。Action 是 page 时必填，且不能为空，取值: 100~600，不支持 3xx 响应码。默认值：567。
     */
    ResponseCode?: number;
    /**
     * 重定向时候的地址。Action 是 redirect 时必填，且不能为空。
     */
    RedirectUrl?: string;
}
/**
 * 内容管理任务结果
 */
export interface Task {
    /**
     * 任务 ID。
     */
    JobId?: string;
    /**
     * 资源。
     */
    Target?: string;
    /**
     * 任务类型。
     */
    Type?: string;
    /**
     * 节点缓存清除方法，取值有：
  <li>invalidate：标记过期，用户请求时触发回源校验，即发送带有 If-None-Match 和 If-Modified-Since 头部的 HTTP 条件请求。若源站响应 200，则节点会回源拉取新的资源并更新缓存；若源站响应 304，则节点不会更新缓存；</li>
  <li>delete：直接删除节点缓存，用户请求时触发回源拉取资源。</li>
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Method?: string;
    /**
     * 状态。取值有：
  <li>processing：处理中；</li>
  <li>success：成功；</li>
  <li> failed：失败；</li>
  <li>timeout：超时。</li>
     */
    Status?: string;
    /**
     * 任务创建时间。
     */
    CreateTime?: string;
    /**
     * 任务完成时间。
     */
    UpdateTime?: string;
}
/**
 * DescribeL4ProxyRules返回参数结构体
 */
export interface DescribeL4ProxyRulesResponse {
    /**
     * 转发规则总数。
     */
    TotalCount?: number;
    /**
     * 转发规则列表。
     */
    L4ProxyRules?: Array<L4ProxyRule>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DeleteAliasDomain请求参数结构体
 */
export interface DeleteAliasDomainRequest {
    /**
     * 站点 ID。
     */
    ZoneId: string;
    /**
     * 待删除别称域名名称。如果为空，则不执行删除操作。
     */
    AliasNames?: Array<string>;
}
/**
 * DescribeIdentifications返回参数结构体
 */
export interface DescribeIdentificationsResponse {
    /**
     * 符合条件的站点个数。
     */
    TotalCount?: number;
    /**
     * 站点验证信息列表。
     */
    Identifications?: Array<Identification>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CreatePurgeTask返回参数结构体
 */
export interface CreatePurgeTaskResponse {
    /**
     * 任务 ID。
     */
    JobId?: string;
    /**
     * 失败的任务列表及原因。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    FailedList?: Array<FailReason>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DeleteApplicationProxyRule返回参数结构体
 */
export interface DeleteApplicationProxyRuleResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 例外规则，用于配置需要跳过特定场景的规则
 */
export interface ExceptConfig {
    /**
     * 配置开关，取值有：
  <li>on：开启；</li>
  <li>off：关闭。</li>
     */
    Switch: string;
    /**
     * 例外规则详情。如果为null，默认使用历史配置。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ExceptUserRules?: Array<ExceptUserRule>;
}
/**
 * DeleteOriginGroup请求参数结构体
 */
export interface DeleteOriginGroupRequest {
    /**
     * 站点 ID
     */
    ZoneId: string;
    /**
     * 源站组 ID，此参数必填。
     */
    GroupId?: string;
}
/**
 * 精准防护条件
 */
export interface AclCondition {
    /**
     * 匹配字段，取值有：
  <li>host：请求域名；</li>
  <li>sip：客户端IP；</li>
  <li>ua：User-Agent；</li>
  <li>cookie：会话 Cookie；</li>
  <li>cgi：CGI 脚本；</li>
  <li>xff：XFF 扩展头部；</li>
  <li>url：请求 URL；</li>
  <li>accept：请求内容类型；</li>
  <li>method：请求方式；</li>
  <li>header：请求头部；</li>
  <li>app_proto：应用层协议；</li>
  <li>sip_proto：网络层协议；</li>
  <li>uabot：UA 特征规则，仅bot自定义规则可用；</li>
  <li>idcid：IDC 规则，仅bot自定义规则可用；</li>
  <li>sipbot：搜索引擎规则，仅bot自定义规则可用；</li>
  <li>portrait：画像分析，仅bot自定义规则可用；</li>
  <li>header_seq：请求头顺序，仅bot自定义规则可用；</li>
  <li>hdr：请求正文，仅Web防护自定义规则可用。</li>
     */
    MatchFrom: string;
    /**
     * 匹配字符串。当 MatchFrom 为 header 时，可以填入 header 的 key 作为参数。
     */
    MatchParam: string;
    /**
     * 匹配关系，取值有：
  <li>equal：字符串等于；</li>
  <li>not_equal：数值不等于；</li>
  <li>include：字符包含；</li>
  <li>not_include：字符不包含；</li>
  <li>match：ip匹配；</li>
  <li>not_match：ip不匹配；</li>
  <li>include_area：地域包含；</li>
  <li>is_empty：存在字段但值为空；</li>
  <li>not_exists：不存在关键字段；</li>
  <li>regexp：正则匹配；</li>
  <li>len_gt：数值大于；</li>
  <li>len_lt：数值小于；</li>
  <li>len_eq：数值等于；</li>
  <li>match_prefix：前缀匹配；</li>
  <li>match_suffix：后缀匹配；</li>
  <li>wildcard：通配符。</li>
     */
    Operator: string;
    /**
     * 匹配内容。
     */
    MatchContent: string;
}
/**
 * 七层离线日志详细信息。
 */
export interface L7OfflineLog {
    /**
     * 离线日志域名。
     */
    Domain?: string;
    /**
     * 日志所属区域，取值有：
  <li>mainland：中国大陆境内; </li>
  <li>overseas：全球（不含中国大陆）。</li>
     */
    Area?: string;
    /**
     * 离线日志数据包名。
     */
    LogPacketName?: string;
    /**
     * 离线日志下载地址。
     */
    Url?: string;
    /**
     * 日志打包时间，此参数已经废弃。
     */
    LogTime?: number;
    /**
     * 日志打包开始时间。
     */
    LogStartTime?: string;
    /**
     * 日志打包结束时间。
     */
    LogEndTime?: string;
    /**
     * 日志原始大小，单位 Byte。
     */
    Size?: number;
}
/**
 * ModifyRule返回参数结构体
 */
export interface ModifyRuleResponse {
    /**
     * 规则 ID。
     */
    RuleId?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 应用代理规则
 */
export interface ApplicationProxyRule {
    /**
     * 协议，取值有：
  <li>TCP：TCP协议；</li>
  <li>UDP：UDP协议。</li>
     */
    Proto: string;
    /**
     * 端口，支持格式：
  <li>单个端口，如：80。</li>
  <li>端口段，如：81-82。表示81，82两个端口。</li>
  注意：一条规则最多可填写20个端口。
     */
    Port: Array<string>;
    /**
     * 源站类型，取值有：
  <li>custom：手动添加；</li>
  <li>loadbalancer：负载均衡；</li>
  <li>origins：源站组。</li>
     */
    OriginType: string;
    /**
     * 源站信息：
  <li>当 OriginType 为 custom 时，表示一个或多个源站，如`["8.8.8.8","9.9.9.9"]` 或 `OriginValue=["test.com"]`；</li>
  <li>当 OriginType 为 loadbalancer 时，表示一个负载均衡，如`["lb-xdffsfasdfs"]`；</li>
  <li>当 OriginType 为 origins 时，要求有且仅有一个元素，表示源站组ID，如`["origin-537f5b41-162a-11ed-abaa-525400c5da15"]`。</li>
     */
    OriginValue: Array<string>;
    /**
     * 规则ID。
     */
    RuleId?: string;
    /**
     * 状态，取值有：
  <li>online：启用；</li>
  <li>offline：停用；</li>
  <li>progress：部署中；</li>
  <li>stopping：停用中；</li>
  <li>fail：部署失败/停用失败。</li>
     */
    Status?: string;
    /**
     * 传递客户端IP，取值有：
  <li>TOA：TOA（仅Proto=TCP时可选）；</li>
  <li>PPV1：Proxy Protocol传递，协议版本V1（仅Proto=TCP时可选）；</li>
  <li>PPV2：Proxy Protocol传递，协议版本V2；</li>
  <li>OFF：不传递。</li>默认值：OFF。
     */
    ForwardClientIp?: string;
    /**
     * 是否开启会话保持，取值有：
  <li>true：开启；</li>
  <li>false：关闭。</li>默认值：false。
     */
    SessionPersist?: boolean;
    /**
     * 会话保持的时间，只有当SessionPersist为true时，该值才会生效。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SessionPersistTime?: number;
    /**
     * 源站端口，支持格式：
  <li>单端口，如：80。</li>
  <li>端口段：81-82，表示81，82两个端口。</li>
     */
    OriginPort?: string;
    /**
     * 规则标签。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RuleTag?: string;
}
/**
 * 站点信息
 */
export interface Zone {
    /**
     * 站点 ID。
     */
    ZoneId?: string;
    /**
     * 站点名称。
     */
    ZoneName?: string;
    /**
     * 站点当前使用的 NS 列表。
     */
    OriginalNameServers?: Array<string>;
    /**
     * 腾讯云分配的 NS 列表。
     */
    NameServers?: Array<string>;
    /**
     * 站点状态，取值有：
  <li> active：NS 已切换； </li>
  <li> pending：NS 未切换；</li>
  <li> moved：NS 已切走；</li>
  <li> deactivated：被封禁。 </li>
  <li> initializing：待绑定套餐。 </li>
     */
    Status?: string;
    /**
     * 站点接入方式，取值有：
  <li> full：NS 接入；</li>
  <li> partial：CNAME 接入；</li>
  <li> noDomainAccess：无域名接入；</li>
  <li> vodeo：开启 VODEO 后默认接入。</li>
     */
    Type?: string;
    /**
     * 站点是否关闭。
     */
    Paused?: boolean;
    /**
     * 是否开启 CNAME 加速，取值有：
  <li> enabled：开启；</li>
  <li> disabled：关闭。</li>
     */
    CnameSpeedUp?: string;
    /**
     * CNAME 接入状态，取值有：
  <li> finished：站点已验证；</li>
  <li> pending：站点验证中。</li>
     */
    CnameStatus?: string;
    /**
     * 资源标签列表。
     */
    Tags?: Array<Tag>;
    /**
     * 计费资源列表。
     */
    Resources?: Array<Resource>;
    /**
     * 站点创建时间。
     */
    CreatedOn?: string;
    /**
     * 站点修改时间。
     */
    ModifiedOn?: string;
    /**
     * 站点接入地域，取值有：
  <li> global：全球；</li>
  <li> mainland：中国大陆；</li>
  <li> overseas：境外区域。</li>
     */
    Area?: string;
    /**
     * 用户自定义 NS 信息。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    VanityNameServers?: VanityNameServers;
    /**
     * 用户自定义 NS IP 信息。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    VanityNameServersIps?: Array<VanityNameServersIps>;
    /**
     * 展示状态，取值有：
  <li> active：已启用；</li>
  <li> inactive：未生效；</li>
  <li> paused：已停用。</li>
     */
    ActiveStatus?: string;
    /**
     * 站点别名。数字、英文、-和_组合，限制20个字符。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AliasZoneName?: string;
    /**
     * 是否伪站点，取值有：
  <li> 0：非伪站点；</li>
  <li> 1：伪站点。</li>
     */
    IsFake?: number;
    /**
     * 锁定状态，取值有：<li> enable：正常，允许进行修改操作；</li><li> disable：锁定中，不允许进行修改操作；</li><li> plan_migrate：套餐迁移中，不允许进行修改操作。</li>
     */
    LockStatus?: string;
    /**
     * 归属权验证信息。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    OwnershipVerification?: OwnershipVerification;
}
/**
 * DescribeRulesSetting返回参数结构体
 */
export interface DescribeRulesSettingResponse {
    /**
     * 规则引擎可应用匹配请求的设置列表及其详细建议配置信息。
     */
    Actions?: Array<RulesSettingAction>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * BindSecurityTemplateToEntity返回参数结构体
 */
export interface BindSecurityTemplateToEntityResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ModifyL4ProxyRules返回参数结构体
 */
export interface ModifyL4ProxyRulesResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DDoS攻击事件对象
 */
export interface DDoSAttackEvent {
    /**
     * 事件ID。
     */
    EventId: string;
    /**
     * 攻击类型(对应交互事件名称)。
     */
    AttackType: string;
    /**
     * 攻击状态。
     */
    AttackStatus: number;
    /**
     * 攻击最大带宽。
     */
    AttackMaxBandWidth: number;
    /**
     * 攻击包速率峰值。
     */
    AttackPacketMaxRate: number;
    /**
     * 攻击开始时间，单位为s。
     */
    AttackStartTime: number;
    /**
     * 攻击结束时间，单位为s。
     */
    AttackEndTime: number;
    /**
     * DDoS策略组ID。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PolicyId: number;
    /**
     * 站点ID。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ZoneId: string;
    /**
     * 攻击事件所属地区，取值有：
  <li>overseas：全球（除中国大陆地区）数据；</li>
  <li>mainland：中国大陆地区数据。</li>
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Area: string;
    /**
     * 封禁解封信息。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DDoSBlockData: Array<DDoSBlockData>;
}
/**
 * DescribeConfigGroupVersionDetail请求参数结构体
 */
export interface DescribeConfigGroupVersionDetailRequest {
    /**
     * 站点 ID。
     */
    ZoneId: string;
    /**
     * 版本 ID。
     */
    VersionId: string;
}
/**
 * ModifyPlan返回参数结构体
 */
export interface ModifyPlanResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 拦截页面的配置信息
 */
export interface DropPageDetail {
    /**
     * 拦截页面的唯一 Id。系统默认包含一个自带拦截页面，Id 值为0。
  该 Id 可通过创建拦截页面接口进行上传获取。如传入0，代表使用系统默认拦截页面。该参数已废弃。
     */
    PageId: number;
    /**
     * 拦截页面的 HTTP 状态码。状态码取值：100～600，不支持 3xx 状态码。托管规则拦截页面默认：566，安全防护（除托管规则外）拦截页面默认：567.
     */
    StatusCode: number;
    /**
     * 页面文件名或 url。
     */
    Name: string;
    /**
     * 页面的类型，取值有：
  <li>page：指定页面。</li>
  
     */
    Type: string;
    /**
     * 自定义响应 Id。该 Id 可通过查询自定义错误页列表接口获取。默认值为default，使用系统默认页面。Type 类型是 page 时必填，且不能为空。
     */
    CustomResponseId?: string;
}
/**
 * CNAME 状态
 */
export interface CnameStatus {
    /**
     * 记录名称。
     */
    RecordName: string;
    /**
     * CNAME 地址。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Cname: string;
    /**
     * Cname状态信息，取值有：
  <li>active：生效；</li>
  <li>moved：不生效。</li>
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Status: string;
}
/**
 * https 服务端证书配置
 */
export interface ServerCertInfo {
    /**
     * 服务器证书 ID。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CertId: string;
    /**
     * 证书备注名。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Alias?: string;
    /**
     * 证书类型，取值有：
  <li>default：默认证书；</li>
  <li>upload：用户上传；</li>
  <li>managed：腾讯云托管。</li>
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Type?: string;
    /**
     * 证书过期时间。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ExpireTime?: string;
    /**
     * 证书部署时间。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DeployTime?: string;
    /**
     * 签名算法。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SignAlgo?: string;
    /**
     * 证书归属域名名称。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CommonName?: string;
}
/**
 * DescribeZones请求参数结构体
 */
export interface DescribeZonesRequest {
    /**
     * 分页查询偏移量。默认值：0。
     */
    Offset?: number;
    /**
     * 分页查询限制数目。默认值：20，最大值：100。
     */
    Limit?: number;
    /**
     * 过滤条件，Filters.Values 的上限为 20。该参数不填写时，返回当前 appid 下有权限的所有站点信息。详细的过滤条件如下：
  <li>zone-name：按照站点名称进行过滤；</li><li>zone-id：按照站点 ID进行过滤。站点 ID 形如：zone-2noz78a8ev6k；</li><li>status：按照站点状态进行过滤；</li><li>tag-key：按照标签键进行过滤；</li><li>tag-value： 按照标签值进行过滤。</li>模糊查询时仅支持过滤字段名为 zone-name。
     */
    Filters?: Array<AdvancedFilter>;
    /**
     * 可根据该字段对返回结果进行排序，取值有：
  <li> type：接入类型；</li>
  <li> area：加速区域；</li>
  <li> create-time：创建时间；</li>
  <li> zone-name：站点名称；</li>
  <li> use-time：最近使用时间；</li>
  <li> active-status：生效状态。</li>不填写时对返回结果默认按照 create-time 排序。
     */
    Order?: string;
    /**
     * 排序方向，如果是字段值为数字，则根据数字大小排序；如果字段值为文本，则根据 ascill 码的大小排序。取值有：
  <li> asc：从小到大排序；</li>
  <li> desc：从大到小排序。</li>不填写使用默认值 desc。
     */
    Direction?: string;
}
/**
 * 源站组记录
 */
export interface OriginRecord {
    /**
     * 源站记录值，不包含端口信息，可以为：IPv4，IPv6，域名格式。
     */
    Record: string;
    /**
     * 源站类型，取值有：
  <li>IP_DOMAIN：IPV4、IPV6、域名类型源站；</li>
  <li>COS：COS源。</li>
  <li>AWS_S3：AWS S3对象存储源站。</li>
     */
    Type?: string;
    /**
     * 源站记录ID。
     */
    RecordId?: string;
    /**
     * 源站权重，取值为0-100, 不填表示不设置权重，由系统自由调度，填0表示权重为0, 流量将不会调度到此源站。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Weight?: number;
    /**
     * 是否私有鉴权，当源站类型 RecordType=COS/AWS_S3 时生效，取值有：
  <li>true：使用私有鉴权；</li>
  <li>false：不使用私有鉴权。</li>不填写，默认值为：false。
  
     */
    Private?: boolean;
    /**
     * 私有鉴权参数，当源站类型Private=true时有效。
     */
    PrivateParameters?: Array<PrivateParameter>;
}
/**
 * 标签配置
 */
export interface Tag {
    /**
     * 标签键。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TagKey: string;
    /**
     * 标签值。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TagValue: string;
}
/**
 * BindSharedCNAME返回参数结构体
 */
export interface BindSharedCNAMEResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DeleteSharedCNAME请求参数结构体
 */
export interface DeleteSharedCNAMERequest {
    /**
     * 共享 CNAME 所属站点 ID。
     */
    ZoneId: string;
    /**
     * 需要删除的共享 CNAME。
     */
    SharedCNAME: string;
}
/**
 * ModifyRealtimeLogDeliveryTask请求参数结构体
 */
export interface ModifyRealtimeLogDeliveryTaskRequest {
    /**
     * 站点 ID。
     */
    ZoneId: string;
    /**
     * 实时日志投递任务 ID。
     */
    TaskId: string;
    /**
     * 实时日志投递任务的名称，格式为数字、英文、-和_组合，最多 200 个字符。不填保持原有配置。
     */
    TaskName?: string;
    /**
     * 实时日志投递任务的状态，取值有：
  <li>enabled: 启用；</li>
  <li>disabled: 停用。</li>不填保持原有配置。
     */
    DeliveryStatus?: string;
    /**
     * 实时日志投递任务对应的实体（七层域名或者四层代理实例）列表。取值示例如下：
  <li>七层域名：domain.example.com；</li>
  <li>四层代理实例：sid-2s69eb5wcms7。</li>不填保持原有配置。
     */
    EntityList?: Array<string>;
    /**
     * 投递的预设字段列表。不填保持原有配置。
     */
    Fields?: Array<string>;
    /**
     * 投递的自定义字段列表，支持在 HTTP 请求头、响应头、Cookie 中提取指定字段值。自定义字段名称不能重复，且最多不能超过 200 个字段。不填保持原有配置。
     */
    CustomFields?: Array<CustomField>;
    /**
     * 日志投递的过滤条件。不填表示投递全量日志。
     */
    DeliveryConditions?: Array<DeliveryCondition>;
    /**
     * 采样比例，采用千分制，取值范围为1-1000，例如：填写 605 表示采样比例为 60.5%。不填保持原有配置。
     */
    Sample?: number;
    /**
     * 日志投递的输出格式。不填保持原有配置。
  特别地，当 TaskType 取值为 cls 时，LogFormat.FormatType 的值只能为 json，且 LogFormat 中其他参数将被忽略，建议不传 LogFormat。
     */
    LogFormat?: LogFormat;
    /**
     * 自定义 HTTP 服务的配置信息，不填保持原有配置。
     */
    CustomEndpoint?: CustomEndpoint;
    /**
     * AWS S3 兼容存储桶的配置信息，不填保持原有配置。
     */
    S3?: S3;
}
/**
 * 自定义 nameservers
 */
export interface VanityNameServers {
    /**
     * 自定义 ns 开关，取值有：
  <li> on：开启；</li>
  <li> off：关闭。</li>
     */
    Switch: string;
    /**
     * 自定义 ns 列表。
     */
    Servers?: Array<string>;
}
/**
 * DestroyPlan请求参数结构体
 */
export interface DestroyPlanRequest {
    /**
     * 套餐 ID，形如 edgeone-2wdo315m2y4c。
     */
    PlanId: string;
}
/**
 * CreatePlan请求参数结构体
 */
export interface CreatePlanRequest {
    /**
     * 订阅的套餐类型，取值有：<li> personal：个人版套餐，预付费套餐；</li><li> basic：基础版套餐，预付费套餐；</li><li> standard：标准版套餐，预付费套餐；</li><li> enterprise：企业版套餐，后付费套餐。</li>订阅预付费套餐时，请确保账号内有足够余额，余额不足会产生一个待支付的订单。
  计费概述参考 [Edgeone计费概述](https://cloud.tencent.com/document/product/1552/94156)
  不同套餐区别参考 [Edgeone计费套餐选型对比](https://cloud.tencent.com/document/product/1552/94165)
     */
    PlanType: string;
    /**
     * 是否自动使用代金券，取值有：<li> true：是；</li><li> false：否。</li>该参数仅在 PlanType 为 personal, basic, standard 时有效。
  不填写使用默认值 false。
     */
    AutoUseVoucher?: string;
    /**
     * 订阅预付费套餐参数，PlanType 为 personal, basic, standard 时，可以选填该参数，用于传入套餐的订阅时长和是否开启自动续费。
  不填该参数时，默认开通套餐时长为 1 个月，不开启自动续费。
     */
    PrepaidPlanParam?: PrepaidPlanParam;
}
/**
 * IP 网段组
 */
export interface IPGroup {
    /**
     * 组 Id，创建时填 0 即可。
     */
    GroupId: number;
    /**
     * 组名称。
     */
    Name: string;
    /**
     * IP 组内容，仅支持 IP 及 IP 掩码。
     */
    Content: Array<string>;
}
/**
 * CreatePrefetchTask返回参数结构体
 */
export interface CreatePrefetchTaskResponse {
    /**
     * 任务 ID。
     */
    JobId?: string;
    /**
     * 失败的任务列表。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    FailedList?: Array<FailReason>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeDefaultCertificates请求参数结构体
 */
export interface DescribeDefaultCertificatesRequest {
    /**
     * 站点 ID。
     */
    ZoneId?: string;
    /**
     * 过滤条件，Filters.Values的上限为5。详细的过滤条件如下：
  <li>zone-id<br>   按照【<strong>站点ID</strong>】进行过滤。站点ID形如：zone-xxx。<br>   类型：String<br>   必选：是 </li>
     */
    Filters?: Array<Filter>;
    /**
     * 分页查询偏移量。默认值：0。
     */
    Offset?: number;
    /**
     * 分页查询限制数目。默认值：20，最大值：100。
     */
    Limit?: number;
}
/**
 * ModifyApplicationProxyRule返回参数结构体
 */
export interface ModifyApplicationProxyRuleResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DDoS配置
 */
export interface DDoS {
    /**
     * 开关，取值有：
  <li>on：开启；</li>
  <li>off：关闭。</li>
     */
    Switch: string;
}
/**
 * CreateConfigGroupVersion返回参数结构体
 */
export interface CreateConfigGroupVersionResponse {
    /**
     * 版本 ID。
     */
    VersionId?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DownloadL7Logs请求参数结构体
 */
export interface DownloadL7LogsRequest {
    /**
     * 开始时间。
     */
    StartTime: string;
    /**
     * 结束时间。
     */
    EndTime: string;
    /**
     * 站点ID集合，此参数必填。
     */
    ZoneIds?: Array<string>;
    /**
     * 子域名集合，不填默认选择全部子域名。
     */
    Domains?: Array<string>;
    /**
     * 分页查询的限制数目，默认值为 20，最大查询条目为 300。
     */
    Limit?: number;
    /**
     * 分页的偏移量，默认值为 0。
     */
    Offset?: number;
}
/**
 * 规则引擎规则详情
 */
export interface RuleItem {
    /**
     * 规则ID。
     */
    RuleId: string;
    /**
     * 规则名称，名称字符串长度 1~255。
     */
    RuleName: string;
    /**
     * 规则状态，取值有:
  <li> enable: 启用； </li>
  <li> disable: 未启用。 </li>
     */
    Status: string;
    /**
     * 规则内容。
     */
    Rules: Array<Rule>;
    /**
     * 规则优先级, 值越大优先级越高，最小为 1。
     */
    RulePriority: number;
    /**
     * 规则标签。
     */
    Tags: Array<string>;
}
/**
 * 缓存时间设置
 */
export interface Cache {
    /**
     * 缓存配置开关，取值有：
  <li>on：开启；</li>
  <li>off：关闭。</li>
     */
    Switch: string;
    /**
     * 缓存过期时间设置。
  单位为秒，最大可设置为 365 天。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CacheTime?: number;
    /**
     * 是否开启强制缓存，取值有：
  <li>on：开启；</li>
  <li>off：关闭。</li>
  注意：此字段可能返回 null，表示取不到有效值。
     * @deprecated
     */
    IgnoreCacheControl?: string;
}
/**
 * 域名配置信息
 */
export interface DetailHost {
    /**
     * 站点ID。
     */
    ZoneId: string;
    /**
     * 加速服务状态，取值为：
  <li> process：部署中；</li>
  <li> online：已启动；</li>
  <li> offline：已关闭。</li>
     */
    Status: string;
    /**
     * 域名。
     */
    Host: string;
    /**
     * 站点名称。
     */
    ZoneName: string;
    /**
     * 分配的Cname域名
     */
    Cname: string;
    /**
     * 资源ID。
     */
    Id: string;
    /**
     * 实例ID。
     */
    InstanceId: string;
    /**
     * 锁状态。
     */
    Lock: number;
    /**
     * 域名状态类型。
     */
    Mode: number;
    /**
     * 域名加速地域，取值有：
  <li> global：全球；</li>
  <li> mainland：中国大陆；</li>
  <li> overseas：境外区域。</li>
     */
    Area: string;
    /**
     * 加速类型配置项。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AccelerateType: AccelerateType;
    /**
     * Https配置项。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Https: Https;
    /**
     * 缓存配置项。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CacheConfig: CacheConfig;
    /**
     * 源站配置项。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Origin: Origin;
    /**
     * 安全类型。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SecurityType: SecurityType;
    /**
     * 缓存键配置项。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CacheKey: CacheKey;
    /**
     * 智能压缩配置项。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Compression: Compression;
    /**
     * Waf防护配置项。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Waf: Waf;
    /**
     * CC防护配置项。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CC: CC;
    /**
     * DDoS防护配置。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DDoS: DDoS;
    /**
     * 智能路由配置项。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SmartRouting: SmartRouting;
    /**
     * Ipv6访问配置项。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Ipv6: Ipv6;
    /**
     * 回源时是否携带客户端IP所属地域信息的配置。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ClientIpCountry: ClientIpCountry;
}
/**
 * DescribeRealtimeLogDeliveryTasks返回参数结构体
 */
export interface DescribeRealtimeLogDeliveryTasksResponse {
    /**
     * 符合查询条件的实时日志投递任务个数。
     */
    TotalCount?: number;
    /**
     * 符合查询条件的所有实时日志投递任务列表。
     */
    RealtimeLogDeliveryTasks?: Array<RealtimeLogDeliveryTask>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeConfigGroupVersions返回参数结构体
 */
export interface DescribeConfigGroupVersionsResponse {
    /**
     * 版本总数。
     */
    TotalCount?: number;
    /**
     * 版本信息列表。
     */
    ConfigGroupVersionInfos?: Array<ConfigGroupVersionInfo>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DeleteRealtimeLogDeliveryTask返回参数结构体
 */
export interface DeleteRealtimeLogDeliveryTaskResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 规则引擎条件参数
 */
export interface RuleCondition {
    /**
     * 运算符，取值有：
  <li> equal: 等于； </li>
  <li> notequal: 不等于；</li>
  <li> exist: 存在； </li>
  <li> notexist: 不存在。</li>
     */
    Operator: string;
    /**
     * 匹配类型，取值有： <li> filename：文件名； </li> <li> extension：文件后缀； </li> <li> host：HOST； </li> <li> full_url：URL Full，当前站点下完整 URL 路径，必须包含 HTTP 协议，Host 和 路径； </li> <li> url：URL Path，当前站点下 URL 路径的请求； </li><li>client_country：客户端国家/地区；</li> <li> query_string：查询字符串，当前站点下请求URL的查询字符串； </li> <li> request_header：HTTP请求头部。 </li><li> client_ip：客户端 IP。 </li>
     */
    Target: string;
    /**
     * 对应匹配类型的参数值，仅在匹配类型为查询字符串或HTTP请求头并且运算符取值为存在或不存在时允许传空数组，对应匹配类型有：
  <li> 文件后缀：jpg、txt等文件后缀；</li>
  <li> 文件名称：例如 foo.jpg 中的 foo；</li>
  <li> 全部（站点任意请求）： all； </li>
  <li> HOST：当前站点下的 host ，例如www.maxx55.com；</li>
  <li> URL Path：当前站点下 URL 路径的请求，例如：/example；</li>
  <li> URL Full：当前站点下完整 URL 请求，必须包含 HTTP 协议，Host 和 路径，例如：https://www.maxx55.cn/example；</li>
  <li> 客户端国家/地区：符合ISO3166标准的国家/地区标识；</li>
  <li> 查询字符串: 当前站点下URL请求中查询字符串的参数值，例如lang=cn&version=1中的cn和1； </li>
  <li> HTTP 请求头: HTTP请求头部字段值，例如Accept-Language:zh-CN,zh;q=0.9中的zh-CN,zh;q=0.9。 </li>
  <li> 客户端 IP: 当前请求携带的客户端请求IP，支持IPv4 IPv6, 支持IP段。 </li>
     */
    Values?: Array<string>;
    /**
     * 是否忽略参数值的大小写，默认值为 false。
     */
    IgnoreCase?: boolean;
    /**
     * 对应匹配类型的参数名称，在 Target 值为以下取值时有效，有效时值不能为空：
  <li> query_string（查询字符串）: 当前站点下URL请求中查询字符串的参数名称，例如lang=cn&version=1中的lang和version； </li>
  <li> request_header（HTTP 请求头）: HTTP请求头部字段名，例如Accept-Language:zh-CN,zh;q=0.9中的Accept-Language。 </li>
     */
    Name?: string;
    /**
     * 是否忽略参数名称的大小写，默认值为 false。
  注意：此字段可能返回 null，表示取不到有效值。
     * @deprecated
     */
    IgnoreNameCase?: boolean;
}
/**
 * DescribeOverviewL7Data返回参数结构体
 */
export interface DescribeOverviewL7DataResponse {
    /**
     * 查询结果的总条数。
     */
    TotalCount?: number;
    /**
     * 七层监控类时序流量数据列表。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Data?: Array<TimingDataRecord>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeEnvironments返回参数结构体
 */
export interface DescribeEnvironmentsResponse {
    /**
     * 环境总数。
     */
    TotalCount?: number;
    /**
     * 环境列表。
     */
    EnvInfos?: Array<EnvInfo>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 统计曲线数据项
 */
export interface TimingDataItem {
    /**
     * 返回数据对应时间点，采用unix秒级时间戳。
     */
    Timestamp: number;
    /**
     * 具体数值。
     */
    Value: number;
}
/**
 * RateLimit规则
 */
export interface RateLimitUserRule {
    /**
     * 速率限制统计阈值，单位是次，取值范围0-4294967294。
     */
    Threshold: number;
    /**
     * 速率限制统计时间，取值范围 10/20/30/40/50/60 单位是秒。
     */
    Period: number;
    /**
     * 规则名，只能以英文字符，数字，下划线组合，且不能以下划线开头。
     */
    RuleName: string;
    /**
     * 处置动作，取值有： <li>monitor：观察；</li> <li>drop：拦截；</li><li> redirect：重定向；</li><li> page：指定页面；</li><li>alg：JavaScript 挑战。</li>
     */
    Action: string;
    /**
     * 惩罚时长，0-2天。
     */
    PunishTime: number;
    /**
     * 处罚时长单位，取值有：
  <li>second：秒；</li>
  <li>minutes：分钟；</li>
  <li>hour：小时。</li>
     */
    PunishTimeUnit: string;
    /**
     * 规则状态，取值有：
  <li>on：生效；</li>
  <li>off：不生效。</li>默认 on 生效。
     */
    RuleStatus: string;
    /**
     * 规则详情。
     */
    AclConditions: Array<AclCondition>;
    /**
     * 规则权重，取值范围0-100。
     */
    RulePriority: number;
    /**
     * 规则 Id。仅出参使用。
     */
    RuleID?: number;
    /**
     * 过滤词，取值有：
  <li>sip：客户端 ip。</li>
  默认为空字符串。
     */
    FreqFields?: Array<string>;
    /**
     * 更新时间。仅出参使用。修改时默认为当前时间。
     */
    UpdateTime?: string;
    /**
     * 统计范围。取值有：
  <li>source_to_eo：（响应）源站到  EdgeOne；</li>
  <li>client_to_eo：（请求）客户端到  EdgeOne。</li>
  默认为 source_to_eo。
     */
    FreqScope?: Array<string>;
    /**
     * 自定义返回页面的名称。Action 是 page 时必填，且不能为空。
     */
    Name?: string;
    /**
     * 自定义响应 Id。该 Id 可通过查询自定义错误页列表接口获取。默认值为default，使用系统默认页面。Action 是 page 时必填，且不能为空。
     */
    CustomResponseId?: string;
    /**
     * 自定义返回页面的响应码。Action 是 page 时必填，且不能为空，取值: 100~600，不支持 3xx 响应码。默认值：567。
     */
    ResponseCode?: number;
    /**
     * 重定向时候的地址。Action 是 redirect 时必填，且不能为空。
     */
    RedirectUrl?: string;
}
/**
 * CreatePlanForZone请求参数结构体
 */
export interface CreatePlanForZoneRequest {
    /**
     * 站点ID。
     */
    ZoneId: string;
    /**
     * 所要购买套餐的类型，取值有：
  <li> sta: 全球内容分发网络（不包括中国大陆）标准版套餐； </li>
  <li> sta_with_bot: 全球内容分发网络（不包括中国大陆）标准版套餐附带bot管理；</li>
  <li> sta_cm: 中国大陆内容分发网络标准版套餐； </li>
  <li> sta_cm_with_bot: 中国大陆内容分发网络标准版套餐附带bot管理；</li>
  <li> sta_global ：全球内容分发网络（包括中国大陆）标准版套餐； </li>
  <li> sta_global_with_bot ：全球内容分发网络（包括中国大陆）标准版套餐附带bot管理；</li>
  <li> ent: 全球内容分发网络（不包括中国大陆）企业版套餐； </li>
  <li> ent_with_bot: 全球内容分发网络（不包括中国大陆）企业版套餐附带bot管理；</li>
  <li> ent_cm: 中国大陆内容分发网络企业版套餐； </li>
  <li> ent_cm_with_bot: 中国大陆内容分发网络企业版套餐附带bot管理。</li>
  <li> ent_global ：全球内容分发网络（包括中国大陆）企业版套餐； </li>
  <li> ent_global_with_bot ：全球内容分发网络（包括中国大陆）企业版套餐附带bot管理。</li>当前账户可购买套餐类型请以<a href="https://cloud.tencent.com/document/product/1552/80606">DescribeAvailablePlans</a>返回为准。
     */
    PlanType: string;
}
/**
 * CreateL4ProxyRules返回参数结构体
 */
export interface CreateL4ProxyRulesResponse {
    /**
     * 新增转发规则的 ID，以数组的形式返回。
     */
    L4ProxyRuleIds?: Array<string>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 缓存键配置。
 */
export interface CacheKey {
    /**
     * 是否开启全路径缓存，取值有：
  <li>on：开启全路径缓存（即关闭参数忽略）；</li>
  <li>off：关闭全路径缓存（即开启参数忽略）。</li>
  注意：此字段可能返回 null，表示取不到有效值。
     */
    FullUrlCache?: string;
    /**
     * 是否忽略大小写缓存，取值有：
  <li>on：忽略；</li>
  <li>off：不忽略。</li>
  注意：此字段可能返回 null，表示取不到有效值。
     */
    IgnoreCase?: string;
    /**
     * CacheKey 中包含请求参数。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    QueryString?: QueryString;
}
/**
 * DownloadL4Logs返回参数结构体
 */
export interface DownloadL4LogsResponse {
    /**
     * 查询结果的总条数。
     */
    TotalCount?: number;
    /**
     * 四层离线日志数据列表。
     */
    Data?: Array<L4OfflineLog>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * BindSharedCNAME请求参数结构体
 */
export interface BindSharedCNAMERequest {
    /**
     * 加速域名所属站点 ID。
     */
    ZoneId: string;
    /**
     * 绑定类型，取值有：
  <li>bind：绑定；</li>
  <li>unbind：解绑。</li>
     */
    BindType: string;
    /**
     * 接入域名与共享 CNAME 的绑定关系。
     */
    BindSharedCNAMEMaps: Array<BindSharedCNAMEMap>;
}
/**
 * IP黑白名单及IP区域控制配置
 */
export interface IpTableConfig {
    /**
     * 开关，取值有：
  <li>on：开启；</li>
  <li>off：关闭；</li>
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Switch: string;
    /**
     * 基础管控规则。如果为null，默认使用历史配置。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    IpTableRules?: Array<IpTableRule>;
}
/**
 * DeleteOriginGroup返回参数结构体
 */
export interface DeleteOriginGroupResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeL4Proxy请求参数结构体
 */
export interface DescribeL4ProxyRequest {
    /**
     * 四层代理实例所属站点的 ID。
     */
    ZoneId: string;
    /**
     * 分页查询偏移量，不填写时默认为 0。
     */
    Offset?: number;
    /**
     * 分页查询限制数目。默认值：20，最大值：1000。
     */
    Limit?: number;
    /**
     * 过滤条件，Filters.Values 的上限为 20。该参数不填写时，返回当前 zone-id 下所有四层代理实例信息。详细的过滤条件如下：
  <li>proxy-id：按照四层代理实例 ID 进行过滤；</li>
  <li>ddos-protection-type：按照安全防护类型进行过滤。</li>
  
  
     */
    Filters?: Array<Filter>;
}
/**
 * DescribeIdentifications请求参数结构体
 */
export interface DescribeIdentificationsRequest {
    /**
     * 过滤条件，Filters.Values的上限为20。详细的过滤条件如下：
  <li>zone-name：按照站点名称进行过滤。</li>
     */
    Filters: Array<Filter>;
    /**
     * 分页查询偏移量。默认值：0。
     */
    Offset?: number;
    /**
     * 分页查询限制数目。默认值：20，最大值：1000。
     */
    Limit?: number;
}
/**
 * ModifyHostsCertificate返回参数结构体
 */
export interface ModifyHostsCertificateResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CreateAccelerationDomain请求参数结构体
 */
export interface CreateAccelerationDomainRequest {
    /**
     * 加速域名所属站点 ID。
     */
    ZoneId: string;
    /**
     * 加速域名。
     */
    DomainName: string;
    /**
     * 源站信息。
     */
    OriginInfo: OriginInfo;
    /**
     * 回源协议，取值有：
  <li>FOLLOW: 协议跟随；</li>
  <li>HTTP: HTTP协议回源；</li>
  <li>HTTPS: HTTPS协议回源。</li>
  <li>不填默认为： FOLLOW。</li>
     */
    OriginProtocol?: string;
    /**
     * HTTP回源端口，取值为1-65535，当OriginProtocol=FOLLOW/HTTP时生效, 不填默认为80。
     */
    HttpOriginPort?: number;
    /**
     * HTTPS回源端口，取值为1-65535，当OriginProtocol=FOLLOW/HTTPS时生效，不填默认为443。
     */
    HttpsOriginPort?: number;
    /**
     * IPv6状态，取值有：
  <li>follow：遵循站点IPv6配置；</li>
  <li>on：开启状态；</li>
  <li>off：关闭状态。</li>
  <li>不填默认为：follow。</li>
     */
    IPv6Status?: string;
}
/**
 * 规则引擎常规类型的动作
 */
export interface NormalAction {
    /**
     * 功能名称，功能名称填写规范可调用接口 [查询规则引擎的设置参数](https://cloud.tencent.com/document/product/1552/80618) 查看。
     */
    Action: string;
    /**
     * 参数。
     */
    Parameters: Array<RuleNormalActionParams>;
}
/**
 * Top数据的详细信息
 */
export interface TopDetailData {
    /**
     * 字段名。
     */
    Key: string;
    /**
     * 字段值。
     */
    Value: number;
}
/**
 * DescribeZoneSetting返回参数结构体
 */
export interface DescribeZoneSettingResponse {
    /**
     * 站点配置。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ZoneSetting?: ZoneSetting;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribePurgeTasks请求参数结构体
 */
export interface DescribePurgeTasksRequest {
    /**
     * 站点ID。
  必填参数。
     */
    ZoneId?: string;
    /**
     * 查询起始时间，时间与job-id必填一个。
     */
    StartTime?: string;
    /**
     * 查询结束时间，时间与job-id必填一个。
     */
    EndTime?: string;
    /**
     * 分页查询偏移量，默认为0。
     */
    Offset?: number;
    /**
     * 分页查限制数目，默认值：20，最大值：1000。
     */
    Limit?: number;
    /**
     * 过滤条件，Filters.Values的上限为20。详细的过滤条件如下：<li>job-id<br>   按照【<strong>任务ID</strong>】进行过滤。job-id形如：1379afjk91u32h，暂不支持多值。<br>   类型：String<br>   必选：否<br>   模糊查询：不支持</li><li>target<br>   按照【<strong>目标资源信息</strong>】进行过滤，target形如：http://www.qq.com/1.txt或者tag1，暂不支持多值<br>   类型：String<br>   必选：否<br>   模糊查询：不支持</li><li>domains<br>   按照【<strong>域名</strong>】进行过滤，domains形如：www.qq.com<br>   类型：String<br>   必选：否<br>   模糊查询：不支持。</li><li>statuses<br>   按照【<strong>任务状态</strong>】进行过滤<br>   必选：否<br>   模糊查询：不支持。<br>   可选项：<br>   processing：处理中<br>   success：成功<br>   failed：失败<br>   timeout：超时</li><li>type<br>   按照【<strong>清除缓存类型</strong>】进行过滤，暂不支持多值。<br>   类型：String<br>   必选：否<br>   模糊查询：不支持<br>   可选项：<br>   purge_url：URL<br>   purge_prefix：前缀<br>   purge_all：全部缓存内容<br>   purge_host：Hostname<br>   purge_cache_tag：CacheTag</li>
     */
    Filters?: Array<AdvancedFilter>;
}
/**
 * IdentifyZone请求参数结构体
 */
export interface IdentifyZoneRequest {
    /**
     * 站点名称。
     */
    ZoneName: string;
    /**
     * 站点下的子域名。如果验证站点下的子域名，则传该值，否则为空。
  
     */
    Domain?: string;
}
/**
 * 缓存规则配置。
 */
export interface CacheConfig {
    /**
     * 缓存配置。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Cache?: Cache;
    /**
     * 不缓存配置。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    NoCache?: NoCache;
    /**
     * 遵循源站配置。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    FollowOrigin?: FollowOrigin;
}
/**
 * UpgradePlan返回参数结构体
 */
export interface UpgradePlanResponse {
    /**
     * 订单号。
     */
    DealName?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 离线缓存是否开启
 */
export interface OfflineCache {
    /**
     * 离线缓存是否开启，取值有：
  <li>on：开启；</li>
  <li>off：关闭。</li>
     */
    Switch: string;
}
/**
 * CreateConfigGroupVersion请求参数结构体
 */
export interface CreateConfigGroupVersionRequest {
    /**
     * 站点 ID。
     */
    ZoneId: string;
    /**
     * 待新建版本的配置组 ID。
     */
    GroupId: string;
    /**
     * 待导入的配置内容。要求采用 JSON 格式，按照 UTF-8 方式进行编码。配置文件内容可参考下方示例。
     */
    Content: string;
    /**
     * 版本描述，可输入最大长度为 50 个字符，可以通过本字段填写该版本的使用场景等。
     */
    Description?: string;
}
/**
 * 用户自定义规则
 */
export interface AclUserRule {
    /**
     * 规则名。
     */
    RuleName: string;
    /**
     * 处罚动作，取值有：
  <li>trans：放行；</li>
  <li>drop：拦截；</li>
  <li>monitor：观察；</li>
  <li>ban：IP 封禁；</li>
  <li>redirect：重定向；</li>
  <li>page：指定页面；</li>
  <li>alg：JavaScript 挑战。</li>
     */
    Action: string;
    /**
     * 规则状态，取值有：
  <li>on：生效；</li>
  <li>off：失效。</li>
     */
    RuleStatus: string;
    /**
     * 自定义规则。
     */
    AclConditions: Array<AclCondition>;
    /**
     * 规则优先级，取值范围0-100。
     */
    RulePriority: number;
    /**
     * 规则 Id。仅出参使用。
     */
    RuleID?: number;
    /**
     * 更新时间。仅出参使用。
     */
    UpdateTime?: string;
    /**
     * ip 封禁的惩罚时间。Action 是 ban 时必填，且不能为空，取值范围0-2天。
     */
    PunishTime?: number;
    /**
     * ip 封禁的惩罚时间单位，取值有：
  <li>second：秒；</li>
  <li>minutes：分；</li>
  <li>hour：小时。</li>默认为 second。
     */
    PunishTimeUnit?: string;
    /**
     * 自定义返回页面的名称。Action 是 page 时必填，且不能为空。
     */
    Name?: string;
    /**
     * 自定义返回页面的实例 Id。默认为0，代表使用系统默认拦截页面。该参数已废弃。
     */
    PageId?: number;
    /**
     * 自定义响应 Id。该 Id 可通过查询自定义错误页列表接口获取。默认值为default，使用系统默认页面。Action 是 page 时必填，且不能为空。
     */
    CustomResponseId?: string;
    /**
     * 自定义返回页面的响应码。Action 是 page 时必填，且不能为空，取值: 100~600，不支持 3xx 响应码。默认值：567。
     */
    ResponseCode?: number;
    /**
     * 重定向时候的地址。Action 是 redirect 时必填，且不能为空。
     */
    RedirectUrl?: string;
}
/**
 * DescribeDDoSAttackEvent请求参数结构体
 */
export interface DescribeDDoSAttackEventRequest {
    /**
     * 开始时间，时间范围为 30 天。
     */
    StartTime: string;
    /**
     * 结束时间，时间范围为 30 天。
     */
    EndTime: string;
    /**
     * ddos策略组集合，不填默认选择全部策略。
     */
    PolicyIds?: Array<number | bigint>;
    /**
     * 站点集合，此参数必填。
     */
    ZoneIds?: Array<string>;
    /**
     * 分页查询的限制数目，默认值为20，最大查询条目为1000。
     */
    Limit?: number;
    /**
     * 分页的偏移量，默认值为0。
     */
    Offset?: number;
    /**
     * 展示攻击详情的参数，若填false，默认只返回攻击次数，不返回攻击详情；若填true，返回攻击详情。
     */
    ShowDetail?: boolean;
    /**
     * 数据归属地区，取值有：
  <li>overseas：全球（除中国大陆地区）数据；</li>
  <li>mainland：中国大陆地区数据；</li>
  <li>global：全球数据；</li>不填默认取值为global。
     */
    Area?: string;
    /**
     * 排序字段，取值有：
  <li>MaxBandWidth：带宽峰值；</li>
  <li>AttackStartTime：攻击开始时间。</li>不填默认值为：AttackStartTime。
     */
    OrderBy?: string;
    /**
     * 排序方式，取值有：
  <li>asc：升序方式；</li>
  <li>desc：降序方式。</li>不填默认值为：desc。
     */
    OrderType?: string;
}
/**
 * CreateL4Proxy返回参数结构体
 */
export interface CreateL4ProxyResponse {
    /**
     * 四层实例 ID。
     */
    ProxyId?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeOriginGroup请求参数结构体
 */
export interface DescribeOriginGroupRequest {
    /**
     * 站点ID，此参数必填。
     */
    ZoneId?: string;
    /**
     * 分页查询偏移量，不填默认为0。
     */
    Offset?: number;
    /**
     * 分页查询限制数目，不填默认为20，取值：1-1000。
     */
    Limit?: number;
    /**
     * 过滤条件，Filters.Values的上限为20。详细的过滤条件如下：
  <li>origin-group-id<br>   按照【<strong>源站组ID</strong>】进行过滤。源站组ID形如：origin-2ccgtb24-7dc5-46s2-9r3e-95825d53dwe3a<br>   模糊查询：不支持</li><li>origin-group-name<br>   按照【<strong>源站组名称</strong>】进行过滤<br>   模糊查询：支持。使用模糊查询时，仅支持填写一个源站组名称</li>
     */
    Filters?: Array<AdvancedFilter>;
}
/**
 * DescribeIPRegion请求参数结构体
 */
export interface DescribeIPRegionRequest {
    /**
     * 待查询的 IP 列表，支持 IPV4 和 IPV6，最大可查询 100 条。
     */
    IPs: Array<string>;
}
/**
 * 时序类型详细数据
 */
export interface TimingTypeValue {
    /**
     * 数据和。
     */
    Sum: number;
    /**
     * 最大值。
     */
    Max: number;
    /**
     * 平均值。
     */
    Avg: number;
    /**
     * 指标名。
     */
    MetricName: string;
    /**
     * 详细数据。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Detail: Array<TimingDataItem>;
}
/**
 * CreatePlanForZone返回参数结构体
 */
export interface CreatePlanForZoneResponse {
    /**
     * 购买的资源名字列表。
     */
    ResourceNames?: Array<string>;
    /**
     * 购买的订单号列表。
     */
    DealNames?: Array<string>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ModifyL4ProxyRulesStatus返回参数结构体
 */
export interface ModifyL4ProxyRulesStatusResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CheckCnameStatus返回参数结构体
 */
export interface CheckCnameStatusResponse {
    /**
     * 加速域名 CNAME 状态信息列表。
     */
    CnameStatus?: Array<CnameStatus>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 实时日志投递到自定义 HTTP(S) 接口的配置信息。
 */
export interface CustomEndpoint {
    /**
     * 实时日志投递的自定义 HTTP 接口地址，暂仅支持 HTTP/HTTPS 协议。
     */
    Url: string;
    /**
     * 填写自定义的 SecretId 用于生成加密签名，如果源站需要鉴权此参数必填。
     */
    AccessId?: string;
    /**
     * 填写自定义的 SecretKey 用于生成加密签名，如果源站需要鉴权此参数必填。
     */
    AccessKey?: string;
    /**
     * 数据压缩类型，取值有: <li> gzip：使用 gzip 方式压缩。</li>不填表示不启用压缩。
     */
    CompressType?: string;
    /**
     * POST 请求投递日志时，使用的应用层协议类型，取值有：
  <li>http：HTTP 协议；</li>
  <li>https：HTTPS 协议。</li>如果不填默认根据填写的 URL 地址解析出协议类型。
     */
    Protocol?: string;
    /**
     * 投递日志时携带的自定义请求头。若您填写的头部名称为 Content-Type 等 EdgeOne 日志推送默认携带的头部，那么您填写的头部值将覆盖默认值。头部值引用单个变量${batchSize}，以获取每次 POST 请求中包含的日志条数。
     */
    Headers?: Array<Header>;
}
/**
 * VerifyOwnership请求参数结构体
 */
export interface VerifyOwnershipRequest {
    /**
     * 站点或者加速域名。
     */
    Domain: string;
}
/**
 * DeleteL4Proxy请求参数结构体
 */
export interface DeleteL4ProxyRequest {
    /**
     * 站点 ID。
     */
    ZoneId: string;
    /**
     * 四层代理实例 ID。
     */
    ProxyId: string;
}
/**
 * DeleteApplicationProxy请求参数结构体
 */
export interface DeleteApplicationProxyRequest {
    /**
     * 站点ID。
     */
    ZoneId: string;
    /**
     * 代理ID。
     */
    ProxyId: string;
}
/**
 * ModifyZoneStatus请求参数结构体
 */
export interface ModifyZoneStatusRequest {
    /**
     * 站点 ID。
     */
    ZoneId: string;
    /**
     * 站点状态，取值有：
  <li> false：开启站点；</li>
  <li> true：关闭站点。</li>
     */
    Paused: boolean;
}
/**
 * 失败原因
 */
export interface FailReason {
    /**
     * 失败原因。
     */
    Reason: string;
    /**
     * 处理失败的资源列表。
     */
    Targets: Array<string>;
}
/**
 * DescribeL4Proxy返回参数结构体
 */
export interface DescribeL4ProxyResponse {
    /**
     * 四层代理实例的数量。
     */
    TotalCount?: number;
    /**
     * 四层代理实例列表。
     */
    L4Proxies?: Array<L4Proxy>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ModifyOriginGroup返回参数结构体
 */
export interface ModifyOriginGroupResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DeleteAccelerationDomains请求参数结构体
 */
export interface DeleteAccelerationDomainsRequest {
    /**
     * 加速域名所属站点ID。
     */
    ZoneId: string;
    /**
     * 需要删除的加速域名ID列表。
     */
    DomainNames: Array<string>;
    /**
     * 是否强制删除。当域名存在关联资源（如马甲域名、流量调度功能）时，是否强制删除该域名，取值有：
  <li> true：删除该域名及所有关联资源；</li>
  <li> false：当该加速域名存在关联资源时，不允许删除。</li>不填写，默认值为：false。
     */
    Force?: boolean;
}
/**
 * RenewPlan返回参数结构体
 */
export interface RenewPlanResponse {
    /**
     * 订单号。
     */
    DealName?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 实时日志投递任务。
 */
export interface RealtimeLogDeliveryTask {
    /**
     * 实时日志投递任务 ID。
     */
    TaskId?: string;
    /**
     * 实时日志投递任务的名称。
     */
    TaskName?: string;
    /**
     * 实时日志投递任务的状态，取值有： <li>enabled: 已启用；</li> <li>disabled: 已停用；</li><li>deleted: 异常删除状态，请检查目的地腾讯云 CLS 日志集/日志主题是否已被删除。</li>
     */
    DeliveryStatus?: string;
    /**
     * 实时日志投递任务类型，取值有： <li>cls: 推送到腾讯云 CLS；</li> <li>custom_endpoint：推送到自定义 HTTP(S) 地址；</li> <li>s3：推送到 AWS S3 兼容存储桶地址。</li>
     */
    TaskType?: string;
    /**
     * 实时日志投递任务对应的实体（七层域名或者四层代理实例）列表。取值示例如下： <li>七层域名：domain.example.com；</li> <li>四层代理实例：sid-2s69eb5wcms7。</li>
     */
    EntityList?: Array<string>;
    /**
     * 数据投递类型，取值有： <li>domain：站点加速日志；</li> <li>application：四层代理日志；</li> <li>web-rateLiming：速率限制和 CC 攻击防护日志；</li> <li>web-attack：托管规则日志；</li> <li>web-rule：自定义规则日志；</li> <li>web-bot：Bot管理日志。</li>
     */
    LogType?: string;
    /**
     * 数据投递区域，取值有： <li>mainland：中国大陆境内；</li> <li>overseas：全球（不含中国大陆）。</li>
     */
    Area?: string;
    /**
     * 投递的预设字段列表。
     */
    Fields?: Array<string>;
    /**
     * 投递的自定义字段列表。
     */
    CustomFields?: Array<CustomField>;
    /**
     * 日志投递的过滤条件。
     */
    DeliveryConditions?: Array<DeliveryCondition>;
    /**
     * 采样比例，采用千分制，取值范围为1-1000，例如：605 表示采样比例为 60.5%。
     */
    Sample?: number;
    /**
     * 日志投递的输出格式。出参为 null 时表示为默认格式，默认格式逻辑如下：
  <li>当 TaskType 取值为 custom_endpoint 时，默认格式为多个 JSON 对象组成的数组，每个 JSON 对象为一条日志；</li>
  <li>当 TaskType 取值为 s3 时，默认格式为 JSON Lines。</li>
  注意：此字段可能返回 null，表示取不到有效值。
     */
    LogFormat?: LogFormat;
    /**
     * CLS 的配置信息。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CLS?: CLSTopic;
    /**
     * 自定义 HTTP 服务的配置信息。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CustomEndpoint?: CustomEndpoint;
    /**
     * AWS S3 兼容存储桶的配置信息。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    S3?: S3;
    /**
     * 创建时间。
     */
    CreateTime?: string;
    /**
     * 更新时间。
     */
    UpdateTime?: string;
}
/**
 * DescribeDeployHistory请求参数结构体
 */
export interface DescribeDeployHistoryRequest {
    /**
     * 站点 ID。
     */
    ZoneId: string;
    /**
     * 环境 ID。
     */
    EnvId: string;
    /**
     * 过滤条件，Filters.Values 的上限为 20，详细的过滤条件如下：
  <li>record-id：按照发布记录 ID 进行过滤进行过滤。</li>
     */
    Filters?: Array<AdvancedFilter>;
}
/**
 * 计费数据项
 */
export interface BillingData {
    /**
     * 时间。
     */
    Time?: string;
    /**
     * 数值。
     */
    Value?: number;
}
/**
 * DeleteZone返回参数结构体
 */
export interface DeleteZoneResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CreateRule返回参数结构体
 */
export interface CreateRuleResponse {
    /**
     * 规则 ID。
     */
    RuleId?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * BindZoneToPlan返回参数结构体
 */
export interface BindZoneToPlanResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * Waf规则
 */
export interface WafRule {
    /**
     * 托管规则开关，取值有：
  <li> on：开启；</li>
  <li> off：关闭。</li>
     */
    Switch: string;
    /**
     * 黑名单ID列表，将规则ID加入本参数列表中代表该ID关闭，即该规则ID不再生效。
     */
    BlockRuleIDs: Array<number | bigint>;
    /**
     * 观察模式ID列表，将规则ID加入本参数列表中代表该ID使用观察模式生效，即该规则ID进入观察模式。
     */
    ObserveRuleIDs: Array<number | bigint>;
}
/**
 * ModifyApplicationProxy请求参数结构体
 */
export interface ModifyApplicationProxyRequest {
    /**
     * 站点 ID。
     */
    ZoneId: string;
    /**
     * 代理 ID。
     */
    ProxyId: string;
    /**
     * 当 ProxyType=hostname 时，表示域名或子域名；
  当 ProxyType=instance 时，表示代理名称。
     */
    ProxyName: string;
    /**
     * 会话保持时间，取值范围：30-3600，单位：秒。
  不填写保持原有配置。
     */
    SessionPersistTime?: number;
    /**
     * 四层代理模式，取值有：
  <li>instance：表示实例模式。</li>不填写使用默认值instance。
     */
    ProxyType?: string;
    /**
     * Ipv6 访问配置，不填写保持原有配置。
     */
    Ipv6?: Ipv6;
    /**
     * 中国大陆加速优化配置。 不填写表示保持原有配置。
     */
    AccelerateMainland?: AccelerateMainland;
}
/**
 * ModifyAliasDomainStatus请求参数结构体
 */
export interface ModifyAliasDomainStatusRequest {
    /**
     * 站点 ID。
     */
    ZoneId: string;
    /**
     * 别称域名状态，取值有：
  <li> false：开启别称域名；</li>
  <li> true：关闭别称域名。</li>
     */
    Paused: boolean;
    /**
     * 待修改状态的别称域名名称。如果为空，则不执行修改状态操作。
     */
    AliasNames?: Array<string>;
}
/**
 * 共享 CNAME 和接入域名的绑定关系
 */
export interface BindSharedCNAMEMap {
    /**
     * 需要绑定或解绑的共享 CNAME。
     */
    SharedCNAME: string;
    /**
     * 加速域名，可传递多个，最多20个。
     */
    DomainNames: Array<string>;
}
/**
 * DeleteRealtimeLogDeliveryTask请求参数结构体
 */
export interface DeleteRealtimeLogDeliveryTaskRequest {
    /**
     * 站点 ID。
     */
    ZoneId: string;
    /**
     * 实时日志投递任务 ID。
     */
    TaskId: string;
}
/**
 * 规则引擎可应用于匹配请求的设置列表及其详细信息
 */
export interface RulesSettingAction {
    /**
     * 功能名称，取值有：
  <li> 访问URL 重写（AccessUrlRedirect）；</li>
  <li> 回源 URL 重写 （UpstreamUrlRedirect）；</li>
  <li> 自定义错误页面
  (ErrorPage)；</li>
  <li> QUIC（QUIC）；</li>
  <li> WebSocket （WebSocket）；</li>
  <li> 视频拖拽（VideoSeek）；</li>
  <li> Token 鉴权（Authentication）；</li>
  <li> 自定义CacheKey（CacheKey）；</li>
  <li> 节点缓存 TTL （Cache）；</li>
  <li> 浏览器缓存 TTL（MaxAge）；</li>
  <li> 离线缓存（OfflineCache）；</li>
  <li> 智能加速（SmartRouting）；</li>
  <li> 分片回源（RangeOriginPull）；</li>
  <li> HTTP/2 回源（UpstreamHttp2）；</li>
  <li> Host Header 重写（HostHeader）；</li>
  <li> 强制 HTTPS（ForceRedirect）；</li>
  <li> 回源 HTTPS（OriginPullProtocol）；</li>
  <li> 缓存预刷新（CachePrefresh）；</li>
  <li> 智能压缩（Compression）；</li>
  <li> 修改 HTTP 请求头（RequestHeader）；</li>
  <li> 修改HTTP响应头（ResponseHeader）;</li>
  <li> 状态码缓存 TTL（StatusCodeCache）;</li>
  <li> Hsts；</li>
  <li> ClientIpHeader；</li>
  <li> TlsVersion；</li>
  <li> OcspStapling。</li>
     */
    Action: string;
    /**
     * 参数信息。
     */
    Properties: Array<RulesProperties>;
}
/**
 * Ipv6访问配置
 */
export interface Ipv6 {
    /**
     * Ipv6 访问功能配置，取值有：
  <li>on：开启Ipv6访问功能；</li>
  <li>off：关闭Ipv6访问功能。</li>
     */
    Switch: string;
}
/**
 * ModifyApplicationProxyRule请求参数结构体
 */
export interface ModifyApplicationProxyRuleRequest {
    /**
     * 站点ID。
     */
    ZoneId: string;
    /**
     * 代理ID。
     */
    ProxyId: string;
    /**
     * 规则ID。
     */
    RuleId: string;
    /**
     * 源站类型，取值有：
  <li>custom：手动添加；</li>
  <li>origins：源站组。</li>
     */
    OriginType: string;
    /**
     * 端口，支持格式：
  <li>80：80端口；</li>
  <li>81-90：81至90端口。</li>
     */
    Port: Array<string>;
    /**
     * 协议，取值有：
  <li>TCP：TCP协议；</li>
  <li>UDP：UDP协议。</li>不填保持原有值。
     */
    Proto?: string;
    /**
     * 源站信息：
  <li>当 OriginType 为 custom 时，表示一个或多个源站，如`["8.8.8.8","9.9.9.9"]` 或 `OriginValue=["test.com"]`；</li>
  <li>当 OriginType 为 origins 时，要求有且仅有一个元素，表示源站组ID，如`["origin-537f5b41-162a-11ed-abaa-525400c5da15"]`。</li>
  
  不填保持原有值。
     */
    OriginValue?: Array<string>;
    /**
     * 传递客户端IP，取值有：
  <li>TOA：TOA（仅Proto=TCP时可选）；</li>
  <li>PPV1：Proxy Protocol传递，协议版本V1（仅Proto=TCP时可选）；</li>
  <li>PPV2：Proxy Protocol传递，协议版本V2；</li>
  <li>OFF：不传递。</li>不填保持原有值。
     */
    ForwardClientIp?: string;
    /**
     * 是否开启会话保持，取值有：
  <li>true：开启；</li>
  <li>false：关闭。</li>不填为false。
     */
    SessionPersist?: boolean;
    /**
     * 会话保持的时间，只有当SessionPersist为true时，该值才会生效。
     */
    SessionPersistTime?: number;
    /**
     * 源站端口，支持格式：
  <li>单端口：80；</li>
  <li>端口段：81-90，81至90端口。</li>
     */
    OriginPort?: string;
    /**
     * 规则标签。不填保持原有值。
     */
    RuleTag?: string;
}
/**
 * ACL配置
 */
export interface AclConfig {
    /**
     * 开关，取值有：
  <li> on：开启；</li>
  <li> off：关闭。</li>
     */
    Switch: string;
    /**
     * 用户自定义规则。
     */
    AclUserRules: Array<AclUserRule>;
    /**
     * 托管定制规则
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Customizes?: Array<AclUserRule>;
}
/**
 * Bot主动特征识别客户端行为校验。
 */
export interface AlgDetectJS {
    /**
     * 操作名称。
     */
    Name?: string;
    /**
     * 工作量证明 (proof_Of-Work)校验强度，默认low，取值有：
  <li>low：低；</li>
  <li>middle：中；</li>
  <li>high：高。</li>
     */
    WorkLevel?: string;
    /**
     * 执行方式，js延迟执行的时间。单位为ms，默认500，取值：0～1000。
     */
    ExecuteMode?: number;
    /**
     * 客户端末启用JS（末完成检测）统计周期。单位为秒，默认10，取值：5～3600。
     */
    InvalidStatTime?: number;
    /**
     * 客户端末启用JS（末完成检测）触发阈值。单位为次，默认300，取值：1～100000000。
     */
    InvalidThreshold?: number;
    /**
     * Bot主动特征识别客户端行为校验结果。
     */
    AlgDetectResults?: Array<AlgDetectResult>;
}
/**
 * 规则引擎嵌套规则
 */
export interface SubRuleItem {
    /**
     * 嵌套规则信息。
     */
    Rules: Array<SubRule>;
    /**
     * 规则标签。
     */
    Tags?: Array<string>;
}
/**
 * DeleteSecurityIPGroup请求参数结构体
 */
export interface DeleteSecurityIPGroupRequest {
    /**
     * 站点 Id。
     */
    ZoneId: string;
    /**
     * IP 组 Id。
     */
    GroupId: number;
}
/**
 * Grpc配置项
 */
export interface Grpc {
    /**
     * 是否开启 Grpc 配置，取值有：
  <li>on：开启；</li>
  <li>off：关闭。</li>
     */
    Switch: string;
}
/**
 * CreateAliasDomain返回参数结构体
 */
export interface CreateAliasDomainResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 回源时携带客户端IP所属地域信息，值的格式为ISO-3166-1两位字母代码。
 */
export interface ClientIpCountry {
    /**
     * 配置开关，取值有：
  <li>on：开启；</li>
  <li>off：关闭。</li>
     */
    Switch: string;
    /**
     * 存放客户端 IP 所属地域信息的请求头名称，当 Switch=on 时有效。
  为空则使用默认值：EO-Client-IPCountry。
     */
    HeaderName?: string;
}
/**
 * DeleteApplicationProxyRule请求参数结构体
 */
export interface DeleteApplicationProxyRuleRequest {
    /**
     * 站点ID。
     */
    ZoneId: string;
    /**
     * 代理ID。
     */
    ProxyId: string;
    /**
     * 规则ID。
     */
    RuleId: string;
}
/**
 * 站点归属权校验——文件校验信息。
 */
export interface FileAscriptionInfo {
    /**
     * 文件校验目录。
     */
    IdentifyPath: string;
    /**
     * 文件校验内容。
     */
    IdentifyContent: string;
}
/**
 * CreateRealtimeLogDeliveryTask返回参数结构体
 */
export interface CreateRealtimeLogDeliveryTaskResponse {
    /**
     * 创建成功的任务ID。
     */
    TaskId?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeTopL7CacheData返回参数结构体
 */
export interface DescribeTopL7CacheDataResponse {
    /**
     * 查询结果的总条数。
     */
    TotalCount?: number;
    /**
     * 七层缓存TopN流量数据列表。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Data?: Array<TopDataRecord>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 规则引擎可应用于匹配请求的设置详细信息，可选参数配置项
 */
export interface RuleChoicePropertiesItem {
    /**
     * 参数名称。
     */
    Name: string;
    /**
     * 参数值类型。
  <li> CHOICE：参数值只能在 ChoicesValue 中选择； </li>
  <li> TOGGLE：参数值为开关类型，可在 ChoicesValue 中选择；</li>
  <li> CUSTOM_NUM：参数值用户自定义，整型类型；</li>
  <li> CUSTOM_STRING：参数值用户自定义，字符串类型。</li>
     */
    Type: string;
    /**
     * 参数值的可选值。
  注意：若参数值为用户自定义则该数组为空数组。
     */
    ChoicesValue: Array<string>;
    /**
     * 数值参数的最小值，非数值参数或 Min 和 Max 值都为 0 则此项无意义。
     */
    Min: number;
    /**
     * 数值参数的最大值，非数值参数或 Min 和 Max 值都为 0 则此项无意义。
     */
    Max: number;
    /**
     * 参数值是否支持多选或者填写多个。
     */
    IsMultiple: boolean;
    /**
     * 是否允许为空。
     */
    IsAllowEmpty: boolean;
    /**
     * 特殊参数。
  <li> 为 NULL：RuleAction 选择 NormalAction；</li>
  <li> 成员参数 Id 为 Action：RuleAction 选择 RewirteAction；</li>
  <li> 成员参数 Id 为 StatusCode：RuleAction 选择 CodeAction。</li>
     */
    ExtraParameter: RuleExtraParameter;
}
/**
 * DescribeSecurityTemplateBindings返回参数结构体
 */
export interface DescribeSecurityTemplateBindingsResponse {
    /**
     * 指定策略模板的绑定关系列表。
  
  当某个站点中的域名包含在指定策略模板的绑定关系中时，绑定关系列表 `TemplateScope` 中会包含该站点的 `ZoneId`，和该站点下的和该策略模板有关的域名绑定关系。
  
  注意：当没有任何域名正在绑定或已经绑定到指定策略模板时，绑定关系为空。即：返回结构体中，`TemplateScope` 数组长度为 0。
  
  绑定关系中，同一域名可能在 `EntityStatus` 列表中重复出现，并标记为不同 `Status` 。例如，正在被绑定到其他策略模板的域名，会同时标记为 `online` 和 `pending` 。
     */
    SecurityTemplate?: Array<SecurityTemplateBinding>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ModifyAliasDomainStatus返回参数结构体
 */
export interface ModifyAliasDomainStatusResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeTimingL7AnalysisData请求参数结构体
 */
export interface DescribeTimingL7AnalysisDataRequest {
    /**
     * 开始时间。
     */
    StartTime: string;
    /**
     * 结束时间。
     */
    EndTime: string;
    /**
     * 指标列表，取值有:
  <li>l7Flow_outFlux: Edgeone 响应流量；</li>
  <li>l7Flow_inFlux: Edgeone 请求流量；</li>
  <li>l7Flow_outBandwidth: Edgeone 响应带宽；</li>
  <li>l7Flow_inBandwidth：Edgeone 请求带宽；</li>
  <li>l7Flow_request: 访问请求数；</li>
  <li>l7Flow_flux: 访问请求上行+下行流量；</li>
  <li>l7Flow_bandwidth：访问请求上行+下行带宽。</li>
     */
    MetricNames: Array<string>;
    /**
     * 站点 ID 集合, 此参数必填。
     */
    ZoneIds?: Array<string>;
    /**
     * 查询时间粒度，取值有：
  <li>min: 1分钟；</li>
  <li>5min: 5分钟；</li>
  <li>hour: 1小时；</li>
  <li>day: 1天。</li>不填将根据开始时间跟结束时间的间距自动推算粒度，具体为：1小时范围内以min粒度查询，2天范围内以5min粒度查询，7天范围内以hour粒度查询，超过7天以day粒度查询。
     */
    Interval?: string;
    /**
     * 过滤条件，详细的过滤条件Key值如下：
  <li>country<br>   按照【<strong>国家/地区</strong>】进行过滤，国家/地区遵循 <a href="https://baike.baidu.com/item/ISO%203166-1/5269555">ISO 3166</a> 规范。</li>
  <li>province<br>   按照【<strong>省份</strong>】进行过滤，此参数只支持服务区域为中国大陆。</li>
  <li>isp<br>   按照【<strong>运营商</strong>】进行过滤，此参数只支持服务区域为中国大陆。<br>   对应的Value可选项如下：<br>   2：中国电信；<br>   26：中国联通；<br>   1046：中国移动；<br>   3947：中国铁通；<br>   38：教育网；<br>   43：长城宽带；<br>   0：其他运营商。</li>
  <li>domain<br>   按照【<strong>子域名</strong>】进行过滤，子域名形如： test.example.com。</li>
  <li>url<br>   按照【<strong>URL Path</strong>】进行过滤，URL Path形如：/content或/content/test.jpg。<br>   若只填写url参数，则最多可查询近30天的数据；<br>   若同时填写url+Zonelds参数，则支持的查询数据范围为套餐支持的<a href="https://cloud.tencent.com/document/product/1552/77380#edgeone-.E5.A5.97.E9.A4.90">数据分析最大查询范围</a>与30天两者中的较小值。</li>
  <li>referer<br>   按照【<strong>Referer头信息</strong>】进行过滤, Referer形如：example.com。<br>   若只填写referer参数，则最多可查询近30天的数据；<br>   若同时填写referer+Zonelds参数，则支持的查询数据范围为套餐支持的<a href="https://cloud.tencent.com/document/product/1552/77380#edgeone-.E5.A5.97.E9.A4.90">数据分析最大查询范围</a>与30天两者中的较小值。</li>
  <li>resourceType<br>   按照【<strong>资源类型</strong>】进行过滤，资源类型一般是文件后缀，形如: .jpg, .css。<br>   若只填写resourceType参数，则最多可查询近30天的数据；<br>   若同时填写resourceType+Zonelds参数，则支持的查询数据范围为套餐支持的<a href="https://cloud.tencent.com/document/product/1552/77380#edgeone-.E5.A5.97.E9.A4.90">数据分析最大查询范围</a>与30天两者中的较小值。</li>
  <li>protocol<br>   按照【<strong>HTTP协议版本</strong>】进行过滤。<br>   对应的Value可选项如下：<br>   HTTP/1.0：HTTP 1.0；<br>   HTTP/1.1：HTTP 1.1；<br>   HTTP/2.0：HTTP 2.0；<br>   HTTP/3.0：HTTP 3.0；<br>   WebSocket：WebSocket。</li>
  <li>socket<br>   按照【<strong>HTTP协议类型</strong>】进行过滤。<br>   对应的Value可选项如下：<br>   HTTP：HTTP 协议；<br>   HTTPS：HTTPS协议；<br>   QUIC：QUIC协议。</li>
  <li>statusCode<br>   按照【<strong>状态码</strong>】进行过滤。<br>   若只填写statusCode参数，则最多可查询近30天的数据；<br>   若同时填写statusCode+Zonelds参数，则支持的查询数据范围为套餐支持的<a href="https://cloud.tencent.com/document/product/1552/77380#edgeone-.E5.A5.97.E9.A4.90">数据分析最大查询范围</a>与30天两者中的较小值。<br>   对应的Value可选项如下：<br>   1XX：1xx类型的状态码；<br>   100：100状态码；<br>   101：101状态码；<br>   102：102状态码；<br>   2XX：2xx类型的状态码；<br>   200：200状态码；<br>   201：201状态码；<br>   202：202状态码；<br>   203：203状态码；<br>   204：204状态码；<br>   205：205状态码；<br>   206：206状态码；<br>   207：207状态码；<br>   3XX：3xx类型的状态码；<br>   300：300状态码；<br>   301：301状态码；<br>   302：302状态码；<br>   303：303状态码；<br>   304：304状态码；<br>   305：305状态码；<br>   307：307状态码；<br>   4XX：4xx类型的状态码；<br>   400：400状态码；<br>   401：401状态码；<br>   402：402状态码；<br>   403：403状态码；<br>   404：404状态码；<br>   405：405状态码；<br>   406：406状态码；<br>   407：407状态码；<br>   408：408状态码；<br>   409：409状态码；<br>   410：410状态码；<br>   411：411状态码；<br>   412：412状态码；<br>   412：413状态码；<br>   414：414状态码；<br>   415：415状态码；<br>   416：416状态码；<br>   417：417状态码；<br>   422：422状态码；<br>   423：423状态码；<br>   424：424状态码；<br>   426：426状态码；<br>   451：451状态码；<br>   5XX：5xx类型的状态码；<br>   500：500状态码；<br>   501：501状态码；<br>   502：502状态码；<br>   503：503状态码；<br>   504：504状态码；<br>   505：505状态码；<br>   506：506状态码；<br>   507：507状态码；<br>   510：510状态码；<br>   514：514状态码；<br>   544：544状态码。</li>
  <li>browserType<br>   按照【<strong>浏览器类型</strong>】进行过滤。<br>   若只填写browserType参数，则最多可查询近30天的数据；<br>   若同时填写browserType+Zonelds参数，则支持的查询数据范围为套餐支持的<a href="https://cloud.tencent.com/document/product/1552/77380#edgeone-.E5.A5.97.E9.A4.90">数据分析最大查询范围</a>与30天两者中的较小值。<br>   对应Value的可选项如下：<br>   Firefox：Firefox浏览器；<br>   Chrome：Chrome浏览器；<br>   Safari：Safari浏览器；<br>   Other：其他浏览器类型；<br>   Empty：浏览器类型为空；<br>   Bot：搜索引擎爬虫；<br>   MicrosoftEdge：MicrosoftEdge浏览器；<br>   IE：IE浏览器；<br>   Opera：Opera浏览器；<br>   QQBrowser：QQ浏览器；<br>   LBBrowser：LB浏览器；<br>   MaxthonBrowser：Maxthon浏览器；<br>   SouGouBrowser：搜狗浏览器；<br>   BIDUBrowser：百度浏览器；<br>   TaoBrowser：淘浏览器；<br>   UBrowser：UC浏览器。</li>
  <li>deviceType<br>   按照【<strong>设备类型</strong>】进行过滤。<br>   若只填写deviceType参数，则最多可查询近30天的数据；<br>   若同时填写deviceType+Zonelds参数，则支持的查询数据范围为套餐支持的<a href="https://cloud.tencent.com/document/product/1552/77380#edgeone-.E5.A5.97.E9.A4.90">数据分析最大查询范围</a>与30天两者中的较小值。<br>   对应Value的可选项如下：<br>   TV：TV设备；<br>   Tablet：Tablet设备；<br>   Mobile：Mobile设备；<br>   Desktop：Desktop设备；<br>   Other：其他设备类型；<br>   Empty：设备类型为空。</li>
  <li>operatingSystemType<br>   按照【<strong>操作系统类型</strong>】进行过滤。<br>   若只填写operatingSystemType参数，则最多可查询近30天的数据；<br>   若同时填写operatingSystemType+Zonelds参数，则支持的查询数据范围为套餐支持的<a href="https://cloud.tencent.com/document/product/1552/77380#edgeone-.E5.A5.97.E9.A4.90">数据分析最大查询范围</a>与30天两者中的较小值。<br>   对应Value的可选项如下：<br>   Linux：Linux操作系统；<br>   MacOS：MacOs操作系统；<br>   Android：Android操作系统；<br>   IOS：IOS操作系统；<br>   Windows：Windows操作系统；<br>   NetBSD：NetBSD；<br>   ChromiumOS：ChromiumOS；<br>   Bot：搜索引擎爬虫；<br>   Other：其他类型的操作系统；<br>   Empty：操作系统为空。</li>
  <li>tlsVersion<br>   按照【<strong>TLS版本</strong>】进行过滤。<br>   若只填写tlsVersion参数，则最多可查询近30天的数据；<br>   若同时填写tlsVersion+Zonelds参数，则支持的查询数据范围为套餐支持的<a href="https://cloud.tencent.com/document/product/1552/77380#edgeone-.E5.A5.97.E9.A4.90">数据分析最大查询范围</a>与30天两者中的较小值。<br>   对应Value的可选项如下：<br>   TLS1.0：TLS 1.0；<br>   TLS1.1：TLS 1.1；<br>   TLS1.2：TLS 1.2；<br>   TLS1.3：TLS 1.3。</li>
  <li>ipVersion<br>   按照【<strong>IP版本</strong>】进行过滤。<br>   对应Value的可选项如下：<br>   4：Ipv4；<br>   6：Ipv6。</li>
  <li>tagKey<br>   按照【<strong>标签Key</strong>】进行过滤。</li>
  <li>tagValue<br>   按照【<strong>标签Value</strong>】进行过滤。</li>
     */
    Filters?: Array<QueryCondition>;
    /**
     * 数据归属地区，取值有：
  <li>overseas：全球（除中国大陆地区）数据；</li>
  <li>mainland：中国大陆地区数据；</li>
  <li>global：全球数据。</li>不填默认取值为global。
     */
    Area?: string;
}
/**
 * 不缓存配置
 */
export interface NoCache {
    /**
     * 不缓存配置开关，取值有：
  <li>on：开启；</li>
  <li>off：关闭。</li>
     */
    Switch: string;
}
/**
 * ModifyApplicationProxyStatus请求参数结构体
 */
export interface ModifyApplicationProxyStatusRequest {
    /**
     * 站点ID。
     */
    ZoneId: string;
    /**
     * 代理ID。
     */
    ProxyId: string;
    /**
     * 状态，取值有：
  <li>offline: 停用；</li>
  <li>online: 启用。</li>
     */
    Status: string;
}
/**
 * CreateZone请求参数结构体
 */
export interface CreateZoneRequest {
    /**
     * 站点接入类型。该参数取值如下，不填写时默认为 partial：
  <li>partial：CNAME 接入；</li>
  <li> full：NS 接入；</li>
  <li>noDomainAccess：无域名接入。</li>
     */
    Type?: string;
    /**
     * 站点名称。CNAME/NS 接入的时，请传入二级域名（example.com）作为站点名称；无域名接入时，该值请保留为空。
     */
    ZoneName?: string;
    /**
     * Type 取值为 partial/full 时，七层域名的加速区域。以下为该参数取值，不填写时该值默认为 overseas。Type 取值为 noDomainAccess 时该值请保留为空：
  <li> global: 全球可用区；</li>
  <li> mainland: 中国大陆可用区；</li>
  <li> overseas: 全球可用区（不含中国大陆）。</li>
     */
    Area?: string;
    /**
     * 待绑定的目标套餐 ID。当您账号下已存在套餐时，可以填写此参数，直接将站点绑定至该套餐。若您当前没有可绑定的套餐时，请前往控制台购买套餐完成站点创建。
     */
    PlanId?: string;
    /**
     * 同名站点标识。限制输入数字、英文、- 和 _ 组合，长度 20 个字符以内。详情参考 [同名站点标识](https://cloud.tencent.com/document/product/1552/70202)，无此使用场景时，该字段保留为空即可。
     */
    AliasZoneName?: string;
    /**
     * 标签。该参数用于对站点进行分权限管控、分账。需要先前往 [标签控制台](https://console.cloud.tencent.com/tag/taglist) 创建对应的标签才可以在此处传入对应的标签键和标签值。
     */
    Tags?: Array<Tag>;
    /**
     * 是否允许重复接入。
  <li> true：允许重复接入；</li>
  <li> false：不允许重复接入。</li>不填写使用默认值false。
     * @deprecated
     */
    AllowDuplicates?: boolean;
    /**
     * 是否跳过站点现有的DNS记录扫描。默认值：false。
     * @deprecated
     */
    JumpStart?: boolean;
}
/**
 * 站点归属信息
 */
export interface AscriptionInfo {
    /**
     * 主机记录。
     */
    Subdomain: string;
    /**
     * 记录类型。
     */
    RecordType: string;
    /**
     * 记录值。
     */
    RecordValue: string;
}
/**
 * 慢速攻击的首段包配置。
 */
export interface FirstPartConfig {
    /**
     * 开关，取值有：
  <li>on：开启；</li>
  <li>off：关闭。</li>
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Switch: string;
    /**
     * 首段包的统计时长，单位是秒，即期望首段包的统计时长是多少，默认5秒。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    StatTime?: number;
}
/**
 * 无
 */
export interface Waf {
    /**
     * Waf开关，取值为：
  <li> on：开启；</li>
  <li> off：关闭。</li>
     */
    Switch: string;
    /**
     * 策略ID。
     */
    PolicyId?: number;
}
/**
 * ModifyZone请求参数结构体
 */
export interface ModifyZoneRequest {
    /**
     * 站点 ID。
     */
    ZoneId: string;
    /**
     * 站点接入方式，取值有：
  <li> full：NS 接入；</li>
  <li> partial：CNAME 接入，如果站点当前是无域名接入，仅支持切换到CNAME接入。</li>不填写保持原有配置。
     */
    Type?: string;
    /**
     * 自定义站点信息，以替代系统默认分配的名称服务器。不填写保持原有配置。当站点是无域名接入方式时不允许传此参数。
     */
    VanityNameServers?: VanityNameServers;
    /**
     * 站点别名。数字、英文、-和_组合，限制20个字符。
     */
    AliasZoneName?: string;
    /**
     * 站点接入地域，取值有：
  <li> global：全球；</li>
  <li> mainland：中国大陆；</li>
  <li> overseas：境外区域。</li>当站点是无域名接入方式时，不允许传此参数。
     */
    Area?: string;
    /**
     * 站点名称。仅当站点由无域名接入方式切换到CNAME接入方式的场景下有效。
     */
    ZoneName?: string;
}
/**
 * 适用于四层代理或 Web 站点服务的独立 DDoS 防护规格配置。
 */
export interface DDosProtectionConfig {
    /**
     * 中国大陆地区独立 DDoS 防护的规格。详情请参考 [独立 DDoS 防护相关费用](https://cloud.tencent.com/document/product/1552/94162)
  <li>PLATFORM：平台默认防护，即不开启独立 DDoS 防护；</li>
  <li>BASE30_MAX300：开启独立 DDoS 防护，提供 30 Gbps 保底防护带宽以及 300 Gbps 弹性防护带宽；</li>
  <li>BASE60_MAX600：开启独立 DDoS 防护，提供 60 Gbps 保底防护带宽以及 600 Gbps 弹性防护带宽。</li>不填写参数时，取默认值 PLATFORM。
     */
    LevelMainland?: string;
    /**
     * 中国大陆地区独立 DDoS 防护的弹性防护带宽配置。
  仅当开启中国大陆区域独立 DDos 防护时有效（详见 LevelMainland 参数配置），且取值范围有如下限制：
  <li>开启中国大陆地区独立 DDoS 防护，使用 30 Gbps 保底防护带宽规格时（ LevelMainland 参数值为 BASE30_MAX300 ）：有效取值范围为 30 至 300，单位为 Gbps；</li>
  <li>开启中国大陆地区独立 DDoS 防护，使用 60 Gbps 保底防护带宽规格时（ LevelMainland 参数值为 BASE60_MAX600 ）：有效取值范围为 60 至 600，单位为 Gbps；</li>
  <li>使用平台默认防护（ LevelMainland 参数值为 PLATFORM ）：不支持配置，本参数值无效。</li>
     */
    MaxBandwidthMainland?: number;
    /**
     * 全球（除中国大陆以外）地区独立 DDoS 防护的规格。
  <li>PLATFORM：平台默认防护，即不开启独立 DDoS 防护；</li>
  <li>ANYCAST300：开启独立 DDoS 防护，提供 300 Gbps 防护带宽；</li>
  <li>ANYCAST_ALLIN：开启独立 DDoS 防护，使用全部可用防护资源进行防护。</li>不填写参数时，取默认值 PLATFORM。
     */
    LevelOverseas?: string;
}
/**
 * DescribeDDoSAttackData请求参数结构体
 */
export interface DescribeDDoSAttackDataRequest {
    /**
     * 开始时间。
     */
    StartTime: string;
    /**
     * 结束时间。
     */
    EndTime: string;
    /**
     * 统计指标列表，取值有：
  <li>ddos_attackMaxBandwidth：攻击带宽峰值；</li>
  <li>ddos_attackMaxPackageRate：攻击包速率峰值 ；</li>
  <li>ddos_attackBandwidth：攻击带宽曲线；</li>
  <li>ddos_attackPackageRate：攻击包速率曲线。</li>
     */
    MetricNames: Array<string>;
    /**
     * 站点集合，此参数必填。
     */
    ZoneIds?: Array<string>;
    /**
     * DDoS策略组ID列表，不填默认选择全部策略ID。
     */
    PolicyIds?: Array<number | bigint>;
    /**
     * 查询时间粒度，取值有：
  <li>min：1分钟；</li>
  <li>5min：5分钟；</li>
  <li>hour：1小时；</li>
  <li>day：1天。</li>不填将根据开始时间与结束时间的间隔自动推算粒度，具体为：1小时范围内以min粒度查询，2天范围内以5min粒度查询，7天范围内以hour粒度查询，超过7天以day粒度查询。
     */
    Interval?: string;
    /**
     * 数据归属地区，取值有：
  <li>overseas：全球（除中国大陆地区）数据；</li>
  <li>mainland：中国大陆地区数据；</li>
  <li>global：全球数据。</li>不填默认取值为global。
     */
    Area?: string;
}
/**
 * CreateL4Proxy请求参数结构体
 */
export interface CreateL4ProxyRequest {
    /**
     * 站点 ID。
     */
    ZoneId: string;
    /**
     * 四层代理实例名称，可输入 1-50 个字符，允许的字符为 a-z、0-9、-，且 - 不能单独注册或连续使用，不能放在开头或结尾。创建完成后不支持修改。
  
     */
    ProxyName: string;
    /**
     * 四层代理实例加速区域。
  <li>mainland：中国大陆可用区；</li>
  <li>overseas：全球可用区（不含中国大陆）；</li>
  <li>global：全球可用区。</li>
     */
    Area: string;
    /**
     * 是否开启 IPv6 访问，不填写时默认为 off。该配置仅在部分加速区域和安全防护配置下支持开启，详情请参考 [新建四层代理实例](https://cloud.tencent.com/document/product/1552/90025) 。取值为：
  <li>on：开启；</li>
  <li>off：关闭。</li>
  
  
     */
    Ipv6?: string;
    /**
     * 是否开启固定 IP，不填写时默认为 off。该配置仅在部分加速区域和安全防护配置下支持开启，详情请参考 [新建四层代理实例](https://cloud.tencent.com/document/product/1552/90025) 。取值为：
  <li>on：开启；</li>
  <li>off：关闭。</li>
  
     */
    StaticIp?: string;
    /**
     * 是否开启中国大陆网络优化，不填写时默认为 off。该配置仅在部分加速区域和安全防护配置下支持开启，详情请参考 [新建四层代理实例](https://cloud.tencent.com/document/product/1552/90025) 。取值为：
  <li>on：开启；</li>
  <li>off：关闭。</li>
  
     */
    AccelerateMainland?: string;
    /**
     * L3/L4 DDoS 防护配置，不填写时默认使用平台默认防护选项。详情参考 [独立 DDoS 防护](https://cloud.tencent.com/document/product/1552/95994)。
     */
    DDosProtectionConfig?: DDosProtectionConfig;
}
/**
 * CreatePlan返回参数结构体
 */
export interface CreatePlanResponse {
    /**
     * 套餐 ID，形如 edgeone-2unuvzjmmn2q。
     */
    PlanId?: string;
    /**
     * 订单号。
     */
    DealName?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeApplicationProxies请求参数结构体
 */
export interface DescribeApplicationProxiesRequest {
    /**
     * 站点ID。该参数必填。
     */
    ZoneId?: string;
    /**
     * 过滤条件，Filters.Values的上限为20。详细的过滤条件如下：<li>proxy-id<br>   按照【<strong>代理ID</strong>】进行过滤。代理ID形如：proxy-ev2sawbwfd。<br>   类型：String<br>   必选：否</li><li>zone-id<br>   按照【<strong>站点ID</strong>】进行过滤。站点ID形如：zone-vawer2vadg。<br>   类型：String<br>   必选：否</li><li>rule-tag<br>   按照【<strong>规则标签</strong>】对应用代理下的规则进行过滤。规则标签形如：rule-service-1。<br>   类型：String<br>   必选：否</li>
     */
    Filters?: Array<Filter>;
    /**
     * 分页查询偏移量。默认为0。
     */
    Offset?: number;
    /**
     * 分页查询限制数目。默认值：20，最大值：1000。
     */
    Limit?: number;
}
/**
 * DescribeContentQuota请求参数结构体
 */
export interface DescribeContentQuotaRequest {
    /**
     * 站点 ID。
     */
    ZoneId: string;
}
/**
 * Hsts配置
 */
export interface Hsts {
    /**
     * 是否开启，取值有：
  <li>on：开启；</li>
  <li>off：关闭。</li>
     */
    Switch: string;
    /**
     * MaxAge 数值。单位为秒，最大值为1天。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    MaxAge?: number;
    /**
     * 是否包含子域名，取值有：
  <li>on：开启；</li>
  <li>off：关闭。</li>
  注意：此字段可能返回 null，表示取不到有效值。
     */
    IncludeSubDomains?: string;
    /**
     * 是否开启预加载，取值有：
  <li>on：开启；</li>
  <li>off：关闭。</li>
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Preload?: string;
}
/**
 * CreateOriginGroup返回参数结构体
 */
export interface CreateOriginGroupResponse {
    /**
     * 源站组ID。
     */
    OriginGroupId?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CreateRule请求参数结构体
 */
export interface CreateRuleRequest {
    /**
     * 站点 ID。
     */
    ZoneId: string;
    /**
     * 规则名称，名称字符串长度 1～255。
     */
    RuleName: string;
    /**
     * 规则状态，取值有：
  <li> enable: 启用； </li>
  <li> disable: 未启用。</li>
     */
    Status: string;
    /**
     * 规则内容。
     */
    Rules: Array<Rule>;
    /**
     * 规则标签。
     */
    Tags?: Array<string>;
}
/**
 * ModifyL4ProxyStatus请求参数结构体
 */
export interface ModifyL4ProxyStatusRequest {
    /**
     * 站点 ID。
     */
    ZoneId: string;
    /**
     * 四层代理实例 ID。
     */
    ProxyId: string;
    /**
     * 四层代理实例状态，取值有：
  <li>online：启用；</li>
  <li>offline：停用。</li>
     */
    Status: string;
}
/**
 * 模板当前详细配置
 */
export interface RateLimitTemplateDetail {
    /**
     * 模板等级名称，取值有：
  <li>sup_loose：超级宽松；</li>
  <li>loose：宽松；</li>
  <li>emergency：紧急；</li>
  <li>normal：适中；</li>
  <li>strict：严格；</li>
  <li>close：关闭，仅精准速率限制生效。</li>
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Mode: string;
    /**
     * 唯一id。
     */
    ID: number;
    /**
     * 模板处置方式，取值有：
  <li>alg：JavaScript挑战；</li>
  <li>monitor：观察。</li>
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Action: string;
    /**
     * 惩罚时间，取值范围0-2天，单位秒。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PunishTime: number;
    /**
     * 统计阈值，单位是次，取值范围0-4294967294。
     */
    Threshold: number;
    /**
     * 统计周期，取值范围0-120秒。
     */
    Period: number;
}
/**
 * CreateApplicationProxyRule返回参数结构体
 */
export interface CreateApplicationProxyRuleResponse {
    /**
     * 规则ID
     */
    RuleId?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * https 服务端证书配置
 */
export interface CertificateInfo {
    /**
     * 服务器证书 ID。
     */
    CertId?: string;
    /**
     * 证书备注名。
     */
    Alias?: string;
    /**
     * 证书类型，取值有：
  <li>default：默认证书；</li>
  <li>upload：用户上传；</li>
  <li>managed：腾讯云托管。</li>
     */
    Type?: string;
    /**
     * 证书过期时间。
     */
    ExpireTime?: string;
    /**
     * 证书部署时间。
     */
    DeployTime?: string;
    /**
     * 签名算法。
     */
    SignAlgo?: string;
    /**
     * 证书状态，取值有：
  <li>deployed：已部署；</li>
  <li>processing：部署中；</li>
  <li>applying：申请中；</li>
  <li>failed：申请失败；</li>
  <li>issued：绑定失败。</li>
     */
    Status?: string;
}
/**
 * CreateApplicationProxy请求参数结构体
 */
export interface CreateApplicationProxyRequest {
    /**
     * 站点 ID。
     */
    ZoneId: string;
    /**
     * 当 ProxyType=hostname 时，表示域名或子域名；
  当 ProxyType=instance 时，表示代理名称。
     */
    ProxyName: string;
    /**
     * 调度模式，取值有：
  <li>ip：表示Anycast IP调度；</li>
  <li>domain：表示CNAME调度。</li>
     */
    PlatType: string;
    /**
     * 是否开启安全，取值有：
  <li>0：关闭安全；</li>
  <li>1：开启安全。</li>
     */
    SecurityType: number;
    /**
     * 是否开启加速，取值有：
  <li>0：关闭加速；</li>
  <li>1：开启加速。</li>
     */
    AccelerateType: number;
    /**
     * 四层代理模式，取值有： <li>instance：表示实例模式。</li>不填写使用默认值instance。
     */
    ProxyType?: string;
    /**
     * 会话保持时间，取值范围：30-3600，单位：秒。
  不填写使用默认值600。
     */
    SessionPersistTime?: number;
    /**
     * Ipv6 访问配置。
  不填写表示关闭 Ipv6 访问。
     */
    Ipv6?: Ipv6;
    /**
     * 规则详细信息。
  不填写则不创建规则。
     */
    ApplicationProxyRules?: Array<ApplicationProxyRule>;
    /**
     * 中国大陆加速优化配置。不填写表示关闭中国大陆加速优化。
     */
    AccelerateMainland?: AccelerateMainland;
}
/**
 * cc配置项。
 */
export interface CC {
    /**
     * Waf开关，取值为：
  <li> on：开启；</li>
  <li> off：关闭。</li>
     */
    Switch: string;
    /**
     * 策略ID。
     */
    PolicyId?: number;
}
/**
 * ModifyL4ProxyRulesStatus请求参数结构体
 */
export interface ModifyL4ProxyRulesStatusRequest {
    /**
     * 站点 ID。
     */
    ZoneId: string;
    /**
     * 四层代理实例 ID。
     */
    ProxyId: string;
    /**
     * 转发规则 ID 列表。单次最多支持 200 条转发规则。
     */
    RuleIds: Array<string>;
    /**
     * 转发规则状态，取值有：
  <li>online：启用；</li>
  <li>offline：停用。</li>
     */
    Status: string;
}
/**
 * DescribeTimingL4Data返回参数结构体
 */
export interface DescribeTimingL4DataResponse {
    /**
     * 查询结果的总条数。
     */
    TotalCount?: number;
    /**
     * 四层时序流量数据列表。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Data?: Array<TimingDataRecord>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 规则引擎功能项操作，对于一种功能只对应下面三种类型的其中一种，RuleAction 数组中的每一项只能是其中一个类型，更多功能项的填写规范可调用接口 [查询规则引擎的设置参数](https://cloud.tencent.com/document/product/1552/80618) 查看。
 */
export interface Action {
    /**
     * 常规功能操作，选择该类型的功能项有：
  <li> 访问URL 重写（AccessUrlRedirect）；</li>
  <li> 回源 URL 重写 （UpstreamUrlRedirect）；</li>
  <li> QUIC（QUIC）；</li>
  <li> WebSocket （WebSocket）；</li>
  <li> 视频拖拽（VideoSeek）；</li>
  <li> Token 鉴权（Authentication）；</li>
  <li> 自定义CacheKey（CacheKey）；</li>
  <li> 节点缓存 TTL （Cache）；</li>
  <li> 浏览器缓存 TTL（MaxAge）；</li>
  <li> 离线缓存（OfflineCache）；</li>
  <li> 智能加速（SmartRouting）；</li>
  <li> 分片回源（RangeOriginPull）；</li>
  <li> HTTP/2 回源（UpstreamHttp2）；</li>
  <li> Host Header 重写（HostHeader）；</li>
  <li> 强制 HTTPS（ForceRedirect）；</li>
  <li> 回源 HTTPS（OriginPullProtocol）；</li>
  <li> 缓存预刷新（CachePrefresh）；</li>
  <li> 智能压缩（Compression）；</li>
  <li> Hsts；</li>
  <li> ClientIpHeader；</li>
  <li> SslTlsSecureConf；</li>
  <li> OcspStapling；</li>
  <li> HTTP/2 访问（Http2）；</li>
  <li> 回源跟随重定向(UpstreamFollowRedirect)；</li>
  <li> 修改源站(Origin)。</li>
  <li> 七层回源超时(HTTPUpstreamTimeout)。</li>
  <li> Http应答（HttpResponse）。</li>
  注意：此字段可能返回 null，表示取不到有效值。
     */
    NormalAction?: NormalAction;
    /**
     * 带有请求头/响应头的功能操作，选择该类型的功能项有：
  <li> 修改 HTTP 请求头（RequestHeader）；</li>
  <li> 修改HTTP响应头（ResponseHeader）。</li>
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RewriteAction?: RewriteAction;
    /**
     * 带有状态码的功能操作，选择该类型的功能项有：
  <li> 自定义错误页面（ErrorPage）；</li>
  <li> 状态码缓存 TTL（StatusCodeCache）。</li>
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CodeAction?: CodeAction;
}
/**
 * 应用代理实例
 */
export interface ApplicationProxy {
    /**
     * 站点ID。
     */
    ZoneId?: string;
    /**
     * 站点名称。
     */
    ZoneName?: string;
    /**
     * 代理ID。
     */
    ProxyId?: string;
    /**
     * 当ProxyType=hostname时，表示域名或子域名；
  当ProxyType=instance时，表示代理名称。
     */
    ProxyName?: string;
    /**
     * 四层代理模式，取值有：
  <li>hostname：表示子域名模式；</li>
  <li>instance：表示实例模式。</li>
     */
    ProxyType?: string;
    /**
     * 调度模式，取值有：
  <li>ip：表示Anycast IP调度；</li>
  <li>domain：表示CNAME调度。</li>
     */
    PlatType?: string;
    /**
     * 加速区域，取值有：
  <li>mainland：中国大陆境内;</li>
  <li>overseas：全球（不含中国大陆）。</li>
  默认值：overseas
     */
    Area?: string;
    /**
     * 是否开启安全，取值有：
  <li>0：关闭安全；</li>
  <li>1：开启安全。</li>
     */
    SecurityType?: number;
    /**
     * 是否开启加速，取值有：
  <li>0：关闭加速；</li>
  <li>1：开启加速。</li>
     */
    AccelerateType?: number;
    /**
     * 会话保持时间。
     */
    SessionPersistTime?: number;
    /**
     * 状态，取值有：
  <li>online：启用；</li>
  <li>offline：停用；</li>
  <li>progress：部署中；</li>
  <li>stopping：停用中；</li>
  <li>fail：部署失败/停用失败。</li>
     */
    Status?: string;
    /**
     * 封禁状态，取值有：
  <li>banned：已封禁;</li>
  <li>banning：封禁中；</li>
  <li>recover：已解封；</li>
  <li>recovering：解封禁中。</li>
     */
    BanStatus?: string;
    /**
     * 调度信息。
     */
    ScheduleValue?: Array<string>;
    /**
     * 当ProxyType=hostname时：
  表示代理加速唯一标识。
     */
    HostId?: string;
    /**
     * Ipv6访问配置。
     */
    Ipv6?: Ipv6;
    /**
     * 更新时间。
     */
    UpdateTime?: string;
    /**
     * 规则列表。
     */
    ApplicationProxyRules?: Array<ApplicationProxyRule>;
    /**
     * 中国大陆加速优化配置。
     */
    AccelerateMainland?: AccelerateMainland;
}
/**
 * ModifyApplicationProxy返回参数结构体
 */
export interface ModifyApplicationProxyResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ModifySecurityIPGroup返回参数结构体
 */
export interface ModifySecurityIPGroupResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 站点配置。
 */
export interface ZoneSetting {
    /**
     * 站点名称。
     */
    ZoneName?: string;
    /**
     * 站点加速区域信息，取值有：
  <li> mainland：中国境内加速；</li>
  <li> overseas：中国境外加速。</li>
     */
    Area?: string;
    /**
     * 节点缓存键配置。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CacheKey?: CacheKey;
    /**
     * Quic访问配置。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Quic?: Quic;
    /**
     * POST请求传输配置。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PostMaxSize?: PostMaxSize;
    /**
     * 智能压缩配置。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Compression?: Compression;
    /**
     * Http2回源配置。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UpstreamHttp2?: UpstreamHttp2;
    /**
     * 访问协议强制Https跳转配置。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ForceRedirect?: ForceRedirect;
    /**
     * 缓存过期时间配置。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CacheConfig?: CacheConfig;
    /**
     * 源站配置。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Origin?: Origin;
    /**
     * 智能加速配置。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SmartRouting?: SmartRouting;
    /**
     * 浏览器缓存配置。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    MaxAge?: MaxAge;
    /**
     * 离线缓存配置。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    OfflineCache?: OfflineCache;
    /**
     * WebSocket配置。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    WebSocket?: WebSocket;
    /**
     * 客户端IP回源请求头配置。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ClientIpHeader?: ClientIpHeader;
    /**
     * 缓存预刷新配置。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CachePrefresh?: CachePrefresh;
    /**
     * Ipv6访问配置。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Ipv6?: Ipv6;
    /**
     * Https 加速配置。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Https?: Https;
    /**
     * 回源时是否携带客户端IP所属地域信息的配置。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ClientIpCountry?: ClientIpCountry;
    /**
     * Grpc协议支持配置。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Grpc?: Grpc;
    /**
     * 图片优化相关配置。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ImageOptimize?: ImageOptimize;
    /**
     * 中国大陆加速优化配置。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AccelerateMainland?: AccelerateMainland;
    /**
     * 标准 Debug 配置。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    StandardDebug?: StandardDebug;
}
/**
 * ModifyL4Proxy请求参数结构体
 */
export interface ModifyL4ProxyRequest {
    /**
     * 站点 ID。
     */
    ZoneId: string;
    /**
     * 应用 ID。
     */
    ProxyId: string;
    /**
     * 是否开启 IPv6 访问。 不填该参数时，表示不修改该配置。该配置仅在部分加速区域和安全防护配置下支持开启，详情请参考 [新建四层代理实例](https://cloud.tencent.com/document/product/1552/90025) 。取值为：
  <li>on：开启；</li>
  <li>off：关闭。</li>
  
     */
    Ipv6?: string;
    /**
     * 是否开启中国大陆网络优化。不填该参数时，表示不修改该配置。该配置仅在部分加速区域和安全防护配置下支持开启，详情请参考 [新建四层代理实例](https://cloud.tencent.com/document/product/1552/90025) 。取值为：
  <li>on：开启；</li>
  <li>off：关闭。</li>
     */
    AccelerateMainland?: string;
}
/**
 * 规则引擎条件且关系条件列表
 */
export interface RuleAndConditions {
    /**
     * 规则引擎条件，该数组内所有项全部满足即判断该条件满足。
     */
    Conditions: Array<RuleCondition>;
}
/**
 * 拦截页面的总体配置，用于配置各个模块的拦截后行为。
 */
export interface DropPageConfig {
    /**
     * 配置开关，取值有：
  <li>on：开启；</li>
  <li>off：关闭。</li>
     */
    Switch: string;
    /**
     * Waf(托管规则)模块的拦截页面配置。如果为null，默认使用历史配置。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    WafDropPageDetail?: DropPageDetail;
    /**
     * 自定义页面的拦截页面配置。如果为null，默认使用历史配置。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AclDropPageDetail?: DropPageDetail;
}
/**
 * DescribeSecurityIPGroupInfo请求参数结构体
 */
export interface DescribeSecurityIPGroupInfoRequest {
    /**
     * 站点的 ID ，用于指定查询的站点范围。
     */
    ZoneId: string;
    /**
     * 单次返回的最大条目数。默认值为 20 ，最大查询条目为 1000 。
     */
    Limit?: number;
    /**
     * 分页查询的起始条目偏移量。默认值为 0 。
     */
    Offset?: number;
}
/**
 * 例外规则的详细模块配置。
 */
export interface PartialModule {
    /**
     * 模块名称，取值为：
  <li>waf：托管规则。</li>
     */
    Module?: string;
    /**
     * 模块下的需要例外的具体规则ID列表。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Include?: Array<number | bigint>;
}
/**
 * ModifyApplicationProxyRuleStatus请求参数结构体
 */
export interface ModifyApplicationProxyRuleStatusRequest {
    /**
     * 站点ID。
     */
    ZoneId: string;
    /**
     * 代理ID。
     */
    ProxyId: string;
    /**
     * 规则ID。
     */
    RuleId: string;
    /**
     * 状态，取值有：
  <li>offline: 停用；</li>
  <li>online: 启用。</li>
     */
    Status: string;
}
/**
 * 安全数据Entry返回值
 */
export interface SecEntry {
    /**
     * 查询维度值。
     */
    Key: string;
    /**
     * 查询维度下详细数据。
     */
    Value: Array<SecEntryValue>;
}
/**
 * 实时日志投递条件，用于定义投递日志范围。DeliveryCondition 数组内多个项的关系为“或”，内层 Conditions 数组内多个项的关系为“且”。
 */
export interface DeliveryCondition {
    /**
     * 日志过滤条件，详细的过滤条件如下：
  <li>EdgeResponseStatusCode：按照 EdgeOne 节点响应返回给客户端的状态码进行过滤。<br>   支持运算符：equal、great、less、great_equal、less_equal<br>   取值范围：任意大于等于 0 的整数</li>
  <li>OriginResponseStatusCode：按照源站响应状态码进行过滤。<br>   支持运算符：equal、great、less、great_equal、less_equal<br>   取值范围：任意大于等于 -1 的整数</li>
  <li>SecurityAction：按照请求命中安全规则后的最终处置动作进行过滤。<br>   支持运算符：equal<br>   可选项如下：<br>   -：未知/未命中<br>   Monitor：观察<br>   JSChallenge：JavaScript 挑战<br>   Deny：拦截<br>   Allow：放行<br>   BlockIP：IP 封禁<br>   Redirect：重定向<br>   ReturnCustomPage：返回自定义页面<br>   ManagedChallenge：托管挑战<br>   Silence：静默<br>   LongDelay：长时间等待后响应<br>   ShortDelay：短时间等待后响应</li>
  <li>SecurityModule：按照最终处置请求的安全模块名称进行过滤。<br>   支持运算符：equal<br>   可选项如下：<br>   -：未知/未命中<br>   CustomRule：Web防护 - 自定义规则<br>   RateLimitingCustomRule：Web防护 - 速率限制规则<br>   ManagedRule：Web防护 - 托管规则<br>   L7DDoS：Web防护 - CC攻击防护<br>   BotManagement：Bot管理 - Bot基础管理<br>   BotClientReputation：Bot管理 - 客户端画像分析<br>   BotBehaviorAnalysis：Bot管理 - Bot智能分析<br>   BotCustomRule：Bot管理 - 自定义Bot规则<br>   BotActiveDetection：Bot管理 - 主动特征识别</li>
     */
    Conditions?: Array<QueryCondition>;
}
/**
 * 缓存遵循源站配置
 */
export interface FollowOrigin {
    /**
     * 遵循源站配置开关，取值有：
  <li>on：开启；</li>
  <li>off：关闭。</li>
     */
    Switch: string;
    /**
     * 源站未返回 Cache-Control 头时, 设置默认的缓存时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DefaultCacheTime?: number;
    /**
     * 源站未返回 Cache-Control 头时, 设置缓存/不缓存
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DefaultCache?: string;
    /**
     * 源站未返回 Cache-Control 头时, 使用/不使用默认缓存策略
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DefaultCacheStrategy?: string;
}
/**
 * IP 归属信息查询
 */
export interface IPRegionInfo {
    /**
     * IP 地址，IPV4 或 IPV6。
     */
    IP?: string;
    /**
     * IP 是否属于 EdgeOne 节点，取值有：
  <li>yes：该 IP 属于 EdgeOne 节点；</li>
  <li>no：该 IP 不属于 EdgeOne 节点。</li>
     */
    IsEdgeOneIP?: string;
}
/**
 * DestroyPlan返回参数结构体
 */
export interface DestroyPlanResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 查询条件
 */
export interface QueryCondition {
    /**
     * 筛选条件的key。
     */
    Key: string;
    /**
     * 查询条件操作符，操作类型有：
  <li>equals: 等于；</li>
  <li>notEquals: 不等于；</li>
  <li>include: 包含；</li>
  <li>notInclude: 不包含; </li>
  <li>startWith: 开始的值是value；</li>
  <li>notStartWith: 不以value的值开始；</li>
  <li>endWith: 结尾是value值；</li>
  <li>notEndWith: 不以value的值结尾。</li>
     */
    Operator: string;
    /**
     * 筛选条件的值。
     */
    Value: Array<string>;
}
/**
 * 规则引擎条件 HTTP 请求/响应头操作动作参数。
 */
export interface RuleRewriteActionParams {
    /**
     * 功能参数名称，参数填写规范可调用接口 [查询规则引擎的设置参数](https://cloud.tencent.com/document/product/1552/80618) 查看。现在只有三种取值：
  <li> add：添加 HTTP 头部；</li>
  <li> set：重写 HTTP 头部；</li>
  <li> del：删除 HTTP 头部。</li>
     */
    Action: string;
    /**
     * 参数名称。
     */
    Name: string;
    /**
     * 参数值。
     */
    Values: Array<string>;
}
/**
 * ModifyAliasDomain返回参数结构体
 */
export interface ModifyAliasDomainResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ModifyHostsCertificate请求参数结构体
 */
export interface ModifyHostsCertificateRequest {
    /**
     * 站点 ID。
     */
    ZoneId: string;
    /**
     * 需要修改证书配置的加速域名。
     */
    Hosts: Array<string>;
    /**
     * 配置证书的模式，取值有：
  <li>disable：不配置证书；</li>
  <li>eofreecert：配置 EdgeOne 免费证书；</li>
  <li>sslcert：配置 SSL 证书。</li>不填时默认取值为 disable。
     */
    Mode?: string;
    /**
     * SSL 证书配置，本参数仅在 mode = sslcert 时生效，传入对应证书的 CertId 即可。您可以前往 [SSL 证书列表](https://console.cloud.tencent.com/certoverview) 查看 CertId。
     */
    ServerCertInfo?: Array<ServerCertInfo>;
    /**
     * 托管类型，取值有：
  <li>none：不托管EO；</li>
  <li>apply：托管EO</li>
  不填，默认取值为none。
     * @deprecated
     */
    ApplyType?: string;
}
/**
 * DeleteAccelerationDomains返回参数结构体
 */
export interface DeleteAccelerationDomainsResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeTopL7AnalysisData返回参数结构体
 */
export interface DescribeTopL7AnalysisDataResponse {
    /**
     * 查询结果的总条数。
     */
    TotalCount?: number;
    /**
     * 七层流量前topN数据列表。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Data?: Array<TopDataRecord>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 存储客户端请求IP的头部信息配置
 */
export interface ClientIpHeader {
    /**
     * 配置开关，取值有：
  <li>on：开启；</li>
  <li>off：关闭。</li>
     */
    Switch: string;
    /**
     * 回源时，存放客户端 IP 的请求头名称。
  为空则使用默认值：X-Forwarded-IP。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    HeaderName?: string;
}
/**
 * 计费资源
 */
export interface Resource {
    /**
     * 资源 ID。
     */
    Id?: string;
    /**
     * 付费模式，取值有：
  <li>0：后付费。</li>
     */
    PayMode?: number;
    /**
     * 创建时间。
     */
    CreateTime?: string;
    /**
     * 生效时间。
     */
    EnableTime?: string;
    /**
     * 失效时间。
     */
    ExpireTime?: string;
    /**
     * 套餐状态，取值有：
  <li>normal：正常；</li>
  <li>isolated：隔离；</li>
  <li>destroyed：销毁。</li>
     */
    Status?: string;
    /**
     * 询价参数。
     */
    Sv?: Array<Sv>;
    /**
     * 是否自动续费，取值有：
  <li>0：默认状态；</li>
  <li>1：自动续费；</li>
  <li>2：不自动续费。</li>
     */
    AutoRenewFlag?: number;
    /**
     * 套餐关联资源 ID。
     */
    PlanId?: string;
    /**
     * 地域，取值有：
  <li>mainland：国内；</li>
  <li>overseas：海外。</li>
  <li>global：全球。</li>
     */
    Area?: string;
    /**
     * 资源类型，取值有：
  <li>plan：套餐类型；</li>
  <li>pay-as-you-go：后付费类型。</li>
  <li>value-added：增值服务类型。</li>
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Group?: string;
    /**
     * 当前资源绑定的站点数量。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ZoneNumber?: number;
    /**
     * 资源标记类型，取值有：
  <li>vodeo：vodeo资源。</li>
     */
    Type?: string;
}
/**
 * DescribeOriginProtection请求参数结构体
 */
export interface DescribeOriginProtectionRequest {
    /**
     * 查询的站点ID集合。该参数必填。
     */
    ZoneIds?: Array<string>;
    /**
     * 过滤条件，Filters.Values的上限为20。详细的过滤条件如下：
  <li>need-update<br>   按照【<strong>站点是否需要更新源站防护IP白名单</strong>】进行过滤。<br>   类型：String<br>   必选：否<br>   可选项：<br>   true：需要更新<br>   false：无需更新<br></li>
  <li>plan-support<br>   按照【<strong>站点套餐是否支持源站防护</strong>】进行过滤。<br>   类型：String<br>   必选：否<br>   可选项：<br>   true：支持<br>   false：不支持<br></li>
     */
    Filters?: Array<Filter>;
    /**
     * 分页查询偏移量，默认为0。
     */
    Offset?: number;
    /**
     * 分页查询限制数目。默认值：20，最大值：1000。
     */
    Limit?: number;
}
/**
 * DescribeHostsSetting请求参数结构体
 */
export interface DescribeHostsSettingRequest {
    /**
     * 站点ID。
     */
    ZoneId: string;
    /**
     * 分页查询偏移量。默认值： 0，最小值：0。
     */
    Offset?: number;
    /**
     * 分页查询限制数目。默认值： 100，最大值：1000。
     */
    Limit?: number;
    /**
     * 过滤条件，Filters.Values的上限为20。详细的过滤条件如下：
  <li>host：按照域名进行过滤。</li>
     */
    Filters?: Array<Filter>;
}
/**
 * DeleteRules返回参数结构体
 */
export interface DeleteRulesResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 源站组信息
 */
export interface OriginGroup {
    /**
     * 源站组ID。
     */
    GroupId?: string;
    /**
     * 源站组名称。
     */
    Name?: string;
    /**
     * 源站组类型，取值有：
  <li>GENERAL：通用型源站组；</li>
  <li>HTTP： HTTP专用型源站组。</li>
     */
    Type?: string;
    /**
     * 源站记录信息。
     */
    Records?: Array<OriginRecord>;
    /**
     * 源站组被引用实例列表。
     */
    References?: Array<OriginGroupReference>;
    /**
     * 源站组创建时间。
     */
    CreateTime?: string;
    /**
     * 源站组更新时间。
     */
    UpdateTime?: string;
    /**
     * 回源Host Header。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    HostHeader?: string;
}
/**
 * ModifySecurityIPGroup请求参数结构体
 */
export interface ModifySecurityIPGroupRequest {
    /**
     * 站点 Id。
     */
    ZoneId: string;
    /**
     * IP 组配置。
     */
    IPGroup: IPGroup;
    /**
     * 操作类型，取值有：
  <li> append: 向 IPGroup 中追加 Content 参数中内容；</li>
  <li> remove: 从 IPGroup 中删除 Content 参数中内容；</li>
  <li> update: 全量替换 IPGroup 内容，并可修改 IPGroup 名称。 </li>
     */
    Mode: string;
}
/**
 * 四层代理实例。
 */
export interface L4Proxy {
    /**
     * 站点 ID。
     */
    ZoneId?: string;
    /**
     * 四层代理实例 ID。
     */
    ProxyId?: string;
    /**
     * 四层代理实例名称。
     */
    ProxyName?: string;
    /**
     * 四层代理实例的加速区域。
  <li>mainland：中国大陆可用区；</li>
  <li>overseas： 全球可用区（不含中国大陆）；</li>
   <li>global：全球可用区。</li>
     */
    Area?: string;
    /**
     * 接入 CNAME。
     */
    Cname?: string;
    /**
     * 开启固定 IP 后，该值会返回对应的接入 IP；未开启时，该值为空。
     */
    Ips?: Array<string>;
    /**
     * 四层代理实例状态。
  <li>online：已启用；</li>
  <li>offline：已停用；</li>
  <li>progress：部署中；</li>
  <li>stopping：停用中；</li>
  <li>banned：已封禁；</li>
  <li>fail：部署失败/停用失败。</li>
     */
    Status?: string;
    /**
     * 是否开启 IPv6 访问。
  <li>on：开启；</li>
  <li>off：关闭。</li>
     */
    Ipv6?: string;
    /**
     * 是否开启固定 IP。
   <li>on：开启；</li> <li>off：关闭。</li>
     */
    StaticIp?: string;
    /**
     * 是否开启中国大陆网络优化。
   <li>on：开启</li> <li>off：关闭</li>
     */
    AccelerateMainland?: string;
    /**
     * 安全防护配置。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DDosProtectionConfig?: DDosProtectionConfig;
    /**
     * 四层代理实例下的转发规则数量。
     */
    L4ProxyRuleCount?: number;
    /**
     * 最新变更时间。
     */
    UpdateTime?: string;
}
/**
 * 例外规则的跳过匹配条件，即在例外时根据本匹配条件，略过指定字段及内容。
 */
export interface SkipCondition {
    /**
     * 例外跳过类型，取值为：
  <li>header_fields：HTTP请求Header；</li>
  <li>cookie：HTTP请求Cookie；</li>
  <li>query_string：HTTP请求URL中的Query参数；</li>
  <li>uri：HTTP请求URI；</li>
  <li>body_raw：HTTP请求Body；</li>
  <li>body_json： JSON格式的HTTP Body。</li>
     */
    Type: string;
    /**
     * 选择跳过的字段，取值为：
  <li>args：uri 下选择 query 参数: ?name1=jack&age=12；</li>
  <li>path：uri 下选择部分路径：/path/to/resource.jpg；</li>
  <li>full：uri 下选择完整路径：example.com/path/to/resource.jpg?name1=jack&age=12；</li>
  <li>upload_filename：分段文件名，即分段传输文件时；</li>
  <li>keys：所有的Key；</li>
  <li>values：匹配Key对应的值；</li>
  <li>key_value：匹配Key及匹配Value。</li>
     */
    Selector: string;
    /**
     * 匹配Key所使用的匹配方式，取值为：
  <li>equal：精准匹配，等于；</li>
  <li>wildcard：通配符匹配，支持 * 通配。</li>
     */
    MatchFromType?: string;
    /**
     * 匹配Key的值。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    MatchFrom?: Array<string>;
    /**
     * 匹配Content所使用的匹配方式，取值为：
  <li>equal：精准匹配，等于；</li>
  <li>wildcard：通配符匹配，支持 * 通配。</li>
     */
    MatchContentType?: string;
    /**
     * 匹配Value的值。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    MatchContent?: Array<string>;
}
/**
 * CreateSharedCNAME请求参数结构体
 */
export interface CreateSharedCNAMERequest {
    /**
     * 共享 CNAME 所属站点的 ID。
     */
    ZoneId: string;
    /**
     * 共享 CNAME 前缀。请输入合法的域名前缀，例如"test-api"、"test-api.com"，限制输入 50 个字符。
  
  共享 CNAME 完整格式为：`<自定义前缀>+<zoneid中的12位随机字符串>+share.dnse[0-5].com`。
  
  例如前缀传入 example.com，EO 会为您创建共享 CNAME：example.com.sai2ig51kaa5.share.dnse2.com。
     */
    SharedCNAMEPrefix: string;
    /**
     * 描述。可输入 1-50 个任意字符。
     */
    Description?: string;
}
/**
 * Http2回源配置
 */
export interface UpstreamHttp2 {
    /**
     * http2 回源配置开关，取值有：
  <li>on：开启；</li>
  <li>off：关闭。</li>
     */
    Switch: string;
}
/**
 * DeleteAliasDomain返回参数结构体
 */
export interface DeleteAliasDomainResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 安全Bot配置
 */
export interface BotConfig {
    /**
     * bot开关，取值有：
  <li>on：开启；</li>
  <li>off：关闭。</li>
     */
    Switch: string;
    /**
     * 通用详细基础规则。如果为null，默认使用历史配置。
     */
    BotManagedRule?: BotManagedRule;
    /**
     * 用户画像规则。如果为null，默认使用历史配置。
     */
    BotPortraitRule?: BotPortraitRule;
    /**
     * Bot智能分析。如果为null，默认使用历史配置。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    IntelligenceRule?: IntelligenceRule;
    /**
     * Bot自定义规则。如果为null，默认使用历史配置。
     */
    BotUserRules?: Array<BotUserRule>;
    /**
     * Bot主动特征识别规则。
     */
    AlgDetectRule?: Array<AlgDetectRule>;
    /**
     * Bot托管定制策略，入参可不填，仅出参使用。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Customizes?: Array<BotUserRule>;
}
/**
 * CNAME 接入，使用 DNS 解析验证时所需的信息。
 */
export interface DnsVerification {
    /**
     * 主机记录。
     */
    Subdomain?: string;
    /**
     * 记录类型。
     */
    RecordType?: string;
    /**
     * 记录值。
     */
    RecordValue?: string;
}
/**
 * DescribeTopL7CacheData请求参数结构体
 */
export interface DescribeTopL7CacheDataRequest {
    /**
     * 开始时间。
     */
    StartTime: string;
    /**
     * 结束时间。
     */
    EndTime: string;
    /**
     * 查询的指标，取值有：
  <li> l7Cache_outFlux_domain：host/域名；</li>
  <li> l7Cache_outFlux_url：url地址；</li>
  <li> l7Cache_outFlux_resourceType：资源类型；</li>
  <li> l7Cache_outFlux_statusCode：状态码。</li>
     */
    MetricName: string;
    /**
     * 站点 ID 集合，此参数必填。
     */
    ZoneIds?: Array<string>;
    /**
     * 查询前多少个数据，最大值为1000，不填默认为10， 表示查询前top 10的数据。
     */
    Limit?: number;
    /**
     * 过滤条件，详细的过滤条件如下：
  <li>domain<br>   按照【<strong>子域名</strong>】进行过滤，子域名形如： test.example.com。<br>   类型：String<br>   必选：否</li>
  <li>url<br>   按照【<strong>URL</strong>】进行过滤，此参数只支持30天的时间范围，URL形如：/content。<br>   类型：String<br>   必选：否</li>
  <li>resourceType<br>   按照【<strong>资源类型</strong>】进行过滤，此参数只支持30天的时间范围，资源类型形如：jpg，png。<br>   类型：String<br>   必选：否</li>
  <li>cacheType<br>   按照【<strong>缓存类型</strong>】进行过滤。<br>   类型：String<br>   必选：否<br>   可选项：<br>   hit：命中缓存；<br>   dynamic：资源不可缓存；<br>   miss：未命中缓存。</li>
  <li>statusCode<br>   按照【<strong>状态码</strong>】进行过滤，此参数只支持30天的时间范围。<br>   类型：String<br>   必选：否<br>   可选项：<br>   1XX：1xx类型的状态码；<br>   100：100状态码；<br>   101：101状态码；<br>   102：102状态码；<br>   2XX：2xx类型的状态码；<br>   200：200状态码；<br>   201：201状态码；<br>   202：202状态码；<br>   203：203状态码；<br>   204：204状态码；<br>   100：100状态码；<br>   206：206状态码；<br>   207：207状态码；<br>   3XX：3xx类型的状态码；<br>   300：300状态码；<br>   301：301状态码；<br>   302：302状态码；<br>   303：303状态码；<br>   304：304状态码；<br>   305：305状态码；<br>   307：307状态码；<br>   4XX：4xx类型的状态码；<br>   400：400状态码；<br>   401：401状态码；<br>   402：402状态码；<br>   403：403状态码；<br>   404：404状态码；<br>   405：405状态码；<br>   406：406状态码；<br>   407：407状态码；<br>   408：408状态码；<br>   409：409状态码；<br>   410：410状态码；<br>   411：411状态码；<br>   412：412状态码；<br>   412：413状态码；<br>   414：414状态码；<br>   415：415状态码；<br>   416：416状态码；<br>   417：417状态码；<br>   422：422状态码；<br>   423：423状态码；<br>   424：424状态码；<br>   426：426状态码；<br>   451：451状态码；<br>   5XX：5xx类型的状态码；<br>   500：500状态码；<br>   501：501状态码；<br>   502：502状态码；<br>   503：503状态码；<br>   504：504状态码；<br>   505：505状态码；<br>   506：506状态码；<br>   507：507状态码；<br>   510：510状态码；<br>   514：514状态码；<br>   544：544状态码。</li>
  <li>tagKey<br>   按照【<strong>标签Key</strong>】进行过滤。<br>   类型：String<br>   必选：否</li>
  <li>tagValue<br>   按照【<strong>标签Value</strong>】进行过滤。<br>   类型：String<br>   必选：否</li>
     */
    Filters?: Array<QueryCondition>;
    /**
     * 查询时间粒度，取值有：
  <li>min: 1分钟；</li>
  <li>5min: 5分钟；</li>
  <li>hour: 1小时；</li>
  <li>day: 1天。</li>不填将根据开始时间跟结束时间的间距自动推算粒度，具体为：一小时范围内以min粒度查询，两天范围内以5min粒度查询，七天范围内以hour粒度查询，超过七天以day粒度查询。
     */
    Interval?: string;
    /**
     * 数据归属地区，取值有：
  <li>overseas：全球（除中国大陆地区）数据；</li>
  <li>mainland：中国大陆地区数据；</li>
  <li>global：全球数据。</li>不填默认取值为global。
     */
    Area?: string;
}
/**
 * 加速域名源站信息。
 */
export interface OriginInfo {
    /**
     * 源站类型，取值有：
  <li>IP_DOMAIN：IPV4、IPV6 或域名类型源站；</li>
  <li>COS：腾讯云 COS 对象存储源站；</li>
  <li>AWS_S3：AWS S3 对象存储源站；</li>
  <li>ORIGIN_GROUP：源站组类型源站；</li>
   <li>VODEO：云点播-混合云版；</li>
  <li>SPACE：源站卸载，当前仅白名单开放；</li>
  <li>LB：负载均衡，当前仅白名单开放。</li>
     */
    OriginType: string;
    /**
     * 源站地址，根据 OriginType 的取值分为以下情况：
  <li>当 OriginType = IP_DOMAIN 时，该参数请填写 IPv4、IPv6 地址或域名；</li>
  <li>当 OriginType = COS 时，该参数请填写 COS 桶的访问域名；</li>
  <li>当 OriginType = AWS_S3，该参数请填写 S3 桶的访问域名；</li>
  <li>当 OriginType = ORIGIN_GROUP 时，该参数请填写源站组 ID；</li>
  <li>当 OriginType = VODEO 时，如果 VodeoDistributionRange = ALL，则该参数填写 "all-buckets-in-vodeo-application"；如果 VodeoDistributionRange = Bucket，则该参数请填写对应存储桶域名；</li>
  <li>当 OriginType = LB 时，该参数请填写负载均衡实例 ID，该功能当前仅白名单开放；</li>
  <li>当 OriginType = SPACE 时，该参数请填写源站卸载空间 ID，该功能当前仅白名单开放。</li>
     */
    Origin: string;
    /**
     * 备用源站组 ID，该参数仅在 OriginType = ORIGIN_GROUP 时生效，该字段为旧版能力，调用后控制台无法进行配置修改，如需使用请提交工单咨询。
     */
    BackupOrigin?: string;
    /**
     * 指定是否允许访问私有对象存储源站，该参数仅当源站类型 OriginType = COS 或 AWS_S3 时会生效，取值有：
  <li>on：使用私有鉴权；</li>
  <li>off：不使用私有鉴权。</li>
  不填写时，默认值为off。
     */
    PrivateAccess?: string;
    /**
     * 私有鉴权使用参数，该参数仅当源站类型 PrivateAccess = on 时会生效。
     */
    PrivateParameters?: Array<PrivateParameter>;
    /**
     * VODEO 子应用 ID。该参数当 OriginType = VODEO 时必填。
     */
    VodeoSubAppId?: number;
    /**
     * VODEO 分发范围，该参数当 OriginType = VODEO 时必填。取值有：
  <li>All：当前应用下所有存储桶；</li>
  <li>Bucket：指定的某一个存储桶。</li>
     */
    VodeoDistributionRange?: string;
    /**
     * VODEO 存储桶 ID，该参数当 OriginType = VODEO 且 VodeoDistributionRange = Bucket 时必填。
     */
    VodeoBucketId?: string;
}
/**
 * 域名 https 加速配置，默认为关闭状态
 */
export interface Https {
    /**
     * http2 配置开关，取值有：
  <li>on：开启；</li>
  <li>off：关闭。</li>
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Http2?: string;
    /**
     * OCSP 配置开关，取值有：
  <li>on：开启；</li>
  <li>off：关闭。</li>
  注意：此字段可能返回 null，表示取不到有效值。
     */
    OcspStapling?: string;
    /**
     * Tls 版本设置，取值有：
  <li>TLSv1：TLSv1版本；</li>
  <li>TLSV1.1：TLSv1.1版本；</li>
  <li>TLSV1.2：TLSv1.2版本；</li>
  <li>TLSv1.3：TLSv1.3版本。</li>修改时必须开启连续的版本。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TlsVersion?: Array<string>;
    /**
     * HSTS 配置。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Hsts?: Hsts;
    /**
     * 证书配置。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CertInfo?: Array<ServerCertInfo>;
    /**
     * 申请类型，取值有：
  <li>apply：托管EdgeOne；</li>
  <li>none：不托管EdgeOne。</li>不填，默认取值为none。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ApplyType?: string;
    /**
     * 密码套件，取值有：
  <li>loose-v2023：提供高兼容性，安全性一般，支持 TLS 1.0-1.3 密码套件；</li>
  <li>general-v2023：提供较高兼容性，安全性中等，支持 TLS 1.2-1.3 密码套件；</li>
  <li>strict-v2023：提供高安全性能，禁用所有含不安全隐患的加密套件，支持 TLS 1.2-1.3 密码套件。</li>
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CipherSuite?: string;
}
/**
 * 四层代理转发规则详情。
 */
export interface L4ProxyRule {
    /**
     * 转发规则 ID。
  注意：L4ProxyRule 在 CreateL4ProxyRules 作为入参使用时，该参数请勿填写；在 ModifyL4ProxyRules 作为入参使用时，该参数必填。
     */
    RuleId?: string;
    /**
     * 转发协议。取值有：
  <li>TCP：TCP 协议；</li>
  <li>UDP：UDP 协议。</li>
  注意：L4ProxyRule 在 CreateL4ProxyRules 作为入参使用时，该参数必填；在 ModifyL4ProxyRules 作为入参使用时，该参数选填，不填写时表示不修改。
     */
    Protocol?: string;
    /**
     * 转发端口，支持按照以下形式填写：
  <li>单端口，如：80；</li>
  <li>端口段，如：81-85。表示 81、82、83、84、85 五个端口。</li>
  注意：L4ProxyRule 在 CreateL4ProxyRules 作为入参使用时，该参数必填；在 ModifyL4ProxyRules 作为入参使用时，该参数选填，不填写时表示不修改。
     */
    PortRange?: Array<string>;
    /**
     * 源站类型，取值有：
  <li>IP_DOMAIN：IP/域名源站；</li>
  <li>ORIGIN_GROUP：源站组；</li>
  <li>LB：负载均衡，当前仅白名单开放。</li>
  注意：L4ProxyRule 在 CreateL4ProxyRules 作为入参使用时，该参数必填；在 ModifyL4ProxyRules 作为入参使用时，该参数选填，不填写时表示不修改。
     */
    OriginType?: string;
    /**
     * 源站地址：
  <li>当 OriginType 为 IP_DOMAIN 时，填写 IP 或域名，如 8.8.8.8 或 test.com ；</li>
  <li>当 OriginType 为 ORIGIN_GROUP 时，填写源站组 ID，如 og-537y24vf5b41；</li>
  <li>当 OriginType 为 LB 时，填写负载均衡实例 ID，如 lb-2qwk30xf7s9g。</li>
  注意：L4ProxyRule 在 CreateL4ProxyRules 作为入参使用时，该参数必填；在 ModifyL4ProxyRules 作为入参使用时，该参数选填，不填写时表示不修改。
  
     */
    OriginValue?: Array<string>;
    /**
     * 源站端口，支持按照以下形式填写：
  <li>单端口，如：80；</li>
  <li>端口段，如：81-85，表示 81、82、83、84、85 五个端口。填写端口段时，则需要与转发端口段长度保持一致，例如转发端口：80-90，则转发端口：90-100。</li>
  注意：L4ProxyRule 在 CreateL4ProxyRules 作为入参使用时，该参数必填；在 ModifyL4ProxyRules 作为入参使用时，该参数选填，不填写时表示不修改。
     */
    OriginPortRange?: string;
    /**
     * 传递客户端 IP 的形式，取值有：
  <li>TOA：TOA（仅 Protocol = TCP 时可选）；</li>
  <li>PPV1：Proxy Protocol 传递，协议版本 V1（仅 Protocol = TCP 时可选）；</li>
  <li>PPV2：Proxy Protocol 传递，协议版本 V2；</li>
  <li>SPP：Simple Proxy Protocol 传递，（仅 Protocol = UDP 时可选）；</li>
  <li>OFF：不传递。</li>
  注意：L4ProxyRule 在 CreateL4ProxyRules 作为入参使用时，该参数选填，不填写时默认为 OFF；在 ModifyL4ProxyRules 作为入参使用时，该参数选填，不填写表示不修改。
     */
    ClientIPPassThroughMode?: string;
    /**
     * 是否开启会话保持，取值有：
  <li>on：开启；</li>
  <li>off：关闭。</li>
  注意：L4ProxyRule 在 CreateL4ProxyRules 作为入参使用时，该参数选填，不填写时默认为 off；在 ModifyL4ProxyRules 作为入参使用时，该参数选填，不填写表示不修改。
     */
    SessionPersist?: string;
    /**
     * 会话保持时间，取值范围为 30-3600，单位为秒。
  注意：L4ProxyRule 在 CreateL4ProxyRules 作为入参使用时，该参数选填，仅当 SessionPersist = on 时，该值才会生效，且当 SessionPersist = on ，该值不填写默认为 3600；在 ModifyL4ProxyRules 作为入参使用时，该参数选填，不填写表示不修改。
     */
    SessionPersistTime?: number;
    /**
     * 规则标签。可输入1-50 个任意字符。
  注意：L4ProxyRule 在 CreateL4ProxyRules 作为入参使用时，该参数选填；在 ModifyL4ProxyRules 作为入参使用时，该参数选填，不填写表示不修改。
     */
    RuleTag?: string;
    /**
     * 规则状态，取值有：
  <li>online：已启用；</li>
  <li>offline：已停用；</li>
  <li>progress：部署中；</li>
  <li>stopping：停用中；</li>
  <li>fail：部署失败/停用失败。</li>
  注意：L4ProxyRule 在 CreateL4ProxyRules、ModifyL4ProxyRules 作为入参使用时，该参数请勿填写。
     */
    Status?: string;
    /**
     * BuID。
     */
    BuId?: string;
}
/**
 * 描述键值对过滤器，用于条件过滤查询，支持模糊查询。例如过滤ID、名称、状态等。
若存在多个Filter时，Filter间的关系为逻辑与（AND）关系。
若同一个Filter存在多个Values，同一Filter下Values间的关系为逻辑或（OR）关系。
 */
export interface AdvancedFilter {
    /**
     * 需要过滤的字段。
     */
    Name: string;
    /**
     * 字段的过滤值。
     */
    Values: Array<string>;
    /**
     * 是否启用模糊查询。
     */
    Fuzzy?: boolean;
}
/**
 * DescribeDDoSAttackData返回参数结构体
 */
export interface DescribeDDoSAttackDataResponse {
    /**
     * 查询结果的总条数。
     */
    TotalCount?: number;
    /**
     * DDoS攻击数据内容列表。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Data?: Array<SecEntry>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 安全模板配置
 */
export interface TemplateConfig {
    /**
     * 模板ID。
     */
    TemplateId: string;
    /**
     * 模板名称。
     */
    TemplateName: string;
}
/**
 * Bot扩展处置方式，多处置动作组合。
 */
export interface BotExtendAction {
    /**
     * 处置动作，取值有：
  <li>monitor：观察；</li>
  <li>alg：JavaScript挑战；</li>
  <li>captcha：托管挑战；</li>
  <li>random：随机，按照ExtendActions分配处置动作和比例；</li>
  <li>silence：静默；</li>
  <li>shortdelay：短时响应；</li>
  <li>longdelay：长时响应。</li>
     */
    Action: string;
    /**
     * 处置方式的触发概率，范围0-100。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Percent?: number;
}
/**
 * DeleteL4Proxy返回参数结构体
 */
export interface DeleteL4ProxyResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ModifyApplicationProxyRuleStatus返回参数结构体
 */
export interface ModifyApplicationProxyRuleStatusResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CreateApplicationProxyRule请求参数结构体
 */
export interface CreateApplicationProxyRuleRequest {
    /**
     * 站点ID。
     */
    ZoneId: string;
    /**
     * 代理ID。
     */
    ProxyId: string;
    /**
     * 协议，取值有：
  <li>TCP：TCP协议；</li>
  <li>UDP：UDP协议。</li>
     */
    Proto: string;
    /**
     * 端口，支持格式：
  <li>80：80端口；</li>
  <li>81-90：81至90端口。</li>
     */
    Port: Array<string>;
    /**
     * 源站类型，取值有：
  <li>custom：手动添加；</li>
  <li>loadbalancer：负载均衡；</li>
  <li>origins：源站组。</li>
     */
    OriginType: string;
    /**
     * 源站信息：
  <li>当 OriginType 为 custom 时，表示一个或多个源站，如`["8.8.8.8","9.9.9.9"]` 或 `OriginValue=["test.com"]`；</li>
  <li>当 OriginType 为 loadbalancer 时，表示一个负载均衡，如`["lb-xdffsfasdfs"]`；</li>
  <li>当 OriginType 为 origins 时，要求有且仅有一个元素，表示源站组ID，如`["origin-537f5b41-162a-11ed-abaa-525400c5da15"]`。</li>
     */
    OriginValue: Array<string>;
    /**
     * 传递客户端IP，取值有：
  <li>TOA：TOA（仅Proto=TCP时可选）；</li>
  <li>PPV1：Proxy Protocol传递，协议版本V1（仅Proto=TCP时可选）；</li>
  <li>PPV2：Proxy Protocol传递，协议版本V2；</li>
  <li>OFF：不传递。</li>默认值：OFF。
     */
    ForwardClientIp?: string;
    /**
     * 是否开启会话保持，取值有：
  <li>true：开启；</li>
  <li>false：关闭。</li>默认值：false。
     */
    SessionPersist?: boolean;
    /**
     * 会话保持的时间，只有当SessionPersist为true时，该值才会生效。
     */
    SessionPersistTime?: number;
    /**
     * 源站端口，支持格式：
  <li>单端口：80；</li>
  <li>端口段：81-90，81至90端口。</li>
     */
    OriginPort?: string;
    /**
     * 规则标签。默认值为空字符串。
     */
    RuleTag?: string;
}
/**
 * IncreasePlanQuota返回参数结构体
 */
export interface IncreasePlanQuotaResponse {
    /**
     * 订单号。
     */
    DealName?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeIPRegion返回参数结构体
 */
export interface DescribeIPRegionResponse {
    /**
     * IP 归属信息列表。
     */
    IPRegionInfo?: Array<IPRegionInfo>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeAvailablePlans请求参数结构体
 */
export declare type DescribeAvailablePlansRequest = null;
/**
 * ModifyZone返回参数结构体
 */
export interface ModifyZoneResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * Cookie校验与会话跟踪。
 */
export interface AlgDetectSession {
    /**
     * 操作名称。
     */
    Name?: string;
    /**
     * 校验方式，默认update_detect，取值有：
  <li>detect：仅校验；</li>
  <li>update_detect：更新Cookie并校验。</li>
     */
    DetectMode?: string;
    /**
     * 会话速率和周期特征校验开关，默认off，取值有：
  <li>off：关闭；</li>
  <li>on：打开。</li>
     */
    SessionAnalyzeSwitch?: string;
    /**
     * 校验结果为未携带Cookie或Cookie已过期的统计周期。单位为秒，默认10，取值：5～3600。
     */
    InvalidStatTime?: number;
    /**
     * 校验结果为未携带Cookie或Cookie已过期的触发阈值。单位为次，默认300，取值：1～100000000。
     */
    InvalidThreshold?: number;
    /**
     * Cookie校验校验结果。
     */
    AlgDetectResults?: Array<AlgDetectResult>;
    /**
     * 会话速率和周期特征校验结果。
     */
    SessionBehaviors?: Array<AlgDetectResult>;
}
/**
 * 源站防护信息
 */
export interface OriginProtectionInfo {
    /**
     * 站点ID。
     */
    ZoneId: string;
    /**
     * 域名列表。
     */
    Hosts: Array<string>;
    /**
     * 代理ID列表。
     */
    ProxyIds: Array<string>;
    /**
     * 当前版本的IP白名单。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CurrentIPWhitelist: IPWhitelist;
    /**
     * 该站点是否需要更新源站白名单，取值有：
  <li>true ：需要更新IP白名单 ；</li>
  <li>false ：无需更新IP白名单。</li>
     */
    NeedUpdate: boolean;
    /**
     * 源站防护状态，取值有：
  <li>online ：源站防护启用中 ；</li>
  <li>offline ：源站防护已停用 ；</li>
  <li>nonactivate ：源站防护未激活，仅在从未使用过源站防护功能的站点调用中返回。</li>
     */
    Status: string;
    /**
     * 站点套餐是否支持源站防护，取值有：
  <li>true ：支持 ；</li>
  <li>false ：不支持。</li>
     */
    PlanSupport: boolean;
    /**
     * 最新IP白名单与当前IP白名单的对比。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DiffIPWhitelist: DiffIPWhitelist;
}
/**
 * 别称域名信息。
 */
export interface AliasDomain {
    /**
     * 别称域名名称。
     */
    AliasName: string;
    /**
     * 站点 ID。
     */
    ZoneId: string;
    /**
     * 目标域名名称。
     */
    TargetName: string;
    /**
     * 别称域名状态，取值有：
  <li> active：已生效； </li>
  <li> pending：部署中；</li>
  <li> conflict：被找回。 </li>
  <li> stop：已停用；</li>
     */
    Status: string;
    /**
     * 封禁模式，取值有：
  <li> 0：未封禁； </li>
  <li> 11：合规封禁；</li>
  <li> 14：未备案封禁。</li>
     */
    ForbidMode: number;
    /**
     * 别称域名创建时间。
     */
    CreatedOn: string;
    /**
     * 别称域名修改时间。
     */
    ModifiedOn: string;
}
/**
 * IP黑白名单详细规则
 */
export interface IpTableRule {
    /**
     * 动作，取值有：
  <li> drop：拦截；</li>
  <li> trans：放行；</li>
  <li> monitor：观察。</li>
     */
    Action: string;
    /**
     * 根据类型匹配，取值有：
  <li>ip：对ip进行匹配；</li>
  <li>area：对ip所属地区匹配。</li>
     */
    MatchFrom: string;
    /**
     * 规则的匹配方式，默认为空代表等于。
  取值有：
  <li> is_emty：配置为空；</li>
  <li> not_exists：配置为不存在；</li>
  <li> include：包含；</li>
  <li> not_include：不包含；</li>
  <li> equal：等于；</li>
  <li> not_equal：不等于。</li>
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Operator?: string;
    /**
     * 规则id。仅出参使用。
     */
    RuleID?: number;
    /**
     * 更新时间。仅出参使用。
     */
    UpdateTime?: string;
    /**
     * 规则启用状态，当返回为null时，为启用。取值有：
  <li> on：启用；</li>
  <li> off：未启用。</li>
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Status?: string;
    /**
     * 规则名。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RuleName?: string;
    /**
     * 匹配内容。当 Operator为is_emty 或not_exists时，此值允许为空。
     */
    MatchContent?: string;
}
/**
 * IncreasePlanQuota请求参数结构体
 */
export interface IncreasePlanQuotaRequest {
    /**
     * 套餐 ID, 形如 edgeone-2unuvzjmmn2q。
     */
    PlanId: string;
    /**
     * 新增的套餐配额类型，取值有：<li> site：站点数；</li><li> precise_access_control_rule：Web 防护 - 自定义规则 - 精准匹配策略的规则配额；</li><li> rate_limiting_rule：Web 防护 - 速率限制 - 精准速率限制模块的规则配额。</li>
     */
    QuotaType: string;
    /**
     * 新增的配额个数。单次新增的配额个数上限为 100。
     */
    QuotaNumber: number;
}
/**
 * DescribeDDoSAttackTopData请求参数结构体
 */
export interface DescribeDDoSAttackTopDataRequest {
    /**
     * 开始时间。
     */
    StartTime: string;
    /**
     * 结束时间。
     */
    EndTime: string;
    /**
     * 查询的统计指标，取值有：
  <li>ddos_attackFlux_protocol：按各协议的攻击流量排行；</li>
  <li>ddos_attackPackageNum_protocol：按各协议的攻击包量排行；</li>
  <li>ddos_attackNum_attackType：按各攻击类型的攻击数量排行；</li>
  <li>ddos_attackNum_sregion：按攻击源地区的攻击数量排行；</li>
  <li>ddos_attackFlux_sip：按攻击源IP的攻击数量排行；</li>
  <li>ddos_attackFlux_sregion：按攻击源地区的攻击数量排行。</li>
     */
    MetricName: string;
    /**
     * 站点ID集合，此参数必填。
     */
    ZoneIds?: Array<string>;
    /**
     * DDoS策略组ID集合，不填默认选择全部策略ID。
     */
    PolicyIds?: Array<number | bigint>;
    /**
     * 攻击类型，取值有：
  <li>flood：洪泛攻击；</li>
  <li>icmpFlood：icmp洪泛攻击；</li>
  <li>all：所有的攻击类型。</li>不填默认为all，表示查询全部攻击类型。
     */
    AttackType?: string;
    /**
     * 协议类型，取值有：
  <li>tcp：tcp协议；</li>
  <li>udp：udp协议；</li>
  <li>all：所有的协议类型。</li>不填默认为all，表示查询所有协议。
     */
    ProtocolType?: string;
    /**
     * 端口号。
     */
    Port?: number;
    /**
     * 查询前多少个数据，不填默认默认为10， 表示查询前top 10的数据。
     */
    Limit?: number;
    /**
     * 数据归属地区，取值有：
  <li>overseas：全球（除中国大陆地区）数据；</li>
  <li>mainland：中国大陆地区数据。</li>不填将根据用户所在地智能选择地区。
     */
    Area?: string;
}
/**
 * Quic配置项
 */
export interface Quic {
    /**
     * 是否开启 Quic 配置，取值有：
  <li>on：开启；</li>
  <li>off：关闭。</li>
     */
    Switch: string;
}
/**
 * CreateCLSIndex请求参数结构体
 */
export interface CreateCLSIndexRequest {
    /**
     * 站点 ID。
     */
    ZoneId: string;
    /**
     * 实时日志投递任务 ID。
     */
    TaskId: string;
}
/**
 * DescribeRules请求参数结构体
 */
export interface DescribeRulesRequest {
    /**
     * 站点 ID。
     */
    ZoneId: string;
    /**
     * 过滤条件，Filters.Values的上限为20。详细的过滤条件如下：
  <li>rule-id<br>   按照【<strong>规则ID</strong>】进行过滤。<br>   类型：string<br>   必选：否</li>
     */
    Filters?: Array<Filter>;
}
/**
 * DescribeContentQuota返回参数结构体
 */
export interface DescribeContentQuotaResponse {
    /**
     * 刷新相关配额。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PurgeQuota?: Array<Quota>;
    /**
     * 预热相关配额。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PrefetchQuota?: Array<Quota>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ModifyZoneSetting返回参数结构体
 */
export interface ModifyZoneSettingResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DownloadL7Logs返回参数结构体
 */
export interface DownloadL7LogsResponse {
    /**
     * 查询结果的总条数。
     */
    TotalCount?: number;
    /**
     * 七层离线日志数据列表。
     */
    Data?: Array<L7OfflineLog>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 加速域名
 */
export interface AccelerationDomain {
    /**
     * 站点 ID。
     */
    ZoneId?: string;
    /**
     * 加速域名名称。
     */
    DomainName?: string;
    /**
     * 加速域名状态，取值有：
  <li>online：已生效；</li>
  <li>process：部署中；</li>
  <li>offline：已停用；</li>
  <li>forbidden：已封禁；</li>
  <li>init：未生效，待激活站点；</li>
     */
    DomainStatus?: string;
    /**
     * 源站信息。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    OriginDetail?: OriginDetail;
    /**
     * 回源协议，取值有：
  <li>FOLLOW: 协议跟随；</li>
  <li>HTTP: HTTP协议回源；</li>
  <li>HTTPS: HTTPS协议回源。</li>
  注意：此字段可能返回 null，表示取不到有效值。
     */
    OriginProtocol?: string;
    /**
     * 域名证书信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Certificate?: AccelerationDomainCertificate;
    /**
     * HTTP回源端口。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    HttpOriginPort?: number;
    /**
     * HTTPS回源端口。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    HttpsOriginPort?: number;
    /**
     * IPv6状态，取值有：
  <li>follow：遵循站点IPv6配置；</li>
  <li>on：开启状态；</li>
  <li>off：关闭状态。</li>
  注意：此字段可能返回 null，表示取不到有效值。
     */
    IPv6Status?: string;
    /**
     * CNAME 地址。
     */
    Cname?: string;
    /**
     * 加速域名归属权验证状态，取值有： <li>pending：待验证；</li> <li>finished：已完成验证。</li>
  注意：此字段可能返回 null，表示取不到有效值。
     */
    IdentificationStatus?: string;
    /**
     * 创建时间。
     */
    CreatedOn?: string;
    /**
     * 修改时间。
     */
    ModifiedOn?: string;
    /**
     * 当域名需要进行归属权验证才能继续提供服务时，该对象会携带对应验证方式所需要的信息。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    OwnershipVerification?: OwnershipVerification;
}
/**
 * 慢速攻击的基础配置。
 */
export interface SlowRateConfig {
    /**
     * 开关，取值有：
  <li>on：开启；</li>
  <li>off：关闭。</li>
     */
    Switch: string;
    /**
     * 统计的间隔，单位是秒，即在首段包传输结束后，将数据传输轴按照本参数切分，每个分片独立计算慢速攻击。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Interval?: number;
    /**
     * 统计时应用的速率阈值，单位是bps，即如果本分片中的传输速率没达到本参数的值，则判定为慢速攻击，应用慢速攻击的处置方式。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Threshold?: number;
}
/**
 * 规则引擎HTTP请求头/响应头类型的动作
 */
export interface RewriteAction {
    /**
     * 功能名称，功能名称填写规范可调用接口 [查询规则引擎的设置参数](https://cloud.tencent.com/document/product/1552/80618) 查看。
     */
    Action: string;
    /**
     * 参数。
     */
    Parameters: Array<RuleRewriteActionParams>;
}
/**
 * 安全模板绑定域名状态
 */
export interface TemplateScope {
    /**
     * 站点ID。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ZoneId?: string;
    /**
     * 实例状态列表。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    EntityStatus?: Array<EntityStatus>;
}
/**
 * DescribeOverviewL7Data请求参数结构体
 */
export interface DescribeOverviewL7DataRequest {
    /**
     * 开始时间。
     */
    StartTime: string;
    /**
     * 结束时间。
     */
    EndTime: string;
    /**
     * 查询的指标，取值有：
  <li>l7Flow_outFlux: Edegone响应流量；</li>
  <li>l7Flow_inFlux: Edgeone请求流量；</li>
  <li>l7Flow_outBandwidth: Edegone响应带宽；</li>
  <li>l7Flow_inBandwidth: Edegone请求带宽；</li>
  <li>l7Flow_hit_outFlux: 缓存命中流量；</li>
  <li>l7Flow_request: 访问请求数；</li>
  <li>l7Flow_flux: 访问请求上行+下行流量；</li>
  <li>l7Flow_bandwidth：访问请求上行+下行带宽。</li>
     */
    MetricNames: Array<string>;
    /**
     * 站点 ID 集合，此参数必填。
     */
    ZoneIds?: Array<string>;
    /**
     * 查询的域名集合，此参数已经废弃。
     */
    Domains?: Array<string>;
    /**
     * 查询的协议类型，取值有：
  <li>http: http协议；</li>
  <li>https: https协议；</li>
  <li>http2: http2协议；</li>
  <li>all:  所有协议。</li>不填默认为all，此参数暂未生效。
     */
    Protocol?: string;
    /**
     * 查询时间粒度，取值有：
  <li>min：1分钟；</li>
  <li>5min：5分钟；</li>
  <li>hour：1小时；</li>
  <li>day：1天。</li>不填将根据开始时间跟结束时间的间距自动推算粒度，具体为：1小时范围内以min粒度查询，2天范围内以5min粒度查询，7天范围内以hour粒度查询，超过7天以day粒度查询。
     */
    Interval?: string;
    /**
     * 过滤条件，详细的过滤条件Key值如下：
  <li>socket<br>   按照【<strong>HTTP协议类型</strong>】进行过滤。<br>   对应的Value可选项如下：<br>   HTTP：HTTP 协议；<br>   HTTPS：HTTPS协议；<br>   QUIC：QUIC协议。</li>
  <li>domain<br>   按照【<strong>域名</strong>】进行过滤。</li>
  <li>tagKey<br>   按照【<strong>标签Key</strong>】进行过滤。</li>
  <li>tagValue<br>   按照【<strong>标签Value</strong>】进行过滤。</li>
     */
    Filters?: Array<QueryCondition>;
    /**
     * 数据归属地区，取值有：
  <li>overseas：全球（除中国大陆地区）数据；</li>
  <li>mainland：中国大陆地区数据；</li>
  <li>global：全球数据。</li>不填默认取值为global。
     */
    Area?: string;
}
/**
 * DeleteSharedCNAME返回参数结构体
 */
export interface DeleteSharedCNAMEResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DDoS封禁解封信息
 */
export interface DDoSBlockData {
    /**
     * 开始时间，采用unix时间戳。
     */
    StartTime: number;
    /**
     * 结束时间，采用unix时间戳, 为0表示还处于封禁中。
     */
    EndTime: number;
    /**
     * 封禁受影响区域。
     */
    BlockArea: string;
}
/**
 * DeleteL4ProxyRules返回参数结构体
 */
export interface DeleteL4ProxyRulesResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * BindZoneToPlan请求参数结构体
 */
export interface BindZoneToPlanRequest {
    /**
     * 未绑定套餐的站点ID。
     */
    ZoneId: string;
    /**
     * 待绑定的目标套餐ID。
     */
    PlanId: string;
}
/**
 * 安全类型配置项。
 */
export interface SecurityType {
    /**
     * 安全类型开关，取值为：
  <li> on：开启；</li>
  <li> off：关闭。</li>
     */
    Switch: string;
}
/**
 * 源站防护IP白名单
 */
export interface IPWhitelist {
    /**
     * IPv4列表。
     */
    IPv4: Array<string>;
    /**
     * IPv6列表。
     */
    IPv6: Array<string>;
}
/**
 * DescribeSecurityIPGroup请求参数结构体
 */
export interface DescribeSecurityIPGroupRequest {
    /**
     * 站点 ID ，用于指定查询的站点范围。
     */
    ZoneId: string;
    /**
     * 指定安全 IP 组 ID。
  <li>提供该参数时，仅查询指定 ID 的安全 IP 组配置；</li>
  <li>不传递参数时，返回站点下所有安全 IP 组信息。</li>
     */
    GroupIds?: Array<number | bigint>;
}
/**
 * ModifyApplicationProxyStatus返回参数结构体
 */
export interface ModifyApplicationProxyStatusResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 站点验证信息
 */
export interface Identification {
    /**
     * 站点名称。
     */
    ZoneName?: string;
    /**
     * 验证子域名。验证站点时，该值为空。验证子域名是为具体子域名。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Domain?: string;
    /**
     * 验证状态，取值有：
  <li> pending：验证中；</li>
  <li> finished：验证完成。</li>
     */
    Status?: string;
    /**
     * 站点归属权校验：Dns校验信息。
     */
    Ascription?: AscriptionInfo;
    /**
     * 域名当前的 NS 记录。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    OriginalNameServers?: Array<string>;
    /**
     * 站点归属权校验：文件校验信息。
     */
    FileAscription?: FileAscriptionInfo;
}
/**
 * TopN的Entry数据
 */
export interface TopEntry {
    /**
     * top查询维度值。
     */
    Key: string;
    /**
     * 查询具体数据。
     */
    Value: Array<TopEntryValue>;
}
/**
 * NS 接入，切换 DNS 服务器所需的信息。
 */
export interface NsVerification {
    /**
     * NS 接入时，分配给用户的 DNS 服务器地址，需要将域名的 NameServer 切换至该地址。
     */
    NameServers?: Array<string>;
}
/**
 * 中国大陆加速优化配置。
 */
export interface AccelerateMainland {
    /**
     * 是否开启中国大陆加速优化配置，取值有：
  <li>on：开启；</li>
  <li>off：关闭。</li>
     */
    Switch: string;
}
/**
 * BindSecurityTemplateToEntity请求参数结构体
 */
export interface BindSecurityTemplateToEntityRequest {
    /**
     * 需要绑定或解绑的策略模板所属站点 ID。
     */
    ZoneId: string;
    /**
     * 绑定至策略模板（或者从策略模板解绑）的域名列表。
     */
    Entities: Array<string>;
    /**
     * 绑定或解绑操作选项，取值有：
  <li>bind：绑定域名至策略模板；</li>
  <li>unbind-keep-policy：将域名从策略模板解绑，解绑时保留当前策略；</li>
  <li>unbind-use-default：将域名从策略模板解绑，并使用默认空白策略。</li>注意：解绑操作当前仅支持单个域名解绑。即：当 Operate 参数取值为 unbind-keep-policy 或 unbind-use-default 时，Entities 参数列表仅支持填写一个域名。
     */
    Operate: string;
    /**
     * 指定绑定或解绑的策略模板 ID 或站点全局策略
  - 如需绑定至策略模板，或从策略模板解绑，请指定策略模板 ID。
  - 如需绑定至站点全局策略，或从站点全局策略解绑，请使用 @ZoneLevel@domain 参数值。
  
  注意：解绑后，域名将使用独立策略，并单独计算规则配额，请确保解绑前套餐规则配额充足。
     */
    TemplateId: string;
    /**
     * 如指定的域名已经绑定了策略模板，是否替换该模板。支持下列取值：
  <li>true： 替换域名当前绑定的模板；</li>
  <li>false：不替换域名当前绑定的模板。</li>注意：当选择不替换已有策略模板时，若指定域名已经绑定策略模板，API 将返回错误。
     */
    OverWrite?: boolean;
}
/**
 * Bot智能分析规则详情
 */
export interface IntelligenceRuleItem {
    /**
     * 智能分析标签，取值有：
  <li>evil_bot：恶意bot；</li>
  <li>suspect_bot：疑似bot；</li>
  <li>good_bot：良好bot；</li>
  <li>normal：正常请求。</li>
     */
    Label: string;
    /**
     * 触发智能分析标签对应的处置方式，取值有：
  <li>drop：拦截；</li>
  <li>trans：放行；</li>
  <li>alg：Javascript挑战；</li>
  <li>captcha：数字验证码；</li>
  <li>monitor：观察。</li>
     */
    Action: string;
}
/**
 * 智能分析规则
 */
export interface IntelligenceRule {
    /**
     * 开关，取值有：
  <li>on：开启；</li>
  <li>off：关闭。</li>
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Switch?: string;
    /**
     * 规则详情。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    IntelligenceRuleItems?: Array<IntelligenceRuleItem>;
}
/**
 * POST请求上传文件流式传输最大限制
 */
export interface PostMaxSize {
    /**
     * 是否开启 POST 请求上传文件限制，平台默认为限制为32MB，取值有：
  <li>on：开启限制；</li>
  <li>off：关闭限制。</li>
     */
    Switch: string;
    /**
     * 最大限制，取值在1MB和500MB之间。单位字节。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    MaxSize?: number;
}
/**
 * DescribeBillingData返回参数结构体
 */
export interface DescribeBillingDataResponse {
    /**
     * 数据点列表。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Data?: Array<BillingData>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 描述键值对过滤器，用于条件过滤查询。例如过滤ID、名称、状态等。
若存在多个Filter时，Filter间的关系为逻辑与（AND）关系。
若同一个Filter存在多个Values，同一Filter下Values间的关系为逻辑或（OR）关系。
 */
export interface Filter {
    /**
     * 需要过滤的字段。
     */
    Name: string;
    /**
     * 字段的过滤值。
     */
    Values: Array<string>;
}
/**
 * CreateAccelerationDomain返回参数结构体
 */
export interface CreateAccelerationDomainResponse {
    /**
     * 当您的站点未进行归属权验证时，您可通过该参数返回的信息单独对域名进行归属权校验。详情参考 [站点/域名归属权验证](https://cloud.tencent.com/document/product/1552/70789)。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    OwnershipVerification?: OwnershipVerification;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ModifyAccelerationDomainStatuses请求参数结构体
 */
export interface ModifyAccelerationDomainStatusesRequest {
    /**
     * 加速域名所属站点ID。
     */
    ZoneId: string;
    /**
     * 要执行状态变更的加速域名列表。
     */
    DomainNames: Array<string>;
    /**
     * 加速域名状态，取值有：
  <li>online：启用；</li>
  <li>offline：停用。</li>
     */
    Status: string;
    /**
     * 是否强制停用。当域名存在关联资源（如马甲域名、流量调度功能）时，是否强制停用该域名，取值有：
  <li> true：停用该域名及所有关联资源；</li>
  <li> false：当该加速域名存在关联资源时，不允许停用。</li>不填写，默认值为：false。
     */
    Force?: boolean;
}
/**
 * CreateZone返回参数结构体
 */
export interface CreateZoneResponse {
    /**
     * 站点 ID。
     */
    ZoneId?: string;
    /**
     * 站点归属权验证信息。站点完成创建后，您还需要完成归属权校验，站点才能正常服务。
  
  Type = partial 时，您需要参考 [站点/域名归属权验证](https://cloud.tencent.com/document/product/1552/70789) 前往您的域名解析服务商添加 TXT 记录或者前往根域名服务器添加文件，再调用接口 [VerifyOwnership]() 完成验证；
  
  Type = full 时，您需要参考 [修改 DNS 服务器](https://cloud.tencent.com/document/product/1552/90452) 切换 DNS 服务器即可，可通过接口 [VerifyOwnership]() 查询 DNS 是否切换成功；
  
  Type = noDomainAccess 时，该值为空，不需要进行任何操作。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    OwnershipVerification?: OwnershipVerification;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ModifySecurityPolicy返回参数结构体
 */
export interface ModifySecurityPolicyResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ModifyOriginGroup请求参数结构体
 */
export interface ModifyOriginGroupRequest {
    /**
     * 站点 ID
     */
    ZoneId: string;
    /**
     * 源站组 ID，此参数必填。
     */
    GroupId?: string;
    /**
     * 源站组名称，不填保持原有配置，可输入1 - 200个字符，允许的字符为 a - z, A - Z, 0 - 9, _, - 。
     */
    Name?: string;
    /**
     * 源站组类型，取值有：
  <li>GENERAL：通用型源站组，仅支持添加 IP/域名 源站，可以被域名服务、规则引擎、四层代理、通用型负载均衡引用；</li>
  <li>HTTP： HTTP专用型源站组，支持添加 IP/域名、对象存储源站，无法被四层代理引用。</li>不填保持原有配置。
     */
    Type?: string;
    /**
     * 源站记录信息，不填保持原有配置。
     */
    Records?: Array<OriginRecord>;
    /**
     * 回源 Host Header，仅 Type = HTTP 时生效， 不填或者填空表示不配置回源Host，规则引擎修改 Host Header 配置优先级高于源站组的 Host Header。
     */
    HostHeader?: string;
}
/**
 * 安全策略模板的绑定关系。
 */
export interface SecurityTemplateBinding {
    /**
     * 模板ID
     */
    TemplateId?: string;
    /**
     * 模板绑定状态。
     */
    TemplateScope?: Array<TemplateScope>;
}
/**
 * 节点缓存清除类型取值为 purge_cache_tag 时附带的信息。
 */
export interface CacheTag {
    /**
     * 待清除缓存的域名列表。
     */
    Domains: Array<string>;
}
/**
 * DescribeDefaultCertificates返回参数结构体
 */
export interface DescribeDefaultCertificatesResponse {
    /**
     * 证书总数。
     */
    TotalCount?: number;
    /**
     * 默认证书列表。
     */
    DefaultServerCertInfo?: Array<DefaultServerCertInfo>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 该结构体表示各种场景、模式下，用于验证用户对站点域名的归属权内容。
 */
export interface OwnershipVerification {
    /**
     * CNAME 接入，使用 DNS 解析验证时所需的信息。详情参考 [站点/域名归属权验证
  ](https://cloud.tencent.com/document/product/1552/70789#7af6ecf8-afca-4e35-8811-b5797ed1bde5)。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DnsVerification?: DnsVerification;
    /**
     * CNAME 接入，使用文件验证时所需的信息。详情参考 [站点/域名归属权验证
  ](https://cloud.tencent.com/document/product/1552/70789#7af6ecf8-afca-4e35-8811-b5797ed1bde5)。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    FileVerification?: FileVerification;
    /**
     * NS 接入，切换 DNS 服务器所需的信息。详情参考 [修改 DNS 服务器](https://cloud.tencent.com/document/product/1552/90452)。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    NsVerification?: NsVerification;
}
/**
 * DescribeConfigGroupVersions请求参数结构体
 */
export interface DescribeConfigGroupVersionsRequest {
    /**
     * 站点 ID。
     */
    ZoneId: string;
    /**
     * 配置组 ID。
     */
    GroupId: string;
    /**
     * 过滤条件，Filters.Values 的上限为 20，该参数不填写时，返回所选配置组下的所有版本信息。详细的过滤条件如下：
  <li>version-id：按照版本 ID 进行过滤；</li>
     */
    Filters?: Array<AdvancedFilter>;
    /**
     * 分页查询偏移量。默认值为 0。
     */
    Offset?: number;
    /**
     * 分页查询限制数目。默认值为 20，最大值为 100。
     */
    Limit?: number;
}
/**
 * DescribeL4ProxyRules请求参数结构体
 */
export interface DescribeL4ProxyRulesRequest {
    /**
     * 站点 ID。
     */
    ZoneId: string;
    /**
     * 四层代理实例 ID。
     */
    ProxyId: string;
    /**
     * 分页查询偏移量，不填写时默认为 0。
     */
    Offset: number;
    /**
     * 分页查询限制数目。默认值：20，最大值：1000。
     */
    Limit: number;
    /**
     * 过滤条件，Filters.Values的上限为20。不填写时返回当前四层实例下所有的规则信息，详细的过滤条件如下：
   <li>rule-tag：按照规则标签对四层代理实例下的规则进行过滤。</li>
  
     */
    Filters?: Array<Filter>;
}
/**
 * AI规则引擎防护
 */
export interface AiRule {
    /**
     * AI规则引擎状态，取值有：
  <li> smart_status_close：关闭；</li>
  <li> smart_status_open：拦截处置；</li>
  <li> smart_status_observe：观察处置。</li>
     */
    Mode: string;
}
/**
 * 刷新/预热 可用量及配额
 */
export interface Quota {
    /**
     * 单次批量提交配额上限。
     */
    Batch: number;
    /**
     * 每日提交配额上限。
     */
    Daily: number;
    /**
     * 每日剩余的可提交配额。
     */
    DailyAvailable: number;
    /**
     * 刷新预热缓存类型，取值有：
  <li> purge_prefix：按前缀刷新；</li>
  <li> purge_url：按URL刷新；</li>
  <li> purge_host：按Hostname刷新；</li>
  <li> purge_all：刷新全部缓存内容；</li>
  <li> purge_cache_tag：按CacheTag刷新；</li><li> prefetch_url：按URL预热。</li>
     */
    Type: string;
}
/**
 * CheckCnameStatus请求参数结构体
 */
export interface CheckCnameStatusRequest {
    /**
     * 站点 ID。
     */
    ZoneId: string;
    /**
     * 加速域名列表。
     */
    RecordNames: Array<string>;
}
/**
 * ModifyZoneStatus返回参数结构体
 */
export interface ModifyZoneStatusResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeSecurityIPGroup返回参数结构体
 */
export interface DescribeSecurityIPGroupResponse {
    /**
     * 安全 IP 组的详细配置信息。包含每个安全 IP 组的 ID 、名称和 IP / 网段列表信息。
     */
    IPGroups?: Array<IPGroup>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * UpgradePlan请求参数结构体
 */
export interface UpgradePlanRequest {
    /**
     * 套餐 ID，形如 edgeone-2unuvzjmmn2q。
     */
    PlanId: string;
    /**
     * 需要升级到的目标套餐版本，取值有：<li> basic：基础版套餐；</li><li> standard：标准版套餐。</li>
     */
    PlanType: string;
    /**
     * 是否自动使用代金券，取值有：<li> true：是；</li><li> false：否。</li>不填写使用默认值 false。
     */
    AutoUseVoucher?: string;
}
/**
 * CreatePurgeTask请求参数结构体
 */
export interface CreatePurgeTaskRequest {
    /**
     * 站点 ID。
     */
    ZoneId: string;
    /**
     * 节点缓存清除类型，取值有：
  <li>purge_url：URL刷新；</li>
  <li>purge_prefix：目录刷新；</li>
  <li>purge_host：Hostname 刷新；</li>
  <li>purge_all：站点下全部缓存刷新；</li>
  <li>purge_cache_tag：cache-tag 刷新。</li>缓存清除类型详情请查看[清除缓存](https://cloud.tencent.com/document/product/1552/70759)。
     */
    Type: string;
    /**
     * 节点缓存清除方法，针对目录刷新、Hostname刷新以及刷新全部缓存类型有效，取值有：<li> invalidate：仅刷新目录下产生了更新的资源；</li><li> delete：无论目录下资源是否更新都刷新节点资源。</li>默认值： invalidate。
     */
    Method?: string;
    /**
     * 要清除缓存的资源列表。每个元素格式依据清除缓存类型而定，可参考接口示例。<li>单次提交的任务数受计费套餐配额限制，请查看 [EO计费套餐](https://cloud.tencent.com/document/product/1552/77380)。</li>
     */
    Targets?: Array<string>;
    /**
     * 若有编码转换，仅清除编码转换后匹配的资源。
  若内容含有非 ASCII 字符集的字符，请开启此开关进行编码转换（编码规则遵循 RFC3986）。
     * @deprecated
     */
    EncodeUrl?: boolean;
    /**
     * 节点缓存清除类型取值为 purge_cache_tag 时附带的信息。
     */
    CacheTag?: CacheTag;
}
/**
 * DescribePurgeTasks返回参数结构体
 */
export interface DescribePurgeTasksResponse {
    /**
     * 该查询条件总共条目数。
     */
    TotalCount?: number;
    /**
     * 任务结果列表。
     */
    Tasks?: Array<Task>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DeployConfigGroupVersion返回参数结构体
 */
export interface DeployConfigGroupVersionResponse {
    /**
     * 发布记录 ID。
     */
    RecordId?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 智能客户端过滤
 */
export interface RateLimitIntelligence {
    /**
     * 功能开关，取值有：
  <li>on：开启；</li>
  <li>off：关闭。</li>
     */
    Switch: string;
    /**
     * 执行动作，取值有：
  <li>monitor：观察；</li>
  <li>alg：挑战。</li>
     */
    Action: string;
    /**
     * 规则id，仅出参使用。
     */
    RuleId?: number;
}
/**
 * DescribeDeployHistory返回参数结构体
 */
export interface DescribeDeployHistoryResponse {
    /**
     * 发布记录总数。
     */
    TotalCount?: number;
    /**
     * 发布记录详情。
     */
    Records?: Array<DeployRecord>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CacheKey中包含请求参数
 */
export interface QueryString {
    /**
     * CacheKey是否由QueryString组成，取值有：
  <li>on：是；</li>
  <li>off：否。</li>
     */
    Switch: string;
    /**
     * CacheKey使用QueryString的方式，取值有：
  <li>includeCustom：使用部分url参数；</li>
  <li>excludeCustom：排除部分url参数。</li>
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Action?: string;
    /**
     * 使用/排除的url参数数组。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Value?: Array<string>;
}
/**
 * DescribeAccelerationDomains请求参数结构体
 */
export interface DescribeAccelerationDomainsRequest {
    /**
     * 加速域名所属站点 ID。
     */
    ZoneId: string;
    /**
     * 分页查询偏移量，默认为 0。
     */
    Offset?: number;
    /**
     * 分页查询限制数目，默认值：20，上限：200。
     */
    Limit?: number;
    /**
     * 过滤条件，Filters.Values 的上限为 20。该参数不填写时，返回当前 zone-id 下所有域名信息。详细的过滤条件如下：
  <li>domain-name：按照加速域名进行过滤；</li>
  <li>origin-type：按照源站类型进行过滤；</li>
  <li>origin：按照主源站地址进行过滤；</li>
  <li>backup-origin： 按照备用源站地址进行过滤；</li>
  <li>domain-cname：按照 CNAME 进行过滤；</li>
  <li>share-cname：按照共享 CNAME 进行过滤；</li>
  <li>vodeo-sub-app-id：按照【 vodeo 子应用 ID】进行过滤；</li>
  <li>vodeo-distribution-range：按照【 vodeo 分发范围】进行过滤；</li>
  <li>vodeo-bucket-id：按照【vodeo 存储桶 ID】进行过滤；</li>
     */
    Filters?: Array<AdvancedFilter>;
    /**
     * 可根据该字段对返回结果进行排序，取值有：
  <li>created_on：加速域名创建时间；</li>
  <li>domain-name：加速域名。</li>不填写时，默认对返回结果按照 domain-name 排序。
     */
    Order?: string;
    /**
     * 排序方向，如果是字段值为数字，则根据数字大小排序；如果字段值为文本，则根据 ascill 码的大小排序。取值有：
  <li>asc：升序排列；</li>
  <li>desc：降序排列。</li>不填写使用默认值 asc。
     */
    Direction?: string;
    /**
     * 匹配方式，取值有：
  <li>all：返回匹配所有查询条件的加速域名；</li>
  <li>any：返回匹配任意一个查询条件的加速域名。</li>不填写时默认值为 all。
     */
    Match?: string;
}
/**
 * DescribeTimingL4Data请求参数结构体
 */
export interface DescribeTimingL4DataRequest {
    /**
     * 开始时间。
     */
    StartTime: string;
    /**
     * 结束时间。
     */
    EndTime: string;
    /**
     * 查询指标，取值有：
  <li>l4Flow_connections: 访问连接数；</li>
  <li>l4Flow_flux: 访问总流量；</li>
  <li>l4Flow_inFlux: 访问入流量；</li>
  <li>l4Flow_outFlux: 访问出流量。</li>
     */
    MetricNames: Array<string>;
    /**
     * 站点 ID 集合，此参数必填。
     */
    ZoneIds?: Array<string>;
    /**
     * 四层实例列表, 不填表示选择全部实例。
     */
    ProxyIds?: Array<string>;
    /**
     * 查询时间粒度，取值有：
  <li>min: 1分钟 ；</li>
  <li>5min: 5分钟 ；</li>
  <li>hour: 1小时 ；</li>
  <li>day: 1天 。</li>不填将根据开始时间跟结束时间的间距自动推算粒度，具体为：1小时范围内以min粒度查询，2天范围内以5min粒度查询，7天范围内以hour粒度查询，超过7天以day粒度查询。
     */
    Interval?: string;
    /**
     * 过滤条件，详细的过滤条件Key值如下：
  <li>ruleId<br>   按照【<strong>转发规则ID</strong>】进行过滤。</li>
  <li>proxyId<br>   按照【<strong>四层代理实例ID</strong>】进行过滤。</li>
     */
    Filters?: Array<QueryCondition>;
    /**
     * 数据归属地区，取值有：
  <li>overseas：全球（除中国大陆地区）数据；</li>
  <li>mainland：中国大陆地区数据；</li>
  <li>global：全球数据。</li>不填默认取值为global。
     */
    Area?: string;
}
/**
 * 自定义名字服务器 IP 信息
 */
export interface VanityNameServersIps {
    /**
     * 自定义名字服务器名称。
     */
    Name: string;
    /**
     * 自定义名字服务器 IPv4 地址。
     */
    IPv4: string;
}
