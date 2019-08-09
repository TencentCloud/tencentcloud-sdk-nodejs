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
