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
 * fmu client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(clientConfig) {
        super("fmu.tencentcloudapi.com", "2019-12-13", clientConfig);
    }
    /**
     * 在使用LUT素材的modelid实现试唇色前，您需要先上传 LUT 格式的cube文件注册唇色ID。查看 [LUT文件的使用说明](https://cloud.tencent.com/document/product/1172/41701)。

注：您也可以直接使用 [试唇色接口](https://cloud.tencent.com/document/product/1172/40706)，通过输入RGBA模型数值的方式指定唇色，更简单易用。
     */
    async CreateModel(req, cb) {
        return this.request("CreateModel", req, cb);
    }
    /**
     * 上传一张照片，输出滤镜处理后的图片。
     */
    async StyleImage(req, cb) {
        return this.request("StyleImage", req, cb);
    }
    /**
     * 上传一张照片，输出滤镜处理后的图片。
     */
    async StyleImagePro(req, cb) {
        return this.request("StyleImagePro", req, cb);
    }
    /**
     * 产品不再维护，准备下线。

撤销视频美颜任务请求
     */
    async CancelBeautifyVideoJob(req, cb) {
        return this.request("CancelBeautifyVideoJob", req, cb);
    }
    /**
     * 产品不再维护，准备下线。

查询视频美颜处理进度
     */
    async QueryBeautifyVideoJob(req, cb) {
        return this.request("QueryBeautifyVideoJob", req, cb);
    }
    /**
     * 删除已注册的唇色素材。
     */
    async DeleteModel(req, cb) {
        return this.request("DeleteModel", req, cb);
    }
    /**
     * 用户上传一张人脸图片（最多能处理一张图片中最大的五张人脸信息），精准定位五官，实现美肤、亮肤、祛痘等美颜功能。
     */
    async BeautifyPic(req, cb) {
        return this.request("BeautifyPic", req, cb);
    }
    /**
     * 对图片中的人脸嘴唇进行着色，最多支持同时对一张图中的3张人脸进行试唇色。

您可以通过事先注册在腾讯云的唇色素材（LUT文件）改变图片中的人脸唇色，也可以输入RGBA模型数值。

为了更好的效果，建议您使用事先注册在腾讯云的唇色素材（LUT文件）。

>
- 公共参数中的签名方式请使用V3版本，即配置SignatureMethod参数为TC3-HMAC-SHA256。
     */
    async TryLipstickPic(req, cb) {
        return this.request("TryLipstickPic", req, cb);
    }
    /**
     * 查询已注册的唇色素材。
     */
    async GetModelList(req, cb) {
        return this.request("GetModelList", req, cb);
    }
    /**
     * 产品不再维护，准备下线。

视频美颜(此接口目前已下线)
     */
    async BeautifyVideo(req, cb) {
        return this.request("BeautifyVideo", req, cb);
    }
}
exports.Client = Client;
