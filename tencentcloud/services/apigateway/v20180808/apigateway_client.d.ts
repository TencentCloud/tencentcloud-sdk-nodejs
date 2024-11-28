import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { UnBindSubDomainResponse, UpdateApiKeyRequest, DeleteAPIDocRequest, DescribeAPIDocDetailRequest, ModifyAPIDocResponse, DescribeUsagePlanRequest, DeleteUsagePlanResponse, ImportOpenApiResponse, DisableApiKeyResponse, DescribeApiResponse, DescribeServiceForApiAppRequest, UnReleaseServiceRequest, DescribeExclusiveInstancesStatusResponse, ModifySubDomainRequest, DescribeApiAppsStatusRequest, DescribeServiceUsagePlanRequest, DescribeServiceEnvironmentListResponse, DescribeApiAppBindApisStatusRequest, ModifyApiResponse, DescribeUsagePlansStatusRequest, CreateIPStrategyRequest, DescribeUsagePlansStatusResponse, DeleteUpstreamRequest, UnbindApiAppResponse, ModifyUpstreamRequest, DescribeApiUsagePlanResponse, DeleteIPStrategyRequest, DescribeApiAppRequest, DescribePluginResponse, DescribeUpstreamBindApisRequest, DescribePluginsByApiResponse, DescribeExclusiveInstancesResponse, DeleteUsagePlanRequest, DeleteServiceRequest, DescribeApiEnvironmentStrategyRequest, DescribeServiceForApiAppResponse, DeleteApiAppResponse, DescribeServiceResponse, DescribeExclusiveInstancesRequest, BindSubDomainResponse, BindEnvironmentResponse, DescribeExclusiveInstanceDetailResponse, DescribeApiBindApiAppsStatusResponse, DescribeApiForApiAppRequest, ModifyServiceResponse, DisableApiKeyRequest, UnBindIPStrategyResponse, DescribeExclusiveInstanceDetailRequest, ModifyPluginRequest, BindIPStrategyResponse, DescribeApisStatusRequest, DeleteServiceSubDomainMappingRequest, BindApiAppRequest, DescribeIPStrategyResponse, DescribePluginRequest, DetachPluginRequest, CreateApiResponse, DescribeIPStrategyApisStatusRequest, ModifyIPStrategyResponse, ModifyApiEnvironmentStrategyRequest, DescribeUpstreamBindApisResponse, CreateUsagePlanResponse, DeletePluginRequest, DeleteApiKeyResponse, ModifyExclusiveInstanceRequest, DescribeServiceReleaseVersionRequest, DescribeUsagePlanSecretIdsRequest, DescribeLogSearchResponse, ModifyAPIDocRequest, UnBindIPStrategyRequest, DescribeUpstreamsResponse, DescribePluginApisRequest, CreateServiceRequest, DescribeIPStrategysStatusRequest, DemoteServiceUsagePlanResponse, DescribePluginApisResponse, EnableApiKeyResponse, DeleteApiAppRequest, UnReleaseServiceResponse, CreateAPIDocResponse, DescribeServiceRequest, CreateUsagePlanRequest, DescribeUsagePlanSecretIdsResponse, CreatePluginRequest, ModifySubDomainResponse, DescribeExclusiveInstanceRegionsResponse, BindSecretIdsRequest, DeleteApiKeyRequest, DescribeIPStrategyApisStatusResponse, ModifyApiAppResponse, UpdateApiAppKeyRequest, DescribeApiKeyResponse, ModifyApiIncrementResponse, ModifyApiRequest, DescribeAllPluginApisResponse, ModifyUsagePlanRequest, ModifyServiceRequest, DescribeAllPluginApisRequest, CreateApiRequest, UnBindEnvironmentRequest, DescribeServiceEnvironmentStrategyRequest, DescribeInstancesNetworkConfigResponse, ReleaseServiceRequest, DeleteServiceResponse, DescribeServiceEnvironmentReleaseHistoryResponse, DescribeAPIDocsRequest, DescribePluginsByApiRequest, CreatePluginResponse, ModifyExclusiveInstanceResponse, DescribePluginsResponse, ReleaseServiceResponse, ModifyApiIncrementRequest, CreateUpstreamRequest, ModifyServiceEnvironmentStrategyResponse, UpdateApiKeyResponse, DescribeApiBindApiAppsStatusRequest, DescribeApisStatusResponse, DescribeApiKeysStatusRequest, DemoteServiceUsagePlanRequest, BindSecretIdsResponse, CreateExclusiveInstancesRequest, DescribeExclusiveInstanceRegionsRequest, DescribeApiAppResponse, DescribeServiceSubDomainMappingsResponse, DescribeApiAppsStatusResponse, DescribeApiKeyRequest, DescribeAPIDocDetailResponse, BindApiAppResponse, DeleteServiceSubDomainMappingResponse, CreateApiKeyResponse, DeleteApiRequest, DescribeUpstreamsRequest, ModifyIPStrategyRequest, ModifyPluginResponse, UnBindSecretIdsRequest, CreateUpstreamResponse, ResetAPIDocPasswordRequest, DescribeAPIDocsResponse, DescribeServiceSubDomainMappingsRequest, DescribePluginsRequest, DeletePluginResponse, ModifyServiceEnvironmentStrategyRequest, CreateAPIDocRequest, DescribeApiAppBindApisStatusResponse, DescribeServiceSubDomainsRequest, ModifyApiAppRequest, DescribeUsagePlanEnvironmentsResponse, DescribeServiceSubDomainsResponse, AttachPluginRequest, ModifyApiEnvironmentStrategyResponse, BindSubDomainRequest, CreateIPStrategyResponse, UnBindEnvironmentResponse, DeleteApiResponse, BindIPStrategyRequest, UpdateServiceRequest, BuildAPIDocResponse, DescribeServiceEnvironmentListRequest, DescribeApiEnvironmentStrategyResponse, DescribeApiRequest, ModifyUsagePlanResponse, DeleteIPStrategyResponse, DescribeUsagePlanResponse, AttachPluginResponse, BindEnvironmentRequest, ModifyUpstreamResponse, DescribeIPStrategyRequest, DescribeApiForApiAppResponse, DescribeInstancesNetworkConfigRequest, DescribeUsagePlanEnvironmentsRequest, ImportOpenApiRequest, DescribeServiceReleaseVersionResponse, DeleteUpstreamResponse, UpdateServiceResponse, DescribeServiceEnvironmentReleaseHistoryRequest, UnbindApiAppRequest, CreateServiceResponse, DeleteAPIDocResponse, DescribeServiceEnvironmentStrategyResponse, DescribeApiKeysStatusResponse, DescribeLogSearchRequest, BuildAPIDocRequest, DetachPluginResponse, CreateExclusiveInstancesResponse, DescribeServiceUsagePlanResponse, CreateApiAppResponse, DescribeApiUsagePlanRequest, UnBindSubDomainRequest, DescribeIPStrategysStatusResponse, UpdateApiAppKeyResponse, DescribeExclusiveInstancesStatusRequest, UnBindSecretIdsResponse, CreateApiAppRequest, EnableApiKeyRequest, ResetAPIDocPasswordResponse, DescribeServicesStatusRequest, DescribeServicesStatusResponse, CreateApiKeyRequest } from "./apigateway_models";
/**
 * apigateway client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 本接口（CreateService）用于创建服务。
API 网关使用的最大单元为服务，每个服务中可创建多个 API 接口。每个服务有一个默认域名供客户调用，用户也可绑定自定义域名到此服务中。
     */
    CreateService(req: CreateServiceRequest, cb?: (error: string, rep: CreateServiceResponse) => void): Promise<CreateServiceResponse>;
    /**
     * 本接口（DescribeUsagePlanStatus）用于查询使用计划的列表。
     */
    DescribeUsagePlansStatus(req: DescribeUsagePlansStatusRequest, cb?: (error: string, rep: DescribeUsagePlansStatusResponse) => void): Promise<DescribeUsagePlansStatusResponse>;
    /**
     * 查询 API 文档详情
     */
    DescribeAPIDocDetail(req: DescribeAPIDocDetailRequest, cb?: (error: string, rep: DescribeAPIDocDetailResponse) => void): Promise<DescribeAPIDocDetailResponse>;
    /**
     * 本接口（DescribeApiAppBindApisStatus）查询应用绑定的Api列表。
     */
    DescribeApiAppBindApisStatus(req: DescribeApiAppBindApisStatusRequest, cb?: (error: string, rep: DescribeApiAppBindApisStatusResponse) => void): Promise<DescribeApiAppBindApisStatusResponse>;
    /**
     * 本接口（DescribeUsagePlanSecretIds）用于查询使用计划绑定的密钥列表。
在 API 网关中，一个使用计划可绑定多个密钥对，可使用本接口查询使用计划绑定的密钥列表。
     */
    DescribeUsagePlanSecretIds(req: DescribeUsagePlanSecretIdsRequest, cb?: (error: string, rep: DescribeUsagePlanSecretIdsResponse) => void): Promise<DescribeUsagePlanSecretIdsResponse>;
    /**
     * 本接口（DescribeServiceForApiApp）用于应用使用者查询一个服务的详细信息、包括服务的描述、域名、协议等信息。
     */
    DescribeServiceForApiApp(req: DescribeServiceForApiAppRequest, cb?: (error: string, rep: DescribeServiceForApiAppResponse) => void): Promise<DescribeServiceForApiAppResponse>;
    /**
     * 本接口（ModifyIPStrategy）用于修改服务IP策略。
     */
    ModifyIPStrategy(req: ModifyIPStrategyRequest, cb?: (error: string, rep: ModifyIPStrategyResponse) => void): Promise<ModifyIPStrategyResponse>;
    /**
     * 本接口（UpdateService）用于从服务已发布的环境中将运行版本切换到特定版本。用户在使用 API 网关创建服务并发布服务到某个环境后，如在开发过程产生多个版本需要切换，此时可调用本接口。
     */
    UpdateService(req: UpdateServiceRequest, cb?: (error: string, rep: UpdateServiceResponse) => void): Promise<UpdateServiceResponse>;
    /**
     * 修改API网关插件。
     */
    ModifyPlugin(req: ModifyPluginRequest, cb?: (error: string, rep: ModifyPluginResponse) => void): Promise<ModifyPluginResponse>;
    /**
     * 本接口（DeleteApiApp）用于删除已经创建的应用。
     */
    DeleteApiApp(req: DeleteApiAppRequest, cb?: (error: string, rep: DeleteApiAppResponse) => void): Promise<DeleteApiAppResponse>;
    /**
     * 展示API上已绑定的插件列表。
     */
    DescribePluginsByApi(req: DescribePluginsByApiRequest, cb?: (error: string, rep: DescribePluginsByApiResponse) => void): Promise<DescribePluginsByApiResponse>;
    /**
     * 本接口（DescribeServicesStatus）用于搜索查询某一个服务或多个服务的列表，并返回服务相关的域名、时间等信息。
     */
    DescribeServicesStatus(req: DescribeServicesStatusRequest, cb?: (error: string, rep: DescribeServicesStatusResponse) => void): Promise<DescribeServicesStatusResponse>;
    /**
     * 查询 API 文档列表
     */
    DescribeAPIDocs(req: DescribeAPIDocsRequest, cb?: (error: string, rep: DescribeAPIDocsResponse) => void): Promise<DescribeAPIDocsResponse>;
    /**
     * 本接口（CreateUsagePlan）用于创建使用计划。
用户在使用 API 网关时，需要创建使用计划并将其绑定到服务的环境中使用。
     */
    CreateUsagePlan(req: CreateUsagePlanRequest, cb?: (error: string, rep: CreateUsagePlanResponse) => void): Promise<CreateUsagePlanResponse>;
    /**
     * 展示插件相关的API列表，包括已绑定的和未绑定的API信息。
     */
    DescribeAllPluginApis(req: DescribeAllPluginApisRequest, cb?: (error: string, rep: DescribeAllPluginApisResponse) => void): Promise<DescribeAllPluginApisResponse>;
    /**
     * 本接口（UnBindIPStrategy）用于服务解绑IP策略。
     */
    UnBindIPStrategy(req: UnBindIPStrategyRequest, cb?: (error: string, rep: UnBindIPStrategyResponse) => void): Promise<UnBindIPStrategyResponse>;
    /**
     * 重置API文档密码
     */
    ResetAPIDocPassword(req: ResetAPIDocPasswordRequest, cb?: (error: string, rep: ResetAPIDocPasswordResponse) => void): Promise<ResetAPIDocPasswordResponse>;
    /**
     * 查询指定插件下绑定的API信息
     */
    DescribePluginApis(req: DescribePluginApisRequest, cb?: (error: string, rep: DescribePluginApisResponse) => void): Promise<DescribePluginApisResponse>;
    /**
     * 本接口（DisableApiKey）用于禁用一对 API 密钥。
     */
    DisableApiKey(req: DisableApiKeyRequest, cb?: (error: string, rep: DisableApiKeyResponse) => void): Promise<DisableApiKeyResponse>;
    /**
     * 本接口（DescribeApiEnvironmentStrategy）用于展示API绑定的限流策略。
     */
    DescribeApiEnvironmentStrategy(req: DescribeApiEnvironmentStrategyRequest, cb?: (error: string, rep: DescribeApiEnvironmentStrategyResponse) => void): Promise<DescribeApiEnvironmentStrategyResponse>;
    /**
     * 本接口（DescribeApiAppsStatus）查询应用列表。
     */
    DescribeApiAppsStatus(req: DescribeApiAppsStatusRequest, cb?: (error: string, rep: DescribeApiAppsStatusResponse) => void): Promise<DescribeApiAppsStatusResponse>;
    /**
     * 本接口（DescribeApiApp）用于根据应用ID搜索应用。此接口已下线，如需使用功能请使用DescribeApiAppsStatus接口。
     */
    DescribeApiApp(req: DescribeApiAppRequest, cb?: (error: string, rep: DescribeApiAppResponse) => void): Promise<DescribeApiAppResponse>;
    /**
     * 本接口（ModifyUsagePlan）用于修改使用计划的名称，描述及 QPS。
     */
    ModifyUsagePlan(req: ModifyUsagePlanRequest, cb?: (error: string, rep: ModifyUsagePlanResponse) => void): Promise<ModifyUsagePlanResponse>;
    /**
     * 查询后端通道列表详情
     */
    DescribeUpstreams(req: DescribeUpstreamsRequest, cb?: (error: string, rep: DescribeUpstreamsResponse) => void): Promise<DescribeUpstreamsResponse>;
    /**
     * 本接口（DescribeApi）用于查询用户 API 网关的 API 接口的详细信息。​
     */
    DescribeApi(req: DescribeApiRequest, cb?: (error: string, rep: DescribeApiResponse) => void): Promise<DescribeApiResponse>;
    /**
     * 本接口（UnbindApiApp）用于解除应用和API绑定。
     */
    UnbindApiApp(req: UnbindApiAppRequest, cb?: (error: string, rep: UnbindApiAppResponse) => void): Promise<UnbindApiAppResponse>;
    /**
     * 本接口（DeleteUsagePlan）用于删除使用计划。
     */
    DeleteUsagePlan(req: DeleteUsagePlanRequest, cb?: (error: string, rep: DeleteUsagePlanResponse) => void): Promise<DeleteUsagePlanResponse>;
    /**
     * 本接口（CreateApiApp）用于创建应用。
     */
    CreateApiApp(req: CreateApiAppRequest, cb?: (error: string, rep: CreateApiAppResponse) => void): Promise<CreateApiAppResponse>;
    /**
     * 本接口（DescribeApiKeysStatus）用于查询密钥列表。
当用户创建了多个密钥对时，可使用本接口查询一个或多个 API 密钥信息。
     */
    DescribeApiKeysStatus(req: DescribeApiKeysStatusRequest, cb?: (error: string, rep: DescribeApiKeysStatusResponse) => void): Promise<DescribeApiKeysStatusResponse>;
    /**
     * 创建 API 文档
     */
    CreateAPIDoc(req: CreateAPIDocRequest, cb?: (error: string, rep: CreateAPIDocResponse) => void): Promise<CreateAPIDocResponse>;
    /**
     * 本接口（DescribeIPStrategyApisStatus）用于查询IP策略可以绑定的API列表。即服务下所有API和该策略已绑定API的差集。
     */
    DescribeIPStrategyApisStatus(req: DescribeIPStrategyApisStatusRequest, cb?: (error: string, rep: DescribeIPStrategyApisStatusResponse) => void): Promise<DescribeIPStrategyApisStatusResponse>;
    /**
     * 本接口（UnReleaseService）用于下线服务。
用户发布服务到某个环境后，此服务中的 API 方可被调用者进行调用，当用户需要将此服务从发布环境中下线时，可调用此 API。下线后的服务不可被调用。
     */
    UnReleaseService(req: UnReleaseServiceRequest, cb?: (error: string, rep: UnReleaseServiceResponse) => void): Promise<UnReleaseServiceResponse>;
    /**
     * 本接口（DescribeServiceEnvironmentReleaseHistory）用于查询服务环境的发布历史。
用户在创建好服务后需要发布到某个环境中才能进行使用，本接口用于查询一个服务某个环境的发布记录。
     */
    DescribeServiceEnvironmentReleaseHistory(req: DescribeServiceEnvironmentReleaseHistoryRequest, cb?: (error: string, rep: DescribeServiceEnvironmentReleaseHistoryResponse) => void): Promise<DescribeServiceEnvironmentReleaseHistoryResponse>;
    /**
     * 本接口（DeleteApi）用于删除已经创建的API。
     */
    DeleteApi(req: DeleteApiRequest, cb?: (error: string, rep: DeleteApiResponse) => void): Promise<DeleteApiResponse>;
    /**
     * 本接口（UpdateApiAppKey）用于更新应用密钥。
     */
    UpdateApiAppKey(req: UpdateApiAppKeyRequest, cb?: (error: string, rep: UpdateApiAppKeyResponse) => void): Promise<UpdateApiAppKeyResponse>;
    /**
     * 创建专享实例
     */
    CreateExclusiveInstances(req: CreateExclusiveInstancesRequest, cb?: (error: string, rep: CreateExclusiveInstancesResponse) => void): Promise<CreateExclusiveInstancesResponse>;
    /**
     * 本接口（DescribeServiceSubDomainMappings）用于查询自定义域名的路径映射。
API 网关可绑定自定义域名到服务，并且可以对自定义域名的路径进行映射，可自定义不同的路径映射到服务中的三个环境，本接口用于查询绑定服务的自定义域名的路径映射列表。
     */
    DescribeServiceSubDomainMappings(req: DescribeServiceSubDomainMappingsRequest, cb?: (error: string, rep: DescribeServiceSubDomainMappingsResponse) => void): Promise<DescribeServiceSubDomainMappingsResponse>;
    /**
     * 本接口（BindEnvironment）用于绑定使用计划到服务或API。
用户在发布服务到某个环境中后，如果 API 需要鉴权，还需要绑定使用计划才能进行调用，此接口用户将使用计划绑定到特定环境。
目前支持绑定使用计划到API，但是同一个服务不能同时存在绑定到服务的使用计划和绑定到API的使用计划，所以对已经绑定过服务级别使用计划的环境，请先使用 服务级别使用计划降级 接口进行降级操作。
     */
    BindEnvironment(req: BindEnvironmentRequest, cb?: (error: string, rep: BindEnvironmentResponse) => void): Promise<BindEnvironmentResponse>;
    /**
     * 修改 API 文档
     */
    ModifyAPIDoc(req: ModifyAPIDocRequest, cb?: (error: string, rep: ModifyAPIDocResponse) => void): Promise<ModifyAPIDocResponse>;
    /**
     * 本接口（UnBindSecretIds）用于为使用计划解绑密钥。
     */
    UnBindSecretIds(req: UnBindSecretIdsRequest, cb?: (error: string, rep: UnBindSecretIdsResponse) => void): Promise<UnBindSecretIdsResponse>;
    /**
     * 本接口（DescribeIPStrategy）用于查询IP策略详情。
     */
    DescribeIPStrategy(req: DescribeIPStrategyRequest, cb?: (error: string, rep: DescribeIPStrategyResponse) => void): Promise<DescribeIPStrategyResponse>;
    /**
     * 修改后端通道
     */
    ModifyUpstream(req: ModifyUpstreamRequest, cb?: (error: string, rep: ModifyUpstreamResponse) => void): Promise<ModifyUpstreamResponse>;
    /**
     * 本接口（DescribeServiceReleaseVersion）查询一个服务下面所有已经发布的版本列表。
用户在发布服务时，常有多个版本发布，可使用本接口查询已发布的版本。
     */
    DescribeServiceReleaseVersion(req: DescribeServiceReleaseVersionRequest, cb?: (error: string, rep: DescribeServiceReleaseVersionResponse) => void): Promise<DescribeServiceReleaseVersionResponse>;
    /**
     * 本接口（DescribeApisStatus）用于查看一个服务下的某个 API 或所有 API 列表及其相关信息。
     */
    DescribeApisStatus(req: DescribeApisStatusRequest, cb?: (error: string, rep: DescribeApisStatusResponse) => void): Promise<DescribeApisStatusResponse>;
    /**
     * 本接口（CreateApiKey）用于创建一对新的 API 密钥。
     */
    CreateApiKey(req: CreateApiKeyRequest, cb?: (error: string, rep: CreateApiKeyResponse) => void): Promise<CreateApiKeyResponse>;
    /**
     * 本接口（ModifySubDomain）用于修改服务的自定义域名设置中的路径映射，可以修改绑定自定义域名之前的路径映射规则。
     */
    ModifySubDomain(req: ModifySubDomainRequest, cb?: (error: string, rep: ModifySubDomainResponse) => void): Promise<ModifySubDomainResponse>;
    /**
     * 本接口（DeleteIPStrategy）用于删除服务IP策略。
     */
    DeleteIPStrategy(req: DeleteIPStrategyRequest, cb?: (error: string, rep: DeleteIPStrategyResponse) => void): Promise<DeleteIPStrategyResponse>;
    /**
     * 本接口（ReleaseService）用于发布服务。
API 网关的服务创建后，需要发布到某个环境方生效后，使用者才能进行调用，此接口用于发布服务到环境，如 release 环境。
     */
    ReleaseService(req: ReleaseServiceRequest, cb?: (error: string, rep: ReleaseServiceResponse) => void): Promise<ReleaseServiceResponse>;
    /**
     * 本接口（DescribeExclusiveInstances）用于查询独享实例列表信息。
     */
    DescribeExclusiveInstances(req: DescribeExclusiveInstancesRequest, cb?: (error: string, rep: DescribeExclusiveInstancesResponse) => void): Promise<DescribeExclusiveInstancesResponse>;
    /**
     * 本接口（DescribeService）用于查询一个服务的详细信息、包括服务的描述、域名、协议、创建时间、发布情况等信息。
     */
    DescribeService(req: DescribeServiceRequest, cb?: (error: string, rep: DescribeServiceResponse) => void): Promise<DescribeServiceResponse>;
    /**
     * 创建API网关插件。
     */
    CreatePlugin(req: CreatePluginRequest, cb?: (error: string, rep: CreatePluginResponse) => void): Promise<CreatePluginResponse>;
    /**
     * 展示插件列表和详情，支持分页，支持按照插件类型查询，支持按照插件ID批量查询，支持按照插件名称查询。
     */
    DescribePlugins(req: DescribePluginsRequest, cb?: (error: string, rep: DescribePluginsResponse) => void): Promise<DescribePluginsResponse>;
    /**
     * 本接口（DeleteApiKey）用于删除一对 API 密钥。
     */
    DeleteApiKey(req: DeleteApiKeyRequest, cb?: (error: string, rep: DeleteApiKeyResponse) => void): Promise<DeleteApiKeyResponse>;
    /**
     * 本接口（CreateApi）用于创建 API 接口，创建 API 前，用户需要先创建服务，每个 API 都有自己归属的服务。
     */
    CreateApi(req: CreateApiRequest, cb?: (error: string, rep: CreateApiResponse) => void): Promise<CreateApiResponse>;
    /**
     * 本接口（DescribeExclusiveInstanceDetail）用于查询独享实例详情信息。
     */
    DescribeExclusiveInstanceDetail(req: DescribeExclusiveInstanceDetailRequest, cb?: (error: string, rep: DescribeExclusiveInstanceDetailResponse) => void): Promise<DescribeExclusiveInstanceDetailResponse>;
    /**
     * 绑定插件到API上。
     */
    AttachPlugin(req: AttachPluginRequest, cb?: (error: string, rep: AttachPluginResponse) => void): Promise<AttachPluginResponse>;
    /**
     * 本接口（BindApiApp）用于绑定应用到API。
     */
    BindApiApp(req: BindApiAppRequest, cb?: (error: string, rep: BindApiAppResponse) => void): Promise<BindApiAppResponse>;
    /**
     * 本接口（DescribeApiBindApiAppsStatus）查询Api绑定的应用列表。
     */
    DescribeApiBindApiAppsStatus(req: DescribeApiBindApiAppsStatusRequest, cb?: (error: string, rep: DescribeApiBindApiAppsStatusResponse) => void): Promise<DescribeApiBindApiAppsStatusResponse>;
    /**
     * 本接口DescribeLogSearch用于搜索日志
     */
    DescribeLogSearch(req: DescribeLogSearchRequest, cb?: (error: string, rep: DescribeLogSearchResponse) => void): Promise<DescribeLogSearchResponse>;
    /**
     * 本接口（DeleteService）用于删除 API 网关中某个服务。
     */
    DeleteService(req: DeleteServiceRequest, cb?: (error: string, rep: DeleteServiceResponse) => void): Promise<DeleteServiceResponse>;
    /**
     * 提供增量更新API能力，主要是给程序调用（区别于ModifyApi，该接口是需要传入API的全量参数，对console使用较友好）
     */
    ModifyApiIncrement(req: ModifyApiIncrementRequest, cb?: (error: string, rep: ModifyApiIncrementResponse) => void): Promise<ModifyApiIncrementResponse>;
    /**
     * 本接口（DescribeApiUsagePlan）用于查询服务中 API 使用计划详情。
服务若需要鉴权限流生效，则需要绑定使用计划到此服务中，本接口用于查询绑定到一个服务及其中 API 的所有使用计划。
     */
    DescribeApiUsagePlan(req: DescribeApiUsagePlanRequest, cb?: (error: string, rep: DescribeApiUsagePlanResponse) => void): Promise<DescribeApiUsagePlanResponse>;
    /**
     * 获取专享实例网络配置列表
     */
    DescribeInstancesNetworkConfig(req: DescribeInstancesNetworkConfigRequest, cb?: (error: string, rep: DescribeInstancesNetworkConfigResponse) => void): Promise<DescribeInstancesNetworkConfigResponse>;
    /**
     * 本接口（DescribeIPStrategysStatus）用于查询服务IP策略列表，因为接口名拼写错误，已不推荐使用，请优先使用DescribeIPStrategiesStatus接口。
     */
    DescribeIPStrategysStatus(req: DescribeIPStrategysStatusRequest, cb?: (error: string, rep: DescribeIPStrategysStatusResponse) => void): Promise<DescribeIPStrategysStatusResponse>;
    /**
     * 本接口（ModifyServiceEnvironmentStrategy）用于修改服务限流策略
     */
    ModifyServiceEnvironmentStrategy(req: ModifyServiceEnvironmentStrategyRequest, cb?: (error: string, rep: ModifyServiceEnvironmentStrategyResponse) => void): Promise<ModifyServiceEnvironmentStrategyResponse>;
    /**
     * 本接口（ModifyExclusiveInstance）用于修改独享实例信息。​
     */
    ModifyExclusiveInstance(req: ModifyExclusiveInstanceRequest, cb?: (error: string, rep: ModifyExclusiveInstanceResponse) => void): Promise<ModifyExclusiveInstanceResponse>;
    /**
     * 用于创建后端通道
     */
    CreateUpstream(req: CreateUpstreamRequest, cb?: (error: string, rep: CreateUpstreamResponse) => void): Promise<CreateUpstreamResponse>;
    /**
     * 本接口（DescribeUsagePlanEnvironments）用于查询使用计划绑定的环境列表。
用户在绑定了某个使用计划到环境后，可使用本接口查询这个使用计划绑定的所有服务的环境。
     */
    DescribeUsagePlanEnvironments(req: DescribeUsagePlanEnvironmentsRequest, cb?: (error: string, rep: DescribeUsagePlanEnvironmentsResponse) => void): Promise<DescribeUsagePlanEnvironmentsResponse>;
    /**
     * 展示插件详情，支持按照插件ID进行。
     */
    DescribePlugin(req: DescribePluginRequest, cb?: (error: string, rep: DescribePluginResponse) => void): Promise<DescribePluginResponse>;
    /**
     * 解除插件与API绑定
     */
    DetachPlugin(req: DetachPluginRequest, cb?: (error: string, rep: DetachPluginResponse) => void): Promise<DetachPluginResponse>;
    /**
     * 本接口（DescribeServiceEnvironmentList）用于查询一个服务的环境列表，可查询到此服务下所有环境及其状态。
     */
    DescribeServiceEnvironmentList(req: DescribeServiceEnvironmentListRequest, cb?: (error: string, rep: DescribeServiceEnvironmentListResponse) => void): Promise<DescribeServiceEnvironmentListResponse>;
    /**
     * 删除后端通道，需要注意有API绑定时，不允许删除
     */
    DeleteUpstream(req: DeleteUpstreamRequest, cb?: (error: string, rep: DeleteUpstreamResponse) => void): Promise<DeleteUpstreamResponse>;
    /**
     * 本接口（UnBindSubDomain）用于解绑自定义域名。
用户使用 API 网关绑定了自定义域名到服务中后，若想要解绑此自定义域名，可使用此接口。
     */
    UnBindSubDomain(req: UnBindSubDomainRequest, cb?: (error: string, rep: UnBindSubDomainResponse) => void): Promise<UnBindSubDomainResponse>;
    /**
     * 本接口（DescribeServiceEnvironmentStrategy）用于展示服务限流策略。
     */
    DescribeServiceEnvironmentStrategy(req: DescribeServiceEnvironmentStrategyRequest, cb?: (error: string, rep: DescribeServiceEnvironmentStrategyResponse) => void): Promise<DescribeServiceEnvironmentStrategyResponse>;
    /**
     * 本接口（DeleteServiceSubDomainMapping）用于删除服务中某个环境的自定义域名映射。
当用户使用自定义域名，并使用了自定义映射时，可使用此接口。但需注意，若删除了所有环境的映射时，调用此 API 均会返回失败。
     */
    DeleteServiceSubDomainMapping(req: DeleteServiceSubDomainMappingRequest, cb?: (error: string, rep: DeleteServiceSubDomainMappingResponse) => void): Promise<DeleteServiceSubDomainMappingResponse>;
    /**
     * 本接口（DescribeApiKey）用于查询密钥详情。
用户在创建密钥后，可用此接口查询一个 API 密钥的详情，该接口会显示密钥 Key。
     */
    DescribeApiKey(req: DescribeApiKeyRequest, cb?: (error: string, rep: DescribeApiKeyResponse) => void): Promise<DescribeApiKeyResponse>;
    /**
     * 查询后端通道所绑定的API列表
     */
    DescribeUpstreamBindApis(req: DescribeUpstreamBindApisRequest, cb?: (error: string, rep: DescribeUpstreamBindApisResponse) => void): Promise<DescribeUpstreamBindApisResponse>;
    /**
     * 本接口（ImportOpenApi）用于将OpenAPI规范定义的API导入到API网关。
     */
    ImportOpenApi(req: ImportOpenApiRequest, cb?: (error: string, rep: ImportOpenApiResponse) => void): Promise<ImportOpenApiResponse>;
    /**
     * 本接口（ModifyService）用于修改服务的相关信息。当服务创建后，服务的名称、描述和服务类型均可被修改。
     */
    ModifyService(req: ModifyServiceRequest, cb?: (error: string, rep: ModifyServiceResponse) => void): Promise<ModifyServiceResponse>;
    /**
     * 本接口（BindSecretIds）用于为使用计划绑定密钥。
将密钥绑定到某个使用计划，并将此使用计划绑定到某个服务发布的环境上，调用者方可使用此密钥调用这个服务中的 API，可使用本接口为使用计划绑定密钥。
     */
    BindSecretIds(req: BindSecretIdsRequest, cb?: (error: string, rep: BindSecretIdsResponse) => void): Promise<BindSecretIdsResponse>;
    /**
     * 本接口（DescribeApiForApiApp）用于应用使用者查询部署于 API 网关的 API 接口的详细信息。​
     */
    DescribeApiForApiApp(req: DescribeApiForApiAppRequest, cb?: (error: string, rep: DescribeApiForApiAppResponse) => void): Promise<DescribeApiForApiAppResponse>;
    /**
     * 构建 API 文档
     */
    BuildAPIDoc(req: BuildAPIDocRequest, cb?: (error: string, rep: BuildAPIDocResponse) => void): Promise<BuildAPIDocResponse>;
    /**
     * 本接口（ModifyApiEnvironmentStrategy）用于修改API限流策略
     */
    ModifyApiEnvironmentStrategy(req: ModifyApiEnvironmentStrategyRequest, cb?: (error: string, rep: ModifyApiEnvironmentStrategyResponse) => void): Promise<ModifyApiEnvironmentStrategyResponse>;
    /**
     * 本接口（ModifyApi）用于修改 API 接口，可调用此接口对已经配置的 API 接口进行编辑修改。修改后的 API 需要重新发布 API 所在的服务到对应环境方能生效。
     */
    ModifyApi(req: ModifyApiRequest, cb?: (error: string, rep: ModifyApiResponse) => void): Promise<ModifyApiResponse>;
    /**
     * 本接口（DemoteServiceUsagePlan）用于将某个服务在某个环境的使用计划，降级到API上。
如果服务内没有API不允许进行此操作。
如果当前环境没有发布，不允许进行此操作。
     */
    DemoteServiceUsagePlan(req: DemoteServiceUsagePlanRequest, cb?: (error: string, rep: DemoteServiceUsagePlanResponse) => void): Promise<DemoteServiceUsagePlanResponse>;
    /**
     * 本接口（DescribeServiceSubDomains）用于查询自定义域名列表。
API 网关可绑定自定义域名到服务，用于服务调用。此接口用于查询用户绑定在服务的自定义域名列表。
     */
    DescribeServiceSubDomains(req: DescribeServiceSubDomainsRequest, cb?: (error: string, rep: DescribeServiceSubDomainsResponse) => void): Promise<DescribeServiceSubDomainsResponse>;
    /**
     * 本接口（DescribeServiceUsagePlan）用于查询服务使用计划详情。
服务若需要鉴权限流生效，则需要绑定使用计划到此服务中，本接口用于查询绑定到一个服务的所有使用计划。
     */
    DescribeServiceUsagePlan(req: DescribeServiceUsagePlanRequest, cb?: (error: string, rep: DescribeServiceUsagePlanResponse) => void): Promise<DescribeServiceUsagePlanResponse>;
    /**
     * Get the list of supported regions for dedicated instances
     */
    DescribeExclusiveInstanceRegions(req?: DescribeExclusiveInstanceRegionsRequest, cb?: (error: string, rep: DescribeExclusiveInstanceRegionsResponse) => void): Promise<DescribeExclusiveInstanceRegionsResponse>;
    /**
     * 本接口（UpdateApiKey）用于更换用户已创建的一对 API 密钥。
     */
    UpdateApiKey(req: UpdateApiKeyRequest, cb?: (error: string, rep: UpdateApiKeyResponse) => void): Promise<UpdateApiKeyResponse>;
    /**
     * 删除API网关插件
     */
    DeletePlugin(req: DeletePluginRequest, cb?: (error: string, rep: DeletePluginResponse) => void): Promise<DeletePluginResponse>;
    /**
     * 本接口（BindIPStrategy）用于API绑定IP策略。
     */
    BindIPStrategy(req: BindIPStrategyRequest, cb?: (error: string, rep: BindIPStrategyResponse) => void): Promise<BindIPStrategyResponse>;
    /**
     * 本接口（EnableApiKey）用于启动一对被禁用的 API 密钥。
     */
    EnableApiKey(req: EnableApiKeyRequest, cb?: (error: string, rep: EnableApiKeyResponse) => void): Promise<EnableApiKeyResponse>;
    /**
     * 本接口（CreateIPStrategy）用于创建服务IP策略。
     */
    CreateIPStrategy(req: CreateIPStrategyRequest, cb?: (error: string, rep: CreateIPStrategyResponse) => void): Promise<CreateIPStrategyResponse>;
    /**
     * 删除 API 文档
     */
    DeleteAPIDoc(req: DeleteAPIDocRequest, cb?: (error: string, rep: DeleteAPIDocResponse) => void): Promise<DeleteAPIDocResponse>;
    /**
     * 查询专享实例列表（新）
     */
    DescribeExclusiveInstancesStatus(req: DescribeExclusiveInstancesStatusRequest, cb?: (error: string, rep: DescribeExclusiveInstancesStatusResponse) => void): Promise<DescribeExclusiveInstancesStatusResponse>;
    /**
     * 本接口（UnBindEnvironment）用于将使用计划从特定环境解绑。
     */
    UnBindEnvironment(req: UnBindEnvironmentRequest, cb?: (error: string, rep: UnBindEnvironmentResponse) => void): Promise<UnBindEnvironmentResponse>;
    /**
     * 本接口（ModifyApiApp）用于修改已经创建的应用。
     */
    ModifyApiApp(req: ModifyApiAppRequest, cb?: (error: string, rep: ModifyApiAppResponse) => void): Promise<ModifyApiAppResponse>;
    /**
     * 本接口（DescribeUsagePlan）用于查询一个使用计划的详细信息，包括名称、QPS、创建时间绑定的环境等。
     */
    DescribeUsagePlan(req: DescribeUsagePlanRequest, cb?: (error: string, rep: DescribeUsagePlanResponse) => void): Promise<DescribeUsagePlanResponse>;
    /**
     * 本接口（BindSubDomain）用于绑定自定义域名到服务。
API 网关中每个服务都会提供一个默认的域名供用户调用，但当用户想使用自己的已有域名时，也可以将自定义域名绑定到此服务，在做好备案、与默认域名的 CNAME 后，可直接调用自定义域名。
     */
    BindSubDomain(req: BindSubDomainRequest, cb?: (error: string, rep: BindSubDomainResponse) => void): Promise<BindSubDomainResponse>;
}
