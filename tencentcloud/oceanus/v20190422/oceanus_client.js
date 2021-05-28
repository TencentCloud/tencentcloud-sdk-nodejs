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
const DescribeResourceConfigsResponse = models.DescribeResourceConfigsResponse;
const CreateResourceRequest = models.CreateResourceRequest;
const CreateJobRequest = models.CreateJobRequest;
const ResourceRefDetail = models.ResourceRefDetail;
const StopJobsRequest = models.StopJobsRequest;
const CreateJobResponse = models.CreateJobResponse;
const ResourceLoc = models.ResourceLoc;
const RunJobsRequest = models.RunJobsRequest;
const StopJobDescription = models.StopJobDescription;
const DeleteTableConfigResponse = models.DeleteTableConfigResponse;
const CreateResourceConfigResponse = models.CreateResourceConfigResponse;
const CreateJobConfigRequest = models.CreateJobConfigRequest;
const CreateResourceConfigRequest = models.CreateResourceConfigRequest;
const Property = models.Property;
const DeleteTableConfigRequest = models.DeleteTableConfigRequest;
const SystemResourceItem = models.SystemResourceItem;
const DescribeResourceRelatedJobsRequest = models.DescribeResourceRelatedJobsRequest;
const DeleteResourcesResponse = models.DeleteResourcesResponse;
const CreateJobConfigResponse = models.CreateJobConfigResponse;
const ResourceConfigItem = models.ResourceConfigItem;
const DescribeResourcesRequest = models.DescribeResourcesRequest;
const ResourceLocParam = models.ResourceLocParam;
const DeleteResourceConfigsRequest = models.DeleteResourceConfigsRequest;
const RunJobsResponse = models.RunJobsResponse;
const Filter = models.Filter;
const DeleteResourcesRequest = models.DeleteResourcesRequest;
const DescribeJobsResponse = models.DescribeJobsResponse;
const ResourceItem = models.ResourceItem;
const StopJobsResponse = models.StopJobsResponse;
const CreateResourceResponse = models.CreateResourceResponse;
const DescribeSystemResourcesRequest = models.DescribeSystemResourcesRequest;
const DescribeJobConfigsRequest = models.DescribeJobConfigsRequest;
const DescribeResourcesResponse = models.DescribeResourcesResponse;
const RunJobDescription = models.RunJobDescription;
const DescribeJobConfigsResponse = models.DescribeJobConfigsResponse;
const DeleteResourceConfigsResponse = models.DeleteResourceConfigsResponse;
const DescribeResourceRelatedJobsResponse = models.DescribeResourceRelatedJobsResponse;
const DescribeSystemResourcesResponse = models.DescribeSystemResourcesResponse;
const ResourceRefJobInfo = models.ResourceRefJobInfo;
const ResourceRef = models.ResourceRef;
const DescribeJobsRequest = models.DescribeJobsRequest;
const JobV1 = models.JobV1;
const JobConfig = models.JobConfig;
const DescribeResourceConfigsRequest = models.DescribeResourceConfigsRequest;


/**
 * oceanus client
 * @class
 */
class OceanusClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("oceanus.tencentcloudapi.com", "2019-04-22", credential, region, profile);
    }
    
    /**
     * 批量停止作业，批量操作数量上限为20
     * @param {StopJobsRequest} req
     * @param {function(string, StopJobsResponse):void} cb
     * @public
     */
    StopJobs(req, cb) {
        let resp = new StopJobsResponse();
        this.request("StopJobs", req, resp, cb);
    }

    /**
     * 描述资源接口
     * @param {DescribeResourcesRequest} req
     * @param {function(string, DescribeResourcesResponse):void} cb
     * @public
     */
    DescribeResources(req, cb) {
        let resp = new DescribeResourcesResponse();
        this.request("DescribeResources", req, resp, cb);
    }

    /**
     * 新建作业接口，一个 AppId 最多允许创建1000个作业
     * @param {CreateJobRequest} req
     * @param {function(string, CreateJobResponse):void} cb
     * @public
     */
    CreateJob(req, cb) {
        let resp = new CreateJobResponse();
        this.request("CreateJob", req, resp, cb);
    }

    /**
     * 创建资源接口
     * @param {CreateResourceRequest} req
     * @param {function(string, CreateResourceResponse):void} cb
     * @public
     */
    CreateResource(req, cb) {
        let resp = new CreateResourceResponse();
        this.request("CreateResource", req, resp, cb);
    }

    /**
     * 获取资源关联作业信息
     * @param {DescribeResourceRelatedJobsRequest} req
     * @param {function(string, DescribeResourceRelatedJobsResponse):void} cb
     * @public
     */
    DescribeResourceRelatedJobs(req, cb) {
        let resp = new DescribeResourceRelatedJobsResponse();
        this.request("DescribeResourceRelatedJobs", req, resp, cb);
    }

    /**
     * 批量启动或者恢复作业，批量操作数量上限20
     * @param {RunJobsRequest} req
     * @param {function(string, RunJobsResponse):void} cb
     * @public
     */
    RunJobs(req, cb) {
        let resp = new RunJobsResponse();
        this.request("RunJobs", req, resp, cb);
    }

    /**
     * 删除资源接口
     * @param {DeleteResourcesRequest} req
     * @param {function(string, DeleteResourcesResponse):void} cb
     * @public
     */
    DeleteResources(req, cb) {
        let resp = new DeleteResourcesResponse();
        this.request("DeleteResources", req, resp, cb);
    }

    /**
     * 查询作业
     * @param {DescribeJobsRequest} req
     * @param {function(string, DescribeJobsResponse):void} cb
     * @public
     */
    DescribeJobs(req, cb) {
        let resp = new DescribeJobsResponse();
        this.request("DescribeJobs", req, resp, cb);
    }

    /**
     * 描述系统资源接口
     * @param {DescribeSystemResourcesRequest} req
     * @param {function(string, DescribeSystemResourcesResponse):void} cb
     * @public
     */
    DescribeSystemResources(req, cb) {
        let resp = new DescribeSystemResourcesResponse();
        this.request("DescribeSystemResources", req, resp, cb);
    }

    /**
     * 删除资源版本
     * @param {DeleteResourceConfigsRequest} req
     * @param {function(string, DeleteResourceConfigsResponse):void} cb
     * @public
     */
    DeleteResourceConfigs(req, cb) {
        let resp = new DeleteResourceConfigsResponse();
        this.request("DeleteResourceConfigs", req, resp, cb);
    }

    /**
     * 创建资源配置接口
     * @param {CreateResourceConfigRequest} req
     * @param {function(string, CreateResourceConfigResponse):void} cb
     * @public
     */
    CreateResourceConfig(req, cb) {
        let resp = new CreateResourceConfigResponse();
        this.request("CreateResourceConfig", req, resp, cb);
    }

    /**
     * 创建作业配置，一个作业最多有100个配置版本
     * @param {CreateJobConfigRequest} req
     * @param {function(string, CreateJobConfigResponse):void} cb
     * @public
     */
    CreateJobConfig(req, cb) {
        let resp = new CreateJobConfigResponse();
        this.request("CreateJobConfig", req, resp, cb);
    }

    /**
     * 删除作业表配置
     * @param {DeleteTableConfigRequest} req
     * @param {function(string, DeleteTableConfigResponse):void} cb
     * @public
     */
    DeleteTableConfig(req, cb) {
        let resp = new DeleteTableConfigResponse();
        this.request("DeleteTableConfig", req, resp, cb);
    }

    /**
     * 描述资源配置接口
     * @param {DescribeResourceConfigsRequest} req
     * @param {function(string, DescribeResourceConfigsResponse):void} cb
     * @public
     */
    DescribeResourceConfigs(req, cb) {
        let resp = new DescribeResourceConfigsResponse();
        this.request("DescribeResourceConfigs", req, resp, cb);
    }

    /**
     * 查询作业配置列表，一次最多查询100个
     * @param {DescribeJobConfigsRequest} req
     * @param {function(string, DescribeJobConfigsResponse):void} cb
     * @public
     */
    DescribeJobConfigs(req, cb) {
        let resp = new DescribeJobConfigsResponse();
        this.request("DescribeJobConfigs", req, resp, cb);
    }


}
module.exports = OceanusClient;
