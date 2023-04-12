import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { ModifyCRWhiteListRequest, CreateCRUserVerifyRequest, CreateBPFalseTicketResponse, CreateCRRightFileRequest, CreateCRRightResponse, CreateCRWorkResponse, CreateCRRightRequest, CreateBPOfflineTicketResponse, CreateCRTortRequest, UpdateCRWorkRequest, DescribeBPFakeURLsRequest, ModifyCRBlockStatusResponse, ModifyCRObtainStatusRequest, DescribeCRWorkInfoRequest, ModifyBPOfflineAttachmentRequest, DescribeBPFakeURLsResponse, CreateBPOfflineAttachmentResponse, DescribeBPReportFakeURLsRequest, DescribeCRMonitorDetailResponse, CreateBPFakeURLRequest, CreateBPProtectURLsResponse, DescribeBPProtectURLsResponse, DescribeCRMonitorsResponse, CreateCRCompanyVerifyResponse, CreateBPOfflineAttachmentRequest, CreateCRDesktopCodeResponse, CreateBPProtectURLsRequest, UpdateCRWorkResponse, ModifyCRBlockStatusRequest, ModifyCRMonitorRequest, CreateCRDesktopCodeRequest, CreateCRWorkRequest, DescribeBPCompanyInfoRequest, DescribeCRObtainDetailRequest, DescribeBPReportFakeURLsResponse, DescribeCRMonitorDetailRequest, CreateCRBlockResponse, ModifyCRRightStatusRequest, DescribeCRMonitorsRequest, DescribeCRWorkInfoResponse, DescribeCRObtainDetailResponse, CreateCRRightFileResponse, ModifyCRWhiteListResponse, CreateBPOfflineTicketRequest, CreateCRUserVerifyResponse, ModifyCRRightStatusResponse, DescribeBPCompanyInfoResponse, ModifyBPOfflineAttachmentResponse, CreateCRBlockRequest, CreateBPFakeURLResponse, CreateCRTortResponse, CreateBPFalseTicketRequest, ModifyCRMonitorResponse, DescribeBPProtectURLsRequest, ModifyCRObtainStatusResponse, CreateCRCompanyVerifyRequest } from "./bma_models";
/**
 * bma client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 更新作品
     */
    UpdateCRWork(req: UpdateCRWorkRequest, cb?: (error: string, rep: UpdateCRWorkResponse) => void): Promise<UpdateCRWorkResponse>;
    /**
     * 新建过程取证码
     */
    CreateCRDesktopCode(req: CreateCRDesktopCodeRequest, cb?: (error: string, rep: CreateCRDesktopCodeResponse) => void): Promise<CreateCRDesktopCodeResponse>;
    /**
     * 查询企业信息
     */
    DescribeBPCompanyInfo(req?: DescribeBPCompanyInfoRequest, cb?: (error: string, rep: DescribeBPCompanyInfoResponse) => void): Promise<DescribeBPCompanyInfoResponse>;
    /**
     * 本接口用于个人认证，新接入用户必须认证后才可以进行后续操作（个人认证和企业认证二选一），只需认证一次即可
     */
    CreateCRUserVerify(req: CreateCRUserVerifyRequest, cb?: (error: string, rep: CreateCRUserVerifyResponse) => void): Promise<CreateCRUserVerifyResponse>;
    /**
     * 新建作品
     */
    CreateCRWork(req: CreateCRWorkRequest, cb?: (error: string, rep: CreateCRWorkResponse) => void): Promise<CreateCRWorkResponse>;
    /**
     * 添加下线工单
     */
    CreateBPOfflineTicket(req: CreateBPOfflineTicketRequest, cb?: (error: string, rep: CreateBPOfflineTicketResponse) => void): Promise<CreateBPOfflineTicketResponse>;
    /**
     * 查询取证详情
     */
    DescribeCRObtainDetail(req: DescribeCRObtainDetailRequest, cb?: (error: string, rep: DescribeCRObtainDetailResponse) => void): Promise<DescribeCRObtainDetailResponse>;
    /**
     * 新建协查处置

     */
    CreateCRBlock(req: CreateCRBlockRequest, cb?: (error: string, rep: CreateCRBlockResponse) => void): Promise<CreateCRBlockResponse>;
    /**
     * 取证申请
     */
    ModifyCRObtainStatus(req: ModifyCRObtainStatusRequest, cb?: (error: string, rep: ModifyCRObtainStatusResponse) => void): Promise<ModifyCRObtainStatusResponse>;
    /**
     * 版权保护-新建发函接口
     */
    CreateCRRight(req: CreateCRRightRequest, cb?: (error: string, rep: CreateCRRightResponse) => void): Promise<CreateCRRightResponse>;
    /**
     * 修改下线材料
     */
    ModifyBPOfflineAttachment(req: ModifyBPOfflineAttachmentRequest, cb?: (error: string, rep: ModifyBPOfflineAttachmentResponse) => void): Promise<ModifyBPOfflineAttachmentResponse>;
    /**
     * 开启/关闭监测
     */
    ModifyCRMonitor(req: ModifyCRMonitorRequest, cb?: (error: string, rep: ModifyCRMonitorResponse) => void): Promise<ModifyCRMonitorResponse>;
    /**
     * 版权保护-查询作品监测详情接口
     */
    DescribeCRMonitorDetail(req: DescribeCRMonitorDetailRequest, cb?: (error: string, rep: DescribeCRMonitorDetailResponse) => void): Promise<DescribeCRMonitorDetailResponse>;
    /**
     * 添加仿冒链接（举报）
     */
    CreateBPFakeURL(req: CreateBPFakeURLRequest, cb?: (error: string, rep: CreateBPFakeURLResponse) => void): Promise<CreateBPFakeURLResponse>;
    /**
     * 权属文件添加
     */
    CreateCRRightFile(req: CreateCRRightFileRequest, cb?: (error: string, rep: CreateCRRightFileResponse) => void): Promise<CreateCRRightFileResponse>;
    /**
     * 修改白名单列表
     */
    ModifyCRWhiteList(req: ModifyCRWhiteListRequest, cb?: (error: string, rep: ModifyCRWhiteListResponse) => void): Promise<ModifyCRWhiteListResponse>;
    /**
     * 协查处置申请
     */
    ModifyCRBlockStatus(req: ModifyCRBlockStatusRequest, cb?: (error: string, rep: ModifyCRBlockStatusResponse) => void): Promise<ModifyCRBlockStatusResponse>;
    /**
     * 添加误报工单
     */
    CreateBPFalseTicket(req: CreateBPFalseTicketRequest, cb?: (error: string, rep: CreateBPFalseTicketResponse) => void): Promise<CreateBPFalseTicketResponse>;
    /**
     * 添加保护网站
     */
    CreateBPProtectURLs(req: CreateBPProtectURLsRequest, cb?: (error: string, rep: CreateBPProtectURLsResponse) => void): Promise<CreateBPProtectURLsResponse>;
    /**
     * 查询举报列表
     */
    DescribeBPReportFakeURLs(req: DescribeBPReportFakeURLsRequest, cb?: (error: string, rep: DescribeBPReportFakeURLsResponse) => void): Promise<DescribeBPReportFakeURLsResponse>;
    /**
     * 查询仿冒链接
     */
    DescribeBPFakeURLs(req: DescribeBPFakeURLsRequest, cb?: (error: string, rep: DescribeBPFakeURLsResponse) => void): Promise<DescribeBPFakeURLsResponse>;
    /**
     * 查询作品基本信息
     */
    DescribeCRWorkInfo(req: DescribeCRWorkInfoRequest, cb?: (error: string, rep: DescribeCRWorkInfoResponse) => void): Promise<DescribeCRWorkInfoResponse>;
    /**
     * 版权保护-查询监测列表接口
     */
    DescribeCRMonitors(req: DescribeCRMonitorsRequest, cb?: (error: string, rep: DescribeCRMonitorsResponse) => void): Promise<DescribeCRMonitorsResponse>;
    /**
     * 发函申请
     */
    ModifyCRRightStatus(req: ModifyCRRightStatusRequest, cb?: (error: string, rep: ModifyCRRightStatusResponse) => void): Promise<ModifyCRRightStatusResponse>;
    /**
     * 添加下线材料
     */
    CreateBPOfflineAttachment(req: CreateBPOfflineAttachmentRequest, cb?: (error: string, rep: CreateBPOfflineAttachmentResponse) => void): Promise<CreateBPOfflineAttachmentResponse>;
    /**
     * 查询保护网站
     */
    DescribeBPProtectURLs(req: DescribeBPProtectURLsRequest, cb?: (error: string, rep: DescribeBPProtectURLsResponse) => void): Promise<DescribeBPProtectURLsResponse>;
    /**
     * 举报侵权链接
     */
    CreateCRTort(req: CreateCRTortRequest, cb?: (error: string, rep: CreateCRTortResponse) => void): Promise<CreateCRTortResponse>;
    /**
     * 本接口用于企业认证，新接入用户必须认证后才可以进行后续操作（个人认证和企业认证二选一），只需认证一次即可
     */
    CreateCRCompanyVerify(req: CreateCRCompanyVerifyRequest, cb?: (error: string, rep: CreateCRCompanyVerifyResponse) => void): Promise<CreateCRCompanyVerifyResponse>;
}
