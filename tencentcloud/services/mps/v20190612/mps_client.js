"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
/* eslint-disable @typescript-eslint/no-unused-vars */
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
const abstract_client_1 = require("../../../common/abstract_client");
/**
 * mps client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(clientConfig) {
        super("mps.tencentcloudapi.com", "2019-06-12", clientConfig);
    }
    /**
     * 创建用户自定义指定时间点截图模板，数量上限：16。
     */
    async CreateSnapshotByTimeOffsetTemplate(req, cb) {
        return this.request("CreateSnapshotByTimeOffsetTemplate", req, cb);
    }
    /**
     * 从 CMQ 获取到消息后，从消息的 msgBody 字段中解析出 MPS 事件通知的内容。
该接口不用于发起网络调用，而是用来帮助生成各个语言平台的 SDK，您可以参考 SDK 的中解析函数的实现事件通知的解析。
     */
    async ParseNotification(req, cb) {
        return this.request("ParseNotification", req, cb);
    }
    /**
     * 修改用户自定义内容智能识别模板。
     */
    async ModifyContentReviewTemplate(req, cb) {
        return this.request("ModifyContentReviewTemplate", req, cb);
    }
    /**
     * 创建用户自定义内容智能识别模板，数量上限：50。
     */
    async CreateContentReviewTemplate(req, cb) {
        return this.request("CreateContentReviewTemplate", req, cb);
    }
    /**
     * 创建用户自定义采样截图模板，数量上限：16。
     */
    async CreateSampleSnapshotTemplate(req, cb) {
        return this.request("CreateSampleSnapshotTemplate", req, cb);
    }
    /**
     * 对视频进行编辑（剪辑、拼接等），生成一个新的点播视频。编辑的功能包括：

1. 对一个文件进行剪辑，生成一个新的视频；
2. 对多个文件进行拼接，生成一个新的视频；
3. 对多个文件进行剪辑，然后再拼接，生成一个新的视频。
     */
    async EditMedia(req, cb) {
        return this.request("EditMedia", req, cb);
    }
    /**
     * 删除用户自定义内容分析模板。

注意：模板 ID 为 10000 以下的为系统预置模板，不允许删除。
     */
    async DeleteAIAnalysisTemplate(req, cb) {
        return this.request("DeleteAIAnalysisTemplate", req, cb);
    }
    /**
     * 从 CMQ 获取到消息后，从消息的 msgBody 字段中解析出 MPS 直播流处理事件通知的内容。
该接口不用于发起网络调用，而是用来帮助生成各个语言平台的 SDK，您可以参考 SDK 的中解析函数的实现事件通知的解析。
     */
    async ParseLiveStreamProcessNotification(req, cb) {
        return this.request("ParseLiveStreamProcessNotification", req, cb);
    }
    /**
     * 根据工作流 ID，获取工作流详情列表。
     */
    async DescribeWorkflows(req, cb) {
        return this.request("DescribeWorkflows", req, cb);
    }
    /**
     * 查询指定时间点截图模板，支持根据条件，分页查询。
     */
    async DescribeSnapshotByTimeOffsetTemplates(req, cb) {
        return this.request("DescribeSnapshotByTimeOffsetTemplates", req, cb);
    }
    /**
     * 获取媒体的元信息，包括视频画面宽、高、编码格式、时长、帧率等。
     */
    async DescribeMediaMetaData(req, cb) {
        return this.request("DescribeMediaMetaData", req, cb);
    }
    /**
     * 重新设置一个已经存在且处于禁用状态的工作流。
     */
    async ResetWorkflow(req, cb) {
        return this.request("ResetWorkflow", req, cb);
    }
    /**
     * 修改用户自定义转码模板信息。
     */
    async ModifyTranscodeTemplate(req, cb) {
        return this.request("ModifyTranscodeTemplate", req, cb);
    }
    /**
     * 删除用户自定义转动图模板。
     */
    async DeleteAnimatedGraphicsTemplate(req, cb) {
        return this.request("DeleteAnimatedGraphicsTemplate", req, cb);
    }
    /**
     * 根据内容分析模板唯一标识，获取内容分析模板详情列表。返回结果包含符合条件的所有用户自定义内容分析模板及系统预置视频内容分析模板
     */
    async DescribeAIAnalysisTemplates(req, cb) {
        return this.request("DescribeAIAnalysisTemplates", req, cb);
    }
    /**
     * 通过任务 ID 查询任务的执行状态和结果的详细信息（最多可以查询3天之内提交的任务）。
     */
    async DescribeTaskDetail(req, cb) {
        return this.request("DescribeTaskDetail", req, cb);
    }
    /**
     * 修改用户自定义内容识别模板。
     */
    async ModifyAIRecognitionTemplate(req, cb) {
        return this.request("ModifyAIRecognitionTemplate", req, cb);
    }
    /**
     * 修改转自适应码流模板
     */
    async ModifyAdaptiveDynamicStreamingTemplate(req, cb) {
        return this.request("ModifyAdaptiveDynamicStreamingTemplate", req, cb);
    }
    /**
     * 修改用户自定义采样截图模板。
     */
    async ModifySampleSnapshotTemplate(req, cb) {
        return this.request("ModifySampleSnapshotTemplate", req, cb);
    }
    /**
     * 删除用户自定义水印模板。
     */
    async DeleteWatermarkTemplate(req, cb) {
        return this.request("DeleteWatermarkTemplate", req, cb);
    }
    /**
     * 该接口用于根据素材 ID，删除素材样本。
     */
    async DeletePersonSample(req, cb) {
        return this.request("DeletePersonSample", req, cb);
    }
    /**
     * 删除用户自定义转码模板。
     */
    async DeleteTranscodeTemplate(req, cb) {
        return this.request("DeleteTranscodeTemplate", req, cb);
    }
    /**
     * 删除用户自定义指定时间点截图模板。
     */
    async DeleteSnapshotByTimeOffsetTemplate(req, cb) {
        return this.request("DeleteSnapshotByTimeOffsetTemplate", req, cb);
    }
    /**
     * 修改用户自定义转动图模板。
     */
    async ModifyAnimatedGraphicsTemplate(req, cb) {
        return this.request("ModifyAnimatedGraphicsTemplate", req, cb);
    }
    /**
     * 该接口用于根据应用场景、关键词、标签，分页查询关键词样本信息。
     */
    async DescribeWordSamples(req, cb) {
        return this.request("DescribeWordSamples", req, cb);
    }
    /**
     * 修改用户自定义水印模板，水印类型不允许修改。
     */
    async ModifyWatermarkTemplate(req, cb) {
        return this.request("ModifyWatermarkTemplate", req, cb);
    }
    /**
     * 该接口用于批量删除关键词样本。
     */
    async DeleteWordSamples(req, cb) {
        return this.request("DeleteWordSamples", req, cb);
    }
    /**
     * 删除工作流。对于已启用的工作流，需要禁用后才能删除。
     */
    async DeleteWorkflow(req, cb) {
        return this.request("DeleteWorkflow", req, cb);
    }
    /**
     * 删除转自适应码流模板
     */
    async DeleteAdaptiveDynamicStreamingTemplate(req, cb) {
        return this.request("DeleteAdaptiveDynamicStreamingTemplate", req, cb);
    }
    /**
     * 创建转自适应码流模板，数量上限：100。
     */
    async CreateAdaptiveDynamicStreamingTemplate(req, cb) {
        return this.request("CreateAdaptiveDynamicStreamingTemplate", req, cb);
    }
    /**
     * 禁用工作流。
     */
    async DisableWorkflow(req, cb) {
        return this.request("DisableWorkflow", req, cb);
    }
    /**
     * 查询采样截图模板，支持根据条件，分页查询。
     */
    async DescribeSampleSnapshotTemplates(req, cb) {
        return this.request("DescribeSampleSnapshotTemplates", req, cb);
    }
    /**
     * 创建用户自定义水印模板，数量上限：1000。
     */
    async CreateWatermarkTemplate(req, cb) {
        return this.request("CreateWatermarkTemplate", req, cb);
    }
    /**
     * 该接口用于查询素材样本信息，支持根据素材 ID、名称、标签，分页查询。
     */
    async DescribePersonSamples(req, cb) {
        return this.request("DescribePersonSamples", req, cb);
    }
    /**
     * 删除用户自定义采样截图模板。
     */
    async DeleteSampleSnapshotTemplate(req, cb) {
        return this.request("DeleteSampleSnapshotTemplate", req, cb);
    }
    /**
     * 删除用户自定义内容识别模板。
     */
    async DeleteAIRecognitionTemplate(req, cb) {
        return this.request("DeleteAIRecognitionTemplate", req, cb);
    }
    /**
     * 创建用户自定义转动图模板，数量上限：16。
     */
    async CreateAnimatedGraphicsTemplate(req, cb) {
        return this.request("CreateAnimatedGraphicsTemplate", req, cb);
    }
    /**
     * 查询转动图模板列表，支持根据条件，分页查询。
     */
    async DescribeAnimatedGraphicsTemplates(req, cb) {
        return this.request("DescribeAnimatedGraphicsTemplates", req, cb);
    }
    /**
     * 启用工作流。
     */
    async EnableWorkflow(req, cb) {
        return this.request("EnableWorkflow", req, cb);
    }
    /**
     * 智能媒体识别，包含表情和动作识别。仅用于智学，其他调用无效。
     */
    async RecognizeMediaForZhiXue(req, cb) {
        return this.request("RecognizeMediaForZhiXue", req, cb);
    }
    /**
     * 对已发起的任务进行管理。
     */
    async ManageTask(req, cb) {
        return this.request("ManageTask", req, cb);
    }
    /**
     * 修改用户自定义内容分析模板。

注意：模板 ID 10000 以下的为系统预置模板，不允许修改。
     */
    async ModifyAIAnalysisTemplate(req, cb) {
        return this.request("ModifyAIAnalysisTemplate", req, cb);
    }
    /**
     * * 该接口用于查询任务列表；
* 当列表数据比较多时，单次接口调用无法拉取整个列表，可通过 ScrollToken 参数，分批拉取；
* 只能查询到最近三天（72 小时）内的任务。
     */
    async DescribeTasks(req, cb) {
        return this.request("DescribeTasks", req, cb);
    }
    /**
     * 修改用户自定义指定时间点截图模板。
     */
    async ModifySnapshotByTimeOffsetTemplate(req, cb) {
        return this.request("ModifySnapshotByTimeOffsetTemplate", req, cb);
    }
    /**
     * 该接口用于批量创建关键词样本，样本用于通过OCR、ASR技术，进行不适宜内容识别、内容识别等视频处理。
     */
    async CreateWordSamples(req, cb) {
        return this.request("CreateWordSamples", req, cb);
    }
    /**
     * 该接口用于创建素材样本，用于通过五官定位等技术，进行内容识别、内容不适宜等视频处理。
     */
    async CreatePersonSample(req, cb) {
        return this.request("CreatePersonSample", req, cb);
    }
    /**
     * 本接口仅用于定制开发的特殊场景，除非云视频处理客服人员主动告知您需要使用本接口，其它情况请勿调用。
     */
    async ExecuteFunction(req, cb) {
        return this.request("ExecuteFunction", req, cb);
    }
    /**
     * 该接口用于根据素材 ID，修改素材样本信息，包括名称、描述的修改，以及五官、标签的添加、删除、重置操作。五官删除操作需保证至少剩余 1 张图片，否则，请使用重置操作。
     */
    async ModifyPersonSample(req, cb) {
        return this.request("ModifyPersonSample", req, cb);
    }
    /**
     * 创建用户自定义转码模板，数量上限：1000。
     */
    async CreateTranscodeTemplate(req, cb) {
        return this.request("CreateTranscodeTemplate", req, cb);
    }
    /**
     * 对 COS 中指定 Bucket 的目录下上传的媒体文件，设置处理规则，包括：
1. 视频转码（带水印）；
2. 视频转动图；
3. 对视频按指定时间点截图；
4. 对视频采样截图；
5. 对视频截图雪碧图；
6. 对视频转自适应码流；
7. 智能内容审核（鉴黄、敏感信息检测）；
8. 智能内容分析（标签、分类、封面、按帧标签）；
9. 智能内容识别（人脸、文本全文、文本关键词、语音全文、语音关键词）。

注意：创建工作流成功后是禁用状态，需要手动启用。
     */
    async CreateWorkflow(req, cb) {
        return this.request("CreateWorkflow", req, cb);
    }
    /**
     * 对直播流媒体发起处理任务，功能包括：

* 智能内容审核（画面鉴黄、敏感信息检测、声音鉴黄）；
* 智能内容识别（人脸、文本全文、文本关键词、语音全文、语音关键词）。

直播流处理事件通知实时写入用户指定的消息队列 CMQ 中，用户需要从消息队列 CMQ 中获取事件通知结果，同时处理过程中存在输出文件的，会写入用户指定的输出文件的目标存储中。
     */
    async ProcessLiveStream(req, cb) {
        return this.request("ProcessLiveStream", req, cb);
    }
    /**
     * 查询转自适应码流模板，支持根据条件，分页查询。
     */
    async DescribeAdaptiveDynamicStreamingTemplates(req, cb) {
        return this.request("DescribeAdaptiveDynamicStreamingTemplates", req, cb);
    }
    /**
     * 对 COS 中的媒体文件发起处理任务，功能包括：
1. 视频转码（带水印）；
2. 视频转动图；
3. 对视频按指定时间点截图；
4. 对视频采样截图；
5. 对视频截图雪碧图；
6. 对视频转自适应码流；
7. 智能内容审核（鉴黄、敏感信息检测）；
8. 智能内容分析（标签、分类、封面、按帧标签）；
9. 智能内容识别（人脸、文本全文、文本关键词、语音全文、语音关键词）。
     */
    async ProcessMedia(req, cb) {
        return this.request("ProcessMedia", req, cb);
    }
    /**
     * 创建用户自定义内容识别模板，数量上限：50。
     */
    async CreateAIRecognitionTemplate(req, cb) {
        return this.request("CreateAIRecognitionTemplate", req, cb);
    }
    /**
     * 修改用户自定义雪碧图模板。
     */
    async ModifyImageSpriteTemplate(req, cb) {
        return this.request("ModifyImageSpriteTemplate", req, cb);
    }
    /**
     * 该接口用于修改关键词的应用场景、标签，关键词本身不可修改，如需修改，可删除重建。
     */
    async ModifyWordSample(req, cb) {
        return this.request("ModifyWordSample", req, cb);
    }
    /**
     * 查询雪碧图模板，支持根据条件，分页查询。
     */
    async DescribeImageSpriteTemplates(req, cb) {
        return this.request("DescribeImageSpriteTemplates", req, cb);
    }
    /**
     * 删除用户自定义内容智能识别模板。
     */
    async DeleteContentReviewTemplate(req, cb) {
        return this.request("DeleteContentReviewTemplate", req, cb);
    }
    /**
     * 创建用户自定义内容分析模板，数量上限：50。
     */
    async CreateAIAnalysisTemplate(req, cb) {
        return this.request("CreateAIAnalysisTemplate", req, cb);
    }
    /**
     * 根据内容识别模板唯一标识，获取内容识别模板详情列表。返回结果包含符合条件的所有用户自定义内容识别模板及系统预置视频内容识别模板
     */
    async DescribeAIRecognitionTemplates(req, cb) {
        return this.request("DescribeAIRecognitionTemplates", req, cb);
    }
    /**
     * 查询用户自定义水印模板，支持根据条件，分页查询。
     */
    async DescribeWatermarkTemplates(req, cb) {
        return this.request("DescribeWatermarkTemplates", req, cb);
    }
    /**
     * 创建用户自定义雪碧图模板，数量上限：16。
     */
    async CreateImageSpriteTemplate(req, cb) {
        return this.request("CreateImageSpriteTemplate", req, cb);
    }
    /**
     * 删除雪碧图模板。
     */
    async DeleteImageSpriteTemplate(req, cb) {
        return this.request("DeleteImageSpriteTemplate", req, cb);
    }
    /**
     * 根据转码模板唯一标识，获取转码模板详情列表。返回结果包含符合条件的所有用户自定义模板及[系统预置转码模板](https://cloud.tencent.com/document/product/266/33476#.E9.A2.84.E7.BD.AE.E8.BD.AC.E7.A0.81.E6.A8.A1.E6.9D.BF)。
     */
    async DescribeTranscodeTemplates(req, cb) {
        return this.request("DescribeTranscodeTemplates", req, cb);
    }
    /**
     * 根据内容智能识别模板唯一标识，获取内容智能识别模板详情列表。返回结果包含符合条件的所有用户自定义模板及系统预置内容智能识别模板。
     */
    async DescribeContentReviewTemplates(req, cb) {
        return this.request("DescribeContentReviewTemplates", req, cb);
    }
}
exports.Client = Client;
