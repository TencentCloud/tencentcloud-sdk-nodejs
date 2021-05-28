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
const DescribeImagesRequest = models.DescribeImagesRequest;
const BatchDescribeOrderCertificateRequest = models.BatchDescribeOrderCertificateRequest;
const BatchDescribeOrderImageResponse = models.BatchDescribeOrderImageResponse;
const ImageItem = models.ImageItem;
const DescribeImagesResponse = models.DescribeImagesResponse;
const ImageInfo = models.ImageInfo;
const CreateOrderAndDownloadsRequest = models.CreateOrderAndDownloadsRequest;
const ImageMarshal = models.ImageMarshal;
const BatchDescribeOrderCertificateResponse = models.BatchDescribeOrderCertificateResponse;
const DescribeImageResponse = models.DescribeImageResponse;
const DescribeAuthUsersResponse = models.DescribeAuthUsersResponse;
const DownloadInfo = models.DownloadInfo;
const AuthInfo = models.AuthInfo;
const DescribeImageRequest = models.DescribeImageRequest;
const DescribeDownloadInfosResponse = models.DescribeDownloadInfosResponse;
const CreateOrderAndPayResponse = models.CreateOrderAndPayResponse;
const DescribeAuthUsersRequest = models.DescribeAuthUsersRequest;
const DescribeDownloadInfosRequest = models.DescribeDownloadInfosRequest;
const CreateOrderAndPayRequest = models.CreateOrderAndPayRequest;
const CreateOrderAndDownloadsResponse = models.CreateOrderAndDownloadsResponse;
const BatchDescribeOrderImageRequest = models.BatchDescribeOrderImageRequest;


/**
 * ape client
 * @class
 */
class ApeClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("ape.tencentcloudapi.com", "2020-05-13", credential, region, profile);
    }
    
    /**
     * 分页查询授权人列表
     * @param {DescribeAuthUsersRequest} req
     * @param {function(string, DescribeAuthUsersResponse):void} cb
     * @public
     */
    DescribeAuthUsers(req, cb) {
        let resp = new DescribeAuthUsersResponse();
        this.request("DescribeAuthUsers", req, resp, cb);
    }

    /**
     * 获取用户图片下载记录
     * @param {DescribeDownloadInfosRequest} req
     * @param {function(string, DescribeDownloadInfosResponse):void} cb
     * @public
     */
    DescribeDownloadInfos(req, cb) {
        let resp = new DescribeDownloadInfosResponse();
        this.request("DescribeDownloadInfos", req, resp, cb);
    }

    /**
     * 批量获取授权书下载地址
     * @param {BatchDescribeOrderCertificateRequest} req
     * @param {function(string, BatchDescribeOrderCertificateResponse):void} cb
     * @public
     */
    BatchDescribeOrderCertificate(req, cb) {
        let resp = new BatchDescribeOrderCertificateResponse();
        this.request("BatchDescribeOrderCertificate", req, resp, cb);
    }

    /**
     * 根据关键字搜索图片列表
     * @param {DescribeImagesRequest} req
     * @param {function(string, DescribeImagesResponse):void} cb
     * @public
     */
    DescribeImages(req, cb) {
        let resp = new DescribeImagesResponse();
        this.request("DescribeImages", req, resp, cb);
    }

    /**
     * 核销图片，获取原图URL地址
     * @param {CreateOrderAndDownloadsRequest} req
     * @param {function(string, CreateOrderAndDownloadsResponse):void} cb
     * @public
     */
    CreateOrderAndDownloads(req, cb) {
        let resp = new CreateOrderAndDownloadsResponse();
        this.request("CreateOrderAndDownloads", req, resp, cb);
    }

    /**
     * 根据ID查询一张图片的详细信息
     * @param {DescribeImageRequest} req
     * @param {function(string, DescribeImageResponse):void} cb
     * @public
     */
    DescribeImage(req, cb) {
        let resp = new DescribeImageResponse();
        this.request("DescribeImage", req, resp, cb);
    }

    /**
     * 购买一张图片并且支付
     * @param {CreateOrderAndPayRequest} req
     * @param {function(string, CreateOrderAndPayResponse):void} cb
     * @public
     */
    CreateOrderAndPay(req, cb) {
        let resp = new CreateOrderAndPayResponse();
        this.request("CreateOrderAndPay", req, resp, cb);
    }

    /**
     * 批量获取图片下载地址
     * @param {BatchDescribeOrderImageRequest} req
     * @param {function(string, BatchDescribeOrderImageResponse):void} cb
     * @public
     */
    BatchDescribeOrderImage(req, cb) {
        let resp = new BatchDescribeOrderImageResponse();
        this.request("BatchDescribeOrderImage", req, resp, cb);
    }


}
module.exports = ApeClient;
