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
 * ame client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(clientConfig) {
        super("ame.tencentcloudapi.com", "2019-09-16", clientConfig);
    }
    /**
     * 根据歌曲ID查询歌曲信息
     */
    async DescribeItemById(req, cb) {
        return this.request("DescribeItemById", req, cb);
    }
    /**
     * 获取已购曲库包列表接口
     */
    async DescribePackages(req, cb) {
        return this.request("DescribePackages", req, cb);
    }
    /**
     * 根据接口的模式及歌曲ID来取得歌词信息。
     */
    async DescribeLyric(req, cb) {
        return this.request("DescribeLyric", req, cb);
    }
    /**
     * 该服务后续会停用，不再建议使用
     */
    async DescribeItems(req, cb) {
        return this.request("DescribeItems", req, cb);
    }
    /**
     * 获取授权项目信息列表
     */
    async DescribeAuthInfo(req, cb) {
        return this.request("DescribeAuthInfo", req, cb);
    }
    /**
     * 客户上报用户数据功能，为了更好地为用户提供优质服务
     */
    async ReportData(req, cb) {
        return this.request("ReportData", req, cb);
    }
    /**
     * 获取曲库包歌曲播放信息接口
     */
    async DescribeMusic(req, cb) {
        return this.request("DescribeMusic", req, cb);
    }
    /**
     * 获取云音乐播放信息接口
     */
    async DescribeCloudMusic(req, cb) {
        return this.request("DescribeCloudMusic", req, cb);
    }
    /**
     * 获取曲库包下已核销歌曲列表接口
     */
    async DescribePackageItems(req, cb) {
        return this.request("DescribePackageItems", req, cb);
    }
    /**
     * 获取授权项目下已购云音乐列表
     */
    async DescribeCloudMusicPurchased(req, cb) {
        return this.request("DescribeCloudMusicPurchased", req, cb);
    }
    /**
     * 该服务后续会停用，不再建议使用
     */
    async DescribeStations(req, cb) {
        return this.request("DescribeStations", req, cb);
    }
}
exports.Client = Client;
