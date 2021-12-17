/* eslint-disable @typescript-eslint/no-unused-vars */
/*
 * Copyright (c) 2018 THL A29 Limited, a Tencent company. All Rights Reserved.
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
import { AbstractClient } from "../../../common/abstract_client"
import { ClientConfig } from "../../../common/interface"
import {
  AccessInfo,
  UpdateAliasRequest,
  Trigger,
  GetProvisionedConcurrencyConfigRequest,
  ListAliasesResponse,
  DeleteLayerVersionResponse,
  GetReservedConcurrencyConfigResponse,
  ProtocolParams,
  RoutingConfig,
  DeleteProvisionedConcurrencyConfigResponse,
  VersionWeight,
  TimeInterval,
  LayerVersionInfo,
  PutProvisionedConcurrencyConfigResponse,
  UpdateFunctionConfigurationResponse,
  PublishLayerVersionResponse,
  UsageInfo,
  PublicNetConfigIn,
  DeleteProvisionedConcurrencyConfigRequest,
  DeleteReservedConcurrencyConfigResponse,
  GetAliasResponse,
  UpdateAliasResponse,
  VersionProvisionedConcurrencyInfo,
  GetFunctionLogsRequest,
  StatusReason,
  Tag,
  GetRequestStatusRequest,
  LogFilter,
  EipConfigIn,
  ListLayerVersionsResponse,
  DeleteFunctionRequest,
  CopyFunctionResponse,
  InvokeFunctionResponse,
  Namespace,
  GetFunctionRequest,
  ListNamespacesRequest,
  PublishVersionRequest,
  DeleteAliasRequest,
  ListVersionByFunctionResponse,
  WSParams,
  GetAliasRequest,
  CreateNamespaceResponse,
  PublicNetConfigOut,
  UpdateFunctionCodeRequest,
  UpdateFunctionConfigurationRequest,
  DeleteReservedConcurrencyConfigRequest,
  GetFunctionEventInvokeConfigResponse,
  ListTriggersResponse,
  TerminateAsyncEventRequest,
  ListLayersRequest,
  CopyFunctionRequest,
  DeleteNamespaceResponse,
  LayerVersionSimple,
  TriggerCount,
  NamespaceLimit,
  CfsConfig,
  DeleteNamespaceRequest,
  ListFunctionsRequest,
  CreateTriggerRequest,
  UpdateNamespaceResponse,
  GetAccountResponse,
  DeleteFunctionResponse,
  ListAsyncEventsRequest,
  Result,
  CreateAliasResponse,
  LogSearchContext,
  TriggerInfo,
  RequestStatus,
  CreateFunctionRequest,
  GetAccountRequest,
  PutTotalConcurrencyConfigResponse,
  GetAsyncEventStatusRequest,
  DeleteAliasResponse,
  PublishVersionResponse,
  AsyncEvent,
  Environment,
  TerminateAsyncEventResponse,
  GetFunctionAddressRequest,
  InvokeResponse,
  InvokeRequest,
  CreateAliasRequest,
  VersionMatch,
  UpdateFunctionEventInvokeConfigResponse,
  PutReservedConcurrencyConfigRequest,
  ListLayerVersionsRequest,
  CreateTriggerResponse,
  PublishLayerVersionRequest,
  CreateNamespaceRequest,
  UpdateFunctionEventInvokeConfigRequest,
  DeleteLayerVersionRequest,
  Filter,
  Variable,
  GetFunctionResponse,
  GetFunctionEventInvokeConfigRequest,
  Code,
  PutTotalConcurrencyConfigRequest,
  UpdateNamespaceRequest,
  GetLayerVersionResponse,
  GetRequestStatusResponse,
  AsyncEventStatus,
  PutReservedConcurrencyConfigResponse,
  FunctionLog,
  InvokeFunctionRequest,
  RetryConfig,
  GetFunctionAddressResponse,
  CfsInsInfo,
  TriggerAction,
  LimitsInfo,
  ListLayersResponse,
  FunctionVersion,
  AsyncTriggerConfig,
  DeadLetterConfig,
  ListVersionByFunctionRequest,
  ListFunctionsResponse,
  GetAsyncEventStatusResponse,
  ListTriggersRequest,
  CreateFunctionResponse,
  GetReservedConcurrencyConfigRequest,
  PutProvisionedConcurrencyConfigRequest,
  Function,
  NamespaceUsage,
  ListAliasesRequest,
  EipOutConfig,
  Alias,
  GetLayerVersionRequest,
  GetFunctionLogsResponse,
  ImageConfig,
  DeleteTriggerResponse,
  SearchKey,
  DeleteTriggerRequest,
  VpcConfig,
  GetProvisionedConcurrencyConfigResponse,
  ListAsyncEventsResponse,
  ListNamespacesResponse,
  EipConfigOut,
  UpdateFunctionCodeResponse,
} from "./scf_models"

/**
 * scf client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("scf.tencentcloudapi.com", "2018-04-16", clientConfig)
  }

  /**
   * 更新别名的配置
   */
  async UpdateAlias(
    req: UpdateAliasRequest,
    cb?: (error: string, rep: UpdateAliasResponse) => void
  ): Promise<UpdateAliasResponse> {
    return this.request("UpdateAlias", req, cb)
  }

  /**
   * 更新命名空间
   */
  async UpdateNamespace(
    req: UpdateNamespaceRequest,
    cb?: (error: string, rep: UpdateNamespaceResponse) => void
  ): Promise<UpdateNamespaceResponse> {
    return this.request("UpdateNamespace", req, cb)
  }

  /**
   *  SCF同步调用函数接口
   */
  async InvokeFunction(
    req: InvokeFunctionRequest,
    cb?: (error: string, rep: InvokeFunctionResponse) => void
  ): Promise<InvokeFunctionResponse> {
    return this.request("InvokeFunction", req, cb)
  }

  /**
   * 该接口根据传入参数删除函数。
   */
  async DeleteFunction(
    req: DeleteFunctionRequest,
    cb?: (error: string, rep: DeleteFunctionResponse) => void
  ): Promise<DeleteFunctionResponse> {
    return this.request("DeleteFunction", req, cb)
  }

  /**
   * 终止正在运行中的函数异步事件
   */
  async TerminateAsyncEvent(
    req: TerminateAsyncEventRequest,
    cb?: (error: string, rep: TerminateAsyncEventResponse) => void
  ): Promise<TerminateAsyncEventResponse> {
    return this.request("TerminateAsyncEvent", req, cb)
  }

  /**
   * 获取函数触发器列表
   */
  async ListTriggers(
    req: ListTriggersRequest,
    cb?: (error: string, rep: ListTriggersResponse) => void
  ): Promise<ListTriggersResponse> {
    return this.request("ListTriggers", req, cb)
  }

  /**
   * 该接口根据传入的参数查询函数的版本。
   */
  async ListVersionByFunction(
    req: ListVersionByFunctionRequest,
    cb?: (error: string, rep: ListVersionByFunctionResponse) => void
  ): Promise<ListVersionByFunctionResponse> {
    return this.request("ListVersionByFunction", req, cb)
  }

  /**
   * 获取层版本详细信息，包括用于下载层中文件的链接。
   */
  async GetLayerVersion(
    req: GetLayerVersionRequest,
    cb?: (error: string, rep: GetLayerVersionResponse) => void
  ): Promise<GetLayerVersionResponse> {
    return this.request("GetLayerVersion", req, cb)
  }

  /**
   * 该接口根据参数输入设置新的触发方式。
   */
  async CreateTrigger(
    req: CreateTriggerRequest,
    cb?: (error: string, rep: CreateTriggerResponse) => void
  ): Promise<CreateTriggerResponse> {
    return this.request("CreateTrigger", req, cb)
  }

  /**
   * 该接口根据传入的参数创建命名空间。
   */
  async CreateNamespace(
    req: CreateNamespaceRequest,
    cb?: (error: string, rep: CreateNamespaceResponse) => void
  ): Promise<CreateNamespaceResponse> {
    return this.request("CreateNamespace", req, cb)
  }

  /**
     * 复制一个函数，您可以选择将复制出的新函数放置在特定的Region和Namespace。
注：本接口**不会**复制函数的以下对象或属性：
1. 函数的触发器
2. 除了$LATEST以外的其它版本
3. 函数配置的日志投递到的CLS目标。

如有需要，您可以在复制后手动配置新函数。
     */
  async CopyFunction(
    req: CopyFunctionRequest,
    cb?: (error: string, rep: CopyFunctionResponse) => void
  ): Promise<CopyFunctionResponse> {
    return this.request("CopyFunction", req, cb)
  }

  /**
   * 该接口根据参数传入删除已有的触发方式。
   */
  async DeleteTrigger(
    req: DeleteTriggerRequest,
    cb?: (error: string, rep: DeleteTriggerResponse) => void
  ): Promise<DeleteTriggerResponse> {
    return this.request("DeleteTrigger", req, cb)
  }

  /**
   * 返回一个函数下的全部别名，可以根据特定函数版本过滤。
   */
  async ListAliases(
    req: ListAliasesRequest,
    cb?: (error: string, rep: ListAliasesResponse) => void
  ): Promise<ListAliasesResponse> {
    return this.request("ListAliases", req, cb)
  }

  /**
   * 该接口根据指定的日志查询条件返回函数运行日志。该接口已下线，查询函数请求运行的返回信息，请使用 [GetRequestStatus](https://cloud.tencent.com/document/product/583/65348)。查询函数运行日志，请参考[日志检索教程](https://cloud.tencent.com/document/product/583/52637)。
   */
  async GetFunctionLogs(
    req: GetFunctionLogsRequest,
    cb?: (error: string, rep: GetFunctionLogsResponse) => void
  ): Promise<GetFunctionLogsResponse> {
    return this.request("GetFunctionLogs", req, cb)
  }

  /**
   * 获取函数或函数某一版本的预置并发详情。
   */
  async GetProvisionedConcurrencyConfig(
    req: GetProvisionedConcurrencyConfigRequest,
    cb?: (error: string, rep: GetProvisionedConcurrencyConfigResponse) => void
  ): Promise<GetProvisionedConcurrencyConfigResponse> {
    return this.request("GetProvisionedConcurrencyConfig", req, cb)
  }

  /**
   * 使用给定的zip文件或cos对象创建一个层的新版本，每次使用相同的层的名称调用本接口，都会生成一个新版本。
   */
  async PublishLayerVersion(
    req: PublishLayerVersionRequest,
    cb?: (error: string, rep: PublishLayerVersionResponse) => void
  ): Promise<PublishLayerVersionResponse> {
    return this.request("PublishLayerVersion", req, cb)
  }

  /**
   * 删除函数版本的预置并发配置。
   */
  async DeleteProvisionedConcurrencyConfig(
    req: DeleteProvisionedConcurrencyConfigRequest,
    cb?: (error: string, rep: DeleteProvisionedConcurrencyConfigResponse) => void
  ): Promise<DeleteProvisionedConcurrencyConfigResponse> {
    return this.request("DeleteProvisionedConcurrencyConfig", req, cb)
  }

  /**
   * 该接口用于用户发布新版本函数。
   */
  async PublishVersion(
    req: PublishVersionRequest,
    cb?: (error: string, rep: PublishVersionResponse) => void
  ): Promise<PublishVersionResponse> {
    return this.request("PublishVersion", req, cb)
  }

  /**
   * 删除指定层的指定版本，被删除的版本无法再关联到函数上，但不会影响正在引用这个层的函数。
   */
  async DeleteLayerVersion(
    req: DeleteLayerVersionRequest,
    cb?: (error: string, rep: DeleteLayerVersionResponse) => void
  ): Promise<DeleteLayerVersionResponse> {
    return this.request("DeleteLayerVersion", req, cb)
  }

  /**
   * 该接口获取某个函数的详细信息，包括名称、代码、处理方法、关联触发器和超时时间等字段。
   */
  async GetFunction(
    req: GetFunctionRequest,
    cb?: (error: string, rep: GetFunctionResponse) => void
  ): Promise<GetFunctionResponse> {
    return this.request("GetFunction", req, cb)
  }

  /**
   * 删除一个函数版本的别名
   */
  async DeleteAlias(
    req: DeleteAliasRequest,
    cb?: (error: string, rep: DeleteAliasResponse) => void
  ): Promise<DeleteAliasResponse> {
    return this.request("DeleteAlias", req, cb)
  }

  /**
   * 获取函数异步执行事件状态，事件状态保留 3 * 24 小时（从事件完成开始计时）。
   */
  async GetAsyncEventStatus(
    req: GetAsyncEventStatusRequest,
    cb?: (error: string, rep: GetAsyncEventStatusResponse) => void
  ): Promise<GetAsyncEventStatusResponse> {
    return this.request("GetAsyncEventStatus", req, cb)
  }

  /**
   * 该接口根据传入的参数删除命名空间。
   */
  async DeleteNamespace(
    req: DeleteNamespaceRequest,
    cb?: (error: string, rep: DeleteNamespaceResponse) => void
  ): Promise<DeleteNamespaceResponse> {
    return this.request("DeleteNamespace", req, cb)
  }

  /**
     * 为某个函数版本创建一个别名，您可以使用别名来标记特定的函数版本，如DEV/RELEASE版本，也可以随时修改别名指向的版本。
一个别名必须指向一个主版本，此外还可以同时指向一个附加版本。调用函数时指定特定的别名，则请求会被发送到别名指向的版本上，您可以配置请求发送到主版本和附加版本的比例。
     */
  async CreateAlias(
    req: CreateAliasRequest,
    cb?: (error: string, rep: CreateAliasResponse) => void
  ): Promise<CreateAliasResponse> {
    return this.request("CreateAlias", req, cb)
  }

  /**
   * 设置函数某一非$LATEST版本的预置并发。
   */
  async PutProvisionedConcurrencyConfig(
    req: PutProvisionedConcurrencyConfigRequest,
    cb?: (error: string, rep: PutProvisionedConcurrencyConfigResponse) => void
  ): Promise<PutProvisionedConcurrencyConfigResponse> {
    return this.request("PutProvisionedConcurrencyConfig", req, cb)
  }

  /**
   * 更新函数的异步重试配置，包括重试次数和消息保留时间
   */
  async UpdateFunctionEventInvokeConfig(
    req: UpdateFunctionEventInvokeConfigRequest,
    cb?: (error: string, rep: UpdateFunctionEventInvokeConfigResponse) => void
  ): Promise<UpdateFunctionEventInvokeConfigResponse> {
    return this.request("UpdateFunctionEventInvokeConfig", req, cb)
  }

  /**
   * 获取函数异步重试配置，包括重试次数和消息保留时间
   */
  async GetFunctionEventInvokeConfig(
    req: GetFunctionEventInvokeConfigRequest,
    cb?: (error: string, rep: GetFunctionEventInvokeConfigResponse) => void
  ): Promise<GetFunctionEventInvokeConfigResponse> {
    return this.request("GetFunctionEventInvokeConfig", req, cb)
  }

  /**
   * 返回全部层的列表，其中包含了每个层最新版本的信息，可以通过适配运行时进行过滤。
   */
  async ListLayers(
    req: ListLayersRequest,
    cb?: (error: string, rep: ListLayersResponse) => void
  ): Promise<ListLayersResponse> {
    return this.request("ListLayers", req, cb)
  }

  /**
   * 拉取函数异步事件列表
   */
  async ListAsyncEvents(
    req: ListAsyncEventsRequest,
    cb?: (error: string, rep: ListAsyncEventsResponse) => void
  ): Promise<ListAsyncEventsResponse> {
    return this.request("ListAsyncEvents", req, cb)
  }

  /**
   * 返回指定层的全部版本的信息
   */
  async ListLayerVersions(
    req: ListLayerVersionsRequest,
    cb?: (error: string, rep: ListLayerVersionsResponse) => void
  ): Promise<ListLayerVersionsResponse> {
    return this.request("ListLayerVersions", req, cb)
  }

  /**
   * 获取函数的最大独占配额详情。
   */
  async GetReservedConcurrencyConfig(
    req: GetReservedConcurrencyConfigRequest,
    cb?: (error: string, rep: GetReservedConcurrencyConfigResponse) => void
  ): Promise<GetReservedConcurrencyConfigResponse> {
    return this.request("GetReservedConcurrencyConfig", req, cb)
  }

  /**
   * 该接口根据传入的查询参数返回相关函数信息。
   */
  async ListFunctions(
    req: ListFunctionsRequest,
    cb?: (error: string, rep: ListFunctionsResponse) => void
  ): Promise<ListFunctionsResponse> {
    return this.request("ListFunctions", req, cb)
  }

  /**
   * 该接口根据传入参数更新函数配置。
   */
  async UpdateFunctionConfiguration(
    req: UpdateFunctionConfigurationRequest,
    cb?: (error: string, rep: UpdateFunctionConfigurationResponse) => void
  ): Promise<UpdateFunctionConfigurationResponse> {
    return this.request("UpdateFunctionConfiguration", req, cb)
  }

  /**
   * 设置函数最大独占配额
   */
  async PutReservedConcurrencyConfig(
    req: PutReservedConcurrencyConfigRequest,
    cb?: (error: string, rep: PutReservedConcurrencyConfigResponse) => void
  ): Promise<PutReservedConcurrencyConfigResponse> {
    return this.request("PutReservedConcurrencyConfig", req, cb)
  }

  /**
   * 获取账户信息
   */
  async GetAccount(
    req?: GetAccountRequest,
    cb?: (error: string, rep: GetAccountResponse) => void
  ): Promise<GetAccountResponse> {
    return this.request("GetAccount", req, cb)
  }

  /**
   * 删除函数的最大独占配额配置。
   */
  async DeleteReservedConcurrencyConfig(
    req: DeleteReservedConcurrencyConfigRequest,
    cb?: (error: string, rep: DeleteReservedConcurrencyConfigResponse) => void
  ): Promise<DeleteReservedConcurrencyConfigResponse> {
    return this.request("DeleteReservedConcurrencyConfig", req, cb)
  }

  /**
   * 该接口用于运行函数。
   */
  async Invoke(
    req: InvokeRequest,
    cb?: (error: string, rep: InvokeResponse) => void
  ): Promise<InvokeResponse> {
    return this.request("Invoke", req, cb)
  }

  /**
   * 该接口用于获取函数代码包的下载地址。
   */
  async GetFunctionAddress(
    req: GetFunctionAddressRequest,
    cb?: (error: string, rep: GetFunctionAddressResponse) => void
  ): Promise<GetFunctionAddressResponse> {
    return this.request("GetFunctionAddress", req, cb)
  }

  /**
   * 获取别名的详细信息，包括名称、描述、版本、路由信息等。
   */
  async GetAlias(
    req: GetAliasRequest,
    cb?: (error: string, rep: GetAliasResponse) => void
  ): Promise<GetAliasResponse> {
    return this.request("GetAlias", req, cb)
  }

  /**
   * 修改账号并发限制配额
   */
  async PutTotalConcurrencyConfig(
    req: PutTotalConcurrencyConfigRequest,
    cb?: (error: string, rep: PutTotalConcurrencyConfigResponse) => void
  ): Promise<PutTotalConcurrencyConfigResponse> {
    return this.request("PutTotalConcurrencyConfig", req, cb)
  }

  /**
   * 该接口根据传入参数创建新的函数。
   */
  async CreateFunction(
    req: CreateFunctionRequest,
    cb?: (error: string, rep: CreateFunctionResponse) => void
  ): Promise<CreateFunctionResponse> {
    return this.request("CreateFunction", req, cb)
  }

  /**
   * 列出命名空间列表
   */
  async ListNamespaces(
    req: ListNamespacesRequest,
    cb?: (error: string, rep: ListNamespacesResponse) => void
  ): Promise<ListNamespacesResponse> {
    return this.request("ListNamespaces", req, cb)
  }

  /**
   * 该接口根据传入参数更新函数代码。
   */
  async UpdateFunctionCode(
    req: UpdateFunctionCodeRequest,
    cb?: (error: string, rep: UpdateFunctionCodeResponse) => void
  ): Promise<UpdateFunctionCodeResponse> {
    return this.request("UpdateFunctionCode", req, cb)
  }

  /**
   * 该接口根据指定的查询条件返回函数单个请求运行状态。
   */
  async GetRequestStatus(
    req: GetRequestStatusRequest,
    cb?: (error: string, rep: GetRequestStatusResponse) => void
  ): Promise<GetRequestStatusResponse> {
    return this.request("GetRequestStatus", req, cb)
  }
}
