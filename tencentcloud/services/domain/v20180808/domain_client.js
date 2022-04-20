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
     * 本接口 ( SetDomainAutoRenew ) 用于设置域名自动续费。
     */
    async SetDomainAutoRenew(req, cb) {
        return this.request("SetDomainAutoRenew", req, cb);
    }
    /**
     * 本接口 ( ModifyDomainDNSBatch) 用于批量域名 DNS 修改 。
     */
    async ModifyDomainDNSBatch(req, cb) {
        return this.request("ModifyDomainDNSBatch", req, cb);
    }
    /**
     * 本接口 ( CheckBatchStatus ) 用于查询批量操作日志状态 。
     */
    async CheckBatchStatus(req, cb) {
        return this.request("CheckBatchStatus", req, cb);
    }
    /**
     * 本接口 ( UploadImage ) 用于证件图片上传 。
     */
    async UploadImage(req, cb) {
        return this.request("UploadImage", req, cb);
    }
    /**
     * 此接口用于删除已验证的手机邮箱
     */
    async DeletePhoneEmail(req, cb) {
        return this.request("DeletePhoneEmail", req, cb);
    }
    /**
     * 本接口 (  DescribeDomainNameList ) 我的域名列表。

     */
    async DescribeDomainNameList(req, cb) {
        return this.request("DescribeDomainNameList", req, cb);
    }
    /**
     * 本接口 ( CreateDomainBatch ) 用于批量域名注册 。
     */
    async CreateDomainBatch(req, cb) {
        return this.request("CreateDomainBatch", req, cb);
    }
    /**
     * 本接口 (  DescribeDomainBaseInfo) 获取域名基本信息。

     */
    async DescribeDomainBaseInfo(req, cb) {
        return this.request("DescribeDomainBaseInfo", req, cb);
    }
    /**
     * 本接口 ( DescribeBatchOperationLogDetails ) 用于获取批量操作日志详情。
     */
    async DescribeBatchOperationLogDetails(req, cb) {
        return this.request("DescribeBatchOperationLogDetails", req, cb);
    }
    /**
     * 本接口 ( DeleteTemplate ) 用于删除信息模板。
     */
    async DeleteTemplate(req, cb) {
        return this.request("DeleteTemplate", req, cb);
    }
    /**
     * 检查域名是否可以注册。
     */
    async CheckDomain(req, cb) {
        return this.request("CheckDomain", req, cb);
    }
    /**
     * 本接口 ( RenewDomainBatch ) 用于批量续费域名 。

     */
    async RenewDomainBatch(req, cb) {
        return this.request("RenewDomainBatch", req, cb);
    }
    /**
     * 本接口 (DescribeTemplate) 用于获取模板信息。
     */
    async DescribeTemplate(req, cb) {
        return this.request("DescribeTemplate", req, cb);
    }
    /**
     * 此接口用于创建有效的手机、邮箱
     */
    async CreatePhoneEmail(req, cb) {
        return this.request("CreatePhoneEmail", req, cb);
    }
    /**
     * 本接口 (DescribeTemplateList) 用于获取信息模板列表。

     */
    async DescribeTemplateList(req, cb) {
        return this.request("DescribeTemplateList", req, cb);
    }
    /**
     * 本接口 ( BatchModifyDomainInfo ) 用于批量域名信息修改 。
     */
    async BatchModifyDomainInfo(req, cb) {
        return this.request("BatchModifyDomainInfo", req, cb);
    }
    /**
     * 本接口 ( TransferProhibitionBatch ) 用于批量禁止域名转移 。
     */
    async TransferProhibitionBatch(req, cb) {
        return this.request("TransferProhibitionBatch", req, cb);
    }
    /**
     * 本接口 ( TransferInDomainBatch ) 用于批量转入域名 。
     */
    async TransferInDomainBatch(req, cb) {
        return this.request("TransferInDomainBatch", req, cb);
    }
    /**
     * 本接口 ( UpdateProhibitionBatch ) 用于批量禁止更新锁。
     */
    async UpdateProhibitionBatch(req, cb) {
        return this.request("UpdateProhibitionBatch", req, cb);
    }
    /**
     * 本接口 ( CreateTemplate ) 用于添加域名信息模板 。
     */
    async CreateTemplate(req, cb) {
        return this.request("CreateTemplate", req, cb);
    }
    /**
     * 本接口 ( ModifyDomainOwnerBatch) 用于域名批量账号间转移 。
     */
    async ModifyDomainOwnerBatch(req, cb) {
        return this.request("ModifyDomainOwnerBatch", req, cb);
    }
    /**
     * 本接口用于获取已验证的手机邮箱列表
     */
    async DescribePhoneEmailList(req, cb) {
        return this.request("DescribePhoneEmailList", req, cb);
    }
    /**
     * 此接口用于发送手机邮箱验证码。
     */
    async SendPhoneEmailCode(req, cb) {
        return this.request("SendPhoneEmailCode", req, cb);
    }
    /**
     * 获取域名实名信息详情
     */
    async DescribeDomainSimpleInfo(req, cb) {
        return this.request("DescribeDomainSimpleInfo", req, cb);
    }
    /**
     * 按照域名后缀获取对应的价格列表
     */
    async DescribeDomainPriceList(req, cb) {
        return this.request("DescribeDomainPriceList", req, cb);
    }
    /**
     * 本接口 ( DescribeBatchOperationLogs ) 用于获取批量操作日志 。
     */
    async DescribeBatchOperationLogs(req, cb) {
        return this.request("DescribeBatchOperationLogs", req, cb);
    }
}
exports.Client = Client;
