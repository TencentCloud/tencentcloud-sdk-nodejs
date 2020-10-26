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
 * sslpod client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(clientConfig) {
        super("sslpod.tencentcloudapi.com", "2019-06-05", clientConfig);
    }
    /**
     * 获取通知额度信息
     */
    async DescribeNoticeInfo(req, cb) {
        return this.request("DescribeNoticeInfo", req, cb);
    }
    /**
     * 强制重新检测域名
     */
    async RefreshDomain(req, cb) {
        return this.request("RefreshDomain", req, cb);
    }
    /**
     * 修改域名tag
     */
    async ModifyDomainTags(req, cb) {
        return this.request("ModifyDomainTags", req, cb);
    }
    /**
     * 获取账号下所有tag
     */
    async DescribeDomainTags(req, cb) {
        return this.request("DescribeDomainTags", req, cb);
    }
    /**
     * 获取域名关联证书
     */
    async DescribeDomainCerts(req, cb) {
        return this.request("DescribeDomainCerts", req, cb);
    }
    /**
     * 获取仪表盘数据
     */
    async DescribeDashboard(req, cb) {
        return this.request("DescribeDashboard", req, cb);
    }
    /**
     * 通过searchType搜索已经添加的域名
     */
    async DescribeDomains(req, cb) {
        return this.request("DescribeDomains", req, cb);
    }
    /**
     * 通过域名ID删除监控的域名
     */
    async DeleteDomain(req, cb) {
        return this.request("DeleteDomain", req, cb);
    }
    /**
     * 通过域名端口添加监控
     */
    async CreateDomain(req, cb) {
        return this.request("CreateDomain", req, cb);
    }
    /**
     * 解析域名获得多个IP地址
     */
    async ResolveDomain(req, cb) {
        return this.request("ResolveDomain", req, cb);
    }
}
exports.Client = Client;
