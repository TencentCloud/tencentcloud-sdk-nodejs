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
 * ms client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(clientConfig) {
        super("ms.tencentcloudapi.com", "2018-04-08", clientConfig);
    }
    /**
     * 用户通过该接口批量提交应用进行应用扫描，扫描后需通过DescribeScanResults接口查询扫描结果
     */
    async CreateScanInstances(req, cb) {
        return this.request("CreateScanInstances", req, cb);
    }
    /**
     * 通过唯一标识获取加固的结果
     */
    async DescribeShieldResult(req, cb) {
        return this.request("DescribeShieldResult", req, cb);
    }
    /**
     * 删除一个或者多个app扫描信息
     */
    async DeleteScanInstances(req, cb) {
        return this.request("DeleteScanInstances", req, cb);
    }
    /**
     * 用户可以使用该接口自建资源，只支持白名单用户
     */
    async CreateResourceInstances(req, cb) {
        return this.request("CreateResourceInstances", req, cb);
    }
    /**
     * 将应用和资源进行绑定
     */
    async CreateBindInstance(req, cb) {
        return this.request("CreateBindInstance", req, cb);
    }
    /**
     * 获取云COS文件存储临时密钥，密钥仅限于临时上传文件，有访问限制和时效性。
     */
    async CreateCosSecKeyInstance(req, cb) {
        return this.request("CreateCosSecKeyInstance", req, cb);
    }
    /**
     * 获取某个用户的所有资源信息
     */
    async DescribeResourceInstances(req, cb) {
        return this.request("DescribeResourceInstances", req, cb);
    }
    /**
     * 用户通过CreateScanInstances接口提交应用进行风险批量扫描后，用此接口批量获取风险详细信息,包含漏洞信息，广告信息，插件信息和病毒信息
     */
    async DescribeScanResults(req, cb) {
        return this.request("DescribeScanResults", req, cb);
    }
    /**
     * 查询加固策略
     */
    async DescribeShieldPlanInstance(req, cb) {
        return this.request("DescribeShieldPlanInstance", req, cb);
    }
    /**
     * 用户通过该接口提交应用进行应用加固，加固后需通过DescribeShieldResult接口查询加固结果
     */
    async CreateShieldInstance(req, cb) {
        return this.request("CreateShieldInstance", req, cb);
    }
    /**
     * 本接口用于查看app列表。
可以通过指定任务唯一标识ItemId来查询指定app的详细信息，或通过设定过滤器来查询满足过滤条件的app的详细信息。 指定偏移(Offset)和限制(Limit)来选择结果中的一部分，默认返回满足条件的前20个app信息。

     */
    async DescribeShieldInstances(req, cb) {
        return this.request("DescribeShieldInstances", req, cb);
    }
    /**
     * 对资源进行策略新增
     */
    async CreateShieldPlanInstance(req, cb) {
        return this.request("CreateShieldPlanInstance", req, cb);
    }
    /**
     * 获取用户基础信息
     */
    async DescribeUserBaseInfoInstance(req, cb) {
        return this.request("DescribeUserBaseInfoInstance", req, cb);
    }
    /**
     * 本接口用于查看app列表。
可以通过指定任务唯一标识ItemId来查询指定app的详细信息，或通过设定过滤器来查询满足过滤条件的app的详细信息。 指定偏移(Offset)和限制(Limit)来选择结果中的一部分，默认返回满足条件的前20个app信息。
     */
    async DescribeScanInstances(req, cb) {
        return this.request("DescribeScanInstances", req, cb);
    }
    /**
     * 删除一个或者多个app加固信息
     */
    async DeleteShieldInstances(req, cb) {
        return this.request("DeleteShieldInstances", req, cb);
    }
}
exports.Client = Client;
