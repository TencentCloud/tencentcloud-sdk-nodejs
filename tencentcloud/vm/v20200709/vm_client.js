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
const DescribeVideoStatResponse = models.DescribeVideoStatResponse;
const CreateBizConfigResponse = models.CreateBizConfigResponse;
const TaskInput = models.TaskInput;
const DescribeTaskDetailRequest = models.DescribeTaskDetailRequest;
const TaskLabel = models.TaskLabel;
const ImageResultsResultDetail = models.ImageResultsResultDetail;
const DescribeVideoStatRequest = models.DescribeVideoStatRequest;
const InputInfo = models.InputInfo;
const EvilCount = models.EvilCount;
const CreateVideoModerationTaskRequest = models.CreateVideoModerationTaskRequest;
const AudioResultDetailLanguageResult = models.AudioResultDetailLanguageResult;
const FileOutput = models.FileOutput;
const CancelTaskResponse = models.CancelTaskResponse;
const TrendCount = models.TrendCount;
const AudioResultDetailTextResult = models.AudioResultDetailTextResult;
const Overview = models.Overview;
const AudioResult = models.AudioResult;
const AudioResultDetailMoanResult = models.AudioResultDetailMoanResult;
const CreateBizConfigRequest = models.CreateBizConfigRequest;
const MediaInfo = models.MediaInfo;
const MediaModerationConfig = models.MediaModerationConfig;
const AudioSegments = models.AudioSegments;
const Filters = models.Filters;
const ImageResultsResultDetailLocation = models.ImageResultsResultDetailLocation;
const ImageResult = models.ImageResult;


/**
 * vm client
 * @class
 */
class VmClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("vm.tencentcloudapi.com", "2020-07-09", credential, region, profile);
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
     * 通过URL或存储桶创建审核任务
     * @param {CreateVideoModerationTaskRequest} req
     * @param {function(string, CreateVideoModerationTaskResponse):void} cb
     * @public
     */
    CreateVideoModerationTask(req, cb) {
        let resp = new CreateVideoModerationTaskResponse();
        this.request("CreateVideoModerationTask", req, resp, cb);
    }

    /**
     * 控制台识别统计
     * @param {DescribeVideoStatRequest} req
     * @param {function(string, DescribeVideoStatResponse):void} cb
     * @public
     */
    DescribeVideoStat(req, cb) {
        let resp = new DescribeVideoStatResponse();
        this.request("DescribeVideoStat", req, resp, cb);
    }

    /**
     * 创建业务配置，1个账号最多可以创建20个配置，可定义音频审核的场景，如色情、谩骂等，

在创建业务配置之前，你需要以下步骤：
1. 开通COS存储捅功能，新建存储桶，例如 cms_segments，用来存储 视频转换过程中生成对音频和图片。
2. 然后在COS控制台，授权天御内容安全主账号 对 cms_segments 存储桶对读写权限。具体授权操作，参考https://cloud.tencent.com/document/product/436/38648

     * @param {CreateBizConfigRequest} req
     * @param {function(string, CreateBizConfigResponse):void} cb
     * @public
     */
    CreateBizConfig(req, cb) {
        let resp = new CreateBizConfigResponse();
        this.request("CreateBizConfig", req, resp, cb);
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
