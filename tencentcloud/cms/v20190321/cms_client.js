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
const AudioModerationResponse = models.AudioModerationResponse;
const DescribeModerationOverviewRequest = models.DescribeModerationOverviewRequest;
const TextModerationResponse = models.TextModerationResponse;
const TextData = models.TextData;
const VideoModerationResponse = models.VideoModerationResponse;
const ImageModerationResponse = models.ImageModerationResponse;
const ImageModerationRequest = models.ImageModerationRequest;
const ImageData = models.ImageData;
const ImagePornDetect = models.ImagePornDetect;
const DeleteTextSampleResponse = models.DeleteTextSampleResponse;
const CreateTextSampleResponse = models.CreateTextSampleResponse;
const ImagePolityDetect = models.ImagePolityDetect;
const ImageTerrorDetect = models.ImageTerrorDetect;
const DescribeTextSampleResponse = models.DescribeTextSampleResponse;
const TextSample = models.TextSample;
const OverviewRecord = models.OverviewRecord;
const CreateTextSampleRequest = models.CreateTextSampleRequest;
const TextModerationRequest = models.TextModerationRequest;
const Filter = models.Filter;
const DescribeModerationOverviewResponse = models.DescribeModerationOverviewResponse;
const Similar = models.Similar;
const ImageHotDetect = models.ImageHotDetect;
const DescribeTextSampleRequest = models.DescribeTextSampleRequest;
const AudioModerationRequest = models.AudioModerationRequest;
const ImageIllegalDetect = models.ImageIllegalDetect;
const VideoModerationRequest = models.VideoModerationRequest;
const DeleteTextSampleRequest = models.DeleteTextSampleRequest;


/**
 * cms client
 * @class
 */
class CmsClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("cms.tencentcloudapi.com", "2019-03-21", credential, region, profile);
    }
    
    /**
     * 根据日期，渠道和服务类型查询识别结果概览数据
     * @param {DescribeModerationOverviewRequest} req
     * @param {function(string, DescribeModerationOverviewResponse):void} cb
     * @public
     */
    DescribeModerationOverview(req, cb) {
        let resp = new DescribeModerationOverviewResponse();
        this.request("DescribeModerationOverview", req, resp, cb);
    }

    /**
     * 删除文字样本库，暂时只支持单个删除
     * @param {DeleteTextSampleRequest} req
     * @param {function(string, DeleteTextSampleResponse):void} cb
     * @public
     */
    DeleteTextSample(req, cb) {
        let resp = new DeleteTextSampleResponse();
        this.request("DeleteTextSample", req, resp, cb);
    }

    /**
     * 新增文本类型样本库
     * @param {CreateTextSampleRequest} req
     * @param {function(string, CreateTextSampleResponse):void} cb
     * @public
     */
    CreateTextSample(req, cb) {
        let resp = new CreateTextSampleResponse();
        this.request("CreateTextSample", req, resp, cb);
    }

    /**
     * 视频内容检测（Video Moderation, VM）服务能识别涉黄、涉政、涉恐等违规视频，同时支持用户配置视频黑库，打击自定义的违规内容。
     * @param {VideoModerationRequest} req
     * @param {function(string, VideoModerationResponse):void} cb
     * @public
     */
    VideoModeration(req, cb) {
        let resp = new VideoModerationResponse();
        this.request("VideoModeration", req, resp, cb);
    }

    /**
     * 音频内容检测（Audio Moderation, AM）服务使用了波形分析、声纹分析等技术，能识别涉黄、涉政、涉恐等违规音频，同时支持用户配置音频黑库，打击自定义的违规内容。
     * @param {AudioModerationRequest} req
     * @param {function(string, AudioModerationResponse):void} cb
     * @public
     */
    AudioModeration(req, cb) {
        let resp = new AudioModerationResponse();
        this.request("AudioModeration", req, resp, cb);
    }

    /**
     * 支持批量查询文字样本库
     * @param {DescribeTextSampleRequest} req
     * @param {function(string, DescribeTextSampleResponse):void} cb
     * @public
     */
    DescribeTextSample(req, cb) {
        let resp = new DescribeTextSampleResponse();
        this.request("DescribeTextSample", req, resp, cb);
    }

    /**
     * 文本内容检测（Text Moderation）服务使用了深度学习技术，识别涉黄、涉政、涉恐等有害内容，同时支持用户配置词库，打击自定义的违规文本。
     * @param {TextModerationRequest} req
     * @param {function(string, TextModerationResponse):void} cb
     * @public
     */
    TextModeration(req, cb) {
        let resp = new TextModerationResponse();
        this.request("TextModeration", req, resp, cb);
    }

    /**
     * 图片内容检测服务（Image Moderation, IM）能自动扫描图片，识别涉黄、涉恐、涉政、涉毒等有害内容，同时支持用户配置图片黑名单，打击自定义的违规图片。
     * @param {ImageModerationRequest} req
     * @param {function(string, ImageModerationResponse):void} cb
     * @public
     */
    ImageModeration(req, cb) {
        let resp = new ImageModerationResponse();
        this.request("ImageModeration", req, resp, cb);
    }


}
module.exports = CmsClient;
