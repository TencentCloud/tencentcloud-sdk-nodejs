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
const DescribeStructCompareDataResponse = models.DescribeStructCompareDataResponse;
const DescribeStructureTaskResultRequest = models.DescribeStructureTaskResultRequest;
const CreateStructureTaskRequest = models.CreateStructureTaskRequest;
const CompareMetricsData = models.CompareMetricsData;
const ResultObject = models.ResultObject;
const DescribeStructCompareDataRequest = models.DescribeStructCompareDataRequest;
const CreateStructureTaskResponse = models.CreateStructureTaskResponse;
const ReviewDataTaskInfo = models.ReviewDataTaskInfo;
const DescribeStructureTaskResultResponse = models.DescribeStructureTaskResultResponse;
const CreateStructureTaskInfo = models.CreateStructureTaskInfo;


/**
 * cii client
 * @class
 */
class CiiClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("cii.tencentcloudapi.com", "2021-04-08", credential, region, profile);
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
     * 基于提供的客户及保单信息，启动结构化识别任务。
     * @param {CreateStructureTaskRequest} req
     * @param {function(string, CreateStructureTaskResponse):void} cb
     * @public
     */
    CreateStructureTask(req, cb) {
        let resp = new CreateStructureTaskResponse();
        this.request("CreateStructureTask", req, resp, cb);
    }


}
module.exports = CiiClient;
