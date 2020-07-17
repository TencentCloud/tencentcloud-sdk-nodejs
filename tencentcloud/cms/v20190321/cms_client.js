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
const CustomResult = models.CustomResult;
const TextData = models.TextData;
const TextModerationRequest = models.TextModerationRequest;
const DetailResult = models.DetailResult;
const ImageModerationResponse = models.ImageModerationResponse;
const TextModerationResponse = models.TextModerationResponse;
const ImageModerationRequest = models.ImageModerationRequest;
const CreateFileSampleRequest = models.CreateFileSampleRequest;
const ImageData = models.ImageData;
const ImagePornDetect = models.ImagePornDetect;
const DeleteTextSampleResponse = models.DeleteTextSampleResponse;
const TextSample = models.TextSample;
const CreateTextSampleResponse = models.CreateTextSampleResponse;
const TextOutputID = models.TextOutputID;
const User = models.User;
const FileSampleInfo = models.FileSampleInfo;
const DescribeFileSampleRequest = models.DescribeFileSampleRequest;
const Device = models.Device;
const CodeDetect = models.CodeDetect;
const ImageTerrorDetect = models.ImageTerrorDetect;
const DescribeTextSampleResponse = models.DescribeTextSampleResponse;
const CodePosition = models.CodePosition;
const DeleteFileSampleResponse = models.DeleteFileSampleResponse;
const FileSample = models.FileSample;
const DescribeFileSampleResponse = models.DescribeFileSampleResponse;
const TextOutputRes = models.TextOutputRes;
const RiskDetails = models.RiskDetails;
const CreateTextSampleRequest = models.CreateTextSampleRequest;
const DeleteFileSampleRequest = models.DeleteFileSampleRequest;
const Filter = models.Filter;
const OCRDetect = models.OCRDetect;
const Coordinate = models.Coordinate;
const Similar = models.Similar;
const ImageHotDetect = models.ImageHotDetect;
const TextOutputComm = models.TextOutputComm;
const DescribeTextSampleRequest = models.DescribeTextSampleRequest;
const CodeDetail = models.CodeDetail;
const ImagePolityDetect = models.ImagePolityDetect;
const OCRItem = models.OCRItem;
const ImageIllegalDetect = models.ImageIllegalDetect;
const RrectF = models.RrectF;
const CreateFileSampleResponse = models.CreateFileSampleResponse;
const LogoDetail = models.LogoDetail;
const Logo = models.Logo;
const PhoneDetect = models.PhoneDetect;
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
     * 本文档适用于文本内容安全、音频内容安全自定义识别库的管理。
<br>
删除文本样本库，暂时只支持单个删除。
     * @param {DeleteTextSampleRequest} req
     * @param {function(string, DeleteTextSampleResponse):void} cb
     * @public
     */
    DeleteTextSample(req, cb) {
        let resp = new DeleteTextSampleResponse();
        this.request("DeleteTextSample", req, resp, cb);
    }

    /**
     * 本文档适用于文本内容安全、音频内容安全自定义识别库的管理。
<br>
通过该接口可以将文本新增到样本库。
     * @param {CreateTextSampleRequest} req
     * @param {function(string, CreateTextSampleResponse):void} cb
     * @public
     */
    CreateTextSample(req, cb) {
        let resp = new CreateTextSampleResponse();
        this.request("CreateTextSample", req, resp, cb);
    }

    /**
     * 本文档适用于图片内容安全、视频内容安全自定义识别库的管理。
<br>
通过该接口可以将图片新增到样本库。
     * @param {CreateFileSampleRequest} req
     * @param {function(string, CreateFileSampleResponse):void} cb
     * @public
     */
    CreateFileSample(req, cb) {
        let resp = new CreateFileSampleResponse();
        this.request("CreateFileSample", req, resp, cb);
    }

    /**
     * 本文档适用于文本内容安全、音频内容安全自定义识别库的管理。
<br>
支持批量查询文本样本库。
     * @param {DescribeTextSampleRequest} req
     * @param {function(string, DescribeTextSampleResponse):void} cb
     * @public
     */
    DescribeTextSample(req, cb) {
        let resp = new DescribeTextSampleResponse();
        this.request("DescribeTextSample", req, resp, cb);
    }

    /**
     * 本文档适用于图片内容安全、视频内容安全自定义识别库的管理。
<br>
查询图片样本库，支持批量查询。
     * @param {DescribeFileSampleRequest} req
     * @param {function(string, DescribeFileSampleResponse):void} cb
     * @public
     */
    DescribeFileSample(req, cb) {
        let resp = new DescribeFileSampleResponse();
        this.request("DescribeFileSample", req, resp, cb);
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

    /**
     * 本文档适用于图片内容安全、视频内容安全自定义识别库的管理。
<br>
删除图片样本库，支持批量删除，一次提交不超过20个。
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
