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
const DeleteModelRequest = models.DeleteModelRequest;
const Log = models.Log;
const DeleteJobResponse = models.DeleteJobResponse;
const CreateJobRequest = models.CreateJobRequest;
const CreateJobResponse = models.CreateJobResponse;
const InstallAgentResponse = models.InstallAgentResponse;
const DescribeModelResponse = models.DescribeModelResponse;
const DescribeModelRequest = models.DescribeModelRequest;
const DescribeJobRequest = models.DescribeJobRequest;
const ListJobsRequest = models.ListJobsRequest;
const Job = models.Job;
const CreateModelResponse = models.CreateModelResponse;
const ListModelsRequest = models.ListModelsRequest;
const QueryLogsResponse = models.QueryLogsResponse;
const InstallAgentRequest = models.InstallAgentRequest;
const ListJobsResponse = models.ListJobsResponse;
const QueryLogsRequest = models.QueryLogsRequest;
const Model = models.Model;
const DeleteModelResponse = models.DeleteModelResponse;
const ListModelsResponse = models.ListModelsResponse;
const DeleteJobRequest = models.DeleteJobRequest;
const CreateModelRequest = models.CreateModelRequest;
const DescribeJobResponse = models.DescribeJobResponse;


/**
 * tia client
 * @class
 */
class TiaClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("tia.tencentcloudapi.com", "2018-02-26", credential, region, profile);
    }
    
    /**
     * 在指定的集群上部署一个模型，用以提供服务。
     * @param {CreateModelRequest} req
     * @param {function(string, CreateModelResponse):void} cb
     * @public
     */
    CreateModel(req, cb) {
        let resp = new CreateModelResponse();
        this.request("CreateModel", req, resp, cb);
    }

    /**
     * 列举训练任务
     * @param {ListJobsRequest} req
     * @param {function(string, ListJobsResponse):void} cb
     * @public
     */
    ListJobs(req, cb) {
        let resp = new ListJobsResponse();
        this.request("ListJobs", req, resp, cb);
    }

    /**
     * 创建训练任务
     * @param {CreateJobRequest} req
     * @param {function(string, CreateJobResponse):void} cb
     * @public
     */
    CreateJob(req, cb) {
        let resp = new CreateJobResponse();
        this.request("CreateJob", req, resp, cb);
    }

    /**
     * 描述Model
     * @param {DescribeModelRequest} req
     * @param {function(string, DescribeModelResponse):void} cb
     * @public
     */
    DescribeModel(req, cb) {
        let resp = new DescribeModelResponse();
        this.request("DescribeModel", req, resp, cb);
    }

    /**
     * 查询日志
     * @param {QueryLogsRequest} req
     * @param {function(string, QueryLogsResponse):void} cb
     * @public
     */
    QueryLogs(req, cb) {
        let resp = new QueryLogsResponse();
        this.request("QueryLogs", req, resp, cb);
    }

    /**
     * 列举某个指定集群上运行的模型。
     * @param {ListModelsRequest} req
     * @param {function(string, ListModelsResponse):void} cb
     * @public
     */
    ListModels(req, cb) {
        let resp = new ListModelsResponse();
        this.request("ListModels", req, resp, cb);
    }

    /**
     * 删除训练任务
     * @param {DeleteJobRequest} req
     * @param {function(string, DeleteJobResponse):void} cb
     * @public
     */
    DeleteJob(req, cb) {
        let resp = new DeleteJobResponse();
        this.request("DeleteJob", req, resp, cb);
    }

    /**
     * 删除一个指定的Model
     * @param {DeleteModelRequest} req
     * @param {function(string, DeleteModelResponse):void} cb
     * @public
     */
    DeleteModel(req, cb) {
        let resp = new DeleteModelResponse();
        this.request("DeleteModel", req, resp, cb);
    }

    /**
     * 获取训练任务详情
     * @param {DescribeJobRequest} req
     * @param {function(string, DescribeJobResponse):void} cb
     * @public
     */
    DescribeJob(req, cb) {
        let resp = new DescribeJobResponse();
        this.request("DescribeJob", req, resp, cb);
    }

    /**
     * 安装agent
     * @param {InstallAgentRequest} req
     * @param {function(string, InstallAgentResponse):void} cb
     * @public
     */
    InstallAgent(req, cb) {
        let resp = new InstallAgentResponse();
        this.request("InstallAgent", req, resp, cb);
    }


}
module.exports = TiaClient;
