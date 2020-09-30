/**
 * UploadFile请求参数结构体
 */
export interface UploadFileRequest {
    /**
     * 模块名
     */
    Module: string;
    /**
     * 操作名
     */
    Operation: string;
    /**
     * 文件上传地址，要求地址协议为HTTPS，且URL端口必须为443
     */
    FileUrl: string;
    /**
     * 文件名
     */
    FileName: string;
    /**
     * 文件日期
     */
    FileDate: string;
}
/**
 * UploadFile返回参数结构体
 */
export interface UploadFileResponse {
    /**
     * 任务ID
     */
    TaskId?: number;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * UploadDataJson返回参数结构体
 */
export interface UploadDataJsonResponse {
    /**
        * 响应报文信息
  注意：此字段可能返回 null，表示取不到有效值。
        */
    Data?: string;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeTaskStatus返回参数结构体
 */
export interface DescribeTaskStatusResponse {
    /**
     * <p>任务结果：</p><ul style="margin-bottom:0px;"><li>处理中："Uploading Data."</li><li>上传成功："File Uploading Task Success."</li><li>上传失败：具体失败原因</li></ul>
     */
    TaskResult?: string;
    /**
     * <p>任务类型：</p><ul style="margin-bottom:0px;"><li>到期/逾期提醒数据上传：002</li><li>到期/逾期提醒停拨数据上传：003</li><li>回访数据上传：004</li><li>回访停拨数据上传：005</li></ul>
     */
    TaskType?: string;
    /**
        * 过滤文件下载链接，有过滤数据时才存在。
  注意：此字段可能返回 null，表示取不到有效值。
        */
    TaskFileUrl?: string;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DownloadReport请求参数结构体
 */
export interface DownloadReportRequest {
    /**
     * 模块名，本接口取值：Report
     */
    Module: string;
    /**
     * 操作名，本接口取值：DownloadReport
     */
    Operation: string;
    /**
     * 报告日期，格式为YYYY-MM-DD
     */
    ReportDate: string;
    /**
     * 实例ID，不传默认为系统分配的初始实例。
     */
    InstId?: string;
}
/**
 * ApplyCreditAudit返回参数结构体
 */
export interface ApplyCreditAuditResponse {
    /**
     * 请求日期
     */
    RequestDate?: string;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * UploadDataFile返回参数结构体
 */
export interface UploadDataFileResponse {
    /**
     * 数据ID
     */
    DataResId?: string;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 黑名单申请信息
 */
export interface SingleBlackApply {
    /**
     * 黑名单类型，01代表手机号码。
     */
    BlackType: string;
    /**
     * 操作类型，A为新增，D为删除。
     */
    OperationType: string;
    /**
     * 黑名单值，BlackType为01时，填写11位手机号码。
     */
    BlackValue: string;
    /**
     * 备注。
     */
    BlackDescription: string;
    /**
     * 黑名单生效截止日期，格式为YYYY-MM-DD，不填默认为永久。
     */
    BlackValidDate?: string;
}
/**
 * 录音信息
 */
export interface SingleRecord {
    /**
     * 案件编号。
     */
    AccountNum: string;
    /**
     * 外呼日期。
     */
    BizDate: string;
    /**
     * 开始呼叫时间。
     */
    CallStartTime: string;
    /**
     * 主叫号码。
     */
    CallerPhone: string;
    /**
     * 呼叫方向，O为呼出，I为呼入。
     */
    Direction: string;
    /**
     * 通话时长。
     */
    Duration: number;
    /**
        * 产品ID。
  注意：此字段可能返回 null，表示取不到有效值。
        */
    ProductId: string;
    /**
        * 录音下载链接。
  注意：此字段可能返回 null，表示取不到有效值。
        */
    RecordCosUrl: string;
}
/**
 * QueryInstantData返回参数结构体
 */
export interface QueryInstantDataResponse {
    /**
        * 总数
  注意：此字段可能返回 null，表示取不到有效值。
        */
    TotalCount?: number;
    /**
        * 返回内容
  注意：此字段可能返回 null，表示取不到有效值。
        */
    Data?: string;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DownloadRecordList请求参数结构体
 */
export interface DownloadRecordListRequest {
    /**
     * 模块名，本接口取值：Record
     */
    Module: string;
    /**
     * 操作名，本接口取值：DownloadList
     */
    Operation: string;
    /**
     * 录音日期，格式为YYYY-MM-DD
     */
    BizDate: string;
    /**
     * 实例ID
     */
    InstId: string;
}
/**
 * UploadDataJson请求参数结构体
 */
export interface UploadDataJsonRequest {
    /**
     * 模块名，本接口取值：Data
     */
    Module: string;
    /**
     * 操作名，本接口取值：UploadJson
     */
    Operation: string;
    /**
     * 报文信息
     */
    Data: string;
    /**
     * <p>上传类型，不填默认到期/逾期提醒数据，取值范围：</p><ul style="margin-bottom:0px;"><li>data：到期/逾期提醒数据</li><li>repay：到期/逾期提醒停拨数据</li></ul>
     */
    UploadModel?: string;
    /**
     * 实例ID，不传默认为系统分配的初始实例。
     */
    InstanceId?: string;
}
/**
 * DescribeCreditResult返回参数结构体
 */
export interface DescribeCreditResultResponse {
    /**
     * <p>呼叫结果，取值范围：</p><ul style="margin-bottom:0px;"><li>NON：接通</li><li>DBU：号码忙</li><li>DRF：不在服务区</li><li>ANA：欠费未接听</li><li>REJ：拒接</li><li>SHU：关机</li><li>NAN：空号</li><li>HAL：停机</li><li>DAD：未接听</li><li>EXE：其他异常</li></ul>
     */
    ResultCode?: string;
    /**
        * 客户标识代码，多个标识码以英文逗号分隔，ResultCode为NON时才有。
  注意：此字段可能返回 null，表示取不到有效值。
        */
    ClientCode?: string;
    /**
        * 开始振铃时间，ResultCode为NON或DAD时才有此字段。
  注意：此字段可能返回 null，表示取不到有效值。
        */
    RingStartTime?: string;
    /**
     * 振铃时长
     */
    RingDuration?: number;
    /**
     * 接通时长
     */
    AnswerDuration?: number;
    /**
        * JSON格式的扩展信息字段，ResultCode为NON时才有。
  注意：此字段可能返回 null，表示取不到有效值。
        */
    ContextValue?: string;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DownloadDialogueText返回参数结构体
 */
export interface DownloadDialogueTextResponse {
    /**
     * 对话文本下载地址
     */
    TextReportUrl?: string;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * QueryInstantData请求参数结构体
 */
export interface QueryInstantDataRequest {
    /**
     * 模块名，本接口取值：Data
     */
    Module: string;
    /**
     * 操作名，本接口取值：Query
     */
    Operation: string;
    /**
     * 产品ID
     */
    ProductId?: string;
    /**
     * 实例ID，不传默认为系统分配的初始实例
     */
    InstanceId?: string;
    /**
     * 查询类型：callRecord 通话记录
     */
    QueryModel?: string;
    /**
     * 查询参数
     */
    Data?: string;
}
/**
 * ApplyBlackList返回参数结构体
 */
export interface ApplyBlackListResponse {
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeRecords请求参数结构体
 */
export interface DescribeRecordsRequest {
    /**
     * 模块名，本接口取值：Record
     */
    Module: string;
    /**
     * 操作名，本接口取值：List
     */
    Operation: string;
    /**
     * 产品ID
     */
    ProductId?: string;
    /**
     * 案件编号
     */
    AccountNum?: string;
    /**
     * 被叫号码
     */
    CalledPhone?: string;
    /**
     * 查询起始日期，格式为YYYY-MM-DD
     */
    StartBizDate?: string;
    /**
     * 查询结束日期，格式为YYYY-MM-DD
     */
    EndBizDate?: string;
    /**
     * 分页参数，索引，默认为0
     */
    Offset?: string;
    /**
     * 分页参数，页长，默认为20
     */
    Limit?: string;
    /**
     * 实例ID，不传默认为系统分配的初始实例
     */
    InstId?: string;
}
/**
 * DescribeCreditResult请求参数结构体
 */
export interface DescribeCreditResultRequest {
    /**
     * 模块名，本接口取值：Credit
     */
    Module: string;
    /**
     * 操作名，本接口取值：Get
     */
    Operation: string;
    /**
     * 实例ID
     */
    InstId: string;
    /**
     * 产品ID，形如P******。
     */
    ProductId: string;
    /**
     * 信审任务ID
     */
    CaseId: string;
    /**
     * 请求日期，格式为YYYY-MM-DD
     */
    RequestDate: string;
}
/**
 * ApplyBlackList请求参数结构体
 */
export interface ApplyBlackListRequest {
    /**
     * 模块名，本接口取值：account
     */
    Module: string;
    /**
     * 操作名，本接口取值：ApplyBlackList
     */
    Operation: string;
    /**
     * 黑名单列表
     */
    BlackList: Array<SingleBlackApply>;
    /**
     * 实例ID，不传默认为系统分配的初始实例
     */
    InstId?: string;
}
/**
 * ApplyCreditAudit请求参数结构体
 */
export interface ApplyCreditAuditRequest {
    /**
     * 模块名，本接口取值：Credit
     */
    Module: string;
    /**
     * 操作名，本接口取值：Apply
     */
    Operation: string;
    /**
     * 实例ID
     */
    InstId: string;
    /**
     * 产品ID，形如P******。
     */
    ProductId: string;
    /**
     * 信审任务ID，同一天内，同一InstId下，同一CaseId只能调用一次。
     */
    CaseId: string;
    /**
     * 回调地址
     */
    CallbackUrl: string;
    /**
     * JSON格式的业务字段。
     */
    Data: string;
}
/**
 * DownloadReport返回参数结构体
 */
export interface DownloadReportResponse {
    /**
        * 到期/逾期提醒日报下载地址
  注意：此字段可能返回 null，表示取不到有效值。
        */
    DailyReportUrl?: string;
    /**
        * 到期/逾期提醒结果下载地址
  注意：此字段可能返回 null，表示取不到有效值。
        */
    ResultReportUrl?: string;
    /**
        * 到期/逾期提醒明细下载地址
  注意：此字段可能返回 null，表示取不到有效值。
        */
    DetailReportUrl?: string;
    /**
        * 回访日报下载地址
  注意：此字段可能返回 null，表示取不到有效值。
        */
    CallbackDailyReportUrl?: string;
    /**
        * 回访结果下载地址
  注意：此字段可能返回 null，表示取不到有效值。
        */
    CallbackResultReportUrl?: string;
    /**
        * 回访明细下载地址
  注意：此字段可能返回 null，表示取不到有效值。
        */
    CallbackDetailReportUrl?: string;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DownloadRecordList返回参数结构体
 */
export interface DownloadRecordListResponse {
    /**
     * 录音列表下载地址
     */
    RecordListUrl?: string;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * UploadDataFile请求参数结构体
 */
export interface UploadDataFileRequest {
    /**
     * 模块名，本接口取值：Data
     */
    Module: string;
    /**
     * 操作名，本接口取值：Upload
     */
    Operation: string;
    /**
     * 文件名
     */
    FileName: string;
    /**
     * <p>上传类型，不填默认到期/逾期提醒文件，取值范围：</p><ul style="margin-bottom:0px;"><li>data：到期/逾期提醒文件</li><li>repay：到期/逾期提醒停拨文件</li><li>callback：回访文件</li><li>callstop：回访停拨文件</li><li>blacklist：黑名单文件</li></ul>
     */
    UploadModel?: string;
    /**
     * 文件，文件与文件地址上传只可选用一种，必须使用multipart/form-data协议来上传二进制流文件，建议使用xlsx格式，大小不超过5MB。
     */
    File?: File;
    /**
     * 文件上传地址，文件与文件地址上传只可选用一种，大小不超过50MB。
     */
    FileUrl?: string;
    /**
     * 实例ID，不传默认为系统分配的初始实例。
     */
    InstId?: string;
}
/**
 * DescribeTaskStatus请求参数结构体
 */
export interface DescribeTaskStatusRequest {
    /**
     * 模块名，本接口取值：Task
     */
    Module: string;
    /**
     * 操作名，本接口取值：DescribeTaskStatus
     */
    Operation: string;
    /**
     * 任务ID，"上传文件"接口返回的DataResId，形如abc-xyz123
     */
    TaskId: string;
    /**
     * 实例ID，不传默认为系统分配的初始实例。
     */
    InstId?: string;
}
/**
 * DescribeRecords返回参数结构体
 */
export interface DescribeRecordsResponse {
    /**
        * 录音列表。
  注意：此字段可能返回 null，表示取不到有效值。
        */
    RecordList?: Array<SingleRecord>;
    /**
     * 录音总量。
     */
    TotalCount?: number;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DownloadDialogueText请求参数结构体
 */
export interface DownloadDialogueTextRequest {
    /**
     * 模块名，本接口取值：Report
     */
    Module: string;
    /**
     * 操作名，本接口取值：DownloadTextReport
     */
    Operation: string;
    /**
     * 报告日期，格式为YYYY-MM-DD
     */
    ReportDate: string;
    /**
     * 实例ID
     */
    InstId: string;
}
