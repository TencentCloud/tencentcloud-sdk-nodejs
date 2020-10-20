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
 * cis client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(clientConfig) {
        super("cis.tencentcloudapi.com", "2018-04-08", clientConfig);
    }
    /**
     * 此接口（DescribeContainerInstances）查询容器实例列表
     */
    async DescribeContainerInstances(req, cb) {
        return this.request("DescribeContainerInstances", req, cb);
    }
    /**
     * 此接口（CreateContainerInstance）用于创建容器实例
     */
    async CreateContainerInstance(req, cb) {
        return this.request("CreateContainerInstance", req, cb);
    }
    /**
     * 此接口（InquiryPriceCreateCis）用于查询容器实例价格
     */
    async InquiryPriceCreateCis(req, cb) {
        return this.request("InquiryPriceCreateCis", req, cb);
    }
    /**
     * 此接口（DescribeContainerInstance）用于获取容器实例详情
     */
    async DescribeContainerInstance(req, cb) {
        return this.request("DescribeContainerInstance", req, cb);
    }
    /**
     * 此接口（DescribeContainerInstanceEvents）用于查询容器实例事件列表
     */
    async DescribeContainerInstanceEvents(req, cb) {
        return this.request("DescribeContainerInstanceEvents", req, cb);
    }
    /**
     * 此接口（DeleteContainerInstance）用于删除容器实例
     */
    async DeleteContainerInstance(req, cb) {
        return this.request("DeleteContainerInstance", req, cb);
    }
    /**
     * 此接口（DescribeContainerLog）用于获取容器日志信息
     */
    async DescribeContainerLog(req, cb) {
        return this.request("DescribeContainerLog", req, cb);
    }
}
exports.Client = Client;
