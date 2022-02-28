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
 * cloudaudit client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(clientConfig) {
        super("cloudaudit.tencentcloudapi.com", "2019-03-19", clientConfig);
    }
    /**
     * 修改云审计跟踪
     */
    async ModifyAuditTrack(req, cb) {
        return this.request("ModifyAuditTrack", req, cb);
    }
    /**
     * 开启跟踪集
     */
    async StartLogging(req, cb) {
        return this.request("StartLogging", req, cb);
    }
    /**
     * 查询云审计支持的cos可用区
     */
    async ListCosEnableRegion(req, cb) {
        return this.request("ListCosEnableRegion", req, cb);
    }
    /**
     * 查询AttributeKey的有效取值范围
     */
    async GetAttributeKey(req, cb) {
        return this.request("GetAttributeKey", req, cb);
    }
    /**
     * 创建跟踪集
     */
    async CreateAuditTrack(req, cb) {
        return this.request("CreateAuditTrack", req, cb);
    }
    /**
     * 查询云审计支持的cmq的可用区
     */
    async ListCmqEnableRegion(req, cb) {
        return this.request("ListCmqEnableRegion", req, cb);
    }
    /**
     * 删除跟踪集
     */
    async DeleteAudit(req, cb) {
        return this.request("DeleteAudit", req, cb);
    }
    /**
     * 查询云审计日志
     */
    async DescribeEvents(req, cb) {
        return this.request("DescribeEvents", req, cb);
    }
    /**
     * 关闭跟踪集
     */
    async StopLogging(req, cb) {
        return this.request("StopLogging", req, cb);
    }
    /**
     * 查询云审计跟踪集列表
     */
    async DescribeAuditTracks(req, cb) {
        return this.request("DescribeAuditTracks", req, cb);
    }
    /**
     * 查询用户可创建跟踪集的数量
     */
    async InquireAuditCredit(req, cb) {
        return this.request("InquireAuditCredit", req, cb);
    }
    /**
     * 参数要求：
1、如果IsCreateNewBucket的值存在的话，cosRegion和cosBucketName都是必填参数。
2、如果IsEnableCmqNotify的值是1的话，IsCreateNewQueue、CmqRegion和CmqQueueName都是必填参数。
3、如果IsEnableCmqNotify的值是0的话，IsCreateNewQueue、CmqRegion和CmqQueueName都不能传。
4、如果IsEnableKmsEncry的值是1的话，KmsRegion和KeyId属于必填项
     */
    async UpdateAudit(req, cb) {
        return this.request("UpdateAudit", req, cb);
    }
    /**
     * 根据地域获取KMS密钥别名
     */
    async ListKeyAliasByRegion(req, cb) {
        return this.request("ListKeyAliasByRegion", req, cb);
    }
    /**
     * 查询跟踪集详情
     */
    async DescribeAudit(req, cb) {
        return this.request("DescribeAudit", req, cb);
    }
    /**
     * 参数要求：
1、如果IsCreateNewBucket的值存在的话，cosRegion和cosBucketName都是必填参数。
2、如果IsEnableCmqNotify的值是1的话，IsCreateNewQueue、CmqRegion和CmqQueueName都是必填参数。
3、如果IsEnableCmqNotify的值是0的话，IsCreateNewQueue、CmqRegion和CmqQueueName都不能传。
4、如果IsEnableKmsEncry的值是1的话，KmsRegion和KeyId属于必填项
     */
    async CreateAudit(req, cb) {
        return this.request("CreateAudit", req, cb);
    }
    /**
     * 删除云审计跟踪集
     */
    async DeleteAuditTrack(req, cb) {
        return this.request("DeleteAuditTrack", req, cb);
    }
    /**
     * 用于对操作日志进行检索，便于用户进行查询相关的操作信息。
     */
    async LookUpEvents(req, cb) {
        return this.request("LookUpEvents", req, cb);
    }
    /**
     * 查询跟踪集概要
     */
    async ListAudits(req, cb) {
        return this.request("ListAudits", req, cb);
    }
}
exports.Client = Client;
