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
const DescribeImageStatRequest = models.DescribeImageStatRequest;
const TrendCount = models.TrendCount;
const Location = models.Location;
const LabelDetailItem = models.LabelDetailItem;
const ImageModerationResponse = models.ImageModerationResponse;
const ImageModerationRequest = models.ImageModerationRequest;
const DescribeImsListResponse = models.DescribeImsListResponse;
const OcrResult = models.OcrResult;
const User = models.User;
const LabelResult = models.LabelResult;
const Device = models.Device;
const ImsDetail = models.ImsDetail;
const EvilCount = models.EvilCount;
const ObjectResult = models.ObjectResult;
const OcrTextDetail = models.OcrTextDetail;
const ObjectDetail = models.ObjectDetail;
const Filter = models.Filter;
const DescribeImageStatResponse = models.DescribeImageStatResponse;
const DescribeImsListRequest = models.DescribeImsListRequest;
const LibResult = models.LibResult;
const Overview = models.Overview;
const LibDetail = models.LibDetail;
const Filters = models.Filters;


/**
 * ims client
 * @class
 */
class ImsClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("ims.tencentcloudapi.com", "2020-07-13", credential, region, profile);
    }
    
    /**
     * 图片内容检测服务（Image Moderation, IM）能自动扫描图片，识别可能令人反感、不安全或不适宜的内容，同时支持用户配置图片黑名单，打击自定义识别类型的图片。

<div class="rno-api-explorer" style="margin-bottom:20px">
    <div class="rno-api-explorer-inner">
        <div class="rno-api-explorer-hd">
            <div class="rno-api-explorer-title">
                关于版本迭代的描述
            </div>
        </div>
        <div class="rno-api-explorer-body">
            <div class="rno-api-explorer-cont">
                <p>当前页面版本为图片内容安全2020版本，2020.11.3日前接入的图片内容安全接口为2019版本，在此时间前接入的用户可直接访问以下链接进行维护操作：<a href="https://cloud.tencent.com/document/product/1125/38206" target="_blank">图片内容安全-2019版本</a></p>
                <p>2020版本相对2019版本进行了升级，支持更灵活的多场景业务策略配置以及更丰富的识别回调信息，满足不同业务的识别需求，建议按照2020版本接入指引进行接口升级；同时，2019版本也会持续维护直至用户不再使用为止。</p>
            </div>
        </div>
    </div>
</div>
     * @param {ImageModerationRequest} req
     * @param {function(string, ImageModerationResponse):void} cb
     * @public
     */
    ImageModeration(req, cb) {
        let resp = new ImageModerationResponse();
        this.request("ImageModeration", req, resp, cb);
    }

    /**
     * 图片机器审核明细
     * @param {DescribeImsListRequest} req
     * @param {function(string, DescribeImsListResponse):void} cb
     * @public
     */
    DescribeImsList(req, cb) {
        let resp = new DescribeImsListResponse();
        this.request("DescribeImsList", req, resp, cb);
    }

    /**
     * 控制台识别统计
     * @param {DescribeImageStatRequest} req
     * @param {function(string, DescribeImageStatResponse):void} cb
     * @public
     */
    DescribeImageStat(req, cb) {
        let resp = new DescribeImageStatResponse();
        this.request("DescribeImageStat", req, resp, cb);
    }


}
module.exports = ImsClient;
