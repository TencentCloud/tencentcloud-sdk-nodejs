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
const EventVar = models.EventVar;
const AnonymousComputeEnv = models.AnonymousComputeEnv;
const DeleteComputeEnvResponse = models.DeleteComputeEnvResponse;
const SubmitJobRequest = models.SubmitJobRequest;
const ComputeEnvData = models.ComputeEnvData;
const Authentication = models.Authentication;
const RetryJobsResponse = models.RetryJobsResponse;
const TerminateComputeNodeRequest = models.TerminateComputeNodeRequest;
const DescribeTaskLogsRequest = models.DescribeTaskLogsRequest;
const AgentRunningMode = models.AgentRunningMode;
const EnvData = models.EnvData;
const DescribeTaskTemplatesRequest = models.DescribeTaskTemplatesRequest;
const EventConfig = models.EventConfig;
const SystemDisk = models.SystemDisk;
const Task = models.Task;
const InstanceTypeConfig = models.InstanceTypeConfig;
const LoginSettings = models.LoginSettings;
const TerminateComputeNodesResponse = models.TerminateComputeNodesResponse;
const DescribeComputeEnvActivitiesResponse = models.DescribeComputeEnvActivitiesResponse;
const TaskInstanceMetrics = models.TaskInstanceMetrics;
const TaskInstanceLog = models.TaskInstanceLog;
const MountDataDisk = models.MountDataDisk;
const TaskView = models.TaskView;
const Externals = models.Externals;
const OsInfo = models.OsInfo;
const DescribeComputeEnvResponse = models.DescribeComputeEnvResponse;
const DescribeCpmOsInfoResponse = models.DescribeCpmOsInfoResponse;
const TerminateJobRequest = models.TerminateJobRequest;
const Application = models.Application;
const EnvDataCpm = models.EnvDataCpm;
const OutputMappingConfig = models.OutputMappingConfig;
const ComputeNodeMetrics = models.ComputeNodeMetrics;
const TaskMetrics = models.TaskMetrics;
const TerminateComputeNodesRequest = models.TerminateComputeNodesRequest;
const LocalDiskType = models.LocalDiskType;
const DescribeComputeEnvActivitiesRequest = models.DescribeComputeEnvActivitiesRequest;
const CreateTaskTemplateRequest = models.CreateTaskTemplateRequest;
const Job = models.Job;
const DeleteComputeEnvRequest = models.DeleteComputeEnvRequest;
const CreateComputeEnvRequest = models.CreateComputeEnvRequest;
const DescribeComputeEnvCreateInfoResponse = models.DescribeComputeEnvCreateInfoResponse;
const TerminateJobResponse = models.TerminateJobResponse;
const ComputeEnvCreateInfo = models.ComputeEnvCreateInfo;
const DescribeComputeEnvCreateInfosRequest = models.DescribeComputeEnvCreateInfosRequest;
const DescribeComputeEnvRequest = models.DescribeComputeEnvRequest;
const InstanceMarketOptionsRequest = models.InstanceMarketOptionsRequest;
const DescribeTaskTemplatesResponse = models.DescribeTaskTemplatesResponse;
const CreateCpmComputeEnvResponse = models.CreateCpmComputeEnvResponse;
const DeleteJobRequest = models.DeleteJobRequest;
const CreateCpmComputeEnvRequest = models.CreateCpmComputeEnvRequest;
const DescribeTaskLogsResponse = models.DescribeTaskLogsResponse;
const NamedCpmComputeEnv = models.NamedCpmComputeEnv;
const DeleteTaskTemplatesRequest = models.DeleteTaskTemplatesRequest;
const DescribeJobResponse = models.DescribeJobResponse;
const DescribeComputeEnvCreateInfoRequest = models.DescribeComputeEnvCreateInfoRequest;
const ModifyTaskTemplateRequest = models.ModifyTaskTemplateRequest;
const DescribeCpmOsInfoRequest = models.DescribeCpmOsInfoRequest;
const DataDisk = models.DataDisk;
const NamedComputeEnv = models.NamedComputeEnv;
const DeleteJobResponse = models.DeleteJobResponse;
const Notification = models.Notification;
const SpotMarketOptions = models.SpotMarketOptions;
const CpmVirtualPrivateCloud = models.CpmVirtualPrivateCloud;
const OutputMapping = models.OutputMapping;
const EnhancedService = models.EnhancedService;
const DescribeJobSubmitInfoResponse = models.DescribeJobSubmitInfoResponse;
const DescribeComputeEnvCreateInfosResponse = models.DescribeComputeEnvCreateInfosResponse;
const RunSecurityServiceEnabled = models.RunSecurityServiceEnabled;
const DescribeJobRequest = models.DescribeJobRequest;
const RedirectInfo = models.RedirectInfo;
const DescribeInstanceCategoriesResponse = models.DescribeInstanceCategoriesResponse;
const ModifyTaskTemplateResponse = models.ModifyTaskTemplateResponse;
const SubmitJobResponse = models.SubmitJobResponse;
const InputMapping = models.InputMapping;
const RedirectLocalInfo = models.RedirectLocalInfo;
const DescribeJobSubmitInfoRequest = models.DescribeJobSubmitInfoRequest;
const Dependence = models.Dependence;
const Filter = models.Filter;
const CreateComputeEnvResponse = models.CreateComputeEnvResponse;
const Docker = models.Docker;
const ModifyComputeEnvResponse = models.ModifyComputeEnvResponse;
const Placement = models.Placement;
const ComputeNode = models.ComputeNode;
const ItemPrice = models.ItemPrice;
const InstanceTypeQuotaItem = models.InstanceTypeQuotaItem;
const CreateTaskTemplateResponse = models.CreateTaskTemplateResponse;
const StorageBlock = models.StorageBlock;
const DescribeJobsRequest = models.DescribeJobsRequest;
const TaskTemplateView = models.TaskTemplateView;
const InstanceTypeOptions = models.InstanceTypeOptions;
const DeleteTaskTemplatesResponse = models.DeleteTaskTemplatesResponse;
const DescribeCvmZoneInstanceConfigInfosRequest = models.DescribeCvmZoneInstanceConfigInfosRequest;
const TerminateTaskInstanceRequest = models.TerminateTaskInstanceRequest;
const TerminateTaskInstanceResponse = models.TerminateTaskInstanceResponse;
const RetryJobsRequest = models.RetryJobsRequest;
const TaskInstanceView = models.TaskInstanceView;
const DescribeAvailableCvmInstanceTypesResponse = models.DescribeAvailableCvmInstanceTypesResponse;
const DescribeTaskResponse = models.DescribeTaskResponse;
const InstanceCategoryItem = models.InstanceCategoryItem;
const ComputeEnvView = models.ComputeEnvView;
const DescribeComputeEnvsResponse = models.DescribeComputeEnvsResponse;
const DescribeTaskRequest = models.DescribeTaskRequest;
const DescribeComputeEnvsRequest = models.DescribeComputeEnvsRequest;
const DescribeCvmZoneInstanceConfigInfosResponse = models.DescribeCvmZoneInstanceConfigInfosResponse;
const DescribeJobsResponse = models.DescribeJobsResponse;
const Activity = models.Activity;
const RunMonitorServiceEnabled = models.RunMonitorServiceEnabled;
const TerminateComputeNodeResponse = models.TerminateComputeNodeResponse;
const VirtualPrivateCloud = models.VirtualPrivateCloud;
const DescribeAvailableCvmInstanceTypesRequest = models.DescribeAvailableCvmInstanceTypesRequest;
const DescribeInstanceCategoriesRequest = models.DescribeInstanceCategoriesRequest;
const ModifyComputeEnvRequest = models.ModifyComputeEnvRequest;
const InternetAccessible = models.InternetAccessible;
const JobView = models.JobView;
const EnvVar = models.EnvVar;


/**
 * batch client
 * @class
 */
class BatchClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("batch.tencentcloudapi.com", "2017-03-12", credential, region, profile);
    }
    
    /**
     * 用于查询计算环境的详细信息
     * @param {DescribeComputeEnvRequest} req
     * @param {function(string, DescribeComputeEnvResponse):void} cb
     * @public
     */
    DescribeComputeEnv(req, cb) {
        let resp = new DescribeComputeEnvResponse();
        this.request("DescribeComputeEnv", req, resp, cb);
    }

    /**
     * 用于创建任务模板
     * @param {CreateTaskTemplateRequest} req
     * @param {function(string, CreateTaskTemplateResponse):void} cb
     * @public
     */
    CreateTaskTemplate(req, cb) {
        let resp = new CreateTaskTemplateResponse();
        this.request("CreateTaskTemplate", req, resp, cb);
    }

    /**
     * 创建黑石计算环境
     * @param {CreateCpmComputeEnvRequest} req
     * @param {function(string, CreateCpmComputeEnvResponse):void} cb
     * @public
     */
    CreateCpmComputeEnv(req, cb) {
        let resp = new CreateCpmComputeEnvResponse();
        this.request("CreateCpmComputeEnv", req, resp, cb);
    }

    /**
     * 用于销毁计算节点。
对于状态为CREATED、CREATION_FAILED、RUNNING和ABNORMAL的节点，允许销毁处理。
     * @param {TerminateComputeNodeRequest} req
     * @param {function(string, TerminateComputeNodeResponse):void} cb
     * @public
     */
    TerminateComputeNode(req, cb) {
        let resp = new TerminateComputeNodeResponse();
        this.request("TerminateComputeNode", req, resp, cb);
    }

    /**
     * 用于查询若干个作业的概览信息
     * @param {DescribeJobsRequest} req
     * @param {function(string, DescribeJobsResponse):void} cb
     * @public
     */
    DescribeJobs(req, cb) {
        let resp = new DescribeJobsResponse();
        this.request("DescribeJobs", req, resp, cb);
    }

    /**
     * 查看可用的CVM机型配置信息
     * @param {DescribeAvailableCvmInstanceTypesRequest} req
     * @param {function(string, DescribeAvailableCvmInstanceTypesResponse):void} cb
     * @public
     */
    DescribeAvailableCvmInstanceTypes(req, cb) {
        let resp = new DescribeAvailableCvmInstanceTypesResponse();
        this.request("DescribeAvailableCvmInstanceTypes", req, resp, cb);
    }

    /**
     * 用于创建计算环境
     * @param {CreateComputeEnvRequest} req
     * @param {function(string, CreateComputeEnvResponse):void} cb
     * @public
     */
    CreateComputeEnv(req, cb) {
        let resp = new CreateComputeEnvResponse();
        this.request("CreateComputeEnv", req, resp, cb);
    }

    /**
     * 用于删除计算环境
     * @param {DeleteComputeEnvRequest} req
     * @param {function(string, DeleteComputeEnvResponse):void} cb
     * @public
     */
    DeleteComputeEnv(req, cb) {
        let resp = new DeleteComputeEnvResponse();
        this.request("DeleteComputeEnv", req, resp, cb);
    }

    /**
     * 用于获取任务多个实例标准输出和标准错误日志。
     * @param {DescribeTaskLogsRequest} req
     * @param {function(string, DescribeTaskLogsResponse):void} cb
     * @public
     */
    DescribeTaskLogs(req, cb) {
        let resp = new DescribeTaskLogsResponse();
        this.request("DescribeTaskLogs", req, resp, cb);
    }

    /**
     * 用于终止作业。
当作业处于“SUBMITTED”状态时，禁止终止操作；当作业处于“SUCCEED”状态时，终止操作不会生效。
终止作业是一个异步过程。整个终止过程的耗时和任务总数成正比。终止的效果相当于所含的所有任务实例进行TerminateTaskInstance操作。具体效果和用法可参考TerminateTaskInstance。
     * @param {TerminateJobRequest} req
     * @param {function(string, TerminateJobResponse):void} cb
     * @public
     */
    TerminateJob(req, cb) {
        let resp = new TerminateJobResponse();
        this.request("TerminateJob", req, resp, cb);
    }

    /**
     * 用于查询指定任务的详细信息，包括任务内部的任务实例信息。
     * @param {DescribeTaskRequest} req
     * @param {function(string, DescribeTaskResponse):void} cb
     * @public
     */
    DescribeTask(req, cb) {
        let resp = new DescribeTaskResponse();
        this.request("DescribeTask", req, resp, cb);
    }

    /**
     * 获取批量计算可用区机型配置信息
     * @param {DescribeCvmZoneInstanceConfigInfosRequest} req
     * @param {function(string, DescribeCvmZoneInstanceConfigInfosResponse):void} cb
     * @public
     */
    DescribeCvmZoneInstanceConfigInfos(req, cb) {
        let resp = new DescribeCvmZoneInstanceConfigInfosResponse();
        this.request("DescribeCvmZoneInstanceConfigInfos", req, resp, cb);
    }

    /**
     * 用于查看一个作业的详细信息，包括内部任务（Task）和依赖（Dependence）信息。
     * @param {DescribeJobRequest} req
     * @param {function(string, DescribeJobResponse):void} cb
     * @public
     */
    DescribeJob(req, cb) {
        let resp = new DescribeJobResponse();
        this.request("DescribeJob", req, resp, cb);
    }

    /**
     * 用于提交一个作业
     * @param {SubmitJobRequest} req
     * @param {function(string, SubmitJobResponse):void} cb
     * @public
     */
    SubmitJob(req, cb) {
        let resp = new SubmitJobResponse();
        this.request("SubmitJob", req, resp, cb);
    }

    /**
     * 用于批量销毁计算节点，不允许重复销毁同一个节点。
     * @param {TerminateComputeNodesRequest} req
     * @param {function(string, TerminateComputeNodesResponse):void} cb
     * @public
     */
    TerminateComputeNodes(req, cb) {
        let resp = new TerminateComputeNodesResponse();
        this.request("TerminateComputeNodes", req, resp, cb);
    }

    /**
     * 用于查询任务模板信息
     * @param {DescribeTaskTemplatesRequest} req
     * @param {function(string, DescribeTaskTemplatesResponse):void} cb
     * @public
     */
    DescribeTaskTemplates(req, cb) {
        let resp = new DescribeTaskTemplatesResponse();
        this.request("DescribeTaskTemplates", req, resp, cb);
    }

    /**
     * 目前对CVM现有实例族分类，每一类包含若干实例族。该接口用于查询实例分类信息。
     * @param {DescribeInstanceCategoriesRequest} req
     * @param {function(string, DescribeInstanceCategoriesResponse):void} cb
     * @public
     */
    DescribeInstanceCategories(req, cb) {
        let resp = new DescribeInstanceCategoriesResponse();
        this.request("DescribeInstanceCategories", req, resp, cb);
    }

    /**
     * 用于删除任务模板信息
     * @param {DeleteTaskTemplatesRequest} req
     * @param {function(string, DeleteTaskTemplatesResponse):void} cb
     * @public
     */
    DeleteTaskTemplates(req, cb) {
        let resp = new DeleteTaskTemplatesResponse();
        this.request("DeleteTaskTemplates", req, resp, cb);
    }

    /**
     * 用于终止任务实例。
对于状态已经为“SUCCEED”和“FAILED”的任务实例，不做处理。
对于状态为“SUBMITTED”、“PENDING”、“RUNNABLE”的任务实例，状态将置为“FAILED”状态。
对于状态为“STARTING”、“RUNNING”、“FAILED_INTERRUPTED”的任务实例，分区两种情况：如果未显示指定计算环境，会先销毁CVM服务器，然后将状态置为“FAILED”，具有一定耗时；如果指定了计算环境EnvId，任务实例状态置为“FAILED”，并重启执行该任务的CVM服务器，具有一定的耗时。
对于状态为“FAILED_INTERRUPTED”的任务实例，终止操作实际成功之后，相关资源和配额才会释放。
     * @param {TerminateTaskInstanceRequest} req
     * @param {function(string, TerminateTaskInstanceResponse):void} cb
     * @public
     */
    TerminateTaskInstance(req, cb) {
        let resp = new TerminateTaskInstanceResponse();
        this.request("TerminateTaskInstance", req, resp, cb);
    }

    /**
     * 用于修改计算环境属性
     * @param {ModifyComputeEnvRequest} req
     * @param {function(string, ModifyComputeEnvResponse):void} cb
     * @public
     */
    ModifyComputeEnv(req, cb) {
        let resp = new ModifyComputeEnvResponse();
        this.request("ModifyComputeEnv", req, resp, cb);
    }

    /**
     * 用于查询指定作业的提交信息，其返回内容包括 JobId 和 SubmitJob 接口中作为输入参数的作业提交信息
     * @param {DescribeJobSubmitInfoRequest} req
     * @param {function(string, DescribeJobSubmitInfoResponse):void} cb
     * @public
     */
    DescribeJobSubmitInfo(req, cb) {
        let resp = new DescribeJobSubmitInfoResponse();
        this.request("DescribeJobSubmitInfo", req, resp, cb);
    }

    /**
     * 查看计算环境的创建信息。
     * @param {DescribeComputeEnvCreateInfoRequest} req
     * @param {function(string, DescribeComputeEnvCreateInfoResponse):void} cb
     * @public
     */
    DescribeComputeEnvCreateInfo(req, cb) {
        let resp = new DescribeComputeEnvCreateInfoResponse();
        this.request("DescribeComputeEnvCreateInfo", req, resp, cb);
    }

    /**
     * 用于查询计算环境的活动信息
     * @param {DescribeComputeEnvActivitiesRequest} req
     * @param {function(string, DescribeComputeEnvActivitiesResponse):void} cb
     * @public
     */
    DescribeComputeEnvActivities(req, cb) {
        let resp = new DescribeComputeEnvActivitiesResponse();
        this.request("DescribeComputeEnvActivities", req, resp, cb);
    }

    /**
     * 用于查看计算环境创建信息列表，包括名称、描述、类型、环境参数、通知及期望节点数等。
     * @param {DescribeComputeEnvCreateInfosRequest} req
     * @param {function(string, DescribeComputeEnvCreateInfosResponse):void} cb
     * @public
     */
    DescribeComputeEnvCreateInfos(req, cb) {
        let resp = new DescribeComputeEnvCreateInfosResponse();
        this.request("DescribeComputeEnvCreateInfos", req, resp, cb);
    }

    /**
     * 用于删除作业记录。
删除作业的效果相当于删除作业相关的所有信息。删除成功后，作业相关的所有信息都无法查询。
待删除的作业必须处于完结状态，且其内部包含的所有任务实例也必须处于完结状态，否则会禁止操作。完结状态，是指处于 SUCCEED 或 FAILED 状态。
     * @param {DeleteJobRequest} req
     * @param {function(string, DeleteJobResponse):void} cb
     * @public
     */
    DeleteJob(req, cb) {
        let resp = new DeleteJobResponse();
        this.request("DeleteJob", req, resp, cb);
    }

    /**
     * 创建黑石计算环境时，查询批量计算环境支持的黑石操作系统信息
     * @param {DescribeCpmOsInfoRequest} req
     * @param {function(string, DescribeCpmOsInfoResponse):void} cb
     * @public
     */
    DescribeCpmOsInfo(req, cb) {
        let resp = new DescribeCpmOsInfoResponse();
        this.request("DescribeCpmOsInfo", req, resp, cb);
    }

    /**
     * 用于查看计算环境列表
     * @param {DescribeComputeEnvsRequest} req
     * @param {function(string, DescribeComputeEnvsResponse):void} cb
     * @public
     */
    DescribeComputeEnvs(req, cb) {
        let resp = new DescribeComputeEnvsResponse();
        this.request("DescribeComputeEnvs", req, resp, cb);
    }

    /**
     * 用于修改任务模板
     * @param {ModifyTaskTemplateRequest} req
     * @param {function(string, ModifyTaskTemplateResponse):void} cb
     * @public
     */
    ModifyTaskTemplate(req, cb) {
        let resp = new ModifyTaskTemplateResponse();
        this.request("ModifyTaskTemplate", req, resp, cb);
    }

    /**
     * 用于重试作业中失败的任务实例。
当且仅当作业处于“FAILED”状态，支持重试操作。重试操作成功后，作业会按照“DAG”中指定的任务依赖关系，依次重试各个任务中失败的任务实例。任务实例的历史信息将被重置，如同首次运行一样，参与后续的调度和执行。
     * @param {RetryJobsRequest} req
     * @param {function(string, RetryJobsResponse):void} cb
     * @public
     */
    RetryJobs(req, cb) {
        let resp = new RetryJobsResponse();
        this.request("RetryJobs", req, resp, cb);
    }


}
module.exports = BatchClient;
