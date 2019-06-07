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
const InquireAuditCreditResponse = models.InquireAuditCreditResponse;
const StopLoggingRequest = models.StopLoggingRequest;
const CmqRegionInfo = models.CmqRegionInfo;
const GetAttributeKeyRequest = models.GetAttributeKeyRequest;
const DeleteAuditResponse = models.DeleteAuditResponse;
const UpdateAuditRequest = models.UpdateAuditRequest;
const InquireAuditCreditRequest = models.InquireAuditCreditRequest;
const ListAuditsRequest = models.ListAuditsRequest;
const LookUpEventsRequest = models.LookUpEventsRequest;
const StartLoggingRequest = models.StartLoggingRequest;
const CreateAuditResponse = models.CreateAuditResponse;
const StartLoggingResponse = models.StartLoggingResponse;
const AttributeKeyDetail = models.AttributeKeyDetail;
const ListCosEnableRegionRequest = models.ListCosEnableRegionRequest;
const Resource = models.Resource;
const ListCosEnableRegionResponse = models.ListCosEnableRegionResponse;
const StopLoggingResponse = models.StopLoggingResponse;
const LookupAttribute = models.LookupAttribute;
const ListAuditsResponse = models.ListAuditsResponse;
const UpdateAuditResponse = models.UpdateAuditResponse;
const DescribeAuditRequest = models.DescribeAuditRequest;
const CreateAuditRequest = models.CreateAuditRequest;
const DeleteAuditRequest = models.DeleteAuditRequest;
const ListCmqEnableRegionRequest = models.ListCmqEnableRegionRequest;
const GetAttributeKeyResponse = models.GetAttributeKeyResponse;
const ListCmqEnableRegionResponse = models.ListCmqEnableRegionResponse;
const LookUpEventsResponse = models.LookUpEventsResponse;
const CosRegionInfo = models.CosRegionInfo;
const DescribeAuditResponse = models.DescribeAuditResponse;
const Event = models.Event;
const AuditSummary = models.AuditSummary;


/**
 * cloudaudit client
 * @class
 */
class CloudauditClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("cloudaudit.tencentcloudapi.com", "2019-03-19", credential, region, profile);
    }
    
    /**
     * 开启跟踪集
     * @param {StartLoggingRequest} req
     * @param {function(string, StartLoggingResponse):void} cb
     * @public
     */
    StartLogging(req, cb) {
        let resp = new StartLoggingResponse();
        this.request("StartLogging", req, resp, cb);
    }

    /**
     * 查询AttributeKey的有效取值范围
     * @param {GetAttributeKeyRequest} req
     * @param {function(string, GetAttributeKeyResponse):void} cb
     * @public
     */
    GetAttributeKey(req, cb) {
        let resp = new GetAttributeKeyResponse();
        this.request("GetAttributeKey", req, resp, cb);
    }

    /**
     * 查询云审计支持的cmq的可用区
     * @param {ListCmqEnableRegionRequest} req
     * @param {function(string, ListCmqEnableRegionResponse):void} cb
     * @public
     */
    ListCmqEnableRegion(req, cb) {
        let resp = new ListCmqEnableRegionResponse();
        this.request("ListCmqEnableRegion", req, resp, cb);
    }

    /**
     * 删除跟踪集
     * @param {DeleteAuditRequest} req
     * @param {function(string, DeleteAuditResponse):void} cb
     * @public
     */
    DeleteAudit(req, cb) {
        let resp = new DeleteAuditResponse();
        this.request("DeleteAudit", req, resp, cb);
    }

    /**
     * 关闭跟踪集
     * @param {StopLoggingRequest} req
     * @param {function(string, StopLoggingResponse):void} cb
     * @public
     */
    StopLogging(req, cb) {
        let resp = new StopLoggingResponse();
        this.request("StopLogging", req, resp, cb);
    }

    /**
     * 查询用户可创建跟踪集的数量
     * @param {InquireAuditCreditRequest} req
     * @param {function(string, InquireAuditCreditResponse):void} cb
     * @public
     */
    InquireAuditCredit(req, cb) {
        let resp = new InquireAuditCreditResponse();
        this.request("InquireAuditCredit", req, resp, cb);
    }

    /**
     * 参数要求：
1、如果IsCreateNewBucket的值存在的话，cosRegion和cosBucketName都是必填参数。
2、如果IsEnableCmqNotify的值是1的话，IsCreateNewQueue、CmqRegion和CmqQueueName都是必填参数。
3、如果IsEnableCmqNotify的值是0的话，IsCreateNewQueue、CmqRegion和CmqQueueName都不能传。
     * @param {UpdateAuditRequest} req
     * @param {function(string, UpdateAuditResponse):void} cb
     * @public
     */
    UpdateAudit(req, cb) {
        let resp = new UpdateAuditResponse();
        this.request("UpdateAudit", req, resp, cb);
    }

    /**
     * 查询跟踪集详情
     * @param {DescribeAuditRequest} req
     * @param {function(string, DescribeAuditResponse):void} cb
     * @public
     */
    DescribeAudit(req, cb) {
        let resp = new DescribeAuditResponse();
        this.request("DescribeAudit", req, resp, cb);
    }

    /**
     * 创建跟踪集
     * @param {CreateAuditRequest} req
     * @param {function(string, CreateAuditResponse):void} cb
     * @public
     */
    CreateAudit(req, cb) {
        let resp = new CreateAuditResponse();
        this.request("CreateAudit", req, resp, cb);
    }

    /**
     * 查询云审计支持的cos可用区
     * @param {ListCosEnableRegionRequest} req
     * @param {function(string, ListCosEnableRegionResponse):void} cb
     * @public
     */
    ListCosEnableRegion(req, cb) {
        let resp = new ListCosEnableRegionResponse();
        this.request("ListCosEnableRegion", req, resp, cb);
    }

    /**
     * 用于对操作日志进行检索，便于用户进行查询相关的操作信息。
     * @param {LookUpEventsRequest} req
     * @param {function(string, LookUpEventsResponse):void} cb
     * @public
     */
    LookUpEvents(req, cb) {
        let resp = new LookUpEventsResponse();
        this.request("LookUpEvents", req, resp, cb);
    }

    /**
     * 查询跟踪集概要
     * @param {ListAuditsRequest} req
     * @param {function(string, ListAuditsResponse):void} cb
     * @public
     */
    ListAudits(req, cb) {
        let resp = new ListAuditsResponse();
        this.request("ListAudits", req, resp, cb);
    }


}
module.exports = CloudauditClient;
