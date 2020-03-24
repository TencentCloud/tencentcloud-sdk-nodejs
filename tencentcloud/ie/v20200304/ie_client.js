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
const TagTaskResult = models.TagTaskResult;
const TagTaskResultItem = models.TagTaskResultItem;
const CosInfo = models.CosInfo;
const SaveInfo = models.SaveInfo;
const StripTaskResultItem = models.StripTaskResultItem;
const CosAuthMode = models.CosAuthMode;
const TagEditingInfo = models.TagEditingInfo;
const OpeningEndingTaskResultItem = models.OpeningEndingTaskResultItem;
const DownInfo = models.DownInfo;
const ClassificationEditingInfo = models.ClassificationEditingInfo;
const DescribeEditingTaskResultRequest = models.DescribeEditingTaskResultRequest;
const CoverTaskResultItem = models.CoverTaskResultItem;
const StripEditingInfo = models.StripEditingInfo;
const EditingInfo = models.EditingInfo;
const CreateEditingTaskRequest = models.CreateEditingTaskRequest;
const HighlightsTaskResult = models.HighlightsTaskResult;
const OpeningEndingTaskResult = models.OpeningEndingTaskResult;
const DescribeEditingTaskResultResponse = models.DescribeEditingTaskResultResponse;
const CreateEditingTaskResponse = models.CreateEditingTaskResponse;
const UrlInfo = models.UrlInfo;
const ClassificationTaskResultItem = models.ClassificationTaskResultItem;
const EditingTaskResult = models.EditingTaskResult;
const StripTaskResult = models.StripTaskResult;
const HighlightsEditingInfo = models.HighlightsEditingInfo;
const ClassificationTaskResult = models.ClassificationTaskResult;
const HighlightsTaskResultItem = models.HighlightsTaskResultItem;
const HighlightsTaskResultItemSegment = models.HighlightsTaskResultItemSegment;
const CoverEditingInfo = models.CoverEditingInfo;
const CallbackInfo = models.CallbackInfo;
const OpeningEndingEditingInfo = models.OpeningEndingEditingInfo;
const CoverTaskResult = models.CoverTaskResult;


/**
 * ie client
 * @class
 */
class IeClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("ie.tencentcloudapi.com", "2020-03-04", credential, region, profile);
    }
    
    /**
     * 获取智能编辑任务结果。
     * @param {DescribeEditingTaskResultRequest} req
     * @param {function(string, DescribeEditingTaskResultResponse):void} cb
     * @public
     */
    DescribeEditingTaskResult(req, cb) {
        let resp = new DescribeEditingTaskResultResponse();
        this.request("DescribeEditingTaskResult", req, resp, cb);
    }

    /**
     * 创建智能编辑任务，可以同时选择视频标签识别、分类识别、智能拆条、智能集锦、智能封面和片头片尾识别中的一项或者多项能力。
     * @param {CreateEditingTaskRequest} req
     * @param {function(string, CreateEditingTaskResponse):void} cb
     * @public
     */
    CreateEditingTask(req, cb) {
        let resp = new CreateEditingTaskResponse();
        this.request("CreateEditingTask", req, resp, cb);
    }


}
module.exports = IeClient;
