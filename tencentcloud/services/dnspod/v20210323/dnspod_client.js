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
 * dnspod client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(clientConfig) {
        super("dnspod.tencentcloudapi.com", "2021-03-23", clientConfig);
    }
    /**
     * 获取某个域名下的解析记录
     */
    async DescribeRecordList(req, cb) {
        return this.request("DescribeRecordList", req, cb);
    }
    /**
     * 获取域名权限
     */
    async DescribeDomainPurview(req, cb) {
        return this.request("DescribeDomainPurview", req, cb);
    }
    /**
     * 暂停子域名的解析记录
     */
    async ModifySubdomainStatus(req, cb) {
        return this.request("ModifySubdomainStatus", req, cb);
    }
    /**
     * 删除记录
     */
    async DeleteRecord(req, cb) {
        return this.request("DeleteRecord", req, cb);
    }
    /**
     * 获取域名别名列表
     */
    async DescribeDomainAliasList(req, cb) {
        return this.request("DescribeDomainAliasList", req, cb);
    }
    /**
     * 修改解析记录的状态
     */
    async ModifyRecordStatus(req, cb) {
        return this.request("ModifyRecordStatus", req, cb);
    }
    /**
     * 修改域名状态
     */
    async ModifyDomainStatus(req, cb) {
        return this.request("ModifyDomainStatus", req, cb);
    }
    /**
     * 域名锁定解锁
     */
    async ModifyDomainUnlock(req, cb) {
        return this.request("ModifyDomainUnlock", req, cb);
    }
    /**
     * 批量添加域名
     */
    async CreateDomainBatch(req, cb) {
        return this.request("CreateDomainBatch", req, cb);
    }
    /**
     * 获取域名共享信息
     */
    async DescribeDomainShareInfo(req, cb) {
        return this.request("DescribeDomainShareInfo", req, cb);
    }
    /**
     * 删除域名共享
     */
    async DeleteShareDomain(req, cb) {
        return this.request("DeleteShareDomain", req, cb);
    }
    /**
     * 获取域名信息
     */
    async DescribeDomain(req, cb) {
        return this.request("DescribeDomain", req, cb);
    }
    /**
     * 更新动态 DNS 记录

     */
    async ModifyDynamicDNS(req, cb) {
        return this.request("ModifyDynamicDNS", req, cb);
    }
    /**
     * 添加域名

     */
    async CreateDomain(req, cb) {
        return this.request("CreateDomain", req, cb);
    }
    /**
     * 获取帐户信息
     */
    async DescribeUserDetail(req, cb) {
        return this.request("DescribeUserDetail", req, cb);
    }
    /**
     * 获取等级允许的记录类型
     */
    async DescribeRecordType(req, cb) {
        return this.request("DescribeRecordType", req, cb);
    }
    /**
     * 获取记录信息
     */
    async DescribeRecord(req, cb) {
        return this.request("DescribeRecord", req, cb);
    }
    /**
     * 获取等级允许的线路
     */
    async DescribeRecordLineList(req, cb) {
        return this.request("DescribeRecordLineList", req, cb);
    }
    /**
     * 设置记录备注
     */
    async ModifyRecordRemark(req, cb) {
        return this.request("ModifyRecordRemark", req, cb);
    }
    /**
     * 创建域名别名
     */
    async CreateDomainAlias(req, cb) {
        return this.request("CreateDomainAlias", req, cb);
    }
    /**
     * 添加记录

     */
    async CreateRecord(req, cb) {
        return this.request("CreateRecord", req, cb);
    }
    /**
     * 设置域名备注
     */
    async ModifyDomainRemark(req, cb) {
        return this.request("ModifyDomainRemark", req, cb);
    }
    /**
     * 域名过户
     */
    async ModifyDomainOwner(req, cb) {
        return this.request("ModifyDomainOwner", req, cb);
    }
    /**
     * 创建域名分组
     */
    async CreateDomainGroup(req, cb) {
        return this.request("CreateDomainGroup", req, cb);
    }
    /**
     * 删除域名别名
     */
    async DeleteDomainAlias(req, cb) {
        return this.request("DeleteDomainAlias", req, cb);
    }
    /**
     * 获取任务详情
     */
    async DescribeBatchTask(req, cb) {
        return this.request("DescribeBatchTask", req, cb);
    }
    /**
     * 批量添加记录
     */
    async CreateRecordBatch(req, cb) {
        return this.request("CreateRecordBatch", req, cb);
    }
    /**
     * 获取域名列表
     */
    async DescribeDomainList(req, cb) {
        return this.request("DescribeDomainList", req, cb);
    }
    /**
     * 删除域名

     */
    async DeleteDomain(req, cb) {
        return this.request("DeleteDomain", req, cb);
    }
    /**
     * 获取域名日志
     */
    async DescribeDomainLogList(req, cb) {
        return this.request("DescribeDomainLogList", req, cb);
    }
    /**
     * 锁定域名
     */
    async ModifyDomainLock(req, cb) {
        return this.request("ModifyDomainLock", req, cb);
    }
    /**
     * 批量修改记录
     */
    async ModifyRecordBatch(req, cb) {
        return this.request("ModifyRecordBatch", req, cb);
    }
    /**
     * 修改记录
     */
    async ModifyRecord(req, cb) {
        return this.request("ModifyRecord", req, cb);
    }
}
exports.Client = Client;
