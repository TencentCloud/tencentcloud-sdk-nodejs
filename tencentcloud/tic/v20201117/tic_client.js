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
const DescribeStackVersionsResponse = models.DescribeStackVersionsResponse;
const DescribeStackEventsResponse = models.DescribeStackEventsResponse;
const UpdateStackResponse = models.UpdateStackResponse;
const DescribeStacksRequest = models.DescribeStacksRequest;
const CreateStackVersionResponse = models.CreateStackVersionResponse;
const UpdateStackRequest = models.UpdateStackRequest;
const DescribeStackEventRequest = models.DescribeStackEventRequest;
const PlanStackResponse = models.PlanStackResponse;
const StackInfo = models.StackInfo;
const PlanStackRequest = models.PlanStackRequest;
const ApplyStackResponse = models.ApplyStackResponse;
const DestroyStackRequest = models.DestroyStackRequest;
const CreateStackVersionRequest = models.CreateStackVersionRequest;
const DeleteStackVersionResponse = models.DeleteStackVersionResponse;
const Filter = models.Filter;
const DescribeStackVersionsRequest = models.DescribeStackVersionsRequest;
const DescribeStackEventsRequest = models.DescribeStackEventsRequest;
const DescribeStackEventResponse = models.DescribeStackEventResponse;
const ApplyStackRequest = models.ApplyStackRequest;
const DeleteStackVersionRequest = models.DeleteStackVersionRequest;
const DestroyStackResponse = models.DestroyStackResponse;
const DeleteStackRequest = models.DeleteStackRequest;
const EventInfo = models.EventInfo;
const UpdateStackVersionResponse = models.UpdateStackVersionResponse;
const DeleteStackResponse = models.DeleteStackResponse;
const CreateStackRequest = models.CreateStackRequest;
const DescribeStacksResponse = models.DescribeStacksResponse;
const CreateStackResponse = models.CreateStackResponse;
const VersionInfo = models.VersionInfo;
const UpdateStackVersionRequest = models.UpdateStackVersionRequest;


/**
 * tic client
 * @class
 */
class TicClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("tic.tencentcloudapi.com", "2020-11-17", credential, region, profile);
    }
    
    /**
     * 本接口（DescribeStackEvents）用于查看一个或多个事件详细信息。

- 可以根据事件ID过滤感兴趣的事件
- 也可以根据版本ID，资源栈ID，事件类型，事件状态过滤事件，过滤信息详细请见过滤器Filter
- 如果参数为空，返回当前用户一定数量（Limit所指定的数量，默认为20）的事件
     * @param {DescribeStackEventsRequest} req
     * @param {function(string, DescribeStackEventsResponse):void} cb
     * @public
     */
    DescribeStackEvents(req, cb) {
        let resp = new DescribeStackEventsResponse();
        this.request("DescribeStackEvents", req, resp, cb);
    }

    /**
     * 本接口（UpdateStack）用于更新资源栈的名称和描述。
     * @param {UpdateStackRequest} req
     * @param {function(string, UpdateStackResponse):void} cb
     * @public
     */
    UpdateStack(req, cb) {
        let resp = new UpdateStackResponse();
        this.request("UpdateStack", req, resp, cb);
    }

    /**
     * 本接口（UpdateStackVersion）用于更新一个版本的模版内容，名称或描述，模版仅限COS URL，且为zip格式。
     * @param {UpdateStackVersionRequest} req
     * @param {function(string, UpdateStackVersionResponse):void} cb
     * @public
     */
    UpdateStackVersion(req, cb) {
        let resp = new UpdateStackVersionResponse();
        this.request("UpdateStackVersion", req, resp, cb);
    }

    /**
     * 本接口（DestroyStack）用于删除资源栈下的某个版本所创建的资源。
     * @param {DestroyStackRequest} req
     * @param {function(string, DestroyStackResponse):void} cb
     * @public
     */
    DestroyStack(req, cb) {
        let resp = new DestroyStackResponse();
        this.request("DestroyStack", req, resp, cb);
    }

    /**
     * 本接口（ApplyStack）用于触发资源栈下某个版本的Apply事件。

- 当版本处于PLAN_IN_PROGRESS或APPLY_IN_PROGRESS状态时，将无法再执行本操作
- 当版本处于APPLY_COMPLETED状态时，本操作无法执行
     * @param {ApplyStackRequest} req
     * @param {function(string, ApplyStackResponse):void} cb
     * @public
     */
    ApplyStack(req, cb) {
        let resp = new ApplyStackResponse();
        this.request("ApplyStack", req, resp, cb);
    }

    /**
     * 本接口（CreateStackVersion）用于给资源栈新增一个HCL模版版本，仅限COS链接，且为zip格式。
     * @param {CreateStackVersionRequest} req
     * @param {function(string, CreateStackVersionResponse):void} cb
     * @public
     */
    CreateStackVersion(req, cb) {
        let resp = new CreateStackVersionResponse();
        this.request("CreateStackVersion", req, resp, cb);
    }

    /**
     * 本接口（DeleteStack）用于删除一个资源栈（配置、版本、事件信息）。但不会销毁资源管理的云资源。如果需要销毁资源栈管理的云资源，请调用 DestoryStack 接口销毁云资源。
     * @param {DeleteStackRequest} req
     * @param {function(string, DeleteStackResponse):void} cb
     * @public
     */
    DeleteStack(req, cb) {
        let resp = new DeleteStackResponse();
        this.request("DeleteStack", req, resp, cb);
    }

    /**
     * 本接口（PlanStack）用于触发资源栈下某个版本的PLAN事件。

- 当版本处于PLAN_IN_PROGRESS或APPLY_IN_PROGRESS状态时，将无法再执行本操作
- 当版本处于APPLY_COMPLETED状态时，本操作无法执行
     * @param {PlanStackRequest} req
     * @param {function(string, PlanStackResponse):void} cb
     * @public
     */
    PlanStack(req, cb) {
        let resp = new PlanStackResponse();
        this.request("PlanStack", req, resp, cb);
    }

    /**
     * 本接口（DeleteStackVersion）用于删除一个版本，处于PLAN_IN_PROGRESS和APPLY_IN_PROGRESS状态中的版本无法删除。
     * @param {DeleteStackVersionRequest} req
     * @param {function(string, DeleteStackVersionResponse):void} cb
     * @public
     */
    DeleteStackVersion(req, cb) {
        let resp = new DeleteStackVersionResponse();
        this.request("DeleteStackVersion", req, resp, cb);
    }

    /**
     * 本接口（DescribeStackEvent）用于获取单个事件详情，尤其是可以得到事件的详细控制台输出文本。
     * @param {DescribeStackEventRequest} req
     * @param {function(string, DescribeStackEventResponse):void} cb
     * @public
     */
    DescribeStackEvent(req, cb) {
        let resp = new DescribeStackEventResponse();
        this.request("DescribeStackEvent", req, resp, cb);
    }

    /**
     * 本接口（DescribeStackVersions）用于查询一个或多个版本的详细信息。

- 可以根据版本ID查询感兴趣的版本
- 可以根据版本名字和状态来过滤版本，详见过滤器Filter
- 如果参数为空，返回当前用户一定数量（Limit所指定的数量，默认为20）的版本
     * @param {DescribeStackVersionsRequest} req
     * @param {function(string, DescribeStackVersionsResponse):void} cb
     * @public
     */
    DescribeStackVersions(req, cb) {
        let resp = new DescribeStackVersionsResponse();
        this.request("DescribeStackVersions", req, resp, cb);
    }

    /**
     * 本接口（DescribeStacks）用于查询一个或多个资源栈的详细信息。

- 可以根据资源栈ID来查询感兴趣的资源栈信息
- 若参数为空，返回当前用户一定数量（Limit所指定的数量，默认为20）的资源栈
     * @param {DescribeStacksRequest} req
     * @param {function(string, DescribeStacksResponse):void} cb
     * @public
     */
    DescribeStacks(req, cb) {
        let resp = new DescribeStacksResponse();
        this.request("DescribeStacks", req, resp, cb);
    }

    /**
     * 本接口（CreateStack）用于通过传递一个COS的terraform zip模版URL来创建一个资源栈。创建资源栈后仍需要用户调用对应的plan, apply, destory执行对应的事件。
     * @param {CreateStackRequest} req
     * @param {function(string, CreateStackResponse):void} cb
     * @public
     */
    CreateStack(req, cb) {
        let resp = new CreateStackResponse();
        this.request("CreateStack", req, resp, cb);
    }


}
module.exports = TicClient;
