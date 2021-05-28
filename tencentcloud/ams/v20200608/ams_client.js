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
const InputInfo = models.InputInfo;
const StorageInfo = models.StorageInfo;
const BucketInfo = models.BucketInfo;
const CreateAudioModerationTaskResponse = models.CreateAudioModerationTaskResponse;
const CreateBizConfigRequest = models.CreateBizConfigRequest;
const DescribeBizConfigRequest = models.DescribeBizConfigRequest;
const TaskResult = models.TaskResult;
const CancelTaskRequest = models.CancelTaskRequest;
const DescribeTaskDetailResponse = models.DescribeTaskDetailResponse;
const CreateAudioModerationTaskRequest = models.CreateAudioModerationTaskRequest;
const CreateBizConfigResponse = models.CreateBizConfigResponse;
const TaskInput = models.TaskInput;
const DescribeTaskDetailRequest = models.DescribeTaskDetailRequest;
const CancelTaskResponse = models.CancelTaskResponse;
const TaskLabel = models.TaskLabel;
const ImageResultsResultDetail = models.ImageResultsResultDetail;
const DescribeAmsListRequest = models.DescribeAmsListRequest;
const Filters = models.Filters;
const AmsDetailInfo = models.AmsDetailInfo;
const AudioResultDetailLanguageResult = models.AudioResultDetailLanguageResult;
const FileOutput = models.FileOutput;
const Filter = models.Filter;
const DescribeAudioStatResponse = models.DescribeAudioStatResponse;
const DescribeAmsListResponse = models.DescribeAmsListResponse;
const TrendCount = models.TrendCount;
const AudioResultDetailTextResult = models.AudioResultDetailTextResult;
const DescribeAudioStatRequest = models.DescribeAudioStatRequest;
const Overview = models.Overview;
const AudioResult = models.AudioResult;
const AudioResultDetailMoanResult = models.AudioResultDetailMoanResult;
const DescribeBizConfigResponse = models.DescribeBizConfigResponse;
const MediaInfo = models.MediaInfo;
const MediaModerationConfig = models.MediaModerationConfig;
const AudioSegments = models.AudioSegments;
const EvilCount = models.EvilCount;
const ImageResultsResultDetailLocation = models.ImageResultsResultDetailLocation;
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
     * 控制台识别统计
     * @param {DescribeAudioStatRequest} req
     * @param {function(string, DescribeAudioStatResponse):void} cb
     * @public
     */
    DescribeAudioStat(req, cb) {
        let resp = new DescribeAudioStatResponse();
        this.request("DescribeAudioStat", req, resp, cb);
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

    /**
     * 创建业务配置，1个账号最多可以创建20个配置，可定义音频审核的场景，如色情、谩骂等，

在创建业务配置之前，你需要以下步骤：
1. 开通COS存储桶功能，新建存储桶，例如 cms_segments，用来存储 视频转换过程中生成对音频和图片。
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
     * 查看单个配置
     * @param {DescribeBizConfigRequest} req
     * @param {function(string, DescribeBizConfigResponse):void} cb
     * @public
     */
    DescribeBizConfig(req, cb) {
        let resp = new DescribeBizConfigResponse();
        this.request("DescribeBizConfig", req, resp, cb);
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

    /**
     * 本接口（Audio Moderation）用于提交音频内容（包括音频文件或流地址）进行智能审核任务，使用前请您登陆控制台开通音频内容安全服务。

### 功能使用说明：
- 前往“内容安全控制台-音频内容安全”开启使用音频内容安全服务，首次开通可获得20小时免费调用时长

### 接口功能说明：
- 支持对音频流或音频文件进行检测，判断其中是否包含违规内容；
- 支持设置回调地址 Callback 获取检测结果，或通过接口(查询音频检测结果)主动轮询获取检测结果；
- 支持识别违规内容，包括：低俗、谩骂、色情、涉政、广告等场景；
- 支持批量提交检测任务。检测任务列表最多支持10个；

### 音频文件调用说明：
- 音频文件大小支持：文件 < 500M；
- 音频文件时长支持：< 1小时；
- 音频码率类型支持：128 Kbps - 256 Kbps ；
- 音频文件支持格式：wav、mp3、aac、flac、amr、3gp、 m4a、wma、ogg、ape；
- 支持音视频文件分离并对音频文件进行独立识别；

### 音频流调用说明：
- 音频流时长支持：< 3小时；
- 音频码率类型支持：128 Kbps - 256 Kbps ；
- 音频流支持的传输协议：RTMP、HTTP、HTTPS；
- 音频流格式支持的类型：rtp、srtp、rtmp、rtmps、mmsh、 mmst、hls、http、tcp、https、m3u8；
- 支持音视频流分离并对音频流进行独立识别；
     * @param {CreateAudioModerationTaskRequest} req
     * @param {function(string, CreateAudioModerationTaskResponse):void} cb
     * @public
     */
    CreateAudioModerationTask(req, cb) {
        let resp = new CreateAudioModerationTaskResponse();
        this.request("CreateAudioModerationTask", req, resp, cb);
    }

    /**
     * 音频审核明细列表
     * @param {DescribeAmsListRequest} req
     * @param {function(string, DescribeAmsListResponse):void} cb
     * @public
     */
    DescribeAmsList(req, cb) {
        let resp = new DescribeAmsListResponse();
        this.request("DescribeAmsList", req, resp, cb);
    }


}
module.exports = AmsClient;
