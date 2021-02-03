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
 * ape client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(clientConfig) {
        super("ape.tencentcloudapi.com", "2020-05-13", clientConfig);
    }
    /**
     * 分页查询授权人列表
     */
    async DescribeAuthUsers(req, cb) {
        return this.request("DescribeAuthUsers", req, cb);
    }
    /**
     * 获取用户图片下载记录
     */
    async DescribeDownloadInfos(req, cb) {
        return this.request("DescribeDownloadInfos", req, cb);
    }
    /**
     * 批量获取授权书下载地址
     */
    async BatchDescribeOrderCertificate(req, cb) {
        return this.request("BatchDescribeOrderCertificate", req, cb);
    }
    /**
     * 根据关键字搜索图片列表
     */
    async DescribeImages(req, cb) {
        return this.request("DescribeImages", req, cb);
    }
    /**
     * 核销图片，获取原图URL地址
     */
    async CreateOrderAndDownloads(req, cb) {
        return this.request("CreateOrderAndDownloads", req, cb);
    }
    /**
     * 根据ID查询一张图片的详细信息
     */
    async DescribeImage(req, cb) {
        return this.request("DescribeImage", req, cb);
    }
    /**
     * 购买一张图片并且支付
     */
    async CreateOrderAndPay(req, cb) {
        return this.request("CreateOrderAndPay", req, cb);
    }
    /**
     * 批量获取图片下载地址
     */
    async BatchDescribeOrderImage(req, cb) {
        return this.request("BatchDescribeOrderImage", req, cb);
    }
}
exports.Client = Client;
