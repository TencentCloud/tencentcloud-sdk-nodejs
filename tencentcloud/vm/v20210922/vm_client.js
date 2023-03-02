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
const ImageResultResult = models.ImageResultResult;
const StorageInfo = models.StorageInfo;
const BucketInfo = models.BucketInfo;
const CreateVideoModerationTaskResponse = models.CreateVideoModerationTaskResponse;
const TaskResult = models.TaskResult;
const CancelTaskRequest = models.CancelTaskRequest;
const DescribeTaskDetailResponse = models.DescribeTaskDetailResponse;
const DescribeTasksRequest = models.DescribeTasksRequest;
const TaskInput = models.TaskInput;
const DescribeTaskDetailRequest = models.DescribeTaskDetailRequest;
const TaskLabel = models.TaskLabel;
const ImageResultsResultDetail = models.ImageResultsResultDetail;
const InputInfo = models.InputInfo;
const CreateVideoModerationTaskRequest = models.CreateVideoModerationTaskRequest;
const DescribeTasksResponse = models.DescribeTasksResponse;
const AudioResultDetailLanguageResult = models.AudioResultDetailLanguageResult;
const TaskFilter = models.TaskFilter;
const RecognitionResult = models.RecognitionResult;
const CancelTaskResponse = models.CancelTaskResponse;
const AudioResultDetailTextResult = models.AudioResultDetailTextResult;
const RcbAsr = models.RcbAsr;
const AudioResult = models.AudioResult;
const AudioResultDetailMoanResult = models.AudioResultDetailMoanResult;
const TaskData = models.TaskData;
const MediaInfo = models.MediaInfo;
const Tag = models.Tag;
const AudioSegments = models.AudioSegments;
const ImageResultsResultDetailLocation = models.ImageResultsResultDetailLocation;
const ImageResult = models.ImageResult;


/**
 * vm client
 * @class
 */
class VmClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("vm.tencentcloudapi.com", "2021-09-22", credential, region, profile);
    }
    
    /**
     * 查看任务详情DescribeTaskDetail 
     * @param {DescribeTaskDetailRequest} req
     * @param {function(string, DescribeTaskDetailResponse):void} cb
     * @public
     */
    DescribeTaskDetail(req, cb) {
        let resp = new DescribeTaskDetailResponse();
        this.request("DescribeTaskDetail", req, resp, cb);
    }

    /**
     * 通过URL或存储桶创建审核任务。

### 直播断流处理说明：
- 请确认已对接[取消任务](https://cloud.tencent.com/document/product/1265/80018)。
- 如果直播任务取消/结束，则终止直播拉流并退出审核。
- 如果直播任务没有取消/结束，直播视频推流因故中断，产品将在将在10分钟内持续拉流重试。如果10分钟检测到图片截帧/音频切片数据，则恢复正常审核，反之，则终止拉流并退出审核。在拉流终止后，用户如有审核需求，需重新送审。

默认接口请求频率限制：20次/秒。
     * @param {CreateVideoModerationTaskRequest} req
     * @param {function(string, CreateVideoModerationTaskResponse):void} cb
     * @public
     */
    CreateVideoModerationTask(req, cb) {
        let resp = new CreateVideoModerationTaskResponse();
        this.request("CreateVideoModerationTask", req, resp, cb);
    }

    /**
     * 通过查看审核任务列表接口，可查询任务队列；您可根据多种业务信息（业务类型、审核结果、任务状态等）筛选审核任务列表。<br>

默认接口请求频率限制：**20次/秒**。
     * @param {DescribeTasksRequest} req
     * @param {function(string, DescribeTasksResponse):void} cb
     * @public
     */
    DescribeTasks(req, cb) {
        let resp = new DescribeTasksResponse();
        this.request("DescribeTasks", req, resp, cb);
    }

    /**
     * 取消任务
     * @param {CancelTaskRequest} req
     * @param {function(string, CancelTaskResponse):void} cb
     * @public
     */
    CancelTask(req, cb) {
        let resp = new CancelTaskResponse();
        this.request("CancelTask", req, resp, cb);
    }


}
module.exports = VmClient;
