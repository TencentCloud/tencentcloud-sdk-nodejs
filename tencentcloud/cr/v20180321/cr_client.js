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
const ApplyBlackListRequest = models.ApplyBlackListRequest;
const DownloadReportResponse = models.DownloadReportResponse;
const UploadFileResponse = models.UploadFileResponse;
const ApplyBlackListResponse = models.ApplyBlackListResponse;
const DescribeRecordsRequest = models.DescribeRecordsRequest;
const DescribeTaskStatusResponse = models.DescribeTaskStatusResponse;
const UploadFileRequest = models.UploadFileRequest;
const DownloadReportRequest = models.DownloadReportRequest;
const DescribeRecordsResponse = models.DescribeRecordsResponse;
const UploadDataFileResponse = models.UploadDataFileResponse;
const SingleBlackApply = models.SingleBlackApply;
const UploadDataFileRequest = models.UploadDataFileRequest;
const SingleRecord = models.SingleRecord;


/**
 * cr client
 * @class
 */
class CrClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("cr.tencentcloudapi.com", "2018-03-21", credential, region, profile);
    }
    
    /**
     * 用于下载当日催收结果报表，当日23:00后，可获取当日催收结果。
     * @param {DownloadReportRequest} req
     * @param {function(string, DownloadReportResponse):void} cb
     * @public
     */
    DownloadReport(req, cb) {
        let resp = new DownloadReportResponse();
        this.request("DownloadReport", req, resp, cb);
    }

    /**
     * 用于获取指定案件的录音地址，次日早上8:00后可查询前日录音。
     * @param {DescribeRecordsRequest} req
     * @param {function(string, DescribeRecordsResponse):void} cb
     * @public
     */
    DescribeRecords(req, cb) {
        let resp = new DescribeRecordsResponse();
        this.request("DescribeRecords", req, resp, cb);
    }

    /**
     * 客户通过调用该接口上传需催收文档，格式需为excel格式。接口返回任务ID。
     * @param {UploadFileRequest} req
     * @param {function(string, UploadFileResponse):void} cb
     * @public
     */
    UploadFile(req, cb) {
        let resp = new UploadFileResponse();
        this.request("UploadFile", req, resp, cb);
    }

    /**
     * 根据上传文件接口的输出参数DataResId，获取相关上传结果。
     * @param {DescribeTaskStatusRequest} req
     * @param {function(string, DescribeTaskStatusResponse):void} cb
     * @public
     */
    DescribeTaskStatus(req, cb) {
        let resp = new DescribeTaskStatusResponse();
        this.request("DescribeTaskStatus", req, resp, cb);
    }

    /**
     * 该接口包含上传：
1、入催文件 — 用于每天入催文件的上传；
2、还款文件 — 实时上传当前已还款客户，用于还款客户的实时停催；
接口返回数据任务ID，支持xlsx、xls、csv、zip格式，文档大小不超过50MB。
     * @param {UploadDataFileRequest} req
     * @param {function(string, UploadDataFileResponse):void} cb
     * @public
     */
    UploadDataFile(req, cb) {
        let resp = new UploadDataFileResponse();
        let options = {
            multipart: true
        };
        this.request("UploadDataFile", req, resp, cb);
    }

    /**
     * 加入黑名单的客户，将停止拨打。用于：
将客户进行黑名单的增加和移除，用于对某些客户阶段性停催。

     * @param {ApplyBlackListRequest} req
     * @param {function(string, ApplyBlackListResponse):void} cb
     * @public
     */
    ApplyBlackList(req, cb) {
        let resp = new ApplyBlackListResponse();
        this.request("ApplyBlackList", req, resp, cb);
    }


}
module.exports = CrClient;
