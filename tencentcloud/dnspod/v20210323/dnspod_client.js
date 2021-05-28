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
const BatchRecordInfo = models.BatchRecordInfo;
const CreateRecordRequest = models.CreateRecordRequest;
const DescribeRecordTypeRequest = models.DescribeRecordTypeRequest;
const DeleteDomainRequest = models.DeleteDomainRequest;
const ModifyDomainOwnerRequest = models.ModifyDomainOwnerRequest;
const DeleteShareDomainRequest = models.DeleteShareDomainRequest;
const DescribeBatchTaskDetail = models.DescribeBatchTaskDetail;
const RecordInfo = models.RecordInfo;
const LineGroupInfo = models.LineGroupInfo;
const DomainShareInfo = models.DomainShareInfo;
const DeleteDomainAliasResponse = models.DeleteDomainAliasResponse;
const RecordListItem = models.RecordListItem;
const CreateDomainBatchResponse = models.CreateDomainBatchResponse;
const ModifyDomainStatusRequest = models.ModifyDomainStatusRequest;
const ModifyDynamicDNSRequest = models.ModifyDynamicDNSRequest;
const ModifyDomainOwnerResponse = models.ModifyDomainOwnerResponse;
const DescribeRecordLineListRequest = models.DescribeRecordLineListRequest;
const ModifyRecordRemarkRequest = models.ModifyRecordRemarkRequest;
const DescribeRecordListResponse = models.DescribeRecordListResponse;
const CreateRecordBatchRequest = models.CreateRecordBatchRequest;
const DescribeUserDetailRequest = models.DescribeUserDetailRequest;
const DeleteDomainAliasRequest = models.DeleteDomainAliasRequest;
const ModifyRecordBatchDetail = models.ModifyRecordBatchDetail;
const CreateRecordBatchResponse = models.CreateRecordBatchResponse;
const DescribeUserDetailResponse = models.DescribeUserDetailResponse;
const CreateDomainBatchRecord = models.CreateDomainBatchRecord;
const ModifyDomainLockRequest = models.ModifyDomainLockRequest;
const ModifyRecordRemarkResponse = models.ModifyRecordRemarkResponse;
const DescribeDomainListRequest = models.DescribeDomainListRequest;
const DomainCreateInfo = models.DomainCreateInfo;
const DescribeDomainShareInfoResponse = models.DescribeDomainShareInfoResponse;
const DescribeBatchTaskRequest = models.DescribeBatchTaskRequest;
const DescribeDomainPurviewRequest = models.DescribeDomainPurviewRequest;
const ModifyDomainStatusResponse = models.ModifyDomainStatusResponse;
const CreateDomainBatchDetail = models.CreateDomainBatchDetail;
const DescribeRecordRequest = models.DescribeRecordRequest;
const ModifyDomainUnlockRequest = models.ModifyDomainUnlockRequest;
const CreateDomainGroupResponse = models.CreateDomainGroupResponse;
const ModifyDomainLockResponse = models.ModifyDomainLockResponse;
const DescribeDomainResponse = models.DescribeDomainResponse;
const DomainInfo = models.DomainInfo;
const DeleteRecordRequest = models.DeleteRecordRequest;
const CreateDomainAliasResponse = models.CreateDomainAliasResponse;
const DescribeRecordListRequest = models.DescribeRecordListRequest;
const DescribeDomainRequest = models.DescribeDomainRequest;
const DescribeRecordLineListResponse = models.DescribeRecordLineListResponse;
const DescribeRecordResponse = models.DescribeRecordResponse;
const ModifyRecordStatusRequest = models.ModifyRecordStatusRequest;
const ModifyDynamicDNSResponse = models.ModifyDynamicDNSResponse;
const CreateRecordResponse = models.CreateRecordResponse;
const CreateDomainBatchRequest = models.CreateDomainBatchRequest;
const DescribeDomainLogListRequest = models.DescribeDomainLogListRequest;
const DescribeDomainPurviewResponse = models.DescribeDomainPurviewResponse;
const DescribeDomainShareInfoRequest = models.DescribeDomainShareInfoRequest;
const CreateRecordBatchDetail = models.CreateRecordBatchDetail;
const DomainListItem = models.DomainListItem;
const ModifyRecordStatusResponse = models.ModifyRecordStatusResponse;
const LockInfo = models.LockInfo;
const ModifyRecordResponse = models.ModifyRecordResponse;
const PurviewInfo = models.PurviewInfo;
const DescribeRecordTypeResponse = models.DescribeRecordTypeResponse;
const ModifyDomainUnlockResponse = models.ModifyDomainUnlockResponse;
const CreateDomainRequest = models.CreateDomainRequest;
const ModifyRecordBatchResponse = models.ModifyRecordBatchResponse;
const DescribeDomainListResponse = models.DescribeDomainListResponse;
const ModifyDomainRemarkResponse = models.ModifyDomainRemarkResponse;
const ModifyRecordBatchRequest = models.ModifyRecordBatchRequest;
const ModifyDomainRemarkRequest = models.ModifyDomainRemarkRequest;
const DescribeBatchTaskResponse = models.DescribeBatchTaskResponse;
const DeleteRecordResponse = models.DeleteRecordResponse;
const CreateDomainGroupRequest = models.CreateDomainGroupRequest;
const CreateRecordBatchRecord = models.CreateRecordBatchRecord;
const LineInfo = models.LineInfo;
const DeleteDomainResponse = models.DeleteDomainResponse;
const CreateDomainResponse = models.CreateDomainResponse;
const DomainCountInfo = models.DomainCountInfo;
const AddRecordBatch = models.AddRecordBatch;
const ModifyRecordRequest = models.ModifyRecordRequest;
const UserInfo = models.UserInfo;
const RecordCountInfo = models.RecordCountInfo;
const DeleteShareDomainResponse = models.DeleteShareDomainResponse;
const DescribeDomainLogListResponse = models.DescribeDomainLogListResponse;
const CreateDomainAliasRequest = models.CreateDomainAliasRequest;


/**
 * dnspod client
 * @class
 */
class DnspodClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("dnspod.tencentcloudapi.com", "2021-03-23", credential, region, profile);
    }
    
    /**
     * 获取某个域名下的解析记录
     * @param {DescribeRecordListRequest} req
     * @param {function(string, DescribeRecordListResponse):void} cb
     * @public
     */
    DescribeRecordList(req, cb) {
        let resp = new DescribeRecordListResponse();
        this.request("DescribeRecordList", req, resp, cb);
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
     * 修改记录
     * @param {ModifyRecordRequest} req
     * @param {function(string, ModifyRecordResponse):void} cb
     * @public
     */
    ModifyRecord(req, cb) {
        let resp = new ModifyRecordResponse();
        this.request("ModifyRecord", req, resp, cb);
    }


}
module.exports = DnspodClient;
