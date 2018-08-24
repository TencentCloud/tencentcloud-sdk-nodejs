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
const DescribeTaskStatusRequest = models.DescribeTaskStatusRequest;
const DownloadReportResponse = models.DownloadReportResponse;
const UploadFileResponse = models.UploadFileResponse;
const DescribeTaskStatusResponse = models.DescribeTaskStatusResponse;
const UploadFileRequest = models.UploadFileRequest;
const DownloadReportRequest = models.DownloadReportRequest;


/**
 * cr client
 * @class
 */
class CrClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("cr.tencentcloudapi.com", "2018-03-21", credential, region, profile);
    }
    
    /**
     * 客户调用该接口下载指定日期的催收报告
     * @param {DownloadReportRequest} req
     * @param {function(string, DownloadReportResponse):void} cb
     * @public
     */
    DownloadReport(req, cb) {
        let resp = new DownloadReportResponse();
        this.request("DownloadReport", req, resp, cb);
    }

    /**
     * 客户调用该接口查看任务执行状态。输入任务ID，输出任务执行状态或者结果
     * @param {DescribeTaskStatusRequest} req
     * @param {function(string, DescribeTaskStatusResponse):void} cb
     * @public
     */
    DescribeTaskStatus(req, cb) {
        let resp = new DescribeTaskStatusResponse();
        this.request("DescribeTaskStatus", req, resp, cb);
    }

    /**
     * 客户通过调用该接口上传需催收文档，格式需为csv或者excel格式。接口返回任务ID。
     * @param {UploadFileRequest} req
     * @param {function(string, UploadFileResponse):void} cb
     * @public
     */
    UploadFile(req, cb) {
        let resp = new UploadFileResponse();
        this.request("UploadFile", req, resp, cb);
    }


}
module.exports = CrClient;
