"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
/* eslint-disable @typescript-eslint/no-unused-vars */
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
const abstract_client_1 = require("../../../common/abstract_client");
/**
 * cr client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(clientConfig) {
        super("cr.tencentcloudapi.com", "2018-03-21", clientConfig);
    }
    /**
     * 客户通过调用该接口上传需催收文档，格式需为excel格式。接口返回任务ID。
     */
    async UploadFile(req, cb) {
        return this.request("UploadFile", req, cb);
    }
    /**
     * 查询机器人任务状态列表
     */
    async QueryBotList(req, cb) {
        return this.request("QueryBotList", req, cb);
    }
    /**
     * 查询机器人对话流
     */
    async DescribeBotFlow(req, cb) {
        return this.request("DescribeBotFlow", req, cb);
    }
    /**
     * 查询录音列表
     */
    async QueryRecordList(req, cb) {
        return this.request("QueryRecordList", req, cb);
    }
    /**
     * 实时数据查询
     */
    async QueryInstantData(req, cb) {
        return this.request("QueryInstantData", req, cb);
    }
    /**
     * 更新机器人任务
     */
    async UpdateBotTask(req, cb) {
        return this.request("UpdateBotTask", req, cb);
    }
    /**
     * 上传机器人任务数据
     */
    async UploadBotData(req, cb) {
        return this.request("UploadBotData", req, cb);
    }
    /**
     * 查看黑名单数据列表
     */
    async QueryBlackListData(req, cb) {
        return this.request("QueryBlackListData", req, cb);
    }
    /**
     * 用于获取指定案件的录音地址，次日早上8:00后可查询前日录音。
     */
    async DescribeRecords(req, cb) {
        return this.request("DescribeRecords", req, cb);
    }
    /**
     * 导出机器人数据
     */
    async ExportBotData(req, cb) {
        return this.request("ExportBotData", req, cb);
    }
    /**
     * 用于获取指定案件的对话文本内容，次日早上8:00后可查询前日对话文本内容。
     */
    async DownloadDialogueText(req, cb) {
        return this.request("DownloadDialogueText", req, cb);
    }
    /**
     * 上传机器人文件
     */
    async UploadBotFile(req, cb) {
        return this.request("UploadBotFile", req, cb);
    }
    /**
     * 查询机器人文件模板
     */
    async DescribeFileModel(req, cb) {
        return this.request("DescribeFileModel", req, cb);
    }
    /**
     * 更新机器人任务作业状态
     */
    async ChangeBotCallStatus(req, cb) {
        return this.request("ChangeBotCallStatus", req, cb);
    }
    /**
     * 提交黑名单后，黑名单中有效期内的号码将停止拨打，适用于到期/逾期提醒、回访场景。
     */
    async ApplyBlackList(req, cb) {
        return this.request("ApplyBlackList", req, cb);
    }
    /**
     * 更新机器人任务状态
     */
    async ChangeBotTaskStatus(req, cb) {
        return this.request("ChangeBotTaskStatus", req, cb);
    }
    /**
     * 根据信审任务ID和请求日期，获取相关信审结果。
     */
    async DescribeCreditResult(req, cb) {
        return this.request("DescribeCreditResult", req, cb);
    }
    /**
     * 根据上传文件接口的输出参数DataResId，获取相关上传结果。
     */
    async DescribeTaskStatus(req, cb) {
        return this.request("DescribeTaskStatus", req, cb);
    }
    /**
     * 提交机器人黑名单申请
     */
    async ApplyBlackListData(req, cb) {
        return this.request("ApplyBlackListData", req, cb);
    }
    /**
     * 查询产品列表
     */
    async QueryProducts(req, cb) {
        return this.request("QueryProducts", req, cb);
    }
    /**
     * <p>用于获取录音下载链接清单，次日早上8:00后可查询前日录音清单。</p>
<p>注意：录音清单中的录音下载链接仅次日20:00之前有效，请及时下载。</p>
     */
    async DownloadRecordList(req, cb) {
        return this.request("DownloadRecordList", req, cb);
    }
    /**
     * 上传Json格式数据，接口返回数据任务ID
     */
    async UploadDataJson(req, cb) {
        return this.request("UploadDataJson", req, cb);
    }
    /**
     * 提交信审外呼申请，返回当次请求日期。
     */
    async ApplyCreditAudit(req, cb) {
        return this.request("ApplyCreditAudit", req, cb);
    }
    /**
     * 用于下载结果报表。当日23:00后，可获取当日到期/逾期提醒结果，次日00:30后，可获取昨日回访结果。
     */
    async DownloadReport(req, cb) {
        return this.request("DownloadReport", req, cb);
    }
    /**
     * 下载任务录音与文本，第二天12点后可使用此接口获取对应的录音与文本
     */
    async DownloadBotRecord(req, cb) {
        return this.request("DownloadBotRecord", req, cb);
    }
    /**
     * 上传文件，接口返回数据任务ID，支持xlsx、xls、csv、zip格式。
     */
    async UploadDataFile(req, cb) {
        let options = {
            multipart: true
        };
        return this.request("UploadDataFile", req, cb);
    }
    /**
     * 创建机器人任务
     */
    async CreateBotTask(req, cb) {
        return this.request("CreateBotTask", req, cb);
    }
    /**
     * 机器人任务查询
     */
    async QueryCallList(req, cb) {
        return this.request("QueryCallList", req, cb);
    }
}
exports.Client = Client;
