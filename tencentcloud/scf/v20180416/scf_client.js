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
const models = require("./models");
const AbstractClient = require('../../common/abstract_client')
const AccessInfo = models.AccessInfo;
const Trigger = models.Trigger;
const ListAliasesResponse = models.ListAliasesResponse;
const DeleteLayerVersionResponse = models.DeleteLayerVersionResponse;
const GetAliasResponse = models.GetAliasResponse;
const VersionWeight = models.VersionWeight;
const LayerVersionInfo = models.LayerVersionInfo;
const UpdateFunctionConfigurationResponse = models.UpdateFunctionConfigurationResponse;
const PublishLayerVersionResponse = models.PublishLayerVersionResponse;
const PublicNetConfigIn = models.PublicNetConfigIn;
const UpdateAliasRequest = models.UpdateAliasRequest;
const RoutingConfig = models.RoutingConfig;
const UpdateAliasResponse = models.UpdateAliasResponse;
const GetFunctionLogsRequest = models.GetFunctionLogsRequest;
const Tag = models.Tag;
const LogFilter = models.LogFilter;
const EipConfigIn = models.EipConfigIn;
const ListLayerVersionsResponse = models.ListLayerVersionsResponse;
const DeleteFunctionRequest = models.DeleteFunctionRequest;
const CopyFunctionResponse = models.CopyFunctionResponse;
const Namespace = models.Namespace;
const GetFunctionRequest = models.GetFunctionRequest;
const ListNamespacesRequest = models.ListNamespacesRequest;
const PublishVersionRequest = models.PublishVersionRequest;
const DeleteAliasRequest = models.DeleteAliasRequest;
const ListVersionByFunctionResponse = models.ListVersionByFunctionResponse;
const GetAliasRequest = models.GetAliasRequest;
const CreateNamespaceResponse = models.CreateNamespaceResponse;
const PublicNetConfigOut = models.PublicNetConfigOut;
const UpdateFunctionCodeRequest = models.UpdateFunctionCodeRequest;
const UpdateFunctionConfigurationRequest = models.UpdateFunctionConfigurationRequest;
const ListTriggersResponse = models.ListTriggersResponse;
const UpdateNamespaceResponse = models.UpdateNamespaceResponse;
const ListLayersRequest = models.ListLayersRequest;
const CopyFunctionRequest = models.CopyFunctionRequest;
const DeleteNamespaceResponse = models.DeleteNamespaceResponse;
const LayerVersionSimple = models.LayerVersionSimple;
const CfsConfig = models.CfsConfig;
const DeleteNamespaceRequest = models.DeleteNamespaceRequest;
const ListFunctionsRequest = models.ListFunctionsRequest;
const CreateTriggerRequest = models.CreateTriggerRequest;
const ListLayersResponse = models.ListLayersResponse;
const DeleteFunctionResponse = models.DeleteFunctionResponse;
const Result = models.Result;
const CreateAliasResponse = models.CreateAliasResponse;
const LogSearchContext = models.LogSearchContext;
const TriggerInfo = models.TriggerInfo;
const CreateFunctionRequest = models.CreateFunctionRequest;
const DeleteAliasResponse = models.DeleteAliasResponse;
const PublishVersionResponse = models.PublishVersionResponse;
const Environment = models.Environment;
const GetFunctionAddressRequest = models.GetFunctionAddressRequest;
const InvokeResponse = models.InvokeResponse;
const InvokeRequest = models.InvokeRequest;
const CreateAliasRequest = models.CreateAliasRequest;
const VersionMatch = models.VersionMatch;
const ListLayerVersionsRequest = models.ListLayerVersionsRequest;
const CreateTriggerResponse = models.CreateTriggerResponse;
const PublishLayerVersionRequest = models.PublishLayerVersionRequest;
const CreateNamespaceRequest = models.CreateNamespaceRequest;
const DeleteLayerVersionRequest = models.DeleteLayerVersionRequest;
const Filter = models.Filter;
const Variable = models.Variable;
const GetFunctionResponse = models.GetFunctionResponse;
const Code = models.Code;
const UpdateNamespaceRequest = models.UpdateNamespaceRequest;
const GetLayerVersionResponse = models.GetLayerVersionResponse;
const FunctionLog = models.FunctionLog;
const CfsInsInfo = models.CfsInsInfo;
const FunctionVersion = models.FunctionVersion;
const Function = models.Function;
const DeadLetterConfig = models.DeadLetterConfig;
const ListVersionByFunctionRequest = models.ListVersionByFunctionRequest;
const ListFunctionsResponse = models.ListFunctionsResponse;
const ListTriggersRequest = models.ListTriggersRequest;
const CreateFunctionResponse = models.CreateFunctionResponse;
const ListAliasesRequest = models.ListAliasesRequest;
const EipOutConfig = models.EipOutConfig;
const Alias = models.Alias;
const GetLayerVersionRequest = models.GetLayerVersionRequest;
const GetFunctionLogsResponse = models.GetFunctionLogsResponse;
const DeleteTriggerResponse = models.DeleteTriggerResponse;
const DeleteTriggerRequest = models.DeleteTriggerRequest;
const VpcConfig = models.VpcConfig;
const GetFunctionAddressResponse = models.GetFunctionAddressResponse;
const ListNamespacesResponse = models.ListNamespacesResponse;
const EipConfigOut = models.EipConfigOut;
const UpdateFunctionCodeResponse = models.UpdateFunctionCodeResponse;


/**
 * scf client
 * @class
 */
class ScfClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("scf.tencentcloudapi.com", "2018-04-16", credential, region, profile);
    }
    
    /**
     * 该接口根据传入参数删除函数。
     * @param {DeleteFunctionRequest} req
     * @param {function(string, DeleteFunctionResponse):void} cb
     * @public
     */
    DeleteFunction(req, cb) {
        let resp = new DeleteFunctionResponse();
        this.request("DeleteFunction", req, resp, cb);
    }

    /**
     * 更新别名的配置
     * @param {UpdateAliasRequest} req
     * @param {function(string, UpdateAliasResponse):void} cb
     * @public
     */
    UpdateAlias(req, cb) {
        let resp = new UpdateAliasResponse();
        this.request("UpdateAlias", req, resp, cb);
    }

    /**
     * 获取函数触发器列表
     * @param {ListTriggersRequest} req
     * @param {function(string, ListTriggersResponse):void} cb
     * @public
     */
    ListTriggers(req, cb) {
        let resp = new ListTriggersResponse();
        this.request("ListTriggers", req, resp, cb);
    }

    /**
     * 获取层版本详细信息，包括用于下载层中文件的链接。
     * @param {GetLayerVersionRequest} req
     * @param {function(string, GetLayerVersionResponse):void} cb
     * @public
     */
    GetLayerVersion(req, cb) {
        let resp = new GetLayerVersionResponse();
        this.request("GetLayerVersion", req, resp, cb);
    }

    /**
     * 该接口根据参数输入设置新的触发方式。
     * @param {CreateTriggerRequest} req
     * @param {function(string, CreateTriggerResponse):void} cb
     * @public
     */
    CreateTrigger(req, cb) {
        let resp = new CreateTriggerResponse();
        this.request("CreateTrigger", req, resp, cb);
    }

    /**
     * 该接口根据传入的参数创建命名空间。
     * @param {CreateNamespaceRequest} req
     * @param {function(string, CreateNamespaceResponse):void} cb
     * @public
     */
    CreateNamespace(req, cb) {
        let resp = new CreateNamespaceResponse();
        this.request("CreateNamespace", req, resp, cb);
    }

    /**
     * 复制一个函数，您可以选择将复制出的新函数放置在特定的Region和Namespace。
注：本接口**不会**复制函数的以下对象或属性：
1. 函数的触发器
2. 除了$LATEST以外的其它版本
3. 函数配置的日志投递到的CLS目标。

如有需要，您可以在复制后手动配置新函数。
     * @param {CopyFunctionRequest} req
     * @param {function(string, CopyFunctionResponse):void} cb
     * @public
     */
    CopyFunction(req, cb) {
        let resp = new CopyFunctionResponse();
        this.request("CopyFunction", req, resp, cb);
    }

    /**
     * 该接口根据参数传入删除已有的触发方式。
     * @param {DeleteTriggerRequest} req
     * @param {function(string, DeleteTriggerResponse):void} cb
     * @public
     */
    DeleteTrigger(req, cb) {
        let resp = new DeleteTriggerResponse();
        this.request("DeleteTrigger", req, resp, cb);
    }

    /**
     * 返回一个函数下的全部别名，可以根据特定函数版本过滤。
     * @param {ListAliasesRequest} req
     * @param {function(string, ListAliasesResponse):void} cb
     * @public
     */
    ListAliases(req, cb) {
        let resp = new ListAliasesResponse();
        this.request("ListAliases", req, resp, cb);
    }

    /**
     * 该接口根据指定的日志查询条件返回函数运行日志。
     * @param {GetFunctionLogsRequest} req
     * @param {function(string, GetFunctionLogsResponse):void} cb
     * @public
     */
    GetFunctionLogs(req, cb) {
        let resp = new GetFunctionLogsResponse();
        this.request("GetFunctionLogs", req, resp, cb);
    }

    /**
     * 更新命名空间
     * @param {UpdateNamespaceRequest} req
     * @param {function(string, UpdateNamespaceResponse):void} cb
     * @public
     */
    UpdateNamespace(req, cb) {
        let resp = new UpdateNamespaceResponse();
        this.request("UpdateNamespace", req, resp, cb);
    }

    /**
     * 该接口用于运行函数。
     * @param {InvokeRequest} req
     * @param {function(string, InvokeResponse):void} cb
     * @public
     */
    Invoke(req, cb) {
        let resp = new InvokeResponse();
        this.request("Invoke", req, resp, cb);
    }

    /**
     * 该接口用于用户发布新版本函数。
     * @param {PublishVersionRequest} req
     * @param {function(string, PublishVersionResponse):void} cb
     * @public
     */
    PublishVersion(req, cb) {
        let resp = new PublishVersionResponse();
        this.request("PublishVersion", req, resp, cb);
    }

    /**
     * 删除指定层的指定版本，被删除的版本无法再关联到函数上，但不会影响正在引用这个层的函数。
     * @param {DeleteLayerVersionRequest} req
     * @param {function(string, DeleteLayerVersionResponse):void} cb
     * @public
     */
    DeleteLayerVersion(req, cb) {
        let resp = new DeleteLayerVersionResponse();
        this.request("DeleteLayerVersion", req, resp, cb);
    }

    /**
     * 该接口获取某个函数的详细信息，包括名称、代码、处理方法、关联触发器和超时时间等字段。
     * @param {GetFunctionRequest} req
     * @param {function(string, GetFunctionResponse):void} cb
     * @public
     */
    GetFunction(req, cb) {
        let resp = new GetFunctionResponse();
        this.request("GetFunction", req, resp, cb);
    }

    /**
     * 删除一个函数版本的别名
     * @param {DeleteAliasRequest} req
     * @param {function(string, DeleteAliasResponse):void} cb
     * @public
     */
    DeleteAlias(req, cb) {
        let resp = new DeleteAliasResponse();
        this.request("DeleteAlias", req, resp, cb);
    }

    /**
     * 该接口根据传入的参数创建命名空间。
     * @param {DeleteNamespaceRequest} req
     * @param {function(string, DeleteNamespaceResponse):void} cb
     * @public
     */
    DeleteNamespace(req, cb) {
        let resp = new DeleteNamespaceResponse();
        this.request("DeleteNamespace", req, resp, cb);
    }

    /**
     * 为某个函数版本创建一个别名，您可以使用别名来标记特定的函数版本，如DEV/RELEASE版本，也可以随时修改别名指向的版本。
一个别名必须指向一个主版本，此外还可以同时指向一个附加版本。调用函数时指定特定的别名，则请求会被发送到别名指向的版本上，您可以配置请求发送到主版本和附加版本的比例。
     * @param {CreateAliasRequest} req
     * @param {function(string, CreateAliasResponse):void} cb
     * @public
     */
    CreateAlias(req, cb) {
        let resp = new CreateAliasResponse();
        this.request("CreateAlias", req, resp, cb);
    }

    /**
     * 该接口根据传入的参数查询函数的版本。
     * @param {ListVersionByFunctionRequest} req
     * @param {function(string, ListVersionByFunctionResponse):void} cb
     * @public
     */
    ListVersionByFunction(req, cb) {
        let resp = new ListVersionByFunctionResponse();
        this.request("ListVersionByFunction", req, resp, cb);
    }

    /**
     * 返回全部层的列表，其中包含了每个层最新版本的信息，可以通过适配运行时进行过滤。
     * @param {ListLayersRequest} req
     * @param {function(string, ListLayersResponse):void} cb
     * @public
     */
    ListLayers(req, cb) {
        let resp = new ListLayersResponse();
        this.request("ListLayers", req, resp, cb);
    }

    /**
     * 返回指定层的全部版本的信息
     * @param {ListLayerVersionsRequest} req
     * @param {function(string, ListLayerVersionsResponse):void} cb
     * @public
     */
    ListLayerVersions(req, cb) {
        let resp = new ListLayerVersionsResponse();
        this.request("ListLayerVersions", req, resp, cb);
    }

    /**
     * 该接口根据传入的查询参数返回相关函数信息。
     * @param {ListFunctionsRequest} req
     * @param {function(string, ListFunctionsResponse):void} cb
     * @public
     */
    ListFunctions(req, cb) {
        let resp = new ListFunctionsResponse();
        this.request("ListFunctions", req, resp, cb);
    }

    /**
     * 该接口根据传入参数更新函数配置。
     * @param {UpdateFunctionConfigurationRequest} req
     * @param {function(string, UpdateFunctionConfigurationResponse):void} cb
     * @public
     */
    UpdateFunctionConfiguration(req, cb) {
        let resp = new UpdateFunctionConfigurationResponse();
        this.request("UpdateFunctionConfiguration", req, resp, cb);
    }

    /**
     * 使用给定的zip文件或cos对象创建一个层的新版本，每次使用相同的层的名称调用本接口，都会生成一个新版本。
     * @param {PublishLayerVersionRequest} req
     * @param {function(string, PublishLayerVersionResponse):void} cb
     * @public
     */
    PublishLayerVersion(req, cb) {
        let resp = new PublishLayerVersionResponse();
        this.request("PublishLayerVersion", req, resp, cb);
    }

    /**
     * 该接口用于获取函数代码包的下载地址。
     * @param {GetFunctionAddressRequest} req
     * @param {function(string, GetFunctionAddressResponse):void} cb
     * @public
     */
    GetFunctionAddress(req, cb) {
        let resp = new GetFunctionAddressResponse();
        this.request("GetFunctionAddress", req, resp, cb);
    }

    /**
     * 获取别名的详细信息，包括名称、描述、版本、路由信息等。
     * @param {GetAliasRequest} req
     * @param {function(string, GetAliasResponse):void} cb
     * @public
     */
    GetAlias(req, cb) {
        let resp = new GetAliasResponse();
        this.request("GetAlias", req, resp, cb);
    }

    /**
     * 该接口根据传入参数创建新的函数。
     * @param {CreateFunctionRequest} req
     * @param {function(string, CreateFunctionResponse):void} cb
     * @public
     */
    CreateFunction(req, cb) {
        let resp = new CreateFunctionResponse();
        this.request("CreateFunction", req, resp, cb);
    }

    /**
     * 列出命名空间列表
     * @param {ListNamespacesRequest} req
     * @param {function(string, ListNamespacesResponse):void} cb
     * @public
     */
    ListNamespaces(req, cb) {
        let resp = new ListNamespacesResponse();
        this.request("ListNamespaces", req, resp, cb);
    }

    /**
     * 该接口根据传入参数更新函数代码。
     * @param {UpdateFunctionCodeRequest} req
     * @param {function(string, UpdateFunctionCodeResponse):void} cb
     * @public
     */
    UpdateFunctionCode(req, cb) {
        let resp = new UpdateFunctionCodeResponse();
        this.request("UpdateFunctionCode", req, resp, cb);
    }


}
module.exports = ScfClient;
