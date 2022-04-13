/**
 * 区域信息详情
 */
export interface RegionDetail {
    /**
      * 区域ID
      */
    RegionId: string;
    /**
      * 区域英文名或中文名
      */
    RegionName: string;
    /**
      * 机房所属大区
      */
    RegionArea: string;
    /**
      * 机房所属大区名
      */
    RegionAreaName: string;
    /**
      * 机房类型, dc表示DataCenter数据中心, ec表示EdgeComputing边缘节点
      */
    IDCType: string;
    /**
      * 特性位图，每个bit位代表一种特性，其中：
0，表示不支持该特性；
1，表示支持该特性。
特性位图含义如下（从右往左）：
第1个bit，支持4层加速；
第2个bit，支持7层加速；
第3个bit，支持Http3接入；
第4个bit，支持IPv6；
第5个bit，支持精品BGP接入；
第6个bit，支持三网接入；
第7个bit，支持接入段Qos加速。
注意：此字段可能返回 null，表示取不到有效值。
      */
    FeatureBitmap: number;
}
/**
 * DescribeUDPListeners请求参数结构体
 */
export interface DescribeUDPListenersRequest {
    /**
      * 过滤条件，根据通道ID进行拉取，ProxyId/GroupId/ListenerId必须设置一个，但ProxyId和GroupId不能同时设置。
      */
    ProxyId?: string;
    /**
      * 过滤条件，根据监听器ID精确查询。
当设置了ProxyId时，会检查该监听器是否归属于该通道。
当设置了GroupId时，会检查该监听器是否归属于该通道组。
      */
    ListenerId?: string;
    /**
      * 过滤条件，根据监听器名称精确查询
      */
    ListenerName?: string;
    /**
      * 过滤条件，根据监听器端口精确查询
      */
    Port?: number;
    /**
      * 偏移量，默认为0
      */
    Offset?: number;
    /**
      * 限制数量，默认为20
      */
    Limit?: number;
    /**
      * 过滤条件，根据通道组ID进行拉取，ProxyId/GroupId/ListenerId必须设置一个，但ProxyId和GroupId不能同时设置。
      */
    GroupId?: string;
    /**
      * 过滤条件，支持按照端口或监听器名称进行模糊查询，该参数不能与ListenerName和Port同时使用
      */
    SearchValue?: string;
}
/**
 * DeleteProxyGroup请求参数结构体
 */
export interface DeleteProxyGroupRequest {
    /**
      * 需要删除的通道组ID。
      */
    GroupId?: string;
    /**
      * 强制删除标识。其中：
0，不强制删除，
1，强制删除。
默认为0，当通道组中存在通道或通道组中存在监听器/规则绑定了源站时，且Force为0时，该操作会返回失败。
      */
    Force?: number;
}
/**
 * DescribeResourcesByTag请求参数结构体
 */
export interface DescribeResourcesByTagRequest {
    /**
      * 标签键。
      */
    TagKey: string;
    /**
      * 标签值。
      */
    TagValue: string;
    /**
      * 资源类型，其中：
Proxy表示通道；
ProxyGroup表示通道组；
RealServer表示源站。
不指定该字段则查询该标签下所有资源。
      */
    ResourceType?: string;
}
/**
 * DescribeListenerStatistics请求参数结构体
 */
export interface DescribeListenerStatisticsRequest {
    /**
      * 监听器ID
      */
    ListenerId: string;
    /**
      * 起始时间
      */
    StartTime: string;
    /**
      * 结束时间
      */
    EndTime: string;
    /**
      * 统计指标名称列表，支持: 入带宽:InBandwidth, 出带宽:OutBandwidth, 并发:Concurrent, 入包量:InPackets, 出包量:OutPackets。
      */
    MetricNames: Array<string>;
    /**
      * 监控粒度，目前支持300，3600，86400，单位：秒。
查询时间范围不超过1天，支持最小粒度300秒；
查询间范围不超过7天，支持最小粒度3600秒；
查询间范围超过7天，支持最小粒度86400秒。
      */
    Granularity: number;
}
/**
 * DescribeProxyAndStatisticsListeners返回参数结构体
 */
export interface DescribeProxyAndStatisticsListenersResponse {
    /**
      * 可以统计的通道信息
      */
    ProxySet: Array<ProxySimpleInfo>;
    /**
      * 通道数量
      */
    TotalCount: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DeleteRule请求参数结构体
 */
export interface DeleteRuleRequest {
    /**
      * 7层监听器ID
      */
    ListenerId: string;
    /**
      * 转发规则ID
      */
    RuleId: string;
    /**
      * 是否可以强制删除已绑定源站的转发规则，0非强制，1强制
      */
    Force: number;
}
/**
 * BindRuleRealServers请求参数结构体
 */
export interface BindRuleRealServersRequest {
    /**
      * 转发规则ID
      */
    RuleId: string;
    /**
      * 需要绑定的源站信息列表。
如果已经存在绑定的源站，则会覆盖更新成这个源站列表。
当不带该字段时，表示解绑该规则上的所有源站。
如果该规则的源站调度策略是加权轮询，需要填写源站权重 RealServerWeight, 不填或者其他调度类型默认源站权重为1。
      */
    RealServerBindSet?: Array<RealServerBindSetReq>;
}
/**
 * DescribeHTTPSListeners返回参数结构体
 */
export interface DescribeHTTPSListenersResponse {
    /**
      * 监听器数量
      */
    TotalCount: number;
    /**
      * HTTPS监听器列表
      */
    ListenerSet: Array<HTTPSListener>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ModifyProxiesProject请求参数结构体
 */
export interface ModifyProxiesProjectRequest {
    /**
      * 需要修改到的项目ID。
      */
    ProjectId: number;
    /**
      * （旧参数，请切换到ProxyIds）一个或多个待操作的通道ID。
      */
    InstanceIds?: Array<string>;
    /**
      * 用于保证请求幂等性的字符串。该字符串由客户生成，需保证不同请求之间唯一，最大值不超过64个ASCII字符。若不指定该参数，则无法保证请求的幂等性。
更多详细信息请参阅：如何保证幂等性。
      */
    ClientToken?: string;
    /**
      * （新参数）一个或多个待操作的通道ID。
      */
    ProxyIds?: Array<string>;
}
/**
 * 域名的定制错误响应配置
 */
export interface DomainErrorPageInfo {
    /**
      * 错误定制响应的配置ID
      */
    ErrorPageId: string;
    /**
      * 监听器ID
      */
    ListenerId: string;
    /**
      * 域名
      */
    Domain: string;
    /**
      * 原始错误码
      */
    ErrorNos: Array<number>;
    /**
      * 新的错误码
注意：此字段可能返回 null，表示取不到有效值。
      */
    NewErrorNo: number;
    /**
      * 需要清理的响应头
注意：此字段可能返回 null，表示取不到有效值。
      */
    ClearHeaders: Array<string>;
    /**
      * 需要设置的响应头
注意：此字段可能返回 null，表示取不到有效值。
      */
    SetHeaders: Array<HttpHeaderParam>;
    /**
      * 设置的响应体(不包括 HTTP头)
注意：此字段可能返回 null，表示取不到有效值。
      */
    Body: string;
    /**
      * 规则状态,0为成功
注意：此字段可能返回 null，表示取不到有效值。
      */
    Status: number;
}
/**
 * 通道组加速地域列表，包括加速地域，以及该加速地域对应的带宽和并发配置。
 */
export interface AccessConfiguration {
    /**
      * 加速地域。
      */
    AccessRegion: string;
    /**
      * 通道带宽上限，单位：Mbps。
      */
    Bandwidth: number;
    /**
      * 通道并发量上限，表示同时在线的连接数，单位：万。
      */
    Concurrent: number;
    /**
      * 网络类型，可取值：normal、cn2，默认值为normal
      */
    NetworkType?: string;
}
/**
 * DescribeCertificateDetail请求参数结构体
 */
export interface DescribeCertificateDetailRequest {
    /**
      * 证书ID。
      */
    CertificateId: string;
}
/**
 * 标签对应资源信息
 */
export interface TagResourceInfo {
    /**
      * 资源类型，其中：
Proxy表示通道，
ProxyGroup表示通道组，
RealServer表示源站
      */
    ResourceType: string;
    /**
      * 资源ID
      */
    ResourceId: string;
}
/**
 * SetAuthentication返回参数结构体
 */
export interface SetAuthenticationResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeProxyGroupStatistics返回参数结构体
 */
export interface DescribeProxyGroupStatisticsResponse {
    /**
      * 通道组统计数据
      */
    StatisticsData: Array<MetricStatisticsInfo>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeResourcesByTag返回参数结构体
 */
export interface DescribeResourcesByTagResponse {
    /**
      * 资源总数
      */
    TotalCount: number;
    /**
      * 标签对应的资源列表
      */
    ResourceSet: Array<TagResourceInfo>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ModifyGroupDomainConfig请求参数结构体
 */
export interface ModifyGroupDomainConfigRequest {
    /**
      * 通道组ID。
      */
    GroupId: string;
    /**
      * 域名解析默认访问IP或域名。
      */
    DefaultDnsIp: string;
    /**
      * 就近接入区域配置。
      */
    AccessRegionList?: Array<AccessRegionDomainConf>;
}
/**
 * 带宽梯度价格
 */
export interface BandwidthPriceGradient {
    /**
      * 带宽范围。
      */
    BandwidthRange: Array<number>;
    /**
      * 在对应带宽范围内的单宽单价，单位：元/Mbps/天。
      */
    BandwidthUnitPrice: number;
    /**
      * 带宽折扣价，单位：元/Mbps/天。
      */
    DiscountBandwidthUnitPrice: number;
}
/**
 * DescribeHTTPListeners请求参数结构体
 */
export interface DescribeHTTPListenersRequest {
    /**
      * 通道ID
      */
    ProxyId?: string;
    /**
      * 过滤条件，按照监听器ID进行精确查询
      */
    ListenerId?: string;
    /**
      * 过滤条件，按照监听器名称进行精确查询
      */
    ListenerName?: string;
    /**
      * 过滤条件，按照监听器端口进行精确查询
      */
    Port?: number;
    /**
      * 偏移量，默认为0
      */
    Offset?: number;
    /**
      * 限制数量，默认为20个
      */
    Limit?: number;
    /**
      * 过滤条件，支持按照端口或监听器名称进行模糊查询，该参数不能与ListenerName和Port同时使用
      */
    SearchValue?: string;
    /**
      * 通道组ID
      */
    GroupId?: string;
}
/**
 * DescribeCustomHeader返回参数结构体
 */
export interface DescribeCustomHeaderResponse {
    /**
      * 规则id
注意：此字段可能返回 null，表示取不到有效值。
      */
    RuleId: string;
    /**
      * 自定义header列表
注意：此字段可能返回 null，表示取不到有效值。
      */
    Headers: Array<HttpHeaderParam>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ModifyRealServerName返回参数结构体
 */
export interface ModifyRealServerNameResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeGroupDomainConfig返回参数结构体
 */
export interface DescribeGroupDomainConfigResponse {
    /**
      * 域名解析就近接入配置列表。
      */
    AccessRegionList: Array<DomainAccessRegionDict>;
    /**
      * 默认访问Ip。
      */
    DefaultDnsIp: string;
    /**
      * 通道组ID。
      */
    GroupId: string;
    /**
      * 接入地域的配置的总数。
      */
    AccessRegionCount: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ModifyCertificate返回参数结构体
 */
export interface ModifyCertificateResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * OpenSecurityPolicy请求参数结构体
 */
export interface OpenSecurityPolicyRequest {
    /**
      * 需开启安全策略的通道ID
      */
    ProxyId?: string;
    /**
      * 安全策略ID
      */
    PolicyId?: string;
}
/**
 * DeleteDomainErrorPageInfo请求参数结构体
 */
export interface DeleteDomainErrorPageInfoRequest {
    /**
      * 定制错误响应页的唯一ID，请参考CreateDomainErrorPageInfo的响应
      */
    ErrorPageId: string;
}
/**
 * DescribeListenerRealServers请求参数结构体
 */
export interface DescribeListenerRealServersRequest {
    /**
      * 监听器ID
      */
    ListenerId: string;
}
/**
 * DescribeProxyGroupStatistics请求参数结构体
 */
export interface DescribeProxyGroupStatisticsRequest {
    /**
      * 通道组ID
      */
    GroupId: string;
    /**
      * 起始时间
      */
    StartTime: string;
    /**
      * 结束时间
      */
    EndTime: string;
    /**
      * 统计指标名称列表，支持: 入带宽:InBandwidth, 出带宽:OutBandwidth, 并发:Concurrent, 入包量:InPackets, 出包量:OutPackets
      */
    MetricNames: Array<string>;
    /**
      * 监控粒度，目前支持60，300，3600，86400，单位：秒。
当时间范围不超过1天，支持最小粒度60秒；
当时间范围不超过7天，支持最小粒度3600秒；
当时间范围不超过30天，支持最小粒度86400秒。
      */
    Granularity: number;
}
/**
 * DescribeHTTPSListeners请求参数结构体
 */
export interface DescribeHTTPSListenersRequest {
    /**
      * 过滤条件，通道ID
      */
    ProxyId?: string;
    /**
      * 过滤条件，根据监听器ID进行精确查询。
      */
    ListenerId?: string;
    /**
      * 过滤条件，根据监听器名称进行精确查询。
      */
    ListenerName?: string;
    /**
      * 过滤条件，根据监听器端口进行精确查询。
      */
    Port?: number;
    /**
      * 偏移量， 默认为0
      */
    Offset?: number;
    /**
      * 限制数量，默认为20
      */
    Limit?: number;
    /**
      * 过滤条件，支持按照端口或监听器名称进行模糊查询
      */
    SearchValue?: string;
    /**
      * 过滤条件，通道组ID
      */
    GroupId?: string;
    /**
      * 支持Http3的开关，其中：
0，表示不需要支持Http3接入；
1，表示需要支持Http3接入。
注意：如果支持了Http3的功能，那么该监听器会占用对应的UDP接入端口，不可再创建相同端口的UDP监听器。
该功能的启停无法在监听器创建完毕后再修改。
      */
    Http3Supported?: number;
}
/**
 * DescribeAccessRegionsByDestRegion返回参数结构体
 */
export interface DescribeAccessRegionsByDestRegionResponse {
    /**
      * 可用加速区域数量
      */
    TotalCount: number;
    /**
      * 可用加速区域信息列表
      */
    AccessRegionSet: Array<AccessRegionDetial>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeCountryAreaMapping请求参数结构体
 */
export declare type DescribeCountryAreaMappingRequest = null;
/**
 * CheckProxyCreate返回参数结构体
 */
export interface CheckProxyCreateResponse {
    /**
      * 查询能否创建给定配置的通道，1可以创建，0不可创建。
      */
    CheckFlag: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ModifyCertificate请求参数结构体
 */
export interface ModifyCertificateRequest {
    /**
      * 监听器实例ID
      */
    ListenerId: string;
    /**
      * 需要修改证书的域名
      */
    Domain: string;
    /**
      * 新的服务器证书ID。其中：
当CertificateId=default时，表示使用监听器的证书。
      */
    CertificateId: string;
    /**
      * 新的客户端证书ID。其中：
当ClientCertificateId=default时，表示使用监听器的证书。
仅当采用双向认证方式时，需要设置该参数或者PolyClientCertificateIds。
      */
    ClientCertificateId?: string;
    /**
      * 新的多客户端证书ID列表。其中：
仅当采用双向认证方式时，需要设置该参数或ClientCertificateId参数。
      */
    PolyClientCertificateIds?: Array<string>;
}
/**
 * DestroyProxies请求参数结构体
 */
export interface DestroyProxiesRequest {
    /**
      * 强制删除标识。
1，强制删除该通道列表，无论是否已经绑定了源站；
0，如果已绑定了源站，则无法删除。
删除多通道时，如果该标识为0，只有所有的通道都没有绑定源站，才允许删除。
      */
    Force: number;
    /**
      * （旧参数，请切换到ProxyIds）通道实例ID列表。
      */
    InstanceIds?: Array<string>;
    /**
      * 用于保证请求幂等性的字符串。该字符串由客户生成，需保证不同请求之间唯一，最大值不超过64个ASCII字符。若不指定该参数，则无法保证请求的幂等性。
更多详细信息请参阅：如何保证幂等性。
      */
    ClientToken?: string;
    /**
      * （新参数）通道实例ID列表。
      */
    ProxyIds?: Array<string>;
}
/**
 * DescribeRules返回参数结构体
 */
export interface DescribeRulesResponse {
    /**
      * 按照域名分类的规则信息列表
      */
    DomainRuleSet: Array<DomainRuleSet>;
    /**
      * 该监听器下的域名总数
      */
    TotalCount: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeProxies返回参数结构体
 */
export interface DescribeProxiesResponse {
    /**
      * 通道个数。
      */
    TotalCount: number;
    /**
      * （旧参数，请切换到ProxySet）通道实例信息列表。
      */
    InstanceSet: Array<ProxyInfo>;
    /**
      * （新参数）通道实例信息列表。
      */
    ProxySet: Array<ProxyInfo>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CreateRule返回参数结构体
 */
export interface CreateRuleResponse {
    /**
      * 创建转发规则成功返回规则ID
      */
    RuleId: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ModifyRealServerName请求参数结构体
 */
export interface ModifyRealServerNameRequest {
    /**
      * 源站名称
      */
    RealServerName: string;
    /**
      * 源站ID
      */
    RealServerId: string;
}
/**
 * ModifyGroupDomainConfig返回参数结构体
 */
export interface ModifyGroupDomainConfigResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DeleteProxyGroup返回参数结构体
 */
export interface DeleteProxyGroupResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CreateDomainErrorPageInfo返回参数结构体
 */
export interface CreateDomainErrorPageInfoResponse {
    /**
      * 错误定制响应的配置ID
      */
    ErrorPageId: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * BindListenerRealServers请求参数结构体
 */
export interface BindListenerRealServersRequest {
    /**
      * 监听器ID
      */
    ListenerId: string;
    /**
      * 待绑定源站列表。如果该监听器的源站调度策略是加权轮询，需要填写源站权重 RealServerWeight, 不填或者其他调度类型默认源站权重为1。
      */
    RealServerBindSet?: Array<RealServerBindSetReq>;
}
/**
 * ModifyProxyConfiguration请求参数结构体
 */
export interface ModifyProxyConfigurationRequest {
    /**
      * （旧参数，请切换到ProxyId）通道的实例ID。
      */
    InstanceId?: string;
    /**
      * 需要调整到的目标带宽，单位：Mbps。
Bandwidth与Concurrent必须至少设置一个。取值范围根据DescribeAccessRegionsByDestRegion接口获取得到
      */
    Bandwidth?: number;
    /**
      * 需要调整到的目标并发值，单位：万。
Bandwidth与Concurrent必须至少设置一个。取值范围根据DescribeAccessRegionsByDestRegion接口获取得到
      */
    Concurrent?: number;
    /**
      * 用于保证请求幂等性的字符串。该字符串由客户生成，需保证不同请求之间唯一，最大值不超过64个ASCII字符。若不指定该参数，则无法保证请求的幂等性。
更多详细信息请参阅：如何保证幂等性。
      */
    ClientToken?: string;
    /**
      * （新参数）通道的实例ID。
      */
    ProxyId?: string;
    /**
      * 计费方式 (0:按带宽计费，1:按流量计费 默认按带宽计费）
      */
    BillingType?: number;
}
/**
 * DescribeRuleRealServers请求参数结构体
 */
export interface DescribeRuleRealServersRequest {
    /**
      * 转发规则ID
      */
    RuleId: string;
    /**
      * 偏移量，默认为0。
      */
    Offset?: number;
    /**
      * 返回数量，默认为20，最大值为1000。
      */
    Limit?: number;
}
/**
 * DescribeGroupDomainConfig请求参数结构体
 */
export interface DescribeGroupDomainConfigRequest {
    /**
      * 通道组ID。
      */
    GroupId: string;
}
/**
 * CreateProxyGroupDomain请求参数结构体
 */
export interface CreateProxyGroupDomainRequest {
    /**
      * 需要开启域名的通道组ID。
      */
    GroupId: string;
}
/**
 * CreateTCPListeners请求参数结构体
 */
export interface CreateTCPListenersRequest {
    /**
      * 监听器名称。
      */
    ListenerName: string;
    /**
      * 监听器端口列表。
      */
    Ports: Array<number>;
    /**
      * 监听器源站调度策略，支持轮询（rr），加权轮询（wrr），最小连接数（lc）。
      */
    Scheduler: string;
    /**
      * 源站是否开启健康检查：1开启，0关闭，UDP监听器不支持健康检查
      */
    HealthCheck: number;
    /**
      * 监听器对应源站类型，支持IP或者DOMAIN类型。DOMAIN源站类型不支持wrr的源站调度策略。
      */
    RealServerType: string;
    /**
      * 通道ID，ProxyId和GroupId必须设置一个，但不能同时设置。
      */
    ProxyId?: string;
    /**
      * 通道组ID，ProxyId和GroupId必须设置一个，但不能同时设置。
      */
    GroupId?: string;
    /**
      * 源站健康检查时间间隔，单位：秒。时间间隔取值在[5，300]之间。
      */
    DelayLoop?: number;
    /**
      * 源站健康检查响应超时时间，单位：秒。超时时间取值在[2，60]之间。超时时间应小于健康检查时间间隔DelayLoop。
      */
    ConnectTimeout?: number;
    /**
      * 源站端口列表，该参数仅支持v1版本监听器和通道组监听器。
      */
    RealServerPorts?: Array<number>;
    /**
      * 监听器获取客户端 IP 的方式，0表示 TOA, 1表示Proxy Protocol
      */
    ClientIPMethod?: number;
    /**
      * 源站是否开启主备模式：1开启，0关闭，DOMAIN类型源站不支持开启
      */
    FailoverSwitch?: number;
    /**
      * 健康阈值，表示连续检查成功多少次后认定源站健康。范围为1到10
      */
    HealthyThreshold?: number;
    /**
      * 不健康阈值，表示连续检查失败多少次数后认为源站不健康。范围为1到10
      */
    UnhealthyThreshold?: number;
}
/**
 * 证书详情，包括证书ID， 证书名字，证书类型，证书内容以及密钥内容。
 */
export interface CertificateDetail {
    /**
      * 证书ID。
      */
    CertificateId: string;
    /**
      * 证书类型。
      */
    CertificateType: number;
    /**
      * 证书名字。
注意：此字段可能返回 null，表示取不到有效值。
      */
    CertificateAlias: string;
    /**
      * 证书内容。
      */
    CertificateContent: string;
    /**
      * 密钥内容。仅当证书类型为SSL证书时，返回该字段。
注意：此字段可能返回 null，表示取不到有效值。
      */
    CertificateKey: string;
    /**
      * 创建时间，采用Unix时间戳的方式，表示从1970年1月1日（UTC/GMT的午夜）开始所经过的秒数。
注意：此字段可能返回 null，表示取不到有效值。
      */
    CreateTime: number;
    /**
      * 证书生效起始时间，采用Unix时间戳的方式，表示从1970年1月1日（UTC/GMT的午夜）开始所经过的秒数。
注意：此字段可能返回 null，表示取不到有效值。
      */
    BeginTime: number;
    /**
      * 证书过期时间，采用Unix时间戳的方式，表示从1970年1月1日（UTC/GMT的午夜）开始所经过的秒数。
注意：此字段可能返回 null，表示取不到有效值。
      */
    EndTime: number;
    /**
      * 证书签发者通用名称。
注意：此字段可能返回 null，表示取不到有效值。
      */
    IssuerCN: string;
    /**
      * 证书主题通用名称。
注意：此字段可能返回 null，表示取不到有效值。
      */
    SubjectCN: string;
}
/**
 * DescribeListenerStatistics返回参数结构体
 */
export interface DescribeListenerStatisticsResponse {
    /**
      * 通道组统计数据
      */
    StatisticsData: Array<MetricStatisticsInfo>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeProxyGroupDetails请求参数结构体
 */
export interface DescribeProxyGroupDetailsRequest {
    /**
      * 通道组ID。
      */
    GroupId: string;
}
/**
 * CloseProxies请求参数结构体
 */
export interface CloseProxiesRequest {
    /**
      * （旧参数，请切换到ProxyIds）通道的实例ID。
      */
    InstanceIds?: Array<string>;
    /**
      * 用于保证请求幂等性的字符串。该字符串由客户生成，需保证不同请求之间唯一，最大值不超过64个ASCII字符。若不指定该参数，则无法保证请求的幂等性。
更多详细信息请参阅：如何保证幂等性。
      */
    ClientToken?: string;
    /**
      * （新参数）通道的实例ID。
      */
    ProxyIds?: Array<string>;
}
/**
 * DescribeListenerRealServers返回参数结构体
 */
export interface DescribeListenerRealServersResponse {
    /**
      * 可绑定源站的个数
      */
    TotalCount: number;
    /**
      * 源站信息列表
      */
    RealServerSet: Array<RealServer>;
    /**
      * 已绑定源站的个数
      */
    BindRealServerTotalCount: number;
    /**
      * 已绑定源站信息列表
      */
    BindRealServerSet: Array<BindRealServer>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeProxyDetail请求参数结构体
 */
export interface DescribeProxyDetailRequest {
    /**
      * 需查询的通道ID。
      */
    ProxyId: string;
}
/**
 * ip信息详情
 */
export interface IPDetail {
    /**
      * IP字符串
      */
    IP: string;
    /**
      * 供应商，BGP表示默认，CMCC表示中国移动，CUCC表示中国联通，CTCC表示中国电信
      */
    Provider: string;
    /**
      * 带宽
      */
    Bandwidth: number;
}
/**
 * 通道状态信息
 */
export interface ProxyStatus {
    /**
      * 通道实例ID。
      */
    InstanceId: string;
    /**
      * 通道状态。
其中：
RUNNING表示运行中；
CREATING表示创建中；
DESTROYING表示销毁中；
OPENING表示开启中；
CLOSING表示关闭中；
CLOSED表示已关闭；
ADJUSTING表示配置变更中；
ISOLATING表示隔离中；
ISOLATED表示已隔离。
      */
    Status: string;
}
/**
 * DeleteDomain请求参数结构体
 */
export interface DeleteDomainRequest {
    /**
      * 监听器ID
      */
    ListenerId: string;
    /**
      * 需要删除的域名
      */
    Domain: string;
    /**
      * 是否强制删除已绑定源站的转发规则，0非强制，1强制。
当采用非强制删除时，如果域名下已有规则绑定了源站，则无法删除。
      */
    Force: number;
}
/**
 * OpenSecurityPolicy返回参数结构体
 */
export interface OpenSecurityPolicyResponse {
    /**
      * 异步流程ID，可以通过DescribeAsyncTaskStatus接口查询流程运行状态
      */
    TaskId: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ModifyCertificateAttributes返回参数结构体
 */
export interface ModifyCertificateAttributesResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeSecurityPolicyDetail返回参数结构体
 */
export interface DescribeSecurityPolicyDetailResponse {
    /**
      * 通道ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    ProxyId: string;
    /**
      * 安全策略状态：
BOUND，已开启安全策略
UNBIND，已关闭安全策略
BINDING，安全策略开启中
UNBINDING，安全策略关闭中。
      */
    Status: string;
    /**
      * 默认策略：ACCEPT或DROP。
      */
    DefaultAction: string;
    /**
      * 策略ID
      */
    PolicyId: string;
    /**
      * 规则列表
      */
    RuleList: Array<SecurityPolicyRuleOut>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CreateHTTPListener返回参数结构体
 */
export interface CreateHTTPListenerResponse {
    /**
      * 创建的监听器ID
      */
    ListenerId: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ModifyUDPListenerAttribute返回参数结构体
 */
export interface ModifyUDPListenerAttributeResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CreateProxyGroup请求参数结构体
 */
export interface CreateProxyGroupRequest {
    /**
      * 通道组所属项目ID
      */
    ProjectId: number;
    /**
      * 通道组别名
      */
    GroupName: string;
    /**
      * 源站地域，参考接口DescribeDestRegions 返回参数RegionDetail中的RegionId
      */
    RealServerRegion: string;
    /**
      * 标签列表
      */
    TagSet?: Array<TagPair>;
    /**
      * 加速地域列表，包括加速地域名，及该地域对应的带宽和并发配置。
      */
    AccessRegionSet?: Array<AccessConfiguration>;
    /**
      * IP版本，可取值：IPv4、IPv6，默认值IPv4
      */
    IPAddressVersion?: string;
    /**
      * 通道组套餐类型，可取值：Thunder、Accelerator，默认值Thunder
      */
    PackageType?: string;
    /**
      * 支持Http3的开关，其中：
0，表示不需要支持Http3接入；
1，表示需要支持Http3接入。
注意：如果开启了Http3的功能，那么该通道组就不再支持TCP/UDP接入的功能。
该功能的启停无法在通道组创建完毕后再修改。
      */
    Http3Supported?: number;
}
/**
 * 7层监听器转发规则信息
 */
export interface RuleInfo {
    /**
      * 规则信息
      */
    RuleId: string;
    /**
      * 监听器信息
      */
    ListenerId: string;
    /**
      * 规则域名
      */
    Domain: string;
    /**
      * 规则路径
      */
    Path: string;
    /**
      * 源站类型
      */
    RealServerType: string;
    /**
      * 转发源站策略
      */
    Scheduler: string;
    /**
      * 是否开启健康检查标志，1表示开启，0表示关闭
      */
    HealthCheck: number;
    /**
      * 规则状态，0表示运行中，1表示创建中，2表示销毁中，3表示绑定解绑源站中，4表示配置更新中
      */
    RuleStatus: number;
    /**
      * 健康检查相关参数
      */
    CheckParams: RuleCheckParams;
    /**
      * 已绑定的源站相关信息
      */
    RealServerSet: Array<BindRealServer>;
    /**
      * 源站的服务状态，0表示异常，1表示正常。
未开启健康检查时，该状态始终未正常。
只要有一个源站健康状态为异常时，该状态为异常，具体源站的状态请查看RealServerSet。
      */
    BindStatus: number;
    /**
      * 通道转发到源站的请求所携带的host，其中default表示直接转发接收到的host。
注意：此字段可能返回 null，表示取不到有效值。
      */
    ForwardHost: string;
    /**
      * 服务器名称指示（ServerNameIndication，简称SNI）开关。ON表示开启，OFF表示关闭。
注意：此字段可能返回 null，表示取不到有效值。
注意：此字段可能返回 null，表示取不到有效值。
      */
    ServerNameIndicationSwitch: string;
    /**
      * 服务器名称指示（ServerNameIndication，简称SNI），当SNI开关打开时，该字段必填。
注意：此字段可能返回 null，表示取不到有效值。
注意：此字段可能返回 null，表示取不到有效值。
      */
    ServerNameIndication: string;
}
/**
 * 源站绑定信息查询，BindStatus， 0: 未被绑定 1：被规则或者监听器绑定
 */
export interface RealServerStatus {
    /**
      * 源站ID。
      */
    RealServerId: string;
    /**
      * 0表示未被绑定 1表示被规则或者监听器绑定。
      */
    BindStatus: number;
    /**
      * 绑定此源站的通道ID，没有绑定时为空字符串。
      */
    ProxyId: string;
    /**
      * 绑定此源站的通道组ID，没有绑定时为空字符串。
注意：此字段可能返回 null，表示取不到有效值。
      */
    GroupId: string;
}
/**
 * DescribeTCPListeners返回参数结构体
 */
export interface DescribeTCPListenersResponse {
    /**
      * 满足条件的监听器总个数
      */
    TotalCount: number;
    /**
      * TCP监听器列表
      */
    ListenerSet: Array<TCPListener>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeRules请求参数结构体
 */
export interface DescribeRulesRequest {
    /**
      * 7层监听器Id。
      */
    ListenerId: string;
}
/**
 * DescribeCountryAreaMapping返回参数结构体
 */
export interface DescribeCountryAreaMappingResponse {
    /**
      * 国家地区编码映射表。
      */
    CountryAreaMappingList: Array<CountryAreaMap>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeRealServers返回参数结构体
 */
export interface DescribeRealServersResponse {
    /**
      * 源站信息列表
      */
    RealServerSet: Array<BindRealServerInfo>;
    /**
      * 查询得到的源站数量
      */
    TotalCount: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ModifyHTTPListenerAttribute返回参数结构体
 */
export interface ModifyHTTPListenerAttributeResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeRealServerStatistics请求参数结构体
 */
export interface DescribeRealServerStatisticsRequest {
    /**
      * 源站ID
      */
    RealServerId: string;
    /**
      * 监听器ID
      */
    ListenerId?: string;
    /**
      * L7层规则ID
      */
    RuleId?: string;
    /**
      * 统计时长，单位：小时。仅支持最近1,3,6,12,24小时的统计查询
      */
    WithinTime?: number;
    /**
      * 统计开始时间(2020-08-19 00:00:00)
      */
    StartTime?: string;
    /**
      * 统计结束时间(2020-08-19 23:59:59)
      */
    EndTime?: string;
    /**
      * 统计的数据粒度，单位：秒，仅支持1分钟-60和5分钟-300粒度
      */
    Granularity?: number;
}
/**
 * 添加源站的源站信息返回值
 */
export interface BindRealServerInfo {
    /**
      * 源站的IP或域名
      */
    RealServerIP: string;
    /**
      * 源站ID
      */
    RealServerId: string;
    /**
      * 源站名称
      */
    RealServerName: string;
    /**
      * 项目ID
      */
    ProjectId: number;
    /**
      * 标签列表
注意：此字段可能返回 null，表示取不到有效值。
      */
    TagSet: Array<TagPair>;
}
/**
 * DescribeProxyAndStatisticsListeners请求参数结构体
 */
export interface DescribeProxyAndStatisticsListenersRequest {
    /**
      * 项目ID
      */
    ProjectId: number;
}
/**
 * DescribeAccessRegions返回参数结构体
 */
export interface DescribeAccessRegionsResponse {
    /**
      * 加速区域总数
      */
    TotalCount: number;
    /**
      * 加速区域详情列表
      */
    AccessRegionSet: Array<RegionDetail>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DeleteListeners请求参数结构体
 */
export interface DeleteListenersRequest {
    /**
      * 待删除的监听器ID列表
      */
    ListenerIds: Array<string>;
    /**
      * 已绑定源站的监听器是否允许强制删除，1：允许， 0：不允许
      */
    Force: number;
    /**
      * 通道组ID，该参数和GroupId必须设置一个，但不能同时设置。
      */
    GroupId?: string;
    /**
      * 通道ID，该参数和GroupId必须设置一个，但不能同时设置。
      */
    ProxyId?: string;
}
/**
 * DescribeSecurityRules请求参数结构体
 */
export interface DescribeSecurityRulesRequest {
    /**
      * 安全规则ID列表。总数不能超过20个。
      */
    SecurityRuleIds: Array<string>;
}
/**
 * DescribeDestRegions返回参数结构体
 */
export interface DescribeDestRegionsResponse {
    /**
      * 源站区域总数
      */
    TotalCount: number;
    /**
      * 源站区域详情列表
      */
    DestRegionSet: Array<RegionDetail>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeDomainErrorPageInfoByIds返回参数结构体
 */
export interface DescribeDomainErrorPageInfoByIdsResponse {
    /**
      * 定制错误响应配置集
注意：此字段可能返回 null，表示取不到有效值。
      */
    ErrorPageSet: Array<DomainErrorPageInfo>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeProxies请求参数结构体
 */
export interface DescribeProxiesRequest {
    /**
      * （旧参数，请切换到ProxyIds）按照一个或者多个实例ID查询。每次请求的实例的上限为100。参数不支持同时指定InstanceIds和Filters。
      */
    InstanceIds?: Array<string>;
    /**
      * 偏移量，默认为0。
      */
    Offset?: number;
    /**
      * 返回数量，默认为20，最大值为100。
      */
    Limit?: number;
    /**
      * 过滤条件。
每次请求的Filters的上限为10，Filter.Values的上限为5。参数不支持同时指定InstanceIds和Filters。
ProjectId - String - 是否必填：否 -（过滤条件）按照项目ID过滤。
AccessRegion - String - 是否必填：否 - （过滤条件）按照接入地域过滤。
RealServerRegion - String - 是否必填：否 - （过滤条件）按照源站地域过滤。
GroupId - String - 是否必填：否 - （过滤条件）按照通道组ID过滤。
IPAddressVersion - String - 是否必填：否 - （过滤条件）按照IP版本过滤。
PackageType - String - 是否必填：否 - （过滤条件）按照通道套餐类型过滤。
      */
    Filters?: Array<Filter>;
    /**
      * （新参数，替代InstanceIds）按照一个或者多个实例ID查询。每次请求的实例的上限为100。参数不支持同时指定InstanceIds和Filters。
      */
    ProxyIds?: Array<string>;
    /**
      * 标签列表，当存在该字段时，拉取对应标签下的资源列表。
最多支持5个标签，当存在两个或两个以上的标签时，满足其中任意一个标签时，通道会被拉取出来。
      */
    TagSet?: Array<TagPair>;
    /**
      * 当该字段为1时，仅拉取非通道组的通道，
当该字段为0时，仅拉取通道组的通道，
不存在该字段时，拉取所有通道，包括独立通道和通道组通道。
      */
    Independent?: number;
    /**
      * 输出通道列表的排列顺序。取值范围：
asc：升序排列；
desc：降序排列。
默认为降序。
      */
    Order?: string;
    /**
      * 通道列表排序的依据字段。取值范围：
create_time：依据通道的创建时间排序；
proxy_id：依据通道的ID排序；
bandwidth：依据通道带宽上限排序；
concurrent_connections：依据通道并发排序；
默认按通道创建时间排序。
      */
    OrderField?: string;
}
/**
 * BindListenerRealServers返回参数结构体
 */
export interface BindListenerRealServersResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ModifyProxyGroupAttribute返回参数结构体
 */
export interface ModifyProxyGroupAttributeResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 内部接口使用，返回可以查询统计数据的监听器信息
 */
export interface ListenerInfo {
    /**
      * 监听器ID
      */
    ListenerId: string;
    /**
      * 监听器名称
      */
    ListenerName: string;
    /**
      * 监听器监听端口
      */
    Port: number;
    /**
      * 监听器协议类型
      */
    Protocol: string;
}
/**
 * DescribeUDPListeners返回参数结构体
 */
export interface DescribeUDPListenersResponse {
    /**
      * 监听器个数
      */
    TotalCount: number;
    /**
      * UDP监听器列表
      */
    ListenerSet: Array<UDPListener>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CreateUDPListeners请求参数结构体
 */
export interface CreateUDPListenersRequest {
    /**
      * 监听器名称
      */
    ListenerName: string;
    /**
      * 监听器端口列表
      */
    Ports: Array<number>;
    /**
      * 监听器源站调度策略，支持轮询（rr），加权轮询（wrr），最小连接数（lc）
      */
    Scheduler: string;
    /**
      * 监听器对应源站类型，支持IP或者DOMAIN类型
      */
    RealServerType: string;
    /**
      * 通道ID，ProxyId和GroupId必须设置一个，但不能同时设置。
      */
    ProxyId?: string;
    /**
      * 通道组ID，ProxyId和GroupId必须设置一个，但不能同时设置。
      */
    GroupId?: string;
    /**
      * 源站端口列表，该参数仅支持v1版本监听器和通道组监听器
      */
    RealServerPorts?: Array<number>;
}
/**
 * ModifyRuleAttribute请求参数结构体
 */
export interface ModifyRuleAttributeRequest {
    /**
      * 监听器ID
      */
    ListenerId: string;
    /**
      * 转发规则ID
      */
    RuleId: string;
    /**
      * 调度策略，其中：
rr，轮询；
wrr，加权轮询；
lc，最小连接数。
      */
    Scheduler?: string;
    /**
      * 源站健康检查开关，其中：
1，开启；
0，关闭。
      */
    HealthCheck?: number;
    /**
      * 健康检查配置参数
      */
    CheckParams?: RuleCheckParams;
    /**
      * 转发规则路径
      */
    Path?: string;
    /**
      * 加速通道转发到源站的协议类型，支持：default, HTTP和HTTPS。
当ForwardProtocol=default时，表示使用对应监听器的ForwardProtocol。
      */
    ForwardProtocol?: string;
    /**
      * 回源Host。加速通道转发到源站的请求中携带的host。
当ForwardHost=default时，使用规则的域名，其他情况为该字段所设置的值。
      */
    ForwardHost?: string;
    /**
      * 服务器名称指示（ServerNameIndication，简称SNI）开关。ON表示开启，OFF表示关闭。
      */
    ServerNameIndicationSwitch?: string;
    /**
      * 服务器名称指示（ServerNameIndication，简称SNI），当SNI开关打开时，该字段必填。
      */
    ServerNameIndication?: string;
}
/**
 * CreateSecurityPolicy返回参数结构体
 */
export interface CreateSecurityPolicyResponse {
    /**
      * 安全策略ID
      */
    PolicyId: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * TCP类型监听器信息
 */
export interface TCPListener {
    /**
      * 监听器ID
      */
    ListenerId: string;
    /**
      * 监听器名称
      */
    ListenerName: string;
    /**
      * 监听器端口
      */
    Port: number;
    /**
      * 监听器转发源站端口，仅对版本为1.0的通道有效
注意：此字段可能返回 null，表示取不到有效值。
      */
    RealServerPort: number;
    /**
      * 监听器绑定源站类型
      */
    RealServerType: string;
    /**
      * 监听器协议， TCP
      */
    Protocol: string;
    /**
      * 监听器状态，其中：
0表示运行中；
1表示创建中；
2表示销毁中；
3表示源站调整中；
4表示配置变更中。
      */
    ListenerStatus: number;
    /**
      * 监听器源站访问策略，其中：
rr表示轮询；
wrr表示加权轮询；
lc表示最小连接数。
      */
    Scheduler: string;
    /**
      * 源站健康检查响应超时时间，单位：秒
      */
    ConnectTimeout: number;
    /**
      * 源站健康检查时间间隔，单位：秒
      */
    DelayLoop: number;
    /**
      * 监听器是否开启健康检查，其中：
0表示关闭；
1表示开启
      */
    HealthCheck: number;
    /**
      * 监听器绑定的源站状态， 其中：
0表示异常；
1表示正常。
      */
    BindStatus: number;
    /**
      * 监听器绑定的源站信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    RealServerSet: Array<BindRealServer>;
    /**
      * 监听器创建时间，Unix时间戳
      */
    CreateTime: number;
    /**
      * 监听器获取客户端 IP 的方式，0表示TOA, 1表示Proxy Protocol
注意：此字段可能返回 null，表示取不到有效值。
      */
    ClientIPMethod: number;
    /**
      * 健康阈值，表示连续检查成功多少次后认定源站健康。范围为1到10
注意：此字段可能返回 null，表示取不到有效值。
      */
    HealthyThreshold: number;
    /**
      * 不健康阈值，表示连续检查失败多少次数后认为源站不健康。范围为1到10
注意：此字段可能返回 null，表示取不到有效值。
      */
    UnhealthyThreshold: number;
    /**
      * 源站是否开启主备模式：1开启，0关闭，DOMAIN类型源站不支持开启
注意：此字段可能返回 null，表示取不到有效值。
      */
    FailoverSwitch: number;
    /**
      * 是否开启会话保持选项：0关闭， 非0开启，非0值为会话保持时间
注意：此字段可能返回 null，表示取不到有效值。
      */
    SessionPersist: number;
}
/**
 * CreateSecurityRules返回参数结构体
 */
export interface CreateSecurityRulesResponse {
    /**
      * 规则ID列表
      */
    RuleIdList: Array<string>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeAccessRegions请求参数结构体
 */
export declare type DescribeAccessRegionsRequest = null;
/**
 * CreateCertificate请求参数结构体
 */
export interface CreateCertificateRequest {
    /**
      * 证书类型。其中：
0，表示基础认证配置；
1，表示客户端CA证书；
2，服务器SSL证书；
3，表示源站CA证书；
4，表示通道SSL证书。
      */
    CertificateType: number;
    /**
      * 证书内容。采用url编码。其中：
当证书类型为基础认证配置时，该参数填写用户名/密码对。格式：“用户名：密码”，例如：root:FSGdT。其中密码使用htpasswd或者openssl，例如：openssl passwd -crypt 123456。
当证书类型为CA/SSL证书时，该参数填写证书内容，格式为pem。
      */
    CertificateContent: string;
    /**
      * 证书名称
      */
    CertificateAlias?: string;
    /**
      * 密钥内容。采用url编码。仅当证书类型为SSL证书时，需要填写该参数。格式为pem。
      */
    CertificateKey?: string;
}
/**
 * DescribeCertificates返回参数结构体
 */
export interface DescribeCertificatesResponse {
    /**
      * 服务器证书列表，包括证书ID 和证书名称。
      */
    CertificateSet: Array<Certificate>;
    /**
      * 满足查询条件的服务器证书总数量。
      */
    TotalCount: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeCustomHeader请求参数结构体
 */
export declare type DescribeCustomHeaderRequest = null;
/**
 * DescribeProxyGroupList返回参数结构体
 */
export interface DescribeProxyGroupListResponse {
    /**
      * 通道组总数。
      */
    TotalCount: number;
    /**
      * 通道组列表。
注意：此字段可能返回 null，表示取不到有效值。
      */
    ProxyGroupList: Array<ProxyGroupInfo>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeDomainErrorPageInfo请求参数结构体
 */
export interface DescribeDomainErrorPageInfoRequest {
    /**
      * 监听器ID
      */
    ListenerId: string;
    /**
      * 域名
      */
    Domain: string;
}
/**
 * HTTPS类型监听器信息
 */
export interface HTTPSListener {
    /**
      * 监听器ID
      */
    ListenerId: string;
    /**
      * 监听器名称
      */
    ListenerName: string;
    /**
      * 监听器端口
      */
    Port: number;
    /**
      * 监听器协议， HTTP表示HTTP，HTTPS表示HTTPS，此结构取值HTTPS
      */
    Protocol: string;
    /**
      * 监听器状态，其中：
0表示运行中；
1表示创建中；
2表示销毁中；
3表示源站调整中；
4表示配置变更中。
      */
    ListenerStatus: number;
    /**
      * 监听器服务器SSL证书ID
      */
    CertificateId: string;
    /**
      * 监听器后端转发源站协议
      */
    ForwardProtocol: string;
    /**
      * 监听器创建时间，Unix时间戳
      */
    CreateTime: number;
    /**
      * 服务器SSL证书的别名
注意：此字段可能返回 null，表示取不到有效值。
      */
    CertificateAlias: string;
    /**
      * 监听器客户端CA证书ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    ClientCertificateId: string;
    /**
      * 监听器认证方式。其中，
0表示单向认证；
1表示双向认证。
注意：此字段可能返回 null，表示取不到有效值。
      */
    AuthType: number;
    /**
      * 客户端CA证书别名
注意：此字段可能返回 null，表示取不到有效值。
      */
    ClientCertificateAlias: string;
    /**
      * 多客户端CA证书别名信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    PolyClientCertificateAliasInfo: Array<CertificateAliasInfo>;
}
/**
 * 域名解析就近访问配置详情
 */
export interface DomainAccessRegionDict {
    /**
      * 就近接入区域
      */
    NationCountryInnerList: Array<NationCountryInnerInfo>;
    /**
      * 加速区域通道列表
      */
    ProxyList: Array<ProxyIdDict>;
    /**
      * 加速区域ID
      */
    RegionId: string;
    /**
      * 加速区域内部编码
      */
    GeographicalZoneInnerCode: string;
    /**
      * 加速区域所属大洲内部编码
      */
    ContinentInnerCode: string;
    /**
      * 加速区域别名
      */
    RegionName: string;
}
/**
 * CloseSecurityPolicy请求参数结构体
 */
export interface CloseSecurityPolicyRequest {
    /**
      * 通道ID
      */
    ProxyId?: string;
    /**
      * 安全组策略ID
      */
    PolicyId?: string;
}
/**
 * ModifyCertificateAttributes请求参数结构体
 */
export interface ModifyCertificateAttributesRequest {
    /**
      * 证书ID。
      */
    CertificateId: string;
    /**
      * 证书名字。长度不超过50个字符。
      */
    CertificateAlias?: string;
}
/**
 * 标签键值对
 */
export interface TagPair {
    /**
      * 标签键
      */
    TagKey: string;
    /**
      * 标签值
      */
    TagValue: string;
}
/**
 * CreateSecurityRules请求参数结构体
 */
export interface CreateSecurityRulesRequest {
    /**
      * 安全策略ID
      */
    PolicyId: string;
    /**
      * 访问规则列表
      */
    RuleList: Array<SecurityPolicyRuleIn>;
}
/**
 * DescribeCertificates请求参数结构体
 */
export interface DescribeCertificatesRequest {
    /**
      * 证书类型。其中：
0，表示基础认证配置；
1，表示客户端CA证书；
2，表示服务器SSL证书；
3，表示源站CA证书；
4，表示通道SSL证书。
-1，所有类型。
默认为-1。
      */
    CertificateType?: number;
    /**
      * 偏移量，默认为0。
      */
    Offset?: number;
    /**
      * 限制数量，默认为20。
      */
    Limit?: number;
}
/**
 * DescribeProxiesStatus请求参数结构体
 */
export interface DescribeProxiesStatusRequest {
    /**
      * （旧参数，请切换到ProxyIds）通道ID列表。
      */
    InstanceIds?: Array<string>;
    /**
      * （新参数）通道ID列表。
      */
    ProxyIds?: Array<string>;
}
/**
 * ModifyTCPListenerAttribute请求参数结构体
 */
export interface ModifyTCPListenerAttributeRequest {
    /**
      * 监听器ID
      */
    ListenerId: string;
    /**
      * 通道组ID，ProxyId和GroupId必须设置一个，但不能同时设置。
      */
    GroupId?: string;
    /**
      * 通道ID，ProxyId和GroupId必须设置一个，但不能同时设置。
      */
    ProxyId?: string;
    /**
      * 监听器名称
      */
    ListenerName?: string;
    /**
      * 监听器源站调度策略，支持轮询（rr），加权轮询（wrr），最小连接数（lc）。
      */
    Scheduler?: string;
    /**
      * 源站健康检查时间间隔，单位：秒。时间间隔取值在[5，300]之间。
      */
    DelayLoop?: number;
    /**
      * 源站健康检查响应超时时间，单位：秒。超时时间取值在[2，60]之间。超时时间应小于健康检查时间间隔DelayLoop。
      */
    ConnectTimeout?: number;
    /**
      * 是否开启健康检查，1开启，0关闭。
      */
    HealthCheck?: number;
    /**
      * 源站是否开启主备模式：1开启，0关闭，DOMAIN类型源站不支持开启
      */
    FailoverSwitch?: number;
    /**
      * 健康阈值，表示连续检查成功多少次数后认定源站健康。范围为1到10
      */
    HealthyThreshold?: number;
    /**
      * 不健康阈值，表示连续检查失败次数后认定源站不健康。范围为1到10
      */
    UnhealthyThreshold?: number;
}
/**
 * DeleteSecurityPolicy返回参数结构体
 */
export interface DeleteSecurityPolicyResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CreateDomain返回参数结构体
 */
export interface CreateDomainResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ModifyProxiesProject返回参数结构体
 */
export interface ModifyProxiesProjectResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ModifyDomain请求参数结构体
 */
export interface ModifyDomainRequest {
    /**
      * 7层监听器ID
      */
    ListenerId: string;
    /**
      * 修改前的域名信息
      */
    OldDomain: string;
    /**
      * 修改后的域名信息
      */
    NewDomain: string;
    /**
      * 服务器SSL证书ID，仅适用于version3.0的通道。其中：
不带该字段时，表示使用原证书；
携带该字段时并且CertificateId=default，表示使用监听器证书；
其他情况，使用该CertificateId指定的证书。
      */
    CertificateId?: string;
    /**
      * 客户端CA证书ID，仅适用于version3.0的通道。其中：
不带该字段和PolyClientCertificateIds时，表示使用原证书；
携带该字段时并且ClientCertificateId=default，表示使用监听器证书；
其他情况，使用该ClientCertificateId或PolyClientCertificateIds指定的证书。
      */
    ClientCertificateId?: string;
    /**
      * 客户端CA证书ID，仅适用于version3.0的通道。其中：
不带该字段和ClientCertificateId时，表示使用原证书；
携带该字段时并且ClientCertificateId=default，表示使用监听器证书；
其他情况，使用该ClientCertificateId或PolyClientCertificateIds指定的证书。
      */
    PolyClientCertificateIds?: Array<string>;
}
/**
 * ModifySecurityRule请求参数结构体
 */
export interface ModifySecurityRuleRequest {
    /**
      * 规则ID
      */
    RuleId: string;
    /**
      * 规则名：不得超过30个字符，超过部分会被截断。
      */
    AliasName: string;
    /**
      * 安全策略ID
      */
    PolicyId: string;
    /**
      * 安全规则动作
      */
    RuleAction?: string;
    /**
      * 规则关联地址，格式需要满足CIDR网络地址规范
      */
    SourceCidr?: string;
    /**
      * 协议类型
      */
    Protocol?: string;
    /**
      * 端口范围，支持以下格式
单个端口: 80
多个端口: 80,443
连续端口: 3306-20000
所有端口: ALL
      */
    DestPortRange?: string;
}
/**
 * CreateCustomHeader返回参数结构体
 */
export interface CreateCustomHeaderResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeAccessRegionsByDestRegion请求参数结构体
 */
export interface DescribeAccessRegionsByDestRegionRequest {
    /**
      * 源站区域：接口DescribeDestRegions返回DestRegionSet中的RegionId字段值
      */
    DestRegion: string;
    /**
      * IP版本，可取值：IPv4、IPv6，默认值IPv4
      */
    IPAddressVersion?: string;
    /**
      * 通道套餐类型，Thunder表示标准通道组，Accelerator表示游戏加速器通道，CrossBorder表示跨境通道。
      */
    PackageType?: string;
}
/**
 * 查询监听器或者规则相关的源站信息，不包括tag信息
 */
export interface RealServer {
    /**
      * 源站的IP或域名
      */
    RealServerIP: string;
    /**
      * 源站ID
      */
    RealServerId: string;
    /**
      * 源站名称
      */
    RealServerName: string;
    /**
      * 项目ID
      */
    ProjectId: number;
    /**
      * 是否在封禁黑名单中，其中：0表示不在黑名单中，1表示在黑名单中。
      */
    InBanBlacklist: number;
}
/**
 * DescribeRealServers请求参数结构体
 */
export interface DescribeRealServersRequest {
    /**
      * 查询源站的所属项目ID，-1表示所有项目
      */
    ProjectId: number;
    /**
      * 需要查询的源站IP或域名，支持模糊匹配
      */
    SearchValue?: string;
    /**
      * 偏移量，默认值是0
      */
    Offset?: number;
    /**
      * 返回数量，默认为20个，最大值为50个
      */
    Limit?: number;
    /**
      * 标签列表，当存在该字段时，拉取对应标签下的资源列表。
最多支持5个标签，当存在两个或两个以上的标签时，满足其中任意一个标签时，源站会被拉取出来。
      */
    TagSet?: Array<TagPair>;
    /**
      * 过滤条件。filter的name取值(RealServerName,RealServerIP)
      */
    Filters?: Array<Filter>;
}
/**
 * 统计数据信息
 */
export interface StatisticsDataInfo {
    /**
      * 对应的时间点
      */
    Time: number;
    /**
      * 统计数据值
注意：此字段可能返回 null，表示取不到有效值。
      */
    Data: number;
}
/**
 * CreateCustomHeader请求参数结构体
 */
export interface CreateCustomHeaderRequest {
    /**
      * 规则id
      */
    RuleId: string;
    /**
      * 新增的header名称和内容列表， ‘’$remote_addr‘’会被解析替换成客户端ip，其他值原样透传到源站。
      */
    Headers?: Array<HttpHeaderParam>;
}
/**
 * 通道组详情列表
 */
export interface ProxyGroupInfo {
    /**
      * 通道组id
      */
    GroupId: string;
    /**
      * 通道组域名
注意：此字段可能返回 null，表示取不到有效值。
      */
    Domain: string;
    /**
      * 通道组名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    GroupName: string;
    /**
      * 项目ID
      */
    ProjectId: number;
    /**
      * 目标地域
      */
    RealServerRegionInfo: RegionDetail;
    /**
      * 通道组状态。
其中，
RUNNING表示运行中；
CREATING表示创建中；
DESTROYING表示销毁中；
MOVING表示通道迁移中。
      */
    Status: string;
    /**
      * 标签列表。
      */
    TagSet: Array<TagPair>;
    /**
      * 通道组版本
注意：此字段可能返回 null，表示取不到有效值。
      */
    Version: string;
    /**
      * 创建时间
注意：此字段可能返回 null，表示取不到有效值。
      */
    CreateTime: number;
    /**
      * 通道组是否包含微软通道
注意：此字段可能返回 null，表示取不到有效值。
      */
    ProxyType: number;
    /**
      * 支持Http3特性的标识，其中：
0，表示不支持Http3；
1，表示支持Http3。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Http3Supported: number;
}
/**
 * CreateProxyGroupDomain返回参数结构体
 */
export interface CreateProxyGroupDomainResponse {
    /**
      * 通道组ID。
      */
    GroupId: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 服务器证书
 */
export interface Certificate {
    /**
      * 证书ID
      */
    CertificateId: string;
    /**
      * 证书名称（旧参数，请使用CertificateAlias）。
      */
    CertificateName: string;
    /**
      * 证书类型。
      */
    CertificateType: number;
    /**
      * 证书名称。
注意：此字段可能返回 null，表示取不到有效值。
      */
    CertificateAlias: string;
    /**
      * 证书创建时间，采用Unix时间戳的方式，表示从1970年1月1日（UTC/GMT的午夜）开始所经过的秒数。
      */
    CreateTime: number;
    /**
      * 证书生效起始时间，采用Unix时间戳的方式，表示从1970年1月1日（UTC/GMT的午夜）开始所经过的秒数。
注意：此字段可能返回 null，表示取不到有效值。
      */
    BeginTime: number;
    /**
      * 证书过期时间，采用Unix时间戳的方式，表示从1970年1月1日（UTC/GMT的午夜）开始所经过的秒数。
注意：此字段可能返回 null，表示取不到有效值。
      */
    EndTime: number;
    /**
      * 证书签发者通用名称。
注意：此字段可能返回 null，表示取不到有效值。
      */
    IssuerCN: string;
    /**
      * 证书主题通用名称。
注意：此字段可能返回 null，表示取不到有效值。
      */
    SubjectCN: string;
}
/**
 * DescribeDomainErrorPageInfo返回参数结构体
 */
export interface DescribeDomainErrorPageInfoResponse {
    /**
      * 定制错误响应配置集
注意：此字段可能返回 null，表示取不到有效值。
      */
    ErrorPageSet: Array<DomainErrorPageInfo>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DestroyProxies返回参数结构体
 */
export interface DestroyProxiesResponse {
    /**
      * 处于不可销毁状态下的通道实例ID列表。
      */
    InvalidStatusInstanceSet: Array<string>;
    /**
      * 销毁操作失败的通道实例ID列表。
      */
    OperationFailedInstanceSet: Array<string>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeRuleRealServers返回参数结构体
 */
export interface DescribeRuleRealServersResponse {
    /**
      * 可绑定的源站个数
      */
    TotalCount: number;
    /**
      * 可绑定的源站信息列表
      */
    RealServerSet: Array<RealServer>;
    /**
      * 已绑定的源站个数
      */
    BindRealServerTotalCount: number;
    /**
      * 已绑定的源站信息列表
      */
    BindRealServerSet: Array<BindRealServer>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeRealServersStatus请求参数结构体
 */
export interface DescribeRealServersStatusRequest {
    /**
      * 源站ID列表
      */
    RealServerIds: Array<string>;
}
/**
 * ModifyHTTPListenerAttribute请求参数结构体
 */
export interface ModifyHTTPListenerAttributeRequest {
    /**
      * 需要修改的监听器ID
      */
    ListenerId: string;
    /**
      * 新的监听器名称
      */
    ListenerName: string;
    /**
      * 通道ID
      */
    ProxyId?: string;
}
/**
 * CreateProxy请求参数结构体
 */
export interface CreateProxyRequest {
    /**
      * 通道的项目ID。
      */
    ProjectId: number;
    /**
      * 通道名称。
      */
    ProxyName: string;
    /**
      * 接入地域。
      */
    AccessRegion: string;
    /**
      * 通道带宽上限，单位：Mbps。
      */
    Bandwidth: number;
    /**
      * 通道并发量上限，表示同时在线的连接数，单位：万。
      */
    Concurrent: number;
    /**
      * 源站地域。当GroupId存在时，源站地域为通道组的源站地域,此时可不填该字段。当GroupId不存在时，需要填写该字段
      */
    RealServerRegion?: string;
    /**
      * 用于保证请求幂等性的字符串。该字符串由客户生成，需保证不同请求之间唯一，最大值不超过64个ASCII字符。若不指定该参数，则无法保证请求的幂等性。
更多详细信息请参阅：如何保证幂等性。
      */
    ClientToken?: string;
    /**
      * 通道所在的通道组ID，当在通道组中创建通道时必带，否则忽略该字段。
      */
    GroupId?: string;
    /**
      * 通道需要添加的标签列表。
      */
    TagSet?: Array<TagPair>;
    /**
      * 被复制的通道ID。只有处于运行中状态的通道可以被复制。
当设置该参数时，表示复制该通道。
      */
    ClonedProxyId?: string;
    /**
      * 计费方式 (0:按带宽计费，1:按流量计费 默认按带宽计费）
      */
    BillingType?: number;
    /**
      * IP版本，可取值：IPv4、IPv6，默认值IPv4
      */
    IPAddressVersion?: string;
    /**
      * 网络类型，normal表示常规BGP，cn2表示精品BGP，triple表示三网
      */
    NetworkType?: string;
    /**
      * 通道套餐类型，Thunder表示标准通道组，Accelerator表示游戏加速器通道，CrossBorder表示跨境通道。
      */
    PackageType?: string;
    /**
      * 支持Http3的开关，其中：0，表示不需要支持Http3接入；1，表示需要支持Http3接入。注意：如果开启了Http3的功能，那么该通道就不再支持TCP/UDP接入的功能。该功能的启停无法在通道创建完毕后再修改。
      */
    Http3Supported?: number;
}
/**
 * DeleteCertificate请求参数结构体
 */
export interface DeleteCertificateRequest {
    /**
      * 需要删除的证书ID。
      */
    CertificateId: string;
}
/**
 * ModifySecurityRule返回参数结构体
 */
export interface ModifySecurityRuleResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeProxiesStatus返回参数结构体
 */
export interface DescribeProxiesStatusResponse {
    /**
      * 通道状态列表。
      */
    InstanceStatusSet: Array<ProxyStatus>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * RemoveRealServers请求参数结构体
 */
export interface RemoveRealServersRequest {
    /**
      * 源站Id列表
      */
    RealServerIds: Array<string>;
}
/**
 * CreateDomain请求参数结构体
 */
export interface CreateDomainRequest {
    /**
      * 监听器ID。
      */
    ListenerId: string;
    /**
      * 需要创建的域名，一个监听器下最大支持100个域名。
      */
    Domain: string;
    /**
      * 服务器证书，用于客户端与GAAP的HTTPS的交互。
      */
    CertificateId?: string;
    /**
      * 客户端CA证书，用于客户端与GAAP的HTTPS的交互。
仅当采用双向认证的方式时，需要设置该字段或PolyClientCertificateIds字段。
      */
    ClientCertificateId?: string;
    /**
      * 客户端CA证书，用于客户端与GAAP的HTTPS的交互。
仅当采用双向认证的方式时，需要设置该字段或ClientCertificateId字段。
      */
    PolyClientCertificateIds?: Array<string>;
    /**
      * 是否开启Http3特性的标识，其中：
0，表示不开启Http3；
1，表示开启Http3。
默认不开启Http3。可以通过SetDomainHttp3开启。
      */
    Http3Supported?: number;
}
/**
 * CreateRule请求参数结构体
 */
export interface CreateRuleRequest {
    /**
      * 7层监听器ID
      */
    ListenerId: string;
    /**
      * 转发规则的域名
      */
    Domain: string;
    /**
      * 转发规则的路径
      */
    Path: string;
    /**
      * 转发规则对应源站的类型，支持IP和DOMAIN类型。
      */
    RealServerType: string;
    /**
      * 规则转发源站调度策略，支持轮询（rr），加权轮询（wrr），最小连接数（lc）。
      */
    Scheduler: string;
    /**
      * 规则是否开启健康检查，1开启，0关闭。
      */
    HealthCheck: number;
    /**
      * 源站健康检查相关参数
      */
    CheckParams?: RuleCheckParams;
    /**
      * 加速通道转发到源站的协议类型：支持HTTP或HTTPS。
不传递该字段时表示使用对应监听器的ForwardProtocol。
      */
    ForwardProtocol?: string;
    /**
      * 回源Host。加速通道转发到源站的host，不设置该参数时，使用默认的host设置，即客户端发起的http请求的host。
      */
    ForwardHost?: string;
    /**
      * 服务器名称指示（ServerNameIndication，简称SNI）开关。ON表示开启，OFF表示关闭。
      */
    ServerNameIndicationSwitch?: string;
    /**
      * 服务器名称指示（ServerNameIndication，简称SNI），当SNI开关打开时，该字段必填。
      */
    ServerNameIndication?: string;
}
/**
 * 内部接口使用，返回可以查询统计数据的通道和对应的监听器信息
 */
export interface ProxySimpleInfo {
    /**
      * 通道ID
      */
    ProxyId: string;
    /**
      * 通道名称
      */
    ProxyName: string;
    /**
      * 监听器列表
      */
    ListenerList: Array<ListenerInfo>;
}
/**
 * DeleteSecurityPolicy请求参数结构体
 */
export interface DeleteSecurityPolicyRequest {
    /**
      * 策略ID
      */
    PolicyId: string;
}
/**
 * HTTP类型监听器信息
 */
export interface HTTPListener {
    /**
      * 监听器ID
      */
    ListenerId: string;
    /**
      * 监听器名称
      */
    ListenerName: string;
    /**
      * 监听器端口
      */
    Port: number;
    /**
      * 监听器创建时间，Unix时间戳
      */
    CreateTime: number;
    /**
      * 监听器协议， HTTP表示HTTP，HTTPS表示HTTPS，此结构取值HTTP
      */
    Protocol: string;
    /**
      * 监听器状态，其中：
0表示运行中；
1表示创建中；
2表示销毁中；
3表示源站调整中；
4表示配置变更中。
      */
    ListenerStatus: number;
}
/**
 * 通道组详情信息
 */
export interface ProxyGroupDetail {
    /**
      * 创建时间
      */
    CreateTime: number;
    /**
      * 项目ID
      */
    ProjectId: number;
    /**
      * 通道组中通道数量
      */
    ProxyNum: number;
    /**
      * 通道组状态：
0表示正常运行；
1表示创建中；
4表示销毁中；
11表示迁移中；
      */
    Status: number;
    /**
      * 归属Uin
      */
    OwnerUin: string;
    /**
      * 创建Uin
      */
    CreateUin: string;
    /**
      * 通道名称
      */
    GroupName: string;
    /**
      * 通道组域名解析默认IP
      */
    DnsDefaultIp: string;
    /**
      * 通道组域名
注意：此字段可能返回 null，表示取不到有效值。
      */
    Domain: string;
    /**
      * 目标地域
      */
    RealServerRegionInfo: RegionDetail;
    /**
      * 是否老通道组，2018-08-03之前创建的通道组为老通道组
      */
    IsOldGroup: boolean;
    /**
      * 通道组ID
      */
    GroupId: string;
    /**
      * 标签列表
注意：此字段可能返回 null，表示取不到有效值。
      */
    TagSet: Array<TagPair>;
    /**
      * 安全策略ID，当设置了安全策略时，存在该字段。
注意：此字段可能返回 null，表示取不到有效值。
      */
    PolicyId: string;
    /**
      * 通道组版本
注意：此字段可能返回 null，表示取不到有效值。
      */
    Version: string;
    /**
      * 通道获取客户端IP的方式，0表示TOA，1表示Proxy Protocol
注意：此字段可能返回 null，表示取不到有效值。
      */
    ClientIPMethod: Array<number>;
    /**
      * IP版本，可取值：IPv4、IPv6，默认值IPv4
注意：此字段可能返回 null，表示取不到有效值。
      */
    IPAddressVersion: string;
    /**
      * 通道组套餐类型：Thunder表示标准通道组，Accelerator表示银牌加速通道组，CrossBorder表示跨境通道组。
注意：此字段可能返回 null，表示取不到有效值。
      */
    PackageType: string;
    /**
      * 支持Http3特性的标识，其中：
0表示关闭；
1表示启用。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Http3Supported: number;
}
/**
 * CreateHTTPListener请求参数结构体
 */
export interface CreateHTTPListenerRequest {
    /**
      * 监听器名称
      */
    ListenerName: string;
    /**
      * 监听器端口，基于同种传输层协议（TCP 或 UDP）的监听器，端口不可重复
      */
    Port: number;
    /**
      * 通道ID，与GroupId不能同时设置，对应为通道创建监听器
      */
    ProxyId?: string;
    /**
      * 通道组ID，与ProxyId不能同时设置，对应为通道组创建监听器
      */
    GroupId?: string;
}
/**
 * CloseSecurityPolicy返回参数结构体
 */
export interface CloseSecurityPolicyResponse {
    /**
      * 异步流程ID，可以通过DescribeAsyncTaskStatus 查询流程执行进展和状态
      */
    TaskId: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeRegionAndPrice返回参数结构体
 */
export interface DescribeRegionAndPriceResponse {
    /**
      * 源站区域总数
      */
    TotalCount: number;
    /**
      * 源站区域详情列表
      */
    DestRegionSet: Array<RegionDetail>;
    /**
      * 通道带宽费用梯度价格
      */
    BandwidthUnitPrice: Array<BandwidthPriceGradient>;
    /**
      * 带宽价格货币类型：
CNY 人民币
USD 美元
      */
    Currency: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * AddRealServers返回参数结构体
 */
export interface AddRealServersResponse {
    /**
      * 源站信息列表
      */
    RealServerSet: Array<NewRealServer>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CloseProxies返回参数结构体
 */
export interface CloseProxiesResponse {
    /**
      * 非运行状态下的通道实例ID列表，不可开启。
      */
    InvalidStatusInstanceSet: Array<string>;
    /**
      * 开启操作失败的通道实例ID列表。
      */
    OperationFailedInstanceSet: Array<string>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DeleteCertificate返回参数结构体
 */
export interface DeleteCertificateResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 安全策略规则（入参）
 */
export interface SecurityPolicyRuleIn {
    /**
      * 请求来源IP或IP段。
      */
    SourceCidr: string;
    /**
      * 策略：允许（ACCEPT）或拒绝（DROP）
      */
    Action: string;
    /**
      * 规则别名
      */
    AliasName?: string;
    /**
      * 协议：TCP或UDP，ALL表示所有协议
      */
    Protocol?: string;
    /**
      * 目标端口，填写格式举例：
单个端口: 80
多个端口: 80,443
连续端口: 3306-20000
所有端口: ALL
      */
    DestPortRange?: string;
}
/**
 * DescribeBlackHeader返回参数结构体
 */
export interface DescribeBlackHeaderResponse {
    /**
      * 禁用的自定义header列表
注意：此字段可能返回 null，表示取不到有效值。
      */
    BlackHeaders: Array<string>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeDestRegions请求参数结构体
 */
export declare type DescribeDestRegionsRequest = null;
/**
 * ModifyRuleAttribute返回参数结构体
 */
export interface ModifyRuleAttributeResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CreateTCPListeners返回参数结构体
 */
export interface CreateTCPListenersResponse {
    /**
      * 返回监听器ID
      */
    ListenerIds: Array<string>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeSecurityPolicyDetail请求参数结构体
 */
export interface DescribeSecurityPolicyDetailRequest {
    /**
      * 安全策略ID
      */
    PolicyId: string;
}
/**
 * ModifyDomain返回参数结构体
 */
export interface ModifyDomainResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeRulesByRuleIds返回参数结构体
 */
export interface DescribeRulesByRuleIdsResponse {
    /**
      * 返回的规则总个数。
      */
    TotalCount: number;
    /**
      * 返回的规则列表。
      */
    RuleSet: Array<RuleInfo>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * SetAuthentication请求参数结构体
 */
export interface SetAuthenticationRequest {
    /**
      * 监听器ID。
      */
    ListenerId: string;
    /**
      * 需要进行高级配置的域名，该域名为监听器下的转发规则的域名。
      */
    Domain: string;
    /**
      * 基础认证开关，其中：
0，关闭基础认证；
1，开启基础认证。
默认为0。
      */
    BasicAuth?: number;
    /**
      * 通道认证开关，用于源站对Gaap的认证，其中：
0，关闭通道认证；
1，开启通道认证。
默认为0。
      */
    GaapAuth?: number;
    /**
      * 源站认证开关，用于Gaap对服务器的认证，其中：
0，关闭源站认证；
1，开启源站认证。
默认为0。
      */
    RealServerAuth?: number;
    /**
      * 基础认证配置ID，从证书管理页获取。
      */
    BasicAuthConfId?: string;
    /**
      * 通道SSL证书ID，从证书管理页获取。
      */
    GaapCertificateId?: string;
    /**
      * 源站CA证书ID，从证书管理页获取。源站认证时，填写该参数或RealServerCertificateId参数
      */
    RealServerCertificateId?: string;
    /**
      * 该字段已废弃，请使用创建规则和修改规则中的SNI功能。
      */
    RealServerCertificateDomain?: string;
    /**
      * 多源站CA证书ID，从证书管理页获取。源站认证时，填写该参数或RealServerCertificateId参数
      */
    PolyRealServerCertificateIds?: Array<string>;
}
/**
 * InquiryPriceCreateProxy返回参数结构体
 */
export interface InquiryPriceCreateProxyResponse {
    /**
      * 通道基础费用价格，单位：元/天。
      */
    ProxyDailyPrice: number;
    /**
      * 通道带宽费用梯度价格。
注意：此字段可能返回 null，表示取不到有效值。
      */
    BandwidthUnitPrice: Array<BandwidthPriceGradient>;
    /**
      * 通道基础费用折扣价格，单位：元/天。
      */
    DiscountProxyDailyPrice: number;
    /**
      * 价格使用的货币，支持人民币，美元等。
      */
    Currency: string;
    /**
      * 通道的流量费用价格，单位: 元/GB
注意：此字段可能返回 null，表示取不到有效值。
      */
    FlowUnitPrice: number;
    /**
      * 通道的流量费用折扣价格，单位:元/GB
注意：此字段可能返回 null，表示取不到有效值。
      */
    DiscountFlowUnitPrice: number;
    /**
      * 精品BGP的带宽费用价格，单位: 元/Mbps/天
注意：此字段可能返回 null，表示取不到有效值。
      */
    Cn2BandwidthPrice: number;
    /**
      * 精品BGP的折后带宽费用价格，单位: 元/Mbps/天
注意：此字段可能返回 null，表示取不到有效值。
      */
    Cn2BandwidthPriceWithDiscount: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 新添加源站信息
 */
export interface NewRealServer {
    /**
      * 源站ID
      */
    RealServerId: string;
    /**
      * 源站ip或域名
      */
    RealServerIP: string;
}
/**
 * DescribeHTTPListeners返回参数结构体
 */
export interface DescribeHTTPListenersResponse {
    /**
      * 监听器数量
      */
    TotalCount: number;
    /**
      * HTTP监听器列表
      */
    ListenerSet: Array<HTTPListener>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 描述HTTP的包头参数
 */
export interface HttpHeaderParam {
    /**
      * HTTP头名
      */
    HeaderName: string;
    /**
      * HTTP头值
      */
    HeaderValue: string;
}
/**
 * DescribeRealServerStatistics返回参数结构体
 */
export interface DescribeRealServerStatisticsResponse {
    /**
      * 指定监听器的源站状态统计数据
      */
    StatisticsData: Array<StatisticsDataInfo>;
    /**
      * 多个源站状态统计数据
      */
    RsStatisticsData: Array<MetricStatisticsInfo>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 域名就近接入配置
 */
export interface AccessRegionDomainConf {
    /**
      * 地域ID。
      */
    RegionId: string;
    /**
      * 就近接入区域国家内部编码，编码列表可通过DescribeCountryAreaMapping接口获取。
      */
    NationCountryInnerList?: Array<string>;
}
/**
 * DeleteDomain返回参数结构体
 */
export interface DeleteDomainResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DeleteListeners返回参数结构体
 */
export interface DeleteListenersResponse {
    /**
      * 删除操作失败的监听器ID列表
      */
    OperationFailedListenerSet: Array<string>;
    /**
      * 删除操作成功的监听器ID列表
      */
    OperationSucceedListenerSet: Array<string>;
    /**
      * 无效的监听器ID列表，如：监听器不存在，监听器对应实例不匹配
      */
    InvalidStatusListenerSet: Array<string>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 7层监听器转发规则健康检查相关参数
 */
export interface RuleCheckParams {
    /**
      * 健康检查的时间间隔
      */
    DelayLoop: number;
    /**
      * 健康检查的响应超时时间
      */
    ConnectTimeout: number;
    /**
      * 健康检查的检查路径
      */
    Path: string;
    /**
      * 健康检查的方法，GET/HEAD
      */
    Method: string;
    /**
      * 确认源站正常的返回码，可选范围[100, 200, 300, 400, 500]
      */
    StatusCode: Array<number>;
    /**
      * 健康检查的检查域名。
当调用ModifyRuleAttribute时，不支持修改该参数。
      */
    Domain?: string;
    /**
      * 源站服务失败统计频率
注意：此字段可能返回 null，表示取不到有效值。
      */
    FailedCountInter?: number;
    /**
      * 源站健康性检查阀值，超过该阀值会屏蔽服务
注意：此字段可能返回 null，表示取不到有效值。
      */
    FailedThreshold?: number;
    /**
      * 源站健康性检测超出阀值后，屏蔽的时间
注意：此字段可能返回 null，表示取不到有效值。
      */
    BlockInter?: number;
}
/**
 * CreateSecurityPolicy请求参数结构体
 */
export interface CreateSecurityPolicyRequest {
    /**
      * 默认策略：ACCEPT或DROP
      */
    DefaultAction: string;
    /**
      * 加速通道ID
      */
    ProxyId?: string;
    /**
      * 通道组ID
      */
    GroupId?: string;
}
/**
 * ModifyHTTPSListenerAttribute返回参数结构体
 */
export interface ModifyHTTPSListenerAttributeResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 根据源站查询的可用加速区域信息及对应的可选带宽和并发量。
 */
export interface AccessRegionDetial {
    /**
      * 区域ID
      */
    RegionId: string;
    /**
      * 区域的中文或英文名称
      */
    RegionName: string;
    /**
      * 可选的并发量取值数组
      */
    ConcurrentList: Array<number>;
    /**
      * 可选的带宽取值数组
      */
    BandwidthList: Array<number>;
    /**
      * 机房所属大区
      */
    RegionArea: string;
    /**
      * 机房所属大区名
      */
    RegionAreaName: string;
    /**
      * 机房类型, dc表示DataCenter数据中心, ec表示EdgeComputing边缘节点
      */
    IDCType: string;
    /**
      * 特性位图，每个bit位代表一种特性，其中：
0，表示不支持该特性；
1，表示支持该特性。
特性位图含义如下（从右往左）：
第1个bit，支持4层加速；
第2个bit，支持7层加速；
第3个bit，支持Http3接入；
第4个bit，支持IPv6；
第5个bit，支持精品BGP接入；
第6个bit，支持三网接入；
第7个bit，支持接入段Qos加速。
注意：此字段可能返回 null，表示取不到有效值。
      */
    FeatureBitmap: number;
}
/**
 * DescribeProxyGroupList请求参数结构体
 */
export interface DescribeProxyGroupListRequest {
    /**
      * 偏移量，默认值为0。
      */
    Offset: number;
    /**
      * 返回数量，默认值为20，最大值为100。
      */
    Limit: number;
    /**
      * 项目ID。取值范围：
-1，该用户下所有项目
0，默认项目
其他值，指定的项目
      */
    ProjectId: number;
    /**
      * 过滤条件。
每次请求的Filter.Values的上限为5。
RealServerRegion - String - 是否必填：否 -（过滤条件）按照源站地域过滤，可参考DescribeDestRegions接口返回结果中的RegionId。
PackageType - String - 是否必填：否 - （过滤条件）通道组类型，Thunder表示标准通道组，Accelerator表示银牌加速通道组。
      */
    Filters?: Array<Filter>;
    /**
      * 标签列表，当存在该字段时，拉取对应标签下的资源列表。
最多支持5个标签，当存在两个或两个以上的标签时，满足其中任意一个标签时，该通道组会被拉取出来。
      */
    TagSet?: Array<TagPair>;
}
/**
 * 安全策略规则（出参）
 */
export interface SecurityPolicyRuleOut {
    /**
      * 策略：允许（ACCEPT）或拒绝（DROP）
      */
    Action: string;
    /**
      * 请求来源Ip或Ip段
      */
    SourceCidr: string;
    /**
      * 规则别名
      */
    AliasName: string;
    /**
      * 目标端口范围
注意：此字段可能返回 null，表示取不到有效值。
      */
    DestPortRange: string;
    /**
      * 规则ID
      */
    RuleId: string;
    /**
      * 要匹配的协议类型（TCP/UDP）
注意：此字段可能返回 null，表示取不到有效值。
      */
    Protocol: string;
    /**
      * 安全策略ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    PolicyId: string;
}
/**
 * 已绑定的源站信息
 */
export interface BindRealServer {
    /**
      * 源站ID
      */
    RealServerId: string;
    /**
      * 源站IP或者域名
      */
    RealServerIP: string;
    /**
      * 该源站所占权重
      */
    RealServerWeight: number;
    /**
      * 源站健康检查状态，其中：
0表示正常；
1表示异常。
未开启健康检查状态时，该状态始终为正常。
注意：此字段可能返回 null，表示取不到有效值。
      */
    RealServerStatus: number;
    /**
      * 源站的端口号
注意：此字段可能返回 null，表示取不到有效值。
      */
    RealServerPort: number;
    /**
      * 当源站为域名时，域名被解析成一个或者多个IP，该字段表示其中异常的IP列表。状态异常，但该字段为空时，表示域名解析异常。
      */
    DownIPList: Array<string>;
}
/**
 * 可以显示统计数据的通道组和对应通道信息
 */
export interface GroupStatisticsInfo {
    /**
      * 通道组ID
      */
    GroupId: string;
    /**
      * 通道组名称
      */
    GroupName: string;
    /**
      * 通道组下通道列表
      */
    ProxySet: Array<ProxySimpleInfo>;
}
/**
 * CreateProxyGroup返回参数结构体
 */
export interface CreateProxyGroupResponse {
    /**
      * 通道组ID
      */
    GroupId: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CreateHTTPSListener返回参数结构体
 */
export interface CreateHTTPSListenerResponse {
    /**
      * 创建的监听器ID
      */
    ListenerId: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DeleteRule返回参数结构体
 */
export interface DeleteRuleResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * BindRuleRealServers返回参数结构体
 */
export interface BindRuleRealServersResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeGroupAndStatisticsProxy请求参数结构体
 */
export interface DescribeGroupAndStatisticsProxyRequest {
    /**
      * 项目ID
      */
    ProjectId: number;
}
/**
 * ModifyUDPListenerAttribute请求参数结构体
 */
export interface ModifyUDPListenerAttributeRequest {
    /**
      * 监听器ID
      */
    ListenerId: string;
    /**
      * 通道组ID，ProxyId和GroupId必须设置一个，但不能同时设置。
      */
    GroupId?: string;
    /**
      * 通道ID，ProxyId和GroupId必须设置一个，但不能同时设置。
      */
    ProxyId?: string;
    /**
      * 监听器名称
      */
    ListenerName?: string;
    /**
      * 监听器源站调度策略
      */
    Scheduler?: string;
}
/**
 * DeleteSecurityRules返回参数结构体
 */
export interface DeleteSecurityRulesResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ModifyTCPListenerAttribute返回参数结构体
 */
export interface ModifyTCPListenerAttributeResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 国家地区映射关系（名称和编码）
 */
export interface CountryAreaMap {
    /**
      * 国家名称。
      */
    NationCountryName: string;
    /**
      * 国家编码。
      */
    NationCountryInnerCode: string;
    /**
      * 地区名称。
      */
    GeographicalZoneName: string;
    /**
      * 地区编码。
      */
    GeographicalZoneInnerCode: string;
    /**
      * 大洲名称。
      */
    ContinentName: string;
    /**
      * 大洲编码。
      */
    ContinentInnerCode: string;
}
/**
 * 单指标的统计数据
 */
export interface MetricStatisticsInfo {
    /**
      * 指标名称
      */
    MetricName: string;
    /**
      * 指标统计数据
      */
    MetricData: Array<StatisticsDataInfo>;
}
/**
 * DescribeProxyDetail返回参数结构体
 */
export interface DescribeProxyDetailResponse {
    /**
      * 通道详情信息。
      */
    ProxyDetail: ProxyInfo;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeGroupAndStatisticsProxy返回参数结构体
 */
export interface DescribeGroupAndStatisticsProxyResponse {
    /**
      * 可以统计的通道组信息
      */
    GroupSet: Array<GroupStatisticsInfo>;
    /**
      * 通道组数量
      */
    TotalCount: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CreateUDPListeners返回参数结构体
 */
export interface CreateUDPListenersResponse {
    /**
      * 返回监听器ID
      */
    ListenerIds: Array<string>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ModifyHTTPSListenerAttribute请求参数结构体
 */
export interface ModifyHTTPSListenerAttributeRequest {
    /**
      * 监听器ID
      */
    ListenerId: string;
    /**
      * 通道ID， 若为单通道监听器，此项必须填写
      */
    ProxyId?: string;
    /**
      * 修改后的监听器名称
      */
    ListenerName?: string;
    /**
      * 监听器后端转发与源站之间的协议类型
      */
    ForwardProtocol?: string;
    /**
      * 修改后的监听器服务器证书ID
      */
    CertificateId?: string;
    /**
      * 修改后的监听器客户端证书ID，不支持多客户端证书，多客户端证书新采用PolyClientCertificateIds字段
      */
    ClientCertificateId?: string;
    /**
      * 新字段,修改后的监听器客户端证书ID
      */
    PolyClientCertificateIds?: Array<string>;
}
/**
 * DescribeProxyStatistics请求参数结构体
 */
export interface DescribeProxyStatisticsRequest {
    /**
      * 通道ID
      */
    ProxyId: string;
    /**
      * 起始时间(2019-03-25 12:00:00)
      */
    StartTime: string;
    /**
      * 结束时间(2019-03-25 12:00:00)
      */
    EndTime: string;
    /**
      * 统计指标名称列表，支持: 入带宽:InBandwidth, 出带宽:OutBandwidth, 并发:Concurrent, 入包量:InPackets, 出包量:OutPackets, 丢包率:PacketLoss, 延迟:Latency，http请求量：HttpQPS, Https请求量：HttpsQPS
      */
    MetricNames: Array<string>;
    /**
      * 监控粒度，目前支持60，300，3600，86400，单位：秒。
当时间范围不超过3天，支持最小粒度60秒；
当时间范围不超过7天，支持最小粒度300秒；
当时间范围不超过30天，支持最小粒度3600秒。
      */
    Granularity: number;
    /**
      * 运营商（通道为三网通道时有效），支持CMCC，CUCC，CTCC，传空值或不传则合并三个运营商数据
      */
    Isp?: string;
}
/**
 * 按照域名分类的7层监听器转发规则信息
 */
export interface DomainRuleSet {
    /**
      * 转发规则域名。
      */
    Domain: string;
    /**
      * 该域名对应的转发规则列表。
      */
    RuleSet: Array<RuleInfo>;
    /**
      * 该域名对应的服务器证书ID，值为default时，表示使用默认证书（监听器配置的证书）。
注意：此字段可能返回 null，表示取不到有效值。
      */
    CertificateId: string;
    /**
      * 该域名对应服务器证书名称。
注意：此字段可能返回 null，表示取不到有效值。
      */
    CertificateAlias: string;
    /**
      * 该域名对应的客户端证书ID，值为default时，表示使用默认证书（监听器配置的证书）。
注意：此字段可能返回 null，表示取不到有效值。
      */
    ClientCertificateId: string;
    /**
      * 该域名对应客户端证书名称。
注意：此字段可能返回 null，表示取不到有效值。
      */
    ClientCertificateAlias: string;
    /**
      * 该域名对应基础认证配置ID。
注意：此字段可能返回 null，表示取不到有效值。
      */
    BasicAuthConfId: string;
    /**
      * 基础认证开关，其中：
0，表示未开启；
1，表示已开启。
注意：此字段可能返回 null，表示取不到有效值。
      */
    BasicAuth: number;
    /**
      * 该域名对应基础认证配置名称。
注意：此字段可能返回 null，表示取不到有效值。
      */
    BasicAuthConfAlias: string;
    /**
      * 该域名对应源站认证证书ID。
注意：此字段可能返回 null，表示取不到有效值。
      */
    RealServerCertificateId: string;
    /**
      * 源站认证开关，其中：
0，表示未开启；
1，表示已开启。
注意：此字段可能返回 null，表示取不到有效值。
      */
    RealServerAuth: number;
    /**
      * 该域名对应源站认证证书名称。
注意：此字段可能返回 null，表示取不到有效值。
      */
    RealServerCertificateAlias: string;
    /**
      * 该域名对应通道认证证书ID。
注意：此字段可能返回 null，表示取不到有效值。
      */
    GaapCertificateId: string;
    /**
      * 通道认证开关，其中：
0，表示未开启；
1，表示已开启。
注意：此字段可能返回 null，表示取不到有效值。
      */
    GaapAuth: number;
    /**
      * 该域名对应通道认证证书名称。
注意：此字段可能返回 null，表示取不到有效值。
      */
    GaapCertificateAlias: string;
    /**
      * 源站认证域名。
注意：此字段可能返回 null，表示取不到有效值。
      */
    RealServerCertificateDomain: string;
    /**
      * 多客户端证书时，返回多个证书的id和别名
注意：此字段可能返回 null，表示取不到有效值。
      */
    PolyClientCertificateAliasInfo: Array<CertificateAliasInfo>;
    /**
      * 多源站证书时，返回多个证书的id和别名
注意：此字段可能返回 null，表示取不到有效值。
      */
    PolyRealServerCertificateAliasInfo: Array<CertificateAliasInfo>;
    /**
      * 域名的状态。
0表示运行中，
1表示变更中，
2表示删除中。
注意：此字段可能返回 null，表示取不到有效值。
      */
    DomainStatus: number;
    /**
      * 封禁解封状态：BANNED表示已封禁，RECOVER表示已解封或未封禁，BANNING表示封禁中，RECOVERING表示解封中，BAN_FAILED表示封禁失败，RECOVER_FAILED表示解封失败。
注意：此字段可能返回 null，表示取不到有效值。
      */
    BanStatus: string;
    /**
      * Http3特性标识，其中：
0表示关闭；
1表示启用。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Http3Supported: number;
}
/**
 * DescribeTCPListeners请求参数结构体
 */
export interface DescribeTCPListenersRequest {
    /**
      * 过滤条件，根据通道ID进行拉取，ProxyId/GroupId/ListenerId必须设置一个，但ProxyId和GroupId不能同时设置。
      */
    ProxyId?: string;
    /**
      * 过滤条件，根据监听器ID精确查询。
当设置了ProxyId时，会检查该监听器是否归属于该通道。
当设置了GroupId时，会检查该监听器是否归属于该通道组。
      */
    ListenerId?: string;
    /**
      * 过滤条件，根据监听器名称精确查询
      */
    ListenerName?: string;
    /**
      * 过滤条件，根据监听器端口精确查询
      */
    Port?: number;
    /**
      * 偏移量，默认为0
      */
    Offset?: number;
    /**
      * 限制数量，默认为20
      */
    Limit?: number;
    /**
      * 过滤条件，根据通道组ID进行拉取，ProxyId/GroupId/ListenerId必须设置一个，但ProxyId和GroupId不能同时设置。
      */
    GroupId?: string;
    /**
      * 过滤条件，支持按照端口或监听器名称进行模糊查询，该参数不能与ListenerName和Port同时使用
      */
    SearchValue?: string;
}
/**
 * CreateCertificate返回参数结构体
 */
export interface CreateCertificateResponse {
    /**
      * 证书ID
      */
    CertificateId: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeBlackHeader请求参数结构体
 */
export declare type DescribeBlackHeaderRequest = null;
/**
 * DescribeProxyStatistics返回参数结构体
 */
export interface DescribeProxyStatisticsResponse {
    /**
      * 通道统计数据
      */
    StatisticsData: Array<MetricStatisticsInfo>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeRealServersStatus返回参数结构体
 */
export interface DescribeRealServersStatusResponse {
    /**
      * 返回源站查询结果的个数
      */
    TotalCount: number;
    /**
      * 源站被绑定状态列表
      */
    RealServerStatusSet: Array<RealServerStatus>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ModifyProxyGroupAttribute请求参数结构体
 */
export interface ModifyProxyGroupAttributeRequest {
    /**
      * 需要修改的通道组ID。
      */
    GroupId: string;
    /**
      * 修改后的通道组名称：不超过30个字符，超过部分会被截断。
      */
    GroupName?: string;
    /**
      * 项目ID
      */
    ProjectId?: number;
}
/**
 * CloseProxyGroup返回参数结构体
 */
export interface CloseProxyGroupResponse {
    /**
      * 非运行状态下的通道实例ID列表，不可开启。
      */
    InvalidStatusInstanceSet: Array<string>;
    /**
      * 开启操作失败的通道实例ID列表。
      */
    OperationFailedInstanceSet: Array<string>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DeleteDomainErrorPageInfo返回参数结构体
 */
export interface DeleteDomainErrorPageInfoResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ModifyProxiesAttribute返回参数结构体
 */
export interface ModifyProxiesAttributeResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeDomainErrorPageInfoByIds请求参数结构体
 */
export interface DescribeDomainErrorPageInfoByIdsRequest {
    /**
      * 定制错误ID列表,最多支持10个
      */
    ErrorPageIds: Array<string>;
}
/**
 * CheckProxyCreate请求参数结构体
 */
export interface CheckProxyCreateRequest {
    /**
      * 通道的接入(加速)区域。取值可通过接口DescribeAccessRegionsByDestRegion获取到
      */
    AccessRegion: string;
    /**
      * 通道的源站区域。取值可通过接口DescribeDestRegions获取到
      */
    RealServerRegion: string;
    /**
      * 通道带宽上限，单位：Mbps。
      */
    Bandwidth: number;
    /**
      * 通道并发量上限，表示同时在线的连接数，单位：万。
      */
    Concurrent: number;
    /**
      * 如果在通道组下创建通道，需要填写通道组的ID
      */
    GroupId?: string;
    /**
      * IP版本，可取值：IPv4、IPv6，默认值IPv4
      */
    IPAddressVersion?: string;
    /**
      * 网络类型，可取值：normal、cn2，默认值normal
      */
    NetworkType?: string;
    /**
      * 通道套餐类型。Thunder表示标准通道组，Accelerator表示游戏加速器通道，CrossBorder表示跨境通道。
      */
    PackageType?: string;
    /**
      * 支持Http3的开关，其中：0，表示不需要支持Http3接入；1，表示需要支持Http3接入。注意：如果开启了Http3的功能，那么该通道就不再支持TCP/UDP接入的功能。该功能的启停无法在通道创建完毕后再修改。
      */
    Http3Supported?: number;
}
/**
 * DescribeRegionAndPrice请求参数结构体
 */
export interface DescribeRegionAndPriceRequest {
    /**
      * IP版本，可取值：IPv4、IPv6，默认值IPv4
      */
    IPAddressVersion?: string;
    /**
      * 通道套餐类型，Thunder表示标准通道组，Accelerator表示游戏加速器通道，CrossBorder表示跨境通道。
      */
    PackageType?: string;
}
/**
 * AddRealServers请求参数结构体
 */
export interface AddRealServersRequest {
    /**
      * 源站对应的项目ID
      */
    ProjectId: number;
    /**
      * 源站对应的IP或域名
      */
    RealServerIP: Array<string>;
    /**
      * 源站名称
      */
    RealServerName: string;
    /**
      * 标签列表
      */
    TagSet?: Array<TagPair>;
}
/**
 * ModifyProxiesAttribute请求参数结构体
 */
export interface ModifyProxiesAttributeRequest {
    /**
      * （旧参数，请切换到ProxyIds）一个或多个待操作的通道ID。
      */
    InstanceIds?: Array<string>;
    /**
      * 通道名称。可任意命名，但不得超过30个字符。
      */
    ProxyName?: string;
    /**
      * 用于保证请求幂等性的字符串。该字符串由客户生成，需保证不同请求之间唯一，最大值不超过64个ASCII字符。若不指定该参数，则无法保证请求的幂等性。
更多详细信息请参阅：如何保证幂等性。
      */
    ClientToken?: string;
    /**
      * （新参数）一个或多个待操作的通道ID。
      */
    ProxyIds?: Array<string>;
}
/**
 * DescribeSecurityRules返回参数结构体
 */
export interface DescribeSecurityRulesResponse {
    /**
      * 返回的安全规则详情总数。
      */
    TotalCount: number;
    /**
      * 返回的安全规则详情列表。
      */
    SecurityRuleSet: Array<SecurityPolicyRuleOut>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 证书别名信息
 */
export interface CertificateAliasInfo {
    /**
      * 证书ID
      */
    CertificateId: string;
    /**
      * 证书别名
      */
    CertificateAlias: string;
}
/**
 * CreateHTTPSListener请求参数结构体
 */
export interface CreateHTTPSListenerRequest {
    /**
      * 监听器名称
      */
    ListenerName: string;
    /**
      * 监听器端口，基于同种传输层协议（TCP 或 UDP）的监听器，端口不可重复
      */
    Port: number;
    /**
      * 服务器证书ID
      */
    CertificateId: string;
    /**
      * 加速通道转发到源站的协议类型：HTTP | HTTPS
      */
    ForwardProtocol: string;
    /**
      * 通道ID，与GroupId之间只能设置一个。表示创建通道的监听器。
      */
    ProxyId?: string;
    /**
      * 认证类型，其中：
0，单向认证；
1，双向认证。
默认使用单向认证。
      */
    AuthType?: number;
    /**
      * 客户端CA单证书ID，仅当双向认证时设置该参数或PolyClientCertificateIds参数
      */
    ClientCertificateId?: string;
    /**
      * 新的客户端多CA证书ID，仅当双向认证时设置该参数或设置ClientCertificateId参数
      */
    PolyClientCertificateIds?: Array<string>;
    /**
      * 通道组ID，与ProxyId之间只能设置一个。表示创建通道组的监听器。
      */
    GroupId?: string;
    /**
      * 支持Http3的开关，其中：
0，表示不需要支持Http3接入；
1，表示需要支持Http3接入。
注意：如果支持了Http3的功能，那么该监听器会占用对应的UDP接入端口，不可再创建相同端口的UDP监听器。
该功能的启停无法在监听器创建完毕后再修改。
      */
    Http3Supported?: number;
}
/**
 * DeleteSecurityRules请求参数结构体
 */
export interface DeleteSecurityRulesRequest {
    /**
      * 安全策略ID
      */
    PolicyId: string;
    /**
      * 访问规则ID列表
      */
    RuleIdList: Array<string>;
}
/**
 * DescribeCertificateDetail返回参数结构体
 */
export interface DescribeCertificateDetailResponse {
    /**
      * 证书详情。
      */
    CertificateDetail: CertificateDetail;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * OpenProxyGroup返回参数结构体
 */
export interface OpenProxyGroupResponse {
    /**
      * 非关闭状态下的通道实例ID列表，不可开启。
      */
    InvalidStatusInstanceSet: Array<string>;
    /**
      * 开启操作失败的通道实例ID列表。
      */
    OperationFailedInstanceSet: Array<string>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 就近接入的国家地区详情
 */
export interface NationCountryInnerInfo {
    /**
      * 国家名
      */
    NationCountryName: string;
    /**
      * 国家内部编码
      */
    NationCountryInnerCode: string;
}
/**
 * 通道ID
 */
export interface ProxyIdDict {
    /**
      * 通道ID
      */
    ProxyId: string;
}
/**
 * 过滤条件
 */
export interface Filter {
    /**
      * 过滤条件
      */
    Name: string;
    /**
      * 过滤值
      */
    Values: Array<string>;
}
/**
 * CreateProxy返回参数结构体
 */
export interface CreateProxyResponse {
    /**
      * 通道的实例ID。
      */
    InstanceId: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * OpenProxies请求参数结构体
 */
export interface OpenProxiesRequest {
    /**
      * （旧参数，请切换到ProxyIds）通道的实例ID列表。
      */
    InstanceIds?: Array<string>;
    /**
      * 用于保证请求幂等性的字符串。该字符串由客户生成，需保证不同请求之间唯一，最大值不超过64个ASCII字符。若不指定该参数，则无法保证请求的幂等性。
更多详细信息请参阅：如何保证幂等性。
      */
    ClientToken?: string;
    /**
      * （新参数）通道的实例ID列表。
      */
    ProxyIds?: Array<string>;
}
/**
 * InquiryPriceCreateProxy请求参数结构体
 */
export interface InquiryPriceCreateProxyRequest {
    /**
      * 加速区域名称。
      */
    AccessRegion: string;
    /**
      * 通道带宽上限，单位：Mbps。
      */
    Bandwidth: number;
    /**
      * （旧参数，请切换到RealServerRegion）源站区域名称。
      */
    DestRegion?: string;
    /**
      * （旧参数，请切换到Concurrent）通道并发量上限，表示同时在线的连接数，单位：万。
      */
    Concurrency?: number;
    /**
      * （新参数）源站区域名称。
      */
    RealServerRegion?: string;
    /**
      * （新参数）通道并发量上限，表示同时在线的连接数，单位：万。
      */
    Concurrent?: number;
    /**
      * 计费方式，0表示按带宽计费，1表示按流量计费。默认按带宽计费
      */
    BillingType?: number;
    /**
      * IP版本，可取值：IPv4、IPv6，默认值IPv4
      */
    IPAddressVersion?: string;
    /**
      * 网络类型，可取值：normal、cn2，默认值normal
      */
    NetworkType?: string;
    /**
      * 通道套餐类型，Thunder表示标准通道组，Accelerator表示游戏加速器通道，CrossBorder表示跨境通道。
      */
    PackageType?: string;
    /**
      * 支持Http3的开关，其中：0，表示不需要支持Http3接入；1，表示需要支持Http3接入。注意：如果开启了Http3的功能，那么该通道就不再支持TCP/UDP接入的功能。该功能的启停无法在通道创建完毕后再修改。
      */
    Http3Supported?: number;
}
/**
 * DescribeProxyGroupDetails返回参数结构体
 */
export interface DescribeProxyGroupDetailsResponse {
    /**
      * 通道组详细信息。
      */
    ProxyGroupDetail: ProxyGroupDetail;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * OpenProxyGroup请求参数结构体
 */
export interface OpenProxyGroupRequest {
    /**
      * 通道组实例 ID
      */
    GroupId: string;
}
/**
 * UDP类型监听器信息
 */
export interface UDPListener {
    /**
      * 监听器ID
      */
    ListenerId: string;
    /**
      * 监听器名称
      */
    ListenerName: string;
    /**
      * 监听器端口
      */
    Port: number;
    /**
      * 监听器转发源站端口，仅V1版本通道或通道组监听器有效
注意：此字段可能返回 null，表示取不到有效值。
      */
    RealServerPort: number;
    /**
      * 监听器绑定源站类型
      */
    RealServerType: string;
    /**
      * 监听器协议， UDP
      */
    Protocol: string;
    /**
      * 监听器状态，其中：
0表示运行中；
1表示创建中；
2表示销毁中；
3表示源站调整中；
4表示配置变更中。
      */
    ListenerStatus: number;
    /**
      * 监听器源站访问策略
      */
    Scheduler: string;
    /**
      * 监听器绑定源站状态， 0表示正常，1表示IP异常，2表示域名解析异常
      */
    BindStatus: number;
    /**
      * 监听器绑定的源站信息
      */
    RealServerSet: Array<BindRealServer>;
    /**
      * 监听器创建时间，Unix时间戳
      */
    CreateTime: number;
    /**
      * 是否开启会话保持选项：0关闭， 非0开启，非0值为会话保持时间
注意：此字段可能返回 null，表示取不到有效值。
      */
    SessionPersist: number;
}
/**
 * 通道信息
 */
export interface ProxyInfo {
    /**
      * （旧参数，请使用ProxyId）通道实例ID。
注意：此字段可能返回 null，表示取不到有效值。
      */
    InstanceId: string;
    /**
      * 创建时间，采用Unix时间戳的方式，表示从1970年1月1日（UTC/GMT的午夜）开始所经过的秒数。
      */
    CreateTime: number;
    /**
      * 项目ID。
      */
    ProjectId: number;
    /**
      * 通道名称。
      */
    ProxyName: string;
    /**
      * 接入地域。
      */
    AccessRegion: string;
    /**
      * 源站地域。
      */
    RealServerRegion: string;
    /**
      * 带宽，单位：Mbps。
      */
    Bandwidth: number;
    /**
      * 并发，单位：个/秒。
      */
    Concurrent: number;
    /**
      * 通道状态。其中：
RUNNING表示运行中；
CREATING表示创建中；
DESTROYING表示销毁中；
OPENING表示开启中；
CLOSING表示关闭中；
CLOSED表示已关闭；
ADJUSTING表示配置变更中；
ISOLATING表示隔离中；
ISOLATED表示已隔离；
CLONING表示复制中；
RECOVERING表示通道维护中。
      */
    Status: string;
    /**
      * 接入域名。
      */
    Domain: string;
    /**
      * 接入IP。
      */
    IP: string;
    /**
      * 通道版本号：1.0，2.0，3.0。
      */
    Version: string;
    /**
      * （新参数）通道实例ID。
注意：此字段可能返回 null，表示取不到有效值。
      */
    ProxyId: string;
    /**
      * 1，该通道可缩扩容；0，该通道无法缩扩容。
      */
    Scalarable: number;
    /**
      * 支持的协议类型。
      */
    SupportProtocols: Array<string>;
    /**
      * 通道组ID，当通道归属于某一通道组时，存在该字段。
注意：此字段可能返回 null，表示取不到有效值。
      */
    GroupId: string;
    /**
      * 安全策略ID，当设置了安全策略时，存在该字段。
注意：此字段可能返回 null，表示取不到有效值。
      */
    PolicyId: string;
    /**
      * 接入地域详细信息，包括地域ID和地域名。
注意：此字段可能返回 null，表示取不到有效值。
      */
    AccessRegionInfo: RegionDetail;
    /**
      * 源站地域详细信息，包括地域ID和地域名。
注意：此字段可能返回 null，表示取不到有效值。
      */
    RealServerRegionInfo: RegionDetail;
    /**
      * 通道转发IP
      */
    ForwardIP: string;
    /**
      * 标签列表，不存在标签时，该字段为空列表。
注意：此字段可能返回 null，表示取不到有效值。
      */
    TagSet: Array<TagPair>;
    /**
      * 是否支持安全组配置
注意：此字段可能返回 null，表示取不到有效值。
      */
    SupportSecurity: number;
    /**
      * 计费类型: 0表示按带宽计费  1表示按流量计费。
注意：此字段可能返回 null，表示取不到有效值。
      */
    BillingType: number;
    /**
      * 关联了解析的域名列表
注意：此字段可能返回 null，表示取不到有效值。
      */
    RelatedGlobalDomains: Array<string>;
    /**
      * 配置变更时间
注意：此字段可能返回 null，表示取不到有效值。
      */
    ModifyConfigTime: number;
    /**
      * 通道类型，100表示THUNDER通道，103表示微软合作通道
注意：此字段可能返回 null，表示取不到有效值。
      */
    ProxyType: number;
    /**
      * 通道获取客户端IP的方式，0表示TOA，1表示Proxy Protocol
注意：此字段可能返回 null，表示取不到有效值。
      */
    ClientIPMethod: Array<number>;
    /**
      * IP版本：IPv4、IPv6
注意：此字段可能返回 null，表示取不到有效值。
      */
    IPAddressVersion: string;
    /**
      * 网络类型：normal表示常规BGP，cn2表示精品BGP，triple表示三网
注意：此字段可能返回 null，表示取不到有效值。
      */
    NetworkType: string;
    /**
      * 通道套餐类型：Thunder表示标准通道，Accelerator表示银牌加速通道，
CrossBorder表示跨境通道。
注意：此字段可能返回 null，表示取不到有效值。
      */
    PackageType: string;
    /**
      * 封禁解封状态：BANNED表示已封禁，RECOVER表示已解封或未封禁，BANNING表示封禁中，RECOVERING表示解封中，BAN_FAILED表示封禁失败，RECOVER_FAILED表示解封失败。
注意：此字段可能返回 null，表示取不到有效值。
      */
    BanStatus: string;
    /**
      * IP列表
注意：此字段可能返回 null，表示取不到有效值。
      */
    IPList: Array<IPDetail>;
    /**
      * 支持Http3协议的标识，其中：
0表示关闭；
1表示启用。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Http3Supported: number;
    /**
      * 是否在封禁黑名单中，其中：0表示不在黑名单中，1表示在黑名单中。
注意：此字段可能返回 null，表示取不到有效值。
      */
    InBanBlacklist: number;
}
/**
 * RemoveRealServers返回参数结构体
 */
export interface RemoveRealServersResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeRulesByRuleIds请求参数结构体
 */
export interface DescribeRulesByRuleIdsRequest {
    /**
      * 规则ID列表。最多支持10个规则。
      */
    RuleIds: Array<string>;
}
/**
 * 绑定的源站信息
 */
export interface RealServerBindSetReq {
    /**
      * 源站id
      */
    RealServerId: string;
    /**
      * 源站端口
      */
    RealServerPort: number;
    /**
      * 源站IP
      */
    RealServerIP: string;
    /**
      * 源站权重
      */
    RealServerWeight?: number;
    /**
      * 源站主备角色：master主，slave备，该参数必须在监听器打开了源站主备模式，且监听器类型为TCP监听器
      */
    RealServerFailoverRole?: string;
}
/**
 * CloseProxyGroup请求参数结构体
 */
export interface CloseProxyGroupRequest {
    /**
      * 通道组的实例 ID。
      */
    GroupId: string;
}
/**
 * OpenProxies返回参数结构体
 */
export interface OpenProxiesResponse {
    /**
      * 非关闭状态下的通道实例ID列表，不可开启。
      */
    InvalidStatusInstanceSet: Array<string>;
    /**
      * 开启操作失败的通道实例ID列表。
      */
    OperationFailedInstanceSet: Array<string>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ModifyProxyConfiguration返回参数结构体
 */
export interface ModifyProxyConfigurationResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CreateDomainErrorPageInfo请求参数结构体
 */
export interface CreateDomainErrorPageInfoRequest {
    /**
      * 监听器ID
      */
    ListenerId: string;
    /**
      * 域名
      */
    Domain: string;
    /**
      * 原始错误码
      */
    ErrorNos: Array<number>;
    /**
      * 新的响应包体
      */
    Body: string;
    /**
      * 新错误码
      */
    NewErrorNo?: number;
    /**
      * 需要删除的响应头
      */
    ClearHeaders?: Array<string>;
    /**
      * 需要设置的响应头
      */
    SetHeaders?: Array<HttpHeaderParam>;
}
