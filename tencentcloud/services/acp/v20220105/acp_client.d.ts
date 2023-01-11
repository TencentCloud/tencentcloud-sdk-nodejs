import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { CreateAppScanTaskRepeatRequest, DescribeScanTaskListResponse, DescribeResourceUsageInfoResponse, DescribeScanTaskListRequest, CreateAppScanTaskRequest, DescribeChannelTaskReportUrlResponse, DescribeFileTicketResponse, DescribeScanTaskStatusResponse, DescribeScanTaskReportUrlRequest, DescribeChannelTaskReportUrlRequest, DescribeScanTaskStatusRequest, DescribeFileTicketRequest, CreateAppScanTaskResponse, DescribeResourceUsageInfoRequest, DescribeScanTaskReportUrlResponse, CreateAppScanTaskRepeatResponse } from "./acp_models";
/**
 * acp client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 创建应用合规隐私诊断任务
     */
    CreateAppScanTask(req: CreateAppScanTaskRequest, cb?: (error: string, rep: CreateAppScanTaskResponse) => void): Promise<CreateAppScanTaskResponse>;
    /**
     * App应用合规隐私诊断重试任务
     */
    CreateAppScanTaskRepeat(req: CreateAppScanTaskRepeatRequest, cb?: (error: string, rep: CreateAppScanTaskRepeatResponse) => void): Promise<CreateAppScanTaskRepeatResponse>;
    /**
     * 获取子渠道的App合规诊断任务报告url
     */
    DescribeChannelTaskReportUrl(req: DescribeChannelTaskReportUrlRequest, cb?: (error: string, rep: DescribeChannelTaskReportUrlResponse) => void): Promise<DescribeChannelTaskReportUrlResponse>;
    /**
     * 查询应用合规平台用户资源的使用情况
     */
    DescribeResourceUsageInfo(req: DescribeResourceUsageInfoRequest, cb?: (error: string, rep: DescribeResourceUsageInfoResponse) => void): Promise<DescribeResourceUsageInfoResponse>;
    /**
     * 查询App隐私合规诊断任务状态
     */
    DescribeScanTaskStatus(req: DescribeScanTaskStatusRequest, cb?: (error: string, rep: DescribeScanTaskStatusResponse) => void): Promise<DescribeScanTaskStatusResponse>;
    /**
     * 获取App合规诊断任务报告url
     */
    DescribeScanTaskReportUrl(req: DescribeScanTaskReportUrlRequest, cb?: (error: string, rep: DescribeScanTaskReportUrlResponse) => void): Promise<DescribeScanTaskReportUrlResponse>;
    /**
     * 获取应用合规文件上传凭证，用于上传诊断文件
     */
    DescribeFileTicket(req: DescribeFileTicketRequest, cb?: (error: string, rep: DescribeFileTicketResponse) => void): Promise<DescribeFileTicketResponse>;
    /**
     * 获取App隐私合规诊断任务列表
     */
    DescribeScanTaskList(req: DescribeScanTaskListRequest, cb?: (error: string, rep: DescribeScanTaskListResponse) => void): Promise<DescribeScanTaskListResponse>;
}
