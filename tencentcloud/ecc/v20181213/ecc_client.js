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
const DescribeTaskRequest = models.DescribeTaskRequest;
const SentenceItem = models.SentenceItem;
const ECCResponse = models.ECCResponse;
const EHOCRResponse = models.EHOCRResponse;
const ErrorCoordinate = models.ErrorCoordinate;
const ECCRequest = models.ECCRequest;
const SentenceCom = models.SentenceCom;
const SentenceSuggest = models.SentenceSuggest;
const CorrectData = models.CorrectData;
const ScoreCategory = models.ScoreCategory;
const Aspect = models.Aspect;
const CompostionContext = models.CompostionContext;
const DescribeTaskResponse = models.DescribeTaskResponse;
const EHOCRRequest = models.EHOCRRequest;


/**
 * ecc client
 * @class
 */
class EccClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("ecc.tencentcloudapi.com", "2018-12-13", credential, region, profile);
    }
    
    /**
     * https://ecc.tencentcloudapi.com/?Action=EHOCR
图像识别批改接口
     * @param {EHOCRRequest} req
     * @param {function(string, EHOCRResponse):void} cb
     * @public
     */
    EHOCR(req, cb) {
        let resp = new EHOCRResponse();
        this.request("EHOCR", req, resp, cb);
    }

    /**
     * 接口请求域名： ecc.tencentcloudapi.com 
纯文本英语作文批改
     * @param {ECCRequest} req
     * @param {function(string, ECCResponse):void} cb
     * @public
     */
    ECC(req, cb) {
        let resp = new ECCResponse();
        this.request("ECC", req, resp, cb);
    }

    /**
     * 异步任务结果查询接口
     * @param {DescribeTaskRequest} req
     * @param {function(string, DescribeTaskResponse):void} cb
     * @public
     */
    DescribeTask(req, cb) {
        let resp = new DescribeTaskResponse();
        this.request("DescribeTask", req, resp, cb);
    }


}
module.exports = EccClient;
