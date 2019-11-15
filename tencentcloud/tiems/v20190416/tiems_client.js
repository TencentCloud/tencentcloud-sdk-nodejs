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
const DeleteJobResponse = models.DeleteJobResponse;
const DeleteRuntimeResponse = models.DeleteRuntimeResponse;
const CreateJobRequest = models.CreateJobRequest;
const ExposeServiceRequest = models.ExposeServiceRequest;
const DescribeServiceConfigsResponse = models.DescribeServiceConfigsResponse;
const CreateJobResponse = models.CreateJobResponse;
const DeleteServiceResponse = models.DeleteServiceResponse;
const UpdateServiceResponse = models.UpdateServiceResponse;
const Instance = models.Instance;
const DescribeServicesResponse = models.DescribeServicesResponse;
const Conditions = models.Conditions;
const DescribeServiceConfigsRequest = models.DescribeServiceConfigsRequest;
const DeleteServiceConfigResponse = models.DeleteServiceConfigResponse;
const Config = models.Config;
const PredictInput = models.PredictInput;
const CreateRuntimeResponse = models.CreateRuntimeResponse;
const Job = models.Job;
const UpdateJobRequest = models.UpdateJobRequest;
const DescribeRuntimesResponse = models.DescribeRuntimesResponse;
const DescribeInstancesResponse = models.DescribeInstancesResponse;
const DescribeInstancesRequest = models.DescribeInstancesRequest;
const CreateServiceResponse = models.CreateServiceResponse;
const CreateServiceRequest = models.CreateServiceRequest;
const JobStatus = models.JobStatus;
const UpdateServiceRequest = models.UpdateServiceRequest;
const Filter = models.Filter;
const CreateServiceConfigResponse = models.CreateServiceConfigResponse;
const ExposeInfo = models.ExposeInfo;
const DeleteServiceRequest = models.DeleteServiceRequest;
const Runtime = models.Runtime;
const ServiceStatus = models.ServiceStatus;
const Option = models.Option;
const DeleteJobRequest = models.DeleteJobRequest;
const Scaler = models.Scaler;
const DescribeRuntimesRequest = models.DescribeRuntimesRequest;
const ExposeServiceResponse = models.ExposeServiceResponse;
const CreateServiceConfigRequest = models.CreateServiceConfigRequest;
const UpdateJobResponse = models.UpdateJobResponse;
const CreateRuntimeRequest = models.CreateRuntimeRequest;
const ModelService = models.ModelService;
const DeleteServiceConfigRequest = models.DeleteServiceConfigRequest;
const DeleteRuntimeRequest = models.DeleteRuntimeRequest;
const DescribeServicesRequest = models.DescribeServicesRequest;


/**
 * tiems client
 * @class
 */
class TiemsClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("tiems.tencentcloudapi.com", "2019-04-16", credential, region, profile);
    }
    
    /**
     * 创建服务
     * @param {CreateServiceRequest} req
     * @param {function(string, CreateServiceResponse):void} cb
     * @public
     */
    CreateService(req, cb) {
        let resp = new CreateServiceResponse();
        this.request("CreateService", req, resp, cb);
    }

    /**
     * 暴露服务
     * @param {ExposeServiceRequest} req
     * @param {function(string, ExposeServiceResponse):void} cb
     * @public
     */
    ExposeService(req, cb) {
        let resp = new ExposeServiceResponse();
        this.request("ExposeService", req, resp, cb);
    }

    /**
     * 描述服务
     * @param {DescribeServicesRequest} req
     * @param {function(string, DescribeServicesResponse):void} cb
     * @public
     */
    DescribeServices(req, cb) {
        let resp = new DescribeServicesResponse();
        this.request("DescribeServices", req, resp, cb);
    }

    /**
     * 创建服务配置
     * @param {CreateServiceConfigRequest} req
     * @param {function(string, CreateServiceConfigResponse):void} cb
     * @public
     */
    CreateServiceConfig(req, cb) {
        let resp = new CreateServiceConfigResponse();
        this.request("CreateServiceConfig", req, resp, cb);
    }

    /**
     * 创建运行环境
     * @param {CreateRuntimeRequest} req
     * @param {function(string, CreateRuntimeResponse):void} cb
     * @public
     */
    CreateRuntime(req, cb) {
        let resp = new CreateRuntimeResponse();
        this.request("CreateRuntime", req, resp, cb);
    }

    /**
     * 更新任务
     * @param {UpdateJobRequest} req
     * @param {function(string, UpdateJobResponse):void} cb
     * @public
     */
    UpdateJob(req, cb) {
        let resp = new UpdateJobResponse();
        this.request("UpdateJob", req, resp, cb);
    }

    /**
     * 删除任务
     * @param {DeleteJobRequest} req
     * @param {function(string, DeleteJobResponse):void} cb
     * @public
     */
    DeleteJob(req, cb) {
        let resp = new DeleteJobResponse();
        this.request("DeleteJob", req, resp, cb);
    }

    /**
     * 删除运行环境
     * @param {DeleteRuntimeRequest} req
     * @param {function(string, DeleteRuntimeResponse):void} cb
     * @public
     */
    DeleteRuntime(req, cb) {
        let resp = new DeleteRuntimeResponse();
        this.request("DeleteRuntime", req, resp, cb);
    }

    /**
     * 描述服务配置
     * @param {DescribeServiceConfigsRequest} req
     * @param {function(string, DescribeServiceConfigsResponse):void} cb
     * @public
     */
    DescribeServiceConfigs(req, cb) {
        let resp = new DescribeServiceConfigsResponse();
        this.request("DescribeServiceConfigs", req, resp, cb);
    }

    /**
     * 删除服务
     * @param {DeleteServiceRequest} req
     * @param {function(string, DeleteServiceResponse):void} cb
     * @public
     */
    DeleteService(req, cb) {
        let resp = new DeleteServiceResponse();
        this.request("DeleteService", req, resp, cb);
    }

    /**
     * 获取节点列表
     * @param {DescribeInstancesRequest} req
     * @param {function(string, DescribeInstancesResponse):void} cb
     * @public
     */
    DescribeInstances(req, cb) {
        let resp = new DescribeInstancesResponse();
        this.request("DescribeInstances", req, resp, cb);
    }

    /**
     * 创建任务
     * @param {CreateJobRequest} req
     * @param {function(string, CreateJobResponse):void} cb
     * @public
     */
    CreateJob(req, cb) {
        let resp = new CreateJobResponse();
        this.request("CreateJob", req, resp, cb);
    }

    /**
     * 删除服务配置
     * @param {DeleteServiceConfigRequest} req
     * @param {function(string, DeleteServiceConfigResponse):void} cb
     * @public
     */
    DeleteServiceConfig(req, cb) {
        let resp = new DeleteServiceConfigResponse();
        this.request("DeleteServiceConfig", req, resp, cb);
    }

    /**
     * 描述服务运行环境
     * @param {DescribeRuntimesRequest} req
     * @param {function(string, DescribeRuntimesResponse):void} cb
     * @public
     */
    DescribeRuntimes(req, cb) {
        let resp = new DescribeRuntimesResponse();
        this.request("DescribeRuntimes", req, resp, cb);
    }

    /**
     * 更新服务
     * @param {UpdateServiceRequest} req
     * @param {function(string, UpdateServiceResponse):void} cb
     * @public
     */
    UpdateService(req, cb) {
        let resp = new UpdateServiceResponse();
        this.request("UpdateService", req, resp, cb);
    }


}
module.exports = TiemsClient;
