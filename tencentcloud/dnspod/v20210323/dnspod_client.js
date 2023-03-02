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
const models = require("./models");
const AbstractClient = require('../../common/abstract_client')
const CreateRecordRequest = models.CreateRecordRequest;
const DescribeSnapshotRollbackResultResponse = models.DescribeSnapshotRollbackResultResponse;
const DownloadSnapshotRequest = models.DownloadSnapshotRequest;
const DescribeBatchTaskDetail = models.DescribeBatchTaskDetail;
const ModifyVasAutoRenewStatusResponse = models.ModifyVasAutoRenewStatusResponse;
const RollbackSnapshotRequest = models.RollbackSnapshotRequest;
const DeleteDomainAliasResponse = models.DeleteDomainAliasResponse;
const DescribeVASStatisticRequest = models.DescribeVASStatisticRequest;
const DeleteDomainBatchResponse = models.DeleteDomainBatchResponse;
const RecordGroupInfo = models.RecordGroupInfo;
const ModifySubdomainStatusRequest = models.ModifySubdomainStatusRequest;
const CreateRecordBatchResponse = models.CreateRecordBatchResponse;
const DescribeSnapshotListResponse = models.DescribeSnapshotListResponse;
const CreateDomainBatchRecord = models.CreateDomainBatchRecord;
const DomainAnalyticsInfo = models.DomainAnalyticsInfo;
const ModifyRecordGroupRequest = models.ModifyRecordGroupRequest;
const DescribeVASStatisticResponse = models.DescribeVASStatisticResponse;
const DescribeBatchTaskRequest = models.DescribeBatchTaskRequest;
const DomainAnalyticsDetail = models.DomainAnalyticsDetail;
const CreateSnapshotResponse = models.CreateSnapshotResponse;
const KeyValue = models.KeyValue;
const DeleteRecordGroupRequest = models.DeleteRecordGroupRequest;
const PayOrderWithBalanceResponse = models.PayOrderWithBalanceResponse;
const DescribeDomainResponse = models.DescribeDomainResponse;
const DescribeSnapshotListRequest = models.DescribeSnapshotListRequest;
const DescribePackageDetailResponse = models.DescribePackageDetailResponse;
const DescribeRecordLineListResponse = models.DescribeRecordLineListResponse;
const SnapshotPageInfo = models.SnapshotPageInfo;
const DomainInfo = models.DomainInfo;
const CreateDomainBatchRequest = models.CreateDomainBatchRequest;
const ModifyRecordGroupResponse = models.ModifyRecordGroupResponse;
const DescribeDomainShareInfoRequest = models.DescribeDomainShareInfoRequest;
const DomainListItem = models.DomainListItem;
const DeleteDomainBatchRequest = models.DeleteDomainBatchRequest;
const DescribeRecordTypeResponse = models.DescribeRecordTypeResponse;
const ModifyDomainRemarkResponse = models.ModifyDomainRemarkResponse;
const DeleteSnapshotRequest = models.DeleteSnapshotRequest;
const DescribeDomainAliasListResponse = models.DescribeDomainAliasListResponse;
const RollbackRecordSnapshotRequest = models.RollbackRecordSnapshotRequest;
const ModifyRecordToGroupRequest = models.ModifyRecordToGroupRequest;
const DescribeSnapshotConfigResponse = models.DescribeSnapshotConfigResponse;
const RecordCountInfo = models.RecordCountInfo;
const DeleteShareDomainResponse = models.DeleteShareDomainResponse;
const ModifyRecordRequest = models.ModifyRecordRequest;
const BatchRecordInfo = models.BatchRecordInfo;
const LineGroupInfo = models.LineGroupInfo;
const DeleteDomainRequest = models.DeleteDomainRequest;
const ModifyDomainOwnerRequest = models.ModifyDomainOwnerRequest;
const ModifyPackageAutoRenewRequest = models.ModifyPackageAutoRenewRequest;
const DomainShareInfo = models.DomainShareInfo;
const DescribeSnapshotConfigRequest = models.DescribeSnapshotConfigRequest;
const LineInfo = models.LineInfo;
const DescribeRecordExistExceptDefaultNSRequest = models.DescribeRecordExistExceptDefaultNSRequest;
const DescribeRecordLineListRequest = models.DescribeRecordLineListRequest;
const DescribeRecordListResponse = models.DescribeRecordListResponse;
const CreateRecordBatchRequest = models.CreateRecordBatchRequest;
const DeleteDomainAliasRequest = models.DeleteDomainAliasRequest;
const DomainAliasInfo = models.DomainAliasInfo;
const CreateDealRequest = models.CreateDealRequest;
const ModifyDomainLockRequest = models.ModifyDomainLockRequest;
const DescribeDomainWhoisRequest = models.DescribeDomainWhoisRequest;
const SubdomainAliasAnalyticsItem = models.SubdomainAliasAnalyticsItem;
const ModifyDomainStatusResponse = models.ModifyDomainStatusResponse;
const AddRecordBatch = models.AddRecordBatch;
const DescribeRecordRequest = models.DescribeRecordRequest;
const CreateDomainGroupResponse = models.CreateDomainGroupResponse;
const DescribeSubdomainAnalyticsRequest = models.DescribeSubdomainAnalyticsRequest;
const DeleteRecordRequest = models.DeleteRecordRequest;
const DescribeDomainRequest = models.DescribeDomainRequest;
const GroupInfo = models.GroupInfo;
const ModifyRecordStatusRequest = models.ModifyRecordStatusRequest;
const CreateRecordResponse = models.CreateRecordResponse;
const DeleteRecordGroupResponse = models.DeleteRecordGroupResponse;
const RecordInfo = models.RecordInfo;
const DescribeSnapshotRollbackTaskRequest = models.DescribeSnapshotRollbackTaskRequest;
const CheckRecordSnapshotRollbackResponse = models.CheckRecordSnapshotRollbackResponse;
const DescribeDomainPreviewRequest = models.DescribeDomainPreviewRequest;
const CreateRecordBatchDetail = models.CreateRecordBatchDetail;
const WhoisContact = models.WhoisContact;
const DescribeSubdomainAnalyticsResponse = models.DescribeSubdomainAnalyticsResponse;
const ModifyRecordResponse = models.ModifyRecordResponse;
const ModifyRecordToGroupResponse = models.ModifyRecordToGroupResponse;
const SnapshotRecord = models.SnapshotRecord;
const ModifyDomainUnlockResponse = models.ModifyDomainUnlockResponse;
const DescribeDomainLogListRequest = models.DescribeDomainLogListRequest;
const DescribeDomainListResponse = models.DescribeDomainListResponse;
const ModifyRecordBatchRequest = models.ModifyRecordBatchRequest;
const WhoisContactAddress = models.WhoisContactAddress;
const SnapshotConfig = models.SnapshotConfig;
const DeleteRecordResponse = models.DeleteRecordResponse;
const CreateRecordBatchRecord = models.CreateRecordBatchRecord;
const CreateDomainResponse = models.CreateDomainResponse;
const DomainCountInfo = models.DomainCountInfo;
const UserInfo = models.UserInfo;
const ModifyRecordBatchResponse = models.ModifyRecordBatchResponse;
const CheckSnapshotRollbackRequest = models.CheckSnapshotRollbackRequest;
const CheckSnapshotRollbackResponse = models.CheckSnapshotRollbackResponse;
const DescribeRecordTypeRequest = models.DescribeRecordTypeRequest;
const DescribeSnapshotRollbackTaskResponse = models.DescribeSnapshotRollbackTaskResponse;
const RecordListItem = models.RecordListItem;
const DescribeDomainPreviewResponse = models.DescribeDomainPreviewResponse;
const CreateDomainBatchResponse = models.CreateDomainBatchResponse;
const DescribeDomainGroupListResponse = models.DescribeDomainGroupListResponse;
const LockInfo = models.LockInfo;
const ModifyDomainOwnerResponse = models.ModifyDomainOwnerResponse;
const SubdomainAnalyticsInfo = models.SubdomainAnalyticsInfo;
const ModifyRecordBatchDetail = models.ModifyRecordBatchDetail;
const DescribeUserDetailResponse = models.DescribeUserDetailResponse;
const DeleteDomainBatchDetail = models.DeleteDomainBatchDetail;
const CreateDomainRequest = models.CreateDomainRequest;
const ModifyPackageAutoRenewResponse = models.ModifyPackageAutoRenewResponse;
const DomainAliasAnalyticsItem = models.DomainAliasAnalyticsItem;
const DescribeDomainShareInfoResponse = models.DescribeDomainShareInfoResponse;
const ModifyDomainRemarkRequest = models.ModifyDomainRemarkRequest;
const CreateDomainAliasResponse = models.CreateDomainAliasResponse;
const DescribeRecordListRequest = models.DescribeRecordListRequest;
const PayOrderWithBalanceRequest = models.PayOrderWithBalanceRequest;
const DescribePackageDetailRequest = models.DescribePackageDetailRequest;
const DescribeRecordResponse = models.DescribeRecordResponse;
const ModifyRecordFieldsRequest = models.ModifyRecordFieldsRequest;
const DeleteSnapshotResponse = models.DeleteSnapshotResponse;
const DescribeDomainPurviewResponse = models.DescribeDomainPurviewResponse;
const Deals = models.Deals;
const ModifySubdomainStatusResponse = models.ModifySubdomainStatusResponse;
const DescribeDomainAnalyticsResponse = models.DescribeDomainAnalyticsResponse;
const ModifyRecordStatusResponse = models.ModifyRecordStatusResponse;
const CreateRecordGroupRequest = models.CreateRecordGroupRequest;
const RollbackSnapshotResponse = models.RollbackSnapshotResponse;
const DescribeRecordGroupListResponse = models.DescribeRecordGroupListResponse;
const CreateDomainGroupRequest = models.CreateDomainGroupRequest;
const CreateSnapshotRequest = models.CreateSnapshotRequest;
const DeleteDomainResponse = models.DeleteDomainResponse;
const DescribeRecordSnapshotRollbackResultResponse = models.DescribeRecordSnapshotRollbackResultResponse;
const ModifySnapshotConfigRequest = models.ModifySnapshotConfigRequest;
const DescribeDomainAliasListRequest = models.DescribeDomainAliasListRequest;
const CreateDomainAliasRequest = models.CreateDomainAliasRequest;
const DeleteShareDomainRequest = models.DeleteShareDomainRequest;
const VASStatisticItem = models.VASStatisticItem;
const SnapshotInfo = models.SnapshotInfo;
const ModifyDynamicDNSRequest = models.ModifyDynamicDNSRequest;
const DescribeRecordGroupListRequest = models.DescribeRecordGroupListRequest;
const ModifyRecordFieldsResponse = models.ModifyRecordFieldsResponse;
const PurviewInfo = models.PurviewInfo;
const ModifyRecordRemarkRequest = models.ModifyRecordRemarkRequest;
const ModifySnapshotConfigResponse = models.ModifySnapshotConfigResponse;
const RollbackRecordSnapshotResponse = models.RollbackRecordSnapshotResponse;
const DescribeUserDetailRequest = models.DescribeUserDetailRequest;
const ModifyDomainStatusRequest = models.ModifyDomainStatusRequest;
const ModifyRecordRemarkResponse = models.ModifyRecordRemarkResponse;
const DescribeDomainListRequest = models.DescribeDomainListRequest;
const DomainCreateInfo = models.DomainCreateInfo;
const DescribeDomainPurviewRequest = models.DescribeDomainPurviewRequest;
const CreateDomainBatchDetail = models.CreateDomainBatchDetail;
const ModifyDomainUnlockRequest = models.ModifyDomainUnlockRequest;
const DescribeRecordSnapshotRollbackResultRequest = models.DescribeRecordSnapshotRollbackResultRequest;
const ModifyDomainLockResponse = models.ModifyDomainLockResponse;
const PackageDetailItem = models.PackageDetailItem;
const CreateDealResponse = models.CreateDealResponse;
const DescribeRecordExistExceptDefaultNSResponse = models.DescribeRecordExistExceptDefaultNSResponse;
const ModifyVasAutoRenewStatusRequest = models.ModifyVasAutoRenewStatusRequest;
const WhoisInfo = models.WhoisInfo;
const DownloadSnapshotResponse = models.DownloadSnapshotResponse;
const PreviewDetail = models.PreviewDetail;
const DescribeDomainWhoisResponse = models.DescribeDomainWhoisResponse;
const CreateRecordGroupResponse = models.CreateRecordGroupResponse;
const DescribeDomainGroupListRequest = models.DescribeDomainGroupListRequest;
const DescribeBatchTaskResponse = models.DescribeBatchTaskResponse;
const CheckRecordSnapshotRollbackRequest = models.CheckRecordSnapshotRollbackRequest;
const DescribeDomainAnalyticsRequest = models.DescribeDomainAnalyticsRequest;
const ModifyDynamicDNSResponse = models.ModifyDynamicDNSResponse;
const DescribeSnapshotRollbackResultRequest = models.DescribeSnapshotRollbackResultRequest;
const DescribeDomainLogListResponse = models.DescribeDomainLogListResponse;


/**
 * dnspod client
 * @class
 */
class DnspodClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("dnspod.tencentcloudapi.com", "2021-03-23", credential, region, profile);
    }
    
    /**
     * 获取某个域名下的解析记录列表
     * @param {DescribeRecordListRequest} req
     * @param {function(string, DescribeRecordListResponse):void} cb
     * @public
     */
    DescribeRecordList(req, cb) {
        let resp = new DescribeRecordListResponse();
        this.request("DescribeRecordList", req, resp, cb);
    }

    /**
     * 获取域名共享信息
     * @param {DescribeDomainShareInfoRequest} req
     * @param {function(string, DescribeDomainShareInfoResponse):void} cb
     * @public
     */
    DescribeDomainShareInfo(req, cb) {
        let resp = new DescribeDomainShareInfoResponse();
        this.request("DescribeDomainShareInfo", req, resp, cb);
    }

    /**
     * 查询最近一次回滚
     * @param {DescribeSnapshotRollbackTaskRequest} req
     * @param {function(string, DescribeSnapshotRollbackTaskResponse):void} cb
     * @public
     */
    DescribeSnapshotRollbackTask(req, cb) {
        let resp = new DescribeSnapshotRollbackTaskResponse();
        this.request("DescribeSnapshotRollbackTask", req, resp, cb);
    }

    /**
     * 获取域名权限
     * @param {DescribeDomainPurviewRequest} req
     * @param {function(string, DescribeDomainPurviewResponse):void} cb
     * @public
     */
    DescribeDomainPurview(req, cb) {
        let resp = new DescribeDomainPurviewResponse();
        this.request("DescribeDomainPurview", req, resp, cb);
    }

    /**
     * 暂停子域名的解析记录
     * @param {ModifySubdomainStatusRequest} req
     * @param {function(string, ModifySubdomainStatusResponse):void} cb
     * @public
     */
    ModifySubdomainStatus(req, cb) {
        let resp = new ModifySubdomainStatusResponse();
        this.request("ModifySubdomainStatus", req, resp, cb);
    }

    /**
     * 获取等级允许的记录类型
     * @param {DescribeRecordTypeRequest} req
     * @param {function(string, DescribeRecordTypeResponse):void} cb
     * @public
     */
    DescribeRecordType(req, cb) {
        let resp = new DescribeRecordTypeResponse();
        this.request("DescribeRecordType", req, resp, cb);
    }

    /**
     * 删除记录分组
     * @param {DeleteRecordGroupRequest} req
     * @param {function(string, DeleteRecordGroupResponse):void} cb
     * @public
     */
    DeleteRecordGroup(req, cb) {
        let resp = new DeleteRecordGroupResponse();
        this.request("DeleteRecordGroup", req, resp, cb);
    }

    /**
     * 修改域名状态
     * @param {ModifyDomainStatusRequest} req
     * @param {function(string, ModifyDomainStatusResponse):void} cb
     * @public
     */
    ModifyDomainStatus(req, cb) {
        let resp = new ModifyDomainStatusResponse();
        this.request("ModifyDomainStatus", req, resp, cb);
    }

    /**
     * 获取域名别名列表
     * @param {DescribeDomainAliasListRequest} req
     * @param {function(string, DescribeDomainAliasListResponse):void} cb
     * @public
     */
    DescribeDomainAliasList(req, cb) {
        let resp = new DescribeDomainAliasListResponse();
        this.request("DescribeDomainAliasList", req, resp, cb);
    }

    /**
     * 查询快照列表
     * @param {DescribeSnapshotListRequest} req
     * @param {function(string, DescribeSnapshotListResponse):void} cb
     * @public
     */
    DescribeSnapshotList(req, cb) {
        let resp = new DescribeSnapshotListResponse();
        this.request("DescribeSnapshotList", req, resp, cb);
    }

    /**
     * 修改记录可选字段
     * @param {ModifyRecordFieldsRequest} req
     * @param {function(string, ModifyRecordFieldsResponse):void} cb
     * @public
     */
    ModifyRecordFields(req, cb) {
        let resp = new ModifyRecordFieldsResponse();
        this.request("ModifyRecordFields", req, resp, cb);
    }

    /**
     * 批量删除域名
     * @param {DeleteDomainBatchRequest} req
     * @param {function(string, DeleteDomainBatchResponse):void} cb
     * @public
     */
    DeleteDomainBatch(req, cb) {
        let resp = new DeleteDomainBatchResponse();
        this.request("DeleteDomainBatch", req, resp, cb);
    }

    /**
     * 下载快照
     * @param {DownloadSnapshotRequest} req
     * @param {function(string, DownloadSnapshotResponse):void} cb
     * @public
     */
    DownloadSnapshot(req, cb) {
        let resp = new DownloadSnapshotResponse();
        this.request("DownloadSnapshot", req, resp, cb);
    }

    /**
     * 快照回滚前检查
     * @param {CheckSnapshotRollbackRequest} req
     * @param {function(string, CheckSnapshotRollbackResponse):void} cb
     * @public
     */
    CheckSnapshotRollback(req, cb) {
        let resp = new CheckSnapshotRollbackResponse();
        this.request("CheckSnapshotRollback", req, resp, cb);
    }

    /**
     * 修改记录
     * @param {ModifyRecordRequest} req
     * @param {function(string, ModifyRecordResponse):void} cb
     * @public
     */
    ModifyRecord(req, cb) {
        let resp = new ModifyRecordResponse();
        this.request("ModifyRecord", req, resp, cb);
    }

    /**
     * 获取域名Whois信息
     * @param {DescribeDomainWhoisRequest} req
     * @param {function(string, DescribeDomainWhoisResponse):void} cb
     * @public
     */
    DescribeDomainWhois(req, cb) {
        let resp = new DescribeDomainWhoisResponse();
        this.request("DescribeDomainWhois", req, resp, cb);
    }

    /**
     * 查询解析记录分组列表
     * @param {DescribeRecordGroupListRequest} req
     * @param {function(string, DescribeRecordGroupListResponse):void} cb
     * @public
     */
    DescribeRecordGroupList(req, cb) {
        let resp = new DescribeRecordGroupListResponse();
        this.request("DescribeRecordGroupList", req, resp, cb);
    }

    /**
     * 查询快照回滚结果
     * @param {DescribeSnapshotRollbackResultRequest} req
     * @param {function(string, DescribeSnapshotRollbackResultResponse):void} cb
     * @public
     */
    DescribeSnapshotRollbackResult(req, cb) {
        let resp = new DescribeSnapshotRollbackResultResponse();
        this.request("DescribeSnapshotRollbackResult", req, resp, cb);
    }

    /**
     * 删除快照
     * @param {DeleteSnapshotRequest} req
     * @param {function(string, DeleteSnapshotResponse):void} cb
     * @public
     */
    DeleteSnapshot(req, cb) {
        let resp = new DeleteSnapshotResponse();
        this.request("DeleteSnapshot", req, resp, cb);
    }

    /**
     * 域名锁定解锁
     * @param {ModifyDomainUnlockRequest} req
     * @param {function(string, ModifyDomainUnlockResponse):void} cb
     * @public
     */
    ModifyDomainUnlock(req, cb) {
        let resp = new ModifyDomainUnlockResponse();
        this.request("ModifyDomainUnlock", req, resp, cb);
    }

    /**
     * 批量添加域名
     * @param {CreateDomainBatchRequest} req
     * @param {function(string, CreateDomainBatchResponse):void} cb
     * @public
     */
    CreateDomainBatch(req, cb) {
        let resp = new CreateDomainBatchResponse();
        this.request("CreateDomainBatch", req, resp, cb);
    }

    /**
     * 获取域名分组列表
     * @param {DescribeDomainGroupListRequest} req
     * @param {function(string, DescribeDomainGroupListResponse):void} cb
     * @public
     */
    DescribeDomainGroupList(req, cb) {
        let resp = new DescribeDomainGroupListResponse();
        this.request("DescribeDomainGroupList", req, resp, cb);
    }

    /**
     * DNSPod商品下单
     * @param {CreateDealRequest} req
     * @param {function(string, CreateDealResponse):void} cb
     * @public
     */
    CreateDeal(req, cb) {
        let resp = new CreateDealResponse();
        this.request("CreateDeal", req, resp, cb);
    }

    /**
     * 查询解析快照配置
     * @param {DescribeSnapshotConfigRequest} req
     * @param {function(string, DescribeSnapshotConfigResponse):void} cb
     * @public
     */
    DescribeSnapshotConfig(req, cb) {
        let resp = new DescribeSnapshotConfigResponse();
        this.request("DescribeSnapshotConfig", req, resp, cb);
    }

    /**
     * 删除域名共享
     * @param {DeleteShareDomainRequest} req
     * @param {function(string, DeleteShareDomainResponse):void} cb
     * @public
     */
    DeleteShareDomain(req, cb) {
        let resp = new DeleteShareDomainResponse();
        this.request("DeleteShareDomain", req, resp, cb);
    }

    /**
     * 增值服务自动续费设置
     * @param {ModifyVasAutoRenewStatusRequest} req
     * @param {function(string, ModifyVasAutoRenewStatusResponse):void} cb
     * @public
     */
    ModifyVasAutoRenewStatus(req, cb) {
        let resp = new ModifyVasAutoRenewStatusResponse();
        this.request("ModifyVasAutoRenewStatus", req, resp, cb);
    }

    /**
     * 修改记录分组
     * @param {ModifyRecordGroupRequest} req
     * @param {function(string, ModifyRecordGroupResponse):void} cb
     * @public
     */
    ModifyRecordGroup(req, cb) {
        let resp = new ModifyRecordGroupResponse();
        this.request("ModifyRecordGroup", req, resp, cb);
    }

    /**
     * 修改解析记录的状态
     * @param {ModifyRecordStatusRequest} req
     * @param {function(string, ModifyRecordStatusResponse):void} cb
     * @public
     */
    ModifyRecordStatus(req, cb) {
        let resp = new ModifyRecordStatusResponse();
        this.request("ModifyRecordStatus", req, resp, cb);
    }

    /**
     * 获取域名信息
     * @param {DescribeDomainRequest} req
     * @param {function(string, DescribeDomainResponse):void} cb
     * @public
     */
    DescribeDomain(req, cb) {
        let resp = new DescribeDomainResponse();
        this.request("DescribeDomain", req, resp, cb);
    }

    /**
     * 更新动态 DNS 记录
     * @param {ModifyDynamicDNSRequest} req
     * @param {function(string, ModifyDynamicDNSResponse):void} cb
     * @public
     */
    ModifyDynamicDNS(req, cb) {
        let resp = new ModifyDynamicDNSResponse();
        this.request("ModifyDynamicDNS", req, resp, cb);
    }

    /**
     * 批量添加记录
     * @param {CreateRecordBatchRequest} req
     * @param {function(string, CreateRecordBatchResponse):void} cb
     * @public
     */
    CreateRecordBatch(req, cb) {
        let resp = new CreateRecordBatchResponse();
        this.request("CreateRecordBatch", req, resp, cb);
    }

    /**
     * 获取帐户信息
     * @param {DescribeUserDetailRequest} req
     * @param {function(string, DescribeUserDetailResponse):void} cb
     * @public
     */
    DescribeUserDetail(req, cb) {
        let resp = new DescribeUserDetailResponse();
        this.request("DescribeUserDetail", req, resp, cb);
    }

    /**
     * 回滚快照
     * @param {RollbackSnapshotRequest} req
     * @param {function(string, RollbackSnapshotResponse):void} cb
     * @public
     */
    RollbackSnapshot(req, cb) {
        let resp = new RollbackSnapshotResponse();
        this.request("RollbackSnapshot", req, resp, cb);
    }

    /**
     * 删除记录
     * @param {DeleteRecordRequest} req
     * @param {function(string, DeleteRecordResponse):void} cb
     * @public
     */
    DeleteRecord(req, cb) {
        let resp = new DeleteRecordResponse();
        this.request("DeleteRecord", req, resp, cb);
    }

    /**
     * 获取记录信息
     * @param {DescribeRecordRequest} req
     * @param {function(string, DescribeRecordResponse):void} cb
     * @public
     */
    DescribeRecord(req, cb) {
        let resp = new DescribeRecordResponse();
        this.request("DescribeRecord", req, resp, cb);
    }

    /**
     * 修改快照配置
     * @param {ModifySnapshotConfigRequest} req
     * @param {function(string, ModifySnapshotConfigResponse):void} cb
     * @public
     */
    ModifySnapshotConfig(req, cb) {
        let resp = new ModifySnapshotConfigResponse();
        this.request("ModifySnapshotConfig", req, resp, cb);
    }

    /**
     * 获取各套餐配置详情
     * @param {DescribePackageDetailRequest} req
     * @param {function(string, DescribePackageDetailResponse):void} cb
     * @public
     */
    DescribePackageDetail(req, cb) {
        let resp = new DescribePackageDetailResponse();
        this.request("DescribePackageDetail", req, resp, cb);
    }

    /**
     * 获取等级允许的线路
     * @param {DescribeRecordLineListRequest} req
     * @param {function(string, DescribeRecordLineListResponse):void} cb
     * @public
     */
    DescribeRecordLineList(req, cb) {
        let resp = new DescribeRecordLineListResponse();
        this.request("DescribeRecordLineList", req, resp, cb);
    }

    /**
     * 获取域名增值服务用量
     * @param {DescribeVASStatisticRequest} req
     * @param {function(string, DescribeVASStatisticResponse):void} cb
     * @public
     */
    DescribeVASStatistic(req, cb) {
        let resp = new DescribeVASStatisticResponse();
        this.request("DescribeVASStatistic", req, resp, cb);
    }

    /**
     * 统计各个域名的解析量，帮助您了解流量情况、时间段分布。支持查看近 3 个月内的统计情况
     * @param {DescribeDomainAnalyticsRequest} req
     * @param {function(string, DescribeDomainAnalyticsResponse):void} cb
     * @public
     */
    DescribeDomainAnalytics(req, cb) {
        let resp = new DescribeDomainAnalyticsResponse();
        this.request("DescribeDomainAnalytics", req, resp, cb);
    }

    /**
     * DNS 解析套餐自动续费设置
     * @param {ModifyPackageAutoRenewRequest} req
     * @param {function(string, ModifyPackageAutoRenewResponse):void} cb
     * @public
     */
    ModifyPackageAutoRenew(req, cb) {
        let resp = new ModifyPackageAutoRenewResponse();
        this.request("ModifyPackageAutoRenew", req, resp, cb);
    }

    /**
     * 设置记录备注
     * @param {ModifyRecordRemarkRequest} req
     * @param {function(string, ModifyRecordRemarkResponse):void} cb
     * @public
     */
    ModifyRecordRemark(req, cb) {
        let resp = new ModifyRecordRemarkResponse();
        this.request("ModifyRecordRemark", req, resp, cb);
    }

    /**
     * 创建域名别名
     * @param {CreateDomainAliasRequest} req
     * @param {function(string, CreateDomainAliasResponse):void} cb
     * @public
     */
    CreateDomainAlias(req, cb) {
        let resp = new CreateDomainAliasResponse();
        this.request("CreateDomainAlias", req, resp, cb);
    }

    /**
     * 添加记录
     * @param {CreateRecordRequest} req
     * @param {function(string, CreateRecordResponse):void} cb
     * @public
     */
    CreateRecord(req, cb) {
        let resp = new CreateRecordResponse();
        this.request("CreateRecord", req, resp, cb);
    }

    /**
     * 设置域名备注
     * @param {ModifyDomainRemarkRequest} req
     * @param {function(string, ModifyDomainRemarkResponse):void} cb
     * @public
     */
    ModifyDomainRemark(req, cb) {
        let resp = new ModifyDomainRemarkResponse();
        this.request("ModifyDomainRemark", req, resp, cb);
    }

    /**
     * 判断是否有除系统默认的@-NS记录之外的记录存在
     * @param {DescribeRecordExistExceptDefaultNSRequest} req
     * @param {function(string, DescribeRecordExistExceptDefaultNSResponse):void} cb
     * @public
     */
    DescribeRecordExistExceptDefaultNS(req, cb) {
        let resp = new DescribeRecordExistExceptDefaultNSResponse();
        this.request("DescribeRecordExistExceptDefaultNS", req, resp, cb);
    }

    /**
     * 域名过户
     * @param {ModifyDomainOwnerRequest} req
     * @param {function(string, ModifyDomainOwnerResponse):void} cb
     * @public
     */
    ModifyDomainOwner(req, cb) {
        let resp = new ModifyDomainOwnerResponse();
        this.request("ModifyDomainOwner", req, resp, cb);
    }

    /**
     * 创建域名分组
     * @param {CreateDomainGroupRequest} req
     * @param {function(string, CreateDomainGroupResponse):void} cb
     * @public
     */
    CreateDomainGroup(req, cb) {
        let resp = new CreateDomainGroupResponse();
        this.request("CreateDomainGroup", req, resp, cb);
    }

    /**
     * 添加记录分组
     * @param {CreateRecordGroupRequest} req
     * @param {function(string, CreateRecordGroupResponse):void} cb
     * @public
     */
    CreateRecordGroup(req, cb) {
        let resp = new CreateRecordGroupResponse();
        this.request("CreateRecordGroup", req, resp, cb);
    }

    /**
     * 删除域名别名
     * @param {DeleteDomainAliasRequest} req
     * @param {function(string, DeleteDomainAliasResponse):void} cb
     * @public
     */
    DeleteDomainAlias(req, cb) {
        let resp = new DeleteDomainAliasResponse();
        this.request("DeleteDomainAlias", req, resp, cb);
    }

    /**
     * 获取任务详情
     * @param {DescribeBatchTaskRequest} req
     * @param {function(string, DescribeBatchTaskResponse):void} cb
     * @public
     */
    DescribeBatchTask(req, cb) {
        let resp = new DescribeBatchTaskResponse();
        this.request("DescribeBatchTask", req, resp, cb);
    }

    /**
     * 回滚前检查单条记录
     * @param {CheckRecordSnapshotRollbackRequest} req
     * @param {function(string, CheckRecordSnapshotRollbackResponse):void} cb
     * @public
     */
    CheckRecordSnapshotRollback(req, cb) {
        let resp = new CheckRecordSnapshotRollbackResponse();
        this.request("CheckRecordSnapshotRollback", req, resp, cb);
    }

    /**
     * 获取域名概览信息
     * @param {DescribeDomainPreviewRequest} req
     * @param {function(string, DescribeDomainPreviewResponse):void} cb
     * @public
     */
    DescribeDomainPreview(req, cb) {
        let resp = new DescribeDomainPreviewResponse();
        this.request("DescribeDomainPreview", req, resp, cb);
    }

    /**
     * 添加域名
     * @param {CreateDomainRequest} req
     * @param {function(string, CreateDomainResponse):void} cb
     * @public
     */
    CreateDomain(req, cb) {
        let resp = new CreateDomainResponse();
        this.request("CreateDomain", req, resp, cb);
    }

    /**
     * 重新回滚指定解析记录快照
     * @param {RollbackRecordSnapshotRequest} req
     * @param {function(string, RollbackRecordSnapshotResponse):void} cb
     * @public
     */
    RollbackRecordSnapshot(req, cb) {
        let resp = new RollbackRecordSnapshotResponse();
        this.request("RollbackRecordSnapshot", req, resp, cb);
    }

    /**
     * 将记录添加到分组
     * @param {ModifyRecordToGroupRequest} req
     * @param {function(string, ModifyRecordToGroupResponse):void} cb
     * @public
     */
    ModifyRecordToGroup(req, cb) {
        let resp = new ModifyRecordToGroupResponse();
        this.request("ModifyRecordToGroup", req, resp, cb);
    }

    /**
     * DNSPod商品余额支付
     * @param {PayOrderWithBalanceRequest} req
     * @param {function(string, PayOrderWithBalanceResponse):void} cb
     * @public
     */
    PayOrderWithBalance(req, cb) {
        let resp = new PayOrderWithBalanceResponse();
        this.request("PayOrderWithBalance", req, resp, cb);
    }

    /**
     * 统计子域名的解析量，帮助您了解流量情况、时间段分布。支持查看近 3 个月内的统计情况。仅付费套餐域名可用。
     * @param {DescribeSubdomainAnalyticsRequest} req
     * @param {function(string, DescribeSubdomainAnalyticsResponse):void} cb
     * @public
     */
    DescribeSubdomainAnalytics(req, cb) {
        let resp = new DescribeSubdomainAnalyticsResponse();
        this.request("DescribeSubdomainAnalytics", req, resp, cb);
    }

    /**
     * 批量修改记录
     * @param {ModifyRecordBatchRequest} req
     * @param {function(string, ModifyRecordBatchResponse):void} cb
     * @public
     */
    ModifyRecordBatch(req, cb) {
        let resp = new ModifyRecordBatchResponse();
        this.request("ModifyRecordBatch", req, resp, cb);
    }

    /**
     * 获取域名列表
     * @param {DescribeDomainListRequest} req
     * @param {function(string, DescribeDomainListResponse):void} cb
     * @public
     */
    DescribeDomainList(req, cb) {
        let resp = new DescribeDomainListResponse();
        this.request("DescribeDomainList", req, resp, cb);
    }

    /**
     * 删除域名
     * @param {DeleteDomainRequest} req
     * @param {function(string, DeleteDomainResponse):void} cb
     * @public
     */
    DeleteDomain(req, cb) {
        let resp = new DeleteDomainResponse();
        this.request("DeleteDomain", req, resp, cb);
    }

    /**
     * 获取域名日志
     * @param {DescribeDomainLogListRequest} req
     * @param {function(string, DescribeDomainLogListResponse):void} cb
     * @public
     */
    DescribeDomainLogList(req, cb) {
        let resp = new DescribeDomainLogListResponse();
        this.request("DescribeDomainLogList", req, resp, cb);
    }

    /**
     * 锁定域名
     * @param {ModifyDomainLockRequest} req
     * @param {function(string, ModifyDomainLockResponse):void} cb
     * @public
     */
    ModifyDomainLock(req, cb) {
        let resp = new ModifyDomainLockResponse();
        this.request("ModifyDomainLock", req, resp, cb);
    }

    /**
     * 创建快照
     * @param {CreateSnapshotRequest} req
     * @param {function(string, CreateSnapshotResponse):void} cb
     * @public
     */
    CreateSnapshot(req, cb) {
        let resp = new CreateSnapshotResponse();
        this.request("CreateSnapshot", req, resp, cb);
    }

    /**
     * 查询解析记录重新回滚的结果
     * @param {DescribeRecordSnapshotRollbackResultRequest} req
     * @param {function(string, DescribeRecordSnapshotRollbackResultResponse):void} cb
     * @public
     */
    DescribeRecordSnapshotRollbackResult(req, cb) {
        let resp = new DescribeRecordSnapshotRollbackResultResponse();
        this.request("DescribeRecordSnapshotRollbackResult", req, resp, cb);
    }


}
module.exports = DnspodClient;
