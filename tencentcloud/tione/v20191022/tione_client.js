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
const BillingLabel = models.BillingLabel;
const EnvConfig = models.EnvConfig;
const CreateNotebookInstanceRequest = models.CreateNotebookInstanceRequest;
const DescribeNotebookSummaryRequest = models.DescribeNotebookSummaryRequest;
const SecondaryStatusTransition = models.SecondaryStatusTransition;
const DescribeNotebookInstanceRequest = models.DescribeNotebookInstanceRequest;
const DeleteNotebookInstanceResponse = models.DeleteNotebookInstanceResponse;
const NotebookInstanceSummary = models.NotebookInstanceSummary;
const GitConfig = models.GitConfig;
const CodeRepoSummary = models.CodeRepoSummary;
const ResourceConfig = models.ResourceConfig;
const DeleteNotebookLifecycleScriptResponse = models.DeleteNotebookLifecycleScriptResponse;
const DescribeNotebookLifecycleScriptsRequest = models.DescribeNotebookLifecycleScriptsRequest;
const GitSecret = models.GitSecret;
const DeleteCodeRepositoryRequest = models.DeleteCodeRepositoryRequest;
const DescribeCodeRepositoryResponse = models.DescribeCodeRepositoryResponse;
const InputDataConfig = models.InputDataConfig;
const StartNotebookInstanceResponse = models.StartNotebookInstanceResponse;
const UpdateCodeRepositoryResponse = models.UpdateCodeRepositoryResponse;
const CreateNotebookInstanceResponse = models.CreateNotebookInstanceResponse;
const FileSystemDataSource = models.FileSystemDataSource;
const NotebookLifecycleScriptsSummary = models.NotebookLifecycleScriptsSummary;
const StopTrainingJobRequest = models.StopTrainingJobRequest;
const UpdateNotebookInstanceResponse = models.UpdateNotebookInstanceResponse;
const UpdateNotebookLifecycleScriptRequest = models.UpdateNotebookLifecycleScriptRequest;
const UpdateNotebookInstanceRequest = models.UpdateNotebookInstanceRequest;
const CreatePresignedNotebookInstanceUrlRequest = models.CreatePresignedNotebookInstanceUrlRequest;
const CreateNotebookLifecycleScriptRequest = models.CreateNotebookLifecycleScriptRequest;
const CreateCodeRepositoryRequest = models.CreateCodeRepositoryRequest;
const DescribeNotebookInstancesRequest = models.DescribeNotebookInstancesRequest;
const DescribeTrainingJobsResponse = models.DescribeTrainingJobsResponse;
const StoppingCondition = models.StoppingCondition;
const DescribeCodeRepositoriesResponse = models.DescribeCodeRepositoriesResponse;
const DescribeNotebookInstancesResponse = models.DescribeNotebookInstancesResponse;
const DescribeCodeRepositoryRequest = models.DescribeCodeRepositoryRequest;
const CreateTrainingJobResponse = models.CreateTrainingJobResponse;
const DescribeNotebookInstanceResponse = models.DescribeNotebookInstanceResponse;
const DescribeTrainingJobRequest = models.DescribeTrainingJobRequest;
const TrainingJobSummary = models.TrainingJobSummary;
const AlgorithmSpecification = models.AlgorithmSpecification;
const CosDataSource = models.CosDataSource;
const DescribeNotebookLifecycleScriptsResponse = models.DescribeNotebookLifecycleScriptsResponse;
const DescribeNotebookSummaryResponse = models.DescribeNotebookSummaryResponse;
const Filter = models.Filter;
const StopNotebookInstanceRequest = models.StopNotebookInstanceRequest;
const DeleteNotebookLifecycleScriptRequest = models.DeleteNotebookLifecycleScriptRequest;
const DescribeNotebookLifecycleScriptResponse = models.DescribeNotebookLifecycleScriptResponse;
const DescribeTrainingJobResponse = models.DescribeTrainingJobResponse;
const StopNotebookInstanceResponse = models.StopNotebookInstanceResponse;
const UpdateCodeRepositoryRequest = models.UpdateCodeRepositoryRequest;
const CreateTrainingJobRequest = models.CreateTrainingJobRequest;
const DeleteNotebookInstanceRequest = models.DeleteNotebookInstanceRequest;
const DescribeNotebookLifecycleScriptRequest = models.DescribeNotebookLifecycleScriptRequest;
const VpcConfig = models.VpcConfig;
const CreateNotebookLifecycleScriptResponse = models.CreateNotebookLifecycleScriptResponse;
const CreatePresignedNotebookInstanceUrlResponse = models.CreatePresignedNotebookInstanceUrlResponse;
const UpdateNotebookLifecycleScriptResponse = models.UpdateNotebookLifecycleScriptResponse;
const DescribeTrainingJobsRequest = models.DescribeTrainingJobsRequest;
const StartNotebookInstanceRequest = models.StartNotebookInstanceRequest;
const CreateCodeRepositoryResponse = models.CreateCodeRepositoryResponse;
const DescribeCodeRepositoriesRequest = models.DescribeCodeRepositoriesRequest;
const DataSource = models.DataSource;
const ModelArtifacts = models.ModelArtifacts;
const DeleteCodeRepositoryResponse = models.DeleteCodeRepositoryResponse;


/**
 * tione client
 * @class
 */
class TioneClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("tione.tencentcloudapi.com", "2019-10-22", credential, region, profile);
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
     * 查看notebook生命周期脚本列表
     * @param {DescribeNotebookLifecycleScriptsRequest} req
     * @param {function(string, DescribeNotebookLifecycleScriptsResponse):void} cb
     * @public
     */
    DescribeNotebookLifecycleScripts(req, cb) {
        let resp = new DescribeNotebookLifecycleScriptsResponse();
        this.request("DescribeNotebookLifecycleScripts", req, resp, cb);
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
     * 删除notebook实例
     * @param {DeleteNotebookInstanceRequest} req
     * @param {function(string, DeleteNotebookInstanceResponse):void} cb
     * @public
     */
    DeleteNotebookInstance(req, cb) {
        let resp = new DeleteNotebookInstanceResponse();
        this.request("DeleteNotebookInstance", req, resp, cb);
    }

    /**
     * 查看notebook生命周期脚本详情
     * @param {DescribeNotebookLifecycleScriptRequest} req
     * @param {function(string, DescribeNotebookLifecycleScriptResponse):void} cb
     * @public
     */
    DescribeNotebookLifecycleScript(req, cb) {
        let resp = new DescribeNotebookLifecycleScriptResponse();
        this.request("DescribeNotebookLifecycleScript", req, resp, cb);
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
     * 创建存储库
     * @param {CreateCodeRepositoryRequest} req
     * @param {function(string, CreateCodeRepositoryResponse):void} cb
     * @public
     */
    CreateCodeRepository(req, cb) {
        let resp = new CreateCodeRepositoryResponse();
        this.request("CreateCodeRepository", req, resp, cb);
    }

    /**
     * 更新notebook生命周期脚本
     * @param {UpdateNotebookLifecycleScriptRequest} req
     * @param {function(string, UpdateNotebookLifecycleScriptResponse):void} cb
     * @public
     */
    UpdateNotebookLifecycleScript(req, cb) {
        let resp = new UpdateNotebookLifecycleScriptResponse();
        this.request("UpdateNotebookLifecycleScript", req, resp, cb);
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
     * 查询存储库详情
     * @param {DescribeCodeRepositoryRequest} req
     * @param {function(string, DescribeCodeRepositoryResponse):void} cb
     * @public
     */
    DescribeCodeRepository(req, cb) {
        let resp = new DescribeCodeRepositoryResponse();
        this.request("DescribeCodeRepository", req, resp, cb);
    }

    /**
     * 查询训练任务列表
     * @param {DescribeTrainingJobsRequest} req
     * @param {function(string, DescribeTrainingJobsResponse):void} cb
     * @public
     */
    DescribeTrainingJobs(req, cb) {
        let resp = new DescribeTrainingJobsResponse();
        this.request("DescribeTrainingJobs", req, resp, cb);
    }

    /**
     * 删除存储库
     * @param {DeleteCodeRepositoryRequest} req
     * @param {function(string, DeleteCodeRepositoryResponse):void} cb
     * @public
     */
    DeleteCodeRepository(req, cb) {
        let resp = new DeleteCodeRepositoryResponse();
        this.request("DeleteCodeRepository", req, resp, cb);
    }

    /**
     * 查询Notebook概览数据
     * @param {DescribeNotebookSummaryRequest} req
     * @param {function(string, DescribeNotebookSummaryResponse):void} cb
     * @public
     */
    DescribeNotebookSummary(req, cb) {
        let resp = new DescribeNotebookSummaryResponse();
        this.request("DescribeNotebookSummary", req, resp, cb);
    }

    /**
     * 创建Notebook生命周期脚本
     * @param {CreateNotebookLifecycleScriptRequest} req
     * @param {function(string, CreateNotebookLifecycleScriptResponse):void} cb
     * @public
     */
    CreateNotebookLifecycleScript(req, cb) {
        let resp = new CreateNotebookLifecycleScriptResponse();
        this.request("CreateNotebookLifecycleScript", req, resp, cb);
    }

    /**
     * 删除Notebook生命周期脚本
     * @param {DeleteNotebookLifecycleScriptRequest} req
     * @param {function(string, DeleteNotebookLifecycleScriptResponse):void} cb
     * @public
     */
    DeleteNotebookLifecycleScript(req, cb) {
        let resp = new DeleteNotebookLifecycleScriptResponse();
        this.request("DeleteNotebookLifecycleScript", req, resp, cb);
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
     * 更新存储库
     * @param {UpdateCodeRepositoryRequest} req
     * @param {function(string, UpdateCodeRepositoryResponse):void} cb
     * @public
     */
    UpdateCodeRepository(req, cb) {
        let resp = new UpdateCodeRepositoryResponse();
        this.request("UpdateCodeRepository", req, resp, cb);
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
     * 查询存储库列表
     * @param {DescribeCodeRepositoriesRequest} req
     * @param {function(string, DescribeCodeRepositoriesResponse):void} cb
     * @public
     */
    DescribeCodeRepositories(req, cb) {
        let resp = new DescribeCodeRepositoriesResponse();
        this.request("DescribeCodeRepositories", req, resp, cb);
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


}
module.exports = TioneClient;
