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
const DescribeCaptchaResultResponse = models.DescribeCaptchaResultResponse;
const DescribeCaptchaOperDataResponse = models.DescribeCaptchaOperDataResponse;
const CaptchaOperDataInterceptUnit = models.CaptchaOperDataInterceptUnit;
const CaptchaOperDataTryTimesDistributeUnit = models.CaptchaOperDataTryTimesDistributeUnit;
const CaptchaOperDataLoadTimeUnit = models.CaptchaOperDataLoadTimeUnit;
const DescribeCaptchaAppIdInfoRequest = models.DescribeCaptchaAppIdInfoRequest;
const DescribeCaptchaAppIdInfoResponse = models.DescribeCaptchaAppIdInfoResponse;
const CaptchaOperDataTryTimesUnit = models.CaptchaOperDataTryTimesUnit;
const CaptchaUserAllAppId = models.CaptchaUserAllAppId;
const DescribeCaptchaDataResponse = models.DescribeCaptchaDataResponse;
const DescribeCaptchaDataRequest = models.DescribeCaptchaDataRequest;
const DescribeCaptchaUserAllAppIdResponse = models.DescribeCaptchaUserAllAppIdResponse;
const DescribeCaptchaDataSumRequest = models.DescribeCaptchaDataSumRequest;
const UpdateCaptchaAppIdInfoRequest = models.UpdateCaptchaAppIdInfoRequest;
const UpdateCaptchaAppIdInfoResponse = models.UpdateCaptchaAppIdInfoResponse;
const DescribeCaptchaUserAllAppIdRequest = models.DescribeCaptchaUserAllAppIdRequest;
const CaptchaQueryData = models.CaptchaQueryData;
const DescribeCaptchaDataSumResponse = models.DescribeCaptchaDataSumResponse;
const DescribeCaptchaOperDataRequest = models.DescribeCaptchaOperDataRequest;
const CaptchaOperDataRes = models.CaptchaOperDataRes;
const DescribeCaptchaResultRequest = models.DescribeCaptchaResultRequest;


/**
 * captcha client
 * @class
 */
class CaptchaClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("captcha.tencentcloudapi.com", "2019-07-22", credential, region, profile);
    }
    
    /**
     * 安全验证码获取用户注册所有APPId和应用名称
     * @param {DescribeCaptchaUserAllAppIdRequest} req
     * @param {function(string, DescribeCaptchaUserAllAppIdResponse):void} cb
     * @public
     */
    DescribeCaptchaUserAllAppId(req, cb) {
        let resp = new DescribeCaptchaUserAllAppIdResponse();
        this.request("DescribeCaptchaUserAllAppId", req, resp, cb);
    }

    /**
     * 安全验证码查询请求数据概况，例如：按照时间段查询数据  昨日请求量、昨日恶意比例、昨日验证量、昨日通过量、昨日恶意拦截量……
     * @param {DescribeCaptchaDataSumRequest} req
     * @param {function(string, DescribeCaptchaDataSumResponse):void} cb
     * @public
     */
    DescribeCaptchaDataSum(req, cb) {
        let resp = new DescribeCaptchaDataSumResponse();
        this.request("DescribeCaptchaDataSum", req, resp, cb);
    }

    /**
     * 安全验证码用户操作数据查询，验证码加载耗时type = 1 、拦截情况type = 2、 一周通过平均尝试次数 type = 3、尝试次数分布 type = 4
     * @param {DescribeCaptchaOperDataRequest} req
     * @param {function(string, DescribeCaptchaOperDataResponse):void} cb
     * @public
     */
    DescribeCaptchaOperData(req, cb) {
        let resp = new DescribeCaptchaOperDataResponse();
        this.request("DescribeCaptchaOperData", req, resp, cb);
    }

    /**
     * 查询安全验证码应用APPId信息
     * @param {DescribeCaptchaAppIdInfoRequest} req
     * @param {function(string, DescribeCaptchaAppIdInfoResponse):void} cb
     * @public
     */
    DescribeCaptchaAppIdInfo(req, cb) {
        let resp = new DescribeCaptchaAppIdInfoResponse();
        this.request("DescribeCaptchaAppIdInfo", req, resp, cb);
    }

    /**
     * 安全验证码分类查询数据接口，请求量type=0、验证量type=1、通过量type=2、拦截量type=3  分钟级查询
     * @param {DescribeCaptchaDataRequest} req
     * @param {function(string, DescribeCaptchaDataResponse):void} cb
     * @public
     */
    DescribeCaptchaData(req, cb) {
        let resp = new DescribeCaptchaDataResponse();
        this.request("DescribeCaptchaData", req, resp, cb);
    }

    /**
     * 更新验证码应用APPId信息
     * @param {UpdateCaptchaAppIdInfoRequest} req
     * @param {function(string, UpdateCaptchaAppIdInfoResponse):void} cb
     * @public
     */
    UpdateCaptchaAppIdInfo(req, cb) {
        let resp = new UpdateCaptchaAppIdInfoResponse();
        this.request("UpdateCaptchaAppIdInfo", req, resp, cb);
    }

    /**
     * 核查验证码票据结果
     * @param {DescribeCaptchaResultRequest} req
     * @param {function(string, DescribeCaptchaResultResponse):void} cb
     * @public
     */
    DescribeCaptchaResult(req, cb) {
        let resp = new DescribeCaptchaResultResponse();
        this.request("DescribeCaptchaResult", req, resp, cb);
    }


}
module.exports = CaptchaClient;
