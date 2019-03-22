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
const SendMultiSmsResponse = models.SendMultiSmsResponse;
const AppInfo = models.AppInfo;
const CardList = models.CardList;
const DescribeCardsResponse = models.DescribeCardsResponse;
const DescribeCardResponse = models.DescribeCardResponse;
const CardInfo = models.CardInfo;
const DescribeAppResponse = models.DescribeAppResponse;
const DescribeCardRequest = models.DescribeCardRequest;
const DescribeAppRequest = models.DescribeAppRequest;
const SendSmsResponse = models.SendSmsResponse;
const SendSmsRequest = models.SendSmsRequest;
const DescribeCardsRequest = models.DescribeCardsRequest;
const SendMultiSmsRequest = models.SendMultiSmsRequest;
const SmsRet = models.SmsRet;
const SmsSid = models.SmsSid;


/**
 * ic client
 * @class
 */
class IcClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("ic.tencentcloudapi.com", "2019-03-07", credential, region, profile);
    }
    
    /**
     * 发送短信息接口
     * @param {SendSmsRequest} req
     * @param {function(string, SendSmsResponse):void} cb
     * @public
     */
    SendSms(req, cb) {
        let resp = new SendSmsResponse();
        this.request("SendSms", req, resp, cb);
    }

    /**
     * 根据应用id查询物联卡应用详情
     * @param {DescribeAppRequest} req
     * @param {function(string, DescribeAppResponse):void} cb
     * @public
     */
    DescribeApp(req, cb) {
        let resp = new DescribeAppResponse();
        this.request("DescribeApp", req, resp, cb);
    }

    /**
     * 群发短信
     * @param {SendMultiSmsRequest} req
     * @param {function(string, SendMultiSmsResponse):void} cb
     * @public
     */
    SendMultiSms(req, cb) {
        let resp = new SendMultiSmsResponse();
        this.request("SendMultiSms", req, resp, cb);
    }

    /**
     * 查询卡片详细信息
     * @param {DescribeCardRequest} req
     * @param {function(string, DescribeCardResponse):void} cb
     * @public
     */
    DescribeCard(req, cb) {
        let resp = new DescribeCardResponse();
        this.request("DescribeCard", req, resp, cb);
    }

    /**
     * 查询卡片列表信息
     * @param {DescribeCardsRequest} req
     * @param {function(string, DescribeCardsResponse):void} cb
     * @public
     */
    DescribeCards(req, cb) {
        let resp = new DescribeCardsResponse();
        this.request("DescribeCards", req, resp, cb);
    }


}
module.exports = IcClient;
