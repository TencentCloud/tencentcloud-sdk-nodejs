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
 * cms client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(clientConfig) {
        super("cms.tencentcloudapi.com", "2019-03-21", clientConfig);
    }
    /**
     * 本文档适用于文本内容安全、音频内容安全自定义识别库的管理。
<br>
删除文本样本库，暂时只支持单个删除。
     */
    async DeleteTextSample(req, cb) {
        return this.request("DeleteTextSample", req, cb);
    }
    /**
     * 本文档适用于文本内容安全、音频内容安全自定义识别库的管理。
<br>
通过该接口可以将文本新增到样本库。
     */
    async CreateTextSample(req, cb) {
        return this.request("CreateTextSample", req, cb);
    }
    /**
     * 本文档适用于图片内容安全、视频内容安全自定义识别库的管理。
<br>
通过该接口可以将图片新增到样本库。
     */
    async CreateFileSample(req, cb) {
        return this.request("CreateFileSample", req, cb);
    }
    /**
     * 本文档适用于文本内容安全、音频内容安全自定义识别库的管理。
<br>
支持批量查询文本样本库。
     */
    async DescribeTextSample(req, cb) {
        return this.request("DescribeTextSample", req, cb);
    }
    /**
     * 人工审核对外接口
     */
    async ManualReview(req, cb) {
        return this.request("ManualReview", req, cb);
    }
    /**
     * 本文档适用于图片内容安全、视频内容安全自定义识别库的管理。
<br>
查询图片样本库，支持批量查询。
     */
    async DescribeFileSample(req, cb) {
        return this.request("DescribeFileSample", req, cb);
    }
    /**
     * 文本内容检测（Text Moderation）服务使用了深度学习技术，识别涉黄、涉政、涉恐等有害内容，同时支持用户配置词库，打击自定义的违规文本。
     */
    async TextModeration(req, cb) {
        return this.request("TextModeration", req, cb);
    }
    /**
     * 图片内容检测服务（Image Moderation, IM）能自动扫描图片，识别涉黄、涉恐、涉政、涉毒等有害内容，同时支持用户配置图片黑名单，打击自定义的违规图片。
     */
    async ImageModeration(req, cb) {
        return this.request("ImageModeration", req, cb);
    }
    /**
     * 本文档适用于图片内容安全、视频内容安全自定义识别库的管理。
<br>
删除图片样本库，支持批量删除，一次提交不超过20个。
     */
    async DeleteFileSample(req, cb) {
        return this.request("DeleteFileSample", req, cb);
    }
}
exports.Client = Client;
