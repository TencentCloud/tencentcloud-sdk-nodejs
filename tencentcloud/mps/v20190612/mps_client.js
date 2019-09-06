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
const ModifySnapshotByTimeOffsetTemplateResponse = models.ModifySnapshotByTimeOffsetTemplateResponse;
const ModifySampleSnapshotTemplateResponse = models.ModifySampleSnapshotTemplateResponse;
const ModifyWatermarkTemplateRequest = models.ModifyWatermarkTemplateRequest;
const AnimatedGraphicTaskInput = models.AnimatedGraphicTaskInput;
const DescribeTaskDetailResponse = models.DescribeTaskDetailResponse;
const DeleteImageSpriteTemplateRequest = models.DeleteImageSpriteTemplateRequest;
const SvgWatermarkInput = models.SvgWatermarkInput;
const WorkflowInfo = models.WorkflowInfo;
const CreateTranscodeTemplateRequest = models.CreateTranscodeTemplateRequest;
const DescribeAnimatedGraphicsTemplatesRequest = models.DescribeAnimatedGraphicsTemplatesRequest;
const DescribeImageSpriteTemplatesRequest = models.DescribeImageSpriteTemplatesRequest;
const DeleteWorkflowResponse = models.DeleteWorkflowResponse;
const DeleteAnimatedGraphicsTemplateResponse = models.DeleteAnimatedGraphicsTemplateResponse;
const ModifyAnimatedGraphicsTemplateResponse = models.ModifyAnimatedGraphicsTemplateResponse;
const ResetWorkflowResponse = models.ResetWorkflowResponse;
const DescribeTasksResponse = models.DescribeTasksResponse;
const DeleteTranscodeTemplateRequest = models.DeleteTranscodeTemplateRequest;
const DeleteWorkflowRequest = models.DeleteWorkflowRequest;
const ModifySnapshotByTimeOffsetTemplateRequest = models.ModifySnapshotByTimeOffsetTemplateRequest;
const ModifySampleSnapshotTemplateRequest = models.ModifySampleSnapshotTemplateRequest;
const DescribeUserInfoRequest = models.DescribeUserInfoRequest;
const MediaInputInfo = models.MediaInputInfo;
const MediaProcessTaskImageSpriteResult = models.MediaProcessTaskImageSpriteResult;
const CreateWorkflowRequest = models.CreateWorkflowRequest;
const DescribeSnapshotByTimeOffsetTemplatesResponse = models.DescribeSnapshotByTimeOffsetTemplatesResponse;
const MediaVideoStreamItem = models.MediaVideoStreamItem;
const SnapshotByTimeOffsetTemplate = models.SnapshotByTimeOffsetTemplate;
const DeleteSnapshotByTimeOffsetTemplateResponse = models.DeleteSnapshotByTimeOffsetTemplateResponse;
const DescribeTasksRequest = models.DescribeTasksRequest;
const DeleteSampleSnapshotTemplateResponse = models.DeleteSampleSnapshotTemplateResponse;
const CreateTranscodeTemplateResponse = models.CreateTranscodeTemplateResponse;
const ResetWorkflowRequest = models.ResetWorkflowRequest;
const DescribeAnimatedGraphicsTemplatesResponse = models.DescribeAnimatedGraphicsTemplatesResponse;
const CreateImageSpriteTemplateRequest = models.CreateImageSpriteTemplateRequest;
const DescribeWorkflowsRequest = models.DescribeWorkflowsRequest;
const MediaAudioStreamItem = models.MediaAudioStreamItem;
const WorkflowTrigger = models.WorkflowTrigger;
const ModifyImageSpriteTemplateRequest = models.ModifyImageSpriteTemplateRequest;
const TaskSimpleInfo = models.TaskSimpleInfo;
const DeleteWatermarkTemplateRequest = models.DeleteWatermarkTemplateRequest;
const CreateSnapshotByTimeOffsetTemplateResponse = models.CreateSnapshotByTimeOffsetTemplateResponse;
const ImageWatermarkInputForUpdate = models.ImageWatermarkInputForUpdate;
const AiContentReviewTaskInput = models.AiContentReviewTaskInput;
const SvgWatermarkInputForUpdate = models.SvgWatermarkInputForUpdate;
const VideoTemplateInfo = models.VideoTemplateInfo;
const DescribeSampleSnapshotTemplatesResponse = models.DescribeSampleSnapshotTemplatesResponse;
const AiAnalysisTaskInput = models.AiAnalysisTaskInput;
const ImageSpriteTemplate = models.ImageSpriteTemplate;
const DescribeWatermarkTemplatesRequest = models.DescribeWatermarkTemplatesRequest;
const DeleteSampleSnapshotTemplateRequest = models.DeleteSampleSnapshotTemplateRequest;
const TaskOutputStorage = models.TaskOutputStorage;
const AudioTemplateInfoForUpdate = models.AudioTemplateInfoForUpdate;
const SnapshotByTimeOffsetTaskInput = models.SnapshotByTimeOffsetTaskInput;
const MediaSampleSnapshotItem = models.MediaSampleSnapshotItem;
const DescribeUserInfoResponse = models.DescribeUserInfoResponse;
const DescribeTranscodeTemplatesRequest = models.DescribeTranscodeTemplatesRequest;
const CreateSampleSnapshotTemplateResponse = models.CreateSampleSnapshotTemplateResponse;
const AiRecognitionTaskInput = models.AiRecognitionTaskInput;
const DisableWorkflowRequest = models.DisableWorkflowRequest;
const MediaSnapshotByTimeOffsetItem = models.MediaSnapshotByTimeOffsetItem;
const AudioTemplateInfo = models.AudioTemplateInfo;
const TextWatermarkTemplateInput = models.TextWatermarkTemplateInput;
const MediaAnimatedGraphicsItem = models.MediaAnimatedGraphicsItem;
const DescribeWatermarkTemplatesResponse = models.DescribeWatermarkTemplatesResponse;
const MediaProcessTaskAnimatedGraphicResult = models.MediaProcessTaskAnimatedGraphicResult;
const CreateAnimatedGraphicsTemplateRequest = models.CreateAnimatedGraphicsTemplateRequest;
const MediaMetaData = models.MediaMetaData;
const TranscodeTemplate = models.TranscodeTemplate;
const DeleteTranscodeTemplateResponse = models.DeleteTranscodeTemplateResponse;
const MediaTranscodeItem = models.MediaTranscodeItem;
const TextWatermarkTemplateInputForUpdate = models.TextWatermarkTemplateInputForUpdate;
const ProcessMediaRequest = models.ProcessMediaRequest;
const ProcessLiveMediaResponse = models.ProcessLiveMediaResponse;
const CreateSnapshotByTimeOffsetTemplateRequest = models.CreateSnapshotByTimeOffsetTemplateRequest;
const CreateSampleSnapshotTemplateRequest = models.CreateSampleSnapshotTemplateRequest;
const DescribeSampleSnapshotTemplatesRequest = models.DescribeSampleSnapshotTemplatesRequest;
const WorkflowTask = models.WorkflowTask;
const DisableWorkflowResponse = models.DisableWorkflowResponse;
const MediaProcessTaskSnapshotByTimeOffsetResult = models.MediaProcessTaskSnapshotByTimeOffsetResult;
const SampleSnapshotTemplate = models.SampleSnapshotTemplate;
const SampleSnapshotTaskInput = models.SampleSnapshotTaskInput;
const CosInputInfo = models.CosInputInfo;
const TranscodeTaskInput = models.TranscodeTaskInput;
const CreateWatermarkTemplateResponse = models.CreateWatermarkTemplateResponse;
const NumberFormat = models.NumberFormat;
const EnableWorkflowRequest = models.EnableWorkflowRequest;
const MediaProcessTaskTranscodeResult = models.MediaProcessTaskTranscodeResult;
const DescribeTranscodeTemplatesResponse = models.DescribeTranscodeTemplatesResponse;
const DeleteAnimatedGraphicsTemplateRequest = models.DeleteAnimatedGraphicsTemplateRequest;
const DeleteSnapshotByTimeOffsetTemplateRequest = models.DeleteSnapshotByTimeOffsetTemplateRequest;
const ImageSpriteTaskInput = models.ImageSpriteTaskInput;
const MediaProcessTaskSampleSnapshotResult = models.MediaProcessTaskSampleSnapshotResult;
const ModifyTranscodeTemplateRequest = models.ModifyTranscodeTemplateRequest;
const ImageWatermarkTemplate = models.ImageWatermarkTemplate;
const ImageWatermarkInput = models.ImageWatermarkInput;
const CosFileUploadTrigger = models.CosFileUploadTrigger;
const TEHDConfigForUpdate = models.TEHDConfigForUpdate;
const CreateAnimatedGraphicsTemplateResponse = models.CreateAnimatedGraphicsTemplateResponse;
const MediaSnapshotByTimePicInfoItem = models.MediaSnapshotByTimePicInfoItem;
const WatermarkTemplate = models.WatermarkTemplate;
const MediaImageSpriteItem = models.MediaImageSpriteItem;
const DescribeWorkflowsResponse = models.DescribeWorkflowsResponse;
const DescribeTaskDetailRequest = models.DescribeTaskDetailRequest;
const DeleteImageSpriteTemplateResponse = models.DeleteImageSpriteTemplateResponse;
const CreateWorkflowResponse = models.CreateWorkflowResponse;
const TEHDConfig = models.TEHDConfig;
const AnimatedGraphicsTemplate = models.AnimatedGraphicsTemplate;
const ModifyAnimatedGraphicsTemplateRequest = models.ModifyAnimatedGraphicsTemplateRequest;
const MediaProcessTaskResult = models.MediaProcessTaskResult;
const ProcessLiveMediaRequest = models.ProcessLiveMediaRequest;
const WatermarkInput = models.WatermarkInput;
const EnableWorkflowResponse = models.EnableWorkflowResponse;
const DescribeSnapshotByTimeOffsetTemplatesRequest = models.DescribeSnapshotByTimeOffsetTemplatesRequest;
const ModifyImageSpriteTemplateResponse = models.ModifyImageSpriteTemplateResponse;
const CreateWatermarkTemplateRequest = models.CreateWatermarkTemplateRequest;
const DeleteWatermarkTemplateResponse = models.DeleteWatermarkTemplateResponse;
const ModifyTranscodeTemplateResponse = models.ModifyTranscodeTemplateResponse;
const ProcessMediaResponse = models.ProcessMediaResponse;
const MediaProcessTaskInput = models.MediaProcessTaskInput;
const VideoTemplateInfoForUpdate = models.VideoTemplateInfoForUpdate;
const CreateImageSpriteTemplateResponse = models.CreateImageSpriteTemplateResponse;
const CosOutputStorage = models.CosOutputStorage;
const DescribeImageSpriteTemplatesResponse = models.DescribeImageSpriteTemplatesResponse;
const ModifyWatermarkTemplateResponse = models.ModifyWatermarkTemplateResponse;
const TaskNotifyConfig = models.TaskNotifyConfig;


/**
 * mps client
 * @class
 */
class MpsClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("mps.tencentcloudapi.com", "2019-06-12", credential, region, profile);
    }
    
    /**
     * 创建用户自定义指定时间点截图模板，数量上限：16。
     * @param {CreateSnapshotByTimeOffsetTemplateRequest} req
     * @param {function(string, CreateSnapshotByTimeOffsetTemplateResponse):void} cb
     * @public
     */
    CreateSnapshotByTimeOffsetTemplate(req, cb) {
        let resp = new CreateSnapshotByTimeOffsetTemplateResponse();
        this.request("CreateSnapshotByTimeOffsetTemplate", req, resp, cb);
    }

    /**
     * 创建用户自定义采样截图模板，数量上限：16。
     * @param {CreateSampleSnapshotTemplateRequest} req
     * @param {function(string, CreateSampleSnapshotTemplateResponse):void} cb
     * @public
     */
    CreateSampleSnapshotTemplate(req, cb) {
        let resp = new CreateSampleSnapshotTemplateResponse();
        this.request("CreateSampleSnapshotTemplate", req, resp, cb);
    }

    /**
     * 查询指定时间点截图模板，支持根据条件，分页查询。
     * @param {DescribeSnapshotByTimeOffsetTemplatesRequest} req
     * @param {function(string, DescribeSnapshotByTimeOffsetTemplatesResponse):void} cb
     * @public
     */
    DescribeSnapshotByTimeOffsetTemplates(req, cb) {
        let resp = new DescribeSnapshotByTimeOffsetTemplatesResponse();
        this.request("DescribeSnapshotByTimeOffsetTemplates", req, resp, cb);
    }

    /**
     * 重新设置一个已经存在且处于禁用状态的工作流。
     * @param {ResetWorkflowRequest} req
     * @param {function(string, ResetWorkflowResponse):void} cb
     * @public
     */
    ResetWorkflow(req, cb) {
        let resp = new ResetWorkflowResponse();
        this.request("ResetWorkflow", req, resp, cb);
    }

    /**
     * 修改用户自定义转码模板信息。
     * @param {ModifyTranscodeTemplateRequest} req
     * @param {function(string, ModifyTranscodeTemplateResponse):void} cb
     * @public
     */
    ModifyTranscodeTemplate(req, cb) {
        let resp = new ModifyTranscodeTemplateResponse();
        this.request("ModifyTranscodeTemplate", req, resp, cb);
    }

    /**
     * 删除用户自定义转动图模板。
     * @param {DeleteAnimatedGraphicsTemplateRequest} req
     * @param {function(string, DeleteAnimatedGraphicsTemplateResponse):void} cb
     * @public
     */
    DeleteAnimatedGraphicsTemplate(req, cb) {
        let resp = new DeleteAnimatedGraphicsTemplateResponse();
        this.request("DeleteAnimatedGraphicsTemplate", req, resp, cb);
    }

    /**
     * 修改用户自定义采样截图模板。
     * @param {ModifySampleSnapshotTemplateRequest} req
     * @param {function(string, ModifySampleSnapshotTemplateResponse):void} cb
     * @public
     */
    ModifySampleSnapshotTemplate(req, cb) {
        let resp = new ModifySampleSnapshotTemplateResponse();
        this.request("ModifySampleSnapshotTemplate", req, resp, cb);
    }

    /**
     * 删除用户自定义水印模板。
     * @param {DeleteWatermarkTemplateRequest} req
     * @param {function(string, DeleteWatermarkTemplateResponse):void} cb
     * @public
     */
    DeleteWatermarkTemplate(req, cb) {
        let resp = new DeleteWatermarkTemplateResponse();
        this.request("DeleteWatermarkTemplate", req, resp, cb);
    }

    /**
     * 根据工作流 ID，获取工作流详情列表。
     * @param {DescribeWorkflowsRequest} req
     * @param {function(string, DescribeWorkflowsResponse):void} cb
     * @public
     */
    DescribeWorkflows(req, cb) {
        let resp = new DescribeWorkflowsResponse();
        this.request("DescribeWorkflows", req, resp, cb);
    }

    /**
     * 删除用户自定义转码模板。
     * @param {DeleteTranscodeTemplateRequest} req
     * @param {function(string, DeleteTranscodeTemplateResponse):void} cb
     * @public
     */
    DeleteTranscodeTemplate(req, cb) {
        let resp = new DeleteTranscodeTemplateResponse();
        this.request("DeleteTranscodeTemplate", req, resp, cb);
    }

    /**
     * 通过任务 ID 查询任务的执行状态和结果的详细信息（最多可以查询3天之内提交的任务）。
     * @param {DescribeTaskDetailRequest} req
     * @param {function(string, DescribeTaskDetailResponse):void} cb
     * @public
     */
    DescribeTaskDetail(req, cb) {
        let resp = new DescribeTaskDetailResponse();
        this.request("DescribeTaskDetail", req, resp, cb);
    }

    /**
     * 修改用户自定义转动图模板。
     * @param {ModifyAnimatedGraphicsTemplateRequest} req
     * @param {function(string, ModifyAnimatedGraphicsTemplateResponse):void} cb
     * @public
     */
    ModifyAnimatedGraphicsTemplate(req, cb) {
        let resp = new ModifyAnimatedGraphicsTemplateResponse();
        this.request("ModifyAnimatedGraphicsTemplate", req, resp, cb);
    }

    /**
     * 修改用户自定义水印模板，水印类型不允许修改。
     * @param {ModifyWatermarkTemplateRequest} req
     * @param {function(string, ModifyWatermarkTemplateResponse):void} cb
     * @public
     */
    ModifyWatermarkTemplate(req, cb) {
        let resp = new ModifyWatermarkTemplateResponse();
        this.request("ModifyWatermarkTemplate", req, resp, cb);
    }

    /**
     * 删除用户自定义指定时间点截图模板。
     * @param {DeleteSnapshotByTimeOffsetTemplateRequest} req
     * @param {function(string, DeleteSnapshotByTimeOffsetTemplateResponse):void} cb
     * @public
     */
    DeleteSnapshotByTimeOffsetTemplate(req, cb) {
        let resp = new DeleteSnapshotByTimeOffsetTemplateResponse();
        this.request("DeleteSnapshotByTimeOffsetTemplate", req, resp, cb);
    }

    /**
     * 禁用工作流。
     * @param {DisableWorkflowRequest} req
     * @param {function(string, DisableWorkflowResponse):void} cb
     * @public
     */
    DisableWorkflow(req, cb) {
        let resp = new DisableWorkflowResponse();
        this.request("DisableWorkflow", req, resp, cb);
    }

    /**
     * 查询采样截图模板，支持根据条件，分页查询。
     * @param {DescribeSampleSnapshotTemplatesRequest} req
     * @param {function(string, DescribeSampleSnapshotTemplatesResponse):void} cb
     * @public
     */
    DescribeSampleSnapshotTemplates(req, cb) {
        let resp = new DescribeSampleSnapshotTemplatesResponse();
        this.request("DescribeSampleSnapshotTemplates", req, resp, cb);
    }

    /**
     * 根据转码模板唯一标识，获取转码模板详情列表。返回结果包含符合条件的所有用户自定义模板及[系统预置转码模板](https://cloud.tencent.com/document/product/266/33476#.E9.A2.84.E7.BD.AE.E8.BD.AC.E7.A0.81.E6.A8.A1.E6.9D.BF)。
     * @param {DescribeTranscodeTemplatesRequest} req
     * @param {function(string, DescribeTranscodeTemplatesResponse):void} cb
     * @public
     */
    DescribeTranscodeTemplates(req, cb) {
        let resp = new DescribeTranscodeTemplatesResponse();
        this.request("DescribeTranscodeTemplates", req, resp, cb);
    }

    /**
     * 删除用户自定义采样截图模板。
     * @param {DeleteSampleSnapshotTemplateRequest} req
     * @param {function(string, DeleteSampleSnapshotTemplateResponse):void} cb
     * @public
     */
    DeleteSampleSnapshotTemplate(req, cb) {
        let resp = new DeleteSampleSnapshotTemplateResponse();
        this.request("DeleteSampleSnapshotTemplate", req, resp, cb);
    }

    /**
     * 对直播流媒体发起处理任务，功能包括：

1. 智能内容识别（人脸、文本全文、文本关键词、语音全文、语音关键词、物体）。
2. 智能内容分析（精彩集锦）。

直播流处理事件通知实时写入用户指定的消息队列 CMQ 中，用户需要从消息队列 CMQ 中获取事件通知结果，同时处理过程中存在输出文件的，会写入用户指定的输出文件的目标存储中。
     * @param {ProcessLiveMediaRequest} req
     * @param {function(string, ProcessLiveMediaResponse):void} cb
     * @public
     */
    ProcessLiveMedia(req, cb) {
        let resp = new ProcessLiveMediaResponse();
        this.request("ProcessLiveMedia", req, resp, cb);
    }

    /**
     * 创建用户自定义转动图模板，数量上限：16。
     * @param {CreateAnimatedGraphicsTemplateRequest} req
     * @param {function(string, CreateAnimatedGraphicsTemplateResponse):void} cb
     * @public
     */
    CreateAnimatedGraphicsTemplate(req, cb) {
        let resp = new CreateAnimatedGraphicsTemplateResponse();
        this.request("CreateAnimatedGraphicsTemplate", req, resp, cb);
    }

    /**
     * 查询转动图模板列表，支持根据条件，分页查询。
     * @param {DescribeAnimatedGraphicsTemplatesRequest} req
     * @param {function(string, DescribeAnimatedGraphicsTemplatesResponse):void} cb
     * @public
     */
    DescribeAnimatedGraphicsTemplates(req, cb) {
        let resp = new DescribeAnimatedGraphicsTemplatesResponse();
        this.request("DescribeAnimatedGraphicsTemplates", req, resp, cb);
    }

    /**
     * 启用工作流。
     * @param {EnableWorkflowRequest} req
     * @param {function(string, EnableWorkflowResponse):void} cb
     * @public
     */
    EnableWorkflow(req, cb) {
        let resp = new EnableWorkflowResponse();
        this.request("EnableWorkflow", req, resp, cb);
    }

    /**
     * 创建用户自定义水印模板，数量上限：1000。
     * @param {CreateWatermarkTemplateRequest} req
     * @param {function(string, CreateWatermarkTemplateResponse):void} cb
     * @public
     */
    CreateWatermarkTemplate(req, cb) {
        let resp = new CreateWatermarkTemplateResponse();
        this.request("CreateWatermarkTemplate", req, resp, cb);
    }

    /**
     * 删除工作流。对于已启用的工作流，需要禁用后才能删除。
     * @param {DeleteWorkflowRequest} req
     * @param {function(string, DeleteWorkflowResponse):void} cb
     * @public
     */
    DeleteWorkflow(req, cb) {
        let resp = new DeleteWorkflowResponse();
        this.request("DeleteWorkflow", req, resp, cb);
    }

    /**
     * 用户信息查询，返回用户状态和计费类型，若未注册则返回未注册用户错误提示。
     * @param {DescribeUserInfoRequest} req
     * @param {function(string, DescribeUserInfoResponse):void} cb
     * @public
     */
    DescribeUserInfo(req, cb) {
        let resp = new DescribeUserInfoResponse();
        this.request("DescribeUserInfo", req, resp, cb);
    }

    /**
     * * 该接口用于查询任务列表；
* 当列表数据比较多时，单次接口调用无法拉取整个列表，可通过 ScrollToken 参数，分批拉取；
* 只能查询到最近三天（72 小时）内的任务。
     * @param {DescribeTasksRequest} req
     * @param {function(string, DescribeTasksResponse):void} cb
     * @public
     */
    DescribeTasks(req, cb) {
        let resp = new DescribeTasksResponse();
        this.request("DescribeTasks", req, resp, cb);
    }

    /**
     * 修改用户自定义指定时间点截图模板。
     * @param {ModifySnapshotByTimeOffsetTemplateRequest} req
     * @param {function(string, ModifySnapshotByTimeOffsetTemplateResponse):void} cb
     * @public
     */
    ModifySnapshotByTimeOffsetTemplate(req, cb) {
        let resp = new ModifySnapshotByTimeOffsetTemplateResponse();
        this.request("ModifySnapshotByTimeOffsetTemplate", req, resp, cb);
    }

    /**
     * 创建用户自定义转码模板，数量上限：1000。
     * @param {CreateTranscodeTemplateRequest} req
     * @param {function(string, CreateTranscodeTemplateResponse):void} cb
     * @public
     */
    CreateTranscodeTemplate(req, cb) {
        let resp = new CreateTranscodeTemplateResponse();
        this.request("CreateTranscodeTemplate", req, resp, cb);
    }

    /**
     * 对 COS 中指定 Bucket 的目录下上传的媒体文件，设置处理规则，包括：
1. 视频转码（带水印）；
2. 视频转动图；
3. 对视频按指定时间点截图；
4. 对视频采样截图；
5. 对视频截图雪碧图；
6. 对视频转自适应码流。

注意：创建工作流成功后是禁用状态，需要手动启用。
     * @param {CreateWorkflowRequest} req
     * @param {function(string, CreateWorkflowResponse):void} cb
     * @public
     */
    CreateWorkflow(req, cb) {
        let resp = new CreateWorkflowResponse();
        this.request("CreateWorkflow", req, resp, cb);
    }

    /**
     * 对 COS 中的媒体文件发起处理任务，功能包括：
1. 视频转码（带水印）；
2. 视频转动图；
3. 对视频按指定时间点截图；
4. 对视频采样截图；
5. 对视频截图雪碧图；
6. 对视频转自适应码流。
     * @param {ProcessMediaRequest} req
     * @param {function(string, ProcessMediaResponse):void} cb
     * @public
     */
    ProcessMedia(req, cb) {
        let resp = new ProcessMediaResponse();
        this.request("ProcessMedia", req, resp, cb);
    }

    /**
     * 修改用户自定义雪碧图模板。
     * @param {ModifyImageSpriteTemplateRequest} req
     * @param {function(string, ModifyImageSpriteTemplateResponse):void} cb
     * @public
     */
    ModifyImageSpriteTemplate(req, cb) {
        let resp = new ModifyImageSpriteTemplateResponse();
        this.request("ModifyImageSpriteTemplate", req, resp, cb);
    }

    /**
     * 查询雪碧图模板，支持根据条件，分页查询。
     * @param {DescribeImageSpriteTemplatesRequest} req
     * @param {function(string, DescribeImageSpriteTemplatesResponse):void} cb
     * @public
     */
    DescribeImageSpriteTemplates(req, cb) {
        let resp = new DescribeImageSpriteTemplatesResponse();
        this.request("DescribeImageSpriteTemplates", req, resp, cb);
    }

    /**
     * 查询用户自定义水印模板，支持根据条件，分页查询。
     * @param {DescribeWatermarkTemplatesRequest} req
     * @param {function(string, DescribeWatermarkTemplatesResponse):void} cb
     * @public
     */
    DescribeWatermarkTemplates(req, cb) {
        let resp = new DescribeWatermarkTemplatesResponse();
        this.request("DescribeWatermarkTemplates", req, resp, cb);
    }

    /**
     * 创建用户自定义雪碧图模板，数量上限：16。
     * @param {CreateImageSpriteTemplateRequest} req
     * @param {function(string, CreateImageSpriteTemplateResponse):void} cb
     * @public
     */
    CreateImageSpriteTemplate(req, cb) {
        let resp = new CreateImageSpriteTemplateResponse();
        this.request("CreateImageSpriteTemplate", req, resp, cb);
    }

    /**
     * 删除雪碧图模板。
     * @param {DeleteImageSpriteTemplateRequest} req
     * @param {function(string, DeleteImageSpriteTemplateResponse):void} cb
     * @public
     */
    DeleteImageSpriteTemplate(req, cb) {
        let resp = new DeleteImageSpriteTemplateResponse();
        this.request("DeleteImageSpriteTemplate", req, resp, cb);
    }


}
module.exports = MpsClient;
