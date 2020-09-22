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
const TagEditingInfo = models.TagEditingInfo;
const Sharp = models.Sharp;
const TagTaskResultItem = models.TagTaskResultItem;
const VideoEnhance = models.VideoEnhance;
const CosInfo = models.CosInfo;
const SaveInfo = models.SaveInfo;
const ScratchRepair = models.ScratchRepair;
const ArtifactReduction = models.ArtifactReduction;
const CosAuthMode = models.CosAuthMode;
const QualityControlInfo = models.QualityControlInfo;
const OpeningEndingTaskResultItem = models.OpeningEndingTaskResultItem;
const DownInfo = models.DownInfo;
const ClassificationEditingInfo = models.ClassificationEditingInfo;
const LowLightEnhance = models.LowLightEnhance;
const DescribeEditingTaskResultRequest = models.DescribeEditingTaskResultRequest;
const CoverTaskResultItem = models.CoverTaskResultItem;
const TargetInfo = models.TargetInfo;
const StripEditingInfo = models.StripEditingInfo;
const EditingInfo = models.EditingInfo;
const MediaQualityRestorationTaskResult = models.MediaQualityRestorationTaskResult;
const CreateMediaQualityRestorationTaskRequest = models.CreateMediaQualityRestorationTaskRequest;
const CreateEditingTaskRequest = models.CreateEditingTaskRequest;
const AudioInfoResultItem = models.AudioInfoResultItem;
const Denoising = models.Denoising;
const FaceProtect = models.FaceProtect;
const VideoInfoResultItem = models.VideoInfoResultItem;
const HighlightsTaskResult = models.HighlightsTaskResult;
const EditInfo = models.EditInfo;
const MuxInfo = models.MuxInfo;
const DescribeMediaQualityRestorationTaskRusultRequest = models.DescribeMediaQualityRestorationTaskRusultRequest;
const VideoInfo = models.VideoInfo;
const OpeningEndingTaskResult = models.OpeningEndingTaskResult;
const DescribeQualityControlTaskResultRequest = models.DescribeQualityControlTaskResultRequest;
const DescribeEditingTaskResultResponse = models.DescribeEditingTaskResultResponse;
const CreateEditingTaskResponse = models.CreateEditingTaskResponse;
const QualityControlInfoTaskResult = models.QualityControlInfoTaskResult;
const StopMediaQualityRestorationTaskResponse = models.StopMediaQualityRestorationTaskResponse;
const UrlInfo = models.UrlInfo;
const StopMediaQualityRestorationTaskRequest = models.StopMediaQualityRestorationTaskRequest;
const DescribeQualityControlTaskResultResponse = models.DescribeQualityControlTaskResultResponse;
const DescribeMediaQualityRestorationTaskRusultResponse = models.DescribeMediaQualityRestorationTaskRusultResponse;
const ClassificationTaskResultItem = models.ClassificationTaskResultItem;
const DarInfo = models.DarInfo;
const AudioInfo = models.AudioInfo;
const CreateQualityControlTaskResponse = models.CreateQualityControlTaskResponse;
const EditingTaskResult = models.EditingTaskResult;
const SubTaskTranscodeInfo = models.SubTaskTranscodeInfo;
const QualityControlResultItems = models.QualityControlResultItems;
const SubTaskResultItem = models.SubTaskResultItem;
const QualityControlItem = models.QualityControlItem;
const HighlightsEditingInfo = models.HighlightsEditingInfo;
const FileInfo = models.FileInfo;
const CreateQualityControlTaskRequest = models.CreateQualityControlTaskRequest;
const ClassificationTaskResult = models.ClassificationTaskResult;
const StripTaskResultItem = models.StripTaskResultItem;
const HighlightsTaskResultItemSegment = models.HighlightsTaskResultItemSegment;
const HighlightsTaskResultItem = models.HighlightsTaskResultItem;
const PicMarkInfoItem = models.PicMarkInfoItem;
const CoverEditingInfo = models.CoverEditingInfo;
const ColorEnhance = models.ColorEnhance;
const CreateMediaQualityRestorationTaskResponse = models.CreateMediaQualityRestorationTaskResponse;
const SegmentInfo = models.SegmentInfo;
const CallbackInfo = models.CallbackInfo;
const OpeningEndingEditingInfo = models.OpeningEndingEditingInfo;
const StripTaskResult = models.StripTaskResult;
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
     * 获取画质重生任务结果，查看结束后的文件信息
     * @param {DescribeMediaQualityRestorationTaskRusultRequest} req
     * @param {function(string, DescribeMediaQualityRestorationTaskRusultResponse):void} cb
     * @public
     */
    DescribeMediaQualityRestorationTaskRusult(req, cb) {
        let resp = new DescribeMediaQualityRestorationTaskRusultResponse();
        this.request("DescribeMediaQualityRestorationTaskRusult", req, resp, cb);
    }

    /**
     * 删除正在进行的画质重生任务
     * @param {StopMediaQualityRestorationTaskRequest} req
     * @param {function(string, StopMediaQualityRestorationTaskResponse):void} cb
     * @public
     */
    StopMediaQualityRestorationTask(req, cb) {
        let resp = new StopMediaQualityRestorationTaskResponse();
        this.request("StopMediaQualityRestorationTask", req, resp, cb);
    }

    /**
     * 创建画质重生任务，对视频进行转码、去噪、去划痕、去毛刺、超分、细节增强和色彩增强。
     * @param {CreateMediaQualityRestorationTaskRequest} req
     * @param {function(string, CreateMediaQualityRestorationTaskResponse):void} cb
     * @public
     */
    CreateMediaQualityRestorationTask(req, cb) {
        let resp = new CreateMediaQualityRestorationTaskResponse();
        this.request("CreateMediaQualityRestorationTask", req, resp, cb);
    }

    /**
     * 获取编辑理解任务结果。
     * @param {DescribeEditingTaskResultRequest} req
     * @param {function(string, DescribeEditingTaskResultResponse):void} cb
     * @public
     */
    DescribeEditingTaskResult(req, cb) {
        let resp = new DescribeEditingTaskResultResponse();
        this.request("DescribeEditingTaskResult", req, resp, cb);
    }

    /**
     * 获取媒体质检任务结果
     * @param {DescribeQualityControlTaskResultRequest} req
     * @param {function(string, DescribeQualityControlTaskResultResponse):void} cb
     * @public
     */
    DescribeQualityControlTaskResult(req, cb) {
        let resp = new DescribeQualityControlTaskResultResponse();
        this.request("DescribeQualityControlTaskResult", req, resp, cb);
    }

    /**
     * 通过接口可以智能检测视频画面中抖动重影、模糊、低光照、过曝光、黑边、白边、黑屏、白屏、花屏、噪点、马赛克、二维码等在内的多个场景，还可以自动检测视频无音频异常、无声音片段。
     * @param {CreateQualityControlTaskRequest} req
     * @param {function(string, CreateQualityControlTaskResponse):void} cb
     * @public
     */
    CreateQualityControlTask(req, cb) {
        let resp = new CreateQualityControlTaskResponse();
        this.request("CreateQualityControlTask", req, resp, cb);
    }

    /**
     * 创建编辑理解任务，可以同时选择视频标签识别、分类识别、智能拆条、智能集锦、智能封面和片头片尾识别中的一项或者多项能力。
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
