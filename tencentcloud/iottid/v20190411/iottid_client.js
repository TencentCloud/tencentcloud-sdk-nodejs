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
const DescribePermissionRequest = models.DescribePermissionRequest;
const DeliverTidsResponse = models.DeliverTidsResponse;
const BurnTidNotifyResponse = models.BurnTidNotifyResponse;
const DownloadTidsResponse = models.DownloadTidsResponse;
const DeliverTidNotifyResponse = models.DeliverTidNotifyResponse;
const BurnTidNotifyRequest = models.BurnTidNotifyRequest;
const DeliverTidsRequest = models.DeliverTidsRequest;
const DeliverTidNotifyRequest = models.DeliverTidNotifyRequest;
const TidKeysInfo = models.TidKeysInfo;
const DescribePermissionResponse = models.DescribePermissionResponse;
const DownloadTidsRequest = models.DownloadTidsRequest;


/**
 * iottid client
 * @class
 */
class IottidClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("iottid.tencentcloudapi.com", "2019-04-11", credential, region, profile);
    }
    
    /**
     * 查询企业用户TID平台控制台权限
     * @param {DescribePermissionRequest} req
     * @param {function(string, DescribePermissionResponse):void} cb
     * @public
     */
    DescribePermission(req, cb) {
        let resp = new DescribePermissionResponse();
        this.request("DescribePermission", req, resp, cb);
    }

    /**
     * 设备服务商请求空发产品订单的TID信息
     * @param {DeliverTidsRequest} req
     * @param {function(string, DeliverTidsResponse):void} cb
     * @public
     */
    DeliverTids(req, cb) {
        let resp = new DeliverTidsResponse();
        this.request("DeliverTids", req, resp, cb);
    }

    /**
     * 安全芯片TID烧录回执
     * @param {BurnTidNotifyRequest} req
     * @param {function(string, BurnTidNotifyResponse):void} cb
     * @public
     */
    BurnTidNotify(req, cb) {
        let resp = new BurnTidNotifyResponse();
        this.request("BurnTidNotify", req, resp, cb);
    }

    /**
     * 安全芯片为载体的TID空发回执，绑定TID与订单号。
     * @param {DeliverTidNotifyRequest} req
     * @param {function(string, DeliverTidNotifyResponse):void} cb
     * @public
     */
    DeliverTidNotify(req, cb) {
        let resp = new DeliverTidNotifyResponse();
        this.request("DeliverTidNotify", req, resp, cb);
    }

    /**
     * 下载芯片订单的TID
     * @param {DownloadTidsRequest} req
     * @param {function(string, DownloadTidsResponse):void} cb
     * @public
     */
    DownloadTids(req, cb) {
        let resp = new DownloadTidsResponse();
        this.request("DownloadTids", req, resp, cb);
    }


}
module.exports = IottidClient;
