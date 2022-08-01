import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { DescribeCRWorkInfoResponse, CreateCRRightResponse, CreateCRWorkResponse, CreateCRRightRequest, ModifyCRBlockStatusResponse, ModifyCRObtainStatusRequest, DescribeCRWorkInfoRequest, UpdateCRWorkResponse, DescribeCRMonitorsResponse, CreateCRCompanyVerifyResponse, ModifyCRBlockStatusRequest, ModifyCRMonitorRequest, DescribeCRMonitorDetailResponse, CreateCRWorkRequest, CreateCRBlockResponse, ModifyCRRightStatusRequest, DescribeCRMonitorsRequest, UpdateCRWorkRequest, DescribeCRMonitorDetailRequest, ModifyCRRightStatusResponse, CreateCRBlockRequest, ModifyCRMonitorResponse, ModifyCRObtainStatusResponse, CreateCRCompanyVerifyRequest } from "./bma_models";
/**
 * bma client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 查询作品基本信息
     */
    DescribeCRWorkInfo(req: DescribeCRWorkInfoRequest, cb?: (error: string, rep: DescribeCRWorkInfoResponse) => void): Promise<DescribeCRWorkInfoResponse>;
    /**
     * 申请取证
     */
    ModifyCRObtainStatus(req: ModifyCRObtainStatusRequest, cb?: (error: string, rep: ModifyCRObtainStatusResponse) => void): Promise<ModifyCRObtainStatusResponse>;
    /**
     * 版权保护-拦截申请接口
     */
    ModifyCRBlockStatus(req: ModifyCRBlockStatusRequest, cb?: (error: string, rep: ModifyCRBlockStatusResponse) => void): Promise<ModifyCRBlockStatusResponse>;
    /**
     * 版权保护-新建发函接口
     */
    CreateCRRight(req: CreateCRRightRequest, cb?: (error: string, rep: CreateCRRightResponse) => void): Promise<CreateCRRightResponse>;
    /**
     * 版权保护-查询监测列表接口
     */
    DescribeCRMonitors(req: DescribeCRMonitorsRequest, cb?: (error: string, rep: DescribeCRMonitorsResponse) => void): Promise<DescribeCRMonitorsResponse>;
    /**
     * 版权保护-维权申请接口
     */
    ModifyCRRightStatus(req: ModifyCRRightStatusRequest, cb?: (error: string, rep: ModifyCRRightStatusResponse) => void): Promise<ModifyCRRightStatusResponse>;
    /**
     * 更新作品
     */
    UpdateCRWork(req: UpdateCRWorkRequest, cb?: (error: string, rep: UpdateCRWorkResponse) => void): Promise<UpdateCRWorkResponse>;
    /**
     * 品牌经营管家-版权保护模块企业认证接口
     */
    CreateCRCompanyVerify(req: CreateCRCompanyVerifyRequest, cb?: (error: string, rep: CreateCRCompanyVerifyResponse) => void): Promise<CreateCRCompanyVerifyResponse>;
    /**
     * 版权保护-修改监测状态接口
     */
    ModifyCRMonitor(req: ModifyCRMonitorRequest, cb?: (error: string, rep: ModifyCRMonitorResponse) => void): Promise<ModifyCRMonitorResponse>;
    /**
     * 版权保护-新建拦截接口
     */
    CreateCRBlock(req: CreateCRBlockRequest, cb?: (error: string, rep: CreateCRBlockResponse) => void): Promise<CreateCRBlockResponse>;
    /**
     * 版权保护-添加作品接口
     */
    CreateCRWork(req: CreateCRWorkRequest, cb?: (error: string, rep: CreateCRWorkResponse) => void): Promise<CreateCRWorkResponse>;
    /**
     * 版权保护-查询作品监测详情接口
     */
    DescribeCRMonitorDetail(req: DescribeCRMonitorDetailRequest, cb?: (error: string, rep: DescribeCRMonitorDetailResponse) => void): Promise<DescribeCRMonitorDetailResponse>;
}
