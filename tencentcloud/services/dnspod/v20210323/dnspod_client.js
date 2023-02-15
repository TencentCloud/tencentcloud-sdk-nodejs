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
     * 获取某个域名下的解析记录列表
     */
    async DescribeRecordList(req, cb) {
        return this.request("DescribeRecordList", req, cb);
    }
    /**
     * 获取域名共享信息
     */
    async DescribeDomainShareInfo(req, cb) {
        return this.request("DescribeDomainShareInfo", req, cb);
    }
    /**
     * 查询最近一次回滚
     */
    async DescribeSnapshotRollbackTask(req, cb) {
        return this.request("DescribeSnapshotRollbackTask", req, cb);
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
     * 获取等级允许的记录类型
     */
    async DescribeRecordType(req, cb) {
        return this.request("DescribeRecordType", req, cb);
    }
    /**
     * 删除记录分组
     */
    async DeleteRecordGroup(req, cb) {
        return this.request("DeleteRecordGroup", req, cb);
    }
    /**
     * 修改域名状态
     */
    async ModifyDomainStatus(req, cb) {
        return this.request("ModifyDomainStatus", req, cb);
    }
    /**
     * 获取域名别名列表
     */
    async DescribeDomainAliasList(req, cb) {
        return this.request("DescribeDomainAliasList", req, cb);
    }
    /**
     * 查询快照列表
     */
    async DescribeSnapshotList(req, cb) {
        return this.request("DescribeSnapshotList", req, cb);
    }
    /**
     * 修改记录可选字段
     */
    async ModifyRecordFields(req, cb) {
        return this.request("ModifyRecordFields", req, cb);
    }
    /**
     * 批量删除域名
     */
    async DeleteDomainBatch(req, cb) {
        return this.request("DeleteDomainBatch", req, cb);
    }
    /**
     * 下载快照
     */
    async DownloadSnapshot(req, cb) {
        return this.request("DownloadSnapshot", req, cb);
    }
    /**
     * 快照回滚前检查
     */
    async CheckSnapshotRollback(req, cb) {
        return this.request("CheckSnapshotRollback", req, cb);
    }
    /**
     * 修改记录
     */
    async ModifyRecord(req, cb) {
        return this.request("ModifyRecord", req, cb);
    }
    /**
     * 获取域名Whois信息
     */
    async DescribeDomainWhois(req, cb) {
        return this.request("DescribeDomainWhois", req, cb);
    }
    /**
     * 查询解析记录分组列表
     */
    async DescribeRecordGroupList(req, cb) {
        return this.request("DescribeRecordGroupList", req, cb);
    }
    /**
     * 查询快照回滚结果
     */
    async DescribeSnapshotRollbackResult(req, cb) {
        return this.request("DescribeSnapshotRollbackResult", req, cb);
    }
    /**
     * 删除快照
     */
    async DeleteSnapshot(req, cb) {
        return this.request("DeleteSnapshot", req, cb);
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
     * 获取域名分组列表
     */
    async DescribeDomainGroupList(req, cb) {
        return this.request("DescribeDomainGroupList", req, cb);
    }
    /**
     * DNSPod商品下单
     */
    async CreateDeal(req, cb) {
        return this.request("CreateDeal", req, cb);
    }
    /**
     * 查询解析快照配置
     */
    async DescribeSnapshotConfig(req, cb) {
        return this.request("DescribeSnapshotConfig", req, cb);
    }
    /**
     * 删除域名共享
     */
    async DeleteShareDomain(req, cb) {
        return this.request("DeleteShareDomain", req, cb);
    }
    /**
     * 增值服务自动续费设置
     */
    async ModifyVasAutoRenewStatus(req, cb) {
        return this.request("ModifyVasAutoRenewStatus", req, cb);
    }
    /**
     * 修改记录分组
     */
    async ModifyRecordGroup(req, cb) {
        return this.request("ModifyRecordGroup", req, cb);
    }
    /**
     * 修改解析记录的状态
     */
    async ModifyRecordStatus(req, cb) {
        return this.request("ModifyRecordStatus", req, cb);
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
     * 批量添加记录
     */
    async CreateRecordBatch(req, cb) {
        return this.request("CreateRecordBatch", req, cb);
    }
    /**
     * 获取帐户信息
     */
    async DescribeUserDetail(req, cb) {
        return this.request("DescribeUserDetail", req, cb);
    }
    /**
     * 回滚快照
     */
    async RollbackSnapshot(req, cb) {
        return this.request("RollbackSnapshot", req, cb);
    }
    /**
     * 删除记录
     */
    async DeleteRecord(req, cb) {
        return this.request("DeleteRecord", req, cb);
    }
    /**
     * 获取记录信息
     */
    async DescribeRecord(req, cb) {
        return this.request("DescribeRecord", req, cb);
    }
    /**
     * 修改快照配置
     */
    async ModifySnapshotConfig(req, cb) {
        return this.request("ModifySnapshotConfig", req, cb);
    }
    /**
     * 获取各套餐配置详情
     */
    async DescribePackageDetail(req, cb) {
        return this.request("DescribePackageDetail", req, cb);
    }
    /**
     * 获取等级允许的线路
     */
    async DescribeRecordLineList(req, cb) {
        return this.request("DescribeRecordLineList", req, cb);
    }
    /**
     * 获取域名增值服务用量
     */
    async DescribeVASStatistic(req, cb) {
        return this.request("DescribeVASStatistic", req, cb);
    }
    /**
     * 统计各个域名的解析量，帮助您了解流量情况、时间段分布。支持查看近 3 个月内的统计情况
     */
    async DescribeDomainAnalytics(req, cb) {
        return this.request("DescribeDomainAnalytics", req, cb);
    }
    /**
     * DNS 解析套餐自动续费设置
     */
    async ModifyPackageAutoRenew(req, cb) {
        return this.request("ModifyPackageAutoRenew", req, cb);
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
     * 判断是否有除系统默认的@-NS记录之外的记录存在
     */
    async DescribeRecordExistExceptDefaultNS(req, cb) {
        return this.request("DescribeRecordExistExceptDefaultNS", req, cb);
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
     * 添加记录分组
     */
    async CreateRecordGroup(req, cb) {
        return this.request("CreateRecordGroup", req, cb);
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
     * 回滚前检查单条记录
     */
    async CheckRecordSnapshotRollback(req, cb) {
        return this.request("CheckRecordSnapshotRollback", req, cb);
    }
    /**
     * 获取域名概览信息
     */
    async DescribeDomainPreview(req, cb) {
        return this.request("DescribeDomainPreview", req, cb);
    }
    /**
     * 添加域名
     */
    async CreateDomain(req, cb) {
        return this.request("CreateDomain", req, cb);
    }
    /**
     * 重新回滚指定解析记录快照
     */
    async RollbackRecordSnapshot(req, cb) {
        return this.request("RollbackRecordSnapshot", req, cb);
    }
    /**
     * 将记录添加到分组
     */
    async ModifyRecordToGroup(req, cb) {
        return this.request("ModifyRecordToGroup", req, cb);
    }
    /**
     * DNSPod商品余额支付
     */
    async PayOrderWithBalance(req, cb) {
        return this.request("PayOrderWithBalance", req, cb);
    }
    /**
     * 统计子域名的解析量，帮助您了解流量情况、时间段分布。支持查看近 3 个月内的统计情况。仅付费套餐域名可用。
     */
    async DescribeSubdomainAnalytics(req, cb) {
        return this.request("DescribeSubdomainAnalytics", req, cb);
    }
    /**
     * 批量修改记录
     */
    async ModifyRecordBatch(req, cb) {
        return this.request("ModifyRecordBatch", req, cb);
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
     * 创建快照
     */
    async CreateSnapshot(req, cb) {
        return this.request("CreateSnapshot", req, cb);
    }
    /**
     * 查询解析记录重新回滚的结果
     */
    async DescribeRecordSnapshotRollbackResult(req, cb) {
        return this.request("DescribeRecordSnapshotRollbackResult", req, cb);
    }
}
exports.Client = Client;
