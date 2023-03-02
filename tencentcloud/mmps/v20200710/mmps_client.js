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
const DescribeFlySecMiniAppReportUrlRequest = models.DescribeFlySecMiniAppReportUrlRequest;
const DescribeScanTaskListRequest = models.DescribeScanTaskListRequest;
const DescribeFlySecMiniAppScanTaskParamRequest = models.DescribeFlySecMiniAppScanTaskParamRequest;
const ResourceUsageInfoData = models.ResourceUsageInfoData;
const CreateAppScanTaskRequest = models.CreateAppScanTaskRequest;
const FlySecMiniAppRiskItems = models.FlySecMiniAppRiskItems;
const DescribeScanTaskStatusRequest = models.DescribeScanTaskStatusRequest;
const DescribeBasicDiagnosisResourceUsageInfoResponse = models.DescribeBasicDiagnosisResourceUsageInfoResponse;
const CreateAppScanTaskRepeatResponse = models.CreateAppScanTaskRepeatResponse;
const DescribeBasicDiagnosisResourceUsageInfoRequest = models.DescribeBasicDiagnosisResourceUsageInfoRequest;
const DescribeResourceUsageInfoResponse = models.DescribeResourceUsageInfoResponse;
const DescribeScanTaskReportUrlResponse = models.DescribeScanTaskReportUrlResponse;
const DescribeFlySecMiniAppScanTaskStatusRequest = models.DescribeFlySecMiniAppScanTaskStatusRequest;
const CreateFlySecMiniAppScanTaskResponse = models.CreateFlySecMiniAppScanTaskResponse;
const CreateFlySecMiniAppProfessionalScanTaskRequest = models.CreateFlySecMiniAppProfessionalScanTaskRequest;
const CreateFlySecMiniAppProfessionalScanTaskResponse = models.CreateFlySecMiniAppProfessionalScanTaskResponse;
const DescribeFlySecMiniAppScanTaskListRequest = models.DescribeFlySecMiniAppScanTaskListRequest;
const DescribeFlySecMiniAppScanReportListRequest = models.DescribeFlySecMiniAppScanReportListRequest;
const DescribeFlySecMiniAppScanTaskParamResponse = models.DescribeFlySecMiniAppScanTaskParamResponse;
const CreateFlySecMiniAppScanTaskRepeatRequest = models.CreateFlySecMiniAppScanTaskRepeatRequest;
const CreateFlySecMiniAppScanTaskRequest = models.CreateFlySecMiniAppScanTaskRequest;
const CreateAppScanTaskRepeatRequest = models.CreateAppScanTaskRepeatRequest;
const DescribeScanTaskReportUrlRequest = models.DescribeScanTaskReportUrlRequest;
const TaskFlowStepsInfo = models.TaskFlowStepsInfo;
const DescribeFlySecMiniAppScanTaskListResponse = models.DescribeFlySecMiniAppScanTaskListResponse;
const FlySecMiniAppTaskData = models.FlySecMiniAppTaskData;
const CreateAppScanTaskResponse = models.CreateAppScanTaskResponse;
const DescribeFlySecMiniAppReportUrlResponse = models.DescribeFlySecMiniAppReportUrlResponse;
const DescribeScanTaskListResponse = models.DescribeScanTaskListResponse;
const AppInfoItem = models.AppInfoItem;
const DescribeFlySecMiniAppScanTaskStatusResponse = models.DescribeFlySecMiniAppScanTaskStatusResponse;
const DescribeFlySecMiniAppScanReportListResponse = models.DescribeFlySecMiniAppScanReportListResponse;
const CreateFlySecMiniAppScanTaskRepeatResponse = models.CreateFlySecMiniAppScanTaskRepeatResponse;
const DescribeScanTaskStatusResponse = models.DescribeScanTaskStatusResponse;
const AppTaskData = models.AppTaskData;
const FlySecMiniAppReportData = models.FlySecMiniAppReportData;
const DescribeResourceUsageInfoRequest = models.DescribeResourceUsageInfoRequest;


/**
 * mmps client
 * @class
 */
class MmpsClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("mmps.tencentcloudapi.com", "2020-07-10", credential, region, profile);
    }
    
    /**
     * 创建小程序隐私合规诊断任务
     * @param {CreateAppScanTaskRequest} req
     * @param {function(string, CreateAppScanTaskResponse):void} cb
     * @public
     */
    CreateAppScanTask(req, cb) {
        let resp = new CreateAppScanTaskResponse();
        this.request("CreateAppScanTask", req, resp, cb);
    }

    /**
     * 创建小程序安全深度诊断任务
     * @param {CreateFlySecMiniAppProfessionalScanTaskRequest} req
     * @param {function(string, CreateFlySecMiniAppProfessionalScanTaskResponse):void} cb
     * @public
     */
    CreateFlySecMiniAppProfessionalScanTask(req, cb) {
        let resp = new CreateFlySecMiniAppProfessionalScanTaskResponse();
        this.request("CreateFlySecMiniAppProfessionalScanTask", req, resp, cb);
    }

    /**
     * 查询指定小程序版本的翼扬诊断安全得分
     * @param {DescribeFlySecMiniAppScanReportListRequest} req
     * @param {function(string, DescribeFlySecMiniAppScanReportListResponse):void} cb
     * @public
     */
    DescribeFlySecMiniAppScanReportList(req, cb) {
        let resp = new DescribeFlySecMiniAppScanReportListResponse();
        this.request("DescribeFlySecMiniAppScanReportList", req, resp, cb);
    }

    /**
     * 获取翼扬诊断任务报告链接地址
     * @param {DescribeFlySecMiniAppReportUrlRequest} req
     * @param {function(string, DescribeFlySecMiniAppReportUrlResponse):void} cb
     * @public
     */
    DescribeFlySecMiniAppReportUrl(req, cb) {
        let resp = new DescribeFlySecMiniAppReportUrlResponse();
        this.request("DescribeFlySecMiniAppReportUrl", req, resp, cb);
    }

    /**
     * 查询翼扬安全诊断任务状态
     * @param {DescribeFlySecMiniAppScanTaskStatusRequest} req
     * @param {function(string, DescribeFlySecMiniAppScanTaskStatusResponse):void} cb
     * @public
     */
    DescribeFlySecMiniAppScanTaskStatus(req, cb) {
        let resp = new DescribeFlySecMiniAppScanTaskStatusResponse();
        this.request("DescribeFlySecMiniAppScanTaskStatus", req, resp, cb);
    }

    /**
     * 查询翼扬安全资源使用情况
     * @param {DescribeResourceUsageInfoRequest} req
     * @param {function(string, DescribeResourceUsageInfoResponse):void} cb
     * @public
     */
    DescribeResourceUsageInfo(req, cb) {
        let resp = new DescribeResourceUsageInfoResponse();
        this.request("DescribeResourceUsageInfo", req, resp, cb);
    }

    /**
     * 创建小程序翼扬安全的基础或深度诊断任务
     * @param {CreateFlySecMiniAppScanTaskRequest} req
     * @param {function(string, CreateFlySecMiniAppScanTaskResponse):void} cb
     * @public
     */
    CreateFlySecMiniAppScanTask(req, cb) {
        let resp = new CreateFlySecMiniAppScanTaskResponse();
        this.request("CreateFlySecMiniAppScanTask", req, resp, cb);
    }

    /**
     * 重新提交基础诊断任务
     * @param {CreateFlySecMiniAppScanTaskRepeatRequest} req
     * @param {function(string, CreateFlySecMiniAppScanTaskRepeatResponse):void} cb
     * @public
     */
    CreateFlySecMiniAppScanTaskRepeat(req, cb) {
        let resp = new CreateFlySecMiniAppScanTaskRepeatResponse();
        this.request("CreateFlySecMiniAppScanTaskRepeat", req, resp, cb);
    }

    /**
     * 获取小程序合规诊断任务报告url
     * @param {DescribeScanTaskReportUrlRequest} req
     * @param {function(string, DescribeScanTaskReportUrlResponse):void} cb
     * @public
     */
    DescribeScanTaskReportUrl(req, cb) {
        let resp = new DescribeScanTaskReportUrlResponse();
        this.request("DescribeScanTaskReportUrl", req, resp, cb);
    }

    /**
     * 获取小程序隐私合规诊断任务列表
     * @param {DescribeScanTaskListRequest} req
     * @param {function(string, DescribeScanTaskListResponse):void} cb
     * @public
     */
    DescribeScanTaskList(req, cb) {
        let resp = new DescribeScanTaskListResponse();
        this.request("DescribeScanTaskList", req, resp, cb);
    }

    /**
     * 获取翼扬安全诊断任务列表
     * @param {DescribeFlySecMiniAppScanTaskListRequest} req
     * @param {function(string, DescribeFlySecMiniAppScanTaskListResponse):void} cb
     * @public
     */
    DescribeFlySecMiniAppScanTaskList(req, cb) {
        let resp = new DescribeFlySecMiniAppScanTaskListResponse();
        this.request("DescribeFlySecMiniAppScanTaskList", req, resp, cb);
    }

    /**
     * 查询小程序隐私合规诊断任务状态
     * @param {DescribeScanTaskStatusRequest} req
     * @param {function(string, DescribeScanTaskStatusResponse):void} cb
     * @public
     */
    DescribeScanTaskStatus(req, cb) {
        let resp = new DescribeScanTaskStatusResponse();
        this.request("DescribeScanTaskStatus", req, resp, cb);
    }

    /**
     * 查询翼扬安全基础诊断资源使用情况
     * @param {DescribeBasicDiagnosisResourceUsageInfoRequest} req
     * @param {function(string, DescribeBasicDiagnosisResourceUsageInfoResponse):void} cb
     * @public
     */
    DescribeBasicDiagnosisResourceUsageInfo(req, cb) {
        let resp = new DescribeBasicDiagnosisResourceUsageInfoResponse();
        this.request("DescribeBasicDiagnosisResourceUsageInfo", req, resp, cb);
    }

    /**
     * 小程序隐私合规诊断重试任务
     * @param {CreateAppScanTaskRepeatRequest} req
     * @param {function(string, CreateAppScanTaskRepeatResponse):void} cb
     * @public
     */
    CreateAppScanTaskRepeat(req, cb) {
        let resp = new CreateAppScanTaskRepeatResponse();
        this.request("CreateAppScanTaskRepeat", req, resp, cb);
    }

    /**
     * 获取用户提交的基础诊断任务参数信息
     * @param {DescribeFlySecMiniAppScanTaskParamRequest} req
     * @param {function(string, DescribeFlySecMiniAppScanTaskParamResponse):void} cb
     * @public
     */
    DescribeFlySecMiniAppScanTaskParam(req, cb) {
        let resp = new DescribeFlySecMiniAppScanTaskParamResponse();
        this.request("DescribeFlySecMiniAppScanTaskParam", req, resp, cb);
    }


}
module.exports = MmpsClient;
