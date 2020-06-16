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
const DisableRsgAsGroupRequest = models.DisableRsgAsGroupRequest;
const ExposeServiceResponse = models.ExposeServiceResponse;
const RsgAsActivityRelatedInstance = models.RsgAsActivityRelatedInstance;
const DeleteJobResponse = models.DeleteJobResponse;
const DeleteRuntimeResponse = models.DeleteRuntimeResponse;
const CreateJobRequest = models.CreateJobRequest;
const ExposeServiceRequest = models.ExposeServiceRequest;
const DescribeServiceConfigsResponse = models.DescribeServiceConfigsResponse;
const Scaler = models.Scaler;
const CreateJobResponse = models.CreateJobResponse;
const DeleteServiceResponse = models.DeleteServiceResponse;
const DescribeRsgAsGroupsResponse = models.DescribeRsgAsGroupsResponse;
const UpdateServiceResponse = models.UpdateServiceResponse;
const Instance = models.Instance;
const UpdateRsgAsGroupResponse = models.UpdateRsgAsGroupResponse;
const DescribeServicesResponse = models.DescribeServicesResponse;
const DescribeResourceGroupsResponse = models.DescribeResourceGroupsResponse;
const DescribeRsgAsGroupsRequest = models.DescribeRsgAsGroupsRequest;
const DeleteResourceGroupRequest = models.DeleteResourceGroupRequest;
const Conditions = models.Conditions;
const DescribeServiceConfigsRequest = models.DescribeServiceConfigsRequest;
const DeleteRsgAsGroupRequest = models.DeleteRsgAsGroupRequest;
const ReplicaInfo = models.ReplicaInfo;
const DeleteServiceConfigResponse = models.DeleteServiceConfigResponse;
const UpdateRsgAsGroupRequest = models.UpdateRsgAsGroupRequest;
const DeleteRsgAsGroupResponse = models.DeleteRsgAsGroupResponse;
const Config = models.Config;
const Option = models.Option;
const PredictInput = models.PredictInput;
const CreateRuntimeResponse = models.CreateRuntimeResponse;
const Job = models.Job;
const UpdateJobRequest = models.UpdateJobRequest;
const DescribeResourceGroupsRequest = models.DescribeResourceGroupsRequest;
const DescribeRuntimesResponse = models.DescribeRuntimesResponse;
const DeleteInstanceResponse = models.DeleteInstanceResponse;
const DescribeInstancesResponse = models.DescribeInstancesResponse;
const DeleteResourceGroupResponse = models.DeleteResourceGroupResponse;
const DisableRsgAsGroupResponse = models.DisableRsgAsGroupResponse;
const DescribeInstancesRequest = models.DescribeInstancesRequest;
const CreateServiceResponse = models.CreateServiceResponse;
const CreateServiceRequest = models.CreateServiceRequest;
const EnableRsgAsGroupResponse = models.EnableRsgAsGroupResponse;
const JobStatus = models.JobStatus;
const UpdateServiceRequest = models.UpdateServiceRequest;
const Filter = models.Filter;
const CreateServiceConfigResponse = models.CreateServiceConfigResponse;
const ExposeInfo = models.ExposeInfo;
const RsgAsGroup = models.RsgAsGroup;
const DeleteServiceRequest = models.DeleteServiceRequest;
const Runtime = models.Runtime;
const CreateRsgAsGroupResponse = models.CreateRsgAsGroupResponse;
const ServiceStatus = models.ServiceStatus;
const RsgAsGroupActivity = models.RsgAsGroupActivity;
const DescribeRsgAsGroupActivitiesRequest = models.DescribeRsgAsGroupActivitiesRequest;
const ResourceGroup = models.ResourceGroup;
const DeleteJobRequest = models.DeleteJobRequest;
const DeleteInstanceRequest = models.DeleteInstanceRequest;
const CreateRsgAsGroupRequest = models.CreateRsgAsGroupRequest;
const DescribeRuntimesRequest = models.DescribeRuntimesRequest;
const EnableRsgAsGroupRequest = models.EnableRsgAsGroupRequest;
const CreateServiceConfigRequest = models.CreateServiceConfigRequest;
const QuantizationInput = models.QuantizationInput;
const UpdateJobResponse = models.UpdateJobResponse;
const CreateRuntimeRequest = models.CreateRuntimeRequest;
const ModelService = models.ModelService;
const DeleteServiceConfigRequest = models.DeleteServiceConfigRequest;
const DeleteRuntimeRequest = models.DeleteRuntimeRequest;
const DescribeRsgAsGroupActivitiesResponse = models.DescribeRsgAsGroupActivitiesResponse;
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
     * 创建资源组的伸缩组。当前一个资源组仅允许创建一个伸缩组。
     * @param {CreateRsgAsGroupRequest} req
     * @param {function(string, CreateRsgAsGroupResponse):void} cb
     * @public
     */
    CreateRsgAsGroup(req, cb) {
        let resp = new CreateRsgAsGroupResponse();
        this.request("CreateRsgAsGroup", req, resp, cb);
    }

    /**
     * 删除资源组中的节点。目前仅支持删除已经到期的预付费节点，和按量付费节点。
     * @param {DeleteInstanceRequest} req
     * @param {function(string, DeleteInstanceResponse):void} cb
     * @public
     */
    DeleteInstance(req, cb) {
        let resp = new DeleteInstanceResponse();
        this.request("DeleteInstance", req, resp, cb);
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
     * 更新资源组的伸缩组
     * @param {UpdateRsgAsGroupRequest} req
     * @param {function(string, UpdateRsgAsGroupResponse):void} cb
     * @public
     */
    UpdateRsgAsGroup(req, cb) {
        let resp = new UpdateRsgAsGroupResponse();
        this.request("UpdateRsgAsGroup", req, resp, cb);
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
     * 停用资源组的伸缩组
     * @param {DisableRsgAsGroupRequest} req
     * @param {function(string, DisableRsgAsGroupResponse):void} cb
     * @public
     */
    DisableRsgAsGroup(req, cb) {
        let resp = new DisableRsgAsGroupResponse();
        this.request("DisableRsgAsGroup", req, resp, cb);
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
     * 查询伸缩组活动
     * @param {DescribeRsgAsGroupActivitiesRequest} req
     * @param {function(string, DescribeRsgAsGroupActivitiesResponse):void} cb
     * @public
     */
    DescribeRsgAsGroupActivities(req, cb) {
        let resp = new DescribeRsgAsGroupActivitiesResponse();
        this.request("DescribeRsgAsGroupActivities", req, resp, cb);
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
     * 获取资源组列表
     * @param {DescribeResourceGroupsRequest} req
     * @param {function(string, DescribeResourceGroupsResponse):void} cb
     * @public
     */
    DescribeResourceGroups(req, cb) {
        let resp = new DescribeResourceGroupsResponse();
        this.request("DescribeResourceGroups", req, resp, cb);
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
     * 伸缩
     * @param {DeleteRsgAsGroupRequest} req
     * @param {function(string, DeleteRsgAsGroupResponse):void} cb
     * @public
     */
    DeleteRsgAsGroup(req, cb) {
        let resp = new DeleteRsgAsGroupResponse();
        this.request("DeleteRsgAsGroup", req, resp, cb);
    }

    /**
     * 删除资源组
     * @param {DeleteResourceGroupRequest} req
     * @param {function(string, DeleteResourceGroupResponse):void} cb
     * @public
     */
    DeleteResourceGroup(req, cb) {
        let resp = new DeleteResourceGroupResponse();
        this.request("DeleteResourceGroup", req, resp, cb);
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
     * 启用资源组的伸缩组
     * @param {EnableRsgAsGroupRequest} req
     * @param {function(string, EnableRsgAsGroupResponse):void} cb
     * @public
     */
    EnableRsgAsGroup(req, cb) {
        let resp = new EnableRsgAsGroupResponse();
        this.request("EnableRsgAsGroup", req, resp, cb);
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
     * 查询资源组的伸缩组信息
     * @param {DescribeRsgAsGroupsRequest} req
     * @param {function(string, DescribeRsgAsGroupsResponse):void} cb
     * @public
     */
    DescribeRsgAsGroups(req, cb) {
        let resp = new DescribeRsgAsGroupsResponse();
        this.request("DescribeRsgAsGroups", req, resp, cb);
    }


}
module.exports = TiemsClient;
