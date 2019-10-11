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
const TextModerationRequest = models.TextModerationRequest;
const ImageModerationResponse = models.ImageModerationResponse;
const ImageModerationRequest = models.ImageModerationRequest;
const CreateFileSampleRequest = models.CreateFileSampleRequest;
const ImageData = models.ImageData;
const ImagePornDetect = models.ImagePornDetect;
const DeleteTextSampleResponse = models.DeleteTextSampleResponse;
const TextSample = models.TextSample;
const CreateTextSampleResponse = models.CreateTextSampleResponse;
const OverviewRecord = models.OverviewRecord;
const FileSampleInfo = models.FileSampleInfo;
const DescribeFileSampleRequest = models.DescribeFileSampleRequest;
const CodeDetect = models.CodeDetect;
const ImageTerrorDetect = models.ImageTerrorDetect;
const DescribeTextSampleResponse = models.DescribeTextSampleResponse;
const CodePosition = models.CodePosition;
const DeleteFileSampleResponse = models.DeleteFileSampleResponse;
const FileSample = models.FileSample;
const DescribeFileSampleResponse = models.DescribeFileSampleResponse;
const CreateTextSampleRequest = models.CreateTextSampleRequest;
const DeleteFileSampleRequest = models.DeleteFileSampleRequest;
const Filter = models.Filter;
const OCRDetect = models.OCRDetect;
const DescribeModerationOverviewResponse = models.DescribeModerationOverviewResponse;
const Similar = models.Similar;
const ImageHotDetect = models.ImageHotDetect;
const DescribeTextSampleRequest = models.DescribeTextSampleRequest;
const AudioModerationRequest = models.AudioModerationRequest;
const CodeDetail = models.CodeDetail;
const ImagePolityDetect = models.ImagePolityDetect;
const ImageIllegalDetect = models.ImageIllegalDetect;
const CreateFileSampleResponse = models.CreateFileSampleResponse;
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

<br>
接口返回值说明：调用本接口有两个返回值，一个是同步返回值，一个是识别完成后的异步回调返回值。

视频识别结果存在于异步回调返回值中，异步回调返回值明细：

参数名 | 类型 | 描述
-|-|-
SeqID | String | 请求seqId唯一标识
EvilFlag | Integer | 是否恶意：0正常，1可疑（Homology模块下：0未匹配到，1恶意，2白样本）
EvilType | Integer | 恶意类型：100正常，20001政治，20002色情
Duration | Integer | 视频时长（单位：秒）
PornDetect | [VideoDetectData](#VDD) | 视频智能鉴黄
PolityDetect | [VideoDetectData](#VDD) | 视频涉政识别
Homology | [VideoDetectData](#VDD) | 相似度识别


<span id="VDD">VideoDetectData</span>

参数名 | 类型 | 描述
-|-|-
HitFlag | Integer  | 0正常，1可疑
Score | Integer | 判断分值
EvilType | Integer | 恶意类型：100正常，20001政治，20002色情
Keywords | Array of String | 关键词明细
SeedUrl | String | 命中的种子URL
     * @param {VideoModerationRequest} req
     * @param {function(string, VideoModerationResponse):void} cb
     * @public
     */
    VideoModeration(req, cb) {
        let resp = new VideoModerationResponse();
        this.request("VideoModeration", req, resp, cb);
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
     * 通过该接口可以将文件新增到样本库
     * @param {CreateFileSampleRequest} req
     * @param {function(string, CreateFileSampleResponse):void} cb
     * @public
     */
    CreateFileSample(req, cb) {
        let resp = new CreateFileSampleResponse();
        this.request("CreateFileSample", req, resp, cb);
    }

    /**
     * 音频内容检测（Audio Moderation, AM）服务使用了波形分析、声纹分析等技术，能识别涉黄、涉政、涉恐等违规音频，同时支持用户配置音频黑库，打击自定义的违规内容。

<br>
接口返回值说明：调用本接口有两个返回值，一个是同步返回值，一个是识别完成后的异步回调返回值。

音频识别结果存在于异步回调返回值中，异步回调返回值明细：

参数名 | 类型 | 描述
-|-|-
SeqID | String | 请求seqId唯一标识
EvilFlag | Integer | 是否恶意：0正常，1可疑（Homology模块下：0未匹配到，1恶意，2白样本）
EvilType | Integer | 恶意类型：100正常，20001政治，20002色情，20007谩骂
Duration | Integer | 音频时长（单位：毫秒）
PornDetect | [AudioDetectData](#ADD) | 音频智能鉴黄
PolityDetect | [AudioDetectData](#ADD)| 音频涉政识别
CurseDetect | [AudioDetectData](#ADD) | 音频谩骂识别
CustomizedDetect | [AudioDetectData](#ADD) | 自定义识别
Homology | [AudioDetectData](#ADD) | 相似度识别


<span id="ADD"> AudioDetectData </span>

参数名 | 类型 | 描述
-|-|-
HitFlag | Integer | 0正常，1可疑
Score | Integer | 判断分值
EvilType | Integer | 恶意类型：100正常，20001政治，20002色情，20007谩骂
Keywords | Array of String | 关键词明细
StartTime | Array of String | 恶意开始时间（Homology、CustomizedDetect无此字段）
EndTime | Array of String | 恶意结束时间（Homology、CustomizedDetect无此字段）
SeedUrl | String | 命中的种子URL
     * @param {AudioModerationRequest} req
     * @param {function(string, AudioModerationResponse):void} cb
     * @public
     */
    AudioModeration(req, cb) {
        let resp = new AudioModerationResponse();
        this.request("AudioModeration", req, resp, cb);
    }

    /**
     * 查询文件样本库，支持批量查询
     * @param {DescribeFileSampleRequest} req
     * @param {function(string, DescribeFileSampleResponse):void} cb
     * @public
     */
    DescribeFileSample(req, cb) {
        let resp = new DescribeFileSampleResponse();
        this.request("DescribeFileSample", req, resp, cb);
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
     * 图片内容检测服务（Image Moderation, IM）能自动扫描图片，识别涉黄、涉恐、涉政、涉毒等有害内容，同时支持用户配置图片黑名单，打击自定义的违规图片。
     * @param {ImageModerationRequest} req
     * @param {function(string, ImageModerationResponse):void} cb
     * @public
     */
    ImageModeration(req, cb) {
        let resp = new ImageModerationResponse();
        this.request("ImageModeration", req, resp, cb);
    }

    /**
     * 删除文件样本库，支持批量删除，一次提交不超过20个
     * @param {DeleteFileSampleRequest} req
     * @param {function(string, DeleteFileSampleResponse):void} cb
     * @public
     */
    DeleteFileSample(req, cb) {
        let resp = new DeleteFileSampleResponse();
        this.request("DeleteFileSample", req, resp, cb);
    }


}
module.exports = CmsClient;
