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
const UploadFileRequest = models.UploadFileRequest;
const UploadFileResponse = models.UploadFileResponse;
const DescribeTaskStatusResponse = models.DescribeTaskStatusResponse;
const DownloadReportRequest = models.DownloadReportRequest;
const ApplyCreditAuditResponse = models.ApplyCreditAuditResponse;
const UploadDataFileResponse = models.UploadDataFileResponse;
const SingleBlackApply = models.SingleBlackApply;
const SingleRecord = models.SingleRecord;
const DownloadRecordListRequest = models.DownloadRecordListRequest;
const DescribeCreditResultResponse = models.DescribeCreditResultResponse;
const DownloadDialogueTextResponse = models.DownloadDialogueTextResponse;
const ApplyBlackListResponse = models.ApplyBlackListResponse;
const DescribeRecordsRequest = models.DescribeRecordsRequest;
const DescribeCreditResultRequest = models.DescribeCreditResultRequest;
const ApplyBlackListRequest = models.ApplyBlackListRequest;
const ApplyCreditAuditRequest = models.ApplyCreditAuditRequest;
const DownloadReportResponse = models.DownloadReportResponse;
const DownloadRecordListResponse = models.DownloadRecordListResponse;
const UploadDataFileRequest = models.UploadDataFileRequest;
const DescribeTaskStatusRequest = models.DescribeTaskStatusRequest;
const DescribeRecordsResponse = models.DescribeRecordsResponse;
const DownloadDialogueTextRequest = models.DownloadDialogueTextRequest;


/**
 * cr client
 * @class
 */
class CrClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("cr.tencentcloudapi.com", "2018-03-21", credential, region, profile);
    }
    
    /**
     * 用于下载当日催收和回访结果报表。当日23:00后，可获取当日催收结果，次日00:30后，可获取昨日回访结果。
     * @param {DownloadReportRequest} req
     * @param {function(string, DownloadReportResponse):void} cb
     * @public
     */
    DownloadReport(req, cb) {
        let resp = new DownloadReportResponse();
        this.request("DownloadReport", req, resp, cb);
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
     * 根据信审任务ID和请求日期，获取相关信审结果。
     * @param {DescribeCreditResultRequest} req
     * @param {function(string, DescribeCreditResultResponse):void} cb
     * @public
     */
    DescribeCreditResult(req, cb) {
        let resp = new DescribeCreditResultResponse();
        this.request("DescribeCreditResult", req, resp, cb);
    }

    /**
     * 用于获取指定案件的对话文本内容，次日早上8:00后可查询前日对话文本内容。
     * @param {DownloadDialogueTextRequest} req
     * @param {function(string, DownloadDialogueTextResponse):void} cb
     * @public
     */
    DownloadDialogueText(req, cb) {
        let resp = new DownloadDialogueTextResponse();
        this.request("DownloadDialogueText", req, resp, cb);
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
     * <p>该接口包含上传下列文件：</p>
<ol style="margin-bottom:10px;">
  <li>到期/逾期提醒文件：用于每天到期/逾期提醒文件的上传</li>
  <li>到期/逾期提醒停拨文件：用于实时上传到期/逾期提醒停拨文件，文件中的清单实时停拨</li>
  <li>回访文件：用于每天贷中回访文件的上传</li>
  <li>回访停拨文件：用于实时上传回访停拨文件，文件中的清单实时停拨</li>
</ol>
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
     * <p>用于获取录音下载链接清单，次日早上8:00后可查询前日录音清单。</p>
<p>注意：录音清单中的录音下载链接仅次日20:00之前有效，请及时下载。</p>
     * @param {DownloadRecordListRequest} req
     * @param {function(string, DownloadRecordListResponse):void} cb
     * @public
     */
    DownloadRecordList(req, cb) {
        let resp = new DownloadRecordListResponse();
        this.request("DownloadRecordList", req, resp, cb);
    }

    /**
     * 提交黑名单后，黑名单中有效期内的号码将停止拨打，适用于到期/逾期提醒、回访场景。
     * @param {ApplyBlackListRequest} req
     * @param {function(string, ApplyBlackListResponse):void} cb
     * @public
     */
    ApplyBlackList(req, cb) {
        let resp = new ApplyBlackListResponse();
        this.request("ApplyBlackList", req, resp, cb);
    }

    /**
     * 提交信审外呼申请，返回当次请求日期。
     * @param {ApplyCreditAuditRequest} req
     * @param {function(string, ApplyCreditAuditResponse):void} cb
     * @public
     */
    ApplyCreditAudit(req, cb) {
        let resp = new ApplyCreditAuditResponse();
        this.request("ApplyCreditAudit", req, resp, cb);
    }


}
module.exports = CrClient;
