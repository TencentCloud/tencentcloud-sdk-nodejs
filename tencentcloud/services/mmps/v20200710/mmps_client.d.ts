import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { DescribeFlySecMiniAppReportUrlRequest, DescribeScanTaskListRequest, DescribeFlySecMiniAppScanTaskParamRequest, CreateAppScanTaskRequest, DescribeScanTaskStatusRequest, DescribeBasicDiagnosisResourceUsageInfoResponse, CreateAppScanTaskRepeatResponse, DescribeBasicDiagnosisResourceUsageInfoRequest, DescribeResourceUsageInfoResponse, DescribeScanTaskReportUrlResponse, DescribeFlySecMiniAppScanTaskStatusRequest, CreateFlySecMiniAppScanTaskResponse, CreateFlySecMiniAppProfessionalScanTaskRequest, CreateFlySecMiniAppProfessionalScanTaskResponse, DescribeFlySecMiniAppScanTaskListRequest, DescribeFlySecMiniAppScanReportListRequest, DescribeFlySecMiniAppScanTaskParamResponse, CreateFlySecMiniAppScanTaskRepeatRequest, CreateFlySecMiniAppScanTaskRequest, CreateAppScanTaskRepeatRequest, DescribeScanTaskReportUrlRequest, DescribeFlySecMiniAppScanTaskListResponse, CreateAppScanTaskResponse, DescribeFlySecMiniAppReportUrlResponse, DescribeScanTaskListResponse, DescribeFlySecMiniAppScanTaskStatusResponse, DescribeFlySecMiniAppScanReportListResponse, CreateFlySecMiniAppScanTaskRepeatResponse, DescribeScanTaskStatusResponse, DescribeResourceUsageInfoRequest } from "./mmps_models";
/**
 * mmps client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 创建小程序隐私合规诊断任务
     */
    CreateAppScanTask(req: CreateAppScanTaskRequest, cb?: (error: string, rep: CreateAppScanTaskResponse) => void): Promise<CreateAppScanTaskResponse>;
    /**
     * 创建小程序安全深度诊断任务
     */
    CreateFlySecMiniAppProfessionalScanTask(req: CreateFlySecMiniAppProfessionalScanTaskRequest, cb?: (error: string, rep: CreateFlySecMiniAppProfessionalScanTaskResponse) => void): Promise<CreateFlySecMiniAppProfessionalScanTaskResponse>;
    /**
     * 查询指定小程序版本的翼扬诊断安全得分
     */
    DescribeFlySecMiniAppScanReportList(req: DescribeFlySecMiniAppScanReportListRequest, cb?: (error: string, rep: DescribeFlySecMiniAppScanReportListResponse) => void): Promise<DescribeFlySecMiniAppScanReportListResponse>;
    /**
     * 获取翼扬诊断任务报告链接地址
     */
    DescribeFlySecMiniAppReportUrl(req: DescribeFlySecMiniAppReportUrlRequest, cb?: (error: string, rep: DescribeFlySecMiniAppReportUrlResponse) => void): Promise<DescribeFlySecMiniAppReportUrlResponse>;
    /**
     * 查询翼扬安全诊断任务状态
     */
    DescribeFlySecMiniAppScanTaskStatus(req: DescribeFlySecMiniAppScanTaskStatusRequest, cb?: (error: string, rep: DescribeFlySecMiniAppScanTaskStatusResponse) => void): Promise<DescribeFlySecMiniAppScanTaskStatusResponse>;
    /**
     * 查询翼扬安全资源使用情况
     */
    DescribeResourceUsageInfo(req?: DescribeResourceUsageInfoRequest, cb?: (error: string, rep: DescribeResourceUsageInfoResponse) => void): Promise<DescribeResourceUsageInfoResponse>;
    /**
     * 创建小程序翼扬安全的基础或深度诊断任务
     */
    CreateFlySecMiniAppScanTask(req: CreateFlySecMiniAppScanTaskRequest, cb?: (error: string, rep: CreateFlySecMiniAppScanTaskResponse) => void): Promise<CreateFlySecMiniAppScanTaskResponse>;
    /**
     * 重新提交基础诊断任务
     */
    CreateFlySecMiniAppScanTaskRepeat(req: CreateFlySecMiniAppScanTaskRepeatRequest, cb?: (error: string, rep: CreateFlySecMiniAppScanTaskRepeatResponse) => void): Promise<CreateFlySecMiniAppScanTaskRepeatResponse>;
    /**
     * 获取小程序合规诊断任务报告url
     */
    DescribeScanTaskReportUrl(req: DescribeScanTaskReportUrlRequest, cb?: (error: string, rep: DescribeScanTaskReportUrlResponse) => void): Promise<DescribeScanTaskReportUrlResponse>;
    /**
     * 获取小程序隐私合规诊断任务列表
     */
    DescribeScanTaskList(req: DescribeScanTaskListRequest, cb?: (error: string, rep: DescribeScanTaskListResponse) => void): Promise<DescribeScanTaskListResponse>;
    /**
     * 获取翼扬安全诊断任务列表
     */
    DescribeFlySecMiniAppScanTaskList(req: DescribeFlySecMiniAppScanTaskListRequest, cb?: (error: string, rep: DescribeFlySecMiniAppScanTaskListResponse) => void): Promise<DescribeFlySecMiniAppScanTaskListResponse>;
    /**
     * 查询小程序隐私合规诊断任务状态
     */
    DescribeScanTaskStatus(req: DescribeScanTaskStatusRequest, cb?: (error: string, rep: DescribeScanTaskStatusResponse) => void): Promise<DescribeScanTaskStatusResponse>;
    /**
     * 查询翼扬安全基础诊断资源使用情况
     */
    DescribeBasicDiagnosisResourceUsageInfo(req: DescribeBasicDiagnosisResourceUsageInfoRequest, cb?: (error: string, rep: DescribeBasicDiagnosisResourceUsageInfoResponse) => void): Promise<DescribeBasicDiagnosisResourceUsageInfoResponse>;
    /**
     * 小程序隐私合规诊断重试任务
     */
    CreateAppScanTaskRepeat(req: CreateAppScanTaskRepeatRequest, cb?: (error: string, rep: CreateAppScanTaskRepeatResponse) => void): Promise<CreateAppScanTaskRepeatResponse>;
    /**
     * 获取用户提交的基础诊断任务参数信息
     */
    DescribeFlySecMiniAppScanTaskParam(req: DescribeFlySecMiniAppScanTaskParamRequest, cb?: (error: string, rep: DescribeFlySecMiniAppScanTaskParamResponse) => void): Promise<DescribeFlySecMiniAppScanTaskParamResponse>;
}
