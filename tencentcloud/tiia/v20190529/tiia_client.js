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
const DetectProductResponse = models.DetectProductResponse;
const ImageModerationRequest = models.ImageModerationRequest;
const Product = models.Product;
const Candidate = models.Candidate;
const TerrorismResult = models.TerrorismResult;
const DetectLabelRequest = models.DetectLabelRequest;
const RecognizeCarRequest = models.RecognizeCarRequest;
const Coord = models.Coord;
const DetectLabelResponse = models.DetectLabelResponse;
const PoliticsResult = models.PoliticsResult;
const PornResult = models.PornResult;
const DisgustResult = models.DisgustResult;
const CarTagItem = models.CarTagItem;
const FaceRect = models.FaceRect;
const FaceResult = models.FaceResult;
const RecognizeCarResponse = models.RecognizeCarResponse;
const DetectProductRequest = models.DetectProductRequest;
const ImageModerationResponse = models.ImageModerationResponse;
const DetectLabelItem = models.DetectLabelItem;


/**
 * tiia client
 * @class
 */
class TiiaClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("tiia.tencentcloudapi.com", "2019-05-29", credential, region, profile);
    }
    
    /**
     * 本接口提供多种维度的图像审核能力，支持色情和性感内容识别，政治人物和涉政敏感场景识别，以及暴恐人物、场景、旗帜标识等违禁内容的识别。
     * @param {ImageModerationRequest} req
     * @param {function(string, ImageModerationResponse):void} cb
     * @public
     */
    ImageModeration(req, cb) {
        let resp = new ImageModerationResponse();
        this.request("ImageModeration", req, resp, cb);
    }

    /**
     * 腾讯云车辆属性识别可对汽车车身及车辆属性进行检测与识别，目前支持11种车身颜色、20多种车型、300多种品牌、4000多种车系+年款的识别，同时支持对车标的位置进行检测。
     * @param {RecognizeCarRequest} req
     * @param {function(string, RecognizeCarResponse):void} cb
     * @public
     */
    RecognizeCar(req, cb) {
        let resp = new RecognizeCarResponse();
        this.request("RecognizeCar", req, resp, cb);
    }

    /**
     * 传入一张图片，识别出图片中存在的物体，并返回物体的名称（分类）、置信度，一张图片会给出多个可能的标签。
     * @param {DetectLabelRequest} req
     * @param {function(string, DetectLabelResponse):void} cb
     * @public
     */
    DetectLabel(req, cb) {
        let resp = new DetectLabelResponse();
        this.request("DetectLabel", req, resp, cb);
    }

    /**
     * 本接口支持识别图片中包含的商品，能够输出商品的品类名称、类别，还可以输出商品在图片中的位置。支持一张图片多个商品的识别。
     * @param {DetectProductRequest} req
     * @param {function(string, DetectProductResponse):void} cb
     * @public
     */
    DetectProduct(req, cb) {
        let resp = new DetectProductResponse();
        this.request("DetectProduct", req, resp, cb);
    }


}
module.exports = TiiaClient;
