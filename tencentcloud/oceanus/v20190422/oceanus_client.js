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
const CopyJobResult = models.CopyJobResult;
const CreateResourceRequest = models.CreateResourceRequest;
const CheckSavepointRequest = models.CheckSavepointRequest;
const CreateJobRequest = models.CreateJobRequest;
const ResourceRefDetail = models.ResourceRefDetail;
const StopJobsRequest = models.StopJobsRequest;
const CreateJobResponse = models.CreateJobResponse;
const ResourceLoc = models.ResourceLoc;
const RunJobsRequest = models.RunJobsRequest;
const CCN = models.CCN;
const DeleteJobsRequest = models.DeleteJobsRequest;
const StopJobDescription = models.StopJobDescription;
const CreateFolderRequest = models.CreateFolderRequest;
const ModifyJobResponse = models.ModifyJobResponse;
const CreateJobConfigResponse = models.CreateJobConfigResponse;
const CreateResourceConfigResponse = models.CreateResourceConfigResponse;
const CreateJobConfigRequest = models.CreateJobConfigRequest;
const CreateResourceConfigRequest = models.CreateResourceConfigRequest;
const DescribeSystemResourcesResponse = models.DescribeSystemResourcesResponse;
const ClusterVersion = models.ClusterVersion;
const DescribeClustersRequest = models.DescribeClustersRequest;
const DescribeTreeJobsResponse = models.DescribeTreeJobsResponse;
const DeleteTableConfigRequest = models.DeleteTableConfigRequest;
const CopyJobsRequest = models.CopyJobsRequest;
const CopyJobsResponse = models.CopyJobsResponse;
const Savepoint = models.Savepoint;
const SystemResourceItem = models.SystemResourceItem;
const DescribeResourceRelatedJobsRequest = models.DescribeResourceRelatedJobsRequest;
const DeleteResourcesResponse = models.DeleteResourcesResponse;
const DeleteTableConfigResponse = models.DeleteTableConfigResponse;
const ResourceConfigItem = models.ResourceConfigItem;
const TriggerJobSavepointResponse = models.TriggerJobSavepointResponse;
const Tag = models.Tag;
const DescribeTreeResourcesRsp = models.DescribeTreeResourcesRsp;
const DescribeResourcesRequest = models.DescribeResourcesRequest;
const TreeResourceItem = models.TreeResourceItem;
const ResourceLocParam = models.ResourceLocParam;
const ResourceRefJobInfo = models.ResourceRefJobInfo;
const DescribeJobConfigsRequest = models.DescribeJobConfigsRequest;
const CheckSavepointResponse = models.CheckSavepointResponse;
const DeleteResourceConfigsRequest = models.DeleteResourceConfigsRequest;
const DescribeJobSavepointResponse = models.DescribeJobSavepointResponse;
const DeleteJobsResponse = models.DeleteJobsResponse;
const DescribeTreeResourcesResponse = models.DescribeTreeResourcesResponse;
const RunJobsResponse = models.RunJobsResponse;
const Filter = models.Filter;
const DeleteResourcesRequest = models.DeleteResourcesRequest;
const DescribeJobsResponse = models.DescribeJobsResponse;
const ResourceItem = models.ResourceItem;
const WorkSpaceClusterItem = models.WorkSpaceClusterItem;
const StopJobsResponse = models.StopJobsResponse;
const DescribeJobSavepointRequest = models.DescribeJobSavepointRequest;
const CreateResourceResponse = models.CreateResourceResponse;
const DescribeSystemResourcesRequest = models.DescribeSystemResourcesRequest;
const CreateFolderResponse = models.CreateFolderResponse;
const CopyJobItem = models.CopyJobItem;
const RunJobDescription = models.RunJobDescription;
const ModifyJobRequest = models.ModifyJobRequest;
const DescribeTreeJobsRequest = models.DescribeTreeJobsRequest;
const DescribeJobConfigsResponse = models.DescribeJobConfigsResponse;
const Property = models.Property;
const DeleteResourceConfigsResponse = models.DeleteResourceConfigsResponse;
const DescribeResourceRelatedJobsResponse = models.DescribeResourceRelatedJobsResponse;
const DescribeResourcesResponse = models.DescribeResourcesResponse;
const Cluster = models.Cluster;
const DescribeClustersResponse = models.DescribeClustersResponse;
const TriggerJobSavepointRequest = models.TriggerJobSavepointRequest;
const DescribeResourceConfigsResponse = models.DescribeResourceConfigsResponse;
const ResourceRef = models.ResourceRef;
const DescribeJobsRequest = models.DescribeJobsRequest;
const JobV1 = models.JobV1;
const JobConfig = models.JobConfig;
const DescribeResourceConfigsRequest = models.DescribeResourceConfigsRequest;
const DescribeTreeResourcesRequest = models.DescribeTreeResourcesRequest;


/**
 * oceanus client
 * @class
 */
class OceanusClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("oceanus.tencentcloudapi.com", "2019-04-22", credential, region, profile);
    }
    
    /**
     * 生成树状作业显示结构
     * @param {DescribeTreeJobsRequest} req
     * @param {function(string, DescribeTreeJobsResponse):void} cb
     * @public
     */
    DescribeTreeJobs(req, cb) {
        let resp = new DescribeTreeJobsResponse();
        this.request("DescribeTreeJobs", req, resp, cb);
    }

    /**
     * 查询树状结构资源列表
     * @param {DescribeTreeResourcesRequest} req
     * @param {function(string, DescribeTreeResourcesResponse):void} cb
     * @public
     */
    DescribeTreeResources(req, cb) {
        let resp = new DescribeTreeResourcesResponse();
        this.request("DescribeTreeResources", req, resp, cb);
    }

    /**
     * 单条和批量复制作业
     * @param {CopyJobsRequest} req
     * @param {function(string, CopyJobsResponse):void} cb
     * @public
     */
    CopyJobs(req, cb) {
        let resp = new CopyJobsResponse();
        this.request("CopyJobs", req, resp, cb);
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
     * 查找Savepoint列表
     * @param {DescribeJobSavepointRequest} req
     * @param {function(string, DescribeJobSavepointResponse):void} cb
     * @public
     */
    DescribeJobSavepoint(req, cb) {
        let resp = new DescribeJobSavepointResponse();
        this.request("DescribeJobSavepoint", req, resp, cb);
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
     * 查询集群
     * @param {DescribeClustersRequest} req
     * @param {function(string, DescribeClustersResponse):void} cb
     * @public
     */
    DescribeClusters(req, cb) {
        let resp = new DescribeClustersResponse();
        this.request("DescribeClusters", req, resp, cb);
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
     * 触发Savepoint
     * @param {TriggerJobSavepointRequest} req
     * @param {function(string, TriggerJobSavepointResponse):void} cb
     * @public
     */
    TriggerJobSavepoint(req, cb) {
        let resp = new TriggerJobSavepointResponse();
        this.request("TriggerJobSavepoint", req, resp, cb);
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
     * 批量删除作业接口，批量操作数量上限20
     * @param {DeleteJobsRequest} req
     * @param {function(string, DeleteJobsResponse):void} cb
     * @public
     */
    DeleteJobs(req, cb) {
        let resp = new DeleteJobsResponse();
        this.request("DeleteJobs", req, resp, cb);
    }

    /**
     * 作业列表页面新建文件夹请求
     * @param {CreateFolderRequest} req
     * @param {function(string, CreateFolderResponse):void} cb
     * @public
     */
    CreateFolder(req, cb) {
        let resp = new CreateFolderResponse();
        this.request("CreateFolder", req, resp, cb);
    }

    /**
     * 检查快照是否可用
     * @param {CheckSavepointRequest} req
     * @param {function(string, CheckSavepointResponse):void} cb
     * @public
     */
    CheckSavepoint(req, cb) {
        let resp = new CheckSavepointResponse();
        this.request("CheckSavepoint", req, resp, cb);
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
     * 更新作业属性，仅允许以下3种操作，不支持组合操作：
(1)	更新作业名称
(2)	更新作业备注 
(3)	更新作业最大并行度
变更前提：WorkerCuNum<=MaxParallelism
如果MaxParallelism变小，不重启作业，待下一次重启生效
如果MaxParallelism变大，则要求入参RestartAllowed必须为True
假设作业运行状态，则先停止作业，再启动作业，中间状态丢失
假设作业暂停状态，则将作业更改为停止状态，中间状态丢失


     * @param {ModifyJobRequest} req
     * @param {function(string, ModifyJobResponse):void} cb
     * @public
     */
    ModifyJob(req, cb) {
        let resp = new ModifyJobResponse();
        this.request("ModifyJob", req, resp, cb);
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
