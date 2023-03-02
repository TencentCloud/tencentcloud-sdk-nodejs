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
const ClassifyInfo = models.ClassifyInfo;
const DescribeStructureTaskResultRequest = models.DescribeStructureTaskResultRequest;
const MachineUnderwriteOutput = models.MachineUnderwriteOutput;
const CreateStructureTaskRequest = models.CreateStructureTaskRequest;
const UnderwriteOutput = models.UnderwriteOutput;
const DescribeStructCompareDataRequest = models.DescribeStructCompareDataRequest;
const Location = models.Location;
const AddSubStructureTasksResponse = models.AddSubStructureTasksResponse;
const InsuranceResult = models.InsuranceResult;
const UnderwriteConclusion = models.UnderwriteConclusion;
const DescribeStructureDifferenceResponse = models.DescribeStructureDifferenceResponse;
const CreateUnderwriteTaskByIdRequest = models.CreateUnderwriteTaskByIdRequest;
const UploadMedicalFileResponse = models.UploadMedicalFileResponse;
const PerStructDifference = models.PerStructDifference;
const UploadMedicalFileRequest = models.UploadMedicalFileRequest;
const CompareMetricsData = models.CompareMetricsData;
const StructureOneItem = models.StructureOneItem;
const CreateAutoClassifyStructureTaskRequest = models.CreateAutoClassifyStructureTaskRequest;
const DescribeMachineUnderwriteRequest = models.DescribeMachineUnderwriteRequest;
const DescribeQualityScoreRequest = models.DescribeQualityScoreRequest;
const ReviewDataTaskInfo = models.ReviewDataTaskInfo;
const DescribeUnderwriteTaskResponse = models.DescribeUnderwriteTaskResponse;
const DescribeStructureResultRequest = models.DescribeStructureResultRequest;
const DescribeReportClassifyRequest = models.DescribeReportClassifyRequest;
const UnderwriteItem = models.UnderwriteItem;
const DescribeStructCompareDataResponse = models.DescribeStructCompareDataResponse;
const MachinePredict = models.MachinePredict;
const DescribeQualityScoreResponse = models.DescribeQualityScoreResponse;
const DescribeUnderwriteTaskRequest = models.DescribeUnderwriteTaskRequest;
const ResultObject = models.ResultObject;
const DescribeStructureResultResponse = models.DescribeStructureResultResponse;
const DescribeStructureDifferenceRequest = models.DescribeStructureDifferenceRequest;
const CreateStructureTaskResponse = models.CreateStructureTaskResponse;
const DescribeStructureTaskResultResponse = models.DescribeStructureTaskResultResponse;
const ClassifiedReports = models.ClassifiedReports;
const DescribeMachineUnderwriteResponse = models.DescribeMachineUnderwriteResponse;
const OcrRecognise = models.OcrRecognise;
const CreateAutoClassifyStructureTaskResponse = models.CreateAutoClassifyStructureTaskResponse;
const Point = models.Point;
const DescribeReportClassifyResponse = models.DescribeReportClassifyResponse;
const CreateUnderwriteTaskByIdResponse = models.CreateUnderwriteTaskByIdResponse;
const StructureResultObject = models.StructureResultObject;
const CreateStructureTaskInfo = models.CreateStructureTaskInfo;
const AddSubStructureTasksRequest = models.AddSubStructureTasksRequest;
const CreateAutoClassifyStructureTaskInfo = models.CreateAutoClassifyStructureTaskInfo;
const StructureModifyItem = models.StructureModifyItem;


/**
 * cii client
 * @class
 */
class CiiClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("cii.tencentcloudapi.com", "2021-04-08", credential, region, profile);
    }
    
    /**
     * 结构化复核差异查询接口，对比结构化复核前后数据差异，返回差异的部分。
     * @param {DescribeStructureDifferenceRequest} req
     * @param {function(string, DescribeStructureDifferenceResponse):void} cb
     * @public
     */
    DescribeStructureDifference(req, cb) {
        let resp = new DescribeStructureDifferenceResponse();
        this.request("DescribeStructureDifference", req, resp, cb);
    }

    /**
     * 依据任务ID获取结构化结果接口。
     * @param {DescribeStructureTaskResultRequest} req
     * @param {function(string, DescribeStructureTaskResultResponse):void} cb
     * @public
     */
    DescribeStructureTaskResult(req, cb) {
        let resp = new DescribeStructureTaskResultResponse();
        this.request("DescribeStructureTaskResult", req, resp, cb);
    }

    /**
     * 上传医疗影像文件，可以用来做结构化。
     * @param {UploadMedicalFileRequest} req
     * @param {function(string, UploadMedicalFileResponse):void} cb
     * @public
     */
    UploadMedicalFile(req, cb) {
        let resp = new UploadMedicalFileResponse();
        let options = {
            multipart: true
        };
        this.request("UploadMedicalFile", req, resp, cb);
    }

    /**
     * 本接口(CreateUnderwriteTaskById)用于根据结构化任务ID创建核保任务
     * @param {CreateUnderwriteTaskByIdRequest} req
     * @param {function(string, CreateUnderwriteTaskByIdResponse):void} cb
     * @public
     */
    CreateUnderwriteTaskById(req, cb) {
        let resp = new CreateUnderwriteTaskByIdResponse();
        this.request("CreateUnderwriteTaskById", req, resp, cb);
    }

    /**
     * 本接口(DescribeUnderwriteTask)用于查询核保任务结果
     * @param {DescribeUnderwriteTaskRequest} req
     * @param {function(string, DescribeUnderwriteTaskResponse):void} cb
     * @public
     */
    DescribeUnderwriteTask(req, cb) {
        let resp = new DescribeUnderwriteTaskResponse();
        this.request("DescribeUnderwriteTask", req, resp, cb);
    }

    /**
     * 本接口(DescribeMachineUnderwrite)用于查询机器核保任务数据
     * @param {DescribeMachineUnderwriteRequest} req
     * @param {function(string, DescribeMachineUnderwriteResponse):void} cb
     * @public
     */
    DescribeMachineUnderwrite(req, cb) {
        let resp = new DescribeMachineUnderwriteResponse();
        this.request("DescribeMachineUnderwrite", req, resp, cb);
    }

    /**
     * 本接口(CreateStructureTask)基于提供的客户及保单信息，创建并启动结构化识别任务。
     * @param {CreateStructureTaskRequest} req
     * @param {function(string, CreateStructureTaskResponse):void} cb
     * @public
     */
    CreateStructureTask(req, cb) {
        let resp = new CreateStructureTaskResponse();
        this.request("CreateStructureTask", req, resp, cb);
    }

    /**
     * 本接口(CreateAutoClassifyStructureTask)基于提供的客户及保单信息，创建并启动结构化识别任务。
     * @param {CreateAutoClassifyStructureTaskRequest} req
     * @param {function(string, CreateAutoClassifyStructureTaskResponse):void} cb
     * @public
     */
    CreateAutoClassifyStructureTask(req, cb) {
        let resp = new CreateAutoClassifyStructureTaskResponse();
        this.request("CreateAutoClassifyStructureTask", req, resp, cb);
    }

    /**
     * 结构化对比查询接口，对比结构化复核前后数据差异，查询识别正确率，召回率。
     * @param {DescribeStructCompareDataRequest} req
     * @param {function(string, DescribeStructCompareDataResponse):void} cb
     * @public
     */
    DescribeStructCompareData(req, cb) {
        let resp = new DescribeStructCompareDataResponse();
        this.request("DescribeStructCompareData", req, resp, cb);
    }

    /**
     * 获取图片质量分
     * @param {DescribeQualityScoreRequest} req
     * @param {function(string, DescribeQualityScoreResponse):void} cb
     * @public
     */
    DescribeQualityScore(req, cb) {
        let resp = new DescribeQualityScoreResponse();
        let options = {
            multipart: true
        };
        this.request("DescribeQualityScore", req, resp, cb);
    }

    /**
     * 本接口(DescribeStructureResult)用于查询结构化结果接口
     * @param {DescribeStructureResultRequest} req
     * @param {function(string, DescribeStructureResultResponse):void} cb
     * @public
     */
    DescribeStructureResult(req, cb) {
        let resp = new DescribeStructureResultResponse();
        this.request("DescribeStructureResult", req, resp, cb);
    }

    /**
     * 辅助用户对批量报告自动分类
     * @param {DescribeReportClassifyRequest} req
     * @param {function(string, DescribeReportClassifyResponse):void} cb
     * @public
     */
    DescribeReportClassify(req, cb) {
        let resp = new DescribeReportClassifyResponse();
        this.request("DescribeReportClassify", req, resp, cb);
    }

    /**
     * 如果主任务下的报告不满足需求，可以基于主任务批量添加子任务
     * @param {AddSubStructureTasksRequest} req
     * @param {function(string, AddSubStructureTasksResponse):void} cb
     * @public
     */
    AddSubStructureTasks(req, cb) {
        let resp = new AddSubStructureTasksResponse();
        this.request("AddSubStructureTasks", req, resp, cb);
    }


}
module.exports = CiiClient;
