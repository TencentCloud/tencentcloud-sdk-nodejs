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

/**
 * QueryCallList请求参数结构体
 */
export interface QueryCallListRequest {
  /**
   * 模块名。默认值（固定）：AiApi
   */
  Module: string

  /**
   * 操作名。默认值（固定）：QueryCallList
   */
  Operation: string

  /**
   * 业务日期
   */
  BizDate: string

  /**
   * 任务ID，二者必填一个
   */
  BotId?: string

  /**
   * 任务名称，二者必填一个
   */
  BotName?: string

  /**
   * 通过API或平台上传的文件完整名称
   */
  FileName?: string
}

/**
 * CreateBotTask请求参数结构体
 */
export interface CreateBotTaskRequest {
  /**
   * 模块名。默认值（固定）：AiApi
   */
  Module: string

  /**
   * 操作名。默认值（固定）：CreateTask
   */
  Operation: string

  /**
   * 任务名称
   */
  BotName: string

  /**
   * 对话流ID
   */
  FlowId: string

  /**
   * 是否禁止拨打，默认Y
   */
  BanCall: string

  /**
   * 拨打线路集合
   */
  PhoneCollection: string

  /**
   * 产品拨打时间集合
   */
  CallTimeCollection?: CallTimeDict

  /**
   * 禁止拨打起始时间。默认130000
   */
  StartTimeBan?: string

  /**
   * 禁止拨打结束时间。默认140000
   */
  EndTimeBan?: string

  /**
   * 重播方式，NON：未接通、LABEL：意向分级，可多选，用竖线分隔：NON|LABEL
   */
  CodeType?: string

  /**
   * 重播值集合，A：强意向、B：中意向、C：低意向、D：无意向、E：在忙、F：未接通、G：无效号码，可多选，用竖线分隔：A|B|C|D|E|F|G
   */
  CodeCollection?: string

  /**
   * 继续拨打次数
   */
  CallCount?: number

  /**
   * 拨打间隔
   */
  CallInterval?: number

  /**
   * 未接通引用短信签名ID
   */
  SmsSignId?: string

  /**
   * 未接通引用短信模板ID
   */
  SmsTemplateId?: string

  /**
   * 拨打方式。NORMAL - 正常拨打；TIMER - 定时拨打
   */
  CallType?: string

  /**
   * 拨打开始日期。CallType=TIMER时有值，yyyy-MM-dd
   */
  CallStartDate?: string

  /**
   * 拨打结束日期。CallType=PERIOD 时有值，yyyy-MM-dd
   */
  CallEndDate?: string
}

/**
 * ChangeBotTaskStatus返回参数结构体
 */
export interface ChangeBotTaskStatusResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * UploadFile请求参数结构体
 */
export interface UploadFileRequest {
  /**
   * 模块名
   */
  Module: string

  /**
   * 操作名
   */
  Operation: string

  /**
   * 文件上传地址，要求地址协议为HTTPS，且URL端口必须为443
   */
  FileUrl: string

  /**
   * 文件名
   */
  FileName: string

  /**
   * 文件日期
   */
  FileDate: string
}

/**
 * 机器人对话流信息
 */
export interface BotFlow {
  /**
   * 对话流ID
   */
  BotFlowId: string

  /**
   * 对话流名称
   */
  BotFlowName: string

  /**
   * 号码组信息列表
   */
  PhonePoolList: Array<PhonePool>
}

/**
 * UploadFile返回参数结构体
 */
export interface UploadFileResponse {
  /**
   * 任务ID
   */
  TaskId?: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * UploadDataJson返回参数结构体
 */
export interface UploadDataJsonResponse {
  /**
      * 响应报文信息
注意：此字段可能返回 null，表示取不到有效值。
      */
  Data?: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeBotFlow返回参数结构体
 */
export interface DescribeBotFlowResponse {
  /**
      * 机器人对话流列表
注意：此字段可能返回 null，表示取不到有效值。
      */
  BotFlowList?: Array<BotFlow>

  /**
      * 短信签名列表
注意：此字段可能返回 null，表示取不到有效值。
      */
  SmsSignList?: Array<SmsSign>

  /**
      * 短信模板列表
注意：此字段可能返回 null，表示取不到有效值。
      */
  SmsTemplateList?: Array<SmsTemplate>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeTaskStatus返回参数结构体
 */
export interface DescribeTaskStatusResponse {
  /**
   * <p>任务结果：</p><ul style="margin-bottom:0px;"><li>处理中："Uploading Data."</li><li>上传成功："File Uploading Task Success."</li><li>上传失败：具体失败原因</li></ul>
   */
  TaskResult?: string

  /**
   * <p>任务类型：</p><ul style="margin-bottom:0px;"><li>到期/逾期提醒数据上传：002</li><li>到期/逾期提醒停拨数据上传：003</li><li>回访数据上传：004</li><li>回访停拨数据上传：005</li></ul>
   */
  TaskType?: string

  /**
      * 过滤文件下载链接，有过滤数据时才存在。
注意：此字段可能返回 null，表示取不到有效值。
      */
  TaskFileUrl?: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * QueryBlackListData请求参数结构体
 */
export interface QueryBlackListDataRequest {
  /**
   * 模块:AiApi
   */
  Module: string

  /**
   * 操作:QueryBlackListData
   */
  Operation: string

  /**
   * 页码
   */
  Offset?: number

  /**
   * 每页数量
   */
  Limit?: number

  /**
   * 开始日期
   */
  StartBizDate?: string

  /**
   * 结束日期
   */
  EndBizDate?: string

  /**
   * 电话号码、手机
   */
  BlackValue?: string
}

/**
 * DownloadBotRecord请求参数结构体
 */
export interface DownloadBotRecordRequest {
  /**
   * 模块：AiApi
   */
  Module: string

  /**
   * 操作：DownloadRecord
   */
  Operation: string

  /**
   * 业务日期
   */
  BizDate: string
}

/**
 * DownloadReport请求参数结构体
 */
export interface DownloadReportRequest {
  /**
   * 模块名，本接口取值：Report
   */
  Module: string

  /**
   * 操作名，本接口取值：DownloadReport
   */
  Operation: string

  /**
   * 报告日期，格式为YYYY-MM-DD
   */
  ReportDate: string

  /**
   * 实例ID，不传默认为系统分配的初始实例。
   */
  InstId?: string
}

/**
 * ApplyCreditAudit返回参数结构体
 */
export interface ApplyCreditAuditResponse {
  /**
   * 请求日期
   */
  RequestDate?: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * UploadDataFile返回参数结构体
 */
export interface UploadDataFileResponse {
  /**
   * 数据ID
   */
  DataResId?: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DownloadRecordList请求参数结构体
 */
export interface DownloadRecordListRequest {
  /**
   * 模块名，本接口取值：Record
   */
  Module: string

  /**
   * 操作名，本接口取值：DownloadList
   */
  Operation: string

  /**
   * 录音日期，格式为YYYY-MM-DD
   */
  BizDate: string

  /**
   * 实例ID
   */
  InstId: string
}

/**
 * 作业信息
 */
export interface CallInfo {
  /**
   * 业务日期
   */
  BizDate: string

  /**
   * 状态 WAIT：待执行；DOING：执行中；ERROR：执行错误；DONE：已完成；
   */
  Status: string

  /**
   * 成功总数
   */
  TotalCount: number

  /**
   * 文件名称
   */
  FileName: string

  /**
   * 文件类型 I：呼叫文件 R：停拨文件
   */
  FileType: string

  /**
      * 作业唯一标识
注意：此字段可能返回 null，表示取不到有效值。
      */
  CallId: string
}

/**
 * 机器人文件结构
 */
export interface BotFileData {
  /**
   * 文件类型 A 拨打结果 T 记录详情
   */
  FileType: string

  /**
   * 文件地址
   */
  CosUrl: string
}

/**
 * DescribeFileModel请求参数结构体
 */
export interface DescribeFileModelRequest {
  /**
   * 模块名。默认值（固定）：AiApi
   */
  Module: string

  /**
   * 操作名。默认值（固定）：DescribeFileModel
   */
  Operation: string

  /**
   * 模板文件类型，输入input，停拨stop
   */
  FileType: string

  /**
   * 任务ID，二者必填一个
   */
  BotId?: string

  /**
   * 任务名称，二者必填一个
   */
  BotName?: string
}

/**
 * QueryInstantData返回参数结构体
 */
export interface QueryInstantDataResponse {
  /**
      * 总数
注意：此字段可能返回 null，表示取不到有效值。
      */
  TotalCount?: number

  /**
      * 返回内容
注意：此字段可能返回 null，表示取不到有效值。
      */
  Data?: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 产品拨打时间集合
 */
export interface CallTimeDict {
  /**
   * 周一
   */
  Monday?: CallTimeInfo

  /**
   * 周二
   */
  Tuesday?: CallTimeInfo

  /**
   * 周三
   */
  Wednesday?: CallTimeInfo

  /**
   * 周四
   */
  Thursday?: CallTimeInfo

  /**
   * 周五
   */
  Friday?: CallTimeInfo

  /**
   * 周六
   */
  Saturday?: CallTimeInfo

  /**
   * 周日
   */
  Sunday?: CallTimeInfo
}

/**
 * UploadBotFile返回参数结构体
 */
export interface UploadBotFileResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * QueryBlackListData返回参数结构体
 */
export interface QueryBlackListDataResponse {
  /**
   * 总数。
   */
  TotalCount: number

  /**
      * 黑名单列表
注意：此字段可能返回 null，表示取不到有效值。
      */
  Data: Array<BlackListData>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 产品拨打时间信息
 */
export interface CallTimeInfo {
  /**
   * 产品开始拨打时间，HHmmss格式,默认090000
   */
  StartTime?: string

  /**
   * 产品结束拨打时间，HHmmss格式.默认200000
   */
  EndTime?: string
}

/**
 * 黑名单申请信息
 */
export interface BlackListData {
  /**
   * 黑名单类型，01代表手机号码。
   */
  BlackType: string

  /**
      * 操作类型，A为新增，D为删除。
注意：此字段可能返回 null，表示取不到有效值。
      */
  OperType: string

  /**
   * 黑名单值，BlackType为01时，填写11位手机号码。
   */
  BlackValue: string

  /**
      * 备注。
注意：此字段可能返回 null，表示取不到有效值。
      */
  BlackDescription: string

  /**
      * 黑名单生效截止日期，格式为YYYY-MM-DD，不填默认为永久。
注意：此字段可能返回 null，表示取不到有效值。
      */
  BlackValidDate?: string

  /**
      * 黑名单加入日期
注意：此字段可能返回 null，表示取不到有效值。
      */
  BlackAddDate?: string

  /**
   * 0-生效 1-失效
   */
  BlackStatus?: string
}

/**
 * DescribeCreditResult返回参数结构体
 */
export interface DescribeCreditResultResponse {
  /**
   * <p>呼叫结果，取值范围：</p><ul style="margin-bottom:0px;"><li>NON：接通</li><li>DBU：号码忙</li><li>DRF：不在服务区</li><li>ANA：欠费未接听</li><li>REJ：拒接</li><li>SHU：关机</li><li>NAN：空号</li><li>HAL：停机</li><li>DAD：未接听</li><li>EXE：其他异常</li></ul>
   */
  ResultCode?: string

  /**
      * 客户标识代码，多个标识码以英文逗号分隔，ResultCode为NON时才有。
注意：此字段可能返回 null，表示取不到有效值。
      */
  ClientCode?: string

  /**
      * 开始振铃时间，ResultCode为NON或DAD时才有此字段。
注意：此字段可能返回 null，表示取不到有效值。
      */
  RingStartTime?: string

  /**
   * 振铃时长
   */
  RingDuration?: number

  /**
   * 接通时长
   */
  AnswerDuration?: number

  /**
      * JSON格式的扩展信息字段，ResultCode为NON时才有。
注意：此字段可能返回 null，表示取不到有效值。
      */
  ContextValue?: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * UploadBotData请求参数结构体
 */
export interface UploadBotDataRequest {
  /**
   * 模块名。默认值（固定）：AiApi
   */
  Module: string

  /**
   * 操作名。默认值（固定）：UploadData
   */
  Operation: string

  /**
   * 任务数据。JSON格式
   */
  Data: string

  /**
   * 任务ID，二者必填一个
   */
  BotId?: string

  /**
   * 任务名称，二者必填一个
   */
  BotName?: string
}

/**
 * DownloadDialogueText返回参数结构体
 */
export interface DownloadDialogueTextResponse {
  /**
   * 对话文本下载地址
   */
  TextReportUrl?: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeBotFlow请求参数结构体
 */
export interface DescribeBotFlowRequest {
  /**
   * 模块名。默认值（固定）：AiApi
   */
  Module: string

  /**
   * 操作名。默认值（固定）：GetFlow
   */
  Operation: string
}

/**
 * 黑名单申请信息
 */
export interface SingleBlackApply {
  /**
   * 黑名单类型，01代表手机号码。
   */
  BlackType: string

  /**
   * 操作类型，A为新增，D为删除。
   */
  OperationType: string

  /**
   * 黑名单值，BlackType为01时，填写11位手机号码。
   */
  BlackValue: string

  /**
   * 备注。
   */
  BlackDescription: string

  /**
   * 黑名单生效截止日期，格式为YYYY-MM-DD，不填默认为永久。
   */
  BlackValidDate?: string
}

/**
 * 机器人列表
 */
export interface BotInfo {
  /**
   * 机器人ID
   */
  BotId: string

  /**
   * 机器人名称
   */
  BotName: string

  /**
   * 机器人状态。0-停用 1-启用 2-待审核
   */
  BotStatus: string
}

/**
 * ApplyBlackList返回参数结构体
 */
export interface ApplyBlackListResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeRecords请求参数结构体
 */
export interface DescribeRecordsRequest {
  /**
   * 模块名，本接口取值：Record
   */
  Module: string

  /**
   * 操作名，本接口取值：List
   */
  Operation: string

  /**
   * 产品ID
   */
  ProductId?: string

  /**
   * 案件编号
   */
  AccountNum?: string

  /**
   * 被叫号码
   */
  CalledPhone?: string

  /**
   * 查询起始日期，格式为YYYY-MM-DD
   */
  StartBizDate?: string

  /**
   * 查询结束日期，格式为YYYY-MM-DD
   */
  EndBizDate?: string

  /**
   * 分页参数，索引，默认为0
   */
  Offset?: string

  /**
   * 分页参数，页长，默认为20
   */
  Limit?: string

  /**
   * 实例ID，不传默认为系统分配的初始实例
   */
  InstId?: string
}

/**
 * QueryBotList请求参数结构体
 */
export interface QueryBotListRequest {
  /**
   * 模块名：AiApi
   */
  Module: string

  /**
   * 操作名：QueryBotList
   */
  Operation: string
}

/**
 * QueryRecordList请求参数结构体
 */
export interface QueryRecordListRequest {
  /**
   * 模块名。AiApi
   */
  Module: string

  /**
   * 操作名。QueryRecordList
   */
  Operation: string

  /**
   * 偏移值
   */
  Offset: number

  /**
   * 偏移位移，最大20
   */
  Limit: number

  /**
   * 任务ID，二者必填一个
   */
  BotId?: string

  /**
   * 任务名称，二者必填一个
   */
  BotName?: string

  /**
   * 被叫号码
   */
  CalledPhone?: string

  /**
   * 开始日期
   */
  StartBizDate?: string

  /**
   * 结束日期
   */
  EndBizDate?: string
}

/**
 * ExportBotData返回参数结构体
 */
export interface ExportBotDataResponse {
  /**
   * 导出文件列表
   */
  Data?: Array<BotFileData>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 录音信息
 */
export interface SingleRecord {
  /**
   * 案件编号。
   */
  AccountNum: string

  /**
   * 外呼日期。
   */
  BizDate: string

  /**
   * 开始呼叫时间。
   */
  CallStartTime: string

  /**
   * 主叫号码。
   */
  CallerPhone: string

  /**
   * 呼叫方向，O为呼出，I为呼入。
   */
  Direction: string

  /**
   * 通话时长。
   */
  Duration: number

  /**
      * 产品ID。
注意：此字段可能返回 null，表示取不到有效值。
      */
  ProductId: string

  /**
      * 录音下载链接。
注意：此字段可能返回 null，表示取不到有效值。
      */
  RecordCosUrl: string
}

/**
 * QueryRecordList返回参数结构体
 */
export interface QueryRecordListResponse {
  /**
   * 录音列表。
   */
  RecordList?: Array<RecordInfo>

  /**
   * 总数
   */
  TotalCount?: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * QueryInstantData请求参数结构体
 */
export interface QueryInstantDataRequest {
  /**
   * 模块名，本接口取值：Data
   */
  Module: string

  /**
   * 操作名，本接口取值：Query
   */
  Operation: string

  /**
   * 产品ID
   */
  ProductId?: string

  /**
   * 实例ID，不传默认为系统分配的初始实例
   */
  InstanceId?: string

  /**
   * 查询类型：callRecord 通话记录
   */
  QueryModel?: string

  /**
   * 查询参数
   */
  Data?: string
}

/**
 * ExportBotData请求参数结构体
 */
export interface ExportBotDataRequest {
  /**
   * 模块名。默认值（固定）：AiApi
   */
  Module: string

  /**
   * 操作名。默认值（固定）：ExportBotData
   */
  Operation: string

  /**
   * 业务日期。YYYY-MM-DD
   */
  BizDate: string

  /**
   * 任务ID，二者必填一个
   */
  BotId?: string

  /**
   * 任务名称，二者必填一个
   */
  BotName?: string
}

/**
 * ApplyBlackListData请求参数结构体
 */
export interface ApplyBlackListDataRequest {
  /**
   * 模块名，AiApi
   */
  Module: string

  /**
   * 操作名，ApplyBlackListData
   */
  Operation: string

  /**
   * 黑名单列表
   */
  BlackList: Array<BlackListData>
}

/**
 * ChangeBotCallStatus返回参数结构体
 */
export interface ChangeBotCallStatusResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ApplyBlackList请求参数结构体
 */
export interface ApplyBlackListRequest {
  /**
   * 模块名，本接口取值：account
   */
  Module: string

  /**
   * 操作名，本接口取值：ApplyBlackList
   */
  Operation: string

  /**
   * 黑名单列表
   */
  BlackList: Array<SingleBlackApply>

  /**
   * 实例ID，不传默认为系统分配的初始实例
   */
  InstId?: string
}

/**
 * ApplyBlackListData返回参数结构体
 */
export interface ApplyBlackListDataResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ApplyCreditAudit请求参数结构体
 */
export interface ApplyCreditAuditRequest {
  /**
   * 模块名，本接口取值：Credit
   */
  Module: string

  /**
   * 操作名，本接口取值：Apply
   */
  Operation: string

  /**
   * 实例ID
   */
  InstId: string

  /**
   * 产品ID，形如P******。
   */
  ProductId: string

  /**
   * 信审任务ID，同一天内，同一InstId下，同一CaseId只能调用一次。
   */
  CaseId: string

  /**
   * 回调地址
   */
  CallbackUrl: string

  /**
   * JSON格式的业务字段。
   */
  Data: string
}

/**
 * DownloadReport返回参数结构体
 */
export interface DownloadReportResponse {
  /**
      * 到期/逾期提醒日报下载地址
注意：此字段可能返回 null，表示取不到有效值。
      */
  DailyReportUrl?: string

  /**
      * 到期/逾期提醒结果下载地址
注意：此字段可能返回 null，表示取不到有效值。
      */
  ResultReportUrl?: string

  /**
      * 到期/逾期提醒明细下载地址
注意：此字段可能返回 null，表示取不到有效值。
      */
  DetailReportUrl?: string

  /**
      * 回访日报下载地址
注意：此字段可能返回 null，表示取不到有效值。
      */
  CallbackDailyReportUrl?: string

  /**
      * 回访结果下载地址
注意：此字段可能返回 null，表示取不到有效值。
      */
  CallbackResultReportUrl?: string

  /**
      * 回访明细下载地址
注意：此字段可能返回 null，表示取不到有效值。
      */
  CallbackDetailReportUrl?: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 短信模板信息
 */
export interface SmsTemplate {
  /**
   * 短信模板ID
   */
  TemplateId: string

  /**
   * 短信模板名称
   */
  TemplateName: string
}

/**
 * 录音文件详情
 */
export interface RecordInfo {
  /**
   * 任务Id
   */
  BotId: string

  /**
   * 任务名称
   */
  BotName: string

  /**
   * 任务日期
   */
  BizDate: string

  /**
   * 被叫号码
   */
  CalledPhone: string

  /**
   * 开始通话时间
   */
  CallStartTime: string

  /**
   * 通话时长
   */
  Duration: number

  /**
   * 录音文件地址
   */
  CosUrl: string

  /**
   * 对话日志。JSON格式
   */
  DialogueLog: string

  /**
   * 录音文件名
   */
  CosFileName: string
}

/**
 * 号码组信息
 */
export interface PhonePool {
  /**
   * 号码组ID
   */
  PoolId: string

  /**
   * 号码组名称
   */
  PoolName: string
}

/**
 * UpdateBotTask返回参数结构体
 */
export interface UpdateBotTaskResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * UploadBotData返回参数结构体
 */
export interface UploadBotDataResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ChangeBotTaskStatus请求参数结构体
 */
export interface ChangeBotTaskStatusRequest {
  /**
   * 模块名。默认值（固定）：AiApi
   */
  Module: string

  /**
   * 操作名。默认值（固定）：ChangeBotTaskStatus
   */
  Operation: string

  /**
      * 作业变更状态
SUSPEND：暂停；EXECUTE：恢复；
      */
  Status: string

  /**
   * 任务ID，二者必填一个
   */
  BotId?: string

  /**
   * 任务名称，二者必填一个
   */
  BotName?: string
}

/**
 * DownloadRecordList返回参数结构体
 */
export interface DownloadRecordListResponse {
  /**
   * 录音列表下载地址
   */
  RecordListUrl?: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateBotTask返回参数结构体
 */
export interface CreateBotTaskResponse {
  /**
   * 机器人任务Id
   */
  BotId: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * UpdateBotTask请求参数结构体
 */
export interface UpdateBotTaskRequest {
  /**
   * 模块名。默认值（固定）：AiApi
   */
  Module: string

  /**
   * 操作名。默认值（固定）：UpdateTask
   */
  Operation: string

  /**
   * 任务名称
   */
  BotName?: string

  /**
   * 任务ID
   */
  BotId?: string

  /**
   * 产品拨打时间集合
   */
  CallTimeCollection?: CallTimeDict

  /**
   * 是否禁止拨打，默认Y
   */
  BanCall?: string

  /**
   * 禁止拨打起始时间。默认130000
   */
  StartTimeBan?: string

  /**
   * 禁止拨打结束时间。默认140000
   */
  EndTimeBan?: string

  /**
   * 拨打线路集合
   */
  PhoneCollection?: string

  /**
   * 重播方式，NON：未接通、LABEL：意向分级，可多选，用竖线分隔：NON|LABEL
   */
  CodeType?: string

  /**
   * 重播值集合，A：强意向、B：中意向、C：低意向、D：无意向、E：在忙、F：未接通、G：无效号码，可多选，用竖线分隔：A|B|C|D|E|F|G
   */
  CodeCollection?: string

  /**
   * 继续拨打次数
   */
  CallCount?: number

  /**
   * 拨打间隔
   */
  CallInterval?: number

  /**
   * 未接通引用短信签名ID
   */
  SmsSignId?: string

  /**
   * 未接通引用短信模板ID
   */
  SmsTemplateId?: string
}

/**
 * DescribeCreditResult请求参数结构体
 */
export interface DescribeCreditResultRequest {
  /**
   * 模块名，本接口取值：Credit
   */
  Module: string

  /**
   * 操作名，本接口取值：Get
   */
  Operation: string

  /**
   * 实例ID
   */
  InstId: string

  /**
   * 产品ID，形如P******。
   */
  ProductId: string

  /**
   * 信审任务ID
   */
  CaseId: string

  /**
   * 请求日期，格式为YYYY-MM-DD
   */
  RequestDate: string
}

/**
 * UploadBotFile请求参数结构体
 */
export interface UploadBotFileRequest {
  /**
   * 模块名。默认值（固定）：AiApi
   */
  Module: string

  /**
   * 操作名。默认值（固定）：Upload
   */
  Operation: string

  /**
   * 文件类型，输入input，停拨stop
   */
  FileType: string

  /**
   * 文件链接
   */
  FileUrl: string

  /**
   * 文件名
   */
  FileName: string

  /**
   * 任务ID，二者必填一个
   */
  BotId?: string

  /**
   * 任务名称，二者必填一个
   */
  BotName?: string
}

/**
 * UploadDataFile请求参数结构体
 */
export interface UploadDataFileRequest {
  /**
   * 模块名，本接口取值：Data
   */
  Module: string

  /**
   * 操作名，本接口取值：Upload
   */
  Operation: string

  /**
   * 文件名
   */
  FileName: string

  /**
   * <p>上传类型，不填默认到期/逾期提醒文件，取值范围：</p><ul style="margin-bottom:0px;"><li>data：到期/逾期提醒文件</li><li>repay：到期/逾期提醒停拨文件</li><li>callback：回访文件</li><li>callstop：回访停拨文件</li><li>blacklist：黑名单文件</li></ul>
   */
  UploadModel?: string

  /**
   * 文件，文件与文件地址上传只可选用一种，必须使用multipart/form-data协议来上传二进制流文件，建议使用xlsx格式，大小不超过5MB。
   */
  File?: string

  /**
   * 文件上传地址，文件与文件地址上传只可选用一种，大小不超过50MB。
   */
  FileUrl?: string

  /**
   * 实例ID，不传默认为系统分配的初始实例。
   */
  InstId?: string
}

/**
 * UploadDataJson请求参数结构体
 */
export interface UploadDataJsonRequest {
  /**
   * 模块名，本接口取值：Data
   */
  Module: string

  /**
   * 操作名，本接口取值：UploadJson
   */
  Operation: string

  /**
   * 报文信息
   */
  Data: string

  /**
   * <p>上传类型，不填默认到期/逾期提醒数据，取值范围：</p><ul style="margin-bottom:0px;"><li>data：到期/逾期提醒数据</li><li>repay：到期/逾期提醒停拨数据</li></ul>
   */
  UploadModel?: string

  /**
   * 实例ID，不传默认为系统分配的初始实例。
   */
  InstanceId?: string
}

/**
 * DescribeFileModel返回参数结构体
 */
export interface DescribeFileModelResponse {
  /**
   * 模板下载链接
   */
  CosUrl?: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * QueryBotList返回参数结构体
 */
export interface QueryBotListResponse {
  /**
   * 任务列表。
   */
  BotList?: Array<BotInfo>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeTaskStatus请求参数结构体
 */
export interface DescribeTaskStatusRequest {
  /**
   * 模块名，本接口取值：Task
   */
  Module: string

  /**
   * 操作名，本接口取值：DescribeTaskStatus
   */
  Operation: string

  /**
   * 任务ID，"上传文件"接口返回的DataResId，形如abc-xyz123
   */
  TaskId: string

  /**
   * 实例ID，不传默认为系统分配的初始实例。
   */
  InstId?: string
}

/**
 * ChangeBotCallStatus请求参数结构体
 */
export interface ChangeBotCallStatusRequest {
  /**
   * 模块名。默认值（固定）：AiApi
   */
  Module: string

  /**
   * 操作名。默认值（固定）：ChangeBotCallStatus
   */
  Operation: string

  /**
      * 作业变更状态
SUSPEND：暂停；EXECUTE：恢复；
      */
  Status: string

  /**
   * 作业唯一标识
   */
  CallId: string

  /**
   * 业务日期
   */
  BizDate: string

  /**
   * 任务ID，二者必填一个
   */
  BotId?: string

  /**
   * 任务名称，二者必填一个
   */
  BotName?: string
}

/**
 * QueryProducts接口对应数据结构。产品对应的相关信息。
 */
export interface ProductQueryInfo {
  /**
   * 产品Id
   */
  ProductId: string

  /**
   * 产品名称
   */
  ProductName: string

  /**
      * 产品编码
注意：此字段可能返回 null，表示取不到有效值。
      */
  ProductCode: string

  /**
      * 产品状态 0 禁用 1 启用
注意：此字段可能返回 null，表示取不到有效值。
      */
  ProductStatus: number

  /**
      * 场景类型
注意：此字段可能返回 null，表示取不到有效值。
      */
  SceneType: string
}

/**
 * DownloadBotRecord返回参数结构体
 */
export interface DownloadBotRecordResponse {
  /**
   * 录音地址。请求后30分钟内有效
   */
  RecordCosUrl?: string

  /**
   * 文本地址。请求后30分钟内有效
   */
  TextCosUrl?: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * QueryProducts请求参数结构体
 */
export interface QueryProductsRequest {
  /**
   * 模块名。默认值（固定）：Product
   */
  Module: string

  /**
   * 操作名。默认值（固定）：QueryProducts
   */
  Operation: string

  /**
   * 实例Id。
   */
  InstanceId: string
}

/**
 * QueryCallList返回参数结构体
 */
export interface QueryCallListResponse {
  /**
      * 任务作业状态
注意：此字段可能返回 null，表示取不到有效值。
      */
  CallList: Array<CallInfo>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 短信签名信息
 */
export interface SmsSign {
  /**
   * 短信签名ID
   */
  SignId: string

  /**
   * 短信签名名称
   */
  SignName: string
}

/**
 * QueryProducts返回参数结构体
 */
export interface QueryProductsResponse {
  /**
   * 产品信息。
   */
  ProductList?: Array<ProductQueryInfo>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeRecords返回参数结构体
 */
export interface DescribeRecordsResponse {
  /**
      * 录音列表。
注意：此字段可能返回 null，表示取不到有效值。
      */
  RecordList?: Array<SingleRecord>

  /**
   * 录音总量。
   */
  TotalCount?: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DownloadDialogueText请求参数结构体
 */
export interface DownloadDialogueTextRequest {
  /**
   * 模块名，本接口取值：Report
   */
  Module: string

  /**
   * 操作名，本接口取值：DownloadTextReport
   */
  Operation: string

  /**
   * 报告日期，格式为YYYY-MM-DD
   */
  ReportDate: string

  /**
   * 实例ID
   */
  InstId: string
}
