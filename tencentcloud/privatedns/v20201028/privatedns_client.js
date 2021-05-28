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
const ModifyPrivateZoneVpcRequest = models.ModifyPrivateZoneVpcRequest;
const DescribeAuditLogResponse = models.DescribeAuditLogResponse;
const DescribePrivateZoneRecordListRequest = models.DescribePrivateZoneRecordListRequest;
const DescribePrivateZoneRequest = models.DescribePrivateZoneRequest;
const DatePoint = models.DatePoint;
const PrivateZoneRecord = models.PrivateZoneRecord;
const AuditLogInfo = models.AuditLogInfo;
const DescribeRequestDataRequest = models.DescribeRequestDataRequest;
const ModifyPrivateZoneRecordResponse = models.ModifyPrivateZoneRecordResponse;
const DescribePrivateZoneRecordListResponse = models.DescribePrivateZoneRecordListResponse;
const DescribeRequestDataResponse = models.DescribeRequestDataResponse;
const ModifyPrivateZoneRequest = models.ModifyPrivateZoneRequest;
const TagInfo = models.TagInfo;
const CreatePrivateZoneRequest = models.CreatePrivateZoneRequest;
const ModifyPrivateZoneResponse = models.ModifyPrivateZoneResponse;
const CreatePrivateZoneResponse = models.CreatePrivateZoneResponse;
const SubscribePrivateZoneServiceRequest = models.SubscribePrivateZoneServiceRequest;
const DescribePrivateZoneResponse = models.DescribePrivateZoneResponse;
const DescribePrivateZoneListRequest = models.DescribePrivateZoneListRequest;
const DescribeDashboardResponse = models.DescribeDashboardResponse;
const CreatePrivateZoneRecordResponse = models.CreatePrivateZoneRecordResponse;
const DescribePrivateZoneServiceResponse = models.DescribePrivateZoneServiceResponse;
const VpcInfo = models.VpcInfo;
const DescribeAuditLogRequest = models.DescribeAuditLogRequest;
const DescribeDashboardRequest = models.DescribeDashboardRequest;
const DeletePrivateZoneRequest = models.DeletePrivateZoneRequest;
const AuditLog = models.AuditLog;
const SubscribePrivateZoneServiceResponse = models.SubscribePrivateZoneServiceResponse;
const DeletePrivateZoneRecordRequest = models.DeletePrivateZoneRecordRequest;
const Filter = models.Filter;
const DeletePrivateZoneResponse = models.DeletePrivateZoneResponse;
const DescribePrivateZoneListResponse = models.DescribePrivateZoneListResponse;
const MetricData = models.MetricData;
const DescribePrivateZoneServiceRequest = models.DescribePrivateZoneServiceRequest;
const PrivateZone = models.PrivateZone;
const CreatePrivateZoneRecordRequest = models.CreatePrivateZoneRecordRequest;
const ModifyPrivateZoneRecordRequest = models.ModifyPrivateZoneRecordRequest;
const FlowUsage = models.FlowUsage;
const DeletePrivateZoneRecordResponse = models.DeletePrivateZoneRecordResponse;
const ModifyPrivateZoneVpcResponse = models.ModifyPrivateZoneVpcResponse;


/**
 * privatedns client
 * @class
 */
class PrivatednsClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("privatedns.tencentcloudapi.com", "2020-10-28", credential, region, profile);
    }
    
    /**
     * 获取私有域信息
     * @param {DescribePrivateZoneRequest} req
     * @param {function(string, DescribePrivateZoneResponse):void} cb
     * @public
     */
    DescribePrivateZone(req, cb) {
        let resp = new DescribePrivateZoneResponse();
        this.request("DescribePrivateZone", req, resp, cb);
    }

    /**
     * 修改私有域解析记录
     * @param {ModifyPrivateZoneRecordRequest} req
     * @param {function(string, ModifyPrivateZoneRecordResponse):void} cb
     * @public
     */
    ModifyPrivateZoneRecord(req, cb) {
        let resp = new ModifyPrivateZoneRecordResponse();
        this.request("ModifyPrivateZoneRecord", req, resp, cb);
    }

    /**
     * 获取私有域记录列表
     * @param {DescribePrivateZoneRecordListRequest} req
     * @param {function(string, DescribePrivateZoneRecordListResponse):void} cb
     * @public
     */
    DescribePrivateZoneRecordList(req, cb) {
        let resp = new DescribePrivateZoneRecordListResponse();
        this.request("DescribePrivateZoneRecordList", req, resp, cb);
    }

    /**
     * 查询私有域解析开通状态
     * @param {DescribePrivateZoneServiceRequest} req
     * @param {function(string, DescribePrivateZoneServiceResponse):void} cb
     * @public
     */
    DescribePrivateZoneService(req, cb) {
        let resp = new DescribePrivateZoneServiceResponse();
        this.request("DescribePrivateZoneService", req, resp, cb);
    }

    /**
     * 获取操作日志列表
     * @param {DescribeAuditLogRequest} req
     * @param {function(string, DescribeAuditLogResponse):void} cb
     * @public
     */
    DescribeAuditLog(req, cb) {
        let resp = new DescribeAuditLogResponse();
        this.request("DescribeAuditLog", req, resp, cb);
    }

    /**
     * 添加私有域解析记录
     * @param {CreatePrivateZoneRecordRequest} req
     * @param {function(string, CreatePrivateZoneRecordResponse):void} cb
     * @public
     */
    CreatePrivateZoneRecord(req, cb) {
        let resp = new CreatePrivateZoneRecordResponse();
        this.request("CreatePrivateZoneRecord", req, resp, cb);
    }

    /**
     * 创建私有域
     * @param {CreatePrivateZoneRequest} req
     * @param {function(string, CreatePrivateZoneResponse):void} cb
     * @public
     */
    CreatePrivateZone(req, cb) {
        let resp = new CreatePrivateZoneResponse();
        this.request("CreatePrivateZone", req, resp, cb);
    }

    /**
     * 获取私有域列表
     * @param {DescribePrivateZoneListRequest} req
     * @param {function(string, DescribePrivateZoneListResponse):void} cb
     * @public
     */
    DescribePrivateZoneList(req, cb) {
        let resp = new DescribePrivateZoneListResponse();
        this.request("DescribePrivateZoneList", req, resp, cb);
    }

    /**
     * 开通私有域解析
     * @param {SubscribePrivateZoneServiceRequest} req
     * @param {function(string, SubscribePrivateZoneServiceResponse):void} cb
     * @public
     */
    SubscribePrivateZoneService(req, cb) {
        let resp = new SubscribePrivateZoneServiceResponse();
        this.request("SubscribePrivateZoneService", req, resp, cb);
    }

    /**
     * 获取私有域解析概览
     * @param {DescribeDashboardRequest} req
     * @param {function(string, DescribeDashboardResponse):void} cb
     * @public
     */
    DescribeDashboard(req, cb) {
        let resp = new DescribeDashboardResponse();
        this.request("DescribeDashboard", req, resp, cb);
    }

    /**
     * 修改私有域关联的VPC
     * @param {ModifyPrivateZoneVpcRequest} req
     * @param {function(string, ModifyPrivateZoneVpcResponse):void} cb
     * @public
     */
    ModifyPrivateZoneVpc(req, cb) {
        let resp = new ModifyPrivateZoneVpcResponse();
        this.request("ModifyPrivateZoneVpc", req, resp, cb);
    }

    /**
     * 获取私有域解析请求量
     * @param {DescribeRequestDataRequest} req
     * @param {function(string, DescribeRequestDataResponse):void} cb
     * @public
     */
    DescribeRequestData(req, cb) {
        let resp = new DescribeRequestDataResponse();
        this.request("DescribeRequestData", req, resp, cb);
    }

    /**
     * 删除私有域解析记录
     * @param {DeletePrivateZoneRecordRequest} req
     * @param {function(string, DeletePrivateZoneRecordResponse):void} cb
     * @public
     */
    DeletePrivateZoneRecord(req, cb) {
        let resp = new DeletePrivateZoneRecordResponse();
        this.request("DeletePrivateZoneRecord", req, resp, cb);
    }

    /**
     * 删除私有域并停止解析
     * @param {DeletePrivateZoneRequest} req
     * @param {function(string, DeletePrivateZoneResponse):void} cb
     * @public
     */
    DeletePrivateZone(req, cb) {
        let resp = new DeletePrivateZoneResponse();
        this.request("DeletePrivateZone", req, resp, cb);
    }

    /**
     * 修改私有域信息
     * @param {ModifyPrivateZoneRequest} req
     * @param {function(string, ModifyPrivateZoneResponse):void} cb
     * @public
     */
    ModifyPrivateZone(req, cb) {
        let resp = new ModifyPrivateZoneResponse();
        this.request("ModifyPrivateZone", req, resp, cb);
    }


}
module.exports = PrivatednsClient;
