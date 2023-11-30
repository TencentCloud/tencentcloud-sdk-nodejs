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
 * captcha client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(clientConfig) {
        super("captcha.tencentcloudapi.com", "2019-07-22", clientConfig);
    }
    /**
     * Rce融合验证核查验证码票据结果(Web及APP)
     */
    async DescribeCaptchaRceResult(req, cb) {
        return this.request("DescribeCaptchaRceResult", req, cb);
    }
    /**
     * 核查验证码小程序插件票据接入风控结果(已停用)
     */
    async DescribeCaptchaMiniRiskResult(req, cb) {
        return this.request("DescribeCaptchaMiniRiskResult", req, cb);
    }
    /**
     * 安全验证码用户操作票据数据查询
     */
    async DescribeCaptchaTicketData(req, cb) {
        return this.request("DescribeCaptchaTicketData", req, cb);
    }
    /**
     * 查询全部验证的统计数据，包括：总请求量、总验证量、总验证通过量、总验证拦截量等数据。
     */
    async GetTotalRequestStatistics(req, cb) {
        return this.request("GetTotalRequestStatistics", req, cb);
    }
    /**
     * 安全验证码查询请求数据概况，例如：按照时间段查询数据  昨日请求量、昨日恶意比例、昨日验证量、昨日通过量、昨日恶意拦截量……
     */
    async DescribeCaptchaDataSum(req, cb) {
        return this.request("DescribeCaptchaDataSum", req, cb);
    }
    /**
     * 安全验证码用户操作数据查询，验证码加载耗时type = 1 、拦截情况type = 2、 一周通过平均尝试次数 type = 3、尝试次数分布 type = 4
     */
    async DescribeCaptchaOperData(req, cb) {
        return this.request("DescribeCaptchaOperData", req, cb);
    }
    /**
     * 安全验证码小程序插件分类查询数据接口，请求量type=0、通过量type=1、验证量type=2、拦截量type=3 小时级查询（五小时左右延迟）
     */
    async DescribeCaptchaMiniData(req, cb) {
        return this.request("DescribeCaptchaMiniData", req, cb);
    }
    /**
     * 安全验证码小程序插件用户操作数据查询
     */
    async DescribeCaptchaMiniOperData(req, cb) {
        return this.request("DescribeCaptchaMiniOperData", req, cb);
    }
    /**
     * 安全验证码分类查询数据接口，请求量type=0、通过量type=1、验证量type=2、拦截量type=3  分钟级查询
     */
    async DescribeCaptchaData(req, cb) {
        return this.request("DescribeCaptchaData", req, cb);
    }
    /**
     * 安全验证码小程序插件查询请求数据概况
     */
    async DescribeCaptchaMiniDataSum(req, cb) {
        return this.request("DescribeCaptchaMiniDataSum", req, cb);
    }
    /**
     * 查询单个CaptchaAppID票据校验数据，包括：票据校验量、票据校验通过量、票据校验拦截量。
     */
    async GetTicketStatistics(req, cb) {
        return this.request("GetTicketStatistics", req, cb);
    }
    /**
     * 核查验证码票据结果(小程序插件)
     */
    async DescribeCaptchaMiniResult(req, cb) {
        return this.request("DescribeCaptchaMiniResult", req, cb);
    }
    /**
     * 更新验证码应用APPId信息
     */
    async UpdateCaptchaAppIdInfo(req, cb) {
        return this.request("UpdateCaptchaAppIdInfo", req, cb);
    }
    /**
     * 查询全部票据校验的统计数据，包括：总票据校验量、总票据校验通过量、总票据校验拦截量。
     */
    async GetTotalTicketStatistics(req, cb) {
        return this.request("GetTotalTicketStatistics", req, cb);
    }
    /**
     * 安全验证码获取用户注册所有APPId和应用名称
     */
    async DescribeCaptchaUserAllAppId(req, cb) {
        return this.request("DescribeCaptchaUserAllAppId", req, cb);
    }
    /**
     * 查询单个CaptchaAppID验证的统计数据，包括：请求量、验证量、验证通过量、验证拦截量。
     */
    async GetRequestStatistics(req, cb) {
        return this.request("GetRequestStatistics", req, cb);
    }
    /**
     * 查询安全验证码应用APPId信息
     */
    async DescribeCaptchaAppIdInfo(req, cb) {
        return this.request("DescribeCaptchaAppIdInfo", req, cb);
    }
    /**
     * 核查验证码票据结果(Web及APP)
     */
    async DescribeCaptchaResult(req, cb) {
        return this.request("DescribeCaptchaResult", req, cb);
    }
}
exports.Client = Client;
