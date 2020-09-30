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
 * domain client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(clientConfig) {
        super("domain.tencentcloudapi.com", "2018-08-08", clientConfig);
    }
    /**
       * 本接口 (  DescribeDomainNameList ) 获取域名列表。
  
  默认接口请求频率限制：20次/秒。
  
       */
    async DescribeDomainNameList(req, cb) {
        return this.request("DescribeDomainNameList", req, cb);
    }
    /**
       * 本接口 ( CreateDomainBatch ) 用于批量注册域名 。
  
  默认接口请求频率限制：20次/秒。
       */
    async CreateDomainBatch(req, cb) {
        return this.request("CreateDomainBatch", req, cb);
    }
    /**
       * 本接口 (  DescribeDomainBaseInfo) 获取域名基础信息。
  
  默认接口请求频率限制：20次/秒。
  
       */
    async DescribeDomainBaseInfo(req, cb) {
        return this.request("DescribeDomainBaseInfo", req, cb);
    }
    /**
       * 本接口 (DescribeTemplateList) 用于获取模板列表。
  
  默认接口请求频率限制：20次/秒。
  
       */
    async DescribeTemplateList(req, cb) {
        return this.request("DescribeTemplateList", req, cb);
    }
    /**
     * 按照域名后缀获取对应的价格列表
     */
    async DescribeDomainPriceList(req, cb) {
        return this.request("DescribeDomainPriceList", req, cb);
    }
    /**
       * 本接口 ( CheckBatchStatus ) 用于检查批量任务状态 。
  
  默认接口请求频率限制：20次/秒。
       */
    async CheckBatchStatus(req, cb) {
        return this.request("CheckBatchStatus", req, cb);
    }
    /**
     * 检查域名是否可以注册。
     */
    async CheckDomain(req, cb) {
        return this.request("CheckDomain", req, cb);
    }
}
exports.Client = Client;
