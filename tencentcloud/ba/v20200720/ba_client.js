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
const DescribeGetAuthInfoResponse = models.DescribeGetAuthInfoResponse;
const SyncIcpOrderWebInfoResponse = models.SyncIcpOrderWebInfoResponse;
const SyncIcpOrderWebInfoRequest = models.SyncIcpOrderWebInfoRequest;
const CreateWeappQRUrlRequest = models.CreateWeappQRUrlRequest;
const CreateWeappQRUrlResponse = models.CreateWeappQRUrlResponse;
const DescribeGetAuthInfoRequest = models.DescribeGetAuthInfoRequest;


/**
 * ba client
 * @class
 */
class BaClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("ba.tencentcloudapi.com", "2020-07-20", credential, region, profile);
    }
    
    /**
     * 将备案ICP订单下的一个网站信息 同步给订单下其他网站，需要被同步的网站被检查通过(isCheck:true)；
只有指定的网站信息字段能被同步
     * @param {SyncIcpOrderWebInfoRequest} req
     * @param {function(string, SyncIcpOrderWebInfoResponse):void} cb
     * @public
     */
    SyncIcpOrderWebInfo(req, cb) {
        let resp = new SyncIcpOrderWebInfoResponse();
        this.request("SyncIcpOrderWebInfo", req, resp, cb);
    }

    /**
     * 创建渠道备案小程序二维码
     * @param {CreateWeappQRUrlRequest} req
     * @param {function(string, CreateWeappQRUrlResponse):void} cb
     * @public
     */
    CreateWeappQRUrl(req, cb) {
        let resp = new CreateWeappQRUrlResponse();
        this.request("CreateWeappQRUrl", req, resp, cb);
    }

    /**
     * 获取实名认证信息
     * @param {DescribeGetAuthInfoRequest} req
     * @param {function(string, DescribeGetAuthInfoResponse):void} cb
     * @public
     */
    DescribeGetAuthInfo(req, cb) {
        let resp = new DescribeGetAuthInfoResponse();
        this.request("DescribeGetAuthInfo", req, resp, cb);
    }


}
module.exports = BaClient;
