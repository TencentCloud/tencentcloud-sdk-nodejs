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
const DescribeProjectResponse = models.DescribeProjectResponse;
const CheckStaffChUserRequest = models.CheckStaffChUserRequest;
const DescribeResourceTemplateHeadersResponse = models.DescribeResourceTemplateHeadersResponse;
const DeleteProjectRequest = models.DeleteProjectRequest;
const ReplenishProjectStockResponse = models.ReplenishProjectStockResponse;
const SendWxTouchTaskResponse = models.SendWxTouchTaskResponse;
const DescribeCustomersRequest = models.DescribeCustomersRequest;
const DescribeProjectsRequest = models.DescribeProjectsRequest;
const ModifyProjectRequest = models.ModifyProjectRequest;
const OffLineProjectRequest = models.OffLineProjectRequest;
const DescribeSubProjectRequest = models.DescribeSubProjectRequest;
const ExpireFlowRequest = models.ExpireFlowRequest;
const CopyActivityChannelRequest = models.CopyActivityChannelRequest;
const CopyActivityChannelResponse = models.CopyActivityChannelResponse;
const DescribeProjectsResponse = models.DescribeProjectsResponse;
const ReplenishProjectStockRequest = models.ReplenishProjectStockRequest;
const ProjectStock = models.ProjectStock;
const DescribeProjectStockResponse = models.DescribeProjectStockResponse;
const CheckStaffChUserResponse = models.CheckStaffChUserResponse;
const DescribeCustomerRequest = models.DescribeCustomerRequest;
const ProductInfo = models.ProductInfo;
const SubProjectInfo = models.SubProjectInfo;
const ResourceTemplateHeader = models.ResourceTemplateHeader;
const CreateSubProjectResponse = models.CreateSubProjectResponse;
const Filters = models.Filters;
const ProjectInfo = models.ProjectInfo;
const DescribeCustomerResponse = models.DescribeCustomerResponse;
const DescribeCustomersResponse = models.DescribeCustomersResponse;
const CreateSubProjectRequest = models.CreateSubProjectRequest;
const ModifyProjectResponse = models.ModifyProjectResponse;
const CreateProjectResponse = models.CreateProjectResponse;
const DescribeProjectStockRequest = models.DescribeProjectStockRequest;
const DeleteProjectResponse = models.DeleteProjectResponse;
const SendWxTouchTaskRequest = models.SendWxTouchTaskRequest;
const DescribeProjectRequest = models.DescribeProjectRequest;
const OffLineProjectResponse = models.OffLineProjectResponse;
const CustomerInfo = models.CustomerInfo;
const ActivityInfo = models.ActivityInfo;
const DescribeResourceTemplateHeadersRequest = models.DescribeResourceTemplateHeadersRequest;
const ExpireFlowResponse = models.ExpireFlowResponse;
const DescribeSubProjectResponse = models.DescribeSubProjectResponse;
const CreateProjectRequest = models.CreateProjectRequest;


/**
 * solar client
 * @class
 */
class SolarClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("solar.tencentcloudapi.com", "2018-10-11", credential, region, profile);
    }
    
    /**
     * 子项目详情
     * @param {DescribeSubProjectRequest} req
     * @param {function(string, DescribeSubProjectResponse):void} cb
     * @public
     */
    DescribeSubProject(req, cb) {
        let resp = new DescribeSubProjectResponse();
        this.request("DescribeSubProject", req, resp, cb);
    }

    /**
     * 项目库存详情
     * @param {DescribeProjectStockRequest} req
     * @param {function(string, DescribeProjectStockResponse):void} cb
     * @public
     */
    DescribeProjectStock(req, cb) {
        let resp = new DescribeProjectStockResponse();
        this.request("DescribeProjectStock", req, resp, cb);
    }

    /**
     * 项目详情展示
     * @param {DescribeProjectRequest} req
     * @param {function(string, DescribeProjectResponse):void} cb
     * @public
     */
    DescribeProject(req, cb) {
        let resp = new DescribeProjectResponse();
        this.request("DescribeProject", req, resp, cb);
    }

    /**
     * 素材查询服务号模板的列表（样例）
     * @param {DescribeResourceTemplateHeadersRequest} req
     * @param {function(string, DescribeResourceTemplateHeadersResponse):void} cb
     * @public
     */
    DescribeResourceTemplateHeaders(req, cb) {
        let resp = new DescribeResourceTemplateHeadersResponse();
        this.request("DescribeResourceTemplateHeaders", req, resp, cb);
    }

    /**
     * 查询客户档案列表
     * @param {DescribeCustomersRequest} req
     * @param {function(string, DescribeCustomersResponse):void} cb
     * @public
     */
    DescribeCustomers(req, cb) {
        let resp = new DescribeCustomersResponse();
        this.request("DescribeCustomers", req, resp, cb);
    }

    /**
     * 发送企业微信触达任务
     * @param {SendWxTouchTaskRequest} req
     * @param {function(string, SendWxTouchTaskResponse):void} cb
     * @public
     */
    SendWxTouchTask(req, cb) {
        let resp = new SendWxTouchTaskResponse();
        this.request("SendWxTouchTask", req, resp, cb);
    }

    /**
     * 创建项目
     * @param {CreateProjectRequest} req
     * @param {function(string, CreateProjectResponse):void} cb
     * @public
     */
    CreateProject(req, cb) {
        let resp = new CreateProjectResponse();
        this.request("CreateProject", req, resp, cb);
    }

    /**
     * 补充子项目库存
     * @param {ReplenishProjectStockRequest} req
     * @param {function(string, ReplenishProjectStockResponse):void} cb
     * @public
     */
    ReplenishProjectStock(req, cb) {
        let resp = new ReplenishProjectStockResponse();
        this.request("ReplenishProjectStock", req, resp, cb);
    }

    /**
     * 项目列表展示
     * @param {DescribeProjectsRequest} req
     * @param {function(string, DescribeProjectsResponse):void} cb
     * @public
     */
    DescribeProjects(req, cb) {
        let resp = new DescribeProjectsResponse();
        this.request("DescribeProjects", req, resp, cb);
    }

    /**
     * 下线项目
     * @param {OffLineProjectRequest} req
     * @param {function(string, OffLineProjectResponse):void} cb
     * @public
     */
    OffLineProject(req, cb) {
        let resp = new OffLineProjectResponse();
        this.request("OffLineProject", req, resp, cb);
    }

    /**
     * 把审批中的工单置为已失效
     * @param {ExpireFlowRequest} req
     * @param {function(string, ExpireFlowResponse):void} cb
     * @public
     */
    ExpireFlow(req, cb) {
        let resp = new ExpireFlowResponse();
        this.request("ExpireFlow", req, resp, cb);
    }

    /**
     * 删除项目
     * @param {DeleteProjectRequest} req
     * @param {function(string, DeleteProjectResponse):void} cb
     * @public
     */
    DeleteProject(req, cb) {
        let resp = new DeleteProjectResponse();
        this.request("DeleteProject", req, resp, cb);
    }

    /**
     * 员工渠道更改员工状态
     * @param {CheckStaffChUserRequest} req
     * @param {function(string, CheckStaffChUserResponse):void} cb
     * @public
     */
    CheckStaffChUser(req, cb) {
        let resp = new CheckStaffChUserResponse();
        this.request("CheckStaffChUser", req, resp, cb);
    }

    /**
     * 客户档案查询客户详情
     * @param {DescribeCustomerRequest} req
     * @param {function(string, DescribeCustomerResponse):void} cb
     * @public
     */
    DescribeCustomer(req, cb) {
        let resp = new DescribeCustomerResponse();
        this.request("DescribeCustomer", req, resp, cb);
    }

    /**
     * 修改项目
     * @param {ModifyProjectRequest} req
     * @param {function(string, ModifyProjectResponse):void} cb
     * @public
     */
    ModifyProject(req, cb) {
        let resp = new ModifyProjectResponse();
        this.request("ModifyProject", req, resp, cb);
    }

    /**
     * 创建子项目
     * @param {CreateSubProjectRequest} req
     * @param {function(string, CreateSubProjectResponse):void} cb
     * @public
     */
    CreateSubProject(req, cb) {
        let resp = new CreateSubProjectResponse();
        this.request("CreateSubProject", req, resp, cb);
    }

    /**
     * 复制活动渠道的策略
     * @param {CopyActivityChannelRequest} req
     * @param {function(string, CopyActivityChannelResponse):void} cb
     * @public
     */
    CopyActivityChannel(req, cb) {
        let resp = new CopyActivityChannelResponse();
        this.request("CopyActivityChannel", req, resp, cb);
    }


}
module.exports = SolarClient;
