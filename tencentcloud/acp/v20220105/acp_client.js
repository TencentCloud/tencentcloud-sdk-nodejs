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
const CreateAppScanTaskRepeatRequest = models.CreateAppScanTaskRepeatRequest;
const DescribeScanTaskListResponse = models.DescribeScanTaskListResponse;
const AppInfoItem = models.AppInfoItem;
const DescribeResourceUsageInfoResponse = models.DescribeResourceUsageInfoResponse;
const DescribeScanTaskListRequest = models.DescribeScanTaskListRequest;
const ResourceUsageInfoData = models.ResourceUsageInfoData;
const TaskFlowStepsInfo = models.TaskFlowStepsInfo;
const CreateAppScanTaskRequest = models.CreateAppScanTaskRequest;
const DescribeChannelTaskReportUrlResponse = models.DescribeChannelTaskReportUrlResponse;
const DescribeFileTicketResponse = models.DescribeFileTicketResponse;
const DescribeScanTaskStatusResponse = models.DescribeScanTaskStatusResponse;
const DescribeScanTaskReportUrlRequest = models.DescribeScanTaskReportUrlRequest;
const DescribeChannelTaskReportUrlRequest = models.DescribeChannelTaskReportUrlRequest;
const AppTaskData = models.AppTaskData;
const DescribeScanTaskStatusRequest = models.DescribeScanTaskStatusRequest;
const DescribeFileTicketRequest = models.DescribeFileTicketRequest;
const CreateAppScanTaskResponse = models.CreateAppScanTaskResponse;
const DescribeResourceUsageInfoRequest = models.DescribeResourceUsageInfoRequest;
const DescribeScanTaskReportUrlResponse = models.DescribeScanTaskReportUrlResponse;
const CreateAppScanTaskRepeatResponse = models.CreateAppScanTaskRepeatResponse;


/**
 * acp client
 * @class
 */
class AcpClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("acp.tencentcloudapi.com", "2022-01-05", credential, region, profile);
    }
    
    /**
     * 创建应用合规隐私诊断任务
     * @param {CreateAppScanTaskRequest} req
     * @param {function(string, CreateAppScanTaskResponse):void} cb
     * @public
     */
    CreateAppScanTask(req, cb) {
        let resp = new CreateAppScanTaskResponse();
        this.request("CreateAppScanTask", req, resp, cb);
    }

    /**
     * App应用合规隐私诊断重试任务
     * @param {CreateAppScanTaskRepeatRequest} req
     * @param {function(string, CreateAppScanTaskRepeatResponse):void} cb
     * @public
     */
    CreateAppScanTaskRepeat(req, cb) {
        let resp = new CreateAppScanTaskRepeatResponse();
        this.request("CreateAppScanTaskRepeat", req, resp, cb);
    }

    /**
     * 获取子渠道的App合规诊断任务报告url
     * @param {DescribeChannelTaskReportUrlRequest} req
     * @param {function(string, DescribeChannelTaskReportUrlResponse):void} cb
     * @public
     */
    DescribeChannelTaskReportUrl(req, cb) {
        let resp = new DescribeChannelTaskReportUrlResponse();
        this.request("DescribeChannelTaskReportUrl", req, resp, cb);
    }

    /**
     * 查询应用合规平台用户资源的使用情况
     * @param {DescribeResourceUsageInfoRequest} req
     * @param {function(string, DescribeResourceUsageInfoResponse):void} cb
     * @public
     */
    DescribeResourceUsageInfo(req, cb) {
        let resp = new DescribeResourceUsageInfoResponse();
        this.request("DescribeResourceUsageInfo", req, resp, cb);
    }

    /**
     * 查询App隐私合规诊断任务状态
     * @param {DescribeScanTaskStatusRequest} req
     * @param {function(string, DescribeScanTaskStatusResponse):void} cb
     * @public
     */
    DescribeScanTaskStatus(req, cb) {
        let resp = new DescribeScanTaskStatusResponse();
        this.request("DescribeScanTaskStatus", req, resp, cb);
    }

    /**
     * 获取App合规诊断任务报告url
     * @param {DescribeScanTaskReportUrlRequest} req
     * @param {function(string, DescribeScanTaskReportUrlResponse):void} cb
     * @public
     */
    DescribeScanTaskReportUrl(req, cb) {
        let resp = new DescribeScanTaskReportUrlResponse();
        this.request("DescribeScanTaskReportUrl", req, resp, cb);
    }

    /**
     * 获取应用合规文件上传凭证，用于上传诊断文件
     * @param {DescribeFileTicketRequest} req
     * @param {function(string, DescribeFileTicketResponse):void} cb
     * @public
     */
    DescribeFileTicket(req, cb) {
        let resp = new DescribeFileTicketResponse();
        this.request("DescribeFileTicket", req, resp, cb);
    }

    /**
     * 获取App隐私合规诊断任务列表
     * @param {DescribeScanTaskListRequest} req
     * @param {function(string, DescribeScanTaskListResponse):void} cb
     * @public
     */
    DescribeScanTaskList(req, cb) {
        let resp = new DescribeScanTaskListResponse();
        this.request("DescribeScanTaskList", req, resp, cb);
    }


}
module.exports = AcpClient;
