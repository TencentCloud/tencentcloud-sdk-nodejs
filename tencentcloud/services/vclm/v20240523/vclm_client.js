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
 * vclm client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(clientConfig) {
        super("vclm.tencentcloudapi.com", "2024-05-23", clientConfig);
    }
    /**
     * 用于提交视频风格化任务。支持将输入视频生成特定风格的视频。生成后的视频画面风格多样、流畅自然，能够满足社交娱乐、互动营销、视频素材制作等场景的需求。
     */
    async SubmitVideoStylizationJob(req, cb) {
        return this.request("SubmitVideoStylizationJob", req, cb);
    }
    /**
     * 用于提交图片唱演任务。
支持提交音频和图片生成唱演视频，满足社交娱乐、互动营销等场景的需求。
     */
    async SubmitPortraitSingJob(req, cb) {
        return this.request("SubmitPortraitSingJob", req, cb);
    }
    /**
     * 用于查询图片唱演任务。
支持提交音频和图片生成唱演视频，满足社交娱乐、互动营销等场景的需求。
     */
    async DescribePortraitSingJob(req, cb) {
        return this.request("DescribePortraitSingJob", req, cb);
    }
    /**
     * 用于查询图片跳舞任务。图片跳舞能力支持舞蹈动作结合图片生成跳舞视频，满足社交娱乐、互动营销等场景的需求。
     */
    async DescribeImageAnimateJob(req, cb) {
        return this.request("DescribeImageAnimateJob", req, cb);
    }
    /**
     * 用于提交图片跳舞任务。图片跳舞能力支持舞蹈动作结合图片生成跳舞视频，满足社交娱乐、互动营销等场景的需求。
     */
    async SubmitImageAnimateJob(req, cb) {
        return this.request("SubmitImageAnimateJob", req, cb);
    }
    /**
     * 检查图片跳舞输入图
     */
    async CheckAnimateImageJob(req, cb) {
        return this.request("CheckAnimateImageJob", req, cb);
    }
    /**
     * 用于查询视频风格化任务。视频风格化支持将输入视频生成特定风格的视频。生成后的视频画面风格多样、流畅自然，能够满足社交娱乐、互动营销、视频素材制作等场景的需求。
     */
    async DescribeVideoStylizationJob(req, cb) {
        return this.request("DescribeVideoStylizationJob", req, cb);
    }
}
exports.Client = Client;
