import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { DescribeUDPListenersRequest, DeleteProxyGroupRequest, DescribeResourcesByTagRequest, DescribeListenerStatisticsRequest, DescribeProxyAndStatisticsListenersResponse, DeleteRuleRequest, BindRuleRealServersRequest, DescribeHTTPSListenersResponse, ModifyProxiesProjectRequest, DescribeCertificateDetailRequest, SetAuthenticationResponse, DescribeProxyGroupStatisticsResponse, DescribeResourcesByTagResponse, ModifyGroupDomainConfigRequest, DescribeHTTPListenersRequest, DescribeCustomHeaderResponse, ModifyRealServerNameResponse, DescribeGroupDomainConfigResponse, ModifyCertificateResponse, OpenSecurityPolicyRequest, DeleteDomainErrorPageInfoRequest, DescribeListenerRealServersRequest, DescribeProxyGroupStatisticsRequest, DescribeHTTPSListenersRequest, DescribeAccessRegionsByDestRegionResponse, DescribeCountryAreaMappingRequest, CheckProxyCreateResponse, ModifyCertificateRequest, DestroyProxiesRequest, DescribeRulesResponse, DescribeProxiesResponse, CreateRuleResponse, ModifyRealServerNameRequest, ModifyGroupDomainConfigResponse, DeleteProxyGroupResponse, CreateDomainErrorPageInfoResponse, BindListenerRealServersRequest, ModifyProxyConfigurationRequest, DescribeRuleRealServersRequest, DescribeGroupDomainConfigRequest, CreateProxyGroupDomainRequest, CreateTCPListenersRequest, DescribeListenerStatisticsResponse, DescribeProxyGroupDetailsRequest, CloseProxiesRequest, DescribeListenerRealServersResponse, DescribeProxyDetailRequest, DeleteDomainRequest, OpenSecurityPolicyResponse, ModifyCertificateAttributesResponse, DescribeSecurityPolicyDetailResponse, CreateHTTPListenerResponse, ModifyUDPListenerAttributeResponse, CreateProxyGroupRequest, DescribeTCPListenersResponse, DescribeRulesRequest, DescribeCountryAreaMappingResponse, DescribeRealServersResponse, ModifyHTTPListenerAttributeResponse, DescribeRealServerStatisticsRequest, DescribeProxyAndStatisticsListenersRequest, DescribeAccessRegionsResponse, DeleteListenersRequest, DescribeSecurityRulesRequest, DescribeDestRegionsResponse, DescribeDomainErrorPageInfoByIdsResponse, DescribeProxiesRequest, BindListenerRealServersResponse, ModifyProxyGroupAttributeResponse, DescribeUDPListenersResponse, CreateUDPListenersRequest, ModifyRuleAttributeRequest, CreateSecurityPolicyResponse, CreateSecurityRulesResponse, DescribeAccessRegionsRequest, CreateCertificateRequest, DescribeCertificatesResponse, DescribeCustomHeaderRequest, DescribeProxyGroupListResponse, DescribeDomainErrorPageInfoRequest, CloseSecurityPolicyRequest, ModifyCertificateAttributesRequest, CreateSecurityRulesRequest, DescribeCertificatesRequest, DescribeProxiesStatusRequest, ModifyTCPListenerAttributeRequest, DeleteSecurityPolicyResponse, CreateDomainResponse, ModifyProxiesProjectResponse, ModifyDomainRequest, ModifySecurityRuleRequest, CreateCustomHeaderResponse, DescribeAccessRegionsByDestRegionRequest, DescribeRealServersRequest, CreateCustomHeaderRequest, CreateProxyGroupDomainResponse, DescribeDomainErrorPageInfoResponse, DestroyProxiesResponse, DescribeRuleRealServersResponse, DescribeRealServersStatusRequest, ModifyHTTPListenerAttributeRequest, CreateProxyRequest, DeleteCertificateRequest, ModifySecurityRuleResponse, DescribeProxiesStatusResponse, RemoveRealServersRequest, CreateDomainRequest, CreateRuleRequest, DeleteSecurityPolicyRequest, CreateHTTPListenerRequest, CloseSecurityPolicyResponse, DescribeRegionAndPriceResponse, AddRealServersResponse, CloseProxiesResponse, DeleteCertificateResponse, DescribeBlackHeaderResponse, DescribeDestRegionsRequest, ModifyRuleAttributeResponse, CreateTCPListenersResponse, DescribeSecurityPolicyDetailRequest, ModifyDomainResponse, DescribeRulesByRuleIdsResponse, SetAuthenticationRequest, InquiryPriceCreateProxyResponse, DescribeHTTPListenersResponse, DescribeRealServerStatisticsResponse, DeleteDomainResponse, DeleteListenersResponse, CreateSecurityPolicyRequest, ModifyHTTPSListenerAttributeResponse, DescribeProxyGroupListRequest, CreateProxyGroupResponse, CreateHTTPSListenerResponse, DeleteRuleResponse, BindRuleRealServersResponse, DescribeGroupAndStatisticsProxyRequest, ModifyUDPListenerAttributeRequest, DeleteSecurityRulesResponse, ModifyTCPListenerAttributeResponse, DescribeProxyDetailResponse, DescribeGroupAndStatisticsProxyResponse, CreateUDPListenersResponse, ModifyHTTPSListenerAttributeRequest, DescribeProxyStatisticsRequest, DescribeTCPListenersRequest, CreateCertificateResponse, DescribeBlackHeaderRequest, DescribeProxyStatisticsResponse, DescribeRealServersStatusResponse, ModifyProxyGroupAttributeRequest, CloseProxyGroupResponse, DeleteDomainErrorPageInfoResponse, ModifyProxiesAttributeResponse, DescribeDomainErrorPageInfoByIdsRequest, CheckProxyCreateRequest, DescribeRegionAndPriceRequest, AddRealServersRequest, ModifyProxiesAttributeRequest, DescribeSecurityRulesResponse, CreateHTTPSListenerRequest, DeleteSecurityRulesRequest, DescribeCertificateDetailResponse, OpenProxyGroupResponse, CreateProxyResponse, OpenProxiesRequest, InquiryPriceCreateProxyRequest, DescribeProxyGroupDetailsResponse, OpenProxyGroupRequest, RemoveRealServersResponse, DescribeRulesByRuleIdsRequest, CloseProxyGroupRequest, OpenProxiesResponse, ModifyProxyConfigurationResponse, CreateDomainErrorPageInfoRequest } from "./gaap_models";
/**
 * gaap client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 本接口（DescribeCertificates）用来查询可以使用的证书列表。
     */
    DescribeCertificates(req: DescribeCertificatesRequest, cb?: (error: string, rep: DescribeCertificatesResponse) => void): Promise<DescribeCertificatesResponse>;
    /**
     * 添加安全策略规则
     */
    CreateSecurityRules(req: CreateSecurityRulesRequest, cb?: (error: string, rep: CreateSecurityRulesResponse) => void): Promise<CreateSecurityRulesResponse>;
    /**
     * 本接口（DescribeHTTPSListeners）用来查询HTTPS监听器信息。
     */
    DescribeHTTPSListeners(req: DescribeHTTPSListenersRequest, cb?: (error: string, rep: DescribeHTTPSListenersResponse) => void): Promise<DescribeHTTPSListenersResponse>;
    /**
     * 删除安全策略
     */
    DeleteSecurityPolicy(req: DeleteSecurityPolicyRequest, cb?: (error: string, rep: DeleteSecurityPolicyResponse) => void): Promise<DeleteSecurityPolicyResponse>;
    /**
     * 本接口（DescribeBlackHeader）用于查询禁用的自定义header 名称
     */
    DescribeBlackHeader(req?: DescribeBlackHeaderRequest, cb?: (error: string, rep: DescribeBlackHeaderResponse) => void): Promise<DescribeBlackHeaderResponse>;
    /**
     * 本接口（DescribeCountryAreaMapping）用于获取国家地区编码映射表。
     */
    DescribeCountryAreaMapping(req?: DescribeCountryAreaMappingRequest, cb?: (error: string, rep: DescribeCountryAreaMappingResponse) => void): Promise<DescribeCountryAreaMappingResponse>;
    /**
     * 该接口（ModifyHTTPListenerAttribute）用于修改通道的HTTP监听器配置信息，目前仅支持修改监听器的名称。
注意：通道组通道暂时不支持HTTP/HTTPS监听器。
     */
    ModifyHTTPListenerAttribute(req: ModifyHTTPListenerAttributeRequest, cb?: (error: string, rep: ModifyHTTPListenerAttributeResponse) => void): Promise<ModifyHTTPListenerAttributeResponse>;
    /**
     * 本接口（ModifyCertificateAttributes）用于修改证书，包括证书名字以及证书内容。
     */
    ModifyCertificateAttributes(req: ModifyCertificateAttributesRequest, cb?: (error: string, rep: ModifyCertificateAttributesResponse) => void): Promise<ModifyCertificateAttributesResponse>;
    /**
     * 本接口（CreateCustomHeader）用于创建HTTP/HTTPS监听器的自定义header，客户端请求通过访问该监听器时，会将监听器中配置的header信息发送到源站。
     */
    CreateCustomHeader(req: CreateCustomHeaderRequest, cb?: (error: string, rep: CreateCustomHeaderResponse) => void): Promise<CreateCustomHeaderResponse>;
    /**
     * 该接口为内部接口，用于查询可以获取统计数据的通道组和通道信息
     */
    DescribeGroupAndStatisticsProxy(req: DescribeGroupAndStatisticsProxyRequest, cb?: (error: string, rep: DescribeGroupAndStatisticsProxyResponse) => void): Promise<DescribeGroupAndStatisticsProxyResponse>;
    /**
     * 关闭安全策略
     */
    CloseSecurityPolicy(req: CloseSecurityPolicyRequest, cb?: (error: string, rep: CloseSecurityPolicyResponse) => void): Promise<CloseSecurityPolicyResponse>;
    /**
     * 本接口（CreateProxyGroupDomain）用于创建通道组域名，并开启域名解析。
     */
    CreateProxyGroupDomain(req: CreateProxyGroupDomainRequest, cb?: (error: string, rep: CreateProxyGroupDomainResponse) => void): Promise<CreateProxyGroupDomainResponse>;
    /**
     * 该接口（CreateUDPListeners）用于批量创建单通道或者通道组的UDP协议类型的监听器。
     */
    CreateUDPListeners(req: CreateUDPListenersRequest, cb?: (error: string, rep: CreateUDPListenersResponse) => void): Promise<CreateUDPListenersResponse>;
    /**
     * 本接口（DescribeProxyDetail）用于查询通道详情。
     */
    DescribeProxyDetail(req: DescribeProxyDetailRequest, cb?: (error: string, rep: DescribeProxyDetailResponse) => void): Promise<DescribeProxyDetailResponse>;
    /**
     * 本接口（DescribeRuleRealServers）用于查询转发规则相关的源站信息， 包括该规则可绑定的源站信息和已绑定的源站信息。
     */
    DescribeRuleRealServers(req: DescribeRuleRealServersRequest, cb?: (error: string, rep: DescribeRuleRealServersResponse) => void): Promise<DescribeRuleRealServersResponse>;
    /**
     * 本接口（DescribeDestRegions）用于查询源站区域，即源站服务器所在区域。
     */
    DescribeDestRegions(req?: DescribeDestRegionsRequest, cb?: (error: string, rep: DescribeDestRegionsResponse) => void): Promise<DescribeDestRegionsResponse>;
    /**
     * 本接口（DescribeRulesByRuleIds）用于根据规则ID拉取规则信息列表。支持一个或者多个规则信息的拉取。一次最多支持10个规则信息的拉取。
     */
    DescribeRulesByRuleIds(req: DescribeRulesByRuleIdsRequest, cb?: (error: string, rep: DescribeRulesByRuleIdsResponse) => void): Promise<DescribeRulesByRuleIdsResponse>;
    /**
     * 本接口（DescribeProxyGroupList）用于拉取通道组列表及各通道组基本信息。
     */
    DescribeProxyGroupList(req: DescribeProxyGroupListRequest, cb?: (error: string, rep: DescribeProxyGroupListResponse) => void): Promise<DescribeProxyGroupListResponse>;
    /**
     * 开启安全策略
     */
    OpenSecurityPolicy(req: OpenSecurityPolicyRequest, cb?: (error: string, rep: OpenSecurityPolicyResponse) => void): Promise<OpenSecurityPolicyResponse>;
    /**
     * 删除域名的定制错误
     */
    DeleteDomainErrorPageInfo(req: DeleteDomainErrorPageInfoRequest, cb?: (error: string, rep: DeleteDomainErrorPageInfoResponse) => void): Promise<DeleteDomainErrorPageInfoResponse>;
    /**
     * 本接口（ModifyCertificate）用于修改监听器下的域名对应的证书。该接口仅适用于version3.0的通道。
     */
    ModifyCertificate(req: ModifyCertificateRequest, cb?: (error: string, rep: ModifyCertificateResponse) => void): Promise<ModifyCertificateResponse>;
    /**
     * 定制域名指定错误码的错误响应
     */
    CreateDomainErrorPageInfo(req: CreateDomainErrorPageInfoRequest, cb?: (error: string, rep: CreateDomainErrorPageInfoResponse) => void): Promise<CreateDomainErrorPageInfoResponse>;
    /**
     * 该接口用于查询监听器统计数据，包括出入带宽，出入包量，并发数据。支持300, 3600和86400的细粒度，取值为细粒度范围内最大值。
     */
    DescribeProxyGroupStatistics(req: DescribeProxyGroupStatisticsRequest, cb?: (error: string, rep: DescribeProxyGroupStatisticsResponse) => void): Promise<DescribeProxyGroupStatisticsResponse>;
    /**
     * 本接口（ModifyRealServerName）用于修改源站的名称
     */
    ModifyRealServerName(req: ModifyRealServerNameRequest, cb?: (error: string, rep: ModifyRealServerNameResponse) => void): Promise<ModifyRealServerNameResponse>;
    /**
     * 本接口（BindListenerRealServers）用于TCP/UDP监听器绑定解绑源站。
注意：本接口会解绑之前绑定的源站，绑定本次调用所选择的源站。例如：原来绑定的源站为A，B，C，本次调用的选择绑定的源站为C，D，E，那么调用后所绑定的源站为C，D，E。
     */
    BindListenerRealServers(req: BindListenerRealServersRequest, cb?: (error: string, rep: BindListenerRealServersResponse) => void): Promise<BindListenerRealServersResponse>;
    /**
     * 删除安全策略规则
     */
    DeleteSecurityRules(req: DeleteSecurityRulesRequest, cb?: (error: string, rep: DeleteSecurityRulesResponse) => void): Promise<DeleteSecurityRulesResponse>;
    /**
     * 本接口（DeleteCertificate）用于删除证书。
     */
    DeleteCertificate(req: DeleteCertificateRequest, cb?: (error: string, rep: DeleteCertificateResponse) => void): Promise<DeleteCertificateResponse>;
    /**
     * 本接口（DescribeAccessRegionsByDestRegion）根据源站区域查询可用的加速区域列表。
     */
    DescribeAccessRegionsByDestRegion(req: DescribeAccessRegionsByDestRegionRequest, cb?: (error: string, rep: DescribeAccessRegionsByDestRegionResponse) => void): Promise<DescribeAccessRegionsByDestRegionResponse>;
    /**
     * 本接口（ModifyGroupDomainConfig）用于配置通道组就近接入域名。
     */
    ModifyGroupDomainConfig(req: ModifyGroupDomainConfigRequest, cb?: (error: string, rep: ModifyGroupDomainConfigResponse) => void): Promise<ModifyGroupDomainConfigResponse>;
    /**
     * 该接口（DescribeTCPListeners）用于查询单通道或者通道组下的TCP监听器信息。
     */
    DescribeTCPListeners(req: DescribeTCPListenersRequest, cb?: (error: string, rep: DescribeTCPListenersResponse) => void): Promise<DescribeTCPListenersResponse>;
    /**
     * 本接口（DescribeRealServers）用于查询源站信息，可以根据项目名查询所有的源站信息，此外支持指定IP或者域名的源站模糊查询。
     */
    DescribeRealServers(req: DescribeRealServersRequest, cb?: (error: string, rep: DescribeRealServersResponse) => void): Promise<DescribeRealServersResponse>;
    /**
     * 该接口为内部接口，用于查询可以获取统计数据的通道和监听器信息
     */
    DescribeProxyAndStatisticsListeners(req: DescribeProxyAndStatisticsListenersRequest, cb?: (error: string, rep: DescribeProxyAndStatisticsListenersResponse) => void): Promise<DescribeProxyAndStatisticsListenersResponse>;
    /**
     * 该接口（CreateHTTPListener）用于在通道实例下创建HTTP协议类型的监听器。
     */
    CreateHTTPListener(req: CreateHTTPListenerRequest, cb?: (error: string, rep: CreateHTTPListenerResponse) => void): Promise<CreateHTTPListenerResponse>;
    /**
     * 该接口（DescribeUDPListeners）用于查询单通道或者通道组下的UDP监听器信息
     */
    DescribeUDPListeners(req: DescribeUDPListenersRequest, cb?: (error: string, rep: DescribeUDPListenersResponse) => void): Promise<DescribeUDPListenersResponse>;
    /**
     * 本接口（ModifyProxyConfiguration）用于修改通道的配置。根据当前业务的容量需求，扩容或缩容相关通道的配置。仅支持Scalarable为1的通道,Scalarable可通过接口DescribeProxies获取。
     */
    ModifyProxyConfiguration(req: ModifyProxyConfigurationRequest, cb?: (error: string, rep: ModifyProxyConfigurationResponse) => void): Promise<ModifyProxyConfigurationResponse>;
    /**
     * 本接口（CloseProxyGroup）用于关闭通道组。通道组关闭后，不再产生流量，但每天仍然收取通道基础配置费用。
     */
    CloseProxyGroup(req: CloseProxyGroupRequest, cb?: (error: string, rep: CloseProxyGroupResponse) => void): Promise<CloseProxyGroupResponse>;
    /**
     * 本接口（ModifyTCPListenerAttribute）用于修改通道实例下TCP监听器配置，包括健康检查的配置，调度策略。
     */
    ModifyTCPListenerAttribute(req: ModifyTCPListenerAttributeRequest, cb?: (error: string, rep: ModifyTCPListenerAttributeResponse) => void): Promise<ModifyTCPListenerAttributeResponse>;
    /**
     * 该接口（DescribeRealServerStatistics）用于查询源站健康检查结果的统计数据。源站状态展示位为1：正常或者0：异常。查询的源站需要在监听器或者规则上进行了绑定，查询时需指定绑定的监听器或者规则ID。该接口支持1分钟细粒度的源站状态统计数据展示。
     */
    DescribeRealServerStatistics(req: DescribeRealServerStatisticsRequest, cb?: (error: string, rep: DescribeRealServerStatisticsResponse) => void): Promise<DescribeRealServerStatisticsResponse>;
    /**
     * 该接口（DescribeHTTPListeners）用来查询HTTP监听器信息。
     */
    DescribeHTTPListeners(req: DescribeHTTPListenersRequest, cb?: (error: string, rep: DescribeHTTPListenersResponse) => void): Promise<DescribeHTTPListenersResponse>;
    /**
     * 本接口（CreateProxyGroup）用于创建通道组。
     */
    CreateProxyGroup(req: CreateProxyGroupRequest, cb?: (error: string, rep: CreateProxyGroupResponse) => void): Promise<CreateProxyGroupResponse>;
    /**
     * 本接口（CreateCertificate）用于创建Gaap相关证书和配置文件，包括基础认证配置文件，客户端CA证书，服务器SSL证书，Gaap SSL证书以及源站CA证书。
     */
    CreateCertificate(req: CreateCertificateRequest, cb?: (error: string, rep: CreateCertificateResponse) => void): Promise<CreateCertificateResponse>;
    /**
     * 本接口（DescribeCustomHeader）用于自定义header列表
     */
    DescribeCustomHeader(req?: DescribeCustomHeaderRequest, cb?: (error: string, rep: DescribeCustomHeaderResponse) => void): Promise<DescribeCustomHeaderResponse>;
    /**
     * 本接口（ModifyProxiesAttribute）用于修改实例的属性（目前只支持修改通道的名称）。
     */
    ModifyProxiesAttribute(req: ModifyProxiesAttributeRequest, cb?: (error: string, rep: ModifyProxiesAttributeResponse) => void): Promise<ModifyProxiesAttributeResponse>;
    /**
     * 本接口（DestroyProxies）用于销毁。通道销毁后，不再产生任何费用。
     */
    DestroyProxies(req: DestroyProxiesRequest, cb?: (error: string, rep: DestroyProxiesResponse) => void): Promise<DestroyProxiesResponse>;
    /**
     * 本接口（CreateProxy）用于创建/复制一个指定配置的加速通道。当复制通道时，需要设置新通道的基本配置参数，并设置ClonedProxyId来指定被复制的通道。
     */
    CreateProxy(req: CreateProxyRequest, cb?: (error: string, rep: CreateProxyResponse) => void): Promise<CreateProxyResponse>;
    /**
     * 本接口（DeleteDomain）仅适用于7层监听器，用于删除该监听器下对应域名及域名下的所有规则，所有已绑定源站的规则将自动解绑。
     */
    DeleteDomain(req: DeleteDomainRequest, cb?: (error: string, rep: DeleteDomainResponse) => void): Promise<DeleteDomainResponse>;
    /**
     * 获取安全策略详情
     */
    DescribeSecurityPolicyDetail(req: DescribeSecurityPolicyDetailRequest, cb?: (error: string, rep: DescribeSecurityPolicyDetailResponse) => void): Promise<DescribeSecurityPolicyDetailResponse>;
    /**
     * 删除已添加的源站(服务器)IP或域名
     */
    RemoveRealServers(req: RemoveRealServersRequest, cb?: (error: string, rep: RemoveRealServersResponse) => void): Promise<RemoveRealServersResponse>;
    /**
     * 本接口（DescribeSecurityRules）用于根据安全规则ID查询安全规则详情列表。支持一个或多个安全规则的查询。一次最多支持20个安全规则的查询。
     */
    DescribeSecurityRules(req: DescribeSecurityRulesRequest, cb?: (error: string, rep: DescribeSecurityRulesResponse) => void): Promise<DescribeSecurityRulesResponse>;
    /**
     * 创建安全策略
     */
    CreateSecurityPolicy(req: CreateSecurityPolicyRequest, cb?: (error: string, rep: CreateSecurityPolicyResponse) => void): Promise<CreateSecurityPolicyResponse>;
    /**
     * 该接口（DeleteRule）用于删除HTTP/HTTPS监听器的转发规则。
     */
    DeleteRule(req: DeleteRuleRequest, cb?: (error: string, rep: DeleteRuleResponse) => void): Promise<DeleteRuleResponse>;
    /**
     * 该接口（CreateRule）用于创建HTTP/HTTPS监听器转发规则。
     */
    CreateRule(req: CreateRuleRequest, cb?: (error: string, rep: CreateRuleResponse) => void): Promise<CreateRuleResponse>;
    /**
     * 本接口（ModifyDomain）用于监听器下的域名。当通道版本为3.0时，支持对该域名所对应的证书修改。
     */
    ModifyDomain(req: ModifyDomainRequest, cb?: (error: string, rep: ModifyDomainResponse) => void): Promise<ModifyDomainResponse>;
    /**
     * 该接口（OpenProxies）用于开启一条或者多条通道。
     */
    OpenProxies(req: OpenProxiesRequest, cb?: (error: string, rep: OpenProxiesResponse) => void): Promise<OpenProxiesResponse>;
    /**
     * 本接口（ModifyUDPListenerAttribute）用于修改通道实例下UDP监听器配置，包括监听器名称和调度策略的修改。
     */
    ModifyUDPListenerAttribute(req: ModifyUDPListenerAttributeRequest, cb?: (error: string, rep: ModifyUDPListenerAttributeResponse) => void): Promise<ModifyUDPListenerAttributeResponse>;
    /**
     * 本接口（DescribeProxyGroupDetails）用于查询通道组详情。
     */
    DescribeProxyGroupDetails(req: DescribeProxyGroupDetailsRequest, cb?: (error: string, rep: DescribeProxyGroupDetailsResponse) => void): Promise<DescribeProxyGroupDetailsResponse>;
    /**
     * 本接口（DescribeProxies）用于查询通道实例列表。
     */
    DescribeProxies(req: DescribeProxiesRequest, cb?: (error: string, rep: DescribeProxiesResponse) => void): Promise<DescribeProxiesResponse>;
    /**
     * 本接口（DeleteProxyGroup）用于删除通道组。
     */
    DeleteProxyGroup(req: DeleteProxyGroupRequest, cb?: (error: string, rep: DeleteProxyGroupResponse) => void): Promise<DeleteProxyGroupResponse>;
    /**
     * 本接口（ModifyProxiesProject）用于修改通道所属项目。
     */
    ModifyProxiesProject(req: ModifyProxiesProjectRequest, cb?: (error: string, rep: ModifyProxiesProjectResponse) => void): Promise<ModifyProxiesProjectResponse>;
    /**
     * 添加源站(服务器)信息，支持IP或域名
     */
    AddRealServers(req: AddRealServersRequest, cb?: (error: string, rep: AddRealServersResponse) => void): Promise<AddRealServersResponse>;
    /**
     * 本接口（CreateDomain）用于创建HTTP/HTTPS监听器的访问域名，客户端请求通过访问该域名来请求后端业务。
该接口仅支持version3.0的通道。
     */
    CreateDomain(req: CreateDomainRequest, cb?: (error: string, rep: CreateDomainResponse) => void): Promise<CreateDomainResponse>;
    /**
     * 本接口（DescribeCertificateDetail）用于查询证书详情，包括证书ID，证书名字，证书类型，证书内容以及密钥等信息。
     */
    DescribeCertificateDetail(req: DescribeCertificateDetailRequest, cb?: (error: string, rep: DescribeCertificateDetailResponse) => void): Promise<DescribeCertificateDetailResponse>;
    /**
     * 该接口（DescribeRegionAndPrice）用于获取源站区域和带宽梯度价格
     */
    DescribeRegionAndPrice(req: DescribeRegionAndPriceRequest, cb?: (error: string, rep: DescribeRegionAndPriceResponse) => void): Promise<DescribeRegionAndPriceResponse>;
    /**
     * 本接口（DescribeRealServersStatus）用于查询源站是否已被规则或者监听器绑定
     */
    DescribeRealServersStatus(req: DescribeRealServersStatusRequest, cb?: (error: string, rep: DescribeRealServersStatusResponse) => void): Promise<DescribeRealServersStatusResponse>;
    /**
     * 本接口（DescribeRules）用于查询监听器下的所有规则信息，包括规则域名，路径以及该规则下所绑定的源站列表。当通道版本为3.0时，该接口会返回该域名对应的高级认证配置信息。
     */
    DescribeRules(req: DescribeRulesRequest, cb?: (error: string, rep: DescribeRulesResponse) => void): Promise<DescribeRulesResponse>;
    /**
     * 该接口（DescribeListenerRealServers）用于查询TCP/UDP监听器源站列表，包括该监听器已经绑定的源站列表以及可以绑定的源站列表。
     */
    DescribeListenerRealServers(req: DescribeListenerRealServersRequest, cb?: (error: string, rep: DescribeListenerRealServersResponse) => void): Promise<DescribeListenerRealServersResponse>;
    /**
     * 本接口（SetAuthentication）用于通道的高级认证配置，包括认证方式选择，以及各种认证方式对应的证书选择。仅支持Version3.0的通道。
     */
    SetAuthentication(req: SetAuthenticationRequest, cb?: (error: string, rep: SetAuthenticationResponse) => void): Promise<SetAuthenticationResponse>;
    /**
     * 该接口（CreateHTTPSListener）用于在通道实例下创建HTTPS协议类型的监听器。
     */
    CreateHTTPSListener(req: CreateHTTPSListenerRequest, cb?: (error: string, rep: CreateHTTPSListenerResponse) => void): Promise<CreateHTTPSListenerResponse>;
    /**
     * 本接口(CheckProxyCreate)用于查询能否创建指定配置的加速通道。
     */
    CheckProxyCreate(req: CheckProxyCreateRequest, cb?: (error: string, rep: CheckProxyCreateResponse) => void): Promise<CheckProxyCreateResponse>;
    /**
     * 该接口（OpenProxyGroup）用于开启一条通道组中的所有通道
     */
    OpenProxyGroup(req: OpenProxyGroupRequest, cb?: (error: string, rep: OpenProxyGroupResponse) => void): Promise<OpenProxyGroupResponse>;
    /**
     * 本接口（DescribeAccessRegions）用于查询加速区域，即客户端接入区域。
     */
    DescribeAccessRegions(req?: DescribeAccessRegionsRequest, cb?: (error: string, rep: DescribeAccessRegionsResponse) => void): Promise<DescribeAccessRegionsResponse>;
    /**
     * 本接口（ModifyRuleAttribute）用于修改转发规则的信息，包括健康检查的配置以及转发策略。
     */
    ModifyRuleAttribute(req: ModifyRuleAttributeRequest, cb?: (error: string, rep: ModifyRuleAttributeResponse) => void): Promise<ModifyRuleAttributeResponse>;
    /**
     * 本接口（DescribeGroupDomainConfig）用于获取通道组域名解析配置详情。
     */
    DescribeGroupDomainConfig(req: DescribeGroupDomainConfigRequest, cb?: (error: string, rep: DescribeGroupDomainConfigResponse) => void): Promise<DescribeGroupDomainConfigResponse>;
    /**
     * 该接口（ModifyHTTPSListenerAttribute）用于修改HTTPS监听器配置，当前不支持通道组和v1版本通道。
     */
    ModifyHTTPSListenerAttribute(req: ModifyHTTPSListenerAttributeRequest, cb?: (error: string, rep: ModifyHTTPSListenerAttributeResponse) => void): Promise<ModifyHTTPSListenerAttributeResponse>;
    /**
     * 该接口用于查询监听器统计数据，包括出入带宽，出入包量，并发数据。支持300秒, 3600秒和86400秒的细粒度，取值为细粒度范围内最大值。
     */
    DescribeListenerStatistics(req: DescribeListenerStatisticsRequest, cb?: (error: string, rep: DescribeListenerStatisticsResponse) => void): Promise<DescribeListenerStatisticsResponse>;
    /**
     * 该接口（DeleteListeners）用于批量删除通道或通道组的监听器，包括4/7层监听器。
     */
    DeleteListeners(req: DeleteListenersRequest, cb?: (error: string, rep: DeleteListenersResponse) => void): Promise<DeleteListenersResponse>;
    /**
     * 该接口用于查询监听器统计数据，包括出入带宽，出入包量，并发，丢包和时延数据。支持300, 3600和86400的细粒度，取值为细粒度范围内最大值。
     */
    DescribeProxyStatistics(req: DescribeProxyStatisticsRequest, cb?: (error: string, rep: DescribeProxyStatisticsResponse) => void): Promise<DescribeProxyStatisticsResponse>;
    /**
     * 查询目前定制域名的错误响应
     */
    DescribeDomainErrorPageInfo(req: DescribeDomainErrorPageInfoRequest, cb?: (error: string, rep: DescribeDomainErrorPageInfoResponse) => void): Promise<DescribeDomainErrorPageInfoResponse>;
    /**
     * 本接口（ModifyProxyGroupAttribute）用于修改通道组属性，目前仅支持修改通道组名称。
     */
    ModifyProxyGroupAttribute(req: ModifyProxyGroupAttributeRequest, cb?: (error: string, rep: ModifyProxyGroupAttributeResponse) => void): Promise<ModifyProxyGroupAttributeResponse>;
    /**
     * 本接口（InquiryPriceCreateProxy）用于创建加速通道询价。
     */
    InquiryPriceCreateProxy(req: InquiryPriceCreateProxyRequest, cb?: (error: string, rep: InquiryPriceCreateProxyResponse) => void): Promise<InquiryPriceCreateProxyResponse>;
    /**
     * 修改安全策略规则名
     */
    ModifySecurityRule(req: ModifySecurityRuleRequest, cb?: (error: string, rep: ModifySecurityRuleResponse) => void): Promise<ModifySecurityRuleResponse>;
    /**
     * 本接口（CloseProxies）用于关闭通道。通道关闭后，不再产生流量，但每天仍然收取通道基础配置费用。
     */
    CloseProxies(req: CloseProxiesRequest, cb?: (error: string, rep: CloseProxiesResponse) => void): Promise<CloseProxiesResponse>;
    /**
     * 根据定制错误ID查询错误响应
     */
    DescribeDomainErrorPageInfoByIds(req: DescribeDomainErrorPageInfoByIdsRequest, cb?: (error: string, rep: DescribeDomainErrorPageInfoByIdsResponse) => void): Promise<DescribeDomainErrorPageInfoByIdsResponse>;
    /**
     * 本接口（DescribeProxiesStatus）用于查询通道状态列表。
     */
    DescribeProxiesStatus(req: DescribeProxiesStatusRequest, cb?: (error: string, rep: DescribeProxiesStatusResponse) => void): Promise<DescribeProxiesStatusResponse>;
    /**
     * 该接口（CreateTCPListeners）用于批量创建单通道或者通道组的TCP协议类型的监听器。
     */
    CreateTCPListeners(req: CreateTCPListenersRequest, cb?: (error: string, rep: CreateTCPListenersResponse) => void): Promise<CreateTCPListenersResponse>;
    /**
     * 该接口用于7层监听器的转发规则绑定源站。注意：本接口会解绑之前绑定的源站，绑定本次调用所选择的源站。
     */
    BindRuleRealServers(req: BindRuleRealServersRequest, cb?: (error: string, rep: BindRuleRealServersResponse) => void): Promise<BindRuleRealServersResponse>;
    /**
     * 本接口（DescribeResourcesByTag）用于根据标签来查询对应的资源信息，包括通道，通道组和源站。
     */
    DescribeResourcesByTag(req: DescribeResourcesByTagRequest, cb?: (error: string, rep: DescribeResourcesByTagResponse) => void): Promise<DescribeResourcesByTagResponse>;
}
