import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { CreateCRUserVerifyRequest, CreateBPFalseTicketResponse, DescribeCRWorkInfoResponse, CreateCRRightResponse, CreateCRWorkResponse, CreateCRRightRequest, CreateBPOfflineTicketResponse, DescribeBPFakeURLsRequest, ModifyCRBlockStatusResponse, ModifyCRObtainStatusRequest, DescribeCRWorkInfoRequest, ModifyBPOfflineAttachmentRequest, DescribeBPFakeURLsResponse, CreateBPOfflineAttachmentResponse, DescribeBPReportFakeURLsRequest, CreateBPFakeURLRequest, CreateBPProtectURLsResponse, DescribeBPProtectURLsResponse, DescribeCRMonitorsResponse, CreateCRCompanyVerifyResponse, CreateBPOfflineAttachmentRequest, CreateBPProtectURLsRequest, UpdateCRWorkResponse, ModifyCRBlockStatusRequest, ModifyCRMonitorRequest, DescribeCRMonitorDetailResponse, CreateCRWorkRequest, DescribeBPCompanyInfoRequest, DescribeBPReportFakeURLsResponse, DescribeCRMonitorDetailRequest, CreateCRBlockResponse, ModifyCRRightStatusRequest, DescribeCRMonitorsRequest, UpdateCRWorkRequest, CreateBPOfflineTicketRequest, CreateCRUserVerifyResponse, ModifyCRRightStatusResponse, DescribeBPCompanyInfoResponse, ModifyBPOfflineAttachmentResponse, CreateCRBlockRequest, CreateBPFakeURLResponse, CreateBPFalseTicketRequest, ModifyCRMonitorResponse, DescribeBPProtectURLsRequest, ModifyCRObtainStatusResponse, CreateCRCompanyVerifyRequest } from "./bma_models";
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
     * 查询企业信息
     */
    DescribeBPCompanyInfo(req?: DescribeBPCompanyInfoRequest, cb?: (error: string, rep: DescribeBPCompanyInfoResponse) => void): Promise<DescribeBPCompanyInfoResponse>;
    /**
     * 品牌经营管家-版权保护个人认证接口
     */
    CreateCRUserVerify(req: CreateCRUserVerifyRequest, cb?: (error: string, rep: CreateCRUserVerifyResponse) => void): Promise<CreateCRUserVerifyResponse>;
    /**
     * 版权保护-添加作品接口
     */
    CreateCRWork(req: CreateCRWorkRequest, cb?: (error: string, rep: CreateCRWorkResponse) => void): Promise<CreateCRWorkResponse>;
    /**
     * 添加下线工单
     */
    CreateBPOfflineTicket(req: CreateBPOfflineTicketRequest, cb?: (error: string, rep: CreateBPOfflineTicketResponse) => void): Promise<CreateBPOfflineTicketResponse>;
    /**
     * 版权保护-新建拦截接口
     */
    CreateCRBlock(req: CreateCRBlockRequest, cb?: (error: string, rep: CreateCRBlockResponse) => void): Promise<CreateCRBlockResponse>;
    /**
     * 申请取证
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
     * 版权保护-修改监测状态接口
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
     * 版权保护-拦截申请接口
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
     * 查询作品基本信息
     */
    DescribeCRWorkInfo(req: DescribeCRWorkInfoRequest, cb?: (error: string, rep: DescribeCRWorkInfoResponse) => void): Promise<DescribeCRWorkInfoResponse>;
    /**
     * 版权保护-查询监测列表接口
     */
    DescribeCRMonitors(req: DescribeCRMonitorsRequest, cb?: (error: string, rep: DescribeCRMonitorsResponse) => void): Promise<DescribeCRMonitorsResponse>;
    /**
     * 版权保护-维权申请接口
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
     * 查询仿冒链接
     */
    DescribeBPFakeURLs(req: DescribeBPFakeURLsRequest, cb?: (error: string, rep: DescribeBPFakeURLsResponse) => void): Promise<DescribeBPFakeURLsResponse>;
    /**
     * 品牌经营管家-版权保护模块企业认证接口
     */
    CreateCRCompanyVerify(req: CreateCRCompanyVerifyRequest, cb?: (error: string, rep: CreateCRCompanyVerifyResponse) => void): Promise<CreateCRCompanyVerifyResponse>;
}
