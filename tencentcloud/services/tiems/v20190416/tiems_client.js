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
 * tiems client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(clientConfig) {
        super("tiems.tencentcloudapi.com", "2019-04-16", clientConfig);
    }
    /**
     * 因业务策略调整，腾讯云TI平台TI-EMS已经于2022年6月30日下线并停止提供服务。若您有新增的业务需求，可前往TI-ONE(https://cloud.tencent.com/document/product/851)使用。

创建服务
     */
    async CreateService(req, cb) {
        return this.request("CreateService", req, cb);
    }
    /**
     * 因业务策略调整，腾讯云TI平台TI-EMS已经于2022年6月30日下线并停止提供服务。若您有新增的业务需求，可前往TI-ONE(https://cloud.tencent.com/document/product/851)使用。

创建服务配置
     */
    async CreateServiceConfig(req, cb) {
        return this.request("CreateServiceConfig", req, cb);
    }
    /**
     * 因业务策略调整，腾讯云TI平台TI-EMS已经于2022年6月30日下线并停止提供服务。若您有新增的业务需求，可前往TI-ONE(https://cloud.tencent.com/document/product/851)使用。

创建资源组的伸缩组。当前一个资源组仅允许创建一个伸缩组。
     */
    async CreateRsgAsGroup(req, cb) {
        return this.request("CreateRsgAsGroup", req, cb);
    }
    /**
     * 因业务策略调整，腾讯云TI平台TI-EMS已经于2022年6月30日下线并停止提供服务。若您有新增的业务需求，可前往TI-ONE(https://cloud.tencent.com/document/product/851)使用。

删除资源组中的节点。目前仅支持删除已经到期的预付费节点，和按量付费节点。
     */
    async DeleteInstance(req, cb) {
        return this.request("DeleteInstance", req, cb);
    }
    /**
     * 因业务策略调整，腾讯云TI平台TI-EMS已经于2022年6月30日下线并停止提供服务。若您有新增的业务需求，可前往TI-ONE(https://cloud.tencent.com/document/product/851)使用。

删除服务
     */
    async DeleteService(req, cb) {
        return this.request("DeleteService", req, cb);
    }
    /**
     * 因业务策略调整，腾讯云TI平台TI-EMS已经于2022年6月30日下线并停止提供服务。若您有新增的业务需求，可前往TI-ONE(https://cloud.tencent.com/document/product/851)使用。

创建任务
     */
    async CreateJob(req, cb) {
        return this.request("CreateJob", req, cb);
    }
    /**
     * 因业务策略调整，腾讯云TI平台TI-EMS已经于2022年6月30日下线并停止提供服务。若您有新增的业务需求，可前往TI-ONE(https://cloud.tencent.com/document/product/851)使用。

更新资源组的伸缩组
     */
    async UpdateRsgAsGroup(req, cb) {
        return this.request("UpdateRsgAsGroup", req, cb);
    }
    /**
     * 因业务策略调整，腾讯云TI平台TI-EMS已经于2022年6月30日下线并停止提供服务。若您有新增的业务需求，可前往TI-ONE(https://cloud.tencent.com/document/product/851)使用。

描述服务
     */
    async DescribeServices(req, cb) {
        return this.request("DescribeServices", req, cb);
    }
    /**
     * 因业务策略调整，腾讯云TI平台TI-EMS已经于2022年6月30日下线并停止提供服务。若您有新增的业务需求，可前往TI-ONE(https://cloud.tencent.com/document/product/851)使用。

停用资源组的伸缩组
     */
    async DisableRsgAsGroup(req, cb) {
        return this.request("DisableRsgAsGroup", req, cb);
    }
    /**
     * 因业务策略调整，腾讯云TI平台TI-EMS已经于2022年6月30日下线并停止提供服务。若您有新增的业务需求，可前往TI-ONE(https://cloud.tencent.com/document/product/851)使用。

更新服务
     */
    async UpdateService(req, cb) {
        return this.request("UpdateService", req, cb);
    }
    /**
     * 因业务策略调整，腾讯云TI平台TI-EMS已经于2022年6月30日下线并停止提供服务。若您有新增的业务需求，可前往TI-ONE(https://cloud.tencent.com/document/product/851)使用。

创建运行环境
     */
    async CreateRuntime(req, cb) {
        return this.request("CreateRuntime", req, cb);
    }
    /**
     * 因业务策略调整，腾讯云TI平台TI-EMS已经于2022年6月30日下线并停止提供服务。若您有新增的业务需求，可前往TI-ONE(https://cloud.tencent.com/document/product/851)使用。

删除服务配置
     */
    async DeleteServiceConfig(req, cb) {
        return this.request("DeleteServiceConfig", req, cb);
    }
    /**
     * 因业务策略调整，腾讯云TI平台TI-EMS已经于2022年6月30日下线并停止提供服务。若您有新增的业务需求，可前往TI-ONE(https://cloud.tencent.com/document/product/851)使用。

获取节点列表
     */
    async DescribeInstances(req, cb) {
        return this.request("DescribeInstances", req, cb);
    }
    /**
     * 因业务策略调整，腾讯云TI平台TI-EMS已经于2022年6月30日下线并停止提供服务。若您有新增的业务需求，可前往TI-ONE(https://cloud.tencent.com/document/product/851)使用。

查询伸缩组活动
     */
    async DescribeRsgAsGroupActivities(req, cb) {
        return this.request("DescribeRsgAsGroupActivities", req, cb);
    }
    /**
     * 因业务策略调整，腾讯云TI平台TI-EMS已经于2022年6月30日下线并停止提供服务。若您有新增的业务需求，可前往TI-ONE(https://cloud.tencent.com/document/product/851)使用。

描述服务运行环境
     */
    async DescribeRuntimes(req, cb) {
        return this.request("DescribeRuntimes", req, cb);
    }
    /**
     * 因业务策略调整，腾讯云TI平台TI-EMS已经于2022年6月30日下线并停止提供服务。若您有新增的业务需求，可前往TI-ONE(https://cloud.tencent.com/document/product/851)使用。

获取资源组列表
     */
    async DescribeResourceGroups(req, cb) {
        return this.request("DescribeResourceGroups", req, cb);
    }
    /**
     * 因业务策略调整，腾讯云TI平台TI-EMS已经于2022年6月30日下线并停止提供服务。若您有新增的业务需求，可前往TI-ONE(https://cloud.tencent.com/document/product/851)使用。

更新任务
     */
    async UpdateJob(req, cb) {
        return this.request("UpdateJob", req, cb);
    }
    /**
     * 因业务策略调整，腾讯云TI平台TI-EMS已经于2022年6月30日下线并停止提供服务。若您有新增的业务需求，可前往TI-ONE(https://cloud.tencent.com/document/product/851)使用。

伸缩
     */
    async DeleteRsgAsGroup(req, cb) {
        return this.request("DeleteRsgAsGroup", req, cb);
    }
    /**
     * 因业务策略调整，腾讯云TI平台TI-EMS已经于2022年6月30日下线并停止提供服务。若您有新增的业务需求，可前往TI-ONE(https://cloud.tencent.com/document/product/851)使用。

删除资源组
     */
    async DeleteResourceGroup(req, cb) {
        return this.request("DeleteResourceGroup", req, cb);
    }
    /**
     * 因业务策略调整，腾讯云TI平台TI-EMS已经于2022年6月30日下线并停止提供服务。若您有新增的业务需求，可前往TI-ONE(https://cloud.tencent.com/document/product/851)使用。

删除运行环境
     */
    async DeleteRuntime(req, cb) {
        return this.request("DeleteRuntime", req, cb);
    }
    /**
     * 因业务策略调整，腾讯云TI平台TI-EMS已经于2022年6月30日下线并停止提供服务。若您有新增的业务需求，可前往TI-ONE(https://cloud.tencent.com/document/product/851)使用。

暴露服务
     */
    async ExposeService(req, cb) {
        return this.request("ExposeService", req, cb);
    }
    /**
     * 因业务策略调整，腾讯云TI平台TI-EMS已经于2022年6月30日下线并停止提供服务。若您有新增的业务需求，可前往TI-ONE(https://cloud.tencent.com/document/product/851)使用。

删除任务
     */
    async DeleteJob(req, cb) {
        return this.request("DeleteJob", req, cb);
    }
    /**
     * 因业务策略调整，腾讯云TI平台TI-EMS已经于2022年6月30日下线并停止提供服务。若您有新增的业务需求，可前往TI-ONE(https://cloud.tencent.com/document/product/851)使用。

启用资源组的伸缩组
     */
    async EnableRsgAsGroup(req, cb) {
        return this.request("EnableRsgAsGroup", req, cb);
    }
    /**
     * 因业务策略调整，腾讯云TI平台TI-EMS已经于2022年6月30日下线并停止提供服务。若您有新增的业务需求，可前往TI-ONE(https://cloud.tencent.com/document/product/851)使用。

描述服务配置
     */
    async DescribeServiceConfigs(req, cb) {
        return this.request("DescribeServiceConfigs", req, cb);
    }
    /**
     * 因业务策略调整，腾讯云TI平台TI-EMS已经于2022年6月30日下线并停止提供服务。若您有新增的业务需求，可前往TI-ONE(https://cloud.tencent.com/document/product/851)使用。

查询资源组的伸缩组信息
     */
    async DescribeRsgAsGroups(req, cb) {
        return this.request("DescribeRsgAsGroups", req, cb);
    }
}
exports.Client = Client;
