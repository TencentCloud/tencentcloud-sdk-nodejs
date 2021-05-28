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
const MediaJoiningTaskResult = models.MediaJoiningTaskResult;
const Denoise = models.Denoise;
const StripTaskResultItem = models.StripTaskResultItem;
const CosAuthMode = models.CosAuthMode;
const OpeningEndingTaskResultItem = models.OpeningEndingTaskResultItem;
const MediaCuttingTaskResult = models.MediaCuttingTaskResult;
const CoverTaskResultItem = models.CoverTaskResultItem;
const MediaCuttingInfo = models.MediaCuttingInfo;
const IntervalTime = models.IntervalTime;
const LowLightEnhance = models.LowLightEnhance;
const MuxInfo = models.MuxInfo;
const TargetVideoInfo = models.TargetVideoInfo;
const VideoInfo = models.VideoInfo;
const DescribeQualityControlTaskResultRequest = models.DescribeQualityControlTaskResultRequest;
const DescribeMediaQualityRestorationTaskRusultResponse = models.DescribeMediaQualityRestorationTaskRusultResponse;
const DarInfo = models.DarInfo;
const CreateQualityControlTaskResponse = models.CreateQualityControlTaskResponse;
const LoudnessInfo = models.LoudnessInfo;
const SubTaskTranscodeInfo = models.SubTaskTranscodeInfo;
const CreateQualityControlTaskRequest = models.CreateQualityControlTaskRequest;
const FrameTagRec = models.FrameTagRec;
const HighlightsTaskResultItem = models.HighlightsTaskResultItem;
const CreateMediaQualityRestorationTaskResponse = models.CreateMediaQualityRestorationTaskResponse;
const Sharp = models.Sharp;
const MediaRecognitionTaskResult = models.MediaRecognitionTaskResult;
const MediaRecognitionInfo = models.MediaRecognitionInfo;
const SaveInfo = models.SaveInfo;
const ScratchRepair = models.ScratchRepair;
const ArtifactReduction = models.ArtifactReduction;
const TagEditingInfo = models.TagEditingInfo;
const StopMediaQualityRestorationTaskResponse = models.StopMediaQualityRestorationTaskResponse;
const StripEditingInfo = models.StripEditingInfo;
const EditingInfo = models.EditingInfo;
const CreateMediaProcessTaskRequest = models.CreateMediaProcessTaskRequest;
const SubtitleResult = models.SubtitleResult;
const CreateMediaProcessTaskResponse = models.CreateMediaProcessTaskResponse;
const TaskResultFile = models.TaskResultFile;
const CreateEditingTaskResponse = models.CreateEditingTaskResponse;
const UrlInfo = models.UrlInfo;
const MediaSourceInfo = models.MediaSourceInfo;
const CallbackInfo = models.CallbackInfo;
const SectionTime = models.SectionTime;
const SubtitleRec = models.SubtitleRec;
const ResultVideoInfo = models.ResultVideoInfo;
const PicMarkInfoItem = models.PicMarkInfoItem;
const MediaJoiningInfo = models.MediaJoiningInfo;
const DescribeMediaQualityRestorationTaskRusultRequest = models.DescribeMediaQualityRestorationTaskRusultRequest;
const ColorEnhance = models.ColorEnhance;
const SegmentInfo = models.SegmentInfo;
const OpeningEndingEditingInfo = models.OpeningEndingEditingInfo;
const MediaTargetInfo = models.MediaTargetInfo;
const TagTaskResultItem = models.TagTaskResultItem;
const QualityControlInfo = models.QualityControlInfo;
const DownInfo = models.DownInfo;
const ClassificationEditingInfo = models.ClassificationEditingInfo;
const HighlightsTaskResult = models.HighlightsTaskResult;
const DescribeEditingTaskResultRequest = models.DescribeEditingTaskResultRequest;
const AudioInfoResultItem = models.AudioInfoResultItem;
const EditInfo = models.EditInfo;
const RemoveReverb = models.RemoveReverb;
const StopMediaProcessTaskResponse = models.StopMediaProcessTaskResponse;
const DescribeEditingTaskResultResponse = models.DescribeEditingTaskResultResponse;
const QualityControlInfoTaskResult = models.QualityControlInfoTaskResult;
const MediaQualityRestorationTaskResult = models.MediaQualityRestorationTaskResult;
const HiddenMarkInfo = models.HiddenMarkInfo;
const MediaCuttingOutForm = models.MediaCuttingOutForm;
const StopMediaQualityRestorationTaskRequest = models.StopMediaQualityRestorationTaskRequest;
const DescribeQualityControlTaskResultResponse = models.DescribeQualityControlTaskResultResponse;
const ClassificationTaskResultItem = models.ClassificationTaskResultItem;
const AudioInfo = models.AudioInfo;
const SubTaskResultItem = models.SubTaskResultItem;
const StripTaskResult = models.StripTaskResult;
const HighlightsEditingInfo = models.HighlightsEditingInfo;
const FileInfo = models.FileInfo;
const ResultAudioInfo = models.ResultAudioInfo;
const OpeningEndingTaskResult = models.OpeningEndingTaskResult;
const VideoEnhance = models.VideoEnhance;
const QualityControlResultItems = models.QualityControlResultItems;
const FrameTagItem = models.FrameTagItem;
const QualityControlItem = models.QualityControlItem;
const CoverTaskResult = models.CoverTaskResult;
const TagTaskResult = models.TagTaskResult;
const AudioEnhance = models.AudioEnhance;
const CosInfo = models.CosInfo;
const MediaResultInfo = models.MediaResultInfo;
const FrameTagResult = models.FrameTagResult;
const MediaCuttingTimeInfo = models.MediaCuttingTimeInfo;
const TargetInfo = models.TargetInfo;
const CreateMediaQualityRestorationTaskRequest = models.CreateMediaQualityRestorationTaskRequest;
const CreateEditingTaskRequest = models.CreateEditingTaskRequest;
const Denoising = models.Denoising;
const FaceProtect = models.FaceProtect;
const VideoInfoResultItem = models.VideoInfoResultItem;
const StopMediaProcessTaskRequest = models.StopMediaProcessTaskRequest;
const CoverEditingInfo = models.CoverEditingInfo;
const SubtitleItem = models.SubtitleItem;
const DescribeMediaProcessTaskResultRequest = models.DescribeMediaProcessTaskResultRequest;
const MediaProcessTaskResult = models.MediaProcessTaskResult;
const EditingTaskResult = models.EditingTaskResult;
const MediaProcessInfo = models.MediaProcessInfo;
const ClassificationTaskResult = models.ClassificationTaskResult;
const TagItem = models.TagItem;
const DescribeMediaProcessTaskResultResponse = models.DescribeMediaProcessTaskResultResponse;
const HighlightsTaskResultItemSegment = models.HighlightsTaskResultItemSegment;


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
     * 用于创建编辑处理任务，如媒体截取、媒体编辑、媒体拼接、媒体字幕。
     * @param {CreateMediaProcessTaskRequest} req
     * @param {function(string, CreateMediaProcessTaskResponse):void} cb
     * @public
     */
    CreateMediaProcessTask(req, cb) {
        let resp = new CreateMediaProcessTaskResponse();
        this.request("CreateMediaProcessTask", req, resp, cb);
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
     * 用于获取编辑处理任务的结果。
     * @param {DescribeMediaProcessTaskResultRequest} req
     * @param {function(string, DescribeMediaProcessTaskResultResponse):void} cb
     * @public
     */
    DescribeMediaProcessTaskResult(req, cb) {
        let resp = new DescribeMediaProcessTaskResultResponse();
        this.request("DescribeMediaProcessTaskResult", req, resp, cb);
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
     * 用于停止正在进行中的编辑处理任务。
     * @param {StopMediaProcessTaskRequest} req
     * @param {function(string, StopMediaProcessTaskResponse):void} cb
     * @public
     */
    StopMediaProcessTask(req, cb) {
        let resp = new StopMediaProcessTaskResponse();
        this.request("StopMediaProcessTask", req, resp, cb);
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
