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
const ImageSegments = models.ImageSegments;
const InputInfo = models.InputInfo;
const AudioResultDetailTextResult = models.AudioResultDetailTextResult;
const CreateAudioModerationTaskRequest = models.CreateAudioModerationTaskRequest;
const TaskResult = models.TaskResult;
const ImageResultResult = models.ImageResultResult;
const MediaInfo = models.MediaInfo;
const StorageInfo = models.StorageInfo;
const AudioResult = models.AudioResult;
const AudioResultDetailMoanResult = models.AudioResultDetailMoanResult;
const AudioResultDetailLanguageResult = models.AudioResultDetailLanguageResult;
const BucketInfo = models.BucketInfo;
const CreateAudioModerationTaskResponse = models.CreateAudioModerationTaskResponse;
const DescribeTaskDetailRequest = models.DescribeTaskDetailRequest;
const AudioSegments = models.AudioSegments;
const TaskLabel = models.TaskLabel;
const ImageResultsResultDetail = models.ImageResultsResultDetail;
const ImageResultsResultDetailLocation = models.ImageResultsResultDetailLocation;
const TaskInput = models.TaskInput;
const DescribeTaskDetailResponse = models.DescribeTaskDetailResponse;
const ImageResult = models.ImageResult;


/**
 * ams client
 * @class
 */
class AmsClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("ams.tencentcloudapi.com", "2020-06-08", credential, region, profile);
    }
    
    /**
     * 通过URL或存储通创建审核任务
     * @param {CreateAudioModerationTaskRequest} req
     * @param {function(string, CreateAudioModerationTaskResponse):void} cb
     * @public
     */
    CreateAudioModerationTask(req, cb) {
        let resp = new CreateAudioModerationTaskResponse();
        this.request("CreateAudioModerationTask", req, resp, cb);
    }

    /**
     * 查看任务详情
     * @param {DescribeTaskDetailRequest} req
     * @param {function(string, DescribeTaskDetailResponse):void} cb
     * @public
     */
    DescribeTaskDetail(req, cb) {
        let resp = new DescribeTaskDetailResponse();
        this.request("DescribeTaskDetail", req, resp, cb);
    }


}
module.exports = AmsClient;
