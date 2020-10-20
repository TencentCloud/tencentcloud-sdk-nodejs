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
 * tics client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(clientConfig) {
        super("tics.tencentcloudapi.com", "2018-11-15", clientConfig);
    }
    /**
     * 提供文件相关的基础信息以及与攻击事件（团伙、家族）、恶意文件等相关联信息。
     */
    async DescribeFileInfo(req, cb) {
        return this.request("DescribeFileInfo", req, cb);
    }
    /**
     * 提供IP相关的基础信息以及与攻击事件（团伙、家族）、恶意文件等相关联信息。
     */
    async DescribeIpInfo(req, cb) {
        return this.request("DescribeIpInfo", req, cb);
    }
    /**
     * 提供域名相关的基础信息以及与攻击事件（团伙、家族）、恶意文件等相关联信息。
     */
    async DescribeDomainInfo(req, cb) {
        return this.request("DescribeDomainInfo", req, cb);
    }
    /**
     * 提供IP和域名相关威胁情报信息查询，这些信息可以辅助检测失陷主机、帮助SIEM/SOC等系统做研判决策、帮助运营团队对设备报警的编排处理。
     */
    async DescribeThreatInfo(req, cb) {
        return this.request("DescribeThreatInfo", req, cb);
    }
}
exports.Client = Client;
