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
const OutputDataConfig = models.OutputDataConfig;
const StopTrainingJobResponse = models.StopTrainingJobResponse;
const EnvConfig = models.EnvConfig;
const CreateNotebookInstanceRequest = models.CreateNotebookInstanceRequest;
const NotebookInstanceSummary = models.NotebookInstanceSummary;
const DescribeNotebookInstanceRequest = models.DescribeNotebookInstanceRequest;
const DeleteNotebookInstanceResponse = models.DeleteNotebookInstanceResponse;
const StoppingCondition = models.StoppingCondition;
const ResourceConfig = models.ResourceConfig;
const DescribeTrainingJobResponse = models.DescribeTrainingJobResponse;
const DescribeNotebookInstancesRequest = models.DescribeNotebookInstancesRequest;
const InputDataConfig = models.InputDataConfig;
const StartNotebookInstanceResponse = models.StartNotebookInstanceResponse;
const CreateNotebookInstanceResponse = models.CreateNotebookInstanceResponse;
const FileSystemDataSource = models.FileSystemDataSource;
const StopTrainingJobRequest = models.StopTrainingJobRequest;
const UpdateNotebookInstanceRequest = models.UpdateNotebookInstanceRequest;
const CreatePresignedNotebookInstanceUrlRequest = models.CreatePresignedNotebookInstanceUrlRequest;
const CosDataSource = models.CosDataSource;
const DescribeTrainingJobRequest = models.DescribeTrainingJobRequest;
const DescribeNotebookInstancesResponse = models.DescribeNotebookInstancesResponse;
const CreateTrainingJobResponse = models.CreateTrainingJobResponse;
const DescribeNotebookInstanceResponse = models.DescribeNotebookInstanceResponse;
const AlgorithmSpecification = models.AlgorithmSpecification;
const StopNotebookInstanceRequest = models.StopNotebookInstanceRequest;
const StopNotebookInstanceResponse = models.StopNotebookInstanceResponse;
const CreateTrainingJobRequest = models.CreateTrainingJobRequest;
const DeleteNotebookInstanceRequest = models.DeleteNotebookInstanceRequest;
const VpcConfig = models.VpcConfig;
const CreatePresignedNotebookInstanceUrlResponse = models.CreatePresignedNotebookInstanceUrlResponse;
const StartNotebookInstanceRequest = models.StartNotebookInstanceRequest;
const UpdateNotebookInstanceResponse = models.UpdateNotebookInstanceResponse;
const Tag = models.Tag;
const SecondaryStatusTransition = models.SecondaryStatusTransition;
const DataSource = models.DataSource;
const ModelArtifacts = models.ModelArtifacts;


/**
 * tione client
 * @class
 */
class TioneClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("tione.tencentcloudapi.com", "2019-10-22", credential, region, profile);
    }
    
    /**
     * 查询训练任务
     * @param {DescribeTrainingJobRequest} req
     * @param {function(string, DescribeTrainingJobResponse):void} cb
     * @public
     */
    DescribeTrainingJob(req, cb) {
        let resp = new DescribeTrainingJobResponse();
        this.request("DescribeTrainingJob", req, resp, cb);
    }

    /**
     * 停止Notebook实例
     * @param {StopNotebookInstanceRequest} req
     * @param {function(string, StopNotebookInstanceResponse):void} cb
     * @public
     */
    StopNotebookInstance(req, cb) {
        let resp = new StopNotebookInstanceResponse();
        this.request("StopNotebookInstance", req, resp, cb);
    }

    /**
     * 更新Notebook实例
     * @param {UpdateNotebookInstanceRequest} req
     * @param {function(string, UpdateNotebookInstanceResponse):void} cb
     * @public
     */
    UpdateNotebookInstance(req, cb) {
        let resp = new UpdateNotebookInstanceResponse();
        this.request("UpdateNotebookInstance", req, resp, cb);
    }

    /**
     * 查询Notebook实例详情
     * @param {DescribeNotebookInstanceRequest} req
     * @param {function(string, DescribeNotebookInstanceResponse):void} cb
     * @public
     */
    DescribeNotebookInstance(req, cb) {
        let resp = new DescribeNotebookInstanceResponse();
        this.request("DescribeNotebookInstance", req, resp, cb);
    }

    /**
     * 创建Notebook授权Url
     * @param {CreatePresignedNotebookInstanceUrlRequest} req
     * @param {function(string, CreatePresignedNotebookInstanceUrlResponse):void} cb
     * @public
     */
    CreatePresignedNotebookInstanceUrl(req, cb) {
        let resp = new CreatePresignedNotebookInstanceUrlResponse();
        this.request("CreatePresignedNotebookInstanceUrl", req, resp, cb);
    }

    /**
     * 创建Notebook实例
     * @param {CreateNotebookInstanceRequest} req
     * @param {function(string, CreateNotebookInstanceResponse):void} cb
     * @public
     */
    CreateNotebookInstance(req, cb) {
        let resp = new CreateNotebookInstanceResponse();
        this.request("CreateNotebookInstance", req, resp, cb);
    }

    /**
     * 查询Notebook实例列表
     * @param {DescribeNotebookInstancesRequest} req
     * @param {function(string, DescribeNotebookInstancesResponse):void} cb
     * @public
     */
    DescribeNotebookInstances(req, cb) {
        let resp = new DescribeNotebookInstancesResponse();
        this.request("DescribeNotebookInstances", req, resp, cb);
    }

    /**
     * 创建训练任务
     * @param {CreateTrainingJobRequest} req
     * @param {function(string, CreateTrainingJobResponse):void} cb
     * @public
     */
    CreateTrainingJob(req, cb) {
        let resp = new CreateTrainingJobResponse();
        this.request("CreateTrainingJob", req, resp, cb);
    }

    /**
     * 启动Notebook实例
     * @param {StartNotebookInstanceRequest} req
     * @param {function(string, StartNotebookInstanceResponse):void} cb
     * @public
     */
    StartNotebookInstance(req, cb) {
        let resp = new StartNotebookInstanceResponse();
        this.request("StartNotebookInstance", req, resp, cb);
    }

    /**
     * 停止训练任务
     * @param {StopTrainingJobRequest} req
     * @param {function(string, StopTrainingJobResponse):void} cb
     * @public
     */
    StopTrainingJob(req, cb) {
        let resp = new StopTrainingJobResponse();
        this.request("StopTrainingJob", req, resp, cb);
    }

    /**
     * 删除notebook实例
     * @param {DeleteNotebookInstanceRequest} req
     * @param {function(string, DeleteNotebookInstanceResponse):void} cb
     * @public
     */
    DeleteNotebookInstance(req, cb) {
        let resp = new DeleteNotebookInstanceResponse();
        this.request("DeleteNotebookInstance", req, resp, cb);
    }


}
module.exports = TioneClient;
