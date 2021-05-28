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
const QueryCallListRequest = models.QueryCallListRequest;
const CreateBotTaskRequest = models.CreateBotTaskRequest;
const ChangeBotTaskStatusResponse = models.ChangeBotTaskStatusResponse;
const UploadFileRequest = models.UploadFileRequest;
const BotFlow = models.BotFlow;
const UploadFileResponse = models.UploadFileResponse;
const UploadDataJsonResponse = models.UploadDataJsonResponse;
const DescribeBotFlowResponse = models.DescribeBotFlowResponse;
const DescribeTaskStatusResponse = models.DescribeTaskStatusResponse;
const QueryBlackListDataRequest = models.QueryBlackListDataRequest;
const DownloadBotRecordRequest = models.DownloadBotRecordRequest;
const DownloadReportRequest = models.DownloadReportRequest;
const ApplyCreditAuditResponse = models.ApplyCreditAuditResponse;
const UploadDataFileResponse = models.UploadDataFileResponse;
const DownloadRecordListRequest = models.DownloadRecordListRequest;
const CallInfo = models.CallInfo;
const BotFileData = models.BotFileData;
const DescribeFileModelRequest = models.DescribeFileModelRequest;
const QueryInstantDataResponse = models.QueryInstantDataResponse;
const CallTimeDict = models.CallTimeDict;
const UploadBotFileResponse = models.UploadBotFileResponse;
const QueryBlackListDataResponse = models.QueryBlackListDataResponse;
const CallTimeInfo = models.CallTimeInfo;
const BlackListData = models.BlackListData;
const DescribeCreditResultResponse = models.DescribeCreditResultResponse;
const UploadBotDataRequest = models.UploadBotDataRequest;
const DownloadDialogueTextResponse = models.DownloadDialogueTextResponse;
const DescribeBotFlowRequest = models.DescribeBotFlowRequest;
const SingleBlackApply = models.SingleBlackApply;
const BotInfo = models.BotInfo;
const ApplyBlackListResponse = models.ApplyBlackListResponse;
const DescribeRecordsRequest = models.DescribeRecordsRequest;
const QueryBotListRequest = models.QueryBotListRequest;
const QueryRecordListRequest = models.QueryRecordListRequest;
const ExportBotDataResponse = models.ExportBotDataResponse;
const SingleRecord = models.SingleRecord;
const QueryRecordListResponse = models.QueryRecordListResponse;
const QueryInstantDataRequest = models.QueryInstantDataRequest;
const ExportBotDataRequest = models.ExportBotDataRequest;
const ApplyBlackListDataRequest = models.ApplyBlackListDataRequest;
const ChangeBotCallStatusResponse = models.ChangeBotCallStatusResponse;
const ApplyBlackListRequest = models.ApplyBlackListRequest;
const ApplyBlackListDataResponse = models.ApplyBlackListDataResponse;
const ApplyCreditAuditRequest = models.ApplyCreditAuditRequest;
const DownloadReportResponse = models.DownloadReportResponse;
const SmsTemplate = models.SmsTemplate;
const RecordInfo = models.RecordInfo;
const PhonePool = models.PhonePool;
const UpdateBotTaskResponse = models.UpdateBotTaskResponse;
const UploadBotDataResponse = models.UploadBotDataResponse;
const ChangeBotTaskStatusRequest = models.ChangeBotTaskStatusRequest;
const DownloadRecordListResponse = models.DownloadRecordListResponse;
const CreateBotTaskResponse = models.CreateBotTaskResponse;
const UpdateBotTaskRequest = models.UpdateBotTaskRequest;
const DescribeCreditResultRequest = models.DescribeCreditResultRequest;
const UploadBotFileRequest = models.UploadBotFileRequest;
const UploadDataFileRequest = models.UploadDataFileRequest;
const UploadDataJsonRequest = models.UploadDataJsonRequest;
const DescribeFileModelResponse = models.DescribeFileModelResponse;
const QueryBotListResponse = models.QueryBotListResponse;
const DescribeTaskStatusRequest = models.DescribeTaskStatusRequest;
const ChangeBotCallStatusRequest = models.ChangeBotCallStatusRequest;
const ProductQueryInfo = models.ProductQueryInfo;
const DownloadBotRecordResponse = models.DownloadBotRecordResponse;
const QueryProductsRequest = models.QueryProductsRequest;
const QueryCallListResponse = models.QueryCallListResponse;
const SmsSign = models.SmsSign;
const QueryProductsResponse = models.QueryProductsResponse;
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
     * 查询机器人任务状态列表
     * @param {QueryBotListRequest} req
     * @param {function(string, QueryBotListResponse):void} cb
     * @public
     */
    QueryBotList(req, cb) {
        let resp = new QueryBotListResponse();
        this.request("QueryBotList", req, resp, cb);
    }

    /**
     * 查询机器人对话流
     * @param {DescribeBotFlowRequest} req
     * @param {function(string, DescribeBotFlowResponse):void} cb
     * @public
     */
    DescribeBotFlow(req, cb) {
        let resp = new DescribeBotFlowResponse();
        this.request("DescribeBotFlow", req, resp, cb);
    }

    /**
     * 查询录音列表
     * @param {QueryRecordListRequest} req
     * @param {function(string, QueryRecordListResponse):void} cb
     * @public
     */
    QueryRecordList(req, cb) {
        let resp = new QueryRecordListResponse();
        this.request("QueryRecordList", req, resp, cb);
    }

    /**
     * 实时数据查询
     * @param {QueryInstantDataRequest} req
     * @param {function(string, QueryInstantDataResponse):void} cb
     * @public
     */
    QueryInstantData(req, cb) {
        let resp = new QueryInstantDataResponse();
        this.request("QueryInstantData", req, resp, cb);
    }

    /**
     * 更新机器人任务
     * @param {UpdateBotTaskRequest} req
     * @param {function(string, UpdateBotTaskResponse):void} cb
     * @public
     */
    UpdateBotTask(req, cb) {
        let resp = new UpdateBotTaskResponse();
        this.request("UpdateBotTask", req, resp, cb);
    }

    /**
     * 上传机器人任务数据
     * @param {UploadBotDataRequest} req
     * @param {function(string, UploadBotDataResponse):void} cb
     * @public
     */
    UploadBotData(req, cb) {
        let resp = new UploadBotDataResponse();
        this.request("UploadBotData", req, resp, cb);
    }

    /**
     * 查看黑名单数据列表
     * @param {QueryBlackListDataRequest} req
     * @param {function(string, QueryBlackListDataResponse):void} cb
     * @public
     */
    QueryBlackListData(req, cb) {
        let resp = new QueryBlackListDataResponse();
        this.request("QueryBlackListData", req, resp, cb);
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
     * 导出机器人数据
     * @param {ExportBotDataRequest} req
     * @param {function(string, ExportBotDataResponse):void} cb
     * @public
     */
    ExportBotData(req, cb) {
        let resp = new ExportBotDataResponse();
        this.request("ExportBotData", req, resp, cb);
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
     * 上传机器人文件
     * @param {UploadBotFileRequest} req
     * @param {function(string, UploadBotFileResponse):void} cb
     * @public
     */
    UploadBotFile(req, cb) {
        let resp = new UploadBotFileResponse();
        this.request("UploadBotFile", req, resp, cb);
    }

    /**
     * 查询机器人文件模板
     * @param {DescribeFileModelRequest} req
     * @param {function(string, DescribeFileModelResponse):void} cb
     * @public
     */
    DescribeFileModel(req, cb) {
        let resp = new DescribeFileModelResponse();
        this.request("DescribeFileModel", req, resp, cb);
    }

    /**
     * 更新机器人任务作业状态
     * @param {ChangeBotCallStatusRequest} req
     * @param {function(string, ChangeBotCallStatusResponse):void} cb
     * @public
     */
    ChangeBotCallStatus(req, cb) {
        let resp = new ChangeBotCallStatusResponse();
        this.request("ChangeBotCallStatus", req, resp, cb);
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
     * 更新机器人任务状态
     * @param {ChangeBotTaskStatusRequest} req
     * @param {function(string, ChangeBotTaskStatusResponse):void} cb
     * @public
     */
    ChangeBotTaskStatus(req, cb) {
        let resp = new ChangeBotTaskStatusResponse();
        this.request("ChangeBotTaskStatus", req, resp, cb);
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
     * 提交机器人黑名单申请
     * @param {ApplyBlackListDataRequest} req
     * @param {function(string, ApplyBlackListDataResponse):void} cb
     * @public
     */
    ApplyBlackListData(req, cb) {
        let resp = new ApplyBlackListDataResponse();
        this.request("ApplyBlackListData", req, resp, cb);
    }

    /**
     * 查询产品列表
     * @param {QueryProductsRequest} req
     * @param {function(string, QueryProductsResponse):void} cb
     * @public
     */
    QueryProducts(req, cb) {
        let resp = new QueryProductsResponse();
        this.request("QueryProducts", req, resp, cb);
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
     * 上传Json格式数据，接口返回数据任务ID
     * @param {UploadDataJsonRequest} req
     * @param {function(string, UploadDataJsonResponse):void} cb
     * @public
     */
    UploadDataJson(req, cb) {
        let resp = new UploadDataJsonResponse();
        this.request("UploadDataJson", req, resp, cb);
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

    /**
     * 用于下载结果报表。当日23:00后，可获取当日到期/逾期提醒结果，次日00:30后，可获取昨日回访结果。
     * @param {DownloadReportRequest} req
     * @param {function(string, DownloadReportResponse):void} cb
     * @public
     */
    DownloadReport(req, cb) {
        let resp = new DownloadReportResponse();
        this.request("DownloadReport", req, resp, cb);
    }

    /**
     * 下载任务录音与文本，第二天12点后可使用此接口获取对应的录音与文本
     * @param {DownloadBotRecordRequest} req
     * @param {function(string, DownloadBotRecordResponse):void} cb
     * @public
     */
    DownloadBotRecord(req, cb) {
        let resp = new DownloadBotRecordResponse();
        this.request("DownloadBotRecord", req, resp, cb);
    }

    /**
     * 上传文件，接口返回数据任务ID，支持xlsx、xls、csv、zip格式。
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
     * 创建机器人任务
     * @param {CreateBotTaskRequest} req
     * @param {function(string, CreateBotTaskResponse):void} cb
     * @public
     */
    CreateBotTask(req, cb) {
        let resp = new CreateBotTaskResponse();
        this.request("CreateBotTask", req, resp, cb);
    }

    /**
     * 机器人任务查询
     * @param {QueryCallListRequest} req
     * @param {function(string, QueryCallListResponse):void} cb
     * @public
     */
    QueryCallList(req, cb) {
        let resp = new QueryCallListResponse();
        this.request("QueryCallList", req, resp, cb);
    }


}
module.exports = CrClient;
