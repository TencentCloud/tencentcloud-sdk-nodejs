import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { UpdateAliasRequest, ListTriggersResponse, ListAliasesResponse, DeleteLayerVersionResponse, DeleteFunctionVersionRequest, GetReservedConcurrencyConfigResponse, UpdateCustomDomainResponse, DeleteProvisionedConcurrencyConfigResponse, GetCustomDomainResponse, PutProvisionedConcurrencyConfigResponse, UpdateFunctionConfigurationResponse, PublishLayerVersionResponse, ListCustomDomainsResponse, DeleteProvisionedConcurrencyConfigRequest, DeleteReservedConcurrencyConfigResponse, GetCustomDomainRequest, GetAliasResponse, UpdateAliasResponse, GetFunctionLogsRequest, GetRequestStatusRequest, ListLayerVersionsResponse, DeleteFunctionRequest, CopyFunctionResponse, InvokeFunctionResponse, GetFunctionRequest, ListNamespacesRequest, PublishVersionRequest, DeleteAliasRequest, ListVersionByFunctionResponse, GetAliasRequest, CreateNamespaceResponse, UpdateFunctionCodeRequest, UpdateFunctionConfigurationRequest, DeleteReservedConcurrencyConfigRequest, GetFunctionEventInvokeConfigResponse, GetProvisionedConcurrencyConfigRequest, UpdateCustomDomainRequest, TerminateAsyncEventRequest, DeleteCustomDomainResponse, ListLayersRequest, CopyFunctionRequest, DeleteNamespaceResponse, DeleteNamespaceRequest, ListFunctionsRequest, CreateTriggerRequest, UpdateNamespaceResponse, GetAccountResponse, DeleteFunctionResponse, ListAsyncEventsRequest, CreateAliasResponse, CreateFunctionRequest, GetAccountRequest, PutTotalConcurrencyConfigResponse, GetAsyncEventStatusRequest, DeleteAliasResponse, PublishVersionResponse, TerminateAsyncEventResponse, GetFunctionAddressRequest, InvokeResponse, InvokeRequest, CreateAliasRequest, UpdateFunctionEventInvokeConfigResponse, PutReservedConcurrencyConfigRequest, ListLayerVersionsRequest, CreateTriggerResponse, PublishLayerVersionRequest, CreateNamespaceRequest, UpdateTriggerStatusResponse, UpdateFunctionEventInvokeConfigRequest, DeleteLayerVersionRequest, GetFunctionResponse, GetFunctionEventInvokeConfigRequest, PutTotalConcurrencyConfigRequest, DeleteCustomDomainRequest, UpdateNamespaceRequest, GetLayerVersionResponse, GetRequestStatusResponse, PutReservedConcurrencyConfigResponse, InvokeFunctionRequest, GetProvisionedConcurrencyConfigResponse, DeleteFunctionVersionResponse, UpdateTriggerStatusRequest, ListLayersResponse, CreateCustomDomainRequest, CreateCustomDomainResponse, ListFunctionsResponse, GetAsyncEventStatusResponse, ListTriggersRequest, UpdateTriggerResponse, CreateFunctionResponse, GetReservedConcurrencyConfigRequest, PutProvisionedConcurrencyConfigRequest, ListAliasesRequest, ListCustomDomainsRequest, GetLayerVersionRequest, GetFunctionLogsResponse, DeleteTriggerResponse, DeleteTriggerRequest, GetFunctionAddressResponse, ListAsyncEventsResponse, ListNamespacesResponse, UpdateFunctionCodeResponse, UpdateTriggerRequest, ListVersionByFunctionRequest } from "./scf_models";
/**
 * scf client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 更新别名的配置
     */
    UpdateAlias(req: UpdateAliasRequest, cb?: (error: string, rep: UpdateAliasResponse) => void): Promise<UpdateAliasResponse>;
    /**
     * 更新命名空间
     */
    UpdateNamespace(req: UpdateNamespaceRequest, cb?: (error: string, rep: UpdateNamespaceResponse) => void): Promise<UpdateNamespaceResponse>;
    /**
     * SCF同步调用函数接口。
     */
    InvokeFunction(req: InvokeFunctionRequest, cb?: (error: string, rep: InvokeFunctionResponse) => void): Promise<InvokeFunctionResponse>;
    /**
     * 该接口根据传入参数删除函数。
     */
    DeleteFunction(req: DeleteFunctionRequest, cb?: (error: string, rep: DeleteFunctionResponse) => void): Promise<DeleteFunctionResponse>;
    /**
     * 终止正在运行中的函数异步事件
     */
    TerminateAsyncEvent(req: TerminateAsyncEventRequest, cb?: (error: string, rep: TerminateAsyncEventResponse) => void): Promise<TerminateAsyncEventResponse>;
    /**
     * 获取函数触发器列表
     */
    ListTriggers(req: ListTriggersRequest, cb?: (error: string, rep: ListTriggersResponse) => void): Promise<ListTriggersResponse>;
    /**
     * 该接口根据传入的参数查询函数的版本。
     */
    ListVersionByFunction(req: ListVersionByFunctionRequest, cb?: (error: string, rep: ListVersionByFunctionResponse) => void): Promise<ListVersionByFunctionResponse>;
    /**
     * 获取层版本详细信息，包括用于下载层中文件的链接。
     */
    GetLayerVersion(req: GetLayerVersionRequest, cb?: (error: string, rep: GetLayerVersionResponse) => void): Promise<GetLayerVersionResponse>;
    /**
     * 该接口根据参数输入设置新的触发方式。
     */
    CreateTrigger(req: CreateTriggerRequest, cb?: (error: string, rep: CreateTriggerResponse) => void): Promise<CreateTriggerResponse>;
    /**
     * 该接口根据传入的参数创建命名空间。
     */
    CreateNamespace(req: CreateNamespaceRequest, cb?: (error: string, rep: CreateNamespaceResponse) => void): Promise<CreateNamespaceResponse>;
    /**
     * 复制一个函数，您可以选择将复制出的新函数放置在特定的Region和Namespace。
注：本接口**不会**复制函数的以下对象或属性：
1. 函数的触发器
2. 除了$LATEST以外的其它版本
3. 函数配置的日志投递到的CLS目标。

如有需要，您可以在复制后手动配置新函数。
     */
    CopyFunction(req: CopyFunctionRequest, cb?: (error: string, rep: CopyFunctionResponse) => void): Promise<CopyFunctionResponse>;
    /**
     * 该接口根据参数传入删除已有的触发方式。
     */
    DeleteTrigger(req: DeleteTriggerRequest, cb?: (error: string, rep: DeleteTriggerResponse) => void): Promise<DeleteTriggerResponse>;
    /**
     * 返回一个函数下的全部别名，可以根据特定函数版本过滤。
     */
    ListAliases(req: ListAliasesRequest, cb?: (error: string, rep: ListAliasesResponse) => void): Promise<ListAliasesResponse>;
    /**
     * 该接口根据传入的参数删除命名空间。
     */
    DeleteNamespace(req: DeleteNamespaceRequest, cb?: (error: string, rep: DeleteNamespaceResponse) => void): Promise<DeleteNamespaceResponse>;
    /**
     * 获取函数或函数某一版本的预置并发详情。
     */
    GetProvisionedConcurrencyConfig(req: GetProvisionedConcurrencyConfigRequest, cb?: (error: string, rep: GetProvisionedConcurrencyConfigResponse) => void): Promise<GetProvisionedConcurrencyConfigResponse>;
    /**
     * 使用给定的zip文件或cos对象创建一个层的新版本，每次使用相同的层的名称调用本接口，都会生成一个新版本。
     */
    PublishLayerVersion(req: PublishLayerVersionRequest, cb?: (error: string, rep: PublishLayerVersionResponse) => void): Promise<PublishLayerVersionResponse>;
    /**
     * 遍历域名列表信息
     */
    ListCustomDomains(req: ListCustomDomainsRequest, cb?: (error: string, rep: ListCustomDomainsResponse) => void): Promise<ListCustomDomainsResponse>;
    /**
     * 删除函数版本的预置并发配置。
     */
    DeleteProvisionedConcurrencyConfig(req: DeleteProvisionedConcurrencyConfigRequest, cb?: (error: string, rep: DeleteProvisionedConcurrencyConfigResponse) => void): Promise<DeleteProvisionedConcurrencyConfigResponse>;
    /**
     * 该接口用于用户发布新版本函数。
     */
    PublishVersion(req: PublishVersionRequest, cb?: (error: string, rep: PublishVersionResponse) => void): Promise<PublishVersionResponse>;
    /**
     * 删除指定层的指定版本，被删除的版本无法再关联到函数上，但不会影响正在引用这个层的函数。
     */
    DeleteLayerVersion(req: DeleteLayerVersionRequest, cb?: (error: string, rep: DeleteLayerVersionResponse) => void): Promise<DeleteLayerVersionResponse>;
    /**
     * 该接口获取某个函数的详细信息，包括名称、代码、处理方法、关联触发器和超时时间等字段。
     */
    GetFunction(req: GetFunctionRequest, cb?: (error: string, rep: GetFunctionResponse) => void): Promise<GetFunctionResponse>;
    /**
     * 删除一个函数版本的别名
     */
    DeleteAlias(req: DeleteAliasRequest, cb?: (error: string, rep: DeleteAliasResponse) => void): Promise<DeleteAliasResponse>;
    /**
     * 获取函数异步执行事件状态，事件状态保留 3 * 24 小时（从事件完成开始计时）。
     */
    GetAsyncEventStatus(req: GetAsyncEventStatusRequest, cb?: (error: string, rep: GetAsyncEventStatusResponse) => void): Promise<GetAsyncEventStatusResponse>;
    /**
     * 修改账号并发限制配额
     */
    PutTotalConcurrencyConfig(req: PutTotalConcurrencyConfigRequest, cb?: (error: string, rep: PutTotalConcurrencyConfigResponse) => void): Promise<PutTotalConcurrencyConfigResponse>;
    /**
     * 更新触发器状态的值
     */
    UpdateTriggerStatus(req: UpdateTriggerStatusRequest, cb?: (error: string, rep: UpdateTriggerStatusResponse) => void): Promise<UpdateTriggerStatusResponse>;
    /**
     * 该接口根据传入参数删除函数的指定版本。
     */
    DeleteFunctionVersion(req: DeleteFunctionVersionRequest, cb?: (error: string, rep: DeleteFunctionVersionResponse) => void): Promise<DeleteFunctionVersionResponse>;
    /**
     * 该接口根据指定的日志查询条件返回函数运行日志。该接口已下线，查询函数请求运行的返回信息，请使用 [GetRequestStatus](https://cloud.tencent.com/document/product/583/65348)。查询函数运行日志，请参考[日志检索教程](https://cloud.tencent.com/document/product/583/52637)。
     */
    GetFunctionLogs(req: GetFunctionLogsRequest, cb?: (error: string, rep: GetFunctionLogsResponse) => void): Promise<GetFunctionLogsResponse>;
    /**
     * 为某个函数版本创建一个别名，您可以使用别名来标记特定的函数版本，如DEV/RELEASE版本，也可以随时修改别名指向的版本。
一个别名必须指向一个主版本，此外还可以同时指向一个附加版本。调用函数时指定特定的别名，则请求会被发送到别名指向的版本上，您可以配置请求发送到主版本和附加版本的比例。
     */
    CreateAlias(req: CreateAliasRequest, cb?: (error: string, rep: CreateAliasResponse) => void): Promise<CreateAliasResponse>;
    /**
     * 设置函数某一非$LATEST版本的预置并发。
     */
    PutProvisionedConcurrencyConfig(req: PutProvisionedConcurrencyConfigRequest, cb?: (error: string, rep: PutProvisionedConcurrencyConfigResponse) => void): Promise<PutProvisionedConcurrencyConfigResponse>;
    /**
     * 删除自定义域名
     */
    DeleteCustomDomain(req: DeleteCustomDomainRequest, cb?: (error: string, rep: DeleteCustomDomainResponse) => void): Promise<DeleteCustomDomainResponse>;
    /**
     * 更新函数的异步重试配置，包括重试次数和消息保留时间
     */
    UpdateFunctionEventInvokeConfig(req: UpdateFunctionEventInvokeConfigRequest, cb?: (error: string, rep: UpdateFunctionEventInvokeConfigResponse) => void): Promise<UpdateFunctionEventInvokeConfigResponse>;
    /**
     * 获取函数异步重试配置，包括重试次数和消息保留时间
     */
    GetFunctionEventInvokeConfig(req: GetFunctionEventInvokeConfigRequest, cb?: (error: string, rep: GetFunctionEventInvokeConfigResponse) => void): Promise<GetFunctionEventInvokeConfigResponse>;
    /**
     * 返回全部层的列表，其中包含了每个层最新版本的信息，可以通过适配运行时进行过滤。
     */
    ListLayers(req: ListLayersRequest, cb?: (error: string, rep: ListLayersResponse) => void): Promise<ListLayersResponse>;
    /**
     * 拉取函数异步事件列表
     */
    ListAsyncEvents(req: ListAsyncEventsRequest, cb?: (error: string, rep: ListAsyncEventsResponse) => void): Promise<ListAsyncEventsResponse>;
    /**
     * 返回指定层的全部版本的信息
     */
    ListLayerVersions(req: ListLayerVersionsRequest, cb?: (error: string, rep: ListLayerVersionsResponse) => void): Promise<ListLayerVersionsResponse>;
    /**
     * 支持触发器配置更新。
默认接口请求频率限制：20次/秒

注意：目前只支持timer触发器和ckafka触发器更新！

timer触发器和ckafka触发器支持更新字段有：Enable、TriggerDesc、Description、CustomArgument。

timer触发器TriggerDesc支持5段式和7段式的更新。

ckafka触发器TriggerDesc支持Retry、MaxMsgNum、TimeOut参数更新，不传值表示原值不变，传值不能为空。

Enable 触发器开启或关闭，传参为OPEN为开启，CLOSE为关闭。不传值表示原值不变，传值不能为空。

Description 触发器描述，不传值保持原值不变，传值为空则为空。

CustomArgument 触发器用户附加信息（注意：只有timer触发器展示），不传值保持原值不变，传值为空则为空。
     */
    UpdateTrigger(req: UpdateTriggerRequest, cb?: (error: string, rep: UpdateTriggerResponse) => void): Promise<UpdateTriggerResponse>;
    /**
     * 创建自定义域名
     */
    CreateCustomDomain(req: CreateCustomDomainRequest, cb?: (error: string, rep: CreateCustomDomainResponse) => void): Promise<CreateCustomDomainResponse>;
    /**
     * 该接口根据传入的查询参数返回相关函数信息。
     */
    ListFunctions(req: ListFunctionsRequest, cb?: (error: string, rep: ListFunctionsResponse) => void): Promise<ListFunctionsResponse>;
    /**
     * 该接口根据传入参数更新函数配置。
     */
    UpdateFunctionConfiguration(req: UpdateFunctionConfigurationRequest, cb?: (error: string, rep: UpdateFunctionConfigurationResponse) => void): Promise<UpdateFunctionConfigurationResponse>;
    /**
     * 设置函数最大独占配额
     */
    PutReservedConcurrencyConfig(req: PutReservedConcurrencyConfigRequest, cb?: (error: string, rep: PutReservedConcurrencyConfigResponse) => void): Promise<PutReservedConcurrencyConfigResponse>;
    /**
     * 获取账户信息
     */
    GetAccount(req?: GetAccountRequest, cb?: (error: string, rep: GetAccountResponse) => void): Promise<GetAccountResponse>;
    /**
     * 删除函数的最大独占配额配置。
     */
    DeleteReservedConcurrencyConfig(req: DeleteReservedConcurrencyConfigRequest, cb?: (error: string, rep: DeleteReservedConcurrencyConfigResponse) => void): Promise<DeleteReservedConcurrencyConfigResponse>;
    /**
     * 该接口用于运行函数。
     */
    Invoke(req: InvokeRequest, cb?: (error: string, rep: InvokeResponse) => void): Promise<InvokeResponse>;
    /**
     * 该接口用于获取函数代码包的下载地址。
     */
    GetFunctionAddress(req: GetFunctionAddressRequest, cb?: (error: string, rep: GetFunctionAddressResponse) => void): Promise<GetFunctionAddressResponse>;
    /**
     * 获取别名的详细信息，包括名称、描述、版本、路由信息等。
     */
    GetAlias(req: GetAliasRequest, cb?: (error: string, rep: GetAliasResponse) => void): Promise<GetAliasResponse>;
    /**
     * 获取函数的最大独占配额详情。
     */
    GetReservedConcurrencyConfig(req: GetReservedConcurrencyConfigRequest, cb?: (error: string, rep: GetReservedConcurrencyConfigResponse) => void): Promise<GetReservedConcurrencyConfigResponse>;
    /**
     * 查看云函数自定义域名详情
     */
    GetCustomDomain(req: GetCustomDomainRequest, cb?: (error: string, rep: GetCustomDomainResponse) => void): Promise<GetCustomDomainResponse>;
    /**
     * 更新自定义域名相关配置
     */
    UpdateCustomDomain(req: UpdateCustomDomainRequest, cb?: (error: string, rep: UpdateCustomDomainResponse) => void): Promise<UpdateCustomDomainResponse>;
    /**
     * 该接口根据传入参数创建新的函数。
     */
    CreateFunction(req: CreateFunctionRequest, cb?: (error: string, rep: CreateFunctionResponse) => void): Promise<CreateFunctionResponse>;
    /**
     * 列出命名空间列表
     */
    ListNamespaces(req: ListNamespacesRequest, cb?: (error: string, rep: ListNamespacesResponse) => void): Promise<ListNamespacesResponse>;
    /**
     * 该接口根据传入参数更新函数代码。
     */
    UpdateFunctionCode(req: UpdateFunctionCodeRequest, cb?: (error: string, rep: UpdateFunctionCodeResponse) => void): Promise<UpdateFunctionCodeResponse>;
    /**
     * 该接口根据指定的查询条件返回函数单个请求运行状态。
     */
    GetRequestStatus(req: GetRequestStatusRequest, cb?: (error: string, rep: GetRequestStatusResponse) => void): Promise<GetRequestStatusResponse>;
}
