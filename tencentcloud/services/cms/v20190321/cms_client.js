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
     * 获取关键词接口
     */
    async DescribeLibSamples(req, cb) {
        return this.request("DescribeLibSamples", req, cb);
    }
    /**
     * 获取用户词库列表
     */
    async DescribeKeywordsLibs(req, cb) {
        return this.request("DescribeKeywordsLibs", req, cb);
    }
    /**
     * 创建关键词接口
     */
    async CreateKeywordsSamples(req, cb) {
        return this.request("CreateKeywordsSamples", req, cb);
    }
    /**
     * 删除关键词接口
     */
    async DeleteLibSamples(req, cb) {
        return this.request("DeleteLibSamples", req, cb);
    }
}
exports.Client = Client;
