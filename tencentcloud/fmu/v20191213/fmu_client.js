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
const DeleteModelRequest = models.DeleteModelRequest;
const TryLipstickPicRequest = models.TryLipstickPicRequest;
const GetModelListRequest = models.GetModelListRequest;
const TryLipstickPicResponse = models.TryLipstickPicResponse;
const LipColorInfo = models.LipColorInfo;
const CreateModelRequest = models.CreateModelRequest;
const RGBAInfo = models.RGBAInfo;
const GetModelListResponse = models.GetModelListResponse;
const ModelInfo = models.ModelInfo;
const FaceRect = models.FaceRect;
const BeautifyPicRequest = models.BeautifyPicRequest;
const CreateModelResponse = models.CreateModelResponse;
const DeleteModelResponse = models.DeleteModelResponse;
const BeautifyPicResponse = models.BeautifyPicResponse;


/**
 * fmu client
 * @class
 */
class FmuClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("fmu.tencentcloudapi.com", "2019-12-13", credential, region, profile);
    }
    
    /**
     * 在使用LUT素材的modelid实现试唇色前，您需要先上传 LUT 格式的cube文件注册唇色ID。查看 [LUT文件的使用说明](https://cloud.tencent.com/document/product/1172/41701)。

注：您也可以直接使用 [试唇色接口](https://cloud.tencent.com/document/product/1172/40706)，通过输入RGBA模型数值的方式指定唇色，更简单易用。

     * @param {CreateModelRequest} req
     * @param {function(string, CreateModelResponse):void} cb
     * @public
     */
    CreateModel(req, cb) {
        let resp = new CreateModelResponse();
        this.request("CreateModel", req, resp, cb);
    }

    /**
     * 查询已注册的唇色素材。
     * @param {GetModelListRequest} req
     * @param {function(string, GetModelListResponse):void} cb
     * @public
     */
    GetModelList(req, cb) {
        let resp = new GetModelListResponse();
        this.request("GetModelList", req, resp, cb);
    }

    /**
     * 删除已注册的唇色素材。
     * @param {DeleteModelRequest} req
     * @param {function(string, DeleteModelResponse):void} cb
     * @public
     */
    DeleteModel(req, cb) {
        let resp = new DeleteModelResponse();
        this.request("DeleteModel", req, resp, cb);
    }

    /**
     * 对图片中的人脸嘴唇进行着色，最多支持同时对一张图中的3张人脸进行试唇色。

您可以通过事先注册在腾讯云的唇色素材（LUT文件）改变图片中的人脸唇色，也可以输入RGBA模型数值。

为了更好的效果，建议您使用事先注册在腾讯云的唇色素材（LUT文件）。

>     
- 公共参数中的签名方式请使用V3版本，即配置SignatureMethod参数为TC3-HMAC-SHA256。
     * @param {TryLipstickPicRequest} req
     * @param {function(string, TryLipstickPicResponse):void} cb
     * @public
     */
    TryLipstickPic(req, cb) {
        let resp = new TryLipstickPicResponse();
        this.request("TryLipstickPic", req, resp, cb);
    }

    /**
     * 用户上传一张人脸图片，精准定位五官，实现美肤、亮肤、祛痘等美颜功能。
     * @param {BeautifyPicRequest} req
     * @param {function(string, BeautifyPicResponse):void} cb
     * @public
     */
    BeautifyPic(req, cb) {
        let resp = new BeautifyPicResponse();
        this.request("BeautifyPic", req, resp, cb);
    }


}
module.exports = FmuClient;
