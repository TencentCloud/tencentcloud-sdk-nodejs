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
 * ft client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(clientConfig) {
        super("ft.tencentcloudapi.com", "2020-03-04", clientConfig);
    }
    /**
     * 撤销人像渐变任务请求
     */
    async CancelFaceMorphJob(req, cb) {
        return this.request("CancelFaceMorphJob", req, cb);
    }
    /**
     * 用户上传一张人脸图片，基于人脸编辑与生成算法，输出一张人脸性别转换的图片。男变女可实现美颜、淡妆、加刘海和长发的效果；女变男可实现加胡须、变短发的效果。
     */
    async SwapGenderPic(req, cb) {
        return this.request("SwapGenderPic", req, cb);
    }
    /**
     * 输入2-5张人脸照片，生成一段以人脸为焦点的渐变视频或GIF图，支持自定义图片播放速度、视频每秒传输帧数，可用于短视频、表情包、创意H5等应用场景，丰富静态图片的玩法。
     */
    async MorphFace(req, cb) {
        return this.request("MorphFace", req, cb);
    }
    /**
     * 用户上传一张人脸图片，基于人脸编辑与生成算法，输出一张人脸变老或变年轻的图片，支持实现人脸不同年龄的变化。
     */
    async ChangeAgePic(req, cb) {
        return this.request("ChangeAgePic", req, cb);
    }
    /**
     * 查询人像渐变处理进度
     */
    async QueryFaceMorphJob(req, cb) {
        return this.request("QueryFaceMorphJob", req, cb);
    }
    /**
     * 输入一张人脸照片，生成个性化的二次元动漫形象，可用于打造个性头像、趣味活动、特效类应用等场景，提升社交娱乐的体验。
     */
    async FaceCartoonPic(req, cb) {
        return this.request("FaceCartoonPic", req, cb);
    }
}
exports.Client = Client;
