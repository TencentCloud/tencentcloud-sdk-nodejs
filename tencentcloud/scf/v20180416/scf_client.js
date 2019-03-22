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
const CreateFunctionRequest = models.CreateFunctionRequest;
const DeleteFunctionRequest = models.DeleteFunctionRequest;
const CopyFunctionResponse = models.CopyFunctionResponse;
const GetFunctionRequest = models.GetFunctionRequest;
const Environment = models.Environment;
const Trigger = models.Trigger;
const InvokeResponse = models.InvokeResponse;
const CreateFunctionResponse = models.CreateFunctionResponse;
const Function = models.Function;
const InvokeRequest = models.InvokeRequest;
const UpdateFunctionConfigurationRequest = models.UpdateFunctionConfigurationRequest;
const VpcConfig = models.VpcConfig;
const ListFunctionsResponse = models.ListFunctionsResponse;
const CreateTriggerResponse = models.CreateTriggerResponse;
const Result = models.Result;
const CopyFunctionRequest = models.CopyFunctionRequest;
const UpdateFunctionConfigurationResponse = models.UpdateFunctionConfigurationResponse;
const Filter = models.Filter;
const Variable = models.Variable;
const GetFunctionResponse = models.GetFunctionResponse;
const GetFunctionLogsResponse = models.GetFunctionLogsResponse;
const ListFunctionsRequest = models.ListFunctionsRequest;
const DeleteTriggerResponse = models.DeleteTriggerResponse;
const DeleteTriggerRequest = models.DeleteTriggerRequest;
const Code = models.Code;
const UpdateFunctionCodeRequest = models.UpdateFunctionCodeRequest;
const GetFunctionLogsRequest = models.GetFunctionLogsRequest;
const CreateTriggerRequest = models.CreateTriggerRequest;
const DeleteFunctionResponse = models.DeleteFunctionResponse;
const Tag = models.Tag;
const FunctionLog = models.FunctionLog;
const UpdateFunctionCodeResponse = models.UpdateFunctionCodeResponse;
const LogFilter = models.LogFilter;


/**
 * scf client
 * @class
 */
class ScfClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("scf.tencentcloudapi.com", "2018-04-16", credential, region, profile);
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
     * 复制一个函数，可以选择将复制出的新函数放置在同一个namespace或另一个namespace。
注：本接口**不会**复制函数的以下对象或属性：
1. 函数的触发器
2. 除了$LATEST以外的其它版本
3. 函数配置的日志投递到的CLS目标

如有需要，您可以在复制后手动修改新函数。
     * @param {CopyFunctionRequest} req
     * @param {function(string, CopyFunctionResponse):void} cb
     * @public
     */
    CopyFunction(req, cb) {
        let resp = new CopyFunctionResponse();
        this.request("CopyFunction", req, resp, cb);
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
