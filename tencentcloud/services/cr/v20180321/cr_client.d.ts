import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { QueryCallListRequest, CreateBotTaskRequest, ChangeBotTaskStatusResponse, UploadFileRequest, UploadFileResponse, UploadDataJsonResponse, DescribeBotFlowResponse, DescribeTaskStatusResponse, QueryBlackListDataRequest, DownloadBotRecordRequest, DownloadReportRequest, ApplyCreditAuditResponse, UploadDataFileResponse, DownloadRecordListRequest, DescribeFileModelRequest, QueryInstantDataResponse, UploadBotFileResponse, QueryBlackListDataResponse, DescribeCreditResultResponse, UploadBotDataRequest, DownloadDialogueTextResponse, DescribeBotFlowRequest, ApplyBlackListResponse, DescribeRecordsRequest, QueryBotListRequest, QueryRecordListRequest, ExportBotDataResponse, QueryRecordListResponse, QueryInstantDataRequest, ExportBotDataRequest, ApplyBlackListDataRequest, ChangeBotCallStatusResponse, ApplyBlackListRequest, ApplyBlackListDataResponse, ApplyCreditAuditRequest, DownloadReportResponse, UpdateBotTaskResponse, UploadBotDataResponse, ChangeBotTaskStatusRequest, DownloadRecordListResponse, CreateBotTaskResponse, UpdateBotTaskRequest, DescribeCreditResultRequest, UploadBotFileRequest, UploadDataFileRequest, UploadDataJsonRequest, DescribeFileModelResponse, QueryBotListResponse, DescribeTaskStatusRequest, ChangeBotCallStatusRequest, DownloadBotRecordResponse, QueryProductsRequest, QueryCallListResponse, QueryProductsResponse, DescribeRecordsResponse, DownloadDialogueTextRequest } from "./cr_models";
/**
 * cr client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 客户通过调用该接口上传需催收文档，格式需为excel格式。接口返回任务ID。
     */
    UploadFile(req: UploadFileRequest, cb?: (error: string, rep: UploadFileResponse) => void): Promise<UploadFileResponse>;
    /**
     * 查询机器人任务状态列表
     */
    QueryBotList(req: QueryBotListRequest, cb?: (error: string, rep: QueryBotListResponse) => void): Promise<QueryBotListResponse>;
    /**
     * 查询机器人对话流
     */
    DescribeBotFlow(req: DescribeBotFlowRequest, cb?: (error: string, rep: DescribeBotFlowResponse) => void): Promise<DescribeBotFlowResponse>;
    /**
     * 查询录音列表
     */
    QueryRecordList(req: QueryRecordListRequest, cb?: (error: string, rep: QueryRecordListResponse) => void): Promise<QueryRecordListResponse>;
    /**
     * 实时数据查询
     */
    QueryInstantData(req: QueryInstantDataRequest, cb?: (error: string, rep: QueryInstantDataResponse) => void): Promise<QueryInstantDataResponse>;
    /**
     * 更新机器人任务
     */
    UpdateBotTask(req: UpdateBotTaskRequest, cb?: (error: string, rep: UpdateBotTaskResponse) => void): Promise<UpdateBotTaskResponse>;
    /**
     * 上传机器人任务数据
     */
    UploadBotData(req: UploadBotDataRequest, cb?: (error: string, rep: UploadBotDataResponse) => void): Promise<UploadBotDataResponse>;
    /**
     * 查看黑名单数据列表
     */
    QueryBlackListData(req: QueryBlackListDataRequest, cb?: (error: string, rep: QueryBlackListDataResponse) => void): Promise<QueryBlackListDataResponse>;
    /**
     * 用于获取指定案件的录音地址，次日早上8:00后可查询前日录音。
     */
    DescribeRecords(req: DescribeRecordsRequest, cb?: (error: string, rep: DescribeRecordsResponse) => void): Promise<DescribeRecordsResponse>;
    /**
     * 导出机器人数据
     */
    ExportBotData(req: ExportBotDataRequest, cb?: (error: string, rep: ExportBotDataResponse) => void): Promise<ExportBotDataResponse>;
    /**
     * 用于获取指定案件的对话文本内容，次日早上8:00后可查询前日对话文本内容。
     */
    DownloadDialogueText(req: DownloadDialogueTextRequest, cb?: (error: string, rep: DownloadDialogueTextResponse) => void): Promise<DownloadDialogueTextResponse>;
    /**
     * 上传机器人文件
     */
    UploadBotFile(req: UploadBotFileRequest, cb?: (error: string, rep: UploadBotFileResponse) => void): Promise<UploadBotFileResponse>;
    /**
     * 查询机器人文件模板
     */
    DescribeFileModel(req: DescribeFileModelRequest, cb?: (error: string, rep: DescribeFileModelResponse) => void): Promise<DescribeFileModelResponse>;
    /**
     * 更新机器人任务作业状态
     */
    ChangeBotCallStatus(req: ChangeBotCallStatusRequest, cb?: (error: string, rep: ChangeBotCallStatusResponse) => void): Promise<ChangeBotCallStatusResponse>;
    /**
     * 提交黑名单后，黑名单中有效期内的号码将停止拨打，适用于到期/逾期提醒、回访场景。
     */
    ApplyBlackList(req: ApplyBlackListRequest, cb?: (error: string, rep: ApplyBlackListResponse) => void): Promise<ApplyBlackListResponse>;
    /**
     * 更新机器人任务状态
     */
    ChangeBotTaskStatus(req: ChangeBotTaskStatusRequest, cb?: (error: string, rep: ChangeBotTaskStatusResponse) => void): Promise<ChangeBotTaskStatusResponse>;
    /**
     * 根据信审任务ID和请求日期，获取相关信审结果。
     */
    DescribeCreditResult(req: DescribeCreditResultRequest, cb?: (error: string, rep: DescribeCreditResultResponse) => void): Promise<DescribeCreditResultResponse>;
    /**
     * 根据上传文件接口的输出参数DataResId，获取相关上传结果。
     */
    DescribeTaskStatus(req: DescribeTaskStatusRequest, cb?: (error: string, rep: DescribeTaskStatusResponse) => void): Promise<DescribeTaskStatusResponse>;
    /**
     * 提交机器人黑名单申请
     */
    ApplyBlackListData(req: ApplyBlackListDataRequest, cb?: (error: string, rep: ApplyBlackListDataResponse) => void): Promise<ApplyBlackListDataResponse>;
    /**
     * 查询产品列表
     */
    QueryProducts(req: QueryProductsRequest, cb?: (error: string, rep: QueryProductsResponse) => void): Promise<QueryProductsResponse>;
    /**
     * <p>用于获取录音下载链接清单，次日早上8:00后可查询前日录音清单。</p>
<p>注意：录音清单中的录音下载链接仅次日20:00之前有效，请及时下载。</p>
     */
    DownloadRecordList(req: DownloadRecordListRequest, cb?: (error: string, rep: DownloadRecordListResponse) => void): Promise<DownloadRecordListResponse>;
    /**
     * 上传Json格式数据，接口返回数据任务ID
     */
    UploadDataJson(req: UploadDataJsonRequest, cb?: (error: string, rep: UploadDataJsonResponse) => void): Promise<UploadDataJsonResponse>;
    /**
     * 提交信审外呼申请，返回当次请求日期。
     */
    ApplyCreditAudit(req: ApplyCreditAuditRequest, cb?: (error: string, rep: ApplyCreditAuditResponse) => void): Promise<ApplyCreditAuditResponse>;
    /**
     * 用于下载结果报表。当日23:00后，可获取当日到期/逾期提醒结果，次日00:30后，可获取昨日回访结果。
     */
    DownloadReport(req: DownloadReportRequest, cb?: (error: string, rep: DownloadReportResponse) => void): Promise<DownloadReportResponse>;
    /**
     * 下载任务录音与文本，第二天12点后可使用此接口获取对应的录音与文本
     */
    DownloadBotRecord(req: DownloadBotRecordRequest, cb?: (error: string, rep: DownloadBotRecordResponse) => void): Promise<DownloadBotRecordResponse>;
    /**
     * 上传文件，接口返回数据任务ID，支持xlsx、xls、csv、zip格式。
     */
    UploadDataFile(req: UploadDataFileRequest, cb?: (error: string, rep: UploadDataFileResponse) => void): Promise<UploadDataFileResponse>;
    /**
     * 创建机器人任务
     */
    CreateBotTask(req: CreateBotTaskRequest, cb?: (error: string, rep: CreateBotTaskResponse) => void): Promise<CreateBotTaskResponse>;
    /**
     * 机器人任务查询
     */
    QueryCallList(req: QueryCallListRequest, cb?: (error: string, rep: QueryCallListResponse) => void): Promise<QueryCallListResponse>;
}
