import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { ListTriggersResponse, ListAliasesResponse, DeleteLayerVersionResponse, GetAliasResponse, UpdateFunctionConfigurationResponse, PublishLayerVersionResponse, UpdateAliasRequest, UpdateAliasResponse, GetFunctionLogsRequest, ListLayerVersionsResponse, DeleteFunctionRequest, CopyFunctionResponse, GetFunctionRequest, ListNamespacesRequest, PublishVersionRequest, DeleteAliasRequest, ListVersionByFunctionResponse, GetAliasRequest, CreateNamespaceResponse, UpdateFunctionCodeRequest, UpdateFunctionConfigurationRequest, UpdateNamespaceResponse, ListLayersRequest, CopyFunctionRequest, DeleteNamespaceResponse, DeleteNamespaceRequest, ListFunctionsRequest, CreateTriggerRequest, ListLayersResponse, DeleteFunctionResponse, CreateAliasResponse, CreateFunctionRequest, DeleteAliasResponse, PublishVersionResponse, GetFunctionAddressRequest, InvokeResponse, InvokeRequest, CreateAliasRequest, ListLayerVersionsRequest, CreateTriggerResponse, PublishLayerVersionRequest, CreateNamespaceRequest, DeleteLayerVersionRequest, GetFunctionResponse, UpdateNamespaceRequest, GetLayerVersionResponse, ListVersionByFunctionRequest, ListFunctionsResponse, ListTriggersRequest, CreateFunctionResponse, ListAliasesRequest, GetLayerVersionRequest, GetFunctionLogsResponse, DeleteTriggerResponse, DeleteTriggerRequest, GetFunctionAddressResponse, ListNamespacesResponse, UpdateFunctionCodeResponse } from "./scf_models";
/**
 * scf client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 该接口根据传入参数删除函数。
     */
    DeleteFunction(req: DeleteFunctionRequest, cb?: (error: string, rep: DeleteFunctionResponse) => void): Promise<DeleteFunctionResponse>;
    /**
     * 更新别名的配置
     */
    UpdateAlias(req: UpdateAliasRequest, cb?: (error: string, rep: UpdateAliasResponse) => void): Promise<UpdateAliasResponse>;
    /**
     * 获取函数触发器列表
     */
    ListTriggers(req: ListTriggersRequest, cb?: (error: string, rep: ListTriggersResponse) => void): Promise<ListTriggersResponse>;
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
     * 该接口根据指定的日志查询条件返回函数运行日志。
     */
    GetFunctionLogs(req: GetFunctionLogsRequest, cb?: (error: string, rep: GetFunctionLogsResponse) => void): Promise<GetFunctionLogsResponse>;
    /**
     * 更新命名空间
     */
    UpdateNamespace(req: UpdateNamespaceRequest, cb?: (error: string, rep: UpdateNamespaceResponse) => void): Promise<UpdateNamespaceResponse>;
    /**
     * 该接口用于运行函数。
     */
    Invoke(req: InvokeRequest, cb?: (error: string, rep: InvokeResponse) => void): Promise<InvokeResponse>;
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
     * 该接口根据传入的参数创建命名空间。
     */
    DeleteNamespace(req: DeleteNamespaceRequest, cb?: (error: string, rep: DeleteNamespaceResponse) => void): Promise<DeleteNamespaceResponse>;
    /**
     * 为某个函数版本创建一个别名，您可以使用别名来标记特定的函数版本，如DEV/RELEASE版本，也可以随时修改别名指向的版本。
一个别名必须指向一个主版本，此外还可以同时指向一个附加版本。调用函数时指定特定的别名，则请求会被发送到别名指向的版本上，您可以配置请求发送到主版本和附加版本的比例。
     */
    CreateAlias(req: CreateAliasRequest, cb?: (error: string, rep: CreateAliasResponse) => void): Promise<CreateAliasResponse>;
    /**
     * 该接口根据传入的参数查询函数的版本。
     */
    ListVersionByFunction(req: ListVersionByFunctionRequest, cb?: (error: string, rep: ListVersionByFunctionResponse) => void): Promise<ListVersionByFunctionResponse>;
    /**
     * 返回全部层的列表，其中包含了每个层最新版本的信息，可以通过适配运行时进行过滤。
     */
    ListLayers(req: ListLayersRequest, cb?: (error: string, rep: ListLayersResponse) => void): Promise<ListLayersResponse>;
    /**
     * 返回指定层的全部版本的信息
     */
    ListLayerVersions(req: ListLayerVersionsRequest, cb?: (error: string, rep: ListLayerVersionsResponse) => void): Promise<ListLayerVersionsResponse>;
    /**
     * 该接口根据传入的查询参数返回相关函数信息。
     */
    ListFunctions(req: ListFunctionsRequest, cb?: (error: string, rep: ListFunctionsResponse) => void): Promise<ListFunctionsResponse>;
    /**
     * 该接口根据传入参数更新函数配置。
     */
    UpdateFunctionConfiguration(req: UpdateFunctionConfigurationRequest, cb?: (error: string, rep: UpdateFunctionConfigurationResponse) => void): Promise<UpdateFunctionConfigurationResponse>;
    /**
     * 使用给定的zip文件或cos对象创建一个层的新版本，每次使用相同的层的名称调用本接口，都会生成一个新版本。
     */
    PublishLayerVersion(req: PublishLayerVersionRequest, cb?: (error: string, rep: PublishLayerVersionResponse) => void): Promise<PublishLayerVersionResponse>;
    /**
     * 该接口用于获取函数代码包的下载地址。
     */
    GetFunctionAddress(req: GetFunctionAddressRequest, cb?: (error: string, rep: GetFunctionAddressResponse) => void): Promise<GetFunctionAddressResponse>;
    /**
     * 获取别名的详细信息，包括名称、描述、版本、路由信息等。
     */
    GetAlias(req: GetAliasRequest, cb?: (error: string, rep: GetAliasResponse) => void): Promise<GetAliasResponse>;
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
}
