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
const DescribeSmpnChpRequest = models.DescribeSmpnChpRequest;
const EPARequest = models.EPARequest;
const MHMRequest = models.MHMRequest;
const MRLRequest = models.MRLRequest;
const CreateSmpnEpaResponse = models.CreateSmpnEpaResponse;
const DescribeSmpnFnrResponse = models.DescribeSmpnFnrResponse;
const DescribeSmpnMhmResponse = models.DescribeSmpnMhmResponse;
const DescribeSmpnFnrRequest = models.DescribeSmpnFnrRequest;
const DescribeSmpnMrlRequest = models.DescribeSmpnMrlRequest;
const CHPRequest = models.CHPRequest;
const MRLResponse = models.MRLResponse;
const DescribeSmpnMrlResponse = models.DescribeSmpnMrlResponse;
const DescribeSmpnMhmRequest = models.DescribeSmpnMhmRequest;
const MHMResponse = models.MHMResponse;
const CreateSmpnEpaRequest = models.CreateSmpnEpaRequest;
const EPAResponse = models.EPAResponse;
const FNRResponse = models.FNRResponse;
const CHPResponse = models.CHPResponse;
const DescribeSmpnChpResponse = models.DescribeSmpnChpResponse;
const FNRRequest = models.FNRRequest;


/**
 * smpn client
 * @class
 */
class SmpnClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("smpn.tencentcloudapi.com", "2019-08-22", credential, region, profile);
    }
    
    /**
     * 号码营销监控
     * @param {DescribeSmpnMhmRequest} req
     * @param {function(string, DescribeSmpnMhmResponse):void} cb
     * @public
     */
    DescribeSmpnMhm(req, cb) {
        let resp = new DescribeSmpnMhmResponse();
        this.request("DescribeSmpnMhm", req, resp, cb);
    }

    /**
     * 虚假号码识别
     * @param {DescribeSmpnFnrRequest} req
     * @param {function(string, DescribeSmpnFnrResponse):void} cb
     * @public
     */
    DescribeSmpnFnr(req, cb) {
        let resp = new DescribeSmpnFnrResponse();
        this.request("DescribeSmpnFnr", req, resp, cb);
    }

    /**
     * 企业号码认证
     * @param {CreateSmpnEpaRequest} req
     * @param {function(string, CreateSmpnEpaResponse):void} cb
     * @public
     */
    CreateSmpnEpa(req, cb) {
        let resp = new CreateSmpnEpaResponse();
        this.request("CreateSmpnEpa", req, resp, cb);
    }

    /**
     * 查询号码的标记和标记次数
     * @param {DescribeSmpnChpRequest} req
     * @param {function(string, DescribeSmpnChpResponse):void} cb
     * @public
     */
    DescribeSmpnChp(req, cb) {
        let resp = new DescribeSmpnChpResponse();
        this.request("DescribeSmpnChp", req, resp, cb);
    }

    /**
     * 查询号码恶意标记等级
     * @param {DescribeSmpnMrlRequest} req
     * @param {function(string, DescribeSmpnMrlResponse):void} cb
     * @public
     */
    DescribeSmpnMrl(req, cb) {
        let resp = new DescribeSmpnMrlResponse();
        this.request("DescribeSmpnMrl", req, resp, cb);
    }


}
module.exports = SmpnClient;
