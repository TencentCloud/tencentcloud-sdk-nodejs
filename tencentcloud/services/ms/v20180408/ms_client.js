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
     * 由于该产品是线上免费使用产品，无企业版用户，升级迭代成本高及人力安排等原因，安全测评产品不再接入新用户，故下线。

用户通过该接口批量提交应用进行应用扫描，扫描后需通过DescribeScanResults接口查询扫描结果
     */
    async CreateScanInstances(req, cb) {
        return this.request("CreateScanInstances", req, cb);
    }
    /**
     * 通过唯一标识获取加固的结果。（注意：根据国家互联网用户实名制相关要求，使用该产品前，需先完成实名认证。）
     */
    async DescribeShieldResult(req, cb) {
        return this.request("DescribeShieldResult", req, cb);
    }
    /**
     * 由于该产品是线上免费使用产品，无企业版用户，升级迭代成本高及人力安排等原因，安全测评产品不再接入新用户，故下线。

删除一个或者多个app扫描信息
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
     * 将应用和资源进行绑定。（注意：根据国家互联网用户实名制相关要求，使用该产品前，需先完成实名认证。）
     */
    async CreateBindInstance(req, cb) {
        return this.request("CreateBindInstance", req, cb);
    }
    /**
     * 获取云COS文件存储临时密钥，密钥仅限于临时上传文件，有访问限制和时效性，请保管好临时密钥。
     */
    async CreateCosSecKeyInstance(req, cb) {
        return this.request("CreateCosSecKeyInstance", req, cb);
    }
    /**
     * 获取某个用户的所有资源信息。（注意：根据国家互联网用户实名制相关要求，使用该产品前，需先完成实名认证。）
     */
    async DescribeResourceInstances(req, cb) {
        return this.request("DescribeResourceInstances", req, cb);
    }
    /**
     * 由于该产品是线上免费使用产品，无企业版用户，升级迭代成本高及人力安排等原因，安全测评产品不再接入新用户，故下线。

用户通过CreateScanInstances接口提交应用进行风险批量扫描后，用此接口批量获取风险详细信息,包含漏洞信息，广告信息，插件信息和病毒信息
     */
    async DescribeScanResults(req, cb) {
        return this.request("DescribeScanResults", req, cb);
    }
    /**
     * 查询加固策略。（注意：根据国家互联网用户实名制相关要求，使用该产品前，需先完成实名认证。）
     */
    async DescribeShieldPlanInstance(req, cb) {
        return this.request("DescribeShieldPlanInstance", req, cb);
    }
    /**
     * 用户通过该接口提交应用进行应用加固，加固后需通过DescribeShieldResult接口查询加固结果。（注意：根据国家互联网用户实名制相关要求，使用该产品前，需先完成实名认证。）
     */
    async CreateShieldInstance(req, cb) {
        return this.request("CreateShieldInstance", req, cb);
    }
    /**
     * 本接口用于查看app列表。
可以通过指定任务唯一标识ItemId来查询指定app的详细信息，或通过设定过滤器来查询满足过滤条件的app的详细信息。 指定偏移(Offset)和限制(Limit)来选择结果中的一部分，默认返回满足条件的前20个app信息。（注意：根据国家互联网用户实名制相关要求，使用该产品前，需先完成实名认证。）

     */
    async DescribeShieldInstances(req, cb) {
        return this.request("DescribeShieldInstances", req, cb);
    }
    /**
     * 由于该产品是线上免费使用产品，无企业版用户，升级迭代成本高及人力安排等原因，安全测评产品不再接入新用户，故下线。

本接口用于查看app列表。
可以通过指定任务唯一标识ItemId来查询指定app的详细信息，或通过设定过滤器来查询满足过滤条件的app的详细信息。 指定偏移(Offset)和限制(Limit)来选择结果中的一部分，默认返回满足条件的前20个app信息。
     */
    async DescribeScanInstances(req, cb) {
        return this.request("DescribeScanInstances", req, cb);
    }
    /**
     * 移动安全-网址检测服务
     */
    async DescribeUrlDetectionResult(req, cb) {
        return this.request("DescribeUrlDetectionResult", req, cb);
    }
    /**
     * 对资源进行策略新增。（注意：根据国家互联网用户实名制相关要求，使用该产品前，需先完成实名认证。）
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
     * 该接口采用同步模式请求腾讯APK云检测服务，即时返回检测数据，需要用户用轮询的方式调用本接口来进行样本送检并获取检测结果(每隔60s发送一次请求，传相同的参数，重试30次)，一般情况下0.5h内会出检测结果，最长时间是3h。当Result为ok并且ResultList数组非空有值时，代表检测完毕，若长时间获取不到检测结果，请联系客服。
     */
    async DescribeApkDetectionResult(req, cb) {
        return this.request("DescribeApkDetectionResult", req, cb);
    }
    /**
     * 删除一个或者多个app加固信息。（注意：根据国家互联网用户实名制相关要求，使用该产品前，需先完成实名认证。）
     */
    async DeleteShieldInstances(req, cb) {
        return this.request("DeleteShieldInstances", req, cb);
    }
}
exports.Client = Client;
