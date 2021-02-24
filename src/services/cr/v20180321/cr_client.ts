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
import { AbstractClient } from "../../../common/abstract_client"
import { ClientConfig } from "../../../common/interface"
import {
  QueryCallListRequest,
  CreateBotTaskRequest,
  ChangeBotTaskStatusResponse,
  UploadFileRequest,
  BotFlow,
  UploadFileResponse,
  UploadDataJsonResponse,
  DescribeBotFlowResponse,
  DescribeTaskStatusResponse,
  QueryBlackListDataRequest,
  DownloadBotRecordRequest,
  DownloadReportRequest,
  ApplyCreditAuditResponse,
  UploadDataFileResponse,
  DownloadRecordListRequest,
  CallInfo,
  BotFileData,
  DescribeFileModelRequest,
  QueryInstantDataResponse,
  CallTimeDict,
  UploadBotFileResponse,
  QueryBlackListDataResponse,
  CallTimeInfo,
  BlackListData,
  DescribeCreditResultResponse,
  UploadBotDataRequest,
  DownloadDialogueTextResponse,
  DescribeBotFlowRequest,
  SingleBlackApply,
  BotInfo,
  ApplyBlackListResponse,
  DescribeRecordsRequest,
  QueryBotListRequest,
  QueryRecordListRequest,
  ExportBotDataResponse,
  SingleRecord,
  QueryRecordListResponse,
  QueryInstantDataRequest,
  ExportBotDataRequest,
  ApplyBlackListDataRequest,
  ChangeBotCallStatusResponse,
  ApplyBlackListRequest,
  ApplyBlackListDataResponse,
  ApplyCreditAuditRequest,
  DownloadReportResponse,
  SmsTemplate,
  RecordInfo,
  PhonePool,
  UpdateBotTaskResponse,
  UploadBotDataResponse,
  ChangeBotTaskStatusRequest,
  DownloadRecordListResponse,
  CreateBotTaskResponse,
  UpdateBotTaskRequest,
  DescribeCreditResultRequest,
  UploadBotFileRequest,
  UploadDataFileRequest,
  UploadDataJsonRequest,
  DescribeFileModelResponse,
  QueryBotListResponse,
  DescribeTaskStatusRequest,
  ChangeBotCallStatusRequest,
  ProductQueryInfo,
  DownloadBotRecordResponse,
  QueryProductsRequest,
  QueryCallListResponse,
  SmsSign,
  QueryProductsResponse,
  DescribeRecordsResponse,
  DownloadDialogueTextRequest,
} from "./cr_models"

/**
 * cr client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("cr.tencentcloudapi.com", "2018-03-21", clientConfig)
  }

  /**
   * 客户通过调用该接口上传需催收文档，格式需为excel格式。接口返回任务ID。
   */
  async UploadFile(
    req: UploadFileRequest,
    cb?: (error: string, rep: UploadFileResponse) => void
  ): Promise<UploadFileResponse> {
    return this.request("UploadFile", req, cb)
  }

  /**
   * 查询机器人任务状态列表
   */
  async QueryBotList(
    req: QueryBotListRequest,
    cb?: (error: string, rep: QueryBotListResponse) => void
  ): Promise<QueryBotListResponse> {
    return this.request("QueryBotList", req, cb)
  }

  /**
   * 查询机器人对话流
   */
  async DescribeBotFlow(
    req: DescribeBotFlowRequest,
    cb?: (error: string, rep: DescribeBotFlowResponse) => void
  ): Promise<DescribeBotFlowResponse> {
    return this.request("DescribeBotFlow", req, cb)
  }

  /**
   * 查询录音列表
   */
  async QueryRecordList(
    req: QueryRecordListRequest,
    cb?: (error: string, rep: QueryRecordListResponse) => void
  ): Promise<QueryRecordListResponse> {
    return this.request("QueryRecordList", req, cb)
  }

  /**
   * 实时数据查询
   */
  async QueryInstantData(
    req: QueryInstantDataRequest,
    cb?: (error: string, rep: QueryInstantDataResponse) => void
  ): Promise<QueryInstantDataResponse> {
    return this.request("QueryInstantData", req, cb)
  }

  /**
   * 更新机器人任务
   */
  async UpdateBotTask(
    req: UpdateBotTaskRequest,
    cb?: (error: string, rep: UpdateBotTaskResponse) => void
  ): Promise<UpdateBotTaskResponse> {
    return this.request("UpdateBotTask", req, cb)
  }

  /**
   * 上传机器人任务数据
   */
  async UploadBotData(
    req: UploadBotDataRequest,
    cb?: (error: string, rep: UploadBotDataResponse) => void
  ): Promise<UploadBotDataResponse> {
    return this.request("UploadBotData", req, cb)
  }

  /**
   * 查看黑名单数据列表
   */
  async QueryBlackListData(
    req: QueryBlackListDataRequest,
    cb?: (error: string, rep: QueryBlackListDataResponse) => void
  ): Promise<QueryBlackListDataResponse> {
    return this.request("QueryBlackListData", req, cb)
  }

  /**
   * 用于获取指定案件的录音地址，次日早上8:00后可查询前日录音。
   */
  async DescribeRecords(
    req: DescribeRecordsRequest,
    cb?: (error: string, rep: DescribeRecordsResponse) => void
  ): Promise<DescribeRecordsResponse> {
    return this.request("DescribeRecords", req, cb)
  }

  /**
   * 导出机器人数据
   */
  async ExportBotData(
    req: ExportBotDataRequest,
    cb?: (error: string, rep: ExportBotDataResponse) => void
  ): Promise<ExportBotDataResponse> {
    return this.request("ExportBotData", req, cb)
  }

  /**
   * 用于获取指定案件的对话文本内容，次日早上8:00后可查询前日对话文本内容。
   */
  async DownloadDialogueText(
    req: DownloadDialogueTextRequest,
    cb?: (error: string, rep: DownloadDialogueTextResponse) => void
  ): Promise<DownloadDialogueTextResponse> {
    return this.request("DownloadDialogueText", req, cb)
  }

  /**
   * 上传机器人文件
   */
  async UploadBotFile(
    req: UploadBotFileRequest,
    cb?: (error: string, rep: UploadBotFileResponse) => void
  ): Promise<UploadBotFileResponse> {
    return this.request("UploadBotFile", req, cb)
  }

  /**
   * 查询机器人文件模板
   */
  async DescribeFileModel(
    req: DescribeFileModelRequest,
    cb?: (error: string, rep: DescribeFileModelResponse) => void
  ): Promise<DescribeFileModelResponse> {
    return this.request("DescribeFileModel", req, cb)
  }

  /**
   * 更新机器人任务作业状态
   */
  async ChangeBotCallStatus(
    req: ChangeBotCallStatusRequest,
    cb?: (error: string, rep: ChangeBotCallStatusResponse) => void
  ): Promise<ChangeBotCallStatusResponse> {
    return this.request("ChangeBotCallStatus", req, cb)
  }

  /**
   * 提交黑名单后，黑名单中有效期内的号码将停止拨打，适用于到期/逾期提醒、回访场景。
   */
  async ApplyBlackList(
    req: ApplyBlackListRequest,
    cb?: (error: string, rep: ApplyBlackListResponse) => void
  ): Promise<ApplyBlackListResponse> {
    return this.request("ApplyBlackList", req, cb)
  }

  /**
   * 更新机器人任务状态
   */
  async ChangeBotTaskStatus(
    req: ChangeBotTaskStatusRequest,
    cb?: (error: string, rep: ChangeBotTaskStatusResponse) => void
  ): Promise<ChangeBotTaskStatusResponse> {
    return this.request("ChangeBotTaskStatus", req, cb)
  }

  /**
   * 根据信审任务ID和请求日期，获取相关信审结果。
   */
  async DescribeCreditResult(
    req: DescribeCreditResultRequest,
    cb?: (error: string, rep: DescribeCreditResultResponse) => void
  ): Promise<DescribeCreditResultResponse> {
    return this.request("DescribeCreditResult", req, cb)
  }

  /**
   * 根据上传文件接口的输出参数DataResId，获取相关上传结果。
   */
  async DescribeTaskStatus(
    req: DescribeTaskStatusRequest,
    cb?: (error: string, rep: DescribeTaskStatusResponse) => void
  ): Promise<DescribeTaskStatusResponse> {
    return this.request("DescribeTaskStatus", req, cb)
  }

  /**
   * 提交机器人黑名单申请
   */
  async ApplyBlackListData(
    req: ApplyBlackListDataRequest,
    cb?: (error: string, rep: ApplyBlackListDataResponse) => void
  ): Promise<ApplyBlackListDataResponse> {
    return this.request("ApplyBlackListData", req, cb)
  }

  /**
   * 查询产品列表
   */
  async QueryProducts(
    req: QueryProductsRequest,
    cb?: (error: string, rep: QueryProductsResponse) => void
  ): Promise<QueryProductsResponse> {
    return this.request("QueryProducts", req, cb)
  }

  /**
     * <p>用于获取录音下载链接清单，次日早上8:00后可查询前日录音清单。</p>
<p>注意：录音清单中的录音下载链接仅次日20:00之前有效，请及时下载。</p>
     */
  async DownloadRecordList(
    req: DownloadRecordListRequest,
    cb?: (error: string, rep: DownloadRecordListResponse) => void
  ): Promise<DownloadRecordListResponse> {
    return this.request("DownloadRecordList", req, cb)
  }

  /**
   * 上传Json格式数据，接口返回数据任务ID
   */
  async UploadDataJson(
    req: UploadDataJsonRequest,
    cb?: (error: string, rep: UploadDataJsonResponse) => void
  ): Promise<UploadDataJsonResponse> {
    return this.request("UploadDataJson", req, cb)
  }

  /**
   * 提交信审外呼申请，返回当次请求日期。
   */
  async ApplyCreditAudit(
    req: ApplyCreditAuditRequest,
    cb?: (error: string, rep: ApplyCreditAuditResponse) => void
  ): Promise<ApplyCreditAuditResponse> {
    return this.request("ApplyCreditAudit", req, cb)
  }

  /**
   * 用于下载结果报表。当日23:00后，可获取当日到期/逾期提醒结果，次日00:30后，可获取昨日回访结果。
   */
  async DownloadReport(
    req: DownloadReportRequest,
    cb?: (error: string, rep: DownloadReportResponse) => void
  ): Promise<DownloadReportResponse> {
    return this.request("DownloadReport", req, cb)
  }

  /**
   * 下载任务录音与文本，第二天12点后可使用此接口获取对应的录音与文本
   */
  async DownloadBotRecord(
    req: DownloadBotRecordRequest,
    cb?: (error: string, rep: DownloadBotRecordResponse) => void
  ): Promise<DownloadBotRecordResponse> {
    return this.request("DownloadBotRecord", req, cb)
  }

  /**
   * 上传文件，接口返回数据任务ID，支持xlsx、xls、csv、zip格式。
   */
  async UploadDataFile(
    req: UploadDataFileRequest,
    cb?: (error: string, rep: UploadDataFileResponse) => void
  ): Promise<UploadDataFileResponse> {
    let options = {
      multipart: true,
    }
    return this.request("UploadDataFile", req, cb)
  }

  /**
   * 创建机器人任务
   */
  async CreateBotTask(
    req: CreateBotTaskRequest,
    cb?: (error: string, rep: CreateBotTaskResponse) => void
  ): Promise<CreateBotTaskResponse> {
    return this.request("CreateBotTask", req, cb)
  }

  /**
   * 机器人任务查询
   */
  async QueryCallList(
    req: QueryCallListRequest,
    cb?: (error: string, rep: QueryCallListResponse) => void
  ): Promise<QueryCallListResponse> {
    return this.request("QueryCallList", req, cb)
  }
}
