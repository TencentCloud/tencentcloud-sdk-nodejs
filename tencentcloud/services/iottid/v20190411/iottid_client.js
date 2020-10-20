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
 * iottid client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(clientConfig) {
        super("iottid.tencentcloudapi.com", "2019-04-11", clientConfig);
    }
    /**
     * 单向认证测试TID
     */
    async AuthTestTid(req, cb) {
        return this.request("AuthTestTid", req, cb);
    }
    /**
     * 上传硬件唯一标识码，是软加固设备身份参数。本接口如遇到错误数据，则所有当次上传数据失效。
     */
    async UploadDeviceUniqueCode(req, cb) {
        return this.request("UploadDeviceUniqueCode", req, cb);
    }
    /**
     * 下载控制台验证芯片烧录信息，保证TID与中心信息一致
     */
    async VerifyChipBurnInfo(req, cb) {
        return this.request("VerifyChipBurnInfo", req, cb);
    }
    /**
     * 设备服务商请求空发产品订单的TID信息
     */
    async DeliverTids(req, cb) {
        return this.request("DeliverTids", req, cb);
    }
    /**
     * 安全芯片TID烧录回执
     */
    async BurnTidNotify(req, cb) {
        return this.request("BurnTidNotify", req, cb);
    }
    /**
     * 查询企业用户TID平台控制台权限
     */
    async DescribePermission(req, cb) {
        return this.request("DescribePermission", req, cb);
    }
    /**
     * 安全芯片为载体的TID空发回执，绑定TID与订单号。
     */
    async DeliverTidNotify(req, cb) {
        return this.request("DeliverTidNotify", req, cb);
    }
    /**
     * 下载芯片订单的TID
     */
    async DownloadTids(req, cb) {
        return this.request("DownloadTids", req, cb);
    }
    /**
     * 查询指定订单的可空发的白盒密钥数量
     */
    async DescribeAvailableLibCount(req, cb) {
        return this.request("DescribeAvailableLibCount", req, cb);
    }
}
exports.Client = Client;
