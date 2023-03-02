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
const DescribeNodesRequest = models.DescribeNodesRequest;
const Label = models.Label;
const Field = models.Field;
const KeyValuePair = models.KeyValuePair;
const TaskResult = models.TaskResult;
const SuspendProbeTaskResponse = models.SuspendProbeTaskResponse;
const ProbeTaskBasicConfiguration = models.ProbeTaskBasicConfiguration;
const DescribeProbeMetricDataResponse = models.DescribeProbeMetricDataResponse;
const DescribeDetailedSingleProbeDataRequest = models.DescribeDetailedSingleProbeDataRequest;
const DescribeProbeTasksResponse = models.DescribeProbeTasksResponse;
const UpdateProbeTaskAttributesResponse = models.UpdateProbeTaskAttributesResponse;
const DeleteProbeTaskRequest = models.DeleteProbeTaskRequest;
const DescribeDetailedSingleProbeDataResponse = models.DescribeDetailedSingleProbeDataResponse;
const SuspendProbeTaskRequest = models.SuspendProbeTaskRequest;
const DescribeProbeMetricDataRequest = models.DescribeProbeMetricDataRequest;
const UpdateProbeTaskAttributesRequest = models.UpdateProbeTaskAttributesRequest;
const DescribeProbeNodesResponse = models.DescribeProbeNodesResponse;
const UpdateProbeTaskConfigurationListRequest = models.UpdateProbeTaskConfigurationListRequest;
const CreateProbeTasksRequest = models.CreateProbeTasksRequest;
const ProbeTask = models.ProbeTask;
const DescribeProbeTasksRequest = models.DescribeProbeTasksRequest;
const ResumeProbeTaskResponse = models.ResumeProbeTaskResponse;
const DeleteProbeTaskResponse = models.DeleteProbeTaskResponse;
const CreateProbeTasksResponse = models.CreateProbeTasksResponse;
const ResumeProbeTaskRequest = models.ResumeProbeTaskRequest;
const NodeDefineExt = models.NodeDefineExt;
const DescribeProbeNodesRequest = models.DescribeProbeNodesRequest;
const NodeDefine = models.NodeDefine;
const Tag = models.Tag;
const DescribeNodesResponse = models.DescribeNodesResponse;
const UpdateProbeTaskConfigurationListResponse = models.UpdateProbeTaskConfigurationListResponse;
const DetailedSingleDataDefine = models.DetailedSingleDataDefine;


/**
 * cat client
 * @class
 */
class CatClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("cat.tencentcloudapi.com", "2018-04-09", credential, region, profile);
    }
    
    /**
     * 暂停拨测任务
     * @param {SuspendProbeTaskRequest} req
     * @param {function(string, SuspendProbeTaskResponse):void} cb
     * @public
     */
    SuspendProbeTask(req, cb) {
        let resp = new SuspendProbeTaskResponse();
        this.request("SuspendProbeTask", req, resp, cb);
    }

    /**
     * 查询云拨测指标数据，指标支持使用sum,avg,max,min聚合函数进行指标数据查询
     * @param {DescribeProbeMetricDataRequest} req
     * @param {function(string, DescribeProbeMetricDataResponse):void} cb
     * @public
     */
    DescribeProbeMetricData(req, cb) {
        let resp = new DescribeProbeMetricDataResponse();
        this.request("DescribeProbeMetricData", req, resp, cb);
    }

    /**
     * 查询拨测任务列表
     * @param {DescribeProbeTasksRequest} req
     * @param {function(string, DescribeProbeTasksResponse):void} cb
     * @public
     */
    DescribeProbeTasks(req, cb) {
        let resp = new DescribeProbeTasksResponse();
        this.request("DescribeProbeTasks", req, resp, cb);
    }

    /**
     * 更新探测任务属性
     * @param {UpdateProbeTaskAttributesRequest} req
     * @param {function(string, UpdateProbeTaskAttributesResponse):void} cb
     * @public
     */
    UpdateProbeTaskAttributes(req, cb) {
        let resp = new UpdateProbeTaskAttributesResponse();
        this.request("UpdateProbeTaskAttributes", req, resp, cb);
    }

    /**
     * 获取拨测节点
     * @param {DescribeNodesRequest} req
     * @param {function(string, DescribeNodesResponse):void} cb
     * @public
     */
    DescribeNodes(req, cb) {
        let resp = new DescribeNodesResponse();
        this.request("DescribeNodes", req, resp, cb);
    }

    /**
     * 查询拨测节点
     * @param {DescribeProbeNodesRequest} req
     * @param {function(string, DescribeProbeNodesResponse):void} cb
     * @public
     */
    DescribeProbeNodes(req, cb) {
        let resp = new DescribeProbeNodesResponse();
        this.request("DescribeProbeNodes", req, resp, cb);
    }

    /**
     * 批量更新拨测任务配置
     * @param {UpdateProbeTaskConfigurationListRequest} req
     * @param {function(string, UpdateProbeTaskConfigurationListResponse):void} cb
     * @public
     */
    UpdateProbeTaskConfigurationList(req, cb) {
        let resp = new UpdateProbeTaskConfigurationListResponse();
        this.request("UpdateProbeTaskConfigurationList", req, resp, cb);
    }

    /**
     * 批量创建拨测任务
     * @param {CreateProbeTasksRequest} req
     * @param {function(string, CreateProbeTasksResponse):void} cb
     * @public
     */
    CreateProbeTasks(req, cb) {
        let resp = new CreateProbeTasksResponse();
        this.request("CreateProbeTasks", req, resp, cb);
    }

    /**
     * 根据时间范围、任务ID、运营商等条件查询单次拨测详情数据
     * @param {DescribeDetailedSingleProbeDataRequest} req
     * @param {function(string, DescribeDetailedSingleProbeDataResponse):void} cb
     * @public
     */
    DescribeDetailedSingleProbeData(req, cb) {
        let resp = new DescribeDetailedSingleProbeDataResponse();
        this.request("DescribeDetailedSingleProbeData", req, resp, cb);
    }

    /**
     * 删除拨测任务
     * @param {DeleteProbeTaskRequest} req
     * @param {function(string, DeleteProbeTaskResponse):void} cb
     * @public
     */
    DeleteProbeTask(req, cb) {
        let resp = new DeleteProbeTaskResponse();
        this.request("DeleteProbeTask", req, resp, cb);
    }

    /**
     * 恢复拨测任务
     * @param {ResumeProbeTaskRequest} req
     * @param {function(string, ResumeProbeTaskResponse):void} cb
     * @public
     */
    ResumeProbeTask(req, cb) {
        let resp = new ResumeProbeTaskResponse();
        this.request("ResumeProbeTask", req, resp, cb);
    }


}
module.exports = CatClient;
